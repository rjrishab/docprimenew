(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

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

/***/ "./dev/js/components/insurance/insuranceCancellation.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/insurance/insuranceCancellation.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../../components/commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceCancellationView = function (_React$Component) {
	_inherits(InsuranceCancellationView, _React$Component);

	function InsuranceCancellationView(props) {
		_classCallCheck(this, InsuranceCancellationView);

		var _this = _possibleConstructorReturn(this, (InsuranceCancellationView.__proto__ || Object.getPrototypeOf(InsuranceCancellationView)).call(this, props));

		_this.state = {
			showCancelPopup: false,
			showCancelSection: true,
			cancelReason: '',
			otp: "",
			opt_verified: false,
			phoneNumber: '',
			validationError: '',
			error_message: '',
			isOtpEdit: true
		};
		return _this;
	}

	_createClass(InsuranceCancellationView, [{
		key: 'getGetOrdinal',
		value: function getGetOrdinal(n) {
			var s = ["th", "st", "nd", "rd"],
			    v = n % 100;
			return n + (s[(v - 20) % 10] || s[v] || s[0]);
		}
	}, {
		key: 'cancelPolicy',
		value: function cancelPolicy() {
			this.submitOTPRequest(this.props, true, false); // to submit otp request
			this.setState({ showCancelPopup: true });
		}
	}, {
		key: 'submitOTPRequest',
		value: function submitOTPRequest(props, viaSms, viaWhatsapp) {
			var _this2 = this;

			var number = void 0;
			if (props.data) {
				number = props.data.phone_number;
			}
			if (number && number.match(/^[56789]{1}[0-9]{9}$/)) {
				this.setState({ validationError: "", phoneNumber: number });
				this.props.sendOTP(number, viaSms, viaWhatsapp, 'insurance-cancel', function (error) {
					// to submit otp request
					if (error) {
						_this2.setState({ validationError: "Could not generate OTP." });
					} else {
						// let data = {'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopupContinue', 'CustomerID': GTM.getUserId() || '', 'event': 'Insurance-login-popup-continue-click', 'mode':viaSms?'viaSms':viaWhatsapp?'viaWhatsapp':'', 'mobileNo':this.state.phoneNumber 
						//     }
						// GTM.sendEvent({ data: data })
						_this2.setState({ showOTP: true });
						// this.setState({ showOTP: true, otpTimeout: true,smsBtnType:viaSms?true:false })
						// setTimeout(() => {
						//     this.setState({ otpTimeout: false })
						// }, 10000)
					}
				});
			} else {
				this.setState({ validationError: "Please provide a valid number (10 digits)" });
			}
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			var _this3 = this;

			this.setState({ otp: event.target.value }, function () {
				if (_this3.state.otp.length == 6) {
					_this3.setState({ isOtpEdit: false });
					_this3.verifyOTP(); // to verify user entered otp
				}
			});
		}
	}, {
		key: 'verifyOTP',
		value: function verifyOTP() {
			var _this4 = this;

			var self = this;
			if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
				this.setState({ validationError: "" });
				var extraParamsData = {};
				this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParamsData, function (exists) {
					// to verify user entered otp
					if (exists.code == 'invalid') {
						_this4.setState({ error_message: exists.message, otp: '', isOtpEdit: true });
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: exists.message });
					} else {
						// let data = {'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopupOptVerified', 'CustomerID': GTM.getUserId() || '', 'event': 'Insurance-login-popup-opt-verified'
						//     }
						// GTM.sendEvent({ data: data })
						_this4.setState({ opt_verified: true });
					}
				});
			} else {
				this.setState({ validationError: "Please provide a valid number (10 digits)" });
			}
		}
	}, {
		key: 'clickPopUp',
		value: function clickPopUp(type) {
			if (type == 1) {
				if (this.state.cancelReason != '' && this.state.opt_verified) {
					this.props.cancelReason(this.state.cancelReason); // ask cancellation reason
					this.props.history.push('/insurance/canceldetails');
				} else {
					if (this.state.cancelReason == '') {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please provide cancel Reason" });
					} else if (!this.state.opt_verified) {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please enter otp" });
					}
				}
				// this.props.cancelInsurance(resp => {
				// 	if (resp.success) {
				// 		this.setState({ showCancelPopup: false, showCancelSection:false })
				// 	} else {
				// 		this.setState({ showCancelPopup: false })
				// 	}
				// })
			} else {
				this.setState({ otp: "", opt_verified: false, phoneNumber: '', validationError: '', error_message: '', isOtpEdit: true });
				this.setState({ showCancelPopup: false });
			}
		}
	}, {
		key: 'inputHandler',
		value: function inputHandler(e) {
			this.setState({ cancelReason: e.target.value });
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.props.data) {
				var purchase_date = new Date(this.props.data.purchase_date);
				var purchase_time = purchase_date.toTimeString();
				var purchaseTime = purchase_time.split(" ");
				purchase_date = purchase_date.toDateString();
				var purchaseDate = purchase_date.split(" ");
				var expiry_date = new Date(this.props.data.expiry_date);
				var expiry_time = expiry_date.toTimeString();
				var expiryTime = expiry_time.split(" ");
				expiry_date = expiry_date.toDateString();
				var expiryDate = expiry_date.split(" ");
				return _react2.default.createElement(
					'div',
					{ className: 'profile-body-wrap', style: { paddingBottom: 80 } },
					_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
					this.state.showCancelPopup ? _react2.default.createElement(
						'div',
						{ className: 'search-el-popup-overlay ' },
						_react2.default.createElement(
							'div',
							{ className: 'search-el-popup' },
							_react2.default.createElement(
								'div',
								{ className: 'widget' },
								_react2.default.createElement(
									'div',
									{ className: 'widget-content padiing-srch-el' },
									_react2.default.createElement(
										'p',
										{ className: 'srch-el-conent' },
										'Are you sure you want to cancel your policy?'
									),
									_react2.default.createElement(
										'form',
										{ className: 'go-bottom mrt-20', style: { padding: '0 15px' } },
										_react2.default.createElement(
											'p',
											{ className: 'digi-heading' },
											'Enter 6 digit OTP sent to your mobile number ending with xxxxxxx',
											this.props.data && this.props.data.phone_number ? this.props.data.phone_number.slice(7, 10) : ''
										),
										_react2.default.createElement(
											'div',
											{ className: 'cancel-input-num' },
											_react2.default.createElement('input', { placeholder: 'Enter OTP', onChange: this.handleChange.bind(this), value: this.state.otp, type: 'number', disabled: this.state.otp.length == 6 ? true : false, style: { border: this.state.error_message != '' ? '1px solid #ff0000' : 'none' } }),
											this.state.isOtpEdit ? _react2.default.createElement(
												_react2.default.Fragment,
												null,
												_react2.default.createElement(
													'span',
													{ className: 'vrfy-via-num', onClick: this.submitOTPRequest.bind(this, this.props, false, true) },
													'Verify via WhatsApp'
												),
												_react2.default.createElement(
													'span',
													{ className: 'cancl-rsnd-clk', onClick: this.submitOTPRequest.bind(this, this.props, true, false) },
													'Resend'
												)
											) : ''
										),
										_react2.default.createElement(
											'div',
											{ className: 'labelWrap', style: { marginBottom: 0 } },
											_react2.default.createElement('textarea', { id: 'Accname', name: 'name', type: 'text', onChange: this.inputHandler.bind(this), value: this.state.cancelReason, required: true, ref: 'name', style: { backgroundColor: '#f7f7f7' }, autoComplete: 'first_name', rows: '3', className: 'insurance-textarea', placeholder: 'Write a reason for cancellation' })
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'search-el-btn-container' },
										_react2.default.createElement(
											'button',
											{ onClick: this.clickPopUp.bind(this, 1) },
											'Yes'
										),
										_react2.default.createElement(
											'button',
											{ onClick: this.clickPopUp.bind(this, 2) },
											'No'
										)
									)
								)
							)
						)
					) : '',
					this.state.showCancelSection ? _react2.default.createElement(
						'section',
						{ className: 'container parent-section book-appointment-section container-top-margin' },
						_react2.default.createElement(
							'div',
							{ className: 'row main-row parent-section-row' },
							_react2.default.createElement(
								'div',
								{ className: 'col-12 col-md-7 col-lg-7' },
								_react2.default.createElement(
									'section',
									{ className: 'profile-book-screen' },
									_react2.default.createElement(
										'div',
										{ className: 'widget' },
										_react2.default.createElement(
											'div',
											{ className: 'widget-content' },
											_react2.default.createElement(
												'div',
												{ className: 'ins-flex mrb-20' },
												_react2.default.createElement('img', { width: '100', src: 'https://qacdn.docprime.com/media/insurer/images/apllogo.png' }),
												_react2.default.createElement(
													'p',
													{ className: 'fw-500' },
													'Group Out-patient Insurance'
												),
												_react2.default.createElement(
													'div',
													{ style: { flexGrow: '0', flexShrink: '0' } },
													_react2.default.createElement('img', { width: '30', src: "/assets" + "/img/chk-green.svg", style: { verticalAlign: '-31px' } }),
													_react2.default.createElement(
														'span',
														{ className: 'fw-500', style: { color: '#4fc243', verticalAlign: '-21px' } },
														'Active'
													)
												)
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'ins-flex justify-content-between ins-date-row mrb-0' },
											_react2.default.createElement(
												'div',
												{ className: 'ins-date text-center' },
												_react2.default.createElement(
													'p',
													{ className: 'fw-500 mrb-5' },
													'Policy issue Date'
												),
												_react2.default.createElement(
													'p',
													{ className: 'fw-700' },
													this.getGetOrdinal(purchaseDate[2]) + ' ' + purchaseDate[1] + ' ' + purchaseDate[3]
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'ins-date text-center' },
												_react2.default.createElement(
													'p',
													{ className: 'fw-500 mrb-5' },
													'Policy expiry Date'
												),
												_react2.default.createElement(
													'p',
													{ className: 'fw-700' },
													this.getGetOrdinal(expiryDate[2]) + ' ' + expiryDate[1] + ' ' + expiryDate[3]
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'ins-date text-center' },
												_react2.default.createElement(
													'p',
													{ className: 'fw-500 mrb-5' },
													'Policy Number'
												),
												_react2.default.createElement(
													'p',
													{ className: 'fw-700' },
													this.props.data.policy_number
												)
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'widget-content' },
											_react2.default.createElement(
												'h5',
												{ className: 'fw-500' },
												'Cancellation policy'
											),
											_react2.default.createElement(
												'div',
												{ className: 'ins-cancel-table' },
												_react2.default.createElement(
													'table',
													{ className: 'table' },
													_react2.default.createElement(
														'tbody',
														null,
														this.props.data.cancel_master && this.props.data.cancel_master.length > 0 ? Object.entries(this.props.data.cancel_master).map(function (_ref) {
															var _ref2 = _slicedToArray(_ref, 2),
															    key = _ref2[0],
															    value = _ref2[1];

															return _react2.default.createElement(
																'tr',
																null,
																_react2.default.createElement(
																	'td',
																	null,
																	value.refund_percentage,
																	'% Refund'
																),
																_react2.default.createElement(
																	'td',
																	{ className: 'fw-500' },
																	value.max_days,
																	' days from Policy date'
																)
															);
														}) : '',
														_react2.default.createElement(
															'tr',
															null,
															_react2.default.createElement(
																'td',
																null,
																'No Refund'
															),
															_react2.default.createElement(
																'td',
																{ className: 'fw-500' },
																'Atleast 1 completed Claim'
															)
														)
													)
												)
											),
											_react2.default.createElement(
												'p',
												null,
												'On cancellation of policy all your active appointments will also be cancelled'
											)
										)
									)
								),
								_react2.default.createElement(
									'a',
									{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn text-center', style: { color: "#ffffff" }, onClick: this.cancelPolicy.bind(this) },
									'Cancel Policy'
								)
							),
							_react2.default.createElement(_ChatPanel2.default, null)
						)
					) : _react2.default.createElement(
						'section',
						{ className: 'container parent-section book-appointment-section container-top-margin' },
						_react2.default.createElement(
							'div',
							{ className: 'row main-row parent-section-row' },
							_react2.default.createElement(
								'div',
								{ className: 'col-12 col-md-7 col-lg-7' },
								_react2.default.createElement(
									'section',
									{ className: 'profile-book-screen' },
									_react2.default.createElement(
										'div',
										{ className: 'widget-content mrb-10' },
										_react2.default.createElement(
											'p',
											{ className: 'fw-500 text-center' },
											'Your Policy DPHEALTHOPD12345 cancellation request has been initiated'
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'widget mrb-10' },
										_react2.default.createElement(
											'div',
											{ className: 'widget-content' },
											_react2.default.createElement(
												'p',
												{ className: 'mrb-10' },
												'Our team will get in touch with you shortly'
											),
											_react2.default.createElement(
												'p',
												null,
												' An email and sms has been sent to your registered email id and mobile number regarding the same '
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'widget mrb-10' },
										_react2.default.createElement(
											'div',
											{ className: 'widget-content' },
											_react2.default.createElement(
												'p',
												null,
												' For any other query you contact us at '
											),
											_react2.default.createElement(
												'p',
												{ className: 'fw-500' },
												'1800-123-9419 '
											),
											_react2.default.createElement(
												'p',
												{ className: 'fw-500' },
												' customercare@docprime.com'
											)
										)
									)
								)
							)
						)
					)
				);
			} else {
				return _react2.default.createElement(
					'div',
					{ className: 'profile-body-wrap', style: { paddingBottom: 80 } },
					_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
					_react2.default.createElement(_Loader2.default, null)
				);
			}
		}
	}]);

	return InsuranceCancellationView;
}(_react2.default.Component);

