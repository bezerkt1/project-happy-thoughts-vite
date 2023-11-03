const Timestamp = ({ time }) => {
  const sinceTimeString = () => {
    const currentTime = Date.parse(new Date());
    const timestamp = Date.parse(time);
    let timeDifference = (currentTime - timestamp) / 1000 / 60;

    if (timeDifference < 1) {
      return "less than a minute ago";
    } else if (timeDifference < 60) {
      return `${Math.round(timeDifference)} minutes ago`;
    } else if (timeDifference < 1440) {
      timeDifference = timeDifference / 60;
      return `${Math.round(timeDifference)} hours ago`;
    } else if (timeDifference >= 1440) {
      timeDifference = timeDifference / 1440;
      return `${Math.round(timeDifference)} days ago`;
    } else {
      return "No timestamp";
    }
  };

  return <p className="timestamp">{sinceTimeString()}</p>;
};

export default Timestamp;
