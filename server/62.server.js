exports.ids = [62];
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

/***/ "./dev/js/components/opd/searchResults/carouselView.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/opd/searchResults/carouselView.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CarouselView extends _react2.default.Component {

				scroll(type) {
								var elmnt = document.getElementById(`top_${this.props.dataType}`);

								if (elmnt && document.getElementsByClassName(`top_${this.props.dataType}_list`) && document.getElementById(`leftArrow_${this.props.dataType}`) && document.getElementById(`RightArrow_${this.props.dataType}`)) {

												let outerDivWidth = elmnt.offsetWidth;
												let childDivWidth = document.getElementsByClassName(`top_${this.props.dataType}_list`)[0].offsetWidth;
												let cardCount = document.getElementsByClassName(`top_${this.props.dataType}_list`)[0].childElementCount;
												let cardWidth = Math.ceil(childDivWidth / cardCount);

												let leftScroll = elmnt.scrollLeft;
												let scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
												let cardEnd = cardCount * cardWidth;

												if (type == 'right') {
																elmnt.scroll({ left: leftScroll + scrollVal, behavior: 'smooth' });
																if (cardEnd <= leftScroll + scrollVal + outerDivWidth) {
																				document.getElementById(`leftArrow_${this.props.dataType}`).classList.add("d-none");
																}
																document.getElementById(`RightArrow_${this.props.dataType}`).classList.remove("d-none");
												} else {
																elmnt.scroll({ left: leftScroll - scrollVal, behavior: 'smooth' });
																if (leftScroll - scrollVal <= 0) {
																				document.getElementById(`RightArrow_${this.props.dataType}`).classList.add("d-none");
																}
																document.getElementById(`leftArrow_${this.props.dataType}`).classList.remove("d-none");
												}
								}
				}

				render() {

								let { topHeading, dataList, dataType, topHospital, extraHeading, viewAll } = this.props;
								return _react2.default.createElement(
												'div',
												{ className: 'pakg-slider-container mt-10 mb-10 pkg-ntwk-mrgn' },
												_react2.default.createElement(
																'div',
																{ className: 'pkgSliderHeading pl-1' },
																_react2.default.createElement(
																				'h5',
																				null,
																				topHeading || ''
																),
																extraHeading && (viewAll || dataList.length >= 20) && _react2.default.createElement(
																				'span',
																				{ onClick: () => this.props.navigateTo() },
																				extraHeading
																)
												),
												_react2.default.createElement(
																'div',
																{ className: 'pkgSliderContainer network-slider', id: `top_${this.props.dataType}` },
																_react2.default.createElement(
																				'div',
																				{ className: `pkgCardsList d-inline-flex sub-wd-cards top_${this.props.dataType}_list` },
																				dataList.map((data, key) => {
																								return _react2.default.createElement(
																												'a',
																												{ key: `${key}_${data.id}`, href: '', className: 'pkgcustCards', onClick: () => this.props.carouselCardClicked(data, topHospital ? true : false) },
																												_react2.default.createElement(
																																'div',
																																{ className: 'pkgcardImgCont' },
																																data.logo && _react2.default.createElement('img', { style: { width: '82px' }, className: 'img-fluid', src: data.logo })
																												),
																												_react2.default.createElement(
																																'p',
																																{ className: 'pkgtstName prcd-height' },
																																data.name
																												)
																								);
																				})
																)
												),
												_react2.default.createElement(
																'div',
																{ className: 'pkglftRhtbtncont netwrk-btns' },
																_react2.default.createElement(
																				'div',
																				{ className: 'pkg-btnlft d-none', id: `RightArrow_${dataType}`, onClick: this.scroll.bind(this, 'left') },
																				_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
																),
																_react2.default.createElement(
																				'div',
																				{ className: 'pkg-btnrgt', id: `leftArrow_${dataType}`, onClick: this.scroll.bind(this, 'right') },
																				_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
																)
												)
								);
				}
}

exports.default = CarouselView;

/***/ }),

