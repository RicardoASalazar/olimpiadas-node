const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return usuario.init(sequelize, DataTypes);
}

class usuario extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    usu_cve_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usu_nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    usu_apellido_paterno: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    usu_apellido_materno: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    usu_telefono: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usu_correo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usu_fecha_registro: {
      type: DataTypes.DATE,
      allowNull: false
    },
    usu_usuario: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    usu_password: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    rol_cve_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rol',
        key: 'rol_cve_rol'
      }
    }
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usu_cve_usuario" },
        ]
      },
      {
        name: "rol_cve_rol",
        using: "BTREE",
        fields: [
          { name: "rol_cve_rol" },
        ]
      },
    ]
  });
  }
}
