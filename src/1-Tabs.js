// Create a Tabs component in React with four city name tabs. On click of each tab show some content about that city.

import { useState } from "react";
export const Tabs = () => {
  const [name, setName] = useState("");
  function handler(city) {
    switch (city) {
      case "London":
        setName("This is capital of Uk.");
        break;
      case "Paris":
        setName("This is capital of France.");
        break;
      case "Tokyo":
        setName("This is capital of Japan.");
        break;
      case "New york":
        setName("This is a city in USA.");
        break;
      default:
        setName("The city is not known");
        break;
    }
  }

  return (
    <div style={{ border: "2px solid pink", margin: "15px" }}>
      <button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={() => handler("London")}
      >
        London
      </button>
      <button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={() => handler("Paris")}
      >
        Paris
      </button>
      <button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={() => handler("Tokyo")}
      >
        Tokyo
      </button>
      <button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={() => handler("New york")}
      >
        New york
      </button>
      <h2>{name}</h2>
    </div>
  );
};