/***/ "./dev/js/components/vipClub/digitLogin.js":
/*!*************************************************!*\
  !*** ./dev/js/components/vipClub/digitLogin.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class VipLoginPopup extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_id: '',
            newprofile: {},
            phoneNumber: this.props.user_loggedIn_number ? this.props.user_loggedIn_number : '',
            validationError: '',
            showOTP: false,
            otp: "",
            otpTimeout: false,
            error_message: '',
            isLeadTrue: false,
            smsBtnType: null,
            selectedProfileAge: '',
            age: '',
            enableOtpRequest: false,
            user_name: '',
            search_city: '',
            filtered_city_list: [],
            showCitySearchPopup: false,
            selectedCity: ''
        };
    }
    inputHandler(e) {
        if (this.state.showOTP && e.target.name == 'phoneNumber') {
            this.setState({ [e.target.name]: e.target.value, validationError: "", showOTP: false, otp: "", error_message: '' });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    submitOTPRequest(number, resendFlag = false, viaSms, viaWhatsapp, fromPopup = null) {
        // to generate otp
        let lead_data = queryString.parse(this.props.location.search);
        if (number.match(/^[56789]{1}[0-9]{9}$/)) {

            this.setState({ validationError: "" });

            this.props.sendOTP(number, viaSms, viaWhatsapp, 'insurance-login', error => {
                // to generate otp
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

                    if (fromPopup && document.getElementsByClassName('ins-form-slider')) {
                        if (fromPopup == 'one') {
                            document.getElementsByClassName('ins-form-slider')[0].scroll({ left: 999, behavior: 'smooth' });
                        } else {
                            document.getElementsByClassName('ins-form-slider')[0].scroll({ left: -999, behavior: 'smooth' });
                        }
                    }
                }
            });
        } else {
            this.setState({ validationError: "Please provide a valid number (10 digits)" });
        }
    }

    verifyOTP() {
        // to verify entered otp
        let parsed = queryString.parse(this.props.location.search);
        let self = this;
        if (!this.state.otp) {
            this.setState({ validationError: "Please enter OTP", error_message: '' });
            return;
        }
        if (this.state.otp.length < 6 || this.state.otp.length > 6) {
            this.setState({ validationError: "Please enter valid OTP", error_message: '' });
            return;
        }

        let lead_data = parsed;
        if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
            this.setState({ validationError: "" });
            let extraParamsData = {};
            this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParamsData, exists => {
                if (exists.code == 'invalid') {
                    this.setState({ error_message: exists.message, validationError: '' });
                } else {
                    if (exists.token) {
                        let url = '/covid-form';
                        if (exists.user_exists) {
                            this.props.getUserProfile();
                            this.props.closeLeadPopup(); // to close lead popup
                            this.props.history.push(url);
                        } else {
                            this.props.closeLeadPopup();
                            this.props.history.push(url);
                        }
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
                this.submitOTPRequest(this.state.phoneNumber, '', true, false, 'one'); // to generate otp request
            }
        }
    }

    editNumber() {
        let number = this.state.phoneNumber;

        document.getElementsByClassName('ins-form-slider')[0].scroll({ left: -999, behavior: 'smooth' });

        setTimeout(() => {
            this.setState({ validationError: "", showOTP: false, otp: "", phoneNumber: '' }, () => {
                this.setState({ phoneNumber: number });
                document.getElementById("number").focus();
            });
        }, 200);
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'col-12 col-md-7  center-column' },
            _react2.default.createElement('div', { className: `cancel-overlay cancel-overlay-zindex`, onClick: this.props.closeLeadPopup.bind(this) }),
            _react2.default.createElement(
                'section',
                { className: 'mobile-verification-screen p-3' },
                _react2.default.createElement(
                    'div',
                    { className: `widget no-shadow no-round sign-up-container widget cancel-appointment-div cancel-popup` },
                    _react2.default.createElement(
                        'span',
                        { className: 'float-right', style: { cursor: 'pointer' }, onClick: this.props.closeLeadPopup.bind(this) },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rt-close.svg", style: { width: 14 } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-form-slider' },
                        _react2.default.createElement(
                            'div',
                            { className: 'one' },
                            _react2.default.createElement(
                                'div',
                                { className: 'widget-header text-center mv-header ' },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'fw-500 text-md sign-up-mbl-text' },
                                    'Enter your registered mobile number to login'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'widget-content text-center' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group mobile-field sup-input-pdng' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'adon-group enter-mobile-number' },
                                        _react2.default.createElement('input', { type: 'number', id: 'number', className: 'fc-input text-center', placeholder: 'Enter your mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this), disabled: this.state.showOTP ? true : false })
                                    )
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
                                _react2.default.createElement(
                                    'div',
                                    { className: 'text-center' },
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, false, true, false, 'one'), disabled: this.props.otp_request_sent, className: 'v-btn v-btn-primary btn-sm lg-sms-btn btn-grdnt' },
                                        'Let\u2019s get you in'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'two' },
                            _react2.default.createElement(
                                'div',
                                { className: 'widget-header text-center mv-header' },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'fw-500 text-md sign-up-mbl-text' },
                                    'Enter the OTP we\u2019ve sent to your mobile number'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'widget-content text-center' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group mobile-field sup-input-pdng' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'adon-group enter-mobile-number' },
                                        _react2.default.createElement('input', { type: 'number', id: 'number', className: 'fc-input text-center', placeholder: '10 digit mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this), disabled: this.state.showOTP ? true : false }),
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'ins-num-edit', onClick: this.editNumber.bind(this) },
                                            'Edit'
                                        )
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
                                                { className: 'resendOtp', style: { fontSize: '12px' }, onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, true, this.state.smsBtnType ? false : true, !this.state.smsBtnType ? false : true, 'one') },
                                                this.state.smsBtnType ? 'Prefer we WhatsApp it to you?' : 'Send via SMS'
                                            ),
                                            this.state.enableOtpRequest ? '' : _react2.default.createElement(
                                                'a',
                                                { className: 'resendOtp ins-otp-resend', onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, true, this.state.smsBtnType ? true : false, !this.state.smsBtnType ? true : false, 'one') },
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
                                        { onClick: this.verifyOTP.bind(this), disabled: this.props.submit_otp, className: 'btn-grdnt v-btn v-btn-primary btn-sm' },
                                        'Access Now'
                                    )
                                ) : _react2.default.createElement(
                                    'div',
                                    { className: 'text-center' },
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, false, true, false), disabled: this.props.otp_request_sent, className: 'v-btn v-btn-primary btn-sm lg-sms-btn btn-grdnt' },
                                        'Let\u2019s get you in'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-center fw-500 p-3', style: { fontSize: 12 } },
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
exports.default = VipLoginPopup;

/***/ }),

/***/ "./dev/js/components/vipClub/digitPlanView.js":
/*!****************************************************!*\
  !*** ./dev/js/components/vipClub/digitPlanView.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// const queryString = require('./node_modules/query-string');


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _digitStaticDataView = __webpack_require__(/*! ./digitStaticDataView.js */ "./dev/js/components/vipClub/digitStaticDataView.js");

var _digitStaticDataView2 = _interopRequireDefault(_digitStaticDataView);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _HelmetTags = __webpack_require__(/*! ../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _gtm = __webpack_require__(/*! ../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _digitLogin = __webpack_require__(/*! ./digitLogin.js */ "./dev/js/components/vipClub/digitLogin.js");

var _digitLogin2 = _interopRequireDefault(_digitLogin);

var _carouselView = __webpack_require__(/*! ../opd/searchResults/carouselView.js */ "./dev/js/components/opd/searchResults/carouselView.js");

var _carouselView2 = _interopRequireDefault(_carouselView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DigitPlanView extends _react2.default.Component {
    constructor(props) {
        super(props);
        let defaultPlan = '';

        this.state = {
            // selected_plan_data: this.props.selected_plan ? this.props.selected_plan : '',
            showPopup: false,
            selected_plan_data: defaultPlan ? defaultPlan : '',
            selected_plan_id: defaultPlan.id ? defaultPlan.id : '',
            toggleTabType: false
        };
    }

    componentWillReceiveProps(props) {
        let planData = props.plans;
        let defaultPlan = '';
        for (var i = 0; i < planData.length; i++) {
            if (planData[i].is_selected == true) {
                defaultPlan = planData[i];
            }
        }
        this.state.selected_plan_id = defaultPlan.id ? defaultPlan.id : '', this.state.selected_plan_data = defaultPlan ? defaultPlan : '', console.log(defaultPlan);
    }

    proceed() {
        if (_storage2.default.checkAuth()) {
            let url = '/covid-form';
            this.props.history.push(url);
        } else {
            this.setState({ showPopup: true });
        }
    }

    selectPlan(plan) {
        this.setState({ selected_plan_data: plan, selected_plan_id: plan.id });
        this.props.selectDigitPlan(plan);
    }
    hideLoginPopup() {
        this.setState({ showPopup: false });
    }
    render() {
        let self = this;

        return (
            // && Object.keys(this.props.vipClubList).length > 0 && this.props.selected_plan_data &&
            this.props.plans && Object.keys(this.props.plans).length > 0 ? _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'profile-body-wrap' },
                        _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
                        _react2.default.createElement(
                            'section',
                            { className: 'container article-container bottomMargin' },
                            this.state.showPopup ? _react2.default.createElement(_digitLogin2.default, _extends({}, this.props, { selected_plan: this.state.selected_plan_data, hideLoginPopup: this.hideLoginPopup.bind(this), closeLeadPopup: this.hideLoginPopup.bind(this) })) : '',
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
                                            _react2.default.createElement(_digitStaticDataView2.default, null),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-10 digi-step' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'ins-status-container' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'navigation_menu', id: '' },
                                                        _react2.default.createElement(
                                                            'ul',
                                                            { className: 'navigation_tabs', id: '' },
                                                            _react2.default.createElement(
                                                                'li',
                                                                { className: 'tab_inactive' },
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { href: '#' },
                                                                    'Choose Your Plan'
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                { className: 'tab_disabled' },
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { href: '#' },
                                                                    'Fill Member Details'
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                { className: 'tab_disabled' },
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { href: '#' },
                                                                    'Payment'
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-10' },
                                                _react2.default.createElement(
                                                    'table',
                                                    { className: 'table table-bordered insurance-tbl insurance-checkboxes digitTbl' },
                                                    _react2.default.createElement(
                                                        'thead',
                                                        null,
                                                        _react2.default.createElement(
                                                            'tr',
                                                            null,
                                                            _react2.default.createElement(
                                                                'th',
                                                                { className: 'tbl-first-head' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    'Coverage (1 Year)'
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'th',
                                                                { className: 'tbl-second-head' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    'Annual Premium'
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'tbody',
                                                        null,
                                                        _react2.default.createElement(
                                                            'tr',
                                                            null,
                                                            _react2.default.createElement(
                                                                'td',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'ins-dtls-members-edit' },
                                                                    this.props.is_edit ? 'Coverage Amounts' : 'Coverage Amounts'
                                                                )
                                                            ),
                                                            _react2.default.createElement('td', null)
                                                        ),
                                                        this.props.plans.map(plan => _react2.default.createElement(
                                                            'tr',
                                                            { key: plan.id },
                                                            _react2.default.createElement(
                                                                'td',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'dtl-radio', onClick: () => self.selectPlan(plan, self) },
                                                                    _react2.default.createElement(
                                                                        'label',
                                                                        { className: 'container-radio' },
                                                                        plan.name,
                                                                        _react2.default.createElement('input', { type: 'radio', checked: this.state.selected_plan_id == plan.id }),
                                                                        _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                                    )
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'td',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    '\u20B9 ',
                                                                    plan.amount
                                                                )
                                                            )
                                                        ))
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement('div', { className: 'bottomMargin' })
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'sticky-btn fixed insuBtnsContainer' },
                                _react2.default.createElement(
                                    'button',
                                    { onClick: () => this.proceed(), className: 'insu-right-orng-btn ins-buy-btn' },
                                    'Proceed'
                                )
                            )
                        )
                    )
                )
            ) : _react2.default.createElement('div', null)
        );
    }
}

