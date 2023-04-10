'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productsInCar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productsInCar.belongsTo(models.cars, {
        foreignKey: 'carId'
      })
      productsInCar.belongsTo(models.products, {
        foreignKey: 'productsId'
      })
    }
  }
  productsInCar.init({
    carId: DataTypes.INTEGER,
    productsId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'productsInCar',
  });
  return productsInCar;
};