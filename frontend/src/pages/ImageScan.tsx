import { useState } from "react";
import ResultCard from "../components/ResultCard";

export default function ImageScan() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);

  const analyze = async () => {
    setResult({ label: "Deepfake", confidence: 0.76, reason: "Face artifact patterns detected" });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Deepfake Image Detection</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />
      <button
        onClick={analyze}
        className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded"
      >
        Analyze Image
      </button>

      {result && <ResultCard result={result} />}
    </div>
  );
}
