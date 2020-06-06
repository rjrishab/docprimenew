(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppointmentReschedule = function (_React$Component) {
    _inherits(AppointmentReschedule, _React$Component);

    function AppointmentReschedule(props) {
        _classCallCheck(this, AppointmentReschedule);

        var _this = _possibleConstructorReturn(this, (AppointmentReschedule.__proto__ || Object.getPrototypeOf(AppointmentReschedule)).call(this, props));

        _this.state = {
            paymentData: null,
            data: null,
            loading: true,
            showCancel: false,
            error: "",
            openCancellation: false,
            openPaymentSummary: false
        };
        return _this;
    }

    _createClass(AppointmentReschedule, [{
        key: 'toggle',
        value: function toggle(which) {
            this.setState(_defineProperty({}, which, !this.state[which]));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.getOPDBookingSummary(this.props.match.params.refId, function (err, data) {
                if (!err) {
                    _this2.setState({ data: data[0], loading: false });
                } else {
                    _this2.setState({ data: null, loading: false });
                }
            });

            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'proceed',
        value: function proceed() {
            var _this3 = this;

            this.setState({ loading: true, error: "" });

            var start_date = this.props.rescheduleSlot.date;
            var start_time = this.props.rescheduleSlot.time.value;
            var appointmentData = { id: this.props.match.params.refId, start_date: start_date, start_time: start_time, status: 4 };

            this.props.updateOPDAppointment(appointmentData, function (err, data) {
                if (!err) {
                    if (data.payment_required) {
                        // send to payment selection page
                        //this.props.history.push(`/payment/${data.data.orderId}`)
                        _this3.processPayment(data);
                    } else {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Appointment Reschduled." });
                        // send back to appointment page
                        _this3.props.history.replace('/opd/appointment/' + _this3.props.match.params.refId);
                    }
                } else {
                    var message = "Could not reschedule appointment. Try again later !";
                    if (err.message) {
                        message = err.message;
                    }
                    _this3.setState({ loading: false, error: message });
                }
            });
        }
    }, {
        key: 'processPayment',
        value: function processPayment(data) {
            var _this4 = this;

            if (data && data.status) {
                this.setState({ paymentData: data.data }, function () {
                    setTimeout(function () {
                        if (document.getElementById('paymentForm') && Object.keys(_this4.state.paymentData).length > 0) {
                            var form = document.getElementById('paymentForm');
                            form.submit();
                        }
                    }, 500);
                });
            }
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(where, e) {
            switch (where) {
                case "time":
                    {
                        this.props.history.push('/opd/doctor/' + this.state.selectedDoctor + '/' + this.state.selectedClinic + '/book?goback=true');
                        return;
                    }
            }
        }
    }, {
        key: 'cancelAppointment',
        value: function cancelAppointment() {
            var _this5 = this;

            this.setState({ loading: true, showCancel: false });

            var appointmentData = { id: this.state.data.id, status: 6, refund: 0 };
            this.props.updateOPDAppointment(appointmentData, function (err, data) {
                if (data) {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Appointment Canceled." });
                    // send back to appointment page
                    _this5.props.history.replace('/opd/appointment/' + _this5.props.match.params.refId);
                } else {
                    var message = "Could not cancel appointment. Try again later !";
                    if (err.message) {
                        message = err.message;
                    }
                    _this5.setState({ loading: false, error: message });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var doctor = {};
            var profile = {};
            var hospital = {};
            var date = new Date();
            var actions = [];
            var status = 1;
            var priceData = {};
            var bookingEnabled = false;
            var procedures = false;
            var is_price_changed = false;

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
                                                { className: 'sms-lgbtn', onClick: function onClick() {
                                                        return _this6.props.history.push('/');
                                                    } },
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
    }]);

    return AppointmentReschedule;
}(_react2.default.Component);

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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var toggle = _ref.toggle;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _appointmentReschedule = __webpack_require__(/*! ../../components/opd/appointmentReschedule */ "./dev/js/components/opd/appointmentReschedule/index.js");

var _appointmentReschedule2 = _interopRequireDefault(_appointmentReschedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppointmentReschedule = function (_React$Component) {
    _inherits(AppointmentReschedule, _React$Component);

    function AppointmentReschedule(props) {
        _classCallCheck(this, AppointmentReschedule);

        return _possibleConstructorReturn(this, (AppointmentReschedule.__proto__ || Object.getPrototypeOf(AppointmentReschedule)).call(this, props));
    }

    _createClass(AppointmentReschedule, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.match.params.refId != this.props.appointmentId || !this.props.rescheduleSlot.date) {
                // this.props.history.go(-1)
            }
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.props.match.params.refId == this.props.appointmentId && this.props.rescheduleSlot.date) {
                return _react2.default.createElement(_appointmentReschedule2.default, this.props);
            } else {
                return _react2.default.createElement(_appointmentReschedule2.default, this.props);
            }
        }
    }]);

    return AppointmentReschedule;
}(_react2.default.Component);

AppointmentReschedule.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$DOCTOR_SEARCH = state.DOCTOR_SEARCH,
        rescheduleSlot = _state$DOCTOR_SEARCH.rescheduleSlot,
        appointmentId = _state$DOCTOR_SEARCH.appointmentId;

    var DOCTOR = state.DOCTORS;

    return {
        rescheduleSlot: rescheduleSlot,
        appointmentId: appointmentId,
        DOCTOR: DOCTOR
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getOPDBookingSummary: function getOPDBookingSummary(appointmentID, callback) {
            return dispatch((0, _index.getOPDBookingSummary)(appointmentID, callback));
        },
        updateOPDAppointment: function updateOPDAppointment(appointmentData, callback) {
            return dispatch((0, _index.updateOPDAppointment)(appointmentData, callback));
        },
        selectOpdTimeSLot: function selectOpdTimeSLot(slot, reschedule) {
            return dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule));
        },
        retryPaymentOPD: function retryPaymentOPD(appointmentId, callback) {
            return dispatch((0, _index.retryPaymentOPD)(appointmentId, callback));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppointmentReschedule);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2FwcG9pbnRtZW50UmVzY2hlZHVsZS9BcHBvaW50bWVudFJlc2NoZWR1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2FwcG9pbnRtZW50UmVzY2hlZHVsZS9jYW5jZWxsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2FwcG9pbnRtZW50UmVzY2hlZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9vcGQvQXBwb2ludG1lbnRSZXNjaGVkdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJwcm9wcyIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJBcHBvaW50bWVudFJlc2NoZWR1bGUiLCJzdGF0ZSIsInBheW1lbnREYXRhIiwiZGF0YSIsImxvYWRpbmciLCJzaG93Q2FuY2VsIiwiZXJyb3IiLCJvcGVuQ2FuY2VsbGF0aW9uIiwib3BlblBheW1lbnRTdW1tYXJ5Iiwid2hpY2giLCJzZXRTdGF0ZSIsImdldE9QREJvb2tpbmdTdW1tYXJ5IiwibWF0Y2giLCJwYXJhbXMiLCJyZWZJZCIsImVyciIsIndpbmRvdyIsInNjcm9sbFRvIiwic3RhcnRfZGF0ZSIsInJlc2NoZWR1bGVTbG90IiwiZGF0ZSIsInN0YXJ0X3RpbWUiLCJ0aW1lIiwidmFsdWUiLCJhcHBvaW50bWVudERhdGEiLCJpZCIsInN0YXR1cyIsInVwZGF0ZU9QREFwcG9pbnRtZW50IiwicGF5bWVudF9yZXF1aXJlZCIsInByb2Nlc3NQYXltZW50IiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImhpc3RvcnkiLCJyZXBsYWNlIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImZvcm0iLCJzdWJtaXQiLCJ3aGVyZSIsImUiLCJwdXNoIiwic2VsZWN0ZWREb2N0b3IiLCJzZWxlY3RlZENsaW5pYyIsInJlZnVuZCIsImRvY3RvciIsInByb2ZpbGUiLCJob3NwaXRhbCIsIkRhdGUiLCJhY3Rpb25zIiwicHJpY2VEYXRhIiwiYm9va2luZ0VuYWJsZWQiLCJwcm9jZWR1cmVzIiwiaXNfcHJpY2VfY2hhbmdlZCIsInRpbWVfc2xvdF9zdGFydCIsImFsbG93ZWRfYWN0aW9uIiwidGh1bWJuYWlsIiwiZG9jdG9yX3RodW1ibmFpbCIsImhvc3BpdGFscyIsIm9sZF9kZWFsX3ByaWNlIiwiZGVhbF9wcmljZSIsInBheWFibGVfYW1vdW50IiwiRE9DVE9SIiwiZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmciLCJuYXZpZ2F0ZVRvIiwiYmluZCIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJBU1NFVFNfQkFTRV9VUkwiLCJuYW1lIiwibWFyZ2luVG9wIiwiY3Vyc29yIiwidG9nZ2xlIiwibWFyZ2luTGVmdCIsInByb2NlZWQiLCJjYW5jZWxBcHBvaW50bWVudCIsImFwcG9pbnRtZW50SWQiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJET0NUT1JfU0VBUkNIIiwiRE9DVE9SUyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYXBwb2ludG1lbnRJRCIsImNhbGxiYWNrIiwic2VsZWN0T3BkVGltZVNMb3QiLCJzbG90IiwicmVzY2hlZHVsZSIsInJldHJ5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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Y7QUFDVjtBQUNGO0FBQ007QUFDRjtBQUNKO0FBQ0Y7QUFDSTtBQUNGO0FBQ2M7QUFDRjtBQUNWO0FBQ0Y7QUFDYztBQUNGO0FBQ0o7QUFDRjtBQUNJIiwiZmlsZSI6Ijc2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuXG5pbXBvcnQgQ2FuY2VsYXRpb25Qb2xpY3kgZnJvbSAnLi9jYW5jZWxsYXRpb24uanMnXG5cbmltcG9ydCBTZWxlY3RlZENsaW5pYyBmcm9tICcuLi9jb21tb25zL3NlbGVjdGVkQ2xpbmljL2luZGV4LmpzJ1xuaW1wb3J0IFZpc2l0VGltZU5ldyBmcm9tICcuLi9wYXRpZW50RGV0YWlscy9WaXNpdFRpbWVOZXcnXG5pbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi4vLi4vY29tbW9ucy9wYXltZW50Rm9ybSdcblxuY2xhc3MgQXBwb2ludG1lbnRSZXNjaGVkdWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBheW1lbnREYXRhOiBudWxsLFxuICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiBcIlwiLFxuICAgICAgICAgICAgb3BlbkNhbmNlbGxhdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBvcGVuUGF5bWVudFN1bW1hcnk6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUod2hpY2gpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFt3aGljaF06ICF0aGlzLnN0YXRlW3doaWNoXSB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0T1BEQm9va2luZ1N1bW1hcnkodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucmVmSWQsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGFbMF0sIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2VlZCgpIHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IFwiXCIgfSlcblxuICAgICAgICBsZXQgc3RhcnRfZGF0ZSA9IHRoaXMucHJvcHMucmVzY2hlZHVsZVNsb3QuZGF0ZVxuICAgICAgICBsZXQgc3RhcnRfdGltZSA9IHRoaXMucHJvcHMucmVzY2hlZHVsZVNsb3QudGltZS52YWx1ZVxuICAgICAgICBsZXQgYXBwb2ludG1lbnREYXRhID0geyBpZDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucmVmSWQsIHN0YXJ0X2RhdGUsIHN0YXJ0X3RpbWUsIHN0YXR1czogNCB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVPUERBcHBvaW50bWVudChhcHBvaW50bWVudERhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucGF5bWVudF9yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIHRvIHBheW1lbnQgc2VsZWN0aW9uIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3BheW1lbnQvJHtkYXRhLmRhdGEub3JkZXJJZH1gKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NQYXltZW50KGRhdGEpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkFwcG9pbnRtZW50IFJlc2NoZHVsZWQuXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCBiYWNrIHRvIGFwcG9pbnRtZW50IHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9vcGQvYXBwb2ludG1lbnQvJHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZH1gKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIkNvdWxkIG5vdCByZXNjaGVkdWxlIGFwcG9pbnRtZW50LiBUcnkgYWdhaW4gbGF0ZXIgIVwiXG4gICAgICAgICAgICAgICAgaWYgKGVyci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHByb2Nlc3NQYXltZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50RGF0YTogZGF0YS5kYXRhIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudEZvcm0nKSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBheW1lbnREYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKHdoZXJlLCBlKSB7XG4gICAgICAgIHN3aXRjaCAod2hlcmUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0aW1lXCI6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHt0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yfS8ke3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWN9L2Jvb2s/Z29iYWNrPXRydWVgKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuY2VsQXBwb2ludG1lbnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBzaG93Q2FuY2VsOiBmYWxzZSB9KVxuXG4gICAgICAgIGxldCBhcHBvaW50bWVudERhdGEgPSB7IGlkOiB0aGlzLnN0YXRlLmRhdGEuaWQsIHN0YXR1czogNiwgcmVmdW5kOiAwIH1cbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVPUERBcHBvaW50bWVudChhcHBvaW50bWVudERhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkFwcG9pbnRtZW50IENhbmNlbGVkLlwiIH0pXG4gICAgICAgICAgICAgICAgLy8gc2VuZCBiYWNrIHRvIGFwcG9pbnRtZW50IHBhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShgL29wZC9hcHBvaW50bWVudC8ke3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLnJlZklkfWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gXCJDb3VsZCBub3QgY2FuY2VsIGFwcG9pbnRtZW50LiBUcnkgYWdhaW4gbGF0ZXIgIVwiXG4gICAgICAgICAgICAgICAgaWYgKGVyci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBkb2N0b3IgPSB7fVxuICAgICAgICBsZXQgcHJvZmlsZSA9IHt9XG4gICAgICAgIGxldCBob3NwaXRhbCA9IHt9XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXG4gICAgICAgIGxldCBzdGF0dXMgPSAxXG4gICAgICAgIGxldCBwcmljZURhdGEgPSB7fVxuICAgICAgICBsZXQgYm9va2luZ0VuYWJsZWQgPSBmYWxzZVxuICAgICAgICBsZXQgcHJvY2VkdXJlcyA9IGZhbHNlXG4gICAgICAgIGxldCBpc19wcmljZV9jaGFuZ2VkID0gZmFsc2VcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhKSB7XG4gICAgICAgICAgICBkb2N0b3IgPSB0aGlzLnN0YXRlLmRhdGEuZG9jdG9yXG4gICAgICAgICAgICBob3NwaXRhbCA9IHRoaXMuc3RhdGUuZGF0YS5ob3NwaXRhbFxuICAgICAgICAgICAgcHJvZmlsZSA9IHRoaXMuc3RhdGUuZGF0YS5wcm9maWxlXG4gICAgICAgICAgICBkYXRlID0gdGhpcy5zdGF0ZS5kYXRhLnRpbWVfc2xvdF9zdGFydCA/IG5ldyBEYXRlKHRoaXMuc3RhdGUuZGF0YS50aW1lX3Nsb3Rfc3RhcnQpIDogbmV3IERhdGUoKVxuICAgICAgICAgICAgYWN0aW9ucyA9IHRoaXMuc3RhdGUuZGF0YS5hbGxvd2VkX2FjdGlvbiB8fCBbXVxuICAgICAgICAgICAgc3RhdHVzID0gdGhpcy5zdGF0ZS5kYXRhLnN0YXR1c1xuICAgICAgICAgICAgZG9jdG9yLnRodW1ibmFpbCA9IHRoaXMuc3RhdGUuZGF0YS5kb2N0b3JfdGh1bWJuYWlsXG4gICAgICAgICAgICBkb2N0b3IuaG9zcGl0YWxzID0gW2hvc3BpdGFsXVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXNjaGVkdWxlU2xvdCAmJiB0aGlzLnByb3BzLnJlc2NoZWR1bGVTbG90LmRhdGUpIHtcbiAgICAgICAgICAgICAgICBwcmljZURhdGEgPSB7IC4uLnRoaXMucHJvcHMucmVzY2hlZHVsZVNsb3QudGltZSB9XG4gICAgICAgICAgICAgICAgcHJpY2VEYXRhLm9sZF9kZWFsX3ByaWNlID0gdGhpcy5zdGF0ZS5kYXRhLmRlYWxfcHJpY2VcbiAgICAgICAgICAgICAgICBwcmljZURhdGEucGF5YWJsZV9hbW91bnQgPSBwcmljZURhdGEuZGVhbF9wcmljZSAtIHByaWNlRGF0YS5vbGRfZGVhbF9wcmljZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YS5wcm9jZWR1cmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHByb2NlZHVyZXMgPSB0cnVlXG4gICAgICAgICAgICAgICAgcHJpY2VEYXRhLnBheWFibGVfYW1vdW50ID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnByb3BzLkRPQ1RPUiAmJiB0aGlzLnByb3BzLkRPQ1RPUlt0aGlzLnN0YXRlLmRhdGEuZG9jdG9yLmlkXSkge1xuICAgICAgICAgICAgYm9va2luZ0VuYWJsZWQgPSB0aGlzLnByb3BzLkRPQ1RPUlt0aGlzLnN0YXRlLmRhdGEuZG9jdG9yLmlkXS5lbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHItcHJvZmlsZS1zY3JlZW4gYm9va2luZy1jb25maXJtLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtcmItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RlZENsaW5pY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93SGlkZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRG9jdG9yPXtkb2N0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsaW5pYz17aG9zcGl0YWwuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2l0VGltZU5ldyB0eXBlPVwiaG9tZVwiIG5hdmlnYXRlVG89e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMpfSBzZWxlY3RlZFNsb3Q9e3RoaXMucHJvcHMucmVzY2hlZHVsZVNsb3R9IGhpZGVDaGFuZ2VUaW1lPXt0cnVlfSB0aW1lRXJyb3I9e251bGx9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VEYXRhLnBheWFibGVfYW1vdW50ICE9IDAgJiYgdGhpcy5zdGF0ZS5kYXRhLnN0YXR1cyAhPT0gNyA/IDxkaXYgY2xhc3NOYW1lPVwiY3NoLWJhY2stYXBwbGllZC1jb250YWluZXJcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzaC1tbnktYXBwbGllZC1jb250ZW50XCI+QW1vdW50IGZvciB0aGUgYXBwb2ludG1lbnQgaXMgY2hhbmdlZCwgdG8gcHJvY2VlZCB5b3UgbmVlZCB0byBjYW5jZWwgdGhpcyBvcmRlciBhbmQgcGxhY2UgYSBuZXcgb25lLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgZC1mbGV4IGpjLXNwYWNlYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgZC1mbGV4XCI+PHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIG1hcmdpblJpZ2h0OiAnOHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5QYXRpZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCAgbWJsLXZpZXctZm9ybWF0dGluZyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGF0ZS10aW1lIHRpdGxlXCI+e3Byb2ZpbGUgPyBwcm9maWxlLm5hbWUgOiBcIlwifSA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5zdGF0dXMgIT09IDcgPyA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSB0ZXN0LXJlcG9ydFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAsIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Cb3R0b206IDAgfX0gb25DbGljaz17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnb3BlbkNhbmNlbGxhdGlvbicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgcGF5bWVudC1hbXQtbGFiZWwgZnMtaXRhbGljXCI+RnJlZSBDYW5jZWxsYXRpb248c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvaW5mby5zdmdcIn0gLz48L3NwYW4+PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSB0ZXN0LXJlcG9ydFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbCBmcy1pdGFsaWNcIj5UZXJtcyBvZiBVc2U8c3Bhbj48aW1nIGNsYXNzTmFtZT1cImluZm8taWNvbi1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9pbmZvLnN2Z1wifSAvPjwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57dGhpcy5zdGF0ZS5lcnJvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5zdGF0dXMgPT0gNyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtcy1yZXNjaGVkdWxlIG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+VGhpcyBhcHBvaW50bWVudCBjYW5ub3QgYmUgcmVzY2hlZHVsZWQgYXMgeW91IGhhdmUgYWxyZWFkeSBtYXJrZWQgdGhpcyBhcHBvaW50bWVudCBjb21wbGV0ZS4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzbXMtbGdidG5cIiBvbkNsaWNrPXsoKSA9PiAodGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKSl9PkdvIHRvIEhvbWVwYWdlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW5DYW5jZWxsYXRpb24gPyA8Q2FuY2VsYXRpb25Qb2xpY3kgcHJvcHM9e3RoaXMucHJvcHN9IHRvZ2dsZT17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnb3BlbkNhbmNlbGxhdGlvbicpfSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnN0YXRlLmRhdGEuc3RhdHVzICE9IDcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZURhdGEucGF5YWJsZV9hbW91bnQgPT0gMCA/IDxidXR0b24gZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ30gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RhdGljLWJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvY2VlZC5iaW5kKHRoaXMpfT5Db25maXJtIFJlc2NoZWR1bGU8L2J1dHRvbj4gOiA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0YXRpYy1idG5cIiBvbkNsaWNrPXt0aGlzLmNhbmNlbEFwcG9pbnRtZW50LmJpbmQodGhpcyl9PkNhbmNlbCBhbmQgcmVib29rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXltZW50RGF0YSA/IDxQYXltZW50Rm9ybSBwYXltZW50RGF0YT17dGhpcy5zdGF0ZS5wYXltZW50RGF0YX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcG9pbnRtZW50UmVzY2hlZHVsZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdG9nZ2xlIH0pID0+IHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZX0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBhY3Rpb24tc2NyZWVuLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPkNhbmNlbGxhdGlvbiBQb2xpY3k8L3A+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLXBvbGljeS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+Rm9yIGFueSBvbmxpbmUgcGFpZCBhcHBvaW50bWVudHMsIHlvdSBjYW4gY2FuY2VsIHlvdXIgc2NoZWR1bGVkIG9yIHJlLWJvb2tlZCBhcHBvaW50bWVudCBhbmQgaW5pdGlhdGUgaW1tZWRpYXRlIHJlZnVuZCBhdCBhbnkgdGltZS4gQW4gaW1tZWRpYXRlIHJlZnVuZCBzaGFsbCBiZSBzdWJqZWN0IHRvIHRlcm1zIGFuZCBjb25kaXRpb25zIGFzIGRlc2NyaWJlZCB1bmRlciB0aGlzIHNlY3Rpb24gbWVudGlvbmVkIGJlbG93LiBcblxuSW4gdGhlIGV2ZW50LCB0aGUgc2VydmljZXMgYXJlIG5vdCBhdmFpbGVkIGF0IHRoZSBhcHBvaW50ZWQgZGF0ZSBhbmQgdGltZSBhbmQgb3VyIHN5c3RlbXMgZG8gbm90IHZhbGlkYXRlIHRoZSBVUk4gZ2VuZXJhdGVkIG9uIHlvdXIgcmVnaXN0ZXJlZCBtb2JpbGUgbnVtYmVyLCB3ZSB3aWxsIGF1dG9tYXRpY2FsbHkgY2FuY2VsIHlvdXIgYXBwb2ludG1lbnQgYXQgMTI6MDAgbWlkbmlnaHQgb2YgbmV4dCBkYXRlIG9mIHlvdXIgYXBwb2ludG1lbnQgZGF0ZS5cblxuT2NjYXNpb25hbGx5LCBhcHBvaW50bWVudHMgbWF5IGJlIGNhbmNlbGxlZCBvciBwb3N0cG9uZWQgYnkgdGhlIFRoaXJkIFBhcnR5IFNlcnZpY2UgUHJvdmlkZXIuIFNob3VsZCB0aGlzIG9jY3VyLCB3ZSB3aWxsIGF0dGVtcHQgdG8gY29udGFjdCBvciBpbmZvcm0geW91IGFuZCB5b3UgbWF5IHJlLXNjaGVkdWxlIHlvdXIgYXBwb2ludG1lbnQgYXMgcGVyIHlvdXIgY29udmVuaWVuY2Ugb3IgdmlzaXQgd3d3LmRvY3ByaW1lLmNvbSBmb3IgZnJlc2gvcmUtYm9va2luZyBvbiB0aGUgV2Vic2l0ZS5cblxuQ2FuY2VsbGF0aW9uIHRocm91Z2ggbWFpbCBvciBjYWxsIGNlbnRlciBpcyBhbGxvd2VkIGZvciBhbGwgdGhlIGJvb2tpbmdzIHVudGlsIHRoZSB0aW1lIG9mIGFwcG9pbnRtZW50IG9yIDEyOjAwIG1pZG5pZ2h0IG9mIG5leHQgZGF0ZSBvZiB5b3VyIGFwcG9pbnRtZW50IGRhdGUuIEluIHN1Y2ggY2FzZXMsIHdlIHdpbGwgaW5pdGlhdGUgYW4gaW1tZWRpYXRlIHJlZnVuZCBvZiB5b3VyIG1vbmV5IGFzIHBlciB0aGUgcHJvY2VzcyBkZWZpbmVkIGJlbG93LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn0iLCJpbXBvcnQgQXBwb2ludG1lbnRSZXNjaGVkdWxlIGZyb20gJy4vQXBwb2ludG1lbnRSZXNjaGVkdWxlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBBcHBvaW50bWVudFJlc2NoZWR1bGUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0T1BEQm9va2luZ1N1bW1hcnksIHVwZGF0ZU9QREFwcG9pbnRtZW50LCBzZWxlY3RPcGRUaW1lU0xvdCwgcmV0cnlQYXltZW50T1BEIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IEFwcG9pbnRtZW50UmVzY2hlZHVsZVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vcGQvYXBwb2ludG1lbnRSZXNjaGVkdWxlJ1xuXG5jbGFzcyBBcHBvaW50bWVudFJlc2NoZWR1bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnJlZklkICE9IHRoaXMucHJvcHMuYXBwb2ludG1lbnRJZCkgfHwgIXRoaXMucHJvcHMucmVzY2hlZHVsZVNsb3QuZGF0ZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZCA9PSB0aGlzLnByb3BzLmFwcG9pbnRtZW50SWQgJiYgdGhpcy5wcm9wcy5yZXNjaGVkdWxlU2xvdC5kYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxBcHBvaW50bWVudFJlc2NoZWR1bGVWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8QXBwb2ludG1lbnRSZXNjaGVkdWxlVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgfVxuXG5cbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGxldCB7IHJlc2NoZWR1bGVTbG90LCBhcHBvaW50bWVudElkIH0gPSBzdGF0ZS5ET0NUT1JfU0VBUkNIXG4gICAgbGV0IERPQ1RPUiA9IHN0YXRlLkRPQ1RPUlNcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc2NoZWR1bGVTbG90LFxuICAgICAgICBhcHBvaW50bWVudElkLFxuICAgICAgICBET0NUT1JcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldE9QREJvb2tpbmdTdW1tYXJ5OiAoYXBwb2ludG1lbnRJRCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldE9QREJvb2tpbmdTdW1tYXJ5KGFwcG9pbnRtZW50SUQsIGNhbGxiYWNrKSksXG4gICAgICAgIHVwZGF0ZU9QREFwcG9pbnRtZW50OiAoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBkYXRlT1BEQXBwb2ludG1lbnQoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykpLFxuICAgICAgICBzZWxlY3RPcGRUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUpID0+IGRpc3BhdGNoKHNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUpKSxcbiAgICAgICAgcmV0cnlQYXltZW50T1BEOiAoYXBwb2ludG1lbnRJZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKHJldHJ5UGF5bWVudE9QRChhcHBvaW50bWVudElkLCBjYWxsYmFjaykpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcG9pbnRtZW50UmVzY2hlZHVsZSk7XG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiaW1wb3J0IF9NZW1vcnlSb3V0ZXIgZnJvbSBcIi4vTWVtb3J5Um91dGVyXCI7XG5leHBvcnQgeyBfTWVtb3J5Um91dGVyIGFzIE1lbW9yeVJvdXRlciB9O1xuaW1wb3J0IF9Qcm9tcHQgZnJvbSBcIi4vUHJvbXB0XCI7XG5leHBvcnQgeyBfUHJvbXB0IGFzIFByb21wdCB9O1xuaW1wb3J0IF9SZWRpcmVjdCBmcm9tIFwiLi9SZWRpcmVjdFwiO1xuZXhwb3J0IHsgX1JlZGlyZWN0IGFzIFJlZGlyZWN0IH07XG5pbXBvcnQgX1JvdXRlIGZyb20gXCIuL1JvdXRlXCI7XG5leHBvcnQgeyBfUm91dGUgYXMgUm91dGUgfTtcbmltcG9ydCBfUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuZXhwb3J0IHsgX1JvdXRlciBhcyBSb3V0ZXIgfTtcbmltcG9ydCBfU3RhdGljUm91dGVyIGZyb20gXCIuL1N0YXRpY1JvdXRlclwiO1xuZXhwb3J0IHsgX1N0YXRpY1JvdXRlciBhcyBTdGF0aWNSb3V0ZXIgfTtcbmltcG9ydCBfU3dpdGNoIGZyb20gXCIuL1N3aXRjaFwiO1xuZXhwb3J0IHsgX1N3aXRjaCBhcyBTd2l0Y2ggfTtcbmltcG9ydCBfZ2VuZXJhdGVQYXRoIGZyb20gXCIuL2dlbmVyYXRlUGF0aFwiO1xuZXhwb3J0IHsgX2dlbmVyYXRlUGF0aCBhcyBnZW5lcmF0ZVBhdGggfTtcbmltcG9ydCBfbWF0Y2hQYXRoIGZyb20gXCIuL21hdGNoUGF0aFwiO1xuZXhwb3J0IHsgX21hdGNoUGF0aCBhcyBtYXRjaFBhdGggfTtcbmltcG9ydCBfd2l0aFJvdXRlciBmcm9tIFwiLi93aXRoUm91dGVyXCI7XG5leHBvcnQgeyBfd2l0aFJvdXRlciBhcyB3aXRoUm91dGVyIH07Il0sInNvdXJjZVJvb3QiOiIifQ==