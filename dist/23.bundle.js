(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MONTHS = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var WEEK_DAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

var DateSelector = function (_React$Component) {
	_inherits(DateSelector, _React$Component);

	function DateSelector(props) {
		_classCallCheck(this, DateSelector);

		var _this = _possibleConstructorReturn(this, (DateSelector.__proto__ || Object.getPrototypeOf(DateSelector)).call(this, props));

		_this.state = {
			selectedYear: 1940,
			selectedMonth: 'Jan',
			selectedDate: '1',
			noOfDaysInMonth: 31
		};
		return _this;
	}

	_createClass(DateSelector, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.onRef) {
				this.props.onRef(this);
			}
		}
	}, {
		key: 'selectOptions',
		value: function selectOptions(type, val) {
			var _this2 = this;

			this.setState(_defineProperty({}, type, val), function () {

				if (type.includes('selectedMonth') || type.includes('selectedYear')) {
					var days = _this2.daysInMonth();
					_this2.setState({ noOfDaysInMonth: days, selectedDate: _this2.state.selectedDate > days ? 1 : _this2.state.selectedDate });
				}
			});
		}
	}, {
		key: 'daysInMonth',
		value: function daysInMonth() {
			if (this.state.selectedYear && this.state.selectedMonth) {
				var month = MONTHS.indexOf(this.state.selectedMonth);
				return new Date(this.state.selectedYear, month + 1, 0).getDate();
			} else {
				return 30;
			}
		}
	}, {
		key: 'getSelectedDate',
		value: function getSelectedDate() {
			var data = {
				year: this.state.selectedYear,
				month: MONTHS.indexOf(this.state.selectedMonth) + 1,
				day: this.state.selectedDate
			};
			this.props.getSelectedDate(data);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var currentYear = new Date().getFullYear();
			return _react2.default.createElement(
				'div',
				{ className: 'ipd-db-selects' },
				_react2.default.createElement(
					'select',
					{ style: { textIndent: '12px' }, defaultValue: this.state.selectedDate.toString(), onChange: function onChange(e) {
							return _this3.selectOptions('selectedDate', e.target.value);
						} },
					_react2.default.createElement(
						'option',
						{ defaultValue: '', disabled: true },
						'Date'
					),
					[].concat(_toConsumableArray(Array(this.state.noOfDaysInMonth).keys())).map(function (year, key) {
						return _react2.default.createElement(
							'option',
							{ key: key, defaultValue: '' },
							key + 1
						);
					})
				),
				_react2.default.createElement(
					'select',
					{ style: { textIndent: '4px' }, defaultValue: this.state.selectedMonth, onChange: function onChange(e) {
							return _this3.selectOptions('selectedMonth', e.target.value);
						} },
					MONTHS.map(function (month, i) {
						return _react2.default.createElement(
							'option',
							{ defaultValue: '', key: i },
							month
						);
					})
				),
				_react2.default.createElement(
					'select',
					{ defaultValue: this.state.selectedYear, onChange: function onChange(e) {
							return _this3.selectOptions('selectedYear', e.target.value);
						} },
					_react2.default.createElement(
						'option',
						{ defaultValue: '', disabled: true },
						'Year'
					),
					[].concat(_toConsumableArray(Array(80).keys())).map(function (year, key) {
						return _react2.default.createElement(
							'option',
							{ key: key, defaultValue: '' },
							currentYear - 80 + key + 1
						);
					})
				)
			);
		}
	}]);

	return DateSelector;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _DateSelector = __webpack_require__(/*! ../../components/commons/DateSelector */ "./dev/js/components/commons/DateSelector/index.js");

