import { getDateByTime } from '@utils/date';

export const compareHigherHourTest = ({
  principalHour,
  hourToCompare,
  strict = false,
}) => {
  const hourValue = getDateByTime(principalHour).getHours();
  const currentHour = getDateByTime(hourToCompare).getHours();
  const minutesValue = getDateByTime(principalHour).getMinutes();
  const currentMinute = getDateByTime(hourToCompare).getMinutes();

  const higherHourValue = hourValue >= currentHour;
  const sameHour = hourValue === currentHour;
  const higherMinutesValue = strict
    ? minutesValue > currentMinute
    : minutesValue >= currentMinute;

  return sameHour ? higherHourValue && higherMinutesValue : higherHourValue;
};
