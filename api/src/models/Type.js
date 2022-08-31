const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', { //no genero un id ya que sequelize va a crear uno por defecto
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });
};