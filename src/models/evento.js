const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return evento.init(sequelize, DataTypes);
}

class evento extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ev_cve_evento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ev_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ev_duracion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ev_num_participantes: {
      type: DataTypes.INTEGER,
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
    tableName: 'evento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ev_cve_evento" },
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
