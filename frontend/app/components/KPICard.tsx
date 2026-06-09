interface Props {
  title: string;
  value: string;
}

export default function KPICard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-cyan-500/10">

      <h3 className="text-gray-400">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-3 text-cyan-400">
        {value}
      </p>

    </div>
  );
}