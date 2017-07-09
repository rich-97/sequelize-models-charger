module.exports = function (sequelize, DataTypes) {
  const modelName = 'foo'

  const attrs = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }

  const opts = {
    classMethods: {
      associate: function (models) {
        this.belongsTo(models.Bar)
      }
    }
  }

  return sequelize.define(modelName, attrs, opts)
}
