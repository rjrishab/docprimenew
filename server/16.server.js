exports.ids = [16];
exports.modules = {

/***/ "./dev/js/components/commons/DateSelector/DateSelector.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/commons/DateSelector/DateSelector.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MONTHS = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const WEEK_DAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

class DateSelector extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedYear: 1940,
			selectedMonth: 'Jan',
			selectedDate: '1',
			noOfDaysInMonth: 31
		};
	}

	componentDidMount() {
		if (this.props.onRef) {
			this.props.onRef(this);
		}
	}

	selectOptions(type, val) {
		this.setState({ [type]: val }, () => {

			if (type.includes('selectedMonth') || type.includes('selectedYear')) {
				let days = this.daysInMonth();
				this.setState({ noOfDaysInMonth: days, selectedDate: this.state.selectedDate > days ? 1 : this.state.selectedDate });
			}
		});
	}

	daysInMonth() {
		if (this.state.selectedYear && this.state.selectedMonth) {
			let month = MONTHS.indexOf(this.state.selectedMonth);
			return new Date(this.state.selectedYear, month + 1, 0).getDate();
		} else {
			return 30;
		}
	}

	getSelectedDate() {
		let data = {
			year: this.state.selectedYear,
			month: MONTHS.indexOf(this.state.selectedMonth) + 1,
			day: this.state.selectedDate
		};
		this.props.getSelectedDate(data);
	}

	render() {
		let currentYear = new Date().getFullYear();
		return _react2.default.createElement(
			'div',
			{ className: 'ipd-db-selects' },
			_react2.default.createElement(
				'select',
				{ style: { textIndent: '12px' }, defaultValue: this.state.selectedDate.toString(), onChange: e => this.selectOptions('selectedDate', e.target.value) },
				_react2.default.createElement(
					'option',
					{ defaultValue: '', disabled: true },
					'Date'
				),
				[...Array(this.state.noOfDaysInMonth).keys()].map((year, key) => {
					return _react2.default.createElement(
						'option',
						{ key: key, defaultValue: '' },
						key + 1
					);
				})
			),
			_react2.default.createElement(
				'select',
				{ style: { textIndent: '4px' }, defaultValue: this.state.selectedMonth, onChange: e => this.selectOptions('selectedMonth', e.target.value) },
				MONTHS.map((month, i) => {
					return _react2.default.createElement(
						'option',
						{ defaultValue: '', key: i },
						month
					);
				})
			),
			_react2.default.createElement(
				'select',
				{ defaultValue: this.state.selectedYear, onChange: e => this.selectOptions('selectedYear', e.target.value) },
				_react2.default.createElement(
					'option',
					{ defaultValue: '', disabled: true },
					'Year'
				),
				[...Array(80).keys()].map((year, key) => {
					return _react2.default.createElement(
						'option',
						{ key: key, defaultValue: '' },
						currentYear - 80 + key + 1
					);
				})
			)
		);
	}
}

exports.default = DateSelector;

/***/ }),

/***/ "./dev/js/components/commons/DateSelector/index.js":
/*!*********************************************************!*\
  !*** ./dev/js/components/commons/DateSelector/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DateSelector = __webpack_require__(/*! ./DateSelector.js */ "./dev/js/components/commons/DateSelector/DateSelector.js");

var _DateSelector2 = _interopRequireDefault(_DateSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DateSelector2.default;

/***/ }),

/***/ "./dev/js/containers/ipd/IpdDoctorCityPopup.js":
/*!*****************************************************!*\
  !*** ./dev/js/containers/ipd/IpdDoctorCityPopup.js ***!
  \*****************************************************/
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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _DateSelector = __webpack_require__(/*! ../../components/commons/DateSelector */ "./dev/js/components/commons/DateSelector/index.js");

var _DateSelector2 = _interopRequireDefault(_DateSelector);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

const moment = __webpack_require__(/*! moment */ "moment");

