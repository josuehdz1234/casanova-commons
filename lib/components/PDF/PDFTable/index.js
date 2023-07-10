"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PDFTable;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _renderer = require("@react-pdf/renderer");
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function PDFTable(_ref) {
  var columns = _ref.columns,
    dataList = _ref.dataList;
  return /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: _styles["default"].tableContainer
  }, /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: _styles["default"].table
  }, /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: _styles["default"].headerContainer
  }, columns.map(function (column) {
    var label = column.label,
      field = column.field;
    var width = "".concat(100 / columns.length, "%");
    return /*#__PURE__*/_react["default"].createElement(_renderer.View, {
      key: field,
      style: [_styles["default"].header, {
        width: width
      }]
    }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
      style: _styles["default"].headerTitle
    }, label));
  })), /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: _styles["default"].body
  }, dataList.map(function (data) {
    var currentList = Object.entries(data).filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        key = _ref3[0];
      return key !== 'id' && key !== 'uuid';
    });
    var colWidth = "".concat(100 / currentList.length, "%");
    return /*#__PURE__*/_react["default"].createElement(_renderer.View, {
      key: data.id,
      style: _styles["default"].bodyRow
    }, currentList.map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];
      var columnProps = columns.find(function (_ref6) {
        var field = _ref6.field;
        return field === key;
      }) || {};
      var _columnProps$styles = columnProps.styles,
        columnStyles = _columnProps$styles === void 0 ? [] : _columnProps$styles;
      return /*#__PURE__*/_react["default"].createElement(_renderer.View, {
        key: key,
        style: [_styles["default"].bodyColumn, {
          width: colWidth
        }].concat(_toConsumableArray(columnStyles))
      }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
        style: _styles["default"].bodyText
      }, value));
    }));
  }))));
}
PDFTable.propTypes = {
  columns: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  dataList: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired
};