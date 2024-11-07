// src/components/Auth/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/apiService";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    empId: "",
    email: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/signup", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        username: formData.username,
        password: formData.password,
        emp_id: formData.empId,
        email: formData.email,
        phone_number: formData.phoneNumber,
      });

      if (response.status === 201) {
        alert("Signup successful! Please log in.");
        navigate("/");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-green-600 to-teal-500 p-8">
        <h2 className="text-4xl font-bold text-white mb-8 animate-slideIn">
          Create Account
        </h2>
        <form
          onSubmit={handleSignup}
          className="bg-white bg-opacity-20 backdrop-blur-lg rounded p-8 shadow-lg overflow-y-auto max-h-full"
        >
          {[
            { label: "First Name", name: "firstName", type: "text" },
            { label: "Last Name", name: "lastName", type: "text" },
            { label: "Username", name: "username", type: "text" },
            { label: "Password", name: "password", type: "password" },
            { label: "Employee ID", name: "empId", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone Number", name: "phoneNumber", type: "tel" },
          ].map((field) => (
            <div className="mb-4" key={field.name}>
              <label className="block text-white mb-2">{field.label}:</label>
              <input
                type={field.type}
                name={field.name}
                className="w-full p-2 rounded bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-green-300"
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-800 transition duration-300"
          >
            Sign Up
          </button>
          <p className="text-white mt-4">
            Already have an account?{" "}
            <a
              href="/"
              className="text-teal-300 hover:underline transition duration-300"
            >
              Login here
            </a>
          </p>
        </form>
      </div>
      {/* // Right Side
      <div className="w-1/2 bg-black flex items-center justify-center">
        <p className="text-white text-2xl animate-pulse">Join Our Community</p>
      </div> */}
    </div>
  );
};

export default Signup;
