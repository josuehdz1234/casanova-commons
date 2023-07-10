import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import classNames from 'classnames';
import moment from 'moment-timezone';
import { createPopper } from '@popperjs/core';
import _noop from 'lodash/noop';
import _isEqual from 'lodash/isEqual';

import { utils, Calendar } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

import {
  getNextYear,
  spanishLocale,
  date2CalendarDate,
  YYYY_MM_DD,
  timeZone as TIME_ZONE,
} from '@utils/date';
import { months } from '@utils/constants/dateAndTime';
import { COLORS } from '@utils/colors';

import Input from '../../Input/MaskedInput';
import * as Icons from '../../Icons';
import OutsideAlerter from '../OutsideAlerter';
import Portal from '../Portal';

import { getPopperConfig } from './config';

import './DatePickerV2.scss';

const INITIAL_DATA = {
  daySelected: 'día',
  monthSelected: 'mes',
  yearSelected: 'año',
};

export default function DatePickerV2({
  placeholder = '',
  label = '',
  disabled = false,
  type = 'text',
  name = 'date-picker',
  id,
  minimumDate = utils().getToday(),
  initialValue: defaultValue,
  onChange = _noop,
  onBlur = _noop,
  calendarTop,
  maximumDate = getNextYear(),
  autoComplete = 'off',
  fromSearch,
  resetDate = false,
  placement = 'right',
  dateFormat = YYYY_MM_DD,
  timeZone = TIME_ZONE,
  onResetDate = _noop,
  formatDateValue = false,
  initialDate = null,
  ...restProps
}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [daySelected, setDaySelected] = useState(INITIAL_DATA.daySelected);
  const [monthSelected, setMonthSelected] = useState(
    INITIAL_DATA.monthSelected
  );
  const [yearSelected, setYearSelected] = useState(INITIAL_DATA.yearSelected);
  const [hasContent, setHasContent] = useState(false);
  const [params, setParams] = useState({});
  const [show, setShow] = useState(false);

  const [field, meta, helpers] = useField(name);
  const { setValue, setTouched } = helpers;

  const trigger = useRef();
  const popup = useRef();
  const arrow = useRef();

  const initialValue = useMemo(() => defaultValue || meta.initialValue, [
    defaultValue,
    meta.initialValue,
  ]);

  const handleKeyDown = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleChange = useCallback(
    (evt, disabledOnChange = false) => {
      setShow(false);
      setSelectedDate(evt);

      if (fromSearch && !disabledOnChange) {
        const realMonth = evt.month >= 10 ? evt.month : `0${evt.month}`;
        const realDay = evt.day >= 10 ? evt.day : `0${evt.day}`;
        const value = `${evt.year}-${realMonth}-${realDay}`;
        const formattedValue = formatDateValue
          ? moment(value).tz(timeZone).format(dateFormat)
          : value;
        const event = { target: { value: formattedValue } };

        onChange(event);
        field.onBlur(event);
      }
    },
    [formatDateValue, timeZone, dateFormat]
  );

  const handleBlur = useCallback(
    (e) => {
      field.onBlur(e);
      if (!disabled) onBlur(e);
    },
    [onBlur, disabled, field.onBlur]
  );

  const handleResetDate = useCallback(() => {
    setSelectedDate(null);
    setDaySelected('día');
    setMonthSelected('mes');
    setYearSelected('año');
    setHasContent(false);
    onResetDate();
  }, [onResetDate]);

  const handleClickOutsideAlerter = useCallback(() => {
    setShow(false);
    setTouched(true);
  }, [setTouched]);

  const changeShow = useCallback(() => {
    if (!disabled) {
      setTouched(meta.touched);
      setShow(!show);
    }
  }, [show, disabled, setTouched, meta.touched]);

  useEffect(() => {
    if (initialValue) {
      const propsDate = moment(initialValue, dateFormat).tz(timeZone).toDate();
      setDaySelected(propsDate.getDate());
      setMonthSelected(propsDate.getMonth());
      setYearSelected(propsDate.getFullYear());
    } else {
      setDaySelected('día');
      setMonthSelected('mes');
      setYearSelected('año');
    }
  }, [initialValue]);

  useEffect(() => {
    if (!selectedDate) return;

    const { day, month, year } = selectedDate;

    setDaySelected(day);
    setMonthSelected(month - 1);
    setYearSelected(year);

    const validDate = Boolean(day || month || year);
    const allValidDates = Boolean(day && month && year);

    setHasContent(validDate);

    if (allValidDates || initialValue) {
      const date = `${year}-${month}-${day}`;
      const formattedDate = formatDateValue
        ? moment(date).tz(timeZone).format(dateFormat)
        : date;
      const event = { target: { value: formattedDate } };

      setValue(formattedDate);

      setTimeout(() => {
        if (trigger.current) {
          trigger?.current?.blur(event);
        }
        setTouched(true);
      }, 1);
    }
  }, [selectedDate, initialValue, formatDateValue, timeZone, dateFormat]);

  useEffect(() => {
    if (!fromSearch) onChange(field.value);
  }, [field.value]);

  useEffect(() => {
    if (field.value && fromSearch) {
      const currentDate = date2CalendarDate(field.value);
      if (currentDate) handleChange(currentDate, true);
    }
  }, [field.value, fromSearch]);

  useEffect(() => {
    let instance = null;

    if (trigger.current && popup.current && arrow.current) {
      instance = createPopper(
        trigger.current,
        popup.current,
        getPopperConfig({
          placement,
          element: arrow.current,
          onFirstUpdate: setParams,
        })
      );
    }

    return () => instance?.destroy();
  }, [trigger.current, popup.current, arrow.current, placement]);

  const currentDateData = useMemo(
    () => ({
      daySelected,
      monthSelected,
      yearSelected,
    }),
    [daySelected, monthSelected, yearSelected]
  );

  const noDateValues = useMemo(() => _isEqual(currentDateData, INITIAL_DATA), [
    currentDateData,
  ]);

  useEffect(() => {
    if (!field.value && !noDateValues) {
      handleResetDate();
    }
  }, [field.value, noDateValues]);

  const iconCn = classNames(`svg-icon svg-icon-calendar`);

  const dayFormatted =
    daySelected === 'día' || daySelected >= 10
      ? daySelected
      : `0${daySelected}`;

  const monthFormatted = months[monthSelected] || 'mes';

  const finalValue = noDateValues
    ? ''
    : `${dayFormatted} / ${monthFormatted} / ${yearSelected}`;

  const datePicker = (
    <Calendar
      value={selectedDate || initialDate}
      onChange={handleChange}
      inputPlaceholder={placeholder}
      shouldHighlightWeekends
      colorPrimary={COLORS.SECONDARY}
      calendarClassName="custom-calendar"
      wrapperClassName="custom-calendar-wrapper"
      calendarTodayClassName="custom-today-day"
      minimumDate={minimumDate}
      maximumDate={maximumDate}
      locale={spanishLocale}
      {...restProps}
    />
  );

  return (
    <div className="m-0 p-0">
      <div className="row m-0 p-0">
        <div
          className={classNames(
            !disabled && 'pointer',
            'p-0',
            `col-${resetDate && selectedDate ? '10' : '12'}`
          )}
          onClick={changeShow}
          onKeyPress={changeShow}
          role="button"
          tabIndex="0"
        >
          <Input
            ref={trigger}
            label={label}
            type={type}
            placeholder={placeholder}
            modifiedExternal={hasContent}
            disabled={disabled}
            id={id}
            right={
              <div
                tabIndex="-1"
                role="button"
                onClick={changeShow}
                onKeyPress={changeShow}
                className={iconCn}
                aria-label={id}
              />
            }
            inputClass={calendarTop}
            onKeyDown={handleKeyDown}
            {...field}
            onBlur={handleBlur}
            value={finalValue}
            autoComplete={autoComplete}
            maskPlaceholder=""
          />
        </div>
        {resetDate && field.value && (
          <div className="col-2 p-0 d-flex">
            <button
              type="button"
              className="btn p-0 align-self-center DatePicker__ResetDate"
              onClick={handleResetDate}
            >
              <Icons.IcoDeleteGray width="1.5rem" height="1.5rem" />
            </button>
          </div>
        )}
      </div>
      <Portal>
        {show && (
          <OutsideAlerter
            className="pointer DatePickerV2"
            onClick={handleClickOutsideAlerter}
          >
            <div
              ref={popup}
              className={`DatePickerV2__Container DatePickerV2__Container--animation-in show bs-tooltip-${params.placement}`}
            >
              <div className="arrow" ref={arrow} />
              {datePicker}
            </div>
          </OutsideAlerter>
        )}
      </Portal>
    </div>
  );
}

DatePickerV2.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  resetDate: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  timeZone: PropTypes.string,
  formatDateValue: PropTypes.bool,
};
