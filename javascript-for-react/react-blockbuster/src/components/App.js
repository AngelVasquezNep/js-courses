import { Component } from "../../../React/lib/react/index.js";
import styled from "../../../React/lib/styled-components/index.js";


import Header from "./Header.js";
import Actions from "./Actions.js";
import Search from "./Search.js";
import MovieList from "./MovieList.js";

const AppStyled = styled.div``;

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header(),
        new Actions({
          children: [new Search()],
        }),
        new MovieList({}),
      ],
    });
  }
}

export default App;