class IpdDoctorCityPopup extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedDoctor: '',
			selectedDoctorId: '',
			selectedCity: this.props.all_cities && this.props.all_cities.length ? this.props.all_cities[0].name : '',
			dob: '',
			requested_date_time: new Date().toDateString(),
			timeSlot: '',
			dateModal: false,
			requestedDateFormat: this.getFormattedDate(new Date()),
			requested_date_format: new Date(),
			search_doctor: '',
			filtered_doctor_list: [],
			showDoctorSearchPopup: false
		};
	}

	componentDidCatch(error, info) {
		console.log('error is ', error);
		console.log('info is ', info);
	}

	submitClicked() {
		this.isDateSelected();
		setTimeout(() => {
			this.submitLeadForm();
		}, 0);
	}

	submitLeadForm() {

		let doctor = '';
		let city = '';

		if (!this.state.selectedDoctor && this.props.hospitalProfilePage) {
			setTimeout(() => {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select the Doctor" });
			}, 500);
			return;
		} else {
			doctor = this.props.all_doctors.filter(x => x.name == this.state.selectedDoctor).map(x => x.id);
		}

		if (!this.state.requested_date_format) {
			setTimeout(() => {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select the Date" });
			}, 500);
			return;
		}

		if (!this.state.timeSlot || !parseInt(this.state.timeSlot)) {
			setTimeout(() => {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select the Time Slots" });
			}, 500);
			return;
		}

		if (!this.state.dob) {
			setTimeout(() => {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please enter DOB" });
			}, 500);
			return;
		}

		if (!this.state.selectedCity) {
			setTimeout(() => {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select the City" });
			}, 500);
			return;
		} else {
			city = this.props.all_cities.filter(x => x.name == this.state.selectedCity).map(x => x.id);
		}

		const parsed = queryString.parse(this.props.location.search);

		let formData = {
			dob: this.state.dob,
			doctor: doctor.length ? doctor[0] : '',
			matrix_city: city.length ? city[0] : '',
			city: this.state.selectedCity,
			id: this.props.firstLeadId
		};

		if (this.state.requested_date_format) {
			let requestedDate = new Date(this.state.requested_date_format);
			let month = parseInt(requestedDate.getMonth()) + 1;
			let year = parseInt(requestedDate.getFullYear());
			let day = parseInt(requestedDate.getDate());
			let time = parseInt(this.state.timeSlot);
			let dateFormat = `${year}-${month >= 10 ? month : `0${month}`}-${day >= 10 ? day : `0${day}`}T${time >= 10 ? `${time}` : `0${time}`}:00`;
			formData.requested_date_time = dateFormat;
			formData.title = this.state.timeSlot && this.state.timeSlot.includes('AM') ? 'AM' : 'PM';
		}

		if (this.props.hospital_id) {
			formData.hospital = this.props.hospital_id;
		}

		if (this.props.procedure_id) {
			formData.ipd_procedure = this.props.procedure_id;
		}

		if (this.props.doctor_id) {
			formData.doctor = parseInt(this.props.doctor_id);
		}

		let utm_tags = {
			utm_source: parsed.utm_source || '',
			utm_medium: parsed.utm_medium || '',
			utm_term: parsed.utm_term || '',
			utm_campaign: parsed.utm_campaign || '',
			referrer: document.referrer || '',
			gclid: parsed.gclid || ''
		};

		formData.data = {};
		formData.data.utm_tags = utm_tags;
		formData.data.url = window.location.href;
		formData.data.formSource = this.props.formSource || 'PopupLeadForm';
		if (this.props.sourceTag) {
			formData.source = this.props.sourceTag;
		}

		this.props.submitSecondIPDForm(formData, this.props.selectedLocation, (error, response) => {
			if (!error && response) {
				//Save popup data for doctor profile data auto filled
				if (this.props.is_booking_page) {
					this.props.saveIpdPopupData('popup2', formData);
				}
				let gtmData = {
					'Category': 'ConsumerApp', 'Action': 'IPD-popup-lead', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': this.props.firstLeadId || '', 'event': 'IPD-popup-lead', selectedId: '', 'hospitalId': '', 'from': 'leadForm', 'mobileNo': this.state.phone_number, 'formNo': '2'
				};
				_gtm2.default.sendEvent({ data: gtmData });

				this.props.ipdPopupFired();

				setTimeout(() => {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Your request has been submitted sucessfully" });
				}, 500);
			} else {
				setTimeout(() => {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please try after some time" });
				}, 500);
			}
			this.props.secondIpdFormSubmitted(formData);
		});
	}

	closePopUpClicked(skip = false) {
		if (skip) {
			let gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IPD-2popup-skip-clicked', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'IPD-2popup-skip-clicked', 'formNo': '2'
			};
			_gtm2.default.sendEvent({ data: gtmData });
		}
		this.props.secondIpdFormSubmitted();
	}

	isDateSelected() {
		this.child.getSelectedDate();
	}

	getSelectedDate(date) {
		if (!date || !date.year || !date.month || !date.day) {
			return false;
		} else {
			let dob = `${date.year}-${date.month >= 10 ? date.month : `0${date.month}`}-${date.day >= 10 ? date.day : `0${date.day}`}`;
			this.setState({ dob: dob });
			return true;
		}
	}

	getTimeSlots() {
		let offset = new Date();
		let currentTime = 8;
		let timeSlot = [];
		if (new Date(this.state.requested_date_format).toDateString() == new Date().toDateString()) {
			currentTime = parseInt(new Date().toLocaleTimeString()) + 1;
		}
		for (var i = currentTime; i <= 20; i++) {
			offset.setHours(i);
			timeSlot.push(_react2.default.createElement(
				'option',
				{ key: i, defaultValue: '' },
				offset.toLocaleString('en-US', { hour: 'numeric', hour12: true })
			));
		}
		if (!timeSlot.length) {
			timeSlot.push(_react2.default.createElement(
				'option',
				{ key: '0', defaultValue: '' },
				'Choose another date'
			));
		}
		return timeSlot;
	}

	openDateModal() {
		this.setState({ dateModal: !this.state.dateModal });
	}

	selectDateFromCalendar(date) {
		if (date) {
			date = date.toDate();
			let dateFormat = new Date(date);
			date = this.getFormattedDate(date);
			this.setState({ dateModal: false, requestedDateFormat: date, requested_date_format: dateFormat });
		} else {
			this.setState({ dateModal: false });
		}
	}

	getFormattedDate(date) {
		date = new Date(date);
		let month = parseInt(date.getMonth()) + 1;
		let day = date.getDate();
		return `${day >= 10 ? day : `0${day}`}-${month >= 10 ? month : `0${month}-${date.getFullYear()}`}`;
	}

	handleInut(type, event) {
		try {
			let search_string = event.target.value.toLowerCase();
			let filtered_doctor_list = [];
			this.props.all_doctors.map(doctor => {
				let doctor_name = doctor.name.toLowerCase();
				if (doctor_name.includes(search_string)) {
					let index = doctor_name.indexOf(search_string);
					filtered_doctor_list.push({ id: doctor.id, name: doctor.name, rank: index });
				}
			});
			filtered_doctor_list = filtered_doctor_list.sort((x, y) => {
				return x.rank - y.rank;
			});
			this.setState({ [type]: event.target.value, filtered_doctor_list: filtered_doctor_list });
		} catch (e) {}
	}

	clickDoctorList(value) {
		this.setState({ 'selectedDoctor': value, filtered_doctor_list: [], search_doctor: value, showDoctorSearchPopup: false });
	}

	onFocusIn() {
		this.setState({ filtered_doctor_list: this.props.all_doctors, search_doctor: '', showDoctorSearchPopup: true });
	}

	onFocusOut() {
		setTimeout(() => {
			this.setState({ search_doctor: this.state.selectedDoctor, showDoctorSearchPopup: false });
		}, 500);
	}

	render() {
		const parsed = queryString.parse(this.props.location.search);

		let filtered_doctor = this.state.filtered_doctor_list;

		return _react2.default.createElement(
			'div',
			{ className: 'search-el-popup-overlay cancel-overlay-zindex', onClick: e => {
					e.preventDefault();
					e.stopPropagation();
					//this.closePopUpClicked()
				} },
			_react2.default.createElement(
				'div',
				{ className: 'search-el-popup ipd-pop-width' },
				_react2.default.createElement(
					'div',
					{ className: 'widget p-12' },
					_react2.default.createElement(
						'div',
						{ className: 'p-relative' },
						_react2.default.createElement(
							'span',
							{ className: 'ipd-pop-ild', onClick: e => {
									e.stopPropagation();
									e.preventDefault();
									this.closePopUpClicked();
								} },
							_react2.default.createElement('img', { src: "/assets" + "/img/icons/close.png" })
						),
						this.props.doctor_name ? _react2.default.createElement(
							'p',
							{ className: 'ipd-needHelp' },
							`Need to book an appointment with ${this.props.doctor_name} ${this.props.hospital_name ? `at ${this.props.hospital_name}?` : ''}`
						) : this.props.hospital_name ? _react2.default.createElement(
							'p',
							{ className: 'ipd-needHelp' },
							`Need help with an appointment ${this.props.hospital_name ? `at ${this.props.hospital_name}?` : ''}`
						) : '',
						_react2.default.createElement(
							'div',
							{ className: 'ipd-pop-scrl' },
							_react2.default.createElement(
								'div',
								{ className: 'ipd-inp-section ipd-sctn-chng', onClick: e => {
										e.preventDefault();
										e.stopPropagation();
									} },
								this.props.all_doctors && this.props.all_doctors.length ? _react2.default.createElement(
									'div',
									{ className: 'ipd-slects-doc' },
									_react2.default.createElement('input', { type: 'text', placeholder: 'Search Doctors', onChange: this.handleInut.bind(this, 'search_doctor'), onFocus: this.onFocusIn.bind(this), onBlur: this.onFocusOut.bind(this), value: this.state.search_doctor }),
									this.state.showDoctorSearchPopup ? _react2.default.createElement(
										'div',
										{ className: 'doc-srch-fltr', onClick: e => e.preventDefault() },
										this.state.filtered_doctor_list && this.state.filtered_doctor_list.length ? this.state.filtered_doctor_list.map((data, key) => {
											return _react2.default.createElement(
												'p',
												{ className: 'cursor-pntr', key: key, id: data.id, onClick: e => {
														e.preventDefault();
														e.stopPropagation();
														this.clickDoctorList(data.name);
													} },
												data.name
											);
										}) : _react2.default.createElement(
											'p',
											null,
											'No result found'
										)
									) : ''
								) : '',
								_react2.default.createElement(
									'div',
									{ className: 'nm-lst-inputcnt justify-content-between' },
									_react2.default.createElement(
										'div',
										{ className: 'sel-ipd-input-cnt', style: { width: '48%' } },
										_react2.default.createElement(
											'p',
											{ className: 'apnt-doc-dtl p-0' },
											'Preferred Date'
										),
										_react2.default.createElement('img', { src: "/assets" + "/img/calnext.svg" }),
										_react2.default.createElement('input', { className: 'slct-inpt-cntnr-fcs', onClick: this.openDateModal.bind(this), onChange: () => {}, value: this.state.requestedDateFormat })
									),
									this.state.dateModal ? _react2.default.createElement(
										'div',
										{ className: 'calendar-overlay' },
										_react2.default.createElement(
											'div',
											{ className: 'date-picker-modal' },
											_react2.default.createElement(_rcCalendar2.default, {
												showWeekNumber: false,
												disabledDate: date => {
													return date.diff(moment(new Date()), 'days') < 0 || date.diff(moment(new Date()), 'days') > 30;
												},
												showToday: true,
												onSelect: this.selectDateFromCalendar.bind(this)
											})
										)
									) : "",
									_react2.default.createElement(
										'div',
										{ className: 'sel-ipd-input-cnt', style: { width: '48%' } },
										_react2.default.createElement(
											'p',
											{ className: 'apnt-doc-dtl p-0' },
											'Preferred Time'
										),
										_react2.default.createElement('img', { src: "/assets" + "/img/calnext.svg" }),
										_react2.default.createElement(
											'div',
											{ className: 'ipd-slects-doc' },
											_react2.default.createElement(
												'select',
												{ className: 'slct-ipn-ti', defaultValue: this.state.timeSlot, onChange: e => this.setState({ 'timeSlot': e.target.value }) },
												_react2.default.createElement(
													'option',
													{ defaultValue: '' },
													'*Select Time'
												),
												this.getTimeSlots()
											)
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'ipd-dob-cont' },
									_react2.default.createElement(
										'div',
										{ className: 'ipd-db-hdng' },
										'*Date of birth:'
									),
									_react2.default.createElement(_DateSelector2.default, { getSelectedDate: this.getSelectedDate.bind(this), onRef: ref => this.child = ref })
								),
								this.props.all_cities && this.props.all_cities.length ? _react2.default.createElement(
									'div',
									{ className: 'ipd-slects-doc' },
									_react2.default.createElement(
										'select',
										{ defaultValue: this.state.selectedCity, onChange: e => this.setState({ 'selectedCity': e.target.value }) },
										this.props.all_cities.map((city, key) => {

											return _react2.default.createElement(
												'option',
												{ key: key, id: city.id, defaultValue: '' },
												city.name
											);
										})
									)
								) : '',
								_react2.default.createElement(
									'div',
									{ className: 'skip-btn-sgn' },
									_react2.default.createElement(
										'button',
										{ className: 'ipd-inp-sbmt', onClick: this.submitClicked.bind(this) },
										'Submit'
									),
									_react2.default.createElement(
										'p',
										{ onClick: e => {
												e.preventDefault();
												e.stopPropagation();
												this.closePopUpClicked(true);
											} },
										'Skip'
									)
								)
							)
						)
					)
				)
			)
		);
	}
}

