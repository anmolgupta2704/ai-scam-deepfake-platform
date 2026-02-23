import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 24 }}>
      <h1>Login</h1>
      <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
    </div>
  );
}