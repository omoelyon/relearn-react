import React from "react";

const countDown = (props) => {
  const text = `${props.weeks} weeks ${props.days} days ${props.hours} hours ${props.minutes} minutes ${props.seconds} seconds `;
  return (
    <div>
      <h3>{text}</h3>
    </div>
  );
};

export default countDown;
