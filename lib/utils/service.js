"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatApiUrl = formatApiUrl;
exports.sendCustomRequest = sendCustomRequest;
exports.sendDeleteRequest = sendDeleteRequest;
exports.sendFormRequest = sendFormRequest;
exports.sendPatchRequest = sendPatchRequest;
exports.sendPostRequest = sendPostRequest;
exports.sendPostRequestRaw = sendPostRequestRaw;
exports.sendPutRequest = sendPutRequest;
exports.sendRawRequest = sendRawRequest;
exports.sendRequest = sendRequest;
exports.sendUploadRequest = sendUploadRequest;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var REACT_APP_API_URL = process.env.REACT_APP_API_URL;
var ERROR_NETWORK_MSG = 'Network Error';
function handleCommonResponse(_x) {
  return _handleCommonResponse.apply(this, arguments);
}
function _handleCommonResponse() {
  _handleCommonResponse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
    var result, _result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!response.ok) {
            _context.next = 13;
            break;
          }
          _context.prev = 1;
          _context.next = 4;
          return response.json();
        case 4:
          result = _context.sent;
          return _context.abrupt("return", {
            success: true,
            data: result
          });
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", {
            success: true,
            data: null
          });
        case 11:
          _context.next = 24;
          break;
        case 13:
          if (!(response.status === 400)) {
            _context.next = 24;
            break;
          }
          _context.prev = 14;
          _context.next = 17;
          return response.json();
        case 17:
          _result = _context.sent;
          return _context.abrupt("return", {
            success: false,
            data: _result
          });
        case 21:
          _context.prev = 21;
          _context.t1 = _context["catch"](14);
          return _context.abrupt("return", {
            success: false,
            data: null
          });
        case 24:
          throw new Error('Network Error');
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8], [14, 21]]);
  }));
  return _handleCommonResponse.apply(this, arguments);
}
function sendUploadRequest(_x2, _x3) {
  return _sendUploadRequest.apply(this, arguments);
}
function _sendUploadRequest() {
  _sendUploadRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(path, data) {
    var options,
      url,
      headers,
      authToken,
      response,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
          url = "".concat(REACT_APP_API_URL, "/").concat(path);
          headers = options.headers || new Headers();
          authToken = options.authToken;
          if (authToken) {
            headers.append('Authorization', "Bearer ".concat(authToken));
          }
          _context2.next = 7;
          return fetch(url, {
            method: 'PUT',
            body: data,
            headers: headers,
            credentials: 'include'
          });
        case 7:
          response = _context2.sent;
          return _context2.abrupt("return", handleCommonResponse(response));
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _sendUploadRequest.apply(this, arguments);
}
function sendRequest(_x4, _x5) {
  return _sendRequest.apply(this, arguments);
}
function _sendRequest() {
  _sendRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(path, options) {
    var url, headers, authToken, response, _yield$response$json, data, body, content;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          url = "".concat(REACT_APP_API_URL, "/").concat(path);
          headers = options.headers || new Headers();
          authToken = options.authToken;
          if (authToken) {
            headers.append('Authorization', "Bearer ".concat(authToken));
          }
          _context3.next = 6;
          return fetch(url, {
            method: 'GET',
            headers: headers,
            credentials: 'include'
          });
        case 6:
          response = _context3.sent;
          if (!response.ok) {
            _context3.next = 21;
            break;
          }
          _context3.prev = 8;
          _context3.next = 11;
          return response.json();
        case 11:
          _yield$response$json = _context3.sent;
          data = _yield$response$json.data;
          body = _yield$response$json.body;
          content = _yield$response$json.content;
          return _context3.abrupt("return", {
            success: true,
            data: data,
            body: body,
            content: content,
            response: response
          });
        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](8);
          return _context3.abrupt("return", {
            success: true,
            data: null,
            body: null,
            content: null,
            response: response
          });
        case 21:
          throw new Error('Error in request');
        case 22:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[8, 18]]);
  }));
  return _sendRequest.apply(this, arguments);
}
function sendRawRequest(_x6, _x7) {
  return _sendRawRequest.apply(this, arguments);
}
function _sendRawRequest() {
  _sendRawRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(path, options) {
    var url, headers, authToken, response, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          url = "".concat(REACT_APP_API_URL, "/").concat(path);
          headers = options.headers || new Headers();
          authToken = options.authToken;
          if (authToken) {
            headers.append('Authorization', "Bearer ".concat(authToken));
          }
          _context4.next = 6;
          return fetch(url, {
            method: 'GET',
            headers: headers,
            credentials: 'include'
          });
        case 6:
          response = _context4.sent;
          if (!response.ok) {
            _context4.next = 18;
            break;
          }
          _context4.prev = 8;
          _context4.next = 11;
          return response.json();
        case 11:
          data = _context4.sent;
          return _context4.abrupt("return", {
            success: true,
            data: data
          });
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](8);
          return _context4.abrupt("return", {
            success: false,
            data: _context4.t0
          });
        case 18:
          throw new Error('Error in request');
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[8, 15]]);
  }));
  return _sendRawRequest.apply(this, arguments);
}
function sendPostRequestRaw(_x8, _x9) {
  return _sendPostRequestRaw.apply(this, arguments);
}
function _sendPostRequestRaw() {
  _sendPostRequestRaw = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(path, data) {
    var options,
      url,
      headers,
      authToken,
      response,
      _headers,
      body,
      _args5 = arguments;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          options = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
          url = "".concat(REACT_APP_API_URL, "/").concat(path);
          headers = new Headers();
          headers.append('content-type', 'application/json');
          authToken = options.authToken;
          if (authToken) {
            headers.append('Authorization', "Bearer ".concat(authToken));
          }
          _context5.next = 8;
          return fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
            credentials: 'include'
          });
        case 8:
          response = _context5.sent;
          if (!response.ok) {
            _context5.next = 20;
            break;
          }
          _context5.prev = 10;
          _headers = response.headers, body = response.body;
          return _context5.abrupt("return", {
            success: true,
            data: {
              headers: _headers,
              body: body
            }
          });
        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](10);
          return _context5.abrupt("return", {
            success: true,
            data: null
          });
        case 18:
          _context5.next = 22;
          break;
        case 20:
          if (!(response.status === 400)) {
            _context5.next = 22;
            break;
          }
          return _context5.abrupt("return", {
            success: false,
            data: null
          });
        case 22:
          throw new Error('Network Error');
        case 23:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[10, 15]]);
  }));
  return _sendPostRequestRaw.apply(this, arguments);
}
function sendPostRequest(_x10, _x11, _x12) {
  return _sendPostRequest.apply(this, arguments);
}
function _sendPostRequest() {
  _sendPostRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(path, data, options) {
    var url, headers, authToken, response, result, _result2;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          url = "".concat(REACT_APP_API_URL, "/").concat(path);
          headers = options.headers || new Headers();
          headers.append('content-type', 'application/json');
          authToken = options.authToken;
          if (authToken) {
            headers.append('Authorization', "Bearer ".concat(authToken));
          }
          _context6.next = 7;
          return fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
            credentials: 'include'
          });
        case 7:
          response = _context6.sent;
          if (!response.ok) {
            _context6.next = 21;
            break;
          }
          _context6.prev = 9;
          _context6.next = 12;
          return response.json();
        case 12:
          result = _context6.sent;
          return _context6.abrupt("return", {
            success: true,
            data: result
          });
        case 16:
          _context6.prev = 16;
          _context6.t0 = _context6["catch"](9);
          return _context6.abrupt("return", {
            success: true,
            data: null,
            error: _context6.t0
          });
        case 19:
          _context6.next = 32;
          break;
        case 21:
          if (!(response.status === 400)) {
            _context6.next = 32;
            break;
          }
          _context6.prev = 22;
          _context6.next = 25;
          return response.json();
        case 25:
          _result2 = _context6.sent;
          return _context6.abrupt("return", {
            success: false,
            data: _result2
          });
        case 29:
          _context6.prev = 29;
          _context6.t1 = _context6["catch"](22);
          return _context6.abrupt("return", {
            success: false,
            data: null,
            error: _context6.t1
          });
        case 32:
          throw new Error('Network Error');
        case 33:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[9, 16], [22, 29]]);
  }));
  return _sendPostRequest.apply(this, arguments);
}
function sendFormRequest(_x13, _x14, _x15) {
  return _sendFormRequest.apply(this, arguments);
}
function _sendFormRequest() {
  _sendFormRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(path, data, options) {
    var url, headers, authToken, response;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          url = "".concat(REACT_APP_API_URL, "/").concat(path);
          headers = new Headers();
          authToken = options.authToken;
          if (authToken) {
            headers.append('Authorization', "Bearer ".concat(authToken));
          }
          _context7.next = 6;
          return fetch(url, {
            method: 'POST',
            headers: headers,
            body: data
          });
        case 6:
          response = _context7.sent;
          return _context7.abrupt("return", handleCommonResponse(response));
        case 8:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _sendFormRequest.apply(this, arguments);
}
function sendPutRequest(_x16, _x17, _x18) {
  return _sendPutRequest.apply(this, arguments);
}
function _sendPutRequest() {
  _sendPutRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(path, data, options) {
    var url, headers, response, result, _result3;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          url = "".concat(REACT_APP_API_URL, "/").concat(path);
          headers = options.headers || new Headers();
          headers.append('content-type', 'application/json');
          if (options.authToken) {
            headers.append('authorization', "Bearer ".concat(options.authToken));
          }
          _context8.next = 6;
          return fetch(url, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(data),
            credentials: 'include'
          });
        case 6:
          response = _context8.sent;
          if (!response.ok) {
            _context8.next = 20;
            break;
          }
          _context8.prev = 8;
          _context8.next = 11;
          return response.json();
        case 11:
          result = _context8.sent;
          return _context8.abrupt("return", {
            success: true,
            data: result
          });
        case 15:
          _context8.prev = 15;
          _context8.t0 = _context8["catch"](8);
          return _context8.abrupt("return", {
            success: true,
            data: null
          });
        case 18:
          _context8.next = 31;
          break;
        case 20:
          if (!(response.status === 400)) {
            _context8.next = 31;
            break;
          }
          _context8.prev = 21;
          _context8.next = 24;
          return response.json();
        case 24:
          _result3 = _context8.sent;
          return _context8.abrupt("return", {
            success: false,
            data: _result3
          });
        case 28:
          _context8.prev = 28;
          _context8.t1 = _context8["catch"](21);
          return _context8.abrupt("return", {
            success: false,
            data: null
          });
        case 31:
          return _context8.abrupt("return", {
            data: null,
            success: false
          });
        case 32:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[8, 15], [21, 28]]);
  }));
  return _sendPutRequest.apply(this, arguments);
}
function sendPatchRequest(_x19, _x20, _x21) {
  return _sendPatchRequest.apply(this, arguments);
}
function _sendPatchRequest() {
  _sendPatchRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(path, data, options) {
    var url, response, headers;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          url = "".concat(REACT_APP_API_URL, "/").concat(path);
          _context9.next = 3;
          return fetch(url, {
            method: 'PATCH',
            headers: options.headers || new Headers(),
            body: JSON.stringify(data),
            credentials: 'include'
          });
        case 3:
          response = _context9.sent;
          headers = options.headers || new Headers();
          headers.append('content-type', 'application/json');
          if (options.authToken) {
            headers.append('authorization', "Bearer ".concat(options.authToken));
          }
          return _context9.abrupt("return", handleCommonResponse(response));
        case 8:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _sendPatchRequest.apply(this, arguments);
}
function sendDeleteRequest(_x22, _x23) {
  return _sendDeleteRequest.apply(this, arguments);
}
function _sendDeleteRequest() {
  _sendDeleteRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(path, options) {
    var headers, url, response, _yield$response$json2, data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          headers = options.headers || new Headers();
          headers.append('content-type', 'application/json');
          if (options.authToken) {
            headers.append('authorization', "Bearer ".concat(options.authToken));
          }
          url = "".concat(REACT_APP_API_URL, "/").concat(path);
          _context10.next = 6;
          return fetch(url, {
            method: 'DELETE',
            headers: headers,
            credentials: 'include'
          });
        case 6:
          response = _context10.sent;
          if (!response.ok) {
            _context10.next = 19;
            break;
          }
          _context10.prev = 8;
          _context10.next = 11;
          return response.json();
        case 11:
          _yield$response$json2 = _context10.sent;
          data = _yield$response$json2.data;
          return _context10.abrupt("return", {
            success: true,
            data: data
          });
        case 16:
          _context10.prev = 16;
          _context10.t0 = _context10["catch"](8);
          return _context10.abrupt("return", {
            success: true,
            data: null
          });
        case 19:
          throw new Error('Error in request');
        case 20:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[8, 16]]);
  }));
  return _sendDeleteRequest.apply(this, arguments);
}
function formatApiUrl(path) {
  return "".concat(REACT_APP_API_URL, "/").concat(path);
}
function sendCustomRequest(_x24, _x25, _x26) {
  return _sendCustomRequest.apply(this, arguments);
}
function _sendCustomRequest() {
  _sendCustomRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(path, options, data) {
    var method,
      headers,
      url,
      response,
      json,
      _args11 = arguments;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          method = _args11.length > 3 && _args11[3] !== undefined ? _args11[3] : 'get';
          headers = options.headers || new Headers();
          headers.append('content-type', 'application/json');
          if (options.authToken) {
            headers.append('authorization', "Bearer ".concat(options.authToken));
          }
          url = "".concat(REACT_APP_API_URL, "/").concat(path);
          _context11.next = 7;
          return fetch(url, {
            method: method,
            headers: headers,
            body: data ? JSON.stringify(data) : undefined,
            credentials: 'include'
          });
        case 7:
          response = _context11.sent;
          _context11.next = 10;
          return response.json();
        case 10:
          json = _context11.sent;
          return _context11.abrupt("return", {
            data: json,
            success: response.ok,
            status: response.status
          });
        case 12:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _sendCustomRequest.apply(this, arguments);
}