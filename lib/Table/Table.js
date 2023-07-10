"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _classnames = _interopRequireDefault(require("classnames"));
var _i18n = _interopRequireDefault(require("../utils/i18n"));
var _Dropdown = _interopRequireDefault(require("../Dropdown"));
var _Circles = _interopRequireDefault(require("../Circles"));
var Icons = _interopRequireWildcard(require("../Icons"));
var _constants = require("../utils/constants");
var _versions = _interopRequireDefault(require("../utils/constants/versions"));
var _noImage = _interopRequireDefault(require("./renderers/no-image.png"));
require("./Table.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable jsx-a11y/anchor-is-valid */
var ColumnHeader = function ColumnHeader(_ref) {
  var column = _ref.column,
    label = _ref.label;
  var align = column.align;
  var className = "text-".concat(align || 'left');
  return /*#__PURE__*/_react["default"].createElement("th", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement("b", null, label));
};
var Cell = function Cell(_ref2) {
  var column = _ref2.column,
    value = _ref2.value,
    children = _ref2.children;
  var align = column.align;
  var className = "text-".concat(align || 'left');
  return /*#__PURE__*/_react["default"].createElement("td", {
    className: className
  }, children, value);
};
var CellImage = function CellImage(_ref3) {
  var value = _ref3.value;
  return /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("img", {
    src: value || _noImage["default"],
    alt: "background"
  }));
};
var CellLink = function CellLink(_ref4) {
  var column = _ref4.column;
  var label = column.label;
  return /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#"
  }, label));
};
var CellCard = function CellCard() {
  var _title$description = {
      title: 'Chevrolet Beat',
      description: 'Apariencia moderna para el mundo'
    },
    title = _title$description.title,
    description = _title$description.description;
  return /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("h2", null, title), /*#__PURE__*/_react["default"].createElement("p", null, description), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "nav"
  }, /*#__PURE__*/_react["default"].createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "nav-link"
  }, "Editar")), /*#__PURE__*/_react["default"].createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "nav-link"
  }, "Edicion rapida")), /*#__PURE__*/_react["default"].createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "nav-link"
  }, "Ver")), /*#__PURE__*/_react["default"].createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "nav-link"
  }, "Eliminar")))));
};
var cols = [{
  field: 'photo',
  label: 'Fotografia',
  align: 'center',
  renderer: CellImage
}, {
  field: 'name',
  label: 'Nombre',
  renderer: CellCard
}, {
  field: '250km',
  label: 'Km_250',
  renderer: Cell
}, {
  field: 'milFree',
  label: 'Km libre',
  renderer: Cell
}, {
  field: 'weekly',
  label: 'Semanal',
  renderer: Cell
}, {
  field: 'monthly',
  label: 'Mensual',
  renderer: Cell
}, {
  field: 'category',
  label: 'Categoria',
  renderer: CellLink
}];
function RenderHead(_ref5) {
  var columns = _ref5.columns,
    additionalHeader = _ref5.additionalHeader,
    _ref5$removeItems = _ref5.removeItems,
    removeItems = _ref5$removeItems === void 0 ? false : _ref5$removeItems;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("tr", null, columns.map(function (col) {
    var label = col.label,
      field = col.field;
    return /*#__PURE__*/_react["default"].createElement(ColumnHeader, {
      key: field,
      column: col,
      field: field,
      label: label
    });
  }), removeItems && /*#__PURE__*/_react["default"].createElement(ColumnHeader, {
    column: "",
    field: "",
    label: ""
  })), additionalHeader && /*#__PURE__*/_react["default"].createElement("tr", {
    className: "custom-table-head-bg"
  }, columns.map(function (_ref6) {
    var AdditionalHeaderCamp = _ref6.AdditionalHeaderCamp,
      field = _ref6.field;
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: field
    }, AdditionalHeaderCamp && /*#__PURE__*/_react["default"].createElement(AdditionalHeaderCamp, null));
  })));
}
var BodyRow = function BodyRow(_ref7) {
  var rowKey = _ref7.id,
    _ref7$columns = _ref7.columns,
    columns = _ref7$columns === void 0 ? [] : _ref7$columns,
    onRowClick = _ref7.onRowClick,
    selectedRowDropdown = _ref7.selectedRowDropdown,
    dropdownCell = _ref7.dropdownCell,
    rowClassName = _ref7.rowClassName,
    data = _ref7.data,
    showDropdownMode = _ref7.showDropdownMode,
    cellToShowDropdown = _ref7.cellToShowDropdown,
    onAddElementToDropdown = _ref7.onAddElementToDropdown,
    removeItems = _ref7.removeItems,
    dataList = _ref7.dataList,
    dropdownOptions = _ref7.dropdownOptions,
    _onSelect = _ref7.onSelect,
    onDimmerClick = _ref7.onDimmerClick,
    onRemoveItem = _ref7.onRemoveItem,
    withEllipsis = _ref7.withEllipsis,
    _ref7$ellipsisClassNa = _ref7.ellipsisClassName,
    ellipsisClassName = _ref7$ellipsisClassNa === void 0 ? 'text-overflow-ellipsis-sm' : _ref7$ellipsisClassNa;
  var rowRef = (0, _react.useRef)({});
  var dropdownContainerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (rowRef.current.getBoundingClientRect && dropdownContainerRef.current) {
      var _rowRef$current$getBo = rowRef.current.getBoundingClientRect(),
        height = _rowRef$current$getBo.height;
      var finalHeight = height - height * 0.25;
      dropdownContainerRef.current.style.height = "".concat(parseInt(finalHeight, 10), "px");
    }
  }, [rowRef, dropdownContainerRef]);
  var handleRowClick = (0, _react.useCallback)(function (rowData) {
    var rowToOpenDropdown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!rowRef.current.stopPropagation) {
      if (onRowClick) onRowClick(rowData);
      if (dropdownCell && showDropdownMode === _constants.SHOW_DROPDOWN_MODE.ROW_CLICK) {
        onAddElementToDropdown(rowToOpenDropdown);
      }
    } else if (rowRef.current) {
      rowRef.current.stopPropagation = false;
    }
  }, [rowRef.current, onRowClick, dropdownCell, showDropdownMode, onAddElementToDropdown]);
  return /*#__PURE__*/_react["default"].createElement("tr", {
    ref: rowRef,
    tabIndex: "0",
    onClick: function onClick() {
      return handleRowClick(data, selectedRowDropdown ? null : rowKey);
    },
    className: "".concat(dropdownCell ? 'DropdownCell' : '', " ").concat(rowClassName)
  }, columns.map(function (col, i) {
    var cellKey = col.field + data.id;
    var field = col.field,
      CellComponent = col.renderer;
    var value = (0, _get2["default"])(data, field);
    var firstCell = i === 0;
    var cellWithDropdown = firstCell && dropdownCell;
    var keyToValueDropdown = showDropdownMode === _constants.SHOW_DROPDOWN_MODE.ROW_CLICK ? rowKey : cellKey;
    var selectedDropdown = cellToShowDropdown === keyToValueDropdown;
    var handleAction = function handleAction() {
      if (showDropdownMode === _constants.SHOW_DROPDOWN_MODE.POINTS_CLICK) {
        rowRef.current.stopPropagation = true;
        onAddElementToDropdown(selectedDropdown ? null : keyToValueDropdown);
      }
    };
    return /*#__PURE__*/_react["default"].createElement(CellComponent, {
      key: cellKey,
      value: value,
      data: data,
      dataList: dataList,
      column: col
    }, function (props) {
      var menuItems = props.dropdownOptions || dropdownOptions;
      var withMenuItems = menuItems && menuItems.length > 0;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(cellWithDropdown && 'd-flex BodyRowCell')
      }, cellWithDropdown && withMenuItems && /*#__PURE__*/_react["default"].createElement("div", {
        className: "btn p-0 DropdownCell__Container ".concat(selectedDropdown ? 'ShowDropdownCell' : ''),
        onClick: handleAction,
        onKeyPress: handleAction,
        role: "button",
        tabIndex: "-1",
        ref: dropdownContainerRef
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-md-12 d-flex flex-column flex-md-row justify-content-between p-0 mr-3"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "m-auto"
      }, /*#__PURE__*/_react["default"].createElement(_Dropdown["default"], {
        menuItems: menuItems,
        onSelect: function onSelect(values) {
          return _onSelect(_objectSpread(_objectSpread({}, values), data));
        },
        isVisible: selectedDropdown,
        onDimmerClick: onDimmerClick,
        showButton: false,
        buttonClassName: "p-0 m-0 bg-white"
      }, /*#__PURE__*/_react["default"].createElement(_Circles["default"], {
        className: "DropdownCell__Item ".concat(selectedDropdown ? 'd-flex' : ''),
        secondary: true
      }))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(withEllipsis && ellipsisClassName, cellWithDropdown && withMenuItems && 'd-flex DropdownCell text', cellWithDropdown && withMenuItems && selectedDropdown && 'text__active')
      }, props.value));
    });
  }), removeItems && /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "RemoveItemButton",
    type: "button",
    onClick: function onClick() {
      return onRemoveItem(data);
    },
    onKeyPress: function onKeyPress() {
      return onRemoveItem(data);
    },
    tabIndex: "0",
    role: "button"
  }, /*#__PURE__*/_react["default"].createElement(Icons.IcoDeleteGray, {
    width: "1.5rem",
    height: "1.5rem"
  }))));
};
function RenderBody(_ref8) {
  var dataList = _ref8.dataList,
    columns = _ref8.columns,
    emptyMessage = _ref8.emptyMessage,
    rowClick = _ref8.rowClick,
    rowClassName = _ref8.rowClassName,
    _ref8$dropdownCell = _ref8.dropdownCell,
    dropdownCell = _ref8$dropdownCell === void 0 ? false : _ref8$dropdownCell,
    _ref8$dropdownOptions = _ref8.dropdownOptions,
    dropdownOptions = _ref8$dropdownOptions === void 0 ? [] : _ref8$dropdownOptions,
    _ref8$showDropdownMod = _ref8.showDropdownMode,
    showDropdownMode = _ref8$showDropdownMod === void 0 ? _constants.SHOW_DROPDOWN_MODE.ROW_CLICK : _ref8$showDropdownMod,
    _ref8$onDropdownSelec = _ref8.onDropdownSelect,
    onDropdownSelect = _ref8$onDropdownSelec === void 0 ? function () {} : _ref8$onDropdownSelec,
    _ref8$removeItems = _ref8.removeItems,
    removeItems = _ref8$removeItems === void 0 ? false : _ref8$removeItems,
    onRemoveItem = _ref8.onRemoveItem,
    withEllipsis = _ref8.withEllipsis,
    ellipsisClassName = _ref8.ellipsisClassName;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    cellToShowDropdown = _useState2[0],
    setCellToShowDropdown = _useState2[1];
  var handleAddElementToDropdown = (0, _react.useCallback)(function (cell) {
    setCellToShowDropdown(cell);
  }, []);
  var handleDimmerClick = (0, _react.useCallback)(function () {
    setCellToShowDropdown(null);
  }, []);
  var handleSelect = (0, _react.useCallback)(function (values) {
    onDropdownSelect(values);
    setCellToShowDropdown(null);
  }, [onDropdownSelect, setCellToShowDropdown]);
  var handleRowClick = (0, _react.useCallback)(function (data) {
    if (rowClick) rowClick(data);
  }, [rowClick]);
  var handleRemoveItem = (0, _react.useCallback)(function (data) {
    if (onRemoveItem) onRemoveItem(data);
  }, [onRemoveItem]);
  var bodyRowProps = {
    columns: columns,
    dataList: dataList,
    dropdownCell: dropdownCell,
    showDropdownMode: showDropdownMode,
    dropdownOptions: dropdownOptions,
    removeItems: removeItems,
    onDimmerClick: handleDimmerClick,
    onSelect: handleSelect,
    onRowClick: handleRowClick,
    onRemoveItem: handleRemoveItem,
    onAddElementToDropdown: handleAddElementToDropdown,
    withEllipsis: withEllipsis,
    ellipsisClassName: ellipsisClassName
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, dataList.length > 0 ? dataList.map(function (data) {
    var id = data.id,
      uuid = data.uuid;
    var rowKey = id || uuid;
    var selectedRowDropdown = cellToShowDropdown === rowKey;
    return /*#__PURE__*/_react["default"].createElement(BodyRow, _extends({
      key: rowKey,
      id: rowKey,
      selectedRowDropdown: selectedRowDropdown,
      cellToShowDropdown: cellToShowDropdown,
      data: data
    }, bodyRowProps));
  }) : /*#__PURE__*/_react["default"].createElement("tr", {
    tabIndex: "0",
    className: rowClassName
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "empty-row",
    colSpan: columns.length
  }, emptyMessage)));
}
function Table(props) {
  var _props$isResponsive = props.isResponsive,
    isResponsive = _props$isResponsive === void 0 ? true : _props$isResponsive,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$primary = props.primary,
    primary = _props$primary === void 0 ? false : _props$primary,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? '' : _props$variant,
    _props$version = props.version,
    version = _props$version === void 0 ? _versions["default"].V2 : _props$version;
  var tableClassName = (0, _react.useMemo)(function () {
    return (0, _classnames["default"])("Table Table__".concat(version, " table table-striped table-borderless ").concat(className, " "));
  }, [className, version]);
  var theadClassName = (0, _react.useMemo)(function () {
    var tablePrimary = primary && 'Table__Thead--primary';
    var tableWithVariant = variant && "Table__Thead--".concat(variant);
    return (0, _classnames["default"])(tablePrimary, tableWithVariant);
  }, [primary, variant]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('d-inline-block', isResponsive && 'table-responsive')
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: tableClassName
  }, /*#__PURE__*/_react["default"].createElement("thead", {
    className: theadClassName
  }, /*#__PURE__*/_react["default"].createElement(RenderHead, props)), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement(RenderBody, props))));
}
Table.propTypes = {
  dataList: _propTypes["default"].arrayOf(_propTypes["default"].object),
  rowClassName: _propTypes["default"].string,
  emptyMessage: _propTypes["default"].string,
  rowClick: _propTypes["default"].func,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].object),
  variant: _propTypes["default"].string,
  withEllipsis: _propTypes["default"].bool,
  ellipsisClassName: _propTypes["default"].string
};
Table.defaultProps = {
  dataList: [],
  columns: cols,
  emptyMessage: (0, _i18n["default"])('ERROR__COMMONS__NOT_FOUND'),
  rowClassName: '',
  rowClick: function rowClick() {}
};
var _default = Table;
exports["default"] = _default;