const mapStateToProps = (state, passedProps) => {

	const {
		selectedLocation
	} = state.SEARCH_CRITERIA_OPD;

	return {
		selectedLocation
	};
};

const mapDispatchToProps = dispatch => {

	return {
		submitSecondIPDForm: (formData, selectedLocation, cb) => dispatch((0, _index.submitSecondIPDForm)(formData, selectedLocation, cb)),
		ipdPopupFired: () => dispatch((0, _index.ipdPopupFired)()),
		saveIpdPopupData: (type, data) => dispatch((0, _index.saveIpdPopupData)(type, data))
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IpdDoctorCityPopup);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0RhdGVTZWxlY3Rvci9EYXRlU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9EYXRlU2VsZWN0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvaXBkL0lwZERvY3RvckNpdHlQb3B1cC5qcyJdLCJuYW1lcyI6WyJNT05USFMiLCJXRUVLX0RBWVMiLCJEYXRlU2VsZWN0b3IiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNlbGVjdGVkWWVhciIsInNlbGVjdGVkTW9udGgiLCJzZWxlY3RlZERhdGUiLCJub09mRGF5c0luTW9udGgiLCJjb21wb25lbnREaWRNb3VudCIsIm9uUmVmIiwic2VsZWN0T3B0aW9ucyIsInR5cGUiLCJ2YWwiLCJzZXRTdGF0ZSIsImluY2x1ZGVzIiwiZGF5cyIsImRheXNJbk1vbnRoIiwibW9udGgiLCJpbmRleE9mIiwiRGF0ZSIsImdldERhdGUiLCJnZXRTZWxlY3RlZERhdGUiLCJkYXRhIiwieWVhciIsImRheSIsInJlbmRlciIsImN1cnJlbnRZZWFyIiwiZ2V0RnVsbFllYXIiLCJ0ZXh0SW5kZW50IiwidG9TdHJpbmciLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJBcnJheSIsImtleXMiLCJtYXAiLCJrZXkiLCJpIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwibW9tZW50IiwiSXBkRG9jdG9yQ2l0eVBvcHVwIiwic2VsZWN0ZWREb2N0b3IiLCJzZWxlY3RlZERvY3RvcklkIiwic2VsZWN0ZWRDaXR5IiwiYWxsX2NpdGllcyIsImxlbmd0aCIsIm5hbWUiLCJkb2IiLCJyZXF1ZXN0ZWRfZGF0ZV90aW1lIiwidG9EYXRlU3RyaW5nIiwidGltZVNsb3QiLCJkYXRlTW9kYWwiLCJyZXF1ZXN0ZWREYXRlRm9ybWF0IiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsInJlcXVlc3RlZF9kYXRlX2Zvcm1hdCIsInNlYXJjaF9kb2N0b3IiLCJmaWx0ZXJlZF9kb2N0b3JfbGlzdCIsInNob3dEb2N0b3JTZWFyY2hQb3B1cCIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdENsaWNrZWQiLCJpc0RhdGVTZWxlY3RlZCIsInNldFRpbWVvdXQiLCJzdWJtaXRMZWFkRm9ybSIsImRvY3RvciIsImNpdHkiLCJob3NwaXRhbFByb2ZpbGVQYWdlIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImFsbF9kb2N0b3JzIiwiZmlsdGVyIiwieCIsImlkIiwicGFyc2VJbnQiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiZm9ybURhdGEiLCJtYXRyaXhfY2l0eSIsImZpcnN0TGVhZElkIiwicmVxdWVzdGVkRGF0ZSIsImdldE1vbnRoIiwidGltZSIsImRhdGVGb3JtYXQiLCJ0aXRsZSIsImhvc3BpdGFsX2lkIiwiaG9zcGl0YWwiLCJwcm9jZWR1cmVfaWQiLCJpcGRfcHJvY2VkdXJlIiwiZG9jdG9yX2lkIiwidXRtX3RhZ3MiLCJ1dG1fc291cmNlIiwidXRtX21lZGl1bSIsInV0bV90ZXJtIiwidXRtX2NhbXBhaWduIiwicmVmZXJyZXIiLCJkb2N1bWVudCIsImdjbGlkIiwidXJsIiwid2luZG93IiwiaHJlZiIsImZvcm1Tb3VyY2UiLCJzb3VyY2VUYWciLCJzb3VyY2UiLCJzdWJtaXRTZWNvbmRJUERGb3JtIiwic2VsZWN0ZWRMb2NhdGlvbiIsInJlc3BvbnNlIiwiaXNfYm9va2luZ19wYWdlIiwic2F2ZUlwZFBvcHVwRGF0YSIsImd0bURhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZWxlY3RlZElkIiwicGhvbmVfbnVtYmVyIiwic2VuZEV2ZW50IiwiaXBkUG9wdXBGaXJlZCIsInNlY29uZElwZEZvcm1TdWJtaXR0ZWQiLCJjbG9zZVBvcFVwQ2xpY2tlZCIsInNraXAiLCJjaGlsZCIsImRhdGUiLCJnZXRUaW1lU2xvdHMiLCJvZmZzZXQiLCJjdXJyZW50VGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsInNldEhvdXJzIiwicHVzaCIsInRvTG9jYWxlU3RyaW5nIiwiaG91ciIsImhvdXIxMiIsIm9wZW5EYXRlTW9kYWwiLCJzZWxlY3REYXRlRnJvbUNhbGVuZGFyIiwidG9EYXRlIiwiaGFuZGxlSW51dCIsImV2ZW50Iiwic2VhcmNoX3N0cmluZyIsInRvTG93ZXJDYXNlIiwiZG9jdG9yX25hbWUiLCJpbmRleCIsInJhbmsiLCJzb3J0IiwieSIsImNsaWNrRG9jdG9yTGlzdCIsIm9uRm9jdXNJbiIsIm9uRm9jdXNPdXQiLCJmaWx0ZXJlZF9kb2N0b3IiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIkFTU0VUU19CQVNFX1VSTCIsImhvc3BpdGFsX25hbWUiLCJiaW5kIiwid2lkdGgiLCJkaWZmIiwicmVmIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEsU0FBUyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixFQUFzQixPQUF0QixFQUErQixLQUEvQixFQUFzQyxNQUF0QyxFQUE4QyxNQUE5QyxFQUFzRCxLQUF0RCxFQUE2RCxNQUE3RCxFQUFxRSxLQUFyRSxFQUE0RSxLQUE1RSxFQUFtRixLQUFuRixDQUFmO0FBQ0EsTUFBTUMsWUFBWSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsTUFBZixFQUF1QixLQUF2QixFQUE4QixNQUE5QixFQUFzQyxLQUF0QyxFQUE2QyxLQUE3QyxDQUFsQjs7QUFFQSxNQUFNQyxZQUFOLFNBQTJCQyxnQkFBTUMsU0FBakMsQ0FBMkM7QUFDMUNDLGFBQVlDLEtBQVosRUFBa0I7QUFDakIsUUFBTUEsS0FBTjtBQUNBLE9BQUtDLEtB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VUFERDtBQUVDO0FBQUE7QUFBQSxZQUFHLFNBQVUvSCxDQUFELElBQU87QUFDbEJBLGNBQUUySCxjQUFGO0FBQ0EzSCxjQUFFNEgsZUFBRjtBQUNBLGlCQUFLOUIsaUJBQUwsQ0FBdUIsSUFBdkI7QUFDQSxZQUpEO0FBQUE7QUFBQTtBQUZEO0FBM0ZEO0FBREQ7QUFmRDtBQUREO0FBREQ7QUFMRCxHQUREO0FBa0lBO0FBcFkrQzs7QUF1WWpELE1BQU1xQyxrQkFBa0IsQ0FBQzlKLEtBQUQsRUFBUStKLFdBQVIsS0FBd0I7O0FBRS9DLE9BQU07QUFDTGxEO0FBREssS0FFRjdHLE1BQU1nSyxtQkFGVjs7QUFJQSxRQUFPO0FBQ05uRDtBQURNLEVBQVA7QUFHQSxDQVREOztBQVdBLE1BQU1vRCxxQkFBc0JDLFFBQUQsSUFBYzs7QUFFeEMsUUFBTztBQUNOdEQsdUJBQXFCLENBQUMzQixRQUFELEVBQVc0QixnQkFBWCxFQUE2QnNELEVBQTdCLEtBQW9DRCxTQUFTLGdDQUFvQmpGLFFBQXBCLEVBQThCNEIsZ0JBQTlCLEVBQWdEc0QsRUFBaEQsQ0FBVCxDQURuRDtBQUVONUMsaUJBQWUsTUFBSzJDLFNBQVMsMkJBQVQsQ0FGZDtBQUdObEQsb0JBQWtCLENBQUN4RyxJQUFELEVBQU9XLElBQVAsS0FBZ0IrSSxTQUFTLDZCQUFpQjFKLElBQWpCLEVBQXVCVyxJQUF2QixDQUFUO0FBSDVCLEVBQVA7QUFLQSxDQVBEOztrQkFTZSx5QkFBUTJJLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2QzNILGtCQUE3QyxDIiwiZmlsZSI6IjE2LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgTU9OVEhTID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbmNvbnN0IFdFRUtfREFZUyA9IFsnU3VuJywgJ01vbicsICdUdWVzJywgJ1dlZCcsICdUaHVyJywgJ0ZyaScsICdTYXQnXVxuXG5jbGFzcyBEYXRlU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlbGVjdGVkWWVhcjogMTk0MCxcblx0XHRcdHNlbGVjdGVkTW9udGg6J0phbicsXG5cdFx0XHRzZWxlY3RlZERhdGU6JzEnLFxuXHRcdFx0bm9PZkRheXNJbk1vbnRoOiAzMVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0aWYodGhpcy5wcm9wcy5vblJlZil7XG5cdFx0XHR0aGlzLnByb3BzLm9uUmVmKHRoaXMpXG5cdFx0fVxuXHR9XG5cblx0c2VsZWN0T3B0aW9ucyh0eXBlLCB2YWwpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1t0eXBlXTogdmFsfSwgKCk9PntcblxuXHRcdFx0aWYodHlwZS5pbmNsdWRlcygnc2VsZWN0ZWRNb250aCcpIHx8IHR5cGUuaW5jbHVkZXMoJ3NlbGVjdGVkWWVhcicpKSB7XG5cdFx0XHRcdGxldCBkYXlzID0gdGhpcy5kYXlzSW5Nb250aCgpXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBub09mRGF5c0luTW9udGg6IGRheXMsIHNlbGVjdGVkRGF0ZTogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGU+ZGF5cz8xOnRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlfSlcblxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRkYXlzSW5Nb250aCgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRZZWFyICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRNb250aCl7XG5cdFx0XHRsZXQgbW9udGggPSBNT05USFMuaW5kZXhPZih0aGlzLnN0YXRlLnNlbGVjdGVkTW9udGgpXG5cdFx0XHRyZXR1cm4gbmV3IERhdGUodGhpcy5zdGF0ZS5zZWxlY3RlZFllYXIsbW9udGgrMSAsIDApLmdldERhdGUoKVxuXHRcdH1lbHNlIHtcblx0XHRcdHJldHVybiAzMDtcblx0XHR9XG5cdH1cblxuXHRnZXRTZWxlY3RlZERhdGUoKXtcblx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdHllYXI6IHRoaXMuc3RhdGUuc2VsZWN0ZWRZZWFyLFxuXHRcdFx0bW9udGg6IE1PTlRIUy5pbmRleE9mKHRoaXMuc3RhdGUuc2VsZWN0ZWRNb250aCkrMSxcblx0XHRcdGRheTogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGVcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5nZXRTZWxlY3RlZERhdGUoZGF0YSlcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGxldCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLWRiLXNlbGVjdHNcIj5cblx0XHRcdFx0PHNlbGVjdCBzdHlsZT17e3RleHRJbmRlbnQ6JzEycHgnfX0gZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZS50b1N0cmluZygpfSBvbkNoYW5nZT17IChlKT0+IHRoaXMuc2VsZWN0T3B0aW9ucygnc2VsZWN0ZWREYXRlJywgZS50YXJnZXQudmFsdWUpfT5cblx0XHRcdFx0XHQ8b3B0aW9uIGRlZmF1bHRWYWx1ZT1cIlwiIGRpc2FibGVkID5EYXRlPC9vcHRpb24+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Wy4uLkFycmF5KHRoaXMuc3RhdGUubm9PZkRheXNJbk1vbnRoKS5rZXlzKCldLm1hcCgoeWVhciwga2V5KT0+e1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gPG9wdGlvbiBrZXk9e2tleX0gZGVmYXVsdFZhbHVlPVwiXCI+e2tleSsxfTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHQ8c2VsZWN0IHN0eWxlPXt7dGV4dEluZGVudDonNHB4J319IGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZE1vbnRofSBvbkNoYW5nZT17IChlKT0+IHRoaXMuc2VsZWN0T3B0aW9ucygnc2VsZWN0ZWRNb250aCcsIGUudGFyZ2V0LnZhbHVlKX0+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0TU9OVEhTLm1hcCgobW9udGgsIGkpPT57XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8b3B0aW9uIGRlZmF1bHRWYWx1ZT1cIlwiIGtleT17aX0gPnttb250aH08L29wdGlvbj5cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0PHNlbGVjdCBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRZZWFyfSBvbkNoYW5nZT17IChlKT0+IHRoaXMuc2VsZWN0T3B0aW9ucygnc2VsZWN0ZWRZZWFyJywgZS50YXJnZXQudmFsdWUpfT5cblx0XHRcdFx0XHQ8b3B0aW9uIGRlZmF1bHRWYWx1ZT1cIlwiIGRpc2FibGVkID5ZZWFyPC9vcHRpb24+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Wy4uLkFycmF5KDgwKS5rZXlzKCldLm1hcCgoeWVhciwga2V5KT0+e1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gPG9wdGlvbiBrZXk9e2tleX0gZGVmYXVsdFZhbHVlPVwiXCI+e2N1cnJlbnRZZWFyLTgwK2tleSsxfTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVNlbGVjdG9yIiwiaW1wb3J0IERhdGVTZWxlY3RvciBmcm9tICcuL0RhdGVTZWxlY3Rvci5qcydcbmV4cG9ydCBkZWZhdWx0IERhdGVTZWxlY3RvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHN1Ym1pdFNlY29uZElQREZvcm0sIGlwZFBvcHVwRmlyZWQsIHNhdmVJcGRQb3B1cERhdGEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKVxuaW1wb3J0IERhdGVTZWxlY3RvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvRGF0ZVNlbGVjdG9yJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyJztcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5jbGFzcyBJcGREb2N0b3JDaXR5UG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlbGVjdGVkRG9jdG9yOiAnJyxcblx0XHRcdHNlbGVjdGVkRG9jdG9ySWQ6JycsXG5cdFx0XHRzZWxlY3RlZENpdHk6dGhpcy5wcm9wcy5hbGxfY2l0aWVzICYmIHRoaXMucHJvcHMuYWxsX2NpdGllcy5sZW5ndGg/dGhpcy5wcm9wcy5hbGxfY2l0aWVzWzBdLm5hbWU6JycsXG5cdFx0XHRkb2I6JycsXG5cdFx0XHRyZXF1ZXN0ZWRfZGF0ZV90aW1lOiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLFxuXHRcdFx0dGltZVNsb3Q6ICcnLFxuXHRcdFx0ZGF0ZU1vZGFsOiBmYWxzZSxcblx0XHRcdHJlcXVlc3RlZERhdGVGb3JtYXQ6IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShuZXcgRGF0ZSgpKSxcblx0XHRcdHJlcXVlc3RlZF9kYXRlX2Zvcm1hdDogbmV3IERhdGUoKSxcblx0XHRcdHNlYXJjaF9kb2N0b3I6ICcnLFxuXHRcdFx0ZmlsdGVyZWRfZG9jdG9yX2xpc3Q6IFtdLFxuXHRcdFx0c2hvd0RvY3RvclNlYXJjaFBvcHVwOmZhbHNlXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGluZm8pIHtcblx0XHRjb25zb2xlLmxvZygnZXJyb3IgaXMgJyxlcnJvcilcblx0XHRjb25zb2xlLmxvZygnaW5mbyBpcyAnLCBpbmZvKVxuXHR9XG5cblx0c3VibWl0Q2xpY2tlZCgpe1xuXHRcdHRoaXMuaXNEYXRlU2VsZWN0ZWQoKVxuXHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdHRoaXMuc3VibWl0TGVhZEZvcm0oKVxuXHRcdH0sMClcblx0fVxuXG5cdHN1Ym1pdExlYWRGb3JtKCkge1xuXG5cdFx0bGV0IGRvY3Rvcj0nJ1xuXHRcdGxldCBjaXR5PScnXG5cblx0XHRpZiAoIXRoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3IgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbFByb2ZpbGVQYWdlKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBzZWxlY3QgdGhlIERvY3RvclwiIH0pXG5cdFx0XHR9LCA1MDApXG5cdFx0XHRyZXR1cm5cblx0XHR9ZWxzZSB7XG5cdFx0XHRkb2N0b3IgPSB0aGlzLnByb3BzLmFsbF9kb2N0b3JzLmZpbHRlcih4PT54Lm5hbWU9PXRoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3IpLm1hcCh4PT54LmlkKVxuXHRcdH1cblxuXHRcdGlmKCF0aGlzLnN0YXRlLnJlcXVlc3RlZF9kYXRlX2Zvcm1hdCl7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBzZWxlY3QgdGhlIERhdGVcIiB9KVxuXHRcdFx0fSwgNTAwKVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0aWYoIXRoaXMuc3RhdGUudGltZVNsb3QgfHwgIShwYXJzZUludCh0aGlzLnN0YXRlLnRpbWVTbG90KSkpe1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2Ugc2VsZWN0IHRoZSBUaW1lIFNsb3RzXCIgfSlcblx0XHRcdH0sIDUwMClcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5zdGF0ZS5kb2IpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGVudGVyIERPQlwiIH0pXG5cdFx0XHR9LCA1MDApXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuc3RhdGUuc2VsZWN0ZWRDaXR5KSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBzZWxlY3QgdGhlIENpdHlcIiB9KVxuXHRcdFx0fSwgNTAwKVxuXHRcdFx0cmV0dXJuXG5cdFx0fWVsc2Uge1xuXHRcdFx0Y2l0eSA9IHRoaXMucHJvcHMuYWxsX2NpdGllcy5maWx0ZXIoeD0+eC5uYW1lPT10aGlzLnN0YXRlLnNlbGVjdGVkQ2l0eSkubWFwKHg9PnguaWQpXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cblx0XHRsZXQgZm9ybURhdGEgPSB7XG5cdFx0XHRkb2I6dGhpcy5zdGF0ZS5kb2IsXG5cdFx0XHRkb2N0b3I6ZG9jdG9yLmxlbmd0aD9kb2N0b3JbMF06JycsXG5cdFx0XHRtYXRyaXhfY2l0eTogY2l0eS5sZW5ndGg/Y2l0eVswXTonJyxcblx0XHRcdGNpdHk6IHRoaXMuc3RhdGUuc2VsZWN0ZWRDaXR5LFxuXHRcdFx0aWQ6IHRoaXMucHJvcHMuZmlyc3RMZWFkSWRcblx0XHR9XG5cblx0XHRpZih0aGlzLnN0YXRlLnJlcXVlc3RlZF9kYXRlX2Zvcm1hdCkge1xuXHRcdFx0bGV0IHJlcXVlc3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLnN0YXRlLnJlcXVlc3RlZF9kYXRlX2Zvcm1hdClcblx0XHRcdGxldCBtb250aCA9IHBhcnNlSW50KHJlcXVlc3RlZERhdGUuZ2V0TW9udGgoKSkrMVxuXHRcdFx0bGV0IHllYXIgPSBwYXJzZUludChyZXF1ZXN0ZWREYXRlLmdldEZ1bGxZZWFyKCkpXG5cdFx0XHRsZXQgZGF5ID0gcGFyc2VJbnQocmVxdWVzdGVkRGF0ZS5nZXREYXRlKCkpXG5cdFx0XHRsZXQgdGltZSA9IHBhcnNlSW50KHRoaXMuc3RhdGUudGltZVNsb3QpXG5cdFx0XHRsZXQgZGF0ZUZvcm1hdCA9IGAke3llYXJ9LSR7bW9udGg+PTEwP21vbnRoOmAwJHttb250aH1gfS0ke2RheT49MTA/ZGF5OmAwJHtkYXl9YH1UJHt0aW1lPj0xMD9gJHt0aW1lfWA6YDAke3RpbWV9YH06MDBgXG5cdFx0XHRmb3JtRGF0YS5yZXF1ZXN0ZWRfZGF0ZV90aW1lID0gZGF0ZUZvcm1hdFxuXHRcdFx0Zm9ybURhdGEudGl0bGUgPSB0aGlzLnN0YXRlLnRpbWVTbG90ICYmIHRoaXMuc3RhdGUudGltZVNsb3QuaW5jbHVkZXMoJ0FNJyk/J0FNJzonUE0nXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucHJvcHMuaG9zcGl0YWxfaWQpIHtcblx0XHRcdGZvcm1EYXRhLmhvc3BpdGFsID0gdGhpcy5wcm9wcy5ob3NwaXRhbF9pZFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnByb3BzLnByb2NlZHVyZV9pZCkge1xuXHRcdFx0Zm9ybURhdGEuaXBkX3Byb2NlZHVyZSA9IHRoaXMucHJvcHMucHJvY2VkdXJlX2lkXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucHJvcHMuZG9jdG9yX2lkKSB7XG5cdFx0XHRmb3JtRGF0YS5kb2N0b3IgPSBwYXJzZUludCh0aGlzLnByb3BzLmRvY3Rvcl9pZClcblx0XHR9XG5cblx0XHRsZXQgdXRtX3RhZ3MgPSB7XG5cdFx0XHR1dG1fc291cmNlOiBwYXJzZWQudXRtX3NvdXJjZSB8fCAnJyxcblx0XHRcdHV0bV9tZWRpdW06IHBhcnNlZC51dG1fbWVkaXVtIHx8ICcnLFxuXHRcdFx0dXRtX3Rlcm06IHBhcnNlZC51dG1fdGVybSB8fCAnJyxcblx0XHRcdHV0bV9jYW1wYWlnbjogcGFyc2VkLnV0bV9jYW1wYWlnbiB8fCAnJyxcblx0XHRcdHJlZmVycmVyOiBkb2N1bWVudC5yZWZlcnJlciB8fCAnJyxcblx0XHRcdGdjbGlkOiBwYXJzZWQuZ2NsaWQgfHwgJydcblx0XHR9XG5cblx0XHRmb3JtRGF0YS5kYXRhID0ge31cblx0XHRmb3JtRGF0YS5kYXRhLnV0bV90YWdzID0gdXRtX3RhZ3Ncblx0XHRmb3JtRGF0YS5kYXRhLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG5cdFx0Zm9ybURhdGEuZGF0YS5mb3JtU291cmNlID0gdGhpcy5wcm9wcy5mb3JtU291cmNlIHx8ICdQb3B1cExlYWRGb3JtJ1xuXHRcdGlmICh0aGlzLnByb3BzLnNvdXJjZVRhZykge1xuXHRcdFx0Zm9ybURhdGEuc291cmNlID0gdGhpcy5wcm9wcy5zb3VyY2VUYWdcblx0XHR9XG5cblx0XHRcblxuXHRcdHRoaXMucHJvcHMuc3VibWl0U2Vjb25kSVBERm9ybShmb3JtRGF0YSwgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRpZiAoIWVycm9yICYmIHJlc3BvbnNlKSB7XG5cdFx0XHRcdC8vU2F2ZSBwb3B1cCBkYXRhIGZvciBkb2N0b3IgcHJvZmlsZSBkYXRhIGF1dG8gZmlsbGVkXG5cdFx0XHRcdGlmKHRoaXMucHJvcHMuaXNfYm9va2luZ19wYWdlKXtcblx0XHRcdFx0XHR0aGlzLnByb3BzLnNhdmVJcGRQb3B1cERhdGEoJ3BvcHVwMicsZm9ybURhdGEpXHRcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0XHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lQRC1wb3B1cC1sZWFkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiB0aGlzLnByb3BzLmZpcnN0TGVhZElkIHx8ICcnLCAnZXZlbnQnOiAnSVBELXBvcHVwLWxlYWQnLCBzZWxlY3RlZElkOiAnJywgJ2hvc3BpdGFsSWQnOiAnJywgJ2Zyb20nOiAnbGVhZEZvcm0nLCAnbW9iaWxlTm8nOnRoaXMuc3RhdGUucGhvbmVfbnVtYmVyLCAnZm9ybU5vJzonMidcblx0XHRcdFx0fVxuXHRcdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG5cdFx0XHRcdHRoaXMucHJvcHMuaXBkUG9wdXBGaXJlZCgpXG5cblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIllvdXIgcmVxdWVzdCBoYXMgYmVlbiBzdWJtaXR0ZWQgc3VjZXNzZnVsbHlcIiB9KVxuXHRcdFx0XHR9LCA1MDApXG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgdHJ5IGFmdGVyIHNvbWUgdGltZVwiIH0pXG5cdFx0XHRcdH0sIDUwMClcblx0XHRcdH1cblx0XHRcdHRoaXMucHJvcHMuc2Vjb25kSXBkRm9ybVN1Ym1pdHRlZChmb3JtRGF0YSlcblx0XHR9KVxuXG5cdH1cblxuXHRjbG9zZVBvcFVwQ2xpY2tlZChza2lwPWZhbHNlKSB7XG5cdFx0aWYoc2tpcCkge1xuXHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSVBELTJwb3B1cC1za2lwLWNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ0lQRC0ycG9wdXAtc2tpcC1jbGlja2VkJywgJ2Zvcm1Obyc6JzInXG5cdFx0XHR9XG5cdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXHRcdH1cblx0XHR0aGlzLnByb3BzLnNlY29uZElwZEZvcm1TdWJtaXR0ZWQoKVxuXHR9XG5cblx0aXNEYXRlU2VsZWN0ZWQoKXtcblx0XHR0aGlzLmNoaWxkLmdldFNlbGVjdGVkRGF0ZSgpXG5cdH1cblxuXHRnZXRTZWxlY3RlZERhdGUoZGF0ZSl7XG5cdFx0aWYoIWRhdGUgfHwgIWRhdGUueWVhciB8fCAhZGF0ZS5tb250aCB8fCAhZGF0ZS5kYXkpe1xuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fWVsc2Uge1xuXHRcdFx0bGV0IGRvYiA9IGAke2RhdGUueWVhcn0tJHtkYXRlLm1vbnRoPj0xMD9kYXRlLm1vbnRoOmAwJHtkYXRlLm1vbnRofWB9LSR7ZGF0ZS5kYXk+PTEwP2RhdGUuZGF5OmAwJHtkYXRlLmRheX1gfWBcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2RvYjpkb2J9KVxuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdH1cblxuXHRnZXRUaW1lU2xvdHMoKXtcblx0XHRsZXQgb2Zmc2V0ID0gIG5ldyBEYXRlKClcblx0XHRsZXQgY3VycmVudFRpbWUgPSA4XG5cdFx0bGV0IHRpbWVTbG90ID0gW11cblx0XHRpZihuZXcgRGF0ZSh0aGlzLnN0YXRlLnJlcXVlc3RlZF9kYXRlX2Zvcm1hdCkudG9EYXRlU3RyaW5nKCkgPT0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSl7XG5cdFx0XHRjdXJyZW50VGltZSA9IHBhcnNlSW50KG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCkpICsgMVxuXHRcdH1cblx0XHRmb3IodmFyIGk9Y3VycmVudFRpbWUgO2k8PTIwO2krKyl7XG5cdFx0XHRvZmZzZXQuc2V0SG91cnMoaSlcblx0XHRcdHRpbWVTbG90LnB1c2goPG9wdGlvbiBrZXk9e2l9IGRlZmF1bHRWYWx1ZT1cIlwiPntvZmZzZXQudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSB9KX08L29wdGlvbj4pXG5cdFx0fVxuXHRcdGlmKCF0aW1lU2xvdC5sZW5ndGgpIHtcblx0XHRcdHRpbWVTbG90LnB1c2goPG9wdGlvbiBrZXk9eycwJ30gZGVmYXVsdFZhbHVlPVwiXCI+Q2hvb3NlIGFub3RoZXIgZGF0ZTwvb3B0aW9uPilcdFxuXHRcdH1cblx0XHRyZXR1cm4gdGltZVNsb3Rcblx0fVxuXG5cdG9wZW5EYXRlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlTW9kYWw6ICF0aGlzLnN0YXRlLmRhdGVNb2RhbCB9KVxuICAgIH1cblxuICAgIHNlbGVjdERhdGVGcm9tQ2FsZW5kYXIoZGF0ZSkge1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUudG9EYXRlKClcbiAgICAgICAgICAgIGxldCBkYXRlRm9ybWF0ID0gbmV3IERhdGUoZGF0ZSlcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUoZGF0ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlTW9kYWw6IGZhbHNlLCByZXF1ZXN0ZWREYXRlRm9ybWF0OiBkYXRlLCByZXF1ZXN0ZWRfZGF0ZV9mb3JtYXQ6ZGF0ZUZvcm1hdCB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVNb2RhbDogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZERhdGUoZGF0ZSl7XG4gICAgXHRkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgICBcdGxldCBtb250aCA9IHBhcnNlSW50KGRhdGUuZ2V0TW9udGgoKSkrMVxuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKClcbiAgICBcdHJldHVybiBgJHtkYXk+PTEwP2RheTpgMCR7ZGF5fWB9LSR7bW9udGg+PTEwP21vbnRoOmAwJHttb250aH0tJHtkYXRlLmdldEZ1bGxZZWFyKCl9YH1gXG4gICAgfVxuXG4gICAgaGFuZGxlSW51dCh0eXBlLCBldmVudCkge1xuICAgIFx0dHJ5e1xuXHQgICAgXHRsZXQgc2VhcmNoX3N0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXG5cdCAgICBcdGxldCBmaWx0ZXJlZF9kb2N0b3JfbGlzdCA9IFtdXG5cdCAgICBcdHRoaXMucHJvcHMuYWxsX2RvY3RvcnMubWFwKChkb2N0b3IpPT57XG5cdCAgICBcdFx0bGV0IGRvY3Rvcl9uYW1lID0gKGRvY3Rvci5uYW1lKS50b0xvd2VyQ2FzZSgpXG5cdCAgICBcdFx0aWYoZG9jdG9yX25hbWUuaW5jbHVkZXMoc2VhcmNoX3N0cmluZykpe1xuXHQgICAgXHRcdFx0bGV0IGluZGV4ID0gZG9jdG9yX25hbWUuaW5kZXhPZihzZWFyY2hfc3RyaW5nKVxuXHQgICAgXHRcdFx0ZmlsdGVyZWRfZG9jdG9yX2xpc3QucHVzaCh7aWQ6IGRvY3Rvci5pZCwgbmFtZTogZG9jdG9yLm5hbWUsIHJhbms6IGluZGV4fSlcblx0ICAgIFx0XHR9XG5cdCAgICBcdH0pXG5cdCAgICBcdGZpbHRlcmVkX2RvY3Rvcl9saXN0ID0gZmlsdGVyZWRfZG9jdG9yX2xpc3Quc29ydCgoeCx5KT0+e1xuXHQgICAgXHRcdHJldHVybiB4LnJhbmsteS5yYW5rXG5cdCAgICBcdH0pXG5cdCAgICBcdHRoaXMuc2V0U3RhdGUoe1t0eXBlXTogZXZlbnQudGFyZ2V0LnZhbHVlLCBmaWx0ZXJlZF9kb2N0b3JfbGlzdDogZmlsdGVyZWRfZG9jdG9yX2xpc3R9KVxuXHQgICAgfWNhdGNoKGUpIHtcblxuXHQgICAgfVxuICAgIH1cblxuICAgIGNsaWNrRG9jdG9yTGlzdCh2YWx1ZSkge1xuICAgIFx0dGhpcy5zZXRTdGF0ZSh7J3NlbGVjdGVkRG9jdG9yJzogdmFsdWUsIGZpbHRlcmVkX2RvY3Rvcl9saXN0OltdLCBzZWFyY2hfZG9jdG9yOiB2YWx1ZSwgc2hvd0RvY3RvclNlYXJjaFBvcHVwOiBmYWxzZX0pIFxuICAgIH1cblxuICAgIG9uRm9jdXNJbigpe1xuICAgIFx0dGhpcy5zZXRTdGF0ZSh7IGZpbHRlcmVkX2RvY3Rvcl9saXN0OiB0aGlzLnByb3BzLmFsbF9kb2N0b3JzLCBzZWFyY2hfZG9jdG9yOicnLCBzaG93RG9jdG9yU2VhcmNoUG9wdXA6IHRydWUgfSlcbiAgICB9XG5cbiAgICBvbkZvY3VzT3V0KCl7XG4gICAgXHRzZXRUaW1lb3V0KCgpPT57XG4gICAgXHRcdHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfZG9jdG9yOiB0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yLCBzaG93RG9jdG9yU2VhcmNoUG9wdXA6IGZhbHNlIH0pXHRcbiAgICBcdH0sNTAwKVxuICAgIFx0XG4gICAgfVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuXHRcdGxldCBmaWx0ZXJlZF9kb2N0b3IgPSB0aGlzLnN0YXRlLmZpbHRlcmVkX2RvY3Rvcl9saXN0XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHQvL3RoaXMuY2xvc2VQb3BVcENsaWNrZWQoKVxuXHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwIGlwZC1wb3Atd2lkdGhcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBwLTEyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaXBkLXBvcC1pbGRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmNsb3NlUG9wVXBDbGlja2VkKClcblx0XHRcdFx0XHRcdFx0fX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHR7Lyo8cCBjbGFzc05hbWU9XCJpcGQtbmVlZEhlbHBcIj5OZWVkIGhlbHAgd2l0aCBhbiBhcHBvaW50bWVudCBhdCBGb3J0aXMgSG9zcGl0YWw/PC9wPiovfVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5kb2N0b3JfbmFtZT9cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJpcGQtbmVlZEhlbHBcIj57YE5lZWQgdG8gYm9vayBhbiBhcHBvaW50bWVudCB3aXRoICR7dGhpcy5wcm9wcy5kb2N0b3JfbmFtZX0gJHt0aGlzLnByb3BzLmhvc3BpdGFsX25hbWU/YGF0ICR7dGhpcy5wcm9wcy5ob3NwaXRhbF9uYW1lfT9gOicnfWB9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDp0aGlzLnByb3BzLmhvc3BpdGFsX25hbWU/XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaXBkLW5lZWRIZWxwXCI+e2BOZWVkIGhlbHAgd2l0aCBhbiBhcHBvaW50bWVudCAke3RoaXMucHJvcHMuaG9zcGl0YWxfbmFtZT9gYXQgJHt0aGlzLnByb3BzLmhvc3BpdGFsX25hbWV9P2A6Jyd9YH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtcG9wLXNjcmxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1pbnAtc2VjdGlvbiBpcGQtc2N0bi1jaG5nXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5hbGxfZG9jdG9ycyAmJiB0aGlzLnByb3BzLmFsbF9kb2N0b3JzLmxlbmd0aD9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtc2xlY3RzLWRvY1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKjxzZWxlY3QgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yfSBvbkNoYW5nZT17IChlKT0+IHRoaXMuc2V0U3RhdGUoeydzZWxlY3RlZERvY3Rvcic6IGUudGFyZ2V0LnZhbHVlfSkgfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gZGVmYXVsdFZhbHVlPVwiXCI+KlNlbGVjdCBEb2N0b3I8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5hbGxfZG9jdG9ycy5tYXAoKGRvY3Rvciwga2V5KT0+e1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxvcHRpb24ga2V5PXtrZXl9IGlkPXtkb2N0b3IuaWR9IGRlZmF1bHRWYWx1ZT1cIlwiPntkb2N0b3IubmFtZX08L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD4qL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nU2VhcmNoIERvY3RvcnMnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUludXQuYmluZCh0aGlzLCAnc2VhcmNoX2RvY3RvcicpfSBvbkZvY3VzID0ge3RoaXMub25Gb2N1c0luLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5vbkZvY3VzT3V0LmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaF9kb2N0b3J9Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnNob3dEb2N0b3JTZWFyY2hQb3B1cD9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9jLXNyY2gtZmx0clwiIG9uQ2xpY2s9eyhlKT0+ZS5wcmV2ZW50RGVmYXVsdCgpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuZmlsdGVyZWRfZG9jdG9yX2xpc3QgJiYgdGhpcy5zdGF0ZS5maWx0ZXJlZF9kb2N0b3JfbGlzdC5sZW5ndGg/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5maWx0ZXJlZF9kb2N0b3JfbGlzdC5tYXAoKGRhdGEsIGtleSk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG50clwiIGtleT17a2V5fSBpZD17ZGF0YS5pZH0gb25DbGljaz17KGUpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5jbGlja0RvY3Rvckxpc3QoZGF0YS5uYW1lKX0gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2RhdGEubmFtZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6PHA+Tm8gcmVzdWx0IGZvdW5kPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PjonJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJubS1sc3QtaW5wdXRjbnQganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWwtaXBkLWlucHV0LWNudFwiIHN0eWxlPXt7d2lkdGg6ICc0OCUnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFwbnQtZG9jLWR0bCBwLTBcIj5QcmVmZXJyZWQgRGF0ZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhbG5leHQuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cInNsY3QtaW5wdC1jbnRuci1mY3NcIiBvbkNsaWNrPXt0aGlzLm9wZW5EYXRlTW9kYWwuYmluZCh0aGlzKX0gb25DaGFuZ2U9eygpPT57fX0gdmFsdWU9e3RoaXMuc3RhdGUucmVxdWVzdGVkRGF0ZUZvcm1hdH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGVNb2RhbCA/IDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItb3ZlcmxheVwiPjxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItbW9kYWxcIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2Vla051bWJlcj17ZmFsc2V9XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGU9eyhkYXRlKSA9PiB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZGlmZihtb21lbnQoKG5ldyBEYXRlKSksICdkYXlzJykgPCAwIHx8IGRhdGUuZGlmZihtb21lbnQoKG5ldyBEYXRlKSksICdkYXlzJykgPiAzMFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb2RheVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuc2VsZWN0RGF0ZUZyb21DYWxlbmRhci5iaW5kKHRoaXMpfVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PiA6IFwiXCJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlbC1pcGQtaW5wdXQtY250XCIgc3R5bGU9e3t3aWR0aDogJzQ4JSd9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhcG50LWRvYy1kdGwgcC0wXCI+UHJlZmVycmVkIFRpbWU8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYWxuZXh0LnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLXNsZWN0cy1kb2NcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPVwic2xjdC1pcG4tdGlcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudGltZVNsb3R9IG9uQ2hhbmdlPXsgKGUpPT4gdGhpcy5zZXRTdGF0ZSh7J3RpbWVTbG90JzogZS50YXJnZXQudmFsdWV9KSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGRlZmF1bHRWYWx1ZT1cIlwiPipTZWxlY3QgVGltZTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRUaW1lU2xvdHMoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLWRvYi1jb250XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLWRiLWhkbmdcIj4qRGF0ZSBvZiBiaXJ0aDo8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PERhdGVTZWxlY3RvciBnZXRTZWxlY3RlZERhdGU9e3RoaXMuZ2V0U2VsZWN0ZWREYXRlLmJpbmQodGhpcyl9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfS8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwiaXBkLWxlYWQtdGV4dGFyZWFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiKllvdXIgQ2l0eVwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDUwMCB9fSByb3dzPScxJyBuYW1lPSdjb21tZW50cyc+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiovfVxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmFsbF9jaXRpZXMgJiYgdGhpcy5wcm9wcy5hbGxfY2l0aWVzLmxlbmd0aD9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtc2xlY3RzLWRvY1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ2l0eX0gb25DaGFuZ2U9eyAoZSk9PiB0aGlzLnNldFN0YXRlKHsnc2VsZWN0ZWRDaXR5JzogZS50YXJnZXQudmFsdWV9KSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPG9wdGlvbiB2YWx1ZT1cIlwiPipTZWxlY3QgQ2l0eTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ki99e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmFsbF9jaXRpZXMubWFwKChjaXR5LCBrZXkpPT57XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPG9wdGlvbiBrZXk9e2tleX0gIGlkPXtjaXR5LmlkfSBkZWZhdWx0VmFsdWU9XCJcIj57Y2l0eS5uYW1lfTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj46Jydcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2tpcC1idG4tc2duXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaXBkLWlucC1zYm10XCIgb25DbGljaz17dGhpcy5zdWJtaXRDbGlja2VkLmJpbmQodGhpcyl9PlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNsb3NlUG9wVXBDbGlja2VkKHRydWUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlNraXA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuXG5cdGNvbnN0IHtcblx0XHRzZWxlY3RlZExvY2F0aW9uXG5cdH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cblx0cmV0dXJuIHtcblx0XHRzZWxlY3RlZExvY2F0aW9uXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cblx0cmV0dXJuIHtcblx0XHRzdWJtaXRTZWNvbmRJUERGb3JtOiAoZm9ybURhdGEsIHNlbGVjdGVkTG9jYXRpb24sIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRTZWNvbmRJUERGb3JtKGZvcm1EYXRhLCBzZWxlY3RlZExvY2F0aW9uLCBjYikpLFxuXHRcdGlwZFBvcHVwRmlyZWQ6ICgpPT4gZGlzcGF0Y2goaXBkUG9wdXBGaXJlZCgpKSxcblx0XHRzYXZlSXBkUG9wdXBEYXRhOiAodHlwZSwgZGF0YSkgPT4gZGlzcGF0Y2goc2F2ZUlwZFBvcHVwRGF0YSh0eXBlLCBkYXRhKSlcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJcGREb2N0b3JDaXR5UG9wdXApIl0sInNvdXJjZVJvb3QiOiIifQ==