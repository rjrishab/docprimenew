exports.ids = [13];
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

/***/ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class WhatsAppOptinView extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.state = {
            whatsapp_optin_View: true
        };
    }

    shouldRender() {
        if (this.props.profiles) {
            if (this.props.profiles.whatsapp_optin != null) {
                if (this.props.isAppointment && !this.props.profiles.whatsapp_optin && !this.props.profiles.whatsapp_is_declined) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else if (this.props.isUserProfile) {
            return true;
        } else {
            return false;
        }
    }

    toggleWhatsap(status, e) {
        if (this.props.isAppointment) {
            let profileData = _extends({}, this.props.profiles);
            if (status) {
                profileData.whatsapp_optin = true;
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "You whatsApp notifications has been enabled." });
            } else {
                profileData.whatsapp_is_declined = true;
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "your whatsApp notifications has been disabled." });
            }
            this.props.editUserProfile(profileData, profileData.id, () => {
                document.getElementsByClassName('whatsappCardContainer')[0].classList.add('d-none');
            });
        } else {
            this.setState({ whatsapp_optin_View: status }, () => {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'Whatsaptoggled', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Whatsap-toggled'
                };
                _gtm2.default.sendEvent({ data: data });
                this.props.toggleWhatsap(status);
            });
        }
    }

    render() {

        if (!this.shouldRender()) return _react2.default.createElement('div', null);

        return _react2.default.createElement(
            'div',
            null,
            this.props.isAppointment ? _react2.default.createElement(
                'div',
                { className: 'whatsappCardContainer' },
                _react2.default.createElement(
                    'div',
                    { className: 'wa-logo-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'wa-container' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/wa-logo.svg" })
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Docprime would like to send you updates through whatsapp'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'allowDeclineContainer' },
                    _react2.default.createElement(
                        'p',
                        { className: 'allowBtns', onClick: this.toggleWhatsap.bind(this, true) },
                        'Allow'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'declineBtns', style: { color: '#757575' }, onClick: this.toggleWhatsap.bind(this, false) },
                        'Decline'
                    )
                )
            ) : _react2.default.createElement(
                'div',
                { className: 'widget mrb-15' },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-content' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { className: 'ck-bx', style: { fontWeight: '600', fontSize: '14px' } },
                            'Enable ',
                            _react2.default.createElement(
                                'span',
                                { className: 'sm-wtsp-img' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/wa-logo-sm.png" }),
                                'WhatsApp'
                            ),
                            ' notification',
                            _react2.default.createElement('input', { type: 'checkbox', onChange: this.toggleWhatsap.bind(this, !this.state.whatsapp_optin_View), checked: this.state.whatsapp_optin_View }),
                            _react2.default.createElement('span', { className: 'checkmark' })
                        )
                    )
                )
            )
        );
    }
}

exports.default = WhatsAppOptinView;

/***/ }),

/***/ "./dev/js/components/commons/paymentForm/PaymentForm.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/paymentForm/PaymentForm.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PaymentForm extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    sendEvent() {
        let refs = this.props.refs;
        if (refs) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ContinueClicked', 'pageSource': refs, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
        } else {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ContinueClicked', 'pageSource': 'UNKNOWN', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }

    componentDidMount() {
        this.sendEvent();
    }

    getPaymentNodeName(name, index) {
        return `${name}[${index}]`;
    }

    render() {

        // let data = { "paymentMode": "CC", "responseCode": "227", "bankTxId": "", "txDate": "Jun 4, 2018 12:10:23 PM", "bankName": "SBI", "statusMsg": "Oops an error occurred. We will get back to you!", "currency": "INR", "statusCode": 1, "pgGatewayName": "MOCK", "responseMessage": "Your payment has been declined by your bank. Please contact your bank for any queries. If money has been deducted from your account, your bank will inform us within 48 hrs and we will refund the same", "txStatus": "TXN_FAILURE", "customerId": 51, "orderNo": this.props.paymentData['orderId'], "statusShortMsg": "Others", "email": "dummy_appointment@policybazaar.com", "pbGatewayName": "paytm", "mobile": "9999999997", productId: this.props.paymentData['productId'] }

        // if (this.props.paymentData['referenceId']) {
        //     data['referenceId'] = this.props.paymentData['referenceId']
        // }

        // data['pgTxId'] = this.props.paymentData['orderId']
        // data = btoa(JSON.stringify(data))

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'form',
                { id: 'paymentForm', ref: 'paymentForm', method: 'post', action: this.props.paymentData && this.props.paymentData['is_single_flow'] ? _config2.default.PG_MULTI_ORDER_URL : _config2.default.PG_URL, style: { display: 'none' } },
                this.props.paymentData['is_single_flow'] ? _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    this.props.paymentData['items'].map((item, i) => {
                        return _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('name', i), id: item['name'], defaultValue: item['name'] }),
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('productId', i), id: item['productId'], defaultValue: item['productId'] }),
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('txAmount', i), id: item['txAmount'], defaultValue: item['txAmount'] }),
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('orderId', i), id: item['orderId'], defaultValue: item['orderId'] }),
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('holdPayment', i), id: item['holdPayment'], defaultValue: item['holdPayment'] }),
                            item && item['insurerCode'] ? _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('insurerCode', i), id: item['insurerCode'], defaultValue: item['insurerCode'] }) : ''
                        );
                    })
                ) : _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement('input', { type: 'text', name: 'name', defaultValue: this.props.paymentData['name'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'productId', defaultValue: this.props.paymentData['productId'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'txAmount', defaultValue: this.props.paymentData['txAmount'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'orderId', defaultValue: this.props.paymentData['orderId'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'holdPayment', defaultValue: this.props.paymentData['holdPayment'] }),
                    this.props.paymentData && this.props.paymentData['insurerCode'] ? _react2.default.createElement('input', { type: 'text', name: 'insurerCode', defaultValue: this.props.paymentData['insurerCode'] }) : ''
                ),
                _react2.default.createElement('input', { type: 'text', name: 'custId', defaultValue: this.props.paymentData['custId'] }),
                _react2.default.createElement('input', { type: 'text', name: 'mobile', defaultValue: this.props.paymentData['mobile'] }),
                _react2.default.createElement('input', { type: 'text', name: 'email', defaultValue: this.props.paymentData['email'] }),
                _react2.default.createElement('input', { type: 'text', name: 'surl', defaultValue: this.props.paymentData['surl'] }),
                _react2.default.createElement('input', { type: 'text', name: 'furl', defaultValue: this.props.paymentData['furl'] }),
                this.props.paymentData && this.props.paymentData['referenceId'] ? _react2.default.createElement('input', { type: 'text', name: 'referenceId', defaultValue: this.props.paymentData['referenceId'] }) : '',
                _react2.default.createElement('input', { type: 'text', name: 'hash', defaultValue: this.props.paymentData['hash'] }),
                _react2.default.createElement('input', { type: 'text', name: 'isPreAuth', defaultValue: this.props.paymentData['isPreAuth'] }),
                this.props.paymentData && this.props.paymentData['paytmMsg'] ? _react2.default.createElement('input', { type: 'text', name: 'paytmMsg', defaultValue: this.props.paymentData['paytmMsg'] }) : '',
                this.props.paymentData && this.props.paymentData['couponCode'] ? _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement('input', { type: 'text', name: 'couponCode', defaultValue: this.props.paymentData['couponCode'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'discountedAmnt', defaultValue: this.props.paymentData['discountedAmnt'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'couponPgMode', defaultValue: this.props.paymentData['couponPgMode'] })
                ) : '',
                this.props.paymentData && this.props.paymentData['refOrderId'] ? _react2.default.createElement('input', { type: 'text', name: 'refOrderId', defaultValue: this.props.paymentData['refOrderId'] }) : '',
                this.props.paymentData && this.props.paymentData['refOrderNo'] ? _react2.default.createElement('input', { type: 'text', name: 'refOrderNo', defaultValue: this.props.paymentData['refOrderNo'] }) : '',
                this.props.paymentData && this.props.paymentData['parentProductId'] ? _react2.default.createElement('input', { type: 'text', name: 'parentProductId', defaultValue: this.props.paymentData['parentProductId'] }) : ''
            )
        );
    }
}

exports.default = PaymentForm;

/***/ }),

/***/ "./dev/js/components/commons/paymentForm/index.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/paymentForm/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PaymentForm = __webpack_require__(/*! ./PaymentForm */ "./dev/js/components/commons/paymentForm/PaymentForm.js");

var _PaymentForm2 = _interopRequireDefault(_PaymentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PaymentForm2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js":
/*!********************************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js ***!
  \********************************************************************************/
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

class BookingConfirmationPopup extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return _react2.default.createElement(
			'div',
			{ className: 'search-el-popup-overlay' },
			_react2.default.createElement(
				'div',
				{ className: 'search-el-popup vip-srch-pop-min' },
				_react2.default.createElement(
					'div',
					{ className: 'widget' },
					_react2.default.createElement(
						'div',
						{ className: 'widget-content padiing-srch-el' },
						_react2.default.createElement(
							_react2.default.Fragment,
							null,
							_react2.default.createElement(
								'p',
								{ className: 'srch-el-conent' },
								this.props.is_gold ? 'Confirm delete member?' : 'Do you wish to continue?'
							),
							_react2.default.createElement(
								'div',
								{ className: 'search-el-btn-container' },
								_react2.default.createElement(
									'button',
									{ onClick: this.props.priceConfirmationPopup.bind(this, true) },
									'Yes'
								),
								_react2.default.createElement(
									'button',
									{ onClick: this.props.priceConfirmationPopup.bind(this, false) },
									'No'
								)
							)
						)
					)
				)
			)
		);
	}
}

exports.default = BookingConfirmationPopup;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/lensfitPopup.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/lensfitPopup.js ***!
  \********************************************************************/
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

class BookingConfirmationPopup extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let pathName = this.props.location.pathname;
		let searchParam = this.props.location.search;
		let callBackUrl = pathName + searchParam;
		return _react2.default.createElement(
			'div',
			{ className: 'search-el-popup-overlay' },
			_react2.default.createElement(
				'div',
				{ className: 'search-el-popup' },
				_react2.default.createElement(
					'div',
					{ className: 'widget' },
					_react2.default.createElement(
						'div',
						{ className: 'lnst-fit-pop-bg' },
						_react2.default.createElement(
							'p',
							null,
							'Get a Free Eyewear with ',
							_react2.default.createElement('br', null),
							'this appointment'
						),
						_react2.default.createElement(
							'div',
							{ className: 'by-lansfit' },
							_react2.default.createElement(
								'span',
								null,
								'by'
							),
							_react2.default.createElement('img', { className: 'lnsfit-pop-ico', src: "/assets" + "/img/lensico.png" })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'lnst-fit-sub-pop' },
						_react2.default.createElement(
							'p',
							{ className: 'lns-para-mn' },
							'\u201CFREE PAIR OF EYE GLASSES ',
							_react2.default.createElement('br', null),
							'(Frame + Lens) or Sunglasses'
						),
						_react2.default.createElement(
							'p',
							{ className: 'lnsft-cpn' },
							'Use Coupon: LENSFIT'
						),
						_react2.default.createElement(
							'p',
							{ className: 'lns-know', onClick: e => {
									e.preventDefault();
									e.stopPropagation();
									let data = {
										'Category': 'ConsumerApp', 'Action': 'LensFitKnowMore', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lensfit-knowmore-clicked'
									};

									_gtm2.default.sendEvent({ data: data });
									this.props.history.push('/lensfit-tnc?callbackurl=' + callBackUrl + '&isLensfitSpecific=true');
								} },
							'Know more'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'lnsfit-btn-container' },
						_react2.default.createElement(
							'button',
							{ onClick: this.props.closeLensFitPopup.bind(this) },
							'I Don\u2019t want'
						),
						_react2.default.createElement(
							'button',
							{ onClick: this.props.applyLensFitCoupons.bind(this, this.props.isOPD ? this.props.deal_price : 0, this.props.lensfit_coupons) },
							'Apply LENSFIT'
						)
					)
				)
			)
		);
	}
}

