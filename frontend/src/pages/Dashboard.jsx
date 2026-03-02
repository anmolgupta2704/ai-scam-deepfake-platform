import MainLayout from "../layout/MainLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Security Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Scans" value="142" color="blue" />
        <StatCard title="Threats Detected" value="37" color="red" />
        <StatCard title="Safe Files" value="105" color="green" />
      </div>
    </MainLayout>
  );
}