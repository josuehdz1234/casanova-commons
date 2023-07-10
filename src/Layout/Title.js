import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  const { label, right } = props;
  return (
    <div className="row">
      <div className="col title flex-wrap justify-content-between">
        <h1>{label}</h1>
        {right}
      </div>
    </div>
  );
}

Title.propTypes = {
  label: PropTypes.any,
  right: PropTypes.any,
};

export default Title;
