"use strict";

var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('Button', function () {
  it('should render button with defaults', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_["default"], null));
    expect(wrapper.find('.btn').hasClass('btn-primary')).toBeTruthy();
  });
  it('should render button as block', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_["default"], {
      block: true
    }));
    expect(wrapper.find('.btn').hasClass('btn-block')).toBeTruthy();
  });
  it('should render button as outline', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_["default"], {
      outline: true
    }));
    expect(wrapper.find('.btn').hasClass(/\-outline\-/)).toBeTruthy();
  });
});