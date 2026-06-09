import joblib
import pandas as pd

model = joblib.load(
    "app/models/threat_model.pkl"
)

encoder = joblib.load(
    "app/models/label_encoder.pkl"
)

def predict_threat(
    failed_logins,
    ports_scanned,
    file_changes,
    outbound_traffic
):

    data = pd.DataFrame([{
        "failed_logins": failed_logins,
        "ports_scanned": ports_scanned,
        "file_changes": file_changes,
        "outbound_traffic": outbound_traffic
    }])

    prediction = model.predict(data)[0]

    probabilities = model.predict_proba(data)[0]

    confidence = round(
        max(probabilities) * 100,
        2
    )

    label = encoder.inverse_transform(
        [prediction]
    )[0]

    risk_score = min(
        int(confidence),
        100
    )

    if risk_score >= 90:
        risk_level = "Critical"

    elif risk_score >= 70:
        risk_level = "High"

    elif risk_score >= 40:
        risk_level = "Medium"

    else:
        risk_level = "Low"

    return {
        "prediction": label,
        "confidence": confidence,
        "risk_score": risk_score,
        "risk_level": risk_level
    }   