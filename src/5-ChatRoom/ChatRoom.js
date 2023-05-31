// Create a React component that fetches chats from an API endpoint using useEffect hook and display chat data (chat message) as a list on the screen using the useState hook. Display "You: " before every odd message and "user: " at every even message.

import { useState, useEffect } from "react";
import { fakeFetch } from "./fakefetch";

export const Chatroom = () => {
  const [list, setList] = useState([]);

  const one = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/userchats");
      if (response.status === 200) {
        setList(response.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    one();
  }, []);
  return (
    <div style={{ border: "2px solid pink", margin: "15px" }}>
      {list.map((item, i) => (
        <p style={{ textAlign: "left" }} key={item}>
          {i % 2 === 0 ? `User:${item}` : `You:${item}`}
        </p>
      ))}
    </div>
  );
};
