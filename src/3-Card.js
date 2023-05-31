// Create a slider input in React which will set the border radius of a card on a change in the value of the range.
import { useState } from "react";
export const Slider = () => {
  const [val, setVal] = useState(0);
  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div
      style={{
        border: "2px solid pink",
        margin: "15px",
        borderRadius: `${val}px`
      }}
    >
      <h1>Card with Rounded corners</h1>
      <label for="user">Border Radius:</label>
      <input
        id="user"
        type="range"
        min="0"
        max="25"
        value={val}
        onChange={handleChange}
      />
    </div>
  );
};
