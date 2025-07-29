// src/components/Background.jsx
import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Blue Circle */}
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-30 blur-3xl animate-spin-slow top-[-100px] left-[-100px]" />
      {/* Yellow Circle */}
      <div className="absolute w-80 h-80 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-spin-reverse bottom-[-120px] right-[-80px]" />
    </div>
  );
};

export default Background;
