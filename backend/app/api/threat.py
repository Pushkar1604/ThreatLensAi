from fastapi import APIRouter

from app.schemas.predict import ThreatRequest
from app.schemas.report import ThreatReportRequest

from app.services.ml_service import predict_threat

from app.services.threat_service import (
    get_soc_metrics,
    get_threat_analytics,
    get_incidents,
    get_alerts
)

from app.services.gemini_service import (
    generate_threat_report
)

router = APIRouter()


# Dashboard Metrics

@router.get("/metrics")
def metrics():
    return get_soc_metrics()


# Analytics

@router.get("/analytics")
def analytics():
    return get_threat_analytics()


# Incidents

@router.get("/incidents")
def incidents():
    return get_incidents()


# Alerts

@router.get("/alerts")
def alerts():
    return get_alerts()


# ML Threat Detection

@router.post("/predict-threat")
def predict_threat_route(
    request: ThreatRequest
):
    return predict_threat(
        request.failed_logins,
        request.ports_scanned,
        request.file_changes,
        request.outbound_traffic
    )


# Gemini AI Threat Report

@router.post("/generate-report")
def generate_report(
    request: ThreatReportRequest
):
    return generate_threat_report(
        request.prediction,
        request.confidence,
        request.risk_score,
        request.risk_level
    )