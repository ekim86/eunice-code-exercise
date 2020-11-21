export const ForwardButton = (props) => {
  const { className, style, onClick } = props;
  //declaring my props here ^^^
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="13" cy="13" r="13" fill="#999999" />
        <line
          x1="11.3536"
          y1="7.64645"
          x2="17.3536"
          y2="13.6464"
          stroke="white"
        />
        <line
          y1="-0.5"
          x2="8.48528"
          y2="-0.5"
          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 11 19)"
          stroke="white"
        />
      </svg>
    </div>
  );
};

export const BackButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        className="back-btn"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="13" cy="13" r="13" fill="#999999" />
        <line
          x1="15.6464"
          y1="19.3536"
          x2="9.64645"
          y2="13.3536"
          stroke="white"
        />
        <line
          y1="-0.5"
          x2="8.48528"
          y2="-0.5"
          transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 8)"
          stroke="white"
        />
      </svg>
    </div>
  );
};
