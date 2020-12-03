import * as types from "./mutation-types";
import UserService from "@/services/Users.js";

export const users = {
  namespaced: true,
  state: {
    userActive: false,
    user: {}
  },
  getters: {},
  mutations: {
    [types.GET_USER](state, user) {
      state.user = user;
      state.userActive = true;
    }
  },
  actions: {
    getUser: async ({ commit }, user) => {
      return await UserService.getUser(user).then(u => {
        commit(types.GET_USER, u);
      });
    }
  }
};
