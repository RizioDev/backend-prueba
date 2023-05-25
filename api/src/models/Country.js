const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define(
    'country',
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      nameSpanish: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      flagimg: {
        type: DataTypes.STRING,
        allowNull: false
      },
      subregion: {
        type: DataTypes.STRING
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      population: {
        type: DataTypes.BIGINT,
        allowNull: true,
        validate: {
          isNumeric: true,
          min: 0
        }
      },
      subregion: {
        type: DataTypes.STRING
      },
      capital: {
        type: DataTypes.STRING
      },
      continent: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  )
}

// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población
