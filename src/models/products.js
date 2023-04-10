'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.belongsTo(models.users, {
        foreignKey: 'userId'

      })
      products.hasMany(models.productsInOders, {
        foreignKey: 'productId'
      })
      products.hasMany(models.productsInCar, {
        foreignKey: 'productsId'
      })
    }
  }
  products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    availableQty: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    productImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};