exports.default = BookingConfirmationPopup;

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/VipGoldPackage.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/VipGoldPackage.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VipGoldPackagePriceView extends _react2.default.PureComponent {

	render() {

		return _react2.default.createElement(
			"div",
			{ className: "search-el-popup-overlay cancel-overlay-zindex", onClick: e => {
					e.preventDefault();
					e.stopPropagation();
					this.props.toggleGoldPricePopup();
				} },
			_react2.default.createElement(
				"div",
				{ className: "search-el-popup", onClick: e => {
						e.preventDefault();
						e.stopPropagation();
					} },
				_react2.default.createElement(
					"div",
					{ className: "widget p-12" },
					_react2.default.createElement(
						"div",
						{ className: "p-relative" },
						_react2.default.createElement(
							"span",
							{ className: "ipd-pop-ild", onClick: e => {
									e.stopPropagation();
									e.preventDefault();
									this.props.toggleGoldPricePopup();
								} },
							_react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png" })
						)
					),
					_react2.default.createElement(
						"h4",
						{ className: "gold-pop-hdng" },
						"Select Plan"
					),
					_react2.default.createElement(
						"div",
						{ className: "gold-offer-cont gold-pop-pading" },
						_react2.default.createElement(
							"h4",
							{ className: "gold-ofr-hdng" },
							"LIMITED PERIOD OFFER"
						),
						_react2.default.createElement(
							"div",
							{ className: "gold-list-container" },
							this.props.vipGoldPlans && this.props.vipGoldPlans.length > 0 ? this.props.vipGoldPlans.map((value, key) => {
								return _react2.default.createElement(
									"div",
									{ key: key, className: `gold-ofr-lising addpdng-popup ${value.id == (this.props.selected_vip_plan && this.props.selected_vip_plan.id) ? 'gold-select' : ''}`, onClick: () => this.props.toggleGoldPlans(value) },
									_react2.default.createElement(
										"div",
										{ className: "gold-mnthplan" },
										_react2.default.createElement(
											"p",
											{ className: "mnth-plan-gld" },
											"Coverage: ",
											value.total_allowed_members,
											" ",
											parseInt(value.total_allowed_members) > 1 ? 'Members' : 'Member'
										),
										_react2.default.createElement(
											"p",
											{ className: "gld-cvr-txt" },
											"Valid for ",
											value.tenure,
											" Months ",
											value.is_selected ? _react2.default.createElement(
												"span",
												null,
												"POPULAR"
											) : ''
										)
									),
									_react2.default.createElement(
										"div",
										{ className: "gold-price" },
										_react2.default.createElement(
											"p",
											{ className: "gld-prc" },
											_react2.default.createElement(
												"span",
												{ className: "gold-prc-cut" },
												"\u20B9",
												value.mrp
											),
											" \u20B9",
											value.deal_price
										),
										_react2.default.createElement(
											"div",
											{ className: "gold-pln-slct-radio" },
											_react2.default.createElement("div", { className: "gd-rdio-gray" }),
											_react2.default.createElement("img", { className: "gd-rdio-chk", src: "/assets" + '/img/vip-chk.svg' })
										)
									)
								);
							}) : ''
						),
						 false ? undefined : ''
					),
					_react2.default.createElement(
						"p",
						{ className: "gol-pop-custom-btn", onClick: this.props.goToGoldPage },
						"View Details"
					)
				)
			)
		);
	}
}

exports.default = VipGoldPackagePriceView;

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/bookingErrorPopUp.js":
/*!*******************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/bookingErrorPopUp.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BookingError extends _react2.default.Component {
    render() {
        return _react2.default.createElement(
            "section",
            { className: "error-msg-pop" },
            _react2.default.createElement("div", { className: "cancel-overlay" }),
            _react2.default.createElement(
                "div",
                { className: "popup-error", style: { width: '300px' } },
                _react2.default.createElement(
                    "div",
                    { className: "error-head" },
                    _react2.default.createElement("img", { className: "errorInfoImg", src: "/assets" + "/img/infoerror.svg" }),
                    "Alert"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "cross-btn" },
                    _react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", alt: "close", onClick: this.props.closeErrorPopup })
                ),
                _react2.default.createElement(
                    "p",
                    { className: "error-msg" },
                    this.props.message
                )
            )
        );
    }
}

exports.default = BookingError;

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/choosePatientNew.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/choosePatientNew.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _newDateSelector = __webpack_require__(/*! ../../commons/newDateSelector.js */ "./dev/js/components/commons/newDateSelector.js");

var _newDateSelector2 = _interopRequireDefault(_newDateSelector);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const moment = __webpack_require__(/*! moment */ "moment");
const queryString = __webpack_require__(/*! query-string */ "query-string");


