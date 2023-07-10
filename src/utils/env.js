export const isIST = () => process.env.REACT_APP_ENV_NAME === 'ist';
export const isUAT = () => process.env.REACT_APP_ENV_NAME === 'uat';
export const isPROD = () => process.env.REACT_APP_ENV_NAME === 'prod';
