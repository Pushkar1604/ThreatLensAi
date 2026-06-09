import pandas as pd
import random

data = []

# Benign Traffic
for _ in range(250):
    data.append([
        random.randint(0, 15),
        random.randint(0, 20),
        random.randint(0, 5),
        random.randint(0, 50),
        "Benign"
    ])

# Brute Force
for _ in range(200):
    data.append([
        random.randint(80, 300),
        random.randint(0, 20),
        random.randint(0, 5),
        random.randint(0, 50),
        "Brute Force"
    ])

# Port Scan
for _ in range(200):
    data.append([
        random.randint(0, 20),
        random.randint(100, 500),
        random.randint(0, 5),
        random.randint(0, 50),
        "Port Scan"
    ])

# Malware
for _ in range(150):
    data.append([
        random.randint(0, 20),
        random.randint(0, 50),
        random.randint(30, 150),
        random.randint(10, 100),
        "Malware"
    ])

# Phishing
for _ in range(100):
    data.append([
        random.randint(10, 50),
        random.randint(0, 20),
        random.randint(0, 20),
        random.randint(20, 100),
        "Phishing"
    ])

# Data Exfiltration
for _ in range(100):
    data.append([
        random.randint(0, 20),
        random.randint(0, 20),
        random.randint(0, 10),
        random.randint(300, 1000),
        "Data Exfiltration"
    ])

df = pd.DataFrame(
    data,
    columns=[
        "failed_logins",
        "ports_scanned",
        "file_changes",
        "outbound_traffic",
        "label"
    ]
)

df.to_csv(
    "app/data/threat_dataset.csv",
    index=False
)

print("Dataset created.")
print(df["label"].value_counts())