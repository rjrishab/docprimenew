exports.ids = [31];
exports.modules = {

/***/ "./dev/js/components/commons/DateTimeSelector/DateTimePicker.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/DateTimeSelector/DateTimePicker.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const moment = __webpack_require__(/*! moment */ "moment");

const DAYS_TO_SHOW = 40;
const WEEK_DAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const queryString = __webpack_require__(/*! query-string */ "query-string");


class DateTimePicker extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDateSpan: props.selectedSlot && props.selectedSlot.date ? new Date(props.selectedSlot.date) : props.selectedDateFormat ? new Date(props.selectedDateFormat) : new Date(),
            currentTimeSlot: props.selectedSlot && props.selectedSlot.time ? props.selectedSlot.time : {},
            dateModal: false,
            daySeries: []
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
        //If time is already selected by user , then on every page load we by default select that time 
        if (this.props.selectedSlot && this.props.selectedSlot.date && this.props.selectedSlot.time && this.props.selectedSlot.time.text) {
            this.props.enableProceed(true);

            this.generateDays(true, this.props.selectedSlot.date);
        } else {
            let getUpcomingDate = false;
            let upcoming_time = null;
            if (this.props.selectedDateFormat) {
                upcoming_time = this.props.selectedDateFormat;
            } else if (this.props.upcoming_slots && Object.keys(this.props.upcoming_slots).length) {
                upcoming_time = Object.keys(this.props.upcoming_slots)[0];
            }

            if (upcoming_time && this.props.timeSlots[upcoming_time]) {
                getUpcomingDate = true;
                this.setState({ selectedDateSpan: new Date(upcoming_time) });
                this.generateDays(true, new Date(upcoming_time));
            }

            if (!getUpcomingDate) {
                this.generateDays();
            }
        }
    }

    generateDays(getNewDates = false, selectedDate = '') {
        //This function will generate dummy dates ,starting from the getNewDates parameter
        let offset, currentDate;

        let dateCount = 1;
        let totalDateVisited = 1;
        let daySeries = [];

        if (getNewDates) {
            offset = new Date(selectedDate);
            currentDate = new Date(selectedDate);
        } else {
            offset = new Date();
            currentDate = new Date();
        }
        let formattedDate = this.getFormattedDate(offset);
        daySeries.push({
            dateFormat: new Date(offset),
            formattedDate: formattedDate
        });

        while (dateCount != 3 && totalDateVisited < 30) {
            offset.setDate(currentDate.getDate() + totalDateVisited);
            let formattedDate = this.getFormattedDate(offset);

            if (this.props.timeSlots && this.props.timeSlots[formattedDate] && this.props.timeSlots[formattedDate].length) {
                daySeries.push({
                    dateFormat: new Date(offset),
                    formattedDate: formattedDate
                });
                dateCount++;
            }
            totalDateVisited++;
            offset = new Date(currentDate);
        }
        this.setState({ daySeries: daySeries });
    }

    openDateModal() {
        //open calendar modal
        this.setState({ dateModal: !this.state.dateModal });
    }

    selectDate(dateFormat) {
        //funciton calls when user select the date 
        let formattedDate = this.getFormattedDate(dateFormat);
        if (new Date(this.state.selectedDateSpan).toDateString() != new Date(dateFormat).toDateString()) {
            if (this.props.timeSlots && this.props.timeSlots[formattedDate]) {} else {
                this.props.getOpdTimeSlot(formattedDate);
            }
            this.setState({ selectedDateSpan: dateFormat, currentTimeSlot: {} });
            this.props.enableProceed(false, []);
        }
    }

    selectDateFromCalendar(date) {
        //funciton calls when user select the date from the date calendar
        if (date) {
            date = date.toDate();
            this.setState({ dateModal: false }, () => {
                this.props.enableProceed(false, []);
                this.pickDate(new Date(date));
            });
        } else {
            this.setState({ dateModal: false });
        }
    }

    pickDate(date) {
        if (date) {
            let selectedDate = new Date(date);
            this.generateDays(true, selectedDate);
            this.selectDate(selectedDate);
        }
    }

    selectTime(time, title) {
        //function calls when user select the time
        let self = this;
        let timeSpan = Object.assign({}, time);
        timeSpan.title = title;
        this.setState({ currentTimeSlot: timeSpan }, () => {
            let data = {
                date: self.state.selectedDateSpan,
                month: MONTHS[new Date(self.state.selectedDateSpan).getMonth()],
                slot: '',
                time: self.state.currentTimeSlot
            };
            self.props.enableProceed(false, data);
        });
    }

    getFormattedDate(date) {
        //generate date in yyyy-mm-dd format
        var dd = date.getDate();

        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    render() {

        let selectedFormattedDate = this.getFormattedDate(this.state.selectedDateSpan);
        return _react2.default.createElement(
            'div',
            { className: 'widget mrng-top-12' },
            _react2.default.createElement(
                'div',
                { className: 'time-slot-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'vertical-date-select-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'slect-date-heading' },
                        _react2.default.createElement(
                            'div',
                            { className: 'slect-date-img-content' },
                            _react2.default.createElement(
                                'div',
                                { className: 'date-text-img' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/new-cal.svg" }),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Select Appointment Date'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'vertical-date-listing' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'ver-date-list-ul' },
                                this.state.daySeries && this.state.daySeries.length && this.state.daySeries[0].dateFormat > new Date() ? _react2.default.createElement(
                                    'li',
                                    { className: 'scrll-date', onClick: this.openDateModal.bind(this) },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/right-sc.svg", style: { transform: 'rotate(180deg)' } })
                                ) : '',
                                this.state.daySeries.map((day, key) => {

                                    return _react2.default.createElement(
                                        'li',
                                        { key: key, onClick: this.selectDate.bind(this, day.dateFormat) },
                                        _react2.default.createElement(
                                            'p',
                                            { className: new Date(day.dateFormat).toDateString() == new Date(this.state.selectedDateSpan).toDateString() ? 'date-list-active' : '' },
                                            new Date(day.dateFormat).getDate(),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                new Date(day.dateFormat).toDateString() == new Date().toDateString() ? 'Today' : WEEK_DAYS[new Date(day.dateFormat).getDay()]
                                            )
                                        )
                                    );
                                }),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'scrll-date', onClick: this.openDateModal.bind(this) },
                                    _react2.default.createElement('img', { style: { width: '22px', top: '10px' }, src: "/assets" + "/img/calnext.svg" })
                                )
                            ),
                            this.state.dateModal ? _react2.default.createElement(
                                'div',
                                { className: 'calendar-overlay' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'date-picker-modal' },
                                    _react2.default.createElement(_rcCalendar2.default, {
                                        showWeekNumber: false,
                                        defaultValue: moment(this.state.selectedDateSpan),
                                        disabledDate: date => {
                                            return date.diff(moment(new Date()), 'days') < 0 || date.diff(moment(new Date()), 'days') > 30;
                                        },
                                        showToday: true,
                                        onSelect: this.selectDateFromCalendar.bind(this)
                                    })
                                )
                            ) : ""
                        )
                    )
                ),
                this.state.daySeries.length ? _react2.default.createElement(
                    'div',
                    { className: 'select-time-slot-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'slect-date-img-content mb-0' },
                        _react2.default.createElement(
                            'div',
                            { className: 'date-text-img' },
                            _react2.default.createElement('img', { src: "/assets" + "/img/watch-date.svg" }),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Select Time Slot'
                            )
                        )
                    ),
                    this.props.timeSlots && this.props.timeSlots[selectedFormattedDate] && this.props.timeSlots[selectedFormattedDate].length ? this.props.timeSlots[selectedFormattedDate].map((schedule, key) => {

                        return schedule.timing && schedule.timing.length ? _react2.default.createElement(
                            'div',
                            { key: key, className: 'select-time-listing-container' },
                            _react2.default.createElement(
                                'div',
                                { className: 'time-shift' },
                                schedule.title
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'time-slot-main-listing' },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'inline-list time-items' },
                                    schedule.timing.map((time, i) => {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: i, className: 'time-slot-li-listing', onClick: this.selectTime.bind(this, time, schedule.title) },
                                            _react2.default.createElement(
                                                'p',
                                                { className: `time-slot-timmings ${this.state.currentTimeSlot.value == time.value ? " time-active" : ''}` },
                                                time.text
                                            )
                                        );
                                    })
                                )
                            )
                        ) : '';
                    }) : _react2.default.createElement(
                        'div',
                        { className: 'select-time-slot-container' },
                        _react2.default.createElement(
                            'p',
                            { className: 'no-tm-slot pl-0 pt-20' },
                            _react2.default.createElement('img', { src: "/assets" + "/images/warning-icon.png", style: { height: '15px', width: '15px', marginRight: '8px' } }),
                            'Not available on this day.'
                        )
                    )
                ) : _react2.default.createElement(
                    'div',
                    { className: 'select-time-slot-container' },
                    _react2.default.createElement(
                        'p',
                        { className: 'no-tm-slot pl-0 pt-20' },
                        _react2.default.createElement('img', { src: "/assets" + "/images/warning-icon.png", style: { height: '15px', width: '15px', marginRight: '8px' } }),
                        'Not available on this day.'
                    )
                )
            )
        );
    }
}

