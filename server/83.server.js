exports.ids = [83];
exports.modules = {

/***/ "./dev/js/components/diagnosis/booking/BookingView.js":
/*!************************************************************!*\
  !*** ./dev/js/components/diagnosis/booking/BookingView.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _testDetail = __webpack_require__(/*! ./testDetail */ "./dev/js/components/diagnosis/booking/testDetail/index.js");

var _testDetail2 = _interopRequireDefault(_testDetail);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _RatingProfileCard = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingProfileCard.js */ "./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js");

var _RatingProfileCard2 = _interopRequireDefault(_RatingProfileCard);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _cancelPopup = __webpack_require__(/*! ./cancelPopup.js */ "./dev/js/components/diagnosis/booking/cancelPopup.js");

var _cancelPopup2 = _interopRequireDefault(_cancelPopup);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _criteo = __webpack_require__(/*! ../../../helpers/criteo.js */ "./dev/js/helpers/criteo.js");

var _criteo2 = _interopRequireDefault(_criteo);

var _WhatsAppOptinView = __webpack_require__(/*! ../../commons/WhatsAppOptin/WhatsAppOptinView.js */ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js");

var _WhatsAppOptinView2 = _interopRequireDefault(_WhatsAppOptinView);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_MAP = {
    CREATED: 1,
    BOOKED: 2,
    RESCHEDULED_DOCTOR: 3,
    RESCHEDULED_PATIENT: 4,
    ACCEPTED: 5,
    CANCELED: 6,
    COMPLETED: 7
};

class BookingView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTestDetail: false,
            data: null,
            loading: true,
            showCancel: false,
            payment_success: this.props.location.search.includes('payment_success'),
            hide_button: this.props.location.search.includes('payment_success') || this.props.location.search.includes('hide_button')
        };
    }

    componentDidMount() {

        let appointmentId = this.props.match.params.refId;

        if (this.props.rescheduleSlot && this.props.rescheduleSlot.selectedTestsTimeSlot && Object.values(this.props.rescheduleSlot.selectedTestsTimeSlot).length) {
            //On reshedule this function calls , to update the appointment status
            /*let tests = []
            Object.values(this.props.rescheduleSlot.selectedTestsTimeSlot).map((twp)=>{
                     let type = 3
                    if(twp.type=="radiology"){
                        type = 1
                    }else if(twp.type == "pathology"){
                        type = 2
                    }
                     tests.push({test: twp.test_id,type:type, start_date: twp.date, start_time: twp.time.value, is_home_pickup: twp.is_home_pickup })
            })*/
            let selectedTime = Object.values(this.props.rescheduleSlot.selectedTestsTimeSlot)[0];
            let start_date = selectedTime.date;
            let start_time = selectedTime.time.value;
            let appointmentData = { id: this.props.match.params.refId, status: 4, start_date, start_time
                //multi_timings_enabled: true,

            };this.props.updateLabAppointment(appointmentData, (err, data) => {
                if (data) {
                    this.setState({ data: data.data, loading: false });

                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Appointment reschedule success." });
                } else {
                    this.props.getLabBookingSummary(this.props.match.params.refId, (err, data) => {
                        if (!err) {
                            this.setState({ data: data[0], loading: false });
                        } else {
                            this.setState({ data: null, loading: false });
                        }
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Appointment reschedule failed." });
                    });
                }

                this.props.selectLabTimeSLot({ time: {} }, true);
                this.props.getUpcomingAppointments();
            });
        } else {
            //get appoinment data 
            this.props.getLabBookingSummary(this.props.match.params.refId, (err, data) => {
                if (!err) {
                    this.setState({ data: data[0], loading: false });

                    let info = {};
                    info[appointmentId] = [];
                    let mrp = 0;
                    let deal_price = 0;
                    if (data.length && data[0].lab_test) {
                        data[0].lab_test.map(test => {
                            mrp += parseInt(test.mrp);
                            deal_price += parseInt(test.deal_price);
                        });
                    }
                    info[appointmentId].push({ 'booking_id': appointmentId, 'mrp': mrp, 'deal_price': deal_price });
                    info = JSON.stringify(info);
                    let is_gold_user = false;
                    if (data && data.length && data[0].gold && Object.keys(data[0].gold).length) {
                        is_gold_user = data[0].gold.is_gold;
                    }
                    _storage2.default.setAppointmentDetails(info).then(setCookie => {

                        if (this.state.payment_success) {

                            let analyticData = {
                                'Category': 'ConsumerApp', 'Action': 'LabAppointmentBooked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': appointmentId, 'event': 'lab-appointment-booked'
                            };

                            _gtm2.default.sendEvent({ data: analyticData }, true, false);

                            if (is_gold_user) {
                                let vipBookedData = {
                                    'Category': 'ConsumerApp', 'Action': 'vipbooked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vipbooked', 'user_id': _gtm2.default.getUserId(), 'is_single_flow': true
                                };
                                _gtm2.default.sendEvent({ data: vipBookedData });
                            }

                            let criteo_data = {
                                'event': "trackTransaction", 'id': appointmentId, 'item': [{ 'id': "1", 'price': data.length ? data[0].deal_price : '', 'quantity': 1 }]
                            };

                            _criteo2.default.sendData(criteo_data);

                            this.props.history.replace(this.props.location.pathname + "?hide_button=true");
                            this.props.setCorporateCoupon(null);
                        }
                    });
                } else {
                    this.setState({ data: null, loading: false });
                }
            });
        }

        if (window) {
            window.scrollTo(0, 0);
        }
    }

    cancelAppointment(cancelData) {
        this.setState({ loading: true, showCancel: false });
        let data;
        if (cancelData.cancelStatus) {

            data = {
                'Category': 'ConsumerApp', 'Action': 'CancelLabAppointmentAndRefund', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'cancel-lab-appointment-Refund', 'appointmentId': this.state.data.id
            };
        } else {

            data = {
                'Category': 'ConsumerApp', 'Action': 'CancelLabAppointmentAndBookNew', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'cancel-lab-appointment-Book-New', 'appointmentId': this.state.data.id
            };
        }

        _gtm2.default.sendEvent({ data: data });

        let appointmentData = { id: this.state.data.id, status: 6, refund: cancelData.cancelStatus, cancellation_comment: cancelData.cancelText, cancellation_reason: cancelData.cancelId };

        this.props.updateLabAppointment(appointmentData, (err, data) => {
            if (data) {
                this.setState({ data: data, loading: false, showCancel: false });
            } else {
                this.setState({ loading: false, showCancel: false });
            }
        });
    }

    toggleCancel(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ showCancel: !this.state.showCancel });
    }

    toogleTestDetails() {
        this.setState({ showTestDetail: !this.state.showTestDetail });
    }

    goToSlotSelector(e) {
        e.preventDefault();
        e.stopPropagation();
        let test_ids = [];
        let p_pickup = 'home';
        let r_pickup = 'lab';
        //if(this.state.selected_timings_type){}
        let test_type = 0;
        if (this.state.data.lab_test) {
            this.state.data.lab_test.map(test => {
                test_ids.push(test.test_id);
                test_type = test.test_type;
            });
        }
        this.props.selectLabTimeSLot({ time: {} }, true);
        let selected_timings_type = this.state.data && this.state.data.selected_timings_type == 'separate' ? 'seperately' : 'all';

        if (this.state.data) {
            if (this.state.data.is_home_pickup) {
                if (test_type == 2) {
                    p_pickup = 'home';
                    r_pickup = 'lab';
                } else if (test_type == 1) {
                    r_pickup = 'home';
                    p_pickup = 'lab';
                }
            } else {
                if (test_type == 2) {
                    p_pickup = 'lab';
                    r_pickup = 'lab';
                } else if (test_type == 1) {
                    r_pickup = 'lab';
                    p_pickup = 'lab';
                }
            }
        }

        if (this.state.data.lab && this.state.data.lab.is_thyrocare) {
            this.props.history.push(`/lab/${this.state.data.lab.id}/timeslots?reschedule=true&type=${this.state.data.is_home_pickup ? 'home' : 'lab'}&is_thyrocare=true&test_ids=${test_ids}&r_pickup=${r_pickup}&p_pickup=${p_pickup}`);
        } else {
            this.props.history.push(`/lab/${this.state.data.lab.id}/timeslots?reschedule=true&type=${this.state.data.is_home_pickup ? 'home' : 'lab'}&is_thyrocare=false&test_ids=${test_ids}&r_pickup=${r_pickup}&p_pickup=${p_pickup}`);
        }
    }

    navigateTo(where, e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.history.push(where);
    }

    goToBookingPage() {
        let analyticData = {
            'Category': 'ConsumerApp', 'Action': 'RebookLabAppointmentClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': '', 'event': 'rebook-lab-appointment-clicked'
        };
        _gtm2.default.sendEvent({ data: analyticData });
        let criteria = {};
        let extraParams = {
            forceAddTestids: true,
            labId: this.state.data.lab.id,
            tests: this.state.data.lab_test
        };
        this.props.toggleDiagnosisCriteria('test', criteria, true, extraParams);
        this.props.history.push(`/lab/${this.state.data.lab.id}/book`);
    }

    navigateToSBI() {
        window.open('http://13.235.199.36/webcore/docprimecallback', '_blank');
    }

    render() {
        let profile = {};
        let lab_test = [];
        let lab = {};
        let date = new Date();
        let actions = [];
        let status = 1;
        let lab_thumbnail = "";
        let reports = [];
        let is_thyrocare = null;
        let payment_type;
        let mrp = '';
        let deal_price = '';
        let discount = '';
        let effective_price = '';
        let paymentMode = '';

        if (this.state.data) {
            lab = this.state.data.lab;
            lab_test = this.state.data.lab_test;
            profile = this.state.data.profile;
            date = this.state.data.time_slot_start ? new Date(this.state.data.time_slot_start) : new Date();
            actions = this.state.data.allowed_action || [];
            status = this.state.data.status;
            lab_thumbnail = this.state.data.lab_thumbnail;
            reports = this.state.data.reports || [];
            is_thyrocare = this.state.data.lab ? this.state.data.lab.is_thyrocare : null;
            payment_type = this.state.data.payment_type;
            mrp = this.state.data.price;
            deal_price = this.state.data.deal_price;
            effective_price = this.state.data.effective_price;
        }
        let summar_utm_tag = "";
        if (this.state.data && this.props.summary_utm && this.props.summary_utm_validity) {
            if (new Date(this.props.summary_utm_validity) > new Date()) {
                let src = `https://cplcps.com/p.ashx?o=116216&e=4531&f=img&t=${this.state.data.id}`;
                summar_utm_tag = _react2.default.createElement('img', { src: src, width: '1', height: '1', border: '0' });
            }
        }

        if (payment_type == 2) {
            discount = mrp - deal_price;
        } else {
            discount = mrp - effective_price;
        }

        if (payment_type == 1) {
            paymentMode = 'Online';
        } else if (payment_type == 2) {
            paymentMode = 'Cash';
        } else if (payment_type == 3) {
            paymentMode = 'Insurance';
        } else if (payment_type == 4) {
            paymentMode = 'Docprime Care';
        }

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            summar_utm_tag,
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
                        !this.state.loading && this.state.data ? _react2.default.createElement(
                            'section',
                            { className: 'booking-confirm-screen' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid' },
                                _react2.default.createElement(_WhatsAppOptinView2.default, _extends({}, this.props, { profiles: profile, isAppointment: true })),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'app-timeline book-confirmed-timeline' },
                                            status == 6 ? _react2.default.createElement(
                                                'h4',
                                                { style: { textAlign: 'center' } },
                                                'Appointment Cancelled'
                                            ) : status == 1 ? _react2.default.createElement(
                                                'h4',
                                                { style: { textAlign: 'center' } },
                                                'Appointment Created'
                                            ) : _react2.default.createElement(
                                                'ul',
                                                { className: 'inline-list' },
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: status <= 5 || status == 7 ? "active" : "" },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'dot' },
                                                        '1'
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'text-sm fw-700 text-light' },
                                                        'Received'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: status == 5 || status == 7 ? "active" : "" },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'dot' },
                                                        '2'
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'text-sm fw-700 text-light' },
                                                        'Confirmed'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    { className: status == 7 ? "active" : "" },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'dot' },
                                                        '3'
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'text-sm fw-700 text-light' },
                                                        status == 6 ? "Completed" : "Completed"
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        this.state.data.is_rated == false && this.state.data.status == 7 ? _react2.default.createElement(_RatingProfileCard2.default, _extends({}, this.props, { booking_flag: true, details: this.state.data })) : "",
                                        this.state.data.otp && status == 5 ? _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrb-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'fw-500 text-md mrb-10' },
                                                    'Unique Confirmation Code: ',
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'fw-700 text-md' },
                                                        this.state.data.otp
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'text-xs text-light' },
                                                    'Share this code with lab at the time of your appointment'
                                                )
                                            )
                                        ) : "",
                                        this.state.payment_success ? _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrb-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'fw-500 text-md mrb-10' },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'fw-700 text-md' },
                                                        'Thanks! Appointment Received'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'text-xs text-light' },
                                                    'We are waiting for the confirmation from the lab and we will get back to you shortly.'
                                                )
                                            )
                                        ) : "",
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrb-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'fw-500 text-md mrb-10' },
                                                    'Booking ID: ',
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'fw-700 text-md' },
                                                        this.state.data.id
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'text-xs text-light' },
                                                    'Details have been sent to your email-id and mobile number.'
                                                ),
                                                actions.indexOf(6) > -1 && !this.state.hide_button && !is_thyrocare ? _react2.default.createElement(
                                                    'a',
                                                    { onClick: this.toggleCancel.bind(this), href: '#', className: 'text-primary fw-700 text-sm' },
                                                    'Cancel Booking'
                                                ) : ""
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget  mrb-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content pb-details pb-location' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    { className: 'wc-title text-md fw-700' },
                                                    lab.name
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'address-details clearfix' },
                                                    _react2.default.createElement(
                                                        _initialsPicture2.default,
                                                        { name: lab.name, has_image: !!lab_thumbnail, className: 'initialsPicture-ls', style: { float: 'right' }, onClick: this.navigateTo.bind(this, `/lab/${lab.id}`) },
                                                        _react2.default.createElement('img', { className: 'fltr-usr-image-lab', style: { float: 'right', cursor: 'pointer' }, src: lab_thumbnail })
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'add-info fw-500' },
                                                        lab.address
                                                    )
                                                ),
                                                status == 6 || status == 7 ? _react2.default.createElement(
                                                    'button',
                                                    { className: 'rebook-btn', onClick: this.goToBookingPage.bind(this) },
                                                    'Rebook Appointment'
                                                ) : ''
                                            )
                                        ),
                                        is_thyrocare ? _react2.default.createElement(
                                            'div',
                                            { className: 'thyroCallContainer' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'thyroContent' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    { className: 'wc-title text-md fw-700' },
                                                    'Reschedule Appointment?'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'If you want to reschedule or cancel appointment, contact us at  ',
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: 'tel:18001239419' },
                                                        '1800 123 9419'
                                                    )
                                                )
                                            )
                                        ) : '',
                                        this.state.data.is_home_pickup ? _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrt-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content mrb-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'test-report' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'title' },
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            _react2.default.createElement('img', { className: 'visit-time-icon', src: "/assets" + "/img/icons/home-orange.svg", style: {
                                                                    width: 18, marginRight: 5, verticalAlign: -3
                                                                } })
                                                        ),
                                                        'Sample Pickup Address'
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'test-list fw-500', style: { width: '100%', wordWrap: 'break-word' } },
                                                        this.state.data.address
                                                    )
                                                )
                                            )
                                        ) : "",
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrb-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content' },
                                                _react2.default.createElement(
                                                    'div',
                                                    null,
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'title' },
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/clock.svg", className: 'visit-time-icon' })
                                                        ),
                                                        'Visit Time',
                                                        !is_thyrocare && actions.indexOf(4) > -1 /* && (new Date(date).getTime() > new Date().getTime()) */ ? _react2.default.createElement(
                                                            'span',
                                                            { onClick: this.goToSlotSelector.bind(this), className: 'float-right' },
                                                            _react2.default.createElement(
                                                                'a',
                                                                { href: '#', className: 'text-primary fw-700 text-sm' },
                                                                'Reschedule Time'
                                                            )
                                                        ) : ""
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'date-time test-list fw-500' },
                                                        new Date(date).toDateString(),
                                                        ' | ',
                                                        new Date(date).toLocaleTimeString()
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrt-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'test-report' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'title' },
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/test.svg", className: 'visit-time-icon' })
                                                        ),
                                                        'Tests ',
                                                        _react2.default.createElement('span', { className: 'float-right' })
                                                    ),
                                                    lab_test.map((test, i) => {
                                                        return _react2.default.createElement(
                                                            'p',
                                                            { key: i, className: 'test-list fw-500' },
                                                            test.test.name
                                                        );
                                                    })
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrt-10 mrb-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'test-report' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'title' },
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            _react2.default.createElement('img', { className: 'visit-time-icon', src: "/assets" + "/img/icons/user.svg", style: {
                                                                    width: 14, marginRight: 5, verticalAlign: -3
                                                                } })
                                                        ),
                                                        'Patient Details'
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'test-list fw-500' },
                                                        profile.name
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'test-list fw-500' },
                                                        profile.phone_number
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'test-list fw-500' },
                                                        profile.email
                                                    )
                                                )
                                            )
                                        ),
                                        status !== 6 ? _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrb-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'test-report' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'title' },
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            _react2.default.createElement('img', { className: 'visit-time-icon', src: "/assets" + "/img/rupeeicon.png", style: {
                                                                    width: 16, marginRight: 5, verticalAlign: -3
                                                                } })
                                                        ),
                                                        'Payment Detail'
                                                    ),
                                                    payment_type == 3 ? '' : _react2.default.createElement(
                                                        'div',
                                                        { className: 'd-flex justify-content-between align-items-center mrb-10' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500', style: { color: '#757575', paddingTop: 4 } },
                                                            'MRP'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500' },
                                                            '\u20B9 ',
                                                            parseInt(mrp)
                                                        )
                                                    ),
                                                    discount && payment_type != 3 ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'd-flex justify-content-between align-items-center mrb-10' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500', style: { color: 'green' } },
                                                            'Docprime Discount'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500', style: { color: 'green' } },
                                                            '- \u20B9 ',
                                                            parseInt(discount)
                                                        )
                                                    ) : '',
                                                    payment_type == 3 ? '' : _react2.default.createElement('hr', { style: { boxSizing: 'border-box', margin: '0 -12px 10px -12px', backgroundColor: '#eeeeee' } }),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'd-flex justify-content-between align-items-center mrb-10' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500' },
                                                            'Amount Payable'
                                                        ),
                                                        payment_type == 2 ? _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500' },
                                                            '\u20B9 ',
                                                            parseInt(deal_price)
                                                        ) : _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500' },
                                                            '\u20B9 ',
                                                            parseInt(effective_price)
                                                        )
                                                    ),
                                                    paymentMode ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'd-flex justify-content-between align-items-center' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500' },
                                                            'Payment Mode'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500' },
                                                            paymentMode
                                                        )
                                                    ) : ''
                                                )
                                            )
                                        ) : '',
                                        status <= 5 ? _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrb-10', style: { marginTop: 10 } },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'my-profile-item', style: { cursor: 'auto' }, onClick: () => {
                                                            this.props.history.push('/referral');
                                                        } },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'usr-dtls-off-act' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'wc-title text-md fw-700 card-nm-ovrlpng' },
                                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/refer.svg", className: 'img-fluid  img-f-1' }),
                                                            'Refer & Earn'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'ofr-img-txt' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'box-img-cont' },
                                                            _react2.default.createElement('img', { src: "/assets" + "/img/step-2.png", className: 'img-fluid' })
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'ofr-contnt' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'add-info fw-500 add-info-p' },
                                                                'Invite your friends on docprime.com and earn ',
                                                                _react2.default.createElement(
                                                                    'b',
                                                                    { className: 'fw-500 drk-blk' },
                                                                    _react2.default.createElement('img', { style: { width: '8px', marginTop: '4px', marginRight: '0px' }, src: "/assets" + "/img/rupee-icon.svg" }),
                                                                    ' 200'
                                                                ),
                                                                ' on completion of their first order '
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'mrt-20', style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        { className: 'text-xs fw-500', style: { color: `var(--text--dark--all)`, cursor: 'pointer' } },
                                                                        'Know more'
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ) : ""
                                    )
                                )
                            ),
                            reports && reports.length ? _react2.default.createElement(
                                'button',
                                { onClick: () => {
                                        this.props.history.push(`/user/lab/reports/${this.state.data.id}`);
                                    }, className: 'viewpresbtn' },
                                'View Reports'
                            ) : "",
                            this.state.data && this.state.data.appointment_via_sbi ? _react2.default.createElement(
                                'div',
                                { className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container ' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'v-btn-primary book-btn-mrgn-adjust ', onClick: () => {
                                            this.navigateToSBI();
                                        } },
                                    'Go Back To SBIG Home'
                                )
                            ) : ''
                        ) : _react2.default.createElement(_Loader2.default, null),
                        _react2.default.createElement(_testDetail2.default, { show: this.state.showTestDetail, toggle: this.toogleTestDetails.bind(this), lab_test: lab_test }),
                        this.state.showCancel ? _react2.default.createElement(_cancelPopup2.default, { toggle: this.toggleCancel.bind(this), cancelAppointment: this.cancelAppointment.bind(this), comments: this.state.data && this.state.data.cancellation_reason ? this.state.data.cancellation_reason : [], showCommentReasons: payment_type == 3 || payment_type == 2 ? true : false }) : ""
                    ),
                    _react2.default.createElement(_RightBar2.default, null)
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, null)
        );
    }
}

