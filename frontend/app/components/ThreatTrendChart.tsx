"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { day: "Mon", attacks: 45 },
  { day: "Tue", attacks: 62 },
  { day: "Wed", attacks: 58 },
  { day: "Thu", attacks: 80 },
  { day: "Fri", attacks: 72 },
  { day: "Sat", attacks: 91 },
  { day: "Sun", attacks: 66 },
];

export default function ThreatTrendChart() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 mt-8">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Weekly Threat Activity
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <LineChart data={data}>

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="attacks"
            stroke="#06b6d4"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}