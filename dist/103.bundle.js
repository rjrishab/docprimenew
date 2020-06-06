(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ "./dev/js/components/commons/payment/index.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/payment/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paymentView = __webpack_require__(/*! ./paymentView */ "./dev/js/components/commons/payment/paymentView.js");

var _paymentView2 = _interopRequireDefault(_paymentView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _paymentView2.default;

/***/ }),

/***/ "./dev/js/components/commons/payment/paymentView.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/payment/paymentView.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _paymentForm = __webpack_require__(/*! ../../commons/paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _reactImageLightbox = __webpack_require__(/*! react-image-lightbox */ "./node_modules/react-image-lightbox/dist/index.es.js");

var _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var images = ["/assets" + "/img/customer-icons/image2-min.jpg", "/assets" + "/img/customer-icons/image1-min.jpg", "/assets" + "/img/customer-icons/image3-min.jpg"];

var PaymentView = function (_React$Component) {
    _inherits(PaymentView, _React$Component);

    function PaymentView(props) {
        _classCallCheck(this, PaymentView);

        var _this = _possibleConstructorReturn(this, (PaymentView.__proto__ || Object.getPrototypeOf(PaymentView)).call(this, props));

        _this.state = {
            selectedPayment: "",
            paymentData: {},
            paymentEnabled: false,
            photoIndex: 0,
            isOpen: false,
            gateway: '',
            mode: '',
            payment_options: [],
            selectedId: ''
        };
        return _this;
    }

    _createClass(PaymentView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (window) {
                window.scrollTo(0, 0);
            }
            var orderId = this.props.match.params.id;
            this.props.fetchPgData(orderId, function (err, data) {
                if (data && data.status) {
                    var selectedPayment = [];
                    if (data.payment_options) {
                        selectedPayment = data.payment_options.filter(function (x) {
                            return x.is_selected;
                        });
                    }
                    _this2.setState({
                        paymentEnabled: true, paymentData: data.data, payment_options: data.payment_options || [], selectedPayment: selectedPayment.length ? selectedPayment[0].action : '', gateway: selectedPayment.length ? selectedPayment[0].payment_gateway : '', mode: selectedPayment.length ? selectedPayment[0].action : '',
                        selectedId: selectedPayment.length ? selectedPayment[0].id : ''
                    });
                }
            });
        }
    }, {
        key: 'selectPaymentType',
        value: function selectPaymentType(id, e) {
            var gateway = 'paytm';
            var mode = '';
            if (e.target.dataset && e.target.dataset.gateway) {
                gateway = e.target.dataset.gateway;
            }
            if (e.target.dataset && e.target.dataset.mode) {
                mode = e.target.dataset.mode;
            }
            this.setState({ selectedPayment: e.target.value, selectedId: id, gateway: gateway, mode: mode });
        }
    }, {
        key: 'proceed',
        value: function proceed() {
            var parsed = queryString.parse(window.location.search);

            if (parsed.refs) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'ContinueClicked', 'pageSource': parsed.refs, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-clicked'
                };

                _gtm2.default.sendEvent({ data: data });
            } else {
                var _data = {
                    'Category': 'ConsumerApp', 'Action': 'ContinueClicked', 'pageSource': 'UNKNOWN', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-clicked'
                };

                _gtm2.default.sendEvent({ data: _data });
            }

            var form = document.getElementById('paymentForm');
            if (this.state.mode != '') {
                form.submit();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                photoIndex = _state.photoIndex,
                isOpen = _state.isOpen;


            var totalAmount = '';
            if (this.state.paymentData && this.state.paymentData.txAmount) {
                totalAmount = parseInt(this.state.paymentData.txAmount);
            }

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, null),
                _react2.default.createElement(
                    'section',
                    { className: 'container container-top-margin' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column' },
                            _react2.default.createElement(
                                'section',
                                { className: 'booking-confirm-screen' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrt-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        { className: 'list payment-method' },
                                                        this.state.payment_options.map(function (paymentType, key) {

                                                            return _react2.default.createElement(
                                                                'li',
                                                                { key: key, style: { position: 'relative' } },
                                                                _react2.default.createElement(
                                                                    'label',
                                                                    { htmlFor: 'S{paymentType.action}_' + paymentType.payment_gateway, className: 'paytm-label' },
                                                                    ' ',
                                                                    _react2.default.createElement('img', { src: paymentType.image, className: 'img-fluid' }),
                                                                    ' ',
                                                                    paymentType.name
                                                                ),
                                                                totalAmount && totalAmount >= 100 ? _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'fw-500', style: { position: 'absolute', color: 'green', fontSize: 12, top: 35, left: 74 } },
                                                                    paymentType.description
                                                                ) : '',
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'float-right' },
                                                                    _react2.default.createElement('input', { type: 'radio', onChange: _this3.selectPaymentType.bind(_this3, paymentType.id), checked: !!(_this3.state.selectedId == paymentType.id), value: paymentType.action, className: 'radio-inline', name: 'gender', id: paymentType.action + '_' + paymentType.payment_gateway, 'data-mode': paymentType.action, 'data-pay': paymentType.id, 'data-gateway': paymentType.payment_gateway })
                                                                )
                                                            );
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    false ? undefined : _react2.default.createElement(
                                        'div',
                                        { className: ' d-flex align-items-start labTest-dtls', style: { 'marginTop': '11px', marginBottom: '10px' } },
                                        _react2.default.createElement('img', { src: "/assets" + "/img/icons/info.svg" }),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'fw-500', style: { flex: 1, paddingLeft: '6px' } },
                                            'American Express cards are not accepted'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(_paymentForm2.default, { paymentData: this.state.paymentData, mode: this.state.mode, gateway: this.state.gateway }),
                            _react2.default.createElement(
                                'button',
                                { onClick: this.proceed.bind(this), className: 'p-2 v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn', disabled: !this.state.paymentEnabled },
                                'Continue'
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', noChatButton: true, msgTemplate: 'gold_general_template' })
                    )
                )
            );
        }
    }]);

    return PaymentView;
}(_react2.default.Component);

