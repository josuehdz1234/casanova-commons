"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _classnames = _interopRequireDefault(require("classnames"));
var _has2 = _interopRequireDefault(require("lodash/has"));
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var UserInfo = function UserInfo(props) {
  var left = props.left,
    _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label;
  var isUpdated = !(0, _isEmpty2["default"])(props.updated);
  var actionProp = isUpdated ? 'updated' : 'inserted';
  var userName = (0, _get2["default"])(props, "".concat(actionProp, ".by.fullname"), 'Sin informacion');
  var dtModify = (0, _get2["default"])(props, "".concat(actionProp, ".at"), undefined);
  var dateInsert = dtModify ? (0, _moment["default"])(dtModify).format('DD/MM/YYYY hh:mm A') : '';
  var hasInsert = (0, _has2["default"])(props, 'inserted');
  var cls = (0, _classnames["default"])('d-flex flex-row', !left && 'justify-content-end');
  var principalLabel = isUpdated ? 'EDITADO' : 'ALTA';
  return hasInsert ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, ' ', /*#__PURE__*/_react["default"].createElement("div", {
    className: cls
  }, /*#__PURE__*/_react["default"].createElement("sub", {
    className: "subtitle"
  }, label || principalLabel, ": ", userName, ' ', /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      textTransform: 'lowercase'
    }
  }, dateInsert), ".")), ' ', /*#__PURE__*/_react["default"].createElement("br", null), ' ') : null;
};
var _default = UserInfo;
exports["default"] = _default;