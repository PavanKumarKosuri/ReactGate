// src/components/Dashboard/Cards.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();

  const cards = [
    { name: "Card A", route: "/dashboard/card-a" },
    { name: "Card B", route: "/card-b" },
    { name: "Card C", route: "/card-c" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-white mb-12 animate-fadeInDown">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.name}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
            onClick={() => navigate(card.route)}
          >
            <h3 className="text-2xl font-semibold text-white text-center">
              {card.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
