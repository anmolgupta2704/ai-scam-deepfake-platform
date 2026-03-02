export default function StatCard({ title, value, color }) {
  return (
    <div className="glass p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-gray-400">{title}</h3>
      <p className={`text-4xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
}