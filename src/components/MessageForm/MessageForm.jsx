import { useState } from "react";
import "./MessageForm.css";

const MessageForm = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const handleText = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="inputBox">
        <h2>What is making you happy right now?</h2>
        <textarea
          className="messageInput"
          type="text"
          placeholder="'If music be the food of love, play on.' - William Shakespeare"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <button onClick={() => addMessage(message)}>
          ❤️ Send Happy Thought ❤️
        </button>
      </div>
    </>
  );
};

export default MessageForm;
