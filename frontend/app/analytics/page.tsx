"use client";

import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { getAnalytics } from "../lib/analytics";

export default function AnalyticsPage() {

  const [data, setData] = useState([]);

  useEffect(() => {

    getAnalytics()
      .then(setData)
      .catch(console.error);

  }, []);

  return (
    <div>

      <h1 className="text-5xl font-bold mb-8">
        Threat Analytics
      </h1>

      <div className="bg-slate-900 p-8 rounded-xl">

        <ResponsiveContainer
          width="100%"
          height={500}
        >

          <BarChart data={data}>

            <XAxis dataKey="attack" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="count" />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}