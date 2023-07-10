"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUAT = exports.isPROD = exports.isIST = void 0;
var isIST = function isIST() {
  return process.env.REACT_APP_ENV_NAME === 'ist';
};
exports.isIST = isIST;
var isUAT = function isUAT() {
  return process.env.REACT_APP_ENV_NAME === 'uat';
};
exports.isUAT = isUAT;
var isPROD = function isPROD() {
  return process.env.REACT_APP_ENV_NAME === 'prod';
};
exports.isPROD = isPROD;