"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _noop2 = _interopRequireDefault(require("lodash/noop"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function calculatePages(page, totalPages) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  if (totalPages <= 1) {
    return null;
  }
  if (totalPages <= 5) {
    return {
      first: 1,
      startPage: 2,
      endPage: totalPages - 1,
      last: totalPages
    };
  }
  if (totalPages > 5) {
    if (page === totalPages) {
      var _startPage = page - offset + 1;
      return {
        first: 1,
        startPage: _startPage,
        endPage: _startPage + offset - 1,
        last: page
      };
    }
    var position = (page - 2) % offset;
    var startPage = page - position;
    var finalPage = startPage + (offset - 1);
    var endPage = finalPage > totalPages - 1 ? totalPages : finalPage;
    return {
      first: 1,
      startPage: startPage,
      endPage: endPage,
      last: totalPages
    };
  }
  return null;
}
function TableNavigation(props) {
  var onChange = props.onChange,
    search = props.search;
  var params = search.params;
  var rawPage = params.page;
  var totalPages = search.totalPages;
  var page = props.hasZero ? rawPage + 1 : rawPage;
  var pagination = calculatePages(page, totalPages);
  var pages = [];
  var handleClick = (0, _react.useCallback)(function (index) {
    onChange(props.hasZero ? index - 1 : index);
  }, []);
  if (pagination) {
    var startPage = pagination.startPage,
      endPage = pagination.endPage,
      first = pagination.first,
      last = pagination.last;
    var _loop = function _loop(i) {
      var active = i === page;
      pages.push( /*#__PURE__*/_react["default"].createElement("li", {
        key: i,
        className: "page-item ".concat(active ? 'active' : ''),
        onClick: function onClick() {
          return handleClick(i);
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "page-link",
        href: "#"
      }, i)));
    };
    for (var i = startPage; i <= endPage; i++) {
      _loop(i);
    }
    var isFirst = page === first;
    var isLast = page === last;
    return /*#__PURE__*/_react["default"].createElement("nav", {
      className: "table-navigation"
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "pagination"
    }, /*#__PURE__*/_react["default"].createElement("li", {
      className: "page-item ".concat(isFirst ? 'disabled' : ''),
      onClick: function onClick() {
        return !isFirst && handleClick(page - 1);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "page-link",
      href: "#"
    }, "Anterior")), /*#__PURE__*/_react["default"].createElement("li", {
      className: "page-item ".concat(isFirst ? 'active' : ''),
      onClick: function onClick() {
        return !isFirst && handleClick(first);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "page-link",
      href: "#"
    }, first)), page > 4 && /*#__PURE__*/_react["default"].createElement("li", {
      className: "page-item",
      onClick: function onClick() {
        return handleClick(startPage - 1);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "page-link",
      href: "#"
    }, "\u2026")), pages, totalPages > 5 && endPage != totalPages && /*#__PURE__*/_react["default"].createElement("li", {
      className: "page-item",
      onClick: function onClick() {
        return handleClick(endPage + 1);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "page-link",
      href: "#"
    }, "\u2026")), startPage !== 1 && endPage != totalPages && /*#__PURE__*/_react["default"].createElement("li", {
      className: "page-item ".concat(isLast ? 'active' : ''),
      onClick: function onClick() {
        return !isLast && handleClick(last);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "page-link",
      href: "#"
    }, last)), /*#__PURE__*/_react["default"].createElement("li", {
      className: "page-item ".concat(isLast ? 'disabled' : ''),
      onClick: function onClick() {
        return !isLast && handleClick(page + 1);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "page-link",
      href: "#"
    }, "Siguiente"))));
  }
  return /*#__PURE__*/_react["default"].createElement("div", null);
}
TableNavigation.propTypes = {
  params: _propTypes["default"].object,
  totalPages: _propTypes["default"].number,
  totalElements: _propTypes["default"].number,
  result: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  hasZero: _propTypes["default"].bool
};
TableNavigation.defaultProps = {
  onChange: _noop2["default"],
  hasZero: true
};
var _default = TableNavigation;
exports["default"] = _default;