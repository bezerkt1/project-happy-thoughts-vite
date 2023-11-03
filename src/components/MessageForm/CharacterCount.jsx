const CharacterCount = ({ message }) => {
  return (
    <>
      <div className="characterCount">
        <p>
          {message.length}/140
          <br />
          {message.length > 140 && "The message is too long"}
        </p>
      </div>
    </>
  );
};

export default CharacterCount;
