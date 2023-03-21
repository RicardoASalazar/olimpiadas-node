const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  return operations.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     icosaedro:
 *       type: object
 *       properties:
 *         arista:
 *           type: int
 *           example: 2
 *     esfera:
 *       type: object
 *       properties:
 *         radio:
 *           type: float
 *           example: 2.52
 *     energiagr:
 *       type: object
 *       properties:
 *         gr:
 *           type: int
 *           example: 2
 *     energiakg:
 *       type: object
 *       properties:
 *         kg:
 *           type: int
 *           example: 2
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

class operations extends Sequelize.Model {
  static init(sequelize, DataTypes) {
      }
}
