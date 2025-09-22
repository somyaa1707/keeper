import React from "react";

const Note = ({ id, title, content, onDelete }) => (
  <div className="bg-white p-4 rounded-xl shadow-md border">
    <div className="flex justify-between items-start gap-4">
      <div>
        <h3 className="font-semibold text-lg">{title || "Untitled"}</h3>
        <p className="mt-2 text-sm leading-relaxed whitespace-pre-line">
          {content || "(empty)"}
        </p>
      </div>
      <div>
        <button
          onClick={() => onDelete(id)}
          className="text-sm px-3 py-1 border rounded-md hover:bg-red-50 text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default Note;
