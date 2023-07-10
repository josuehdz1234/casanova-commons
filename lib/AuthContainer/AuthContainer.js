"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AuthContainer;
var _react = _interopRequireDefault(require("react"));
var Icons = _interopRequireWildcard(require("../Icons"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function AuthContainer(_ref) {
  var children = _ref.children,
    title = _ref.title,
    subtitle = _ref.subtitle,
    loading = _ref.loading,
    error = _ref.error;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-login"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, loading && !error ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-1"
  }, /*#__PURE__*/_react["default"].createElement(Icons.Logo, {
    className: "page-login-scaling",
    width: "100%",
    height: "100%"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-6 text-center"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-white"
  }, "Cargando...")))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xs-11 col-sm-10 col-md-6 col-lg-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-login-form"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row justify-content-center page-login-form-top"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col d-flex justify-content-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-login-logo"
  }, /*#__PURE__*/_react["default"].createElement(Icons.Logo, null)))), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-center sub text-uppercase"
  }, title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-center"
  }, subtitle), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children)))))));
}