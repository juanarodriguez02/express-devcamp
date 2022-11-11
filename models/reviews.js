'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviews.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{
          args: true,
          msg: 'El name no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'El name debe ser existente '
        },
        isAlpha:{
          args: true,
          msg: 'El name solo debe tener letras'
        }, 
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{
          args: true,
          msg: 'El title no debe quedar vacio'
        },
      }
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty:{
          args: true,
          msg: 'El rating no debe quedar vacio'
        },
        isNumeric: {
          args: true, 
          msg: 'El rating solo debe tener numeros'
        }
      }
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'reviews',
  });
  return reviews;
};