@echo off
:: Переходим в корень проекта
cd /d "C:\Users\user\koreahub"
:: Активируем виртуальное окружение
call .venv\Scripts\activate.bat
:: Запускаем монитор вакансий
python tools\vacancy_monitor\vacancy_monitor.py
