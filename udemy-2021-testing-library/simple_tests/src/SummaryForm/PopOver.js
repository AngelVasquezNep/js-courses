import React, { useState } from "react";
import "./SummaryFormStyles.css";

const PopOver = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnMouseEnter = (child) => (e) => {
    if (child.props.onMouseEnter) {
      child.props.onMouseEnter(e);
    }

    setIsVisible(true);
  };

  const handleOnMouseLeave = (child) => (e) => {
    if (child.props.onMouseLeave) {
      child.props.onMouseLeave(e);
    }

    setIsVisible(false);
  };

  return (
    <div
      role="button"
      aria-label="pop-over"
      className="PopOver"
      onMouseEnter={handleOnMouseEnter}
    >
      {children}

      {isVisible && <div className="PopOver-Content">{content}</div>}
    </div>
  );
};

export default PopOver;
