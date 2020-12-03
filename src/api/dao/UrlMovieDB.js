export const URLMovieDB = {
  getCategories: async () => {
    const categories =
      "genre/movie/list?language=en-US&api_key=" + process.env.VUE_APP_API_KEY;

    return await fetch(`${process.env.VUE_APP_API}${categories}`)
      .then(response => response.json())
      .then(genres => genres.genres);
  }
};
