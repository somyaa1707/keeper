import React from "react";

const Alert = ({ show, message }) => {
  if (!show) return null;
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="px-4 py-3 rounded-lg shadow-lg bg-red-100 text-red-800 border border-red-200">
        <strong className="block font-semibold">{message}</strong>
      </div>
    </div>
  );
};

export default Alert;
