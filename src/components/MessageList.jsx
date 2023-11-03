import { useState, useEffect } from "react";
import Message from "./Message/Message";

export const MessageList = () => {
  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("error (App.useEffect)", error));
  }, []);

  return (
    <>
      {loading ? (
        messages ? (
          messages.map((message) => (
            <Message key={message._id} message={message} />
          ))
        ) : (
          <p>Loading...</p>
        )
      ) : (
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))
      )}
    </>
  );
};

export default MessageList;
