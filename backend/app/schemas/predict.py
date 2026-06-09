from pydantic import BaseModel

class ThreatRequest(BaseModel):
    failed_logins: int
    ports_scanned: int
    file_changes: int
    outbound_traffic: int