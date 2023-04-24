"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, BasketDevice }) {
      // define association here
      this.belongsTo(User);
      this.hasMany(BasketDevice);
    }
  }
  Basket.init(
    {
      id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Basket",
    }
  );
  return Basket;
};
