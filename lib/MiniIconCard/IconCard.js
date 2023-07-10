"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MiniIconCard;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./style.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function MiniIconCard(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    Icon = _ref.Icon,
    _ref$uppercase = _ref.uppercase,
    uppercase = _ref$uppercase === void 0 ? false : _ref$uppercase,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    _ref$containerStyle = _ref.containerStyle,
    containerStyle = _ref$containerStyle === void 0 ? '' : _ref$containerStyle,
    iconDomProps = _ref.iconDomProps,
    classNameCustomSize = _ref.classNameCustomSize,
    classNameTitleSize = _ref.classNameTitleSize,
    onClick = _ref.onClick,
    _ref$containerClassNa = _ref.containerClassName,
    containerClassName = _ref$containerClassNa === void 0 ? '' : _ref$containerClassNa;
  var getSize = function getSize() {
    var width = '200px';
    var height = '190px';
    var titleFontSize = 'h5';
    var containerClass = 'mini-card-container';
    switch (size) {
      case 'extraSmall':
        width = '30px';
        height = '30px';
        containerClass = 'mini-card-container-xs';
        break;
      case 'small':
        width = '140px';
        height = '130px';
        titleFontSize = 'h6';
        containerClass = 'mini-card-container-xs';
        break;
      case 'medium':
        width = '200px';
        height = '190px';
        titleFontSize = 'h5';
        break;
      default:
        break;
    }
    var container = {
      width: width,
      height: height
    };
    return [container, titleFontSize, containerClass];
  };
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "d-inline-block ".concat(containerStyle, " ").concat(size !== 'extraSmall' && 'btn', " ").concat(containerClassName),
    onClick: onClick
  }, iconDomProps), /*#__PURE__*/_react["default"].createElement("div", {
    className: classNameCustomSize || getSize()[2],
    style: classNameCustomSize ? {} : getSize()[0]
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row p-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12 p-0 justify-content-center d-flex align-items-center"
  }, Icon && Icon)), size !== 'extraSmall' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "row mt-3 p-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12 p-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-secondary ".concat(classNameTitleSize || getSize()[1])
  }, uppercase ? title.toUpperCase() : title)))))));
}
MiniIconCard.propTypes = {
  Icon: _propTypes["default"].node,
  title: _propTypes["default"].string,
  uppercase: _propTypes["default"].bool,
  containerStyle: _propTypes["default"].string
};