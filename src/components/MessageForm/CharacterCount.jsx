const CharacterCount = ({ message }) => {
  return (
    <>
      <div className="characterCount">
        <p>{message.length}/140</p>
      </div>
    </>
  );
};

export default CharacterCount;
