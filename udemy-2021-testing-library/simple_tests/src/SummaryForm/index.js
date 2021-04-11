import React from "react";

const SummaryForm = ({ onSubmit }) => {
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <label>
        Terms and conditions
        <input
          type="checkbox"
          name="termsAndConditions"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
        />
      </label>

      <button disabled={!acceptedTerms} type="submit">
        Save
      </button>
    </form>
  );
};

export default SummaryForm;
