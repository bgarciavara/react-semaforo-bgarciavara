import React, { useState } from "react";
import "../../styles/TrafficLight.css";

const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  const baseColors = ["red", "green", "yellow"];
  const colors = showPurple ? [...baseColors, "purple"] : baseColors;

  const cycleColor = () => {
    const currentIndex = colors.indexOf(selectedColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setSelectedColor(colors[nextIndex]);
  };

  return (
    <div className="traffic-container">
      <div className="traffic-light">
        {colors.map((color) => (
          <div
            key={color}
            className={`light ${color} ${selectedColor === color ? "active" : ""}`}
            onClick={() => setSelectedColor(color)}
          ></div>
        ))}
      </div>

      <div className="buttons">
        <button onClick={cycleColor}>🔁 Cambiar color</button>
        <button onClick={() => setShowPurple(true)}>🟣 Añadir púrpura</button>
      </div>
    </div>
  );
};

export default TrafficLight;
