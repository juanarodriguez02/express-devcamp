'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha:{
          args: true,
          msg: 'Name solo debe tener letras'
        }, 
        notEmpty:{
          args: true,
          msg: 'Name no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'Name debe ser existente '
        }  
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail:{
          args: true,
          msg: 'Email debe tener una @'
        },
        notEmpty:{
          args: true,
          msg: 'Name no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'Name debe ser existente '
        }  
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5, 10],
          msg: 'Password debe tener entre 5 y 10 caracteres'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};