import React, { useEffect, useState } from "react";
import axios from "axios";

import ScoopOption from "./ScoopOption";

const OptionTypes = {
  scoops: ScoopOption,
};

const Options = ({ optionType }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(`http://localhost:3030/${optionType}`, {
        cancelToken: source.token,
      })
      .then((response) => setOptions(response.data))
      .catch((error) => {
        // TODO: handle error response
      });

    return () => {
      source.cancel();
    };
  }, [optionType]);

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
