import React, {
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
  useCallback,
} from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import _isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useField } from 'formik';
import { AttachClip } from '../Icons';

const getDownloadIconClass = (download) => (download ? 'download' : 'eye');

const existsDisplayText = (displayText, placeholder) =>
  displayText || placeholder;

const getBoxText = (field, displayText, placeholder) =>
  field.value && field.value.name
    ? field.value.name
    : existsDisplayText(displayText, placeholder);

const InputFile = React.forwardRef((props, ref) => {
  const {
    className,
    id,
    name,
    label,
    right,
    left,
    placeholder,
    displayText,
    onChange,
    mask,
    maskPlaceholder,
    url,
    download,
    showIcon = true,
    ...rest
  } = props;
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;

  const [focused, setFocused] = useState(false);
  const [hasContent, setHasContent] = useStateWithCallbackLazy(false);

  const { setValue, setTouched } = helpers;

  const innerRef = useRef(null);
  useImperativeHandle(ref, () => ({
    click: () => {
      innerRef.current.click();
    },
  }));

  useEffect(() => {
    setHasContent(field && Boolean(field.value));
  }, [field.value]);

  const handleInputFocus = (e) => {
    const { value } = e.target;
    setFocused(false);
    setHasContent(!_isEmpty(value));
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const handleClickInput = useCallback(() => {
    if (innerRef.current) {
      innerRef.current.click();
    }
  }, [innerRef.current]);

  const handleInputBlur = (e) => {
    const { value } = e.target;
    setFocused(false);
    setHasContent(!_isEmpty(value));
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(e.currentTarget.files[0]);
    if (onChange) {
      onChange(e);
    }
    setHasContent(Boolean(value), () => {
      setTouched(true);
    });
  };

  const hasError = touched && error;
  const icn = classNames(
    'FileInputContainer form-control',
    focused && 'FileInputContainer--focused',
    (hasContent || displayText) && 'FileInputContainer--with-content',
    rest.disabled && 'FileInputContainer--disabled',
    hasError && 'is-invalid',
    right && 'input-group-br-no',
    left && 'input-group-bl-no'
  );

  const visibility = hasError || hasContent || url;
  const boxText = getBoxText(field, displayText, placeholder);
  const iconCn = classNames(
    `svg-icon svg-icon-${url ? getDownloadIconClass(download) : 'attach-clip'}`
  );

  const getRightIcon = () =>
    showIcon ? (
      <a
        href={url}
        style={{ height: '100%' }}
        download={download}
        target="blank"
        rel="noopener noreferrer"
      >
        <div className={iconCn} />
      </a>
    ) : null;

  return (
    <div className={`form-group ${className || ''} `}>
      {label && (
        <label
          style={{ visibility: `${visibility ? 'visible' : 'hidden'}` }}
          className={classNames(
            'col-form-label',
            hasError && error && 'text-danger'
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <div className="custom-input-group">
        {left && <span className="left-content">{left}</span>}
        <span
          tabIndex="0"
          role="button"
          onKeyPress={handleClickInput}
          onClick={handleClickInput}
        >
          {url && rest.disabled && (
            <a
              href={url}
              download={download}
              target="blank"
              rel="noopener noreferrer"
              className={`${icn} FileInputContainer--with-content`}
            >
              {displayText}
            </a>
          )}
          {(!url || !rest.disabled) && (
            <label htmlFor={name} className={icn}>
              {boxText}
            </label>
          )}
          <input
            onFocus={handleInputFocus}
            name={name}
            onBlur={handleInputBlur}
            onChange={handleChange}
            ref={innerRef}
            placeholder={placeholder}
            {...rest}
          />
        </span>
        <label htmlFor={name} className="right-content">
          {!url || !field.value ? (
            <span className="input-file-icon">
              <AttachClip />{' '}
            </span>
          ) : (
            getRightIcon()
          )}
        </label>
      </div>
      {hasError && (
        <label
          className={classNames(
            'col-form-error',
            hasError && error && 'text-danger'
          )}
          htmlFor={name}
        >
          {hasError}
        </label>
      )}
    </div>
  );
});

InputFile.propTypes = {
  error: PropTypes.string,
  displayText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

InputFile.defaultProps = {
  error: '',
  displayText: '',
};

export default InputFile;
