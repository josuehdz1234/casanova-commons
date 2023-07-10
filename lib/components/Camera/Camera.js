"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactWebcam = _interopRequireDefault(require("react-webcam"));
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _hooks = require("../../hooks");
var _i18n = _interopRequireDefault(require("../../utils/i18n"));
var _ = require("./..");
var Icons = _interopRequireWildcard(require("../../Icons"));
var _Loader = _interopRequireDefault(require("../../Loader"));
var _config = require("./config");
require("./Camera.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ActionModal = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("../../Modal/ActionModal"));
  });
});
function Camera(_ref) {
  var _ref$allScreen = _ref.allScreen,
    allScreen = _ref$allScreen === void 0 ? true : _ref$allScreen,
    _ref$nativeOptions = _ref.nativeOptions,
    nativeOptions = _ref$nativeOptions === void 0 ? {} : _ref$nativeOptions,
    _ref$audio = _ref.audio,
    audio = _ref$audio === void 0 ? false : _ref$audio,
    _ref$videoConstraints = _ref.videoConstraints,
    videoConstraints = _ref$videoConstraints === void 0 ? _config.VIDEO_CONSTRAINTS_DEFAULT : _ref$videoConstraints,
    _ref$screenshotFormat = _ref.screenshotFormat,
    screenshotFormat = _ref$screenshotFormat === void 0 ? _config.SCREENSHOT_FORMAT_DEFAULT : _ref$screenshotFormat,
    _ref$showSelectedImag = _ref.showSelectedImage,
    showSelectedImage = _ref$showSelectedImag === void 0 ? false : _ref$showSelectedImag,
    _ref$getImages = _ref.getImages,
    getImages = _ref$getImages === void 0 ? _noop2["default"] : _ref$getImages,
    _ref$onSend = _ref.onSend,
    onSend = _ref$onSend === void 0 ? _noop2["default"] : _ref$onSend,
    _ref$onMoreImages = _ref.onMoreImages,
    onMoreImages = _ref$onMoreImages === void 0 ? _noop2["default"] : _ref$onMoreImages,
    _ref$onError = _ref.onError,
    onError = _ref$onError === void 0 ? _noop2["default"] : _ref$onError,
    _ref$onChangeShowSele = _ref.onChangeShowSelected,
    onChangeShowSelected = _ref$onChangeShowSele === void 0 ? _noop2["default"] : _ref$onChangeShowSele,
    _ref$onPermissionsErr = _ref.onPermissionsError,
    onPermissionsError = _ref$onPermissionsErr === void 0 ? _noop2["default"] : _ref$onPermissionsErr,
    _ref$customImage = _ref.customImage,
    customImage = _ref$customImage === void 0 ? null : _ref$customImage,
    _ref$swiper = _ref.swiper,
    swiper = _ref$swiper === void 0 ? true : _ref$swiper,
    _ref$customListOfImag = _ref.customListOfImages,
    customListOfImages = _ref$customListOfImag === void 0 ? null : _ref$customListOfImag,
    _ref$customListOfSele = _ref.customListOfSelectedImages,
    customListOfSelectedImages = _ref$customListOfSele === void 0 ? null : _ref$customListOfSele,
    _ref$onlyCustomImage = _ref.onlyCustomImage,
    onlyCustomImage = _ref$onlyCustomImage === void 0 ? false : _ref$onlyCustomImage,
    _ref$showCameraButton = _ref.showCameraButton,
    showCameraButton = _ref$showCameraButton === void 0 ? true : _ref$showCameraButton,
    children = _ref.children;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    actualImage = _useState2[0],
    setActualImage = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showListOfImages = _useState4[0],
    setShowListOfImages = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    listOfImages = _useState6[0],
    setListOfImages = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    listOfSelectedImages = _useState8[0],
    setListOfSelectedImages = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    swiperImage = _useState10[0],
    setSwiperImage = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    cameraWithZoom = _useState12[0],
    setCameraWithZoom = _useState12[1];
  var _useState13 = (0, _react.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    zoomConfig = _useState14[0],
    setZoomConfig = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    activeFlash = _useState16[0],
    setActiveFlash = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    hasNotPermissions = _useState18[0],
    setHasNotPermissions = _useState18[1];
  var webcamRef = (0, _react.useRef)(null);
  (0, _hooks.useScroll)({
    disableScroll: allScreen
  });
  var handleClickCapture = (0, _react.useCallback)(function () {
    var imgBase64 = webcamRef.current.getScreenshot();
    if (imgBase64) {
      setActualImage(imgBase64);
      if (showListOfImages) {
        var validList = listOfImages.length < 5;
        var finalList = validList ? listOfImages : listOfImages.slice(0, -1);
        setListOfImages([].concat(_toConsumableArray(finalList), [imgBase64]));
      }
    }
  }, [webcamRef, listOfImages, showListOfImages]);
  var handleClickMoreImages = (0, _react.useCallback)(function () {
    onMoreImages();
    setShowListOfImages(true);
  }, [onMoreImages]);
  var handleClickSend = (0, _react.useCallback)(function () {
    onSend({
      actualImage: actualImage,
      listOfImages: listOfImages,
      listOfSelectedImages: listOfSelectedImages
    });
  }, [onSend, actualImage, listOfImages, listOfSelectedImages]);
  var handleError = function handleError(error) {
    console.error(error);
    // eslint-disable-next-line no-shadow
    var hasNotPermissions = error.toString().includes(_config.ERRORS.PERMISSIONS_DENIED);
    if (hasNotPermissions) {
      setHasNotPermissions(true);
      return;
    }
    onError(error);
  };
  var handleChangeCurrentPage = (0, _react.useCallback)(function (currentPage) {
    setSwiperImage(currentPage);
  }, []);
  var handleClickImage = (0, _react.useCallback)(function (status, image) {
    var list = [];
    var filterList = function filterList() {
      return listOfSelectedImages.filter(function (selectedImage) {
        return selectedImage !== image;
      });
    };
    if (status) {
      list = filterList();
      list.push(image);
    } else list = filterList();
    setListOfSelectedImages(list);
  }, [listOfSelectedImages]);
  (0, _react.useEffect)(function () {
    getImages(actualImage, listOfImages);
  }, [actualImage, listOfImages, getImages]);
  (0, _react.useEffect)(function () {
    if (customListOfImages) {
      setListOfImages(customListOfImages);
      setListOfSelectedImages(customListOfImages);
      setActualImage(null);
    }
  }, [customListOfImages]);
  (0, _react.useEffect)(function () {
    if (customListOfSelectedImages) {
      setListOfSelectedImages(customListOfSelectedImages);
    }
  }, [customListOfSelectedImages]);
  var imageSrc = (0, _react.useMemo)(function () {
    var validListOfSelectedImgs = swiper && listOfSelectedImages.length > 0;
    if (onlyCustomImage) {
      return validListOfSelectedImgs ? listOfSelectedImages[swiperImage] : customImage;
    }
    return validListOfSelectedImgs ? listOfSelectedImages[swiperImage] : customImage || actualImage || '';
  }, [swiperImage, listOfSelectedImages, actualImage, customImage, onlyCustomImage]);
  var getValidRenderImage = function getValidRenderImage() {
    var validListOfSelectedImgs = swiper && listOfSelectedImages.length > 0;
    if (onlyCustomImage) {
      return customImage || validListOfSelectedImgs;
    }
    return customImage || actualImage || validListOfSelectedImgs;
  };
  var ADVANCED_FUNCTIONALITIES = (0, _react.useMemo)(function () {
    return [{
      type: _config.ZOOM,
      setConfig: setZoomConfig,
      setExist: setCameraWithZoom
    }];
  }, []);
  var handleDoubleClick = (0, _react.useCallback)(function () {
    setActiveFlash(function (currentActiveFlash) {
      return !currentActiveFlash;
    });
  }, []);
  (0, _react.useEffect)(function () {
    if (webcamRef.current && webcamRef.current.stream) {
      var track = (0, _config.getStreamTrack)(webcamRef.current.stream);
      var constraints = {
        advanced: [{
          torch: activeFlash
        }]
      };
      track.applyConstraints(constraints).then(function () {
        return console.log('Flash active');
      })["catch"](function (error) {
        return console.error('Flash error ', error);
      });
    }
  }, [webcamRef.current, activeFlash]);
  var handleUserMedia = (0, _react.useCallback)(function (stream) {
    var video = document.querySelector('video');
    video.srcObject = stream;
    var track = (0, _config.getStreamTrack)(stream);
    var capabilities = track.getCapabilities();
    var settings = track.getSettings();
    ADVANCED_FUNCTIONALITIES.forEach(function (_ref2) {
      var type = _ref2.type,
        setConfig = _ref2.setConfig,
        setExist = _ref2.setExist;
      if (!(type in settings)) {
        console.error("Camera does not support ".concat(type, "."));
        return;
      }
      if (type === _config.ZOOM) {
        setExist(true);
        setConfig(function () {
          return {
            min: capabilities[type].min,
            max: capabilities[type].max,
            step: capabilities[type].step,
            onChange: function () {
              var _onChange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(currentValue) {
                var constraints;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      constraints = {
                        advanced: [_defineProperty({}, type, currentValue)]
                      };
                      _context.next = 4;
                      return track.applyConstraints(constraints);
                    case 4:
                      _context.next = 9;
                      break;
                    case 6:
                      _context.prev = 6;
                      _context.t0 = _context["catch"](0);
                      console.error("Error apply ".concat(type, " "), _context.t0);
                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, null, [[0, 6]]);
              }));
              function onChange(_x2) {
                return _onChange.apply(this, arguments);
              }
              return onChange;
            }()
          };
        });
      }
    });
  }, [ADVANCED_FUNCTIONALITIES]);
  var handlePermissionsError = function handlePermissionsError() {
    setHasNotPermissions(false);
    onPermissionsError();
  };
  var ViewImagesRender = /*#__PURE__*/_react["default"].createElement("div", {
    className: "view-image"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "view-image__container"
  }, getValidRenderImage() ? /*#__PURE__*/_react["default"].createElement("img", {
    src: imageSrc,
    className: "view-image__image",
    alt: ""
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "view-image__".concat(children ? 'image' : 'not-image')
  }, children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "view-image__functions-container"
  }, showCameraButton && /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn m-0 p-0 view-image__functions-container--camera-button",
    onClick: onChangeShowSelected
  }, /*#__PURE__*/_react["default"].createElement(Icons.Camera, {
    width: _config.ICON_WIDTH
  })))), listOfSelectedImages.length > 0 && swiper && /*#__PURE__*/_react["default"].createElement(_.PageNavigator, {
    containerClassName: "view-image__paginator-container mt-2",
    elements: listOfSelectedImages,
    onChangeCurrentPage: handleChangeCurrentPage
  }));
  var webcamRender = /*#__PURE__*/_react["default"].createElement(_reactWebcam["default"], _extends({
    ref: webcamRef,
    videoConstraints: videoConstraints,
    audio: audio,
    screenshotFormat: screenshotFormat,
    onUserMediaError: handleError,
    onUserMedia: handleUserMedia,
    onDoubleClick: handleDoubleClick
  }, nativeOptions));
  var CameraRender = /*#__PURE__*/_react["default"].createElement("div", {
    className: "all-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "camera"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "camera__webcam"
  }, cameraWithZoom ? /*#__PURE__*/_react["default"].createElement(_.Slider, _extends({
    vertical: true,
    allScreen: true
  }, zoomConfig), webcamRender) : webcamRender), /*#__PURE__*/_react["default"].createElement("div", {
    className: "camera__functions__container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row d-flex justify-content-center"
  }, (listOfImages.length > 0 || actualImage) && /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-4 d-flex justify-content-center align-items-center"
  }, showListOfImages ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "camera__list-of-images"
  }, listOfImages.map(function (image, i) {
    return /*#__PURE__*/_react["default"].createElement(_.SmallImage, {
      key: image,
      image: image,
      alt: "vehicle ".concat(i + 1),
      onClick: handleClickImage,
      active: listOfSelectedImages.find(function (selectedImage) {
        return selectedImage === image;
      })
    });
  })) : /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn camera__functions__item",
    onClick: handleClickMoreImages,
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(Icons.MoreImages, {
    width: _config.ICON_WIDTH
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-4 d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn camera__functions__item",
    onClick: handleClickCapture,
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(Icons.Camera, {
    width: _config.ICON_WIDTH
  }))), (listOfImages.length > 0 || actualImage) && /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-4 d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn camera__functions__item",
    onClick: handleClickSend,
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(Icons.Send, {
    width: _config.ICON_WIDTH
  }))))))));
  var AllRender = showSelectedImage ? ViewImagesRender : CameraRender;
  return /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
      show: true
    })
  }, hasNotPermissions && /*#__PURE__*/_react["default"].createElement(ActionModal, {
    icon: /*#__PURE__*/_react["default"].createElement(Icons.IcoCarError, null),
    open: hasNotPermissions,
    success: false,
    title: (0, _i18n["default"])('CAMERA__PERMISSIONS_ERROR__TITLE'),
    actionLabel: (0, _i18n["default"])('COMMONS__CLOSE__TEXT'),
    message: (0, _i18n["default"])('CAMERA__PERMISSIONS_ERROR__MESSAGE'),
    closeButton: false,
    onAction: handlePermissionsError,
    modalType: "confirmation"
  }), allScreen ? /*#__PURE__*/_react["default"].createElement(_.Portal, null, AllRender) : AllRender);
}
Camera.propTypes = {
  allScreen: _propTypes["default"].bool,
  // eslint-disable-next-line react/forbid-prop-types
  nativeOptions: _propTypes["default"].object,
  audio: _propTypes["default"].bool,
  videoConstraints: _propTypes["default"].shape({
    width: _propTypes["default"].number,
    height: _propTypes["default"].number,
    facingMode: _propTypes["default"].string,
    zoom: _propTypes["default"].bool
  }),
  screenshotFormat: _propTypes["default"].string,
  showSelectedImage: _propTypes["default"].bool,
  getImage: _propTypes["default"].func,
  onSend: _propTypes["default"].func,
  onMoreImages: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  onChangeShowSelected: _propTypes["default"].func,
  onPermissionsError: _propTypes["default"].func,
  customImage: _propTypes["default"].string,
  swiper: _propTypes["default"].bool,
  customListOfImages: _propTypes["default"].arrayOf(_propTypes["default"].string),
  customListOfSelectedImages: _propTypes["default"].arrayOf(_propTypes["default"].string),
  onlyCustomImage: _propTypes["default"].bool,
  showCameraButton: _propTypes["default"].bool,
  children: _propTypes["default"].node
};

// eslint-disable-next-line react/destructuring-assignment
var _default = function _default(props) {
  return props.show ? /*#__PURE__*/_react["default"].createElement(Camera, props) : null;
};
exports["default"] = _default;