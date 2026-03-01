import re

input_md = "ntelecom_full_list.md"
output_ts = "lib/data/registry/index.ts"

# 1. Read the TS file
with open(output_ts, "r", encoding="utf-8") as f:
    content = f.read()

# 2. Extract existing entities before telecom_ntele_
start_idx = content.find("id: 'telecom_ntele_seoul_bp'")
if start_idx == -1:
    # try the first generated one from last run
    start_idx = content.find("id: 'telecom_ntele_seoul____bp'")
if start_idx == -1:
    print("Could not find start of telecom block")
    exit(1)

# Find the end of the array `];`
end_idx = content.rfind("];")
if end_idx == -1:
    print("Could not find end of array")
    exit(1)

# To be safe, let's find the start of the object `{` just before id
block_start = content.rfind("{", 0, start_idx)

# We want to replace from block_start to end_idx with our new entities + "];"
prefix = content[:block_start]
suffix = content[end_idx:]

# 3. Read the MD file and generate JS objects
with open(input_md, "r", encoding="utf-8") as f:
    lines = f.readlines()

entities = []
current_region = ""
region_map = {
    "Seoul": "seoul",
    "Gyeonggi": "gyeonggi",
    "Incheon": "incheon",
    "Daegu": "daegu",
    "Busan": "busan",
    "Gwangju": "gwangju",
    "Daejeon": "daejeon",
    "Ulsan": "ulsan"
}

def get_region_code(name):
    n = name.strip()
    return region_map.get(n, n.lower())

seen_ids = {}

for line in lines:
    line = line.strip()
    if line.startswith("## "):
        current_region = line.replace("## ", "").strip()
    elif line.startswith("- **"):
        parts = line.split("|")
        if len(parts) >= 3:
            raw_name = parts[0].replace("- **", "").replace("**", "").strip()
            tel = parts[1].strip()
            addr = parts[2].strip()
            
            base_id_str = f"telecom_ntele_{current_region.lower()}_{re.sub(r'[^a-zA-Z0-9]', '_', raw_name.lower())}"
            if base_id_str in seen_ids:
                seen_ids[base_id_str] += 1
                id_str = f"{base_id_str}_{seen_ids[base_id_str]}"
            else:
                seen_ids[base_id_str] = 1
                id_str = base_id_str
            
            entity = f"""{{
        id: '{id_str}',
        verticalCode: 'telecom',
        data: {{
            name: {{ ru: 'Ntelecom ({raw_name})', en: 'Ntelecom {raw_name}', ko: '앤텔레콤 {raw_name}센터', kk: 'Ntelecom ({raw_name})', uz: 'Ntelecom ({raw_name})' }},
            nameKo: '앤텔레콤 {raw_name}',
            region: '{get_region_code(current_region)}',
            address: {{ ru: '{addr}', en: '{addr}', kk: '{addr}', uz: '{addr}' }},
            addressKo: '{addr}',
            phone: '010-4039-4737',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: {{ ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' }},
            naverMapUrl: 'https://map.naver.com/v5/search/{addr.replace(" ", "%20")}'
        }}
    }}"""
            entities.append(entity)

new_content = prefix + ",\n    ".join(entities) + "\n" + suffix

with open(output_ts, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Replaced {len(entities)} entities successfully in {output_ts}")
