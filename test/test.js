const assert = require('assert')
const path = require('path')

const Sequelize = require('sequelize')

const modelsLoader = require('../')

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: ':memory:'
})

const pathModels = path.join(__dirname, 'test-models')

describe('Load the test-models', () => {
  it('Load the models without associating them', () => {
    let models

    try {
      models = modelsLoader(pathModels, {
        associateModels: false,
        sequelize
      })

      assert(typeof models === 'object')
    } catch (error) {
      assert(false)
    }
  })

  it('Load the models and associating them', () => {
    let models

    try {
      models = modelsLoader(pathModels, { sequelize })

      assert(typeof models === 'object')
    } catch (error) {
      assert(false)
    }
  })
})