exports.default = DateTimePicker;

/***/ }),

/***/ "./dev/js/components/commons/DateTimeSelector/index.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/commons/DateTimeSelector/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DateTimePicker = __webpack_require__(/*! ./DateTimePicker.js */ "./dev/js/components/commons/DateTimeSelector/DateTimePicker.js");

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DateTimePicker2.default;

/***/ }),

/***/ "./dev/js/components/opd/appointmentSlot/AppointmentSlot.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/opd/appointmentSlot/AppointmentSlot.js ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../commons/DateTimeSelector/index.js */ "./dev/js/components/commons/DateTimeSelector/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../commons/selectedClinic/index.js */ "./dev/js/components/opd/commons/selectedClinic/index.js");

var _index4 = _interopRequireDefault(_index3);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

//import TimeSlotSelector from '../../commons/timeSlotSelector/index.js'

class AppointmentSlot extends _react2.default.Component {
    constructor(props) {
        super(props);

        const parsed = queryString.parse(this.props.location.search);

        let doctor_id = this.props.selectedDoctor;
        let hospital_id = this.props.selectedClinic;

        this.state = {
            selectedDoctor: doctor_id,
            selectedClinic: hospital_id,
            reschedule: this.props.location.search.includes('reschedule'),
            goback: this.props.location.search.includes('goback'),
            timeSlots: null,
            doctor_leaves: [],
            enableProceed: false,
            selectedTimeSlot: {},
            upcoming_slots: null,
            showPopup: false
        };
    }

    proceed(e) {
        //user select the timeslot & click the button to proceed
        e.preventDefault();
        e.stopPropagation();

        let data = {
            'Category': 'ConsumerApp', 'Action': 'UserCickedSelectedButton', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'user-clicked-select-button' };
        _gtm2.default.sendEvent({ data: data });

        if (this.state.selectedTimeSlot) {
            this.selectTimeSlot(this.state.selectedTimeSlot);
        }

        //Create IPD Lead on Time slot selection for login user & for ipd hospital(potential + congot)
        if (_storage2.default.checkAuth() && this.props.DOCTORS && this.props.DOCTORS[this.props.selectedDoctor]) {

            //Check for ipd hospital for the selected Clinic
            let hospital = {};
            let hospitals = this.props.DOCTORS[this.props.selectedDoctor].hospitals;
            if (hospitals && hospitals.length) {
                hospitals.map(hsptl => {
                    if (hsptl.hospital_id == this.props.selectedClinic) {
                        hospital = hsptl;
                    }
                });
            }

            /*if(hospital && hospital.is_ipd_hospital) {
                let formData = {
                    phone_number: this.props.primaryMobile,
                    doctor: this.props.selectedDoctor,
                    hospital: this.props.selectedClinic,
                    source: 'dropoff',
                    is_valid: false,
                    first_name: this.props.userName||'unknown'
                }
                this.props.submitIPDForm(formData, this.props.selectedLocation)
            }*/
        }

        // in case of reschedule go to reschedule page , else push
        if (this.state.reschedule) {
            const parsed = queryString.parse(this.props.location.search);
            return this.props.history.replace(`/opd/reschedule/${parsed.reschedule}`);
        }
        // go back for goback
        if (this.state.goback) {
            this.props.history.go(-1);
            return;
        }
        if (this.state.selectedTimeSlot) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'OpdAppointmentDate', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-appointment-date', 'appointmentTime': this.props.selectedSlot.date };
            _gtm2.default.sendEvent({ data: data });

            return this.props.history.push(`/opd/doctor/${this.props.selectedDoctor}/${this.props.selectedClinic}/bookdetails`);
        }
    }

    selectTimeSlot(slot) {
        //user select time 
        const parsed = queryString.parse(this.props.location.search);
        slot.selectedDoctor = this.props.selectedDoctor;
        slot.selectedClinic = this.props.selectedClinic;
        let extraTimeParams = null;
        if (this.state.selectedTimeSlot && this.state.selectedTimeSlot.date) {
            extraTimeParams = this.getFormattedDate(this.state.selectedTimeSlot.date);
        }
        this.props.selectOpdTimeSLot(slot, this.state.reschedule, parsed.reschedule, extraTimeParams);
    }

    getFormattedDate(date) {
        //function which return date in yyyy-mm-dd format
        var dd = date.getDate();

        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    componentDidMount() {
        let selectedDate = new Date();
        //when component load ,it check if any timeslot selected earlier by user for the lab/doctor,if selected then bydefault we select them on page load
        if (this.props.selectedDateFormat) {
            selectedDate = this.props.selectedDateFormat;
        } else {
            selectedDate = this.getFormattedDate(selectedDate);
        }
        this.getOpdTimeSlot(selectedDate);

        if (this.props.selectedSlot && this.props.selectedSlot.date && this.props.selectedSlot.time && this.props.selectedSlot.time.text) {
            this.setState({ selectedTimeSlot: this.props.selectTimeSlot });
        }

        if (window) {
            window.scrollTo(0, 0);
        }

        if (this.state.reschedule) {
            this.setState({ showPopup: true });
        }
    }

    getOpdTimeSlot(selectedDate) {
        let clinicId = this.props.selectedClinic;
        let doctorId = this.props.selectedDoctor;

        let extraParams = {
            selectedDate: selectedDate
        };
        this.props.getTimeSlots(doctorId, clinicId, extraParams, timeSlots => {
            this.setState({ timeSlots: timeSlots.timeslots, doctor_leaves: timeSlots.doctor_leaves, upcoming_slots: timeSlots.upcoming_slots || {} });
        });
    }

    enableProceed(enable, slot = {}) {
        //function which keep on checking on every time selection that whether time is selected or not
        if (enable) {
            this.setState({ enableProceed: true });
        } else {
            if (Object.values(slot).length) {
                this.setState({ enableProceed: true, selectedTimeSlot: slot });
            } else {
                this.setState({ enableProceed: false });
            }
        }
    }

    popupBtnClick(flag) {
        const parsed = queryString.parse(this.props.location.search);
        if (!flag) {
            this.props.history.push(`/opd/reschedule/${parsed.reschedule}`);
        }
        this.setState({ showPopup: false });
    }

    render() {

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
                                        'Are you sure you want to reschedule this appointment?'
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
                        'div',
                        { className: 'col-12 col-md-7 col-lg-7 center-column' },
                        this.props.DOCTORS[this.props.selectedDoctor] ? _react2.default.createElement(
                            'section',
                            { className: 'dr-profile-screen' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        this.state.timeSlots ? _react2.default.createElement(_index2.default, _extends({}, this.props, {
                                            timeSlots: this.state.timeSlots,
                                            selectTimeSlot: this.selectTimeSlot.bind(this),
                                            selectedSlot: this.state.reschedule ? this.props.rescheduleSlot : this.props.selectedSlot,
                                            doctor_leaves: this.state.doctor_leaves || [],
                                            enableProceed: this.enableProceed.bind(this),
                                            upcoming_slots: this.state.upcoming_slots, getOpdTimeSlot: this.getOpdTimeSlot.bind(this)
                                        })) : _react2.default.createElement(_Loader2.default, null)
                                    )
                                )
                            )
                        ) : _react2.default.createElement(_Loader2.default, null),
                        _react2.default.createElement(
                            'button',
                            { disabled: !this.state.enableProceed, onClick: this.proceed.bind(this), className: 'p-3 mrt-10 v-btn v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg static-btn sticky-btn' },
                            'Select'
                        )
                    ),
                    _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', type: 'opd' })
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, null)
        );
    }
}

