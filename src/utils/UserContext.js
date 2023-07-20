import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const UserContext = ({ children }) => {
  const [number, setNumber] = useState(5);
  const [data, setData] = useState([]);

  const api = () => {};

  useEffect(() => {
    fetch("http://localhost:1337/api/names")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default UserContext;
