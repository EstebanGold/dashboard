import { Users } from "@/api";

const UsersService = {
  getUser: async user => {
    return await Users.getUser(user);
  }
};

export default UsersService;
