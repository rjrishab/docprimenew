(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/jsonp/index.js":
/*!*************************************!*\
  !*** ./node_modules/jsonp/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/jsonp/node_modules/debug/src/browser.js")('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    debug('jsonp got', data);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}


/***/ }),

/***/ "./node_modules/jsonp/node_modules/debug/src/browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsonp/node_modules/debug/src/browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/jsonp/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/jsonp/node_modules/debug/src/debug.js":
/*!************************************************************!*\
  !*** ./node_modules/jsonp/node_modules/debug/src/debug.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/jsonp/node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/jsonp/node_modules/ms/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/jsonp/node_modules/ms/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/react-share/es/EmailIcon.js":
/*!**************************************************!*\
  !*** ./node_modules/react-share/es/EmailIcon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var EmailIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('email', {
  icon: 'M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z',
  mask: 'M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z',
  color: '#7f7f7f'
});

/* harmony default export */ __webpack_exports__["default"] = (EmailIcon);

/***/ }),

/***/ "./node_modules/react-share/es/EmailShareButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/EmailShareButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");





function emailLink(url, _ref) {
  var subject = _ref.subject,
      body = _ref.body;

  return 'mailto:' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({ subject: subject, body: body || url });
}

var EmailShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('email', emailLink, function (props) {
  return {
    subject: props.subject,
    body: props.body
  };
}, {
  subject: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  body: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  openWindow: false,
  onClick: function onClick(link) {
    window.location.href = link;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (EmailShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/FacebookIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/FacebookIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var FacebookIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('facebook', {
  icon: 'M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z',
  mask: 'M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z',
  color: '#3b5998'
});

/* harmony default export */ __webpack_exports__["default"] = (FacebookIcon);

/***/ }),

/***/ "./node_modules/react-share/es/FacebookShareButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/FacebookShareButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function facebookLink(url, _ref) {
  var quote = _ref.quote,
      hashtag = _ref.hashtag;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'facebook.url');

  return 'https://www.facebook.com/sharer/sharer.php' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    u: url,
    quote: quote,
    hashtag: hashtag
  });
}

var FacebookShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('facebook', facebookLink, function (props) {
  /* eslint-disable no-console */
  if (props.picture) {
    console.warn('FacebookShareButton warning: picture is a deprecated prop.');
  }

  if (props.title) {
    console.warn('FacebookShareButton warning: title is a deprecated prop. Use "quote" instead.');
  }

  if (props.description) {
    console.warn('FacebookShareButton warning: description is a deprecated prop.\n      Use "quote" instead.');
  }
  /* eslint-enable no-console */

  return {
    quote: props.quote,
    hashtag: props.hashtag
  };
}, {
  quote: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  hashtag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (FacebookShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/FacebookShareCount.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-share/es/FacebookShareCount.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");




function getFacebookShareCount(shareUrl, callback) {
  var endpoint = 'https://graph.facebook.com/?id=' + shareUrl;

  jsonp__WEBPACK_IMPORTED_MODULE_0___default()(endpoint, function (err, data) {
    callback(!err && data && data.share && data.share.share_count ? data.share.share_count : undefined);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(getFacebookShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/GooglePlusIcon.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-share/es/GooglePlusIcon.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var GooglePlusIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('google', {
  icon: 'M25.3,30.1v3.8h6.3c-0.3,1.6-1.9,4.8-6.3,4.8c-3.8,0-6.9-3.1-6.9-7s3.1-7,6.9-7c2.2,0,3.6,0.9,4.4,1.7l3-2.9c-1.9-1.8-4.4-2.9-7.4-2.9c-6.1,0-11.1,5-11.1,11.1s5,11.1,11.1,11.1c6.4,0,10.7-4.5,10.7-10.9c0-0.7-0.1-1.3-0.2-1.8H25.3L25.3,30.1z M49.8,28.9h-3.2v-3.2h-3.2v3.2h-3.2v3.2h3.2v3.2h3.2v-3.2h3.2',
  mask: 'M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z',
  color: '#dd4b39'
});

/* harmony default export */ __webpack_exports__["default"] = (GooglePlusIcon);

/***/ }),

/***/ "./node_modules/react-share/es/GooglePlusShareButton.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-share/es/GooglePlusShareButton.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");





function googlePlusLink(url) {
  assert__WEBPACK_IMPORTED_MODULE_0___default()(url, 'googlePlus.url');

  return 'https://plus.google.com/share' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({ url: url });
}

var GooglePlusShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('googlePlus', googlePlusLink, undefined, undefined, {
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (GooglePlusShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/GooglePlusShareCount.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-share/es/GooglePlusShareCount.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ieDetection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ieDetection */ "./node_modules/react-share/es/utils/ieDetection.js");
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");




function getGooglePlusShareCount(shareUrl, callback) {
  if (Object(_utils_ieDetection__WEBPACK_IMPORTED_MODULE_1__["default"])(11)) {
    /* eslint-disable no-console */
    console.error('Google plus share count is not supported in <=IE10!');
    /* eslint-enable no-console */
    return;
  }

  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://clients6.google.com/rpc');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

  xhr.send(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'pos.plusones.get',
    id: 'p',
    params: {
      nolog: true,
      id: shareUrl,
      source: 'widget',
      userId: '@viewer',
      groupId: '@self'
    },
    jsonrpc: '2.0',
    key: 'p',
    apiVersion: 'v1'
  }));

  xhr.onload = function onSuccessdata() {
    var data = JSON.parse(this.responseText);
    callback(data ? data.result.metadata.globalCounts.count : undefined);
  };

  xhr.onerror = function onErrordata() {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(getGooglePlusShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/LineIcon.js":
/*!*************************************************!*\
  !*** ./node_modules/react-share/es/LineIcon.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var LineIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('line', {
  icon: 'M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z',
  mask: '',
  color: '#00b800'
});

/* harmony default export */ __webpack_exports__["default"] = (LineIcon);

/***/ }),

/***/ "./node_modules/react-share/es/LineShareButton.js":
/*!********************************************************!*\
  !*** ./node_modules/react-share/es/LineShareButton.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");







function lineLink(url, _ref) {
  var title = _ref.title;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'line.url');

  return 'https://social-plugins.line.me/lineit/share' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_3__["default"])({
    url: url,
    text: title
  });
}

var LineShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_2__["default"])('line', lineLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 500,
  windowHeight: 500
});

/* harmony default export */ __webpack_exports__["default"] = (LineShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/LinkedinIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/LinkedinIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var LinkedinIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('linkedin', {
  icon: 'M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z',
  mask: 'M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z',
  color: '#007fb1'
});

/* harmony default export */ __webpack_exports__["default"] = (LinkedinIcon);

/***/ }),

/***/ "./node_modules/react-share/es/LinkedinShareButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/LinkedinShareButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function linkedinLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'linkedin.url');

  return 'https://linkedin.com/shareArticle' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    title: title,
    summary: description
  });
}

var LinkedinShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('linkedin', linkedinLink, function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 750,
  windowHeight: 600
});

/* harmony default export */ __webpack_exports__["default"] = (LinkedinShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/LinkedinShareCount.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-share/es/LinkedinShareCount.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");





function getLinkedinShareCount(shareUrl, callback) {
  var url = 'https://www.linkedin.com/countserv/count/share';

  return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(url + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: shareUrl,
    format: 'jsonp'
  }), function (err, data) {
    callback(data ? data.count : undefined);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(getLinkedinShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/LivejournalIcon.js":
/*!********************************************************!*\
  !*** ./node_modules/react-share/es/LivejournalIcon.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var LivejournalIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('livejournal', {
  icon: 'M18.3407821,28.1764706 L21.9441341,31.789916 L33.0055865,42.882353 C33.0055865,42.882353 33.0893855,42.9663866 33.0893855,42.9663866 L46.6648046,47 C46.6648046,47 46.6648046,47 46.7486034,47 C46.8324022,47 46.8324022,47 46.9162012,46.9159664 C47,46.8319327 47,46.8319327 47,46.7478991 L42.9776536,33.1344537 C42.9776536,33.1344537 42.9776536,33.1344537 42.8938548,33.0504202 L31.1620111,21.3697479 L31.1620111,21.3697479 L28.1452514,18.2605042 C27.3072626,17.4201681 26.5530726,17 25.7150838,17 C24.2905028,17 23.0335195,18.3445378 21.5251397,19.8571429 C21.273743,20.1092437 20.9385475,20.4453781 20.6871508,20.697479 C20.3519553,21.0336134 20.1005586,21.2857143 19.849162,21.5378151 C18.3407821,22.9663866 17.0837989,24.2268908 17,25.7394958 C17.0837989,26.4957983 17.5027933,27.3361345 18.3407821,28.1764706 Z M39.9012319,39.6134454 C39.7336341,39.4453781 39.4822374,37.6806724 40.2364275,36.8403362 C40.9906174,36.0840337 41.6610084,36 42.1638017,36 C42.3313995,36 42.4989973,36 42.5827961,36 L44.8453659,43.5630253 L43.5883828,44.8235295 L36.0464833,42.5546218 C35.9626843,42.2184874 35.8788855,41.2100841 36.8844722,40.2016807 C37.2196676,39.8655463 37.8900587,39.6134454 38.5604498,39.6134454 C39.147042,39.6134454 39.5660364,39.7815126 39.5660364,39.7815126 C39.6498353,39.8655463 39.8174331,39.8655463 39.8174331,39.7815126 C39.9850307,39.7815126 39.9850307,39.697479 39.9012319,39.6134454 Z',
  mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
  color: '#21A5D8'
});

/* harmony default export */ __webpack_exports__["default"] = (LivejournalIcon);

/***/ }),

/***/ "./node_modules/react-share/es/LivejournalShareButton.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-share/es/LivejournalShareButton.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function livejournalLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'livejournal.url');

  return 'https://www.livejournal.com/update.bml' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    subject: title,
    event: description
  });
}

var LivejournalShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('livejournal', livejournalLink, function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (LivejournalShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/MailruIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/react-share/es/MailruIcon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var MailruIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('mailru', {
  icon: 'M39.7107745,17 C41.6619755,17 43.3204965,18.732852 43.3204965,21.0072202 C43.3204965,23.2815885 41.7595357,25.0144404 39.7107745,25.0144404 C37.7595732,25.0144404 36.1010522,23.2815885 36.1010522,21.0072202 C36.1010522,18.732852 37.7595732,17 39.7107745,17 Z M24.3938451,17 C26.3450463,17 28.0035672,18.732852 28.0035672,21.0072202 C28.0035672,23.2815885 26.4426063,25.0144404 24.3938451,25.0144404 C22.4426439,25.0144404 20.7841229,23.2815885 20.7841229,21.0072202 C20.7841229,18.732852 22.4426439,17 24.3938451,17 Z M51.9057817,43.4259928 C51.7106617,44.0758123 51.4179815,44.6173285 50.9301812,44.9422383 C50.637501,45.1588448 50.2472607,45.267148 49.8570205,45.267148 C49.07654,45.267148 48.3936197,44.833935 48.0033795,44.0758123 L46.2472985,40.7184115 L45.759498,41.2599278 C42.5400162,44.9422383 37.466893,47 32.0035297,47 C26.5401664,47 21.5646034,44.9422383 18.2475614,41.2599278 L17.7597611,40.7184115 L16.00368,44.0758123 C15.6134398,44.833935 14.9305194,45.267148 14.1500389,45.267148 C13.7597986,45.267148 13.3695584,45.1588448 13.0768782,44.9422383 C12.0037176,44.2924187 11.7110374,42.7761733 12.2963978,41.5848375 L16.7841605,33.0288807 C17.1744007,32.270758 17.8573211,31.8375453 18.6378016,31.8375453 C19.0280418,31.8375453 19.4182821,31.9458485 19.7109623,32.1624548 C20.7841229,32.8122743 21.0768031,34.3285197 20.4914427,35.5198555 L20.1012025,36.2779783 L20.2963226,36.602888 C22.4426439,39.9602888 27.0279667,42.234657 31.9059697,42.234657 C36.7839727,42.234657 41.3692955,40.068592 43.5156167,36.602888 L43.7107367,36.2779783 L43.3204965,35.6281587 C43.0278165,35.0866425 42.9302562,34.436823 43.1253765,33.7870035 C43.3204965,33.137184 43.6131767,32.5956678 44.100977,32.270758 C44.3936572,32.0541515 44.7838975,31.9458485 45.1741377,31.9458485 C45.9546182,31.9458485 46.6375385,32.3790613 47.0277787,33.137184 L51.5155415,41.6931408 C52.003342,42.234657 52.100902,42.8844765 51.9057817,43.4259928 Z',
  mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
  color: '#168DE2'
});

/* harmony default export */ __webpack_exports__["default"] = (MailruIcon);

/***/ }),

/***/ "./node_modules/react-share/es/MailruShareButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/MailruShareButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function mailruLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'mailru.url');

  return 'https://connect.mail.ru/share' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    title: title,
    description: description,
    imageurl: image
  });
}

var MailruShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('mailru', mailruLink, function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (MailruShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/OKIcon.js":
/*!***********************************************!*\
  !*** ./node_modules/react-share/es/OKIcon.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var OKIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('ok', {
  icon: 'M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z ',
  mask: 'M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z',
  color: '#f2720c'
});

/* harmony default export */ __webpack_exports__["default"] = (OKIcon);

/***/ }),

/***/ "./node_modules/react-share/es/OKShareButton.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/es/OKShareButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function okLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'ok.url');

  return 'https://connect.ok.ru/offer' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    title: title,
    description: description,
    imageUrl: image
  });
}

var OKShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('ok', okLink, function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (OKShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/OKShareCount.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/OKShareCount.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");





function getOKShareCount(shareUrl, callback) {
  if (!window.OK) {
    window.OK = {
      Share: {
        count: function count(index, _count) {
          return window.OK.callbacks[index](_count);
        }
      },
      callbacks: []
    };
  }

  var url = 'https://connect.ok.ru/dk';
  var index = window.OK.callbacks.length;

  window.ODKL = {
    updateCount: function updateCount(a, b) {
      window.OK.callbacks[index](b);
    }
  };
  window.OK.callbacks.push(callback);

  return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(url + (0, _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'st.cmd': 'extLike',
    uid: 'odklcnt0',
    ref: shareUrl
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(getOKShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/PinterestIcon.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/es/PinterestIcon.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var PinterestIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('pinterest', {
  icon: 'M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z',
  mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
  color: '#cb2128'
});

/* harmony default export */ __webpack_exports__["default"] = (PinterestIcon);

/***/ }),

/***/ "./node_modules/react-share/es/PinterestShareButton.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-share/es/PinterestShareButton.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function pinterestLink(url, _ref) {
  var media = _ref.media,
      description = _ref.description;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'pinterest.url');
  assert__WEBPACK_IMPORTED_MODULE_1___default()(media, 'pinterest.media');

  return 'https://pinterest.com/pin/create/button/' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    media: media,
    description: description
  });
}

var PinterestShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('pinterest', pinterestLink, function (props) {
  return {
    media: props.media,
    description: props.description
  };
}, {
  media: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 1000,
  windowHeight: 730
});

/* harmony default export */ __webpack_exports__["default"] = (PinterestShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/PinterestShareCount.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/PinterestShareCount.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");





function getPinterestShareCount(shareUrl, callback) {
  var url = 'https://api.pinterest.com/v1/urls/count.json';

  return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(url + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: shareUrl
  }), function (err, data) {
    callback(data ? data.count : undefined);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(getPinterestShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/RedditIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/react-share/es/RedditIcon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var RedditIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('reddit', {
  icon: 'm 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z',
  color: '#5f99cf'
});

/* harmony default export */ __webpack_exports__["default"] = (RedditIcon);

/***/ }),

/***/ "./node_modules/react-share/es/RedditShareButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/RedditShareButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function redditLink(url, _ref) {
  var title = _ref.title;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'reddit.url');

  return 'https://www.reddit.com/submit' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    title: title
  });
}

var RedditShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('reddit', redditLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (RedditShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/RedditShareCount.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/RedditShareCount.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");




function getRedditShareCount(shareUrl, callback) {
  var endpoint = 'https://www.reddit.com/api/info.json?limit=1&url=' + shareUrl;

  jsonp__WEBPACK_IMPORTED_MODULE_0___default()(endpoint, { param: 'jsonp' }, function (err, response) {
    callback(!err && response && response.data && response.data.children.length > 0 && response.data.children[0].data.score ? response.data.children[0].data.score : undefined);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(getRedditShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/TelegramIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/TelegramIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var TelegramIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('telegram', {
  icon: 'm45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957',
  mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
  color: '#37aee2'
});

/* harmony default export */ __webpack_exports__["default"] = (TelegramIcon);

/***/ }),

/***/ "./node_modules/react-share/es/TelegramShareButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/TelegramShareButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function telegramLink(url, _ref) {
  var title = _ref.title;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'telegram.url');

  return 'https://telegram.me/share/' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    text: title
  });
}

var TelegramShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('telegram', telegramLink, function (props) {
  return {
    title: props.title,
    via: props.via
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  via: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (TelegramShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/TumblrIcon.js":
/*!***************************************************!*\
  !*** ./node_modules/react-share/es/TumblrIcon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var TumblrIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('tumblr', {
  icon: 'M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z',
  mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
  color: '#2c4762'
});

/* harmony default export */ __webpack_exports__["default"] = (TumblrIcon);

/***/ }),

/***/ "./node_modules/react-share/es/TumblrShareButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/TumblrShareButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function tumblrLink(url, _ref) {
  var title = _ref.title,
      caption = _ref.caption,
      tags = _ref.tags,
      posttype = _ref.posttype;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'tumblr.url');

  return 'https://www.tumblr.com/widgets/share/tool' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    canonicalUrl: url,
    title: title,
    caption: caption,
    tags: tags,
    posttype: posttype
  });
}

var TumblrShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('tumblr', tumblrLink, function (props) {
  return {
    title: props.title,
    tags: props.tags.join(','),
    caption: props.caption,
    posttype: props.posttype
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  caption: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  posttype: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  tags: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
}, {
  tags: [],
  posttype: 'link',
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (TumblrShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/TumblrShareCount.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/TumblrShareCount.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");





function getTumblrShareCount(shareUrl, callback) {
  var endpoint = 'https://api.tumblr.com/v2/share/stats';

  return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(endpoint + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: shareUrl
  }), function (err, data) {
    callback(data ? data.note_count : undefined);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(getTumblrShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/TwitterIcon.js":
/*!****************************************************!*\
  !*** ./node_modules/react-share/es/TwitterIcon.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var TwitterIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('twitter', {
  icon: 'M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z',
  mask: 'M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z',
  color: '#00aced'
});

/* harmony default export */ __webpack_exports__["default"] = (TwitterIcon);

/***/ }),

/***/ "./node_modules/react-share/es/TwitterShareButton.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-share/es/TwitterShareButton.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function twitterLink(url, _ref) {
  var title = _ref.title,
      via = _ref.via,
      _ref$hashtags = _ref.hashtags,
      hashtags = _ref$hashtags === undefined ? [] : _ref$hashtags;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'twitter.url');
  assert__WEBPACK_IMPORTED_MODULE_1___default()(Array.isArray(hashtags), 'twitter.hashtags is not an array');

  return 'https://twitter.com/share' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    text: title,
    via: via,
    hashtags: hashtags.join(',')
  });
}

var TwitterShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('twitter', twitterLink, function (props) {
  return {
    hashtags: props.hashtags,
    title: props.title,
    via: props.via
  };
}, {
  hashtags: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  via: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (TwitterShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/VKIcon.js":
/*!***********************************************!*\
  !*** ./node_modules/react-share/es/VKIcon.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var VKIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('vk', {
  icon: 'M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
  mask: 'M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
  color: '#45668e'
});

/* harmony default export */ __webpack_exports__["default"] = (VKIcon);

/***/ }),

/***/ "./node_modules/react-share/es/VKShareButton.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/es/VKShareButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function vkLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'vk.url');

  return 'https://vk.com/share.php' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    title: title,
    description: description,
    image: image
  });
}

var VKShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('vk', vkLink, function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (VKShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/VKShareCount.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/VKShareCount.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/shareCountFactory */ "./node_modules/react-share/es/utils/shareCountFactory.js");





function getVKShareCount(shareUrl, callback) {
  if (!window.VK) {
    window.VK = {
      Share: {
        count: function count(index, _count) {
          return window.VK.callbacks[index](_count);
        }
      },
      callbacks: []
    };
  }

  var url = 'https://vk.com/share.php';
  var index = window.VK.callbacks.length;

  window.VK.callbacks.push(callback);

  return jsonp__WEBPACK_IMPORTED_MODULE_0___default()(url + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_1__["default"])({
    act: 'count',
    index: index,
    url: shareUrl
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_shareCountFactory__WEBPACK_IMPORTED_MODULE_2__["default"])(getVKShareCount));

/***/ }),

/***/ "./node_modules/react-share/es/ViberIcon.js":
/*!**************************************************!*\
  !*** ./node_modules/react-share/es/ViberIcon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var ViberIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('viber', {
  icon: 'm31.0,12.3c9.0,0.2 16.4,6.2 18.0,15.2c0.2,1.5 0.3,3.0 0.4,4.6a1.0,1.0 0 0 1 -0.8,1.2l-0.1,0a1.1,1.1 0 0 1 -1.0,-1.2l0,0c-0.0,-1.2 -0.1,-2.5 -0.3,-3.8a16.1,16.1 0 0 0 -13.0,-13.5c-1.0,-0.1 -2.0,-0.2 -3.0,-0.3c-0.6,-0.0 -1.4,-0.1 -1.6,-0.8a1.1,1.1 0 0 1 0.9,-1.2l0.6,0l0.0,-0.0zm10.6,39.2a19.9,19.9 0 0 1 -2.1,-0.6c-6.9,-2.9 -13.2,-6.6 -18.3,-12.2a47.5,47.5 0 0 1 -7.0,-10.7c-0.8,-1.8 -1.6,-3.7 -2.4,-5.6c-0.6,-1.7 0.3,-3.4 1.4,-4.7a11.3,11.3 0 0 1 3.7,-2.8a2.4,2.4 0 0 1 3.0,0.7a39.0,39.0 0 0 1 4.7,6.5a3.1,3.1 0 0 1 -0.8,4.2c-0.3,0.2 -0.6,0.5 -1.0,0.8a3.3,3.3 0 0 0 -0.7,0.7a2.1,2.1 0 0 0 -0.1,1.9c1.7,4.9 4.7,8.7 9.7,10.8a5.0,5.0 0 0 0 2.5,0.6c1.5,-0.1 2.0,-1.8 3.1,-2.7a2.9,2.9 0 0 1 3.5,-0.1c1.1,0.7 2.2,1.4 3.3,2.2a37.8,37.8 0 0 1 3.1,2.4a2.4,2.4 0 0 1 0.7,3.0a10.4,10.4 0 0 1 -4.4,4.8a10.8,10.8 0 0 1 -1.9,0.6c-0.7,-0.2 0.6,-0.2 0,0l0.0,0l0,-0.0zm3.1,-21.4a4.2,4.2 0 0 1 -0.0,0.6a1.0,1.0 0 0 1 -1.9,0.1a2.7,2.7 0 0 1 -0.1,-0.8a10.9,10.9 0 0 0 -1.4,-5.5a10.2,10.2 0 0 0 -4.2,-4.0a12.3,12.3 0 0 0 -3.4,-1.0c-0.5,-0.0 -1.0,-0.1 -1.5,-0.2a0.9,0.9 0 0 1 -0.9,-1.0l0,-0.1a0.9,0.9 0 0 1 0.9,-0.9l0.1,0a14.1,14.1 0 0 1 5.9,1.5a11.9,11.9 0 0 1 6.5,9.3c0,0.1 0.0,0.3 0.0,0.5c0,0.4 0.0,0.9 0.0,1.5l0,0l0.0,0.0zm-5.6,-0.2a1.1,1.1 0 0 1 -1.2,-0.9l0,-0.1a11.3,11.3 0 0 0 -0.2,-1.4a4.0,4.0 0 0 0 -1.5,-2.3a3.9,3.9 0 0 0 -1.2,-0.5c-0.5,-0.1 -1.1,-0.1 -1.6,-0.2a1.0,1.0 0 0 1 -0.8,-1.1l0,0l0,0a1.0,1.0 0 0 1 1.1,-0.8c3.4,0.2 6.0,2.0 6.3,6.2a2.8,2.8 0 0 1 0,0.8a0.8,0.8 0 0 1 -0.8,0.7l0,0l0.0,-0.0z',
  mask: '',
  color: '#7C529E'
});

/* harmony default export */ __webpack_exports__["default"] = (ViberIcon);

