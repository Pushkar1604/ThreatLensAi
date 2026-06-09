"use client";

import { useState } from "react";
import { api } from "../lib/api";
import { generateReport } from "../lib/report";

export default function ThreatDetectionPage() {
  const [form, setForm] = useState({
    failed_logins: 0,
    ports_scanned: 0,
    file_changes: 0,
    outbound_traffic: 0,
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const [report, setReport] =useState<any>(null);
  const [loadingReport, setLoadingReport] =useState(false);


  async function handleGenerateReport() {

  if (!result) return;

  try {

    setLoadingReport(true);

    const data =await generateReport(
        result.prediction,
        result.confidence,
        result.risk_score,
        result.risk_level
      );

    setReport(data);

  } catch (error) {

    console.error(error);

  } finally {

    setLoadingReport(false);

  }
}

  async function handlePredict() {
    try {
      setLoading(true);

      const response = await api.post(
        "/predict-threat",
        form
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function getRiskColor(level: string) {
    switch (level) {
      case "Critical":
        return "text-red-500";
      case "High":
        return "text-orange-400";
      case "Medium":
        return "text-yellow-400";
      default:
        return "text-green-400";
    }
  }

  return (
    <div>
      <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Threat Detection Console
      </h1>

      <div className="bg-slate-900 border border-cyan-500/20 p-8 rounded-2xl">

        <h2 className="text-xl text-cyan-400 mb-6">
          Analyze Security Events Using ML Intelligence
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="number"
            placeholder="Failed Logins"
            className="p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
            onChange={(e) =>
              setForm({
                ...form,
                failed_logins: Number(e.target.value),
              })
            }
          />

          <input
            type="number"
            placeholder="Ports Scanned"
            className="p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
            onChange={(e) =>
              setForm({
                ...form,
                ports_scanned: Number(e.target.value),
              })
            }
          />

          <input
            type="number"
            placeholder="File Changes"
            className="p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
            onChange={(e) =>
              setForm({
                ...form,
                file_changes: Number(e.target.value),
              })
            }
          />

          <input
            type="number"
            placeholder="Outbound Traffic"
            className="p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
            onChange={(e) =>
              setForm({
                ...form,
                outbound_traffic: Number(e.target.value),
              })
            }
          />

        </div>

        <button
          onClick={handlePredict}
          disabled={loading}
          className="
            mt-8
            bg-cyan-500
            hover:bg-cyan-600
            px-8
            py-4
            rounded-xl
            font-bold
            transition-all
          "
        >
          {loading
            ? "Analyzing..."
            : "Analyze Threat"}
        </button>

      </div>

      {result && (

        <>
          <div className="grid md:grid-cols-4 gap-6 mt-8">

            <div className="bg-slate-900 p-6 rounded-xl border border-cyan-500/20">
              <h2 className="text-gray-400">
                Threat Type
              </h2>

              <p className="text-3xl font-bold mt-2 text-cyan-400">
                {result.prediction}
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-green-500/20">
              <h2 className="text-gray-400">
                Confidence
              </h2>

              <p className="text-3xl font-bold mt-2 text-green-400">
                {result.confidence}%
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-red-500/20">
              <h2 className="text-gray-400">
                Risk Score
              </h2>

              <p className="text-3xl font-bold mt-2 text-red-400">
                {result.risk_score}
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-orange-500/20">
              <h2 className="text-gray-400">
                Risk Level
              </h2>

              <p
                className={`text-3xl font-bold mt-2 ${getRiskColor(
                  result.risk_level
                )}`}
              >
                {result.risk_level}
              </p>
            </div>

          </div>

          <div className="bg-slate-900 border border-cyan-500/20 p-8 rounded-2xl mt-8">

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              AI Threat Assessment
            </h2>

            <p className="text-gray-300 leading-8">
              The machine learning engine classified this event as
              <span className="text-cyan-400 font-bold">
                {" "}{result.prediction}
              </span>
              {" "}with a confidence score of
              <span className="text-green-400 font-bold">
                {" "}{result.confidence}%
              </span>.
              The calculated risk score is
              <span className="text-red-400 font-bold">
                {" "}{result.risk_score}
              </span>,
              indicating a
              <span className={getRiskColor(result.risk_level)}>
                {" "}{result.risk_level}
              </span>
              {" "}security threat.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">
                Recommended Actions
              </h3>

              <ul className="space-y-2 list-disc ml-6 text-gray-300">
                <li>Review authentication logs</li>
                <li>Inspect suspicious network activity</li>
                <li>Validate user access privileges</li>
                <li>Monitor endpoint behaviour</li>
                <li>Escalate critical findings to SOC team</li>
              </ul>
            </div>

          </div>
        </>
      )}

      <button onClick={handleGenerateReport} className="mt-8 bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl font-bold">
            Generate AI Threat Report
      </button>

      {loadingReport && (

  <div className="
    bg-slate-900
    p-6
    rounded-xl
    mt-6
  ">
    Generating AI Report...
  </div>

)}

{report && (

  <div className="
    bg-slate-900
    border
    border-red-500
    p-8
    rounded-2xl
    mt-8
  ">

    <h2 className="
      text-3xl
      font-bold
      text-red-400
      mb-6
    ">
      AI Threat Report
    </h2>

    <div className="space-y-6">

      <div>
        <h3 className="text-cyan-400 font-bold">
          Executive Summary
        </h3>

        <p>
          {report.executive_summary}
        </p>
      </div>

      <div>
        <h3 className="text-cyan-400 font-bold">
          Threat Assessment
        </h3>

        <p>
          {report.threat_assessment}
        </p>
      </div>

      <div>
        <h3 className="text-cyan-400 font-bold">
          MITRE Mapping
        </h3>

        <p>
          {report.mitre_mapping}
        </p>
      </div>

      <div>
        <h3 className="text-cyan-400 font-bold">
          Impact Analysis
        </h3>

        <p>
          {report.impact_analysis}
        </p>
      </div>

      <div>
        <h3 className="text-cyan-400 font-bold">
          Recommended Actions
        </h3>

        <ul className="list-disc ml-6">

          {report.recommended_actions?.map(
            (
              action: string,
              index: number
            ) => (
              <li key={index}>
                {action}
              </li>
            )
          )}

        </ul>
      </div>

    </div>

  </div>

)}
    </div>
    
  );
} 