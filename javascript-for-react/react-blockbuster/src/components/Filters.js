import { Component, createElement } from "../../../React/lib/react/index.js";
import styled from "../../../React/lib/styled-components/index.js";

import store from "../store/index.js";
import { SET_FILTER } from "../store/actions.js";

const filters = [
  { value: "all", label: "Todas" },
  { value: "popular", label: "Más valoradas" },
  { value: "notPopular", label: "Menos valoradas" },
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
  setFilter = (filter) => {
    store.dispatch({ type: SET_FILTER, filter })
  }

  render() {
    return Select({
      onChange: (e) => this.setFilter(e.target.value),
      children: options,
    });
  }
}

export default Filters;
