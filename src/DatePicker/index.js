import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import classNames from 'classnames';
import { useField } from 'formik';
import './DatePicker.scss';

import Input from '../Input/Input';

const YYYY_MM_DD = 'YYYY-MM-DD';
const timeZone = 'America/Mexico_City';

const DatePicker = (props) => {
  const {
    initialValue,
    disabled,
    name,
    onChange,
    calendarTop,
    initialYear = new Date().getFullYear(),
    numberYears = 12,
  } = props;
  const [field, meta, helpers] = useField(name);
  const calendarRef = useRef(null);

  const { setValue } = helpers;

  const days = useMemo(() => Array.from({ length: 31 }, (_, i) => i + 1));
  const months = useMemo(() => [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ]);
  const years = useMemo(() =>
    Array.from({ length: numberYears }, (_, i) => initialYear + 1 - i)
  );

  const [activeSelection, setActiveSelection] = useState('day');
  const [daySelected, setDaySelected] = useState('día');
  const [monthSelected, setMonthSelected] = useState('mes');
  const [yearSelected, setYearSelected] = useState('año');
  const [calendarElements, setCalendarElements] = useState(days);
  const [currentTitle, setCurrentTitle] = useState('día');
  const [open, setOpen] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  const handleSelection = useCallback(
    (value) => {
      if (activeSelection === 'day') {
        setDaySelected(value);
        setActiveSelection('month');
        setCalendarElements(months);
        setCurrentTitle('mes');
      } else if (activeSelection === 'month') {
        setMonthSelected(months.indexOf(value));
        setActiveSelection('year');
        setCalendarElements(years);
        setCurrentTitle('año');
      } else {
        setYearSelected(value);
        setActiveSelection('day');
        setCalendarElements(days);
        setCurrentTitle('día');
        setOpen(false);
      }
    },
    [activeSelection, years, days, months]
  );

  useEffect(() => {
    if (
      daySelected !== 'día' ||
      monthSelected !== 'mes' ||
      yearSelected !== 'año'
    ) {
      setHasContent(true);
    } else {
      setHasContent(false);
    }
    if (
      daySelected !== 'día' &&
      monthSelected !== 'mes' &&
      yearSelected !== 'año'
    ) {
      const realMonth = monthSelected + 1;
      const month = realMonth >= 10 ? realMonth : `0${realMonth}`;
      const day = daySelected >= 10 ? daySelected : `0${daySelected}`;
      setValue(`${yearSelected}-${month}-${day}`);
    }
  }, [yearSelected, daySelected, monthSelected]);

  const toogleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleCalendarClick = useCallback(() => {
    if (!disabled) {
      toogleOpen();
    }
  });

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (initialValue) {
      const propsDate = moment(initialValue, YYYY_MM_DD).tz(timeZone).toDate();
      setDaySelected(propsDate.getDate());
      setMonthSelected(propsDate.getMonth());
      setYearSelected(propsDate.getFullYear());
    } else {
      setDaySelected('día');
      setMonthSelected('mes');
      setYearSelected('año');
    }
  }, [initialValue]);

  const handleBlur = useCallback((e) => {
    setTimeout(() => {
      const target = document.activeElement;
      const focusedElement = target
        ? target.id || target || target.tagName
        : '';
      const isFocusedCalendar =
        focusedElement.className.indexOf('DatePickerV1__calendar--open') !== -1;
      setOpen(isFocusedCalendar);
      if (props.onBlur) {
        props.onBlur(e);
      }
    }, 1);
  });

  const handleKeyDown = useCallback((event) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    if (onChange) {
      onChange(field.value);
    }
  }, [field.value]);

  // Starts classNames block
  const containerCN = classNames('DatePickerV1__input', {
    'DatePickerV1__input--open': open,
  });
  const calendarCN = classNames(
    calendarTop && 'DatePickerV1__calendarTop',
    `DatePickerV1__calendar`,
    { 'DatePickerV1__calendar--open': open }
  );
  const iconCn = classNames(`svg-icon svg-icon-calendar`);

  const noValues =
    daySelected === 'día' && monthSelected === 'mes' && yearSelected === 'año';
  const dayFormatted =
    daySelected === 'día' || daySelected >= 10
      ? daySelected
      : `0${daySelected}`;
  const monthFormatted = months[monthSelected] ? months[monthSelected] : 'mes';
  const finalValue = noValues
    ? ''
    : `${dayFormatted} / ${monthFormatted} / ${yearSelected}`;

  return (
    <div className="DatePickerV1">
      <div className={containerCN}>
        <Input
          label={props.label}
          {...field}
          type="text"
          value={finalValue}
          placeholder={props.placeholder}
          modifiedExternal={hasContent}
          name={props.name}
          id={props.id}
          disabled={disabled}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          right={
            <div
              onBlur={handleBlur}
              onClick={handleCalendarClick}
              tabIndex="-1"
              className={iconCn}
            />
          }
          onFocus={handleOpen}
          inputClass={calendarTop}
        />
      </div>
      <div
        tabIndex={-1}
        ref={calendarRef}
        onBlur={(e) => {
          setOpen(false);
          if (props.onBlur) {
            props.onBlur({
              ...e,
              dateValue: field.value,
            });
          }
        }}
        className={calendarCN}
      >
        <label className="col-form-label">Selecciona un {currentTitle}</label>
        <div className={`DatePickerV1__calendar__${activeSelection}s-grid`}>
          {calendarElements &&
            calendarElements.map((element) => (
              <span
                key={`${activeSelection}-${element}`}
                onClick={() => handleSelection(element)}
                className={classNames('DatePickerV1__calendar__element', {
                  'DatePickerV1__calendar__element--selected':
                    element === daySelected ||
                    element === months[monthSelected] ||
                    element === yearSelected,
                })}
              >
                {activeSelection === 'day'
                  ? element >= 10
                    ? element
                    : `0${element}`
                  : element}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

DatePicker.defaultProps = {};

export default DatePicker;
