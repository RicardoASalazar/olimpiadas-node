const UserServices = require("../services/user.service");

const getUsers = async (req, res, next) => {
  try {
    const result = await UserServices.getAll()

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
};
