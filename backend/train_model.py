import pandas as pd
import joblib

from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load dataset

df = pd.read_csv(
    "app/data/threat_dataset.csv"
)

# Features

X = df[
    [
        "failed_logins",
        "ports_scanned",
        "file_changes",
        "outbound_traffic"
    ]
]

# Labels

encoder = LabelEncoder()

y = encoder.fit_transform(
    df["label"]
)

# Train/Test Split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Model

model = RandomForestClassifier(
    n_estimators=200,
    random_state=42
)

model.fit(
    X_train,
    y_train
)

# Evaluate

predictions = model.predict(
    X_test
)

accuracy = accuracy_score(
    y_test,
    predictions
)

print(
    f"Accuracy: {accuracy:.4f}"
)

# Save Model

joblib.dump(
    model,
    "app/models/threat_model.pkl"
)

joblib.dump(
    encoder,
    "app/models/label_encoder.pkl"
)

print("Model saved successfully.")