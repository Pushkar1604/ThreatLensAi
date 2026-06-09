import Link from "next/link";
import {
  LayoutDashboard,
  ShieldAlert,
  BarChart3,
  Fingerprint,
  Search,
  Bell,
  Globe,
  Shield,
  Clock3,
  Globe2,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-72 bg-slate-950 p-8 flex flex-col h-screen border-r border-cyan-500/20">

      <h1 className="text-cyan-400 text-4xl font-bold">
        ThreatLens AI
      </h1>

      <p className="text-gray-500 mt-2 text-sm">
        Security Operations Center
      </p>

      <nav className="mt-12 space-y-8">

        <Link href="/dashboard" className="flex gap-3 hover:text-cyan-400">
          <LayoutDashboard />
          Dashboard
        </Link>

        <Link href="/incidents" className="flex gap-3 hover:text-cyan-400">
          <ShieldAlert />
          Incidents
        </Link>

        <Link href="/analytics" className="flex gap-3 hover:text-cyan-400">
          <BarChart3 />
          Analytics
        </Link>

        <Link href="/mitre" className="flex gap-3 hover:text-cyan-400">
          <Fingerprint />
          MITRE
        </Link>

        <Link href="/investigation" className="flex gap-3 hover:text-cyan-400">
          <Search />
          Investigation
        </Link>

        <Link href="/alerts" className="flex gap-3 hover:text-cyan-400">
          <Bell />
          Alerts
        </Link>
        <Link href="/threat-map" className="flex gap-3 hover:text-cyan-400">
            <Globe />
            Threat Map
        </Link>
        <Link href="/threat-detection" className="flex gap-3 items-center">
          <Shield />
          Threat Detection
        </Link>
        <Link href="/timeline" className="flex gap-3 items-center">
          <Clock3 />
          Attack Timeline
        </Link>
        <Link href="/threat-intelligence"className="flex gap-3 items-center">
          <Globe2 />
          Threat Intelligence
          </Link>

      </nav>

      <div className="mt-auto">

        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">

          <p className="text-green-400 font-bold">
            ● SOC Online
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Threat Detection Active
          </p>

        </div>

      </div>

    </div>
  );
}