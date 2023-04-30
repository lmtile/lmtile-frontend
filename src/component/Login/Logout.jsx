import React from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
    // Navigate("/");
  };
  return (
    <div>
      <button
        onClick={handleLogOut}
        className="btn btn-outline rounded-none ml-3 w-3/4"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
