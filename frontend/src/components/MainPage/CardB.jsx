// src/components/Dashboard/CardB.jsx
import React, { useEffect, useState } from "react";
import api from "../../api/apiService";

const CardB = () => {
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
          console.log(response.data.user_details);
        }
      } catch (error) {
        console.error("Error fetching user details", error);
        alert("An error occurred while retrieving user details");
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-5xl font-bold mb-4 animate-zoomIn">Card B</h2>
        <p className="text-xl animate-fadeInUp">
          This is some dummy content for Card B.
        </p>
      </div>
    </div>
  );
};

export default CardB;
