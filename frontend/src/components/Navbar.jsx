export default function Navbar() {
  return (
    <div className="glass p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">
        AI Scam & Deepfake Detection Platform
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-300">Admin</span>
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  );
}