const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return sede.init(sequelize, DataTypes);
}

class sede extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    sed_cve_sede: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sed_nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sed_presupuesto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sed_ubicacion: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sede',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sed_cve_sede" },
        ]
      },
    ]
  });
  }
}
