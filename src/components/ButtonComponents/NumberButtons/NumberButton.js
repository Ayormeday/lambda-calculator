import React from "react";

const NumberButton = (props) => {
  const { numbers } = props
  return (
    <button onclick={numbers}>{numbers}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton