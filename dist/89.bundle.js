(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./dev/js/components/commons/Home/staticDisclaimer.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/Home/staticDisclaimer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var isVip = _ref.isVip;

    return _react2.default.createElement(
        'div',
        { className: 'dsclmer-ftr ' + (isVip ? 'margin-bottom-55' : '') },
        _react2.default.createElement(
            'p',
            { className: 'fw-500 mrt-20', style: { color: '#8a8a8a', fontSize: 10 } },
            'The Website is not intended to be used in case of a medical emergency and/ or critical care and the user should directly contact his/ her medical service provider for Physical Examination. Docprime is solely a technology partner.'
        ),
        _react2.default.createElement(
            'div',
            { className: 'col-12 footer-new-copyrght', style: { paddingBottom: 5 } },
            _react2.default.createElement(
                'p',
                null,
                'Docprime.com Copyright \xA9 2020.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'All rights reserved.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'DOCPRIME TECHNOLOGIES PRIVATE LIMITED'
            ),
            _react2.default.createElement(
                'p',
                null,
                'CIN : U74999HR2016PTC064312'
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/components/commons/UserLogin/UserLogin.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/UserLogin/UserLogin.js ***!
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

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var UserLoginView = function (_React$Component) {
    _inherits(UserLoginView, _React$Component);

    function UserLoginView(props) {
        _classCallCheck(this, UserLoginView);

        var _this = _possibleConstructorReturn(this, (UserLoginView.__proto__ || Object.getPrototypeOf(UserLoginView)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);

        _this.state = {
            phoneNumber: '',
            validationError: '',
            showOTP: false,
            otp: "",
            otpTimeout: false,
            referralCode: parsed.referral || null,
            referralName: null,
            smsBtnType: null,
            enableOtpRequest: false
        };
        return _this;
    }

    _createClass(UserLoginView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.resetAuth();
            if (this.state.referralCode) {
                this.props.fetchReferralCode(this.state.referralCode).then(function (res) {
                    if (res && res.status) {
                        _this2.setState({ referralName: res.name });
                    }
                }).catch(function (e) {});
            }
        }
    }, {
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

            var _this3 = this;

            var viaSms = arguments[2];
            var viaWhatsapp = arguments[3];

            var parsed = queryString.parse(this.props.location.search);
            if (resendFlag) {
                var analyticData = {
                    'Category': 'ConsumerApp', 'Action': 'ResendOtp', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'resend-otp', 'mobileNo': number, 'pageSource': parsed.login || '', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : ''
                };
                _gtm2.default.sendEvent({ data: analyticData });
            } else {
                var _analyticData = {
                    'Category': 'ConsumerApp', 'Action': 'GetOtpRequest', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'get-otp-request', 'mobileNo': number, 'pageSource': parsed.login || '', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : ''
                };
                _gtm2.default.sendEvent({ data: _analyticData });
            }
            if (number.match(/^[56789]{1}[0-9]{9}$/)) {
                this.setState({ validationError: "" });
                this.props.sendOTP(number, viaSms, viaWhatsapp, 'user-login', function (error) {
                    if (error) {
                        // this.setState({ validationError: "Could not generate OTP." })
                    } else {
                        if (viaWhatsapp) {
                            _this3.setState({ enableOtpRequest: true });
                        } else {
                            _this3.setState({ enableOtpRequest: false });
                        }
                        _this3.setState({ showOTP: true, otpTimeout: true, smsBtnType: viaSms ? true : false });
                        setTimeout(function () {
                            _this3.setState({ otpTimeout: false });
                        }, 20000);
                        setTimeout(function () {
                            _this3.setState({ enableOtpRequest: false });
                        }, 60000);
                    }
                });
            } else {
                this.setState({ validationError: "Please provide a valid number (10 digits)" });
            }
        }
    }, {
        key: 'verifyOTP',
        value: function verifyOTP() {
            var _this4 = this;

            if (!this.state.otp) {
                this.setState({ validationError: "Please enter OTP" });
                return;
            }
            if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
                this.setState({ validationError: "" });
                var extraParamsData = {};
                this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParamsData, function (exists) {
                    if (exists.token) {
                        var parsed = queryString.parse(_this4.props.location.search);
                        _this4.props.clearInsurance();
                        _this4.props.resetVipData();
                        if (exists.user_exists) {
                            if (parsed.login) {
                                var data = {
                                    'Category': 'ConsumerApp', 'Action': 'LoginSuccess', 'pageSource': parsed.login, 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'login-success', 'mobileNo': _this4.state.phoneNumber
                                };
                                _gtm2.default.sendEvent({ data: data });
                            } else {
                                var _data = {
                                    'Category': 'ConsumerApp', 'Action': 'LoginSuccess', 'pageSource': 'UNKNOWN', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'login-success', 'mobileNo': _this4.state.phoneNumber
                                };
                                _gtm2.default.sendEvent({ data: _data });
                            }

                            if (parsed.ref) {
                                _this4.props.history.push('/user');
                            } else if (parsed.callback) {
                                _this4.props.history.replace(parsed.callback);
                            } else if (_this4.state.referralName && _this4.state.referralCode) {
                                _this4.props.history.replace('/');
                            } else {
                                _this4.props.history.go(-1);
                            }
                        } else {
                            // gtm event

                            if (parsed.login) {
                                var _data2 = {
                                    'Category': 'ConsumerApp', 'Action': 'UserRegistered', 'pageSource': parsed.login, 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'user-registered', 'mobileNo': _this4.state.phoneNumber
                                };
                                _gtm2.default.sendEvent({ data: _data2 });
                            } else {
                                var _data3 = {
                                    'Category': 'ConsumerApp', 'Action': 'UserRegistered', 'pageSource': 'UNKNOWN', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'user-registered', 'mobileNo': _this4.state.phoneNumber
                                };
                                _gtm2.default.sendEvent({ data: _data3 });
                            }
                            var replace_url = '/signup?';
                            if (parsed.callback) {
                                replace_url += 'callback=' + parsed.callback + '&';
                            }

                            if (_this4.state.referralName && _this4.state.referralCode) {
                                replace_url += 'referral=' + _this4.state.referralCode;
                            }

                            _this4.props.history.replace(replace_url);
                        }
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
                { className: 'profile-body-wrap lgn-ovrflow' },
                _react2.default.createElement(_DesktopProfileHeader2.default, null),
                _react2.default.createElement(
                    'section',
                    { className: 'container parent-section book-appointment-section-login' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7  center-column' },
                            _react2.default.createElement(
                                'section',
                                { className: 'mobile-verification-screen p-3' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget no-shadow no-round sign-up-container' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget-header text-center mv-header' },
                                        this.state.referralName ? _react2.default.createElement(
                                            'h3',
                                            { className: 'sign-coupon fw-700 mb-2 cpn-font-sz' },
                                            'Get  ',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'rft-price-size' },
                                                '\u20B9',
                                                this.props.refer_amount
                                            ),
                                            ' in your wallet'
                                        ) : "",
                                        this.state.referralName ? _react2.default.createElement(
                                            'h3',
                                            { className: 'sign-coupon fw-700' },
                                            'Signup to claim your cashback from',
                                            _react2.default.createElement('br', null),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'ft-25' },
                                                this.state.referralName
                                            ),
                                            ' '
                                        ) : _react2.default.createElement(
                                            'h3',
                                            { className: 'sign-coupon fw-700', style: { fontSize: 16 } },
                                            'Signup & get great offers on your doctor and lab appointments',
                                            _react2.default.createElement('br', null)
                                        ),
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'fw-500 text-md sign-up-mbl-text' },
                                            'Enter your Mobile Number to continue'
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
                                                _react2.default.createElement('input', { type: 'number', className: 'fc-input text-center', placeholder: '10 digit mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this), autoComplete: 'off' })
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
                                                    this.state.enableOtpRequest ? '' : _react2.default.createElement(
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
                                            this.props.error_message
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
                                        'div',
                                        { className: 'whtsappEnable-container p-0' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'text-center fw-500 p-3 pt-0', style: { fontSize: 9, color: '#8a8a8a' } },
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
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { noChatButton: true })
                    )
                ),
                _react2.default.createElement(_staticDisclaimer2.default, null)
            );
        }
    }]);

    return UserLoginView;
}(_react2.default.Component);

exports.default = UserLoginView;

/***/ }),

/***/ "./dev/js/components/commons/UserLogin/index.js":
/*!******************************************************!*\
  !*** ./dev/js/components/commons/UserLogin/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserLogin = __webpack_require__(/*! ./UserLogin */ "./dev/js/components/commons/UserLogin/UserLogin.js");

var _UserLogin2 = _interopRequireDefault(_UserLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _UserLogin2.default;

/***/ }),

/***/ "./dev/js/containers/commons/UserLogin.js":
/*!************************************************!*\
  !*** ./dev/js/containers/commons/UserLogin.js ***!
  \************************************************/
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

var _UserLogin = __webpack_require__(/*! ../../components/commons/UserLogin */ "./dev/js/components/commons/UserLogin/index.js");

var _UserLogin2 = _interopRequireDefault(_UserLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserLogin = function (_React$Component) {
    _inherits(UserLogin, _React$Component);

    function UserLogin(props) {
        _classCallCheck(this, UserLogin);

        return _possibleConstructorReturn(this, (UserLogin.__proto__ || Object.getPrototypeOf(UserLogin)).call(this, props));
    }

    _createClass(UserLogin, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_UserLogin2.default, this.props);
        }
    }]);

    return UserLogin;
}(_react2.default.Component);

