const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return rol.init(sequelize, DataTypes);
}

class rol extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    rol_cve_rol: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rol_nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    rol_descripcion: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rol',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rol_cve_rol" },
        ]
      },
    ]
  });
  }
}
