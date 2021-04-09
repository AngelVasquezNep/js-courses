import { Component, createElement } from "../../../React/lib/react/index.js";

class Movie extends Component {
  render() {
    const { poster_path, title, id, vote_average } = this.props;

    const recommended = vote_average >= 7 ? "recommended" : "";

    return createElement("article", {
      class: `movie ${recommended}`,
      children: [
        createElement("img", {
          class: "movie-poster",
          src: `//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`,
          alt: title,
          height: "300px",
          loading: "lazy",
        }),

        createElement("p", { class: "movie-title", children: title }),
        createElement("p", { class: "movie-id" }, id),
        createElement("span", { class: "movie-rate" }, vote_average),
      ],
    });
  }
}

export default Movie;
