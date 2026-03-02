import MainLayout from "../layout/MainLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-10 text-blue-400">
        Security Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard title="Total Scans" value="142" />
        <StatCard title="Threats Detected" value="37" />
        <StatCard title="Safe Files" value="105" />
      </div>
    </MainLayout>
  );
}