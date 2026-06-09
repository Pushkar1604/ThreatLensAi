export default function AlertsPage() {
  return (
    <div>

      <h1 className="text-5xl font-bold mb-8">
        Security Alerts
      </h1>

      <div className="space-y-6">

        <div className="bg-red-500/10 border border-red-500 p-6 rounded-xl">
          <h2 className="text-red-400 text-xl font-bold">
            Critical Alert
          </h2>

          <p className="mt-2">
            Multiple failed login attempts detected.
          </p>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500 p-6 rounded-xl">
          <h2 className="text-yellow-400 text-xl font-bold">
            High Risk Activity
          </h2>

          <p className="mt-2">
            Unusual outbound traffic detected.
          </p>
        </div>

      </div>

    </div>
  );
}