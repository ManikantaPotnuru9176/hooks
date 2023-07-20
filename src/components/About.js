import React, { useContext } from "react";
import { ThemeContext } from "../utils/UserContext";

const About = () => {
  const data = useContext(ThemeContext);
  // console.log("Number: ", data[0]);
  console.log("Names: ", data);
  return <div>About</div>;
};

export default About;
