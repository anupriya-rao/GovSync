import React, { useState } from "react";

export default function GovScore() {
  const [docs, setDocs] = useState({
    gst: false,
    udyam: false,
    license: false,
    pan: false,
    msme: false,
    trade: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const weights = {
    gst: 25,
    udyam: 20,
    license: 15,
    pan: 10,
    msme: 20,
    trade: 10,
  };

  const handleChange = (key) => {
    const updatedDocs = { ...docs, [key]: !docs[key] };
    setDocs(updatedDocs);

    // Real-time score preview
    let total = 0;
    for (const k in updatedDocs) {
      if (updatedDocs[k]) total += weights[k];
    }
    setScore(Math.round(total));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#4169E1] via-[#b3e5c9] to-[#e8fff3]">
      <div className="flex-grow p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-extrabold text-[#2a2f45] mb-6 text-center">
            GovScore Checker
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {Object.entries(docs).map(([key, value]) => (
              <label key={key} className="flex items-center bg-gray-100 p-3 rounded shadow-sm">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleChange(key)}
                  className="mr-3 w-5 h-5 accent-blue-600"
                />
                <span className="font-medium text-gray-800">{key.toUpperCase()} Certificate</span>
              </label>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-[#4169E1] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Calculate GovScore
            </button>
          </div>

          {score !== null && (
            <div className="text-center mt-8">
              <h2 className="text-xl font-bold text-[#43CD80] mb-2">Your GovScore:</h2>
              <p className="text-4xl font-extrabold text-green-600">{score} / 100</p>

              {submitted && (
                <div className="mt-4 text-left bg-blue-50 p-4 rounded shadow-sm">
                  <h3 className="font-semibold mb-2 text-blue-800">Suggestions:</h3>
                  {score === 100 ? (
                    <p className="text-green-700 font-medium">🎉 You're fully compliant. Great job!</p>
                  ) : (
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      {Object.entries(docs)
                        .filter(([key, value]) => !value)
                        .map(([key]) => (
                          <li key={key}>
                            Consider obtaining your <strong>{key.toUpperCase()}</strong> certificate to boost your compliance.
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#4169E1] to-[#43CD80] text-white text-sm py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; {new Date().getFullYear()} GovMSE. All rights reserved.</div>
          <div>
            <p>
              Contact us:{" "}
              <a href="mailto:support@govmse.in" className="underline">
                support@govmse.in
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
