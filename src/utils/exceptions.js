export class APIError extends Error {
  constructor(code, message, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, APIError);
    }
    this.name = 'APIError';
    this.code = code;
    this.message = message;
    this.date = new Date();
  }
}
