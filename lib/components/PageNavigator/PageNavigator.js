"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PageNavigator;
var _react = _interopRequireWildcard(require("react"));
var Icons = _interopRequireWildcard(require("../../Icons"));
require("./PageNavigator.scss");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
function PageNavigator(_ref) {
  var _ref$loop = _ref.loop,
    loop = _ref$loop === void 0 ? false : _ref$loop,
    elements = _ref.elements,
    _ref$pageSize = _ref.pageSize,
    pageSize = _ref$pageSize === void 0 ? 1 : _ref$pageSize,
    _ref$onChangeCurrentP = _ref.onChangeCurrentPage,
    onChangeCurrentPage = _ref$onChangeCurrentP === void 0 ? function () {} : _ref$onChangeCurrentP,
    _ref$onDecreasePage = _ref.onDecreasePage,
    onDecreasePage = _ref$onDecreasePage === void 0 ? function () {} : _ref$onDecreasePage,
    _ref$onIncreasePage = _ref.onIncreasePage,
    onIncreasePage = _ref$onIncreasePage === void 0 ? function () {} : _ref$onIncreasePage,
    children = _ref.children,
    _ref$containerClassNa = _ref.containerClassName,
    containerClassName = _ref$containerClassNa === void 0 ? '' : _ref$containerClassNa,
    _ref$childrenClassNam = _ref.childrenClassName,
    childrenClassName = _ref$childrenClassNam === void 0 ? '' : _ref$childrenClassNam;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    pages = _useState4[0],
    setPages = _useState4[1];
  (0, _react.useEffect)(function () {
    if (elements.length > 0) {
      var allElements = _toConsumableArray(elements);
      var allPages = [];
      while (allElements.length > 0) {
        var page = allElements.splice(0, pageSize);
        allPages.push(page[0]);
      }
      setPages(allPages);
    } else if (elements.length === 0) setPages([]);
  }, [elements, pageSize]);
  var handleDecreasePage = (0, _react.useCallback)(function () {
    if (!loop && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    if (loop && currentPage === 0) {
      setCurrentPage(pages.length - 1);
    }
    onDecreasePage(currentPage);
  }, [setCurrentPage, currentPage, pages, loop]);
  var handleIncreasePage = (0, _react.useCallback)(function () {
    if (!loop && currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
    if (loop && currentPage === pages.length - 1) {
      setCurrentPage(0);
    }
    onIncreasePage(currentPage);
  }, [setCurrentPage, currentPage, pages, loop]);
  (0, _react.useEffect)(function () {
    onChangeCurrentPage(currentPage);
  }, [currentPage]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container-fluid ".concat(containerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-4 justify-content-start d-flex"
  }, (currentPage > 0 || loop) && /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn PageNavigator__Left-arrow",
    onClick: handleDecreasePage
  }, /*#__PURE__*/_react["default"].createElement(Icons.ChevronLeft, {
    width: "1.375rem",
    height: "1.375rem"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(childrenClassName)
  }, children)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-4 justify-content-end d-flex"
  }, (currentPage < pages.length - 1 || loop) && /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn PageNavigator__Right-arrow",
    onClick: handleIncreasePage
  }, /*#__PURE__*/_react["default"].createElement(Icons.ChevronRight, {
    width: "1.375rem",
    height: "1.375rem"
  })))));
}