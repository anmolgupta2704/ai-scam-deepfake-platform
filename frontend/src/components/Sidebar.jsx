import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Upload, FileText, User } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Upload", path: "/upload", icon: Upload },
    { name: "Reports", path: "/reports", icon: FileText },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <div className="w-64 min-h-screen glass p-6">
      <h2 className="text-2xl font-bold mb-8 text-blue-400">
        AI Shield
      </h2>

      <nav className="space-y-4">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-white/10"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}