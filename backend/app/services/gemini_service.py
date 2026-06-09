import os
import json

from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

def generate_threat_report(
    prediction,
    confidence,
    risk_score,
    risk_level
):

    prompt = f"""
You are an expert SOC analyst.

Threat Type: {prediction}
Confidence: {confidence}
Risk Score: {risk_score}
Risk Level: {risk_level}

Return ONLY valid JSON.

{{
  "executive_summary":"",
  "threat_assessment":"",
  "mitre_mapping":"",
  "impact_analysis":"",
  "recommended_actions":[],
  "confidence_score":0
}}
"""

    try:

        response = model.generate_content(
            prompt
        )

        text = response.text.strip()

        if text.startswith("```json"):
            text = text.replace(
                "```json",
                ""
            ).replace(
                "```",
                ""
            )

        return json.loads(text)

    except Exception:

        return {
            "executive_summary":
            "Potential cybersecurity threat detected.",

            "threat_assessment":
            "Further investigation required.",

            "mitre_mapping":
            "T1110",

            "impact_analysis":
            "Possible compromise of critical systems.",

            "recommended_actions": [
                "Review logs",
                "Contain affected systems",
                "Notify SOC analysts"
            ],

            "confidence_score": confidence
        }