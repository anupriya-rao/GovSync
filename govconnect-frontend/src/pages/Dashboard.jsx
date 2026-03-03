export default function Dashboard() {
  const token = localStorage.getItem("token");
  const email = token ? JSON.parse(atob(token.split('.')[1])).sub : null;
  const firstName = email ? email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1) : "Guest";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4169E1] via-[#b3e5c9] to-[#e8fff3] p-6 flex flex-col">
      <div className="max-w-5xl mx-auto flex-grow">
        <h1 className="text-3xl font-extrabold mb-6 text-white">
          Welcome back, {firstName} 👋
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#4169E1]">
            <h3 className="text-lg font-semibold text-[#4169E1] mb-2">Feature: GovScore</h3>
            <p className="text-gray-700">
              Know your compliance health out of 100 and improve it with government-ready suggestions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#43CD80]">
            <h3 className="text-lg font-semibold text-[#43CD80] mb-2">Feature: AI Assistant</h3>
            <p className="text-gray-700">
              Ask AI how to improve your MSME’s legal standing and get instant step-by-step guidance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-400">
            <h3 className="text-lg font-semibold text-yellow-500 mb-2">Feature: Vault</h3>
            <p className="text-gray-700">
              Download your auto-generated compliance report (PDF) for banks, tenders, and verification.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#4169E1]">
          <h2 className="text-xl font-bold mb-4 text-[#2a2f45]">What Can You Do Today?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>🎯 Check your GovScore to identify missing documents.</li>
            <li>🤖 Ask the AI Assistant for license/NOC help specific to Delhi MSMEs.</li>
            <li>📄 Download your compliance Vault report for funding/tender use.</li>
            <li>💡 Keep your profile updated for more accurate assistance.</li>
          </ul>
        </div>
      </div>

      {/* Footer - inline in same file */}
      <footer className="bg-gradient-to-r from-[#4169E1] to-[#43CD80] text-white text-sm py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; {new Date().getFullYear()} GovMSE. All rights reserved.</div>
          <div>
            Contact us:{" "}
            <a href="mailto:support@govmse.in" className="underline">
              support@govmse.in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
