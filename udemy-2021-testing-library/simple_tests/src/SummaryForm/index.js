import React from "react";

import PopOver from "./PopOver";

const SummaryForm = ({ onSubmit }) => {
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <PopOver content={<p role="region" aria-label="popOverContent">PopOver Content</p>}>
        <label>
          Terms and conditions
          <input
            type="checkbox"
            name="termsAndConditions"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
        </label>
      </PopOver>

      <button disabled={!acceptedTerms} type="submit">
        Save
      </button>
    </form>
  );
};

export default SummaryForm;
