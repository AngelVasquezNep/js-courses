import render from "./render.js";
import movies from "./movies.js";

const $searchForm = document.getElementById("search-form");

$searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData($searchForm);

  const title = formData.get("title");

  render(filterByTitle(movies, title));
});

const filterByTitle = (movies, title) =>
  movies.filter((movie) =>
    movie.title.toLowerCase().includes(title.toLocaleLowerCase())
  );
