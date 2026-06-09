import KPICard from "../components/KPICard";
import ThreatTrendChart from "../components/ThreatTrendChart";

export default function Dashboard() {
  return (
    <div>

      {/* Executive SOC Command Center */}

      <div className="
        bg-gradient-to-r
        from-red-900/30
        to-cyan-900/30
        border
        border-cyan-500/20
        rounded-2xl
        p-8
        mb-8
      ">

        <h1 className="text-6xl font-bold">
          ThreatLens AI
        </h1>

        <p className="text-gray-400 mt-3">
          Real-Time Security Operations Center
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8">

          <div>
            <p className="text-gray-400">
              Global Threat Level
            </p>

            <p className="text-red-500 text-3xl font-bold mt-2">
              CRITICAL
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              Security Posture
            </p>

            <p className="text-cyan-400 text-3xl font-bold mt-2">
              89%
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              Last Updated
            </p>

            <p className="text-green-400 text-3xl font-bold mt-2">
              LIVE
            </p>
          </div>

        </div>

      </div>

      {/* Dashboard Title */}

      <h1 className="text-5xl font-bold mb-8">
        Threat Dashboard
      </h1>

      {/* KPI Cards */}

      <div className="grid md:grid-cols-4 gap-6">

        <KPICard
          title="Critical Threats"
          value="17"
        />

        <KPICard
          title="Active Incidents"
          value="42"
        />

        <KPICard
          title="Blocked Attacks"
          value="318"
        />

        <KPICard
          title="Risk Score"
          value="89"
        />

      </div>

      {/* Security Status Section */}

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="bg-slate-900 rounded-xl p-6 border border-red-500/20">

          <h2 className="text-xl font-bold text-red-400 mb-4">
            Active Threat Summary
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Brute Force Attacks Detected</li>
            <li>• Malware Activity Monitoring</li>
            <li>• Suspicious PowerShell Execution</li>
            <li>• Data Exfiltration Watchlist</li>
          </ul>

        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-cyan-500/20">

          <h2 className="text-xl font-bold text-cyan-400 mb-4">
            Security Recommendations
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Review authentication logs</li>
            <li>• Patch critical systems</li>
            <li>• Monitor privileged accounts</li>
            <li>• Validate endpoint security</li>
          </ul>

        </div>

      </div>
      <ThreatTrendChart />

    </div>
  );
}