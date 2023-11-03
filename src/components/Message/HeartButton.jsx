const HeartButton = ({ hearts }) => {
  return (
    <>
      <div className="heartBtn">
        <div>
          <button>❤️</button>
        </div>
        <p>x{hearts}</p>
      </div>
    </>
  );
};

export default HeartButton;
