var EnvironmentService = require("./EnvironmentService.js");

var EnvironmentConfig = function () {
    this.environmentService =  EnvironmentService;
};

module.exports = new EnvironmentConfig();