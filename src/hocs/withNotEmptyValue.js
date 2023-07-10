import React from 'react';

const withNotEmptyValue = (Component, params = {}) => (props) => {
  const { field = 'value', message = 'Sin información' } = params;

  const { [field]: fieldValue = message } = props;

  const fieldWithMessage = { [field]: fieldValue };

  return <Component {...props} {...fieldWithMessage} />;
};

export default withNotEmptyValue;
