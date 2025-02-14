"use client";

import { useState } from "react";

export const AI_Content = () => {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://gemini.api/endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: inputText }),
      });

      const data = await res.json();
      setResponse(data.result || "No response from Gemini API.");
    } catch (error) {
      setResponse("An error occurred while connecting to the Gemini API.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-16 px-6">
      <div className="max-w-2xl w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6">Ask Gemini AI</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="inputText" className="block text-lg font-medium mb-2">
              Enter your prompt
            </label>
            <textarea
              id="inputText"
              name="inputText"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full h-32 px-4 py-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your question or prompt for the Gemini API..."
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg text-lg font-medium transition-all ${
              isLoading ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {response && (
          <div className="mt-8 bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Response:</h2>
            <p className="whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </div>
    </section>
  );
};
