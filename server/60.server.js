exports.ids = [60];
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

/***/ "./dev/js/components/insurance/insuranceCommonSection.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/insurance/insuranceCommonSection.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceCommon extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedProfile: '',
			selected_plan_price: '',
			toggle: 'one'

		};
	}
	componentDidMount() {
		let self = this;
		this.setState(_extends({ selectedProfile: this.props.USER.defaultProfile, selected_plan_price: this.props.selected_plan.amount }, self.props.self_data_values[this.props.USER.defaultProfile]));
	}
	render() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'div',
				{ className: 'widget mrb-10' },
				_react2.default.createElement(
					'div',
					{ className: 'ins-card-head' },
					_react2.default.createElement(
						'div',
						{ className: 'ins-name-head-div d-flex align-items-start' },
						_react2.default.createElement('img', { width: '120', src: this.props.insurnaceData['insurance'][0].logo }),
						_react2.default.createElement(
							'p',
							{ className: 'fw-500 mrt-10' },
							'Group Out-patient Insurance'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'ins-pdf-dwnload-div d-flex align-items-center' },
						_react2.default.createElement(
							'a',
							{ href: this.props.insurnaceData['insurance'][0].insurer_document, download: true, target: '_blank' },
							_react2.default.createElement('img', { src: "/assets" + "/img/pdf-dwn.png" })
						),
						_react2.default.createElement(
							'span',
							{ className: 'fw-500' },
							'Policy Details'
						)
					)
				),
				!this.props.isSelectPlan ? _react2.default.createElement(
					'div',
					{ className: 'mt-0', style: { padding: '0 4px 10px' } },
					_react2.default.createElement(
						'div',
						{ className: 'd-flex align-items-start' },
						_react2.default.createElement(
							'div',
							{ className: 'd-flex ins-form-info align-items-center text-center' },
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 mrb-10' },
								'Coverage (1 Year)'
							),
							_react2.default.createElement(
								'p',
								{ className: 'fw-500' },
								this.props.selected_plan.name
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'd-flex ins-form-info align-items-center text-center' },
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 mrb-10' },
								'Annual Premium'
							),
							_react2.default.createElement(
								'p',
								{ className: 'fw-500' },
								'\u20B9 ',
								this.props.selected_plan.amount
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'mrt-10', style: { cursor: 'pointer', paddingLeft: 5 }, onClick: () => {
								this.props.is_edit ? this.props.history.push('/insurance/insurance-plan-view') : this.props.history.push('/insurance/insurance-user-details');
							} },
						_react2.default.createElement(
							'p',
							{ className: 'fw-500 text-primary' },
							this.props.is_edit ? 'Select another plan' : 'Edit'
						)
					)
				) : ''
				// <table className="table table-bordered insurance-tbl insurance-checkboxes">
				// 	<thead>
				// 		<tr>
				// 			<th className="tbl-first-head"><p>Coverage (1 Year)</p></th>
				// 			<th className="tbl-second-head"><p>Annual Premium</p></th>
				// 		</tr>
				// 	</thead>
				// 	<tbody>
				// 		<tr>
				// 			<td><p className="ins-dtls-members-edit">{this.props.is_edit?'Change Insured Plan':'Insured Member Details'}   
				// 			<span style={{ 'cursor': 'pointer' }} onClick={()=>{this.props.is_edit?this.props.history.push('/insurance/insurance-plans'):this.props.history.push('/insurance/insurance-user-details')}}>EDIT
				// 			</span></p></td>
				// 			<td></td>
				// 		</tr>
				// 		<tr>
				// 			<td>
				// 				<label className="ck-bx" htmlform="test11" style={{'fontWeight': '400', 'fontSsize': '14'}}>{this.props.selected_plan.name}
				// 				<input type="checkbox" defaultChecked className="ins-chk-bx" value="" id="test11" name="fruit-1" />
				// 				<span className="checkmark"></span></label>
				// 			</td>

				// 			<td><span>₹ {this.props.selected_plan.amount}</span></td>
				// 		</tr>
				// 	</tbody>
				// </table>

			),
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
							{ className: this.props.isSelectPlan ? '' : 'tab_inactive' },
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
		);
	}
}
exports.default = InsuranceCommon;

/***/ }),

/***/ "./dev/js/components/insurance/insuranceReview.js":
/*!********************************************************!*\
  !*** ./dev/js/components/insurance/insuranceReview.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ChatPanel = __webpack_require__(/*! ../commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _insuranceCommonSection = __webpack_require__(/*! ./insuranceCommonSection.js */ "./dev/js/components/insurance/insuranceCommonSection.js");

