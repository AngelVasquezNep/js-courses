import movies from "./movies.js";
import render from "./render.js";

import { isRecommended } from './utils.js'

const $recommededButton = document.getElementById("recommended");

$recommededButton.addEventListener("click", () => {
  render(recomendedMovies(movies));
});

function recomendedMovies(movies) {
  return movies.map((movie) => ({
    ...movie,
    recommended: isRecommended(movie),
  }));
}
