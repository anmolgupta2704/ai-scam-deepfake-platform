import { Link } from "react-router-dom";
import { LayoutDashboard, Upload, FileText, User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-6 space-y-6">
      <h2 className="text-2xl font-bold">AI Shield</h2>

      <nav className="space-y-4">
        <Link to="/dashboard" className="flex gap-2 hover:text-blue-400">
          <LayoutDashboard size={18} /> Dashboard
        </Link>

        <Link to="/upload" className="flex gap-2 hover:text-blue-400">
          <Upload size={18} /> Upload
        </Link>

        <Link to="/reports" className="flex gap-2 hover:text-blue-400">
          <FileText size={18} /> Reports
        </Link>

        <Link to="/profile" className="flex gap-2 hover:text-blue-400">
          <User size={18} /> Profile
        </Link>
      </nav>
    </div>
  );
}