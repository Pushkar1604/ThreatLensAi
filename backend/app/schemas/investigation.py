from pydantic import BaseModel

class InvestigationRequest(
    BaseModel
):
    title: str
    severity: str