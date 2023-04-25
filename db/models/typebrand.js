'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeBrand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeBrand.init(
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    {
      sequelize,
      modelName: "TypeBrand",
    }
  );
  return TypeBrand;
};