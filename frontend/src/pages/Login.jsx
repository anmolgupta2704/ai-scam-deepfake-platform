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
      <div className="bg-gray-800 p-8 rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <input
          className="w-full mb-3 p-2 rounded bg-gray-700"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full mb-4 p-2 rounded bg-gray-700"
          placeholder="Password"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </AuthLayout>
  );
}