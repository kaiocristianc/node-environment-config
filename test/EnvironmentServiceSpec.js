var assert = require("assert")
var EnvironmentService = require("../lib/EnvironmentService");

var configEnvironmentProduction = require("../test/config/env/production");
var configEnvironmentDevelopment = require("../test/config/env/development");

describe('#testEnvironmentService() Development', function () {
    it('should return the config configuration sucessfuly when configFolderPath is set', function () {
        var environment = 'development';
        var environmentConfig = EnvironmentService.getEnvironmentConfig('test/config/env', environment);
        assert.equal(environmentConfig, configEnvironmentDevelopment);
        environmentConfig = EnvironmentService.getEnvironmentConfig('test/config/env');
        assert.equal(environmentConfig, configEnvironmentDevelopment);
    });
});

describe('#testEnvironmentService() Production', function () {
    it('should return the config configuration sucessfuly when configFolderPath is set', function () {
        var environment = 'production';
        var environmentConfig = EnvironmentService.getEnvironmentConfig('test/config/env', environment);
        assert.equal(environmentConfig, configEnvironmentProduction)
    });
});

