// src/components/Dashboard/CardA.jsx
import React from "react";

const CardA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-5xl font-bold mb-4 animate-zoomIn">Card A</h2>
        <p className="text-xl animate-fadeInUp">
          This is some dummy content for Card A.
        </p>
      </div>
    </div>
  );
};

export default CardA;
