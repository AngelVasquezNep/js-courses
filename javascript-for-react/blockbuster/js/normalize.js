import rawMovies from "./movies.js";
import { isRecommended, isNotRecommended } from "./utils.js";

const hashedMapMovies = {};

const movies = {
  popular: [],
  notPopular: [],
  all: [],
};

for (const movie of rawMovies) {
  const { id } = movie;

  hashedMapMovies[id] = movie;

  movies.all.push(id);

  if (isRecommended(movie)) {
    movies.popular.push(id);
    continue;
  }

  if (isNotRecommended(movie)) {
    movies.notPopular.push(id);
    continue;
  }
}

export {
  movies,
  hashedMapMovies,
};