exports.default = AppointmentSlot;

/***/ }),

/***/ "./dev/js/components/opd/appointmentSlot/index.js":
/*!********************************************************!*\
  !*** ./dev/js/components/opd/appointmentSlot/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppointmentSlot = __webpack_require__(/*! ./AppointmentSlot.js */ "./dev/js/components/opd/appointmentSlot/AppointmentSlot.js");

var _AppointmentSlot2 = _interopRequireDefault(_AppointmentSlot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AppointmentSlot2.default;

/***/ }),

/***/ "./dev/js/containers/opd/AppointmentSlot.js":
/*!**************************************************!*\
  !*** ./dev/js/containers/opd/AppointmentSlot.js ***!
  \**************************************************/
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

var _index2 = __webpack_require__(/*! ../../components/opd/appointmentSlot/index.js */ "./dev/js/components/opd/appointmentSlot/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class AppointmentSlot extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    // static loadData(store, match, queryData) {
    //     let doctor_id = match.params.id || queryData.doctor_id
    //     let hospital_id = match.params.clinicId || queryData.hospital_id

    //     return store.dispatch(getDoctorById(doctor_id, hospital_id))
    // }

    fetchData(props) {
        const parsed = queryString.parse(props.location.search);

        let doctor_id = props.selectedDoctor || props.match.params.id || parsed.doctor_id;
        let hospital_id = parsed.hospital_id || props.match.params.clinicId;

        if (doctor_id) {
            props.getDoctorById(doctor_id, hospital_id, props.commonProfileSelectedProcedures);
        }
    }

    componentDidMount() {
        this.fetchData(this.props);
    }

    componentWillReceiveProps(props) {
        if (props.selectedDoctor != this.props.selectedDoctor) {
            this.fetchData(props);
        }
    }

    render() {

        const parsed = queryString.parse(this.props.location.search);

        let doctor_id = this.props.selectedDoctor || this.props.match.params.id || parsed.doctor_id;
        let hospital_id = parsed.hospital_id || this.props.match.params.clinicId;

        return _react2.default.createElement(_index3.default, _extends({}, this.props, { selectedDoctor: doctor_id, selectedClinic: hospital_id }));
    }
}

