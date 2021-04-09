function search(state, { query }) {
  const { hashedMapMovies, lists } = state;

  const search = searchMovie(lists.all, hashedMapMovies, query);

  return {
    ...state,
    filter: "search",
    lists: {
      ...lists,
      search,
    },
  };
}

function searchMovie(moviesIds, hashedMapMovies, query) {
  if (!isNaN(Number(query))) {
    const movie = findMovie(moviesIds, hashedMapMovies, Number(query));

    return movie ? [movie] : [];
  }

  return filterByTitle(moviesIds, hashedMapMovies, query);
}

const filterByTitle = (moviesIds, hashedMapMovies, title) =>
  moviesIds.filter((movieId) =>
    hashedMapMovies[movieId].title
      .toLowerCase()
      .includes(title.toLocaleLowerCase())
  );

const findMovie = (moviesIds, hashedMapMovies, id) => {
  if (moviesIds.includes(id)) {
    return id
  }

  return null
}

export default search;