exports.default = BookingView;

/***/ }),

/***/ "./dev/js/components/diagnosis/booking/cancelPopup.js":
/*!************************************************************!*\
  !*** ./dev/js/components/diagnosis/booking/cancelPopup.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CancelPopUp extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCommentReasons: this.props.showCommentReasons,
            selectedCancelReasonId: '',
            cancelText: '',
            cancelStatus: ''
        };
    }

    submitClicked(e) {
        let otherReason = this.props.comments.filter(x => x.id == this.state.selectedCancelReasonId);

        if (!this.state.selectedCancelReasonId) {
            e.stopPropagation();
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select valid reason" });
            }, 200);
            return;
        } else if (otherReason.length && otherReason[0].is_comment_needed && !this.state.cancelText) {
            e.stopPropagation();
            setTimeout(() => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please enter comment" });
            }, 200);
            return;
        } else {

            if (otherReason.length && otherReason[0].is_comment_needed) {
                otherReason = this.state.cancelText;
            } else {
                otherReason = '';
            }

            let cancelData = {
                cancelText: otherReason,
                cancelId: this.state.selectedCancelReasonId,
                cancelStatus: this.state.cancelStatus
            };
            this.props.cancelAppointment(cancelData);
        }
    }

    handleInputHandler(e) {
        this.setState({ cancelText: e.target.value });
    }

    render() {

        let otherType = this.props.comments.filter(x => x.id == this.state.selectedCancelReasonId);
        if (otherType.length && otherType[0].is_comment_needed) {
            otherType = true;
        } else {
            otherType = false;
        }

        return _react2.default.createElement(
            'div',
            null,
            this.state.showCommentReasons ? _react2.default.createElement(
                'div',
                { className: 'cancelPopupContainerOverlay', onClick: e => this.props.toggle(e) },
                _react2.default.createElement(
                    'div',
                    { className: 'cancelPopupContainer' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cancel-Heading' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            'Reason for Cancellation'
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'cn-btn-head' },
                            _react2.default.createElement('img', { style: { width: 10 }, src: "/assets" + "/img/customer-icons/close-black.svg", className: 'img-fluid' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'cancel-wid-radio' },
                        this.props.comments.map((reasons, key) => {
                            return _react2.default.createElement(
                                'div',
                                { key: reasons.id, className: 'dtl-radio', onClick: e => {
                                        e.stopPropagation();
                                        this.setState({ selectedCancelReasonId: reasons.id });
                                    } },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'container-radio' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'fw-500', style: { display: 'inline', fontSize: 'inherit' } },
                                        reasons.name
                                    ),
                                    _react2.default.createElement('input', { type: 'radio', name: 'radio', checked: this.state.selectedCancelReasonId == reasons.id }),
                                    _react2.default.createElement('span', { className: 'doc-checkmark' })
                                )
                            );
                        })
                    ),
                    otherType ? _react2.default.createElement(
                        'div',
                        { className: 'cancelationReson' },
                        _react2.default.createElement('textarea', { placeholder: 'Write reason for cancellation', onChange: this.handleInputHandler.bind(this), onClick: e => {
                                e.stopPropagation();
                            }, value: this.state.cancelText })
                    ) : '',
                    _react2.default.createElement(
                        'div',
                        { className: 'cancelationBtn' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submitClicked.bind(this) },
                            'Submit'
                        )
                    )
                )
            ) : _react2.default.createElement(
                'div',
                { className: 'cancelPopupContainerOverlay', onClick: e => this.props.toggle(e) },
                _react2.default.createElement(
                    'div',
                    { className: 'cancelPopupContainer' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cancel-Heading' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            'Cancel Appointment'
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'cn-btn-head' },
                            _react2.default.createElement('img', { style: { width: 10 }, src: "/assets" + "/img/customer-icons/close-black.svg", className: 'img-fluid' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'cnct-select-cont' },
                        _react2.default.createElement(
                            'ul',
                            null,
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'button',
                                    { onClick: e => {
                                            e.stopPropagation();
                                            this.setState({ showCommentReasons: true, cancelStatus: 0 });
                                        } },
                                    'Cancel and Rebook'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'button',
                                    { onClick: e => {
                                            e.stopPropagation();
                                            this.setState({ showCommentReasons: true, cancelStatus: 1 });
                                        } },
                                    'Cancel and Refund'
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}

{/*
           <div className="widget cancel-appointment-div">
               <div className="widget-header text-center">
                   <p className="fw-500 cancel-appointment-head">Cancel Appointment</p>
                   <hr />
               </div>
               <a href="javascript:;">
                   <div className="widget-content cancel-content-div" onClick={() => {
                       cancelAppointment(0)
                   }}>
                       <p className="fw-500 cancel-appointment-head">Cancel and Rebook</p>
                       <p className="fw-500 cancel-content">Cancel the current appointment and book a new Appointment with other doctor</p>
                       <div className="cancel-right-arrow">
                           <img src={ASSETS_BASE_URL + "/img/customer-icons/arrow-forward-right.svg"} />
                       </div>
                   </div>
               </a>
               <hr />
               <a href="javascript:;">
                   <div className="widget-content cancel-content-div" onClick={() => {
                       cancelAppointment(1)
                   }}>
                       <p className="fw-500 cancel-appointment-head">Cancel and Refund</p>
                       <p className="fw-500 cancel-content">Cancel the appointment and get refund within 24 hours</p>
                       <div className="cancel-right-arrow">
                           <img src={ASSETS_BASE_URL + "/img/customer-icons/arrow-forward-right.svg"} />
                       </div>
                   </div>
               </a>
               <hr />
           </div>*/}
