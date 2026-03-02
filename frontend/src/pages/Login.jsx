import { useNavigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "dummyToken");
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
  <div className="bg-gray-800/70 backdrop-blur-lg p-10 rounded-2xl w-96 shadow-2xl border border-gray-700">
    
    <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
      Secure Login
    </h2>

    <input
      className="w-full mb-4 p-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Email"
    />

    <input
      type="password"
      className="w-full mb-6 p-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Password"
    />

    <button
      onClick={handleLogin}
      className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-all duration-300 font-semibold"
    >
      Login
    </button>
  </div>
</AuthLayout>
  );
}