exports.ids = [34];
exports.modules = {

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _insurancePopup = __webpack_require__(/*! ./insurancePopup.js */ "./dev/js/components/insurance/insurancePopup.js");

var _insurancePopup2 = _interopRequireDefault(_insurancePopup);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _insuranceProofs = __webpack_require__(/*! ./insuranceProofs.js */ "./dev/js/components/insurance/insuranceProofs.js");

var _insuranceProofs2 = _interopRequireDefault(_insuranceProofs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const moment = __webpack_require__(/*! moment */ "moment");

class InsuranceOthers extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
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
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		let profile;
		if (this.props.is_endorsement) {
			if (Object.keys(this.props.self_data_values).length > 0 && this.props.user_data.length > 0) {
				profile = Object.assign({}, this.props.self_data_values[this.props.user_data[0].id]);
				let oldDate;
				if (Object.keys(profile).length > 0 && profile.dob) {
					oldDate = profile.dob.split('-');
					this.setState({ year: oldDate[0], mnth: oldDate[2], day: oldDate[1] }, () => {
						this.populateDates(this.props.member_id, true);
					});
				}
				this.setState(_extends({}, profile), () => {
					this.handleSubmit(true);
				});
			} else {
				let oldDate;
				if (this.props.user_data && this.props.user_data.length > 0) {
					if (this.props.user_data[0].relation == 'spouse') {
						this.setState({ only_adult: true });
					}
					if (this.props.user_data && this.props.user_data[0].dob) {
						oldDate = this.props.user_data[0].dob.split('-');
						this.setState({ year: oldDate[0], mnth: oldDate[2], day: oldDate[1] }, () => {
							this.populateDates(this.props.member_id, true);
						});
					}
					this.setState(_extends({}, this.props.user_data[0], { name: this.props.user_data[0].first_name, member_type: this.props.member_type, profile_id: this.props.user_data[0].profile, is_change: false }), () => {
						this.handleSubmit(true);
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

	componentWillReceiveProps(props) {
		let self = this;
		let adult_title;
		let adult_gender;
		if (!props.is_endorsement) {
			if (props.self_data_values[props.member_id]) {
				let profile = Object.assign({}, this.props.self_data_values[this.props.member_id]);
				let nextProfile = Object.assign({}, props.self_data_values[props.member_id]);
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
				this.setState({ id: props.member_id, setDefault: true }, () => {
					if (this.props.is_child_only) {
						if (!self.state.year && !self.state.mnth && !self.state.mnth) {
							self.populateDates(self.props.member_id, true);
						}
						this.setState({ member_type: this.props.member_type }, () => {
							self.handleSubmit();
						});
					} else {
						self.populateDates(self.props.member_id, true);
						this.setState({ member_type: this.props.member_type, relation: 'spouse', title: adult_title, gender: adult_gender, only_adult: true }, () => {
							self.handleSubmit();
						});
					}
				});
			}
		}
	}
	handleTitle(field, event) {
		let title_value = event.target.value;
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
		this.setState({ title: event.target.value }, () => {
			var self_data = this.state;
			self_data.is_change = true;
			this.props.userData('self_data', self_data);
		});
	}
	handleChange(field, event) {
		this.setState({
			[event.target.getAttribute('data-param')]: event.target.value
		});
	}
	handleRelation(field, event) {
		let relation_value = event.target.value;
		if (relation_value == 'son') {
			this.setState({ title: 'mast.', gender: 'm' });
		} else if (relation_value == 'daughter') {
			this.setState({ title: 'miss', gender: 'f' });
		}
		this.setState({
			relation: event.target.value, is_change: true
		}, () => {
			this.handleSubmit(true, event);
		});
	}
	handleSubmit(is_endoresment) {
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
	getTodayDate() {
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
	togglePopup(newProfileid, member_id, newProfile) {
		let oldDate;
		let finalDate;
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
				this.setState({ year: oldDate[0], mnth: oldDate[1], day: oldDate[2] }, () => {
					this.populateDates(newProfileid, false);
					finalDate = this.state.year + '-' + this.state.mnth + '-' + this.state.day;
					this.setState({ dob: finalDate });
				});
			} else {
				this.populateDates(newProfileid, false);
			}

			this.props.selectInsuranceProfile(newProfileid, member_id, newProfile, this.props.param_id); // select from profile option
			this.setState({
				showPopup: !this.state.showPopup,
				profile_id: newProfileid,
				id: newProfileid
			}, () => {
				this.handleSubmit(false);
			});
		} else {
			this.setState({ showPopup: !this.state.showPopup });
		}
	}
	handleGender(field, event) {
		let gender_value = event.target.value;
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
		}, () => {
			this.handleSubmit(false, event);
		});
	}
	openDateModal() {
		this.setState({ dateModal: !this.state.dateModal });
	}
	selectDateFromCalendar(date) {
		if (date) {
			date = date.toDate();
			var date = new Date(date);
			let mnth = ("0" + (date.getMonth() + 1)).slice(-2);
			let day = ("0" + date.getDate()).slice(-2);
			let actual_date = [date.getFullYear(), mnth, day].join("-");
			this.setState({ selectedDateSpan: actual_date, dateModal: false, currentDate: new Date(date).getDate(), dob: actual_date }, () => {
				this.handleSubmit(false);
			});
		} else {
			this.setState({ dateModal: false });
		}
	}
	handleNameCharacters(field, event) {
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
	handleLastname(event) {
		this.setState({ no_lname: !this.state.no_lname }, () => {
			this.handleSubmit(false, event);
		});
	}

	hideSelectProfilePopup() {
		this.setState({
			showPopup: false
		});
	}

	daysInMonth(month, year) {
		return new Date(year, month, 0).getDate();
	}

	populateDates(member_id, toCreateOptions) {
		let age_threshold;
		if (this.props.selected_plan && this.props.selected_plan.adult_count) {
			if (this.props.is_child_only) {
				age_threshold = this.props.selected_plan.threshold[0].child_max_age;
			} else {
				age_threshold = this.props.selected_plan.threshold[0].max_age;
			}
		}
		let default_months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
		let self = this;
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
				self.setState({ day: NewSelecteddays }, () => {
					self.submitDob();
				});
			};

			// Change handler for months
			monthdropdown.onchange = function () {
				var newMonth = monthdropdown.value;
				self.setState({ mnth: newMonth }, () => {
					self.submitDob();
				});
			};

			// change handler for year
			yeardropdown.onchange = function () {
				var newYear = yeardropdown.value;
				self.setState({ year: newYear }, () => {
					self.submitDob();
				});
			};
		}
	}

	submitDob() {
		let self = this;
		if (self.state.day && self.state.mnth && self.state.year) {
			let finalDate = self.state.year + '-' + self.state.mnth + '-' + self.state.day;
			self.setState({
				dob: finalDate
			}, () => {
				self.handleSubmit();
			});
		}
	}

	render() {
		let show_createApi_keys_adult = [];
		let show_createApi_keys_child = [];
		let show_createApi_keys_child2 = [];
		let Uploaded_image_data;
		let commonMsgSpan = _react2.default.createElement(
			'span',
			{ className: 'fill-error-span' },
			this.props.errorMessages['common_message']
		);
		if (this.props.is_child_only) {
			let show_createApi_keys = [];
			if (Object.keys(this.props.createApiErrorsChild).length > 0) {
				Object.entries(this.props.createApiErrorsChild).map(function ([key, value]) {
					if (key != 0 && key != 1) {
						Object.entries(value).map(function ([field_name, field_value]) {
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
				Object.entries(this.props.createApiErrors).map(function ([key, value]) {
					show_createApi_keys_adult.push(key);
				});
			}
		}
		let ErrorNameId;
		if (this.props.validatingNames.length > 0) {
			ErrorNameId = this.props.validatingNames[0].split('=')[1];
		}

		if (this.props.members_proofs && this.props.members_proofs.length > 0) {
			Uploaded_image_data = this.props.members_proofs.filter(x => x.id == this.props.member_id);
		}
		return _react2.default.createElement(
			'div',
			{ className: 'ins-sub-forms mrt-10', id: `member_${this.props.member_id}` },
			_react2.default.createElement(
				'div',
				{ className: 'sub-form-input-data', style: { marginBottom: 10 } },
				_react2.default.createElement(
					'div',
					null,
					this.props.is_endorsement ? _react2.default.createElement(
						'p',
						{ className: 'sub-form-hed' },
						this.props.is_child_only ? `Child ${this.props.member_view_id}` : `Spouse`
					) : _react2.default.createElement(
						'p',
						{ className: 'sub-form-hed' },
						this.props.is_child_only ? `Child ${this.props.member_view_id - 1}` : `Spouse`
					)
				),
				_react2.default.createElement(
					'div',
					null,
					this.props.show_selected_profiles.length > 0 ? _react2.default.createElement(
						'div',
						{ className: 'sub-form-hed-click', onClick: () => this.setState({
								showPopup: true, userProfiles: this.props.USER }) },
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
							{ className: `label-names-buttons ${this.state.title == 'mr.' ? 'btn-active' : ''}`, name: 'title', value: 'mr.', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mr.') },
							'Mr.'
						),
						_react2.default.createElement(
							'button',
							{ className: `label-names-buttons ${this.state.title == 'mrs.' ? 'btn-active' : ''}`, value: 'mrs.', name: 'title', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mrs.') },
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
									_react2.default.createElement('input', { type: 'radio', name: `relation_${this.props.member_id}`, 'data-param': 'relation', value: 'son', checked: this.state.relation === 'son', onChange: this.handleRelation.bind(this, 'son') }),
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
									_react2.default.createElement('input', { type: 'radio', 'data-param': 'relation', name: `relation_${this.props.member_id}`, value: 'daughter', checked: this.state.relation === 'daughter', onChange: this.handleRelation.bind(this, 'daughter') }),
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
							_react2.default.createElement('input', { type: 'text', style: { 'textTransform': 'capitalize' }, id: `name_${this.props.member_id}`, className: `form-control ins-form-control ${this.props.validateErrors.indexOf('name') > -1 || ErrorNameId == this.props.member_id ? 'fill-error' : ''}`, required: true, autoComplete: 'first_name', name: 'name', 'data-param': 'name', value: this.state.name, onChange: this.handleChange.bind(this, 'name'), onBlur: this.handleSubmit.bind(this, false), onKeyPress: this.handleNameCharacters.bind(this, 'name') }),
							_react2.default.createElement(
								'label',
								{ className: 'form-control-placeholder', htmlFor: `name_${this.props.member_id}` },
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
							_react2.default.createElement('input', { type: 'text', style: { 'textTransform': 'capitalize' }, id: `middle_name_${this.props.member_id}`, className: 'form-control ins-form-control', required: true, autoComplete: 'middle_name', name: 'middle_name', value: this.state.no_lname ? '' : this.state.middle_name, 'data-param': 'middle_name', onChange: this.handleChange.bind(this, 'middle_name'), onBlur: this.handleSubmit.bind(this, false), disabled: this.state.no_lname ? 'disabled' : "", onKeyPress: this.handleNameCharacters.bind(this, 'middle_name') }),
							_react2.default.createElement(
								'label',
								{ className: 'form-control-placeholder', htmlFor: `middle_name_${this.props.member_id}` },
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
							_react2.default.createElement('input', { type: 'text', style: { 'textTransform': 'capitalize' }, id: `last_name_${this.props.member_id}`, className: `form-control ins-form-control ${this.props.validateErrors.indexOf('last_name') > -1 ? 'fill-error' : ''}`, required: true, autoComplete: 'last_name', name: 'last_name', 'data-param': 'last_name', value: this.state.no_lname ? '' : this.state.last_name, onChange: this.handleChange.bind(this, 'last_name'), onBlur: this.handleSubmit.bind(this, false), disabled: this.state.no_lname ? 'disabled' : "", onKeyPress: this.handleNameCharacters.bind(this, 'last_name') }),
							_react2.default.createElement(
								'label',
								{ className: 'form-control-placeholder', htmlFor: `last_name_${this.props.member_id}` },
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
										_react2.default.createElement('input', { type: 'radio', name: `gender_${this.props.member_id}`, 'data-param': 'gender', value: 'm', checked: this.state.gender === 'm', onChange: this.handleGender.bind(this, 'm') }),
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
										_react2.default.createElement('input', { type: 'radio', 'data-param': 'gender', name: `gender_${this.props.member_id}`, value: 'f', checked: this.state.gender === 'f', onChange: this.handleGender.bind(this, 'f') }),
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
										_react2.default.createElement('input', { type: 'radio', 'data-param': 'gender', name: `gender_${this.props.member_id}`, value: 'o', checked: this.state.gender === 'o', onChange: this.handleGender.bind(this, 'o') }),
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
										{ id: `daydropdown_${this.props.member_id}`, value: this.state.day },
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
										{ id: `monthdropdown_${this.props.member_id}`, value: this.state.mnth },
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
										{ id: `yeardropdown_${this.props.member_id}`, value: this.state.year },
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

}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");
const Compress = __webpack_require__(/*! compress.js */ "compress.js");

class InsuranceProofs extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUrl: null,
            zoomImageUrl: null,
            zoomImage: false,
            openPdf: false,
            openPdfUrl: null,
            isLoading: false
        };
    }

    pickFile(member_id, e) {
        // to select file
        if (e.target.files && e.target.files[0]) {
            let file = e.target.files[0];
            if (e.target.files[0] && e.target.files[0].name.includes('.pdf')) {
                this.finishCrop(null, member_id, file);
            } else {
                const compress = new Compress();
                compress.compress([file], {
                    quality: 1,
                    maxWidth: 1000,
                    maxHeight: 1000
                }).then(results => {
                    const img1 = results[0];
                    const base64str = img1.data;
                    const imgExt = img1.ext;
                    const file = Compress.convertBase64ToFile(base64str, imgExt);
                    this.getBase64(file, dataUrl => {
                        this.finishCrop(dataUrl, member_id, null);
                        this.setState({ dataUrl });
                    });
                }).catch(e => {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Error uploading image." });
                });
            }
        }
    }

    getBase64(file, cb) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    finishCrop(dataUrl, member_id, file) {
        // cropping the image
        let file_blob_data;
        if (dataUrl) {
            file_blob_data = this.dataURItoBlob(dataUrl);
        }
        let mem_data = {};
        let existingData;
        let img_tag = "document_image";
        this.setState({
            dataUrl: null, isLoading: true
        }, () => {
            let form_data = new FormData();
            if (file) {
                form_data.append(img_tag, file, "imageFilename.pdf");
            } else {
                form_data.append(img_tag, file_blob_data, "imageFilename.jpeg");
            }
            this.props.uploadProof(form_data, member_id, 'image', (data, err) => {
                // store selected proof to database
                if (data) {
                    mem_data.id = data.data.member;
                    // mem_data.images = []
                    // mem_data.img_ids = []
                    mem_data.img_path_ids = [];
                    if (this.props.members_proofs.length > 0) {
                        Object.entries(this.props.members_proofs).map(function ([key, value]) {
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
                    this.setState({ isLoading: false });
                    this.props.storeMemberProofs(mem_data);
                }
            });
        });
    }

    dataURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    }

    removeImage(img) {
        let Uploaded_image_data = [];
        Uploaded_image_data = this.props.members_proofs.filter(x => x.id == this.props.member_id);
        Uploaded_image_data[0].img_path_ids.map((data, i) => {
            data.member_id = this.props.member_id;
            if (data.image == img) {
                this.props.removeMemberProof(data); // to remove cancelled uploaded image
            }
        });
    }

    render() {
        let Uploaded_image_data = [];
        let img_url = [];
        let pdf_url = [];
        if (this.props.members_proofs && this.props.members_proofs.length > 0) {
            Uploaded_image_data = this.props.members_proofs.filter(x => x.id == this.props.member_id);
            if (Uploaded_image_data.length > 0) {
                Uploaded_image_data[0].img_path_ids.map((data, i) => {
                    if (data.image.includes('pdf')) {
                        pdf_url.push(data.image);
                    } else {
                        img_url.push(data.image);
                    }
                });
            }
        }
        let show_upload = true;
        if (img_url && img_url.length > 0 || pdf_url && pdf_url.length > 0) {
            show_upload = false;
        }

        return _react2.default.createElement(
            'div',
            { className: 'insurance-proofs-cont', style: { margin: '10px -10px 0px -10px' } },
            _react2.default.createElement(
                'div',
                { className: 'upload-addbtn-cont', id: `member_${this.props.member_id}_upload` },
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
                    { className: 'ins-proof-upload-btn', onClick: () => {
                            document.getElementById('imageFilePicker_' + this.props.member_id + '_front').click();
                            document.getElementById('imageFilePicker_' + this.props.member_id + '_front').value = "";
                        } },
                    _react2.default.createElement('img', { src: "/assets" + "/img/ins-up-ico.svg" }),
                    ' Upload',
                    _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, id: `imageFilePicker_${this.props.member_id}_front`, onChange: this.pickFile.bind(this, this.props.member_id), accept: 'image/x-png,image/jpeg,image/jpg,.pdf' })
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
                img_url && img_url.length > 0 ? img_url.map((data, i) => {
                    return _react2.default.createElement(
                        'div',
                        { key: i, className: 'ins-prf-img-grd' },
                        _react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic', src: data }),
                        _react2.default.createElement('img', { className: 'ins-prf-cls', onClick: this.removeImage.bind(this, data), src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png' })
                    );
                }) : '',
                pdf_url && pdf_url.length > 0 ? pdf_url.map((data, i) => {
                    return _react2.default.createElement(
                        'div',
                        { className: 'ins-prf-img-grd', key: i },
                        _react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic', src: "/assets" + "/img/pdf.jpg" }),
                        _react2.default.createElement('img', { className: 'ins-prf-cls', onClick: this.removeImage.bind(this, data), src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png' })
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
                    { className: 'ins-prf-addMore', onClick: () => {
                            document.getElementById('imageFilePicker_' + this.props.member_id + '_back').click();
                            document.getElementById('imageFilePicker_' + this.props.member_id + '_back').value = "";
                        } },
                    _react2.default.createElement('img', { className: 'ins-addico', src: "/assets" + "/img/ins-add-ico.svg" }),
                    'Add More',
                    _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, id: `imageFilePicker_${this.props.member_id}_back`, onChange: this.pickFile.bind(this, this.props.member_id), accept: 'image/x-png,image/jpeg,image/jpg,.pdf' })
                )
            ) : ''
        );
    }
}
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _stateCityAutoComplete = __webpack_require__(/*! ./stateCityAutoComplete.js */ "./dev/js/components/insurance/stateCityAutoComplete.js");

var _stateCityAutoComplete2 = _interopRequireDefault(_stateCityAutoComplete);

var _insuranceProofs = __webpack_require__(/*! ./insuranceProofs.js */ "./dev/js/components/insurance/insuranceProofs.js");

var _insuranceProofs2 = _interopRequireDefault(_insuranceProofs);

var _verifyEmail = __webpack_require__(/*! ./verifyEmail.js */ "./dev/js/components/insurance/verifyEmail.js");

var _verifyEmail2 = _interopRequireDefault(_verifyEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const moment = __webpack_require__(/*! moment */ "moment");

class InsuranceSelf extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
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
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTitle = this.handleTitle.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
	}
	componentDidMount() {
		let profile;
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
			let oldDate;
			if (Object.keys(this.props.self_data_values).length > 0) {
				profile = Object.assign({}, this.props.self_data_values[this.props.user_data[0].id]);
				if (Object.keys(profile).length > 0 && profile.dob) {
					oldDate = profile.dob.split('-');
					this.setState({ year: oldDate[0], mnth: oldDate[2], day: oldDate[1] }, () => {
						this.populateDates();
					});
				}
				this.setState(_extends({}, profile), () => {
					this.handleSubmit(true, false);
				});
			} else {
				if (this.props.user_data && this.props.user_data.length > 0) {
					if (this.props.user_data[0].dob) {
						oldDate = this.props.user_data[0].dob.split('-');
						this.setState({ year: oldDate[0], mnth: oldDate[2], day: oldDate[1] }, () => {
							this.populateDates();
						});
					}
					this.setState(_extends({}, this.props.user_data[0], { name: this.props.user_data[0].first_name, member_type: this.props.member_type, profile_id: this.props.user_data[0].profile, is_change: false, town_code: this.props.user_data[0].city_code, profile: this.props.user_data[0].profile }), () => {
						this.handleSubmit(true, false);
					});
				}
			}
		}
	}
	componentWillReceiveProps(props) {
		let newName = [];
		let self = this;
		let profileLength = Object.keys(props.USER.profiles).length;
		if (profileLength > 0 && this.state.profile_flag && !props.is_endorsement) {
			let isDummyUser = props.USER.profiles[props.USER.defaultProfile].isDummyUser;
			if (Object.keys(props.self_data_values).length > 0) {
				let profile;
				if (!isDummyUser) {
					profile = Object.assign({}, props.self_data_values[props.USER.defaultProfile]);
				} else {
					profile = Object.assign({}, props.self_data_values[0]);
				}
				this.getUserDetails(profile); // fill user details in form
				if (Object.keys(profile).length) {
					this.setState(_extends({}, profile, { disableEmail: profile.email != '' ? true : false, disableDob: profile.dob != null ? true : false, disableName: profile.name != '' ? true : false }), () => {
						if (profile.gender == 'm') {
							this.setState({ title: 'mr.' }, () => {
								this.handleSubmit(false, false);
							});
						} else if (profile.gender == 'f') {
							this.setState({ title: 'mrs.' }, () => {
								this.handleSubmit(false, false);
							});
						}
					});
				} else {
					this.setState({ profile_flag: false });
					let new_profile = props.USER.profiles[props.USER.defaultProfile];
					this.getUserDetails(new_profile); // fill user details in form
				}
			} else if (props.USER.profiles[props.USER.defaultProfile]) {
				this.setState({ profile_flag: false });
				let profile = Object.assign({}, props.USER.profiles[props.USER.defaultProfile]);
				newName = profile.name.split(" ");
				this.getUserDetails(profile); // fill user details in form
				this.populateDates();
			}
		} else if (props.is_endorsement) {
			this.populateDates();
		}
	}

	getUserDetails(profile) {
		// fill user details in store
		let newName = [];
		let oldDate;
		let tempArray;
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
				this.setState({ year: oldDate[0], mnth: oldDate[1], day: oldDate[2] }, () => {
					this.populateDates();
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
			}, () => {
				if (profile.gender == 'm') {
					this.setState({ title: 'mr.' });
				} else if (profile.gender == 'f') {
					if (this.props.selected_plan.adult_count == 2) {
						this.setState({ title: 'mrs.' });
					} else {
						this.setState({ title: 'miss' });
					}
				}
				this.handleSubmit(false, false);
			});
		}
	}
	handleChange(field, event) {
		this.setState({
			[event.target.getAttribute('data-param')]: event.target.value
		});
	}
	handleOnFocus(field, event) {
		// if(event.target.nextElementSibling.nextElementSibling){
		// 	event.target.nextElementSibling.nextElementSibling.classList.add('field-icon')
		// }
	}
	handleTitle(field, event) {
		let title_value = event.target.value;
		if (title_value == 'mr.') {
			this.setState({ gender: 'm' });
		} else if (title_value == 'miss' || title_value == 'mrs.') {
			this.setState({ gender: 'f' });
		}
		this.setState({ title: event.target.value }, () => {
			var self_data = this.state;
			self_data.is_change = true;
			this.props.userData('self_data', self_data); // to save entered data in store
		});
	}
	handleSubmit(is_endoresment, is_endorse_email) {
		let profile = Object.assign({}, this.props.USER.profiles[this.props.USER.defaultProfile]);
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
	handlekey(event) {
		if (this.state.pincode.length == 6) {
			event.preventDefault();
		}
	}
	handleNameCharacters(field, event) {
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
	handleEmail() {
		let formIsValid = true;
		if (this.state.email != '') {
			let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			validEmail = validEmail.test(this.state.email);
			if (validEmail) {
				this.handleSubmit(false, false);
			} else {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter valid Email" });
			}
		}
	}
	handleGender(field, event) {
		let gender_value = event.target.value;
		if (gender_value == 'm') {
			this.setState({ title: 'mr.' });
		} else if (gender_value == 'f') {
			this.setState({ title: 'mrs.' });
		}
		this.setState({
			gender: event.target.value
		}, () => {
			this.handleSubmit(false, false);
		});
	}
	openDateModal() {
		this.setState({ dateModal: !this.state.dateModal });
	}
	selectDateFromCalendar(date) {
		if (date) {
			date = date.toDate();
			var date = new Date(date);
			let mnth = ("0" + (date.getMonth() + 1)).slice(-2);
			let day = ("0" + date.getDate()).slice(-2);
			let actual_date = [date.getFullYear(), mnth, day].join("-");
			this.setState({ selectedDateSpan: actual_date, dateModal: false, currentDate: new Date(date).getDate(), dob: actual_date }, () => {
				this.handleSubmit(false, false);
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
	handleLastname(event) {
		this.setState({ no_lname: !this.state.no_lname }, () => {
			this.handleSubmit(false, false);
		});
	}
	showAlert(type) {
		_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select" + type + "first" });
	}

	handleState(feild, event) {
		this.setState({
			[event.target.getAttribute('data-param')]: event.target.value
		});
		let states = [];
		Object.entries(this.props.insurnaceData['state']).map(function ([key, value]) {
			states.push({ 'code': value.gst_code, 'name': value.state_name });
			// states.push([value.gst_code=value.state_name])
			// states.push(value.state_name)
		});
		this.autocomplete(document.getElementsByClassName('userState')[0], states, 'isState');
	}

	handleDistrict(feild, event) {
		let self = this;
		this.setState({
			[event.target.getAttribute('data-param')]: event.target.value
		});
		let districts_opt = [];
		Object.entries(this.props.insurnaceData['state']).map(function ([key, value]) {
			if (self.state.state_code && self.state.state_code != '' && self.state.state != '' && self.state.state_code == value.gst_code) {
				Object.entries(value.district).map(function ([k, districts]) {
					districts_opt.push({ 'code': districts.district_code, 'name': districts.district_name });
				});
			}
		});
		this.autocomplete(document.getElementsByClassName('userDistrict')[0], districts_opt, 'isDistrict');
	}

	handleTown(feild, event) {
		let self = this;
		this.setState({
			[event.target.getAttribute('data-param')]: event.target.value
		});
		let city_opt = [];
		Object.entries(this.props.insurnaceData['state']).map(function ([key, value]) {
			if (self.state.state_code && self.state.state_code != '' && self.state.state != '' && self.state.state_code == value.gst_code) {
				Object.entries(value.cities).map(function ([k, city]) {
					city_opt.push({ 'code': city.city_code, 'name': city.city_name });
				});
			}
		});
		this.autocomplete(document.getElementsByClassName('userTown')[0], city_opt, 'isTown');
	}

	autocomplete(inp, arr, type) {
		let self = this;
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

	addActive(x, currentFocus) {
		if (!x) return false;
		this.removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = x.length - 1;
		if (x[currentFocus].classList) {
			x[currentFocus].classList.add("autocomplete-active");
		}
	}

	removeActive(x) {
		for (var i = 0; i < x.length; i++) {
			if (x[i].classList) {
				x[i].classList.remove("autocomplete-active");
			}
		}
	}

	closeAllLists(elmnt, type) {
		let inp;
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

	daysInMonth(month, year) {
		return new Date(year, month, 0).getDate();
	}

	populateDates() {
		let self = this;
		let default_months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
		var daydropdown = document.getElementById("daydropdown_" + this.props.member_id),
		    monthdropdown = document.getElementById("monthdropdown_" + this.props.member_id),
		    yeardropdown = document.getElementById("yeardropdown_" + this.props.member_id);
		let age_threshold = this.props.selected_plan && this.props.selected_plan.threshold ? this.props.selected_plan.threshold[0].max_age : 65;
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
			self.setState({ day: NewSelecteddays }, () => {
				self.submitDob();
			});
		};

		// Change handler for months
		monthdropdown.onchange = function () {

			var newMonth = monthdropdown.value;
			self.setState({ mnth: newMonth }, () => {
				self.submitDob();
			});
		};

		// change handler for year
		yeardropdown.onchange = function () {
			var newYear = yeardropdown.value;
			self.setState({ year: newYear }, () => {
				self.submitDob();
			});
		};
	}
	submitDob() {
		let self = this;
		if (self.state.day && self.state.mnth && self.state.year) {
			let finalDate = self.state.year + '-' + self.state.mnth + '-' + self.state.day;
			self.setState({
				dob: finalDate
			}, () => {
				self.handleSubmit();
			});
		}
	}

	verifyEndorsementEmail(newemail) {
		this.setState({ emailVerified: true, email: newemail }, () => {
			this.props.checkIsEmailVerfied();
			this.handleSubmit(true, true);
		});
	}

	render() {
		let self = this;
		let show_createApi_keys = [];
		let city_opt = [];
		let districts_opt = [];
		let Uploaded_image_data;
		let commonMsgSpan = _react2.default.createElement(
			'span',
			{ className: 'fill-error-span' },
			this.props.errorMessages['common_message']
		);
		if (Object.keys(this.props.createApiErrors).length > 0) {
			Object.entries(this.props.createApiErrors).map(function ([key, value]) {
				show_createApi_keys.push(key);
			});
		}
		let isDummyUser;
		if (this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.profiles[this.props.USER.defaultProfile]) {
			isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
		}
		{
			Object.entries(self.props.insurnaceData['state']).map(function ([key, value]) {
				if (self.state.state_code && self.state.state_code != '' && self.state.state != '' && self.state.state_code == value.gst_code) {
					Object.entries(value.district).map(function ([k, districts]) {
						districts_opt.push(_react2.default.createElement(
							'option',
							{ key: k, 'data-param': 'district', id: districts.district_code, value: districts.district_name },
							districts.district_name
						));
					});
					Object.entries(value.cities).map(function ([k, city]) {
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
				{ className: 'row no-gutters', id: isDummyUser ? 'member_0' : this.props.is_endorsement ? `member_${this.props.member_id}` : `member_${this.props.USER.defaultProfile}` },
				_react2.default.createElement(
					'div',
					{ className: 'col-12' },
					this.props.selected_plan.adult_count == 2 ? _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'button',
							{ className: `label-names-buttons ${this.state.title == 'mr.' ? 'btn-active' : ''}`, name: 'title', value: 'mr.', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mr.') },
							'Mr.'
						),
						_react2.default.createElement(
							'button',
							{ className: `label-names-buttons ${this.state.title == 'mrs.' ? 'btn-active' : ''}`, value: 'mrs.', name: 'title', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mrs.') },
							'Mrs.'
						)
					) : _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'button',
							{ className: `label-names-buttons ${this.state.title == 'mr.' ? 'btn-active' : ''}`, name: 'title', value: 'mr.', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mr.') },
							'Mr.'
						),
						_react2.default.createElement(
							'button',
							{ className: `label-names-buttons ${this.state.title == 'miss' ? 'btn-active' : ''}`, name: 'title', value: 'miss', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'miss') },
							'Ms.'
						),
						_react2.default.createElement(
							'button',
							{ className: `label-names-buttons ${this.state.title == 'mrs.' ? 'btn-active' : ''}`, value: 'mrs.', name: 'title', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mrs.') },
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
							id: `name_${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('name') > -1 ? 'fill-error' : ''}`, required: true,
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
							{ className: this.state.disableName ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder', htmlFor: `name_${this.props.member_id}` },
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
							id: `middle_name_${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('middle_name') > -1 ? 'fill-error' : ''}`, required: true,
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
							{ className: this.state.disableName ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder', htmlFor: `middle_name_${this.props.member_id}` },
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
							id: `last_name_${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('last_name') > -1 ? 'fill-error' : ''}`, required: true,
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
							{ className: this.state.disableName ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder', htmlFor: `last_name_${this.props.member_id}` },
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
							type: 'text', id: `emails_${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('email') > -1 ? 'fill-error' : ''}`, required: true,
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
							{ className: this.state.disableEmail ? 'form-control-placeholder datePickerLabel' : 'form-control-placeholder', htmlFor: `emails_${this.props.member_id}` },
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
									{ id: `daydropdown_${this.props.member_id}`, value: this.state.day },
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
									{ id: `monthdropdown_${this.props.member_id}`, value: this.state.mnth },
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
									{ id: `yeardropdown_${this.props.member_id}`, value: this.state.year },
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
							id: `isnstate_${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('state') > -1 ? 'fill-error' : ''} userState`, required: true,
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
							{ className: 'form-control-placeholder', htmlFor: `isnstate_${this.props.member_id}` },
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
							id: `isndistrict_${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('state') > -1 ? 'fill-error' : ''} userDistrict`, required: true,
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
							{ className: 'form-control-placeholder', htmlFor: `isndistrict_${this.props.member_id}` },
							'District'
						),
						_react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
					) : _react2.default.createElement(
						'div',
						{ className: 'ins-form-group', onClick: this.showAlert.bind(this, ' state ') },
						_react2.default.createElement('input', {
							style: { 'textTransform': 'capitalize', fontWeight: '100', color: 'gray' },
							type: 'text',
							id: `isndistrict_${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('district') > -1 ? 'fill-error' : ''}`, required: true,
							autoComplete: 'district',
							name: 'district',
							value: 'Select District', disabled: true,
							'data-param': 'district'
						}),
						_react2.default.createElement(
							'label',
							{ className: 'form-control-placeholder datePickerLabel', htmlFor: `isndistrict_${this.props.member_id}` },
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
							id: `isnTown_${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('state') > -1 ? 'fill-error' : ''} userTown`, required: true,
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
							{ className: 'form-control-placeholder', htmlFor: `isnTown_${this.props.member_id}` },
							'Town'
						),
						_react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
					) : _react2.default.createElement(
						'div',
						{ className: 'ins-form-group', onClick: this.showAlert.bind(this, ' district ') },
						_react2.default.createElement('input', {
							style: { 'textTransform': 'capitalize', fontWeight: '100', color: 'gray' },
							type: 'text',
							id: `isndistrict_${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('town') > -1 ? 'fill-error' : ''}`, required: true,
							autoComplete: 'town',
							name: 'town',
							value: 'Select Town', disabled: true,
							'data-param': 'town'
						}),
						_react2.default.createElement(
							'label',
							{ className: 'form-control-placeholder datePickerLabel', htmlFor: `isndistrict_${this.props.member_id}` },
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
							id: `insaddress${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('address') > -1 ? 'fill-error' : ''}`, required: true,
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
							{ className: 'form-control-placeholder', htmlFor: `insaddress${this.props.member_id}` },
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
							id: `isnpin_${this.props.member_id}`,
							className: `form-control ins-form-control ${this.props.validateErrors.indexOf('pincode') > -1 ? 'fill-error' : ''}`, required: true,
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
							{ className: 'form-control-placeholder', htmlFor: `isnpin_${this.props.member_id}` },
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

}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class StateCityAutoComplete extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'autocomplete', style: { width: '300px' } },
            _react2.default.createElement('input', { id: 'myInput', type: 'text', name: 'myCountry', placeholder: 'Country', onChange: this.handleOnChange.bind(this, this.props.state) })
        );
    }
}

exports.default = StateCityAutoComplete;

/***/ }),

/***/ "./dev/js/components/insurance/verifyEmail.js":
/*!****************************************************!*\
  !*** ./dev/js/components/insurance/verifyEmail.js ***!
  \****************************************************/
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

class VerifyEmail extends _react2.default.Component {
	// email verification
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			oldEmail: '',
			VerifyEmails: false,
			showOtp: false,
			otpTimeout: false,
			initialStage: true,
			otpValue: '',
			emailSuccessId: ''
		};
	}

	componentWillReceiveProps(props) {
		if (this.state.initialStage && this.props.email != '') {
			this.setState({ email: this.props.email, oldEmail: this.props.email, initialStage: false });
		}
	}

	componentDidMount() {
		if (this.state.initialStage && this.props.email != '') {
			this.setState({ email: this.props.email, oldEmail: this.props.email, initialStage: false });
		}
	}

	handleEndoresmentEmail(event) {
		let oldEmail;
		if (this.props.is_endorsement && this.props.user_data && this.props.user_data.length > 0) {
			oldEmail = this.props.user_data[0].email;
		} else {
			oldEmail = this.state.oldEmail;
		}
		this.setState({ email: event.target.value }, () => {
			if (oldEmail !== this.state.email) {
				let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				validEmail = validEmail.test(this.state.email);
				if (validEmail) {
					this.setState({ VerifyEmails: true });
					if (this.props.is_endorsement) {
						this.props.handleSubmit(false, true);
					} else {
						this.props.verifyEndorsementEmail(this.state.email, false, true);
					}
				}
			} else {
				this.props.verifyEndorsementEmail(this.state.email, false, false);
				this.setState({ VerifyEmails: false });
			}
			if (this.state.email == '') {
				this.setState({ VerifyEmails: false });
				if (this.props.is_endorsement) {
					this.props.handleSubmit(false, true);
				} else {
					this.props.verifyEndorsementEmail(this.state.email, false, true); //verify email using otp
				}
			}
		});
	}

	VerifyEmail(resendFlag) {
		if (resendFlag) {
			this.setState({ otpTimeout: false, otpValue: '' });
		}
		let data = {};
		if (this.props.is_endorsement && this.props.user_data && this.props.user_data.length > 0) {
			data.profile = this.props.user_data[0].profile;
		} else {
			data.profile = this.props.member_id.id;
		}
		let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (this.state.email != '') {
			validEmail = validEmail.test(this.state.email);
			if (validEmail) {
				data.email = this.state.email;
				this.props.sendOtpOnEmail(data, resp => {
					if (resp && resp.id) {
						this.setState({ emailSuccessId: resp.id, showOtp: true, otpTimeout: false });
						if (this.props.is_endorsement) {
							this.props.handleSubmit(false, true);
						}
						setTimeout(() => {
							this.setState({ otpTimeout: true });
						}, 10000);
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "OTP has been sent successfuly to your new email." });
					} else {
						this.setState({ showOtp: false, otpTimeout: false });
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.message });
					}
				});
			} else {
				this.setState({ VerifyEmails: false });
				if (!this.props.is_endorsement) {
					this.props.verifyEndorsementEmail(this.state.email, false, true);
				}
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter valid Email" });
			}
		} else {
			this.setState({ VerifyEmails: false });
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter valid Email" });
		}
	}

	setOtp(event) {
		this.setState({ otpValue: event.target.value });
	}
	submitOtp() {
		let data = {};
		data.id = this.state.emailSuccessId;
		if (this.props.is_endorsement && this.props.user_data && this.props.user_data.length > 0) {
			data.profile = this.props.user_data[0].profile;
		} else {
			data.profile = this.props.member_id.id;
		}
		data.otp = parseInt(this.state.otpValue);
		if (this.props.is_endorsement) {
			data.process_immediately = false;
		} else {
			data.process_immediately = true;
		}
		this.props.submitEmailOTP(data, (resp, error) => {
			if (resp) {
				this.props.verifyEndorsementEmail(this.state.email, true, false);
				this.setState({ VerifyEmails: false, showOtp: false, otpTimeout: false, otpValue: '', emailSuccessId: '' });
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.message });
			} else {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.message });
			}
		});
	}
	render() {
		let self = this;
		return _react2.default.createElement(
			'div',
			{ className: `col-12 mrt-10 ${this.props.is_endorsement ? '' : 'ins-fmpage-input'}`, onClick: e => {
					e.stopPropagation();
					e.preventDefault();
				} },
			_react2.default.createElement(
				'div',
				{ className: this.state.showOtp ? 'ins-email-cont' : '' },
				_react2.default.createElement(
					'div',
					{ className: `ins-form-group ${this.state.showOtp ? 'mb-0' : ''}` },
					_react2.default.createElement('input', {
						type: 'text',
						id: `emails_${this.props.member_id.id}`,
						className: `form-control ins-form-control ${this.props.validateErrors && this.props.is_endorsement && this.props.validateErrors.indexOf('email') > -1 ? 'fill-error' : ''} ${this.props.isEmailError ? 'errorColorBorder' : ''}`, required: true,
						autoComplete: 'email',
						name: 'email',
						'data-param': 'email',
						value: this.state.email,
						onChange: this.handleEndoresmentEmail.bind(this),
						onBlur: this.handleEndoresmentEmail.bind(this)
					}),
					_react2.default.createElement(
						'label',
						{ className: 'form-control-placeholder datePickerLabel', htmlFor: 'statick' },
						_react2.default.createElement('span', { className: 'labelDot' }),
						'Email'
					),
					_react2.default.createElement('img', { src: "/assets" + "/img/mail-01.svg" }),
					this.state.VerifyEmails ? _react2.default.createElement(
						'span',
						{ className: 'vrfy-edit', onClick: this.VerifyEmail.bind(this, false) },
						'Verify now'
					) : ''
				),
				this.state.showOtp && this.state.VerifyEmails ? _react2.default.createElement(
					'div',
					{ className: 'ins-otp-mail-cont' },
					_react2.default.createElement(
						'p',
						{ className: 'ins-em-otp' },
						'An OTP has been sent to your email address'
					),
					_react2.default.createElement(
						'div',
						{ className: 'em-ins-inp-cont' },
						_react2.default.createElement('input', { type: 'number', className: 'em-ins-inpu', placeholder: 'Enter OTP', onChange: this.setOtp.bind(this), value: this.state.otpValue }),
						this.state.otpValue.length == 6 ? _react2.default.createElement(
							'button',
							{ onClick: this.submitOtp.bind(this) },
							'Submit'
						) : ''
					),
					this.state.otpTimeout ? _react2.default.createElement(
						'span',
						{ className: 'rdsn-ipt-md', onClick: this.VerifyEmail.bind(this, true) },
						'Resend'
					) : ''
				) : ''
			)
		);
	}

}

exports.default = VerifyEmail;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlRmFtaWx5LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2luc3VyYW5jZS9pbnN1cmFuY2VQcm9vZnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZVNlbGYuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL3N0YXRlQ2l0eUF1dG9Db21wbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvdmVyaWZ5RW1haWwuanMiXSwibmFtZXMiOlsibW9tZW50IiwicmVxdWlyZSIsIkluc3VyYW5jZU90aGVycyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsImxhc3RfbmFtZSIsIm1pZGRsZV9uYW1lIiwiZ2VuZGVyIiwiZG9iIiwiaWQiLCJyZWxhdGlvbiIsInRpdGxlIiwibWVtYmVyX3R5cGUiLCJ1c2VyUHJvZmlsZXMiLCJzaG93UG9wdXAiLCJzZXREZWZhdWx0IiwicHJvZmlsZV9pZCIsIm9ubHlfYWR1bHQiLCJkYXRlTW9kYWwiLCJub19sbmFtZSIsInNlbGVjdGVkRGF0ZVNwYW4iLCJEYXRlIiwiaXNfY2hhbmdlIiwieWVhciIsIm1udGgiLCJkYXkiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJwcm9maWxlIiwiaXNfZW5kb3JzZW1lbnQiLCJPYmplY3QiLCJrZXlzIiwic2VsZl9kYXRhX3ZhbHVlcyIsImxlbmd0aCIsInVzZXJfZGF0YSIsImFzc2lnbiIsIm9sZERhdGUiLCJzcGxpdCIsInNldFN0YXRlIiwicG9wdWxhdGVEYXRlcyIsIm1lbWJlcl9pZCIsImZpcnN0X25hbWUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwic2VsZiIsImFkdWx0X3RpdGxlIiwiYWR1bHRfZ2VuZGVyIiwibmV4dFByb2ZpbGUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VsZl9nZW5kZXIiLCJpc19jaGlsZF9vbmx5IiwiaGFuZGxlVGl0bGUiLCJmaWVsZCIsImV2ZW50IiwidGl0bGVfdmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbGZfZGF0YSIsInVzZXJEYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZ2V0QXR0cmlidXRlIiwiaGFuZGxlUmVsYXRpb24iLCJyZWxhdGlvbl92YWx1ZSIsImlzX2VuZG9yZXNtZW50Iiwic2xpY2UiLCJnZXRUb2RheURhdGUiLCJ0b2RheSIsImRkIiwiZ2V0RGF0ZSIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJ0b2dnbGVQb3B1cCIsIm5ld1Byb2ZpbGVpZCIsIm5ld1Byb2ZpbGUiLCJmaW5hbERhdGUiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0SW5zdXJhbmNlUHJvZmlsZSIsInBhcmFtX2lkIiwiaGFuZGxlR2VuZGVyIiwiZ2VuZGVyX3ZhbHVlIiwib3BlbkRhdGVNb2RhbCIsInNlbGVjdERhdGVGcm9tQ2FsZW5kYXIiLCJkYXRlIiwidG9EYXRlIiwiYWN0dWFsX2RhdGUiLCJqb2luIiwiY3VycmVudERhdGUiLCJoYW5kbGVOYW1lQ2hhcmFjdGVycyIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTGFzdG5hbWUiLCJoaWRlU2VsZWN0UHJvZmlsZVBvcHVwIiwiZGF5c0luTW9udGgiLCJtb250aCIsInRvQ3JlYXRlT3B0aW9ucyIsImFnZV90aHJlc2hvbGQiLCJzZWxlY3RlZF9wbGFuIiwiYWR1bHRfY291bnQiLCJ0aHJlc2hvbGQiLCJjaGlsZF9tYXhfYWdlIiwibWF4X2FnZSIsImRlZmF1bHRfbW9udGhzIiwiZGF5ZHJvcGRvd24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibW9udGhkcm9wZG93biIsInllYXJkcm9wZG93biIsImdldFVUQ0RhdGUiLCJnZXRVVENNb250aCIsImdldFVUQ0Z1bGxZZWFyIiwiY3VycmVudFllYXIiLCJkYXlzSW5DdXJyTW9udGgiLCJpbm5lckhUTUwiLCJvcHRfZGQiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImhpZGRlbiIsImFwcGVuZENoaWxkIiwib3B0X21tIiwib3B0X3l5IiwiaSIsIm9wdCIsIm9uY2hhbmdlIiwiTmV3U2VsZWN0ZWRkYXlzIiwic3VibWl0RG9iIiwibmV3TW9udGgiLCJuZXdZZWFyIiwicmVuZGVyIiwic2hvd19jcmVhdGVBcGlfa2V5c19hZHVsdCIsInNob3dfY3JlYXRlQXBpX2tleXNfY2hpbGQiLCJzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkMiIsIlVwbG9hZGVkX2ltYWdlX2RhdGEiLCJjb21tb25Nc2dTcGFuIiwiZXJyb3JNZXNzYWdlcyIsInNob3dfY3JlYXRlQXBpX2tleXMiLCJjcmVhdGVBcGlFcnJvcnNDaGlsZCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJmaWVsZF9uYW1lIiwiZmllbGRfdmFsdWUiLCJwdXNoIiwiY3JlYXRlQXBpRXJyb3JzIiwiRXJyb3JOYW1lSWQiLCJ2YWxpZGF0aW5nTmFtZXMiLCJtZW1iZXJzX3Byb29mcyIsImZpbHRlciIsIngiLCJtYXJnaW5Cb3R0b20iLCJtZW1iZXJfdmlld19pZCIsInNob3dfc2VsZWN0ZWRfcHJvZmlsZXMiLCJVU0VSIiwiQVNTRVRTX0JBU0VfVVJMIiwicGFkZGluZyIsInZhbGlkYXRlRXJyb3JzIiwiaW5kZXhPZiIsIm1hcmdpblRvcCIsInZhbGlkYXRlT3RoZXJFcnJvcnMiLCJ3aWR0aCIsImZvbnRTaXplIiwicGFkZGluZ0xlZnQiLCJsaW5lSGVpZ2h0IiwicmlnaHQiLCJ2YWxpZGF0ZURvYkVycm9ycyIsImN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQiLCJxdWVyeVN0cmluZyIsIkNvbXByZXNzIiwiSW5zdXJhbmNlUHJvb2ZzIiwiZGF0YVVybCIsInpvb21JbWFnZVVybCIsInpvb21JbWFnZSIsIm9wZW5QZGYiLCJvcGVuUGRmVXJsIiwiaXNMb2FkaW5nIiwicGlja0ZpbGUiLCJlIiwiZmlsZXMiLCJmaWxlIiwiaW5jbHVkZXMiLCJmaW5pc2hDcm9wIiwiY29tcHJlc3MiLCJxdWFsaXR5IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJ0aGVuIiwicmVzdWx0cyIsImltZzEiLCJiYXNlNjRzdHIiLCJkYXRhIiwiaW1nRXh0IiwiZXh0IiwiY29udmVydEJhc2U2NFRvRmlsZSIsImdldEJhc2U2NCIsImNhdGNoIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwiY2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsImZpbGVfYmxvYl9kYXRhIiwiZGF0YVVSSXRvQmxvYiIsIm1lbV9kYXRhIiwiZXhpc3RpbmdEYXRhIiwiaW1nX3RhZyIsImZvcm1fZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXBsb2FkUHJvb2YiLCJlcnIiLCJtZW1iZXIiLCJpbWdfcGF0aF9pZHMiLCJpbWFnZSIsImRvY3VtZW50X2ltYWdlIiwic3RvcmVNZW1iZXJQcm9vZnMiLCJkYXRhVVJJIiwiYmluYXJ5IiwiYXRvYiIsImFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJVaW50OEFycmF5IiwidHlwZSIsInJlbW92ZUltYWdlIiwiaW1nIiwicmVtb3ZlTWVtYmVyUHJvb2YiLCJpbWdfdXJsIiwicGRmX3VybCIsInNob3dfdXBsb2FkIiwibWFyZ2luIiwiY2xpY2siLCJkaXNwbGF5IiwiSW5zdXJhbmNlU2VsZiIsImVtYWlsIiwicGluY29kZSIsImFkZHJlc3MiLCJ0b3duIiwiZGlzdHJpY3QiLCJwcm9maWxlX2ZsYWciLCJzdGF0ZV9jb2RlIiwiZGlzdHJpY3RfY29kZSIsInRvd25fY29kZSIsImRpc2FibGVOYW1lIiwiZGlzYWJsZUVtYWlsIiwiZGlzYWJsZURvYiIsImVtYWlsVmVyaWZpZWQiLCJoYW5kbGVFbWFpbCIsImRlZmF1bHRQcm9maWxlIiwiZ2V0VXNlckRldGFpbHMiLCJjaXR5X2NvZGUiLCJuZXdOYW1lIiwicHJvZmlsZUxlbmd0aCIsInByb2ZpbGVzIiwiaXNEdW1teVVzZXIiLCJuZXdfcHJvZmlsZSIsInRlbXBBcnJheSIsImhhbmRsZU9uRm9jdXMiLCJpc19lbmRvcnNlX2VtYWlsIiwiaGFuZGxla2V5IiwiZm9ybUlzVmFsaWQiLCJ2YWxpZEVtYWlsIiwidGVzdCIsInNob3dBbGVydCIsImhhbmRsZVN0YXRlIiwiZmVpbGQiLCJzdGF0ZXMiLCJpbnN1cm5hY2VEYXRhIiwiZ3N0X2NvZGUiLCJzdGF0ZV9uYW1lIiwiYXV0b2NvbXBsZXRlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhhbmRsZURpc3RyaWN0IiwiZGlzdHJpY3RzX29wdCIsImsiLCJkaXN0cmljdHMiLCJkaXN0cmljdF9uYW1lIiwiaGFuZGxlVG93biIsImNpdHlfb3B0IiwiY2l0aWVzIiwiY2l0eSIsImNpdHlfbmFtZSIsImlucCIsImFyciIsImN1cnJlbnRGb2N1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnREaXYiLCJjaGlsZERpdiIsInZhbCIsImNsb3NlQWxsTGlzdHMiLCJzZXRBdHRyaWJ1dGUiLCJwYXJlbnROb2RlIiwic3Vic3RyIiwidG9VcHBlckNhc2UiLCJjb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJrZXlDb2RlIiwiYWRkQWN0aXZlIiwicmVtb3ZlQWN0aXZlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZWxtbnQiLCJyZW1vdmVDaGlsZCIsInZlcmlmeUVuZG9yc2VtZW50RW1haWwiLCJuZXdlbWFpbCIsImNoZWNrSXNFbWFpbFZlcmZpZWQiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJTdGF0ZUNpdHlBdXRvQ29tcGxldGUiLCJoYW5kbGVPbkNoYW5nZSIsIlZlcmlmeUVtYWlsIiwib2xkRW1haWwiLCJWZXJpZnlFbWFpbHMiLCJzaG93T3RwIiwib3RwVGltZW91dCIsImluaXRpYWxTdGFnZSIsIm90cFZhbHVlIiwiZW1haWxTdWNjZXNzSWQiLCJoYW5kbGVFbmRvcmVzbWVudEVtYWlsIiwicmVzZW5kRmxhZyIsInNlbmRPdHBPbkVtYWlsIiwicmVzcCIsInNldFRpbWVvdXQiLCJtZXNzYWdlIiwic2V0T3RwIiwic3VibWl0T3RwIiwib3RwIiwicGFyc2VJbnQiLCJwcm9jZXNzX2ltbWVkaWF0ZWx5Iiwic3VibWl0RW1haWxPVFAiLCJzdG9wUHJvcGFnYXRpb24iLCJpc0VtYWlsRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0EsTUFBTUEsU0FBU0MsbUJBQU9BLENBQUMsc0JBQVIsQ0FBZjs7QUFFQSxNQUFNQyxlQUFOLFNBQThCQyxnQkFBTUMsU0FBcEMsQ0FBOEM7QUFDN0NDLGFBQVlDLEtBQVosRUFBbUI7QUFDbEIsUUFBTUEsS0FBTjtBQUNBLE9BQUtDLEtBQUwsR0FBYTtBQUNaQyxTQUFNLEVBRE07QUFFWkMsY0FBVyxFQUZDO0FBR1pDLGdCQUFZLEVBSEE7QUFJWkMsV0FBUSxFQUpJO0FBS1pDLFFBQUssRUFMTztBQU1aQyxPQUFJLEVBTlE7QUFPWkMsYUFBVSxFQVBFO0FBUVpDLFVBQU8sRUFSSztBQVNaQyxnQkFBWSxFQVRBO0FBVVpDLGlCQUFjLEVBVkY7QUFXWkMsY0FBVyxLQVhDO0FBWVpDLGVBQVksS0FaQTtBQWFaQyxlQUFXLElBYkM7QUFjWkMsZUFBVyxLQWRDO0FBZVo7QUFDQTtBQUNBO0FBQ0FDLGNBQVUsS0FsQkU7QUFtQlpDLGFBQVMsS0FuQkc7QUFvQk5DLHFCQUFpQixJQUFJQyxJQUFKLEVBcEJYO0FBcUJOQyxjQUFVLEtBckJKO0FBc0JOQyxTQUFLLElBdEJDO0FBdUJOQyxTQUFLLElBdkJDO0FBd0JOQyxRQUFJO0FBeEJFLEdBQWI7QUEwQkEsT0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBOztBQUVEQyxxQkFBbUI7QUFDbEIsTUFBSUMsT0FBSjtBQUNBLE1BQUcsS0FBSzNCLEtB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O0FBRUM7QUFBQTtBQUFBLFFBQUssV0FBVSxpQkFBZjtBQUNDLCtDQUFPLE1BQUssUUFBWixFQUFxQixXQUFVLGFBQS9CLEVBQTZDLGFBQVksV0FBekQsRUFBcUUsVUFBVSxLQUFLWSxNQUFMLENBQVlqVCxJQUFaLENBQWlCLElBQWpCLENBQS9FLEVBQXVHLE9BQU8sS0FBS3hCLEtBQUwsQ0FBV2lVLFFBQXpILEdBREQ7QUFHRSxXQUFLalUsS0FBTCxDQUFXaVUsUUFBWCxDQUFvQmxTLE1BQXBCLElBQTZCLENBQTdCLEdBQ0M7QUFBQTtBQUFBLFNBQVEsU0FBUyxLQUFLMlMsU0FBTCxDQUFlbFQsSUFBZixDQUFvQixJQUFwQixDQUFqQjtBQUFBO0FBQUEsT0FERCxHQUVDO0FBTEgsTUFGRDtBQVdFLFVBQUt4QixLQUFMLENBQVcrVCxVQUFYLEdBQ0E7QUFBQTtBQUFBLFFBQU0sV0FBVSxhQUFoQixFQUE4QixTQUFTLEtBQUtKLFdBQUwsQ0FBaUJuUyxJQUFqQixDQUFzQixJQUF0QixFQUEyQixJQUEzQixDQUF2QztBQUFBO0FBQUEsTUFEQSxHQUVDO0FBYkgsS0FEQSxHQWtCQztBQXhDSDtBQUhELEdBREQ7QUFpREE7O0FBdEx3Qzs7a0JBMEwzQm1TLFciLCJmaWxlIjoiMzQuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEluc3VyUG9wdXAgZnJvbSAnLi9pbnN1cmFuY2VQb3B1cC5qcydcbmltcG9ydCBDYWxlbmRhciBmcm9tICdyYy1jYWxlbmRhcidcbmltcG9ydCBJbnN1cmFuY2VQcm9vZnMgZnJvbSAnLi9pbnN1cmFuY2VQcm9vZnMuanMnXG5jb25zdCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKVxuXG5jbGFzcyBJbnN1cmFuY2VPdGhlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuYW1lOiAnJyxcblx0XHRcdGxhc3RfbmFtZTogJycsXG5cdFx0XHRtaWRkbGVfbmFtZTonJyxcblx0XHRcdGdlbmRlcjogJycsXG5cdFx0XHRkb2I6ICcnLFxuXHRcdFx0aWQ6ICcnLFxuXHRcdFx0cmVsYXRpb246ICcnLFxuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0bWVtYmVyX3R5cGU6JycsXG5cdFx0XHR1c2VyUHJvZmlsZXM6IHt9LFxuXHRcdFx0c2hvd1BvcHVwOiBmYWxzZSxcblx0XHRcdHNldERlZmF1bHQ6IGZhbHNlLFxuXHRcdFx0cHJvZmlsZV9pZDpudWxsLFxuXHRcdFx0b25seV9hZHVsdDpmYWxzZSxcblx0XHRcdC8vIHNlbGVjdF9wcm9maWxlX2Rpc2FibGU6ZmFsc2UsXG5cdFx0XHQvLyBzaG93X2xuYW1lOiB0aGlzLnByb3BzLm5vX2xuYW1lLFxuXHRcdFx0Ly8gc2hvd19sbmFtZV9mbGFnOnRoaXMucHJvcHMubm9fbG5hbWUsXG5cdFx0XHRkYXRlTW9kYWw6ZmFsc2UsXG5cdFx0XHRub19sbmFtZTpmYWxzZSxcbiAgICBcdCAgICBzZWxlY3RlZERhdGVTcGFuOm5ldyBEYXRlKCksXG4gICAgXHQgICAgaXNfY2hhbmdlOmZhbHNlLFxuICAgIFx0ICAgIHllYXI6bnVsbCxcbiAgICBcdCAgICBtbnRoOm51bGwsXG4gICAgXHQgICAgZGF5Om51bGxcblx0XHR9XG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRsZXQgcHJvZmlsZVxuXHRcdGlmKHRoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQpe1xuXHRcdFx0aWYoT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzKS5sZW5ndGg+MCAmJiB0aGlzLnByb3BzLnVzZXJfZGF0YS5sZW5ndGggPiAwKXtcblx0XHRcdFx0cHJvZmlsZT0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3RoaXMucHJvcHMudXNlcl9kYXRhWzBdLmlkXSlcblx0XHRcdFx0bGV0IG9sZERhdGVcblx0XHRcdFx0aWYoT2JqZWN0LmtleXMocHJvZmlsZSkubGVuZ3RoID4gMCAmJiBwcm9maWxlLmRvYil7XG5cdFx0XHRcdFx0b2xkRGF0ZT0gcHJvZmlsZS5kb2Iuc3BsaXQoJy0nKVxuXHRcdFx0XHQgICAgXHR0aGlzLnNldFN0YXRlKHt5ZWFyOm9sZERhdGVbMF0sbW50aDpvbGREYXRlWzJdLGRheTpvbGREYXRlWzFdfSwoKT0+e1xuXHRcdFx0XHQgICAgXHRcdHRoaXMucG9wdWxhdGVEYXRlcyh0aGlzLnByb3BzLm1lbWJlcl9pZCx0cnVlKVxuXHRcdFx0XHQgICAgfSlcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsuLi5wcm9maWxlfSwoKT0+e1xuXHQgICAgXHRcdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdCh0cnVlKVxuXHQgICAgXHRcdFx0fSlcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRsZXQgb2xkRGF0ZVxuXHRcdFx0XHRpZih0aGlzLnByb3BzLnVzZXJfZGF0YSAmJiB0aGlzLnByb3BzLnVzZXJfZGF0YS5sZW5ndGggPiAwKXtcblx0XHRcdFx0XHRpZih0aGlzLnByb3BzLnVzZXJfZGF0YVswXS5yZWxhdGlvbiA9PSAnc3BvdXNlJyl7XG5cdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtvbmx5X2FkdWx0OnRydWV9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZih0aGlzLnByb3BzLnVzZXJfZGF0YSAmJiB0aGlzLnByb3BzLnVzZXJfZGF0YVswXS5kb2Ipe1xuXHRcdFx0XHRcdFx0b2xkRGF0ZT0gdGhpcy5wcm9wcy51c2VyX2RhdGFbMF0uZG9iLnNwbGl0KCctJylcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3llYXI6b2xkRGF0ZVswXSxtbnRoOm9sZERhdGVbMl0sZGF5Om9sZERhdGVbMV19LCgpPT57XG5cdFx0XHRcdCAgICBcdFx0dGhpcy5wb3B1bGF0ZURhdGVzKHRoaXMucHJvcHMubWVtYmVyX2lkLHRydWUpXG5cdFx0XHRcdCAgICBcdH0pXG5cdFx0XHRcdFx0fVxuXHQgICAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5wcm9wcy51c2VyX2RhdGFbMF0sIG5hbWU6dGhpcy5wcm9wcy51c2VyX2RhdGFbMF0uZmlyc3RfbmFtZSxtZW1iZXJfdHlwZTp0aGlzLnByb3BzLm1lbWJlcl90eXBlLCBwcm9maWxlX2lkOnRoaXMucHJvcHMudXNlcl9kYXRhWzBdLnByb2ZpbGUsaXNfY2hhbmdlOmZhbHNlfSwoKT0+e1xuXHQgICAgXHRcdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdCh0cnVlKVxuXHQgICAgXHRcdFx0XHQvLyB0aGlzLnBvcHVsYXRlRGF0ZXModGhpcy5wcm9wcy5tZW1iZXJfaWQsdHJ1ZSlcblx0ICAgIFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGlmKCF0aGlzLnN0YXRlLnllYXIgJiYgIXRoaXMuc3RhdGUubW50aCAmJiAhdGhpcy5zdGF0ZS5tbnRoKXtcblx0XHRcdFx0dGhpcy5wb3B1bGF0ZURhdGVzKHRoaXMucHJvcHMubWVtYmVyX2lkLHRydWUpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdGxldCBhZHVsdF90aXRsZVxuXHRcdGxldCBhZHVsdF9nZW5kZXJcblx0XHRpZighcHJvcHMuaXNfZW5kb3JzZW1lbnQpe1xuXHRcdFx0aWYocHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1twcm9wcy5tZW1iZXJfaWRdKXtcblx0XHRcdFx0bGV0IHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdGhpcy5wcm9wcy5tZW1iZXJfaWRdKVxuXHRcdFx0XHRsZXQgbmV4dFByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3Byb3BzLm1lbWJlcl9pZF0pXG5cdFx0XHRcdGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSAhPSBKU09OLnN0cmluZ2lmeShuZXh0UHJvZmlsZSkpIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgLi4ubmV4dFByb2ZpbGUgfSlcblx0XHRcdFx0XHRpZighc2VsZi5zdGF0ZS55ZWFyICYmICFzZWxmLnN0YXRlLm1udGggJiYgIXNlbGYuc3RhdGUubW50aCl7XG5cdFx0XHRcdFx0ICAgIHNlbGYucG9wdWxhdGVEYXRlcyhwcm9wcy5tZW1iZXJfaWQsdHJ1ZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1lbHNlIGlmKHByb3BzLm1lbWJlcl9pZCAmJiAhdGhpcy5zdGF0ZS5zZXREZWZhdWx0KXtcblx0XHRcdFx0aWYocHJvcHMuc2VsZl9nZW5kZXIgPT0gJ20nKXtcblx0XHRcdFx0XHRhZHVsdF90aXRsZSA9ICdtcnMuJ1xuXHRcdFx0XHRcdGFkdWx0X2dlbmRlciA9ICdmJ1xuXHRcdFx0XHR9ZWxzZSBpZihwcm9wcy5zZWxmX2dlbmRlciA9PSAnZicpe1xuXHRcdFx0XHRcdGFkdWx0X3RpdGxlID0gJ21yLidcblx0XHRcdFx0XHRhZHVsdF9nZW5kZXIgPSAnbSdcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpZDogcHJvcHMubWVtYmVyX2lkLCBzZXREZWZhdWx0OnRydWV9LCAoKSA9PiB7XG5cdFx0XHRcdFx0aWYodGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5KXtcblx0XHRcdFx0XHRcdGlmKCFzZWxmLnN0YXRlLnllYXIgJiYgIXNlbGYuc3RhdGUubW50aCAmJiAhc2VsZi5zdGF0ZS5tbnRoKXtcblx0XHRcdFx0XHRcdCAgICBzZWxmLnBvcHVsYXRlRGF0ZXMoc2VsZi5wcm9wcy5tZW1iZXJfaWQsdHJ1ZSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe21lbWJlcl90eXBlOnRoaXMucHJvcHMubWVtYmVyX3R5cGV9LCgpID0+e1xuXHRcdFx0XHRcdFx0XHRzZWxmLmhhbmRsZVN1Ym1pdCgpXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdCAgICBzZWxmLnBvcHVsYXRlRGF0ZXMoc2VsZi5wcm9wcy5tZW1iZXJfaWQsdHJ1ZSlcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe21lbWJlcl90eXBlOnRoaXMucHJvcHMubWVtYmVyX3R5cGUscmVsYXRpb246J3Nwb3VzZScsdGl0bGU6YWR1bHRfdGl0bGUsZ2VuZGVyOmFkdWx0X2dlbmRlcixvbmx5X2FkdWx0OnRydWV9LCgpID0+e1xuXHRcdFx0XHRcdFx0XHRzZWxmLmhhbmRsZVN1Ym1pdCgpXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cdFx0XHRcdFx0XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGhhbmRsZVRpdGxlKGZpZWxkLCBldmVudCkge1xuXHRcdGxldCB0aXRsZV92YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdGlmKHRoaXMucHJvcHMuaXNfY2hpbGRfb25seSl7XG5cdFx0XHRpZih0aXRsZV92YWx1ZSA9PSAnbXIuJyl7XG4gIFx0XHRcdHRoaXMuc2V0U3RhdGUoe2dlbmRlcjonbScscmVsYXRpb246J3Nvbid9KVx0XG5cdCAgXHRcdH1lbHNlIGlmKHRpdGxlX3ZhbHVlID09ICdtaXNzJyl7XG5cdCAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7Z2VuZGVyOidmJyxyZWxhdGlvbjonZGF1Z2h0ZXInfSlcdFxuXHQgIFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRpZih0aXRsZV92YWx1ZSA9PSAnbXIuJyl7XG4gIFx0XHRcdHRoaXMuc2V0U3RhdGUoe2dlbmRlcjonbSd9KVx0XG5cdCAgXHRcdH1lbHNlIGlmKHRpdGxlX3ZhbHVlID09ICdtaXNzJyl7XG5cdCAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7Z2VuZGVyOidmJ30pXHRcblx0ICBcdFx0fWVsc2UgaWYodGl0bGVfdmFsdWUgPT0gJ21ycy4nKXtcblx0ICBcdFx0XHR0aGlzLnNldFN0YXRlKHtnZW5kZXI6J2YnfSlcblx0ICBcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHsgdGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9LCAoKSA9PiB7XG5cdFx0XHR2YXIgc2VsZl9kYXRhID0gdGhpcy5zdGF0ZVxuXHRcdFx0c2VsZl9kYXRhLmlzX2NoYW5nZSA9IHRydWVcblx0XHRcdHRoaXMucHJvcHMudXNlckRhdGEoJ3NlbGZfZGF0YScsIHNlbGZfZGF0YSlcblx0XHR9KVxuXHR9XG5cdGhhbmRsZUNoYW5nZShmaWVsZCwgZXZlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFtldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmFtJyldOiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVSZWxhdGlvbihmaWVsZCxldmVudCkge1xuXHRcdGxldCByZWxhdGlvbl92YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdGlmKHJlbGF0aW9uX3ZhbHVlID09ICdzb24nKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3RpdGxlOidtYXN0LicsZ2VuZGVyOidtJ30pXHRcbiAgXHRcdH1lbHNlIGlmKHJlbGF0aW9uX3ZhbHVlID09ICdkYXVnaHRlcicpe1xuICBcdFx0XHR0aGlzLnNldFN0YXRlKHt0aXRsZTonbWlzcycsZ2VuZGVyOidmJ30pXHRcbiAgXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHJlbGF0aW9uOiBldmVudC50YXJnZXQudmFsdWUsaXNfY2hhbmdlOnRydWVcblx0XHR9LCgpID0+e1xuXHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQodHJ1ZSxldmVudClcblx0XHR9KVxuXHR9XG5cdGhhbmRsZVN1Ym1pdChpc19lbmRvcmVzbWVudCkge1xuXHRcdHZhciBzZWxmX2RhdGEgPSB0aGlzLnN0YXRlXG5cdFx0aWYoc2VsZl9kYXRhLm5hbWUgIT09ICcnKXtcblx0ICAgIFx0aWYoc2VsZl9kYXRhLm5hbWUubGVuZ3RoID4gNTApe1xuXHRcdFx0XHRzZWxmX2RhdGEubmFtZSA9IHNlbGZfZGF0YS5uYW1lLnNsaWNlKDAsIDUwKVxuXHRcdFx0fVx0XG5cdCAgICB9XG5cdCAgICBpZihzZWxmX2RhdGEubWlkZGxlX25hbWUgIT09ICcnKXtcblx0ICAgIFx0aWYoc2VsZl9kYXRhLm1pZGRsZV9uYW1lLmxlbmd0aCA+IDUwKXtcblx0XHRcdFx0c2VsZl9kYXRhLm1pZGRsZV9uYW1lID0gc2VsZl9kYXRhLm1pZGRsZV9uYW1lLnNsaWNlKDAsIDUwKVxuXHRcdFx0fVx0XG5cdCAgICB9XG5cdCAgICBpZihzZWxmX2RhdGEubGFzdF9uYW1lICE9PSAnJyl7XG5cdCAgICBcdGlmKHNlbGZfZGF0YS5sYXN0X25hbWUubGVuZ3RoID4gNTApe1xuXHRcdFx0XHRzZWxmX2RhdGEubGFzdF9uYW1lID0gc2VsZl9kYXRhLmxhc3RfbmFtZS5zbGljZSgwLCA1MClcblx0XHRcdH1cdFxuXHQgICAgfVxuXHQgICAgaWYoIWlzX2VuZG9yZXNtZW50KXtcblx0ICAgIFx0c2VsZl9kYXRhLmlzX2NoYW5nZSA9IHRydWVcblx0ICAgIH1cblx0XHR0aGlzLnByb3BzLnVzZXJEYXRhKCdzZWxmX2RhdGEnLCBzZWxmX2RhdGEpXG5cdH1cblx0Z2V0VG9kYXlEYXRlKCl7XG5cdFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcblx0XHR2YXIgZGQgPSB0b2RheS5nZXREYXRlKCk7XG5cdFx0dmFyIG1tID0gdG9kYXkuZ2V0TW9udGgoKSsxOyBcblx0XHR2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7IFxuXG5cdFx0aWYobW08MTApIFxuXHRcdHtcblx0XHQgICAgbW09JzAnK21tO1xuXHRcdH1cblx0XHRpZihkZDwxMCkgXG5cdFx0e1xuXHRcdCAgICBkZD0nMCcrZGQ7XG5cdFx0fSBcblx0XHR0b2RheSA9IHl5eXkrJy0nK2RkKyctJyttbTtcblx0XHRyZXR1cm4gdG9kYXlcblx0fVxuXHR0b2dnbGVQb3B1cChuZXdQcm9maWxlaWQsIG1lbWJlcl9pZCwgbmV3UHJvZmlsZSkge1xuXHRcdGxldCBvbGREYXRlXG5cdFx0bGV0IGZpbmFsRGF0ZVxuXHRcdGlmKG5ld1Byb2ZpbGVpZCAhPT0gJycpe1xuXHRcdFx0aWYodGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5KXtcblx0XHRcdFx0aWYobmV3UHJvZmlsZS5nZW5kZXIgPT0gJ20nKXtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHt0aXRsZTonbWFzdC4nLHJlbGF0aW9uOidzb24nfSlcblx0XHRcdFx0fWVsc2UgaWYobmV3UHJvZmlsZS5nZW5kZXIgPT0gJ2YnKXtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHt0aXRsZTonbWlzcycscmVsYXRpb246J2RhdWdodGVyJ30pXG5cdFx0XHRcdH1cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRpZihuZXdQcm9maWxlLmdlbmRlciA9PSAnbScpe1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3RpdGxlOidtci4nLHJlbGF0aW9uOidzcG91c2UnfSlcblx0XHRcdFx0fWVsc2UgaWYobmV3UHJvZmlsZS5nZW5kZXIgPT0gJ2YnKXtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHt0aXRsZTonbXJzLicscmVsYXRpb246J3Nwb3VzZSd9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZihuZXdQcm9maWxlICYmIG5ld1Byb2ZpbGUuZG9iKXtcblx0XHRcdFx0b2xkRGF0ZT0gbmV3UHJvZmlsZS5kb2Iuc3BsaXQoJy0nKVxuXHRcdFx0XHRjb25zb2xlLmxvZyhuZXdQcm9maWxlLmRvYilcblx0XHRcdFx0Y29uc29sZS5sb2cob2xkRGF0ZSlcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7eWVhcjpvbGREYXRlWzBdLG1udGg6b2xkRGF0ZVsxXSxkYXk6b2xkRGF0ZVsyXX0sKCk9Pntcblx0ICAgIFx0XHRcdHRoaXMucG9wdWxhdGVEYXRlcyhuZXdQcm9maWxlaWQsZmFsc2UpXG5cdCAgICBcdFx0XHRmaW5hbERhdGUgPSB0aGlzLnN0YXRlLnllYXIgKyAnLScrIHRoaXMuc3RhdGUubW50aCArICctJyt0aGlzLnN0YXRlLmRheSBcblx0ICAgIFx0XHRcdHRoaXMuc2V0U3RhdGUoe2RvYjpmaW5hbERhdGV9KVxuXHQgICAgXHRcdH0pXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5wb3B1bGF0ZURhdGVzKG5ld1Byb2ZpbGVpZCxmYWxzZSlcblx0XHRcdH1cblx0ICAgIFx0XG5cdFx0XHR0aGlzLnByb3BzLnNlbGVjdEluc3VyYW5jZVByb2ZpbGUobmV3UHJvZmlsZWlkLCBtZW1iZXJfaWQsIG5ld1Byb2ZpbGUsIHRoaXMucHJvcHMucGFyYW1faWQpIC8vIHNlbGVjdCBmcm9tIHByb2ZpbGUgb3B0aW9uXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c2hvd1BvcHVwOiAhdGhpcy5zdGF0ZS5zaG93UG9wdXAsXG5cdFx0XHRcdHByb2ZpbGVfaWQ6IG5ld1Byb2ZpbGVpZCxcblx0XHRcdFx0aWQ6bmV3UHJvZmlsZWlkXG5cdFx0XHR9LCgpID0+e1xuXHRcdFx0XHR0aGlzLmhhbmRsZVN1Ym1pdChmYWxzZSk7XG5cdFx0XHR9KVxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiAhdGhpcy5zdGF0ZS5zaG93UG9wdXB9KVxuXHRcdH1cblx0fVxuXHRoYW5kbGVHZW5kZXIoZmllbGQsIGV2ZW50KSB7XG5cdFx0bGV0IGdlbmRlcl92YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdGlmKHRoaXMucHJvcHMuaXNfY2hpbGRfb25seSl7XG5cdFx0XHRpZihnZW5kZXJfdmFsdWUgPT0gJ20nKXtcbiAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dGl0bGU6J21hc3QuJyxyZWxhdGlvbjonc29uJ30pXHRcblx0ICBcdFx0fWVsc2UgaWYoZ2VuZGVyX3ZhbHVlID09ICdmJyl7XG5cdCAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dGl0bGU6J21pc3MnLHJlbGF0aW9uOidkYXVnaHRlcid9KVx0XG5cdCAgXHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGlmKGdlbmRlcl92YWx1ZSA9PSAnbScpe1xuICBcdFx0XHR0aGlzLnNldFN0YXRlKHt0aXRsZTonbXIuJ30pXHRcblx0ICBcdFx0fWVsc2UgaWYoZ2VuZGVyX3ZhbHVlID09ICdmJyl7XG5cdCAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dGl0bGU6J21ycy4nfSlcdFxuXHQgIFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Z2VuZGVyOiBldmVudC50YXJnZXQudmFsdWUsIGlzX2NoYW5nZTp0cnVlXG5cdFx0fSwoKSA9Pntcblx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KGZhbHNlLGV2ZW50KVxuXHRcdH0pXG5cdH1cblx0b3BlbkRhdGVNb2RhbCgpIHtcblx0ICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiAhdGhpcy5zdGF0ZS5kYXRlTW9kYWwgfSlcblx0fVxuXHRzZWxlY3REYXRlRnJvbUNhbGVuZGFyKGRhdGUpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLnRvRGF0ZSgpXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG5cdFx0ICAgIGxldCBtbnRoID0gKFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSsxKSkuc2xpY2UoLTIpXG5cdFx0ICAgIGxldCBkYXkgID0gKFwiMFwiICsgZGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKTtcblx0XHQgICAgbGV0IGFjdHVhbF9kYXRlID0gIFsgZGF0ZS5nZXRGdWxsWWVhcigpLCBtbnRoLCBkYXkgXS5qb2luKFwiLVwiKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZERhdGVTcGFuOiBhY3R1YWxfZGF0ZSwgZGF0ZU1vZGFsOiBmYWxzZSwgY3VycmVudERhdGU6IG5ldyBEYXRlKGRhdGUpLmdldERhdGUoKSxkb2I6IGFjdHVhbF9kYXRlIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQoZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVNb2RhbDogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVOYW1lQ2hhcmFjdGVycyhmaWVsZCxldmVudCl7XG5cdFx0aWYoZmllbGQgPT0gJ25hbWUnKXtcblx0XHRcdGlmKHRoaXMuc3RhdGUubmFtZS5sZW5ndGggPT0gNTApe1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgICAgICAgIH1cbiAgICBcdH1lbHNlIGlmKGZpZWxkID09ICdsYXN0X25hbWUnKXtcblx0XHRcdGlmKHRoaXMuc3RhdGUubGFzdF9uYW1lLmxlbmd0aCA9PSA1MCl7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgfVxuICAgIFx0fWVsc2UgaWYoZmllbGQgPT0gJ21pZGRsZV9uYW1lJyl7XG5cdFx0XHRpZih0aGlzLnN0YXRlLm1pZGRsZV9uYW1lLmxlbmd0aCA9PSA1MCl7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgfVxuICAgIFx0fVxuXG5cdH1cblx0aGFuZGxlTGFzdG5hbWUoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe25vX2xuYW1lOiF0aGlzLnN0YXRlLm5vX2xuYW1lfSwoKSA9Pntcblx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KGZhbHNlLGV2ZW50KVxuXHRcdH0pXG5cdH1cblxuXHRoaWRlU2VsZWN0UHJvZmlsZVBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dQb3B1cDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGF5c0luTW9udGgobW9udGgsIHllYXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVEYXRlcyhtZW1iZXJfaWQsdG9DcmVhdGVPcHRpb25zKXtcbiAgICBcdGxldCBhZ2VfdGhyZXNob2xkIFxuICAgIFx0aWYodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5hZHVsdF9jb3VudCl7XG4gICAgXHRcdGlmKHRoaXMucHJvcHMuaXNfY2hpbGRfb25seSl7XG4gICAgXHRcdFx0YWdlX3RocmVzaG9sZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0uY2hpbGRfbWF4X2FnZVxuICAgIFx0XHR9ZWxzZXtcbiAgICBcdFx0XHRhZ2VfdGhyZXNob2xkID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5tYXhfYWdlXG4gICAgXHRcdH1cbiAgICBcdH1cbiAgICBcdGxldCBkZWZhdWx0X21vbnRocz1bJzAxJywnMDInLCcwMycsJzA0JywnMDUnLCcwNicsJzA3JywnMDgnLCcwOScsJzEwJywnMTEnLCcxMiddXG4gICAgXHRsZXQgc2VsZiA9dGhpc1xuICAgIFx0dmFyIGRheWRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheWRyb3Bkb3duXycrbWVtYmVyX2lkKSxcbiAgICAgICAgICBtb250aGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbnRoZHJvcGRvd25fJyttZW1iZXJfaWQpLFxuICAgICAgICAgIHllYXJkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWFyZHJvcGRvd25fJyttZW1iZXJfaWQpO1xuICAgICAgICAgIFx0XG4gICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBkYXkgPSB0b2RheS5nZXRVVENEYXRlKCksXG4gICAgICAgICAgICBtb250aCA9IHRvZGF5LmdldFVUQ01vbnRoKCksXG4gICAgICAgICAgICB5ZWFyPSB0b2RheS5nZXRVVENGdWxsWWVhcigpLWFnZV90aHJlc2hvbGQsXG4gICAgICAgICAgICBjdXJyZW50WWVhciA9IHRvZGF5LmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICAgICAgICBkYXlzSW5DdXJyTW9udGggPSB0aGlzLmRheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKTtcblx0XHRpZihkYXlkcm9wZG93biAmJiBtb250aGRyb3Bkb3duICYmIHllYXJkcm9wZG93bil7XG5cdFx0XHRcblx0XHRcdGRheWRyb3Bkb3duLmlubmVySFRNTCA9ICcnXG5cdFx0XHRtb250aGRyb3Bkb3duLmlubmVySFRNTCA9ICcnXG5cdFx0XHR5ZWFyZHJvcGRvd24uaW5uZXJIVE1MID0gJydcblxuXHRcdFx0dmFyIG9wdF9kZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0XHRvcHRfZGQudmFsdWUgPSAnREQnXG5cdCAgICAgICAgICBcdG9wdF9kZC50ZXh0ID0gJ0REJ1xuXHQgICAgICAgICAgXHRvcHRfZGQuaGlkZGVuID0gdHJ1ZVxuXHQgICAgICAgICAgXHRkYXlkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRfZGQpO1xuXHQgICAgICAgIHZhciBvcHRfbW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdFx0b3B0X21tLnZhbHVlID0gJ01NJ1xuXHQgICAgICAgICAgXHRvcHRfbW0udGV4dCA9ICdNTSdcblx0ICAgICAgICAgIFx0b3B0X21tLmhpZGRlbiA9IHRydWVcblx0ICAgICAgICAgIFx0bW9udGhkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRfbW0pO1xuXHQgICAgICAgIHZhciBvcHRfeXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdFx0b3B0X3l5LnZhbHVlID0gJ1lZWVknXG5cdCAgICAgICAgICBcdG9wdF95eS50ZXh0ID0gJ1lZWVknXG5cdCAgICAgICAgICBcdG9wdF95eS5oaWRkZW4gPSB0cnVlXG5cdCAgICAgICAgICBcdHllYXJkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRfeXkpO1xuXG5cdFx0XHRcdC8vIERheVxuXHRcdCAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8PSBkYXlzSW5DdXJyTW9udGg7IGkrKyl7XG5cdFx0ICAgICAgICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHQgICAgICAgICAgaWYoaTw9OSl7XG5cdFx0ICAgICAgICAgIFx0b3B0LnZhbHVlID0gJzAnICsgaTtcblx0XHQgICAgICAgICAgXHRvcHQudGV4dCA9ICcwJyArIGk7XG5cdFx0ICAgICAgICAgIH1lbHNle1xuXHRcdCAgICAgICAgICBcdG9wdC52YWx1ZSA9IGk7XG5cdFx0ICAgICAgICAgIFx0b3B0LnRleHQgPSBpO1xuXHRcdCAgICAgICAgICB9XG5cdFx0ICAgICAgICAgIGRheWRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdCk7XG5cdFx0ICAgICAgICB9XG5cblx0XHQgICAgICAgIC8vIE1vbnRoXG5cdFx0ICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgMTI7IGkrKyl7XG5cdFx0ICAgICAgICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHQgICAgICAgICAgb3B0LnZhbHVlID0gZGVmYXVsdF9tb250aHNbaV1cblx0XHQgICAgICAgICAgb3B0LnRleHQgPSBkZWZhdWx0X21vbnRoc1tpXVxuXHRcdCAgICAgICAgICBtb250aGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdCk7XG5cdFx0ICAgICAgICB9XG5cblx0XHQgICAgICAgIC8vIFllYXJcblx0XHQgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPD0gYWdlX3RocmVzaG9sZDsgaSsrKXtcblx0XHQgICAgICAgICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdCAgICAgICAgICBvcHQudmFsdWUgPSBpICsgeWVhcjtcblx0XHQgICAgICAgICAgb3B0LnRleHQgPSBpICsgeWVhcjtcblx0XHQgICAgICAgICAgeWVhcmRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdCk7XG5cdFx0ICAgICAgICB9XG5cblx0XHRcdC8vIGNoYW5nZSBoYW5kbGVyIGZvciBkYXlcblx0XHRcdGRheWRyb3Bkb3duLm9uY2hhbmdlID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIE5ld1NlbGVjdGVkZGF5cyA9IGRheWRyb3Bkb3duLnZhbHVlO1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHtkYXk6TmV3U2VsZWN0ZWRkYXlzfSwoKT0+e1xuXHRcdFx0XHRzZWxmLnN1Ym1pdERvYigpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cblx0XHRcdC8vIENoYW5nZSBoYW5kbGVyIGZvciBtb250aHNcblx0XHRcdG1vbnRoZHJvcGRvd24ub25jaGFuZ2UgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgbmV3TW9udGggPSBtb250aGRyb3Bkb3duLnZhbHVlXG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe21udGg6bmV3TW9udGh9LCgpPT57XG5cdFx0XHRcdHNlbGYuc3VibWl0RG9iKClcblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2hhbmdlIGhhbmRsZXIgZm9yIHllYXJcblx0XHRcdHllYXJkcm9wZG93bi5vbmNoYW5nZSA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBuZXdZZWFyID0geWVhcmRyb3Bkb3duLnZhbHVlO1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHt5ZWFyOm5ld1llYXJ9LCgpPT57XG5cdFx0XHRcdHNlbGYuc3VibWl0RG9iKClcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0ICAgIH1cbiAgXHR9XG5cbiAgXHRzdWJtaXREb2IoKXtcblx0bGV0IHNlbGYgPSAgdGhpc1xuICAgICAgaWYoc2VsZi5zdGF0ZS5kYXkgJiYgc2VsZi5zdGF0ZS5tbnRoICYmIHNlbGYuc3RhdGUueWVhcil7XG4gICAgICBcdGxldCBmaW5hbERhdGUgPSBzZWxmLnN0YXRlLnllYXIgKyAnLScrIHNlbGYuc3RhdGUubW50aCArICctJytzZWxmLnN0YXRlLmRheSBcbiAgICAgIFx0c2VsZi5zZXRTdGF0ZSh7XG4gICAgXHRcdGRvYiA6IGZpbmFsRGF0ZVxuICAgIFx0fSwoKT0+e1xuICAgIFx0XHRzZWxmLmhhbmRsZVN1Ym1pdCgpIFxuICAgIFx0fSlcbiAgICAgIH1cbiAgXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCBzaG93X2NyZWF0ZUFwaV9rZXlzX2FkdWx0ID0gW11cblx0XHRsZXQgc2hvd19jcmVhdGVBcGlfa2V5c19jaGlsZCA9IFtdXG5cdFx0bGV0IHNob3dfY3JlYXRlQXBpX2tleXNfY2hpbGQyID0gW11cblx0XHRsZXQgVXBsb2FkZWRfaW1hZ2VfZGF0YVxuXHRcdGxldCBjb21tb25Nc2dTcGFuID0gPHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snY29tbW9uX21lc3NhZ2UnXX08L3NwYW4+XG5cdFx0aWYodGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5KXtcblx0XHRcdGxldCBzaG93X2NyZWF0ZUFwaV9rZXlzID0gW11cblx0XHRcdGlmKE9iamVjdC5rZXlzKHRoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzQ2hpbGQpLmxlbmd0aCA+IDApe1xuXHRcdFx0T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnNDaGlsZCkubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkge1xuXHRcdFx0XHRpZihrZXkhPTAgJiYga2V5IT0xKXtcblx0XHRcdFx0XHRPYmplY3QuZW50cmllcyh2YWx1ZSkubWFwKGZ1bmN0aW9uKFtmaWVsZF9uYW1lLGZpZWxkX3ZhbHVlXSkge1xuXHRcdFx0XHRcdFx0aWYoa2V5ID09IDIpe1xuXHRcdFx0XHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkLnB1c2goZmllbGRfbmFtZSlcblx0XHRcdFx0XHRcdH1lbHNlIGlmKGtleSA9PSAzKXtcblx0XHRcdFx0XHRcdFx0c2hvd19jcmVhdGVBcGlfa2V5c19jaGlsZDIucHVzaChmaWVsZF9uYW1lKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRpZihPYmplY3Qua2V5cyh0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9ycykubGVuZ3RoID4gMCl7XG5cdFx0XHRcdE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG5cdFx0XHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzX2FkdWx0LnB1c2goa2V5KVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblx0XHRsZXQgRXJyb3JOYW1lSWRcblx0XHRpZih0aGlzLnByb3BzLnZhbGlkYXRpbmdOYW1lcy5sZW5ndGg+MCl7XG5cdFx0XHRFcnJvck5hbWVJZCA9IHRoaXMucHJvcHMudmFsaWRhdGluZ05hbWVzWzBdLnNwbGl0KCc9JylbMV1cblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzICYmIHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMubGVuZ3RoID4gMCl7XG5cdFx0XHRVcGxvYWRlZF9pbWFnZV9kYXRhID0gdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5maWx0ZXIoKHg9PnguaWQgPT0gdGhpcy5wcm9wcy5tZW1iZXJfaWQpKVxuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtc3ViLWZvcm1zIG1ydC0xMFwiIGlkPXtgbWVtYmVyXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3ViLWZvcm0taW5wdXQtZGF0YVwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOjEwfX0gPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudD9cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3ViLWZvcm0taGVkXCI+e3RoaXMucHJvcHMuaXNfY2hpbGRfb25seT8gYENoaWxkICR7dGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZH1gOmBTcG91c2VgfTwvcD5cblx0XHRcdFx0XHRcdFx0OjxwIGNsYXNzTmFtZT1cInN1Yi1mb3JtLWhlZFwiPnt0aGlzLnByb3BzLmlzX2NoaWxkX29ubHk/IGBDaGlsZCAke3RoaXMucHJvcHMubWVtYmVyX3ZpZXdfaWQtMX1gOmBTcG91c2VgfTwvcD5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuc2hvd19zZWxlY3RlZF9wcm9maWxlcy5sZW5ndGg+MD9cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3ViLWZvcm0taGVkLWNsaWNrXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRzaG93UG9wdXA6IHRydWUsIHVzZXJQcm9maWxlczogdGhpcy5wcm9wcy5VU0VSfSl9PlxuXHRcdFx0XHRcdFx0U2VsZWN0IGZyb20gcHJvZmlsZVxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yZ3QtYXJ3LnN2Z1wifSAvPlxuXHRcdFx0XHRcdDwvZGl2PjonJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7Lyo8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVMYXN0bmFtZS5iaW5kKHRoaXMpfSBzdHlsZT17eydmb250V2VpZ2h0JzogJzQwMCcsICdmb250U2l6ZSc6ICcxNCd9fT5JIGRvbnQgaGF2ZSBsYXN0IG5hbWU8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5ub19sbmFtZX0gdmFsdWU9XCJvblwiLz5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+PC9sYWJlbD4qL31cblx0XHRcdFx0XHQ8L2Rpdj4gXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0JyBzdHlsZT17e3BhZGRpbmc6JzEwcHgnfX0gPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCIgc3R5bGU9e3twYWRkaW5nOjB9fT5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlzX2NoaWxkX29ubHk/XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0ey8qIDxidXR0b24gY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUudGl0bGUgPT0gJ21yLicgPyAnYnRuLWFjdGl2ZScgOiAnJ31gfSBuYW1lPVwidGl0bGVcIiB2YWx1ZT0nbXIuJyBkYXRhLXBhcmFtPSd0aXRsZScgb25DbGljaz17dGhpcy5oYW5kbGVUaXRsZS5iaW5kKHRoaXMsICdtci4nKX0gPk1hc3RlcjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS50aXRsZSA9PSAnbWlzcycgPyAnYnRuLWFjdGl2ZScgOiAnJ31gfSBuYW1lPVwidGl0bGVcIiB2YWx1ZT0nbWlzcycgZGF0YS1wYXJhbT0ndGl0bGUnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGUuYmluZCh0aGlzLCAnbWlzcycpfSA+TWlzczwvYnV0dG9uPiAqL31cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0OjxkaXY+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLnRpdGxlID09ICdtci4nID8gJ2J0bi1hY3RpdmUnIDogJyd9YH0gbmFtZT1cInRpdGxlXCIgdmFsdWU9J21yLicgZGF0YS1wYXJhbT0ndGl0bGUnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGUuYmluZCh0aGlzLCAnbXIuJyl9ID5Nci48L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUudGl0bGUgPT0gJ21ycy4nID8gJ2J0bi1hY3RpdmUnIDogJyd9YH0gdmFsdWU9J21ycy4nIG5hbWU9XCJ0aXRsZVwiIGRhdGEtcGFyYW09J3RpdGxlJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVRpdGxlLmJpbmQodGhpcywgJ21ycy4nKX0gPk1ycy48L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQhdGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5ICYmIHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZigndGl0bGUnKT4gLTE/PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCIgc3R5bGU9e3ttYXJnaW5Ub3A6Jy0xM3B4J319Pnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ2NvbW1vbl9tZXNzYWdlJ119PC9zcGFuPjonJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlT3RoZXJFcnJvcnMuaW5kZXhPZigndGl0bGUnKT4gLTE/XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIiBzdHlsZT17e21hcmdpblRvcDonLTEzcHgnfX0+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snc2FtZUdlbmRlclRpdGxlJ119PC9zcGFuPjonJ1x0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtcdFxuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5P3RoaXMucHJvcHMubWVtYmVyX3ZpZXdfaWQgPT0gMiAmJiBzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkLmluZGV4T2YoJ3RpdGxlJyk+IC0xP1xuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzQ2hpbGRbdGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZF0udGl0bGVbMF19PC9zcGFuPjp0aGlzLnByb3BzLm1lbWJlcl92aWV3X2lkID09IDMgJiYgc2hvd19jcmVhdGVBcGlfa2V5c19jaGlsZDIuaW5kZXhPZigndGl0bGUnKT4gLTE/PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzQ2hpbGRbdGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZF0udGl0bGVbMF19PC9zcGFuPjonJ1xuXHRcdFx0XHRcdFx0OnNob3dfY3JlYXRlQXBpX2tleXNfYWR1bHQuaW5kZXhPZigndGl0bGUnKT4gLTE/XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnMudGl0bGVbMF19PC9zcGFuPjonJ1x0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlzX2NoaWxkX29ubHk/XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdHsvKjxzZWxlY3QgY2xhc3NOYW1lPVwiaW5zLXNlbGVjdC1kcm9wXCIgaWQ9e2ByZWxhdGlvbl9kcm9wZG93bl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVsYXRpb24uYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIG5hbWU9e2ByZWxhdGlvbl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IGRhdGEtcGFyYW09XCJyZWxhdGlvblwiIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbiB2YWx1ZT1cInJlbGF0aW9uXCI+UkVMQVRJT048L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gbmFtZT17YHJlbGF0aW9uXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gZGF0YS1wYXJhbT1cInJlbGF0aW9uXCIgdmFsdWU9XCJzb25cIj5Tb248L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gbmFtZT17YHJlbGF0aW9uXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gZGF0YS1wYXJhbT1cInJlbGF0aW9uXCIgdmFsdWU9XCJkYXVnaHRlclwiPkRhdWdodGVyPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy91c2VyLTAxLnN2Z1wifSAvPiovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5Tb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9e2ByZWxhdGlvbl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IGRhdGEtcGFyYW09J3JlbGF0aW9uJyB2YWx1ZT0nc29uJyBjaGVja2VkPXt0aGlzLnN0YXRlLnJlbGF0aW9uID09PSAnc29uJ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlUmVsYXRpb24uYmluZCh0aGlzLCAnc29uJyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+RGF1Z2h0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIGRhdGEtcGFyYW09J3JlbGF0aW9uJyBuYW1lPXtgcmVsYXRpb25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSB2YWx1ZT0nZGF1Z2h0ZXInIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVsYXRpb24gPT09ICdkYXVnaHRlcid9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJlbGF0aW9uLmJpbmQodGhpcywgJ2RhdWdodGVyJyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZigncmVsYXRpb24nKT4gLTE/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCIgc3R5bGU9e3ttYXJnaW5Ub3A6Jy0xM3B4J319Pnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ2NvbW1vbl9tZXNzYWdlJ119PC9zcGFuPjonJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD17YGlzbi1waW5fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbFwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cInJlbGF0aW9uXCIgbmFtZT1cInJlbGF0aW9uXCIgZGF0YS1wYXJhbT0ncmVsYXRpb24nIHZhbHVlPSdTcG91c2UnIGRpc2FibGVkPVwiZGlzYWJsZWRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3VzZXItMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1yaWdodCBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0gaWQ9e2BuYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ25hbWUnKT4gLTF8fCBFcnJvck5hbWVJZCA9PSB0aGlzLnByb3BzLm1lbWJlcl9pZD8nZmlsbC1lcnJvcic6Jyd9YH0gcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwiZmlyc3RfbmFtZVwiIG5hbWU9XCJuYW1lXCIgZGF0YS1wYXJhbT0nbmFtZScgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ25hbWUnKX0gb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMsZmFsc2UpfSBvbktleVByZXNzPXt0aGlzLmhhbmRsZU5hbWVDaGFyYWN0ZXJzLmJpbmQodGhpcywnbmFtZScpfS8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9e2BuYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+PHNwYW4gY2xhc3NOYW1lPVwibGFiZWxEb3RcIj48L3NwYW4+Rmlyc3QgTmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy91c2VyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1x0XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5P3RoaXMucHJvcHMubWVtYmVyX3ZpZXdfaWQgPT0gMiAmJiBzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkLmluZGV4T2YoJ2ZpcnN0X25hbWUnKT4gLTE/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydtYXhfY2hhcmFjdGVyJ119PC9zcGFuPjp0aGlzLnByb3BzLm1lbWJlcl92aWV3X2lkID09IDMgJiYgc2hvd19jcmVhdGVBcGlfa2V5c19jaGlsZDIuaW5kZXhPZignZmlyc3RfbmFtZScpPiAtMT88c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydtYXhfY2hhcmFjdGVyJ119PC9zcGFuPjonJ1xuXHRcdFx0XHRcdFx0XHRcdDpzaG93X2NyZWF0ZUFwaV9rZXlzX2FkdWx0LmluZGV4T2YoJ2ZpcnN0X25hbWUnKT4gLTE/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snbWF4X2NoYXJhY3RlciddfTwvc3Bhbj46JydcdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ25hbWUnKT4gLTE/XG5cdFx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbjonJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRFcnJvck5hbWVJZCA9PSB0aGlzLnByb3BzLm1lbWJlcl9pZD88c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIiBzdHlsZT17e3dpZHRoOiczMjBweCd9fT57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydzYW1lTmFtZSddfTwvc3Bhbj46Jydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1yaWdodCBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0gaWQ9e2BtaWRkbGVfbmFtZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwibWlkZGxlX25hbWVcIiBuYW1lPVwibWlkZGxlX25hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ub19sbmFtZT8nJzp0aGlzLnN0YXRlLm1pZGRsZV9uYW1lfSAgZGF0YS1wYXJhbT0nbWlkZGxlX25hbWUnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsJ21pZGRsZV9uYW1lJyl9IG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzLGZhbHNlKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUubm9fbG5hbWU/J2Rpc2FibGVkJzpcIlwifSBvbktleVByZXNzPXt0aGlzLmhhbmRsZU5hbWVDaGFyYWN0ZXJzLmJpbmQodGhpcywnbWlkZGxlX25hbWUnKX0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj17YG1pZGRsZV9uYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+TWlkZGxlIE5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdXNlci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHtcdFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNfY2hpbGRfb25seT90aGlzLnByb3BzLm1lbWJlcl92aWV3X2lkID09IDIgJiYgc2hvd19jcmVhdGVBcGlfa2V5c19jaGlsZC5pbmRleE9mKCdtaWRkbGVfbmFtZScpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ21heF9jaGFyYWN0ZXInXX08L3NwYW4+OnRoaXMucHJvcHMubWVtYmVyX3ZpZXdfaWQgPT0gMyAmJiBzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkMi5pbmRleE9mKCdtaWRkbGVfbmFtZScpPiAtMT88c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydtYXhfY2hhcmFjdGVyJ119PC9zcGFuPjonJ1xuXHRcdFx0XHRcdFx0XHRcdDpzaG93X2NyZWF0ZUFwaV9rZXlzX2FkdWx0LmluZGV4T2YoJ21pZGRsZV9uYW1lJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ21heF9jaGFyYWN0ZXInXX08L3NwYW4+OicnXHRcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1yaWdodCAgXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319IGlkPXtgbGFzdF9uYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2xhc3RfbmFtZScpPiAtMT8nZmlsbC1lcnJvcic6Jyd9YH0gcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwibGFzdF9uYW1lXCIgbmFtZT1cImxhc3RfbmFtZVwiIGRhdGEtcGFyYW09J2xhc3RfbmFtZScgdmFsdWU9e3RoaXMuc3RhdGUubm9fbG5hbWU/Jyc6dGhpcy5zdGF0ZS5sYXN0X25hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdsYXN0X25hbWUnKX0gb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMsZmFsc2UpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5ub19sbmFtZT8nZGlzYWJsZWQnOlwiXCJ9IG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlTmFtZUNoYXJhY3RlcnMuYmluZCh0aGlzLCdsYXN0X25hbWUnKX0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj17YGxhc3RfbmFtZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PjxzcGFuIGNsYXNzTmFtZT1cImxhYmVsRG90XCI+PC9zcGFuPkxhc3QgTmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy91c2VyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1x0XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5P3RoaXMucHJvcHMubWVtYmVyX3ZpZXdfaWQgPT0gMiAmJiBzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkLmluZGV4T2YoJ2xhc3RfbmFtZScpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ21heF9jaGFyYWN0ZXInXX08L3NwYW4+OnRoaXMucHJvcHMubWVtYmVyX3ZpZXdfaWQgPT0gMyAmJiBzaG93X2NyZWF0ZUFwaV9rZXlzX2NoaWxkMi5pbmRleE9mKCdsYXN0X25hbWUnKT4gLTE/PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snbWF4X2NoYXJhY3RlciddfTwvc3Bhbj46Jydcblx0XHRcdFx0XHRcdFx0XHQ6c2hvd19jcmVhdGVBcGlfa2V5c19hZHVsdC5pbmRleE9mKCdsYXN0X25hbWUnKT4gLTE/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snbWF4X2NoYXJhY3RlciddfTwvc3Bhbj46JydcdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2xhc3RfbmFtZScpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuOicnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIiBzdHlsZT17e21hcmdpblRvcDonLTEwcHgnfX0gPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1kdGxzLWNoa1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieCBmdy01MDBcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVMYXN0bmFtZS5iaW5kKHRoaXMpfSBzdHlsZT17e2ZvbnRTaXplOiAxMiwgcGFkZGluZ0xlZnQ6MjQsIGxpbmVIZWlnaHQ6JzE2cHgnfX0+SSBkb250IGhhdmUgYSBsYXN0IG5hbWU8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5ub19sbmFtZX0gdmFsdWU9XCJvblwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmsgc21hbGwtY2hlY2ttYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5P1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5NYWxlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT17YGdlbmRlcl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IGRhdGEtcGFyYW09J2dlbmRlcicgdmFsdWU9J20nIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09PSAnbSd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmRlci5iaW5kKHRoaXMsICdtJyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5GZW1hbGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBkYXRhLXBhcmFtPSdnZW5kZXInIG5hbWU9e2BnZW5kZXJfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSB2YWx1ZT0nZicgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT09ICdmJ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZGVyLmJpbmQodGhpcywgJ2YnKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cdFxuXHRcdFx0XHRcdFx0XHRcdFx0OjxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+TWFsZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9e2BnZW5kZXJfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBkYXRhLXBhcmFtPSdnZW5kZXInIHZhbHVlPSdtJyBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PT0gJ20nfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVHZW5kZXIuYmluZCh0aGlzLCAnbScpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+RmVtYWxlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgZGF0YS1wYXJhbT0nZ2VuZGVyJyBuYW1lPXtgZ2VuZGVyXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9J2YnIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09PSAnZid9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmRlci5iaW5kKHRoaXMsICdmJyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPk90aGVyc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgZGF0YS1wYXJhbT0nZ2VuZGVyJyBuYW1lPXtgZ2VuZGVyXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9J28nIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09PSAnbyd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmRlci5iaW5kKHRoaXMsICdvJyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHQhdGhpcy5wcm9wcy5pc19jaGlsZF9vbmx5ICYmIHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZ2VuZGVyJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW46Jydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZU90aGVyRXJyb3JzLmluZGV4T2YoJ2dlbmRlcicpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydzaG91bGRHZW5kZXJUaXRsZSddfTwvc3Bhbj46JydcdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgbWItMFwiPlxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMub3BlbkRhdGVNb2RhbC5iaW5kKHRoaXMpfSBpZD17YGlzbi1kYXRlXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgdGV4dC1sZWZ0ICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdkb2InKT4gLTE/J2ZpbGwtZXJyb3InOicnfWB9IHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cImRvYlwiIG5hbWU9XCJkb2JcIiBkYXRhLXBhcmFtPSdkb2InIHZhbHVlPXt0aGlzLnN0YXRlLmRvYj90aGlzLnN0YXRlLmRvYjoneXl5eS9tbS9kZCd9XG5cdFx0XHRcdFx0XHRcdFx0Lz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWxcIiBodG1sRm9yPVwiaW5zLWRhdGVcIj4qRGF0ZSBvZiBiaXJ0aDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYWxlbmRhci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHR7Lypcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5kYXRlTW9kYWwgPyA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLW92ZXJsYXlcIj48ZGl2IGNsYXNzTmFtZT1cImRhdGUtcGlja2VyLW1vZGFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PENhbGVuZGFyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93V2Vla051bWJlcj17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e21vbWVudCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZVNwYW4pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWREYXRlPXsoZGF0ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZGF0ZS5kaWZmKG1vbWVudCgobmV3IERhdGUpKSwgJ2RheXMnKSAgPiAwIHx8IGRhdGUuZGlmZihtb21lbnQoKG5ldyBEYXRlKSksICdkYXlzJykgPiA0MFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dUb2RheSA9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9e3RoaXMuc2VsZWN0RGF0ZUZyb21DYWxlbmRhci5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PjwvZGl2PiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdCovfVxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8Zm9ybSBhY3Rpb249XCJcIiBuYW1lPVwic29tZWZvcm1cIj5cblx0XHRcdFx0XHRcdFx0ICAgICAgPHNlbGVjdCBpZD17YGRheWRyb3Bkb3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9e3RoaXMuc3RhdGUuZGF5fT48L3NlbGVjdD4gXG5cdFx0XHRcdFx0XHRcdCAgICAgIDxzZWxlY3QgaWQ9e2Btb250aGRyb3Bkb3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9e3RoaXMuc3RhdGUubW50aH0+PC9zZWxlY3Q+IFxuXHRcdFx0XHRcdFx0XHQgICAgICA8c2VsZWN0IGlkPXtgeWVhcmRyb3Bkb3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9e3RoaXMuc3RhdGUueWVhcn0+PC9zZWxlY3Q+IFxuXHRcdFx0XHRcdFx0XHQgICAgPC9mb3JtPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYi1zZWxlY3QtZGl2IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9iLXNlbGVjdCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9e2BkYXlkcm9wZG93bl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IHZhbHVlPXt0aGlzLnN0YXRlLmRheX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBoaWRkZW4+REQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZG9iLWRvd24taWNvblwiIHN0eWxlPXt7cmlnaHQgOiAnNHB4J319IHNyYz1cIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Itc2VsZWN0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBpZD17YG1vbnRoZHJvcGRvd25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSB2YWx1ZT17dGhpcy5zdGF0ZS5tbnRofT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGhpZGRlbj5NTTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkb2ItZG93bi1pY29uXCIgc3R5bGU9e3tyaWdodCA6ICc0cHgnfX0gc3JjPVwiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYi1zZWxlY3QgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPXtgeWVhcmRyb3Bkb3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9e3RoaXMuc3RhdGUueWVhcn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBoaWRkZW4+WVlZWTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkb2ItZG93bi1pY29uXCIgc3R5bGU9e3tyaWdodCA6ICczcHgnfX0gc3JjPVwiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7XHRcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlzX2NoaWxkX29ubHk/dGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZCA9PSAyICYmIHNob3dfY3JlYXRlQXBpX2tleXNfY2hpbGQuaW5kZXhPZignZG9iJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3ttYXJnaW5Ub3A6ICcwcHgnfX0gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzQ2hpbGRbdGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZF0uZG9iWzBdfTwvc3Bhbj46dGhpcy5wcm9wcy5tZW1iZXJfdmlld19pZCA9PSAzICYmIHNob3dfY3JlYXRlQXBpX2tleXNfY2hpbGQyLmluZGV4T2YoJ2RvYicpPiAtMT88c3BhbiBzdHlsZT17e21hcmdpblRvcDogJzBweCd9fSBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnNDaGlsZFt0aGlzLnByb3BzLm1lbWJlcl92aWV3X2lkXS5kb2JbMF19PC9zcGFuPjonJ1xuXHRcdFx0XHRcdFx0XHRcdDpzaG93X2NyZWF0ZUFwaV9rZXlzX2FkdWx0LmluZGV4T2YoJ2RvYicpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17e21hcmdpblRvcDogJzBweCd9fSBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnMuZG9iWzBdfTwvc3Bhbj46JydcdFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2RvYicpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlzX2NoaWxkX29ubHk/PHNwYW4gc3R5bGU9e3ttYXJnaW5Ub3A6ICcwcHgnfX0gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snY2hpbGRfYWdlJ119PC9zcGFuPjpcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17e21hcmdpblRvcDogJzBweCd9fSBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydhZHVsdF9hZ2UnXX08L3NwYW4+OicnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVEb2JFcnJvcnMuaW5kZXhPZignZG9iJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNfY2hpbGRfb25seT88c3BhbiBzdHlsZT17e21hcmdpblRvcDogJzBweCd9fSBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydjaGlsZEFnZURpZmYnXX08L3NwYW4+OicnOicnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50ICYmIHRoaXMuc3RhdGUuaXNfY2hhbmdlP1xuXHRcdFx0XHRcdFx0PEluc3VyYW5jZVByb29mcyB7Li4udGhpcy5wcm9wc30vPlxuXHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5zaG93UG9wdXAgP1xuXHRcdFx0XHRcdDxJbnN1clBvcHVwIHsuLi50aGlzLnN0YXRlLnVzZXJQcm9maWxlc30gey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZD17dGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkfSBcblx0XHRcdFx0XHRcdG1lbWJlcl9pZD17dGhpcy5wcm9wcy5tZW1iZXJfaWR9IFxuXHRcdFx0XHRcdFx0Y2xvc2VQb3B1cD17dGhpcy50b2dnbGVQb3B1cC5iaW5kKHRoaXMpfSBcblx0XHRcdFx0XHRcdGlzU2VsZWN0cHJvZmlsZSA9IHt0cnVlfSBcblx0XHRcdFx0XHRcdHNlbGZfZGF0YV92YWx1ZXMgPXt0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdGhpcy5wcm9wcy5tZW1iZXJfaWRdfVxuXHRcdFx0XHRcdFx0aGlkZVNlbGVjdFByb2ZpbGVQb3B1cD17dGhpcy5oaWRlU2VsZWN0UHJvZmlsZVBvcHVwLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0aXNfY2hpbGRfb25seSA9IHt0aGlzLnByb3BzLmlzX2NoaWxkX29ubHl9XG5cdFx0XHRcdFx0Lz4gOiAnJ1xuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VPdGhlcnMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuY29uc3QgQ29tcHJlc3MgPSByZXF1aXJlKCdjb21wcmVzcy5qcycpXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tbW9ucy9Mb2FkZXInXG5jbGFzcyBJbnN1cmFuY2VQcm9vZnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YVVybDogbnVsbCxcbiAgICAgICAgICAgIHpvb21JbWFnZVVybDogbnVsbCxcbiAgICAgICAgICAgIHpvb21JbWFnZTogZmFsc2UsXG4gICAgICAgICAgICBvcGVuUGRmOiBmYWxzZSxcbiAgICAgICAgICAgIG9wZW5QZGZVcmw6IG51bGwsXG4gICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBpY2tGaWxlKG1lbWJlcl9pZCwgZSkgeyAvLyB0byBzZWxlY3QgZmlsZVxuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgICAgICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5maWxlc1swXSAmJiBlLnRhcmdldC5maWxlc1swXS5uYW1lLmluY2x1ZGVzKCcucGRmJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENyb3AobnVsbCwgbWVtYmVyX2lkLCBmaWxlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wcmVzcyA9IG5ldyBDb21wcmVzcygpXG4gICAgICAgICAgICAgICAgY29tcHJlc3MuY29tcHJlc3MoW2ZpbGVdLCB7XG4gICAgICAgICAgICAgICAgICAgIHF1YWxpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcxID0gcmVzdWx0c1swXVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlNjRzdHIgPSBpbWcxLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nRXh0ID0gaW1nMS5leHRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IENvbXByZXNzLmNvbnZlcnRCYXNlNjRUb0ZpbGUoYmFzZTY0c3RyLCBpbWdFeHQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QmFzZTY0KGZpbGUsIChkYXRhVXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENyb3AoZGF0YVVybCwgbWVtYmVyX2lkLCBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFVcmwgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiRXJyb3IgdXBsb2FkaW5nIGltYWdlLlwiIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCYXNlNjQoZmlsZSwgY2IpIHtcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNiKHJlYWRlci5yZXN1bHQpXG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5pc2hDcm9wKGRhdGFVcmwsIG1lbWJlcl9pZCwgZmlsZSkgeyAvLyBjcm9wcGluZyB0aGUgaW1hZ2VcbiAgICAgICAgbGV0IGZpbGVfYmxvYl9kYXRhXG4gICAgICAgIGlmIChkYXRhVXJsKSB7XG4gICAgICAgICAgICBmaWxlX2Jsb2JfZGF0YSA9IHRoaXMuZGF0YVVSSXRvQmxvYihkYXRhVXJsKVxuICAgICAgICB9XG4gICAgICAgIGxldCBtZW1fZGF0YSA9IHt9XG4gICAgICAgIGxldCBleGlzdGluZ0RhdGFcbiAgICAgICAgbGV0IGltZ190YWcgPSBcImRvY3VtZW50X2ltYWdlXCJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkYXRhVXJsOiBudWxsLGlzTG9hZGluZzp0cnVlXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGltZ190YWcsIGZpbGUsIFwiaW1hZ2VGaWxlbmFtZS5wZGZcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChpbWdfdGFnLCBmaWxlX2Jsb2JfZGF0YSwgXCJpbWFnZUZpbGVuYW1lLmpwZWdcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBsb2FkUHJvb2YoZm9ybV9kYXRhLCBtZW1iZXJfaWQsICdpbWFnZScsIChkYXRhLCBlcnIpID0+IHsgLy8gc3RvcmUgc2VsZWN0ZWQgcHJvb2YgdG8gZGF0YWJhc2VcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pZCA9IGRhdGEuZGF0YS5tZW1iZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWVtX2RhdGEuaW1hZ2VzID0gW11cbiAgICAgICAgICAgICAgICAgICAgLy8gbWVtX2RhdGEuaW1nX2lkcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcz1bXVxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcykubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmlkID09IG1lbWJlcl9pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lbV9kYXRhLmltYWdlcyA9IHZhbHVlLmltYWdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWdfaWRzID0gdmFsdWUuaW1nX2lkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1fZGF0YS5pbWdfcGF0aF9pZHMgPSB2YWx1ZS5pbWdfcGF0aF9pZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWVtX2RhdGEuaW1hZ2VzLnB1c2goZGF0YS5kYXRhLmRvY3VtZW50X2ltYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWdfaWRzLnB1c2goZGF0YS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtX2RhdGEuaW1nX3BhdGhfaWRzLnB1c2goe2lkOiBkYXRhLmlkLCBpbWFnZTpkYXRhLmRhdGEuZG9jdW1lbnRfaW1hZ2V9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWFnZXM9W11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWVtX2RhdGEuaW1nX2lkcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lbV9kYXRhLmltYWdlcy5wdXNoKGRhdGEuZGF0YS5kb2N1bWVudF9pbWFnZSkgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWdfaWRzLnB1c2goZGF0YS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtX2RhdGEuaW1nX3BhdGhfaWRzLnB1c2goe2lkOiBkYXRhLmlkLCBpbWFnZTpkYXRhLmRhdGEuZG9jdW1lbnRfaW1hZ2V9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWFnZXMucHVzaChkYXRhLmRhdGEuZG9jdW1lbnRfaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtZW1fZGF0YS5pbWdfaWRzLnB1c2goZGF0YS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbV9kYXRhLmltZ19wYXRoX2lkcy5wdXNoKHtpZDogZGF0YS5pZCwgaW1hZ2U6ZGF0YS5kYXRhLmRvY3VtZW50X2ltYWdlfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6ZmFsc2V9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlTWVtYmVyUHJvb2ZzKG1lbV9kYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGF0YVVSSXRvQmxvYihkYXRhVVJJKSB7XG4gICAgICAgIHZhciBiaW5hcnkgPSBhdG9iKGRhdGFVUkkuc3BsaXQoJywnKVsxXSk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpbmFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyYXkucHVzaChiaW5hcnkuY2hhckNvZGVBdChpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShhcnJheSldLCB7IHR5cGU6ICdpbWFnZS9qcGVnJyB9KTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlSW1hZ2UoaW1nKXtcbiAgICAgICAgbGV0IFVwbG9hZGVkX2ltYWdlX2RhdGEgPSBbXVxuICAgICAgICBVcGxvYWRlZF9pbWFnZV9kYXRhID0gdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5maWx0ZXIoKHggPT4geC5pZCA9PSB0aGlzLnByb3BzLm1lbWJlcl9pZCkpXG4gICAgICAgIFVwbG9hZGVkX2ltYWdlX2RhdGFbMF0uaW1nX3BhdGhfaWRzLm1hcCgoZGF0YSxpKT0+e1xuICAgICAgICAgICAgICAgIGRhdGEubWVtYmVyX2lkPXRoaXMucHJvcHMubWVtYmVyX2lkXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5pbWFnZSA9PSBpbWcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZU1lbWJlclByb29mKGRhdGEpIC8vIHRvIHJlbW92ZSBjYW5jZWxsZWQgdXBsb2FkZWQgaW1hZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IFVwbG9hZGVkX2ltYWdlX2RhdGEgPSBbXVxuICAgICAgICBsZXQgaW1nX3VybCA9IFtdXG4gICAgICAgIGxldCBwZGZfdXJsID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMgJiYgdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBVcGxvYWRlZF9pbWFnZV9kYXRhID0gdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5maWx0ZXIoKHggPT4geC5pZCA9PSB0aGlzLnByb3BzLm1lbWJlcl9pZCkpXG4gICAgICAgICAgICBpZihVcGxvYWRlZF9pbWFnZV9kYXRhLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIFVwbG9hZGVkX2ltYWdlX2RhdGFbMF0uaW1nX3BhdGhfaWRzLm1hcCgoZGF0YSwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuaW1hZ2UuaW5jbHVkZXMoJ3BkZicpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBkZl91cmwucHVzaChkYXRhLmltYWdlKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ191cmwucHVzaChkYXRhLmltYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvd191cGxvYWQgPSB0cnVlXG4gICAgICAgIGlmKChpbWdfdXJsICYmIGltZ191cmwubGVuZ3RoID4gMCkgfHwgKHBkZl91cmwgJiYgcGRmX3VybC5sZW5ndGggPiAwKSl7XG4gICAgICAgICAgICBzaG93X3VwbG9hZCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpbnN1cmFuY2UtcHJvb2ZzLWNvbnRcIiBzdHlsZT17e21hcmdpbjogJzEwcHggLTEwcHggMHB4IC0xMHB4J319PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgLyogICAgdGhpcy5wcm9wcy5lbmRvcnNlbWVudEVycm9yLmluZGV4T2YodGhpcy5wcm9wcy5tZW1iZXJfaWQpICE9IC0xICYmIGltZ191cmwubGVuZ3RoPT0wP1xuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucy1wcmYtZXJyb3ItbXNnXCI+KlBsZWFzZSB1cGxvYWQgdGhlIHJlcXVpcmVkIGRvY3VtZW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICA6JycqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtYWRkYnRuLWNvbnRcIiBpZD17YG1lbWJlcl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfV91cGxvYWRgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy11cGxkLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtc2ItZnJzdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5zLXdhcm5pbmcuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy11cGxvYWQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLXVwbG9hZC1wYXJhLXRleHRcIj5VcGxvYWQgYW55IGdvdmVybmVtZW50IElEIHByb29mPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLXVwbG9hZC1zdWItdGV4dFwiPkFhZGhhciBjYXJkLCBQYXNzcG9ydCwgRHJpdmluZyBMaWNlbnNlLCBWb3RlciBJRCBDYXJkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLWZpbGUtdHlsZVwiPkZpbGUgdHlwZToganBnLCBqcGVnLCBwbmcsIHBkZiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd191cGxvYWQ/XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucy1wcm9vZi11cGxvYWQtYnRuXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl8nICsgdGhpcy5wcm9wcy5tZW1iZXJfaWQgKyAnX2Zyb250JykuY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl8nICsgdGhpcy5wcm9wcy5tZW1iZXJfaWQgKyAnX2Zyb250JykudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5zLXVwLWljby5zdmdcIn0vPiBVcGxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBpZD17YGltYWdlRmlsZVBpY2tlcl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfV9mcm9udGB9IG9uQ2hhbmdlPXt0aGlzLnBpY2tGaWxlLmJpbmQodGhpcywgdGhpcy5wcm9wcy5tZW1iZXJfaWQpfSBhY2NlcHQ9XCJpbWFnZS94LXBuZyxpbWFnZS9qcGVnLGltYWdlL2pwZywucGRmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGluZyAmJiBzaG93X3VwbG9hZD9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXByZi1pbWctZ3JkIGQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1mb3ItY2hhdC1kaXYgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyLWZvci1jaGF0IG1iLTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOicnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVXBsb2FkZWRfaW1hZ2VfZGF0YSAmJiBVcGxvYWRlZF9pbWFnZV9kYXRhLmxlbmd0aCA+IDAgJiYgIXNob3dfdXBsb2FkP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1pbWctc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ191cmwgJiYgaW1nX3VybC5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nX3VybC5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiaW5zLXByZi1pbWctZ3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW5zLXVwLWltZy1pY1wiIHNyYz17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucy1wcmYtY2xzXCIgb25DbGljaz17dGhpcy5yZW1vdmVJbWFnZS5iaW5kKHRoaXMsIGRhdGEpfSBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZGZfdXJsICYmIHBkZl91cmwubGVuZ3RoPjAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZGZfdXJsLm1hcCgoZGF0YSwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmRcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW5zLXVwLWltZy1pY1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BkZi5qcGdcIn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnMtcHJmLWNsc1wiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSW1hZ2UuYmluZCh0aGlzLCBkYXRhKX0gc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvaWNvbnMvY2xvc2UucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0xvYWRpbmc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItZm9yLWNoYXQtZGl2IG10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXItZm9yLWNoYXQgbWItMCcgc3R5bGU9e3t3aWR0aDonNTBweDsnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoaW1nX3VybCAmJiBpbWdfdXJsLmxlbmd0aCkgfHwgKHBkZl91cmwgJiYgcGRmX3VybC5sZW5ndGgpKSA+PSA1PycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cImlucy1wcmYtYWRkTW9yZVwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl8nICsgdGhpcy5wcm9wcy5tZW1iZXJfaWQgKyAnX2JhY2snKS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZUZpbGVQaWNrZXJfJyArIHRoaXMucHJvcHMubWVtYmVyX2lkICsgJ19iYWNrJykudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5zLWFkZGljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2lucy1hZGQtaWNvLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gaWQ9e2BpbWFnZUZpbGVQaWNrZXJfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1fYmFja2B9IG9uQ2hhbmdlPXt0aGlzLnBpY2tGaWxlLmJpbmQodGhpcywgdGhpcy5wcm9wcy5tZW1iZXJfaWQpfSBhY2NlcHQ9XCJpbWFnZS94LXBuZyxpbWFnZS9qcGVnLGltYWdlL2pwZywucGRmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cblxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEluc3VyYW5jZVByb29mcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyJ1xuaW1wb3J0IFN0YXRlQ2l0eUF1dG9Db21wbGV0ZSBmcm9tICcuL3N0YXRlQ2l0eUF1dG9Db21wbGV0ZS5qcydcbmltcG9ydCBJbnN1cmFuY2VQcm9vZnMgZnJvbSAnLi9pbnN1cmFuY2VQcm9vZnMuanMnXG5pbXBvcnQgVmVyaWZ5RW1haWwgZnJvbSAnLi92ZXJpZnlFbWFpbC5qcydcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpXG5cbmNsYXNzIEluc3VyYW5jZVNlbGYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuYW1lOiAnJyxcblx0XHRcdG1pZGRsZV9uYW1lOiAnJyxcblx0XHRcdGxhc3RfbmFtZTogJycsXG5cdFx0XHRlbWFpbDogJycsXG5cdFx0XHRnZW5kZXI6ICcnLFxuXHRcdFx0ZG9iOiAnJyxcblx0XHRcdHBpbmNvZGU6ICcnLFxuXHRcdFx0YWRkcmVzczogJycsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRpZDogJycsXG5cdFx0XHRyZWxhdGlvbjogJ3NlbGYnLFxuXHRcdFx0bWVtYmVyX3R5cGU6ICdhZHVsdCcsXG5cdFx0XHRzdGF0ZTogJycsXG5cdFx0XHR0b3duOiAnJyxcblx0XHRcdGRpc3RyaWN0OiAnJyxcblx0XHRcdHByb2ZpbGVfZmxhZzogdHJ1ZSxcblx0XHRcdC8vIHNob3dfbG5hbWU6IHRoaXMucHJvcHMubm9fbG5hbWUsXG5cdFx0XHQvLyBzaG93X2xuYW1lX2ZsYWc6dGhpcy5wcm9wcy5ub19sbmFtZSxcblx0XHRcdHByb2ZpbGVfaWQ6IG51bGwsXG5cdFx0XHRkYXRlTW9kYWw6IGZhbHNlLFxuXHRcdFx0c3RhdGVfY29kZTogJycsXG5cdFx0XHRkaXN0cmljdF9jb2RlOiAnJyxcblx0XHRcdHRvd25fY29kZTogJycsXG5cdFx0XHRzZWxlY3RlZERhdGVTcGFuOiBuZXcgRGF0ZSgpLFxuXHRcdFx0bm9fbG5hbWU6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZU5hbWU6IGZhbHNlLFxuXHRcdFx0ZGlzYWJsZUVtYWlsOiBmYWxzZSxcblx0XHRcdGRpc2FibGVEb2I6IGZhbHNlLFxuXHRcdFx0aXNfY2hhbmdlOiBmYWxzZSxcblx0XHRcdHllYXI6IG51bGwsXG5cdFx0XHRtbnRoOiBudWxsLFxuXHRcdFx0ZGF5OiBudWxsLFxuXHRcdFx0ZW1haWxWZXJpZmllZDpmYWxzZSxcblx0XHRcdHByb2ZpbGU6JydcblxuXHRcdH1cblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oYW5kbGVUaXRsZSA9IHRoaXMuaGFuZGxlVGl0bGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUVtYWlsID0gdGhpcy5oYW5kbGVFbWFpbC5iaW5kKHRoaXMpO1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGxldCBwcm9maWxlXG5cdFx0aWYgKHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdICYmICF0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50KSB7XG5cdFx0XHRwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pXG5cdFx0XHR0aGlzLmdldFVzZXJEZXRhaWxzKHByb2ZpbGUpIC8vIGZpbGwgdXNlciBkZXRhaWxzIGluIGZvcm1cblx0XHRcdC8vdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV19LCgpPT57XG5cdFx0XHQvL2lmKHRoaXMuc3RhdGUuZ2VuZGVyID09ICdtJyl7XG5cdFx0XHQvLyBcdHRoaXMuc2V0U3RhdGUoe3RpdGxlOidtci4nfSwoKT0+e1xuXHRcdFx0Ly8gXHRcdCB0aGlzLmhhbmRsZVN1Ym1pdCgpXG5cdFx0XHQvLyBcdH0pXG5cdFx0XHQvLyB9ZWxzZSBpZih0aGlzLnN0YXRlLmdlbmRlciA9PSAnZicpe1xuXHRcdFx0Ly8gXHR0aGlzLnNldFN0YXRlKHt0aXRsZTonbXJzLid9LCgpPT57XG5cdFx0XHQvLyBcdFx0IHRoaXMuaGFuZGxlU3VibWl0KClcblx0XHRcdC8vIFx0fSlcblx0XHRcdC8vIH1cblx0XHRcdC8vfSlcblx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQpIHtcblx0XHRcdGxldCBvbGREYXRlXG5cdFx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdGhpcy5wcm9wcy51c2VyX2RhdGFbMF0uaWRdKVxuXHRcdFx0XHRpZiAoT2JqZWN0LmtleXMocHJvZmlsZSkubGVuZ3RoID4gMCAmJiBwcm9maWxlLmRvYikge1xuXHRcdFx0XHRcdG9sZERhdGUgPSBwcm9maWxlLmRvYi5zcGxpdCgnLScpXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHllYXI6IG9sZERhdGVbMF0sIG1udGg6IG9sZERhdGVbMl0sIGRheTogb2xkRGF0ZVsxXSB9LCAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnBvcHVsYXRlRGF0ZXMoKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IC4uLnByb2ZpbGUgfSwgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KHRydWUsZmFsc2UpXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy51c2VyX2RhdGEgJiYgdGhpcy5wcm9wcy51c2VyX2RhdGEubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLnByb3BzLnVzZXJfZGF0YVswXS5kb2IpIHtcblx0XHRcdFx0XHRcdG9sZERhdGUgPSB0aGlzLnByb3BzLnVzZXJfZGF0YVswXS5kb2Iuc3BsaXQoJy0nKVxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHllYXI6IG9sZERhdGVbMF0sIG1udGg6IG9sZERhdGVbMl0sIGRheTogb2xkRGF0ZVsxXSB9LCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMucG9wdWxhdGVEYXRlcygpXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5wcm9wcy51c2VyX2RhdGFbMF0sIG5hbWU6IHRoaXMucHJvcHMudXNlcl9kYXRhWzBdLmZpcnN0X25hbWUsIG1lbWJlcl90eXBlOiB0aGlzLnByb3BzLm1lbWJlcl90eXBlLCBwcm9maWxlX2lkOiB0aGlzLnByb3BzLnVzZXJfZGF0YVswXS5wcm9maWxlLCBpc19jaGFuZ2U6IGZhbHNlLCB0b3duX2NvZGU6IHRoaXMucHJvcHMudXNlcl9kYXRhWzBdLmNpdHlfY29kZSxwcm9maWxlOnRoaXMucHJvcHMudXNlcl9kYXRhWzBdLnByb2ZpbGUgfSwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQodHJ1ZSxmYWxzZSlcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuXHRcdGxldCBuZXdOYW1lID0gW11cblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRsZXQgcHJvZmlsZUxlbmd0aCA9IE9iamVjdC5rZXlzKHByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aDtcblx0XHRpZiAocHJvZmlsZUxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5wcm9maWxlX2ZsYWcgJiYgIXByb3BzLmlzX2VuZG9yc2VtZW50KSB7XG5cdFx0XHRsZXQgaXNEdW1teVVzZXIgPSBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzRHVtbXlVc2VyXG5cdFx0XHRpZiAoT2JqZWN0LmtleXMocHJvcHMuc2VsZl9kYXRhX3ZhbHVlcykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsZXQgcHJvZmlsZVxuXHRcdFx0XHRpZiAoIWlzRHVtbXlVc2VyKSB7XG5cdFx0XHRcdFx0cHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnNlbGZfZGF0YV92YWx1ZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnNlbGZfZGF0YV92YWx1ZXNbMF0pXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5nZXRVc2VyRGV0YWlscyhwcm9maWxlKSAvLyBmaWxsIHVzZXIgZGV0YWlscyBpbiBmb3JtXG5cdFx0XHRcdGlmIChPYmplY3Qua2V5cyhwcm9maWxlKS5sZW5ndGgpIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgLi4ucHJvZmlsZSwgZGlzYWJsZUVtYWlsOiBwcm9maWxlLmVtYWlsICE9ICcnID8gdHJ1ZSA6IGZhbHNlLCBkaXNhYmxlRG9iOiBwcm9maWxlLmRvYiAhPSBudWxsID8gdHJ1ZSA6IGZhbHNlLCBkaXNhYmxlTmFtZTogcHJvZmlsZS5uYW1lICE9ICcnID8gdHJ1ZSA6IGZhbHNlIH0sICgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChwcm9maWxlLmdlbmRlciA9PSAnbScpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiAnbXIuJyB9LCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQoZmFsc2UsZmFsc2UpXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb2ZpbGUuZ2VuZGVyID09ICdmJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgdGl0bGU6ICdtcnMuJyB9LCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQoZmFsc2UsZmFsc2UpXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgcHJvZmlsZV9mbGFnOiBmYWxzZSB9KVxuXHRcdFx0XHRcdGxldCBuZXdfcHJvZmlsZSA9IHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV1cblx0XHRcdFx0XHR0aGlzLmdldFVzZXJEZXRhaWxzKG5ld19wcm9maWxlKSAvLyBmaWxsIHVzZXIgZGV0YWlscyBpbiBmb3JtXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAocHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgcHJvZmlsZV9mbGFnOiBmYWxzZSB9KVxuXHRcdFx0XHRsZXQgcHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pXG5cdFx0XHRcdG5ld05hbWUgPSBwcm9maWxlLm5hbWUuc3BsaXQoXCIgXCIpXG5cdFx0XHRcdHRoaXMuZ2V0VXNlckRldGFpbHMocHJvZmlsZSkgLy8gZmlsbCB1c2VyIGRldGFpbHMgaW4gZm9ybVxuXHRcdFx0XHR0aGlzLnBvcHVsYXRlRGF0ZXMoKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAocHJvcHMuaXNfZW5kb3JzZW1lbnQpIHtcblx0XHRcdHRoaXMucG9wdWxhdGVEYXRlcygpXG5cdFx0fVxuXHR9XG5cblx0Z2V0VXNlckRldGFpbHMocHJvZmlsZSkgeyAvLyBmaWxsIHVzZXIgZGV0YWlscyBpbiBzdG9yZVxuXHRcdGxldCBuZXdOYW1lID0gW11cblx0XHRsZXQgb2xkRGF0ZVxuXHRcdGxldCB0ZW1wQXJyYXlcblx0XHRpZihPYmplY3Qua2V5cyhwcm9maWxlKS5sZW5ndGggPiAwKXtcblx0XHRcdG5ld05hbWUgPSBwcm9maWxlLm5hbWUuc3BsaXQoXCIgXCIpXG5cdFx0XHRpZiAobmV3TmFtZS5sZW5ndGggPT0gMikge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRuYW1lOiBwcm9maWxlLmlzRHVtbXlVc2VyID8gJycgOiBuZXdOYW1lWzBdLFxuXHRcdFx0XHRcdGxhc3RfbmFtZTogcHJvZmlsZS5pc0R1bW15VXNlciA/ICcnIDogbmV3TmFtZVsxXVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIGlmIChuZXdOYW1lLmxlbmd0aCA9PSAzKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdG5hbWU6IHByb2ZpbGUuaXNEdW1teVVzZXIgPyAnJyA6IG5ld05hbWVbMF0sXG5cdFx0XHRcdFx0bGFzdF9uYW1lOiBwcm9maWxlLmlzRHVtbXlVc2VyID8gJycgOiBuZXdOYW1lWzJdLFxuXHRcdFx0XHRcdG1pZGRsZV9uYW1lOiBwcm9maWxlLmlzRHVtbXlVc2VyID8gJycgOiBuZXdOYW1lWzFdXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYgKG5ld05hbWUubGVuZ3RoID4gMykge1xuXHRcdFx0XHR0ZW1wQXJyYXkgPSBuZXdOYW1lLnNsaWNlKDIsIG5ld05hbWUubGVuZ3RoKVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRuYW1lOiBwcm9maWxlLmlzRHVtbXlVc2VyID8gJycgOiBuZXdOYW1lWzBdLFxuXHRcdFx0XHRcdGxhc3RfbmFtZTogcHJvZmlsZS5pc0R1bW15VXNlciA/ICcnIDogdGVtcEFycmF5LmpvaW4oJyAnKSxcblx0XHRcdFx0XHRtaWRkbGVfbmFtZTogcHJvZmlsZS5pc0R1bW15VXNlciA/ICcnIDogbmV3TmFtZVsxXVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IG5hbWU6IHByb2ZpbGUuaXNEdW1teVVzZXIgPyAnJyA6IHByb2ZpbGUubmFtZSB9KVxuXHRcdFx0fVxuXHRcdFx0aWYgKHByb2ZpbGUuaXNEdW1teVVzZXIgJiYgcHJvZmlsZS5kb2IpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGRheTogbnVsbCwgeWVhcjogbnVsbCwgbW50aDogbnVsbCB9KVxuXHRcdFx0fSBlbHNlIGlmIChPYmplY3Qua2V5cyhwcm9maWxlKS5sZW5ndGggPiAwICYmIHByb2ZpbGUuZG9iKSB7XG5cdFx0XHRcdG9sZERhdGUgPSBwcm9maWxlLmRvYi5zcGxpdCgnLScpXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyB5ZWFyOiBvbGREYXRlWzBdLCBtbnRoOiBvbGREYXRlWzFdLCBkYXk6IG9sZERhdGVbMl0gfSwgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucG9wdWxhdGVEYXRlcygpXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnBvcHVsYXRlRGF0ZXMoKVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRpc2FibGVFbWFpbDogIXByb2ZpbGUuaXNEdW1teVVzZXIgJiYgcHJvZmlsZS5lbWFpbCAhPSAnJyA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0ZGlzYWJsZURvYjogIXByb2ZpbGUuaXNEdW1teVVzZXIgJiYgcHJvZmlsZS5kb2IgIT0gbnVsbCA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0ZGlzYWJsZU5hbWU6ICFwcm9maWxlLmlzRHVtbXlVc2VyICYmIHByb2ZpbGUubmFtZSAhPSAnJyA/IHRydWUgOiBmYWxzZSxcblx0XHRcdFx0Z2VuZGVyOiBwcm9maWxlLmlzRHVtbXlVc2VyID8gJycgOiBwcm9maWxlLmdlbmRlcixcblx0XHRcdFx0ZW1haWw6IHByb2ZpbGUuaXNEdW1teVVzZXIgPyAnJyA6IHByb2ZpbGUuZW1haWwsXG5cdFx0XHRcdGRvYjogcHJvZmlsZS5pc0R1bW15VXNlciA/ICcnIDogcHJvZmlsZS5kb2IsXG5cdFx0XHRcdGlkOiBwcm9maWxlLmlzRHVtbXlVc2VyID8gMCA6IHByb2ZpbGUuaWRcblx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0aWYgKHByb2ZpbGUuZ2VuZGVyID09ICdtJykge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogJ21yLicgfSlcblx0XHRcdFx0fSBlbHNlIGlmIChwcm9maWxlLmdlbmRlciA9PSAnZicpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmFkdWx0X2NvdW50ID09IDIpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogJ21ycy4nIH0pXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogJ21pc3MnIH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KGZhbHNlLGZhbHNlKVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0aGFuZGxlQ2hhbmdlKGZpZWxkLCBldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYW0nKV06IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pXG5cdH1cblx0aGFuZGxlT25Gb2N1cyhmaWVsZCwgZXZlbnQpIHtcblx0XHQvLyBpZihldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZyl7XG5cdFx0Ly8gXHRldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdmaWVsZC1pY29uJylcblx0XHQvLyB9XG5cdH1cblx0aGFuZGxlVGl0bGUoZmllbGQsIGV2ZW50KSB7XG5cdFx0bGV0IHRpdGxlX3ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0aWYgKHRpdGxlX3ZhbHVlID09ICdtci4nKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZ2VuZGVyOiAnbScgfSlcblx0XHR9IGVsc2UgaWYgKHRpdGxlX3ZhbHVlID09ICdtaXNzJyB8fCB0aXRsZV92YWx1ZSA9PSAnbXJzLicpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBnZW5kZXI6ICdmJyB9KVxuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHsgdGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9LCAoKSA9PiB7XG5cdFx0XHR2YXIgc2VsZl9kYXRhID0gdGhpcy5zdGF0ZVxuXHRcdFx0c2VsZl9kYXRhLmlzX2NoYW5nZSA9IHRydWVcblx0XHRcdHRoaXMucHJvcHMudXNlckRhdGEoJ3NlbGZfZGF0YScsIHNlbGZfZGF0YSkgLy8gdG8gc2F2ZSBlbnRlcmVkIGRhdGEgaW4gc3RvcmVcblx0XHR9KVxuXHR9XG5cdGhhbmRsZVN1Ym1pdChpc19lbmRvcmVzbWVudCxpc19lbmRvcnNlX2VtYWlsKSB7IFxuXHRcdGxldCBwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pXG5cdFx0aWYgKCFwcm9maWxlLmlzRHVtbXlVc2VyKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgcHJvZmlsZV9pZDogdGhpcy5wcm9wcy5tZW1iZXJfaWQgfSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVfaWQ6IG51bGwgfSlcblx0XHR9XG5cdFx0dmFyIHNlbGZfZGF0YSA9IHRoaXMuc3RhdGVcblx0XHRpZiAoc2VsZl9kYXRhLm5hbWUgIT09ICcnKSB7XG5cdFx0XHRpZiAoc2VsZl9kYXRhLm5hbWUubGVuZ3RoID4gNTApIHtcblx0XHRcdFx0c2VsZl9kYXRhLm5hbWUgPSBzZWxmX2RhdGEubmFtZS5zbGljZSgwLCA1MClcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHNlbGZfZGF0YS5taWRkbGVfbmFtZSAhPT0gJycpIHtcblx0XHRcdGlmIChzZWxmX2RhdGEubWlkZGxlX25hbWUubGVuZ3RoID4gNTApIHtcblx0XHRcdFx0c2VsZl9kYXRhLm1pZGRsZV9uYW1lID0gc2VsZl9kYXRhLm1pZGRsZV9uYW1lLnNsaWNlKDAsIDUwKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoc2VsZl9kYXRhLmxhc3RfbmFtZSAhPT0gJycpIHtcblx0XHRcdGlmIChzZWxmX2RhdGEubGFzdF9uYW1lLmxlbmd0aCA+IDUwKSB7XG5cdFx0XHRcdHNlbGZfZGF0YS5sYXN0X25hbWUgPSBzZWxmX2RhdGEubGFzdF9uYW1lLnNsaWNlKDAsIDUwKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlzX2VuZG9yZXNtZW50ICYmICFpc19lbmRvcnNlX2VtYWlsKSB7XG5cdFx0XHRzZWxmX2RhdGEuaXNfY2hhbmdlID0gdHJ1ZVxuXHRcdFx0c2VsZl9kYXRhLmZpcnN0X25hbWUgPSBzZWxmX2RhdGEubmFtZVxuXHRcdH1cblx0XHR0aGlzLnByb3BzLnVzZXJEYXRhKCdzZWxmX2RhdGEnLCBzZWxmX2RhdGEpXG5cdH1cblx0aGFuZGxla2V5KGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUucGluY29kZS5sZW5ndGggPT0gNikge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdH1cblx0aGFuZGxlTmFtZUNoYXJhY3RlcnMoZmllbGQsIGV2ZW50KSB7XG5cdFx0aWYgKGZpZWxkID09ICduYW1lJykge1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUubmFtZS5sZW5ndGggPT0gNTApIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGZpZWxkID09ICdsYXN0X25hbWUnKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5sYXN0X25hbWUubGVuZ3RoID09IDUwKSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChmaWVsZCA9PSAnbWlkZGxlX25hbWUnKSB7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZS5taWRkbGVfbmFtZS5sZW5ndGggPT0gNTApIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXHRoYW5kbGVFbWFpbCgpIHtcblx0XHRsZXQgZm9ybUlzVmFsaWQgPSB0cnVlO1xuXHRcdGlmICh0aGlzLnN0YXRlLmVtYWlsICE9ICcnKSB7XG5cdFx0XHRsZXQgdmFsaWRFbWFpbCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXHRcdFx0dmFsaWRFbWFpbCA9IHZhbGlkRW1haWwudGVzdCh0aGlzLnN0YXRlLmVtYWlsKTtcblx0XHRcdGlmICh2YWxpZEVtYWlsKSB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KGZhbHNlLGZhbHNlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgdmFsaWQgRW1haWxcIiB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0aGFuZGxlR2VuZGVyKGZpZWxkLCBldmVudCkge1xuXHRcdGxldCBnZW5kZXJfdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcblx0XHRpZiAoZ2VuZGVyX3ZhbHVlID09ICdtJykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiAnbXIuJyB9KVxuXHRcdH0gZWxzZSBpZiAoZ2VuZGVyX3ZhbHVlID09ICdmJykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiAnbXJzLicgfSlcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRnZW5kZXI6IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0sICgpID0+IHtcblx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KGZhbHNlLGZhbHNlKVxuXHRcdH0pXG5cdH1cblx0b3BlbkRhdGVNb2RhbCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiAhdGhpcy5zdGF0ZS5kYXRlTW9kYWwgfSlcblx0fVxuXHRzZWxlY3REYXRlRnJvbUNhbGVuZGFyKGRhdGUpIHtcblx0XHRpZiAoZGF0ZSkge1xuXHRcdFx0ZGF0ZSA9IGRhdGUudG9EYXRlKClcblx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoZGF0ZSlcblx0XHRcdGxldCBtbnRoID0gKFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMilcblx0XHRcdGxldCBkYXkgPSAoXCIwXCIgKyBkYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuXHRcdFx0bGV0IGFjdHVhbF9kYXRlID0gW2RhdGUuZ2V0RnVsbFllYXIoKSwgbW50aCwgZGF5XS5qb2luKFwiLVwiKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZERhdGVTcGFuOiBhY3R1YWxfZGF0ZSwgZGF0ZU1vZGFsOiBmYWxzZSwgY3VycmVudERhdGU6IG5ldyBEYXRlKGRhdGUpLmdldERhdGUoKSwgZG9iOiBhY3R1YWxfZGF0ZSB9LCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KGZhbHNlLGZhbHNlKVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGRhdGVNb2RhbDogZmFsc2UgfSlcblx0XHR9XG5cdH1cblx0Ly8gaGFuZGxlU3RhdGUoZXZlbnQpIHtcblx0Ly8gXHR2YXIgZXZlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXRlX2Ryb3Bkb3duXCIpXG5cdC8vIFx0dGhpcy5zZXRTdGF0ZSh7c3RhdGU6IGV2ZW50Lm9wdGlvbnNbZXZlbnQuc2VsZWN0ZWRJbmRleF0udmFsdWUsIHN0YXRlX2NvZGU6IGV2ZW50Lm9wdGlvbnNbZXZlbnQuc2VsZWN0ZWRJbmRleF0uaWR9LCgpID0+e1xuXHQvLyBcdFx0dGhpcy5oYW5kbGVTdWJtaXQoZXZlbnQpXG5cblx0Ly8gXHR9KVxuXHQvLyB9XG5cdC8vIGhhbmRsZURpc3RyaWN0KGV2ZW50KSB7XG5cdC8vIFx0dmFyIGV2ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXN0cmljdF9kcm9wZG93blwiKVxuXHQvLyBcdHRoaXMuc2V0U3RhdGUoe2Rpc3RyaWN0OiBldmVudC5vcHRpb25zW2V2ZW50LnNlbGVjdGVkSW5kZXhdLnZhbHVlLCBkaXN0cmljdF9jb2RlOiBldmVudC5vcHRpb25zW2V2ZW50LnNlbGVjdGVkSW5kZXhdLmlkfSwoKSA9Pntcblx0Ly8gXHRcdHRoaXMuaGFuZGxlU3VibWl0KGV2ZW50KVxuXG5cdC8vIFx0fSlcblx0Ly8gfVxuXHQvLyBoYW5kbGVUb3duKGV2ZW50KSB7XG5cdC8vIFx0dmFyIGV2ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3duX2Ryb3Bkb3duXCIpXG5cdC8vIFx0dGhpcy5zZXRTdGF0ZSh7dG93bjogZXZlbnQub3B0aW9uc1tldmVudC5zZWxlY3RlZEluZGV4XS52YWx1ZSwgdG93bl9jb2RlOiBldmVudC5vcHRpb25zW2V2ZW50LnNlbGVjdGVkSW5kZXhdLmlkfSwoKSA9Pntcblx0Ly8gXHRcdHRoaXMuaGFuZGxlU3VibWl0KGV2ZW50KVxuXG5cdC8vIFx0fSlcblx0Ly8gfVxuXHRoYW5kbGVMYXN0bmFtZShldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBub19sbmFtZTogIXRoaXMuc3RhdGUubm9fbG5hbWUgfSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5oYW5kbGVTdWJtaXQoZmFsc2UsZmFsc2UpXG5cdFx0fSlcblx0fVxuXHRzaG93QWxlcnQodHlwZSkge1xuXHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2Ugc2VsZWN0XCIgKyB0eXBlICsgXCJmaXJzdFwiIH0pO1xuXHR9XG5cblx0aGFuZGxlU3RhdGUoZmVpbGQsIGV2ZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRbZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJhbScpXTogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSlcblx0XHRsZXQgc3RhdGVzID0gW11cblx0XHRPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ3N0YXRlJ10pLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG5cdFx0XHRzdGF0ZXMucHVzaCh7ICdjb2RlJzogdmFsdWUuZ3N0X2NvZGUsICduYW1lJzogdmFsdWUuc3RhdGVfbmFtZSB9KVxuXHRcdFx0Ly8gc3RhdGVzLnB1c2goW3ZhbHVlLmdzdF9jb2RlPXZhbHVlLnN0YXRlX25hbWVdKVxuXHRcdFx0Ly8gc3RhdGVzLnB1c2godmFsdWUuc3RhdGVfbmFtZSlcblx0XHR9KVxuXHRcdHRoaXMuYXV0b2NvbXBsZXRlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VzZXJTdGF0ZScpWzBdLCBzdGF0ZXMsICdpc1N0YXRlJyk7XG5cdH1cblxuXHRoYW5kbGVEaXN0cmljdChmZWlsZCwgZXZlbnQpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFtldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmFtJyldOiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KVxuXHRcdGxldCBkaXN0cmljdHNfb3B0ID0gW11cblx0XHRPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ3N0YXRlJ10pLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG5cdFx0XHRpZiAoc2VsZi5zdGF0ZS5zdGF0ZV9jb2RlICYmIHNlbGYuc3RhdGUuc3RhdGVfY29kZSAhPSAnJyAmJiBzZWxmLnN0YXRlLnN0YXRlICE9ICcnICYmIHNlbGYuc3RhdGUuc3RhdGVfY29kZSA9PSB2YWx1ZS5nc3RfY29kZSkge1xuXHRcdFx0XHRPYmplY3QuZW50cmllcyh2YWx1ZS5kaXN0cmljdCkubWFwKGZ1bmN0aW9uIChbaywgZGlzdHJpY3RzXSkge1xuXHRcdFx0XHRcdGRpc3RyaWN0c19vcHQucHVzaCh7ICdjb2RlJzogZGlzdHJpY3RzLmRpc3RyaWN0X2NvZGUsICduYW1lJzogZGlzdHJpY3RzLmRpc3RyaWN0X25hbWUgfSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuYXV0b2NvbXBsZXRlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VzZXJEaXN0cmljdCcpWzBdLCBkaXN0cmljdHNfb3B0LCAnaXNEaXN0cmljdCcpO1xuXHR9XG5cblx0aGFuZGxlVG93bihmZWlsZCwgZXZlbnQpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFtldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmFtJyldOiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KVxuXHRcdGxldCBjaXR5X29wdCA9IFtdXG5cdFx0T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydzdGF0ZSddKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuXHRcdFx0aWYgKHNlbGYuc3RhdGUuc3RhdGVfY29kZSAmJiBzZWxmLnN0YXRlLnN0YXRlX2NvZGUgIT0gJycgJiYgc2VsZi5zdGF0ZS5zdGF0ZSAhPSAnJyAmJiBzZWxmLnN0YXRlLnN0YXRlX2NvZGUgPT0gdmFsdWUuZ3N0X2NvZGUpIHtcblx0XHRcdFx0T2JqZWN0LmVudHJpZXModmFsdWUuY2l0aWVzKS5tYXAoZnVuY3Rpb24gKFtrLCBjaXR5XSkge1xuXHRcdFx0XHRcdGNpdHlfb3B0LnB1c2goeyAnY29kZSc6IGNpdHkuY2l0eV9jb2RlLCAnbmFtZSc6IGNpdHkuY2l0eV9uYW1lIH0pXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLmF1dG9jb21wbGV0ZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1c2VyVG93bicpWzBdLCBjaXR5X29wdCwgJ2lzVG93bicpO1xuXHR9XG5cblx0YXV0b2NvbXBsZXRlKGlucCwgYXJyLCB0eXBlKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0dmFyIGN1cnJlbnRGb2N1cztcblxuXHRcdGlucC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdHZhciBwYXJlbnREaXYsIGNoaWxkRGl2LCBpLCB2YWwgPSB0aGlzLnZhbHVlO1xuXG5cdFx0XHRzZWxmLmNsb3NlQWxsTGlzdHModHlwZSk7XG5cdFx0XHRpZiAoIXZhbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRcdGN1cnJlbnRGb2N1cyA9IC0xO1xuXG5cdFx0XHRwYXJlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpXG5cdFx0XHRwYXJlbnREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgdGhpcy5pZCArIFwiYXV0b2NvbXBsZXRlLWxpc3RcIilcblx0XHRcdHBhcmVudERpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImF1dG9jb21wbGV0ZS1pdGVtc1wiKVxuXHRcdFx0dGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHBhcmVudERpdilcblxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHQvKmNoZWNrIGlmIHRoZSBpdGVtIHN0YXJ0cyB3aXRoIHRoZSBzYW1lIGxldHRlcnMgYXMgdGhlIHRleHQgZmllbGQgdmFsdWU6Ki9cblx0XHRcdFx0aWYgKGFycltpXS5uYW1lLnN1YnN0cigwLCB2YWwubGVuZ3RoKS50b1VwcGVyQ2FzZSgpID09IHZhbC50b1VwcGVyQ2FzZSgpKSB7XG5cdFx0XHRcdFx0Y2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xuXHRcdFx0XHRcdGNoaWxkRGl2LmlubmVySFRNTCA9IFwiPHN0cm9uZz5cIiArIGFycltpXS5uYW1lLnN1YnN0cigwLCB2YWwubGVuZ3RoKSArIFwiPC9zdHJvbmc+XCI7XG5cdFx0XHRcdFx0Y2hpbGREaXYuaW5uZXJIVE1MICs9IGFycltpXS5uYW1lLnN1YnN0cih2YWwubGVuZ3RoKTtcblx0XHRcdFx0XHRjaGlsZERpdi5pbm5lckhUTUwgKz0gXCI8aW5wdXQgdHlwZT0naGlkZGVuJyB2YWx1ZT0nXCIgKyBhcnJbaV0ubmFtZSArIFwiJyBpZD0nXCIgKyBhcnJbaV0uY29kZSArIFwiJz5cIjtcblxuXHRcdFx0XHRcdGNoaWxkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0aW5wLnZhbHVlID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLnZhbHVlO1xuXHRcdFx0XHRcdFx0aWYgKHR5cGUgPT0gJ2lzU3RhdGUnKSB7XG5cdFx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyBzdGF0ZTogaW5wLnZhbHVlLCBzdGF0ZV9jb2RlOiB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0uaWQgfSlcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PSAnaXNEaXN0cmljdCcpIHtcblx0XHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7IGRpc3RyaWN0OiBpbnAudmFsdWUsIGRpc3RyaWN0X2NvZGU6IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXS5pZCB9KVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlID09ICdpc1Rvd24nKSB7XG5cdFx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoeyB0b3duOiBpbnAudmFsdWUsIHRvd25fY29kZTogdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLmlkIH0pXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHNlbGYuaGFuZGxlU3VibWl0KClcblx0XHRcdFx0XHRcdHNlbGYuY2xvc2VBbGxMaXN0cyh0eXBlKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cGFyZW50RGl2LmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LypleGVjdXRlIGEgZnVuY3Rpb24gb24ga2V5IHByZXNzZXM6Ki9cblx0XHRpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArIFwiYXV0b2NvbXBsZXRlLWxpc3RcIik7XG5cdFx0XHRpZiAoeCkgeCA9IHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XG5cdFx0XHRpZiAoZS5rZXlDb2RlID09IDQwKSB7XG5cdFx0XHRcdGN1cnJlbnRGb2N1cysrO1xuXHRcdFx0XHRzZWxmLmFkZEFjdGl2ZSh4LCBjdXJyZW50Rm9jdXMpO1xuXHRcdFx0fSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHtcblx0XHRcdFx0Y3VycmVudEZvY3VzLS07XG5cdFx0XHRcdHNlbGYuYWRkQWN0aXZlKHgsIGN1cnJlbnRGb2N1cyk7XG5cdFx0XHR9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGlmIChjdXJyZW50Rm9jdXMgPiAtMSkge1xuXHRcdFx0XHRcdGlmICh4KSB4W2N1cnJlbnRGb2N1c10uY2xpY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRhZGRBY3RpdmUoeCwgY3VycmVudEZvY3VzKSB7XG5cdFx0aWYgKCF4KSByZXR1cm4gZmFsc2U7XG5cdFx0dGhpcy5yZW1vdmVBY3RpdmUoeCk7XG5cdFx0aWYgKGN1cnJlbnRGb2N1cyA+PSB4Lmxlbmd0aCkgY3VycmVudEZvY3VzID0gMDtcblx0XHRpZiAoY3VycmVudEZvY3VzIDwgMCkgY3VycmVudEZvY3VzID0gKHgubGVuZ3RoIC0gMSk7XG5cdFx0aWYoeFtjdXJyZW50Rm9jdXNdLmNsYXNzTGlzdCl7XG5cdFx0XHR4W2N1cnJlbnRGb2N1c10uY2xhc3NMaXN0LmFkZChcImF1dG9jb21wbGV0ZS1hY3RpdmVcIik7XG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlQWN0aXZlKHgpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHhbaV0uY2xhc3NMaXN0KXtcblx0XHRcdFx0eFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjbG9zZUFsbExpc3RzKGVsbW50LCB0eXBlKSB7XG5cdFx0bGV0IGlucFxuXHRcdGlmICh0eXBlID09ICdpc1N0YXRlJykge1xuXHRcdFx0aW5wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndXNlclN0YXRlJylbMF1cblx0XHR9IGVsc2UgaWYgKHR5cGUgPT0gJ2lzRGlzdHJpY3QnKSB7XG5cdFx0XHRpbnAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1c2VyRGlzdHJpY3QnKVswXVxuXHRcdH0gZWxzZSBpZiAodHlwZSA9PSAnaXNUb3duJykge1xuXHRcdFx0aW5wID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndXNlclRvd24nKVswXVxuXHRcdH1cblx0XHR2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhdXRvY29tcGxldGUtaXRlbXNcIik7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoZWxtbnQgIT0geFtpXSAmJiBlbG1udCAhPSBpbnApIHtcblx0XHRcdFx0eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG5cdH1cblxuXHRwb3B1bGF0ZURhdGVzKCkge1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdGxldCBkZWZhdWx0X21vbnRocyA9IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInXVxuXHRcdHZhciBkYXlkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5ZHJvcGRvd25fXCIgKyB0aGlzLnByb3BzLm1lbWJlcl9pZCksXG5cdFx0XHRtb250aGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb250aGRyb3Bkb3duX1wiICsgdGhpcy5wcm9wcy5tZW1iZXJfaWQpLFxuXHRcdFx0eWVhcmRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyZHJvcGRvd25fXCIgKyB0aGlzLnByb3BzLm1lbWJlcl9pZCk7XG5cdFx0bGV0IGFnZV90aHJlc2hvbGQgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZCA/IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWF4X2FnZSA6IDY1XG5cdFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKSxcblx0XHRcdGRheSA9IHRvZGF5LmdldFVUQ0RhdGUoKSxcblx0XHRcdG1vbnRoID0gdG9kYXkuZ2V0VVRDTW9udGgoKSxcblx0XHRcdHllYXIgPSB0b2RheS5nZXRVVENGdWxsWWVhcigpIC0gYWdlX3RocmVzaG9sZCxcblx0XHRcdGN1cnJlbnRZZWFyID0gdG9kYXkuZ2V0VVRDRnVsbFllYXIoKSxcblx0XHRcdGRheXNJbkN1cnJNb250aCA9IHRoaXMuZGF5c0luTW9udGgobW9udGgsIHllYXIpO1xuXG5cdFx0ZGF5ZHJvcGRvd24uaW5uZXJIVE1MID0gJydcblx0XHRtb250aGRyb3Bkb3duLmlubmVySFRNTCA9ICcnXG5cdFx0eWVhcmRyb3Bkb3duLmlubmVySFRNTCA9ICcnXG5cblx0XHR2YXIgb3B0X2RkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0b3B0X2RkLnZhbHVlID0gJ0REJ1xuXHRcdG9wdF9kZC50ZXh0ID0gJ0REJ1xuXHRcdG9wdF9kZC5oaWRkZW4gPSB0cnVlXG5cdFx0ZGF5ZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0X2RkKTtcblx0XHR2YXIgb3B0X21tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0b3B0X21tLnZhbHVlID0gJ01NJ1xuXHRcdG9wdF9tbS50ZXh0ID0gJ01NJ1xuXHRcdG9wdF9tbS5oaWRkZW4gPSB0cnVlXG5cdFx0bW9udGhkcm9wZG93bi5hcHBlbmRDaGlsZChvcHRfbW0pO1xuXHRcdHZhciBvcHRfeXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRvcHRfeXkudmFsdWUgPSAnWVlZWSdcblx0XHRvcHRfeXkudGV4dCA9ICdZWVlZJ1xuXHRcdG9wdF95eS5oaWRkZW4gPSB0cnVlXG5cdFx0eWVhcmRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdF95eSk7XG5cblx0XHQvLyBEYXlcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8PSBkYXlzSW5DdXJyTW9udGg7IGkrKykge1xuXHRcdFx0dmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0aWYgKGkgPD0gOSkge1xuXHRcdFx0XHRvcHQudmFsdWUgPSAnMCcgKyBpO1xuXHRcdFx0XHRvcHQudGV4dCA9ICcwJyArIGk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHQudmFsdWUgPSBpO1xuXHRcdFx0XHRvcHQudGV4dCA9IGk7XG5cdFx0XHR9XG5cblx0XHRcdGRheWRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdCk7XG5cdFx0fVxuXHRcdC8vIE1vbnRoXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG5cdFx0XHR2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRvcHQudmFsdWUgPSAnTU0nXG5cdFx0XHRvcHQudGV4dCA9ICdNTSdcblx0XHRcdG9wdC52YWx1ZSA9IGRlZmF1bHRfbW9udGhzW2ldXG5cdFx0XHRvcHQudGV4dCA9IGRlZmF1bHRfbW9udGhzW2ldXG5cdFx0XHRtb250aGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdCk7XG5cdFx0fVxuXG5cdFx0Ly8gWWVhclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IGFnZV90aHJlc2hvbGQ7IGkrKykge1xuXHRcdFx0dmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0b3B0LnZhbHVlID0gJ1lZWVknXG5cdFx0XHRvcHQudGV4dCA9ICdZWVlZJ1xuXHRcdFx0b3B0LnZhbHVlID0gaSArIHllYXI7XG5cdFx0XHRvcHQudGV4dCA9IGkgKyB5ZWFyO1xuXHRcdFx0eWVhcmRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdCk7XG5cdFx0fVxuXG5cdFx0Ly8gY2hhbmdlIGhhbmRsZXIgZm9yIGRheVxuXHRcdGRheWRyb3Bkb3duLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIE5ld1NlbGVjdGVkZGF5cyA9IGRheWRyb3Bkb3duLnZhbHVlO1xuXHRcdFx0c2VsZi5zZXRTdGF0ZSh7IGRheTogTmV3U2VsZWN0ZWRkYXlzIH0sICgpID0+IHtcblx0XHRcdFx0c2VsZi5zdWJtaXREb2IoKVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHQvLyBDaGFuZ2UgaGFuZGxlciBmb3IgbW9udGhzXG5cdFx0bW9udGhkcm9wZG93bi5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dmFyIG5ld01vbnRoID0gbW9udGhkcm9wZG93bi52YWx1ZVxuXHRcdFx0c2VsZi5zZXRTdGF0ZSh7IG1udGg6IG5ld01vbnRoIH0sICgpID0+IHtcblx0XHRcdFx0c2VsZi5zdWJtaXREb2IoKVxuXHRcdFx0fSlcblx0XHR9XG5cblx0XHQvLyBjaGFuZ2UgaGFuZGxlciBmb3IgeWVhclxuXHRcdHllYXJkcm9wZG93bi5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBuZXdZZWFyID0geWVhcmRyb3Bkb3duLnZhbHVlO1xuXHRcdFx0c2VsZi5zZXRTdGF0ZSh7IHllYXI6IG5ld1llYXIgfSwgKCkgPT4ge1xuXHRcdFx0XHRzZWxmLnN1Ym1pdERvYigpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXHRzdWJtaXREb2IoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0aWYgKHNlbGYuc3RhdGUuZGF5ICYmIHNlbGYuc3RhdGUubW50aCAmJiBzZWxmLnN0YXRlLnllYXIpIHtcblx0XHRcdGxldCBmaW5hbERhdGUgPSBzZWxmLnN0YXRlLnllYXIgKyAnLScgKyBzZWxmLnN0YXRlLm1udGggKyAnLScgKyBzZWxmLnN0YXRlLmRheVxuXHRcdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRvYjogZmluYWxEYXRlXG5cdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHRcdHNlbGYuaGFuZGxlU3VibWl0KClcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0dmVyaWZ5RW5kb3JzZW1lbnRFbWFpbChuZXdlbWFpbCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZW1haWxWZXJpZmllZDp0cnVlLGVtYWlsOm5ld2VtYWlsfSwoKT0+e1xuXHRcdFx0dGhpcy5wcm9wcy5jaGVja0lzRW1haWxWZXJmaWVkKClcblx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KHRydWUsdHJ1ZSlcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdGxldCBzaG93X2NyZWF0ZUFwaV9rZXlzID0gW11cblx0XHRsZXQgY2l0eV9vcHQgPSBbXVxuXHRcdGxldCBkaXN0cmljdHNfb3B0ID0gW11cblx0XHRsZXQgVXBsb2FkZWRfaW1hZ2VfZGF0YVxuXHRcdGxldCBjb21tb25Nc2dTcGFuID0gPHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snY29tbW9uX21lc3NhZ2UnXX08L3NwYW4+XG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9ycykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcblx0XHRcdFx0c2hvd19jcmVhdGVBcGlfa2V5cy5wdXNoKGtleSlcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGxldCBpc0R1bW15VXNlclxuXHRcdGlmICh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pIHtcblx0XHRcdGlzRHVtbXlVc2VyID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcblx0XHR9XG5cdFx0e1xuXHRcdFx0T2JqZWN0LmVudHJpZXMoc2VsZi5wcm9wcy5pbnN1cm5hY2VEYXRhWydzdGF0ZSddKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuXHRcdFx0XHRpZiAoc2VsZi5zdGF0ZS5zdGF0ZV9jb2RlICYmIHNlbGYuc3RhdGUuc3RhdGVfY29kZSAhPSAnJyAmJiBzZWxmLnN0YXRlLnN0YXRlICE9ICcnICYmIHNlbGYuc3RhdGUuc3RhdGVfY29kZSA9PSB2YWx1ZS5nc3RfY29kZSkge1xuXHRcdFx0XHRcdE9iamVjdC5lbnRyaWVzKHZhbHVlLmRpc3RyaWN0KS5tYXAoZnVuY3Rpb24gKFtrLCBkaXN0cmljdHNdKSB7XG5cdFx0XHRcdFx0XHRkaXN0cmljdHNfb3B0LnB1c2goPG9wdGlvbiBrZXk9e2t9IGRhdGEtcGFyYW09XCJkaXN0cmljdFwiIGlkPXtkaXN0cmljdHMuZGlzdHJpY3RfY29kZX0gdmFsdWU9e2Rpc3RyaWN0cy5kaXN0cmljdF9uYW1lfT57ZGlzdHJpY3RzLmRpc3RyaWN0X25hbWV9PC9vcHRpb24+KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0T2JqZWN0LmVudHJpZXModmFsdWUuY2l0aWVzKS5tYXAoZnVuY3Rpb24gKFtrLCBjaXR5XSkge1xuXHRcdFx0XHRcdFx0Y2l0eV9vcHQucHVzaCg8b3B0aW9uIGtleT17a30gZGF0YS1wYXJhbT1cInRvd25cIiBpZD17Y2l0eS5jaXR5X2NvZGV9IHZhbHVlPXtjaXR5LmNpdHlfbmFtZX0+e2NpdHkuY2l0eV9uYW1lfTwvb3B0aW9uPilcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0XHQvLyBsZXQgaXNEaXNhYmxlID0gZmFsc2Vcblx0XHQvLyBpZighaXNEdW1teVVzZXIgJiYgdGhpcy5zdGF0ZS5pc0Rpc2FibGUpe1xuXHRcdC8vIFx0aWYodGhpcy5zdGF0ZS5uYW1lICE9JycgJiYgdGhpcy5zdGF0ZS5kb2IgIT0nJyAmJiB0aGlzLnN0YXRlLmVtYWlsICE9Jycpe1xuXHRcdC8vIFx0XHRpc0Rpc2FibGUgPSB0cnVlXG5cdFx0Ly8gXHR9XG5cblx0XHQvLyB9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHsvKlxuXHRcdFx0XHRcdGlzRGlzYWJsZT9cblx0XHRcdFx0XHRcdDxzcGFuPkNoYW5nZSBkZXRhaWxzPC9zcGFuPlxuXHRcdFx0XHRcdDonJ1xuXHRcdFx0XHQqL31cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIGlkPXtpc0R1bW15VXNlciA/ICdtZW1iZXJfMCcgOiB0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50ID8gYG1lbWJlcl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWAgOiBgbWVtYmVyXyR7dGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlfWB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5hZHVsdF9jb3VudCA9PSAyID9cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS50aXRsZSA9PSAnbXIuJyA/ICdidG4tYWN0aXZlJyA6ICcnfWB9IG5hbWU9XCJ0aXRsZVwiIHZhbHVlPSdtci4nIGRhdGEtcGFyYW09J3RpdGxlJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVRpdGxlLmJpbmQodGhpcywgJ21yLicpfSA+TXIuPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLnRpdGxlID09ICdtcnMuJyA/ICdidG4tYWN0aXZlJyA6ICcnfWB9IHZhbHVlPSdtcnMuJyBuYW1lPVwidGl0bGVcIiBkYXRhLXBhcmFtPSd0aXRsZScgb25DbGljaz17dGhpcy5oYW5kbGVUaXRsZS5iaW5kKHRoaXMsICdtcnMuJyl9ID5NcnMuPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLnRpdGxlID09ICdtci4nID8gJ2J0bi1hY3RpdmUnIDogJyd9YH0gbmFtZT1cInRpdGxlXCIgdmFsdWU9J21yLicgZGF0YS1wYXJhbT0ndGl0bGUnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGUuYmluZCh0aGlzLCAnbXIuJyl9ID5Nci48L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUudGl0bGUgPT0gJ21pc3MnID8gJ2J0bi1hY3RpdmUnIDogJyd9YH0gbmFtZT1cInRpdGxlXCIgdmFsdWU9J21pc3MnIGRhdGEtcGFyYW09J3RpdGxlJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVRpdGxlLmJpbmQodGhpcywgJ21pc3MnKX0gPk1zLjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS50aXRsZSA9PSAnbXJzLicgPyAnYnRuLWFjdGl2ZScgOiAnJ31gfSB2YWx1ZT0nbXJzLicgbmFtZT1cInRpdGxlXCIgZGF0YS1wYXJhbT0ndGl0bGUnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGUuYmluZCh0aGlzLCAnbXJzLicpfSA+TXJzLjwvYnV0dG9uPlxuXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGlucC1tYXJnaW4tcmlnaHQgXCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyB9fSBcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdFx0XHRcdGlkPXtgbmFtZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCduYW1lJykgPiAtMSA/ICdmaWxsLWVycm9yJyA6ICcnfWB9IHJlcXVpcmVkIFxuXHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImZpcnN0X25hbWVcIiBcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibmFtZVwiIFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IFxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyYW09J25hbWUnIFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICduYW1lJyl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzLCBmYWxzZSxmYWxzZSl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uRm9jdXM9e3RoaXMuaGFuZGxlT25Gb2N1cy5iaW5kKHRoaXMsICduYW1lJyl9IFxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVOYW1lID8gJ2Rpc2FibGVkJyA6ICcnfSBcblx0XHRcdFx0XHRcdFx0XHRvbktleVByZXNzPXt0aGlzLmhhbmRsZU5hbWVDaGFyYWN0ZXJzLmJpbmQodGhpcywgJ25hbWUnKX0gXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZGlzYWJsZU5hbWUgPyAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbCcgOiAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyJ30gaHRtbEZvcj17YG5hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT48c3BhbiBjbGFzc05hbWU9XCJsYWJlbERvdFwiPjwvc3Bhbj5GaXJzdCBOYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy91c2VyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbmFtZScpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzLmluZGV4T2YoJ2ZpcnN0X25hbWUnKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWydtYXhfY2hhcmFjdGVyJ119PC9zcGFuPiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBpbnAtbWFyZ2luLXJpZ2h0IFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0gXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdFx0XHRpZD17YG1pZGRsZV9uYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ21pZGRsZV9uYW1lJykgPiAtMSA/ICdmaWxsLWVycm9yJyA6ICcnfWB9IHJlcXVpcmVkIFxuXHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm1pZGRsZV9uYW1lXCIgXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm1pZGRsZV9uYW1lXCIgXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubm9fbG5hbWUgPyAnJyA6IHRoaXMuc3RhdGUubWlkZGxlX25hbWV9IFxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyYW09J21pZGRsZV9uYW1lJyBcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnbWlkZGxlX25hbWUnKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMsIGZhbHNlLGZhbHNlKX0gXG5cdFx0XHRcdFx0XHRcdFx0b25Gb2N1cz17dGhpcy5oYW5kbGVPbkZvY3VzLmJpbmQodGhpcywgJ21pZGRsZV9uYW1lJyl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlTmFtZUNoYXJhY3RlcnMuYmluZCh0aGlzLCAnbWlkZGxlX25hbWUnKX0gXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMuc3RhdGUubm9fbG5hbWUgfHwgdGhpcy5zdGF0ZS5kaXNhYmxlTmFtZT8gJ2Rpc2FibGVkJyA6IFwiXCJ9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZGlzYWJsZU5hbWUgPyAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbCcgOiAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyJ30gaHRtbEZvcj17YG1pZGRsZV9uYW1lXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+TWlkZGxlIE5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3VzZXItMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0c2hvd19jcmVhdGVBcGlfa2V5cy5pbmRleE9mKCdtaWRkbGVfbmFtZScpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ21heF9jaGFyYWN0ZXInXX08L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGlucy1mb3JtLWdyb3VwIGlucC1tYXJnaW4tcmlnaHRcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19IFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0XHRcdFx0aWQ9e2BsYXN0X25hbWVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignbGFzdF9uYW1lJykgPiAtMSA/ICdmaWxsLWVycm9yJyA6ICcnfWB9IHJlcXVpcmVkIFxuXHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImxhc3RfbmFtZVwiIFxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJsYXN0X25hbWVcIiBcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5ub19sbmFtZSA/ICcnIDogdGhpcy5zdGF0ZS5sYXN0X25hbWV9IFxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyYW09J2xhc3RfbmFtZScgXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ2xhc3RfbmFtZScpfSBcblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcywgZmFsc2UsZmFsc2UpfSBcblx0XHRcdFx0XHRcdFx0XHRvbkZvY3VzPXt0aGlzLmhhbmRsZU9uRm9jdXMuYmluZCh0aGlzLCAnbGFzdF9uYW1lJyl9IFxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnN0YXRlLm5vX2xuYW1lIHx8IHRoaXMuc3RhdGUuZGlzYWJsZU5hbWUgPyAnZGlzYWJsZWQnIDogXCJcIn0gXG5cdFx0XHRcdFx0XHRcdFx0b25LZXlQcmVzcz17dGhpcy5oYW5kbGVOYW1lQ2hhcmFjdGVycy5iaW5kKHRoaXMsICdsYXN0X25hbWUnKX0gXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZGlzYWJsZU5hbWUgPyAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbCcgOiAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyJ30gaHRtbEZvcj17YGxhc3RfbmFtZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PjxzcGFuIGNsYXNzTmFtZT1cImxhYmVsRG90XCI+PC9zcGFuPkxhc3QgTmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdXNlci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2xhc3RfbmFtZScpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzLmluZGV4T2YoJ2xhc3RfbmFtZScpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmVycm9yTWVzc2FnZXNbJ21heF9jaGFyYWN0ZXInXX08L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiIHN0eWxlPXt7IG1hcmdpblRvcDogJy0xMHB4JyB9fSA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1kdGxzLWNoa1wiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnggZnctNTAwXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTGFzdG5hbWUuYmluZCh0aGlzKX0gc3R5bGU9e3sgZm9udFNpemU6IDEyLCBwYWRkaW5nTGVmdDogMjQsIGxpbmVIZWlnaHQ6ICcxNnB4JyB9fT5JIGRvbnQgaGF2ZSBhIGxhc3QgbmFtZTxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnN0YXRlLm5vX2xuYW1lfSB2YWx1ZT1cIm9uXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmsgc21hbGwtY2hlY2ttYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtcnQtMTBcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRNYWxlXG5cdFx0XHRcdFx0XHRcdCA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImdlbmRlclwiIHZhbHVlPSdtJyBkYXRhLXBhcmFtPSdnZW5kZXInIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09PSAnbSd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmRlci5iaW5kKHRoaXMsICdtJyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdEZlbWFsZVxuXHRcdFx0XHRcdFx0XHQgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJnZW5kZXJcIiB2YWx1ZT0nZicgZGF0YS1wYXJhbT0nZ2VuZGVyJyBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PT0gJ2YnfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVHZW5kZXIuYmluZCh0aGlzLCAnZicpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRPdGhlcnNcblx0XHRcdFx0XHRcdFx0IDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZ2VuZGVyXCIgdmFsdWU9J28nIGRhdGEtcGFyYW09J2dlbmRlcicgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT09ICdvJ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZGVyLmJpbmQodGhpcywgJ28nKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdnZW5kZXInKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuIDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0c2hvd19jcmVhdGVBcGlfa2V5cy5pbmRleE9mKCdnZW5kZXInKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnMuZ2VuZGVyWzBdfTwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCF0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50P1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXJ0LTEwXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIGlkPXtgZW1haWxzXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZW1haWwnKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJlbWFpbFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmFtPSdlbWFpbCcgXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnZW1haWwnKX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuaGFuZGxlRW1haWx9IFxuXHRcdFx0XHRcdFx0XHRcdFx0b25Gb2N1cz17dGhpcy5oYW5kbGVPbkZvY3VzLmJpbmQodGhpcywgJ2VtYWlsJyl9IFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5kaXNhYmxlRW1haWwgPyAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbCcgOiAnZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyJ30gaHRtbEZvcj17YGVtYWlsc18ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PjxzcGFuIGNsYXNzTmFtZT1cImxhYmVsRG90XCI+PC9zcGFuPkVtYWlsPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21haWwtMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdlbWFpbCcpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1sndmFsaWRfZW1haWwnXX08L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ6PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8VmVyaWZ5RW1haWwgey4uLnRoaXMucHJvcHN9IGlzX2VuZG9yc2VtZW50PXt0cnVlfSBtZW1iZXJfaWQ9e3RoaXMucHJvcHMubWVtYmVyX2lkfSB2YWxpZGF0ZUVycm9ycyA9e3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnN9IGVtYWlsPXt0aGlzLnN0YXRlLmVtYWlsfSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9IHZlcmlmeUVuZG9yc2VtZW50RW1haWw9e3RoaXMudmVyaWZ5RW5kb3JzZW1lbnRFbWFpbC5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2VtYWlsJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VzWyd2YWxpZF9lbWFpbCddfTwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHR7LyogPGlucHV0IHR5cGU9XCJidXR0b25cIiAgaWQ9e2Bpc24tZGF0ZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sIHRleHQtbGVmdCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZG9iJyk+IC0xPydmaWxsLWVycm9yJzonJ31gfSByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJkb2JcIiBuYW1lPVwiZG9iXCIgdmFsdWU9e3RoaXMuc3RhdGUuZG9iP3RoaXMuc3RhdGUuZG9iOid5eXl5L21tL2RkJ30gZGF0YS1wYXJhbT0nZG9iJyBvbkNsaWNrPXt0aGlzLm9wZW5EYXRlTW9kYWwuYmluZCh0aGlzKX0vPiAqL31cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWxcIiBodG1sRm9yPVwiaW5zLWRhdGVcIj5EYXRlIG9mIGJpcnRoPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYWxlbmRhci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0ey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGVNb2RhbCA/IDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItb3ZlcmxheVwiPjxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXI9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21vbWVudCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZVNwYW4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGU9eyhkYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5kaWZmKG1vbWVudCgobmV3IERhdGUpKSwgJ2RheXMnKSAgPiAwIHx8IGRhdGUuZGlmZihtb21lbnQoKG5ldyBEYXRlKSksICdkYXlzJykgPiA0MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9kYXkgPSB7ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnNlbGVjdERhdGVGcm9tQ2FsZW5kYXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYi1zZWxlY3QtZGl2IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYi1zZWxlY3QgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBpZD17YGRheWRyb3Bkb3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9e3RoaXMuc3RhdGUuZGF5fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBoaWRkZW4+REQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkb2ItZG93bi1pY29uXCIgc3R5bGU9e3sgcmlnaHQ6ICc0cHgnIH19IHNyYz1cIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb2Itc2VsZWN0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgaWQ9e2Btb250aGRyb3Bkb3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9e3RoaXMuc3RhdGUubW50aH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gaGlkZGVuPk1NPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZG9iLWRvd24taWNvblwiIHN0eWxlPXt7IHJpZ2h0OiAnNHB4JyB9fSBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9iLXNlbGVjdCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGlkPXtgeWVhcmRyb3Bkb3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gdmFsdWU9e3RoaXMuc3RhdGUueWVhcn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gaGlkZGVuPllZWVk8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkb2ItZG93bi1pY29uXCIgc3R5bGU9e3sgcmlnaHQ6ICczcHgnIH19IHNyYz1cIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZG9iJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuZXJyb3JNZXNzYWdlc1snYWR1bHRfYWdlJ119PC9zcGFuPiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHNob3dfY3JlYXRlQXBpX2tleXMuaW5kZXhPZignZG9iJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzLmRvYlswXX08L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBhdXRvY29tcGxldGVcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19IFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0XHRcdFx0aWQ9e2Bpc25zdGF0ZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdzdGF0ZScpID4gLTEgPyAnZmlsbC1lcnJvcicgOiAnJ30gdXNlclN0YXRlYH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwic3RhdGVcIiBcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwic3RhdGVcIiBcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zdGF0ZX0gXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0nc3RhdGUnIFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXRlLmJpbmQodGhpcywgJ3N0YXRlJyl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzLCBmYWxzZSxmYWxzZSl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uRm9jdXM9e3RoaXMuaGFuZGxlT25Gb2N1cy5iaW5kKHRoaXMsICdzdGF0ZScpfSBcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXN0YXRlLWNvZGU9e3RoaXMuc3RhdGUuc3RhdGVfY29kZX0gXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPXtgaXNuc3RhdGVfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT5TdGF0ZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdzdGF0ZScpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzLmluZGV4T2YoJ3N0YXRlJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+e3RoaXMucHJvcHMuY3JlYXRlQXBpRXJyb3JzLnN0YXRlWzBdfTwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5zdGF0ZV9jb2RlICE9ICcnID9cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBhdXRvY29tcGxldGVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyB9fSBcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17YGlzbmRpc3RyaWN0XyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignc3RhdGUnKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9IHVzZXJEaXN0cmljdGB9IHJlcXVpcmVkIFxuXHRcdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiZGlzdHJpY3RcIiBcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkaXN0cmljdFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGlzdHJpY3R9IFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0nZGlzdHJpY3QnIFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlRGlzdHJpY3QuYmluZCh0aGlzLCAnZGlzdHJpY3QnKX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcywgZmFsc2UsZmFsc2UpfSBcblx0XHRcdFx0XHRcdFx0XHRcdG9uRm9jdXM9e3RoaXMuaGFuZGxlT25Gb2N1cy5iaW5kKHRoaXMsICdkaXN0cmljdCcpfSBcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtc3RhdGUtY29kZT17dGhpcy5zdGF0ZS5kaXN0cmljdF9jb2RlfSBcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPXtgaXNuZGlzdHJpY3RfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT5EaXN0cmljdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDogPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiIG9uQ2xpY2s9e3RoaXMuc2hvd0FsZXJ0LmJpbmQodGhpcywnIHN0YXRlICcpfT5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJywgZm9udFdlaWdodDogJzEwMCcsIGNvbG9yOiAnZ3JheScgfX0gXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2Bpc25kaXN0cmljdF8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2Rpc3RyaWN0JykgPiAtMSA/ICdmaWxsLWVycm9yJyA6ICcnfWB9IHJlcXVpcmVkIFxuXHRcdFx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiZGlzdHJpY3RcIiBcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkaXN0cmljdFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCJTZWxlY3QgRGlzdHJpY3RcIiBkaXNhYmxlZCBcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyYW09J2Rpc3RyaWN0JyBcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsXCIgaHRtbEZvcj17YGlzbmRpc3RyaWN0XyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+RGlzdHJpY3Q8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZGlzdHJpY3QnKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHRjb21tb25Nc2dTcGFuIDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0c2hvd19jcmVhdGVBcGlfa2V5cy5pbmRleE9mKCdkaXN0cmljdCcpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9ycy5kaXN0cmljdFswXX08L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuZGlzdHJpY3RfY29kZSAhPSAnJyA/XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgYXV0b2NvbXBsZXRlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17YGlzblRvd25fJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ3N0YXRlJykgPiAtMSA/ICdmaWxsLWVycm9yJyA6ICcnfSB1c2VyVG93bmB9IHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJ0b3duXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ0b3duXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnRvd259XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXBhcmFtPSd0b3duJ1xuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlVG93bi5iaW5kKHRoaXMsICd0b3duJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcywgZmFsc2UsZmFsc2UpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25Gb2N1cz17dGhpcy5oYW5kbGVPbkZvY3VzLmJpbmQodGhpcywgJ3Rvd24nKX1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtc3RhdGUtY29kZT17dGhpcy5zdGF0ZS50b3duX2NvZGV9IFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9e2Bpc25Ub3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+VG93bjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDogPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiIG9uQ2xpY2s9e3RoaXMuc2hvd0FsZXJ0LmJpbmQodGhpcywnIGRpc3RyaWN0ICcpfT5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJywgZm9udFdlaWdodDogJzEwMCcsIGNvbG9yOiAnZ3JheScgfX0gXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2Bpc25kaXN0cmljdF8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgJHt0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ3Rvd24nKSA+IC0xID8gJ2ZpbGwtZXJyb3InIDogJyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJ0b3duXCIgXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidG93blwiIFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCJTZWxlY3QgVG93blwiIGRpc2FibGVkIFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0ndG93bicgXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbFwiIGh0bWxGb3I9e2Bpc25kaXN0cmljdF8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PlRvd248L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZigndG93bicpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzLmluZGV4T2YoJ3Rvd24nKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnMudG93blswXX08L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT17YGlucy1zZWxlY3QtZHJvcCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignc3RhdGUnKT4gLTE/J2ZpbGwtZXJyb3InOicnfWB9IGlkPVwic3RhdGVfZHJvcGRvd25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGF0ZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5zdGF0ZX0+XG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBkYXRhLXBhcmFtPVwic3RhdGVcIiAgaGlkZGVuIGlkPXswfSB2YWx1ZT1cInNlbGVjdF9zdGF0ZVwiIHZhbHVlPVwic3RhdGVcIj5TZWxlY3QgU3RhdGU8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydzdGF0ZSddKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPG9wdGlvbiBrZXk9e2tleX0gZGF0YS1wYXJhbT1cInN0YXRlXCIgaWQ9e3ZhbHVlLmdzdF9jb2RlfSB2YWx1ZT17dmFsdWUuc3RhdGVfbmFtZX0+e3ZhbHVlLnN0YXRlX25hbWV9PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHR7Lyo8aW5wdXQgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319IHR5cGU9XCJ0ZXh0XCIgaWQ9e2Bpc25zdGF0ZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdzdGF0ZScpPiAtMT8nZmlsbC1lcnJvcic6Jyd9YH0gcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwibm9uZVwiIG5hbWU9XCJzdGF0ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnN0YXRlfSBkYXRhLXBhcmFtPSdzdGF0ZScgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywnc3RhdGUnKX0gb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdH0gb25Gb2N1cz17dGhpcy5oYW5kbGVPbkZvY3VzLmJpbmQodGhpcywnc3RhdGUnKX0vPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbFwiIGh0bWxGb3I9e2Bpc25zdGF0ZV8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PipTdGF0ZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdzdGF0ZScpPiAtMT9cblx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbjonJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzLmluZGV4T2YoJ3N0YXRlJyk+IC0xP1xuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnMuc3RhdGVbMF19PC9zcGFuPjonJ1x0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+Ki99XG5cdFx0XHRcdFx0ey8qPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuc3RhdGUgPT0gJyc/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3RoaXMuc2hvd0FsZXJ0LmJpbmQodGhpcyl9PiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHN0eWxlPXt7J3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScsZm9udFdlaWdodDogJzEwMCcsICAgIGNvbG9yOiAnZ3JheSd9fSB0eXBlPVwidGV4dFwiIGlkPXtgaXNuZGlzdHJpY3RfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZGlzdHJpY3QnKT4gLTE/J2ZpbGwtZXJyb3InOicnfWB9IHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm5vbmVcIiBuYW1lPVwiZGlzdHJpY3RcIiB2YWx1ZT1cIlNlbGVjdCBEaXN0cmljdFwiIGRpc2FibGVkIGRhdGEtcGFyYW09J2Rpc3RyaWN0Jy8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWxcIiBodG1sRm9yPXtgaXNuZGlzdHJpY3RfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfT4qRGlzdHJpY3Q8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPXtgaW5zLXNlbGVjdC1kcm9wICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdkaXN0cmljdCcpPiAtMT8nZmlsbC1lcnJvcic6Jyd9YH0gaWQ9XCJkaXN0cmljdF9kcm9wZG93blwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURpc3RyaWN0LmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRpc3RyaWN0fT5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGRhdGEtcGFyYW09XCJkaXN0cmljdFwiICBoaWRkZW4gaWQ9ezB9IHZhbHVlPVwic2VsZWN0X2Rpc3RyaWN0XCIgdmFsdWU9XCJkaXN0cmljdFwiPlNlbGVjdCBEaXN0cmljdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdHtkaXN0cmljdHNfb3B0fVxuXHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsXCIgaHRtbEZvcj17YGlzbmRpc3RyaWN0XyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+KkRpc3RyaWN0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvY2F0aW9uLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cblxuXHRcdFx0XHRcdFx0XHR7Lyo8aW5wdXQgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319IHR5cGU9XCJ0ZXh0XCIgaWQ9e2Bpc25kaXN0cmljdF8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdkaXN0cmljdCcpPiAtMT8nZmlsbC1lcnJvcic6Jyd9YH0gcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwibm9uZVwiIG5hbWU9XCJkaXN0cmljdFwiIHZhbHVlPXt0aGlzLnN0YXRlLmRpc3RyaWN0fSBkYXRhLXBhcmFtPSdkaXN0cmljdCcgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywnZGlzdHJpY3QnKX0gb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdH0gb25Gb2N1cz17dGhpcy5oYW5kbGVPbkZvY3VzLmJpbmQodGhpcywnZGlzdHJpY3QnKX0gLz5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9e2Bpc25kaXN0cmljdF8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PkRpc3RyaWN0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e1x0XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZGlzdHJpY3QnKT4gLTE/XG5cdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW46Jydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRzaG93X2NyZWF0ZUFwaV9rZXlzLmluZGV4T2YoJ2Rpc3RyaWN0Jyk+IC0xP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9ycy5kaXN0cmljdFswXX08L3NwYW4+OicnXHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQqL31cblx0XHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zdGF0ZSA9PSAnJz88ZGl2IG9uQ2xpY2s9e3RoaXMuc2hvd0FsZXJ0LmJpbmQodGhpcyl9PiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHN0eWxlPXt7J3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScsZm9udFdlaWdodDogJzEwMCcsICAgIGNvbG9yOiAnZ3JheSd9fSB0eXBlPVwidGV4dFwiIGlkPXtgaXNuZGlzdHJpY3RfJHt0aGlzLnByb3BzLm1lbWJlcl9pZH1gfSBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZigndG93bicpPiAtMT8nZmlsbC1lcnJvcic6Jyd9YH0gcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwibm9uZVwiIG5hbWU9XCJ0b3duXCIgdmFsdWU9XCJTZWxlY3QgVG93blwiIGRpc2FibGVkIGRhdGEtcGFyYW09J3Rvd24nLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbFwiIGh0bWxGb3I9e2Bpc25kaXN0cmljdF8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PipUb3duPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvY2F0aW9uLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0OjxkaXY+XHRcblx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3NOYW1lPXtgaW5zLXNlbGVjdC1kcm9wICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCd0b3duJyk+IC0xPydmaWxsLWVycm9yJzonJ31gfSBpZD1cInRvd25fZHJvcGRvd25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVUb3duLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLnRvd259IGRpc2FibGVkPXt0aGlzLnN0YXRlLnN0YXRlID09Jyc/dHJ1ZTpmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gZGF0YS1wYXJhbT1cInRvd25cIiAgaGlkZGVuIGlkPXswfSB2YWx1ZT1cInNlbGVjdF90b3duXCIgdmFsdWU9XCJ0b3duXCI+U2VsZWN0IFRvd248L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2NpdHlfb3B0fVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbFwiIGh0bWxGb3I9e2Bpc250b3duXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWR9YH0+KlRvd248L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHsvKjxpbnB1dCBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0gdHlwZT1cInRleHRcIiBpZD17YGlzbnRvd24ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCd0b3duJyk+IC0xPydmaWxsLWVycm9yJzonJ31gfSByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJub25lXCIgbmFtZT1cInRvd25cIiB2YWx1ZT17dGhpcy5zdGF0ZS50b3dufSBkYXRhLXBhcmFtPSd0b3duJyBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCd0b3duJyl9IG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXR9IG9uRm9jdXM9e3RoaXMuaGFuZGxlT25Gb2N1cy5iaW5kKHRoaXMsJ3Rvd24nKX0vPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj17YGlzbnRvd24ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PlRvd248L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvY2F0aW9uLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZigndG93bicpPiAtMT9cblx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbjonJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHNob3dfY3JlYXRlQXBpX2tleXMuaW5kZXhPZigndG93bicpPiAtMT9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW5cIj57dGhpcy5wcm9wcy5jcmVhdGVBcGlFcnJvcnMudG93blswXX08L3NwYW4+OicnXHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj4qL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0gXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRcdFx0XHRpZD17YGluc2FkZHJlc3Mke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdhZGRyZXNzJykgPiAtMSA/ICdmaWxsLWVycm9yJyA6ICcnfWB9IHJlcXVpcmVkIFxuXHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImFkZHJlc3NcIiBcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiYWRkcmVzc1wiIFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9IFxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyYW09J2FkZHJlc3MnIFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdhZGRyZXNzJyl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzLCBmYWxzZSxmYWxzZSl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uRm9jdXM9e3RoaXMuaGFuZGxlT25Gb2N1cy5iaW5kKHRoaXMsICdhZGRyZXNzJyl9IFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj17YGluc2FkZHJlc3Mke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PjxzcGFuIGNsYXNzTmFtZT1cImxhYmVsRG90XCI+PC9zcGFuPkZ1bGwgQWRkcmVzczwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdhZGRyZXNzJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0Y29tbW9uTXNnU3BhbiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHNob3dfY3JlYXRlQXBpX2tleXMuaW5kZXhPZignYWRkcmVzcycpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9ycy5hZGRyZXNzWzBdfTwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIG1iLTBcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIiBcblx0XHRcdFx0XHRcdFx0XHRpZD17YGlzbnBpbl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9IFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycy5pbmRleE9mKCdwaW5jb2RlJykgPiAtMSA/ICdmaWxsLWVycm9yJyA6ICcnfWB9IHJlcXVpcmVkIFxuXHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cInBpbmNvZGVcIiBcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGluY29kZVwiIFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnBpbmNvZGV9IFxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFyYW09J3BpbmNvZGUnIFxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxla2V5LmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdwaW5jb2RlJyl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzLCBmYWxzZSxmYWxzZSl9IFxuXHRcdFx0XHRcdFx0XHRcdG9uRm9jdXM9e3RoaXMuaGFuZGxlT25Gb2N1cy5iaW5kKHRoaXMsICdwaW5jb2RlJyl9IFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj17YGlzbnBpbl8ke3RoaXMucHJvcHMubWVtYmVyX2lkfWB9PjxzcGFuIGNsYXNzTmFtZT1cImxhYmVsRG90XCI+PC9zcGFuPlBpbmNvZGU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvY2F0aW9uLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZigncGluY29kZScpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdGNvbW1vbk1zZ1NwYW4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZhbGlkYXRlT3RoZXJFcnJvcnMuaW5kZXhPZigncGluY29kZScpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPlBsZWFzZSBFbnRlciBWYWxpZCBQaW5jb2RlPC9zcGFuPiA6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHNob3dfY3JlYXRlQXBpX2tleXMuaW5kZXhPZigncGluY29kZScpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPnt0aGlzLnByb3BzLmNyZWF0ZUFwaUVycm9ycy5waW5jb2RlWzBdfTwvc3Bhbj4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCAmJiB0aGlzLnN0YXRlLmlzX2NoYW5nZSA/XG5cdFx0XHRcdFx0XHQ8SW5zdXJhbmNlUHJvb2ZzIHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VTZWxmIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgU3RhdGVDaXR5QXV0b0NvbXBsZXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfVxuICAgIH1cbiAgIFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhdXRvY29tcGxldGVcIiBzdHlsZT17e3dpZHRoOiczMDBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibXlJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm15Q291bnRyeVwiIHBsYWNlaG9sZGVyPVwiQ291bnRyeVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyx0aGlzLnByb3BzLnN0YXRlKX0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlQ2l0eUF1dG9Db21wbGV0ZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIFZlcmlmeUVtYWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgLy8gZW1haWwgdmVyaWZpY2F0aW9uXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdG9sZEVtYWlsOicnLFxuXHRcdFx0VmVyaWZ5RW1haWxzOmZhbHNlLFxuXHRcdFx0c2hvd090cDpmYWxzZSxcblx0XHRcdG90cFRpbWVvdXQ6ZmFsc2UsXG5cdFx0XHRpbml0aWFsU3RhZ2U6dHJ1ZSxcblx0XHRcdG90cFZhbHVlOicnLFxuXHRcdFx0ZW1haWxTdWNjZXNzSWQ6Jydcblx0XHR9XG5cdH1cblx0XG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcblx0XHRpZih0aGlzLnN0YXRlLmluaXRpYWxTdGFnZSAmJiB0aGlzLnByb3BzLmVtYWlsICE9Jycpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZW1haWw6dGhpcy5wcm9wcy5lbWFpbCxvbGRFbWFpbDp0aGlzLnByb3BzLmVtYWlsLCBpbml0aWFsU3RhZ2U6ZmFsc2V9KVx0XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRpZih0aGlzLnN0YXRlLmluaXRpYWxTdGFnZSAmJiB0aGlzLnByb3BzLmVtYWlsICE9Jycpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZW1haWw6dGhpcy5wcm9wcy5lbWFpbCxvbGRFbWFpbDp0aGlzLnByb3BzLmVtYWlsLCBpbml0aWFsU3RhZ2U6ZmFsc2V9KVx0XG5cdFx0fVx0XG5cdH1cblx0XG5cdGhhbmRsZUVuZG9yZXNtZW50RW1haWwoZXZlbnQpIHtcblx0XHRsZXQgb2xkRW1haWxcblx0XHRpZiAodGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCAmJiB0aGlzLnByb3BzLnVzZXJfZGF0YSAmJiB0aGlzLnByb3BzLnVzZXJfZGF0YS5sZW5ndGggPiAwKSB7XG5cdFx0XHRvbGRFbWFpbCA9IHRoaXMucHJvcHMudXNlcl9kYXRhWzBdLmVtYWlsXG5cdFx0fWVsc2V7XG5cdFx0XHRvbGRFbWFpbCA9IHRoaXMuc3RhdGUub2xkRW1haWxcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZW1haWw6ZXZlbnQudGFyZ2V0LnZhbHVlfSwoKT0+e1xuXHRcdFx0aWYob2xkRW1haWwgIT09IHRoaXMuc3RhdGUuZW1haWwpe1xuXHRcdFx0XHRsZXQgdmFsaWRFbWFpbCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXHRcdFx0XHR2YWxpZEVtYWlsID0gdmFsaWRFbWFpbC50ZXN0KHRoaXMuc3RhdGUuZW1haWwpXG5cdFx0XHRcdGlmICh2YWxpZEVtYWlsKSB7XHRcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtWZXJpZnlFbWFpbHM6dHJ1ZX0pXG5cdFx0XHRcdFx0aWYodGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCl7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdChmYWxzZSx0cnVlKVxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52ZXJpZnlFbmRvcnNlbWVudEVtYWlsKHRoaXMuc3RhdGUuZW1haWwsZmFsc2UsdHJ1ZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnByb3BzLnZlcmlmeUVuZG9yc2VtZW50RW1haWwodGhpcy5zdGF0ZS5lbWFpbCxmYWxzZSxmYWxzZSlcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7VmVyaWZ5RW1haWxzOmZhbHNlfSlcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuc3RhdGUuZW1haWwgPT0gJycpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtWZXJpZnlFbWFpbHM6ZmFsc2V9KVxuXHRcdFx0XHRpZih0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50KXtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdChmYWxzZSx0cnVlKVx0XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHRoaXMucHJvcHMudmVyaWZ5RW5kb3JzZW1lbnRFbWFpbCh0aGlzLnN0YXRlLmVtYWlsLGZhbHNlLHRydWUpIC8vdmVyaWZ5IGVtYWlsIHVzaW5nIG90cFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdFZlcmlmeUVtYWlsKHJlc2VuZEZsYWcpe1xuXHRcdGlmKHJlc2VuZEZsYWcpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7b3RwVGltZW91dDpmYWxzZSxvdHBWYWx1ZTonJyB9KVxuXHRcdH1cblx0XHRsZXQgZGF0YT17fVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCAmJiB0aGlzLnByb3BzLnVzZXJfZGF0YSAmJiB0aGlzLnByb3BzLnVzZXJfZGF0YS5sZW5ndGggPiAwKSB7XG5cdFx0XHRkYXRhLnByb2ZpbGUgPSB0aGlzLnByb3BzLnVzZXJfZGF0YVswXS5wcm9maWxlXG5cdFx0fWVsc2V7XG5cdFx0XHRkYXRhLnByb2ZpbGUgPSB0aGlzLnByb3BzLm1lbWJlcl9pZC5pZFxuXHRcdH1cblx0XHRsZXQgdmFsaWRFbWFpbCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXHRcdGlmICh0aGlzLnN0YXRlLmVtYWlsICE9ICcnKSB7XHRcdFx0XG5cdFx0XHR2YWxpZEVtYWlsID0gdmFsaWRFbWFpbC50ZXN0KHRoaXMuc3RhdGUuZW1haWwpXG5cdFx0XHRpZiAodmFsaWRFbWFpbCkge1xuXHRcdFx0XHRkYXRhLmVtYWlsPSB0aGlzLnN0YXRlLmVtYWlsXHRcblx0XHRcdFx0dGhpcy5wcm9wcy5zZW5kT3RwT25FbWFpbChkYXRhLCAocmVzcCkgPT4geyAgICAgICAgXG5cdCAgICAgICAgICAgIFx0aWYocmVzcCAmJiByZXNwLmlkKXtcblx0XHQgICAgICAgICAgICBcdHRoaXMuc2V0U3RhdGUoe2VtYWlsU3VjY2Vzc0lkOnJlc3AuaWQsIHNob3dPdHA6IHRydWUsIG90cFRpbWVvdXQ6IGZhbHNlIH0pXG5cdFx0ICAgICAgICAgICAgXHRpZih0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50KXtcblx0XHQgICAgICAgICAgICBcdFx0dGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQoZmFsc2UsdHJ1ZSlcblx0XHQgICAgICAgICAgICBcdH1cblx0XHQgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3RwVGltZW91dDogdHJ1ZSB9KVxuXHRcdCAgICAgICAgICAgICAgICB9LCAxMDAwMClcblx0XHQgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIk9UUCBoYXMgYmVlbiBzZW50IHN1Y2Nlc3NmdWx5IHRvIHlvdXIgbmV3IGVtYWlsLlwifSlcblx0XHQgICAgICAgICAgICB9ZWxzZSB7XG5cdFx0ICAgICAgICAgICAgXHR0aGlzLnNldFN0YXRlKHtzaG93T3RwOiBmYWxzZSwgb3RwVGltZW91dDogZmFsc2UgfSlcblx0XHQgICAgICAgICAgICBcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogcmVzcC5tZXNzYWdlIH0pXG5cdFx0ICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgfSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1ZlcmlmeUVtYWlsczpmYWxzZX0pXG5cdFx0XHRcdGlmKCF0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50KXtcblx0XHRcdFx0XHR0aGlzLnByb3BzLnZlcmlmeUVuZG9yc2VtZW50RW1haWwodGhpcy5zdGF0ZS5lbWFpbCxmYWxzZSx0cnVlKVxuXHRcdFx0XHR9XG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgdmFsaWQgRW1haWxcIiB9KTtcblx0XHRcdH1cblx0XHR9ZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1ZlcmlmeUVtYWlsczpmYWxzZX0pXG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgdmFsaWQgRW1haWxcIiB9KTtcblx0XHR9XG5cdH1cblxuXHRzZXRPdHAoZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe290cFZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KVxuXHR9XG5cdHN1Ym1pdE90cCgpe1xuXHRcdGxldCBkYXRhPXt9XG5cdFx0ZGF0YS5pZCA9IHRoaXMuc3RhdGUuZW1haWxTdWNjZXNzSWRcblx0XHRpZiAodGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCAmJiB0aGlzLnByb3BzLnVzZXJfZGF0YSAmJiB0aGlzLnByb3BzLnVzZXJfZGF0YS5sZW5ndGggPiAwKSB7XG5cdFx0XHRkYXRhLnByb2ZpbGUgPSB0aGlzLnByb3BzLnVzZXJfZGF0YVswXS5wcm9maWxlXG5cdFx0fWVsc2V7XG5cdFx0XHRkYXRhLnByb2ZpbGUgPSB0aGlzLnByb3BzLm1lbWJlcl9pZC5pZFxuXHRcdH1cblx0XHRkYXRhLm90cCA9IHBhcnNlSW50KHRoaXMuc3RhdGUub3RwVmFsdWUpXG5cdFx0aWYodGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCl7XG5cdFx0XHRkYXRhLnByb2Nlc3NfaW1tZWRpYXRlbHkgPSBmYWxzZVxuXHRcdH1lbHNle1xuXHRcdFx0ZGF0YS5wcm9jZXNzX2ltbWVkaWF0ZWx5ID0gdHJ1ZVxuXHRcdH1cblx0XHR0aGlzLnByb3BzLnN1Ym1pdEVtYWlsT1RQKGRhdGEsKHJlc3AsIGVycm9yKSA9Pntcblx0XHRcdGlmKHJlc3Ape1xuXHRcdCAgICAgICAgdGhpcy5wcm9wcy52ZXJpZnlFbmRvcnNlbWVudEVtYWlsKHRoaXMuc3RhdGUuZW1haWwsdHJ1ZSxmYWxzZSlcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7VmVyaWZ5RW1haWxzOmZhbHNlLHNob3dPdHA6ZmFsc2Usb3RwVGltZW91dDpmYWxzZSxvdHBWYWx1ZTonJyxlbWFpbFN1Y2Nlc3NJZDonJ30pXG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogcmVzcC5tZXNzYWdlIH0pO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogcmVzcC5tZXNzYWdlIH0pO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbC0xMiBtcnQtMTAgJHt0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50PycnOiAnaW5zLWZtcGFnZS1pbnB1dCd9YH0gb25DbGljaz17KGUpPT57ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdH19PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zaG93T3RwPydpbnMtZW1haWwtY29udCc6Jyd9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgaW5zLWZvcm0tZ3JvdXAgJHt0aGlzLnN0YXRlLnNob3dPdHA/J21iLTAnOicnfWB9PlxuXHRcdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdFx0XHRpZD17YGVtYWlsc18ke3RoaXMucHJvcHMubWVtYmVyX2lkLmlkfWB9IFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCAke3RoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMgJiYgdGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCAmJiB0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzLmluZGV4T2YoJ2VtYWlsJykgPiAtMSA/ICdmaWxsLWVycm9yJzogJyd9ICR7dGhpcy5wcm9wcy5pc0VtYWlsRXJyb3I/J2Vycm9yQ29sb3JCb3JkZXInOicnfWB9IHJlcXVpcmVkIFxuXHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJlbWFpbFwiIFxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIiBcblx0XHRcdFx0XHRcdFx0ZGF0YS1wYXJhbT0nZW1haWwnIFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZG9yZXNtZW50RW1haWwuYmluZCh0aGlzKX0gXG5cdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5oYW5kbGVFbmRvcmVzbWVudEVtYWlsLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsXCIgaHRtbEZvcj1cInN0YXRpY2tcIj48c3BhbiBjbGFzc05hbWU9XCJsYWJlbERvdFwiPjwvc3Bhbj5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21haWwtMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuVmVyaWZ5RW1haWxzP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZyZnktZWRpdFwiIG9uQ2xpY2s9e3RoaXMuVmVyaWZ5RW1haWwuYmluZCh0aGlzLCBmYWxzZSl9PlZlcmlmeSBub3c8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuc2hvd090cCAmJiB0aGlzLnN0YXRlLlZlcmlmeUVtYWlscz9cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLW90cC1tYWlsLWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW5zLWVtLW90cFwiPkFuIE9UUCBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWwgYWRkcmVzczwvcD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlbS1pbnMtaW5wLWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImVtLWlucy1pbnB1XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBPVFBcIiBvbkNoYW5nZT17dGhpcy5zZXRPdHAuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUub3RwVmFsdWV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5vdHBWYWx1ZS5sZW5ndGggPT02P1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0T3RwLmJpbmQodGhpcyl9PlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUub3RwVGltZW91dD9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJyZHNuLWlwdC1tZFwiIG9uQ2xpY2s9e3RoaXMuVmVyaWZ5RW1haWwuYmluZCh0aGlzLHRydWUpfT5SZXNlbmQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBWZXJpZnlFbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=