exports.default = DigitPlanView;

/***/ }),

/***/ "./dev/js/components/vipClub/digitStaticDataView.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/vipClub/digitStaticDataView.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DigitStaticDataView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: 'one'
        };
    }

    render() {
        let dwnlUrl = 'https://drive.google.com/file/d/1furIUXTcmwgA6zQ1ipfydFDcEGleq2RE/view';
        return _react2.default.createElement(
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
                        'Digit Covid Group insurance'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ins-pdf-dwnload-div d-flex align-items-center' },
                    _react2.default.createElement(
                        'a',
                        { href: 'https://drive.google.com/file/d/1furIUXTcmwgA6zQ1ipfydFDcEGleq2RE/view', target: '_blank', download: true },
                        _react2.default.createElement('img', { src: "/assets" + "/img/pdf-dwn.png" })
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'fw-500' },
                        'Policy Details'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'ins-swich-tabs-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'ins-tabs' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            { onClick: () => this.setState({ toggle: 'one' }) },
                            _react2.default.createElement(
                                'p',
                                { className: this.state.toggle == "one" ? 'active' : 'ins-tab-inactive' },
                                'Features'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: () => this.setState({ toggle: 'two' }) },
                            _react2.default.createElement(
                                'p',
                                { className: this.state.toggle == "two" ? 'active' : 'ins-tab-inactive' },
                                'What\'s not Covered?'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ins-tabs-content widget-content' },
                    this.state.toggle == "one" ? _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Sum Insured Type : Individual for each member covered'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Room rent restriction : No Restriction'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'ICU limit : No Restriction'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Pre and Post hospitalization days : 30 days and 60 days respectively'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Road Ambulance : 1% of the SI (up to INR 5,000)'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Second medical opinion : Covered'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Types of hospitals covered : All'
                        )
                    ) : _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            'Hospitalisation expenses not in lieu of treatment for Coronavirus disease (COVID-19) will not be covered.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Insured members already treated for or quarantined for Coronavirus disease (COVID-19) before the policy issuance will not be covered.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Treatment taken outside India will not be covered.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Home hospitalisation (Domiciliary hospitalisation) expenses will not be covered.'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Hospitalisation expenses for patients only under investigation with inconclusive medical report will not be covered.'
                        )
                    )
                )
            )
        );
    }
}

exports.default = DigitStaticDataView;

/***/ }),

/***/ "./dev/js/containers/vipClub/digitInsurance.js":
/*!*****************************************************!*\
  !*** ./dev/js/containers/vipClub/digitInsurance.js ***!
  \*****************************************************/
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

var _digitPlanView = __webpack_require__(/*! ../../components/vipClub/digitPlanView.js */ "./dev/js/components/vipClub/digitPlanView.js");

