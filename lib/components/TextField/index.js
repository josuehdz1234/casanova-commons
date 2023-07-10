"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = _interopRequireDefault(require("../../utils/i18n"));
require("./TextField.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TextField = function TextField(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    status = _ref.status,
    noMb = _ref.noMb;
  var cls = (0, _classnames["default"])(status && "text-".concat(status));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group TextField ".concat(noMb ? 'TextField--no-mb' : '')
  }, /*#__PURE__*/_react["default"].createElement("label", null, title.toUpperCase()), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    className: cls
  }, value || (0, _i18n["default"])('COMMONS__NOT_INFO')));
};
TextField.propTypes = {
  value: _propTypes["default"].string,
  title: _propTypes["default"].string,
  status: _propTypes["default"].string
};
var _default = TextField;
exports["default"] = _default;