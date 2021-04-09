import { Component } from "../../../React/lib/react/index.js";

import store from "../store/index.js";
import { SEARCH, SET_FILTER } from "../store/actions.js";

import Form from "./Form.js";
import Filters from "./Filters.js";
import Input from "./Input.js";
import Button from "./Button.js";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchLabel: "Buscar",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const query = formData.get("query");

    if (query) {
      return store.dispatch({ type: SEARCH, query });
    }

    store.dispatch({ type: SET_FILTER, filter: "all" });
  };

  render() {
    return Form({
      onSubmit: this.handleSubmit,
      children: [
        Input({
          placeholder: "Escribe tu pelicula favorita",
          name: "query",
          type: "text",
        }),
        Button({ children: this.state.searchLabel }),
        new Filters({}),
      ],
    });
  }
}

export default Search;
