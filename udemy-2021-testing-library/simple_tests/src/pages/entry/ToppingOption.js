import React from "react";

const ToppingOption = ({ name, imagePath }) => (
  <figure>
    <img src={`http://localhost:3030${imagePath}`} alt={`${name} topping`} />
    <figcaption>{name}</figcaption>
  </figure>
);

export default ToppingOption;
