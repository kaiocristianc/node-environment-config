var assert = require("assert")
var EnvironmentService = require("../lib/EnvironmentService");
var mainConfig = require("../lib/EnvironmentConfig");

describe('#test main file', function () {
    it('main return the correct inner modules', function () {
        assert.equal(mainConfig.environmentService, EnvironmentService)
    });
});