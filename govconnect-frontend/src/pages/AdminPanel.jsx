import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AdminPanel() {
  const [allComplaints, setAllComplaints] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const token = localStorage.getItem("token");
  const email = token ? JSON.parse(atob(token.split(".")[1])).sub : null;

  const fetchComplaints = async (status = "") => {
    const url = status
      ? `http://localhost:8000/all-complaints?status=${status}`
      : `http://localhost:8000/all-complaints`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setAllComplaints(data);
  };

  useEffect(() => {
    if (email === "admin@govconnect.com") fetchComplaints();
  }, []);

  const updateStatus = async (id, newStatus) => {
    const res = await fetch("http://localhost:8000/update-complaint", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, status: newStatus }),
    });
    const data = await res.json();
    if (res.ok) {
      toast.success("Status updated");
      fetchComplaints(statusFilter);
    } else {
      toast.error(data.detail || "Failed to update status");
    }
  };

  if (email !== "admin@govconnect.com") {
    return (
      <div className="max-w-xl mx-auto mt-10 p-4 text-center text-red-500 font-bold">
        Access denied — Admins only.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Admin Panel</h2>

      <div className="mb-6">
        <label className="mr-2 font-medium">Filter by Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            fetchComplaints(e.target.value);
          }}
          className="border px-2 py-1 rounded"
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allComplaints.map((comp, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="font-semibold text-blue-700">{comp.title}</h3>
            <p>{comp.description}</p>
            <p className="text-sm mt-2 text-gray-600">
              Status:
              <select
                className="ml-2 px-1 py-0.5 border rounded"
                value={comp.status}
                onChange={(e) => updateStatus(index, e.target.value)}
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </p>
            <p className="text-xs text-gray-400 mt-1">From: {comp.user_email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
