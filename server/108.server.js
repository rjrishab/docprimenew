exports.ids = [108];
exports.modules = {

/***/ "./dev/js/components/opd/booking/BookingView.js":
/*!******************************************************!*\
  !*** ./dev/js/components/opd/booking/BookingView.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _RatingProfileCard = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingProfileCard.js */ "./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js");

var _RatingProfileCard2 = _interopRequireDefault(_RatingProfileCard);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _cancelPopup = __webpack_require__(/*! ./cancelPopup.js */ "./dev/js/components/opd/booking/cancelPopup.js");

var _cancelPopup2 = _interopRequireDefault(_cancelPopup);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _criteo = __webpack_require__(/*! ../../../helpers/criteo.js */ "./dev/js/helpers/criteo.js");

var _criteo2 = _interopRequireDefault(_criteo);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _RatingsPopUp = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingsPopUp.js */ "./dev/js/components/commons/ratingsProfileView/RatingsPopUp.js");

var _RatingsPopUp2 = _interopRequireDefault(_RatingsPopUp);

var _WhatsAppOptinView = __webpack_require__(/*! ../../commons/WhatsAppOptin/WhatsAppOptinView.js */ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js");

var _WhatsAppOptinView2 = _interopRequireDefault(_WhatsAppOptinView);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


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
            data: null,
            loading: true,
            showCancel: false,
            payment_success: this.props.location.search.includes('payment_success'),
            hide_button: this.props.location.search.includes('payment_success') || this.props.location.search.includes('hide_button'),
            isCompleted: false,
            showPopup: false
        };
    }

    componentDidMount() {
        // reset reschedule data
        if (this.props.rescheduleSlot && this.props.rescheduleSlot.date) {
            this.props.selectOpdTimeSLot({ time: {} }, true, null);
        }
        const parsed = queryString.parse(this.props.location.search);
        let smsComplete = parsed.complete;
        let appointmentId = this.props.match.params.refId;
        this.props.getOPDBookingSummary(appointmentId, (err, data) => {
            if (!err) {
                this.setState({ data: data[0], loading: false }, () => {

                    if (smsComplete) {
                        if (data[0].status != 7) {
                            this.setState({ showPopup: true });
                        }
                    }
                });

                let info = {};
                info[appointmentId] = [];
                info[appointmentId].push({ 'booking_id': appointmentId, 'mrp': data.length ? data[0].mrp : '', 'deal_price': data.length ? data[0].deal_price : '' });

                info = JSON.stringify(info);
                let is_gold_user = false;
                if (data && data.length && data[0].gold && Object.keys(data[0].gold).length) {
                    is_gold_user = data[0].gold.is_gold;
                }
                _storage2.default.setAppointmentDetails(info).then(setCookie => {

                    if (this.state.payment_success) {

                        let analyticData = {
                            'Category': 'ConsumerApp', 'Action': 'DoctorAppointmentBooked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': appointmentId, 'event': 'doctor-appointment-booked'
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
                    }
                });
            } else {
                this.setState({ data: null, loading: false });
            }
        });

        if (window) {
            window.scrollTo(0, 0);
        }
    }

    getAppointment(props) {
        const appointmentId = this.props.match.params.refId;
        if (!this.state.isCompleted) {
            let appointmentData = { id: appointmentId, status: 7 };
            this.props.updateOPDAppointment(appointmentData, (err, data) => {
                if (data) {
                    this.setState({ data: data, isCompleted: true });
                } else {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Something went wrong." });
                }
            });
        } else {
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Your appointment is already completed." });
        }
    }

    getQualificationStr(qualificationSpecialization) {
        return qualificationSpecialization.reduce((str, curr, i) => {
            str += `${curr.name}`;
            if (i < qualificationSpecialization.length - 1) str += `, `;
            return str;
        }, "");
    }

    cancelAppointment(cancelData) {
        this.setState({ loading: true, showCancel: false });
        let data;
        if (cancelData.cancelStatus) {

            data = {
                'Category': 'ConsumerApp', 'Action': 'CancelOpdAppointmentAndRefund', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'cancel-opd-appointment-Refund', 'appointmentId': this.state.data.id
            };
        } else {

            data = {
                'Category': 'ConsumerApp', 'Action': 'CancelOpdAppointmentAndBookNew', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'cancel-opd-appointment-Book-New', 'appointmentId': this.state.data.id
            };
        }

        _gtm2.default.sendEvent({ data: data });

        let appointmentData = { id: this.state.data.id, status: 6, refund: cancelData.cancelStatus, cancellation_comment: cancelData.cancelText, cancellation_reason: cancelData.cancelId };

        this.props.updateOPDAppointment(appointmentData, (err, data) => {
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

    goToSlotSelector(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.history.push(`/opd/doctor/${this.state.data.doctor.id}/${this.state.data.hospital.id}/book?reschedule=${this.props.match.params.refId}&type=opd`);
    }

    navigateTo(where, e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.history.push(where);
    }

    popupBtnClick(flag) {
        if (flag) {
            this.getAppointment();
        }
        this.setState({ showPopup: false });
    }

    goToBookingPage() {
        let analyticData = {
            'Category': 'ConsumerApp', 'Action': 'RebookDoctorAppointmentClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': '', 'event': 'rebook-doctor-appointment-clicked'
        };
        _gtm2.default.sendEvent({ data: analyticData });
        this.props.history.push(`/opd/doctor/${this.state.data.doctor.id}/${this.state.data.hospital.id}/bookdetails`);
    }

    navigateToVIP() {
        let profile = {};
        let number = '';
        let name = '';
        let city_id = '';
        if (this.state.data) {
            profile = this.state.data.profile;
            number = profile.phone_number;
            name = profile.name;
        }
        if (this.state.data.hospital) {
            city_id = this.state.data.hospital.matrix_city;
        }
        let lead_data = {};
        lead_data.source = 'AppointmentPaySuccess';
        lead_data.lead_source = 'AppointmentPaySuccess';
        lead_data.city_id = city_id;
        let extraParams = {};
        if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
            extraParams = this.props.common_utm_tags.filter(x => x.type == "common_xtra_tags")[0].utm_tags;
        }
        // this.props.generateVipClubLead('', number,lead_data, this.props.selectedLocation, name, extraParams)

        this.props.generateVipClubLead({ selectedPlan: '', number: number, lead_data: lead_data, selectedLocation: this.props.selectedLocation, user_name: name, extraParams: extraParams,
            cb: resp => {}
        });
        let analyticData = {
            'Category': 'ConsumerApp', 'Action': 'VipKnowMoreClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': '', 'event': 'vip-know-more-clicked', city_id: city_id
        };
        _gtm2.default.sendEvent({ data: analyticData });
        this.props.clearVipSelectedPlan();
        this.props.history.push('/vip-club-details?source=appointment-success-page&lead_source=Docprime');
    }

    navigateToSBI() {
        window.open('http://13.235.199.36/webcore/docprimecallback', '_blank');
    }

    render() {

        let doctor = {};
        let profile = {};
        let hospital = {};
        let date = new Date();
        let actions = [];
        let status = 1;
        let doctor_thumbnail = "";
        let payment_type = 1;
        let mrp = 0;
        let deal_price = 0;
        let discount = 0;
        let paymentMode = '';
        let effective_price = 0;
        let is_vip_member = false;
        let covered_under_vip = false;
        let vip_amount = 0;
        let is_gold_vip = 0;
        let vip_convenient_price = 0;
        let cod_discounted_price = 0;
        if (this.state.data) {
            doctor = this.state.data.doctor;
            hospital = this.state.data.hospital;
            profile = this.state.data.profile;
            date = this.state.data.time_slot_start ? new Date(this.state.data.time_slot_start) : new Date();
            actions = this.state.data.allowed_action || [];
            status = this.state.data.status;
            doctor_thumbnail = this.state.data.doctor_thumbnail;
            payment_type = this.state.data.payment_type;
            mrp = this.state.data.mrp;
            deal_price = this.state.data.deal_price;
            effective_price = this.state.data.effective_price;
            is_vip_member = this.state.data.vip.is_vip_member;
            covered_under_vip = this.state.data.vip.covered_under_vip;
            vip_amount = this.state.data.vip.vip_amount;
            is_gold_vip = this.state.data.vip.is_gold_member;
            vip_convenient_price = this.state.data.vip.extra_charge;
            cod_discounted_price = this.state.data.discount;
        }

        let summary_utm_tag = "";
        if (this.state.data && this.props.summary_utm && this.props.summary_utm_validity) {
            if (new Date(this.props.summary_utm_validity) > new Date()) {
                let src = `https://cplcps.com/p.ashx?o=116216&e=4531&f=img&t=${this.state.data.id}`;
                summary_utm_tag = _react2.default.createElement('img', { src: src, width: '1', height: '1', border: '0' });
            }
        }

        if (payment_type == 2) {
            discount = parseInt(cod_discounted_price);
        } else {
            discount = mrp - effective_price;
        }
        if (!is_vip_member && !covered_under_vip) {
            if (payment_type == 1) {
                paymentMode = 'Online';
            } else if (payment_type == 2) {
                paymentMode = 'Cash';
            } else if (payment_type == 3) {
                paymentMode = 'Insurance';
            } else if (payment_type == 4) {
                paymentMode = 'Docprime Care';
            }
        }
        if (is_vip_member && covered_under_vip) {
            paymentMode = 'Docprime VIP Member';
        }

        if (is_gold_vip) {
            paymentMode = 'Docprime Gold Member';
        }
        let docprime_gold_price = 0;
        let total_amount_payable = 0;
        if (is_vip_member || is_gold_vip) {
            docprime_gold_price = parseInt(mrp) - (parseInt(vip_convenient_price) + parseInt(vip_amount));
            discount = parseInt(vip_amount) + parseInt(vip_convenient_price) - effective_price;
            total_amount_payable = parseInt(mrp) - (docprime_gold_price + discount);
        }

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            summary_utm_tag,
            this.state.isCompleted ? _react2.default.createElement(_RatingsPopUp2.default, this.props) : '',
            _react2.default.createElement(_DesktopProfileHeader2.default, null),
            this.state.showPopup ? _react2.default.createElement(
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
                            { className: 'widget-content padiing-srch-el' },
                            _react2.default.createElement(
                                'p',
                                { className: 'srch-el-conent' },
                                'Are you sure you want to complete this appointment?'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'search-el-btn-container' },
                                _react2.default.createElement(
                                    'button',
                                    { onClick: () => this.popupBtnClick(true) },
                                    'Yes'
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { onClick: () => this.popupBtnClick(false) },
                                    'No'
                                )
                            )
                        )
                    )
                )
            ) : '',
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
                                { className: 'container-fluid cardMainPaddingRmv' },
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
                                        this.state.data.status == 7 && this.state.data.is_rated === false ? _react2.default.createElement(_RatingProfileCard2.default, _extends({}, this.props, { booking_flag: true, details: this.state.data })) : "",
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
                                                    'Share this code with doctor at the time of your appointment'
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
                                                    'We are waiting for the confirmation from the doctor and we will get back to you shortly.'
                                                )
                                            )
                                        ) : "",
                                        payment_type == 2 && status < 6 ? _react2.default.createElement(
                                            'div',
                                            { className: 'payAtclinic' },
                                            _react2.default.createElement(
                                                'h5',
                                                null,
                                                'Pay at clinic'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Please pay ',
                                                _react2.default.createElement(
                                                    'b',
                                                    null,
                                                    '\u20B9 ',
                                                    parseInt(deal_price) - parseInt(cod_discounted_price)
                                                ),
                                                ' at the time of appointment'
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
                                                    { className: 'fw-500 text-md' },
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
                                                actions.indexOf(6) > -1 && !this.state.hide_button ? _react2.default.createElement(
                                                    'a',
                                                    { onClick: this.toggleCancel.bind(this), href: '#', className: 'text-primary fw-700 text-sm' },
                                                    'Cancel Booking'
                                                ) : "",
                                                _storage2.default.checkAuth() && this.props.profiles && this.props.profiles[this.props.defaultProfile] && this.props.profiles[this.props.defaultProfile].is_vip_member || is_gold_vip || payment_type == 3 ? '' : status != 6 && status != 7 && _react2.default.createElement(
                                                    'div',
                                                    { className: 'vip-content-book' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'You could have saved ',
                                                            _react2.default.createElement(
                                                                'b',
                                                                null,
                                                                '70%'
                                                            ),
                                                            ' on this booking'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'if you were a Docprime ',
                                                            _react2.default.createElement('img', { src: "/assets" + '/img/viplog.png' }),
                                                            ' Member!'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'button',
                                                        { onClick: () => this.navigateToVIP() },
                                                        'Know more'
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'widget mrb-10' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content bokng-card pb-location' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    { className: 'wc-title text-md fw-700 card-nm-ovrlpng' },
                                                    doctor.display_name
                                                ),
                                                _react2.default.createElement(
                                                    _initialsPicture2.default,
                                                    { name: doctor.name, has_image: !!doctor_thumbnail, className: 'initialsPicture-ds', style: { float: 'right' }, onClick: this.navigateTo.bind(this, `/opd/doctor/${doctor.id}`) },
                                                    _react2.default.createElement('img', { src: doctor_thumbnail, style: { width: 50 }, className: 'img-fluid add-map img-round crd-doc-img' })
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'address-details' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'add-info fw-500' },
                                                        this.getQualificationStr(doctor.general_specialization || [])
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content  pb-location' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    { className: 'wc-title text-md fw-700 card-nm-ovrlpng' },
                                                    hospital.name
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'address-details' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'add-info fw-500' },
                                                        hospital.address
                                                    )
                                                ),
                                                status == 6 || status == 7 ? _react2.default.createElement(
                                                    'button',
                                                    { className: 'rebook-btn', onClick: this.goToBookingPage.bind(this) },
                                                    'Rebook Appointment'
                                                ) : ''
                                            ),
                                            this.state.data && this.state.data.procedures && this.state.data.procedures.length ? _react2.default.createElement(
                                                'div',
                                                { className: 'widget-content pb-details pb-location' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    { className: 'title', style: { fontSize: 14 } },
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/teeth.svg", className: 'visit-time-icon', style: { width: 17, marginRight: 8 } })
                                                    ),
                                                    'Services Included'
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pb-view text-left proc-para-margin' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Doctor consultation '
                                                    ),
                                                    this.state.data.procedures.map(procedure => {
                                                        return _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            procedure.name
                                                        );
                                                    })
                                                )
                                            ) : ''
                                        ),
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
                                                            _react2.default.createElement('img', { style: { marginRight: '10px' }, className: 'visit-time-icon', src: "/assets" + "/img/watch-date.svg" })
                                                        ),
                                                        'Clinic Visit Time',
                                                        actions.indexOf(4) > -1 && new Date(date).getTime() > new Date().getTime() ? _react2.default.createElement(
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
                                                        date.toDateString(),
                                                        ' | ',
                                                        date.toLocaleTimeString()
                                                    )
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
                                                    'div',
                                                    { className: 'test-report' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'title' },
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            _react2.default.createElement('img', { className: 'visit-time-icon', src: "/assets" + "/img/nw-usr.svg", style: {
                                                                    width: 16, marginRight: 5, verticalAlign: -3
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
                                                    is_vip_member && covered_under_vip && !is_gold_vip ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'd-flex justify-content-between align-items-center mrb-10' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500', style: { color: 'green' } },
                                                            'Docprime VIP Member ',
                                                            _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/viplog.png' })
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500', style: { color: 'green' } },
                                                            '- \u20B9 ',
                                                            parseInt(mrp) - (parseInt(vip_amount) + discount)
                                                        )
                                                    ) : '',
                                                    is_gold_vip && _react2.default.createElement(
                                                        'div',
                                                        { className: 'd-flex justify-content-between align-items-center mrb-10' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500', style: { color: 'green' } },
                                                            ' Docprime Gold Member ',
                                                            _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/gold-sm.png' })
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500', style: { color: 'green' } },
                                                            '- \u20B9 ',
                                                            docprime_gold_price
                                                        )
                                                    ),
                                                    discount && payment_type != 3 /*&& !is_vip_member && !covered_under_vip && !is_gold_vip*/ ? _react2.default.createElement(
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
                                                            parseInt(deal_price) - parseInt(cod_discounted_price)
                                                        ) : is_gold_vip ? _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500' },
                                                            '\u20B9 ',
                                                            total_amount_payable
                                                        ) : is_vip_member && covered_under_vip ? _react2.default.createElement(
                                                            'p',
                                                            { className: 'fw-500' },
                                                            '\u20B9 ',
                                                            total_amount_payable
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
                                            { className: 'widget mrb-10' },
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
                                                                    ' ',
                                                                    this.state.data.user_referral_amt
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
                            status == 7 ? _react2.default.createElement(
                                'button',
                                { onClick: () => {
                                        this.props.history.push(`/user/opd/reports/${this.state.data.id}`);
                                    }, className: 'viewpresbtn' },
                                'View Prescription'
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
                        this.state.showCancel ? _react2.default.createElement(_cancelPopup2.default, { toggle: this.toggleCancel.bind(this), cancelAppointment: this.cancelAppointment.bind(this), comments: this.state.data && this.state.data.cancellation_reason ? this.state.data.cancellation_reason : [], showCommentReasons: payment_type == 3 || payment_type == 2 ? true : false }) : ""
                    ),
                    _react2.default.createElement(_RightBar2.default, { msgTemplate: 'gold_general_template' })
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, null)
        );
    }
}

