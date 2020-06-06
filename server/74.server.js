exports.ids = [74];
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

/***/ "./dev/js/components/commons/primeCare/primeCareBookingView.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/primeCare/primeCareBookingView.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _paymentForm = __webpack_require__(/*! ../paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

var _staticDisclaimer = __webpack_require__(/*! ../Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class PrimeCareBookingView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneNumber: '',
            gender: '',
            email: '',
            profileDataFilled: true,
            paymentData: null
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
    }
    proceed() {
        const parsed = queryString.parse(this.props.location.search);
        let member_profile = null;
        let selectedPlan = {};
        let self = this;
        selectedPlan.plan = parseInt(parsed.plan_id);
        if (this.props.USER.profiles[this.props.USER.defaultProfile]) {
            member_profile = this.props.USER.profiles[this.props.USER.defaultProfile];
        }
        if (member_profile && member_profile.isDummyUser) {
            let data = this.state;
            if (data.name == '' || data.gender == '' || data.phoneNumber == '' || data.email == '') {
                this.setState({ profileDataFilled: false });
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please fill the info" });
                return;
            } else {
                this.setState({ profileDataFilled: true });
            }
            let profileData = {};
            profileData.name = this.state.name;
            profileData.phoneNumber = this.state.phoneNumber;
            profileData.gender = this.state.gender;
            profileData.email = this.state.email;
            this.props.createProfile(profileData, (err, res) => {
                self.props.getUserProfile();
            });
            self.props.createCareBooking(selectedPlan, resp => {
                //proceed to payment gate way
                if (resp.payment_required) {
                    // this.props.history.push(`/payment/${resp.data.orderId}?refs=care`)
                    this.processPayment(resp);
                } else {
                    this.props.history.push('/prime/success?user_plan=' + resp.data.id);
                }
            });
        } else {
            this.props.createCareBooking(selectedPlan, resp => {
                //proceed to payment gate way
                if (resp.payment_required) {
                    // this.props.history.push(`/payment/${resp.data.orderId}?refs=care`)
                    this.processPayment(resp);
                } else {
                    this.props.history.push('/prime/success?user_plan=' + resp.data.id);
                }
            });
        }
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

    inputHandler(e) {
        if (e.target.name == 'phoneNumber') {
            e.target.value.length <= 10 ? e.target.value.length == 10 ? this.setState({
                [e.target.name]: e.target.value
            }) : this.setState({
                [e.target.name]: e.target.value
            }) : '';
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    render() {
        let member_profile = null;
        if (this.props.USER.profiles[this.props.USER.defaultProfile]) {
            member_profile = this.props.USER.profiles[this.props.USER.defaultProfile];
        }
        let self = this;
        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap', style: { paddingBottom: 54 } },
            _react2.default.createElement(_DesktopProfileHeader2.default, null),
            _react2.default.createElement(
                'section',
                { className: 'container container-top-margin' },
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
                                { className: 'widget mrng-top-12 mrb-60' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget-content mrng-top-12 care-widget' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'careMemberContainer' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'careMembrLogo' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/logoornage.png" })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'careMembrtxt' },
                                            _react2.default.createElement(
                                                'h5',
                                                null,
                                                'Docprime Care '
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'membership'
                                            )
                                        )
                                    ),
                                    member_profile && member_profile.isDummyUser ? _react2.default.createElement(
                                        'div',
                                        { className: 'widget-content' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'lab-visit-time d-flex jc-spaceb' },
                                            _react2.default.createElement(
                                                'h4',
                                                { className: 'title d-flex' },
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    _react2.default.createElement('img', { style: { width: '20px', marginRight: '8px' }, src: "/assets" + "/img/nw-usr.svg" })
                                                ),
                                                'Member Detail'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'select-pt-form' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'slt-nw-input' },
                                                _react2.default.createElement(
                                                    'label',
                                                    { className: 'slt-label', htmlFor: 'male' },
                                                    _react2.default.createElement(
                                                        'sup',
                                                        { className: 'requiredAst' },
                                                        '*'
                                                    ),
                                                    'Name:'
                                                ),
                                                _react2.default.createElement('input', { className: 'slt-text-input', style: { 'textTransform': 'capitalize' }, autoComplete: 'none', type: 'text', name: 'name', value: this.state.name, onChange: this.inputHandler.bind(this), placeholder: '' })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'slt-nw-input radio-mbl' },
                                                _react2.default.createElement(
                                                    'label',
                                                    { className: 'slt-label', htmlFor: 'male' },
                                                    _react2.default.createElement(
                                                        'sup',
                                                        { className: 'requiredAst' },
                                                        '*'
                                                    ),
                                                    'Gender:'
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'slt-label-radio' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'dtl-radio' },
                                                        _react2.default.createElement(
                                                            'label',
                                                            { className: 'container-radio' },
                                                            'Male',
                                                            _react2.default.createElement('input', { type: 'radio', name: 'gender', name: 'gender', onClick: () => this.setState({ 'gender': 'm' }) }),
                                                            _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'dtl-radio' },
                                                        _react2.default.createElement(
                                                            'label',
                                                            { className: 'container-radio' },
                                                            'Female',
                                                            _react2.default.createElement('input', { type: 'radio', name: 'gender', value: 'm', name: 'gender', onClick: () => this.setState({ 'gender': 'f' }) }),
                                                            _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'dtl-radio' },
                                                        _react2.default.createElement(
                                                            'label',
                                                            { className: 'container-radio' },
                                                            'Other',
                                                            _react2.default.createElement('input', { type: 'radio', name: 'gender', name: 'gender', onClick: () => this.setState({ 'gender': 'o' }) }),
                                                            _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'slt-nw-input' },
                                                _react2.default.createElement(
                                                    'label',
                                                    { className: 'slt-label', htmlFor: 'male' },
                                                    _react2.default.createElement(
                                                        'sup',
                                                        { className: 'requiredAst' },
                                                        '*'
                                                    ),
                                                    'Email:'
                                                ),
                                                _react2.default.createElement('input', { className: 'slt-text-input', style: { 'textTransform': 'capitalize' }, autoComplete: 'none', type: 'text', name: 'email', value: this.state.email, onChange: this.inputHandler.bind(this), placeholder: '' })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'slt-nw-input' },
                                                _react2.default.createElement(
                                                    'label',
                                                    { className: 'slt-label', htmlFor: 'male' },
                                                    _react2.default.createElement(
                                                        'sup',
                                                        { className: 'requiredAst' },
                                                        '*'
                                                    ),
                                                    'Mobile:'
                                                ),
                                                _react2.default.createElement('input', { className: 'slt-text-input', autoComplete: 'none', type: 'number', placeholder: '', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber' })
                                            )
                                        )
                                    ) : member_profile ? _react2.default.createElement(
                                        'div',
                                        { className: 'row no-gutters' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-7' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'carePara' },
                                                _react2.default.createElement('img', { src: "/assets" + "/img/memsecur.png" }),
                                                'Valid for :'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-5 text-right' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'careSUbpara' },
                                                '1 year'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-7' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'carePara' },
                                                _react2.default.createElement('img', { src: "/assets" + "/img/memuser.png" }),
                                                'Member Name :'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-5 text-right' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'careSUbpara', style: { 'textTransform': 'capitalize' } },
                                                member_profile.name
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-7' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'carePara' },
                                                _react2.default.createElement('img', { src: "/assets" + "/img/memcall.png" }),
                                                'Mobile no: '
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-5 text-right' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'careSUbpara' },
                                                member_profile.phone_number
                                            )
                                        )
                                    ) : '',
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'careListingWithSideline' },
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'UlcareListingWithSide' },
                                            this.props.data && this.props.data.length > 0 && this.props.data[0].unlimited_online_consultation ? _react2.default.createElement(
                                                'li',
                                                { className: 'careListiLi' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'careListin' },
                                                    'Free Unlimited Online Consultation '
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Our online consultation timings are from 8:00 AM to 5:00 PM'
                                                )
                                            ) : '',
                                            this.props.data && this.props.data.length > 0 && this.props.data[0].priority_queue ? _react2.default.createElement(
                                                'li',
                                                { className: 'careListiLi' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'careListin' },
                                                    'Priority Queue '
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'No waiting time!'
                                                )
                                            ) : '',
                                            this.props.data && this.props.data.length > 0 && this.props.data[0].features.length > 0 ? Object.entries(this.props.data[0].features).map(function ([key, value]) {
                                                if (value.count != null) {
                                                    return _react2.default.createElement(
                                                        'li',
                                                        { key: value.id, className: 'careListiLi' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'careListin' },
                                                            self.props.data[0].feature_details[0].name,
                                                            ' '
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            `Memeber can avail this offer ${value.count == 2 ? 'twice' : 'once'} in a year`
                                                        )
                                                    );
                                                }
                                            }) : ''
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.proceed.bind(this), className: 'p-3 v-btn v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn' },
                            'Pay Now',
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.data ? `(₹ ${parseInt(this.props.data[0].deal_price)})` : ''
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, null),
            this.state.paymentData ? _react2.default.createElement(_paymentForm2.default, { paymentData: this.state.paymentData, refs: 'care' }) : ""
        );
    }
}

exports.default = PrimeCareBookingView;

/***/ }),

