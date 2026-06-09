"use client";

import { useEffect, useState } from "react";
import { getIncidents } from "../lib/incidents";

export default function IncidentsPage() {

  const [incidents, setIncidents] =
    useState<any[]>([]);

  useEffect(() => {

    getIncidents()
      .then(setIncidents)
      .catch(console.error);

  }, []);

  return (
    <div>

      <h1 className="text-5xl font-bold mb-8">
        Active Incidents
      </h1>

      <div className="space-y-6">

        {incidents.map((incident) => (

          <div
            key={incident.id}
            className="bg-slate-900 p-6 rounded-xl"
          >

            <h2 className="text-red-400 font-bold">
              {incident.id}
            </h2>

            <p className="mt-2">
              {incident.title}
            </p>

            <p className="mt-2 text-gray-400">
              Severity: {incident.severity}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}