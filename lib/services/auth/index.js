"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = getToken;
exports.logout = logout;
var _auth = require("../../utils/constants/auth");
function logout() {
  localStorage.removeItem(_auth.AUTH.TOKEN);
  window.location.reload();
}
function getToken() {
  return localStorage.getItem(_auth.AUTH.TOKEN);
}