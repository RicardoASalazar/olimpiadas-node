const initModels = require("./init-models");
const db = require("../utils/database");

const models = initModels(db);

const {
  area,
  comisario,
  comisario_has_eventos,
  complejo,
  equipamiento,
  evento,
  evento_has_equipamiento,
  rol,
  sede,
  usuario,
} = models;

module.exports = {
  area,
  comisario,
  comisario_has_eventos,
  complejo,
  equipamiento,
  evento,
  evento_has_equipamiento,
  rol,
  sede,
  usuario,
};
