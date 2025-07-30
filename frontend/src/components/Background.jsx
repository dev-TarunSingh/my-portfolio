// src/components/Background.jsx
import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Blue Circle - Top Left */}
      <div
        className="absolute w-96 h-96 bg-blue-800 rounded-full opacity-30 blur-3xl animate-float"
        style={{ top: "-100px", left: "-100px" }}
      />
      {/* Yellow Circle - Bottom Right, with delay */}
      <div
        className="absolute w-80 h-80 bg-yellow-600 rounded-full opacity-20 blur-2xl animate-float"
        style={{ top: "0px", left: "0px", animationDelay: "5s" }}
      />
    </div>
  );
};

export default Background; // ✅ THIS is the important part
