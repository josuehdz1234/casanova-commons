import React, { useCallback, useRef } from 'react';
import classNames from 'classnames';
import _get from 'lodash/get';
import { useField } from 'formik';
import { AttachClip, Eye } from '../Icons';

const getIcon = (isLink, disabled) => (isLink && disabled ? Eye : AttachClip);

function FileInput(props) {
  const { id, accept, name, label, disabled, onClick } = props;
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;
  const { setValue, setTouched } = helpers;
  const ref = useRef(null);

  const hasError = touched && error;
  const mainClassName = classNames(
    'file-input form-group',
    hasError && 'invalid',
    props.className
  );
  const inputClassName = classNames('form-control', hasError && 'is-invalid');

  const handleFileChange = useCallback(
    (e) => {
      const { files } = e.target;
      setTouched(true);
      setValue(files[0], true);
    },
    [setValue, setTouched]
  );

  const link = _get(field, 'value');
  const isLink = typeof link === 'string' && link.length > 0;
  const value = _get(field, isLink ? 'value' : 'value.name', '');
  const Icon = getIcon(isLink, disabled);

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      if (isLink && onClick) {
        onClick(value);
      }
    }
  };

  const labelClassName = classNames(
    'col-form-label',
    hasError && 'text-danger',
    !value && 'empty'
  );

  return (
    <div className={mainClassName}>
      {label && (
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      )}

      <div className="input-group">
        <input
          tabIndex="-1"
          name={name}
          className={inputClassName}
          value={value}
          placeholder={label}
          type="text"
          disabled
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="input-file-icon">
              <Icon />
            </span>
          </div>
        </div>
      </div>
      {hasError && (
        <label
          className={classNames('col-form-error', 'text-danger')}
          htmlFor={id}
        >
          {error}
        </label>
      )}
      <input
        style={{
          width: '100%',
          height: '100%',
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        type="file"
        ref={ref}
        multiple={false}
        onChange={handleFileChange}
        accept={accept}
        onClick={handleClick}
      />
    </div>
  );
}

export default FileInput;
