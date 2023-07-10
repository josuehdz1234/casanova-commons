import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import * as Icons from 'src/Icons';
import RadioGroupInput from 'src/Input/RadioGroupInput';
import { PlusButton, TextField } from '@components';
import './CardRow.scss';

export default function CardRow({
  items = [],
  withCheck = false,
  withRadio = false,
  withAdd = false,
  onChangeCheck,
  onChange,
  check: stockCheck,
  withExternalCheck = false,
  onAdd,
  name = '',
  className = '',
  rowClassName = '',
  direction = 'right',
  RightRender = null,
  textRight = 'Agregar',
}) {
  const [check, setCheck] = useState(stockCheck);

  const { setFieldValue } = useFormikContext();

  const handleChangeCheck = useCallback(() => {
    setCheck(!check);

    if (onChangeCheck) {
      onChangeCheck(!check);
    }
    if (onChange) {
      onChange(!check);
    }
  }, [onChangeCheck, check, onChange]);

  useEffect(() => {
    if (withRadio) {
      setFieldValue(name, stockCheck);
    }
  }, [withRadio, setFieldValue, name, stockCheck]);

  const finalCheck = withExternalCheck ? stockCheck : check;

  const helpers = {
    check: finalCheck,
  };

  const checkRender = (
    <>
      {withCheck ? (
        <div
          role="button"
          tabIndex="0"
          onKeyPress={handleChangeCheck}
          onClick={handleChangeCheck}
        >
          {finalCheck ? (
            <Icons.CheckAvailable width="1.5rem" height="1.5rem" />
          ) : (
            <Icons.CheckUnavailable width="1.5rem" height="1.5rem" />
          )}
        </div>
      ) : (
        <> {withAdd && <PlusButton textRight={textRight} onClick={onAdd} />}</>
      )}
    </>
  );

  const radioRender = (
    <>
      {withRadio && (
        <div className="CardRow__Item">
          <RadioGroupInput
            labelClass="d-flex align-items-center"
            groupClass="col-12 d-flex justify-content-around"
            parentClass="vehicle-radio-input"
            label=""
            name={name}
            value={finalCheck}
            options={[{ label: '', value: true }]}
            standardError
            onChange={handleChangeCheck}
          />
        </div>
      )}
    </>
  );

  return (
    <div className={`CardRow ${className}`}>
      <div className={`CardRow__Row ${rowClassName}`}>
        {direction === 'left' && (withRadio ? radioRender : checkRender)}

        {items.map(({ value, bold, title, id }) => (
          <div className="CardRow__Item" key={id}>
            {title ? (
              <TextField noMb title={title} value={value} />
            ) : (
              <>
                {bold ? (
                  <h6 className="m-0">{value}</h6>
                ) : (
                  <p className="m-0">{value}</p>
                )}
              </>
            )}
          </div>
        ))}

        {direction === 'right' && (withRadio ? radioRender : checkRender)}

        {RightRender && <RightRender {...helpers} />}
      </div>
    </div>
  );
}

CardRow.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  withCheck: PropTypes.bool,
  withRadio: PropTypes.bool,
  withAdd: PropTypes.bool,
  onChangeCheck: PropTypes.func,
  onChange: PropTypes.func,
  check: PropTypes.bool,
  withExternalCheck: PropTypes.bool,
  onAdd: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
  rowClassName: PropTypes.string,
  direction: PropTypes.string,
  textRight: PropTypes.string,
};
