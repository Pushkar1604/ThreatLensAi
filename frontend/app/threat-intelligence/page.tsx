const threats = [
  {
    cve: "CVE-2025-1234",
    severity: "Critical",
    status: "Active Exploitation",
    description:
      "Remote Code Execution vulnerability affecting enterprise servers.",
  },

  {
    cve: "CVE-2025-4567",
    severity: "High",
    status: "Patch Available",
    description:
      "Authentication bypass vulnerability in VPN gateways.",
  },

  {
    cve: "CVE-2025-7890",
    severity: "Medium",
    status: "Under Investigation",
    description:
      "Potential information disclosure vulnerability.",
  },

  {
    cve: "CVE-2025-9988",
    severity: "Critical",
    status: "Zero-Day Detected",
    description:
      "Threat actors actively exploiting systems in the wild.",
  },
];

export default function ThreatIntelligencePage() {
  return (
    <div>

      <h1 className="text-5xl font-bold mb-8">
        Threat Intelligence Feed
      </h1>
      <div className="bg-gradient-to-r
        from-red-900/30
        to-orange-900/30
        p-8
        rounded-2xl
        mb-8
      ">

        <h2 className="text-4xl font-bold">
          Global Threat Watch
        </h2>

        <p className="text-gray-400 mt-2">
          Monitoring critical vulnerabilities and emerging cyber threats.
        </p>

      </div>
      <div className="space-y-6">

        {threats.map((threat, index) => (

          <div
            key={index}
            className="
              bg-slate-900
              rounded-xl
              p-6
              border
              border-red-500/20
            "
          >

            <div className="flex justify-between">

              <h2 className="text-cyan-400 text-xl font-bold">
                {threat.cve}
              </h2>

              <span className="
                bg-red-500/20
                text-red-400
                px-3
                py-1
                rounded-full
              ">
                {threat.severity}
              </span>

            </div>

            <p className="mt-4 text-gray-300">
              {threat.description}
            </p>

            <p className="mt-4 text-yellow-400">
              {threat.status}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}