import urllib.request
from bs4 import BeautifulSoup
import re

url = "https://lgusobija.n-telecom.co.kr/view/merge/info/AgcdInfo_pc.aspx"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

soup = BeautifulSoup(html, 'html.parser')

print("=== Ntelecom Centers ===")
# Depending on the structure we might just dump text or find the table rows
# Let's write the html to check it
with open("temp_ntelecom_iframe.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Saved iframe HTML to temp_ntelecom_iframe.html")

