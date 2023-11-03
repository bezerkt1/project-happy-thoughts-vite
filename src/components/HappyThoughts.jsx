import { useState, useEffect } from "react";
import Message from "./Message/Message";
import MessageForm from "./MessageForm/MessageForm";

export const HappyThoughts = () => {
  const [messageList, setMessageList] = useState(null);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error("error (App.useEffect)", error));
  }, []);

  const addHeart = (id) => {
    setMessageList(
      messageList.map((message) => {
        if (message._id === id) {
          return { ...message, hearts: message.hearts + 1 };
        } else {
          return message;
        }
      })
    );
  };

  return (
    <>
      <MessageForm />
      {messageList ? (
        messageList.map((message) => (
          <Message key={message._id} {...message} addHeart={addHeart} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default HappyThoughts;