UserLogin.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$AUTH = state.AUTH,
        token = _state$AUTH.token,
        error_message = _state$AUTH.error_message,
        success_message = _state$AUTH.success_message,
        otp_request_sent = _state$AUTH.otp_request_sent,
        otp_request_success = _state$AUTH.otp_request_success,
        otp_request_fail = _state$AUTH.otp_request_fail,
        submit_otp = _state$AUTH.submit_otp,
        submit_otp_success = _state$AUTH.submit_otp_success,
        submit_otp_fail = _state$AUTH.submit_otp_fail,
        phoneNumber = _state$AUTH.phoneNumber;
    var refer_amount = state.USER.refer_amount;


    return {
        token: token,
        error_message: error_message,
        success_message: success_message,
        otp_request_sent: otp_request_sent,
        otp_request_success: otp_request_success,
        otp_request_fail: otp_request_fail,
        submit_otp: submit_otp,
        submit_otp_success: submit_otp_success,
        submit_otp_fail: submit_otp_fail,
        phoneNumber: phoneNumber,
        refer_amount: refer_amount
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        sendOTP: function sendOTP(number, viaSms, viaWhatsapp, message_type, cb) {
            return dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb));
        },
        submitOTP: function submitOTP(number, otp, extraParamsData, cb) {
            return dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb));
        },
        resetAuth: function resetAuth() {
            return dispatch((0, _index.resetAuth)());
        },
        fetchReferralCode: function fetchReferralCode(code) {
            return dispatch((0, _index.fetchReferralCode)(code));
        },
        clearInsurance: function clearInsurance() {
            return dispatch((0, _index.clearInsurance)());
        },
        resetVipData: function resetVipData() {
            return dispatch((0, _index.resetVipData)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserLogin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1VzZXJMb2dpbi9Vc2VyTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Vc2VyTG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9Vc2VyTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImlzVmlwIiwiY29sb3IiLCJmb250U2l6ZSIsInBhZGRpbmdCb3R0b20iLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJVc2VyTG9naW5WaWV3IiwicHJvcHMiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwic3RhdGUiLCJwaG9uZU51bWJlciIsInZhbGlkYXRpb25FcnJvciIsInNob3dPVFAiLCJvdHAiLCJvdHBUaW1lb3V0IiwicmVmZXJyYWxDb2RlIiwicmVmZXJyYWwiLCJyZWZlcnJhbE5hbWUiLCJzbXNCdG5UeXBlIiwiZW5hYmxlT3RwUmVxdWVzdCIsInJlc2V0QXV0aCIsImZldGNoUmVmZXJyYWxDb2RlIiwidGhlbiIsInJlcyIsInN0YXR1cyIsInNldFN0YXRlIiwibmFtZSIsImNhdGNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwibnVtYmVyIiwicmVzZW5kRmxhZyIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwiYW5hbHl0aWNEYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwibG9naW4iLCJzZW5kRXZlbnQiLCJkYXRhIiwibWF0Y2giLCJzZW5kT1RQIiwiZXJyb3IiLCJzZXRUaW1lb3V0IiwiZXh0cmFQYXJhbXNEYXRhIiwic3VibWl0T1RQIiwiZXhpc3RzIiwidG9rZW4iLCJjbGVhckluc3VyYW5jZSIsInJlc2V0VmlwRGF0YSIsInVzZXJfZXhpc3RzIiwicmVmIiwiaGlzdG9yeSIsInB1c2giLCJjYWxsYmFjayIsInJlcGxhY2UiLCJnbyIsInJlcGxhY2VfdXJsIiwia2V5IiwidmVyaWZ5T1RQIiwic3VibWl0T1RQUmVxdWVzdCIsInJlZmVyX2Ftb3VudCIsIkFTU0VUU19CQVNFX1VSTCIsImlucHV0SGFuZGxlciIsImJpbmQiLCJfaGFuZGxlQ29udGludWVQcmVzcyIsIl9oYW5kbGVLZXlQcmVzcyIsImVycm9yX21lc3NhZ2UiLCJzdWJtaXRfb3RwIiwib3RwX3JlcXVlc3Rfc2VudCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVXNlckxvZ2luIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiQVVUSCIsInN1Y2Nlc3NfbWVzc2FnZSIsIm90cF9yZXF1ZXN0X3N1Y2Nlc3MiLCJvdHBfcmVxdWVzdF9mYWlsIiwic3VibWl0X290cF9zdWNjZXNzIiwic3VibWl0X290cF9mYWlsIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibWVzc2FnZV90eXBlIiwiY2IiLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFDZSxnQkFBZTtBQUFBLFFBQVpBLEtBQVksUUFBWkEsS0FBWTs7QUFDN0IsV0FBUTtBQUFBO0FBQUEsVUFBSyw2QkFBMEJBLFFBQU0sa0JBQU4sR0FBeUIsRUFBbkQsQ0FBTDtBQUNPO0FBQUE7QUFBQSxjQUFHLFdBQVUsZUFBYixFQUE2QixPQUFPLEVBQUVDLE9BQU8sU0FBVCxFQUFvQkMsVUFBVSxFQUE5QixFQUFwQztBQUFBO0FBQUEsU0FEUDtBQUVPO0FBQUE7QUFBQSxjQUFLLFdBQVUsNEJBQWYsRUFBNEMsT0FBTyxFQUFFQyxlQUFlLENBQWpCLEVBQW5EO0FBQ0k7QUFBQTtBQUFBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Y7QUFDVjtBQUNGO0FBQ007QUFDRjtBQUNKO0FBQ0Y7QUFDSTtBQUNGO0FBQ2M7QUFDRjtBQUNWO0FBQ0Y7QUFDYztBQUNGO0FBQ0o7QUFDRjtBQUNJIiwiZmlsZSI6Ijg5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuXG5jbGFzcyBVc2VyTG9naW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yOiAnJyxcbiAgICAgICAgICAgIHNob3dPVFA6IGZhbHNlLFxuICAgICAgICAgICAgb3RwOiBcIlwiLFxuICAgICAgICAgICAgb3RwVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICByZWZlcnJhbENvZGU6IHBhcnNlZC5yZWZlcnJhbCB8fCBudWxsLFxuICAgICAgICAgICAgcmVmZXJyYWxOYW1lOiBudWxsLFxuICAgICAgICAgICAgc21zQnRuVHlwZTogbnVsbCxcbiAgICAgICAgICAgIGVuYWJsZU90cFJlcXVlc3Q6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5yZXNldEF1dGgoKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWZlcnJhbENvZGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hSZWZlcnJhbENvZGUodGhpcy5zdGF0ZS5yZWZlcnJhbENvZGUpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVmZXJyYWxOYW1lOiByZXMubmFtZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dEhhbmRsZXIoZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T1RQICYmIGUudGFyZ2V0Lm5hbWUgPT0gJ3Bob25lTnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsIHZhbGlkYXRpb25FcnJvcjogXCJcIiwgc2hvd09UUDogZmFsc2UsIG90cDogXCJcIiB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdE9UUFJlcXVlc3QobnVtYmVyLCByZXNlbmRGbGFnID0gZmFsc2UsIHZpYVNtcywgdmlhV2hhdHNhcHApIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmIChyZXNlbmRGbGFnKSB7XG4gICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUmVzZW5kT3RwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncmVzZW5kLW90cCcsICdtb2JpbGVObyc6IG51bWJlciwgJ3BhZ2VTb3VyY2UnOiBwYXJzZWQubG9naW4gfHwgJycsICdtb2RlJzogdmlhU21zID8gJ3ZpYVNtcycgOiB2aWFXaGF0c2FwcCA/ICd2aWFXaGF0c2FwcCcgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0dldE90cFJlcXVlc3QnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdnZXQtb3RwLXJlcXVlc3QnLCAnbW9iaWxlTm8nOiBudW1iZXIsICdwYWdlU291cmNlJzogcGFyc2VkLmxvZ2luIHx8ICcnLCAnbW9kZSc6IHZpYVNtcyA/ICd2aWFTbXMnIDogdmlhV2hhdHNhcHAgPyAndmlhV2hhdHNhcHAnIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRPVFAobnVtYmVyLCB2aWFTbXMsIHZpYVdoYXRzYXBwLCAndXNlci1sb2dpbicsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIkNvdWxkIG5vdCBnZW5lcmF0ZSBPVFAuXCIgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmlhV2hhdHNhcHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlT3RwUmVxdWVzdDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd09UUDogdHJ1ZSwgb3RwVGltZW91dDogdHJ1ZSwgc21zQnRuVHlwZTogdmlhU21zID8gdHJ1ZSA6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG90cFRpbWVvdXQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDAwKVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9LCA2MDAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG51bWJlciAoMTAgZGlnaXRzKVwiIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2ZXJpZnlPVFAoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5vdHApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIGVudGVyIE9UUFwiIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5waG9uZU51bWJlci5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiB9KVxuICAgICAgICAgICAgbGV0IGV4dHJhUGFyYW1zRGF0YSA9IHt9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN1Ym1pdE9UUCh0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0aGlzLnN0YXRlLm90cCwgZXh0cmFQYXJhbXNEYXRhLCAoZXhpc3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0cy50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhckluc3VyYW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRWaXBEYXRhKClcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cy51c2VyX2V4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5sb2dpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xvZ2luU3VjY2VzcycsICdwYWdlU291cmNlJzogcGFyc2VkLmxvZ2luLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsb2dpbi1zdWNjZXNzJywgJ21vYmlsZU5vJzogdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMb2dpblN1Y2Nlc3MnLCAncGFnZVNvdXJjZSc6ICdVTktOT1dOJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbG9naW4tc3VjY2VzcycsICdtb2JpbGVObyc6IHRoaXMuc3RhdGUucGhvbmVOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5yZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3VzZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZWQuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShwYXJzZWQuY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUucmVmZXJyYWxOYW1lICYmIHRoaXMuc3RhdGUucmVmZXJyYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoJy8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBndG0gZXZlbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5sb2dpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1VzZXJSZWdpc3RlcmVkJywgJ3BhZ2VTb3VyY2UnOiBwYXJzZWQubG9naW4sICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3VzZXItcmVnaXN0ZXJlZCcsICdtb2JpbGVObyc6IHRoaXMuc3RhdGUucGhvbmVOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVXNlclJlZ2lzdGVyZWQnLCAncGFnZVNvdXJjZSc6ICdVTktOT1dOJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndXNlci1yZWdpc3RlcmVkJywgJ21vYmlsZU5vJzogdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcGxhY2VfdXJsID0gJy9zaWdudXA/J1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VfdXJsICs9IGBjYWxsYmFjaz0ke3BhcnNlZC5jYWxsYmFja30mYFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWZlcnJhbE5hbWUgJiYgdGhpcy5zdGF0ZS5yZWZlcnJhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlX3VybCArPSBgcmVmZXJyYWw9JHt0aGlzLnN0YXRlLnJlZmVycmFsQ29kZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKHJlcGxhY2VfdXJsKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBudW1iZXIgKDEwIGRpZ2l0cylcIiB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZUtleVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLnZlcmlmeU9UUCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlQ29udGludWVQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNob3dPVFApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdE9UUFJlcXVlc3QodGhpcy5zdGF0ZS5waG9uZU51bWJlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcCBsZ24tb3ZyZmxvd1wiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvbi1sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03ICBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9iaWxlLXZlcmlmaWNhdGlvbi1zY3JlZW4gcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG5vLXNoYWRvdyBuby1yb3VuZCBzaWduLXVwLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIG12LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWZlcnJhbE5hbWUgPyA8aDMgY2xhc3NOYW1lPVwic2lnbi1jb3Vwb24gZnctNzAwIG1iLTIgY3BuLWZvbnQtc3pcIj5HZXQgIDxzcGFuIGNsYXNzTmFtZT1cInJmdC1wcmljZS1zaXplXCI+JiM4Mzc3O3t0aGlzLnByb3BzLnJlZmVyX2Ftb3VudH08L3NwYW4+IGluIHlvdXIgd2FsbGV0PC9oMz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWZlcnJhbE5hbWUgPyA8aDMgY2xhc3NOYW1lPVwic2lnbi1jb3Vwb24gZnctNzAwXCI+U2lnbnVwIHRvIGNsYWltIHlvdXIgY2FzaGJhY2sgZnJvbTxiciAvPjxzcGFuIGNsYXNzTmFtZT1cImZ0LTI1XCI+e3RoaXMuc3RhdGUucmVmZXJyYWxOYW1lfTwvc3Bhbj4gPC9oMz4gOiA8aDMgY2xhc3NOYW1lPVwic2lnbi1jb3Vwb24gZnctNzAwXCIgc3R5bGU9e3sgZm9udFNpemU6IDE2IH19ID5TaWdudXAgJmFtcDsgZ2V0IGdyZWF0IG9mZmVycyBvbiB5b3VyIGRvY3RvciBhbmQgbGFiIGFwcG9pbnRtZW50czxiciAvPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCI+RW50ZXIgeW91ciBNb2JpbGUgTnVtYmVyIHRvIGNvbnRpbnVlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXZlcmlmaWNhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcmlmaS1tb2ItaW9jbiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tb2Iuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtb2JpbGUtZmllbGQgc3VwLWlucHV0LXBkbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXQgdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIjEwIGRpZ2l0IG1vYmlsZSBudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZUNvbnRpbnVlUHJlc3MuYmluZCh0aGlzKX0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93T1RQID8gPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBPVFBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5vdHB9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwib3RwXCIgb25LZXlQcmVzcz17dGhpcy5faGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3RwVGltZW91dCA/IFwiXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNlbmRPdHBcIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0cnVlLCB0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyBmYWxzZSA6IHRydWUsICF0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyBmYWxzZSA6IHRydWUpfT57dGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gJ1NlbmQgdmlhIFdoYXRzYXBwJyA6ICdTZW5kIHZpYSBTTVMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbmFibGVPdHBSZXF1ZXN0ID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8YSBjbGFzc05hbWU9XCJyZXNlbmRPdHBcIiBzdHlsZT17eyBjb2xvcjogJyNlYzBkMGQnIH19IG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSl9PlJlc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnByb3BzLmVycm9yX21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLnZhbGlkYXRpb25FcnJvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPVFAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy52ZXJpZnlPVFAuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuc3VibWl0X290cH0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVyaWZ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIGZhbHNlLCB0cnVlLCBmYWxzZSl9IGRpc2FibGVkPXt0aGlzLnByb3BzLm90cF9yZXF1ZXN0X3NlbnR9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGxnLXNtcy1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic21zLWljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvc21zaWNvbi5zdmcnfSAvPlZlcmlmeSBWaWEgU01TXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIGZhbHNlLCBmYWxzZSwgdHJ1ZSl9IGRpc2FibGVkPXt0aGlzLnByb3BzLm90cF9yZXF1ZXN0X3NlbnR9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGxnLXd0c3AtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIndodHNwLWljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvd2EtbG9nby1nci5zdmcnfSAvPlZlcmlmeSBWaWEgV2hhdHNhcHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndodHNhcHBFbmFibGUtY29udGFpbmVyIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ3dHNhcHAtY2hrLXR4dFwiPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy90aWNrLnN2Zyd9IC8+IEVuYWJsZSBXaGF0c2FwcCBmb3Igc2VhbWxlc3MgY29tbXVuaWNhdGlvbjwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmdy01MDAgcC0zIHB0LTBcIiBzdHlsZT17eyBmb250U2l6ZTogOSwgY29sb3I6ICcjOGE4YThhJyB9fSA+QnkgcHJvY2VlZGluZywgeW91IGhlcmVieSBhZ3JlZSB0byB0aGUgPGEgaHJlZj1cIi90ZXJtc1wiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSA+RW5kIFVzZXIgQWdyZWVtZW50PC9hPiBhbmQgPGEgaHJlZj1cIi9wcml2YWN5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5Qcml2YWN5IFBvbGljeS48L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXQtMjEgc2lnbi11cC1jb250YWluZXIgbXJuZy1idG0tc2NybFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZ24tdXAtaW5zdHJ1Y3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdobnVwLXNjbmQtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5kb2NwcmltZTwvYj4gaXMgeW91ciA8c3Bhbj5GcmVlIEZhbWlseSBEb2N0b3IgRm9yIExpZmU8L3NwYW4+IDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWduLXVwLWxpc2l0bmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zdS1jaGF0LnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhdCBpbnN0YW50bHksIGFueXRpbWUsIGFueXdoZXJlIHdpdGggcXVhbGlmaWVkIGRvY3RvcnMgZm9yIGZyZWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc3Utb2Zmci5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCB1cHRvIDUwJSBvZmYgb24gZG9jdG9yIGFwcG9pbnRtZW50cyBhbmQgbGFiIHRlc3RzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBub0NoYXRCdXR0b249e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9naW5WaWV3XG4iLCJpbXBvcnQgVXNlckxvZ2luVmlldyBmcm9tICcuL1VzZXJMb2dpbidcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxvZ2luVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZW5kT1RQLCBzdWJtaXRPVFAsIHJlc2V0QXV0aCwgZmV0Y2hSZWZlcnJhbENvZGUsIGNsZWFySW5zdXJhbmNlLCByZXNldFZpcERhdGEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgVXNlckxvZ2luVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvVXNlckxvZ2luJ1xuXG5cbmNsYXNzIFVzZXJMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VXNlckxvZ2luVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGxldCB7XG4gICAgICAgIHRva2VuLFxuICAgICAgICBlcnJvcl9tZXNzYWdlLFxuICAgICAgICBzdWNjZXNzX21lc3NhZ2UsXG4gICAgICAgIG90cF9yZXF1ZXN0X3NlbnQsXG4gICAgICAgIG90cF9yZXF1ZXN0X3N1Y2Nlc3MsXG4gICAgICAgIG90cF9yZXF1ZXN0X2ZhaWwsXG4gICAgICAgIHN1Ym1pdF9vdHAsXG4gICAgICAgIHN1Ym1pdF9vdHBfc3VjY2VzcyxcbiAgICAgICAgc3VibWl0X290cF9mYWlsLFxuICAgICAgICBwaG9uZU51bWJlclxuICAgIH0gPSBzdGF0ZS5BVVRIXG5cbiAgICAgbGV0IHsgcmVmZXJfYW1vdW50IH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2tlbixcbiAgICAgICAgZXJyb3JfbWVzc2FnZSxcbiAgICAgICAgc3VjY2Vzc19tZXNzYWdlLFxuICAgICAgICBvdHBfcmVxdWVzdF9zZW50LFxuICAgICAgICBvdHBfcmVxdWVzdF9zdWNjZXNzLFxuICAgICAgICBvdHBfcmVxdWVzdF9mYWlsLFxuICAgICAgICBzdWJtaXRfb3RwLFxuICAgICAgICBzdWJtaXRfb3RwX3N1Y2Nlc3MsXG4gICAgICAgIHN1Ym1pdF9vdHBfZmFpbCxcbiAgICAgICAgcGhvbmVOdW1iZXIsXG4gICAgICAgIHJlZmVyX2Ftb3VudFxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VuZE9UUDogKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikgPT4gZGlzcGF0Y2goc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpKSxcbiAgICAgICAgc3VibWl0T1RQOiAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zRGF0YSwgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdE9UUChudW1iZXIsIG90cCwgZXh0cmFQYXJhbXNEYXRhLCBjYikpLFxuICAgICAgICByZXNldEF1dGg6ICgpID0+IGRpc3BhdGNoKHJlc2V0QXV0aCgpKSxcbiAgICAgICAgZmV0Y2hSZWZlcnJhbENvZGU6IChjb2RlKSA9PiBkaXNwYXRjaChmZXRjaFJlZmVycmFsQ29kZShjb2RlKSksXG4gICAgICAgIGNsZWFySW5zdXJhbmNlOiAoKSA9PiBkaXNwYXRjaChjbGVhckluc3VyYW5jZSgpKSxcbiAgICAgICAgcmVzZXRWaXBEYXRhOigpID0+IGRpc3BhdGNoKHJlc2V0VmlwRGF0YSgpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyTG9naW4pO1xuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=