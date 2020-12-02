import * as types from "./mutation-types";
import UserService from "@/services/Users.js";

const users = {
  namespaced: true,
  state: {
    userActive: false,
    user: {}
  },
  getters: {},
  mutations: {
    [types.GET_USER](state, user) {
      state.user = user;
    }
  },
  actions: {
    getUser: async ({ commit }, user) => {
      return await UserService.getUser(user).then(u => {
        console.log(u);
        commit(types.GET_USER, u);
      });
    }
  }
};

export { users };
