import React, { useState } from "react";
import "./styles.css";

const PopUpButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "100px",
    height: "40px",
    backgroundColor: hovered ? "#FCA311" : "#14213D",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "20px",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hovered ? "Click me!" : "Pop-up button"}
    </button>
  );
};

export default function App() {
  return (
    <div className="App">
      <PopUpButton />
    </div>
  );
}
