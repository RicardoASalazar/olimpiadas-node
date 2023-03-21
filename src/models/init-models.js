const DataTypes = require("sequelize").DataTypes;
const _area = require("./area");
const _comisario = require("./comisario");
const _comisario_has_eventos = require("./comisario_has_eventos");
const _complejo = require("./complejo");
const _equipamiento = require("./equipamiento");
const _evento = require("./evento");
const _evento_has_equipamiento = require("./evento_has_equipamiento");
const _rol = require("./rol");
const _sede = require("./sede");
const _usuario = require("./usuario");

function initModels(sequelize) {
  const area = _area(sequelize, DataTypes);
  const comisario = _comisario(sequelize, DataTypes);
  const comisario_has_eventos = _comisario_has_eventos(sequelize, DataTypes);
  const complejo = _complejo(sequelize, DataTypes);
  const equipamiento = _equipamiento(sequelize, DataTypes);
  const evento = _evento(sequelize, DataTypes);
  const evento_has_equipamiento = _evento_has_equipamiento(sequelize, DataTypes);
  const rol = _rol(sequelize, DataTypes);
  const sede = _sede(sequelize, DataTypes);
  const usuario = _usuario(sequelize, DataTypes);

  comisario_has_eventos.belongsTo(comisario, { as: "comi_cve_comisario_comisario", foreignKey: "comi_cve_comisario"});
  comisario.hasMany(comisario_has_eventos, { as: "comisario_has_eventos", foreignKey: "comi_cve_comisario"});
  area.belongsTo(complejo, { as: "com_cve_complejo_complejo", foreignKey: "com_cve_complejo"});
  complejo.hasMany(area, { as: "areas", foreignKey: "com_cve_complejo"});
  evento.belongsTo(complejo, { as: "com_cve_complejo_complejo", foreignKey: "com_cve_complejo"});
  complejo.hasMany(evento, { as: "eventos", foreignKey: "com_cve_complejo"});
  evento_has_equipamiento.belongsTo(equipamiento, { as: "equ_cve_equipamiento_equipamiento", foreignKey: "equ_cve_equipamiento"});
  equipamiento.hasMany(evento_has_equipamiento, { as: "evento_has_equipamientos", foreignKey: "equ_cve_equipamiento"});
  comisario_has_eventos.belongsTo(evento, { as: "ev_cve_evento_evento", foreignKey: "ev_cve_evento"});
  evento.hasMany(comisario_has_eventos, { as: "comisario_has_eventos", foreignKey: "ev_cve_evento"});
  evento_has_equipamiento.belongsTo(evento, { as: "ev_cve_evento_evento", foreignKey: "ev_cve_evento"});
  evento.hasMany(evento_has_equipamiento, { as: "evento_has_equipamientos", foreignKey: "ev_cve_evento"});
  usuario.belongsTo(rol, { as: "rol_cve_rol_rol", foreignKey: "rol_cve_rol"});
  rol.hasMany(usuario, { as: "usuarios", foreignKey: "rol_cve_rol"});
  complejo.belongsTo(sede, { as: "sed_cve_sede_sede", foreignKey: "sed_cve_sede"});
  sede.hasMany(complejo, { as: "complejos", foreignKey: "sed_cve_sede"});

  return {
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
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
