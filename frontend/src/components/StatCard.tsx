export default function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-zinc-900 p-5 rounded-xl shadow">
      <p className="text-sm text-zinc-400">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
  );
}
