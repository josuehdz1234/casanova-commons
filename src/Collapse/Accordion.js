import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

function Accordion({ children, active = null }) {
  const [current, setCurrent] = useState(active);

  const handleToggle = useCallback(
    (name) => {
      if (current === name) {
        setCurrent(null);
      } else {
        setCurrent(name);
      }
    },
    [current]
  );

  const handleRequestClose = useCallback(
    (name) => {
      if (current === name) {
        setCurrent(null);
      }
    },
    [current]
  );

  useEffect(() => {
    setCurrent(active);
  }, [active]);

  return React.Children.map(children, (child) => {
    const { name } = child.props;
    const isCurrent = current === name;

    return React.cloneElement(child, {
      show: isCurrent,
      onClick: handleToggle,
      onRequestClose: handleRequestClose,
      forceClose: handleToggle,
    });
  });
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  initialActive: PropTypes.oneOfType([PropTypes.string]),
};

export default Accordion;
