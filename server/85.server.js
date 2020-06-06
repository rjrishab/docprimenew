exports.ids = [85];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ isVip }) => {
    return _react2.default.createElement(
        'div',
        { className: `dsclmer-ftr ${isVip ? 'margin-bottom-55' : ''}` },
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

var _react = __webpack_require__(/*! react */ "react");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");

class UserLoginView extends _react2.default.Component {
    constructor(props) {
        super(props);

        const parsed = queryString.parse(this.props.location.search);

        this.state = {
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
    }

    componentDidMount() {
        this.props.resetAuth();
        if (this.state.referralCode) {
            this.props.fetchReferralCode(this.state.referralCode).then(res => {
                if (res && res.status) {
                    this.setState({ referralName: res.name });
                }
            }).catch(e => {});
        }
    }

    inputHandler(e) {
        if (this.state.showOTP && e.target.name == 'phoneNumber') {
            this.setState({ [e.target.name]: e.target.value, validationError: "", showOTP: false, otp: "" });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    submitOTPRequest(number, resendFlag = false, viaSms, viaWhatsapp) {
        const parsed = queryString.parse(this.props.location.search);
        if (resendFlag) {
            let analyticData = {
                'Category': 'ConsumerApp', 'Action': 'ResendOtp', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'resend-otp', 'mobileNo': number, 'pageSource': parsed.login || '', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : ''
            };
            _gtm2.default.sendEvent({ data: analyticData });
        } else {
            let analyticData = {
                'Category': 'ConsumerApp', 'Action': 'GetOtpRequest', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'get-otp-request', 'mobileNo': number, 'pageSource': parsed.login || '', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : ''
            };
            _gtm2.default.sendEvent({ data: analyticData });
        }
        if (number.match(/^[56789]{1}[0-9]{9}$/)) {
            this.setState({ validationError: "" });
            this.props.sendOTP(number, viaSms, viaWhatsapp, 'user-login', error => {
                if (error) {
                    // this.setState({ validationError: "Could not generate OTP." })
                } else {
                    if (viaWhatsapp) {
                        this.setState({ enableOtpRequest: true });
                    } else {
                        this.setState({ enableOtpRequest: false });
                    }
                    this.setState({ showOTP: true, otpTimeout: true, smsBtnType: viaSms ? true : false });
                    setTimeout(() => {
                        this.setState({ otpTimeout: false });
                    }, 20000);
                    setTimeout(() => {
                        this.setState({ enableOtpRequest: false });
                    }, 60000);
                }
            });
        } else {
            this.setState({ validationError: "Please provide a valid number (10 digits)" });
        }
    }

    verifyOTP() {
        if (!this.state.otp) {
            this.setState({ validationError: "Please enter OTP" });
            return;
        }
        if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
            this.setState({ validationError: "" });
            let extraParamsData = {};
            this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParamsData, exists => {
                if (exists.token) {
                    const parsed = queryString.parse(this.props.location.search);
                    this.props.clearInsurance();
                    this.props.resetVipData();
                    if (exists.user_exists) {
                        if (parsed.login) {
                            let data = {
                                'Category': 'ConsumerApp', 'Action': 'LoginSuccess', 'pageSource': parsed.login, 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'login-success', 'mobileNo': this.state.phoneNumber
                            };
                            _gtm2.default.sendEvent({ data: data });
                        } else {
                            let data = {
                                'Category': 'ConsumerApp', 'Action': 'LoginSuccess', 'pageSource': 'UNKNOWN', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'login-success', 'mobileNo': this.state.phoneNumber
                            };
                            _gtm2.default.sendEvent({ data: data });
                        }

                        if (parsed.ref) {
                            this.props.history.push('/user');
                        } else if (parsed.callback) {
                            this.props.history.replace(parsed.callback);
                        } else if (this.state.referralName && this.state.referralCode) {
                            this.props.history.replace('/');
                        } else {
                            this.props.history.go(-1);
                        }
                    } else {
                        // gtm event

                        if (parsed.login) {
                            let data = {
                                'Category': 'ConsumerApp', 'Action': 'UserRegistered', 'pageSource': parsed.login, 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'user-registered', 'mobileNo': this.state.phoneNumber
                            };
                            _gtm2.default.sendEvent({ data: data });
                        } else {
                            let data = {
                                'Category': 'ConsumerApp', 'Action': 'UserRegistered', 'pageSource': 'UNKNOWN', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'user-registered', 'mobileNo': this.state.phoneNumber
                            };
                            _gtm2.default.sendEvent({ data: data });
                        }
                        let replace_url = '/signup?';
                        if (parsed.callback) {
                            replace_url += `callback=${parsed.callback}&`;
                        }

                        if (this.state.referralName && this.state.referralCode) {
                            replace_url += `referral=${this.state.referralCode}`;
                        }

                        this.props.history.replace(replace_url);
                    }
                }
            });
        } else {
            this.setState({ validationError: "Please provide a valid number (10 digits)" });
        }
    }

    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.verifyOTP();
        }
    }

    _handleContinuePress(e) {
        if (e.key === 'Enter') {
            if (!this.state.showOTP) {
                this.submitOTPRequest(this.state.phoneNumber);
            }
        }
    }

    render() {

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
                                            { href: '/terms', target: '_blank', style: { color: `var(--text--primary--color)` } },
                                            'End User Agreement'
                                        ),
                                        ' and ',
                                        _react2.default.createElement(
                                            'a',
                                            { href: '/privacy', target: '_blank', style: { color: `var(--text--primary--color)` } },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _UserLogin = __webpack_require__(/*! ../../components/commons/UserLogin */ "./dev/js/components/commons/UserLogin/index.js");

var _UserLogin2 = _interopRequireDefault(_UserLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserLogin extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(_UserLogin2.default, this.props);
    }
}

UserLogin.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    let {
        token,
        error_message,
        success_message,
        otp_request_sent,
        otp_request_success,
        otp_request_fail,
        submit_otp,
        submit_otp_success,
        submit_otp_fail,
        phoneNumber
    } = state.AUTH;

    let { refer_amount } = state.USER;

    return {
        token,
        error_message,
        success_message,
        otp_request_sent,
        otp_request_success,
        otp_request_fail,
        submit_otp,
        submit_otp_success,
        submit_otp_fail,
        phoneNumber,
        refer_amount
    };
};

const mapDispatchToProps = dispatch => {
    return {
        sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
        submitOTP: (number, otp, extraParamsData, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb)),
        resetAuth: () => dispatch((0, _index.resetAuth)()),
        fetchReferralCode: code => dispatch((0, _index.fetchReferralCode)(code)),
        clearInsurance: () => dispatch((0, _index.clearInsurance)()),
        resetVipData: () => dispatch((0, _index.resetVipData)())
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserLogin);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1VzZXJMb2dpbi9Vc2VyTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Vc2VyTG9naW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9Vc2VyTG9naW4uanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIlVzZXJMb2dpblZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwic3RhdGUiLCJwaG9uZU51bWJlciIsInZhbGlkYXRpb25FcnJvciIsInNob3dPVFAiLCJvdHAiLCJvdHBUaW1lb3V0IiwicmVmZXJyYWxDb2RlIiwicmVmZXJyYWwiLCJyZWZlcnJhbE5hbWUiLCJzbXNCdG5UeXBlIiwiZW5hYmxlT3RwUmVxdWVzdCIsImNvbXBvbmVudERpZE1vdW50IiwicmVzZXRBdXRoIiwiZmV0Y2hSZWZlcnJhbENvZGUiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwic2V0U3RhdGUiLCJuYW1lIiwiY2F0Y2giLCJlIiwiaW5wdXRIYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJtaXRPVFBSZXF1ZXN0IiwibnVtYmVyIiwicmVzZW5kRmxhZyIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwiYW5hbHl0aWNEYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwibG9naW4iLCJzZW5kRXZlbnQiLCJkYXRhIiwibWF0Y2giLCJzZW5kT1RQIiwiZXJyb3IiLCJzZXRUaW1lb3V0IiwidmVyaWZ5T1RQIiwiZXh0cmFQYXJhbXNEYXRhIiwic3VibWl0T1RQIiwiZXhpc3RzIiwidG9rZW4iLCJjbGVhckluc3VyYW5jZSIsInJlc2V0VmlwRGF0YSIsInVzZXJfZXhpc3RzIiwicmVmIiwiaGlzdG9yeSIsInB1c2giLCJjYWxsYmFjayIsInJlcGxhY2UiLCJnbyIsInJlcGxhY2VfdXJsIiwiX2hhbmRsZUtleVByZXNzIiwia2V5IiwiX2hhbmRsZUNvbnRpbnVlUHJlc3MiLCJyZW5kZXIiLCJyZWZlcl9hbW91bnQiLCJBU1NFVFNfQkFTRV9VUkwiLCJiaW5kIiwiZXJyb3JfbWVzc2FnZSIsInN1Ym1pdF9vdHAiLCJvdHBfcmVxdWVzdF9zZW50IiwiVXNlckxvZ2luIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3VjY2Vzc19tZXNzYWdlIiwib3RwX3JlcXVlc3Rfc3VjY2VzcyIsIm90cF9yZXF1ZXN0X2ZhaWwiLCJzdWJtaXRfb3RwX3N1Y2Nlc3MiLCJzdWJtaXRfb3RwX2ZhaWwiLCJBVVRIIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibWVzc2FnZV90eXBlIiwiY2IiLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBQ2UsQ0FBQyxFQUFFQSxLQUFGLEVBQUQsS0FBZTtBQUM3QixXQUFRO0FBQUE7QUFBQSxVQUFLLFdBQVksZUFBY0EsUUFBTSxrQkFBTixHQUF5QixFQUFHLEVBQTNEO0FBQ087QUFBQTtBQUFBLGNBQUcsV0FBVSxlQUFiLEVBQTZCLE9BQU8sRUFBRUMsT0FBTyxTQUFULEVBQW9CQyxVQUFVLEVBQTlCLEVBQXBDO0FBQUE7QUFBQSxTQURQO0FBRU87QUFBQTtBQUFBLGNBQUssV0FBVSw0QkFBZixFQUE0QyxPQUFPLEVBQUVDLGVBQWUsQ0FBakIsRUFBbkQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFB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QVQsQ0FMbkI7QUFNSC9CLHNCQUFhLE1BQU0rQixTQUFTLDBCQUFUO0FBTmhCLEtBQVA7QUFRSCxDQVREOztrQkFZZSx5QkFBUVQsZUFBUixFQUF5QlEsa0JBQXpCLEVBQTZDWCxTQUE3QyxDIiwiZmlsZSI6Ijg1LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuXG5jbGFzcyBVc2VyTG9naW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yOiAnJyxcbiAgICAgICAgICAgIHNob3dPVFA6IGZhbHNlLFxuICAgICAgICAgICAgb3RwOiBcIlwiLFxuICAgICAgICAgICAgb3RwVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICByZWZlcnJhbENvZGU6IHBhcnNlZC5yZWZlcnJhbCB8fCBudWxsLFxuICAgICAgICAgICAgcmVmZXJyYWxOYW1lOiBudWxsLFxuICAgICAgICAgICAgc21zQnRuVHlwZTogbnVsbCxcbiAgICAgICAgICAgIGVuYWJsZU90cFJlcXVlc3Q6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5yZXNldEF1dGgoKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWZlcnJhbENvZGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hSZWZlcnJhbENvZGUodGhpcy5zdGF0ZS5yZWZlcnJhbENvZGUpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVmZXJyYWxOYW1lOiByZXMubmFtZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dEhhbmRsZXIoZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T1RQICYmIGUudGFyZ2V0Lm5hbWUgPT0gJ3Bob25lTnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsIHZhbGlkYXRpb25FcnJvcjogXCJcIiwgc2hvd09UUDogZmFsc2UsIG90cDogXCJcIiB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdE9UUFJlcXVlc3QobnVtYmVyLCByZXNlbmRGbGFnID0gZmFsc2UsIHZpYVNtcywgdmlhV2hhdHNhcHApIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmIChyZXNlbmRGbGFnKSB7XG4gICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUmVzZW5kT3RwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncmVzZW5kLW90cCcsICdtb2JpbGVObyc6IG51bWJlciwgJ3BhZ2VTb3VyY2UnOiBwYXJzZWQubG9naW4gfHwgJycsICdtb2RlJzogdmlhU21zID8gJ3ZpYVNtcycgOiB2aWFXaGF0c2FwcCA/ICd2aWFXaGF0c2FwcCcgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0dldE90cFJlcXVlc3QnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdnZXQtb3RwLXJlcXVlc3QnLCAnbW9iaWxlTm8nOiBudW1iZXIsICdwYWdlU291cmNlJzogcGFyc2VkLmxvZ2luIHx8ICcnLCAnbW9kZSc6IHZpYVNtcyA/ICd2aWFTbXMnIDogdmlhV2hhdHNhcHAgPyAndmlhV2hhdHNhcHAnIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRPVFAobnVtYmVyLCB2aWFTbXMsIHZpYVdoYXRzYXBwLCAndXNlci1sb2dpbicsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIkNvdWxkIG5vdCBnZW5lcmF0ZSBPVFAuXCIgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmlhV2hhdHNhcHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlT3RwUmVxdWVzdDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd09UUDogdHJ1ZSwgb3RwVGltZW91dDogdHJ1ZSwgc21zQnRuVHlwZTogdmlhU21zID8gdHJ1ZSA6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG90cFRpbWVvdXQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDAwKVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9LCA2MDAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG51bWJlciAoMTAgZGlnaXRzKVwiIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2ZXJpZnlPVFAoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5vdHApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIGVudGVyIE9UUFwiIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5waG9uZU51bWJlci5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiB9KVxuICAgICAgICAgICAgbGV0IGV4dHJhUGFyYW1zRGF0YSA9IHt9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN1Ym1pdE9UUCh0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0aGlzLnN0YXRlLm90cCwgZXh0cmFQYXJhbXNEYXRhLCAoZXhpc3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0cy50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhckluc3VyYW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRWaXBEYXRhKClcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cy51c2VyX2V4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5sb2dpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xvZ2luU3VjY2VzcycsICdwYWdlU291cmNlJzogcGFyc2VkLmxvZ2luLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsb2dpbi1zdWNjZXNzJywgJ21vYmlsZU5vJzogdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMb2dpblN1Y2Nlc3MnLCAncGFnZVNvdXJjZSc6ICdVTktOT1dOJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbG9naW4tc3VjY2VzcycsICdtb2JpbGVObyc6IHRoaXMuc3RhdGUucGhvbmVOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5yZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3VzZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZWQuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShwYXJzZWQuY2FsbGJhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUucmVmZXJyYWxOYW1lICYmIHRoaXMuc3RhdGUucmVmZXJyYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoJy8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBndG0gZXZlbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5sb2dpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1VzZXJSZWdpc3RlcmVkJywgJ3BhZ2VTb3VyY2UnOiBwYXJzZWQubG9naW4sICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3VzZXItcmVnaXN0ZXJlZCcsICdtb2JpbGVObyc6IHRoaXMuc3RhdGUucGhvbmVOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVXNlclJlZ2lzdGVyZWQnLCAncGFnZVNvdXJjZSc6ICdVTktOT1dOJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndXNlci1yZWdpc3RlcmVkJywgJ21vYmlsZU5vJzogdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcGxhY2VfdXJsID0gJy9zaWdudXA/J1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VfdXJsICs9IGBjYWxsYmFjaz0ke3BhcnNlZC5jYWxsYmFja30mYFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWZlcnJhbE5hbWUgJiYgdGhpcy5zdGF0ZS5yZWZlcnJhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlX3VybCArPSBgcmVmZXJyYWw9JHt0aGlzLnN0YXRlLnJlZmVycmFsQ29kZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKHJlcGxhY2VfdXJsKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBudW1iZXIgKDEwIGRpZ2l0cylcIiB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZUtleVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLnZlcmlmeU9UUCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlQ29udGludWVQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNob3dPVFApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdE9UUFJlcXVlc3QodGhpcy5zdGF0ZS5waG9uZU51bWJlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcCBsZ24tb3ZyZmxvd1wiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvbi1sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03ICBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9iaWxlLXZlcmlmaWNhdGlvbi1zY3JlZW4gcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG5vLXNoYWRvdyBuby1yb3VuZCBzaWduLXVwLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIG12LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWZlcnJhbE5hbWUgPyA8aDMgY2xhc3NOYW1lPVwic2lnbi1jb3Vwb24gZnctNzAwIG1iLTIgY3BuLWZvbnQtc3pcIj5HZXQgIDxzcGFuIGNsYXNzTmFtZT1cInJmdC1wcmljZS1zaXplXCI+JiM4Mzc3O3t0aGlzLnByb3BzLnJlZmVyX2Ftb3VudH08L3NwYW4+IGluIHlvdXIgd2FsbGV0PC9oMz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWZlcnJhbE5hbWUgPyA8aDMgY2xhc3NOYW1lPVwic2lnbi1jb3Vwb24gZnctNzAwXCI+U2lnbnVwIHRvIGNsYWltIHlvdXIgY2FzaGJhY2sgZnJvbTxiciAvPjxzcGFuIGNsYXNzTmFtZT1cImZ0LTI1XCI+e3RoaXMuc3RhdGUucmVmZXJyYWxOYW1lfTwvc3Bhbj4gPC9oMz4gOiA8aDMgY2xhc3NOYW1lPVwic2lnbi1jb3Vwb24gZnctNzAwXCIgc3R5bGU9e3sgZm9udFNpemU6IDE2IH19ID5TaWdudXAgJmFtcDsgZ2V0IGdyZWF0IG9mZmVycyBvbiB5b3VyIGRvY3RvciBhbmQgbGFiIGFwcG9pbnRtZW50czxiciAvPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCI+RW50ZXIgeW91ciBNb2JpbGUgTnVtYmVyIHRvIGNvbnRpbnVlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXZlcmlmaWNhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcmlmaS1tb2ItaW9jbiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tb2Iuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtb2JpbGUtZmllbGQgc3VwLWlucHV0LXBkbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXQgdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIjEwIGRpZ2l0IG1vYmlsZSBudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZUNvbnRpbnVlUHJlc3MuYmluZCh0aGlzKX0gYXV0b0NvbXBsZXRlPVwib2ZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93T1RQID8gPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBPVFBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5vdHB9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwib3RwXCIgb25LZXlQcmVzcz17dGhpcy5faGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3RwVGltZW91dCA/IFwiXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNlbmRPdHBcIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0cnVlLCB0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyBmYWxzZSA6IHRydWUsICF0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyBmYWxzZSA6IHRydWUpfT57dGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gJ1NlbmQgdmlhIFdoYXRzYXBwJyA6ICdTZW5kIHZpYSBTTVMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbmFibGVPdHBSZXF1ZXN0ID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8YSBjbGFzc05hbWU9XCJyZXNlbmRPdHBcIiBzdHlsZT17eyBjb2xvcjogJyNlYzBkMGQnIH19IG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSl9PlJlc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnByb3BzLmVycm9yX21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLnZhbGlkYXRpb25FcnJvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPVFAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy52ZXJpZnlPVFAuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuc3VibWl0X290cH0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVyaWZ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIGZhbHNlLCB0cnVlLCBmYWxzZSl9IGRpc2FibGVkPXt0aGlzLnByb3BzLm90cF9yZXF1ZXN0X3NlbnR9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGxnLXNtcy1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic21zLWljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvc21zaWNvbi5zdmcnfSAvPlZlcmlmeSBWaWEgU01TXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIGZhbHNlLCBmYWxzZSwgdHJ1ZSl9IGRpc2FibGVkPXt0aGlzLnByb3BzLm90cF9yZXF1ZXN0X3NlbnR9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGxnLXd0c3AtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIndodHNwLWljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvd2EtbG9nby1nci5zdmcnfSAvPlZlcmlmeSBWaWEgV2hhdHNhcHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndodHNhcHBFbmFibGUtY29udGFpbmVyIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ3dHNhcHAtY2hrLXR4dFwiPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy90aWNrLnN2Zyd9IC8+IEVuYWJsZSBXaGF0c2FwcCBmb3Igc2VhbWxlc3MgY29tbXVuaWNhdGlvbjwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmdy01MDAgcC0zIHB0LTBcIiBzdHlsZT17eyBmb250U2l6ZTogOSwgY29sb3I6ICcjOGE4YThhJyB9fSA+QnkgcHJvY2VlZGluZywgeW91IGhlcmVieSBhZ3JlZSB0byB0aGUgPGEgaHJlZj1cIi90ZXJtc1wiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSA+RW5kIFVzZXIgQWdyZWVtZW50PC9hPiBhbmQgPGEgaHJlZj1cIi9wcml2YWN5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5Qcml2YWN5IFBvbGljeS48L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXQtMjEgc2lnbi11cC1jb250YWluZXIgbXJuZy1idG0tc2NybFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZ24tdXAtaW5zdHJ1Y3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdobnVwLXNjbmQtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5kb2NwcmltZTwvYj4gaXMgeW91ciA8c3Bhbj5GcmVlIEZhbWlseSBEb2N0b3IgRm9yIExpZmU8L3NwYW4+IDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWduLXVwLWxpc2l0bmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zdS1jaGF0LnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhdCBpbnN0YW50bHksIGFueXRpbWUsIGFueXdoZXJlIHdpdGggcXVhbGlmaWVkIGRvY3RvcnMgZm9yIGZyZWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc3Utb2Zmci5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCB1cHRvIDUwJSBvZmYgb24gZG9jdG9yIGFwcG9pbnRtZW50cyBhbmQgbGFiIHRlc3RzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBub0NoYXRCdXR0b249e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9naW5WaWV3XG4iLCJpbXBvcnQgVXNlckxvZ2luVmlldyBmcm9tICcuL1VzZXJMb2dpbidcblxuZXhwb3J0IGRlZmF1bHQgVXNlckxvZ2luVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZW5kT1RQLCBzdWJtaXRPVFAsIHJlc2V0QXV0aCwgZmV0Y2hSZWZlcnJhbENvZGUsIGNsZWFySW5zdXJhbmNlLCByZXNldFZpcERhdGEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgVXNlckxvZ2luVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvVXNlckxvZ2luJ1xuXG5cbmNsYXNzIFVzZXJMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VXNlckxvZ2luVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGxldCB7XG4gICAgICAgIHRva2VuLFxuICAgICAgICBlcnJvcl9tZXNzYWdlLFxuICAgICAgICBzdWNjZXNzX21lc3NhZ2UsXG4gICAgICAgIG90cF9yZXF1ZXN0X3NlbnQsXG4gICAgICAgIG90cF9yZXF1ZXN0X3N1Y2Nlc3MsXG4gICAgICAgIG90cF9yZXF1ZXN0X2ZhaWwsXG4gICAgICAgIHN1Ym1pdF9vdHAsXG4gICAgICAgIHN1Ym1pdF9vdHBfc3VjY2VzcyxcbiAgICAgICAgc3VibWl0X290cF9mYWlsLFxuICAgICAgICBwaG9uZU51bWJlclxuICAgIH0gPSBzdGF0ZS5BVVRIXG5cbiAgICAgbGV0IHsgcmVmZXJfYW1vdW50IH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2tlbixcbiAgICAgICAgZXJyb3JfbWVzc2FnZSxcbiAgICAgICAgc3VjY2Vzc19tZXNzYWdlLFxuICAgICAgICBvdHBfcmVxdWVzdF9zZW50LFxuICAgICAgICBvdHBfcmVxdWVzdF9zdWNjZXNzLFxuICAgICAgICBvdHBfcmVxdWVzdF9mYWlsLFxuICAgICAgICBzdWJtaXRfb3RwLFxuICAgICAgICBzdWJtaXRfb3RwX3N1Y2Nlc3MsXG4gICAgICAgIHN1Ym1pdF9vdHBfZmFpbCxcbiAgICAgICAgcGhvbmVOdW1iZXIsXG4gICAgICAgIHJlZmVyX2Ftb3VudFxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VuZE9UUDogKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikgPT4gZGlzcGF0Y2goc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpKSxcbiAgICAgICAgc3VibWl0T1RQOiAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zRGF0YSwgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdE9UUChudW1iZXIsIG90cCwgZXh0cmFQYXJhbXNEYXRhLCBjYikpLFxuICAgICAgICByZXNldEF1dGg6ICgpID0+IGRpc3BhdGNoKHJlc2V0QXV0aCgpKSxcbiAgICAgICAgZmV0Y2hSZWZlcnJhbENvZGU6IChjb2RlKSA9PiBkaXNwYXRjaChmZXRjaFJlZmVycmFsQ29kZShjb2RlKSksXG4gICAgICAgIGNsZWFySW5zdXJhbmNlOiAoKSA9PiBkaXNwYXRjaChjbGVhckluc3VyYW5jZSgpKSxcbiAgICAgICAgcmVzZXRWaXBEYXRhOigpID0+IGRpc3BhdGNoKHJlc2V0VmlwRGF0YSgpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyTG9naW4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==