var _insuranceCommonSection2 = _interopRequireDefault(_insuranceCommonSection);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _paymentForm = __webpack_require__(/*! ../commons/paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceReview extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedProfile: '',
			selected_plan_price: '',
			is_edit: false,
			gst: 'inclusive of 18% GST',
			paymentData: null
		};
	}
	componentDidMount() {
		if (window) {
			window.scrollTo(0, 0);
		}
		let self = this;
		this.setState(_extends({ selectedProfile: this.props.USER.defaultProfile, selected_plan_price: this.props.selected_plan.amount }, self.props.self_data_values[this.props.USER.defaultProfile]));
	}
	proceedPlan() {
		let success_id;
		var insurance_pay = {};
		// insurance_pay.profile=1
		let isDummyUser;
		insurance_pay.insurance_plan = this.props.selected_plan.id;
		insurance_pay.insurer = this.props.insurnaceData['insurance'][0].id;
		insurance_pay.members = [];
		let selectedUser = this.props.USER.defaultProfile;
		let address = '';
		let email = '';
		let pincode = '';
		let town = '';
		let district = '';
		let state = '';
		let state_code = '';
		let city_code = '';
		let district_code = '';
		let endorsedSelf;
		let is_change;
		// let show_lname_flag = ''
		// let isDefaultUser
		if (this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.profiles[this.props.USER.defaultProfile]) {
			// isDefaultUser = this.props.USER.profiles[this.props.USER.defaultProfile].is_default_user
			isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
		}
		if (this.props.self_data_values && this.props.self_data_values[selectedUser] && !isDummyUser) {
			address = this.props.self_data_values[selectedUser].address;
			district = this.props.self_data_values[selectedUser].district;
			pincode = this.props.self_data_values[selectedUser].pincode;
			email = this.props.self_data_values[selectedUser].email;
			town = this.props.self_data_values[selectedUser].town;
			state = this.props.self_data_values[selectedUser].state;
			state_code = this.props.self_data_values[selectedUser].state_code;
			city_code = this.props.self_data_values[selectedUser].town_code;
			district_code = this.props.self_data_values[selectedUser].district_code;
			// show_lname_flag = this.props.self_data_values[selectedUser].show_lname_flag
		} else if (this.props.self_data_values && this.props.self_data_values[0] && isDummyUser) {
			address = this.props.self_data_values[0].address;
			district = this.props.self_data_values[0].district;
			pincode = this.props.self_data_values[0].pincode;
			email = this.props.self_data_values[0].email;
			town = this.props.self_data_values[0].town;
			state = this.props.self_data_values[0].state;
			state_code = this.props.self_data_values[0].state_code;
			city_code = this.props.self_data_values[0].town_code;
			district_code = this.props.self_data_values[0].district_code;
			// show_lname_flag = this.props.self_data_values[0].show_lname_flag
		} else if (this.props.self_data_values && this.props.is_endorsement) {
			Object.entries(this.props.self_data_values).map(function ([key, value]) {
				if (value.relation == 'self') {
					endorsedSelf = value;
				}
			});
			address = endorsedSelf.address;
			district = endorsedSelf.district;
			district_code = endorsedSelf.district_code;
			pincode = endorsedSelf.pincode;
			email = endorsedSelf.email;
			town = endorsedSelf.town;
			city_code = endorsedSelf.town_code;
			state = endorsedSelf.state;
			state_code = endorsedSelf.state_code;

			// show_lname_flag = this.props.self_data_values[0].show_lname_flag
		}

		var members = {};
		let currentSelectedProfiles = [];
		this.props.currentSelectedInsuredMembersId.map((val, key) => {
			currentSelectedProfiles.push(val[key]);
		});
		let is_member_updated = [];
		let image_ids = [];
		{
			Object.entries(this.props.currentSelectedInsuredMembersId).map(function ([key, value]) {
				image_ids = [];
				let param = this.props.self_data_values[value[key]];
				members = {};
				members.title = param.title;
				if (param.no_lname) {
					members.middle_name = '';
					members.last_name = '';
				} else {
					members.middle_name = param.middle_name;
					members.last_name = param.last_name;
				}
				if (this.props.is_endorsement) {
					if (this.props.members_proofs && this.props.members_proofs.length > 0) {
						is_member_updated = this.props.members_proofs.filter(x => x.id == param.id);
						if (is_member_updated && is_member_updated.length > 0) {
							members.is_change = true;
							if (is_member_updated[0].img_path_ids.length > 0) {
								is_member_updated[0].img_path_ids.map((imgId, i) => {
									image_ids.push({ 'document_image': imgId.id });
								});
							}
							members.image_ids = image_ids;
						} else {
							members.is_change = false;
						}
					}
					members.id = param.id;
				}
				members.member = param.id;
				members.first_name = param.name;
				members.address = address;
				members.email = email;
				members.pincode = pincode;
				members.town = town;
				members.district = district;
				members.state = state;
				members.state_code = state_code;
				members.city_code = city_code;
				members.district_code = district_code;
				members.dob = param.dob;
				members.member_type = param.member_type;
				members.gender = param.gender;
				members.profile = param.profile_id;
				members.relation = param.relation;
				members.user_form_id = param.id;
				return insurance_pay.members.push(members);
			}, this);
		}
		console.log(insurance_pay);
		if (this.props.is_endorsement) {
			this.props.createEndorsementData(insurance_pay, resp => {
				// submit endoresment data
				if (resp && resp.success) {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.success });
					this.props.history.push('/insurance/certificate');
				} else if (resp.error) {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.error });
				}
			});
		} else {
			this.props.resetSelectedInsuranceMembers(); // filter only visible forms objexts in the store
			this.props.insurancePay(insurance_pay, resp => {
				// // to request payment
				if (resp.members && resp.members.length > 0) {
					this.props.history.push('/insurance/insurance-user-details');
				} else {
					if (resp.certificate) {
						this.props.history.push('/insurance/certificate');
					} else {
						if (resp.payment_required) {
							// this.props.history.push(`/payment/${resp.data.orderId}?refs=opd`)
							this.processPayment(resp);
						} else {
							success_id = '/insurance/complete?payment_success=true&id=' + resp.data.id;
							this.props.history.push(success_id);
						}
					}
				}
			});
		}
	}
	sendAgentBookingURL() {
		let sms_type = 'insurance';
		if (this.props.is_endorsement && this.props.isAgent && this.props.isAgent == 'true') {
			sms_type = 'endorsement';
		}
		let extraParams = {};
		this.props.sendAgentBookingURL(null, 'sms', sms_type, null, extraParams, (err, res) => {
			//send payment link in sms to user by agaent
			if (err) {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SEND ERROR" });
			} else {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SENT SUCCESSFULY" });
			}
		});
	}

	processPayment(data) {
		if (data && data.status) {
			this.setState({ paymentData: data.data }, () => {
				setTimeout(() => {
					if (document.getElementById('paymentForm') && Object.keys(this.state.paymentData).length > 0) {
						let form = document.getElementById('paymentForm');
						form.submit();
					}
				}, 500);
			});
		}
	}

	render() {
		if (this.props.data) {
			let self = this;
			let isDummyUser;
			if (Object.keys(this.props.data.members).length > 0) {
				// if(this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.profiles[this.props.USER.defaultProfile]){
				// 	isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser
				// }

				let self_profile = this.props.data.members.filter(x => x.relation == 'self')[0];
				let family_profile = this.props.data.members.filter(x => x.relation != 'self');
				// if(!isDummyUser){
				// 	self_profile  = Object.assign({}, this.props.self_data_values[this.props.USER.defaultProfile])		
				// }else{
				// 	self_profile  = Object.assign({}, this.props.self_data_values[0])		
				// }
				// let currentSelectedProfiles = []
				//  this.props.currentSelectedInsuredMembersId.map((val,key) => {
				//		currentSelectedProfiles.push(val[key])
				//  })
				let self_edited_fields = [];
				if (this.props.data && this.props.data.edited_fields) {
					Object.entries(this.props.data.edited_fields).map(function ([key, value]) {
						if (key == self_profile.id) {
							self_edited_fields = value;
						}
					});
				}
				return _react2.default.createElement(
					'div',
					{ className: 'profile-body-wrap' },
					_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
					_react2.default.createElement(
						'section',
						{ className: 'container container-top-margin cardMainPaddingRmv' },
						_react2.default.createElement(
							'div',
							{ className: 'row no-gutters dsktp-row-gutter' },
							_react2.default.createElement(
								'div',
								{ className: 'col-12 col-md-7 col-lg-7 ins-main-padding' },
								_react2.default.createElement(
									'section',
									{ className: 'profile-book-screen' },
									_react2.default.createElement(
										'div',
										null,
										this.props.is_endorsement ? _react2.default.createElement(
											'p',
											{ className: 'rev-ins-header', style: { color: '#000000' } },
											' Review your details',
											this.props.isAgent && this.props.isAgent == 'true' ? '' : _react2.default.createElement(
												'a',
												{ style: { color: `var(--text--dark--all)`, float: 'right' }, onClick: () => this.props.history.push('/insurance/insurance-endorsement-details') },
												_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/edit.svg" }),
												' Edit'
											)
										) : _react2.default.createElement(_insuranceCommonSection2.default, _extends({}, this.props, { is_edit: this.state.is_edit, is_edit_endorsment: this.props.is_endorsement })),
										_react2.default.createElement(
											'div',
											{ className: 'widget mrt-10', style: { padding: '10px 4px' } },
											_react2.default.createElement(
												'div',
												{ className: 'insurance-member-container', style: { padding: '0 8px 0' } },
												_react2.default.createElement(
													'div',
													{ className: 'ins-user-details-lisitng' },
													_react2.default.createElement(
														'p',
														{ className: 'sub-form-hed' },
														'Proposer'
													),
													_react2.default.createElement(
														'ul',
														{ className: 'ins-usr-img-para pl-0' },
														_react2.default.createElement(
															'li',
															null,
															_react2.default.createElement(
																'div',
																{ className: 'img-list-width' },
																_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/user-01.svg" })
															),
															self_profile.no_lname ? _react2.default.createElement(
																'p',
																{ style: { 'textTransform': 'capitalize' } },
																self_profile.name,
																' | ',
																self_profile.gender == 'm' ? 'Male' : self_profile.gender == 'f' ? 'Female' : self_profile.gender == 'o' ? 'Others' : '',
																this.props.is_endorsement && self_edited_fields.length > 0 && (self_edited_fields.indexOf('first_name') != -1 || self_edited_fields.indexOf('middle_name') != -1 || self_edited_fields.indexOf('last_name') != -1 || self_edited_fields.indexOf('gender') != -1 || self_edited_fields.indexOf('title') != -1) ? _react2.default.createElement(
																	'span',
																	{ style: { color: '#757575', 'textTransform': 'none' } },
																	' (edited)'
																) : ''
															) : _react2.default.createElement(
																'p',
																{ style: { 'textTransform': 'capitalize' } },
																self_profile.name,
																' ',
																self_profile.middle_name,
																' ',
																self_profile.last_name,
																' | ',
																self_profile.gender == 'm' ? 'Male' : self_profile.gender == 'f' ? 'Female' : self_profile.gender == 'o' ? 'Others' : '',
																this.props.is_endorsement && self_edited_fields.length > 0 && (self_edited_fields.indexOf('first_name') != -1 || self_edited_fields.indexOf('middle_name') != -1 || self_edited_fields.indexOf('last_name') != -1 || self_edited_fields.indexOf('gender') != -1 || self_edited_fields.indexOf('title') != -1) ? _react2.default.createElement(
																	'span',
																	{ style: { color: '#757575', 'textTransform': 'none' } },
																	' (edited)'
																) : ''
															)
														),
														_react2.default.createElement(
															'li',
															null,
															_react2.default.createElement(
																'div',
																{ className: 'img-list-width' },
																_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/calendar-01.svg" })
															),
															_react2.default.createElement(
																'p',
																null,
																self_profile.dob,
																this.props.is_endorsement && self_edited_fields.length > 0 && self_edited_fields.indexOf('dob') != -1 ? _react2.default.createElement(
																	'span',
																	{ style: { color: '#757575', 'textTransform': 'none' } },
																	' (edited)'
																) : ''
															)
														),
														_react2.default.createElement(
															'li',
															null,
															_react2.default.createElement(
																'div',
																{ className: 'img-list-width' },
																_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/mail-01.svg" })
															),
															_react2.default.createElement(
																'p',
																null,
																self_profile.email,
																this.props.is_endorsement && self_edited_fields.length > 0 && self_edited_fields.indexOf('email') != -1 ? _react2.default.createElement(
																	'span',
																	{ style: { color: '#757575', 'textTransform': 'none' } },
																	' (edited)'
																) : ''
															)
														),
														_react2.default.createElement(
															'li',
															null,
															_react2.default.createElement(
																'div',
																{ className: 'img-list-width' },
																_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/location-01.svg" })
															),
															_react2.default.createElement(
																'p',
																{ style: { 'textTransform': 'capitalize' } },
																`${self_profile.address}, ${self_profile.town}, ${self_profile.district}, ${self_profile.state} - ${self_profile.pincode}`,
																this.props.is_endorsement && self_edited_fields.length > 0 && (self_edited_fields.indexOf('address') != -1 || self_edited_fields.indexOf('town') != -1 || self_edited_fields.indexOf('district') != -1 || self_edited_fields.indexOf('state') != -1 || self_edited_fields.indexOf('pincode') != -1) ? _react2.default.createElement(
																	'span',
																	{ style: { color: '#757575', 'textTransform': 'none' } },
																	' (edited)'
																) : ''
															)
														)
													)
												),
												family_profile.map((val, key) => {
													return _react2.default.createElement(
														'div',
														{ key: key, className: 'ins-sub-forms sub-input-forms-containers' },
														_react2.default.createElement('hr', { className: 'ins-internal-hr' }),
														_react2.default.createElement(
															'div',
															{ className: 'ins-user-details-lisitng' },
															_react2.default.createElement(
																'p',
																{ className: 'sub-form-hed' },
																'Member ',
																key + 1,
																' '
															),
															_react2.default.createElement(
																'div',
																{ className: 'members-container-padding pl-0' },
																_react2.default.createElement(
																	'div',
																	{ className: 'row' },
																	_react2.default.createElement(
																		'div',
																		{ className: 'col-6' },
																		_react2.default.createElement(
																			'div',
																			{ className: 'members-listings' },
																			_react2.default.createElement(
																				'div',
																				{ className: 'member-list-width' },
																				_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/hands-01.svg" })
																			),
																			_react2.default.createElement(
																				'p',
																				{ style: { 'textTransform': 'capitalize' } },
																				val.relation
																			)
																		)
																	),
																	_react2.default.createElement(
																		'div',
																		{ className: 'col-6' },
																		_react2.default.createElement(
																			'div',
																			{ className: 'members-listings' },
																			_react2.default.createElement(
																				'div',
																				{ className: 'member-list-width' },
																				_react2.default.createElement('img', { style: { width: '19px' }, className: 'ins-input-img', src: "/assets" + "/img/user-01.svg" })
																			),
																			val.no_lname ? _react2.default.createElement(
																				'p',
																				{ style: { 'textTransform': 'capitalize' } },
																				val.name,
																				' | ',
																				val.gender == 'm' ? 'Male' : val.gender == 'f' ? 'Female' : val.gender == 'o' ? 'Others' : '',
																				this.props.is_endorsement && this.props.data.edited_fields[val.id] && (this.props.data.edited_fields[val.id].indexOf('first_name') > -1 || this.props.data.edited_fields[val.id].indexOf('middle_name') > -1 || this.props.data.edited_fields[val.id].indexOf('last_name') > -1 || this.props.data.edited_fields[val.id].indexOf('gender') > -1 || this.props.data.edited_fields[val.id].indexOf('title') > -1) ? _react2.default.createElement(
																					'span',
																					{ style: { color: '#757575', 'textTransform': 'none' } },
																					' (edited)'
																				) : ''
																			) : _react2.default.createElement(
																				'p',
																				{ style: { 'textTransform': 'capitalize' } },
																				val.name,
																				' ',
																				val.middle_name,
																				' ',
																				val.last_name,
																				' | ',
																				val.gender == 'm' ? 'Male' : val.gender == 'f' ? 'Female' : val.gender == 'o' ? 'Others' : '',
																				this.props.is_endorsement && this.props.data.edited_fields[val.id] && (this.props.data.edited_fields[val.id].indexOf('first_name') > -1 || this.props.data.edited_fields[val.id].indexOf('middle_name') > -1 || this.props.data.edited_fields[val.id].indexOf('last_name') > -1 || this.props.data.edited_fields[val.id].indexOf('gender') > -1 || this.props.data.edited_fields[val.id].indexOf('title') > -1) ? _react2.default.createElement(
																					'span',
																					{ style: { color: '#757575', 'textTransform': 'none' } },
																					' (edited)'
																				) : ''
																			)
																		)
																	),
																	_react2.default.createElement(
																		'div',
																		{ className: 'col-6' },
																		_react2.default.createElement(
																			'div',
																			{ className: 'members-listings' },
																			_react2.default.createElement(
																				'div',
																				{ className: 'member-list-width' },
																				_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/calendar-01.svg" })
																			),
																			_react2.default.createElement(
																				'p',
																				null,
																				val.dob,
																				this.props.is_endorsement && this.props.data.edited_fields[val.id] && this.props.data.edited_fields[val.id].indexOf('dob') > -1 ? _react2.default.createElement(
																					'span',
																					{ style: { color: '#757575', 'textTransform': 'none' } },
																					' (edited)'
																				) : ''
																			)
																		)
																	)
																)
															)
														)
													);
												})
											)
										)
									)
								),
								_storage2.default.isAgent() ? _react2.default.createElement(
									'button',
									{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.sendAgentBookingURL.bind(this) },
									'Send SMS (\u20B9 ',
									this.state.selected_plan_price,
									')',
									_react2.default.createElement(
										'span',
										{ className: 'foot-btn-sub-span' },
										this.state.gst
									)
								) : _react2.default.createElement(
									'button',
									{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this) },
									this.props.is_endorsement ? 'Submit' : `Pay Now (₹${this.state.selected_plan_price})`,
									this.props.is_endorsement ? '' : _react2.default.createElement(
										'span',
										{ className: 'foot-btn-sub-span' },
										this.state.gst
									)
								)
							),
							_react2.default.createElement(_ChatPanel2.default, null)
						)
					),
					this.state.paymentData ? _react2.default.createElement(_paymentForm2.default, { paymentData: this.state.paymentData, refs: 'opd' }) : ""
				);
			} else {
				return _react2.default.createElement('div', null);
			}
		}
	}

}

exports.default = InsuranceReview;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceReview.js":
/*!********************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceReview.js ***!
  \********************************************************/
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

var _insuranceReview = __webpack_require__(/*! ../../components/insurance/insuranceReview.js */ "./dev/js/components/insurance/insuranceReview.js");

var _insuranceReview2 = _interopRequireDefault(_insuranceReview);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class InsuranceReview extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            is_endorsement: false,
            isAgent: false
        };
    }
    componentDidMount() {
        let self = this;
        let parsed = queryString.parse(this.props.location.search);
        if (parsed.is_endorsement) {
            this.props.getInsurance(true, response => {
                // to get insurance plans
                if (!response.certificate) {
                    this.props.retrieveEndorsedData(resp => {
                        // to retrieve user endorsement data (if user want's to update any of details in there policy details)
                        this.setState({ data: resp.data, is_endorsement: true, isAgent: parsed.isAgent });
                    });
                }
            });
        } else {
            this.props.getInsurance(false, response => {
                if (!response.certificate) {
                    this.props.retrieveUserData(resp => {
                        // to retrieve user data in case of agent has loggedin instead of user 
                        if (resp && !resp.error) {
                            this.props.resetUserInsuredData(resp.data); // to reset the insurance store to initial state
                            this.setState({ data: resp.data });
                        }
                    });
                }
            });
        }
    }
    render() {
        if (this.props.LOAD_INSURANCE && this.state.data) {
            return _react2.default.createElement(_insuranceReview2.default, _extends({}, this.props, { data: this.state.data, is_endorsement: this.state.is_endorsement, isAgent: this.state.isAgent }));
        } else {
            if (this.props.insurnaceData.certificate && _storage2.default.checkAuth()) {
                // if user is already an insurance customer so redirect on insured dashboard page
                this.props.history.push('/insurance/certificate');
            }
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
                _react2.default.createElement(_Loader2.default, null)
            );
        }
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { insurnaceData, LOAD_INSURANCE, selected_plan, self_data_values, create_payment_resp, currentSelectedInsuredMembersId, members_proofs } = state.INSURANCE;
    return {
        insurnaceData, LOAD_INSURANCE, selected_plan, USER, self_data_values, create_payment_resp, currentSelectedInsuredMembersId, members_proofs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getInsurance: (is_endorsement, callback) => dispatch((0, _index.getInsurance)(is_endorsement, callback)),
        // getUserProfile: () => dispatch(getUserProfile()),
        // selectInsurancePlan: (plan,criteria,forceadd) => dispatch(selectInsurancePlan(plan,criteria,forceadd)),
        // userData :(self_data,criteria,forceadd) => dispatch(userData(self_data,criteria,forceadd)),
        insurancePay: (criteria, callback) => dispatch((0, _index.insurancePay)(criteria, callback)),
        resetSelectedInsuranceMembers: () => dispatch((0, _index.resetSelectedInsuranceMembers)()),
        retrieveUserData: cb => dispatch((0, _index.retrieveUserData)(cb)),
        sendAgentBookingURL: (orderId, type, purchase_type, query_data, extraParams, cb) => dispatch((0, _index.sendAgentBookingURL)(orderId, type, purchase_type, query_data, extraParams, cb)),
        resetUserInsuredData: criteria => dispatch((0, _index.resetUserInsuredData)(criteria)),
        retrieveEndorsedData: cb => dispatch((0, _index.retrieveEndorsedData)(cb)),
        createEndorsementData: (insurance_pay, cb) => dispatch((0, _index.createEndorsementData)(insurance_pay, cb))

    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceReview);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9wYXltZW50Rm9ybS9QYXltZW50Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3BheW1lbnRGb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2luc3VyYW5jZS9pbnN1cmFuY2VDb21tb25TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2luc3VyYW5jZS9pbnN1cmFuY2VSZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvaW5zdXJhbmNlL0luc3VyYW5jZVJldmlldy5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIlBheW1lbnRGb3JtIiwic3RhdGUiLCJzZW5kRXZlbnQiLCJyZWZzIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0UGF5bWVudE5vZGVOYW1lIiwibmFtZSIsImluZGV4IiwicGF5bWVudERhdGEiLCJDT05GSUciLCJQR19NVUxUSV9PUkRFUl9VUkwiLCJQR19VUkwiLCJkaXNwbGF5IiwibWFwIiwiaXRlbSIsImkiLCJJbnN1cmFuY2VDb21tb24iLCJzZWxlY3RlZFByb2ZpbGUiLCJzZWxlY3RlZF9wbGFuX3ByaWNlIiwidG9nZ2xlIiwic2VsZiIsInNldFN0YXRlIiwiVVNFUiIsImRlZmF1bHRQcm9maWxlIiwic2VsZWN0ZWRfcGxhbiIsImFtb3VudCIsInNlbGZfZGF0YV92YWx1ZXMiLCJpbnN1cm5hY2VEYXRhIiwibG9nbyIsImluc3VyZXJfZG9jdW1lbnQiLCJBU1NFVFNfQkFTRV9VUkwiLCJpc1NlbGVjdFBsYW4iLCJwYWRkaW5nIiwiY3Vyc29yIiwicGFkZGluZ0xlZnQiLCJpc19lZGl0IiwiaGlzdG9yeSIsInB1c2giLCJJbnN1cmFuY2VSZXZpZXciLCJnc3QiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInByb2NlZWRQbGFuIiwic3VjY2Vzc19pZCIsImluc3VyYW5jZV9wYXkiLCJpc0R1bW15VXNlciIsImluc3VyYW5jZV9wbGFuIiwiaWQiLCJpbnN1cmVyIiwibWVtYmVycyIsInNlbGVjdGVkVXNlciIsImFkZHJlc3MiLCJlbWFpbCIsInBpbmNvZGUiLCJ0b3duIiwiZGlzdHJpY3QiLCJzdGF0ZV9jb2RlIiwiY2l0eV9jb2RlIiwiZGlzdHJpY3RfY29kZSIsImVuZG9yc2VkU2VsZiIsImlzX2NoYW5nZSIsInByb2ZpbGVzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRvd25fY29kZSIsImlzX2VuZG9yc2VtZW50IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwicmVsYXRpb24iLCJjdXJyZW50U2VsZWN0ZWRQcm9maWxlcyIsImN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQiLCJ2YWwiLCJpc19tZW1iZXJfdXBkYXRlZCIsImltYWdlX2lkcyIsInBhcmFtIiwidGl0bGUiLCJub19sbmFtZSIsIm1pZGRsZV9uYW1lIiwibGFzdF9uYW1lIiwibWVtYmVyc19wcm9vZnMiLCJmaWx0ZXIiLCJ4IiwiaW1nX3BhdGhfaWRzIiwiaW1nSWQiLCJtZW1iZXIiLCJmaXJzdF9uYW1lIiwiZG9iIiwibWVtYmVyX3R5cGUiLCJnZW5kZXIiLCJwcm9maWxlIiwicHJvZmlsZV9pZCIsInVzZXJfZm9ybV9pZCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbmRvcnNlbWVudERhdGEiLCJyZXNwIiwic3VjY2VzcyIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJlcnJvciIsInJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzIiwiaW5zdXJhbmNlUGF5IiwiY2VydGlmaWNhdGUiLCJwYXltZW50X3JlcXVpcmVkIiwicHJvY2Vzc1BheW1lbnQiLCJzZW5kQWdlbnRCb29raW5nVVJMIiwic21zX3R5cGUiLCJpc0FnZW50IiwiZXh0cmFQYXJhbXMiLCJlcnIiLCJyZXMiLCJzdGF0dXMiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcm0iLCJzdWJtaXQiLCJzZWxmX3Byb2ZpbGUiLCJmYW1pbHlfcHJvZmlsZSIsInNlbGZfZWRpdGVkX2ZpZWxkcyIsImVkaXRlZF9maWVsZHMiLCJjb2xvciIsImZsb2F0IiwiaW5kZXhPZiIsIndpZHRoIiwiU1RPUkFHRSIsImJpbmQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiZ2V0SW5zdXJhbmNlIiwicmVzcG9uc2UiLCJyZXRyaWV2ZUVuZG9yc2VkRGF0YSIsInJldHJpZXZlVXNlckRhdGEiLCJyZXNldFVzZXJJbnN1cmVkRGF0YSIsIkxPQURfSU5TVVJBTkNFIiwiY2hlY2tBdXRoIiwibWFwU3RhdGVUb1Byb3BzIiwiY3JlYXRlX3BheW1lbnRfcmVzcCIsIklOU1VSQU5DRSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2FsbGJhY2siLCJjcml0ZXJpYSIsImNiIiwib3JkZXJJZCIsInR5cGUiLCJwdXJjaGFzZV90eXBlIiwicXVlcnlfZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsZ0JBQU1DLFNBQTNCLENBQXFDO0FBQ2pDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMsYUFBUzs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVcsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLElBQXdCLGdC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TUFBTWtFLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3JDLFdBQU87QUFDSFgsc0JBQWMsQ0FBQ3ZFLGNBQUQsRUFBZ0JtRixRQUFoQixLQUE2QkQsU0FBUyx5QkFBYWxGLGNBQWIsRUFBNEJtRixRQUE1QixDQUFULENBRHhDO0FBRUg7QUFDQTtBQUNBO0FBQ0E1QyxzQkFBYyxDQUFDNkMsUUFBRCxFQUFVRCxRQUFWLEtBQXVCRCxTQUFTLHlCQUFhRSxRQUFiLEVBQXNCRCxRQUF0QixDQUFULENBTGxDO0FBTUg3Qyx1Q0FBK0IsTUFBTTRDLFNBQVMsMkNBQVQsQ0FObEM7QUFPSFIsMEJBQWtCVyxFQUFELElBQU9ILFNBQVMsNkJBQWlCRyxFQUFqQixDQUFULENBUHJCO0FBUUgxQyw2QkFBcUIsQ0FBQzJDLE9BQUQsRUFBVUMsSUFBVixFQUFnQkMsYUFBaEIsRUFBOEJDLFVBQTlCLEVBQTBDM0MsV0FBMUMsRUFBdUR1QyxFQUF2RCxLQUE4REgsU0FBUyxnQ0FBb0JJLE9BQXBCLEVBQTZCQyxJQUE3QixFQUFrQ0MsYUFBbEMsRUFBZ0RDLFVBQWhELEVBQTJEM0MsV0FBM0QsRUFBd0V1QyxFQUF4RSxDQUFULENBUmhGO0FBU0hWLDhCQUFzQlMsUUFBRCxJQUFhRixTQUFTLGlDQUFxQkUsUUFBckIsQ0FBVCxDQVQvQjtBQVVIWCw4QkFBc0JZLEVBQUQsSUFBT0gsU0FBUyxpQ0FBcUJHLEVBQXJCLENBQVQsQ0FWekI7QUFXSHZELCtCQUFzQixDQUFDcEQsYUFBRCxFQUFlMkcsRUFBZixLQUFxQkgsU0FBUyxrQ0FBc0J4RyxhQUF0QixFQUFvQzJHLEVBQXBDLENBQVQ7O0FBWHhDLEtBQVA7QUFjSCxDQWZEOztrQkFtQmUseUJBQVFQLGVBQVIsRUFBMEJHLGtCQUExQixFQUE4QzdHLGVBQTlDLEMiLCJmaWxlIjoiNjAuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cblxuY2xhc3MgUGF5bWVudEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2VuZEV2ZW50KCkge1xuICAgICAgICBsZXQgcmVmcyA9IHRoaXMucHJvcHMucmVmc1xuICAgICAgICBpZiAocmVmcykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb250aW51ZUNsaWNrZWQnLCAncGFnZVNvdXJjZSc6IHJlZnMsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb250aW51ZUNsaWNrZWQnLCAncGFnZVNvdXJjZSc6ICdVTktOT1dOJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29udGludWUtY2xpY2tlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZW5kRXZlbnQoKVxuICAgIH1cblxuICAgIGdldFBheW1lbnROb2RlTmFtZShuYW1lLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gYCR7bmFtZX1bJHtpbmRleH1dYFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBsZXQgZGF0YSA9IHsgXCJwYXltZW50TW9kZVwiOiBcIkNDXCIsIFwicmVzcG9uc2VDb2RlXCI6IFwiMjI3XCIsIFwiYmFua1R4SWRcIjogXCJcIiwgXCJ0eERhdGVcIjogXCJKdW4gNCwgMjAxOCAxMjoxMDoyMyBQTVwiLCBcImJhbmtOYW1lXCI6IFwiU0JJXCIsIFwic3RhdHVzTXNnXCI6IFwiT29wcyBhbiBlcnJvciBvY2N1cnJlZC4gV2Ugd2lsbCBnZXQgYmFjayB0byB5b3UhXCIsIFwiY3VycmVuY3lcIjogXCJJTlJcIiwgXCJzdGF0dXNDb2RlXCI6IDEsIFwicGdHYXRld2F5TmFtZVwiOiBcIk1PQ0tcIiwgXCJyZXNwb25zZU1lc3NhZ2VcIjogXCJZb3VyIHBheW1lbnQgaGFzIGJlZW4gZGVjbGluZWQgYnkgeW91ciBiYW5rLiBQbGVhc2UgY29udGFjdCB5b3VyIGJhbmsgZm9yIGFueSBxdWVyaWVzLiBJZiBtb25leSBoYXMgYmVlbiBkZWR1Y3RlZCBmcm9tIHlvdXIgYWNjb3VudCwgeW91ciBiYW5rIHdpbGwgaW5mb3JtIHVzIHdpdGhpbiA0OCBocnMgYW5kIHdlIHdpbGwgcmVmdW5kIHRoZSBzYW1lXCIsIFwidHhTdGF0dXNcIjogXCJUWE5fRkFJTFVSRVwiLCBcImN1c3RvbWVySWRcIjogNTEsIFwib3JkZXJOb1wiOiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ10sIFwic3RhdHVzU2hvcnRNc2dcIjogXCJPdGhlcnNcIiwgXCJlbWFpbFwiOiBcImR1bW15X2FwcG9pbnRtZW50QHBvbGljeWJhemFhci5jb21cIiwgXCJwYkdhdGV3YXlOYW1lXCI6IFwicGF5dG1cIiwgXCJtb2JpbGVcIjogXCI5OTk5OTk5OTk3XCIsIHByb2R1Y3RJZDogdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncHJvZHVjdElkJ10gfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZlcmVuY2VJZCddKSB7XG4gICAgICAgIC8vICAgICBkYXRhWydyZWZlcmVuY2VJZCddID0gdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gZGF0YVsncGdUeElkJ10gPSB0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ11cbiAgICAgICAgLy8gZGF0YSA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInBheW1lbnRGb3JtXCIgcmVmPVwicGF5bWVudEZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPXt0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2lzX3NpbmdsZV9mbG93J10/Q09ORklHLlBHX01VTFRJX09SREVSX1VSTDpDT05GSUcuUEdfVVJMfSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2lzX3NpbmdsZV9mbG93J10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpdGVtcyddLm1hcCgoaXRlbSwgaSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ25hbWUnLCBpKX0gaWQ9e2l0ZW1bJ25hbWUnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWyduYW1lJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ3Byb2R1Y3RJZCcsIGkpfSBpZD17aXRlbVsncHJvZHVjdElkJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsncHJvZHVjdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ3R4QW1vdW50JywgaSl9IGlkPXtpdGVtWyd0eEFtb3VudCddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ3R4QW1vdW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ29yZGVySWQnLCBpKX0gaWQ9e2l0ZW1bJ29yZGVySWQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydvcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ2hvbGRQYXltZW50JywgaSl9ICBpZD17aXRlbVsnaG9sZFBheW1lbnQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydob2xkUGF5bWVudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSAmJiBpdGVtWydpbnN1cmVyQ29kZSddP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgnaW5zdXJlckNvZGUnLCBpKX0gaWQ9e2l0ZW1bJ2luc3VyZXJDb2RlJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsnaW5zdXJlckNvZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6PFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWyduYW1lJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2R1Y3RJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncHJvZHVjdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR4QW1vdW50XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWyd0eEFtb3VudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJvcmRlcklkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImhvbGRQYXltZW50XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydob2xkUGF5bWVudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpbnN1cmVyQ29kZSddP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5zdXJlckNvZGVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2luc3VyZXJDb2RlJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjdXN0SWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2N1c3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibW9iaWxlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydtb2JpbGUnXX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2VtYWlsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdXJsXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydzdXJsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmdXJsXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydmdXJsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZWZlcmVuY2VJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaGFzaFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaGFzaCddfSAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlzUHJlQXV0aFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaXNQcmVBdXRoJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGF5dG1Nc2cnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXl0bU1zZ1wiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGF5dG1Nc2cnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY291cG9uQ29kZSddID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291cG9uQ29kZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY291cG9uQ29kZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaXNjb3VudGVkQW1udFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnZGlzY291bnRlZEFtbnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291cG9uUGdNb2RlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydjb3Vwb25QZ01vZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVySWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZWZPcmRlcklkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZPcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmT3JkZXJObyddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlZk9yZGVyTm9cIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVyTm8nXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydwYXJlbnRQcm9kdWN0SWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXJlbnRQcm9kdWN0SWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3BhcmVudFByb2R1Y3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG5cbiAgICAgICAgICAgICAgICB7LyogPGZvcm0gaWQ9XCJwYXltZW50Rm9ybVwiIHJlZj1cInBheW1lbnRGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj17YCR7Q09ORklHLkFQSV9CQVNFX1VSTH0vYXBpL3YxL3VzZXIvdHJhbnNhY3Rpb24vc2F2ZWB9IHN0eWxlPXt7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicmVzcG9uc2VcIiBkZWZhdWx0VmFsdWU9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPiAqL31cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRGb3JtXG4iLCJpbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi9QYXltZW50Rm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudEZvcm0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEluc3VyYW5jZUNvbW1vbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIFx0c2VsZWN0ZWRQcm9maWxlOicnLFxuICAgICAgICBcdHNlbGVjdGVkX3BsYW5fcHJpY2U6JycsXG4gICAgICAgIFx0dG9nZ2xlOiAnb25lJ1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBcdGxldCBzZWxmID0gdGhpc1xuICAgIFx0dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRQcm9maWxlOnRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSwgc2VsZWN0ZWRfcGxhbl9wcmljZTp0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYW1vdW50LCAuLi5zZWxmLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXX0pXG4gICAgfVxuXHRyZW5kZXIoKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1jYXJkLWhlYWRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLW5hbWUtaGVhZC1kaXYgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgd2lkdGg9XCIxMjBcIiBzcmM9e3RoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0ubG9nb30gLz5cblx0XHRcdFx0XHRcdFx0ey8qPHA+XG5cdFx0XHRcdFx0XHRcdFx0T1BEIEluc3VyYW5jZSBieSA8c3Bhbj57dGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5uYW1lfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9wPiovfVxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0R3JvdXAgT3V0LXBhdGllbnQgSW5zdXJhbmNlXG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtcGRmLWR3bmxvYWQtZGl2IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17dGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5pbnN1cmVyX2RvY3VtZW50fSBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIiA+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcGRmLWR3bi5wbmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj5cblx0XHRcdFx0XHRcdFx0XHRQb2xpY3kgRGV0YWlsc1xuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQhdGhpcy5wcm9wcy5pc1NlbGVjdFBsYW4/XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtMFwiIHN0eWxlPXt7cGFkZGluZzonMCA0cHggMTBweCd9fSA+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGlucy1mb3JtLWluZm8gYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTBcIj5Db3ZlcmFnZSAoMSBZZWFyKTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+e3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggaW5zLWZvcm0taW5mbyBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi0xMFwiPkFubnVhbCBQcmVtaXVtPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDBcIj7igrkge3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5hbW91bnR9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtcnQtMTBcIiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcicsIHBhZGRpbmdMZWZ0OjV9fSBvbkNsaWNrPXsoKT0+e3RoaXMucHJvcHMuaXNfZWRpdD90aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtcGxhbi12aWV3Jyk6dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXVzZXItZGV0YWlscycpfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1wcmltYXJ5XCI+e3RoaXMucHJvcHMuaXNfZWRpdD8nU2VsZWN0IGFub3RoZXIgcGxhbic6J0VkaXQnfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+IDogJydcblx0XHRcdFx0XHRcdFx0Ly8gPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIGluc3VyYW5jZS10YmwgaW5zdXJhbmNlLWNoZWNrYm94ZXNcIj5cblx0XHRcdFx0XHRcdC8vIFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdDx0cj5cblx0XHRcdFx0XHRcdC8vIFx0XHRcdDx0aCBjbGFzc05hbWU9XCJ0YmwtZmlyc3QtaGVhZFwiPjxwPkNvdmVyYWdlICgxIFllYXIpPC9wPjwvdGg+XG5cdFx0XHRcdFx0XHQvLyBcdFx0XHQ8dGggY2xhc3NOYW1lPVwidGJsLXNlY29uZC1oZWFkXCI+PHA+QW5udWFsIFByZW1pdW08L3A+PC90aD5cblx0XHRcdFx0XHRcdC8vIFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0Ly8gXHQ8L3RoZWFkPlxuXHRcdFx0XHRcdFx0Ly8gXHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHQvLyBcdFx0PHRyPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0PHRkPjxwIGNsYXNzTmFtZT1cImlucy1kdGxzLW1lbWJlcnMtZWRpdFwiPnt0aGlzLnByb3BzLmlzX2VkaXQ/J0NoYW5nZSBJbnN1cmVkIFBsYW4nOidJbnN1cmVkIE1lbWJlciBEZXRhaWxzJ30gICBcblx0XHRcdFx0XHRcdC8vIFx0XHRcdDxzcGFuIHN0eWxlPXt7ICdjdXJzb3InOiAncG9pbnRlcicgfX0gb25DbGljaz17KCk9Pnt0aGlzLnByb3BzLmlzX2VkaXQ/dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXBsYW5zJyk6dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXVzZXItZGV0YWlscycpfX0+RURJVFxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0PC9zcGFuPjwvcD48L3RkPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0PHRkPjwvdGQ+XG5cdFx0XHRcdFx0XHQvLyBcdFx0PC90cj5cblx0XHRcdFx0XHRcdC8vIFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHQvLyBcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQvLyBcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIGh0bWxmb3JtPVwidGVzdDExXCIgc3R5bGU9e3snZm9udFdlaWdodCc6ICc0MDAnLCAnZm9udFNzaXplJzogJzE0J319Pnt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4ubmFtZX1cblx0XHRcdFx0XHRcdC8vIFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRlZmF1bHRDaGVja2VkIGNsYXNzTmFtZT1cImlucy1jaGstYnhcIiB2YWx1ZT1cIlwiIGlkPVwidGVzdDExXCIgbmFtZT1cImZydWl0LTFcIiAvPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+PC9sYWJlbD5cblx0XHRcdFx0XHRcdC8vIFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIFx0XHRcdDx0ZD48c3Bhbj7igrkge3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5hbW91bnR9PC9zcGFuPjwvdGQ+XG5cdFx0XHRcdFx0XHQvLyBcdFx0PC90cj5cblx0XHRcdFx0XHRcdC8vIFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdC8vIDwvdGFibGU+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHsvKlxuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pc1NlbGVjdFBsYW4/XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1zd2ljaC10YWJzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy10YWJzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIG9uQ2xpY2s9eygpPT4gdGhpcy5zZXRTdGF0ZSh7dG9nZ2xlOidvbmUnfSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3RoaXMuc3RhdGUudG9nZ2xlID09IFwib25lXCI/J2FjdGl2ZSc6J2lucy10YWItaW5hY3RpdmUnfSA+U2FsaWVudCBGZWF0dXJlczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgb25DbGljaz17KCk9PiB0aGlzLnNldFN0YXRlKHt0b2dnbGU6J3R3byd9KX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS50b2dnbGUgPT0gXCJ0d29cIj8nYWN0aXZlICc6J2lucy10YWItaW5hY3RpdmUnfSA+V2hhdCdzIG5vdCBDb3ZlcmVkPzwvcD48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy10YWJzLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbToxMH19Plx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUudG9nZ2xlID09IFwib25lXCI/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5wbGFucykuZmlsdGVyKHg9PnguaWQ9PXRoaXMucHJvcHMuaXNfY2hlY2tlZCkubWFwKChzZWxlY3RlZF9wbGFuLGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKDx1bCBrZXk9e2l9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZF9wbGFuLmNvbnRlbnRbJ3NhbGllbnRfZmVhdHVyZXMnXS5tYXAoKHJlc3VsdCwgaSkgPT4geyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxsaSBrZXk9e2l9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57cmVzdWx0fTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT59KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPilcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDpPYmplY3QudmFsdWVzKHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0ucGxhbnMpLmZpbHRlcih4PT54LmlkPT10aGlzLnByb3BzLmlzX2NoZWNrZWQpLm1hcCgoc2VsZWN0ZWRfcGxhbixpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICg8dWwga2V5PXtpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2VsZWN0ZWRfcGxhbi5jb250ZW50Wyd3aGF0c19ub3RfY292ZXJlZCddLm1hcCgocmVzdWx0LCBpKSA9PiB7IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8bGkga2V5PXtpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57cmVzdWx0fTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPn0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD4pXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KSBcblx0XHRcdFx0XHRcdFx0ICAgICAgICB9XG5cdFx0XHRcdFx0XHRcdCAgICAgICAge3RoaXMuc3RhdGUudG9nZ2xlID09ICdvbmUnP1xuXHRcdFx0XHRcdFx0XHQgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxhbGlnbkl0ZW1zOidjZW50ZXInLGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJ319PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBzdHlsZT17e3BhZGRpbmdMZWZ0OiAnMTJweCcsZm9udFdlaWdodDogJzUwMCcsZm9udFNpemU6ICcxMnB4Jyxjb2xvcjonI2Y3ODYzMScsdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLGN1cnNvcjogJ3BvaW50ZXInfX0gaHJlZj17dGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5pbnN1cmVyX2RvY3VtZW50fSBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIiBpZD1cInRlcm1zX2NvbmRpdGlvblwiPlQmQyBhcHBseTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgc3R5bGU9e3twYWRkaW5nUmlnaHQ6ICcxMnB4Jyxmb250V2VpZ2h0OiAnNTAwJyxmb250U2l6ZTogJzEycHgnLGNvbG9yOicjZjc4NjMxJyx0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsY3Vyc29yOiAncG9pbnRlcid9fSBocmVmPScvaW5zdXJhbmNlL25ldHdvcmsnIG9uQ2xpY2s9eyhlKT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9uZXR3b3JrJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+VmlldyBOZXR3b3JrPC9hPlxuXHRcdFx0XHRcdFx0XHQgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQgICAgICAgIDonJ1xuXHRcdFx0XHRcdFx0XHQgICAgICAgIH1cdFxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2Plx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdCovfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtc3RhdHVzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9tZW51XCIgaWQ9XCJcIj5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX3RhYnNcIiBpZD1cIlwiPlxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidGFiX2luYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5DaG9vc2UgWW91ciBQbGFuPC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmlzU2VsZWN0UGxhbj8nJzondGFiX2luYWN0aXZlJ30+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5GaWxsIE1lbWJlciBEZXRhaWxzPC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidGFiX2Rpc2FibGVkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5QYXltZW50PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj4pXHRcblx0XHRcdH1cbn1cbmV4cG9ydCBkZWZhdWx0IEluc3VyYW5jZUNvbW1vbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDaGF0UGFuZWwgZnJvbSAnLi4vY29tbW9ucy9DaGF0UGFuZWwnXG5pbXBvcnQgSW5zdXJDb21tb24gZnJvbSAnLi9pbnN1cmFuY2VDb21tb25TZWN0aW9uLmpzJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi9jb21tb25zL3BheW1lbnRGb3JtJ1xuXG5jbGFzcyBJbnN1cmFuY2VSZXZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBcdHNlbGVjdGVkUHJvZmlsZTonJyxcbiAgICAgICAgXHRzZWxlY3RlZF9wbGFuX3ByaWNlOicnLFxuICAgICAgICBcdGlzX2VkaXQ6ZmFsc2UsXG4gICAgICAgIFx0Z3N0OiAnaW5jbHVzaXZlIG9mIDE4JSBHU1QnLFxuICAgICAgICAgICAgcGF5bWVudERhdGE6IG51bGxcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIFx0aWYod2luZG93KXtcbiAgICBcdFx0d2luZG93LnNjcm9sbFRvKDAsMClcbiAgICBcdH1cbiAgICBcdGxldCBzZWxmID0gdGhpc1xuICAgIFx0dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRQcm9maWxlOnRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSwgc2VsZWN0ZWRfcGxhbl9wcmljZTp0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYW1vdW50LCAuLi5zZWxmLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXX0pICBcbiAgICB9XG4gICAgcHJvY2VlZFBsYW4oKXtcbiAgICBcdGxldCBzdWNjZXNzX2lkXG4gICAgXHR2YXIgaW5zdXJhbmNlX3BheT17fVxuICAgIFx0Ly8gaW5zdXJhbmNlX3BheS5wcm9maWxlPTFcbiAgICBcdGxldCBpc0R1bW15VXNlclxuICAgIFx0aW5zdXJhbmNlX3BheS5pbnN1cmFuY2VfcGxhbj10aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uaWRcbiAgICBcdGluc3VyYW5jZV9wYXkuaW5zdXJlcj0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5pZFxuICAgIFx0aW5zdXJhbmNlX3BheS5tZW1iZXJzPVtdXG4gICAgXHRsZXQgc2VsZWN0ZWRVc2VyID0gdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXG4gICAgXHRsZXQgYWRkcmVzcz0nJ1xuICAgIFx0bGV0IGVtYWlsPScnXG4gICAgXHRsZXQgcGluY29kZSA9ICcnXG4gICAgXHRsZXQgdG93biA9ICcnXG4gICAgXHRsZXQgZGlzdHJpY3QgPSAnJ1xuICAgIFx0bGV0IHN0YXRlID0gJydcbiAgICBcdGxldCBzdGF0ZV9jb2RlID0gJydcbiAgICBcdGxldCBjaXR5X2NvZGUgPSAnJ1xuICAgIFx0bGV0IGRpc3RyaWN0X2NvZGUgPSAnJ1xuICAgIFx0bGV0IGVuZG9yc2VkU2VsZlxuICAgIFx0bGV0IGlzX2NoYW5nZVxuICAgIFx0Ly8gbGV0IHNob3dfbG5hbWVfZmxhZyA9ICcnXG4gICAgXHQvLyBsZXQgaXNEZWZhdWx0VXNlclxuXHRcdGlmKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSl7XG5cdFx0XHQvLyBpc0RlZmF1bHRVc2VyID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNfZGVmYXVsdF91c2VyXG5cdFx0XHRpc0R1bW15VXNlciA9IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzRHVtbXlVc2VyXG5cdFx0fVxuICAgIFx0aWYodGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzICYmIHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1tzZWxlY3RlZFVzZXJdICYmICFpc0R1bW15VXNlcil7XG4gICAgXHRcdGFkZHJlc3MgPSB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbc2VsZWN0ZWRVc2VyXS5hZGRyZXNzXG4gICAgXHRcdGRpc3RyaWN0ID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3NlbGVjdGVkVXNlcl0uZGlzdHJpY3RcbiAgICBcdFx0cGluY29kZSA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1tzZWxlY3RlZFVzZXJdLnBpbmNvZGVcbiAgICBcdFx0ZW1haWwgPSB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbc2VsZWN0ZWRVc2VyXS5lbWFpbFxuICAgIFx0XHR0b3duID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3NlbGVjdGVkVXNlcl0udG93blxuICAgIFx0XHRzdGF0ZSA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1tzZWxlY3RlZFVzZXJdLnN0YXRlXG4gICAgXHRcdHN0YXRlX2NvZGUgPSB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbc2VsZWN0ZWRVc2VyXS5zdGF0ZV9jb2RlXG4gICAgXHRcdGNpdHlfY29kZSA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1tzZWxlY3RlZFVzZXJdLnRvd25fY29kZVxuICAgIFx0XHRkaXN0cmljdF9jb2RlID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3NlbGVjdGVkVXNlcl0uZGlzdHJpY3RfY29kZVxuICAgIFx0XHQvLyBzaG93X2xuYW1lX2ZsYWcgPSB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbc2VsZWN0ZWRVc2VyXS5zaG93X2xuYW1lX2ZsYWdcbiAgICBcdH1lbHNlIGlmKHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlcyAmJiB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbMF0gJiYgaXNEdW1teVVzZXIpe1xuICAgIFx0XHRhZGRyZXNzID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzWzBdLmFkZHJlc3NcbiAgICBcdFx0ZGlzdHJpY3QgPSB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbMF0uZGlzdHJpY3RcbiAgICBcdFx0cGluY29kZSA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXS5waW5jb2RlXG4gICAgXHRcdGVtYWlsID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzWzBdLmVtYWlsXG4gICAgXHRcdHRvd24gPSB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbMF0udG93blxuICAgIFx0XHRzdGF0ZSA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXS5zdGF0ZVxuICAgIFx0XHRzdGF0ZV9jb2RlID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzWzBdLnN0YXRlX2NvZGVcbiAgICBcdFx0Y2l0eV9jb2RlID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzWzBdLnRvd25fY29kZVxuICAgIFx0XHRkaXN0cmljdF9jb2RlID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzWzBdLmRpc3RyaWN0X2NvZGVcbiAgICBcdFx0Ly8gc2hvd19sbmFtZV9mbGFnID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzWzBdLnNob3dfbG5hbWVfZmxhZ1xuICAgIFx0fWVsc2UgaWYodGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzICYmIHRoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQpe1xuICAgIFx0XHRPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMpLm1hcChmdW5jdGlvbihba2V5LCB2YWx1ZV0pIHtcbiAgICBcdFx0XHRpZih2YWx1ZS5yZWxhdGlvbiA9PSAnc2VsZicpe1xuICAgIFx0XHRcdFx0ZW5kb3JzZWRTZWxmID0gdmFsdWVcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0pXG4gICAgXHRcdGFkZHJlc3MgPSBlbmRvcnNlZFNlbGYuYWRkcmVzc1xuICAgIFx0XHRkaXN0cmljdCA9IGVuZG9yc2VkU2VsZi5kaXN0cmljdFxuICAgIFx0XHRkaXN0cmljdF9jb2RlID0gZW5kb3JzZWRTZWxmLmRpc3RyaWN0X2NvZGVcbiAgICBcdFx0cGluY29kZSA9IGVuZG9yc2VkU2VsZi5waW5jb2RlXG4gICAgXHRcdGVtYWlsID0gZW5kb3JzZWRTZWxmLmVtYWlsXG4gICAgXHRcdHRvd24gPSBlbmRvcnNlZFNlbGYudG93blxuICAgIFx0XHRjaXR5X2NvZGUgPSBlbmRvcnNlZFNlbGYudG93bl9jb2RlXG4gICAgXHRcdHN0YXRlID0gZW5kb3JzZWRTZWxmLnN0YXRlXG4gICAgXHRcdHN0YXRlX2NvZGUgPSBlbmRvcnNlZFNlbGYuc3RhdGVfY29kZVxuXG4gICAgXHRcdC8vIHNob3dfbG5hbWVfZmxhZyA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXS5zaG93X2xuYW1lX2ZsYWdcbiAgICBcdH1cblxuXG4gICAgXHR2YXIgbWVtYmVycz17fVxuICAgIFx0bGV0IGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzID0gW11cbiAgICBcdHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZC5tYXAoKHZhbCxrZXkpID0+IHtcbiAgICBcdFx0Y3VycmVudFNlbGVjdGVkUHJvZmlsZXMucHVzaCh2YWxba2V5XSlcbiAgICBcdH0pXG4gICAgXHRsZXQgaXNfbWVtYmVyX3VwZGF0ZWQgPSBbXVxuICAgIFx0bGV0IGltYWdlX2lkcyA9IFtdXG4gICAgXHR7T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG4gICAgXHRcdGltYWdlX2lkcz1bXVxuICAgIFx0XHRsZXQgcGFyYW0gPXRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1t2YWx1ZVtrZXldXVxuXHRcdFx0XHRtZW1iZXJzPXt9XG5cdFx0XHRcdG1lbWJlcnMudGl0bGU9cGFyYW0udGl0bGVcblx0XHRcdFx0aWYocGFyYW0ubm9fbG5hbWUpe1xuXHRcdFx0XHRcdG1lbWJlcnMubWlkZGxlX25hbWU9Jydcblx0XHQgICAgXHRcdG1lbWJlcnMubGFzdF9uYW1lPScnXHRcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0bWVtYmVycy5taWRkbGVfbmFtZT1wYXJhbS5taWRkbGVfbmFtZVxuXHRcdCAgICBcdFx0bWVtYmVycy5sYXN0X25hbWU9cGFyYW0ubGFzdF9uYW1lXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYodGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCl7XG5cdFx0XHRcdFx0aWYodGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcyAmJiB0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmxlbmd0aD4wKXtcblx0XHRcdFx0XHRcdGlzX21lbWJlcl91cGRhdGVkID0gdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5maWx0ZXIoKHg9PnguaWQgPT0gcGFyYW0uaWQpKVxuXHRcdFx0XHRcdFx0aWYoaXNfbWVtYmVyX3VwZGF0ZWQgJiYgaXNfbWVtYmVyX3VwZGF0ZWQubGVuZ3RoID4gMCl7XG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMuaXNfY2hhbmdlPXRydWVcblx0XHRcdFx0XHRcdFx0aWYoaXNfbWVtYmVyX3VwZGF0ZWRbMF0uaW1nX3BhdGhfaWRzLmxlbmd0aCA+IDApe1xuXHRcdFx0XHRcdFx0XHRcdGlzX21lbWJlcl91cGRhdGVkWzBdLmltZ19wYXRoX2lkcy5tYXAoKGltZ0lkLGkpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRpbWFnZV9pZHMucHVzaCh7J2RvY3VtZW50X2ltYWdlJzppbWdJZC5pZH0pXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmltYWdlX2lkcyA9IGltYWdlX2lkc1xuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdG1lbWJlcnMuaXNfY2hhbmdlPWZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1lbWJlcnMuaWQ9cGFyYW0uaWRcblx0XHRcdFx0fVxuXHRcdCAgICBcdG1lbWJlcnMubWVtYmVyID0gcGFyYW0uaWRcblx0XHQgICAgXHRtZW1iZXJzLmZpcnN0X25hbWU9cGFyYW0ubmFtZVxuXHRcdCAgICBcdG1lbWJlcnMuYWRkcmVzcz1hZGRyZXNzXG5cdFx0ICAgIFx0bWVtYmVycy5lbWFpbD1lbWFpbFxuXHRcdCAgICBcdG1lbWJlcnMucGluY29kZT1waW5jb2RlXG5cdFx0ICAgIFx0bWVtYmVycy50b3duPXRvd25cblx0XHQgICAgXHRtZW1iZXJzLmRpc3RyaWN0PWRpc3RyaWN0XG5cdFx0ICAgIFx0bWVtYmVycy5zdGF0ZT1zdGF0ZVxuXHRcdCAgICBcdG1lbWJlcnMuc3RhdGVfY29kZT1zdGF0ZV9jb2RlXG5cdFx0ICAgIFx0bWVtYmVycy5jaXR5X2NvZGU9Y2l0eV9jb2RlXG5cdFx0ICAgIFx0bWVtYmVycy5kaXN0cmljdF9jb2RlPWRpc3RyaWN0X2NvZGVcblx0XHQgICAgXHRtZW1iZXJzLmRvYj1wYXJhbS5kb2Jcblx0XHQgICAgXHRtZW1iZXJzLm1lbWJlcl90eXBlPXBhcmFtLm1lbWJlcl90eXBlXG5cdFx0ICAgIFx0bWVtYmVycy5nZW5kZXI9cGFyYW0uZ2VuZGVyXG5cdFx0ICAgIFx0bWVtYmVycy5wcm9maWxlPXBhcmFtLnByb2ZpbGVfaWRcblx0XHQgICAgXHRtZW1iZXJzLnJlbGF0aW9uPXBhcmFtLnJlbGF0aW9uXG5cdFx0ICAgIFx0bWVtYmVycy51c2VyX2Zvcm1faWQ9cGFyYW0uaWRcblx0XHRcdFx0cmV0dXJuIFx0aW5zdXJhbmNlX3BheS5tZW1iZXJzLnB1c2gobWVtYmVycylcblx0XHQgICAgXG5cdFx0fSx0aGlzKX1cblx0XHRjb25zb2xlLmxvZyhpbnN1cmFuY2VfcGF5KVxuXHRcdGlmKHRoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQpe1xuXHRcdFx0dGhpcy5wcm9wcy5jcmVhdGVFbmRvcnNlbWVudERhdGEoaW5zdXJhbmNlX3BheSwocmVzcCk9PnsgLy8gc3VibWl0IGVuZG9yZXNtZW50IGRhdGFcblx0XHRcdFx0aWYocmVzcCAmJiByZXNwLnN1Y2Nlc3Mpe1xuXHRcdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogcmVzcC5zdWNjZXNzfSlcblx0XHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9jZXJ0aWZpY2F0ZScpXG5cdFx0XHRcdH1lbHNlIGlmKHJlc3AuZXJyb3Ipe1xuXHRcdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogcmVzcC5lcnJvciB9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5wcm9wcy5yZXNldFNlbGVjdGVkSW5zdXJhbmNlTWVtYmVycygpIC8vIGZpbHRlciBvbmx5IHZpc2libGUgZm9ybXMgb2JqZXh0cyBpbiB0aGUgc3RvcmVcblx0XHRcdHRoaXMucHJvcHMuaW5zdXJhbmNlUGF5KGluc3VyYW5jZV9wYXksKHJlc3ApPT57IC8vIC8vIHRvIHJlcXVlc3QgcGF5bWVudFxuXHRcdFx0XHRpZihyZXNwLm1lbWJlcnMgJiYgcmVzcC5tZW1iZXJzLmxlbmd0aCA+MCl7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXVzZXItZGV0YWlscycpXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGlmKHJlc3AuY2VydGlmaWNhdGUpe1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvY2VydGlmaWNhdGUnKVxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0aWYocmVzcC5wYXltZW50X3JlcXVpcmVkKXtcblx0XHRcdFx0XHRcdFx0Ly8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9wYXltZW50LyR7cmVzcC5kYXRhLm9yZGVySWR9P3JlZnM9b3BkYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NQYXltZW50KHJlc3ApXG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0c3VjY2Vzc19pZCA9ICcvaW5zdXJhbmNlL2NvbXBsZXRlP3BheW1lbnRfc3VjY2Vzcz10cnVlJmlkPScrcmVzcC5kYXRhLmlkXG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHN1Y2Nlc3NfaWQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XHRcdFx0XG5cdFx0XHR9KVxuXHRcdH1cbiAgICB9XG4gICAgc2VuZEFnZW50Qm9va2luZ1VSTCgpIHtcbiAgICBcdGxldCBzbXNfdHlwZSA9ICdpbnN1cmFuY2UnXG4gICAgXHRpZih0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50ICYmIHRoaXMucHJvcHMuaXNBZ2VudCAmJiB0aGlzLnByb3BzLmlzQWdlbnQgPT0gJ3RydWUnKXtcbiAgICBcdFx0c21zX3R5cGUgPSAnZW5kb3JzZW1lbnQnXG5cdFx0fVxuXHRcdGxldCBleHRyYVBhcmFtcyA9IHt9XG4gICAgICAgIHRoaXMucHJvcHMuc2VuZEFnZW50Qm9va2luZ1VSTChudWxsLCAnc21zJywgc21zX3R5cGUsbnVsbCxleHRyYVBhcmFtcywgKGVyciwgcmVzKSA9PiB7IC8vc2VuZCBwYXltZW50IGxpbmsgaW4gc21zIHRvIHVzZXIgYnkgYWdhZW50XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNNUyBTRU5EIEVSUk9SXCIgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNNUyBTRU5UIFNVQ0NFU1NGVUxZXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcHJvY2Vzc1BheW1lbnQoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBheW1lbnREYXRhOiBkYXRhLmRhdGEgfSwgKCkgPT4ge1xuICAgICAgICAgICAgXHRzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpICYmIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUucGF5bWVudERhdGEpLmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpXG5cdCAgICAgICAgICAgICAgICAgICAgZm9ybS5zdWJtaXQoKVxuXHQgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXHR9LDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblx0cmVuZGVyKCl7XHRcblx0XHRpZih0aGlzLnByb3BzLmRhdGEpe1x0XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRcdGxldCBpc0R1bW15VXNlclxuXHRcdFx0aWYoT2JqZWN0LmtleXModGhpcy5wcm9wcy5kYXRhLm1lbWJlcnMpLmxlbmd0aD4wKXtcblx0ICAgIFx0XHQvLyBpZih0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pe1xuXHQgICAgXHRcdC8vIFx0aXNEdW1teVVzZXIgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlclxuXHQgICAgXHRcdC8vIH1cblxuXHQgICAgXHRcdGxldCBzZWxmX3Byb2ZpbGUgPSB0aGlzLnByb3BzLmRhdGEubWVtYmVycy5maWx0ZXIoeD0+IHgucmVsYXRpb24gPT0gJ3NlbGYnKVswXVxuXHQgICAgXHRcdGxldCBmYW1pbHlfcHJvZmlsZSA9IHRoaXMucHJvcHMuZGF0YS5tZW1iZXJzLmZpbHRlcih4PT4geC5yZWxhdGlvbiAhPSAnc2VsZicpXG5cdCAgICBcdFx0Ly8gaWYoIWlzRHVtbXlVc2VyKXtcblx0ICAgIFx0XHQvLyBcdHNlbGZfcHJvZmlsZSAgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSlcdFx0XG5cdCAgICBcdFx0Ly8gfWVsc2V7XG5cdCAgICBcdFx0Ly8gXHRzZWxmX3Byb2ZpbGUgID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzWzBdKVx0XHRcblx0ICAgIFx0XHQvLyB9XG5cdFx0XHQvLyBsZXQgY3VycmVudFNlbGVjdGVkUHJvZmlsZXMgPSBbXVxuXHQgICAgXHQvLyAgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLm1hcCgodmFsLGtleSkgPT4ge1xuXHQgICAgXHQvL1x0XHRjdXJyZW50U2VsZWN0ZWRQcm9maWxlcy5wdXNoKHZhbFtrZXldKVxuXHQgICAgXHQvLyAgfSlcblx0ICAgIFx0bGV0IHNlbGZfZWRpdGVkX2ZpZWxkcyA9IFtdXG5cdCAgICBcdGlmKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEuZWRpdGVkX2ZpZWxkcyl7XG5cdCAgICBcdFx0T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5kYXRhLmVkaXRlZF9maWVsZHMpLm1hcChmdW5jdGlvbihba2V5LCB2YWx1ZV0pIHtcblx0ICAgIFx0XHRcdGlmKGtleSA9PSBzZWxmX3Byb2ZpbGUuaWQpe1xuXHQgICAgXHRcdFx0XHRzZWxmX2VkaXRlZF9maWVsZHM9dmFsdWVcblx0ICAgIFx0XHRcdH1cdFxuXHQgICAgXHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cblx0XHRcdFx0PFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW4gY2FyZE1haW5QYWRkaW5nUm12XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVycyBkc2t0cC1yb3ctZ3V0dGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgaW5zLW1haW4tcGFkZGluZ1wiPlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtYm9vay1zY3JlZW5cIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQ/XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJyZXYtaW5zLWhlYWRlclwiIHN0eWxlPXt7Y29sb3I6JyMwMDAwMDAnfX0+IFJldmlldyB5b3VyIGRldGFpbHMgXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pc0FnZW50ICYmIHRoaXMucHJvcHMuaXNBZ2VudCA9PSAndHJ1ZSc/Jydcblx0XHRcdFx0XHRcdFx0OjxhIHN0eWxlPXt7Y29sb3I6YHZhcigtLXRleHQtLWRhcmstLWFsbClgLGZsb2F0OidyaWdodCd9fSBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLWVuZG9yc2VtZW50LWRldGFpbHMnKX0+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9lZGl0LnN2Z1wifS8+IEVkaXRcblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ6PEluc3VyQ29tbW9uIHsuLi50aGlzLnByb3BzfSBpc19lZGl0PXt0aGlzLnN0YXRlLmlzX2VkaXR9IGlzX2VkaXRfZW5kb3JzbWVudD17dGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudH0vPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1ydC0xMFwiIHN0eWxlPXt7cGFkZGluZzonMTBweCA0cHgnfX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluc3VyYW5jZS1tZW1iZXItY29udGFpbmVyXCIgc3R5bGU9e3twYWRkaW5nOicwIDhweCAwJ319PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy11c2VyLWRldGFpbHMtbGlzaXRuZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN1Yi1mb3JtLWhlZFwiPlByb3Bvc2VyPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJpbnMtdXNyLWltZy1wYXJhIHBsLTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWctbGlzdC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW5zLWlucHV0LWltZ1wiICBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy91c2VyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGZfcHJvZmlsZS5ub19sbmFtZT9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0+e3NlbGZfcHJvZmlsZS5uYW1lfSB8IHtzZWxmX3Byb2ZpbGUuZ2VuZGVyPT0nbSc/J01hbGUnOnNlbGZfcHJvZmlsZS5nZW5kZXI9PSdmJz8nRmVtYWxlJzpzZWxmX3Byb2ZpbGUuZ2VuZGVyPT0nbyc/J090aGVycyc6Jyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQgJiYgc2VsZl9lZGl0ZWRfZmllbGRzLmxlbmd0aCA+IDAgJiYgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoc2VsZl9lZGl0ZWRfZmllbGRzLmluZGV4T2YoJ2ZpcnN0X25hbWUnKSAhPSAtMSB8fCBzZWxmX2VkaXRlZF9maWVsZHMuaW5kZXhPZignbWlkZGxlX25hbWUnKSAhPSAtMSB8fCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZl9lZGl0ZWRfZmllbGRzLmluZGV4T2YoJ2xhc3RfbmFtZScpICE9IC0xIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGZfZWRpdGVkX2ZpZWxkcy5pbmRleE9mKCdnZW5kZXInKSAhPSAtMSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxmX2VkaXRlZF9maWVsZHMuaW5kZXhPZigndGl0bGUnKSAhPSAtMSk/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17e2NvbG9yOicjNzU3NTc1JywndGV4dFRyYW5zZm9ybSc6ICdub25lJ319PiAoZWRpdGVkKTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6Jyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPjpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0+e3NlbGZfcHJvZmlsZS5uYW1lfSB7c2VsZl9wcm9maWxlLm1pZGRsZV9uYW1lfSB7c2VsZl9wcm9maWxlLmxhc3RfbmFtZX0gfCB7c2VsZl9wcm9maWxlLmdlbmRlcj09J20nPydNYWxlJzpzZWxmX3Byb2ZpbGUuZ2VuZGVyPT0nZic/J0ZlbWFsZSc6c2VsZl9wcm9maWxlLmdlbmRlcj09J28nPydPdGhlcnMnOicnfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCAmJiBzZWxmX2VkaXRlZF9maWVsZHMubGVuZ3RoID4gMCAmJiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChzZWxmX2VkaXRlZF9maWVsZHMuaW5kZXhPZignZmlyc3RfbmFtZScpICE9IC0xIHx8IHNlbGZfZWRpdGVkX2ZpZWxkcy5pbmRleE9mKCdtaWRkbGVfbmFtZScpICE9IC0xIHx8IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxmX2VkaXRlZF9maWVsZHMuaW5kZXhPZignbGFzdF9uYW1lJykgIT0gLTEgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZl9lZGl0ZWRfZmllbGRzLmluZGV4T2YoJ2dlbmRlcicpICE9IC0xIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGZfZWRpdGVkX2ZpZWxkcy5pbmRleE9mKCd0aXRsZScpICE9IC0xKT9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7Y29sb3I6JyM3NTc1NzUnLCd0ZXh0VHJhbnNmb3JtJzogJ25vbmUnfX0+IChlZGl0ZWQpPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDonJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nLWxpc3Qtd2lkdGhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlucy1pbnB1dC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYWxlbmRhci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPntzZWxmX3Byb2ZpbGUuZG9ifSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQgJiYgc2VsZl9lZGl0ZWRfZmllbGRzLmxlbmd0aCA+IDAgJiYgc2VsZl9lZGl0ZWRfZmllbGRzLmluZGV4T2YoJ2RvYicpICE9IC0xID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17e2NvbG9yOicjNzU3NTc1JywndGV4dFRyYW5zZm9ybSc6ICdub25lJ319PiAoZWRpdGVkKTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0OicnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltZy1saXN0LXdpZHRoXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbnMtaW5wdXQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbWFpbC0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPntzZWxmX3Byb2ZpbGUuZW1haWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50ICYmIHNlbGZfZWRpdGVkX2ZpZWxkcy5sZW5ndGggPiAwICYmIHNlbGZfZWRpdGVkX2ZpZWxkcy5pbmRleE9mKCdlbWFpbCcpICE9IC0xID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17e2NvbG9yOicjNzU3NTc1JywndGV4dFRyYW5zZm9ybSc6ICdub25lJ319PiAoZWRpdGVkKTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0OicnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltZy1saXN0LXdpZHRoXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbnMtaW5wdXQtaW1nXCIgIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvY2F0aW9uLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319PntgJHtzZWxmX3Byb2ZpbGUuYWRkcmVzc30sICR7c2VsZl9wcm9maWxlLnRvd259LCAke3NlbGZfcHJvZmlsZS5kaXN0cmljdH0sICR7c2VsZl9wcm9maWxlLnN0YXRlfSAtICR7c2VsZl9wcm9maWxlLnBpbmNvZGV9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQgJiYgc2VsZl9lZGl0ZWRfZmllbGRzLmxlbmd0aCA+IDAgJiYgKHNlbGZfZWRpdGVkX2ZpZWxkcy5pbmRleE9mKCdhZGRyZXNzJykgIT0gLTEgfHwgc2VsZl9lZGl0ZWRfZmllbGRzLmluZGV4T2YoJ3Rvd24nKSAhPSAtMSB8fCBzZWxmX2VkaXRlZF9maWVsZHMuaW5kZXhPZignZGlzdHJpY3QnKSAhPSAtMSB8fCBzZWxmX2VkaXRlZF9maWVsZHMuaW5kZXhPZignc3RhdGUnKSAhPSAtMXx8IHNlbGZfZWRpdGVkX2ZpZWxkcy5pbmRleE9mKCdwaW5jb2RlJykgIT0gLTEpP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjonIzc1NzU3NScsJ3RleHRUcmFuc2Zvcm0nOiAnbm9uZSd9fT4gKGVkaXRlZCk8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDonJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGZhbWlseV9wcm9maWxlLm1hcCgodmFsLGtleSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cImlucy1zdWItZm9ybXMgc3ViLWlucHV0LWZvcm1zLWNvbnRhaW5lcnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT1cImlucy1pbnRlcm5hbC1oclwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXVzZXItZGV0YWlscy1saXNpdG5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3ViLWZvcm0taGVkXCI+TWVtYmVyIHtrZXkrMX0gPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVtYmVycy1jb250YWluZXItcGFkZGluZyBwbC0wXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW1iZXJzLWxpc3RpbmdzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1saXN0LXdpZHRoXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW5zLWlucHV0LWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2hhbmRzLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0+e3ZhbC5yZWxhdGlvbn08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW1iZXJzLWxpc3RpbmdzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1saXN0LXdpZHRoXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxOXB4JyB9fSBjbGFzc05hbWU9XCJpbnMtaW5wdXQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdXNlci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWwubm9fbG5hbWU/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0+e3ZhbC5uYW1lfSB8IHt2YWwuZ2VuZGVyPT0nbSc/J01hbGUnOnZhbC5nZW5kZXI9PSdmJz8nRmVtYWxlJzp2YWwuZ2VuZGVyPT0nbyc/J090aGVycyc6Jyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCAmJiB0aGlzLnByb3BzLmRhdGEuZWRpdGVkX2ZpZWxkc1t2YWwuaWRdICYmIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQodGhpcy5wcm9wcy5kYXRhLmVkaXRlZF9maWVsZHNbdmFsLmlkXS5pbmRleE9mKCdmaXJzdF9uYW1lJykgPiAtMSB8fCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLmVkaXRlZF9maWVsZHNbdmFsLmlkXS5pbmRleE9mKCdtaWRkbGVfbmFtZScpID4gLTEgfHwgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5lZGl0ZWRfZmllbGRzW3ZhbC5pZF0uaW5kZXhPZignbGFzdF9uYW1lJykgPiAtMSB8fCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLmVkaXRlZF9maWVsZHNbdmFsLmlkXS5pbmRleE9mKCdnZW5kZXInKSA+IC0xIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5lZGl0ZWRfZmllbGRzW3ZhbC5pZF0uaW5kZXhPZigndGl0bGUnKSA+IC0xKT9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjonIzc1NzU3NScsJ3RleHRUcmFuc2Zvcm0nOiAnbm9uZSd9fT4gKGVkaXRlZCk8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OjxwIHN0eWxlPXt7J3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZSd9fT57dmFsLm5hbWV9IHt2YWwubWlkZGxlX25hbWV9IHt2YWwubGFzdF9uYW1lfSB8IHt2YWwuZ2VuZGVyPT0nbSc/J01hbGUnOnZhbC5nZW5kZXI9PSdmJz8nRmVtYWxlJzp2YWwuZ2VuZGVyPT0nbyc/J090aGVycyc6Jyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCAmJiB0aGlzLnByb3BzLmRhdGEuZWRpdGVkX2ZpZWxkc1t2YWwuaWRdICYmIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQodGhpcy5wcm9wcy5kYXRhLmVkaXRlZF9maWVsZHNbdmFsLmlkXS5pbmRleE9mKCdmaXJzdF9uYW1lJykgPiAtMSB8fCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLmVkaXRlZF9maWVsZHNbdmFsLmlkXS5pbmRleE9mKCdtaWRkbGVfbmFtZScpID4gLTEgfHwgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5lZGl0ZWRfZmllbGRzW3ZhbC5pZF0uaW5kZXhPZignbGFzdF9uYW1lJykgPiAtMSB8fCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLmVkaXRlZF9maWVsZHNbdmFsLmlkXS5pbmRleE9mKCdnZW5kZXInKSA+IC0xIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5lZGl0ZWRfZmllbGRzW3ZhbC5pZF0uaW5kZXhPZigndGl0bGUnKSA+IC0xKT9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjonIzc1NzU3NScsJ3RleHRUcmFuc2Zvcm0nOiAnbm9uZSd9fT4gKGVkaXRlZCk8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVtYmVycy1saXN0aW5nc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW1iZXItbGlzdC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlucy1pbnB1dC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYWxlbmRhci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3ZhbC5kb2J9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCAmJiB0aGlzLnByb3BzLmRhdGEuZWRpdGVkX2ZpZWxkc1t2YWwuaWRdICYmICh0aGlzLnByb3BzLmRhdGEuZWRpdGVkX2ZpZWxkc1t2YWwuaWRdLmluZGV4T2YoJ2RvYicpID4gLTEpP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17e2NvbG9yOicjNzU3NTc1JywndGV4dFRyYW5zZm9ybSc6ICdub25lJ319PiAoZWRpdGVkKTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0U1RPUkFHRS5pc0FnZW50KCk/PGJ1dHRvbiBjbGFzc05hbWU9XCJ2LWJ0biBwLTMgdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgYnRuLWxnIHRleHQtbGcgc3RpY2t5LWJ0blwiIG9uQ2xpY2s9e3RoaXMuc2VuZEFnZW50Qm9va2luZ1VSTC5iaW5kKHRoaXMpfT5TZW5kIFNNUyAo4oK5IHt0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fcHJpY2V9KSBcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj57dGhpcy5zdGF0ZS5nc3R9PC9zcGFuPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0OjxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0aWNreS1idG5cIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcyl9Pnt0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50PydTdWJtaXQnOmBQYXkgTm93ICjigrkke3RoaXMuc3RhdGUuc2VsZWN0ZWRfcGxhbl9wcmljZX0pYCB9XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50PycnOjxzcGFuIGNsYXNzTmFtZT1cImZvb3QtYnRuLXN1Yi1zcGFuXCI+e3RoaXMuc3RhdGUuZ3N0fTwvc3Bhbj5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENoYXRQYW5lbCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXltZW50RGF0YSA/IDxQYXltZW50Rm9ybSBwYXltZW50RGF0YT17dGhpcy5zdGF0ZS5wYXltZW50RGF0YX0gcmVmcz0nb3BkJyAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdClcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gPGRpdj48L2Rpdj5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3VyYW5jZVJldmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7dXNlckRhdGEsaW5zdXJhbmNlUGF5LCByZXNldFNlbGVjdGVkSW5zdXJhbmNlTWVtYmVycywgcmV0cmlldmVVc2VyRGF0YSwgc2VuZEFnZW50Qm9va2luZ1VSTCwgcmVzZXRVc2VySW5zdXJlZERhdGEsIGdldEluc3VyYW5jZSxyZXRyaWV2ZUVuZG9yc2VkRGF0YSwgY3JlYXRlRW5kb3JzZW1lbnREYXRhfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IEluc3VyYW5jZVJldmlld1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlUmV2aWV3LmpzJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuY2xhc3MgSW5zdXJhbmNlUmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgIGlzX2VuZG9yc2VtZW50OmZhbHNlLFxuICAgICAgICAgICAgaXNBZ2VudDpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBpZihwYXJzZWQuaXNfZW5kb3JzZW1lbnQpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRJbnN1cmFuY2UodHJ1ZSwocmVzcG9uc2UpPT57IC8vIHRvIGdldCBpbnN1cmFuY2UgcGxhbnNcbiAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuY2VydGlmaWNhdGUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJldHJpZXZlRW5kb3JzZWREYXRhKChyZXNwKT0+eyAvLyB0byByZXRyaWV2ZSB1c2VyIGVuZG9yc2VtZW50IGRhdGEgKGlmIHVzZXIgd2FudCdzIHRvIHVwZGF0ZSBhbnkgb2YgZGV0YWlscyBpbiB0aGVyZSBwb2xpY3kgZGV0YWlscylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6cmVzcC5kYXRhLGlzX2VuZG9yc2VtZW50OnRydWUsIGlzQWdlbnQ6cGFyc2VkLmlzQWdlbnR9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRJbnN1cmFuY2UoZmFsc2UsKHJlc3BvbnNlKT0+e1xuICAgICAgICAgICAgICAgIGlmKCFyZXNwb25zZS5jZXJ0aWZpY2F0ZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmV0cmlldmVVc2VyRGF0YSgocmVzcCk9PnsgLy8gdG8gcmV0cmlldmUgdXNlciBkYXRhIGluIGNhc2Ugb2YgYWdlbnQgaGFzIGxvZ2dlZGluIGluc3RlYWQgb2YgdXNlciBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3AgJiYgIXJlc3AuZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRVc2VySW5zdXJlZERhdGEocmVzcC5kYXRhKSAvLyB0byByZXNldCB0aGUgaW5zdXJhbmNlIHN0b3JlIHRvIGluaXRpYWwgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOnJlc3AuZGF0YX0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblx0cmVuZGVyKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuTE9BRF9JTlNVUkFOQ0UgJiYgdGhpcy5zdGF0ZS5kYXRhKXtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxJbnN1cmFuY2VSZXZpZXdWaWV3IHsuLi50aGlzLnByb3BzfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IGlzX2VuZG9yc2VtZW50PXt0aGlzLnN0YXRlLmlzX2VuZG9yc2VtZW50fSBpc0FnZW50PXt0aGlzLnN0YXRlLmlzQWdlbnR9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLmluc3VybmFjZURhdGEuY2VydGlmaWNhdGUgJiYgU1RPUkFHRS5jaGVja0F1dGgoKSl7IC8vIGlmIHVzZXIgaXMgYWxyZWFkeSBhbiBpbnN1cmFuY2UgY3VzdG9tZXIgc28gcmVkaXJlY3Qgb24gaW5zdXJlZCBkYXNoYm9hcmQgcGFnZVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2NlcnRpZmljYXRlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICB9XG5cdFx0XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyBpbnN1cm5hY2VEYXRhLCBMT0FEX0lOU1VSQU5DRSwgc2VsZWN0ZWRfcGxhbixzZWxmX2RhdGFfdmFsdWVzLGNyZWF0ZV9wYXltZW50X3Jlc3AsIGN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQsIG1lbWJlcnNfcHJvb2ZzfSA9IHN0YXRlLklOU1VSQU5DRVxuICAgIHJldHVybiB7XG4gICAgICAgIGluc3VybmFjZURhdGEsTE9BRF9JTlNVUkFOQ0Usc2VsZWN0ZWRfcGxhbixVU0VSLHNlbGZfZGF0YV92YWx1ZXMsY3JlYXRlX3BheW1lbnRfcmVzcCwgY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZCwgbWVtYmVyc19wcm9vZnNcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEluc3VyYW5jZTogKGlzX2VuZG9yc2VtZW50LGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRJbnN1cmFuY2UoaXNfZW5kb3JzZW1lbnQsY2FsbGJhY2spKSxcbiAgICAgICAgLy8gZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICAvLyBzZWxlY3RJbnN1cmFuY2VQbGFuOiAocGxhbixjcml0ZXJpYSxmb3JjZWFkZCkgPT4gZGlzcGF0Y2goc2VsZWN0SW5zdXJhbmNlUGxhbihwbGFuLGNyaXRlcmlhLGZvcmNlYWRkKSksXG4gICAgICAgIC8vIHVzZXJEYXRhIDooc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSA9PiBkaXNwYXRjaCh1c2VyRGF0YShzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpKSxcbiAgICAgICAgaW5zdXJhbmNlUGF5IDooY3JpdGVyaWEsY2FsbGJhY2spID0+IGRpc3BhdGNoKGluc3VyYW5jZVBheShjcml0ZXJpYSxjYWxsYmFjaykpLFxuICAgICAgICByZXNldFNlbGVjdGVkSW5zdXJhbmNlTWVtYmVyczogKCkgPT4gZGlzcGF0Y2gocmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnMoKSksXG4gICAgICAgIHJldHJpZXZlVXNlckRhdGE6KGNiKSA9PmRpc3BhdGNoKHJldHJpZXZlVXNlckRhdGEoY2IpKSxcbiAgICAgICAgc2VuZEFnZW50Qm9va2luZ1VSTDogKG9yZGVySWQsIHR5cGUsIHB1cmNoYXNlX3R5cGUscXVlcnlfZGF0YSwgZXh0cmFQYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChzZW5kQWdlbnRCb29raW5nVVJMKG9yZGVySWQsIHR5cGUscHVyY2hhc2VfdHlwZSxxdWVyeV9kYXRhLGV4dHJhUGFyYW1zLCBjYikpLFxuICAgICAgICByZXNldFVzZXJJbnN1cmVkRGF0YTooY3JpdGVyaWEpID0+ZGlzcGF0Y2gocmVzZXRVc2VySW5zdXJlZERhdGEoY3JpdGVyaWEpKSxcbiAgICAgICAgcmV0cmlldmVFbmRvcnNlZERhdGE6KGNiKSA9PmRpc3BhdGNoKHJldHJpZXZlRW5kb3JzZWREYXRhKGNiKSksXG4gICAgICAgIGNyZWF0ZUVuZG9yc2VtZW50RGF0YTooaW5zdXJhbmNlX3BheSxjYikgPT5kaXNwYXRjaChjcmVhdGVFbmRvcnNlbWVudERhdGEoaW5zdXJhbmNlX3BheSxjYikpXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbnN1cmFuY2VSZXZpZXcpIl0sInNvdXJjZVJvb3QiOiIifQ==