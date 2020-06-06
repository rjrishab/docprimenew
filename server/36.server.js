exports.ids = [36];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

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
            selectedDateSpan: props.selectedSlot && props.selectedSlot.date ? new Date(props.selectedSlot.date) : new Date(),
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
            this.props.enableProceed(false);
            let getUpcomingDate = false;
            let upcoming_time = null;

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
                    let nextDate = new Date();
                    nextDate.setDate(new Date().getDate() + 1);
                    this.setState({ selectedDateSpan: nextDate });
                }
                this.generateDays();
            }
        }
    }

    generateDays(getNewDates = false, selectedDate = '') {
        //This function will generate dummy dates ,starting from the getNewDates parameter
        let offset = new Date();
        let currentDate = new Date();

        let dateCount = 1;
        let totalDateVisited = 1;
        let daySeries = [];

        if (getNewDates) {
            offset = new Date(selectedDate);
            currentDate = new Date(selectedDate);
        } else {

            if (this.props.is_thyrocare) {
                offset.setDate(new Date().getDate() + 1);
                currentDate.setDate(new Date().getDate() + 1);
            }
        }
        let formattedDate = this.getFormattedDate(offset);
        daySeries.push({
            dateFormat: new Date(offset),
            formattedDate: formattedDate
        });

        if (!this.props.is_thyrocare) {
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
        } else {
            //Day 2 for thyrocare
            offset.setDate(offset.getDate() + 1);
            let formattedDate = this.getFormattedDate(offset);
            daySeries.push({
                dateFormat: new Date(offset),
                formattedDate: formattedDate
            });

            //Day 3 for thyrocare
            offset.setDate(offset.getDate() + 1);
            formattedDate = this.getFormattedDate(offset);
            daySeries.push({
                dateFormat: new Date(offset),
                formattedDate: formattedDate
            });
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
                this.props.getTimeSlots(dateFormat);
            }
            this.setState({ selectedDateSpan: dateFormat, currentTimeSlot: {} });
            this.props.enableProceed(false, [], this.props.type);
        } else {}
    }

    selectDateFromCalendar(date) {
        //funciton calls when user select the date from the date calendar
        if (date) {
            date = date.toDate();
            this.setState({ dateModal: false }, () => {
                //this.props.enableProceed(false, [])
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
                time: self.state.currentTimeSlot,
                type: this.props.type || '',
                test_id: this.props.test_id || '',
                test_name: this.props.test_name
            };
            self.props.enableProceed(false, data, this.props.type);
        });
    }

    getFormattedDate(date) {
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

    toggleOptions(isAvailable = false) {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'BookSeperatelyClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'book-seperately-clicked', 'isAvailable': isAvailable
        };

        _gtm2.default.sendEvent({ data: data });
        this.props.toggle('seperately');
    }

    render() {

        let upperDisableDateLimit = this.props.is_thyrocare ? 7 : 30;
        let nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 1);
        let lowerDisableDateLimit = this.props.is_thyrocare ? nextDate : new Date();

        let selectedFormattedDate = this.getFormattedDate(this.state.selectedDateSpan);

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
                        { className: 'cursor-pntr', onClick: () => this.toggleOptions(true) },
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
                        { className: 'cursor-pntr', onClick: () => this.toggleOptions() },
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
                ) : this.props.nameHeading && Array.isArray(this.props.nameHeading) ? this.props.nameHeading.map((test, i) => {
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
                        this.props.timeSlots && this.props.timeSlots[selectedFormattedDate] ? this.props.timeSlots[selectedFormattedDate].map((schedule, key) => {

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
}

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

//import TimeSlotSelector from '../../commons/timeSlotSelector/index.js'


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");


class AppointmentSlot extends _react2.default.Component {
    constructor(props) {
        super(props);

        const parsed = queryString.parse(this.props.location.search);

        let lab_id = this.props.selectedLab;

        this.state = {
            selectedLab: lab_id,
            reschedule: this.props.location.search.includes('reschedule'),
            goback: this.props.location.search.includes('goback'),
            pickupType: this.props.location.search.includes('type=lab') ? 0 : 1,
            enableProceed: false,
            selectedTimeSlot: this.props.selectedSlot || {},
            selectedAppointmentType: parsed.selectedType && parsed.selectedType == 'seperately' ? 'seperately' : 'all',
            timeSlotsData: null
        };
    }

    proceed(e) {
        //user select the timeslot & click the button to proceed
        e.preventDefault();
        e.stopPropagation();
        let selectedDate = null;
        // in case of reschedule go back , else push
        if (Object.values(this.state.selectedTimeSlot).length) {
            this.selectTimeSlot(this.state.selectedTimeSlot);
            selectedDate = this.state.selectedTimeSlot.date;
        }

        let data = {};
        let selected_test_id = [];
        const parsed = queryString.parse(this.props.location.search);
        let patient = null;
        let profile = null;
        if (this.props.profiles[this.props.selectedProfile] && !this.props.profiles[this.props.selectedProfile].isDummyUser) {
            patient = this.props.profiles[this.props.selectedProfile];
            profile = patient.id;
        }
        // in case of upload prescription
        if (parsed.is_insurance && parsed.is_insurance == 'true') {
            if (this.props.selectedCriterias && this.props.selectedCriterias.length > 0) {
                this.props.selectedCriterias.map((twp, i) => {
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
        return this.props.history.push(`/lab/${this.props.selectedLab}/book`);
        //}
    }

    selectTimeSlot(slot) {
        //user select time 
        let extraTimeParams = {
            type: this.state.selectedAppointmentType
        };
        if (this.state.selectedTimeSlot && this.state.selectedTimeSlot.date) {
            extraTimeParams = this.getFormattedDate(this.state.selectedTimeSlot.date);
        }
        let selectedTestsSlot = _extends({}, slot);
        let tests = {};
        const parsed = queryString.parse(this.props.location.search);
        let finalSelectedSlot = {};
        if (this.state.selectedAppointmentType == 'all') {
            if (this.state.timeSlotsData['all'] && this.state.timeSlotsData['all'].tests) {
                let is_home_pickup = false;
                if (parsed.p_pickup && parsed.p_pickup == "home") {
                    is_home_pickup = true;
                }
                if (parsed.r_pickup && parsed.r_pickup == "home") {
                    is_home_pickup = true;
                }
                this.state.timeSlotsData['all'].tests.map(test => {
                    tests[test.id] = _extends({}, selectedTestsSlot['all'], { test_id: test.id, test_name: test.name, is_home_pickup: is_home_pickup });
                });
                finalSelectedSlot['all'] = selectedTestsSlot['all'];
            }
        } else {
            if (this.state.timeSlotsData['pathology'] && this.state.timeSlotsData['pathology'].tests) {
                this.state.timeSlotsData['pathology'].tests.map(test => {
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

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }

        if (this.props.selectedSlot && this.props.selectedSlot.date) {
            //when component load ,it check if any timeslot selected earlier by user for the lab/doctor,if selected then bydefault we select them on page load
            this.getTimeSlots(new Date(this.props.selectedSlot.date));
        } else {

            const parsed = queryString.parse(this.props.location.search);
            if (parsed.is_thyrocare && parsed.is_thyrocare.includes('true')) {

                let nextDate = new Date();
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

    getTimeSlots(date) {
        //2325
        let selectedLab = this.props.selectedLab;
        date = this.getFormattedDate(date);
        let pincode = this.props.pincode;
        const parsed = queryString.parse(this.props.location.search);
        if (parsed.is_thyrocare && parsed.is_thyrocare.includes('true')) {} else {
            pincode = '';
            date = '';
        }
        let extraParams = {
            test_ids: parsed.test_ids || '',
            p_pickup: parsed.p_pickup && parsed.p_pickup == "home" ? 1 : 0,
            r_pickup: parsed.r_pickup && parsed.r_pickup == "home" ? 1 : 0
        };
        this.props.getLabTimeSlots(selectedLab, this.state.pickupType, pincode || '', date, extraParams, data => {
            this.setState({ timeSlotsData: data });
        });
    }

    getFormattedDate(date) {
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

    enableProceed(enable, slot = {}) {
        //function which keep on checking on every time selection that whether time is selected or not
        const parsed = queryString.parse(this.props.location.search);
        let isAllTimeSelected = false;
        if (this.state.timeSlotsData) {
            isAllTimeSelected = this.getTimeSlotStatus(this.state.selectedTimeSlot);
        }
        if (enable) {
            this.setState({ enableProceed: isAllTimeSelected });
        } else {
            if (Object.values(slot).length) {
                let slotData = _extends({}, this.state.selectedTimeSlot);
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

    handleToggleType(type) {
        //function which get timeslot for particular toggle type e.g all, seperately
        this.setState({ selectedAppointmentType: type });
    }

    getTimeSlotStatus(slotData = null) {
        //In case of tests selected by user 'seperately', this function will return if all the times of selected tests are selected by the user or not
        let isAllTimeSelected = false;
        let selectedSlot = this.props.selectedSlot;
        if (slotData) {
            selectedSlot = slotData;
        }
        if (this.state.selectedAppointmentType == 'all' && selectedSlot && selectedSlot['all']) {
            isAllTimeSelected = true;
        } else if (this.state.selectedAppointmentType == 'seperately') {
            const parsed = queryString.parse(this.props.location.search);
            let totalTests = parsed.test_ids ? parsed.test_ids.split(',') : [];
            let totalSelectedTests = 0;
            if (this.state.timeSlotsData.pathology && selectedSlot['pathology']) {
                totalSelectedTests = this.state.timeSlotsData.pathology.tests.length || 0;
                isAllTimeSelected = true;
            }

            if (this.state.timeSlotsData.radiology && this.state.timeSlotsData.radiology.tests && this.state.timeSlotsData.radiology.tests.length) {

                this.state.timeSlotsData.radiology.tests.map(test => {
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

    render() {
        const parsed = queryString.parse(this.props.location.search);
        let timeSlots = null;
        let selectedSlot = null;
        let type = '';
        let radiologyTimeSlot = null;
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
        let test_count = parsed.test_ids ? parsed.test_ids.split(',').length : 0;
        let hide_toggle = !(this.state.timeSlotsData && this.state.timeSlotsData['pathology'] && this.state.timeSlotsData['pathology'].tests && this.state.timeSlotsData['pathology'].tests.length == test_count) && test_count > 1 && !(parsed.reschedule && parsed.reschedule == 'true');
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
                                            _react2.default.createElement('input', { type: 'radio', onChange: () => this.handleToggleType('all'), checked: this.state.selectedAppointmentType == 'all', name: 'type', value: 'm' }),
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
                                            _react2.default.createElement('input', { type: 'radio', onChange: () => this.handleToggleType('seperately'), checked: this.state.selectedAppointmentType == 'seperately', name: 'type', value: 'f' }),
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
                                        this.state.selectedAppointmentType == 'seperately' && this.state.timeSlotsData && this.state.timeSlotsData.radiology && this.state.timeSlotsData.radiology.tests ? this.state.timeSlotsData.radiology.tests.map((tests, key) => {
                                            return _react2.default.createElement(_LabDateTimePicker2.default, _extends({
                                                key: key
                                            }, this.props, {
                                                timeSlots: tests.timings.timeslots,
                                                selectTimeSlot: this.selectTimeSlot.bind(this),
                                                selectedSlot: radiologyTimeSlot && radiologyTimeSlot[tests.tests_id] ? radiologyTimeSlot[tests.tests_id] : null,
                                                type: 'radiology',
                                                enableProceed: this.enableProceed.bind(this),
                                                getFormattedDate: this.getFormattedDate.bind(this),
                                                getTimeSlots: this.getTimeSlots.bind(this),
                                                upcoming_slots: tests.timings.upcoming_slots,
                                                is_thyrocare: tests.timings.is_thyrocare,
                                                test_name: tests.name,
                                                test_id: tests.tests_id,
                                                is_radiology: true,
                                                nameHeading: tests.name,
                                                toggle: this.handleToggleType.bind(this),
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _appointmentSlot = __webpack_require__(/*! ../../components/diagnosis/appointmentSlot */ "./dev/js/components/diagnosis/appointmentSlot/index.js");

var _appointmentSlot2 = _interopRequireDefault(_appointmentSlot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class AppointmentSlot extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    // static loadData(store, match) {
    //     return store.dispatch(getLabById(match.params.id))
    // }

    fetchData(props) {
        const parsed = queryString.parse(props.location.search);

        let lab_id = props.selectedLab || props.match.params.id || parsed.lab_id;
        let test_ids = [];
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

    componentWillReceiveProps(props) {
        if (props.selectedLab != this.props.selectedLab) {
            this.fetchData(props);
        }
    }

    componentDidMount() {
        this.fetchData(this.props);
    }

    render() {

        const parsed = queryString.parse(this.props.location.search);
        let lab_id = this.props.selectedLab || this.props.match.params.id || parsed.lab_id;

        return _react2.default.createElement(_appointmentSlot2.default, _extends({}, this.props, { selectedLab: lab_id }));
    }
}

AppointmentSlot.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {

    let LABS = state.LABS;
    let { pincode, selectedCriterias } = state.SEARCH_CRITERIA_LABS;
    let { selectedSlot, selectedDateFormat } = state.LAB_SEARCH;
    const { selectedProfile, profiles } = state.USER;

    return {
        LABS, selectedSlot, pincode, selectedProfile, profiles, selectedCriterias, selectedDateFormat
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getLabById: (labId, tests) => dispatch((0, _index.getLabById)(labId, tests)),
        getLabTimeSlots: (labId, pickup, pincode, date, extraParams, callback) => dispatch((0, _index.getLabTimeSlots)(labId, pickup, pincode, date, extraParams, callback)),
        selectLabTimeSLot: (slot, reschedule, dateParam) => dispatch((0, _index.selectLabTimeSLot)(slot, reschedule, dateParam)),
        preBooking: slot => dispatch((0, _index.preBooking)(slot))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppointmentSlot);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvTGFiRGF0ZVRpbWVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2FwcG9pbnRtZW50U2xvdC9BbGxBcHBvaW50bWVudFNsb3QuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2FwcG9pbnRtZW50U2xvdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvQXBwb2ludG1lbnRTbG90LmpzIl0sIm5hbWVzIjpbIm1vbWVudCIsInJlcXVpcmUiLCJEQVlTX1RPX1NIT1ciLCJXRUVLX0RBWVMiLCJNT05USFMiLCJxdWVyeVN0cmluZyIsIkRhdGVUaW1lUGlja2VyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZERhdGVTcGFuIiwic2VsZWN0ZWRTbG90IiwiZGF0ZSIsIkRhdGUiLCJjdXJyZW50VGltZVNsb3QiLCJ0aW1lIiwiZGF0ZU1vZGFsIiwiZGF5U2VyaWVzIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRleHQiLCJlbmFibGVQcm9jZWVkIiwiZ2VuZXJhdGVEYXlzIiwiZ2V0VXBjb21pbmdEYXRlIiwidXBjb21pbmdfdGltZSIsImdldEZvcm1hdHRlZERhdGUiLCJ0aW1lU2xvdHMiLCJzZXRTdGF0ZSIsImlzX3RoeXJvY2FyZSIsIm5leHREYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJnZXROZXdEYXRlcyIsInNlbGVjdGVkRGF0ZSIsIm9mZnNldCIsImN1cnJlbnREYXRlIiwiZGF0ZUNvdW50IiwidG90YWxEYXRlVmlzaXRlZCIsImZvcm1hdHRlZERhdGUiLCJwdXNoIiwiZGF0ZUZvcm1hdCIsImxlbmd0aCIsIm9wZW5EYXRlTW9kYWwiLCJzZWxlY3REYXRlIiwidG9EYXRlU3RyaW5nIiwiZ2V0VGltZVNsb3RzIiwidHlwZSIsInNlbGVjdERhdGVGcm9tQ2FsZW5kYXIiLCJ0b0RhdGUiLCJwaWNrRGF0ZSIsInNlbGVjdFRpbWUiLCJ0aXRsZSIsInNlbGYiLCJ0aW1lU3BhbiIsIk9iamVjdCIsImFzc2lnbiIsImRhdGEiLCJtb250aCIsImdldE1vbnRoIiwic2xvdCIsInRlc3RfaWQiLCJ0ZXN0X25hbWUiLCJkZCIsIm1tIiwieXl5eSIsImdldEZ1bGxZZWFyIiwidG9kYXkiLCJ0b2dnbGVPcHRpb25zIiwiaXNBdmFpbGFibGUiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJ0b2dnbGUiLCJyZW5kZXIiLCJ1cHBlckRpc2FibGVEYXRlTGltaXQiLCJsb3dlckRpc2FibGVEYXRlTGltaXQiLCJzZWxlY3RlZEZvcm1hdHRlZERhdGUiLCJoaWRlX3RvZ2dsZSIsIkFTU0VUU19CQVNFX1VSTCIsImlzX3JhZGlvbG9neSIsIm5hbWVIZWFkaW5nIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwidGVzdCIsImkiLCJuYW1lIiwiYmluZCIsInRyYW5zZm9ybSIsImRheSIsImtleSIsImdldERheSIsIndpZHRoIiwidG9wIiwiZGlmZiIsInRleHRBbGlnbiIsInNjaGVkdWxlIiwidGltaW5nIiwidmFsdWUiLCJBcHBvaW50bWVudFNsb3QiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwibGFiX2lkIiwic2VsZWN0ZWRMYWIiLCJyZXNjaGVkdWxlIiwiaW5jbHVkZXMiLCJnb2JhY2siLCJwaWNrdXBUeXBlIiwic2VsZWN0ZWRUaW1lU2xvdCIsInNlbGVjdGVkQXBwb2ludG1lbnRUeXBlIiwic2VsZWN0ZWRUeXBlIiwidGltZVNsb3RzRGF0YSIsInByb2NlZWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ2YWx1ZXMiLCJzZWxlY3RUaW1lU2xvdCIsInNlbGVjdGVkX3Rlc3RfaWQiLCJwYXRpZW50IiwicHJvZmlsZSIsInByb2ZpbGVzIiwic2VsZWN0ZWRQcm9maWxlIiwiaXNEdW1teVVzZXIiLCJpZCIsImlzX2luc3VyYW5jZSIsInNlbGVjdGVkQ3JpdGVyaWFzIiwidHdwIiwic3RhcnRfZGF0ZSIsImxhYl90ZXN0IiwibGFiIiwicHJlQm9va2luZyIsImhpc3RvcnkiLCJnbyIsImV4dHJhVGltZVBhcmFtcyIsInNlbGVjdGVkVGVzdHNTbG90IiwidGVzdHMiLCJmaW5hbFNlbGVjdGVkU2xvdCIsImlzX2hvbWVfcGlja3VwIiwicF9waWNrdXAiLCJyX3BpY2t1cCIsInNlbGVjdExhYlRpbWVTTG90Iiwic2VsZWN0ZWREYXRlRm9ybWF0IiwicGluY29kZSIsImV4dHJhUGFyYW1zIiwidGVzdF9pZHMiLCJnZXRMYWJUaW1lU2xvdHMiLCJlbmFibGUiLCJpc0FsbFRpbWVTZWxlY3RlZCIsImdldFRpbWVTbG90U3RhdHVzIiwic2xvdERhdGEiLCJoYW5kbGVUb2dnbGVUeXBlIiwidG90YWxUZXN0cyIsInNwbGl0IiwidG90YWxTZWxlY3RlZFRlc3RzIiwicGF0aG9sb2d5IiwicmFkaW9sb2d5IiwidGVzdHNfaWQiLCJyYWRpb2xvZ3lUaW1lU2xvdCIsImFsbCIsInRlc3RfY291bnQiLCJMQUJTIiwidGltZXNsb3RzIiwidXBjb21pbmdfc2xvdHMiLCJ0aW1pbmdzIiwiZmV0Y2hEYXRhIiwibWF0Y2giLCJwYXJhbXMiLCJnZXRMYWJCeUlkIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwiTEFCX1NFQVJDSCIsIlVTRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImxhYklkIiwicGlja3VwIiwiY2FsbGJhY2siLCJkYXRlUGFyYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQU9BOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBUkEsTUFBTUEsU0FB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UmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmMtY2FsZW5kYXInO1xuY29uc3QgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbmNvbnN0IERBWVNfVE9fU0hPVyA9IDQwXG5jb25zdCBXRUVLX0RBWVMgPSBbJ1N1bicsICdNb24nLCAnVHVlcycsICdXZWQnLCAnVGh1cicsICdGcmknLCAnU2F0J11cbmNvbnN0IE1PTlRIUyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWcnLCAnU2VwdCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIERhdGVUaW1lUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlbGVjdGVkRGF0ZVNwYW46IHByb3BzLnNlbGVjdGVkU2xvdCAmJiBwcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZT9uZXcgRGF0ZShwcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSk6bmV3IERhdGUoKSxcblx0XHRcdGN1cnJlbnRUaW1lU2xvdDogcHJvcHMuc2VsZWN0ZWRTbG90ICYmIHByb3BzLnNlbGVjdGVkU2xvdC50aW1lID8gcHJvcHMuc2VsZWN0ZWRTbG90LnRpbWUgOiB7fSxcblx0XHRcdGRhdGVNb2RhbDogZmFsc2UsXG5cdFx0XHRkYXlTZXJpZXM6W11cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgLy9JZiB0aW1lIGlzIGFscmVhZHkgc2VsZWN0ZWQgYnkgdXNlciAsIHRoZW4gb24gZXZlcnkgcGFnZSBsb2FkIHdlIGJ5IGRlZmF1bHQgc2VsZWN0IHRoYXQgdGltZSBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGUgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QudGltZSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC50aW1lLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZW5hYmxlUHJvY2VlZCh0cnVlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlRGF5cyh0cnVlLCB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVQcm9jZWVkKGZhbHNlKVxuICAgICAgICAgICAgbGV0IGdldFVwY29taW5nRGF0ZT0gZmFsc2VcbiAgICAgICAgICAgIGxldCB1cGNvbWluZ190aW1lID0gbnVsbFxuXG4vKiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgdXBjb21pbmdfdGltZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSovXG4gICAgICAgICAgICB1cGNvbWluZ190aW1lID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKG5ldyBEYXRlKCkpXG4gICAgICAgICAgICAvKmVsc2UgaWYodGhpcy5wcm9wcy51cGNvbWluZ19zbG90cyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHVwY29taW5nX3RpbWUgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnVwY29taW5nX3Nsb3RzKVswXVxuICAgICAgICAgICAgfSovXG5cblxuICAgICAgICAgICAgaWYodXBjb21pbmdfdGltZSAmJiB0aGlzLnByb3BzLnRpbWVTbG90c1t1cGNvbWluZ190aW1lXSl7XG4gICAgICAgICAgICAgICAgZ2V0VXBjb21pbmdEYXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkRGF0ZVNwYW46IG5ldyBEYXRlKHVwY29taW5nX3RpbWUpfSlcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlRGF5cyh0cnVlLCBuZXcgRGF0ZSh1cGNvbWluZ190aW1lKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIWdldFVwY29taW5nRGF0ZSl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5pc190aHlyb2NhcmUpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dERhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIG5leHREYXRlLnNldERhdGUobmV3IERhdGUoKS5nZXREYXRlKCkgKyAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZERhdGVTcGFuOiBuZXh0RGF0ZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVEYXlzKCkgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEYXlzKGdldE5ld0RhdGVzID0gZmFsc2UsIHNlbGVjdGVkRGF0ZSA9ICcnKXtcbiAgICAgICAgLy9UaGlzIGZ1bmN0aW9uIHdpbGwgZ2VuZXJhdGUgZHVtbXkgZGF0ZXMgLHN0YXJ0aW5nIGZyb20gdGhlIGdldE5ld0RhdGVzIHBhcmFtZXRlclxuICAgICAgICBsZXQgb2Zmc2V0PSBuZXcgRGF0ZSgpXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgXG4gICAgICAgIGxldCBkYXRlQ291bnQgPSAxXG4gICAgICAgIGxldCB0b3RhbERhdGVWaXNpdGVkID0gMVxuICAgICAgICBsZXQgZGF5U2VyaWVzID0gW11cblxuICAgICAgICBpZiAoZ2V0TmV3RGF0ZXMpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZSlcbiAgICAgICAgICAgIGN1cnJlbnREYXRlID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuaXNfdGh5cm9jYXJlKXtcbiAgICAgICAgICAgICAgICBvZmZzZXQuc2V0RGF0ZShuZXcgRGF0ZSgpLmdldERhdGUoKSArIDEpXG4gICAgICAgICAgICAgICAgY3VycmVudERhdGUuc2V0RGF0ZShuZXcgRGF0ZSgpLmdldERhdGUoKSArIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUob2Zmc2V0KVxuICAgICAgICBkYXlTZXJpZXMucHVzaCh7XG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBuZXcgRGF0ZShvZmZzZXQpLFxuICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTogZm9ybWF0dGVkRGF0ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLmlzX3RoeXJvY2FyZSl7XG4gICAgICAgICAgICB3aGlsZShkYXRlQ291bnQhPTMgJiYgdG90YWxEYXRlVmlzaXRlZDwzMCl7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgdG90YWxEYXRlVmlzaXRlZClcbiAgICAgICAgICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShvZmZzZXQpXG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnRpbWVTbG90cyAmJiB0aGlzLnByb3BzLnRpbWVTbG90c1tmb3JtYXR0ZWREYXRlXSAmJiB0aGlzLnByb3BzLnRpbWVTbG90c1tmb3JtYXR0ZWREYXRlXS5sZW5ndGgpe1xuXG4gICAgICAgICAgICAgICAgICAgIGRheVNlcmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ6IG5ldyBEYXRlKG9mZnNldCksXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlOiBmb3JtYXR0ZWREYXRlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGRhdGVDb3VudCsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvdGFsRGF0ZVZpc2l0ZWQrK1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vRGF5IDIgZm9yIHRoeXJvY2FyZVxuICAgICAgICAgICAgb2Zmc2V0LnNldERhdGUob2Zmc2V0LmdldERhdGUoKSArIDEpXG4gICAgICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShvZmZzZXQpXG4gICAgICAgICAgICBkYXlTZXJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogbmV3IERhdGUob2Zmc2V0KSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlOiBmb3JtYXR0ZWREYXRlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvL0RheSAzIGZvciB0aHlyb2NhcmVcbiAgICAgICAgICAgIG9mZnNldC5zZXREYXRlKG9mZnNldC5nZXREYXRlKCkgKyAxKVxuICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShvZmZzZXQpXG4gICAgICAgICAgICBkYXlTZXJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogbmV3IERhdGUob2Zmc2V0KSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlOiBmb3JtYXR0ZWREYXRlXG4gICAgICAgICAgICB9KSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXlTZXJpZXM6IGRheVNlcmllcyAgfSlcbiAgICB9XG5cblx0b3BlbkRhdGVNb2RhbCgpIHtcbiAgICAgICAgLy9vcGVuIGNhbGVuZGFyIG1vZGFsXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlTW9kYWw6ICF0aGlzLnN0YXRlLmRhdGVNb2RhbCB9KVxuICAgIH1cblxuICAgIHNlbGVjdERhdGUoZGF0ZUZvcm1hdCkge1xuICAgICAgICAvL2Z1bmNpdG9uIGNhbGxzIHdoZW4gdXNlciBzZWxlY3QgdGhlIGRhdGUgXG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKGRhdGVGb3JtYXQpXG5cbiAgICBcdGlmKG5ldyBEYXRlKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlU3BhbikudG9EYXRlU3RyaW5nKCkgIT0gbmV3IERhdGUoZGF0ZUZvcm1hdCkudG9EYXRlU3RyaW5nKCkpe1xuICAgIFx0XHRcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudGltZVNsb3RzICYmIHRoaXMucHJvcHMudGltZVNsb3RzW2Zvcm1hdHRlZERhdGVdKXtcblxuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VGltZVNsb3RzKGRhdGVGb3JtYXQpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZERhdGVTcGFuOiBkYXRlRm9ybWF0LCBjdXJyZW50VGltZVNsb3Q6IHt9IH0pXG4gICAgICAgIFx0dGhpcy5wcm9wcy5lbmFibGVQcm9jZWVkKGZhbHNlLCBbXSwgdGhpcy5wcm9wcy50eXBlKVx0XG4gICAgXHR9ZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXHQgICAgXG4gICAgfVxuXG4gICAgc2VsZWN0RGF0ZUZyb21DYWxlbmRhcihkYXRlKSB7XG4gICAgICAgIC8vZnVuY2l0b24gY2FsbHMgd2hlbiB1c2VyIHNlbGVjdCB0aGUgZGF0ZSBmcm9tIHRoZSBkYXRlIGNhbGVuZGFyXG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS50b0RhdGUoKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVNb2RhbDogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5wcm9wcy5lbmFibGVQcm9jZWVkKGZhbHNlLCBbXSlcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tEYXRlKG5ldyBEYXRlKGRhdGUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlTW9kYWw6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwaWNrRGF0ZShkYXRlKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWREYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVEYXlzKHRydWUsIHNlbGVjdGVkRGF0ZSlcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGF0ZShzZWxlY3RlZERhdGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RUaW1lKHRpbWUsIHRpdGxlKSB7XG4gICAgICAgIC8vZnVuY3Rpb24gY2FsbHMgd2hlbiB1c2VyIHNlbGVjdCB0aGUgdGltZVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IHRpbWVTcGFuID0gT2JqZWN0LmFzc2lnbih7fSwgdGltZSlcbiAgICAgICAgdGltZVNwYW4udGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRpbWVTbG90OiB0aW1lU3BhbiB9LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBkYXRlOiBzZWxmLnN0YXRlLnNlbGVjdGVkRGF0ZVNwYW4sXG4gICAgICAgICAgICAgICAgbW9udGg6IE1PTlRIU1tuZXcgRGF0ZShzZWxmLnN0YXRlLnNlbGVjdGVkRGF0ZVNwYW4pLmdldE1vbnRoKCldLFxuICAgICAgICAgICAgICAgIHNsb3Q6ICcnLFxuICAgICAgICAgICAgICAgIHRpbWU6IHNlbGYuc3RhdGUuY3VycmVudFRpbWVTbG90LFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMucHJvcHMudHlwZXx8JycsXG4gICAgICAgICAgICAgICAgdGVzdF9pZDogdGhpcy5wcm9wcy50ZXN0X2lkIHx8ICcnLFxuICAgICAgICAgICAgICAgIHRlc3RfbmFtZTogdGhpcy5wcm9wcy50ZXN0X25hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYucHJvcHMuZW5hYmxlUHJvY2VlZChmYWxzZSwgZGF0YSwgdGhpcy5wcm9wcy50eXBlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgICBnZXRGb3JtYXR0ZWREYXRlKGRhdGUpe1xuICAgICAgICAvL2dlbmVyYXRlIGRhdGUgaW4geXl5eS1tbS1kZCBmb3JtYXRcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gICAgICAgIHZhciBkZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIHZhciBtbSA9IGRhdGUuZ2V0TW9udGgoKSsxOyBcbiAgICAgICAgdmFyIHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmKGRkPDEwKSBcbiAgICAgICAge1xuICAgICAgICAgICAgZGQ9JzAnK2RkO1xuICAgICAgICB9IFxuXG4gICAgICAgIGlmKG1tPDEwKSBcbiAgICAgICAge1xuICAgICAgICAgICAgbW09JzAnK21tO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvZGF5ID0geXl5eSsnLScrbW0rJy0nK2RkO1xuICAgICAgICByZXR1cm4gdG9kYXlcbiAgICB9XG5cbiAgICB0b2dnbGVPcHRpb25zKGlzQXZhaWxhYmxlID0gZmFsc2Upe1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQm9va1NlcGVyYXRlbHlDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYm9vay1zZXBlcmF0ZWx5LWNsaWNrZWQnLCAnaXNBdmFpbGFibGUnOiBpc0F2YWlsYWJsZVxuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoJ3NlcGVyYXRlbHknKVxuICAgIH1cblxuXHRyZW5kZXIoKXtcblxuICAgICAgICBsZXQgdXBwZXJEaXNhYmxlRGF0ZUxpbWl0ID0gdGhpcy5wcm9wcy5pc190aHlyb2NhcmU/NzozMFxuICAgICAgICBsZXQgbmV4dERhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgIG5leHREYXRlLnNldERhdGUobmV4dERhdGUuZ2V0RGF0ZSgpICsgMSlcbiAgICAgICAgbGV0IGxvd2VyRGlzYWJsZURhdGVMaW1pdCA9IHRoaXMucHJvcHMuaXNfdGh5cm9jYXJlP25leHREYXRlOm5ldyBEYXRlKClcblxuICAgICAgICBsZXQgc2VsZWN0ZWRGb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlU3BhbilcblxuXHRcdHJldHVybihcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpZGVfdG9nZ2xlP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRheVNlcmllcy5sZW5ndGggJiYgdGhpcy5wcm9wcy50aW1lU2xvdHMgJiYgdGhpcy5wcm9wcy50aW1lU2xvdHNbc2VsZWN0ZWRGb3JtYXR0ZWREYXRlXSAmJiB0aGlzLnByb3BzLnRpbWVTbG90c1tzZWxlY3RlZEZvcm1hdHRlZERhdGVdLmxlbmd0aCB8fCB0cnVlP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtc2xvdC13cm5nLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdG0td3JuZy5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNob3dpbmcgY29tbW9uIHRpbWUgc2xvdHMgd2hlcmUgYWxsIHRlc3RzIGFyZSBhdmFpbGFibGUuRm9yIG1vcmUgb3B0aW9ucyB5b3UgY2FuIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wbnRyXCIgb25DbGljaz17KCk9PnRoaXMudG9nZ2xlT3B0aW9ucyh0cnVlKX0+Qm9vayBTZXBhcmF0ZWx5PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cInRpbWUtc2xvdC13cm5nLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdG0td3JuZy5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJvdGggdGVzdCBjYW7igJl0IGJlIGJvb2sgZm9yIHRoZSBzYW1lIHRpbWUuIFlvdSBjYW4gPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBudHJcIiBvbkNsaWNrPXsoKT0+dGhpcy50b2dnbGVPcHRpb25zKCl9PkJvb2sgU2VwYXJhdGVseTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJuZy10b3AtMTJcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNfcmFkaW9sb2d5P1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0bS1zbG90LWhkbmdcIj57dGhpcy5wcm9wcy5uYW1lSGVhZGluZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDp0aGlzLnByb3BzLm5hbWVIZWFkaW5nICYmIEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5uYW1lSGVhZGluZyk/XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWVIZWFkaW5nLm1hcCgodGVzdCwgaSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9XCJ0bS1zbG90LWhkbmdcIj57dGVzdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtc2xvdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1kYXRlLXNlbGVjdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xlY3QtZGF0ZS1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGVjdC1kYXRlLWltZy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10ZXh0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctY2FsLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VsZWN0IEFwcG9pbnRtZW50IERhdGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWwtZGF0ZS1saXN0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ2ZXItZGF0ZS1saXN0LXVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXlTZXJpZXMgJiYgdGhpcy5zdGF0ZS5kYXlTZXJpZXMubGVuZ3RoICYmIHRoaXMuc3RhdGUuZGF5U2VyaWVzWzBdLmRhdGVGb3JtYXQgPiBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPzxsaSBjbGFzc05hbWU9XCJzY3JsbC1kYXRlXCIgb25DbGljaz17dGhpcy5vcGVuRGF0ZU1vZGFsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JpZ2h0LXNjLnN2Z1wifSBzdHlsZT17e3RyYW5zZm9ybToncm90YXRlKDE4MGRlZyknfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF5U2VyaWVzLm1hcCgoZGF5LCBrZXkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17a2V5fSBvbkNsaWNrPXt0aGlzLnNlbGVjdERhdGUuYmluZCh0aGlzLCBkYXkuZGF0ZUZvcm1hdCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtuZXcgRGF0ZShkYXkuZGF0ZUZvcm1hdCkudG9EYXRlU3RyaW5nKCkgPT0gbmV3IERhdGUodGhpcy5zdGF0ZS5zZWxlY3RlZERhdGVTcGFuKS50b0RhdGVTdHJpbmcoKSA/ICdkYXRlLWxpc3QtYWN0aXZlJzonJ30+e25ldyBEYXRlKGRheS5kYXRlRm9ybWF0KS5nZXREYXRlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e25ldyBEYXRlKGRheS5kYXRlRm9ybWF0KS50b0RhdGVTdHJpbmcoKSA9PSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpID8gJ1RvZGF5JyA6IFdFRUtfREFZU1sobmV3ICBEYXRlKGRheS5kYXRlRm9ybWF0KSkuZ2V0RGF5KCldfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNjcmxsLWRhdGVcIiBvbkNsaWNrPXt0aGlzLm9wZW5EYXRlTW9kYWwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicyMnB4JywgdG9wOicxMHB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhbG5leHQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0ZU1vZGFsID8gPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1vdmVybGF5XCI+PGRpdiBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1tb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2Vla051bWJlcj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bW9tZW50KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlU3Bhbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZT17KGRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmRpZmYobW9tZW50KChsb3dlckRpc2FibGVEYXRlTGltaXQpKSwgJ2RheXMnKSA8IDAgfHwgZGF0ZS5kaWZmKG1vbWVudCgobmV3IERhdGUpKSwgJ2RheXMnKSA+IHVwcGVyRGlzYWJsZURhdGVMaW1pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9kYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuc2VsZWN0RGF0ZUZyb21DYWxlbmRhci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXHR0aGlzLnN0YXRlLmRheVNlcmllcy5sZW5ndGg/XG4gICAgICAgICAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJzZWxlY3QtdGltZS1zbG90LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsZWN0LWRhdGUtaW1nLWNvbnRlbnQgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRpbWVTbG90cyAmJiB0aGlzLnByb3BzLnRpbWVTbG90c1tzZWxlY3RlZEZvcm1hdHRlZERhdGVdICYmIHRoaXMucHJvcHMudGltZVNsb3RzW3NlbGVjdGVkRm9ybWF0dGVkRGF0ZV0ubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPzxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10ZXh0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlbGVjdCBUaW1lIFNsb3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXRpbWUtc2xvdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Ob3QgYXZhaWxhYmxlIG9uIHRoaXMgZGF5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQgICAgICAgICAgICAgICAgXG5cdFx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHQgICAgICAgICAgICB7XG5cdFx0XHRcdCAgICAgICAgICAgIFx0dGhpcy5wcm9wcy50aW1lU2xvdHMgJiYgdGhpcy5wcm9wcy50aW1lU2xvdHNbc2VsZWN0ZWRGb3JtYXR0ZWREYXRlXT9cblx0XHRcdFx0ICAgICAgICAgICAgXHR0aGlzLnByb3BzLnRpbWVTbG90c1tzZWxlY3RlZEZvcm1hdHRlZERhdGVdLm1hcCgoc2NoZWR1bGUsIGtleSkgPT4ge1xuXG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHRyZXR1cm4gc2NoZWR1bGUudGltaW5nICYmIHNjaGVkdWxlLnRpbWluZy5sZW5ndGg/XG5cdFx0XHRcdCAgICAgICAgICAgIFx0XHQ8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJzZWxlY3QtdGltZS1saXN0aW5nLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLXNoaWZ0XCI+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAge3NjaGVkdWxlLnRpdGxlfVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtc2xvdC1tYWluLWxpc3RpbmdcIj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3QgdGltZS1pdGVtc1wiPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0c2NoZWR1bGUudGltaW5nLm1hcCgodGltZSwgaSk9PiB7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRyZXR1cm4gPGxpIGtleT17aX0gY2xhc3NOYW1lPVwidGltZS1zbG90LWxpLWxpc3RpbmdcIiBvbkNsaWNrPXtcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGltZS5iaW5kKHRoaXMsIHRpbWUsIHNjaGVkdWxlLnRpdGxlKSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGltZS1zbG90LXRpbW1pbmdzICR7dGhpcy5zdGF0ZS5jdXJyZW50VGltZVNsb3QudmFsdWUgPT0gdGltZS52YWx1ZT8gXCIgdGltZS1hY3RpdmVcIiA6ICcnfWB9Pnt0aW1lLnRleHR9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdH0pXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICA6Jydcblx0XHRcdFx0ICAgICAgICAgICAgXHR9KVxuXHRcdFx0XHQgICAgICAgICAgICBcdDonJ1xuXHRcdFx0XHQgICAgICAgICAgICB9XG5cdFx0XHRcdCAgICAgICAgPC9kaXY+XG5cdFx0XHRcdCAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXRpbWUtc2xvdC1jb250YWluZXJcIj5cblx0XHRcdFx0ICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Ob3QgYXZhaWxhYmxlIG9uIHRoaXMgZGF5LjwvcD5cblx0XHRcdFx0ICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWVQaWNrZXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG4vL2ltcG9ydCBUaW1lU2xvdFNlbGVjdG9yIGZyb20gJy4uLy4uL2NvbW1vbnMvdGltZVNsb3RTZWxlY3Rvci9pbmRleC5qcydcbmltcG9ydCBUaW1lU2xvdFNlbGVjdG9yIGZyb20gJy4uL0xhYkRhdGVUaW1lUGlja2VyLmpzJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0xvYWRlcidcblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuXG5jbGFzcyBBcHBvaW50bWVudFNsb3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBsYWJfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTGFiXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkTGFiOiBsYWJfaWQsXG4gICAgICAgICAgICByZXNjaGVkdWxlOiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygncmVzY2hlZHVsZScpLFxuICAgICAgICAgICAgZ29iYWNrOiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnZ29iYWNrJyksXG4gICAgICAgICAgICBwaWNrdXBUeXBlOiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygndHlwZT1sYWInKSA/IDAgOiAxLFxuICAgICAgICAgICAgZW5hYmxlUHJvY2VlZDogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZFRpbWVTbG90OiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdHx8e30sXG4gICAgICAgICAgICBzZWxlY3RlZEFwcG9pbnRtZW50VHlwZTpwYXJzZWQuc2VsZWN0ZWRUeXBlICYmIHBhcnNlZC5zZWxlY3RlZFR5cGU9PSdzZXBlcmF0ZWx5Jz8nc2VwZXJhdGVseSc6J2FsbCcsXG4gICAgICAgICAgICB0aW1lU2xvdHNEYXRhOm51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2NlZWQoZSkge1xuICAgICAgICAvL3VzZXIgc2VsZWN0IHRoZSB0aW1lc2xvdCAmIGNsaWNrIHRoZSBidXR0b24gdG8gcHJvY2VlZFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsZXQgc2VsZWN0ZWREYXRlID0gbnVsbFxuICAgICAgICAvLyBpbiBjYXNlIG9mIHJlc2NoZWR1bGUgZ28gYmFjayAsIGVsc2UgcHVzaFxuICAgICAgICBpZihPYmplY3QudmFsdWVzKHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdCkubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VGltZVNsb3QodGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90KVxuICAgICAgICAgICAgc2VsZWN0ZWREYXRlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90LmRhdGVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0ge31cbiAgICAgICAgbGV0IHNlbGVjdGVkX3Rlc3RfaWQgPSBbXVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHBhdGllbnQgPSBudWxsXG4gICAgICAgIGxldCBwcm9maWxlID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV0gJiYgIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5zZWxlY3RlZFByb2ZpbGVdLmlzRHVtbXlVc2VyKSB7XG4gICAgICAgICAgICBwYXRpZW50ID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZV1cbiAgICAgICAgICAgIHByb2ZpbGUgPSBwYXRpZW50LmlkXG4gICAgICAgIH1cbiAgICAgICAgLy8gaW4gY2FzZSBvZiB1cGxvYWQgcHJlc2NyaXB0aW9uXG4gICAgICAgIGlmKHBhcnNlZC5pc19pbnN1cmFuY2UgJiYgcGFyc2VkLmlzX2luc3VyYW5jZSA9PSAndHJ1ZScpe1xuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMubWFwKCh0d3AsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGVzdF9pZC5wdXNoKHR3cC5pZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5zdGFydF9kYXRlID0gc2VsZWN0ZWREYXRlP3NlbGVjdGVkRGF0ZTp0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlP3RoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGU6bmV3IERhdGUoKVxuICAgICAgICAgICAgZGF0YS5sYWJfdGVzdCA9IHNlbGVjdGVkX3Rlc3RfaWRcbiAgICAgICAgICAgIGRhdGEubGFiID0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYlxuICAgICAgICAgICAgZGF0YS5wcm9maWxlID0gcHJvZmlsZVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVCb29raW5nKGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZXNjaGVkdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICB9XG4gICAgICAgIC8vIGdvIGJhY2sgZm9yIGdvYmFja1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5nb2JhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgIH1cbiAgICAgICAgLy9pZiAodGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7dGhpcy5wcm9wcy5zZWxlY3RlZExhYn0vYm9va2ApXG4gICAgICAgIC8vfVxuICAgIH1cblxuICAgIHNlbGVjdFRpbWVTbG90KHNsb3QpIHtcbiAgICAgICAgLy91c2VyIHNlbGVjdCB0aW1lIFxuICAgICAgICBsZXQgZXh0cmFUaW1lUGFyYW1zID0ge1xuICAgICAgICAgICAgdHlwZTogdGhpcy5zdGF0ZS5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdCAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3QuZGF0ZSkge1xuICAgICAgICAgICAgZXh0cmFUaW1lUGFyYW1zID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdC5kYXRlKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxlY3RlZFRlc3RzU2xvdCA9IHsuLi5zbG90fVxuICAgICAgICBsZXQgdGVzdHMgPSB7fVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGZpbmFsU2VsZWN0ZWRTbG90ID0ge31cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZT09J2FsbCcpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YVsnYWxsJ10gJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhWydhbGwnXS50ZXN0cykge1xuICAgICAgICAgICAgICAgIGxldCBpc19ob21lX3BpY2t1cCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgaWYocGFyc2VkLnBfcGlja3VwICYmIHBhcnNlZC5wX3BpY2t1cD09XCJob21lXCIpe1xuICAgICAgICAgICAgICAgICAgICBpc19ob21lX3BpY2t1cCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYocGFyc2VkLnJfcGlja3VwICYmIHBhcnNlZC5yX3BpY2t1cD09XCJob21lXCIpe1xuICAgICAgICAgICAgICAgICAgICBpc19ob21lX3BpY2t1cCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhWydhbGwnXS50ZXN0cy5tYXAoKHRlc3QpPT57XG4gICAgICAgICAgICAgICAgICAgIHRlc3RzW3Rlc3QuaWRdPSB7Li4uc2VsZWN0ZWRUZXN0c1Nsb3RbJ2FsbCddLCB0ZXN0X2lkOnRlc3QuaWQsIHRlc3RfbmFtZTogdGVzdC5uYW1lLCBpc19ob21lX3BpY2t1cDogaXNfaG9tZV9waWNrdXAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZmluYWxTZWxlY3RlZFNsb3RbJ2FsbCddID0gc2VsZWN0ZWRUZXN0c1Nsb3RbJ2FsbCddXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YVsncGF0aG9sb2d5J10gJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhWydwYXRob2xvZ3knXS50ZXN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YVsncGF0aG9sb2d5J10udGVzdHMubWFwKCh0ZXN0KT0+e1xuICAgICAgICAgICAgICAgICAgICB0ZXN0c1t0ZXN0LmlkXSA9IHsuLi5zZWxlY3RlZFRlc3RzU2xvdFsncGF0aG9sb2d5J10sIHRlc3RfaWQ6dGVzdC5pZCwgdGVzdF9uYW1lOiB0ZXN0Lm5hbWUsIGlzX2hvbWVfcGlja3VwOiBwYXJzZWQucF9waWNrdXAgJiYgcGFyc2VkLnBfcGlja3VwPT1cImhvbWVcIj90cnVlOmZhbHNlfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZmluYWxTZWxlY3RlZFNsb3RbJ3BhdGhvbG9neSddID0gc2VsZWN0ZWRUZXN0c1Nsb3RbJ3BhdGhvbG9neSddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihzZWxlY3RlZFRlc3RzU2xvdFsncmFkaW9sb2d5J10gJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhWydyYWRpb2xvZ3knXSAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGFbJ3JhZGlvbG9neSddLnRlc3RzICYmIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YVsncmFkaW9sb2d5J10udGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGVzdHMgPSB7Li4udGVzdHMsIC4uLnNlbGVjdGVkVGVzdHNTbG90WydyYWRpb2xvZ3knXSB9XG4gICAgICAgICAgICAgICAgZmluYWxTZWxlY3RlZFNsb3RbJ3JhZGlvbG9neSddID0gc2VsZWN0ZWRUZXN0c1Nsb3RbJ3JhZGlvbG9neSddXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmaW5hbFNlbGVjdGVkU2xvdFsnc2VsZWN0ZWRUZXN0c1RpbWVTbG90J10gPSB0ZXN0c1xuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYlRpbWVTTG90KGZpbmFsU2VsZWN0ZWRTbG90LCB0aGlzLnN0YXRlLnJlc2NoZWR1bGUsIGV4dHJhVGltZVBhcmFtcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnByb3BzLnNlbGVjdGVkU2xvdCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKXtcbiAgICAgICAgICAgIC8vd2hlbiBjb21wb25lbnQgbG9hZCAsaXQgY2hlY2sgaWYgYW55IHRpbWVzbG90IHNlbGVjdGVkIGVhcmxpZXIgYnkgdXNlciBmb3IgdGhlIGxhYi9kb2N0b3IsaWYgc2VsZWN0ZWQgdGhlbiBieWRlZmF1bHQgd2Ugc2VsZWN0IHRoZW0gb24gcGFnZSBsb2FkXG4gICAgICAgICAgICB0aGlzLmdldFRpbWVTbG90cyhuZXcgRGF0ZSh0aGlzLnByb3BzLnNlbGVjdGVkU2xvdC5kYXRlKSlcbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICAgICAgaWYocGFyc2VkLmlzX3RoeXJvY2FyZSAmJiBwYXJzZWQuaXNfdGh5cm9jYXJlLmluY2x1ZGVzKCd0cnVlJykpe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgbmV4dERhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZERhdGVGb3JtYXQgJiYgZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk9PW5ldyBEYXRlKHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlRm9ybWF0KS50b0RhdGVTdHJpbmcoKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RGF0ZS5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgMSlcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dERhdGUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZUZvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dERhdGUuc2V0RGF0ZShuZXcgRGF0ZSgpLmdldERhdGUoKSArIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGltZVNsb3RzKG5leHREYXRlKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUaW1lU2xvdHMobmV3IERhdGUoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgIH1cblxuICAgIGdldFRpbWVTbG90cyhkYXRlKXtcbiAgICAgICAgLy8yMzI1XG4gICAgICAgIGxldCBzZWxlY3RlZExhYiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMYWJcbiAgICAgICAgZGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKVxuICAgICAgICBsZXQgcGluY29kZSA9IHRoaXMucHJvcHMucGluY29kZVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYocGFyc2VkLmlzX3RoeXJvY2FyZSAmJiBwYXJzZWQuaXNfdGh5cm9jYXJlLmluY2x1ZGVzKCd0cnVlJykpe1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcGluY29kZSA9ICcnXG4gICAgICAgICAgICBkYXRlID0gJydcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXh0cmFQYXJhbXMgPSB7XG4gICAgICAgICAgICB0ZXN0X2lkczogcGFyc2VkLnRlc3RfaWRzfHwnJyxcbiAgICAgICAgICAgIHBfcGlja3VwOnBhcnNlZC5wX3BpY2t1cCAmJiBwYXJzZWQucF9waWNrdXA9PVwiaG9tZVwiPzE6MCxcbiAgICAgICAgICAgIHJfcGlja3VwOnBhcnNlZC5yX3BpY2t1cCAmJiBwYXJzZWQucl9waWNrdXA9PVwiaG9tZVwiPzE6MFxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0TGFiVGltZVNsb3RzKHNlbGVjdGVkTGFiLCB0aGlzLnN0YXRlLnBpY2t1cFR5cGUsIHBpbmNvZGV8fCcnLCBkYXRlLCBleHRyYVBhcmFtcywgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lU2xvdHNEYXRhOiBkYXRhfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRGb3JtYXR0ZWREYXRlKGRhdGUpe1xuICAgICAgICAvL2Z1bmN0aW9uIHdoaWNoIHJldHVybiBkYXRlIGluIHl5eXktbW0tZGQgZm9ybWF0XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxuICAgICAgICB2YXIgZGQgPSBkYXRlLmdldERhdGUoKTtcblxuICAgICAgICB2YXIgbW0gPSBkYXRlLmdldE1vbnRoKCkrMTsgXG4gICAgICAgIHZhciB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBpZihkZDwxMCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRkPScwJytkZDtcbiAgICAgICAgfSBcblxuICAgICAgICBpZihtbTwxMCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1tPScwJyttbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2RheSA9IHl5eXkrJy0nK21tKyctJytkZFxuICAgICAgICByZXR1cm4gdG9kYXlcbiAgICB9XG5cbiAgICBlbmFibGVQcm9jZWVkKGVuYWJsZSwgc2xvdD17fSl7XG4gICAgICAgIC8vZnVuY3Rpb24gd2hpY2gga2VlcCBvbiBjaGVja2luZyBvbiBldmVyeSB0aW1lIHNlbGVjdGlvbiB0aGF0IHdoZXRoZXIgdGltZSBpcyBzZWxlY3RlZCBvciBub3RcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBpc0FsbFRpbWVTZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgIGlmKHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YSkge1xuICAgICAgICAgICAgaXNBbGxUaW1lU2VsZWN0ZWQgPSB0aGlzLmdldFRpbWVTbG90U3RhdHVzKHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdClcbiAgICAgICAgfVxuICAgICAgICBpZihlbmFibGUpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlUHJvY2VlZDogaXNBbGxUaW1lU2VsZWN0ZWR9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKE9iamVjdC52YWx1ZXMoc2xvdCkubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBsZXQgc2xvdERhdGEgPSB7Li4udGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90fVxuICAgICAgICAgICAgICAgIGlmKHNsb3QudHlwZT09J2FsbCcgfHwgc2xvdC50eXBlPT0ncGF0aG9sb2d5Jykge1xuICAgICAgICAgICAgICAgICAgICBzbG90RGF0YVtzbG90LnR5cGVdPSBzbG90XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoc2xvdC50eXBlPT0ncmFkaW9sb2d5Jykge1xuICAgICAgICAgICAgICAgICAgICBzbG90RGF0YVtzbG90LnR5cGVdPSBzbG90RGF0YVtzbG90LnR5cGVdP3suLi5zbG90RGF0YVtzbG90LnR5cGVdfTp7fVxuICAgICAgICAgICAgICAgICAgICBzbG90RGF0YVtzbG90LnR5cGVdW3Nsb3QudGVzdF9pZF0gPSB7Li4uc2xvdCwgaXNfaG9tZV9waWNrdXA6cGFyc2VkLnJfcGlja3VwICYmIHBhcnNlZC5yX3BpY2t1cD09XCJob21lXCI/dHJ1ZTpmYWxzZX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXNBbGxUaW1lU2VsZWN0ZWQgPSB0aGlzLmdldFRpbWVTbG90U3RhdHVzKHNsb3REYXRhKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZVByb2NlZWQ6IGlzQWxsVGltZVNlbGVjdGVkLCBzZWxlY3RlZFRpbWVTbG90OiBzbG90RGF0YX0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVQcm9jZWVkOiBmYWxzZX0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUb2dnbGVUeXBlKHR5cGUpIHtcbiAgICAgICAgLy9mdW5jdGlvbiB3aGljaCBnZXQgdGltZXNsb3QgZm9yIHBhcnRpY3VsYXIgdG9nZ2xlIHR5cGUgZS5nIGFsbCwgc2VwZXJhdGVseVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRBcHBvaW50bWVudFR5cGU6IHR5cGUgfSlcbiAgICB9XG5cbiAgICBnZXRUaW1lU2xvdFN0YXR1cyhzbG90RGF0YT1udWxsKXtcbiAgICAgICAgLy9JbiBjYXNlIG9mIHRlc3RzIHNlbGVjdGVkIGJ5IHVzZXIgJ3NlcGVyYXRlbHknLCB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGlmIGFsbCB0aGUgdGltZXMgb2Ygc2VsZWN0ZWQgdGVzdHMgYXJlIHNlbGVjdGVkIGJ5IHRoZSB1c2VyIG9yIG5vdFxuICAgICAgICBsZXQgaXNBbGxUaW1lU2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgICBsZXQgc2VsZWN0ZWRTbG90ID0gdGhpcy5wcm9wcy5zZWxlY3RlZFNsb3RcbiAgICAgICAgaWYoc2xvdERhdGEpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkU2xvdCA9IHNsb3REYXRhXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZT09J2FsbCcgJiYgc2VsZWN0ZWRTbG90ICYmIHNlbGVjdGVkU2xvdFsnYWxsJ10pIHtcbiAgICAgICAgICAgIGlzQWxsVGltZVNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlPT0nc2VwZXJhdGVseScpe1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgICAgICBsZXQgdG90YWxUZXN0cyA9IHBhcnNlZC50ZXN0X2lkcz9wYXJzZWQudGVzdF9pZHMuc3BsaXQoJywnKTpbXVxuICAgICAgICAgICAgbGV0IHRvdGFsU2VsZWN0ZWRUZXN0cyA9IDBcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YS5wYXRob2xvZ3kgJiYgc2VsZWN0ZWRTbG90WydwYXRob2xvZ3knXSkge1xuICAgICAgICAgICAgICAgIHRvdGFsU2VsZWN0ZWRUZXN0cz10aGlzLnN0YXRlLnRpbWVTbG90c0RhdGEucGF0aG9sb2d5LnRlc3RzLmxlbmd0aHx8MFxuICAgICAgICAgICAgICAgIGlzQWxsVGltZVNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGEucmFkaW9sb2d5ICYmIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YS5yYWRpb2xvZ3kudGVzdHMgJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLnJhZGlvbG9neS50ZXN0cy5sZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YS5yYWRpb2xvZ3kudGVzdHMubWFwKCh0ZXN0KT0+e1xuICAgICAgICAgICAgICAgICAgICBpZihzbG90RGF0YVsncmFkaW9sb2d5J10gJiYgc2xvdERhdGFbJ3JhZGlvbG9neSddW3Rlc3QudGVzdHNfaWRdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsU2VsZWN0ZWRUZXN0cysrXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmKHRvdGFsU2VsZWN0ZWRUZXN0cz09dG90YWxUZXN0cy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBpc0FsbFRpbWVTZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQWxsVGltZVNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzQWxsVGltZVNlbGVjdGVkXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHRpbWVTbG90cyA9IG51bGxcbiAgICAgICAgbGV0IHNlbGVjdGVkU2xvdCA9IG51bGxcbiAgICAgICAgbGV0IHR5cGUgPSAnJ1xuICAgICAgICBsZXQgcmFkaW9sb2d5VGltZVNsb3QgPSBudWxsXG4gICAgICAgIGlmKHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YSkge1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZT09J2FsbCcgJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLmFsbCAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGEuYWxsLnRlc3RzICYmIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YS5hbGwudGVzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGltZVNsb3RzID0gdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLmFsbFxuICAgICAgICAgICAgICAgIHR5cGUgPSAnYWxsJ1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkU2xvdCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdCAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3RbJ2FsbCddP3RoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdFsnYWxsJ106bnVsbFxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZT09J3NlcGVyYXRlbHknICYmIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YS5wYXRob2xvZ3kgJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLnBhdGhvbG9neS50ZXN0cyAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGEucGF0aG9sb2d5LnRlc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRpbWVTbG90cyA9IHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YS5wYXRob2xvZ3lcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXRob2xvZ3knXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRTbG90ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90ICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdFsncGF0aG9sb2d5J10/dGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90WydwYXRob2xvZ3knXTpudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkVGltZVNsb3QgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZFRpbWVTbG90WydyYWRpb2xvZ3knXSl7XG4gICAgICAgICAgICByYWRpb2xvZ3lUaW1lU2xvdCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUaW1lU2xvdFsncmFkaW9sb2d5J11cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGVzdF9jb3VudCA9IHBhcnNlZC50ZXN0X2lkcz9wYXJzZWQudGVzdF9pZHMuc3BsaXQoJywnKS5sZW5ndGg6MFxuICAgICAgICBsZXQgaGlkZV90b2dnbGUgPSAhKHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YSAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGFbJ3BhdGhvbG9neSddICYmIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YVsncGF0aG9sb2d5J10udGVzdHMgJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhWydwYXRob2xvZ3knXS50ZXN0cy5sZW5ndGggPT0gdGVzdF9jb3VudCkgJiYgdGVzdF9jb3VudD4xICYmICEocGFyc2VkLnJlc2NoZWR1bGUgJiYgcGFyc2VkLnJlc2NoZWR1bGU9PSd0cnVlJylcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aGVhZGVyIGNsYXNzTmFtZT1cInNraW4tcHJpbWFyeSBmaXhlZCBob3Jpem9udGFsIHRvcCBzdGlja3ktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBiYWNrLWljb25cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYmFjay13aGl0ZS5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZSBmdy03MDAgY2FwaXRhbGl6ZSB0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+U2VsZWN0IERhdGUgYW5kIFRpbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LXRpbWUtc2xvdC1vdXRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX3RvZ2dsZSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXN0aWNreS1yYWRpby1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+Qm9vayBhbGwgdGVzdHMgdG9nZXRoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9eygpPT50aGlzLmhhbmRsZVRvZ2dsZVR5cGUoJ2FsbCcpfSBjaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlID09ICdhbGwnfSBuYW1lPVwidHlwZVwiIHZhbHVlPSdtJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5Cb29rIHNlcGFyYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DaGFuZ2U9eygpPT50aGlzLmhhbmRsZVRvZ2dsZVR5cGUoJ3NlcGVyYXRlbHknKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZSA9PSAnc2VwZXJhdGVseSd9IG5hbWU9XCJ0eXBlXCIgdmFsdWU9J2YnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9PSdhbGwnP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtc2xvdC13cm5nLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3RtLXdybmcucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Qm90aCB0ZXN0IGNhbuKAmXQgYmUgYm9vayBmb3IgdGhlIHNhbWUgdGltZS4gWW91IGNhbiA8c3Bhbj5Cb29rIFNlcGFyYXRlbHk8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSAmJiB0aGlzLnN0YXRlLnRpbWVTbG90c0RhdGE/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkci1wcm9maWxlLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTbG90cyAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlPT0nYWxsJz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lU2xvdFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNsb3RzPXt0aW1lU2xvdHMudGltZXNsb3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRpbWVTbG90PXt0aGlzLnNlbGVjdFRpbWVTbG90LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTbG90PXtzZWxlY3RlZFNsb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVQcm9jZWVkID0ge3RoaXMuZW5hYmxlUHJvY2VlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZvcm1hdHRlZERhdGU9e3RoaXMuZ2V0Rm9ybWF0dGVkRGF0ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFRpbWVTbG90cz0ge3RoaXMuZ2V0VGltZVNsb3RzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBjb21pbmdfc2xvdHM9IHt0aW1lU2xvdHMudXBjb21pbmdfc2xvdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfdGh5cm9jYXJlID0ge3RpbWVTbG90cy5pc190aHlyb2NhcmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUhlYWRpbmc9e3RpbWVTbG90cy50ZXN0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUgPSB7dGhpcy5oYW5kbGVUb2dnbGVUeXBlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdF9pZD0ge3RpbWVTbG90cy50ZXN0cyAmJiB0aW1lU2xvdHMudGVzdHMubGVuZ3RoP3RpbWVTbG90cy50ZXN0c1swXS5pZDonJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX3RvZ2dsZT17aGlkZV90b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lU2xvdHMgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZEFwcG9pbnRtZW50VHlwZT09J3NlcGVyYXRlbHknP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVTbG90U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lU2xvdHM9e3RpbWVTbG90cy50aW1lc2xvdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VGltZVNsb3Q9e3RoaXMuc2VsZWN0VGltZVNsb3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNsb3Q9e3NlbGVjdGVkU2xvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVByb2NlZWQgPSB7dGhpcy5lbmFibGVQcm9jZWVkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Rm9ybWF0dGVkRGF0ZT17dGhpcy5nZXRGb3JtYXR0ZWREYXRlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGltZVNsb3RzPSB7dGhpcy5nZXRUaW1lU2xvdHMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGNvbWluZ19zbG90cz0ge3RpbWVTbG90cy51cGNvbWluZ19zbG90c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc190aHlyb2NhcmUgPSB7dGltZVNsb3RzLmlzX3RoeXJvY2FyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lSGVhZGluZz17dGltZVNsb3RzLnRlc3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZSA9IHt0aGlzLmhhbmRsZVRvZ2dsZVR5cGUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0X2lkPSB7dGltZVNsb3RzLnRlc3RzICYmIHRpbWVTbG90cy50ZXN0cy5sZW5ndGg/dGltZVNsb3RzLnRlc3RzWzBdLmlkOicnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfdG9nZ2xlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vRm9yIFJhZGlvbG9neSBUZXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkQXBwb2ludG1lbnRUeXBlPT0nc2VwZXJhdGVseScgJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhICYmIHRoaXMuc3RhdGUudGltZVNsb3RzRGF0YS5yYWRpb2xvZ3kgJiYgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLnJhZGlvbG9neS50ZXN0cz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50aW1lU2xvdHNEYXRhLnJhZGlvbG9neS50ZXN0cy5tYXAoKHRlc3RzLCBrZXkpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRpbWVTbG90U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lU2xvdHM9e3Rlc3RzLnRpbWluZ3MudGltZXNsb3RzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VGltZVNsb3Q9e3RoaXMuc2VsZWN0VGltZVNsb3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2xvdD17cmFkaW9sb2d5VGltZVNsb3QgJiYgcmFkaW9sb2d5VGltZVNsb3RbdGVzdHMudGVzdHNfaWRdP3JhZGlvbG9neVRpbWVTbG90W3Rlc3RzLnRlc3RzX2lkXTpudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW9sb2d5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUHJvY2VlZCA9IHt0aGlzLmVuYWJsZVByb2NlZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZvcm1hdHRlZERhdGU9e3RoaXMuZ2V0Rm9ybWF0dGVkRGF0ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGltZVNsb3RzPSB7dGhpcy5nZXRUaW1lU2xvdHMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwY29taW5nX3Nsb3RzPSB7dGVzdHMudGltaW5ncy51cGNvbWluZ19zbG90c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3RoeXJvY2FyZSA9IHt0ZXN0cy50aW1pbmdzLmlzX3RoeXJvY2FyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfbmFtZSA9IHt0ZXN0cy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdF9pZCA9e3Rlc3RzLnRlc3RzX2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfcmFkaW9sb2d5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUhlYWRpbmc9e3Rlc3RzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUgPSB7dGhpcy5oYW5kbGVUb2dnbGVUeXBlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX3RvZ2dsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+IDogPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5lbmFibGVQcm9jZWVkfSBvbkNsaWNrPXt0aGlzLnByb2NlZWQuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwicC0zIG1ydC0xMCB2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGF0aWMtYnRuXCI+U2VsZWN0PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIHR5cGU9XCJsYWJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcG9pbnRtZW50U2xvdFxuIiwiLy9pbXBvcnQgQXBwb2ludG1lbnRTbG90IGZyb20gJy4vQXBwb2ludG1lbnRTbG90LmpzJ1xuaW1wb3J0IEFwcG9pbnRtZW50U2xvdCBmcm9tICcuL0FsbEFwcG9pbnRtZW50U2xvdC5qcydcbmV4cG9ydCBkZWZhdWx0IEFwcG9pbnRtZW50U2xvdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRMYWJCeUlkLCBnZXRMYWJUaW1lU2xvdHMsIHNlbGVjdExhYlRpbWVTTG90LCBwcmVCb29raW5nfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgQXBwb2ludG1lbnRTbG90VmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RpYWdub3Npcy9hcHBvaW50bWVudFNsb3QnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5jbGFzcyBBcHBvaW50bWVudFNsb3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIC8vIHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gpIHtcbiAgICAvLyAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldExhYkJ5SWQobWF0Y2gucGFyYW1zLmlkKSlcbiAgICAvLyB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBmZXRjaERhdGEocHJvcHMpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UocHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBsYWJfaWQgPSBwcm9wcy5zZWxlY3RlZExhYiB8fCBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgfHwgcGFyc2VkLmxhYl9pZFxuICAgICAgICBsZXQgdGVzdF9pZHMgPSBbXVxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBpZihwYXJzZWQudGVzdF9pZHMpIHtcbiAgICAgICAgICAgIHRlc3RfaWRzID0gcGFyc2VkLnRlc3RfaWRzLnNwbGl0KCcsJylcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFiX2lkKSB7XG4gICAgICAgICAgICBwcm9wcy5nZXRMYWJCeUlkKGxhYl9pZCwgdGVzdF9pZHMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZExhYiAhPSB0aGlzLnByb3BzLnNlbGVjdGVkTGFiKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoRGF0YShwcm9wcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmZldGNoRGF0YSh0aGlzLnByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGxhYl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMYWIgfHwgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQgfHwgcGFyc2VkLmxhYl9pZFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QXBwb2ludG1lbnRTbG90VmlldyB7Li4udGhpcy5wcm9wc30gc2VsZWN0ZWRMYWI9e2xhYl9pZH0gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG4gICAgbGV0IExBQlMgPSBzdGF0ZS5MQUJTXG4gICAgbGV0IHsgcGluY29kZSwgc2VsZWN0ZWRDcml0ZXJpYXMgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTXG4gICAgbGV0IHsgc2VsZWN0ZWRTbG90LCBzZWxlY3RlZERhdGVGb3JtYXQgfSA9IHN0YXRlLkxBQl9TRUFSQ0hcbiAgICBjb25zdCB7IHNlbGVjdGVkUHJvZmlsZSwgcHJvZmlsZXMgfSA9IHN0YXRlLlVTRVJcblxuICAgIHJldHVybiB7XG4gICAgICAgIExBQlMsIHNlbGVjdGVkU2xvdCwgcGluY29kZSwgc2VsZWN0ZWRQcm9maWxlLCBwcm9maWxlcywgc2VsZWN0ZWRDcml0ZXJpYXMsIHNlbGVjdGVkRGF0ZUZvcm1hdFxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TGFiQnlJZDogKGxhYklkLCB0ZXN0cykgPT4gZGlzcGF0Y2goZ2V0TGFiQnlJZChsYWJJZCwgdGVzdHMpKSxcbiAgICAgICAgZ2V0TGFiVGltZVNsb3RzOiAobGFiSWQsIHBpY2t1cCwgcGluY29kZSwgZGF0ZSwgZXh0cmFQYXJhbXMsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRMYWJUaW1lU2xvdHMobGFiSWQsIHBpY2t1cCwgcGluY29kZSwgZGF0ZSwgZXh0cmFQYXJhbXMsIGNhbGxiYWNrKSksXG4gICAgICAgIHNlbGVjdExhYlRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSwgZGF0ZVBhcmFtKSA9PiBkaXNwYXRjaChzZWxlY3RMYWJUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlLCBkYXRlUGFyYW0pKSxcbiAgICAgICAgcHJlQm9va2luZzooc2xvdCkgPT4gZGlzcGF0Y2gocHJlQm9va2luZyhzbG90KSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwb2ludG1lbnRTbG90KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=