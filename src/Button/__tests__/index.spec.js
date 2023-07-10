import React from 'react';
import { mount } from 'enzyme';
import Button from '..';

describe('Button', () => {
  it('should render button with defaults', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.find('.btn').hasClass('btn-primary')).toBeTruthy();
  });
  it('should render button as block', () => {
    const wrapper = mount(<Button block />);
    expect(wrapper.find('.btn').hasClass('btn-block')).toBeTruthy();
  });
  it('should render button as outline', () => {
    const wrapper = mount(<Button outline />);
    expect(wrapper.find('.btn').hasClass(/\-outline\-/)).toBeTruthy();
  });
});
