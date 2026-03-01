import urllib.request
import json
import codecs

url = "https://lgusobija.n-telecom.co.kr/common/component/info/AjaxAgcdInfo.aspx"

regions = {
    "J01": "Seoul", "J06": "Gyeonggi", "J03": "Incheon",
    "J07": "Gangwon", "J04": "Daejeon", "J15": "Gwangju",
    "J11": "Jeonnam", "J10": "Jeonbuk", "J09": "Chungnam",
    "J08": "Chungbuk", "J05": "Daegu", "J12": "Gyeongbuk",
    "J16": "Ulsan", "J02": "Busan", "J13": "Gyeongnam",
    "J14": "Jeju"
}

with codecs.open("ntelecom_full_list.md", "w", "utf-8") as f:
    f.write("# Ntelecom Official Centers\n")
    for area_cd, region_name in regions.items():
        payload = {
            "header": [{"type": "01"}],
            "body": [{"area_cd": area_cd, "agnm": ""}]
        }
        req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers={'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/json'})
        try:
            response = urllib.request.urlopen(req).read().decode('utf-8')
            data = json.loads(response)
            
            if data.get("RESULT") == "Y" and data.get("DATA"):
                f.write(f"\n## {region_name}\n")
                for center in data["DATA"]:
                    name = center.get("CNT_NAME", "")
                    tel = center.get("TEL", "")
                    addr1 = center.get("ADDR1", "")
                    addr2 = center.get("ADDR2", "")
                    f.write(f"- **{name}** | {tel} | {addr1} {addr2}\n")
        except Exception as e:
            f.write(f"\nFailed for {region_name}: {e}\n")

print("Saved to ntelecom_full_list.md")
