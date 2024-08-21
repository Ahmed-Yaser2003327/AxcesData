import React, { useContext, useState, createContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Clean from '../Clean/Clean'

const UserContext = createContext();

const Context = () => {
  const [user, setUser] = useState("");

  // نستخدم useEffect لضبط قيمة user عند تحميل المكون
  useEffect(() => {
    setUser("ahmed");
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div>
        <p>Hello! {user}</p>
        <UserComponent />
        <Clean/>
      </div>
    </UserContext.Provider>
  );
};

// مكون فرعي يمكنه استخدام context
const UserComponent = () => {
  const user = useContext(UserContext);
  return <p>User from Context: {user}</p>;
};

export default Context;
