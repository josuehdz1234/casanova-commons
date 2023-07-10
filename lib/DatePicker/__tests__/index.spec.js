"use strict";

var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _formik = require("formik");
var _react2 = require("@testing-library/react");
var _ = _interopRequireDefault(require(".."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('DatePicker', function () {
  it('should render DatePicker with defaults', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_formik.Formik, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
      label: "Fecha",
      name: "name"
    })));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have open class when focus', function () {
    var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_formik.Formik, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
      label: "Fecha",
      name: "name"
    })));
    var datePicker = wrapper.find('DatePicker');
    var datePickerInput = datePicker.find('.DatePicker__input');
    var datePickerCalendar = datePicker.find('.DatePicker__calendar');
    datePickerInput.find('input').simulate('focus');
    expect(datePickerCalendar.instance().className).toEqual('DatePicker__calendar DatePicker__calendar--open');
    expect(datePickerInput.instance().className).toEqual('DatePicker__input DatePicker__input--open');
  });
  it('should set value when click on month', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_formik.Formik, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
        label: "Fecha",
        name: "name"
      }))),
      container = _render.container;
    var datePickerCalendar = container.querySelector('.DatePicker__calendar');
    _react2.fireEvent.focus(container.querySelector('input'));
    var element = datePickerCalendar.querySelector('.DatePicker__calendar__element');
    _react2.fireEvent.click(element);
    expect(container.querySelector('input').value).toEqual('01 / mes / año');
    element = datePickerCalendar.querySelector('.DatePicker__calendar__element');
    _react2.fireEvent.click(element);
    expect(container.querySelector('input').value).toEqual('01 / Ene / año');

    // TODO: Handle Formik props inside component
    // element = datePickerCalendar.querySelector('.DatePicker__calendar__element');
    // fireEvent.click(element);

    // expect(container.querySelector('input').value).toEqual('01 / Ene / 2020');
  });
});