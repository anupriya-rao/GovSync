import { useEffect, useState } from "react";

export default function ComplaintList() {
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchComplaints = async () => {
      const res = await fetch("http://localhost:8000/my-complaints", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setComplaints(data);
    };
    fetchComplaints();
  }, []);

  const filtered = complaints.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">My Complaints</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <ul className="space-y-4">
        {filtered.length > 0 ? (
          filtered.map((c, idx) => (
            <li key={idx} className="p-4 border rounded shadow">
              <h3 className="font-semibold text-blue-700">{c.title}</h3>
              <p className="text-sm text-gray-600">{c.description}</p>
              <p className="text-xs text-right text-gray-400">
                Status: {c.status}
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No complaints found.</p>
        )}
      </ul>
    </div>
  );
}