class ChoosePatientNewView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            showOtp: false,
            otpVerifySuccess: false,
            name: '',
            phoneNumber: this.props.user_loggedIn_number ? this.props.user_loggedIn_number : '',
            gender: 'm',
            data: false,
            email: '',
            smsBtnType: null,
            isEmailNotValid: false,
            isPopupDataFilled: false,
            enableOtpRequest: false,
            dob: null,
            formattedDate: '',
            dateModal: false,
            isDobNotValid: false,
            isNewPatient: false,
            is_dob_error: null,
            isDobValidated: false,
            otp: null,
            showLogin: false,
            askUserDetails: false,
            otpTimeout: false
        };
    }

    componentDidMount() {
        if (!this.props.patient) {

            if (this.props.saved_patient_details && Object.keys(this.props.saved_patient_details).length) {

                this.setState(_extends({}, this.props.saved_patient_details, { isPopupDataFilled: false, showLogin: false, otp: null }), () => {
                    this.profileValidation();
                });
            }
        }
        if (document.getElementById('otpMob')) {
            document.getElementById('otpMob').focus();
        }
        if (this.props.user_loggedIn_number) {
            this.setState({ phoneNumber: this.props.user_loggedIn_number ? this.props.user_loggedIn_number : '' });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.doctorSummaryPage && !nextProps.patient && !this.state.isPopupDataFilled && nextProps.ipdPopupData && nextProps.ipdPopupData['popup1'] && (!this.props.ipdPopupData['popup1'] || this.props.ipdPopupData['popup1'] && nextProps.ipdPopupData['popup1'].name != this.props.ipdPopupData['popup1'])) {
            let popup1;
            try {
                let popup1 = nextProps.ipdPopupData['popup1'];

                if (popup1 && Object.keys(popup1).length && popup1.doctor == this.props.selectedDoctor) {
                    this.setState({ name: popup1 && popup1.first_name ? popup1.first_name : '', phoneNumber: popup1 && popup1.phone_number ? popup1.phone_number : '', gender: popup1 && popup1.gender ? popup1.gender : '', showVerify: popup1 && popup1.phone_number.length == 10 ? true : false, isPopupDataFilled: true, showLogin: false, otp: null }, () => {
                        this.profileValidation();
                    });
                }
            } catch (e) {}
        }
    }

    inputHandler(e) {
        if (e.target.name == 'phoneNumber') {
            e.target.value.length <= 10 ? e.target.value.length == 10 ? this.setState({
                [e.target.name]: e.target.value, showVerify: true
            }) : this.setState({
                [e.target.name]: e.target.value
            }) : this.setState({ showVerify: true });
        } else if (e.target.name == 'otp') {
            e.target.value.length <= 6 ? e.target.value.length == 6 ? this.setState({
                [e.target.name]: e.target.value
            }) : this.setState({
                [e.target.name]: e.target.value
            }) : this.setState({ showVerify: true });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    handleContinuePress(e) {
        if (e.key === 'Enter') {
            this.verify();
        }
    }

    handleOtpContinuePress(e) {
        if (e.key === 'Enter') {
            this.submitOTPRequest();
        }
    }

    submitOTPRequest(number) {

        if (!this.state.otp) {
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Otp" });
            return;
        }
        let self = this;
        let extraParamsData = {
            summaryPage: true
        };
        this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParamsData, response => {
            if (response.token) {

                let data = {
                    'Category': 'ConsumerApp', 'Action': 'LoginSuccess', 'pageSource': 'BookingPage', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'login-success', 'mobileNo': this.state.phoneNumber
                };
                _gtm2.default.sendEvent({ data: data });

                self.setState({ otpVerifySuccess: true }, () => {
                    self.props.profileDataCompleted(this.state);
                    //Create IPD lead for IPD Hospital
                    /*if (self.props.doctorSummaryPage && self.props.is_ipd_hospital) {
                        let formData = {
                            phone_number: this.state.phoneNumber,
                            source: 'dropoff',
                            is_valid: false,
                            first_name: this.state.name || 'unknown'
                        }
                        if (self.props.doctor_id) {
                            formData['doctor'] = self.props.doctor_id
                        }
                        if (self.props.hospital_id) {
                            formData['hospital'] = self.props.hospital_id
                        }
                        self.props.submitIPDForm(formData, this.props.selectedLocation)
                    }*/
                    if (response.user_exists == 1) {
                        self.props.getUserProfile().then(() => {
                            if (self.props.is_lab) {
                                self.props.checkPrescription();
                                self.props.clearTestForInsured();
                            }
                            this.props.getDataAfterLogin();
                            if (self.props.is_opd) {
                                self.props.sendEmailNotification();
                            }
                        });
                    }
                    // self.props.createProfile(this.state, (err, res) => {
                    //     //self.setState({data:true})
                    //     self.props.getUserProfile().then(() => {

                    //         if (self.props.is_lab) {
                    //             self.props.checkPrescription()
                    //             self.props.clearTestForInsured()
                    //         }
                    //         this.props.getDataAfterLogin()
                    //         if (self.props.is_opd) {
                    //             self.props.sendEmailNotification()
                    //         }
                    //     })
                    //     self.setState({ dob: null, email: null })
                    // })
                });
            } else {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Otp" });
            }
        });
    }

    profileValidation() {
        this.props.profileDataCompleted(this.state);
    }

    profileEmailValidation() {
        if (!this.state.email.match(/\S+@\S+\.\S+/)) {
            this.setState({ isEmailNotValid: true });
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Email Id" });
            }, 500);
            return;
        }
    }

    profileDobValidation(e) {
        let data = _extends({}, this.props.patient);
        if (data) {
            this.setState({ dob: data.dob ? data.dob : this.state.dob }, () => {
                if (this.state.dob) {
                    if (this.state.dob != null && data.dob == null && !this.state.isDobValidated) {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Date of Birth" });
                        return;
                    }
                    this.setState({ isDobNotValid: false });
                    data.dob = this.state.dob;
                    data.otpVerifySuccess = true;
                    this.props.profileDataCompleted(data);
                    this.props.editUserProfile(data, this.props.patient.id, (err, res) => {
                        this.props.getUserProfile();
                        this.setState({ dob: null });
                    });
                } else {
                    if (!this.state.dob && !data.dob) {
                        this.setState({ isDobNotValid: true });
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Date of Birth" });
                    }
                }
            });
        }
        // if (data) {
        //     this.setState({ email: data.email ? data.email : this.state.email, dob: data.dob ? data.dob : this.state.dob }, () => {
        //         if (this.state.dob && this.state.email) {
        //             if (this.state.dob != null && data.dob == null && !this.state.isDobValidated) {
        //                 SnackBar.show({ pos: 'bottom-center', text: "Please Enter Date of Birth" })
        //                 return
        //             }
        //             this.setState({ isEmailNotValid: false, isDobNotValid: false })
        //             data.dob = this.state.dob
        //             data.email = this.state.email
        //             data.otpVerifySuccess = true
        //             this.props.profileDataCompleted(data)
        //             this.props.editUserProfile(data, this.props.patient.id, (err, res) => {
        //                 this.props.getUserProfile()
        //                 this.setState({ dob: null, email: null })
        //             })
        //         } else {
        //             if (!this.state.email && !data.email) {
        //                 this.setState({ isEmailNotValid: true })
        //                 SnackBar.show({ pos: 'bottom-center', text: "Please Enter Valid Email Id" })
        //             }
        //             if (!this.state.dob && !data.dob) {
        //                 this.setState({ isDobNotValid: true })
        //                 SnackBar.show({ pos: 'bottom-center', text: "Please Enter Date of Birth" })
        //             }
        //         }
        //     })
        // }
    }

    selectDateFromCalendar(date) {
        let data = _extends({}, this.props.patient);
        if (date) {
            date = date.toDate();
            let formattedDate = this.getFormattedDate(date);
            date = new Date(date).toISOString().split('T')[0];
            /*this.setState({ dob: date, formattedDate:formattedDate, dateModal: false},()=>{
                data.dob = this.state.dob    
                this.props.editUserProfile(data, this.props.patient.id, (err, res) => {
                    this.props.getUserProfile()
                })
            })*/
            this.setState({ dob: date, formattedDate: formattedDate, dateModal: false }, () => {
                if (this.state.isNewPatient) {
                    this.profileValidation();
                }
            });
        } else {
            this.setState({ dateModal: false });
        }
    }

    getFormattedDate(date) {
        date = new Date(date);
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '-' + mm + '-' + yyyy;
        return today;
    }

    openCalendar(isNewPatient) {
        this.setState({ dateModal: true, isNewPatient: isNewPatient });
    }

    verify(resendFlag = false, viaSms, viaWhatsapp) {
        let self = this;

        if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
            this.setState({ validationError: "" });

            if (resendFlag) {
                let analyticData = {
                    'Category': 'ConsumerApp', 'Action': 'ResendOtp', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'resend-otp', 'mobileNo': this.state.phoneNumber, 'pageSource': 'BookingPage', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : ''
                };
                _gtm2.default.sendEvent({ data: analyticData });
            } else {
                let analyticData = {
                    'Category': 'ConsumerApp', 'Action': 'GetOtpRequest', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'get-otp-request', 'mobileNo': this.state.phoneNumber, 'pageSource': 'BookingPage', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : ''
                };
                _gtm2.default.sendEvent({ data: analyticData });
            }
            this.props.nonIpdLeads(this.state.phoneNumber);
            this.props.sendOTP(this.state.phoneNumber, viaSms, viaWhatsapp, 'booking-login', error => {
                if (error) {
                    setTimeout(() => {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not generate OTP." });
                    }, 500);
                    //self.setState({ validationError: "Could not generate OTP." })
                } else {
                    // if (viaWhatsapp) {
                    //     this.setState({ enableOtpRequest: true })
                    // } else {
                    //     this.setState({ enableOtpRequest: true })
                    // }
                    self.setState({ showOtp: true, showVerify: false, smsBtnType: viaSms ? true : false, showLogin: true, enableOtpRequest: true, enableOtpRequest: false, otpTimeout: false }, () => {
                        self.resendOtpCountDown();
                    });
                    // setTimeout(() => {
                    //     this.setState({ otpTimeout: false })
                    // }, 20000)
                    // setTimeout(() => {
                    //     this.setState({ enableOtpRequest: false,otpTimeout: false })
                    //     this.resendOtpCountDown()
                    // }, 60000)
                }
            });
        } else {
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please provide a valid number (10 digits)" });
            }, 500);
        }
    }
    getNewDate(type, newDate, isValidDob) {
        this.setState({ dob: newDate, isDobValidated: isValidDob }, () => {
            this.profileValidation();
        });
    }

    editPhoneNumber() {
        this.setState({ showOtp: false, showLogin: false, otp: null });
        document.getElementById('otpMob').focus();
    }

    addUserProfile() {
        //new logic
        if (!this.state.name.match(/^[a-zA-Z ]+$/)) {
            setTimeout(() => {
                if (!this.state.name) {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please enter patient's name." });
                } else {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Name should only contain alphabets." });
                }
            }, 500);
            return;
        }

        if (this.state.gender == '') {
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Select The Gender" });
            }, 500);
            return;
        }

        if (this.state.email == '') {
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Your Email Id" });
            }, 500);
            return;
        }

        if (!this.state.email.match(/\S+@\S+\.\S+/)) {
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Email Id" });
            }, 500);
            return;
        }

        if (this.state.dob == '' || this.state.dob == null) {
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Date of Birth" });
            }, 500);
            return;
        }

        if (this.state.dob != null && !this.state.isDobValidated) {
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Date of Birth" });
            }, 500);
            return;
        }

        this.props.profileDataCompleted(this.state);
        this.props.createProfile(this.state, (err, res) => {
            this.props.getUserProfile().then(() => {

                if (this.props.is_lab) {
                    this.props.checkPrescription();
                    this.props.clearTestForInsured();
                }
                this.props.getDataAfterLogin();
                if (this.props.is_opd) {
                    this.props.sendEmailNotification();
                }
            });
            this.setState({ dob: null, email: null });
        });
    }

    resendOtpCountDown() {
        let self = this;
        var timeLeft = 30;
        var timerId = setInterval(countdown, 1000);
        let timeElm = document.getElementById('timeElm');
        function countdown() {
            if (timeLeft == 0) {
                if (timeElm) {
                    timeElm.innerHTML = '';
                }
                self.setState({ otpTimeout: true });
                clearTimeout(timerId);
            } else {
                if (timeElm) {
                    if (timeLeft < 10) {
                        timeElm.innerHTML = '00:' + '0' + timeLeft;
                    } else {
                        timeElm.innerHTML = '00:' + timeLeft;
                    }
                }
                timeLeft--;
            }
        }
    }

    render() {
        const parsed = queryString.parse(this.props.location.search);
        return _react2.default.createElement(
            'div',
            { className: `widget mrb-15 ${this.props.profileError ? 'rnd-error-nm' : ''}` },
            !this.props.patient ? _react2.default.createElement(
                'div',
                { className: 'widget-content' },
                !_storage2.default.checkAuth() && !this.props.patient ? _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'otp-heading' },
                        _react2.default.createElement(
                            'h4',
                            { className: 'title d-flex mb-0' },
                            'Please enter your mobile number to proceed'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'otp-sub-heading' },
                            'Appointment details will be sent to this number'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'otp-container' },
                        _react2.default.createElement(
                            'form',
                            null,
                            ' ',
                            _react2.default.createElement(
                                'div',
                                { className: 'labelWrap' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'p-relative' },
                                    _react2.default.createElement('input', { type: 'number', required: true, id: 'otpMob', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this.handleContinuePress.bind(this), onBlur: this.profileValidation.bind(this), className: this.state.showOtp ? 'click-disable' : '' }),
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'otpMob' },
                                        'Mobile number'
                                    ),
                                    this.state.showOtp ? _react2.default.createElement(
                                        'button',
                                        { className: 'otp-edit', onClick: e => {
                                                e.preventDefault();this.editPhoneNumber();
                                            } },
                                        'Edit'
                                    ) : ''
                                )
                            ),
                            this.state.showOtp ? _react2.default.createElement(
                                'div',
                                { className: 'labelWrap' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'p-relative' },
                                    _react2.default.createElement('input', { type: 'number', required: true, id: 'otpNumber', autoComplete: 'off', onKeyPress: this.handleOtpContinuePress.bind(this), onChange: this.inputHandler.bind(this), name: 'otp', value: this.state.otp }),
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'otpNumber' },
                                        'Enter 6 digit OTP'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'otp-edit' },
                                        this.state.enableOtpRequest ? '' : _react2.default.createElement(
                                            _react2.default.Fragment,
                                            null,
                                            _react2.default.createElement(
                                                'p',
                                                { className: ` ${this.state.otpTimeout ? 'otp-rsnd-active' : 'otp-rsnd click-disable'}`, onClick: e => {
                                                        e.preventDefault();this.verify(true, this.state.smsBtnType ? true : false, !this.state.smsBtnType ? true : false);
                                                    } },
                                                'Resend'
                                            ),
                                            _react2.default.createElement('span', { className: 'otp-timer', id: 'timeElm' })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: `get-otp ${this.state.otpTimeout ? 'otp-rsnd-active' : 'otp-rsnd click-disable'}`, onClick: e => {
                                            e.preventDefault();this.verify(true, this.state.smsBtnType ? false : true, !this.state.smsBtnType ? false : true);
                                        } },
                                    ' ',
                                    this.state.smsBtnType ? 'Get OTP on Whatsapp' : 'Get OTP on SMS'
                                )
                            ) : "",
                            _react2.default.createElement(
                                'div',
                                { className: `input-booking-smswhts d-flex align-flex-sp-bt  single-btn ${this.state.showLogin ? 'otpLogin' : ''}` },
                                this.state.showLogin ? _react2.default.createElement(
                                    'button',
                                    { className: 'otp-login-btn', onClick: e => {
                                            e.preventDefault();this.submitOTPRequest();
                                        } },
                                    'Login'
                                ) : _react2.default.createElement(
                                    _react2.default.Fragment,
                                    null,
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'input-sms-ver mr-0', onClick: e => {
                                                e.preventDefault();this.verify(false, true, false);
                                            } },
                                        _react2.default.createElement('img', { className: 'sms-ico', src: '/assets/img/smsicon.svg', style: { marginRight: '5px' } }),
                                        'Get OTP on SMS'
                                    )
                                )
                            )
                        )
                    )
                ) : _storage2.default.checkAuth() && !this.props.patient ? _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'otp-heading' },
                        _react2.default.createElement(
                            'h4',
                            { className: 'title d-flex' },
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('img', { style: { width: '20px', marginRight: '8px' }, src: "/assets" + "/img/nw-usr.svg" })
                            ),
                            'Patient Details'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'otp-container' },
                        _react2.default.createElement(
                            'form',
                            null,
                            ' ',
                            _react2.default.createElement(
                                'div',
                                { className: 'labelWrap' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'p-relative' },
                                    _react2.default.createElement('input', { type: 'number', id: 'otpMobver', className: 'click-disable', value: this.props.user_loggedIn_number ? this.props.user_loggedIn_number : this.state.phoneNumber ? this.state.phoneNumber : '', autoComplete: 'off' }),
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'otpMobver' },
                                        'Mobile number'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'num-verified' },
                                        _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/chk-green.svg' }),
                                        ' Verified'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'd-flex' },
                                _react2.default.createElement(
                                    'p',
                                    { className: `label-names-buttons ${this.state.gender == 'm' ? 'btn-active' : ''}`, name: 'gender', checked: this.state.gender == 'm', onClick: () => this.setState({ 'gender': 'm' }), onBlur: this.profileValidation.bind(this) },
                                    'Male'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: `label-names-buttons ${this.state.gender == 'f' ? 'btn-active' : ''}`, name: 'gender', checked: this.state.gender == 'f', onClick: () => this.setState({ 'gender': 'f' }), onBlur: this.profileValidation.bind(this) },
                                    'Female'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'labelWrap' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'p-relative' },
                                    _react2.default.createElement('input', { type: 'text', required: true, id: 'ptntName', name: 'name', value: this.state.name, onChange: this.inputHandler.bind(this), onBlur: this.profileValidation.bind(this), placeholder: '', autoComplete: 'off' }),
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'ptntName' },
                                        'Name'
                                    )
                                )
                            ),
                            _react2.default.createElement(_newDateSelector2.default, _extends({}, this.props, { getNewDate: this.getNewDate.bind(this), is_dob_error: this.state.is_dob_error, old_dob: this.state.dob, is_summary: false })),
                            _react2.default.createElement(
                                'div',
                                { className: 'labelWrap' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'p-relative' },
                                    _react2.default.createElement('input', { type: 'text', required: true, id: 'ptntEmail', name: 'email', value: this.state.email, onChange: this.inputHandler.bind(this), onBlur: this.profileValidation.bind(this), placeholder: '', autoComplete: 'off' }),
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'ptntEmail' },
                                        'Email'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'text-center' },
                                _react2.default.createElement(
                                    'button',
                                    { type: 'button', className: 'ptnt-dtls-cnfrm', onClick: e => {
                                            e.preventDefault();this.addUserProfile();
                                        } },
                                    'Confirm'
                                )
                            )
                        )
                    )
                ) : ''
            ) : _react2.default.createElement(
                'div',
                { className: 'widget-content' },
                _react2.default.createElement(
                    'div',
                    { className: 'lab-visit-time d-flex jc-spaceb' },
                    _react2.default.createElement(
                        'div',
                        { className: 'd-flex flex-1', style: { flexDirection: 'column', paddingRight: 15 } },
                        _react2.default.createElement(
                            'h4',
                            { className: 'title d-flex' },
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('img', { style: { width: '20px', marginRight: '8px' }, src: "/assets" + "/img/nw-usr.svg" })
                            ),
                            'Patient'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mbl-view-formatting text-right' },
                        _react2.default.createElement(
                            'h4',
                            { className: 'date-time title', style: { textTransform: 'capitalize' } },
                            this.props.patient ? this.props.patient.name : "",
                            ' '
                        )
                    )
                ),
                (this.props.is_opd || this.props.is_lab) && (!this.props.patient.email || !this.props.patient.dob) ? _react2.default.createElement(
                    'div',
                    { className: 'otp-container' },
                    _react2.default.createElement(
                        'form',
                        null,
                        !this.props.patient.dob ? _react2.default.createElement(_newDateSelector2.default, _extends({}, this.props, { getNewDate: this.getNewDate.bind(this), is_dob_error: this.state.is_dob_error, old_dob: this.state.dob, is_summary: false })) : ""
                    )
                ) : '',
                _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    this.state.dob || this.state.email ? _react2.default.createElement(
                        'div',
                        { className: 'text-right' },
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'text-primary fw-700 text-sm', onClick: this.profileDobValidation.bind(this) },
                            'Update'
                        )
                    ) : parsed && parsed.cod_to_prepaid == 'true' ? '' : _react2.default.createElement(
                        'div',
                        { className: 'text-right' },
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.props.navigateTo('patient', this.props.is_insurance_applicable);
                                }, className: 'text-primary fw-700 text-sm' },
                            this.props.patient ? "Change Patient" : "Select Patient"
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: '' },
                        this.props.show_insurance_error && this.props.insurance_error_msg ? _react2.default.createElement(
                            'p',
                            { className: 'gyn-text' },
                            this.props.insurance_error_msg
                        ) : ''
                    )
                )
            ),
            // old logic
            this.props.patient ? _react2.default.createElement('div', { className: 'd-none' }) : _react2.default.createElement('div', { className: 'd-none' })
        );
    }
}

