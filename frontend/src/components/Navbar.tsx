import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-zinc-800 px-6 py-4 flex justify-between">
      <h1 className="font-bold text-xl">🛡️ Scam & Deepfake Detector</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/scan-text" className="hover:text-blue-400">Text Scan</Link>
        <Link to="/scan-image" className="hover:text-blue-400">Image Scan</Link>
        <Link to="/history" className="hover:text-blue-400">History</Link>
        <Link to="/login" className="text-red-400">Logout</Link>
      </div>
    </nav>
  );
}
