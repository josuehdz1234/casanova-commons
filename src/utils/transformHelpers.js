import _isArray from 'lodash/isArray';
import _isObject from 'lodash/isObject';

const getObjectProp = (obj, prop) =>
  prop.split('.').reduce((r, e) => r[e], obj);

export const transformForSelect = (elements, value, label, levels = {}) => {
  const {
    moreLevels = false,
    levelsValuesKey = '',
    levelsLabelsKey = '',
  } = levels;

  const selectElements = elements.map((element) => ({
    ...element,
    value: moreLevels
      ? getObjectProp(element[value], levelsValuesKey)
      : element[value],
    label: moreLevels
      ? getObjectProp(element[label], levelsLabelsKey)
      : element[label],
  }));

  return selectElements;
};

export const transformIdOfList = (list, id) => {
  const transformedList = list.map((element = {}, idx) => {
    // eslint-disable-next-line no-param-reassign
    element.id = id ? element[id] : idx;
    return element;
  });
  return transformedList;
};

export const transformForRadioGroup = (elements, value, label) =>
  elements.map((element) => ({
    ...element,
    value: Boolean(element[value]),
    label: element[label],
  }));

export const replaceElement = (
  elements,
  elementToReplace,
  elementIdToReplace,
  valueToCompare
) =>
  elements.map((element) => {
    const sameElement = element[elementIdToReplace] === valueToCompare;
    return sameElement ? elementToReplace : element;
  });

export const transformForOptionBar = ({
  elements,
  value,
  label,
  sub = '',
  check = '',
  verifyCheck = null,
}) =>
  elements.map((element) => ({
    ...element,
    value: element[value],
    label: element[label],
    sub: sub ? element[sub] : '',
    check: verifyCheck ? verifyCheck(element) : element[check] || '',
  }));

export const transformDropdownElements = ({
  elements = [],
  name = 'name',
  label = 'label',
  disabled = 'disabled',
  options,
}) =>
  elements.map((element) => ({
    ...element,
    name: element[name],
    label: element[label],
    disabled: element[disabled],
    options: element[options],
  }));

export const getFieldSearch = (field = '') => `${field}_search`;

export const fieldSearch = getFieldSearch;

export const getLastSearchField = (field = '') => `${field}_lastSearch`;

export const transformDisableSelectOption = (options = [], optionToDisable) => {
  if (!optionToDisable) return options;

  const filteredOptions = options.map((option) => {
    const sameField = option.uuid === optionToDisable;

    if (_isArray(optionToDisable)) {
      const disabled = optionToDisable
        .map((current) => (_isObject(current) ? current.uuid : current))
        .includes(option.uuid);

      return { ...option, disabled };
    }

    return {
      ...option,
      disabled: sameField,
    };
  });

  return filteredOptions;
};
