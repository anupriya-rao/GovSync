import { Lock } from "lucide-react";

export default function Report() {
  const downloadReport = () => {
    alert("🚫 Upgrade to Pro to unlock the Compliance Vault 🔐");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#4169E1] via-[#b3e5c9] to-[#e8fff3]">
      <div className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8 text-center">
          <Lock size={80} className="text-yellow-400 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2a2f45] mb-4">
            Upgrade to <span className="text-yellow-500">Pro</span> to Unlock Your Compliance Vault 🔐
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
            Access your personalized, auto-generated compliance PDF — complete with your GovScore, document checklist,
            and official-ready layout. Perfect for funding, tenders, audits, or MSME schemes.
          </p>

          {/* Preview box */}
          <div className="bg-blue-50 p-4 rounded-xl shadow mb-6 text-left text-sm text-gray-800 max-w-xl mx-auto">
            <p className="font-semibold mb-2">📝 PDF Preview Includes:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>✅ MSME Name and Email</li>
              <li>📊 Your GovScore + Document Status Summary</li>
              <li>📎 Missing Document Suggestions</li>
              <li>🔗 Useful links to Delhi eDistrict, Udyam portal, etc.</li>
              <li>📄 Clean, minimal design in downloadable PDF format</li>
            </ul>
          </div>

          <button
            onClick={downloadReport}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 text-lg rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition"
          >
            Upgrade to Pro
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#4169E1] to-[#43CD80] text-white text-sm py-6 mt-16">
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
