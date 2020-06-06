exports.ids = [57];
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

/***/ "./dev/js/components/opd/appointmentReschedule/AppointmentReschedule.js":
/*!******************************************************************************!*\
  !*** ./dev/js/components/opd/appointmentReschedule/AppointmentReschedule.js ***!
  \******************************************************************************/
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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _cancellation = __webpack_require__(/*! ./cancellation.js */ "./dev/js/components/opd/appointmentReschedule/cancellation.js");

var _cancellation2 = _interopRequireDefault(_cancellation);

var _index = __webpack_require__(/*! ../commons/selectedClinic/index.js */ "./dev/js/components/opd/commons/selectedClinic/index.js");

var _index2 = _interopRequireDefault(_index);

var _VisitTimeNew = __webpack_require__(/*! ../patientDetails/VisitTimeNew */ "./dev/js/components/opd/patientDetails/VisitTimeNew.js");

var _VisitTimeNew2 = _interopRequireDefault(_VisitTimeNew);

var _paymentForm = __webpack_require__(/*! ../../commons/paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AppointmentReschedule extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentData: null,
            data: null,
            loading: true,
            showCancel: false,
            error: "",
            openCancellation: false,
            openPaymentSummary: false
        };
    }

    toggle(which) {
        this.setState({ [which]: !this.state[which] });
    }

    componentDidMount() {

        this.props.getOPDBookingSummary(this.props.match.params.refId, (err, data) => {
            if (!err) {
                this.setState({ data: data[0], loading: false });
            } else {
                this.setState({ data: null, loading: false });
            }
        });

        if (window) {
            window.scrollTo(0, 0);
        }
    }

    proceed() {

        this.setState({ loading: true, error: "" });

        let start_date = this.props.rescheduleSlot.date;
        let start_time = this.props.rescheduleSlot.time.value;
        let appointmentData = { id: this.props.match.params.refId, start_date, start_time, status: 4 };

        this.props.updateOPDAppointment(appointmentData, (err, data) => {
            if (!err) {
                if (data.payment_required) {
                    // send to payment selection page
                    //this.props.history.push(`/payment/${data.data.orderId}`)
                    this.processPayment(data);
                } else {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Appointment Reschduled." });
                    // send back to appointment page
                    this.props.history.replace(`/opd/appointment/${this.props.match.params.refId}`);
                }
            } else {
                let message = "Could not reschedule appointment. Try again later !";
                if (err.message) {
                    message = err.message;
                }
                this.setState({ loading: false, error: message });
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

    navigateTo(where, e) {
        switch (where) {
            case "time":
                {
                    this.props.history.push(`/opd/doctor/${this.state.selectedDoctor}/${this.state.selectedClinic}/book?goback=true`);
                    return;
                }
        }
    }

    cancelAppointment() {
        this.setState({ loading: true, showCancel: false });

        let appointmentData = { id: this.state.data.id, status: 6, refund: 0 };
        this.props.updateOPDAppointment(appointmentData, (err, data) => {
            if (data) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Appointment Canceled." });
                // send back to appointment page
                this.props.history.replace(`/opd/appointment/${this.props.match.params.refId}`);
            } else {
                let message = "Could not cancel appointment. Try again later !";
                if (err.message) {
                    message = err.message;
                }
                this.setState({ loading: false, error: message });
            }
        });
    }

    render() {

        let doctor = {};
        let profile = {};
        let hospital = {};
        let date = new Date();
        let actions = [];
        let status = 1;
        let priceData = {};
        let bookingEnabled = false;
        let procedures = false;
        let is_price_changed = false;

        if (this.state.data) {
            doctor = this.state.data.doctor;
            hospital = this.state.data.hospital;
            profile = this.state.data.profile;
            date = this.state.data.time_slot_start ? new Date(this.state.data.time_slot_start) : new Date();
            actions = this.state.data.allowed_action || [];
            status = this.state.data.status;
            doctor.thumbnail = this.state.data.doctor_thumbnail;
            doctor.hospitals = [hospital];

            if (this.props.rescheduleSlot && this.props.rescheduleSlot.date) {
                priceData = _extends({}, this.props.rescheduleSlot.time);
                priceData.old_deal_price = this.state.data.deal_price;
                priceData.payable_amount = priceData.deal_price - priceData.old_deal_price;
            }
            if (this.state.data.procedures.length) {
                procedures = true;
                priceData.payable_amount = 0;
            }
        }

        if (this.state.data && this.props.DOCTOR && this.props.DOCTOR[this.state.data.doctor.id]) {
            bookingEnabled = this.props.DOCTOR[this.state.data.doctor.id].enabled_for_online_booking;
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
                        this.state.data ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'section',
                                { className: 'dr-profile-screen booking-confirm-screen' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row mrb-20' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            _react2.default.createElement(_index2.default, {
                                                boxShadowHide: true,
                                                selectedDoctor: doctor,
                                                selectedClinic: hospital.id
                                            }),
                                            _react2.default.createElement(_VisitTimeNew2.default, { type: 'home', navigateTo: this.navigateTo.bind(this), selectedSlot: this.props.rescheduleSlot, hideChangeTime: true, timeError: null }),
                                            priceData.payable_amount != 0 && this.state.data.status !== 7 ? _react2.default.createElement(
                                                'div',
                                                { className: 'csh-back-applied-container', style: { marginBottom: 20 } },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'csh-mny-applied-content' },
                                                    'Amount for the appointment is changed, to proceed you need to cancel this order and place a new one.'
                                                )
                                            ) : "",
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-15' },
                                                _react2.default.createElement(
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
                                                            'Patient'
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'float-right  mbl-view-formatting text-right' },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                { className: 'date-time title' },
                                                                profile ? profile.name : "",
                                                                ' '
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            this.state.data && this.state.data.status !== 7 ? _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'lab-visit-time test-report', style: { marginTop: 10, cursor: 'pointer', marginBottom: 0 }, onClick: this.toggle.bind(this, 'openCancellation') },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'title payment-amt-label fs-italic' },
                                                        'Free Cancellation',
                                                        _react2.default.createElement(
                                                            'span',
                                                            { style: { marginLeft: 5 } },
                                                            _react2.default.createElement('img', { src: "/assets" + "/img/icons/info.svg" })
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/terms', target: '_blank' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'lab-visit-time test-report', style: { marginTop: 10 } },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'title payment-amt-label fs-italic' },
                                                            'Terms of Use',
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                _react2.default.createElement('img', { className: 'info-icon-img', src: "/assets" + "/img/icons/info.svg" })
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'errorMessage' },
                                                            this.state.error
                                                        )
                                                    )
                                                )
                                            ) : ''
                                        )
                                    ),
                                    this.state.data && this.state.data.status == 7 ? _react2.default.createElement(
                                        'div',
                                        { className: 'text-center' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'sms-reschedule mrt-10' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'fw-500' },
                                                'This appointment cannot be rescheduled as you have already marked this appointment complete. '
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'sms-lgbtn', onClick: () => this.props.history.push('/') },
                                            'Go to Homepage'
                                        )
                                    ) : ''
                                ),
                                this.state.openCancellation ? _react2.default.createElement(_cancellation2.default, { props: this.props, toggle: this.toggle.bind(this, 'openCancellation') }) : ""
                            )
                        ) : _react2.default.createElement(_Loader2.default, null),
                        this.state.data && this.state.data.status != 7 ? priceData.payable_amount == 0 ? _react2.default.createElement(
                            'button',
                            { disabled: this.state.loading, className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg static-btn', onClick: this.proceed.bind(this) },
                            'Confirm Reschedule'
                        ) : _react2.default.createElement(
                            'button',
                            { disabled: this.state.loading, className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg static-btn', onClick: this.cancelAppointment.bind(this) },
                            'Cancel and rebook'
                        ) : ''
                    ),
                    _react2.default.createElement(_RightBar2.default, { msgTemplate: 'gold_general_template' })
                )
            ),
            this.state.paymentData ? _react2.default.createElement(_paymentForm2.default, { paymentData: this.state.paymentData }) : ""
        );
    }
}

exports.default = AppointmentReschedule;

/***/ }),

