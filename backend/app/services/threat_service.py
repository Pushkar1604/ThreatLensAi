def get_soc_metrics():

    return {
        "critical_threats": 17,
        "active_incidents": 42,
        "blocked_attacks": 318,
        "risk_score": 89
    }


def get_threat_analytics():

    return [
        {
            "attack": "Brute Force",
            "count": 120
        },
        {
            "attack": "Port Scan",
            "count": 90
        },
        {
            "attack": "Malware",
            "count": 45
        },
        {
            "attack": "Phishing",
            "count": 65
        }
    ]


def get_incidents():

    return [
        {
            "id": "INC-001",
            "title": "Brute Force Attack",
            "severity": "Critical"
        },
        {
            "id": "INC-002",
            "title": "Malware Execution",
            "severity": "High"
        }
    ]

def get_alerts():

    return [

        {
            "id": 1,
            "title": "Brute Force Attack",
            "severity": "Critical",
            "time": "2 min ago"
        },

        {
            "id": 2,
            "title": "Malware Activity",
            "severity": "High",
            "time": "5 min ago"
        },

        {
            "id": 3,
            "title": "Suspicious PowerShell",
            "severity": "Medium",
            "time": "10 min ago"
        }

    ]