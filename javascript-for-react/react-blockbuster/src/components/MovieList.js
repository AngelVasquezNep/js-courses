import { Component } from "../../../React/lib/react/index.js";
import styled from "../../../React/lib/styled-components/index.js";

import Wrapper from "./Wrapper.js";
import Movie from './Movie.js'

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`;

class MovieList extends Component {
  render() {
    return Wrapper({
      children: MovieListStyled({
        children: this.props.movies.map(movie => new Movie(movie))
      }) 
    })
  }
}

export default MovieList;
