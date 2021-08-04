"use strict";
exports.__esModule = true;
var log4js = require("log4js");
log4js.configure('logconfig.json');
var log = log4js.getLogger();
exports["default"] = log;
