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
      <div className="glass p-10 rounded-xl w-96 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">
          Secure Login
        </h2>

        <input
          className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-600"
          placeholder="Email"
        />

        <input
          type="password"
          className="w-full mb-6 p-3 rounded bg-gray-800 border border-gray-600"
          placeholder="Password"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-all duration-300"
        >
          Login
        </button>
      </div>
    </AuthLayout>
  );
}