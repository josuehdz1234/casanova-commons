import React from 'react';
import { mount } from 'enzyme';
import { Formik } from 'formik';
import { render, fireEvent } from '@testing-library/react';

import DatePicker from '..';

describe('DatePicker', () => {
  it('should render DatePicker with defaults', () => {
    const wrapper = render(
      <Formik>
        <DatePicker label="Fecha" name="name" />
      </Formik>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should have open class when focus', () => {
    const wrapper = mount(
      <Formik>
        <DatePicker label="Fecha" name="name" />
      </Formik>
    );
    const datePicker = wrapper.find('DatePicker');
    const datePickerInput = datePicker.find('.DatePicker__input');
    const datePickerCalendar = datePicker.find('.DatePicker__calendar');

    datePickerInput.find('input').simulate('focus');

    expect(datePickerCalendar.instance().className).toEqual(
      'DatePicker__calendar DatePicker__calendar--open'
    );
    expect(datePickerInput.instance().className).toEqual(
      'DatePicker__input DatePicker__input--open'
    );
  });

  it('should set value when click on month', () => {
    const { container } = render(
      <Formik>
        <DatePicker label="Fecha" name="name" />
      </Formik>
    );
    const datePickerCalendar = container.querySelector('.DatePicker__calendar');
    fireEvent.focus(container.querySelector('input'));

    let element = datePickerCalendar.querySelector(
      '.DatePicker__calendar__element'
    );
    fireEvent.click(element);

    expect(container.querySelector('input').value).toEqual('01 / mes / año');

    element = datePickerCalendar.querySelector(
      '.DatePicker__calendar__element'
    );
    fireEvent.click(element);

    expect(container.querySelector('input').value).toEqual('01 / Ene / año');

    // TODO: Handle Formik props inside component
    // element = datePickerCalendar.querySelector('.DatePicker__calendar__element');
    // fireEvent.click(element);

    // expect(container.querySelector('input').value).toEqual('01 / Ene / 2020');
  });
});
