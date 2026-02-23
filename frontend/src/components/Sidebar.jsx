import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-zinc-800 min-h-screen p-6 text-white">
      <h2 className="text-xl font-bold mb-6">AI Security</h2>
      <nav className="space-y-3">
        <Link to="/dashboard" className="block hover:text-blue-400">Dashboard</Link>
        <Link to="/upload" className="block hover:text-blue-400">Upload</Link>
        <Link to="/reports" className="block hover:text-blue-400">Reports</Link>
        <Link to="/profile" className="block hover:text-blue-400">Profile</Link>
      </nav>
    </div>
  );
}