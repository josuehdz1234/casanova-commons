import React, { useCallback } from 'react';
import { useField } from 'formik';
import { injectIntl } from 'react-intl';

function CurrencyInput(props) {
  // console.log(props)
  const { name, intl } = props;
  const [field, meta, helpers] = useField(name);

  const handleChange = useCallback((e) => {
    const { value } = e.target;

    const numberValue = parseFloat(value);
    const number = intl.formatNumber(numberValue, {
      style: 'currency',
      currency: 'MXN',
    });
    // console.log(number)
    helpers.setValue(number);
  });

  const handleKeyUp = useCallback((e) => {});
  return (
    <input
      type="text"
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      value={props.value}
    />
  );
}

export default injectIntl(CurrencyInput);