var _digitPlanView2 = _interopRequireDefault(_digitPlanView);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class DigitInsurance extends _react2.default.Component {

    constructor(props) {
        super(props);
        const parsed = queryString.parse(this.props.location.search);
        this.state = {
            source: parsed.source,
            is_from_organic: parsed.fromOrganic,
            is_pb: parsed.utm_source ? parsed.utm_source && parsed.utm_source.includes('policybazaar.com') : false
        };
    }

    componentDidMount() {

        if (_storage2.default.checkAuth()) {
            this.props.getUserProfile(); // to get loggedIn user profile
        }
        if (window) {
            window.scrollTo(0, 0);
        }

        this.props.retrieveDigitPlanData();
    }

    render() {
        return _react2.default.createElement(_digitPlanView2.default, _extends({}, this.props, { plans: this.props.digitPlans }));
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { common_utm_tags, user_loggedIn_number } = state.USER;
    let { digitPlans, selected_digit_plan } = state.VIPCLUB;

    return {
        USER, common_utm_tags, user_loggedIn_number, digitPlans, selected_digit_plan
    };
};

const mapDispatchToProps = dispatch => {
    return {

        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
        submitOTP: (number, otp, extraParamsData, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb)),
        resetAuth: () => dispatch((0, _index.resetAuth)()),
        retrieveDigitPlanData: () => dispatch((0, _index.retrieveDigitPlanData)()),
        selectDigitPlan: (data, cb) => dispatch((0, _index.selectDigitPlan)(data, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DigitInsurance);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3NlYXJjaFJlc3VsdHMvY2Fyb3VzZWxWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL3ZpcENsdWIvZGlnaXRMb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL2RpZ2l0UGxhblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi9kaWdpdFN0YXRpY0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL3ZpcENsdWIvZGlnaXRJbnN1cmFuY2UuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJDYXJvdXNlbFZpZXciLCJzY3JvbGwiLCJ0eXBlIiwiZWxtbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YVR5cGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3V0ZXJEaXZXaWR0aCIsIm9mZnNldFdpZHRoIiwiY2hpbGREaXZXaWR0aCIsImNhcmRDb3VudCIsImNoaWxkRWxlbWVudENvdW50IiwiY2FyZFdpZHRoIiwiTWF0aCIsImNlaWwiLCJsZWZ0U2Nyb2xsIiwic2Nyb2xsTGVmdCIsInNjcm9sbFZhbCIsImZsb29yIiwiY2FyZEVuZCIsImxlZnQiLCJiZWhhdmlvciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvcEhlYWRpbmciLCJkYXRhTGlzdCIsInRvcEhvc3BpdGFsIiwiZXh0cmFIZWFkaW5nIiwidmlld0FsbCIsImxlbmd0aCIsIm5hdmlnYXRlVG8iLCJtYXAiLCJkYXRhIiwia2V5IiwiaWQiLCJjYXJvdXNlbENhcmRDbGlja2VkIiwibG9nbyIsIndpZHRoIiwibmFtZSIsImJpbmQiLCJBU1NFVFNfQkFTRV9VUkwiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJWaXBMb2dpblBvcHVwIiwic3RhdGUiLCJwcm9maWxlX2lkIiwibmV3cHJvZmlsZSIsInBob25lTnVtYmVyIiwidXNlcl9sb2dnZWRJbl9udW1iZXIiLCJ2YWxpZGF0aW9uRXJyb3IiLCJzaG93T1RQIiwib3RwIiwib3RwVGltZW91dCIsImVycm9yX21lc3NhZ2UiLCJpc0xlYWRUcnVlIiwic21zQnRuVHlwZSIsInNlbGVjdGVkUHJvZmlsZUFnZSIsImFnZSIsImVuYWJsZU90cFJlcXVlc3QiLCJ1c2VyX25hbWUiLCJzZWFyY2hfY2l0eSIsImZpbHRlcmVkX2NpdHlfbGlzdCIsInNob3dDaXR5U2VhcmNoUG9wdXAiLCJzZWxlY3RlZENpdHkiLCJpbnB1dEhhbmRsZXIiLCJlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJ2YWx1ZSIsInN1Ym1pdE9UUFJlcXVlc3QiLCJudW1iZXIiLCJyZXNlbmRGbGFnIiwidmlhU21zIiwidmlhV2hhdHNhcHAiLCJmcm9tUG9wdXAiLCJsZWFkX2RhdGEiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwibWF0Y2giLCJzZW5kT1RQIiwiZXJyb3IiLCJzZXRUaW1lb3V0IiwidmVyaWZ5T1RQIiwicGFyc2VkIiwic2VsZiIsImV4dHJhUGFyYW1zRGF0YSIsInN1Ym1pdE9UUCIsImV4aXN0cyIsImNvZGUiLCJtZXNzYWdlIiwidG9rZW4iLCJ1cmwiLCJ1c2VyX2V4aXN0cyIsImdldFVzZXJQcm9maWxlIiwiY2xvc2VMZWFkUG9wdXAiLCJoaXN0b3J5IiwicHVzaCIsIl9oYW5kbGVLZXlQcmVzcyIsIl9oYW5kbGVDb250aW51ZVByZXNzIiwiZWRpdE51bWJlciIsImZvY3VzIiwiY3Vyc29yIiwib3RwX3JlcXVlc3Rfc2VudCIsImZvbnRTaXplIiwic3VibWl0X290cCIsImNvbG9yIiwiRGlnaXRQbGFuVmlldyIsImRlZmF1bHRQbGFuIiwic2hvd1BvcHVwIiwic2VsZWN0ZWRfcGxhbl9kYXRhIiwic2VsZWN0ZWRfcGxhbl9pZCIsInRvZ2dsZVRhYlR5cGUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwicGxhbkRhdGEiLCJwbGFucyIsImkiLCJpc19zZWxlY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZWVkIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsInNlbGVjdFBsYW4iLCJwbGFuIiwic2VsZWN0RGlnaXRQbGFuIiwiaGlkZUxvZ2luUG9wdXAiLCJPYmplY3QiLCJrZXlzIiwiaXNfZWRpdCIsImFtb3VudCIsIkRpZ2l0U3RhdGljRGF0YVZpZXciLCJ0b2dnbGUiLCJkd25sVXJsIiwiRGlnaXRJbnN1cmFuY2UiLCJzb3VyY2UiLCJpc19mcm9tX29yZ2FuaWMiLCJmcm9tT3JnYW5pYyIsImlzX3BiIiwidXRtX3NvdXJjZSIsImluY2x1ZGVzIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInJldHJpZXZlRGlnaXRQbGFuRGF0YSIsImRpZ2l0UGxhbnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJVU0VSIiwiY29tbW9uX3V0bV90YWdzIiwic2VsZWN0ZWRfZGlnaXRfcGxhbiIsIlZJUENMVUIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm1lc3NhZ2VfdHlwZSIsImNiIiwicmVzZXRBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxNQUFNQSxNQUFOLFNBQXFCQyxnQkFBTUMsU0FBM0IsQ0FBcUM7QUFDakNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUVEQyxhQUFTOztBQUVMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVyxLQUFLRCxLQUFMLENBQVdFLFNBQVgsSUFBd0IsZ0JBQXhDO0FBQ0ks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RyxJQUFuQjtBQUNBLFFBQUksRUFBRUMsZUFBRixFQUFtQnBHLG9CQUFuQixLQUE0Q0osTUFBTXVHLElBQXREO0FBQ0EsUUFBSSxFQUFHRixVQUFILEVBQWNJLG1CQUFkLEtBQXNDekcsTUFBTTBHLE9BQWhEOztBQUVBLFdBQU87QUFDSEgsWUFERyxFQUNHQyxlQURILEVBQ29CcEcsb0JBRHBCLEVBQzBDaUcsVUFEMUMsRUFDc0RJO0FBRHRELEtBQVA7QUFHSCxDQVJEOztBQVVBLE1BQU1FLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3JDLFdBQU87O0FBRUgxRCx3QkFBZ0IsTUFBTTBELFNBQVMsNEJBQVQsQ0FGbkI7QUFHSHhFLGlCQUFTLENBQUNWLE1BQUQsRUFBUUUsTUFBUixFQUFlQyxXQUFmLEVBQTJCZ0YsWUFBM0IsRUFBeUNDLEVBQXpDLEtBQWdERixTQUFTLG9CQUFRbEYsTUFBUixFQUFlRSxNQUFmLEVBQXNCQyxXQUF0QixFQUFrQ2dGLFlBQWxDLEVBQWdEQyxFQUFoRCxDQUFULENBSHREO0FBSUhuRSxtQkFBVyxDQUFDakIsTUFBRCxFQUFTbkIsR0FBVCxFQUFjbUMsZUFBZCxFQUE4Qm9FLEVBQTlCLEtBQXFDRixTQUFTLHNCQUFVbEYsTUFBVixFQUFrQm5CLEdBQWxCLEVBQXNCbUMsZUFBdEIsRUFBdUNvRSxFQUF2QyxDQUFULENBSjdDO0FBS0hDLG1CQUFXLE1BQU1ILFNBQVMsdUJBQVQsQ0FMZDtBQU1IUiwrQkFBdUIsTUFBTVEsU0FBUyxtQ0FBVCxDQU4xQjtBQU9IM0IseUJBQWlCLENBQUM3RixJQUFELEVBQU0wSCxFQUFOLEtBQWFGLFNBQVMsNEJBQWdCeEgsSUFBaEIsRUFBcUIwSCxFQUFyQixDQUFUO0FBUDNCLEtBQVA7QUFTSCxDQVZEOztrQkFjZSx5QkFBUVIsZUFBUixFQUEwQkssa0JBQTFCLEVBQThDakIsY0FBOUMsQyIsImZpbGUiOiI2Mi5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBDYXJvdXNlbFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHNjcm9sbCh0eXBlKSB7XG4gICAgICAgIHZhciBlbG1udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b3BfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWApXG5cbiAgICAgICAgaWYoZWxtbnQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgdG9wXyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1fbGlzdGApICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsZWZ0QXJyb3dfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWApICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBSaWdodEFycm93XyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKSkge1xuXG4gICAgICAgIFx0bGV0IG91dGVyRGl2V2lkdGggPSBlbG1udC5vZmZzZXRXaWR0aFxuXHQgICAgICAgIGxldCBjaGlsZERpdldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgdG9wXyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1fbGlzdGApWzBdLm9mZnNldFdpZHRoXG5cdCAgICAgICAgbGV0IGNhcmRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYHRvcF8ke3RoaXMucHJvcHMuZGF0YVR5cGV9X2xpc3RgKVswXS5jaGlsZEVsZW1lbnRDb3VudFxuXHQgICAgICAgIGxldCBjYXJkV2lkdGggPSBNYXRoLmNlaWwoY2hpbGREaXZXaWR0aCAvIGNhcmRDb3VudClcblxuXHQgICAgICAgIGxldCBsZWZ0U2Nyb2xsID0gZWxtbnQuc2Nyb2xsTGVmdFxuXHQgICAgICAgIGxldCBzY3JvbGxWYWwgPSBNYXRoLmZsb29yKG91dGVyRGl2V2lkdGggLyBjYXJkV2lkdGgpICogY2FyZFdpZHRoXG5cdCAgICAgICAgbGV0IGNhcmRFbmQgPSBjYXJkQ291bnQgKiBjYXJkV2lkdGhcblxuXHQgICAgICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcblx0ICAgICAgICAgICAgZWxtbnQuc2Nyb2xsKHsgbGVmdDogbGVmdFNjcm9sbCArIHNjcm9sbFZhbCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG5cdCAgICAgICAgICAgIGlmIChjYXJkRW5kIDw9IGxlZnRTY3JvbGwgKyBzY3JvbGxWYWwgKyBvdXRlckRpdldpZHRoKSB7XG5cdCAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGVmdEFycm93XyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFJpZ2h0QXJyb3dfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBlbG1udC5zY3JvbGwoeyBsZWZ0OiBsZWZ0U2Nyb2xsIC0gc2Nyb2xsVmFsLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcblx0ICAgICAgICAgICAgaWYgKGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwgPD0gMCkge1xuXHQgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFJpZ2h0QXJyb3dfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWApLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGVmdEFycm93XyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG5cdCAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXG5cdFx0bGV0IHsgdG9wSGVhZGluZywgZGF0YUxpc3QsIGRhdGFUeXBlLCB0b3BIb3NwaXRhbCwgZXh0cmFIZWFkaW5nLCB2aWV3QWxsIH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWtnLXNsaWRlci1jb250YWluZXIgbXQtMTAgbWItMTAgcGtnLW50d2stbXJnblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVySGVhZGluZyBwbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNT57dG9wSGVhZGluZ3x8Jyd9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAge2V4dHJhSGVhZGluZyAmJiAodmlld0FsbCB8fCBkYXRhTGlzdC5sZW5ndGg+PSAyMCkgJiYgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5uYXZpZ2F0ZVRvKCl9PntleHRyYUhlYWRpbmd9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4+VmlldyBBbGw8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJDb250YWluZXIgbmV0d29yay1zbGlkZXJcIiBpZD17YHRvcF8ke3RoaXMucHJvcHMuZGF0YVR5cGV9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcGtnQ2FyZHNMaXN0IGQtaW5saW5lLWZsZXggc3ViLXdkLWNhcmRzIHRvcF8ke3RoaXMucHJvcHMuZGF0YVR5cGV9X2xpc3RgfT5cbiAgICAgICAgICAgICAgICAgICAgXHR7XG4gICAgICAgICAgICAgICAgICAgIFx0XHRkYXRhTGlzdC5tYXAoKGRhdGEsIGtleSk9PntcbiAgICAgICAgICAgICAgICBcdFx0XHRyZXR1cm4gPGEga2V5PXtgJHtrZXl9XyR7ZGF0YS5pZH1gfSBocmVmPScnIGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkc1wiICBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5jYXJvdXNlbENhcmRDbGlja2VkKGRhdGEsdG9wSG9zcGl0YWw/dHJ1ZTpmYWxzZSl9PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djYXJkSW1nQ29udFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0ZGF0YS5sb2dvICYmIDxpbWcgc3R5bGU9e3t3aWR0aDogJzgycHgnfX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtkYXRhLmxvZ299IC8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtndHN0TmFtZSBwcmNkLWhlaWdodFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgXHRcdH0pXG4gICAgICAgICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2xmdFJodGJ0bmNvbnQgbmV0d3JrLWJ0bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRubGZ0IGQtbm9uZVwiIGlkPXtgUmlnaHRBcnJvd18ke2RhdGFUeXBlfWB9IG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ2xlZnQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRucmd0XCIgaWQ9e2BsZWZ0QXJyb3dfJHtkYXRhVHlwZX1gfSBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdyaWdodCcpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxWaWV3OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIFZpcExvZ2luUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJvZmlsZV9pZDogJycsXG4gICAgICAgICAgICBuZXdwcm9maWxlOiB7fSxcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiB0aGlzLnByb3BzLnVzZXJfbG9nZ2VkSW5fbnVtYmVyP3RoaXMucHJvcHMudXNlcl9sb2dnZWRJbl9udW1iZXI6JycsXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I6ICcnLFxuICAgICAgICAgICAgc2hvd09UUDogZmFsc2UsXG4gICAgICAgICAgICBvdHA6IFwiXCIsXG4gICAgICAgICAgICBvdHBUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yX21lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgaXNMZWFkVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgICBzbXNCdG5UeXBlOiBudWxsLFxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9maWxlQWdlOiAnJyxcbiAgICAgICAgICAgIGFnZTogJycsXG4gICAgICAgICAgICBlbmFibGVPdHBSZXF1ZXN0OiBmYWxzZSxcbiAgICAgICAgICAgIHVzZXJfbmFtZTogJycsXG4gICAgICAgICAgICBzZWFyY2hfY2l0eTogJycsXG4gICAgICAgICAgICBmaWx0ZXJlZF9jaXR5X2xpc3Q6IFtdLFxuICAgICAgICAgICAgc2hvd0NpdHlTZWFyY2hQb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZENpdHk6ICcnXG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd09UUCAmJiBlLnRhcmdldC5uYW1lID09ICdwaG9uZU51bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uRXJyb3I6IFwiXCIsIHNob3dPVFA6IGZhbHNlLCBvdHA6IFwiXCIsIGVycm9yX21lc3NhZ2U6ICcnIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VibWl0T1RQUmVxdWVzdChudW1iZXIsIHJlc2VuZEZsYWcgPSBmYWxzZSwgdmlhU21zLCB2aWFXaGF0c2FwcCwgZnJvbVBvcHVwID0gbnVsbCkgeyAgLy8gdG8gZ2VuZXJhdGUgb3RwXG4gICAgICAgIGxldCBsZWFkX2RhdGEgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKG51bWJlci5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKSkge1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE9UUChudW1iZXIsIHZpYVNtcywgdmlhV2hhdHNhcHAsICdpbnN1cmFuY2UtbG9naW4nLCAoZXJyb3IpID0+IHsgLy8gdG8gZ2VuZXJhdGUgb3RwXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiQ291bGQgbm90IGdlbmVyYXRlIE9UUC5cIiB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWFXaGF0c2FwcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZU90cFJlcXVlc3Q6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T1RQOiB0cnVlLCBvdHBUaW1lb3V0OiB0cnVlLCBzbXNCdG5UeXBlOiB2aWFTbXMgPyB0cnVlIDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3RwVGltZW91dDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMDApXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZU90cFJlcXVlc3Q6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMDAwKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9tUG9wdXAgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcm9tUG9wdXAgPT0gJ29uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnMtZm9ybS1zbGlkZXInKVswXS5zY3JvbGwoeyBsZWZ0OiA5OTksIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnMtZm9ybS1zbGlkZXInKVswXS5zY3JvbGwoeyBsZWZ0OiAtOTk5LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbnVtYmVyICgxMCBkaWdpdHMpXCIgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZlcmlmeU9UUCgpIHsgIC8vIHRvIHZlcmlmeSBlbnRlcmVkIG90cFxuICAgICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUub3RwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBlbnRlciBPVFBcIiwgZXJyb3JfbWVzc2FnZTogJycgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm90cC5sZW5ndGggPCA2IHx8IHRoaXMuc3RhdGUub3RwLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIGVudGVyIHZhbGlkIE9UUFwiLCBlcnJvcl9tZXNzYWdlOiAnJyB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGVhZF9kYXRhID0gcGFyc2VkXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBob25lTnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiIH0pXG4gICAgICAgICAgICBsZXQgZXh0cmFQYXJhbXNEYXRhID0ge31cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3VibWl0T1RQKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRoaXMuc3RhdGUub3RwLCBleHRyYVBhcmFtc0RhdGEsIChleGlzdHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzLmNvZGUgPT0gJ2ludmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiBleGlzdHMubWVzc2FnZSwgdmFsaWRhdGlvbkVycm9yOiAnJyB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSAnL2NvdmlkLWZvcm0nXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RzLnVzZXJfZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUxlYWRQb3B1cCgpIC8vIHRvIGNsb3NlIGxlYWQgcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBudW1iZXIgKDEwIGRpZ2l0cylcIiB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZUtleVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLnZlcmlmeU9UUCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlQ29udGludWVQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNob3dPVFApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdE9UUFJlcXVlc3QodGhpcy5zdGF0ZS5waG9uZU51bWJlciwgJycsIHRydWUsIGZhbHNlLCAnb25lJykgLy8gdG8gZ2VuZXJhdGUgb3RwIHJlcXVlc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVkaXROdW1iZXIoKSB7XG4gICAgICAgIGxldCBudW1iZXIgPSB0aGlzLnN0YXRlLnBob25lTnVtYmVyXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJylbMF0uc2Nyb2xsKHsgbGVmdDogLTk5OSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiLCBzaG93T1RQOiBmYWxzZSwgb3RwOiBcIlwiLCBwaG9uZU51bWJlcjogJycgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaG9uZU51bWJlcjogbnVtYmVyIH0pXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXJcIikuZm9jdXMoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMjAwKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyAgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNhbmNlbC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleGB9IG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2JpbGUtdmVyaWZpY2F0aW9uLXNjcmVlbiBwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd2lkZ2V0IG5vLXNoYWRvdyBuby1yb3VuZCBzaWduLXVwLWNvbnRhaW5lciB3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAuYmluZCh0aGlzKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ydC1jbG9zZS5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE0IH19IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tc2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgbXYtaGVhZGVyIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCI+RW50ZXIgeW91ciByZWdpc3RlcmVkIG1vYmlsZSBudW1iZXIgdG8gbG9naW48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1vYmlsZS1maWVsZCBzdXAtaW5wdXQtcGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgZW50ZXItbW9iaWxlLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1vYmlsZSBudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZUNvbnRpbnVlUHJlc3MuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2hvd09UUCA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlIG0tMCBtYi0yXCI+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlIG0tMCBtYi0yXCI+e3RoaXMuc3RhdGUudmFsaWRhdGlvbkVycm9yfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsICdvbmUnKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMub3RwX3JlcXVlc3Rfc2VudH0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc20gbGctc21zLWJ0biBidG4tZ3JkbnRcIj5MZXTigJlzIGdldCB5b3UgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgbXYtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kIHNpZ24tdXAtbWJsLXRleHRcIj5FbnRlciB0aGUgT1RQIHdl4oCZdmUgc2VudCB0byB5b3VyIG1vYmlsZSBudW1iZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1vYmlsZS1maWVsZCBzdXAtaW5wdXQtcGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgZW50ZXItbW9iaWxlLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCIxMCBkaWdpdCBtb2JpbGUgbnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVOdW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwicGhvbmVOdW1iZXJcIiBvbktleVByZXNzPXt0aGlzLl9oYW5kbGVDb250aW51ZVByZXNzLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnN0YXRlLnNob3dPVFAgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbnMtbnVtLWVkaXRcIiBvbkNsaWNrPXt0aGlzLmVkaXROdW1iZXIuYmluZCh0aGlzKX0+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd09UUCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXQgdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE9UUFwiIHZhbHVlPXt0aGlzLnN0YXRlLm90cH0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJvdHBcIiBvbktleVByZXNzPXt0aGlzLl9oYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm90cFRpbWVvdXQgPyBcIlwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1zdGFydCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNlbmRPdHBcIiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19IG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IGZhbHNlIDogdHJ1ZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IGZhbHNlIDogdHJ1ZSwgJ29uZScpfT57dGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gJ1ByZWZlciB3ZSBXaGF0c0FwcCBpdCB0byB5b3U/JyA6ICdTZW5kIHZpYSBTTVMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVuYWJsZU90cFJlcXVlc3QgPyAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNlbmRPdHAgaW5zLW90cC1yZXNlbmRcIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0cnVlLCB0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyB0cnVlIDogZmFsc2UsICF0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyB0cnVlIDogZmFsc2UsICdvbmUnKX0+UmVzZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLnZhbGlkYXRpb25FcnJvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPVFAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy52ZXJpZnlPVFAuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuc3VibWl0X290cH0gY2xhc3NOYW1lPVwiYnRuLWdyZG50IHYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VzcyBOb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIGZhbHNlLCB0cnVlLCBmYWxzZSl9IGRpc2FibGVkPXt0aGlzLnByb3BzLm90cF9yZXF1ZXN0X3NlbnR9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGxnLXNtcy1idG4gYnRuLWdyZG50XCI+TGV04oCZcyBnZXQgeW91IGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmdy01MDAgcC0zXCIgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID5CeSBwcm9jZWVkaW5nLCB5b3UgaGVyZWJ5IGFncmVlIHRvIHRoZSA8YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5FbmQgVXNlciBBZ3JlZW1lbnQ8L2E+IGFuZCA8YSBocmVmPVwiL3ByaXZhY3lcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0gPlByaXZhY3kgUG9saWN5LjwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVmlwTG9naW5Qb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgRGlnaXRTdGF0aWNEYXRhVmlldyBmcm9tICcuL2RpZ2l0U3RhdGljRGF0YVZpZXcuanMnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgVmlwTG9naW5Qb3B1cCBmcm9tICcuL2RpZ2l0TG9naW4uanMnXG4vLyBjb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJy4vbm9kZV9tb2R1bGVzL3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IENhcm91c2VsVmlldyBmcm9tICcuLi9vcGQvc2VhcmNoUmVzdWx0cy9jYXJvdXNlbFZpZXcuanMnXG5cbmNsYXNzIERpZ2l0UGxhblZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBsZXQgZGVmYXVsdFBsYW4gPSAnJztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAvLyBzZWxlY3RlZF9wbGFuX2RhdGE6IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbiA/IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbiA6ICcnLFxuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgc2VsZWN0ZWRfcGxhbl9kYXRhOiBkZWZhdWx0UGxhbiA/IGRlZmF1bHRQbGFuIDogJycsXG4gICAgICAgICAgIHNlbGVjdGVkX3BsYW5faWQ6IGRlZmF1bHRQbGFuLmlkID8gZGVmYXVsdFBsYW4uaWQ6JycsXG4gICAgICAgICAgIHRvZ2dsZVRhYlR5cGU6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBsZXQgcGxhbkRhdGEgPSBwcm9wcy5wbGFucztcbiAgICAgICAgbGV0IGRlZmF1bHRQbGFuID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhbkRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHBsYW5EYXRhW2ldLmlzX3NlbGVjdGVkPT10cnVlICl7XG4gICAgICAgICAgICAgICAgZGVmYXVsdFBsYW4gPSBwbGFuRGF0YVtpXTsgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgIFxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5faWQgPSBkZWZhdWx0UGxhbi5pZCA/IGRlZmF1bHRQbGFuLmlkOicnLFxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fZGF0YT0gIGRlZmF1bHRQbGFuID8gZGVmYXVsdFBsYW4gOiAnJyxcbiAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdFBsYW4pOyBcbiAgICB9XG4gICAgXG4gICAgcHJvY2VlZCgpIHtcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIGxldCB1cmwgID0gJy9jb3ZpZC1mb3JtJ1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godXJsKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IHRydWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdFBsYW4ocGxhbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZF9wbGFuX2RhdGE6cGxhbixzZWxlY3RlZF9wbGFuX2lkOnBsYW4uaWR9KVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdERpZ2l0UGxhbihwbGFuKVxuICAgIH1cbiAgICBoaWRlTG9naW5Qb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cDogZmFsc2UgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMucGxhbnMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5wbGFucykubGVuZ3RoID4gMCA/IFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBhcnRpY2xlLWNvbnRhaW5lciBib3R0b21NYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlwTG9naW5Qb3B1cCB7Li4udGhpcy5wcm9wc30gc2VsZWN0ZWRfcGxhbj17dGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX2RhdGF9IGhpZGVMb2dpblBvcHVwPXt0aGlzLmhpZGVMb2dpblBvcHVwLmJpbmQodGhpcyl9IGNsb3NlTGVhZFBvcHVwPXt0aGlzLmhpZGVMb2dpblBvcHVwLmJpbmQodGhpcyl9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtMTAgY29sLWxnLTEwIGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IHRvcCBzZWN0aW9uIHdpdGggaWNvbnMgYW5kIGxpc3RpbmcgPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWdpdFN0YXRpY0RhdGFWaWV3IC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT0gdG9wIHNlY3Rpb24gd2l0aCBpY29ucyBhbmQgbGlzdGluZyA9PT09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IFN0ZXBzIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwIGRpZ2ktc3RlcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtc3RhdHVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9tZW51XCIgaWQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fdGFic1wiIGlkPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiX2luYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5DaG9vc2UgWW91ciBQbGFuPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3RhYl9kaXNhYmxlZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5GaWxsIE1lbWJlciBEZXRhaWxzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJfZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlBheW1lbnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT0gU3RlcHMgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT0gdGFibGUgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCBpbnN1cmFuY2UtdGJsIGluc3VyYW5jZS1jaGVja2JveGVzIGRpZ2l0VGJsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGJsLWZpcnN0LWhlYWRcIj48cD5Db3ZlcmFnZSAoMSBZZWFyKTwvcD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRibC1zZWNvbmQtaGVhZFwiPjxwPkFubnVhbCBQcmVtaXVtPC9wPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48cCBjbGFzc05hbWU9XCJpbnMtZHRscy1tZW1iZXJzLWVkaXRcIj57dGhpcy5wcm9wcy5pc19lZGl0ID8gJ0NvdmVyYWdlIEFtb3VudHMnIDogJ0NvdmVyYWdlIEFtb3VudHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wbGFucy5tYXAocGxhbj0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwbGFuLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCIgb25DbGljaz17KCk9PnNlbGYuc2VsZWN0UGxhbihwbGFuLHNlbGYpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj57cGxhbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5faWQgPT0gcGxhbi5pZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Bhbj7igrkge3BsYW4uYW1vdW50fTwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21NYXJnaW5cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT0gQ29tbW9uIGJ1dHRvbiA9PT09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1idG4gZml4ZWQgaW5zdUJ0bnNDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9jZWVkKCl9IGNsYXNzTmFtZT1cImluc3UtcmlnaHQtb3JuZy1idG4gaW5zLWJ1eS1idG5cIj5Qcm9jZWVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IENvbW1vbiBidXR0b24gPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDogPGRpdj48L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpZ2l0UGxhblZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIERpZ2l0U3RhdGljRGF0YVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdG9nZ2xlOiAnb25lJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZHdubFVybCA9ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmdXJJVVhUY213Z0E2elExaXBmeWRGRGNFR2xlcTJSRS92aWV3JztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWNhcmQtaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1uYW1lLWhlYWQtZGl2IGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydCBkaWdpdC1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBcIiB3aWR0aD1cIjYwXCIgc3JjPVwiaHR0cHM6Ly93d3cucmVpbnN1cmFuY2VuZS53cy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9kaWdpdC1pbnN1cmFuY2UtbG9nby5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpZ2l0IENvdmlkIEdyb3VwIGluc3VyYW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXBkZi1kd25sb2FkLWRpdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZnVySVVYVGNtd2dBNnpRMWlwZnlkRkRjRUdsZXEyUkUvdmlld1wiIHRhcmdldD1cIl9ibGFua1wiIGRvd25sb2FkID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BkZi1kd24ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb2xpY3kgRGV0YWlsczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtc3dpY2gtdGFicy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdGFic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+IHRoaXMuc2V0U3RhdGUoe3RvZ2dsZTonb25lJ30pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnRvZ2dsZSA9PSBcIm9uZVwiPydhY3RpdmUnOidpbnMtdGFiLWluYWN0aXZlJ30+RmVhdHVyZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PiB0aGlzLnNldFN0YXRlKHt0b2dnbGU6J3R3byd9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS50b2dnbGUgPT0gXCJ0d29cIj8nYWN0aXZlJzonaW5zLXRhYi1pbmFjdGl2ZSd9ID5XaGF0J3Mgbm90IENvdmVyZWQ/PC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdGFicy1jb250ZW50IHdpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b2dnbGUgPT0gXCJvbmVcIj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TdW0gSW5zdXJlZCBUeXBlIDogSW5kaXZpZHVhbCBmb3IgZWFjaCBtZW1iZXIgY292ZXJlZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Sb29tIHJlbnQgcmVzdHJpY3Rpb24gOiBObyBSZXN0cmljdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JQ1UgbGltaXQgOiBObyBSZXN0cmljdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QcmUgYW5kIFBvc3QgaG9zcGl0YWxpemF0aW9uIGRheXMgOiAzMCBkYXlzIGFuZCA2MCBkYXlzIHJlc3BlY3RpdmVseTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Sb2FkIEFtYnVsYW5jZSA6IDElIG9mIHRoZSBTSSAodXAgdG8gSU5SIDUsMDAwKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZWNvbmQgbWVkaWNhbCBvcGluaW9uIDogQ292ZXJlZDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UeXBlcyBvZiBob3NwaXRhbHMgY292ZXJlZCA6IEFsbDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SG9zcGl0YWxpc2F0aW9uIGV4cGVuc2VzIG5vdCBpbiBsaWV1IG9mIHRyZWF0bWVudCBmb3IgQ29yb25hdmlydXMgZGlzZWFzZSAoQ09WSUQtMTkpIHdpbGwgbm90IGJlIGNvdmVyZWQuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkluc3VyZWQgbWVtYmVycyBhbHJlYWR5IHRyZWF0ZWQgZm9yIG9yIHF1YXJhbnRpbmVkIGZvciBDb3JvbmF2aXJ1cyBkaXNlYXNlIChDT1ZJRC0xOSkgYmVmb3JlIHRoZSBwb2xpY3kgaXNzdWFuY2Ugd2lsbCBub3QgYmUgY292ZXJlZC48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VHJlYXRtZW50IHRha2VuIG91dHNpZGUgSW5kaWEgd2lsbCBub3QgYmUgY292ZXJlZC48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SG9tZSBob3NwaXRhbGlzYXRpb24gKERvbWljaWxpYXJ5IGhvc3BpdGFsaXNhdGlvbikgZXhwZW5zZXMgd2lsbCBub3QgYmUgY292ZXJlZC48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SG9zcGl0YWxpc2F0aW9uIGV4cGVuc2VzIGZvciBwYXRpZW50cyBvbmx5IHVuZGVyIGludmVzdGlnYXRpb24gd2l0aCBpbmNvbmNsdXNpdmUgbWVkaWNhbCByZXBvcnQgd2lsbCBub3QgYmUgY292ZXJlZC48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5leHBvcnQgZGVmYXVsdCBEaWdpdFN0YXRpY0RhdGFWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgc2VuZE9UUCwgc3VibWl0T1RQLCByZXNldEF1dGgsIGdldFVzZXJQcm9maWxlLCByZXRyaWV2ZURpZ2l0UGxhbkRhdGEsIHNlbGVjdERpZ2l0UGxhbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgRGlnaXRQbGFuVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpcENsdWIvZGlnaXRQbGFuVmlldy5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIERpZ2l0SW5zdXJhbmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHsgICAgXG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBzb3VyY2U6cGFyc2VkLnNvdXJjZSxcbiAgICAgICAgICAgIGlzX2Zyb21fb3JnYW5pYzpwYXJzZWQuZnJvbU9yZ2FuaWMsXG4gICAgICAgICAgICBpc19wYjpwYXJzZWQudXRtX3NvdXJjZT9wYXJzZWQudXRtX3NvdXJjZSAmJiBwYXJzZWQudXRtX3NvdXJjZS5pbmNsdWRlcygncG9saWN5YmF6YWFyLmNvbScpOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKCkgLy8gdG8gZ2V0IGxvZ2dlZEluIHVzZXIgcHJvZmlsZVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb3BzLnJldHJpZXZlRGlnaXRQbGFuRGF0YSgpXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RGlnaXRQbGFuVmlldyB7Li4udGhpcy5wcm9wc30gcGxhbnM9e3RoaXMucHJvcHMuZGlnaXRQbGFuc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgY29tbW9uX3V0bV90YWdzLCB1c2VyX2xvZ2dlZEluX251bWJlciB9ID0gc3RhdGUuVVNFUlxuICAgIGxldCB7ICBkaWdpdFBsYW5zLHNlbGVjdGVkX2RpZ2l0X3BsYW4gfSA9IHN0YXRlLlZJUENMVUJcblxuICAgIHJldHVybiB7XG4gICAgICAgIFVTRVIsIGNvbW1vbl91dG1fdGFncywgdXNlcl9sb2dnZWRJbl9udW1iZXIsIGRpZ2l0UGxhbnMsIHNlbGVjdGVkX2RpZ2l0X3BsYW5cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIHNlbmRPVFA6IChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpID0+IGRpc3BhdGNoKHNlbmRPVFAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSksXG4gICAgICAgIHN1Ym1pdE9UUDogKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsY2IpID0+IGRpc3BhdGNoKHN1Ym1pdE9UUChudW1iZXIsIG90cCxleHRyYVBhcmFtc0RhdGEsIGNiKSksXG4gICAgICAgIHJlc2V0QXV0aDogKCkgPT4gZGlzcGF0Y2gocmVzZXRBdXRoKCkpLFxuICAgICAgICByZXRyaWV2ZURpZ2l0UGxhbkRhdGE6ICgpID0+IGRpc3BhdGNoKHJldHJpZXZlRGlnaXRQbGFuRGF0YSgpKSxcbiAgICAgICAgc2VsZWN0RGlnaXRQbGFuIDooZGF0YSxjYikgPT4gZGlzcGF0Y2goc2VsZWN0RGlnaXRQbGFuKGRhdGEsY2IpKVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShEaWdpdEluc3VyYW5jZSkiXSwic291cmNlUm9vdCI6IiJ9