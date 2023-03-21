const ComplejoServices = require("../services/complejo.service");

const filter = async (req, res, next) => {
  try {
    const { filter } = req.params;
    console.log(filter);

    const result = await ComplejoServices.filter(filter);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { cve: id } = req.params;
    const result = await ComplejoServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await ComplejoServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  filter,
  getById,
  getAll,
};
