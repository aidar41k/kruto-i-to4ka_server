'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Device, Brand, TypeBrand}) {
      // define association here
      this.hasMany(Device)
      this.belongsToMany(Brand, {through: TypeBrand})
    }
  }
  Type.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};