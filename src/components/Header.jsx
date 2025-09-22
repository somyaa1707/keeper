import React from "react";

const Header = ({ title }) => (
  <header className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white p-6 shadow-md">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="text-sm opacity-90 mt-1">
        A modern Keeper App built with React, hooks, and Tailwind CSS.
      </p>
    </div>
  </header>
);

export default Header;
