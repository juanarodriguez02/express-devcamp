'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
          args: true,
          msg: 'El title solo debe tener letras'
        }, 
        notEmpty:{
          args: true,
          msg: 'El title no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'El title debe ser existente '
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{
          args: true,
          msg: 'La description no debe quedar vacio'
        }
      }
    } ,
    weeks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isNumeric: { 
          args: true,  
          msg: "Las weeks solo deben tener numeros"
        },
        notEmpty:{
          args: true,
          msg: 'Las weeks no deben quedar vacias'
        },
        min: {
          args: 2,
          msg: 'Las weeks debe tener minimo 2 numeros'
        }
      }
    },
    enroll_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty:{
          args: true,
          msg: 'La enroll_cost no debe quedar vacia'
        },
        isNumeric: {
          args: true,  
          msg: 'La enroll_cost solo debe tener numeros'
        }
      },
    },
    minmum_skill: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{
          args: true,
          msg: 'La minmum_skill no debe quedar vacia'
        },
      }
    },
  },
   
  {
    sequelize,
    timestamps: false,
    modelName: 'courses',
  });
  return courses;
};