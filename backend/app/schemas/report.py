from pydantic import BaseModel

class ThreatReportRequest(
    BaseModel
):
    prediction: str
    confidence: float
    risk_score: int
    risk_level: str