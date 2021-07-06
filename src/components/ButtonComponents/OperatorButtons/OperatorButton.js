import React from "react";

export const OperatorButton = ({ operator, onClick }) => {
  const button = e => onClick(operator);
  return (
    <>
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        <button onClick={button}>{operator.char}</button>
      }
    </>
  );
};
