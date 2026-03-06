import re
import os
import json
from collections import Counter

registry_dir = r'c:\Users\user\koreahub\lib\data\registry'
index_ts = os.path.join(registry_dir, 'index.ts')

all_ids = []

# 1. Собираем ID из JSON файлов (схемы)
for filename in os.listdir(registry_dir):
    if filename.endswith('.json'):
        path = os.path.join(registry_dir, filename)
        try:
            with open(path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                # Если в JSON есть ID (например, в некоторых схемах)
                if isinstance(data, dict) and 'id' in data:
                    all_ids.append(data['id'])
        except Exception as e:
            print(f"Error reading {filename}: {e}")

# 2. Собираем ID из index.ts (данные)
if os.path.exists(index_ts):
    with open(index_ts, 'r', encoding='utf-8') as f:
        content = f.read()
        # Ищем все id: '...'
        found_ids = re.findall(r"id:\s*'([^']+)'", content)
        all_ids.extend(found_ids)

# 3. Анализируем дубликаты
counts = Counter(all_ids)
duplicates = {id: count for id, count in counts.items() if count > 1}

print(f"--- Global Registry Audit ---")
print(f"Total IDs scanned: {len(all_ids)}")

if duplicates:
    print("\n[!] Found duplicates across all registry files:")
    for id, count in duplicates.items():
        print(f"ID: '{id}' | Count: {count}")
else:
    print("\n[v] No duplicates found across any registry files. System is clean.")