exports.default = BookingView;

/***/ }),

/***/ "./dev/js/components/opd/booking/cancelPopup.js":
/*!******************************************************!*\
  !*** ./dev/js/components/opd/booking/cancelPopup.js ***!
  \******************************************************/
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
        e.stopPropagation();
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
                            _react2.default.createElement('img', { style: { width: 10 }, src: "/assets" + "/img/customer-icons/close-black.svg", className: 'img-fluid', onClick: e => this.props.toggle(e) })
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
                            _react2.default.createElement('img', { style: { width: 10 }, src: "/assets" + "/img/customer-icons/close-black.svg", className: 'img-fluid', onClick: e => this.props.toggle(e) })
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
exports.default = CancelPopUp;

/***/ }),

/***/ "./dev/js/containers/opd/Booking.js":
/*!******************************************!*\
  !*** ./dev/js/containers/opd/Booking.js ***!
  \******************************************/
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

var _BookingView = __webpack_require__(/*! ../../components/opd/booking/BookingView.js */ "./dev/js/components/opd/booking/BookingView.js");

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
        } else {
            this.props.history.push('/');
        }
        this.props.resetPkgCompare();
        _fcm2.default.getPermission();
    }

    render() {

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_BookingView2.default, this.props)
        );
    }
}

Booking.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    let { rescheduleSlot } = state.DOCTOR_SEARCH;

    let {
        summary_utm, summary_utm_validity, newNotification, notifications, rated_appoinments, profiles, selectedProfile, defaultProfile, common_utm_tags
    } = state.USER;
    const {
        selectedLocation

    } = state.SEARCH_CRITERIA_OPD;

    return {
        rescheduleSlot, newNotification, notifications, rated_appoinments, profiles, selectedProfile, summary_utm, summary_utm_validity, selectedLocation, defaultProfile, common_utm_tags
    };
};

