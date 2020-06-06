(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./dev/js/components/diagnosis/LabDateTimePicker.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/diagnosis/LabDateTimePicker.js ***!
  \**********************************************************/
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

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

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
            selectedDateSpan: props.selectedSlot && props.selectedSlot.date ? new Date(props.selectedSlot.date) : new Date(),
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
                this.props.enableProceed(false);
                var getUpcomingDate = false;
                var upcoming_time = null;

                /*            if(this.props.selectedDateFormat) {
                                upcoming_time = this.props.selectedDateFormat
                            
                            }else{
                                
                            }*/
                upcoming_time = this.getFormattedDate(new Date());
                /*else if(this.props.upcoming_slots && Object.keys(this.props.upcoming_slots).length){
                    upcoming_time = Object.keys(this.props.upcoming_slots)[0]
                }*/

                if (upcoming_time && this.props.timeSlots[upcoming_time]) {
                    getUpcomingDate = true;
                    this.setState({ selectedDateSpan: new Date(upcoming_time) });
                    this.generateDays(true, new Date(upcoming_time));
                }

                if (!getUpcomingDate) {
                    if (this.props.is_thyrocare) {
                        var nextDate = new Date();
                        nextDate.setDate(new Date().getDate() + 1);
                        this.setState({ selectedDateSpan: nextDate });
                    }
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
            var offset = new Date();
            var currentDate = new Date();

            var dateCount = 1;
            var totalDateVisited = 1;
            var daySeries = [];

            if (getNewDates) {
                offset = new Date(selectedDate);
                currentDate = new Date(selectedDate);
            } else {

                if (this.props.is_thyrocare) {
                    offset.setDate(new Date().getDate() + 1);
                    currentDate.setDate(new Date().getDate() + 1);
                }
            }
            var formattedDate = this.getFormattedDate(offset);
            daySeries.push({
                dateFormat: new Date(offset),
                formattedDate: formattedDate
            });

            if (!this.props.is_thyrocare) {
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
            } else {
                //Day 2 for thyrocare
                offset.setDate(offset.getDate() + 1);
                var _formattedDate2 = this.getFormattedDate(offset);
                daySeries.push({
                    dateFormat: new Date(offset),
                    formattedDate: _formattedDate2
                });

                //Day 3 for thyrocare
                offset.setDate(offset.getDate() + 1);
                _formattedDate2 = this.getFormattedDate(offset);
                daySeries.push({
                    dateFormat: new Date(offset),
                    formattedDate: _formattedDate2
                });
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
                    this.props.getTimeSlots(dateFormat);
                }
                this.setState({ selectedDateSpan: dateFormat, currentTimeSlot: {} });
                this.props.enableProceed(false, [], this.props.type);
            } else {}
        }
    }, {
        key: 'selectDateFromCalendar',
        value: function selectDateFromCalendar(date) {
            var _this2 = this;

            //funciton calls when user select the date from the date calendar
            if (date) {
                date = date.toDate();
                this.setState({ dateModal: false }, function () {
                    //this.props.enableProceed(false, [])
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
            var _this3 = this;

            //function calls when user select the time
            var self = this;
            var timeSpan = Object.assign({}, time);
            timeSpan.title = title;
            this.setState({ currentTimeSlot: timeSpan }, function () {
                var data = {
                    date: self.state.selectedDateSpan,
                    month: MONTHS[new Date(self.state.selectedDateSpan).getMonth()],
                    slot: '',
                    time: self.state.currentTimeSlot,
                    type: _this3.props.type || '',
                    test_id: _this3.props.test_id || '',
                    test_name: _this3.props.test_name
                };
                self.props.enableProceed(false, data, _this3.props.type);
            });
        }
    }, {
        key: 'getFormattedDate',
        value: function getFormattedDate(date) {
            //generate date in yyyy-mm-dd format
            date = new Date(date);
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
        key: 'toggleOptions',
        value: function toggleOptions() {
            var isAvailable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var data = {
                'Category': 'ConsumerApp', 'Action': 'BookSeperatelyClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'book-seperately-clicked', 'isAvailable': isAvailable
            };

            _gtm2.default.sendEvent({ data: data });
            this.props.toggle('seperately');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var upperDisableDateLimit = this.props.is_thyrocare ? 7 : 30;
            var nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + 1);
            var lowerDisableDateLimit = this.props.is_thyrocare ? nextDate : new Date();

            var selectedFormattedDate = this.getFormattedDate(this.state.selectedDateSpan);

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.props.hide_toggle ? this.state.daySeries.length && this.props.timeSlots && this.props.timeSlots[selectedFormattedDate] && this.props.timeSlots[selectedFormattedDate].length || true ? _react2.default.createElement(
                    'div',
                    { className: 'time-slot-wrng-cont' },
                    _react2.default.createElement('img', { src: "/assets" + "/img/tm-wrng.png" }),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Showing common time slots where all tests are available.For more options you can ',
                        _react2.default.createElement(
                            'span',
                            { className: 'cursor-pntr', onClick: function onClick() {
                                    return _this4.toggleOptions(true);
                                } },
                            'Book Separately'
                        )
                    )
                ) : _react2.default.createElement(
                    'div',
                    { className: 'time-slot-wrng-cont' },
                    _react2.default.createElement('img', { src: "/assets" + "/img/tm-wrng.png" }),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Both test can\u2019t be book for the same time. You can ',
                        _react2.default.createElement(
                            'span',
                            { className: 'cursor-pntr', onClick: function onClick() {
                                    return _this4.toggleOptions();
                                } },
                            'Book Separately'
                        )
                    )
                ) : '',
                _react2.default.createElement(
                    'div',
                    { className: 'widget mrng-top-12' },
                    this.props.is_radiology ? _react2.default.createElement(
                        'span',
                        { className: 'tm-slot-hdng' },
                        this.props.nameHeading
                    ) : this.props.nameHeading && Array.isArray(this.props.nameHeading) ? this.props.nameHeading.map(function (test, i) {
                        return _react2.default.createElement(
                            'span',
                            { key: i, className: 'tm-slot-hdng' },
                            test.name
                        );
                    }) : '',
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
                                                { key: key, onClick: _this4.selectDate.bind(_this4, day.dateFormat) },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: new Date(day.dateFormat).toDateString() == new Date(_this4.state.selectedDateSpan).toDateString() ? 'date-list-active' : '' },
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
                                                    return date.diff(moment(lowerDisableDateLimit), 'days') < 0 || date.diff(moment(new Date()), 'days') > upperDisableDateLimit;
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
                                this.props.timeSlots && this.props.timeSlots[selectedFormattedDate] && this.props.timeSlots[selectedFormattedDate].length ? _react2.default.createElement(
                                    'div',
                                    { className: 'date-text-img' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/watch-date.svg" }),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Select Time Slot'
                                    )
                                ) : _react2.default.createElement(
                                    'div',
                                    { className: 'select-time-slot-container' },
                                    _react2.default.createElement(
                                        'p',
                                        { style: { textAlign: 'center' } },
                                        'Not available on this day.'
                                    )
                                )
                            ),
                            this.props.timeSlots && this.props.timeSlots[selectedFormattedDate] ? this.props.timeSlots[selectedFormattedDate].map(function (schedule, key) {

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
                                                    { key: i, className: 'time-slot-li-listing', onClick: _this4.selectTime.bind(_this4, time, schedule.title) },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'time-slot-timmings ' + (_this4.state.currentTimeSlot.value == time.value ? " time-active" : '') },
                                                        time.text
                                                    )
                                                );
                                            })
                                        )
                                    )
                                ) : '';
                            }) : ''
                        ) : _react2.default.createElement(
                            'div',
                            { className: 'select-time-slot-container' },
                            _react2.default.createElement(
                                'p',
                                { style: { textAlign: 'center' } },
                                'Not available on this day.'
                            )
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

/***/ "./dev/js/components/diagnosis/appointmentSlot/AllAppointmentSlot.js":
/*!***************************************************************************!*\
  !*** ./dev/js/components/diagnosis/appointmentSlot/AllAppointmentSlot.js ***!
  \***************************************************************************/
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

var _LabDateTimePicker = __webpack_require__(/*! ../LabDateTimePicker.js */ "./dev/js/components/diagnosis/LabDateTimePicker.js");

var _LabDateTimePicker2 = _interopRequireDefault(_LabDateTimePicker);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import TimeSlotSelector from '../../commons/timeSlotSelector/index.js'


var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var AppointmentSlot = function (_React$Component) {
    _inherits(AppointmentSlot, _React$Component);

    function AppointmentSlot(props) {
        _classCallCheck(this, AppointmentSlot);

        var _this = _possibleConstructorReturn(this, (AppointmentSlot.__proto__ || Object.getPrototypeOf(AppointmentSlot)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);

        var lab_id = _this.props.selectedLab;

        _this.state = {
            selectedLab: lab_id,
            reschedule: _this.props.location.search.includes('reschedule'),
            goback: _this.props.location.search.includes('goback'),
            pickupType: _this.props.location.search.includes('type=lab') ? 0 : 1,
            enableProceed: false,
            selectedTimeSlot: _this.props.selectedSlot || {},
            selectedAppointmentType: parsed.selectedType && parsed.selectedType == 'seperately' ? 'seperately' : 'all',
            timeSlotsData: null
        };
        return _this;
    }

    _createClass(AppointmentSlot, [{
        key: 'proceed',
        value: function proceed(e) {
            //user select the timeslot & click the button to proceed
            e.preventDefault();
            e.stopPropagation();
            var selectedDate = null;
            // in case of reschedule go back , else push
            if (Object.values(this.state.selectedTimeSlot).length) {
                this.selectTimeSlot(this.state.selectedTimeSlot);
                selectedDate = this.state.selectedTimeSlot.date;
            }

            var data = {};
            var selected_test_id = [];
            var parsed = queryString.parse(this.props.location.search);
            var patient = null;
            var profile = null;
            if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
                patient = this.props.profiles[this.props.selectedProfile];
                profile = patient.id;
            }
            // in case of upload prescription
            if (parsed.is_insurance && parsed.is_insurance == 'true') {
                if (this.props.selectedCriterias && this.props.selectedCriterias.length > 0) {
                    this.props.selectedCriterias.map(function (twp, i) {
                        selected_test_id.push(twp.id);
                    });
                }
                data.start_date = selectedDate ? selectedDate : this.props.selectedSlot && this.props.selectedSlot.date ? this.props.selectedSlot.date : new Date();
                data.lab_test = selected_test_id;
                data.lab = this.props.selectedLab;
                data.profile = profile;
                this.props.preBooking(data);
            }

            if (this.state.reschedule) {
                return this.props.history.go(-1);
            }
            // go back for goback
            if (this.state.goback) {
                return this.props.history.go(-1);
            }
            //if (this.props.selectedSlot.date) {
            return this.props.history.push('/lab/' + this.props.selectedLab + '/book');
            //}
        }
    }, {
        key: 'selectTimeSlot',
        value: function selectTimeSlot(slot) {
            //user select time 
            var extraTimeParams = {
                type: this.state.selectedAppointmentType
            };
            if (this.state.selectedTimeSlot && this.state.selectedTimeSlot.date) {
                extraTimeParams = this.getFormattedDate(this.state.selectedTimeSlot.date);
            }
            var selectedTestsSlot = _extends({}, slot);
            var tests = {};
            var parsed = queryString.parse(this.props.location.search);
            var finalSelectedSlot = {};
            if (this.state.selectedAppointmentType == 'all') {
                if (this.state.timeSlotsData['all'] && this.state.timeSlotsData['all'].tests) {
                    var is_home_pickup = false;
                    if (parsed.p_pickup && parsed.p_pickup == "home") {
                        is_home_pickup = true;
                    }
                    if (parsed.r_pickup && parsed.r_pickup == "home") {
                        is_home_pickup = true;
                    }
                    this.state.timeSlotsData['all'].tests.map(function (test) {
                        tests[test.id] = _extends({}, selectedTestsSlot['all'], { test_id: test.id, test_name: test.name, is_home_pickup: is_home_pickup });
                    });
                    finalSelectedSlot['all'] = selectedTestsSlot['all'];
                }
            } else {
                if (this.state.timeSlotsData['pathology'] && this.state.timeSlotsData['pathology'].tests) {
                    this.state.timeSlotsData['pathology'].tests.map(function (test) {
                        tests[test.id] = _extends({}, selectedTestsSlot['pathology'], { test_id: test.id, test_name: test.name, is_home_pickup: parsed.p_pickup && parsed.p_pickup == "home" ? true : false });
                    });
                    finalSelectedSlot['pathology'] = selectedTestsSlot['pathology'];
                }
                if (selectedTestsSlot['radiology'] && this.state.timeSlotsData['radiology'] && this.state.timeSlotsData['radiology'].tests && this.state.timeSlotsData['radiology'].tests.length) {
                    tests = _extends({}, tests, selectedTestsSlot['radiology']);
                    finalSelectedSlot['radiology'] = selectedTestsSlot['radiology'];
                }
            }

            finalSelectedSlot['selectedTestsTimeSlot'] = tests;
            this.props.selectLabTimeSLot(finalSelectedSlot, this.state.reschedule, extraTimeParams);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }

            if (this.props.selectedSlot && this.props.selectedSlot.date) {
                //when component load ,it check if any timeslot selected earlier by user for the lab/doctor,if selected then bydefault we select them on page load
                this.getTimeSlots(new Date(this.props.selectedSlot.date));
            } else {

                var parsed = queryString.parse(this.props.location.search);
                if (parsed.is_thyrocare && parsed.is_thyrocare.includes('true')) {

                    var nextDate = new Date();
                    if (this.props.selectedDateFormat && false) {

                        if (new Date().toDateString() == new Date(this.props.selectedDateFormat).toDateString()) {
                            nextDate.setDate(new Date().getDate() + 1);
                        } else {
                            nextDate = new Date(this.props.selectedDateFormat);
                        }
                    } else {
                        nextDate.setDate(new Date().getDate() + 1);
                    }
                    this.getTimeSlots(nextDate);
                } else {
                    this.getTimeSlots(new Date());
                }
            }
        }
    }, {
        key: 'getTimeSlots',
        value: function getTimeSlots(date) {
            var _this2 = this;

            //2325
            var selectedLab = this.props.selectedLab;
            date = this.getFormattedDate(date);
            var pincode = this.props.pincode;
            var parsed = queryString.parse(this.props.location.search);
            if (parsed.is_thyrocare && parsed.is_thyrocare.includes('true')) {} else {
                pincode = '';
                date = '';
            }
            var extraParams = {
                test_ids: parsed.test_ids || '',
                p_pickup: parsed.p_pickup && parsed.p_pickup == "home" ? 1 : 0,
                r_pickup: parsed.r_pickup && parsed.r_pickup == "home" ? 1 : 0
            };
            this.props.getLabTimeSlots(selectedLab, this.state.pickupType, pincode || '', date, extraParams, function (data) {
                _this2.setState({ timeSlotsData: data });
            });
        }
    }, {
        key: 'getFormattedDate',
        value: function getFormattedDate(date) {
            //function which return date in yyyy-mm-dd format
            date = new Date(date);
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
        key: 'enableProceed',
        value: function enableProceed(enable) {
            var slot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            //function which keep on checking on every time selection that whether time is selected or not
            var parsed = queryString.parse(this.props.location.search);
            var isAllTimeSelected = false;
            if (this.state.timeSlotsData) {
                isAllTimeSelected = this.getTimeSlotStatus(this.state.selectedTimeSlot);
            }
            if (enable) {
                this.setState({ enableProceed: isAllTimeSelected });
            } else {
                if (Object.values(slot).length) {
                    var slotData = _extends({}, this.state.selectedTimeSlot);
                    if (slot.type == 'all' || slot.type == 'pathology') {
                        slotData[slot.type] = slot;
                    } else if (slot.type == 'radiology') {
                        slotData[slot.type] = slotData[slot.type] ? _extends({}, slotData[slot.type]) : {};
                        slotData[slot.type][slot.test_id] = _extends({}, slot, { is_home_pickup: parsed.r_pickup && parsed.r_pickup == "home" ? true : false });
                    }
                    isAllTimeSelected = this.getTimeSlotStatus(slotData);
                    this.setState({ enableProceed: isAllTimeSelected, selectedTimeSlot: slotData });
                } else {
                    this.setState({ enableProceed: false });
                }
            }
        }
    }, {
        key: 'handleToggleType',
        value: function handleToggleType(type) {
            //function which get timeslot for particular toggle type e.g all, seperately
            this.setState({ selectedAppointmentType: type });
        }
    }, {
        key: 'getTimeSlotStatus',
        value: function getTimeSlotStatus() {
            var slotData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            //In case of tests selected by user 'seperately', this function will return if all the times of selected tests are selected by the user or not
            var isAllTimeSelected = false;
            var selectedSlot = this.props.selectedSlot;
            if (slotData) {
                selectedSlot = slotData;
            }
            if (this.state.selectedAppointmentType == 'all' && selectedSlot && selectedSlot['all']) {
                isAllTimeSelected = true;
            } else if (this.state.selectedAppointmentType == 'seperately') {
                var parsed = queryString.parse(this.props.location.search);
                var totalTests = parsed.test_ids ? parsed.test_ids.split(',') : [];
                var totalSelectedTests = 0;
                if (this.state.timeSlotsData.pathology && selectedSlot['pathology']) {
                    totalSelectedTests = this.state.timeSlotsData.pathology.tests.length || 0;
                    isAllTimeSelected = true;
                }

                if (this.state.timeSlotsData.radiology && this.state.timeSlotsData.radiology.tests && this.state.timeSlotsData.radiology.tests.length) {

                    this.state.timeSlotsData.radiology.tests.map(function (test) {
                        if (slotData['radiology'] && slotData['radiology'][test.tests_id]) {
                            totalSelectedTests++;
                        } else {}
                    });
                    if (totalSelectedTests == totalTests.length) {
                        isAllTimeSelected = true;
                    } else {
                        isAllTimeSelected = false;
                    }
                }
            }
            return isAllTimeSelected;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var parsed = queryString.parse(this.props.location.search);
            var timeSlots = null;
            var selectedSlot = null;
            var type = '';
            var radiologyTimeSlot = null;
            if (this.state.timeSlotsData) {
                if (this.state.selectedAppointmentType == 'all' && this.state.timeSlotsData.all && this.state.timeSlotsData.all.tests && this.state.timeSlotsData.all.tests.length) {
                    timeSlots = this.state.timeSlotsData.all;
                    type = 'all';
                    selectedSlot = this.state.selectedTimeSlot && this.state.selectedTimeSlot['all'] ? this.state.selectedTimeSlot['all'] : null;
                } else if (this.state.selectedAppointmentType == 'seperately' && this.state.timeSlotsData.pathology && this.state.timeSlotsData.pathology.tests && this.state.timeSlotsData.pathology.tests.length) {
                    timeSlots = this.state.timeSlotsData.pathology;
                    type = 'pathology';
                    selectedSlot = this.state.selectedTimeSlot && this.state.selectedTimeSlot['pathology'] ? this.state.selectedTimeSlot['pathology'] : null;
                }
            }

            if (this.state.selectedTimeSlot && this.state.selectedTimeSlot['radiology']) {
                radiologyTimeSlot = this.state.selectedTimeSlot['radiology'];
            }
            var test_count = parsed.test_ids ? parsed.test_ids.split(',').length : 0;
            var hide_toggle = !(this.state.timeSlotsData && this.state.timeSlotsData['pathology'] && this.state.timeSlotsData['pathology'].tests && this.state.timeSlotsData['pathology'].tests.length == test_count) && test_count > 1 && !(parsed.reschedule && parsed.reschedule == 'true');
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
                                'div',
                                { className: 'new-time-slot-outer' },
                                hide_toggle && _react2.default.createElement(
                                    'div',
                                    { className: 'top-sticky-radio-btn' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'ins-form-radio' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'dtl-radio' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'container-radio' },
                                                'Book all tests together',
                                                _react2.default.createElement('input', { type: 'radio', onChange: function onChange() {
                                                        return _this3.handleToggleType('all');
                                                    }, checked: this.state.selectedAppointmentType == 'all', name: 'type', value: 'm' }),
                                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'dtl-radio' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'container-radio' },
                                                'Book separately',
                                                _react2.default.createElement('input', { type: 'radio', onChange: function onChange() {
                                                        return _this3.handleToggleType('seperately');
                                                    }, checked: this.state.selectedAppointmentType == 'seperately', name: 'type', value: 'f' }),
                                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                                            )
                                        )
                                    )
                                )
                            ),
                            this.props.LABS[this.props.selectedLab] && this.state.timeSlotsData ? _react2.default.createElement(
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
                                            timeSlots && this.state.selectedAppointmentType == 'all' ? _react2.default.createElement(_LabDateTimePicker2.default, _extends({}, this.props, {
                                                timeSlots: timeSlots.timeslots,
                                                selectTimeSlot: this.selectTimeSlot.bind(this),
                                                selectedSlot: selectedSlot,
                                                type: type,
                                                enableProceed: this.enableProceed.bind(this),
                                                getFormattedDate: this.getFormattedDate.bind(this),
                                                getTimeSlots: this.getTimeSlots.bind(this),
                                                upcoming_slots: timeSlots.upcoming_slots,
                                                is_thyrocare: timeSlots.is_thyrocare,
                                                nameHeading: timeSlots.tests,
                                                toggle: this.handleToggleType.bind(this),
                                                test_id: timeSlots.tests && timeSlots.tests.length ? timeSlots.tests[0].id : '',
                                                hide_toggle: hide_toggle
                                            })) : '',
                                            timeSlots && this.state.selectedAppointmentType == 'seperately' ? _react2.default.createElement(_LabDateTimePicker2.default, _extends({}, this.props, {
                                                timeSlots: timeSlots.timeslots,
                                                selectTimeSlot: this.selectTimeSlot.bind(this),
                                                selectedSlot: selectedSlot,
                                                type: type,
                                                enableProceed: this.enableProceed.bind(this),
                                                getFormattedDate: this.getFormattedDate.bind(this),
                                                getTimeSlots: this.getTimeSlots.bind(this),
                                                upcoming_slots: timeSlots.upcoming_slots,
                                                is_thyrocare: timeSlots.is_thyrocare,
                                                nameHeading: timeSlots.tests,
                                                toggle: this.handleToggleType.bind(this),
                                                test_id: timeSlots.tests && timeSlots.tests.length ? timeSlots.tests[0].id : '',
                                                hide_toggle: false
                                            })) : '',

                                            //For Radiology Tests
                                            this.state.selectedAppointmentType == 'seperately' && this.state.timeSlotsData && this.state.timeSlotsData.radiology && this.state.timeSlotsData.radiology.tests ? this.state.timeSlotsData.radiology.tests.map(function (tests, key) {
                                                return _react2.default.createElement(_LabDateTimePicker2.default, _extends({
                                                    key: key
                                                }, _this3.props, {
                                                    timeSlots: tests.timings.timeslots,
                                                    selectTimeSlot: _this3.selectTimeSlot.bind(_this3),
                                                    selectedSlot: radiologyTimeSlot && radiologyTimeSlot[tests.tests_id] ? radiologyTimeSlot[tests.tests_id] : null,
                                                    type: 'radiology',
                                                    enableProceed: _this3.enableProceed.bind(_this3),
                                                    getFormattedDate: _this3.getFormattedDate.bind(_this3),
                                                    getTimeSlots: _this3.getTimeSlots.bind(_this3),
                                                    upcoming_slots: tests.timings.upcoming_slots,
                                                    is_thyrocare: tests.timings.is_thyrocare,
                                                    test_name: tests.name,
                                                    test_id: tests.tests_id,
                                                    is_radiology: true,
                                                    nameHeading: tests.name,
                                                    toggle: _this3.handleToggleType.bind(_this3),
                                                    hide_toggle: false
                                                }));
                                            }) : ''
                                        )
                                    )
                                )
                            ) : _react2.default.createElement(_Loader2.default, null),
                            _react2.default.createElement(
                                'button',
                                { disabled: !this.state.enableProceed, onClick: this.proceed.bind(this), className: 'p-3 mrt-10 v-btn v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg static-btn' },
                                'Select'
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', type: 'lab' })
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

/***/ "./dev/js/components/diagnosis/appointmentSlot/index.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/diagnosis/appointmentSlot/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AllAppointmentSlot = __webpack_require__(/*! ./AllAppointmentSlot.js */ "./dev/js/components/diagnosis/appointmentSlot/AllAppointmentSlot.js");

var _AllAppointmentSlot2 = _interopRequireDefault(_AllAppointmentSlot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AllAppointmentSlot2.default; //import AppointmentSlot from './AppointmentSlot.js'

/***/ }),

