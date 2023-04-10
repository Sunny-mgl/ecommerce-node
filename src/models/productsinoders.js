'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productsInOders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productsInOders.belongsTo(models.orders, {
        foreignKey: 'orderId'
      })
      productsInOders.belongsTo(models.products, {
        foreignKey: 'productId'
      })
    }
  }
  productsInOders.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'productsInOders',
  });
  return productsInOders;
};