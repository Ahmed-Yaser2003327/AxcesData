import React, { useState,useEffect } from "react";

const Sent = () => {

const [value,setValue] =useState("")



const setHandler = (e) => {
  setValue(e.target.value)
};


useEffect(() => {
 let id  =setTimeout(() => {
    console.log (value)
 }, 3000);
 return ()=>clearTimeout(id)
}, [value]);




  return (
    <>
      <input type="text"  onChange={setHandler}  />
    </>
  );
}

export default Sent
