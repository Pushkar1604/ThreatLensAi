"use client";

import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "Russia" },
    style: {
      background: "#ef4444",
      color: "white",
    },
  },

  {
    id: "2",
    position: { x: 500, y: 200 },
    data: { label: "Corporate Network" },
    style: {
      background: "#22c55e",
      color: "white",
    },
  },

  {
    id: "3",
    position: { x: 100, y: 350 },
    data: { label: "China" },
    style: {
      background: "#ef4444",
      color: "white",
    },
  },

  {
    id: "4",
    position: { x: 900, y: 100 },
    data: { label: "Admin Server" },
    style: {
      background: "#06b6d4",
      color: "white",
    },
  },
];

const edges = [
  {
    id: "e1",
    source: "1",
    target: "2",
    animated: true,
  },

  {
    id: "e2",
    source: "3",
    target: "2",
    animated: true,
  },

  {
    id: "e3",
    source: "2",
    target: "4",
    animated: true,
  },
];

export default function ThreatMapPage() {
  return (
    <div>

      <h1 className="text-5xl font-bold mb-8">
        Global Threat Map
      </h1>

      <div className="h-[80vh] bg-slate-900 rounded-xl">

        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
        >

          <Background />

          <Controls />

        </ReactFlow>

      </div>

    </div>
  );
}