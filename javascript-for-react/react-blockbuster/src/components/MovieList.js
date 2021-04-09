import { Component, createElement } from "../../../React/lib/react/index.js";
import styled from "../../../React/lib/styled-components/index.js";

import store from "../store/index.js";
import { ADD_MOVIES } from "../store/actions.js";
import API from "../API/index.js";

import Wrapper from "./Wrapper.js";
import Movie from "./Movie.js";

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`;

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      page: 1,
    };
  }

  componentDidMount() {
    store.subscribe(this.subscribeUpdateMovies);

    this.getPage(this.state.page);
  }

  componentDidUpdate() {
    // All renders create a new div, so, I have to register again
    setTimeout(this.setObserverLoading, 0);
  }

  subscribeUpdateMovies = (state, prevState) => {
    // Just to re-render app
    this.setState({});
  };

  setObserverLoading = () => {
    // Initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(this.handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    const loadingDiv = document.getElementById("loadingDiv");
    observer.observe(loadingDiv);
  };

  handleObserver = (entities) => {
    const target = entities[0];

    console.log(target);

    if (
      target.isIntersecting &&
      !this.state.loading &&
      store.getState().filter !== "search"
    ) {
      const page = this.state.page + 1;
      console.log("NEXT PAGE ", page);
      this.getPage(page);
      this.setState({ page });
    }
  };

  getPage = (page) => {
    this.setState({ loading: true });

    API.discoverMovie({ page })
      .then((response) => {
        store.dispatch({ type: ADD_MOVIES, movies: response.results });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { loading } = this.state;

    const { filter, lists, hashedMapMovies } = store.getState();
    const listMovie = lists[filter];

    return Wrapper({
      children: [
        MovieListStyled({
          children: listMovie.map(
            (movieId) => new Movie(hashedMapMovies[movieId])
          ),
        }),
        createElement("p", {}, loading ? "Cargando..." : ""),
        createElement(
          "div",
          {
            id: "loadingDiv",
            style: "margin: 1rem; border: 1px solid red; height: 1rem",
          },
          ""
        ),
      ],
    });
  }
}

export default MovieList;
