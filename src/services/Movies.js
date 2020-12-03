import { Movies } from "@/api";

const MoviesService = {
  getCategories: async () => {
    return await Movies.getCategories();
  }
};

export default MoviesService;
