import { users } from "../data/users";

const Local = {
  getUser: user => {
    return new Promise(resolve => {
      users.find(u => {
        if (u.user_name === user.user_name && user.pass === u.password)
          return resolve(u);
      });
    });
  }
};

export { Local };
