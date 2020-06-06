(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselView = function (_React$Component) {
				_inherits(CarouselView, _React$Component);

				function CarouselView() {
								_classCallCheck(this, CarouselView);

								return _possibleConstructorReturn(this, (CarouselView.__proto__ || Object.getPrototypeOf(CarouselView)).apply(this, arguments));
				}

				_createClass(CarouselView, [{
								key: 'scroll',
								value: function scroll(type) {
												var elmnt = document.getElementById('top_' + this.props.dataType);

												if (elmnt && document.getElementsByClassName('top_' + this.props.dataType + '_list') && document.getElementById('leftArrow_' + this.props.dataType) && document.getElementById('RightArrow_' + this.props.dataType)) {

																var outerDivWidth = elmnt.offsetWidth;
																var childDivWidth = document.getElementsByClassName('top_' + this.props.dataType + '_list')[0].offsetWidth;
																var cardCount = document.getElementsByClassName('top_' + this.props.dataType + '_list')[0].childElementCount;
																var cardWidth = Math.ceil(childDivWidth / cardCount);

																var leftScroll = elmnt.scrollLeft;
																var scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
																var cardEnd = cardCount * cardWidth;

																if (type == 'right') {
																				elmnt.scroll({ left: leftScroll + scrollVal, behavior: 'smooth' });
																				if (cardEnd <= leftScroll + scrollVal + outerDivWidth) {
																								document.getElementById('leftArrow_' + this.props.dataType).classList.add("d-none");
																				}
																				document.getElementById('RightArrow_' + this.props.dataType).classList.remove("d-none");
																} else {
																				elmnt.scroll({ left: leftScroll - scrollVal, behavior: 'smooth' });
																				if (leftScroll - scrollVal <= 0) {
																								document.getElementById('RightArrow_' + this.props.dataType).classList.add("d-none");
																				}
																				document.getElementById('leftArrow_' + this.props.dataType).classList.remove("d-none");
																}
												}
								}
				}, {
								key: 'render',
								value: function render() {
												var _this2 = this;

												var _props = this.props,
												    topHeading = _props.topHeading,
												    dataList = _props.dataList,
												    dataType = _props.dataType,
												    topHospital = _props.topHospital,
												    extraHeading = _props.extraHeading,
												    viewAll = _props.viewAll;

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
																								{ onClick: function onClick() {
																																return _this2.props.navigateTo();
																												} },
																								extraHeading
																				)
																),
																_react2.default.createElement(
																				'div',
																				{ className: 'pkgSliderContainer network-slider', id: 'top_' + this.props.dataType },
																				_react2.default.createElement(
																								'div',
																								{ className: 'pkgCardsList d-inline-flex sub-wd-cards top_' + this.props.dataType + '_list' },
																								dataList.map(function (data, key) {
																												return _react2.default.createElement(
																																'a',
																																{ key: key + '_' + data.id, href: '', className: 'pkgcustCards', onClick: function onClick() {
																																								return _this2.props.carouselCardClicked(data, topHospital ? true : false);
																																				} },
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
																								{ className: 'pkg-btnlft d-none', id: 'RightArrow_' + dataType, onClick: this.scroll.bind(this, 'left') },
																								_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
																				),
																				_react2.default.createElement(
																								'div',
																								{ className: 'pkg-btnrgt', id: 'leftArrow_' + dataType, onClick: this.scroll.bind(this, 'right') },
																								_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
																				)
																)
												);
								}
				}]);

				return CarouselView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var VipLoginPopup = function (_React$Component) {
    _inherits(VipLoginPopup, _React$Component);

    function VipLoginPopup(props) {
        _classCallCheck(this, VipLoginPopup);

        var _this = _possibleConstructorReturn(this, (VipLoginPopup.__proto__ || Object.getPrototypeOf(VipLoginPopup)).call(this, props));

        _this.state = {
            profile_id: '',
            newprofile: {},
            phoneNumber: _this.props.user_loggedIn_number ? _this.props.user_loggedIn_number : '',
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
        return _this;
    }

    _createClass(VipLoginPopup, [{
        key: 'inputHandler',
        value: function inputHandler(e) {
            if (this.state.showOTP && e.target.name == 'phoneNumber') {
                var _setState;

                this.setState((_setState = {}, _defineProperty(_setState, e.target.name, e.target.value), _defineProperty(_setState, 'validationError', ""), _defineProperty(_setState, 'showOTP', false), _defineProperty(_setState, 'otp', ""), _defineProperty(_setState, 'error_message', ''), _setState));
            } else {
                this.setState(_defineProperty({}, e.target.name, e.target.value));
            }
        }
    }, {
        key: 'submitOTPRequest',
        value: function submitOTPRequest(number) {
            var resendFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var viaSms = arguments[2];

            var _this2 = this;

            var viaWhatsapp = arguments[3];
            var fromPopup = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            // to generate otp
            var lead_data = queryString.parse(this.props.location.search);
            if (number.match(/^[56789]{1}[0-9]{9}$/)) {

                this.setState({ validationError: "" });

                this.props.sendOTP(number, viaSms, viaWhatsapp, 'insurance-login', function (error) {
                    // to generate otp
                    if (error) {
                        // this.setState({ validationError: "Could not generate OTP." })
                    } else {
                        if (viaWhatsapp) {
                            _this2.setState({ enableOtpRequest: true });
                        } else {
                            _this2.setState({ enableOtpRequest: false });
                        }
                        _this2.setState({ showOTP: true, otpTimeout: true, smsBtnType: viaSms ? true : false });
                        setTimeout(function () {
                            _this2.setState({ otpTimeout: false });
                        }, 20000);
                        setTimeout(function () {
                            _this2.setState({ enableOtpRequest: false });
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
    }, {
        key: 'verifyOTP',
        value: function verifyOTP() {
            var _this3 = this;

            // to verify entered otp
            var parsed = queryString.parse(this.props.location.search);
            var self = this;
            if (!this.state.otp) {
                this.setState({ validationError: "Please enter OTP", error_message: '' });
                return;
            }
            if (this.state.otp.length < 6 || this.state.otp.length > 6) {
                this.setState({ validationError: "Please enter valid OTP", error_message: '' });
                return;
            }

            var lead_data = parsed;
            if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
                this.setState({ validationError: "" });
                var extraParamsData = {};
                this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParamsData, function (exists) {
                    if (exists.code == 'invalid') {
                        _this3.setState({ error_message: exists.message, validationError: '' });
                    } else {
                        if (exists.token) {
                            var url = '/covid-form';
                            if (exists.user_exists) {
                                _this3.props.getUserProfile();
                                _this3.props.closeLeadPopup(); // to close lead popup
                                _this3.props.history.push(url);
                            } else {
                                _this3.props.closeLeadPopup();
                                _this3.props.history.push(url);
                            }
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
                    this.submitOTPRequest(this.state.phoneNumber, '', true, false, 'one'); // to generate otp request
                }
            }
        }
    }, {
        key: 'editNumber',
        value: function editNumber() {
            var _this4 = this;

            var number = this.state.phoneNumber;

            document.getElementsByClassName('ins-form-slider')[0].scroll({ left: -999, behavior: 'smooth' });

            setTimeout(function () {
                _this4.setState({ validationError: "", showOTP: false, otp: "", phoneNumber: '' }, function () {
                    _this4.setState({ phoneNumber: number });
                    document.getElementById("number").focus();
                });
            }, 200);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'col-12 col-md-7  center-column' },
                _react2.default.createElement('div', { className: 'cancel-overlay cancel-overlay-zindex', onClick: this.props.closeLeadPopup.bind(this) }),
                _react2.default.createElement(
                    'section',
                    { className: 'mobile-verification-screen p-3' },
                    _react2.default.createElement(
                        'div',
                        { className: 'widget no-shadow no-round sign-up-container widget cancel-appointment-div cancel-popup' },
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

    return VipLoginPopup;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _digitLogin = __webpack_require__(/*! ./digitLogin.js */ "./dev/js/components/vipClub/digitLogin.js");

var _digitLogin2 = _interopRequireDefault(_digitLogin);

var _carouselView = __webpack_require__(/*! ../opd/searchResults/carouselView.js */ "./dev/js/components/opd/searchResults/carouselView.js");

var _carouselView2 = _interopRequireDefault(_carouselView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// const queryString = require('./node_modules/query-string');


var DigitPlanView = function (_React$Component) {
    _inherits(DigitPlanView, _React$Component);

    function DigitPlanView(props) {
        _classCallCheck(this, DigitPlanView);

        var _this = _possibleConstructorReturn(this, (DigitPlanView.__proto__ || Object.getPrototypeOf(DigitPlanView)).call(this, props));

        var defaultPlan = '';

        _this.state = {
            // selected_plan_data: this.props.selected_plan ? this.props.selected_plan : '',
            showPopup: false,
            selected_plan_data: defaultPlan ? defaultPlan : '',
            selected_plan_id: defaultPlan.id ? defaultPlan.id : '',
            toggleTabType: false
        };
        return _this;
    }

    _createClass(DigitPlanView, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var planData = props.plans;
            var defaultPlan = '';
            for (var i = 0; i < planData.length; i++) {
                if (planData[i].is_selected == true) {
                    defaultPlan = planData[i];
                }
            }
            this.state.selected_plan_id = defaultPlan.id ? defaultPlan.id : '', this.state.selected_plan_data = defaultPlan ? defaultPlan : '', console.log(defaultPlan);
        }
    }, {
        key: 'proceed',
        value: function proceed() {
            if (_storage2.default.checkAuth()) {
                var url = '/covid-form';
                this.props.history.push(url);
            } else {
                this.setState({ showPopup: true });
            }
        }
    }, {
        key: 'selectPlan',
        value: function selectPlan(plan) {
            this.setState({ selected_plan_data: plan, selected_plan_id: plan.id });
            this.props.selectDigitPlan(plan);
        }
    }, {
        key: 'hideLoginPopup',
        value: function hideLoginPopup() {
            this.setState({ showPopup: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var self = this;

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
                                                            this.props.plans.map(function (plan) {
                                                                return _react2.default.createElement(
                                                                    'tr',
                                                                    { key: plan.id },
                                                                    _react2.default.createElement(
                                                                        'td',
                                                                        null,
                                                                        _react2.default.createElement(
                                                                            'div',
                                                                            { className: 'dtl-radio', onClick: function onClick() {
                                                                                    return self.selectPlan(plan, self);
                                                                                } },
                                                                            _react2.default.createElement(
                                                                                'label',
                                                                                { className: 'container-radio' },
                                                                                plan.name,
                                                                                _react2.default.createElement('input', { type: 'radio', checked: _this2.state.selected_plan_id == plan.id }),
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
                                                                );
                                                            })
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
                                        { onClick: function onClick() {
                                                return _this2.proceed();
                                            }, className: 'insu-right-orng-btn ins-buy-btn' },
                                        'Proceed'
                                    )
                                )
                            )
                        )
                    )
                ) : _react2.default.createElement('div', null)
            );
        }
    }]);

    return DigitPlanView;
}(_react2.default.Component);

exports.default = DigitPlanView;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var DigitInsurance = function (_React$Component) {
    _inherits(DigitInsurance, _React$Component);

    function DigitInsurance(props) {
        _classCallCheck(this, DigitInsurance);

        var _this = _possibleConstructorReturn(this, (DigitInsurance.__proto__ || Object.getPrototypeOf(DigitInsurance)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);
        _this.state = {
            source: parsed.source,
            is_from_organic: parsed.fromOrganic,
            is_pb: parsed.utm_source ? parsed.utm_source && parsed.utm_source.includes('policybazaar.com') : false
        };
        return _this;
    }

    _createClass(DigitInsurance, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile(); // to get loggedIn user profile
            }
            if (window) {
                window.scrollTo(0, 0);
            }

            this.props.retrieveDigitPlanData();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_digitPlanView2.default, _extends({}, this.props, { plans: this.props.digitPlans }));
        }
    }]);

    return DigitInsurance;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$USER = state.USER,
        common_utm_tags = _state$USER.common_utm_tags,
        user_loggedIn_number = _state$USER.user_loggedIn_number;
    var _state$VIPCLUB = state.VIPCLUB,
        digitPlans = _state$VIPCLUB.digitPlans,
        selected_digit_plan = _state$VIPCLUB.selected_digit_plan;


    return {
        USER: USER, common_utm_tags: common_utm_tags, user_loggedIn_number: user_loggedIn_number, digitPlans: digitPlans, selected_digit_plan: selected_digit_plan
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
        retrieveDigitPlanData: function retrieveDigitPlanData() {
            return dispatch((0, _index.retrieveDigitPlanData)());
        },
        selectDigitPlan: function selectDigitPlan(data, cb) {
            return dispatch((0, _index.selectDigitPlan)(data, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DigitInsurance);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvc2VhcmNoUmVzdWx0cy9jYXJvdXNlbFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi9kaWdpdExvZ2luLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL3ZpcENsdWIvZGlnaXRQbGFuVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy92aXBDbHViL2RpZ2l0SW5zdXJhbmNlLmpzIl0sIm5hbWVzIjpbIkNhcm91c2VsVmlldyIsInR5cGUiLCJlbG1udCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9wcyIsImRhdGFUeXBlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm91dGVyRGl2V2lkdGgiLCJvZmZzZXRXaWR0aCIsImNoaWxkRGl2V2lkdGgiLCJjYXJkQ291bnQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNhcmRXaWR0aCIsIk1hdGgiLCJjZWlsIiwibGVmdFNjcm9sbCIsInNjcm9sbExlZnQiLCJzY3JvbGxWYWwiLCJmbG9vciIsImNhcmRFbmQiLCJzY3JvbGwiLCJsZWZ0IiwiYmVoYXZpb3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b3BIZWFkaW5nIiwiZGF0YUxpc3QiLCJ0b3BIb3NwaXRhbCIsImV4dHJhSGVhZGluZyIsInZpZXdBbGwiLCJsZW5ndGgiLCJuYXZpZ2F0ZVRvIiwibWFwIiwiZGF0YSIsImtleSIsImlkIiwiY2Fyb3VzZWxDYXJkQ2xpY2tlZCIsImxvZ28iLCJ3aWR0aCIsIm5hbWUiLCJiaW5kIiwiQVNTRVRTX0JBU0VfVVJMIiwiUmVhY3QiLCJDb21wb25lbnQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJWaXBMb2dpblBvcHVwIiwic3RhdGUiLCJwcm9maWxlX2lkIiwibmV3cHJvZmlsZSIsInBob25lTnVtYmVyIiwidXNlcl9sb2dnZWRJbl9udW1iZXIiLCJ2YWxpZGF0aW9uRXJyb3IiLCJzaG93T1RQIiwib3RwIiwib3RwVGltZW91dCIsImVycm9yX21lc3NhZ2UiLCJpc0xlYWRUcnVlIiwic21zQnRuVHlwZSIsInNlbGVjdGVkUHJvZmlsZUFnZSIsImFnZSIsImVuYWJsZU90cFJlcXVlc3QiLCJ1c2VyX25hbWUiLCJzZWFyY2hfY2l0eSIsImZpbHRlcmVkX2NpdHlfbGlzdCIsInNob3dDaXR5U2VhcmNoUG9wdXAiLCJzZWxlY3RlZENpdHkiLCJlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJ2YWx1ZSIsIm51bWJlciIsInJlc2VuZEZsYWciLCJ2aWFTbXMiLCJ2aWFXaGF0c2FwcCIsImZyb21Qb3B1cCIsImxlYWRfZGF0YSIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJtYXRjaCIsInNlbmRPVFAiLCJlcnJvciIsInNldFRpbWVvdXQiLCJwYXJzZWQiLCJzZWxmIiwiZXh0cmFQYXJhbXNEYXRhIiwic3VibWl0T1RQIiwiZXhpc3RzIiwiY29kZSIsIm1lc3NhZ2UiLCJ0b2tlbiIsInVybCIsInVzZXJfZXhpc3RzIiwiZ2V0VXNlclByb2ZpbGUiLCJjbG9zZUxlYWRQb3B1cCIsImhpc3RvcnkiLCJwdXNoIiwidmVyaWZ5T1RQIiwic3VibWl0T1RQUmVxdWVzdCIsImZvY3VzIiwiY3Vyc29yIiwiaW5wdXRIYW5kbGVyIiwiX2hhbmRsZUNvbnRpbnVlUHJlc3MiLCJvdHBfcmVxdWVzdF9zZW50IiwiZWRpdE51bWJlciIsIl9oYW5kbGVLZXlQcmVzcyIsImZvbnRTaXplIiwic3VibWl0X290cCIsImNvbG9yIiwiRGlnaXRQbGFuVmlldyIsImRlZmF1bHRQbGFuIiwic2hvd1BvcHVwIiwic2VsZWN0ZWRfcGxhbl9kYXRhIiwic2VsZWN0ZWRfcGxhbl9pZCIsInRvZ2dsZVRhYlR5cGUiLCJwbGFuRGF0YSIsInBsYW5zIiwiaSIsImlzX3NlbGVjdGVkIiwiY29uc29sZSIsImxvZyIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJwbGFuIiwic2VsZWN0RGlnaXRQbGFuIiwiT2JqZWN0Iiwia2V5cyIsImhpZGVMb2dpblBvcHVwIiwiaXNfZWRpdCIsInNlbGVjdFBsYW4iLCJhbW91bnQiLCJwcm9jZWVkIiwiRGlnaXRJbnN1cmFuY2UiLCJzb3VyY2UiLCJpc19mcm9tX29yZ2FuaWMiLCJmcm9tT3JnYW5pYyIsImlzX3BiIiwidXRtX3NvdXJjZSIsImluY2x1ZGVzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJyZXRyaWV2ZURpZ2l0UGxhbkRhdGEiLCJkaWdpdFBsYW5zIiwibWFwU3RhdGVUb1Byb3BzIiwiVVNFUiIsImNvbW1vbl91dG1fdGFncyIsIlZJUENMVUIiLCJzZWxlY3RlZF9kaWdpdF9wbGFuIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJtZXNzYWdlX3R5cGUiLCJjYiIsInJlc2V0QXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7Ozs7Ozs7OzsrQkFFRUMsSSxFQUFNO0FBQ04sZ0JBQUlDLFFBQVFDLFNBQVNDLGNBQVQsVUFBK0IsS0FBS0MsS0FBTCxDQUFXQyxRQUExQyxDQUFaOztBQUVBLGdCQUFHSixTQUFTQyxTQUFTSSxzQkFBVCxVQUF1QyxLQUFLRixLQUFMLENBQVdDLFFBQWxELFdBQVQsSUFBK0VILFNBQVNDLGNBQVQsZ0JBQXFDLEtBQUtDLEtBQUwsQ0FBV0MsUUFBaEQsQ0FBL0UsSUFBOElILFNBQVNDLGNBQVQsaUJBQXNDLEtBQUtDLEtBQUwsQ0FBV0MsUUFBakQsQ0FBakosRUFBK007O0FBRTlNLG9CQUFJRSxnQkFBZ0JOLE1BQU1PLFdBQTFCO0FBQ0Esb0JBQUlDLGdCQUFnQlAsU0FBU0ksc0JBQVQsVUFBdUMsS0FBS0YsS0FBTCxDQUFXQyxRQUFsRCxZQUFtRSxDQUFuRSxFQUFzRUcsV0FBMUY7QUFDQSxvQkFBSUUsWUFBWVIsU0FBU0ksc0JBQVQsVUFBdUMsS0FBS0YsS0FBTCxDQUFXQyxRQUFsRCxZQUFtRSxDQUFuRSxFQUFzRU0saUJBQXRGO0FBQ0Esb0JBQUlD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LG1CQUFnREYsU0FBUyxvQkFBUS9FLE1BQVIsRUFBZUUsTUFBZixFQUFzQkMsV0FBdEIsRUFBa0M2RSxZQUFsQyxFQUFnREMsRUFBaEQsQ0FBVCxDQUFoRDtBQUFBLFNBSE47QUFJSGpFLG1CQUFXLG1CQUFDaEIsTUFBRCxFQUFTakIsR0FBVCxFQUFjZ0MsZUFBZCxFQUE4QmtFLEVBQTlCO0FBQUEsbUJBQXFDRixTQUFTLHNCQUFVL0UsTUFBVixFQUFrQmpCLEdBQWxCLEVBQXNCZ0MsZUFBdEIsRUFBdUNrRSxFQUF2QyxDQUFULENBQXJDO0FBQUEsU0FKUjtBQUtIQyxtQkFBVztBQUFBLG1CQUFNSCxTQUFTLHVCQUFULENBQU47QUFBQSxTQUxSO0FBTUhSLCtCQUF1QjtBQUFBLG1CQUFNUSxTQUFTLG1DQUFULENBQU47QUFBQSxTQU5wQjtBQU9IekIseUJBQWlCLHlCQUFDNUYsSUFBRCxFQUFNdUgsRUFBTjtBQUFBLG1CQUFhRixTQUFTLDRCQUFnQnJILElBQWhCLEVBQXFCdUgsRUFBckIsQ0FBVCxDQUFiO0FBQUE7QUFQZCxLQUFQO0FBU0gsQ0FWRDs7a0JBY2UseUJBQVFSLGVBQVIsRUFBMEJLLGtCQUExQixFQUE4Q2hCLGNBQTlDLEMiLCJmaWxlIjoiMTIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgQ2Fyb3VzZWxWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRzY3JvbGwodHlwZSkge1xuICAgICAgICB2YXIgZWxtbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9wXyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKVxuXG4gICAgICAgIGlmKGVsbW50ICYmIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYHRvcF8ke3RoaXMucHJvcHMuZGF0YVR5cGV9X2xpc3RgKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGVmdEFycm93XyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgUmlnaHRBcnJvd18ke3RoaXMucHJvcHMuZGF0YVR5cGV9YCkpIHtcblxuICAgICAgICBcdGxldCBvdXRlckRpdldpZHRoID0gZWxtbnQub2Zmc2V0V2lkdGhcblx0ICAgICAgICBsZXQgY2hpbGREaXZXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYHRvcF8ke3RoaXMucHJvcHMuZGF0YVR5cGV9X2xpc3RgKVswXS5vZmZzZXRXaWR0aFxuXHQgICAgICAgIGxldCBjYXJkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGB0b3BfJHt0aGlzLnByb3BzLmRhdGFUeXBlfV9saXN0YClbMF0uY2hpbGRFbGVtZW50Q291bnRcblx0ICAgICAgICBsZXQgY2FyZFdpZHRoID0gTWF0aC5jZWlsKGNoaWxkRGl2V2lkdGggLyBjYXJkQ291bnQpXG5cblx0ICAgICAgICBsZXQgbGVmdFNjcm9sbCA9IGVsbW50LnNjcm9sbExlZnRcblx0ICAgICAgICBsZXQgc2Nyb2xsVmFsID0gTWF0aC5mbG9vcihvdXRlckRpdldpZHRoIC8gY2FyZFdpZHRoKSAqIGNhcmRXaWR0aFxuXHQgICAgICAgIGxldCBjYXJkRW5kID0gY2FyZENvdW50ICogY2FyZFdpZHRoXG5cblx0ICAgICAgICBpZiAodHlwZSA9PSAncmlnaHQnKSB7XG5cdCAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgKyBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuXHQgICAgICAgICAgICBpZiAoY2FyZEVuZCA8PSBsZWZ0U2Nyb2xsICsgc2Nyb2xsVmFsICsgb3V0ZXJEaXZXaWR0aCkge1xuXHQgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxlZnRBcnJvd18ke3RoaXMucHJvcHMuZGF0YVR5cGV9YCkuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBSaWdodEFycm93XyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgZWxtbnQuc2Nyb2xsKHsgbGVmdDogbGVmdFNjcm9sbCAtIHNjcm9sbFZhbCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG5cdCAgICAgICAgICAgIGlmIChsZWZ0U2Nyb2xsIC0gc2Nyb2xsVmFsIDw9IDApIHtcblx0ICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBSaWdodEFycm93XyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxlZnRBcnJvd18ke3RoaXMucHJvcHMuZGF0YVR5cGV9YCkuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuXHQgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXHRyZW5kZXIoKXtcblxuXHRcdGxldCB7IHRvcEhlYWRpbmcsIGRhdGFMaXN0LCBkYXRhVHlwZSwgdG9wSG9zcGl0YWwsIGV4dHJhSGVhZGluZywgdmlld0FsbCB9ID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFrZy1zbGlkZXItY29udGFpbmVyIG10LTEwIG1iLTEwIHBrZy1udHdrLW1yZ25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ1NsaWRlckhlYWRpbmcgcGwtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDU+e3RvcEhlYWRpbmd8fCcnfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIHtleHRyYUhlYWRpbmcgJiYgKHZpZXdBbGwgfHwgZGF0YUxpc3QubGVuZ3RoPj0gMjApICYmIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMubmF2aWdhdGVUbygpfT57ZXh0cmFIZWFkaW5nfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuPlZpZXcgQWxsPC9zcGFuPiovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVyQ29udGFpbmVyIG5ldHdvcmstc2xpZGVyXCIgaWQ9e2B0b3BfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBrZ0NhcmRzTGlzdCBkLWlubGluZS1mbGV4IHN1Yi13ZC1jYXJkcyB0b3BfJHt0aGlzLnByb3BzLmRhdGFUeXBlfV9saXN0YH0+XG4gICAgICAgICAgICAgICAgICAgIFx0e1xuICAgICAgICAgICAgICAgICAgICBcdFx0ZGF0YUxpc3QubWFwKChkYXRhLCBrZXkpPT57XG4gICAgICAgICAgICAgICAgXHRcdFx0cmV0dXJuIDxhIGtleT17YCR7a2V5fV8ke2RhdGEuaWR9YH0gaHJlZj0nJyBjbGFzc05hbWU9XCJwa2djdXN0Q2FyZHNcIiAgb25DbGljaz17KCk9PnRoaXMucHJvcHMuY2Fyb3VzZWxDYXJkQ2xpY2tlZChkYXRhLHRvcEhvc3BpdGFsP3RydWU6ZmFsc2UpfT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnY2FyZEltZ0NvbnRcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0e1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdGRhdGEubG9nbyAmJiA8aW1nIHN0eWxlPXt7d2lkdGg6ICc4MnB4J319IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17ZGF0YS5sb2dvfSAvPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZ3RzdE5hbWUgcHJjZC1oZWlnaHRcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIFx0XHR9KVxuICAgICAgICAgICAgICAgICAgICBcdH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dsZnRSaHRidG5jb250IG5ldHdyay1idG5zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWJ0bmxmdCBkLW5vbmVcIiBpZD17YFJpZ2h0QXJyb3dfJHtkYXRhVHlwZX1gfSBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdsZWZ0Jyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWJ0bnJndFwiIGlkPXtgbGVmdEFycm93XyR7ZGF0YVR5cGV9YH0gb25DbGljaz17dGhpcy5zY3JvbGwuYmluZCh0aGlzLCAncmlnaHQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsVmlldzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBWaXBMb2dpblBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHByb2ZpbGVfaWQ6ICcnLFxuICAgICAgICAgICAgbmV3cHJvZmlsZToge30sXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5wcm9wcy51c2VyX2xvZ2dlZEluX251bWJlcj90aGlzLnByb3BzLnVzZXJfbG9nZ2VkSW5fbnVtYmVyOicnLFxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yOiAnJyxcbiAgICAgICAgICAgIHNob3dPVFA6IGZhbHNlLFxuICAgICAgICAgICAgb3RwOiBcIlwiLFxuICAgICAgICAgICAgb3RwVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcl9tZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIGlzTGVhZFRydWU6IGZhbHNlLFxuICAgICAgICAgICAgc21zQnRuVHlwZTogbnVsbCxcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvZmlsZUFnZTogJycsXG4gICAgICAgICAgICBhZ2U6ICcnLFxuICAgICAgICAgICAgZW5hYmxlT3RwUmVxdWVzdDogZmFsc2UsXG4gICAgICAgICAgICB1c2VyX25hbWU6ICcnLFxuICAgICAgICAgICAgc2VhcmNoX2NpdHk6ICcnLFxuICAgICAgICAgICAgZmlsdGVyZWRfY2l0eV9saXN0OiBbXSxcbiAgICAgICAgICAgIHNob3dDaXR5U2VhcmNoUG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRDaXR5OiAnJ1xuICAgICAgICB9XG4gICAgfVxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dPVFAgJiYgZS50YXJnZXQubmFtZSA9PSAncGhvbmVOdW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbkVycm9yOiBcIlwiLCBzaG93T1RQOiBmYWxzZSwgb3RwOiBcIlwiLCBlcnJvcl9tZXNzYWdlOiAnJyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdE9UUFJlcXVlc3QobnVtYmVyLCByZXNlbmRGbGFnID0gZmFsc2UsIHZpYVNtcywgdmlhV2hhdHNhcHAsIGZyb21Qb3B1cCA9IG51bGwpIHsgIC8vIHRvIGdlbmVyYXRlIG90cFxuICAgICAgICBsZXQgbGVhZF9kYXRhID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmIChudW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykpIHtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRPVFAobnVtYmVyLCB2aWFTbXMsIHZpYVdoYXRzYXBwLCAnaW5zdXJhbmNlLWxvZ2luJywgKGVycm9yKSA9PiB7IC8vIHRvIGdlbmVyYXRlIG90cFxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIkNvdWxkIG5vdCBnZW5lcmF0ZSBPVFAuXCIgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmlhV2hhdHNhcHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlT3RwUmVxdWVzdDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd09UUDogdHJ1ZSwgb3RwVGltZW91dDogdHJ1ZSwgc21zQnRuVHlwZTogdmlhU21zID8gdHJ1ZSA6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG90cFRpbWVvdXQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDAwKVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9LCA2MDAwMClcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbVBvcHVwICYmIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucy1mb3JtLXNsaWRlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbVBvcHVwID09ICdvbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJylbMF0uc2Nyb2xsKHsgbGVmdDogOTk5LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJylbMF0uc2Nyb2xsKHsgbGVmdDogLTk5OSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG51bWJlciAoMTAgZGlnaXRzKVwiIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2ZXJpZnlPVFAoKSB7ICAvLyB0byB2ZXJpZnkgZW50ZXJlZCBvdHBcbiAgICAgICAgbGV0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLm90cCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgZW50ZXIgT1RQXCIsIGVycm9yX21lc3NhZ2U6ICcnIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vdHAubGVuZ3RoIDwgNiB8fCB0aGlzLnN0YXRlLm90cC5sZW5ndGggPiA2KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBlbnRlciB2YWxpZCBPVFBcIiwgZXJyb3JfbWVzc2FnZTogJycgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlYWRfZGF0YSA9IHBhcnNlZFxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5waG9uZU51bWJlci5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiB9KVxuICAgICAgICAgICAgbGV0IGV4dHJhUGFyYW1zRGF0YSA9IHt9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN1Ym1pdE9UUCh0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0aGlzLnN0YXRlLm90cCwgZXh0cmFQYXJhbXNEYXRhLCAoZXhpc3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0cy5jb2RlID09ICdpbnZhbGlkJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JfbWVzc2FnZTogZXhpc3RzLm1lc3NhZ2UsIHZhbGlkYXRpb25FcnJvcjogJycgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RzLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gJy9jb3ZpZC1mb3JtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cy51c2VyX2V4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAoKSAvLyB0byBjbG9zZSBsZWFkIHBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlTGVhZFBvcHVwKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbnVtYmVyICgxMCBkaWdpdHMpXCIgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy52ZXJpZnlPVFAoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZUNvbnRpbnVlUHJlc3MoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5zaG93T1RQKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRPVFBSZXF1ZXN0KHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsICcnLCB0cnVlLCBmYWxzZSwgJ29uZScpIC8vIHRvIGdlbmVyYXRlIG90cCByZXF1ZXN0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0TnVtYmVyKCkge1xuICAgICAgICBsZXQgbnVtYmVyID0gdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucy1mb3JtLXNsaWRlcicpWzBdLnNjcm9sbCh7IGxlZnQ6IC05OTksIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiwgc2hvd09UUDogZmFsc2UsIG90cDogXCJcIiwgcGhvbmVOdW1iZXI6ICcnIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGhvbmVOdW1iZXI6IG51bWJlciB9KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyXCIpLmZvY3VzKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDIwMClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgIGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYW5jZWwtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhgfSBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTGVhZFBvcHVwLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9iaWxlLXZlcmlmaWNhdGlvbi1zY3JlZW4gcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHdpZGdldCBuby1zaGFkb3cgbm8tcm91bmQgc2lnbi11cC1jb250YWluZXIgd2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTGVhZFBvcHVwLmJpbmQodGhpcyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcnQtY2xvc2Uuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCB9fSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLXNsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIG12LWhlYWRlciBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgc2lnbi11cC1tYmwtdGV4dFwiPkVudGVyIHlvdXIgcmVnaXN0ZXJlZCBtb2JpbGUgbnVtYmVyIHRvIGxvZ2luPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtb2JpbGUtZmllbGQgc3VwLWlucHV0LXBkbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmYy1pbnB1dCB0ZXh0LWNlbnRlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtb2JpbGUgbnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVOdW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwicGhvbmVOdW1iZXJcIiBvbktleVByZXNzPXt0aGlzLl9oYW5kbGVDb250aW51ZVByZXNzLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnN0YXRlLnNob3dPVFAgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLnZhbGlkYXRpb25FcnJvcn08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgZmFsc2UsIHRydWUsIGZhbHNlLCAnb25lJyl9IGRpc2FibGVkPXt0aGlzLnByb3BzLm90cF9yZXF1ZXN0X3NlbnR9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGxnLXNtcy1idG4gYnRuLWdyZG50XCI+TGV04oCZcyBnZXQgeW91IGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIG12LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCI+RW50ZXIgdGhlIE9UUCB3ZeKAmXZlIHNlbnQgdG8geW91ciBtb2JpbGUgbnVtYmVyPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtb2JpbGUtZmllbGQgc3VwLWlucHV0LXBkbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmYy1pbnB1dCB0ZXh0LWNlbnRlclwiIHBsYWNlaG9sZGVyPVwiMTAgZGlnaXQgbW9iaWxlIG51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lTnVtYmVyfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cInBob25lTnVtYmVyXCIgb25LZXlQcmVzcz17dGhpcy5faGFuZGxlQ29udGludWVQcmVzcy5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zaG93T1RQID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5zLW51bS1lZGl0XCIgb25DbGljaz17dGhpcy5lZGl0TnVtYmVyLmJpbmQodGhpcyl9PkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPVFAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRvbi1ncm91cCBlbnRlci1tb2JpbGUtbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBPVFBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5vdHB9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwib3RwXCIgb25LZXlQcmVzcz17dGhpcy5faGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vdHBUaW1lb3V0ID8gXCJcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzZW5kT3RwXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fSBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0cnVlLCB0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyBmYWxzZSA6IHRydWUsICF0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyBmYWxzZSA6IHRydWUsICdvbmUnKX0+e3RoaXMuc3RhdGUuc21zQnRuVHlwZSA/ICdQcmVmZXIgd2UgV2hhdHNBcHAgaXQgdG8geW91PycgOiAnU2VuZCB2aWEgU01TJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbmFibGVPdHBSZXF1ZXN0ID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzZW5kT3RwIGlucy1vdHAtcmVzZW5kXCIgb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgdHJ1ZSwgdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gdHJ1ZSA6IGZhbHNlLCAhdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gdHJ1ZSA6IGZhbHNlLCAnb25lJyl9PlJlc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uRXJyb3J9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93T1RQID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudmVyaWZ5T1RQLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnByb3BzLnN1Ym1pdF9vdHB9IGNsYXNzTmFtZT1cImJ0bi1ncmRudCB2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2Nlc3MgTm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCBmYWxzZSwgdHJ1ZSwgZmFsc2UpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5vdHBfcmVxdWVzdF9zZW50fSBjbGFzc05hbWU9XCJ2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1zbSBsZy1zbXMtYnRuIGJ0bi1ncmRudFwiPkxldOKAmXMgZ2V0IHlvdSBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZnctNTAwIHAtM1wiIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fSA+QnkgcHJvY2VlZGluZywgeW91IGhlcmVieSBhZ3JlZSB0byB0aGUgPGEgaHJlZj1cIi90ZXJtc1wiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSA+RW5kIFVzZXIgQWdyZWVtZW50PC9hPiBhbmQgPGEgaHJlZj1cIi9wcml2YWN5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5Qcml2YWN5IFBvbGljeS48L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgIFxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFZpcExvZ2luUG9wdXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IERpZ2l0U3RhdGljRGF0YVZpZXcgZnJvbSAnLi9kaWdpdFN0YXRpY0RhdGFWaWV3LmpzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IFZpcExvZ2luUG9wdXAgZnJvbSAnLi9kaWdpdExvZ2luLmpzJ1xuLy8gY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCcuL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBDYXJvdXNlbFZpZXcgZnJvbSAnLi4vb3BkL3NlYXJjaFJlc3VsdHMvY2Fyb3VzZWxWaWV3LmpzJ1xuXG5jbGFzcyBEaWdpdFBsYW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgbGV0IGRlZmF1bHRQbGFuID0gJyc7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLy8gc2VsZWN0ZWRfcGxhbl9kYXRhOiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gPyB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gOiAnJyxcbiAgICAgICAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgICAgICAgIHNlbGVjdGVkX3BsYW5fZGF0YTogZGVmYXVsdFBsYW4gPyBkZWZhdWx0UGxhbiA6ICcnLFxuICAgICAgICAgICBzZWxlY3RlZF9wbGFuX2lkOiBkZWZhdWx0UGxhbi5pZCA/IGRlZmF1bHRQbGFuLmlkOicnLFxuICAgICAgICAgICB0b2dnbGVUYWJUeXBlOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgbGV0IHBsYW5EYXRhID0gcHJvcHMucGxhbnM7XG4gICAgICAgIGxldCBkZWZhdWx0UGxhbiA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYW5EYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihwbGFuRGF0YVtpXS5pc19zZWxlY3RlZD09dHJ1ZSApe1xuICAgICAgICAgICAgICAgIGRlZmF1bHRQbGFuID0gcGxhbkRhdGFbaV07ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICBcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX2lkID0gZGVmYXVsdFBsYW4uaWQgPyBkZWZhdWx0UGxhbi5pZDonJyxcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX2RhdGE9ICBkZWZhdWx0UGxhbiA/IGRlZmF1bHRQbGFuIDogJycsXG4gICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQbGFuKTsgXG4gICAgfVxuICAgIFxuICAgIHByb2NlZWQoKSB7XG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICBsZXQgdXJsICA9ICcvY292aWQtZm9ybSdcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHVybClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RQbGFuKHBsYW4pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRfcGxhbl9kYXRhOnBsYW4sc2VsZWN0ZWRfcGxhbl9pZDpwbGFuLmlkfSlcbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3REaWdpdFBsYW4ocGxhbilcbiAgICB9XG4gICAgaGlkZUxvZ2luUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IGZhbHNlIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAvLyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcENsdWJMaXN0KS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnBsYW5zICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMucGxhbnMpLmxlbmd0aCA+IDAgPyBcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgYXJ0aWNsZS1jb250YWluZXIgYm90dG9tTWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpcExvZ2luUG9wdXAgey4uLnRoaXMucHJvcHN9IHNlbGVjdGVkX3BsYW49e3RoaXMuc3RhdGUuc2VsZWN0ZWRfcGxhbl9kYXRhfSBoaWRlTG9naW5Qb3B1cD17dGhpcy5oaWRlTG9naW5Qb3B1cC5iaW5kKHRoaXMpfSBjbG9zZUxlYWRQb3B1cD17dGhpcy5oaWRlTG9naW5Qb3B1cC5iaW5kKHRoaXMpfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEwIGNvbC1sZy0xMCBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PSB0b3Agc2VjdGlvbiB3aXRoIGljb25zIGFuZCBsaXN0aW5nID09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlnaXRTdGF0aWNEYXRhVmlldyAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IHRvcCBzZWN0aW9uIHdpdGggaWNvbnMgYW5kIGxpc3RpbmcgPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PSBTdGVwcyBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMCBkaWdpLXN0ZXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXN0YXR1cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fbWVudVwiIGlkPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX3RhYnNcIiBpZD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYl9pbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q2hvb3NlIFlvdXIgUGxhbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0YWJfZGlzYWJsZWQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RmlsbCBNZW1iZXIgRGV0YWlsczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiX2Rpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5QYXltZW50PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IFN0ZXBzIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IHRhYmxlIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWQgaW5zdXJhbmNlLXRibCBpbnN1cmFuY2UtY2hlY2tib3hlcyBkaWdpdFRibFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRibC1maXJzdC1oZWFkXCI+PHA+Q292ZXJhZ2UgKDEgWWVhcik8L3A+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0Ymwtc2Vjb25kLWhlYWRcIj48cD5Bbm51YWwgUHJlbWl1bTwvcD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHAgY2xhc3NOYW1lPVwiaW5zLWR0bHMtbWVtYmVycy1lZGl0XCI+e3RoaXMucHJvcHMuaXNfZWRpdCA/ICdDb3ZlcmFnZSBBbW91bnRzJyA6ICdDb3ZlcmFnZSBBbW91bnRzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucGxhbnMubWFwKHBsYW49PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cGxhbi5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiIG9uQ2xpY2s9eygpPT5zZWxmLnNlbGVjdFBsYW4ocGxhbixzZWxmKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+e3BsYW4ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX2lkID09IHBsYW4uaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4+4oK5IHtwbGFuLmFtb3VudH08L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tTWFyZ2luXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IENvbW1vbiBidXR0b24gPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktYnRuIGZpeGVkIGluc3VCdG5zQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMucHJvY2VlZCgpfSBjbGFzc05hbWU9XCJpbnN1LXJpZ2h0LW9ybmctYnRuIGlucy1idXktYnRuXCI+UHJvY2VlZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PSBDb21tb24gYnV0dG9uID09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA6IDxkaXY+PC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWdpdFBsYW5WaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgc2VuZE9UUCwgc3VibWl0T1RQLCByZXNldEF1dGgsIGdldFVzZXJQcm9maWxlLCByZXRyaWV2ZURpZ2l0UGxhbkRhdGEsIHNlbGVjdERpZ2l0UGxhbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgRGlnaXRQbGFuVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpcENsdWIvZGlnaXRQbGFuVmlldy5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIERpZ2l0SW5zdXJhbmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHsgICAgXG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBzb3VyY2U6cGFyc2VkLnNvdXJjZSxcbiAgICAgICAgICAgIGlzX2Zyb21fb3JnYW5pYzpwYXJzZWQuZnJvbU9yZ2FuaWMsXG4gICAgICAgICAgICBpc19wYjpwYXJzZWQudXRtX3NvdXJjZT9wYXJzZWQudXRtX3NvdXJjZSAmJiBwYXJzZWQudXRtX3NvdXJjZS5pbmNsdWRlcygncG9saWN5YmF6YWFyLmNvbScpOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKCkgLy8gdG8gZ2V0IGxvZ2dlZEluIHVzZXIgcHJvZmlsZVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb3BzLnJldHJpZXZlRGlnaXRQbGFuRGF0YSgpXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RGlnaXRQbGFuVmlldyB7Li4udGhpcy5wcm9wc30gcGxhbnM9e3RoaXMucHJvcHMuZGlnaXRQbGFuc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgY29tbW9uX3V0bV90YWdzLCB1c2VyX2xvZ2dlZEluX251bWJlciB9ID0gc3RhdGUuVVNFUlxuICAgIGxldCB7ICBkaWdpdFBsYW5zLHNlbGVjdGVkX2RpZ2l0X3BsYW4gfSA9IHN0YXRlLlZJUENMVUJcblxuICAgIHJldHVybiB7XG4gICAgICAgIFVTRVIsIGNvbW1vbl91dG1fdGFncywgdXNlcl9sb2dnZWRJbl9udW1iZXIsIGRpZ2l0UGxhbnMsIHNlbGVjdGVkX2RpZ2l0X3BsYW5cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIHNlbmRPVFA6IChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpID0+IGRpc3BhdGNoKHNlbmRPVFAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSksXG4gICAgICAgIHN1Ym1pdE9UUDogKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsY2IpID0+IGRpc3BhdGNoKHN1Ym1pdE9UUChudW1iZXIsIG90cCxleHRyYVBhcmFtc0RhdGEsIGNiKSksXG4gICAgICAgIHJlc2V0QXV0aDogKCkgPT4gZGlzcGF0Y2gocmVzZXRBdXRoKCkpLFxuICAgICAgICByZXRyaWV2ZURpZ2l0UGxhbkRhdGE6ICgpID0+IGRpc3BhdGNoKHJldHJpZXZlRGlnaXRQbGFuRGF0YSgpKSxcbiAgICAgICAgc2VsZWN0RGlnaXRQbGFuIDooZGF0YSxjYikgPT4gZGlzcGF0Y2goc2VsZWN0RGlnaXRQbGFuKGRhdGEsY2IpKVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShEaWdpdEluc3VyYW5jZSkiXSwic291cmNlUm9vdCI6IiJ9