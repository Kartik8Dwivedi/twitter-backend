import { UserRepository } from "../repository/index.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    try {
      const user = await this.userRepository.create(data);
      console.log("user object is", user)
      user.password = "SAVED_TO_DB";
      return user;
    } catch (error) {
        console.log("Error in Service layer ", error);
        return new Error(error)
    }
  }
}

export default UserService;                      