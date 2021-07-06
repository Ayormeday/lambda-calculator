import React from "react";

export const NumberButton = ({ number, onClick }) => {
  const button = e => onClick(number);
  return (
    <>
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        <button
          className={Number(number) === 0 ? "large" : null}
          onClick={button}
        >
          {number}
        </button>
      }
    </>
  );
};
