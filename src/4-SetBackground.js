// Create a select dropdown that updates the background color of the page when a new color is selected.
import { useState } from "react";

export const Dropdown = () => {
  const [color, setColor] = useState("");
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        height: "50vh",
        border: "2px solid pink",
        margin: "15px"
      }}
    >
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="pink">Pink</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};
