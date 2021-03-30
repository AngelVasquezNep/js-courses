import render from "./render.js";
import movies from "./movies.js";

const $searchForm = document.getElementById("search-form");

$searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData($searchForm);

  const query = formData.get("query");

  render(searchMovie(movies, query));
});

function searchMovie(movies, query) {
  if (!isNaN(Number(query))) {
    const movie = findMovie(movies, Number(query));

    return movie ? [movie] : [];
  }

  return filterByTitle(movies, query);
}

const filterByTitle = (movies, title) =>
  movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLocaleLowerCase())
  );

const findMovie = (movies, id) => movies.find((movie) => movie.id === id);
