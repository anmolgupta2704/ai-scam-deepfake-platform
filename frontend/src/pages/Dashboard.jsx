import MainLayout from "../layout/MainLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8 text-blue-400">
        Security Overview
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <StatCard
          title="Total Scans"
          value="142"
          color="text-blue-400"
        />
        <StatCard
          title="Threats Detected"
          value="37"
          color="text-red-400"
        />
        <StatCard
          title="Safe Files"
          value="105"
          color="text-green-400"
        />
      </div>
    </MainLayout>
  );
}