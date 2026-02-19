export default function ResultCard({ result }: { result: any }) {
  return (
    <div className="mt-6 bg-zinc-900 p-4 rounded-xl border border-zinc-700">
      <p className="text-lg font-semibold">
        Result: <span className="text-red-400">{result.label}</span>
      </p>
      <p className="text-sm text-zinc-400">
        Confidence: {(result.confidence * 100).toFixed(1)}%
      </p>
      <p className="mt-2 text-sm">{result.reason}</p>
    </div>
  );
}
