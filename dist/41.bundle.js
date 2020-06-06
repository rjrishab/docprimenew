(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "./node_modules/rc-calendar/es/index.js");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var DAYS_TO_SHOW = 40;
var WEEK_DAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
var MONTHS = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var DateTimePicker = function (_React$Component) {
    _inherits(DateTimePicker, _React$Component);

    function DateTimePicker(props) {
        _classCallCheck(this, DateTimePicker);

        var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

        _this.state = {
            selectedDateSpan: props.selectedSlot && props.selectedSlot.date ? new Date(props.selectedSlot.date) : props.selectedDateFormat ? new Date(props.selectedDateFormat) : new Date(),
            currentTimeSlot: props.selectedSlot && props.selectedSlot.time ? props.selectedSlot.time : {},
            dateModal: false,
            daySeries: []
        };
        return _this;
    }

    _createClass(DateTimePicker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
            //If time is already selected by user , then on every page load we by default select that time 
            if (this.props.selectedSlot && this.props.selectedSlot.date && this.props.selectedSlot.time && this.props.selectedSlot.time.text) {
                this.props.enableProceed(true);

                this.generateDays(true, this.props.selectedSlot.date);
            } else {
                var getUpcomingDate = false;
                var upcoming_time = null;
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
    }, {
        key: 'generateDays',
        value: function generateDays() {
            var getNewDates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var selectedDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            //This function will generate dummy dates ,starting from the getNewDates parameter
            var offset = void 0,
                currentDate = void 0;

            var dateCount = 1;
            var totalDateVisited = 1;
            var daySeries = [];

            if (getNewDates) {
                offset = new Date(selectedDate);
                currentDate = new Date(selectedDate);
            } else {
                offset = new Date();
                currentDate = new Date();
            }
            var formattedDate = this.getFormattedDate(offset);
            daySeries.push({
                dateFormat: new Date(offset),
                formattedDate: formattedDate
            });

            while (dateCount != 3 && totalDateVisited < 30) {
                offset.setDate(currentDate.getDate() + totalDateVisited);
                var _formattedDate = this.getFormattedDate(offset);

                if (this.props.timeSlots && this.props.timeSlots[_formattedDate] && this.props.timeSlots[_formattedDate].length) {
                    daySeries.push({
                        dateFormat: new Date(offset),
                        formattedDate: _formattedDate
                    });
                    dateCount++;
                }
                totalDateVisited++;
                offset = new Date(currentDate);
            }
            this.setState({ daySeries: daySeries });
        }
    }, {
        key: 'openDateModal',
        value: function openDateModal() {
            //open calendar modal
            this.setState({ dateModal: !this.state.dateModal });
        }
    }, {
        key: 'selectDate',
        value: function selectDate(dateFormat) {
            //funciton calls when user select the date 
            var formattedDate = this.getFormattedDate(dateFormat);
            if (new Date(this.state.selectedDateSpan).toDateString() != new Date(dateFormat).toDateString()) {
                if (this.props.timeSlots && this.props.timeSlots[formattedDate]) {} else {
                    this.props.getOpdTimeSlot(formattedDate);
                }
                this.setState({ selectedDateSpan: dateFormat, currentTimeSlot: {} });
                this.props.enableProceed(false, []);
            }
        }
    }, {
        key: 'selectDateFromCalendar',
        value: function selectDateFromCalendar(date) {
            var _this2 = this;

            //funciton calls when user select the date from the date calendar
            if (date) {
                date = date.toDate();
                this.setState({ dateModal: false }, function () {
                    _this2.props.enableProceed(false, []);
                    _this2.pickDate(new Date(date));
                });
            } else {
                this.setState({ dateModal: false });
            }
        }
    }, {
        key: 'pickDate',
        value: function pickDate(date) {
            if (date) {
                var selectedDate = new Date(date);
                this.generateDays(true, selectedDate);
                this.selectDate(selectedDate);
            }
        }
    }, {
        key: 'selectTime',
        value: function selectTime(time, title) {
            //function calls when user select the time
            var self = this;
            var timeSpan = Object.assign({}, time);
            timeSpan.title = title;
            this.setState({ currentTimeSlot: timeSpan }, function () {
                var data = {
                    date: self.state.selectedDateSpan,
                    month: MONTHS[new Date(self.state.selectedDateSpan).getMonth()],
                    slot: '',
                    time: self.state.currentTimeSlot
                };
                self.props.enableProceed(false, data);
            });
        }
    }, {
        key: 'getFormattedDate',
        value: function getFormattedDate(date) {
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
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var selectedFormattedDate = this.getFormattedDate(this.state.selectedDateSpan);
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
                                    this.state.daySeries.map(function (day, key) {

                                        return _react2.default.createElement(
                                            'li',
                                            { key: key, onClick: _this3.selectDate.bind(_this3, day.dateFormat) },
                                            _react2.default.createElement(
                                                'p',
                                                { className: new Date(day.dateFormat).toDateString() == new Date(_this3.state.selectedDateSpan).toDateString() ? 'date-list-active' : '' },
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
                                            disabledDate: function disabledDate(date) {
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
                        this.props.timeSlots && this.props.timeSlots[selectedFormattedDate] && this.props.timeSlots[selectedFormattedDate].length ? this.props.timeSlots[selectedFormattedDate].map(function (schedule, key) {

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
                                        schedule.timing.map(function (time, i) {
                                            return _react2.default.createElement(
                                                'li',
                                                { key: i, className: 'time-slot-li-listing', onClick: _this3.selectTime.bind(_this3, time, schedule.title) },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'time-slot-timmings ' + (_this3.state.currentTimeSlot.value == time.value ? " time-active" : '') },
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
    }]);

    return DateTimePicker;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

//import TimeSlotSelector from '../../commons/timeSlotSelector/index.js'

var AppointmentSlot = function (_React$Component) {
    _inherits(AppointmentSlot, _React$Component);

    function AppointmentSlot(props) {
        _classCallCheck(this, AppointmentSlot);

        var _this = _possibleConstructorReturn(this, (AppointmentSlot.__proto__ || Object.getPrototypeOf(AppointmentSlot)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);

        var doctor_id = _this.props.selectedDoctor;
        var hospital_id = _this.props.selectedClinic;

        _this.state = {
            selectedDoctor: doctor_id,
            selectedClinic: hospital_id,
            reschedule: _this.props.location.search.includes('reschedule'),
            goback: _this.props.location.search.includes('goback'),
            timeSlots: null,
            doctor_leaves: [],
            enableProceed: false,
            selectedTimeSlot: {},
            upcoming_slots: null,
            showPopup: false
        };
        return _this;
    }

    _createClass(AppointmentSlot, [{
        key: 'proceed',
        value: function proceed(e) {
            var _this2 = this;

            //user select the timeslot & click the button to proceed
            e.preventDefault();
            e.stopPropagation();

            var data = {
                'Category': 'ConsumerApp', 'Action': 'UserCickedSelectedButton', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'user-clicked-select-button' };
            _gtm2.default.sendEvent({ data: data });

            if (this.state.selectedTimeSlot) {
                this.selectTimeSlot(this.state.selectedTimeSlot);
            }

            //Create IPD Lead on Time slot selection for login user & for ipd hospital(potential + congot)
            if (_storage2.default.checkAuth() && this.props.DOCTORS && this.props.DOCTORS[this.props.selectedDoctor]) {

                //Check for ipd hospital for the selected Clinic
                var hospital = {};
                var hospitals = this.props.DOCTORS[this.props.selectedDoctor].hospitals;
                if (hospitals && hospitals.length) {
                    hospitals.map(function (hsptl) {
                        if (hsptl.hospital_id == _this2.props.selectedClinic) {
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
                var parsed = queryString.parse(this.props.location.search);
                return this.props.history.replace('/opd/reschedule/' + parsed.reschedule);
            }
            // go back for goback
            if (this.state.goback) {
                this.props.history.go(-1);
                return;
            }
            if (this.state.selectedTimeSlot) {
                var _data = {
                    'Category': 'ConsumerApp', 'Action': 'OpdAppointmentDate', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-appointment-date', 'appointmentTime': this.props.selectedSlot.date };
                _gtm2.default.sendEvent({ data: _data });

                return this.props.history.push('/opd/doctor/' + this.props.selectedDoctor + '/' + this.props.selectedClinic + '/bookdetails');
            }
        }
    }, {
        key: 'selectTimeSlot',
        value: function selectTimeSlot(slot) {
            //user select time 
            var parsed = queryString.parse(this.props.location.search);
            slot.selectedDoctor = this.props.selectedDoctor;
            slot.selectedClinic = this.props.selectedClinic;
            var extraTimeParams = null;
            if (this.state.selectedTimeSlot && this.state.selectedTimeSlot.date) {
                extraTimeParams = this.getFormattedDate(this.state.selectedTimeSlot.date);
            }
            this.props.selectOpdTimeSLot(slot, this.state.reschedule, parsed.reschedule, extraTimeParams);
        }
    }, {
        key: 'getFormattedDate',
        value: function getFormattedDate(date) {
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
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var selectedDate = new Date();
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
    }, {
        key: 'getOpdTimeSlot',
        value: function getOpdTimeSlot(selectedDate) {
            var _this3 = this;

            var clinicId = this.props.selectedClinic;
            var doctorId = this.props.selectedDoctor;

            var extraParams = {
                selectedDate: selectedDate
            };
            this.props.getTimeSlots(doctorId, clinicId, extraParams, function (timeSlots) {
                _this3.setState({ timeSlots: timeSlots.timeslots, doctor_leaves: timeSlots.doctor_leaves, upcoming_slots: timeSlots.upcoming_slots || {} });
            });
        }
    }, {
        key: 'enableProceed',
        value: function enableProceed(enable) {
            var slot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
    }, {
        key: 'popupBtnClick',
        value: function popupBtnClick(flag) {
            var parsed = queryString.parse(this.props.location.search);
            if (!flag) {
                this.props.history.push('/opd/reschedule/' + parsed.reschedule);
            }
            this.setState({ showPopup: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

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
                                                { onClick: function onClick() {
                                                        return _this4.popupBtnClick(true);
                                                    } },
                                                'Yes'
                                            ),
                                            _react2.default.createElement(
                                                'button',
                                                { onClick: function onClick() {
                                                        return _this4.popupBtnClick(false);
                                                    } },
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
    }]);

    return AppointmentSlot;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../components/opd/appointmentSlot/index.js */ "./dev/js/components/opd/appointmentSlot/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var AppointmentSlot = function (_React$Component) {
    _inherits(AppointmentSlot, _React$Component);

    function AppointmentSlot(props) {
        _classCallCheck(this, AppointmentSlot);

        return _possibleConstructorReturn(this, (AppointmentSlot.__proto__ || Object.getPrototypeOf(AppointmentSlot)).call(this, props));
    }

    // static loadData(store, match, queryData) {
    //     let doctor_id = match.params.id || queryData.doctor_id
    //     let hospital_id = match.params.clinicId || queryData.hospital_id

    //     return store.dispatch(getDoctorById(doctor_id, hospital_id))
    // }

    _createClass(AppointmentSlot, [{
        key: 'fetchData',
        value: function fetchData(props) {
            var parsed = queryString.parse(props.location.search);

            var doctor_id = props.selectedDoctor || props.match.params.id || parsed.doctor_id;
            var hospital_id = parsed.hospital_id || props.match.params.clinicId;

            if (doctor_id) {
                props.getDoctorById(doctor_id, hospital_id, props.commonProfileSelectedProcedures);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchData(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.selectedDoctor != this.props.selectedDoctor) {
                this.fetchData(props);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var parsed = queryString.parse(this.props.location.search);

            var doctor_id = this.props.selectedDoctor || this.props.match.params.id || parsed.doctor_id;
            var hospital_id = parsed.hospital_id || this.props.match.params.clinicId;

            return _react2.default.createElement(_index3.default, _extends({}, this.props, { selectedDoctor: doctor_id, selectedClinic: hospital_id }));
        }
    }]);

    return AppointmentSlot;
}(_react2.default.Component);

AppointmentSlot.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {

    var DOCTORS = state.DOCTOR_PROFILES;

    var _state$DOCTOR_SEARCH = state.DOCTOR_SEARCH,
        selectedSlot = _state$DOCTOR_SEARCH.selectedSlot,
        rescheduleSlot = _state$DOCTOR_SEARCH.rescheduleSlot,
        selectedDoctorProcedure = _state$DOCTOR_SEARCH.selectedDoctorProcedure,
        commonProfileSelectedProcedures = _state$DOCTOR_SEARCH.commonProfileSelectedProcedures,
        selectedDateFormat = _state$DOCTOR_SEARCH.selectedDateFormat;
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
        commonProcedurers = _state$SEARCH_CRITERI.commonProcedurers,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation;
    var _state$USER = state.USER,
        primaryMobile = _state$USER.primaryMobile,
        userName = _state$USER.userName;

    return {
        DOCTORS: DOCTORS, selectedSlot: selectedSlot, rescheduleSlot: rescheduleSlot, commonProcedurers: commonProcedurers, selectedDoctorProcedure: selectedDoctorProcedure, commonProfileSelectedProcedures: commonProfileSelectedProcedures, selectedDateFormat: selectedDateFormat, selectedLocation: selectedLocation, primaryMobile: primaryMobile, userName: userName
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getDoctorById: function getDoctorById(doctorId, clinicId, procedure_ids, category_ids) {
            return dispatch((0, _index.getDoctorById)(doctorId, clinicId, procedure_ids, category_ids));
        },
        getTimeSlots: function getTimeSlots(doctorId, clinicId, extraParam, callback) {
            return dispatch((0, _index.getTimeSlots)(doctorId, clinicId, extraParam, callback));
        },
        selectOpdTimeSLot: function selectOpdTimeSLot(slot, reschedule, appointmentId, dateParam) {
            return dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId, dateParam));
        },
        submitIPDForm: function submitIPDForm(formData, selectedLocation, cb) {
            return dispatch((0, _index.submitIPDForm)(formData, selectedLocation, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppointmentSlot);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0RhdGVUaW1lU2VsZWN0b3IvRGF0ZVRpbWVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9EYXRlVGltZVNlbGVjdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9hcHBvaW50bWVudFNsb3QvQXBwb2ludG1lbnRTbG90LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9hcHBvaW50bWVudFNsb3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvb3BkL0FwcG9pbnRtZW50U2xvdC5qcyJdLCJuYW1lcyI6WyJtb21lbnQiLCJyZXF1aXJlIiwiREFZU19UT19TSE9XIiwiV0VFS19EQVlTIiwiTU9OVEhTIiwicXVlcnlTdHJpbmciLCJEYXRlVGltZVBpY2tlciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZERhdGVTcGFuIiwic2VsZWN0ZWRTbG90IiwiZGF0ZSIsIkRhdGUiLCJzZWxlY3RlZERhdGVGb3JtYXQiLCJjdXJyZW50VGltZVNsb3QiLCJ0aW1lIiwiZGF0ZU1vZGFsIiwiZGF5U2VyaWVzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0ZXh0IiwiZW5hYmxlUHJvY2VlZCIsImdlbmVyYXRlRGF5cyIsImdldFVwY29taW5nRGF0ZSIsInVwY29taW5nX3RpbWUiLCJ1cGNvbWluZ19zbG90cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0aW1lU2xvdHMiLCJzZXRTdGF0ZSIsImdldE5ld0RhdGVzIiwic2VsZWN0ZWREYXRlIiwib2Zmc2V0IiwiY3VycmVudERhdGUiLCJkYXRlQ291bnQiLCJ0b3RhbERhdGVWaXNpdGVkIiwiZm9ybWF0dGVkRGF0ZSIsImdldEZvcm1hdHRlZERhdGUiLCJwdXNoIiwiZGF0ZUZvcm1hdCIsInNldERhdGUiLCJnZXREYXRlIiwidG9EYXRlU3RyaW5nIiwiZ2V0T3BkVGltZVNsb3QiLCJ0b0RhdGUiLCJwaWNrRGF0ZSIsInNlbGVjdERhdGUiLCJ0aXRsZSIsInNlbGYiLCJ0aW1lU3BhbiIsImFzc2lnbiIsImRhdGEiLCJtb250aCIsImdldE1vbnRoIiwic2xvdCIsImRkIiwibW0iLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsInNlbGVjdGVkRm9ybWF0dGVkRGF0ZSIsIkFTU0VUU19CQVNFX1VSTCIsIm9wZW5EYXRlTW9kYWwiLCJiaW5kIiwidHJhbnNmb3JtIiwibWFwIiwiZGF5Iiwia2V5IiwiZ2V0RGF5Iiwid2lkdGgiLCJ0b3AiLCJkaWZmIiwic2VsZWN0RGF0ZUZyb21DYWxlbmRhciIsInNjaGVkdWxlIiwidGltaW5nIiwiaSIsInNlbGVjdFRpbWUiLCJ2YWx1ZSIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJEYXRlVGltZVNlbGVjdG9yIiwiQXBwb2ludG1lbnRTbG90IiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsImRvY3Rvcl9pZCIsInNlbGVjdGVkRG9jdG9yIiwiaG9zcGl0YWxfaWQiLCJzZWxlY3RlZENsaW5pYyIsInJlc2NoZWR1bGUiLCJpbmNsdWRlcyIsImdvYmFjayIsImRvY3Rvcl9sZWF2ZXMiLCJzZWxlY3RlZFRpbWVTbG90Iiwic2hvd1BvcHVwIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50Iiwic2VsZWN0VGltZVNsb3QiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiRE9DVE9SUyIsImhvc3BpdGFsIiwiaG9zcGl0YWxzIiwiaHNwdGwiLCJoaXN0b3J5IiwicmVwbGFjZSIsImdvIiwiZXh0cmFUaW1lUGFyYW1zIiwic2VsZWN0T3BkVGltZVNMb3QiLCJjbGluaWNJZCIsImRvY3RvcklkIiwiZXh0cmFQYXJhbXMiLCJnZXRUaW1lU2xvdHMiLCJ0aW1lc2xvdHMiLCJlbmFibGUiLCJ2YWx1ZXMiLCJmbGFnIiwicG9wdXBCdG5DbGljayIsInJlc2NoZWR1bGVTbG90IiwicHJvY2VlZCIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJnZXREb2N0b3JCeUlkIiwiY29tbW9uUHJvZmlsZVNlbGVjdGVkUHJvY2VkdXJlcyIsImZldGNoRGF0YSIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIkRPQ1RPUl9QUk9GSUxFUyIsIkRPQ1RPUl9TRUFSQ0giLCJzZWxlY3RlZERvY3RvclByb2NlZHVyZSIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJjb21tb25Qcm9jZWR1cmVycyIsInNlbGVjdGVkTG9jYXRpb24iLCJVU0VSIiwicHJpbWFyeU1vYmlsZSIsInVzZXJOYW1lIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9jZWR1cmVfaWRzIiwiY2F0ZWdvcnlfaWRzIiwiZXh0cmFQYXJhbSIsImNhbGxiYWNrIiwiYXBwb2ludG1lbnRJZCIsImRhdGVQYXJhbSIsInN1Ym1pdElQREZvcm0iLCJmb3JtRGF0YSIsImNiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBT0E7Ozs7Ozs7Ozs7OztBQU5BLElBQU1BLFNBQVNDLG1CQUFPQSxDQUFDLCtDQUFSLENBQWY7O0FBRUEsSUFBTUMsZUFBZSxFQUFyQjtBQUNBLElBQU1DLFlBQVksQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLE1BQWYsRUFBdUIsS0FBdkIsRUFBOEIsTUFBOUIsRUFBc0MsS0FBdEMsRUFBNkMsS0FBN0MsQ0FBbEI7QUFDQSxJQUFNQyxTQUFTLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLE9BQXRCLEVBQStCLEtBQS9CLEVBQXNDLE1BQXRDLEVBQThDLE1BQTlDLEVBQXNELEtBQXRELEVBQTZELE1BQTdELEVBQXFFLEtBQXJFLEVBQTRFLEtBQTVFLEVBQW1GLEtBQW5GLENBQWY7QUFDQSxJQUFNQyxjQUFjSixt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QWM7QUFDckMsV0FBTztBQUNIaEIsdUJBQWUsdUJBQUNiLFFBQUQsRUFBV0QsUUFBWCxFQUFxQitCLGFBQXJCLEVBQW9DQyxZQUFwQztBQUFBLG1CQUFxREYsU0FBUywwQkFBYzdCLFFBQWQsRUFBd0JELFFBQXhCLEVBQWtDK0IsYUFBbEMsRUFBaURDLFlBQWpELENBQVQsQ0FBckQ7QUFBQSxTQURaO0FBRUg3QixzQkFBYyxzQkFBQ0YsUUFBRCxFQUFXRCxRQUFYLEVBQXFCaUMsVUFBckIsRUFBaUNDLFFBQWpDO0FBQUEsbUJBQThDSixTQUFTLHlCQUFhN0IsUUFBYixFQUF1QkQsUUFBdkIsRUFBaUNpQyxVQUFqQyxFQUE2Q0MsUUFBN0MsQ0FBVCxDQUE5QztBQUFBLFNBRlg7QUFHSG5DLDJCQUFtQiwyQkFBQzdELElBQUQsRUFBT3NDLFVBQVAsRUFBbUIyRCxhQUFuQixFQUFrQ0MsU0FBbEM7QUFBQSxtQkFBZ0ROLFNBQVMsOEJBQWtCNUYsSUFBbEIsRUFBd0JzQyxVQUF4QixFQUFvQzJELGFBQXBDLEVBQW1EQyxTQUFuRCxDQUFULENBQWhEO0FBQUEsU0FIaEI7QUFJSEMsdUJBQWUsdUJBQUNDLFFBQUQsRUFBV2IsZ0JBQVgsRUFBNkJjLEVBQTdCO0FBQUEsbUJBQW9DVCxTQUFTLDBCQUFjUSxRQUFkLEVBQXdCYixnQkFBeEIsRUFBMENjLEVBQTFDLENBQVQsQ0FBcEM7QUFBQTtBQUpaLEtBQVA7QUFNSCxDQVBEOztrQkFVZSx5QkFBUXBCLGVBQVIsRUFBeUJVLGtCQUF6QixFQUE2QzlELGVBQTdDLEMiLCJmaWxlIjoiNDEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyJztcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5jb25zdCBEQVlTX1RPX1NIT1cgPSA0MFxuY29uc3QgV0VFS19EQVlTID0gWydTdW4nLCAnTW9uJywgJ1R1ZXMnLCAnV2VkJywgJ1RodXInLCAnRnJpJywgJ1NhdCddXG5jb25zdCBNT05USFMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVnJywgJ1NlcHQnLCAnT2N0JywgJ05vdicsICdEZWMnXVxuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuY2xhc3MgRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWREYXRlU3BhbjogcHJvcHMuc2VsZWN0ZWRTbG90ICYmIHByb3BzLnNlbGVjdGVkU2xvdC5kYXRlP25ldyBEYXRlKHByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKTpwcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQ/bmV3IERhdGUocHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0KTpuZXcgRGF0ZSgpLFxuXHRcdFx0Y3VycmVudFRpbWVTbG90OiBwcm9wcy5zZWxlY3RlZFNsb3QgJiYgcHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUgPyBwcm9wcy5zZWxlY3RlZFNsb3QudGltZSA6IHt9LFxuXHRcdFx0ZGF0ZU1vZGFsOiBmYWxzZSxcblx0XHRcdGRheVNlcmllczpbXVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICAvL0lmIHRpbWUgaXMgYWxyZWFkeSBzZWxlY3RlZCBieSB1c2VyICwgdGhlbiBvbiBldmVyeSBwYWdlIGxvYWQgd2UgYnkgZGVmYXVsdCBzZWxlY3QgdGhhdCB0aW1lIFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUudGV4dCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVQcm9jZWVkKHRydWUpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVEYXlzKHRydWUsIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZ2V0VXBjb21pbmdEYXRlPSBmYWxzZVxuICAgICAgICAgICAgbGV0IHVwY29taW5nX3RpbWUgPSBudWxsXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCkge1xuICAgICAgICAgICAgICAgIHVwY29taW5nX3RpbWUgPSB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudXBjb21pbmdfc2xvdHMpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgdXBjb21pbmdfdGltZSA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMudXBjb21pbmdfc2xvdHMpWzBdICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHVwY29taW5nX3RpbWUgJiYgdGhpcy5wcm9wcy50aW1lU2xvdHNbdXBjb21pbmdfdGltZV0gKXtcbiAgICAgICAgICAgICAgICBnZXRVcGNvbWluZ0RhdGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWREYXRlU3BhbjogbmV3IERhdGUodXBjb21pbmdfdGltZSl9KVxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVEYXlzKHRydWUsIG5ldyBEYXRlKHVwY29taW5nX3RpbWUpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighZ2V0VXBjb21pbmdEYXRlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlRGF5cygpICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdlbmVyYXRlRGF5cyhnZXROZXdEYXRlcyA9IGZhbHNlLCBzZWxlY3RlZERhdGUgPSAnJyl7XG4gICAgICAgIC8vVGhpcyBmdW5jdGlvbiB3aWxsIGdlbmVyYXRlIGR1bW15IGRhdGVzICxzdGFydGluZyBmcm9tIHRoZSBnZXROZXdEYXRlcyBwYXJhbWV0ZXJcbiAgICAgICAgbGV0IG9mZnNldCwgY3VycmVudERhdGVcbiAgICAgICAgXG4gICAgICAgIGxldCBkYXRlQ291bnQgPSAxXG4gICAgICAgIGxldCB0b3RhbERhdGVWaXNpdGVkID0gMVxuICAgICAgICBsZXQgZGF5U2VyaWVzID0gW11cblxuICAgICAgICBpZiAoZ2V0TmV3RGF0ZXMpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZSlcbiAgICAgICAgICAgIGN1cnJlbnREYXRlID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcblxuICAgICAgICB9XG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKG9mZnNldClcbiAgICAgICAgZGF5U2VyaWVzLnB1c2goe1xuICAgICAgICAgICAgZGF0ZUZvcm1hdDogbmV3IERhdGUob2Zmc2V0KSxcbiAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6IGZvcm1hdHRlZERhdGVcbiAgICAgICAgfSlcblxuXG4gICAgICAgIHdoaWxlKGRhdGVDb3VudCE9MyAmJiB0b3RhbERhdGVWaXNpdGVkPDMwKXtcbiAgICAgICAgXHRvZmZzZXQuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyB0b3RhbERhdGVWaXNpdGVkKVxuICAgICAgICBcdGxldCBmb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKG9mZnNldClcblxuICAgICAgICBcdGlmKHRoaXMucHJvcHMudGltZVNsb3RzICYmIHRoaXMucHJvcHMudGltZVNsb3RzW2Zvcm1hdHRlZERhdGVdICYmIHRoaXMucHJvcHMudGltZVNsb3RzW2Zvcm1hdHRlZERhdGVdLmxlbmd0aCl7XG4gICAgICAgIFx0XHRkYXlTZXJpZXMucHVzaCh7XG5cdCAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiBuZXcgRGF0ZShvZmZzZXQpLFxuXHQgICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTogZm9ybWF0dGVkRGF0ZVxuXHQgICAgICAgICAgICB9KVxuXHQgICAgICAgICBcdGRhdGVDb3VudCsrXG4gICAgICAgIFx0fVxuICAgICAgICBcdHRvdGFsRGF0ZVZpc2l0ZWQrK1xuICAgICAgICBcdG9mZnNldCA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXlTZXJpZXM6IGRheVNlcmllcyAgfSlcbiAgICB9XG5cblx0b3BlbkRhdGVNb2RhbCgpIHtcbiAgICAgICAgLy9vcGVuIGNhbGVuZGFyIG1vZGFsXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlTW9kYWw6ICF0aGlzLnN0YXRlLmRhdGVNb2RhbCB9KVxuICAgIH1cblxuICAgIHNlbGVjdERhdGUoZGF0ZUZvcm1hdCkge1xuICAgICAgICAvL2Z1bmNpdG9uIGNhbGxzIHdoZW4gdXNlciBzZWxlY3QgdGhlIGRhdGUgXG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKGRhdGVGb3JtYXQpXG4gICAgXHRpZihuZXcgRGF0ZSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZVNwYW4pLnRvRGF0ZVN0cmluZygpICE9IG5ldyBEYXRlKGRhdGVGb3JtYXQpLnRvRGF0ZVN0cmluZygpKXtcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudGltZVNsb3RzICYmIHRoaXMucHJvcHMudGltZVNsb3RzW2Zvcm1hdHRlZERhdGVdKXtcblxuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0T3BkVGltZVNsb3QoZm9ybWF0dGVkRGF0ZSlcblxuICAgICAgICAgICAgfVxuICAgIFx0XHR0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWREYXRlU3BhbjogZGF0ZUZvcm1hdCwgY3VycmVudFRpbWVTbG90OiB7fSB9KVxuICAgICAgICBcdHRoaXMucHJvcHMuZW5hYmxlUHJvY2VlZChmYWxzZSwgW10pXHRcbiAgICBcdH1cbiAgICB9XG5cbiAgICBzZWxlY3REYXRlRnJvbUNhbGVuZGFyKGRhdGUpIHtcbiAgICAgICAgLy9mdW5jaXRvbiBjYWxscyB3aGVuIHVzZXIgc2VsZWN0IHRoZSBkYXRlIGZyb20gdGhlIGRhdGUgY2FsZW5kYXJcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLnRvRGF0ZSgpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVQcm9jZWVkKGZhbHNlLCBbXSlcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tEYXRlKG5ldyBEYXRlKGRhdGUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlTW9kYWw6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwaWNrRGF0ZShkYXRlKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVEYXlzKHRydWUsIHNlbGVjdGVkRGF0ZSlcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGF0ZShzZWxlY3RlZERhdGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RUaW1lKHRpbWUsIHRpdGxlKSB7XG4gICAgICAgLy9mdW5jdGlvbiBjYWxscyB3aGVuIHVzZXIgc2VsZWN0IHRoZSB0aW1lXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgdGltZVNwYW4gPSBPYmplY3QuYXNzaWduKHt9LCB0aW1lKVxuICAgICAgICB0aW1lU3Bhbi50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGltZVNsb3Q6IHRpbWVTcGFuIH0sICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGRhdGU6IHNlbGYuc3RhdGUuc2VsZWN0ZWREYXRlU3BhbixcbiAgICAgICAgICAgICAgICBtb250aDogTU9OVEhTW25ldyBEYXRlKHNlbGYuc3RhdGUuc2VsZWN0ZWREYXRlU3BhbikuZ2V0TW9udGgoKV0sXG4gICAgICAgICAgICAgICAgc2xvdDogJycsXG4gICAgICAgICAgICAgICAgdGltZTogc2VsZi5zdGF0ZS5jdXJyZW50VGltZVNsb3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYucHJvcHMuZW5hYmxlUHJvY2VlZChmYWxzZSwgZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAgZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKXtcbiAgICAgICAgLy9nZW5lcmF0ZSBkYXRlIGluIHl5eXktbW0tZGQgZm9ybWF0XG4gICAgICAgIHZhciBkZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHZhciBtbSA9IGRhdGUuZ2V0TW9udGgoKSsxOyBcbiAgICAgICAgdmFyIHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmKGRkPDEwKSBcbiAgICAgICAge1xuICAgICAgICAgICAgZGQ9JzAnK2RkO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmKG1tPDEwKSBcbiAgICAgICAge1xuICAgICAgICAgICAgbW09JzAnK21tO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvZGF5ID0geXl5eSsnLScrbW0rJy0nK2RkO1xuICAgICAgICByZXR1cm4gdG9kYXlcbiAgICB9XG5cblx0cmVuZGVyKCl7XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkRm9ybWF0dGVkRGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZVNwYW4pXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJuZy10b3AtMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtc2xvdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1kYXRlLXNlbGVjdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xlY3QtZGF0ZS1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGVjdC1kYXRlLWltZy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10ZXh0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctY2FsLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VsZWN0IEFwcG9pbnRtZW50IERhdGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWwtZGF0ZS1saXN0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ2ZXItZGF0ZS1saXN0LXVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXlTZXJpZXMgJiYgdGhpcy5zdGF0ZS5kYXlTZXJpZXMubGVuZ3RoICYmIHRoaXMuc3RhdGUuZGF5U2VyaWVzWzBdLmRhdGVGb3JtYXQgPiBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPzxsaSBjbGFzc05hbWU9XCJzY3JsbC1kYXRlXCIgb25DbGljaz17dGhpcy5vcGVuRGF0ZU1vZGFsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JpZ2h0LXNjLnN2Z1wifSBzdHlsZT17e3RyYW5zZm9ybToncm90YXRlKDE4MGRlZyknfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF5U2VyaWVzLm1hcCgoZGF5LCBrZXkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17a2V5fSBvbkNsaWNrPXt0aGlzLnNlbGVjdERhdGUuYmluZCh0aGlzLCBkYXkuZGF0ZUZvcm1hdCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtuZXcgRGF0ZShkYXkuZGF0ZUZvcm1hdCkudG9EYXRlU3RyaW5nKCkgPT0gbmV3IERhdGUodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGVTcGFuKS50b0RhdGVTdHJpbmcoKSA/ICdkYXRlLWxpc3QtYWN0aXZlJzonJ30+e25ldyBEYXRlKGRheS5kYXRlRm9ybWF0KS5nZXREYXRlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e25ldyBEYXRlKGRheS5kYXRlRm9ybWF0KS50b0RhdGVTdHJpbmcoKSA9PSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpID8gJ1RvZGF5JyA6IFdFRUtfREFZU1sobmV3ICBEYXRlKGRheS5kYXRlRm9ybWF0KSkuZ2V0RGF5KCldfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNjcmxsLWRhdGVcIiBvbkNsaWNrPXt0aGlzLm9wZW5EYXRlTW9kYWwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicyMnB4JywgdG9wOicxMHB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhbG5leHQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0ZU1vZGFsID8gPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1vdmVybGF5XCI+PGRpdiBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1tb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2Vla051bWJlcj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bW9tZW50KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlU3Bhbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZT17KGRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmRpZmYobW9tZW50KChuZXcgRGF0ZSkpLCAnZGF5cycpIDwgMCB8fCBkYXRlLmRpZmYobW9tZW50KChuZXcgRGF0ZSkpLCAnZGF5cycpID4gMzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvZGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnNlbGVjdERhdGVGcm9tQ2FsZW5kYXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFx0dGhpcy5zdGF0ZS5kYXlTZXJpZXMubGVuZ3RoP1xuICAgICAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXRpbWUtc2xvdC1jb250YWluZXJcIj5cblx0XHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGVjdC1kYXRlLWltZy1jb250ZW50IG1iLTBcIj5cblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10ZXh0LWltZ1wiPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2F0Y2gtZGF0ZS5zdmdcIn0gLz5cblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8cD5TZWxlY3QgVGltZSBTbG90PC9wPlxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQgICAgICAgICAgICB7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0dGhpcy5wcm9wcy50aW1lU2xvdHMgJiYgdGhpcy5wcm9wcy50aW1lU2xvdHNbc2VsZWN0ZWRGb3JtYXR0ZWREYXRlXSAmJiB0aGlzLnByb3BzLnRpbWVTbG90c1tzZWxlY3RlZEZvcm1hdHRlZERhdGVdLmxlbmd0aD9cblx0XHRcdFx0ICAgICAgICAgICAgXHR0aGlzLnByb3BzLnRpbWVTbG90c1tzZWxlY3RlZEZvcm1hdHRlZERhdGVdLm1hcCgoc2NoZWR1bGUsIGtleSkgPT4ge1xuXG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRyZXR1cm4gc2NoZWR1bGUudGltaW5nICYmIHNjaGVkdWxlLnRpbWluZy5sZW5ndGg/XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHQ8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJzZWxlY3QtdGltZS1saXN0aW5nLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLXNoaWZ0XCI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAge3NjaGVkdWxlLnRpdGxlfVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtc2xvdC1tYWluLWxpc3RpbmdcIj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3QgdGltZS1pdGVtc1wiPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0c2NoZWR1bGUudGltaW5nLm1hcCgodGltZSwgaSk9PiB7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRyZXR1cm4gPGxpIGtleT17aX0gY2xhc3NOYW1lPVwidGltZS1zbG90LWxpLWxpc3RpbmdcIiBvbkNsaWNrPXtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGltZS5iaW5kKHRoaXMsIHRpbWUsIHNjaGVkdWxlLnRpdGxlKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGltZS1zbG90LXRpbW1pbmdzICR7dGhpcy5zdGF0ZS5jdXJyZW50VGltZVNsb3QudmFsdWUgPT0gdGltZS52YWx1ZT8gXCIgdGltZS1hY3RpdmVcIiA6ICcnfWB9Pnt0aW1lLnRleHR9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdH0pXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA6Jydcblx0XHRcdFx0ICAgICAgICAgICAgXHR9KVxuXHRcdFx0XHQgICAgICAgICAgICBcdDo8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC10aW1lLXNsb3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuby10bS1zbG90IHBsLTAgcHQtMjBcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICtcIi9pbWFnZXMvd2FybmluZy1pY29uLnBuZ1wifSBzdHlsZT17e2hlaWdodDogJzE1cHgnLCB3aWR0aDogJzE1cHgnLCBtYXJnaW5SaWdodDogJzhweCd9fS8+Tm90IGF2YWlsYWJsZSBvbiB0aGlzIGRheS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgPC9kaXY+XG5cdFx0XHRcdCAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXRpbWUtc2xvdC1jb250YWluZXJcIj5cblx0XHRcdFx0ICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm8tdG0tc2xvdCBwbC0wIHB0LTIwXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArXCIvaW1hZ2VzL3dhcm5pbmctaWNvbi5wbmdcIn0gc3R5bGU9e3toZWlnaHQ6ICcxNXB4Jywgd2lkdGg6ICcxNXB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnfX0vPk5vdCBhdmFpbGFibGUgb24gdGhpcyBkYXkuPC9wPlxuXHRcdFx0XHQgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lUGlja2VyXG4iLCJpbXBvcnQgRGF0ZVRpbWVTZWxlY3RvciBmcm9tICcuL0RhdGVUaW1lUGlja2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZVNlbGVjdG9yIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5pbXBvcnQgVGltZVNsb3RTZWxlY3RvciBmcm9tICcuLi8uLi9jb21tb25zL0RhdGVUaW1lU2VsZWN0b3IvaW5kZXguanMnXG5pbXBvcnQgU2VsZWN0ZWRDbGluaWMgZnJvbSAnLi4vY29tbW9ucy9zZWxlY3RlZENsaW5pYy9pbmRleC5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuLy9pbXBvcnQgVGltZVNsb3RTZWxlY3RvciBmcm9tICcuLi8uLi9jb21tb25zL3RpbWVTbG90U2VsZWN0b3IvaW5kZXguanMnXG5cbmNsYXNzIEFwcG9pbnRtZW50U2xvdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgbGV0IGRvY3Rvcl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JcbiAgICAgICAgbGV0IGhvc3BpdGFsX2lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZENsaW5pY1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZERvY3RvcjogZG9jdG9yX2lkLFxuICAgICAgICAgICAgc2VsZWN0ZWRDbGluaWM6IGhvc3BpdGFsX2lkLFxuICAgICAgICAgICAgcmVzY2hlZHVsZTogdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ3Jlc2NoZWR1bGUnKSxcbiAgICAgICAgICAgIGdvYmFjazogdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2dvYmFjaycpLFxuICAgICAgICAgICAgdGltZVNsb3RzOiBudWxsLFxuICAgICAgICAgICAgZG9jdG9yX2xlYXZlczogW10sXG4gICAgICAgICAgICBlbmFibGVQcm9jZWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkVGltZVNsb3Q6IHt9LFxuICAgICAgICAgICAgdXBjb21pbmdfc2xvdHM6IG51bGwsXG4gICAgICAgICAgICBzaG93UG9wdXA6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZWVkKGUpIHtcbiAgICAgICAgLy91c2VyIHNlbGVjdCB0aGUgdGltZXNsb3QgJiBjbGljayB0aGUgYnV0dG9uIHRvIHByb2NlZWRcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6J0NvbnN1bWVyQXBwJywnQWN0aW9uJzonVXNlckNpY2tlZFNlbGVjdGVkQnV0dG9uJywnQ3VzdG9tZXJJRCc6R1RNLmdldFVzZXJJZCgpfHwnJywnbGVhZGlkJzowLCdldmVudCc6J3VzZXItY2xpY2tlZC1zZWxlY3QtYnV0dG9uJ31cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3Qpe1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RUaW1lU2xvdCh0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3QpICAgIFxuICAgICAgICB9XG5cblxuICAgICAgICAvL0NyZWF0ZSBJUEQgTGVhZCBvbiBUaW1lIHNsb3Qgc2VsZWN0aW9uIGZvciBsb2dpbiB1c2VyICYgZm9yIGlwZCBob3NwaXRhbChwb3RlbnRpYWwgKyBjb25nb3QpXG4gICAgICAgIGlmKFNUT1JBR0UuY2hlY2tBdXRoKCkgJiYgdGhpcy5wcm9wcy5ET0NUT1JTICYmIHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSkge1xuXG4gICAgICAgICAgICAvL0NoZWNrIGZvciBpcGQgaG9zcGl0YWwgZm9yIHRoZSBzZWxlY3RlZCBDbGluaWNcbiAgICAgICAgICAgIGxldCBob3NwaXRhbCA9IHt9XG4gICAgICAgICAgICBsZXQgaG9zcGl0YWxzID0gdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdLmhvc3BpdGFsc1xuICAgICAgICAgICAgaWYgKGhvc3BpdGFscyAmJiBob3NwaXRhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaG9zcGl0YWxzLm1hcCgoaHNwdGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhzcHRsLmhvc3BpdGFsX2lkID09IHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsID0gaHNwdGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qaWYoaG9zcGl0YWwgJiYgaG9zcGl0YWwuaXNfaXBkX2hvc3BpdGFsKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXI6IHRoaXMucHJvcHMucHJpbWFyeU1vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgZG9jdG9yOiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yLFxuICAgICAgICAgICAgICAgICAgICBob3NwaXRhbDogdGhpcy5wcm9wcy5zZWxlY3RlZENsaW5pYyxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiAnZHJvcG9mZicsXG4gICAgICAgICAgICAgICAgICAgIGlzX3ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogdGhpcy5wcm9wcy51c2VyTmFtZXx8J3Vua25vd24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3VibWl0SVBERm9ybShmb3JtRGF0YSwgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgICAgICAgICAgfSovXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIGluIGNhc2Ugb2YgcmVzY2hlZHVsZSBnbyB0byByZXNjaGVkdWxlIHBhZ2UgLCBlbHNlIHB1c2hcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVzY2hlZHVsZSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9vcGQvcmVzY2hlZHVsZS8ke3BhcnNlZC5yZXNjaGVkdWxlfWApXG4gICAgICAgIH1cbiAgICAgICAgLy8gZ28gYmFjayBmb3IgZ29iYWNrXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdvYmFjaykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOidDb25zdW1lckFwcCcsJ0FjdGlvbic6J09wZEFwcG9pbnRtZW50RGF0ZScsJ0N1c3RvbWVySUQnOkdUTS5nZXRVc2VySWQoKXx8JycsJ2xlYWRpZCc6MCwnZXZlbnQnOidvcGQtYXBwb2ludG1lbnQtZGF0ZScsJ2FwcG9pbnRtZW50VGltZSc6dGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZX1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHt0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yfS8ke3RoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWN9L2Jvb2tkZXRhaWxzYClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdFRpbWVTbG90KHNsb3QpIHtcbiAgICAgICAgLy91c2VyIHNlbGVjdCB0aW1lIFxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgc2xvdC5zZWxlY3RlZERvY3RvciA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JcbiAgICAgICAgc2xvdC5zZWxlY3RlZENsaW5pYyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWNcbiAgICAgICAgbGV0IGV4dHJhVGltZVBhcmFtcyA9IG51bGxcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90ICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdC5kYXRlKSB7XG4gICAgICAgICAgICBleHRyYVRpbWVQYXJhbXMgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUodGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90LmRhdGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RPcGRUaW1lU0xvdChzbG90LCB0aGlzLnN0YXRlLnJlc2NoZWR1bGUsIHBhcnNlZC5yZXNjaGVkdWxlLCBleHRyYVRpbWVQYXJhbXMpXG4gICAgfVxuXG4gICAgZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKSB7XG4gICAgICAgIC8vZnVuY3Rpb24gd2hpY2ggcmV0dXJuIGRhdGUgaW4geXl5eS1tbS1kZCBmb3JtYXRcbiAgICAgICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgdmFyIG1tID0gZGF0ZS5nZXRNb250aCgpKzE7IFxuICAgICAgICB2YXIgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYoZGQ8MTApIFxuICAgICAgICB7XG4gICAgICAgICAgICBkZD0nMCcrZGQ7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYobW08MTApIFxuICAgICAgICB7XG4gICAgICAgICAgICBtbT0nMCcrbW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9kYXkgPSB5eXl5KyctJyttbSsnLScrZGQ7XG4gICAgICAgIHJldHVybiB0b2RheVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoKVxuICAgICAgICAvL3doZW4gY29tcG9uZW50IGxvYWQgLGl0IGNoZWNrIGlmIGFueSB0aW1lc2xvdCBzZWxlY3RlZCBlYXJsaWVyIGJ5IHVzZXIgZm9yIHRoZSBsYWIvZG9jdG9yLGlmIHNlbGVjdGVkIHRoZW4gYnlkZWZhdWx0IHdlIHNlbGVjdCB0aGVtIG9uIHBhZ2UgbG9hZFxuICAgICAgICBpZih0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCl7XG4gICAgICAgICAgICBzZWxlY3RlZERhdGUgPSB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlbGVjdGVkRGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShzZWxlY3RlZERhdGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRPcGRUaW1lU2xvdChzZWxlY3RlZERhdGUpXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFRpbWVTbG90OiB0aGlzLnByb3BzLnNlbGVjdFRpbWVTbG90IH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlc2NoZWR1bGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IHRydWUgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0T3BkVGltZVNsb3Qoc2VsZWN0ZWREYXRlKXtcbiAgICAgICAgbGV0IGNsaW5pY0lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZENsaW5pY1xuICAgICAgICBsZXQgZG9jdG9ySWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXG5cbiAgICAgICAgbGV0IGV4dHJhUGFyYW1zID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWREYXRlOiBzZWxlY3RlZERhdGVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmdldFRpbWVTbG90cyhkb2N0b3JJZCwgY2xpbmljSWQsIGV4dHJhUGFyYW1zLCAodGltZVNsb3RzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGltZVNsb3RzOiB0aW1lU2xvdHMudGltZXNsb3RzLCBkb2N0b3JfbGVhdmVzOiB0aW1lU2xvdHMuZG9jdG9yX2xlYXZlcywgdXBjb21pbmdfc2xvdHM6IHRpbWVTbG90cy51cGNvbWluZ19zbG90cyB8fCB7fSB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGVuYWJsZVByb2NlZWQoZW5hYmxlLCBzbG90ID0ge30pIHtcbiAgICAgICAgLy9mdW5jdGlvbiB3aGljaCBrZWVwIG9uIGNoZWNraW5nIG9uIGV2ZXJ5IHRpbWUgc2VsZWN0aW9uIHRoYXQgd2hldGhlciB0aW1lIGlzIHNlbGVjdGVkIG9yIG5vdFxuICAgICAgICBpZiAoZW5hYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlUHJvY2VlZDogdHJ1ZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoc2xvdCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZVByb2NlZWQ6IHRydWUsIHNlbGVjdGVkVGltZVNsb3Q6IHNsb3QgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZVByb2NlZWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3B1cEJ0bkNsaWNrKGZsYWcpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL3Jlc2NoZWR1bGUvJHtwYXJzZWQucmVzY2hlZHVsZX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiBmYWxzZSB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1BvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAtb3ZlcmxheVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYWRpaW5nLXNyY2gtZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtY29uZW50XCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2NoZWR1bGUgdGhpcyBhcHBvaW50bWVudD88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBvcHVwQnRuQ2xpY2sodHJ1ZSl9PlllczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wb3B1cEJ0bkNsaWNrKGZhbHNlKX0+Tm88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoZWFkZXIgY2xhc3NOYW1lPVwic2tpbi1wcmltYXJ5IGZpeGVkIGhvcml6b250YWwgdG9wIHN0aWNreS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGJhY2staWNvblwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9iYWNrLXdoaXRlLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZ3LTcwMCBjYXBpdGFsaXplIHRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIj5TZWxlY3QgRGF0ZSBhbmQgVGltZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuRE9DVE9SU1t0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkci1wcm9maWxlLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxTZWxlY3RlZENsaW5pY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERvY3Rvcj17dGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsaW5pYz17dGhpcy5wcm9wcy5zZWxlY3RlZENsaW5pY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRpbWVTbG90cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGltZVNsb3RTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTbG90cz17dGhpcy5zdGF0ZS50aW1lU2xvdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VGltZVNsb3Q9e3RoaXMuc2VsZWN0VGltZVNsb3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNsb3Q9e3RoaXMuc3RhdGUucmVzY2hlZHVsZSA/IHRoaXMucHJvcHMucmVzY2hlZHVsZVNsb3QgOiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JfbGVhdmVzPXt0aGlzLnN0YXRlLmRvY3Rvcl9sZWF2ZXMgfHwgW119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUHJvY2VlZCA9IHt0aGlzLmVuYWJsZVByb2NlZWQuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBjb21pbmdfc2xvdHM9IHt0aGlzLnN0YXRlLnVwY29taW5nX3Nsb3RzfSBnZXRPcGRUaW1lU2xvdD17dGhpcy5nZXRPcGRUaW1lU2xvdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+IDogPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5lbmFibGVQcm9jZWVkfSBvbkNsaWNrPXt0aGlzLnByb2NlZWQuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwicC0zIG1ydC0xMCB2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGF0aWMtYnRuIHN0aWNreS1idG5cIj5TZWxlY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIHR5cGU9XCJvcGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPERpc2NsYWltZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBcHBvaW50bWVudFNsb3RcbiIsImltcG9ydCBBcHBvaW50bWVudFNsb3QgZnJvbSAnLi9BcHBvaW50bWVudFNsb3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IEFwcG9pbnRtZW50U2xvdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXREb2N0b3JCeUlkLCBnZXRUaW1lU2xvdHMsIHNlbGVjdE9wZFRpbWVTTG90LCBzdWJtaXRJUERGb3JtIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmltcG9ydCBBcHBvaW50bWVudFNsb3RWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb3BkL2FwcG9pbnRtZW50U2xvdC9pbmRleC5qcydcblxuY2xhc3MgQXBwb2ludG1lbnRTbG90IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICAvLyBzdGF0aWMgbG9hZERhdGEoc3RvcmUsIG1hdGNoLCBxdWVyeURhdGEpIHtcbiAgICAvLyAgICAgbGV0IGRvY3Rvcl9pZCA9IG1hdGNoLnBhcmFtcy5pZCB8fCBxdWVyeURhdGEuZG9jdG9yX2lkXG4gICAgLy8gICAgIGxldCBob3NwaXRhbF9pZCA9IG1hdGNoLnBhcmFtcy5jbGluaWNJZCB8fCBxdWVyeURhdGEuaG9zcGl0YWxfaWRcblxuICAgIC8vICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0RG9jdG9yQnlJZChkb2N0b3JfaWQsIGhvc3BpdGFsX2lkKSlcbiAgICAvLyB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBmZXRjaERhdGEocHJvcHMpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UocHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBkb2N0b3JfaWQgPSBwcm9wcy5zZWxlY3RlZERvY3RvciB8fCBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgfHwgcGFyc2VkLmRvY3Rvcl9pZFxuICAgICAgICBsZXQgaG9zcGl0YWxfaWQgPSBwYXJzZWQuaG9zcGl0YWxfaWQgfHwgcHJvcHMubWF0Y2gucGFyYW1zLmNsaW5pY0lkXG5cbiAgICAgICAgaWYgKGRvY3Rvcl9pZCkge1xuICAgICAgICAgICAgcHJvcHMuZ2V0RG9jdG9yQnlJZChkb2N0b3JfaWQsIGhvc3BpdGFsX2lkLCBwcm9wcy5jb21tb25Qcm9maWxlU2VsZWN0ZWRQcm9jZWR1cmVzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKHRoaXMucHJvcHMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWREb2N0b3IgIT0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEocHJvcHMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgbGV0IGRvY3Rvcl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3IgfHwgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQgfHwgcGFyc2VkLmRvY3Rvcl9pZFxuICAgICAgICBsZXQgaG9zcGl0YWxfaWQgPSBwYXJzZWQuaG9zcGl0YWxfaWQgfHwgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuY2xpbmljSWQgXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBcHBvaW50bWVudFNsb3RWaWV3IHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZERvY3Rvcj17ZG9jdG9yX2lkfSBzZWxlY3RlZENsaW5pYz17aG9zcGl0YWxfaWR9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblxuICAgIGxldCBET0NUT1JTID0gc3RhdGUuRE9DVE9SX1BST0ZJTEVTXG5cbiAgICBsZXQgeyBzZWxlY3RlZFNsb3QsIHJlc2NoZWR1bGVTbG90LCBzZWxlY3RlZERvY3RvclByb2NlZHVyZSwgY29tbW9uUHJvZmlsZVNlbGVjdGVkUHJvY2VkdXJlcywgc2VsZWN0ZWREYXRlRm9ybWF0IH0gPSBzdGF0ZS5ET0NUT1JfU0VBUkNIXG5cbiAgICBsZXQgeyBjb21tb25Qcm9jZWR1cmVycywgc2VsZWN0ZWRMb2NhdGlvbiB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgbGV0IHsgcHJpbWFyeU1vYmlsZSwgdXNlck5hbWUgfSA9IHN0YXRlLlVTRVJcbiAgICByZXR1cm4ge1xuICAgICAgICBET0NUT1JTLCBzZWxlY3RlZFNsb3QsIHJlc2NoZWR1bGVTbG90LCBjb21tb25Qcm9jZWR1cmVycywgc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmUsIGNvbW1vblByb2ZpbGVTZWxlY3RlZFByb2NlZHVyZXMsIHNlbGVjdGVkRGF0ZUZvcm1hdCwgc2VsZWN0ZWRMb2NhdGlvbiwgcHJpbWFyeU1vYmlsZSwgdXNlck5hbWVcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldERvY3RvckJ5SWQ6IChkb2N0b3JJZCwgY2xpbmljSWQsIHByb2NlZHVyZV9pZHMsIGNhdGVnb3J5X2lkcykgPT4gZGlzcGF0Y2goZ2V0RG9jdG9yQnlJZChkb2N0b3JJZCwgY2xpbmljSWQsIHByb2NlZHVyZV9pZHMsIGNhdGVnb3J5X2lkcykpLFxuICAgICAgICBnZXRUaW1lU2xvdHM6IChkb2N0b3JJZCwgY2xpbmljSWQsIGV4dHJhUGFyYW0sIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRUaW1lU2xvdHMoZG9jdG9ySWQsIGNsaW5pY0lkLCBleHRyYVBhcmFtLCBjYWxsYmFjaykpLFxuICAgICAgICBzZWxlY3RPcGRUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUsIGFwcG9pbnRtZW50SWQsIGRhdGVQYXJhbSkgPT4gZGlzcGF0Y2goc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCwgZGF0ZVBhcmFtKSksXG4gICAgICAgIHN1Ym1pdElQREZvcm06IChmb3JtRGF0YSwgc2VsZWN0ZWRMb2NhdGlvbiwgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdElQREZvcm0oZm9ybURhdGEsIHNlbGVjdGVkTG9jYXRpb24sIGNiKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwb2ludG1lbnRTbG90KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=