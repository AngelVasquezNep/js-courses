import React from "react";

const AlertBanner = ({ message = "Alert" }) => (
  <div role="alert" aria-label="Alert">
    {message}
  </div>
);

export default AlertBanner;
