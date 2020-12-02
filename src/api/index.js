import * as dao from "./dao/index-types";

const Users = {
  getUser: async user => {
    console.log(process.env.VUE_APP_API_ACCESS)
    return await dao[process.env.VUE_APP_API_ACCESS].getUser(user);
  }
};

export { Users };
