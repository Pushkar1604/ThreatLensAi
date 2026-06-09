const techniques = [
  {
    tactic: "Initial Access",
    technique: "T1190",
    name: "Exploit Public Facing Application",
    severity: "Critical",
  },
  {
    tactic: "Execution",
    technique: "T1059",
    name: "Command and Scripting Interpreter",
    severity: "High",
  },
  {
    tactic: "Persistence",
    technique: "T1547",
    name: "Boot or Logon Autostart",
    severity: "Medium",
  },
  {
    tactic: "Privilege Escalation",
    technique: "T1068",
    name: "Exploitation for Privilege Escalation",
    severity: "Critical",
  },
  {
    tactic: "Credential Access",
    technique: "T1110",
    name: "Brute Force",
    severity: "Critical",
  },
  {
    tactic: "Discovery",
    technique: "T1087",
    name: "Account Discovery",
    severity: "Medium",
  },
  {
    tactic: "Collection",
    technique: "T1005",
    name: "Data from Local System",
    severity: "High",
  },
  {
    tactic: "Exfiltration",
    technique: "T1041",
    name: "Exfiltration Over C2 Channel",
    severity: "Critical",
  },
];

export default function MitrePage() {

  return (
    <div>

      <h1 className="text-5xl font-bold mb-8">
        MITRE ATT&CK Heatmap
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {techniques.map((item, index) => (

          <div
            key={index}
            className="
              bg-slate-900
              rounded-xl
              p-6
              border
              border-red-500/20
              hover:border-cyan-500
              transition-all
            "
          >

            <p className="text-gray-400 text-sm">
              {item.tactic}
            </p>

            <h2 className="text-cyan-400 text-xl font-bold mt-2">
              {item.technique}
            </h2>

            <p className="mt-2">
              {item.name}
            </p>

            <div className="mt-4">

              <span className="
                bg-red-500/20
                text-red-400
                px-3
                py-1
                rounded-full
                text-sm
              ">
                {item.severity}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}