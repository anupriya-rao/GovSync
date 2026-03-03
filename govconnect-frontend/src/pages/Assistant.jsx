import { useState, useRef, useEffect } from "react";

function PromptCard({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <div className="border rounded px-4 py-3 bg-white shadow-sm">
      <p
        className="font-medium cursor-pointer text-indigo-700 hover:underline"
        onClick={() => setShow(!show)}
      >
        {show ? "🔽" : "▶️"} {question}
      </p>
      {show && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
}

export default function Assistant() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState("");
  const [responseList, setResponseList] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (step === 1 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [step]);

  const handleScoreSubmit = () => {
    const scoreInt = parseInt(score);
    if (isNaN(scoreInt) || scoreInt < 0 || scoreInt > 100) {
      setResponseList(["🚫 Enter a valid score between 0 and 100."]);
      return;
    }

    let resp = [];

    if (scoreInt === 100) {
      resp = [
        "🎉 Outstanding — You’ve attained full compliance!",
        "✅ Ensure all certificates are periodically reviewed for expiry.",
        "📌 Maintain digital copies of all documents for audit readiness.",
        "💼 Engage with state MSME clusters to explore export credits.",
        "📈 Consider applying for ISO or other certifications to expand your markets."
      ];
    } else if (scoreInt >= 80) {
      resp = [
        "Great score! Some documents might still be missing or nearing expiry.",
        "✔️ Double‑check validity of Trade License and Pollution NOC.",
        "🧾 Submit business ITRs and bank statements promptly to support financial inclusion.",
        "🔗 Link GST and Udyam via DSC for authentication efficiency.",
        "🏭 Connect with Delhi MSME centers in Naraina/Bawana for renewal support."
      ];
    } else if (scoreInt >= 60) {
      resp = [
        "You’re halfway there — a few critical documents are missing.",
        "📄 Without Udyam and GST, you won't qualify for most state or central MSME schemes.",
        "🖥 Use Delhi eDistrict or NSWS portal to file Trade License and Pollution NOC.",
        "📞 Contact UDYAMI Mitra centers for handholding.",
        "🎟️ Once registered, you become eligible for MSME loans, CGTMSE credit, and benefits."
      ];
    } else if (scoreInt >= 40) {
      resp = [
        "Important documents missing — compliance risk is HIGH.",
        "🚫 Lacking PAN, Udyam, and GST means you may lose access to most official schemes.",
        "📝 Visit your nearest DIC or use the national MSME portal to register.",
        "🧾 Submit at least two years of past ITRs to claim benefits.",
        "🤝 Explore free help from FICCI or SME Chamber of Commerce in Delhi."
      ];
    } else {
      resp = [
        "⚠️ Low score — you’re in critical non‑compliance territory.",
        "📌 Start by registering Udyam to get your 16‑digit URN.",
        "🧾 Apply for PAN and GST immediately — these are mandatory for any formal transaction.",
        "🧯 Ensure pollution and trade licenses within 1‑3 days via Delhi eDistrict.",
        "📞 Dial Delhi Small-Scale Enterprise Helpline (1800‑123‑456) for free support."
      ];
    }

    setResponseList(resp);
    setStep(2);
  };

  const resetAssistant = () => {
    setScore("");
    setResponseList([]);
    setStep(1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#4169E1] via-[#b3e5c9] to-[#e8fff3]">
      <div className="flex-grow p-6 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-extrabold text-[#2a2f45] mb-4 text-center">
            GovMSE AI Assistant 🤖
          </h1>

          {step === 0 && (
            <div className="text-lg space-y-6 text-center">
              <p>👋 Hi! I’m here to help Delhi-based MSMEs with their compliance journey.</p>
              <button
                onClick={() => setStep(1)}
                className="bg-[#4169E1] text-white px-6 py-2 rounded hover:bg-blue-800 transition"
              >
                Start Guidance
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <p className="text-lg font-medium">🧮 Enter your GovScore (0–100):</p>
              <input
                type="number"
                placeholder="e.g., 75"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                ref={inputRef}
              />
              <button
                onClick={handleScoreSubmit}
                className="bg-[#43CD80] text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Get Recommendations
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="mt-6">
              <h2 className="text-xl font-bold text-[#2a2f45] mb-2">📋 Your Recommendations</h2>
              <div className="bg-blue-50 p-4 rounded-lg shadow-sm space-y-2 max-h-64 overflow-y-auto">
                {responseList.map((tip, i) => (
                  <p key={i} className="text-gray-800">• {tip}</p>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">💬 Common Next Steps:</h3>
                <div className="space-y-2">
                  <PromptCard
                    question="How do I apply for a Trade License in Delhi?"
                    answer="Visit the Delhi eDistrict portal (https://edistrict.delhigovt.nic.in), login with your credentials, and go to Trade License section under MCD. Upload your PAN, address proof, and business documents. It typically gets approved in 3–5 days."
                  />
                  <PromptCard
                    question="Where can I get free MSME help in Delhi?"
                    answer="You can visit Udyami Mitra centers in Naraina or Bawana Industrial Area. They offer document help, registration aid, and loan scheme consultations. Helpline: 1800-123-456."
                  />
                  <PromptCard
                    question="How do I improve my GovScore quickly?"
                    answer="Submit your Udyam Registration, GST Certificate, and Trade License. These three alone can boost your score above 75. Also, ensure all documents are valid and uploaded digitally."
                  />
                </div>
              </div>

              <button
                onClick={resetAssistant}
                className="mt-6 text-sm text-blue-600 hover:underline"
              >
                🔄 Restart Guidance
              </button>
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
