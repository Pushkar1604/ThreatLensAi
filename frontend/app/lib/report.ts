import { api } from "./api";

export async function generateReport(
  prediction: string,
  confidence: number,
  riskScore: number,
  riskLevel: string
) {

  const response = await api.post(
    "/generate-report",
    {
      prediction,
      confidence,
      risk_score: riskScore,
      risk_level: riskLevel,
    }
  );

  return response.data;
}