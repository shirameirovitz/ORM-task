'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MenuItem.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      vegetarian: DataTypes.BOOLEAN,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'MenuItem',
      tableName: 'MenuItems',
      underscored: true,
    }
  );
  return MenuItem;
};
