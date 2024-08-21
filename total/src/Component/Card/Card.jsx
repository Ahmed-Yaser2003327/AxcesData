import React, {  useEffect,useState } from "react";
import "./Card.css";
import Form from "../Form/Form";
import Avatar from "../Avatar/Avatar";

const Card = () => {
  const [users, setUsers] = useState([ ]);
   useEffect(() => {
      fetch("http://localhost:3004/getusers ")
        .then((response) => response.json())
        .then((fetchData) => setUsers(fetchData))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

  const addHandler =  (newUser) => {
  setUsers((prevUsers) => [...prevUsers, newUser]);
//     const response = await fetch("http://localhost:3004/user", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     });

//     if (response.ok) {
      //setUsers((prevUsers) => [...prevUsers, newUser]);
//     } else {
//       console.error("Failed to add user");
//     }
  };

  const [filter, setFilter] = useState("");

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  const dataHandler = (users) => {
    if (filter.length > 0) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return users;
    }
  };

  const deleteHandler = (clickedId) => {
   fetch("http://localhost:3004/deleteUser",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:  JSON.stringify({
          id:clickedId,
        })
      })
      .then((res)=>console.log(res))
    setUsers((prevState) => prevState.filter((el) => el.id !== clickedId));
  };

  return (
    <div>
      {/* تمرير دالة addHandler كـ inputData للمكون Form */}
      <Form inputData={addHandler} />
      <div className="D-filter">
        <input
          className="filter"
          type="text"
          placeholder="Filter by name"
          onChange={filterHandler}
          value={filter}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div>
        {dataHandler(users).map((user, index) => (
          <div key={index} className="data">
            <Avatar />
            <h2>Name : {user.name}</h2>
            <h2>Age : {user.age}</h2>
            <h2>ID : {user.id}</h2>
            <button onClick={() => deleteHandler(user.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
