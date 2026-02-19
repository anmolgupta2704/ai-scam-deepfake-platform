export default function Register() {
  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Register</h2>
      <input className="w-full mb-3 p-2 text-black rounded" placeholder="Name" />
      <input className="w-full mb-3 p-2 text-black rounded" placeholder="Email" />
      <input className="w-full mb-3 p-2 text-black rounded" placeholder="Password" type="password" />
      <button className="bg-green-600 w-full py-2 rounded">Create Account</button>
    </div>
  );
}
