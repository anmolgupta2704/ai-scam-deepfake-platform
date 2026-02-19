const stats = [
  { title: "Total Scans", value: "1,284" },
  { title: "Scams Detected", value: "342" },
  { title: "Deepfakes Found", value: "76" },
  { title: "Accuracy", value: "94%" },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.title}
            className="rounded-xl p-5 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 shadow"
          >
            <p className="text-sm text-zinc-400">{s.title}</p>
            <h3 className="text-2xl font-semibold mt-2">{s.value}</h3>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-64">
          <p className="text-zinc-400">📈 Scam Trends (Chart Placeholder)</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-64">
          <p className="text-zinc-400">🧠 AI Model Accuracy (Chart Placeholder)</p>
        </div>
      </div>
    </div>
  );
}