AppointmentSlot.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {

    let DOCTORS = state.DOCTOR_PROFILES;

    let { selectedSlot, rescheduleSlot, selectedDoctorProcedure, commonProfileSelectedProcedures, selectedDateFormat } = state.DOCTOR_SEARCH;

    let { commonProcedurers, selectedLocation } = state.SEARCH_CRITERIA_OPD;

    let { primaryMobile, userName } = state.USER;
    return {
        DOCTORS, selectedSlot, rescheduleSlot, commonProcedurers, selectedDoctorProcedure, commonProfileSelectedProcedures, selectedDateFormat, selectedLocation, primaryMobile, userName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDoctorById: (doctorId, clinicId, procedure_ids, category_ids) => dispatch((0, _index.getDoctorById)(doctorId, clinicId, procedure_ids, category_ids)),
        getTimeSlots: (doctorId, clinicId, extraParam, callback) => dispatch((0, _index.getTimeSlots)(doctorId, clinicId, extraParam, callback)),
        selectOpdTimeSLot: (slot, reschedule, appointmentId, dateParam) => dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId, dateParam)),
        submitIPDForm: (formData, selectedLocation, cb) => dispatch((0, _index.submitIPDForm)(formData, selectedLocation, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppointmentSlot);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0RhdGVUaW1lU2VsZWN0b3IvRGF0ZVRpbWVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9EYXRlVGltZVNlbGVjdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9hcHBvaW50bWVudFNsb3QvQXBwb2ludG1lbnRTbG90LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9hcHBvaW50bWVudFNsb3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvb3BkL0FwcG9pbnRtZW50U2xvdC5qcyJdLCJuYW1lcyI6WyJtb21lbnQiLCJyZXF1aXJlIiwiREFZU19UT19TSE9XIiwiV0VFS19EQVlTIiwiTU9OVEhTIiwicXVlcnlTdHJpbmciLCJEYXRlVGltZVBpY2tlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2VsZWN0ZWREYXRlU3BhbiIsInNlbGVjdGVkU2xvdCIsImRhdGUiLCJEYXRlIiwic2VsZWN0ZWREYXRlRm9ybWF0IiwiY3VycmVudFRpbWVTbG90IiwidGltZSIsImRhdGVNb2RhbCIsImRheVNlcmllcyIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0ZXh0IiwiZW5hYmxlUHJvY2VlZCIsImdlbmVyYXRlRGF5cyIsImdldFVwY29taW5nRGF0ZSIsInVwY29taW5nX3RpbWUiLCJ1cGNvbWluZ19zbG90cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0aW1lU2xvdHMiLCJzZXRTdGF0ZSIsImdldE5ld0RhdGVzIiwic2VsZWN0ZWREYXRlIiwib2Zmc2V0IiwiY3VycmVudERhdGUiLCJkYXRlQ291bnQiLCJ0b3RhbERhdGVWaXNpdGVkIiwiZm9ybWF0dGVkRGF0ZSIsImdldEZvcm1hdHRlZERhdGUiLCJwdXNoIiwiZGF0ZUZvcm1hdCIsInNldERhdGUiLCJnZXREYXRlIiwib3BlbkRhdGVNb2RhbCIsInNlbGVjdERhdGUiLCJ0b0RhdGVTdHJpbmciLCJnZXRPcGRUaW1lU2xvdCIsInNlbGVjdERhdGVGcm9tQ2FsZW5kYXIiLCJ0b0RhdGUiLCJwaWNrRGF0ZSIsInNlbGVjdFRpbWUiLCJ0aXRsZSIsInNlbGYiLCJ0aW1lU3BhbiIsImFzc2lnbiIsImRhdGEiLCJtb250aCIsImdldE1vbnRoIiwic2xvdCIsImRkIiwibW0iLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsInJlbmRlciIsInNlbGVjdGVkRm9ybWF0dGVkRGF0ZSIsIkFTU0VUU19CQVNFX1VSTCIsImJpbmQiLCJ0cmFuc2Zvcm0iLCJtYXAiLCJkYXkiLCJrZXkiLCJnZXREYXkiLCJ3aWR0aCIsInRvcCIsImRpZmYiLCJzY2hlZHVsZSIsInRpbWluZyIsImkiLCJ2YWx1ZSIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiRGF0ZVRpbWVTZWxlY3RvciIsIkFwcG9pbnRtZW50U2xvdCIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJkb2N0b3JfaWQiLCJzZWxlY3RlZERvY3RvciIsImhvc3BpdGFsX2lkIiwic2VsZWN0ZWRDbGluaWMiLCJyZXNjaGVkdWxlIiwiaW5jbHVkZXMiLCJnb2JhY2siLCJkb2N0b3JfbGVhdmVzIiwic2VsZWN0ZWRUaW1lU2xvdCIsInNob3dQb3B1cCIsInByb2NlZWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJzZWxlY3RUaW1lU2xvdCIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJET0NUT1JTIiwiaG9zcGl0YWwiLCJob3NwaXRhbHMiLCJoc3B0bCIsImhpc3RvcnkiLCJyZXBsYWNlIiwiZ28iLCJleHRyYVRpbWVQYXJhbXMiLCJzZWxlY3RPcGRUaW1lU0xvdCIsImNsaW5pY0lkIiwiZG9jdG9ySWQiLCJleHRyYVBhcmFtcyIsImdldFRpbWVTbG90cyIsInRpbWVzbG90cyIsImVuYWJsZSIsInZhbHVlcyIsInBvcHVwQnRuQ2xpY2siLCJmbGFnIiwicmVzY2hlZHVsZVNsb3QiLCJmZXRjaERhdGEiLCJtYXRjaCIsInBhcmFtcyIsImlkIiwiZ2V0RG9jdG9yQnlJZCIsImNvbW1vblByb2ZpbGVTZWxlY3RlZFByb2NlZHVyZXMiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiRE9DVE9SX1BST0ZJTEVTIiwic2VsZWN0ZWREb2N0b3JQcm9jZWR1cmUiLCJET0NUT1JfU0VBUkNIIiwiY29tbW9uUHJvY2VkdXJlcnMiLCJzZWxlY3RlZExvY2F0aW9uIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsInByaW1hcnlNb2JpbGUiLCJ1c2VyTmFtZSIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInByb2NlZHVyZV9pZHMiLCJjYXRlZ29yeV9pZHMiLCJleHRyYVBhcmFtIiwiY2FsbGJhY2siLCJhcHBvaW50bWVudElkIiwiZGF0ZVBhcmFtIiwic3VibWl0SVBERm9ybSIsImZvcm1EYXRhIiwiY2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQU9BOzs7Ozs7QUFOQSxNQUFNQSxTQUFTQyxtQkFBT0EsQ0FBQyxzQkFBUixDQUFmOztBQUVBLE1BQU1DLGVBQWUsRUFBckI7QUFDQSxNQUFNQyxZQUFZLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLEtBQXZCLEVBQThCLE1BQTlCLEVBQXNDLEtBQXRDLEVBQTZDLEtBQTdDLENBQWxCO0FBQ0EsTUFBTUMsU0FBUyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixPQUF0QixFQUErQixLQUEvQixFQUFzQyxNQUF0QyxFQUE4QyxNQUE5QyxFQUFzRCxLQUF0RCxFQUE2RCxN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bEMsRUFBaURDLFlBQWpELENBQVQsQ0FEakU7QUFFSDdCLHNCQUFjLENBQUNGLFFBQUQsRUFBV0QsUUFBWCxFQUFxQmlDLFVBQXJCLEVBQWlDQyxRQUFqQyxLQUE4Q0osU0FBUyx5QkFBYTdCLFFBQWIsRUFBdUJELFFBQXZCLEVBQWlDaUMsVUFBakMsRUFBNkNDLFFBQTdDLENBQVQsQ0FGekQ7QUFHSG5DLDJCQUFtQixDQUFDMUQsSUFBRCxFQUFPa0MsVUFBUCxFQUFtQjRELGFBQW5CLEVBQWtDQyxTQUFsQyxLQUFnRE4sU0FBUyw4QkFBa0J6RixJQUFsQixFQUF3QmtDLFVBQXhCLEVBQW9DNEQsYUFBcEMsRUFBbURDLFNBQW5ELENBQVQsQ0FIaEU7QUFJSEMsdUJBQWUsQ0FBQ0MsUUFBRCxFQUFXZCxnQkFBWCxFQUE2QmUsRUFBN0IsS0FBb0NULFNBQVMsMEJBQWNRLFFBQWQsRUFBd0JkLGdCQUF4QixFQUEwQ2UsRUFBMUMsQ0FBVDtBQUpoRCxLQUFQO0FBTUgsQ0FQRDs7a0JBVWUseUJBQVFwQixlQUFSLEVBQXlCVSxrQkFBekIsRUFBNkMvRCxlQUE3QyxDIiwiZmlsZSI6IjMxLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDYWxlbmRhciBmcm9tICdyYy1jYWxlbmRhcic7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuY29uc3QgREFZU19UT19TSE9XID0gNDBcbmNvbnN0IFdFRUtfREFZUyA9IFsnU3VuJywgJ01vbicsICdUdWVzJywgJ1dlZCcsICdUaHVyJywgJ0ZyaScsICdTYXQnXVxuY29uc3QgTU9OVEhTID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmNsYXNzIERhdGVUaW1lUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlbGVjdGVkRGF0ZVNwYW46IHByb3BzLnNlbGVjdGVkU2xvdCAmJiBwcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZT9uZXcgRGF0ZShwcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSk6cHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0P25ldyBEYXRlKHByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCk6bmV3IERhdGUoKSxcblx0XHRcdGN1cnJlbnRUaW1lU2xvdDogcHJvcHMuc2VsZWN0ZWRTbG90ICYmIHByb3BzLnNlbGVjdGVkU2xvdC50aW1lID8gcHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUgOiB7fSxcblx0XHRcdGRhdGVNb2RhbDogZmFsc2UsXG5cdFx0XHRkYXlTZXJpZXM6W11cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgLy9JZiB0aW1lIGlzIGFscmVhZHkgc2VsZWN0ZWQgYnkgdXNlciAsIHRoZW4gb24gZXZlcnkgcGFnZSBsb2FkIHdlIGJ5IGRlZmF1bHQgc2VsZWN0IHRoYXQgdGltZSBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZW5hYmxlUHJvY2VlZCh0cnVlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlRGF5cyh0cnVlLCB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGdldFVwY29taW5nRGF0ZT0gZmFsc2VcbiAgICAgICAgICAgIGxldCB1cGNvbWluZ190aW1lID0gbnVsbFxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICB1cGNvbWluZ190aW1lID0gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGVGb3JtYXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy51cGNvbWluZ19zbG90cyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHVwY29taW5nX3RpbWUgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKVswXSAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih1cGNvbWluZ190aW1lICYmIHRoaXMucHJvcHMudGltZVNsb3RzW3VwY29taW5nX3RpbWVdICl7XG4gICAgICAgICAgICAgICAgZ2V0VXBjb21pbmdEYXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkRGF0ZVNwYW46IG5ldyBEYXRlKHVwY29taW5nX3RpbWUpfSlcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlRGF5cyh0cnVlLCBuZXcgRGF0ZSh1cGNvbWluZ190aW1lKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIWdldFVwY29taW5nRGF0ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZURheXMoKSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZW5lcmF0ZURheXMoZ2V0TmV3RGF0ZXMgPSBmYWxzZSwgc2VsZWN0ZWREYXRlID0gJycpe1xuICAgICAgICAvL1RoaXMgZnVuY3Rpb24gd2lsbCBnZW5lcmF0ZSBkdW1teSBkYXRlcyAsc3RhcnRpbmcgZnJvbSB0aGUgZ2V0TmV3RGF0ZXMgcGFyYW1ldGVyXG4gICAgICAgIGxldCBvZmZzZXQsIGN1cnJlbnREYXRlXG4gICAgICAgIFxuICAgICAgICBsZXQgZGF0ZUNvdW50ID0gMVxuICAgICAgICBsZXQgdG90YWxEYXRlVmlzaXRlZCA9IDFcbiAgICAgICAgbGV0IGRheVNlcmllcyA9IFtdXG5cbiAgICAgICAgaWYgKGdldE5ld0RhdGVzKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpXG4gICAgICAgICAgICBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0ID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXG5cbiAgICAgICAgfVxuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShvZmZzZXQpXG4gICAgICAgIGRheVNlcmllcy5wdXNoKHtcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IG5ldyBEYXRlKG9mZnNldCksXG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRlOiBmb3JtYXR0ZWREYXRlXG4gICAgICAgIH0pXG5cblxuICAgICAgICB3aGlsZShkYXRlQ291bnQhPTMgJiYgdG90YWxEYXRlVmlzaXRlZDwzMCl7XG4gICAgICAgIFx0b2Zmc2V0LnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgdG90YWxEYXRlVmlzaXRlZClcbiAgICAgICAgXHRsZXQgZm9ybWF0dGVkRGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShvZmZzZXQpXG5cbiAgICAgICAgXHRpZih0aGlzLnByb3BzLnRpbWVTbG90cyAmJiB0aGlzLnByb3BzLnRpbWVTbG90c1tmb3JtYXR0ZWREYXRlXSAmJiB0aGlzLnByb3BzLnRpbWVTbG90c1tmb3JtYXR0ZWREYXRlXS5sZW5ndGgpe1xuICAgICAgICBcdFx0ZGF5U2VyaWVzLnB1c2goe1xuXHQgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogbmV3IERhdGUob2Zmc2V0KSxcblx0ICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6IGZvcm1hdHRlZERhdGVcblx0ICAgICAgICAgICAgfSlcblx0ICAgICAgICAgXHRkYXRlQ291bnQrK1xuICAgICAgICBcdH1cbiAgICAgICAgXHR0b3RhbERhdGVWaXNpdGVkKytcbiAgICAgICAgXHRvZmZzZXQgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF5U2VyaWVzOiBkYXlTZXJpZXMgIH0pXG4gICAgfVxuXG5cdG9wZW5EYXRlTW9kYWwoKSB7XG4gICAgICAgIC8vb3BlbiBjYWxlbmRhciBtb2RhbFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiAhdGhpcy5zdGF0ZS5kYXRlTW9kYWwgfSlcbiAgICB9XG5cbiAgICBzZWxlY3REYXRlKGRhdGVGb3JtYXQpIHtcbiAgICAgICAgLy9mdW5jaXRvbiBjYWxscyB3aGVuIHVzZXIgc2VsZWN0IHRoZSBkYXRlIFxuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlRm9ybWF0KVxuICAgIFx0aWYobmV3IERhdGUodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGVTcGFuKS50b0RhdGVTdHJpbmcoKSAhPSBuZXcgRGF0ZShkYXRlRm9ybWF0KS50b0RhdGVTdHJpbmcoKSl7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnRpbWVTbG90cyAmJiB0aGlzLnByb3BzLnRpbWVTbG90c1tmb3JtYXR0ZWREYXRlXSl7XG5cbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldE9wZFRpbWVTbG90KGZvcm1hdHRlZERhdGUpXG5cbiAgICAgICAgICAgIH1cbiAgICBcdFx0dGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRGF0ZVNwYW46IGRhdGVGb3JtYXQsIGN1cnJlbnRUaW1lU2xvdDoge30gfSlcbiAgICAgICAgXHR0aGlzLnByb3BzLmVuYWJsZVByb2NlZWQoZmFsc2UsIFtdKVx0XG4gICAgXHR9XG4gICAgfVxuXG4gICAgc2VsZWN0RGF0ZUZyb21DYWxlbmRhcihkYXRlKSB7XG4gICAgICAgIC8vZnVuY2l0b24gY2FsbHMgd2hlbiB1c2VyIHNlbGVjdCB0aGUgZGF0ZSBmcm9tIHRoZSBkYXRlIGNhbGVuZGFyXG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS50b0RhdGUoKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVNb2RhbDogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZW5hYmxlUHJvY2VlZChmYWxzZSwgW10pXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrRGF0ZShuZXcgRGF0ZShkYXRlKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGlja0RhdGUoZGF0ZSkge1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlRGF5cyh0cnVlLCBzZWxlY3RlZERhdGUpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdERhdGUoc2VsZWN0ZWREYXRlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0VGltZSh0aW1lLCB0aXRsZSkge1xuICAgICAgIC8vZnVuY3Rpb24gY2FsbHMgd2hlbiB1c2VyIHNlbGVjdCB0aGUgdGltZVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IHRpbWVTcGFuID0gT2JqZWN0LmFzc2lnbih7fSwgdGltZSlcbiAgICAgICAgdGltZVNwYW4udGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRpbWVTbG90OiB0aW1lU3BhbiB9LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBkYXRlOiBzZWxmLnN0YXRlLnNlbGVjdGVkRGF0ZVNwYW4sXG4gICAgICAgICAgICAgICAgbW9udGg6IE1PTlRIU1tuZXcgRGF0ZShzZWxmLnN0YXRlLnNlbGVjdGVkRGF0ZVNwYW4pLmdldE1vbnRoKCldLFxuICAgICAgICAgICAgICAgIHNsb3Q6ICcnLFxuICAgICAgICAgICAgICAgIHRpbWU6IHNlbGYuc3RhdGUuY3VycmVudFRpbWVTbG90XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnByb3BzLmVuYWJsZVByb2NlZWQoZmFsc2UsIGRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgIGdldEZvcm1hdHRlZERhdGUoZGF0ZSl7XG4gICAgICAgIC8vZ2VuZXJhdGUgZGF0ZSBpbiB5eXl5LW1tLWRkIGZvcm1hdFxuICAgICAgICB2YXIgZGQgPSBkYXRlLmdldERhdGUoKTtcblxuICAgICAgICB2YXIgbW0gPSBkYXRlLmdldE1vbnRoKCkrMTsgXG4gICAgICAgIHZhciB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBpZihkZDwxMCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRkPScwJytkZDtcbiAgICAgICAgfSBcblxuICAgICAgICBpZihtbTwxMCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1tPScwJyttbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2RheSA9IHl5eXkrJy0nK21tKyctJytkZDtcbiAgICAgICAgcmV0dXJuIHRvZGF5XG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXG4gICAgICAgIGxldCBzZWxlY3RlZEZvcm1hdHRlZERhdGUgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGVTcGFuKVxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1ybmctdG9wLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLXNsb3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWwtZGF0ZS1zZWxlY3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsZWN0LWRhdGUtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xlY3QtZGF0ZS1pbWctY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtdGV4dC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbmV3LWNhbC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlbGVjdCBBcHBvaW50bWVudCBEYXRlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLWRhdGUtbGlzdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidmVyLWRhdGUtbGlzdC11bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF5U2VyaWVzICYmIHRoaXMuc3RhdGUuZGF5U2VyaWVzLmxlbmd0aCAmJiB0aGlzLnN0YXRlLmRheVNlcmllc1swXS5kYXRlRm9ybWF0ID4gbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID88bGkgY2xhc3NOYW1lPVwic2NybGwtZGF0ZVwiIG9uQ2xpY2s9e3RoaXMub3BlbkRhdGVNb2RhbC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yaWdodC1zYy5zdmdcIn0gc3R5bGU9e3t0cmFuc2Zvcm06J3JvdGF0ZSgxODBkZWcpJ319IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JycgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRheVNlcmllcy5tYXAoKGRheSwga2V5KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2tleX0gb25DbGljaz17dGhpcy5zZWxlY3REYXRlLmJpbmQodGhpcywgZGF5LmRhdGVGb3JtYXQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bmV3IERhdGUoZGF5LmRhdGVGb3JtYXQpLnRvRGF0ZVN0cmluZygpID09IG5ldyBEYXRlKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlU3BhbikudG9EYXRlU3RyaW5nKCkgPyAnZGF0ZS1saXN0LWFjdGl2ZSc6Jyd9PntuZXcgRGF0ZShkYXkuZGF0ZUZvcm1hdCkuZ2V0RGF0ZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntuZXcgRGF0ZShkYXkuZGF0ZUZvcm1hdCkudG9EYXRlU3RyaW5nKCkgPT0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSA/ICdUb2RheScgOiBXRUVLX0RBWVNbKG5ldyAgRGF0ZShkYXkuZGF0ZUZvcm1hdCkpLmdldERheSgpXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzY3JsbC1kYXRlXCIgb25DbGljaz17dGhpcy5vcGVuRGF0ZU1vZGFsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDonMjJweCcsIHRvcDonMTBweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYWxuZXh0LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGVNb2RhbCA/IDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItb3ZlcmxheVwiPjxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXI9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21vbWVudCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZVNwYW4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGU9eyhkYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5kaWZmKG1vbWVudCgobmV3IERhdGUpKSwgJ2RheXMnKSA8IDAgfHwgZGF0ZS5kaWZmKG1vbWVudCgobmV3IERhdGUpKSwgJ2RheXMnKSA+IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb2RheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5zZWxlY3REYXRlRnJvbUNhbGVuZGFyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcdHRoaXMuc3RhdGUuZGF5U2VyaWVzLmxlbmd0aD9cbiAgICAgICAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC10aW1lLXNsb3QtY29udGFpbmVyXCI+XG5cdFx0XHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xlY3QtZGF0ZS1pbWctY29udGVudCBtYi0wXCI+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtdGV4dC1pbWdcIj5cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IC8+XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHA+U2VsZWN0IFRpbWUgU2xvdDwvcD5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0ICAgICAgICAgICAge1xuXHRcdFx0XHQgICAgICAgICAgICBcdHRoaXMucHJvcHMudGltZVNsb3RzICYmIHRoaXMucHJvcHMudGltZVNsb3RzW3NlbGVjdGVkRm9ybWF0dGVkRGF0ZV0gJiYgdGhpcy5wcm9wcy50aW1lU2xvdHNbc2VsZWN0ZWRGb3JtYXR0ZWREYXRlXS5sZW5ndGg/XG5cdFx0XHRcdCAgICAgICAgICAgIFx0dGhpcy5wcm9wcy50aW1lU2xvdHNbc2VsZWN0ZWRGb3JtYXR0ZWREYXRlXS5tYXAoKHNjaGVkdWxlLCBrZXkpID0+IHtcblxuXHRcdFx0XHQgICAgICAgICAgICBcdFx0cmV0dXJuIHNjaGVkdWxlLnRpbWluZyAmJiBzY2hlZHVsZS50aW1pbmcubGVuZ3RoP1xuXHRcdFx0XHQgICAgICAgICAgICBcdFx0PGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwic2VsZWN0LXRpbWUtbGlzdGluZy1jb250YWluZXJcIj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1zaGlmdFwiPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHtzY2hlZHVsZS50aXRsZX1cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLXNsb3QtbWFpbi1saXN0aW5nXCI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0IHRpbWUtaXRlbXNcIj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHNjaGVkdWxlLnRpbWluZy5tYXAoKHRpbWUsIGkpPT4ge1xuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0cmV0dXJuIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cInRpbWUtc2xvdC1saS1saXN0aW5nXCIgb25DbGljaz17XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRpbWUuYmluZCh0aGlzLCB0aW1lLCBzY2hlZHVsZS50aXRsZSkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRpbWUtc2xvdC10aW1taW5ncyAke3RoaXMuc3RhdGUuY3VycmVudFRpbWVTbG90LnZhbHVlID09IHRpbWUudmFsdWU/IFwiIHRpbWUtYWN0aXZlXCIgOiAnJ31gfT57dGltZS50ZXh0fTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9saT5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR9KVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgOicnXG5cdFx0XHRcdCAgICAgICAgICAgIFx0fSlcblx0XHRcdFx0ICAgICAgICAgICAgXHQ6PGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtdGltZS1zbG90LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm8tdG0tc2xvdCBwbC0wIHB0LTIwXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArXCIvaW1hZ2VzL3dhcm5pbmctaWNvbi5wbmdcIn0gc3R5bGU9e3toZWlnaHQ6ICcxNXB4Jywgd2lkdGg6ICcxNXB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnfX0vPk5vdCBhdmFpbGFibGUgb24gdGhpcyBkYXkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC10aW1lLXNsb3QtY29udGFpbmVyXCI+XG5cdFx0XHRcdCAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vLXRtLXNsb3QgcGwtMCBwdC0yMFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgK1wiL2ltYWdlcy93YXJuaW5nLWljb24ucG5nXCJ9IHN0eWxlPXt7aGVpZ2h0OiAnMTVweCcsIHdpZHRoOiAnMTVweCcsIG1hcmdpblJpZ2h0OiAnOHB4J319Lz5Ob3QgYXZhaWxhYmxlIG9uIHRoaXMgZGF5LjwvcD5cblx0XHRcdFx0ICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZVBpY2tlclxuIiwiaW1wb3J0IERhdGVUaW1lU2VsZWN0b3IgZnJvbSAnLi9EYXRlVGltZVBpY2tlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWVTZWxlY3RvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuaW1wb3J0IFRpbWVTbG90U2VsZWN0b3IgZnJvbSAnLi4vLi4vY29tbW9ucy9EYXRlVGltZVNlbGVjdG9yL2luZGV4LmpzJ1xuaW1wb3J0IFNlbGVjdGVkQ2xpbmljIGZyb20gJy4uL2NvbW1vbnMvc2VsZWN0ZWRDbGluaWMvaW5kZXguanMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5cbi8vaW1wb3J0IFRpbWVTbG90U2VsZWN0b3IgZnJvbSAnLi4vLi4vY29tbW9ucy90aW1lU2xvdFNlbGVjdG9yL2luZGV4LmpzJ1xuXG5jbGFzcyBBcHBvaW50bWVudFNsb3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXG4gICAgICAgIGxldCBob3NwaXRhbF9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWNcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWREb2N0b3I6IGRvY3Rvcl9pZCxcbiAgICAgICAgICAgIHNlbGVjdGVkQ2xpbmljOiBob3NwaXRhbF9pZCxcbiAgICAgICAgICAgIHJlc2NoZWR1bGU6IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdyZXNjaGVkdWxlJyksXG4gICAgICAgICAgICBnb2JhY2s6IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdnb2JhY2snKSxcbiAgICAgICAgICAgIHRpbWVTbG90czogbnVsbCxcbiAgICAgICAgICAgIGRvY3Rvcl9sZWF2ZXM6IFtdLFxuICAgICAgICAgICAgZW5hYmxlUHJvY2VlZDogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZFRpbWVTbG90OiB7fSxcbiAgICAgICAgICAgIHVwY29taW5nX3Nsb3RzOiBudWxsLFxuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2VlZChlKSB7XG4gICAgICAgIC8vdXNlciBzZWxlY3QgdGhlIHRpbWVzbG90ICYgY2xpY2sgdGhlIGJ1dHRvbiB0byBwcm9jZWVkXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOidDb25zdW1lckFwcCcsJ0FjdGlvbic6J1VzZXJDaWNrZWRTZWxlY3RlZEJ1dHRvbicsJ0N1c3RvbWVySUQnOkdUTS5nZXRVc2VySWQoKXx8JycsJ2xlYWRpZCc6MCwnZXZlbnQnOid1c2VyLWNsaWNrZWQtc2VsZWN0LWJ1dHRvbid9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90KXtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VGltZVNsb3QodGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90KSAgICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy9DcmVhdGUgSVBEIExlYWQgb24gVGltZSBzbG90IHNlbGVjdGlvbiBmb3IgbG9naW4gdXNlciAmIGZvciBpcGQgaG9zcGl0YWwocG90ZW50aWFsICsgY29uZ290KVxuICAgICAgICBpZihTVE9SQUdFLmNoZWNrQXV0aCgpICYmIHRoaXMucHJvcHMuRE9DVE9SUyAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0pIHtcblxuICAgICAgICAgICAgLy9DaGVjayBmb3IgaXBkIGhvc3BpdGFsIGZvciB0aGUgc2VsZWN0ZWQgQ2xpbmljXG4gICAgICAgICAgICBsZXQgaG9zcGl0YWwgPSB7fVxuICAgICAgICAgICAgbGV0IGhvc3BpdGFscyA9IHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXS5ob3NwaXRhbHNcbiAgICAgICAgICAgIGlmIChob3NwaXRhbHMgJiYgaG9zcGl0YWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGhvc3BpdGFscy5tYXAoKGhzcHRsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoc3B0bC5ob3NwaXRhbF9pZCA9PSB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbCA9IGhzcHRsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKmlmKGhvc3BpdGFsICYmIGhvc3BpdGFsLmlzX2lwZF9ob3NwaXRhbCkge1xuICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiB0aGlzLnByb3BzLnByaW1hcnlNb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgIGRvY3RvcjogdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvcixcbiAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWw6IHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWMsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogJ2Ryb3BvZmYnLFxuICAgICAgICAgICAgICAgICAgICBpc192YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IHRoaXMucHJvcHMudXNlck5hbWV8fCd1bmtub3duJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN1Ym1pdElQREZvcm0oZm9ybURhdGEsIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbilcbiAgICAgICAgICAgIH0qL1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBpbiBjYXNlIG9mIHJlc2NoZWR1bGUgZ28gdG8gcmVzY2hlZHVsZSBwYWdlICwgZWxzZSBwdXNoXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlc2NoZWR1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGAvb3BkL3Jlc2NoZWR1bGUvJHtwYXJzZWQucmVzY2hlZHVsZX1gKVxuICAgICAgICB9XG4gICAgICAgIC8vIGdvIGJhY2sgZm9yIGdvYmFja1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nb2JhY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3QpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzonQ29uc3VtZXJBcHAnLCdBY3Rpb24nOidPcGRBcHBvaW50bWVudERhdGUnLCdDdXN0b21lcklEJzpHVE0uZ2V0VXNlcklkKCl8fCcnLCdsZWFkaWQnOjAsJ2V2ZW50Jzonb3BkLWFwcG9pbnRtZW50LWRhdGUnLCdhcHBvaW50bWVudFRpbWUnOnRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGV9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7dGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcn0vJHt0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljfS9ib29rZGV0YWlsc2ApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RUaW1lU2xvdChzbG90KSB7XG4gICAgICAgIC8vdXNlciBzZWxlY3QgdGltZSBcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIHNsb3Quc2VsZWN0ZWREb2N0b3IgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXG4gICAgICAgIHNsb3Quc2VsZWN0ZWRDbGluaWMgPSB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljXG4gICAgICAgIGxldCBleHRyYVRpbWVQYXJhbXMgPSBudWxsXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdCAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3QuZGF0ZSkge1xuICAgICAgICAgICAgZXh0cmFUaW1lUGFyYW1zID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdC5kYXRlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgdGhpcy5zdGF0ZS5yZXNjaGVkdWxlLCBwYXJzZWQucmVzY2hlZHVsZSwgZXh0cmFUaW1lUGFyYW1zKVxuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZERhdGUoZGF0ZSkge1xuICAgICAgICAvL2Z1bmN0aW9uIHdoaWNoIHJldHVybiBkYXRlIGluIHl5eXktbW0tZGQgZm9ybWF0XG4gICAgICAgIHZhciBkZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHZhciBtbSA9IGRhdGUuZ2V0TW9udGgoKSsxOyBcbiAgICAgICAgdmFyIHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmKGRkPDEwKSBcbiAgICAgICAge1xuICAgICAgICAgICAgZGQ9JzAnK2RkO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmKG1tPDEwKSBcbiAgICAgICAge1xuICAgICAgICAgICAgbW09JzAnK21tO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvZGF5ID0geXl5eSsnLScrbW0rJy0nK2RkO1xuICAgICAgICByZXR1cm4gdG9kYXlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgLy93aGVuIGNvbXBvbmVudCBsb2FkICxpdCBjaGVjayBpZiBhbnkgdGltZXNsb3Qgc2VsZWN0ZWQgZWFybGllciBieSB1c2VyIGZvciB0aGUgbGFiL2RvY3RvcixpZiBzZWxlY3RlZCB0aGVuIGJ5ZGVmYXVsdCB3ZSBzZWxlY3QgdGhlbSBvbiBwYWdlIGxvYWRcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQpe1xuICAgICAgICAgICAgc2VsZWN0ZWREYXRlID0gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGVGb3JtYXRcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZWxlY3RlZERhdGUgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUoc2VsZWN0ZWREYXRlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0T3BkVGltZVNsb3Qoc2VsZWN0ZWREYXRlKVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZS50ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRUaW1lU2xvdDogdGhpcy5wcm9wcy5zZWxlY3RUaW1lU2xvdCB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZXNjaGVkdWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiB0cnVlIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldE9wZFRpbWVTbG90KHNlbGVjdGVkRGF0ZSl7XG4gICAgICAgIGxldCBjbGluaWNJZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWNcbiAgICAgICAgbGV0IGRvY3RvcklkID0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclxuXG4gICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkRGF0ZTogc2VsZWN0ZWREYXRlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRUaW1lU2xvdHMoZG9jdG9ySWQsIGNsaW5pY0lkLCBleHRyYVBhcmFtcywgKHRpbWVTbG90cykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVTbG90czogdGltZVNsb3RzLnRpbWVzbG90cywgZG9jdG9yX2xlYXZlczogdGltZVNsb3RzLmRvY3Rvcl9sZWF2ZXMsIHVwY29taW5nX3Nsb3RzOiB0aW1lU2xvdHMudXBjb21pbmdfc2xvdHMgfHwge30gfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBlbmFibGVQcm9jZWVkKGVuYWJsZSwgc2xvdCA9IHt9KSB7XG4gICAgICAgIC8vZnVuY3Rpb24gd2hpY2gga2VlcCBvbiBjaGVja2luZyBvbiBldmVyeSB0aW1lIHNlbGVjdGlvbiB0aGF0IHdoZXRoZXIgdGltZSBpcyBzZWxlY3RlZCBvciBub3RcbiAgICAgICAgaWYgKGVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZVByb2NlZWQ6IHRydWUgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKHNsb3QpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVQcm9jZWVkOiB0cnVlLCBzZWxlY3RlZFRpbWVTbG90OiBzbG90IH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVQcm9jZWVkOiBmYWxzZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9wdXBCdG5DbGljayhmbGFnKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgaWYgKCFmbGFnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9yZXNjaGVkdWxlLyR7cGFyc2VkLnJlc2NoZWR1bGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cDogZmFsc2UgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXlcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkaWluZy1zcmNoLWVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWNvbmVudFwiPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXNjaGVkdWxlIHRoaXMgYXBwb2ludG1lbnQ/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wb3B1cEJ0bkNsaWNrKHRydWUpfT5ZZXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucG9wdXBCdG5DbGljayhmYWxzZSl9Pk5vPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aGVhZGVyIGNsYXNzTmFtZT1cInNraW4tcHJpbWFyeSBmaXhlZCBob3Jpem9udGFsIHRvcCBzdGlja3ktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBiYWNrLWljb25cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYmFjay13aGl0ZS5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZSBmdy03MDAgY2FwaXRhbGl6ZSB0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+U2VsZWN0IERhdGUgYW5kIFRpbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcl0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHItcHJvZmlsZS1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8U2VsZWN0ZWRDbGluaWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREb2N0b3I9e3RoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDbGluaWM9e3RoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4qL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50aW1lU2xvdHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVTbG90U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lU2xvdHM9e3RoaXMuc3RhdGUudGltZVNsb3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRpbWVTbG90PXt0aGlzLnNlbGVjdFRpbWVTbG90LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTbG90PXt0aGlzLnN0YXRlLnJlc2NoZWR1bGUgPyB0aGlzLnByb3BzLnJlc2NoZWR1bGVTbG90IDogdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yX2xlYXZlcz17dGhpcy5zdGF0ZS5kb2N0b3JfbGVhdmVzIHx8IFtdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVByb2NlZWQgPSB7dGhpcy5lbmFibGVQcm9jZWVkLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwY29taW5nX3Nsb3RzPSB7dGhpcy5zdGF0ZS51cGNvbWluZ19zbG90c30gZ2V0T3BkVGltZVNsb3Q9e3RoaXMuZ2V0T3BkVGltZVNsb3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiA6IDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZW5hYmxlUHJvY2VlZH0gb25DbGljaz17dGhpcy5wcm9jZWVkLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInAtMyBtcnQtMTAgdi1idG4gdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgYnRuLWxnIHRleHQtbGcgc3RhdGljLWJ0biBzdGlja3ktYnRuXCI+U2VsZWN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBleHRyYUNsYXNzPVwiIGNoYXQtZmxvYXQtYnRuLTJcIiB0eXBlPVwib3BkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwb2ludG1lbnRTbG90XG4iLCJpbXBvcnQgQXBwb2ludG1lbnRTbG90IGZyb20gJy4vQXBwb2ludG1lbnRTbG90LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBBcHBvaW50bWVudFNsb3QiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0RG9jdG9yQnlJZCwgZ2V0VGltZVNsb3RzLCBzZWxlY3RPcGRUaW1lU0xvdCwgc3VibWl0SVBERm9ybSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5pbXBvcnQgQXBwb2ludG1lbnRTbG90VmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL29wZC9hcHBvaW50bWVudFNsb3QvaW5kZXguanMnXG5cbmNsYXNzIEFwcG9pbnRtZW50U2xvdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgLy8gc3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnlEYXRhKSB7XG4gICAgLy8gICAgIGxldCBkb2N0b3JfaWQgPSBtYXRjaC5wYXJhbXMuaWQgfHwgcXVlcnlEYXRhLmRvY3Rvcl9pZFxuICAgIC8vICAgICBsZXQgaG9zcGl0YWxfaWQgPSBtYXRjaC5wYXJhbXMuY2xpbmljSWQgfHwgcXVlcnlEYXRhLmhvc3BpdGFsX2lkXG5cbiAgICAvLyAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldERvY3RvckJ5SWQoZG9jdG9yX2lkLCBob3NwaXRhbF9pZCkpXG4gICAgLy8gfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgZmV0Y2hEYXRhKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBsZXQgZG9jdG9yX2lkID0gcHJvcHMuc2VsZWN0ZWREb2N0b3IgfHwgcHJvcHMubWF0Y2gucGFyYW1zLmlkIHx8IHBhcnNlZC5kb2N0b3JfaWRcbiAgICAgICAgbGV0IGhvc3BpdGFsX2lkID0gcGFyc2VkLmhvc3BpdGFsX2lkIHx8IHByb3BzLm1hdGNoLnBhcmFtcy5jbGluaWNJZFxuXG4gICAgICAgIGlmIChkb2N0b3JfaWQpIHtcbiAgICAgICAgICAgIHByb3BzLmdldERvY3RvckJ5SWQoZG9jdG9yX2lkLCBob3NwaXRhbF9pZCwgcHJvcHMuY29tbW9uUHJvZmlsZVNlbGVjdGVkUHJvY2VkdXJlcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmZldGNoRGF0YSh0aGlzLnByb3BzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkRG9jdG9yICE9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKHByb3BzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yIHx8IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkIHx8IHBhcnNlZC5kb2N0b3JfaWRcbiAgICAgICAgbGV0IGhvc3BpdGFsX2lkID0gcGFyc2VkLmhvc3BpdGFsX2lkIHx8IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmNsaW5pY0lkIFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBwb2ludG1lbnRTbG90VmlldyB7Li4udGhpcy5wcm9wc30gc2VsZWN0ZWREb2N0b3I9e2RvY3Rvcl9pZH0gc2VsZWN0ZWRDbGluaWM9e2hvc3BpdGFsX2lkfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cbiAgICBsZXQgRE9DVE9SUyA9IHN0YXRlLkRPQ1RPUl9QUk9GSUxFU1xuXG4gICAgbGV0IHsgc2VsZWN0ZWRTbG90LCByZXNjaGVkdWxlU2xvdCwgc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmUsIGNvbW1vblByb2ZpbGVTZWxlY3RlZFByb2NlZHVyZXMsIHNlbGVjdGVkRGF0ZUZvcm1hdCB9ID0gc3RhdGUuRE9DVE9SX1NFQVJDSFxuXG4gICAgbGV0IHsgY29tbW9uUHJvY2VkdXJlcnMsIHNlbGVjdGVkTG9jYXRpb24gfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIGxldCB7IHByaW1hcnlNb2JpbGUsIHVzZXJOYW1lIH0gPSBzdGF0ZS5VU0VSXG4gICAgcmV0dXJuIHtcbiAgICAgICAgRE9DVE9SUywgc2VsZWN0ZWRTbG90LCByZXNjaGVkdWxlU2xvdCwgY29tbW9uUHJvY2VkdXJlcnMsIHNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlLCBjb21tb25Qcm9maWxlU2VsZWN0ZWRQcm9jZWR1cmVzLCBzZWxlY3RlZERhdGVGb3JtYXQsIHNlbGVjdGVkTG9jYXRpb24sIHByaW1hcnlNb2JpbGUsIHVzZXJOYW1lXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXREb2N0b3JCeUlkOiAoZG9jdG9ySWQsIGNsaW5pY0lkLCBwcm9jZWR1cmVfaWRzLCBjYXRlZ29yeV9pZHMpID0+IGRpc3BhdGNoKGdldERvY3RvckJ5SWQoZG9jdG9ySWQsIGNsaW5pY0lkLCBwcm9jZWR1cmVfaWRzLCBjYXRlZ29yeV9pZHMpKSxcbiAgICAgICAgZ2V0VGltZVNsb3RzOiAoZG9jdG9ySWQsIGNsaW5pY0lkLCBleHRyYVBhcmFtLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0VGltZVNsb3RzKGRvY3RvcklkLCBjbGluaWNJZCwgZXh0cmFQYXJhbSwgY2FsbGJhY2spKSxcbiAgICAgICAgc2VsZWN0T3BkVGltZVNMb3Q6IChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkLCBkYXRlUGFyYW0pID0+IGRpc3BhdGNoKHNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUsIGFwcG9pbnRtZW50SWQsIGRhdGVQYXJhbSkpLFxuICAgICAgICBzdWJtaXRJUERGb3JtOiAoZm9ybURhdGEsIHNlbGVjdGVkTG9jYXRpb24sIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRJUERGb3JtKGZvcm1EYXRhLCBzZWxlY3RlZExvY2F0aW9uLCBjYikpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcG9pbnRtZW50U2xvdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9