/***/ }),

/***/ "./node_modules/react-share/es/ViberShareButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/ViberShareButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function viberLink(url, _ref) {
  var title = _ref.title;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'viber.url');
  return 'viber://forward' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    text: (title || '') + ' ' + url
  });
}

var ViberShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('viber', viberLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/* harmony default export */ __webpack_exports__["default"] = (ViberShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/WeiboShareButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-share/es/WeiboShareButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function weiboLink(url, _ref) {
  var title = _ref.title,
      image = _ref.image;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'weibo.url');
  assert__WEBPACK_IMPORTED_MODULE_1___default()(image, 'weibo.image');

  return 'http://service.weibo.com/share/share.php?' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: url,
    title: title,
    pic: image
  });
}

var WeiboShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('weibo', weiboLink, function (props) {
  return {
    title: props.title,
    image: props.image
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (WeiboShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/WhatsappIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/es/WhatsappIcon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var WhatsappIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('whatsapp', {
  icon: 'm42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915',
  mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
  color: '#2cb742'
});

/* harmony default export */ __webpack_exports__["default"] = (WhatsappIcon);

/***/ }),

/***/ "./node_modules/react-share/es/WhatsappShareButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-share/es/WhatsappShareButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function whatsappLink(url, _ref) {
  var title = _ref.title,
      separator = _ref.separator;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'whatsapp.url');
  return 'https://api.whatsapp.com/send' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    text: title ? title + separator + url : url
  });
}

var WhatsappShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('whatsapp', whatsappLink, function (props) {
  return {
    title: props.title,
    separator: props.separator
  };
}, {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  separator: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  separator: ' ',
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (WhatsappShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/WorkplaceIcon.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/es/WorkplaceIcon.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/iconFactory */ "./node_modules/react-share/es/utils/iconFactory.js");


var WorkplaceIcon = Object(_utils_iconFactory__WEBPACK_IMPORTED_MODULE_0__["default"])('workplace', {
  icon: 'M34.019,10.292c0.21,0.017,0.423,0.034,0.636,0.049 c3.657,0.262,6.976,1.464,9.929,3.635c3.331,2.448,5.635,5.65,6.914,9.584c0.699,2.152,0.983,4.365,0.885,6.623 c-0.136,3.171-1.008,6.13-2.619,8.867c-0.442,0.75-0.908,1.492-1.495,2.141c-0.588,0.651-1.29,1.141-2.146,1.383 c-1.496,0.426-3.247-0.283-3.961-1.642c-0.26-0.494-0.442-1.028-0.654-1.548c-1.156-2.838-2.311-5.679-3.465-8.519 c-0.017-0.042-0.037-0.082-0.065-0.145c-0.101,0.245-0.192,0.472-0.284,0.698c-1.237,3.051-2.475,6.103-3.711,9.155 c-0.466,1.153-1.351,1.815-2.538,2.045c-1.391,0.267-2.577-0.154-3.496-1.247c-0.174-0.209-0.31-0.464-0.415-0.717 c-2.128-5.22-4.248-10.442-6.37-15.665c-0.012-0.029-0.021-0.059-0.036-0.104c0.054-0.003,0.103-0.006,0.15-0.006 c1.498-0.001,2.997,0,4.495-0.004c0.12-0.001,0.176,0.03,0.222,0.146c1.557,3.846,3.117,7.691,4.679,11.536 c0.018,0.046,0.039,0.091,0.067,0.159c0.273-0.673,0.536-1.32,0.797-1.968c1.064-2.627,2.137-5.25,3.19-7.883 c0.482-1.208,1.376-1.917,2.621-2.135c1.454-0.255,2.644,0.257,3.522,1.449c0.133,0.18,0.229,0.393,0.313,0.603 c1.425,3.495,2.848,6.991,4.269,10.488c0.02,0.047,0.04,0.093,0.073,0.172c0.196-0.327,0.385-0.625,0.559-0.935 c0.783-1.397,1.323-2.886,1.614-4.461c0.242-1.312,0.304-2.634,0.187-3.962c-0.242-2.721-1.16-5.192-2.792-7.38 c-2.193-2.939-5.086-4.824-8.673-5.625c-1.553-0.346-3.124-0.405-4.705-0.257c-3.162,0.298-6.036,1.366-8.585,3.258 c-3.414,2.534-5.638,5.871-6.623,10.016c-0.417,1.76-0.546,3.547-0.384,5.348c0.417,4.601,2.359,8.444,5.804,11.517 c2.325,2.073,5.037,3.393,8.094,3.989c1.617,0.317,3.247,0.395,4.889,0.242c1-0.094,1.982-0.268,2.952-0.529 c0.04-0.01,0.081-0.018,0.128-0.028c0,1.526,0,3.047,0,4.586c-0.402,0.074-0.805,0.154-1.21,0.221 c-0.861,0.14-1.728,0.231-2.601,0.258c-0.035,0.002-0.071,0.013-0.108,0.021c-0.493,0-0.983,0-1.476,0 c-0.049-0.007-0.1-0.018-0.149-0.022c-0.315-0.019-0.629-0.033-0.945-0.058c-1.362-0.105-2.702-0.346-4.017-0.716 c-3.254-0.914-6.145-2.495-8.66-4.752c-2.195-1.971-3.926-4.29-5.176-6.963c-1.152-2.466-1.822-5.057-1.993-7.774 c-0.014-0.226-0.033-0.451-0.05-0.676c0-0.502,0-1.003,0-1.504c0.008-0.049,0.02-0.099,0.022-0.148 c0.036-1.025,0.152-2.043,0.338-3.052c0.481-2.616,1.409-5.066,2.8-7.331c2.226-3.625,5.25-6.386,9.074-8.254 c2.536-1.24,5.217-1.947,8.037-2.126c0.23-0.015,0.461-0.034,0.691-0.051C33.052,10.292,33.535,10.292,34.019,10.292z',
  color: '#3b3d4a'
});

/* harmony default export */ __webpack_exports__["default"] = (WorkplaceIcon);

/***/ }),

/***/ "./node_modules/react-share/es/WorkplaceShareButton.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-share/es/WorkplaceShareButton.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/objectToGetParams */ "./node_modules/react-share/es/utils/objectToGetParams.js");
/* harmony import */ var _utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createShareButton */ "./node_modules/react-share/es/utils/createShareButton.js");







function workplaceLink(url, _ref) {
  var quote = _ref.quote,
      hashtag = _ref.hashtag;

  assert__WEBPACK_IMPORTED_MODULE_1___default()(url, 'workplace.url');

  return 'https://work.facebook.com/sharer.php' + Object(_utils_objectToGetParams__WEBPACK_IMPORTED_MODULE_2__["default"])({
    u: url,
    quote: quote,
    hashtag: hashtag
  });
}

