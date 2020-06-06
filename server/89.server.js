exports.ids = [89];
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../../components/commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceCancellationView extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
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
	}

	getGetOrdinal(n) {
		var s = ["th", "st", "nd", "rd"],
		    v = n % 100;
		return n + (s[(v - 20) % 10] || s[v] || s[0]);
	}

	cancelPolicy() {
		this.submitOTPRequest(this.props, true, false); // to submit otp request
		this.setState({ showCancelPopup: true });
	}

	submitOTPRequest(props, viaSms, viaWhatsapp) {
		let number;
		if (props.data) {
			number = props.data.phone_number;
		}
		if (number && number.match(/^[56789]{1}[0-9]{9}$/)) {
			this.setState({ validationError: "", phoneNumber: number });
			this.props.sendOTP(number, viaSms, viaWhatsapp, 'insurance-cancel', error => {
				// to submit otp request
				if (error) {
					this.setState({ validationError: "Could not generate OTP." });
				} else {
					// let data = {'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopupContinue', 'CustomerID': GTM.getUserId() || '', 'event': 'Insurance-login-popup-continue-click', 'mode':viaSms?'viaSms':viaWhatsapp?'viaWhatsapp':'', 'mobileNo':this.state.phoneNumber 
					//     }
					// GTM.sendEvent({ data: data })
					this.setState({ showOTP: true });
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

	handleChange(event) {
		this.setState({ otp: event.target.value }, () => {
			if (this.state.otp.length == 6) {
				this.setState({ isOtpEdit: false });
				this.verifyOTP(); // to verify user entered otp
			}
		});
	}

	verifyOTP() {
		let self = this;
		if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
			this.setState({ validationError: "" });
			let extraParamsData = {};
			this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParamsData, exists => {
				// to verify user entered otp
				if (exists.code == 'invalid') {
					this.setState({ error_message: exists.message, otp: '', isOtpEdit: true });
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: exists.message });
				} else {
					// let data = {'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopupOptVerified', 'CustomerID': GTM.getUserId() || '', 'event': 'Insurance-login-popup-opt-verified'
					//     }
					// GTM.sendEvent({ data: data })
					this.setState({ opt_verified: true });
				}
			});
		} else {
			this.setState({ validationError: "Please provide a valid number (10 digits)" });
		}
	}

	clickPopUp(type) {
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

	inputHandler(e) {
		this.setState({ cancelReason: e.target.value });
	}

	render() {
		if (this.props.data) {
			var purchase_date = new Date(this.props.data.purchase_date);
			let purchase_time = purchase_date.toTimeString();
			let purchaseTime = purchase_time.split(" ");
			purchase_date = purchase_date.toDateString();
			let purchaseDate = purchase_date.split(" ");
			let expiry_date = new Date(this.props.data.expiry_date);
			let expiry_time = expiry_date.toTimeString();
			let expiryTime = expiry_time.split(" ");
			expiry_date = expiry_date.toDateString();
			let expiryDate = expiry_date.split(" ");
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
												`${this.getGetOrdinal(purchaseDate[2])} ${purchaseDate[1]} ${purchaseDate[3]}`
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
												`${this.getGetOrdinal(expiryDate[2])} ${expiryDate[1]} ${expiryDate[3]}`
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
													this.props.data.cancel_master && this.props.data.cancel_master.length > 0 ? Object.entries(this.props.data.cancel_master).map(function ([key, value]) {
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _insuranceCancellation = __webpack_require__(/*! ../../components/insurance/insuranceCancellation.js */ "./dev/js/components/insurance/insuranceCancellation.js");

var _insuranceCancellation2 = _interopRequireDefault(_insuranceCancellation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceCancellation extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        this.props.cancelledInsuranceDetails(resp => {
            // to get user cancelled details
            this.setState({ data: resp });
        });
    }
    render() {
        return _react2.default.createElement(_insuranceCancellation2.default, _extends({}, this.props, { data: this.state.data }));
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { insurnaceData, LOAD_INSURANCE, selected_plan, self_data_values, insured_member_list, get_insured_profile } = state.INSURANCE;
    return {
        insurnaceData, LOAD_INSURANCE, selected_plan, USER, self_data_values, insured_member_list, get_insured_profile
    };
};

const mapDispatchToProps = dispatch => {
    return {

        cancelInsurance: cb => dispatch((0, _index.cancelInsurance)(cb)),
        cancelledInsuranceDetails: cb => dispatch((0, _index.cancelledInsuranceDetails)(cb)),
        cancelReason: criteria => dispatch((0, _index.cancelReason)(criteria)),
        sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
        submitOTP: (number, otp, extraParamsData, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceCancellation);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZUNhbmNlbGxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pbnN1cmFuY2UvSW5zdXJhbmNlQ2FuY2VsbGF0aW9uLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiSW5zdXJhbmNlQ2FuY2VsbGF0aW9uVmlldyIsInN0YXRlIiwic2hvd0NhbmNlbFBvcHVwIiwic2hvd0NhbmNlbFNlY3Rpb24iLCJjYW5jZWxSZWFzb24iLCJvdHAiLCJvcHRfdmVyaWZpZWQiLCJwaG9uZU51bWJlciIsInZhbGlkYXRpb25FcnJvciIsImVycm9yX21lc3NhZ2UiLCJpc090cEVkaXQiLCJnZXRHZXRPcmRpbmFsIiwibiIsInMiLCJ2IiwiY2FuY2VsUG9saWN5Iiwic3VibWl0T1RQUmVxdWVzdCIsInNldFN0YXRlIiwidmlhU21zIiwidmlhV2hhdHNhcHAiLCJudW1iZXIiLCJkYXRhIiwicGhvbmVfbnVtYmVyIiwibWF0Y2giLCJzZW5kT1RQIiwiZXJyb3IiLCJzaG93T1RQIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsInZlcmlmeU9UUCIsInNlbGYiLCJleHRyYVBhcmFtc0RhdGEiLCJzdWJtaXRPVFAiLCJleGlzdHMiLCJjb2RlIiwibWVzc2FnZSIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJjbGlja1BvcFVwIiwidHlwZSIsImhpc3RvcnkiLCJwdXNoIiwiaW5wdXRIYW5kbGVyIiwiZSIsInB1cmNoYXNlX2RhdGUiLCJEYXRlIiwicHVyY2hhc2VfdGltZSIsInRvVGltZVN0cmluZyIsInB1cmNoYXNlVGltZSIsInNwbGl0IiwidG9EYXRlU3RyaW5nIiwicHVyY2hhc2VEYXRlIiwiZXhwaXJ5X2RhdGUiLCJleHBpcnlfdGltZSIsImV4cGlyeVRpbWUiLCJleHBpcnlEYXRlIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmciLCJzbGljZSIsImJpbmQiLCJib3JkZXIiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGV4R3JvdyIsImZsZXhTaHJpbmsiLCJBU1NFVFNfQkFTRV9VUkwiLCJ2ZXJ0aWNhbEFsaWduIiwiY29sb3IiLCJwb2xpY3lfbnVtYmVyIiwiY2FuY2VsX21hc3RlciIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJyZWZ1bmRfcGVyY2VudGFnZSIsIm1heF9kYXlzIiwiSW5zdXJhbmNlQ2FuY2VsbGF0aW9uIiwiY29tcG9uZW50RGlkTW91bnQiLCJjYW5jZWxsZWRJbnN1cmFuY2VEZXRhaWxzIiwicmVzcCIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJpbnN1cm5hY2VEYXRhIiwiTE9BRF9JTlNVUkFOQ0UiLCJzZWxlY3RlZF9wbGFuIiwic2VsZl9kYXRhX3ZhbHVlcyIsImluc3VyZWRfbWVtYmVyX2xpc3QiLCJnZXRfaW5zdXJlZF9wcm9maWxlIiwiSU5TVVJBTkNFIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYW5jZWxJbnN1cmFuY2UiLCJjYiIsImNyaXRlcmlhIiwibWVzc2FnZV90eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxNQUFNQSxNQUFOLFNBQXFCQyxnQkFBTUMsU0FBM0IsQ0FBcUM7QUFDakNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUVEQyxhQUFTOztBQUVMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVyxL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IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ2hhdFBhbmVsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9DaGF0UGFuZWwnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIEluc3VyYW5jZUNhbmNlbGxhdGlvblZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93Q2FuY2VsUG9wdXA6IGZhbHNlLFxuXHRcdFx0c2hvd0NhbmNlbFNlY3Rpb246dHJ1ZSxcblx0XHRcdGNhbmNlbFJlYXNvbjonJyxcblx0XHRcdG90cDogXCJcIixcblx0XHRcdG9wdF92ZXJpZmllZDpmYWxzZSxcblx0XHRcdHBob25lTnVtYmVyOicnLFxuXHRcdFx0dmFsaWRhdGlvbkVycm9yOicnLFxuXHRcdFx0ZXJyb3JfbWVzc2FnZTonJyxcblx0XHRcdGlzT3RwRWRpdDp0cnVlXG5cdFx0fVxuXHR9XG5cblx0Z2V0R2V0T3JkaW5hbChuKSB7XG5cdFx0dmFyIHMgPSBbXCJ0aFwiLCBcInN0XCIsIFwibmRcIiwgXCJyZFwiXSxcblx0XHRcdHYgPSBuICUgMTAwO1xuXHRcdHJldHVybiBuICsgKHNbKHYgLSAyMCkgJSAxMF0gfHwgc1t2XSB8fCBzWzBdKTtcblx0fVxuXG5cdGNhbmNlbFBvbGljeSgpIHtcblx0XHR0aGlzLnN1Ym1pdE9UUFJlcXVlc3QodGhpcy5wcm9wcyx0cnVlLGZhbHNlKSAvLyB0byBzdWJtaXQgb3RwIHJlcXVlc3Rcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd0NhbmNlbFBvcHVwOiB0cnVlIH0pXG5cdH1cblxuXHRzdWJtaXRPVFBSZXF1ZXN0KHByb3BzLHZpYVNtcyx2aWFXaGF0c2FwcCkge1xuXHRcdGxldCBudW1iZXJcblx0XHRpZihwcm9wcy5kYXRhKXtcblx0XHRcdG51bWJlciA9IHByb3BzLmRhdGEucGhvbmVfbnVtYmVyXG5cdFx0fVxuICAgICAgICBpZiAobnVtYmVyICYmIG51bWJlci5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiAscGhvbmVOdW1iZXI6bnVtYmVyfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLCdpbnN1cmFuY2UtY2FuY2VsJywgKGVycm9yKSA9PiB7IC8vIHRvIHN1Ym1pdCBvdHAgcmVxdWVzdFxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIkNvdWxkIG5vdCBnZW5lcmF0ZSBPVFAuXCIgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZGF0YSA9IHsnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0luc3VyYW5jZUxvZ2luUG9wdXBDb250aW51ZScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnSW5zdXJhbmNlLWxvZ2luLXBvcHVwLWNvbnRpbnVlLWNsaWNrJywgJ21vZGUnOnZpYVNtcz8ndmlhU21zJzp2aWFXaGF0c2FwcD8ndmlhV2hhdHNhcHAnOicnLCAnbW9iaWxlTm8nOnRoaXMuc3RhdGUucGhvbmVOdW1iZXIgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T1RQOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHNob3dPVFA6IHRydWUsIG90cFRpbWVvdXQ6IHRydWUsc21zQnRuVHlwZTp2aWFTbXM/dHJ1ZTpmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBvdHBUaW1lb3V0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAvLyB9LCAxMDAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG51bWJlciAoMTAgZGlnaXRzKVwiIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtvdHAgOiBldmVudC50YXJnZXQudmFsdWV9LCgpPT57XG5cdFx0XHRpZih0aGlzLnN0YXRlLm90cC5sZW5ndGggPT0gNil7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2lzT3RwRWRpdDpmYWxzZX0pXG5cdFx0XHRcdHRoaXMudmVyaWZ5T1RQKCkgLy8gdG8gdmVyaWZ5IHVzZXIgZW50ZXJlZCBvdHBcblx0XHRcdH1cblx0XHR9KVxuICBcdH1cblxuICAgIHZlcmlmeU9UUCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBob25lTnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiIH0pXG5cdFx0XHRsZXQgZXh0cmFQYXJhbXNEYXRhID0ge31cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3VibWl0T1RQKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRoaXMuc3RhdGUub3RwLCBleHRyYVBhcmFtc0RhdGEsIChleGlzdHMpID0+IHsgLy8gdG8gdmVyaWZ5IHVzZXIgZW50ZXJlZCBvdHBcbiAgICAgICAgICAgICAgICBpZihleGlzdHMuY29kZSA9PSAnaW52YWxpZCcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcl9tZXNzYWdlOmV4aXN0cy5tZXNzYWdlLG90cDonJyxpc090cEVkaXQ6dHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogZXhpc3RzLm1lc3NhZ2V9KVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZGF0YSA9IHsnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0luc3VyYW5jZUxvZ2luUG9wdXBPcHRWZXJpZmllZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnSW5zdXJhbmNlLWxvZ2luLXBvcHVwLW9wdC12ZXJpZmllZCdcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcHRfdmVyaWZpZWQ6dHJ1ZX0pICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbnVtYmVyICgxMCBkaWdpdHMpXCIgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXHRjbGlja1BvcFVwKHR5cGUpIHtcblx0XHRpZiAodHlwZSA9PSAxKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLmNhbmNlbFJlYXNvbiAhPSAnJyAmJiB0aGlzLnN0YXRlLm9wdF92ZXJpZmllZCl7XG5cdFx0XHRcdHRoaXMucHJvcHMuY2FuY2VsUmVhc29uKHRoaXMuc3RhdGUuY2FuY2VsUmVhc29uKSAvLyBhc2sgY2FuY2VsbGF0aW9uIHJlYXNvblxuXHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9jYW5jZWxkZXRhaWxzJylcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRpZih0aGlzLnN0YXRlLmNhbmNlbFJlYXNvbiA9PSAnJyl7XG5cdFx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBwcm92aWRlIGNhbmNlbCBSZWFzb25cIiB9KTtcblx0XHRcdFx0fWVsc2UgaWYoIXRoaXMuc3RhdGUub3B0X3ZlcmlmaWVkKXtcblx0XHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGVudGVyIG90cFwiIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyB0aGlzLnByb3BzLmNhbmNlbEluc3VyYW5jZShyZXNwID0+IHtcblx0XHRcdC8vIFx0aWYgKHJlc3Auc3VjY2Vzcykge1xuXHRcdFx0Ly8gXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93Q2FuY2VsUG9wdXA6IGZhbHNlLCBzaG93Q2FuY2VsU2VjdGlvbjpmYWxzZSB9KVxuXHRcdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdFx0Ly8gXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93Q2FuY2VsUG9wdXA6IGZhbHNlIH0pXG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe290cDogXCJcIixvcHRfdmVyaWZpZWQ6ZmFsc2UscGhvbmVOdW1iZXI6JycsdmFsaWRhdGlvbkVycm9yOicnLGVycm9yX21lc3NhZ2U6JycsaXNPdHBFZGl0OnRydWV9KVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dDYW5jZWxQb3B1cDogZmFsc2V9KVxuXHRcdH1cblx0fVxuXG5cdGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYW5jZWxSZWFzb246IGUudGFyZ2V0LnZhbHVlIH0pXG5cbiAgICB9XG5cblx0cmVuZGVyKCkge1x0XG5cdFx0aWYgKHRoaXMucHJvcHMuZGF0YSkge1xuXHRcdFx0dmFyIHB1cmNoYXNlX2RhdGUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmRhdGEucHVyY2hhc2VfZGF0ZSlcblx0XHRcdGxldCBwdXJjaGFzZV90aW1lID0gcHVyY2hhc2VfZGF0ZS50b1RpbWVTdHJpbmcoKVxuXHRcdFx0bGV0IHB1cmNoYXNlVGltZSA9IHB1cmNoYXNlX3RpbWUuc3BsaXQoXCIgXCIpXG5cdFx0XHRwdXJjaGFzZV9kYXRlID0gcHVyY2hhc2VfZGF0ZS50b0RhdGVTdHJpbmcoKVxuXHRcdFx0bGV0IHB1cmNoYXNlRGF0ZSA9IHB1cmNoYXNlX2RhdGUuc3BsaXQoXCIgXCIpXG5cdFx0XHRsZXQgZXhwaXJ5X2RhdGUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLmRhdGEuZXhwaXJ5X2RhdGUpXG5cdFx0XHRsZXQgZXhwaXJ5X3RpbWUgPSBleHBpcnlfZGF0ZS50b1RpbWVTdHJpbmcoKVxuXHRcdFx0bGV0IGV4cGlyeVRpbWUgPSBleHBpcnlfdGltZS5zcGxpdChcIiBcIilcblx0XHRcdGV4cGlyeV9kYXRlID0gZXhwaXJ5X2RhdGUudG9EYXRlU3RyaW5nKClcblx0XHRcdGxldCBleHBpcnlEYXRlID0gZXhwaXJ5X2RhdGUuc3BsaXQoXCIgXCIpXG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDgwIH19ID5cblx0XHRcdFx0PFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5zaG93Q2FuY2VsUG9wdXAgP1xuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXkgXCIgPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsIHlvdXIgcG9saWN5PzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImdvLWJvdHRvbSBtcnQtMjBcIiBzdHlsZT17e3BhZGRpbmc6JzAgMTVweCd9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZGlnaS1oZWFkaW5nXCI+RW50ZXIgNiBkaWdpdCBPVFAgc2VudCB0byB5b3VyIG1vYmlsZSBudW1iZXIgZW5kaW5nIHdpdGggeHh4eHh4eHt0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhLnBob25lX251bWJlcj90aGlzLnByb3BzLmRhdGEucGhvbmVfbnVtYmVyLnNsaWNlKDcsIDEwKTonJ308L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLWlucHV0LW51bVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIE9UUFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5vdHB9IHR5cGU9XCJudW1iZXJcIiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5vdHAubGVuZ3RoID09IDY/dHJ1ZTpmYWxzZX0gc3R5bGU9e3tib3JkZXI6dGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlICE9Jyc/JzFweCBzb2xpZCAjZmYwMDAwJzonbm9uZSd9fS8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuaXNPdHBFZGl0P1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZyZnktdmlhLW51bVwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsdGhpcy5wcm9wcyxmYWxzZSx0cnVlKX0+VmVyaWZ5IHZpYSBXaGF0c0FwcDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNhbmNsLXJzbmQtY2xrXCIgb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcyx0aGlzLnByb3BzLHRydWUsZmFsc2UpfT5SZXNlbmQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBpZD1cIkFjY25hbWVcIiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmNhbmNlbFJlYXNvbn0gcmVxdWlyZWQgcmVmPVwibmFtZVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOicjZjdmN2Y3J319IGF1dG9Db21wbGV0ZT1cImZpcnN0X25hbWVcIiByb3dzPVwiM1wiIGNsYXNzTmFtZT1cImluc3VyYW5jZS10ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwiV3JpdGUgYSByZWFzb24gZm9yIGNhbmNlbGxhdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtYnRuLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xpY2tQb3BVcC5iaW5kKHRoaXMsIDEpfT5ZZXM8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxzcGFuIGNsYXNzTmFtZT1cInNyYy1lbC1idG4tYm9yZGVyXCI+PC9zcGFuPiAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsaWNrUG9wVXAuYmluZCh0aGlzLCAyKX0+Tm88L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuc3RhdGUuc2hvd0NhbmNlbFNlY3Rpb24/XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvbiBjb250YWluZXItdG9wLW1hcmdpblwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTdcIj5cblx0XHRcdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZmlsZS1ib29rLXNjcmVlblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZsZXggbXJiLTIwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyB3aWR0aD1cIjEwMFwiIHNyYz1cImh0dHBzOi8vcWFjZG4uZG9jcHJpbWUuY29tL21lZGlhL2luc3VyZXIvaW1hZ2VzL2FwbGxvZ28ucG5nXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5Hcm91cCBPdXQtcGF0aWVudCBJbnN1cmFuY2U8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBmbGV4R3JvdzogJzAnLCBmbGV4U2hyaW5rOiAnMCcgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHdpZHRoPVwiMzBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGstZ3JlZW4uc3ZnXCJ9IHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICctMzFweCcgfX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzRmYzI0MycsIHZlcnRpY2FsQWxpZ246ICctMjFweCcgfX0gPkFjdGl2ZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gaW5zLWRhdGUtcm93IG1yYi0wXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWRhdGUgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTVcIj5Qb2xpY3kgaXNzdWUgRGF0ZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy03MDBcIj57YCR7dGhpcy5nZXRHZXRPcmRpbmFsKHB1cmNoYXNlRGF0ZVsyXSl9ICR7cHVyY2hhc2VEYXRlWzFdfSAke3B1cmNoYXNlRGF0ZVszXX1gfTwvcD4gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1kYXRlIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi01XCI+UG9saWN5IGV4cGlyeSBEYXRlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTcwMFwiPntgJHt0aGlzLmdldEdldE9yZGluYWwoZXhwaXJ5RGF0ZVsyXSl9ICR7ZXhwaXJ5RGF0ZVsxXX0gJHtleHBpcnlEYXRlWzNdfWB9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZGF0ZSB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItNVwiPlBvbGljeSBOdW1iZXI8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNzAwXCI+e3RoaXMucHJvcHMuZGF0YS5wb2xpY3lfbnVtYmVyfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImZ3LTUwMFwiPkNhbmNlbGxhdGlvbiBwb2xpY3k8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1jYW5jZWwtdGFibGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZGF0YS5jYW5jZWxfbWFzdGVyICYmIHRoaXMucHJvcHMuZGF0YS5jYW5jZWxfbWFzdGVyLmxlbmd0aCA+MD9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmRhdGEuY2FuY2VsX21hc3RlcikubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkID57dmFsdWUucmVmdW5kX3BlcmNlbnRhZ2V9JSBSZWZ1bmQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJmdy01MDBcIj57dmFsdWUubWF4X2RheXN9IGRheXMgZnJvbSBQb2xpY3kgZGF0ZTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkID5ObyBSZWZ1bmQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJmdy01MDBcIj5BdGxlYXN0IDEgY29tcGxldGVkIENsYWltPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPk9uIGNhbmNlbGxhdGlvbiBvZiBwb2xpY3kgYWxsIHlvdXIgYWN0aXZlIGFwcG9pbnRtZW50cyB3aWxsIGFsc28gYmUgY2FuY2VsbGVkPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0aWNreS1idG4gdGV4dC1jZW50ZXJcIiBzdHlsZT17eyBjb2xvcjogXCIjZmZmZmZmXCIgfX0gb25DbGljaz17dGhpcy5jYW5jZWxQb2xpY3kuYmluZCh0aGlzKX0+Q2FuY2VsIFBvbGljeVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PENoYXRQYW5lbCAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0OlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb24gY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctN1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtYm9vay1zY3JlZW5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgbXJiLTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFlvdXIgUG9saWN5IERQSEVBTFRIT1BEMTIzNDUgY2FuY2VsbGF0aW9uIHJlcXVlc3QgaGFzIGJlZW4gaW5pdGlhdGVkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtcmItMTBcIj5PdXIgdGVhbSB3aWxsIGdldCBpbiB0b3VjaCB3aXRoIHlvdSBzaG9ydGx5PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPiBBbiBlbWFpbCBhbmQgc21zIGhhcyBiZWVuIHNlbnQgdG8geW91ciByZWdpc3RlcmVkIGVtYWlsIGlkIGFuZCBtb2JpbGUgbnVtYmVyIHJlZ2FyZGluZyB0aGUgc2FtZSA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPiBGb3IgYW55IG90aGVyIHF1ZXJ5IHlvdSBjb250YWN0IHVzIGF0IDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDBcIj4xODAwLTEyMy05NDE5IDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDBcIj4gY3VzdG9tZXJjYXJlQGRvY3ByaW1lLmNvbTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA4MCB9fSA+XG5cdFx0XHRcdDxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9Lz5cblx0XHRcdFx0PExvYWRlciAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0fVxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdXJhbmNlQ2FuY2VsbGF0aW9uVmlldyAgICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBjYW5jZWxJbnN1cmFuY2UsIGNhbmNlbGxlZEluc3VyYW5jZURldGFpbHMsIGNhbmNlbFJlYXNvbiwgc2VuZE9UUCwgc3VibWl0T1RQfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IEluc3VyYW5jZUNhbmNlbGxhdGlvblZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlQ2FuY2VsbGF0aW9uLmpzJ1xuXG5jbGFzcyBJbnN1cmFuY2VDYW5jZWxsYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6bnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5jYW5jZWxsZWRJbnN1cmFuY2VEZXRhaWxzKHJlc3AgPT57IC8vIHRvIGdldCB1c2VyIGNhbmNlbGxlZCBkZXRhaWxzXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOnJlc3B9KVxuICAgICAgICB9KVxuICAgIH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PEluc3VyYW5jZUNhbmNlbGxhdGlvblZpZXcgey4uLnRoaXMucHJvcHN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0vPlxuXHRcdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgaW5zdXJuYWNlRGF0YSwgTE9BRF9JTlNVUkFOQ0UsIHNlbGVjdGVkX3BsYW4sc2VsZl9kYXRhX3ZhbHVlcyxpbnN1cmVkX21lbWJlcl9saXN0LGdldF9pbnN1cmVkX3Byb2ZpbGV9ID0gc3RhdGUuSU5TVVJBTkNFXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5zdXJuYWNlRGF0YSxMT0FEX0lOU1VSQU5DRSxzZWxlY3RlZF9wbGFuLFVTRVIsc2VsZl9kYXRhX3ZhbHVlcyxpbnN1cmVkX21lbWJlcl9saXN0LGdldF9pbnN1cmVkX3Byb2ZpbGVcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG5cbiAgICAgICAgY2FuY2VsSW5zdXJhbmNlIDooY2IpID0+IGRpc3BhdGNoKGNhbmNlbEluc3VyYW5jZShjYikpLFxuICAgICAgICBjYW5jZWxsZWRJbnN1cmFuY2VEZXRhaWxzOihjYikgPT4gZGlzcGF0Y2goY2FuY2VsbGVkSW5zdXJhbmNlRGV0YWlscyhjYikpLFxuICAgICAgICBjYW5jZWxSZWFzb246KGNyaXRlcmlhKSA9PiBkaXNwYXRjaChjYW5jZWxSZWFzb24oY3JpdGVyaWEpKSxcbiAgICAgICAgc2VuZE9UUDogKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikgPT4gZGlzcGF0Y2goc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpKSxcbiAgICAgICAgc3VibWl0T1RQOiAobnVtYmVyLCBvdHAsZXh0cmFQYXJhbXNEYXRhLCAgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdE9UUChudW1iZXIsIG90cCwgZXh0cmFQYXJhbXNEYXRhLCBjYikpLFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbnN1cmFuY2VDYW5jZWxsYXRpb24pIl0sInNvdXJjZVJvb3QiOiIifQ==