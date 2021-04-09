import { isRecommended, isNotRecommended } from "../../utils/index.js";

function addMovies(state, action) {
  const rawMovies = action.movies;

  const movies = {
    all: new Set(state.lists.all),
    popular: new Set(state.lists.popular),
    notPopular: new Set(state.lists.notPopular),
  };

  const hashedMapMovies = {
    ...state.hashedMapMovies,
  };

  for (const movie of rawMovies) {
    const { id } = movie;

    hashedMapMovies[id] = movie;

    movies.all.add(id);

    if (isRecommended(movie)) {
      movies.popular.add(id);
      continue;
    }

    if (isNotRecommended(movie)) {
      movies.notPopular.add(id);
      continue;
    }
  }

  return {
    ...state,
    hashedMapMovies,
    lists: {
      ...state.lists,
      all: Array.from(movies.all),
      popular: Array.from(movies.popular),
      notPopular: Array.from(movies.notPopular),
    },
  };
}

export default addMovies;
