export function groupNumber(n) {
  return n !== ''
    ? n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : ''; // NOSONAR
}

export function formatNumberInput(
  rawValue,
  dec = 1,
  maskPrefix = '$ ',
  maskSuffix = ''
) {
  const value = rawValue.replace(/[^0-9\.]/g, '');

  if (value) {
    if (window.parseInt(value) === 0) {
      return {
        mask: '0',
        value: '0',
      };
    }

    const decimalPos = value.indexOf('.');
    if (decimalPos > -1) {
      const integers = value.substring(0, decimalPos);
      const allDecimals = value.substring(decimalPos + 1);
      const decimals = dec ? allDecimals.substring(0, dec) : '';
      const point = `${dec ? '.' : ''}`;

      const mask = `${maskPrefix}${groupNumber(integers)}${point}${groupNumber(
        decimals
      )}${maskSuffix}`;

      return { mask, value: `${integers}${point}${decimals}` };
    }
    return {
      mask: `${maskPrefix}${groupNumber(value)}${maskSuffix}`,
      value,
    };
  }

  return {
    mask: '',
    value: '',
  };
}
