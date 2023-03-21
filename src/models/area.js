const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return area.init(sequelize, DataTypes);
}

class area extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ar_cve_area: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ar_localizacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    com_cve_complejo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'complejo',
        key: 'com_cve_complejo'
      }
    }
  }, {
    sequelize,
    tableName: 'area',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ar_cve_area" },
        ]
      },
      {
        name: "com_cve_complejo",
        using: "BTREE",
        fields: [
          { name: "com_cve_complejo" },
        ]
      },
    ]
  });
  }
}
