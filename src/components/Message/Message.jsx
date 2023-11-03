import HeartButton from "./HeartButton";
import Timestamp from "./Timestamp";
import "./Message.css";

const Message = ({ _id, message, hearts, createdAt, addHeart }) => {
  return (
    <>
      <div className="messageBox">
        <p>{message}</p>
        <div className="messageInfo">
          <HeartButton hearts={hearts} addHeart={addHeart} _id={_id} />
          <Timestamp time={createdAt} />
        </div>
      </div>
    </>
  );
};

export default Message;
