import { useState, useEffect } from "react";

export default function UserProfile() {
  const token = localStorage.getItem("token");
  let email = "";
  let exp = "";

  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      email = payload.sub;
      exp = new Date(payload.exp * 1000).toLocaleString();
    } catch (err) {
      console.error("Invalid token", err);
    }
  }

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#4169E1] via-[#b3e5c9] to-[#e8fff3]">
      <div className="flex-grow flex justify-center items-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
          <h1 className="text-3xl font-extrabold text-[#2a2f45] mb-6">👤 User Profile</h1>

          <div className="mb-4">
            <label className="text-sm text-gray-600 font-medium">Email</label>
            <div className="flex gap-2 mt-1">
              <input
                value={email}
                readOnly
                className="flex-1 p-2 border rounded bg-gray-100 text-gray-700"
              />
              <button
                onClick={handleCopy}
                className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600 font-medium">Token Expiry</label>
            <input
              value={exp}
              readOnly
              className="w-full p-2 border rounded mt-1 bg-gray-100 text-gray-700"
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-gray-600 font-medium">Change Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-2 border rounded mt-1 bg-white"
              disabled
            />
            <p className="text-xs text-gray-400 mt-1">🔒 Placeholder only — not functional yet.</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Token stored in browser. Logout clears session.</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-sm"
            >
              Logout
            </button>
          </div>
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