var WorkplaceShareButton = Object(_utils_createShareButton__WEBPACK_IMPORTED_MODULE_3__["default"])('workplace', workplaceLink, function (props) {
  return {
    quote: props.quote,
    hashtag: props.hashtag
  };
}, {
  quote: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  hashtag: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

/* harmony default export */ __webpack_exports__["default"] = (WorkplaceShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-share/es/index.js ***!
  \**********************************************/
/*! exports provided: FacebookShareCount, GooglePlusShareCount, LinkedinShareCount, PinterestShareCount, VKShareCount, OKShareCount, RedditShareCount, TumblrShareCount, FacebookShareButton, GooglePlusShareButton, LinkedinShareButton, TwitterShareButton, PinterestShareButton, VKShareButton, OKShareButton, TelegramShareButton, WhatsappShareButton, RedditShareButton, EmailShareButton, TumblrShareButton, LivejournalShareButton, MailruShareButton, ViberShareButton, WorkplaceShareButton, LineShareButton, WeiboShareButton, FacebookIcon, TwitterIcon, GooglePlusIcon, LinkedinIcon, PinterestIcon, VKIcon, OKIcon, TelegramIcon, WhatsappIcon, RedditIcon, TumblrIcon, MailruIcon, EmailIcon, LivejournalIcon, ViberIcon, WorkplaceIcon, LineIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FacebookShareCount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FacebookShareCount */ "./node_modules/react-share/es/FacebookShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookShareCount", function() { return _FacebookShareCount__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _GooglePlusShareCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GooglePlusShareCount */ "./node_modules/react-share/es/GooglePlusShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GooglePlusShareCount", function() { return _GooglePlusShareCount__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _LinkedinShareCount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkedinShareCount */ "./node_modules/react-share/es/LinkedinShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedinShareCount", function() { return _LinkedinShareCount__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _PinterestShareCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PinterestShareCount */ "./node_modules/react-share/es/PinterestShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinterestShareCount", function() { return _PinterestShareCount__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _VKShareCount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VKShareCount */ "./node_modules/react-share/es/VKShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VKShareCount", function() { return _VKShareCount__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _OKShareCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OKShareCount */ "./node_modules/react-share/es/OKShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OKShareCount", function() { return _OKShareCount__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _RedditShareCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RedditShareCount */ "./node_modules/react-share/es/RedditShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedditShareCount", function() { return _RedditShareCount__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _TumblrShareCount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TumblrShareCount */ "./node_modules/react-share/es/TumblrShareCount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TumblrShareCount", function() { return _TumblrShareCount__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _FacebookShareButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FacebookShareButton */ "./node_modules/react-share/es/FacebookShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookShareButton", function() { return _FacebookShareButton__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _GooglePlusShareButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GooglePlusShareButton */ "./node_modules/react-share/es/GooglePlusShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GooglePlusShareButton", function() { return _GooglePlusShareButton__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _LinkedinShareButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LinkedinShareButton */ "./node_modules/react-share/es/LinkedinShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedinShareButton", function() { return _LinkedinShareButton__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _TwitterShareButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TwitterShareButton */ "./node_modules/react-share/es/TwitterShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterShareButton", function() { return _TwitterShareButton__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _PinterestShareButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PinterestShareButton */ "./node_modules/react-share/es/PinterestShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinterestShareButton", function() { return _PinterestShareButton__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _VKShareButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./VKShareButton */ "./node_modules/react-share/es/VKShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VKShareButton", function() { return _VKShareButton__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _OKShareButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./OKShareButton */ "./node_modules/react-share/es/OKShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OKShareButton", function() { return _OKShareButton__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _TelegramShareButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TelegramShareButton */ "./node_modules/react-share/es/TelegramShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TelegramShareButton", function() { return _TelegramShareButton__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _WhatsappShareButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./WhatsappShareButton */ "./node_modules/react-share/es/WhatsappShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhatsappShareButton", function() { return _WhatsappShareButton__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _RedditShareButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RedditShareButton */ "./node_modules/react-share/es/RedditShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedditShareButton", function() { return _RedditShareButton__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _EmailShareButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EmailShareButton */ "./node_modules/react-share/es/EmailShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailShareButton", function() { return _EmailShareButton__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _TumblrShareButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TumblrShareButton */ "./node_modules/react-share/es/TumblrShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TumblrShareButton", function() { return _TumblrShareButton__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _LivejournalShareButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./LivejournalShareButton */ "./node_modules/react-share/es/LivejournalShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivejournalShareButton", function() { return _LivejournalShareButton__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _MailruShareButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./MailruShareButton */ "./node_modules/react-share/es/MailruShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailruShareButton", function() { return _MailruShareButton__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _ViberShareButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ViberShareButton */ "./node_modules/react-share/es/ViberShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViberShareButton", function() { return _ViberShareButton__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _WorkplaceShareButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./WorkplaceShareButton */ "./node_modules/react-share/es/WorkplaceShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkplaceShareButton", function() { return _WorkplaceShareButton__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _LineShareButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./LineShareButton */ "./node_modules/react-share/es/LineShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineShareButton", function() { return _LineShareButton__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _WeiboShareButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./WeiboShareButton */ "./node_modules/react-share/es/WeiboShareButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeiboShareButton", function() { return _WeiboShareButton__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _FacebookIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./FacebookIcon */ "./node_modules/react-share/es/FacebookIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookIcon", function() { return _FacebookIcon__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _TwitterIcon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./TwitterIcon */ "./node_modules/react-share/es/TwitterIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterIcon", function() { return _TwitterIcon__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _GooglePlusIcon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./GooglePlusIcon */ "./node_modules/react-share/es/GooglePlusIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GooglePlusIcon", function() { return _GooglePlusIcon__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _LinkedinIcon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./LinkedinIcon */ "./node_modules/react-share/es/LinkedinIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedinIcon", function() { return _LinkedinIcon__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _PinterestIcon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./PinterestIcon */ "./node_modules/react-share/es/PinterestIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinterestIcon", function() { return _PinterestIcon__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _VKIcon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./VKIcon */ "./node_modules/react-share/es/VKIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VKIcon", function() { return _VKIcon__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _OKIcon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./OKIcon */ "./node_modules/react-share/es/OKIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OKIcon", function() { return _OKIcon__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _TelegramIcon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./TelegramIcon */ "./node_modules/react-share/es/TelegramIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TelegramIcon", function() { return _TelegramIcon__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _WhatsappIcon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./WhatsappIcon */ "./node_modules/react-share/es/WhatsappIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhatsappIcon", function() { return _WhatsappIcon__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _RedditIcon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./RedditIcon */ "./node_modules/react-share/es/RedditIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RedditIcon", function() { return _RedditIcon__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _TumblrIcon__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./TumblrIcon */ "./node_modules/react-share/es/TumblrIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TumblrIcon", function() { return _TumblrIcon__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _MailruIcon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./MailruIcon */ "./node_modules/react-share/es/MailruIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailruIcon", function() { return _MailruIcon__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _EmailIcon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./EmailIcon */ "./node_modules/react-share/es/EmailIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailIcon", function() { return _EmailIcon__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _LivejournalIcon__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./LivejournalIcon */ "./node_modules/react-share/es/LivejournalIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivejournalIcon", function() { return _LivejournalIcon__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _ViberIcon__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ViberIcon */ "./node_modules/react-share/es/ViberIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViberIcon", function() { return _ViberIcon__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _WorkplaceIcon__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./WorkplaceIcon */ "./node_modules/react-share/es/WorkplaceIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkplaceIcon", function() { return _WorkplaceIcon__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _LineIcon__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./LineIcon */ "./node_modules/react-share/es/LineIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineIcon", function() { return _LineIcon__WEBPACK_IMPORTED_MODULE_42__["default"]; });















































/***/ }),

/***/ "./node_modules/react-share/es/utils/createShareButton.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-share/es/utils/createShareButton.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ieDetection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ieDetection */ "./node_modules/react-share/es/utils/ieDetection.js");














var isPromise = function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7___default()(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

function windowOpen(url, _ref, onShareWindowClose) {
  var name = _ref.name,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 400 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 550 : _ref$width;

  /* eslint-disable no-mixed-operators */
  var left = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2;
  var top = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2;
  /* eslint-enable no-mixed-operators */

  var config = {
    height: height,
    width: width,
    left: left,
    top: top,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes'
  };

  var shareDialog = window.open(url, Object(_ieDetection__WEBPACK_IMPORTED_MODULE_11__["default"])(10) ? '' : name, babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(config).map(function (key) {
    return key + '=' + config[key];
  }).join(', '));

  if (onShareWindowClose) {
    var interval = window.setInterval(function () {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval);
          onShareWindowClose(shareDialog);
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.error(e);
        /* eslint-enable no-console */
      }
    }, 1000);
  }

  return shareDialog;
}

var ShareButton = function (_PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ShareButton, _PureComponent);

  function ShareButton() {
    var _ref2;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ShareButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_ref2 = ShareButton.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(ShareButton)).call.apply(_ref2, [this].concat(args))), _this), _this.onClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          openWindow = _this$props.openWindow,
          beforeOnClick = _this$props.beforeOnClick;


      if (disabled) {
        return;
      }

      e.preventDefault();

      var link = _this.link();

      var clickHandler = openWindow ? function () {
        return _this.openWindow(link);
      } : function () {
        return onClick(link);
      };

      if (beforeOnClick) {
        var returnVal = beforeOnClick();

        if (isPromise(returnVal)) {
          returnVal.then(clickHandler);
        } else {
          clickHandler();
        }
      } else {
        clickHandler();
      }
    }, _this.onKeyPress = function (e) {
      if (e.key === 'Enter' || e.key === 13 || e.key === ' ' || e.key === 32) {
        _this.onClick(e);
      }
    }, _this.openWindow = function (link) {
      var _this$props2 = _this.props,
          onShareWindowClose = _this$props2.onShareWindowClose,
          windowWidth = _this$props2.windowWidth,
          windowHeight = _this$props2.windowHeight;


      var windowOptions = {
        height: windowHeight,
        width: windowWidth
      };

      windowOpen(link, windowOptions, onShareWindowClose);
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ShareButton, [{
    key: 'link',
    value: function link() {
      var _props = this.props,
          url = _props.url,
          opts = _props.opts,
          networkLink = _props.networkLink;

      return networkLink(url, opts);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          additionalProps = _props2.additionalProps,
          children = _props2.children,
          className = _props2.className,
          disabled = _props2.disabled,
          disabledStyle = _props2.disabledStyle,
          name = _props2.name,
          network = _props2.network,
          role = _props2.role,
          style = _props2.style,
          tabIndex = _props2.tabIndex;


      var classes = classnames__WEBPACK_IMPORTED_MODULE_10___default()('SocialMediaShareButton', 'SocialMediaShareButton--' + network, {
        'SocialMediaShareButton--disabled': !!disabled,
        disabled: !!disabled
      }, className);

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          name: name
        }, additionalProps, {
          role: role,
          tabIndex: tabIndex,
          onClick: this.onClick,
          onKeyPress: this.onKeyPress,
          className: classes,
          style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, disabled ? disabledStyle : {}) }),
        children
      );
    }
  }]);

  return ShareButton;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

ShareButton.propTypes = {
  additionalProps: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  disabledStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  name: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  network: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  networkLink: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  opts: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  openWindow: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  url: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  role: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  windowWidth: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  windowHeight: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  beforeOnClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onShareWindowClose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number])
};
ShareButton.defaultProps = {
  disabledStyle: {
    opacity: 0.6
  },
  openWindow: true,
  role: 'button',
  tabIndex: '0'
};


function createShareButton(network, link) {
  var optsMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return {};
  };
  var propTypes = arguments[3];
  var defaultProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var CreatedButton = function CreatedButton(props) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ShareButton, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      network: network,
      networkLink: link,
      opts: optsMap(props) }));
  };

  CreatedButton.propTypes = propTypes;
  CreatedButton.defaultProps = defaultProps;

  return CreatedButton;
}

/* harmony default export */ __webpack_exports__["default"] = (createShareButton);

/***/ }),

/***/ "./node_modules/react-share/es/utils/iconFactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/utils/iconFactory.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return iconFactory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function iconFactory(network, iconConfig) {
  var Icon = function Icon(props) {
    var className = props.className,
        iconBgStyle = props.iconBgStyle,
        logoFillColor = props.logoFillColor,
        round = props.round,
        size = props.size;


    var baseStyle = {
      width: size,
      height: size
    };

    var classes = 'social-icon social-icon--' + network + ' ' + className;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { style: baseStyle },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'svg',
        {
          viewBox: '0 0 64 64',
          width: size,
          height: size,
          className: classes },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'g',
          null,
          !round ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', {
            width: '64',
            height: '64',
            fill: iconConfig.color,
            style: iconBgStyle }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('circle', {
            cx: '32',
            cy: '32',
            r: '31',
            fill: iconConfig.color,
            style: iconBgStyle })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'g',
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', { d: iconConfig.icon, fill: logoFillColor })
        )
      )
    );
  };

  Icon.propTypes = {
    className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    iconBgStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    logoFillColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    round: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  };

  Icon.defaultProps = {
    className: '',
    iconBgStyle: {},
    logoFillColor: 'white',
    size: 64
  };

  return Icon;
}

/***/ }),

/***/ "./node_modules/react-share/es/utils/ieDetection.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-share/es/utils/ieDetection.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isInternetExplorerBefore; });
/*
 * This detection method identifies Internet Explorers up until version 11.
 *
 * Reference: https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
 */
function isInternetExplorerBefore(version) {
  var iematch = /MSIE ([0-9]+)/g.exec(window.navigator.userAgent);

  return iematch ? +iematch[1] < version : false;
}

/***/ }),

/***/ "./node_modules/react-share/es/utils/objectToGetParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-share/es/utils/objectToGetParams.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return objectToGetParams; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

/* eslint-disable prefer-template */
function objectToGetParams(object) {
  return '?' + babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object).filter(function (key) {
    return !!object[key];
  }).map(function (key) {
    return key + '=' + encodeURIComponent(object[key]);
  }).join('&');
}
/* eslint-enable prefer-template */

/***/ }),

/***/ "./node_modules/react-share/es/utils/shareCountFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-share/es/utils/shareCountFactory.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shareCountFactory; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);










var SocialMediaShareCount = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SocialMediaShareCount, _Component);

  function SocialMediaShareCount(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SocialMediaShareCount);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (SocialMediaShareCount.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(SocialMediaShareCount)).call(this, props));

    _this._isMounted = false;
    _this.state = { count: 0 };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SocialMediaShareCount, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
      this.updateCount(this.props.url);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.url !== this.props.url) {
        this.updateCount(nextProps.url);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'updateCount',
    value: function updateCount(url) {
      var _this2 = this;

      if (this.props.getCount) {
        this.setState({
          isLoading: true
        });

        this.props.getCount(url, function (count) {
          if (_this2._isMounted) {
            _this2.setState({
              count: count,
              isLoading: false
            });
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          count = _state.count,
          isLoading = _state.isLoading;
      var _props = this.props,
          children = _props.children,
          className = _props.className;


      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        'div',
        { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('SocialMediaShareCount', className) },
        !isLoading && children(count || 0)
      );
    }
  }]);

  return SocialMediaShareCount;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SocialMediaShareCount.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  getCount: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  url: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired
};

SocialMediaShareCount.defaultProps = {
  children: function children(shareCount) {
    return shareCount;
  }
};

function shareCountFactory(getCount) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SocialMediaShareCount, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ getCount: getCount }, props));
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzb25wL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc29ucC9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzb25wL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzb25wL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvRW1haWxJY29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9FbWFpbFNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9GYWNlYm9va0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0ZhY2Vib29rU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0ZhY2Vib29rU2hhcmVDb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvR29vZ2xlUGx1c0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0dvb2dsZVBsdXNTaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvR29vZ2xlUGx1c1NoYXJlQ291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0xpbmVJY29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9MaW5lU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0xpbmtlZGluSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvTGlua2VkaW5TaGFyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvTGlua2VkaW5TaGFyZUNvdW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9MaXZlam91cm5hbEljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL0xpdmVqb3VybmFsU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL01haWxydUljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL01haWxydVNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9PS0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL09LU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL09LU2hhcmVDb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvUGludGVyZXN0SWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvUGludGVyZXN0U2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1BpbnRlcmVzdFNoYXJlQ291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1JlZGRpdEljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1JlZGRpdFNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9SZWRkaXRTaGFyZUNvdW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9UZWxlZ3JhbUljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1RlbGVncmFtU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1R1bWJsckljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1R1bWJsclNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9UdW1ibHJTaGFyZUNvdW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9Ud2l0dGVySWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvVHdpdHRlclNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9WS0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1ZLU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1ZLU2hhcmVDb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvVmliZXJJY29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9WaWJlclNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9XZWlib1NoYXJlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9XaGF0c2FwcEljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1doYXRzYXBwU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1dvcmtwbGFjZUljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL1dvcmtwbGFjZVNoYXJlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvdXRpbHMvY3JlYXRlU2hhcmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL3V0aWxzL2ljb25GYWN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9lcy91dGlscy9pZURldGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2hhcmUvZXMvdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNoYXJlL2VzL3V0aWxzL3NoYXJlQ291bnRGYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsOEZBQW1DLHNCOzs7Ozs7Ozs7OztBQ0F6RSxrQkFBa0IsWUFBWSxtQkFBTyxDQUFDLDhHQUEyQyxzQjs7Ozs7Ozs7Ozs7QUNBakYsa0JBQWtCLFlBQVksbUJBQU8sQ0FBQyxnSEFBNEMsc0I7Ozs7Ozs7Ozs7O0FDQWxGLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsd0ZBQWdDLHNCOzs7Ozs7Ozs7Ozs7QUNBekQ7O0FBRWI7O0FBRUEsc0JBQXNCLG1CQUFPLENBQUMseUdBQW1D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QTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsYUFBYSw0Q0FBSztBQUNsQjtBQUNBLFNBQVMsWUFBWSxpREFBRSxzQ0FBc0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUMsQ0FBQywrQ0FBUzs7QUFFWDtBQUNBLFlBQVksaURBQVM7QUFDckIsYUFBYSxpREFBUztBQUN0QixZQUFZLGlEQUFTO0FBQ3JCLE9BQU8saURBQVM7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0EsV0FBVyw0Q0FBSyxzQ0FBc0Msb0VBQVEsRUFBRSxxQkFBcUI7QUFDckY7QUFDQSxDIiwiZmlsZSI6IjI4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwidmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJyk7XG52YXIgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHsgc3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeSB9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcbiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcbiIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbiIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2pzb25wJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBqc29ucDtcblxuLyoqXG4gKiBDYWxsYmFjayBpbmRleC5cbiAqL1xuXG52YXIgY291bnQgPSAwO1xuXG4vKipcbiAqIE5vb3AgZnVuY3Rpb24uXG4gKi9cblxuZnVuY3Rpb24gbm9vcCgpe31cblxuLyoqXG4gKiBKU09OUCBoYW5kbGVyXG4gKlxuICogT3B0aW9uczpcbiAqICAtIHBhcmFtIHtTdHJpbmd9IHFzIHBhcmFtZXRlciAoYGNhbGxiYWNrYClcbiAqICAtIHByZWZpeCB7U3RyaW5nfSBxcyBwYXJhbWV0ZXIgKGBfX2pwYClcbiAqICAtIG5hbWUge1N0cmluZ30gcXMgcGFyYW1ldGVyIChgcHJlZml4YCArIGluY3IpXG4gKiAgLSB0aW1lb3V0IHtOdW1iZXJ9IGhvdyBsb25nIGFmdGVyIGEgdGltZW91dCBlcnJvciBpcyBlbWl0dGVkIChgNjAwMDBgKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBvcHRpb25hbCBvcHRpb25zIC8gY2FsbGJhY2tcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbmFsIGNhbGxiYWNrXG4gKi9cblxuZnVuY3Rpb24ganNvbnAodXJsLCBvcHRzLCBmbil7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBvcHRzKSB7XG4gICAgZm4gPSBvcHRzO1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICBpZiAoIW9wdHMpIG9wdHMgPSB7fTtcblxuICB2YXIgcHJlZml4ID0gb3B0cy5wcmVmaXggfHwgJ19fanAnO1xuXG4gIC8vIHVzZSB0aGUgY2FsbGJhY2sgbmFtZSB0aGF0IHdhcyBwYXNzZWQgaWYgb25lIHdhcyBwcm92aWRlZC5cbiAgLy8gb3RoZXJ3aXNlIGdlbmVyYXRlIGEgdW5pcXVlIG5hbWUgYnkgaW5jcmVtZW50aW5nIG91ciBjb3VudGVyLlxuICB2YXIgaWQgPSBvcHRzLm5hbWUgfHwgKHByZWZpeCArIChjb3VudCsrKSk7XG5cbiAgdmFyIHBhcmFtID0gb3B0cy5wYXJhbSB8fCAnY2FsbGJhY2snO1xuICB2YXIgdGltZW91dCA9IG51bGwgIT0gb3B0cy50aW1lb3V0ID8gb3B0cy50aW1lb3V0IDogNjAwMDA7XG4gIHZhciBlbmMgPSBlbmNvZGVVUklDb21wb25lbnQ7XG4gIHZhciB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0gfHwgZG9jdW1lbnQuaGVhZDtcbiAgdmFyIHNjcmlwdDtcbiAgdmFyIHRpbWVyO1xuXG5cbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGNsZWFudXAoKTtcbiAgICAgIGlmIChmbikgZm4obmV3IEVycm9yKCdUaW1lb3V0JykpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cCgpe1xuICAgIGlmIChzY3JpcHQucGFyZW50Tm9kZSkgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICB3aW5kb3dbaWRdID0gbm9vcDtcbiAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKXtcbiAgICBpZiAod2luZG93W2lkXSkge1xuICAgICAgY2xlYW51cCgpO1xuICAgIH1cbiAgfVxuXG4gIHdpbmRvd1tpZF0gPSBmdW5jdGlvbihkYXRhKXtcbiAgICBkZWJ1ZygnanNvbnAgZ290JywgZGF0YSk7XG4gICAgY2xlYW51cCgpO1xuICAgIGlmIChmbikgZm4obnVsbCwgZGF0YSk7XG4gIH07XG5cbiAgLy8gYWRkIHFzIGNvbXBvbmVudFxuICB1cmwgKz0gKH51cmwuaW5kZXhPZignPycpID8gJyYnIDogJz8nKSArIHBhcmFtICsgJz0nICsgZW5jKGlkKTtcbiAgdXJsID0gdXJsLnJlcGxhY2UoJz8mJywgJz8nKTtcblxuICBkZWJ1ZygnanNvbnAgcmVxIFwiJXNcIicsIHVybCk7XG5cbiAgLy8gY3JlYXRlIHNjcmlwdFxuICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgc2NyaXB0LnNyYyA9IHVybDtcbiAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgdGFyZ2V0KTtcblxuICByZXR1cm4gY2FuY2VsO1xufVxuIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lXG4gICAgICAgICAgICAgICAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgID8gY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgIDogbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuICAnbGlnaHRzZWFncmVlbicsXG4gICdmb3Jlc3RncmVlbicsXG4gICdnb2xkZW5yb2QnLFxuICAnZG9kZ2VyYmx1ZScsXG4gICdkYXJrb3JjaGlkJyxcbiAgJ2NyaW1zb24nXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBpcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcbiAgICAvLyBpcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcbiAgICAvLyBkb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbih2KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyLm1lc3NhZ2U7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGFyZ3NbMF0gPSAodXNlQ29sb3JzID8gJyVjJyA6ICcnKVxuICAgICsgdGhpcy5uYW1lc3BhY2VcbiAgICArICh1c2VDb2xvcnMgPyAnICVjJyA6ICcgJylcbiAgICArIGFyZ3NbMF1cbiAgICArICh1c2VDb2xvcnMgPyAnJWMgJyA6ICcgJylcbiAgICArICcrJyArIGV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICBpZiAoIXVzZUNvbG9ycykgcmV0dXJuO1xuXG4gIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgYXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0JylcblxuICAvLyB0aGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuICAvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEMgPSAwO1xuICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBpZiAoJyUlJyA9PT0gbWF0Y2gpIHJldHVybjtcbiAgICBpbmRleCsrO1xuICAgIGlmICgnJWMnID09PSBtYXRjaCkge1xuICAgICAgLy8gd2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vIHRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIGNvbnNvbGVcbiAgICAmJiBjb25zb2xlLmxvZ1xuICAgICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge31cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcbiAgdHJ5IHtcbiAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICB9IGNhdGNoKGUpIHt9XG5cbiAgLy8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuICBpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcbiAgICByID0gcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH1cblxuICByZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYGxvY2FsU3RvcmFnZS5kZWJ1Z2AgaW5pdGlhbGx5LlxuICovXG5cbmV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlKSB7fVxufVxuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogUHJldmlvdXMgbG9nIHRpbWVzdGFtcC5cbiAqL1xuXG52YXIgcHJldlRpbWU7XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgIC8vIGRpc2FibGVkP1xuICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNlbGYgPSBkZWJ1ZztcblxuICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAvLyBhbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24obWF0Y2gsIGZvcm1hdCkge1xuICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpbmRleCsrO1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBmb3JtYXR0ZXIpIHtcbiAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG5cbiAgICAvLyBhcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgbG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cblxuICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gIGRlYnVnLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuLyoqXG4gKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHxcbiAgICBwbHVyYWwobXMsIGgsICdob3VyJykgfHxcbiAgICBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fFxuICAgIHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8XG4gICAgbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXMgPCBuICogMS41KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobXMgLyBuKSArICcgJyArIG5hbWU7XG4gIH1cbiAgcmV0dXJuIE1hdGguY2VpbChtcyAvIG4pICsgJyAnICsgbmFtZSArICdzJztcbn1cbiIsImltcG9ydCBpY29uRmFjdG9yeSBmcm9tICcuL3V0aWxzL2ljb25GYWN0b3J5JztcblxudmFyIEVtYWlsSWNvbiA9IGljb25GYWN0b3J5KCdlbWFpbCcsIHtcbiAgaWNvbjogJ00xNywyMnYyMGgzMFYyMkgxN3ogTTQxLjEsMjVMMzIsMzIuMUwyMi45LDI1SDQxLjF6IE0yMCwzOVYyNi42bDEyLDkuM2wxMi05LjNWMzlIMjB6JyxcbiAgbWFzazogJ000MS4xLDI1SDIyLjlsOS4xLDcuMUw0MS4xLDI1eiBNNDQsMjYuNmwtMTIsOS4zbC0xMi05LjNWMzloMjRWMjYuNnogTTAsMHY2NGg2NFYwSDB6IE00Nyw0MkgxN1YyMmgzMFY0MnonLFxuICBjb2xvcjogJyM3ZjdmN2YnXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRW1haWxJY29uOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVNoYXJlQnV0dG9uJztcblxuZnVuY3Rpb24gZW1haWxMaW5rKHVybCwgX3JlZikge1xuICB2YXIgc3ViamVjdCA9IF9yZWYuc3ViamVjdCxcbiAgICAgIGJvZHkgPSBfcmVmLmJvZHk7XG5cbiAgcmV0dXJuICdtYWlsdG86JyArIG9iamVjdFRvR2V0UGFyYW1zKHsgc3ViamVjdDogc3ViamVjdCwgYm9keTogYm9keSB8fCB1cmwgfSk7XG59XG5cbnZhciBFbWFpbFNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ2VtYWlsJywgZW1haWxMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWJqZWN0OiBwcm9wcy5zdWJqZWN0LFxuICAgIGJvZHk6IHByb3BzLmJvZHlcbiAgfTtcbn0sIHtcbiAgc3ViamVjdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYm9keTogUHJvcFR5cGVzLnN0cmluZ1xufSwge1xuICBvcGVuV2luZG93OiBmYWxzZSxcbiAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhsaW5rKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRW1haWxTaGFyZUJ1dHRvbjsiLCJpbXBvcnQgaWNvbkZhY3RvcnkgZnJvbSAnLi91dGlscy9pY29uRmFjdG9yeSc7XG5cbnZhciBGYWNlYm9va0ljb24gPSBpY29uRmFjdG9yeSgnZmFjZWJvb2snLCB7XG4gIGljb246ICdNMzQuMSw0N1YzMy4zaDQuNmwwLjctNS4zaC01LjN2LTMuNGMwLTEuNSwwLjQtMi42LDIuNi0yLjZsMi44LDB2LTQuOGMtMC41LTAuMS0yLjItMC4yLTQuMS0wLjIgYy00LjEsMC02LjksMi41LTYuOSw3VjI4SDI0djUuM2g0LjZWNDdIMzQuMXonLFxuICBtYXNrOiAnTTAsMHY2NGg2NFYwSDB6IE0zOS42LDIybC0yLjgsMGMtMi4yLDAtMi42LDEuMS0yLjYsMi42VjI4aDUuM2wtMC43LDUuM2gtNC42VjQ3aC01LjVWMzMuM0gyNFYyOGg0LjZWMjQgYzAtNC42LDIuOC03LDYuOS03YzIsMCwzLjYsMC4xLDQuMSwwLjJWMjJ6JyxcbiAgY29sb3I6ICcjM2I1OTk4J1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rSWNvbjsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5cbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVNoYXJlQnV0dG9uJztcblxuZnVuY3Rpb24gZmFjZWJvb2tMaW5rKHVybCwgX3JlZikge1xuICB2YXIgcXVvdGUgPSBfcmVmLnF1b3RlLFxuICAgICAgaGFzaHRhZyA9IF9yZWYuaGFzaHRhZztcblxuICBhc3NlcnQodXJsLCAnZmFjZWJvb2sudXJsJyk7XG5cbiAgcmV0dXJuICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHAnICsgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgIHU6IHVybCxcbiAgICBxdW90ZTogcXVvdGUsXG4gICAgaGFzaHRhZzogaGFzaHRhZ1xuICB9KTtcbn1cblxudmFyIEZhY2Vib29rU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignZmFjZWJvb2snLCBmYWNlYm9va0xpbmssIGZ1bmN0aW9uIChwcm9wcykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmIChwcm9wcy5waWN0dXJlKSB7XG4gICAgY29uc29sZS53YXJuKCdGYWNlYm9va1NoYXJlQnV0dG9uIHdhcm5pbmc6IHBpY3R1cmUgaXMgYSBkZXByZWNhdGVkIHByb3AuJyk7XG4gIH1cblxuICBpZiAocHJvcHMudGl0bGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ0ZhY2Vib29rU2hhcmVCdXR0b24gd2FybmluZzogdGl0bGUgaXMgYSBkZXByZWNhdGVkIHByb3AuIFVzZSBcInF1b3RlXCIgaW5zdGVhZC4nKTtcbiAgfVxuXG4gIGlmIChwcm9wcy5kZXNjcmlwdGlvbikge1xuICAgIGNvbnNvbGUud2FybignRmFjZWJvb2tTaGFyZUJ1dHRvbiB3YXJuaW5nOiBkZXNjcmlwdGlvbiBpcyBhIGRlcHJlY2F0ZWQgcHJvcC5cXG4gICAgICBVc2UgXCJxdW90ZVwiIGluc3RlYWQuJyk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cbiAgcmV0dXJuIHtcbiAgICBxdW90ZTogcHJvcHMucXVvdGUsXG4gICAgaGFzaHRhZzogcHJvcHMuaGFzaHRhZ1xuICB9O1xufSwge1xuICBxdW90ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGFzaHRhZzogUHJvcFR5cGVzLnN0cmluZ1xufSwge1xuICB3aW5kb3dXaWR0aDogNTUwLFxuICB3aW5kb3dIZWlnaHQ6IDQwMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rU2hhcmVCdXR0b247IiwiaW1wb3J0IGpzb25wIGZyb20gJ2pzb25wJztcblxuaW1wb3J0IHNoYXJlQ291bnRGYWN0b3J5IGZyb20gJy4vdXRpbHMvc2hhcmVDb3VudEZhY3RvcnknO1xuXG5mdW5jdGlvbiBnZXRGYWNlYm9va1NoYXJlQ291bnQoc2hhcmVVcmwsIGNhbGxiYWNrKSB7XG4gIHZhciBlbmRwb2ludCA9ICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8/aWQ9JyArIHNoYXJlVXJsO1xuXG4gIGpzb25wKGVuZHBvaW50LCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgY2FsbGJhY2soIWVyciAmJiBkYXRhICYmIGRhdGEuc2hhcmUgJiYgZGF0YS5zaGFyZS5zaGFyZV9jb3VudCA/IGRhdGEuc2hhcmUuc2hhcmVfY291bnQgOiB1bmRlZmluZWQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hhcmVDb3VudEZhY3RvcnkoZ2V0RmFjZWJvb2tTaGFyZUNvdW50KTsiLCJpbXBvcnQgaWNvbkZhY3RvcnkgZnJvbSAnLi91dGlscy9pY29uRmFjdG9yeSc7XG5cbnZhciBHb29nbGVQbHVzSWNvbiA9IGljb25GYWN0b3J5KCdnb29nbGUnLCB7XG4gIGljb246ICdNMjUuMywzMC4xdjMuOGg2LjNjLTAuMywxLjYtMS45LDQuOC02LjMsNC44Yy0zLjgsMC02LjktMy4xLTYuOS03czMuMS03LDYuOS03YzIuMiwwLDMuNiwwLjksNC40LDEuN2wzLTIuOWMtMS45LTEuOC00LjQtMi45LTcuNC0yLjljLTYuMSwwLTExLjEsNS0xMS4xLDExLjFzNSwxMS4xLDExLjEsMTEuMWM2LjQsMCwxMC43LTQuNSwxMC43LTEwLjljMC0wLjctMC4xLTEuMy0wLjItMS44SDI1LjNMMjUuMywzMC4xeiBNNDkuOCwyOC45aC0zLjJ2LTMuMmgtMy4ydjMuMmgtMy4ydjMuMmgzLjJ2My4yaDMuMnYtMy4yaDMuMicsXG4gIG1hc2s6ICdNMCwwdjY0aDY0VjBIMHogTTMxLjMsMTkuMWMwLjMsMC4zLDAuNiwwLjcsMC45LDEuMmMwLjMsMC40LDAuNSwwLjksMC43LDEuNWMwLjIsMC42LDAuMywxLjMsMC4zLDIuMSBjMCwxLjQtMC4zLDIuNi0wLjksMy40Yy0wLjMsMC40LTAuNiwwLjgtMC45LDEuMmMtMC40LDAuNC0wLjgsMC43LTEuMiwxLjFjLTAuMiwwLjItMC41LDAuNS0wLjcsMC44Yy0wLjIsMC4zLTAuNCwwLjctMC40LDEuMSBjMCwwLjQsMC4xLDAuOCwwLjQsMWMwLjIsMC4zLDAuNCwwLjUsMC42LDAuN2wxLjQsMS4xYzAuOCwwLjcsMS42LDEuNSwyLjIsMi4zYzAuNiwwLjgsMC45LDIsMC45LDMuM2MwLDEuOS0wLjksMy43LTIuNiw1LjIgYy0xLjgsMS42LTQuMywyLjQtNy43LDIuNGMtMi44LDAtNC45LTAuNi02LjMtMS44Yy0xLjQtMS4xLTIuMS0yLjQtMi4xLTMuOWMwLTAuNywwLjItMS42LDAuNy0yLjVjMC40LTAuOSwxLjItMS43LDIuNC0yLjQgYzEuMy0wLjcsMi43LTEuMiw0LjEtMS41YzEuNC0wLjIsMi42LTAuMywzLjUtMC40Yy0wLjMtMC40LTAuNS0wLjgtMC44LTEuMmMtMC4zLTAuNC0wLjQtMC45LTAuNC0xLjVjMC0wLjQsMC0wLjYsMC4yLTAuOSBjMC4xLTAuMiwwLjItMC41LDAuMi0wLjdjLTAuNSwwLjEtMC45LDAuMS0xLjMsMC4xYy0yLjEsMC0zLjgtMC43LTQuOS0yYy0xLjItMS4yLTEuOC0yLjctMS44LTQuM2MwLTIsMC44LTMuOCwyLjUtNS40IGMxLjEtMC45LDIuMy0xLjYsMy41LTEuOGMxLjItMC4yLDIuMy0wLjQsMy40LTAuNGg4TDMzLDE4LjRoLTIuNUMzMC43LDE4LjYsMzEsMTguOCwzMS4zLDE5LjF6IE00OCwzMmgtNC4zdjQuMmgtMi41VjMySDM3di0yLjUgaDQuMnYtNC4zaDIuNXY0LjNINDhWMzJ6IE0yNy4xLDE5LjFjLTAuNi0wLjUtMS40LTAuNy0yLjItMC43Yy0xLjEsMC0yLDAuNS0yLjcsMS4zYy0wLjYsMC45LTAuOSwxLjktMC45LDNjMCwxLjUsMC40LDMsMS4zLDQuNSBjMC40LDAuNywwLjksMS40LDEuNiwxLjljMC42LDAuNSwxLjQsMC44LDIuMiwwLjhjMS4xLDAsMS45LTAuNCwyLjYtMS4xYzAuMy0wLjUsMC42LTEsMC43LTEuNmMwLjEtMC41LDAuMS0xLDAuMS0xLjQgYzAtMS42LTAuNC0zLjItMS4yLTQuOEMyOC4yLDIwLjIsMjcuNywxOS41LDI3LjEsMTkuMXogTTI2LjksMzYuMmMtMC4yLDAtMC43LDAtMS42LDAuMWMtMC44LDAuMS0xLjcsMC4zLTIuNSwwLjYgYy0wLjIsMC4xLTAuNSwwLjItMC45LDAuNGMtMC40LDAuMi0wLjcsMC40LTEuMSwwLjdjLTAuNCwwLjMtMC43LDAuNy0wLjksMS4yYy0wLjMsMC41LTAuNCwxLjEtMC40LDEuOGMwLDEuNCwwLjYsMi42LDEuOSwzLjUgYzEuMiwwLjksMi45LDEuNCw1LDEuNGMxLjksMCwzLjMtMC40LDQuMy0xLjNjMS0wLjgsMS41LTEuOCwxLjUtMy4xYzAtMS0wLjMtMS45LTEtMi43Yy0wLjctMC43LTEuOC0xLjYtMy4zLTIuNiBDMjcuNSwzNi4yLDI3LjIsMzYuMiwyNi45LDM2LjJ6JyxcbiAgY29sb3I6ICcjZGQ0YjM5J1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZVBsdXNJY29uOyIsImltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vdXRpbHMvY3JlYXRlU2hhcmVCdXR0b24nO1xuXG5mdW5jdGlvbiBnb29nbGVQbHVzTGluayh1cmwpIHtcbiAgYXNzZXJ0KHVybCwgJ2dvb2dsZVBsdXMudXJsJyk7XG5cbiAgcmV0dXJuICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZScgKyBvYmplY3RUb0dldFBhcmFtcyh7IHVybDogdXJsIH0pO1xufVxuXG52YXIgR29vZ2xlUGx1c1NoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ2dvb2dsZVBsdXMnLCBnb29nbGVQbHVzTGluaywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHtcbiAgd2luZG93V2lkdGg6IDU1MCxcbiAgd2luZG93SGVpZ2h0OiA0MDBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVQbHVzU2hhcmVCdXR0b247IiwiaW1wb3J0IF9KU09OJHN0cmluZ2lmeSBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnknO1xuaW1wb3J0IGlzSW50ZXJuZXRFeHBsb3JlckJlZm9yZSBmcm9tICcuL3V0aWxzL2llRGV0ZWN0aW9uJztcbmltcG9ydCBzaGFyZUNvdW50RmFjdG9yeSBmcm9tICcuL3V0aWxzL3NoYXJlQ291bnRGYWN0b3J5JztcblxuZnVuY3Rpb24gZ2V0R29vZ2xlUGx1c1NoYXJlQ291bnQoc2hhcmVVcmwsIGNhbGxiYWNrKSB7XG4gIGlmIChpc0ludGVybmV0RXhwbG9yZXJCZWZvcmUoMTEpKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZSBwbHVzIHNoYXJlIGNvdW50IGlzIG5vdCBzdXBwb3J0ZWQgaW4gPD1JRTEwIScpO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICB4aHIub3BlbignUE9TVCcsICdodHRwczovL2NsaWVudHM2Lmdvb2dsZS5jb20vcnBjJyk7XG4gIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcpO1xuXG4gIHhoci5zZW5kKF9KU09OJHN0cmluZ2lmeSh7XG4gICAgbWV0aG9kOiAncG9zLnBsdXNvbmVzLmdldCcsXG4gICAgaWQ6ICdwJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIG5vbG9nOiB0cnVlLFxuICAgICAgaWQ6IHNoYXJlVXJsLFxuICAgICAgc291cmNlOiAnd2lkZ2V0JyxcbiAgICAgIHVzZXJJZDogJ0B2aWV3ZXInLFxuICAgICAgZ3JvdXBJZDogJ0BzZWxmJ1xuICAgIH0sXG4gICAganNvbnJwYzogJzIuMCcsXG4gICAga2V5OiAncCcsXG4gICAgYXBpVmVyc2lvbjogJ3YxJ1xuICB9KSk7XG5cbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIG9uU3VjY2Vzc2RhdGEoKSB7XG4gICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICBjYWxsYmFjayhkYXRhID8gZGF0YS5yZXN1bHQubWV0YWRhdGEuZ2xvYmFsQ291bnRzLmNvdW50IDogdW5kZWZpbmVkKTtcbiAgfTtcblxuICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3JkYXRhKCkge307XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYXJlQ291bnRGYWN0b3J5KGdldEdvb2dsZVBsdXNTaGFyZUNvdW50KTsiLCJpbXBvcnQgaWNvbkZhY3RvcnkgZnJvbSAnLi91dGlscy9pY29uRmFjdG9yeSc7XG5cbnZhciBMaW5lSWNvbiA9IGljb25GYWN0b3J5KCdsaW5lJywge1xuICBpY29uOiAnTTUyLjYyIDMwLjEzOGMwIDMuNjkzLTEuNDMyIDcuMDE5LTQuNDIgMTAuMjk2aC4wMDFjLTQuMzI2IDQuOTc5LTE0IDExLjA0NC0xNi4yMDEgMTEuOTcyLTIuMi45MjctMS44NzYtLjU5MS0xLjc4Ni0xLjExMmwuMjk0LTEuNzY1Yy4wNjktLjUyNy4xNDItMS4zNDMtLjA2Ni0xLjg2NS0uMjMyLS41NzQtMS4xNDYtLjg3Mi0xLjgxNy0xLjAxNi05LjkwOS0xLjMxLTE3LjI0NS04LjIzOC0xNy4yNDUtMTYuNTEgMC05LjIyNiA5LjI1MS0xNi43MzMgMjAuNjItMTYuNzMzIDExLjM3IDAgMjAuNjIgNy41MDcgMjAuNjIgMTYuNzMzek0yNy44MSAyNS42OGgtMS40NDZhLjQwMi40MDIgMCAwIDAtLjQwMi40MDF2OC45ODVjMCAuMjIxLjE4LjQuNDAyLjRoMS40NDZhLjQwMS40MDEgMCAwIDAgLjQwMi0uNHYtOC45ODVhLjQwMi40MDIgMCAwIDAtLjQwMi0uNDAxem05Ljk1NiAwSDM2LjMyYS40MDIuNDAyIDAgMCAwLS40MDIuNDAxdjUuMzM4TDMxLjggMjUuODU4YS4zOS4zOSAwIDAgMC0uMDMxLS4wNGwtLjAwMi0uMDAzLS4wMjQtLjAyNS0uMDA4LS4wMDdhLjMxMy4zMTMgMCAwIDAtLjAzMi0uMDI2LjI1NS4yNTUgMCAwIDEtLjAyMS0uMDE0bC0uMDEyLS4wMDctLjAyMS0uMDEyLS4wMTMtLjAwNi0uMDIzLS4wMS0uMDEzLS4wMDUtLjAyNC0uMDA4LS4wMTQtLjAwMy0uMDIzLS4wMDUtLjAxNy0uMDAyLS4wMjEtLjAwMy0uMDIxLS4wMDJoLTEuNDZhLjQwMi40MDIgMCAwIDAtLjQwMi40MDF2OC45ODVjMCAuMjIxLjE4LjQuNDAyLjRoMS40NDZhLjQwMS40MDEgMCAwIDAgLjQwMi0uNHYtNS4zMzdsNC4xMjMgNS41NjhjLjAyOC4wNC4wNjMuMDcyLjEwMS4wOTlsLjAwNC4wMDNhLjIzNi4yMzYgMCAwIDAgLjAyNS4wMTVsLjAxMi4wMDYuMDE5LjAxYS4xNTQuMTU0IDAgMCAxIC4wMTkuMDA4bC4wMTIuMDA0LjAyOC4wMS4wMDUuMDAxYS40NDIuNDQyIDAgMCAwIC4xMDQuMDEzaDEuNDQ2YS40LjQgMCAwIDAgLjQwMS0uNHYtOC45ODVhLjQwMi40MDIgMCAwIDAtLjQwMS0uNDAxem0tMTMuNDQyIDcuNTM3aC0zLjkzdi03LjEzNmEuNDAxLjQwMSAwIDAgMC0uNDAxLS40MDFoLTEuNDQ3YS40LjQgMCAwIDAtLjQwMS40MDF2OC45ODRhLjM5Mi4zOTIgMCAwIDAgLjEyMy4yOWMuMDcyLjA2OC4xNy4xMTEuMjc4LjExMWg1Ljc3OGEuNC40IDAgMCAwIC40MDEtLjQwMXYtMS40NDdhLjQwMS40MDEgMCAwIDAtLjQwMS0uNDAxem0yMS40MjktNS4yODdjLjIyMiAwIC40MDEtLjE4LjQwMS0uNDAydi0xLjQ0NmEuNDAxLjQwMSAwIDAgMC0uNDAxLS40MDJoLTUuNzc4YS4zOTguMzk4IDAgMCAwLS4yNzkuMTEzbC0uMDA1LjAwNC0uMDA2LjAwOGEuMzk3LjM5NyAwIDAgMC0uMTExLjI3NnY4Ljk4NGMwIC4xMDguMDQzLjIwNi4xMTIuMjc4bC4wMDUuMDA2YS40MDEuNDAxIDAgMCAwIC4yODQuMTE3aDUuNzc4YS40LjQgMCAwIDAgLjQwMS0uNDAxdi0xLjQ0N2EuNDAxLjQwMSAwIDAgMC0uNDAxLS40MDFoLTMuOTN2LTEuNTE5aDMuOTNjLjIyMiAwIC40MDEtLjE4LjQwMS0uNDAyVjI5Ljg1YS40MDEuNDAxIDAgMCAwLS40MDEtLjQwMmgtMy45M1YyNy45M2gzLjkzeicsXG4gIG1hc2s6ICcnLFxuICBjb2xvcjogJyMwMGI4MDAnXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTGluZUljb247IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi91dGlscy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5cbmZ1bmN0aW9uIGxpbmVMaW5rKHVybCwgX3JlZikge1xuICB2YXIgdGl0bGUgPSBfcmVmLnRpdGxlO1xuXG4gIGFzc2VydCh1cmwsICdsaW5lLnVybCcpO1xuXG4gIHJldHVybiAnaHR0cHM6Ly9zb2NpYWwtcGx1Z2lucy5saW5lLm1lL2xpbmVpdC9zaGFyZScgKyBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgdXJsOiB1cmwsXG4gICAgdGV4dDogdGl0bGVcbiAgfSk7XG59XG5cbnZhciBMaW5lU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignbGluZScsIGxpbmVMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGVcbiAgfTtcbn0sIHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn0sIHtcbiAgd2luZG93V2lkdGg6IDUwMCxcbiAgd2luZG93SGVpZ2h0OiA1MDBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5lU2hhcmVCdXR0b247IiwiaW1wb3J0IGljb25GYWN0b3J5IGZyb20gJy4vdXRpbHMvaWNvbkZhY3RvcnknO1xuXG52YXIgTGlua2VkaW5JY29uID0gaWNvbkZhY3RvcnkoJ2xpbmtlZGluJywge1xuICBpY29uOiAnTTIwLjQsNDRoNS40VjI2LjZoLTUuNFY0NHogTTIzLjEsMThjLTEuNywwLTMuMSwxLjQtMy4xLDMuMWMwLDEuNywxLjQsMy4xLDMuMSwzLjEgYzEuNywwLDMuMS0xLjQsMy4xLTMuMUMyNi4yLDE5LjQsMjQuOCwxOCwyMy4xLDE4eiBNMzkuNSwyNi4yYy0yLjYsMC00LjQsMS40LTUuMSwyLjhoLTAuMXYtMi40aC01LjJWNDRoNS40di04LjYgYzAtMi4zLDAuNC00LjUsMy4yLTQuNWMyLjgsMCwyLjgsMi42LDIuOCw0LjZWNDRINDZ2LTkuNUM0NiwyOS44LDQ1LDI2LjIsMzkuNSwyNi4yeicsXG4gIG1hc2s6ICdNMCwwdjY0aDY0VjBIMHogTTI1LjgsNDRoLTUuNFYyNi42aDUuNFY0NHogTTIzLjEsMjQuM2MtMS43LDAtMy4xLTEuNC0zLjEtMy4xYzAtMS43LDEuNC0zLjEsMy4xLTMuMSBjMS43LDAsMy4xLDEuNCwzLjEsMy4xQzI2LjIsMjIuOSwyNC44LDI0LjMsMjMuMSwyNC4zeiBNNDYsNDRoLTUuNHYtOC40YzAtMiwwLTQuNi0yLjgtNC42Yy0yLjgsMC0zLjIsMi4yLTMuMiw0LjVWNDRoLTUuNFYyNi42IGg1LjJWMjloMC4xYzAuNy0xLjQsMi41LTIuOCw1LjEtMi44YzUuNSwwLDYuNSwzLjYsNi41LDguM1Y0NHonLFxuICBjb2xvcjogJyMwMDdmYjEnXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTGlua2VkaW5JY29uOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vdXRpbHMvY3JlYXRlU2hhcmVCdXR0b24nO1xuXG5mdW5jdGlvbiBsaW5rZWRpbkxpbmsodXJsLCBfcmVmKSB7XG4gIHZhciB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb247XG5cbiAgYXNzZXJ0KHVybCwgJ2xpbmtlZGluLnVybCcpO1xuXG4gIHJldHVybiAnaHR0cHM6Ly9saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlJyArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmw6IHVybCxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgc3VtbWFyeTogZGVzY3JpcHRpb25cbiAgfSk7XG59XG5cbnZhciBMaW5rZWRpblNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ2xpbmtlZGluJywgbGlua2VkaW5MaW5rLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uXG4gIH07XG59LCB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xufSwge1xuICB3aW5kb3dXaWR0aDogNzUwLFxuICB3aW5kb3dIZWlnaHQ6IDYwMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtlZGluU2hhcmVCdXR0b247IiwiaW1wb3J0IGpzb25wIGZyb20gJ2pzb25wJztcblxuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IHNoYXJlQ291bnRGYWN0b3J5IGZyb20gJy4vdXRpbHMvc2hhcmVDb3VudEZhY3RvcnknO1xuXG5mdW5jdGlvbiBnZXRMaW5rZWRpblNoYXJlQ291bnQoc2hhcmVVcmwsIGNhbGxiYWNrKSB7XG4gIHZhciB1cmwgPSAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvdW50c2Vydi9jb3VudC9zaGFyZSc7XG5cbiAgcmV0dXJuIGpzb25wKHVybCArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmw6IHNoYXJlVXJsLFxuICAgIGZvcm1hdDogJ2pzb25wJ1xuICB9KSwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgIGNhbGxiYWNrKGRhdGEgPyBkYXRhLmNvdW50IDogdW5kZWZpbmVkKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYXJlQ291bnRGYWN0b3J5KGdldExpbmtlZGluU2hhcmVDb3VudCk7IiwiaW1wb3J0IGljb25GYWN0b3J5IGZyb20gJy4vdXRpbHMvaWNvbkZhY3RvcnknO1xuXG52YXIgTGl2ZWpvdXJuYWxJY29uID0gaWNvbkZhY3RvcnkoJ2xpdmVqb3VybmFsJywge1xuICBpY29uOiAnTTE4LjM0MDc4MjEsMjguMTc2NDcwNiBMMjEuOTQ0MTM0MSwzMS43ODk5MTYgTDMzLjAwNTU4NjUsNDIuODgyMzUzIEMzMy4wMDU1ODY1LDQyLjg4MjM1MyAzMy4wODkzODU1LDQyLjk2NjM4NjYgMzMuMDg5Mzg1NSw0Mi45NjYzODY2IEw0Ni42NjQ4MDQ2LDQ3IEM0Ni42NjQ4MDQ2LDQ3IDQ2LjY2NDgwNDYsNDcgNDYuNzQ4NjAzNCw0NyBDNDYuODMyNDAyMiw0NyA0Ni44MzI0MDIyLDQ3IDQ2LjkxNjIwMTIsNDYuOTE1OTY2NCBDNDcsNDYuODMxOTMyNyA0Nyw0Ni44MzE5MzI3IDQ3LDQ2Ljc0Nzg5OTEgTDQyLjk3NzY1MzYsMzMuMTM0NDUzNyBDNDIuOTc3NjUzNiwzMy4xMzQ0NTM3IDQyLjk3NzY1MzYsMzMuMTM0NDUzNyA0Mi44OTM4NTQ4LDMzLjA1MDQyMDIgTDMxLjE2MjAxMTEsMjEuMzY5NzQ3OSBMMzEuMTYyMDExMSwyMS4zNjk3NDc5IEwyOC4xNDUyNTE0LDE4LjI2MDUwNDIgQzI3LjMwNzI2MjYsMTcuNDIwMTY4MSAyNi41NTMwNzI2LDE3IDI1LjcxNTA4MzgsMTcgQzI0LjI5MDUwMjgsMTcgMjMuMDMzNTE5NSwxOC4zNDQ1Mzc4IDIxLjUyNTEzOTcsMTkuODU3MTQyOSBDMjEuMjczNzQzLDIwLjEwOTI0MzcgMjAuOTM4NTQ3NSwyMC40NDUzNzgxIDIwLjY4NzE1MDgsMjAuNjk3NDc5IEMyMC4zNTE5NTUzLDIxLjAzMzYxMzQgMjAuMTAwNTU4NiwyMS4yODU3MTQzIDE5Ljg0OTE2MiwyMS41Mzc4MTUxIEMxOC4zNDA3ODIxLDIyLjk2NjM4NjYgMTcuMDgzNzk4OSwyNC4yMjY4OTA4IDE3LDI1LjczOTQ5NTggQzE3LjA4Mzc5ODksMjYuNDk1Nzk4MyAxNy41MDI3OTMzLDI3LjMzNjEzNDUgMTguMzQwNzgyMSwyOC4xNzY0NzA2IFogTTM5LjkwMTIzMTksMzkuNjEzNDQ1NCBDMzkuNzMzNjM0MSwzOS40NDUzNzgxIDM5LjQ4MjIzNzQsMzcuNjgwNjcyNCA0MC4yMzY0Mjc1LDM2Ljg0MDMzNjIgQzQwLjk5MDYxNzQsMzYuMDg0MDMzNyA0MS42NjEwMDg0LDM2IDQyLjE2MzgwMTcsMzYgQzQyLjMzMTM5OTUsMzYgNDIuNDk4OTk3MywzNiA0Mi41ODI3OTYxLDM2IEw0NC44NDUzNjU5LDQzLjU2MzAyNTMgTDQzLjU4ODM4MjgsNDQuODIzNTI5NSBMMzYuMDQ2NDgzMyw0Mi41NTQ2MjE4IEMzNS45NjI2ODQzLDQyLjIxODQ4NzQgMzUuODc4ODg1NSw0MS4yMTAwODQxIDM2Ljg4NDQ3MjIsNDAuMjAxNjgwNyBDMzcuMjE5NjY3NiwzOS44NjU1NDYzIDM3Ljg5MDA1ODcsMzkuNjEzNDQ1NCAzOC41NjA0NDk4LDM5LjYxMzQ0NTQgQzM5LjE0NzA0MiwzOS42MTM0NDU0IDM5LjU2NjAzNjQsMzkuNzgxNTEyNiAzOS41NjYwMzY0LDM5Ljc4MTUxMjYgQzM5LjY0OTgzNTMsMzkuODY1NTQ2MyAzOS44MTc0MzMxLDM5Ljg2NTU0NjMgMzkuODE3NDMzMSwzOS43ODE1MTI2IEMzOS45ODUwMzA3LDM5Ljc4MTUxMjYgMzkuOTg1MDMwNywzOS42OTc0NzkgMzkuOTAxMjMxOSwzOS42MTM0NDU0IFonLFxuICBtYXNrOiAnTTAsMHY2NGg2NFYwSDB6IE0zNS40LDQ3Yy02LjUsMC4xLTktNC43LTktOHYtOS44aC0zdi0zLjljNC42LTEuNiw1LjYtNS43LDUuOS04LjFjMC0wLjIsMC4xLTAuMiwwLjItMC4yIGMwLjEsMCw0LjQsMCw0LjQsMHY3LjZoNnY0LjVoLTZ2OS4zYzAsMS4zLDAuNSwzLDIuOSwzYzAuOCwwLDEuOS0wLjMsMi40LTAuNWwxLjQsNC4zQzQwLjEsNDYsMzcuNiw0NywzNS40LDQ3eicsXG4gIGNvbG9yOiAnIzIxQTVEOCdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMaXZlam91cm5hbEljb247IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi91dGlscy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5cbmZ1bmN0aW9uIGxpdmVqb3VybmFsTGluayh1cmwsIF9yZWYpIHtcbiAgdmFyIHRpdGxlID0gX3JlZi50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbjtcblxuICBhc3NlcnQodXJsLCAnbGl2ZWpvdXJuYWwudXJsJyk7XG5cbiAgcmV0dXJuICdodHRwczovL3d3dy5saXZlam91cm5hbC5jb20vdXBkYXRlLmJtbCcgKyBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgc3ViamVjdDogdGl0bGUsXG4gICAgZXZlbnQ6IGRlc2NyaXB0aW9uXG4gIH0pO1xufVxuXG52YXIgTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCdsaXZlam91cm5hbCcsIGxpdmVqb3VybmFsTGluaywgZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvblxuICB9O1xufSwge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmdcbn0sIHtcbiAgd2luZG93V2lkdGg6IDY2MCxcbiAgd2luZG93SGVpZ2h0OiA0NjBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMaXZlam91cm5hbFNoYXJlQnV0dG9uOyIsImltcG9ydCBpY29uRmFjdG9yeSBmcm9tICcuL3V0aWxzL2ljb25GYWN0b3J5JztcblxudmFyIE1haWxydUljb24gPSBpY29uRmFjdG9yeSgnbWFpbHJ1Jywge1xuICBpY29uOiAnTTM5LjcxMDc3NDUsMTcgQzQxLjY2MTk3NTUsMTcgNDMuMzIwNDk2NSwxOC43MzI4NTIgNDMuMzIwNDk2NSwyMS4wMDcyMjAyIEM0My4zMjA0OTY1LDIzLjI4MTU4ODUgNDEuNzU5NTM1NywyNS4wMTQ0NDA0IDM5LjcxMDc3NDUsMjUuMDE0NDQwNCBDMzcuNzU5NTczMiwyNS4wMTQ0NDA0IDM2LjEwMTA1MjIsMjMuMjgxNTg4NSAzNi4xMDEwNTIyLDIxLjAwNzIyMDIgQzM2LjEwMTA1MjIsMTguNzMyODUyIDM3Ljc1OTU3MzIsMTcgMzkuNzEwNzc0NSwxNyBaIE0yNC4zOTM4NDUxLDE3IEMyNi4zNDUwNDYzLDE3IDI4LjAwMzU2NzIsMTguNzMyODUyIDI4LjAwMzU2NzIsMjEuMDA3MjIwMiBDMjguMDAzNTY3MiwyMy4yODE1ODg1IDI2LjQ0MjYwNjMsMjUuMDE0NDQwNCAyNC4zOTM4NDUxLDI1LjAxNDQ0MDQgQzIyLjQ0MjY0MzksMjUuMDE0NDQwNCAyMC43ODQxMjI5LDIzLjI4MTU4ODUgMjAuNzg0MTIyOSwyMS4wMDcyMjAyIEMyMC43ODQxMjI5LDE4LjczMjg1MiAyMi40NDI2NDM5LDE3IDI0LjM5Mzg0NTEsMTcgWiBNNTEuOTA1NzgxNyw0My40MjU5OTI4IEM1MS43MTA2NjE3LDQ0LjA3NTgxMjMgNTEuNDE3OTgxNSw0NC42MTczMjg1IDUwLjkzMDE4MTIsNDQuOTQyMjM4MyBDNTAuNjM3NTAxLDQ1LjE1ODg0NDggNTAuMjQ3MjYwNyw0NS4yNjcxNDggNDkuODU3MDIwNSw0NS4yNjcxNDggQzQ5LjA3NjU0LDQ1LjI2NzE0OCA0OC4zOTM2MTk3LDQ0LjgzMzkzNSA0OC4wMDMzNzk1LDQ0LjA3NTgxMjMgTDQ2LjI0NzI5ODUsNDAuNzE4NDExNSBMNDUuNzU5NDk4LDQxLjI1OTkyNzggQzQyLjU0MDAxNjIsNDQuOTQyMjM4MyAzNy40NjY4OTMsNDcgMzIuMDAzNTI5Nyw0NyBDMjYuNTQwMTY2NCw0NyAyMS41NjQ2MDM0LDQ0Ljk0MjIzODMgMTguMjQ3NTYxNCw0MS4yNTk5Mjc4IEwxNy43NTk3NjExLDQwLjcxODQxMTUgTDE2LjAwMzY4LDQ0LjA3NTgxMjMgQzE1LjYxMzQzOTgsNDQuODMzOTM1IDE0LjkzMDUxOTQsNDUuMjY3MTQ4IDE0LjE1MDAzODksNDUuMjY3MTQ4IEMxMy43NTk3OTg2LDQ1LjI2NzE0OCAxMy4zNjk1NTg0LDQ1LjE1ODg0NDggMTMuMDc2ODc4Miw0NC45NDIyMzgzIEMxMi4wMDM3MTc2LDQ0LjI5MjQxODcgMTEuNzExMDM3NCw0Mi43NzYxNzMzIDEyLjI5NjM5NzgsNDEuNTg0ODM3NSBMMTYuNzg0MTYwNSwzMy4wMjg4ODA3IEMxNy4xNzQ0MDA3LDMyLjI3MDc1OCAxNy44NTczMjExLDMxLjgzNzU0NTMgMTguNjM3ODAxNiwzMS44Mzc1NDUzIEMxOS4wMjgwNDE4LDMxLjgzNzU0NTMgMTkuNDE4MjgyMSwzMS45NDU4NDg1IDE5LjcxMDk2MjMsMzIuMTYyNDU0OCBDMjAuNzg0MTIyOSwzMi44MTIyNzQzIDIxLjA3NjgwMzEsMzQuMzI4NTE5NyAyMC40OTE0NDI3LDM1LjUxOTg1NTUgTDIwLjEwMTIwMjUsMzYuMjc3OTc4MyBMMjAuMjk2MzIyNiwzNi42MDI4ODggQzIyLjQ0MjY0MzksMzkuOTYwMjg4OCAyNy4wMjc5NjY3LDQyLjIzNDY1NyAzMS45MDU5Njk3LDQyLjIzNDY1NyBDMzYuNzgzOTcyNyw0Mi4yMzQ2NTcgNDEuMzY5Mjk1NSw0MC4wNjg1OTIgNDMuNTE1NjE2NywzNi42MDI4ODggTDQzLjcxMDczNjcsMzYuMjc3OTc4MyBMNDMuMzIwNDk2NSwzNS42MjgxNTg3IEM0My4wMjc4MTY1LDM1LjA4NjY0MjUgNDIuOTMwMjU2MiwzNC40MzY4MjMgNDMuMTI1Mzc2NSwzMy43ODcwMDM1IEM0My4zMjA0OTY1LDMzLjEzNzE4NCA0My42MTMxNzY3LDMyLjU5NTY2NzggNDQuMTAwOTc3LDMyLjI3MDc1OCBDNDQuMzkzNjU3MiwzMi4wNTQxNTE1IDQ0Ljc4Mzg5NzUsMzEuOTQ1ODQ4NSA0NS4xNzQxMzc3LDMxLjk0NTg0ODUgQzQ1Ljk1NDYxODIsMzEuOTQ1ODQ4NSA0Ni42Mzc1Mzg1LDMyLjM3OTA2MTMgNDcuMDI3Nzc4NywzMy4xMzcxODQgTDUxLjUxNTU0MTUsNDEuNjkzMTQwOCBDNTIuMDAzMzQyLDQyLjIzNDY1NyA1Mi4xMDA5MDIsNDIuODg0NDc2NSA1MS45MDU3ODE3LDQzLjQyNTk5MjggWicsXG4gIG1hc2s6ICdNMCwwdjY0aDY0VjBIMHogTTM1LjQsNDdjLTYuNSwwLjEtOS00LjctOS04di05LjhoLTN2LTMuOWM0LjYtMS42LDUuNi01LjcsNS45LTguMWMwLTAuMiwwLjEtMC4yLDAuMi0wLjIgYzAuMSwwLDQuNCwwLDQuNCwwdjcuNmg2djQuNWgtNnY5LjNjMCwxLjMsMC41LDMsMi45LDNjMC44LDAsMS45LTAuMywyLjQtMC41bDEuNCw0LjNDNDAuMSw0NiwzNy42LDQ3LDM1LjQsNDd6JyxcbiAgY29sb3I6ICcjMTY4REUyJ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1haWxydUljb247IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi91dGlscy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5cbmZ1bmN0aW9uIG1haWxydUxpbmsodXJsLCBfcmVmKSB7XG4gIHZhciB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBpbWFnZSA9IF9yZWYuaW1hZ2U7XG5cbiAgYXNzZXJ0KHVybCwgJ21haWxydS51cmwnKTtcblxuICByZXR1cm4gJ2h0dHBzOi8vY29ubmVjdC5tYWlsLnJ1L3NoYXJlJyArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmw6IHVybCxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGltYWdldXJsOiBpbWFnZVxuICB9KTtcbn1cblxudmFyIE1haWxydVNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ21haWxydScsIG1haWxydUxpbmssIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgaW1hZ2U6IHByb3BzLmltYWdlXG4gIH07XG59LCB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn0sIHtcbiAgd2luZG93V2lkdGg6IDY2MCxcbiAgd2luZG93SGVpZ2h0OiA0NjBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNYWlscnVTaGFyZUJ1dHRvbjsiLCJpbXBvcnQgaWNvbkZhY3RvcnkgZnJvbSAnLi91dGlscy9pY29uRmFjdG9yeSc7XG5cbnZhciBPS0ljb24gPSBpY29uRmFjdG9yeSgnb2snLCB7XG4gIGljb246ICdNMzksMzBjLTEsMC0zLDItNywycy02LTItNy0yYy0xLjEsMC0yLDAuOS0yLDJjMCwxLDAuNiwxLjUsMSwxLjdjMS4yLDAuNyw1LDIuMyw1LDIuM2wtNC4zLDUuNCAgIGMwLDAtMC44LDAuOS0wLjgsMS42YzAsMS4xLDAuOSwyLDIsMmMxLDAsMS41LTAuNywxLjUtMC43UzMyLDM5LDMyLDM5YzAsMCw0LjUsNS4zLDQuNSw1LjNTMzcsNDUsMzgsNDVjMS4xLDAsMi0wLjksMi0yICAgYzAtMC42LTAuOC0xLjYtMC44LTEuNkwzNSwzNmMwLDAsMy44LTEuNiw1LTIuM2MwLjQtMC4zLDEtMC43LDEtMS43QzQxLDMwLjksNDAuMSwzMCwzOSwzMHogTTMyLDE1Yy0zLjksMC03LDMuMS03LDdzMy4xLDcsNyw3YzMuOSwwLDctMy4xLDctN1MzNS45LDE1LDMyLDE1eiBNMzIsMjUuNSAgIGMtMS45LDAtMy41LTEuNi0zLjUtMy41YzAtMS45LDEuNi0zLjUsMy41LTMuNWMxLjksMCwzLjUsMS42LDMuNSwzLjVDMzUuNSwyMy45LDMzLjksMjIuNSwzNSwyMi41eiAnLFxuICBtYXNrOiAnTTQ1LDFINUMyLjgsMSwxLDIuOCwxLDV2NDBjMCwyLjIsMS44LDQsNCw0aDQwYzIuMiwwLDQtMS44LDQtNFY1QzQ5LDIuOCw0Ny4yLDEsNDUsMXonLFxuICBjb2xvcjogJyNmMjcyMGMnXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgT0tJY29uOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vdXRpbHMvY3JlYXRlU2hhcmVCdXR0b24nO1xuXG5mdW5jdGlvbiBva0xpbmsodXJsLCBfcmVmKSB7XG4gIHZhciB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBpbWFnZSA9IF9yZWYuaW1hZ2U7XG5cbiAgYXNzZXJ0KHVybCwgJ29rLnVybCcpO1xuXG4gIHJldHVybiAnaHR0cHM6Ly9jb25uZWN0Lm9rLnJ1L29mZmVyJyArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmw6IHVybCxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGltYWdlVXJsOiBpbWFnZVxuICB9KTtcbn1cblxudmFyIE9LU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignb2snLCBva0xpbmssIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgaW1hZ2U6IHByb3BzLmltYWdlXG4gIH07XG59LCB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn0sIHtcbiAgd2luZG93V2lkdGg6IDY2MCxcbiAgd2luZG93SGVpZ2h0OiA0NjBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBPS1NoYXJlQnV0dG9uOyIsImltcG9ydCBqc29ucCBmcm9tICdqc29ucCc7XG5cbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBzaGFyZUNvdW50RmFjdG9yeSBmcm9tICcuL3V0aWxzL3NoYXJlQ291bnRGYWN0b3J5JztcblxuZnVuY3Rpb24gZ2V0T0tTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICBpZiAoIXdpbmRvdy5PSykge1xuICAgIHdpbmRvdy5PSyA9IHtcbiAgICAgIFNoYXJlOiB7XG4gICAgICAgIGNvdW50OiBmdW5jdGlvbiBjb3VudChpbmRleCwgX2NvdW50KSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5PSy5jYWxsYmFja3NbaW5kZXhdKF9jb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjYWxsYmFja3M6IFtdXG4gICAgfTtcbiAgfVxuXG4gIHZhciB1cmwgPSAnaHR0cHM6Ly9jb25uZWN0Lm9rLnJ1L2RrJztcbiAgdmFyIGluZGV4ID0gd2luZG93Lk9LLmNhbGxiYWNrcy5sZW5ndGg7XG5cbiAgd2luZG93Lk9ES0wgPSB7XG4gICAgdXBkYXRlQ291bnQ6IGZ1bmN0aW9uIHVwZGF0ZUNvdW50KGEsIGIpIHtcbiAgICAgIHdpbmRvdy5PSy5jYWxsYmFja3NbaW5kZXhdKGIpO1xuICAgIH1cbiAgfTtcbiAgd2luZG93Lk9LLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblxuICByZXR1cm4ganNvbnAodXJsICsgKDAsIG9iamVjdFRvR2V0UGFyYW1zKSh7XG4gICAgJ3N0LmNtZCc6ICdleHRMaWtlJyxcbiAgICB1aWQ6ICdvZGtsY250MCcsXG4gICAgcmVmOiBzaGFyZVVybFxuICB9KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYXJlQ291bnRGYWN0b3J5KGdldE9LU2hhcmVDb3VudCk7IiwiaW1wb3J0IGljb25GYWN0b3J5IGZyb20gJy4vdXRpbHMvaWNvbkZhY3RvcnknO1xuXG52YXIgUGludGVyZXN0SWNvbiA9IGljb25GYWN0b3J5KCdwaW50ZXJlc3QnLCB7XG4gIGljb246ICdNMzIsMTZjLTguOCwwLTE2LDcuMi0xNiwxNmMwLDYuNiwzLjksMTIuMiw5LjYsMTQuN2MwLTEuMSwwLTIuNSwwLjMtMy43IGMwLjMtMS4zLDIuMS04LjcsMi4xLTguN3MtMC41LTEtMC41LTIuNWMwLTIuNCwxLjQtNC4xLDMuMS00LjFjMS41LDAsMi4yLDEuMSwyLjIsMi40YzAsMS41LTAuOSwzLjctMS40LDUuNyBjLTAuNCwxLjcsMC45LDMuMSwyLjUsMy4xYzMsMCw1LjEtMy45LDUuMS04LjVjMC0zLjUtMi40LTYuMS02LjctNi4xYy00LjksMC03LjksMy42LTcuOSw3LjdjMCwxLjQsMC40LDIuNCwxLjEsMy4xIGMwLjMsMC4zLDAuMywwLjUsMC4yLDAuOWMtMC4xLDAuMy0wLjMsMS0wLjMsMS4zYy0wLjEsMC40LTAuNCwwLjYtMC44LDAuNGMtMi4yLTAuOS0zLjMtMy40LTMuMy02LjFjMC00LjUsMy44LTEwLDExLjQtMTAgYzYuMSwwLDEwLjEsNC40LDEwLjEsOS4yYzAsNi4zLTMuNSwxMS04LjYsMTFjLTEuNywwLTMuNC0wLjktMy45LTJjMCwwLTAuOSwzLjctMS4xLDQuNGMtMC4zLDEuMi0xLDIuNS0xLjYsMy40IGMxLjQsMC40LDMsMC43LDQuNSwwLjdjOC44LDAsMTYtNy4yLDE2LTE2QzQ4LDIzLjIsNDAuOCwxNiwzMiwxNnonLFxuICBtYXNrOiAnTTAsMHY2NGg2NFYwSDB6IE0zMiw0OGMtMS42LDAtMy4xLTAuMi00LjUtMC43YzAuNi0xLDEuMy0yLjIsMS42LTMuNGMwLjItMC43LDEuMS00LjQsMS4xLTQuNCBjMC42LDEuMSwyLjIsMiwzLjksMmM1LjEsMCw4LjYtNC43LDguNi0xMWMwLTQuNy00LTkuMi0xMC4xLTkuMmMtNy42LDAtMTEuNCw1LjUtMTEuNCwxMGMwLDIuOCwxLDUuMiwzLjMsNi4xIGMwLjQsMC4xLDAuNywwLDAuOC0wLjRjMC4xLTAuMywwLjItMSwwLjMtMS4zYzAuMS0wLjQsMC4xLTAuNS0wLjItMC45Yy0wLjYtMC44LTEuMS0xLjctMS4xLTMuMWMwLTQsMy03LjcsNy45LTcuNyBjNC4zLDAsNi43LDIuNiw2LjcsNi4xYzAsNC42LTIsOC41LTUuMSw4LjVjLTEuNywwLTIuOS0xLjQtMi41LTMuMWMwLjUtMiwxLjQtNC4yLDEuNC01LjdjMC0xLjMtMC43LTIuNC0yLjItMi40IGMtMS43LDAtMy4xLDEuOC0zLjEsNC4xYzAsMS41LDAuNSwyLjUsMC41LDIuNXMtMS44LDcuNC0yLjEsOC43Yy0wLjMsMS4yLTAuMywyLjYtMC4zLDMuN0MxOS45LDQ0LjIsMTYsMzguNiwxNiwzMiBjMC04LjgsNy4yLTE2LDE2LTE2YzguOCwwLDE2LDcuMiwxNiwxNkM0OCw0MC44LDQwLjgsNDgsMzIsNDh6JyxcbiAgY29sb3I6ICcjY2IyMTI4J1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBpbnRlcmVzdEljb247IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi91dGlscy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5cbmZ1bmN0aW9uIHBpbnRlcmVzdExpbmsodXJsLCBfcmVmKSB7XG4gIHZhciBtZWRpYSA9IF9yZWYubWVkaWEsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb247XG5cbiAgYXNzZXJ0KHVybCwgJ3BpbnRlcmVzdC51cmwnKTtcbiAgYXNzZXJ0KG1lZGlhLCAncGludGVyZXN0Lm1lZGlhJyk7XG5cbiAgcmV0dXJuICdodHRwczovL3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vJyArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmw6IHVybCxcbiAgICBtZWRpYTogbWVkaWEsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gIH0pO1xufVxuXG52YXIgUGludGVyZXN0U2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbigncGludGVyZXN0JywgcGludGVyZXN0TGluaywgZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgbWVkaWE6IHByb3BzLm1lZGlhLFxuICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvblxuICB9O1xufSwge1xuICBtZWRpYTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xufSwge1xuICB3aW5kb3dXaWR0aDogMTAwMCxcbiAgd2luZG93SGVpZ2h0OiA3MzBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQaW50ZXJlc3RTaGFyZUJ1dHRvbjsiLCJpbXBvcnQganNvbnAgZnJvbSAnanNvbnAnO1xuXG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgc2hhcmVDb3VudEZhY3RvcnkgZnJvbSAnLi91dGlscy9zaGFyZUNvdW50RmFjdG9yeSc7XG5cbmZ1bmN0aW9uIGdldFBpbnRlcmVzdFNoYXJlQ291bnQoc2hhcmVVcmwsIGNhbGxiYWNrKSB7XG4gIHZhciB1cmwgPSAnaHR0cHM6Ly9hcGkucGludGVyZXN0LmNvbS92MS91cmxzL2NvdW50Lmpzb24nO1xuXG4gIHJldHVybiBqc29ucCh1cmwgKyBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgdXJsOiBzaGFyZVVybFxuICB9KSwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgIGNhbGxiYWNrKGRhdGEgPyBkYXRhLmNvdW50IDogdW5kZWZpbmVkKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYXJlQ291bnRGYWN0b3J5KGdldFBpbnRlcmVzdFNoYXJlQ291bnQpOyIsImltcG9ydCBpY29uRmFjdG9yeSBmcm9tICcuL3V0aWxzL2ljb25GYWN0b3J5JztcblxudmFyIFJlZGRpdEljb24gPSBpY29uRmFjdG9yeSgncmVkZGl0Jywge1xuICBpY29uOiAnbSA1Mi44MTY1LDMxLjk0MjM2MiBjIDAsLTIuNDgwMyAtMi4wMjY0LC00LjQ5NjUgLTQuNTE2OSwtNC40OTY1IC0xLjIxNTUsMCAtMi4zMTcxLDAuNDg2MiAtMy4xMjgsMS4yNjgyIC0zLjA3NywtMi4wMjQ3IC03LjI0MDMsLTMuMzEzMyAtMTEuODUwNywtMy40NzgyIGwgMi41MjExLC03LjkzNzMgNi44MjcyLDEuNTk5NyAtMC4wMTAyLDAuMDk4NiBjIDAsMi4wMjgxIDEuNjU3NSwzLjY3NzEgMy42OTU4LDMuNjc3MSAyLjAzNjYsMCAzLjY5MjQsLTEuNjQ5IDMuNjkyNCwtMy42NzcxIDAsLTIuMDI4MSAtMS42NTc1LC0zLjY3ODggLTMuNjkyNCwtMy42Nzg4IC0xLjU2NCwwIC0yLjg5NjgsMC45NzU4IC0zLjQzNTcsMi4zNDQzIGwgLTcuMzU5MywtMS43MjU1IGMgLTAuMzIxMywtMC4wNzgyIC0wLjY0NzcsMC4xMDcxIC0wLjc0OCwwLjQyMzMgTCAzMiwyNS4yMTIwNjIgYyAtNC44MjQ2LDAuMDU3OCAtOS4xOTUzLDEuMzU2NiAtMTIuNDEsMy40NDI1IC0wLjgwNTgsLTAuNzQ0NiAtMS44NzUxLC0xLjIxMDQgLTMuMDU4MywtMS4yMTA0IC0yLjQ5MDUsMCAtNC41MTUyLDIuMDE3OSAtNC41MTUyLDQuNDk4MiAwLDEuNjQ5IDAuOTA2MSwzLjA3ODcgMi4yMzg5LDMuODYwNyAtMC4wODg0LDAuNDc5NCAtMC4xNDYyLDAuOTYzOSAtMC4xNDYyLDEuNDU2OSAwLDYuNjQ4NyA4LjE3MzYsMTIuMDU4MSAxOC4yMjIzLDEyLjA1ODEgMTAuMDQ4NywwIDE4LjIyNCwtNS40MDk0IDE4LjIyNCwtMTIuMDU4MSAwLC0wLjQ2NTggLTAuMDQ5MywtMC45MjQ4IC0wLjEyNzUsLTEuMzc3IDEuNDE0NCwtMC43NTk5IDIuMzg4NSwtMi4yMzA0IDIuMzg4NSwtMy45NDA2IHogbSAtMjkuMjgwOCwzLjA4NzIgYyAwLC0xLjQ3NTYgMS4yMDcsLTIuNjc3NSAyLjY4OTQsLTIuNjc3NSAxLjQ4MjQsMCAyLjY4NzcsMS4yMDE5IDIuNjg3NywyLjY3NzUgMCwxLjQ3NTYgLTEuMjA1MywyLjY3NTggLTIuNjg3NywyLjY3NTggLTEuNDgyNCwwIC0yLjY4OTQsLTEuMjAwMiAtMi42ODk0LC0yLjY3NTggeiBtIDE1LjQwMzcsNy45MzczIGMgLTEuMzU0OSwxLjM0ODEgLTMuNDgxNiwyLjAwNDMgLTYuNTAwOCwyLjAwNDMgbCAtMC4wMjIxLC0wLjAwNTEgLTAuMDIyMSwwLjAwNTEgYyAtMy4wMjA5LDAgLTUuMTQ3NiwtMC42NTYyIC02LjUwMDgsLTIuMDA0MyAtMC4yNDY1LC0wLjI0NDggLTAuMjQ2NSwtMC42NDQzIDAsLTAuODg5MSAwLjI0NjUsLTAuMjQ2NSAwLjY0NzcsLTAuMjQ2NSAwLjg5NDIsMCAxLjEwNSwxLjA5OTkgMi45MzkzLDEuNjMzNyA1LjYwNjYsMS42MzM3IGwgMC4wMjIxLDAuMDA1MSAwLjAyMjEsLTAuMDA1MSBjIDIuNjY3MywwIDQuNTAxNiwtMC41MzU1IDUuNjA2NiwtMS42MzU0IDAuMjQ2NSwtMC4yNDY1IDAuNjQ3NywtMC4yNDQ4IDAuODk0MiwwIDAuMjQ2NSwwLjI0NjUgMC4yNDY1LDAuNjQ0MyAwLDAuODkwOCB6IG0gLTAuMzIxMywtNS4yNjE1IGMgLTEuNDgyNCwwIC0yLjY4NzcsLTEuMjAwMiAtMi42ODc3LC0yLjY3NTggMCwtMS40NzU2IDEuMjA1MywtMi42Nzc1IDIuNjg3NywtMi42Nzc1IDEuNDgyNCwwIDIuNjg3NywxLjIwMTkgMi42ODc3LDIuNjc3NSAwLDEuNDc1NiAtMS4yMDUzLDIuNjc1OCAtMi42ODc3LDIuNjc1OCB6JyxcbiAgY29sb3I6ICcjNWY5OWNmJ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlZGRpdEljb247IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi91dGlscy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5cbmZ1bmN0aW9uIHJlZGRpdExpbmsodXJsLCBfcmVmKSB7XG4gIHZhciB0aXRsZSA9IF9yZWYudGl0bGU7XG5cbiAgYXNzZXJ0KHVybCwgJ3JlZGRpdC51cmwnKTtcblxuICByZXR1cm4gJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0JyArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmw6IHVybCxcbiAgICB0aXRsZTogdGl0bGVcbiAgfSk7XG59XG5cbnZhciBSZWRkaXRTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCdyZWRkaXQnLCByZWRkaXRMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGVcbiAgfTtcbn0sIHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn0sIHtcbiAgd2luZG93V2lkdGg6IDY2MCxcbiAgd2luZG93SGVpZ2h0OiA0NjBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBSZWRkaXRTaGFyZUJ1dHRvbjsiLCJpbXBvcnQganNvbnAgZnJvbSAnanNvbnAnO1xuXG5pbXBvcnQgc2hhcmVDb3VudEZhY3RvcnkgZnJvbSAnLi91dGlscy9zaGFyZUNvdW50RmFjdG9yeSc7XG5cbmZ1bmN0aW9uIGdldFJlZGRpdFNoYXJlQ291bnQoc2hhcmVVcmwsIGNhbGxiYWNrKSB7XG4gIHZhciBlbmRwb2ludCA9ICdodHRwczovL3d3dy5yZWRkaXQuY29tL2FwaS9pbmZvLmpzb24/bGltaXQ9MSZ1cmw9JyArIHNoYXJlVXJsO1xuXG4gIGpzb25wKGVuZHBvaW50LCB7IHBhcmFtOiAnanNvbnAnIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3BvbnNlKSB7XG4gICAgY2FsbGJhY2soIWVyciAmJiByZXNwb25zZSAmJiByZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiByZXNwb25zZS5kYXRhLmNoaWxkcmVuWzBdLmRhdGEuc2NvcmUgPyByZXNwb25zZS5kYXRhLmNoaWxkcmVuWzBdLmRhdGEuc2NvcmUgOiB1bmRlZmluZWQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hhcmVDb3VudEZhY3RvcnkoZ2V0UmVkZGl0U2hhcmVDb3VudCk7IiwiaW1wb3J0IGljb25GYWN0b3J5IGZyb20gJy4vdXRpbHMvaWNvbkZhY3RvcnknO1xuXG52YXIgVGVsZWdyYW1JY29uID0gaWNvbkZhY3RvcnkoJ3RlbGVncmFtJywge1xuICBpY29uOiAnbTQ1LjkwODczLDE1LjQ0MzM1Yy0wLjY5MDEsLTAuMDI4MSAtMS4zNzY2OCwwLjE0MDQ4IC0xLjk2MTQyLDAuNDEyNjVjLTAuODQ5ODksMC4zMjY2MSAtOC42MzkzOSwzLjMzOTg2IC0xNi41MjM3LDYuMzkxNzRjLTMuOTY4NSwxLjUzMjk2IC03LjkzMzQ5LDMuMDY1OTMgLTEwLjk4NTM3LDQuMjQwNjdjLTMuMDUwMTIsMS4xNzY1IC01LjM0Njk0LDIuMDUwOTggLTUuNDY4MSwyLjA5MzEyYy0wLjgwNzc1LDAuMjgwOTYgLTEuODk5OTYsMC42MzU2NiAtMi44MjcxMiwxLjcyNzg4Yy0wLjIzMzU0LDAuMjcyMTggLTAuNDY4ODQsMC42MjE2MSAtMC41ODgyNSwxLjEwMjc1Yy0wLjExOTQxLDAuNDgxMTQgLTAuMDY2NzMsMS4wOTIyMiAwLjE2NjgyLDEuNTcxNmMwLjQ2NTMzLDAuOTYwNTIgMS4yNTM3NiwxLjM1NzM3IDIuMTg0NDMsMS43MTM4M2MzLjA5MDUxLDAuOTkwMzcgNi4yODYzOCwxLjkzNTA4IDguOTMyNjMsMi44MjM2YzAuOTc2MzIsMy40NDE3MSAxLjkxNDAxLDYuODk1NzEgMi44NDExNiwxMC4zNDI2OGMwLjMwNTU0LDAuNjkxODUgMC45NzEwNSwwLjk0ODIzIDEuNjU3NjQsMC45NTUyNWwtMC4wMDM1MSwwLjAzNTEyYzAsMCAwLjUzOTA4LDAuMDUyNjggMS4wNjQxMiwtMC4wNzM3NWMwLjUyNjc5LC0wLjEyMjkyIDEuMTg4NzksLTAuNDI4NDYgMS43OTEwOSwtMC45OTIxMmMwLjY2MiwtMC42MjE2MSAyLjQ1ODM2LC0yLjM4ODEyIDMuNDc2ODMsLTMuMzg1NTJsNy42NzM2LDUuNjY0NzdsMC4wNjE0NiwwLjAzNTEyYzAsMCAwLjg0OTg5LDAuNTk3MDMgMi4wOTMxMiwwLjY4MTMyYzAuNjIxNjEsMC4wNDIxNCAxLjQzOTksLTAuMDc3MjYgMi4xNDIyOSwtMC41OTE3NmMwLjcwNzY2LC0wLjUxNjI2IDEuMTc2NSwtMS4zNDY4MyAxLjM5NiwtMi4yOTUwNmMwLjY1NjczLC0yLjg2MjI0IDUuMDA5NzksLTIzLjU3NzQ1IDUuNzUyNTcsLTI3LjAwNjg2bC0wLjAyMTA3LDAuMDgwNzdjMC41MTk3NywtMS45MzE1NyAwLjMyODM3LC0zLjcwMTU5IC0wLjg3MDk2LC00Ljc0OTkxYy0wLjYwMDU0LC0wLjUyMTUyIC0xLjI5MjQsLTAuNzQ5OCAtMS45ODQyNSwtMC43Nzk2NWwwLDAuMDAxNzZ6bS0wLjIwNzIsMy4yOTA2OWMwLjA0NzQxLDAuMDQzOSAwLjA0MzksMC4wNDM5IDAuMDAzNTEsMC4wNDc0MWMtMC4wMTIyOSwtMC4wMDM1MSAwLjE0MDQ4LDAuMjA3MiAtMC4xNTgwNCwxLjMyNTc2bC0wLjAxMjI5LDAuMDQyMTRsLTAuMDA4NzgsMC4wMzg2M2MtMC43NTg1OCwzLjUwNjY4IC01LjE1NTU0LDI0LjQwODAyIC01Ljc0MjAzLDI2Ljk2NDcyYy0wLjA4MDc3LDAuMzQ0MTcgLTAuMTE0MTQsMC4zMTk1OSAtMC4wOTQ4MiwwLjI5ODUyYy0wLjE3NTYsLTAuMDI2MzQgLTAuNTAwNDUsLTAuMTY1MDYgLTAuNTI2NzksLTAuMTc1NmwtMTMuMTM0NjgsLTkuNzAxNzVjNC40OTg4LC00LjMzMTk5IDkuMDk5NDUsLTguMjUzMDcgMTMuNzQ0LC0xMi40MzIyOWMwLjgyMTgsLTAuNDEyNjUgMC42ODQ4MywtMS42ODU3MyAtMC4yOTg1MiwtMS43MDY4MWMtMS4wNDMwNSwwLjI0NTg0IC0xLjkyMjc5LDAuOTk1NjQgLTIuODc5OCwxLjQ3NTAyYy01LjQ5OTcxLDMuMjYyNiAtMTEuMTE4ODIsNi4xMzE4NiAtMTYuNTU4ODIsOS40OTI3OWMtMi43OTIsLTAuOTcxMDUgLTUuNTc4NzMsLTEuNzc3MDQgLTguMTUyOTgsLTIuNTc2MDFjMi4yMzM2LC0wLjg5NTU1IDQuMDA4ODksLTEuNTU1NzkgNS43NTYwOCwtMi4yMzAwOWMzLjA1MTg4LC0xLjE3NjUgNy4wMTY4NywtMi43MDQyIDEwLjk4NTM3LC00LjI0MDY3YzcuOTQwNTEsLTMuMDY5NDQgMTUuOTI2NjcsLTYuMTYzNDYgMTYuNjIwMjgsLTYuNDMwMzdsMC4wNTYxOSwtMC4wMjI4M2wwLjA1MjY4LC0wLjAyMjgzYzAuMTkzMTYsLTAuMDg3OCAwLjMwMzc4LC0wLjA5NjU4IDAuMzU0NzEsLTAuMTAwMDljMCwwIC0wLjAxNzU2LC0wLjA1Nzk1IC0wLjAwMzUxLC0wLjA0NTY2bC0wLjAwMTc2LDB6bS0yMC45MTcxNSwyMi4wNjM4bDIuMTY2ODcsMS42MDE0NWMtMC45MzQxOCwwLjkxMzExIC0xLjgxNzQzLDEuNzczNTMgLTIuNDU0ODUsMi4zODgxMmwwLjI4Nzk4LC0zLjk4OTU3JyxcbiAgbWFzazogJ00wLDB2NjRoNjRWMEgweiBNMzIsNDhjLTEuNiwwLTMuMS0wLjItNC41LTAuN2MwLjYtMSwxLjMtMi4yLDEuNi0zLjRjMC4yLTAuNywxLjEtNC40LDEuMS00LjQgYzAuNiwxLjEsMi4yLDIsMy45LDJjNS4xLDAsOC42LTQuNyw4LjYtMTFjMC00LjctNC05LjItMTAuMS05LjJjLTcuNiwwLTExLjQsNS41LTExLjQsMTBjMCwyLjgsMSw1LjIsMy4zLDYuMSBjMC40LDAuMSwwLjcsMCwwLjgtMC40YzAuMS0wLjMsMC4yLTEsMC4zLTEuM2MwLjEtMC40LDAuMS0wLjUtMC4yLTAuOWMtMC42LTAuOC0xLjEtMS43LTEuMS0zLjFjMC00LDMtNy43LDcuOS03LjcgYzQuMywwLDYuNywyLjYsNi43LDYuMWMwLDQuNi0yLDguNS01LjEsOC41Yy0xLjcsMC0yLjktMS40LTIuNS0zLjFjMC41LTIsMS40LTQuMiwxLjQtNS43YzAtMS4zLTAuNy0yLjQtMi4yLTIuNCBjLTEuNywwLTMuMSwxLjgtMy4xLDQuMWMwLDEuNSwwLjUsMi41LDAuNSwyLjVzLTEuOCw3LjQtMi4xLDguN2MtMC4zLDEuMi0wLjMsMi42LTAuMywzLjdDMTkuOSw0NC4yLDE2LDM4LjYsMTYsMzIgYzAtOC44LDcuMi0xNiwxNi0xNmM4LjgsMCwxNiw3LjIsMTYsMTZDNDgsNDAuOCw0MC44LDQ4LDMyLDQ4eicsXG4gIGNvbG9yOiAnIzM3YWVlMidcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUZWxlZ3JhbUljb247IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi91dGlscy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5cbmZ1bmN0aW9uIHRlbGVncmFtTGluayh1cmwsIF9yZWYpIHtcbiAgdmFyIHRpdGxlID0gX3JlZi50aXRsZTtcblxuICBhc3NlcnQodXJsLCAndGVsZWdyYW0udXJsJyk7XG5cbiAgcmV0dXJuICdodHRwczovL3RlbGVncmFtLm1lL3NoYXJlLycgKyBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgdXJsOiB1cmwsXG4gICAgdGV4dDogdGl0bGVcbiAgfSk7XG59XG5cbnZhciBUZWxlZ3JhbVNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ3RlbGVncmFtJywgdGVsZWdyYW1MaW5rLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgdmlhOiBwcm9wcy52aWFcbiAgfTtcbn0sIHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZpYTogUHJvcFR5cGVzLnN0cmluZ1xufSwge1xuICB3aW5kb3dXaWR0aDogNTUwLFxuICB3aW5kb3dIZWlnaHQ6IDQwMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRlbGVncmFtU2hhcmVCdXR0b247IiwiaW1wb3J0IGljb25GYWN0b3J5IGZyb20gJy4vdXRpbHMvaWNvbkZhY3RvcnknO1xuXG52YXIgVHVtYmxySWNvbiA9IGljb25GYWN0b3J5KCd0dW1ibHInLCB7XG4gIGljb246ICdNMzkuMiw0MWMtMC42LDAuMy0xLjYsMC41LTIuNCwwLjVjLTIuNCwwLjEtMi45LTEuNy0yLjktM3YtOS4zaDZ2LTQuNWgtNlYxN2MwLDAtNC4zLDAtNC40LDAgYy0wLjEsMC0wLjIsMC4xLTAuMiwwLjJjLTAuMywyLjMtMS40LDYuNC01LjksOC4xdjMuOWgzVjM5YzAsMy40LDIuNSw4LjEsOSw4YzIuMiwwLDQuNy0xLDUuMi0xLjhMMzkuMiw0MXonLFxuICBtYXNrOiAnTTAsMHY2NGg2NFYwSDB6IE0zNS40LDQ3Yy02LjUsMC4xLTktNC43LTktOHYtOS44aC0zdi0zLjljNC42LTEuNiw1LjYtNS43LDUuOS04LjFjMC0wLjIsMC4xLTAuMiwwLjItMC4yIGMwLjEsMCw0LjQsMCw0LjQsMHY3LjZoNnY0LjVoLTZ2OS4zYzAsMS4zLDAuNSwzLDIuOSwzYzAuOCwwLDEuOS0wLjMsMi40LTAuNWwxLjQsNC4zQzQwLjEsNDYsMzcuNiw0NywzNS40LDQ3eicsXG4gIGNvbG9yOiAnIzJjNDc2Midcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUdW1ibHJJY29uOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vdXRpbHMvY3JlYXRlU2hhcmVCdXR0b24nO1xuXG5mdW5jdGlvbiB0dW1ibHJMaW5rKHVybCwgX3JlZikge1xuICB2YXIgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgY2FwdGlvbiA9IF9yZWYuY2FwdGlvbixcbiAgICAgIHRhZ3MgPSBfcmVmLnRhZ3MsXG4gICAgICBwb3N0dHlwZSA9IF9yZWYucG9zdHR5cGU7XG5cbiAgYXNzZXJ0KHVybCwgJ3R1bWJsci51cmwnKTtcblxuICByZXR1cm4gJ2h0dHBzOi8vd3d3LnR1bWJsci5jb20vd2lkZ2V0cy9zaGFyZS90b29sJyArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICBjYW5vbmljYWxVcmw6IHVybCxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgY2FwdGlvbjogY2FwdGlvbixcbiAgICB0YWdzOiB0YWdzLFxuICAgIHBvc3R0eXBlOiBwb3N0dHlwZVxuICB9KTtcbn1cblxudmFyIFR1bWJsclNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oJ3R1bWJscicsIHR1bWJsckxpbmssIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICB0YWdzOiBwcm9wcy50YWdzLmpvaW4oJywnKSxcbiAgICBjYXB0aW9uOiBwcm9wcy5jYXB0aW9uLFxuICAgIHBvc3R0eXBlOiBwcm9wcy5wb3N0dHlwZVxuICB9O1xufSwge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2FwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcG9zdHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhZ3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXG59LCB7XG4gIHRhZ3M6IFtdLFxuICBwb3N0dHlwZTogJ2xpbmsnLFxuICB3aW5kb3dXaWR0aDogNjYwLFxuICB3aW5kb3dIZWlnaHQ6IDQ2MFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFR1bWJsclNoYXJlQnV0dG9uOyIsImltcG9ydCBqc29ucCBmcm9tICdqc29ucCc7XG5cbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBzaGFyZUNvdW50RmFjdG9yeSBmcm9tICcuL3V0aWxzL3NoYXJlQ291bnRGYWN0b3J5JztcblxuZnVuY3Rpb24gZ2V0VHVtYmxyU2hhcmVDb3VudChzaGFyZVVybCwgY2FsbGJhY2spIHtcbiAgdmFyIGVuZHBvaW50ID0gJ2h0dHBzOi8vYXBpLnR1bWJsci5jb20vdjIvc2hhcmUvc3RhdHMnO1xuXG4gIHJldHVybiBqc29ucChlbmRwb2ludCArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmw6IHNoYXJlVXJsXG4gIH0pLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgY2FsbGJhY2soZGF0YSA/IGRhdGEubm90ZV9jb3VudCA6IHVuZGVmaW5lZCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGFyZUNvdW50RmFjdG9yeShnZXRUdW1ibHJTaGFyZUNvdW50KTsiLCJpbXBvcnQgaWNvbkZhY3RvcnkgZnJvbSAnLi91dGlscy9pY29uRmFjdG9yeSc7XG5cbnZhciBUd2l0dGVySWNvbiA9IGljb25GYWN0b3J5KCd0d2l0dGVyJywge1xuICBpY29uOiAnTTQ4LDIyLjFjLTEuMiwwLjUtMi40LDAuOS0zLjgsMWMxLjQtMC44LDIuNC0yLjEsMi45LTMuNmMtMS4zLDAuOC0yLjcsMS4zLTQuMiwxLjYgQzQxLjcsMTkuOCw0MCwxOSwzOC4yLDE5Yy0zLjYsMC02LjYsMi45LTYuNiw2LjZjMCwwLjUsMC4xLDEsMC4yLDEuNWMtNS41LTAuMy0xMC4zLTIuOS0xMy41LTYuOWMtMC42LDEtMC45LDIuMS0wLjksMy4zIGMwLDIuMywxLjIsNC4zLDIuOSw1LjVjLTEuMSwwLTIuMS0wLjMtMy0wLjhjMCwwLDAsMC4xLDAsMC4xYzAsMy4yLDIuMyw1LjgsNS4zLDYuNGMtMC42LDAuMS0xLjEsMC4yLTEuNywwLjJjLTAuNCwwLTAuOCwwLTEuMi0wLjEgYzAuOCwyLjYsMy4zLDQuNSw2LjEsNC42Yy0yLjIsMS44LTUuMSwyLjgtOC4yLDIuOGMtMC41LDAtMS4xLDAtMS42LTAuMWMyLjksMS45LDYuNCwyLjksMTAuMSwyLjljMTIuMSwwLDE4LjctMTAsMTguNy0xOC43IGMwLTAuMywwLTAuNiwwLTAuOEM0NiwyNC41LDQ3LjEsMjMuNCw0OCwyMi4xeicsXG4gIG1hc2s6ICdNMCwwdjY0aDY0VjBIMHogTTQ0LjcsMjUuNWMwLDAuMywwLDAuNiwwLDAuOEM0NC43LDM1LDM4LjEsNDUsMjYuMSw0NWMtMy43LDAtNy4yLTEuMS0xMC4xLTIuOSBjMC41LDAuMSwxLDAuMSwxLjYsMC4xYzMuMSwwLDUuOS0xLDguMi0yLjhjLTIuOS0wLjEtNS4zLTItNi4xLTQuNmMwLjQsMC4xLDAuOCwwLjEsMS4yLDAuMWMwLjYsMCwxLjItMC4xLDEuNy0wLjIgYy0zLTAuNi01LjMtMy4zLTUuMy02LjRjMCwwLDAtMC4xLDAtMC4xYzAuOSwwLjUsMS45LDAuOCwzLDAuOGMtMS44LTEuMi0yLjktMy4yLTIuOS01LjVjMC0xLjIsMC4zLTIuMywwLjktMy4zIGMzLjIsNCw4LjEsNi42LDEzLjUsNi45Yy0wLjEtMC41LTAuMi0xLTAuMi0xLjVjMC0zLjYsMi45LTYuNiw2LjYtNi42YzEuOSwwLDMuNiwwLjgsNC44LDIuMWMxLjUtMC4zLDIuOS0wLjgsNC4yLTEuNiBjLTAuNSwxLjUtMS41LDIuOC0yLjksMy42YzEuMy0wLjIsMi42LTAuNSwzLjgtMUM0Ny4xLDIzLjQsNDYsMjQuNSw0NC43LDI1LjV6JyxcbiAgY29sb3I6ICcjMDBhY2VkJ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFR3aXR0ZXJJY29uOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vdXRpbHMvY3JlYXRlU2hhcmVCdXR0b24nO1xuXG5mdW5jdGlvbiB0d2l0dGVyTGluayh1cmwsIF9yZWYpIHtcbiAgdmFyIHRpdGxlID0gX3JlZi50aXRsZSxcbiAgICAgIHZpYSA9IF9yZWYudmlhLFxuICAgICAgX3JlZiRoYXNodGFncyA9IF9yZWYuaGFzaHRhZ3MsXG4gICAgICBoYXNodGFncyA9IF9yZWYkaGFzaHRhZ3MgPT09IHVuZGVmaW5lZCA/IFtdIDogX3JlZiRoYXNodGFncztcblxuICBhc3NlcnQodXJsLCAndHdpdHRlci51cmwnKTtcbiAgYXNzZXJ0KEFycmF5LmlzQXJyYXkoaGFzaHRhZ3MpLCAndHdpdHRlci5oYXNodGFncyBpcyBub3QgYW4gYXJyYXknKTtcblxuICByZXR1cm4gJ2h0dHBzOi8vdHdpdHRlci5jb20vc2hhcmUnICsgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgIHVybDogdXJsLFxuICAgIHRleHQ6IHRpdGxlLFxuICAgIHZpYTogdmlhLFxuICAgIGhhc2h0YWdzOiBoYXNodGFncy5qb2luKCcsJylcbiAgfSk7XG59XG5cbnZhciBUd2l0dGVyU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbigndHdpdHRlcicsIHR3aXR0ZXJMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBoYXNodGFnczogcHJvcHMuaGFzaHRhZ3MsXG4gICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgIHZpYTogcHJvcHMudmlhXG4gIH07XG59LCB7XG4gIGhhc2h0YWdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZpYTogUHJvcFR5cGVzLnN0cmluZ1xufSwge1xuICB3aW5kb3dXaWR0aDogNTUwLFxuICB3aW5kb3dIZWlnaHQ6IDQwMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFR3aXR0ZXJTaGFyZUJ1dHRvbjsiLCJpbXBvcnQgaWNvbkZhY3RvcnkgZnJvbSAnLi91dGlscy9pY29uRmFjdG9yeSc7XG5cbnZhciBWS0ljb24gPSBpY29uRmFjdG9yeSgndmsnLCB7XG4gIGljb246ICdNNDQuOTQsNDQuODRoLTAuMmMtMi4xNy0uMzYtMy42Ni0xLjkyLTQuOTItMy4zN0MzOS4xLDQwLjY2LDM4LDM4LjgxLDM2LjcsMzljLTEuODUuMy0uOTMsMy41Mi0xLjcxLDQuOS0wLjYyLDEuMTEtMy4yOS45MS01LjEyLDAuNzEtNS43OS0uNjItOC43NS0zLjc3LTExLjM1LTcuMTRBNjQuMTMsNjQuMTMsMCwwLDEsMTEuNiwyNmExMC41OSwxMC41OSwwLDAsMS0xLjUxLTQuNDlDMTEsMjAuNywxMi41NiwyMSwxNC4xMSwyMWMxLjMxLDAsMy4zNi0uMjksNC4zMi4yQzE5LDIxLjQ2LDE5LjU3LDIzLDIwLDI0YTM3LjE4LDM3LjE4LDAsMCwwLDMuMzEsNS44MmMwLjU2LDAuODEsMS40MSwyLjM1LDIuNDEsMi4xNHMxLjA2LTIuNjMsMS4xLTQuMThjMC0xLjc3LDAtNC0uNS00LjlTMjUsMjIsMjQuMTUsMjEuNDdjMC43My0xLjQ5LDIuNzItMS42Myw1LjEyLTEuNjMsMiwwLDQuODQtLjIzLDUuNjIsMS4xMnMwLjI1LDMuODUuMiw1LjcxYy0wLjA2LDIuMDktLjQxLDQuMjUsMSw1LjIxLDEuMDktLjEyLDEuNjgtMS4yLDIuMzEtMkEyOCwyOCwwLDAsMCw0MS43MiwyNGMwLjQ0LTEsLjkxLTIuNjUsMS43MS0zLDEuMjEtLjQ3LDMuMTUtMC4xLDQuOTItMC4xLDEuNDYsMCw0LjA1LS40MSw0LjUyLjYxLDAuMzksMC44NS0uNzUsMy0xLjEsMy41N2E2MS44OCw2MS44OCwwLDAsMS00LjEyLDUuNjFjLTAuNTguNzgtMS43OCwyLTEuNzEsMy4yNywwLjA1LDAuOTQsMSwxLjY3LDEuNzEsMi4zNWEzMy4xMiwzMy4xMiwwLDAsMSwzLjkyLDQuMThjMC40NywwLjYyLDEuNSwyLDEuNCwyLjc2QzUyLjY2LDQ1LjgxLDQ2Ljg4LDQ0LjI0LDQ0Ljk0LDQ0Ljg0WicsXG4gIG1hc2s6ICdNMCwwdjY0aDY0VjBIMHogTTQ0Ljk0LDQ0Ljg0aC0wLjJjLTIuMTctLjM2LTMuNjYtMS45Mi00LjkyLTMuMzdDMzkuMSw0MC42NiwzOCwzOC44MSwzNi43LDM5Yy0xLjg1LjMtLjkzLDMuNTItMS43MSw0LjktMC42MiwxLjExLTMuMjkuOTEtNS4xMiwwLjcxLTUuNzktLjYyLTguNzUtMy43Ny0xMS4zNS03LjE0QTY0LjEzLDY0LjEzLDAsMCwxLDExLjYsMjZhMTAuNTksMTAuNTksMCwwLDEtMS41MS00LjQ5QzExLDIwLjcsMTIuNTYsMjEsMTQuMTEsMjFjMS4zMSwwLDMuMzYtLjI5LDQuMzIuMkMxOSwyMS40NiwxOS41NywyMywyMCwyNGEzNy4xOCwzNy4xOCwwLDAsMCwzLjMxLDUuODJjMC41NiwwLjgxLDEuNDEsMi4zNSwyLjQxLDIuMTRzMS4wNi0yLjYzLDEuMS00LjE4YzAtMS43NywwLTQtLjUtNC45UzI1LDIyLDI0LjE1LDIxLjQ3YzAuNzMtMS40OSwyLjcyLTEuNjMsNS4xMi0xLjYzLDIsMCw0Ljg0LS4yMyw1LjYyLDEuMTJzMC4yNSwzLjg1LjIsNS43MWMtMC4wNiwyLjA5LS40MSw0LjI1LDEsNS4yMSwxLjA5LS4xMiwxLjY4LTEuMiwyLjMxLTJBMjgsMjgsMCwwLDAsNDEuNzIsMjRjMC40NC0xLC45MS0yLjY1LDEuNzEtMywxLjIxLS40NywzLjE1LTAuMSw0LjkyLTAuMSwxLjQ2LDAsNC4wNS0uNDEsNC41Mi42MSwwLjM5LDAuODUtLjc1LDMtMS4xLDMuNTdhNjEuODgsNjEuODgsMCwwLDEtNC4xMiw1LjYxYy0wLjU4Ljc4LTEuNzgsMi0xLjcxLDMuMjcsMC4wNSwwLjk0LDEsMS42NywxLjcxLDIuMzVhMzMuMTIsMzMuMTIsMCwwLDEsMy45Miw0LjE4YzAuNDcsMC42MiwxLjUsMiwxLjQsMi43NkM1Mi42Niw0NS44MSw0Ni44OCw0NC4yNCw0NC45NCw0NC44NFonLFxuICBjb2xvcjogJyM0NTY2OGUnXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVktJY29uOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vdXRpbHMvY3JlYXRlU2hhcmVCdXR0b24nO1xuXG5mdW5jdGlvbiB2a0xpbmsodXJsLCBfcmVmKSB7XG4gIHZhciB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBpbWFnZSA9IF9yZWYuaW1hZ2U7XG5cbiAgYXNzZXJ0KHVybCwgJ3ZrLnVybCcpO1xuXG4gIHJldHVybiAnaHR0cHM6Ly92ay5jb20vc2hhcmUucGhwJyArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmw6IHVybCxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGltYWdlOiBpbWFnZVxuICB9KTtcbn1cblxudmFyIFZLU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbigndmsnLCB2a0xpbmssIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgaW1hZ2U6IHByb3BzLmltYWdlXG4gIH07XG59LCB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmdcbn0sIHtcbiAgd2luZG93V2lkdGg6IDY2MCxcbiAgd2luZG93SGVpZ2h0OiA0NjBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBWS1NoYXJlQnV0dG9uOyIsImltcG9ydCBqc29ucCBmcm9tICdqc29ucCc7XG5cbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBzaGFyZUNvdW50RmFjdG9yeSBmcm9tICcuL3V0aWxzL3NoYXJlQ291bnRGYWN0b3J5JztcblxuZnVuY3Rpb24gZ2V0VktTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICBpZiAoIXdpbmRvdy5WSykge1xuICAgIHdpbmRvdy5WSyA9IHtcbiAgICAgIFNoYXJlOiB7XG4gICAgICAgIGNvdW50OiBmdW5jdGlvbiBjb3VudChpbmRleCwgX2NvdW50KSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5WSy5jYWxsYmFja3NbaW5kZXhdKF9jb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjYWxsYmFja3M6IFtdXG4gICAgfTtcbiAgfVxuXG4gIHZhciB1cmwgPSAnaHR0cHM6Ly92ay5jb20vc2hhcmUucGhwJztcbiAgdmFyIGluZGV4ID0gd2luZG93LlZLLmNhbGxiYWNrcy5sZW5ndGg7XG5cbiAgd2luZG93LlZLLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblxuICByZXR1cm4ganNvbnAodXJsICsgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgIGFjdDogJ2NvdW50JyxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgdXJsOiBzaGFyZVVybFxuICB9KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYXJlQ291bnRGYWN0b3J5KGdldFZLU2hhcmVDb3VudCk7IiwiaW1wb3J0IGljb25GYWN0b3J5IGZyb20gJy4vdXRpbHMvaWNvbkZhY3RvcnknO1xuXG52YXIgVmliZXJJY29uID0gaWNvbkZhY3RvcnkoJ3ZpYmVyJywge1xuICBpY29uOiAnbTMxLjAsMTIuM2M5LjAsMC4yIDE2LjQsNi4yIDE4LjAsMTUuMmMwLjIsMS41IDAuMywzLjAgMC40LDQuNmExLjAsMS4wIDAgMCAxIC0wLjgsMS4ybC0wLjEsMGExLjEsMS4xIDAgMCAxIC0xLjAsLTEuMmwwLDBjLTAuMCwtMS4yIC0wLjEsLTIuNSAtMC4zLC0zLjhhMTYuMSwxNi4xIDAgMCAwIC0xMy4wLC0xMy41Yy0xLjAsLTAuMSAtMi4wLC0wLjIgLTMuMCwtMC4zYy0wLjYsLTAuMCAtMS40LC0wLjEgLTEuNiwtMC44YTEuMSwxLjEgMCAwIDEgMC45LC0xLjJsMC42LDBsMC4wLC0wLjB6bTEwLjYsMzkuMmExOS45LDE5LjkgMCAwIDEgLTIuMSwtMC42Yy02LjksLTIuOSAtMTMuMiwtNi42IC0xOC4zLC0xMi4yYTQ3LjUsNDcuNSAwIDAgMSAtNy4wLC0xMC43Yy0wLjgsLTEuOCAtMS42LC0zLjcgLTIuNCwtNS42Yy0wLjYsLTEuNyAwLjMsLTMuNCAxLjQsLTQuN2ExMS4zLDExLjMgMCAwIDEgMy43LC0yLjhhMi40LDIuNCAwIDAgMSAzLjAsMC43YTM5LjAsMzkuMCAwIDAgMSA0LjcsNi41YTMuMSwzLjEgMCAwIDEgLTAuOCw0LjJjLTAuMywwLjIgLTAuNiwwLjUgLTEuMCwwLjhhMy4zLDMuMyAwIDAgMCAtMC43LDAuN2EyLjEsMi4xIDAgMCAwIC0wLjEsMS45YzEuNyw0LjkgNC43LDguNyA5LjcsMTAuOGE1LjAsNS4wIDAgMCAwIDIuNSwwLjZjMS41LC0wLjEgMi4wLC0xLjggMy4xLC0yLjdhMi45LDIuOSAwIDAgMSAzLjUsLTAuMWMxLjEsMC43IDIuMiwxLjQgMy4zLDIuMmEzNy44LDM3LjggMCAwIDEgMy4xLDIuNGEyLjQsMi40IDAgMCAxIDAuNywzLjBhMTAuNCwxMC40IDAgMCAxIC00LjQsNC44YTEwLjgsMTAuOCAwIDAgMSAtMS45LDAuNmMtMC43LC0wLjIgMC42LC0wLjIgMCwwbDAuMCwwbDAsLTAuMHptMy4xLC0yMS40YTQuMiw0LjIgMCAwIDEgLTAuMCwwLjZhMS4wLDEuMCAwIDAgMSAtMS45LDAuMWEyLjcsMi43IDAgMCAxIC0wLjEsLTAuOGExMC45LDEwLjkgMCAwIDAgLTEuNCwtNS41YTEwLjIsMTAuMiAwIDAgMCAtNC4yLC00LjBhMTIuMywxMi4zIDAgMCAwIC0zLjQsLTEuMGMtMC41LC0wLjAgLTEuMCwtMC4xIC0xLjUsLTAuMmEwLjksMC45IDAgMCAxIC0wLjksLTEuMGwwLC0wLjFhMC45LDAuOSAwIDAgMSAwLjksLTAuOWwwLjEsMGExNC4xLDE0LjEgMCAwIDEgNS45LDEuNWExMS45LDExLjkgMCAwIDEgNi41LDkuM2MwLDAuMSAwLjAsMC4zIDAuMCwwLjVjMCwwLjQgMC4wLDAuOSAwLjAsMS41bDAsMGwwLjAsMC4wem0tNS42LC0wLjJhMS4xLDEuMSAwIDAgMSAtMS4yLC0wLjlsMCwtMC4xYTExLjMsMTEuMyAwIDAgMCAtMC4yLC0xLjRhNC4wLDQuMCAwIDAgMCAtMS41LC0yLjNhMy45LDMuOSAwIDAgMCAtMS4yLC0wLjVjLTAuNSwtMC4xIC0xLjEsLTAuMSAtMS42LC0wLjJhMS4wLDEuMCAwIDAgMSAtMC44LC0xLjFsMCwwbDAsMGExLjAsMS4wIDAgMCAxIDEuMSwtMC44YzMuNCwwLjIgNi4wLDIuMCA2LjMsNi4yYTIuOCwyLjggMCAwIDEgMCwwLjhhMC44LDAuOCAwIDAgMSAtMC44LDAuN2wwLDBsMC4wLC0wLjB6JyxcbiAgbWFzazogJycsXG4gIGNvbG9yOiAnIzdDNTI5RSdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBWaWJlckljb247IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi91dGlscy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5cbmZ1bmN0aW9uIHZpYmVyTGluayh1cmwsIF9yZWYpIHtcbiAgdmFyIHRpdGxlID0gX3JlZi50aXRsZTtcblxuICBhc3NlcnQodXJsLCAndmliZXIudXJsJyk7XG4gIHJldHVybiAndmliZXI6Ly9mb3J3YXJkJyArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB0ZXh0OiAodGl0bGUgfHwgJycpICsgJyAnICsgdXJsXG4gIH0pO1xufVxuXG52YXIgVmliZXJTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCd2aWJlcicsIHZpYmVyTGluaywgZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IHByb3BzLnRpdGxlXG4gIH07XG59LCB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59LCB7XG4gIHdpbmRvd1dpZHRoOiA2NjAsXG4gIHdpbmRvd0hlaWdodDogNDYwXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVmliZXJTaGFyZUJ1dHRvbjsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5cbmltcG9ydCBvYmplY3RUb0dldFBhcmFtcyBmcm9tICcuL3V0aWxzL29iamVjdFRvR2V0UGFyYW1zJztcbmltcG9ydCBjcmVhdGVTaGFyZUJ1dHRvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVNoYXJlQnV0dG9uJztcblxuZnVuY3Rpb24gd2VpYm9MaW5rKHVybCwgX3JlZikge1xuICB2YXIgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgaW1hZ2UgPSBfcmVmLmltYWdlO1xuXG4gIGFzc2VydCh1cmwsICd3ZWliby51cmwnKTtcbiAgYXNzZXJ0KGltYWdlLCAnd2VpYm8uaW1hZ2UnKTtcblxuICByZXR1cm4gJ2h0dHA6Ly9zZXJ2aWNlLndlaWJvLmNvbS9zaGFyZS9zaGFyZS5waHA/JyArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmw6IHVybCxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgcGljOiBpbWFnZVxuICB9KTtcbn1cblxudmFyIFdlaWJvU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignd2VpYm8nLCB3ZWlib0xpbmssIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBpbWFnZTogcHJvcHMuaW1hZ2VcbiAgfTtcbn0sIHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nXG59LCB7XG4gIHdpbmRvd1dpZHRoOiA1NTAsXG4gIHdpbmRvd0hlaWdodDogNDAwXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgV2VpYm9TaGFyZUJ1dHRvbjsiLCJpbXBvcnQgaWNvbkZhY3RvcnkgZnJvbSAnLi91dGlscy9pY29uRmFjdG9yeSc7XG5cbnZhciBXaGF0c2FwcEljb24gPSBpY29uRmFjdG9yeSgnd2hhdHNhcHAnLCB7XG4gIGljb246ICdtNDIuMzIyODYsMzMuOTMyODdjLTAuNTE3OCwtMC4yNTg5IC0zLjA0NzI2LC0xLjQ5NjQ0IC0zLjUyMTA1LC0xLjY2NzMyYy0wLjQ3MTIsLTAuMTczNDYgLTAuODE1NTQsLTAuMjU4OSAtMS4xNTk4NywwLjI1ODljLTAuMzQxNzUsMC41MTAwNCAtMS4zMzA3NSwxLjY2NDc0IC0xLjYzMTA4LDIuMDA2NDhjLTAuMzAwMzIsMC4zMzY1OCAtMC42MDA2NCwwLjM2MjQ3IC0xLjExMzI3LDAuMTI5NDVjLTAuNTE3OCwtMC4yNTg5IC0yLjE3OTk0LC0wLjgwMjU5IC00LjE0NzU5LC0yLjU2MzEyYy0xLjUzMjY5LC0xLjM3MjE3IC0yLjU2MzEyLC0zLjA1NTAzIC0yLjg2NjAzLC0zLjU3MjgzYy0wLjMwMDMzLC0wLjUxNzggLTAuMDMzNjYsLTAuODAyNTkgMC4yMjUyNCwtMS4wNjE0OWMwLjIzMzAxLC0wLjIzMzAxIDAuNTE3OCwtMC41OTU0NyAwLjc3NjcsLTAuOTA2MTZjMC4yNTM3MiwtMC4zMTA2OCAwLjMzNjU3LC0wLjUxNzggMC41MTI2MiwtMC44NTQzN2MwLjE3MDg4LC0wLjM2MjQ2IDAuMDg1NDQsLTAuNjQ3MjUgLTAuMDQ0MDIsLTAuOTA2MTVjLTAuMTI5NDUsLTAuMjU4OSAtMS4xNTk4NywtMi43OTYxMyAtMS41ODk2NCwtMy44MDU4NGMtMC40MTQyNCwtMS4wMDk3MSAtMC44NDE0MiwtMC44ODAyNyAtMS4xNTk4NywtMC44ODAyN2MtMC4yOTc3MywtMC4wMjU4OCAtMC42NDIwOCwtMC4wMjU4OCAtMC45ODM4MiwtMC4wMjU4OGMtMC4zNDY5MywwIC0wLjkwNjE2LDAuMTI5NDUgLTEuMzc3MzYsMC42MjEzNmMtMC40NzEyLDAuNTE3OCAtMS44MDE5NCwxLjc2MDUzIC0xLjgwMTk0LDQuMjcxODZjMCwyLjUxMTM0IDEuODQ1OTYsNC45NDUgMi4xMDIyNyw1LjMwNzQ3YzAuMjU4OSwwLjMzNjU3IDMuNjM0OTcsNS41MTQ1OCA4LjgwMjYyLDcuNzQxMTNjMS4yMzIzNywwLjUxNzggMi4xOTAzLDAuODI4NDggMi45NDExMSwxLjA4NzM4YzEuMjMyMzcsMC4zODgzNiAyLjM1NTk5LDAuMzM2NTcgMy4yNDQwMiwwLjIwNzEyYzAuOTkxNTksLTAuMTU1MzQgMy4wNDk4NSwtMS4yNDI3MiAzLjQ3OTYzLC0yLjQ1OTU2YzAuNDQwMTMsLTEuMjE2ODMgMC40NDAxMywtMi4yMjY1NCAwLjMxMDY4LC0yLjQ1OTU1Yy0wLjEyOTQ1LC0wLjIzMzAxIC0wLjQ2NjAxLC0wLjM2MjQ3IC0wLjk4MzgyLC0wLjU5NTQ4bS05LjQwMDY4LDEyLjg0NDA3bC0wLjAyNTg5LDBjLTMuMDU1MDMsMCAtNi4wODQxNywtMC44Mjg0OSAtOC43MjQ5NSwtMi4zODE4OWwtMC42MjEzNiwtMC4zNzAyM2wtNi40NzI1MiwxLjY4Mjg2bDEuNzM0NjMsLTYuMjkxMjlsLTAuNDE0MjQsLTAuNjQ3MjVjLTEuNzA4NzUsLTIuNzE4NDYgLTIuNjE0OSwtNS44NTExNiAtMi42MTQ5LC05LjA3NzA2YzAsLTkuMzk4MDkgNy42ODkzNCwtMTcuMDYxNTUgMTcuMTU5OTMsLTE3LjA2MTU1YzQuNTgyNTMsMCA4Ljg4MDI5LDEuNzg2NDIgMTIuMTE2NTUsNS4wMjI2OGMzLjIzNjI1LDMuMjEwMzYgNS4wMjI2Nyw3LjUwODEyIDUuMDIyNjcsMTIuMDY0NzZjLTAuMDA3OCw5LjM5ODEgLTcuNjk3MTIsMTcuMDYxNTUgLTE3LjE0Njk5LDE3LjA2MTU1bTE0LjU4OTA2LC0zMS41ODg0NmMtMy45MzUyOSwtMy44MDU4NCAtOS4xMTMzLC01Ljk1NDcxIC0xNC42Mjc4OSwtNS45NTQ3MWMtMTEuMzYwNTUsMCAtMjAuNjA4NDgsOS4yMDY1IC0yMC42MTYyNSwyMC41MjU2NGMwLDMuNjE2ODQgMC45NDc1Nyw3LjE0NTY1IDIuNzUyMTEsMTAuMjYyODJsLTIuOTI1NTcsMTAuNjM1NjRsMTAuOTMzMzcsLTIuODUzMDljMy4wMTM2LDEuNjMxMDggNi40MDUyLDIuNDk1OCA5Ljg1NjM0LDIuNDk4MzlsMC4wMTAzNywwYzExLjM2NTc0LDAgMjAuNjE4ODQsLTkuMjA5MSAyMC42MjQwMywtMjAuNTMwODJjMCwtNS40ODA5MyAtMi4xNDExMSwtMTAuNjQwODEgLTYuMDMyMzksLTE0LjUxOTE1JyxcbiAgbWFzazogJ00wLDB2NjRoNjRWMEgweiBNMzIsNDhjLTEuNiwwLTMuMS0wLjItNC41LTAuN2MwLjYtMSwxLjMtMi4yLDEuNi0zLjRjMC4yLTAuNywxLjEtNC40LDEuMS00LjQgYzAuNiwxLjEsMi4yLDIsMy45LDJjNS4xLDAsOC42LTQuNyw4LjYtMTFjMC00LjctNC05LjItMTAuMS05LjJjLTcuNiwwLTExLjQsNS41LTExLjQsMTBjMCwyLjgsMSw1LjIsMy4zLDYuMSBjMC40LDAuMSwwLjcsMCwwLjgtMC40YzAuMS0wLjMsMC4yLTEsMC4zLTEuM2MwLjEtMC40LDAuMS0wLjUtMC4yLTAuOWMtMC42LTAuOC0xLjEtMS43LTEuMS0zLjFjMC00LDMtNy43LDcuOS03LjcgYzQuMywwLDYuNywyLjYsNi43LDYuMWMwLDQuNi0yLDguNS01LjEsOC41Yy0xLjcsMC0yLjktMS40LTIuNS0zLjFjMC41LTIsMS40LTQuMiwxLjQtNS43YzAtMS4zLTAuNy0yLjQtMi4yLTIuNCBjLTEuNywwLTMuMSwxLjgtMy4xLDQuMWMwLDEuNSwwLjUsMi41LDAuNSwyLjVzLTEuOCw3LjQtMi4xLDguN2MtMC4zLDEuMi0wLjMsMi42LTAuMywzLjdDMTkuOSw0NC4yLDE2LDM4LjYsMTYsMzIgYzAtOC44LDcuMi0xNiwxNi0xNmM4LjgsMCwxNiw3LjIsMTYsMTZDNDgsNDAuOCw0MC44LDQ4LDMyLDQ4eicsXG4gIGNvbG9yOiAnIzJjYjc0Midcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBXaGF0c2FwcEljb247IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuXG5pbXBvcnQgb2JqZWN0VG9HZXRQYXJhbXMgZnJvbSAnLi91dGlscy9vYmplY3RUb0dldFBhcmFtcyc7XG5pbXBvcnQgY3JlYXRlU2hhcmVCdXR0b24gZnJvbSAnLi91dGlscy9jcmVhdGVTaGFyZUJ1dHRvbic7XG5cbmZ1bmN0aW9uIHdoYXRzYXBwTGluayh1cmwsIF9yZWYpIHtcbiAgdmFyIHRpdGxlID0gX3JlZi50aXRsZSxcbiAgICAgIHNlcGFyYXRvciA9IF9yZWYuc2VwYXJhdG9yO1xuXG4gIGFzc2VydCh1cmwsICd3aGF0c2FwcC51cmwnKTtcbiAgcmV0dXJuICdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZCcgKyBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgdGV4dDogdGl0bGUgPyB0aXRsZSArIHNlcGFyYXRvciArIHVybCA6IHVybFxuICB9KTtcbn1cblxudmFyIFdoYXRzYXBwU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbignd2hhdHNhcHAnLCB3aGF0c2FwcExpbmssIGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBzZXBhcmF0b3I6IHByb3BzLnNlcGFyYXRvclxuICB9O1xufSwge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VwYXJhdG9yOiBQcm9wVHlwZXMuc3RyaW5nXG59LCB7XG4gIHNlcGFyYXRvcjogJyAnLFxuICB3aW5kb3dXaWR0aDogNTUwLFxuICB3aW5kb3dIZWlnaHQ6IDQwMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFdoYXRzYXBwU2hhcmVCdXR0b247IiwiaW1wb3J0IGljb25GYWN0b3J5IGZyb20gJy4vdXRpbHMvaWNvbkZhY3RvcnknO1xuXG52YXIgV29ya3BsYWNlSWNvbiA9IGljb25GYWN0b3J5KCd3b3JrcGxhY2UnLCB7XG4gIGljb246ICdNMzQuMDE5LDEwLjI5MmMwLjIxLDAuMDE3LDAuNDIzLDAuMDM0LDAuNjM2LDAuMDQ5IGMzLjY1NywwLjI2Miw2Ljk3NiwxLjQ2NCw5LjkyOSwzLjYzNWMzLjMzMSwyLjQ0OCw1LjYzNSw1LjY1LDYuOTE0LDkuNTg0YzAuNjk5LDIuMTUyLDAuOTgzLDQuMzY1LDAuODg1LDYuNjIzIGMtMC4xMzYsMy4xNzEtMS4wMDgsNi4xMy0yLjYxOSw4Ljg2N2MtMC40NDIsMC43NS0wLjkwOCwxLjQ5Mi0xLjQ5NSwyLjE0MWMtMC41ODgsMC42NTEtMS4yOSwxLjE0MS0yLjE0NiwxLjM4MyBjLTEuNDk2LDAuNDI2LTMuMjQ3LTAuMjgzLTMuOTYxLTEuNjQyYy0wLjI2LTAuNDk0LTAuNDQyLTEuMDI4LTAuNjU0LTEuNTQ4Yy0xLjE1Ni0yLjgzOC0yLjMxMS01LjY3OS0zLjQ2NS04LjUxOSBjLTAuMDE3LTAuMDQyLTAuMDM3LTAuMDgyLTAuMDY1LTAuMTQ1Yy0wLjEwMSwwLjI0NS0wLjE5MiwwLjQ3Mi0wLjI4NCwwLjY5OGMtMS4yMzcsMy4wNTEtMi40NzUsNi4xMDMtMy43MTEsOS4xNTUgYy0wLjQ2NiwxLjE1My0xLjM1MSwxLjgxNS0yLjUzOCwyLjA0NWMtMS4zOTEsMC4yNjctMi41NzctMC4xNTQtMy40OTYtMS4yNDdjLTAuMTc0LTAuMjA5LTAuMzEtMC40NjQtMC40MTUtMC43MTcgYy0yLjEyOC01LjIyLTQuMjQ4LTEwLjQ0Mi02LjM3LTE1LjY2NWMtMC4wMTItMC4wMjktMC4wMjEtMC4wNTktMC4wMzYtMC4xMDRjMC4wNTQtMC4wMDMsMC4xMDMtMC4wMDYsMC4xNS0wLjAwNiBjMS40OTgtMC4wMDEsMi45OTcsMCw0LjQ5NS0wLjAwNGMwLjEyLTAuMDAxLDAuMTc2LDAuMDMsMC4yMjIsMC4xNDZjMS41NTcsMy44NDYsMy4xMTcsNy42OTEsNC42NzksMTEuNTM2IGMwLjAxOCwwLjA0NiwwLjAzOSwwLjA5MSwwLjA2NywwLjE1OWMwLjI3My0wLjY3MywwLjUzNi0xLjMyLDAuNzk3LTEuOTY4YzEuMDY0LTIuNjI3LDIuMTM3LTUuMjUsMy4xOS03Ljg4MyBjMC40ODItMS4yMDgsMS4zNzYtMS45MTcsMi42MjEtMi4xMzVjMS40NTQtMC4yNTUsMi42NDQsMC4yNTcsMy41MjIsMS40NDljMC4xMzMsMC4xOCwwLjIyOSwwLjM5MywwLjMxMywwLjYwMyBjMS40MjUsMy40OTUsMi44NDgsNi45OTEsNC4yNjksMTAuNDg4YzAuMDIsMC4wNDcsMC4wNCwwLjA5MywwLjA3MywwLjE3MmMwLjE5Ni0wLjMyNywwLjM4NS0wLjYyNSwwLjU1OS0wLjkzNSBjMC43ODMtMS4zOTcsMS4zMjMtMi44ODYsMS42MTQtNC40NjFjMC4yNDItMS4zMTIsMC4zMDQtMi42MzQsMC4xODctMy45NjJjLTAuMjQyLTIuNzIxLTEuMTYtNS4xOTItMi43OTItNy4zOCBjLTIuMTkzLTIuOTM5LTUuMDg2LTQuODI0LTguNjczLTUuNjI1Yy0xLjU1My0wLjM0Ni0zLjEyNC0wLjQwNS00LjcwNS0wLjI1N2MtMy4xNjIsMC4yOTgtNi4wMzYsMS4zNjYtOC41ODUsMy4yNTggYy0zLjQxNCwyLjUzNC01LjYzOCw1Ljg3MS02LjYyMywxMC4wMTZjLTAuNDE3LDEuNzYtMC41NDYsMy41NDctMC4zODQsNS4zNDhjMC40MTcsNC42MDEsMi4zNTksOC40NDQsNS44MDQsMTEuNTE3IGMyLjMyNSwyLjA3Myw1LjAzNywzLjM5Myw4LjA5NCwzLjk4OWMxLjYxNywwLjMxNywzLjI0NywwLjM5NSw0Ljg4OSwwLjI0MmMxLTAuMDk0LDEuOTgyLTAuMjY4LDIuOTUyLTAuNTI5IGMwLjA0LTAuMDEsMC4wODEtMC4wMTgsMC4xMjgtMC4wMjhjMCwxLjUyNiwwLDMuMDQ3LDAsNC41ODZjLTAuNDAyLDAuMDc0LTAuODA1LDAuMTU0LTEuMjEsMC4yMjEgYy0wLjg2MSwwLjE0LTEuNzI4LDAuMjMxLTIuNjAxLDAuMjU4Yy0wLjAzNSwwLjAwMi0wLjA3MSwwLjAxMy0wLjEwOCwwLjAyMWMtMC40OTMsMC0wLjk4MywwLTEuNDc2LDAgYy0wLjA0OS0wLjAwNy0wLjEtMC4wMTgtMC4xNDktMC4wMjJjLTAuMzE1LTAuMDE5LTAuNjI5LTAuMDMzLTAuOTQ1LTAuMDU4Yy0xLjM2Mi0wLjEwNS0yLjcwMi0wLjM0Ni00LjAxNy0wLjcxNiBjLTMuMjU0LTAuOTE0LTYuMTQ1LTIuNDk1LTguNjYtNC43NTJjLTIuMTk1LTEuOTcxLTMuOTI2LTQuMjktNS4xNzYtNi45NjNjLTEuMTUyLTIuNDY2LTEuODIyLTUuMDU3LTEuOTkzLTcuNzc0IGMtMC4wMTQtMC4yMjYtMC4wMzMtMC40NTEtMC4wNS0wLjY3NmMwLTAuNTAyLDAtMS4wMDMsMC0xLjUwNGMwLjAwOC0wLjA0OSwwLjAyLTAuMDk5LDAuMDIyLTAuMTQ4IGMwLjAzNi0xLjAyNSwwLjE1Mi0yLjA0MywwLjMzOC0zLjA1MmMwLjQ4MS0yLjYxNiwxLjQwOS01LjA2NiwyLjgtNy4zMzFjMi4yMjYtMy42MjUsNS4yNS02LjM4Niw5LjA3NC04LjI1NCBjMi41MzYtMS4yNCw1LjIxNy0xLjk0Nyw4LjAzNy0yLjEyNmMwLjIzLTAuMDE1LDAuNDYxLTAuMDM0LDAuNjkxLTAuMDUxQzMzLjA1MiwxMC4yOTIsMzMuNTM1LDEwLjI5MiwzNC4wMTksMTAuMjkyeicsXG4gIGNvbG9yOiAnIzNiM2Q0YSdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBXb3JrcGxhY2VJY29uOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuaW1wb3J0IG9iamVjdFRvR2V0UGFyYW1zIGZyb20gJy4vdXRpbHMvb2JqZWN0VG9HZXRQYXJhbXMnO1xuaW1wb3J0IGNyZWF0ZVNoYXJlQnV0dG9uIGZyb20gJy4vdXRpbHMvY3JlYXRlU2hhcmVCdXR0b24nO1xuXG5mdW5jdGlvbiB3b3JrcGxhY2VMaW5rKHVybCwgX3JlZikge1xuICB2YXIgcXVvdGUgPSBfcmVmLnF1b3RlLFxuICAgICAgaGFzaHRhZyA9IF9yZWYuaGFzaHRhZztcblxuICBhc3NlcnQodXJsLCAnd29ya3BsYWNlLnVybCcpO1xuXG4gIHJldHVybiAnaHR0cHM6Ly93b3JrLmZhY2Vib29rLmNvbS9zaGFyZXIucGhwJyArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1OiB1cmwsXG4gICAgcXVvdGU6IHF1b3RlLFxuICAgIGhhc2h0YWc6IGhhc2h0YWdcbiAgfSk7XG59XG5cbnZhciBXb3JrcGxhY2VTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKCd3b3JrcGxhY2UnLCB3b3JrcGxhY2VMaW5rLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBxdW90ZTogcHJvcHMucXVvdGUsXG4gICAgaGFzaHRhZzogcHJvcHMuaGFzaHRhZ1xuICB9O1xufSwge1xuICBxdW90ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGFzaHRhZzogUHJvcFR5cGVzLnN0cmluZ1xufSwge1xuICB3aW5kb3dXaWR0aDogNTUwLFxuICB3aW5kb3dIZWlnaHQ6IDQwMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtwbGFjZVNoYXJlQnV0dG9uOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRmFjZWJvb2tTaGFyZUNvdW50IH0gZnJvbSAnLi9GYWNlYm9va1NoYXJlQ291bnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHb29nbGVQbHVzU2hhcmVDb3VudCB9IGZyb20gJy4vR29vZ2xlUGx1c1NoYXJlQ291bnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rZWRpblNoYXJlQ291bnQgfSBmcm9tICcuL0xpbmtlZGluU2hhcmVDb3VudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpbnRlcmVzdFNoYXJlQ291bnQgfSBmcm9tICcuL1BpbnRlcmVzdFNoYXJlQ291bnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWS1NoYXJlQ291bnQgfSBmcm9tICcuL1ZLU2hhcmVDb3VudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE9LU2hhcmVDb3VudCB9IGZyb20gJy4vT0tTaGFyZUNvdW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVkZGl0U2hhcmVDb3VudCB9IGZyb20gJy4vUmVkZGl0U2hhcmVDb3VudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFR1bWJsclNoYXJlQ291bnQgfSBmcm9tICcuL1R1bWJsclNoYXJlQ291bnQnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZhY2Vib29rU2hhcmVCdXR0b24gfSBmcm9tICcuL0ZhY2Vib29rU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHb29nbGVQbHVzU2hhcmVCdXR0b24gfSBmcm9tICcuL0dvb2dsZVBsdXNTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmtlZGluU2hhcmVCdXR0b24gfSBmcm9tICcuL0xpbmtlZGluU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyU2hhcmVCdXR0b24gfSBmcm9tICcuL1R3aXR0ZXJTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpbnRlcmVzdFNoYXJlQnV0dG9uIH0gZnJvbSAnLi9QaW50ZXJlc3RTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZLU2hhcmVCdXR0b24gfSBmcm9tICcuL1ZLU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPS1NoYXJlQnV0dG9uIH0gZnJvbSAnLi9PS1NoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVsZWdyYW1TaGFyZUJ1dHRvbiB9IGZyb20gJy4vVGVsZWdyYW1TaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdoYXRzYXBwU2hhcmVCdXR0b24gfSBmcm9tICcuL1doYXRzYXBwU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWRkaXRTaGFyZUJ1dHRvbiB9IGZyb20gJy4vUmVkZGl0U2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbWFpbFNoYXJlQnV0dG9uIH0gZnJvbSAnLi9FbWFpbFNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHVtYmxyU2hhcmVCdXR0b24gfSBmcm9tICcuL1R1bWJsclNoYXJlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbiB9IGZyb20gJy4vTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haWxydVNoYXJlQnV0dG9uIH0gZnJvbSAnLi9NYWlscnVTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZpYmVyU2hhcmVCdXR0b24gfSBmcm9tICcuL1ZpYmVyU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JrcGxhY2VTaGFyZUJ1dHRvbiB9IGZyb20gJy4vV29ya3BsYWNlU2hhcmVCdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5lU2hhcmVCdXR0b24gfSBmcm9tICcuL0xpbmVTaGFyZUJ1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdlaWJvU2hhcmVCdXR0b24gfSBmcm9tICcuL1dlaWJvU2hhcmVCdXR0b24nO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZhY2Vib29rSWNvbiB9IGZyb20gJy4vRmFjZWJvb2tJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHdpdHRlckljb24gfSBmcm9tICcuL1R3aXR0ZXJJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR29vZ2xlUGx1c0ljb24gfSBmcm9tICcuL0dvb2dsZVBsdXNJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlua2VkaW5JY29uIH0gZnJvbSAnLi9MaW5rZWRpbkljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQaW50ZXJlc3RJY29uIH0gZnJvbSAnLi9QaW50ZXJlc3RJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVktJY29uIH0gZnJvbSAnLi9WS0ljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPS0ljb24gfSBmcm9tICcuL09LSWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlbGVncmFtSWNvbiB9IGZyb20gJy4vVGVsZWdyYW1JY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2hhdHNhcHBJY29uIH0gZnJvbSAnLi9XaGF0c2FwcEljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWRkaXRJY29uIH0gZnJvbSAnLi9SZWRkaXRJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHVtYmxySWNvbiB9IGZyb20gJy4vVHVtYmxySWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haWxydUljb24gfSBmcm9tICcuL01haWxydUljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbWFpbEljb24gfSBmcm9tICcuL0VtYWlsSWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpdmVqb3VybmFsSWNvbiB9IGZyb20gJy4vTGl2ZWpvdXJuYWxJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmliZXJJY29uIH0gZnJvbSAnLi9WaWJlckljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JrcGxhY2VJY29uIH0gZnJvbSAnLi9Xb3JrcGxhY2VJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluZUljb24gfSBmcm9tICcuL0xpbmVJY29uJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgX09iamVjdCRrZXlzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cyc7XG5pbXBvcnQgX3R5cGVvZiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGlzSW50ZXJuZXRFeHBsb3JlckJlZm9yZSBmcm9tICcuL2llRGV0ZWN0aW9uJztcblxudmFyIGlzUHJvbWlzZSA9IGZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcbiAgcmV0dXJuICEhb2JqICYmICgodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbmZ1bmN0aW9uIHdpbmRvd09wZW4odXJsLCBfcmVmLCBvblNoYXJlV2luZG93Q2xvc2UpIHtcbiAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBfcmVmJGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuICAgICAgaGVpZ2h0ID0gX3JlZiRoZWlnaHQgPT09IHVuZGVmaW5lZCA/IDQwMCA6IF9yZWYkaGVpZ2h0LFxuICAgICAgX3JlZiR3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICB3aWR0aCA9IF9yZWYkd2lkdGggPT09IHVuZGVmaW5lZCA/IDU1MCA6IF9yZWYkd2lkdGg7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4gIHZhciBsZWZ0ID0gd2luZG93Lm91dGVyV2lkdGggLyAyICsgKHdpbmRvdy5zY3JlZW5YIHx8IHdpbmRvdy5zY3JlZW5MZWZ0IHx8IDApIC0gd2lkdGggLyAyO1xuICB2YXIgdG9wID0gd2luZG93Lm91dGVySGVpZ2h0IC8gMiArICh3aW5kb3cuc2NyZWVuWSB8fCB3aW5kb3cuc2NyZWVuVG9wIHx8IDApIC0gaGVpZ2h0IC8gMjtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cblxuICB2YXIgY29uZmlnID0ge1xuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBsZWZ0OiBsZWZ0LFxuICAgIHRvcDogdG9wLFxuICAgIGxvY2F0aW9uOiAnbm8nLFxuICAgIHRvb2xiYXI6ICdubycsXG4gICAgc3RhdHVzOiAnbm8nLFxuICAgIGRpcmVjdG9yaWVzOiAnbm8nLFxuICAgIG1lbnViYXI6ICdubycsXG4gICAgc2Nyb2xsYmFyczogJ3llcycsXG4gICAgcmVzaXphYmxlOiAnbm8nLFxuICAgIGNlbnRlcnNjcmVlbjogJ3llcycsXG4gICAgY2hyb21lOiAneWVzJ1xuICB9O1xuXG4gIHZhciBzaGFyZURpYWxvZyA9IHdpbmRvdy5vcGVuKHVybCwgaXNJbnRlcm5ldEV4cGxvcmVyQmVmb3JlKDEwKSA/ICcnIDogbmFtZSwgX09iamVjdCRrZXlzKGNvbmZpZykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4ga2V5ICsgJz0nICsgY29uZmlnW2tleV07XG4gIH0pLmpvaW4oJywgJykpO1xuXG4gIGlmIChvblNoYXJlV2luZG93Q2xvc2UpIHtcbiAgICB2YXIgaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHNoYXJlRGlhbG9nID09PSBudWxsIHx8IHNoYXJlRGlhbG9nLmNsb3NlZCkge1xuICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICBvblNoYXJlV2luZG93Q2xvc2Uoc2hhcmVEaWFsb2cpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZXR1cm4gc2hhcmVEaWFsb2c7XG59XG5cbnZhciBTaGFyZUJ1dHRvbiA9IGZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2hhcmVCdXR0b24sIF9QdXJlQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTaGFyZUJ1dHRvbigpIHtcbiAgICB2YXIgX3JlZjI7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNoYXJlQnV0dG9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYyID0gU2hhcmVCdXR0b24uX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoU2hhcmVCdXR0b24pKS5jYWxsLmFwcGx5KF9yZWYyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wcy5vbkNsaWNrLFxuICAgICAgICAgIG9wZW5XaW5kb3cgPSBfdGhpcyRwcm9wcy5vcGVuV2luZG93LFxuICAgICAgICAgIGJlZm9yZU9uQ2xpY2sgPSBfdGhpcyRwcm9wcy5iZWZvcmVPbkNsaWNrO1xuXG5cbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdmFyIGxpbmsgPSBfdGhpcy5saW5rKCk7XG5cbiAgICAgIHZhciBjbGlja0hhbmRsZXIgPSBvcGVuV2luZG93ID8gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMub3BlbldpbmRvdyhsaW5rKTtcbiAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvbkNsaWNrKGxpbmspO1xuICAgICAgfTtcblxuICAgICAgaWYgKGJlZm9yZU9uQ2xpY2spIHtcbiAgICAgICAgdmFyIHJldHVyblZhbCA9IGJlZm9yZU9uQ2xpY2soKTtcblxuICAgICAgICBpZiAoaXNQcm9taXNlKHJldHVyblZhbCkpIHtcbiAgICAgICAgICByZXR1cm5WYWwudGhlbihjbGlja0hhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsaWNrSGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGlja0hhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5vbktleVByZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gMTMgfHwgZS5rZXkgPT09ICcgJyB8fCBlLmtleSA9PT0gMzIpIHtcbiAgICAgICAgX3RoaXMub25DbGljayhlKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5vcGVuV2luZG93ID0gZnVuY3Rpb24gKGxpbmspIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvblNoYXJlV2luZG93Q2xvc2UgPSBfdGhpcyRwcm9wczIub25TaGFyZVdpbmRvd0Nsb3NlLFxuICAgICAgICAgIHdpbmRvd1dpZHRoID0gX3RoaXMkcHJvcHMyLndpbmRvd1dpZHRoLFxuICAgICAgICAgIHdpbmRvd0hlaWdodCA9IF90aGlzJHByb3BzMi53aW5kb3dIZWlnaHQ7XG5cblxuICAgICAgdmFyIHdpbmRvd09wdGlvbnMgPSB7XG4gICAgICAgIGhlaWdodDogd2luZG93SGVpZ2h0LFxuICAgICAgICB3aWR0aDogd2luZG93V2lkdGhcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvd09wZW4obGluaywgd2luZG93T3B0aW9ucywgb25TaGFyZVdpbmRvd0Nsb3NlKTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTaGFyZUJ1dHRvbiwgW3tcbiAgICBrZXk6ICdsaW5rJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGluaygpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHVybCA9IF9wcm9wcy51cmwsXG4gICAgICAgICAgb3B0cyA9IF9wcm9wcy5vcHRzLFxuICAgICAgICAgIG5ldHdvcmtMaW5rID0gX3Byb3BzLm5ldHdvcmtMaW5rO1xuXG4gICAgICByZXR1cm4gbmV0d29ya0xpbmsodXJsLCBvcHRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWRkaXRpb25hbFByb3BzID0gX3Byb3BzMi5hZGRpdGlvbmFsUHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMi5kaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZFN0eWxlID0gX3Byb3BzMi5kaXNhYmxlZFN0eWxlLFxuICAgICAgICAgIG5hbWUgPSBfcHJvcHMyLm5hbWUsXG4gICAgICAgICAgbmV0d29yayA9IF9wcm9wczIubmV0d29yayxcbiAgICAgICAgICByb2xlID0gX3Byb3BzMi5yb2xlLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzMi5zdHlsZSxcbiAgICAgICAgICB0YWJJbmRleCA9IF9wcm9wczIudGFiSW5kZXg7XG5cblxuICAgICAgdmFyIGNsYXNzZXMgPSBjeCgnU29jaWFsTWVkaWFTaGFyZUJ1dHRvbicsICdTb2NpYWxNZWRpYVNoYXJlQnV0dG9uLS0nICsgbmV0d29yaywge1xuICAgICAgICAnU29jaWFsTWVkaWFTaGFyZUJ1dHRvbi0tZGlzYWJsZWQnOiAhIWRpc2FibGVkLFxuICAgICAgICBkaXNhYmxlZDogISFkaXNhYmxlZFxuICAgICAgfSwgY2xhc3NOYW1lKTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9LCBhZGRpdGlvbmFsUHJvcHMsIHtcbiAgICAgICAgICByb2xlOiByb2xlLFxuICAgICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgICAgb25LZXlQcmVzczogdGhpcy5vbktleVByZXNzLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlLCBkaXNhYmxlZCA/IGRpc2FibGVkU3R5bGUgOiB7fSkgfSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTaGFyZUJ1dHRvbjtcbn0oUHVyZUNvbXBvbmVudCk7XG5cblNoYXJlQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgYWRkaXRpb25hbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuZXR3b3JrOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5ldHdvcmtMaW5rOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb3B0czogUHJvcFR5cGVzLm9iamVjdCxcbiAgb3BlbldpbmRvdzogUHJvcFR5cGVzLmJvb2wsXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgd2luZG93V2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHdpbmRvd0hlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgYmVmb3JlT25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2hhcmVXaW5kb3dDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbn07XG5TaGFyZUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkU3R5bGU6IHtcbiAgICBvcGFjaXR5OiAwLjZcbiAgfSxcbiAgb3BlbldpbmRvdzogdHJ1ZSxcbiAgcm9sZTogJ2J1dHRvbicsXG4gIHRhYkluZGV4OiAnMCdcbn07XG5cblxuZnVuY3Rpb24gY3JlYXRlU2hhcmVCdXR0b24obmV0d29yaywgbGluaykge1xuICB2YXIgb3B0c01hcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7fTtcbiAgfTtcbiAgdmFyIHByb3BUeXBlcyA9IGFyZ3VtZW50c1szXTtcbiAgdmFyIGRlZmF1bHRQcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDoge307XG5cbiAgdmFyIENyZWF0ZWRCdXR0b24gPSBmdW5jdGlvbiBDcmVhdGVkQnV0dG9uKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmVCdXR0b24sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgbmV0d29yazogbmV0d29yayxcbiAgICAgIG5ldHdvcmtMaW5rOiBsaW5rLFxuICAgICAgb3B0czogb3B0c01hcChwcm9wcykgfSkpO1xuICB9O1xuXG4gIENyZWF0ZWRCdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuICBDcmVhdGVkQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuICByZXR1cm4gQ3JlYXRlZEJ1dHRvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hhcmVCdXR0b247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGljb25GYWN0b3J5KG5ldHdvcmssIGljb25Db25maWcpIHtcbiAgdmFyIEljb24gPSBmdW5jdGlvbiBJY29uKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgaWNvbkJnU3R5bGUgPSBwcm9wcy5pY29uQmdTdHlsZSxcbiAgICAgICAgbG9nb0ZpbGxDb2xvciA9IHByb3BzLmxvZ29GaWxsQ29sb3IsXG4gICAgICAgIHJvdW5kID0gcHJvcHMucm91bmQsXG4gICAgICAgIHNpemUgPSBwcm9wcy5zaXplO1xuXG5cbiAgICB2YXIgYmFzZVN0eWxlID0ge1xuICAgICAgd2lkdGg6IHNpemUsXG4gICAgICBoZWlnaHQ6IHNpemVcbiAgICB9O1xuXG4gICAgdmFyIGNsYXNzZXMgPSAnc29jaWFsLWljb24gc29jaWFsLWljb24tLScgKyBuZXR3b3JrICsgJyAnICsgY2xhc3NOYW1lO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgc3R5bGU6IGJhc2VTdHlsZSB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3N2ZycsXG4gICAgICAgIHtcbiAgICAgICAgICB2aWV3Qm94OiAnMCAwIDY0IDY0JyxcbiAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2cnLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgIXJvdW5kID8gUmVhY3QuY3JlYXRlRWxlbWVudCgncmVjdCcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnNjQnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnNjQnLFxuICAgICAgICAgICAgZmlsbDogaWNvbkNvbmZpZy5jb2xvcixcbiAgICAgICAgICAgIHN0eWxlOiBpY29uQmdTdHlsZSB9KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2NpcmNsZScsIHtcbiAgICAgICAgICAgIGN4OiAnMzInLFxuICAgICAgICAgICAgY3k6ICczMicsXG4gICAgICAgICAgICByOiAnMzEnLFxuICAgICAgICAgICAgZmlsbDogaWNvbkNvbmZpZy5jb2xvcixcbiAgICAgICAgICAgIHN0eWxlOiBpY29uQmdTdHlsZSB9KVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdnJyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IGljb25Db25maWcuaWNvbiwgZmlsbDogbG9nb0ZpbGxDb2xvciB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBJY29uLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWNvbkJnU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9nb0ZpbGxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByb3VuZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlclxuICB9O1xuXG4gIEljb24uZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgaWNvbkJnU3R5bGU6IHt9LFxuICAgIGxvZ29GaWxsQ29sb3I6ICd3aGl0ZScsXG4gICAgc2l6ZTogNjRcbiAgfTtcblxuICByZXR1cm4gSWNvbjtcbn0iLCIvKlxuICogVGhpcyBkZXRlY3Rpb24gbWV0aG9kIGlkZW50aWZpZXMgSW50ZXJuZXQgRXhwbG9yZXJzIHVwIHVudGlsIHZlcnNpb24gMTEuXG4gKlxuICogUmVmZXJlbmNlOiBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM3NTAzKHY9dnMuODUpLmFzcHhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJbnRlcm5ldEV4cGxvcmVyQmVmb3JlKHZlcnNpb24pIHtcbiAgdmFyIGllbWF0Y2ggPSAvTVNJRSAoWzAtOV0rKS9nLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gIHJldHVybiBpZW1hdGNoID8gK2llbWF0Y2hbMV0gPCB2ZXJzaW9uIDogZmFsc2U7XG59IiwiaW1wb3J0IF9PYmplY3Qka2V5cyBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnO1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXRlbXBsYXRlICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYmplY3RUb0dldFBhcmFtcyhvYmplY3QpIHtcbiAgcmV0dXJuICc/JyArIF9PYmplY3Qka2V5cyhvYmplY3QpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICEhb2JqZWN0W2tleV07XG4gIH0pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmplY3Rba2V5XSk7XG4gIH0pLmpvaW4oJyYnKTtcbn1cbi8qIGVzbGludC1lbmFibGUgcHJlZmVyLXRlbXBsYXRlICovIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBTb2NpYWxNZWRpYVNoYXJlQ291bnQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU29jaWFsTWVkaWFTaGFyZUNvdW50LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTb2NpYWxNZWRpYVNoYXJlQ291bnQocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU29jaWFsTWVkaWFTaGFyZUNvdW50KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTb2NpYWxNZWRpYVNoYXJlQ291bnQuX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoU29jaWFsTWVkaWFTaGFyZUNvdW50KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIF90aGlzLnN0YXRlID0geyBjb3VudDogMCB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTb2NpYWxNZWRpYVNoYXJlQ291bnQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZUNvdW50KHRoaXMucHJvcHMudXJsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMudXJsICE9PSB0aGlzLnByb3BzLnVybCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNvdW50KG5leHRQcm9wcy51cmwpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVDb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUNvdW50KHVybCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmdldENvdW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb3BzLmdldENvdW50KHVybCwgZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5faXNNb3VudGVkKSB7XG4gICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBjb3VudDogY291bnQsXG4gICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgY291bnQgPSBfc3RhdGUuY291bnQsXG4gICAgICAgICAgaXNMb2FkaW5nID0gX3N0YXRlLmlzTG9hZGluZztcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG5cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogY3goJ1NvY2lhbE1lZGlhU2hhcmVDb3VudCcsIGNsYXNzTmFtZSkgfSxcbiAgICAgICAgIWlzTG9hZGluZyAmJiBjaGlsZHJlbihjb3VudCB8fCAwKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU29jaWFsTWVkaWFTaGFyZUNvdW50O1xufShDb21wb25lbnQpO1xuXG5Tb2NpYWxNZWRpYVNoYXJlQ291bnQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2V0Q291bnQ6IFByb3BUeXBlcy5mdW5jLFxuICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuU29jaWFsTWVkaWFTaGFyZUNvdW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKHNoYXJlQ291bnQpIHtcbiAgICByZXR1cm4gc2hhcmVDb3VudDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hhcmVDb3VudEZhY3RvcnkoZ2V0Q291bnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNvY2lhbE1lZGlhU2hhcmVDb3VudCwgX2V4dGVuZHMoeyBnZXRDb3VudDogZ2V0Q291bnQgfSwgcHJvcHMpKTtcbiAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9