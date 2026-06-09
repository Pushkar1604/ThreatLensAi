"use client";

import { useState } from "react";

import {
  investigateIncident,
} from "../lib/investigation";

export default function InvestigationPage() {

  const [report, setReport] =
    useState<any>(null);

  async function handleInvestigate() {

    const result =
      await investigateIncident();

    setReport(result);
  }

  return (
    <div>

      <h1 className="text-5xl font-bold mb-8">
        AI Investigation Center
      </h1>

      <button
        onClick={handleInvestigate}
        className="
          bg-cyan-500
          hover:bg-cyan-600
          px-6
          py-3
          rounded-lg
        "
      >
        Investigate Incident
      </button>

      {report && (

        <div className="
          bg-slate-900
          p-8
          rounded-xl
          mt-8
        ">

          <h2 className="
            text-3xl
            font-bold
            text-cyan-400
            mb-6
          ">
            Investigation Report
          </h2>

          <p>
            {report.incident_summary}
          </p>

          <p className="mt-4">
            {report.threat_assessment}
          </p>

          <p className="mt-4">
            MITRE: {report.mitre_mapping}
          </p>

          <p className="mt-4">
            Assets: {report.affected_assets}
          </p>

          <ul className="
            mt-6
            list-disc
            ml-6
          ">

            {report.recommended_actions?.map(
              (
                item: string,
                index: number
              ) => (
                <li key={index}>
                  {item}
                </li>
              )
            )}

          </ul>

        </div>

      )}

    </div>
  );
}