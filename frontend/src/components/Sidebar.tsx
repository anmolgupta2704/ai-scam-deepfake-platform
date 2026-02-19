import { Link, useLocation } from "react-router-dom";

const nav = [
  { name: "Dashboard", path: "/" },
  { name: "Text Scan", path: "/scan-text" },
  { name: "Image Scan", path: "/scan-image" },
  { name: "History", path: "/history" },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 bg-zinc-900/70 backdrop-blur border-r border-zinc-800 p-5">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-2xl">🛡️</span>
        <h1 className="font-bold text-lg">AI Safety</h1>
      </div>
      <nav className="space-y-2">
        {nav.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-2 rounded-lg transition ${
              pathname === item.path
                ? "bg-blue-600 text-white"
                : "text-zinc-300 hover:bg-zinc-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
