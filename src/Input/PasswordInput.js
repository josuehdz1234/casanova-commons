import React, { useState, useCallback } from 'react';
import Input from './PlainInput';
import { Eye, EyeClose } from '../Icons';

function PasswordInput(props) {
  const { notVisible = false } = props;

  const [visible, setVisible] = useState(false);

  const handleClick = useCallback(() => {
    setVisible(!visible);
  });

  const type = useCallback(() => {
    if (notVisible) return 'password';
    return visible ? 'text' : 'password';
  }, [notVisible, visible]);

  const right = visible ? (
    <Eye onClick={handleClick} />
  ) : (
    <EyeClose onClick={handleClick} />
  );

  return (
    <Input
      {...props}
      onBlur={props.onBlur}
      right={!notVisible && right}
      type={type()}
    />
  );
}

export default PasswordInput;
