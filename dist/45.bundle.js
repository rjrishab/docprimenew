(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./dev/js/components/insurance/insuranceFamily.js":
/*!********************************************************!*\
  !*** ./dev/js/components/insurance/insuranceFamily.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _insurancePopup = __webpack_require__(/*! ./insurancePopup.js */ "./dev/js/components/insurance/insurancePopup.js");

var _insurancePopup2 = _interopRequireDefault(_insurancePopup);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "./node_modules/rc-calendar/es/index.js");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _insuranceProofs = __webpack_require__(/*! ./insuranceProofs.js */ "./dev/js/components/insurance/insuranceProofs.js");

var _insuranceProofs2 = _interopRequireDefault(_insuranceProofs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var InsuranceOthers = function (_React$Component) {
	_inherits(InsuranceOthers, _React$Component);

	function InsuranceOthers(props) {
		_classCallCheck(this, InsuranceOthers);

		var _this = _possibleConstructorReturn(this, (InsuranceOthers.__proto__ || Object.getPrototypeOf(InsuranceOthers)).call(this, props));

		_this.state = {
			name: '',
			last_name: '',
			middle_name: '',
			gender: '',
			dob: '',
			id: '',
			relation: '',
			title: '',
			member_type: '',
			userProfiles: {},
			showPopup: false,
			setDefault: false,
			profile_id: null,
			only_adult: false,
			// select_profile_disable:false,
			// show_lname: this.props.no_lname,
			// show_lname_flag:this.props.no_lname,
			dateModal: false,
			no_lname: false,
			selectedDateSpan: new Date(),
			is_change: false,
			year: null,
			mnth: null,
			day: null
		};
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(InsuranceOthers, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var profile = void 0;
			if (this.props.is_endorsement) {
				if (Object.keys(this.props.self_data_values).length > 0 && this.props.user_data.length > 0) {
					profile = Object.assign({}, this.props.self_data_values[this.props.user_data[0].id]);
					var oldDate = void 0;
					if (Object.keys(profile).length > 0 && profile.dob) {
						oldDate = profile.dob.split('-');
						this.setState({ year: oldDate[0], mnth: oldDate[2], day: oldDate[1] }, function () {
							_this2.populateDates(_this2.props.member_id, true);
						});
					}
					this.setState(_extends({}, profile), function () {
						_this2.handleSubmit(true);
					});
				} else {
					var _oldDate = void 0;
					if (this.props.user_data && this.props.user_data.length > 0) {
						if (this.props.user_data[0].relation == 'spouse') {
							this.setState({ only_adult: true });
						}
						if (this.props.user_data && this.props.user_data[0].dob) {
							_oldDate = this.props.user_data[0].dob.split('-');
							this.setState({ year: _oldDate[0], mnth: _oldDate[2], day: _oldDate[1] }, function () {
								_this2.populateDates(_this2.props.member_id, true);
							});
						}
						this.setState(_extends({}, this.props.user_data[0], { name: this.props.user_data[0].first_name, member_type: this.props.member_type, profile_id: this.props.user_data[0].profile, is_change: false }), function () {
							_this2.handleSubmit(true);
							// this.populateDates(this.props.member_id,true)
						});
					}
				}
			} else {
				if (!this.state.year && !this.state.mnth && !this.state.mnth) {
					this.populateDates(this.props.member_id, true);
				}
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			var _this3 = this;

			var self = this;
			var adult_title = void 0;
			var adult_gender = void 0;
			if (!props.is_endorsement) {
				if (props.self_data_values[props.member_id]) {
					var profile = Object.assign({}, this.props.self_data_values[this.props.member_id]);
					var nextProfile = Object.assign({}, props.self_data_values[props.member_id]);
					if (JSON.stringify(this.state) != JSON.stringify(nextProfile)) {
						this.setState(_extends({}, nextProfile));
						if (!self.state.year && !self.state.mnth && !self.state.mnth) {
							self.populateDates(props.member_id, true);
						}
					}
				} else if (props.member_id && !this.state.setDefault) {
					if (props.self_gender == 'm') {
						adult_title = 'mrs.';
						adult_gender = 'f';
					} else if (props.self_gender == 'f') {
						adult_title = 'mr.';
						adult_gender = 'm';
					}
					this.setState({ id: props.member_id, setDefault: true }, function () {
						if (_this3.props.is_child_only) {
							if (!self.state.year && !self.state.mnth && !self.state.mnth) {
								self.populateDates(self.props.member_id, true);
							}
							_this3.setState({ member_type: _this3.props.member_type }, function () {
								self.handleSubmit();
							});
						} else {
							self.populateDates(self.props.member_id, true);
							_this3.setState({ member_type: _this3.props.member_type, relation: 'spouse', title: adult_title, gender: adult_gender, only_adult: true }, function () {
								self.handleSubmit();
							});
						}
					});
				}
			}
		}
	}, {
		key: 'handleTitle',
		value: function handleTitle(field, event) {
			var _this4 = this;

			var title_value = event.target.value;
			if (this.props.is_child_only) {
				if (title_value == 'mr.') {
					this.setState({ gender: 'm', relation: 'son' });
				} else if (title_value == 'miss') {
					this.setState({ gender: 'f', relation: 'daughter' });
				}
			} else {
				if (title_value == 'mr.') {
					this.setState({ gender: 'm' });
				} else if (title_value == 'miss') {
					this.setState({ gender: 'f' });
				} else if (title_value == 'mrs.') {
					this.setState({ gender: 'f' });
				}
			}
			this.setState({ title: event.target.value }, function () {
				var self_data = _this4.state;
				self_data.is_change = true;
				_this4.props.userData('self_data', self_data);
			});
		}
	}, {
		key: 'handleChange',
		value: function handleChange(field, event) {
			this.setState(_defineProperty({}, event.target.getAttribute('data-param'), event.target.value));
		}
	}, {
		key: 'handleRelation',
		value: function handleRelation(field, event) {
			var _this5 = this;

			var relation_value = event.target.value;
			if (relation_value == 'son') {
				this.setState({ title: 'mast.', gender: 'm' });
			} else if (relation_value == 'daughter') {
				this.setState({ title: 'miss', gender: 'f' });
			}
			this.setState({
				relation: event.target.value, is_change: true
			}, function () {
				_this5.handleSubmit(true, event);
			});
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(is_endoresment) {
			var self_data = this.state;
			if (self_data.name !== '') {
				if (self_data.name.length > 50) {
					self_data.name = self_data.name.slice(0, 50);
				}
			}
			if (self_data.middle_name !== '') {
				if (self_data.middle_name.length > 50) {
					self_data.middle_name = self_data.middle_name.slice(0, 50);
				}
			}
			if (self_data.last_name !== '') {
				if (self_data.last_name.length > 50) {
					self_data.last_name = self_data.last_name.slice(0, 50);
				}
			}
			if (!is_endoresment) {
				self_data.is_change = true;
			}
			this.props.userData('self_data', self_data);
		}
	}, {
		key: 'getTodayDate',
		value: function getTodayDate() {
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth() + 1;
			var yyyy = today.getFullYear();

			if (mm < 10) {
				mm = '0' + mm;
			}
			if (dd < 10) {
				dd = '0' + dd;
			}
			today = yyyy + '-' + dd + '-' + mm;
			return today;
		}
	}, {
		key: 'togglePopup',
		value: function togglePopup(newProfileid, member_id, newProfile) {
			var _this6 = this;

			var oldDate = void 0;
			var finalDate = void 0;
			if (newProfileid !== '') {
				if (this.props.is_child_only) {
					if (newProfile.gender == 'm') {
						this.setState({ title: 'mast.', relation: 'son' });
					} else if (newProfile.gender == 'f') {
						this.setState({ title: 'miss', relation: 'daughter' });
					}
				} else {
					if (newProfile.gender == 'm') {
						this.setState({ title: 'mr.', relation: 'spouse' });
					} else if (newProfile.gender == 'f') {
						this.setState({ title: 'mrs.', relation: 'spouse' });
					}
				}
				if (newProfile && newProfile.dob) {
					oldDate = newProfile.dob.split('-');
					console.log(newProfile.dob);
					console.log(oldDate);
					this.setState({ year: oldDate[0], mnth: oldDate[1], day: oldDate[2] }, function () {
						_this6.populateDates(newProfileid, false);
						finalDate = _this6.state.year + '-' + _this6.state.mnth + '-' + _this6.state.day;
						_this6.setState({ dob: finalDate });
					});
				} else {
					this.populateDates(newProfileid, false);
				}

				this.props.selectInsuranceProfile(newProfileid, member_id, newProfile, this.props.param_id); // select from profile option
				this.setState({
					showPopup: !this.state.showPopup,
					profile_id: newProfileid,
					id: newProfileid
				}, function () {
					_this6.handleSubmit(false);
				});
			} else {
				this.setState({ showPopup: !this.state.showPopup });
			}
		}
	}, {
		key: 'handleGender',
		value: function handleGender(field, event) {
			var _this7 = this;

			var gender_value = event.target.value;
			if (this.props.is_child_only) {
				if (gender_value == 'm') {
					this.setState({ title: 'mast.', relation: 'son' });
				} else if (gender_value == 'f') {
					this.setState({ title: 'miss', relation: 'daughter' });
				}
			} else {
				if (gender_value == 'm') {
					this.setState({ title: 'mr.' });
				} else if (gender_value == 'f') {
					this.setState({ title: 'mrs.' });
				}
			}
			this.setState({
				gender: event.target.value, is_change: true
			}, function () {
				_this7.handleSubmit(false, event);
			});
		}
	}, {
		key: 'openDateModal',
		value: function openDateModal() {
			this.setState({ dateModal: !this.state.dateModal });
		}
	}, {
		key: 'selectDateFromCalendar',
		value: function selectDateFromCalendar(date) {
			var _this8 = this;

			if (date) {
				date = date.toDate();
				var date = new Date(date);
				var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
				var day = ("0" + date.getDate()).slice(-2);
				var actual_date = [date.getFullYear(), mnth, day].join("-");
				this.setState({ selectedDateSpan: actual_date, dateModal: false, currentDate: new Date(date).getDate(), dob: actual_date }, function () {
					_this8.handleSubmit(false);
				});
			} else {
				this.setState({ dateModal: false });
			}
		}
	}, {
		key: 'handleNameCharacters',
		value: function handleNameCharacters(field, event) {
			if (field == 'name') {
				if (this.state.name.length == 50) {
					event.preventDefault();
				}
			} else if (field == 'last_name') {
				if (this.state.last_name.length == 50) {
					event.preventDefault();
				}
			} else if (field == 'middle_name') {
				if (this.state.middle_name.length == 50) {
					event.preventDefault();
				}
			}
		}
	}, {
		key: 'handleLastname',
		value: function handleLastname(event) {
			var _this9 = this;

			this.setState({ no_lname: !this.state.no_lname }, function () {
				_this9.handleSubmit(false, event);
			});
		}
	}, {
		key: 'hideSelectProfilePopup',
		value: function hideSelectProfilePopup() {
			this.setState({
				showPopup: false
			});
		}
	}, {
		key: 'daysInMonth',
		value: function daysInMonth(month, year) {
			return new Date(year, month, 0).getDate();
		}
	}, {
		key: 'populateDates',
		value: function populateDates(member_id, toCreateOptions) {
			var age_threshold = void 0;
			if (this.props.selected_plan && this.props.selected_plan.adult_count) {
				if (this.props.is_child_only) {
					age_threshold = this.props.selected_plan.threshold[0].child_max_age;
				} else {
					age_threshold = this.props.selected_plan.threshold[0].max_age;
				}
			}
			var default_months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
			var self = this;
			var daydropdown = document.getElementById('daydropdown_' + member_id),
			    monthdropdown = document.getElementById('monthdropdown_' + member_id),
			    yeardropdown = document.getElementById('yeardropdown_' + member_id);

			var today = new Date(),
			    day = today.getUTCDate(),
			    month = today.getUTCMonth(),
			    year = today.getUTCFullYear() - age_threshold,
			    currentYear = today.getUTCFullYear(),
			    daysInCurrMonth = this.daysInMonth(month, year);
			if (daydropdown && monthdropdown && yeardropdown) {

				daydropdown.innerHTML = '';
				monthdropdown.innerHTML = '';
				yeardropdown.innerHTML = '';

				var opt_dd = document.createElement('option');
				opt_dd.value = 'DD';
				opt_dd.text = 'DD';
				opt_dd.hidden = true;
				daydropdown.appendChild(opt_dd);
				var opt_mm = document.createElement('option');
				opt_mm.value = 'MM';
				opt_mm.text = 'MM';
				opt_mm.hidden = true;
				monthdropdown.appendChild(opt_mm);
				var opt_yy = document.createElement('option');
				opt_yy.value = 'YYYY';
				opt_yy.text = 'YYYY';
				opt_yy.hidden = true;
				yeardropdown.appendChild(opt_yy);

				// Day
				for (var i = 1; i <= daysInCurrMonth; i++) {
					var opt = document.createElement('option');
					if (i <= 9) {
						opt.value = '0' + i;
						opt.text = '0' + i;
					} else {
						opt.value = i;
						opt.text = i;
					}
					daydropdown.appendChild(opt);
				}

				// Month
				for (var i = 0; i < 12; i++) {
					var opt = document.createElement('option');
					opt.value = default_months[i];
					opt.text = default_months[i];
					monthdropdown.appendChild(opt);
				}

				// Year
				for (var i = 0; i <= age_threshold; i++) {
					var opt = document.createElement('option');
					opt.value = i + year;
					opt.text = i + year;
					yeardropdown.appendChild(opt);
				}

				// change handler for day
				daydropdown.onchange = function () {
					var NewSelecteddays = daydropdown.value;
					self.setState({ day: NewSelecteddays }, function () {
						self.submitDob();
					});
				};

				// Change handler for months
				monthdropdown.onchange = function () {
					var newMonth = monthdropdown.value;
					self.setState({ mnth: newMonth }, function () {
						self.submitDob();
					});
				};

				// change handler for year
				yeardropdown.onchange = function () {
					var newYear = yeardropdown.value;
					self.setState({ year: newYear }, function () {
						self.submitDob();
					});
				};
			}
		}
	}, {
		key: 'submitDob',
		value: function submitDob() {
			var self = this;
			if (self.state.day && self.state.mnth && self.state.year) {
				var finalDate = self.state.year + '-' + self.state.mnth + '-' + self.state.day;
				self.setState({
					dob: finalDate
				}, function () {
					self.handleSubmit();
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this10 = this;

			var show_createApi_keys_adult = [];
			var show_createApi_keys_child = [];
			var show_createApi_keys_child2 = [];
			var Uploaded_image_data = void 0;
			var commonMsgSpan = _react2.default.createElement(
				'span',
				{ className: 'fill-error-span' },
				this.props.errorMessages['common_message']
			);
			if (this.props.is_child_only) {
				var show_createApi_keys = [];
				if (Object.keys(this.props.createApiErrorsChild).length > 0) {
					Object.entries(this.props.createApiErrorsChild).map(function (_ref) {
						var _ref2 = _slicedToArray(_ref, 2),
						    key = _ref2[0],
						    value = _ref2[1];

						if (key != 0 && key != 1) {
							Object.entries(value).map(function (_ref3) {
								var _ref4 = _slicedToArray(_ref3, 2),
								    field_name = _ref4[0],
								    field_value = _ref4[1];

								if (key == 2) {
									show_createApi_keys_child.push(field_name);
								} else if (key == 3) {
									show_createApi_keys_child2.push(field_name);
								}
							});
						}
					});
				}
			} else {
				if (Object.keys(this.props.createApiErrors).length > 0) {
					Object.entries(this.props.createApiErrors).map(function (_ref5) {
						var _ref6 = _slicedToArray(_ref5, 2),
						    key = _ref6[0],
						    value = _ref6[1];

						show_createApi_keys_adult.push(key);
					});
				}
			}
			var ErrorNameId = void 0;
			if (this.props.validatingNames.length > 0) {
				ErrorNameId = this.props.validatingNames[0].split('=')[1];
			}

			if (this.props.members_proofs && this.props.members_proofs.length > 0) {
				Uploaded_image_data = this.props.members_proofs.filter(function (x) {
					return x.id == _this10.props.member_id;
				});
			}
			return _react2.default.createElement(
				'div',
				{ className: 'ins-sub-forms mrt-10', id: 'member_' + this.props.member_id },
				_react2.default.createElement(
					'div',
					{ className: 'sub-form-input-data', style: { marginBottom: 10 } },
					_react2.default.createElement(
						'div',
						null,
						this.props.is_endorsement ? _react2.default.createElement(
							'p',
							{ className: 'sub-form-hed' },
							this.props.is_child_only ? 'Child ' + this.props.member_view_id : 'Spouse'
						) : _react2.default.createElement(
							'p',
							{ className: 'sub-form-hed' },
							this.props.is_child_only ? 'Child ' + (this.props.member_view_id - 1) : 'Spouse'
						)
					),
					_react2.default.createElement(
						'div',
						null,
						this.props.show_selected_profiles.length > 0 ? _react2.default.createElement(
							'div',
							{ className: 'sub-form-hed-click', onClick: function onClick() {
									return _this10.setState({
										showPopup: true, userProfiles: _this10.props.USER });
								} },
							'Select from profile',
							_react2.default.createElement('img', { src: "/assets" + "/img/rgt-arw.svg" })
						) : ''
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'widget', style: { padding: '10px' } },
					_react2.default.createElement(
						'div',
						{ className: 'col-12', style: { padding: 0 } },
						this.props.is_child_only ? _react2.default.createElement('div', null) : _react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'button',
								{ className: 'label-names-buttons ' + (this.state.title == 'mr.' ? 'btn-active' : ''), name: 'title', value: 'mr.', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mr.') },
								'Mr.'
							),
							_react2.default.createElement(
								'button',
								{ className: 'label-names-buttons ' + (this.state.title == 'mrs.' ? 'btn-active' : ''), value: 'mrs.', name: 'title', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mrs.') },
								'Mrs.'
							)
						),
						!this.props.is_child_only && this.props.validateErrors.indexOf('title') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span', style: { marginTop: '-13px' } },
							this.props.errorMessages['common_message']
						) : '',
						this.props.validateOtherErrors.indexOf('title') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span', style: { marginTop: '-13px' } },
							this.props.errorMessages['sameGenderTitle']
						) : '',
						this.props.is_child_only ? this.props.member_view_id == 2 && show_createApi_keys_child.indexOf('title') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.createApiErrorsChild[this.props.member_view_id].title[0]
						) : this.props.member_view_id == 3 && show_createApi_keys_child2.indexOf('title') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.createApiErrorsChild[this.props.member_view_id].title[0]
						) : '' : show_createApi_keys_adult.indexOf('title') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.createApiErrors.title[0]
						) : ''
					),
					_react2.default.createElement(
						'div',
						{ className: 'row no-gutters' },
						this.props.is_child_only ? _react2.default.createElement(
							'div',
							{ className: 'col-12' },
							_react2.default.createElement(
								'div',
								{ className: 'ins-form-radio' },
								_react2.default.createElement(
									'div',
									{ className: 'dtl-radio' },
									_react2.default.createElement(
										'label',
										{ className: 'container-radio' },
										'Son',
										_react2.default.createElement('input', { type: 'radio', name: 'relation_' + this.props.member_id, 'data-param': 'relation', value: 'son', checked: this.state.relation === 'son', onChange: this.handleRelation.bind(this, 'son') }),
										_react2.default.createElement('span', { className: 'doc-checkmark' })
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'dtl-radio' },
									_react2.default.createElement(
										'label',
										{ className: 'container-radio' },
										'Daughter',
										_react2.default.createElement('input', { type: 'radio', 'data-param': 'relation', name: 'relation_' + this.props.member_id, value: 'daughter', checked: this.state.relation === 'daughter', onChange: this.handleRelation.bind(this, 'daughter') }),
										_react2.default.createElement('span', { className: 'doc-checkmark' })
									)
								)
							),
							this.props.validateErrors.indexOf('relation') > -1 ? _react2.default.createElement(
								'span',
								{ className: 'fill-error-span', style: { marginTop: '-13px' } },
								this.props.errorMessages['common_message']
							) : ''
						) : '',
						_react2.default.createElement(
							'div',
							{ className: 'col-6' },
							_react2.default.createElement(
								'div',
								{ className: 'ins-form-group inp-margin-right ' },
								_react2.default.createElement('input', { type: 'text', style: { 'textTransform': 'capitalize' }, id: 'name_' + this.props.member_id, className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('name') > -1 || ErrorNameId == this.props.member_id ? 'fill-error' : ''), required: true, autoComplete: 'first_name', name: 'name', 'data-param': 'name', value: this.state.name, onChange: this.handleChange.bind(this, 'name'), onBlur: this.handleSubmit.bind(this, false), onKeyPress: this.handleNameCharacters.bind(this, 'name') }),
								_react2.default.createElement(
									'label',
									{ className: 'form-control-placeholder', htmlFor: 'name_' + this.props.member_id },
									_react2.default.createElement('span', { className: 'labelDot' }),
									'First Name'
								),
								_react2.default.createElement('img', { src: "/assets" + "/img/user-01.svg" })
							),
							this.props.is_child_only ? this.props.member_view_id == 2 && show_createApi_keys_child.indexOf('first_name') > -1 ? _react2.default.createElement(
								'span',
								{ className: 'fill-error-span' },
								this.props.errorMessages['max_character']
							) : this.props.member_view_id == 3 && show_createApi_keys_child2.indexOf('first_name') > -1 ? _react2.default.createElement(
								'span',
								{ className: 'fill-error-span' },
								this.props.errorMessages['max_character']
							) : '' : show_createApi_keys_adult.indexOf('first_name') > -1 ? _react2.default.createElement(
								'span',
								{ className: 'fill-error-span' },
								this.props.errorMessages['max_character']
							) : '',
							this.props.validateErrors.indexOf('name') > -1 ? commonMsgSpan : '',
							ErrorNameId == this.props.member_id ? _react2.default.createElement(
								'span',
								{ className: 'fill-error-span', style: { width: '320px' } },
								this.props.errorMessages['sameName']
							) : ''
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-6' },
							_react2.default.createElement(
								'div',
								{ className: 'ins-form-group inp-margin-right ' },
								_react2.default.createElement('input', { type: 'text', style: { 'textTransform': 'capitalize' }, id: 'middle_name_' + this.props.member_id, className: 'form-control ins-form-control', required: true, autoComplete: 'middle_name', name: 'middle_name', value: this.state.no_lname ? '' : this.state.middle_name, 'data-param': 'middle_name', onChange: this.handleChange.bind(this, 'middle_name'), onBlur: this.handleSubmit.bind(this, false), disabled: this.state.no_lname ? 'disabled' : "", onKeyPress: this.handleNameCharacters.bind(this, 'middle_name') }),
								_react2.default.createElement(
									'label',
									{ className: 'form-control-placeholder', htmlFor: 'middle_name_' + this.props.member_id },
									'Middle Name'
								),
								_react2.default.createElement('img', { src: "/assets" + "/img/user-01.svg" })
							),
							this.props.is_child_only ? this.props.member_view_id == 2 && show_createApi_keys_child.indexOf('middle_name') > -1 ? _react2.default.createElement(
								'span',
								{ className: 'fill-error-span' },
								this.props.errorMessages['max_character']
							) : this.props.member_view_id == 3 && show_createApi_keys_child2.indexOf('middle_name') > -1 ? _react2.default.createElement(
								'span',
								{ className: 'fill-error-span' },
								this.props.errorMessages['max_character']
							) : '' : show_createApi_keys_adult.indexOf('middle_name') > -1 ? _react2.default.createElement(
								'span',
								{ className: 'fill-error-span' },
								this.props.errorMessages['max_character']
							) : ''
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-6' },
							_react2.default.createElement(
								'div',
								{ className: 'ins-form-group ins-form-group inp-margin-right  ' },
								_react2.default.createElement('input', { type: 'text', style: { 'textTransform': 'capitalize' }, id: 'last_name_' + this.props.member_id, className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('last_name') > -1 ? 'fill-error' : ''), required: true, autoComplete: 'last_name', name: 'last_name', 'data-param': 'last_name', value: this.state.no_lname ? '' : this.state.last_name, onChange: this.handleChange.bind(this, 'last_name'), onBlur: this.handleSubmit.bind(this, false), disabled: this.state.no_lname ? 'disabled' : "", onKeyPress: this.handleNameCharacters.bind(this, 'last_name') }),
								_react2.default.createElement(
									'label',
									{ className: 'form-control-placeholder', htmlFor: 'last_name_' + this.props.member_id },
									_react2.default.createElement('span', { className: 'labelDot' }),
									'Last Name'
								),
								_react2.default.createElement('img', { src: "/assets" + "/img/user-01.svg" })
							),
							this.props.is_child_only ? this.props.member_view_id == 2 && show_createApi_keys_child.indexOf('last_name') > -1 ? _react2.default.createElement(
								'span',
								{ className: 'fill-error-span' },
								this.props.errorMessages['max_character']
							) : this.props.member_view_id == 3 && show_createApi_keys_child2.indexOf('last_name') > -1 ? _react2.default.createElement(
								'span',
								{ className: 'fill-error-span' },
								this.props.errorMessages['max_character']
							) : '' : show_createApi_keys_adult.indexOf('last_name') > -1 ? _react2.default.createElement(
								'span',
								{ className: 'fill-error-span' },
								this.props.errorMessages['max_character']
							) : '',
							this.props.validateErrors.indexOf('last_name') > -1 ? commonMsgSpan : ''
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-12', style: { marginTop: '-10px' } },
							_react2.default.createElement(
								'div',
								{ className: 'member-dtls-chk' },
								_react2.default.createElement(
									'label',
									{ className: 'ck-bx fw-500', onChange: this.handleLastname.bind(this), style: { fontSize: 12, paddingLeft: 24, lineHeight: '16px' } },
									'I dont have a last name',
									_react2.default.createElement('input', { type: 'checkbox', checked: this.state.no_lname, value: 'on' }),
									_react2.default.createElement('span', { className: 'checkmark small-checkmark' })
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-12' },
							_react2.default.createElement(
								'div',
								{ className: 'ins-form-radio' },
								this.props.is_child_only ? _react2.default.createElement('div', { className: 'ins-form-radio' }) : _react2.default.createElement(
									'div',
									{ className: 'ins-form-radio' },
									_react2.default.createElement(
										'div',
										{ className: 'dtl-radio' },
										_react2.default.createElement(
											'label',
											{ className: 'container-radio' },
											'Male',
											_react2.default.createElement('input', { type: 'radio', name: 'gender_' + this.props.member_id, 'data-param': 'gender', value: 'm', checked: this.state.gender === 'm', onChange: this.handleGender.bind(this, 'm') }),
											_react2.default.createElement('span', { className: 'doc-checkmark' })
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'dtl-radio' },
										_react2.default.createElement(
											'label',
											{ className: 'container-radio' },
											'Female',
											_react2.default.createElement('input', { type: 'radio', 'data-param': 'gender', name: 'gender_' + this.props.member_id, value: 'f', checked: this.state.gender === 'f', onChange: this.handleGender.bind(this, 'f') }),
											_react2.default.createElement('span', { className: 'doc-checkmark' })
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'dtl-radio' },
										_react2.default.createElement(
											'label',
											{ className: 'container-radio' },
											'Others',
											_react2.default.createElement('input', { type: 'radio', 'data-param': 'gender', name: 'gender_' + this.props.member_id, value: 'o', checked: this.state.gender === 'o', onChange: this.handleGender.bind(this, 'o') }),
											_react2.default.createElement('span', { className: 'doc-checkmark' })
										)
									)
								)
							),
							!this.props.is_child_only && this.props.validateErrors.indexOf('gender') > -1 ? commonMsgSpan : '',
							this.props.validateOtherErrors.indexOf('gender') > -1 ? _react2.default.createElement(
								'span',
								{ className: 'fill-error-span' },
								this.props.errorMessages['shouldGenderTitle']
							) : ''
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-12' },
							_react2.default.createElement(
								'div',
								{ className: 'ins-form-group mb-0' },
								_react2.default.createElement(
									'label',
									{ className: 'form-control-placeholder datePickerLabel', htmlFor: 'ins-date' },
									'*Date of birth'
								),
								_react2.default.createElement('img', { src: "/assets" + "/img/calendar-01.svg" }),
								_react2.default.createElement(
									'div',
									{ className: 'dob-select-div d-flex align-items-center' },
									_react2.default.createElement(
										'div',
										{ className: 'dob-select d-flex align-items-center' },
										_react2.default.createElement(
											'select',
											{ id: 'daydropdown_' + this.props.member_id, value: this.state.day },
											_react2.default.createElement(
												'option',
												{ hidden: true },
												'DD'
											)
										),
										_react2.default.createElement('img', { className: 'dob-down-icon', style: { right: '4px' }, src: '/assets/img/customer-icons/dropdown-arrow.svg' })
									),
									_react2.default.createElement(
										'div',
										{ className: 'dob-select d-flex align-items-center' },
										_react2.default.createElement(
											'select',
											{ id: 'monthdropdown_' + this.props.member_id, value: this.state.mnth },
											_react2.default.createElement(
												'option',
												{ hidden: true },
												'MM'
											)
										),
										_react2.default.createElement('img', { className: 'dob-down-icon', style: { right: '4px' }, src: '/assets/img/customer-icons/dropdown-arrow.svg' })
									),
									_react2.default.createElement(
										'div',
										{ className: 'dob-select d-flex align-items-center' },
										_react2.default.createElement(
											'select',
											{ id: 'yeardropdown_' + this.props.member_id, value: this.state.year },
											_react2.default.createElement(
												'option',
												{ hidden: true },
												'YYYY'
											)
										),
										_react2.default.createElement('img', { className: 'dob-down-icon', style: { right: '3px' }, src: '/assets/img/customer-icons/dropdown-arrow.svg' })
									)
								)
							),
							this.props.is_child_only ? this.props.member_view_id == 2 && show_createApi_keys_child.indexOf('dob') > -1 ? _react2.default.createElement(
								'span',
								{ style: { marginTop: '0px' }, className: 'fill-error-span' },
								this.props.createApiErrorsChild[this.props.member_view_id].dob[0]
							) : this.props.member_view_id == 3 && show_createApi_keys_child2.indexOf('dob') > -1 ? _react2.default.createElement(
								'span',
								{ style: { marginTop: '0px' }, className: 'fill-error-span' },
								this.props.createApiErrorsChild[this.props.member_view_id].dob[0]
							) : '' : show_createApi_keys_adult.indexOf('dob') > -1 ? _react2.default.createElement(
								'span',
								{ style: { marginTop: '0px' }, className: 'fill-error-span' },
								this.props.createApiErrors.dob[0]
							) : '',
							this.props.validateErrors.indexOf('dob') > -1 ? this.props.is_child_only ? _react2.default.createElement(
								'span',
								{ style: { marginTop: '0px' }, className: 'fill-error-span' },
								this.props.errorMessages['child_age']
							) : _react2.default.createElement(
								'span',
								{ style: { marginTop: '0px' }, className: 'fill-error-span' },
								this.props.errorMessages['adult_age']
							) : '',
							this.props.validateDobErrors.indexOf('dob') > -1 ? this.props.is_child_only ? _react2.default.createElement(
								'span',
								{ style: { marginTop: '0px' }, className: 'fill-error-span' },
								this.props.errorMessages['childAgeDiff']
							) : '' : ''
						)
					),
					this.props.is_endorsement && this.state.is_change ? _react2.default.createElement(_insuranceProofs2.default, this.props) : ''
				),
				this.state.showPopup ? _react2.default.createElement(_insurancePopup2.default, _extends({}, this.state.userProfiles, this.props, {
					currentSelectedInsuredMembersId: this.props.currentSelectedInsuredMembersId,
					member_id: this.props.member_id,
					closePopup: this.togglePopup.bind(this),
					isSelectprofile: true,
					self_data_values: this.props.self_data_values[this.props.member_id],
					hideSelectProfilePopup: this.hideSelectProfilePopup.bind(this),
					is_child_only: this.props.is_child_only
				})) : ''
			);
		}
	}]);

	return InsuranceOthers;
}(_react2.default.Component);

exports.default = InsuranceOthers;

/***/ }),

/***/ "./dev/js/components/insurance/insuranceProofs.js":
/*!********************************************************!*\
  !*** ./dev/js/components/insurance/insuranceProofs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
var Compress = __webpack_require__(/*! compress.js */ "./node_modules/compress.js/index.js");

