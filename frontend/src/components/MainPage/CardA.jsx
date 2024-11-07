// src/components/Dashboard/CardA.jsx
import React, { useEffect, useState } from "react";
import api from "../../api/apiService";
import Header from "../shared/header";

const CardA = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const username = localStorage.getItem("username");

        if (!username) {
          alert("User not logged in");
          return;
        }

        const response = await api.get("/userDetails", {
          params: { username: username },
        });

        if (response.status === 200) {
          setUserDetails(response.data.user_details);
        }
      } catch (error) {
        console.error("Error fetching user details", error);
        alert("An error occurred while retrieving user details");
      }
    };

    fetchUserDetails();
  }, []);

  if (!userDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
        <p className="text-white text-xl">Loading user details...</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4 animate-zoomIn">
            Welcome, {userDetails.first_name} {userDetails.last_name}!
          </h2>
          <p className="text-xl animate-fadeInUp">
            Username: {userDetails.username}
          </p>
          <p className="text-xl animate-fadeInUp">
            Employee ID: {userDetails.emp_id}
          </p>
          <p className="text-xl animate-fadeInUp">Email: {userDetails.email}</p>
          <p className="text-xl animate-fadeInUp">
            Phone Number: {userDetails.phone_number}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardA;
