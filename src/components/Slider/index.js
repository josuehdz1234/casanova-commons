/* eslint-disable react/forbid-prop-types */
import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { sliderStyles as styles } from './sliderStyles';
import './Slider.scss';

export default function SliderComponent({
  vertical,
  reverse,
  trackStyle,
  handleStyle,
  railStyle,
  allScreen,
  children,
  ...restProps
}) {
  const sliderClassName = classNames(allScreen && 'AllScreen');

  return (
    <div className="Slider">
      {children}
      <Slider
        vertical={vertical}
        reverse={reverse}
        trackStyle={{
          ...styles.trackStyle,
          ...trackStyle,
        }}
        handleStyle={{
          ...styles.handleStyle,
          ...handleStyle,
        }}
        railStyle={{
          ...styles.railStyle,
          ...railStyle,
        }}
        className={sliderClassName}
        {...restProps}
      />
    </div>
  );
}

SliderComponent.propTypes = {
  vertical: propTypes.bool,
  reverse: propTypes.bool,
  trackStyle: propTypes.object,
  handleStyle: propTypes.object,
  railStyle: propTypes.object,
  allScreen: propTypes.bool,
};

SliderComponent.defaultProps = {
  vertical: false,
  reverse: false,
  trackStyle: {},
  handleStyle: {},
  railStyle: {},
  allScreen: false,
};
