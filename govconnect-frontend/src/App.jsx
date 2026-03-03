// App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SubmitComplaint from "./pages/SubmitComplaint";
import UserProfile from "./pages/UserProfile";
import ComplaintList from "./pages/ComplaintList";
import AdminPanel from "./pages/AdminPanel";
import GovScore from "./pages/GovScore";
import Assistant from "./pages/Assistant";
import Checklist from "./pages/Checklist";
import Report from "./pages/Report";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Auth & Main */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* User Dashboard & Complaints */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit" element={<SubmitComplaint />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/complaints" element={<ComplaintList />} />

        {/* Admin Only */}
        <Route path="/admin" element={<AdminPanel />} />

        {/* GovMSE Core Features */}
        <Route path="/govscore" element={<GovScore />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/report" element={<Report />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
