(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

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

/***/ "./dev/js/components/commons/primeCare/careInfoPopup.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/primeCare/careInfoPopup.js ***!
  \**************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoryPopup = function (_React$Component) {
    _inherits(CategoryPopup, _React$Component);

    function CategoryPopup(props) {
        _classCallCheck(this, CategoryPopup);

        return _possibleConstructorReturn(this, (CategoryPopup.__proto__ || Object.getPrototypeOf(CategoryPopup)).call(this, props));
    }

    _createClass(CategoryPopup, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { className: 'cancel-overlay cancel-overlay-zindex', onClick: this.props.closeInfo.bind(this) }),
                _react2.default.createElement(
                    'div',
                    { className: 'widget cancel-appointment-div cancel-popup' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pop-top-heading mb-0 pb-10' },
                        this.props.infoData.name,
                        _react2.default.createElement(
                            'span',
                            { className: 'float-right', style: { cursor: 'pointer', marginRight: '10px' }, onClick: this.props.closeInfo.bind(this) },
                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rt-close.svg", style: { width: 14 } })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'terms-condition-div pop-onscreen-scroll pt-0' },
                        _react2.default.createElement(
                            'div',
                            { className: '' },
                            _react2.default.createElement(
                                'div',
                                { className: 'ins-form-radio insradio-on-popup' },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'careListing mrt-10' },
                                    this.props.infoData && this.props.infoData.included_tests.length > 0 ? this.props.infoData.included_tests.map(function (tests, i) {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: i },
                                            tests.name,
                                            ' ',
                                            tests.parameter_count > 1 ? '(includes ' + tests.parameter_count + ' tests)' : ''
                                        );
                                    }) : ''
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CategoryPopup;
}(_react2.default.Component);

exports.default = CategoryPopup;

/***/ }),

/***/ "./dev/js/components/commons/primeCare/careLoginPopup.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/commons/primeCare/careLoginPopup.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var CareLoginPopup = function (_React$Component) {
    _inherits(CareLoginPopup, _React$Component);

    function CareLoginPopup(props) {
        _classCallCheck(this, CareLoginPopup);

        var _this = _possibleConstructorReturn(this, (CareLoginPopup.__proto__ || Object.getPrototypeOf(CareLoginPopup)).call(this, props));

        _this.state = {
            phoneNumber: '',
            validationError: '',
            showOTP: false,
            otp: "",
            otpTimeout: false,
            error_message: '',
            smsBtnType: null
        };
        return _this;
    }

    _createClass(CareLoginPopup, [{
        key: 'inputHandler',
        value: function inputHandler(e) {
            if (this.state.showOTP && e.target.name == 'phoneNumber') {
                var _setState;

                this.setState((_setState = {}, _defineProperty(_setState, e.target.name, e.target.value), _defineProperty(_setState, 'validationError', ""), _defineProperty(_setState, 'showOTP', false), _defineProperty(_setState, 'otp', ""), _setState));
            } else {
                this.setState(_defineProperty({}, e.target.name, e.target.value));
            }
        }
    }, {
        key: 'submitOTPRequest',
        value: function submitOTPRequest(number) {
            var resendFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var _this2 = this;

            var viaSms = arguments[2];
            var viaWhatsapp = arguments[3];

            var parsed = queryString.parse(this.props.location.search);
            if (resendFlag) {
                var analyticData = {
                    'Category': 'ConsumerApp', 'Action': 'ResendOtp', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'resend-otp', 'mobileNo': number, 'pageSource': parsed.login || '', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : '' };
                _gtm2.default.sendEvent({ data: analyticData });
            } else {
                var _analyticData = {
                    'Category': 'ConsumerApp', 'Action': 'GetOtpRequest', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'get-otp-request', 'mobileNo': number, 'pageSource': parsed.login || '', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : ''
                };
                _gtm2.default.sendEvent({ data: _analyticData });
            }
            if (number.match(/^[56789]{1}[0-9]{9}$/)) {
                this.setState({ validationError: "" });
                this.props.sendOTP(number, viaSms, viaWhatsapp, 'care-login', function (error) {
                    if (error) {
                        // this.setState({ validationError: "Could not generate OTP." })
                    } else {
                        _this2.setState({ showOTP: true, otpTimeout: true, smsBtnType: viaSms ? true : false });
                        setTimeout(function () {
                            _this2.setState({ otpTimeout: false });
                        }, 20000);
                    }
                });
            } else {
                this.setState({ validationError: "Please provide a valid number (10 digits)" });
            }
        }
    }, {
        key: 'verifyOTP',
        value: function verifyOTP() {
            var _this3 = this;

            var self = this;
            if (!this.state.otp) {
                this.setState({ validationError: "Please enter OTP" });
                return;
            }
            if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
                this.setState({ validationError: "" });
                var extraParams = {};
                this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParams, function (exists) {
                    if (exists.code == 'invalid') {
                        _this3.setState({ error_message: exists.message });
                    } else {
                        _this3.props.getIsCareDetails(function (resp) {
                            // get user subscription plan details
                            if (resp && resp.has_active_plan) {
                                _this3.props.history.push('/prime/success?user_plan=' + resp.user_plan_id);
                            } else {
                                var url = '/prime/booking?plan_id=' + _this3.props.selectedPlanId;
                                _this3.props.history.push(url);
                            }
                        });
                    }
                });
            } else {
                this.setState({ validationError: "Please provide a valid number (10 digits)" });
            }
        }
    }, {
        key: '_handleKeyPress',
        value: function _handleKeyPress(e) {
            if (e.key === 'Enter') {
                this.verifyOTP();
            }
        }
    }, {
        key: '_handleContinuePress',
        value: function _handleContinuePress(e) {
            if (e.key === 'Enter') {
                if (!this.state.showOTP) {
                    this.submitOTPRequest(this.state.phoneNumber);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'col-12 col-md-7  center-column' },
                _react2.default.createElement('div', { className: 'cancel-overlay', onClick: this.props.hideLoginPopup.bind(this) }),
                _react2.default.createElement(
                    'section',
                    { className: 'mobile-verification-screen p-3' },
                    _react2.default.createElement(
                        'div',
                        { className: 'widget no-shadow no-round sign-up-container widget cancel-appointment-div cancel-popup' },
                        _react2.default.createElement(
                            'span',
                            { className: 'float-right', style: { cursor: 'pointer', marginRight: '10px' }, onClick: this.props.hideLoginPopup.bind(this) },
                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rt-close.svg", style: { width: 14 } })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'widget-header text-center mv-header' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'fw-500 text-md sign-up-mbl-text' },
                                'Enter your Mobile Number'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'widget-content text-center' },
                            _react2.default.createElement(
                                'div',
                                { className: 'mobile-verification' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'verifi-mob-iocn text-center' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/mob.svg", className: 'img-fluid' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group mobile-field sup-input-pdng' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'adon-group enter-mobile-number' },
                                    _react2.default.createElement('input', { type: 'number', className: 'fc-input text-center', placeholder: '10 digit mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this) })
                                ),
                                this.state.showOTP ? _react2.default.createElement(
                                    'div',
                                    { className: 'adon-group enter-mobile-number' },
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('input', { type: 'number', className: 'fc-input text-center', placeholder: 'Enter OTP', value: this.state.otp, onChange: this.inputHandler.bind(this), name: 'otp', onKeyPress: this._handleKeyPress.bind(this) }),
                                    this.state.otpTimeout ? "" : _react2.default.createElement(
                                        'div',
                                        { className: 'd-flex align-items-start justify-content-between' },
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'resendOtp', onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, true, this.state.smsBtnType ? false : true, !this.state.smsBtnType ? false : true) },
                                            this.state.smsBtnType ? 'Send via Whatsapp' : 'Send via SMS'
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'resendOtp', style: { color: '#ec0d0d' }, onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, true, this.state.smsBtnType ? true : false, !this.state.smsBtnType ? true : false) },
                                            'Resend'
                                        )
                                    )
                                ) : ""
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'errorMessage m-0 mb-2' },
                                this.state.error_message
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'errorMessage m-0 mb-2' },
                                this.state.validationError
                            ),
                            this.state.showOTP ? _react2.default.createElement(
                                'div',
                                { className: 'text-center' },
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.verifyOTP.bind(this), disabled: this.props.submit_otp, className: 'v-btn v-btn-primary btn-sm' },
                                    'Verify'
                                )
                            ) : _react2.default.createElement(
                                _react2.default.Fragment,
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'text-center' },
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, false, true, false), disabled: this.props.otp_request_sent, className: 'v-btn v-btn-primary btn-sm lg-sms-btn' },
                                        _react2.default.createElement('img', { className: 'sms-ico', src: "/assets" + '/img/smsicon.svg' }),
                                        'Verify Via SMS'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-center fw-500 p-3', style: { fontSize: 12, color: '#8a8a8a' } },
                            'By proceeding, you hereby agree to the ',
                            _react2.default.createElement(
                                'a',
                                { href: '/terms', target: '_blank', style: { color: 'var(--text--primary--color)' } },
                                'End User Agreement'
                            ),
                            ' and ',
                            _react2.default.createElement(
                                'a',
                                { href: '/privacy', target: '_blank', style: { color: 'var(--text--primary--color)' } },
                                'Privacy Policy.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CareLoginPopup;
}(_react2.default.Component);

