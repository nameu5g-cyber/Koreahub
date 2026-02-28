"""
Vacancy Monitor Bot — монитор вакансий в Telegram-группах.

Слушает указанные группы от имени пользователя (Telethon),
фильтрует сообщения по ключевым словам о вакансиях
и пересылает подходящие — в личку через бота.

Автор: KoreaHub Tools
"""

import os
import re
import asyncio
import logging
from datetime import datetime
from dotenv import load_dotenv
from telethon import TelegramClient, events
from telethon.tl.types import Message

# ─── Конфигурация ───────────────────────────────────────────────────────────
import pathlib

# Читаем общий конфиг из scratch-папки
_CONFIG_PATH = pathlib.Path(r"C:\Users\user\.gemini\antigravity\scratch\tg_config.env")
load_dotenv(dotenv_path=_CONFIG_PATH)

API_ID:      int = int(os.getenv("TG_API_ID", "0"))
API_HASH:    str = os.getenv("TG_API_HASH", "")
BOT_TOKEN:   str = os.getenv("TG_BOT_TOKEN", "")
MY_CHAT_ID:  int = int(os.getenv("TG_MY_CHAT_ID", "0"))

# Абсолютный путь к авторизованной сессии в scratch
_SCRATCH = pathlib.Path(r"C:\Users\user\.gemini\antigravity\scratch")
SESSION:     str = str(_SCRATCH / os.getenv("SESSION_NAME", "session_multi_export"))

# Группы для мониторинга: username или числовой ID через запятую
_raw_groups = os.getenv("MONITORED_GROUPS", "")
MONITORED_GROUPS: list[str] = [
    g.strip() for g in _raw_groups.split(",") if g.strip()
]

# ─── Ключевые слова ──────────────────────────────────────────────────────────

# Сообщение ДОЛЖНО содержать хотя бы одно из этих слов (включаем)
INCLUDE_PATTERNS: list[str] = [
    r"\bF-?1\b",            # F1, F-1
    r"\bФ-?1\b",            # Ф1, Ф-1
    r"безвиз",
    r"нелегал",
    r"любая\s+виза",
    r"\bвиза\b",
    r"рабочая\s+виза",
    r"вакансия",
    r"вакансии",
    r"трудоустройство",
    r"ищем\s+\w+",
    r"требуется",
    r"набор\s+\w+",
]

# Сообщение НЕ ДОЛЖНО содержать эти слова (исключаем целиком)
EXCLUDE_PATTERNS: list[str] = [
    r"женщина",
    r"девушка",
    r"женщин[а-я]*",
    r"девушк[а-я]*",
]

include_re = re.compile("|".join(INCLUDE_PATTERNS), re.IGNORECASE | re.UNICODE)
exclude_re = re.compile("|".join(EXCLUDE_PATTERNS), re.IGNORECASE | re.UNICODE)

# ─── Логирование ─────────────────────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler("vacancy_monitor.log", encoding="utf-8"),
    ],
)
log = logging.getLogger(__name__)


# ─── Вспомогательные функции ─────────────────────────────────────────────────

def is_vacancy_relevant(text: str) -> bool:
    """
    Проверяет, является ли сообщение релевантной вакансией.
    Возвращает True, если текст содержит ключевое слово-вакансии
    И не содержит слов-исключений.
    """
    if not text:
        return False
    has_include = bool(include_re.search(text))
    has_exclude = bool(exclude_re.search(text))
    return has_include and not has_exclude


def build_notification(event: events.NewMessage.Event) -> str:
    """Формирует текст уведомления для пересылки в личку."""
    chat = getattr(event.chat, "title", "Неизвестный чат")
    sender = getattr(event.sender, "username", None) or \
             getattr(event.sender, "first_name", "Аноним")
    timestamp = datetime.now().strftime("%H:%M %d.%m.%Y")
    text = event.message.text or ""

    return (
        f"📌 *ВАКАНСИЯ найдена!*\n\n"
        f"🏷 *Чат:* {chat}\n"
        f"👤 *Автор:* @{sender}\n"
        f"🕐 *Время:* {timestamp}\n\n"
        f"💬 *Сообщение:*\n{text[:1000]}"  # обрезаем до 1000 символов
    )


# ─── Основная логика ─────────────────────────────────────────────────────────

async def main() -> None:
    """Точка входа: запускает клиент и регистрирует обработчик событий."""

    if not all([API_ID, API_HASH, BOT_TOKEN, MY_CHAT_ID]):
        log.error(
            "❌ Неполная конфигурация! Проверьте .env файл. "
            "Нужны: TG_API_ID, TG_API_HASH, TG_BOT_TOKEN, TG_MY_CHAT_ID"
        )
        return

    if not MONITORED_GROUPS:
        log.warning("⚠️ MONITORED_GROUPS пуст — не за чем следить. "
                    "Добавьте группы в .env")

    # Клиент-пользователь (читает группы)
    user_client = TelegramClient(SESSION, API_ID, API_HASH)
    # Клиент-бот (шлёт уведомления)
    bot_client = TelegramClient("bot_session", API_ID, API_HASH)

    async with user_client, bot_client:
        await bot_client.start(bot_token=BOT_TOKEN)
        await user_client.start()

        log.info(f"✅ Мониторинг запущен. Слушаю {len(MONITORED_GROUPS)} групп(ы).")
        log.info(f"📡 Группы: {MONITORED_GROUPS}")

        @user_client.on(events.NewMessage(chats=MONITORED_GROUPS))
        async def handler(event: events.NewMessage.Event) -> None:
            try:
                text = event.message.text or ""
                if not is_vacancy_relevant(text):
                    return

                log.info(f"🔔 Найдена вакансия в: {getattr(event.chat, 'title', '?')}")
                notification = build_notification(event)

                await bot_client.send_message(
                    MY_CHAT_ID,
                    notification,
                    parse_mode="markdown",
                    link_preview=False,
                )
            except Exception as exc:
                log.error(f"Ошибка при обработке сообщения: {exc}")

        log.info("🟢 Бот активен. Нажмите Ctrl+C для остановки.")
        await user_client.run_until_disconnected()


if __name__ == "__main__":
    asyncio.run(main())
