const { complejo, sede } = require("../models");
const { Op } = require("@sequelize/core");

class ComplejoServices {
  static async filter(filter) {
    try {
      const result = await complejo.findAll({
        where: {
          [Op.or]: [
            {
              com_descripcion: {
                [Op.like]: `%${filter}%`,
              },
            },
            {
              com_jefe: {
                [Op.like]: `%${filter}%`,
              },
            },
            {
              com_localizacion: {
                [Op.like]: `%${filter}%`,
              },
            },
            {
              com_area: {
                [Op.like]: `%${filter}%`,
              },
            },
          ],
        },
      });
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await complejo.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAll() {
    try {
      const result = await complejo.findAll({
        include: {
            model: sede,
            as: "sed_cve_sede_sede",
            attributes:['sed_cve_sede','sed_nombre']
          },
    })
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ComplejoServices;
