import { Component, createElement } from "../../../React/lib/react/index.js";
import styled from "../../../React/lib/styled-components/index.js";

const filters = [
  { value: "all", label: "Todas" },
  { value: "most-valued", label: "Más valoradas" },
  { value: "least-valued", label: "Menos valoradas" },
];

const options = filters.map(({ label, value }) =>
  createElement("option", {
    value,
    children: label,
  })
);

const Select = styled.select`
  font-size: 1rem;
  padding: 0 1em;
  border-radius: 0.5em;
  background-color: transparent;
`;

class Filters extends Component {
  render() {
    return Select({
      children: options,
    });
  }
}

export default Filters;
