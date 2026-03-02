import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}