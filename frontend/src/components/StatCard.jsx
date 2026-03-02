export default function StatCard({ title, value }) {
  return (
    <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-all duration-300">
      <h3 className="text-gray-400 text-lg">{title}</h3>
      <p className="text-4xl font-bold mt-4 text-blue-400">{value}</p>
    </div>
  );
}