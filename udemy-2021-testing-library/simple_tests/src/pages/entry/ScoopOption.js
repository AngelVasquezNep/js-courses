import React, { Fragment } from "react";

const ScoopOption = ({ name, imagePath, updateItemCount }) => {
  const handleChange = (event) => {
    updateItemCount(name, event.target.value);
  };

  return (
    <Fragment>
      <figure>
        <img src={`http://localhost:3030${imagePath}`} alt={`${name} scoop`} />
        <figcaption>{name}</figcaption>
      </figure>

      <label>
        {name}
        <input type="number" name={name} onChange={handleChange} />
      </label>
    </Fragment>
  );
};

export default ScoopOption;
