import React, { useState, useCallback } from 'react';
import * as Icons from '../../Icons';
import './SmallImage.scss';

export default function SmallImage({
  image = '',
  alt = 'vehicle',
  onClick = () => {},
  active = false,
}) {
  const [check, setCheck] = useState(active);

  const handleClick = useCallback(() => {
    setCheck(!check);
    onClick(!check, image);
  }, [check, image, onClick]);

  return (
    <span
      tabIndex={0}
      role="button"
      className="SmallImage btn mx-3"
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      {check && (
        <div className="SmallImage__Check">
          <Icons.Checkimage width="1rem" />
        </div>
      )}
      <img src={image} alt={`${alt}`} className="SmallImage__Image" />
    </span>
  );
}
