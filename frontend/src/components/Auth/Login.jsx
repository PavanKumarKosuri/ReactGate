// src/components/Auth/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/apiService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // e.preventDefault();
    navigate("/dashboard");

    // try {
    //   const response = await api.post("/login", {
    //     username: username,
    //     password: password,
    //   });

    //   // Assuming the response contains a success message
    //   if (response.status === 200) {
    //     // Optionally, store user data or token if provided by the backend
    //     // For example:
    //     // localStorage.setItem("user", JSON.stringify(response.data));

    //     navigate("/dashboard");
    //   }
    // } catch (error) {
    //   // Handle login errors
    //   console.error("Login failed:", error);
    //   alert("Invalid username or password. Please try again.");
    // }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-blue-500 p-8">
        <h2 className="text-4xl font-bold text-white mb-8 animate-fadeIn">
          Welcome Back!
        </h2>
        <form
          onSubmit={handleLogin}
          className="bg-white bg-opacity-20 backdrop-blur-lg rounded p-8 shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-white mb-2">Username:</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2">Password:</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-700 text-white font-semibold rounded hover:bg-purple-800 transition duration-300"
          >
            Login
          </button>
          <p className="text-white mt-4">
            New user?{" "}
            <a
              href="/signup"
              className="text-blue-300 hover:underline transition duration-300"
            >
              Sign up here
            </a>
          </p>
        </form>
      </div>
      {/* Right Side */}
      <div className="w-1/2 bg-black flex items-center justify-center">
        <p className="text-white text-2xl animate-pulse">
          Welcome to Our Platform
        </p>
      </div>
    </div>
  );
};

export default Login;