exports.default = CancelPopUp;

/***/ }),

/***/ "./dev/js/components/diagnosis/booking/testDetail/TestDetail.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/diagnosis/booking/testDetail/TestDetail.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TestDetail extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(
            "div",
            null,
            this.props.show ? _react2.default.createElement(
                "div",
                { className: "overlay black", onClick: e => {
                        this.props.toggle();
                    } },
                _react2.default.createElement(
                    "div",
                    { className: "widget filter-popup scroll-y ht-500 info-popup", onClick: e => {
                            e.preventDefault();
                            e.stopPropagation();
                        } },
                    _react2.default.createElement(
                        "div",
                        { className: "widget-header text-center" },
                        _react2.default.createElement(
                            "h4",
                            { className: "widget-title text-md fw-700" },
                            "Test Information"
                        ),
                        _react2.default.createElement(
                            "span",
                            { className: "close" },
                            _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/close-black.svg", className: "img-fluid" })
                        )
                    ),
                    this.props.lab_test.map((test, i) => {
                        return _react2.default.createElement(
                            "div",
                            { className: "widget-content", key: i },
                            _react2.default.createElement(
                                "h3",
                                { className: "text-lg fw-700 mrb-10" },
                                test.test.name
                            ),
                            _react2.default.createElement(
                                "h4",
                                { className: "fw-700 text-md mrb-10" },
                                "Description"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "text-sm" },
                                test.test.why
                            )
                        );
                    })
                )
            ) : ""
        );
    }
}

exports.default = TestDetail;

/***/ }),

/***/ "./dev/js/components/diagnosis/booking/testDetail/index.js":
/*!*****************************************************************!*\
  !*** ./dev/js/components/diagnosis/booking/testDetail/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TestDetail = __webpack_require__(/*! ./TestDetail */ "./dev/js/components/diagnosis/booking/testDetail/TestDetail.js");

var _TestDetail2 = _interopRequireDefault(_TestDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TestDetail2.default;

/***/ }),

/***/ "./dev/js/containers/diagnosis/Booking.js":
/*!************************************************!*\
  !*** ./dev/js/containers/diagnosis/Booking.js ***!
  \************************************************/
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

var _BookingView = __webpack_require__(/*! ../../components/diagnosis/booking/BookingView.js */ "./dev/js/components/diagnosis/booking/BookingView.js");

var _BookingView2 = _interopRequireDefault(_BookingView);

var _fcm = __webpack_require__(/*! ../../helpers/fcm */ "./dev/js/helpers/fcm.js");

var _fcm2 = _interopRequireDefault(_fcm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Booking extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (_storage2.default.checkAuth()) {
            this.props.getCartItems();
        }
        this.props.resetPkgCompare();
        _fcm2.default.getPermission();
    }

    render() {

        return _react2.default.createElement(_BookingView2.default, this.props);
    }
}

