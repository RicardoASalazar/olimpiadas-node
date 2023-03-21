const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return complejo.init(sequelize, DataTypes);
}

class complejo extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    com_cve_complejo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    com_descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    com_jefe: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    com_localizacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    com_area: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: false
    },
    sed_cve_sede: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sede',
        key: 'sed_cve_sede'
      }
    }
  }, {
    sequelize,
    tableName: 'complejo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "com_cve_complejo" },
        ]
      },
      {
        name: "sed_cve_sede",
        using: "BTREE",
        fields: [
          { name: "sed_cve_sede" },
        ]
      },
    ]
  });
  }
}
