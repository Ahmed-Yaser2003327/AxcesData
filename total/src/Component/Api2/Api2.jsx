import React, { useEffect, useState } from "react";
import "./Api2.css";
// import Form from "../Form/Form";
// import Card from "../Card/Card";
import Avatar from "../Avatar/Avatar";

const Api2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/getusers ")
      .then((response) => response.json())
      .then((fetchData) => setData(fetchData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
    
     
      {data.map((user, index) => (
        <div key={index} className="data">
          <div>
          <Avatar/>
            <h2>Age: {user.age}</h2>
            <h2>Name: {user.name}</h2>
            <h2>ID: {user.id}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Api2;
