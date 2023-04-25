'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BasketDevice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Basket, Device}) {
      // define association here
      this.belongsTo(Basket);
      this.belongsTo(Device)
    }
  }
  BasketDevice.init(
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    {
      sequelize,
      modelName: "BasketDevice",
    }
  );
  return BasketDevice;
};