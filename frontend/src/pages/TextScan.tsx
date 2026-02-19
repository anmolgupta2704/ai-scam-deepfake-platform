import { useState } from "react";

export default function TextScan() {
  const [text, setText] = useState("");

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Text Scam Detection</h1>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
        <textarea
          className="w-full min-h-[160px] bg-zinc-950 border border-zinc-800 rounded-lg p-3 outline-none"
          placeholder="Paste suspicious message here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="mt-4 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700">
          Analyze Text
        </button>
      </div>
    </div>
  );
}
