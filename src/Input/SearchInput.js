import React from 'react';
import Input from './Input';
import { Search } from '../Icons';

function SearchInput(props) {
  const left = <Search style={{ padding: '0.5rem' }} />;
  return (
    <Input className="d-md-inline-block" {...props} left={left} type="text" />
  );
}

export default SearchInput;
