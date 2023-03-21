const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return comisario.init(sequelize, DataTypes);
}

class comisario extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    comi_cve_comisario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comi_nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comisario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comi_cve_comisario" },
        ]
      },
    ]
  });
  }
}
