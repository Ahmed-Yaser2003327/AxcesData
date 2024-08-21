import React, { useState } from "react";
import "./Form.css";

const Form = ({inputData}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    id: Math.floor(Math.random() * 800),
  });

  const setHandler = (e) => {
    const { id, value } = e.target;
    setInput((prevData) => ({ ...prevData, [id]: value }));
    
  };

  const supHandler = (e) => {
    e.preventDefault();
    // تأكد من أن inputData هو دالة قبل استدعائها
    if (typeof inputData === "function") {
      inputData(input);
      fetch("http://localhost:3004/addUser",{
            method:"POST",
            headers:{
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify({

              name: input.name,
              age: input.age,

            })
          })
          .then((res)=>console.log(res))
      setInput({
        name: "",
        age: "",
        id: Math.floor(Math.random() * 800),
      });
    } else {
      console.error("inputData is not a function");
    }
  };

  return (
    <form onSubmit={supHandler}>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" onChange={setHandler} value={input.name} />
      <label htmlFor="age">Age: </label>
      <input type="text" id="age" onChange={setHandler} value={input.age} />
      <input type="submit" value="Add User" />
    </form>
  );
};

export default Form;
