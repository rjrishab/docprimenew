exports.ids = [61];
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

/***/ "./dev/js/components/vipClub/digitSummaryView.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/vipClub/digitSummaryView.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DigitSummaryView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let fullName = this.props.selfdata.title + ' ' + this.props.selfdata.name + ' ' + this.props.selfdata.last_name;
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'widget mrb-10' },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'sub-form-input-data' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'p',
                                { className: 'sub-form-hed' },
                                'Self'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'dlts-cnt' },
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/nw-usr.svg' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                fullName
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/calendar-01.svg' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.selfdata.dob
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/mail-01.svg' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.selfdata.email
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/customer-icons/call.svg' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.selfdata.phone_number
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/location-01.svg' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.selfdata.pincode
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/customer-icons/location-colored.svg' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.selfdata.address
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/nw-usr.svg' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.selfdata.nominee_name
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/nw-usr.svg' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.selfdata.nominee_relation
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'widget mrb-10' },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-header text-center action-screen-header' },
                    _react2.default.createElement(
                        'p',
                        { className: 'fw-500 cancel-appointment-head' },
                        'Confirm Payment'
                    ),
                    _react2.default.createElement('hr', null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'payment-content-div' },
                    _react2.default.createElement(
                        'p',
                        { className: 'payment-content fw-500' },
                        'Plan Name'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'payment-content fw-500' },
                        this.props.plandata.name
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'payment-content-div' },
                    _react2.default.createElement(
                        'p',
                        { className: 'payment-content fw-500' },
                        'Premium Amount'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'payment-content fw-500' },
                        '\u20B9 ',
                        this.props.plandata.amount
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'payment-content-div' },
                    _react2.default.createElement(
                        'p',
                        { className: 'payment-content fw-500' },
                        'GST'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'payment-content fw-500' },
                        ' 18%'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'payment-content-div' },
                    _react2.default.createElement(
                        'p',
                        { className: 'payment-content fw-500' },
                        'Amount Payable'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'payment-content fw-500' },
                        '\u20B9  ',
                        this.props.plandata.final_amount
                    )
                )
            )
        );
    }
}

exports.default = DigitSummaryView;

/***/ }),

/***/ "./dev/js/containers/vipClub/DigitSummaryPage.js":
/*!*******************************************************!*\
  !*** ./dev/js/containers/vipClub/DigitSummaryPage.js ***!
  \*******************************************************/
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

var _digitSummaryView = __webpack_require__(/*! ../../components/vipClub/digitSummaryView.js */ "./dev/js/components/vipClub/digitSummaryView.js");

var _digitSummaryView2 = _interopRequireDefault(_digitSummaryView);

var _digitStaticDataView = __webpack_require__(/*! ../../components/vipClub/digitStaticDataView.js */ "./dev/js/components/vipClub/digitStaticDataView.js");