exports.default = ChoosePatientNewView;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9XaGF0c0FwcE9wdGluL1doYXRzQXBwT3B0aW5WaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvcGF5bWVudEZvcm0vUGF5bWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9wYXltZW50Rm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZ1N1bW1hcnkvQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9sZW5zZml0UG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3BhdGllbnREZXRhaWxzL1ZpcEdvbGRQYWNrYWdlLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9wYXRpZW50RGV0YWlscy9ib29raW5nRXJyb3JQb3BVcC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvY2hvb3NlUGF0aWVudE5ldy5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIldoYXRzQXBwT3B0aW5WaWV3Iiwic3RhdGUiLCJ3aGF0c2FwcF9vcHRpbl9WaWV3Iiwic2hvdWxkUmVuZGVyIiwicHJvZmlsZXMiLCJ3aGF0c2FwcF9vcHRpbiIsImlzQXBwb2ludG1lbnQiLCJ3aGF0c2FwcF9pc19kZWNsaW5lZCIsImlzVXNlclByb2ZpbGUiLCJ0b2dnbGVXaGF0c2FwIiwic3RhdHVzIiwiZSIsInByb2ZpbGVEYXRhIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImVkaXRVc2VyUHJvZmlsZSIsImlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0U3RhdGUiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiQVNTRVRTX0JBU0VfVVJMIiwiYmluZCIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiUGF5bWVudEZvcm0iLCJyZWZzIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRQYXltZW50Tm9kZU5hbWUiLCJuYW1lIiwiaW5kZXgiLCJwYXltZW50RGF0YSIsIkNPTkZJRyIsIlBHX01VTFRJX09SREVSX1VSTCIsIlBHX1VSTCIsImRpc3BsYXkiLCJtYXAiLCJpdGVtIiwiaSIsIkJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCIsImlzX2dvbGQiLCJwcmljZUNvbmZpcm1hdGlvblBvcHVwIiwicGF0aE5hbWUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoUGFyYW0iLCJzZWFyY2giLCJjYWxsQmFja1VybCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGlzdG9yeSIsInB1c2giLCJjbG9zZUxlbnNGaXRQb3B1cCIsImFwcGx5TGVuc0ZpdENvdXBvbnMiLCJpc09QRCIsImRlYWxfcHJpY2UiLCJsZW5zZml0X2NvdXBvbnMiLCJWaXBHb2xkUGFja2FnZVByaWNlVmlldyIsIlB1cmVDb21wb25lbnQiLCJ0b2dnbGVHb2xkUHJpY2VQb3B1cCIsInZpcEdvbGRQbGFucyIsImxlbmd0aCIsInZhbHVlIiwia2V5Iiwic2VsZWN0ZWRfdmlwX3BsYW4iLCJ0b2dnbGVHb2xkUGxhbnMiLCJ0b3RhbF9hbGxvd2VkX21lbWJlcnMiLCJwYXJzZUludCIsInRlbnVyZSIsImlzX3NlbGVjdGVkIiwibXJwIiwiZ29Ub0dvbGRQYWdlIiwiQm9va2luZ0Vycm9yIiwid2lkdGgiLCJjbG9zZUVycm9yUG9wdXAiLCJtZXNzYWdlIiwibW9tZW50IiwicmVxdWlyZSIsInF1ZXJ5U3RyaW5nIiwiQ2hvb3NlUGF0aWVudE5ld1ZpZXciLCJzaG93T3RwIiwib3RwVmVyaWZ5U3VjY2VzcyIsInBob25lTnVtYmVyIiwidXNlcl9sb2dnZWRJbl9udW1iZXIiLCJnZW5kZXIiLCJlbWFpbCIsInNtc0J0blR5cGUiLCJpc0VtYWlsTm90VmFsaWQiLCJpc1BvcHVwRGF0YUZpbGxlZCIsImVuYWJsZU90cFJlcXVlc3QiLCJkb2IiLCJmb3JtYXR0ZWREYXRlIiwiZGF0ZU1vZGFsIiwiaXNEb2JOb3RWYWxpZCIsImlzTmV3UGF0aWVudCIsImlzX2RvYl9lcnJvciIsImlzRG9iVmFsaWRhdGVkIiwib3RwIiwic2hvd0xvZ2luIiwiYXNrVXNlckRldGFpbHMiLCJvdHBUaW1lb3V0IiwicGF0aWVudCIsInNhdmVkX3BhdGllbnRfZGV0YWlscyIsIk9iamVjdCIsImtleXMiLCJwcm9maWxlVmFsaWRhdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwiZG9jdG9yU3VtbWFyeVBhZ2UiLCJpcGRQb3B1cERhdGEiLCJwb3B1cDEiLCJkb2N0b3IiLCJzZWxlY3RlZERvY3RvciIsImZpcnN0X25hbWUiLCJwaG9uZV9udW1iZXIiLCJzaG93VmVyaWZ5IiwiaW5wdXRIYW5kbGVyIiwidGFyZ2V0IiwiaGFuZGxlQ29udGludWVQcmVzcyIsInZlcmlmeSIsImhhbmRsZU90cENvbnRpbnVlUHJlc3MiLCJzdWJtaXRPVFBSZXF1ZXN0IiwibnVtYmVyIiwic2VsZiIsImV4dHJhUGFyYW1zRGF0YSIsInN1bW1hcnlQYWdlIiwic3VibWl0T1RQIiwicmVzcG9uc2UiLCJ0b2tlbiIsInByb2ZpbGVEYXRhQ29tcGxldGVkIiwidXNlcl9leGlzdHMiLCJnZXRVc2VyUHJvZmlsZSIsInRoZW4iLCJpc19sYWIiLCJjaGVja1ByZXNjcmlwdGlvbiIsImNsZWFyVGVzdEZvckluc3VyZWQiLCJnZXREYXRhQWZ0ZXJMb2dpbiIsImlzX29wZCIsInNlbmRFbWFpbE5vdGlmaWNhdGlvbiIsInByb2ZpbGVFbWFpbFZhbGlkYXRpb24iLCJtYXRjaCIsInNldFRpbWVvdXQiLCJwcm9maWxlRG9iVmFsaWRhdGlvbiIsImVyciIsInJlcyIsInNlbGVjdERhdGVGcm9tQ2FsZW5kYXIiLCJkYXRlIiwidG9EYXRlIiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiZGQiLCJnZXREYXRlIiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInRvZGF5Iiwib3BlbkNhbGVuZGFyIiwicmVzZW5kRmxhZyIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwidmFsaWRhdGlvbkVycm9yIiwiYW5hbHl0aWNEYXRhIiwibm9uSXBkTGVhZHMiLCJzZW5kT1RQIiwiZXJyb3IiLCJyZXNlbmRPdHBDb3VudERvd24iLCJnZXROZXdEYXRlIiwidHlwZSIsIm5ld0RhdGUiLCJpc1ZhbGlkRG9iIiwiZWRpdFBob25lTnVtYmVyIiwiYWRkVXNlclByb2ZpbGUiLCJjcmVhdGVQcm9maWxlIiwidGltZUxlZnQiLCJ0aW1lcklkIiwic2V0SW50ZXJ2YWwiLCJjb3VudGRvd24iLCJ0aW1lRWxtIiwiaW5uZXJIVE1MIiwiY2xlYXJUaW1lb3V0IiwicGFyc2VkIiwicGFyc2UiLCJwcm9maWxlRXJyb3IiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwibWFyZ2luUmlnaHQiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZ1JpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImNvZF90b19wcmVwYWlkIiwibmF2aWdhdGVUbyIsImlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIiwic2hvd19pbnN1cmFuY2VfZXJyb3IiLCJpbnN1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QTdEO0FBQUE7QUFBQTtBQURKLHFCQURILEdBSU1vSyxVQUFVQSxPQUFPUyxjQUFQLElBQXlCLE1BQXBDLEdBQThDLEVBQTlDLEdBQ0U7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBRyxNQUFLLEdBQVIsRUFBWSxTQUFVL0wsQ0FBRCxJQUFPO0FBQ3hCQSxzQ0FBRTZDLGNBQUY7QUFDQTdDLHNDQUFFOEMsZUFBRjtBQUNBLHlDQUFLN0QsS0FBTCxDQUFXK00sVUFBWCxDQUFzQixTQUF0QixFQUFpQyxLQUFLL00sS0FBTCxDQUFXZ04sdUJBQTVDO0FBQ0gsaUNBSkQsRUFJRyxXQUFVLDZCQUpiO0FBSTRDLGlDQUFLaE4sS0FBTCxDQUFXaUgsT0FBWCxHQUFxQixnQkFBckIsR0FBd0M7QUFKcEY7QUFESixxQkFOWjtBQWNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLEVBQWY7QUFDSyw2QkFBS2pILEtBQUwsQ0FBV2lOLG9CQUFYLElBQW1DLEtBQUtqTixLQUFMLENBQVdrTixtQkFBOUMsR0FDRztBQUFBO0FBQUEsOEJBQUcsV0FBVSxVQUFiO0FBQXlCLGlDQUFLbE4sS0FBTCxDQUFXa047QUFBcEMseUJBREgsR0FFSztBQUhWO0FBZEo7QUE5QkgsYUExR0w7QUErSk07QUFDRSxpQkFBS2xOLEtBQUwsQ0FBV2lILE9BQVgsR0FDSSx1Q0FBSyxXQUFVLFFBQWYsR0FESixHQWlHSSx1Q0FBSyxXQUFVLFFBQWY7QUFqUVosU0FESjtBQW1WSDtBQTV3QjhDOztrQkFneEJwQ3RCLG9CIiwiZmlsZSI6IjEzLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBXaGF0c0FwcE9wdGluVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdoYXRzYXBwX29wdGluX1ZpZXc6dHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkUmVuZGVyKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMucHJvZmlsZXMpe1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXMud2hhdHNhcHBfb3B0aW4gIT1udWxsKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmlzQXBwb2ludG1lbnQgJiYgIXRoaXMucHJvcHMucHJvZmlsZXMud2hhdHNhcHBfb3B0aW4gJiYgIXRoaXMucHJvcHMucHJvZmlsZXMud2hhdHNhcHBfaXNfZGVjbGluZWQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLmlzVXNlclByb2ZpbGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSAgICBcbiAgICB9XG5cbiAgICB0b2dnbGVXaGF0c2FwKHN0YXR1cyxlKSB7ICAgICAgIFxuICAgICAgICBpZih0aGlzLnByb3BzLmlzQXBwb2ludG1lbnQpeyAgICAgIFxuICAgICAgICAgICAgbGV0IHByb2ZpbGVEYXRhID0gey4uLnRoaXMucHJvcHMucHJvZmlsZXN9XG4gICAgICAgICAgICBpZihzdGF0dXMpe1xuICAgICAgICAgICAgICAgIHByb2ZpbGVEYXRhLndoYXRzYXBwX29wdGluID0gdHJ1ZVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJZb3Ugd2hhdHNBcHAgbm90aWZpY2F0aW9ucyBoYXMgYmVlbiBlbmFibGVkLlwifSkgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHByb2ZpbGVEYXRhLndoYXRzYXBwX2lzX2RlY2xpbmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJ5b3VyIHdoYXRzQXBwIG5vdGlmaWNhdGlvbnMgaGFzIGJlZW4gZGlzYWJsZWQuXCJ9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5lZGl0VXNlclByb2ZpbGUocHJvZmlsZURhdGEsIHByb2ZpbGVEYXRhLmlkICwoKT0+e1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3doYXRzYXBwQ2FyZENvbnRhaW5lcicpWzBdLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aGF0c2FwcF9vcHRpbl9WaWV3OiBzdGF0dXMgfSwoKSA9PntcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1doYXRzYXB0b2dnbGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnV2hhdHNhcC10b2dnbGVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlV2hhdHNhcChzdGF0dXMpICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkUmVuZGVyKCkpXG4gICAgICAgICAgICByZXR1cm4gKDxkaXY+PC9kaXY+KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuaXNBcHBvaW50bWVudD9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXRzYXBwQ2FyZENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhLWxvZ28tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhLWxvZ28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lIHdvdWxkIGxpa2UgdG8gc2VuZCB5b3UgdXBkYXRlcyB0aHJvdWdoIHdoYXRzYXBwPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGxvd0RlY2xpbmVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFsbG93QnRuc1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMsdHJ1ZSl9PkFsbG93PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVjbGluZUJ0bnNcIiBzdHlsZT17e2NvbG9yOicjNzU3NTc1J319b25DbGljaz17dGhpcy50b2dnbGVXaGF0c2FwLmJpbmQodGhpcyxmYWxzZSl9PkRlY2xpbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6ICcxNHB4JyB9fT5FbmFibGUgPHNwYW4gY2xhc3NOYW1lPVwic20td3RzcC1pbWdcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhLWxvZ28tc20ucG5nXCJ9IC8+V2hhdHNBcHA8L3NwYW4+IG5vdGlmaWNhdGlvbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy50b2dnbGVXaGF0c2FwLmJpbmQodGhpcywhdGhpcy5zdGF0ZS53aGF0c2FwcF9vcHRpbl9WaWV3KX0gY2hlY2tlZD17dGhpcy5zdGF0ZS53aGF0c2FwcF9vcHRpbl9WaWV3fSAvPjxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgV2hhdHNBcHBPcHRpblZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cblxuY2xhc3MgUGF5bWVudEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2VuZEV2ZW50KCkge1xuICAgICAgICBsZXQgcmVmcyA9IHRoaXMucHJvcHMucmVmc1xuICAgICAgICBpZiAocmVmcykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb250aW51ZUNsaWNrZWQnLCAncGFnZVNvdXJjZSc6IHJlZnMsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb250aW51ZUNsaWNrZWQnLCAncGFnZVNvdXJjZSc6ICdVTktOT1dOJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29udGludWUtY2xpY2tlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZW5kRXZlbnQoKVxuICAgIH1cblxuICAgIGdldFBheW1lbnROb2RlTmFtZShuYW1lLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gYCR7bmFtZX1bJHtpbmRleH1dYFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBsZXQgZGF0YSA9IHsgXCJwYXltZW50TW9kZVwiOiBcIkNDXCIsIFwicmVzcG9uc2VDb2RlXCI6IFwiMjI3XCIsIFwiYmFua1R4SWRcIjogXCJcIiwgXCJ0eERhdGVcIjogXCJKdW4gNCwgMjAxOCAxMjoxMDoyMyBQTVwiLCBcImJhbmtOYW1lXCI6IFwiU0JJXCIsIFwic3RhdHVzTXNnXCI6IFwiT29wcyBhbiBlcnJvciBvY2N1cnJlZC4gV2Ugd2lsbCBnZXQgYmFjayB0byB5b3UhXCIsIFwiY3VycmVuY3lcIjogXCJJTlJcIiwgXCJzdGF0dXNDb2RlXCI6IDEsIFwicGdHYXRld2F5TmFtZVwiOiBcIk1PQ0tcIiwgXCJyZXNwb25zZU1lc3NhZ2VcIjogXCJZb3VyIHBheW1lbnQgaGFzIGJlZW4gZGVjbGluZWQgYnkgeW91ciBiYW5rLiBQbGVhc2UgY29udGFjdCB5b3VyIGJhbmsgZm9yIGFueSBxdWVyaWVzLiBJZiBtb25leSBoYXMgYmVlbiBkZWR1Y3RlZCBmcm9tIHlvdXIgYWNjb3VudCwgeW91ciBiYW5rIHdpbGwgaW5mb3JtIHVzIHdpdGhpbiA0OCBocnMgYW5kIHdlIHdpbGwgcmVmdW5kIHRoZSBzYW1lXCIsIFwidHhTdGF0dXNcIjogXCJUWE5fRkFJTFVSRVwiLCBcImN1c3RvbWVySWRcIjogNTEsIFwib3JkZXJOb1wiOiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ10sIFwic3RhdHVzU2hvcnRNc2dcIjogXCJPdGhlcnNcIiwgXCJlbWFpbFwiOiBcImR1bW15X2FwcG9pbnRtZW50QHBvbGljeWJhemFhci5jb21cIiwgXCJwYkdhdGV3YXlOYW1lXCI6IFwicGF5dG1cIiwgXCJtb2JpbGVcIjogXCI5OTk5OTk5OTk3XCIsIHByb2R1Y3RJZDogdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncHJvZHVjdElkJ10gfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZlcmVuY2VJZCddKSB7XG4gICAgICAgIC8vICAgICBkYXRhWydyZWZlcmVuY2VJZCddID0gdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gZGF0YVsncGdUeElkJ10gPSB0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ11cbiAgICAgICAgLy8gZGF0YSA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInBheW1lbnRGb3JtXCIgcmVmPVwicGF5bWVudEZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPXt0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2lzX3NpbmdsZV9mbG93J10/Q09ORklHLlBHX01VTFRJX09SREVSX1VSTDpDT05GSUcuUEdfVVJMfSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2lzX3NpbmdsZV9mbG93J10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpdGVtcyddLm1hcCgoaXRlbSwgaSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ25hbWUnLCBpKX0gaWQ9e2l0ZW1bJ25hbWUnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWyduYW1lJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ3Byb2R1Y3RJZCcsIGkpfSBpZD17aXRlbVsncHJvZHVjdElkJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsncHJvZHVjdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ3R4QW1vdW50JywgaSl9IGlkPXtpdGVtWyd0eEFtb3VudCddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ3R4QW1vdW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ29yZGVySWQnLCBpKX0gaWQ9e2l0ZW1bJ29yZGVySWQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydvcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ2hvbGRQYXltZW50JywgaSl9ICBpZD17aXRlbVsnaG9sZFBheW1lbnQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydob2xkUGF5bWVudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSAmJiBpdGVtWydpbnN1cmVyQ29kZSddP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgnaW5zdXJlckNvZGUnLCBpKX0gaWQ9e2l0ZW1bJ2luc3VyZXJDb2RlJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsnaW5zdXJlckNvZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6PFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWyduYW1lJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2R1Y3RJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncHJvZHVjdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR4QW1vdW50XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWyd0eEFtb3VudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJvcmRlcklkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImhvbGRQYXltZW50XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydob2xkUGF5bWVudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpbnN1cmVyQ29kZSddP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5zdXJlckNvZGVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2luc3VyZXJDb2RlJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjdXN0SWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2N1c3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibW9iaWxlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydtb2JpbGUnXX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2VtYWlsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdXJsXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydzdXJsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmdXJsXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydmdXJsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZWZlcmVuY2VJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaGFzaFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaGFzaCddfSAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlzUHJlQXV0aFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaXNQcmVBdXRoJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGF5dG1Nc2cnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXl0bU1zZ1wiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGF5dG1Nc2cnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY291cG9uQ29kZSddID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291cG9uQ29kZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY291cG9uQ29kZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaXNjb3VudGVkQW1udFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnZGlzY291bnRlZEFtbnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291cG9uUGdNb2RlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydjb3Vwb25QZ01vZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVySWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZWZPcmRlcklkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZPcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmT3JkZXJObyddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlZk9yZGVyTm9cIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVyTm8nXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydwYXJlbnRQcm9kdWN0SWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXJlbnRQcm9kdWN0SWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3BhcmVudFByb2R1Y3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG5cbiAgICAgICAgICAgICAgICB7LyogPGZvcm0gaWQ9XCJwYXltZW50Rm9ybVwiIHJlZj1cInBheW1lbnRGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj17YCR7Q09ORklHLkFQSV9CQVNFX1VSTH0vYXBpL3YxL3VzZXIvdHJhbnNhY3Rpb24vc2F2ZWB9IHN0eWxlPXt7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicmVzcG9uc2VcIiBkZWZhdWx0VmFsdWU9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPiAqL31cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRGb3JtXG4iLCJpbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi9QYXltZW50Rm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudEZvcm0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAgdmlwLXNyY2gtcG9wLW1pblwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj57dGhpcy5wcm9wcy5pc19nb2xkPydDb25maXJtIGRlbGV0ZSBtZW1iZXI/JzonRG8geW91IHdpc2ggdG8gY29udGludWU/J308L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtYnRuLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCB0cnVlKX0+WWVzPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsIGZhbHNlKX0+Tm88L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0LyoodGhpcy5wcm9wcy5pc192aXBfYXBwbGljYWJsZSB8fCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKSB8fCB0aGlzLnByb3BzLmlzQ2FydCB8fCB0aGlzLnByb3BzLmlzTGFiP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkaWluZy1zcmNoLWVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1ydC0yMCB0ZXh0LWNlbnRlciBmdy01MDBcIj5XZSBhcmUgcmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtRWFzeSB3ZWJzaXRlIGluIDMgc2Vjb25kcy4uLjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWNvbmVudFwiPkRvIHlvdSB3aXNoIHRvIGNvbnRpbnVlPzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCB0cnVlKX0+WWVzPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgZmFsc2UpfT5ObzwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpcC1iYW5uZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlwLWJhbm5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHZwLWNscy1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1wb3AtY2xzLnN2Zyd9IG9uQ2xpY2s9e3RoaXMucHJvcHMuYmFubmVyQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLGZhbHNlKX0vPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHZwLWJuci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1pbWctcG9wLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3AtYm5yLXR4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidnAtYm5yLWtub3ctdHh0XCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Jvb2tpbmdQYWdlVmlwQmFubmVyQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdib29raW5ncGFnZS12aXAtY2xpY2snXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgXHR9XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgXHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1jbHViLWRldGFpbHM/c291cmNlPWJvb2tpbmdwYWdlJmxlYWRfc291cmNlPWJvb2tpbmdwYWdlJykgfX0+S25vdyBtb3JlIGFib3V0IERvY3ByaW1lIFZJUDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInZwLWJuci1zdWItdHh0XCIgb25DbGljaz17dGhpcy5wcm9wcy5iYW5uZXJDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsdHJ1ZSl9Pk5vdCBJbnRlcmVzdGVkPyBDb250aW51ZSBCb29raW5nIDxpbWcgc3R5bGU9e3t3aWR0aDonN3B4J319IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLXJnaHQuc3ZnJ30gLz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+Ki9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIEJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcGF0aE5hbWUgPSB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lXG5cdFx0bGV0IHNlYXJjaFBhcmFtID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2hcblx0XHRsZXQgY2FsbEJhY2tVcmwgPSBwYXRoTmFtZSArIHNlYXJjaFBhcmFtXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXlcIiA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG5zdC1maXQtcG9wLWJnXCI+XG5cdFx0XHRcdFx0XHRcdDxwPkdldCBhIEZyZWUgRXlld2VhciB3aXRoIDxiciAvPnRoaXMgYXBwb2ludG1lbnQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnktbGFuc2ZpdFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPmJ5PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwibG5zZml0LXBvcC1pY29cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sZW5zaWNvLnBuZ1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsbnN0LWZpdC1zdWItcG9wXCI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxucy1wYXJhLW1uXCI+4oCcRlJFRSBQQUlSIE9GIEVZRSBHTEFTU0VTIDxici8+KEZyYW1lICsgTGVucykgb3IgU3VuZ2xhc3NlczwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG5zZnQtY3BuXCI+VXNlIENvdXBvbjogTEVOU0ZJVDwvcD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG5zLWtub3dcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMZW5zRml0S25vd01vcmUnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsZW5zZml0LWtub3dtb3JlLWNsaWNrZWQnXG5cdFx0XHRcdFx0ICAgICAgICAgICAgfVxuXG5cdFx0XHRcdFx0ICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xlbnNmaXQtdG5jP2NhbGxiYWNrdXJsPScrY2FsbEJhY2tVcmwrJyZpc0xlbnNmaXRTcGVjaWZpYz10cnVlJylcblx0XHRcdFx0XHRcdFx0XHR9fT5Lbm93IG1vcmU8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG5zZml0LWJ0bi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTGVuc0ZpdFBvcHVwLmJpbmQodGhpcyl9PkkgRG9u4oCZdCB3YW50PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5hcHBseUxlbnNGaXRDb3Vwb25zLmJpbmQodGhpcyx0aGlzLnByb3BzLmlzT1BEP3RoaXMucHJvcHMuZGVhbF9wcmljZTowLHRoaXMucHJvcHMubGVuc2ZpdF9jb3Vwb25zKX0+QXBwbHkgTEVOU0ZJVDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj4pXG5cdFxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCAgICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIFZpcEdvbGRQYWNrYWdlUHJpY2VWaWV3IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4XCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0dGhpcy5wcm9wcy50b2dnbGVHb2xkUHJpY2VQb3B1cCgpXG5cdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgcC0xMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImlwZC1wb3AtaWxkXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy50b2dnbGVHb2xkUHJpY2VQb3B1cCgpXG5cdFx0XHRcdFx0XHRcdH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvY2xvc2UucG5nXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImdvbGQtcG9wLWhkbmdcIj5TZWxlY3QgUGxhbjwvaDQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdvbGQtb2ZmZXItY29udCBnb2xkLXBvcC1wYWRpbmdcIj5cblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImdvbGQtb2ZyLWhkbmdcIj5MSU1JVEVEIFBFUklPRCBPRkZFUjwvaDQ+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1saXN0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmlwR29sZFBsYW5zICYmIHRoaXMucHJvcHMudmlwR29sZFBsYW5zLmxlbmd0aCA+IDAgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZpcEdvbGRQbGFucy5tYXAoKHZhbHVlLCBrZXkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPXtgZ29sZC1vZnItbGlzaW5nIGFkZHBkbmctcG9wdXAgJHt2YWx1ZS5pZCA9PSAodGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkKSA/ICdnb2xkLXNlbGVjdCcgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnRvZ2dsZUdvbGRQbGFucyh2YWx1ZSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnb2xkLW1udGhwbGFuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1udGgtcGxhbi1nbGRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDb3ZlcmFnZToge3ZhbHVlLnRvdGFsX2FsbG93ZWRfbWVtYmVyc30ge3BhcnNlSW50KHZhbHVlLnRvdGFsX2FsbG93ZWRfbWVtYmVycykgPiAxID8gJ01lbWJlcnMnIDogJ01lbWJlcid9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZ2xkLWN2ci10eHRcIj5WYWxpZCBmb3Ige3ZhbHVlLnRlbnVyZX0gTW9udGhzIHt2YWx1ZS5pc19zZWxlY3RlZCA/IDxzcGFuPlBPUFVMQVI8L3NwYW4+IDogJyd9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdvbGQtcHJpY2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZ2xkLXByY1wiPjxzcGFuIGNsYXNzTmFtZT1cImdvbGQtcHJjLWN1dFwiPuKCuXt2YWx1ZS5tcnB9PC9zcGFuPiDigrl7dmFsdWUuZGVhbF9wcmljZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1wbG4tc2xjdC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2QtcmRpby1ncmF5XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJnZC1yZGlvLWNoa1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLWNoay5zdmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnfVxuXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRmYWxzZSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YSkubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLmlzX3ZpcF9nb2xkICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QgJiYgdGhpcy5wcm9wcy52aXBDbHViTGlzdC5nb2xkX3BsYW5zICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QuZ29sZF9wbGFucy5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbl9kYXRhLnNob3dfY29uc3VsdGF0aW9uX3RleHQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZ2xkLWxzdC1mb290LXR4dFwiPkluY2x1ZGVzIFVubGltaXRlZCBPbmxpbmUgQ29uc3VsdGF0aW9uIDxzcGFuPihHZW5lcmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGh5c2ljaWFuKTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZ29sLXBvcC1jdXN0b20tYnRuXCIgb25DbGljaz17dGhpcy5wcm9wcy5nb1RvR29sZFBhZ2V9PlZpZXcgRGV0YWlsczwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlwR29sZFBhY2thZ2VQcmljZVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBCb29raW5nRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImVycm9yLW1zZy1wb3BcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1lcnJvclwiIHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWhlYWRcIj48aW1nIGNsYXNzTmFtZT1cImVycm9ySW5mb0ltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2luZm9lcnJvci5zdmdcIn0gLz57XCJBbGVydFwifTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gYWx0PVwiY2xvc2VcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlRXJyb3JQb3B1cH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPnt0aGlzLnByb3BzLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nRXJyb3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyJztcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBOZXdEYXRlU2VsZWN0b3IgZnJvbSAnLi4vLi4vY29tbW9ucy9uZXdEYXRlU2VsZWN0b3IuanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmNsYXNzIENob29zZVBhdGllbnROZXdWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dPdHA6IGZhbHNlLFxuICAgICAgICAgICAgb3RwVmVyaWZ5U3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiB0aGlzLnByb3BzLnVzZXJfbG9nZ2VkSW5fbnVtYmVyP3RoaXMucHJvcHMudXNlcl9sb2dnZWRJbl9udW1iZXI6JycsXG4gICAgICAgICAgICBnZW5kZXI6ICdtJyxcbiAgICAgICAgICAgIGRhdGE6IGZhbHNlLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgc21zQnRuVHlwZTogbnVsbCxcbiAgICAgICAgICAgIGlzRW1haWxOb3RWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICBpc1BvcHVwRGF0YUZpbGxlZDogZmFsc2UsXG4gICAgICAgICAgICBlbmFibGVPdHBSZXF1ZXN0OiBmYWxzZSxcbiAgICAgICAgICAgIGRvYjogbnVsbCxcbiAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6ICcnLFxuICAgICAgICAgICAgZGF0ZU1vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRG9iTm90VmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNOZXdQYXRpZW50OiBmYWxzZSxcbiAgICAgICAgICAgIGlzX2RvYl9lcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGlzRG9iVmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIG90cDpudWxsLFxuICAgICAgICAgICAgc2hvd0xvZ2luOmZhbHNlLFxuICAgICAgICAgICAgYXNrVXNlckRldGFpbHM6ZmFsc2UsXG4gICAgICAgICAgICBvdHBUaW1lb3V0OmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnBhdGllbnQpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2F2ZWRfcGF0aWVudF9kZXRhaWxzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2F2ZWRfcGF0aWVudF9kZXRhaWxzKS5sZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnByb3BzLnNhdmVkX3BhdGllbnRfZGV0YWlscywgaXNQb3B1cERhdGFGaWxsZWQ6IGZhbHNlLHNob3dMb2dpbjpmYWxzZSxvdHA6bnVsbCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZVZhbGlkYXRpb24oKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3RwTW9iJykpe1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ290cE1vYicpLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLnVzZXJfbG9nZ2VkSW5fbnVtYmVyKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bob25lTnVtYmVyOnRoaXMucHJvcHMudXNlcl9sb2dnZWRJbl9udW1iZXI/dGhpcy5wcm9wcy51c2VyX2xvZ2dlZEluX251bWJlcjonJ30pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kb2N0b3JTdW1tYXJ5UGFnZSAmJiAhbmV4dFByb3BzLnBhdGllbnQgJiYgIXRoaXMuc3RhdGUuaXNQb3B1cERhdGFGaWxsZWQgJiYgbmV4dFByb3BzLmlwZFBvcHVwRGF0YSAmJiBuZXh0UHJvcHMuaXBkUG9wdXBEYXRhWydwb3B1cDEnXSAmJiAoIXRoaXMucHJvcHMuaXBkUG9wdXBEYXRhWydwb3B1cDEnXSB8fCAodGhpcy5wcm9wcy5pcGRQb3B1cERhdGFbJ3BvcHVwMSddICYmIG5leHRQcm9wcy5pcGRQb3B1cERhdGFbJ3BvcHVwMSddLm5hbWUgIT0gdGhpcy5wcm9wcy5pcGRQb3B1cERhdGFbJ3BvcHVwMSddKSkpIHtcbiAgICAgICAgICAgIGxldCBwb3B1cDE7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBwb3B1cDEgPSBuZXh0UHJvcHMuaXBkUG9wdXBEYXRhWydwb3B1cDEnXVxuXG4gICAgICAgICAgICAgICAgaWYgKHBvcHVwMSAmJiBPYmplY3Qua2V5cyhwb3B1cDEpLmxlbmd0aCAmJiBwb3B1cDEuZG9jdG9yID09IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IHBvcHVwMSAmJiBwb3B1cDEuZmlyc3RfbmFtZSA/IHBvcHVwMS5maXJzdF9uYW1lIDogJycsIHBob25lTnVtYmVyOiBwb3B1cDEgJiYgcG9wdXAxLnBob25lX251bWJlciA/IHBvcHVwMS5waG9uZV9udW1iZXIgOiAnJywgZ2VuZGVyOiBwb3B1cDEgJiYgcG9wdXAxLmdlbmRlciA/IHBvcHVwMS5nZW5kZXIgOiAnJywgc2hvd1ZlcmlmeTogcG9wdXAxICYmIHBvcHVwMS5waG9uZV9udW1iZXIubGVuZ3RoID09IDEwP3RydWU6ZmFsc2UsIGlzUG9wdXBEYXRhRmlsbGVkOiB0cnVlLCBzaG93TG9naW46ZmFsc2Usb3RwOm51bGwgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlVmFsaWRhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gJ3Bob25lTnVtYmVyJykge1xuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUubGVuZ3RoIDw9IDEwXG4gICAgICAgICAgICAgICAgPyBlLnRhcmdldC52YWx1ZS5sZW5ndGggPT0gMTBcbiAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsIHNob3dWZXJpZnk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IHRoaXMuc2V0U3RhdGUoeyBzaG93VmVyaWZ5OiB0cnVlIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQubmFtZSA9PSAnb3RwJykge1xuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUubGVuZ3RoIDw9IDZcbiAgICAgICAgICAgICAgICA/IGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PSA2XG4gICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNldFN0YXRlKHsgc2hvd1ZlcmlmeTogdHJ1ZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaGFuZGxlQ29udGludWVQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy52ZXJpZnkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlT3RwQ29udGludWVQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRPVFBSZXF1ZXN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdE9UUFJlcXVlc3QobnVtYmVyKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLm90cCkge1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBWYWxpZCBPdHBcIiB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBleHRyYVBhcmFtc0RhdGEgPSB7XG4gICAgICAgICAgICBzdW1tYXJ5UGFnZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuc3VibWl0T1RQKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRoaXMuc3RhdGUub3RwLCBleHRyYVBhcmFtc0RhdGEsIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnRva2VuKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMb2dpblN1Y2Nlc3MnLCAncGFnZVNvdXJjZSc6ICdCb29raW5nUGFnZScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xvZ2luLXN1Y2Nlc3MnLCAnbW9iaWxlTm8nOiB0aGlzLnN0YXRlLnBob25lTnVtYmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHsgb3RwVmVyaWZ5U3VjY2VzczogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvcHMucHJvZmlsZURhdGFDb21wbGV0ZWQodGhpcy5zdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgLy9DcmVhdGUgSVBEIGxlYWQgZm9yIElQRCBIb3NwaXRhbFxuICAgICAgICAgICAgICAgICAgICAvKmlmIChzZWxmLnByb3BzLmRvY3RvclN1bW1hcnlQYWdlICYmIHNlbGYucHJvcHMuaXNfaXBkX2hvc3BpdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiB0aGlzLnN0YXRlLnBob25lTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogJ2Ryb3BvZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiB0aGlzLnN0YXRlLm5hbWUgfHwgJ3Vua25vd24nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm9wcy5kb2N0b3JfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YVsnZG9jdG9yJ10gPSBzZWxmLnByb3BzLmRvY3Rvcl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucHJvcHMuaG9zcGl0YWxfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YVsnaG9zcGl0YWwnXSA9IHNlbGYucHJvcHMuaG9zcGl0YWxfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvcHMuc3VibWl0SVBERm9ybShmb3JtRGF0YSwgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UudXNlcl9leGlzdHMgPT0gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLmdldFVzZXJQcm9maWxlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucHJvcHMuaXNfbGFiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvcHMuY2hlY2tQcmVzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLmNsZWFyVGVzdEZvckluc3VyZWQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldERhdGFBZnRlckxvZ2luKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5wcm9wcy5pc19vcGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5zZW5kRW1haWxOb3RpZmljYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi5wcm9wcy5jcmVhdGVQcm9maWxlKHRoaXMuc3RhdGUsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9zZWxmLnNldFN0YXRlKHtkYXRhOnRydWV9KVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHNlbGYucHJvcHMuaXNfbGFiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNlbGYucHJvcHMuY2hlY2tQcmVzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzZWxmLnByb3BzLmNsZWFyVGVzdEZvckluc3VyZWQoKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnByb3BzLmdldERhdGFBZnRlckxvZ2luKClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoc2VsZi5wcm9wcy5pc19vcGQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2VsZi5wcm9wcy5zZW5kRW1haWxOb3RpZmljYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzZWxmLnNldFN0YXRlKHsgZG9iOiBudWxsLCBlbWFpbDogbnVsbCB9KVxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgVmFsaWQgT3RwXCIgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgcHJvZmlsZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMucHJvcHMucHJvZmlsZURhdGFDb21wbGV0ZWQodGhpcy5zdGF0ZSlcbiAgICB9XG5cbiAgICBwcm9maWxlRW1haWxWYWxpZGF0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZW1haWwubWF0Y2goL1xcUytAXFxTK1xcLlxcUysvKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRW1haWxOb3RWYWxpZDogdHJ1ZSB9KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBWYWxpZCBFbWFpbCBJZFwiIH0pXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2ZpbGVEb2JWYWxpZGF0aW9uKGUpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7IC4uLnRoaXMucHJvcHMucGF0aWVudCB9XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG9iOiBkYXRhLmRvYiA/IGRhdGEuZG9iIDogdGhpcy5zdGF0ZS5kb2IgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRvYikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kb2IgIT0gbnVsbCAmJiBkYXRhLmRvYiA9PSBudWxsICYmICF0aGlzLnN0YXRlLmlzRG9iVmFsaWRhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFZhbGlkIERhdGUgb2YgQmlydGhcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNEb2JOb3RWYWxpZDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kb2IgPSB0aGlzLnN0YXRlLmRvYlxuICAgICAgICAgICAgICAgICAgICBkYXRhLm90cFZlcmlmeVN1Y2Nlc3MgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJvZmlsZURhdGFDb21wbGV0ZWQoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5lZGl0VXNlclByb2ZpbGUoZGF0YSwgdGhpcy5wcm9wcy5wYXRpZW50LmlkLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvYjogbnVsbCB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kb2IgJiYgIWRhdGEuZG9iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb2JOb3RWYWxpZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBEYXRlIG9mIEJpcnRoXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKGRhdGEpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZGF0YS5lbWFpbCA/IGRhdGEuZW1haWwgOiB0aGlzLnN0YXRlLmVtYWlsLCBkb2I6IGRhdGEuZG9iID8gZGF0YS5kb2IgOiB0aGlzLnN0YXRlLmRvYiB9LCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZG9iICYmIHRoaXMuc3RhdGUuZW1haWwpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZG9iICE9IG51bGwgJiYgZGF0YS5kb2IgPT0gbnVsbCAmJiAhdGhpcy5zdGF0ZS5pc0RvYlZhbGlkYXRlZCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBEYXRlIG9mIEJpcnRoXCIgfSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VtYWlsTm90VmFsaWQ6IGZhbHNlLCBpc0RvYk5vdFZhbGlkOiBmYWxzZSB9KVxuICAgICAgICAvLyAgICAgICAgICAgICBkYXRhLmRvYiA9IHRoaXMuc3RhdGUuZG9iXG4gICAgICAgIC8vICAgICAgICAgICAgIGRhdGEuZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsXG4gICAgICAgIC8vICAgICAgICAgICAgIGRhdGEub3RwVmVyaWZ5U3VjY2VzcyA9IHRydWVcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5wcm9wcy5wcm9maWxlRGF0YUNvbXBsZXRlZChkYXRhKVxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnByb3BzLmVkaXRVc2VyUHJvZmlsZShkYXRhLCB0aGlzLnByb3BzLnBhdGllbnQuaWQsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG9iOiBudWxsLCBlbWFpbDogbnVsbCB9KVxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5lbWFpbCAmJiAhZGF0YS5lbWFpbCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRW1haWxOb3RWYWxpZDogdHJ1ZSB9KVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBWYWxpZCBFbWFpbCBJZFwiIH0pXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRvYiAmJiAhZGF0YS5kb2IpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RvYk5vdFZhbGlkOiB0cnVlIH0pXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIERhdGUgb2YgQmlydGhcIiB9KVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHNlbGVjdERhdGVGcm9tQ2FsZW5kYXIoZGF0ZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHsgLi4udGhpcy5wcm9wcy5wYXRpZW50IH1cbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLnRvRGF0ZSgpXG4gICAgICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKVxuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxuICAgICAgICAgICAgLyp0aGlzLnNldFN0YXRlKHsgZG9iOiBkYXRlLCBmb3JtYXR0ZWREYXRlOmZvcm1hdHRlZERhdGUsIGRhdGVNb2RhbDogZmFsc2V9LCgpPT57XG4gICAgICAgICAgICAgICAgZGF0YS5kb2IgPSB0aGlzLnN0YXRlLmRvYiAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmVkaXRVc2VyUHJvZmlsZShkYXRhLCB0aGlzLnByb3BzLnBhdGllbnQuaWQsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkqL1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvYjogZGF0ZSwgZm9ybWF0dGVkRGF0ZTogZm9ybWF0dGVkRGF0ZSwgZGF0ZU1vZGFsOiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNOZXdQYXRpZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZVZhbGlkYXRpb24oKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxuICAgICAgICB2YXIgZGQgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgdmFyIG1tID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgdmFyIHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmIChkZCA8IDEwKSB7XG4gICAgICAgICAgICBkZCA9ICcwJyArIGRkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtbSA8IDEwKSB7XG4gICAgICAgICAgICBtbSA9ICcwJyArIG1tO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b2RheSA9IGRkICsgJy0nICsgbW0gKyAnLScgKyB5eXl5O1xuICAgICAgICByZXR1cm4gdG9kYXlcbiAgICB9XG5cbiAgICBvcGVuQ2FsZW5kYXIoaXNOZXdQYXRpZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlTW9kYWw6IHRydWUsIGlzTmV3UGF0aWVudDogaXNOZXdQYXRpZW50IH0pXG4gICAgfVxuXG4gICAgdmVyaWZ5KHJlc2VuZEZsYWcgPSBmYWxzZSwgdmlhU21zLCB2aWFXaGF0c2FwcCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5waG9uZU51bWJlci5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiB9KVxuXG4gICAgICAgICAgICBpZiAocmVzZW5kRmxhZykge1xuICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUmVzZW5kT3RwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncmVzZW5kLW90cCcsICdtb2JpbGVObyc6IHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsICdwYWdlU291cmNlJzogJ0Jvb2tpbmdQYWdlJywgJ21vZGUnOiB2aWFTbXMgPyAndmlhU21zJyA6IHZpYVdoYXRzYXBwID8gJ3ZpYVdoYXRzYXBwJyA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdHZXRPdHBSZXF1ZXN0JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZ2V0LW90cC1yZXF1ZXN0JywgJ21vYmlsZU5vJzogdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgJ3BhZ2VTb3VyY2UnOiAnQm9va2luZ1BhZ2UnLCAnbW9kZSc6IHZpYVNtcyA/ICd2aWFTbXMnIDogdmlhV2hhdHNhcHAgPyAndmlhV2hhdHNhcHAnIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5ub25JcGRMZWFkcyh0aGlzLnN0YXRlLnBob25lTnVtYmVyKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kT1RQKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHZpYVNtcywgdmlhV2hhdHNhcHAsICdib29raW5nLWxvZ2luJywgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkNvdWxkIG5vdCBnZW5lcmF0ZSBPVFAuXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgICAgICAvL3NlbGYuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiQ291bGQgbm90IGdlbmVyYXRlIE9UUC5cIiB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh2aWFXaGF0c2FwcCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZU90cFJlcXVlc3Q6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IHNob3dPdHA6IHRydWUsIHNob3dWZXJpZnk6IGZhbHNlLCBzbXNCdG5UeXBlOiB2aWFTbXMgPyB0cnVlIDogZmFsc2UsIHNob3dMb2dpbjp0cnVlLGVuYWJsZU90cFJlcXVlc3Q6IHRydWUsZW5hYmxlT3RwUmVxdWVzdDogZmFsc2Usb3RwVGltZW91dDogZmFsc2UgfSwoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc2VuZE90cENvdW50RG93bigpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IG90cFRpbWVvdXQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sIDIwMDAwKVxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiBmYWxzZSxvdHBUaW1lb3V0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5yZXNlbmRPdHBDb3VudERvd24oKVxuICAgICAgICAgICAgICAgICAgICAvLyB9LCA2MDAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbnVtYmVyICgxMCBkaWdpdHMpXCIgfSlcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGdldE5ld0RhdGUodHlwZSwgbmV3RGF0ZSwgaXNWYWxpZERvYikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG9iOiBuZXdEYXRlLCBpc0RvYlZhbGlkYXRlZDogaXNWYWxpZERvYiB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVWYWxpZGF0aW9uKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBlZGl0UGhvbmVOdW1iZXIoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd090cDpmYWxzZSxzaG93TG9naW46ZmFsc2Usb3RwOm51bGx9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3RwTW9iJykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyUHJvZmlsZSgpeyAvL25ldyBsb2dpY1xuICAgICAgIGlmICghdGhpcy5zdGF0ZS5uYW1lLm1hdGNoKC9eW2EtekEtWiBdKyQvKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBlbnRlciBwYXRpZW50J3MgbmFtZS5cIiB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJOYW1lIHNob3VsZCBvbmx5IGNvbnRhaW4gYWxwaGFiZXRzLlwiIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nZW5kZXIgPT0gJycpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgU2VsZWN0IFRoZSBHZW5kZXJcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbCA9PSAnJykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBZb3VyIEVtYWlsIElkXCIgfSlcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmVtYWlsLm1hdGNoKC9cXFMrQFxcUytcXC5cXFMrLykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgVmFsaWQgRW1haWwgSWRcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kb2IgPT0gJycgfHwgdGhpcy5zdGF0ZS5kb2IgPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBWYWxpZCBEYXRlIG9mIEJpcnRoXCIgfSlcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZG9iICE9IG51bGwgJiYgIXRoaXMuc3RhdGUuaXNEb2JWYWxpZGF0ZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgVmFsaWQgRGF0ZSBvZiBCaXJ0aFwiIH0pXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBcblxuICAgICAgICB0aGlzLnByb3BzLnByb2ZpbGVEYXRhQ29tcGxldGVkKHRoaXMuc3RhdGUpXG4gICAgICAgIHRoaXMucHJvcHMuY3JlYXRlUHJvZmlsZSh0aGlzLnN0YXRlLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKS50aGVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmlzX2xhYikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoZWNrUHJlc2NyaXB0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhclRlc3RGb3JJbnN1cmVkKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXREYXRhQWZ0ZXJMb2dpbigpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNfb3BkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZEVtYWlsTm90aWZpY2F0aW9uKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvYjogbnVsbCwgZW1haWw6IG51bGwgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXNlbmRPdHBDb3VudERvd24oKXtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHZhciB0aW1lTGVmdCA9IDMwO1xuICAgICAgICB2YXIgdGltZXJJZCA9IHNldEludGVydmFsKGNvdW50ZG93biwgMTAwMCk7XG4gICAgICAgIGxldCB0aW1lRWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVFbG0nKTtcbiAgICAgICAgZnVuY3Rpb24gY291bnRkb3duKCkge1xuICAgICAgICAgIGlmICh0aW1lTGVmdCA9PSAwKSB7XG4gICAgICAgICAgICBpZih0aW1lRWxtKXtcbiAgICAgICAgICAgICAgICB0aW1lRWxtLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7b3RwVGltZW91dDp0cnVlfSlcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYodGltZUVsbSl7XG4gICAgICAgICAgICAgICAgaWYodGltZUxlZnQgPCAxMCl7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVFbG0uaW5uZXJIVE1MID0gJzAwOicrICcwJyt0aW1lTGVmdDtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGltZUVsbS5pbm5lckhUTUwgPSAnMDA6JysgdGltZUxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGltZUxlZnQtLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3aWRnZXQgbXJiLTE1ICR7dGhpcy5wcm9wcy5wcm9maWxlRXJyb3IgPyAncm5kLWVycm9yLW5tJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09IE5ldyBMb2dpbiBGbG93IFN0YXJ0ID09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLnBhdGllbnQ/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICB7IVNUT1JBR0UuY2hlY2tBdXRoKCkgJiYgIXRoaXMucHJvcHMucGF0aWVudD9cbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdHAtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBkLWZsZXggbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBtb2JpbGUgbnVtYmVyIHRvIHByb2NlZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm90cC1zdWItaGVhZGluZ1wiPkFwcG9pbnRtZW50IGRldGFpbHMgd2lsbCBiZSBzZW50IHRvIHRoaXMgbnVtYmVyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90cC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT4gey8qID09PT09PT09PT09PT09PT09PT0gb3RwIHNlY3Rpb24gPT09PT09PT09PT09PT09PT09PSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiByZXF1aXJlZCBpZD1cIm90cE1vYlwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lTnVtYmVyfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cInBob25lTnVtYmVyXCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVDb250aW51ZVByZXNzLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5wcm9maWxlVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd090cD8nY2xpY2stZGlzYWJsZSc6Jyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90cE1vYlwiPk1vYmlsZSBudW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93T3RwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm90cC1lZGl0XCIgb25DbGljaz17KGUpID0+e2UucHJldmVudERlZmF1bHQoKTsgdGhpcy5lZGl0UGhvbmVOdW1iZXIoKX19PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPdHAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiByZXF1aXJlZCBpZD1cIm90cE51bWJlclwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlT3RwQ29udGludWVQcmVzcy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cIm90cFwiIHZhbHVlPXt0aGlzLnN0YXRlLm90cH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90cE51bWJlclwiPkVudGVyIDYgZGlnaXQgT1RQPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdHAtZWRpdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZW5hYmxlT3RwUmVxdWVzdCA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSB7YCAke3RoaXMuc3RhdGUub3RwVGltZW91dD8nb3RwLXJzbmQtYWN0aXZlJzonb3RwLXJzbmQgY2xpY2stZGlzYWJsZSd9YH0gb25DbGljaz17KGUpID0+IHtlLnByZXZlbnREZWZhdWx0KCk7IHRoaXMudmVyaWZ5KHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSl9fT5SZXNlbmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdHAtdGltZXJcIiBpZD1cInRpbWVFbG1cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BnZXQtb3RwICR7dGhpcy5zdGF0ZS5vdHBUaW1lb3V0PydvdHAtcnNuZC1hY3RpdmUnOidvdHAtcnNuZCBjbGljay1kaXNhYmxlJ31gfSBvbkNsaWNrPXsoZSkgPT4ge2UucHJldmVudERlZmF1bHQoKTsgdGhpcy52ZXJpZnkodHJ1ZSwgdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gZmFsc2UgOiB0cnVlLCAhdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gZmFsc2UgOiB0cnVlKX19PiB7dGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gJ0dldCBPVFAgb24gV2hhdHNhcHAnIDogJ0dldCBPVFAgb24gU01TJ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7YGlucHV0LWJvb2tpbmctc21zd2h0cyBkLWZsZXggYWxpZ24tZmxleC1zcC1idCAgc2luZ2xlLWJ0biAke3RoaXMuc3RhdGUuc2hvd0xvZ2luPydvdHBMb2dpbic6Jyd9YH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvZ2luP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3RwLWxvZ2luLWJ0blwiIG9uQ2xpY2s9eyhlKSA9PntlLnByZXZlbnREZWZhdWx0KCk7IHRoaXMuc3VibWl0T1RQUmVxdWVzdCgpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImlucHV0LXNtcy13aHRzXCIgb25DbGljaz17KGUpID0+IHtlLnByZXZlbnREZWZhdWx0KCk7IHRoaXMudmVyaWZ5KGZhbHNlLCBmYWxzZSwgdHJ1ZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3aHRzcC1pY29cIiBzcmM9XCIvYXNzZXRzL2ltZy93YS1sb2dvLW1haW4uc3ZnXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnIH19IC8+R2V0IE9UUCBvbiBXaGF0c2FwcDwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlucHV0LXNtcy12ZXIgbXItMFwiIG9uQ2xpY2s9eyhlKSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLnZlcmlmeShmYWxzZSwgdHJ1ZSwgZmFsc2UpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic21zLWljb1wiIHNyYz1cIi9hc3NldHMvaW1nL3Ntc2ljb24uc3ZnXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnIH19IC8+R2V0IE9UUCBvbiBTTVM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHAgY2xhc3NOYW1lPVwid3RzYXBwLWNoay10eHQgbWItMFwiIHN0eWxlPXt7Zm9udFNpemU6ICcxMHB4J319PjxpbWcgc3R5bGU9e3t3aWR0aDonMTBweCd9fSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3RpY2suc3ZnJ30gLz4gRW5hYmxlIFdoYXRzYXBwIGZvciBzZWFtbGVzcyBjb21tdW5pY2F0aW9uPC9wPiAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDpTVE9SQUdFLmNoZWNrQXV0aCgpICYmICF0aGlzLnByb3BzLnBhdGllbnQ/XG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RwLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgZC1mbGV4XCI+PHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+UGF0aWVudCBEZXRhaWxzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdHAtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+IHsvKiA9PT09PT09PT09PT09PT09PT09IHBhdGllbnQgZGV0YWlscyBzZWN0aW9uID09PT09PT09PT09PT09PT09PT0qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJvdHBNb2J2ZXJcIiBjbGFzc05hbWU9XCJjbGljay1kaXNhYmxlXCIgdmFsdWUgPSB7dGhpcy5wcm9wcy51c2VyX2xvZ2dlZEluX251bWJlcj90aGlzLnByb3BzLnVzZXJfbG9nZ2VkSW5fbnVtYmVyOnRoaXMuc3RhdGUucGhvbmVOdW1iZXI/dGhpcy5zdGF0ZS5waG9uZU51bWJlcjonJ30gYXV0b0NvbXBsZXRlPVwib2ZmXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RwTW9idmVyXCI+TW9iaWxlIG51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtLXZlcmlmaWVkXCI+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2Noay1ncmVlbi5zdmcnfSAvPiBWZXJpZmllZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLmdlbmRlciA9PSAnbSc/J2J0bi1hY3RpdmUnOicnfWB9IG5hbWU9XCJnZW5kZXJcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PSAnbSd9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAnZ2VuZGVyJzogJ20nIH0pfSBvbkJsdXI9e3RoaXMucHJvZmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKX0+TWFsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLmdlbmRlciA9PSAnZic/J2J0bi1hY3RpdmUnOicnfWB9IG5hbWU9XCJnZW5kZXJcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PSAnZid9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAnZ2VuZGVyJzogJ2YnIH0pfSBvbkJsdXI9e3RoaXMucHJvZmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKX0+RmVtYWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGlkPVwicHRudE5hbWVcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMucHJvZmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJcIiBhdXRvQ29tcGxldGU9XCJvZmZcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwdG50TmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogZGF0ZSBzZWN0aW9uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV3RGF0ZVNlbGVjdG9yIHsuLi50aGlzLnByb3BzfSBnZXROZXdEYXRlPXt0aGlzLmdldE5ld0RhdGUuYmluZCh0aGlzKX0gaXNfZG9iX2Vycm9yPXt0aGlzLnN0YXRlLmlzX2RvYl9lcnJvcn0gb2xkX2RvYj17dGhpcy5zdGF0ZS5kb2J9IGlzX3N1bW1hcnk9e2ZhbHNlfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBpZD1cInB0bnRFbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLnByb2ZpbGVWYWxpZGF0aW9uLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHRudEVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJwdG50LWR0bHMtY25mcm1cIiBvbkNsaWNrPXsoZSkgPT57ZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLmFkZFVzZXJQcm9maWxlKCl9fT5Db25maXJtPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09IHBhdGllbnQgZGV0YWlscyBzZWN0aW9uID09PT09PT09PT09PT09PT09PT0qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSBkLWZsZXggamMtc3BhY2ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LTFcIiBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgcGFkZGluZ1JpZ2h0OiAxNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGQtZmxleFwiPjxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIG1hcmdpblJpZ2h0OiAnOHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlBhdGllbnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ibC12aWV3LWZvcm1hdHRpbmcgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJkYXRlLXRpbWUgdGl0bGVcIiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0gPnt0aGlzLnByb3BzLnBhdGllbnQgPyB0aGlzLnByb3BzLnBhdGllbnQubmFtZSA6IFwiXCJ9IDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsodGhpcy5wcm9wcy5pc19vcGQgfHwgdGhpcy5wcm9wcy5pc19sYWIpICYmICghdGhpcy5wcm9wcy5wYXRpZW50LmVtYWlsIHx8ICF0aGlzLnByb3BzLnBhdGllbnQuZG9iICk/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RwLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgey8qIXRoaXMucHJvcHMucGF0aWVudC5lbWFpbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGlkPVwicHRudEVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMucHJvZmlsZUVtYWlsVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIlwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHN0eWxlPXsodGhpcy5wcm9wcy5pc0VtYWlsTm90VmFsaWQgfHwgdGhpcy5zdGF0ZS5pc0VtYWlsTm90VmFsaWQpID8geyBib3JkZXI6ICcxcHggc29saWQgcmVkJyB9IDoge319Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwdG50RW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyovXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLnBhdGllbnQuZG9iP1xuICAgICAgICAgICAgICAgICAgICAgICAgPE5ld0RhdGVTZWxlY3RvciB7Li4udGhpcy5wcm9wc30gZ2V0TmV3RGF0ZT17dGhpcy5nZXROZXdEYXRlLmJpbmQodGhpcyl9IGlzX2RvYl9lcnJvcj17dGhpcy5zdGF0ZS5pc19kb2JfZXJyb3J9IG9sZF9kb2I9e3RoaXMuc3RhdGUuZG9ifSBpc19zdW1tYXJ5PXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDonJ31cbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZG9iIHx8IHRoaXMuc3RhdGUuZW1haWwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiIG9uQ2xpY2s9e3RoaXMucHJvZmlsZURvYlZhbGlkYXRpb24uYmluZCh0aGlzKX0+VXBkYXRlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHBhcnNlZCAmJiBwYXJzZWQuY29kX3RvX3ByZXBhaWQgPT0gJ3RydWUnKSA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVUbygncGF0aWVudCcsIHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj57dGhpcy5wcm9wcy5wYXRpZW50ID8gXCJDaGFuZ2UgUGF0aWVudFwiIDogXCJTZWxlY3QgUGF0aWVudFwifTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dfaW5zdXJhbmNlX2Vycm9yICYmIHRoaXMucHJvcHMuaW5zdXJhbmNlX2Vycm9yX21zZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd5bi10ZXh0XCI+e3RoaXMucHJvcHMuaW5zdXJhbmNlX2Vycm9yX21zZ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgLy8gb2xkIGxvZ2ljXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF0aWVudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgZC1mbGV4IGpjLXNwYWNlYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LTFcIiBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgcGFkZGluZ1JpZ2h0OiAxNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgZC1mbGV4XCI+PHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzIwcHgnLCBtYXJnaW5SaWdodDogJzhweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbnctdXNyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlBhdGllbnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYmwtdmlldy1mb3JtYXR0aW5nIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJkYXRlLXRpbWUgdGl0bGVcIiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0gPnt0aGlzLnByb3BzLnBhdGllbnQgPyB0aGlzLnByb3BzLnBhdGllbnQubmFtZSA6IFwiXCJ9IDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoodGhpcy5wcm9wcy5pc19vcGQgfHwgdGhpcy5wcm9wcy5pc19sYWIpICYmICF0aGlzLnByb3BzLnBhdGllbnQuZW1haWwgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2x0LW53LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNsdC1sYWJlbFwiIGh0bWxGb3I9XCJtYWxlXCI+PHN1cCBjbGFzc05hbWU9XCJyZXF1aXJlZEFzdFwiPio8L3N1cD5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzbHQtdGV4dC1pbnB1dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMucHJvZmlsZUVtYWlsVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBzdHlsZT17KHRoaXMucHJvcHMuaXNFbWFpbE5vdFZhbGlkIHx8IHRoaXMuc3RhdGUuaXNFbWFpbE5vdFZhbGlkKSA/IHsgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJlZCcgfSA6IHt9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnRoaXMucHJvcHMuaXNfbGFiICYmIHRoaXMucHJvcHMucGF0aWVudC5kb2IgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcmItMjBcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogMjggfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNsdC10ZXh0LWlucHV0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cImRhdGVcIiBuYW1lPVwiZG9iXCIgdmFsdWU9e3RoaXMuc3RhdGUuZG9ifSBvbkNoYW5nZT17dGhpcy5wcm9maWxlRG9iVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIkRhdGUgb2YgQmlydGhcIiBzdHlsZT17dGhpcy5wcm9wcy5pc0RvYk5vdFZhbGlkID8geyBib3JkZXJCb3R0b206ICcxcHggc29saWQgcmVkJyB9IDoge319IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKHRoaXMucHJvcHMuaXNfb3BkIHx8IHRoaXMucHJvcHMuaXNfbGFiKSAmJiAhdGhpcy5wcm9wcy5wYXRpZW50LmRvYj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMucGF0aWVudC5kb2IgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYi1zdW1tYXJ5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZG9iXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRvYlwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9ybWF0dGVkRGF0ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vcGVuQ2FsZW5kYXIuYmluZCh0aGlzLGZhbHNlKX0gcmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9eyh0aGlzLnByb3BzLmlzRG9iTm90VmFsaWQgfHwgdGhpcy5zdGF0ZS5pc0RvYk5vdFZhbGlkKSA/IHsgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJlZCcgfSA6IHt9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5kb2I/PGxhYmVsIGh0bWxGb3I9XCJkb2JcIj5EYXRlIG9mIEJpcnRoPC9sYWJlbD46Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0ZU1vZGFsID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItb3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1tb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2Vla051bWJlcj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bW9tZW50KG5ldyBEYXRlKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGU9eyhkYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5kaWZmKG1vbWVudCgobmV3IERhdGUpKSwgJ2RheXMnKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb2RheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5zZWxlY3REYXRlRnJvbUNhbGVuZGFyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIiovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKih0aGlzLnByb3BzLmlzX29wZCB8fCB0aGlzLnByb3BzLmlzX2xhYikgJiYgIXRoaXMucHJvcHMucGF0aWVudC5kb2IgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHQtbnctaW5wdXQgc3VtbWVyeS1kb2ItY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzbHQtbGFiZWxcIiBodG1sRm9yPVwibWFsZVwiPjxzdXAgY2xhc3NOYW1lPVwicmVxdWlyZWRBc3RcIj4qPC9zdXA+RG9iOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRvYi1pbnB1dC1zdWJcIj5kZC9tbS95eXl5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5ld0RhdGVTZWxlY3RvciB7Li4udGhpcy5wcm9wc30gZ2V0TmV3RGF0ZT17dGhpcy5nZXROZXdEYXRlLmJpbmQodGhpcyl9IGlzX2RvYl9lcnJvcj17dGhpcy5zdGF0ZS5pc19kb2JfZXJyb3J9IG9sZF9kb2I9e3RoaXMuc3RhdGUuZG9ifSBpc19zdW1tYXJ5PXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZG9iIHx8IHRoaXMuc3RhdGUuZW1haWwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIiBvbkNsaWNrPXt0aGlzLnByb2ZpbGVEb2JWYWxpZGF0aW9uLmJpbmQodGhpcyl9PlVwZGF0ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAocGFyc2VkICYmIHBhcnNlZC5jb2RfdG9fcHJlcGFpZCA9PSAndHJ1ZScpID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVUbygncGF0aWVudCcsIHRoaXMucHJvcHMuaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPnt0aGlzLnByb3BzLnBhdGllbnQgPyBcIkNoYW5nZSBQYXRpZW50XCIgOiBcIlNlbGVjdCBQYXRpZW50XCJ9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93X2luc3VyYW5jZV9lcnJvciAmJiB0aGlzLnByb3BzLmluc3VyYW5jZV9lcnJvcl9tc2cgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImd5bi10ZXh0XCI+e3RoaXMucHJvcHMuaW5zdXJhbmNlX2Vycm9yX21zZ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImxhYi12aXNpdC10aW1lIGQtZmxleCBqYy1zcGFjZWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGQtZmxleFwiPjxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzIwcHgnLCBtYXJnaW5SaWdodDogJzhweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbnctdXNyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+UGF0aWVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtcHQtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsdC1udy1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNsdC1sYWJlbFwiIGh0bWxGb3I9XCJtYWxlXCI+PHN1cCBjbGFzc05hbWU9XCJyZXF1aXJlZEFzdFwiPio8L3N1cD5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2x0LXRleHQtaW5wdXRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5wcm9maWxlVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsdC1udy1pbnB1dCByYWRpby1tYmxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzbHQtbGFiZWxcIiBodG1sRm9yPVwibWFsZVwiID48c3VwIGNsYXNzTmFtZT1cInJlcXVpcmVkQXN0XCI+Kjwvc3VwPkdlbmRlcjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHQtbGFiZWwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+TWFsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ20nfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgJ2dlbmRlcic6ICdtJyB9KX0gb25CbHVyPXt0aGlzLnByb2ZpbGVWYWxpZGF0aW9uLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5GZW1hbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZ2VuZGVyXCIgdmFsdWU9XCJtXCIgbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09ICdmJ30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7ICdnZW5kZXInOiAnZicgfSl9IG9uQmx1cj17dGhpcy5wcm9maWxlVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+T3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09ICdvJ30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7ICdnZW5kZXInOiAnbycgfSl9IG9uQmx1cj17dGhpcy5wcm9maWxlVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHQtbnctaW5wdXQgc3VtbWVyeS1kb2ItY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNsdC1sYWJlbFwiIGh0bWxGb3I9XCJtYWxlXCI+PHN1cCBjbGFzc05hbWU9XCJyZXF1aXJlZEFzdFwiPio8L3N1cD5Eb2I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkb2ItaW5wdXQtc3ViXCI+ZGQvbW0veXl5eTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV3RGF0ZVNlbGVjdG9yIHsuLi50aGlzLnByb3BzfSBnZXROZXdEYXRlPXt0aGlzLmdldE5ld0RhdGUuYmluZCh0aGlzKX0gaXNfZG9iX2Vycm9yPXt0aGlzLnN0YXRlLmlzX2RvYl9lcnJvcn0gb2xkX2RvYj17dGhpcy5zdGF0ZS5kb2J9IGlzX3N1bW1hcnk9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsdC1udy1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNsdC1sYWJlbFwiIGh0bWxGb3I9XCJtYWxlXCI+PHN1cCBjbGFzc05hbWU9XCJyZXF1aXJlZEFzdFwiPio8L3N1cD5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNsdC10ZXh0LWlucHV0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5wcm9maWxlVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsdC1udy1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNsdC1sYWJlbFwiIGh0bWxGb3I9XCJtYWxlXCI+PHN1cCBjbGFzc05hbWU9XCJyZXF1aXJlZEFzdFwiPio8L3N1cD5Nb2JpbGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzbHQtdGV4dC1pbnB1dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lTnVtYmVyfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cInBob25lTnVtYmVyXCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVDb250aW51ZVByZXNzLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5wcm9maWxlVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib29raW5nLXNtc3dodHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dWZXJpZnkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlucHV0LXNtcy12ZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnZlcmlmeShmYWxzZSwgdHJ1ZSwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNXB4JyB9fSBjbGFzc05hbWU9XCJzbXMtaWNvXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9zbXNpY29uLnN2Zyd9IC8+VmVyaWZ5IFZpYSBTTVM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5wdXQtc21zLXdodHNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnZlcmlmeShmYWxzZSwgZmFsc2UsIHRydWUpfT48aW1nIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNXB4JyB9fSBjbGFzc05hbWU9XCJ3aHRzcC1pY29cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3dhLWxvZ28tZ3Iuc3ZnJ30gLz5WZXJpZnkgVmlhIFdoYXRzYXBwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd090cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHQtbnctaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzbHQtbGFiZWxcIiBodG1sRm9yPVwibWFsZVwiPk9UUDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNsdC10ZXh0LWlucHV0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cIm51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlT3RwQ29udGludWVQcmVzcy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cIm90cFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgT1RQIFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vYmlsZS1maWxsLWJ0blwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMpfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXNlbmQtb3RwLWJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMudmVyaWZ5KHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IGZhbHNlIDogdHJ1ZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IGZhbHNlIDogdHJ1ZSl9Pnt0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyAnU2VuZCB2aWEgV2hhdHNhcHAnIDogJ1NlbmQgdmlhIFNNUyd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZW5hYmxlT3RwUmVxdWVzdCA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJyZXNlbmQtb3RwLWJ0blwiIHN0eWxlPXt7IGNvbG9yOiAnI2VjMGQwZCcgfX0gb25DbGljaz17KCkgPT4gdGhpcy52ZXJpZnkodHJ1ZSwgdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gdHJ1ZSA6IGZhbHNlLCAhdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gdHJ1ZSA6IGZhbHNlKX0+UmVzZW5kPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDaG9vc2VQYXRpZW50TmV3Vmlld1xuIl0sInNvdXJjZVJvb3QiOiIifQ==