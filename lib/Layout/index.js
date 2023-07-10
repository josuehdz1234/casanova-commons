"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.withLayout = withLayout;
var _react = _interopRequireDefault(require("react"));
var _Layout = _interopRequireDefault(require("./Layout"));
var _Title = _interopRequireDefault(require("./Title"));
var _Body = _interopRequireDefault(require("./Body"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function withLayout(menuItems) {
  return function (Component) {
    return function (props) {
      return /*#__PURE__*/_react["default"].createElement(_Layout["default"], {
        title: props.title,
        sidebarItems: menuItems,
        showSidebar: props.showSidebar
      }, /*#__PURE__*/_react["default"].createElement(Component, props));
    };
  };
}
_Layout["default"].Title = _Title["default"];
_Layout["default"].Body = _Body["default"];
var _default = _Layout["default"];
exports["default"] = _default;