/***/ "./dev/js/containers/diagnosis/AppointmentSlot.js":
/*!********************************************************!*\
  !*** ./dev/js/containers/diagnosis/AppointmentSlot.js ***!
  \********************************************************/
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

var _appointmentSlot = __webpack_require__(/*! ../../components/diagnosis/appointmentSlot */ "./dev/js/components/diagnosis/appointmentSlot/index.js");

var _appointmentSlot2 = _interopRequireDefault(_appointmentSlot);

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

    // static loadData(store, match) {
    //     return store.dispatch(getLabById(match.params.id))
    // }

    _createClass(AppointmentSlot, [{
        key: 'fetchData',
        value: function fetchData(props) {
            var parsed = queryString.parse(props.location.search);

            var lab_id = props.selectedLab || props.match.params.id || parsed.lab_id;
            var test_ids = [];
            if (window) {
                window.scrollTo(0, 0);
            }
            if (parsed.test_ids) {
                test_ids = parsed.test_ids.split(',');
            }
            if (lab_id) {
                props.getLabById(lab_id, test_ids);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.selectedLab != this.props.selectedLab) {
                this.fetchData(props);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchData(this.props);
        }
    }, {
        key: 'render',
        value: function render() {

            var parsed = queryString.parse(this.props.location.search);
            var lab_id = this.props.selectedLab || this.props.match.params.id || parsed.lab_id;

            return _react2.default.createElement(_appointmentSlot2.default, _extends({}, this.props, { selectedLab: lab_id }));
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

    var LABS = state.LABS;
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_LABS,
        pincode = _state$SEARCH_CRITERI.pincode,
        selectedCriterias = _state$SEARCH_CRITERI.selectedCriterias;
    var _state$LAB_SEARCH = state.LAB_SEARCH,
        selectedSlot = _state$LAB_SEARCH.selectedSlot,
        selectedDateFormat = _state$LAB_SEARCH.selectedDateFormat;
    var _state$USER = state.USER,
        selectedProfile = _state$USER.selectedProfile,
        profiles = _state$USER.profiles;


    return {
        LABS: LABS, selectedSlot: selectedSlot, pincode: pincode, selectedProfile: selectedProfile, profiles: profiles, selectedCriterias: selectedCriterias, selectedDateFormat: selectedDateFormat
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getLabById: function getLabById(labId, tests) {
            return dispatch((0, _index.getLabById)(labId, tests));
        },
        getLabTimeSlots: function getLabTimeSlots(labId, pickup, pincode, date, extraParams, callback) {
            return dispatch((0, _index.getLabTimeSlots)(labId, pickup, pincode, date, extraParams, callback));
        },
        selectLabTimeSLot: function selectLabTimeSLot(slot, reschedule, dateParam) {
            return dispatch((0, _index.selectLabTimeSLot)(slot, reschedule, dateParam));
        },
        preBooking: function preBooking(slot) {
            return dispatch((0, _index.preBooking)(slot));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppointmentSlot);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvTGFiRGF0ZVRpbWVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2FwcG9pbnRtZW50U2xvdC9BbGxBcHBvaW50bWVudFNsb3QuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2FwcG9pbnRtZW50U2xvdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvQXBwb2ludG1lbnRTbG90LmpzIl0sIm5hbWVzIjpbIm1vbWVudCIsInJlcXVpcmUiLCJEQVlTX1RPX1NIT1ciLCJXRUVLX0RBWVMiLCJNT05USFMiLCJxdWVyeVN0cmluZyIsIkRhdGVUaW1lUGlja2VyIiwicHJvcHMiLCJzdGF0ZSIsInNlbGVjdGVkRGF0ZVNwYW4iLCJzZWxlY3RlZFNsb3QiLCJkYXRlIiwiRGF0ZSIsImN1cnJlbnRUaW1lU2xvdCIsInRpbWUiLCJkYXRlTW9kYWwiLCJkYXlTZXJpZXMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRleHQiLCJlbmFibGVQcm9jZWVkIiwiZ2VuZXJhdGVEYXlzIiwiZ2V0VXBjb21pbmdEYXRlIiwidXBjb21pbmdfdGltZSIsImdldEZvcm1hdHRlZERhdGUiLCJ0aW1lU2xvdHMiLCJzZXRTdGF0ZSIsImlzX3RoeXJvY2FyZSIsIm5leHREYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJnZXROZXdEYXRlcyIsInNlbGVjdGVkRGF0ZSIsIm9mZnNldCIsImN1cnJlbnREYXRlIiwiZGF0ZUNvdW50IiwidG90YWxEYXRlVmlzaXRlZCIsImZvcm1hdHRlZERhdGUiLCJwdXNoIiwiZGF0ZUZvcm1hdCIsImxlbmd0aCIsInRvRGF0ZVN0cmluZyIsImdldFRpbWVTbG90cyIsInR5cGUiLCJ0b0RhdGUiLCJwaWNrRGF0ZSIsInNlbGVjdERhdGUiLCJ0aXRsZSIsInNlbGYiLCJ0aW1lU3BhbiIsIk9iamVjdCIsImFzc2lnbiIsImRhdGEiLCJtb250aCIsImdldE1vbnRoIiwic2xvdCIsInRlc3RfaWQiLCJ0ZXN0X25hbWUiLCJkZCIsIm1tIiwieXl5eSIsImdldEZ1bGxZZWFyIiwidG9kYXkiLCJpc0F2YWlsYWJsZSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsInRvZ2dsZSIsInVwcGVyRGlzYWJsZURhdGVMaW1pdCIsImxvd2VyRGlzYWJsZURhdGVMaW1pdCIsInNlbGVjdGVkRm9ybWF0dGVkRGF0ZSIsImhpZGVfdG9nZ2xlIiwiQVNTRVRTX0JBU0VfVVJMIiwidG9nZ2xlT3B0aW9ucyIsImlzX3JhZGlvbG9neSIsIm5hbWVIZWFkaW5nIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwidGVzdCIsImkiLCJuYW1lIiwib3BlbkRhdGVNb2RhbCIsImJpbmQiLCJ0cmFuc2Zvcm0iLCJkYXkiLCJrZXkiLCJnZXREYXkiLCJ3aWR0aCIsInRvcCIsImRpZmYiLCJzZWxlY3REYXRlRnJvbUNhbGVuZGFyIiwidGV4dEFsaWduIiwic2NoZWR1bGUiLCJ0aW1pbmciLCJzZWxlY3RUaW1lIiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkFwcG9pbnRtZW50U2xvdCIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJsYWJfaWQiLCJzZWxlY3RlZExhYiIsInJlc2NoZWR1bGUiLCJpbmNsdWRlcyIsImdvYmFjayIsInBpY2t1cFR5cGUiLCJzZWxlY3RlZFRpbWVTbG90Iiwic2VsZWN0ZWRBcHBvaW50bWVudFR5cGUiLCJzZWxlY3RlZFR5cGUiLCJ0aW1lU2xvdHNEYXRhIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidmFsdWVzIiwic2VsZWN0VGltZVNsb3QiLCJzZWxlY3RlZF90ZXN0X2lkIiwicGF0aWVudCIsInByb2ZpbGUiLCJwcm9maWxlcyIsInNlbGVjdGVkUHJvZmlsZSIsImlzRHVtbXlVc2VyIiwiaWQiLCJpc19pbnN1cmFuY2UiLCJzZWxlY3RlZENyaXRlcmlhcyIsInR3cCIsInN0YXJ0X2RhdGUiLCJsYWJfdGVzdCIsImxhYiIsInByZUJvb2tpbmciLCJoaXN0b3J5IiwiZ28iLCJleHRyYVRpbWVQYXJhbXMiLCJzZWxlY3RlZFRlc3RzU2xvdCIsInRlc3RzIiwiZmluYWxTZWxlY3RlZFNsb3QiLCJpc19ob21lX3BpY2t1cCIsInBfcGlja3VwIiwicl9waWNrdXAiLCJzZWxlY3RMYWJUaW1lU0xvdCIsInNlbGVjdGVkRGF0ZUZvcm1hdCIsInBpbmNvZGUiLCJleHRyYVBhcmFtcyIsInRlc3RfaWRzIiwiZ2V0TGFiVGltZVNsb3RzIiwiZW5hYmxlIiwiaXNBbGxUaW1lU2VsZWN0ZWQiLCJnZXRUaW1lU2xvdFN0YXR1cyIsInNsb3REYXRhIiwidG90YWxUZXN0cyIsInNwbGl0IiwidG90YWxTZWxlY3RlZFRlc3RzIiwicGF0aG9sb2d5IiwicmFkaW9sb2d5IiwidGVzdHNfaWQiLCJyYWRpb2xvZ3lUaW1lU2xvdCIsImFsbCIsInRlc3RfY291bnQiLCJoYW5kbGVUb2dnbGVUeXBlIiwiTEFCUyIsInRpbWVzbG90cyIsInVwY29taW5nX3Nsb3RzIiwidGltaW5ncyIsInByb2NlZWQiLCJtYXRjaCIsInBhcmFtcyIsImdldExhYkJ5SWQiLCJmZXRjaERhdGEiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIkxBQl9TRUFSQ0giLCJVU0VSIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJsYWJJZCIsInBpY2t1cCIsImNhbGxiYWNrIiwiZGF0ZVBhcmFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBT0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFSQSxJQUFNQSxTQUFTQyxtQkFBT0EsQ0FBQywrQ0FBUixDQUFmOztBQUVBLElBQU1DLGVBQWUsRUFBckI7QUFDQSxJQUFNQyxZQUFZ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QUFrQjNILElBQWxCLEVBQXdCbUQsVUFBeEIsRUFBb0M0RSxTQUFwQyxDQUFULENBQWpDO0FBQUEsU0FIaEI7QUFJSGxELG9CQUFXLG9CQUFDN0UsSUFBRDtBQUFBLG1CQUFVMkgsU0FBUyx1QkFBVzNILElBQVgsQ0FBVCxDQUFWO0FBQUE7QUFKUixLQUFQO0FBTUgsQ0FQRDs7a0JBVWUseUJBQVFzSCxlQUFSLEVBQXlCSSxrQkFBekIsRUFBNkM5RSxlQUE3QyxDIiwiZmlsZSI6IjQ2LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDYWxlbmRhciBmcm9tICdyYy1jYWxlbmRhcic7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuY29uc3QgREFZU19UT19TSE9XID0gNDBcbmNvbnN0IFdFRUtfREFZUyA9IFsnU3VuJywgJ01vbicsICdUdWVzJywgJ1dlZCcsICdUaHVyJywgJ0ZyaScsICdTYXQnXVxuY29uc3QgTU9OVEhTID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWREYXRlU3BhbjogcHJvcHMuc2VsZWN0ZWRTbG90ICYmIHByb3BzLnNlbGVjdGVkU2xvdC5kYXRlP25ldyBEYXRlKHByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKTpuZXcgRGF0ZSgpLFxuXHRcdFx0Y3VycmVudFRpbWVTbG90OiBwcm9wcy5zZWxlY3RlZFNsb3QgJiYgcHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUgPyBwcm9wcy5zZWxlY3RlZFNsb3QudGltZSA6IHt9LFxuXHRcdFx0ZGF0ZU1vZGFsOiBmYWxzZSxcblx0XHRcdGRheVNlcmllczpbXVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICAvL0lmIHRpbWUgaXMgYWxyZWFkeSBzZWxlY3RlZCBieSB1c2VyICwgdGhlbiBvbiBldmVyeSBwYWdlIGxvYWQgd2UgYnkgZGVmYXVsdCBzZWxlY3QgdGhhdCB0aW1lIFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUudGV4dCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVQcm9jZWVkKHRydWUpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVEYXlzKHRydWUsIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmVuYWJsZVByb2NlZWQoZmFsc2UpXG4gICAgICAgICAgICBsZXQgZ2V0VXBjb21pbmdEYXRlPSBmYWxzZVxuICAgICAgICAgICAgbGV0IHVwY29taW5nX3RpbWUgPSBudWxsXG5cbi8qICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICB1cGNvbWluZ190aW1lID0gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGVGb3JtYXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgIHVwY29taW5nX3RpbWUgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUobmV3IERhdGUoKSlcbiAgICAgICAgICAgIC8qZWxzZSBpZih0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudXBjb21pbmdfc2xvdHMpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgdXBjb21pbmdfdGltZSA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMudXBjb21pbmdfc2xvdHMpWzBdXG4gICAgICAgICAgICB9Ki9cblxuXG4gICAgICAgICAgICBpZih1cGNvbWluZ190aW1lICYmIHRoaXMucHJvcHMudGltZVNsb3RzW3VwY29taW5nX3RpbWVdKXtcbiAgICAgICAgICAgICAgICBnZXRVcGNvbWluZ0RhdGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWREYXRlU3BhbjogbmV3IERhdGUodXBjb21pbmdfdGltZSl9KVxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVEYXlzKHRydWUsIG5ldyBEYXRlKHVwY29taW5nX3RpbWUpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighZ2V0VXBjb21pbmdEYXRlKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmlzX3RoeXJvY2FyZSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0RGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICAgICAgbmV4dERhdGUuc2V0RGF0ZShuZXcgRGF0ZSgpLmdldERhdGUoKSArIDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkRGF0ZVNwYW46IG5leHREYXRlfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZURheXMoKSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZW5lcmF0ZURheXMoZ2V0TmV3RGF0ZXMgPSBmYWxzZSwgc2VsZWN0ZWREYXRlID0gJycpe1xuICAgICAgICAvL1RoaXMgZnVuY3Rpb24gd2lsbCBnZW5lcmF0ZSBkdW1teSBkYXRlcyAsc3RhcnRpbmcgZnJvbSB0aGUgZ2V0TmV3RGF0ZXMgcGFyYW1ldGVyXG4gICAgICAgIGxldCBvZmZzZXQ9IG5ldyBEYXRlKClcbiAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxuICAgICAgICBcbiAgICAgICAgbGV0IGRhdGVDb3VudCA9IDFcbiAgICAgICAgbGV0IHRvdGFsRGF0ZVZpc2l0ZWQgPSAxXG4gICAgICAgIGxldCBkYXlTZXJpZXMgPSBbXVxuXG4gICAgICAgIGlmIChnZXROZXdEYXRlcykge1xuICAgICAgICAgICAgb2Zmc2V0ID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKVxuICAgICAgICAgICAgY3VycmVudERhdGUgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5pc190aHlyb2NhcmUpe1xuICAgICAgICAgICAgICAgIG9mZnNldC5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgMSlcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShvZmZzZXQpXG4gICAgICAgIGRheVNlcmllcy5wdXNoKHtcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IG5ldyBEYXRlKG9mZnNldCksXG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRlOiBmb3JtYXR0ZWREYXRlXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoIXRoaXMucHJvcHMuaXNfdGh5cm9jYXJlKXtcbiAgICAgICAgICAgIHdoaWxlKGRhdGVDb3VudCE9MyAmJiB0b3RhbERhdGVWaXNpdGVkPDMwKXtcbiAgICAgICAgICAgICAgICBvZmZzZXQuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyB0b3RhbERhdGVWaXNpdGVkKVxuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKG9mZnNldClcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudGltZVNsb3RzICYmIHRoaXMucHJvcHMudGltZVNsb3RzW2Zvcm1hdHRlZERhdGVdICYmIHRoaXMucHJvcHMudGltZVNsb3RzW2Zvcm1hdHRlZERhdGVdLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF5U2VyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogbmV3IERhdGUob2Zmc2V0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6IGZvcm1hdHRlZERhdGVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUNvdW50KytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG90YWxEYXRlVmlzaXRlZCsrXG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gbmV3IERhdGUoY3VycmVudERhdGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy9EYXkgMiBmb3IgdGh5cm9jYXJlXG4gICAgICAgICAgICBvZmZzZXQuc2V0RGF0ZShvZmZzZXQuZ2V0RGF0ZSgpICsgMSlcbiAgICAgICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKG9mZnNldClcbiAgICAgICAgICAgIGRheVNlcmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiBuZXcgRGF0ZShvZmZzZXQpLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6IGZvcm1hdHRlZERhdGVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vRGF5IDMgZm9yIHRoeXJvY2FyZVxuICAgICAgICAgICAgb2Zmc2V0LnNldERhdGUob2Zmc2V0LmdldERhdGUoKSArIDEpXG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKG9mZnNldClcbiAgICAgICAgICAgIGRheVNlcmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiBuZXcgRGF0ZShvZmZzZXQpLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6IGZvcm1hdHRlZERhdGVcbiAgICAgICAgICAgIH0pICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRheVNlcmllczogZGF5U2VyaWVzICB9KVxuICAgIH1cblxuXHRvcGVuRGF0ZU1vZGFsKCkge1xuICAgICAgICAvL29wZW4gY2FsZW5kYXIgbW9kYWxcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVNb2RhbDogIXRoaXMuc3RhdGUuZGF0ZU1vZGFsIH0pXG4gICAgfVxuXG4gICAgc2VsZWN0RGF0ZShkYXRlRm9ybWF0KSB7XG4gICAgICAgIC8vZnVuY2l0b24gY2FsbHMgd2hlbiB1c2VyIHNlbGVjdCB0aGUgZGF0ZSBcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUoZGF0ZUZvcm1hdClcblxuICAgIFx0aWYobmV3IERhdGUodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGVTcGFuKS50b0RhdGVTdHJpbmcoKSAhPSBuZXcgRGF0ZShkYXRlRm9ybWF0KS50b0RhdGVTdHJpbmcoKSl7XG4gICAgXHRcdFxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy50aW1lU2xvdHMgJiYgdGhpcy5wcm9wcy50aW1lU2xvdHNbZm9ybWF0dGVkRGF0ZV0pe1xuXG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRUaW1lU2xvdHMoZGF0ZUZvcm1hdClcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRGF0ZVNwYW46IGRhdGVGb3JtYXQsIGN1cnJlbnRUaW1lU2xvdDoge30gfSlcbiAgICAgICAgXHR0aGlzLnByb3BzLmVuYWJsZVByb2NlZWQoZmFsc2UsIFtdLCB0aGlzLnByb3BzLnR5cGUpXHRcbiAgICBcdH1lbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cdCAgICBcbiAgICB9XG5cbiAgICBzZWxlY3REYXRlRnJvbUNhbGVuZGFyKGRhdGUpIHtcbiAgICAgICAgLy9mdW5jaXRvbiBjYWxscyB3aGVuIHVzZXIgc2VsZWN0IHRoZSBkYXRlIGZyb20gdGhlIGRhdGUgY2FsZW5kYXJcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLnRvRGF0ZSgpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy90aGlzLnByb3BzLmVuYWJsZVByb2NlZWQoZmFsc2UsIFtdKVxuICAgICAgICAgICAgICAgIHRoaXMucGlja0RhdGUobmV3IERhdGUoZGF0ZSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVNb2RhbDogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBpY2tEYXRlKGRhdGUpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZERhdGUgPSBuZXcgRGF0ZShkYXRlKVxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZURheXModHJ1ZSwgc2VsZWN0ZWREYXRlKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3REYXRlKHNlbGVjdGVkRGF0ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdFRpbWUodGltZSwgdGl0bGUpIHtcbiAgICAgICAgLy9mdW5jdGlvbiBjYWxscyB3aGVuIHVzZXIgc2VsZWN0IHRoZSB0aW1lXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgdGltZVNwYW4gPSBPYmplY3QuYXNzaWduKHt9LCB0aW1lKVxuICAgICAgICB0aW1lU3Bhbi50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VGltZVNsb3Q6IHRpbWVTcGFuIH0sICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGRhdGU6IHNlbGYuc3RhdGUuc2VsZWN0ZWREYXRlU3BhbixcbiAgICAgICAgICAgICAgICBtb250aDogTU9OVEhTW25ldyBEYXRlKHNlbGYuc3RhdGUuc2VsZWN0ZWREYXRlU3BhbikuZ2V0TW9udGgoKV0sXG4gICAgICAgICAgICAgICAgc2xvdDogJycsXG4gICAgICAgICAgICAgICAgdGltZTogc2VsZi5zdGF0ZS5jdXJyZW50VGltZVNsb3QsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5wcm9wcy50eXBlfHwnJyxcbiAgICAgICAgICAgICAgICB0ZXN0X2lkOiB0aGlzLnByb3BzLnRlc3RfaWQgfHwgJycsXG4gICAgICAgICAgICAgICAgdGVzdF9uYW1lOiB0aGlzLnByb3BzLnRlc3RfbmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5wcm9wcy5lbmFibGVQcm9jZWVkKGZhbHNlLCBkYXRhLCB0aGlzLnByb3BzLnR5cGUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgIGdldEZvcm1hdHRlZERhdGUoZGF0ZSl7XG4gICAgICAgIC8vZ2VuZXJhdGUgZGF0ZSBpbiB5eXl5LW1tLWRkIGZvcm1hdFxuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgICAgICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgdmFyIG1tID0gZGF0ZS5nZXRNb250aCgpKzE7IFxuICAgICAgICB2YXIgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYoZGQ8MTApIFxuICAgICAgICB7XG4gICAgICAgICAgICBkZD0nMCcrZGQ7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYobW08MTApIFxuICAgICAgICB7XG4gICAgICAgICAgICBtbT0nMCcrbW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9kYXkgPSB5eXl5KyctJyttbSsnLScrZGQ7XG4gICAgICAgIHJldHVybiB0b2RheVxuICAgIH1cblxuICAgIHRvZ2dsZU9wdGlvbnMoaXNBdmFpbGFibGUgPSBmYWxzZSl7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdCb29rU2VwZXJhdGVseUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdib29rLXNlcGVyYXRlbHktY2xpY2tlZCcsICdpc0F2YWlsYWJsZSc6IGlzQXZhaWxhYmxlXG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZSgnc2VwZXJhdGVseScpXG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXG4gICAgICAgIGxldCB1cHBlckRpc2FibGVEYXRlTGltaXQgPSB0aGlzLnByb3BzLmlzX3RoeXJvY2FyZT83OjMwXG4gICAgICAgIGxldCBuZXh0RGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgbmV4dERhdGUuc2V0RGF0ZShuZXh0RGF0ZS5nZXREYXRlKCkgKyAxKVxuICAgICAgICBsZXQgbG93ZXJEaXNhYmxlRGF0ZUxpbWl0ID0gdGhpcy5wcm9wcy5pc190aHlyb2NhcmU/bmV4dERhdGU6bmV3IERhdGUoKVxuXG4gICAgICAgIGxldCBzZWxlY3RlZEZvcm1hdHRlZERhdGUgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGVTcGFuKVxuXG5cdFx0cmV0dXJuKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZV90b2dnbGU/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF5U2VyaWVzLmxlbmd0aCAmJiB0aGlzLnByb3BzLnRpbWVTbG90cyAmJiB0aGlzLnByb3BzLnRpbWVTbG90c1tzZWxlY3RlZEZvcm1hdHRlZERhdGVdICYmIHRoaXMucHJvcHMudGltZVNsb3RzW3NlbGVjdGVkRm9ybWF0dGVkRGF0ZV0ubGVuZ3RoIHx8IHRydWU/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1zbG90LXdybmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy90bS13cm5nLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2hvd2luZyBjb21tb24gdGltZSBzbG90cyB3aGVyZSBhbGwgdGVzdHMgYXJlIGF2YWlsYWJsZS5Gb3IgbW9yZSBvcHRpb25zIHlvdSBjYW4gPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBudHJcIiBvbkNsaWNrPXsoKT0+dGhpcy50b2dnbGVPcHRpb25zKHRydWUpfT5Cb29rIFNlcGFyYXRlbHk8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwidGltZS1zbG90LXdybmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy90bS13cm5nLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Qm90aCB0ZXN0IGNhbuKAmXQgYmUgYm9vayBmb3IgdGhlIHNhbWUgdGltZS4gWW91IGNhbiA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG50clwiIG9uQ2xpY2s9eygpPT50aGlzLnRvZ2dsZU9wdGlvbnMoKX0+Qm9vayBTZXBhcmF0ZWx5PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICB9XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcm5nLXRvcC0xMlwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc19yYWRpb2xvZ3k/XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRtLXNsb3QtaGRuZ1wiPnt0aGlzLnByb3BzLm5hbWVIZWFkaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgOnRoaXMucHJvcHMubmFtZUhlYWRpbmcgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLm5hbWVIZWFkaW5nKT9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZUhlYWRpbmcubWFwKCh0ZXN0LCBpKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT1cInRtLXNsb3QtaGRuZ1wiPnt0ZXN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1zbG90LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLWRhdGUtc2VsZWN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGVjdC1kYXRlLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsZWN0LWRhdGUtaW1nLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXRleHQtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL25ldy1jYWwuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWxlY3QgQXBwb2ludG1lbnQgRGF0ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1kYXRlLWxpc3RpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInZlci1kYXRlLWxpc3QtdWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRheVNlcmllcyAmJiB0aGlzLnN0YXRlLmRheVNlcmllcy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5kYXlTZXJpZXNbMF0uZGF0ZUZvcm1hdCA+IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/PGxpIGNsYXNzTmFtZT1cInNjcmxsLWRhdGVcIiBvbkNsaWNrPXt0aGlzLm9wZW5EYXRlTW9kYWwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmlnaHQtc2Muc3ZnXCJ9IHN0eWxlPXt7dHJhbnNmb3JtOidyb3RhdGUoMTgwZGVnKSd9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXlTZXJpZXMubWFwKChkYXksIGtleSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtrZXl9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0RGF0ZS5iaW5kKHRoaXMsIGRheS5kYXRlRm9ybWF0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e25ldyBEYXRlKGRheS5kYXRlRm9ybWF0KS50b0RhdGVTdHJpbmcoKSA9PSBuZXcgRGF0ZSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZVNwYW4pLnRvRGF0ZVN0cmluZygpID8gJ2RhdGUtbGlzdC1hY3RpdmUnOicnfT57bmV3IERhdGUoZGF5LmRhdGVGb3JtYXQpLmdldERhdGUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bmV3IERhdGUoZGF5LmRhdGVGb3JtYXQpLnRvRGF0ZVN0cmluZygpID09IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkgPyAnVG9kYXknIDogV0VFS19EQVlTWyhuZXcgIERhdGUoZGF5LmRhdGVGb3JtYXQpKS5nZXREYXkoKV19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2NybGwtZGF0ZVwiIG9uQ2xpY2s9e3RoaXMub3BlbkRhdGVNb2RhbC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6JzIycHgnLCB0b3A6JzEwcHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FsbmV4dC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRlTW9kYWwgPyA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLW92ZXJsYXlcIj48ZGl2IGNsYXNzTmFtZT1cImRhdGUtcGlja2VyLW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVyPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttb21lbnQodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGVTcGFuKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWREYXRlPXsoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZGlmZihtb21lbnQoKGxvd2VyRGlzYWJsZURhdGVMaW1pdCkpLCAnZGF5cycpIDwgMCB8fCBkYXRlLmRpZmYobW9tZW50KChuZXcgRGF0ZSkpLCAnZGF5cycpID4gdXBwZXJEaXNhYmxlRGF0ZUxpbWl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb2RheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5zZWxlY3REYXRlRnJvbUNhbGVuZGFyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcdHRoaXMuc3RhdGUuZGF5U2VyaWVzLmxlbmd0aD9cbiAgICAgICAgICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC10aW1lLXNsb3QtY29udGFpbmVyXCI+XG5cdFx0XHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xlY3QtZGF0ZS1pbWctY29udGVudCBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGltZVNsb3RzICYmIHRoaXMucHJvcHMudGltZVNsb3RzW3NlbGVjdGVkRm9ybWF0dGVkRGF0ZV0gJiYgdGhpcy5wcm9wcy50aW1lU2xvdHNbc2VsZWN0ZWRGb3JtYXR0ZWREYXRlXS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/PGRpdiBjbGFzc05hbWU9XCJkYXRlLXRleHQtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2F0Y2gtZGF0ZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VsZWN0IFRpbWUgU2xvdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtdGltZS1zbG90LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pk5vdCBhdmFpbGFibGUgb24gdGhpcyBkYXkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgICAgICAgICBcblx0XHRcdFx0ICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdCAgICAgICAgICAgIHtcblx0XHRcdFx0ICAgICAgICAgICAgXHR0aGlzLnByb3BzLnRpbWVTbG90cyAmJiB0aGlzLnByb3BzLnRpbWVTbG90c1tzZWxlY3RlZEZvcm1hdHRlZERhdGVdP1xuXHRcdFx0XHQgICAgICAgICAgICBcdHRoaXMucHJvcHMudGltZVNsb3RzW3NlbGVjdGVkRm9ybWF0dGVkRGF0ZV0ubWFwKChzY2hlZHVsZSwga2V5KSA9PiB7XG5cblx0XHRcdFx0ICAgICAgICAgICAgXHRcdHJldHVybiBzY2hlZHVsZS50aW1pbmcgJiYgc2NoZWR1bGUudGltaW5nLmxlbmd0aD9cblx0XHRcdFx0ICAgICAgICAgICAgXHRcdDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cInNlbGVjdC10aW1lLWxpc3RpbmctY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtc2hpZnRcIj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICB7c2NoZWR1bGUudGl0bGV9XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1zbG90LW1haW4tbGlzdGluZ1wiPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmxpbmUtbGlzdCB0aW1lLWl0ZW1zXCI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRzY2hlZHVsZS50aW1pbmcubWFwKCh0aW1lLCBpKT0+IHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdHJldHVybiA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJ0aW1lLXNsb3QtbGktbGlzdGluZ1wiIG9uQ2xpY2s9e1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUaW1lLmJpbmQodGhpcywgdGltZSwgc2NoZWR1bGUudGl0bGUpIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0aW1lLXNsb3QtdGltbWluZ3MgJHt0aGlzLnN0YXRlLmN1cnJlbnRUaW1lU2xvdC52YWx1ZSA9PSB0aW1lLnZhbHVlPyBcIiB0aW1lLWFjdGl2ZVwiIDogJyd9YH0+e3RpbWUudGV4dH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0fSlcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDonJ1xuXHRcdFx0XHQgICAgICAgICAgICBcdH0pXG5cdFx0XHRcdCAgICAgICAgICAgIFx0OicnXG5cdFx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdFx0ICAgICAgICA8L2Rpdj5cblx0XHRcdFx0ICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtdGltZS1zbG90LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pk5vdCBhdmFpbGFibGUgb24gdGhpcyBkYXkuPC9wPlxuXHRcdFx0XHQgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZVBpY2tlclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vaW1wb3J0IFRpbWVTbG90U2VsZWN0b3IgZnJvbSAnLi4vLi4vY29tbW9ucy90aW1lU2xvdFNlbGVjdG9yL2luZGV4LmpzJ1xuaW1wb3J0IFRpbWVTbG90U2VsZWN0b3IgZnJvbSAnLi4vTGFiRGF0ZVRpbWVQaWNrZXIuanMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5cbmNsYXNzIEFwcG9pbnRtZW50U2xvdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgbGV0IGxhYl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMYWJcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRMYWI6IGxhYl9pZCxcbiAgICAgICAgICAgIHJlc2NoZWR1bGU6IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdyZXNjaGVkdWxlJyksXG4gICAgICAgICAgICBnb2JhY2s6IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdnb2JhY2snKSxcbiAgICAgICAgICAgIHBpY2t1cFR5cGU6IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCd0eXBlPWxhYicpID8gMCA6IDEsXG4gICAgICAgICAgICBlbmFibGVQcm9jZWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkVGltZVNsb3Q6IHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90fHx7fSxcbiAgICAgICAgICAgIHNlbGVjdGVkQXBwb2ludG1lbnRUeXBlOnBhcnNlZC5zZWxlY3RlZFR5cGUgJiYgcGFyc2VkLnNlbGVjdGVkVHlwZT09J3NlcGVyYXRlbHknPydzZXBlcmF0ZWx5JzonYWxsJyxcbiAgICAgICAgICAgIHRpbWVTbG90c0RhdGE6bnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2VlZChlKSB7XG4gICAgICAgIC8vdXNlciBzZWxlY3QgdGhlIHRpbWVzbG90ICYgY2xpY2sgdGhlIGJ1dHRvbiB0byBwcm9jZWVkXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCBzZWxlY3RlZERhdGUgPSBudWxsXG4gICAgICAgIC8vIGluIGNhc2Ugb2YgcmVzY2hlZHVsZSBnbyBiYWNrICwgZWxzZSBwdXNoXG4gICAgICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90KS5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RUaW1lU2xvdCh0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3QpXG4gICAgICAgICAgICBzZWxlY3RlZERhdGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3QuZGF0ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICBsZXQgc2VsZWN0ZWRfdGVzdF9pZCA9IFtdXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgcGF0aWVudCA9IG51bGxcbiAgICAgICAgbGV0IHByb2ZpbGUgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXSAmJiAhdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcbiAgICAgICAgICAgIHBhdGllbnQgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlXVxuICAgICAgICAgICAgcHJvZmlsZSA9IHBhdGllbnQuaWRcbiAgICAgICAgfVxuICAgICAgICAvLyBpbiBjYXNlIG9mIHVwbG9hZCBwcmVzY3JpcHRpb25cbiAgICAgICAgaWYocGFyc2VkLmlzX2luc3VyYW5jZSAmJiBwYXJzZWQuaXNfaW5zdXJhbmNlID09ICd0cnVlJyl7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5tYXAoKHR3cCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF90ZXN0X2lkLnB1c2godHdwLmlkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnN0YXJ0X2RhdGUgPSBzZWxlY3RlZERhdGU/c2VsZWN0ZWREYXRlOnRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGU/dGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZTpuZXcgRGF0ZSgpXG4gICAgICAgICAgICBkYXRhLmxhYl90ZXN0ID0gc2VsZWN0ZWRfdGVzdF9pZFxuICAgICAgICAgICAgZGF0YS5sYWIgPSB0aGlzLnByb3BzLnNlbGVjdGVkTGFiXG4gICAgICAgICAgICBkYXRhLnByb2ZpbGUgPSBwcm9maWxlXG4gICAgICAgICAgICB0aGlzLnByb3BzLnByZUJvb2tpbmcoZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlc2NoZWR1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgIH1cbiAgICAgICAgLy8gZ28gYmFjayBmb3IgZ29iYWNrXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdvYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgfVxuICAgICAgICAvL2lmICh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvJHt0aGlzLnByb3BzLnNlbGVjdGVkTGFifS9ib29rYClcbiAgICAgICAgLy99XG4gICAgfVxuXG4gICAgc2VsZWN0VGltZVNsb3Qoc2xvdCkge1xuICAgICAgICAvL3VzZXIgc2VsZWN0IHRpbWUgXG4gICAgICAgIGxldCBleHRyYVRpbWVQYXJhbXMgPSB7XG4gICAgICAgICAgICB0eXBlOiB0aGlzLnN0YXRlLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90ICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdC5kYXRlKSB7XG4gICAgICAgICAgICBleHRyYVRpbWVQYXJhbXMgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUodGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90LmRhdGUpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbGVjdGVkVGVzdHNTbG90ID0gey4uLnNsb3R9XG4gICAgICAgIGxldCB0ZXN0cyA9IHt9XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgZmluYWxTZWxlY3RlZFNsb3QgPSB7fVxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlPT0nYWxsJykge1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhWydhbGwnXSAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGFbJ2FsbCddLnRlc3RzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlzX2hvbWVfcGlja3VwID0gZmFsc2VcbiAgICAgICAgICAgICAgICBpZihwYXJzZWQucF9waWNrdXAgJiYgcGFyc2VkLnBfcGlja3VwPT1cImhvbWVcIil7XG4gICAgICAgICAgICAgICAgICAgIGlzX2hvbWVfcGlja3VwID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihwYXJzZWQucl9waWNrdXAgJiYgcGFyc2VkLnJfcGlja3VwPT1cImhvbWVcIil7XG4gICAgICAgICAgICAgICAgICAgIGlzX2hvbWVfcGlja3VwID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGFbJ2FsbCddLnRlc3RzLm1hcCgodGVzdCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGVzdHNbdGVzdC5pZF09IHsuLi5zZWxlY3RlZFRlc3RzU2xvdFsnYWxsJ10sIHRlc3RfaWQ6dGVzdC5pZCwgdGVzdF9uYW1lOiB0ZXN0Lm5hbWUsIGlzX2hvbWVfcGlja3VwOiBpc19ob21lX3BpY2t1cCB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBmaW5hbFNlbGVjdGVkU2xvdFsnYWxsJ10gPSBzZWxlY3RlZFRlc3RzU2xvdFsnYWxsJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhWydwYXRob2xvZ3knXSAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGFbJ3BhdGhvbG9neSddLnRlc3RzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhWydwYXRob2xvZ3knXS50ZXN0cy5tYXAoKHRlc3QpPT57XG4gICAgICAgICAgICAgICAgICAgIHRlc3RzW3Rlc3QuaWRdID0gey4uLnNlbGVjdGVkVGVzdHNTbG90WydwYXRob2xvZ3knXSwgdGVzdF9pZDp0ZXN0LmlkLCB0ZXN0X25hbWU6IHRlc3QubmFtZSwgaXNfaG9tZV9waWNrdXA6IHBhcnNlZC5wX3BpY2t1cCAmJiBwYXJzZWQucF9waWNrdXA9PVwiaG9tZVwiP3RydWU6ZmFsc2V9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBmaW5hbFNlbGVjdGVkU2xvdFsncGF0aG9sb2d5J10gPSBzZWxlY3RlZFRlc3RzU2xvdFsncGF0aG9sb2d5J11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHNlbGVjdGVkVGVzdHNTbG90WydyYWRpb2xvZ3knXSAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGFbJ3JhZGlvbG9neSddICYmIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YVsncmFkaW9sb2d5J10udGVzdHMgJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhWydyYWRpb2xvZ3knXS50ZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0ZXN0cyA9IHsuLi50ZXN0cywgLi4uc2VsZWN0ZWRUZXN0c1Nsb3RbJ3JhZGlvbG9neSddIH1cbiAgICAgICAgICAgICAgICBmaW5hbFNlbGVjdGVkU2xvdFsncmFkaW9sb2d5J10gPSBzZWxlY3RlZFRlc3RzU2xvdFsncmFkaW9sb2d5J11cbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZpbmFsU2VsZWN0ZWRTbG90WydzZWxlY3RlZFRlc3RzVGltZVNsb3QnXSA9IHRlc3RzXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiVGltZVNMb3QoZmluYWxTZWxlY3RlZFNsb3QsIHRoaXMuc3RhdGUucmVzY2hlZHVsZSwgZXh0cmFUaW1lUGFyYW1zKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUpe1xuICAgICAgICAgICAgLy93aGVuIGNvbXBvbmVudCBsb2FkICxpdCBjaGVjayBpZiBhbnkgdGltZXNsb3Qgc2VsZWN0ZWQgZWFybGllciBieSB1c2VyIGZvciB0aGUgbGFiL2RvY3RvcixpZiBzZWxlY3RlZCB0aGVuIGJ5ZGVmYXVsdCB3ZSBzZWxlY3QgdGhlbSBvbiBwYWdlIGxvYWRcbiAgICAgICAgICAgIHRoaXMuZ2V0VGltZVNsb3RzKG5ldyBEYXRlKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUpKVxuICAgICAgICB9ZWxzZXtcblxuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgICAgICBpZihwYXJzZWQuaXNfdGh5cm9jYXJlICYmIHBhcnNlZC5pc190aHlyb2NhcmUuaW5jbHVkZXMoJ3RydWUnKSl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBuZXh0RGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdCAmJiBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYobmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKT09bmV3IERhdGUodGhpcy5wcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQpLnRvRGF0ZVN0cmluZygpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHREYXRlLnNldERhdGUobmV3IERhdGUoKS5nZXREYXRlKCkgKyAxKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0RGF0ZS5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUaW1lU2xvdHMobmV4dERhdGUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRpbWVTbG90cyhuZXcgRGF0ZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgZ2V0VGltZVNsb3RzKGRhdGUpe1xuICAgICAgICAvLzIzMjVcbiAgICAgICAgbGV0IHNlbGVjdGVkTGFiID0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYlxuICAgICAgICBkYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKGRhdGUpXG4gICAgICAgIGxldCBwaW5jb2RlID0gdGhpcy5wcm9wcy5waW5jb2RlXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBpZihwYXJzZWQuaXNfdGh5cm9jYXJlICYmIHBhcnNlZC5pc190aHlyb2NhcmUuaW5jbHVkZXMoJ3RydWUnKSl7XG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBwaW5jb2RlID0gJydcbiAgICAgICAgICAgIGRhdGUgPSAnJ1xuICAgICAgICB9XG4gICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHtcbiAgICAgICAgICAgIHRlc3RfaWRzOiBwYXJzZWQudGVzdF9pZHN8fCcnLFxuICAgICAgICAgICAgcF9waWNrdXA6cGFyc2VkLnBfcGlja3VwICYmIHBhcnNlZC5wX3BpY2t1cD09XCJob21lXCI/MTowLFxuICAgICAgICAgICAgcl9waWNrdXA6cGFyc2VkLnJfcGlja3VwICYmIHBhcnNlZC5yX3BpY2t1cD09XCJob21lXCI/MTowXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRMYWJUaW1lU2xvdHMoc2VsZWN0ZWRMYWIsIHRoaXMuc3RhdGUucGlja3VwVHlwZSwgcGluY29kZXx8JycsIGRhdGUsIGV4dHJhUGFyYW1zLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVTbG90c0RhdGE6IGRhdGF9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZERhdGUoZGF0ZSl7XG4gICAgICAgIC8vZnVuY3Rpb24gd2hpY2ggcmV0dXJuIGRhdGUgaW4geXl5eS1tbS1kZCBmb3JtYXRcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gICAgICAgIHZhciBkZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHZhciBtbSA9IGRhdGUuZ2V0TW9udGgoKSsxOyBcbiAgICAgICAgdmFyIHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmKGRkPDEwKSBcbiAgICAgICAge1xuICAgICAgICAgICAgZGQ9JzAnK2RkO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmKG1tPDEwKSBcbiAgICAgICAge1xuICAgICAgICAgICAgbW09JzAnK21tO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvZGF5ID0geXl5eSsnLScrbW0rJy0nK2RkXG4gICAgICAgIHJldHVybiB0b2RheVxuICAgIH1cblxuICAgIGVuYWJsZVByb2NlZWQoZW5hYmxlLCBzbG90PXt9KXtcbiAgICAgICAgLy9mdW5jdGlvbiB3aGljaCBrZWVwIG9uIGNoZWNraW5nIG9uIGV2ZXJ5IHRpbWUgc2VsZWN0aW9uIHRoYXQgd2hldGhlciB0aW1lIGlzIHNlbGVjdGVkIG9yIG5vdFxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGlzQWxsVGltZVNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgaWYodGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhKSB7XG4gICAgICAgICAgICBpc0FsbFRpbWVTZWxlY3RlZCA9IHRoaXMuZ2V0VGltZVNsb3RTdGF0dXModGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90KVxuICAgICAgICB9XG4gICAgICAgIGlmKGVuYWJsZSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVQcm9jZWVkOiBpc0FsbFRpbWVTZWxlY3RlZH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYoT2JqZWN0LnZhbHVlcyhzbG90KS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGxldCBzbG90RGF0YSA9IHsuLi50aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3R9XG4gICAgICAgICAgICAgICAgaWYoc2xvdC50eXBlPT0nYWxsJyB8fCBzbG90LnR5cGU9PSdwYXRob2xvZ3knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3REYXRhW3Nsb3QudHlwZV09IHNsb3RcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihzbG90LnR5cGU9PSdyYWRpb2xvZ3knKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3REYXRhW3Nsb3QudHlwZV09IHNsb3REYXRhW3Nsb3QudHlwZV0/ey4uLnNsb3REYXRhW3Nsb3QudHlwZV19Ont9XG4gICAgICAgICAgICAgICAgICAgIHNsb3REYXRhW3Nsb3QudHlwZV1bc2xvdC50ZXN0X2lkXSA9IHsuLi5zbG90LCBpc19ob21lX3BpY2t1cDpwYXJzZWQucl9waWNrdXAgJiYgcGFyc2VkLnJfcGlja3VwPT1cImhvbWVcIj90cnVlOmZhbHNlfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpc0FsbFRpbWVTZWxlY3RlZCA9IHRoaXMuZ2V0VGltZVNsb3RTdGF0dXMoc2xvdERhdGEpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlUHJvY2VlZDogaXNBbGxUaW1lU2VsZWN0ZWQsIHNlbGVjdGVkVGltZVNsb3Q6IHNsb3REYXRhfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZVByb2NlZWQ6IGZhbHNlfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRvZ2dsZVR5cGUodHlwZSkge1xuICAgICAgICAvL2Z1bmN0aW9uIHdoaWNoIGdldCB0aW1lc2xvdCBmb3IgcGFydGljdWxhciB0b2dnbGUgdHlwZSBlLmcgYWxsLCBzZXBlcmF0ZWx5XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEFwcG9pbnRtZW50VHlwZTogdHlwZSB9KVxuICAgIH1cblxuICAgIGdldFRpbWVTbG90U3RhdHVzKHNsb3REYXRhPW51bGwpe1xuICAgICAgICAvL0luIGNhc2Ugb2YgdGVzdHMgc2VsZWN0ZWQgYnkgdXNlciAnc2VwZXJhdGVseScsIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gaWYgYWxsIHRoZSB0aW1lcyBvZiBzZWxlY3RlZCB0ZXN0cyBhcmUgc2VsZWN0ZWQgYnkgdGhlIHVzZXIgb3Igbm90XG4gICAgICAgIGxldCBpc0FsbFRpbWVTZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgIGxldCBzZWxlY3RlZFNsb3QgPSB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdFxuICAgICAgICBpZihzbG90RGF0YSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRTbG90ID0gc2xvdERhdGFcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlPT0nYWxsJyAmJiBzZWxlY3RlZFNsb3QgJiYgc2VsZWN0ZWRTbG90WydhbGwnXSkge1xuICAgICAgICAgICAgaXNBbGxUaW1lU2VsZWN0ZWQgPSB0cnVlXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGU9PSdzZXBlcmF0ZWx5Jyl7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgICAgIGxldCB0b3RhbFRlc3RzID0gcGFyc2VkLnRlc3RfaWRzP3BhcnNlZC50ZXN0X2lkcy5zcGxpdCgnLCcpOltdXG4gICAgICAgICAgICBsZXQgdG90YWxTZWxlY3RlZFRlc3RzID0gMFxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLnBhdGhvbG9neSAmJiBzZWxlY3RlZFNsb3RbJ3BhdGhvbG9neSddKSB7XG4gICAgICAgICAgICAgICAgdG90YWxTZWxlY3RlZFRlc3RzPXRoaXMuc3RhdGUudGltZVNsb3RzRGF0YS5wYXRob2xvZ3kudGVzdHMubGVuZ3RofHwwXG4gICAgICAgICAgICAgICAgaXNBbGxUaW1lU2VsZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YS5yYWRpb2xvZ3kgJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLnJhZGlvbG9neS50ZXN0cyAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGEucmFkaW9sb2d5LnRlc3RzLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLnJhZGlvbG9neS50ZXN0cy5tYXAoKHRlc3QpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKHNsb3REYXRhWydyYWRpb2xvZ3knXSAmJiBzbG90RGF0YVsncmFkaW9sb2d5J11bdGVzdC50ZXN0c19pZF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxTZWxlY3RlZFRlc3RzKytcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYodG90YWxTZWxlY3RlZFRlc3RzPT10b3RhbFRlc3RzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGlzQWxsVGltZVNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBbGxUaW1lU2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNBbGxUaW1lU2VsZWN0ZWRcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgdGltZVNsb3RzID0gbnVsbFxuICAgICAgICBsZXQgc2VsZWN0ZWRTbG90ID0gbnVsbFxuICAgICAgICBsZXQgdHlwZSA9ICcnXG4gICAgICAgIGxldCByYWRpb2xvZ3lUaW1lU2xvdCA9IG51bGxcbiAgICAgICAgaWYodGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhKSB7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlPT0nYWxsJyAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGEuYWxsICYmIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YS5hbGwudGVzdHMgJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLmFsbC50ZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aW1lU2xvdHMgPSB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGEuYWxsXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdhbGwnXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRTbG90ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90ICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdFsnYWxsJ10/dGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90WydhbGwnXTpudWxsXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlPT0nc2VwZXJhdGVseScgJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLnBhdGhvbG9neSAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGEucGF0aG9sb2d5LnRlc3RzICYmIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YS5wYXRob2xvZ3kudGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGltZVNsb3RzID0gdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLnBhdGhvbG9neVxuICAgICAgICAgICAgICAgIHR5cGU9J3BhdGhvbG9neSdcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFNsb3QgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3QgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90WydwYXRob2xvZ3knXT90aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3RbJ3BhdGhvbG9neSddOm51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdCAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3RbJ3JhZGlvbG9neSddKXtcbiAgICAgICAgICAgIHJhZGlvbG9neVRpbWVTbG90ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90WydyYWRpb2xvZ3knXVxuICAgICAgICB9XG4gICAgICAgIGxldCB0ZXN0X2NvdW50ID0gcGFyc2VkLnRlc3RfaWRzP3BhcnNlZC50ZXN0X2lkcy5zcGxpdCgnLCcpLmxlbmd0aDowXG4gICAgICAgIGxldCBoaWRlX3RvZ2dsZSA9ICEodGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhICYmIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YVsncGF0aG9sb2d5J10gJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhWydwYXRob2xvZ3knXS50ZXN0cyAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGFbJ3BhdGhvbG9neSddLnRlc3RzLmxlbmd0aCA9PSB0ZXN0X2NvdW50KSAmJiB0ZXN0X2NvdW50PjEgJiYgIShwYXJzZWQucmVzY2hlZHVsZSAmJiBwYXJzZWQucmVzY2hlZHVsZT09J3RydWUnKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoZWFkZXIgY2xhc3NOYW1lPVwic2tpbi1wcmltYXJ5IGZpeGVkIGhvcml6b250YWwgdG9wIHN0aWNreS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGJhY2staWNvblwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9iYWNrLXdoaXRlLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZ3LTcwMCBjYXBpdGFsaXplIHRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIj5TZWxlY3QgRGF0ZSBhbmQgVGltZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctdGltZS1zbG90LW91dGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfdG9nZ2xlICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3Atc3RpY2t5LXJhZGlvLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5Cb29rIGFsbCB0ZXN0cyB0b2dldGhlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNoYW5nZT17KCk9PnRoaXMuaGFuZGxlVG9nZ2xlVHlwZSgnYWxsJyl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGUgPT0gJ2FsbCd9IG5hbWU9XCJ0eXBlXCIgdmFsdWU9J20nIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPkJvb2sgc2VwYXJhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNoYW5nZT17KCk9PnRoaXMuaGFuZGxlVG9nZ2xlVHlwZSgnc2VwZXJhdGVseScpfSBjaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlID09ICdzZXBlcmF0ZWx5J30gbmFtZT1cInR5cGVcIiB2YWx1ZT0nZicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT09J2FsbCc/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1zbG90LXdybmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdG0td3JuZy5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Cb3RoIHRlc3QgY2Fu4oCZdCBiZSBib29rIGZvciB0aGUgc2FtZSB0aW1lLiBZb3UgY2FuIDxzcGFuPkJvb2sgU2VwYXJhdGVseTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5MQUJTW3RoaXMucHJvcHMuc2VsZWN0ZWRMYWJdICYmIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRyLXByb2ZpbGUtc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNsb3RzICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGU9PSdhbGwnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVTbG90U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lU2xvdHM9e3RpbWVTbG90cy50aW1lc2xvdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VGltZVNsb3Q9e3RoaXMuc2VsZWN0VGltZVNsb3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNsb3Q9e3NlbGVjdGVkU2xvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVByb2NlZWQgPSB7dGhpcy5lbmFibGVQcm9jZWVkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Rm9ybWF0dGVkRGF0ZT17dGhpcy5nZXRGb3JtYXR0ZWREYXRlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGltZVNsb3RzPSB7dGhpcy5nZXRUaW1lU2xvdHMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGNvbWluZ19zbG90cz0ge3RpbWVTbG90cy51cGNvbWluZ19zbG90c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc190aHlyb2NhcmUgPSB7dGltZVNsb3RzLmlzX3RoeXJvY2FyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lSGVhZGluZz17dGltZVNsb3RzLnRlc3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZSA9IHt0aGlzLmhhbmRsZVRvZ2dsZVR5cGUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0X2lkPSB7dGltZVNsb3RzLnRlc3RzICYmIHRpbWVTbG90cy50ZXN0cy5sZW5ndGg/dGltZVNsb3RzLnRlc3RzWzBdLmlkOicnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfdG9nZ2xlPXtoaWRlX3RvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTbG90cyAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlPT0nc2VwZXJhdGVseSc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGltZVNsb3RTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTbG90cz17dGltZVNsb3RzLnRpbWVzbG90c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUaW1lU2xvdD17dGhpcy5zZWxlY3RUaW1lU2xvdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2xvdD17c2VsZWN0ZWRTbG90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUHJvY2VlZCA9IHt0aGlzLmVuYWJsZVByb2NlZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGb3JtYXR0ZWREYXRlPXt0aGlzLmdldEZvcm1hdHRlZERhdGUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRUaW1lU2xvdHM9IHt0aGlzLmdldFRpbWVTbG90cy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwY29taW5nX3Nsb3RzPSB7dGltZVNsb3RzLnVwY29taW5nX3Nsb3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3RoeXJvY2FyZSA9IHt0aW1lU2xvdHMuaXNfdGh5cm9jYXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVIZWFkaW5nPXt0aW1lU2xvdHMudGVzdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlID0ge3RoaXMuaGFuZGxlVG9nZ2xlVHlwZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfaWQ9IHt0aW1lU2xvdHMudGVzdHMgJiYgdGltZVNsb3RzLnRlc3RzLmxlbmd0aD90aW1lU2xvdHMudGVzdHNbMF0uaWQ6Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV90b2dnbGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Gb3IgUmFkaW9sb2d5IFRlc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRBcHBvaW50bWVudFR5cGU9PSdzZXBlcmF0ZWx5JyAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGEgJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLnJhZGlvbG9neSAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGEucmFkaW9sb2d5LnRlc3RzP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGEucmFkaW9sb2d5LnRlc3RzLm1hcCgodGVzdHMsIGtleSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGltZVNsb3RTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTbG90cz17dGVzdHMudGltaW5ncy50aW1lc2xvdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUaW1lU2xvdD17dGhpcy5zZWxlY3RUaW1lU2xvdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTbG90PXtyYWRpb2xvZ3lUaW1lU2xvdCAmJiByYWRpb2xvZ3lUaW1lU2xvdFt0ZXN0cy50ZXN0c19pZF0/cmFkaW9sb2d5VGltZVNsb3RbdGVzdHMudGVzdHNfaWRdOm51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpb2xvZ3knXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVQcm9jZWVkID0ge3RoaXMuZW5hYmxlUHJvY2VlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Rm9ybWF0dGVkRGF0ZT17dGhpcy5nZXRGb3JtYXR0ZWREYXRlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRUaW1lU2xvdHM9IHt0aGlzLmdldFRpbWVTbG90cy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBjb21pbmdfc2xvdHM9IHt0ZXN0cy50aW1pbmdzLnVwY29taW5nX3Nsb3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfdGh5cm9jYXJlID0ge3Rlc3RzLnRpbWluZ3MuaXNfdGh5cm9jYXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdF9uYW1lID0ge3Rlc3RzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0X2lkID17dGVzdHMudGVzdHNfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19yYWRpb2xvZ3k9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lSGVhZGluZz17dGVzdHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZSA9IHt0aGlzLmhhbmRsZVRvZ2dsZVR5cGUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfdG9nZ2xlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmVuYWJsZVByb2NlZWR9IG9uQ2xpY2s9e3RoaXMucHJvY2VlZC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJwLTMgbXJ0LTEwIHYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0YXRpYy1idG5cIj5TZWxlY3Q8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgdHlwZT1cImxhYlwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwb2ludG1lbnRTbG90XG4iLCIvL2ltcG9ydCBBcHBvaW50bWVudFNsb3QgZnJvbSAnLi9BcHBvaW50bWVudFNsb3QuanMnXG5pbXBvcnQgQXBwb2ludG1lbnRTbG90IGZyb20gJy4vQWxsQXBwb2ludG1lbnRTbG90LmpzJ1xuZXhwb3J0IGRlZmF1bHQgQXBwb2ludG1lbnRTbG90IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldExhYkJ5SWQsIGdldExhYlRpbWVTbG90cywgc2VsZWN0TGFiVGltZVNMb3QsIHByZUJvb2tpbmd9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBBcHBvaW50bWVudFNsb3RWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGlhZ25vc2lzL2FwcG9pbnRtZW50U2xvdCdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIEFwcG9pbnRtZW50U2xvdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgLy8gc3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCkge1xuICAgIC8vICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0TGFiQnlJZChtYXRjaC5wYXJhbXMuaWQpKVxuICAgIC8vIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGZldGNoRGF0YShwcm9wcykge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZShwcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgbGV0IGxhYl9pZCA9IHByb3BzLnNlbGVjdGVkTGFiIHx8IHByb3BzLm1hdGNoLnBhcmFtcy5pZCB8fCBwYXJzZWQubGFiX2lkXG4gICAgICAgIGxldCB0ZXN0X2lkcyA9IFtdXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIGlmKHBhcnNlZC50ZXN0X2lkcykge1xuICAgICAgICAgICAgdGVzdF9pZHMgPSBwYXJzZWQudGVzdF9pZHMuc3BsaXQoJywnKVxuICAgICAgICB9XG4gICAgICAgIGlmIChsYWJfaWQpIHtcbiAgICAgICAgICAgIHByb3BzLmdldExhYkJ5SWQobGFiX2lkLCB0ZXN0X2lkcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTGFiICE9IHRoaXMucHJvcHMuc2VsZWN0ZWRMYWIpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKHByb3BzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKHRoaXMucHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgbGFiX2lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYiB8fCB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCB8fCBwYXJzZWQubGFiX2lkXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBcHBvaW50bWVudFNsb3RWaWV3IHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZExhYj17bGFiX2lkfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cbiAgICBsZXQgTEFCUyA9IHN0YXRlLkxBQlNcbiAgICBsZXQgeyBwaW5jb2RlLCBzZWxlY3RlZENyaXRlcmlhcyB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcbiAgICBsZXQgeyBzZWxlY3RlZFNsb3QsIHNlbGVjdGVkRGF0ZUZvcm1hdCB9ID0gc3RhdGUuTEFCX1NFQVJDSFxuICAgIGNvbnN0IHsgc2VsZWN0ZWRQcm9maWxlLCBwcm9maWxlcyB9ID0gc3RhdGUuVVNFUlxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgTEFCUywgc2VsZWN0ZWRTbG90LCBwaW5jb2RlLCBzZWxlY3RlZFByb2ZpbGUsIHByb2ZpbGVzLCBzZWxlY3RlZENyaXRlcmlhcywgc2VsZWN0ZWREYXRlRm9ybWF0XG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMYWJCeUlkOiAobGFiSWQsIHRlc3RzKSA9PiBkaXNwYXRjaChnZXRMYWJCeUlkKGxhYklkLCB0ZXN0cykpLFxuICAgICAgICBnZXRMYWJUaW1lU2xvdHM6IChsYWJJZCwgcGlja3VwLCBwaW5jb2RlLCBkYXRlLCBleHRyYVBhcmFtcywgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldExhYlRpbWVTbG90cyhsYWJJZCwgcGlja3VwLCBwaW5jb2RlLCBkYXRlLCBleHRyYVBhcmFtcywgY2FsbGJhY2spKSxcbiAgICAgICAgc2VsZWN0TGFiVGltZVNMb3Q6IChzbG90LCByZXNjaGVkdWxlLCBkYXRlUGFyYW0pID0+IGRpc3BhdGNoKHNlbGVjdExhYlRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUsIGRhdGVQYXJhbSkpLFxuICAgICAgICBwcmVCb29raW5nOihzbG90KSA9PiBkaXNwYXRjaChwcmVCb29raW5nKHNsb3QpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHBvaW50bWVudFNsb3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==