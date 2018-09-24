var merge = require('webpack-merge')
var productionEnv = require('./production.env')

module.exports = merge(productionEnv, {
  NODE_ENV: '"development"'
})
