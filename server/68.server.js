exports.ids = [68];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Loader extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CategoryPopup extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

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
                                        tests.parameter_count > 1 ? `(includes ${tests.parameter_count} tests)` : ''
                                    );
                                }) : ''
                            )
                        )
                    )
                )
            )
        );
    }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class CareLoginPopup extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            validationError: '',
            showOTP: false,
            otp: "",
            otpTimeout: false,
            error_message: '',
            smsBtnType: null
        };
    }
    inputHandler(e) {
        if (this.state.showOTP && e.target.name == 'phoneNumber') {
            this.setState({ [e.target.name]: e.target.value, validationError: "", showOTP: false, otp: "" });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    submitOTPRequest(number, resendFlag = false, viaSms, viaWhatsapp) {
        let parsed = queryString.parse(this.props.location.search);
        if (resendFlag) {
            let analyticData = {
                'Category': 'ConsumerApp', 'Action': 'ResendOtp', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'resend-otp', 'mobileNo': number, 'pageSource': parsed.login || '', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : '' };
            _gtm2.default.sendEvent({ data: analyticData });
        } else {
            let analyticData = {
                'Category': 'ConsumerApp', 'Action': 'GetOtpRequest', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'get-otp-request', 'mobileNo': number, 'pageSource': parsed.login || '', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : ''
            };
            _gtm2.default.sendEvent({ data: analyticData });
        }
        if (number.match(/^[56789]{1}[0-9]{9}$/)) {
            this.setState({ validationError: "" });
            this.props.sendOTP(number, viaSms, viaWhatsapp, 'care-login', error => {
                if (error) {
                    // this.setState({ validationError: "Could not generate OTP." })
                } else {
                    this.setState({ showOTP: true, otpTimeout: true, smsBtnType: viaSms ? true : false });
                    setTimeout(() => {
                        this.setState({ otpTimeout: false });
                    }, 20000);
                }
            });
        } else {
            this.setState({ validationError: "Please provide a valid number (10 digits)" });
        }
    }

    verifyOTP() {
        let self = this;
        if (!this.state.otp) {
            this.setState({ validationError: "Please enter OTP" });
            return;
        }
        if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
            this.setState({ validationError: "" });
            let extraParams = {};
            this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParams, exists => {
                if (exists.code == 'invalid') {
                    this.setState({ error_message: exists.message });
                } else {
                    this.props.getIsCareDetails(resp => {
                        // get user subscription plan details
                        if (resp && resp.has_active_plan) {
                            this.props.history.push('/prime/success?user_plan=' + resp.user_plan_id);
                        } else {
                            let url = '/prime/booking?plan_id=' + this.props.selectedPlanId;
                            this.props.history.push(url);
                        }
                    });
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
        );
    }
}
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

var _react = __webpack_require__(/*! react */ "react");

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

class PrimeCareView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
            infoData: '',
            showLoginPopup: false,
            selectedPlanId: ''
        };
    }

    buyNow(plan_id) {
        let url = '/prime/booking?plan_id=' + plan_id;
        if (!_storage2.default.checkAuth()) {
            // this.props.history.replace(`/login?callback=`+url)
            this.setState({ 'selectedPlanId': plan_id, 'showLoginPopup': true });
        } else {
            this.props.getIsCareDetails(resp => {
                // get user subscription plan details
                if (resp && resp.has_active_plan) {
                    this.props.history.push('/prime/success?user_plan=' + resp.user_plan_id);
                } else {
                    this.props.history.push(url);
                }
            });
        }
    }

    closeInfo() {
        this.setState({ infoData: '', showInfo: false });
    }

    hideLoginPopup() {
        this.setState({ showLoginPopup: false });
    }

    testInfo(test) {
        let lat = 28.644800;
        let long = 77.216721;
        if (this.props.selectedLocation !== null) {
            lat = this.props.selectedLocation.geometry.location.lat;
            long = this.props.selectedLocation.geometry.location.lng;

            if (typeof lat === 'function') lat = lat();
            if (typeof long === 'function') long = long();
        }
        let selected_test_ids = [];
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

    navigateTo(where, type, data, e) {
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

    render() {
        if (this.props.data && Object.keys(this.props.data).length > 0) {
            let self = this;
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
                                            Object.entries(this.props.data.plans).map(function ([key, value]) {
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
                                                                    Object.entries(value.features).map(function ([k, v]) {
                                                                        let feature_detail = self.props.data.feature_details.filter(x => x.id == v.id);
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
                                { href: '/insurance/insurance-plans', onClick: e => {
                                        let data = {
                                            'Category': 'ConsumerApp', 'Action': 'MobileFooterBookTestClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'desktop-navbar-insurance-clicked'
                                        };
                                        _gtm2.default.sendEvent({ data: data });
                                        e.preventDefault();
                                        this.navigateTo("/insurance/insurance-plans?source=desktop-navbar-insurance-clicked");
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
                                { href: '/search', onClick: e => {
                                        e.preventDefault();
                                        this.navigateTo("/search", 'opd');
                                    } },
                                'Find a Doctor'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '/search', onClick: e => {
                                        e.preventDefault();
                                        this.navigateTo("/search", 'lab');
                                    } },
                                'Lab Tests'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '/full-body-checkup-health-packages', onClick: e => {
                                        e.preventDefault();
                                        this.navigateTo('/full-body-checkup-health-packages');
                                    } },
                                'Health Packages'
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: '/online-consultation', onClick: e => {
                                        e.preventDefault();
                                        this.navigateTo('/online-consultation');
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _primeCareView = __webpack_require__(/*! ../../components/commons/primeCare/primeCareView.js */ "./dev/js/components/commons/primeCare/primeCareView.js");

var _primeCareView2 = _interopRequireDefault(_primeCareView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class primeCare extends _react2.default.Component {
    constructor(props) {
        super(props);
        // if (!STORAGE.checkAuth()) {
        //     this.props.history.replace(`/login?callback=/prime/plans`)
        // }
        this.state = {
            data: '',
            feature_data: {}
        };
    }

    componentDidMount() {
        this.props.getCareDetails(resp => {
            // get care plans
            if (resp) {
                let feature_data = {};
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
                this.setState({ data: resp, feature_data: feature_data });
            }
        });
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return _react2.default.createElement(_primeCareView2.default, _extends({}, this.props, { data: this.state.data, feature_data: this.state.feature_data }));
    }
}

const mapStateToProps = state => {

    const {
        selectedLocation
    } = state.SEARCH_CRITERIA_LABS;

    return {
        selectedLocation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCareDetails: callback => dispatch((0, _index.getCareDetails)(callback)),
        setPackageId: (package_id, isHomePage) => dispatch((0, _index.setPackageId)(package_id, isHomePage)),
        sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
        submitOTP: (number, otp, extraParamsData, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb)),
        resetAuth: () => dispatch((0, _index.resetAuth)()),
        getIsCareDetails: cb => dispatch((0, _index.getIsCareDetails)(cb)),
        selectSearchType: type => dispatch((0, _index.selectSearchType)(type))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(primeCare);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9wcmltZUNhcmUvY2FyZUluZm9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3ByaW1lQ2FyZS9jYXJlTG9naW5Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3ByaW1lQ2FyZS9wcmltZUNhcmVWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NhcmUvcHJpbWVDYXJlLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiQ2F0ZWdvcnlQb3B1cCIsImNsb3NlSW5mbyIsImJpbmQiLCJpbmZvRGF0YSIsIm5hbWUiLCJjdXJzb3IiLCJtYXJnaW5SaWdodCIsIkFTU0VUU19CQVNFX1VSTCIsIndpZHRoIiwiaW5jbHVkZWRfdGVzdHMiLCJsZW5ndGgiLCJtYXAiLCJ0ZXN0cyIsImkiLCJwYXJhbWV0ZXJfY291bnQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJDYXJlTG9naW5Qb3B1cCIsInN0YXRlIiwicGhvbmVOdW1iZXIiLCJ2YWxpZGF0aW9uRXJyb3IiLCJzaG93T1RQIiwib3RwIiwib3RwVGltZW91dCIsImVycm9yX21lc3NhZ2UiLCJzbXNCdG5UeXBlIiwiaW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsInNldFN0YXRlIiwidmFsdWUiLCJzdWJtaXRPVFBSZXF1ZXN0IiwibnVtYmVyIiwicmVzZW5kRmxhZyIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsImFuYWx5dGljRGF0YSIsIkdUTSIsImdldFVzZXJJZCIsImxvZ2luIiwic2VuZEV2ZW50IiwiZGF0YSIsIm1hdGNoIiwic2VuZE9UUCIsImVycm9yIiwic2V0VGltZW91dCIsInZlcmlmeU9UUCIsInNlbGYiLCJleHRyYVBhcmFtcyIsInN1Ym1pdE9UUCIsImV4aXN0cyIsImNvZGUiLCJtZXNzYWdlIiwiZ2V0SXNDYXJlRGV0YWlscyIsInJlc3AiLCJoYXNfYWN0aXZlX3BsYW4iLCJoaXN0b3J5IiwicHVzaCIsInVzZXJfcGxhbl9pZCIsInVybCIsInNlbGVjdGVkUGxhbklkIiwiX2hhbmRsZUtleVByZXNzIiwia2V5IiwiX2hhbmRsZUNvbnRpbnVlUHJlc3MiLCJoaWRlTG9naW5Qb3B1cCIsImNvbG9yIiwic3VibWl0X290cCIsIm90cF9yZXF1ZXN0X3NlbnQiLCJmb250U2l6ZSIsIlByaW1lQ2FyZVZpZXciLCJzaG93SW5mbyIsInNob3dMb2dpblBvcHVwIiwiYnV5Tm93IiwicGxhbl9pZCIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJ0ZXN0SW5mbyIsInRlc3QiLCJsYXQiLCJsb25nIiwic2VsZWN0ZWRMb2NhdGlvbiIsImdlb21ldHJ5IiwibG5nIiwic2VsZWN0ZWRfdGVzdF9pZHMiLCJpc19wYWNrYWdlIiwiaWQiLCJuYXZpZ2F0ZVRvIiwid2hlcmUiLCJ0eXBlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZWxlY3RTZWFyY2hUeXBlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcmdpblRvcCIsInBsYW5zIiwiZW50cmllcyIsInVubGltaXRlZF9vbmxpbmVfY29uc3VsdGF0aW9uIiwicHJpb3JpdHlfcXVldWUiLCJmZWF0dXJlcyIsImsiLCJ2IiwiZmVhdHVyZV9kZXRhaWwiLCJmZWF0dXJlX2RldGFpbHMiLCJmaWx0ZXIiLCJ4IiwiY291bnQiLCJzaG93X2RldGFpbHMiLCJtYXJnaW5MZWZ0IiwiY29tbW9uX3NldHRpbmdzIiwiaW5zdXJhbmNlX2F2YWlsYWJpbGl0eSIsInByaW1lQ2FyZSIsImZlYXR1cmVfZGF0YSIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0Q2FyZURldGFpbHMiLCJmZWF0dXJlIiwiY29uY2F0IiwicGxhbklkIiwid2luZG93Iiwic2Nyb2xsVG8iLCJtYXBTdGF0ZVRvUHJvcHMiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2FsbGJhY2siLCJzZXRQYWNrYWdlSWQiLCJwYWNrYWdlX2lkIiwiaXNIb21lUGFnZSIsIm1lc3NhZ2VfdHlwZSIsImNiIiwiZXh0cmFQYXJhbXNEYXRhIiwicmVzZXRBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxNQUFNQSxNQUFOLFNBQXFCQyxnQkFBTUMsU0FBM0IsQ0FBcUM7QUFDakNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUVEQyxhQUFTOztBQUVMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVyxLQUFLRCxLQUFMLENBQVdFLFNBQVgsSUFBd0IsZ0JBQXhDO0FBQ0ksbURBQUssV0FBVSxXQUFmLEdBREo7QUFHUSxpQkFBS0YsS0FBTCxDQUFXRyxXQUFYLEdBQ0k7QUFBQTtBQUFBLGtCQUFHLFdBQVUsZUFBYjtBQUFBO0FBQUEsYUFESixHQUMrRTtBQUp2RixTQURKO0FBU0g7QUFoQmdDOztrQkFtQnRCUCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7OztrQkFFZUEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBQ0E7Ozs7QUFHQSxNQUFNUSxhQUFOLFNBQTRCUCxnQkFBTUMsU0FBbEMsQ0FBNEM7QUFDeENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUdEQyxhQUFTOztBQUVMLGVBQVE7QUFBQTtBQUFBO0FBQ0osbURBQUssV0FBVSxzQ0FBZixFQUFzRCxTQUFTLEtB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R0gsQ0FURDs7QUFXQSxNQUFNMEMscUJBQXNCQyxRQUFELElBQWM7QUFDckMsV0FBTztBQUNIVCx3QkFBaUJVLFFBQUQsSUFBY0QsU0FBUywyQkFBZUMsUUFBZixDQUFULENBRDNCO0FBRUhDLHNCQUFjLENBQUNDLFVBQUQsRUFBYUMsVUFBYixLQUE0QkosU0FBUyx5QkFBYUcsVUFBYixFQUF5QkMsVUFBekIsQ0FBVCxDQUZ2QztBQUdIcEYsaUJBQVMsQ0FBQ2YsTUFBRCxFQUFRRSxNQUFSLEVBQWVDLFdBQWYsRUFBMkJpRyxZQUEzQixFQUF5Q0MsRUFBekMsS0FBZ0ROLFNBQVMsb0JBQVEvRixNQUFSLEVBQWVFLE1BQWYsRUFBc0JDLFdBQXRCLEVBQWtDaUcsWUFBbEMsRUFBZ0RDLEVBQWhELENBQVQsQ0FIdEQ7QUFJSGhGLG1CQUFXLENBQUNyQixNQUFELEVBQVNWLEdBQVQsRUFBY2dILGVBQWQsRUFBK0JELEVBQS9CLEtBQXNDTixTQUFTLHNCQUFVL0YsTUFBVixFQUFrQlYsR0FBbEIsRUFBdUJnSCxlQUF2QixFQUF3Q0QsRUFBeEMsQ0FBVCxDQUo5QztBQUtIRSxtQkFBVyxNQUFNUixTQUFTLHVCQUFULENBTGQ7QUFNSHRFLDBCQUFtQjRFLEVBQUQsSUFBUU4sU0FBUyw2QkFBaUJNLEVBQWpCLENBQVQsQ0FOdkI7QUFPSHRDLDBCQUFtQkgsSUFBRCxJQUFVbUMsU0FBUyw2QkFBaUJuQyxJQUFqQixDQUFUO0FBUHpCLEtBQVA7QUFTSCxDQVZEOztrQkFhZSx5QkFBUWdDLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q1gsU0FBN0MsQyIsImZpbGUiOiI2OC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cblxuY2xhc3MgQ2F0ZWdvcnlQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuICAgIFxuICAgIFxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VJbmZvLmJpbmQodGhpcyl9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBcIj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3AtdG9wLWhlYWRpbmcgbWItMCBwYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW5mb0RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJywgbWFyZ2luUmlnaHQ6ICcxMHB4J319IG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VJbmZvLmJpbmQodGhpcyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcnQtY2xvc2Uuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCB9fSAvPjwvc3Bhbj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybXMtY29uZGl0aW9uLWRpdiBwb3Atb25zY3JlZW4tc2Nyb2xsIHB0LTBcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1yYWRpbyBpbnNyYWRpby1vbi1wb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmVMaXN0aW5nIG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmluZm9EYXRhICYmIHRoaXMucHJvcHMuaW5mb0RhdGEuaW5jbHVkZWRfdGVzdHMubGVuZ3RoID4gMD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbmZvRGF0YS5pbmNsdWRlZF90ZXN0cy5tYXAoZnVuY3Rpb24gKHRlc3RzLGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybig8bGkga2V5PXtpfT57dGVzdHMubmFtZX0ge3Rlc3RzLnBhcmFtZXRlcl9jb3VudD4xP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgKGluY2x1ZGVzICR7dGVzdHMucGFyYW1ldGVyX2NvdW50fSB0ZXN0cylgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ308L2xpPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlQb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBDYXJlTG9naW5Qb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwaG9uZU51bWJlcjogJycsXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I6ICcnLFxuICAgICAgICAgICAgc2hvd09UUDogZmFsc2UsXG4gICAgICAgICAgICBvdHA6IFwiXCIsXG4gICAgICAgICAgICBvdHBUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yX21lc3NhZ2U6JycsXG4gICAgICAgICAgICBzbXNCdG5UeXBlOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd09UUCAmJiBlLnRhcmdldC5uYW1lID09ICdwaG9uZU51bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uRXJyb3I6IFwiXCIsIHNob3dPVFA6IGZhbHNlLCBvdHA6IFwiXCIgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXRPVFBSZXF1ZXN0KG51bWJlciwgcmVzZW5kRmxhZyA9IGZhbHNlLCB2aWFTbXMsIHZpYVdoYXRzYXBwKSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKHJlc2VuZEZsYWcpIHtcbiAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdSZXNlbmRPdHAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdyZXNlbmQtb3RwJywgJ21vYmlsZU5vJzogbnVtYmVyLCAncGFnZVNvdXJjZSc6IHBhcnNlZC5sb2dpbiB8fCAnJyAsICdtb2RlJzp2aWFTbXM/J3ZpYVNtcyc6dmlhV2hhdHNhcHA/J3ZpYVdoYXRzYXBwJzonJ31cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdHZXRPdHBSZXF1ZXN0JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZ2V0LW90cC1yZXF1ZXN0JywgJ21vYmlsZU5vJzogbnVtYmVyLCAncGFnZVNvdXJjZSc6IHBhcnNlZC5sb2dpbiB8fCAnJywgJ21vZGUnOnZpYVNtcz8ndmlhU21zJzp2aWFXaGF0c2FwcD8ndmlhV2hhdHNhcHAnOicnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlci5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kT1RQKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsJ2NhcmUtbG9naW4nLCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJDb3VsZCBub3QgZ2VuZXJhdGUgT1RQLlwiIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPVFA6IHRydWUsIG90cFRpbWVvdXQ6IHRydWUsIHNtc0J0blR5cGU6IHZpYVNtcyA/IHRydWUgOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdHBUaW1lb3V0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG51bWJlciAoMTAgZGlnaXRzKVwiIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2ZXJpZnlPVFAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUub3RwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBlbnRlciBPVFBcIiB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiXCIgfSlcbiAgICAgICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHt9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN1Ym1pdE9UUCh0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0aGlzLnN0YXRlLm90cCwgZXh0cmFQYXJhbXMsIChleGlzdHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZihleGlzdHMuY29kZSA9PSAnaW52YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcl9tZXNzYWdlOmV4aXN0cy5tZXNzYWdlfSlcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRJc0NhcmVEZXRhaWxzKChyZXNwKT0+eyAvLyBnZXQgdXNlciBzdWJzY3JpcHRpb24gcGxhbiBkZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwICYmIHJlc3AuaGFzX2FjdGl2ZV9wbGFuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ByaW1lL3N1Y2Nlc3M/dXNlcl9wbGFuPScrcmVzcC51c2VyX3BsYW5faWQpIFxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9ICcvcHJpbWUvYm9va2luZz9wbGFuX2lkPScrdGhpcy5wcm9wcy5zZWxlY3RlZFBsYW5JZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHVybCkgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbnVtYmVyICgxMCBkaWdpdHMpXCIgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy52ZXJpZnlPVFAoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZUNvbnRpbnVlUHJlc3MoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlLnNob3dPVFApe1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0T1RQUmVxdWVzdCh0aGlzLnN0YXRlLnBob25lTnVtYmVyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXHRyZW5kZXIoKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyAgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5XCIgb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTG9naW5Qb3B1cC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vYmlsZS12ZXJpZmljYXRpb24tc2NyZWVuIHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbm8tc2hhZG93IG5vLXJvdW5kIHNpZ24tdXAtY29udGFpbmVyIHdpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJywgbWFyZ2luUmlnaHQ6ICcxMHB4J319IG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZUxvZ2luUG9wdXAuYmluZCh0aGlzKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ydC1jbG9zZS5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE0IH19IC8+PC9zcGFuPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIG12LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aDMgY2xhc3NOYW1lPVwic2lnbi1jb3Vwb24gZnctNzAwXCI+UGxlYXNlIGxvZ2luIHRvIGNvbnRpbnVlPC9oMz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kIHNpZ24tdXAtbWJsLXRleHRcIj5FbnRlciB5b3VyIE1vYmlsZSBOdW1iZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtdmVyaWZpY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcmlmaS1tb2ItaW9jbiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbW9iLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbW9iaWxlLWZpZWxkIHN1cC1pbnB1dC1wZG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgZW50ZXItbW9iaWxlLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXQgdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIjEwIGRpZ2l0IG1vYmlsZSBudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZUNvbnRpbnVlUHJlc3MuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPVFAgPyA8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgZW50ZXItbW9iaWxlLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmYy1pbnB1dCB0ZXh0LWNlbnRlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgT1RQXCIgdmFsdWU9e3RoaXMuc3RhdGUub3RwfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cIm90cFwiIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZUtleVByZXNzLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vdHBUaW1lb3V0ID8gXCJcIiA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNlbmRPdHBcIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0cnVlLCB0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyBmYWxzZSA6IHRydWUsICF0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyBmYWxzZSA6IHRydWUpfT57dGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8nU2VuZCB2aWEgV2hhdHNhcHAnOidTZW5kIHZpYSBTTVMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNlbmRPdHBcIiBzdHlsZT17e2NvbG9yOicjZWMwZDBkJ319IG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSl9PlJlc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlIG0tMCBtYi0yXCI+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLnZhbGlkYXRpb25FcnJvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd09UUCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudmVyaWZ5T1RQLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnByb3BzLnN1Ym1pdF9vdHB9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJpZnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCBmYWxzZSwgdHJ1ZSwgZmFsc2UpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5vdHBfcmVxdWVzdF9zZW50fSBjbGFzc05hbWU9XCJ2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1zbSBsZy1zbXMtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbXMtaWNvXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9zbXNpY29uLnN2Zyd9IC8+VmVyaWZ5IFZpYSBTTVNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgZmFsc2UsIGZhbHNlLCB0cnVlKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMub3RwX3JlcXVlc3Rfc2VudH0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc20gbGctd3RzcC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIndodHNwLWljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvd2EtbG9nby1nci5zdmcnfSAvPlZlcmlmeSBWaWEgV2hhdHNhcHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZnctNTAwIHAtM1wiIHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6ICcjOGE4YThhJyB9fSA+QnkgcHJvY2VlZGluZywgeW91IGhlcmVieSBhZ3JlZSB0byB0aGUgPGEgaHJlZj1cIi90ZXJtc1wiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSA+RW5kIFVzZXIgQWdyZWVtZW50PC9hPiBhbmQgPGEgaHJlZj1cIi9wcml2YWN5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5Qcml2YWN5IFBvbGljeS48L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PiApXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZUxvZ2luUG9wdXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBJbmZvUG9wdXAgZnJvbSAnLi9jYXJlSW5mb1BvcHVwLmpzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBDYXJlTG9naW5Qb3B1cCBmcm9tICcuL2NhcmVMb2dpblBvcHVwLmpzJ1xuXG5jbGFzcyBQcmltZUNhcmVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dJbmZvOiBmYWxzZSxcbiAgICAgICAgICAgIGluZm9EYXRhOiAnJyxcbiAgICAgICAgICAgIHNob3dMb2dpblBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkUGxhbklkOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnV5Tm93KHBsYW5faWQpIHtcbiAgICAgICAgbGV0IHVybCA9ICcvcHJpbWUvYm9va2luZz9wbGFuX2lkPScgKyBwbGFuX2lkXG4gICAgICAgIGlmICghU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9sb2dpbj9jYWxsYmFjaz1gK3VybClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAnc2VsZWN0ZWRQbGFuSWQnOiBwbGFuX2lkLCAnc2hvd0xvZ2luUG9wdXAnOiB0cnVlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldElzQ2FyZURldGFpbHMoKHJlc3ApID0+IHsgLy8gZ2V0IHVzZXIgc3Vic2NyaXB0aW9uIHBsYW4gZGV0YWlsc1xuICAgICAgICAgICAgICAgIGlmIChyZXNwICYmIHJlc3AuaGFzX2FjdGl2ZV9wbGFuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvcHJpbWUvc3VjY2Vzcz91c2VyX3BsYW49JyArIHJlc3AudXNlcl9wbGFuX2lkKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHVybClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VJbmZvKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5mb0RhdGE6ICcnLCBzaG93SW5mbzogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBoaWRlTG9naW5Qb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2dpblBvcHVwOiBmYWxzZSB9KVxuICAgIH1cblxuICAgIHRlc3RJbmZvKHRlc3QpIHtcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsYXQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxlY3RlZF90ZXN0X2lkcyA9IFtdXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZGF0YS5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAvLyAgICAgc2VsZWN0ZWRfdGVzdF9pZHMucHVzaChyb3cuaWQpXG4gICAgICAgIC8vIH0pXG5cbiAgICAgICAgaWYgKHRlc3QuaXNfcGFja2FnZSAmJiB0ZXN0LnVybCAmJiB0ZXN0LnVybCAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nICsgdGVzdC51cmwgKyAnP3Rlc3RfaWRzPScgKyB0ZXN0LmlkICsgJyZzZWxlY3RlZF90ZXN0X2lkcz0nICsgc2VsZWN0ZWRfdGVzdF9pZHMgKyAnJmxhdD0nICsgbGF0ICsgJyZsb25nPScgKyBsb25nKVxuICAgICAgICB9IGVsc2UgaWYgKHRlc3QuaXNfcGFja2FnZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2gvdGVzdGluZm8/dGVzdF9pZHM9JyArIHRlc3QuaWQgKyAnJnNlbGVjdGVkX3Rlc3RfaWRzPScgKyBzZWxlY3RlZF90ZXN0X2lkcyArICcmbGF0PScgKyBsYXQgKyAnJmxvbmc9JyArIGxvbmcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtpbmZvRGF0YTpkYXRhLHNob3dJbmZvOnRydWV9KVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG8od2hlcmUsIHR5cGUsIGRhdGEsIGUpIHtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFNlYXJjaFR5cGUodHlwZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAod2hlcmUgPT0gJy9jaGF0Jykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUsIGRhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh3aGVyZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIGhvbWVQYWdlPXt0cnVlfSBzaG93U2VhcmNoPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXAgY2FyZS1uZXctYmFja2dyb3VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPFByb2ZpbGVIZWFkZXIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjYXJlSGVhZGVyQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZS1sb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmVCYWNrSWNvXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FyZWxlZnQtYXJyb3cuc3ZnXCJ9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmVMb2dpSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9nby1jYXJlLXdoaXRlLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVTdWJIZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZVN1YkltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NoYXBlLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVUZXh0Q29udFNjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZXN1YlR4dFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhcmVUZXh0LnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hhdC1tYWluLWNvbnRhaW5lclwiIHN0eWxlPXt7IG1hcmdpblRvcDogJycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjYXJlTWFpbkNvbnRhaW5lciBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEucGxhbnMgJiYgdGhpcy5wcm9wcy5kYXRhLnBsYW5zLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZGF0YS5wbGFucykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZVBsYW5zXCI+e3ZhbHVlLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlQ29tcGFyZVBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZVBsYW5QcmljZVwiPuKCuSB7cGFyc2VJbnQodmFsdWUuZGVhbF9wcmljZSl9L1lyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVQbGFuUHJpY2VDdXRcIj7igrkge3BhcnNlSW50KHZhbHVlLm1ycCl9L1lyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWJnd2hpdGVcIj48YnV0dG9uIG9uQ2xpY2s9e3NlbGYuYnV5Tm93LmJpbmQoc2VsZiwgdmFsdWUuaWQpfT5CdXkgTm93PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlQ2hlY2tDb250YWluZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJlY2hrSGVhZGluZ1wiPkZyZWUgVW5saW1pdGVkIE9ubGluZSBDb25zdWx0YXRpb24gPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZWNoa3N1YkhlYWRpbmdcIj5Bbnl0aW1lLCBBbnl3aGVyZSE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tDcmRjb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrQ3JkaW1nY29udCBuby1ndXR0ZXJzIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5kYXRhLnBsYW5zKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS51bmxpbWl0ZWRfb25saW5lX2NvbnN1bHRhdGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIiBrZXk9e2tleX0+IDxpbWcgY2xhc3NOYW1lPVwiY2hlY2tjcmRJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGVja2VkZ3JlZW4uc3ZnXCJ9IC8+PC9kaXY+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiIGtleT17a2V5fT4gPGltZyBjbGFzc05hbWU9XCJjcm9zc2NoZWNrY3JkSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd3Jvbmdjb3B5LnN2Z1wifSAvPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZUNoZWNrQ29udGFpbmVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZWNoa0hlYWRpbmdcIj5Qcmlvcml0eSBRdWV1ZSA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlY2hrc3ViSGVhZGluZ1wiPk5vIHdhaXRpbmcgdGltZSE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tDcmRjb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrQ3JkaW1nY29udCBuby1ndXR0ZXJzIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5kYXRhLnBsYW5zKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wcmlvcml0eV9xdWV1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIiBrZXk9e2tleX0+IDxpbWcgY2xhc3NOYW1lPVwiY2hlY2tjcmRJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGVja2VkZ3JlZW4uc3ZnXCJ9IC8+PC9kaXY+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiIGtleT17a2V5fT4gPGltZyBjbGFzc05hbWU9XCJjcm9zc2NoZWNrY3JkSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd3Jvbmdjb3B5LnN2Z1wifSAvPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5mZWF0dXJlX2RhdGEpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZV9kZXRhaWwgPSBzZWxmLnByb3BzLmRhdGEuZmVhdHVyZV9kZXRhaWxzLmZpbHRlcih4ID0+IHguaWQgPT0ga2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNhcmVDaGVja0NvbnRhaW5lcnNcIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmVjaGtIZWFkaW5nXCI+e2ZlYXR1cmVfZGV0YWlsWzBdLm5hbWV9IHtmZWF0dXJlX2RldGFpbFswXS50ZXN0LnNob3dfZGV0YWlscyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblRvcDogJzRweCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXtzZWxmLnRlc3RJbmZvLmJpbmQoc2VsZiwgZmVhdHVyZV9kZXRhaWxbMF0udGVzdCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9pbmZvLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tDcmRjb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tDcmRpbWdjb250IG5vLWd1dHRlcnMgcm93XCIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXModmFsdWUpLm1hcChmdW5jdGlvbiAoW2ssIHZhbF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIiBrZXk9e2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsLmNvdW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IDxzcGFuIGNsYXNzTmFtZT1cImNhcmVUZXN0WWVhclwiPiB7YCR7dmFsLmNvdW50fSBUZXN0L1lyYH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXY+IDxpbWcgY2xhc3NOYW1lPVwiY3Jvc3NjaGVja2NyZEltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dyb25nY29weS5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEucGxhbnMgJiYgdGhpcy5wcm9wcy5kYXRhLnBsYW5zLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlLW5ldy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FyZS1udy1oZWFkaW5nXCI+Q2hvb3NlIGEgcGxhbiB0aGF04oCZcyByaWdodCBmb3IgeW91ciBsb3ZlZCBvbmVzLjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZGF0YS5wbGFucykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmUtY2FyZC1jYXRnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZS1wcmQtaWNvblwiIHNyYz17dmFsdWUuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmUtcHJpY2UtY2RcIj7igrkge3BhcnNlSW50KHZhbHVlLmRlYWxfcHJpY2UpfS9ZclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7igrkge3BhcnNlSW50KHZhbHVlLm1ycCl9L1lyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZS1kdGxzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS51bmxpbWl0ZWRfb25saW5lX2NvbnN1bHRhdGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJlLXByZC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jYXJlY2hrLnN2Zyd9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GcmVlIFVubGltaXRlZCBPbmxpbmUgQ29uc3VsdGF0aW9uIDxzcGFuIGNsYXNzTmFtZT1cImdwLXNwblwiPihHZW5lcmFsIFBoeXNpY2lhbik8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUucHJpb3JpdHlfcXVldWUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJlLXByZC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jYXJlY2hrLnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpb3JpdHkgUXVldWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHZhbHVlLmZlYXR1cmVzKS5tYXAoZnVuY3Rpb24gKFtrLCB2XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmVhdHVyZV9kZXRhaWwgPSBzZWxmLnByb3BzLmRhdGEuZmVhdHVyZV9kZXRhaWxzLmZpbHRlcih4ID0+IHguaWQgPT0gdi5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYuY291bnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZS1wcmQtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY2FyZWNoay5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmZWF0dXJlX2RldGFpbFswXS5uYW1lfSBlYWNoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJycGQtaWNvblwiIG9uQ2xpY2s9e3NlbGYudGVzdEluZm8uYmluZChzZWxmLCBmZWF0dXJlX2RldGFpbFswXS50ZXN0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZV9kZXRhaWxbMF0udGVzdC5zaG93X2RldGFpbHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9pY29ucy9pbmZvLnN2Zyd9IC8+IDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiY2FyZS1jbnRcIj57di5jb3VudH0gVGVzdC9Zci48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlLW53LWJvb2tidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbGYuYnV5Tm93LmJpbmQoc2VsZiwgdmFsdWUuaWQpfT5CdXkgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmUtbmV3LW1haW4tY29udGlhbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEucGxhbnMgJiYgdGhpcy5wcm9wcy5kYXRhLnBsYW5zLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZS1uZXctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmUtaW50cm9cIj5JbnRyb2R1Y2luZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJudy1jYXJlTG9nb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvZ28tY2FyZS13aGl0ZS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJudy1jYXJlLXN1YmhlYWRpbmdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9DQVJFLXNiLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5kYXRhLnBsYW5zKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibnctY2FyZS1jb250ZW50XCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmUtZHRscy1saXN0IG53LWNhcmUtcGFyYWdyYXBoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudW5saW1pdGVkX29ubGluZV9jb25zdWx0YXRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmUtcHJkLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL253LWNoay5wbmcnfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GcmVlIFVubGltaXRlZCBPbmxpbmUgQ29uc3VsdGF0aW9uIDxzcGFuIGNsYXNzTmFtZT1cImdwLXNwblwiPihHZW5lcmFsIFBoeXNpY2lhbik8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLnByaW9yaXR5X3F1ZXVlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmUtcHJkLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL253LWNoay5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByaW9yaXR5IFF1ZXVlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHZhbHVlLmZlYXR1cmVzKS5tYXAoZnVuY3Rpb24gKFtrLCB2XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZlYXR1cmVfZGV0YWlsID0gc2VsZi5wcm9wcy5kYXRhLmZlYXR1cmVfZGV0YWlscy5maWx0ZXIoeCA9PiB4LmlkID09IHYuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5jb3VudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmUtcHJkLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL253LWNoay5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZmVhdHVyZV9kZXRhaWxbMF0ubmFtZX0gZWFjaFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicnBkLWljb25cIiBvbkNsaWNrPXtzZWxmLnRlc3RJbmZvLmJpbmQoc2VsZiwgZmVhdHVyZV9kZXRhaWxbMF0udGVzdCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlX2RldGFpbFswXS50ZXN0LnNob3dfZGV0YWlscyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9pY29ucy9pbmZvLnN2Zyd9IC8+IDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImNhcmUtY250XCI+e3YuY291bnR9IFRlc3QvWXIuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1jYXJlLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWxmLmJ1eU5vdy5iaW5kKHNlbGYsIHZhbHVlLmlkKX0+U2hvdyBDYXJlIEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKn0gPHNwYW4+e3NlbGYucHJvcHMuZGF0YSAmJiBzZWxmLnByb3BzLmRhdGEucGxhbnMgJiYgc2VsZi5wcm9wcy5kYXRhLnBsYW5zLmxlbmd0aD9gKOKCuSAke3BhcnNlSW50KHNlbGYucHJvcHMuZGF0YS5wbGFuc1swXS5kZWFsX3ByaWNlKX0pYDonJ308L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8UmlnaHRCYXIgY2xhc3NOYW1lPVwiY29sLW1kLTUgbWItM1wiIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93SW5mbyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9Qb3B1cCBpbmZvRGF0YT17dGhpcy5zdGF0ZS5pbmZvRGF0YX0gY2xvc2VJbmZvPXt0aGlzLmNsb3NlSW5mby5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9naW5Qb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlTG9naW5Qb3B1cCB7Li4udGhpcy5wcm9wc30gaGlkZUxvZ2luUG9wdXA9e3RoaXMuaGlkZUxvZ2luUG9wdXAuYmluZCh0aGlzKX0gc2VsZWN0ZWRQbGFuSWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRQbGFuSWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBob21lUGFnZT17dHJ1ZX0gc2hvd1NlYXJjaD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJTdWJMaW5rQ29udGFpbmVyIGQtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRfdGV4dF9jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29tbW9uX3NldHRpbmdzICYmIHRoaXMucHJvcHMuY29tbW9uX3NldHRpbmdzLmluc3VyYW5jZV9hdmFpbGFiaWxpdHkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9pbnN1cmFuY2UvaW5zdXJhbmNlLXBsYW5zXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdNb2JpbGVGb290ZXJCb29rVGVzdENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkZXNrdG9wLW5hdmJhci1pbnN1cmFuY2UtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL2luc3VyYW5jZS9pbnN1cmFuY2UtcGxhbnM/c291cmNlPWRlc2t0b3AtbmF2YmFyLWluc3VyYW5jZS1jbGlja2VkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5PUEQgSW5zdXJhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcGROZXdIZWFkZXJPZnJcIj5OZXc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NlYXJjaFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvc2VhcmNoXCIsICdvcGQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5GaW5kIGEgRG9jdG9yPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NlYXJjaFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvc2VhcmNoXCIsICdsYWInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5MYWIgVGVzdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZnVsbC1ib2R5LWNoZWNrdXAtaGVhbHRoLXBhY2thZ2VzXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL2Z1bGwtYm9keS1jaGVja3VwLWhlYWx0aC1wYWNrYWdlcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkhlYWx0aCBQYWNrYWdlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9vbmxpbmUtY29uc3VsdGF0aW9uXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUbygnL29ubGluZS1jb25zdWx0YXRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5PbmxpbmUgRG9jdG9yIENvbnN1bHRhdGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oJy9jb250YWN0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+Q29udGFjdCB1czwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJpbWVDYXJlVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7Z2V0Q2FyZURldGFpbHMsIHNldFBhY2thZ2VJZCwgc2VuZE9UUCwgc3VibWl0T1RQLCByZXNldEF1dGgsIGdldElzQ2FyZURldGFpbHMsIHNlbGVjdFNlYXJjaFR5cGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmltcG9ydCBQcmltZUNhcmVWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9wcmltZUNhcmUvcHJpbWVDYXJlVmlldy5qcydcblxuY2xhc3MgcHJpbWVDYXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgLy8gaWYgKCFTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShgL2xvZ2luP2NhbGxiYWNrPS9wcmltZS9wbGFuc2ApXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6ICcnLFxuICAgICAgICAgICAgZmVhdHVyZV9kYXRhOnt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRDYXJlRGV0YWlscygocmVzcCk9PnsgLy8gZ2V0IGNhcmUgcGxhbnNcbiAgICAgICAgICAgIGlmKHJlc3Ape1xuICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlX2RhdGEgPSB7fVxuICAgICAgICAgICAgICAgIHJlc3AucGxhbnMubWFwKGZ1bmN0aW9uIChwbGFucykge1xuICAgICAgICAgICAgICAgICAgICAgcGxhbnMuZmVhdHVyZXMubWFwKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmZWF0dXJlX2RhdGFbZmVhdHVyZS5pZF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZV9kYXRhW2ZlYXR1cmUuaWRdID0gW10uY29uY2F0KGZlYXR1cmVfZGF0YVtmZWF0dXJlLmlkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVfZGF0YVtmZWF0dXJlLmlkXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlX2RhdGFbZmVhdHVyZS5pZF0ucHVzaCh7cGxhbklkOiBwbGFucy5pZCwgY291bnQ6IGZlYXR1cmUuY291bnQsIGlkOiBmZWF0dXJlLmlkfSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6cmVzcCxmZWF0dXJlX2RhdGE6ZmVhdHVyZV9kYXRhfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQcmltZUNhcmVWaWV3IHsuLi50aGlzLnByb3BzfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IGZlYXR1cmVfZGF0YT17dGhpcy5zdGF0ZS5mZWF0dXJlX2RhdGF9Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRDYXJlRGV0YWlsczogKGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRDYXJlRGV0YWlscyhjYWxsYmFjaykpLFxuICAgICAgICBzZXRQYWNrYWdlSWQ6IChwYWNrYWdlX2lkLCBpc0hvbWVQYWdlKSA9PiBkaXNwYXRjaChzZXRQYWNrYWdlSWQocGFja2FnZV9pZCwgaXNIb21lUGFnZSkpLFxuICAgICAgICBzZW5kT1RQOiAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSA9PiBkaXNwYXRjaChzZW5kT1RQKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikpLFxuICAgICAgICBzdWJtaXRPVFA6IChudW1iZXIsIG90cCwgZXh0cmFQYXJhbXNEYXRhLCBjYikgPT4gZGlzcGF0Y2goc3VibWl0T1RQKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsIGNiKSksXG4gICAgICAgIHJlc2V0QXV0aDogKCkgPT4gZGlzcGF0Y2gocmVzZXRBdXRoKCkpLFxuICAgICAgICBnZXRJc0NhcmVEZXRhaWxzOiAoY2IpID0+IGRpc3BhdGNoKGdldElzQ2FyZURldGFpbHMoY2IpKSxcbiAgICAgICAgc2VsZWN0U2VhcmNoVHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdFNlYXJjaFR5cGUodHlwZSkpLFxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShwcmltZUNhcmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==