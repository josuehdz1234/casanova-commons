"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["id", "label", "right"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Input(props) {
  var name = props.name,
    error = props.error;
  var id = props.id,
    label = props.label,
    right = props.right,
    rest = _objectWithoutProperties(props, _excluded);
  var icn = (0, _classnames["default"])('form-control', hasError && 'is-invalid', right && 'input-group-br-no');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-label', hasError && error && 'text-danger'),
    htmlFor: id
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-input-group"
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    className: icn
  }, field, {
    value: field.value || ''
  }, rest)), right && /*#__PURE__*/_react["default"].createElement("span", {
    className: "right-content"
  }, right)), hasError && /*#__PURE__*/_react["default"].createElement("small", {
    className: "form-text text-danger"
  }, error));
}
Input.propTypes = {
  error: _propTypes["default"].string
};
Input.defaultProps = {};
var _default = Input;
exports["default"] = _default;