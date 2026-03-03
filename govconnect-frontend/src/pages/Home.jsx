import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4169E1] via-[#b3e5c9] to-[#e8fff3] p-6 flex flex-col">
      <div className="max-w-6xl mx-auto flex-grow space-y-16">
        {/* Hero Section */}
        <section className="bg-white p-10 rounded-2xl shadow-lg text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#2a2f45]">
            Simplify <span className="text-[#43CD80]">Government Compliance</span> for Your Business
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-600">
            GovMSE provides AI-powered compliance management, real-time analytics, and automated reporting to help MSMEs navigate government regulations effortlessly.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/signup" className="bg-[#4169E1] text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition">
              Start Your Free Trial
            </Link>
            <Link to="/assistant" className="border border-[#4169E1] text-[#4169E1] px-6 py-3 rounded hover:bg-[#4169E1] hover:text-white transition">
              Watch Demo
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#2a2f45] mb-10">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#4169E1] to-[#43CD80] text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Real-Time Compliance</h3>
              <p>Track your MSME’s compliance status with instant updates and alerts.</p>
            </div>
            <div className="bg-gradient-to-br from-[#4169E1] to-[#43CD80] text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Automated Reports</h3>
              <p>Generate data-driven PDFs for stakeholders and financial purposes.</p>
            </div>
            <div className="bg-gradient-to-br from-[#4169E1] to-[#43CD80] text-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">AI Guidance</h3>
              <p>Get smart, actionable suggestions to improve your government score.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer manually written inline like Dashboard */}
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
