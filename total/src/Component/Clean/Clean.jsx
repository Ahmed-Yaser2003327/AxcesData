import React, { useContext } from "react";
import { UserContext } from "../Context/Context"; // Adjust the path

const Clean = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Welcome, {user}!</h1>
    </div>
  );
};

export default Clean;
