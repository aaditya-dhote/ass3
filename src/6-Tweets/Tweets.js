// Create a React component that fetches products data from an API endpoint using useEffect hook and display tweets (content, likes, views) as a list on the screen using the useState hook. Add a button on top, on click of which it displays only the tweets with more than 50 likes.

import { useState, useEffect } from "react";
import { fakeFetch } from "./fakeFetch";

export const Tweet = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState(false);
  const handler = () => {
    setFilter(!filter);
  };
  const one = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/usertweets");
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
      <button onClick={handler}>Show tweets with more than 50 likes</button>

      {}

      {filter === true
        ? list
            .filter((item) => item.likes > 50)
            .map((item) => (
              <li
                style={{
                  listStyleType: "none",
                  border: "2px solid blue",
                  margin: "5px"
                }}
                key={item.id}
              >
                <h3>{item.content}</h3>Likes:{item.likes}
                {} Views:{item.views}
              </li>
            ))
        : list.map((item) => (
            <li
              style={{
                listStyleType: "none",
                border: "2px solid blue",
                margin: "5px"
              }}
              key={item.id}
            >
              <h3>{item.content}</h3>Likes:{item.likes}
              {} Views:{item.views}
            </li>
          ))}
    </div>
  );
};