var _digitStaticDataView2 = _interopRequireDefault(_digitStaticDataView);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _paymentForm = __webpack_require__(/*! ../../components/commons/paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class DigitInsuranceFormPage extends _react2.default.Component {

    constructor(props) {
        super(props);
        const parsed = queryString.parse(this.props.location.search);
        this.state = {
            source: parsed.source,
            is_from_organic: parsed.fromOrganic,
            is_pb: parsed.utm_source ? parsed.utm_source && parsed.utm_source.includes('policybazaar.com') : false,
            paymentData: null
        };
    }

    componentDidMount() {

        if (_storage2.default.checkAuth()) {
            this.props.getUserProfile(); // to get loggedIn user profile
        }
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    proceed() {

        if (this.props.selected_digit_plan && Object.keys(this.props.selected_digit_plan).length > 0 && this.props.digit_self_details && Object.keys(this.props.digit_self_details).length > 0) {
            var members = {};
            let param;
            let data = {};
            data.insurance_plan = this.props.selected_digit_plan.id;
            data.members = [];
            this.props.currentSelectedDigitMembersId.map((val, key) => {
                if (Object.keys(this.props.digit_self_details).length > 0) {
                    param = this.props.digit_self_details[val[key]];
                    if (param.id) {
                        members = {};
                        members.title = param.title;
                        members.first_name = param.name;
                        members.last_name = param.last_name;
                        members.email = param.email;
                        members.dob = param.dob;
                        members.gender = param.gender;
                        members.mobile = param.phone_number;
                        members.nominee_name = param.nominee_name;
                        members.nominee_relation = param.nominee_relation;
                        members.pincode = param.pincode;
                        members.profile = param.profile_id;
                        members.id = param.id;
                        members.address = param.address;
                        data.members.push(members);
                        this.props.digitPay(data, resp => {
                            // to request for payment

                            if (resp && resp.error) {
                                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.error });
                                return;
                            }
                            if (resp.payment_required) {
                                this.processPayment(resp);
                            } else {
                                if (resp && resp.data) {
                                    // alert('no payment')
                                    success_id = '/covid-order/summary/' + resp.data.id + '?payment_success=true';
                                    this.props.history.push(success_id);
                                }
                            }
                        });
                    }
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

    render() {
        let selfDataObj = this.props.digit_self_details[Object.keys(this.props.digit_self_details)[0]];
        return _react2.default.createElement(
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
                                                            { className: 'tab_inactive' },
                                                            _react2.default.createElement(
                                                                'a',
                                                                { href: '#' },
                                                                'Fill Member Details'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            { className: 'tab_inactive' },
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
                                        _react2.default.createElement(_digitSummaryView2.default, { selfdata: selfDataObj, plandata: this.props.selected_digit_plan })
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'sticky-btn fixed insuBtnsContainer' },
                            _react2.default.createElement(
                                'button',
                                { className: 'insu-right-orng-btn ins-buy-btn', onClick: () => this.proceed() },
                                'Buy Now'
                            )
                        )
                    )
                ),
                this.state.paymentData ? _react2.default.createElement(_paymentForm2.default, { paymentData: this.state.paymentData, refs: 'opd' }) : ""
            )
        );
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { common_utm_tags, user_loggedIn_number } = state.USER;
    let { selected_digit_plan, digit_self_details, currentSelectedDigitMembersId } = state.VIPCLUB;

    return {
        USER, common_utm_tags, user_loggedIn_number, selected_digit_plan, digit_self_details, currentSelectedDigitMembersId
    };
};

const mapDispatchToProps = dispatch => {
    return {

        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
        submitOTP: (number, otp, extraParamsData, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb)),
        resetAuth: () => dispatch((0, _index.resetAuth)()),
        digitPay: (data, cb) => dispatch((0, _index.digitPay)(data, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DigitInsuranceFormPage);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9wYXltZW50Rm9ybS9QYXltZW50Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3BheW1lbnRGb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL3ZpcENsdWIvZGlnaXRTdGF0aWNEYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL2RpZ2l0U3VtbWFyeVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvdmlwQ2x1Yi9EaWdpdFN1bW1hcnlQYWdlLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUGF5bWVudEZvcm0iLCJzdGF0ZSIsInNlbmRFdmVudCIsInJlZnMiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRQYXltZW50Tm9kZU5hbWUiLCJuYW1lIiwiaW5kZXgiLCJwYXltZW50RGF0YSIsIkNPTkZJRyIsIlBHX01VTFRJX09SREVSX1VSTCIsIlBHX1VSTCIsImRpc3BsYXkiLCJtYXAiLCJpdGVtIiwiaSIsIkRpZ2l0U3RhdGljRGF0YVZpZXciLCJ0b2dnbGUiLCJkd25sVXJsIiwiQVNTRVRTX0JBU0VfVVJMIiwic2V0U3RhdGUiLCJEaWdpdFN1bW1hcnlWaWV3IiwiZnVsbE5hbWUiLCJzZWxmZGF0YSIsInRpdGxlIiwibGFzdF9uYW1lIiwiZG9iIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJwaW5jb2RlIiwiYWRkcmVzcyIsIm5vbWluZWVfbmFtZSIsIm5vbWluZWVfcmVsYXRpb24iLCJwbGFuZGF0YSIsImFtb3VudCIsImZpbmFsX2Ftb3VudCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkRpZ2l0SW5zdXJhbmNlRm9ybVBhZ2UiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwic291cmNlIiwiaXNfZnJvbV9vcmdhbmljIiwiZnJvbU9yZ2FuaWMiLCJpc19wYiIsInV0bV9zb3VyY2UiLCJpbmNsdWRlcyIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJnZXRVc2VyUHJvZmlsZSIsIndpbmRvdyIsInNjcm9sbFRvIiwicHJvY2VlZCIsInNlbGVjdGVkX2RpZ2l0X3BsYW4iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiZGlnaXRfc2VsZl9kZXRhaWxzIiwibWVtYmVycyIsInBhcmFtIiwiaW5zdXJhbmNlX3BsYW4iLCJpZCIsImN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVyc0lkIiwidmFsIiwia2V5IiwiZmlyc3RfbmFtZSIsImdlbmRlciIsIm1vYmlsZSIsInByb2ZpbGUiLCJwcm9maWxlX2lkIiwicHVzaCIsImRpZ2l0UGF5IiwicmVzcCIsImVycm9yIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsInBheW1lbnRfcmVxdWlyZWQiLCJwcm9jZXNzUGF5bWVudCIsInN1Y2Nlc3NfaWQiLCJoaXN0b3J5Iiwic3RhdHVzIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JtIiwic3VibWl0Iiwic2VsZkRhdGFPYmoiLCJtYXBTdGF0ZVRvUHJvcHMiLCJVU0VSIiwiY29tbW9uX3V0bV90YWdzIiwidXNlcl9sb2dnZWRJbl9udW1iZXIiLCJWSVBDTFVCIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzZW5kT1RQIiwibnVtYmVyIiwidmlhU21zIiwidmlhV2hhdHNhcHAiLCJtZXNzYWdlX3R5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QSxXQUFPO0FBQ0hILFlBREcsRUFDSUMsZUFESixFQUNxQkMsb0JBRHJCLEVBQzBDdkMsbUJBRDFDLEVBQzhESSxrQkFEOUQsRUFDaUZLO0FBRGpGLEtBQVA7QUFHSCxDQVJEOztBQVVBLE1BQU1nQyxxQkFBc0JDLFFBQUQsSUFBYztBQUNyQyxXQUFPOztBQUVIOUMsd0JBQWdCLE1BQU04QyxTQUFTLDRCQUFULENBRm5CO0FBR0hDLGlCQUFTLENBQUNDLE1BQUQsRUFBUUMsTUFBUixFQUFlQyxXQUFmLEVBQTJCQyxZQUEzQixFQUF5Q0MsRUFBekMsS0FBZ0ROLFNBQVMsb0JBQVFFLE1BQVIsRUFBZUMsTUFBZixFQUFzQkMsV0FBdEIsRUFBa0NDLFlBQWxDLEVBQWdEQyxFQUFoRCxDQUFULENBSHREO0FBSUhDLG1CQUFXLENBQUNMLE1BQUQsRUFBU00sR0FBVCxFQUFjQyxlQUFkLEVBQThCSCxFQUE5QixLQUFxQ04sU0FBUyxzQkFBVUUsTUFBVixFQUFrQk0sR0FBbEIsRUFBc0JDLGVBQXRCLEVBQXVDSCxFQUF2QyxDQUFULENBSjdDO0FBS0hJLG1CQUFXLE1BQU1WLFNBQVMsdUJBQVQsQ0FMZDtBQU1IeEIsa0JBQVMsQ0FBQ3hFLElBQUQsRUFBTXNHLEVBQU4sS0FBYU4sU0FBUyxxQkFBU2hHLElBQVQsRUFBY3NHLEVBQWQsQ0FBVDtBQU5uQixLQUFQO0FBUUgsQ0FURDs7a0JBYWUseUJBQVFaLGVBQVIsRUFBMEJLLGtCQUExQixFQUE4QzFELHNCQUE5QyxDIiwiZmlsZSI6IjYxLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5cbmNsYXNzIFBheW1lbnRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNlbmRFdmVudCgpIHtcbiAgICAgICAgbGV0IHJlZnMgPSB0aGlzLnByb3BzLnJlZnNcbiAgICAgICAgaWYgKHJlZnMpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29udGludWVDbGlja2VkJywgJ3BhZ2VTb3VyY2UnOiByZWZzLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb250aW51ZS1jbGlja2VkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29udGludWVDbGlja2VkJywgJ3BhZ2VTb3VyY2UnOiAnVU5LTk9XTicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2VuZEV2ZW50KClcbiAgICB9XG5cbiAgICBnZXRQYXltZW50Tm9kZU5hbWUobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGAke25hbWV9WyR7aW5kZXh9XWBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgLy8gbGV0IGRhdGEgPSB7IFwicGF5bWVudE1vZGVcIjogXCJDQ1wiLCBcInJlc3BvbnNlQ29kZVwiOiBcIjIyN1wiLCBcImJhbmtUeElkXCI6IFwiXCIsIFwidHhEYXRlXCI6IFwiSnVuIDQsIDIwMTggMTI6MTA6MjMgUE1cIiwgXCJiYW5rTmFtZVwiOiBcIlNCSVwiLCBcInN0YXR1c01zZ1wiOiBcIk9vcHMgYW4gZXJyb3Igb2NjdXJyZWQuIFdlIHdpbGwgZ2V0IGJhY2sgdG8geW91IVwiLCBcImN1cnJlbmN5XCI6IFwiSU5SXCIsIFwic3RhdHVzQ29kZVwiOiAxLCBcInBnR2F0ZXdheU5hbWVcIjogXCJNT0NLXCIsIFwicmVzcG9uc2VNZXNzYWdlXCI6IFwiWW91ciBwYXltZW50IGhhcyBiZWVuIGRlY2xpbmVkIGJ5IHlvdXIgYmFuay4gUGxlYXNlIGNvbnRhY3QgeW91ciBiYW5rIGZvciBhbnkgcXVlcmllcy4gSWYgbW9uZXkgaGFzIGJlZW4gZGVkdWN0ZWQgZnJvbSB5b3VyIGFjY291bnQsIHlvdXIgYmFuayB3aWxsIGluZm9ybSB1cyB3aXRoaW4gNDggaHJzIGFuZCB3ZSB3aWxsIHJlZnVuZCB0aGUgc2FtZVwiLCBcInR4U3RhdHVzXCI6IFwiVFhOX0ZBSUxVUkVcIiwgXCJjdXN0b21lcklkXCI6IDUxLCBcIm9yZGVyTm9cIjogdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnb3JkZXJJZCddLCBcInN0YXR1c1Nob3J0TXNnXCI6IFwiT3RoZXJzXCIsIFwiZW1haWxcIjogXCJkdW1teV9hcHBvaW50bWVudEBwb2xpY3liYXphYXIuY29tXCIsIFwicGJHYXRld2F5TmFtZVwiOiBcInBheXRtXCIsIFwibW9iaWxlXCI6IFwiOTk5OTk5OTk5N1wiLCBwcm9kdWN0SWQ6IHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3Byb2R1Y3RJZCddIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXSkge1xuICAgICAgICAvLyAgICAgZGF0YVsncmVmZXJlbmNlSWQnXSA9IHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZmVyZW5jZUlkJ11cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGRhdGFbJ3BnVHhJZCddID0gdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnb3JkZXJJZCddXG4gICAgICAgIC8vIGRhdGEgPSBidG9hKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJwYXltZW50Rm9ybVwiIHJlZj1cInBheW1lbnRGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj17dGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpc19zaW5nbGVfZmxvdyddP0NPTkZJRy5QR19NVUxUSV9PUkRFUl9VUkw6Q09ORklHLlBHX1VSTH0gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpc19zaW5nbGVfZmxvdyddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaXRlbXMnXS5tYXAoKGl0ZW0sIGkpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuZ2V0UGF5bWVudE5vZGVOYW1lKCduYW1lJywgaSl9IGlkPXtpdGVtWyduYW1lJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsnbmFtZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuZ2V0UGF5bWVudE5vZGVOYW1lKCdwcm9kdWN0SWQnLCBpKX0gaWQ9e2l0ZW1bJ3Byb2R1Y3RJZCddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ3Byb2R1Y3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuZ2V0UGF5bWVudE5vZGVOYW1lKCd0eEFtb3VudCcsIGkpfSBpZD17aXRlbVsndHhBbW91bnQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWyd0eEFtb3VudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuZ2V0UGF5bWVudE5vZGVOYW1lKCdvcmRlcklkJywgaSl9IGlkPXtpdGVtWydvcmRlcklkJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsnb3JkZXJJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuZ2V0UGF5bWVudE5vZGVOYW1lKCdob2xkUGF5bWVudCcsIGkpfSAgaWQ9e2l0ZW1bJ2hvbGRQYXltZW50J119IGRlZmF1bHRWYWx1ZT17aXRlbVsnaG9sZFBheW1lbnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gJiYgaXRlbVsnaW5zdXJlckNvZGUnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ2luc3VyZXJDb2RlJywgaSl9IGlkPXtpdGVtWydpbnN1cmVyQ29kZSddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ2luc3VyZXJDb2RlJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgOjxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnbmFtZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcm9kdWN0SWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3Byb2R1Y3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eEFtb3VudFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsndHhBbW91bnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwib3JkZXJJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnb3JkZXJJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJob2xkUGF5bWVudFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaG9sZFBheW1lbnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaW5zdXJlckNvZGUnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluc3VyZXJDb2RlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydpbnN1cmVyQ29kZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3VzdElkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydjdXN0SWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1vYmlsZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnbW9iaWxlJ119IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydlbWFpbCddfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3VybFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnc3VybCddfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZnVybFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnZnVybCddfSAvPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZmVyZW5jZUlkJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicmVmZXJlbmNlSWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZmVyZW5jZUlkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImhhc2hcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2hhc2gnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpc1ByZUF1dGhcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2lzUHJlQXV0aCddfSAvPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3BheXRtTXNnJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGF5dG1Nc2dcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3BheXRtTXNnJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2NvdXBvbkNvZGUnXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvdXBvbkNvZGVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2NvdXBvbkNvZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGlzY291bnRlZEFtbnRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2Rpc2NvdW50ZWRBbW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvdXBvblBnTW9kZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY291cG9uUGdNb2RlJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZPcmRlcklkJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicmVmT3JkZXJJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmT3JkZXJJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVyTm8nXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZWZPcmRlck5vXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZPcmRlck5vJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGFyZW50UHJvZHVjdElkJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFyZW50UHJvZHVjdElkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydwYXJlbnRQcm9kdWN0SWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuXG4gICAgICAgICAgICAgICAgey8qIDxmb3JtIGlkPVwicGF5bWVudEZvcm1cIiByZWY9XCJwYXltZW50Rm9ybVwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249e2Ake0NPTkZJRy5BUElfQkFTRV9VUkx9L2FwaS92MS91c2VyL3RyYW5zYWN0aW9uL3NhdmVgfSBzdHlsZT17eyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlc3BvbnNlXCIgZGVmYXVsdFZhbHVlPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT4gKi99XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQYXltZW50Rm9ybVxuIiwiaW1wb3J0IFBheW1lbnRGb3JtIGZyb20gJy4vUGF5bWVudEZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRGb3JtIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBEaWdpdFN0YXRpY0RhdGFWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvZ2dsZTogJ29uZSdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGR3bmxVcmwgPSAnaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZnVySVVYVGNtd2dBNnpRMWlwZnlkRkRjRUdsZXEyUkUvdmlldyc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1jYXJkLWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtbmFtZS1oZWFkLWRpdiBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQgZGlnaXQtbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgXCIgd2lkdGg9XCI2MFwiIHNyYz1cImh0dHBzOi8vd3d3LnJlaW5zdXJhbmNlbmUud3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDMvZGlnaXQtaW5zdXJhbmNlLWxvZ28uanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWdpdCBDb3ZpZCBHcm91cCBpbnN1cmFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1wZGYtZHdubG9hZC1kaXYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWZ1cklVWFRjbXdnQTZ6UTFpcGZ5ZEZEY0VHbGVxMlJFL3ZpZXdcIiB0YXJnZXQ9XCJfYmxhbmtcIiBkb3dubG9hZCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wZGYtZHduLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9saWN5IERldGFpbHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXN3aWNoLXRhYnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PiB0aGlzLnNldFN0YXRlKHt0b2dnbGU6J29uZSd9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS50b2dnbGUgPT0gXCJvbmVcIj8nYWN0aXZlJzonaW5zLXRhYi1pbmFjdGl2ZSd9PkZlYXR1cmVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT4gdGhpcy5zZXRTdGF0ZSh7dG9nZ2xlOid0d28nfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMuc3RhdGUudG9nZ2xlID09IFwidHdvXCI/J2FjdGl2ZSc6J2lucy10YWItaW5hY3RpdmUnfSA+V2hhdCdzIG5vdCBDb3ZlcmVkPzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXRhYnMtY29udGVudCB3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9nZ2xlID09IFwib25lXCI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3VtIEluc3VyZWQgVHlwZSA6IEluZGl2aWR1YWwgZm9yIGVhY2ggbWVtYmVyIGNvdmVyZWQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Um9vbSByZW50IHJlc3RyaWN0aW9uIDogTm8gUmVzdHJpY3Rpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SUNVIGxpbWl0IDogTm8gUmVzdHJpY3Rpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UHJlIGFuZCBQb3N0IGhvc3BpdGFsaXphdGlvbiBkYXlzIDogMzAgZGF5cyBhbmQgNjAgZGF5cyByZXNwZWN0aXZlbHk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Um9hZCBBbWJ1bGFuY2UgOiAxJSBvZiB0aGUgU0kgKHVwIHRvIElOUiA1LDAwMCk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2Vjb25kIG1lZGljYWwgb3BpbmlvbiA6IENvdmVyZWQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VHlwZXMgb2YgaG9zcGl0YWxzIGNvdmVyZWQgOiBBbGw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhvc3BpdGFsaXNhdGlvbiBleHBlbnNlcyBub3QgaW4gbGlldSBvZiB0cmVhdG1lbnQgZm9yIENvcm9uYXZpcnVzIGRpc2Vhc2UgKENPVklELTE5KSB3aWxsIG5vdCBiZSBjb3ZlcmVkLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbnN1cmVkIG1lbWJlcnMgYWxyZWFkeSB0cmVhdGVkIGZvciBvciBxdWFyYW50aW5lZCBmb3IgQ29yb25hdmlydXMgZGlzZWFzZSAoQ09WSUQtMTkpIGJlZm9yZSB0aGUgcG9saWN5IGlzc3VhbmNlIHdpbGwgbm90IGJlIGNvdmVyZWQuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRyZWF0bWVudCB0YWtlbiBvdXRzaWRlIEluZGlhIHdpbGwgbm90IGJlIGNvdmVyZWQuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhvbWUgaG9zcGl0YWxpc2F0aW9uIChEb21pY2lsaWFyeSBob3NwaXRhbGlzYXRpb24pIGV4cGVuc2VzIHdpbGwgbm90IGJlIGNvdmVyZWQuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhvc3BpdGFsaXNhdGlvbiBleHBlbnNlcyBmb3IgcGF0aWVudHMgb25seSB1bmRlciBpbnZlc3RpZ2F0aW9uIHdpdGggaW5jb25jbHVzaXZlIG1lZGljYWwgcmVwb3J0IHdpbGwgbm90IGJlIGNvdmVyZWQuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgRGlnaXRTdGF0aWNEYXRhVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgRGlnaXRTdW1tYXJ5VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmdWxsTmFtZSA9IHRoaXMucHJvcHMuc2VsZmRhdGEudGl0bGUrICcgJyArIHRoaXMucHJvcHMuc2VsZmRhdGEubmFtZSArICcgJyArdGhpcy5wcm9wcy5zZWxmZGF0YS5sYXN0X25hbWU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1mb3JtLWlucHV0LWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItZm9ybS1oZWRcIj5TZWxmPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsdHMtY250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL253LXVzci5zdmcnfSAvPjxzcGFuPntmdWxsTmFtZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jYWxlbmRhci0wMS5zdmcnfSAvPjxzcGFuPnt0aGlzLnByb3BzLnNlbGZkYXRhLmRvYn08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9tYWlsLTAxLnN2Zyd9IC8+PHNwYW4+e3RoaXMucHJvcHMuc2VsZmRhdGEuZW1haWx9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvY2FsbC5zdmcnfSAvPjxzcGFuPnt0aGlzLnByb3BzLnNlbGZkYXRhLnBob25lX251bWJlcn08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9sb2NhdGlvbi0wMS5zdmcnfSAvPjxzcGFuPnt0aGlzLnByb3BzLnNlbGZkYXRhLnBpbmNvZGV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvbG9jYXRpb24tY29sb3JlZC5zdmcnfSAvPjxzcGFuPnt0aGlzLnByb3BzLnNlbGZkYXRhLmFkZHJlc3N9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvbnctdXNyLnN2Zyd9IC8+PHNwYW4+e3RoaXMucHJvcHMuc2VsZmRhdGEubm9taW5lZV9uYW1lfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL253LXVzci5zdmcnfSAvPjxzcGFuPnt0aGlzLnByb3BzLnNlbGZkYXRhLm5vbWluZWVfcmVsYXRpb259PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5Db25maXJtIFBheW1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPlBsYW4gTmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj57dGhpcy5wcm9wcy5wbGFuZGF0YS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPlByZW1pdW0gQW1vdW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPiYjODM3Nzsge3RoaXMucHJvcHMucGxhbmRhdGEuYW1vdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPkdTVDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4gMTglPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPlBvbGljeSBTdGFydERhdGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+LS0vLS0vLS08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+QW1vdW50IFBheWFibGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyAge3RoaXMucHJvcHMucGxhbmRhdGEuZmluYWxfYW1vdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpZ2l0U3VtbWFyeVZpZXc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgc2VuZE9UUCwgc3VibWl0T1RQLCByZXNldEF1dGgsIGdldFVzZXJQcm9maWxlLCBkaWdpdFBheSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgRGlnaXRTdW1tYXJ5VmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpcENsdWIvZGlnaXRTdW1tYXJ5Vmlldy5qcydcbmltcG9ydCBEaWdpdFN0YXRpY0RhdGFWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdmlwQ2x1Yi9kaWdpdFN0YXRpY0RhdGFWaWV3LmpzJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IFBheW1lbnRGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9wYXltZW50Rm9ybSdcblxuY2xhc3MgRGlnaXRJbnN1cmFuY2VGb3JtUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7ICAgIFxuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc291cmNlOnBhcnNlZC5zb3VyY2UsXG4gICAgICAgICAgICBpc19mcm9tX29yZ2FuaWM6cGFyc2VkLmZyb21PcmdhbmljLFxuICAgICAgICAgICAgaXNfcGI6cGFyc2VkLnV0bV9zb3VyY2U/cGFyc2VkLnV0bV9zb3VyY2UgJiYgcGFyc2VkLnV0bV9zb3VyY2UuaW5jbHVkZXMoJ3BvbGljeWJhemFhci5jb20nKTpmYWxzZSxcbiAgICAgICAgICAgIHBheW1lbnREYXRhOm51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKSAvLyB0byBnZXQgbG9nZ2VkSW4gdXNlciBwcm9maWxlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZWVkKCl7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRfZGlnaXRfcGxhbiAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX2RpZ2l0X3BsYW4pLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5kaWdpdF9zZWxmX2RldGFpbHMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5kaWdpdF9zZWxmX2RldGFpbHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBtZW1iZXJzID0ge31cbiAgICAgICAgICAgIGxldCBwYXJhbVxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICAgICAgZGF0YS5pbnN1cmFuY2VfcGxhbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfZGlnaXRfcGxhbi5pZFxuICAgICAgICAgICAgZGF0YS5tZW1iZXJzID0gW11cbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkRGlnaXRNZW1iZXJzSWQubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRpZ2l0X3NlbGZfZGV0YWlscykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbSA9IHRoaXMucHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzW3ZhbFtrZXldXVxuICAgICAgICAgICAgICAgICAgICBpZihwYXJhbS5pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzID0ge31cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMudGl0bGUgPSBwYXJhbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVycy5maXJzdF9uYW1lID0gcGFyYW0ubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVycy5sYXN0X25hbWUgPSBwYXJhbS5sYXN0X25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMuZW1haWwgPSBwYXJhbS5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVycy5kb2IgPSBwYXJhbS5kb2JcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMuZ2VuZGVyID0gcGFyYW0uZ2VuZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzLm1vYmlsZSA9IHBhcmFtLnBob25lX251bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVycy5ub21pbmVlX25hbWUgPSBwYXJhbS5ub21pbmVlX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMubm9taW5lZV9yZWxhdGlvbiA9IHBhcmFtLm5vbWluZWVfcmVsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMucGluY29kZSA9IHBhcmFtLnBpbmNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMucHJvZmlsZSA9IHBhcmFtLnByb2ZpbGVfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMuaWQgPSBwYXJhbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVycy5hZGRyZXNzID0gcGFyYW0uYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tZW1iZXJzLnB1c2gobWVtYmVycylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlnaXRQYXkoZGF0YSwgKHJlc3ApID0+IHsgLy8gdG8gcmVxdWVzdCBmb3IgcGF5bWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3AgJiYgcmVzcC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IHJlc3AuZXJyb3IgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLnBheW1lbnRfcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUGF5bWVudChyZXNwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3AgJiYgcmVzcC5kYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCdubyBwYXltZW50JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NfaWQgPSAnL2NvdmlkLW9yZGVyL3N1bW1hcnkvJytyZXNwLmRhdGEuaWQrJz9wYXltZW50X3N1Y2Nlc3M9dHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHN1Y2Nlc3NfaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2Nlc3NQYXltZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50RGF0YTogZGF0YS5kYXRhIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpICYmIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUucGF5bWVudERhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW1lbnRGb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IHNlbGZEYXRhT2JqID0gdGhpcy5wcm9wcy5kaWdpdF9zZWxmX2RldGFpbHNbT2JqZWN0LmtleXModGhpcy5wcm9wcy5kaWdpdF9zZWxmX2RldGFpbHMpWzBdXTsgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGFydGljbGUtY29udGFpbmVyIGJvdHRvbU1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMCBjb2wtbGctMTAgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT0gdG9wIHNlY3Rpb24gd2l0aCBpY29ucyBhbmQgbGlzdGluZyA9PT09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxEaWdpdFN0YXRpY0RhdGFWaWV3IC8+ICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IHRvcCBzZWN0aW9uIHdpdGggaWNvbnMgYW5kIGxpc3RpbmcgPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PSBTdGVwcyBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMCBkaWdpLXN0ZXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXN0YXR1cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fbWVudVwiIGlkPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX3RhYnNcIiBpZD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYl9pbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q2hvb3NlIFlvdXIgUGxhbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0YWJfaW5hY3RpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RmlsbCBNZW1iZXIgRGV0YWlsczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiX2luYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5QYXltZW50PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpZ2l0U3VtbWFyeVZpZXcgc2VsZmRhdGE9e3NlbGZEYXRhT2JqfSBwbGFuZGF0YT17dGhpcy5wcm9wcy5zZWxlY3RlZF9kaWdpdF9wbGFufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IENvbW1vbiBidXR0b24gPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktYnRuIGZpeGVkIGluc3VCdG5zQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5zdS1yaWdodC1vcm5nLWJ0biBpbnMtYnV5LWJ0blwiIG9uQ2xpY2s9eygpPT50aGlzLnByb2NlZWQoKX0+QnV5IE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PSBDb21tb24gYnV0dG9uID09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBheW1lbnREYXRhID8gPFBheW1lbnRGb3JtIHBheW1lbnREYXRhPXt0aGlzLnN0YXRlLnBheW1lbnREYXRhfSByZWZzPSdvcGQnIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuXG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBVU0VSID0gc3RhdGUuVVNFUlxuICAgIGxldCB7IGNvbW1vbl91dG1fdGFncywgdXNlcl9sb2dnZWRJbl9udW1iZXIgfSA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyAgc2VsZWN0ZWRfZGlnaXRfcGxhbixkaWdpdF9zZWxmX2RldGFpbHMsY3VycmVudFNlbGVjdGVkRGlnaXRNZW1iZXJzSWQgfSA9IHN0YXRlLlZJUENMVUJcblxuICAgIHJldHVybiB7XG4gICAgICAgIFVTRVIsICBjb21tb25fdXRtX3RhZ3MsIHVzZXJfbG9nZ2VkSW5fbnVtYmVyLHNlbGVjdGVkX2RpZ2l0X3BsYW4sZGlnaXRfc2VsZl9kZXRhaWxzLGN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVyc0lkXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICBzZW5kT1RQOiAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSA9PiBkaXNwYXRjaChzZW5kT1RQKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikpLFxuICAgICAgICBzdWJtaXRPVFA6IChudW1iZXIsIG90cCwgZXh0cmFQYXJhbXNEYXRhLGNiKSA9PiBkaXNwYXRjaChzdWJtaXRPVFAobnVtYmVyLCBvdHAsZXh0cmFQYXJhbXNEYXRhLCBjYikpLFxuICAgICAgICByZXNldEF1dGg6ICgpID0+IGRpc3BhdGNoKHJlc2V0QXV0aCgpKSxcbiAgICAgICAgZGlnaXRQYXk6KGRhdGEsY2IpID0+IGRpc3BhdGNoKGRpZ2l0UGF5KGRhdGEsY2IpKVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShEaWdpdEluc3VyYW5jZUZvcm1QYWdlKSJdLCJzb3VyY2VSb290IjoiIn0=