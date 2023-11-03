const HeartButton = ({ _id, hearts, addHeart }) => {
  return (
    <>
      <div className="heartBtn">
        <div>
          <button onClick={() => addHeart(_id)}>❤️</button>
        </div>
        <p>x{hearts}</p>
      </div>
    </>
  );
};

HeartButton.defaultProps = {
  hearts: 0,
  addHeart: () => {
    return null;
  },
};

export default HeartButton;
