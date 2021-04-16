import React, { useEffect, useState } from "react";
import axios from "axios";

import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "./AlertBanner";

const OptionTypes = {
  scoops: ScoopOption,
  toppings: ToppingOption,
};

const Options = ({ optionType }) => {
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(`http://localhost:3030/${optionType}`, {
        cancelToken: source.token,
      })
      .then((response) => setOptions(response.data))
      .catch((error) => {
        setError(true)
      });

    return () => {
      source.cancel();
    };
  }, [optionType]);

  if (error) {
    return <AlertBanner />
  }

  const OptionComponent = OptionTypes[optionType];

  return options.map((option) => (
    <OptionComponent
      key={option.name}
      name={option.name}
      imagePath={option.imagePath}
    />
  ));
};

export default Options;
