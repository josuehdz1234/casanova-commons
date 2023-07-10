import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useField } from 'formik';

function SingleImageInput(props) {
  const { className, id, name, label } = props;
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;

  const hasError = touched && error;

  const handleFileChange = useCallback((e) => {
    const { files } = e.target;
    helpers.setValue(URL.createObjectURL(files[0]));
  });

  return (
    <div className={`form-group single-image-input ${className || ''} `}>
      {label && (
        <label
          className={classNames(
            'col-form-label',
            hasError && error && 'text-danger'
          )}
          htmlFor={id}
        >
          {hasError || label}
        </label>
      )}
      <div className="image-input">
        {!field.value && <span>+</span>}
        {field.value && <img className="img-fluid" src={field.value} />}
        <input
          type="file"
          name={name}
          onChange={handleFileChange}
          accept={'image/*'}
        />
      </div>
    </div>
  );
}

export default SingleImageInput;
