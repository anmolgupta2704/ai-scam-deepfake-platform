export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="bg-zinc-900 p-8 rounded-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input className="w-full mb-3 p-2 rounded bg-zinc-800" placeholder="Email" />
        <input className="w-full mb-4 p-2 rounded bg-zinc-800" placeholder="Password" type="password" />
        <button className="w-full bg-blue-600 py-2 rounded">Login</button>
      </div>
    </div>
  );
}
