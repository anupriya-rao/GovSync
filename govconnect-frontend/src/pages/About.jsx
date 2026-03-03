export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4169E1] via-[#b3e5c9] to-[#e8fff3] flex flex-col">
      <div className="flex-grow p-8 max-w-4xl mx-auto bg-white shadow-xl rounded-xl mt-10 mb-6">
        <h1 className="text-4xl font-extrabold text-[#2a2f45] mb-6">About Us</h1>

        <p className="text-lg text-gray-800 mb-4">
          At <span className="font-bold text-[#4169E1]">GovMSE+</span>, we turn real-world problems into scalable digital solutions, starting with compliance for small and medium businesses.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          We’re two tech-driven minds blending design, AI, and engineering to deliver practical tools for impact. Whether it’s building at hackathons, research labs, or industry projects — we focus on execution and usability.
        </p>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h3 className="text-xl font-semibold mb-3 text-[#2a2f45]">Who We Are 👨‍💻👩‍💻</h3>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>
              <strong>Pranshu</strong> – Full-stack developer & AI practitioner with a knack for clean, efficient systems and ML pipelines.
            </li>
            <li>
              <strong>Anupriya</strong> – UX-minded builder who turns bold ideas into working products through hands-on design and development.
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          We don’t just code — we create. From prototypes to production, our mission is to empower MSMEs, support governance, and build tools that matter.
        </p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[#2a2f45] mb-2">🔗 Connect With Us</h3>
          <ul className="text-blue-700 space-y-1 underline text-sm sm:text-base">
            <li>
              <a href="https://www.linkedin.com/in/pranshu2005/" target="_blank" rel="noopener noreferrer">
                Pranshu on LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/anupriya-7a8584322/" target="_blank" rel="noopener noreferrer">
                Anupriya on LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Inline Footer (not in components) */}
      <footer className="bg-gradient-to-r from-[#4169E1] to-[#43CD80] text-white text-sm py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; {new Date().getFullYear()} GovMSE. All rights reserved.</div>
          <div>
            Contact:{" "}
            <a href="mailto:support@govmse.in" className="underline">
              support@govmse.in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
