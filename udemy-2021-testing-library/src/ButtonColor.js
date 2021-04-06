import React from "react";

const ButtonColor = () => {
  const [buttonColor, setButtonColor] = React.useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <button
      onClick={() => setButtonColor(newButtonColor)}
      style={{ backgroundColor: buttonColor }}
    >
      Change to {newButtonColor}
    </button>
  );
};

export default ButtonColor;
