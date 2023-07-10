"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _isObject2 = _interopRequireDefault(require("lodash/isObject"));
var Icons = _interopRequireWildcard(require("../../Icons"));
var _FilePage = _interopRequireDefault(require("./FilePage"));
require("./FileViewer.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FileViewer = function FileViewer(_ref) {
  var _fileList$current;
  var _ref$files = _ref.files,
    files = _ref$files === void 0 ? [] : _ref$files;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    fileList = _useState4[0],
    setFileList = _useState4[1];
  var increaseCurrent = (0, _react.useCallback)(function () {
    if (current === files.length - 1) return false;
    setCurrent(current + 1);
  }, [current, files]);
  var decreaseCurrent = (0, _react.useCallback)(function () {
    if (current === 0) return false;
    setCurrent(current - 1);
  }, [current]);
  (0, _react.useEffect)(function () {
    if (files) {
      var filesWithId = files.map(function (file, index) {
        if ((0, _isObject2["default"])(file)) {
          return _objectSpread(_objectSpread({}, file), {}, {
            id: index
          });
        }
        return {
          file: file,
          id: index
        };
      });
      setFileList(filesWithId);
    }
  }, [files]);
  var currentTitle = (_fileList$current = fileList[current]) === null || _fileList$current === void 0 ? void 0 : _fileList$current.title;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, fileList && /*#__PURE__*/_react["default"].createElement("div", {
    className: "FileViewer"
  }, fileList.map(function (_ref2, index) {
    var file = _ref2.file,
      id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement(_FilePage["default"], {
      key: id,
      url: file,
      index: index,
      currentIndex: current
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ViewerControls"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    onClick: decreaseCurrent,
    onKeyDown: decreaseCurrent,
    tabIndex: "0",
    role: "button",
    className: "ViewerControls__controls"
  }, current !== 0 && /*#__PURE__*/_react["default"].createElement(Icons.ChevronLeft, {
    width: "1.5rem",
    height: "1.5rem"
  })), currentTitle && /*#__PURE__*/_react["default"].createElement("h6", {
    className: "mt-1 mb-3 text-uppercase"
  }, currentTitle), /*#__PURE__*/_react["default"].createElement("span", {
    onClick: increaseCurrent,
    onKeyDown: increaseCurrent,
    tabIndex: "0",
    role: "button",
    className: "ViewerControls__controls"
  }, current !== files.length - 1 && /*#__PURE__*/_react["default"].createElement(Icons.ChevronRight, {
    width: "1.5rem",
    height: "1.5rem"
  }))));
};
FileViewer.propTypes = {
  files: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]))
};
var _default = FileViewer;
exports["default"] = _default;