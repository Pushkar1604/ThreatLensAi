import { api } from "./api";

export async function investigateIncident() {

  const response = await api.post(
    "/investigate",
    {
      title: "Brute Force Attack",
      severity: "Critical",
    }
  );

  return response.data;
}