const mapDispatchToProps = dispatch => {
    return {
        OTTLogin: (ott, user_id) => dispatch((0, _index.OTTLogin)(ott, user_id)),
        getOPDBookingSummary: (appointmentID, callback) => dispatch((0, _index.getOPDBookingSummary)(appointmentID, callback)),
        updateOPDAppointment: (appointmentData, callback) => dispatch((0, _index.updateOPDAppointment)(appointmentData, callback)),
        selectOpdTimeSLot: (slot, reschedule, appointmentId) => dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId)),
        retryPaymentOPD: (appointmentId, callback) => dispatch((0, _index.retryPaymentOPD)(appointmentId, callback)),
        getRatingCompliments: callback => dispatch((0, _index.getRatingCompliments)(callback)),
        createAppointmentRating: (appointmentData, callback) => dispatch((0, _index.createAppointmentRating)(appointmentData, callback)),
        updateAppointmentRating: (ratingData, callback) => dispatch((0, _index.updateAppointmentRating)(ratingData, callback)),
        closeAppointmentPopUp: (id, callback) => dispatch((0, _index.closeAppointmentPopUp)(id, callback)),
        getCartItems: () => dispatch((0, _index.getCartItems)()),
        getUnratedAppointment: callback => dispatch((0, _index.getUnratedAppointment)(callback)),
        closeAppointmentRating: (doctorId, callback) => dispatch((0, _index.closeAppointmentRating)(doctorId, callback)),
        editUserProfile: (profileData, profileId, cb) => dispatch((0, _index.editUserProfile)(profileData, profileId, cb)),
        resetPkgCompare: () => dispatch((0, _index.resetPkgCompare)()),
        generateVipClubLead: data => dispatch((0, _index.generateVipClubLead)(data))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Booking);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvYm9va2luZy9Cb29raW5nVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvYm9va2luZy9jYW5jZWxQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9vcGQvQm9va2luZy5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJTVEFUVVNfTUFQIiwiQ1JFQVRFRCIsIkJPT0tFRCIsIlJFU0NIRURVTEVEX0RPQ1RPUiIsIlJFU0NIRURVTEVEX1BBVElFTlQiLCJBQ0NFUFRFRCIsIkNBTkNFTEVEIiwiQ09NUExFVEVEIiwiQm9va2luZ1ZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJsb2FkaW5nIiwic2hvd0NhbmNlbCIsInBheW1lbnRfc3VjY2VzcyIsImxvY2F0aW9uIiwic2VhcmNoIiwiaW5jbHVkZXMiLCJoaWRlX2J1dHRvbiIsImlzQ29tcGxldGVkIiwic2hvd1BvcHVwIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZXNjaGVkdWxlU2xvdCIsImRhdGUiLCJzZWxlY3RPcGRUaW1lU0xvdCIsInRpbWUiLCJwYXJzZWQiLCJwYXJzZSIsInNtc0NvbXBsZXRlIiwiY29tcGxldGUiLCJhcHBvaW50bWVudElkIiwibWF0Y2giLCJwYXJhbXMiLCJyZWZJZCIsImdldE9QREJvb2tpbmdTdW1tYXJ5IiwiZXJyIiwic2V0U3RhdGUiLCJzdGF0dXMiLCJpbmZvIiwicHVzaCIsImxlbmd0aCIsIm1ycCIsImRlYWxfcHJpY2UiLCJKU09OIiwic3RyaW5naWZ5IiwiaXNfZ29sZF91c2VyIiwiZ29sZCIsIk9iamVjdCIsImtleXMiLCJpc19nb2xkIiwiU1RPUkFHRSIsInNldEFwcG9pbnRtZW50RGV0YWlscyIsInRoZW4iLCJzZXRDb29raWUiLCJhbmFseXRpY0RhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJ2aXBCb29rZWREYXRhIiwiY3JpdGVvX2RhdGEiLCJDUklURU8iLCJzZW5kRGF0YSIsImhpc3RvcnkiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImdldEFwcG9pbnRtZW50IiwiYXBwb2ludG1lbnREYXRhIiwiaWQiLCJ1cGRhdGVPUERBcHBvaW50bWVudCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJnZXRRdWFsaWZpY2F0aW9uU3RyIiwicXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uIiwicmVkdWNlIiwic3RyIiwiY3VyciIsImkiLCJuYW1lIiwiY2FuY2VsQXBwb2ludG1lbnQiLCJjYW5jZWxEYXRhIiwiY2FuY2VsU3RhdHVzIiwicmVmdW5kIiwiY2FuY2VsbGF0aW9uX2NvbW1lbnQiLCJjYW5jZWxUZXh0IiwiY2FuY2VsbGF0aW9uX3JlYXNvbiIsImNhbmNlbElkIiwidG9nZ2xlQ2FuY2VsIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZ29Ub1Nsb3RTZWxlY3RvciIsImRvY3RvciIsImhvc3BpdGFsIiwibmF2aWdhdGVUbyIsIndoZXJlIiwicG9wdXBCdG5DbGljayIsImZsYWciLCJnb1RvQm9va2luZ1BhZ2UiLCJuYXZpZ2F0ZVRvVklQIiwicHJvZmlsZSIsIm51bWJlciIsImNpdHlfaWQiLCJwaG9uZV9udW1iZXIiLCJtYXRyaXhfY2l0eSIsImxlYWRfZGF0YSIsInNvdXJjZSIsImxlYWRfc291cmNlIiwiZXh0cmFQYXJhbXMiLCJjb21tb25fdXRtX3RhZ3MiLCJmaWx0ZXIiLCJ4IiwidHlwZSIsInV0bV90YWdzIiwiZ2VuZXJhdGVWaXBDbHViTGVhZCIsInNlbGVjdGVkUGxhbiIsInNlbGVjdGVkTG9jYXRpb24iLCJ1c2VyX25hbWUiLCJjYiIsInJlc3AiLCJjbGVhclZpcFNlbGVjdGVkUGxhbiIsIm5hdmlnYXRlVG9TQkkiLCJvcGVuIiwicmVuZGVyIiwiRGF0ZSIsImFjdGlvbnMiLCJkb2N0b3JfdGh1bWJuYWlsIiwicGF5bWVudF90eXBlIiwiZGlzY291bnQiLCJwYXltZW50TW9kZSIsImVmZmVjdGl2ZV9wcmljZSIsImlzX3ZpcF9tZW1iZXIiLCJjb3ZlcmVkX3VuZGVyX3ZpcCIsInZpcF9hbW91bnQiLCJpc19nb2xkX3ZpcCIsInZpcF9jb252ZW5pZW50X3ByaWNlIiwiY29kX2Rpc2NvdW50ZWRfcHJpY2UiLCJ0aW1lX3Nsb3Rfc3RhcnQiLCJhbGxvd2VkX2FjdGlvbiIsInZpcCIsImlzX2dvbGRfbWVtYmVyIiwiZXh0cmFfY2hhcmdlIiwic3VtbWFyeV91dG1fdGFnIiwic3VtbWFyeV91dG0iLCJzdW1tYXJ5X3V0bV92YWxpZGl0eSIsInNyYyIsInBhcnNlSW50IiwiZG9jcHJpbWVfZ29sZF9wcmljZSIsInRvdGFsX2Ftb3VudF9wYXlhYmxlIiwidGV4dEFsaWduIiwiaXNfcmF0ZWQiLCJvdHAiLCJpbmRleE9mIiwiYmluZCIsImNoZWNrQXV0aCIsInByb2ZpbGVzIiwiZGVmYXVsdFByb2ZpbGUiLCJBU1NFVFNfQkFTRV9VUkwiLCJkaXNwbGF5X25hbWUiLCJmbG9hdCIsIndpZHRoIiwiZ2VuZXJhbF9zcGVjaWFsaXphdGlvbiIsImFkZHJlc3MiLCJwcm9jZWR1cmVzIiwiZm9udFNpemUiLCJtYXJnaW5SaWdodCIsIm1hcCIsInByb2NlZHVyZSIsImdldFRpbWUiLCJ0b0RhdGVTdHJpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJ2ZXJ0aWNhbEFsaWduIiwiZW1haWwiLCJjb2xvciIsInBhZGRpbmdUb3AiLCJib3hTaXppbmciLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJ1c2VyX3JlZmVycmFsX2FtdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJhcHBvaW50bWVudF92aWFfc2JpIiwiQ2FuY2VsUG9wVXAiLCJzaG93Q29tbWVudFJlYXNvbnMiLCJzZWxlY3RlZENhbmNlbFJlYXNvbklkIiwic3VibWl0Q2xpY2tlZCIsIm90aGVyUmVhc29uIiwiY29tbWVudHMiLCJzZXRUaW1lb3V0IiwiaXNfY29tbWVudF9uZWVkZWQiLCJoYW5kbGVJbnB1dEhhbmRsZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm90aGVyVHlwZSIsInRvZ2dsZSIsInJlYXNvbnMiLCJrZXkiLCJCb29raW5nIiwiZ2V0Q2FydEl0ZW1zIiwicmVzZXRQa2dDb21wYXJlIiwiRkNNIiwiZ2V0UGVybWlzc2lvbiIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIkRPQ1RPUl9TRUFSQ0giLCJuZXdOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25zIiwicmF0ZWRfYXBwb2lubWVudHMiLCJzZWxlY3RlZFByb2ZpbGUiLCJVU0VSIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiT1RUTG9naW4iLCJvdHQiLCJ1c2VyX2lkIiwiYXBwb2ludG1lbnRJRCIsImNhbGxiYWNrIiwic2xvdCIsInJlc2NoZWR1bGUiLCJyZXRyeVBheW1lbnRPUEQiLCJnZXRSYXRpbmdDb21wbGltZW50cyIsImNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nIiwidXBkYXRlQXBwb2ludG1lbnRSYXRpbmciLCJyYXRpbmdEYXRhIiwiY2xvc2VBcHBvaW50bWVudFBvcFVwIiwiZ2V0VW5yYXRlZEFwcG9pbnRtZW50IiwiY2xvc2VBcHBvaW50bWVudFJhdGluZyIsImRvY3RvcklkIiwiZWRpdFVzZXJQcm9maWxlIiwicHJvZmlsZURhdGEiLCJwcm9maWxlSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUhBLE1BQU1BLGNBQWNDLG1CQUFPQSxD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ZG5CO0FBZUh0Ryw2QkFBcUIxRyxJQUFELElBQVNnTixTQUFTLGdDQUFvQmhOLElBQXBCLENBQVQ7QUFmMUIsS0FBUDtBQWlCSCxDQWxCRDs7a0JBcUJlLHlCQUFRdU0sZUFBUixFQUF5QlEsa0JBQXpCLEVBQTZDZixPQUE3QyxDIiwiZmlsZSI6IjEwOC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBSYXRpbmdQcm9maWxlQ2FyZCBmcm9tICcuLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdQcm9maWxlQ2FyZC5qcydcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDYW5jZWxQb3B1cCBmcm9tICcuL2NhbmNlbFBvcHVwLmpzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBDUklURU8gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9jcml0ZW8uanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgUmF0aW5nc1BvcFVwIGZyb20gJy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ3NQb3BVcC5qcydcbmltcG9ydCBXaGF0c0FwcE9wdGluVmlldyBmcm9tICcuLi8uLi9jb21tb25zL1doYXRzQXBwT3B0aW4vV2hhdHNBcHBPcHRpblZpZXcuanMnXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY29uc3QgU1RBVFVTX01BUCA9IHtcbiAgICBDUkVBVEVEOiAxLFxuICAgIEJPT0tFRDogMixcbiAgICBSRVNDSEVEVUxFRF9ET0NUT1I6IDMsXG4gICAgUkVTQ0hFRFVMRURfUEFUSUVOVDogNCxcbiAgICBBQ0NFUFRFRDogNSxcbiAgICBDQU5DRUxFRDogNixcbiAgICBDT01QTEVURUQ6IDcsXG59XG5cbmNsYXNzIEJvb2tpbmdWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICBwYXltZW50X3N1Y2Nlc3M6IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdwYXltZW50X3N1Y2Nlc3MnKSxcbiAgICAgICAgICAgIGhpZGVfYnV0dG9uOiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygncGF5bWVudF9zdWNjZXNzJykgfHwgdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2hpZGVfYnV0dG9uJyksXG4gICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICBzaG93UG9wdXA6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gcmVzZXQgcmVzY2hlZHVsZSBkYXRhXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJlc2NoZWR1bGVTbG90ICYmIHRoaXMucHJvcHMucmVzY2hlZHVsZVNsb3QuZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RPcGRUaW1lU0xvdCh7IHRpbWU6IHt9IH0sIHRydWUsIG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBzbXNDb21wbGV0ZSA9IHBhcnNlZC5jb21wbGV0ZVxuICAgICAgICBsZXQgYXBwb2ludG1lbnRJZCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnJlZklkO1xuICAgICAgICB0aGlzLnByb3BzLmdldE9QREJvb2tpbmdTdW1tYXJ5KGFwcG9pbnRtZW50SWQsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGFbMF0sIGxvYWRpbmc6IGZhbHNlIH0sICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc21zQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhWzBdLnN0YXR1cyAhPSA3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGxldCBpbmZvID0ge31cbiAgICAgICAgICAgICAgICBpbmZvW2FwcG9pbnRtZW50SWRdID0gW11cbiAgICAgICAgICAgICAgICBpbmZvW2FwcG9pbnRtZW50SWRdLnB1c2goeyAnYm9va2luZ19pZCc6IGFwcG9pbnRtZW50SWQsICdtcnAnOiBkYXRhLmxlbmd0aCA/IGRhdGFbMF0ubXJwIDogJycsICdkZWFsX3ByaWNlJzogZGF0YS5sZW5ndGggPyBkYXRhWzBdLmRlYWxfcHJpY2UgOiAnJyB9KVxuXG4gICAgICAgICAgICAgICAgaW5mbyA9IEpTT04uc3RyaW5naWZ5KGluZm8pXG4gICAgICAgICAgICAgICAgbGV0IGlzX2dvbGRfdXNlciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgaWYoZGF0YSAmJiBkYXRhLmxlbmd0aCAmJiBkYXRhWzBdLmdvbGQgJiYgT2JqZWN0LmtleXMoZGF0YVswXS5nb2xkKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBpc19nb2xkX3VzZXIgPSBkYXRhWzBdLmdvbGQuaXNfZ29sZCBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgU1RPUkFHRS5zZXRBcHBvaW50bWVudERldGFpbHMoaW5mbykudGhlbigoc2V0Q29va2llKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucGF5bWVudF9zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JBcHBvaW50bWVudEJvb2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogYXBwb2ludG1lbnRJZCwgJ2V2ZW50JzogJ2RvY3Rvci1hcHBvaW50bWVudC1ib29rZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0sIHRydWUsIGZhbHNlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc19nb2xkX3VzZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aXBCb29rZWREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3ZpcGJvb2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ZpcGJvb2tlZCcsICd1c2VyX2lkJzogR1RNLmdldFVzZXJJZCgpLCAnaXNfc2luZ2xlX2Zsb3cnOnRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IHZpcEJvb2tlZERhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNyaXRlb19kYXRhID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiBcInRyYWNrVHJhbnNhY3Rpb25cIiwgJ2lkJzogYXBwb2ludG1lbnRJZCwgJ2l0ZW0nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgJ2lkJzogXCIxXCIsICdwcmljZSc6IGRhdGEubGVuZ3RoID8gZGF0YVswXS5kZWFsX3ByaWNlIDogJycsICdxdWFudGl0eSc6IDEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQ1JJVEVPLnNlbmREYXRhKGNyaXRlb19kYXRhKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZSh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lICsgXCI/aGlkZV9idXR0b249dHJ1ZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogbnVsbCwgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFwcG9pbnRtZW50KHByb3BzKSB7XG4gICAgICAgIGNvbnN0IGFwcG9pbnRtZW50SWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZFxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGxldCBhcHBvaW50bWVudERhdGEgPSB7IGlkOiBhcHBvaW50bWVudElkLCBzdGF0dXM6IDcgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVPUERBcHBvaW50bWVudChhcHBvaW50bWVudERhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSwgaXNDb21wbGV0ZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJZb3VyIGFwcG9pbnRtZW50IGlzIGFscmVhZHkgY29tcGxldGVkLlwiIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UXVhbGlmaWNhdGlvblN0cihxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbi5yZWR1Y2UoKHN0ciwgY3VyciwgaSkgPT4ge1xuICAgICAgICAgICAgc3RyICs9IGAke2N1cnIubmFtZX1gXG4gICAgICAgICAgICBpZiAoaSA8IHF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbi5sZW5ndGggLSAxKSBzdHIgKz0gYCwgYDtcbiAgICAgICAgICAgIHJldHVybiBzdHJcbiAgICAgICAgfSwgXCJcIilcbiAgICB9XG5cbiAgICBjYW5jZWxBcHBvaW50bWVudChjYW5jZWxEYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBzaG93Q2FuY2VsOiBmYWxzZSB9KVxuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgaWYgKGNhbmNlbERhdGEuY2FuY2VsU3RhdHVzKSB7XG5cbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDYW5jZWxPcGRBcHBvaW50bWVudEFuZFJlZnVuZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NhbmNlbC1vcGQtYXBwb2ludG1lbnQtUmVmdW5kJywgJ2FwcG9pbnRtZW50SWQnOiB0aGlzLnN0YXRlLmRhdGEuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NhbmNlbE9wZEFwcG9pbnRtZW50QW5kQm9va05ldycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NhbmNlbC1vcGQtYXBwb2ludG1lbnQtQm9vay1OZXcnLCAnYXBwb2ludG1lbnRJZCc6IHRoaXMuc3RhdGUuZGF0YS5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBsZXQgYXBwb2ludG1lbnREYXRhID0geyBpZDogdGhpcy5zdGF0ZS5kYXRhLmlkLCBzdGF0dXM6IDYsIHJlZnVuZDogY2FuY2VsRGF0YS5jYW5jZWxTdGF0dXMsIGNhbmNlbGxhdGlvbl9jb21tZW50OiBjYW5jZWxEYXRhLmNhbmNlbFRleHQsIGNhbmNlbGxhdGlvbl9yZWFzb246IGNhbmNlbERhdGEuY2FuY2VsSWQgfVxuXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlT1BEQXBwb2ludG1lbnQoYXBwb2ludG1lbnREYXRhLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhLCBsb2FkaW5nOiBmYWxzZSwgc2hvd0NhbmNlbDogZmFsc2UgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBzaG93Q2FuY2VsOiBmYWxzZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZUNhbmNlbChlKSB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDYW5jZWw6ICF0aGlzLnN0YXRlLnNob3dDYW5jZWwgfSlcbiAgICB9XG5cbiAgICBnb1RvU2xvdFNlbGVjdG9yKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7dGhpcy5zdGF0ZS5kYXRhLmRvY3Rvci5pZH0vJHt0aGlzLnN0YXRlLmRhdGEuaG9zcGl0YWwuaWR9L2Jvb2s/cmVzY2hlZHVsZT0ke3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLnJlZklkfSZ0eXBlPW9wZGApXG4gICAgfVxuXG4gICAgbmF2aWdhdGVUbyh3aGVyZSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh3aGVyZSlcbiAgICB9XG5cbiAgICBwb3B1cEJ0bkNsaWNrKGZsYWcpIHtcbiAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXBwb2ludG1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiBmYWxzZSB9KVxuICAgIH1cblxuICAgIGdvVG9Cb29raW5nUGFnZSgpIHtcbiAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUmVib29rRG9jdG9yQXBwb2ludG1lbnRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAnJywgJ2V2ZW50JzogJ3JlYm9vay1kb2N0b3ItYXBwb2ludG1lbnQtY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke3RoaXMuc3RhdGUuZGF0YS5kb2N0b3IuaWR9LyR7dGhpcy5zdGF0ZS5kYXRhLmhvc3BpdGFsLmlkfS9ib29rZGV0YWlsc2ApXG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb1ZJUCgpe1xuICAgICAgICBsZXQgcHJvZmlsZSA9IHt9XG4gICAgICAgIGxldCBudW1iZXIgPSAnJ1xuICAgICAgICBsZXQgbmFtZSA9ICcnXG4gICAgICAgIGxldCBjaXR5X2lkID0gJydcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSkge1xuICAgICAgICAgICAgcHJvZmlsZSA9IHRoaXMuc3RhdGUuZGF0YS5wcm9maWxlXG4gICAgICAgICAgICBudW1iZXIgPSBwcm9maWxlLnBob25lX251bWJlclxuICAgICAgICAgICAgbmFtZSA9IHByb2ZpbGUubmFtZVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZGF0YS5ob3NwaXRhbCl7XG4gICAgICAgICAgICBjaXR5X2lkICA9IHRoaXMuc3RhdGUuZGF0YS5ob3NwaXRhbC5tYXRyaXhfY2l0eVxuICAgICAgICB9XG4gICAgICAgIGxldCBsZWFkX2RhdGEgPXt9XG4gICAgICAgIGxlYWRfZGF0YS5zb3VyY2UgPSAnQXBwb2ludG1lbnRQYXlTdWNjZXNzJ1xuICAgICAgICBsZWFkX2RhdGEubGVhZF9zb3VyY2U9ICdBcHBvaW50bWVudFBheVN1Y2Nlc3MnXG4gICAgICAgIGxlYWRfZGF0YS5jaXR5X2lkID0gY2l0eV9pZFxuICAgICAgICBsZXQgZXh0cmFQYXJhbXMgPSB7fVxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBleHRyYVBhcmFtcyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4PT54LnR5cGUgPT0gXCJjb21tb25feHRyYV90YWdzXCIpWzBdLnV0bV90YWdzXG4gICAgICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMucHJvcHMuZ2VuZXJhdGVWaXBDbHViTGVhZCgnJywgbnVtYmVyLGxlYWRfZGF0YSwgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLCBuYW1lLCBleHRyYVBhcmFtcylcblxuICAgICAgICB0aGlzLnByb3BzLmdlbmVyYXRlVmlwQ2x1YkxlYWQoe3NlbGVjdGVkUGxhbjonJywgbnVtYmVyOm51bWJlciwgbGVhZF9kYXRhOmxlYWRfZGF0YSwgc2VsZWN0ZWRMb2NhdGlvbjp0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24sIHVzZXJfbmFtZTpuYW1lLCBleHRyYVBhcmFtczpleHRyYVBhcmFtcyxcbiAgICAgICAgICAgIGNiOiAocmVzcCkgPT4ge1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdWaXBLbm93TW9yZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6ICcnLCAnZXZlbnQnOiAndmlwLWtub3ctbW9yZS1jbGlja2VkJyxjaXR5X2lkOiBjaXR5X2lkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1kZXRhaWxzP3NvdXJjZT1hcHBvaW50bWVudC1zdWNjZXNzLXBhZ2UmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9TQkkoKXtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly8xMy4yMzUuMTk5LjM2L3dlYmNvcmUvZG9jcHJpbWVjYWxsYmFjaycsICdfYmxhbmsnKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBkb2N0b3IgPSB7fVxuICAgICAgICBsZXQgcHJvZmlsZSA9IHt9XG4gICAgICAgIGxldCBob3NwaXRhbCA9IHt9XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXG4gICAgICAgIGxldCBzdGF0dXMgPSAxXG4gICAgICAgIGxldCBkb2N0b3JfdGh1bWJuYWlsID0gXCJcIlxuICAgICAgICBsZXQgcGF5bWVudF90eXBlID0gMVxuICAgICAgICBsZXQgbXJwID0gMFxuICAgICAgICBsZXQgZGVhbF9wcmljZSA9IDBcbiAgICAgICAgbGV0IGRpc2NvdW50ID0gMFxuICAgICAgICBsZXQgcGF5bWVudE1vZGUgPSAnJ1xuICAgICAgICBsZXQgZWZmZWN0aXZlX3ByaWNlID0gMFxuICAgICAgICBsZXQgaXNfdmlwX21lbWJlciA9IGZhbHNlXG4gICAgICAgIGxldCBjb3ZlcmVkX3VuZGVyX3ZpcCA9IGZhbHNlXG4gICAgICAgIGxldCB2aXBfYW1vdW50ID0gMFxuICAgICAgICBsZXQgaXNfZ29sZF92aXAgPSAwXG4gICAgICAgIGxldCB2aXBfY29udmVuaWVudF9wcmljZSA9IDBcbiAgICAgICAgbGV0IGNvZF9kaXNjb3VudGVkX3ByaWNlID0gMFxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhKSB7XG4gICAgICAgICAgICBkb2N0b3IgPSB0aGlzLnN0YXRlLmRhdGEuZG9jdG9yXG4gICAgICAgICAgICBob3NwaXRhbCA9IHRoaXMuc3RhdGUuZGF0YS5ob3NwaXRhbFxuICAgICAgICAgICAgcHJvZmlsZSA9IHRoaXMuc3RhdGUuZGF0YS5wcm9maWxlXG4gICAgICAgICAgICBkYXRlID0gdGhpcy5zdGF0ZS5kYXRhLnRpbWVfc2xvdF9zdGFydCA/IG5ldyBEYXRlKHRoaXMuc3RhdGUuZGF0YS50aW1lX3Nsb3Rfc3RhcnQpIDogbmV3IERhdGUoKVxuICAgICAgICAgICAgYWN0aW9ucyA9IHRoaXMuc3RhdGUuZGF0YS5hbGxvd2VkX2FjdGlvbiB8fCBbXVxuICAgICAgICAgICAgc3RhdHVzID0gdGhpcy5zdGF0ZS5kYXRhLnN0YXR1c1xuICAgICAgICAgICAgZG9jdG9yX3RodW1ibmFpbCA9IHRoaXMuc3RhdGUuZGF0YS5kb2N0b3JfdGh1bWJuYWlsXG4gICAgICAgICAgICBwYXltZW50X3R5cGUgPSB0aGlzLnN0YXRlLmRhdGEucGF5bWVudF90eXBlXG4gICAgICAgICAgICBtcnAgPSB0aGlzLnN0YXRlLmRhdGEubXJwXG4gICAgICAgICAgICBkZWFsX3ByaWNlID0gdGhpcy5zdGF0ZS5kYXRhLmRlYWxfcHJpY2VcbiAgICAgICAgICAgIGVmZmVjdGl2ZV9wcmljZSA9IHRoaXMuc3RhdGUuZGF0YS5lZmZlY3RpdmVfcHJpY2VcbiAgICAgICAgICAgIGlzX3ZpcF9tZW1iZXIgPSB0aGlzLnN0YXRlLmRhdGEudmlwLmlzX3ZpcF9tZW1iZXJcbiAgICAgICAgICAgIGNvdmVyZWRfdW5kZXJfdmlwID0gdGhpcy5zdGF0ZS5kYXRhLnZpcC5jb3ZlcmVkX3VuZGVyX3ZpcFxuICAgICAgICAgICAgdmlwX2Ftb3VudCA9IHRoaXMuc3RhdGUuZGF0YS52aXAudmlwX2Ftb3VudFxuICAgICAgICAgICAgaXNfZ29sZF92aXAgPSB0aGlzLnN0YXRlLmRhdGEudmlwLmlzX2dvbGRfbWVtYmVyXG4gICAgICAgICAgICB2aXBfY29udmVuaWVudF9wcmljZSA9IHRoaXMuc3RhdGUuZGF0YS52aXAuZXh0cmFfY2hhcmdlXG4gICAgICAgICAgICBjb2RfZGlzY291bnRlZF9wcmljZSA9IHRoaXMuc3RhdGUuZGF0YS5kaXNjb3VudFxuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3VtbWFyeV91dG1fdGFnID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMucHJvcHMuc3VtbWFyeV91dG0gJiYgdGhpcy5wcm9wcy5zdW1tYXJ5X3V0bV92YWxpZGl0eSkge1xuICAgICAgICAgICAgaWYgKChuZXcgRGF0ZSh0aGlzLnByb3BzLnN1bW1hcnlfdXRtX3ZhbGlkaXR5KSkgPiAobmV3IERhdGUoKSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3JjID0gYGh0dHBzOi8vY3BsY3BzLmNvbS9wLmFzaHg/bz0xMTYyMTYmZT00NTMxJmY9aW1nJnQ9JHt0aGlzLnN0YXRlLmRhdGEuaWR9YFxuICAgICAgICAgICAgICAgIHN1bW1hcnlfdXRtX3RhZyA9IDxpbWcgc3JjPXtzcmN9IHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIiBib3JkZXI9XCIwXCIgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXltZW50X3R5cGUgPT0gMikge1xuICAgICAgICAgICAgZGlzY291bnQgPSBwYXJzZUludChjb2RfZGlzY291bnRlZF9wcmljZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc2NvdW50ID0gbXJwIC0gZWZmZWN0aXZlX3ByaWNlXG4gICAgICAgIH1cbiAgICAgICAgaWYoIWlzX3ZpcF9tZW1iZXIgJiYgIWNvdmVyZWRfdW5kZXJfdmlwKXtcbiAgICAgICAgICAgIGlmIChwYXltZW50X3R5cGUgPT0gMSkge1xuICAgICAgICAgICAgICAgIHBheW1lbnRNb2RlID0gJ09ubGluZSdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGF5bWVudF90eXBlID09IDIpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TW9kZSA9ICdDYXNoJ1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXltZW50X3R5cGUgPT0gMykge1xuICAgICAgICAgICAgICAgIHBheW1lbnRNb2RlID0gJ0luc3VyYW5jZSdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGF5bWVudF90eXBlID09IDQpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TW9kZSA9ICdEb2NwcmltZSBDYXJlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGlzX3ZpcF9tZW1iZXIgJiYgY292ZXJlZF91bmRlcl92aXApe1xuICAgICAgICAgICAgcGF5bWVudE1vZGUgPSAnRG9jcHJpbWUgVklQIE1lbWJlcidcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzX2dvbGRfdmlwKSB7XG4gICAgICAgICAgICBwYXltZW50TW9kZSA9ICdEb2NwcmltZSBHb2xkIE1lbWJlcidcbiAgICAgICAgfVxuICAgICAgICBsZXQgZG9jcHJpbWVfZ29sZF9wcmljZSA9IDBcbiAgICAgICAgbGV0IHRvdGFsX2Ftb3VudF9wYXlhYmxlID0gMFxuICAgICAgICBpZihpc192aXBfbWVtYmVyIHx8IGlzX2dvbGRfdmlwKSB7XG4gICAgICAgICAgICBkb2NwcmltZV9nb2xkX3ByaWNlID0gcGFyc2VJbnQobXJwKSAtKHBhcnNlSW50KHZpcF9jb252ZW5pZW50X3ByaWNlKSArICBwYXJzZUludCh2aXBfYW1vdW50KSApXG4gICAgICAgICAgICBkaXNjb3VudCA9ICAgKHBhcnNlSW50KHZpcF9hbW91bnQpICsgcGFyc2VJbnQodmlwX2NvbnZlbmllbnRfcHJpY2UpICkgLSBlZmZlY3RpdmVfcHJpY2UgXG4gICAgICAgICAgICB0b3RhbF9hbW91bnRfcGF5YWJsZSA9IHBhcnNlSW50KG1ycCkgLSAoZG9jcHJpbWVfZ29sZF9wcmljZSArIGRpc2NvdW50KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIHtzdW1tYXJ5X3V0bV90YWd9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzQ29tcGxldGVkID8gPFJhdGluZ3NQb3BVcCB7Li4udGhpcy5wcm9wc30gLz4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXlcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkaWluZy1zcmNoLWVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY29tcGxldGUgdGhpcyBhcHBvaW50bWVudD88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucG9wdXBCdG5DbGljayh0cnVlKX0+WWVzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wb3B1cEJ0bkNsaWNrKGZhbHNlKX0+Tm88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgdGhpcy5zdGF0ZS5kYXRhKSA/IDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvb2tpbmctY29uZmlybS1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNhcmRNYWluUGFkZGluZ1JtdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaGF0c0FwcE9wdGluVmlldyB7Li4udGhpcy5wcm9wc30gcHJvZmlsZXM9e3Byb2ZpbGV9IGlzQXBwb2ludG1lbnQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLXRpbWVsaW5lIGJvb2stY29uZmlybWVkLXRpbWVsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPT0gNiA/IDxoNCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkFwcG9pbnRtZW50IENhbmNlbGxlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0YXR1cyA9PSAxID8gPGg0IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+QXBwb2ludG1lbnQgQ3JlYXRlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17KHN0YXR1cyA8PSA1IHx8IHN0YXR1cyA9PSA3KSA/IFwiYWN0aXZlXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZ3LTcwMCB0ZXh0LWxpZ2h0XCI+UmVjZWl2ZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyhzdGF0dXMgPT0gNSB8fCBzdGF0dXMgPT0gNykgPyBcImFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj4yPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmdy03MDAgdGV4dC1saWdodFwiPkNvbmZpcm1lZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3RhdHVzID09IDcgPyBcImFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj4zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmdy03MDAgdGV4dC1saWdodFwiPntzdGF0dXMgPT0gNiA/IFwiQ29tcGxldGVkXCIgOiBcIkNvbXBsZXRlZFwifTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEuc3RhdHVzID09IDcgJiYgdGhpcy5zdGF0ZS5kYXRhLmlzX3JhdGVkID09PSBmYWxzZSA/ICg8UmF0aW5nUHJvZmlsZUNhcmQgey4uLnRoaXMucHJvcHN9IGJvb2tpbmdfZmxhZz17dHJ1ZX0gZGV0YWlscz17dGhpcy5zdGF0ZS5kYXRhfSAvPikgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5kYXRhLm90cCAmJiBzdGF0dXMgPT0gNSkgPyA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgbXJiLTEwXCI+VW5pcXVlIENvbmZpcm1hdGlvbiBDb2RlOiA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZFwiPnt0aGlzLnN0YXRlLmRhdGEub3RwfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbGlnaHRcIj5TaGFyZSB0aGlzIGNvZGUgd2l0aCBkb2N0b3IgYXQgdGhlIHRpbWUgb2YgeW91ciBhcHBvaW50bWVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXltZW50X3N1Y2Nlc3MgPyA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgbXJiLTEwXCI+PHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtbWRcIj5UaGFua3MhIEFwcG9pbnRtZW50IFJlY2VpdmVkPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1saWdodFwiPldlIGFyZSB3YWl0aW5nIGZvciB0aGUgY29uZmlybWF0aW9uIGZyb20gdGhlIGRvY3RvciBhbmQgd2Ugd2lsbCBnZXQgYmFjayB0byB5b3Ugc2hvcnRseS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGNhcnQgcHJpY2UgZGVzaWduICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfdHlwZSA9PSAyICYmIHN0YXR1cyA8IDYgPyA8ZGl2IGNsYXNzTmFtZT1cInBheUF0Y2xpbmljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5QYXkgYXQgY2xpbmljPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIHBheSA8Yj7igrkge3BhcnNlSW50KGRlYWxfcHJpY2UpLSBwYXJzZUludChjb2RfZGlzY291bnRlZF9wcmljZSl9PC9iPiBhdCB0aGUgdGltZSBvZiBhcHBvaW50bWVudDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGNhcnQgcHJpY2UgZGVzaWduICovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWRcIj5Cb29raW5nIElEOiA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZFwiPnt0aGlzLnN0YXRlLmRhdGEuaWR9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWxpZ2h0XCI+RGV0YWlscyBoYXZlIGJlZW4gc2VudCB0byB5b3VyIGVtYWlsLWlkIGFuZCBtb2JpbGUgbnVtYmVyLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5pbmRleE9mKDYpID4gLTEgJiYgIXRoaXMuc3RhdGUuaGlkZV9idXR0b24gPyA8YSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNhbmNlbC5iaW5kKHRoaXMpfSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPkNhbmNlbCBCb29raW5nPC9hPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoU1RPUkFHRS5jaGVja0F1dGgoKSAmJiB0aGlzLnByb3BzLnByb2ZpbGVzICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0gJiYgdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc192aXBfbWVtYmVyIHx8IGlzX2dvbGRfdmlwIHx8IHBheW1lbnRfdHlwZT09Myk/Jyc6c3RhdHVzICE9IDYgJiYgc3RhdHVzICE9IDcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1jb250ZW50LWJvb2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjb3VsZCBoYXZlIHNhdmVkIDxiPjcwJTwvYj4gb24gdGhpcyBib29raW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5pZiB5b3Ugd2VyZSBhIERvY3ByaW1lIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gLz4gTWVtYmVyITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5uYXZpZ2F0ZVRvVklQKCl9Pktub3cgbW9yZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgYm9rbmctY2FyZCBwYi1sb2NhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2MtdGl0bGUgdGV4dC1tZCBmdy03MDAgY2FyZC1ubS1vdnJscG5nXCI+e2RvY3Rvci5kaXNwbGF5X25hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtkb2N0b3IubmFtZX0gaGFzX2ltYWdlPXshIWRvY3Rvcl90aHVtYm5haWx9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1kc1wiIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0J319IG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMsIGAvb3BkL2RvY3Rvci8ke2RvY3Rvci5pZH1gKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZG9jdG9yX3RodW1ibmFpbH0gc3R5bGU9e3sgd2lkdGg6IDUwIH19IGNsYXNzTmFtZT1cImltZy1mbHVpZCBhZGQtbWFwIGltZy1yb3VuZCBjcmQtZG9jLWltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3MtZGV0YWlsc1wiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZC1pbmZvIGZ3LTUwMFwiPnt0aGlzLmdldFF1YWxpZmljYXRpb25TdHIoZG9jdG9yLmdlbmVyYWxfc3BlY2lhbGl6YXRpb24gfHwgW10pfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCAgcGItbG9jYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndjLXRpdGxlIHRleHQtbWQgZnctNzAwIGNhcmQtbm0tb3ZybHBuZ1wiPntob3NwaXRhbC5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzcy1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21hcC1pY29uLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWQgYWRkLW1hcFwiIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhZGQtaW5mbyBmdy01MDBcIj57aG9zcGl0YWwuYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInBiLXZpZXcgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9JHtob3NwaXRhbC5sYXR9LCR7aG9zcGl0YWwubG9uZ31gfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rLXRleHQgdGV4dC1tZCBmdy03MDBcIj5WaWV3IGluIEdvb2dsZSBNYXA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPT0gNiB8fCBzdGF0dXMgPT0gNyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWJvb2stYnRuXCIgb25DbGljaz17dGhpcy5nb1RvQm9va2luZ1BhZ2UuYmluZCh0aGlzKX0+UmVib29rIEFwcG9pbnRtZW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnN0YXRlLmRhdGEucHJvY2VkdXJlcyAmJiB0aGlzLnN0YXRlLmRhdGEucHJvY2VkdXJlcy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYi1kZXRhaWxzIHBiLWxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19PjxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdGVldGguc3ZnXCJ9IGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIHN0eWxlPXt7IHdpZHRoOiAxNywgbWFyZ2luUmlnaHQ6IDggfX0gLz48L3NwYW4+U2VydmljZXMgSW5jbHVkZWQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItdmlldyB0ZXh0LWxlZnQgcHJvYy1wYXJhLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb2N0b3IgY29uc3VsdGF0aW9uIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLnByb2NlZHVyZXMubWFwKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHA+e3Byb2NlZHVyZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+PHNwYW4+PGltZyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnIH19IGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IC8+PC9zcGFuPkNsaW5pYyBWaXNpdCBUaW1lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhY3Rpb25zLmluZGV4T2YoNCkgPiAtMSkgJiYgKG5ldyBEYXRlKGRhdGUpLmdldFRpbWUoKSA+IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmdvVG9TbG90U2VsZWN0b3IuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPlJlc2NoZWR1bGUgVGltZTwvYT48L3NwYW4+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGUtdGltZSB0ZXN0LWxpc3QgZnctNTAwXCI+e2RhdGUudG9EYXRlU3RyaW5nKCl9IHwge2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtcmVwb3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj48c3Bhbj48aW1nIGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYsIG1hcmdpblJpZ2h0OiA1LCB2ZXJ0aWNhbEFsaWduOiAtM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz48L3NwYW4+UGF0aWVudCBEZXRhaWxzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlc3QtbGlzdCBmdy01MDBcIj57cHJvZmlsZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlc3QtbGlzdCBmdy01MDBcIj57cHJvZmlsZS5waG9uZV9udW1iZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVzdC1saXN0IGZ3LTUwMFwiPntwcm9maWxlLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyAhPT0gNiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1yZXBvcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+PHNwYW4+PGltZyBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ydXBlZWljb24ucG5nXCJ9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTYsIG1hcmdpblJpZ2h0OiA1LCB2ZXJ0aWNhbEFsaWduOiAtM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPjwvc3Bhbj5QYXltZW50IERldGFpbDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfdHlwZT09Mz8nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJyM3NTc1NzUnLCBwYWRkaW5nVG9wOiA0IH19Pk1SUDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj4mIzgzNzc7IHtwYXJzZUludChtcnApfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfdmlwX21lbWJlciAmJiBjb3ZlcmVkX3VuZGVyX3ZpcCAmJiAhaXNfZ29sZF92aXA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5Eb2NwcmltZSBWSVAgTWVtYmVyIDxpbWcgY2xhc3NOYW1lPVwidmlwLW1haW4taWNvIGltZy1mbHVpZFwic3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gLz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pi0gJiM4Mzc3OyB7cGFyc2VJbnQobXJwKSAtIChwYXJzZUludCh2aXBfYW1vdW50KSArIGRpc2NvdW50KX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19nb2xkX3ZpcCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PiBEb2NwcmltZSBHb2xkIE1lbWJlciA8aW1nIGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30vPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tICYjODM3Nzsge2RvY3ByaW1lX2dvbGRfcHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ICYmIHBheW1lbnRfdHlwZSE9MyAvKiYmICFpc192aXBfbWVtYmVyICYmICFjb3ZlcmVkX3VuZGVyX3ZpcCAmJiAhaXNfZ29sZF92aXAqLz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19PkRvY3ByaW1lIERpc2NvdW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tICYjODM3Nzsge3BhcnNlSW50KGRpc2NvdW50KX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X3R5cGU9PTM/Jyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgc3R5bGU9e3sgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIG1hcmdpbjogJzAgLTEycHggMTBweCAtMTJweCcsIGJhY2tncm91bmRDb2xvcjogJyNlZWVlZWUnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkFtb3VudCBQYXlhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRfdHlwZSA9PSAyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+JiM4Mzc3OyB7cGFyc2VJbnQoZGVhbF9wcmljZSktIHBhcnNlSW50KGNvZF9kaXNjb3VudGVkX3ByaWNlKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppc19nb2xkX3ZpcD88cCBjbGFzc05hbWU9XCJmdy01MDBcIj4mIzgzNzc7IHt0b3RhbF9hbW91bnRfcGF5YWJsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXNfdmlwX21lbWJlciAmJiBjb3ZlcmVkX3VuZGVyX3ZpcCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj4mIzgzNzc7IHt0b3RhbF9hbW91bnRfcGF5YWJsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+JiM4Mzc3OyB7cGFyc2VJbnQoZWZmZWN0aXZlX3ByaWNlKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNb2RlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+UGF5bWVudCBNb2RlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj57cGF5bWVudE1vZGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzIDw9IDUgPyA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1wcm9maWxlLWl0ZW1cIiBzdHlsZT17eyBjdXJzb3I6ICdhdXRvJyB9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9yZWZlcnJhbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzci1kdGxzLW9mZi1hY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2MtdGl0bGUgdGV4dC1tZCBmdy03MDAgY2FyZC1ubS1vdnJscG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3JlZmVyLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWQgIGltZy1mLTFcIiAvPlJlZmVyICZhbXA7IEVhcm48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZnItaW1nLXR4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1pbWctY29udFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvc3RlcC0yLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mci1jb250bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZC1pbmZvIGZ3LTUwMCBhZGQtaW5mby1wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52aXRlIHlvdXIgZnJpZW5kcyBvbiBkb2NwcmltZS5jb20gYW5kIGVhcm4gPGIgY2xhc3NOYW1lPVwiZnctNTAwIGRyay1ibGtcIj48aW1nIHN0eWxlPXt7IHdpZHRoOiAnOHB4JywgbWFyZ2luVG9wOiAnNHB4JywgbWFyZ2luUmlnaHQ6ICcwcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3J1cGVlLWljb24uc3ZnXCJ9IC8+IHt0aGlzLnN0YXRlLmRhdGEudXNlcl9yZWZlcnJhbF9hbXR9PC9iPiBvbiBjb21wbGV0aW9uIG9mIHRoZWlyIGZpcnN0IG9yZGVyIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMjBcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZ3LTUwMFwiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tZGFyay0tYWxsKWAgLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5Lbm93IG1vcmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9PSA3ID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdXNlci9vcGQvcmVwb3J0cy8ke3RoaXMuc3RhdGUuZGF0YS5pZH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInZpZXdwcmVzYnRuXCI+VmlldyBQcmVzY3JpcHRpb248L2J1dHRvbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5hcHBvaW50bWVudF92aWFfc2JpP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHN0aWNreS1idG4gcC0wIHYtYnRuICBidG4tbGcgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBidXR0b25zLWFkZGNhcnQtY29udGFpbmVyIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4tcHJpbWFyeSBib29rLWJ0bi1tcmduLWFkanVzdCBcIiBvbkNsaWNrPXsoKT0+e3RoaXMubmF2aWdhdGVUb1NCSSgpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gQmFjayBUbyBTQklHIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiA6IDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0NhbmNlbCA/IDxDYW5jZWxQb3B1cCB0b2dnbGU9e3RoaXMudG9nZ2xlQ2FuY2VsLmJpbmQodGhpcyl9IGNhbmNlbEFwcG9pbnRtZW50PXt0aGlzLmNhbmNlbEFwcG9pbnRtZW50LmJpbmQodGhpcyl9IGNvbW1lbnRzPXt0aGlzLnN0YXRlLmRhdGEgJiYgdGhpcy5zdGF0ZS5kYXRhLmNhbmNlbGxhdGlvbl9yZWFzb24gPyB0aGlzLnN0YXRlLmRhdGEuY2FuY2VsbGF0aW9uX3JlYXNvbiA6IFtdfSBzaG93Q29tbWVudFJlYXNvbnM9e3BheW1lbnRfdHlwZSA9PSAzIHx8IHBheW1lbnRfdHlwZSA9PSAyID8gdHJ1ZSA6IGZhbHNlfSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgbXNnVGVtcGxhdGU9XCJnb2xkX2dlbmVyYWxfdGVtcGxhdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIENhbmNlbFBvcFVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICAgICAgICBzaG93Q29tbWVudFJlYXNvbnM6IHRoaXMucHJvcHMuc2hvd0NvbW1lbnRSZWFzb25zLFxuICAgICAgICAgICAgc2VsZWN0ZWRDYW5jZWxSZWFzb25JZDogJycsXG4gICAgICAgICAgICBjYW5jZWxUZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbmNlbFN0YXR1czogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdENsaWNrZWQoZSl7XG5cbiAgICAgICAgbGV0IG90aGVyUmVhc29uID0gdGhpcy5wcm9wcy5jb21tZW50cy5maWx0ZXIoeD0+eC5pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2FuY2VsUmVhc29uSWQpXG4gICAgICAgIFxuICAgICAgICBpZighdGhpcy5zdGF0ZS5zZWxlY3RlZENhbmNlbFJlYXNvbklkKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHNlbGVjdCB2YWxpZCByZWFzb25cIiB9KVxuICAgICAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIH1lbHNlIGlmKCBvdGhlclJlYXNvbi5sZW5ndGggJiYgb3RoZXJSZWFzb25bMF0uaXNfY29tbWVudF9uZWVkZWQgJiYgIXRoaXMuc3RhdGUuY2FuY2VsVGV4dCl7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBlbnRlciBjb21tZW50XCIgfSlcbiAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgIGlmKG90aGVyUmVhc29uLmxlbmd0aCAmJiBvdGhlclJlYXNvblswXS5pc19jb21tZW50X25lZWRlZCl7XG4gICAgICAgICAgICAgICAgb3RoZXJSZWFzb24gPSB0aGlzLnN0YXRlLmNhbmNlbFRleHRcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG90aGVyUmVhc29uID0gJydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNhbmNlbERhdGEgPSB7XG4gICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogb3RoZXJSZWFzb24sXG4gICAgICAgICAgICAgICAgY2FuY2VsSWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWRDYW5jZWxSZWFzb25JZCxcbiAgICAgICAgICAgICAgICBjYW5jZWxTdGF0dXM6IHRoaXMuc3RhdGUuY2FuY2VsU3RhdHVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbmNlbEFwcG9pbnRtZW50KGNhbmNlbERhdGEpXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dEhhbmRsZXIoZSl7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2FuY2VsVGV4dDogZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQgb3RoZXJUeXBlID0gdGhpcy5wcm9wcy5jb21tZW50cy5maWx0ZXIoeD0+eC5pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2FuY2VsUmVhc29uSWQpXG4gICAgICAgIGlmKG90aGVyVHlwZS5sZW5ndGggJiYgb3RoZXJUeXBlWzBdLmlzX2NvbW1lbnRfbmVlZGVkKXtcbiAgICAgICAgICAgIG90aGVyVHlwZSA9IHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBvdGhlclR5cGUgPSBmYWxzZVxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93Q29tbWVudFJlYXNvbnM/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsUG9wdXBDb250YWluZXJPdmVybGF5XCIgb25DbGljaz17KGUpPT50aGlzLnByb3BzLnRvZ2dsZShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbFBvcHVwQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtSGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UmVhc29uIGZvciBDYW5jZWxsYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNuLWJ0bi1oZWFkXCI+PGltZyBzdHlsZT17eyB3aWR0aDogMTAgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvc2UtYmxhY2suc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIG9uQ2xpY2s9eyhlKT0+dGhpcy5wcm9wcy50b2dnbGUoZSl9Lz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC13aWQtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21tZW50cy5tYXAoKHJlYXNvbnMsIGtleSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtyZWFzb25zLmlkfSBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIiBvbkNsaWNrPXsoZSk9PntlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkQ2FuY2VsUmVhc29uSWQ6IHJlYXNvbnMuaWR9KSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZScsIGZvbnRTaXplOiAnaW5oZXJpdCcgfX0gPntyZWFzb25zLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZENhbmNlbFJlYXNvbklkID09IHJlYXNvbnMuaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJUeXBlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbGF0aW9uUmVzb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIldyaXRlIHJlYXNvbiBmb3IgY2FuY2VsbGF0aW9uXCIgb25DaGFuZ2UgPXt0aGlzLmhhbmRsZUlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBvbkNsaWNrPXsoZSk9PntlLnN0b3BQcm9wYWdhdGlvbigpfX0gdmFsdWU9e3RoaXMuc3RhdGUuY2FuY2VsVGV4dH0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbGF0aW9uQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz0ge3RoaXMuc3VibWl0Q2xpY2tlZC5iaW5kKHRoaXMpfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsUG9wdXBDb250YWluZXJPdmVybGF5XCIgb25DbGljaz17KGUpPT50aGlzLnByb3BzLnRvZ2dsZShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbFBvcHVwQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtSGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Q2FuY2VsIEFwcG9pbnRtZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbi1idG4taGVhZFwiPjxpbWcgc3R5bGU9e3t3aWR0aDogMTB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9jbG9zZS1ibGFjay5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgb25DbGljaz17KGUpPT50aGlzLnByb3BzLnRvZ2dsZShlKX0vPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY25jdC1zZWxlY3QtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge2Uuc3RvcFByb3BhZ2F0aW9uKCkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dDb21tZW50UmVhc29uczogdHJ1ZSwgY2FuY2VsU3RhdHVzOiAwfSkgfX0+Q2FuY2VsIGFuZCBSZWJvb2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge2Uuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0NvbW1lbnRSZWFzb25zOiB0cnVlLCBjYW5jZWxTdGF0dXM6IDF9KSB9fSA+Q2FuY2VsIGFuZCBSZWZ1bmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYW5jZWxQb3BVcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRDYXJ0SXRlbXMsIGdldE9QREJvb2tpbmdTdW1tYXJ5LCB1cGRhdGVPUERBcHBvaW50bWVudCwgc2VsZWN0T3BkVGltZVNMb3QsIHJldHJ5UGF5bWVudE9QRCwgZ2V0UmF0aW5nQ29tcGxpbWVudHMsIGNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nLCB1cGRhdGVBcHBvaW50bWVudFJhdGluZywgY2xvc2VBcHBvaW50bWVudFBvcFVwLE9UVExvZ2luLCBnZXRVbnJhdGVkQXBwb2ludG1lbnQsY2xvc2VBcHBvaW50bWVudFJhdGluZyxlZGl0VXNlclByb2ZpbGUsIHJlc2V0UGtnQ29tcGFyZSwgZ2VuZXJhdGVWaXBDbHViTGVhZH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBCb29raW5nVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL29wZC9ib29raW5nL0Jvb2tpbmdWaWV3LmpzJ1xuaW1wb3J0IEZDTSBmcm9tICcuLi8uLi9oZWxwZXJzL2ZjbSdcblxuY2xhc3MgQm9va2luZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldENhcnRJdGVtcygpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKVxuICAgICAgICB9IFxuICAgICAgICB0aGlzLnByb3BzLnJlc2V0UGtnQ29tcGFyZSgpXG4gICAgICAgIEZDTS5nZXRQZXJtaXNzaW9uKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJvb2tpbmdWaWV3IHsuLi50aGlzLnByb3BzfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBsZXQgeyByZXNjaGVkdWxlU2xvdCB9ID0gc3RhdGUuRE9DVE9SX1NFQVJDSFxuXG4gICAgbGV0IHtcbiAgICAgICAgc3VtbWFyeV91dG0sIHN1bW1hcnlfdXRtX3ZhbGlkaXR5LCBuZXdOb3RpZmljYXRpb24sIG5vdGlmaWNhdGlvbnMsIHJhdGVkX2FwcG9pbm1lbnRzLCBwcm9maWxlcywgc2VsZWN0ZWRQcm9maWxlLCBkZWZhdWx0UHJvZmlsZSwgY29tbW9uX3V0bV90YWdzXG4gICAgfSA9IHN0YXRlLlVTRVJcbiAgICBjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb25cblxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXNjaGVkdWxlU2xvdCwgbmV3Tm90aWZpY2F0aW9uLCBub3RpZmljYXRpb25zLCByYXRlZF9hcHBvaW5tZW50cywgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZSwgc3VtbWFyeV91dG0sIHN1bW1hcnlfdXRtX3ZhbGlkaXR5LCBzZWxlY3RlZExvY2F0aW9uLCBkZWZhdWx0UHJvZmlsZSwgY29tbW9uX3V0bV90YWdzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgT1RUTG9naW46IChvdHQsdXNlcl9pZCkgPT4gZGlzcGF0Y2goT1RUTG9naW4ob3R0LHVzZXJfaWQpKSxcbiAgICAgICAgZ2V0T1BEQm9va2luZ1N1bW1hcnk6IChhcHBvaW50bWVudElELCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0T1BEQm9va2luZ1N1bW1hcnkoYXBwb2ludG1lbnRJRCwgY2FsbGJhY2spKSxcbiAgICAgICAgdXBkYXRlT1BEQXBwb2ludG1lbnQ6IChhcHBvaW50bWVudERhdGEsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaCh1cGRhdGVPUERBcHBvaW50bWVudChhcHBvaW50bWVudERhdGEsIGNhbGxiYWNrKSksXG4gICAgICAgIHNlbGVjdE9wZFRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCkgPT4gZGlzcGF0Y2goc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCkpLFxuICAgICAgICByZXRyeVBheW1lbnRPUEQ6IChhcHBvaW50bWVudElkLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2gocmV0cnlQYXltZW50T1BEKGFwcG9pbnRtZW50SWQsIGNhbGxiYWNrKSksXG4gICAgICAgIGdldFJhdGluZ0NvbXBsaW1lbnRzOiAoY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldFJhdGluZ0NvbXBsaW1lbnRzKGNhbGxiYWNrKSksXG4gICAgICAgIGNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nOiAoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goY3JlYXRlQXBwb2ludG1lbnRSYXRpbmcoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykpLFxuICAgICAgICB1cGRhdGVBcHBvaW50bWVudFJhdGluZzogKHJhdGluZ0RhdGEsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaCh1cGRhdGVBcHBvaW50bWVudFJhdGluZyhyYXRpbmdEYXRhLCBjYWxsYmFjaykpLFxuICAgICAgICBjbG9zZUFwcG9pbnRtZW50UG9wVXA6IChpZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGNsb3NlQXBwb2ludG1lbnRQb3BVcChpZCwgY2FsbGJhY2spKSxcbiAgICAgICAgZ2V0Q2FydEl0ZW1zOiAoKSA9PiBkaXNwYXRjaChnZXRDYXJ0SXRlbXMoKSksXG4gICAgICAgIGdldFVucmF0ZWRBcHBvaW50bWVudDogKGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRVbnJhdGVkQXBwb2ludG1lbnQoY2FsbGJhY2spKSxcbiAgICAgICAgY2xvc2VBcHBvaW50bWVudFJhdGluZzogKGRvY3RvcklkLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goY2xvc2VBcHBvaW50bWVudFJhdGluZyhkb2N0b3JJZCwgY2FsbGJhY2spKSxcbiAgICAgICAgZWRpdFVzZXJQcm9maWxlOiAocHJvZmlsZURhdGEsIHByb2ZpbGVJZCwgY2IpID0+IGRpc3BhdGNoKGVkaXRVc2VyUHJvZmlsZShwcm9maWxlRGF0YSwgcHJvZmlsZUlkLCBjYikpLFxuICAgICAgICByZXNldFBrZ0NvbXBhcmU6KCkgPT4gZGlzcGF0Y2gocmVzZXRQa2dDb21wYXJlKCkpLFxuICAgICAgICBnZW5lcmF0ZVZpcENsdWJMZWFkOihkYXRhKSA9PmRpc3BhdGNoKGdlbmVyYXRlVmlwQ2x1YkxlYWQoZGF0YSkpLFxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCb29raW5nKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=