/***/ "./dev/js/components/opd/appointmentReschedule/cancellation.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/opd/appointmentReschedule/cancellation.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ toggle }) => {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("div", { className: "cancel-overlay", onClick: toggle }),
        _react2.default.createElement(
            "div",
            { className: "widget cancel-appointment-div" },
            _react2.default.createElement(
                "div",
                { className: "widget-header text-center action-screen-header" },
                _react2.default.createElement(
                    "p",
                    { className: "fw-500 cancel-appointment-head" },
                    "Cancellation Policy"
                ),
                _react2.default.createElement("hr", null)
            ),
            _react2.default.createElement(
                "div",
                { className: "cancel-policy-text" },
                _react2.default.createElement(
                    "p",
                    { className: "fw-500" },
                    "For any online paid appointments, you can cancel your scheduled or re-booked appointment and initiate immediate refund at any time. An immediate refund shall be subject to terms and conditions as described under this section mentioned below. In the event, the services are not availed at the appointed date and time and our systems do not validate the URN generated on your registered mobile number, we will automatically cancel your appointment at 12:00 midnight of next date of your appointment date. Occasionally, appointments may be cancelled or postponed by the Third Party Service Provider. Should this occur, we will attempt to contact or inform you and you may re-schedule your appointment as per your convenience or visit www.docprime.com for fresh/re-booking on the Website. Cancellation through mail or call center is allowed for all the bookings until the time of appointment or 12:00 midnight of next date of your appointment date. In such cases, we will initiate an immediate refund of your money as per the process defined below."
                )
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/components/opd/appointmentReschedule/index.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/opd/appointmentReschedule/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppointmentReschedule = __webpack_require__(/*! ./AppointmentReschedule.js */ "./dev/js/components/opd/appointmentReschedule/AppointmentReschedule.js");

var _AppointmentReschedule2 = _interopRequireDefault(_AppointmentReschedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AppointmentReschedule2.default;

/***/ }),

/***/ "./dev/js/containers/opd/AppointmentReschedule.js":
/*!********************************************************!*\
  !*** ./dev/js/containers/opd/AppointmentReschedule.js ***!
  \********************************************************/
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

var _appointmentReschedule = __webpack_require__(/*! ../../components/opd/appointmentReschedule */ "./dev/js/components/opd/appointmentReschedule/index.js");

var _appointmentReschedule2 = _interopRequireDefault(_appointmentReschedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AppointmentReschedule extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.match.params.refId != this.props.appointmentId || !this.props.rescheduleSlot.date) {
            // this.props.history.go(-1)
        }
    }

    render() {

        if (this.props.match.params.refId == this.props.appointmentId && this.props.rescheduleSlot.date) {
            return _react2.default.createElement(_appointmentReschedule2.default, this.props);
        } else {
            return _react2.default.createElement(_appointmentReschedule2.default, this.props);
        }
    }
}

