import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useField } from 'formik';
import classNames from 'classnames';
import { Refresh, Car } from '../Icons';

function DropzoneInput({
  id,
  name,
  className,
  label,
  onlyError,
  accept,
  multiple,
  placeholder,
  disabled,
}) {
  const [field, meta, helpers] = useField(name);
  const { touched, error } = meta;

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (!multiple && acceptedFiles.length === 1) {
        helpers.setValue(URL.createObjectURL(acceptedFiles[0]));
      }
    },
    [multiple, helpers]
  );

  const { getRootProps, getInputProps } = useDropzone({
    multiple,
    onDrop,
    accept,
  });
  const hasError = onlyError ? error : touched && error;
  const hasValue = typeof field.value !== 'undefined';

  return (
    <div className={`form-group single-image-input `}>
      {label && (
        <label
          className={classNames(
            'col-form-label',
            hasError && error && 'text-danger'
          )}
          htmlFor={id}
        >
          {hasError ? error : label}
        </label>
      )}
      <div
        className={`image-input ${disabled ? 'disabled' : ''}`}
        {...getRootProps()}
      >
        {hasValue ? (
          <>
            <img className="img-fluid" src={field.value} />
            <div
              className={classNames(
                'image-input-layover',
                disabled && 'disabled'
              )}
            >
              <Refresh />
            </div>
          </>
        ) : (
          <>
            <span className="image-input-icon">
              <Car />
            </span>
            <span className="image-input-placeholder mt-2">{placeholder} </span>
          </>
        )}
        <input {...getInputProps()} disabled={disabled} />
      </div>
    </div>
  );
}

export default DropzoneInput;
