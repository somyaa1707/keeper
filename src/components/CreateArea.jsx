import React, { useState } from "react";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow">
      <input
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full mb-3 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        rows={4}
        placeholder="Write your note..."
        className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
      />
      <div className="flex justify-end">
        <button
          onClick={handleAdd}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateArea;