var InsuranceProofs = function (_React$Component) {
    _inherits(InsuranceProofs, _React$Component);

    function InsuranceProofs(props) {
        _classCallCheck(this, InsuranceProofs);

        var _this = _possibleConstructorReturn(this, (InsuranceProofs.__proto__ || Object.getPrototypeOf(InsuranceProofs)).call(this, props));

        _this.state = {
            dataUrl: null,
            zoomImageUrl: null,
            zoomImage: false,
            openPdf: false,
            openPdfUrl: null,
            isLoading: false
        };
        return _this;
    }

    _createClass(InsuranceProofs, [{
        key: 'pickFile',
        value: function pickFile(member_id, e) {
            var _this2 = this;

            // to select file
            if (e.target.files && e.target.files[0]) {
                var file = e.target.files[0];
                if (e.target.files[0] && e.target.files[0].name.includes('.pdf')) {
                    this.finishCrop(null, member_id, file);
                } else {
                    var compress = new Compress();
                    compress.compress([file], {
                        quality: 1,
                        maxWidth: 1000,
                        maxHeight: 1000
                    }).then(function (results) {
                        var img1 = results[0];
                        var base64str = img1.data;
                        var imgExt = img1.ext;
                        var file = Compress.convertBase64ToFile(base64str, imgExt);
                        _this2.getBase64(file, function (dataUrl) {
                            _this2.finishCrop(dataUrl, member_id, null);
                            _this2.setState({ dataUrl: dataUrl });
                        });
                    }).catch(function (e) {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Error uploading image." });
                    });
                }
            }
        }
    }, {
        key: 'getBase64',
        value: function getBase64(file, cb) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                cb(reader.result);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
    }, {
        key: 'finishCrop',
        value: function finishCrop(dataUrl, member_id, file) {
            var _this3 = this;

            // cropping the image
            var file_blob_data = void 0;
            if (dataUrl) {
                file_blob_data = this.dataURItoBlob(dataUrl);
            }
            var mem_data = {};
            var existingData = void 0;
            var img_tag = "document_image";
            this.setState({
                dataUrl: null, isLoading: true
            }, function () {
                var form_data = new FormData();
                if (file) {
                    form_data.append(img_tag, file, "imageFilename.pdf");
                } else {
                    form_data.append(img_tag, file_blob_data, "imageFilename.jpeg");
                }
                _this3.props.uploadProof(form_data, member_id, 'image', function (data, err) {
                    // store selected proof to database
                    if (data) {
                        mem_data.id = data.data.member;
                        // mem_data.images = []
                        // mem_data.img_ids = []
                        mem_data.img_path_ids = [];
                        if (_this3.props.members_proofs.length > 0) {
                            Object.entries(_this3.props.members_proofs).map(function (_ref) {
                                var _ref2 = _slicedToArray(_ref, 2),
                                    key = _ref2[0],
                                    value = _ref2[1];

                                if (value.id == member_id) {
                                    // mem_data.images = value.images
                                    // mem_data.img_ids = value.img_ids
                                    mem_data.img_path_ids = value.img_path_ids;
                                    // mem_data.images.push(data.data.document_image)
                                    // mem_data.img_ids.push(data.id)
                                    mem_data.img_path_ids.push({ id: data.id, image: data.data.document_image });
                                } else {
                                    // mem_data.images=[]
                                    // mem_data.img_ids = []
                                    mem_data.img_path_ids = [];
                                    // mem_data.images.push(data.data.document_image)        
                                    // mem_data.img_ids.push(data.id)
                                    mem_data.img_path_ids.push({ id: data.id, image: data.data.document_image });
                                }
                            });
                        } else {
                            // mem_data.images.push(data.data.document_image)
                            // mem_data.img_ids.push(data.id)
                            mem_data.img_path_ids.push({ id: data.id, image: data.data.document_image });
                        }
                        _this3.setState({ isLoading: false });
                        _this3.props.storeMemberProofs(mem_data);
                    }
                });
            });
        }
    }, {
        key: 'dataURItoBlob',
        value: function dataURItoBlob(dataURI) {
            var binary = atob(dataURI.split(',')[1]);
            var array = [];
            for (var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
        }
    }, {
        key: 'removeImage',
        value: function removeImage(img) {
            var _this4 = this;

            var Uploaded_image_data = [];
            Uploaded_image_data = this.props.members_proofs.filter(function (x) {
                return x.id == _this4.props.member_id;
            });
            Uploaded_image_data[0].img_path_ids.map(function (data, i) {
                data.member_id = _this4.props.member_id;
                if (data.image == img) {
                    _this4.props.removeMemberProof(data); // to remove cancelled uploaded image
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var Uploaded_image_data = [];
            var img_url = [];
            var pdf_url = [];
            if (this.props.members_proofs && this.props.members_proofs.length > 0) {
                Uploaded_image_data = this.props.members_proofs.filter(function (x) {
                    return x.id == _this5.props.member_id;
                });
                if (Uploaded_image_data.length > 0) {
                    Uploaded_image_data[0].img_path_ids.map(function (data, i) {
                        if (data.image.includes('pdf')) {
                            pdf_url.push(data.image);
                        } else {
                            img_url.push(data.image);
                        }
                    });
                }
            }
            var show_upload = true;
            if (img_url && img_url.length > 0 || pdf_url && pdf_url.length > 0) {
                show_upload = false;
            }

            return _react2.default.createElement(
                'div',
                { className: 'insurance-proofs-cont', style: { margin: '10px -10px 0px -10px' } },
                _react2.default.createElement(
                    'div',
                    { className: 'upload-addbtn-cont', id: 'member_' + this.props.member_id + '_upload' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ins-upld-cont' },
                        _react2.default.createElement(
                            'div',
                            { className: 'ins-sb-frst-img' },
                            _react2.default.createElement('img', { src: "/assets" + "/img/ins-warning.svg" })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ins-upload-text' },
                            _react2.default.createElement(
                                'p',
                                { className: 'ins-upload-para-text' },
                                'Upload any governement ID proof'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'ins-upload-sub-text' },
                                'Aadhar card, Passport, Driving License, Voter ID Card'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'ins-file-tyle' },
                                'File type: jpg, jpeg, png, pdf '
                            )
                        )
                    ),
                    show_upload ? _react2.default.createElement(
                        'span',
                        { className: 'ins-proof-upload-btn', onClick: function onClick() {
                                document.getElementById('imageFilePicker_' + _this5.props.member_id + '_front').click();
                                document.getElementById('imageFilePicker_' + _this5.props.member_id + '_front').value = "";
                            } },
                        _react2.default.createElement('img', { src: "/assets" + "/img/ins-up-ico.svg" }),
                        ' Upload',
                        _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, id: 'imageFilePicker_' + this.props.member_id + '_front', onChange: this.pickFile.bind(this, this.props.member_id), accept: 'image/x-png,image/jpeg,image/jpg,.pdf' })
                    ) : ''
                ),
                this.state.isLoading && show_upload ? _react2.default.createElement(
                    'div',
                    { className: 'ins-prf-img-grd d-block' },
                    _react2.default.createElement(
                        'div',
                        { className: 'loader-for-chat-div mt-0' },
                        _react2.default.createElement(
                            'div',
                            { className: 'loader-for-chat mb-0' },
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null),
                            _react2.default.createElement('span', null)
                        )
                    )
                ) : '',
                Uploaded_image_data && Uploaded_image_data.length > 0 && !show_upload ? _react2.default.createElement(
                    'div',
                    { className: 'upload-img-section' },
                    img_url && img_url.length > 0 ? img_url.map(function (data, i) {
                        return _react2.default.createElement(
                            'div',
                            { key: i, className: 'ins-prf-img-grd' },
                            _react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic', src: data }),
                            _react2.default.createElement('img', { className: 'ins-prf-cls', onClick: _this5.removeImage.bind(_this5, data), src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png' })
                        );
                    }) : '',
                    pdf_url && pdf_url.length > 0 ? pdf_url.map(function (data, i) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'ins-prf-img-grd', key: i },
                            _react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic', src: "/assets" + "/img/pdf.jpg" }),
                            _react2.default.createElement('img', { className: 'ins-prf-cls', onClick: _this5.removeImage.bind(_this5, data), src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png' })
                        );
                    }) : '',
                    this.state.isLoading ? _react2.default.createElement(
                        'div',
                        { className: 'ins-prf-img-grd' },
                        _react2.default.createElement(
                            'div',
                            { className: 'loader-for-chat-div mt-0' },
                            _react2.default.createElement(
                                'div',
                                { className: 'loader-for-chat mb-0', style: { width: '50px;' } },
                                _react2.default.createElement('span', null),
                                _react2.default.createElement('span', null),
                                _react2.default.createElement('span', null),
                                _react2.default.createElement('span', null)
                            )
                        )
                    ) : '',
                    (img_url && img_url.length || pdf_url && pdf_url.length) >= 5 ? '' : _react2.default.createElement(
                        'span',
                        { className: 'ins-prf-addMore', onClick: function onClick() {
                                document.getElementById('imageFilePicker_' + _this5.props.member_id + '_back').click();
                                document.getElementById('imageFilePicker_' + _this5.props.member_id + '_back').value = "";
                            } },
                        _react2.default.createElement('img', { className: 'ins-addico', src: "/assets" + "/img/ins-add-ico.svg" }),
                        'Add More',
                        _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, id: 'imageFilePicker_' + this.props.member_id + '_back', onChange: this.pickFile.bind(this, this.props.member_id), accept: 'image/x-png,image/jpeg,image/jpg,.pdf' })
                    )
                ) : ''
            );
        }
    }]);

    return InsuranceProofs;
}(_react2.default.Component);

exports.default = InsuranceProofs;

/***/ }),

/***/ "./dev/js/components/insurance/insuranceSelf.js":
/*!******************************************************!*\
  !*** ./dev/js/components/insurance/insuranceSelf.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "./node_modules/rc-calendar/es/index.js");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _stateCityAutoComplete = __webpack_require__(/*! ./stateCityAutoComplete.js */ "./dev/js/components/insurance/stateCityAutoComplete.js");

var _stateCityAutoComplete2 = _interopRequireDefault(_stateCityAutoComplete);

var _insuranceProofs = __webpack_require__(/*! ./insuranceProofs.js */ "./dev/js/components/insurance/insuranceProofs.js");

var _insuranceProofs2 = _interopRequireDefault(_insuranceProofs);

var _verifyEmail = __webpack_require__(/*! ./verifyEmail.js */ "./dev/js/components/insurance/verifyEmail.js");

var _verifyEmail2 = _interopRequireDefault(_verifyEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var InsuranceSelf = function (_React$Component) {
	_inherits(InsuranceSelf, _React$Component);

	function InsuranceSelf(props) {
		_classCallCheck(this, InsuranceSelf);

		var _this = _possibleConstructorReturn(this, (InsuranceSelf.__proto__ || Object.getPrototypeOf(InsuranceSelf)).call(this, props));

		_this.state = {
			name: '',
			middle_name: '',
			last_name: '',
			email: '',
			gender: '',
			dob: '',
			pincode: '',
			address: '',
			title: '',
			id: '',
			relation: 'self',
			member_type: 'adult',
			state: '',
			town: '',
			district: '',
			profile_flag: true,
			// show_lname: this.props.no_lname,
			// show_lname_flag:this.props.no_lname,
			profile_id: null,
			dateModal: false,
			state_code: '',
			district_code: '',
			town_code: '',
			selectedDateSpan: new Date(),
			no_lname: false,
			disableName: false,
			disableEmail: false,
			disableDob: false,
			is_change: false,
			year: null,
			mnth: null,
			day: null,
			emailVerified: false,
			profile: ''

		};
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.handleTitle = _this.handleTitle.bind(_this);
		_this.handleEmail = _this.handleEmail.bind(_this);
		return _this;
	}

	_createClass(InsuranceSelf, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var profile = void 0;
			if (this.props.self_data_values[this.props.USER.defaultProfile] && !this.props.is_endorsement) {
				profile = Object.assign({}, this.props.self_data_values[this.props.USER.defaultProfile]);
				this.getUserDetails(profile); // fill user details in form
				//this.setState({...this.props.self_data_values[this.props.USER.defaultProfile]},()=>{
				//if(this.state.gender == 'm'){
				// 	this.setState({title:'mr.'},()=>{
				// 		 this.handleSubmit()
				// 	})
				// }else if(this.state.gender == 'f'){
				// 	this.setState({title:'mrs.'},()=>{
				// 		 this.handleSubmit()
				// 	})
				// }
				//})
			} else if (this.props.is_endorsement) {
				var oldDate = void 0;
				if (Object.keys(this.props.self_data_values).length > 0) {
					profile = Object.assign({}, this.props.self_data_values[this.props.user_data[0].id]);
					if (Object.keys(profile).length > 0 && profile.dob) {
						oldDate = profile.dob.split('-');
						this.setState({ year: oldDate[0], mnth: oldDate[2], day: oldDate[1] }, function () {
							_this2.populateDates();
						});
					}
					this.setState(_extends({}, profile), function () {
						_this2.handleSubmit(true, false);
					});
				} else {
					if (this.props.user_data && this.props.user_data.length > 0) {
						if (this.props.user_data[0].dob) {
							oldDate = this.props.user_data[0].dob.split('-');
							this.setState({ year: oldDate[0], mnth: oldDate[2], day: oldDate[1] }, function () {
								_this2.populateDates();
							});
						}
						this.setState(_extends({}, this.props.user_data[0], { name: this.props.user_data[0].first_name, member_type: this.props.member_type, profile_id: this.props.user_data[0].profile, is_change: false, town_code: this.props.user_data[0].city_code, profile: this.props.user_data[0].profile }), function () {
							_this2.handleSubmit(true, false);
						});
					}
				}
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			var _this3 = this;

			var newName = [];
			var self = this;
			var profileLength = Object.keys(props.USER.profiles).length;
			if (profileLength > 0 && this.state.profile_flag && !props.is_endorsement) {
				var isDummyUser = props.USER.profiles[props.USER.defaultProfile].isDummyUser;
				if (Object.keys(props.self_data_values).length > 0) {
					var profile = void 0;
					if (!isDummyUser) {
						profile = Object.assign({}, props.self_data_values[props.USER.defaultProfile]);
					} else {
						profile = Object.assign({}, props.self_data_values[0]);
					}
					this.getUserDetails(profile); // fill user details in form
					if (Object.keys(profile).length) {
						this.setState(_extends({}, profile, { disableEmail: profile.email != '' ? true : false, disableDob: profile.dob != null ? true : false, disableName: profile.name != '' ? true : false }), function () {
							if (profile.gender == 'm') {
								_this3.setState({ title: 'mr.' }, function () {
									_this3.handleSubmit(false, false);
								});
							} else if (profile.gender == 'f') {
								_this3.setState({ title: 'mrs.' }, function () {
									_this3.handleSubmit(false, false);
								});
							}
						});
					} else {
						this.setState({ profile_flag: false });
						var new_profile = props.USER.profiles[props.USER.defaultProfile];
						this.getUserDetails(new_profile); // fill user details in form
					}
				} else if (props.USER.profiles[props.USER.defaultProfile]) {
					this.setState({ profile_flag: false });
					var _profile = Object.assign({}, props.USER.profiles[props.USER.defaultProfile]);
					newName = _profile.name.split(" ");
					this.getUserDetails(_profile); // fill user details in form
					this.populateDates();
				}
			} else if (props.is_endorsement) {
				this.populateDates();
			}
		}
	}, {
		key: 'getUserDetails',
		value: function getUserDetails(profile) {
			var _this4 = this;

			// fill user details in store
			var newName = [];
			var oldDate = void 0;
			var tempArray = void 0;
			if (Object.keys(profile).length > 0) {
				newName = profile.name.split(" ");
				if (newName.length == 2) {
					this.setState({
						name: profile.isDummyUser ? '' : newName[0],
						last_name: profile.isDummyUser ? '' : newName[1]
					});
				} else if (newName.length == 3) {
					this.setState({
						name: profile.isDummyUser ? '' : newName[0],
						last_name: profile.isDummyUser ? '' : newName[2],
						middle_name: profile.isDummyUser ? '' : newName[1]
					});
				} else if (newName.length > 3) {
					tempArray = newName.slice(2, newName.length);
					this.setState({
						name: profile.isDummyUser ? '' : newName[0],
						last_name: profile.isDummyUser ? '' : tempArray.join(' '),
						middle_name: profile.isDummyUser ? '' : newName[1]
					});
				} else {
					this.setState({ name: profile.isDummyUser ? '' : profile.name });
				}
				if (profile.isDummyUser && profile.dob) {
					this.setState({ day: null, year: null, mnth: null });
				} else if (Object.keys(profile).length > 0 && profile.dob) {
					oldDate = profile.dob.split('-');
					this.setState({ year: oldDate[0], mnth: oldDate[1], day: oldDate[2] }, function () {
						_this4.populateDates();
					});
				} else {
					this.populateDates();
				}
				this.setState({
					disableEmail: !profile.isDummyUser && profile.email != '' ? true : false,
					disableDob: !profile.isDummyUser && profile.dob != null ? true : false,
					disableName: !profile.isDummyUser && profile.name != '' ? true : false,
					gender: profile.isDummyUser ? '' : profile.gender,
					email: profile.isDummyUser ? '' : profile.email,
					dob: profile.isDummyUser ? '' : profile.dob,
					id: profile.isDummyUser ? 0 : profile.id
				}, function () {
					if (profile.gender == 'm') {
						_this4.setState({ title: 'mr.' });
					} else if (profile.gender == 'f') {
						if (_this4.props.selected_plan.adult_count == 2) {
							_this4.setState({ title: 'mrs.' });
						} else {
							_this4.setState({ title: 'miss' });
						}
					}
					_this4.handleSubmit(false, false);
				});
			}
		}
	}, {
		key: 'handleChange',
		value: function handleChange(field, event) {
			this.setState(_defineProperty({}, event.target.getAttribute('data-param'), event.target.value));
		}
	}, {
		key: 'handleOnFocus',
		value: function handleOnFocus(field, event) {
			// if(event.target.nextElementSibling.nextElementSibling){
			// 	event.target.nextElementSibling.nextElementSibling.classList.add('field-icon')
			// }
		}
	}, {
		key: 'handleTitle',
		value: function handleTitle(field, event) {
			var _this5 = this;

			var title_value = event.target.value;
			if (title_value == 'mr.') {
				this.setState({ gender: 'm' });
			} else if (title_value == 'miss' || title_value == 'mrs.') {
				this.setState({ gender: 'f' });
			}
			this.setState({ title: event.target.value }, function () {
				var self_data = _this5.state;
				self_data.is_change = true;
				_this5.props.userData('self_data', self_data); // to save entered data in store
			});
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(is_endoresment, is_endorse_email) {
			var profile = Object.assign({}, this.props.USER.profiles[this.props.USER.defaultProfile]);
			if (!profile.isDummyUser) {
				this.setState({ profile_id: this.props.member_id });
			} else {
				this.setState({ profile_id: null });
			}
			var self_data = this.state;
			if (self_data.name !== '') {
				if (self_data.name.length > 50) {
					self_data.name = self_data.name.slice(0, 50);
				}
			}
			if (self_data.middle_name !== '') {
				if (self_data.middle_name.length > 50) {
					self_data.middle_name = self_data.middle_name.slice(0, 50);
				}
			}
			if (self_data.last_name !== '') {
				if (self_data.last_name.length > 50) {
					self_data.last_name = self_data.last_name.slice(0, 50);
				}
			}
			if (!is_endoresment && !is_endorse_email) {
				self_data.is_change = true;
				self_data.first_name = self_data.name;
			}
			this.props.userData('self_data', self_data);
		}
	}, {
		key: 'handlekey',
		value: function handlekey(event) {
			if (this.state.pincode.length == 6) {
				event.preventDefault();
			}
		}
	}, {
		key: 'handleNameCharacters',
		value: function handleNameCharacters(field, event) {
			if (field == 'name') {
				if (this.state.name.length == 50) {
					event.preventDefault();
				}
			} else if (field == 'last_name') {
				if (this.state.last_name.length == 50) {
					event.preventDefault();
				}
			} else if (field == 'middle_name') {
				if (this.state.middle_name.length == 50) {
					event.preventDefault();
				}
			}
		}
	}, {
		key: 'handleEmail',
		value: function handleEmail() {
			var formIsValid = true;
			if (this.state.email != '') {
				var validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				validEmail = validEmail.test(this.state.email);
				if (validEmail) {
					this.handleSubmit(false, false);
				} else {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter valid Email" });
				}
			}
		}
	}, {
		key: 'handleGender',
		value: function handleGender(field, event) {
			var _this6 = this;

			var gender_value = event.target.value;
			if (gender_value == 'm') {
				this.setState({ title: 'mr.' });
			} else if (gender_value == 'f') {
				this.setState({ title: 'mrs.' });
			}
			this.setState({
				gender: event.target.value
			}, function () {
				_this6.handleSubmit(false, false);
			});
		}
	}, {
		key: 'openDateModal',
		value: function openDateModal() {
			this.setState({ dateModal: !this.state.dateModal });
		}
	}, {
		key: 'selectDateFromCalendar',
		value: function selectDateFromCalendar(date) {
			var _this7 = this;

			if (date) {
				date = date.toDate();
				var date = new Date(date);
				var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
				var day = ("0" + date.getDate()).slice(-2);
				var actual_date = [date.getFullYear(), mnth, day].join("-");
				this.setState({ selectedDateSpan: actual_date, dateModal: false, currentDate: new Date(date).getDate(), dob: actual_date }, function () {
					_this7.handleSubmit(false, false);
				});
			} else {
				this.setState({ dateModal: false });
			}
		}
		// handleState(event) {
		// 	var event = document.getElementById("state_dropdown")
		// 	this.setState({state: event.options[event.selectedIndex].value, state_code: event.options[event.selectedIndex].id},() =>{
		// 		this.handleSubmit(event)

		// 	})
		// }
		// handleDistrict(event) {
		// 	var event = document.getElementById("district_dropdown")
		// 	this.setState({district: event.options[event.selectedIndex].value, district_code: event.options[event.selectedIndex].id},() =>{
		// 		this.handleSubmit(event)

		// 	})
		// }
		// handleTown(event) {
		// 	var event = document.getElementById("town_dropdown")
		// 	this.setState({town: event.options[event.selectedIndex].value, town_code: event.options[event.selectedIndex].id},() =>{
		// 		this.handleSubmit(event)

		// 	})
		// }

	}, {
		key: 'handleLastname',
		value: function handleLastname(event) {
			var _this8 = this;

			this.setState({ no_lname: !this.state.no_lname }, function () {
				_this8.handleSubmit(false, false);
			});
		}
	}, {
		key: 'showAlert',
		value: function showAlert(type) {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select" + type + "first" });
		}
	}, {
		key: 'handleState',
		value: function handleState(feild, event) {
			this.setState(_defineProperty({}, event.target.getAttribute('data-param'), event.target.value));
			var states = [];
			Object.entries(this.props.insurnaceData['state']).map(function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2),
				    key = _ref2[0],
				    value = _ref2[1];

				states.push({ 'code': value.gst_code, 'name': value.state_name });
				// states.push([value.gst_code=value.state_name])
				// states.push(value.state_name)
			});
			this.autocomplete(document.getElementsByClassName('userState')[0], states, 'isState');
		}
	}, {
		key: 'handleDistrict',
		value: function handleDistrict(feild, event) {
			var self = this;
			this.setState(_defineProperty({}, event.target.getAttribute('data-param'), event.target.value));
			var districts_opt = [];
			Object.entries(this.props.insurnaceData['state']).map(function (_ref3) {
				var _ref4 = _slicedToArray(_ref3, 2),
				    key = _ref4[0],
				    value = _ref4[1];

				if (self.state.state_code && self.state.state_code != '' && self.state.state != '' && self.state.state_code == value.gst_code) {
					Object.entries(value.district).map(function (_ref5) {
						var _ref6 = _slicedToArray(_ref5, 2),
						    k = _ref6[0],
						    districts = _ref6[1];

						districts_opt.push({ 'code': districts.district_code, 'name': districts.district_name });
					});
				}
			});
			this.autocomplete(document.getElementsByClassName('userDistrict')[0], districts_opt, 'isDistrict');
		}
	}, {
		key: 'handleTown',
		value: function handleTown(feild, event) {
			var self = this;
			this.setState(_defineProperty({}, event.target.getAttribute('data-param'), event.target.value));
			var city_opt = [];
			Object.entries(this.props.insurnaceData['state']).map(function (_ref7) {
				var _ref8 = _slicedToArray(_ref7, 2),
				    key = _ref8[0],
				    value = _ref8[1];

				if (self.state.state_code && self.state.state_code != '' && self.state.state != '' && self.state.state_code == value.gst_code) {
					Object.entries(value.cities).map(function (_ref9) {
						var _ref10 = _slicedToArray(_ref9, 2),
						    k = _ref10[0],
						    city = _ref10[1];

						city_opt.push({ 'code': city.city_code, 'name': city.city_name });
					});
				}
			});
			this.autocomplete(document.getElementsByClassName('userTown')[0], city_opt, 'isTown');
		}
	}, {
		key: 'autocomplete',
		value: function autocomplete(inp, arr, type) {
			var self = this;
			var currentFocus;

			inp.addEventListener("input", function (e) {
				var parentDiv,
				    childDiv,
				    i,
				    val = this.value;

				self.closeAllLists(type);
				if (!val) {
					return false;
				}
				currentFocus = -1;

				parentDiv = document.createElement("DIV");
				parentDiv.setAttribute("id", this.id + "autocomplete-list");
				parentDiv.setAttribute("class", "autocomplete-items");
				this.parentNode.appendChild(parentDiv);

				for (i = 0; i < arr.length; i++) {
					/*check if the item starts with the same letters as the text field value:*/
					if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
						childDiv = document.createElement("DIV");
						childDiv.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
						childDiv.innerHTML += arr[i].name.substr(val.length);
						childDiv.innerHTML += "<input type='hidden' value='" + arr[i].name + "' id='" + arr[i].code + "'>";

						childDiv.addEventListener("click", function (e) {
							inp.value = this.getElementsByTagName("input")[0].value;
							if (type == 'isState') {
								self.setState({ state: inp.value, state_code: this.getElementsByTagName("input")[0].id });
							} else if (type == 'isDistrict') {
								self.setState({ district: inp.value, district_code: this.getElementsByTagName("input")[0].id });
							} else if (type == 'isTown') {
								self.setState({ town: inp.value, town_code: this.getElementsByTagName("input")[0].id });
							}

							self.handleSubmit();
							self.closeAllLists(type);
						});
						parentDiv.appendChild(childDiv);
					}
				}
			});
			/*execute a function on key presses:*/
			inp.addEventListener("keydown", function (e) {
				var x = document.getElementById(this.id + "autocomplete-list");
				if (x) x = x.getElementsByTagName("div");
				if (e.keyCode == 40) {
					currentFocus++;
					self.addActive(x, currentFocus);
				} else if (e.keyCode == 38) {
					currentFocus--;
					self.addActive(x, currentFocus);
				} else if (e.keyCode == 13) {
					e.preventDefault();
					if (currentFocus > -1) {
						if (x) x[currentFocus].click();
					}
				}
			});
		}
	}, {
		key: 'addActive',
		value: function addActive(x, currentFocus) {
			if (!x) return false;
			this.removeActive(x);
			if (currentFocus >= x.length) currentFocus = 0;
			if (currentFocus < 0) currentFocus = x.length - 1;
			if (x[currentFocus].classList) {
				x[currentFocus].classList.add("autocomplete-active");
			}
		}
	}, {
		key: 'removeActive',
		value: function removeActive(x) {
			for (var i = 0; i < x.length; i++) {
				if (x[i].classList) {
					x[i].classList.remove("autocomplete-active");
				}
			}
		}
	}, {
		key: 'closeAllLists',
		value: function closeAllLists(elmnt, type) {
			var inp = void 0;
			if (type == 'isState') {
				inp = document.getElementsByClassName('userState')[0];
			} else if (type == 'isDistrict') {
				inp = document.getElementsByClassName('userDistrict')[0];
			} else if (type == 'isTown') {
				inp = document.getElementsByClassName('userTown')[0];
			}
			var x = document.getElementsByClassName("autocomplete-items");
			for (var i = 0; i < x.length; i++) {
				if (elmnt != x[i] && elmnt != inp) {
					x[i].parentNode.removeChild(x[i]);
				}
			}
		}
	}, {
		key: 'daysInMonth',
		value: function daysInMonth(month, year) {
			return new Date(year, month, 0).getDate();
		}
	}, {
		key: 'populateDates',
		value: function populateDates() {
			var self = this;
			var default_months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
			var daydropdown = document.getElementById("daydropdown_" + this.props.member_id),
			    monthdropdown = document.getElementById("monthdropdown_" + this.props.member_id),
			    yeardropdown = document.getElementById("yeardropdown_" + this.props.member_id);
			var age_threshold = this.props.selected_plan && this.props.selected_plan.threshold ? this.props.selected_plan.threshold[0].max_age : 65;
			var today = new Date(),
			    day = today.getUTCDate(),
			    month = today.getUTCMonth(),
			    year = today.getUTCFullYear() - age_threshold,
			    currentYear = today.getUTCFullYear(),
			    daysInCurrMonth = this.daysInMonth(month, year);

			daydropdown.innerHTML = '';
			monthdropdown.innerHTML = '';
			yeardropdown.innerHTML = '';

			var opt_dd = document.createElement('option');
			opt_dd.value = 'DD';
			opt_dd.text = 'DD';
			opt_dd.hidden = true;
			daydropdown.appendChild(opt_dd);
			var opt_mm = document.createElement('option');
			opt_mm.value = 'MM';
			opt_mm.text = 'MM';
			opt_mm.hidden = true;
			monthdropdown.appendChild(opt_mm);
			var opt_yy = document.createElement('option');
			opt_yy.value = 'YYYY';
			opt_yy.text = 'YYYY';
			opt_yy.hidden = true;
			yeardropdown.appendChild(opt_yy);

			// Day
			for (var i = 1; i <= daysInCurrMonth; i++) {
				var opt = document.createElement('option');
				if (i <= 9) {
					opt.value = '0' + i;
					opt.text = '0' + i;
				} else {
					opt.value = i;
					opt.text = i;
				}

				daydropdown.appendChild(opt);
			}
			// Month
			for (var i = 0; i < 12; i++) {
				var opt = document.createElement('option');
				opt.value = 'MM';
				opt.text = 'MM';
				opt.value = default_months[i];
				opt.text = default_months[i];
				monthdropdown.appendChild(opt);
			}

			// Year
			for (var i = 0; i <= age_threshold; i++) {
				var opt = document.createElement('option');
				opt.value = 'YYYY';
				opt.text = 'YYYY';
				opt.value = i + year;
				opt.text = i + year;
				yeardropdown.appendChild(opt);
			}

			// change handler for day
			daydropdown.onchange = function () {
				var NewSelecteddays = daydropdown.value;
				self.setState({ day: NewSelecteddays }, function () {
					self.submitDob();
				});
			};

			// Change handler for months
			monthdropdown.onchange = function () {

				var newMonth = monthdropdown.value;
				self.setState({ mnth: newMonth }, function () {
					self.submitDob();
				});
			};

			// change handler for year
			yeardropdown.onchange = function () {
				var newYear = yeardropdown.value;
				self.setState({ year: newYear }, function () {
					self.submitDob();
				});
			};
		}
	}, {
		key: 'submitDob',
		value: function submitDob() {
			var self = this;
			if (self.state.day && self.state.mnth && self.state.year) {
				var finalDate = self.state.year + '-' + self.state.mnth + '-' + self.state.day;
				self.setState({
					dob: finalDate
				}, function () {
					self.handleSubmit();
				});
			}
		}
	}, {
		key: 'verifyEndorsementEmail',
		value: function verifyEndorsementEmail(newemail) {
			var _this9 = this;

			this.setState({ emailVerified: true, email: newemail }, function () {
				_this9.props.checkIsEmailVerfied();
				_this9.handleSubmit(true, true);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var self = this;
			var show_createApi_keys = [];
			var city_opt = [];
			var districts_opt = [];
			var Uploaded_image_data = void 0;
			var commonMsgSpan = _react2.default.createElement(
				'span',
				{ className: 'fill-error-span' },
				this.props.errorMessages['common_message']
			);
			if (Object.keys(this.props.createApiErrors).length > 0) {
				Object.entries(this.props.createApiErrors).map(function (_ref11) {
					var _ref12 = _slicedToArray(_ref11, 2),
					    key = _ref12[0],
					    value = _ref12[1];

					show_createApi_keys.push(key);
				});
			}
			var isDummyUser = void 0;
			if (this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.profiles[this.props.USER.defaultProfile]) {
				isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
			}
			{
				Object.entries(self.props.insurnaceData['state']).map(function (_ref13) {
					var _ref14 = _slicedToArray(_ref13, 2),
					    key = _ref14[0],
					    value = _ref14[1];

					if (self.state.state_code && self.state.state_code != '' && self.state.state != '' && self.state.state_code == value.gst_code) {
						Object.entries(value.district).map(function (_ref15) {
							var _ref16 = _slicedToArray(_ref15, 2),
							    k = _ref16[0],
							    districts = _ref16[1];

							districts_opt.push(_react2.default.createElement(
								'option',
								{ key: k, 'data-param': 'district', id: districts.district_code, value: districts.district_name },
								districts.district_name
							));
						});
						Object.entries(value.cities).map(function (_ref17) {
							var _ref18 = _slicedToArray(_ref17, 2),
							    k = _ref18[0],
							    city = _ref18[1];

							city_opt.push(_react2.default.createElement(
								'option',
								{ key: k, 'data-param': 'town', id: city.city_code, value: city.city_name },
								city.city_name
							));
						});
					}
				});
			}
			// let isDisable = false
			// if(!isDummyUser && this.state.isDisable){
			// 	if(this.state.name !='' && this.state.dob !='' && this.state.email !=''){
			// 		isDisable = true
			// 	}

			// }
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'row no-gutters', id: isDummyUser ? 'member_0' : this.props.is_endorsement ? 'member_' + this.props.member_id : 'member_' + this.props.USER.defaultProfile },
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						this.props.selected_plan.adult_count == 2 ? _react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'button',
								{ className: 'label-names-buttons ' + (this.state.title == 'mr.' ? 'btn-active' : ''), name: 'title', value: 'mr.', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mr.') },
								'Mr.'
							),
							_react2.default.createElement(
								'button',
								{ className: 'label-names-buttons ' + (this.state.title == 'mrs.' ? 'btn-active' : ''), value: 'mrs.', name: 'title', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mrs.') },
								'Mrs.'
							)
						) : _react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'button',
								{ className: 'label-names-buttons ' + (this.state.title == 'mr.' ? 'btn-active' : ''), name: 'title', value: 'mr.', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mr.') },
								'Mr.'
							),
							_react2.default.createElement(
								'button',
								{ className: 'label-names-buttons ' + (this.state.title == 'miss' ? 'btn-active' : ''), name: 'title', value: 'miss', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'miss') },
								'Ms.'
							),
							_react2.default.createElement(
								'button',
								{ className: 'label-names-buttons ' + (this.state.title == 'mrs.' ? 'btn-active' : ''), value: 'mrs.', name: 'title', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mrs.') },
								'Mrs.'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-6' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-form-group inp-margin-right ' },
							_react2.default.createElement('input', {
								style: { 'textTransform': 'capitalize' },
								type: 'text',
								id: 'name_' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('name') > -1 ? 'fill-error' : ''), required: true,
								autoComplete: 'first_name',
								name: 'name',
								value: this.state.name,
								'data-param': 'name',
								onChange: this.handleChange.bind(this, 'name'),
								onBlur: this.handleSubmit.bind(this, false, false),
								onFocus: this.handleOnFocus.bind(this, 'name'),
								disabled: this.state.disableName ? 'disabled' : '',
								onKeyPress: this.handleNameCharacters.bind(this, 'name')
							}),
							_react2.default.createElement(
								'label',
								{ className: this.state.disableName ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder', htmlFor: 'name_' + this.props.member_id },
								_react2.default.createElement('span', { className: 'labelDot' }),
								'First Name'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/user-01.svg" })
						),
						this.props.validateErrors.indexOf('name') > -1 ? commonMsgSpan : '',
						show_createApi_keys.indexOf('first_name') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.errorMessages['max_character']
						) : ''
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-6' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-form-group inp-margin-right ' },
							_react2.default.createElement('input', {
								style: { 'textTransform': 'capitalize' },
								type: 'text',
								id: 'middle_name_' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('middle_name') > -1 ? 'fill-error' : ''), required: true,
								autoComplete: 'middle_name',
								name: 'middle_name',
								value: this.state.no_lname ? '' : this.state.middle_name,
								'data-param': 'middle_name',
								onChange: this.handleChange.bind(this, 'middle_name'),
								onBlur: this.handleSubmit.bind(this, false, false),
								onFocus: this.handleOnFocus.bind(this, 'middle_name'),
								onKeyPress: this.handleNameCharacters.bind(this, 'middle_name'),
								disabled: this.state.no_lname || this.state.disableName ? 'disabled' : ""
							}),
							_react2.default.createElement(
								'label',
								{ className: this.state.disableName ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder', htmlFor: 'middle_name_' + this.props.member_id },
								'Middle Name'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/user-01.svg" })
						),
						show_createApi_keys.indexOf('middle_name') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.errorMessages['max_character']
						) : ''
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-6' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-form-group ins-form-group inp-margin-right' },
							_react2.default.createElement('input', {
								style: { 'textTransform': 'capitalize' },
								type: 'text',
								id: 'last_name_' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('last_name') > -1 ? 'fill-error' : ''), required: true,
								autoComplete: 'last_name',
								name: 'last_name',
								value: this.state.no_lname ? '' : this.state.last_name,
								'data-param': 'last_name',
								onChange: this.handleChange.bind(this, 'last_name'),
								onBlur: this.handleSubmit.bind(this, false, false),
								onFocus: this.handleOnFocus.bind(this, 'last_name'),
								disabled: this.state.no_lname || this.state.disableName ? 'disabled' : "",
								onKeyPress: this.handleNameCharacters.bind(this, 'last_name')
							}),
							_react2.default.createElement(
								'label',
								{ className: this.state.disableName ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder', htmlFor: 'last_name_' + this.props.member_id },
								_react2.default.createElement('span', { className: 'labelDot' }),
								'Last Name'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/user-01.svg" })
						),
						this.props.validateErrors.indexOf('last_name') > -1 ? commonMsgSpan : '',
						show_createApi_keys.indexOf('last_name') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.errorMessages['max_character']
						) : ''
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12', style: { marginTop: '-10px' } },
						_react2.default.createElement(
							'div',
							{ className: 'member-dtls-chk' },
							_react2.default.createElement(
								'label',
								{ className: 'ck-bx fw-500', onChange: this.handleLastname.bind(this), style: { fontSize: 12, paddingLeft: 24, lineHeight: '16px' } },
								'I dont have a last name',
								_react2.default.createElement('input', { type: 'checkbox', checked: this.state.no_lname, value: 'on' }),
								_react2.default.createElement('span', { className: 'checkmark small-checkmark' })
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12 mrt-10' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-form-radio' },
							_react2.default.createElement(
								'div',
								{ className: 'dtl-radio' },
								_react2.default.createElement(
									'label',
									{ className: 'container-radio' },
									'Male',
									_react2.default.createElement('input', { type: 'radio', name: 'gender', value: 'm', 'data-param': 'gender', checked: this.state.gender === 'm', onChange: this.handleGender.bind(this, 'm') }),
									_react2.default.createElement('span', { className: 'doc-checkmark' })
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'dtl-radio' },
								_react2.default.createElement(
									'label',
									{ className: 'container-radio' },
									'Female',
									_react2.default.createElement('input', { type: 'radio', name: 'gender', value: 'f', 'data-param': 'gender', checked: this.state.gender === 'f', onChange: this.handleGender.bind(this, 'f') }),
									_react2.default.createElement('span', { className: 'doc-checkmark' })
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'dtl-radio' },
								_react2.default.createElement(
									'label',
									{ className: 'container-radio' },
									'Others',
									_react2.default.createElement('input', { type: 'radio', name: 'gender', value: 'o', 'data-param': 'gender', checked: this.state.gender === 'o', onChange: this.handleGender.bind(this, 'o') }),
									_react2.default.createElement('span', { className: 'doc-checkmark' })
								)
							)
						),
						this.props.validateErrors.indexOf('gender') > -1 ? commonMsgSpan : '',
						show_createApi_keys.indexOf('gender') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.createApiErrors.gender[0]
						) : ''
					),
					!this.props.is_endorsement ? _react2.default.createElement(
						'div',
						{ className: 'col-12 mrt-10' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-form-group' },
							_react2.default.createElement('input', {
								type: 'text', id: 'emails_' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('email') > -1 ? 'fill-error' : ''), required: true,
								autoComplete: 'email',
								name: 'email',
								value: this.state.email,
								'data-param': 'email',
								onChange: this.handleChange.bind(this, 'email'),
								onBlur: this.handleEmail,
								onFocus: this.handleOnFocus.bind(this, 'email')
							}),
							_react2.default.createElement(
								'label',
								{ className: this.state.disableEmail ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder', htmlFor: 'emails_' + this.props.member_id },
								_react2.default.createElement('span', { className: 'labelDot' }),
								'Email'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/mail-01.svg" })
						),
						this.props.validateErrors.indexOf('email') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.errorMessages['valid_email']
						) : ''
					) : _react2.default.createElement(
						_react2.default.Fragment,
						null,
						_react2.default.createElement(_verifyEmail2.default, _extends({}, this.props, { is_endorsement: true, member_id: this.props.member_id, validateErrors: this.props.validateErrors, email: this.state.email, handleSubmit: this.handleSubmit.bind(this), verifyEndorsementEmail: this.verifyEndorsementEmail.bind(this) })),
						this.props.validateErrors.indexOf('email') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.errorMessages['valid_email']
						) : ''
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'form-control-placeholder datePickerLabel', htmlFor: 'ins-date' },
								'Date of birth'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/calendar-01.svg" }),
							_react2.default.createElement(
								'div',
								{ className: 'dob-select-div d-flex align-items-center' },
								_react2.default.createElement(
									'div',
									{ className: 'dob-select d-flex align-items-center' },
									_react2.default.createElement(
										'select',
										{ id: 'daydropdown_' + this.props.member_id, value: this.state.day },
										_react2.default.createElement(
											'option',
											{ hidden: true },
											'DD'
										)
									),
									_react2.default.createElement('img', { className: 'dob-down-icon', style: { right: '4px' }, src: '/assets/img/customer-icons/dropdown-arrow.svg' })
								),
								_react2.default.createElement(
									'div',
									{ className: 'dob-select d-flex align-items-center' },
									_react2.default.createElement(
										'select',
										{ id: 'monthdropdown_' + this.props.member_id, value: this.state.mnth },
										_react2.default.createElement(
											'option',
											{ hidden: true },
											'MM'
										)
									),
									_react2.default.createElement('img', { className: 'dob-down-icon', style: { right: '4px' }, src: '/assets/img/customer-icons/dropdown-arrow.svg' })
								),
								_react2.default.createElement(
									'div',
									{ className: 'dob-select d-flex align-items-center' },
									_react2.default.createElement(
										'select',
										{ id: 'yeardropdown_' + this.props.member_id, value: this.state.year },
										_react2.default.createElement(
											'option',
											{ hidden: true },
											'YYYY'
										)
									),
									_react2.default.createElement('img', { className: 'dob-down-icon', style: { right: '3px' }, src: '/assets/img/customer-icons/dropdown-arrow.svg' })
								)
							)
						),
						this.props.validateErrors.indexOf('dob') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.errorMessages['adult_age']
						) : '',
						show_createApi_keys.indexOf('dob') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.createApiErrors.dob[0]
						) : ''
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-form-group autocomplete' },
							_react2.default.createElement('input', {
								style: { 'textTransform': 'capitalize' },
								type: 'text',
								id: 'isnstate_' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('state') > -1 ? 'fill-error' : '') + ' userState', required: true,
								autoComplete: 'state',
								name: 'state',
								value: this.state.state,
								'data-param': 'state',
								onChange: this.handleState.bind(this, 'state'),
								onBlur: this.handleSubmit.bind(this, false, false),
								onFocus: this.handleOnFocus.bind(this, 'state'),
								'data-state-code': this.state.state_code
							}),
							_react2.default.createElement(
								'label',
								{ className: 'form-control-placeholder', htmlFor: 'isnstate_' + this.props.member_id },
								'State'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
						),
						this.props.validateErrors.indexOf('state') > -1 ? commonMsgSpan : '',
						show_createApi_keys.indexOf('state') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.createApiErrors.state[0]
						) : ''
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						this.state.state_code != '' ? _react2.default.createElement(
							'div',
							{ className: 'ins-form-group autocomplete' },
							_react2.default.createElement('input', {
								style: { 'textTransform': 'capitalize' },
								type: 'text',
								id: 'isndistrict_' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('state') > -1 ? 'fill-error' : '') + ' userDistrict', required: true,
								autoComplete: 'district',
								name: 'district',
								value: this.state.district,
								'data-param': 'district',
								onChange: this.handleDistrict.bind(this, 'district'),
								onBlur: this.handleSubmit.bind(this, false, false),
								onFocus: this.handleOnFocus.bind(this, 'district'),
								'data-state-code': this.state.district_code
							}),
							_react2.default.createElement(
								'label',
								{ className: 'form-control-placeholder', htmlFor: 'isndistrict_' + this.props.member_id },
								'District'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
						) : _react2.default.createElement(
							'div',
							{ className: 'ins-form-group', onClick: this.showAlert.bind(this, ' state ') },
							_react2.default.createElement('input', {
								style: { 'textTransform': 'capitalize', fontWeight: '100', color: 'gray' },
								type: 'text',
								id: 'isndistrict_' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('district') > -1 ? 'fill-error' : ''), required: true,
								autoComplete: 'district',
								name: 'district',
								value: 'Select District', disabled: true,
								'data-param': 'district'
							}),
							_react2.default.createElement(
								'label',
								{ className: 'form-control-placeholder datePickerLabel', htmlFor: 'isndistrict_' + this.props.member_id },
								'District'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
						),
						this.props.validateErrors.indexOf('district') > -1 ? commonMsgSpan : '',
						show_createApi_keys.indexOf('district') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.createApiErrors.district[0]
						) : ''
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						this.state.district_code != '' ? _react2.default.createElement(
							'div',
							{ className: 'ins-form-group autocomplete' },
							_react2.default.createElement('input', { style: { 'textTransform': 'capitalize' },
								type: 'text',
								id: 'isnTown_' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('state') > -1 ? 'fill-error' : '') + ' userTown', required: true,
								autoComplete: 'town',
								name: 'town',
								value: this.state.town,
								'data-param': 'town',
								onChange: this.handleTown.bind(this, 'town'),
								onBlur: this.handleSubmit.bind(this, false, false),
								onFocus: this.handleOnFocus.bind(this, 'town'),
								'data-state-code': this.state.town_code
							}),
							_react2.default.createElement(
								'label',
								{ className: 'form-control-placeholder', htmlFor: 'isnTown_' + this.props.member_id },
								'Town'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
						) : _react2.default.createElement(
							'div',
							{ className: 'ins-form-group', onClick: this.showAlert.bind(this, ' district ') },
							_react2.default.createElement('input', {
								style: { 'textTransform': 'capitalize', fontWeight: '100', color: 'gray' },
								type: 'text',
								id: 'isndistrict_' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('town') > -1 ? 'fill-error' : ''), required: true,
								autoComplete: 'town',
								name: 'town',
								value: 'Select Town', disabled: true,
								'data-param': 'town'
							}),
							_react2.default.createElement(
								'label',
								{ className: 'form-control-placeholder datePickerLabel', htmlFor: 'isndistrict_' + this.props.member_id },
								'Town'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
						),
						this.props.validateErrors.indexOf('town') > -1 ? commonMsgSpan : '',
						show_createApi_keys.indexOf('town') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.createApiErrors.town[0]
						) : ''
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-form-group' },
							_react2.default.createElement('input', {
								style: { 'textTransform': 'capitalize' },
								type: 'text',
								id: 'insaddress' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('address') > -1 ? 'fill-error' : ''), required: true,
								autoComplete: 'address',
								name: 'address',
								value: this.state.address,
								'data-param': 'address',
								onChange: this.handleChange.bind(this, 'address'),
								onBlur: this.handleSubmit.bind(this, false, false),
								onFocus: this.handleOnFocus.bind(this, 'address')
							}),
							_react2.default.createElement(
								'label',
								{ className: 'form-control-placeholder', htmlFor: 'insaddress' + this.props.member_id },
								_react2.default.createElement('span', { className: 'labelDot' }),
								'Full Address'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
						),
						this.props.validateErrors.indexOf('address') > -1 ? commonMsgSpan : '',
						show_createApi_keys.indexOf('address') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.createApiErrors.address[0]
						) : ''
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_react2.default.createElement(
							'div',
							{ className: 'ins-form-group mb-0' },
							_react2.default.createElement('input', {
								type: 'number',
								id: 'isnpin_' + this.props.member_id,
								className: 'form-control ins-form-control ' + (this.props.validateErrors.indexOf('pincode') > -1 ? 'fill-error' : ''), required: true,
								autoComplete: 'pincode',
								name: 'pincode',
								value: this.state.pincode,
								'data-param': 'pincode',
								onKeyPress: this.handlekey.bind(this),
								onChange: this.handleChange.bind(this, 'pincode'),
								onBlur: this.handleSubmit.bind(this, false, false),
								onFocus: this.handleOnFocus.bind(this, 'pincode')
							}),
							_react2.default.createElement(
								'label',
								{ className: 'form-control-placeholder', htmlFor: 'isnpin_' + this.props.member_id },
								_react2.default.createElement('span', { className: 'labelDot' }),
								'Pincode'
							),
							_react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
						),
						this.props.validateErrors.indexOf('pincode') > -1 ? commonMsgSpan : '',
						this.props.validateOtherErrors.indexOf('pincode') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							'Please Enter Valid Pincode'
						) : '',
						show_createApi_keys.indexOf('pincode') > -1 ? _react2.default.createElement(
							'span',
							{ className: 'fill-error-span' },
							this.props.createApiErrors.pincode[0]
						) : ''
					),
					_react2.default.createElement('div', null)
				),
				this.props.is_endorsement && this.state.is_change ? _react2.default.createElement(_insuranceProofs2.default, this.props) : ''
			);
		}
	}]);

	return InsuranceSelf;
}(_react2.default.Component);

