import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white text-[#2a2f45] px-6 py-4 shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Left: Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-[#4169E1]">
          GovMSE<span className="text-[#43CD80]">+</span>
        </div>

        {/* Center: Main Features */}
        <div className="flex-grow flex justify-center gap-6 text-md font-medium flex-wrap">
          <Link to="/" className="hover:text-[#4169E1] transition">Home</Link>
          {token && (
            <>
              <Link to="/dashboard" className="hover:text-[#4169E1] transition">Dashboard</Link>
              <Link to="/govscore" className="hover:text-[#4169E1] transition">GovScore</Link>
              <Link to="/assistant" className="hover:text-[#4169E1] transition">AI Assistant</Link>
              <Link to="/checklist" className="hover:text-[#4169E1] transition">Report</Link>
              <Link to="/report" className="hover:text-[#4169E1] transition">Vault</Link>
              <Link to="/about" className="hover:text-[#4169E1] transition">About Us</Link>
            </>
          )}
        </div>

        {/* Right: Profile / Auth */}
        <div className="flex items-center gap-4 text-sm font-medium">
          {token ? (
            <>
              <Link to="/profile" className="hover:text-[#4169E1] transition">Profile</Link>
              <button
                onClick={handleLogout}
                className="border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-[#4169E1] transition">Login</Link>
              <Link to="/signup" className="hover:text-[#4169E1] transition">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
