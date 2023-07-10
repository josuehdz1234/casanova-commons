import React, { useEffect, useRef, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { createPopper } from '@popperjs/core';
import PropTypes from 'prop-types';
import './Popover.scss';

function Popover({ placement, children, disabled, icon }) {
  const trigger = useRef();
  const popup = useRef();
  const arrow = useRef();
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [params, setParams] = useState({ placement });

  const handleDimmerClick = useCallback(() => {
    setShow(false);
    setTimeout(() => {
      setVisible(false);
    }, 100);
  }, []);
  const handleContentClick = useCallback((e) => {
    e.stopPropagation();
  }, []);
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      handleDimmerClick();
    }
  }, []);
  useEffect(() => {
    if (arrow.current && trigger.current && popup.current) {
      document.addEventListener('keydown', handleKeyDown);
      const instance = createPopper(trigger.current, popup.current, {
        placement,
        modifiers: [
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
        if (instance) {
          instance.destroy();
        }
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    return () => {};
  }, [visible, handleKeyDown, placement]);

  return (
    <div className="d-inline-block dropdown-container">
      {!icon ? (
        <button
          className="btn btn-outline-primary btn-rounded"
          type="button"
          ref={trigger}
          onClick={() => {
            if (!disabled) {
              setVisible(!visible);
            }
          }}
        >
          <span>+</span>
        </button>
      ) : (
        <div
          className="icon"
          ref={trigger}
          onClick={() => {
            if (!disabled) {
              setVisible(!visible);
            }
          }}
        >
          {icon}
        </div>
      )}
      {visible &&
        ReactDOM.createPortal(
          <div className="modal-layer" tabIndex="0" onClick={handleDimmerClick}>
            <div
              onClick={handleContentClick}
              ref={popup}
              className={`my-dropdown bs-tooltip-${params.placement} ${
                show && 'show'
              }`}
            >
              <div className="arrow" ref={arrow} />
              <div className="my-dropdown-inner">{children}</div>
            </div>
          </div>,
          document.getElementById('root')
        )}
    </div>
  );
}

Popover.propTypes = {
  placement: PropTypes.string,
  disabled: PropTypes.bool,
};

Popover.defaultProps = {
  placement: 'auto',
  disabled: false,
};

export default Popover;
