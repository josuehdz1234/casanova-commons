"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _capitalize2 = _interopRequireDefault(require("lodash/capitalize"));
var _Sidebar = _interopRequireDefault(require("../Sidebar"));
var _Icons = require("../Icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Layout(_ref) {
  var logoSara = _ref.logoSara,
    sidebarItems = _ref.sidebarItems,
    activeRoute = _ref.activeRoute,
    onChangeRoute = _ref.onChangeRoute,
    userFullName = _ref.userFullName,
    userBranch = _ref.userBranch,
    logout = _ref.logout,
    _ref$showSidebar = _ref.showSidebar,
    showSidebar = _ref$showSidebar === void 0 ? true : _ref$showSidebar,
    children = _ref.children,
    _ref$contentClassName = _ref.contentClassName,
    contentClassName = _ref$contentClassName === void 0 ? '' : _ref$contentClassName,
    _ref$headerClassName = _ref.headerClassName,
    headerClassName = _ref$headerClassName === void 0 ? '' : _ref$headerClassName;
  var handleLogout = (0, _react.useCallback)(function () {
    logout();
  }, [logout]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "layout container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row row-header ".concat(headerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col col-header"
  }, logoSara ? /*#__PURE__*/_react["default"].createElement(_Icons.LogoSara, {
    height: "60%"
  }) : /*#__PURE__*/_react["default"].createElement(_Icons.CasanovaLogo, null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col col-header col-header-right"
  }, userFullName && /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-header-user mr-3"
  }, /*#__PURE__*/_react["default"].createElement("p", null, userFullName), userBranch && /*#__PURE__*/_react["default"].createElement("p", {
    className: "branch text-secondary text-left"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-weight-bold mr-2"
  }, "Sucursal ", (0, _capitalize2["default"])(userBranch)))), /*#__PURE__*/_react["default"].createElement(_Icons.Power, {
    width: "1.5rem",
    height: "1.5rem",
    className: "pointer",
    onClick: handleLogout
  }), /*#__PURE__*/_react["default"].createElement(_Icons.Logo, {
    width: "4.5rem",
    height: "4.5rem",
    style: {
      marginLeft: '1.125rem'
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "something",
    className: "row flex-nowrap"
  }, showSidebar ? /*#__PURE__*/_react["default"].createElement(_Sidebar["default"], {
    activeRoute: activeRoute,
    items: sidebarItems,
    onChangeRoute: onChangeRoute
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container-fluid content ".concat(contentClassName)
  }, children)) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "container-fluid content ".concat(contentClassName)
  }, children)));
}
Layout.propTypes = {
  sidebarItems: _propTypes["default"].array,
  activeRoute: _propTypes["default"].object,
  onChangeRoute: _propTypes["default"].func,
  userFullName: _propTypes["default"].string.isRequired,
  userBranch: _propTypes["default"].string,
  logoSara: _propTypes["default"].bool,
  logout: _propTypes["default"].func,
  contentClassName: _propTypes["default"].string,
  headerClassName: _propTypes["default"].string
};
Layout.defaultProps = {
  sidebarItems: [],
  onChangeRoute: _noop2["default"],
  logoSara: false,
  logout: _noop2["default"]
};
var _default = Layout;
exports["default"] = _default;