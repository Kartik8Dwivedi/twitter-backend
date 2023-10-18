import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    res.status(201).json({
        message: 'User created successfully',
        data: response,
        err: {},
        status: "Success"
    })
  } catch (error) {
      res.status(500).json({
        message: 'Someting went wrong in registration',
        data: {},
        err: error,
        status: 'Failure'
      })
  }
};
