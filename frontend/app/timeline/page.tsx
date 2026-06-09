const events = [

  {
    time: "09:15",
    event: "Failed Login Attempt"
  },

  {
    time: "09:17",
    event: "Multiple Login Failures"
  },

  {
    time: "09:19",
    event: "Account Lockout"
  },

  {
    time: "09:22",
    event: "Privilege Escalation"
  },

  {
    time: "09:25",
    event: "Data Access Attempt"
  }

];

export default function TimelinePage() {

  return (
    <div>

      <h1 className="text-5xl font-bold mb-8">
        Attack Timeline
      </h1>

      <div className="space-y-4">

        {events.map((item, index) => (

          <div
            key={index}
            className="
              bg-slate-900
              p-5
              rounded-xl
            "
          >

            <p className="text-cyan-400">
              {item.time}
            </p>

            <p>
              {item.event}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}