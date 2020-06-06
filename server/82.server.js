exports.ids = [82];
exports.modules = {

/***/ "./dev/js/components/commons/payment/index.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/payment/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paymentView = __webpack_require__(/*! ./paymentView */ "./dev/js/components/commons/payment/paymentView.js");

var _paymentView2 = _interopRequireDefault(_paymentView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _paymentView2.default;

/***/ }),

/***/ "./dev/js/components/commons/payment/paymentView.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/payment/paymentView.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _paymentForm = __webpack_require__(/*! ../../commons/paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _reactImageLightbox = __webpack_require__(/*! react-image-lightbox */ "react-image-lightbox");

var _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

const images = ["/assets" + "/img/customer-icons/image2-min.jpg", "/assets" + "/img/customer-icons/image1-min.jpg", "/assets" + "/img/customer-icons/image3-min.jpg"];
class PaymentView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPayment: "",
            paymentData: {},
            paymentEnabled: false,
            photoIndex: 0,
            isOpen: false,
            gateway: '',
            mode: '',
            payment_options: [],
            selectedId: ''
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
        let orderId = this.props.match.params.id;
        this.props.fetchPgData(orderId, (err, data) => {
            if (data && data.status) {
                let selectedPayment = [];
                if (data.payment_options) {
                    selectedPayment = data.payment_options.filter(x => x.is_selected);
                }
                this.setState({
                    paymentEnabled: true, paymentData: data.data, payment_options: data.payment_options || [], selectedPayment: selectedPayment.length ? selectedPayment[0].action : '', gateway: selectedPayment.length ? selectedPayment[0].payment_gateway : '', mode: selectedPayment.length ? selectedPayment[0].action : '',
                    selectedId: selectedPayment.length ? selectedPayment[0].id : ''
                });
            }
        });
    }

    selectPaymentType(id, e) {
        let gateway = 'paytm';
        let mode = '';
        if (e.target.dataset && e.target.dataset.gateway) {
            gateway = e.target.dataset.gateway;
        }
        if (e.target.dataset && e.target.dataset.mode) {
            mode = e.target.dataset.mode;
        }
        this.setState({ selectedPayment: e.target.value, selectedId: id, gateway, mode });
    }

    proceed() {
        const parsed = queryString.parse(window.location.search);

        if (parsed.refs) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ContinueClicked', 'pageSource': parsed.refs, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
        } else {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ContinueClicked', 'pageSource': 'UNKNOWN', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-clicked'
            };

            _gtm2.default.sendEvent({ data: data });
        }

        let form = document.getElementById('paymentForm');
        if (this.state.mode != '') {
            form.submit();
        }
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        let totalAmount = '';
        if (this.state.paymentData && this.state.paymentData.txAmount) {
            totalAmount = parseInt(this.state.paymentData.txAmount);
        }

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
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
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        _react2.default.createElement(
                            'section',
                            { className: 'booking-confirm-screen' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrt-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content' },
                                                _react2.default.createElement(
                                                    'ul',
                                                    { className: 'list payment-method' },
                                                    this.state.payment_options.map((paymentType, key) => {

                                                        return _react2.default.createElement(
                                                            'li',
                                                            { key: key, style: { position: 'relative' } },
                                                            _react2.default.createElement(
                                                                'label',
                                                                { htmlFor: `S{paymentType.action}_${paymentType.payment_gateway}`, className: 'paytm-label' },
                                                                ' ',
                                                                _react2.default.createElement('img', { src: paymentType.image, className: 'img-fluid' }),
                                                                ' ',
                                                                paymentType.name
                                                            ),
                                                            totalAmount && totalAmount >= 100 ? _react2.default.createElement(
                                                                'span',
                                                                { className: 'fw-500', style: { position: 'absolute', color: 'green', fontSize: 12, top: 35, left: 74 } },
                                                                paymentType.description
                                                            ) : '',
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'float-right' },
                                                                _react2.default.createElement('input', { type: 'radio', onChange: this.selectPaymentType.bind(this, paymentType.id), checked: !!(this.state.selectedId == paymentType.id), value: paymentType.action, className: 'radio-inline', name: 'gender', id: `${paymentType.action}_${paymentType.payment_gateway}`, 'data-mode': paymentType.action, 'data-pay': paymentType.id, 'data-gateway': paymentType.payment_gateway })
                                                            )
                                                        );
                                                    })
                                                )
                                            )
                                        )
                                    )
                                ),
                                false ? undefined : _react2.default.createElement(
                                    'div',
                                    { className: ' d-flex align-items-start labTest-dtls', style: { 'marginTop': '11px', marginBottom: '10px' } },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/icons/info.svg" }),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'fw-500', style: { flex: 1, paddingLeft: '6px' } },
                                        'American Express cards are not accepted'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_paymentForm2.default, { paymentData: this.state.paymentData, mode: this.state.mode, gateway: this.state.gateway }),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.proceed.bind(this), className: 'p-2 v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn', disabled: !this.state.paymentEnabled },
                            'Continue'
                        )
                    ),
                    _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', noChatButton: true, msgTemplate: 'gold_general_template' })
                )
            )
        );
    }
}

exports.default = PaymentView;

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

/***/ "./dev/js/containers/commons/Payment.js":
/*!**********************************************!*\
  !*** ./dev/js/containers/commons/Payment.js ***!
  \**********************************************/
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

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _index2 = __webpack_require__(/*! ../../components/commons/payment/index.js */ "./dev/js/components/commons/payment/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Payment extends _react2.default.Component {
    constructor(props) {
        super(props);
        if (!_storage2.default.checkAuth()) {
            this.props.history.replace(`/login?callback=/`);
        }
    }

    // static loadData(store) {
    //     return store.dispatch(getUserProfile())
    // }

    componentDidMount() {
        if (_storage2.default.checkAuth()) {
            this.props.getCartItems();
        }
    }

    render() {

        return _react2.default.createElement(_index3.default, this.props);
    }
}

