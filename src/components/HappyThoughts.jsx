import { useState, useEffect } from "react";
import Message from "./Message/Message";
import MessageForm from "./MessageForm/MessageForm";

export const HappyThoughts = () => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("error (App.useEffect)", error));
  }, []);

  return (
    <>
      <MessageForm />
      {messages ? (
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default HappyThoughts;
