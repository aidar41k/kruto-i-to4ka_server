'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Rating, Type, Brand, BasketDevice, DeviceInfo }) {
      // define association here
      this.hasMany(Rating);
      this.hasMany(BasketDevice)
      this.hasMany(DeviceInfo);
      this.belongsTo(Type);
      this.belongsTo(Brand);
    }
  }
  Device.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Device',
  });
  return Device;
};