exports.default = CareLoginPopup;

/***/ }),

/***/ "./dev/js/components/commons/primeCare/primeCareView.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/primeCare/primeCareView.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _careInfoPopup = __webpack_require__(/*! ./careInfoPopup.js */ "./dev/js/components/commons/primeCare/careInfoPopup.js");

var _careInfoPopup2 = _interopRequireDefault(_careInfoPopup);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _careLoginPopup = __webpack_require__(/*! ./careLoginPopup.js */ "./dev/js/components/commons/primeCare/careLoginPopup.js");

var _careLoginPopup2 = _interopRequireDefault(_careLoginPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrimeCareView = function (_React$Component) {
    _inherits(PrimeCareView, _React$Component);

    function PrimeCareView(props) {
        _classCallCheck(this, PrimeCareView);

        var _this = _possibleConstructorReturn(this, (PrimeCareView.__proto__ || Object.getPrototypeOf(PrimeCareView)).call(this, props));

        _this.state = {
            showInfo: false,
            infoData: '',
            showLoginPopup: false,
            selectedPlanId: ''
        };
        return _this;
    }

    _createClass(PrimeCareView, [{
        key: 'buyNow',
        value: function buyNow(plan_id) {
            var _this2 = this;

            var url = '/prime/booking?plan_id=' + plan_id;
            if (!_storage2.default.checkAuth()) {
                // this.props.history.replace(`/login?callback=`+url)
                this.setState({ 'selectedPlanId': plan_id, 'showLoginPopup': true });
            } else {
                this.props.getIsCareDetails(function (resp) {
                    // get user subscription plan details
                    if (resp && resp.has_active_plan) {
                        _this2.props.history.push('/prime/success?user_plan=' + resp.user_plan_id);
                    } else {
                        _this2.props.history.push(url);
                    }
                });
            }
        }
    }, {
        key: 'closeInfo',
        value: function closeInfo() {
            this.setState({ infoData: '', showInfo: false });
        }
    }, {
        key: 'hideLoginPopup',
        value: function hideLoginPopup() {
            this.setState({ showLoginPopup: false });
        }
    }, {
        key: 'testInfo',
        value: function testInfo(test) {
            var lat = 28.644800;
            var long = 77.216721;
            if (this.props.selectedLocation !== null) {
                lat = this.props.selectedLocation.geometry.location.lat;
                long = this.props.selectedLocation.geometry.location.lng;

                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();
            }
            var selected_test_ids = [];
            // this.props.data.map((row, i) => {
            //     selected_test_ids.push(row.id)
            // })

            if (test.is_package && test.url && test.url != '') {
                this.props.history.push('/' + test.url + '?test_ids=' + test.id + '&selected_test_ids=' + selected_test_ids + '&lat=' + lat + '&long=' + long);
            } else if (test.is_package) {
                this.props.history.push('/search/testinfo?test_ids=' + test.id + '&selected_test_ids=' + selected_test_ids + '&lat=' + lat + '&long=' + long);
            }

            // this.setState({infoData:data,showInfo:true})
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(where, type, data, e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (type) {
                this.props.selectSearchType(type);
            }
            if (where == '/chat') {
                this.props.history.push(where, data);
            } else {
                this.props.history.push(where);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            if (this.props.data && Object.keys(this.props.data).length > 0) {
                var self = this;
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(_DesktopProfileHeader2.default, { homePage: true, showSearch: true }),
                    _react2.default.createElement(
                        'div',
                        { className: 'profile-body-wrap care-new-backgroud' },
                        _react2.default.createElement(
                            'section',
                            { className: 'chat-main-container', style: { marginTop: '' } },
                            _react2.default.createElement(
                                'div',
                                { className: 'row main-row parent-section-row' },
                                _react2.default.createElement(_LeftBar2.default, null),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-12 center-column' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'container-fluid' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'care-new-main-contianer' },
                                            this.props.data && this.props.data.plans && this.props.data.plans.length > 0 ? _react2.default.createElement(
                                                'div',
                                                { className: 'care-new-container' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'care-intro' },
                                                    'Introducing'
                                                ),
                                                _react2.default.createElement('img', { className: 'nw-careLogo', src: "/assets" + "/img/logo-care-white.png" }),
                                                _react2.default.createElement('img', { className: 'nw-care-subheading', src: "/assets" + "/img/CARE-sb.png" }),
                                                Object.entries(this.props.data.plans).map(function (_ref) {
                                                    var _ref2 = _slicedToArray(_ref, 2),
                                                        key = _ref2[0],
                                                        value = _ref2[1];

                                                    return _react2.default.createElement(
                                                        'div',
                                                        { className: 'nw-care-content', key: key },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: '' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'row no-gutters' },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'col-12' },
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'care-dtls-list nw-care-paragraph' },
                                                                        _react2.default.createElement(
                                                                            'div',
                                                                            null,
                                                                            value.unlimited_online_consultation ? _react2.default.createElement('img', { className: 'care-prd-icon', src: "/assets" + '/img/nw-chk.png' }) : '',
                                                                            _react2.default.createElement(
                                                                                'p',
                                                                                null,
                                                                                'Free Unlimited Online Consultation ',
                                                                                _react2.default.createElement(
                                                                                    'span',
                                                                                    { className: 'gp-spn' },
                                                                                    '(General Physician)'
                                                                                )
                                                                            )
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'div',
                                                                            null,
                                                                            value.priority_queue ? _react2.default.createElement('img', { className: 'care-prd-icon', src: "/assets" + '/img/nw-chk.png' }) : '',
                                                                            _react2.default.createElement(
                                                                                'p',
                                                                                null,
                                                                                'Priority Queue'
                                                                            )
                                                                        ),
                                                                        Object.entries(value.features).map(function (_ref3) {
                                                                            var _ref4 = _slicedToArray(_ref3, 2),
                                                                                k = _ref4[0],
                                                                                v = _ref4[1];

                                                                            var feature_detail = self.props.data.feature_details.filter(function (x) {
                                                                                return x.id == v.id;
                                                                            });
                                                                            return v.count ? _react2.default.createElement(
                                                                                'div',
                                                                                { key: k },
                                                                                _react2.default.createElement('img', { className: 'care-prd-icon', src: "/assets" + '/img/nw-chk.png' }),
                                                                                _react2.default.createElement(
                                                                                    'p',
                                                                                    null,
                                                                                    feature_detail[0].name,
                                                                                    ' each',
                                                                                    _react2.default.createElement(
                                                                                        'span',
                                                                                        { className: 'rpd-icon', onClick: self.testInfo.bind(self, feature_detail[0].test) },
                                                                                        feature_detail[0].test.show_details ? _react2.default.createElement('img', { style: { marginLeft: '5px' }, src: "/assets" + '/img/icons/info.svg' }) : ''
                                                                                    ),
                                                                                    ' ',
                                                                                    _react2.default.createElement(
                                                                                        'span',
                                                                                        { className: 'care-cnt' },
                                                                                        v.count,
                                                                                        ' Test/Yr.'
                                                                                    )
                                                                                )
                                                                            ) : '';
                                                                        })
                                                                    )
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'new-care-btn' },
                                                                _react2.default.createElement(
                                                                    'button',
                                                                    { onClick: self.buyNow.bind(self, value.id) },
                                                                    'Show Care Info'
                                                                )
                                                            )
                                                        )
                                                    );
                                                })
                                            ) : ''
                                        )
                                    )
                                )
                            )
                        ),
                        this.state.showInfo ? _react2.default.createElement(_careInfoPopup2.default, { infoData: this.state.infoData, closeInfo: this.closeInfo.bind(this) }) : '',
                        this.state.showLoginPopup ? _react2.default.createElement(_careLoginPopup2.default, _extends({}, this.props, { hideLoginPopup: this.hideLoginPopup.bind(this), selectedPlanId: this.state.selectedPlanId })) : ''
                    )
                );
            } else {
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(_DesktopProfileHeader2.default, { homePage: true, showSearch: true }),
                    _react2.default.createElement(
                        'div',
                        { className: 'headerSubLinkContainer d-none' },
                        _react2.default.createElement(
                            'div',
                            { className: 'container' },
                            _react2.default.createElement(
                                'div',
                                { className: 'head_text_container' },
                                this.props.common_settings && this.props.common_settings.insurance_availability ? _react2.default.createElement(
                                    'a',
                                    { href: '/insurance/insurance-plans', onClick: function onClick(e) {
                                            var data = {
                                                'Category': 'ConsumerApp', 'Action': 'MobileFooterBookTestClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'desktop-navbar-insurance-clicked'
                                            };
                                            _gtm2.default.sendEvent({ data: data });
                                            e.preventDefault();
                                            _this3.navigateTo("/insurance/insurance-plans?source=desktop-navbar-insurance-clicked");
                                        } },
                                    'OPD Insurance',
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'opdNewHeaderOfr' },
                                        'New'
                                    )
                                ) : '',
                                _react2.default.createElement(
                                    'a',
                                    { href: '/search', onClick: function onClick(e) {
                                            e.preventDefault();
                                            _this3.navigateTo("/search", 'opd');
                                        } },
                                    'Find a Doctor'
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: '/search', onClick: function onClick(e) {
                                            e.preventDefault();
                                            _this3.navigateTo("/search", 'lab');
                                        } },
                                    'Lab Tests'
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: '/full-body-checkup-health-packages', onClick: function onClick(e) {
                                            e.preventDefault();
                                            _this3.navigateTo('/full-body-checkup-health-packages');
                                        } },
                                    'Health Packages'
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: '/online-consultation', onClick: function onClick(e) {
                                            e.preventDefault();
                                            _this3.navigateTo('/online-consultation');
                                        } },
                                    'Online Doctor Consultation'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_Loader2.default, null)
                );
            }
        }
    }]);

    return PrimeCareView;
}(_react2.default.Component);

