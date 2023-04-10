'use strict';
const {
  Model, or
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(models.users, {
        foreignKey: 'usersId'

      })
      orders.hasMany(models.productsInOders, {
        foreignKey: 'orderId'
        
      })
    }
  }
  orders.init({
    usersId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};