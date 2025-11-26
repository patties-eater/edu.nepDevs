import * as userService from "../services/user.services.js";

export const getUsers = async (req, res) => {
  try {
    const data = await userService.getAllUsers();
    res.json({ success: true, data });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const data = await userService.createUser(req.body);
    res.json({ success: true, data });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
