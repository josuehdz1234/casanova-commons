import React, { useRef, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createPopper } from '@popperjs/core';
import { ChevronDown } from '../Icons';
import Input from '../Input';

// Icon.defaultProps = {
// viewBox: '0 0 24 24',
// }

const popperModifiers = [
  {
    name: 'offset',
    options: {
      offset: [10, 20],
    },
  },
  {
    name: 'arrow',
    options: {
      element: arrow.current,
      padding: 25,
    },
  },
  {
    name: 'computeStyles',
    options: {
      gpuAcceleration: false, // true by default
    },
  },
];

const options = [
  {
    value: 'v1',
    label: 'Sale caamaron',
  },
  {
    value: 'v2',
    label: 'Sale OPERcaamaron',
  },
  {
    value: 'v3',
    label: 'Sale CAMEOcaamaron',
  },
];
function Select(props) {
  const { label, name, placement } = props;
  const trigger = useRef();
  const popup = useRef();
  const arrow = useRef();
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  const handleDimmerClick = useCallback(() => {
    setShow(false);
    setTimeout(() => {
      setVisible(false);
    }, 100);
  });

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      handleDimmerClick();
    }
  });
  useEffect(() => {
    if (arrow.current && trigger.current && popup.current) {
      document.addEventListener('keydown', handleKeyDown);
      const instance = createPopper(trigger.current, popup.current, {
        placement,
        modifiers: popperModifiers,
        strategy: 'fixed',
        onFirstUpdate: (state) => {
          setTimeout(() => {
            setShow(true);
          }, 100);
        },
      });
      return () => {
        if (instance) {
          instance.destroy();
        }
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    return () => {};
  }, [visible]);
  return (
    <div className="dropdown-container">
      <Input
        label={label}
        name={name}
        ref={trigger}
        right={<ChevronDown onClick={() => setVisible(!visible)} />}
      />
      {visible && (
        <div ref={popup} className={`dropdown `}>
          <div className="arrow" ref={arrow} />
          <ul className={`select dropdown-menu ${show && 'show'}`}>
            {options.map((option) => {
              const { value, label } = option;
              return (
                <li key={value} className="dropdown-item">
                  {label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

Select.propTypes = {
  placement: PropTypes.string,
};

Select.defaultProps = {
  placement: 'bottom',
};
export default Select;