AppointmentReschedule.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    let { rescheduleSlot, appointmentId } = state.DOCTOR_SEARCH;
    let DOCTOR = state.DOCTORS;

    return {
        rescheduleSlot,
        appointmentId,
        DOCTOR
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getOPDBookingSummary: (appointmentID, callback) => dispatch((0, _index.getOPDBookingSummary)(appointmentID, callback)),
        updateOPDAppointment: (appointmentData, callback) => dispatch((0, _index.updateOPDAppointment)(appointmentData, callback)),
        selectOpdTimeSLot: (slot, reschedule) => dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule)),
        retryPaymentOPD: (appointmentId, callback) => dispatch((0, _index.retryPaymentOPD)(appointmentId, callback))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppointmentReschedule);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9wYXltZW50Rm9ybS9QYXltZW50Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3BheW1lbnRGb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9hcHBvaW50bWVudFJlc2NoZWR1bGUvQXBwb2ludG1lbnRSZXNjaGVkdWxlLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9hcHBvaW50bWVudFJlc2NoZWR1bGUvY2FuY2VsbGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9hcHBvaW50bWVudFJlc2NoZWR1bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvb3BkL0FwcG9pbnRtZW50UmVzY2hlZHVsZS5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIlBheW1lbnRGb3JtIiwic3RhdGUiLCJzZW5kRXZlbnQiLCJyZWZzIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsImNvbXBvbmVudERpZE1vdW50IiwiZ2V0UGF5bWVudE5vZGVOYW1lIiwibmFtZSIsImluZGV4IiwicGF5bWVudERhdGEiLCJDT05GSUciLCJQR19NVUxUSV9PUkRFUl9VUkwiLCJQR19VUkwiLCJkaXNwbGF5IiwibWFwIiwiaXRlbSIsImkiLCJBcHBvaW50bWVudFJlc2NoZWR1bGUiLCJsb2FkaW5nIiwic2hvd0NhbmNlbCIsImVycm9yIiwib3BlbkNhbmNlbGxhdGlvbiIsIm9wZW5QYXltZW50U3VtbWFyeSIsInRvZ2dsZSIsIndoaWNoIiwic2V0U3RhdGUiLCJnZXRPUERCb29raW5nU3VtbWFyeSIsIm1hdGNoIiwicGFyYW1zIiwicmVmSWQiLCJlcnIiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInByb2NlZWQiLCJzdGFydF9kYXRlIiwicmVzY2hlZHVsZVNsb3QiLCJkYXRlIiwic3RhcnRfdGltZSIsInRpbWUiLCJ2YWx1ZSIsImFwcG9pbnRtZW50RGF0YSIsImlkIiwic3RhdHVzIiwidXBkYXRlT1BEQXBwb2ludG1lbnQiLCJwYXltZW50X3JlcXVpcmVkIiwicHJvY2Vzc1BheW1lbnQiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiaGlzdG9yeSIsInJlcGxhY2UiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiZm9ybSIsInN1Ym1pdCIsIm5hdmlnYXRlVG8iLCJ3aGVyZSIsImUiLCJwdXNoIiwic2VsZWN0ZWREb2N0b3IiLCJzZWxlY3RlZENsaW5pYyIsImNhbmNlbEFwcG9pbnRtZW50IiwicmVmdW5kIiwiZG9jdG9yIiwicHJvZmlsZSIsImhvc3BpdGFsIiwiRGF0ZSIsImFjdGlvbnMiLCJwcmljZURhdGEiLCJib29raW5nRW5hYmxlZCIsInByb2NlZHVyZXMiLCJpc19wcmljZV9jaGFuZ2VkIiwidGltZV9zbG90X3N0YXJ0IiwiYWxsb3dlZF9hY3Rpb24iLCJ0aHVtYm5haWwiLCJkb2N0b3JfdGh1bWJuYWlsIiwiaG9zcGl0YWxzIiwib2xkX2RlYWxfcHJpY2UiLCJkZWFsX3ByaWNlIiwicGF5YWJsZV9hbW91bnQiLCJET0NUT1IiLCJlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyIsImJpbmQiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwiQVNTRVRTX0JBU0VfVVJMIiwibWFyZ2luVG9wIiwiY3Vyc29yIiwibWFyZ2luTGVmdCIsImFwcG9pbnRtZW50SWQiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJET0NUT1JfU0VBUkNIIiwiRE9DVE9SUyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYXBwb2ludG1lbnRJRCIsImNhbGxiYWNrIiwic2VsZWN0T3BkVGltZVNMb3QiLCJzbG90IiwicmVzY2hlZHVsZSIsInJldHJ5UGF5bWVudE9QRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsZ0JBQU1DLFNBQTNCLENBQXFDO0FBQ2pDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMsYUFBUzs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVcsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLElBQXdCLGdCQUF4QztBQUNJLG1EQUFLLFdBQVUsV0FBZixHQURKO0FBR1EsaUJBQUtGLEtBQUwsQ0FBV0csV0FBWCxHQUNJO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGFBREosR0FDK0U7QUFKdkYsU0FESjtBQVNIO0FBaEJnQzs7a0JBbUJ0QlAsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJmOzs7Ozs7a0JBRWVBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLE1BQU1RLFdBQU4sU0FBMEJQLGdCQUFNQyxTQUFoQyxDQUEwQztBQUN0Q0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0ssS0FBTCxHQUFhLEVBQWI7QUFHSDs7QUFFREMsZ0JBQVk7QUFDUixZQUFJQyxPQUFPLEtBQUtQLEtBQUwsQ0FBV08sSUFBdEI7QUFDQSxZQUFJQSxJQUFKLEVBQVU7QUFDTixnQkFBSUMsT0FBTztBQUNQLDRCQUFZLGFBREwsRUFDb0IsVUFBVSxpQkFEOUIsRUFDaUQsY0FB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QUErQkYsU0FBUyxpQ0FBcUIvRCxlQUFyQixFQUFzQ2lFLFFBQXRDLENBQVQsQ0FGbEQ7QUFHSEMsMkJBQW1CLENBQUNDLElBQUQsRUFBT0MsVUFBUCxLQUFzQkwsU0FBUyw4QkFBa0JJLElBQWxCLEVBQXdCQyxVQUF4QixDQUFULENBSHRDO0FBSUhDLHlCQUFpQixDQUFDYixhQUFELEVBQWdCUyxRQUFoQixLQUE2QkYsU0FBUyw0QkFBZ0JQLGFBQWhCLEVBQStCUyxRQUEvQixDQUFUO0FBSjNDLEtBQVA7QUFNSCxDQVBEOztrQkFVZSx5QkFBUU4sZUFBUixFQUF5Qkcsa0JBQXpCLEVBQTZDckYscUJBQTdDLEMiLCJmaWxlIjoiNTcuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cblxuY2xhc3MgUGF5bWVudEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2VuZEV2ZW50KCkge1xuICAgICAgICBsZXQgcmVmcyA9IHRoaXMucHJvcHMucmVmc1xuICAgICAgICBpZiAocmVmcykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb250aW51ZUNsaWNrZWQnLCAncGFnZVNvdXJjZSc6IHJlZnMsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb250aW51ZUNsaWNrZWQnLCAncGFnZVNvdXJjZSc6ICdVTktOT1dOJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29udGludWUtY2xpY2tlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZW5kRXZlbnQoKVxuICAgIH1cblxuICAgIGdldFBheW1lbnROb2RlTmFtZShuYW1lLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gYCR7bmFtZX1bJHtpbmRleH1dYFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBsZXQgZGF0YSA9IHsgXCJwYXltZW50TW9kZVwiOiBcIkNDXCIsIFwicmVzcG9uc2VDb2RlXCI6IFwiMjI3XCIsIFwiYmFua1R4SWRcIjogXCJcIiwgXCJ0eERhdGVcIjogXCJKdW4gNCwgMjAxOCAxMjoxMDoyMyBQTVwiLCBcImJhbmtOYW1lXCI6IFwiU0JJXCIsIFwic3RhdHVzTXNnXCI6IFwiT29wcyBhbiBlcnJvciBvY2N1cnJlZC4gV2Ugd2lsbCBnZXQgYmFjayB0byB5b3UhXCIsIFwiY3VycmVuY3lcIjogXCJJTlJcIiwgXCJzdGF0dXNDb2RlXCI6IDEsIFwicGdHYXRld2F5TmFtZVwiOiBcIk1PQ0tcIiwgXCJyZXNwb25zZU1lc3NhZ2VcIjogXCJZb3VyIHBheW1lbnQgaGFzIGJlZW4gZGVjbGluZWQgYnkgeW91ciBiYW5rLiBQbGVhc2UgY29udGFjdCB5b3VyIGJhbmsgZm9yIGFueSBxdWVyaWVzLiBJZiBtb25leSBoYXMgYmVlbiBkZWR1Y3RlZCBmcm9tIHlvdXIgYWNjb3VudCwgeW91ciBiYW5rIHdpbGwgaW5mb3JtIHVzIHdpdGhpbiA0OCBocnMgYW5kIHdlIHdpbGwgcmVmdW5kIHRoZSBzYW1lXCIsIFwidHhTdGF0dXNcIjogXCJUWE5fRkFJTFVSRVwiLCBcImN1c3RvbWVySWRcIjogNTEsIFwib3JkZXJOb1wiOiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ10sIFwic3RhdHVzU2hvcnRNc2dcIjogXCJPdGhlcnNcIiwgXCJlbWFpbFwiOiBcImR1bW15X2FwcG9pbnRtZW50QHBvbGljeWJhemFhci5jb21cIiwgXCJwYkdhdGV3YXlOYW1lXCI6IFwicGF5dG1cIiwgXCJtb2JpbGVcIjogXCI5OTk5OTk5OTk3XCIsIHByb2R1Y3RJZDogdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncHJvZHVjdElkJ10gfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZlcmVuY2VJZCddKSB7XG4gICAgICAgIC8vICAgICBkYXRhWydyZWZlcmVuY2VJZCddID0gdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gZGF0YVsncGdUeElkJ10gPSB0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ11cbiAgICAgICAgLy8gZGF0YSA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInBheW1lbnRGb3JtXCIgcmVmPVwicGF5bWVudEZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPXt0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2lzX3NpbmdsZV9mbG93J10/Q09ORklHLlBHX01VTFRJX09SREVSX1VSTDpDT05GSUcuUEdfVVJMfSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2lzX3NpbmdsZV9mbG93J10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpdGVtcyddLm1hcCgoaXRlbSwgaSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ25hbWUnLCBpKX0gaWQ9e2l0ZW1bJ25hbWUnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWyduYW1lJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ3Byb2R1Y3RJZCcsIGkpfSBpZD17aXRlbVsncHJvZHVjdElkJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsncHJvZHVjdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ3R4QW1vdW50JywgaSl9IGlkPXtpdGVtWyd0eEFtb3VudCddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ3R4QW1vdW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ29yZGVySWQnLCBpKX0gaWQ9e2l0ZW1bJ29yZGVySWQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydvcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ2hvbGRQYXltZW50JywgaSl9ICBpZD17aXRlbVsnaG9sZFBheW1lbnQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWydob2xkUGF5bWVudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSAmJiBpdGVtWydpbnN1cmVyQ29kZSddP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXt0aGlzLmdldFBheW1lbnROb2RlTmFtZSgnaW5zdXJlckNvZGUnLCBpKX0gaWQ9e2l0ZW1bJ2luc3VyZXJDb2RlJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsnaW5zdXJlckNvZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6PFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWyduYW1lJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2R1Y3RJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncHJvZHVjdElkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR4QW1vdW50XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWyd0eEFtb3VudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJvcmRlcklkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydvcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImhvbGRQYXltZW50XCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydob2xkUGF5bWVudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpbnN1cmVyQ29kZSddP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5zdXJlckNvZGVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2luc3VyZXJDb2RlJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjdXN0SWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2N1c3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibW9iaWxlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydtb2JpbGUnXX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2VtYWlsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdXJsXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydzdXJsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmdXJsXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydmdXJsJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZWZlcmVuY2VJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaGFzaFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaGFzaCddfSAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlzUHJlQXV0aFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaXNQcmVBdXRoJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGF5dG1Nc2cnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXl0bU1zZ1wiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGF5dG1Nc2cnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY291cG9uQ29kZSddID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291cG9uQ29kZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY291cG9uQ29kZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaXNjb3VudGVkQW1udFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnZGlzY291bnRlZEFtbnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291cG9uUGdNb2RlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydjb3Vwb25QZ01vZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVySWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZWZPcmRlcklkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZPcmRlcklkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmT3JkZXJObyddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlZk9yZGVyTm9cIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVyTm8nXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydwYXJlbnRQcm9kdWN0SWQnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXJlbnRQcm9kdWN0SWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3BhcmVudFByb2R1Y3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG5cbiAgICAgICAgICAgICAgICB7LyogPGZvcm0gaWQ9XCJwYXltZW50Rm9ybVwiIHJlZj1cInBheW1lbnRGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj17YCR7Q09ORklHLkFQSV9CQVNFX1VSTH0vYXBpL3YxL3VzZXIvdHJhbnNhY3Rpb24vc2F2ZWB9IHN0eWxlPXt7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicmVzcG9uc2VcIiBkZWZhdWx0VmFsdWU9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPiAqL31cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRGb3JtXG4iLCJpbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi9QYXltZW50Rm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudEZvcm0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuXG5pbXBvcnQgQ2FuY2VsYXRpb25Qb2xpY3kgZnJvbSAnLi9jYW5jZWxsYXRpb24uanMnXG5cbmltcG9ydCBTZWxlY3RlZENsaW5pYyBmcm9tICcuLi9jb21tb25zL3NlbGVjdGVkQ2xpbmljL2luZGV4LmpzJ1xuaW1wb3J0IFZpc2l0VGltZU5ldyBmcm9tICcuLi9wYXRpZW50RGV0YWlscy9WaXNpdFRpbWVOZXcnXG5pbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi4vLi4vY29tbW9ucy9wYXltZW50Rm9ybSdcblxuY2xhc3MgQXBwb2ludG1lbnRSZXNjaGVkdWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBheW1lbnREYXRhOiBudWxsLFxuICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgICAgICAgb3BlbkNhbmNlbGxhdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBvcGVuUGF5bWVudFN1bW1hcnk6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUod2hpY2gpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFt3aGljaF06ICF0aGlzLnN0YXRlW3doaWNoXSB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0T1BEQm9va2luZ1N1bW1hcnkodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucmVmSWQsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGFbMF0sIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2VlZCgpIHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IFwiXCIgfSlcblxuICAgICAgICBsZXQgc3RhcnRfZGF0ZSA9IHRoaXMucHJvcHMucmVzY2hlZHVsZVNsb3QuZGF0ZVxuICAgICAgICBsZXQgc3RhcnRfdGltZSA9IHRoaXMucHJvcHMucmVzY2hlZHVsZVNsb3QudGltZS52YWx1ZVxuICAgICAgICBsZXQgYXBwb2ludG1lbnREYXRhID0geyBpZDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucmVmSWQsIHN0YXJ0X2RhdGUsIHN0YXJ0X3RpbWUsIHN0YXR1czogNCB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVPUERBcHBvaW50bWVudChhcHBvaW50bWVudERhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucGF5bWVudF9yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIHRvIHBheW1lbnQgc2VsZWN0aW9uIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3BheW1lbnQvJHtkYXRhLmRhdGEub3JkZXJJZH1gKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NQYXltZW50KGRhdGEpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkFwcG9pbnRtZW50IFJlc2NoZHVsZWQuXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCBiYWNrIHRvIGFwcG9pbnRtZW50IHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9vcGQvYXBwb2ludG1lbnQvJHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZH1gKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIkNvdWxkIG5vdCByZXNjaGVkdWxlIGFwcG9pbnRtZW50LiBUcnkgYWdhaW4gbGF0ZXIgIVwiXG4gICAgICAgICAgICAgICAgaWYgKGVyci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHByb2Nlc3NQYXltZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50RGF0YTogZGF0YS5kYXRhIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudEZvcm0nKSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBheW1lbnREYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKHdoZXJlLCBlKSB7XG4gICAgICAgIHN3aXRjaCAod2hlcmUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0aW1lXCI6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHt0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yfS8ke3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWN9L2Jvb2s/Z29iYWNrPXRydWVgKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuY2VsQXBwb2ludG1lbnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBzaG93Q2FuY2VsOiBmYWxzZSB9KVxuXG4gICAgICAgIGxldCBhcHBvaW50bWVudERhdGEgPSB7IGlkOiB0aGlzLnN0YXRlLmRhdGEuaWQsIHN0YXR1czogNiwgcmVmdW5kOiAwIH1cbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVPUERBcHBvaW50bWVudChhcHBvaW50bWVudERhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkFwcG9pbnRtZW50IENhbmNlbGVkLlwiIH0pXG4gICAgICAgICAgICAgICAgLy8gc2VuZCBiYWNrIHRvIGFwcG9pbnRtZW50IHBhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShgL29wZC9hcHBvaW50bWVudC8ke3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLnJlZklkfWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gXCJDb3VsZCBub3QgY2FuY2VsIGFwcG9pbnRtZW50LiBUcnkgYWdhaW4gbGF0ZXIgIVwiXG4gICAgICAgICAgICAgICAgaWYgKGVyci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBkb2N0b3IgPSB7fVxuICAgICAgICBsZXQgcHJvZmlsZSA9IHt9XG4gICAgICAgIGxldCBob3NwaXRhbCA9IHt9XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXG4gICAgICAgIGxldCBzdGF0dXMgPSAxXG4gICAgICAgIGxldCBwcmljZURhdGEgPSB7fVxuICAgICAgICBsZXQgYm9va2luZ0VuYWJsZWQgPSBmYWxzZVxuICAgICAgICBsZXQgcHJvY2VkdXJlcyA9IGZhbHNlXG4gICAgICAgIGxldCBpc19wcmljZV9jaGFuZ2VkID0gZmFsc2VcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhKSB7XG4gICAgICAgICAgICBkb2N0b3IgPSB0aGlzLnN0YXRlLmRhdGEuZG9jdG9yXG4gICAgICAgICAgICBob3NwaXRhbCA9IHRoaXMuc3RhdGUuZGF0YS5ob3NwaXRhbFxuICAgICAgICAgICAgcHJvZmlsZSA9IHRoaXMuc3RhdGUuZGF0YS5wcm9maWxlXG4gICAgICAgICAgICBkYXRlID0gdGhpcy5zdGF0ZS5kYXRhLnRpbWVfc2xvdF9zdGFydCA/IG5ldyBEYXRlKHRoaXMuc3RhdGUuZGF0YS50aW1lX3Nsb3Rfc3RhcnQpIDogbmV3IERhdGUoKVxuICAgICAgICAgICAgYWN0aW9ucyA9IHRoaXMuc3RhdGUuZGF0YS5hbGxvd2VkX2FjdGlvbiB8fCBbXVxuICAgICAgICAgICAgc3RhdHVzID0gdGhpcy5zdGF0ZS5kYXRhLnN0YXR1c1xuICAgICAgICAgICAgZG9jdG9yLnRodW1ibmFpbCA9IHRoaXMuc3RhdGUuZGF0YS5kb2N0b3JfdGh1bWJuYWlsXG4gICAgICAgICAgICBkb2N0b3IuaG9zcGl0YWxzID0gW2hvc3BpdGFsXVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXNjaGVkdWxlU2xvdCAmJiB0aGlzLnByb3BzLnJlc2NoZWR1bGVTbG90LmRhdGUpIHtcbiAgICAgICAgICAgICAgICBwcmljZURhdGEgPSB7IC4uLnRoaXMucHJvcHMucmVzY2hlZHVsZVNsb3QudGltZSB9XG4gICAgICAgICAgICAgICAgcHJpY2VEYXRhLm9sZF9kZWFsX3ByaWNlID0gdGhpcy5zdGF0ZS5kYXRhLmRlYWxfcHJpY2VcbiAgICAgICAgICAgICAgICBwcmljZURhdGEucGF5YWJsZV9hbW91bnQgPSBwcmljZURhdGEuZGVhbF9wcmljZSAtIHByaWNlRGF0YS5vbGRfZGVhbF9wcmljZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YS5wcm9jZWR1cmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHByb2NlZHVyZXMgPSB0cnVlXG4gICAgICAgICAgICAgICAgcHJpY2VEYXRhLnBheWFibGVfYW1vdW50ID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnByb3BzLkRPQ1RPUiAmJiB0aGlzLnByb3BzLkRPQ1RPUlt0aGlzLnN0YXRlLmRhdGEuZG9jdG9yLmlkXSkge1xuICAgICAgICAgICAgYm9va2luZ0VuYWJsZWQgPSB0aGlzLnByb3BzLkRPQ1RPUlt0aGlzLnN0YXRlLmRhdGEuZG9jdG9yLmlkXS5lbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHItcHJvZmlsZS1zY3JlZW4gYm9va2luZy1jb25maXJtLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtcmItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RlZENsaW5pY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93SGlkZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9jdG9yPXtkb2N0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsaW5pYz17aG9zcGl0YWwuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2l0VGltZU5ldyB0eXBlPVwiaG9tZVwiIG5hdmlnYXRlVG89e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMpfSBzZWxlY3RlZFNsb3Q9e3RoaXMucHJvcHMucmVzY2hlZHVsZVNsb3R9IGhpZGVDaGFuZ2VUaW1lPXt0cnVlfSB0aW1lRXJyb3I9e251bGx9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VEYXRhLnBheWFibGVfYW1vdW50ICE9IDAgJiYgdGhpcy5zdGF0ZS5kYXRhLnN0YXR1cyAhPT0gNyA/IDxkaXYgY2xhc3NOYW1lPVwiY3NoLWJhY2stYXBwbGllZC1jb250YWluZXJcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzaC1tbnktYXBwbGllZC1jb250ZW50XCI+QW1vdW50IGZvciB0aGUgYXBwb2ludG1lbnQgaXMgY2hhbmdlZCwgdG8gcHJvY2VlZCB5b3UgbmVlZCB0byBjYW5jZWwgdGhpcyBvcmRlciBhbmQgcGxhY2UgYSBuZXcgb25lLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgZC1mbGV4IGpjLXNwYWNlYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgZC1mbGV4XCI+PHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIG1hcmdpblJpZ2h0OiAnOHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5QYXRpZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCAgbWJsLXZpZXctZm9ybWF0dGluZyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGF0ZS10aW1lIHRpdGxlXCI+e3Byb2ZpbGUgPyBwcm9maWxlLm5hbWUgOiBcIlwifSA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5zdGF0dXMgIT09IDcgPyA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSB0ZXN0LXJlcG9ydFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAsIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Cb3R0b206IDAgfX0gb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnb3BlbkNhbmNlbGxhdGlvbicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgcGF5bWVudC1hbXQtbGFiZWwgZnMtaXRhbGljXCI+RnJlZSBDYW5jZWxsYXRpb248c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvaW5mby5zdmdcIn0gLz48L3NwYW4+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSB0ZXN0LXJlcG9ydFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbCBmcy1pdGFsaWNcIj5UZXJtcyBvZiBVc2U8c3Bhbj48aW1nIGNsYXNzTmFtZT1cImluZm8taWNvbi1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9pbmZvLnN2Z1wifSAvPjwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57dGhpcy5zdGF0ZS5lcnJvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5zdGF0dXMgPT0gNyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtcy1yZXNjaGVkdWxlIG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+VGhpcyBhcHBvaW50bWVudCBjYW5ub3QgYmUgcmVzY2hlZHVsZWQgYXMgeW91IGhhdmUgYWxyZWFkeSBtYXJrZWQgdGhpcyBhcHBvaW50bWVudCBjb21wbGV0ZS4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzbXMtbGdidG5cIiBvbkNsaWNrPXsoKSA9PiAodGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKSl9PkdvIHRvIEhvbWVwYWdlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW5DYW5jZWxsYXRpb24gPyA8Q2FuY2VsYXRpb25Qb2xpY3kgcHJvcHM9e3RoaXMucHJvcHN9IHRvZ2dsZT17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnb3BlbkNhbmNlbGxhdGlvbicpfSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnN0YXRlLmRhdGEuc3RhdHVzICE9IDcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZURhdGEucGF5YWJsZV9hbW91bnQgPT0gMCA/IDxidXR0b24gZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ30gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RhdGljLWJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvY2VlZC5iaW5kKHRoaXMpfT5Db25maXJtIFJlc2NoZWR1bGU8L2J1dHRvbj4gOiA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0YXRpYy1idG5cIiBvbkNsaWNrPXt0aGlzLmNhbmNlbEFwcG9pbnRtZW50LmJpbmQodGhpcyl9PkNhbmNlbCBhbmQgcmVib29rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXltZW50RGF0YSA/IDxQYXltZW50Rm9ybSBwYXltZW50RGF0YT17dGhpcy5zdGF0ZS5wYXltZW50RGF0YX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcG9pbnRtZW50UmVzY2hlZHVsZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdG9nZ2xlIH0pID0+IHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZX0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBhY3Rpb24tc2NyZWVuLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPkNhbmNlbGxhdGlvbiBQb2xpY3k8L3A+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLXBvbGljeS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+Rm9yIGFueSBvbmxpbmUgcGFpZCBhcHBvaW50bWVudHMsIHlvdSBjYW4gY2FuY2VsIHlvdXIgc2NoZWR1bGVkIG9yIHJlLWJvb2tlZCBhcHBvaW50bWVudCBhbmQgaW5pdGlhdGUgaW1tZWRpYXRlIHJlZnVuZCBhdCBhbnkgdGltZS4gQW4gaW1tZWRpYXRlIHJlZnVuZCBzaGFsbCBiZSBzdWJqZWN0IHRvIHRlcm1zIGFuZCBjb25kaXRpb25zIGFzIGRlc2NyaWJlZCB1bmRlciB0aGlzIHNlY3Rpb24gbWVudGlvbmVkIGJlbG93LiBcblxuSW4gdGhlIGV2ZW50LCB0aGUgc2VydmljZXMgYXJlIG5vdCBhdmFpbGVkIGF0IHRoZSBhcHBvaW50ZWQgZGF0ZSBhbmQgdGltZSBhbmQgb3VyIHN5c3RlbXMgZG8gbm90IHZhbGlkYXRlIHRoZSBVUk4gZ2VuZXJhdGVkIG9uIHlvdXIgcmVnaXN0ZXJlZCBtb2JpbGUgbnVtYmVyLCB3ZSB3aWxsIGF1dG9tYXRpY2FsbHkgY2FuY2VsIHlvdXIgYXBwb2ludG1lbnQgYXQgMTI6MDAgbWlkbmlnaHQgb2YgbmV4dCBkYXRlIG9mIHlvdXIgYXBwb2ludG1lbnQgZGF0ZS5cblxuT2NjYXNpb25hbGx5LCBhcHBvaW50bWVudHMgbWF5IGJlIGNhbmNlbGxlZCBvciBwb3N0cG9uZWQgYnkgdGhlIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXIuIFNob3VsZCB0aGlzIG9jY3VyLCB3ZSB3aWxsIGF0dGVtcHQgdG8gY29udGFjdCBvciBpbmZvcm0geW91IGFuZCB5b3UgbWF5IHJlLXNjaGVkdWxlIHlvdXIgYXBwb2ludG1lbnQgYXMgcGVyIHlvdXIgY29udmVuaWVuY2Ugb3IgdmlzaXQgd3d3LmRvY3ByaW1lLmNvbSBmb3IgZnJlc2gvcmUtYm9va2luZyBvbiB0aGUgV2Vic2l0ZS5cblxuQ2FuY2VsbGF0aW9uIHRocm91Z2ggbWFpbCBvciBjYWxsIGNlbnRlciBpcyBhbGxvd2VkIGZvciBhbGwgdGhlIGJvb2tpbmdzIHVudGlsIHRoZSB0aW1lIG9mIGFwcG9pbnRtZW50IG9yIDEyOjAwIG1pZG5pZ2h0IG9mIG5leHQgZGF0ZSBvZiB5b3VyIGFwcG9pbnRtZW50IGRhdGUuIEluIHN1Y2ggY2FzZXMsIHdlIHdpbGwgaW5pdGlhdGUgYW4gaW1tZWRpYXRlIHJlZnVuZCBvZiB5b3VyIG1vbmV5IGFzIHBlciB0aGUgcHJvY2VzcyBkZWZpbmVkIGJlbG93LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn0iLCJpbXBvcnQgQXBwb2ludG1lbnRSZXNjaGVkdWxlIGZyb20gJy4vQXBwb2ludG1lbnRSZXNjaGVkdWxlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBBcHBvaW50bWVudFJlc2NoZWR1bGUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0T1BEQm9va2luZ1N1bW1hcnksIHVwZGF0ZU9QREFwcG9pbnRtZW50LCBzZWxlY3RPcGRUaW1lU0xvdCwgcmV0cnlQYXltZW50T1BEIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IEFwcG9pbnRtZW50UmVzY2hlZHVsZVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vcGQvYXBwb2ludG1lbnRSZXNjaGVkdWxlJ1xuXG5jbGFzcyBBcHBvaW50bWVudFJlc2NoZWR1bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnJlZklkICE9IHRoaXMucHJvcHMuYXBwb2ludG1lbnRJZCkgfHwgIXRoaXMucHJvcHMucmVzY2hlZHVsZVNsb3QuZGF0ZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZCA9PSB0aGlzLnByb3BzLmFwcG9pbnRtZW50SWQgJiYgdGhpcy5wcm9wcy5yZXNjaGVkdWxlU2xvdC5kYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxBcHBvaW50bWVudFJlc2NoZWR1bGVWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8QXBwb2ludG1lbnRSZXNjaGVkdWxlVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgfVxuXG5cbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGxldCB7IHJlc2NoZWR1bGVTbG90LCBhcHBvaW50bWVudElkIH0gPSBzdGF0ZS5ET0NUT1JfU0VBUkNIXG4gICAgbGV0IERPQ1RPUiA9IHN0YXRlLkRPQ1RPUlNcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc2NoZWR1bGVTbG90LFxuICAgICAgICBhcHBvaW50bWVudElkLFxuICAgICAgICBET0NUT1JcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldE9QREJvb2tpbmdTdW1tYXJ5OiAoYXBwb2ludG1lbnRJRCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldE9QREJvb2tpbmdTdW1tYXJ5KGFwcG9pbnRtZW50SUQsIGNhbGxiYWNrKSksXG4gICAgICAgIHVwZGF0ZU9QREFwcG9pbnRtZW50OiAoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBkYXRlT1BEQXBwb2ludG1lbnQoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykpLFxuICAgICAgICBzZWxlY3RPcGRUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUpID0+IGRpc3BhdGNoKHNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUpKSxcbiAgICAgICAgcmV0cnlQYXltZW50T1BEOiAoYXBwb2ludG1lbnRJZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKHJldHJ5UGF5bWVudE9QRChhcHBvaW50bWVudElkLCBjYWxsYmFjaykpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcG9pbnRtZW50UmVzY2hlZHVsZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9