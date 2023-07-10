"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _get2 = _interopRequireDefault(require("lodash/get"));
var _SearchableSelect = _interopRequireDefault(require("./SearchableSelect"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var withListOptions = (0, _reactRedux.connect)(function (state, _ref) {
  var options = _ref.options;
  var data = (0, _get2["default"])(state, options, {});
  return {
    options: data.list || []
  };
});
var _default = withListOptions(_SearchableSelect["default"]);
exports["default"] = _default;