var _DateSelector2 = _interopRequireDefault(_DateSelector);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "./node_modules/rc-calendar/es/index.js");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var IpdDoctorCityPopup = function (_React$Component) {
	_inherits(IpdDoctorCityPopup, _React$Component);

	function IpdDoctorCityPopup(props) {
		_classCallCheck(this, IpdDoctorCityPopup);

		var _this = _possibleConstructorReturn(this, (IpdDoctorCityPopup.__proto__ || Object.getPrototypeOf(IpdDoctorCityPopup)).call(this, props));

		_this.state = {
			selectedDoctor: '',
			selectedDoctorId: '',
			selectedCity: _this.props.all_cities && _this.props.all_cities.length ? _this.props.all_cities[0].name : '',
			dob: '',
			requested_date_time: new Date().toDateString(),
			timeSlot: '',
			dateModal: false,
			requestedDateFormat: _this.getFormattedDate(new Date()),
			requested_date_format: new Date(),
			search_doctor: '',
			filtered_doctor_list: [],
			showDoctorSearchPopup: false
		};
		return _this;
	}

	_createClass(IpdDoctorCityPopup, [{
		key: 'componentDidCatch',
		value: function componentDidCatch(error, info) {
			console.log('error is ', error);
			console.log('info is ', info);
		}
	}, {
		key: 'submitClicked',
		value: function submitClicked() {
			var _this2 = this;

			this.isDateSelected();
			setTimeout(function () {
				_this2.submitLeadForm();
			}, 0);
		}
	}, {
		key: 'submitLeadForm',
		value: function submitLeadForm() {
			var _this3 = this;

			var doctor = '';
			var city = '';

			if (!this.state.selectedDoctor && this.props.hospitalProfilePage) {
				setTimeout(function () {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select the Doctor" });
				}, 500);
				return;
			} else {
				doctor = this.props.all_doctors.filter(function (x) {
					return x.name == _this3.state.selectedDoctor;
				}).map(function (x) {
					return x.id;
				});
			}

			if (!this.state.requested_date_format) {
				setTimeout(function () {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select the Date" });
				}, 500);
				return;
			}

			if (!this.state.timeSlot || !parseInt(this.state.timeSlot)) {
				setTimeout(function () {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select the Time Slots" });
				}, 500);
				return;
			}

			if (!this.state.dob) {
				setTimeout(function () {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please enter DOB" });
				}, 500);
				return;
			}

			if (!this.state.selectedCity) {
				setTimeout(function () {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select the City" });
				}, 500);
				return;
			} else {
				city = this.props.all_cities.filter(function (x) {
					return x.name == _this3.state.selectedCity;
				}).map(function (x) {
					return x.id;
				});
			}

			var parsed = queryString.parse(this.props.location.search);

			var formData = {
				dob: this.state.dob,
				doctor: doctor.length ? doctor[0] : '',
				matrix_city: city.length ? city[0] : '',
				city: this.state.selectedCity,
				id: this.props.firstLeadId
			};

			if (this.state.requested_date_format) {
				var requestedDate = new Date(this.state.requested_date_format);
				var month = parseInt(requestedDate.getMonth()) + 1;
				var year = parseInt(requestedDate.getFullYear());
				var day = parseInt(requestedDate.getDate());
				var time = parseInt(this.state.timeSlot);
				var dateFormat = year + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' + day) + 'T' + (time >= 10 ? '' + time : '0' + time) + ':00';
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

			var utm_tags = {
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

			this.props.submitSecondIPDForm(formData, this.props.selectedLocation, function (error, response) {
				if (!error && response) {
					//Save popup data for doctor profile data auto filled
					if (_this3.props.is_booking_page) {
						_this3.props.saveIpdPopupData('popup2', formData);
					}
					var gtmData = {
						'Category': 'ConsumerApp', 'Action': 'IPD-popup-lead', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': _this3.props.firstLeadId || '', 'event': 'IPD-popup-lead', selectedId: '', 'hospitalId': '', 'from': 'leadForm', 'mobileNo': _this3.state.phone_number, 'formNo': '2'
					};
					_gtm2.default.sendEvent({ data: gtmData });

					_this3.props.ipdPopupFired();

					setTimeout(function () {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Your request has been submitted sucessfully" });
					}, 500);
				} else {
					setTimeout(function () {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please try after some time" });
					}, 500);
				}
				_this3.props.secondIpdFormSubmitted(formData);
			});
		}
	}, {
		key: 'closePopUpClicked',
		value: function closePopUpClicked() {
			var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			if (skip) {
				var gtmData = {
					'Category': 'ConsumerApp', 'Action': 'IPD-2popup-skip-clicked', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'IPD-2popup-skip-clicked', 'formNo': '2'
				};
				_gtm2.default.sendEvent({ data: gtmData });
			}
			this.props.secondIpdFormSubmitted();
		}
	}, {
		key: 'isDateSelected',
		value: function isDateSelected() {
			this.child.getSelectedDate();
		}
	}, {
		key: 'getSelectedDate',
		value: function getSelectedDate(date) {
			if (!date || !date.year || !date.month || !date.day) {
				return false;
			} else {
				var dob = date.year + '-' + (date.month >= 10 ? date.month : '0' + date.month) + '-' + (date.day >= 10 ? date.day : '0' + date.day);
				this.setState({ dob: dob });
				return true;
			}
		}
	}, {
		key: 'getTimeSlots',
		value: function getTimeSlots() {
			var offset = new Date();
			var currentTime = 8;
			var timeSlot = [];
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
	}, {
		key: 'openDateModal',
		value: function openDateModal() {
			this.setState({ dateModal: !this.state.dateModal });
		}
	}, {
		key: 'selectDateFromCalendar',
		value: function selectDateFromCalendar(date) {
			if (date) {
				date = date.toDate();
				var dateFormat = new Date(date);
				date = this.getFormattedDate(date);
				this.setState({ dateModal: false, requestedDateFormat: date, requested_date_format: dateFormat });
			} else {
				this.setState({ dateModal: false });
			}
		}
	}, {
		key: 'getFormattedDate',
		value: function getFormattedDate(date) {
			date = new Date(date);
			var month = parseInt(date.getMonth()) + 1;
			var day = date.getDate();
			return (day >= 10 ? day : '0' + day) + '-' + (month >= 10 ? month : '0' + month + '-' + date.getFullYear());
		}
	}, {
		key: 'handleInut',
		value: function handleInut(type, event) {
			try {
				var _setState;

				var search_string = event.target.value.toLowerCase();
				var filtered_doctor_list = [];
				this.props.all_doctors.map(function (doctor) {
					var doctor_name = doctor.name.toLowerCase();
					if (doctor_name.includes(search_string)) {
						var index = doctor_name.indexOf(search_string);
						filtered_doctor_list.push({ id: doctor.id, name: doctor.name, rank: index });
					}
				});
				filtered_doctor_list = filtered_doctor_list.sort(function (x, y) {
					return x.rank - y.rank;
				});
				this.setState((_setState = {}, _defineProperty(_setState, type, event.target.value), _defineProperty(_setState, 'filtered_doctor_list', filtered_doctor_list), _setState));
			} catch (e) {}
		}
	}, {
		key: 'clickDoctorList',
		value: function clickDoctorList(value) {
			this.setState({ 'selectedDoctor': value, filtered_doctor_list: [], search_doctor: value, showDoctorSearchPopup: false });
		}
	}, {
		key: 'onFocusIn',
		value: function onFocusIn() {
			this.setState({ filtered_doctor_list: this.props.all_doctors, search_doctor: '', showDoctorSearchPopup: true });
		}
	}, {
		key: 'onFocusOut',
		value: function onFocusOut() {
			var _this4 = this;

			setTimeout(function () {
				_this4.setState({ search_doctor: _this4.state.selectedDoctor, showDoctorSearchPopup: false });
			}, 500);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			var parsed = queryString.parse(this.props.location.search);

			var filtered_doctor = this.state.filtered_doctor_list;

			return _react2.default.createElement(
				'div',
				{ className: 'search-el-popup-overlay cancel-overlay-zindex', onClick: function onClick(e) {
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
								{ className: 'ipd-pop-ild', onClick: function onClick(e) {
										e.stopPropagation();
										e.preventDefault();
										_this5.closePopUpClicked();
									} },
								_react2.default.createElement('img', { src: "/assets" + "/img/icons/close.png" })
							),
							this.props.doctor_name ? _react2.default.createElement(
								'p',
								{ className: 'ipd-needHelp' },
								'Need to book an appointment with ' + this.props.doctor_name + ' ' + (this.props.hospital_name ? 'at ' + this.props.hospital_name + '?' : '')
							) : this.props.hospital_name ? _react2.default.createElement(
								'p',
								{ className: 'ipd-needHelp' },
								'Need help with an appointment ' + (this.props.hospital_name ? 'at ' + this.props.hospital_name + '?' : '')
							) : '',
							_react2.default.createElement(
								'div',
								{ className: 'ipd-pop-scrl' },
								_react2.default.createElement(
									'div',
									{ className: 'ipd-inp-section ipd-sctn-chng', onClick: function onClick(e) {
											e.preventDefault();
											e.stopPropagation();
										} },
									this.props.all_doctors && this.props.all_doctors.length ? _react2.default.createElement(
										'div',
										{ className: 'ipd-slects-doc' },
										_react2.default.createElement('input', { type: 'text', placeholder: 'Search Doctors', onChange: this.handleInut.bind(this, 'search_doctor'), onFocus: this.onFocusIn.bind(this), onBlur: this.onFocusOut.bind(this), value: this.state.search_doctor }),
										this.state.showDoctorSearchPopup ? _react2.default.createElement(
											'div',
											{ className: 'doc-srch-fltr', onClick: function onClick(e) {
													return e.preventDefault();
												} },
											this.state.filtered_doctor_list && this.state.filtered_doctor_list.length ? this.state.filtered_doctor_list.map(function (data, key) {
												return _react2.default.createElement(
													'p',
													{ className: 'cursor-pntr', key: key, id: data.id, onClick: function onClick(e) {
															e.preventDefault();
															e.stopPropagation();
															_this5.clickDoctorList(data.name);
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
											_react2.default.createElement('input', { className: 'slct-inpt-cntnr-fcs', onClick: this.openDateModal.bind(this), onChange: function onChange() {}, value: this.state.requestedDateFormat })
										),
										this.state.dateModal ? _react2.default.createElement(
											'div',
											{ className: 'calendar-overlay' },
											_react2.default.createElement(
												'div',
												{ className: 'date-picker-modal' },
												_react2.default.createElement(_rcCalendar2.default, {
													showWeekNumber: false,
													disabledDate: function disabledDate(date) {
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
													{ className: 'slct-ipn-ti', defaultValue: this.state.timeSlot, onChange: function onChange(e) {
															return _this5.setState({ 'timeSlot': e.target.value });
														} },
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
										_react2.default.createElement(_DateSelector2.default, { getSelectedDate: this.getSelectedDate.bind(this), onRef: function onRef(ref) {
												return _this5.child = ref;
											} })
									),
									this.props.all_cities && this.props.all_cities.length ? _react2.default.createElement(
										'div',
										{ className: 'ipd-slects-doc' },
										_react2.default.createElement(
											'select',
											{ defaultValue: this.state.selectedCity, onChange: function onChange(e) {
													return _this5.setState({ 'selectedCity': e.target.value });
												} },
											this.props.all_cities.map(function (city, key) {

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
											{ onClick: function onClick(e) {
													e.preventDefault();
													e.stopPropagation();
													_this5.closePopUpClicked(true);
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
	}]);

	return IpdDoctorCityPopup;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, passedProps) {
	var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;


	return {
		selectedLocation: selectedLocation
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {

	return {
		submitSecondIPDForm: function submitSecondIPDForm(formData, selectedLocation, cb) {
			return dispatch((0, _index.submitSecondIPDForm)(formData, selectedLocation, cb));
		},
		ipdPopupFired: function ipdPopupFired() {
			return dispatch((0, _index.ipdPopupFired)());
		},
		saveIpdPopupData: function saveIpdPopupData(type, data) {
			return dispatch((0, _index.saveIpdPopupData)(type, data));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IpdDoctorCityPopup);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0RhdGVTZWxlY3Rvci9EYXRlU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9EYXRlU2VsZWN0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvaXBkL0lwZERvY3RvckNpdHlQb3B1cC5qcyJdLCJuYW1lcyI6WyJNT05USFMiLCJXRUVLX0RBWVMiLCJEYXRlU2VsZWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2VsZWN0ZWRZZWFyIiwic2VsZWN0ZWRNb250aCIsInNlbGVjdGVkRGF0ZSIsIm5vT2ZEYXlzSW5Nb250aCIsIm9uUmVmIiwidHlwZSIsInZhbCIsInNldFN0YXRlIiwiaW5jbHVkZXMiLCJkYXlzIiwiZGF5c0luTW9udGgiLCJtb250aCIsImluZGV4T2YiLCJEYXRlIiwiZ2V0RGF0ZSIsImRhdGEiLCJ5ZWFyIiwiZGF5IiwiZ2V0U2VsZWN0ZWREYXRlIiwiY3VycmVudFllYXIiLCJnZXRGdWxsWWVhciIsInRleHRJbmRlbnQiLCJ0b1N0cmluZyIsImUiLCJzZWxlY3RPcHRpb25zIiwidGFyZ2V0IiwidmFsdWUiLCJBcnJheSIsImtleXMiLCJtYXAiLCJrZXkiLCJpIiwiUmVhY3QiLCJDb21wb25lbnQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJtb21lbnQiLCJJcGREb2N0b3JDaXR5UG9wdXAiLCJzZWxlY3RlZERvY3RvciIsInNlbGVjdGVkRG9jdG9ySWQiLCJzZWxlY3RlZENpdHkiLCJhbGxfY2l0aWVzIiwibGVuZ3RoIiwibmFtZSIsImRvYiIsInJlcXVlc3RlZF9kYXRlX3RpbWUiLCJ0b0RhdGVTdHJpbmciLCJ0aW1lU2xvdCIsImRhdGVNb2RhbCIsInJlcXVlc3RlZERhdGVGb3JtYXQiLCJnZXRGb3JtYXR0ZWREYXRlIiwicmVxdWVzdGVkX2RhdGVfZm9ybWF0Iiwic2VhcmNoX2RvY3RvciIsImZpbHRlcmVkX2RvY3Rvcl9saXN0Iiwic2hvd0RvY3RvclNlYXJjaFBvcHVwIiwiZXJyb3IiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImlzRGF0ZVNlbGVjdGVkIiwic2V0VGltZW91dCIsInN1Ym1pdExlYWRGb3JtIiwiZG9jdG9yIiwiY2l0eSIsImhvc3BpdGFsUHJvZmlsZVBhZ2UiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiYWxsX2RvY3RvcnMiLCJmaWx0ZXIiLCJ4IiwiaWQiLCJwYXJzZUludCIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJmb3JtRGF0YSIsIm1hdHJpeF9jaXR5IiwiZmlyc3RMZWFkSWQiLCJyZXF1ZXN0ZWREYXRlIiwiZ2V0TW9udGgiLCJ0aW1lIiwiZGF0ZUZvcm1hdCIsInRpdGxlIiwiaG9zcGl0YWxfaWQiLCJob3NwaXRhbCIsInByb2NlZHVyZV9pZCIsImlwZF9wcm9jZWR1cmUiLCJkb2N0b3JfaWQiLCJ1dG1fdGFncyIsInV0bV9zb3VyY2UiLCJ1dG1fbWVkaXVtIiwidXRtX3Rlcm0iLCJ1dG1fY2FtcGFpZ24iLCJyZWZlcnJlciIsImRvY3VtZW50IiwiZ2NsaWQiLCJ1cmwiLCJ3aW5kb3ciLCJocmVmIiwiZm9ybVNvdXJjZSIsInNvdXJjZVRhZyIsInNvdXJjZSIsInN1Ym1pdFNlY29uZElQREZvcm0iLCJzZWxlY3RlZExvY2F0aW9uIiwicmVzcG9uc2UiLCJpc19ib29raW5nX3BhZ2UiLCJzYXZlSXBkUG9wdXBEYXRhIiwiZ3RtRGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbGVjdGVkSWQiLCJwaG9uZV9udW1iZXIiLCJzZW5kRXZlbnQiLCJpcGRQb3B1cEZpcmVkIiwic2Vjb25kSXBkRm9ybVN1Ym1pdHRlZCIsInNraXAiLCJjaGlsZCIsImRhdGUiLCJvZmZzZXQiLCJjdXJyZW50VGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsInNldEhvdXJzIiwicHVzaCIsInRvTG9jYWxlU3RyaW5nIiwiaG91ciIsImhvdXIxMiIsInRvRGF0ZSIsImV2ZW50Iiwic2VhcmNoX3N0cmluZyIsInRvTG93ZXJDYXNlIiwiZG9jdG9yX25hbWUiLCJpbmRleCIsInJhbmsiLCJzb3J0IiwieSIsImZpbHRlcmVkX2RvY3RvciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xvc2VQb3BVcENsaWNrZWQiLCJBU1NFVFNfQkFTRV9VUkwiLCJob3NwaXRhbF9uYW1lIiwiaGFuZGxlSW51dCIsImJpbmQiLCJvbkZvY3VzSW4iLCJvbkZvY3VzT3V0IiwiY2xpY2tEb2N0b3JMaXN0Iiwid2lkdGgiLCJvcGVuRGF0ZU1vZGFsIiwiZGlmZiIsInNlbGVjdERhdGVGcm9tQ2FsZW5kYXIiLCJnZXRUaW1lU2xvdHMiLCJyZWYiLCJzdWJtaXRDbGlja2VkIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLE9BQXRCLEVBQStCLEtBQS9CLEVBQXNDLE1BQXRDLEVBQThDLE1BQTlDLEVBQXNELEtBQXRELEVBQTZELE1BQTdELEVBQXFFLEtBQXJFLEVBQTRFLEtBQTVFLEVBQW1GLEtBQW5GLENBQWY7QUFDQSxJQUFNQyxZQUFZLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLEtBQXZCLEVBQThCLE1BQTlCLEVBQXNDLEtBQXRDLEVBQTZDLEtBQTdDLENBQWxCOztJQUVNQyxZOzs7QUFDTCx1QkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsaUJBQWMsSUFERjtBQUVaQyxrQkFBYyxLQUZGO0FBR1pDLGlCQUFhLEdBSEQ7QUFJWkMsb0JBQWlCO0FBSkws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RXFILGVBQUY7QUFDQSxvQkFBS0MsaUJBQUwsQ0FBdUIsSUFBdkI7QUFDQSxhQUpEO0FBQUE7QUFBQTtBQUZEO0FBM0ZEO0FBREQ7QUFmRDtBQUREO0FBREQ7QUFMRCxJQUREO0FBa0lBOzs7O0VBcFkrQjdHLGdCQUFNQyxTOztBQXVZdkMsSUFBTTJILGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQzdKLEtBQUQsRUFBUThKLFdBQVIsRUFBd0I7QUFBQSxLQUc5Q25ELGdCQUg4QyxHQUkzQzNHLE1BQU0rSixtQkFKcUMsQ0FHOUNwRCxnQkFIOEM7OztBQU0vQyxRQUFPO0FBQ05BO0FBRE0sRUFBUDtBQUdBLENBVEQ7O0FBV0EsSUFBTXFELHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYzs7QUFFeEMsUUFBTztBQUNOdkQsdUJBQXFCLDZCQUFDM0IsUUFBRCxFQUFXNEIsZ0JBQVgsRUFBNkJ1RCxFQUE3QjtBQUFBLFVBQW9DRCxTQUFTLGdDQUFvQmxGLFFBQXBCLEVBQThCNEIsZ0JBQTlCLEVBQWdEdUQsRUFBaEQsQ0FBVCxDQUFwQztBQUFBLEdBRGY7QUFFTjdDLGlCQUFlO0FBQUEsVUFBSzRDLFNBQVMsMkJBQVQsQ0FBTDtBQUFBLEdBRlQ7QUFHTm5ELG9CQUFrQiwwQkFBQ3hHLElBQUQsRUFBT1UsSUFBUDtBQUFBLFVBQWdCaUosU0FBUyw2QkFBaUIzSixJQUFqQixFQUF1QlUsSUFBdkIsQ0FBVCxDQUFoQjtBQUFBO0FBSFosRUFBUDtBQUtBLENBUEQ7O2tCQVNlLHlCQUFRNkksZUFBUixFQUF5Qkcsa0JBQXpCLEVBQTZDMUgsa0JBQTdDLEMiLCJmaWxlIjoiMjMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBNT05USFMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVnJywgJ1NlcHQnLCAnT2N0JywgJ05vdicsICdEZWMnXVxuY29uc3QgV0VFS19EQVlTID0gWydTdW4nLCAnTW9uJywgJ1R1ZXMnLCAnV2VkJywgJ1RodXInLCAnRnJpJywgJ1NhdCddXG5cbmNsYXNzIERhdGVTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWRZZWFyOiAxOTQwLFxuXHRcdFx0c2VsZWN0ZWRNb250aDonSmFuJyxcblx0XHRcdHNlbGVjdGVkRGF0ZTonMScsXG5cdFx0XHRub09mRGF5c0luTW9udGg6IDMxXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRpZih0aGlzLnByb3BzLm9uUmVmKXtcblx0XHRcdHRoaXMucHJvcHMub25SZWYodGhpcylcblx0XHR9XG5cdH1cblxuXHRzZWxlY3RPcHRpb25zKHR5cGUsIHZhbCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7W3R5cGVdOiB2YWx9LCAoKT0+e1xuXG5cdFx0XHRpZih0eXBlLmluY2x1ZGVzKCdzZWxlY3RlZE1vbnRoJykgfHwgdHlwZS5pbmNsdWRlcygnc2VsZWN0ZWRZZWFyJykpIHtcblx0XHRcdFx0bGV0IGRheXMgPSB0aGlzLmRheXNJbk1vbnRoKClcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IG5vT2ZEYXlzSW5Nb250aDogZGF5cywgc2VsZWN0ZWREYXRlOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZT5kYXlzPzE6dGhpcy5zdGF0ZS5zZWxlY3RlZERhdGV9KVxuXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdGRheXNJbk1vbnRoKCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5zZWxlY3RlZFllYXIgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZE1vbnRoKXtcblx0XHRcdGxldCBtb250aCA9IE1PTlRIUy5pbmRleE9mKHRoaXMuc3RhdGUuc2VsZWN0ZWRNb250aClcblx0XHRcdHJldHVybiBuZXcgRGF0ZSh0aGlzLnN0YXRlLnNlbGVjdGVkWWVhcixtb250aCsxICwgMCkuZ2V0RGF0ZSgpXG5cdFx0fWVsc2Uge1xuXHRcdFx0cmV0dXJuIDMwO1xuXHRcdH1cblx0fVxuXG5cdGdldFNlbGVjdGVkRGF0ZSgpe1xuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0eWVhcjogdGhpcy5zdGF0ZS5zZWxlY3RlZFllYXIsXG5cdFx0XHRtb250aDogTU9OVEhTLmluZGV4T2YodGhpcy5zdGF0ZS5zZWxlY3RlZE1vbnRoKSsxLFxuXHRcdFx0ZGF5OiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZVxuXHRcdH1cblx0XHR0aGlzLnByb3BzLmdldFNlbGVjdGVkRGF0ZShkYXRhKVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0bGV0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtZGItc2VsZWN0c1wiPlxuXHRcdFx0XHQ8c2VsZWN0IHN0eWxlPXt7dGV4dEluZGVudDonMTJweCd9fSBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWREYXRlLnRvU3RyaW5nKCl9IG9uQ2hhbmdlPXsgKGUpPT4gdGhpcy5zZWxlY3RPcHRpb25zKCdzZWxlY3RlZERhdGUnLCBlLnRhcmdldC52YWx1ZSl9PlxuXHRcdFx0XHRcdDxvcHRpb24gZGVmYXVsdFZhbHVlPVwiXCIgZGlzYWJsZWQgPkRhdGU8L29wdGlvbj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRbLi4uQXJyYXkodGhpcy5zdGF0ZS5ub09mRGF5c0luTW9udGgpLmtleXMoKV0ubWFwKCh5ZWFyLCBrZXkpPT57XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8b3B0aW9uIGtleT17a2V5fSBkZWZhdWx0VmFsdWU9XCJcIj57a2V5KzF9PC9vcHRpb24+XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdDxzZWxlY3Qgc3R5bGU9e3t0ZXh0SW5kZW50Oic0cHgnfX0gZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkTW9udGh9IG9uQ2hhbmdlPXsgKGUpPT4gdGhpcy5zZWxlY3RPcHRpb25zKCdzZWxlY3RlZE1vbnRoJywgZS50YXJnZXQudmFsdWUpfT5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRNT05USFMubWFwKChtb250aCwgaSk9Pntcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxvcHRpb24gZGVmYXVsdFZhbHVlPVwiXCIga2V5PXtpfSA+e21vbnRofTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHQ8c2VsZWN0IGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFllYXJ9IG9uQ2hhbmdlPXsgKGUpPT4gdGhpcy5zZWxlY3RPcHRpb25zKCdzZWxlY3RlZFllYXInLCBlLnRhcmdldC52YWx1ZSl9PlxuXHRcdFx0XHRcdDxvcHRpb24gZGVmYXVsdFZhbHVlPVwiXCIgZGlzYWJsZWQgPlllYXI8L29wdGlvbj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRbLi4uQXJyYXkoODApLmtleXMoKV0ubWFwKCh5ZWFyLCBrZXkpPT57XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8b3B0aW9uIGtleT17a2V5fSBkZWZhdWx0VmFsdWU9XCJcIj57Y3VycmVudFllYXItODAra2V5KzF9PC9vcHRpb24+XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlU2VsZWN0b3IiLCJpbXBvcnQgRGF0ZVNlbGVjdG9yIGZyb20gJy4vRGF0ZVNlbGVjdG9yLmpzJ1xuZXhwb3J0IGRlZmF1bHQgRGF0ZVNlbGVjdG9yIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc3VibWl0U2Vjb25kSVBERm9ybSwgaXBkUG9wdXBGaXJlZCwgc2F2ZUlwZFBvcHVwRGF0YSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpXG5pbXBvcnQgRGF0ZVNlbGVjdG9yIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EYXRlU2VsZWN0b3InXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmMtY2FsZW5kYXInO1xuY29uc3QgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbmNsYXNzIElwZERvY3RvckNpdHlQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWREb2N0b3I6ICcnLFxuXHRcdFx0c2VsZWN0ZWREb2N0b3JJZDonJyxcblx0XHRcdHNlbGVjdGVkQ2l0eTp0aGlzLnByb3BzLmFsbF9jaXRpZXMgJiYgdGhpcy5wcm9wcy5hbGxfY2l0aWVzLmxlbmd0aD90aGlzLnByb3BzLmFsbF9jaXRpZXNbMF0ubmFtZTonJyxcblx0XHRcdGRvYjonJyxcblx0XHRcdHJlcXVlc3RlZF9kYXRlX3RpbWU6IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksXG5cdFx0XHR0aW1lU2xvdDogJycsXG5cdFx0XHRkYXRlTW9kYWw6IGZhbHNlLFxuXHRcdFx0cmVxdWVzdGVkRGF0ZUZvcm1hdDogdGhpcy5nZXRGb3JtYXR0ZWREYXRlKG5ldyBEYXRlKCkpLFxuXHRcdFx0cmVxdWVzdGVkX2RhdGVfZm9ybWF0OiBuZXcgRGF0ZSgpLFxuXHRcdFx0c2VhcmNoX2RvY3RvcjogJycsXG5cdFx0XHRmaWx0ZXJlZF9kb2N0b3JfbGlzdDogW10sXG5cdFx0XHRzaG93RG9jdG9yU2VhcmNoUG9wdXA6ZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRDYXRjaChlcnJvciwgaW5mbykge1xuXHRcdGNvbnNvbGUubG9nKCdlcnJvciBpcyAnLGVycm9yKVxuXHRcdGNvbnNvbGUubG9nKCdpbmZvIGlzICcsIGluZm8pXG5cdH1cblxuXHRzdWJtaXRDbGlja2VkKCl7XG5cdFx0dGhpcy5pc0RhdGVTZWxlY3RlZCgpXG5cdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0dGhpcy5zdWJtaXRMZWFkRm9ybSgpXG5cdFx0fSwwKVxuXHR9XG5cblx0c3VibWl0TGVhZEZvcm0oKSB7XG5cblx0XHRsZXQgZG9jdG9yPScnXG5cdFx0bGV0IGNpdHk9JydcblxuXHRcdGlmICghdGhpcy5zdGF0ZS5zZWxlY3RlZERvY3RvciAmJiB0aGlzLnByb3BzLmhvc3BpdGFsUHJvZmlsZVBhZ2UpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHNlbGVjdCB0aGUgRG9jdG9yXCIgfSlcblx0XHRcdH0sIDUwMClcblx0XHRcdHJldHVyblxuXHRcdH1lbHNlIHtcblx0XHRcdGRvY3RvciA9IHRoaXMucHJvcHMuYWxsX2RvY3RvcnMuZmlsdGVyKHg9PngubmFtZT09dGhpcy5zdGF0ZS5zZWxlY3RlZERvY3RvcikubWFwKHg9PnguaWQpXG5cdFx0fVxuXG5cdFx0aWYoIXRoaXMuc3RhdGUucmVxdWVzdGVkX2RhdGVfZm9ybWF0KXtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHNlbGVjdCB0aGUgRGF0ZVwiIH0pXG5cdFx0XHR9LCA1MDApXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZighdGhpcy5zdGF0ZS50aW1lU2xvdCB8fCAhKHBhcnNlSW50KHRoaXMuc3RhdGUudGltZVNsb3QpKSl7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBzZWxlY3QgdGhlIFRpbWUgU2xvdHNcIiB9KVxuXHRcdFx0fSwgNTAwKVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLnN0YXRlLmRvYikge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZW50ZXIgRE9CXCIgfSlcblx0XHRcdH0sIDUwMClcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5zdGF0ZS5zZWxlY3RlZENpdHkpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHNlbGVjdCB0aGUgQ2l0eVwiIH0pXG5cdFx0XHR9LCA1MDApXG5cdFx0XHRyZXR1cm5cblx0XHR9ZWxzZSB7XG5cdFx0XHRjaXR5ID0gdGhpcy5wcm9wcy5hbGxfY2l0aWVzLmZpbHRlcih4PT54Lm5hbWU9PXRoaXMuc3RhdGUuc2VsZWN0ZWRDaXR5KS5tYXAoeD0+eC5pZClcblx0XHR9XG5cblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuXHRcdGxldCBmb3JtRGF0YSA9IHtcblx0XHRcdGRvYjp0aGlzLnN0YXRlLmRvYixcblx0XHRcdGRvY3Rvcjpkb2N0b3IubGVuZ3RoP2RvY3RvclswXTonJyxcblx0XHRcdG1hdHJpeF9jaXR5OiBjaXR5Lmxlbmd0aD9jaXR5WzBdOicnLFxuXHRcdFx0Y2l0eTogdGhpcy5zdGF0ZS5zZWxlY3RlZENpdHksXG5cdFx0XHRpZDogdGhpcy5wcm9wcy5maXJzdExlYWRJZFxuXHRcdH1cblxuXHRcdGlmKHRoaXMuc3RhdGUucmVxdWVzdGVkX2RhdGVfZm9ybWF0KSB7XG5cdFx0XHRsZXQgcmVxdWVzdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuc3RhdGUucmVxdWVzdGVkX2RhdGVfZm9ybWF0KVxuXHRcdFx0bGV0IG1vbnRoID0gcGFyc2VJbnQocmVxdWVzdGVkRGF0ZS5nZXRNb250aCgpKSsxXG5cdFx0XHRsZXQgeWVhciA9IHBhcnNlSW50KHJlcXVlc3RlZERhdGUuZ2V0RnVsbFllYXIoKSlcblx0XHRcdGxldCBkYXkgPSBwYXJzZUludChyZXF1ZXN0ZWREYXRlLmdldERhdGUoKSlcblx0XHRcdGxldCB0aW1lID0gcGFyc2VJbnQodGhpcy5zdGF0ZS50aW1lU2xvdClcblx0XHRcdGxldCBkYXRlRm9ybWF0ID0gYCR7eWVhcn0tJHttb250aD49MTA/bW9udGg6YDAke21vbnRofWB9LSR7ZGF5Pj0xMD9kYXk6YDAke2RheX1gfVQke3RpbWU+PTEwP2Ake3RpbWV9YDpgMCR7dGltZX1gfTowMGBcblx0XHRcdGZvcm1EYXRhLnJlcXVlc3RlZF9kYXRlX3RpbWUgPSBkYXRlRm9ybWF0XG5cdFx0XHRmb3JtRGF0YS50aXRsZSA9IHRoaXMuc3RhdGUudGltZVNsb3QgJiYgdGhpcy5zdGF0ZS50aW1lU2xvdC5pbmNsdWRlcygnQU0nKT8nQU0nOidQTSdcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wcm9wcy5ob3NwaXRhbF9pZCkge1xuXHRcdFx0Zm9ybURhdGEuaG9zcGl0YWwgPSB0aGlzLnByb3BzLmhvc3BpdGFsX2lkXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucHJvcHMucHJvY2VkdXJlX2lkKSB7XG5cdFx0XHRmb3JtRGF0YS5pcGRfcHJvY2VkdXJlID0gdGhpcy5wcm9wcy5wcm9jZWR1cmVfaWRcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wcm9wcy5kb2N0b3JfaWQpIHtcblx0XHRcdGZvcm1EYXRhLmRvY3RvciA9IHBhcnNlSW50KHRoaXMucHJvcHMuZG9jdG9yX2lkKVxuXHRcdH1cblxuXHRcdGxldCB1dG1fdGFncyA9IHtcblx0XHRcdHV0bV9zb3VyY2U6IHBhcnNlZC51dG1fc291cmNlIHx8ICcnLFxuXHRcdFx0dXRtX21lZGl1bTogcGFyc2VkLnV0bV9tZWRpdW0gfHwgJycsXG5cdFx0XHR1dG1fdGVybTogcGFyc2VkLnV0bV90ZXJtIHx8ICcnLFxuXHRcdFx0dXRtX2NhbXBhaWduOiBwYXJzZWQudXRtX2NhbXBhaWduIHx8ICcnLFxuXHRcdFx0cmVmZXJyZXI6IGRvY3VtZW50LnJlZmVycmVyIHx8ICcnLFxuXHRcdFx0Z2NsaWQ6IHBhcnNlZC5nY2xpZCB8fCAnJ1xuXHRcdH1cblxuXHRcdGZvcm1EYXRhLmRhdGEgPSB7fVxuXHRcdGZvcm1EYXRhLmRhdGEudXRtX3RhZ3MgPSB1dG1fdGFnc1xuXHRcdGZvcm1EYXRhLmRhdGEudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcblx0XHRmb3JtRGF0YS5kYXRhLmZvcm1Tb3VyY2UgPSB0aGlzLnByb3BzLmZvcm1Tb3VyY2UgfHwgJ1BvcHVwTGVhZEZvcm0nXG5cdFx0aWYgKHRoaXMucHJvcHMuc291cmNlVGFnKSB7XG5cdFx0XHRmb3JtRGF0YS5zb3VyY2UgPSB0aGlzLnByb3BzLnNvdXJjZVRhZ1xuXHRcdH1cblxuXHRcdFxuXG5cdFx0dGhpcy5wcm9wcy5zdWJtaXRTZWNvbmRJUERGb3JtKGZvcm1EYXRhLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24sIChlcnJvciwgcmVzcG9uc2UpID0+IHtcblx0XHRcdGlmICghZXJyb3IgJiYgcmVzcG9uc2UpIHtcblx0XHRcdFx0Ly9TYXZlIHBvcHVwIGRhdGEgZm9yIGRvY3RvciBwcm9maWxlIGRhdGEgYXV0byBmaWxsZWRcblx0XHRcdFx0aWYodGhpcy5wcm9wcy5pc19ib29raW5nX3BhZ2Upe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuc2F2ZUlwZFBvcHVwRGF0YSgncG9wdXAyJyxmb3JtRGF0YSlcdFxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSVBELXBvcHVwLWxlYWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IHRoaXMucHJvcHMuZmlyc3RMZWFkSWQgfHwgJycsICdldmVudCc6ICdJUEQtcG9wdXAtbGVhZCcsIHNlbGVjdGVkSWQ6ICcnLCAnaG9zcGl0YWxJZCc6ICcnLCAnZnJvbSc6ICdsZWFkRm9ybScsICdtb2JpbGVObyc6dGhpcy5zdGF0ZS5waG9uZV9udW1iZXIsICdmb3JtTm8nOicyJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cblx0XHRcdFx0dGhpcy5wcm9wcy5pcGRQb3B1cEZpcmVkKClcblxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiWW91ciByZXF1ZXN0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNlc3NmdWxseVwiIH0pXG5cdFx0XHRcdH0sIDUwMClcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSB0cnkgYWZ0ZXIgc29tZSB0aW1lXCIgfSlcblx0XHRcdFx0fSwgNTAwKVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5wcm9wcy5zZWNvbmRJcGRGb3JtU3VibWl0dGVkKGZvcm1EYXRhKVxuXHRcdH0pXG5cblx0fVxuXG5cdGNsb3NlUG9wVXBDbGlja2VkKHNraXA9ZmFsc2UpIHtcblx0XHRpZihza2lwKSB7XG5cdFx0XHRsZXQgZ3RtRGF0YSA9IHtcblx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJUEQtMnBvcHVwLXNraXAtY2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnSVBELTJwb3B1cC1za2lwLWNsaWNrZWQnLCAnZm9ybU5vJzonMidcblx0XHRcdH1cblx0XHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdFx0fVxuXHRcdHRoaXMucHJvcHMuc2Vjb25kSXBkRm9ybVN1Ym1pdHRlZCgpXG5cdH1cblxuXHRpc0RhdGVTZWxlY3RlZCgpe1xuXHRcdHRoaXMuY2hpbGQuZ2V0U2VsZWN0ZWREYXRlKClcblx0fVxuXG5cdGdldFNlbGVjdGVkRGF0ZShkYXRlKXtcblx0XHRpZighZGF0ZSB8fCAhZGF0ZS55ZWFyIHx8ICFkYXRlLm1vbnRoIHx8ICFkYXRlLmRheSl7XG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHR9ZWxzZSB7XG5cdFx0XHRsZXQgZG9iID0gYCR7ZGF0ZS55ZWFyfS0ke2RhdGUubW9udGg+PTEwP2RhdGUubW9udGg6YDAke2RhdGUubW9udGh9YH0tJHtkYXRlLmRheT49MTA/ZGF0ZS5kYXk6YDAke2RhdGUuZGF5fWB9YFxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZG9iOmRvYn0pXG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0fVxuXG5cdGdldFRpbWVTbG90cygpe1xuXHRcdGxldCBvZmZzZXQgPSAgbmV3IERhdGUoKVxuXHRcdGxldCBjdXJyZW50VGltZSA9IDhcblx0XHRsZXQgdGltZVNsb3QgPSBbXVxuXHRcdGlmKG5ldyBEYXRlKHRoaXMuc3RhdGUucmVxdWVzdGVkX2RhdGVfZm9ybWF0KS50b0RhdGVTdHJpbmcoKSA9PSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpKXtcblx0XHRcdGN1cnJlbnRUaW1lID0gcGFyc2VJbnQobmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSkgKyAxXG5cdFx0fVxuXHRcdGZvcih2YXIgaT1jdXJyZW50VGltZSA7aTw9MjA7aSsrKXtcblx0XHRcdG9mZnNldC5zZXRIb3VycyhpKVxuXHRcdFx0dGltZVNsb3QucHVzaCg8b3B0aW9uIGtleT17aX0gZGVmYXVsdFZhbHVlPVwiXCI+e29mZnNldC50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pfTwvb3B0aW9uPilcblx0XHR9XG5cdFx0aWYoIXRpbWVTbG90Lmxlbmd0aCkge1xuXHRcdFx0dGltZVNsb3QucHVzaCg8b3B0aW9uIGtleT17JzAnfSBkZWZhdWx0VmFsdWU9XCJcIj5DaG9vc2UgYW5vdGhlciBkYXRlPC9vcHRpb24+KVx0XG5cdFx0fVxuXHRcdHJldHVybiB0aW1lU2xvdFxuXHR9XG5cblx0b3BlbkRhdGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVNb2RhbDogIXRoaXMuc3RhdGUuZGF0ZU1vZGFsIH0pXG4gICAgfVxuXG4gICAgc2VsZWN0RGF0ZUZyb21DYWxlbmRhcihkYXRlKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS50b0RhdGUoKVxuICAgICAgICAgICAgbGV0IGRhdGVGb3JtYXQgPSBuZXcgRGF0ZShkYXRlKVxuICAgICAgICAgICAgZGF0ZSA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVNb2RhbDogZmFsc2UsIHJlcXVlc3RlZERhdGVGb3JtYXQ6IGRhdGUsIHJlcXVlc3RlZF9kYXRlX2Zvcm1hdDpkYXRlRm9ybWF0IH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKXtcbiAgICBcdGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxuICAgIFx0bGV0IG1vbnRoID0gcGFyc2VJbnQoZGF0ZS5nZXRNb250aCgpKSsxXG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKVxuICAgIFx0cmV0dXJuIGAke2RheT49MTA/ZGF5OmAwJHtkYXl9YH0tJHttb250aD49MTA/bW9udGg6YDAke21vbnRofS0ke2RhdGUuZ2V0RnVsbFllYXIoKX1gfWBcbiAgICB9XG5cbiAgICBoYW5kbGVJbnV0KHR5cGUsIGV2ZW50KSB7XG4gICAgXHR0cnl7XG5cdCAgICBcdGxldCBzZWFyY2hfc3RyaW5nID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKClcblx0ICAgIFx0bGV0IGZpbHRlcmVkX2RvY3Rvcl9saXN0ID0gW11cblx0ICAgIFx0dGhpcy5wcm9wcy5hbGxfZG9jdG9ycy5tYXAoKGRvY3Rvcik9Pntcblx0ICAgIFx0XHRsZXQgZG9jdG9yX25hbWUgPSAoZG9jdG9yLm5hbWUpLnRvTG93ZXJDYXNlKClcblx0ICAgIFx0XHRpZihkb2N0b3JfbmFtZS5pbmNsdWRlcyhzZWFyY2hfc3RyaW5nKSl7XG5cdCAgICBcdFx0XHRsZXQgaW5kZXggPSBkb2N0b3JfbmFtZS5pbmRleE9mKHNlYXJjaF9zdHJpbmcpXG5cdCAgICBcdFx0XHRmaWx0ZXJlZF9kb2N0b3JfbGlzdC5wdXNoKHtpZDogZG9jdG9yLmlkLCBuYW1lOiBkb2N0b3IubmFtZSwgcmFuazogaW5kZXh9KVxuXHQgICAgXHRcdH1cblx0ICAgIFx0fSlcblx0ICAgIFx0ZmlsdGVyZWRfZG9jdG9yX2xpc3QgPSBmaWx0ZXJlZF9kb2N0b3JfbGlzdC5zb3J0KCh4LHkpPT57XG5cdCAgICBcdFx0cmV0dXJuIHgucmFuay15LnJhbmtcblx0ICAgIFx0fSlcblx0ICAgIFx0dGhpcy5zZXRTdGF0ZSh7W3R5cGVdOiBldmVudC50YXJnZXQudmFsdWUsIGZpbHRlcmVkX2RvY3Rvcl9saXN0OiBmaWx0ZXJlZF9kb2N0b3JfbGlzdH0pXG5cdCAgICB9Y2F0Y2goZSkge1xuXG5cdCAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tEb2N0b3JMaXN0KHZhbHVlKSB7XG4gICAgXHR0aGlzLnNldFN0YXRlKHsnc2VsZWN0ZWREb2N0b3InOiB2YWx1ZSwgZmlsdGVyZWRfZG9jdG9yX2xpc3Q6W10sIHNlYXJjaF9kb2N0b3I6IHZhbHVlLCBzaG93RG9jdG9yU2VhcmNoUG9wdXA6IGZhbHNlfSkgXG4gICAgfVxuXG4gICAgb25Gb2N1c0luKCl7XG4gICAgXHR0aGlzLnNldFN0YXRlKHsgZmlsdGVyZWRfZG9jdG9yX2xpc3Q6IHRoaXMucHJvcHMuYWxsX2RvY3RvcnMsIHNlYXJjaF9kb2N0b3I6JycsIHNob3dEb2N0b3JTZWFyY2hQb3B1cDogdHJ1ZSB9KVxuICAgIH1cblxuICAgIG9uRm9jdXNPdXQoKXtcbiAgICBcdHNldFRpbWVvdXQoKCk9PntcbiAgICBcdFx0dGhpcy5zZXRTdGF0ZSh7IHNlYXJjaF9kb2N0b3I6IHRoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3IsIHNob3dEb2N0b3JTZWFyY2hQb3B1cDogZmFsc2UgfSlcdFxuICAgIFx0fSw1MDApXG4gICAgXHRcbiAgICB9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG5cdFx0bGV0IGZpbHRlcmVkX2RvY3RvciA9IHRoaXMuc3RhdGUuZmlsdGVyZWRfZG9jdG9yX2xpc3RcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdC8vdGhpcy5jbG9zZVBvcFVwQ2xpY2tlZCgpXG5cdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAgaXBkLXBvcC13aWR0aFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHAtMTJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC1yZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpcGQtcG9wLWlsZFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY2xvc2VQb3BVcENsaWNrZWQoKVxuXHRcdFx0XHRcdFx0XHR9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdHsvKjxwIGNsYXNzTmFtZT1cImlwZC1uZWVkSGVscFwiPk5lZWQgaGVscCB3aXRoIGFuIGFwcG9pbnRtZW50IGF0IEZvcnRpcyBIb3NwaXRhbD88L3A+Ki99XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRvY3Rvcl9uYW1lP1xuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlwZC1uZWVkSGVscFwiPntgTmVlZCB0byBib29rIGFuIGFwcG9pbnRtZW50IHdpdGggJHt0aGlzLnByb3BzLmRvY3Rvcl9uYW1lfSAke3RoaXMucHJvcHMuaG9zcGl0YWxfbmFtZT9gYXQgJHt0aGlzLnByb3BzLmhvc3BpdGFsX25hbWV9P2A6Jyd9YH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0OnRoaXMucHJvcHMuaG9zcGl0YWxfbmFtZT9cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJpcGQtbmVlZEhlbHBcIj57YE5lZWQgaGVscCB3aXRoIGFuIGFwcG9pbnRtZW50ICR7dGhpcy5wcm9wcy5ob3NwaXRhbF9uYW1lP2BhdCAke3RoaXMucHJvcHMuaG9zcGl0YWxfbmFtZX0/YDonJ31gfTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1wb3Atc2NybFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLWlucC1zZWN0aW9uIGlwZC1zY3RuLWNobmdcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCl9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmFsbF9kb2N0b3JzICYmIHRoaXMucHJvcHMuYWxsX2RvY3RvcnMubGVuZ3RoP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1zbGVjdHMtZG9jXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPHNlbGVjdCBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3J9IG9uQ2hhbmdlPXsgKGUpPT4gdGhpcy5zZXRTdGF0ZSh7J3NlbGVjdGVkRG9jdG9yJzogZS50YXJnZXQudmFsdWV9KSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBkZWZhdWx0VmFsdWU9XCJcIj4qU2VsZWN0IERvY3Rvcjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmFsbF9kb2N0b3JzLm1hcCgoZG9jdG9yLCBrZXkpPT57XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPG9wdGlvbiBrZXk9e2tleX0gaWQ9e2RvY3Rvci5pZH0gZGVmYXVsdFZhbHVlPVwiXCI+e2RvY3Rvci5uYW1lfTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PiovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdTZWFyY2ggRG9jdG9ycycgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW51dC5iaW5kKHRoaXMsICdzZWFyY2hfZG9jdG9yJyl9IG9uRm9jdXMgPSB7dGhpcy5vbkZvY3VzSW4uYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLm9uRm9jdXNPdXQuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoX2RvY3Rvcn0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuc2hvd0RvY3RvclNlYXJjaFBvcHVwP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Mtc3JjaC1mbHRyXCIgb25DbGljaz17KGUpPT5lLnByZXZlbnREZWZhdWx0KCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5maWx0ZXJlZF9kb2N0b3JfbGlzdCAmJiB0aGlzLnN0YXRlLmZpbHRlcmVkX2RvY3Rvcl9saXN0Lmxlbmd0aD9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmZpbHRlcmVkX2RvY3Rvcl9saXN0Lm1hcCgoZGF0YSwga2V5KT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxwIGNsYXNzTmFtZT1cImN1cnNvci1wbnRyXCIga2V5PXtrZXl9IGlkPXtkYXRhLmlkfSBvbkNsaWNrPXsoZSk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNsaWNrRG9jdG9yTGlzdChkYXRhLm5hbWUpfSB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZGF0YS5uYW1lfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDo8cD5ObyByZXN1bHQgZm91bmQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+OicnXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5tLWxzdC1pbnB1dGNudCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlbC1pcGQtaW5wdXQtY250XCIgc3R5bGU9e3t3aWR0aDogJzQ4JScgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYXBudC1kb2MtZHRsIHAtMFwiPlByZWZlcnJlZCBEYXRlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FsbmV4dC5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwic2xjdC1pbnB0LWNudG5yLWZjc1wiIG9uQ2xpY2s9e3RoaXMub3BlbkRhdGVNb2RhbC5iaW5kKHRoaXMpfSBvbkNoYW5nZT17KCk9Pnt9fSB2YWx1ZT17dGhpcy5zdGF0ZS5yZXF1ZXN0ZWREYXRlRm9ybWF0fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0ZU1vZGFsID8gPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1vdmVybGF5XCI+PGRpdiBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1tb2RhbFwiPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVyPXtmYWxzZX1cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZT17KGRhdGUpID0+IHtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5kaWZmKG1vbWVudCgobmV3IERhdGUpKSwgJ2RheXMnKSA8IDAgfHwgZGF0ZS5kaWZmKG1vbWVudCgobmV3IERhdGUpKSwgJ2RheXMnKSA+IDMwXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvZGF5XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5zZWxlY3REYXRlRnJvbUNhbGVuZGFyLmJpbmQodGhpcyl9XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+IDogXCJcIlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsLWlwZC1pbnB1dC1jbnRcIiBzdHlsZT17e3dpZHRoOiAnNDglJ319PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFwbnQtZG9jLWR0bCBwLTBcIj5QcmVmZXJyZWQgVGltZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhbG5leHQuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtc2xlY3RzLWRvY1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWU9XCJzbGN0LWlwbi10aVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS50aW1lU2xvdH0gb25DaGFuZ2U9eyAoZSk9PiB0aGlzLnNldFN0YXRlKHsndGltZVNsb3QnOiBlLnRhcmdldC52YWx1ZX0pIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gZGVmYXVsdFZhbHVlPVwiXCI+KlNlbGVjdCBUaW1lPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmdldFRpbWVTbG90cygpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtZG9iLWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtZGItaGRuZ1wiPipEYXRlIG9mIGJpcnRoOjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGF0ZVNlbGVjdG9yIGdldFNlbGVjdGVkRGF0ZT17dGhpcy5nZXRTZWxlY3RlZERhdGUuYmluZCh0aGlzKX0gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qPGRpdiBjbGFzc05hbWU9XCJpcGQtbGVhZC10ZXh0YXJlYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCIqWW91ciBDaXR5XCIgc3R5bGU9e3sgZm9udFdlaWdodDogNTAwIH19IHJvd3M9JzEnIG5hbWU9J2NvbW1lbnRzJz48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuYWxsX2NpdGllcyAmJiB0aGlzLnByb3BzLmFsbF9jaXRpZXMubGVuZ3RoP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1zbGVjdHMtZG9jXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDaXR5fSBvbkNoYW5nZT17IChlKT0+IHRoaXMuc2V0U3RhdGUoeydzZWxlY3RlZENpdHknOiBlLnRhcmdldC52YWx1ZX0pIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8b3B0aW9uIHZhbHVlPVwiXCI+KlNlbGVjdCBDaXR5PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQqL317XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuYWxsX2NpdGllcy5tYXAoKGNpdHksIGtleSk9PntcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8b3B0aW9uIGtleT17a2V5fSAgaWQ9e2NpdHkuaWR9IGRlZmF1bHRWYWx1ZT1cIlwiPntjaXR5Lm5hbWV9PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PjonJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJza2lwLWJ0bi1zZ25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpcGQtaW5wLXNibXRcIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdENsaWNrZWQuYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY2xvc2VQb3BVcENsaWNrZWQodHJ1ZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+U2tpcDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG5cblx0Y29uc3Qge1xuXHRcdHNlbGVjdGVkTG9jYXRpb25cblx0fSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuXHRyZXR1cm4ge1xuXHRcdHNlbGVjdGVkTG9jYXRpb25cblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblxuXHRyZXR1cm4ge1xuXHRcdHN1Ym1pdFNlY29uZElQREZvcm06IChmb3JtRGF0YSwgc2VsZWN0ZWRMb2NhdGlvbiwgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdFNlY29uZElQREZvcm0oZm9ybURhdGEsIHNlbGVjdGVkTG9jYXRpb24sIGNiKSksXG5cdFx0aXBkUG9wdXBGaXJlZDogKCk9PiBkaXNwYXRjaChpcGRQb3B1cEZpcmVkKCkpLFxuXHRcdHNhdmVJcGRQb3B1cERhdGE6ICh0eXBlLCBkYXRhKSA9PiBkaXNwYXRjaChzYXZlSXBkUG9wdXBEYXRhKHR5cGUsIGRhdGEpKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKElwZERvY3RvckNpdHlQb3B1cCkiXSwic291cmNlUm9vdCI6IiJ9