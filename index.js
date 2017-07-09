/**
 * A module for load the models.
 * @module sequelize-models-charger
 */

/* Dependencies */

const fs = require('fs')
const path = require('path')

const debug = require('debug')('app:models-charger')

/* Module export */

module.exports = modelsCharger

/**
 * modelsCharger - function for load the models.
 *
 * @param {String} pathModels the path to the models directory.
 * @param {Object} config     the configuration for load the models.
 *   @property {Boolean} config.associateModels Indicate if the models should be associated.
 *   @property {Object} config.sequelize        An intance of Sequelize.
 * @return {Object} The models.
 */
function modelsCharger (pathModels, config = {}) {
  // Default values.
  config = Object.assign({
    associateModels: true
  }, config)

  const { sequelize, associateModels } = config
  const models = {}
  // _ is lodash.
  const _ = sequelize.Sequelize.Utils._

  // Get the models files.
  let files = fs.readdirSync(pathModels)

  // Filtering files, ignore `index.js` and other files without `.js` extension.
  files = files.filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js')
  })

  // Import models and associate it.
  files.forEach(file => {
    const model = sequelize.import(path.join(pathModels, file))
    const modelName = model.name[0].toUpperCase() + model.name.substr(1)

    debug('%s imported', modelName)

    models[modelName] = model
  })

  // Associate the models.
  Object.keys(models).forEach(modelName => {
    const model = models[modelName]

    if (associateModels) {
      if (model.associate && _.isFunction(model.associate)) {
        debug('%s associated', modelName)
        model.associate(models)
      } else {
        debug('%s not associated', modelName)
      }
    }
  })

  return models
}