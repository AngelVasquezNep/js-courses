import React, { Fragment } from "react";

const ToppingOption = ({ name, imagePath, updateItemCount }) => {
  const handleChange = (event) => {
    updateItemCount(name, event.target.value);
  };

  return (
    <Fragment>
      <figure>
        <img
          src={`http://localhost:3030${imagePath}`}
          alt={`${name} topping`}
        />
        <figcaption>{name}</figcaption>
      </figure>

      <label>
        {name}
        <input type="number" name={name} onChange={handleChange} />
      </label>
    </Fragment>
  );
};

export default ToppingOption;
