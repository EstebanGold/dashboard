import * as dao from "./dao/index-types";

const Users = {
  getUser: async user => {
    return await dao[process.env.VUE_APP_DATA_USERS].getUser(user);
  }
};

const Movies = {
  getCategories: async () => {
    return await dao[process.env.VUE_APP_DATA_MOVIES].getCategories();
  }
};

export { Users, Movies };
