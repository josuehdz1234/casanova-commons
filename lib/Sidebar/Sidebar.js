"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Icons = require("../Icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
function SidebarItem(props) {
  var active = props.active,
    expanded = props.expanded,
    item = props.item,
    _onClick = props.onClick,
    labelVisible = props.labelVisible;
  var name = item.name,
    route = item.route,
    label = item.label,
    Icon = item.icon,
    _item$show = item.show,
    show = _item$show === void 0 ? true : _item$show;
  var isActive = active && active.startsWith(route);
  var hasChildren = Array.isArray(item.children) && item.children.length > 0;
  var className = (0, _classnames["default"])('nav-item', 'sidebar-item', isActive && 'active', hasChildren && 'dropdown');
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, show && /*#__PURE__*/_react["default"].createElement("li", {
    className: className,
    onClick: function onClick() {
      return _onClick(name, hasChildren && item.children[0].name);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "sidebar-item-icon"
  }, /*#__PURE__*/_react["default"].createElement(Icon, null)), /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _classnames["default"])('sidebar-item-label', labelVisible && 'visible', 'text-left')
  }, label), isActive && /*#__PURE__*/_react["default"].createElement("span", {
    className: "arrow-left"
  })));
}
SidebarItem.propTypes = {
  onClick: _propTypes["default"].func,
  expanded: _propTypes["default"].bool
};
SidebarItem.defaultProps = {
  onClick: _noop2["default"]
};
function Sidebar(props) {
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    expand = _useState2[1];
  var _useState3 = (0, _react.useState)(120),
    _useState4 = _slicedToArray(_useState3, 2),
    distanceToTop = _useState4[0],
    setDistanceToTop = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    sticky = _useState6[0],
    setSticky = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    timer = _useState8[0],
    setTimer = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    labelVisible = _useState10[0],
    setLabelVisible = _useState10[1];
  var items = props.items,
    activeRoute = props.activeRoute,
    onChangeRoute = props.onChangeRoute,
    children = props.children;
  var active = (0, _get2["default"])(activeRoute, 'general.route');
  var ref = (0, _react.useRef)(null);
  var sideBarRef = (0, _react.useRef)(null);
  var sidebarListRef = (0, _react.useRef)(null);
  var _useState11 = (0, _react.useState)('1px'),
    _useState12 = _slicedToArray(_useState11, 2),
    listMinHeight = _useState12[0],
    setListMinHeight = _useState12[1];
  var handleScroll = (0, _react.useCallback)((0, _debounce["default"])(function () {
    setDistanceToTop(sideBarRef.current.getBoundingClientRect().top);
  }, 350), []);
  (0, _react.useEffect)(function () {
    var observer = new IntersectionObserver(function (entries) {
      setSticky(!entries[0].intersectionRatio);
    }, {
      threshold: [0, 1]
    });
    observer.observe(ref.current);
    if (!sticky) {
      window.addEventListener('scroll', handleScroll);
    }
    return function () {
      observer.disconnect();
      if (!sticky) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [expanded]);
  (0, _react.useEffect)(function () {
    if (sidebarListRef.current) {
      var itemsHeight = Object.values(sidebarListRef.current.children).reduce(function (acc, listItem) {
        var _ref = listItem.getBoundingClientRect() || {},
          _ref$height = _ref.height,
          height = _ref$height === void 0 ? 0 : _ref$height;
        return acc + height;
      }, 0);
      if (itemsHeight) {
        var minHeight = window.parseInt(itemsHeight * 1.11);
        var newListMinHeight = "".concat(minHeight, "px");
        setListMinHeight(newListMinHeight);
      }
    }
  }, [sidebarListRef]);
  var handleExpand = (0, _react.useCallback)(function () {
    var next = !expanded;
    expand(next);
    if (next) {
      if (timer) {
        clearTimeout(timer);
      } else {
        var newTimer = setTimeout(function () {
          setTimer(null);
          setLabelVisible(true);
        }, 500);
        setTimer(newTimer);
      }
    } else {
      clearTimeout(timer);
      setTimer(null);
      setLabelVisible(false);
    }
  }, [expand, expanded]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    style: {
      height: 0,
      backgroundColor: 'red'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: sideBarRef,
    className: "sidebar ".concat(expanded && 'expanded', " ").concat(sticky && 'sticky'),
    style: sticky ? undefined : {
      height: "calc(100vh - ".concat(distanceToTop, "px)")
    }
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "nav flex-column sidebar-list",
    ref: sidebarListRef,
    style: {
      minHeight: listMinHeight
    }
  }, items.map(function (item) {
    var label = item.label;
    return /*#__PURE__*/_react["default"].createElement(SidebarItem, {
      key: label,
      item: item,
      expanded: expanded,
      onClick: onChangeRoute,
      active: active,
      labelVisible: labelVisible
    });
  }), /*#__PURE__*/_react["default"].createElement("li", {
    key: "close",
    className: "nav-item sidebar-item sidebar-toggle",
    onClick: handleExpand
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_Icons.HideMenu, null)), /*#__PURE__*/_react["default"].createElement("span", null, expanded ? 'Cerrar menú' : '')))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-pusher ".concat(expanded && 'expanded')
  }, children));
}
Sidebar.propTypes = {
  activeRoute: _propTypes["default"].object
};
var _default = Sidebar;
exports["default"] = _default;