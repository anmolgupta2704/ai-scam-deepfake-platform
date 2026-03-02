import MainLayout from "../layout/MainLayout";

export default function Upload() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6 text-blue-400">
        Upload Media for Analysis
      </h1>

      <div className="glass p-10 rounded-xl text-center border-dashed border-2 border-blue-500">
        <p className="mb-4 text-gray-300">
          Drag & Drop your file here
        </p>

        <input type="file" className="mb-4" />

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-all duration-300">
          Scan Now
        </button>
      </div>
    </MainLayout>
  );
}