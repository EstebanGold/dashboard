import Vue from "vue";
import Vuex from "vuex";

import { users } from "./module/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: users
  }
});