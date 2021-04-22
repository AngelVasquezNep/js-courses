import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "./AlertBanner";
import { formatCurrency, PRICES, useOrderDetails } from "../../context/OrderDetails";

const OptionTypes = {
  scoops: ScoopOption,
  toppings: ToppingOption,
};

const Options = ({ optionType }) => {
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(false);
  const [orderDetails, updateItemCount] = useOrderDetails();

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(`http://localhost:3030/${optionType}`, {
        cancelToken: source.token,
      })
      .then((response) => setOptions(response.data))
      .catch((error) => {
        setError(true);
      });

    return () => {
      source.cancel();
    };
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const OptionComponent = OptionTypes[optionType];
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{PRICES[optionType]} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>

      {options.map((option) => (
        <OptionComponent
          key={option.name}
          name={option.name}
          imagePath={option.imagePath}
          updateItemCount={(itemName, newItemCount) =>
            updateItemCount(itemName, newItemCount, optionType)
          }
        />
      ))}
    </Fragment>
  );
};

export default Options;
