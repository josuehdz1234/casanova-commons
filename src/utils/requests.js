export const cleanParams = (params) =>
  Object.entries(params).reduce((acc, [currentKey, currentParam]) => {
    if (currentParam || currentKey === 'page') {
      acc[currentKey] = currentParam;
    }
    return acc;
  }, {});
