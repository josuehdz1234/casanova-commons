import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createPopper } from '@popperjs/core';
import classNames from 'classnames';
import RadioGroup from '../RadioGroup';
import { modifiers } from './config';
import './Dropdown.scss';

function RadioList(props) {
  const { name, value, onChange, options } = props;
  return (
    <ul className="list-inline text-left inline-dropdown-options">
      <RadioGroup
        options={options}
        name={name}
        size="sm"
        value={value}
        onChange={onChange}
      />
    </ul>
  );
}

function InlineDropdown(props) {
  const [value, setValue] = useState();
  const { item, onSelect, expanded, onClickOpen } = props;
  const { name, label, options, disabled, showExpanded = true } = item;

  const handleClick = useCallback(
    (evt) => (showExpanded ? onClickOpen(evt) : onSelect(item)),
    [showExpanded, onClickOpen, onSelect, item]
  );

  return (
    <div className="inline-dropdown">
      <div
        className={`my-dropdown-item ${
          disabled ? 'my-dropdown-item--disabled' : ''
        }`}
        onClick={handleClick}
        aria-hidden="true"
        tabIndex="0"
        role="button"
      >
        <span>{label}</span>
        {showExpanded && (
          <span style={{ fontSize: '1.5rem', lineHeight: '.9' }}>
            {expanded ? '-' : '+'}
          </span>
        )}
      </div>
      {showExpanded && (
        <div className="dropdown-item-options">
          {expanded ? (
            <RadioList
              options={options}
              value={value}
              name={name}
              onChange={(data) => {
                setValue(data.value);
                onSelect(data);
              }}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}

const Dropdown = (props) => {
  const {
    placement,
    onSelect,
    menuItems,
    className = '',
    buttonClassName = '',
    isVisible = false,
    onDimmerClick = () => {},
    children = null,
    withStyles = true,
  } = props;

  const trigger = useRef();

  const popup = useRef();
  const arrow = useRef();
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [params, setParams] = useState({ placement });
  const [selected, setSelected] = useState();

  const handleDimmerClick = useCallback(() => {
    onDimmerClick();
    setShow(false);
    setTimeout(() => {
      setVisible(false);
    }, 100);
  }, [onDimmerClick]);

  const handleContentClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        handleDimmerClick();
      }
    },
    [handleDimmerClick]
  );

  const handleClickButton = useCallback(() => {
    if (!props.disabled) {
      setVisible(!visible);
    }
  }, [props]);

  useEffect(() => {
    if (arrow.current && (trigger.current || isVisible) && popup.current) {
      document.addEventListener('keydown', handleKeyDown);

      const instance = createPopper(trigger.current, popup.current, {
        placement,
        modifiers: [
          ...modifiers,
          {
            name: 'arrow',
            options: {
              element: arrow.current,
              padding: 25,
            },
          },
        ],
        strategy: 'fixed',
        onFirstUpdate: (state) => {
          setParams(state);
          setTimeout(() => {
            setShow(true);
          }, 100);
        },
      });
      return () => {
        if (instance) instance.destroy();
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    return () => {};
  }, [visible, isVisible]);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  const containerClassName = useMemo(() => {
    const cntClassName = classNames(
      withStyles && 'd-inline-block dropdown-container Dropdown',
      className
    );
    return cntClassName;
  }, [className, withStyles]);

  const fullButtonClassName = useMemo(() => {
    const btnClassName = classNames(
      'btn',
      !children ? 'btn-outline-primary btn-rounded' : '',
      buttonClassName
    );
    return withStyles ? btnClassName : undefined;
  }, [children, buttonClassName, withStyles]);

  const popupClassName = useMemo(() => {
    const popClassName = classNames(
      `my-dropdown bs-tooltip-${params.placement}`,
      show && 'show'
    );

    return popClassName;
  }, [params.placement, show, popup.current]);

  const childrenHelpers = useMemo(
    () => ({
      onClick: handleClickButton,
      ref: trigger,
    }),
    [handleClickButton, trigger]
  );

  return (
    <div className={containerClassName}>
      {children && typeof children === 'function' ? (
        children(childrenHelpers)
      ) : (
        <button
          className={fullButtonClassName}
          type="button"
          ref={trigger}
          onClick={handleClickButton}
        >
          {children || <span>+</span>}
        </button>
      )}

      {visible &&
        ReactDOM.createPortal(
          <div
            className="modal-layer Dropdown__Popup"
            aria-hidden="true"
            tabIndex="0"
            role="button"
            onClick={handleDimmerClick}
          >
            <div
              onClick={handleContentClick}
              ref={popup}
              className={popupClassName}
              aria-hidden="true"
              tabIndex="0"
              role="button"
            >
              <div className="arrow" ref={arrow} />
              <div className="my-dropdown-inner">
                {menuItems.map((item) => {
                  const { name, label } = item;
                  return (
                    <InlineDropdown
                      key={`${name}_${label}`}
                      onClickOpen={() => setSelected(name)}
                      expanded={selected === name}
                      onSelect={onSelect}
                      item={item}
                    />
                  );
                })}
              </div>
            </div>
          </div>,
          document.getElementById('portal-root')
        )}
    </div>
  );
};

Dropdown.propTypes = {
  placement: PropTypes.string,
  disabled: PropTypes.bool,
  menuItems: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  isVisible: PropTypes.bool,
  onDimmerClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  withStyles: PropTypes.bool,
};

Dropdown.defaultProps = {
  placement: 'auto',
  disabled: false,
  menuItems: [],
};

export default Dropdown;
