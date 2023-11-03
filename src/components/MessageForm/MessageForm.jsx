import { useState } from "react";
import CharacterCount from "./CharacterCount";
import "./MessageForm.css";

const MessageForm = ({ addMessage }) => {
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);

  const handleText = (e) => {
    if (e.target.value.length <= 140 && e.target.value.length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
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
          onChange={handleText}
          value={message}
        ></textarea>
        <div className="inputInfo">
          <button
            disabled={valid ? false : true}
            onClick={() => addMessage(message)}
          >
            ❤️ Send Happy Thought ❤️
          </button>
          <CharacterCount message={message} />
        </div>
      </div>
    </>
  );
};

export default MessageForm;
