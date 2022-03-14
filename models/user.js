'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role,{
        as:'role',
        foreignKey:'role_id'
      })
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.String,
    first_name: DataTypes.String,
    last_name: DataTypes.String,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    timestamps:false,
    tableName: 'roles_users'
  });
  return User;
};