const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return comisario_has_eventos.init(sequelize, DataTypes);
}

class comisario_has_eventos extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    comi_cve_comisario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comisario',
        key: 'comi_cve_comisario'
      }
    },
    ev_cve_evento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'evento',
        key: 'ev_cve_evento'
      }
    }
  }, {
    sequelize,
    tableName: 'comisario_has_eventos',
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
        name: "comi_cve_comisario",
        using: "BTREE",
        fields: [
          { name: "comi_cve_comisario" },
        ]
      },
    ]
  });
  }
}
