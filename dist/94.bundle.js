(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./dev/js/components/commons/Loader/Loader.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/Loader/Loader.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader(props) {
        _classCallCheck(this, Loader);

        return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));
    }

    _createClass(Loader, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: this.props.classType || "loaderCircular" },
                _react2.default.createElement("div", { className: "dp-loader" }),
                this.props.iFramePopup ? _react2.default.createElement(
                    "p",
                    { className: "fw-500 mrt-10" },
                    "Redirecting you to Pharmeasy website..."
                ) : ''
            );
        }
    }]);

    return Loader;
}(_react2.default.Component);

exports.default = Loader;

/***/ }),

/***/ "./dev/js/components/commons/Loader/index.js":
/*!***************************************************!*\
  !*** ./dev/js/components/commons/Loader/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = __webpack_require__(/*! ./Loader */ "./dev/js/components/commons/Loader/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loader2.default;

/***/ }),

/***/ "./dev/js/components/vipClub/digitOrderView.js":
/*!*****************************************************!*\
  !*** ./dev/js/components/vipClub/digitOrderView.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DigitOrderView = function (_React$Component) {
    _inherits(DigitOrderView, _React$Component);

    function DigitOrderView(props) {
        _classCallCheck(this, DigitOrderView);

        var _this = _possibleConstructorReturn(this, (DigitOrderView.__proto__ || Object.getPrototypeOf(DigitOrderView)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(DigitOrderView, [{
        key: 'render',
        value: function render() {
            var fullName = '';
            if (this.props.orderdata) {
                var memberData = this.props.orderdata.member_details[0];
                if (memberData) {
                    fullName = memberData.first_name + ' ' + memberData.middle_name + ' ' + memberData.last_name;
                }
            }
            return this.props.orderdata ? _react2.default.createElement(
                'div',
                { className: 'widget mrb-10' },
                _react2.default.createElement(
                    'div',
                    { className: 'ins-card-head' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-name-head-div d-flex align-items-start digit-logo' },
                        _react2.default.createElement('img', { className: 'img-fluid ', width: '60', src: 'https://www.reinsurancene.ws/wp-content/uploads/2019/03/digit-insurance-logo.jpg' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 mrt-10' },
                            'Digit Covid Group insurance',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'span',
                                { className: 'ins-active-container' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Active ',
                                    _react2.default.createElement('img', { src: "/assets" + "/img/chk-green.svg" })
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ins-policy-date' },
                    _react2.default.createElement(
                        'div',
                        { className: 'details-flex-cont' },
                        _react2.default.createElement(
                            'div',
                            { className: 'ins-policy-details' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Policy Purchase Date'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.orderdata.purchase_date
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ins-policy-details' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Valid Upto'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.orderdata.expiry_date
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-policy-members-details mt-20' },
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                'Premium'
                            ),
                            ' : Rs ',
                            this.props.orderdata.amount
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: { 'textTransform': 'capitalize' } },
                            _react2.default.createElement(
                                'span',
                                null,
                                'Proposer Name '
                            ),
                            ' : ',
                            fullName
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                'Policy Number'
                            ),
                            ' : "Will be provided Shortly"'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                'Cover'
                            ),
                            ' : 1 \'Member(s)\''
                        ),
                        _react2.default.createElement(
                            'ul',
                            null,
                            _react2.default.createElement(
                                'li',
                                { style: { 'textTransform': 'capitalize' } },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'insa-tbl-names' },
                                    ' ',
                                    fullName,
                                    ' '
                                )
                            )
                        )
                    )
                )
            ) : _react2.default.createElement('div', null);
        }
    }]);

    return DigitOrderView;
}(_react2.default.Component);

exports.default = DigitOrderView;

/***/ }),

/***/ "./dev/js/containers/vipClub/DigitOrderPage.js":
/*!*****************************************************!*\
  !*** ./dev/js/containers/vipClub/DigitOrderPage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _digitOrderView = __webpack_require__(/*! ../../components/vipClub/digitOrderView.js */ "./dev/js/components/vipClub/digitOrderView.js");