Payment.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {

    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPgData: (id, cb) => dispatch((0, _index.fetchPgData)(id, cb)),
        getCartItems: () => dispatch((0, _index.getCartItems)())
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Payment);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3BheW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9wYXltZW50L3BheW1lbnRWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvcGF5bWVudEZvcm0vUGF5bWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9wYXltZW50Rm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL1BheW1lbnQuanMiXSwibmFtZXMiOlsicGF5bWVudFZpZXciLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJpbWFnZXMiLCJBU1NFVFNfQkFTRV9VUkwiLCJQYXltZW50VmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2VsZWN0ZWRQYXltZW50IiwicGF5bWVudERhdGEiLCJwYXltZW50RW5hYmxlZCIsInBob3RvSW5kZXgiLCJpc09wZW4iLCJnYXRld2F5IiwibW9kZSIsInBheW1lbnRfb3B0aW9ucyIsInNlbGVjdGVkSWQiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsInNjcm9sbFRvIiwib3JkZXJJZCIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJmZXRjaFBnRGF0YSIsImVyciIsImRhdGEiLCJzdGF0dXMiLCJmaWx0ZXIiLCJ4IiwiaXNfc2VsZWN0ZWQiLCJzZXRTdGF0ZSIsImxlbmd0aCIsImFjdGlvbiIsInBheW1lbnRfZ2F0ZXdheSIsInNlbGVjdFBheW1lbnRUeXBlIiwiZSIsInRhcmdldCIsImRhdGFzZXQiLCJ2YWx1ZSIsInByb2NlZWQiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVmcyIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3VibWl0IiwicmVuZGVyIiwidG90YWxBbW91bnQiLCJ0eEFtb3VudCIsInBhcnNlSW50IiwibWFwIiwicGF5bWVudFR5cGUiLCJrZXkiLCJwb3NpdGlvbiIsImltYWdlIiwibmFtZSIsImNvbG9yIiwiZm9udFNpemUiLCJ0b3AiLCJsZWZ0IiwiZGVzY3JpcHRpb24iLCJiaW5kIiwibWFyZ2luQm90dG9tIiwiZmxleCIsInBhZGRpbmdMZWZ0IiwiUGF5bWVudEZvcm0iLCJnZXRQYXltZW50Tm9kZU5hbWUiLCJpbmRleCIsIkNPTkZJRyIsIlBHX01VTFRJX09SREVSX1VSTCIsIlBHX1VSTCIsImRpc3BsYXkiLCJpdGVtIiwiaSIsIlBheW1lbnQiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiaGlzdG9yeSIsInJlcGxhY2UiLCJnZXRDYXJ0SXRlbXMiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBRWVBLHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTUMsY0FBY0MsbUJBQU9BLENBQUMsa0NBQVIsQ0FBcEI7O0FBRUEsTUFBTUMsU0FBUyxDQUNYQyxTQUFlQSxHQUFHLG9DQURQLEVBRVhBLFNBQWVBLEdBQUcsb0NBRlAsRUFHWEEsU0FBZUEsR0FBRyxvQ0FIUCxDQUFmO0FBS0EsTUFBTUMsV0FBTixTQUEwQkMsZ0JBQU1DLFNBQWhDLENBQTBDO0FBQ3RDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsNkJBQWlCLEVBRFI7QUFFVEMseUJBQWEsRUFGSjtBQUdUQyw0QkFBZ0IsS0FIUDtBQUlUQyx3QkFBWSxDQUpIO0FBS1RDLG9CQUFRLEtBTEM7QUFNVEMscUJBQVMsRUFOQTtBQU9UQyxrQkFBTSxFQVBHO0FBUVRDLDZCQUFpQixFQVJSO0FBU1RDLHdCQUFZO0FBVEgsU0FBYjtBQVdIOztBQUVEQyx3QkFBb0I7QUFDaEIsWUFBSUMsTUFBSixFQUFZO0FBQ1JBLG1CQUFPQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7QUFDRCxZQUFJQyxVQUFVLEtBQUtkLEtBQUwsQ0FBV2UsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLEVBQXRDO0FBQ0EsYUFBS2pCLEtBQUwsQ0FBV2tCLFdBQVgsQ0FBdUJKLE9BQXZCLEVBQWdDLENBQUNLLEdBQUQsRUFBTUMsSUFBTixLQUFlO0FBQzNDLGdCQUFJQSxRQUFRQSxLQUFLQyxNQUFqQixFQUF5QjtBQUNyQixvQkFBSW5CLGtCQUFrQixFQUF0QjtBQUNBLG9CQUFJa0IsS0FBS1gsZUFBVCxFQUEwQjtBQUN0QlAsc0NBQWtCa0IsS0FBS1gsZUFBTCxDQUFxQmEsTUFBckIsQ0FBNEJDLEtBQUtBLEVBQUVDLFdBQW5DLENBQWxCO0FBQ0g7QUFDRCxxQkFBS0MsUUFBTCxDQUFjO0FBQ1ZyQixvQ0FBZ0IsSUFETixFQUNZRCxhQUFhaUIsS0FBS0EsSUFEOUIsRUFDb0NYLGlCQUFpQlcsS0FBS1gsZUFBTCxJQUF3QixFQUQ3RSxFQUNpRlAsaUJBQWlCQSxnQkFBZ0J3QixNQUFoQixHQUF5QnhCLGdCQUFnQixDQUFoQixFQUFtQnlCLE1BQTVDLEdBQXFELEVBRHZKLEVBQzJKcEIsU0FBU0wsZ0JBQWdCd0IsTUFBaEIsR0FBeUJ4QixnQkFBZ0IsQ0FBaEIsRUFBbUIwQixlQUE1QyxHQUE4RCxFQURsTyxFQUNzT3BCLE1BQU1OLGdCQUFnQndCLE1BQWhCLEdBQXlCeEIsZ0JBQWdCLENBQWhCLEVBQW1CeUIsTUFBNUMsR0FBcUQsRUFEalM7QUFFVmpCLGdDQUFZUixnQkFBZ0J3QixNQUFoQixHQUF5QnhCLGdCQUFnQixDQUFoQixFQUFtQmUsRUFBNUMsR0FBaUQ7QUFGbkQsaUJBQWQ7QUFJSDtBQUNKLFNBWEQ7QUFhSDs7QUFFRFksc0JBQWtCWixFQUFsQixFQUFzQmEsQ0FBdEIsRUFBeUI7QUFDckIsWUFBSXZCLFVBQVUsT0FBZDtBQUNBLFlBQUlDLE9BQU8sRUFBWDtBQUNBLFlBQUlzQixFQUFFQyxNQUFGLENBQVNDLE9BQVQsSUFBb0JGLEVBQUVDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQnpCLE9BQXpDLEVBQWtEO0FBQzlDQSxzQkFBVXVCLEVBQUVDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQnpCLE9BQTNCO0FBQ0g7QUFDRCxZQUFJdUIsRUFBRUMsTUFBRixDQUFTQyxPQUFULElBQW9CRixFQUFFQyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJ4QixJQUF6QyxFQUErQztBQUMzQ0EsbUJBQU9zQixFQUFFQyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJ4QixJQUF4QjtBQUNIO0FBQ0QsYUFBS2lCLFFBQUwsQ0FBYyxFQUFFdkIsaUJBQWlCNEIsRUFBRUMsTUFBRixDQUFTRSxLQUE1QixFQUFtQ3ZCLFlBQVlPLEVBQS9DLEVBQW1EVixPQUFuRCxFQUE0REMsSUFBNUQsRUFBZDtBQUNIOztBQUVEMEIsY0FBVTtBQUNOLGNBQU1DLFNBQVMzQyxZQUFZNEMsS0FBWixDQUFrQnhCLE9BQU95QixRQUFQLENBQWdCQyxNQUFsQyxDQUFmOztBQUVBLFlBQUlILE9BQU9JLElBQVgsRUFBaUI7QUFDYixnQkFBSW5CLE9BQU87QUFDUCw0QkFBWSxhQURMLEVBQ29CLFVBQVUsaUJBRDlCLEVBQ2lELGNBQWNlLE9BQU9JLElBRHRFLEVBQzRFLGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEN0csRUFDaUgsVUFBVSxDQUQzSCxFQUM4SCxTQUFTO0FBRHZJLGFBQVg7O0FBSUFELDBCQUFJRSxTQUFKLENBQWMsRUFBRXRCLE1BQU1BLElBQVIsRUFBZDtBQUVILFNBUEQsTUFPTztBQUNILGdCQUFJQSxPQUFPO0FBQ1AsNEJBQVksYUFETCxFQUNvQixVQUFVLGlCQUQ5QixFQUNpRCxjQUFjLFNBRC9ELEVBQzBFLGNBQWNvQixjQUFJQyxTQUFKLE1BQW1CLEVBRDNHLEVBQytHLFVBQVUsQ0FEekgsRUFDNEgsU0FBUztBQURySSxhQUFYOztBQUlBRCwwQkFBSUUsU0FBSixDQUFjLEVBQUV0QixNQUFNQSxJQUFSLEVBQWQ7QUFDSDs7QUFFRCxZQUFJdUIsT0FBT0MsU0FBU0MsY0FBVCxDQUF3QixhQUF4QixDQUFYO0FBQ0EsWUFBSSxLQUFLNUMsS0FBTCxDQUFXTyxJQUFYLElBQW1CLEVBQXZCLEVBQTJCO0FBQ3ZCbUMsaUJBQUtHLE1BQUw7QUFDSDtBQUNKOztBQUVEQyxhQUFTO0FBQ0wsY0FBTSxFQUFFMUMsVUFBRixFQUFjQyxNQUFkLEtBQXlCLEtBQUtMLEtBQXBDOztBQUVBLFlBQUkrQyxjQUFjLEVBQWxCO0FBQ0EsWUFBSSxLQUFLL0MsS0FBTCxDQUFXRSxXQUFYLElBQTBCLEtBQUtGLEtBQUwsQ0FBV0UsV0FBWCxDQUF1QjhDLFFBQXJELEVBQStEO0FBQzNERCwwQkFBY0UsU0FBUyxLQUFLakQsS0FBTCxDQUFXRSxXQUFYLENBQXVCOEMsUUFBaEMsQ0FBZDtBQUNIOztBQUVELGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUNJLDBDQUFDLDhCQUFELE9BREo7QUFFSTtBQUFBO0FBQUEsa0JBQVMsV0FBVSxnQ0FBbkI7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxpQ0FBZjtBQUNJLGtEQUFDLGlCQUFELE9BREo7QUFHSTtBQUFBO0FBQUEsMEJBQUssV0FBVSx3Q0FBZjtBQW1CSTtBQUFBO0FBQUEsOEJBQVMsV0FBVSx3QkFBbkI7QUFDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxpQkFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLEtBQWY7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxRQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQSxrREFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLHNEQUFJLFdBQVUscUJBQWQ7QUFFUSx5REFBS2hELEtBQUwsQ0FBV1EsZUFBWCxDQUEyQjBDLEdBQTNCLENBQStCLENBQUNDLFdBQUQsRUFBY0MsR0FBZCxLQUFzQjs7QUFFakQsK0RBQU87QUFBQTtBQUFBLDhEQUFJLEtBQUtBLEdBQVQsRUFBYyxPQUFPLEVBQUVDLFVBQVUsVUFBWixFQUFyQjtBQUNIO0FBQUE7QUFBQSxrRUFBTyxTQUFVLHlCQUF3QkYsWUFBWXhCLGVBQWdCLEVBQXJFLEVBQXdFLFdBQVUsYUFBbEY7QUFBQTtBQUFpRyx1R0FBSyxLQUFLd0IsWUFBWUcsS0FBdEIsRUFBNkIsV0FBVSxXQUF2QyxHQUFqRztBQUFBO0FBQXdKSCw0RUFBWUk7QUFBcEssNkRBREc7QUFJQ1IsMkVBQWVBLGVBQWUsR0FBOUIsR0FDSTtBQUFBO0FBQUEsa0VBQU0sV0FBVSxRQUFoQixFQUF5QixPQUFPLEVBQUVNLFVBQVUsVUFBWixFQUF3QkcsT0FBTyxPQUEvQixFQUF3Q0MsVUFBVSxFQUFsRCxFQUFzREMsS0FBSyxFQUEzRCxFQUErREMsTUFBTSxFQUFyRSxFQUFoQztBQUE0R1IsNEVBQVlTO0FBQXhILDZEQURKLEdBQ2tKLEVBTG5KO0FBT0g7QUFBQTtBQUFBLGtFQUFNLFdBQVUsYUFBaEI7QUFBOEIseUdBQU8sTUFBSyxPQUFaLEVBQW9CLFVBQVUsS0FBS2hDLGlCQUFMLENBQXVCaUMsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0NWLFlBQVluQyxFQUE5QyxDQUE5QixFQUFpRixTQUFTLENBQUMsRUFBRSxLQUFLaEIsS0FBTCxDQUFXUyxVQUFYLElBQXlCMEMsWUFBWW5DLEVBQXZDLENBQTNGLEVBQXVJLE9BQU9tQyxZQUFZekIsTUFBMUosRUFBa0ssV0FBVSxjQUE1SyxFQUEyTCxNQUFLLFFBQWhNLEVBQXlNLElBQUssR0FBRXlCLFlBQVl6QixNQUFPLElBQUd5QixZQUFZeEIsZUFBZ0IsRUFBbFEsRUFBcVEsYUFBV3dCLFlBQVl6QixNQUE1UixFQUFvUyxZQUFVeUIsWUFBWW5DLEVBQTFULEVBQThULGdCQUFjbUMsWUFBWXhCLGVBQXhWO0FBQTlCO0FBUEcseURBQVA7QUFTSCxxREFYRDtBQUZSO0FBREo7QUFESjtBQURKO0FBREosaUNBREo7QUFpRlEsd0NBQU0sU0FBTixHQUNDO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLHdDQUFmLEVBQXdELE9BQU8sRUFBQyxhQUFZLE1BQWIsRUFBcUJtQyxjQUFhLE1BQWxDLEVBQS9EO0FBQ0csMkVBQUssS0FBS3BFLFNBQWVBLEdBQUcscUJBQTVCLEdBREg7QUFFRztBQUFBO0FBQUEsMENBQUcsV0FBVSxRQUFiLEVBQXNCLE9BQU8sRUFBRXFFLE1BQU0sQ0FBUixFQUFXQyxhQUFhLEtBQXhCLEVBQTdCO0FBQUE7QUFBQTtBQUZIO0FBbEZUO0FBREoseUJBbkJKO0FBOEdJLHNEQUFDLHFCQUFELElBQWEsYUFBYSxLQUFLaEUsS0FBTCxDQUFXRSxXQUFyQyxFQUFrRCxNQUFNLEtBQUtGLEtBQUwsQ0FBV08sSUFBbkUsRUFBeUUsU0FBUyxLQUFLUCxLQUFMLENBQVdNLE9BQTdGLEdBOUdKO0FBZ0hJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLEtBQUsyQixPQUFMLENBQWE0QixJQUFiLENBQWtCLElBQWxCLENBQWpCLEVBQTBDLFdBQVUsd0ZBQXBELEVBQTZJLFVBQVUsQ0FBQyxLQUFLN0QsS0FBTCxDQUFXRyxjQUFuSztBQUFBO0FBQUE7QUFoSEoscUJBSEo7QUF1SEksa0RBQUMsa0JBQUQsSUFBVSxZQUFXLG1CQUFyQixFQUF5QyxjQUFjLElBQXZELEVBQTZELGFBQVksdUJBQXpFO0FBdkhKO0FBREo7QUFGSixTQURKO0FBZ0lIO0FBaE5xQzs7a0JBb04zQlIsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE9mOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsTUFBTXNFLFdBQU4sU0FBMEJyRSxnQkFBTUMsU0FBaEMsQ0FBMEM7QUFDdENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxFQUFiO0FBR0g7O0FBRUR5QyxnQkFBWTtBQUNSLFlBQUlILE9BQU8sS0FBS3ZDLEtBQUwsQ0FBV3VDLElBQXRCO0FBQ0EsWUFBSUEsSUFBSixFQUFVO0FBQ04sZ0JBQUluQixPQUFPO0FBQ1AsNEJBQVksYUFETCxFQUNvQixVQUFVLGlCQUQ5QixFQUNpRCxjQUFjbUIsSUFEL0QsRUFDcUUsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQUR0RyxFQUMwRyxVQUFVLENBRHBILEVBQ3VILFNBQVM7QUFEaEksYUFBWDtBQUdBRCwwQkFBSUUsU0FBSixDQUFjLEVBQUV0QixNQUFNQSxJQUFSLEVBQWQ7QUFDSCxTQUxELE1BS087QUFDSCxnQkFBSUEsT0FBTztBQUNQLDRCQUFZLGFBREwsRUFDb0IsVUFBVSxpQkFEOUIsRUFDaUQsY0FBYyxTQUQvRCxFQUMwRSxjQUFjb0IsY0FBSUMsU0FBSixNQUFtQixFQUQzRyxFQUMrRyxVQUFVLENBRHpILEVBQzRILFNBQVM7QUFEckksYUFBWDtBQUdBRCwwQkFBSUUsU0FBSixDQUFjLEVBQUV0QixNQUFNQSxJQUFSLEVBQWQ7QUFDSDtBQUNKOztBQUVEVCx3QkFBb0I7QUFDaEIsYUFBSytCLFNBQUw7QUFDSDs7QUFFRHlCLHVCQUFtQlgsSUFBbkIsRUFBeUJZLEtBQXpCLEVBQWdDO0FBQzVCLGVBQVEsR0FBRVosSUFBSyxJQUFHWSxLQUFNLEdBQXhCO0FBQ0g7O0FBRURyQixhQUFTOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQ0k7QUFBQTtBQUFBO0FBRUk7QUFBQTtBQUFBLGtCQUFNLElBQUcsYUFBVCxFQUF1QixLQUFJLGFBQTNCLEVBQXlDLFFBQU8sTUFBaEQsRUFBdUQsUUFBUSxLQUFLL0MsS0FBTCxDQUFXRyxXQUFYLElBQTBCLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixnQkFBdkIsQ0FBMUIsR0FBbUVrRSxpQkFBT0Msa0JBQTFFLEdBQTZGRCxpQkFBT0UsTUFBbkssRUFBMkssT0FBTyxFQUFFQyxTQUFTLE1BQVgsRUFBbEw7QUFFUSxxQkFBS3hFLEtBQUwsQ0FBV0csV0FBWCxDQUF1QixnQkFBdkIsSUFDQTtBQUFDLG1DQUFELENBQU8sUUFBUDtBQUFBO0FBRVEseUJBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixPQUF2QixFQUFnQ2dELEdBQWhDLENBQW9DLENBQUNzQixJQUFELEVBQU9DLENBQVAsS0FBVztBQUMzQywrQkFBTztBQUFDLDJDQUFELENBQU8sUUFBUDtBQUFBO0FBQ0gscUVBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQU0sS0FBS1Asa0JBQUwsQ0FBd0IsTUFBeEIsRUFBZ0NPLENBQWhDLENBQXpCLEVBQTZELElBQUlELEtBQUssTUFBTCxDQUFqRSxFQUErRSxjQUFjQSxLQUFLLE1BQUwsQ0FBN0YsR0FERztBQUVILHFFQUFPLE1BQUssTUFBWixFQUFtQixNQUFNLEtBQUtOLGtCQUFMLENBQXdCLFdBQXhCLEVBQXFDTyxDQUFyQyxDQUF6QixFQUFrRSxJQUFJRCxLQUFLLFdBQUwsQ0FBdEUsRUFBeUYsY0FBY0EsS0FBSyxXQUFMLENBQXZHLEdBRkc7QUFHSCxxRUFBTyxNQUFLLE1BQVosRUFBbUIsTUFBTSxLQUFLTixrQkFBTCxDQUF3QixVQUF4QixFQUFvQ08sQ0FBcEMsQ0FBekIsRUFBaUUsSUFBSUQsS0FBSyxVQUFMLENBQXJFLEVBQXVGLGNBQWNBLEtBQUssVUFBTCxDQUFyRyxHQUhHO0FBSUgscUVBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQU0sS0FBS04sa0JBQUwsQ0FBd0IsU0FBeEIsRUFBbUNPLENBQW5DLENBQXpCLEVBQWdFLElBQUlELEtBQUssU0FBTCxDQUFwRSxFQUFxRixjQUFjQSxLQUFLLFNBQUwsQ0FBbkcsR0FKRztBQUtILHFFQUFPLE1BQUssTUFBWixFQUFtQixNQUFNLEtBQUtOLGtCQUFMLENBQXdCLGFBQXhCLEVBQXVDTyxDQUF2QyxDQUF6QixFQUFxRSxJQUFJRCxLQUFLLGFBQUwsQ0FBekUsRUFBOEYsY0FBY0EsS0FBSyxhQUFMLENBQTVHLEdBTEc7QUFPQ0Esb0NBQVFBLEtBQUssYUFBTCxDQUFSLEdBQ0EseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQU0sS0FBS04sa0JBQUwsQ0FBd0IsYUFBeEIsRUFBdUNPLENBQXZDLENBQXpCLEVBQW9FLElBQUlELEtBQUssYUFBTCxDQUF4RSxFQUE2RixjQUFjQSxLQUFLLGFBQUwsQ0FBM0csR0FEQSxHQUVDO0FBVEYseUJBQVA7QUFZSCxxQkFiRDtBQUZSLGlCQURBLEdBbUJDO0FBQUMsbUNBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDRyw2REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixjQUFjLEtBQUt6RSxLQUFMLENBQVdHLFdBQVgsQ0FBdUIsTUFBdkIsQ0FBN0MsR0FESDtBQUVHLDZEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFdBQXhCLEVBQW9DLGNBQWMsS0FBS0gsS0FBTCxDQUFXRyxXQUFYLENBQXVCLFdBQXZCLENBQWxELEdBRkg7QUFHRyw2REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxVQUF4QixFQUFtQyxjQUFjLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixVQUF2QixDQUFqRCxHQUhIO0FBSUcsNkRBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssU0FBeEIsRUFBa0MsY0FBYyxLQUFLSCxLQUFMLENBQVdHLFdBQVgsQ0FBdUIsU0FBdkIsQ0FBaEQsR0FKSDtBQUtHLDZEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLGFBQXhCLEVBQXNDLGNBQWMsS0FBS0gsS0FBTCxDQUFXRyxXQUFYLENBQXVCLGFBQXZCLENBQXBELEdBTEg7QUFPTyx5QkFBS0gsS0FBTCxDQUFXRyxXQUFYLElBQTBCLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixhQUF2QixDQUExQixHQUNBLHlDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLGFBQXhCLEVBQXNDLGNBQWMsS0FBS0gsS0FBTCxDQUFXRyxXQUFYLENBQXVCLGFBQXZCLENBQXBELEdBREEsR0FFQztBQVRSLGlCQXJCVDtBQW1DSSx5REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxRQUF4QixFQUFpQyxjQUFjLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixRQUF2QixDQUEvQyxHQW5DSjtBQW9DSSx5REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxRQUF4QixFQUFpQyxjQUFjLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixRQUF2QixDQUEvQyxHQXBDSjtBQXNDSSx5REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QixFQUFnQyxjQUFjLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixPQUF2QixDQUE5QyxHQXRDSjtBQXVDSSx5REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixjQUFjLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixNQUF2QixDQUE3QyxHQXZDSjtBQXdDSSx5REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixjQUFjLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixNQUF2QixDQUE3QyxHQXhDSjtBQTBDUSxxQkFBS0gsS0FBTCxDQUFXRyxXQUFYLElBQTBCLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixhQUF2QixDQUExQixHQUNBLHlDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLGFBQXhCLEVBQXNDLGNBQWMsS0FBS0gsS0FBTCxDQUFXRyxXQUFYLENBQXVCLGFBQXZCLENBQXBELEdBREEsR0FFQyxFQTVDVDtBQStDSSx5REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixFQUErQixjQUFjLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixNQUF2QixDQUE3QyxHQS9DSjtBQWlESSx5REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxXQUF4QixFQUFvQyxjQUFjLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixXQUF2QixDQUFsRCxHQWpESjtBQW1EUSxxQkFBS0gsS0FBTCxDQUFXRyxXQUFYLElBQTBCLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixVQUF2QixDQUExQixHQUNBLHlDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFVBQXhCLEVBQW1DLGNBQWMsS0FBS0gsS0FBTCxDQUFXRyxXQUFYLENBQXVCLFVBQXZCLENBQWpELEdBREEsR0FFQyxFQXJEVDtBQXdEUSxxQkFBS0gsS0FBTCxDQUFXRyxXQUFYLElBQTBCLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixZQUF2QixDQUExQixHQUNBO0FBQUMsbUNBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDSSw2REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxZQUF4QixFQUFxQyxjQUFjLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixZQUF2QixDQUFuRCxHQURKO0FBRUksNkRBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssZ0JBQXhCLEVBQXlDLGNBQWMsS0FBS0gsS0FBTCxDQUFXRyxXQUFYLENBQXVCLGdCQUF2QixDQUF2RCxHQUZKO0FBR0ksNkRBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssY0FBeEIsRUFBdUMsY0FBYyxLQUFLSCxLQUFMLENBQVdHLFdBQVgsQ0FBdUIsY0FBdkIsQ0FBckQ7QUFISixpQkFEQSxHQU1FLEVBOURWO0FBa0VRLHFCQUFLSCxLQUFMLENBQVdHLFdBQVgsSUFBMEIsS0FBS0gsS0FBTCxDQUFXRyxXQUFYLENBQXVCLFlBQXZCLENBQTFCLEdBQ0EseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssWUFBeEIsRUFBcUMsY0FBYyxLQUFLSCxLQUFMLENBQVdHLFdBQVgsQ0FBdUIsWUFBdkIsQ0FBbkQsR0FEQSxHQUVDLEVBcEVUO0FBd0VRLHFCQUFLSCxLQUFMLENBQVdHLFdBQVgsSUFBMEIsS0FBS0gsS0FBTCxDQUFXRyxXQUFYLENBQXVCLFlBQXZCLENBQTFCLEdBQ0EseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssWUFBeEIsRUFBcUMsY0FBYyxLQUFLSCxLQUFMLENBQVdHLFdBQVgsQ0FBdUIsWUFBdkIsQ0FBbkQsR0FEQSxHQUVDLEVBMUVUO0FBOEVRLHFCQUFLSCxLQUFMLENBQVdHLFdBQVgsSUFBMEIsS0FBS0gsS0FBTCxDQUFXRyxXQUFYLENBQXVCLGlCQUF2QixDQUExQixHQUNBLHlDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLGlCQUF4QixFQUEwQyxjQUFjLEtBQUtILEtBQUwsQ0FBV0csV0FBWCxDQUF1QixpQkFBdkIsQ0FBeEQsR0FEQSxHQUVDO0FBaEZUO0FBRkosU0FESjtBQStGSDtBQXpJcUM7O2tCQTZJM0IrRCxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSmY7Ozs7OztrQkFFZUEscUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBR0EsTUFBTVMsT0FBTixTQUFzQjlFLGdCQUFNQyxTQUE1QixDQUFzQztBQUNsQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsWUFBSSxDQUFDNEUsa0JBQVFDLFNBQVIsRUFBTCxFQUEwQjtBQUN0QixpQkFBSzdFLEtBQUwsQ0FBVzhFLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTRCLG1CQUE1QjtBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNBOztBQU1BcEUsd0JBQW9CO0FBQ2hCLFlBQUlpRSxrQkFBUUMsU0FBUixFQUFKLEVBQXlCO0FBQ3JCLGlCQUFLN0UsS0FBTCxDQUFXZ0YsWUFBWDtBQUNIO0FBQ0o7O0FBRURqQyxhQUFTOztBQUVMLGVBQ0ksOEJBQUMsZUFBRCxFQUFpQixLQUFLL0MsS0FBdEIsQ0FESjtBQUdIO0FBM0JpQzs7QUFBaEMyRSxPLENBWUtNLFksR0FBZTtBQUNsQkMsWUFBUSxNQUFNO0FBREksQztBQWtCMUIsTUFBTUMsa0JBQW1CbEYsS0FBRCxJQUFXOztBQUUvQixXQUFPLEVBQVA7QUFHSCxDQUxEOztBQU9BLE1BQU1tRixxQkFBc0JDLFFBQUQsSUFBYztBQUNyQyxXQUFPO0FBQ0huRSxxQkFBYSxDQUFDRCxFQUFELEVBQUtxRSxFQUFMLEtBQVlELFNBQVMsd0JBQVlwRSxFQUFaLEVBQWdCcUUsRUFBaEIsQ0FBVCxDQUR0QjtBQUVITixzQkFBYyxNQUFNSyxTQUFTLDBCQUFUO0FBRmpCLEtBQVA7QUFJSCxDQUxEOztrQkFRZSx5QkFBUUYsZUFBUixFQUF5QkMsa0JBQXpCLEVBQTZDVCxPQUE3QyxDIiwiZmlsZSI6IjgyLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXltZW50VmlldyBmcm9tICcuL3BheW1lbnRWaWV3J1xuXG5leHBvcnQgZGVmYXVsdCBwYXltZW50VmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi8uLi9jb21tb25zL3BheW1lbnRGb3JtJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveCc7XG5cbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgICBBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaW1hZ2UyLW1pbi5qcGdcIixcbiAgICBBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaW1hZ2UxLW1pbi5qcGdcIixcbiAgICBBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaW1hZ2UzLW1pbi5qcGdcIixcbl07XG5jbGFzcyBQYXltZW50VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZFBheW1lbnQ6IFwiXCIsXG4gICAgICAgICAgICBwYXltZW50RGF0YToge30sXG4gICAgICAgICAgICBwYXltZW50RW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBwaG90b0luZGV4OiAwLFxuICAgICAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGdhdGV3YXk6ICcnLFxuICAgICAgICAgICAgbW9kZTogJycsXG4gICAgICAgICAgICBwYXltZW50X29wdGlvbnM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0ZWRJZDogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3JkZXJJZCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hQZ0RhdGEob3JkZXJJZCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRQYXltZW50ID0gW11cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXltZW50X29wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXltZW50ID0gZGF0YS5wYXltZW50X29wdGlvbnMuZmlsdGVyKHggPT4geC5pc19zZWxlY3RlZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRFbmFibGVkOiB0cnVlLCBwYXltZW50RGF0YTogZGF0YS5kYXRhLCBwYXltZW50X29wdGlvbnM6IGRhdGEucGF5bWVudF9vcHRpb25zIHx8IFtdLCBzZWxlY3RlZFBheW1lbnQ6IHNlbGVjdGVkUGF5bWVudC5sZW5ndGggPyBzZWxlY3RlZFBheW1lbnRbMF0uYWN0aW9uIDogJycsIGdhdGV3YXk6IHNlbGVjdGVkUGF5bWVudC5sZW5ndGggPyBzZWxlY3RlZFBheW1lbnRbMF0ucGF5bWVudF9nYXRld2F5IDogJycsIG1vZGU6IHNlbGVjdGVkUGF5bWVudC5sZW5ndGggPyBzZWxlY3RlZFBheW1lbnRbMF0uYWN0aW9uIDogJycsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWQ6IHNlbGVjdGVkUGF5bWVudC5sZW5ndGggPyBzZWxlY3RlZFBheW1lbnRbMF0uaWQgOiAnJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBzZWxlY3RQYXltZW50VHlwZShpZCwgZSkge1xuICAgICAgICBsZXQgZ2F0ZXdheSA9ICdwYXl0bSc7XG4gICAgICAgIGxldCBtb2RlID0gJyc7XG4gICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0ICYmIGUudGFyZ2V0LmRhdGFzZXQuZ2F0ZXdheSkge1xuICAgICAgICAgICAgZ2F0ZXdheSA9IGUudGFyZ2V0LmRhdGFzZXQuZ2F0ZXdheVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0ICYmIGUudGFyZ2V0LmRhdGFzZXQubW9kZSkge1xuICAgICAgICAgICAgbW9kZSA9IGUudGFyZ2V0LmRhdGFzZXQubW9kZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFBheW1lbnQ6IGUudGFyZ2V0LnZhbHVlLCBzZWxlY3RlZElkOiBpZCwgZ2F0ZXdheSwgbW9kZSB9KVxuICAgIH1cblxuICAgIHByb2NlZWQoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5yZWZzKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbnRpbnVlQ2xpY2tlZCcsICdwYWdlU291cmNlJzogcGFyc2VkLnJlZnMsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29udGludWVDbGlja2VkJywgJ3BhZ2VTb3VyY2UnOiAnVU5LTk9XTicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1vZGUgIT0gJycpIHtcbiAgICAgICAgICAgIGZvcm0uc3VibWl0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwaG90b0luZGV4LCBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHRvdGFsQW1vdW50ID0gJydcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGF5bWVudERhdGEgJiYgdGhpcy5zdGF0ZS5wYXltZW50RGF0YS50eEFtb3VudCkge1xuICAgICAgICAgICAgdG90YWxBbW91bnQgPSBwYXJzZUludCh0aGlzLnN0YXRlLnBheW1lbnREYXRhLnR4QW1vdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGhlYWRlciBjbGFzc05hbWU9XCJza2luLXdoaXRlIGZpeGVkIGhvcml6b250YWwgdG9wIGJkci0xIGJvdHRvbSBsaWdodCBzdGlja3ktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1zbSB0ZXh0LW1pZGRsZSBiYWNrLWljb24td2hpdGVcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2JhY2staWNvbi5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZ3LTcwMCBjYXBpdGFsaXplIHRleHQtY2VudGVyXCI+U2VsZWN0IFBheW1lbnQgTWV0aG9kPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9va2luZy1jb25maXJtLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBwYXltZW50LW1ldGhvZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBheW1lbnRfb3B0aW9ucy5tYXAoKHBheW1lbnRUeXBlLCBrZXkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtrZXl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YFN7cGF5bWVudFR5cGUuYWN0aW9ufV8ke3BheW1lbnRUeXBlLnBheW1lbnRfZ2F0ZXdheX1gfSBjbGFzc05hbWU9XCJwYXl0bS1sYWJlbFwiPiA8aW1nIHNyYz17cGF5bWVudFR5cGUuaW1hZ2V9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+IHtwYXltZW50VHlwZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEFtb3VudCAmJiB0b3RhbEFtb3VudCA+PSAxMDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBjb2xvcjogJ2dyZWVuJywgZm9udFNpemU6IDEyLCB0b3A6IDM1LCBsZWZ0OiA3NCB9fT57cGF5bWVudFR5cGUuZGVzY3JpcHRpb259PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9e3RoaXMuc2VsZWN0UGF5bWVudFR5cGUuYmluZCh0aGlzLCBwYXltZW50VHlwZS5pZCl9IGNoZWNrZWQ9eyEhKHRoaXMuc3RhdGUuc2VsZWN0ZWRJZCA9PSBwYXltZW50VHlwZS5pZCl9IHZhbHVlPXtwYXltZW50VHlwZS5hY3Rpb259IGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiIG5hbWU9XCJnZW5kZXJcIiBpZD17YCR7cGF5bWVudFR5cGUuYWN0aW9ufV8ke3BheW1lbnRUeXBlLnBheW1lbnRfZ2F0ZXdheX1gfSBkYXRhLW1vZGU9e3BheW1lbnRUeXBlLmFjdGlvbn0gZGF0YS1wYXk9e3BheW1lbnRUeXBlLmlkfSBkYXRhLWdhdGV3YXk9e3BheW1lbnRUeXBlLnBheW1lbnRfZ2F0ZXdheX0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXQtMjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmRibHR5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZGJsdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3JkYmx0eS1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ncm91cC05OC5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRyc3QtdHh0XCI+VHJ1c3QgZG9jcHJpbWUhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJzay1sc3RuZyBwdG1udC1sc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsc3QtYmZyXCI+MTAwJSBtb25leSBiYWNrIGd1YXJhbnRlZSAtICBObyBxdWVzdGlvbnMhIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibHN0LWJmclwiPlBhcnQgb2YgUG9saWN5YmF6YWFyIGdyb3VwIHZhbHVlZCBhdCBvdmVyICQxIGJpbGxpb24gOjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1kLWNvdmVyYWdlXCI+TWVkaWEgQ292ZXJhZ2U8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSwgcGhvdG9JbmRleDogMCB9KX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvaW1hZ2UyLW1pbi5qcGdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluU3JjPXtpbWFnZXNbcGhvdG9JbmRleF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNyYz17aW1hZ2VzWyhwaG90b0luZGV4ICsgMSkgJSBpbWFnZXMubGVuZ3RoXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2U3JjPXtpbWFnZXNbKHBob3RvSW5kZXggKyBpbWFnZXMubGVuZ3RoIC0gMSkgJSBpbWFnZXMubGVuZ3RoXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlUmVxdWVzdD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogZmFsc2UgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlUHJldlJlcXVlc3Q9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9JbmRleDogKHBob3RvSW5kZXggKyBpbWFnZXMubGVuZ3RoIC0gMSkgJSBpbWFnZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmVOZXh0UmVxdWVzdD17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b0luZGV4OiAocGhvdG9JbmRleCArIDEpICUgaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUsIHBob3RvSW5kZXg6IDEgfSl9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2ltYWdlMS1taW4uanBnXCJ9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiB0cnVlLCBwaG90b0luZGV4OiAyIH0pfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9pbWFnZTMtbWluLmpwZ1wifSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2U/JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCIgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IGxhYlRlc3QtZHRsc1wiIHN0eWxlPXt7J21hcmdpblRvcCc6JzExcHgnLCBtYXJnaW5Cb3R0b206JzEwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvaW5mby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZ0xlZnQ6ICc2cHgnIH19ID5BbWVyaWNhbiBFeHByZXNzIGNhcmRzIGFyZSBub3QgYWNjZXB0ZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXltZW50Rm9ybSBwYXltZW50RGF0YT17dGhpcy5zdGF0ZS5wYXltZW50RGF0YX0gbW9kZT17dGhpcy5zdGF0ZS5tb2RlfSBnYXRld2F5PXt0aGlzLnN0YXRlLmdhdGV3YXl9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvY2VlZC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJwLTIgdi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RpY2t5LWJ0blwiIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5wYXltZW50RW5hYmxlZH0+Q29udGludWU8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBleHRyYUNsYXNzPVwiIGNoYXQtZmxvYXQtYnRuLTJcIiBub0NoYXRCdXR0b249e3RydWV9IG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudFZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cblxuY2xhc3MgUGF5bWVudEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2VuZEV2ZW50KCkge1xuICAgICAgICBsZXQgcmVmcyA9IHRoaXMucHJvcHMucmVmc1xuICAgICAgICBpZiAocmVmcykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb250aW51ZUNsaWNrZWQnLCAncGFnZVNvdXJjZSc6IHJlZnMsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb250aW51ZUNsaWNrZWQnLCAncGFnZVNvdXJjZSc6ICdVTktOT1dOJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29udGludWUtY2xpY2tlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZW5kRXZlbnQoKVxuICAgIH1cblxuICAgIGdldFBheW1lbnROb2RlTmFtZShuYW1lLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gYCR7bmFtZX1bJHtpbmRleH1dYFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBsZXQgZGF0YSA9IHsgXCJwYXltZW50TW9kZVwiOiBcIkNDXCIsIFwicmVzcG9uc2VDb2RlXCI6IFwiMjI3XCIsIFwiYmFua1R4SWRcIjogXCJcIiwgXCJ0eERhdGVcIjogXCJKdW4gNCwgMjAxOCAxMjoxMDoyMyBQTVwiLCBcImJhbmtOYW1lXCI6IFwiU0JJXCIsIFwic3RhdHVzTXNnXCI6IFwiT29wcyBhbiBlcnJvciBvY2N1cnJlZC4gV2Ugd2lsbCBnZXQgYmFjayB0byB5b3UhXCIsIFwiY3VycmVuY3lcIjogXCJJTlJcIiwgXCJzdGF0dXNDb2RlXCI6IDEsIFwicGdHYXRld2F5TmFtZVwiOiBcIk1PQ0tcIiwgXCJyZXNwb25zZU1lc3NhZ2VcIjogXCJZb3VyIHBheW1lbnQgaGFzIGJlZW4gZGVjbGluZWQgYnkgeW91ciBiYW5rLiBQbGVhc2UgY29udGFjdCB5b3VyIGJhbmsgZm9yIGFueSBxdWVyaWVzLiBJZiBtb25leSBoYXMgYmVlbiBkZWR1Y3RlZCBmcm9tIHlvdXIgYWNjb3VudCwgeW91ciBiYW5rIHdpbGwgaW5mb3JtIHVzIHdpdGhpbiA0OCBocnMgYW5kIHdlIHdpbGwgcmVmdW5kIHRoZSBzYW1lXCIsIFwidHhTdGF0dXNcIjogXCJUWE5fRkFJTFVSRVwiLCBcImN1c3RvbWVySWRcIjogNTEsIFwib3JkZXJOb1wiOiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ10sIFwic3RhdHVzU2hvcnRNc2dcIjogXCJPdGhlcnNcIiwgXCJlbWFpbFwiOiBcImR1bW15X2FwcG9pbnRtZW50QHBvbGljeWJhemFhci5jb21cIiwgXCJwYkdhdGV3YXlOYW1lXCI6IFwicGF5dG1cIiwgXCJtb2JpbGVcIjogXCI5OTk5OTk5OTk3XCIsIHByb2R1Y3RJZDogdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncHJvZHVjdElkJ10gfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZlcmVuY2VJZCddKSB7XG4gICAgICAgIC8vICAgICBkYXRhWydyZWZlcmVuY2VJZCddID0gdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gZGF0YVsncGdUeElkJ10gPSB0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ11cbiAgICAgICAgLy8gZGF0YSA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInBheW1lbnRGb3JtXCIgcmVmPVwicGF5bWVudEZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPXt0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2lzX3NpbmdsZV9mbG93J10/Q09ORklHLlBHX01VTFRJX09SREVSX1VSTDpDT05GSUcuUEdfVVJMfSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2lzX3NpbmdsZV9mbG93J10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpdGVtcyddLm1hcCgoaXRlbSwgaSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ25hbWUnLCBpKX0gaWQ9e2l0ZW1bJ25hbWUnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWyduYW1lJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ3Byb2R1Y3RJZCcsIGkpfSBpZD17aXRlbVsncHJvZHVjdElkJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsncHJvZHVjdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ3R4QW1vdW50JywgaSl9IGlkPXtpdGVtWyd0eEFtb3VudCddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ3R4QW1vdW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ29yZGVySWQnLCBpKX0gaWQ9e2l0ZW1bJ29yZGVySWQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydvcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ2hvbGRQYXltZW50JywgaSl9ICBpZD17aXRlbVsnaG9sZFBheW1lbnQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydob2xkUGF5bWVudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSAmJiBpdGVtWydpbnN1cmVyQ29kZSddP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgnaW5zdXJlckNvZGUnLCBpKX0gaWQ9e2l0ZW1bJ2luc3VyZXJDb2RlJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsnaW5zdXJlckNvZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6PFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWyduYW1lJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2R1Y3RJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncHJvZHVjdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR4QW1vdW50XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWyd0eEFtb3VudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJvcmRlcklkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImhvbGRQYXltZW50XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydob2xkUGF5bWVudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpbnN1cmVyQ29kZSddP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5zdXJlckNvZGVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2luc3VyZXJDb2RlJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjdXN0SWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2N1c3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibW9iaWxlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydtb2JpbGUnXX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2VtYWlsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdXJsXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydzdXJsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmdXJsXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydmdXJsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZWZlcmVuY2VJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaGFzaFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaGFzaCddfSAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlzUHJlQXV0aFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaXNQcmVBdXRoJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGF5dG1Nc2cnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXl0bU1zZ1wiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGF5dG1Nc2cnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY291cG9uQ29kZSddID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291cG9uQ29kZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY291cG9uQ29kZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaXNjb3VudGVkQW1udFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnZGlzY291bnRlZEFtbnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291cG9uUGdNb2RlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydjb3Vwb25QZ01vZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVySWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZWZPcmRlcklkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZPcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmT3JkZXJObyddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlZk9yZGVyTm9cIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVyTm8nXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydwYXJlbnRQcm9kdWN0SWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXJlbnRQcm9kdWN0SWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3BhcmVudFByb2R1Y3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG5cbiAgICAgICAgICAgICAgICB7LyogPGZvcm0gaWQ9XCJwYXltZW50Rm9ybVwiIHJlZj1cInBheW1lbnRGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj17YCR7Q09ORklHLkFQSV9CQVNFX1VSTH0vYXBpL3YxL3VzZXIvdHJhbnNhY3Rpb24vc2F2ZWB9IHN0eWxlPXt7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicmVzcG9uc2VcIiBkZWZhdWx0VmFsdWU9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPiAqL31cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRGb3JtXG4iLCJpbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi9QYXltZW50Rm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudEZvcm0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZmV0Y2hQZ0RhdGEsIGdldENhcnRJdGVtcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmltcG9ydCBQYXltZW50VmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvcGF5bWVudC9pbmRleC5qcydcblxuXG5jbGFzcyBQYXltZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgaWYgKCFTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShgL2xvZ2luP2NhbGxiYWNrPS9gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RhdGljIGxvYWREYXRhKHN0b3JlKSB7XG4gICAgLy8gICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKVxuICAgIC8vIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRDYXJ0SXRlbXMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGF5bWVudFZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblxuICAgIHJldHVybiB7XG5cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZldGNoUGdEYXRhOiAoaWQsIGNiKSA9PiBkaXNwYXRjaChmZXRjaFBnRGF0YShpZCwgY2IpKSxcbiAgICAgICAgZ2V0Q2FydEl0ZW1zOiAoKSA9PiBkaXNwYXRjaChnZXRDYXJ0SXRlbXMoKSksXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBheW1lbnQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==