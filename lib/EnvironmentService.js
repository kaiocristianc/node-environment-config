require('rootpath')();
var fs = require('fs');
exports.getEnvironmentConfig = function (configFolderPath, environment) {
  environment = getEnvironment(environment);
  var pathEnvironments = getConfigFolderPath(configFolderPath);
  var envConfigPath = pathEnvironments + '/' + environment + '.js';
  var environmentConfig = {};
  if (fs.existsSync(envConfigPath)) {
    console.log('Running with environment: ' + environment);
    environmentConfig = require(envConfigPath);
  } else {
    console.log('Environment config for ' + environment + ' not found.');
  }
  return environmentConfig;
};


function getConfigFolderPath(configFilePath) {
  if (configFilePath) {
    return configFilePath;
  } else {
    var firstOption = 'config/env';
    var secondOption = 'config/environments';
    if (fs.existsSync(firstOption)) {
      return firstOption
    } else if (fs.existsSync(secondOption)) {
      return secondOption
    } else {
      throw "No environment configuration folder was found";
    }
  }
}

function getEnvironment(environment) {
  if (!environment) {
    environment = process.env.NODE_ENV || 'development';
  }
  return environment;
}
