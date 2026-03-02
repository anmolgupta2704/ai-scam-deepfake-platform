import MainLayout from "../layout/MainLayout";

export default function Upload() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Upload Media</h1>

      <div className="bg-white p-8 rounded-xl shadow-md">
        <input type="file" className="mb-4" />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Scan Now
        </button>
      </div>
    </MainLayout>
  );
}