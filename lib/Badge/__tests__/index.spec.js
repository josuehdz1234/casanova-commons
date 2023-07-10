"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('Badge', function () {
  it('should render Badge with defaults', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_["default"], null));
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Badge with whole properties', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_["default"], {
        pill: true,
        outline: true,
        closeable: true,
        onClose: function onClose() {
          console.log('click event');
        }
      })),
      container = _render.container;
    expect(container.querySelector('.badge-closeable')).toBeTruthy();
  });
});