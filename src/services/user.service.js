const { usuario, rol } = require("../models");
const { Op } = require("@sequelize/core");

class UserServices {

    static async getAll(){
        try {
            const result = await usuario.findAll({
                include: {
                    model: rol,
                    as: "rol_cve_rol_rol",
                    attributes: ["rol_nombre"],
                  },
            })
            return result
        } catch (error) {
            throw error
        }
    }

//   static async filter(filter) {
//     try {
//       const result = await complejo.findAll({
//         where: {
//           [Op.or]: [
//             {
//               com_descripcion: {
//                 [Op.like]: `%${filter}%`,
//               },
//             },
//             {
//               com_jefe: {
//                 [Op.like]: `%${filter}%`,
//               },
//             },
//             {
//               com_localizacion: {
//                 [Op.like]: `%${filter}%`,
//               },
//             },
//             {
//               com_area: {
//                 [Op.like]: `%${filter}%`,
//               },
//             },
//           ],
//         },
//       });
//       console.log(result);
//       return result;
//     } catch (error) {
//       throw error;
//     }
//   }
}

module.exports = UserServices;
