import { Users } from "@/api";

const UsersService = {
  getUser: async user => {
    return await Users.getUser(user).then(u =>
      console.log("service getUser", u)
    );
  }
};

export default UsersService;
