import React from "react";

const ButtonColor = () => {
  const [buttonColor, setButtonColor] = React.useState("red");
  const [disabled, setDisabled] = React.useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>

      <label>
        Disabled
        <input
          type="checkbox"
          aria-checked={disabled}
          onChange={({ target }) => setDisabled(target.checked)}
        />
      </label>
    </div>
  );
};

export default ButtonColor;
