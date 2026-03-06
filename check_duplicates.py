import re
from collections import Counter

file_path = r'c:\Users\user\koreahub\lib\data\registry\index.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

ids = re.findall(r"id:\s*'([^']+)'", content)
counts = Counter(ids)
duplicates = {id: count for id, count in counts.items() if count > 1}

if duplicates:
    print("Found duplicates:")
    for id, count in duplicates.items():
        print(f"{id}: {count}")
else:
    print("No duplicates found.")
