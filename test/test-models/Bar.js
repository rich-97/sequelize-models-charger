module.exports = function (sequelize, DataTypes) {
  const modelName = 'bar'

  const attrs = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }

  return sequelize.define(modelName, attrs)
}
