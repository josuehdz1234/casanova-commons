import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import _get from 'lodash/get';
import Select from 'src/Select';

const withListOptions = (Component) => ({
  options,
  fullKey,
  transformer,
  ...props
}) => {
  const data = useSelector((state) => _get(state, options, {}));
  const listOfOptions = useMemo(() => {
    const optionsList = fullKey ? data : data.list || [];

    return transformer ? transformer(optionsList) : optionsList;
  }, [data, fullKey, transformer]);

  return <Component {...props} options={listOfOptions} />;
};

export default withListOptions(Select);
