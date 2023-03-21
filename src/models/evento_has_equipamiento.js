const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return evento_has_equipamiento.init(sequelize, DataTypes);
}

class evento_has_equipamiento extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ev_cve_evento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'evento',
        key: 'ev_cve_evento'
      }
    },
    equ_cve_equipamiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'equipamiento',
        key: 'equ_cve_equipamiento'
      }
    }
  }, {
    sequelize,
    tableName: 'evento_has_equipamiento',
    timestamps: false,
    indexes: [
      {
        name: "ev_cve_evento",
        using: "BTREE",
        fields: [
          { name: "ev_cve_evento" },
        ]
      },
      {
        name: "equ_cve_equipamiento",
        using: "BTREE",
        fields: [
          { name: "equ_cve_equipamiento" },
        ]
      },
    ]
  });
  }
}
