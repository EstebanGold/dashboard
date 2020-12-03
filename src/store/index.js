import Vue from "vue";
import Vuex from "vuex";

import { users } from "./module/users";
import { movies } from "./module/movies";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: users,
    movies: movies
  }
});