const mapStateToProps = state => {
    let { rescheduleSlot } = state.LAB_SEARCH;

    let {
        summary_utm, summary_utm_validity, newNotification, notifications, rated_appoinments, profiles, selectedProfile
    } = state.USER;

    return {
        rescheduleSlot, newNotification, notifications, rated_appoinments, profiles, selectedProfile, summary_utm, summary_utm_validity
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUpcomingAppointments: () => dispatch((0, _index.getUpcomingAppointments)()),
        getLabBookingSummary: (appointmentID, callback) => dispatch((0, _index.getLabBookingSummary)(appointmentID, callback)),
        updateLabAppointment: (appointmentData, callback) => dispatch((0, _index.updateLabAppointment)(appointmentData, callback)),
        selectLabTimeSLot: (slot, reschedule) => dispatch((0, _index.selectLabTimeSLot)(slot, reschedule)),
        retryPaymentLAB: (appointmentId, callback) => dispatch((0, _index.retryPaymentLAB)(appointmentId, callback)),
        getRatingCompliments: callback => dispatch((0, _index.getRatingCompliments)(callback)),
        createAppointmentRating: (appointmentData, callback) => dispatch((0, _index.createAppointmentRating)(appointmentData, callback)),
        updateAppointmentRating: (ratingData, callback) => dispatch((0, _index.updateAppointmentRating)(ratingData, callback)),
        closeAppointmentPopUp: (id, callback) => dispatch((0, _index.closeAppointmentPopUp)(id, callback)),
        setCorporateCoupon: coupon => dispatch((0, _index.setCorporateCoupon)(coupon)),
        getCartItems: () => dispatch((0, _index.getCartItems)()),
        editUserProfile: (profileData, profileId, cb) => dispatch((0, _index.editUserProfile)(profileData, profileId, cb)),
        resetPkgCompare: () => dispatch((0, _index.resetPkgCompare)()),
        clearVipSelectedPlan: () => dispatch((0, _index.clearVipSelectedPlan)()),
        toggleDiagnosisCriteria: (type, test, forceAdd, filters) => dispatch((0, _index.toggleDiagnosisCriteria)(type, test, forceAdd, filters))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Booking);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZy9Cb29raW5nVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZy9jYW5jZWxQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZy90ZXN0RGV0YWlsL1Rlc3REZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2Jvb2tpbmcvdGVzdERldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvQm9va2luZy5qcyJdLCJuYW1lcyI6WyJTVEFUVVNfTUFQIiwiQ1JFQVRFRCIsIkJPT0tFRCIsIlJFU0NIRURVTEVEX0RPQ1RPUiIsIlJFU0NIRURVTEVEX1BBVElFTlQiLCJBQ0NFUFRFRCIsIkNBTkNFTEVEIiwiQ09NUExFVEVEIiwiQm9va2luZ1ZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNob3dUZXN0RGV0YWlsIiwiZGF0YSIsImxvYWRpbmciLCJzaG93Q2FuY2VsIiwicGF5bWVudF9zdWNjZXNzIiwibG9jYXRpb24iLCJzZWFyY2giLCJpbmNsdWRlcyIsImhpZGVfYnV0dG9uIiwiY29tcG9uZW50RGlkTW91bnQiLCJhcHBvaW50bWVudElkIiwibWF0Y2giLCJwYXJhbXMiLCJyZWZJZCIsInJlc2NoZWR1bGVTbG90Iiwic2VsZWN0ZWRUZXN0c1RpbWVTbG90IiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwic2VsZWN0ZWRUaW1lIiwic3RhcnRfZGF0ZSIsImRhdGUiLCJzdGFydF90aW1lIiwidGltZSIsInZhbHVlIiwiYXBwb2ludG1lbnREYXRhIiwiaWQiLCJzdGF0dXMiLCJ1cGRhdGVMYWJBcHBvaW50bWVudCIsImVyciIsInNldFN0YXRlIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImdldExhYkJvb2tpbmdTdW1tYXJ5Iiwic2VsZWN0TGFiVGltZVNMb3QiLCJnZXRVcGNvbWluZ0FwcG9pbnRtZW50cyIsImluZm8iLCJtcnAiLCJkZWFsX3ByaWNlIiwibGFiX3Rlc3QiLCJtYXAiLCJ0ZXN0IiwicGFyc2VJbnQiLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsImlzX2dvbGRfdXNlciIsImdvbGQiLCJrZXlzIiwiaXNfZ29sZCIsIlNUT1JBR0UiLCJzZXRBcHBvaW50bWVudERldGFpbHMiLCJ0aGVuIiwic2V0Q29va2llIiwiYW5hbHl0aWNEYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwidmlwQm9va2VkRGF0YSIsImNyaXRlb19kYXRhIiwiQ1JJVEVPIiwic2VuZERhdGEiLCJoaXN0b3J5IiwicmVwbGFjZSIsInBhdGhuYW1lIiwic2V0Q29ycG9yYXRlQ291cG9uIiwid2luZG93Iiwic2Nyb2xsVG8iLCJjYW5jZWxBcHBvaW50bWVudCIsImNhbmNlbERhdGEiLCJjYW5jZWxTdGF0dXMiLCJyZWZ1bmQiLCJjYW5jZWxsYXRpb25fY29tbWVudCIsImNhbmNlbFRleHQiLCJjYW5jZWxsYXRpb25fcmVhc29uIiwiY2FuY2VsSWQiLCJ0b2dnbGVDYW5jZWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b29nbGVUZXN0RGV0YWlscyIsImdvVG9TbG90U2VsZWN0b3IiLCJ0ZXN0X2lkcyIsInBfcGlja3VwIiwicl9waWNrdXAiLCJ0ZXN0X3R5cGUiLCJ0ZXN0X2lkIiwic2VsZWN0ZWRfdGltaW5nc190eXBlIiwiaXNfaG9tZV9waWNrdXAiLCJsYWIiLCJpc190aHlyb2NhcmUiLCJuYXZpZ2F0ZVRvIiwid2hlcmUiLCJnb1RvQm9va2luZ1BhZ2UiLCJjcml0ZXJpYSIsImV4dHJhUGFyYW1zIiwiZm9yY2VBZGRUZXN0aWRzIiwibGFiSWQiLCJ0ZXN0cyIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwibmF2aWdhdGVUb1NCSSIsIm9wZW4iLCJyZW5kZXIiLCJwcm9maWxlIiwiRGF0ZSIsImFjdGlvbnMiLCJsYWJfdGh1bWJuYWlsIiwicmVwb3J0cyIsInBheW1lbnRfdHlwZSIsImRpc2NvdW50IiwiZWZmZWN0aXZlX3ByaWNlIiwicGF5bWVudE1vZGUiLCJ0aW1lX3Nsb3Rfc3RhcnQiLCJhbGxvd2VkX2FjdGlvbiIsInByaWNlIiwic3VtbWFyX3V0bV90YWciLCJzdW1tYXJ5X3V0bSIsInN1bW1hcnlfdXRtX3ZhbGlkaXR5Iiwic3JjIiwidGV4dEFsaWduIiwiaXNfcmF0ZWQiLCJvdHAiLCJpbmRleE9mIiwiYmluZCIsIm5hbWUiLCJmbG9hdCIsImN1cnNvciIsImFkZHJlc3MiLCJBU1NFVFNfQkFTRV9VUkwiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwidmVydGljYWxBbGlnbiIsIndvcmRXcmFwIiwidG9EYXRlU3RyaW5nIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaSIsInBob25lX251bWJlciIsImVtYWlsIiwiY29sb3IiLCJwYWRkaW5nVG9wIiwiYm94U2l6aW5nIiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImFwcG9pbnRtZW50X3ZpYV9zYmkiLCJDYW5jZWxQb3BVcCIsInNob3dDb21tZW50UmVhc29ucyIsInNlbGVjdGVkQ2FuY2VsUmVhc29uSWQiLCJzdWJtaXRDbGlja2VkIiwib3RoZXJSZWFzb24iLCJjb21tZW50cyIsImZpbHRlciIsIngiLCJzZXRUaW1lb3V0IiwiaXNfY29tbWVudF9uZWVkZWQiLCJoYW5kbGVJbnB1dEhhbmRsZXIiLCJ0YXJnZXQiLCJvdGhlclR5cGUiLCJ0b2dnbGUiLCJyZWFzb25zIiwia2V5IiwiZm9udFNpemUiLCJUZXN0RGV0YWlsIiwid2h5IiwiQm9va2luZyIsImNoZWNrQXV0aCIsImdldENhcnRJdGVtcyIsInJlc2V0UGtnQ29tcGFyZSIsIkZDTSIsImdldFBlcm1pc3Npb24iLCJtYXBTdGF0ZVRvUHJvcHMiLCJMQUJfU0VBUkNIIiwibmV3Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9ucyIsInJhdGVkX2FwcG9pbm1lbnRzIiwicHJvZmlsZXMiLCJzZWxlY3RlZFByb2ZpbGUiLCJVU0VSIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhcHBvaW50bWVudElEIiwiY2FsbGJhY2siLCJzbG90IiwicmVzY2hlZHVsZSIsInJldHJ5UGF5bWVudExBQiIsImdldFJhdGluZ0NvbXBsaW1lbnRzIiwiY3JlYXRlQXBwb2ludG1lbnRSYXRpbmciLCJ1cGRhdGVBcHBvaW50bWVudFJhdGluZyIsInJhdGluZ0RhdGEiLCJjbG9zZUFwcG9pbnRtZW50UG9wVXAiLCJjb3Vwb24iLCJlZGl0VXNlclByb2ZpbGUiLCJwcm9maWxlRGF0YSIsInByb2ZpbGVJZCIsImNiIiwiY2xlYXJWaXBTZWxlY3RlZFBsYW4iLCJ0eXBlIiwiZm9yY2VBZGQiLCJmaWx0ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxhQUFhO0FBQ2ZDLGFBQVMsQ0FETTtBQUVmQyxZQUFRLENBRk87QUFHZkMsd0JBQW9CLENBSEw7QUFJZkMseUJBQXFCLENBSk47QUFLZkMsY0FBVSxDQUxLO0FBTWZDLGNBQVUsQ0FOSztBQU9mQyxlQUFXO0FBUEksQ0FBbkI7O0FBV0EsTUFBTUMsV0FBTixTQUEwQkMsZ0JBQU1DLFNBQWhDLENBQTBDO0FBQ3RDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsNEJBQWdCLEtBRFA7QUFFVEMsa0JBQU0sSUFG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Z0JhLFdBQWhCLEVBQTZCQyxTQUE3QixFQUF3Q0MsRUFBeEMsQ0FBVCxDQVo5QztBQWFIM0IseUJBQWlCLE1BQU1ZLFNBQVMsNkJBQVQsQ0FicEI7QUFjSGdCLDhCQUFxQixNQUFLaEIsU0FBUyxrQ0FBVCxDQWR2QjtBQWVIbkYsaUNBQXlCLENBQUNvRyxJQUFELEVBQU85SixJQUFQLEVBQWErSixRQUFiLEVBQXVCQyxPQUF2QixLQUFtQ25CLFNBQVMsb0NBQXdCaUIsSUFBeEIsRUFBOEI5SixJQUE5QixFQUFvQytKLFFBQXBDLEVBQThDQyxPQUE5QyxDQUFUO0FBZnpELEtBQVA7QUFpQkgsQ0FsQkQ7O2tCQXFCZSx5QkFBUTVCLGVBQVIsRUFBeUJRLGtCQUF6QixFQUE2Q2QsT0FBN0MsQyIsImZpbGUiOiI4My5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5pbXBvcnQgVGVzdERldGFpbCBmcm9tICcuL3Rlc3REZXRhaWwnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IFJhdGluZ1Byb2ZpbGVDYXJkIGZyb20gJy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ1Byb2ZpbGVDYXJkLmpzJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENhbmNlbFBvcHVwIGZyb20gJy4vY2FuY2VsUG9wdXAuanMnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IENSSVRFTyBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2NyaXRlby5qcydcbmltcG9ydCBXaGF0c0FwcE9wdGluVmlldyBmcm9tICcuLi8uLi9jb21tb25zL1doYXRzQXBwT3B0aW4vV2hhdHNBcHBPcHRpblZpZXcuanMnXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY29uc3QgU1RBVFVTX01BUCA9IHtcbiAgICBDUkVBVEVEOiAxLFxuICAgIEJPT0tFRDogMixcbiAgICBSRVNDSEVEVUxFRF9ET0NUT1I6IDMsXG4gICAgUkVTQ0hFRFVMRURfUEFUSUVOVDogNCxcbiAgICBBQ0NFUFRFRDogNSxcbiAgICBDQU5DRUxFRDogNixcbiAgICBDT01QTEVURUQ6IDcsXG59XG5cblxuY2xhc3MgQm9va2luZ1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd1Rlc3REZXRhaWw6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIHBheW1lbnRfc3VjY2VzczogdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ3BheW1lbnRfc3VjY2VzcycpLFxuICAgICAgICAgICAgaGlkZV9idXR0b246IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdwYXltZW50X3N1Y2Nlc3MnKSB8fCB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnaGlkZV9idXR0b24nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICAgICAgbGV0IGFwcG9pbnRtZW50SWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZFxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJlc2NoZWR1bGVTbG90ICYmIHRoaXMucHJvcHMucmVzY2hlZHVsZVNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90ICYmIE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5yZXNjaGVkdWxlU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3QpLmxlbmd0aCkge1xuICAgICAgICAgICAvL09uIHJlc2hlZHVsZSB0aGlzIGZ1bmN0aW9uIGNhbGxzICwgdG8gdXBkYXRlIHRoZSBhcHBvaW50bWVudCBzdGF0dXNcbiAgICAgICAgICAgIC8qbGV0IHRlc3RzID0gW11cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5yZXNjaGVkdWxlU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3QpLm1hcCgodHdwKT0+e1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gM1xuICAgICAgICAgICAgICAgICAgICBpZih0d3AudHlwZT09XCJyYWRpb2xvZ3lcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0d3AudHlwZSA9PSBcInBhdGhvbG9neVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAyXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0ZXN0cy5wdXNoKHt0ZXN0OiB0d3AudGVzdF9pZCx0eXBlOnR5cGUsIHN0YXJ0X2RhdGU6IHR3cC5kYXRlLCBzdGFydF90aW1lOiB0d3AudGltZS52YWx1ZSwgaXNfaG9tZV9waWNrdXA6IHR3cC5pc19ob21lX3BpY2t1cCB9KVxuICAgICAgICAgICAgfSkqL1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkVGltZSA9IE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5yZXNjaGVkdWxlU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3QpWzBdXG4gICAgICAgICAgICBsZXQgc3RhcnRfZGF0ZSA9IHNlbGVjdGVkVGltZS5kYXRlXG4gICAgICAgICAgICBsZXQgc3RhcnRfdGltZSA9IHNlbGVjdGVkVGltZS50aW1lLnZhbHVlXG4gICAgICAgICAgICBsZXQgYXBwb2ludG1lbnREYXRhID0geyBpZDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucmVmSWQsIHN0YXR1czogNCwgc3RhcnRfZGF0ZSwgc3RhcnRfdGltZSB9XG4gICAgICAgICAgICAvL211bHRpX3RpbWluZ3NfZW5hYmxlZDogdHJ1ZSxcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVMYWJBcHBvaW50bWVudChhcHBvaW50bWVudERhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YS5kYXRhLCBsb2FkaW5nOiBmYWxzZSB9KVxuXG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJBcHBvaW50bWVudCByZXNjaGVkdWxlIHN1Y2Nlc3MuXCIgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRMYWJCb29raW5nU3VtbWFyeSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YVswXSwgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwsIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQXBwb2ludG1lbnQgcmVzY2hlZHVsZSBmYWlsZWQuXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJUaW1lU0xvdCh7IHRpbWU6IHt9IH0sIHRydWUpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVcGNvbWluZ0FwcG9pbnRtZW50cygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9nZXQgYXBwb2lubWVudCBkYXRhIFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRMYWJCb29raW5nU3VtbWFyeSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhWzBdLCBsb2FkaW5nOiBmYWxzZSB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmZvID0ge31cbiAgICAgICAgICAgICAgICAgICAgaW5mb1thcHBvaW50bWVudElkXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGxldCBtcnAgPSAwXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWFsX3ByaWNlID0gMFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggJiYgZGF0YVswXS5sYWJfdGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVswXS5sYWJfdGVzdC5tYXAoKHRlc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcnAgKz0gcGFyc2VJbnQodGVzdC5tcnApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZSArPSBwYXJzZUludCh0ZXN0LmRlYWxfcHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZm9bYXBwb2ludG1lbnRJZF0ucHVzaCh7ICdib29raW5nX2lkJzogYXBwb2ludG1lbnRJZCwgJ21ycCc6IG1ycCwgJ2RlYWxfcHJpY2UnOiBkZWFsX3ByaWNlIH0pXG4gICAgICAgICAgICAgICAgICAgIGluZm8gPSBKU09OLnN0cmluZ2lmeShpbmZvKVxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNfZ29sZF91c2VyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEgJiYgZGF0YS5sZW5ndGggJiYgZGF0YVswXS5nb2xkICYmIE9iamVjdC5rZXlzKGRhdGFbMF0uZ29sZCkubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19nb2xkX3VzZXIgPSBkYXRhWzBdLmdvbGQuaXNfZ29sZCBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5zZXRBcHBvaW50bWVudERldGFpbHMoaW5mbykudGhlbigoc2V0Q29va2llKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnBheW1lbnRfc3VjY2Vzcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJBcHBvaW50bWVudEJvb2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogYXBwb2ludG1lbnRJZCwgJ2V2ZW50JzogJ2xhYi1hcHBvaW50bWVudC1ib29rZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9LCB0cnVlLCBmYWxzZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzX2dvbGRfdXNlcil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aXBCb29rZWREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd2aXBib29rZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXBib29rZWQnLCAndXNlcl9pZCc6IEdUTS5nZXRVc2VySWQoKSwgJ2lzX3NpbmdsZV9mbG93Jzp0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IHZpcEJvb2tlZERhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNyaXRlb19kYXRhID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6IFwidHJhY2tUcmFuc2FjdGlvblwiLCAnaWQnOiBhcHBvaW50bWVudElkLCAnaXRlbSc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgJ2lkJzogXCIxXCIsICdwcmljZSc6IGRhdGEubGVuZ3RoID8gZGF0YVswXS5kZWFsX3ByaWNlIDogJycsICdxdWFudGl0eSc6IDEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JJVEVPLnNlbmREYXRhKGNyaXRlb19kYXRhKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSArIFwiP2hpZGVfYnV0dG9uPXRydWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldENvcnBvcmF0ZUNvdXBvbihudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbmNlbEFwcG9pbnRtZW50KGNhbmNlbERhdGEpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIHNob3dDYW5jZWw6IGZhbHNlIH0pXG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICBpZiAoY2FuY2VsRGF0YS5jYW5jZWxTdGF0dXMpIHtcblxuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NhbmNlbExhYkFwcG9pbnRtZW50QW5kUmVmdW5kJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2FuY2VsLWxhYi1hcHBvaW50bWVudC1SZWZ1bmQnLCAnYXBwb2ludG1lbnRJZCc6IHRoaXMuc3RhdGUuZGF0YS5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ2FuY2VsTGFiQXBwb2ludG1lbnRBbmRCb29rTmV3JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2FuY2VsLWxhYi1hcHBvaW50bWVudC1Cb29rLU5ldycsICdhcHBvaW50bWVudElkJzogdGhpcy5zdGF0ZS5kYXRhLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG5cbiAgICAgICAgbGV0IGFwcG9pbnRtZW50RGF0YSA9IHsgaWQ6IHRoaXMuc3RhdGUuZGF0YS5pZCwgc3RhdHVzOiA2LCByZWZ1bmQ6IGNhbmNlbERhdGEuY2FuY2VsU3RhdHVzLCBjYW5jZWxsYXRpb25fY29tbWVudDogY2FuY2VsRGF0YS5jYW5jZWxUZXh0LCBjYW5jZWxsYXRpb25fcmVhc29uOiBjYW5jZWxEYXRhLmNhbmNlbElkIH1cblxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUxhYkFwcG9pbnRtZW50KGFwcG9pbnRtZW50RGF0YSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSwgbG9hZGluZzogZmFsc2UsIHNob3dDYW5jZWw6IGZhbHNlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgc2hvd0NhbmNlbDogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVDYW5jZWwoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NhbmNlbDogIXRoaXMuc3RhdGUuc2hvd0NhbmNlbCB9KVxuICAgIH1cblxuICAgIHRvb2dsZVRlc3REZXRhaWxzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rlc3REZXRhaWw6ICF0aGlzLnN0YXRlLnNob3dUZXN0RGV0YWlsIH0pXG4gICAgfVxuXG4gICAgZ29Ub1Nsb3RTZWxlY3RvcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCB0ZXN0X2lkcyA9IFtdXG4gICAgICAgIGxldCBwX3BpY2t1cCA9ICdob21lJ1xuICAgICAgICBsZXQgcl9waWNrdXAgPSAnbGFiJ1xuICAgICAgICAvL2lmKHRoaXMuc3RhdGUuc2VsZWN0ZWRfdGltaW5nc190eXBlKXt9XG4gICAgICAgIGxldCB0ZXN0X3R5cGUgPSAwXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGEubGFiX3Rlc3QpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YS5sYWJfdGVzdC5tYXAoKHRlc3QpID0+IHtcbiAgICAgICAgICAgICAgICB0ZXN0X2lkcy5wdXNoKHRlc3QudGVzdF9pZClcbiAgICAgICAgICAgICAgICB0ZXN0X3R5cGUgPSB0ZXN0LnRlc3RfdHlwZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYlRpbWVTTG90KHsgdGltZToge30gfSwgdHJ1ZSlcbiAgICAgICAgbGV0IHNlbGVjdGVkX3RpbWluZ3NfdHlwZSA9IHRoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnN0YXRlLmRhdGEuc2VsZWN0ZWRfdGltaW5nc190eXBlID09ICdzZXBhcmF0ZScgPyAnc2VwZXJhdGVseScgOiAnYWxsJ1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGEuaXNfaG9tZV9waWNrdXApIHtcbiAgICAgICAgICAgICAgICBpZiAodGVzdF90eXBlID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcF9waWNrdXAgPSAnaG9tZSdcbiAgICAgICAgICAgICAgICAgICAgcl9waWNrdXAgPSAnbGFiJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGVzdF90eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcl9waWNrdXAgPSAnaG9tZSdcbiAgICAgICAgICAgICAgICAgICAgcF9waWNrdXAgPSAnbGFiJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3RfdHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHBfcGlja3VwID0gJ2xhYidcbiAgICAgICAgICAgICAgICAgICAgcl9waWNrdXAgPSAnbGFiJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGVzdF90eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcl9waWNrdXAgPSAnbGFiJ1xuICAgICAgICAgICAgICAgICAgICBwX3BpY2t1cCA9ICdsYWInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YS5sYWIgJiYgdGhpcy5zdGF0ZS5kYXRhLmxhYi5pc190aHlyb2NhcmUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7dGhpcy5zdGF0ZS5kYXRhLmxhYi5pZH0vdGltZXNsb3RzP3Jlc2NoZWR1bGU9dHJ1ZSZ0eXBlPSR7dGhpcy5zdGF0ZS5kYXRhLmlzX2hvbWVfcGlja3VwID8gJ2hvbWUnIDogJ2xhYid9JmlzX3RoeXJvY2FyZT10cnVlJnRlc3RfaWRzPSR7dGVzdF9pZHN9JnJfcGlja3VwPSR7cl9waWNrdXB9JnBfcGlja3VwPSR7cF9waWNrdXB9YClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7dGhpcy5zdGF0ZS5kYXRhLmxhYi5pZH0vdGltZXNsb3RzP3Jlc2NoZWR1bGU9dHJ1ZSZ0eXBlPSR7dGhpcy5zdGF0ZS5kYXRhLmlzX2hvbWVfcGlja3VwID8gJ2hvbWUnIDogJ2xhYid9JmlzX3RoeXJvY2FyZT1mYWxzZSZ0ZXN0X2lkcz0ke3Rlc3RfaWRzfSZyX3BpY2t1cD0ke3JfcGlja3VwfSZwX3BpY2t1cD0ke3BfcGlja3VwfWApXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG5hdmlnYXRlVG8od2hlcmUsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUpXG4gICAgfVxuXG4gICAgZ29Ub0Jvb2tpbmdQYWdlKCkge1xuICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdSZWJvb2tMYWJBcHBvaW50bWVudENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6ICcnLCAnZXZlbnQnOiAncmVib29rLWxhYi1hcHBvaW50bWVudC1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgbGV0IGNyaXRlcmlhID0ge31cbiAgICAgICAgbGV0IGV4dHJhUGFyYW1zID0ge1xuICAgICAgICAgICAgZm9yY2VBZGRUZXN0aWRzOiB0cnVlLFxuICAgICAgICAgICAgbGFiSWQ6IHRoaXMuc3RhdGUuZGF0YS5sYWIuaWQsXG4gICAgICAgICAgICB0ZXN0czogdGhpcy5zdGF0ZS5kYXRhLmxhYl90ZXN0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIGNyaXRlcmlhLCB0cnVlLCBleHRyYVBhcmFtcylcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvJHt0aGlzLnN0YXRlLmRhdGEubGFiLmlkfS9ib29rYClcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvU0JJKCl7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwOi8vMTMuMjM1LjE5OS4zNi93ZWJjb3JlL2RvY3ByaW1lY2FsbGJhY2snLCAnX2JsYW5rJylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBwcm9maWxlID0ge31cbiAgICAgICAgbGV0IGxhYl90ZXN0ID0gW11cbiAgICAgICAgbGV0IGxhYiA9IHt9XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXG4gICAgICAgIGxldCBzdGF0dXMgPSAxXG4gICAgICAgIGxldCBsYWJfdGh1bWJuYWlsID0gXCJcIlxuICAgICAgICBsZXQgcmVwb3J0cyA9IFtdXG4gICAgICAgIGxldCBpc190aHlyb2NhcmUgPSBudWxsXG4gICAgICAgIGxldCBwYXltZW50X3R5cGVcbiAgICAgICAgbGV0IG1ycCA9ICcnXG4gICAgICAgIGxldCBkZWFsX3ByaWNlID0gJydcbiAgICAgICAgbGV0IGRpc2NvdW50ID0gJydcbiAgICAgICAgbGV0IGVmZmVjdGl2ZV9wcmljZSA9ICcnXG4gICAgICAgIGxldCBwYXltZW50TW9kZSA9ICcnXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSkge1xuICAgICAgICAgICAgbGFiID0gdGhpcy5zdGF0ZS5kYXRhLmxhYlxuICAgICAgICAgICAgbGFiX3Rlc3QgPSB0aGlzLnN0YXRlLmRhdGEubGFiX3Rlc3RcbiAgICAgICAgICAgIHByb2ZpbGUgPSB0aGlzLnN0YXRlLmRhdGEucHJvZmlsZVxuICAgICAgICAgICAgZGF0ZSA9IHRoaXMuc3RhdGUuZGF0YS50aW1lX3Nsb3Rfc3RhcnQgPyBuZXcgRGF0ZSh0aGlzLnN0YXRlLmRhdGEudGltZV9zbG90X3N0YXJ0KSA6IG5ldyBEYXRlKClcbiAgICAgICAgICAgIGFjdGlvbnMgPSB0aGlzLnN0YXRlLmRhdGEuYWxsb3dlZF9hY3Rpb24gfHwgW11cbiAgICAgICAgICAgIHN0YXR1cyA9IHRoaXMuc3RhdGUuZGF0YS5zdGF0dXNcbiAgICAgICAgICAgIGxhYl90aHVtYm5haWwgPSB0aGlzLnN0YXRlLmRhdGEubGFiX3RodW1ibmFpbFxuICAgICAgICAgICAgcmVwb3J0cyA9IHRoaXMuc3RhdGUuZGF0YS5yZXBvcnRzIHx8IFtdXG4gICAgICAgICAgICBpc190aHlyb2NhcmUgPSB0aGlzLnN0YXRlLmRhdGEubGFiID8gdGhpcy5zdGF0ZS5kYXRhLmxhYi5pc190aHlyb2NhcmUgOiBudWxsXG4gICAgICAgICAgICBwYXltZW50X3R5cGUgPSB0aGlzLnN0YXRlLmRhdGEucGF5bWVudF90eXBlXG4gICAgICAgICAgICBtcnAgPSB0aGlzLnN0YXRlLmRhdGEucHJpY2VcbiAgICAgICAgICAgIGRlYWxfcHJpY2UgPSB0aGlzLnN0YXRlLmRhdGEuZGVhbF9wcmljZVxuICAgICAgICAgICAgZWZmZWN0aXZlX3ByaWNlID0gdGhpcy5zdGF0ZS5kYXRhLmVmZmVjdGl2ZV9wcmljZVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdW1tYXJfdXRtX3RhZyA9IFwiXCJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnByb3BzLnN1bW1hcnlfdXRtICYmIHRoaXMucHJvcHMuc3VtbWFyeV91dG1fdmFsaWRpdHkpIHtcbiAgICAgICAgICAgIGlmICgobmV3IERhdGUodGhpcy5wcm9wcy5zdW1tYXJ5X3V0bV92YWxpZGl0eSkpID4gKG5ldyBEYXRlKCkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNyYyA9IGBodHRwczovL2NwbGNwcy5jb20vcC5hc2h4P289MTE2MjE2JmU9NDUzMSZmPWltZyZ0PSR7dGhpcy5zdGF0ZS5kYXRhLmlkfWBcbiAgICAgICAgICAgICAgICBzdW1tYXJfdXRtX3RhZyA9IDxpbWcgc3JjPXtzcmN9IHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIiBib3JkZXI9XCIwXCIgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXltZW50X3R5cGUgPT0gMikge1xuICAgICAgICAgICAgZGlzY291bnQgPSBtcnAgLSBkZWFsX3ByaWNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNjb3VudCA9IG1ycCAtIGVmZmVjdGl2ZV9wcmljZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBheW1lbnRfdHlwZSA9PSAxKSB7XG4gICAgICAgICAgICBwYXltZW50TW9kZSA9ICdPbmxpbmUnXG4gICAgICAgIH0gZWxzZSBpZiAocGF5bWVudF90eXBlID09IDIpIHtcbiAgICAgICAgICAgIHBheW1lbnRNb2RlID0gJ0Nhc2gnXG4gICAgICAgIH0gZWxzZSBpZiAocGF5bWVudF90eXBlID09IDMpIHtcbiAgICAgICAgICAgIHBheW1lbnRNb2RlID0gJ0luc3VyYW5jZSdcbiAgICAgICAgfSBlbHNlIGlmIChwYXltZW50X3R5cGUgPT0gNCkge1xuICAgICAgICAgICAgcGF5bWVudE1vZGUgPSAnRG9jcHJpbWUgQ2FyZSdcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAge3N1bW1hcl91dG1fdGFnfVxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aGVhZGVyIGNsYXNzTmFtZT1cInNraW4tcHJpbWFyeSBmaXhlZCBob3Jpem9udGFsIHRvcCBzdGlja3ktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBiYWNrLWljb25cIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSkgfX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9iYWNrLXdoaXRlLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZ3LTcwMCBjYXBpdGFsaXplIHRleHQtd2hpdGVcIj5Zb3VyIEFwcG9pbnRtZW50PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1ob21lLWljb24tZGl2XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZG9jLXByaW1lLWxvZ28ucG5nXCJ9IGNsYXNzTmFtZT1cIm1vYmlsZS1ob21lLWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0IGZsb2F0LXJpZ2h0IHVzZXItbm90aWZpY2F0aW9uLWFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyJykgfX0+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIHRleHQtbWlkZGxlXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy91c2VyLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCB0ZXh0LW1pZGRsZSBub3RpZmljYXRpb24taWNvblwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbm90aWZpY2F0aW9uLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzLCAnL25vdGlmaWNhdGlvbnMnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmV3Tm90aWZpY2F0aW9uID4gMCA/IDxzcGFuIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1hbGVydFwiPnt0aGlzLnByb3BzLm5ld05vdGlmaWNhdGlvbn08L3NwYW4+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5zdGF0ZS5sb2FkaW5nICYmIHRoaXMuc3RhdGUuZGF0YSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9va2luZy1jb25maXJtLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaGF0c0FwcE9wdGluVmlldyB7Li4udGhpcy5wcm9wc30gcHJvZmlsZXM9e3Byb2ZpbGV9IGlzQXBwb2ludG1lbnQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLXRpbWVsaW5lIGJvb2stY29uZmlybWVkLXRpbWVsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9PSA2ID8gPGg0IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+QXBwb2ludG1lbnQgQ2FuY2VsbGVkPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0YXR1cyA9PSAxID8gPGg0IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+QXBwb2ludG1lbnQgQ3JlYXRlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsoc3RhdHVzIDw9IDUgfHwgc3RhdHVzID09IDcpID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmdy03MDAgdGV4dC1saWdodFwiPlJlY2VpdmVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyhzdGF0dXMgPT0gNSB8fCBzdGF0dXMgPT0gNykgPyBcImFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+Mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZ3LTcwMCB0ZXh0LWxpZ2h0XCI+Q29uZmlybWVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0YXR1cyA9PSA3ID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmdy03MDAgdGV4dC1saWdodFwiPntzdGF0dXMgPT0gNiA/IFwiQ29tcGxldGVkXCIgOiBcIkNvbXBsZXRlZFwifTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLmlzX3JhdGVkID09IGZhbHNlICYmIHRoaXMuc3RhdGUuZGF0YS5zdGF0dXMgPT0gNyA/ICg8UmF0aW5nUHJvZmlsZUNhcmQgey4uLnRoaXMucHJvcHN9IGJvb2tpbmdfZmxhZz17dHJ1ZX0gZGV0YWlscz17dGhpcy5zdGF0ZS5kYXRhfSAvPikgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZGF0YS5vdHAgJiYgc3RhdHVzID09IDUpID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgbXJiLTEwXCI+VW5pcXVlIENvbmZpcm1hdGlvbiBDb2RlOiA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZFwiPnt0aGlzLnN0YXRlLmRhdGEub3RwfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWxpZ2h0XCI+U2hhcmUgdGhpcyBjb2RlIHdpdGggbGFiIGF0IHRoZSB0aW1lIG9mIHlvdXIgYXBwb2ludG1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXltZW50X3N1Y2Nlc3MgPyA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBtcmItMTBcIj48c3BhbiBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZFwiPlRoYW5rcyEgQXBwb2ludG1lbnQgUmVjZWl2ZWQ8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1saWdodFwiPldlIGFyZSB3YWl0aW5nIGZvciB0aGUgY29uZmlybWF0aW9uIGZyb20gdGhlIGxhYiBhbmQgd2Ugd2lsbCBnZXQgYmFjayB0byB5b3Ugc2hvcnRseS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBtcmItMTBcIj5Cb29raW5nIElEOiA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZFwiPnt0aGlzLnN0YXRlLmRhdGEuaWR9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1saWdodFwiPkRldGFpbHMgaGF2ZSBiZWVuIHNlbnQgdG8geW91ciBlbWFpbC1pZCBhbmQgbW9iaWxlIG51bWJlci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5pbmRleE9mKDYpID4gLTEgJiYgIXRoaXMuc3RhdGUuaGlkZV9idXR0b24gJiYgIWlzX3RoeXJvY2FyZSA/IDxhIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2FuY2VsLmJpbmQodGhpcyl9IGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+Q2FuY2VsIEJvb2tpbmc8L2E+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0ICBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYi1kZXRhaWxzIHBiLWxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2MtdGl0bGUgdGV4dC1tZCBmdy03MDBcIj57bGFiLm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzcy1kZXRhaWxzIGNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtsYWIubmFtZX0gaGFzX2ltYWdlPXshIWxhYl90aHVtYm5haWx9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1sc1wiIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0J319IG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMsIGAvbGFiLyR7bGFiLmlkfWApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbHRyLXVzci1pbWFnZS1sYWJcIiBzdHlsZT17eyBmbG9hdDoncmlnaHQnLGN1cnNvcjogJ3BvaW50ZXInIH19IHNyYz17bGFiX3RodW1ibmFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZC1pbmZvIGZ3LTUwMFwiPntsYWIuYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwicGItdmlldyB0ZXh0LWxlZnQgY2xlYXJmaXggbXJ0LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvP2FwaT0xJnF1ZXJ5PSR7bGFiLmxhdH0sJHtsYWIubG9uZ31gfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rLXRleHQgdGV4dC1tZCBmdy03MDAgbXJ0LTEwXCIgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JyB9fSA+VmlldyBpbiBHb29nbGUgTWFwPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT0ke2xhYi5sYXR9LCR7bGFiLmxvbmd9YH0gY2xhc3NOYW1lPVwibGluay10ZXh0IHRleHQtbWQgZnctNzAwXCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwLCBmbG9hdDogJ3JpZ2h0JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbWFwLWljb24ucG5nXCJ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPT0gNiB8fCBzdGF0dXMgPT0gNyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVib29rLWJ0blwiIG9uQ2xpY2s9e3RoaXMuZ29Ub0Jvb2tpbmdQYWdlLmJpbmQodGhpcyl9PlJlYm9vayBBcHBvaW50bWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc190aHlyb2NhcmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHlyb0NhbGxDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoeXJvQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2MtdGl0bGUgdGV4dC1tZCBmdy03MDBcIj5SZXNjaGVkdWxlIEFwcG9pbnRtZW50PzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSB3YW50IHRvIHJlc2NoZWR1bGUgb3IgY2FuY2VsIGFwcG9pbnRtZW50LCBjb250YWN0IHVzIGF0ICA8YSBocmVmPVwidGVsOjE4MDAxMjM5NDE5XCI+MTgwMCAxMjMgOTQxOTwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLmlzX2hvbWVfcGlja3VwID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJ0LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1yZXBvcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+PHNwYW4+PGltZyBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9ob21lLW9yYW5nZS5zdmdcIn0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOCwgbWFyZ2luUmlnaHQ6IDUsIHZlcnRpY2FsQWxpZ246IC0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+PC9zcGFuPlNhbXBsZSBQaWNrdXAgQWRkcmVzczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlc3QtbGlzdCBmdy01MDBcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnIH19Pnt0aGlzLnN0YXRlLmRhdGEuYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPjxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvY2suc3ZnXCJ9IGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIC8+PC9zcGFuPlZpc2l0IFRpbWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIWlzX3RoeXJvY2FyZSkgJiYgKGFjdGlvbnMuaW5kZXhPZig0KSA+IC0xKS8qICYmIChuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKCkgPiBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgKi8gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuZ29Ub1Nsb3RTZWxlY3Rvci5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+UmVzY2hlZHVsZSBUaW1lPC9hPjwvc3Bhbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZS10aW1lIHRlc3QtbGlzdCBmdy01MDBcIj57bmV3IERhdGUoZGF0ZSkudG9EYXRlU3RyaW5nKCl9IHwge25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlVGltZVN0cmluZygpfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEubGFiX3Rlc3QgJiYgdGhpcy5zdGF0ZS5kYXRhLmxhYl90ZXN0Lm1hcCgodGVzdCwga2V5KT0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZzdC1jb250ZW50LWJsXCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZzdC10c3QtbmFtZVwiPnt0ZXN0LnRlc3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlICYmIDxwIGNsYXNzTmFtZT1cInJkby10aW1lLXZzdFwiPntuZXcgRGF0ZShkYXRlKS50b0RhdGVTdHJpbmcoKX0gfCB7bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXJlcG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPjxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdGVzdC5zdmdcIn0gY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uXCIgLz48L3NwYW4+VGVzdHMgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b29nbGVUZXN0RGV0YWlscygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPlZpZXcgRGV0YWlsczwvYT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYl90ZXN0Lm1hcCgodGVzdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17aX0gY2xhc3NOYW1lPVwidGVzdC1saXN0IGZ3LTUwMFwiPnt0ZXN0LnRlc3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcnQtMTAgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1yZXBvcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj48c3Bhbj48aW1nIGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL3VzZXIuc3ZnXCJ9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNCwgbWFyZ2luUmlnaHQ6IDUsIHZlcnRpY2FsQWxpZ246IC0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz48L3NwYW4+UGF0aWVudCBEZXRhaWxzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXN0LWxpc3QgZnctNTAwXCI+e3Byb2ZpbGUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVzdC1saXN0IGZ3LTUwMFwiPntwcm9maWxlLnBob25lX251bWJlcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVzdC1saXN0IGZ3LTUwMFwiPntwcm9maWxlLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzICE9PSA2ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXJlcG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+PHNwYW4+PGltZyBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ydXBlZWljb24ucG5nXCJ9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2LCBtYXJnaW5SaWdodDogNSwgdmVydGljYWxBbGlnbjogLTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+PC9zcGFuPlBheW1lbnQgRGV0YWlsPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X3R5cGUgPT0gMyA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6ICcjNzU3NTc1JywgcGFkZGluZ1RvcDogNCB9fT5NUlA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj4mIzgzNzc7IHtwYXJzZUludChtcnApfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnQgJiYgcGF5bWVudF90eXBlICE9IDMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5Eb2NwcmltZSBEaXNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pi0gJiM4Mzc3OyB7cGFyc2VJbnQoZGlzY291bnQpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X3R5cGUgPT0gMyA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPXt7IGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBtYXJnaW46ICcwIC0xMnB4IDEwcHggLTEycHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkFtb3VudCBQYXlhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF90eXBlID09IDIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+JiM4Mzc3OyB7cGFyc2VJbnQoZGVhbF9wcmljZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+JiM4Mzc3OyB7cGFyc2VJbnQoZWZmZWN0aXZlX3ByaWNlKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1vZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlBheW1lbnQgTW9kZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPntwYXltZW50TW9kZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA8PSA1ID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbVwiIHN0eWxlPXt7IGN1cnNvcjogJ2F1dG8nIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9yZWZlcnJhbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNyLWR0bHMtb2ZmLWFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2MtdGl0bGUgdGV4dC1tZCBmdy03MDAgY2FyZC1ubS1vdnJscG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9yZWZlci5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkICBpbWctZi0xXCIgLz5SZWZlciAmYW1wOyBFYXJuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZnItaW1nLXR4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtaW1nLWNvbnRcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0ZXAtMi5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZyLWNvbnRudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZC1pbmZvIGZ3LTUwMCBhZGQtaW5mby1wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludml0ZSB5b3VyIGZyaWVuZHMgb24gZG9jcHJpbWUuY29tIGFuZCBlYXJuIDxiIGNsYXNzTmFtZT1cImZ3LTUwMCBkcmstYmxrXCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzhweCcsIG1hcmdpblRvcDogJzRweCcsIG1hcmdpblJpZ2h0OiAnMHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ydXBlZS1pY29uLnN2Z1wifSAvPiAyMDA8L2I+IG9uIGNvbXBsZXRpb24gb2YgdGhlaXIgZmlyc3Qgb3JkZXIgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJ0LTIwXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1kYXJrLS1hbGwpYCwgY3Vyc29yOiAncG9pbnRlcicgfX0+S25vdyBtb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBvcnRzICYmIHJlcG9ydHMubGVuZ3RoID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3VzZXIvbGFiL3JlcG9ydHMvJHt0aGlzLnN0YXRlLmRhdGEuaWR9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwidmlld3ByZXNidG5cIj5WaWV3IFJlcG9ydHM8L2J1dHRvbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5hcHBvaW50bWVudF92aWFfc2JpID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBzdGlja3ktYnRuIHAtMCB2LWJ0biAgYnRuLWxnIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgYnV0dG9ucy1hZGRjYXJ0LWNvbnRhaW5lciBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuLXByaW1hcnkgYm9vay1idG4tbXJnbi1hZGp1c3QgXCIgb25DbGljaz17KCkgPT4geyB0aGlzLm5hdmlnYXRlVG9TQkkoKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrIFRvIFNCSUcgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiA6IDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVzdERldGFpbCBzaG93PXt0aGlzLnN0YXRlLnNob3dUZXN0RGV0YWlsfSB0b2dnbGU9e3RoaXMudG9vZ2xlVGVzdERldGFpbHMuYmluZCh0aGlzKX0gbGFiX3Rlc3Q9e2xhYl90ZXN0fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dDYW5jZWwgPyA8Q2FuY2VsUG9wdXAgdG9nZ2xlPXt0aGlzLnRvZ2dsZUNhbmNlbC5iaW5kKHRoaXMpfSBjYW5jZWxBcHBvaW50bWVudD17dGhpcy5jYW5jZWxBcHBvaW50bWVudC5iaW5kKHRoaXMpfSBjb21tZW50cz17dGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5jYW5jZWxsYXRpb25fcmVhc29uID8gdGhpcy5zdGF0ZS5kYXRhLmNhbmNlbGxhdGlvbl9yZWFzb24gOiBbXX0gc2hvd0NvbW1lbnRSZWFzb25zPXtwYXltZW50X3R5cGUgPT0gMyB8fCBwYXltZW50X3R5cGUgPT0gMiA/IHRydWUgOiBmYWxzZX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhci8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIENhbmNlbFBvcFVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICAgICAgICBzaG93Q29tbWVudFJlYXNvbnM6IHRoaXMucHJvcHMuc2hvd0NvbW1lbnRSZWFzb25zLFxuICAgICAgICAgICAgc2VsZWN0ZWRDYW5jZWxSZWFzb25JZDogJycsXG4gICAgICAgICAgICBjYW5jZWxUZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbmNlbFN0YXR1czogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdENsaWNrZWQoZSl7XG4gICAgICAgIGxldCBvdGhlclJlYXNvbiA9IHRoaXMucHJvcHMuY29tbWVudHMuZmlsdGVyKHg9PnguaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENhbmNlbFJlYXNvbklkKVxuICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuc2VsZWN0ZWRDYW5jZWxSZWFzb25JZCl7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBzZWxlY3QgdmFsaWQgcmVhc29uXCIgfSlcbiAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICB9ZWxzZSBpZiggb3RoZXJSZWFzb24ubGVuZ3RoICYmIG90aGVyUmVhc29uWzBdLmlzX2NvbW1lbnRfbmVlZGVkICYmICF0aGlzLnN0YXRlLmNhbmNlbFRleHQgKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGVudGVyIGNvbW1lbnRcIiB9KVxuICAgICAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9ZWxzZXtcblxuICAgICAgICAgICAgaWYob3RoZXJSZWFzb24ubGVuZ3RoICYmIG90aGVyUmVhc29uWzBdLmlzX2NvbW1lbnRfbmVlZGVkKXtcbiAgICAgICAgICAgICAgICBvdGhlclJlYXNvbiA9IHRoaXMuc3RhdGUuY2FuY2VsVGV4dFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgb3RoZXJSZWFzb24gPSAnJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2FuY2VsRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiBvdGhlclJlYXNvbixcbiAgICAgICAgICAgICAgICBjYW5jZWxJZDogdGhpcy5zdGF0ZS5zZWxlY3RlZENhbmNlbFJlYXNvbklkLFxuICAgICAgICAgICAgICAgIGNhbmNlbFN0YXR1czogdGhpcy5zdGF0ZS5jYW5jZWxTdGF0dXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2FuY2VsQXBwb2ludG1lbnQoY2FuY2VsRGF0YSlcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0SGFuZGxlcihlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2FuY2VsVGV4dDogZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuXG4gICAgICAgIGxldCBvdGhlclR5cGUgPSB0aGlzLnByb3BzLmNvbW1lbnRzLmZpbHRlcih4PT54LmlkID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDYW5jZWxSZWFzb25JZClcbiAgICAgICAgaWYob3RoZXJUeXBlLmxlbmd0aCAmJiBvdGhlclR5cGVbMF0uaXNfY29tbWVudF9uZWVkZWQpe1xuICAgICAgICAgICAgb3RoZXJUeXBlID0gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG90aGVyVHlwZSA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93Q29tbWVudFJlYXNvbnM/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsUG9wdXBDb250YWluZXJPdmVybGF5XCIgb25DbGljaz17KGUpPT50aGlzLnByb3BzLnRvZ2dsZShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbFBvcHVwQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtSGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UmVhc29uIGZvciBDYW5jZWxsYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNuLWJ0bi1oZWFkXCI+PGltZyBzdHlsZT17eyB3aWR0aDogMTAgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvc2UtYmxhY2suc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtd2lkLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tbWVudHMubWFwKChyZWFzb25zLCBrZXkpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17cmVhc29ucy5pZH0gY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCIgb25DbGljaz17KGUpPT57ZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZENhbmNlbFJlYXNvbklkOiByZWFzb25zLmlkfSkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUnLCBmb250U2l6ZTogJ2luaGVyaXQnIH19ID57cmVhc29ucy5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDYW5jZWxSZWFzb25JZCA9PSByZWFzb25zLmlkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyVHlwZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxhdGlvblJlc29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJXcml0ZSByZWFzb24gZm9yIGNhbmNlbGxhdGlvblwiIG9uQ2hhbmdlID17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVJbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gb25DbGljaz17KGUpPT57ZS5zdG9wUHJvcGFnYXRpb24oKX19IHZhbHVlPXt0aGlzLnN0YXRlLmNhbmNlbFRleHR9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxhdGlvbkJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9IHt0aGlzLnN1Ym1pdENsaWNrZWQuYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbFBvcHVwQ29udGFpbmVyT3ZlcmxheVwiIG9uQ2xpY2s9eyhlKT0+dGhpcy5wcm9wcy50b2dnbGUoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxQb3B1cENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLUhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNhbmNlbCBBcHBvaW50bWVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY24tYnRuLWhlYWRcIj48aW1nIHN0eWxlPXt7d2lkdGg6IDEwfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvc2UtYmxhY2suc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbmN0LXNlbGVjdC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7ZS5zdG9wUHJvcGFnYXRpb24oKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0NvbW1lbnRSZWFzb25zOiB0cnVlLCBjYW5jZWxTdGF0dXM6IDB9KSB9fT5DYW5jZWwgYW5kIFJlYm9vazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7ZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93Q29tbWVudFJlYXNvbnM6IHRydWUsIGNhbmNlbFN0YXR1czogMX0pIH19ID5DYW5jZWwgYW5kIFJlZnVuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgIH1cbn1cblxuey8qXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPkNhbmNlbCBBcHBvaW50bWVudDwvcD5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgY2FuY2VsLWNvbnRlbnQtZGl2XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBcHBvaW50bWVudCgwKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5DYW5jZWwgYW5kIFJlYm9vazwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1jb250ZW50XCI+Q2FuY2VsIHRoZSBjdXJyZW50IGFwcG9pbnRtZW50IGFuZCBib29rIGEgbmV3IEFwcG9pbnRtZW50IHdpdGggb3RoZXIgZG9jdG9yPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1yaWdodC1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9hcnJvdy1mb3J3YXJkLXJpZ2h0LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgY2FuY2VsLWNvbnRlbnQtZGl2XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBcHBvaW50bWVudCgxKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5DYW5jZWwgYW5kIFJlZnVuZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1jb250ZW50XCI+Q2FuY2VsIHRoZSBhcHBvaW50bWVudCBhbmQgZ2V0IHJlZnVuZCB3aXRoaW4gMjQgaG91cnM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLXJpZ2h0LWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Fycm93LWZvcndhcmQtcmlnaHQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvZGl2PiovfVxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsUG9wVXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBUZXN0RGV0YWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3cgPyA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXkgYmxhY2tcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoKVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGZpbHRlci1wb3B1cCBzY3JvbGwteSBodC01MDAgaW5mby1wb3B1cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgdGV4dC1tZCBmdy03MDBcIj5UZXN0IEluZm9ybWF0aW9uPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Nsb3NlLWJsYWNrLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJfdGVzdC5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmdy03MDAgbXJiLTEwXCI+e3Rlc3QudGVzdC5uYW1lfTwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtbWQgbXJiLTEwXCI+RGVzY3JpcHRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57dGVzdC50ZXN0LndoeX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUZXN0RGV0YWlsXG4iLCJpbXBvcnQgVGVzdERldGFpbCBmcm9tICcuL1Rlc3REZXRhaWwnXG5cbmV4cG9ydCBkZWZhdWx0IFRlc3REZXRhaWwiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0Q2FydEl0ZW1zLCBnZXRVcGNvbWluZ0FwcG9pbnRtZW50cywgZ2V0TGFiQm9va2luZ1N1bW1hcnksIHVwZGF0ZUxhYkFwcG9pbnRtZW50LCBzZWxlY3RMYWJUaW1lU0xvdCwgcmV0cnlQYXltZW50TEFCLCBnZXRSYXRpbmdDb21wbGltZW50cywgY3JlYXRlQXBwb2ludG1lbnRSYXRpbmcsIHVwZGF0ZUFwcG9pbnRtZW50UmF0aW5nLCBjbG9zZUFwcG9pbnRtZW50UG9wVXAsIHNldENvcnBvcmF0ZUNvdXBvbiwgZWRpdFVzZXJQcm9maWxlLCByZXNldFBrZ0NvbXBhcmUsIGNsZWFyVmlwU2VsZWN0ZWRQbGFuLCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgQm9va2luZ1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZy9Cb29raW5nVmlldy5qcydcbmltcG9ydCBGQ00gZnJvbSAnLi4vLi4vaGVscGVycy9mY20nXG5cbmNsYXNzIEJvb2tpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRDYXJ0SXRlbXMoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMucmVzZXRQa2dDb21wYXJlKClcbiAgICAgICAgRkNNLmdldFBlcm1pc3Npb24oKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJvb2tpbmdWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgbGV0IHsgcmVzY2hlZHVsZVNsb3QgfSA9IHN0YXRlLkxBQl9TRUFSQ0hcblxuICAgIGxldCB7XG4gICAgICAgIHN1bW1hcnlfdXRtLCBzdW1tYXJ5X3V0bV92YWxpZGl0eSwgbmV3Tm90aWZpY2F0aW9uLCBub3RpZmljYXRpb25zLCByYXRlZF9hcHBvaW5tZW50cywgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZVxuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXNjaGVkdWxlU2xvdCwgbmV3Tm90aWZpY2F0aW9uLCBub3RpZmljYXRpb25zLCByYXRlZF9hcHBvaW5tZW50cywgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZSwgc3VtbWFyeV91dG0sIHN1bW1hcnlfdXRtX3ZhbGlkaXR5XG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRVcGNvbWluZ0FwcG9pbnRtZW50czogKCkgPT4gZGlzcGF0Y2goZ2V0VXBjb21pbmdBcHBvaW50bWVudHMoKSksXG4gICAgICAgIGdldExhYkJvb2tpbmdTdW1tYXJ5OiAoYXBwb2ludG1lbnRJRCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldExhYkJvb2tpbmdTdW1tYXJ5KGFwcG9pbnRtZW50SUQsIGNhbGxiYWNrKSksXG4gICAgICAgIHVwZGF0ZUxhYkFwcG9pbnRtZW50OiAoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBkYXRlTGFiQXBwb2ludG1lbnQoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykpLFxuICAgICAgICBzZWxlY3RMYWJUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYlRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUpKSxcbiAgICAgICAgcmV0cnlQYXltZW50TEFCOiAoYXBwb2ludG1lbnRJZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKHJldHJ5UGF5bWVudExBQihhcHBvaW50bWVudElkLCBjYWxsYmFjaykpLFxuICAgICAgICBnZXRSYXRpbmdDb21wbGltZW50czogKGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRSYXRpbmdDb21wbGltZW50cyhjYWxsYmFjaykpLFxuICAgICAgICBjcmVhdGVBcHBvaW50bWVudFJhdGluZzogKGFwcG9pbnRtZW50RGF0YSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nKGFwcG9pbnRtZW50RGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgdXBkYXRlQXBwb2ludG1lbnRSYXRpbmc6IChyYXRpbmdEYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBkYXRlQXBwb2ludG1lbnRSYXRpbmcocmF0aW5nRGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgY2xvc2VBcHBvaW50bWVudFBvcFVwOiAoaWQsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChjbG9zZUFwcG9pbnRtZW50UG9wVXAoaWQsIGNhbGxiYWNrKSksXG4gICAgICAgIHNldENvcnBvcmF0ZUNvdXBvbjogKGNvdXBvbikgPT4gZGlzcGF0Y2goc2V0Q29ycG9yYXRlQ291cG9uKGNvdXBvbikpLFxuICAgICAgICBnZXRDYXJ0SXRlbXM6ICgpID0+IGRpc3BhdGNoKGdldENhcnRJdGVtcygpKSxcbiAgICAgICAgZWRpdFVzZXJQcm9maWxlOiAocHJvZmlsZURhdGEsIHByb2ZpbGVJZCwgY2IpID0+IGRpc3BhdGNoKGVkaXRVc2VyUHJvZmlsZShwcm9maWxlRGF0YSwgcHJvZmlsZUlkLCBjYikpLFxuICAgICAgICByZXNldFBrZ0NvbXBhcmU6ICgpID0+IGRpc3BhdGNoKHJlc2V0UGtnQ29tcGFyZSgpKSxcbiAgICAgICAgY2xlYXJWaXBTZWxlY3RlZFBsYW46KCkgPT5kaXNwYXRjaChjbGVhclZpcFNlbGVjdGVkUGxhbigpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCB0ZXN0LCBmb3JjZUFkZCwgZmlsdGVycykgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgdGVzdCwgZm9yY2VBZGQsIGZpbHRlcnMpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCb29raW5nKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=