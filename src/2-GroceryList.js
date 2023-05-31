// Create a list of Grocery list items with checkboxes and as the user checks out the item those checked-out items should be listed in another section named ‘Completed list’. Add the list of items via an input field.
import { useState } from "react";

export const Grocery = () => {
  const [checkbox, setCheckbox] = useState([]);
  const [inputvalue, setInputvalue] = useState("");

  const addCheckbox = () => {
    setCheckbox((prev) => [...prev, { label: inputvalue, checked: false }]);
    setInputvalue("");
  };

  const handleCheckboxChange = (index) => {
    setCheckbox((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div style={{ border: "2px solid pink", margin: "15px" }}>
      <h1>Grocery List</h1>

      <label for="userName">Add Item:</label>
      <input
        id="userName"
        value={inputvalue}
        onChange={(e) => setInputvalue(e.target.value)}
      ></input>

      <button onClick={addCheckbox}>Add</button>

      <ul>
        {checkbox.map((item, index) => (
          <li key={item.id}>
            <input
              type="checkbox"
              id={`item-checkbox-\${index}`}
              checked={item.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            <label>{item.label}</label>
          </li>
        ))}
      </ul>

      <h1>Completed List:</h1>
      <ul>
        {checkbox
          .filter((item) => item.checked)
          .map((item) => (
            <li key={item.id}>{item.label}</li>
          ))}
      </ul>
    </div>
  );
};