/***/ "./dev/js/containers/care/primeCareBooking.js":
/*!****************************************************!*\
  !*** ./dev/js/containers/care/primeCareBooking.js ***!
  \****************************************************/
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

var _primeCareBookingView = __webpack_require__(/*! ../../components/commons/primeCare/primeCareBookingView.js */ "./dev/js/components/commons/primeCare/primeCareBookingView.js");

var _primeCareBookingView2 = _interopRequireDefault(_primeCareBookingView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class primeCareBooking extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);

        this.props.getCareDetails(resp => {
            // get care plans
            let feature_detail = resp.plans.filter(x => x.id == parsed.plan_id);
            feature_detail[0].feature_details = resp.feature_details;
            this.setState({ data: feature_detail });
        });
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return _react2.default.createElement(_primeCareBookingView2.default, _extends({}, this.props, { data: this.state.data }));
    }
}

primeCareBooking.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    const USER = state.USER;

    return {
        USER
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCareDetails: callback => dispatch((0, _index.getCareDetails)(callback)),
        sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
        submitOTP: (number, otp, extraParamsData, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb)),
        resetAuth: () => dispatch((0, _index.resetAuth)()),
        createProfile: (postData, cb) => dispatch((0, _index.createProfile)(postData, cb)),
        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        createCareBooking: (selectedPlan, cb) => dispatch((0, _index.createCareBooking)(selectedPlan, cb))

    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(primeCareBooking);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3BheW1lbnRGb3JtL1BheW1lbnRGb3JtLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvcGF5bWVudEZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9wcmltZUNhcmUvcHJpbWVDYXJlQm9va2luZ1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY2FyZS9wcmltZUNhcmVCb29raW5nLmpzIl0sIm5hbWVzIjpbImlzVmlwIiwiY29sb3IiLCJmb250U2l6ZSIsInBhZGRpbmdCb3R0b20iLCJQYXltZW50Rm9ybSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2VuZEV2ZW50IiwicmVmcyIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJjb21wb25lbnREaWRNb3VudCIsImdldFBheW1lbnROb2RlTmFtZSIsIm5hbWUiLCJpbmRleCIsInJlbmRlciIsInBheW1lbnREYXRhIiwiQ09ORklHIiwiUEdfTVVMVElfT1JERVJfVVJMIiwiUEdfVVJMIiwiZGlzcGxheSIsIm1hcCIsIml0ZW0iLCJpIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiUHJpbWVDYXJlQm9va2luZ1ZpZXciLCJwaG9uZU51bWJlciIsImdlbmRlciIsImVtYWlsIiwicHJvZmlsZURhdGFGaWxsZWQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInByb2NlZWQiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwibWVtYmVyX3Byb2ZpbGUiLCJzZWxlY3RlZFBsYW4iLCJzZWxmIiwicGxhbiIsInBhcnNlSW50IiwicGxhbl9pZCIsIlVTRVIiLCJwcm9maWxlcyIsImRlZmF1bHRQcm9maWxlIiwiaXNEdW1teVVzZXIiLCJzZXRTdGF0ZSIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJwcm9maWxlRGF0YSIsImNyZWF0ZVByb2ZpbGUiLCJlcnIiLCJyZXMiLCJnZXRVc2VyUHJvZmlsZSIsImNyZWF0ZUNhcmVCb29raW5nIiwicmVzcCIsInBheW1lbnRfcmVxdWlyZWQiLCJwcm9jZXNzUGF5bWVudCIsImhpc3RvcnkiLCJwdXNoIiwiaWQiLCJzdGF0dXMiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJmb3JtIiwic3VibWl0IiwiaW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiQVNTRVRTX0JBU0VfVVJMIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImJpbmQiLCJwaG9uZV9udW1iZXIiLCJ1bmxpbWl0ZWRfb25saW5lX2NvbnN1bHRhdGlvbiIsInByaW9yaXR5X3F1ZXVlIiwiZmVhdHVyZXMiLCJlbnRyaWVzIiwia2V5IiwiY291bnQiLCJmZWF0dXJlX2RldGFpbHMiLCJkZWFsX3ByaWNlIiwicHJpbWVDYXJlQm9va2luZyIsImdldENhcmVEZXRhaWxzIiwiZmVhdHVyZV9kZXRhaWwiLCJwbGFucyIsImZpbHRlciIsIngiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNhbGxiYWNrIiwic2VuZE9UUCIsIm51bWJlciIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwibWVzc2FnZV90eXBlIiwiY2IiLCJzdWJtaXRPVFAiLCJvdHAiLCJleHRyYVBhcmFtc0RhdGEiLCJyZXNldEF1dGgiLCJwb3N0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUNlLENBQUMsRUFBRUEsS0FBRixFQUFELEtBQWU7QUFDN0IsV0FBUTtBQUFBO0FB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgKHsgaXNWaXAgfSkgPT4ge1xuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgZHNjbG1lci1mdHIgJHtpc1ZpcD8nbWFyZ2luLWJvdHRvbS01NSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzhhOGE4YScsIGZvbnRTaXplOiAxMCB9fSA+VGhlIFdlYnNpdGUgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgaW4gY2FzZSBvZiBhIG1lZGljYWwgZW1lcmdlbmN5IGFuZC8gb3IgY3JpdGljYWwgY2FyZSBhbmQgdGhlIHVzZXIgc2hvdWxkIGRpcmVjdGx5IGNvbnRhY3QgaGlzLyBoZXIgbWVkaWNhbCBzZXJ2aWNlIHByb3ZpZGVyIGZvciBQaHlzaWNhbCBFeGFtaW5hdGlvbi4gRG9jcHJpbWUgaXMgc29sZWx5IGEgdGVjaG5vbG9neSBwYXJ0bmVyLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmb290ZXItbmV3LWNvcHlyZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lLmNvbSBDb3B5cmlnaHQgJmNvcHk7IDIwMjAuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RE9DUFJJTUUgVEVDSE5PTE9HSUVTIFBSSVZBVEUgTElNSVRFRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q0lOIDogVTc0OTk5SFIyMDE2UFRDMDY0MzEyPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cblxuY2xhc3MgUGF5bWVudEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2VuZEV2ZW50KCkge1xuICAgICAgICBsZXQgcmVmcyA9IHRoaXMucHJvcHMucmVmc1xuICAgICAgICBpZiAocmVmcykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb250aW51ZUNsaWNrZWQnLCAncGFnZVNvdXJjZSc6IHJlZnMsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb250aW51ZUNsaWNrZWQnLCAncGFnZVNvdXJjZSc6ICdVTktOT1dOJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29udGludWUtY2xpY2tlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZW5kRXZlbnQoKVxuICAgIH1cblxuICAgIGdldFBheW1lbnROb2RlTmFtZShuYW1lLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gYCR7bmFtZX1bJHtpbmRleH1dYFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBsZXQgZGF0YSA9IHsgXCJwYXltZW50TW9kZVwiOiBcIkNDXCIsIFwicmVzcG9uc2VDb2RlXCI6IFwiMjI3XCIsIFwiYmFua1R4SWRcIjogXCJcIiwgXCJ0eERhdGVcIjogXCJKdW4gNCwgMjAxOCAxMjoxMDoyMyBQTVwiLCBcImJhbmtOYW1lXCI6IFwiU0JJXCIsIFwic3RhdHVzTXNnXCI6IFwiT29wcyBhbiBlcnJvciBvY2N1cnJlZC4gV2Ugd2lsbCBnZXQgYmFjayB0byB5b3UhXCIsIFwiY3VycmVuY3lcIjogXCJJTlJcIiwgXCJzdGF0dXNDb2RlXCI6IDEsIFwicGdHYXRld2F5TmFtZVwiOiBcIk1PQ0tcIiwgXCJyZXNwb25zZU1lc3NhZ2VcIjogXCJZb3VyIHBheW1lbnQgaGFzIGJlZW4gZGVjbGluZWQgYnkgeW91ciBiYW5rLiBQbGVhc2UgY29udGFjdCB5b3VyIGJhbmsgZm9yIGFueSBxdWVyaWVzLiBJZiBtb25leSBoYXMgYmVlbiBkZWR1Y3RlZCBmcm9tIHlvdXIgYWNjb3VudCwgeW91ciBiYW5rIHdpbGwgaW5mb3JtIHVzIHdpdGhpbiA0OCBocnMgYW5kIHdlIHdpbGwgcmVmdW5kIHRoZSBzYW1lXCIsIFwidHhTdGF0dXNcIjogXCJUWE5fRkFJTFVSRVwiLCBcImN1c3RvbWVySWRcIjogNTEsIFwib3JkZXJOb1wiOiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ10sIFwic3RhdHVzU2hvcnRNc2dcIjogXCJPdGhlcnNcIiwgXCJlbWFpbFwiOiBcImR1bW15X2FwcG9pbnRtZW50QHBvbGljeWJhemFhci5jb21cIiwgXCJwYkdhdGV3YXlOYW1lXCI6IFwicGF5dG1cIiwgXCJtb2JpbGVcIjogXCI5OTk5OTk5OTk3XCIsIHByb2R1Y3RJZDogdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncHJvZHVjdElkJ10gfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZlcmVuY2VJZCddKSB7XG4gICAgICAgIC8vICAgICBkYXRhWydyZWZlcmVuY2VJZCddID0gdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gZGF0YVsncGdUeElkJ10gPSB0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ11cbiAgICAgICAgLy8gZGF0YSA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInBheW1lbnRGb3JtXCIgcmVmPVwicGF5bWVudEZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPXt0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2lzX3NpbmdsZV9mbG93J10/Q09ORklHLlBHX01VTFRJX09SREVSX1VSTDpDT05GSUcuUEdfVVJMfSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2lzX3NpbmdsZV9mbG93J10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpdGVtcyddLm1hcCgoaXRlbSwgaSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ25hbWUnLCBpKX0gaWQ9e2l0ZW1bJ25hbWUnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWyduYW1lJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ3Byb2R1Y3RJZCcsIGkpfSBpZD17aXRlbVsncHJvZHVjdElkJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsncHJvZHVjdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ3R4QW1vdW50JywgaSl9IGlkPXtpdGVtWyd0eEFtb3VudCddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ3R4QW1vdW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ29yZGVySWQnLCBpKX0gaWQ9e2l0ZW1bJ29yZGVySWQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydvcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ2hvbGRQYXltZW50JywgaSl9ICBpZD17aXRlbVsnaG9sZFBheW1lbnQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydob2xkUGF5bWVudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSAmJiBpdGVtWydpbnN1cmVyQ29kZSddP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgnaW5zdXJlckNvZGUnLCBpKX0gaWQ9e2l0ZW1bJ2luc3VyZXJDb2RlJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsnaW5zdXJlckNvZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6PFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWyduYW1lJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2R1Y3RJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncHJvZHVjdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR4QW1vdW50XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWyd0eEFtb3VudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJvcmRlcklkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImhvbGRQYXltZW50XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydob2xkUGF5bWVudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpbnN1cmVyQ29kZSddP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5zdXJlckNvZGVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2luc3VyZXJDb2RlJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjdXN0SWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2N1c3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibW9iaWxlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydtb2JpbGUnXX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2VtYWlsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdXJsXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydzdXJsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmdXJsXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydmdXJsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZWZlcmVuY2VJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaGFzaFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaGFzaCddfSAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlzUHJlQXV0aFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaXNQcmVBdXRoJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGF5dG1Nc2cnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXl0bU1zZ1wiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGF5dG1Nc2cnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY291cG9uQ29kZSddID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291cG9uQ29kZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY291cG9uQ29kZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaXNjb3VudGVkQW1udFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnZGlzY291bnRlZEFtbnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291cG9uUGdNb2RlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydjb3Vwb25QZ01vZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVySWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZWZPcmRlcklkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZPcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmT3JkZXJObyddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlZk9yZGVyTm9cIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVyTm8nXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydwYXJlbnRQcm9kdWN0SWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXJlbnRQcm9kdWN0SWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3BhcmVudFByb2R1Y3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG5cbiAgICAgICAgICAgICAgICB7LyogPGZvcm0gaWQ9XCJwYXltZW50Rm9ybVwiIHJlZj1cInBheW1lbnRGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj17YCR7Q09ORklHLkFQSV9CQVNFX1VSTH0vYXBpL3YxL3VzZXIvdHJhbnNhY3Rpb24vc2F2ZWB9IHN0eWxlPXt7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicmVzcG9uc2VcIiBkZWZhdWx0VmFsdWU9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPiAqL31cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRGb3JtXG4iLCJpbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi9QYXltZW50Rm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudEZvcm0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFBheW1lbnRGb3JtIGZyb20gJy4uL3BheW1lbnRGb3JtJ1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5jbGFzcyBQcmltZUNhcmVCb29raW5nVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogJycsXG4gICAgICAgICAgICBnZW5kZXI6ICcnLFxuICAgICAgICAgICAgZW1haWw6JycsXG4gICAgICAgICAgICBwcm9maWxlRGF0YUZpbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHBheW1lbnREYXRhOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9jZWVkKCl7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgbWVtYmVyX3Byb2ZpbGUgPSBudWxsXG4gICAgICAgIGxldCBzZWxlY3RlZFBsYW4gPXt9XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxlY3RlZFBsYW4ucGxhbj0gcGFyc2VJbnQocGFyc2VkLnBsYW5faWQpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSkge1xuICAgICAgICAgICAgbWVtYmVyX3Byb2ZpbGUgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXVxuICAgICAgICB9XG4gICAgICAgIGlmKG1lbWJlcl9wcm9maWxlICYmIG1lbWJlcl9wcm9maWxlLmlzRHVtbXlVc2VyKXtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5zdGF0ZVxuICAgICAgICAgICAgaWYgKGRhdGEubmFtZSA9PSAnJyB8fCBkYXRhLmdlbmRlciA9PSAnJyB8fCBkYXRhLnBob25lTnVtYmVyID09ICcnIHx8IGRhdGEuZW1haWwgPT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZURhdGFGaWxsZWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBmaWxsIHRoZSBpbmZvXCIgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZURhdGFGaWxsZWQ6IHRydWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwcm9maWxlRGF0YT17fVxuICAgICAgICAgICAgcHJvZmlsZURhdGEubmFtZSA9IHRoaXMuc3RhdGUubmFtZVxuICAgICAgICAgICAgcHJvZmlsZURhdGEucGhvbmVOdW1iZXIgPSB0aGlzLnN0YXRlLnBob25lTnVtYmVyXG4gICAgICAgICAgICBwcm9maWxlRGF0YS5nZW5kZXIgPSB0aGlzLnN0YXRlLmdlbmRlclxuICAgICAgICAgICAgcHJvZmlsZURhdGEuZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZVByb2ZpbGUocHJvZmlsZURhdGEsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYucHJvcHMuZ2V0VXNlclByb2ZpbGUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNlbGYucHJvcHMuY3JlYXRlQ2FyZUJvb2tpbmcoc2VsZWN0ZWRQbGFuLChyZXNwKT0+eyAvL3Byb2NlZWQgdG8gcGF5bWVudCBnYXRlIHdheVxuICAgICAgICAgICAgICAgIGlmKHJlc3AucGF5bWVudF9yZXF1aXJlZCl7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvcGF5bWVudC8ke3Jlc3AuZGF0YS5vcmRlcklkfT9yZWZzPWNhcmVgKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NQYXltZW50KHJlc3ApXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvcHJpbWUvc3VjY2Vzcz91c2VyX3BsYW49JytyZXNwLmRhdGEuaWQpXG4gICAgICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3JlYXRlQ2FyZUJvb2tpbmcoc2VsZWN0ZWRQbGFuLChyZXNwKT0+ey8vcHJvY2VlZCB0byBwYXltZW50IGdhdGUgd2F5XG4gICAgICAgICAgICAgICAgaWYocmVzcC5wYXltZW50X3JlcXVpcmVkKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9wYXltZW50LyR7cmVzcC5kYXRhLm9yZGVySWR9P3JlZnM9Y2FyZWApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1BheW1lbnQocmVzcClcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9wcmltZS9zdWNjZXNzP3VzZXJfcGxhbj0nK3Jlc3AuZGF0YS5pZClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHByb2Nlc3NQYXltZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50RGF0YTogZGF0YS5kYXRhIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudEZvcm0nKSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBheW1lbnREYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dEhhbmRsZXIoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PSAncGhvbmVOdW1iZXInKSB7XG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZS5sZW5ndGggPD0gMTBcbiAgICAgICAgICAgICAgICA/IGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PSAxMFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbWVtYmVyX3Byb2ZpbGUgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSkge1xuICAgICAgICAgICAgbWVtYmVyX3Byb2ZpbGUgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXVxuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDU0IH19PlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcm5nLXRvcC0xMiBtcmItNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgbXJuZy10b3AtMTIgY2FyZS13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVNZW1iZXJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlTWVtYnJMb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvZ29vcm5hZ2UucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVNZW1icnR4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkRvY3ByaW1lIENhcmUgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPm1lbWJlcnNoaXA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJfcHJvZmlsZSAmJiBtZW1iZXJfcHJvZmlsZS5pc0R1bW15VXNlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSBkLWZsZXggamMtc3BhY2ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGQtZmxleFwiPjxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIG1hcmdpblJpZ2h0OiAnOHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPk1lbWJlciBEZXRhaWw8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1wdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHQtbnctaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNsdC1sYWJlbFwiIGh0bWxGb3I9XCJtYWxlXCI+PHN1cCBjbGFzc05hbWU9XCJyZXF1aXJlZEFzdFwiPio8L3N1cD5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzbHQtdGV4dC1pbnB1dFwiIHN0eWxlPXt7J3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZSd9fSBhdXRvQ29tcGxldGU9XCJub25lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfXBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsdC1udy1pbnB1dCByYWRpby1tYmxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNsdC1sYWJlbFwiIGh0bWxGb3I9XCJtYWxlXCIgPjxzdXAgY2xhc3NOYW1lPVwicmVxdWlyZWRBc3RcIj4qPC9zdXA+R2VuZGVyOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2x0LWxhYmVsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5NYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAnZ2VuZGVyJzogJ20nIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPkZlbWFsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImdlbmRlclwiIHZhbHVlPVwibVwiIG5hbWU9XCJnZW5kZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgJ2dlbmRlcic6ICdmJyB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5PdGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgJ2dlbmRlcic6ICdvJyB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2x0LW53LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzbHQtbGFiZWxcIiBodG1sRm9yPVwibWFsZVwiPjxzdXAgY2xhc3NOYW1lPVwicmVxdWlyZWRBc3RcIj4qPC9zdXA+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNsdC10ZXh0LWlucHV0XCIgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319IGF1dG9Db21wbGV0ZT1cIm5vbmVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX1wbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHQtbnctaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNsdC1sYWJlbFwiIGh0bWxGb3I9XCJtYWxlXCI+PHN1cCBjbGFzc05hbWU9XCJyZXF1aXJlZEFzdFwiPio8L3N1cD5Nb2JpbGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNsdC10ZXh0LWlucHV0XCIgYXV0b0NvbXBsZXRlPVwibm9uZVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lTnVtYmVyfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cInBob25lTnVtYmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1lbWJlcl9wcm9maWxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZVBhcmFcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21lbXNlY3VyLnBuZ1wifSAvPlZhbGlkIGZvciA6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlU1VicGFyYVwiPjEgeWVhcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVQYXJhXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9tZW11c2VyLnBuZ1wifSAvPk1lbWJlciBOYW1lIDo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVTVWJwYXJhXCIgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319PnttZW1iZXJfcHJvZmlsZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVQYXJhXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9tZW1jYWxsLnBuZ1wifSAvPk1vYmlsZSBubzogPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlU1VicGFyYVwiPnttZW1iZXJfcHJvZmlsZS5waG9uZV9udW1iZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVMaXN0aW5nV2l0aFNpZGVsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJVbGNhcmVMaXN0aW5nV2l0aFNpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aD4wICYmIHRoaXMucHJvcHMuZGF0YVswXS51bmxpbWl0ZWRfb25saW5lX2NvbnN1bHRhdGlvbj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmVMaXN0aUxpXCI+PHAgY2xhc3NOYW1lPVwiY2FyZUxpc3RpblwiPkZyZWUgVW5saW1pdGVkIE9ubGluZSBDb25zdWx0YXRpb24gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+T3VyIG9ubGluZSBjb25zdWx0YXRpb24gdGltaW5ncyBhcmUgZnJvbSA4OjAwIEFNIHRvIDU6MDAgUE08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aD4wICYmIHRoaXMucHJvcHMuZGF0YVswXS5wcmlvcml0eV9xdWV1ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmVMaXN0aUxpXCI+PHAgY2xhc3NOYW1lPVwiY2FyZUxpc3RpblwiPlByaW9yaXR5IFF1ZXVlIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk5vIHdhaXRpbmcgdGltZSE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aD4wICYmIHRoaXMucHJvcHMuZGF0YVswXS5mZWF0dXJlcy5sZW5ndGggPiAwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZGF0YVswXS5mZWF0dXJlcykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUuY291bnQgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17dmFsdWUuaWR9IGNsYXNzTmFtZT1cImNhcmVMaXN0aUxpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVMaXN0aW5cIj57c2VsZi5wcm9wcy5kYXRhWzBdLmZlYXR1cmVfZGV0YWlsc1swXS5uYW1lfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgTWVtZWJlciBjYW4gYXZhaWwgdGhpcyBvZmZlciAke3ZhbHVlLmNvdW50ID09Mj8ndHdpY2UnOidvbmNlJ30gaW4gYSB5ZWFyYH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9jZWVkLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInAtMyB2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0aWNreS1idG5cIj5QYXkgTm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmRhdGE/YCjigrkgJHtwYXJzZUludCh0aGlzLnByb3BzLmRhdGFbMF0uZGVhbF9wcmljZSl9KWA6Jyd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8UmlnaHRCYXIgY2xhc3NOYW1lPVwiY29sLW1kLTUgbWItM1wiIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXltZW50RGF0YSA/IDxQYXltZW50Rm9ybSBwYXltZW50RGF0YT17dGhpcy5zdGF0ZS5wYXltZW50RGF0YX0gcmVmcz0nY2FyZScgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByaW1lQ2FyZUJvb2tpbmdWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0Q2FyZURldGFpbHMsIHN1Ym1pdE9UUCwgc2VuZE9UUCwgcmVzZXRBdXRoLCBjcmVhdGVQcm9maWxlLCBnZXRVc2VyUHJvZmlsZSwgY3JlYXRlQ2FyZUJvb2tpbmcgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgUHJpbWVDYXJlQm9va2luZ1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL3ByaW1lQ2FyZS9wcmltZUNhcmVCb29raW5nVmlldy5qcydcblxuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgcHJpbWVDYXJlQm9va2luZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgZGF0YTonJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0Q2FyZURldGFpbHMoKHJlc3ApPT57IC8vIGdldCBjYXJlIHBsYW5zXG4gICAgICAgICAgICBsZXQgZmVhdHVyZV9kZXRhaWwgPSByZXNwLnBsYW5zLmZpbHRlcih4ID0+IHguaWQgPT0gcGFyc2VkLnBsYW5faWQpXG4gICAgICAgICAgICBmZWF0dXJlX2RldGFpbFswXS5mZWF0dXJlX2RldGFpbHMgPSByZXNwLmZlYXR1cmVfZGV0YWlsc1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTpmZWF0dXJlX2RldGFpbH0pXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByaW1lQ2FyZUJvb2tpbmdWaWV3IHsuLi50aGlzLnByb3BzfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBVU0VSXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRDYXJlRGV0YWlsczogKGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRDYXJlRGV0YWlscyhjYWxsYmFjaykpLFxuICAgICAgICBzZW5kT1RQOiAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSA9PiBkaXNwYXRjaChzZW5kT1RQKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikpLFxuICAgICAgICBzdWJtaXRPVFA6IChudW1iZXIsIG90cCwgZXh0cmFQYXJhbXNEYXRhLCBjYikgPT4gZGlzcGF0Y2goc3VibWl0T1RQKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsIGNiKSksXG4gICAgICAgIHJlc2V0QXV0aDogKCkgPT4gZGlzcGF0Y2gocmVzZXRBdXRoKCkpLFxuICAgICAgICBjcmVhdGVQcm9maWxlOiAocG9zdERhdGEsIGNiKSA9PiBkaXNwYXRjaChjcmVhdGVQcm9maWxlKHBvc3REYXRhLCBjYikpLFxuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIGNyZWF0ZUNhcmVCb29raW5nOihzZWxlY3RlZFBsYW4sIGNiKSA9PiBkaXNwYXRjaChjcmVhdGVDYXJlQm9va2luZyhzZWxlY3RlZFBsYW4sY2IpKVxuICAgICAgICBcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykocHJpbWVDYXJlQm9va2luZyk7XG4iXSwic291cmNlUm9vdCI6IiJ9