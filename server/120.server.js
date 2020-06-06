exports.ids = [120];
exports.modules = {

/***/ "./dev/js/components/insurance/insuranceDetailsView.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/insurance/insuranceDetailsView.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _insuranceSelf = __webpack_require__(/*! ./insuranceSelf.js */ "./dev/js/components/insurance/insuranceSelf.js");

var _insuranceSelf2 = _interopRequireDefault(_insuranceSelf);

var _insuranceFamily = __webpack_require__(/*! ./insuranceFamily.js */ "./dev/js/components/insurance/insuranceFamily.js");

var _insuranceFamily2 = _interopRequireDefault(_insuranceFamily);

var _insuranceCommonSection = __webpack_require__(/*! ./insuranceCommonSection.js */ "./dev/js/components/insurance/insuranceCommonSection.js");

var _insuranceCommonSection2 = _interopRequireDefault(_insuranceCommonSection);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceInputView extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			// selected_plan_plan:'',
			no_lname: false,
			is_edit: true,
			gst: 'inclusive of 18% GST',
			enable_proceed: false,
			profiles_selected: [],
			saveMembers: false,
			// is_adult_only: false,
			is_disable: [],
			// isValidated: false,
			validateErrors: {},
			validateOtherErrors: {},
			validatingNames: [],
			CreateApiErrors: {},
			show_selected_profiles: [],
			validateDobErrors: [],
			errorMessages: [],
			endorsementError: []
		};
	}
	componentDidMount() {
		let self = this;
		if (window) {
			window.scrollTo(0, 0);
		}
		this.setState(_extends({}, self.props.self_data_values, { selected_plan_price: this.props.selected_plan.amount }));
		if (this.props.create_payment_resp) {
			if (this.props.create_payment_resp.members && this.props.create_payment_resp.members.length > 0) {
				this.setState({ CreateApiErrors: self.props.create_payment_resp });
			}
		}
	}

	componentWillReceiveProps(props) {
		let card;
		let self = this;
		let isDummyUser;
		if (!this.state.saveMembers && Object.keys(props.selected_plan).length > 0 && props.USER.defaultProfile && !props.currentSelectedInsuredMembersId.length) {
			// let loginUser = props.USER.selectedProfile
			let loginUser = props.USER.defaultProfile;
			let membersId = [];
			let isDefaultUser;
			if (props.USER.profiles && Object.keys(props.USER.profiles).length && props.USER.profiles[props.USER.defaultProfile]) {
				isDefaultUser = props.USER.profiles[props.USER.defaultProfile].is_default_user;
			}
			isDummyUser = props.USER.profiles[props.USER.defaultProfile].isDummyUser;
			if (!isDummyUser) {
				membersId.push({ '0': loginUser, type: 'self' });
				var n = props.selected_plan.adult_count + props.selected_plan.child_count - 1;
				card = [...Array(props.selected_plan.adult_count - 1)].map((e, i) => {
					membersId.push({ [i + 1]: i + 1, type: 'adult' });
				});

				card = [...Array(props.selected_plan.child_count)].map((e, i) => {
					if (props.selected_plan.adult_count > 1) {
						membersId.push({ [i + 2]: i + 2, type: 'child' });
					} else {
						membersId.push({ [i + 1]: i + 1, type: 'child' });
					}
				});
				/*
    				if(n !== 0){
    					card = [...Array(n)].map((e, i) => {
    						membersId.push({[i+1]: i+1, type:''})
    					})
    				}*/
			} else {
				membersId.push({ '0': 0, type: 'self' });
				var n = props.selected_plan.adult_count + props.selected_plan.child_count - 1;
				card = [...Array(props.selected_plan.adult_count - 1)].map((e, i) => {
					membersId.push({ [i + 1]: i + 1, type: 'adult' });
				});

				card = [...Array(props.selected_plan.child_count)].map((e, i) => {
					if (props.selected_plan.adult_count > 1) {
						membersId.push({ [i + 2]: i + 2, type: 'child' });
					} else {
						membersId.push({ [i + 1]: i + 1, type: 'child' });
					}
				});
				// if(n !== 0){
				// 	card = [...Array(n)].map((e, i) => {
				// 		membersId.push({[i+1]: i+1})
				// 	})
				// }
			}
			props.saveCurrentSelectedMembers(membersId);
			this.setState({ saveMembers: true });
		}
		let profileLength = Object.keys(props.USER.profiles).length;
		let currentSelectedProfiles = [];
		let show_selected_profile = [];
		this.props.currentSelectedInsuredMembersId.map((val, key) => {
			currentSelectedProfiles.push(val[key]);
		});
		if (profileLength > 0) {
			if (!props.USER.profiles[props.USER.defaultProfile].isDummyUser) {
				{
					Object.entries(props.USER.profiles).map(function ([key, value]) {

						if (currentSelectedProfiles.indexOf(parseInt(key)) == -1 && key !== props.USER.defaultProfile) {
							show_selected_profile.push(key);
						}
					});
				}
				self.setState({ show_selected_profiles: show_selected_profile });
			}
		}
	}

	checkForValidation(profile_data, member_id) {
		let profiles = this.state.profiles_selected;
		if (profiles.length) {
			profiles = this.state.profiles_selected.filter(x => x.id != member_id);
		}
		profiles.push(profile_data);

		let is_enable = profiles.filter(x => !x.isformCompleted);
		is_enable = is_enable.length ? false : true;
		this.setState({ enable_proceed: is_enable, profiles_selected: profiles });
	}

	proceedPlan() {
		let is_disable = false;
		let member_ref = '';
		let empty_feilds = [];
		let currentSelectedProfiles = [];
		let fields_name = [];
		let fields_name_obj = {};
		let errorMessagesObj = {};
		let self_profile;
		let self_age;
		let adult2age;
		this.props.currentSelectedInsuredMembersId.map((val, key) => {
			currentSelectedProfiles.push(val[key]);
		});
		let validatingErrors = {};
		let validatingDobErrors = {};
		let validatingName = {};
		let validatingOtherErrors = {};
		let invalidname = [];
		let fullname;
		let fullnameObj = {};
		let isDummyUser;
		if (Object.keys(this.props.self_data_values).length > 0) {
			isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
			if (!isDummyUser) {
				self_profile = Object.assign({}, this.props.self_data_values[this.props.USER.defaultProfile]);
			} else {
				self_profile = Object.assign({}, this.props.self_data_values[0]);
			}
		}
		this.props.currentSelectedInsuredMembersId.map((val, key) => {
			if (Object.keys(this.props.self_data_values).length > 0) {
				let fields = [];
				let dobError = [];
				let param = this.props.self_data_values[val[key]];
				if (param.title == "") {
					//common validation
					is_disable = true;
					fields.push('title');
				}

				if (param.relation == "") {
					is_disable = true;
					fields.push('relation');
				}

				if (param.name == "") {
					is_disable = true;
					fields.push('name');
				}

				if (param.gender == "") {
					is_disable = true;
					fields.push('gender');
				}

				if (param.dob == null || param.dob == "") {
					is_disable = true;
					fields.push('dob');
				}

				if (!param.no_lname && param.relation !== 'self') {
					if (param.last_name == "") {
						is_disable = true;
						fields.push('last_name');
					}
				}

				if (param.relation == 'self') {
					//only self validation
					if (param.pincode == "") {
						is_disable = true;
						fields.push('pincode');
					}
					if (param.address == "") {
						is_disable = true;
						fields.push('address');
					}
					if (param.state == "" || param.state_code == 0) {
						is_disable = true;
						fields.push('state');
					}
					if (param.town == "" || param.town_code == '') {
						is_disable = true;
						fields.push('town');
					}
					if (param.district == "" || param.district == '') {
						is_disable = true;
						fields.push('district');
					}
					if (param.email == "") {
						is_disable = true;
						fields.push('email');
					}
					if (param.email != '' && param.relation == 'self') {
						let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						validEmail = validEmail.test(param.email);
						if (!validEmail) {
							is_disable = true;
							fields.push('email');
						}
					}
				}

				if (param.member_type == 'adult') {
					// only adult validation in case of same gender or title
					if (param.only_adult && param.title !== "") {
						if (self_profile.title == param.title) {
							is_disable = true;
							empty_feilds.push('title');
						}
					}
					if (param.gender != '' && param.title != '') {
						if (param.gender == 'm' && param.title != 'mr.') {
							is_disable = true;
							empty_feilds.push('gender');
						} else if (param.gender == 'f' && param.title == 'mr') {
							is_disable = true;
							empty_feilds.push('gender');
						}
					}
					if (param.pincode && param.pincode !== '') {
						if (param.pincode.length < 6) {
							is_disable = true;
							empty_feilds.push('pincode');
						}
					}
				}

				if (param.dob != null && param.member_type == 'adult') {
					//dob validation
					let today = new Date();
					let birthDate = new Date(param.dob);
					let age = today.getFullYear() - birthDate.getFullYear();
					let m = today.getMonth() - birthDate.getMonth();
					if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
						age--;
					}
					if (param.relation == 'self') {
						self_age = age;
					} else {
						adult2age = age;
					}
					if (this.props.selected_plan.threshold.length > 0) {
						if (parseInt(age) < parseInt(this.props.selected_plan.threshold[0].min_age) || parseInt(age) > parseInt(this.props.selected_plan.threshold[0].max_age)) {
							fields.push('dob');
							is_disable = true;
						}
					}
				} else if (param.dob != null && param.member_type == 'child') {
					let childAge;
					let today = new Date();
					let birthDate = new Date(param.dob);
					childAge = today.getFullYear() - birthDate.getFullYear();
					let m = today.getMonth() - birthDate.getMonth();
					if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
						childAge--;
					}
					let oneDay = 24 * 60 * 60 * 1000;
					let firstDate = new Date();
					let secondDate = new Date(param.dob);
					let diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
					if (this.props.selected_plan.threshold.length > 0) {
						let minAgeOfAdults = Math.min(self_age, adult2age);
						let adultChildAgeDiff = minAgeOfAdults - childAge;
						let child_age = this.props.selected_plan.threshold[0].child_min_age;
						let child_max_age = this.props.selected_plan.threshold[0].child_max_age;
						if (parseInt(diffDays) < parseInt(child_age) || parseInt(childAge) > parseInt(child_max_age)) {
							fields.push('dob');
							is_disable = true;
						}
						if (adultChildAgeDiff < 18) {
							dobError.push('dob');
							is_disable = true;
						}
					}
				}

				if (this.props.selected_plan.threshold.length > 0) {
					errorMessagesObj.child_max_age = this.props.selected_plan.threshold[0].child_max_age;
					errorMessagesObj.child_min_age = this.props.selected_plan.threshold[0].child_min_age;
					errorMessagesObj.max_age = this.props.selected_plan.threshold[0].max_age;
					errorMessagesObj.min_age = this.props.selected_plan.threshold[0].min_age;
					errorMessagesObj.common_message = '*This is a mandatory field';
					errorMessagesObj.max_character = 'Maximum character limit: 50';
					errorMessagesObj.valid_email = '*Please enter a valid email';
					errorMessagesObj.adult_age = `*Age should be more than ${this.props.selected_plan.threshold[0].min_age} years and less than ${this.props.selected_plan.threshold[0].max_age} years`;
					errorMessagesObj.child_age = `*Age should be more than ${this.props.selected_plan.threshold[0].child_min_age} days and less than ${this.props.selected_plan.threshold[0].child_max_age} years`;
					errorMessagesObj.sameGenderTitle = "*Both the Adults can't have same Gender and Title";
					errorMessagesObj.shouldGenderTitle = "*Both Gender and Title can't be different";
					errorMessagesObj.childAgeDiff = '*Difference between age of child and adult should be more than 18 years';
				}
				// if(fields.length > 0 || empty_feilds.length > 0 || dobError.length > 0){	
				// 	is_disable = true
				// 	member_ref = `member_${param.id}`
				// }
				if (param.name != "" && param.middle_name != "" && param.last_name != "" && !param.no_lname) {
					//name validation
					let fullnameObj = {};
					fullname = param.name + param.middle_name + param.last_name;
					fullnameObj.id = param.id;
					fullnameObj.fName = fullname.toLowerCase();
					fields_name.push(fullnameObj);
				} else if (param.name != "" && param.middle_name == "" && param.last_name != "" && !param.no_lname) {
					let fullnameObj = {};
					fullname = param.name + param.middle_name + param.last_name;
					fullnameObj.id = param.id;
					fullnameObj.fName = fullname.toLowerCase();
					fields_name.push(fullnameObj);
				} else if (param.name != "" && param.middle_name == "" && param.last_name == "" && !param.no_lname) {
					let fullnameObj = {};
					fullname = param.name;
					fullnameObj.id = param.id;
					fullnameObj.fName = fullname.toLowerCase();
					fields_name.push(fullnameObj);
				} else if (param.name != "" && param.no_lname) {
					let fullnameObj = {};
					fullname = param.name;
					fullnameObj.id = param.id;
					fullnameObj.fName = fullname.toLowerCase();
					fields_name.push(fullnameObj);
				}

				validatingErrors[param.id] = fields;
				validatingDobErrors[param.id] = dobError;
				if (param.member_type == 'adult') {
					validatingOtherErrors[param.id] = empty_feilds;
				}
			}
		});
		validatingName = fields_name;
		let newArray = [];
		let ArrayFlag = true;
		Object.entries(validatingName).map(function ([key, value]) {
			if (ArrayFlag) {
				newArray = validatingName.filter(name => name.fName == value.fName);
			}
			if (newArray.length > 1) {
				ArrayFlag = false;
			}
		});
		if (newArray.length > 1) {
			member_ref = `member_${newArray[1].id}`;
			let id = 'id=' + newArray[1].id;
			if (newArray[1].name != '' && newArray[1].middle_name != '' && newArray[1].last_name != '') {
				invalidname.push(id);
			} else if (newArray[1].name != '' && newArray[1].middle_name == '' && newArray[1].last_name != '') {
				invalidname.push(id);
			}
			is_disable = true;
			errorMessagesObj.sameName = '*Name of the members cannot be same';
		}

		Object.keys(validatingErrors).forEach(function (key) {
			if (validatingErrors[key].length > 0) {
				is_disable = true;
				member_ref = `member_${key}`;
			}
		});

		Object.keys(validatingOtherErrors).forEach(function (key) {
			if (validatingOtherErrors[key].length > 0) {
				is_disable = true;
				member_ref = `member_${key}`;
			}
		});

		Object.keys(validatingDobErrors).forEach(function (key) {
			if (validatingDobErrors[key].length > 0) {
				is_disable = true;
				member_ref = `member_${key}`;
			}
		});

		console.log('validateErrors');
		console.log(validatingErrors);
		console.log('validateOtherErrors');
		console.log(validatingOtherErrors);
		console.log('validatingNames');
		console.log(invalidname);
		console.log('validatingDobErrors');
		console.log(validatingDobErrors);
		console.log('member_ref');
		console.log(member_ref);
		this.setState({ validateErrors: validatingErrors, validateOtherErrors: validatingOtherErrors, validatingNames: invalidname, validateDobErrors: validatingDobErrors, errorMessages: errorMessagesObj });
		if (is_disable && document.getElementById(member_ref)) {
			document.getElementById(member_ref).scrollIntoView();
		} else {
			this.SaveUserData(this.props); // to save user entered details
			this.props.history.push('/insurance/insurance-user-details-review');
		}
	}

	SaveUserData(props) {
		let self = this;
		var insuranceUserData = {};
		var members = {};
		// insuranceUserData.insurnaceData = props.insurnaceData
		insuranceUserData.selected_plan_id = props.selected_plan.id;
		// insuranceUserData.insurer= props.insurnaceData['insurance'][0].id
		insuranceUserData.members = [];
		// insuranceUserData.selected_plan = []
		insuranceUserData.currentSelectedInsuredMembersId = this.props.currentSelectedInsuredMembersId;

		Object.entries(this.props.currentSelectedInsuredMembersId).map(function ([key, value]) {
			members = {};
			members = _extends({}, self.props.self_data_values[value[key]]);
			return insuranceUserData.members.push(members);
		});
		this.props.pushUserData(insuranceUserData); // to save user entered details in dummy table
	}

	checkIsEmailVerfied() {}

	render() {
		let child;
		let adult;
		let userProfile;
		let selectedProfileId = parseInt(this.props.USER.defaultProfile);
		let selectedMembersId = 0;
		if (Object.keys(this.props.selected_plan).length > 0) {

			userProfile = Object.assign({}, this.props.USER.profiles[this.props.USER.defaultProfile]);

			var adult_count_api = this.props.selected_plan.adult_count - 1;
			if (adult_count_api !== 0 && this.props.currentSelectedInsuredMembersId.length > 1) {
				selectedMembersId++;
				adult = this.props.currentSelectedInsuredMembersId.filter(x => x.type === 'adult').map((data, i) => {
					return _react2.default.createElement(_insuranceFamily2.default, _extends({}, this.props, {
						self_gender: userProfile.gender,
						param_id: selectedMembersId,
						member_id: data[selectedMembersId],
						checkForValidation: this.checkForValidation.bind(this),
						id: `member_${selectedMembersId}`,
						validateErrors: this.state.validateErrors[data[selectedMembersId]] || [],
						validateOtherErrors: this.state.validateOtherErrors[data[selectedMembersId]] || [],
						createApiErrors: this.state.CreateApiErrors.members ? this.state.CreateApiErrors.members[i + 1] : [],
						show_selected_profiles: this.state.show_selected_profiles,
						validateDobErrors: [],
						errorMessages: this.state.errorMessages,
						validatingNames: this.state.validatingNames || [],
						is_endorsement: false,
						endorsementError: this.state.endorsementError,
						member_type: 'adult'
					}));
				});
			}

			// if(this.props.selected_plan.adult_count == 2 && this.props.currentSelectedInsuredMembersId.length>1){
			// 	selectedMembersId++
			// 	adult = <InsurOthers {...this.props} 
			// 				self_gender={userProfile.gender} 
			// 				param_id = {'1'} 
			// 				member_id={this.props.currentSelectedInsuredMembersId[1]['1']} 
			// 				checkForValidation ={this.checkForValidation.bind(this)} 
			// 				id={`member_${0}`} 
			// 				validateErrors={this.state.validateErrors['1'] || []} 
			// 				validateOtherErrors={this.state.validateOtherErrors['1'] || []} 
			// 				createApiErrors={this.state.CreateApiErrors.members?this.state.CreateApiErrors.members[1]:[]}
			// 				show_selected_profiles={this.state.show_selected_profiles} 
			// 				validateDobErrors={[]} 
			// 				errorMessages={this.state.errorMessages} 
			// 				validatingNames={this.state.validatingNames||[]}
			// 				is_endorsement = {false}
			// 				endorsementError={this.state.endorsementError}
			// 				member_type = 'adult' 
			// 			/>
			// }

			var n = this.props.selected_plan.child_count;

			if (n !== 0) {
				child = this.props.currentSelectedInsuredMembersId.filter(x => x.type === 'child').map((data, i) => {
					selectedMembersId++;
					return _react2.default.createElement(_insuranceFamily2.default, _extends({}, this.props, {
						key: i,
						member_id: data[selectedMembersId],
						checkForValidation: this.checkForValidation.bind(this),
						is_child_only: true,
						id: `member_${selectedMembersId}`,
						param_id: selectedMembersId,
						member_view_id: selectedMembersId,
						validateErrors: this.state.validateErrors[data[selectedMembersId]] || [],
						validateOtherErrors: [],
						createApiErrorsChild: this.state.CreateApiErrors.members ? this.state.CreateApiErrors.members : [],
						show_selected_profiles: this.state.show_selected_profiles,
						validateDobErrors: this.state.validateDobErrors[data[selectedMembersId]] || [],
						errorMessages: this.state.errorMessages,
						validatingNames: this.state.validatingNames || [],
						is_endorsement: false,
						endorsementError: this.state.endorsementError,
						member_type: 'child'
					}));
				});
			}
		}
		return _react2.default.createElement(
			'div',
			{ className: 'profile-body-wrap' },
			_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
			_react2.default.createElement(
				'section',
				{ className: 'container container-top-margin cardMainPaddingRmv' },
				_react2.default.createElement(
					'div',
					{ className: 'row no-gutters dsktp-row-gutter' },
					_react2.default.createElement(
						'div',
						{ className: 'col-12 col-md-7 col-lg-7 ins-main-padding' },
						_react2.default.createElement(
							'section',
							{ className: 'profile-book-screen' },
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(_insuranceCommonSection2.default, _extends({}, this.props, { is_edit: this.state.is_edit })),
								_react2.default.createElement(
									'div',
									{ className: 'insurance-member-container', style: { padding: 0 } },
									_react2.default.createElement(
										'h4',
										{ className: 'mb-0', style: { padding: '2px 0px 6px' } },
										'Proposer Member Details'
									),
									_react2.default.createElement(
										'div',
										{ className: 'widget', style: { padding: '10px' } },
										_react2.default.createElement(
											'div',
											{ className: 'plcy-cancel-div' },
											_react2.default.createElement(
												'p',
												{ className: 'plcy-cancel mb-0 fw-500' },
												'*Incorrect member details may lead to policy cancellation'
											)
										),
										_react2.default.createElement(
											'p',
											{ className: 'fw-500 d-block', style: { fontSize: 11, color: '#F44336', marginTop: 5, paddingLeft: 8 } },
											'*All fields are mandatory'
										),
										_react2.default.createElement(
											'div',
											{ className: 'insurance-member-details mrt-20' },
											_react2.default.createElement(_insuranceSelf2.default, _extends({}, this.props, {
												checkForValidation: this.checkForValidation.bind(this),
												id: `member_${this.props.USER.defaultProfile}`,
												member_id: this.props.USER.defaultProfile,
												validateErrors: this.state.validateErrors[this.props.USER.defaultProfile] || [],
												validateOtherErrors: this.state.validateOtherErrors[this.props.USER.defaultProfile] || [],
												createApiErrors: this.state.CreateApiErrors.members ? this.state.CreateApiErrors.members[0] : [],
												errorMessages: this.state.errorMessages,
												is_endorsement: false,
												endorsementError: this.state.endorsementError,
												checkIsEmailVerfied: this.checkIsEmailVerfied.bind(this),
												member_type: 'adult'
											}))
										)
									),
									adult,
									child
								)
							)
						),
						_react2.default.createElement(
							'button',
							{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this) },
							'Proceed (\u20B9 ',
							this.state.selected_plan_price,
							')',
							_react2.default.createElement(
								'span',
								{ className: 'foot-btn-sub-span' },
								this.state.gst
							)
						)
					),
					_react2.default.createElement(_ChatPanel2.default, null)
				)
			)
		);
	}

}