exports.default = InsuranceCancellationView;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceCancellation.js":
/*!**************************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceCancellation.js ***!
  \**************************************************************/
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

var _insuranceCancellation = __webpack_require__(/*! ../../components/insurance/insuranceCancellation.js */ "./dev/js/components/insurance/insuranceCancellation.js");

var _insuranceCancellation2 = _interopRequireDefault(_insuranceCancellation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceCancellation = function (_React$Component) {
    _inherits(InsuranceCancellation, _React$Component);

    function InsuranceCancellation(props) {
        _classCallCheck(this, InsuranceCancellation);

        var _this = _possibleConstructorReturn(this, (InsuranceCancellation.__proto__ || Object.getPrototypeOf(InsuranceCancellation)).call(this, props));

        _this.state = {
            data: null
        };
        return _this;
    }

    _createClass(InsuranceCancellation, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.cancelledInsuranceDetails(function (resp) {
                // to get user cancelled details
                _this2.setState({ data: resp });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_insuranceCancellation2.default, _extends({}, this.props, { data: this.state.data }));
        }
    }]);

    return InsuranceCancellation;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$INSURANCE = state.INSURANCE,
        insurnaceData = _state$INSURANCE.insurnaceData,
        LOAD_INSURANCE = _state$INSURANCE.LOAD_INSURANCE,
        selected_plan = _state$INSURANCE.selected_plan,
        self_data_values = _state$INSURANCE.self_data_values,
        insured_member_list = _state$INSURANCE.insured_member_list,
        get_insured_profile = _state$INSURANCE.get_insured_profile;

    return {
        insurnaceData: insurnaceData, LOAD_INSURANCE: LOAD_INSURANCE, selected_plan: selected_plan, USER: USER, self_data_values: self_data_values, insured_member_list: insured_member_list, get_insured_profile: get_insured_profile
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {

        cancelInsurance: function cancelInsurance(cb) {
            return dispatch((0, _index.cancelInsurance)(cb));
        },
        cancelledInsuranceDetails: function cancelledInsuranceDetails(cb) {
            return dispatch((0, _index.cancelledInsuranceDetails)(cb));
        },
        cancelReason: function cancelReason(criteria) {
            return dispatch((0, _index.cancelReason)(criteria));
        },
        sendOTP: function sendOTP(number, viaSms, viaWhatsapp, message_type, cb) {
            return dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb));
        },
        submitOTP: function submitOTP(number, otp, extraParamsData, cb) {
            return dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceCancellation);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZUNhbmNlbGxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pbnN1cmFuY2UvSW5zdXJhbmNlQ2FuY2VsbGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJwcm9wcyIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJJbnN1cmFuY2VDYW5jZWxsYXRpb25WaWV3Iiwic3RhdGUiLCJzaG93Q2FuY2VsUG9wdXAiLCJzaG93Q2FuY2VsU2VjdGlvbiIsImNhbmNlbFJlYXNvbiIsIm90cCIsIm9wdF92ZXJpZmllZCIsInBob25lTnVtYmVyIiwidmFsaWRhdGlvbkVycm9yIiwiZXJyb3JfbWVzc2FnZSIsImlzT3RwRWRpdCIsIm4iLCJzIiwidiIsInN1Ym1pdE9UUFJlcXVlc3QiLCJzZXRTdGF0ZSIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwibnVtYmVyIiwiZGF0YSIsInBob25lX251bWJlciIsIm1hdGNoIiwic2VuZE9UUCIsImVycm9yIiwic2hvd09UUCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJ2ZXJpZnlPVFAiLCJzZWxmIiwiZXh0cmFQYXJhbXNEYXRhIiwic3VibWl0T1RQIiwiZXhpc3RzIiwiY29kZSIsIm1lc3NhZ2UiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwidHlwZSIsImhpc3RvcnkiLCJwdXNoIiwiZSIsInB1cmNoYXNlX2RhdGUiLCJEYXRlIiwicHVyY2hhc2VfdGltZSIsInRvVGltZVN0cmluZyIsInB1cmNoYXNlVGltZSIsInNwbGl0IiwidG9EYXRlU3RyaW5nIiwicHVyY2hhc2VEYXRlIiwiZXhwaXJ5X2RhdGUiLCJleHBpcnlfdGltZSIsImV4cGlyeVRpbWUiLCJleHBpcnlEYXRlIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmciLCJzbGljZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJib3JkZXIiLCJtYXJnaW5Cb3R0b20iLCJpbnB1dEhhbmRsZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGlja1BvcFVwIiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwiQVNTRVRTX0JBU0VfVVJMIiwidmVydGljYWxBbGlnbiIsImNvbG9yIiwiZ2V0R2V0T3JkaW5hbCIsInBvbGljeV9udW1iZXIiLCJjYW5jZWxfbWFzdGVyIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImtleSIsInJlZnVuZF9wZXJjZW50YWdlIiwibWF4X2RheXMiLCJjYW5jZWxQb2xpY3kiLCJJbnN1cmFuY2VDYW5jZWxsYXRpb24iLCJjYW5jZWxsZWRJbnN1cmFuY2VEZXRhaWxzIiwicmVzcCIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJJTlNVUkFOQ0UiLCJpbnN1cm5hY2VEYXRhIiwiTE9BRF9JTlNVUkFOQ0UiLCJzZWxlY3RlZF9wbGFuIiwic2VsZl9kYXRhX3ZhbHVlcyIsImluc3VyZWRfbWVtYmVyX2xpc3QiLCJnZXRfaW5zdXJlZF9wcm9maWxlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYW5jZWxJbnN1cmFuY2UiLCJjYiIsImNyaXRlcmlhIiwibWVzc2FnZV90eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1RBLEtBRFM7QUFFbEI7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U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiOTIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDaGF0UGFuZWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0NoYXRQYW5lbCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgSW5zdXJhbmNlQ2FuY2VsbGF0aW9uVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dDYW5jZWxQb3B1cDogZmFsc2UsXG5cdFx0XHRzaG93Q2FuY2VsU2VjdGlvbjp0cnVlLFxuXHRcdFx0Y2FuY2VsUmVhc29uOicnLFxuXHRcdFx0b3RwOiBcIlwiLFxuXHRcdFx0b3B0X3ZlcmlmaWVkOmZhbHNlLFxuXHRcdFx0cGhvbmVOdW1iZXI6JycsXG5cdFx0XHR2YWxpZGF0aW9uRXJyb3I6JycsXG5cdFx0XHRlcnJvcl9tZXNzYWdlOicnLFxuXHRcdFx0aXNPdHBFZGl0OnRydWVcblx0XHR9XG5cdH1cblxuXHRnZXRHZXRPcmRpbmFsKG4pIHtcblx0XHR2YXIgcyA9IFtcInRoXCIsIFwic3RcIiwgXCJuZFwiLCBcInJkXCJdLFxuXHRcdFx0diA9IG4gJSAxMDA7XG5cdFx0cmV0dXJuIG4gKyAoc1sodiAtIDIwKSAlIDEwXSB8fCBzW3ZdIHx8IHNbMF0pO1xuXHR9XG5cblx0Y2FuY2VsUG9saWN5KCkge1xuXHRcdHRoaXMuc3VibWl0T1RQUmVxdWVzdCh0aGlzLnByb3BzLHRydWUsZmFsc2UpIC8vIHRvIHN1Ym1pdCBvdHAgcmVxdWVzdFxuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93Q2FuY2VsUG9wdXA6IHRydWUgfSlcblx0fVxuXG5cdHN1Ym1pdE9UUFJlcXVlc3QocHJvcHMsdmlhU21zLHZpYVdoYXRzYXBwKSB7XG5cdFx0bGV0IG51bWJlclxuXHRcdGlmKHByb3BzLmRhdGEpe1xuXHRcdFx0bnVtYmVyID0gcHJvcHMuZGF0YS5waG9uZV9udW1iZXJcblx0XHR9XG4gICAgICAgIGlmIChudW1iZXIgJiYgbnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiICxwaG9uZU51bWJlcjpudW1iZXJ9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kT1RQKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsJ2luc3VyYW5jZS1jYW5jZWwnLCAoZXJyb3IpID0+IHsgLy8gdG8gc3VibWl0IG90cCByZXF1ZXN0XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiQ291bGQgbm90IGdlbmVyYXRlIE9UUC5cIiB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBkYXRhID0geydDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSW5zdXJhbmNlTG9naW5Qb3B1cENvbnRpbnVlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdJbnN1cmFuY2UtbG9naW4tcG9wdXAtY29udGludWUtY2xpY2snLCAnbW9kZSc6dmlhU21zPyd2aWFTbXMnOnZpYVdoYXRzYXBwPyd2aWFXaGF0c2FwcCc6JycsICdtb2JpbGVObyc6dGhpcy5zdGF0ZS5waG9uZU51bWJlciBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPVFA6IHRydWV9KVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgc2hvd09UUDogdHJ1ZSwgb3RwVGltZW91dDogdHJ1ZSxzbXNCdG5UeXBlOnZpYVNtcz90cnVlOmZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IG90cFRpbWVvdXQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sIDEwMDAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbnVtYmVyICgxMCBkaWdpdHMpXCIgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe290cCA6IGV2ZW50LnRhcmdldC52YWx1ZX0sKCk9Pntcblx0XHRcdGlmKHRoaXMuc3RhdGUub3RwLmxlbmd0aCA9PSA2KXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aXNPdHBFZGl0OmZhbHNlfSlcblx0XHRcdFx0dGhpcy52ZXJpZnlPVFAoKSAvLyB0byB2ZXJpZnkgdXNlciBlbnRlcmVkIG90cFxuXHRcdFx0fVxuXHRcdH0pXG4gIFx0fVxuXG4gICAgdmVyaWZ5T1RQKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiXCIgfSlcblx0XHRcdGxldCBleHRyYVBhcmFtc0RhdGEgPSB7fVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXRPVFAodGhpcy5zdGF0ZS5waG9uZU51bWJlciwgdGhpcy5zdGF0ZS5vdHAsIGV4dHJhUGFyYW1zRGF0YSwgKGV4aXN0cykgPT4geyAvLyB0byB2ZXJpZnkgdXNlciBlbnRlcmVkIG90cFxuICAgICAgICAgICAgICAgIGlmKGV4aXN0cy5jb2RlID09ICdpbnZhbGlkJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yX21lc3NhZ2U6ZXhpc3RzLm1lc3NhZ2Usb3RwOicnLGlzT3RwRWRpdDp0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBleGlzdHMubWVzc2FnZX0pXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBkYXRhID0geydDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSW5zdXJhbmNlTG9naW5Qb3B1cE9wdFZlcmlmaWVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdJbnN1cmFuY2UtbG9naW4tcG9wdXAtb3B0LXZlcmlmaWVkJ1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wdF92ZXJpZmllZDp0cnVlfSkgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBudW1iZXIgKDEwIGRpZ2l0cylcIiB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cdGNsaWNrUG9wVXAodHlwZSkge1xuXHRcdGlmICh0eXBlID09IDEpIHtcblx0XHRcdGlmKHRoaXMuc3RhdGUuY2FuY2VsUmVhc29uICE9ICcnICYmIHRoaXMuc3RhdGUub3B0X3ZlcmlmaWVkKXtcblx0XHRcdFx0dGhpcy5wcm9wcy5jYW5jZWxSZWFzb24odGhpcy5zdGF0ZS5jYW5jZWxSZWFzb24pIC8vIGFzayBjYW5jZWxsYXRpb24gcmVhc29uXG5cdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2NhbmNlbGRldGFpbHMnKVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGlmKHRoaXMuc3RhdGUuY2FuY2VsUmVhc29uID09ICcnKXtcblx0XHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHByb3ZpZGUgY2FuY2VsIFJlYXNvblwiIH0pO1xuXHRcdFx0XHR9ZWxzZSBpZighdGhpcy5zdGF0ZS5vcHRfdmVyaWZpZWQpe1xuXHRcdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZW50ZXIgb3RwXCIgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIHRoaXMucHJvcHMuY2FuY2VsSW5zdXJhbmNlKHJlc3AgPT4ge1xuXHRcdFx0Ly8gXHRpZiAocmVzcC5zdWNjZXNzKSB7XG5cdFx0XHQvLyBcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dDYW5jZWxQb3B1cDogZmFsc2UsIHNob3dDYW5jZWxTZWN0aW9uOmZhbHNlIH0pXG5cdFx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0XHQvLyBcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dDYW5jZWxQb3B1cDogZmFsc2UgfSlcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7b3RwOiBcIlwiLG9wdF92ZXJpZmllZDpmYWxzZSxwaG9uZU51bWJlcjonJyx2YWxpZGF0aW9uRXJyb3I6JycsZXJyb3JfbWVzc2FnZTonJyxpc090cEVkaXQ6dHJ1ZX0pXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd0NhbmNlbFBvcHVwOiBmYWxzZX0pXG5cdFx0fVxuXHR9XG5cblx0aW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhbmNlbFJlYXNvbjogZS50YXJnZXQudmFsdWUgfSlcblxuICAgIH1cblxuXHRyZW5kZXIoKSB7XHRcblx0XHRpZiAodGhpcy5wcm9wcy5kYXRhKSB7XG5cdFx0XHR2YXIgcHVyY2hhc2VfZGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuZGF0YS5wdXJjaGFzZV9kYXRlKVxuXHRcdFx0bGV0IHB1cmNoYXNlX3RpbWUgPSBwdXJjaGFzZV9kYXRlLnRvVGltZVN0cmluZygpXG5cdFx0XHRsZXQgcHVyY2hhc2VUaW1lID0gcHVyY2hhc2VfdGltZS5zcGxpdChcIiBcIilcblx0XHRcdHB1cmNoYXNlX2RhdGUgPSBwdXJjaGFzZV9kYXRlLnRvRGF0ZVN0cmluZygpXG5cdFx0XHRsZXQgcHVyY2hhc2VEYXRlID0gcHVyY2hhc2VfZGF0ZS5zcGxpdChcIiBcIilcblx0XHRcdGxldCBleHBpcnlfZGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuZGF0YS5leHBpcnlfZGF0ZSlcblx0XHRcdGxldCBleHBpcnlfdGltZSA9IGV4cGlyeV9kYXRlLnRvVGltZVN0cmluZygpXG5cdFx0XHRsZXQgZXhwaXJ5VGltZSA9IGV4cGlyeV90aW1lLnNwbGl0KFwiIFwiKVxuXHRcdFx0ZXhwaXJ5X2RhdGUgPSBleHBpcnlfZGF0ZS50b0RhdGVTdHJpbmcoKVxuXHRcdFx0bGV0IGV4cGlyeURhdGUgPSBleHBpcnlfZGF0ZS5zcGxpdChcIiBcIilcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogODAgfX0gPlxuXHRcdFx0XHQ8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfS8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnNob3dDYW5jZWxQb3B1cCA/XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAtb3ZlcmxheSBcIiA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkaWluZy1zcmNoLWVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWNvbmVudFwiPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWwgeW91ciBwb2xpY3k/PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwiZ28tYm90dG9tIG1ydC0yMFwiIHN0eWxlPXt7cGFkZGluZzonMCAxNXB4J319PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkaWdpLWhlYWRpbmdcIj5FbnRlciA2IGRpZ2l0IE9UUCBzZW50IHRvIHlvdXIgbW9iaWxlIG51bWJlciBlbmRpbmcgd2l0aCB4eHh4eHh4e3RoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEucGhvbmVfbnVtYmVyP3RoaXMucHJvcHMuZGF0YS5waG9uZV9udW1iZXIuc2xpY2UoNywgMTApOicnfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtaW5wdXQtbnVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgT1RQXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLm90cH0gdHlwZT1cIm51bWJlclwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLm90cC5sZW5ndGggPT0gNj90cnVlOmZhbHNlfSBzdHlsZT17e2JvcmRlcjp0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2UgIT0nJz8nMXB4IHNvbGlkICNmZjAwMDAnOidub25lJ319Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5pc090cEVkaXQ/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidnJmeS12aWEtbnVtXCIgb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcyx0aGlzLnByb3BzLGZhbHNlLHRydWUpfT5WZXJpZnkgdmlhIFdoYXRzQXBwPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2FuY2wtcnNuZC1jbGtcIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLHRoaXMucHJvcHMsdHJ1ZSxmYWxzZSl9PlJlc2VuZDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIiBzdHlsZT17e21hcmdpbkJvdHRvbTowfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIGlkPVwiQWNjbmFtZVwiIG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuY2FuY2VsUmVhc29ufSByZXF1aXJlZCByZWY9XCJuYW1lXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyNmN2Y3ZjcnfX0gYXV0b0NvbXBsZXRlPVwiZmlyc3RfbmFtZVwiIHJvd3M9XCIzXCIgY2xhc3NOYW1lPVwiaW5zdXJhbmNlLXRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIHJlYXNvbiBmb3IgY2FuY2VsbGF0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1idG4tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5jbGlja1BvcFVwLmJpbmQodGhpcywgMSl9PlllczwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPHNwYW4gY2xhc3NOYW1lPVwic3JjLWVsLWJ0bi1ib3JkZXJcIj48L3NwYW4+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xpY2tQb3BVcC5iaW5kKHRoaXMsIDIpfT5ObzwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDogJydcblx0XHRcdFx0fVxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5zaG93Q2FuY2VsU2VjdGlvbj9cblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gYm9vay1hcHBvaW50bWVudC1zZWN0aW9uIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctN1wiPlxuXHRcdFx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWJvb2stc2NyZWVuXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZmxleCBtcmItMjBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHdpZHRoPVwiMTAwXCIgc3JjPVwiaHR0cHM6Ly9xYWNkbi5kb2NwcmltZS5jb20vbWVkaWEvaW5zdXJlci9pbWFnZXMvYXBsbG9nby5wbmdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkdyb3VwIE91dC1wYXRpZW50IEluc3VyYW5jZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGZsZXhHcm93OiAnMCcsIGZsZXhTaHJpbms6ICcwJyB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgd2lkdGg9XCIzMFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2Noay1ncmVlbi5zdmdcIn0gc3R5bGU9e3sgdmVydGljYWxBbGlnbjogJy0zMXB4JyB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6ICcjNGZjMjQzJywgdmVydGljYWxBbGlnbjogJy0yMXB4JyB9fSA+QWN0aXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBpbnMtZGF0ZS1yb3cgbXJiLTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZGF0ZSB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItNVwiPlBvbGljeSBpc3N1ZSBEYXRlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTcwMFwiPntgJHt0aGlzLmdldEdldE9yZGluYWwocHVyY2hhc2VEYXRlWzJdKX0gJHtwdXJjaGFzZURhdGVbMV19ICR7cHVyY2hhc2VEYXRlWzNdfWB9PC9wPiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWRhdGUgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTVcIj5Qb2xpY3kgZXhwaXJ5IERhdGU8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNzAwXCI+e2Ake3RoaXMuZ2V0R2V0T3JkaW5hbChleHBpcnlEYXRlWzJdKX0gJHtleHBpcnlEYXRlWzFdfSAke2V4cGlyeURhdGVbM119YH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1kYXRlIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi01XCI+UG9saWN5IE51bWJlcjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy03MDBcIj57dGhpcy5wcm9wcy5kYXRhLnBvbGljeV9udW1iZXJ9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiZnctNTAwXCI+Q2FuY2VsbGF0aW9uIHBvbGljeTwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWNhbmNlbC10YWJsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5kYXRhLmNhbmNlbF9tYXN0ZXIgJiYgdGhpcy5wcm9wcy5kYXRhLmNhbmNlbF9tYXN0ZXIubGVuZ3RoID4wP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZGF0YS5jYW5jZWxfbWFzdGVyKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgPnt2YWx1ZS5yZWZ1bmRfcGVyY2VudGFnZX0lIFJlZnVuZDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cImZ3LTUwMFwiPnt2YWx1ZS5tYXhfZGF5c30gZGF5cyBmcm9tIFBvbGljeSBkYXRlPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgPk5vIFJlZnVuZDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkF0bGVhc3QgMSBjb21wbGV0ZWQgQ2xhaW08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+T24gY2FuY2VsbGF0aW9uIG9mIHBvbGljeSBhbGwgeW91ciBhY3RpdmUgYXBwb2ludG1lbnRzIHdpbGwgYWxzbyBiZSBjYW5jZWxsZWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJ2LWJ0biBwLTMgdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgYnRuLWxnIHRleHQtbGcgc3RpY2t5LWJ0biB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZmZmZcIiB9fSBvbkNsaWNrPXt0aGlzLmNhbmNlbFBvbGljeS5iaW5kKHRoaXMpfT5DYW5jZWwgUG9saWN5XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8Q2hhdFBhbmVsIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ6XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvbiBjb250YWluZXItdG9wLW1hcmdpblwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZmlsZS1ib29rLXNjcmVlblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBtcmItMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0WW91ciBQb2xpY3kgRFBIRUFMVEhPUEQxMjM0NSBjYW5jZWxsYXRpb24gcmVxdWVzdCBoYXMgYmVlbiBpbml0aWF0ZWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1yYi0xMFwiPk91ciB0ZWFtIHdpbGwgZ2V0IGluIHRvdWNoIHdpdGggeW91IHNob3J0bHk8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+IEFuIGVtYWlsIGFuZCBzbXMgaGFzIGJlZW4gc2VudCB0byB5b3VyIHJlZ2lzdGVyZWQgZW1haWwgaWQgYW5kIG1vYmlsZSBudW1iZXIgcmVnYXJkaW5nIHRoZSBzYW1lIDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+IEZvciBhbnkgb3RoZXIgcXVlcnkgeW91IGNvbnRhY3QgdXMgYXQgPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPjE4MDAtMTIzLTk0MTkgPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPiBjdXN0b21lcmNhcmVAZG9jcHJpbWUuY29tPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDgwIH19ID5cblx0XHRcdFx0PFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPlxuXHRcdFx0XHQ8TG9hZGVyIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHR9XG5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VDYW5jZWxsYXRpb25WaWV3ICAgICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IGNhbmNlbEluc3VyYW5jZSwgY2FuY2VsbGVkSW5zdXJhbmNlRGV0YWlscywgY2FuY2VsUmVhc29uLCBzZW5kT1RQLCBzdWJtaXRPVFB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgSW5zdXJhbmNlQ2FuY2VsbGF0aW9uVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2luc3VyYW5jZS9pbnN1cmFuY2VDYW5jZWxsYXRpb24uanMnXG5cbmNsYXNzIEluc3VyYW5jZUNhbmNlbGxhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YTpudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnByb3BzLmNhbmNlbGxlZEluc3VyYW5jZURldGFpbHMocmVzcCA9PnsgLy8gdG8gZ2V0IHVzZXIgY2FuY2VsbGVkIGRldGFpbHNcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6cmVzcH0pXG4gICAgICAgIH0pXG4gICAgfVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8SW5zdXJhbmNlQ2FuY2VsbGF0aW9uVmlldyB7Li4udGhpcy5wcm9wc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfS8+XG5cdFx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyBpbnN1cm5hY2VEYXRhLCBMT0FEX0lOU1VSQU5DRSwgc2VsZWN0ZWRfcGxhbixzZWxmX2RhdGFfdmFsdWVzLGluc3VyZWRfbWVtYmVyX2xpc3QsZ2V0X2luc3VyZWRfcHJvZmlsZX0gPSBzdGF0ZS5JTlNVUkFOQ0VcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnN1cm5hY2VEYXRhLExPQURfSU5TVVJBTkNFLHNlbGVjdGVkX3BsYW4sVVNFUixzZWxmX2RhdGFfdmFsdWVzLGluc3VyZWRfbWVtYmVyX2xpc3QsZ2V0X2luc3VyZWRfcHJvZmlsZVxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcblxuICAgICAgICBjYW5jZWxJbnN1cmFuY2UgOihjYikgPT4gZGlzcGF0Y2goY2FuY2VsSW5zdXJhbmNlKGNiKSksXG4gICAgICAgIGNhbmNlbGxlZEluc3VyYW5jZURldGFpbHM6KGNiKSA9PiBkaXNwYXRjaChjYW5jZWxsZWRJbnN1cmFuY2VEZXRhaWxzKGNiKSksXG4gICAgICAgIGNhbmNlbFJlYXNvbjooY3JpdGVyaWEpID0+IGRpc3BhdGNoKGNhbmNlbFJlYXNvbihjcml0ZXJpYSkpLFxuICAgICAgICBzZW5kT1RQOiAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSA9PiBkaXNwYXRjaChzZW5kT1RQKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikpLFxuICAgICAgICBzdWJtaXRPVFA6IChudW1iZXIsIG90cCxleHRyYVBhcmFtc0RhdGEsICBjYikgPT4gZGlzcGF0Y2goc3VibWl0T1RQKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsIGNiKSksXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMgLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluc3VyYW5jZUNhbmNlbGxhdGlvbikiLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiaW1wb3J0IF9NZW1vcnlSb3V0ZXIgZnJvbSBcIi4vTWVtb3J5Um91dGVyXCI7XG5leHBvcnQgeyBfTWVtb3J5Um91dGVyIGFzIE1lbW9yeVJvdXRlciB9O1xuaW1wb3J0IF9Qcm9tcHQgZnJvbSBcIi4vUHJvbXB0XCI7XG5leHBvcnQgeyBfUHJvbXB0IGFzIFByb21wdCB9O1xuaW1wb3J0IF9SZWRpcmVjdCBmcm9tIFwiLi9SZWRpcmVjdFwiO1xuZXhwb3J0IHsgX1JlZGlyZWN0IGFzIFJlZGlyZWN0IH07XG5pbXBvcnQgX1JvdXRlIGZyb20gXCIuL1JvdXRlXCI7XG5leHBvcnQgeyBfUm91dGUgYXMgUm91dGUgfTtcbmltcG9ydCBfUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuZXhwb3J0IHsgX1JvdXRlciBhcyBSb3V0ZXIgfTtcbmltcG9ydCBfU3RhdGljUm91dGVyIGZyb20gXCIuL1N0YXRpY1JvdXRlclwiO1xuZXhwb3J0IHsgX1N0YXRpY1JvdXRlciBhcyBTdGF0aWNSb3V0ZXIgfTtcbmltcG9ydCBfU3dpdGNoIGZyb20gXCIuL1N3aXRjaFwiO1xuZXhwb3J0IHsgX1N3aXRjaCBhcyBTd2l0Y2ggfTtcbmltcG9ydCBfZ2VuZXJhdGVQYXRoIGZyb20gXCIuL2dlbmVyYXRlUGF0aFwiO1xuZXhwb3J0IHsgX2dlbmVyYXRlUGF0aCBhcyBnZW5lcmF0ZVBhdGggfTtcbmltcG9ydCBfbWF0Y2hQYXRoIGZyb20gXCIuL21hdGNoUGF0aFwiO1xuZXhwb3J0IHsgX21hdGNoUGF0aCBhcyBtYXRjaFBhdGggfTtcbmltcG9ydCBfd2l0aFJvdXRlciBmcm9tIFwiLi93aXRoUm91dGVyXCI7XG5leHBvcnQgeyBfd2l0aFJvdXRlciBhcyB3aXRoUm91dGVyIH07Il0sInNvdXJjZVJvb3QiOiIifQ==