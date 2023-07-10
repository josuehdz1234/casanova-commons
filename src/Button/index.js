import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

const Button = React.forwardRef(
  (
    {
      children,
      onClick,
      primary,
      secondary,
      muted,
      block,
      outline,
      className,
      rounded,
      color,
      variant,
      ...rest
    },
    ref
  ) => {
    const formattedClassName = useMemo(() => {
      const base =
        // eslint-disable-next-line no-nested-ternary
        color || muted ? 'light' : secondary ? 'secondary' : 'primary';
      const buttonClass = `btn-${outline ? 'outline-' : ''}${base}`;

      return classNames(
        'btn ButtonV2',
        buttonClass,
        block && 'btn-block',
        muted && 'ButtonV2__Muted',
        rounded && 'ButtonV2__Rounded',
        className,
        `ButtonV2__${variant}`
      );
    }, [
      primary,
      secondary,
      block,
      muted,
      className,
      rounded,
      muted,
      color,
      variant,
    ]);

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        ref={ref}
        className={formattedClassName}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  muted: PropTypes.bool,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  className: PropTypes.string,
  rounded: PropTypes.bool,
  color: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  primary: true,
  secondary: false,
  muted: false,
  block: false,
  outline: false,
  className: '',
  rounded: false,
  color: null,
  variant: '',
};

export default Button;
