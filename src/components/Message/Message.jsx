import HeartButton from "./HeartButton";
import Timestamp from "./Timestamp";
import "./Message.css";

const Message = ({ message }) => {
  return (
    <>
      <div className="messageBox">
        <p>{message.message}</p>
        <div className="messageInfo">
          <HeartButton hearts={message.hearts} />
          <Timestamp time={message.createdAt} />
        </div>
      </div>
    </>
  );
};

export default Message;
