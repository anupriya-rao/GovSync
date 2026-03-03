import { useState } from "react";
import toast from "react-hot-toast";

export default function SubmitComplaint() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    if (!title || !desc) return toast.error("All fields are required!");

    const res = await fetch("http://localhost:8000/complaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description: desc }),
    });

    const data = await res.json();
    if (res.ok) {
      toast.success("Complaint submitted!");
      setTitle(""); setDesc("");
    } else {
      toast.error(data.detail || "Submission failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Submit New Complaint</h2>
      <input
        className="border w-full p-2 mb-3 rounded"
        placeholder="Complaint Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border w-full p-2 mb-3 rounded"
        placeholder="Complaint Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}
