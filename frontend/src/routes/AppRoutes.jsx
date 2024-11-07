// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Cards from "../components/MainPage/Cards";
import CardA from "../components/MainPage/CardA";
import CardB from "../components/MainPage/CardB";
import CardC from "../components/MainPage/CardC";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Cards />} />
      <Route path="/dashboard/card-a" element={<CardA />} />
      <Route path="/card-b" element={<CardB />} />
      <Route path="/card-c" element={<CardC />} />
    </Routes>
  );
};

export default AppRoutes;
