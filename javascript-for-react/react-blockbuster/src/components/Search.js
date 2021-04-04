import { Component } from "../../../React/lib/react/index.js";

import Form from "./Form.js";
import Filters from './Filters.js'
import Input from "./Input.js";
import Button from './Button.js'

class Search extends Component {
  render() {
    return Form({
      children: [
        Input({
          placeholder: "Escribe tu pelicula favorita",
          name: "Title",
          type: "text",
        }),
        Button({ children: 'Buscar' }),
        new Filters({})
      ],
    });
  }
}

export default Search;
