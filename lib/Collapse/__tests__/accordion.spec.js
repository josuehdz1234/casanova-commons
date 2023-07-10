"use strict";

var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _react2 = require("@testing-library/react");
var _Accordion = _interopRequireDefault(require("../Accordion"));
var _Collapse = _interopRequireDefault(require("../Collapse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DumbComponent = function DumbComponent(_ref) {
  var onRequestClose = _ref.onRequestClose,
    name = _ref.name;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "dumb-".concat(name),
    onClick: function onClick() {
      return onRequestClose(name);
    }
  }, "Element div");
};
describe('Accordion', function () {
  test('should render without crash', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Accordion["default"], {
      label: "Fecha",
      name: "name"
    }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
      name: "collapse-element",
      title: "Colapse element",
      titleProps: {
        prop1: 'prop1'
      },
      show: true,
      onClick: function onClick(e) {
        return console.log(e);
      },
      disabled: false,
      isNew: false
    }, /*#__PURE__*/_react["default"].createElement(DumbComponent, null))));
    expect(wrapper).toMatchSnapshot();
  });
  test('should close when click on another element', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Accordion["default"], {
        label: "Fecha",
        name: "name"
      }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
        name: "collapse-element",
        title: "Colapse element",
        titleProps: {
          prop1: 'prop1'
        },
        show: true,
        onClick: function onClick(e) {
          return console.log(e);
        },
        disabled: false,
        isNew: false
      }, /*#__PURE__*/_react["default"].createElement(DumbComponent, null)), /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
        name: "collapse-element-2",
        title: "Colapse element-2",
        titleProps: {
          prop1: 'prop1'
        },
        show: false,
        onClick: function onClick(e) {
          return console.log(e);
        },
        disabled: false,
        isNew: false
      }, /*#__PURE__*/_react["default"].createElement(DumbComponent, null)))),
      container = _render.container;
    var headers = container.querySelectorAll('.card-header');
    _react2.fireEvent.click(headers[1]);
    var elements = container.querySelectorAll('.card');
    expect(elements[1].querySelector('.collapse').className.includes('show')).toEqual(true);
  });
  test('should close when click on the same element', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Accordion["default"], {
        label: "Fecha",
        name: "name"
      }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
        name: "collapse-element",
        title: "Colapse element",
        titleProps: {
          prop1: 'prop1'
        },
        show: true,
        onClick: function onClick(e) {
          return console.log(e);
        },
        disabled: false,
        isNew: false
      }, /*#__PURE__*/_react["default"].createElement(DumbComponent, null)), /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
        name: "collapse-element-2",
        title: "Colapse element-2",
        titleProps: {
          prop1: 'prop1'
        },
        show: false,
        onClick: function onClick(e) {
          return console.log(e);
        },
        disabled: false,
        isNew: false
      }, /*#__PURE__*/_react["default"].createElement(DumbComponent, null)))),
      container = _render2.container;
    var headers = container.querySelectorAll('.card-header');
    _react2.fireEvent.click(headers[0]);
    _react2.fireEvent.click(headers[0]);
    var elements = container.querySelectorAll('.card');
    expect(elements[0].querySelector('.collapse').className.includes('show')).toEqual(false);
  });
});