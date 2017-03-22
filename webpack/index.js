// exports.developmentConfig = require('./config/devlopment');
// exports.productionConfig = require('./config/production');
var config;
if (process.env.NODE_ENV === 'production') {
  config = require('./config/production');
} else {
  config = require('./config/devlopment');
}

module.exports = config;