export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">

      <h1 className="text-7xl font-bold text-cyan-400">
        ThreatLens AI
      </h1>

      <p className="text-xl text-gray-400 mt-6">
        AI-Powered Security Operations Center
      </p>

      <div className="grid grid-cols-4 gap-8 mt-16">

        <div>
          <h2 className="text-4xl font-bold text-green-400">
            99.7%
          </h2>
          <p>Detection Accuracy</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-cyan-400">
            15K+
          </h2>
          <p>Events Processed</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-red-400">
            247
          </h2>
          <p>Threats Detected</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-yellow-400">
            AI
          </h2>
          <p>Investigation Engine</p>
        </div>

      </div>

    </div>
  );
}