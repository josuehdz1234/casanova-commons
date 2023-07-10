"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function IconListItem(props) {
  var item = props.item;
  var label = item.label,
    Icon = item.icon;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-item"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "sidebar-item-icon"
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    alt: label
  })));
}
function IconList(props) {
  var items = props.items;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar"
  }, items.map(function (item) {
    var name = item.name;
    return /*#__PURE__*/_react["default"].createElement(IconListItem, {
      item: item,
      key: name
    });
  }));
}
IconList.propTypes = {
  items: _propTypes["default"].array
};
IconList.defaultProps = {
  items: []
};
var _default = IconList;
exports["default"] = _default;