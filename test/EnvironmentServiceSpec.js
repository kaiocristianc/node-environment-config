var assert = require("assert")
var EnviromnentService = require("../api/services/EnviromnentService");
var configEnvironmentProduction = require("../test/config/env/production");
var configEnvironmentDevelopment = require("../test/config/env/development");

describe('Xml', function () {
  describe('#testEnviromnentService() Development', function () {
    it('should return the config configuration sucessfuly when configFolderPath is set', function () {
      var environment = 'development';
      var environmentConfig = EnviromnentService.getEnvironmentConfig('test/config/env', environment);
      assert.equal(environmentConfig, configEnvironmentDevelopment);
      environmentConfig = EnviromnentService.getEnvironmentConfig('test/config/env');
      assert.equal(environmentConfig, configEnvironmentDevelopment);
    });

    it('should return the config configuration sucessfuly', function () {
      var environmentConfig = EnviromnentService.getEnvironmentConfig();
      assert.equal(environmentConfig.port, 'test');
      assert.equal(environmentConfig.environment, 'development');
    })
  });

  describe('#testEnviromnentService() Production', function () {
    it('should return the config configuration sucessfuly when configFolderPath is set', function () {
      var environment = 'production';
      var environmentConfig = EnviromnentService.getEnvironmentConfig('test/config/env', environment);
      assert.equal(environmentConfig, configEnvironmentProduction)
    });

    it('should return the config configuration sucessfuly', function () {
      var environment = 'production';
      var environmentConfig = EnviromnentService.getEnvironmentConfig(undefined, environment);
      assert.equal(environmentConfig.port, 'test');
      assert.equal(environmentConfig.environment, 'production');
    });
  })
});
