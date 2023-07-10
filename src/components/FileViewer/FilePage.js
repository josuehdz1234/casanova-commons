import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FilePage = ({ url, index, currentIndex }) => {
  const [isValidImage, setIsValidImage] = useState(false);

  useEffect(() => {
    const image = new Image();

    const onLoad = () => {
      setIsValidImage(true);
    };

    const onError = () => {
      setIsValidImage(false);
    };

    image.onload = onLoad;

    image.onerror = onError;

    image.src = url;

    return () => {
      image.removeEventListener('onload', onLoad);
      image.removeEventListener('onerror', onError);
    };
  }, []);

  return (
    <>
      {index === currentIndex && isValidImage && (
        <img src={url} alt={`File number ${index}`} />
      )}
      {index === currentIndex && !isValidImage && (
        <iframe title={`File number ${index}`} src={url} frameBorder="0" />
      )}
    </>
  );
};

FilePage.propTypes = {
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default FilePage;
