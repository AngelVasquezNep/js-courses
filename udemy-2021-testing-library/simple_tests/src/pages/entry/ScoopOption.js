import React from "react";

const ScoopOption = ({ name, imagePath }) => (
  <figure>
    <img src={`http://localhost:3030${imagePath}`} alt={`${name} scoop`} />
    <figcaption>{name}</figcaption>
  </figure>
);

export default ScoopOption;
