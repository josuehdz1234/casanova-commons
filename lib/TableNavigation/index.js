"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _branch = _interopRequireDefault(require("recompose/branch"));
var _renderNothing = _interopRequireDefault(require("recompose/renderNothing"));
var _TableNavigation = _interopRequireDefault(require("./TableNavigation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = (0, _branch["default"])(function (props) {
  return !props.search.params;
}, _renderNothing["default"])(_TableNavigation["default"]);
exports["default"] = _default;