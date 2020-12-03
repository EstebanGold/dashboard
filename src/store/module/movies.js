import * as types from "./mutation-types";
import MoviesService from "@/services/Movies.js";

export const movies = {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    [types.GET_CATEGORIES](state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    loadCategories: async ({ commit }) => {
      let categories = await MoviesService.getCategories();
      commit(types.GET_CATEGORIES, categories);
    }
  }
};
