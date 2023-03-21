const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return equipamiento.init(sequelize, DataTypes);
}

class equipamiento extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    equ_cve_equipamiento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    equ_descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'equipamiento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "equ_cve_equipamiento" },
        ]
      },
    ]
  });
  }
}