exports.default = InsuranceInputView;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceDetails.js":
/*!*********************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceDetails.js ***!
  \*********************************************************/
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

var _insuranceDetailsView = __webpack_require__(/*! ../../components/insurance/insuranceDetailsView.js */ "./dev/js/components/insurance/insuranceDetailsView.js");

var _insuranceDetailsView2 = _interopRequireDefault(_insuranceDetailsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceDetails extends _react2.default.Component {
    componentDidMount() {
        //this.props.getUserProfile()
    }
    render() {
        return _react2.default.createElement(_insuranceDetailsView2.default, this.props);
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { insurnaceData, LOAD_INSURANCE, selected_plan, self_data_values, saveCurrentSelectedMembers, selectedProfile, currentSelectedInsuredMembersId, create_payment_resp, endorsed_member_data,
        members_proofs } = state.INSURANCE;
    return {
        insurnaceData, LOAD_INSURANCE, selected_plan, USER, self_data_values, saveCurrentSelectedMembers, selectedProfile, currentSelectedInsuredMembersId, create_payment_resp, endorsed_member_data, members_proofs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // getInsurance: (insuranceId) => dispatch(getInsurance(insuranceId)),
        // getUserProfile: () => dispatch(getUserProfile()),
        // selectInsurancePlan: (plan,criteria,forceadd) => dispatch(selectInsurancePlan(plan,criteria,forceadd)),
        userData: (self_data, criteria, forceadd) => dispatch((0, _index.userData)(self_data, criteria, forceadd)),
        selectInsuranceProfile: (newProfileid, member_id, newProfile, param_id) => dispatch((0, _index.selectInsuranceProfile)(newProfileid, member_id, newProfile, param_id)),
        saveCurrentSelectedMembers: membersId => dispatch((0, _index.saveCurrentSelectedMembers)(membersId)),
        pushUserData: (criteria, callback) => dispatch((0, _index.pushUserData)(criteria, callback)),
        resetSelectedInsuranceMembers: () => dispatch((0, _index.resetSelectedInsuranceMembers)()),
        submitEmailOTP: (data, cb) => dispatch((0, _index.submitEmailOTP)(data, cb)),
        sendOtpOnEmail: (criteria, callback) => dispatch((0, _index.sendOtpOnEmail)(criteria, callback))
        // resetSelectedInsuranceMembers: () => dispatch(resetSelectedInsuranceMembers())
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceDetails);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlRGV0YWlsc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvaW5zdXJhbmNlL0luc3VyYW5jZURldGFpbHMuanMiXSwibmFtZXMiOlsiSW5zdXJhbmNlSW5wdXRWaWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJub19sbmFtZSIsImlzX2VkaXQiLCJnc3QiLCJlbmFibGVfcHJvY2VlZCIsInByb2ZpbGVzX3NlbGVjdGVkIiwic2F2ZU1lbWJlcnMiLCJpc19kaXNhYmxlIiwidmFsaWRhdGVFcnJvcnMiLCJ2YWxpZGF0ZU90aGVyRXJyb3JzIiwidmFsaWRhdGluZ05hbWVzIiwiQ3JlYXRlQXBpRXJyb3JzIiwic2hvd19zZWxlY3RlZF9wcm9maWxlcyIsInZhbGlkYXRlRG9iRXJyb3JzIiwiZXJyb3JNZXNzYWdlcyIsImVuZG9yc2VtZW50RXJyb3IiLCJjb21wb25lbnREaWRNb3VudCIsInNlbGYiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNldFN0YXRlIiwic2VsZl9kYXRhX3ZhbHVlcyIsInNlbGVjdGVkX3BsYW5fcHJpY2UiLCJzZWxlY3RlZF9wbGFuIiwiYW1vdW50IiwiY3JlYXRlX3BheW1lbnRfcmVzcCIsIm1lbWJlcnMiLCJsZW5ndGgiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwiY2FyZCIsImlzRHVtbXlVc2VyIiwiT2JqZWN0Iiwia2V5cyIsIlVTRVIiLCJkZWZhdWx0UHJvZmlsZSIsImN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQiLCJsb2dpblVzZXIiLCJtZW1iZXJzSWQiLCJpc0RlZmF1bHRVc2VyIiwicHJvZmlsZXMiLCJpc19kZWZhdWx0X3VzZXIiLCJwdXNoIiwidHlwZSIsIm4iLCJhZHVsdF9jb3VudCIsImNoaWxkX2NvdW50IiwiQXJyYXkiLCJtYXAiLCJlIiwiaSIsInNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzIiwicHJvZmlsZUxlbmd0aCIsImN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzIiwic2hvd19zZWxlY3RlZF9wcm9maWxlIiwidmFsIiwia2V5IiwiZW50cmllcyIsInZhbHVlIiwiaW5kZXhPZiIsInBhcnNlSW50IiwiY2hlY2tGb3JWYWxpZGF0aW9uIiwicHJvZmlsZV9kYXRhIiwibWVtYmVyX2lkIiwiZmlsdGVyIiwieCIsImlkIiwiaXNfZW5hYmxlIiwiaXNmb3JtQ29tcGxldGVkIiwicHJvY2VlZFBsYW4iLCJtZW1iZXJfcmVmIiwiZW1wdHlfZmVpbGRzIiwiZmllbGRzX25hbWUiLCJmaWVsZHNfbmFtZV9vYmoiLCJlcnJvck1lc3NhZ2VzT2JqIiwic2VsZl9wcm9maWxlIiwic2VsZl9hZ2UiLCJhZHVsdDJhZ2UiLCJ2YWxpZGF0aW5nRXJyb3JzIiwidmFsaWRhdGluZ0RvYkVycm9ycyIsInZhbGlkYXRpbmdOYW1lIiwidmFsaWRhdGluZ090aGVyRXJyb3JzIiwiaW52YWxpZG5hbWUiLCJmdWxsbmFtZSIsImZ1bGxuYW1lT2JqIiwiYXNzaWduIiwiZmllbGRzIiwiZG9iRXJyb3IiLCJwYXJhbSIsInRpdGxlIiwicmVsYXRpb24iLCJuYW1lIiwiZ2VuZGVyIiwiZG9iIiwibGFzdF9uYW1lIiwicGluY29kZSIsImFkZHJlc3MiLCJzdGF0ZV9jb2RlIiwidG93biIsInRvd25fY29kZSIsImRpc3RyaWN0IiwiZW1haWwiLCJ2YWxpZEVtYWlsIiwidGVzdCIsIm1lbWJlcl90eXBlIiwib25seV9hZHVsdCIsInRvZGF5IiwiRGF0ZSIsImJpcnRoRGF0ZSIsImFnZSIsImdldEZ1bGxZZWFyIiwibSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInRocmVzaG9sZCIsIm1pbl9hZ2UiLCJtYXhfYWdlIiwiY2hpbGRBZ2UiLCJvbmVEYXkiLCJmaXJzdERhdGUiLCJzZWNvbmREYXRlIiwiZGlmZkRheXMiLCJNYXRoIiwicm91bmQiLCJhYnMiLCJnZXRUaW1lIiwibWluQWdlT2ZBZHVsdHMiLCJtaW4iLCJhZHVsdENoaWxkQWdlRGlmZiIsImNoaWxkX2FnZSIsImNoaWxkX21pbl9hZ2UiLCJjaGlsZF9tYXhfYWdlIiwiY29tbW9uX21lc3NhZ2UiLCJtYXhfY2hhcmFjdGVyIiwidmFsaWRfZW1haWwiLCJhZHVsdF9hZ2UiLCJzYW1lR2VuZGVyVGl0bGUiLCJzaG91bGRHZW5kZXJUaXRsZSIsImNoaWxkQWdlRGlmZiIsIm1pZGRsZV9uYW1lIiwiZk5hbWUiLCJ0b0xvd2VyQ2FzZSIsIm5ld0FycmF5IiwiQXJyYXlGbGFnIiwic2FtZU5hbWUiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIlNhdmVVc2VyRGF0YSIsImhpc3RvcnkiLCJpbnN1cmFuY2VVc2VyRGF0YSIsInNlbGVjdGVkX3BsYW5faWQiLCJwdXNoVXNlckRhdGEiLCJjaGVja0lzRW1haWxWZXJmaWVkIiwicmVuZGVyIiwiY2hpbGQiLCJhZHVsdCIsInVzZXJQcm9maWxlIiwic2VsZWN0ZWRQcm9maWxlSWQiLCJzZWxlY3RlZE1lbWJlcnNJZCIsImFkdWx0X2NvdW50X2FwaSIsImRhdGEiLCJiaW5kIiwicGFkZGluZyIsImZvbnRTaXplIiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nTGVmdCIsIkluc3VyYW5jZURldGFpbHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJpbnN1cm5hY2VEYXRhIiwiTE9BRF9JTlNVUkFOQ0UiLCJzZWxlY3RlZFByb2ZpbGUiLCJlbmRvcnNlZF9tZW1iZXJfZGF0YSIsIm1lbWJlcnNfcHJvb2ZzIiwiSU5TVVJBTkNFIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ1c2VyRGF0YSIsInNlbGZfZGF0YSIsImNyaXRlcmlhIiwiZm9yY2VhZGQiLCJzZWxlY3RJbnN1cmFuY2VQcm9maWxlIiwibmV3UHJvZmlsZWlkIiwibmV3UHJvZmlsZSIsInBhcmFtX2lkIiwiY2FsbGJhY2siLCJyZXNldFNlbGVjdGVkSW5zdXJhbmNlTWVtYmVycyIsInN1Ym1pdEVtYWlsT1RQIiwiY2IiLCJzZW5kT3RwT25FbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxrQkFBTixTQUFpQ0MsZ0JBQU1DLFNBQXZDLENBQWdEO0FBQy9DQyxhQUFZQyxLQUFaLEVBQW1CO0FBQ1osUUFBTUEsS0FBTjtBQUNBLE9BQUtDLEtBQUwsR0FBYTtBQUNUO0FBQ0FDLGFBQVMsS0FGQTtBQUdUQyxZQUFRLElBSEM7QUFJVEMsUUFBSyxzQkFKSTtBQUtUQyxtQkFBZSxLQUxOO0FBTVRDLHNCQUFrQixFQU5UO0FBT1RDLGdCQUFZLEtBUEg7QUFRVDtBQUNBQyxlQUFZLEVBVEg7QUFVVDtBQUNBQyxtQkFBZSxFQVhOO0FBWVRDLHdCQUFvQixFQVpYO0FBYVRDLG9CQUFnQixFQWJQO0FBY1RDLG9CQUFnQixFQWRQO0FBZVRDLDJCQUF1QixFQWZkO0FBZ0JUQyxzQkFBa0IsRUFoQlQ7QUFpQlRDLGtCQUFjLEVBakJMO0FBa0JUQyxxQkFBaUI7QUFsQlIsR0FBYjtBQW9CSDtBQUNEQyxxQkFBbUI7QUFDbEIsTUFBSUMsT0FBTyxJQUFYO0FBQ0EsTUFBR0MsTUFBSCxFQUFVO0FBQ1RBLFVBQU9DLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEI7QUFDQTtBQUNELE9BQUtDLFFBQUwsY0FBa0JILEtBQUtsQixLQUFMLENBQVdzQixnQkFBN0IsSUFBK0NDLHFCQUFvQixLQUFLdkIsS0FBTCxDQUFXd0IsYUFBWCxDQUF5QkMsTUFBNUY7QUFDQSxNQUFHLEtBQUt6QixLQUFMLENBQVcwQixtQkFBZCxFQUFrQztBQUNqQyxPQUFHLEtBQUsxQixLQUFMLENBQVcwQixtQkFBWCxDQUErQkMsT0FBL0IsSUFBMEMsS0FBSzNCLEtBQUwsQ0FBVzBCLG1CQUFYLENBQStCQyxPQUEvQixDQUF1Q0MsTUFB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MEJPLGtCQUExQixFQUE4Q1IsZ0JBQTlDLEMiLCJmaWxlIjoiMTIwLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ2hhdFBhbmVsIGZyb20gJy4uL2NvbW1vbnMvQ2hhdFBhbmVsJ1xuaW1wb3J0IEluc3VyU2VsZiBmcm9tICcuL2luc3VyYW5jZVNlbGYuanMnXG5pbXBvcnQgSW5zdXJPdGhlcnMgZnJvbSAnLi9pbnN1cmFuY2VGYW1pbHkuanMnXG5pbXBvcnQgSW5zdXJDb21tb24gZnJvbSAnLi9pbnN1cmFuY2VDb21tb25TZWN0aW9uLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIEluc3VyYW5jZUlucHV0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAvLyBzZWxlY3RlZF9wbGFuX3BsYW46JycsXG4gICAgICAgICAgICBub19sbmFtZTpmYWxzZSxcbiAgICAgICAgICAgIGlzX2VkaXQ6dHJ1ZSxcbiAgICAgICAgICAgIGdzdDogJ2luY2x1c2l2ZSBvZiAxOCUgR1NUJyxcbiAgICAgICAgICAgIGVuYWJsZV9wcm9jZWVkOmZhbHNlLFxuICAgICAgICAgICAgcHJvZmlsZXNfc2VsZWN0ZWQ6W10sXG4gICAgICAgICAgICBzYXZlTWVtYmVyczpmYWxzZSxcbiAgICAgICAgICAgIC8vIGlzX2FkdWx0X29ubHk6IGZhbHNlLFxuICAgICAgICAgICAgaXNfZGlzYWJsZTogW10sXG4gICAgICAgICAgICAvLyBpc1ZhbGlkYXRlZDogZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZUVycm9yczp7fSxcbiAgICAgICAgICAgIHZhbGlkYXRlT3RoZXJFcnJvcnM6e30sXG4gICAgICAgICAgICB2YWxpZGF0aW5nTmFtZXM6W10sXG4gICAgICAgICAgICBDcmVhdGVBcGlFcnJvcnM6e30sXG4gICAgICAgICAgICBzaG93X3NlbGVjdGVkX3Byb2ZpbGVzOltdLFxuICAgICAgICAgICAgdmFsaWRhdGVEb2JFcnJvcnM6W10sXG4gICAgICAgICAgIFx0ZXJyb3JNZXNzYWdlczpbXSxcbiAgICAgICAgICAgXHRlbmRvcnNlbWVudEVycm9yOltdXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBcdGxldCBzZWxmID0gdGhpc1xuICAgIFx0aWYod2luZG93KXtcbiAgICBcdFx0d2luZG93LnNjcm9sbFRvKDAsMClcbiAgICBcdH1cbiAgICBcdHRoaXMuc2V0U3RhdGUoey4uLnNlbGYucHJvcHMuc2VsZl9kYXRhX3ZhbHVlcywgc2VsZWN0ZWRfcGxhbl9wcmljZTp0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYW1vdW50fSlcbiAgICBcdGlmKHRoaXMucHJvcHMuY3JlYXRlX3BheW1lbnRfcmVzcCl7XG4gICAgXHRcdGlmKHRoaXMucHJvcHMuY3JlYXRlX3BheW1lbnRfcmVzcC5tZW1iZXJzICYmIHRoaXMucHJvcHMuY3JlYXRlX3BheW1lbnRfcmVzcC5tZW1iZXJzLmxlbmd0aCA+MCl7XG4gICAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7Q3JlYXRlQXBpRXJyb3JzOnNlbGYucHJvcHMuY3JlYXRlX3BheW1lbnRfcmVzcH0pXHRcbiAgICBcdFx0fVxuICAgIFx0XHRcbiAgICBcdH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKXtcbiAgICBcdGxldCBjYXJkXG4gICAgXHRsZXQgc2VsZiA9IHRoaXNcbiAgICBcdGxldCBpc0R1bW15VXNlclxuICAgIFx0aWYoIXRoaXMuc3RhdGUuc2F2ZU1lbWJlcnMgJiYgT2JqZWN0LmtleXMocHJvcHMuc2VsZWN0ZWRfcGxhbikubGVuZ3RoID4wICYmIHByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUgJiYgIXByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubGVuZ3RoKXtcbiAgICBcdFx0Ly8gbGV0IGxvZ2luVXNlciA9IHByb3BzLlVTRVIuc2VsZWN0ZWRQcm9maWxlXG4gICAgXHRcdGxldCBsb2dpblVzZXIgPSBwcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXG4gICAgXHRcdGxldCBtZW1iZXJzSWQgPSBbXVxuICAgIFx0XHRsZXQgaXNEZWZhdWx0VXNlclxuICAgIFx0XHRpZihwcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCAmJiBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKXtcbiAgICBcdFx0XHRpc0RlZmF1bHRVc2VyID0gcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc19kZWZhdWx0X3VzZXJcbiAgICBcdFx0fVxuICAgIFx0XHRpc0R1bW15VXNlciA9IHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcbiAgICBcdFx0aWYoIWlzRHVtbXlVc2VyKXtcblx0ICAgIFx0XHRtZW1iZXJzSWQucHVzaCh7JzAnOmxvZ2luVXNlciwgdHlwZTogJ3NlbGYnfSlcblx0ICAgIFx0XHR2YXIgbiA9IChwcm9wcy5zZWxlY3RlZF9wbGFuLmFkdWx0X2NvdW50ICsgcHJvcHMuc2VsZWN0ZWRfcGxhbi5jaGlsZF9jb3VudCkgLSAxO1xuXHQgICAgXHRcdGNhcmQgPSBbLi4uQXJyYXkocHJvcHMuc2VsZWN0ZWRfcGxhbi5hZHVsdF9jb3VudC0xKV0ubWFwKChlLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRtZW1iZXJzSWQucHVzaCh7W2krMV06IGkrMSwgdHlwZTonYWR1bHQnfSlcblx0XHRcdFx0XHR9KVxuXG5cdCAgICBcdFx0Y2FyZCA9IFsuLi5BcnJheShwcm9wcy5zZWxlY3RlZF9wbGFuLmNoaWxkX2NvdW50KV0ubWFwKChlLCBpKSA9PiB7XG5cdCAgICBcdFx0XHRcdGlmKHByb3BzLnNlbGVjdGVkX3BsYW4uYWR1bHRfY291bnQgPjEpe1xuXHQgICAgXHRcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHtbaSsyXTogaSsyLCB0eXBlOidjaGlsZCd9KVxuXHQgICAgXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0bWVtYmVyc0lkLnB1c2goe1tpKzFdOiBpKzEsIHR5cGU6J2NoaWxkJ30pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcbi8qXG5cdFx0XHRcdGlmKG4gIT09IDApe1xuXHRcdFx0XHRcdGNhcmQgPSBbLi4uQXJyYXkobildLm1hcCgoZSwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0bWVtYmVyc0lkLnB1c2goe1tpKzFdOiBpKzEsIHR5cGU6Jyd9KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0qL1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHsnMCc6MCwgdHlwZTonc2VsZid9KVxuXHRcdFx0XHR2YXIgbiA9IChwcm9wcy5zZWxlY3RlZF9wbGFuLmFkdWx0X2NvdW50ICsgcHJvcHMuc2VsZWN0ZWRfcGxhbi5jaGlsZF9jb3VudCkgLSAxO1xuXHRcdFx0XHRjYXJkID0gWy4uLkFycmF5KHByb3BzLnNlbGVjdGVkX3BsYW4uYWR1bHRfY291bnQtMSldLm1hcCgoZSwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0bWVtYmVyc0lkLnB1c2goe1tpKzFdOiBpKzEsIHR5cGU6J2FkdWx0J30pXG5cdFx0XHRcdFx0fSlcblxuXHQgICAgXHRcdGNhcmQgPSBbLi4uQXJyYXkocHJvcHMuc2VsZWN0ZWRfcGxhbi5jaGlsZF9jb3VudCldLm1hcCgoZSwgaSkgPT4ge1xuXHQgICAgXHRcdFx0XHRpZihwcm9wcy5zZWxlY3RlZF9wbGFuLmFkdWx0X2NvdW50ID4xKXtcblx0ICAgIFx0XHRcdFx0XHRtZW1iZXJzSWQucHVzaCh7W2krMl06IGkrMiwgdHlwZTonY2hpbGQnfSlcblx0ICAgIFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHtbaSsxXTogaSsxLCB0eXBlOidjaGlsZCd9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdC8vIGlmKG4gIT09IDApe1xuXHRcdFx0XHQvLyBcdGNhcmQgPSBbLi4uQXJyYXkobildLm1hcCgoZSwgaSkgPT4ge1xuXHRcdFx0XHQvLyBcdFx0bWVtYmVyc0lkLnB1c2goe1tpKzFdOiBpKzF9KVxuXHRcdFx0XHQvLyBcdH0pXG5cdFx0XHRcdC8vIH1cblx0XHRcdH1cblx0XHRcdHByb3BzLnNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzKG1lbWJlcnNJZClcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzYXZlTWVtYmVyczogdHJ1ZX0pXG4gICAgXHR9XG4gICAgXHRsZXQgcHJvZmlsZUxlbmd0aCA9IE9iamVjdC5rZXlzKHByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aDtcblx0XHRsZXQgY3VycmVudFNlbGVjdGVkUHJvZmlsZXMgPSBbXVxuXHRcdGxldCBzaG93X3NlbGVjdGVkX3Byb2ZpbGUgPSBbXVxuICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubWFwKCh2YWwsa2V5KSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50U2VsZWN0ZWRQcm9maWxlcy5wdXNoKHZhbFtrZXldKVxuICAgICAgICB9KVxuXHQgICAgaWYocHJvZmlsZUxlbmd0aCA+IDApe1xuXHQgICAgXHRpZighcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlcil7XG5cdFx0XHRcdHtPYmplY3QuZW50cmllcyhwcm9wcy5VU0VSLnByb2ZpbGVzKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG5cblx0XHRcdFx0XHRpZihjdXJyZW50U2VsZWN0ZWRQcm9maWxlcy5pbmRleE9mKHBhcnNlSW50KGtleSkpID09IC0xICYmIGtleSAhPT0gcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSl7XG5cdFx0XHRcdFx0XHRzaG93X3NlbGVjdGVkX3Byb2ZpbGUucHVzaChrZXkpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KX1cblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7c2hvd19zZWxlY3RlZF9wcm9maWxlcyA6IHNob3dfc2VsZWN0ZWRfcHJvZmlsZX0pXG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cblxuICAgIGNoZWNrRm9yVmFsaWRhdGlvbihwcm9maWxlX2RhdGEsIG1lbWJlcl9pZCl7XG4gICAgXHRsZXQgcHJvZmlsZXMgPSB0aGlzLnN0YXRlLnByb2ZpbGVzX3NlbGVjdGVkXG4gICAgXHRpZihwcm9maWxlcy5sZW5ndGgpe1xuICAgIFx0XHRwcm9maWxlcyA9IHRoaXMuc3RhdGUucHJvZmlsZXNfc2VsZWN0ZWQuZmlsdGVyKCh4ID0+IHguaWQgIT0gbWVtYmVyX2lkKSlcbiAgICBcdH1cbiAgICBcdHByb2ZpbGVzLnB1c2gocHJvZmlsZV9kYXRhKVxuXG4gICAgXHRsZXQgaXNfZW5hYmxlID0gcHJvZmlsZXMuZmlsdGVyKHg9PiAheC5pc2Zvcm1Db21wbGV0ZWQpXG4gICAgXHRpc19lbmFibGUgPSBpc19lbmFibGUubGVuZ3RoP2ZhbHNlOnRydWVcbiAgICBcdHRoaXMuc2V0U3RhdGUoe2VuYWJsZV9wcm9jZWVkOiBpc19lbmFibGUsIHByb2ZpbGVzX3NlbGVjdGVkOiBwcm9maWxlc30pXG4gICAgfVxuXG4gICAgcHJvY2VlZFBsYW4oKXtcbiAgICBcdGxldCBpc19kaXNhYmxlICA9IGZhbHNlXG4gICAgXHRsZXQgbWVtYmVyX3JlZiA9ICcnXG4gICAgXHRsZXQgZW1wdHlfZmVpbGRzID0gW11cbiAgICBcdGxldCBjdXJyZW50U2VsZWN0ZWRQcm9maWxlcyA9IFtdXG4gICAgXHRsZXQgZmllbGRzX25hbWUgPSBbXVxuICAgIFx0bGV0IGZpZWxkc19uYW1lX29iaiA9IHt9XG4gICAgXHRsZXQgZXJyb3JNZXNzYWdlc09iaiA9IHt9XG4gICAgXHRsZXQgc2VsZl9wcm9maWxlXG4gICAgXHRsZXQgc2VsZl9hZ2VcbiAgICBcdGxldCBhZHVsdDJhZ2VcbiAgICBcdHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZC5tYXAoKHZhbCxrZXkpID0+IHtcbiAgICBcdFx0Y3VycmVudFNlbGVjdGVkUHJvZmlsZXMucHVzaCh2YWxba2V5XSlcbiAgICBcdH0pXG4gICAgXHRsZXQgdmFsaWRhdGluZ0Vycm9ycyA9IHt9XG4gICAgXHRsZXQgdmFsaWRhdGluZ0RvYkVycm9ycyA9IHt9XG4gICAgXHRsZXQgdmFsaWRhdGluZ05hbWUgPSB7fVxuICAgIFx0bGV0IHZhbGlkYXRpbmdPdGhlckVycm9ycyA9IHt9XG4gICAgXHRsZXQgaW52YWxpZG5hbWUgPSBbXVxuICAgIFx0bGV0IGZ1bGxuYW1lXG4gICAgXHRsZXQgZnVsbG5hbWVPYmo9e31cbiAgICBcdGxldCBpc0R1bW15VXNlclxuICAgIFx0aWYoT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzKS5sZW5ndGggPiAwKXtcbiAgICBcdFx0aXNEdW1teVVzZXIgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlclxuICAgIFx0XHRpZighaXNEdW1teVVzZXIpe1xuICAgIFx0XHRcdHNlbGZfcHJvZmlsZSAgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSlcdFxuICAgIFx0XHR9ZWxzZXtcbiAgICBcdFx0XHRzZWxmX3Byb2ZpbGUgID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzWzBdKVxuICAgIFx0XHR9XG4gICAgXHR9XG4gICAgXHR0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubWFwKCh2YWwsa2V5KSA9PiB7XG4gICAgXHRcdGlmKE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlcykubGVuZ3RoID4gMCl7XG4gICAgXHRcdFx0bGV0IGZpZWxkcyA9IFtdXG4gICAgXHRcdFx0bGV0IGRvYkVycm9yID0gW11cbiAgICBcdFx0XHRsZXQgcGFyYW0gPXRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1t2YWxba2V5XV1cblx0XHRcdFx0aWYocGFyYW0udGl0bGUgPT0gXCJcIil7ICAvL2NvbW1vbiB2YWxpZGF0aW9uXG5cdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRmaWVsZHMucHVzaCgndGl0bGUnKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocGFyYW0ucmVsYXRpb24gPT0gXCJcIil7XG5cdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRmaWVsZHMucHVzaCgncmVsYXRpb24nKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocGFyYW0ubmFtZSA9PSBcIlwiKXtcblx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGZpZWxkcy5wdXNoKCduYW1lJylcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHBhcmFtLmdlbmRlciA9PSBcIlwiKXtcblx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdnZW5kZXInKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocGFyYW0uZG9iID09IG51bGwgfHwgcGFyYW0uZG9iID09IFwiXCIpe1xuXHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2RvYicpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZighcGFyYW0ubm9fbG5hbWUgJiYgcGFyYW0ucmVsYXRpb24gIT09ICdzZWxmJyl7XG5cdFx0XHRcdFx0aWYocGFyYW0ubGFzdF9uYW1lID09XCJcIil7XG5cdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2xhc3RfbmFtZScpXHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihwYXJhbS5yZWxhdGlvbj09ICdzZWxmJyl7IC8vb25seSBzZWxmIHZhbGlkYXRpb25cblx0XHRcdFx0XHRpZihwYXJhbS5waW5jb2RlID09IFwiXCIpe1xuXHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdwaW5jb2RlJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYocGFyYW0uYWRkcmVzcyA9PSBcIlwiKXtcblx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgnYWRkcmVzcycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHBhcmFtLnN0YXRlID09IFwiXCIgfHwgcGFyYW0uc3RhdGVfY29kZSA9PSAwKXtcblx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgnc3RhdGUnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwYXJhbS50b3duID09IFwiXCIgfHwgcGFyYW0udG93bl9jb2RlID09ICcnKXtcblx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgndG93bicpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHBhcmFtLmRpc3RyaWN0ID09IFwiXCIgfHwgcGFyYW0uZGlzdHJpY3QgPT0gJycpe1xuXHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdkaXN0cmljdCcpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHBhcmFtLmVtYWlsID09IFwiXCIpe1xuXHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdlbWFpbCcpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHBhcmFtLmVtYWlsICE9JycgJiYgcGFyYW0ucmVsYXRpb24gPT0gJ3NlbGYnKXtcblx0XHRcdFx0XHRcdGxldCB2YWxpZEVtYWlsID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cdFx0XHQgIFx0XHRcdHZhbGlkRW1haWwgPSB2YWxpZEVtYWlsLnRlc3QocGFyYW0uZW1haWwpXG5cdFx0XHQgIFx0XHRcdGlmKCF2YWxpZEVtYWlsKXtcblx0XHRcdCAgXHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgnZW1haWwnKVx0XHRcblx0XHRcdCAgXHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHBhcmFtLm1lbWJlcl90eXBlID09ICdhZHVsdCcpeyAvLyBvbmx5IGFkdWx0IHZhbGlkYXRpb24gaW4gY2FzZSBvZiBzYW1lIGdlbmRlciBvciB0aXRsZVxuXHRcdFx0XHRcdGlmKHBhcmFtLm9ubHlfYWR1bHQgJiYgcGFyYW0udGl0bGUgIT09IFwiXCIpe1xuXHRcdFx0XHRcdFx0aWYoc2VsZl9wcm9maWxlLnRpdGxlID09IHBhcmFtLnRpdGxlKXtcblx0XHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0ZW1wdHlfZmVpbGRzLnB1c2goJ3RpdGxlJylcdFxuXHRcdFx0XHRcdFx0fSBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYocGFyYW0uZ2VuZGVyICE9ICcnICYmIHBhcmFtLnRpdGxlICE9Jycpe1xuXHRcdFx0XHRcdFx0aWYocGFyYW0uZ2VuZGVyID09ICdtJyAmJiBwYXJhbS50aXRsZSAhPSdtci4nKXtcblx0XHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0ZW1wdHlfZmVpbGRzLnB1c2goJ2dlbmRlcicpXHRcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHBhcmFtLmdlbmRlciA9PSAnZicgJiYgcGFyYW0udGl0bGU9PSdtcicpe1xuXHRcdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRlbXB0eV9mZWlsZHMucHVzaCgnZ2VuZGVyJylcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwYXJhbS5waW5jb2RlICYmIHBhcmFtLnBpbmNvZGUgIT09Jycpe1xuXHRcdFx0XHRcdFx0aWYocGFyYW0ucGluY29kZS5sZW5ndGggPDYpe1xuXHRcdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRlbXB0eV9mZWlsZHMucHVzaCgncGluY29kZScpXHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHBhcmFtLmRvYiAhPSBudWxsICYmIHBhcmFtLm1lbWJlcl90eXBlPT0gJ2FkdWx0Jyl7IC8vZG9iIHZhbGlkYXRpb25cblx0XHRcdFx0XHRsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHQgICAgbGV0IGJpcnRoRGF0ZSA9IG5ldyBEYXRlKHBhcmFtLmRvYik7XG5cdFx0XHRcdCAgICBsZXQgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHQgICAgbGV0IG0gPSB0b2RheS5nZXRNb250aCgpIC0gYmlydGhEYXRlLmdldE1vbnRoKCk7XG5cdFx0XHRcdCAgICBpZiAobSA8IDAgfHwgKG0gPT09IDAgJiYgdG9kYXkuZ2V0RGF0ZSgpIDwgYmlydGhEYXRlLmdldERhdGUoKSkpIHtcblx0XHRcdFx0ICAgICAgICBhZ2UtLTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIGlmKHBhcmFtLnJlbGF0aW9uPT0gJ3NlbGYnKXtcblx0XHRcdFx0XHRcdHNlbGZfYWdlID0gYWdlXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRhZHVsdDJhZ2UgPSBhZ2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgICBpZih0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkLmxlbmd0aD4wKXtcblx0XHRcdFx0ICAgIFx0aWYocGFyc2VJbnQoYWdlKSA8IHBhcnNlSW50KHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWluX2FnZSkgfHwgXG5cdFx0XHRcdFx0ICAgIFx0cGFyc2VJbnQoYWdlKSA+IHBhcnNlSW50KHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWF4X2FnZSkpe1xuXHRcdFx0XHQgIFx0XHRcdGZpZWxkcy5wdXNoKCdkb2InKVxuXHRcdFx0XHQgIFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXHRcdFx0ICAgIFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2UgaWYocGFyYW0uZG9iICE9IG51bGwgJiYgcGFyYW0ubWVtYmVyX3R5cGU9PSAnY2hpbGQnKXtcdFxuXHRcdFx0XHRcdGxldCBjaGlsZEFnZVx0XHRcdFx0XG5cdFx0XHRcdFx0bGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0XHRcdFx0ICAgIGxldCBiaXJ0aERhdGUgPSBuZXcgRGF0ZShwYXJhbS5kb2IpO1xuXHRcdFx0XHQgICAgY2hpbGRBZ2UgPSB0b2RheS5nZXRGdWxsWWVhcigpIC0gYmlydGhEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdCAgICBsZXQgbSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGUuZ2V0TW9udGgoKTtcblx0XHRcdFx0ICAgIGlmIChtIDwgMCB8fCAobSA9PT0gMCAmJiB0b2RheS5nZXREYXRlKCkgPCBiaXJ0aERhdGUuZ2V0RGF0ZSgpKSkge1xuXHRcdFx0XHQgICAgICAgIGNoaWxkQWdlLS07XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdFx0bGV0IG9uZURheSA9IDI0KjYwKjYwKjEwMDA7XG5cdFx0XHRcdFx0bGV0IGZpcnN0RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0bGV0IHNlY29uZERhdGUgPSBuZXcgRGF0ZShwYXJhbS5kb2IpO1xuXHRcdFx0XHRcdGxldCBkaWZmRGF5cyA9IE1hdGgucm91bmQoTWF0aC5hYnMoKGZpcnN0RGF0ZS5nZXRUaW1lKCkgLSBzZWNvbmREYXRlLmdldFRpbWUoKSkvKG9uZURheSkpKTtcblx0XHRcdFx0XHRpZih0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkLmxlbmd0aD4wKXtcblx0XHRcdFx0XHRcdGxldCBtaW5BZ2VPZkFkdWx0cyA9IE1hdGgubWluKHNlbGZfYWdlLGFkdWx0MmFnZSlcblx0XHRcdFx0XHRcdGxldCBhZHVsdENoaWxkQWdlRGlmZiA9IG1pbkFnZU9mQWR1bHRzIC0gY2hpbGRBZ2Vcblx0XHRcdFx0XHRcdGxldCBjaGlsZF9hZ2UgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLmNoaWxkX21pbl9hZ2Vcblx0XHRcdFx0XHRcdGxldCBjaGlsZF9tYXhfYWdlID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5jaGlsZF9tYXhfYWdlXG5cdFx0XHRcdFx0XHRpZihwYXJzZUludChkaWZmRGF5cykgPCBwYXJzZUludChjaGlsZF9hZ2UpIHx8IHBhcnNlSW50KGNoaWxkQWdlKSA+IHBhcnNlSW50KGNoaWxkX21heF9hZ2UpKXtcblx0XHRcdFx0ICBcdFx0XHRmaWVsZHMucHVzaCgnZG9iJylcblx0XHRcdFx0ICBcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVx0XHRcdCAgICBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKGFkdWx0Q2hpbGRBZ2VEaWZmIDwgMTgpe1xuXHRcdFx0XHRcdFx0XHRkb2JFcnJvci5wdXNoKCdkb2InKVxuXHRcdFx0XHQgIFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZC5sZW5ndGg+MCl7XG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5jaGlsZF9tYXhfYWdlPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLmNoaWxkX21heF9hZ2Vcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLmNoaWxkX21pbl9hZ2U9IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0uY2hpbGRfbWluX2FnZVxuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmoubWF4X2FnZT0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5tYXhfYWdlXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5taW5fYWdlPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLm1pbl9hZ2Vcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLmNvbW1vbl9tZXNzYWdlPSAnKlRoaXMgaXMgYSBtYW5kYXRvcnkgZmllbGQnXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5tYXhfY2hhcmFjdGVyPSAnTWF4aW11bSBjaGFyYWN0ZXIgbGltaXQ6IDUwJ1xuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmoudmFsaWRfZW1haWw9ICcqUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwnXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5hZHVsdF9hZ2UgPSBgKkFnZSBzaG91bGQgYmUgbW9yZSB0aGFuICR7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5taW5fYWdlfSB5ZWFycyBhbmQgbGVzcyB0aGFuICR7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5tYXhfYWdlfSB5ZWFyc2Bcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLmNoaWxkX2FnZSA9IGAqQWdlIHNob3VsZCBiZSBtb3JlIHRoYW4gJHt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLmNoaWxkX21pbl9hZ2V9IGRheXMgYW5kIGxlc3MgdGhhbiAke3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0uY2hpbGRfbWF4X2FnZX0geWVhcnNgXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5zYW1lR2VuZGVyVGl0bGUgPSBcIipCb3RoIHRoZSBBZHVsdHMgY2FuJ3QgaGF2ZSBzYW1lIEdlbmRlciBhbmQgVGl0bGVcIlxuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmouc2hvdWxkR2VuZGVyVGl0bGUgPSBcIipCb3RoIEdlbmRlciBhbmQgVGl0bGUgY2FuJ3QgYmUgZGlmZmVyZW50XCJcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLmNoaWxkQWdlRGlmZiA9ICcqRGlmZmVyZW5jZSBiZXR3ZWVuIGFnZSBvZiBjaGlsZCBhbmQgYWR1bHQgc2hvdWxkIGJlIG1vcmUgdGhhbiAxOCB5ZWFycydcdFx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBpZihmaWVsZHMubGVuZ3RoID4gMCB8fCBlbXB0eV9mZWlsZHMubGVuZ3RoID4gMCB8fCBkb2JFcnJvci5sZW5ndGggPiAwKXtcdFxuXHRcdFx0XHQvLyBcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdC8vIFx0bWVtYmVyX3JlZiA9IGBtZW1iZXJfJHtwYXJhbS5pZH1gXG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0aWYocGFyYW0ubmFtZSAhPSBcIlwiICYmIHBhcmFtLm1pZGRsZV9uYW1lICE9IFwiXCIgJiYgcGFyYW0ubGFzdF9uYW1lICE9IFwiXCIgJiYgIXBhcmFtLm5vX2xuYW1lKXsvL25hbWUgdmFsaWRhdGlvblxuXHRcdFx0XHRcdGxldCBmdWxsbmFtZU9iaj17fVxuXHRcdFx0XHRcdGZ1bGxuYW1lID0gcGFyYW0ubmFtZStwYXJhbS5taWRkbGVfbmFtZStwYXJhbS5sYXN0X25hbWVcblx0XHRcdFx0XHRmdWxsbmFtZU9iai5pZD1wYXJhbS5pZFxuXHRcdFx0XHRcdGZ1bGxuYW1lT2JqLmZOYW1lPWZ1bGxuYW1lLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRmaWVsZHNfbmFtZS5wdXNoKGZ1bGxuYW1lT2JqKVxuXHRcdFx0XHR9ZWxzZSBpZihwYXJhbS5uYW1lICE9IFwiXCIgJiYgcGFyYW0ubWlkZGxlX25hbWUgPT0gXCJcIiAmJiBwYXJhbS5sYXN0X25hbWUgIT0gXCJcIiAmJiAhcGFyYW0ubm9fbG5hbWUpe1xuXHRcdFx0XHRcdGxldCBmdWxsbmFtZU9iaj17fVxuXHRcdFx0XHRcdGZ1bGxuYW1lID0gcGFyYW0ubmFtZStwYXJhbS5taWRkbGVfbmFtZStwYXJhbS5sYXN0X25hbWVcblx0XHRcdFx0XHRmdWxsbmFtZU9iai5pZD1wYXJhbS5pZFxuXHRcdFx0XHRcdGZ1bGxuYW1lT2JqLmZOYW1lPWZ1bGxuYW1lLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRmaWVsZHNfbmFtZS5wdXNoKGZ1bGxuYW1lT2JqKVxuXHRcdFx0XHR9ZWxzZSBpZihwYXJhbS5uYW1lICE9IFwiXCIgJiYgcGFyYW0ubWlkZGxlX25hbWUgPT0gXCJcIiAmJiBwYXJhbS5sYXN0X25hbWUgPT0gXCJcIiAmJiAhcGFyYW0ubm9fbG5hbWUpe1xuXHRcdFx0XHRcdGxldCBmdWxsbmFtZU9iaj17fVxuXHRcdFx0XHRcdGZ1bGxuYW1lID0gcGFyYW0ubmFtZVxuXHRcdFx0XHRcdGZ1bGxuYW1lT2JqLmlkPXBhcmFtLmlkXG5cdFx0XHRcdFx0ZnVsbG5hbWVPYmouZk5hbWU9ZnVsbG5hbWUudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdGZpZWxkc19uYW1lLnB1c2goZnVsbG5hbWVPYmopXG5cdFx0XHRcdH1lbHNlIGlmKHBhcmFtLm5hbWUgIT0gXCJcIiAmJiBwYXJhbS5ub19sbmFtZSl7XG5cdFx0XHRcdFx0bGV0IGZ1bGxuYW1lT2JqPXt9XG5cdFx0XHRcdFx0ZnVsbG5hbWUgPSBwYXJhbS5uYW1lXG5cdFx0XHRcdFx0ZnVsbG5hbWVPYmouaWQ9cGFyYW0uaWRcblx0XHRcdFx0XHRmdWxsbmFtZU9iai5mTmFtZT1mdWxsbmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0ZmllbGRzX25hbWUucHVzaChmdWxsbmFtZU9iailcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0dmFsaWRhdGluZ0Vycm9yc1twYXJhbS5pZF0gPSBmaWVsZHNcblx0XHRcdFx0dmFsaWRhdGluZ0RvYkVycm9yc1twYXJhbS5pZF0gPSBkb2JFcnJvclxuXHRcdFx0XHRpZihwYXJhbS5tZW1iZXJfdHlwZSA9PSAnYWR1bHQnKXtcblx0XHRcdFx0XHR2YWxpZGF0aW5nT3RoZXJFcnJvcnNbcGFyYW0uaWRdID0gZW1wdHlfZmVpbGRzXG5cdFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0fSlcdFx0XG5cdFx0dmFsaWRhdGluZ05hbWUgPSBmaWVsZHNfbmFtZVxuXHRcdFx0bGV0IG5ld0FycmF5PVtdXG5cdFx0XHRsZXQgQXJyYXlGbGFnPXRydWVcblx0XHRcdE9iamVjdC5lbnRyaWVzKHZhbGlkYXRpbmdOYW1lKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG5cdFx0XHRcdGlmKEFycmF5RmxhZyl7XG5cdFx0XHRcdFx0bmV3QXJyYXkgPSAgdmFsaWRhdGluZ05hbWUuZmlsdGVyKChuYW1lPT4gbmFtZS5mTmFtZSA9PSB2YWx1ZS5mTmFtZSkpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYobmV3QXJyYXkubGVuZ3RoPjEpe1xuXHRcdFx0XHRcdEFycmF5RmxhZyA9IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHRpZihuZXdBcnJheS5sZW5ndGggPjEpe1xuXHRcdFx0XHRtZW1iZXJfcmVmID0gYG1lbWJlcl8ke25ld0FycmF5WzFdLmlkfWBcblx0XHRcdFx0bGV0IGlkID0gJ2lkPScgKyBuZXdBcnJheVsxXS5pZFxuXHRcdFx0XHRpZihuZXdBcnJheVsxXS5uYW1lICE9ICcnICYmIG5ld0FycmF5WzFdLm1pZGRsZV9uYW1lICE9ICcnICYmIG5ld0FycmF5WzFdLmxhc3RfbmFtZSAhPScnKXtcblx0XHRcdFx0XHRpbnZhbGlkbmFtZS5wdXNoKGlkKVxuXHRcdFx0XHR9ZWxzZSBpZihuZXdBcnJheVsxXS5uYW1lICE9ICcnICYmIG5ld0FycmF5WzFdLm1pZGRsZV9uYW1lID09ICcnICYmIG5ld0FycmF5WzFdLmxhc3RfbmFtZSAhPScnKXtcblx0XHRcdFx0XHRpbnZhbGlkbmFtZS5wdXNoKGlkKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdGVycm9yTWVzc2FnZXNPYmouc2FtZU5hbWUgPSAnKk5hbWUgb2YgdGhlIG1lbWJlcnMgY2Fubm90IGJlIHNhbWUnXG5cdFx0XHR9XG5cblx0XHRcdE9iamVjdC5rZXlzKHZhbGlkYXRpbmdFcnJvcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgXHRcdFx0aWYodmFsaWRhdGluZ0Vycm9yc1trZXldLmxlbmd0aCA+IDApe1xuICAgIFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcbiAgICBcdFx0XHRcdG1lbWJlcl9yZWYgPSBgbWVtYmVyXyR7a2V5fWBcdFxuICAgIFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRPYmplY3Qua2V5cyh2YWxpZGF0aW5nT3RoZXJFcnJvcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgXHRcdFx0aWYodmFsaWRhdGluZ090aGVyRXJyb3JzW2tleV0ubGVuZ3RoID4gMCl7XG4gICAgXHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuICAgIFx0XHRcdFx0bWVtYmVyX3JlZiA9IGBtZW1iZXJfJHtrZXl9YFx0XG4gICAgXHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdE9iamVjdC5rZXlzKHZhbGlkYXRpbmdEb2JFcnJvcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgXHRcdFx0aWYodmFsaWRhdGluZ0RvYkVycm9yc1trZXldLmxlbmd0aCA+IDApe1xuICAgIFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcbiAgICBcdFx0XHRcdG1lbWJlcl9yZWYgPSBgbWVtYmVyXyR7a2V5fWBcdFxuICAgIFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRcblx0XHRcdGNvbnNvbGUubG9nKCd2YWxpZGF0ZUVycm9ycycpXG5cdFx0XHRjb25zb2xlLmxvZyh2YWxpZGF0aW5nRXJyb3JzKVxuXHRcdFx0Y29uc29sZS5sb2coJ3ZhbGlkYXRlT3RoZXJFcnJvcnMnKVxuXHRcdFx0Y29uc29sZS5sb2codmFsaWRhdGluZ090aGVyRXJyb3JzKVxuXHRcdFx0Y29uc29sZS5sb2coJ3ZhbGlkYXRpbmdOYW1lcycpXG5cdFx0XHRjb25zb2xlLmxvZyhpbnZhbGlkbmFtZSlcblx0XHRcdGNvbnNvbGUubG9nKCd2YWxpZGF0aW5nRG9iRXJyb3JzJylcblx0XHRcdGNvbnNvbGUubG9nKHZhbGlkYXRpbmdEb2JFcnJvcnMpXG5cdFx0XHRjb25zb2xlLmxvZygnbWVtYmVyX3JlZicpXG5cdFx0XHRjb25zb2xlLmxvZyhtZW1iZXJfcmVmKVxuXHRcdHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlRXJyb3JzOiB2YWxpZGF0aW5nRXJyb3JzLHZhbGlkYXRlT3RoZXJFcnJvcnM6IHZhbGlkYXRpbmdPdGhlckVycm9ycyx2YWxpZGF0aW5nTmFtZXM6aW52YWxpZG5hbWUsdmFsaWRhdGVEb2JFcnJvcnM6dmFsaWRhdGluZ0RvYkVycm9ycyxlcnJvck1lc3NhZ2VzOmVycm9yTWVzc2FnZXNPYmp9KVxuICAgIFx0aWYoaXNfZGlzYWJsZSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW1iZXJfcmVmKSl7ICAgIFx0XHRcbiAgICBcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVtYmVyX3JlZikuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICBcdH1lbHNle1xuICAgIFx0XHR0aGlzLlNhdmVVc2VyRGF0YSh0aGlzLnByb3BzKSAvLyB0byBzYXZlIHVzZXIgZW50ZXJlZCBkZXRhaWxzXG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtdXNlci1kZXRhaWxzLXJldmlldycpXG4gICAgXHR9XG4gICAgfVxuXG4gICAgU2F2ZVVzZXJEYXRhKHByb3BzKXtcbiAgICBcdGxldCBzZWxmID0gdGhpc1xuICAgIFx0dmFyIGluc3VyYW5jZVVzZXJEYXRhPXt9XG4gICAgXHR2YXIgbWVtYmVycz17fVxuICAgIFx0Ly8gaW5zdXJhbmNlVXNlckRhdGEuaW5zdXJuYWNlRGF0YSA9IHByb3BzLmluc3VybmFjZURhdGFcbiAgICBcdGluc3VyYW5jZVVzZXJEYXRhLnNlbGVjdGVkX3BsYW5faWQ9cHJvcHMuc2VsZWN0ZWRfcGxhbi5pZFxuICAgIFx0Ly8gaW5zdXJhbmNlVXNlckRhdGEuaW5zdXJlcj0gcHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0uaWRcbiAgICBcdGluc3VyYW5jZVVzZXJEYXRhLm1lbWJlcnM9IFtdXG4gICAgXHQvLyBpbnN1cmFuY2VVc2VyRGF0YS5zZWxlY3RlZF9wbGFuID0gW11cbiAgICBcdGluc3VyYW5jZVVzZXJEYXRhLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQgPSB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWRcblxuICAgIFx0T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG4gICAgXHRcdG1lbWJlcnM9e31cblx0XHRcdG1lbWJlcnM9ey4uLnNlbGYucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1t2YWx1ZVtrZXldXX1cblx0XHRcdHJldHVybiBcdGluc3VyYW5jZVVzZXJEYXRhLm1lbWJlcnMucHVzaChtZW1iZXJzKVxuXHRcdH0pXG5cdFx0dGhpcy5wcm9wcy5wdXNoVXNlckRhdGEoaW5zdXJhbmNlVXNlckRhdGEpIC8vIHRvIHNhdmUgdXNlciBlbnRlcmVkIGRldGFpbHMgaW4gZHVtbXkgdGFibGVcbiAgICB9XG5cbiAgICBjaGVja0lzRW1haWxWZXJmaWVkKCl7XG4gICAgXHRcbiAgICB9XG4gICAgXG5cdHJlbmRlcigpe1xuXHRcdGxldCBjaGlsZFxuXHRcdGxldCBhZHVsdFxuXHRcdGxldCB1c2VyUHJvZmlsZVxuXHRcdGxldCBzZWxlY3RlZFByb2ZpbGVJZCA9IHBhcnNlSW50KHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSlcblx0XHRsZXQgc2VsZWN0ZWRNZW1iZXJzSWQgPTBcblx0XHRpZihPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4pLmxlbmd0aCA+MCl7XG5cdFx0XG5cdFx0XHR1c2VyUHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKVxuXG5cdFx0XHR2YXIgYWR1bHRfY291bnRfYXBpID0gKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5hZHVsdF9jb3VudCAtIDEpXG5cdFx0XHRpZihhZHVsdF9jb3VudF9hcGkgIT09MCAmJiB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubGVuZ3RoPjEpe1xuXHRcdFx0XHRzZWxlY3RlZE1lbWJlcnNJZCsrXG5cdFx0XHRcdGFkdWx0ID10aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQuZmlsdGVyKHg9PngudHlwZSA9PT0nYWR1bHQnKS5tYXAoKGRhdGEsIGkpID0+e1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxJbnN1ck90aGVycyB7Li4udGhpcy5wcm9wc30gXG5cdFx0XHRcdFx0XHRcdHNlbGZfZ2VuZGVyPXt1c2VyUHJvZmlsZS5nZW5kZXJ9IFxuXHRcdFx0XHRcdFx0XHRwYXJhbV9pZCA9IHtzZWxlY3RlZE1lbWJlcnNJZH0gXG5cdFx0XHRcdFx0XHRcdG1lbWJlcl9pZD17ZGF0YVtzZWxlY3RlZE1lbWJlcnNJZF19XG5cdFx0XHRcdFx0XHRcdGNoZWNrRm9yVmFsaWRhdGlvbiA9e3RoaXMuY2hlY2tGb3JWYWxpZGF0aW9uLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0XHRpZD17YG1lbWJlcl8ke3NlbGVjdGVkTWVtYmVyc0lkfWB9IFxuXHRcdFx0XHRcdFx0XHR2YWxpZGF0ZUVycm9ycz17dGhpcy5zdGF0ZS52YWxpZGF0ZUVycm9yc1tkYXRhW3NlbGVjdGVkTWVtYmVyc0lkXV0gfHwgW119IFxuXHRcdFx0XHRcdFx0XHR2YWxpZGF0ZU90aGVyRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlT3RoZXJFcnJvcnNbZGF0YVtzZWxlY3RlZE1lbWJlcnNJZF1dIHx8IFtdfSBcblx0XHRcdFx0XHRcdFx0Y3JlYXRlQXBpRXJyb3JzPXt0aGlzLnN0YXRlLkNyZWF0ZUFwaUVycm9ycy5tZW1iZXJzP3RoaXMuc3RhdGUuQ3JlYXRlQXBpRXJyb3JzLm1lbWJlcnNbaSsxXTpbXX1cblx0XHRcdFx0XHRcdFx0c2hvd19zZWxlY3RlZF9wcm9maWxlcz17dGhpcy5zdGF0ZS5zaG93X3NlbGVjdGVkX3Byb2ZpbGVzfSBcblx0XHRcdFx0XHRcdFx0dmFsaWRhdGVEb2JFcnJvcnM9e1tdfSBcblx0XHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlcz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfSBcblx0XHRcdFx0XHRcdFx0dmFsaWRhdGluZ05hbWVzPXt0aGlzLnN0YXRlLnZhbGlkYXRpbmdOYW1lc3x8W119XG5cdFx0XHRcdFx0XHRcdGlzX2VuZG9yc2VtZW50ID0ge2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRlbmRvcnNlbWVudEVycm9yPXt0aGlzLnN0YXRlLmVuZG9yc2VtZW50RXJyb3J9XG5cdFx0XHRcdFx0XHRcdG1lbWJlcl90eXBlID0gJ2FkdWx0J1xuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR9KVxuXHRcdFx0fVxuXG5cblx0XHRcdC8vIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5hZHVsdF9jb3VudCA9PSAyICYmIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZC5sZW5ndGg+MSl7XG5cdFx0XHQvLyBcdHNlbGVjdGVkTWVtYmVyc0lkKytcblx0XHRcdC8vIFx0YWR1bHQgPSA8SW5zdXJPdGhlcnMgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0Ly8gXHRcdFx0XHRzZWxmX2dlbmRlcj17dXNlclByb2ZpbGUuZ2VuZGVyfSBcblx0XHRcdC8vIFx0XHRcdFx0cGFyYW1faWQgPSB7JzEnfSBcblx0XHRcdC8vIFx0XHRcdFx0bWVtYmVyX2lkPXt0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWRbMV1bJzEnXX0gXG5cdFx0XHQvLyBcdFx0XHRcdGNoZWNrRm9yVmFsaWRhdGlvbiA9e3RoaXMuY2hlY2tGb3JWYWxpZGF0aW9uLmJpbmQodGhpcyl9IFxuXHRcdFx0Ly8gXHRcdFx0XHRpZD17YG1lbWJlcl8kezB9YH0gXG5cdFx0XHQvLyBcdFx0XHRcdHZhbGlkYXRlRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3JzWycxJ10gfHwgW119IFxuXHRcdFx0Ly8gXHRcdFx0XHR2YWxpZGF0ZU90aGVyRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlT3RoZXJFcnJvcnNbJzEnXSB8fCBbXX0gXG5cdFx0XHQvLyBcdFx0XHRcdGNyZWF0ZUFwaUVycm9ycz17dGhpcy5zdGF0ZS5DcmVhdGVBcGlFcnJvcnMubWVtYmVycz90aGlzLnN0YXRlLkNyZWF0ZUFwaUVycm9ycy5tZW1iZXJzWzFdOltdfVxuXHRcdFx0Ly8gXHRcdFx0XHRzaG93X3NlbGVjdGVkX3Byb2ZpbGVzPXt0aGlzLnN0YXRlLnNob3dfc2VsZWN0ZWRfcHJvZmlsZXN9IFxuXHRcdFx0Ly8gXHRcdFx0XHR2YWxpZGF0ZURvYkVycm9ycz17W119IFxuXHRcdFx0Ly8gXHRcdFx0XHRlcnJvck1lc3NhZ2VzPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXN9IFxuXHRcdFx0Ly8gXHRcdFx0XHR2YWxpZGF0aW5nTmFtZXM9e3RoaXMuc3RhdGUudmFsaWRhdGluZ05hbWVzfHxbXX1cblx0XHRcdC8vIFx0XHRcdFx0aXNfZW5kb3JzZW1lbnQgPSB7ZmFsc2V9XG5cdFx0XHQvLyBcdFx0XHRcdGVuZG9yc2VtZW50RXJyb3I9e3RoaXMuc3RhdGUuZW5kb3JzZW1lbnRFcnJvcn1cblx0XHRcdC8vIFx0XHRcdFx0bWVtYmVyX3R5cGUgPSAnYWR1bHQnIFxuXHRcdFx0Ly8gXHRcdFx0Lz5cblx0XHRcdC8vIH1cblx0XHRcblx0XHRcdHZhciBuID0gKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5jaGlsZF9jb3VudCk7XG5cdFx0XG5cdFx0XHRpZihuICE9PSAwKXtcblx0XHRcdFx0Y2hpbGQgPXRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZC5maWx0ZXIoeD0+eC50eXBlID09PSdjaGlsZCcpLm1hcCgoZGF0YSwgaSkgPT57XG5cdFx0XHRcdFx0c2VsZWN0ZWRNZW1iZXJzSWQrK1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxJbnN1ck90aGVycyB7Li4udGhpcy5wcm9wc30gXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9IFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX2lkPXtkYXRhW3NlbGVjdGVkTWVtYmVyc0lkXX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja0ZvclZhbGlkYXRpb24gPXt0aGlzLmNoZWNrRm9yVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBcblx0XHRcdFx0XHRcdFx0XHRcdGlzX2NoaWxkX29ubHk9e3RydWV9IFxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2BtZW1iZXJfJHtzZWxlY3RlZE1lbWJlcnNJZH1gfSBcblx0XHRcdFx0XHRcdFx0XHRcdHBhcmFtX2lkID0ge3NlbGVjdGVkTWVtYmVyc0lkfSBcblx0XHRcdFx0XHRcdFx0XHRcdG1lbWJlcl92aWV3X2lkPSB7c2VsZWN0ZWRNZW1iZXJzSWR9IFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsaWRhdGVFcnJvcnM9e3RoaXMuc3RhdGUudmFsaWRhdGVFcnJvcnNbZGF0YVtzZWxlY3RlZE1lbWJlcnNJZF1dIHx8IFtdfSBcblx0XHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRlT3RoZXJFcnJvcnM9e1tdfSBcblx0XHRcdFx0XHRcdFx0XHRcdGNyZWF0ZUFwaUVycm9yc0NoaWxkPXt0aGlzLnN0YXRlLkNyZWF0ZUFwaUVycm9ycy5tZW1iZXJzP3RoaXMuc3RhdGUuQ3JlYXRlQXBpRXJyb3JzLm1lbWJlcnM6W119IFxuXHRcdFx0XHRcdFx0XHRcdFx0c2hvd19zZWxlY3RlZF9wcm9maWxlcz17dGhpcy5zdGF0ZS5zaG93X3NlbGVjdGVkX3Byb2ZpbGVzfSBcblx0XHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRlRG9iRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlRG9iRXJyb3JzW2RhdGFbc2VsZWN0ZWRNZW1iZXJzSWRdXSB8fCBbXX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXN9IFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsaWRhdGluZ05hbWVzPXt0aGlzLnN0YXRlLnZhbGlkYXRpbmdOYW1lc3x8W119XG5cdFx0XHRcdFx0XHRcdFx0XHRpc19lbmRvcnNlbWVudCA9IHtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdGVuZG9yc2VtZW50RXJyb3I9e3RoaXMuc3RhdGUuZW5kb3JzZW1lbnRFcnJvcn1cblx0XHRcdFx0XHRcdFx0XHRcdG1lbWJlcl90eXBlID0gJ2NoaWxkJ1xuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cblx0XHR9XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXHQgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfS8+IFxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW4gY2FyZE1haW5QYWRkaW5nUm12XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVycyBkc2t0cC1yb3ctZ3V0dGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBpbnMtbWFpbi1wYWRkaW5nXCI+XG5cdFx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWJvb2stc2NyZWVuXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PEluc3VyQ29tbW9uIHsuLi50aGlzLnByb3BzfSBpc19lZGl0PXt0aGlzLnN0YXRlLmlzX2VkaXR9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluc3VyYW5jZS1tZW1iZXItY29udGFpbmVyXCIgc3R5bGU9e3twYWRkaW5nOjB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJtYi0wXCIgc3R5bGU9e3twYWRkaW5nOicycHggMHB4IDZweCd9fT5Qcm9wb3NlciBNZW1iZXIgRGV0YWlsczwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiIHN0eWxlPXt7cGFkZGluZzonMTBweCd9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwbGN5LWNhbmNlbC1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwbGN5LWNhbmNlbCBtYi0wIGZ3LTUwMFwiPipJbmNvcnJlY3QgbWVtYmVyIGRldGFpbHMgbWF5IGxlYWQgdG8gcG9saWN5IGNhbmNlbGxhdGlvbjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBkLWJsb2NrXCIgc3R5bGU9e3tmb250U2l6ZTogMTEsIGNvbG9yOicjRjQ0MzM2JywgbWFyZ2luVG9wOjUsIHBhZGRpbmdMZWZ0Ojh9fT4qQWxsIGZpZWxkcyBhcmUgbWFuZGF0b3J5PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluc3VyYW5jZS1tZW1iZXItZGV0YWlscyBtcnQtMjBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5zdXJTZWxmIHsuLi50aGlzLnByb3BzfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrRm9yVmFsaWRhdGlvbiA9e3RoaXMuY2hlY2tGb3JWYWxpZGF0aW9uLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2BtZW1iZXJfJHt0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGV9YH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZW1iZXJfaWQ9e3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZUVycm9ycz17dGhpcy5zdGF0ZS52YWxpZGF0ZUVycm9yc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdIHx8IFtdfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsaWRhdGVPdGhlckVycm9ycz17dGhpcy5zdGF0ZS52YWxpZGF0ZU90aGVyRXJyb3JzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0gfHwgW119IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3JlYXRlQXBpRXJyb3JzPXt0aGlzLnN0YXRlLkNyZWF0ZUFwaUVycm9ycy5tZW1iZXJzP3RoaXMuc3RhdGUuQ3JlYXRlQXBpRXJyb3JzLm1lbWJlcnNbMF06W119IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlcz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzX2VuZG9yc2VtZW50ID0ge2ZhbHNlfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVuZG9yc2VtZW50RXJyb3I9e3RoaXMuc3RhdGUuZW5kb3JzZW1lbnRFcnJvcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrSXNFbWFpbFZlcmZpZWQgPSB7dGhpcy5jaGVja0lzRW1haWxWZXJmaWVkLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZW1iZXJfdHlwZT0nYWR1bHQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0e2FkdWx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0e2NoaWxkfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvc2VjdGlvbj5cdFx0XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0aWNreS1idG5cIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcyl9PlByb2NlZWQgKOKCuSB7dGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX3ByaWNlfSlcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPnt0aGlzLnN0YXRlLmdzdH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PENoYXRQYW5lbCAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxuXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VJbnB1dFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyB1c2VyRGF0YSxzZWxlY3RJbnN1cmFuY2VQcm9maWxlLCBzYXZlQ3VycmVudFNlbGVjdGVkTWVtYmVycywgcHVzaFVzZXJEYXRhLCByZXNldFNlbGVjdGVkSW5zdXJhbmNlTWVtYmVycywgc3VibWl0RW1haWxPVFAsIHNlbmRPdHBPbkVtYWlsfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IEluc3VyYW5jZUNvbXBvbmVudFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlRGV0YWlsc1ZpZXcuanMnXG5cbmNsYXNzIEluc3VyYW5jZURldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICAvL3RoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKVxuICAgIH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PEluc3VyYW5jZUNvbXBvbmVudFZpZXcgey4uLnRoaXMucHJvcHN9Lz5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyBpbnN1cm5hY2VEYXRhLCBMT0FEX0lOU1VSQU5DRSwgc2VsZWN0ZWRfcGxhbixzZWxmX2RhdGFfdmFsdWVzLHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzLHNlbGVjdGVkUHJvZmlsZSwgY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZCxjcmVhdGVfcGF5bWVudF9yZXNwLCBlbmRvcnNlZF9tZW1iZXJfZGF0YSwgXG4gICAgICAgIG1lbWJlcnNfcHJvb2ZzfSA9IHN0YXRlLklOU1VSQU5DRVxuICAgIHJldHVybiB7XG4gICAgICAgIGluc3VybmFjZURhdGEsTE9BRF9JTlNVUkFOQ0Usc2VsZWN0ZWRfcGxhbixVU0VSLHNlbGZfZGF0YV92YWx1ZXMsc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnMsc2VsZWN0ZWRQcm9maWxlLCBjdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLCBjcmVhdGVfcGF5bWVudF9yZXNwLCBlbmRvcnNlZF9tZW1iZXJfZGF0YSwgbWVtYmVyc19wcm9vZnNcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIGdldEluc3VyYW5jZTogKGluc3VyYW5jZUlkKSA9PiBkaXNwYXRjaChnZXRJbnN1cmFuY2UoaW5zdXJhbmNlSWQpKSxcbiAgICAgICAgLy8gZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICAvLyBzZWxlY3RJbnN1cmFuY2VQbGFuOiAocGxhbixjcml0ZXJpYSxmb3JjZWFkZCkgPT4gZGlzcGF0Y2goc2VsZWN0SW5zdXJhbmNlUGxhbihwbGFuLGNyaXRlcmlhLGZvcmNlYWRkKSksXG4gICAgICAgIHVzZXJEYXRhIDooc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSA9PiBkaXNwYXRjaCh1c2VyRGF0YShzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpKSxcbiAgICAgICAgc2VsZWN0SW5zdXJhbmNlUHJvZmlsZSA6KG5ld1Byb2ZpbGVpZCxtZW1iZXJfaWQsbmV3UHJvZmlsZSxwYXJhbV9pZCkgPT4gZGlzcGF0Y2goc2VsZWN0SW5zdXJhbmNlUHJvZmlsZShuZXdQcm9maWxlaWQsbWVtYmVyX2lkLG5ld1Byb2ZpbGUscGFyYW1faWQpKSxcbiAgICAgICAgc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnM6IChtZW1iZXJzSWQpID0+IGRpc3BhdGNoKHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzKG1lbWJlcnNJZCkpLFxuICAgICAgICBwdXNoVXNlckRhdGEgOihjcml0ZXJpYSxjYWxsYmFjaykgPT4gZGlzcGF0Y2gocHVzaFVzZXJEYXRhKGNyaXRlcmlhLGNhbGxiYWNrKSksXG4gICAgICAgIHJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzOiAoKSA9PiBkaXNwYXRjaChyZXNldFNlbGVjdGVkSW5zdXJhbmNlTWVtYmVycygpKSxcbiAgICAgICAgc3VibWl0RW1haWxPVFA6IChkYXRhLCBjYikgPT4gZGlzcGF0Y2goc3VibWl0RW1haWxPVFAoZGF0YSwgY2IpKSxcbiAgICAgICAgc2VuZE90cE9uRW1haWw6KGNyaXRlcmlhLGNhbGxiYWNrKT0+ZGlzcGF0Y2goc2VuZE90cE9uRW1haWwoY3JpdGVyaWEsY2FsbGJhY2spKSxcbiAgICAgICAgLy8gcmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnM6ICgpID0+IGRpc3BhdGNoKHJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzKCkpXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMgLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluc3VyYW5jZURldGFpbHMpIl0sInNvdXJjZVJvb3QiOiIifQ==