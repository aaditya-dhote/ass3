import "./styles.css";
import { Tabs } from "./1-Tabs";
import { Grocery } from "./2-GroceryList";
import { Slider } from "./3-Card";
import { Dropdown } from "./4-SetBackground";
import { Chatroom } from "./5-ChatRoom/ChatRoom";
import { Tweet } from "./6-Tweets/Tweets";
import { Movies } from "./7-Movies/Movies";

export default function App() {
  return (
    <div className="App">
      <h1>Assignment Three</h1>
      <Tabs />
      <Grocery />
      <Slider />
      <Dropdown />
      <Chatroom />
      <Tweet />
      <Movies />
    </div>
  );
}