exports.default = InsuranceSelf;

/***/ }),

/***/ "./dev/js/components/insurance/stateCityAutoComplete.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/insurance/stateCityAutoComplete.js ***!
  \**************************************************************/
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

var StateCityAutoComplete = function (_React$Component) {
    _inherits(StateCityAutoComplete, _React$Component);

    function StateCityAutoComplete(props) {
        _classCallCheck(this, StateCityAutoComplete);

        var _this = _possibleConstructorReturn(this, (StateCityAutoComplete.__proto__ || Object.getPrototypeOf(StateCityAutoComplete)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(StateCityAutoComplete, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'autocomplete', style: { width: '300px' } },
                _react2.default.createElement('input', { id: 'myInput', type: 'text', name: 'myCountry', placeholder: 'Country', onChange: this.handleOnChange.bind(this, this.props.state) })
            );
        }
    }]);

    return StateCityAutoComplete;
}(_react2.default.Component);

exports.default = StateCityAutoComplete;

/***/ }),

/***/ "./node_modules/compress.js/index.js":
/*!*******************************************!*\
  !*** ./node_modules/compress.js/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var i,a,r;!function(o,u){a=[t,n(1),n(2),n(3),n(4),n(5),n(6)],i=u,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t,e,n,i,a,r,o){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}function s(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var d=u(e),l=u(n),c=u(i),h=u(a),v=u(r),p=u(o),g=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),w=function(){function t(){f(this,t)}return g(t,[{key:"attach",value:function(t,e){var n=this;return new Promise(function(i,a){var r=document.querySelector(t);r.setAttribute("accept","image/*"),r.addEventListener("change",function(t){var a=n.compress([].concat(s(t.target.files)),e);i(a)},!1)})}},{key:"compress",value:function(t,e){function n(t,e){var n=new v.default(e);return n.start=window.performance.now(),n.alt=t.name,n.ext=t.type,n.startSize=t.size,p.default.orientation(t).then(function(e){return n.orientation=e,c.default.load(t)}).then(i(n))}function i(t){return function(e){return h.default.load(e).then(function(e){if(t.startWidth=e.naturalWidth,t.startHeight=e.naturalHeight,t.resize){var n=h.default.resize(t.maxWidth,t.maxHeight)(e.naturalWidth,e.naturalHeight),i=n.width,a=n.height;t.endWidth=i,t.endHeight=a}else t.endWidth=e.naturalWidth,t.endHeight=e.naturalHeight;return l.default.imageToCanvas(t.endWidth,t.endHeight,t.orientation)(e)}).then(function(e){return t.iterations=1,t.base64prefix=d.default.prefix(t.ext),a(e,t.startSize,t.quality,t.size,t.minQuality,t.iterations)}).then(function(e){return t.finalSize=d.default.size(e),d.default.data(e)}).then(function(e){t.end=window.performance.now();var n=t.end-t.start;return{data:e,prefix:t.base64prefix,elapsedTimeInSeconds:n/1e3,alt:t.alt,initialSizeInMb:l.default.size(t.startSize).MB,endSizeInMb:l.default.size(t.finalSize).MB,ext:t.ext,quality:t.quality,endWidthInPx:t.endWidth,endHeightInPx:t.endHeight,initialWidthInPx:t.startWidth,initialHeightInPx:t.startHeight,sizeReducedInPercent:(t.startSize-t.finalSize)/t.startSize*100,iterations:t.iterations}})}}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments[5],u=l.default.canvasToBase64(t,n),s=d.default.size(u);return o+=1,s>i?a(t,s,n-.1,i,r,o):n>r?a(t,s,n-.1,i,r,o):n<.5?u:u}return Promise.all(t.map(function(t){return n(t,e)}))}}],[{key:"convertBase64ToFile",value:function(t,e){return l.default.base64ToFile(t,e)}}]),t}();t.exports=w})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){var e=t.replace(/^data:image\/\w+;base64,/,"").length;return(e-814)/1.37},n=function(t){return t.split(";")[0].match(/jpeg|png|gif/)[0]},i=function(t){return t.replace(/^data:image\/\w+;base64,/,"")},a=function(t){return"data:"+t+";base64,"};t.default={size:e,mime:n,data:i,prefix:a}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image/jpeg",n=window.atob(t),i=[],a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return new window.Blob([new Uint8Array(i)],{type:e})},n=function(t,e,n){var i=document.createElement("canvas"),a=i.getContext("2d");return i.width=t,i.height=e,function(r){if(!n||n>8)return a.drawImage(r,0,0,i.width,i.height),i;switch(n>4&&(i.width=e,i.height=t),n){case 2:a.translate(t,0),a.scale(-1,1);break;case 3:a.translate(t,e),a.rotate(Math.PI);break;case 4:a.translate(0,e),a.scale(1,-1);break;case 5:a.rotate(.5*Math.PI),a.scale(1,-1);break;case 6:a.rotate(.5*Math.PI),a.translate(0,-e);break;case 7:a.rotate(.5*Math.PI),a.translate(t,-e),a.scale(-1,1);break;case 8:a.rotate(-.5*Math.PI),a.translate(-t,0)}return n>4?a.drawImage(r,0,0,i.height,i.width):a.drawImage(r,0,0,i.width,i.height),i}},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.75,n=t.toDataURL("image/jpeg",e);return n},a=function(t){return{KB:t/1e3,MB:t/1e6}};t.default={base64ToFile:e,imageToCanvas:n,canvasToBase64:i,size:a}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return new Promise(function(e,n){var i=new window.FileReader;i.addEventListener("load",function(t){e(t.target.result)},!1),i.addEventListener("error",function(t){n(t)},!1),i.readAsDataURL(t)})};t.default={load:e}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return new Promise(function(e,n){var i=new window.Image;i.addEventListener("load",function(){e(i)},!1),i.addEventListener("error",function(t){n(t)},!1),i.src=t})},n=function(t,e){return function(n,i){if(!t&&!e)return{width:n,height:i};var a=n/i,r=t/e,o=void 0,u=void 0;return a>r?(o=Math.min(n,t),u=o/a):(u=Math.min(i,e),o=u*a),{width:o,height:u}}};t.default={load:e,resize:n}})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function t(n){var i=n.quality,a=void 0===i?.75:i,r=n.size,o=void 0===r?2:r,u=n.maxWidth,s=void 0===u?1920:u,f=n.maxHeight,d=void 0===f?1920:f,l=n.resize,c=void 0===l||l;e(this,t),this.start=window.performance.now(),this.end=null,this.alt=null,this.ext=null,this.startSize=null,this.startWidth=null,this.startHeight=null,this.size=1e3*o*1e3,this.endSize=null,this.endWidth=null,this.endHeight=null,this.iterations=0,this.base64prefix=null,this.quality=a,this.resize=c,this.maxWidth=s,this.maxHeight=d,this.orientation=1};t.default=n})},function(t,e,n){var i,a,r;!function(n,o){a=[e],i=o,r="function"==typeof i?i.apply(e,a):i,!(void 0!==r&&(t.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(t){return new Promise(function(e,n){var i=new window.FileReader;i.onload=function(t){var n=new DataView(t.target.result);65496!==n.getUint16(0,!1)&&e(-2);for(var i=n.byteLength,a=2;a<i;){var r=n.getUint16(a,!1);if(a+=2,65505===r){1165519206!==n.getUint32(a+=2,!1)&&e(-1);var o=18761===n.getUint16(a+=6,!1);a+=n.getUint32(a+4,o);var u=n.getUint16(a,o);a+=2;for(var s=0;s<u;s++)274===n.getUint16(a+12*s,o)&&e(n.getUint16(a+12*s+8,o))}else{if(65280!==(65280&r))break;a+=n.getUint16(a,!1)}}e(-1)},i.readAsArrayBuffer(t.slice(0,65536))})};t.default={orientation:e}})}])});
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlRmFtaWx5LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2luc3VyYW5jZS9pbnN1cmFuY2VQcm9vZnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZVNlbGYuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL3N0YXRlQ2l0eUF1dG9Db21wbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29tcHJlc3MuanMvaW5kZXguanMiXSwibmFtZXMiOlsibW9tZW50IiwicmVxdWlyZSIsIkluc3VyYW5jZU90aGVycyIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwibGFzdF9uYW1lIiwibWlkZGxlX25hbWUiLCJnZW5kZXIiLCJkb2IiLCJpZCIsInJlbGF0aW9uIiwidGl0bGUiLCJtZW1iZXJfdHlwZSIsInVzZXJQcm9maWxlcyIsInNob3dQb3B1cCIsInNldERlZmF1bHQiLCJwcm9maWxlX2lkIiwib25seV9hZHVsdCIsImRhdGVNb2RhbCIsIm5vX2xuYW1lIiwic2VsZWN0ZWREYXRlU3BhbiIsIkRhdGUiLCJpc19jaGFuZ2UiLCJ5ZWFyIiwibW50aCIsImRheSIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJwcm9maWxlIiwiaXNfZW5kb3JzZW1lbnQiLCJPYmplY3QiLCJrZXlzIiwic2VsZl9kYXRhX3ZhbHVlcyIsImxlbmd0aCIsInVzZXJfZGF0YSIsImFzc2lnbiIsIm9sZERhdGUiLCJzcGxpdCIsInNldFN0YXRlIiwicG9wdWxhdGVEYXRlcyIsIm1lbWJlcl9pZCIsImZpcnN0X25hbWUiLCJzZWxmIiwiYWR1bHRfdGl0bGUiLCJhZHVsdF9nZW5kZXIiLCJuZXh0UHJvZmlsZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxmX2dlbmRlciIsImlzX2NoaWxkX29ubHkiLCJmaWVsZCIsImV2ZW50IiwidGl0bGVfdmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbGZfZGF0YSIsInVzZXJEYXRhIiwiZ2V0QXR0cmlidXRlIiwicmVsYXRpb25fdmFsdWUiLCJpc19lbmRvcmVzbWVudCIsInNsaWNlIiwidG9kYXkiLCJkZCIsImdldERhdGUiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwibmV3UHJvZmlsZWlkIiwibmV3UHJvZmlsZSIsImZpbmFsRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RJbnN1cmFuY2VQcm9maWxlIiwicGFyYW1faWQiLCJnZW5kZXJfdmFsdWUiLCJkYXRlIiwidG9EYXRlIiwiYWN0dWFsX2RhdGUiLCJqb2luIiwiY3VycmVudERhdGUiLCJwcmV2ZW50RGVmYXVsdCIsIm1vbnRoIiwidG9DcmVhdGVPcHRpb25zIiwiYWdlX3RocmVzaG9sZCIsInNlbGVjdGVkX3BsYW4iLCJhZHVsdF9jb3VudCIsInRocmVzaG9sZCIsImNoaWxkX21heF9hZ2UiLCJtYXhfYWdlIiwiZGVmYXVsdF9tb250aHMiLCJkYXlkcm9wZG93biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb250aGRyb3Bkb3duIiwieWVhcmRyb3Bkb3duIiwiZ2V0VVRDRGF0ZSIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRnVsbFllYXIiLCJjdXJyZW50WWVhciIsImRheXNJbkN1cnJNb250aCIsImRheXNJbk1vbnRoIiwiaW5uZXJIVE1MIiwib3B0X2RkIiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJoaWRkZW4iLCJhcHBlbmRDaGlsZCIsIm9wdF9tbSIsIm9wdF95eSIsImkiLCJvcHQiLCJvbmNoYW5nZSIsIk5ld1NlbGVjdGVkZGF5cyIsInN1Ym1pdERvYiIsIm5ld01vbnRoIiwibmV3WWVhciIsInNob3dfY3JlYXRlQXBpX2tleXNfYWR1bHQiLCJzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkIiwic2hvd19jcmVhdGVBcGlfa2V5c19jaGlsZDIiLCJVcGxvYWRlZF9pbWFnZV9kYXRhIiwiY29tbW9uTXNnU3BhbiIsImVycm9yTWVzc2FnZXMiLCJzaG93X2NyZWF0ZUFwaV9rZXlzIiwiY3JlYXRlQXBpRXJyb3JzQ2hpbGQiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwiZmllbGRfbmFtZSIsImZpZWxkX3ZhbHVlIiwicHVzaCIsImNyZWF0ZUFwaUVycm9ycyIsIkVycm9yTmFtZUlkIiwidmFsaWRhdGluZ05hbWVzIiwibWVtYmVyc19wcm9vZnMiLCJmaWx0ZXIiLCJ4IiwibWFyZ2luQm90dG9tIiwibWVtYmVyX3ZpZXdfaWQiLCJzaG93X3NlbGVjdGVkX3Byb2ZpbGVzIiwiVVNFUiIsIkFTU0VUU19CQVNFX1VSTCIsInBhZGRpbmciLCJoYW5kbGVUaXRsZSIsInZhbGlkYXRlRXJyb3JzIiwiaW5kZXhPZiIsIm1hcmdpblRvcCIsInZhbGlkYXRlT3RoZXJFcnJvcnMiLCJoYW5kbGVSZWxhdGlvbiIsImhhbmRsZUNoYW5nZSIsImhhbmRsZU5hbWVDaGFyYWN0ZXJzIiwid2lkdGgiLCJoYW5kbGVMYXN0bmFtZSIsImZvbnRTaXplIiwicGFkZGluZ0xlZnQiLCJsaW5lSGVpZ2h0IiwiaGFuZGxlR2VuZGVyIiwicmlnaHQiLCJ2YWxpZGF0ZURvYkVycm9ycyIsImN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQiLCJ0b2dnbGVQb3B1cCIsImhpZGVTZWxlY3RQcm9maWxlUG9wdXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsInF1ZXJ5U3RyaW5nIiwiQ29tcHJlc3MiLCJJbnN1cmFuY2VQcm9vZnMiLCJkYXRhVXJsIiwiem9vbUltYWdlVXJsIiwiem9vbUltYWdlIiwib3BlblBkZiIsIm9wZW5QZGZVcmwiLCJpc0xvYWRpbmciLCJlIiwiZmlsZXMiLCJmaWxlIiwiaW5jbHVkZXMiLCJmaW5pc2hDcm9wIiwiY29tcHJlc3MiLCJxdWFsaXR5IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJ0aGVuIiwicmVzdWx0cyIsImltZzEiLCJiYXNlNjRzdHIiLCJkYXRhIiwiaW1nRXh0IiwiZXh0IiwiY29udmVydEJhc2U2NFRvRmlsZSIsImdldEJhc2U2NCIsImNhdGNoIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwiY2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsImZpbGVfYmxvYl9kYXRhIiwiZGF0YVVSSXRvQmxvYiIsIm1lbV9kYXRhIiwiZXhpc3RpbmdEYXRhIiwiaW1nX3RhZyIsImZvcm1fZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXBsb2FkUHJvb2YiLCJlcnIiLCJtZW1iZXIiLCJpbWdfcGF0aF9pZHMiLCJpbWFnZSIsImRvY3VtZW50X2ltYWdlIiwic3RvcmVNZW1iZXJQcm9vZnMiLCJkYXRhVVJJIiwiYmluYXJ5IiwiYXRvYiIsImFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJVaW50OEFycmF5IiwidHlwZSIsImltZyIsInJlbW92ZU1lbWJlclByb29mIiwiaW1nX3VybCIsInBkZl91cmwiLCJzaG93X3VwbG9hZCIsIm1hcmdpbiIsImNsaWNrIiwiZGlzcGxheSIsInBpY2tGaWxlIiwicmVtb3ZlSW1hZ2UiLCJJbnN1cmFuY2VTZWxmIiwiZW1haWwiLCJwaW5jb2RlIiwiYWRkcmVzcyIsInRvd24iLCJkaXN0cmljdCIsInByb2ZpbGVfZmxhZyIsInN0YXRlX2NvZGUiLCJkaXN0cmljdF9jb2RlIiwidG93bl9jb2RlIiwiZGlzYWJsZU5hbWUiLCJkaXNhYmxlRW1haWwiLCJkaXNhYmxlRG9iIiwiZW1haWxWZXJpZmllZCIsImhhbmRsZUVtYWlsIiwiZGVmYXVsdFByb2ZpbGUiLCJnZXRVc2VyRGV0YWlscyIsImNpdHlfY29kZSIsIm5ld05hbWUiLCJwcm9maWxlTGVuZ3RoIiwicHJvZmlsZXMiLCJpc0R1bW15VXNlciIsIm5ld19wcm9maWxlIiwidGVtcEFycmF5IiwiaXNfZW5kb3JzZV9lbWFpbCIsImZvcm1Jc1ZhbGlkIiwidmFsaWRFbWFpbCIsInRlc3QiLCJmZWlsZCIsInN0YXRlcyIsImluc3VybmFjZURhdGEiLCJnc3RfY29kZSIsInN0YXRlX25hbWUiLCJhdXRvY29tcGxldGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGlzdHJpY3RzX29wdCIsImsiLCJkaXN0cmljdHMiLCJkaXN0cmljdF9uYW1lIiwiY2l0eV9vcHQiLCJjaXRpZXMiLCJjaXR5IiwiY2l0eV9uYW1lIiwiaW5wIiwiYXJyIiwiY3VycmVudEZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcmVudERpdiIsImNoaWxkRGl2IiwidmFsIiwiY2xvc2VBbGxMaXN0cyIsInNldEF0dHJpYnV0ZSIsInBhcmVudE5vZGUiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsImNvZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImtleUNvZGUiLCJhZGRBY3RpdmUiLCJyZW1vdmVBY3RpdmUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJlbG1udCIsInJlbW92ZUNoaWxkIiwibmV3ZW1haWwiLCJjaGVja0lzRW1haWxWZXJmaWVkIiwiaGFuZGxlT25Gb2N1cyIsInZlcmlmeUVuZG9yc2VtZW50RW1haWwiLCJoYW5kbGVTdGF0ZSIsImhhbmRsZURpc3RyaWN0Iiwic2hvd0FsZXJ0IiwiZm9udFdlaWdodCIsImNvbG9yIiwiaGFuZGxlVG93biIsImhhbmRsZWtleSIsIlN0YXRlQ2l0eUF1dG9Db21wbGV0ZSIsImhhbmRsZU9uQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsU0FBU0MsbUJBQU9BLENBQUMsK0NBQVIsQ0FBZjs7SUFFTUMsZTs7O0FBQ0wsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFNBQU0sRUFETTtBQUVaQyxjQUFXLEVBRkM7QUFHWkMsZ0JBQVksRUFIQTtBQUlaQyxX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RkFBc0YsZUFBZSwrRkFBK0YsU0FBUyxlQUFlLE9BQU8sb0JBQW9CLFdBQVcsd0RBQXdELEVBQUUsaUJBQWlCLFVBQVUsZUFBZSw2RUFBNkUsa0JBQWtCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxrQkFBa0IsaUNBQWlDLDRCQUE0QixzQ0FBc0MsbUJBQW1CLDRDQUE0QyxLQUFLLHdCQUF3QixHQUFHLFdBQVcsUUFBUSxFQUFFLGlCQUFpQixVQUFVLGVBQWUsNkVBQTZFLGtCQUFrQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsa0JBQWtCLGlDQUFpQyx1QkFBdUIscUNBQXFDLEtBQUssNENBQTRDLEtBQUssYUFBYSxFQUFFLGlCQUFpQixxQkFBcUIsaUJBQWlCLGtCQUFrQixrQ0FBa0MsNERBQTRELG9CQUFvQixXQUFXLGlCQUFpQixFQUFFLGlCQUFpQixVQUFVLGVBQWUsNkVBQTZFLGtCQUFrQixhQUFhLGdCQUFnQiw4RUFBOEUsc0NBQXNDLFNBQVMsRUFBRSxvQkFBb0IsMkpBQTJKLCtWQUErVixZQUFZLEVBQUUsaUJBQWlCLFVBQVUsZUFBZSw2RUFBNkUsa0JBQWtCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxrQkFBa0IsaUNBQWlDLDRCQUE0QixxQkFBcUIsb0NBQW9DLGlDQUFpQywyQkFBMkIsSUFBSSxFQUFFLHdCQUF3QixtQkFBbUIseUNBQXlDLG1DQUFtQyxzQkFBc0IsdUJBQXVCLEtBQUssWUFBWSxJQUFJLDREQUE0RCxLQUFLLDJCQUEyQixzQkFBc0IsTUFBTSx1Q0FBdUMsR0FBRyxXQUFXLGVBQWUsRUFBRSxHQUFHO0FBQy8vTyxpQyIsImZpbGUiOiI0NS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW5zdXJQb3B1cCBmcm9tICcuL2luc3VyYW5jZVBvcHVwLmpzJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyJ1xuaW1wb3J0IEluc3VyYW5jZVByb29mcyBmcm9tICcuL2luc3VyYW5jZVByb29mcy5qcydcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpXG5cbmNsYXNzIEluc3VyYW5jZU90aGVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0bGFzdF9uYW1lOiAnJyxcblx0XHRcdG1pZGRsZV9uYW1lOicnLFxuXHRcdFx0Z2VuZGVyOiAnJyxcblx0XHRcdGRvYjogJycsXG5cdFx0XHRpZDogJycsXG5cdFx0XHRyZWxhdGlvbjogJycsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRtZW1iZXJfdHlwZTonJyxcblx0XHRcdHVzZXJQcm9maWxlczoge30sXG5cdFx0XHRzaG93UG9wdXA6IGZhbHNlLFxuXHRcdFx0c2V0RGVmYXVsdDogZmFsc2UsXG5cdFx0XHRwcm9maWxlX2lkOm51bGwsXG5cdFx0XHRvbmx5X2FkdWx0OmZhbHNlLFxuXHRcdFx0Ly8gc2VsZWN0X3Byb2ZpbGVfZGlzYWJsZTpmYWxzZSxcblx0XHRcdC8vIHNob3dfbG5hbWU6IHRoaXMucHJvcHMubm9fbG5hbWUsXG5cdFx0XHQvLyBzaG93X2xuYW1lX2ZsYWc6dGhpcy5wcm9wcy5ub19sbmFtZSxcblx0XHRcdGRhdGVNb2RhbDpmYWxzZSxcblx0XHRcdG5vX2xuYW1lOmZhbHNlLFxuICAgIFx0ICAgIHNlbGVjdGVkRGF0ZVNwYW46bmV3IERhdGUoKSxcbiAgICBcdCAgICBpc19jaGFuZ2U6ZmFsc2UsXG4gICAgXHQgICAgeWVhcjpudWxsLFxuICAgIFx0ICAgIG1udGg6bnVsbCxcbiAgICBcdCAgICBkYXk6bnVsbFxuXHRcdH1cblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGxldCBwcm9maWxlXG5cdFx0aWYodGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCl7XG5cdFx0XHRpZihPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMpLmxlbmd0aD4wICYmIHRoaXMucHJvcHMudXNlcl9kYXRhLmxlbmd0aCA+IDApe1xuXHRcdFx0XHRwcm9maWxlPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdGhpcy5wcm9wcy51c2VyX2RhdGFbMF0uaWRdKVxuXHRcdFx0XHRsZXQgb2xkRGF0ZVxuXHRcdFx0XHRpZihPYmplY3Qua2V5cyhwcm9maWxlKS5sZW5ndGggPiAwICYmIHByb2ZpbGUuZG9iKXtcblx0XHRcdFx0XHRvbGREYXRlPSBwcm9maWxlLmRvYi5zcGxpdCgnLScpXG5cdFx0XHRcdCAgICBcdHRoaXMuc2V0U3RhdGUoe3llYXI6b2xkRGF0ZVswXSxtbnRoOm9sZERhdGVbMl0sZGF5Om9sZERhdGVbMV19LCgpPT57XG5cdFx0XHRcdCAgICBcdFx0dGhpcy5wb3B1bGF0ZURhdGVzKHRoaXMucHJvcHMubWVtYmVyX2lkLHRydWUpXG5cdFx0XHRcdCAgICB9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoey4uLnByb2ZpbGV9LCgpPT57XG5cdCAgICBcdFx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KHRydWUpXG5cdCAgICBcdFx0XHR9KVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGxldCBvbGREYXRlXG5cdFx0XHRcdGlmKHRoaXMucHJvcHMudXNlcl9kYXRhICYmIHRoaXMucHJvcHMudXNlcl9kYXRhLmxlbmd0aCA+IDApe1xuXHRcdFx0XHRcdGlmKHRoaXMucHJvcHMudXNlcl9kYXRhWzBdLnJlbGF0aW9uID09ICdzcG91c2UnKXtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe29ubHlfYWR1bHQ6dHJ1ZX0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHRoaXMucHJvcHMudXNlcl9kYXRhICYmIHRoaXMucHJvcHMudXNlcl9kYXRhWzBdLmRvYil7XG5cdFx0XHRcdFx0XHRvbGREYXRlPSB0aGlzLnByb3BzLnVzZXJfZGF0YVswXS5kb2Iuc3BsaXQoJy0nKVxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7eWVhcjpvbGREYXRlWzBdLG1udGg6b2xkRGF0ZVsyXSxkYXk6b2xkRGF0ZVsxXX0sKCk9Pntcblx0XHRcdFx0ICAgIFx0XHR0aGlzLnBvcHVsYXRlRGF0ZXModGhpcy5wcm9wcy5tZW1iZXJfaWQsdHJ1ZSlcblx0XHRcdFx0ICAgIFx0fSlcblx0XHRcdFx0XHR9XG5cdCAgICBcdFx0XHR0aGlzLnNldFN0YXRlKHsuLi50aGlzLnByb3BzLnVzZXJfZGF0YVswXSwgbmFtZTp0aGlzLnByb3BzLnVzZXJfZGF0YVswXS5maXJzdF9uYW1lLG1lbWJlcl90eXBlOnRoaXMucHJvcHMubWVtYmVyX3R5cGUsIHByb2ZpbGVfaWQ6dGhpcy5wcm9wcy51c2VyX2RhdGFbMF0ucHJvZmlsZSxpc19jaGFuZ2U6ZmFsc2V9LCgpPT57XG5cdCAgICBcdFx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KHRydWUpXG5cdCAgICBcdFx0XHRcdC8vIHRoaXMucG9wdWxhdGVEYXRlcyh0aGlzLnByb3BzLm1lbWJlcl9pZCx0cnVlKVxuXHQgICAgXHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0aWYoIXRoaXMuc3RhdGUueWVhciAmJiAhdGhpcy5zdGF0ZS5tbnRoICYmICF0aGlzLnN0YXRlLm1udGgpe1xuXHRcdFx0XHR0aGlzLnBvcHVsYXRlRGF0ZXModGhpcy5wcm9wcy5tZW1iZXJfaWQsdHJ1ZSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0bGV0IGFkdWx0X3RpdGxlXG5cdFx0bGV0IGFkdWx0X2dlbmRlclxuXHRcdGlmKCFwcm9wcy5pc19lbmRvcnNlbWVudCl7XG5cdFx0XHRpZihwcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3Byb3BzLm1lbWJlcl9pZF0pe1xuXHRcdFx0XHRsZXQgcHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1t0aGlzLnByb3BzLm1lbWJlcl9pZF0pXG5cdFx0XHRcdGxldCBuZXh0UHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnNlbGZfZGF0YV92YWx1ZXNbcHJvcHMubWVtYmVyX2lkXSlcblx0XHRcdFx0aWYgKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpICE9IEpTT04uc3RyaW5naWZ5KG5leHRQcm9maWxlKSkge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyAuLi5uZXh0UHJvZmlsZSB9KVxuXHRcdFx0XHRcdGlmKCFzZWxmLnN0YXRlLnllYXIgJiYgIXNlbGYuc3RhdGUubW50aCAmJiAhc2VsZi5zdGF0ZS5tbnRoKXtcblx0XHRcdFx0XHQgICAgc2VsZi5wb3B1bGF0ZURhdGVzKHByb3BzLm1lbWJlcl9pZCx0cnVlKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fWVsc2UgaWYocHJvcHMubWVtYmVyX2lkICYmICF0aGlzLnN0YXRlLnNldERlZmF1bHQpe1xuXHRcdFx0XHRpZihwcm9wcy5zZWxmX2dlbmRlciA9PSAnbScpe1xuXHRcdFx0XHRcdGFkdWx0X3RpdGxlID0gJ21ycy4nXG5cdFx0XHRcdFx0YWR1bHRfZ2VuZGVyID0gJ2YnXG5cdFx0XHRcdH1lbHNlIGlmKHByb3BzLnNlbGZfZ2VuZGVyID09ICdmJyl7XG5cdFx0XHRcdFx0YWR1bHRfdGl0bGUgPSAnbXIuJ1xuXHRcdFx0XHRcdGFkdWx0X2dlbmRlciA9ICdtJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2lkOiBwcm9wcy5tZW1iZXJfaWQsIHNldERlZmF1bHQ6dHJ1ZX0sICgpID0+IHtcblx0XHRcdFx0XHRpZih0aGlzLnByb3BzLmlzX2NoaWxkX29ubHkpe1xuXHRcdFx0XHRcdFx0aWYoIXNlbGYuc3RhdGUueWVhciAmJiAhc2VsZi5zdGF0ZS5tbnRoICYmICFzZWxmLnN0YXRlLm1udGgpe1xuXHRcdFx0XHRcdFx0ICAgIHNlbGYucG9wdWxhdGVEYXRlcyhzZWxmLnByb3BzLm1lbWJlcl9pZCx0cnVlKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7bWVtYmVyX3R5cGU6dGhpcy5wcm9wcy5tZW1iZXJfdHlwZX0sKCkgPT57XG5cdFx0XHRcdFx0XHRcdHNlbGYuaGFuZGxlU3VibWl0KClcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0ICAgIHNlbGYucG9wdWxhdGVEYXRlcyhzZWxmLnByb3BzLm1lbWJlcl9pZCx0cnVlKVxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7bWVtYmVyX3R5cGU6dGhpcy5wcm9wcy5tZW1iZXJfdHlwZSxyZWxhdGlvbjonc3BvdXNlJyx0aXRsZTphZHVsdF90aXRsZSxnZW5kZXI6YWR1bHRfZ2VuZGVyLG9ubHlfYWR1bHQ6dHJ1ZX0sKCkgPT57XG5cdFx0XHRcdFx0XHRcdHNlbGYuaGFuZGxlU3VibWl0KClcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0aGFuZGxlVGl0bGUoZmllbGQsIGV2ZW50KSB7XG5cdFx0bGV0IHRpdGxlX3ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0aWYodGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5KXtcblx0XHRcdGlmKHRpdGxlX3ZhbHVlID09ICdtci4nKXtcbiAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7Z2VuZGVyOidtJyxyZWxhdGlvbjonc29uJ30pXHRcblx0ICBcdFx0fWVsc2UgaWYodGl0bGVfdmFsdWUgPT0gJ21pc3MnKXtcblx0ICBcdFx0XHR0aGlzLnNldFN0YXRlKHtnZW5kZXI6J2YnLHJlbGF0aW9uOidkYXVnaHRlcid9KVx0XG5cdCAgXHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGlmKHRpdGxlX3ZhbHVlID09ICdtci4nKXtcbiAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7Z2VuZGVyOidtJ30pXHRcblx0ICBcdFx0fWVsc2UgaWYodGl0bGVfdmFsdWUgPT0gJ21pc3MnKXtcblx0ICBcdFx0XHR0aGlzLnNldFN0YXRlKHtnZW5kZXI6J2YnfSlcdFxuXHQgIFx0XHR9ZWxzZSBpZih0aXRsZV92YWx1ZSA9PSAnbXJzLicpe1xuXHQgIFx0XHRcdHRoaXMuc2V0U3RhdGUoe2dlbmRlcjonZid9KVxuXHQgIFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0sICgpID0+IHtcblx0XHRcdHZhciBzZWxmX2RhdGEgPSB0aGlzLnN0YXRlXG5cdFx0XHRzZWxmX2RhdGEuaXNfY2hhbmdlID0gdHJ1ZVxuXHRcdFx0dGhpcy5wcm9wcy51c2VyRGF0YSgnc2VsZl9kYXRhJywgc2VsZl9kYXRhKVxuXHRcdH0pXG5cdH1cblx0aGFuZGxlQ2hhbmdlKGZpZWxkLCBldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYW0nKV06IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pO1xuXHR9XG5cdGhhbmRsZVJlbGF0aW9uKGZpZWxkLGV2ZW50KSB7XG5cdFx0bGV0IHJlbGF0aW9uX3ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0aWYocmVsYXRpb25fdmFsdWUgPT0gJ3Nvbicpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dGl0bGU6J21hc3QuJyxnZW5kZXI6J20nfSlcdFxuICBcdFx0fWVsc2UgaWYocmVsYXRpb25fdmFsdWUgPT0gJ2RhdWdodGVyJyl7XG4gIFx0XHRcdHRoaXMuc2V0U3RhdGUoe3RpdGxlOidtaXNzJyxnZW5kZXI6J2YnfSlcdFxuICBcdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cmVsYXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSxpc19jaGFuZ2U6dHJ1ZVxuXHRcdH0sKCkgPT57XG5cdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdCh0cnVlLGV2ZW50KVxuXHRcdH0pXG5cdH1cblx0aGFuZGxlU3VibWl0KGlzX2VuZG9yZXNtZW50KSB7XG5cdFx0dmFyIHNlbGZfZGF0YSA9IHRoaXMuc3RhdGVcblx0XHRpZihzZWxmX2RhdGEubmFtZSAhPT0gJycpe1xuXHQgICAgXHRpZihzZWxmX2RhdGEubmFtZS5sZW5ndGggPiA1MCl7XG5cdFx0XHRcdHNlbGZfZGF0YS5uYW1lID0gc2VsZl9kYXRhLm5hbWUuc2xpY2UoMCwgNTApXG5cdFx0XHR9XHRcblx0ICAgIH1cblx0ICAgIGlmKHNlbGZfZGF0YS5taWRkbGVfbmFtZSAhPT0gJycpe1xuXHQgICAgXHRpZihzZWxmX2RhdGEubWlkZGxlX25hbWUubGVuZ3RoID4gNTApe1xuXHRcdFx0XHRzZWxmX2RhdGEubWlkZGxlX25hbWUgPSBzZWxmX2RhdGEubWlkZGxlX25hbWUuc2xpY2UoMCwgNTApXG5cdFx0XHR9XHRcblx0ICAgIH1cblx0ICAgIGlmKHNlbGZfZGF0YS5sYXN0X25hbWUgIT09ICcnKXtcblx0ICAgIFx0aWYoc2VsZl9kYXRhLmxhc3RfbmFtZS5sZW5ndGggPiA1MCl7XG5cdFx0XHRcdHNlbGZfZGF0YS5sYXN0X25hbWUgPSBzZWxmX2RhdGEubGFzdF9uYW1lLnNsaWNlKDAsIDUwKVxuXHRcdFx0fVx0XG5cdCAgICB9XG5cdCAgICBpZighaXNfZW5kb3Jlc21lbnQpe1xuXHQgICAgXHRzZWxmX2RhdGEuaXNfY2hhbmdlID0gdHJ1ZVxuXHQgICAgfVxuXHRcdHRoaXMucHJvcHMudXNlckRhdGEoJ3NlbGZfZGF0YScsIHNlbGZfZGF0YSlcblx0fVxuXHRnZXRUb2RheURhdGUoKXtcblx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRcdHZhciBkZCA9IHRvZGF5LmdldERhdGUoKTtcblx0XHR2YXIgbW0gPSB0b2RheS5nZXRNb250aCgpKzE7IFxuXHRcdHZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTsgXG5cblx0XHRpZihtbTwxMCkgXG5cdFx0e1xuXHRcdCAgICBtbT0nMCcrbW07XG5cdFx0fVxuXHRcdGlmKGRkPDEwKSBcblx0XHR7XG5cdFx0ICAgIGRkPScwJytkZDtcblx0XHR9IFxuXHRcdHRvZGF5ID0geXl5eSsnLScrZGQrJy0nK21tO1xuXHRcdHJldHVybiB0b2RheVxuXHR9XG5cdHRvZ2dsZVBvcHVwKG5ld1Byb2ZpbGVpZCwgbWVtYmVyX2lkLCBuZXdQcm9maWxlKSB7XG5cdFx0bGV0IG9sZERhdGVcblx0XHRsZXQgZmluYWxEYXRlXG5cdFx0aWYobmV3UHJvZmlsZWlkICE9PSAnJyl7XG5cdFx0XHRpZih0aGlzLnByb3BzLmlzX2NoaWxkX29ubHkpe1xuXHRcdFx0XHRpZihuZXdQcm9maWxlLmdlbmRlciA9PSAnbScpe1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3RpdGxlOidtYXN0LicscmVsYXRpb246J3Nvbid9KVxuXHRcdFx0XHR9ZWxzZSBpZihuZXdQcm9maWxlLmdlbmRlciA9PSAnZicpe1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3RpdGxlOidtaXNzJyxyZWxhdGlvbjonZGF1Z2h0ZXInfSlcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGlmKG5ld1Byb2ZpbGUuZ2VuZGVyID09ICdtJyl7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7dGl0bGU6J21yLicscmVsYXRpb246J3Nwb3VzZSd9KVxuXHRcdFx0XHR9ZWxzZSBpZihuZXdQcm9maWxlLmdlbmRlciA9PSAnZicpe1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3RpdGxlOidtcnMuJyxyZWxhdGlvbjonc3BvdXNlJ30pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmKG5ld1Byb2ZpbGUgJiYgbmV3UHJvZmlsZS5kb2Ipe1xuXHRcdFx0XHRvbGREYXRlPSBuZXdQcm9maWxlLmRvYi5zcGxpdCgnLScpXG5cdFx0XHRcdGNvbnNvbGUubG9nKG5ld1Byb2ZpbGUuZG9iKVxuXHRcdFx0XHRjb25zb2xlLmxvZyhvbGREYXRlKVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHt5ZWFyOm9sZERhdGVbMF0sbW50aDpvbGREYXRlWzFdLGRheTpvbGREYXRlWzJdfSwoKT0+e1xuXHQgICAgXHRcdFx0dGhpcy5wb3B1bGF0ZURhdGVzKG5ld1Byb2ZpbGVpZCxmYWxzZSlcblx0ICAgIFx0XHRcdGZpbmFsRGF0ZSA9IHRoaXMuc3RhdGUueWVhciArICctJysgdGhpcy5zdGF0ZS5tbnRoICsgJy0nK3RoaXMuc3RhdGUuZGF5IFxuXHQgICAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZG9iOmZpbmFsRGF0ZX0pXG5cdCAgICBcdFx0fSlcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnBvcHVsYXRlRGF0ZXMobmV3UHJvZmlsZWlkLGZhbHNlKVxuXHRcdFx0fVxuXHQgICAgXHRcblx0XHRcdHRoaXMucHJvcHMuc2VsZWN0SW5zdXJhbmNlUHJvZmlsZShuZXdQcm9maWxlaWQsIG1lbWJlcl9pZCwgbmV3UHJvZmlsZSwgdGhpcy5wcm9wcy5wYXJhbV9pZCkgLy8gc2VsZWN0IGZyb20gcHJvZmlsZSBvcHRpb25cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzaG93UG9wdXA6ICF0aGlzLnN0YXRlLnNob3dQb3B1cCxcblx0XHRcdFx0cHJvZmlsZV9pZDogbmV3UHJvZmlsZWlkLFxuXHRcdFx0XHRpZDpuZXdQcm9maWxlaWRcblx0XHRcdH0sKCkgPT57XG5cdFx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KGZhbHNlKTtcblx0XHRcdH0pXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6ICF0aGlzLnN0YXRlLnNob3dQb3B1cH0pXG5cdFx0fVxuXHR9XG5cdGhhbmRsZUdlbmRlcihmaWVsZCwgZXZlbnQpIHtcblx0XHRsZXQgZ2VuZGVyX3ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0aWYodGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5KXtcblx0XHRcdGlmKGdlbmRlcl92YWx1ZSA9PSAnbScpe1xuICBcdFx0XHR0aGlzLnNldFN0YXRlKHt0aXRsZTonbWFzdC4nLHJlbGF0aW9uOidzb24nfSlcdFxuXHQgIFx0XHR9ZWxzZSBpZihnZW5kZXJfdmFsdWUgPT0gJ2YnKXtcblx0ICBcdFx0XHR0aGlzLnNldFN0YXRlKHt0aXRsZTonbWlzcycscmVsYXRpb246J2RhdWdodGVyJ30pXHRcblx0ICBcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0aWYoZ2VuZGVyX3ZhbHVlID09ICdtJyl7XG4gIFx0XHRcdHRoaXMuc2V0U3RhdGUoe3RpdGxlOidtci4nfSlcdFxuXHQgIFx0XHR9ZWxzZSBpZihnZW5kZXJfdmFsdWUgPT0gJ2YnKXtcblx0ICBcdFx0XHR0aGlzLnNldFN0YXRlKHt0aXRsZTonbXJzLid9KVx0XG5cdCAgXHRcdH1cblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRnZW5kZXI6IGV2ZW50LnRhcmdldC52YWx1ZSwgaXNfY2hhbmdlOnRydWVcblx0XHR9LCgpID0+e1xuXHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQoZmFsc2UsZXZlbnQpXG5cdFx0fSlcblx0fVxuXHRvcGVuRGF0ZU1vZGFsKCkge1xuXHQgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRlTW9kYWw6ICF0aGlzLnN0YXRlLmRhdGVNb2RhbCB9KVxuXHR9XG5cdHNlbGVjdERhdGVGcm9tQ2FsZW5kYXIoZGF0ZSkge1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUudG9EYXRlKClcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZGF0ZSlcblx0XHQgICAgbGV0IG1udGggPSAoXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpKzEpKS5zbGljZSgtMilcblx0XHQgICAgbGV0IGRheSAgPSAoXCIwXCIgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuXHRcdCAgICBsZXQgYWN0dWFsX2RhdGUgPSAgWyBkYXRlLmdldEZ1bGxZZWFyKCksIG1udGgsIGRheSBdLmpvaW4oXCItXCIpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRGF0ZVNwYW46IGFjdHVhbF9kYXRlLCBkYXRlTW9kYWw6IGZhbHNlLCBjdXJyZW50RGF0ZTogbmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpLGRvYjogYWN0dWFsX2RhdGUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdChmYWxzZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZU5hbWVDaGFyYWN0ZXJzKGZpZWxkLGV2ZW50KXtcblx0XHRpZihmaWVsZCA9PSAnbmFtZScpe1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5uYW1lLmxlbmd0aCA9PSA1MCl7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgfVxuICAgIFx0fWVsc2UgaWYoZmllbGQgPT0gJ2xhc3RfbmFtZScpe1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5sYXN0X25hbWUubGVuZ3RoID09IDUwKXtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgICB9XG4gICAgXHR9ZWxzZSBpZihmaWVsZCA9PSAnbWlkZGxlX25hbWUnKXtcblx0XHRcdGlmKHRoaXMuc3RhdGUubWlkZGxlX25hbWUubGVuZ3RoID09IDUwKXtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ICAgICAgICB9XG4gICAgXHR9XG5cblx0fVxuXHRoYW5kbGVMYXN0bmFtZShldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7bm9fbG5hbWU6IXRoaXMuc3RhdGUubm9fbG5hbWV9LCgpID0+e1xuXHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQoZmFsc2UsZXZlbnQpXG5cdFx0fSlcblx0fVxuXG5cdGhpZGVTZWxlY3RQcm9maWxlUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkYXlzSW5Nb250aChtb250aCwgeWVhcikge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZURhdGVzKG1lbWJlcl9pZCx0b0NyZWF0ZU9wdGlvbnMpe1xuICAgIFx0bGV0IGFnZV90aHJlc2hvbGQgXG4gICAgXHRpZih0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmFkdWx0X2NvdW50KXtcbiAgICBcdFx0aWYodGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5KXtcbiAgICBcdFx0XHRhZ2VfdGhyZXNob2xkID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5jaGlsZF9tYXhfYWdlXG4gICAgXHRcdH1lbHNle1xuICAgIFx0XHRcdGFnZV90aHJlc2hvbGQgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLm1heF9hZ2VcbiAgICBcdFx0fVxuICAgIFx0fVxuICAgIFx0bGV0IGRlZmF1bHRfbW9udGhzPVsnMDEnLCcwMicsJzAzJywnMDQnLCcwNScsJzA2JywnMDcnLCcwOCcsJzA5JywnMTAnLCcxMScsJzEyJ11cbiAgICBcdGxldCBzZWxmID10aGlzXG4gICAgXHR2YXIgZGF5ZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5ZHJvcGRvd25fJyttZW1iZXJfaWQpLFxuICAgICAgICAgIG1vbnRoZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9udGhkcm9wZG93bl8nK21lbWJlcl9pZCksXG4gICAgICAgICAgeWVhcmRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llYXJkcm9wZG93bl8nK21lbWJlcl9pZCk7XG4gICAgICAgICAgXHRcbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGRheSA9IHRvZGF5LmdldFVUQ0RhdGUoKSxcbiAgICAgICAgICAgIG1vbnRoID0gdG9kYXkuZ2V0VVRDTW9udGgoKSxcbiAgICAgICAgICAgIHllYXI9IHRvZGF5LmdldFVUQ0Z1bGxZZWFyKCktYWdlX3RocmVzaG9sZCxcbiAgICAgICAgICAgIGN1cnJlbnRZZWFyID0gdG9kYXkuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgICAgICAgIGRheXNJbkN1cnJNb250aCA9IHRoaXMuZGF5c0luTW9udGgobW9udGgsIHllYXIpO1xuXHRcdGlmKGRheWRyb3Bkb3duICYmIG1vbnRoZHJvcGRvd24gJiYgeWVhcmRyb3Bkb3duKXtcblx0XHRcdFxuXHRcdFx0ZGF5ZHJvcGRvd24uaW5uZXJIVE1MID0gJydcblx0XHRcdG1vbnRoZHJvcGRvd24uaW5uZXJIVE1MID0gJydcblx0XHRcdHllYXJkcm9wZG93bi5pbm5lckhUTUwgPSAnJ1xuXG5cdFx0XHR2YXIgb3B0X2RkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRcdG9wdF9kZC52YWx1ZSA9ICdERCdcblx0ICAgICAgICAgIFx0b3B0X2RkLnRleHQgPSAnREQnXG5cdCAgICAgICAgICBcdG9wdF9kZC5oaWRkZW4gPSB0cnVlXG5cdCAgICAgICAgICBcdGRheWRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdF9kZCk7XG5cdCAgICAgICAgdmFyIG9wdF9tbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0XHRvcHRfbW0udmFsdWUgPSAnTU0nXG5cdCAgICAgICAgICBcdG9wdF9tbS50ZXh0ID0gJ01NJ1xuXHQgICAgICAgICAgXHRvcHRfbW0uaGlkZGVuID0gdHJ1ZVxuXHQgICAgICAgICAgXHRtb250aGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdF9tbSk7XG5cdCAgICAgICAgdmFyIG9wdF95eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0XHRvcHRfeXkudmFsdWUgPSAnWVlZWSdcblx0ICAgICAgICAgIFx0b3B0X3l5LnRleHQgPSAnWVlZWSdcblx0ICAgICAgICAgIFx0b3B0X3l5LmhpZGRlbiA9IHRydWVcblx0ICAgICAgICAgIFx0eWVhcmRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdF95eSk7XG5cblx0XHRcdFx0Ly8gRGF5XG5cdFx0ICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDw9IGRheXNJbkN1cnJNb250aDsgaSsrKXtcblx0XHQgICAgICAgICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdCAgICAgICAgICBpZihpPD05KXtcblx0XHQgICAgICAgICAgXHRvcHQudmFsdWUgPSAnMCcgKyBpO1xuXHRcdCAgICAgICAgICBcdG9wdC50ZXh0ID0gJzAnICsgaTtcblx0XHQgICAgICAgICAgfWVsc2V7XG5cdFx0ICAgICAgICAgIFx0b3B0LnZhbHVlID0gaTtcblx0XHQgICAgICAgICAgXHRvcHQudGV4dCA9IGk7XG5cdFx0ICAgICAgICAgIH1cblx0XHQgICAgICAgICAgZGF5ZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0KTtcblx0XHQgICAgICAgIH1cblxuXHRcdCAgICAgICAgLy8gTW9udGhcblx0XHQgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKXtcblx0XHQgICAgICAgICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdCAgICAgICAgICBvcHQudmFsdWUgPSBkZWZhdWx0X21vbnRoc1tpXVxuXHRcdCAgICAgICAgICBvcHQudGV4dCA9IGRlZmF1bHRfbW9udGhzW2ldXG5cdFx0ICAgICAgICAgIG1vbnRoZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0KTtcblx0XHQgICAgICAgIH1cblxuXHRcdCAgICAgICAgLy8gWWVhclxuXHRcdCAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8PSBhZ2VfdGhyZXNob2xkOyBpKyspe1xuXHRcdCAgICAgICAgICB2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0ICAgICAgICAgIG9wdC52YWx1ZSA9IGkgKyB5ZWFyO1xuXHRcdCAgICAgICAgICBvcHQudGV4dCA9IGkgKyB5ZWFyO1xuXHRcdCAgICAgICAgICB5ZWFyZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0KTtcblx0XHQgICAgICAgIH1cblxuXHRcdFx0Ly8gY2hhbmdlIGhhbmRsZXIgZm9yIGRheVxuXHRcdFx0ZGF5ZHJvcGRvd24ub25jaGFuZ2UgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgTmV3U2VsZWN0ZWRkYXlzID0gZGF5ZHJvcGRvd24udmFsdWU7XG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe2RheTpOZXdTZWxlY3RlZGRheXN9LCgpPT57XG5cdFx0XHRcdHNlbGYuc3VibWl0RG9iKClcblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2hhbmdlIGhhbmRsZXIgZm9yIG1vbnRoc1xuXHRcdFx0bW9udGhkcm9wZG93bi5vbmNoYW5nZSA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBuZXdNb250aCA9IG1vbnRoZHJvcGRvd24udmFsdWVcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7bW50aDpuZXdNb250aH0sKCk9Pntcblx0XHRcdFx0c2VsZi5zdWJtaXREb2IoKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjaGFuZ2UgaGFuZGxlciBmb3IgeWVhclxuXHRcdFx0eWVhcmRyb3Bkb3duLm9uY2hhbmdlID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIG5ld1llYXIgPSB5ZWFyZHJvcGRvd24udmFsdWU7XG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe3llYXI6bmV3WWVhcn0sKCk9Pntcblx0XHRcdFx0c2VsZi5zdWJtaXREb2IoKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHQgICAgfVxuICBcdH1cblxuICBcdHN1Ym1pdERvYigpe1xuXHRsZXQgc2VsZiA9ICB0aGlzXG4gICAgICBpZihzZWxmLnN0YXRlLmRheSAmJiBzZWxmLnN0YXRlLm1udGggJiYgc2VsZi5zdGF0ZS55ZWFyKXtcbiAgICAgIFx0bGV0IGZpbmFsRGF0ZSA9IHNlbGYuc3RhdGUueWVhciArICctJysgc2VsZi5zdGF0ZS5tbnRoICsgJy0nK3NlbGYuc3RhdGUuZGF5IFxuICAgICAgXHRzZWxmLnNldFN0YXRlKHtcbiAgICBcdFx0ZG9iIDogZmluYWxEYXRlXG4gICAgXHR9LCgpPT57XG4gICAgXHRcdHNlbGYuaGFuZGxlU3VibWl0KCkgXG4gICAgXHR9KVxuICAgICAgfVxuICBcdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHNob3dfY3JlYXRlQXBpX2tleXNfYWR1bHQgPSBbXVxuXHRcdGxldCBzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkID0gW11cblx0XHRsZXQgc2hvd19jcmVhdGVBcGlfa2V5c19jaGlsZDIgPSBbXVxuXHRcdGxldCBVcGxvYWRlZF9pbWFnZV9kYXRhXG5cdFx0bGV0IGNvbW1vbk1zZ1NwYW4gPSA8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydjb21tb25fbWVzc2FnZSddfTwvc3Bhbj5cblx0XHRpZih0aGlzLnByb3BzLmlzX2NoaWxkX29ubHkpe1xuXHRcdFx0bGV0IHNob3dfY3JlYXRlQXBpX2tleXMgPSBbXVxuXHRcdFx0aWYoT2JqZWN0LmtleXModGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnNDaGlsZCkubGVuZ3RoID4gMCl7XG5cdFx0XHRPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9yc0NoaWxkKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG5cdFx0XHRcdGlmKGtleSE9MCAmJiBrZXkhPTEpe1xuXHRcdFx0XHRcdE9iamVjdC5lbnRyaWVzKHZhbHVlKS5tYXAoZnVuY3Rpb24oW2ZpZWxkX25hbWUsZmllbGRfdmFsdWVdKSB7XG5cdFx0XHRcdFx0XHRpZihrZXkgPT0gMil7XG5cdFx0XHRcdFx0XHRcdHNob3dfY3JlYXRlQXBpX2tleXNfY2hpbGQucHVzaChmaWVsZF9uYW1lKVxuXHRcdFx0XHRcdFx0fWVsc2UgaWYoa2V5ID09IDMpe1xuXHRcdFx0XHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkMi5wdXNoKGZpZWxkX25hbWUpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGlmKE9iamVjdC5rZXlzKHRoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzKS5sZW5ndGggPiAwKXtcblx0XHRcdFx0T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnMpLm1hcChmdW5jdGlvbihba2V5LCB2YWx1ZV0pIHtcblx0XHRcdFx0XHRcdHNob3dfY3JlYXRlQXBpX2tleXNfYWR1bHQucHVzaChrZXkpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCBFcnJvck5hbWVJZFxuXHRcdGlmKHRoaXMucHJvcHMudmFsaWRhdGluZ05hbWVzLmxlbmd0aD4wKXtcblx0XHRcdEVycm9yTmFtZUlkID0gdGhpcy5wcm9wcy52YWxpZGF0aW5nTmFtZXNbMF0uc3BsaXQoJz0nKVsxXVxuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMgJiYgdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5sZW5ndGggPiAwKXtcblx0XHRcdFVwbG9hZGVkX2ltYWdlX2RhdGEgPSB0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmZpbHRlcigoeD0+eC5pZCA9PSB0aGlzLnByb3BzLm1lbWJlcl9pZCkpXG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1zdWItZm9ybXMgbXJ0LTEwXCIgaWQ9e2BtZW1iZXJfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdWItZm9ybS1pbnB1dC1kYXRhXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MTB9fSA+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50P1xuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWItZm9ybS1oZWRcIj57dGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5PyBgQ2hpbGQgJHt0aGlzLnByb3BzLm1lbWJlcl92aWV3X2lkfWA6YFNwb3VzZWB9PC9wPlxuXHRcdFx0XHRcdFx0XHQ6PHAgY2xhc3NOYW1lPVwic3ViLWZvcm0taGVkXCI+e3RoaXMucHJvcHMuaXNfY2hpbGRfb25seT8gYENoaWxkICR7dGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZC0xfWA6YFNwb3VzZWB9PC9wPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5zaG93X3NlbGVjdGVkX3Byb2ZpbGVzLmxlbmd0aD4wP1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdWItZm9ybS1oZWQtY2xpY2tcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdHNob3dQb3B1cDogdHJ1ZSwgdXNlclByb2ZpbGVzOiB0aGlzLnByb3BzLlVTRVJ9KX0+XG5cdFx0XHRcdFx0XHRTZWxlY3QgZnJvbSBwcm9maWxlXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JndC1hcncuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0PC9kaXY+OicnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHsvKjxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUxhc3RuYW1lLmJpbmQodGhpcyl9IHN0eWxlPXt7J2ZvbnRXZWlnaHQnOiAnNDAwJywgJ2ZvbnRTaXplJzogJzE0J319PkkgZG9udCBoYXZlIGxhc3QgbmFtZTxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnN0YXRlLm5vX2xuYW1lfSB2YWx1ZT1cIm9uXCIvPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj48L2xhYmVsPiovfVxuXHRcdFx0XHRcdDwvZGl2PiBcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQnIHN0eWxlPXt7cGFkZGluZzonMTBweCd9fSA+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIiBzdHlsZT17e3BhZGRpbmc6MH19PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNfY2hpbGRfb25seT9cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7LyogPGJ1dHRvbiBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS50aXRsZSA9PSAnbXIuJyA/ICdidG4tYWN0aXZlJyA6ICcnfWB9IG5hbWU9XCJ0aXRsZVwiIHZhbHVlPSdtci4nIGRhdGEtcGFyYW09J3RpdGxlJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVRpdGxlLmJpbmQodGhpcywgJ21yLicpfSA+TWFzdGVyPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLnRpdGxlID09ICdtaXNzJyA/ICdidG4tYWN0aXZlJyA6ICcnfWB9IG5hbWU9XCJ0aXRsZVwiIHZhbHVlPSdtaXNzJyBkYXRhLXBhcmFtPSd0aXRsZScgb25DbGljaz17dGhpcy5oYW5kbGVUaXRsZS5iaW5kKHRoaXMsICdtaXNzJyl9ID5NaXNzPC9idXR0b24+ICovfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ6PGRpdj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUudGl0bGUgPT0gJ21yLicgPyAnYnRuLWFjdGl2ZScgOiAnJ31gfSBuYW1lPVwidGl0bGVcIiB2YWx1ZT0nbXIuJyBkYXRhLXBhcmFtPSd0aXRsZScgb25DbGljaz17dGhpcy5oYW5kbGVUaXRsZS5iaW5kKHRoaXMsICdtci4nKX0gPk1yLjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS50aXRsZSA9PSAnbXJzLicgPyAnYnRuLWFjdGl2ZScgOiAnJ31gfSB2YWx1ZT0nbXJzLicgbmFtZT1cInRpdGxlXCIgZGF0YS1wYXJhbT0ndGl0bGUnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGUuYmluZCh0aGlzLCAnbXJzLicpfSA+TXJzLjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCF0aGlzLnByb3BzLmlzX2NoaWxkX29ubHkgJiYgdGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCd0aXRsZScpPiAtMT88c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIiBzdHlsZT17e21hcmdpblRvcDonLTEzcHgnfX0+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snY29tbW9uX21lc3NhZ2UnXX08L3NwYW4+OicnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVPdGhlckVycm9ycy5pbmRleE9mKCd0aXRsZScpPiAtMT9cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiIHN0eWxlPXt7bWFyZ2luVG9wOictMTNweCd9fT57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydzYW1lR2VuZGVyVGl0bGUnXX08L3NwYW4+OicnXHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0e1x0XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlzX2NoaWxkX29ubHk/dGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZCA9PSAyICYmIHNob3dfY3JlYXRlQXBpX2tleXNfY2hpbGQuaW5kZXhPZigndGl0bGUnKT4gLTE/XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnNDaGlsZFt0aGlzLnByb3BzLm1lbWJlcl92aWV3X2lkXS50aXRsZVswXX08L3NwYW4+OnRoaXMucHJvcHMubWVtYmVyX3ZpZXdfaWQgPT0gMyAmJiBzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkMi5pbmRleE9mKCd0aXRsZScpPiAtMT88c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnNDaGlsZFt0aGlzLnByb3BzLm1lbWJlcl92aWV3X2lkXS50aXRsZVswXX08L3NwYW4+OicnXG5cdFx0XHRcdFx0XHQ6c2hvd19jcmVhdGVBcGlfa2V5c19hZHVsdC5pbmRleE9mKCd0aXRsZScpPiAtMT9cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9ycy50aXRsZVswXX08L3NwYW4+OicnXHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNfY2hpbGRfb25seT9cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0ey8qPHNlbGVjdCBjbGFzc05hbWU9XCJpbnMtc2VsZWN0LWRyb3BcIiBpZD17YHJlbGF0aW9uX2Ryb3Bkb3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gb25DbGljaz17dGhpcy5oYW5kbGVSZWxhdGlvbi5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gbmFtZT17YHJlbGF0aW9uXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gZGF0YS1wYXJhbT1cInJlbGF0aW9uXCIgZGlzYWJsZWQgc2VsZWN0ZWQgaGlkZGVuIHZhbHVlPVwicmVsYXRpb25cIj5SRUxBVElPTjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBuYW1lPXtgcmVsYXRpb25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBkYXRhLXBhcmFtPVwicmVsYXRpb25cIiB2YWx1ZT1cInNvblwiPlNvbjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBuYW1lPXtgcmVsYXRpb25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBkYXRhLXBhcmFtPVwicmVsYXRpb25cIiB2YWx1ZT1cImRhdWdodGVyXCI+RGF1Z2h0ZXI8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3VzZXItMDEuc3ZnXCJ9IC8+Ki99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPlNvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT17YHJlbGF0aW9uXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gZGF0YS1wYXJhbT0ncmVsYXRpb24nIHZhbHVlPSdzb24nIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVsYXRpb24gPT09ICdzb24nfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVSZWxhdGlvbi5iaW5kKHRoaXMsICdzb24nKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5EYXVnaHRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgZGF0YS1wYXJhbT0ncmVsYXRpb24nIG5hbWU9e2ByZWxhdGlvbl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IHZhbHVlPSdkYXVnaHRlcicgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWxhdGlvbiA9PT0gJ2RhdWdodGVyJ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlUmVsYXRpb24uYmluZCh0aGlzLCAnZGF1Z2h0ZXInKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdyZWxhdGlvbicpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIiBzdHlsZT17e21hcmdpblRvcDonLTEzcHgnfX0+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snY29tbW9uX21lc3NhZ2UnXX08L3NwYW4+OicnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPXtgaXNuLXBpbl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwicmVsYXRpb25cIiBuYW1lPVwicmVsYXRpb25cIiBkYXRhLXBhcmFtPSdyZWxhdGlvbicgdmFsdWU9J1Nwb3VzZScgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdXNlci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj4gKi99XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBpbnAtbWFyZ2luLXJpZ2h0IFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXt7J3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZSd9fSBpZD17YG5hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbmFtZScpPiAtMXx8IEVycm9yTmFtZUlkID09IHRoaXMucHJvcHMubWVtYmVyX2lkPydmaWxsLWVycm9yJzonJ31gfSByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJmaXJzdF9uYW1lXCIgbmFtZT1cIm5hbWVcIiBkYXRhLXBhcmFtPSduYW1lJyB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnbmFtZScpfSBvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyxmYWxzZSl9IG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlTmFtZUNoYXJhY3RlcnMuYmluZCh0aGlzLCduYW1lJyl9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj17YG5hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT48c3BhbiBjbGFzc05hbWU9XCJsYWJlbERvdFwiPjwvc3Bhbj5GaXJzdCBOYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3VzZXItMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7XHRcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlzX2NoaWxkX29ubHk/dGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZCA9PSAyICYmIHNob3dfY3JlYXRlQXBpX2tleXNfY2hpbGQuaW5kZXhPZignZmlyc3RfbmFtZScpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ21heF9jaGFyYWN0ZXInXX08L3NwYW4+OnRoaXMucHJvcHMubWVtYmVyX3ZpZXdfaWQgPT0gMyAmJiBzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkMi5pbmRleE9mKCdmaXJzdF9uYW1lJyk+IC0xPzxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ21heF9jaGFyYWN0ZXInXX08L3NwYW4+OicnXG5cdFx0XHRcdFx0XHRcdFx0OnNob3dfY3JlYXRlQXBpX2tleXNfYWR1bHQuaW5kZXhPZignZmlyc3RfbmFtZScpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydtYXhfY2hhcmFjdGVyJ119PC9zcGFuPjonJ1x0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbmFtZScpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuOicnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdEVycm9yTmFtZUlkID09IHRoaXMucHJvcHMubWVtYmVyX2lkPzxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiIHN0eWxlPXt7d2lkdGg6JzMyMHB4J319Pnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ3NhbWVOYW1lJ119PC9zcGFuPjonJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBpbnAtbWFyZ2luLXJpZ2h0IFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXt7J3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZSd9fSBpZD17YG1pZGRsZV9uYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJtaWRkbGVfbmFtZVwiIG5hbWU9XCJtaWRkbGVfbmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5vX2xuYW1lPycnOnRoaXMuc3RhdGUubWlkZGxlX25hbWV9ICBkYXRhLXBhcmFtPSdtaWRkbGVfbmFtZScgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywnbWlkZGxlX25hbWUnKX0gb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMsZmFsc2UpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5ub19sbmFtZT8nZGlzYWJsZWQnOlwiXCJ9IG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlTmFtZUNoYXJhY3RlcnMuYmluZCh0aGlzLCdtaWRkbGVfbmFtZScpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPXtgbWlkZGxlX25hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT5NaWRkbGUgTmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy91c2VyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1x0XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5P3RoaXMucHJvcHMubWVtYmVyX3ZpZXdfaWQgPT0gMiAmJiBzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkLmluZGV4T2YoJ21pZGRsZV9uYW1lJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snbWF4X2NoYXJhY3RlciddfTwvc3Bhbj46dGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZCA9PSAzICYmIHNob3dfY3JlYXRlQXBpX2tleXNfY2hpbGQyLmluZGV4T2YoJ21pZGRsZV9uYW1lJyk+IC0xPzxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ21heF9jaGFyYWN0ZXInXX08L3NwYW4+OicnXG5cdFx0XHRcdFx0XHRcdFx0OnNob3dfY3JlYXRlQXBpX2tleXNfYWR1bHQuaW5kZXhPZignbWlkZGxlX25hbWUnKT4gLTE/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snbWF4X2NoYXJhY3RlciddfTwvc3Bhbj46JydcdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBpbnMtZm9ybS1ncm91cCBpbnAtbWFyZ2luLXJpZ2h0ICBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0gaWQ9e2BsYXN0X25hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbGFzdF9uYW1lJyk+IC0xPydmaWxsLWVycm9yJzonJ31gfSByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJsYXN0X25hbWVcIiBuYW1lPVwibGFzdF9uYW1lXCIgZGF0YS1wYXJhbT0nbGFzdF9uYW1lJyB2YWx1ZT17dGhpcy5zdGF0ZS5ub19sbmFtZT8nJzp0aGlzLnN0YXRlLmxhc3RfbmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ2xhc3RfbmFtZScpfSBvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyxmYWxzZSl9IGRpc2FibGVkPXt0aGlzLnN0YXRlLm5vX2xuYW1lPydkaXNhYmxlZCc6XCJcIn0gb25LZXlQcmVzcz17dGhpcy5oYW5kbGVOYW1lQ2hhcmFjdGVycy5iaW5kKHRoaXMsJ2xhc3RfbmFtZScpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPXtgbGFzdF9uYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxEb3RcIj48L3NwYW4+TGFzdCBOYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3VzZXItMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7XHRcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlzX2NoaWxkX29ubHk/dGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZCA9PSAyICYmIHNob3dfY3JlYXRlQXBpX2tleXNfY2hpbGQuaW5kZXhPZignbGFzdF9uYW1lJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snbWF4X2NoYXJhY3RlciddfTwvc3Bhbj46dGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZCA9PSAzICYmIHNob3dfY3JlYXRlQXBpX2tleXNfY2hpbGQyLmluZGV4T2YoJ2xhc3RfbmFtZScpPiAtMT88c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydtYXhfY2hhcmFjdGVyJ119PC9zcGFuPjonJ1xuXHRcdFx0XHRcdFx0XHRcdDpzaG93X2NyZWF0ZUFwaV9rZXlzX2FkdWx0LmluZGV4T2YoJ2xhc3RfbmFtZScpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydtYXhfY2hhcmFjdGVyJ119PC9zcGFuPjonJ1x0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbGFzdF9uYW1lJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW46Jydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiIHN0eWxlPXt7bWFyZ2luVG9wOictMTBweCd9fSA+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWR0bHMtY2hrXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4IGZ3LTUwMFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUxhc3RuYW1lLmJpbmQodGhpcyl9IHN0eWxlPXt7Zm9udFNpemU6IDEyLCBwYWRkaW5nTGVmdDoyNCwgbGluZUhlaWdodDonMTZweCd9fT5JIGRvbnQgaGF2ZSBhIGxhc3QgbmFtZTxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnN0YXRlLm5vX2xuYW1lfSB2YWx1ZT1cIm9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFyayBzbWFsbC1jaGVja21hcmtcIj48L3NwYW4+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlzX2NoaWxkX29ubHk/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPk1hbGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPXtgZ2VuZGVyXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gZGF0YS1wYXJhbT0nZ2VuZGVyJyB2YWx1ZT0nbScgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT09ICdtJ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZGVyLmJpbmQodGhpcywgJ20nKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPkZlbWFsZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIGRhdGEtcGFyYW09J2dlbmRlcicgbmFtZT17YGdlbmRlcl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IHZhbHVlPSdmJyBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PT0gJ2YnfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVHZW5kZXIuYmluZCh0aGlzLCAnZicpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4qL31cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Plx0XG5cdFx0XHRcdFx0XHRcdFx0XHQ6PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5NYWxlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT17YGdlbmRlcl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IGRhdGEtcGFyYW09J2dlbmRlcicgdmFsdWU9J20nIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09PSAnbSd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmRlci5iaW5kKHRoaXMsICdtJyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5GZW1hbGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBkYXRhLXBhcmFtPSdnZW5kZXInIG5hbWU9e2BnZW5kZXJfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSB2YWx1ZT0nZicgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT09ICdmJ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZGVyLmJpbmQodGhpcywgJ2YnKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+T3RoZXJzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBkYXRhLXBhcmFtPSdnZW5kZXInIG5hbWU9e2BnZW5kZXJfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSB2YWx1ZT0nbycgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT09ICdvJ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZGVyLmJpbmQodGhpcywgJ28nKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdCF0aGlzLnByb3BzLmlzX2NoaWxkX29ubHkgJiYgdGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdnZW5kZXInKT4gLTE/XG5cdFx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbjonJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlT3RoZXJFcnJvcnMuaW5kZXhPZignZ2VuZGVyJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ3Nob3VsZEdlbmRlclRpdGxlJ119PC9zcGFuPjonJ1x0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBtYi0wXCI+XG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5vcGVuRGF0ZU1vZGFsLmJpbmQodGhpcyl9IGlkPXtgaXNuLWRhdGVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCB0ZXh0LWxlZnQgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2RvYicpPiAtMT8nZmlsbC1lcnJvcic6Jyd9YH0gcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwiZG9iXCIgbmFtZT1cImRvYlwiIGRhdGEtcGFyYW09J2RvYicgdmFsdWU9e3RoaXMuc3RhdGUuZG9iP3RoaXMuc3RhdGUuZG9iOid5eXl5L21tL2RkJ31cblx0XHRcdFx0XHRcdFx0XHQvPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbFwiIGh0bWxGb3I9XCJpbnMtZGF0ZVwiPipEYXRlIG9mIGJpcnRoPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhbGVuZGFyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdHsvKlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmRhdGVNb2RhbCA/IDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItb3ZlcmxheVwiPjxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItbW9kYWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2FsZW5kYXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dXZWVrTnVtYmVyPXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17bW9tZW50KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlU3Bhbil9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZERhdGU9eyhkYXRlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBkYXRlLmRpZmYobW9tZW50KChuZXcgRGF0ZSkpLCAnZGF5cycpICA+IDAgfHwgZGF0ZS5kaWZmKG1vbWVudCgobmV3IERhdGUpKSwgJ2RheXMnKSA+IDQwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd1RvZGF5ID17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17dGhpcy5zZWxlY3REYXRlRnJvbUNhbGVuZGFyLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+PC9kaXY+IDogXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Ki99XG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxmb3JtIGFjdGlvbj1cIlwiIG5hbWU9XCJzb21lZm9ybVwiPlxuXHRcdFx0XHRcdFx0XHQgICAgICA8c2VsZWN0IGlkPXtgZGF5ZHJvcGRvd25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXl9Pjwvc2VsZWN0PiBcblx0XHRcdFx0XHRcdFx0ICAgICAgPHNlbGVjdCBpZD17YG1vbnRoZHJvcGRvd25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSB2YWx1ZT17dGhpcy5zdGF0ZS5tbnRofT48L3NlbGVjdD4gXG5cdFx0XHRcdFx0XHRcdCAgICAgIDxzZWxlY3QgaWQ9e2B5ZWFyZHJvcGRvd25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSB2YWx1ZT17dGhpcy5zdGF0ZS55ZWFyfT48L3NlbGVjdD4gXG5cdFx0XHRcdFx0XHRcdCAgICA8L2Zvcm0+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9iLXNlbGVjdC1kaXYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Itc2VsZWN0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBpZD17YGRheWRyb3Bkb3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9e3RoaXMuc3RhdGUuZGF5fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGhpZGRlbj5ERDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkb2ItZG93bi1pY29uXCIgc3R5bGU9e3tyaWdodCA6ICc0cHgnfX0gc3JjPVwiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYi1zZWxlY3QgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPXtgbW9udGhkcm9wZG93bl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IHZhbHVlPXt0aGlzLnN0YXRlLm1udGh9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gaGlkZGVuPk1NPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImRvYi1kb3duLWljb25cIiBzdHlsZT17e3JpZ2h0IDogJzRweCd9fSBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9iLXNlbGVjdCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9e2B5ZWFyZHJvcGRvd25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSB2YWx1ZT17dGhpcy5zdGF0ZS55ZWFyfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGhpZGRlbj5ZWVlZPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImRvYi1kb3duLWljb25cIiBzdHlsZT17e3JpZ2h0IDogJzNweCd9fSBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHtcdFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNfY2hpbGRfb25seT90aGlzLnByb3BzLm1lbWJlcl92aWV3X2lkID09IDIgJiYgc2hvd19jcmVhdGVBcGlfa2V5c19jaGlsZC5pbmRleE9mKCdkb2InKT4gLTE/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17e21hcmdpblRvcDogJzBweCd9fSBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnNDaGlsZFt0aGlzLnByb3BzLm1lbWJlcl92aWV3X2lkXS5kb2JbMF19PC9zcGFuPjp0aGlzLnByb3BzLm1lbWJlcl92aWV3X2lkID09IDMgJiYgc2hvd19jcmVhdGVBcGlfa2V5c19jaGlsZDIuaW5kZXhPZignZG9iJyk+IC0xPzxzcGFuIHN0eWxlPXt7bWFyZ2luVG9wOiAnMHB4J319IGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9yc0NoaWxkW3RoaXMucHJvcHMubWVtYmVyX3ZpZXdfaWRdLmRvYlswXX08L3NwYW4+OicnXG5cdFx0XHRcdFx0XHRcdFx0OnNob3dfY3JlYXRlQXBpX2tleXNfYWR1bHQuaW5kZXhPZignZG9iJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7bWFyZ2luVG9wOiAnMHB4J319IGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9ycy5kb2JbMF19PC9zcGFuPjonJ1x0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZG9iJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNfY2hpbGRfb25seT88c3BhbiBzdHlsZT17e21hcmdpblRvcDogJzBweCd9fSBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydjaGlsZF9hZ2UnXX08L3NwYW4+OlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7bWFyZ2luVG9wOiAnMHB4J319IGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ2FkdWx0X2FnZSddfTwvc3Bhbj46Jydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZURvYkVycm9ycy5pbmRleE9mKCdkb2InKT4gLTE/XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5PzxzcGFuIHN0eWxlPXt7bWFyZ2luVG9wOiAnMHB4J319IGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ2NoaWxkQWdlRGlmZiddfTwvc3Bhbj46Jyc6Jydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQgJiYgdGhpcy5zdGF0ZS5pc19jaGFuZ2U/XG5cdFx0XHRcdFx0XHQ8SW5zdXJhbmNlUHJvb2ZzIHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnNob3dQb3B1cCA/XG5cdFx0XHRcdFx0PEluc3VyUG9wdXAgey4uLnRoaXMuc3RhdGUudXNlclByb2ZpbGVzfSB7Li4udGhpcy5wcm9wc30gXG5cdFx0XHRcdFx0XHRjdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkPXt0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWR9IFxuXHRcdFx0XHRcdFx0bWVtYmVyX2lkPXt0aGlzLnByb3BzLm1lbWJlcl9pZH0gXG5cdFx0XHRcdFx0XHRjbG9zZVBvcHVwPXt0aGlzLnRvZ2dsZVBvcHVwLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0aXNTZWxlY3Rwcm9maWxlID0ge3RydWV9IFxuXHRcdFx0XHRcdFx0c2VsZl9kYXRhX3ZhbHVlcyA9e3RoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1t0aGlzLnByb3BzLm1lbWJlcl9pZF19XG5cdFx0XHRcdFx0XHRoaWRlU2VsZWN0UHJvZmlsZVBvcHVwPXt0aGlzLmhpZGVTZWxlY3RQcm9maWxlUG9wdXAuYmluZCh0aGlzKX0gXG5cdFx0XHRcdFx0XHRpc19jaGlsZF9vbmx5ID0ge3RoaXMucHJvcHMuaXNfY2hpbGRfb25seX1cblx0XHRcdFx0XHQvPiA6ICcnXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3VyYW5jZU90aGVycyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5jb25zdCBDb21wcmVzcyA9IHJlcXVpcmUoJ2NvbXByZXNzLmpzJylcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21tb25zL0xvYWRlcidcbmNsYXNzIEluc3VyYW5jZVByb29mcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhVXJsOiBudWxsLFxuICAgICAgICAgICAgem9vbUltYWdlVXJsOiBudWxsLFxuICAgICAgICAgICAgem9vbUltYWdlOiBmYWxzZSxcbiAgICAgICAgICAgIG9wZW5QZGY6IGZhbHNlLFxuICAgICAgICAgICAgb3BlblBkZlVybDogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGlja0ZpbGUobWVtYmVyX2lkLCBlKSB7IC8vIHRvIHNlbGVjdCBmaWxlXG4gICAgICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdICYmIGUudGFyZ2V0LmZpbGVzWzBdLm5hbWUuaW5jbHVkZXMoJy5wZGYnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3JvcChudWxsLCBtZW1iZXJfaWQsIGZpbGUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXByZXNzID0gbmV3IENvbXByZXNzKClcbiAgICAgICAgICAgICAgICBjb21wcmVzcy5jb21wcmVzcyhbZmlsZV0sIHtcbiAgICAgICAgICAgICAgICAgICAgcXVhbGl0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMTAwMCxcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZzEgPSByZXN1bHRzWzBdXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NHN0ciA9IGltZzEuZGF0YVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdFeHQgPSBpbWcxLmV4dFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gQ29tcHJlc3MuY29udmVydEJhc2U2NFRvRmlsZShiYXNlNjRzdHIsIGltZ0V4dClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRCYXNlNjQoZmlsZSwgKGRhdGFVcmwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3JvcChkYXRhVXJsLCBtZW1iZXJfaWQsIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YVVybCB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJFcnJvciB1cGxvYWRpbmcgaW1hZ2UuXCIgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJhc2U2NChmaWxlLCBjYikge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2IocmVhZGVyLnJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmlzaENyb3AoZGF0YVVybCwgbWVtYmVyX2lkLCBmaWxlKSB7IC8vIGNyb3BwaW5nIHRoZSBpbWFnZVxuICAgICAgICBsZXQgZmlsZV9ibG9iX2RhdGFcbiAgICAgICAgaWYgKGRhdGFVcmwpIHtcbiAgICAgICAgICAgIGZpbGVfYmxvYl9kYXRhID0gdGhpcy5kYXRhVVJJdG9CbG9iKGRhdGFVcmwpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1lbV9kYXRhID0ge31cbiAgICAgICAgbGV0IGV4aXN0aW5nRGF0YVxuICAgICAgICBsZXQgaW1nX3RhZyA9IFwiZG9jdW1lbnRfaW1hZ2VcIlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRhdGFVcmw6IG51bGwsaXNMb2FkaW5nOnRydWVcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoaW1nX3RhZywgZmlsZSwgXCJpbWFnZUZpbGVuYW1lLnBkZlwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGltZ190YWcsIGZpbGVfYmxvYl9kYXRhLCBcImltYWdlRmlsZW5hbWUuanBlZ1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGxvYWRQcm9vZihmb3JtX2RhdGEsIG1lbWJlcl9pZCwgJ2ltYWdlJywgKGRhdGEsIGVycikgPT4geyAvLyBzdG9yZSBzZWxlY3RlZCBwcm9vZiB0byBkYXRhYmFzZVxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmlkID0gZGF0YS5kYXRhLm1lbWJlclxuICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWFnZXMgPSBbXVxuICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWdfaWRzID0gW11cbiAgICAgICAgICAgICAgICAgICAgbWVtX2RhdGEuaW1nX3BhdGhfaWRzPVtdXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUuaWQgPT0gbWVtYmVyX2lkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWVtX2RhdGEuaW1hZ2VzID0gdmFsdWUuaW1hZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lbV9kYXRhLmltZ19pZHMgPSB2YWx1ZS5pbWdfaWRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcyA9IHZhbHVlLmltZ19wYXRoX2lkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWFnZXMucHVzaChkYXRhLmRhdGEuZG9jdW1lbnRfaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lbV9kYXRhLmltZ19pZHMucHVzaChkYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pbWdfcGF0aF9pZHMucHVzaCh7aWQ6IGRhdGEuaWQsIGltYWdlOmRhdGEuZGF0YS5kb2N1bWVudF9pbWFnZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lbV9kYXRhLmltYWdlcz1bXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWdfaWRzID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtX2RhdGEuaW1nX3BhdGhfaWRzID0gW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWVtX2RhdGEuaW1hZ2VzLnB1c2goZGF0YS5kYXRhLmRvY3VtZW50X2ltYWdlKSAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lbV9kYXRhLmltZ19pZHMucHVzaChkYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pbWdfcGF0aF9pZHMucHVzaCh7aWQ6IGRhdGEuaWQsIGltYWdlOmRhdGEuZGF0YS5kb2N1bWVudF9pbWFnZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lbV9kYXRhLmltYWdlcy5wdXNoKGRhdGEuZGF0YS5kb2N1bWVudF9pbWFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lbV9kYXRhLmltZ19pZHMucHVzaChkYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVtX2RhdGEuaW1nX3BhdGhfaWRzLnB1c2goe2lkOiBkYXRhLmlkLCBpbWFnZTpkYXRhLmRhdGEuZG9jdW1lbnRfaW1hZ2V9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzpmYWxzZX0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmVNZW1iZXJQcm9vZnMobWVtX2RhdGEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkYXRhVVJJdG9CbG9iKGRhdGFVUkkpIHtcbiAgICAgICAgdmFyIGJpbmFyeSA9IGF0b2IoZGF0YVVSSS5zcGxpdCgnLCcpWzFdKTtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKGJpbmFyeS5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KGFycmF5KV0sIHsgdHlwZTogJ2ltYWdlL2pwZWcnIH0pO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVJbWFnZShpbWcpe1xuICAgICAgICBsZXQgVXBsb2FkZWRfaW1hZ2VfZGF0YSA9IFtdXG4gICAgICAgIFVwbG9hZGVkX2ltYWdlX2RhdGEgPSB0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmZpbHRlcigoeCA9PiB4LmlkID09IHRoaXMucHJvcHMubWVtYmVyX2lkKSlcbiAgICAgICAgVXBsb2FkZWRfaW1hZ2VfZGF0YVswXS5pbWdfcGF0aF9pZHMubWFwKChkYXRhLGkpPT57XG4gICAgICAgICAgICAgICAgZGF0YS5tZW1iZXJfaWQ9dGhpcy5wcm9wcy5tZW1iZXJfaWRcbiAgICAgICAgICAgICAgICBpZihkYXRhLmltYWdlID09IGltZyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlTWVtYmVyUHJvb2YoZGF0YSkgLy8gdG8gcmVtb3ZlIGNhbmNlbGxlZCB1cGxvYWRlZCBpbWFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgVXBsb2FkZWRfaW1hZ2VfZGF0YSA9IFtdXG4gICAgICAgIGxldCBpbWdfdXJsID0gW11cbiAgICAgICAgbGV0IHBkZl91cmwgPSBbXVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcyAmJiB0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIFVwbG9hZGVkX2ltYWdlX2RhdGEgPSB0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmZpbHRlcigoeCA9PiB4LmlkID09IHRoaXMucHJvcHMubWVtYmVyX2lkKSlcbiAgICAgICAgICAgIGlmKFVwbG9hZGVkX2ltYWdlX2RhdGEubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgVXBsb2FkZWRfaW1hZ2VfZGF0YVswXS5pbWdfcGF0aF9pZHMubWFwKChkYXRhLCBpKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5pbWFnZS5pbmNsdWRlcygncGRmJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGRmX3VybC5wdXNoKGRhdGEuaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nX3VybC5wdXNoKGRhdGEuaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzaG93X3VwbG9hZCA9IHRydWVcbiAgICAgICAgaWYoKGltZ191cmwgJiYgaW1nX3VybC5sZW5ndGggPiAwKSB8fCAocGRmX3VybCAmJiBwZGZfdXJsLmxlbmd0aCA+IDApKXtcbiAgICAgICAgICAgIHNob3dfdXBsb2FkID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImluc3VyYW5jZS1wcm9vZnMtY29udFwiIHN0eWxlPXt7bWFyZ2luOiAnMTBweCAtMTBweCAwcHggLTEwcHgnfX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAvKiAgICB0aGlzLnByb3BzLmVuZG9yc2VtZW50RXJyb3IuaW5kZXhPZih0aGlzLnByb3BzLm1lbWJlcl9pZCkgIT0gLTEgJiYgaW1nX3VybC5sZW5ndGg9PTA/XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5zLXByZi1lcnJvci1tc2dcIj4qUGxlYXNlIHVwbG9hZCB0aGUgcmVxdWlyZWQgZG9jdW1lbnRzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDonJyovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1hZGRidG4tY29udFwiIGlkPXtgbWVtYmVyXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9X3VwbG9hZGB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXVwbGQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1zYi1mcnN0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pbnMtd2FybmluZy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXVwbG9hZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnMtdXBsb2FkLXBhcmEtdGV4dFwiPlVwbG9hZCBhbnkgZ292ZXJuZW1lbnQgSUQgcHJvb2Y8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnMtdXBsb2FkLXN1Yi10ZXh0XCI+QWFkaGFyIGNhcmQsIFBhc3Nwb3J0LCBEcml2aW5nIExpY2Vuc2UsIFZvdGVyIElEIENhcmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnMtZmlsZS10eWxlXCI+RmlsZSB0eXBlOiBqcGcsIGpwZWcsIHBuZywgcGRmIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzaG93X3VwbG9hZD9cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5zLXByb29mLXVwbG9hZC1idG5cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyXycgKyB0aGlzLnByb3BzLm1lbWJlcl9pZCArICdfZnJvbnQnKS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyXycgKyB0aGlzLnByb3BzLm1lbWJlcl9pZCArICdfZnJvbnQnKS52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pbnMtdXAtaWNvLnN2Z1wifS8+IFVwbG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IGlkPXtgaW1hZ2VGaWxlUGlja2VyXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9X2Zyb250YH0gb25DaGFuZ2U9e3RoaXMucGlja0ZpbGUuYmluZCh0aGlzLCB0aGlzLnByb3BzLm1lbWJlcl9pZCl9IGFjY2VwdD1cImltYWdlL3gtcG5nLGltYWdlL2pwZWcsaW1hZ2UvanBnLC5wZGZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMb2FkaW5nICYmIHNob3dfdXBsb2FkP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmQgZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWZvci1jaGF0LWRpdiBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXItZm9yLWNoYXQgbWItMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6JydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBVcGxvYWRlZF9pbWFnZV9kYXRhICYmIFVwbG9hZGVkX2ltYWdlX2RhdGEubGVuZ3RoID4gMCAmJiAhc2hvd191cGxvYWQ/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWltZy1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nX3VybCAmJiBpbWdfdXJsLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdfdXJsLm1hcCgoZGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbnMtdXAtaW1nLWljXCIgc3JjPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5zLXByZi1jbHNcIiBvbkNsaWNrPXt0aGlzLnJlbW92ZUltYWdlLmJpbmQodGhpcywgZGF0YSl9IHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL2Nsb3NlLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBkZl91cmwgJiYgcGRmX3VybC5sZW5ndGg+MCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBkZl91cmwubWFwKChkYXRhLCBpKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImlucy1wcmYtaW1nLWdyZFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbnMtdXAtaW1nLWljXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcGRmLmpwZ1wifS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucy1wcmYtY2xzXCIgb25DbGljaz17dGhpcy5yZW1vdmVJbWFnZS5iaW5kKHRoaXMsIGRhdGEpfSBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGluZz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1wcmYtaW1nLWdyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1mb3ItY2hhdC1kaXYgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlci1mb3ItY2hhdCBtYi0wJyBzdHlsZT17e3dpZHRoOic1MHB4Oyd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChpbWdfdXJsICYmIGltZ191cmwubGVuZ3RoKSB8fCAocGRmX3VybCAmJiBwZGZfdXJsLmxlbmd0aCkpID49IDU/JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHNwYW4gY2xhc3NOYW1lPVwiaW5zLXByZi1hZGRNb3JlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyXycgKyB0aGlzLnByb3BzLm1lbWJlcl9pZCArICdfYmFjaycpLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl8nICsgdGhpcy5wcm9wcy5tZW1iZXJfaWQgKyAnX2JhY2snKS52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnMtYWRkaWNvXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5zLWFkZC1pY28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBpZD17YGltYWdlRmlsZVBpY2tlcl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfV9iYWNrYH0gb25DaGFuZ2U9e3RoaXMucGlja0ZpbGUuYmluZCh0aGlzLCB0aGlzLnByb3BzLm1lbWJlcl9pZCl9IGFjY2VwdD1cImltYWdlL3gtcG5nLGltYWdlL2pwZWcsaW1hZ2UvanBnLC5wZGZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5zdXJhbmNlUHJvb2ZzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmMtY2FsZW5kYXInXG5pbXBvcnQgU3RhdGVDaXR5QXV0b0NvbXBsZXRlIGZyb20gJy4vc3RhdGVDaXR5QXV0b0NvbXBsZXRlLmpzJ1xuaW1wb3J0IEluc3VyYW5jZVByb29mcyBmcm9tICcuL2luc3VyYW5jZVByb29mcy5qcydcbmltcG9ydCBWZXJpZnlFbWFpbCBmcm9tICcuL3ZlcmlmeUVtYWlsLmpzJ1xuY29uc3QgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50JylcblxuY2xhc3MgSW5zdXJhbmNlU2VsZiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0bWlkZGxlX25hbWU6ICcnLFxuXHRcdFx0bGFzdF9uYW1lOiAnJyxcblx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdGdlbmRlcjogJycsXG5cdFx0XHRkb2I6ICcnLFxuXHRcdFx0cGluY29kZTogJycsXG5cdFx0XHRhZGRyZXNzOiAnJyxcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGlkOiAnJyxcblx0XHRcdHJlbGF0aW9uOiAnc2VsZicsXG5cdFx0XHRtZW1iZXJfdHlwZTogJ2FkdWx0Jyxcblx0XHRcdHN0YXRlOiAnJyxcblx0XHRcdHRvd246ICcnLFxuXHRcdFx0ZGlzdHJpY3Q6ICcnLFxuXHRcdFx0cHJvZmlsZV9mbGFnOiB0cnVlLFxuXHRcdFx0Ly8gc2hvd19sbmFtZTogdGhpcy5wcm9wcy5ub19sbmFtZSxcblx0XHRcdC8vIHNob3dfbG5hbWVfZmxhZzp0aGlzLnByb3BzLm5vX2xuYW1lLFxuXHRcdFx0cHJvZmlsZV9pZDogbnVsbCxcblx0XHRcdGRhdGVNb2RhbDogZmFsc2UsXG5cdFx0XHRzdGF0ZV9jb2RlOiAnJyxcblx0XHRcdGRpc3RyaWN0X2NvZGU6ICcnLFxuXHRcdFx0dG93bl9jb2RlOiAnJyxcblx0XHRcdHNlbGVjdGVkRGF0ZVNwYW46IG5ldyBEYXRlKCksXG5cdFx0XHRub19sbmFtZTogZmFsc2UsXG5cdFx0XHRkaXNhYmxlTmFtZTogZmFsc2UsXG5cdFx0XHRkaXNhYmxlRW1haWw6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZURvYjogZmFsc2UsXG5cdFx0XHRpc19jaGFuZ2U6IGZhbHNlLFxuXHRcdFx0eWVhcjogbnVsbCxcblx0XHRcdG1udGg6IG51bGwsXG5cdFx0XHRkYXk6IG51bGwsXG5cdFx0XHRlbWFpbFZlcmlmaWVkOmZhbHNlLFxuXHRcdFx0cHJvZmlsZTonJ1xuXG5cdFx0fVxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZVRpdGxlID0gdGhpcy5oYW5kbGVUaXRsZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlRW1haWwgPSB0aGlzLmhhbmRsZUVtYWlsLmJpbmQodGhpcyk7XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0bGV0IHByb2ZpbGVcblx0XHRpZiAodGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0gJiYgIXRoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQpIHtcblx0XHRcdHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSlcblx0XHRcdHRoaXMuZ2V0VXNlckRldGFpbHMocHJvZmlsZSkgLy8gZmlsbCB1c2VyIGRldGFpbHMgaW4gZm9ybVxuXHRcdFx0Ly90aGlzLnNldFN0YXRlKHsuLi50aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXX0sKCk9Pntcblx0XHRcdC8vaWYodGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ20nKXtcblx0XHRcdC8vIFx0dGhpcy5zZXRTdGF0ZSh7dGl0bGU6J21yLid9LCgpPT57XG5cdFx0XHQvLyBcdFx0IHRoaXMuaGFuZGxlU3VibWl0KClcblx0XHRcdC8vIFx0fSlcblx0XHRcdC8vIH1lbHNlIGlmKHRoaXMuc3RhdGUuZ2VuZGVyID09ICdmJyl7XG5cdFx0XHQvLyBcdHRoaXMuc2V0U3RhdGUoe3RpdGxlOidtcnMuJ30sKCk9Pntcblx0XHRcdC8vIFx0XHQgdGhpcy5oYW5kbGVTdWJtaXQoKVxuXHRcdFx0Ly8gXHR9KVxuXHRcdFx0Ly8gfVxuXHRcdFx0Ly99KVxuXHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCkge1xuXHRcdFx0bGV0IG9sZERhdGVcblx0XHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1t0aGlzLnByb3BzLnVzZXJfZGF0YVswXS5pZF0pXG5cdFx0XHRcdGlmIChPYmplY3Qua2V5cyhwcm9maWxlKS5sZW5ndGggPiAwICYmIHByb2ZpbGUuZG9iKSB7XG5cdFx0XHRcdFx0b2xkRGF0ZSA9IHByb2ZpbGUuZG9iLnNwbGl0KCctJylcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgeWVhcjogb2xkRGF0ZVswXSwgbW50aDogb2xkRGF0ZVsyXSwgZGF5OiBvbGREYXRlWzFdIH0sICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMucG9wdWxhdGVEYXRlcygpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgLi4ucHJvZmlsZSB9LCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQodHJ1ZSxmYWxzZSlcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh0aGlzLnByb3BzLnVzZXJfZGF0YSAmJiB0aGlzLnByb3BzLnVzZXJfZGF0YS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMucHJvcHMudXNlcl9kYXRhWzBdLmRvYikge1xuXHRcdFx0XHRcdFx0b2xkRGF0ZSA9IHRoaXMucHJvcHMudXNlcl9kYXRhWzBdLmRvYi5zcGxpdCgnLScpXG5cdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgeWVhcjogb2xkRGF0ZVswXSwgbW50aDogb2xkRGF0ZVsyXSwgZGF5OiBvbGREYXRlWzFdIH0sICgpID0+IHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wb3B1bGF0ZURhdGVzKClcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnByb3BzLnVzZXJfZGF0YVswXSwgbmFtZTogdGhpcy5wcm9wcy51c2VyX2RhdGFbMF0uZmlyc3RfbmFtZSwgbWVtYmVyX3R5cGU6IHRoaXMucHJvcHMubWVtYmVyX3R5cGUsIHByb2ZpbGVfaWQ6IHRoaXMucHJvcHMudXNlcl9kYXRhWzBdLnByb2ZpbGUsIGlzX2NoYW5nZTogZmFsc2UsIHRvd25fY29kZTogdGhpcy5wcm9wcy51c2VyX2RhdGFbMF0uY2l0eV9jb2RlLHByb2ZpbGU6dGhpcy5wcm9wcy51c2VyX2RhdGFbMF0ucHJvZmlsZSB9LCAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdCh0cnVlLGZhbHNlKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG5cdFx0bGV0IG5ld05hbWUgPSBbXVxuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdGxldCBwcm9maWxlTGVuZ3RoID0gT2JqZWN0LmtleXMocHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoO1xuXHRcdGlmIChwcm9maWxlTGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLnByb2ZpbGVfZmxhZyAmJiAhcHJvcHMuaXNfZW5kb3JzZW1lbnQpIHtcblx0XHRcdGxldCBpc0R1bW15VXNlciA9IHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcblx0XHRcdGlmIChPYmplY3Qua2V5cyhwcm9wcy5zZWxmX2RhdGFfdmFsdWVzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGxldCBwcm9maWxlXG5cdFx0XHRcdGlmICghaXNEdW1teVVzZXIpIHtcblx0XHRcdFx0XHRwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXSlcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmdldFVzZXJEZXRhaWxzKHByb2ZpbGUpIC8vIGZpbGwgdXNlciBkZXRhaWxzIGluIGZvcm1cblx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHByb2ZpbGUpLmxlbmd0aCkge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyAuLi5wcm9maWxlLCBkaXNhYmxlRW1haWw6IHByb2ZpbGUuZW1haWwgIT0gJycgPyB0cnVlIDogZmFsc2UsIGRpc2FibGVEb2I6IHByb2ZpbGUuZG9iICE9IG51bGwgPyB0cnVlIDogZmFsc2UsIGRpc2FibGVOYW1lOiBwcm9maWxlLm5hbWUgIT0gJycgPyB0cnVlIDogZmFsc2UgfSwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHByb2ZpbGUuZ2VuZGVyID09ICdtJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgdGl0bGU6ICdtci4nIH0sICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdChmYWxzZSxmYWxzZSlcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocHJvZmlsZS5nZW5kZXIgPT0gJ2YnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogJ21ycy4nIH0sICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdChmYWxzZSxmYWxzZSlcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlX2ZsYWc6IGZhbHNlIH0pXG5cdFx0XHRcdFx0bGV0IG5ld19wcm9maWxlID0gcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXVxuXHRcdFx0XHRcdHRoaXMuZ2V0VXNlckRldGFpbHMobmV3X3Byb2ZpbGUpIC8vIGZpbGwgdXNlciBkZXRhaWxzIGluIGZvcm1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlX2ZsYWc6IGZhbHNlIH0pXG5cdFx0XHRcdGxldCBwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSlcblx0XHRcdFx0bmV3TmFtZSA9IHByb2ZpbGUubmFtZS5zcGxpdChcIiBcIilcblx0XHRcdFx0dGhpcy5nZXRVc2VyRGV0YWlscyhwcm9maWxlKSAvLyBmaWxsIHVzZXIgZGV0YWlscyBpbiBmb3JtXG5cdFx0XHRcdHRoaXMucG9wdWxhdGVEYXRlcygpXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChwcm9wcy5pc19lbmRvcnNlbWVudCkge1xuXHRcdFx0dGhpcy5wb3B1bGF0ZURhdGVzKClcblx0XHR9XG5cdH1cblxuXHRnZXRVc2VyRGV0YWlscyhwcm9maWxlKSB7IC8vIGZpbGwgdXNlciBkZXRhaWxzIGluIHN0b3JlXG5cdFx0bGV0IG5ld05hbWUgPSBbXVxuXHRcdGxldCBvbGREYXRlXG5cdFx0bGV0IHRlbXBBcnJheVxuXHRcdGlmKE9iamVjdC5rZXlzKHByb2ZpbGUpLmxlbmd0aCA+IDApe1xuXHRcdFx0bmV3TmFtZSA9IHByb2ZpbGUubmFtZS5zcGxpdChcIiBcIilcblx0XHRcdGlmIChuZXdOYW1lLmxlbmd0aCA9PSAyKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdG5hbWU6IHByb2ZpbGUuaXNEdW1teVVzZXIgPyAnJyA6IG5ld05hbWVbMF0sXG5cdFx0XHRcdFx0bGFzdF9uYW1lOiBwcm9maWxlLmlzRHVtbXlVc2VyID8gJycgOiBuZXdOYW1lWzFdXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYgKG5ld05hbWUubGVuZ3RoID09IDMpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0bmFtZTogcHJvZmlsZS5pc0R1bW15VXNlciA/ICcnIDogbmV3TmFtZVswXSxcblx0XHRcdFx0XHRsYXN0X25hbWU6IHByb2ZpbGUuaXNEdW1teVVzZXIgPyAnJyA6IG5ld05hbWVbMl0sXG5cdFx0XHRcdFx0bWlkZGxlX25hbWU6IHByb2ZpbGUuaXNEdW1teVVzZXIgPyAnJyA6IG5ld05hbWVbMV1cblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSBpZiAobmV3TmFtZS5sZW5ndGggPiAzKSB7XG5cdFx0XHRcdHRlbXBBcnJheSA9IG5ld05hbWUuc2xpY2UoMiwgbmV3TmFtZS5sZW5ndGgpXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdG5hbWU6IHByb2ZpbGUuaXNEdW1teVVzZXIgPyAnJyA6IG5ld05hbWVbMF0sXG5cdFx0XHRcdFx0bGFzdF9uYW1lOiBwcm9maWxlLmlzRHVtbXlVc2VyID8gJycgOiB0ZW1wQXJyYXkuam9pbignICcpLFxuXHRcdFx0XHRcdG1pZGRsZV9uYW1lOiBwcm9maWxlLmlzRHVtbXlVc2VyID8gJycgOiBuZXdOYW1lWzFdXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgbmFtZTogcHJvZmlsZS5pc0R1bW15VXNlciA/ICcnIDogcHJvZmlsZS5uYW1lIH0pXG5cdFx0XHR9XG5cdFx0XHRpZiAocHJvZmlsZS5pc0R1bW15VXNlciAmJiBwcm9maWxlLmRvYikge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgZGF5OiBudWxsLCB5ZWFyOiBudWxsLCBtbnRoOiBudWxsIH0pXG5cdFx0XHR9IGVsc2UgaWYgKE9iamVjdC5rZXlzKHByb2ZpbGUpLmxlbmd0aCA+IDAgJiYgcHJvZmlsZS5kb2IpIHtcblx0XHRcdFx0b2xkRGF0ZSA9IHByb2ZpbGUuZG9iLnNwbGl0KCctJylcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHllYXI6IG9sZERhdGVbMF0sIG1udGg6IG9sZERhdGVbMV0sIGRheTogb2xkRGF0ZVsyXSB9LCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wb3B1bGF0ZURhdGVzKClcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucG9wdWxhdGVEYXRlcygpXG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZGlzYWJsZUVtYWlsOiAhcHJvZmlsZS5pc0R1bW15VXNlciAmJiBwcm9maWxlLmVtYWlsICE9ICcnID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRkaXNhYmxlRG9iOiAhcHJvZmlsZS5pc0R1bW15VXNlciAmJiBwcm9maWxlLmRvYiAhPSBudWxsID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRkaXNhYmxlTmFtZTogIXByb2ZpbGUuaXNEdW1teVVzZXIgJiYgcHJvZmlsZS5uYW1lICE9ICcnID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRnZW5kZXI6IHByb2ZpbGUuaXNEdW1teVVzZXIgPyAnJyA6IHByb2ZpbGUuZ2VuZGVyLFxuXHRcdFx0XHRlbWFpbDogcHJvZmlsZS5pc0R1bW15VXNlciA/ICcnIDogcHJvZmlsZS5lbWFpbCxcblx0XHRcdFx0ZG9iOiBwcm9maWxlLmlzRHVtbXlVc2VyID8gJycgOiBwcm9maWxlLmRvYixcblx0XHRcdFx0aWQ6IHByb2ZpbGUuaXNEdW1teVVzZXIgPyAwIDogcHJvZmlsZS5pZFxuXHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0XHRpZiAocHJvZmlsZS5nZW5kZXIgPT0gJ20nKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiAnbXIuJyB9KVxuXHRcdFx0XHR9IGVsc2UgaWYgKHByb2ZpbGUuZ2VuZGVyID09ICdmJykge1xuXHRcdFx0XHRcdGlmICh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYWR1bHRfY291bnQgPT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiAnbXJzLicgfSlcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiAnbWlzcycgfSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQoZmFsc2UsZmFsc2UpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXHRoYW5kbGVDaGFuZ2UoZmllbGQsIGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRbZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJhbScpXTogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSlcblx0fVxuXHRoYW5kbGVPbkZvY3VzKGZpZWxkLCBldmVudCkge1xuXHRcdC8vIGlmKGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nKXtcblx0XHQvLyBcdGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2ZpZWxkLWljb24nKVxuXHRcdC8vIH1cblx0fVxuXHRoYW5kbGVUaXRsZShmaWVsZCwgZXZlbnQpIHtcblx0XHRsZXQgdGl0bGVfdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcblx0XHRpZiAodGl0bGVfdmFsdWUgPT0gJ21yLicpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBnZW5kZXI6ICdtJyB9KVxuXHRcdH0gZWxzZSBpZiAodGl0bGVfdmFsdWUgPT0gJ21pc3MnIHx8IHRpdGxlX3ZhbHVlID09ICdtcnMuJykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGdlbmRlcjogJ2YnIH0pXG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0sICgpID0+IHtcblx0XHRcdHZhciBzZWxmX2RhdGEgPSB0aGlzLnN0YXRlXG5cdFx0XHRzZWxmX2RhdGEuaXNfY2hhbmdlID0gdHJ1ZVxuXHRcdFx0dGhpcy5wcm9wcy51c2VyRGF0YSgnc2VsZl9kYXRhJywgc2VsZl9kYXRhKSAvLyB0byBzYXZlIGVudGVyZWQgZGF0YSBpbiBzdG9yZVxuXHRcdH0pXG5cdH1cblx0aGFuZGxlU3VibWl0KGlzX2VuZG9yZXNtZW50LGlzX2VuZG9yc2VfZW1haWwpIHsgXG5cdFx0bGV0IHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSlcblx0XHRpZiAoIXByb2ZpbGUuaXNEdW1teVVzZXIpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlX2lkOiB0aGlzLnByb3BzLm1lbWJlcl9pZCB9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgcHJvZmlsZV9pZDogbnVsbCB9KVxuXHRcdH1cblx0XHR2YXIgc2VsZl9kYXRhID0gdGhpcy5zdGF0ZVxuXHRcdGlmIChzZWxmX2RhdGEubmFtZSAhPT0gJycpIHtcblx0XHRcdGlmIChzZWxmX2RhdGEubmFtZS5sZW5ndGggPiA1MCkge1xuXHRcdFx0XHRzZWxmX2RhdGEubmFtZSA9IHNlbGZfZGF0YS5uYW1lLnNsaWNlKDAsIDUwKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoc2VsZl9kYXRhLm1pZGRsZV9uYW1lICE9PSAnJykge1xuXHRcdFx0aWYgKHNlbGZfZGF0YS5taWRkbGVfbmFtZS5sZW5ndGggPiA1MCkge1xuXHRcdFx0XHRzZWxmX2RhdGEubWlkZGxlX25hbWUgPSBzZWxmX2RhdGEubWlkZGxlX25hbWUuc2xpY2UoMCwgNTApXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChzZWxmX2RhdGEubGFzdF9uYW1lICE9PSAnJykge1xuXHRcdFx0aWYgKHNlbGZfZGF0YS5sYXN0X25hbWUubGVuZ3RoID4gNTApIHtcblx0XHRcdFx0c2VsZl9kYXRhLmxhc3RfbmFtZSA9IHNlbGZfZGF0YS5sYXN0X25hbWUuc2xpY2UoMCwgNTApXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghaXNfZW5kb3Jlc21lbnQgJiYgIWlzX2VuZG9yc2VfZW1haWwpIHtcblx0XHRcdHNlbGZfZGF0YS5pc19jaGFuZ2UgPSB0cnVlXG5cdFx0XHRzZWxmX2RhdGEuZmlyc3RfbmFtZSA9IHNlbGZfZGF0YS5uYW1lXG5cdFx0fVxuXHRcdHRoaXMucHJvcHMudXNlckRhdGEoJ3NlbGZfZGF0YScsIHNlbGZfZGF0YSlcblx0fVxuXHRoYW5kbGVrZXkoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5waW5jb2RlLmxlbmd0aCA9PSA2KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0fVxuXHRoYW5kbGVOYW1lQ2hhcmFjdGVycyhmaWVsZCwgZXZlbnQpIHtcblx0XHRpZiAoZmllbGQgPT0gJ25hbWUnKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5uYW1lLmxlbmd0aCA9PSA1MCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZmllbGQgPT0gJ2xhc3RfbmFtZScpIHtcblx0XHRcdGlmICh0aGlzLnN0YXRlLmxhc3RfbmFtZS5sZW5ndGggPT0gNTApIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGZpZWxkID09ICdtaWRkbGVfbmFtZScpIHtcblx0XHRcdGlmICh0aGlzLnN0YXRlLm1pZGRsZV9uYW1lLmxlbmd0aCA9PSA1MCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cdGhhbmRsZUVtYWlsKCkge1xuXHRcdGxldCBmb3JtSXNWYWxpZCA9IHRydWU7XG5cdFx0aWYgKHRoaXMuc3RhdGUuZW1haWwgIT0gJycpIHtcblx0XHRcdGxldCB2YWxpZEVtYWlsID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cdFx0XHR2YWxpZEVtYWlsID0gdmFsaWRFbWFpbC50ZXN0KHRoaXMuc3RhdGUuZW1haWwpO1xuXHRcdFx0aWYgKHZhbGlkRW1haWwpIHtcblx0XHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQoZmFsc2UsZmFsc2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciB2YWxpZCBFbWFpbFwiIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRoYW5kbGVHZW5kZXIoZmllbGQsIGV2ZW50KSB7XG5cdFx0bGV0IGdlbmRlcl92YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdGlmIChnZW5kZXJfdmFsdWUgPT0gJ20nKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdGl0bGU6ICdtci4nIH0pXG5cdFx0fSBlbHNlIGlmIChnZW5kZXJfdmFsdWUgPT0gJ2YnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdGl0bGU6ICdtcnMuJyB9KVxuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGdlbmRlcjogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQoZmFsc2UsZmFsc2UpXG5cdFx0fSlcblx0fVxuXHRvcGVuRGF0ZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBkYXRlTW9kYWw6ICF0aGlzLnN0YXRlLmRhdGVNb2RhbCB9KVxuXHR9XG5cdHNlbGVjdERhdGVGcm9tQ2FsZW5kYXIoZGF0ZSkge1xuXHRcdGlmIChkYXRlKSB7XG5cdFx0XHRkYXRlID0gZGF0ZS50b0RhdGUoKVxuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZShkYXRlKVxuXHRcdFx0bGV0IG1udGggPSAoXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKVxuXHRcdFx0bGV0IGRheSA9IChcIjBcIiArIGRhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XG5cdFx0XHRsZXQgYWN0dWFsX2RhdGUgPSBbZGF0ZS5nZXRGdWxsWWVhcigpLCBtbnRoLCBkYXldLmpvaW4oXCItXCIpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRGF0ZVNwYW46IGFjdHVhbF9kYXRlLCBkYXRlTW9kYWw6IGZhbHNlLCBjdXJyZW50RGF0ZTogbmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpLCBkb2I6IGFjdHVhbF9kYXRlIH0sICgpID0+IHtcblx0XHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQoZmFsc2UsZmFsc2UpXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiBmYWxzZSB9KVxuXHRcdH1cblx0fVxuXHQvLyBoYW5kbGVTdGF0ZShldmVudCkge1xuXHQvLyBcdHZhciBldmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhdGVfZHJvcGRvd25cIilcblx0Ly8gXHR0aGlzLnNldFN0YXRlKHtzdGF0ZTogZXZlbnQub3B0aW9uc1tldmVudC5zZWxlY3RlZEluZGV4XS52YWx1ZSwgc3RhdGVfY29kZTogZXZlbnQub3B0aW9uc1tldmVudC5zZWxlY3RlZEluZGV4XS5pZH0sKCkgPT57XG5cdC8vIFx0XHR0aGlzLmhhbmRsZVN1Ym1pdChldmVudClcblxuXHQvLyBcdH0pXG5cdC8vIH1cblx0Ly8gaGFuZGxlRGlzdHJpY3QoZXZlbnQpIHtcblx0Ly8gXHR2YXIgZXZlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3RyaWN0X2Ryb3Bkb3duXCIpXG5cdC8vIFx0dGhpcy5zZXRTdGF0ZSh7ZGlzdHJpY3Q6IGV2ZW50Lm9wdGlvbnNbZXZlbnQuc2VsZWN0ZWRJbmRleF0udmFsdWUsIGRpc3RyaWN0X2NvZGU6IGV2ZW50Lm9wdGlvbnNbZXZlbnQuc2VsZWN0ZWRJbmRleF0uaWR9LCgpID0+e1xuXHQvLyBcdFx0dGhpcy5oYW5kbGVTdWJtaXQoZXZlbnQpXG5cblx0Ly8gXHR9KVxuXHQvLyB9XG5cdC8vIGhhbmRsZVRvd24oZXZlbnQpIHtcblx0Ly8gXHR2YXIgZXZlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvd25fZHJvcGRvd25cIilcblx0Ly8gXHR0aGlzLnNldFN0YXRlKHt0b3duOiBldmVudC5vcHRpb25zW2V2ZW50LnNlbGVjdGVkSW5kZXhdLnZhbHVlLCB0b3duX2NvZGU6IGV2ZW50Lm9wdGlvbnNbZXZlbnQuc2VsZWN0ZWRJbmRleF0uaWR9LCgpID0+e1xuXHQvLyBcdFx0dGhpcy5oYW5kbGVTdWJtaXQoZXZlbnQpXG5cblx0Ly8gXHR9KVxuXHQvLyB9XG5cdGhhbmRsZUxhc3RuYW1lKGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IG5vX2xuYW1lOiAhdGhpcy5zdGF0ZS5ub19sbmFtZSB9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdChmYWxzZSxmYWxzZSlcblx0XHR9KVxuXHR9XG5cdHNob3dBbGVydCh0eXBlKSB7XG5cdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBzZWxlY3RcIiArIHR5cGUgKyBcImZpcnN0XCIgfSk7XG5cdH1cblxuXHRoYW5kbGVTdGF0ZShmZWlsZCwgZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFtldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmFtJyldOiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KVxuXHRcdGxldCBzdGF0ZXMgPSBbXVxuXHRcdE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnc3RhdGUnXSkubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcblx0XHRcdHN0YXRlcy5wdXNoKHsgJ2NvZGUnOiB2YWx1ZS5nc3RfY29kZSwgJ25hbWUnOiB2YWx1ZS5zdGF0ZV9uYW1lIH0pXG5cdFx0XHQvLyBzdGF0ZXMucHVzaChbdmFsdWUuZ3N0X2NvZGU9dmFsdWUuc3RhdGVfbmFtZV0pXG5cdFx0XHQvLyBzdGF0ZXMucHVzaCh2YWx1ZS5zdGF0ZV9uYW1lKVxuXHRcdH0pXG5cdFx0dGhpcy5hdXRvY29tcGxldGUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndXNlclN0YXRlJylbMF0sIHN0YXRlcywgJ2lzU3RhdGUnKTtcblx0fVxuXG5cdGhhbmRsZURpc3RyaWN0KGZlaWxkLCBldmVudCkge1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYW0nKV06IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pXG5cdFx0bGV0IGRpc3RyaWN0c19vcHQgPSBbXVxuXHRcdE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnc3RhdGUnXSkubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcblx0XHRcdGlmIChzZWxmLnN0YXRlLnN0YXRlX2NvZGUgJiYgc2VsZi5zdGF0ZS5zdGF0ZV9jb2RlICE9ICcnICYmIHNlbGYuc3RhdGUuc3RhdGUgIT0gJycgJiYgc2VsZi5zdGF0ZS5zdGF0ZV9jb2RlID09IHZhbHVlLmdzdF9jb2RlKSB7XG5cdFx0XHRcdE9iamVjdC5lbnRyaWVzKHZhbHVlLmRpc3RyaWN0KS5tYXAoZnVuY3Rpb24gKFtrLCBkaXN0cmljdHNdKSB7XG5cdFx0XHRcdFx0ZGlzdHJpY3RzX29wdC5wdXNoKHsgJ2NvZGUnOiBkaXN0cmljdHMuZGlzdHJpY3RfY29kZSwgJ25hbWUnOiBkaXN0cmljdHMuZGlzdHJpY3RfbmFtZSB9KVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5hdXRvY29tcGxldGUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndXNlckRpc3RyaWN0JylbMF0sIGRpc3RyaWN0c19vcHQsICdpc0Rpc3RyaWN0Jyk7XG5cdH1cblxuXHRoYW5kbGVUb3duKGZlaWxkLCBldmVudCkge1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYW0nKV06IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pXG5cdFx0bGV0IGNpdHlfb3B0ID0gW11cblx0XHRPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ3N0YXRlJ10pLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG5cdFx0XHRpZiAoc2VsZi5zdGF0ZS5zdGF0ZV9jb2RlICYmIHNlbGYuc3RhdGUuc3RhdGVfY29kZSAhPSAnJyAmJiBzZWxmLnN0YXRlLnN0YXRlICE9ICcnICYmIHNlbGYuc3RhdGUuc3RhdGVfY29kZSA9PSB2YWx1ZS5nc3RfY29kZSkge1xuXHRcdFx0XHRPYmplY3QuZW50cmllcyh2YWx1ZS5jaXRpZXMpLm1hcChmdW5jdGlvbiAoW2ssIGNpdHldKSB7XG5cdFx0XHRcdFx0Y2l0eV9vcHQucHVzaCh7ICdjb2RlJzogY2l0eS5jaXR5X2NvZGUsICduYW1lJzogY2l0eS5jaXR5X25hbWUgfSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuYXV0b2NvbXBsZXRlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VzZXJUb3duJylbMF0sIGNpdHlfb3B0LCAnaXNUb3duJyk7XG5cdH1cblxuXHRhdXRvY29tcGxldGUoaW5wLCBhcnIsIHR5cGUpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHR2YXIgY3VycmVudEZvY3VzO1xuXG5cdFx0aW5wLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0dmFyIHBhcmVudERpdiwgY2hpbGREaXYsIGksIHZhbCA9IHRoaXMudmFsdWU7XG5cblx0XHRcdHNlbGYuY2xvc2VBbGxMaXN0cyh0eXBlKTtcblx0XHRcdGlmICghdmFsKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdFx0Y3VycmVudEZvY3VzID0gLTE7XG5cblx0XHRcdHBhcmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIilcblx0XHRcdHBhcmVudERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLmlkICsgXCJhdXRvY29tcGxldGUtbGlzdFwiKVxuXHRcdFx0cGFyZW50RGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXV0b2NvbXBsZXRlLWl0ZW1zXCIpXG5cdFx0XHR0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQocGFyZW50RGl2KVxuXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8qY2hlY2sgaWYgdGhlIGl0ZW0gc3RhcnRzIHdpdGggdGhlIHNhbWUgbGV0dGVycyBhcyB0aGUgdGV4dCBmaWVsZCB2YWx1ZToqL1xuXHRcdFx0XHRpZiAoYXJyW2ldLm5hbWUuc3Vic3RyKDAsIHZhbC5sZW5ndGgpLnRvVXBwZXJDYXNlKCkgPT0gdmFsLnRvVXBwZXJDYXNlKCkpIHtcblx0XHRcdFx0XHRjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG5cdFx0XHRcdFx0Y2hpbGREaXYuaW5uZXJIVE1MID0gXCI8c3Ryb25nPlwiICsgYXJyW2ldLm5hbWUuc3Vic3RyKDAsIHZhbC5sZW5ndGgpICsgXCI8L3N0cm9uZz5cIjtcblx0XHRcdFx0XHRjaGlsZERpdi5pbm5lckhUTUwgKz0gYXJyW2ldLm5hbWUuc3Vic3RyKHZhbC5sZW5ndGgpO1xuXHRcdFx0XHRcdGNoaWxkRGl2LmlubmVySFRNTCArPSBcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIHZhbHVlPSdcIiArIGFycltpXS5uYW1lICsgXCInIGlkPSdcIiArIGFycltpXS5jb2RlICsgXCInPlwiO1xuXG5cdFx0XHRcdFx0Y2hpbGREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0XHRpbnAudmFsdWUgPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0udmFsdWU7XG5cdFx0XHRcdFx0XHRpZiAodHlwZSA9PSAnaXNTdGF0ZScpIHtcblx0XHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHN0YXRlOiBpbnAudmFsdWUsIHN0YXRlX2NvZGU6IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXS5pZCB9KVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlID09ICdpc0Rpc3RyaWN0Jykge1xuXHRcdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgZGlzdHJpY3Q6IGlucC52YWx1ZSwgZGlzdHJpY3RfY29kZTogdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLmlkIH0pXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gJ2lzVG93bicpIHtcblx0XHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHRvd246IGlucC52YWx1ZSwgdG93bl9jb2RlOiB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0uaWQgfSlcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c2VsZi5oYW5kbGVTdWJtaXQoKVxuXHRcdFx0XHRcdFx0c2VsZi5jbG9zZUFsbExpc3RzKHR5cGUpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRwYXJlbnREaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQvKmV4ZWN1dGUgYSBmdW5jdGlvbiBvbiBrZXkgcHJlc3NlczoqL1xuXHRcdGlucC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0dmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkICsgXCJhdXRvY29tcGxldGUtbGlzdFwiKTtcblx0XHRcdGlmICh4KSB4ID0geC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKTtcblx0XHRcdGlmIChlLmtleUNvZGUgPT0gNDApIHtcblx0XHRcdFx0Y3VycmVudEZvY3VzKys7XG5cdFx0XHRcdHNlbGYuYWRkQWN0aXZlKHgsIGN1cnJlbnRGb2N1cyk7XG5cdFx0XHR9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzOCkge1xuXHRcdFx0XHRjdXJyZW50Rm9jdXMtLTtcblx0XHRcdFx0c2VsZi5hZGRBY3RpdmUoeCwgY3VycmVudEZvY3VzKTtcblx0XHRcdH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0aWYgKGN1cnJlbnRGb2N1cyA+IC0xKSB7XG5cdFx0XHRcdFx0aWYgKHgpIHhbY3VycmVudEZvY3VzXS5jbGljaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdGFkZEFjdGl2ZSh4LCBjdXJyZW50Rm9jdXMpIHtcblx0XHRpZiAoIXgpIHJldHVybiBmYWxzZTtcblx0XHR0aGlzLnJlbW92ZUFjdGl2ZSh4KTtcblx0XHRpZiAoY3VycmVudEZvY3VzID49IHgubGVuZ3RoKSBjdXJyZW50Rm9jdXMgPSAwO1xuXHRcdGlmIChjdXJyZW50Rm9jdXMgPCAwKSBjdXJyZW50Rm9jdXMgPSAoeC5sZW5ndGggLSAxKTtcblx0XHRpZih4W2N1cnJlbnRGb2N1c10uY2xhc3NMaXN0KXtcblx0XHRcdHhbY3VycmVudEZvY3VzXS5jbGFzc0xpc3QuYWRkKFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiKTtcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVBY3RpdmUoeCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYoeFtpXS5jbGFzc0xpc3Qpe1xuXHRcdFx0XHR4W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhdXRvY29tcGxldGUtYWN0aXZlXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNsb3NlQWxsTGlzdHMoZWxtbnQsIHR5cGUpIHtcblx0XHRsZXQgaW5wXG5cdFx0aWYgKHR5cGUgPT0gJ2lzU3RhdGUnKSB7XG5cdFx0XHRpbnAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1c2VyU3RhdGUnKVswXVxuXHRcdH0gZWxzZSBpZiAodHlwZSA9PSAnaXNEaXN0cmljdCcpIHtcblx0XHRcdGlucCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VzZXJEaXN0cmljdCcpWzBdXG5cdFx0fSBlbHNlIGlmICh0eXBlID09ICdpc1Rvd24nKSB7XG5cdFx0XHRpbnAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1c2VyVG93bicpWzBdXG5cdFx0fVxuXHRcdHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImF1dG9jb21wbGV0ZS1pdGVtc1wiKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChlbG1udCAhPSB4W2ldICYmIGVsbW50ICE9IGlucCkge1xuXHRcdFx0XHR4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGF5c0luTW9udGgobW9udGgsIHllYXIpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcblx0fVxuXG5cdHBvcHVsYXRlRGF0ZXMoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0bGV0IGRlZmF1bHRfbW9udGhzID0gWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMiddXG5cdFx0dmFyIGRheWRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXlkcm9wZG93bl9cIiArIHRoaXMucHJvcHMubWVtYmVyX2lkKSxcblx0XHRcdG1vbnRoZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbnRoZHJvcGRvd25fXCIgKyB0aGlzLnByb3BzLm1lbWJlcl9pZCksXG5cdFx0XHR5ZWFyZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJkcm9wZG93bl9cIiArIHRoaXMucHJvcHMubWVtYmVyX2lkKTtcblx0XHRsZXQgYWdlX3RocmVzaG9sZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkID8gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5tYXhfYWdlIDogNjVcblx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLFxuXHRcdFx0ZGF5ID0gdG9kYXkuZ2V0VVRDRGF0ZSgpLFxuXHRcdFx0bW9udGggPSB0b2RheS5nZXRVVENNb250aCgpLFxuXHRcdFx0eWVhciA9IHRvZGF5LmdldFVUQ0Z1bGxZZWFyKCkgLSBhZ2VfdGhyZXNob2xkLFxuXHRcdFx0Y3VycmVudFllYXIgPSB0b2RheS5nZXRVVENGdWxsWWVhcigpLFxuXHRcdFx0ZGF5c0luQ3Vyck1vbnRoID0gdGhpcy5kYXlzSW5Nb250aChtb250aCwgeWVhcik7XG5cblx0XHRkYXlkcm9wZG93bi5pbm5lckhUTUwgPSAnJ1xuXHRcdG1vbnRoZHJvcGRvd24uaW5uZXJIVE1MID0gJydcblx0XHR5ZWFyZHJvcGRvd24uaW5uZXJIVE1MID0gJydcblxuXHRcdHZhciBvcHRfZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRvcHRfZGQudmFsdWUgPSAnREQnXG5cdFx0b3B0X2RkLnRleHQgPSAnREQnXG5cdFx0b3B0X2RkLmhpZGRlbiA9IHRydWVcblx0XHRkYXlkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRfZGQpO1xuXHRcdHZhciBvcHRfbW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRvcHRfbW0udmFsdWUgPSAnTU0nXG5cdFx0b3B0X21tLnRleHQgPSAnTU0nXG5cdFx0b3B0X21tLmhpZGRlbiA9IHRydWVcblx0XHRtb250aGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdF9tbSk7XG5cdFx0dmFyIG9wdF95eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdG9wdF95eS52YWx1ZSA9ICdZWVlZJ1xuXHRcdG9wdF95eS50ZXh0ID0gJ1lZWVknXG5cdFx0b3B0X3l5LmhpZGRlbiA9IHRydWVcblx0XHR5ZWFyZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0X3l5KTtcblxuXHRcdC8vIERheVxuXHRcdGZvciAodmFyIGkgPSAxOyBpIDw9IGRheXNJbkN1cnJNb250aDsgaSsrKSB7XG5cdFx0XHR2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRpZiAoaSA8PSA5KSB7XG5cdFx0XHRcdG9wdC52YWx1ZSA9ICcwJyArIGk7XG5cdFx0XHRcdG9wdC50ZXh0ID0gJzAnICsgaTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdC52YWx1ZSA9IGk7XG5cdFx0XHRcdG9wdC50ZXh0ID0gaTtcblx0XHRcdH1cblxuXHRcdFx0ZGF5ZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0KTtcblx0XHR9XG5cdFx0Ly8gTW9udGhcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcblx0XHRcdHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdG9wdC52YWx1ZSA9ICdNTSdcblx0XHRcdG9wdC50ZXh0ID0gJ01NJ1xuXHRcdFx0b3B0LnZhbHVlID0gZGVmYXVsdF9tb250aHNbaV1cblx0XHRcdG9wdC50ZXh0ID0gZGVmYXVsdF9tb250aHNbaV1cblx0XHRcdG1vbnRoZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0KTtcblx0XHR9XG5cblx0XHQvLyBZZWFyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPD0gYWdlX3RocmVzaG9sZDsgaSsrKSB7XG5cdFx0XHR2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRvcHQudmFsdWUgPSAnWVlZWSdcblx0XHRcdG9wdC50ZXh0ID0gJ1lZWVknXG5cdFx0XHRvcHQudmFsdWUgPSBpICsgeWVhcjtcblx0XHRcdG9wdC50ZXh0ID0gaSArIHllYXI7XG5cdFx0XHR5ZWFyZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0KTtcblx0XHR9XG5cblx0XHQvLyBjaGFuZ2UgaGFuZGxlciBmb3IgZGF5XG5cdFx0ZGF5ZHJvcGRvd24ub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgTmV3U2VsZWN0ZWRkYXlzID0gZGF5ZHJvcGRvd24udmFsdWU7XG5cdFx0XHRzZWxmLnNldFN0YXRlKHsgZGF5OiBOZXdTZWxlY3RlZGRheXMgfSwgKCkgPT4ge1xuXHRcdFx0XHRzZWxmLnN1Ym1pdERvYigpXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdC8vIENoYW5nZSBoYW5kbGVyIGZvciBtb250aHNcblx0XHRtb250aGRyb3Bkb3duLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR2YXIgbmV3TW9udGggPSBtb250aGRyb3Bkb3duLnZhbHVlXG5cdFx0XHRzZWxmLnNldFN0YXRlKHsgbW50aDogbmV3TW9udGggfSwgKCkgPT4ge1xuXHRcdFx0XHRzZWxmLnN1Ym1pdERvYigpXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdC8vIGNoYW5nZSBoYW5kbGVyIGZvciB5ZWFyXG5cdFx0eWVhcmRyb3Bkb3duLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIG5ld1llYXIgPSB5ZWFyZHJvcGRvd24udmFsdWU7XG5cdFx0XHRzZWxmLnNldFN0YXRlKHsgeWVhcjogbmV3WWVhciB9LCAoKSA9PiB7XG5cdFx0XHRcdHNlbGYuc3VibWl0RG9iKClcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cdHN1Ym1pdERvYigpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRpZiAoc2VsZi5zdGF0ZS5kYXkgJiYgc2VsZi5zdGF0ZS5tbnRoICYmIHNlbGYuc3RhdGUueWVhcikge1xuXHRcdFx0bGV0IGZpbmFsRGF0ZSA9IHNlbGYuc3RhdGUueWVhciArICctJyArIHNlbGYuc3RhdGUubW50aCArICctJyArIHNlbGYuc3RhdGUuZGF5XG5cdFx0XHRzZWxmLnNldFN0YXRlKHtcblx0XHRcdFx0ZG9iOiBmaW5hbERhdGVcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0c2VsZi5oYW5kbGVTdWJtaXQoKVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHR2ZXJpZnlFbmRvcnNlbWVudEVtYWlsKG5ld2VtYWlsKXtcblx0XHR0aGlzLnNldFN0YXRlKHtlbWFpbFZlcmlmaWVkOnRydWUsZW1haWw6bmV3ZW1haWx9LCgpPT57XG5cdFx0XHR0aGlzLnByb3BzLmNoZWNrSXNFbWFpbFZlcmZpZWQoKVxuXHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQodHJ1ZSx0cnVlKVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0bGV0IHNob3dfY3JlYXRlQXBpX2tleXMgPSBbXVxuXHRcdGxldCBjaXR5X29wdCA9IFtdXG5cdFx0bGV0IGRpc3RyaWN0c19vcHQgPSBbXVxuXHRcdGxldCBVcGxvYWRlZF9pbWFnZV9kYXRhXG5cdFx0bGV0IGNvbW1vbk1zZ1NwYW4gPSA8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydjb21tb25fbWVzc2FnZSddfTwvc3Bhbj5cblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnMpLmxlbmd0aCA+IDApIHtcblx0XHRcdE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuXHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzLnB1c2goa2V5KVxuXHRcdFx0fSlcblx0XHR9XG5cdFx0bGV0IGlzRHVtbXlVc2VyXG5cdFx0aWYgKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSkge1xuXHRcdFx0aXNEdW1teVVzZXIgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlclxuXHRcdH1cblx0XHR7XG5cdFx0XHRPYmplY3QuZW50cmllcyhzZWxmLnByb3BzLmluc3VybmFjZURhdGFbJ3N0YXRlJ10pLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG5cdFx0XHRcdGlmIChzZWxmLnN0YXRlLnN0YXRlX2NvZGUgJiYgc2VsZi5zdGF0ZS5zdGF0ZV9jb2RlICE9ICcnICYmIHNlbGYuc3RhdGUuc3RhdGUgIT0gJycgJiYgc2VsZi5zdGF0ZS5zdGF0ZV9jb2RlID09IHZhbHVlLmdzdF9jb2RlKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmVudHJpZXModmFsdWUuZGlzdHJpY3QpLm1hcChmdW5jdGlvbiAoW2ssIGRpc3RyaWN0c10pIHtcblx0XHRcdFx0XHRcdGRpc3RyaWN0c19vcHQucHVzaCg8b3B0aW9uIGtleT17a30gZGF0YS1wYXJhbT1cImRpc3RyaWN0XCIgaWQ9e2Rpc3RyaWN0cy5kaXN0cmljdF9jb2RlfSB2YWx1ZT17ZGlzdHJpY3RzLmRpc3RyaWN0X25hbWV9PntkaXN0cmljdHMuZGlzdHJpY3RfbmFtZX08L29wdGlvbj4pXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRPYmplY3QuZW50cmllcyh2YWx1ZS5jaXRpZXMpLm1hcChmdW5jdGlvbiAoW2ssIGNpdHldKSB7XG5cdFx0XHRcdFx0XHRjaXR5X29wdC5wdXNoKDxvcHRpb24ga2V5PXtrfSBkYXRhLXBhcmFtPVwidG93blwiIGlkPXtjaXR5LmNpdHlfY29kZX0gdmFsdWU9e2NpdHkuY2l0eV9uYW1lfT57Y2l0eS5jaXR5X25hbWV9PC9vcHRpb24+KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXHRcdC8vIGxldCBpc0Rpc2FibGUgPSBmYWxzZVxuXHRcdC8vIGlmKCFpc0R1bW15VXNlciAmJiB0aGlzLnN0YXRlLmlzRGlzYWJsZSl7XG5cdFx0Ly8gXHRpZih0aGlzLnN0YXRlLm5hbWUgIT0nJyAmJiB0aGlzLnN0YXRlLmRvYiAhPScnICYmIHRoaXMuc3RhdGUuZW1haWwgIT0nJyl7XG5cdFx0Ly8gXHRcdGlzRGlzYWJsZSA9IHRydWVcblx0XHQvLyBcdH1cblxuXHRcdC8vIH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0ey8qXG5cdFx0XHRcdFx0aXNEaXNhYmxlP1xuXHRcdFx0XHRcdFx0PHNwYW4+Q2hhbmdlIGRldGFpbHM8L3NwYW4+XG5cdFx0XHRcdFx0OicnXG5cdFx0XHRcdCovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgaWQ9e2lzRHVtbXlVc2VyID8gJ21lbWJlcl8wJyA6IHRoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQgPyBgbWVtYmVyXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YCA6IGBtZW1iZXJfJHt0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGV9YH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmFkdWx0X2NvdW50ID09IDIgP1xuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLnRpdGxlID09ICdtci4nID8gJ2J0bi1hY3RpdmUnIDogJyd9YH0gbmFtZT1cInRpdGxlXCIgdmFsdWU9J21yLicgZGF0YS1wYXJhbT0ndGl0bGUnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGUuYmluZCh0aGlzLCAnbXIuJyl9ID5Nci48L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUudGl0bGUgPT0gJ21ycy4nID8gJ2J0bi1hY3RpdmUnIDogJyd9YH0gdmFsdWU9J21ycy4nIG5hbWU9XCJ0aXRsZVwiIGRhdGEtcGFyYW09J3RpdGxlJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVRpdGxlLmJpbmQodGhpcywgJ21ycy4nKX0gPk1ycy48L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUudGl0bGUgPT0gJ21yLicgPyAnYnRuLWFjdGl2ZScgOiAnJ31gfSBuYW1lPVwidGl0bGVcIiB2YWx1ZT0nbXIuJyBkYXRhLXBhcmFtPSd0aXRsZScgb25DbGljaz17dGhpcy5oYW5kbGVUaXRsZS5iaW5kKHRoaXMsICdtci4nKX0gPk1yLjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS50aXRsZSA9PSAnbWlzcycgPyAnYnRuLWFjdGl2ZScgOiAnJ31gfSBuYW1lPVwidGl0bGVcIiB2YWx1ZT0nbWlzcycgZGF0YS1wYXJhbT0ndGl0bGUnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGUuYmluZCh0aGlzLCAnbWlzcycpfSA+TXMuPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLnRpdGxlID09ICdtcnMuJyA/ICdidG4tYWN0aXZlJyA6ICcnfWB9IHZhbHVlPSdtcnMuJyBuYW1lPVwidGl0bGVcIiBkYXRhLXBhcmFtPSd0aXRsZScgb25DbGljaz17dGhpcy5oYW5kbGVUaXRsZS5iaW5kKHRoaXMsICdtcnMuJyl9ID5NcnMuPC9idXR0b24+XG5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1yaWdodCBcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19IFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0XHRcdFx0aWQ9e2BuYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ25hbWUnKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiZmlyc3RfbmFtZVwiIFxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCIgXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0nbmFtZScgXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ25hbWUnKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMsIGZhbHNlLGZhbHNlKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25Gb2N1cz17dGhpcy5oYW5kbGVPbkZvY3VzLmJpbmQodGhpcywgJ25hbWUnKX0gXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZU5hbWUgPyAnZGlzYWJsZWQnIDogJyd9IFxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlTmFtZUNoYXJhY3RlcnMuYmluZCh0aGlzLCAnbmFtZScpfSBcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5kaXNhYmxlTmFtZSA/ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsJyA6ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXInfSBodG1sRm9yPXtgbmFtZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PjxzcGFuIGNsYXNzTmFtZT1cImxhYmVsRG90XCI+PC9zcGFuPkZpcnN0IE5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3VzZXItMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCduYW1lJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHNob3dfY3JlYXRlQXBpX2tleXMuaW5kZXhPZignZmlyc3RfbmFtZScpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ21heF9jaGFyYWN0ZXInXX08L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGlucC1tYXJnaW4tcmlnaHQgXCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyB9fSBcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdFx0XHRcdGlkPXtgbWlkZGxlX25hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbWlkZGxlX25hbWUnKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwibWlkZGxlX25hbWVcIiBcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibWlkZGxlX25hbWVcIiBcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5ub19sbmFtZSA/ICcnIDogdGhpcy5zdGF0ZS5taWRkbGVfbmFtZX0gXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0nbWlkZGxlX25hbWUnIFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdtaWRkbGVfbmFtZScpfSBcblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcywgZmFsc2UsZmFsc2UpfSBcblx0XHRcdFx0XHRcdFx0XHRvbkZvY3VzPXt0aGlzLmhhbmRsZU9uRm9jdXMuYmluZCh0aGlzLCAnbWlkZGxlX25hbWUnKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25LZXlQcmVzcz17dGhpcy5oYW5kbGVOYW1lQ2hhcmFjdGVycy5iaW5kKHRoaXMsICdtaWRkbGVfbmFtZScpfSBcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5zdGF0ZS5ub19sbmFtZSB8fCB0aGlzLnN0YXRlLmRpc2FibGVOYW1lPyAnZGlzYWJsZWQnIDogXCJcIn1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5kaXNhYmxlTmFtZSA/ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsJyA6ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXInfSBodG1sRm9yPXtgbWlkZGxlX25hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT5NaWRkbGUgTmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdXNlci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzLmluZGV4T2YoJ21pZGRsZV9uYW1lJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snbWF4X2NoYXJhY3RlciddfTwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1yaWdodFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0gXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdFx0XHRpZD17YGxhc3RfbmFtZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdsYXN0X25hbWUnKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwibGFzdF9uYW1lXCIgXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImxhc3RfbmFtZVwiIFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm5vX2xuYW1lID8gJycgOiB0aGlzLnN0YXRlLmxhc3RfbmFtZX0gXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0nbGFzdF9uYW1lJyBcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnbGFzdF9uYW1lJyl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzLCBmYWxzZSxmYWxzZSl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uRm9jdXM9e3RoaXMuaGFuZGxlT25Gb2N1cy5iaW5kKHRoaXMsICdsYXN0X25hbWUnKX0gXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMuc3RhdGUubm9fbG5hbWUgfHwgdGhpcy5zdGF0ZS5kaXNhYmxlTmFtZSA/ICdkaXNhYmxlZCcgOiBcIlwifSBcblx0XHRcdFx0XHRcdFx0XHRvbktleVByZXNzPXt0aGlzLmhhbmRsZU5hbWVDaGFyYWN0ZXJzLmJpbmQodGhpcywgJ2xhc3RfbmFtZScpfSBcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5kaXNhYmxlTmFtZSA/ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsJyA6ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXInfSBodG1sRm9yPXtgbGFzdF9uYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxEb3RcIj48L3NwYW4+TGFzdCBOYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy91c2VyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbGFzdF9uYW1lJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHNob3dfY3JlYXRlQXBpX2tleXMuaW5kZXhPZignbGFzdF9uYW1lJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snbWF4X2NoYXJhY3RlciddfTwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnLTEwcHgnIH19ID5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWR0bHMtY2hrXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieCBmdy01MDBcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVMYXN0bmFtZS5iaW5kKHRoaXMpfSBzdHlsZT17eyBmb250U2l6ZTogMTIsIHBhZGRpbmdMZWZ0OiAyNCwgbGluZUhlaWdodDogJzE2cHgnIH19PkkgZG9udCBoYXZlIGEgbGFzdCBuYW1lPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUubm9fbG5hbWV9IHZhbHVlPVwib25cIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFyayBzbWFsbC1jaGVja21hcmtcIj48L3NwYW4+PC9sYWJlbD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1ydC0xMFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdE1hbGVcblx0XHRcdFx0XHRcdFx0IDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZ2VuZGVyXCIgdmFsdWU9J20nIGRhdGEtcGFyYW09J2dlbmRlcicgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT09ICdtJ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZGVyLmJpbmQodGhpcywgJ20nKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0RmVtYWxlXG5cdFx0XHRcdFx0XHRcdCA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImdlbmRlclwiIHZhbHVlPSdmJyBkYXRhLXBhcmFtPSdnZW5kZXInIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09PSAnZid9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmRlci5iaW5kKHRoaXMsICdmJyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdE90aGVyc1xuXHRcdFx0XHRcdFx0XHQgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJnZW5kZXJcIiB2YWx1ZT0nbycgZGF0YS1wYXJhbT0nZ2VuZGVyJyBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PT0gJ28nfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVHZW5kZXIuYmluZCh0aGlzLCAnbycpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2dlbmRlcicpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzLmluZGV4T2YoJ2dlbmRlcicpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9ycy5nZW5kZXJbMF19PC9zcGFuPiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0IXRoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQ/XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtcnQtMTBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgaWQ9e2BlbWFpbHNfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdlbWFpbCcpID4gLTEgPyAnZmlsbC1lcnJvcicgOiAnJ31gfSByZXF1aXJlZCBcblx0XHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImVtYWlsXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIiBcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyYW09J2VtYWlsJyBcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdlbWFpbCcpfSBcblx0XHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVFbWFpbH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZvY3VzPXt0aGlzLmhhbmRsZU9uRm9jdXMuYmluZCh0aGlzLCAnZW1haWwnKX0gXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmRpc2FibGVFbWFpbCA/ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsJyA6ICdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXInfSBodG1sRm9yPXtgZW1haWxzXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxEb3RcIj48L3NwYW4+RW1haWw8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbWFpbC0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2VtYWlsJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWyd2YWxpZF9lbWFpbCddfTwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDo8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxWZXJpZnlFbWFpbCB7Li4udGhpcy5wcm9wc30gaXNfZW5kb3JzZW1lbnQ9e3RydWV9IG1lbWJlcl9pZD17dGhpcy5wcm9wcy5tZW1iZXJfaWR9IHZhbGlkYXRlRXJyb3JzID17dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9yc30gZW1haWw9e3RoaXMuc3RhdGUuZW1haWx9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gdmVyaWZ5RW5kb3JzZW1lbnRFbWFpbD17dGhpcy52ZXJpZnlFbmRvcnNlbWVudEVtYWlsLmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZW1haWwnKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ3ZhbGlkX2VtYWlsJ119PC9zcGFuPiA6ICcnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdHsvKiA8aW5wdXQgdHlwZT1cImJ1dHRvblwiICBpZD17YGlzbi1kYXRlXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgdGV4dC1sZWZ0ICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdkb2InKT4gLTE/J2ZpbGwtZXJyb3InOicnfWB9IHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cImRvYlwiIG5hbWU9XCJkb2JcIiB2YWx1ZT17dGhpcy5zdGF0ZS5kb2I/dGhpcy5zdGF0ZS5kb2I6J3l5eXkvbW0vZGQnfSBkYXRhLXBhcmFtPSdkb2InIG9uQ2xpY2s9e3RoaXMub3BlbkRhdGVNb2RhbC5iaW5kKHRoaXMpfS8+ICovfVxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbFwiIGh0bWxGb3I9XCJpbnMtZGF0ZVwiPkRhdGUgb2YgYmlydGg8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhbGVuZGFyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHR7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0ZU1vZGFsID8gPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1vdmVybGF5XCI+PGRpdiBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1tb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2Vla051bWJlcj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bW9tZW50KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlU3Bhbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZT17KGRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmRpZmYobW9tZW50KChuZXcgRGF0ZSkpLCAnZGF5cycpICA+IDAgfHwgZGF0ZS5kaWZmKG1vbWVudCgobmV3IERhdGUpKSwgJ2RheXMnKSA+IDQwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb2RheSA9IHtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuc2VsZWN0RGF0ZUZyb21DYWxlbmRhci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9iLXNlbGVjdC1kaXYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9iLXNlbGVjdCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPXtgZGF5ZHJvcGRvd25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGhpZGRlbj5ERDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImRvYi1kb3duLWljb25cIiBzdHlsZT17eyByaWdodDogJzRweCcgfX0gc3JjPVwiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYi1zZWxlY3QgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBpZD17YG1vbnRoZHJvcGRvd25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSB2YWx1ZT17dGhpcy5zdGF0ZS5tbnRofT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBoaWRkZW4+TU08L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkb2ItZG93bi1pY29uXCIgc3R5bGU9e3sgcmlnaHQ6ICc0cHgnIH19IHNyYz1cIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Itc2VsZWN0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9e2B5ZWFyZHJvcGRvd25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSB2YWx1ZT17dGhpcy5zdGF0ZS55ZWFyfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBoaWRkZW4+WVlZWTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImRvYi1kb3duLWljb25cIiBzdHlsZT17eyByaWdodDogJzNweCcgfX0gc3JjPVwiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdkb2InKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydhZHVsdF9hZ2UnXX08L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0c2hvd19jcmVhdGVBcGlfa2V5cy5pbmRleE9mKCdkb2InKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnMuZG9iWzBdfTwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGF1dG9jb21wbGV0ZVwiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0gXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdFx0XHRpZD17YGlzbnN0YXRlXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ3N0YXRlJykgPiAtMSA/ICdmaWxsLWVycm9yJyA6ICcnfSB1c2VyU3RhdGVgfSByZXF1aXJlZCBcblx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJzdGF0ZVwiIFxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJzdGF0ZVwiIFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnN0YXRlfSBcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmFtPSdzdGF0ZScgXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhdGUuYmluZCh0aGlzLCAnc3RhdGUnKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMsIGZhbHNlLGZhbHNlKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25Gb2N1cz17dGhpcy5oYW5kbGVPbkZvY3VzLmJpbmQodGhpcywgJ3N0YXRlJyl9IFxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtc3RhdGUtY29kZT17dGhpcy5zdGF0ZS5zdGF0ZV9jb2RlfSBcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9e2Bpc25zdGF0ZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PlN0YXRlPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ3N0YXRlJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHNob3dfY3JlYXRlQXBpX2tleXMuaW5kZXhPZignc3RhdGUnKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnMuc3RhdGVbMF19PC9zcGFuPiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLnN0YXRlX2NvZGUgIT0gJycgP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGF1dG9jb21wbGV0ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19IFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgaXNuZGlzdHJpY3RfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdzdGF0ZScpID4gLTEgPyAnZmlsbC1lcnJvcicgOiAnJ30gdXNlckRpc3RyaWN0YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJkaXN0cmljdFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRpc3RyaWN0XCIgXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kaXN0cmljdH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmFtPSdkaXN0cmljdCcgXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVEaXN0cmljdC5iaW5kKHRoaXMsICdkaXN0cmljdCcpfSBcblx0XHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzLCBmYWxzZSxmYWxzZSl9IFxuXHRcdFx0XHRcdFx0XHRcdFx0b25Gb2N1cz17dGhpcy5oYW5kbGVPbkZvY3VzLmJpbmQodGhpcywgJ2Rpc3RyaWN0Jyl9IFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1zdGF0ZS1jb2RlPXt0aGlzLnN0YXRlLmRpc3RyaWN0X2NvZGV9IFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9e2Bpc25kaXN0cmljdF8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PkRpc3RyaWN0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvY2F0aW9uLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0OiA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCIgb25DbGljaz17dGhpcy5zaG93QWxlcnQuYmluZCh0aGlzLCcgc3RhdGUgJyl9PlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnLCBmb250V2VpZ2h0OiAnMTAwJywgY29sb3I6ICdncmF5JyB9fSBcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17YGlzbmRpc3RyaWN0XyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZGlzdHJpY3QnKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJkaXN0cmljdFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRpc3RyaWN0XCIgXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cIlNlbGVjdCBEaXN0cmljdFwiIGRpc2FibGVkIFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0nZGlzdHJpY3QnIFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWxcIiBodG1sRm9yPXtgaXNuZGlzdHJpY3RfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT5EaXN0cmljdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cblxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdkaXN0cmljdCcpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzLmluZGV4T2YoJ2Rpc3RyaWN0JykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzLmRpc3RyaWN0WzBdfTwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5kaXN0cmljdF9jb2RlICE9ICcnID9cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBhdXRvY29tcGxldGVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX1cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgaXNuVG93bl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignc3RhdGUnKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9IHVzZXJUb3duYH0gcmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cInRvd25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInRvd25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudG93bn1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyYW09J3Rvd24nXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVUb3duLmJpbmQodGhpcywgJ3Rvd24nKX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzLCBmYWxzZSxmYWxzZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZvY3VzPXt0aGlzLmhhbmRsZU9uRm9jdXMuYmluZCh0aGlzLCAndG93bicpfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1zdGF0ZS1jb2RlPXt0aGlzLnN0YXRlLnRvd25fY29kZX0gXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj17YGlzblRvd25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT5Ub3duPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvY2F0aW9uLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0OiA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCIgb25DbGljaz17dGhpcy5zaG93QWxlcnQuYmluZCh0aGlzLCcgZGlzdHJpY3QgJyl9PlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnLCBmb250V2VpZ2h0OiAnMTAwJywgY29sb3I6ICdncmF5JyB9fSBcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17YGlzbmRpc3RyaWN0XyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZigndG93bicpID4gLTEgPyAnZmlsbC1lcnJvcicgOiAnJ31gfSByZXF1aXJlZCBcblx0XHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cInRvd25cIiBcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ0b3duXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cIlNlbGVjdCBUb3duXCIgZGlzYWJsZWQgXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmFtPSd0b3duJyBcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsXCIgaHRtbEZvcj17YGlzbmRpc3RyaWN0XyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+VG93bjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cblxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCd0b3duJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHNob3dfY3JlYXRlQXBpX2tleXMuaW5kZXhPZigndG93bicpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9ycy50b3duWzBdfTwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPXtgaW5zLXNlbGVjdC1kcm9wICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdzdGF0ZScpPiAtMT8nZmlsbC1lcnJvcic6Jyd9YH0gaWQ9XCJzdGF0ZV9kcm9wZG93blwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXRlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLnN0YXRlfT5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGRhdGEtcGFyYW09XCJzdGF0ZVwiICBoaWRkZW4gaWQ9ezB9IHZhbHVlPVwic2VsZWN0X3N0YXRlXCIgdmFsdWU9XCJzdGF0ZVwiPlNlbGVjdCBTdGF0ZTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ3N0YXRlJ10pLm1hcChmdW5jdGlvbihba2V5LCB2YWx1ZV0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8b3B0aW9uIGtleT17a2V5fSBkYXRhLXBhcmFtPVwic3RhdGVcIiBpZD17dmFsdWUuZ3N0X2NvZGV9IHZhbHVlPXt2YWx1ZS5zdGF0ZV9uYW1lfT57dmFsdWUuc3RhdGVfbmFtZX08L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdHsvKjxpbnB1dCBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0gdHlwZT1cInRleHRcIiBpZD17YGlzbnN0YXRlXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ3N0YXRlJyk+IC0xPydmaWxsLWVycm9yJzonJ31gfSByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJub25lXCIgbmFtZT1cInN0YXRlXCIgdmFsdWU9e3RoaXMuc3RhdGUuc3RhdGV9IGRhdGEtcGFyYW09J3N0YXRlJyBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCdzdGF0ZScpfSBvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0fSBvbkZvY3VzPXt0aGlzLmhhbmRsZU9uRm9jdXMuYmluZCh0aGlzLCdzdGF0ZScpfS8+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsXCIgaHRtbEZvcj17YGlzbnN0YXRlXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+KlN0YXRlPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ3N0YXRlJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuOicnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHNob3dfY3JlYXRlQXBpX2tleXMuaW5kZXhPZignc3RhdGUnKT4gLTE/XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9ycy5zdGF0ZVswXX08L3NwYW4+OicnXHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj4qL31cblx0XHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zdGF0ZSA9PSAnJz9cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgb25DbGljaz17dGhpcy5zaG93QWxlcnQuYmluZCh0aGlzKX0+IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyxmb250V2VpZ2h0OiAnMTAwJywgICAgY29sb3I6ICdncmF5J319IHR5cGU9XCJ0ZXh0XCIgaWQ9e2Bpc25kaXN0cmljdF8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdkaXN0cmljdCcpPiAtMT8nZmlsbC1lcnJvcic6Jyd9YH0gcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwibm9uZVwiIG5hbWU9XCJkaXN0cmljdFwiIHZhbHVlPVwiU2VsZWN0IERpc3RyaWN0XCIgZGlzYWJsZWQgZGF0YS1wYXJhbT0nZGlzdHJpY3QnLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbFwiIGh0bWxGb3I9e2Bpc25kaXN0cmljdF8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PipEaXN0cmljdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWU9e2BpbnMtc2VsZWN0LWRyb3AgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2Rpc3RyaWN0Jyk+IC0xPydmaWxsLWVycm9yJzonJ31gfSBpZD1cImRpc3RyaWN0X2Ryb3Bkb3duXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGlzdHJpY3QuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuZGlzdHJpY3R9PlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gZGF0YS1wYXJhbT1cImRpc3RyaWN0XCIgIGhpZGRlbiBpZD17MH0gdmFsdWU9XCJzZWxlY3RfZGlzdHJpY3RcIiB2YWx1ZT1cImRpc3RyaWN0XCI+U2VsZWN0IERpc3RyaWN0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0e2Rpc3RyaWN0c19vcHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWxcIiBodG1sRm9yPXtgaXNuZGlzdHJpY3RfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT4qRGlzdHJpY3Q8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0XHRcdHsvKjxpbnB1dCBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0gdHlwZT1cInRleHRcIiBpZD17YGlzbmRpc3RyaWN0XyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2Rpc3RyaWN0Jyk+IC0xPydmaWxsLWVycm9yJzonJ31gfSByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJub25lXCIgbmFtZT1cImRpc3RyaWN0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZGlzdHJpY3R9IGRhdGEtcGFyYW09J2Rpc3RyaWN0JyBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCdkaXN0cmljdCcpfSBvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0fSBvbkZvY3VzPXt0aGlzLmhhbmRsZU9uRm9jdXMuYmluZCh0aGlzLCdkaXN0cmljdCcpfSAvPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj17YGlzbmRpc3RyaWN0XyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+RGlzdHJpY3Q8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvY2F0aW9uLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7XHRcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdkaXN0cmljdCcpPiAtMT9cblx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbjonJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHNob3dfY3JlYXRlQXBpX2tleXMuaW5kZXhPZignZGlzdHJpY3QnKT4gLTE/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzLmRpc3RyaWN0WzBdfTwvc3Bhbj46JydcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCovfVxuXHRcdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnN0YXRlID09ICcnPzxkaXYgb25DbGljaz17dGhpcy5zaG93QWxlcnQuYmluZCh0aGlzKX0+IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyxmb250V2VpZ2h0OiAnMTAwJywgICAgY29sb3I6ICdncmF5J319IHR5cGU9XCJ0ZXh0XCIgaWQ9e2Bpc25kaXN0cmljdF8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCd0b3duJyk+IC0xPydmaWxsLWVycm9yJzonJ31gfSByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJub25lXCIgbmFtZT1cInRvd25cIiB2YWx1ZT1cIlNlbGVjdCBUb3duXCIgZGlzYWJsZWQgZGF0YS1wYXJhbT0ndG93bicvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsXCIgaHRtbEZvcj17YGlzbmRpc3RyaWN0XyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+KlRvd248L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ6PGRpdj5cdFxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWU9e2BpbnMtc2VsZWN0LWRyb3AgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ3Rvd24nKT4gLTE/J2ZpbGwtZXJyb3InOicnfWB9IGlkPVwidG93bl9kcm9wZG93blwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRvd24uYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUudG93bn0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhdGUgPT0nJz90cnVlOmZhbHNlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBkYXRhLXBhcmFtPVwidG93blwiICBoaWRkZW4gaWQ9ezB9IHZhbHVlPVwic2VsZWN0X3Rvd25cIiB2YWx1ZT1cInRvd25cIj5TZWxlY3QgVG93bjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2l0eV9vcHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsXCIgaHRtbEZvcj17YGlzbnRvd25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT4qVG93bjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvY2F0aW9uLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0ey8qPGlucHV0IHN0eWxlPXt7J3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZSd9fSB0eXBlPVwidGV4dFwiIGlkPXtgaXNudG93biR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ3Rvd24nKT4gLTE/J2ZpbGwtZXJyb3InOicnfWB9IHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm5vbmVcIiBuYW1lPVwidG93blwiIHZhbHVlPXt0aGlzLnN0YXRlLnRvd259IGRhdGEtcGFyYW09J3Rvd24nIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsJ3Rvd24nKX0gb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdH0gb25Gb2N1cz17dGhpcy5oYW5kbGVPbkZvY3VzLmJpbmQodGhpcywndG93bicpfS8+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPXtgaXNudG93biR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+VG93bjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCd0b3duJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuOicnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0c2hvd19jcmVhdGVBcGlfa2V5cy5pbmRleE9mKCd0b3duJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9ycy50b3duWzBdfTwvc3Bhbj46JydcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PiovfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyB9fSBcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdFx0XHRcdGlkPXtgaW5zYWRkcmVzcyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2FkZHJlc3MnKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiYWRkcmVzc1wiIFxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJhZGRyZXNzXCIgXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc30gXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0nYWRkcmVzcycgXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ2FkZHJlc3MnKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMsIGZhbHNlLGZhbHNlKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25Gb2N1cz17dGhpcy5oYW5kbGVPbkZvY3VzLmJpbmQodGhpcywgJ2FkZHJlc3MnKX0gXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPXtgaW5zYWRkcmVzcyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxEb3RcIj48L3NwYW4+RnVsbCBBZGRyZXNzPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2FkZHJlc3MnKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuIDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0c2hvd19jcmVhdGVBcGlfa2V5cy5pbmRleE9mKCdhZGRyZXNzJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzLmFkZHJlc3NbMF19PC9zcGFuPiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgbWItMFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiIFxuXHRcdFx0XHRcdFx0XHRcdGlkPXtgaXNucGluXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ3BpbmNvZGUnKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwicGluY29kZVwiIFxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwaW5jb2RlXCIgXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucGluY29kZX0gXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0ncGluY29kZScgXG5cdFx0XHRcdFx0XHRcdFx0b25LZXlQcmVzcz17dGhpcy5oYW5kbGVrZXkuYmluZCh0aGlzKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ3BpbmNvZGUnKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMsIGZhbHNlLGZhbHNlKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25Gb2N1cz17dGhpcy5oYW5kbGVPbkZvY3VzLmJpbmQodGhpcywgJ3BpbmNvZGUnKX0gXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPXtgaXNucGluXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxEb3RcIj48L3NwYW4+UGluY29kZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdwaW5jb2RlJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVPdGhlckVycm9ycy5pbmRleE9mKCdwaW5jb2RlJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+UGxlYXNlIEVudGVyIFZhbGlkIFBpbmNvZGU8L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0c2hvd19jcmVhdGVBcGlfa2V5cy5pbmRleE9mKCdwaW5jb2RlJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzLnBpbmNvZGVbMF19PC9zcGFuPiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50ICYmIHRoaXMuc3RhdGUuaXNfY2hhbmdlID9cblx0XHRcdFx0XHRcdDxJbnN1cmFuY2VQcm9vZnMgey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3VyYW5jZVNlbGYiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTdGF0ZUNpdHlBdXRvQ29tcGxldGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG4gICAgfVxuICAgXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZVwiIHN0eWxlPXt7d2lkdGg6JzMwMHB4J319PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJteUlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwibXlDb3VudHJ5XCIgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzLHRoaXMucHJvcHMuc3RhdGUpfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVDaXR5QXV0b0NvbXBsZXRlXG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkNvbXByZXNzPWUoKTp0LkNvbXByZXNzPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBlKGkpe2lmKG5baV0pcmV0dXJuIG5baV0uZXhwb3J0czt2YXIgYT1uW2ldPXtleHBvcnRzOnt9LGlkOmksbG9hZGVkOiExfTtyZXR1cm4gdFtpXS5jYWxsKGEuZXhwb3J0cyxhLGEuZXhwb3J0cyxlKSxhLmxvYWRlZD0hMCxhLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIGUubT10LGUuYz1uLGUucD1cIlwiLGUoMCl9KFtmdW5jdGlvbih0LGUsbil7dmFyIGksYSxyOyFmdW5jdGlvbihvLHUpe2E9W3QsbigxKSxuKDIpLG4oMyksbig0KSxuKDUpLG4oNildLGk9dSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShlLGEpOmksISh2b2lkIDAhPT1yJiYodC5leHBvcnRzPXIpKX0odGhpcyxmdW5jdGlvbih0LGUsbixpLGEscixvKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB1KHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBzKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpe2Zvcih2YXIgZT0wLG49QXJyYXkodC5sZW5ndGgpO2U8dC5sZW5ndGg7ZSsrKW5bZV09dFtlXTtyZXR1cm4gbn1yZXR1cm4gQXJyYXkuZnJvbSh0KX1mdW5jdGlvbiBmKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgZD11KGUpLGw9dShuKSxjPXUoaSksaD11KGEpLHY9dShyKSxwPXUobyksZz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIGk9ZVtuXTtpLmVudW1lcmFibGU9aS5lbnVtZXJhYmxlfHwhMSxpLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBpJiYoaS53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaS5rZXksaSl9fXJldHVybiBmdW5jdGlvbihlLG4saSl7cmV0dXJuIG4mJnQoZS5wcm90b3R5cGUsbiksaSYmdChlLGkpLGV9fSgpLHc9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7Zih0aGlzLHQpfXJldHVybiBnKHQsW3trZXk6XCJhdHRhY2hcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXM7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGksYSl7dmFyIHI9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KTtyLnNldEF0dHJpYnV0ZShcImFjY2VwdFwiLFwiaW1hZ2UvKlwiKSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixmdW5jdGlvbih0KXt2YXIgYT1uLmNvbXByZXNzKFtdLmNvbmNhdChzKHQudGFyZ2V0LmZpbGVzKSksZSk7aShhKX0sITEpfSl9fSx7a2V5OlwiY29tcHJlc3NcIix2YWx1ZTpmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4odCxlKXt2YXIgbj1uZXcgdi5kZWZhdWx0KGUpO3JldHVybiBuLnN0YXJ0PXdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSxuLmFsdD10Lm5hbWUsbi5leHQ9dC50eXBlLG4uc3RhcnRTaXplPXQuc2l6ZSxwLmRlZmF1bHQub3JpZW50YXRpb24odCkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gbi5vcmllbnRhdGlvbj1lLGMuZGVmYXVsdC5sb2FkKHQpfSkudGhlbihpKG4pKX1mdW5jdGlvbiBpKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gaC5kZWZhdWx0LmxvYWQoZSkudGhlbihmdW5jdGlvbihlKXtpZih0LnN0YXJ0V2lkdGg9ZS5uYXR1cmFsV2lkdGgsdC5zdGFydEhlaWdodD1lLm5hdHVyYWxIZWlnaHQsdC5yZXNpemUpe3ZhciBuPWguZGVmYXVsdC5yZXNpemUodC5tYXhXaWR0aCx0Lm1heEhlaWdodCkoZS5uYXR1cmFsV2lkdGgsZS5uYXR1cmFsSGVpZ2h0KSxpPW4ud2lkdGgsYT1uLmhlaWdodDt0LmVuZFdpZHRoPWksdC5lbmRIZWlnaHQ9YX1lbHNlIHQuZW5kV2lkdGg9ZS5uYXR1cmFsV2lkdGgsdC5lbmRIZWlnaHQ9ZS5uYXR1cmFsSGVpZ2h0O3JldHVybiBsLmRlZmF1bHQuaW1hZ2VUb0NhbnZhcyh0LmVuZFdpZHRoLHQuZW5kSGVpZ2h0LHQub3JpZW50YXRpb24pKGUpfSkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gdC5pdGVyYXRpb25zPTEsdC5iYXNlNjRwcmVmaXg9ZC5kZWZhdWx0LnByZWZpeCh0LmV4dCksYShlLHQuc3RhcnRTaXplLHQucXVhbGl0eSx0LnNpemUsdC5taW5RdWFsaXR5LHQuaXRlcmF0aW9ucyl9KS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiB0LmZpbmFsU2l6ZT1kLmRlZmF1bHQuc2l6ZShlKSxkLmRlZmF1bHQuZGF0YShlKX0pLnRoZW4oZnVuY3Rpb24oZSl7dC5lbmQ9d2luZG93LnBlcmZvcm1hbmNlLm5vdygpO3ZhciBuPXQuZW5kLXQuc3RhcnQ7cmV0dXJue2RhdGE6ZSxwcmVmaXg6dC5iYXNlNjRwcmVmaXgsZWxhcHNlZFRpbWVJblNlY29uZHM6bi8xZTMsYWx0OnQuYWx0LGluaXRpYWxTaXplSW5NYjpsLmRlZmF1bHQuc2l6ZSh0LnN0YXJ0U2l6ZSkuTUIsZW5kU2l6ZUluTWI6bC5kZWZhdWx0LnNpemUodC5maW5hbFNpemUpLk1CLGV4dDp0LmV4dCxxdWFsaXR5OnQucXVhbGl0eSxlbmRXaWR0aEluUHg6dC5lbmRXaWR0aCxlbmRIZWlnaHRJblB4OnQuZW5kSGVpZ2h0LGluaXRpYWxXaWR0aEluUHg6dC5zdGFydFdpZHRoLGluaXRpYWxIZWlnaHRJblB4OnQuc3RhcnRIZWlnaHQsc2l6ZVJlZHVjZWRJblBlcmNlbnQ6KHQuc3RhcnRTaXplLXQuZmluYWxTaXplKS90LnN0YXJ0U2l6ZSoxMDAsaXRlcmF0aW9uczp0Lml0ZXJhdGlvbnN9fSl9fWZ1bmN0aW9uIGEodCxlKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06MSxpPWFyZ3VtZW50c1szXSxyPWFyZ3VtZW50cy5sZW5ndGg+NCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XToxLG89YXJndW1lbnRzWzVdLHU9bC5kZWZhdWx0LmNhbnZhc1RvQmFzZTY0KHQsbikscz1kLmRlZmF1bHQuc2l6ZSh1KTtyZXR1cm4gbys9MSxzPmk/YSh0LHMsbi0uMSxpLHIsbyk6bj5yP2EodCxzLG4tLjEsaSxyLG8pOm48LjU/dTp1fXJldHVybiBQcm9taXNlLmFsbCh0Lm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUpfSkpfX1dLFt7a2V5OlwiY29udmVydEJhc2U2NFRvRmlsZVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGwuZGVmYXVsdC5iYXNlNjRUb0ZpbGUodCxlKX19XSksdH0oKTt0LmV4cG9ydHM9d30pfSxmdW5jdGlvbih0LGUsbil7dmFyIGksYSxyOyFmdW5jdGlvbihuLG8pe2E9W2VdLGk9byxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShlLGEpOmksISh2b2lkIDAhPT1yJiYodC5leHBvcnRzPXIpKX0odGhpcyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1mdW5jdGlvbih0KXt2YXIgZT10LnJlcGxhY2UoL15kYXRhOmltYWdlXFwvXFx3KztiYXNlNjQsLyxcIlwiKS5sZW5ndGg7cmV0dXJuKGUtODE0KS8xLjM3fSxuPWZ1bmN0aW9uKHQpe3JldHVybiB0LnNwbGl0KFwiO1wiKVswXS5tYXRjaCgvanBlZ3xwbmd8Z2lmLylbMF19LGk9ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvXmRhdGE6aW1hZ2VcXC9cXHcrO2Jhc2U2NCwvLFwiXCIpfSxhPWZ1bmN0aW9uKHQpe3JldHVyblwiZGF0YTpcIit0K1wiO2Jhc2U2NCxcIn07dC5kZWZhdWx0PXtzaXplOmUsbWltZTpuLGRhdGE6aSxwcmVmaXg6YX19KX0sZnVuY3Rpb24odCxlLG4pe3ZhciBpLGEscjshZnVuY3Rpb24obixvKXthPVtlXSxpPW8scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkoZSxhKTppLCEodm9pZCAwIT09ciYmKHQuZXhwb3J0cz1yKSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGU9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpcImltYWdlL2pwZWdcIixuPXdpbmRvdy5hdG9iKHQpLGk9W10sYT0wO2E8bi5sZW5ndGg7YSsrKWlbYV09bi5jaGFyQ29kZUF0KGEpO3JldHVybiBuZXcgd2luZG93LkJsb2IoW25ldyBVaW50OEFycmF5KGkpXSx7dHlwZTplfSl9LG49ZnVuY3Rpb24odCxlLG4pe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksYT1pLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gaS53aWR0aD10LGkuaGVpZ2h0PWUsZnVuY3Rpb24ocil7aWYoIW58fG4+OClyZXR1cm4gYS5kcmF3SW1hZ2UociwwLDAsaS53aWR0aCxpLmhlaWdodCksaTtzd2l0Y2gobj40JiYoaS53aWR0aD1lLGkuaGVpZ2h0PXQpLG4pe2Nhc2UgMjphLnRyYW5zbGF0ZSh0LDApLGEuc2NhbGUoLTEsMSk7YnJlYWs7Y2FzZSAzOmEudHJhbnNsYXRlKHQsZSksYS5yb3RhdGUoTWF0aC5QSSk7YnJlYWs7Y2FzZSA0OmEudHJhbnNsYXRlKDAsZSksYS5zY2FsZSgxLC0xKTticmVhaztjYXNlIDU6YS5yb3RhdGUoLjUqTWF0aC5QSSksYS5zY2FsZSgxLC0xKTticmVhaztjYXNlIDY6YS5yb3RhdGUoLjUqTWF0aC5QSSksYS50cmFuc2xhdGUoMCwtZSk7YnJlYWs7Y2FzZSA3OmEucm90YXRlKC41Kk1hdGguUEkpLGEudHJhbnNsYXRlKHQsLWUpLGEuc2NhbGUoLTEsMSk7YnJlYWs7Y2FzZSA4OmEucm90YXRlKC0uNSpNYXRoLlBJKSxhLnRyYW5zbGF0ZSgtdCwwKX1yZXR1cm4gbj40P2EuZHJhd0ltYWdlKHIsMCwwLGkuaGVpZ2h0LGkud2lkdGgpOmEuZHJhd0ltYWdlKHIsMCwwLGkud2lkdGgsaS5oZWlnaHQpLGl9fSxpPWZ1bmN0aW9uKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTouNzUsbj10LnRvRGF0YVVSTChcImltYWdlL2pwZWdcIixlKTtyZXR1cm4gbn0sYT1mdW5jdGlvbih0KXtyZXR1cm57S0I6dC8xZTMsTUI6dC8xZTZ9fTt0LmRlZmF1bHQ9e2Jhc2U2NFRvRmlsZTplLGltYWdlVG9DYW52YXM6bixjYW52YXNUb0Jhc2U2NDppLHNpemU6YX19KX0sZnVuY3Rpb24odCxlLG4pe3ZhciBpLGEscjshZnVuY3Rpb24obixvKXthPVtlXSxpPW8scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkoZSxhKTppLCEodm9pZCAwIT09ciYmKHQuZXhwb3J0cz1yKSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGU9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsbil7dmFyIGk9bmV3IHdpbmRvdy5GaWxlUmVhZGVyO2kuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbih0KXtlKHQudGFyZ2V0LnJlc3VsdCl9LCExKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGZ1bmN0aW9uKHQpe24odCl9LCExKSxpLnJlYWRBc0RhdGFVUkwodCl9KX07dC5kZWZhdWx0PXtsb2FkOmV9fSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgaSxhLHI7IWZ1bmN0aW9uKG4sbyl7YT1bZV0saT1vLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KGUsYSk6aSwhKHZvaWQgMCE9PXImJih0LmV4cG9ydHM9cikpfSh0aGlzLGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBlPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLG4pe3ZhciBpPW5ldyB3aW5kb3cuSW1hZ2U7aS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7ZShpKX0sITEpLGkuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsZnVuY3Rpb24odCl7bih0KX0sITEpLGkuc3JjPXR9KX0sbj1mdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihuLGkpe2lmKCF0JiYhZSlyZXR1cm57d2lkdGg6bixoZWlnaHQ6aX07dmFyIGE9bi9pLHI9dC9lLG89dm9pZCAwLHU9dm9pZCAwO3JldHVybiBhPnI/KG89TWF0aC5taW4obix0KSx1PW8vYSk6KHU9TWF0aC5taW4oaSxlKSxvPXUqYSkse3dpZHRoOm8saGVpZ2h0OnV9fX07dC5kZWZhdWx0PXtsb2FkOmUscmVzaXplOm59fSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgaSxhLHI7IWZ1bmN0aW9uKG4sbyl7YT1bZV0saT1vLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KGUsYSk6aSwhKHZvaWQgMCE9PXImJih0LmV4cG9ydHM9cikpfSh0aGlzLGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uIHQobil7dmFyIGk9bi5xdWFsaXR5LGE9dm9pZCAwPT09aT8uNzU6aSxyPW4uc2l6ZSxvPXZvaWQgMD09PXI/MjpyLHU9bi5tYXhXaWR0aCxzPXZvaWQgMD09PXU/MTkyMDp1LGY9bi5tYXhIZWlnaHQsZD12b2lkIDA9PT1mPzE5MjA6ZixsPW4ucmVzaXplLGM9dm9pZCAwPT09bHx8bDtlKHRoaXMsdCksdGhpcy5zdGFydD13aW5kb3cucGVyZm9ybWFuY2Uubm93KCksdGhpcy5lbmQ9bnVsbCx0aGlzLmFsdD1udWxsLHRoaXMuZXh0PW51bGwsdGhpcy5zdGFydFNpemU9bnVsbCx0aGlzLnN0YXJ0V2lkdGg9bnVsbCx0aGlzLnN0YXJ0SGVpZ2h0PW51bGwsdGhpcy5zaXplPTFlMypvKjFlMyx0aGlzLmVuZFNpemU9bnVsbCx0aGlzLmVuZFdpZHRoPW51bGwsdGhpcy5lbmRIZWlnaHQ9bnVsbCx0aGlzLml0ZXJhdGlvbnM9MCx0aGlzLmJhc2U2NHByZWZpeD1udWxsLHRoaXMucXVhbGl0eT1hLHRoaXMucmVzaXplPWMsdGhpcy5tYXhXaWR0aD1zLHRoaXMubWF4SGVpZ2h0PWQsdGhpcy5vcmllbnRhdGlvbj0xfTt0LmRlZmF1bHQ9bn0pfSxmdW5jdGlvbih0LGUsbil7dmFyIGksYSxyOyFmdW5jdGlvbihuLG8pe2E9W2VdLGk9byxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShlLGEpOmksISh2b2lkIDAhPT1yJiYodC5leHBvcnRzPXIpKX0odGhpcyxmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSxuKXt2YXIgaT1uZXcgd2luZG93LkZpbGVSZWFkZXI7aS5vbmxvYWQ9ZnVuY3Rpb24odCl7dmFyIG49bmV3IERhdGFWaWV3KHQudGFyZ2V0LnJlc3VsdCk7NjU0OTYhPT1uLmdldFVpbnQxNigwLCExKSYmZSgtMik7Zm9yKHZhciBpPW4uYnl0ZUxlbmd0aCxhPTI7YTxpOyl7dmFyIHI9bi5nZXRVaW50MTYoYSwhMSk7aWYoYSs9Miw2NTUwNT09PXIpezExNjU1MTkyMDYhPT1uLmdldFVpbnQzMihhKz0yLCExKSYmZSgtMSk7dmFyIG89MTg3NjE9PT1uLmdldFVpbnQxNihhKz02LCExKTthKz1uLmdldFVpbnQzMihhKzQsbyk7dmFyIHU9bi5nZXRVaW50MTYoYSxvKTthKz0yO2Zvcih2YXIgcz0wO3M8dTtzKyspMjc0PT09bi5nZXRVaW50MTYoYSsxMipzLG8pJiZlKG4uZ2V0VWludDE2KGErMTIqcys4LG8pKX1lbHNle2lmKDY1MjgwIT09KDY1MjgwJnIpKWJyZWFrO2ErPW4uZ2V0VWludDE2KGEsITEpfX1lKC0xKX0saS5yZWFkQXNBcnJheUJ1ZmZlcih0LnNsaWNlKDAsNjU1MzYpKX0pfTt0LmRlZmF1bHQ9e29yaWVudGF0aW9uOmV9fSl9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=