import React, { useState } from "react";

export const MessageForm = ({ addMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the message is between 5 and 140 characters
    if (inputValue.length < 5 || inputValue.length > 140) {
      setError("Message must be between 5 and 140 characters.");
      return;
    }

    // Check for present tense
    if (!isPresentTense(inputValue)) {
      setError("Message should be in the present tense.");
      return;
    }

    // Clear any previous error
    setError(null);

    // Add the message
    try {
      const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error);
      } else {
        // Clear the input field on successful submission
        setInputValue("");
        // Trigger a function to refresh the messages, if necessary
        if (addMessage) {
          addMessage(inputValue);
        }
      }
    } catch (error) {
      console.error("Error adding message:", error);
      setError("An error occurred while adding the message.");
    }
  };

  // Check for present tense using a regular expression
  const isPresentTense = (text) => {
    const presentTenseRegex = /(\b(am|is|are|have|has|do|does)\s+\w+)/i;
    return presentTenseRegex.test(text);
  };

  return (
    <div className='inputBox'>
      <h2>What is making you happy right now?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder="What's making you happy right now?"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button>❤️ Send Happy Thought ❤️</button>
      </form>
      {error && <p className='error'>{error}</p>}
    </div>
  )
};

export default MessageForm