exports.default = PaymentView;

/***/ }),

/***/ "./dev/js/containers/commons/Payment.js":
/*!**********************************************!*\
  !*** ./dev/js/containers/commons/Payment.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _index2 = __webpack_require__(/*! ../../components/commons/payment/index.js */ "./dev/js/components/commons/payment/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Payment = function (_React$Component) {
    _inherits(Payment, _React$Component);

    function Payment(props) {
        _classCallCheck(this, Payment);

        var _this = _possibleConstructorReturn(this, (Payment.__proto__ || Object.getPrototypeOf(Payment)).call(this, props));

        if (!_storage2.default.checkAuth()) {
            _this.props.history.replace('/login?callback=/');
        }
        return _this;
    }

    // static loadData(store) {
    //     return store.dispatch(getUserProfile())
    // }

    _createClass(Payment, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (_storage2.default.checkAuth()) {
                this.props.getCartItems();
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_index3.default, this.props);
        }
    }]);

    return Payment;
}(_react2.default.Component);

Payment.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {

    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchPgData: function fetchPgData(id, cb) {
            return dispatch((0, _index.fetchPgData)(id, cb));
        },
        getCartItems: function getCartItems() {
            return dispatch((0, _index.getCartItems)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Payment);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3BheW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9wYXltZW50L3BheW1lbnRWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvUGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsicGF5bWVudFZpZXciLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJpbWFnZXMiLCJBU1NFVFNfQkFTRV9VUkwiLCJQYXltZW50VmlldyIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZFBheW1lbnQiLCJwYXltZW50RGF0YSIsInBheW1lbnRFbmFibGVkIiwicGhvdG9JbmRleCIsImlzT3BlbiIsImdhdGV3YXkiLCJtb2RlIiwicGF5bWVudF9vcHRpb25zIiwic2VsZWN0ZWRJZCIsIndpbmRvdyIsInNjcm9sbFRvIiwib3JkZXJJZCIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJmZXRjaFBnRGF0YSIsImVyciIsImRhdGEiLCJzdGF0dXMiLCJmaWx0ZXIiLCJ4IiwiaXNfc2VsZWN0ZWQiLCJzZXRTdGF0ZSIsImxlbmd0aCIsImFjdGlvbiIsInBheW1lbnRfZ2F0ZXdheSIsImUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwidmFsdWUiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVmcyIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3VibWl0IiwidG90YWxBbW91bnQiLCJ0eEFtb3VudCIsInBhcnNlSW50IiwibWFwIiwicGF5bWVudFR5cGUiLCJrZXkiLCJwb3NpdGlvbiIsImltYWdlIiwibmFtZSIsImNvbG9yIiwiZm9udFNpemUiLCJ0b3AiLCJsZWZ0IiwiZGVzY3JpcHRpb24iLCJzZWxlY3RQYXltZW50VHlwZSIsImJpbmQiLCJtYXJnaW5Cb3R0b20iLCJmbGV4IiwicGFkZGluZ0xlZnQiLCJwcm9jZWVkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQYXltZW50IiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsImhpc3RvcnkiLCJyZXBsYWNlIiwiZ2V0Q2FydEl0ZW1zIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBRWVBLHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQyxjQUFjQyxtQkFBT0EsQ0FBQywwREFBUixDQUFwQjs7QUFFQSxJQUFNQyxTQUFTLENBQ1hDLFNBQWVBLEdBQUcsb0NBRFAsRUFFWEEsU0FBZUEsR0FBRyxvQ0FGUCxFQUdYQSxTQUFlQSxHQUFHLG9DQUhQLENBQWY7O0lBS01DLFc7OztBQUNGLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLDZCQUFpQixFQURSO0FBRVRDLHlCQUFhLEVBRko7QUFHVEMsNEJBQWdCLEtBSFA7QUFJVEMsd0JBQVksQ0FKSDtBQUtUQyxvQkFBUSxLQUxDO0FBTVRDLHFCQUFTLEVBTkE7QUFPVEMsa0JBQU0sRUFQRztBQVFUQyw2QkFBaUIsRUFSUjtBQVNUQyx3QkFBWTtBQVRILFNBQWI7QUFGZTtBQWFsQjs7Ozs0Q0FFbUI7QUFBQTs7QUFDaEIsZ0JBQUlDLE1BQUosRUFBWTtBQUNSQSx1QkFBT0MsUUFBUCxDQUFnQixDQUFoQixFQUFt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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiMTAzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXltZW50VmlldyBmcm9tICcuL3BheW1lbnRWaWV3J1xuXG5leHBvcnQgZGVmYXVsdCBwYXltZW50VmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi8uLi9jb21tb25zL3BheW1lbnRGb3JtJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveCc7XG5cbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgICBBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaW1hZ2UyLW1pbi5qcGdcIixcbiAgICBBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaW1hZ2UxLW1pbi5qcGdcIixcbiAgICBBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaW1hZ2UzLW1pbi5qcGdcIixcbl07XG5jbGFzcyBQYXltZW50VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZFBheW1lbnQ6IFwiXCIsXG4gICAgICAgICAgICBwYXltZW50RGF0YToge30sXG4gICAgICAgICAgICBwYXltZW50RW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBwaG90b0luZGV4OiAwLFxuICAgICAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGdhdGV3YXk6ICcnLFxuICAgICAgICAgICAgbW9kZTogJycsXG4gICAgICAgICAgICBwYXltZW50X29wdGlvbnM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0ZWRJZDogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3JkZXJJZCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hQZ0RhdGEob3JkZXJJZCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRQYXltZW50ID0gW11cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXltZW50X29wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXltZW50ID0gZGF0YS5wYXltZW50X29wdGlvbnMuZmlsdGVyKHggPT4geC5pc19zZWxlY3RlZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRFbmFibGVkOiB0cnVlLCBwYXltZW50RGF0YTogZGF0YS5kYXRhLCBwYXltZW50X29wdGlvbnM6IGRhdGEucGF5bWVudF9vcHRpb25zIHx8IFtdLCBzZWxlY3RlZFBheW1lbnQ6IHNlbGVjdGVkUGF5bWVudC5sZW5ndGggPyBzZWxlY3RlZFBheW1lbnRbMF0uYWN0aW9uIDogJycsIGdhdGV3YXk6IHNlbGVjdGVkUGF5bWVudC5sZW5ndGggPyBzZWxlY3RlZFBheW1lbnRbMF0ucGF5bWVudF9nYXRld2F5IDogJycsIG1vZGU6IHNlbGVjdGVkUGF5bWVudC5sZW5ndGggPyBzZWxlY3RlZFBheW1lbnRbMF0uYWN0aW9uIDogJycsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWQ6IHNlbGVjdGVkUGF5bWVudC5sZW5ndGggPyBzZWxlY3RlZFBheW1lbnRbMF0uaWQgOiAnJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBzZWxlY3RQYXltZW50VHlwZShpZCwgZSkge1xuICAgICAgICBsZXQgZ2F0ZXdheSA9ICdwYXl0bSc7XG4gICAgICAgIGxldCBtb2RlID0gJyc7XG4gICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0ICYmIGUudGFyZ2V0LmRhdGFzZXQuZ2F0ZXdheSkge1xuICAgICAgICAgICAgZ2F0ZXdheSA9IGUudGFyZ2V0LmRhdGFzZXQuZ2F0ZXdheVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0ICYmIGUudGFyZ2V0LmRhdGFzZXQubW9kZSkge1xuICAgICAgICAgICAgbW9kZSA9IGUudGFyZ2V0LmRhdGFzZXQubW9kZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFBheW1lbnQ6IGUudGFyZ2V0LnZhbHVlLCBzZWxlY3RlZElkOiBpZCwgZ2F0ZXdheSwgbW9kZSB9KVxuICAgIH1cblxuICAgIHByb2NlZWQoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5yZWZzKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbnRpbnVlQ2xpY2tlZCcsICdwYWdlU291cmNlJzogcGFyc2VkLnJlZnMsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29udGludWVDbGlja2VkJywgJ3BhZ2VTb3VyY2UnOiAnVU5LTk9XTicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1vZGUgIT0gJycpIHtcbiAgICAgICAgICAgIGZvcm0uc3VibWl0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwaG90b0luZGV4LCBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHRvdGFsQW1vdW50ID0gJydcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGF5bWVudERhdGEgJiYgdGhpcy5zdGF0ZS5wYXltZW50RGF0YS50eEFtb3VudCkge1xuICAgICAgICAgICAgdG90YWxBbW91bnQgPSBwYXJzZUludCh0aGlzLnN0YXRlLnBheW1lbnREYXRhLnR4QW1vdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGhlYWRlciBjbGFzc05hbWU9XCJza2luLXdoaXRlIGZpeGVkIGhvcml6b250YWwgdG9wIGJkci0xIGJvdHRvbSBsaWdodCBzdGlja3ktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1zbSB0ZXh0LW1pZGRsZSBiYWNrLWljb24td2hpdGVcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2JhY2staWNvbi5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZ3LTcwMCBjYXBpdGFsaXplIHRleHQtY2VudGVyXCI+U2VsZWN0IFBheW1lbnQgTWV0aG9kPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9va2luZy1jb25maXJtLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBwYXltZW50LW1ldGhvZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBheW1lbnRfb3B0aW9ucy5tYXAoKHBheW1lbnRUeXBlLCBrZXkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtrZXl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YFN7cGF5bWVudFR5cGUuYWN0aW9ufV8ke3BheW1lbnRUeXBlLnBheW1lbnRfZ2F0ZXdheX1gfSBjbGFzc05hbWU9XCJwYXl0bS1sYWJlbFwiPiA8aW1nIHNyYz17cGF5bWVudFR5cGUuaW1hZ2V9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+IHtwYXltZW50VHlwZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEFtb3VudCAmJiB0b3RhbEFtb3VudCA+PSAxMDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBjb2xvcjogJ2dyZWVuJywgZm9udFNpemU6IDEyLCB0b3A6IDM1LCBsZWZ0OiA3NCB9fT57cGF5bWVudFR5cGUuZGVzY3JpcHRpb259PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9e3RoaXMuc2VsZWN0UGF5bWVudFR5cGUuYmluZCh0aGlzLCBwYXltZW50VHlwZS5pZCl9IGNoZWNrZWQ9eyEhKHRoaXMuc3RhdGUuc2VsZWN0ZWRJZCA9PSBwYXltZW50VHlwZS5pZCl9IHZhbHVlPXtwYXltZW50VHlwZS5hY3Rpb259IGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiIG5hbWU9XCJnZW5kZXJcIiBpZD17YCR7cGF5bWVudFR5cGUuYWN0aW9ufV8ke3BheW1lbnRUeXBlLnBheW1lbnRfZ2F0ZXdheX1gfSBkYXRhLW1vZGU9e3BheW1lbnRUeXBlLmFjdGlvbn0gZGF0YS1wYXk9e3BheW1lbnRUeXBlLmlkfSBkYXRhLWdhdGV3YXk9e3BheW1lbnRUeXBlLnBheW1lbnRfZ2F0ZXdheX0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXQtMjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmRibHR5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZGJsdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3JkYmx0eS1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ncm91cC05OC5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyc3QtdHh0XCI+VHJ1c3QgZG9jcHJpbWUhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJzay1sc3RuZyBwdG1udC1sc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsc3QtYmZyXCI+MTAwJSBtb25leSBiYWNrIGd1YXJhbnRlZSAtICBObyBxdWVzdGlvbnMhIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibHN0LWJmclwiPlBhcnQgb2YgUG9saWN5YmF6YWFyIGdyb3VwIHZhbHVlZCBhdCBvdmVyICQxIGJpbGxpb24gOjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1kLWNvdmVyYWdlXCI+TWVkaWEgQ292ZXJhZ2U8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSwgcGhvdG9JbmRleDogMCB9KX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaW1hZ2UyLW1pbi5qcGdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluU3JjPXtpbWFnZXNbcGhvdG9JbmRleF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNyYz17aW1hZ2VzWyhwaG90b0luZGV4ICsgMSkgJSBpbWFnZXMubGVuZ3RoXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2U3JjPXtpbWFnZXNbKHBob3RvSW5kZXggKyBpbWFnZXMubGVuZ3RoIC0gMSkgJSBpbWFnZXMubGVuZ3RoXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlUmVxdWVzdD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogZmFsc2UgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlUHJldlJlcXVlc3Q9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9JbmRleDogKHBob3RvSW5kZXggKyBpbWFnZXMubGVuZ3RoIC0gMSkgJSBpbWFnZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVOZXh0UmVxdWVzdD17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b0luZGV4OiAocGhvdG9JbmRleCArIDEpICUgaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUsIHBob3RvSW5kZXg6IDEgfSl9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2ltYWdlMS1taW4uanBnXCJ9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiB0cnVlLCBwaG90b0luZGV4OiAyIH0pfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9pbWFnZTMtbWluLmpwZ1wifSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2U/JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCIgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IGxhYlRlc3QtZHRsc1wiIHN0eWxlPXt7J21hcmdpblRvcCc6JzExcHgnLCBtYXJnaW5Cb3R0b206JzEwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvaW5mby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZ0xlZnQ6ICc2cHgnIH19ID5BbWVyaWNhbiBFeHByZXNzIGNhcmRzIGFyZSBub3QgYWNjZXB0ZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXltZW50Rm9ybSBwYXltZW50RGF0YT17dGhpcy5zdGF0ZS5wYXltZW50RGF0YX0gbW9kZT17dGhpcy5zdGF0ZS5tb2RlfSBnYXRld2F5PXt0aGlzLnN0YXRlLmdhdGV3YXl9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvY2VlZC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJwLTIgdi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RpY2t5LWJ0blwiIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5wYXltZW50RW5hYmxlZH0+Q29udGludWU8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBleHRyYUNsYXNzPVwiIGNoYXQtZmxvYXQtYnRuLTJcIiBub0NoYXRCdXR0b249e3RydWV9IG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBmZXRjaFBnRGF0YSwgZ2V0Q2FydEl0ZW1zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuaW1wb3J0IFBheW1lbnRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9wYXltZW50L2luZGV4LmpzJ1xuXG5cbmNsYXNzIFBheW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBpZiAoIVNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGAvbG9naW4/Y2FsbGJhY2s9L2ApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzdGF0aWMgbG9hZERhdGEoc3RvcmUpIHtcbiAgICAvLyAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpXG4gICAgLy8gfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldENhcnRJdGVtcygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYXltZW50VmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG4gICAgcmV0dXJuIHtcblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmV0Y2hQZ0RhdGE6IChpZCwgY2IpID0+IGRpc3BhdGNoKGZldGNoUGdEYXRhKGlkLCBjYikpLFxuICAgICAgICBnZXRDYXJ0SXRlbXM6ICgpID0+IGRpc3BhdGNoKGdldENhcnRJdGVtcygpKSxcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGF5bWVudCk7XG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiaW1wb3J0IF9NZW1vcnlSb3V0ZXIgZnJvbSBcIi4vTWVtb3J5Um91dGVyXCI7XG5leHBvcnQgeyBfTWVtb3J5Um91dGVyIGFzIE1lbW9yeVJvdXRlciB9O1xuaW1wb3J0IF9Qcm9tcHQgZnJvbSBcIi4vUHJvbXB0XCI7XG5leHBvcnQgeyBfUHJvbXB0IGFzIFByb21wdCB9O1xuaW1wb3J0IF9SZWRpcmVjdCBmcm9tIFwiLi9SZWRpcmVjdFwiO1xuZXhwb3J0IHsgX1JlZGlyZWN0IGFzIFJlZGlyZWN0IH07XG5pbXBvcnQgX1JvdXRlIGZyb20gXCIuL1JvdXRlXCI7XG5leHBvcnQgeyBfUm91dGUgYXMgUm91dGUgfTtcbmltcG9ydCBfUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuZXhwb3J0IHsgX1JvdXRlciBhcyBSb3V0ZXIgfTtcbmltcG9ydCBfU3RhdGljUm91dGVyIGZyb20gXCIuL1N0YXRpY1JvdXRlclwiO1xuZXhwb3J0IHsgX1N0YXRpY1JvdXRlciBhcyBTdGF0aWNSb3V0ZXIgfTtcbmltcG9ydCBfU3dpdGNoIGZyb20gXCIuL1N3aXRjaFwiO1xuZXhwb3J0IHsgX1N3aXRjaCBhcyBTd2l0Y2ggfTtcbmltcG9ydCBfZ2VuZXJhdGVQYXRoIGZyb20gXCIuL2dlbmVyYXRlUGF0aFwiO1xuZXhwb3J0IHsgX2dlbmVyYXRlUGF0aCBhcyBnZW5lcmF0ZVBhdGggfTtcbmltcG9ydCBfbWF0Y2hQYXRoIGZyb20gXCIuL21hdGNoUGF0aFwiO1xuZXhwb3J0IHsgX21hdGNoUGF0aCBhcyBtYXRjaFBhdGggfTtcbmltcG9ydCBfd2l0aFJvdXRlciBmcm9tIFwiLi93aXRoUm91dGVyXCI7XG5leHBvcnQgeyBfd2l0aFJvdXRlciBhcyB3aXRoUm91dGVyIH07Il0sInNvdXJjZVJvb3QiOiIifQ==