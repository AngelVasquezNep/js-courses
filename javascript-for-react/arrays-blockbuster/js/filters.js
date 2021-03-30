import { renderMovieListFromMap } from "./render.js";
import { movies, hashedMapMovies } from "./normalize.js";

const $filterList = document.getElementById("filter");

$filterList.addEventListener("change", (event) => {
  console.log(event.target.value);

  const filter = event.target.value;

  if (filter === "all") {
    return renderMovieListFromMap(hashedMapMovies, movies.all);
  }

  if (filter === "most-valued") {
    return renderMovieListFromMap(hashedMapMovies, movies.popular);
  }

  if (filter === "least-valued") {
    return renderMovieListFromMap(hashedMapMovies, movies.notPopular);
  }
});