var _digitOrderView2 = _interopRequireDefault(_digitOrderView);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var DigitOrderPage = function (_React$Component) {
    _inherits(DigitOrderPage, _React$Component);

    function DigitOrderPage(props) {
        _classCallCheck(this, DigitOrderPage);

        var _this = _possibleConstructorReturn(this, (DigitOrderPage.__proto__ || Object.getPrototypeOf(DigitOrderPage)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);
        _this.state = {
            data: null,
            source: parsed.source,
            is_from_organic: parsed.fromOrganic,
            is_pb: parsed.utm_source ? parsed.utm_source && parsed.utm_source.includes('policybazaar.com') : false
        };
        return _this;
    }

    _createClass(DigitOrderPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile(); // to get loggedIn user profile
            }
            if (window) {
                window.scrollTo(0, 0);
            }
            var dataParams = {
                id: this.props.match.params.id
            };
            console.log(dataParams);
            this.props.retrieveDigitInsuranceData(dataParams, function (err, data) {
                if (!err && data) {
                    _this2.setState({ data: data });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'profile-body-wrap' },
                        _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
                        _react2.default.createElement('div', { className: 'bottomMargin' }),
                        _react2.default.createElement(
                            'section',
                            { className: 'container article-container bottomMargin' },
                            _react2.default.createElement(
                                'div',
                                { className: 'row main-row parent-section-row justify-content-center' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12 col-md-10 col-lg-10 center-column' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'container-fluid mt-20' },
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement('div', { className: 'bottomMargin' }),
                                            _react2.default.createElement(_digitOrderView2.default, _extends({}, this.props, { orderdata: this.state.data }))
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DigitOrderPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$USER = state.USER,
        common_utm_tags = _state$USER.common_utm_tags,
        user_loggedIn_number = _state$USER.user_loggedIn_number;
    // let {  digitPlans,selected_digit_plan } = state.VIPCLUB

    return {
        USER: USER, common_utm_tags: common_utm_tags, user_loggedIn_number: user_loggedIn_number
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {

        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        sendOTP: function sendOTP(number, viaSms, viaWhatsapp, message_type, cb) {
            return dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb));
        },
        submitOTP: function submitOTP(number, otp, extraParamsData, cb) {
            return dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb));
        },
        resetAuth: function resetAuth() {
            return dispatch((0, _index.resetAuth)());
        },
        retrieveDigitInsuranceData: function retrieveDigitInsuranceData(dataParams, cb) {
            return dispatch((0, _index.retrieveDigitInsuranceData)(dataParams, cb));
        }
        // selectDigitPlan :(data,cb) => dispatch(selectDigitPlan(data,cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DigitOrderPage);

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/es/index.js ***!
  \***********************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router/es/MemoryRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router/es/Prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return _Prompt__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router/es/Redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router/es/Route.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router/es/StaticRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return _StaticRouter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-router/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router/es/generatePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return _generatePath__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router/es/withRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _withRouter__WEBPACK_IMPORTED_MODULE_9__["default"]; });






















/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi9kaWdpdE9yZGVyVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy92aXBDbHViL0RpZ2l0T3JkZXJQYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJwcm9wcyIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJEaWdpdE9yZGVyVmlldyIsInN0YXRlIiwiZnVsbE5hbWUiLCJvcmRlcmRhdGEiLCJtZW1iZXJEYXRhIiwibWVtYmVyX2RldGFpbHMiLCJmaXJzdF9uYW1lIiwibWlkZGxlX25hbWUiLCJsYXN0X25hbWUiLCJBU1NFVFNfQkFTRV9VUkwiLCJwdXJjaGFzZV9kYXRlIiwiZXhwaXJ5X2RhdGUiLCJhbW91bnQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJEaWdpdE9yZGVyUGFnZSIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJkYXRhIiwic291cmNlIiwiaXNfZnJvbV9vcmdhbmljIiwiZnJvbU9yZ2FuaWMiLCJpc19wYiIsInV0bV9zb3VyY2UiLCJpbmNsdWRlcyIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJnZXRVc2VyUHJvZmlsZSIsIndpbmRvdyIsInNjcm9sbFRvIiwiZGF0YVBhcmFtcyIsImlkIiwibWF0Y2giLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwicmV0cmlldmVEaWdpdEluc3VyYW5jZURhdGEiLCJlcnIiLCJzZXRTdGF0ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJjb21tb25fdXRtX3RhZ3MiLCJ1c2VyX2xvZ2dlZEluX251bWJlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2VuZE9UUCIsIm51bWJlciIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwibWVzc2FnZV90eXBlIiwiY2IiLCJzdWJtaXRPVFAiLCJvdHAiLCJleHRyYVBhcmFtc0RhdGEiLCJyZXNldEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwrR0FDVEEsS0FEUztBQUVsQjs7OztpQ0FFUTs7QUFFTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVyxLQUFLQSxLQUFMLENBQVdDLFNBQVgsSUFBd0IsZ0JBQXhDO0FBQ0ksdURBQUssV0FBVSxXQUFmLEdBREo7QUFHUSxxQkFBS0QsS0FBTCxDQUFXRSxXQUFYLEdBQ0k7QUFBQTtBQUFBLHNCQUFHLFdBQVUsZUFBYjtBQUFBO0FBQUEsaUJBREosR0FDK0U7QUFKdkYsYUFESjtBQVNIOzs7O0VBaEJnQkMsZ0JBQU1DLFM7O2tCQW1CWkwsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJmOzs7Ozs7a0JBRWVBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7Ozs7Ozs7SUFFTU0sYzs7O0FBQ0YsNEJBQVlMLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSUFDVEEsS0FEUzs7QUFFZixjQUFLTSxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBSWxCOzs7O2lDQUVRO0FBQ0wsZ0JBQUlDLFdBQVcsRUFBZjtBQUNBLGdCQUFHLEtBQUtQLEtBQUwsQ0FBV1EsU0FBZCxFQUF3QjtBQUNwQixvQkFBSUMsYUFBYSxLQUFLVCxLQUFMLENBQVdRLFNBQVgsQ0FBcUJFLGNBQXJCLENBQW9DLENBQXBDLENBQWpCO0FBQ0Esb0JBQUlELFVBQUosRUFBZTtBQUNYRiwrQkFBV0UsV0FBV0UsVUFBWCxHQUF3QixHQUF4QixHQUE4QkYsV0FBV0csV0FBekMsR0FBdUQsR0FBdkQsR0FBNkRILFdBQVdJLFNBQW5GO0FBQ0g7QUFDSjtBQUNELG1CQUNJLEtBQUtiLEtBQUwsQ0FBV1EsU0FBWCxHQUNBO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGVBQWY7QUFDQTtBQUFBO0FBQUEsc0JBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsdURBQWY7QUFDSSwrREFBSyxXQUFVLFlBQWYsRUFBNEIsT0FBTSxJQUFsQyxFQUF1QyxLQUFJLGtGQUEzQyxHQURKO0FBRUk7QUFBQTtBQUFBLDhCQUFHLFdBQVUsZUFBYjtBQUFBO0FBQytCLHFFQUQvQjtBQUVJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLHNCQUFoQjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQVUsMkVBQUssS0FBS00sU0FBZUEsR0FBRyxvQkFBNUI7QUFBVjtBQURKO0FBRko7QUFGSjtBQURKLGlCQURBO0FBWUE7QUFBQTtBQUFBLHNCQUFLLFdBQVUsaUJBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxtQkFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLG9CQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESjtBQUVJO0FBQUE7QUFBQTtBQUFPLHFDQUFLZCxLQUFMLENBQVdRLFNBQVgsQ0FBcUJPO0FBQTVCO0FBRkoseUJBREo7QUFLSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxvQkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREo7QUFHSTtBQUFBO0FBQUE7QUFBTyxxQ0FBS2YsS0FBTCxDQUFXUSxTQUFYLENBQXFCUTtBQUE1QjtBQUhKO0FBTEoscUJBREo7QUFZSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxrQ0FBZjtBQUNJO0FBQUE7QUFBQTtBQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQUg7QUFBQTtBQUE4QixpQ0FBS2hCLEtBQUwsQ0FBV1EsU0FBWCxDQUFxQlM7QUFBbkQseUJBREo7QUFFSTtBQUFBO0FBQUEsOEJBQUcsT0FBTyxFQUFFLGlCQUFpQixZQUFuQixFQUFWO0FBQTZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQTdDO0FBQUE7QUFBNEVWO0FBQTVFLHlCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBSDtBQUFBO0FBQUEseUJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFIO0FBQUE7QUFBQSx5QkFKSjtBQUtJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQ0FBSSxPQUFPLEVBQUUsaUJBQWlCLFlBQW5CLEVBQVg7QUFDSTtBQUFBO0FBQUEsc0NBQU0sV0FBVSxnQkFBaEI7QUFBQTtBQUFtQ0EsNENBQW5DO0FBQUE7QUFBQTtBQURKO0FBREo7QUFMSjtBQVpKO0FBWkEsYUFEQSxHQXVDRywwQ0F4Q1A7QUEwQ0s7Ozs7RUF6RGdCSixnQkFBTUMsUzs7a0JBNERwQkMsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEZjs7OztBQUNBOztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFNYSxjQUFjQyxtQkFBT0EsQ0FBQywwREFBUixDQUFwQjs7SUFFTUMsYzs7O0FBRUYsNEJBQVlwQixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0lBQ1RBLEtBRFM7O0FBRWYsWUFBTXFCLFNBQVNILFlBQVlJLEtBQVosQ0FBa0IsTUFBS3RCLEtBQUwsQ0FBV3VCLFFBQVgsQ0FBb0JDLE1BQXRDLENBQWY7QUFDQSxjQUFLbEIsS0FBTCxHQUFXO0FBQ1BtQixrQkFBSyxJQURFO0FBRVBDLG9CQUFPTCxPQUFPSyxNQUZQO0FBR1BDLDZCQUFnQk4sT0FBT08sV0FIaEI7QUFJUEMsbUJBQU1SLE9BQU9TLFVBQVAsR0FBa0JULE9BQU9TLFVBQVAsSUFBcUJULE9BQU9TLFVBQVAsQ0FBa0JDLFFBQWxCLENBQTJCLGtCQUEzQixDQUF2QyxHQUFzRjtBQUpyRixTQUFYO0FBSGU7QUFTbEI7Ozs7NENBRW1CO0FBQUE7O0FBRWhCLGdCQUFJQyxrQkFBUUMsU0FBUixFQUFKLEVBQXlCO0FBQ3JCLHFCQUFLakMsS0FBTCxDQUFXa0MsY0FBWCxHQURxQixDQUNPO0FBQy9CO0FBQ0QsZ0JBQUlDLE1BQUosRUFBWTtBQUNSQSx1QkFBT0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNIO0FBQ0QsZ0JBQUlDLGFBQWE7QUFDYkMsb0JBQUksS0FBS3RDLEtBQUwsQ0FBV3VDLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCRjtBQURmLGFBQWpCO0FBR0FHLG9CQUFRQyxHQUFSLENBQVlMLFVBQVo7QUFDQSxpQkFBS3JDLEtBQUwsQ0FBVzJDLDBCQUFYLENBQXNDTixVQUF0QyxFQUFrRCxVQUFDTyxHQUFELEVBQU1uQixJQUFOLEVBQWdCO0FBQzlELG9CQUFJLENBQUNtQixHQUFELElBQVFuQixJQUFaLEVBQWtCO0FBQ2QsMkJBQUtvQixRQUFMLENBQWMsRUFBRXBCLFVBQUYsRUFBZDtBQUNIO0FBQ0osYUFKRDtBQUtIOzs7aUNBRU87QUFDSixtQkFDSTtBQUFDLCtCQUFELENBQU8sUUFBUDtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ1g7QUFBQTtBQUFBLDBCQUFLLFdBQVUsbUJBQWY7QUFDQyxzREFBQyw4QkFBRCxJQUFlLGtCQUFrQixJQUFqQyxHQUREO0FBRW1CLCtEQUFLLFdBQVUsY0FBZixHQUZuQjtBQUdDO0FBQUE7QUFBQSw4QkFBUyxXQUFVLDBDQUFuQjtBQUNDO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLHdEQUFmO0FBQ0M7QUFBQTtBQUFBLHNDQUFLLFdBQVUsMENBQWY7QUFDQztBQUFBO0FBQUEsMENBQUssV0FBVSx1QkFBZjtBQUNDO0FBQUE7QUFBQTtBQUNrQyxtRkFBSyxXQUFVLGNBQWYsR0FEbEM7QUFFa0MsMEVBQUMsd0JBQUQsZUFBb0IsS0FBS3pCLEtBQXpCLElBQWdDLFdBQVcsS0FBS00sS0FBTCxDQUFXbUIsSUFBdEQ7QUFGbEM7QUFERDtBQUREO0FBREQ7QUFERDtBQUhEO0FBRFc7QUFESixhQURKO0FBc0JIOzs7O0VBdkR3QnRCLGdCQUFNQyxTOztBQTBEbkMsSUFBTTBDLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ3hDLEtBQUQsRUFBVztBQUMvQixRQUFNeUMsT0FBT3pDLE1BQU15QyxJQUFuQjtBQUQrQixzQkFFaUJ6QyxNQUFNeUMsSUFGdkI7QUFBQSxRQUV6QkMsZUFGeUIsZUFFekJBLGVBRnlCO0FBQUEsUUFFUkMsb0JBRlEsZUFFUkEsb0JBRlE7QUFHL0I7O0FBRUEsV0FBTztBQUNIRixrQkFERyxFQUNHQyxnQ0FESCxFQUNvQkM7QUFEcEIsS0FBUDtBQUdILENBUkQ7O0FBVUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3JDLFdBQU87O0FBRUhqQix3QkFBZ0I7QUFBQSxtQkFBTWlCLFNBQVMsNEJBQVQsQ0FBTjtBQUFBLFNBRmI7QUFHSEMsaUJBQVMsaUJBQUNDLE1BQUQsRUFBUUMsTUFBUixFQUFlQyxXQUFmLEVBQTJCQyxZQUEzQixFQUF5Q0MsRUFBekM7QUFBQSxtQkFBZ0ROLFNBQVMsb0JBQVFFLE1BQVIsRUFBZUMsTUFBZixFQUFzQkMsV0FBdEIsRUFBa0NDLFlBQWxDLEVBQWdEQyxFQUFoRCxDQUFULENBQWhEO0FBQUEsU0FITjtBQUlIQyxtQkFBVyxtQkFBQ0wsTUFBRCxFQUFTTSxHQUFULEVBQWNDLGVBQWQsRUFBOEJILEVBQTlCO0FBQUEsbUJBQXFDTixTQUFTLHNCQUFVRSxNQUFWLEVBQWtCTSxHQUFsQixFQUFzQkMsZUFBdEIsRUFBdUNILEVBQXZDLENBQVQsQ0FBckM7QUFBQSxTQUpSO0FBS0hJLG1CQUFXO0FBQUEsbUJBQU1WLFNBQVMsdUJBQVQsQ0FBTjtBQUFBLFNBTFI7QUFNSFIsb0NBQTRCLG9DQUFDTixVQUFELEVBQVlvQixFQUFaO0FBQUEsbUJBQW1CTixTQUFTLHVDQUEyQmQsVUFBM0IsRUFBdUNvQixFQUF2QyxDQUFULENBQW5CO0FBQUE7QUFDNUI7QUFQRyxLQUFQO0FBU0gsQ0FWRDs7a0JBY2UseUJBQVFYLGVBQVIsRUFBMEJJLGtCQUExQixFQUE4QzlCLGNBQTlDLEM7Ozs7Ozs7Ozs7O0FDNUZmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLE1BQU07QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsOEJBQThCO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxvQkFBb0I7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLFVBQVUsVUFBVTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLHNCQUFzQjtBQUNyRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNGO0FBQ1Y7QUFDRjtBQUNNO0FBQ0Y7QUFDSjtBQUNGO0FBQ0k7QUFDRjtBQUNjO0FBQ0Y7QUFDVjtBQUNGO0FBQ2M7QUFDRjtBQUNKO0FBQ0Y7QUFDSSIsImZpbGUiOiI5NC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBEaWdpdE9yZGVyVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmdWxsTmFtZSA9ICcnO1xuICAgICAgICBpZih0aGlzLnByb3BzLm9yZGVyZGF0YSl7XG4gICAgICAgICAgICBsZXQgbWVtYmVyRGF0YSA9IHRoaXMucHJvcHMub3JkZXJkYXRhLm1lbWJlcl9kZXRhaWxzWzBdO1xuICAgICAgICAgICAgaWYgKG1lbWJlckRhdGEpe1xuICAgICAgICAgICAgICAgIGZ1bGxOYW1lID0gbWVtYmVyRGF0YS5maXJzdF9uYW1lICsgJyAnICsgbWVtYmVyRGF0YS5taWRkbGVfbmFtZSArICcgJyArIG1lbWJlckRhdGEubGFzdF9uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3JkZXJkYXRhP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1jYXJkLWhlYWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1uYW1lLWhlYWQtZGl2IGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydCBkaWdpdC1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIFwiIHdpZHRoPVwiNjBcIiBzcmM9XCJodHRwczovL3d3dy5yZWluc3VyYW5jZW5lLndzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzAzL2RpZ2l0LWluc3VyYW5jZS1sb2dvLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpZ2l0IENvdmlkIEdyb3VwIGluc3VyYW5jZTxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnMtYWN0aXZlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFjdGl2ZSA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2Noay1ncmVlbi5zdmdcIn0gLz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXBvbGljeS1kYXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWZsZXgtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1wb2xpY3ktZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UG9saWN5IFB1cmNoYXNlIERhdGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5vcmRlcmRhdGEucHVyY2hhc2VfZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1wb2xpY3ktZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VmFsaWQgVXB0bzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj4xMXRoIE9jdCAyMDIxPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLm9yZGVyZGF0YS5leHBpcnlfZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXBvbGljeS1tZW1iZXJzLWRldGFpbHMgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+UHJlbWl1bTwvc3Bhbj4gOiBScyB7dGhpcy5wcm9wcy5vcmRlcmRhdGEuYW1vdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0+PHNwYW4+UHJvcG9zZXIgTmFtZSA8L3NwYW4+IDoge2Z1bGxOYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+UG9saWN5IE51bWJlcjwvc3Bhbj4gOiBcIldpbGwgYmUgcHJvdmlkZWQgU2hvcnRseVwiPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5Db3Zlcjwvc3Bhbj4gOiAxICdNZW1iZXIocyknPC9wPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5zYS10YmwtbmFtZXNcIj4ge2Z1bGxOYW1lfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImluc2Etc3ViLXRibC1uYW1lc1wiPiBTaGFkeTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnNhLXN1Yi10YmwtbmFtZXNcIj4gVGVzdEluZzwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pjo8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgRGlnaXRPcmRlclZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBzZW5kT1RQLCBzdWJtaXRPVFAsIHJlc2V0QXV0aCwgZ2V0VXNlclByb2ZpbGUsIHJldHJpZXZlRGlnaXRJbnN1cmFuY2VEYXRhIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBEaWdpdE9yZGVyVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpcENsdWIvZGlnaXRPcmRlclZpZXcuanMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5jbGFzcyBEaWdpdE9yZGVyUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7ICAgIFxuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgZGF0YTpudWxsLCBcbiAgICAgICAgICAgIHNvdXJjZTpwYXJzZWQuc291cmNlLFxuICAgICAgICAgICAgaXNfZnJvbV9vcmdhbmljOnBhcnNlZC5mcm9tT3JnYW5pYyxcbiAgICAgICAgICAgIGlzX3BiOnBhcnNlZC51dG1fc291cmNlP3BhcnNlZC51dG1fc291cmNlICYmIHBhcnNlZC51dG1fc291cmNlLmluY2x1ZGVzKCdwb2xpY3liYXphYXIuY29tJyk6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKSAvLyB0byBnZXQgbG9nZ2VkSW4gdXNlciBwcm9maWxlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGFQYXJhbXMgPSB7XG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWRcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhUGFyYW1zKTtcbiAgICAgICAgdGhpcy5wcm9wcy5yZXRyaWV2ZURpZ2l0SW5zdXJhbmNlRGF0YShkYXRhUGFyYW1zLCAoZXJyLCBkYXRhLCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIgJiYgZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXHRcdFx0XHRcdFx0PFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tTWFyZ2luXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgYXJ0aWNsZS1jb250YWluZXIgYm90dG9tTWFyZ2luXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEwIGNvbC1sZy0xMCBjZW50ZXItY29sdW1uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0yMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbU1hcmdpblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlnaXRPcmRlclZpZXcgey4uLnRoaXMucHJvcHN9IG9yZGVyZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2ID4gICAgXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiAgICBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgY29tbW9uX3V0bV90YWdzLCB1c2VyX2xvZ2dlZEluX251bWJlciB9ID0gc3RhdGUuVVNFUlxuICAgIC8vIGxldCB7ICBkaWdpdFBsYW5zLHNlbGVjdGVkX2RpZ2l0X3BsYW4gfSA9IHN0YXRlLlZJUENMVUJcblxuICAgIHJldHVybiB7XG4gICAgICAgIFVTRVIsIGNvbW1vbl91dG1fdGFncywgdXNlcl9sb2dnZWRJbl9udW1iZXJcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIHNlbmRPVFA6IChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpID0+IGRpc3BhdGNoKHNlbmRPVFAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSksXG4gICAgICAgIHN1Ym1pdE9UUDogKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsY2IpID0+IGRpc3BhdGNoKHN1Ym1pdE9UUChudW1iZXIsIG90cCxleHRyYVBhcmFtc0RhdGEsIGNiKSksXG4gICAgICAgIHJlc2V0QXV0aDogKCkgPT4gZGlzcGF0Y2gocmVzZXRBdXRoKCkpLFxuICAgICAgICByZXRyaWV2ZURpZ2l0SW5zdXJhbmNlRGF0YTogKGRhdGFQYXJhbXMsY2IpID0+IGRpc3BhdGNoKHJldHJpZXZlRGlnaXRJbnN1cmFuY2VEYXRhKGRhdGFQYXJhbXMsIGNiKSksXG4gICAgICAgIC8vIHNlbGVjdERpZ2l0UGxhbiA6KGRhdGEsY2IpID0+IGRpc3BhdGNoKHNlbGVjdERpZ2l0UGxhbihkYXRhLGNiKSlcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyAsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGlnaXRPcmRlclBhZ2UpIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=