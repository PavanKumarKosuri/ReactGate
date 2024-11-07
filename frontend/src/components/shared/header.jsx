import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <button
      className="h-[30px] px-5 w-100% "
      style={{ color: "blue" }}
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Header;