exports.default = PrimeCareView;

/***/ }),

/***/ "./dev/js/containers/care/primeCare.js":
/*!*********************************************!*\
  !*** ./dev/js/containers/care/primeCare.js ***!
  \*********************************************/
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

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _primeCareView = __webpack_require__(/*! ../../components/commons/primeCare/primeCareView.js */ "./dev/js/components/commons/primeCare/primeCareView.js");

var _primeCareView2 = _interopRequireDefault(_primeCareView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var primeCare = function (_React$Component) {
    _inherits(primeCare, _React$Component);

    function primeCare(props) {
        _classCallCheck(this, primeCare);

        // if (!STORAGE.checkAuth()) {
        //     this.props.history.replace(`/login?callback=/prime/plans`)
        // }
        var _this = _possibleConstructorReturn(this, (primeCare.__proto__ || Object.getPrototypeOf(primeCare)).call(this, props));

        _this.state = {
            data: '',
            feature_data: {}
        };
        return _this;
    }

    _createClass(primeCare, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.getCareDetails(function (resp) {
                // get care plans
                if (resp) {
                    var feature_data = {};
                    resp.plans.map(function (plans) {
                        plans.features.map(function (feature) {
                            if (feature_data[feature.id]) {
                                feature_data[feature.id] = [].concat(feature_data[feature.id]);
                            } else {
                                feature_data[feature.id] = [];
                            }
                            feature_data[feature.id].push({ planId: plans.id, count: feature.count, id: feature.id });
                        });
                    });
                    _this2.setState({ data: resp, feature_data: feature_data });
                }
            });
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_primeCareView2.default, _extends({}, this.props, { data: this.state.data, feature_data: this.state.feature_data }));
        }
    }]);

    return primeCare;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var selectedLocation = state.SEARCH_CRITERIA_LABS.selectedLocation;


    return {
        selectedLocation: selectedLocation
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getCareDetails: function getCareDetails(callback) {
            return dispatch((0, _index.getCareDetails)(callback));
        },
        setPackageId: function setPackageId(package_id, isHomePage) {
            return dispatch((0, _index.setPackageId)(package_id, isHomePage));
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
        getIsCareDetails: function getIsCareDetails(cb) {
            return dispatch((0, _index.getIsCareDetails)(cb));
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(primeCare);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9wcmltZUNhcmUvY2FyZUluZm9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3ByaW1lQ2FyZS9jYXJlTG9naW5Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3ByaW1lQ2FyZS9wcmltZUNhcmVWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NhcmUvcHJpbWVDYXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJwcm9wcyIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJDYXRlZ29yeVBvcHVwIiwiY2xvc2VJbmZvIiwiYmluZCIsImluZm9EYXRhIiwibmFtZSIsImN1cnNvciIsIm1hcmdpblJpZ2h0IiwiQVNTRVRTX0JBU0VfVVJMIiwid2lkdGgiLCJpbmNsdWRlZF90ZXN0cyIsImxlbmd0aCIsIm1hcCIsInRlc3RzIiwiaSIsInBhcmFtZXRlcl9jb3VudCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkNhcmVMb2dpblBvcHVwIiwic3RhdGUiLCJwaG9uZU51bWJlciIsInZhbGlkYXRpb25FcnJvciIsInNob3dPVFAiLCJvdHAiLCJvdHBUaW1lb3V0IiwiZXJyb3JfbWVzc2FnZSIsInNtc0J0blR5cGUiLCJlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJ2YWx1ZSIsIm51bWJlciIsInJlc2VuZEZsYWciLCJ2aWFTbXMiLCJ2aWFXaGF0c2FwcCIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJhbmFseXRpY0RhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJsb2dpbiIsInNlbmRFdmVudCIsImRhdGEiLCJtYXRjaCIsInNlbmRPVFAiLCJlcnJvciIsInNldFRpbWVvdXQiLCJzZWxmIiwiZXh0cmFQYXJhbXMiLCJzdWJtaXRPVFAiLCJleGlzdHMiLCJjb2RlIiwibWVzc2FnZSIsImdldElzQ2FyZURldGFpbHMiLCJyZXNwIiwiaGFzX2FjdGl2ZV9wbGFuIiwiaGlzdG9yeSIsInB1c2giLCJ1c2VyX3BsYW5faWQiLCJ1cmwiLCJzZWxlY3RlZFBsYW5JZCIsImtleSIsInZlcmlmeU9UUCIsInN1Ym1pdE9UUFJlcXVlc3QiLCJoaWRlTG9naW5Qb3B1cCIsImlucHV0SGFuZGxlciIsIl9oYW5kbGVDb250aW51ZVByZXNzIiwiX2hhbmRsZUtleVByZXNzIiwiY29sb3IiLCJzdWJtaXRfb3RwIiwib3RwX3JlcXVlc3Rfc2VudCIsImZvbnRTaXplIiwiUHJpbWVDYXJlVmlldyIsInNob3dJbmZvIiwic2hvd0xvZ2luUG9wdXAiLCJwbGFuX2lkIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsInRlc3QiLCJsYXQiLCJsb25nIiwic2VsZWN0ZWRMb2NhdGlvbiIsImdlb21ldHJ5IiwibG5nIiwic2VsZWN0ZWRfdGVzdF9pZHMiLCJpc19wYWNrYWdlIiwiaWQiLCJ3aGVyZSIsInR5cGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdFNlYXJjaFR5cGUiLCJPYmplY3QiLCJrZXlzIiwibWFyZ2luVG9wIiwicGxhbnMiLCJlbnRyaWVzIiwidW5saW1pdGVkX29ubGluZV9jb25zdWx0YXRpb24iLCJwcmlvcml0eV9xdWV1ZSIsImZlYXR1cmVzIiwiayIsInYiLCJmZWF0dXJlX2RldGFpbCIsImZlYXR1cmVfZGV0YWlscyIsImZpbHRlciIsIngiLCJjb3VudCIsInRlc3RJbmZvIiwic2hvd19kZXRhaWxzIiwibWFyZ2luTGVmdCIsImJ1eU5vdyIsImNvbW1vbl9zZXR0aW5ncyIsImluc3VyYW5jZV9hdmFpbGFiaWxpdHkiLCJuYXZpZ2F0ZVRvIiwicHJpbWVDYXJlIiwiZmVhdHVyZV9kYXRhIiwiZ2V0Q2FyZURldGFpbHMiLCJmZWF0dXJlIiwiY29uY2F0IiwicGxhbklkIiwid2luZG93Iiwic2Nyb2xsVG8iLCJtYXBTdGF0ZVRvUHJvcHMiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2FsbGJhY2siLCJzZXRQYWNrYWdlSWQiLCJwYWNrYWdlX2lkIiwiaXNIb21lUGFnZSIsIm1lc3NhZ2VfdHlwZSIsImNiIiwiZXh0cmFQYXJhbXNEYXRhIiwicmVzZXRBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsS0FBS0EsS0FBTCxDQUFXQyxTQUFYLElBQXdCLGdCQUF4QztBQUNJLHVEQUFLLFdBQVUsV0FBZixHQURKO0FBR1EscUJBQUtELEtBQUwsQ0FBV0UsV0FBWCxHQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGlCQURKLEdBQytFO0FBSnZGLGFBREo7QUFTSDs7OztFQWhCZ0JDLGdCQUFNQyxTOztrQkFtQlpMLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZjs7Ozs7O2tCQUVlQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOzs7Ozs7Ozs7O0lBR01NLGE7OztBQUNGLDJCQUFZTCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkhBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBR1E7O0FBRUwsbUJBQVE7QUFBQTtBQUFB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QUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiNzUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5cbmNsYXNzIENhdGVnb3J5UG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cbiAgICBcbiAgICBcbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlSW5mby5iaW5kKHRoaXMpfT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwXCI+ICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wLXRvcC1oZWFkaW5nIG1iLTAgcGItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmluZm9EYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcicsIG1hcmdpblJpZ2h0OiAnMTBweCd9fSBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlSW5mby5iaW5kKHRoaXMpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3J0LWNsb3NlLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTQgfX0gLz48L3NwYW4+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1zLWNvbmRpdGlvbi1kaXYgcG9wLW9uc2NyZWVuLXNjcm9sbCBwdC0wXCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tcmFkaW8gaW5zcmFkaW8tb24tcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJlTGlzdGluZyBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbmZvRGF0YSAmJiB0aGlzLnByb3BzLmluZm9EYXRhLmluY2x1ZGVkX3Rlc3RzLmxlbmd0aCA+IDA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5mb0RhdGEuaW5jbHVkZWRfdGVzdHMubWFwKGZ1bmN0aW9uICh0ZXN0cyxpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oPGxpIGtleT17aX0+e3Rlc3RzLm5hbWV9IHt0ZXN0cy5wYXJhbWV0ZXJfY291bnQ+MT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYChpbmNsdWRlcyAke3Rlc3RzLnBhcmFtZXRlcl9jb3VudH0gdGVzdHMpYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9PC9saT4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5UG9wdXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgQ2FyZUxvZ2luUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yOiAnJyxcbiAgICAgICAgICAgIHNob3dPVFA6IGZhbHNlLFxuICAgICAgICAgICAgb3RwOiBcIlwiLFxuICAgICAgICAgICAgb3RwVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcl9tZXNzYWdlOicnLFxuICAgICAgICAgICAgc21zQnRuVHlwZTogbnVsbFxuICAgICAgICB9XG4gICAgfVxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dPVFAgJiYgZS50YXJnZXQubmFtZSA9PSAncGhvbmVOdW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbkVycm9yOiBcIlwiLCBzaG93T1RQOiBmYWxzZSwgb3RwOiBcIlwiIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VibWl0T1RQUmVxdWVzdChudW1iZXIsIHJlc2VuZEZsYWcgPSBmYWxzZSwgdmlhU21zLCB2aWFXaGF0c2FwcCkge1xuICAgICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmIChyZXNlbmRGbGFnKSB7XG4gICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUmVzZW5kT3RwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncmVzZW5kLW90cCcsICdtb2JpbGVObyc6IG51bWJlciwgJ3BhZ2VTb3VyY2UnOiBwYXJzZWQubG9naW4gfHwgJycgLCAnbW9kZSc6dmlhU21zPyd2aWFTbXMnOnZpYVdoYXRzYXBwPyd2aWFXaGF0c2FwcCc6Jyd9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnR2V0T3RwUmVxdWVzdCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2dldC1vdHAtcmVxdWVzdCcsICdtb2JpbGVObyc6IG51bWJlciwgJ3BhZ2VTb3VyY2UnOiBwYXJzZWQubG9naW4gfHwgJycsICdtb2RlJzp2aWFTbXM/J3ZpYVNtcyc6dmlhV2hhdHNhcHA/J3ZpYVdoYXRzYXBwJzonJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChudW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiXCIgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLCdjYXJlLWxvZ2luJywgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiQ291bGQgbm90IGdlbmVyYXRlIE9UUC5cIiB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T1RQOiB0cnVlLCBvdHBUaW1lb3V0OiB0cnVlLCBzbXNCdG5UeXBlOiB2aWFTbXMgPyB0cnVlIDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3RwVGltZW91dDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBudW1iZXIgKDEwIGRpZ2l0cylcIiB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmVyaWZ5T1RQKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLm90cCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgZW50ZXIgT1RQXCIgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBob25lTnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiIH0pXG4gICAgICAgICAgICBsZXQgZXh0cmFQYXJhbXMgPSB7fVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXRPVFAodGhpcy5zdGF0ZS5waG9uZU51bWJlciwgdGhpcy5zdGF0ZS5vdHAsIGV4dHJhUGFyYW1zLCAoZXhpc3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXhpc3RzLmNvZGUgPT0gJ2ludmFsaWQnKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JfbWVzc2FnZTpleGlzdHMubWVzc2FnZX0pXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0SXNDYXJlRGV0YWlscygocmVzcCk9PnsgLy8gZ2V0IHVzZXIgc3Vic2NyaXB0aW9uIHBsYW4gZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcCAmJiByZXNwLmhhc19hY3RpdmVfcGxhbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9wcmltZS9zdWNjZXNzP3VzZXJfcGxhbj0nK3Jlc3AudXNlcl9wbGFuX2lkKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSAnL3ByaW1lL2Jvb2tpbmc/cGxhbl9pZD0nK3RoaXMucHJvcHMuc2VsZWN0ZWRQbGFuSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh1cmwpICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG51bWJlciAoMTAgZGlnaXRzKVwiIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMudmVyaWZ5T1RQKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVDb250aW51ZVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZS5zaG93T1RQKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdE9UUFJlcXVlc3QodGhpcy5zdGF0ZS5waG9uZU51bWJlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblx0cmVuZGVyKCl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgIGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZUxvZ2luUG9wdXAuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2JpbGUtdmVyaWZpY2F0aW9uLXNjcmVlbiBwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG5vLXNoYWRvdyBuby1yb3VuZCBzaWduLXVwLWNvbnRhaW5lciB3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcicsIG1hcmdpblJpZ2h0OiAnMTBweCd9fSBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVMb2dpblBvcHVwLmJpbmQodGhpcyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcnQtY2xvc2Uuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCB9fSAvPjwvc3Bhbj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBtdi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGgzIGNsYXNzTmFtZT1cInNpZ24tY291cG9uIGZ3LTcwMFwiPlBsZWFzZSBsb2dpbiB0byBjb250aW51ZTwvaDM+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCI+RW50ZXIgeW91ciBNb2JpbGUgTnVtYmVyPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXZlcmlmaWNhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJpZmktbW9iLWlvY24gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21vYi5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1vYmlsZS1maWVsZCBzdXAtaW5wdXQtcGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCIxMCBkaWdpdCBtb2JpbGUgbnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVOdW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwicGhvbmVOdW1iZXJcIiBvbktleVByZXNzPXt0aGlzLl9oYW5kbGVDb250aW51ZVByZXNzLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93T1RQID8gPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXQgdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE9UUFwiIHZhbHVlPXt0aGlzLnN0YXRlLm90cH0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJvdHBcIiBvbktleVByZXNzPXt0aGlzLl9oYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3RwVGltZW91dCA/IFwiXCIgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzZW5kT3RwXCIgb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgdHJ1ZSwgdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gZmFsc2UgOiB0cnVlLCAhdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gZmFsc2UgOiB0cnVlKX0+e3RoaXMuc3RhdGUuc21zQnRuVHlwZSA/J1NlbmQgdmlhIFdoYXRzYXBwJzonU2VuZCB2aWEgU01TJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzZW5kT3RwXCIgc3R5bGU9e3tjb2xvcjonI2VjMGQwZCd9fSBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0cnVlLCB0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyB0cnVlIDogZmFsc2UsICF0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyB0cnVlIDogZmFsc2UpfT5SZXNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uRXJyb3J9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPVFAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnZlcmlmeU9UUC5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5zdWJtaXRfb3RwfSBjbGFzc05hbWU9XCJ2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVyaWZ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgZmFsc2UsIHRydWUsIGZhbHNlKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMub3RwX3JlcXVlc3Rfc2VudH0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc20gbGctc21zLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic21zLWljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvc21zaWNvbi5zdmcnfSAvPlZlcmlmeSBWaWEgU01TXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIGZhbHNlLCBmYWxzZSwgdHJ1ZSl9IGRpc2FibGVkPXt0aGlzLnByb3BzLm90cF9yZXF1ZXN0X3NlbnR9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGxnLXd0c3AtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3aHRzcC1pY29cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3dhLWxvZ28tZ3Iuc3ZnJ30gLz5WZXJpZnkgVmlhIFdoYXRzYXBwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZ3LTUwMCBwLTNcIiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiAnIzhhOGE4YScgfX0gPkJ5IHByb2NlZWRpbmcsIHlvdSBoZXJlYnkgYWdyZWUgdG8gdGhlIDxhIGhyZWY9XCIvdGVybXNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0gPkVuZCBVc2VyIEFncmVlbWVudDwvYT4gYW5kIDxhIGhyZWY9XCIvcHJpdmFjeVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSA+UHJpdmFjeSBQb2xpY3kuPC9hPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj4gKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhcmVMb2dpblBvcHVwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgSW5mb1BvcHVwIGZyb20gJy4vY2FyZUluZm9Qb3B1cC5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgQ2FyZUxvZ2luUG9wdXAgZnJvbSAnLi9jYXJlTG9naW5Qb3B1cC5qcydcblxuY2xhc3MgUHJpbWVDYXJlVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93SW5mbzogZmFsc2UsXG4gICAgICAgICAgICBpbmZvRGF0YTogJycsXG4gICAgICAgICAgICBzaG93TG9naW5Qb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZFBsYW5JZDogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1eU5vdyhwbGFuX2lkKSB7XG4gICAgICAgIGxldCB1cmwgPSAnL3ByaW1lL2Jvb2tpbmc/cGxhbl9pZD0nICsgcGxhbl9pZFxuICAgICAgICBpZiAoIVNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGAvbG9naW4/Y2FsbGJhY2s9YCt1cmwpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3NlbGVjdGVkUGxhbklkJzogcGxhbl9pZCwgJ3Nob3dMb2dpblBvcHVwJzogdHJ1ZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRJc0NhcmVEZXRhaWxzKChyZXNwKSA9PiB7IC8vIGdldCB1c2VyIHN1YnNjcmlwdGlvbiBwbGFuIGRldGFpbHNcbiAgICAgICAgICAgICAgICBpZiAocmVzcCAmJiByZXNwLmhhc19hY3RpdmVfcGxhbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ByaW1lL3N1Y2Nlc3M/dXNlcl9wbGFuPScgKyByZXNwLnVzZXJfcGxhbl9pZClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh1cmwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlSW5mbygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZm9EYXRhOiAnJywgc2hvd0luZm86IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgaGlkZUxvZ2luUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9naW5Qb3B1cDogZmFsc2UgfSlcbiAgICB9XG5cbiAgICB0ZXN0SW5mbyh0ZXN0KSB7XG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGF0ID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VsZWN0ZWRfdGVzdF9pZHMgPSBbXVxuICAgICAgICAvLyB0aGlzLnByb3BzLmRhdGEubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgLy8gICAgIHNlbGVjdGVkX3Rlc3RfaWRzLnB1c2gocm93LmlkKVxuICAgICAgICAvLyB9KVxuXG4gICAgICAgIGlmICh0ZXN0LmlzX3BhY2thZ2UgJiYgdGVzdC51cmwgJiYgdGVzdC51cmwgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyArIHRlc3QudXJsICsgJz90ZXN0X2lkcz0nICsgdGVzdC5pZCArICcmc2VsZWN0ZWRfdGVzdF9pZHM9JyArIHNlbGVjdGVkX3Rlc3RfaWRzICsgJyZsYXQ9JyArIGxhdCArICcmbG9uZz0nICsgbG9uZylcbiAgICAgICAgfSBlbHNlIGlmICh0ZXN0LmlzX3BhY2thZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoL3Rlc3RpbmZvP3Rlc3RfaWRzPScgKyB0ZXN0LmlkICsgJyZzZWxlY3RlZF90ZXN0X2lkcz0nICsgc2VsZWN0ZWRfdGVzdF9pZHMgKyAnJmxhdD0nICsgbGF0ICsgJyZsb25nPScgKyBsb25nKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7aW5mb0RhdGE6ZGF0YSxzaG93SW5mbzp0cnVlfSlcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKHdoZXJlLCB0eXBlLCBkYXRhLCBlKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RTZWFyY2hUeXBlKHR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdoZXJlID09ICcvY2hhdCcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHdoZXJlLCBkYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGEgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBob21lUGFnZT17dHJ1ZX0gc2hvd1NlYXJjaD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwIGNhcmUtbmV3LWJhY2tncm91ZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxQcm9maWxlSGVhZGVyIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2FyZUhlYWRlckJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmUtbG9nby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJlQmFja0ljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhcmVsZWZ0LWFycm93LnN2Z1wifSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJlTG9naUltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvZ28tY2FyZS13aGl0ZS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlU3ViSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmVTdWJJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlVGV4dENvbnRTY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmVzdWJUeHRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYXJlVGV4dC5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYXQtbWFpbi1jb250YWluZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiY2FyZU1haW5Db250YWluZXIgbXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhLnBsYW5zICYmIHRoaXMucHJvcHMuZGF0YS5wbGFucy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmRhdGEucGxhbnMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVQbGFuc1wiPnt2YWx1ZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZUNvbXBhcmVQYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVQbGFuUHJpY2VcIj7igrkge3BhcnNlSW50KHZhbHVlLmRlYWxfcHJpY2UpfS9ZcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlUGxhblByaWNlQ3V0XCI+4oK5IHtwYXJzZUludCh2YWx1ZS5tcnApfS9ZcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1iZ3doaXRlXCI+PGJ1dHRvbiBvbkNsaWNrPXtzZWxmLmJ1eU5vdy5iaW5kKHNlbGYsIHZhbHVlLmlkKX0+QnV5IE5vdzwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZUNoZWNrQ29udGFpbmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZWNoa0hlYWRpbmdcIj5GcmVlIFVubGltaXRlZCBPbmxpbmUgQ29uc3VsdGF0aW9uIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVjaGtzdWJIZWFkaW5nXCI+QW55dGltZSwgQW55d2hlcmUhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrQ3JkY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja0NyZGltZ2NvbnQgbm8tZ3V0dGVycyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZGF0YS5wbGFucykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudW5saW1pdGVkX29ubGluZV9jb25zdWx0YXRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCIga2V5PXtrZXl9PiA8aW1nIGNsYXNzTmFtZT1cImNoZWNrY3JkSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2hlY2tlZGdyZWVuLnN2Z1wifSAvPjwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIiBrZXk9e2tleX0+IDxpbWcgY2xhc3NOYW1lPVwiY3Jvc3NjaGVja2NyZEltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dyb25nY29weS5zdmdcIn0gLz48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVDaGVja0NvbnRhaW5lcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmVjaGtIZWFkaW5nXCI+UHJpb3JpdHkgUXVldWUgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZWNoa3N1YkhlYWRpbmdcIj5ObyB3YWl0aW5nIHRpbWUhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrQ3JkY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja0NyZGltZ2NvbnQgbm8tZ3V0dGVycyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZGF0YS5wbGFucykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUucHJpb3JpdHlfcXVldWUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCIga2V5PXtrZXl9PiA8aW1nIGNsYXNzTmFtZT1cImNoZWNrY3JkSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2hlY2tlZGdyZWVuLnN2Z1wifSAvPjwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIiBrZXk9e2tleX0+IDxpbWcgY2xhc3NOYW1lPVwiY3Jvc3NjaGVja2NyZEltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dyb25nY29weS5zdmdcIn0gLz48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZmVhdHVyZV9kYXRhKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZlYXR1cmVfZGV0YWlsID0gc2VsZi5wcm9wcy5kYXRhLmZlYXR1cmVfZGV0YWlscy5maWx0ZXIoeCA9PiB4LmlkID09IGtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjYXJlQ2hlY2tDb250YWluZXJzXCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJlY2hrSGVhZGluZ1wiPntmZWF0dXJlX2RldGFpbFswXS5uYW1lfSB7ZmVhdHVyZV9kZXRhaWxbMF0udGVzdC5zaG93X2RldGFpbHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0cHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17c2VsZi50ZXN0SW5mby5iaW5kKHNlbGYsIGZlYXR1cmVfZGV0YWlsWzBdLnRlc3QpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvaWNvbnMvaW5mby5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrQ3JkY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrQ3JkaW1nY29udCBuby1ndXR0ZXJzIHJvd1wiIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHZhbHVlKS5tYXAoZnVuY3Rpb24gKFtrLCB2YWxdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCIga2V5PXtrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbC5jb3VudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8c3BhbiBjbGFzc05hbWU9XCJjYXJlVGVzdFllYXJcIj4ge2Ake3ZhbC5jb3VudH0gVGVzdC9ZcmB9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2PiA8aW1nIGNsYXNzTmFtZT1cImNyb3NzY2hlY2tjcmRJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93cm9uZ2NvcHkuc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhLnBsYW5zICYmIHRoaXMucHJvcHMuZGF0YS5wbGFucy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZS1uZXctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmUtbnctaGVhZGluZ1wiPkNob29zZSBhIHBsYW4gdGhhdOKAmXMgcmlnaHQgZm9yIHlvdXIgbG92ZWQgb25lcy48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmRhdGEucGxhbnMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlLWNhcmQtY2F0Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmUtcHJkLWljb25cIiBzcmM9e3ZhbHVlLmljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlLXByaWNlLWNkXCI+4oK5IHtwYXJzZUludCh2YWx1ZS5kZWFsX3ByaWNlKX0vWXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oK5IHtwYXJzZUludCh2YWx1ZS5tcnApfS9Zcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmUtZHRscy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudW5saW1pdGVkX29ubGluZV9jb25zdWx0YXRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZS1wcmQtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY2FyZWNoay5zdmcnfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnJlZSBVbmxpbWl0ZWQgT25saW5lIENvbnN1bHRhdGlvbiA8c3BhbiBjbGFzc05hbWU9XCJncC1zcG5cIj4oR2VuZXJhbCBQaHlzaWNpYW4pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLnByaW9yaXR5X3F1ZXVlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZS1wcmQtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY2FyZWNoay5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByaW9yaXR5IFF1ZXVlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh2YWx1ZS5mZWF0dXJlcykubWFwKGZ1bmN0aW9uIChbaywgdl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZlYXR1cmVfZGV0YWlsID0gc2VsZi5wcm9wcy5kYXRhLmZlYXR1cmVfZGV0YWlscy5maWx0ZXIoeCA9PiB4LmlkID09IHYuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2LmNvdW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmUtcHJkLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2NhcmVjaGsuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZmVhdHVyZV9kZXRhaWxbMF0ubmFtZX0gZWFjaFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicnBkLWljb25cIiBvbkNsaWNrPXtzZWxmLnRlc3RJbmZvLmJpbmQoc2VsZiwgZmVhdHVyZV9kZXRhaWxbMF0udGVzdCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmVfZGV0YWlsWzBdLnRlc3Quc2hvd19kZXRhaWxzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaWNvbnMvaW5mby5zdmcnfSAvPiA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImNhcmUtY250XCI+e3YuY291bnR9IFRlc3QvWXIuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZS1udy1ib29rYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWxmLmJ1eU5vdy5iaW5kKHNlbGYsIHZhbHVlLmlkKX0+QnV5IE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ30gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlLW5ldy1tYWluLWNvbnRpYW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhLnBsYW5zICYmIHRoaXMucHJvcHMuZGF0YS5wbGFucy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmUtbmV3LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlLWludHJvXCI+SW50cm9kdWNpbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibnctY2FyZUxvZ29cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2dvLWNhcmUtd2hpdGUucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibnctY2FyZS1zdWJoZWFkaW5nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvQ0FSRS1zYi5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZGF0YS5wbGFucykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm53LWNhcmUtY29udGVudFwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlLWR0bHMtbGlzdCBudy1jYXJlLXBhcmFncmFwaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnVubGltaXRlZF9vbmxpbmVfY29uc3VsdGF0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJlLXByZC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9udy1jaGsucG5nJ30gLz4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnJlZSBVbmxpbWl0ZWQgT25saW5lIENvbnN1bHRhdGlvbiA8c3BhbiBjbGFzc05hbWU9XCJncC1zcG5cIj4oR2VuZXJhbCBQaHlzaWNpYW4pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5wcmlvcml0eV9xdWV1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJlLXByZC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9udy1jaGsucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Qcmlvcml0eSBRdWV1ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh2YWx1ZS5mZWF0dXJlcykubWFwKGZ1bmN0aW9uIChbaywgdl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlX2RldGFpbCA9IHNlbGYucHJvcHMuZGF0YS5mZWF0dXJlX2RldGFpbHMuZmlsdGVyKHggPT4geC5pZCA9PSB2LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYuY291bnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJlLXByZC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9udy1jaGsucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2ZlYXR1cmVfZGV0YWlsWzBdLm5hbWV9IGVhY2hcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJwZC1pY29uXCIgb25DbGljaz17c2VsZi50ZXN0SW5mby5iaW5kKHNlbGYsIGZlYXR1cmVfZGV0YWlsWzBdLnRlc3QpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZV9kZXRhaWxbMF0udGVzdC5zaG93X2RldGFpbHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaWNvbnMvaW5mby5zdmcnfSAvPiA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJjYXJlLWNudFwiPnt2LmNvdW50fSBUZXN0L1lyLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctY2FyZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VsZi5idXlOb3cuYmluZChzZWxmLCB2YWx1ZS5pZCl9PlNob3cgQ2FyZSBJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp9IDxzcGFuPntzZWxmLnByb3BzLmRhdGEgJiYgc2VsZi5wcm9wcy5kYXRhLnBsYW5zICYmIHNlbGYucHJvcHMuZGF0YS5wbGFucy5sZW5ndGg/YCjigrkgJHtwYXJzZUludChzZWxmLnByb3BzLmRhdGEucGxhbnNbMF0uZGVhbF9wcmljZSl9KWA6Jyd9PC9zcGFuPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPFJpZ2h0QmFyIGNsYXNzTmFtZT1cImNvbC1tZC01IG1iLTNcIiAvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0luZm8gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvUG9wdXAgaW5mb0RhdGE9e3RoaXMuc3RhdGUuaW5mb0RhdGF9IGNsb3NlSW5mbz17dGhpcy5jbG9zZUluZm8uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvZ2luUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZUxvZ2luUG9wdXAgey4uLnRoaXMucHJvcHN9IGhpZGVMb2dpblBvcHVwPXt0aGlzLmhpZGVMb2dpblBvcHVwLmJpbmQodGhpcyl9IHNlbGVjdGVkUGxhbklkPXt0aGlzLnN0YXRlLnNlbGVjdGVkUGxhbklkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgaG9tZVBhZ2U9e3RydWV9IHNob3dTZWFyY2g9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyU3ViTGlua0NvbnRhaW5lciBkLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkX3RleHRfY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbW1vbl9zZXR0aW5ncyAmJiB0aGlzLnByb3BzLmNvbW1vbl9zZXR0aW5ncy5pbnN1cmFuY2VfYXZhaWxhYmlsaXR5ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvaW5zdXJhbmNlL2luc3VyYW5jZS1wbGFuc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTW9iaWxlRm9vdGVyQm9va1Rlc3RDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZGVza3RvcC1uYXZiYXItaW5zdXJhbmNlLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbyhcIi9pbnN1cmFuY2UvaW5zdXJhbmNlLXBsYW5zP3NvdXJjZT1kZXNrdG9wLW5hdmJhci1pbnN1cmFuY2UtY2xpY2tlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+T1BEIEluc3VyYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3BkTmV3SGVhZGVyT2ZyXCI+TmV3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9zZWFyY2hcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3NlYXJjaFwiLCAnb3BkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RmluZCBhIERvY3RvcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9zZWFyY2hcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3NlYXJjaFwiLCAnbGFiJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+TGFiIFRlc3RzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2Z1bGwtYm9keS1jaGVja3VwLWhlYWx0aC1wYWNrYWdlc1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9mdWxsLWJvZHktY2hlY2t1cC1oZWFsdGgtcGFja2FnZXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5IZWFsdGggUGFja2FnZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvb25saW5lLWNvbnN1bHRhdGlvblwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9vbmxpbmUtY29uc3VsdGF0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+T25saW5lIERvY3RvciBDb25zdWx0YXRpb248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKCcvY29udGFjdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkNvbnRhY3QgdXM8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByaW1lQ2FyZVZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQge2dldENhcmVEZXRhaWxzLCBzZXRQYWNrYWdlSWQsIHNlbmRPVFAsIHN1Ym1pdE9UUCwgcmVzZXRBdXRoLCBnZXRJc0NhcmVEZXRhaWxzLCBzZWxlY3RTZWFyY2hUeXBlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5pbXBvcnQgUHJpbWVDYXJlVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvcHJpbWVDYXJlL3ByaW1lQ2FyZVZpZXcuanMnXG5cbmNsYXNzIHByaW1lQ2FyZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIC8vIGlmICghU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9sb2dpbj9jYWxsYmFjaz0vcHJpbWUvcGxhbnNgKVxuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiAnJyxcbiAgICAgICAgICAgIGZlYXR1cmVfZGF0YTp7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0Q2FyZURldGFpbHMoKHJlc3ApPT57IC8vIGdldCBjYXJlIHBsYW5zXG4gICAgICAgICAgICBpZihyZXNwKXtcbiAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZV9kYXRhID0ge31cbiAgICAgICAgICAgICAgICByZXNwLnBsYW5zLm1hcChmdW5jdGlvbiAocGxhbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgIHBsYW5zLmZlYXR1cmVzLm1hcChmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZmVhdHVyZV9kYXRhW2ZlYXR1cmUuaWRdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVfZGF0YVtmZWF0dXJlLmlkXSA9IFtdLmNvbmNhdChmZWF0dXJlX2RhdGFbZmVhdHVyZS5pZF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlX2RhdGFbZmVhdHVyZS5pZF0gPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZV9kYXRhW2ZlYXR1cmUuaWRdLnB1c2goe3BsYW5JZDogcGxhbnMuaWQsIGNvdW50OiBmZWF0dXJlLmNvdW50LCBpZDogZmVhdHVyZS5pZH0pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOnJlc3AsZmVhdHVyZV9kYXRhOmZlYXR1cmVfZGF0YX0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJpbWVDYXJlVmlldyB7Li4udGhpcy5wcm9wc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBmZWF0dXJlX2RhdGE9e3RoaXMuc3RhdGUuZmVhdHVyZV9kYXRhfS8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvblxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Q2FyZURldGFpbHM6IChjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0Q2FyZURldGFpbHMoY2FsbGJhY2spKSxcbiAgICAgICAgc2V0UGFja2FnZUlkOiAocGFja2FnZV9pZCwgaXNIb21lUGFnZSkgPT4gZGlzcGF0Y2goc2V0UGFja2FnZUlkKHBhY2thZ2VfaWQsIGlzSG9tZVBhZ2UpKSxcbiAgICAgICAgc2VuZE9UUDogKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikgPT4gZGlzcGF0Y2goc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpKSxcbiAgICAgICAgc3VibWl0T1RQOiAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zRGF0YSwgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdE9UUChudW1iZXIsIG90cCwgZXh0cmFQYXJhbXNEYXRhLCBjYikpLFxuICAgICAgICByZXNldEF1dGg6ICgpID0+IGRpc3BhdGNoKHJlc2V0QXV0aCgpKSxcbiAgICAgICAgZ2V0SXNDYXJlRGV0YWlsczogKGNiKSA9PiBkaXNwYXRjaChnZXRJc0NhcmVEZXRhaWxzKGNiKSksXG4gICAgICAgIHNlbGVjdFNlYXJjaFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RTZWFyY2hUeXBlKHR5cGUpKSxcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykocHJpbWVDYXJlKTtcbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9