exports.ids = [121];
exports.modules = {

/***/ "./dev/js/components/insurance/insuranceEndorsementDetailsView.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/insurance/insuranceEndorsementDetailsView.js ***!
  \************************************************************************/
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

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceEndoresmentInputView extends _react2.default.Component {
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
			endorsementError: [],
			emailVerified: false
		};
	}
	componentDidMount() {
		let self = this;
		if (window) {
			window.scrollTo(0, 0);
		}
		let card;
		let membersId = [];
		if (this.props.endorseData && this.props.endorseData.members.length > 0) {
			card = this.props.endorseData.members.map((member, i) => {
				membersId.push({ [i]: member.id });
			});
			this.props.saveCurrentSelectedMembers(membersId); // to save current selected members data in store
			this.setState({ saveMembers: true });
		}
		this.setState(_extends({}, self.props.self_data_values, { selected_plan_price: this.props.selected_plan.amount }));
		if (this.props.create_payment_resp) {
			if (this.props.create_payment_resp.members && this.props.create_payment_resp.members.length > 0) {
				this.setState({ CreateApiErrors: self.props.create_payment_resp });
			}
		}
	}

	componentWillReceiveProps(props) {
		// let card
		// let self = this
		// let isDummyUser
		// let membersId = []
		//   	if(!this.state.saveMembers && Object.keys(props.selected_plan).length >0 && props.USER.defaultProfile && !props.currentSelectedInsuredMembersId.length){
		//   		// let loginUser = props.USER.selectedProfile
		//   		let loginUser = props.USER.defaultProfile
		//   		let membersId = []
		//   		let isDefaultUser
		//   		if(props.USER.profiles && Object.keys(props.USER.profiles).length && props.USER.profiles[props.USER.defaultProfile]){
		//   			isDefaultUser = props.USER.profiles[props.USER.defaultProfile].is_default_user
		//   		}
		//   		isDummyUser = props.USER.profiles[props.USER.defaultProfile].isDummyUser
		//   		if(!isDummyUser){
		//    		membersId.push({'0':loginUser})
		//    		var n = (props.selected_plan.adult_count + props.selected_plan.child_count) - 1;
		// 		if(n !== 0){
		// 			card = [...Array(n)].map((e, i) => {
		// 				membersId.push({[i+1]: i+1})
		// 			})
		// 		}
		// 	}else{
		// 		membersId.push({'0':0})
		// 		var n = (props.selected_plan.adult_count + props.selected_plan.child_count) - 1;
		// 		if(n !== 0){
		// 			card = [...Array(n)].map((e, i) => {
		// 				membersId.push({[i+1]: i+1})
		// 			})
		// 		}
		// 	}
		// 	props.saveCurrentSelectedMembers(membersId)
		// 	this.setState({ saveMembers: true})
		//   	}
		//   	let profileLength = Object.keys(props.USER.profiles).length;
		// let currentSelectedProfiles = []
		// let show_selected_profile = []
		//       this.props.currentSelectedInsuredMembersId.map((val,key) => {
		//           currentSelectedProfiles.push(val[key])
		//       })
		//    if(profileLength > 0){
		//    	if(!props.USER.profiles[props.USER.defaultProfile].isDummyUser){
		// 		{Object.entries(props.USER.profiles).map(function([key, value]) {

		// 			if(currentSelectedProfiles.indexOf(parseInt(key)) == -1 && key !== props.USER.defaultProfile){
		// 				show_selected_profile.push(key)
		// 			}
		// 		})}
		// 		self.setState({show_selected_profiles : show_selected_profile})
		// 	}
		// }
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

	checkIsEmailVerfied() {
		this.setState({ emailVerified: true });
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
		let all_id_proofs = [];
		let is_fields_edited = [];
		let edited_fields = {};
		let member_proof = [];
		let newIdProofs;
		let isAgent = false;
		if (Object.keys(this.props.self_data_values).length > 0) {
			// isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser
			// if(!isDummyUser){
			// 	self_profile  = Object.assign({}, this.props.self_data_values[this.props.USER.defaultProfile])	
			// }else{
			// 	self_profile  = Object.assign({}, this.props.self_data_values[0])
			// }
			// self_profile  = Object.assign({}, this.props.self_data_values[0])
			this.props.currentSelectedInsuredMembersId.map((val, key) => {
				if (this.props.self_data_values[val[key]].relation == 'self') {
					self_profile = Object.assign({}, this.props.self_data_values[val[key]]);
				}
			});
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

				if (!param.no_lname) {
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
					if (param.town == "") {
						is_disable = true;
						fields.push('town');
					}
					if (param.district == "") {
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
		// validating is user had changed anything	
		if (this.props.endorsed_member_data.members.length == Object.keys(this.props.self_data_values).length) {
			for (var i = 0; i < this.props.endorsed_member_data.members.length; i++) {
				let id = this.props.endorsed_member_data.members[i].id;
				if (this.props.self_data_values[id]) {
					let selectedProfile = this.props.self_data_values[id];
					let selectedApiProfile = this.props.endorsed_member_data.members[i];
					for (let j in selectedApiProfile) {
						if (j == 'first_name') {
							if (selectedProfile['name'] != selectedApiProfile['first_name']) {
								is_fields_edited.push(id);
								if (edited_fields[id]) {} else {
									edited_fields[id] = [];
								}
								edited_fields[id].push(j);
							}
						}
						if (j != 'email') {
							if (selectedProfile[j] != selectedApiProfile[j]) {
								is_fields_edited.push(id);
								if (edited_fields[id]) {} else {
									edited_fields[id] = [];
								}
								edited_fields[id].push(j);
							}
						}
					}
				}
				if (this.props.members_proofs && this.props.members_proofs.length > 0 && is_fields_edited.indexOf(id) != -1) {
					member_proof = this.props.members_proofs.filter(x => x.id == id);
					if (member_proof && member_proof.length > 0 && member_proof[0].img_path_ids.length > 0) {
						all_id_proofs.push(member_proof[0].id);
					}
				}
			}
			if (all_id_proofs && all_id_proofs.length > 0) {
				newIdProofs = is_fields_edited.filter(function (x) {
					return all_id_proofs.indexOf(x) < 0;
				});
			} else {
				newIdProofs = is_fields_edited;
			}
			console.log(newIdProofs);
			if (newIdProofs && newIdProofs.length > 0) {
				newIdProofs.map((mem_id, i) => {
					is_disable = true;
					member_ref = `member_${mem_id}_upload`;
				});
			}
		}
		console.log(member_ref);
		this.setState({ validateErrors: validatingErrors, validateOtherErrors: validatingOtherErrors, validatingNames: invalidname, validateDobErrors: validatingDobErrors, errorMessages: errorMessagesObj, endorsementError: newIdProofs });
		if (Object.keys(edited_fields).length > 0 || this.state.emailVerified) {
			if (is_disable && document.getElementById(member_ref)) {
				document.getElementById(member_ref).scrollIntoView();
			} else {
				this.SaveUserData(this.props, edited_fields);
				if (_storage2.default.isAgent()) {
					isAgent = true;
				}
				this.props.history.push(`/insurance/insurance-user-details-review?is_endorsement=true&isAgent=${isAgent}`);
			}
		} else {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please update the required fields to proceed" });
		}
	}

	SaveUserData(props, edited_fields) {
		let self = this;
		var insuranceUserData = {};
		var members = {};
		insuranceUserData.members = [];
		insuranceUserData.edited_fields = edited_fields;
		Object.entries(this.props.currentSelectedInsuredMembersId).map(function ([key, value]) {
			members = {};
			members = _extends({}, self.props.self_data_values[value[key]]);
			return insuranceUserData.members.push(members);
		});
		this.props.pushUserEndorsedData(insuranceUserData); // to save user entered details in dummy table
	}

	render() {
		let child;
		let adult;
		let userProfile;
		let spouse_data;
		let child_data = [];
		let self_data;
		let findChild;
		if (this.props.endorseData && this.props.endorseData.members.length > 0 && this.props.currentSelectedInsuredMembersId.length > 0) {
			self_data = this.props.endorsed_member_data.members.filter(x => x.relation == 'self');
			if (this.props.selected_plan.adult_count == 2 && this.props.currentSelectedInsuredMembersId.length > 1) {
				spouse_data = this.props.endorsed_member_data.members.filter(x => x.relation == 'spouse');
				adult = _react2.default.createElement(_insuranceFamily2.default, _extends({}, this.props, {
					// self_gender={userProfile.gender} 
					self_gender: 'm',
					param_id: '1',
					member_id: spouse_data[0].id,
					checkForValidation: this.checkForValidation.bind(this),
					id: `member_${0}`,
					validateErrors: this.state.validateErrors[spouse_data[0].id] || [],
					validateOtherErrors: this.state.validateOtherErrors[spouse_data[0].id] || [],
					createApiErrors: this.state.CreateApiErrors.members ? this.state.CreateApiErrors.members[1] : [],
					show_selected_profiles: this.state.show_selected_profiles,
					validateDobErrors: [],
					errorMessages: this.state.errorMessages,
					validatingNames: this.state.validatingNames || [],
					is_endorsement: true,
					user_data: this.props.endorsed_member_data.members.filter(x => x.relation == 'spouse'),
					member_type: 'adult',
					endorsementError: this.state.endorsementError
				}));
			}
			var n = this.props.selected_plan.child_count;
			let findChild = this.props.currentSelectedInsuredMembersId.map((data, i) => {
				child_data = this.props.endorsed_member_data.members.filter(x => x.relation != 'self' && x.relation != 'spouse');
			});
			if (n !== 0) {
				if (child_data && child_data.length > 0) {
					child = child_data.map((data, i) => {
						return _react2.default.createElement(_insuranceFamily2.default, _extends({}, this.props, {
							key: i,
							member_id: child_data[i].id,
							checkForValidation: this.checkForValidation.bind(this),
							is_child_only: true,
							id: `member_${i + 1}`,
							param_id: i,
							member_view_id: i + 1,
							validateErrors: this.state.validateErrors[child_data[i].id] || [],
							validateOtherErrors: [],
							createApiErrorsChild: this.state.CreateApiErrors.members ? this.state.CreateApiErrors.members : [],
							show_selected_profiles: this.state.show_selected_profiles,
							validateDobErrors: this.state.validateDobErrors[i] || [],
							errorMessages: this.state.errorMessages,
							validatingNames: this.state.validatingNames || [],
							is_endorsement: true,
							user_data: [child_data[i]],
							member_type: 'child',
							endorsementError: this.state.endorsementError
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
					{ className: 'container container-top-margin' },
					_react2.default.createElement(
						'div',
						{ className: 'row main-row parent-section-row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-12 col-md-7 col-lg-7 ins-main-padding' },
							_react2.default.createElement(
								'section',
								{ className: 'profile-book-screen' },
								_react2.default.createElement(
									'div',
									{ className: 'widget' },
									_react2.default.createElement(
										'div',
										{ className: 'ins-card-head', style: { 'justifyContent': 'end', 'alignItems': 'end' } },
										_react2.default.createElement(
											'div',
											{ className: 'ins-name-head' },
											_react2.default.createElement('img', { width: '120', src: this.props.insurnaceData['insurance'][0].logo })
										),
										_react2.default.createElement(
											'div',
											{ className: 'ins-pdf-dwnload', style: { 'marginLeft': '12px' } },
											_react2.default.createElement(
												'span',
												null,
												'OPD Insurance by',
												_react2.default.createElement(
													'p',
													null,
													_react2.default.createElement(
														'strong',
														null,
														'Apollo Munich'
													)
												)
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'insurance-member-container', style: { padding: '10px' } },
										_react2.default.createElement(
											'p',
											{ className: 'plcy-cancel' },
											'*Incorrect member details may lead to policy cancellation'
										),
										_react2.default.createElement(
											'h4',
											{ className: 'mb-0' },
											'Insured Member Details'
										),
										_react2.default.createElement(
											'p',
											{ className: 'fill-error-span fw-500 text-right d-block', style: { marginTop: '0px', fontSize: '11px' } },
											'*All fields are mandatory'
										),
										_react2.default.createElement(
											'div',
											{ className: 'insurance-member-details' },
											_react2.default.createElement(_insuranceSelf2.default, _extends({}, this.props, {
												checkForValidation: this.checkForValidation.bind(this),
												id: `member_${this.props.currentSelectedInsuredMembersId[0]['0']}`,
												member_id: self_data[0].id,
												validateErrors: this.state.validateErrors[self_data[0].id] || [],
												validateOtherErrors: this.state.validateOtherErrors[self_data[0].id] || [],
												createApiErrors: this.state.CreateApiErrors.members ? this.state.CreateApiErrors.members[0] : [],
												errorMessages: this.state.errorMessages,
												is_endorsement: true,
												user_data: this.props.endorsed_member_data.members.filter(x => x.relation == 'self'),
												member_type: 'adult',
												endorsementError: this.state.endorsementError,
												checkIsEmailVerfied: this.checkIsEmailVerfied.bind(this)
											}))
										)
									)
								),
								adult,
								child
							),
							_react2.default.createElement(
								'button',
								{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this) },
								'Update'
							)
						),
						_react2.default.createElement(_ChatPanel2.default, null)
					)
				)
			);
		} else {
			return _react2.default.createElement('div', null);
		}
	}

}

exports.default = InsuranceEndoresmentInputView;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceEndorsementDetails.js":
/*!********************************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceEndorsementDetails.js ***!
  \********************************************************************/
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

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _insuranceEndorsementDetailsView = __webpack_require__(/*! ../../components/insurance/insuranceEndorsementDetailsView.js */ "./dev/js/components/insurance/insuranceEndorsementDetailsView.js");

var _insuranceEndorsementDetailsView2 = _interopRequireDefault(_insuranceEndorsementDetailsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceEndorsementDetails extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            insurance_data: null,
            members_data: null
        };
    }
    componentDidMount() {
        let self = this;
        this.props.getEndorsedMemberList(mem_resp => {
            // to get the list of members which are allowed for endorsement
            if (mem_resp) {
                this.props.getInsurance(true, resp => {
                    // to get insurance plans
                    if (resp && resp.insurance) {
                        let plan = resp.insurance[0].plans.filter(x => x.id == mem_resp.insurance_plan)[0];
                        this.props.selectInsurancePlan('plan', plan); // to store selected plan by user
                        this.setState({ members_data: mem_resp, insurance_data: resp });
                    }
                });
            }
        });
    }
    render() {

        if (this.state.members_data && this.state.insurance_data) {
            return _react2.default.createElement(_insuranceEndorsementDetailsView2.default, _extends({}, this.props, { endorseData: this.state.members_data }));
        } else {
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap', style: { paddingBottom: 80 } },
                _react2.default.createElement(_Loader2.default, null)
            );
        }
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { insurnaceData, LOAD_INSURANCE, selected_plan, self_data_values, saveCurrentSelectedMembers, selectedProfile, currentSelectedInsuredMembersId, create_payment_resp, endorsed_member_data, members_proofs } = state.INSURANCE;
    return {
        insurnaceData, LOAD_INSURANCE, selected_plan, USER, self_data_values, saveCurrentSelectedMembers, selectedProfile, currentSelectedInsuredMembersId, create_payment_resp, endorsed_member_data, members_proofs
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getInsurance: (is_endorsement, callback) => dispatch((0, _index.getInsurance)(is_endorsement, callback)),
        userData: (self_data, criteria, forceadd) => dispatch((0, _index.userData)(self_data, criteria, forceadd)),
        selectInsuranceProfile: (newProfileid, member_id, newProfile, param_id) => dispatch((0, _index.selectInsuranceProfile)(newProfileid, member_id, newProfile, param_id)),
        saveCurrentSelectedMembers: membersId => dispatch((0, _index.saveCurrentSelectedMembers)(membersId)),
        pushUserData: (criteria, callback) => dispatch((0, _index.pushUserData)(criteria, callback)),
        resetSelectedInsuranceMembers: () => dispatch((0, _index.resetSelectedInsuranceMembers)()),
        getEndorsedMemberList: callback => dispatch((0, _index.getEndorsedMemberList)(callback)),
        pushUserEndorsedData: (criteria, callback) => dispatch((0, _index.pushUserEndorsedData)(criteria, callback)),
        selectInsurancePlan: (plan, criteria) => dispatch((0, _index.selectInsurancePlan)(plan, criteria)),
        uploadProof: (profileData, profileId, imgType, cb) => dispatch((0, _index.uploadProof)(profileData, profileId, imgType, cb)),
        storeMemberProofs: (imgUrl, cb) => dispatch((0, _index.storeMemberProofs)(imgUrl, cb)),
        removeMemberProof: criteria => dispatch((0, _index.removeMemberProof)(criteria)),
        sendOtpOnEmail: (criteria, callback) => dispatch((0, _index.sendOtpOnEmail)(criteria, callback)),
        submitEmailOTP: (data, cb) => dispatch((0, _index.submitEmailOTP)(data, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceEndorsementDetails);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlRW5kb3JzZW1lbnREZXRhaWxzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pbnN1cmFuY2UvSW5zdXJhbmNlRW5kb3JzZW1lbnREZXRhaWxzLmpzIl0sIm5hbWVzIjpbIkluc3VyYW5jZUVuZG9yZXNtZW50SW5wdXRWaWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJub19sbmFtZSIsImlzX2VkaXQiLCJnc3QiLCJlbmFibGVfcHJvY2VlZCIsInByb2ZpbGVzX3NlbGVjdGVkIiwic2F2ZU1lbWJlcnMiLCJpc19kaXNhYmxlIiwidmFsaWRhdGVFcnJvcnMiLCJ2YWxpZGF0ZU90aGVyRXJyb3JzIiwidmFsaWRhdGluZ05hbWVzIiwiQ3JlYXRlQXBpRXJyb3JzIiwic2hvd19zZWxlY3RlZF9wcm9maWxlcyIsInZhbGlkYXRlRG9iRXJyb3JzIiwiZXJyb3JNZXNzYWdlcyIsImVuZG9yc2VtZW50RXJyb3IiLCJlbWFpbFZlcmlmaWVkIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZWxmIiwid2luZG93Iiwic2Nyb2xsVG8iLCJjYXJkIiwibWVtYmVyc0lkIiwiZW5kb3JzZURhdGEiLCJtZW1iZXJzIiwibGVuZ3RoIiwibWFwIiwibWVtYmVyIiwiaSIsInB1c2giLCJpZCIsInNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzIiwic2V0U3RhdGUiLCJzZWxmX2RhdGFfdmFsdWVzIiwic2VsZWN0ZWRfcGxhbl9wcmljZSIsInNlbGVjdGVkX3BsYW4iLCJhbW91bnQiLCJjcmVhdGVfcGF5bWVudF9yZXNwIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsImNoZWNrRm9yVmFsaWRhdGlvbiIsInByb2ZpbGVfZGF0YSIsIm1lbWJlcl9pZCIsInByb2ZpbGVzIiwiZmlsdGVyIiwieCIsImlzX2VuYWJsZSIsImlzZm9ybUNvbXBsZXRlZCIsImNoZWNrSXNFbWFpbFZlcmZpZWQiLCJwcm9jZWVkUGxhbiIsIm1lbWJlcl9yZWYiLCJlbXB0eV9mZWlsZHMiLCJjdXJyZW50U2VsZWN0ZWRQcm9maWxlcyIsImZpZWxkc19uYW1lIiwiZmllbGRzX25hbWVfb2JqIiwiZXJyb3JNZXNzYWdlc09iaiIsInNlbGZfcHJvZmlsZSIsInNlbGZfYWdlIiwiYWR1bHQyYWdlIiwiY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZCIsInZhbCIsImtleSIsInZhbGlkYXRpbmdFcnJvcnMiLCJ2YWxpZGF0aW5nRG9iRXJyb3JzIiwidmFsaWRhdGluZ05hbWUiLCJ2YWxpZGF0aW5nT3RoZXJFcnJvcnMiLCJpbnZhbGlkbmFtZSIsImZ1bGxuYW1lIiwiZnVsbG5hbWVPYmoiLCJpc0R1bW15VXNlciIsImFsbF9pZF9wcm9vZnMiLCJpc19maWVsZHNfZWRpdGVkIiwiZWRpdGVkX2ZpZWxkcyIsIm1lbWJlcl9wcm9vZiIsIm5ld0lkUHJvb2ZzIiwiaXNBZ2VudCIsIk9iamVjdCIsImtleXMiLCJyZWxhdGlvbiIsImFzc2lnbiIsImZpZWxkcyIsImRvYkVycm9yIiwicGFyYW0iLCJ0aXRsZSIsIm5hbWUiLCJnZW5kZXIiLCJkb2IiLCJsYXN0X25hbWUiLCJwaW5jb2RlIiwiYWRkcmVzcyIsInN0YXRlX2NvZGUiLCJ0b3duIiwiZGlzdHJpY3QiLCJlbWFpbCIsInZhbGlkRW1haWwiLCJ0ZXN0IiwibWVtYmVyX3R5cGUiLCJvbmx5X2FkdWx0IiwidG9kYXkiLCJEYXRlIiwiYmlydGhEYXRlIiwiYWdlIiwiZ2V0RnVsbFllYXIiLCJtIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwidGhyZXNob2xkIiwicGFyc2VJbnQiLCJtaW5fYWdlIiwibWF4X2FnZSIsImNoaWxkQWdlIiwib25lRGF5IiwiZmlyc3REYXRlIiwic2Vjb25kRGF0ZSIsImRpZmZEYXlzIiwiTWF0aCIsInJvdW5kIiwiYWJzIiwiZ2V0VGltZSIsIm1pbkFnZU9mQWR1bHRzIiwibWluIiwiYWR1bHRDaGlsZEFnZURpZmYiLCJjaGlsZF9hZ2UiLCJjaGlsZF9taW5fYWdlIiwiY2hpbGRfbWF4X2FnZSIsImNvbW1vbl9tZXNzYWdlIiwibWF4X2NoYXJhY3RlciIsInZhbGlkX2VtYWlsIiwiYWR1bHRfYWdlIiwic2FtZUdlbmRlclRpdGxlIiwic2hvdWxkR2VuZGVyVGl0bGUiLCJjaGlsZEFnZURpZmYiLCJtaWRkbGVfbmFtZSIsImZOYW1lIiwidG9Mb3dlckNhc2UiLCJuZXdBcnJheSIsIkFycmF5RmxhZyIsImVudHJpZXMiLCJ2YWx1ZSIsInNhbWVOYW1lIiwiZm9yRWFjaCIsImNvbnNvbGUiLCJsb2ciLCJlbmRvcnNlZF9tZW1iZXJfZGF0YSIsInNlbGVjdGVkUHJvZmlsZSIsInNlbGVjdGVkQXBpUHJvZmlsZSIsImoiLCJtZW1iZXJzX3Byb29mcyIsImluZGV4T2YiLCJpbWdfcGF0aF9pZHMiLCJtZW1faWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJTYXZlVXNlckRhdGEiLCJTVE9SQUdFIiwiaGlzdG9yeSIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJpbnN1cmFuY2VVc2VyRGF0YSIsInB1c2hVc2VyRW5kb3JzZWREYXRhIiwicmVuZGVyIiwiY2hpbGQiLCJhZHVsdCIsInVzZXJQcm9maWxlIiwic3BvdXNlX2RhdGEiLCJjaGlsZF9kYXRhIiwic2VsZl9kYXRhIiwiZmluZENoaWxkIiwiYWR1bHRfY291bnQiLCJiaW5kIiwibiIsImNoaWxkX2NvdW50IiwiZGF0YSIsImluc3VybmFjZURhdGEiLCJsb2dvIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiSW5zdXJhbmNlRW5kb3JzZW1lbnREZXRhaWxzIiwiaW5zdXJhbmNlX2RhdGEiLCJtZW1iZXJzX2RhdGEiLCJnZXRFbmRvcnNlZE1lbWJlckxpc3QiLCJtZW1fcmVzcCIsImdldEluc3VyYW5jZSIsInJlc3AiLCJpbnN1cmFuY2UiLCJwbGFuIiwicGxhbnMiLCJpbnN1cmFuY2VfcGxhbiIsInNlbGVjdEluc3VyYW5jZVBsYW4iLCJwYWRkaW5nQm90dG9tIiwibWFwU3RhdGVUb1Byb3BzIiwiVVNFUiIsIkxPQURfSU5TVVJBTkNFIiwiSU5TVVJBTkNFIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJpc19lbmRvcnNlbWVudCIsImNhbGxiYWNrIiwidXNlckRhdGEiLCJjcml0ZXJpYSIsImZvcmNlYWRkIiwic2VsZWN0SW5zdXJhbmNlUHJvZmlsZSIsIm5ld1Byb2ZpbGVpZCIsIm5ld1Byb2ZpbGUiLCJwYXJhbV9pZCIsInB1c2hVc2VyRGF0YSIsInJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzIiwidXBsb2FkUHJvb2YiLCJwcm9maWxlRGF0YSIsInByb2ZpbGVJZCIsImltZ1R5cGUiLCJjYiIsInN0b3JlTWVtYmVyUHJvb2ZzIiwiaW1nVXJsIiwicmVtb3ZlTWVtYmVyUHJvb2YiLCJzZW5kT3RwT25FbWFpbCIsInN1Ym1pdEVtYWlsT1RQIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsNkJBQU4sU0FBNENDLGdCQUFNQyxTQUFsRCxDQUEyRDtBQUMxREMsYUFBWUMsS0FBWixFQUFtQjtBQUNaLFFBQU1BLEtBQU47QUFDQSxPQUFLQyxLQUFMLEdBQWE7QUFDVDtBQUNBQyxhQUFTLEtBRkE7QUFHVEMsWUFBUSxJQUhDO0FBSVRDLFFBQUssc0JBSkk7QUFLVEMsbUJBQWUsS0FMTjtBQU1UQyxzQkFBa0IsRUFOVDtBQU9UQyxnQkFBWSxLQVBIO0FBUVQ7QUFDQUMsZUFBWSxFQVRIO0FBVVQ7QUFDQUMsbUJBQWUsRUFYTjtBQVlUQyx3QkFBb0IsRUFaWDtBQWFUQyxvQkFBZ0IsRUFiUDtBQWNUQyxvQkFBZ0IsRUFkUDtBQWVUQywyQkFBdUIsRUFmZDtBQWdCVEMsc0JBQWtCLEVBaEJUO0FB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QUFZSixTQUFTLDhCQUFrQkksUUFBbEIsQ0FBVCxDQVozQjtBQWFIZ0Isd0JBQWUsQ0FBQ2hCLFFBQUQsRUFBVUYsUUFBVixLQUFxQkYsU0FBUywyQkFBZUksUUFBZixFQUF3QkYsUUFBeEIsQ0FBVCxDQWJqQztBQWNIbUIsd0JBQWdCLENBQUM3QyxJQUFELEVBQU93QyxFQUFQLEtBQWNoQixTQUFTLDJCQUFleEIsSUFBZixFQUFxQndDLEVBQXJCLENBQVQ7QUFkM0IsS0FBUDtBQWdCSCxDQWpCRDs7a0JBcUJlLHlCQUFRckIsZUFBUixFQUEwQkksa0JBQTFCLEVBQThDakIsMkJBQTlDLEMiLCJmaWxlIjoiMTIxLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ2hhdFBhbmVsIGZyb20gJy4uL2NvbW1vbnMvQ2hhdFBhbmVsJ1xuaW1wb3J0IEluc3VyU2VsZiBmcm9tICcuL2luc3VyYW5jZVNlbGYuanMnXG5pbXBvcnQgSW5zdXJPdGhlcnMgZnJvbSAnLi9pbnN1cmFuY2VGYW1pbHkuanMnXG5pbXBvcnQgSW5zdXJDb21tb24gZnJvbSAnLi9pbnN1cmFuY2VDb21tb25TZWN0aW9uLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmNsYXNzIEluc3VyYW5jZUVuZG9yZXNtZW50SW5wdXRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC8vIHNlbGVjdGVkX3BsYW5fcGxhbjonJyxcbiAgICAgICAgICAgIG5vX2xuYW1lOmZhbHNlLFxuICAgICAgICAgICAgaXNfZWRpdDp0cnVlLFxuICAgICAgICAgICAgZ3N0OiAnaW5jbHVzaXZlIG9mIDE4JSBHU1QnLFxuICAgICAgICAgICAgZW5hYmxlX3Byb2NlZWQ6ZmFsc2UsXG4gICAgICAgICAgICBwcm9maWxlc19zZWxlY3RlZDpbXSxcbiAgICAgICAgICAgIHNhdmVNZW1iZXJzOmZhbHNlLFxuICAgICAgICAgICAgLy8gaXNfYWR1bHRfb25seTogZmFsc2UsXG4gICAgICAgICAgICBpc19kaXNhYmxlOiBbXSxcbiAgICAgICAgICAgIC8vIGlzVmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlRXJyb3JzOnt9LFxuICAgICAgICAgICAgdmFsaWRhdGVPdGhlckVycm9yczp7fSxcbiAgICAgICAgICAgIHZhbGlkYXRpbmdOYW1lczpbXSxcbiAgICAgICAgICAgIENyZWF0ZUFwaUVycm9yczp7fSxcbiAgICAgICAgICAgIHNob3dfc2VsZWN0ZWRfcHJvZmlsZXM6W10sXG4gICAgICAgICAgICB2YWxpZGF0ZURvYkVycm9yczpbXSxcbiAgICAgICAgICAgXHRlcnJvck1lc3NhZ2VzOltdLFxuICAgICAgICAgICBcdGVuZG9yc2VtZW50RXJyb3I6W10sXG4gICAgICAgICAgIFx0ZW1haWxWZXJpZmllZDpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgXHRsZXQgc2VsZiA9IHRoaXNcbiAgICBcdGlmKHdpbmRvdyl7XG4gICAgXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApXG4gICAgXHR9XG4gICAgXHRsZXQgY2FyZFxuICAgIFx0bGV0IG1lbWJlcnNJZCA9IFtdXG4gICAgXHRpZih0aGlzLnByb3BzLmVuZG9yc2VEYXRhICYmIHRoaXMucHJvcHMuZW5kb3JzZURhdGEubWVtYmVycy5sZW5ndGg+MCl7XG4gICAgXHRcdGNhcmQgPSB0aGlzLnByb3BzLmVuZG9yc2VEYXRhLm1lbWJlcnMubWFwKChtZW1iZXIsIGkpID0+IHtcblx0XHRcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHtbaV06IG1lbWJlci5pZH0pXG5cdFx0XHRcdFx0fSlcbiAgICBcdFx0dGhpcy5wcm9wcy5zYXZlQ3VycmVudFNlbGVjdGVkTWVtYmVycyhtZW1iZXJzSWQpIC8vIHRvIHNhdmUgY3VycmVudCBzZWxlY3RlZCBtZW1iZXJzIGRhdGEgaW4gc3RvcmVcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzYXZlTWVtYmVyczogdHJ1ZX0pXG5cbiAgICBcdH1cbiAgICBcdHRoaXMuc2V0U3RhdGUoey4uLnNlbGYucHJvcHMuc2VsZl9kYXRhX3ZhbHVlcywgc2VsZWN0ZWRfcGxhbl9wcmljZTp0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYW1vdW50fSlcbiAgICBcdGlmKHRoaXMucHJvcHMuY3JlYXRlX3BheW1lbnRfcmVzcCl7XG4gICAgXHRcdGlmKHRoaXMucHJvcHMuY3JlYXRlX3BheW1lbnRfcmVzcC5tZW1iZXJzICYmIHRoaXMucHJvcHMuY3JlYXRlX3BheW1lbnRfcmVzcC5tZW1iZXJzLmxlbmd0aCA+MCl7XG4gICAgXHRcdFx0dGhpcy5zZXRTdGF0ZSh7Q3JlYXRlQXBpRXJyb3JzOnNlbGYucHJvcHMuY3JlYXRlX3BheW1lbnRfcmVzcH0pXHRcbiAgICBcdFx0fVxuICAgIFx0XHRcbiAgICBcdH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKXtcbiAgICBcdC8vIGxldCBjYXJkXG4gICAgXHQvLyBsZXQgc2VsZiA9IHRoaXNcbiAgICBcdC8vIGxldCBpc0R1bW15VXNlclxuICAgIFx0Ly8gbGV0IG1lbWJlcnNJZCA9IFtdXG4gIC8vICAgXHRpZighdGhpcy5zdGF0ZS5zYXZlTWVtYmVycyAmJiBPYmplY3Qua2V5cyhwcm9wcy5zZWxlY3RlZF9wbGFuKS5sZW5ndGggPjAgJiYgcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSAmJiAhcHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZC5sZW5ndGgpe1xuICAvLyAgIFx0XHQvLyBsZXQgbG9naW5Vc2VyID0gcHJvcHMuVVNFUi5zZWxlY3RlZFByb2ZpbGVcbiAgLy8gICBcdFx0bGV0IGxvZ2luVXNlciA9IHByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVcbiAgLy8gICBcdFx0bGV0IG1lbWJlcnNJZCA9IFtdXG4gIC8vICAgXHRcdGxldCBpc0RlZmF1bHRVc2VyXG4gIC8vICAgXHRcdGlmKHByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXMocHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoICYmIHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pe1xuICAvLyAgIFx0XHRcdGlzRGVmYXVsdFVzZXIgPSBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzX2RlZmF1bHRfdXNlclxuICAvLyAgIFx0XHR9XG4gIC8vICAgXHRcdGlzRHVtbXlVc2VyID0gcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlclxuICAvLyAgIFx0XHRpZighaXNEdW1teVVzZXIpe1xuXHQgLy8gICAgXHRcdG1lbWJlcnNJZC5wdXNoKHsnMCc6bG9naW5Vc2VyfSlcblx0IC8vICAgIFx0XHR2YXIgbiA9IChwcm9wcy5zZWxlY3RlZF9wbGFuLmFkdWx0X2NvdW50ICsgcHJvcHMuc2VsZWN0ZWRfcGxhbi5jaGlsZF9jb3VudCkgLSAxO1xuXHRcdC8vIFx0XHRpZihuICE9PSAwKXtcblx0XHQvLyBcdFx0XHRjYXJkID0gWy4uLkFycmF5KG4pXS5tYXAoKGUsIGkpID0+IHtcblx0XHQvLyBcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHtbaSsxXTogaSsxfSlcblx0XHQvLyBcdFx0XHR9KVxuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9ZWxzZXtcblx0XHQvLyBcdFx0bWVtYmVyc0lkLnB1c2goeycwJzowfSlcblx0XHQvLyBcdFx0dmFyIG4gPSAocHJvcHMuc2VsZWN0ZWRfcGxhbi5hZHVsdF9jb3VudCArIHByb3BzLnNlbGVjdGVkX3BsYW4uY2hpbGRfY291bnQpIC0gMTtcblx0XHQvLyBcdFx0aWYobiAhPT0gMCl7XG5cdFx0Ly8gXHRcdFx0Y2FyZCA9IFsuLi5BcnJheShuKV0ubWFwKChlLCBpKSA9PiB7XG5cdFx0Ly8gXHRcdFx0XHRtZW1iZXJzSWQucHVzaCh7W2krMV06IGkrMX0pXG5cdFx0Ly8gXHRcdFx0fSlcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXHRcdC8vIFx0cHJvcHMuc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnMobWVtYmVyc0lkKVxuXHRcdC8vIFx0dGhpcy5zZXRTdGF0ZSh7IHNhdmVNZW1iZXJzOiB0cnVlfSlcbiAgLy8gICBcdH1cbiAgLy8gICBcdGxldCBwcm9maWxlTGVuZ3RoID0gT2JqZWN0LmtleXMocHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoO1xuXHRcdC8vIGxldCBjdXJyZW50U2VsZWN0ZWRQcm9maWxlcyA9IFtdXG5cdFx0Ly8gbGV0IHNob3dfc2VsZWN0ZWRfcHJvZmlsZSA9IFtdXG4gIC8vICAgICAgIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZC5tYXAoKHZhbCxrZXkpID0+IHtcbiAgLy8gICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzLnB1c2godmFsW2tleV0pXG4gIC8vICAgICAgIH0pXG5cdCAvLyAgICBpZihwcm9maWxlTGVuZ3RoID4gMCl7XG5cdCAvLyAgICBcdGlmKCFwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzRHVtbXlVc2VyKXtcblx0XHQvLyBcdFx0e09iamVjdC5lbnRyaWVzKHByb3BzLlVTRVIucHJvZmlsZXMpLm1hcChmdW5jdGlvbihba2V5LCB2YWx1ZV0pIHtcblxuXHRcdC8vIFx0XHRcdGlmKGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzLmluZGV4T2YocGFyc2VJbnQoa2V5KSkgPT0gLTEgJiYga2V5ICE9PSBwcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlKXtcblx0XHQvLyBcdFx0XHRcdHNob3dfc2VsZWN0ZWRfcHJvZmlsZS5wdXNoKGtleSlcblx0XHQvLyBcdFx0XHR9XG5cdFx0Ly8gXHRcdH0pfVxuXHRcdC8vIFx0XHRzZWxmLnNldFN0YXRlKHtzaG93X3NlbGVjdGVkX3Byb2ZpbGVzIDogc2hvd19zZWxlY3RlZF9wcm9maWxlfSlcblx0XHQvLyBcdH1cblx0XHQvLyB9XG4gICAgfVxuXG4gICAgY2hlY2tGb3JWYWxpZGF0aW9uKHByb2ZpbGVfZGF0YSwgbWVtYmVyX2lkKXtcbiAgICBcdGxldCBwcm9maWxlcyA9IHRoaXMuc3RhdGUucHJvZmlsZXNfc2VsZWN0ZWRcbiAgICBcdGlmKHByb2ZpbGVzLmxlbmd0aCl7XG4gICAgXHRcdHByb2ZpbGVzID0gdGhpcy5zdGF0ZS5wcm9maWxlc19zZWxlY3RlZC5maWx0ZXIoKHggPT4geC5pZCAhPSBtZW1iZXJfaWQpKVxuICAgIFx0fVxuICAgIFx0cHJvZmlsZXMucHVzaChwcm9maWxlX2RhdGEpXG5cbiAgICBcdGxldCBpc19lbmFibGUgPSBwcm9maWxlcy5maWx0ZXIoeD0+ICF4LmlzZm9ybUNvbXBsZXRlZClcbiAgICBcdGlzX2VuYWJsZSA9IGlzX2VuYWJsZS5sZW5ndGg/ZmFsc2U6dHJ1ZVxuICAgIFx0dGhpcy5zZXRTdGF0ZSh7ZW5hYmxlX3Byb2NlZWQ6IGlzX2VuYWJsZSwgcHJvZmlsZXNfc2VsZWN0ZWQ6IHByb2ZpbGVzfSlcbiAgICB9XG5cbiAgICBjaGVja0lzRW1haWxWZXJmaWVkKCl7XG4gICAgXHR0aGlzLnNldFN0YXRlKHtlbWFpbFZlcmlmaWVkOnRydWV9KVxuICAgIH1cblxuICAgIHByb2NlZWRQbGFuKCl7XG4gICAgXHRsZXQgaXNfZGlzYWJsZSAgPSBmYWxzZVxuICAgIFx0bGV0IG1lbWJlcl9yZWYgPSAnJ1xuICAgIFx0bGV0IGVtcHR5X2ZlaWxkcyA9IFtdXG4gICAgXHRsZXQgY3VycmVudFNlbGVjdGVkUHJvZmlsZXMgPSBbXVxuICAgIFx0bGV0IGZpZWxkc19uYW1lID0gW11cbiAgICBcdGxldCBmaWVsZHNfbmFtZV9vYmogPSB7fVxuICAgIFx0bGV0IGVycm9yTWVzc2FnZXNPYmogPSB7fVxuICAgIFx0bGV0IHNlbGZfcHJvZmlsZVxuICAgIFx0bGV0IHNlbGZfYWdlXG4gICAgXHRsZXQgYWR1bHQyYWdlXG4gICAgXHR0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubWFwKCh2YWwsa2V5KSA9PiB7XG4gICAgXHRcdGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzLnB1c2godmFsW2tleV0pXG4gICAgXHR9KVxuICAgIFx0bGV0IHZhbGlkYXRpbmdFcnJvcnMgPSB7fVxuICAgIFx0bGV0IHZhbGlkYXRpbmdEb2JFcnJvcnMgPSB7fVxuICAgIFx0bGV0IHZhbGlkYXRpbmdOYW1lID0ge31cbiAgICBcdGxldCB2YWxpZGF0aW5nT3RoZXJFcnJvcnMgPSB7fVxuICAgIFx0bGV0IGludmFsaWRuYW1lID0gW11cbiAgICBcdGxldCBmdWxsbmFtZVxuICAgIFx0bGV0IGZ1bGxuYW1lT2JqPXt9XG4gICAgXHRsZXQgaXNEdW1teVVzZXJcbiAgICBcdGxldCBhbGxfaWRfcHJvb2ZzID0gW11cbiAgICBcdGxldCBpc19maWVsZHNfZWRpdGVkID0gW11cbiAgICBcdGxldCBlZGl0ZWRfZmllbGRzID17fVxuICAgIFx0bGV0IG1lbWJlcl9wcm9vZj1bXVxuICAgIFx0bGV0IG5ld0lkUHJvb2ZzXG4gICAgXHRsZXQgaXNBZ2VudD1mYWxzZVxuICAgIFx0aWYoT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzKS5sZW5ndGggPiAwKXtcbiAgICBcdFx0Ly8gaXNEdW1teVVzZXIgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlclxuICAgIFx0XHQvLyBpZighaXNEdW1teVVzZXIpe1xuICAgIFx0XHQvLyBcdHNlbGZfcHJvZmlsZSAgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSlcdFxuICAgIFx0XHQvLyB9ZWxzZXtcbiAgICBcdFx0Ly8gXHRzZWxmX3Byb2ZpbGUgID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzWzBdKVxuICAgIFx0XHQvLyB9XG4gICAgXHRcdC8vIHNlbGZfcHJvZmlsZSAgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbMF0pXG4gICAgXHRcdHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZC5tYXAoKHZhbCxrZXkpID0+IHtcbiAgICBcdFx0XHRpZih0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdmFsW2tleV1dLnJlbGF0aW9uID09ICdzZWxmJyl7XG4gICAgXHRcdFx0XHRzZWxmX3Byb2ZpbGUgID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3ZhbFtrZXldXSlcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0pXG4gICAgXHR9XG4gICAgXHR0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubWFwKCh2YWwsa2V5KSA9PiB7XG4gICAgXHRcdGlmKE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlcykubGVuZ3RoID4gMCl7XG4gICAgXHRcdFx0bGV0IGZpZWxkcyA9IFtdXG4gICAgXHRcdFx0bGV0IGRvYkVycm9yID0gW11cbiAgICBcdFx0XHRsZXQgcGFyYW0gPXRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1t2YWxba2V5XV1cblx0XHRcdFx0aWYocGFyYW0udGl0bGUgPT0gXCJcIil7ICAvL2NvbW1vbiB2YWxpZGF0aW9uXG5cdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRmaWVsZHMucHVzaCgndGl0bGUnKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocGFyYW0ucmVsYXRpb24gPT0gXCJcIil7XG5cdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRmaWVsZHMucHVzaCgncmVsYXRpb24nKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocGFyYW0ubmFtZSA9PSBcIlwiKXtcblx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGZpZWxkcy5wdXNoKCduYW1lJylcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHBhcmFtLmdlbmRlciA9PSBcIlwiKXtcblx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdnZW5kZXInKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocGFyYW0uZG9iID09IG51bGwgfHwgcGFyYW0uZG9iID09IFwiXCIpe1xuXHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2RvYicpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZighcGFyYW0ubm9fbG5hbWUpe1xuXHRcdFx0XHRcdGlmKHBhcmFtLmxhc3RfbmFtZSA9PVwiXCIpe1xuXHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdsYXN0X25hbWUnKVx0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocGFyYW0ucmVsYXRpb249PSAnc2VsZicpeyAvL29ubHkgc2VsZiB2YWxpZGF0aW9uXG5cdFx0XHRcdFx0aWYocGFyYW0ucGluY29kZSA9PSBcIlwiKXtcblx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgncGluY29kZScpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHBhcmFtLmFkZHJlc3MgPT0gXCJcIil7XG5cdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2FkZHJlc3MnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwYXJhbS5zdGF0ZSA9PSBcIlwiIHx8IHBhcmFtLnN0YXRlX2NvZGUgPT0gMCl7XG5cdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ3N0YXRlJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYocGFyYW0udG93biA9PSBcIlwiKXtcblx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgndG93bicpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHBhcmFtLmRpc3RyaWN0ID09IFwiXCIpe1xuXHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdkaXN0cmljdCcpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHBhcmFtLmVtYWlsID09IFwiXCIpe1xuXHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdlbWFpbCcpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHBhcmFtLmVtYWlsICE9JycgJiYgcGFyYW0ucmVsYXRpb24gPT0gJ3NlbGYnKXtcblx0XHRcdFx0XHRcdGxldCB2YWxpZEVtYWlsID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cdFx0XHQgIFx0XHRcdHZhbGlkRW1haWwgPSB2YWxpZEVtYWlsLnRlc3QocGFyYW0uZW1haWwpXG5cdFx0XHQgIFx0XHRcdGlmKCF2YWxpZEVtYWlsKXtcblx0XHRcdCAgXHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgnZW1haWwnKVx0XHRcblx0XHRcdCAgXHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHBhcmFtLm1lbWJlcl90eXBlID09ICdhZHVsdCcpeyAvLyBvbmx5IGFkdWx0IHZhbGlkYXRpb24gaW4gY2FzZSBvZiBzYW1lIGdlbmRlciBvciB0aXRsZVxuXHRcdFx0XHRcdGlmKHBhcmFtLm9ubHlfYWR1bHQgJiYgcGFyYW0udGl0bGUgIT09IFwiXCIpe1xuXHRcdFx0XHRcdFx0aWYoc2VsZl9wcm9maWxlLnRpdGxlID09IHBhcmFtLnRpdGxlKXtcblx0XHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0ZW1wdHlfZmVpbGRzLnB1c2goJ3RpdGxlJylcdFxuXHRcdFx0XHRcdFx0fSBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYocGFyYW0uZ2VuZGVyICE9ICcnICYmIHBhcmFtLnRpdGxlICE9Jycpe1xuXHRcdFx0XHRcdFx0aWYocGFyYW0uZ2VuZGVyID09ICdtJyAmJiBwYXJhbS50aXRsZSAhPSdtci4nKXtcblx0XHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0ZW1wdHlfZmVpbGRzLnB1c2goJ2dlbmRlcicpXHRcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHBhcmFtLmdlbmRlciA9PSAnZicgJiYgcGFyYW0udGl0bGU9PSdtcicpe1xuXHRcdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRlbXB0eV9mZWlsZHMucHVzaCgnZ2VuZGVyJylcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwYXJhbS5waW5jb2RlICYmIHBhcmFtLnBpbmNvZGUgIT09Jycpe1xuXHRcdFx0XHRcdFx0aWYocGFyYW0ucGluY29kZS5sZW5ndGggPDYpe1xuXHRcdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRlbXB0eV9mZWlsZHMucHVzaCgncGluY29kZScpXHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHBhcmFtLmRvYiAhPSBudWxsICYmIHBhcmFtLm1lbWJlcl90eXBlPT0gJ2FkdWx0Jyl7IC8vZG9iIHZhbGlkYXRpb25cblx0XHRcdFx0XHRsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHQgICAgbGV0IGJpcnRoRGF0ZSA9IG5ldyBEYXRlKHBhcmFtLmRvYik7XG5cdFx0XHRcdCAgICBsZXQgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHQgICAgbGV0IG0gPSB0b2RheS5nZXRNb250aCgpIC0gYmlydGhEYXRlLmdldE1vbnRoKCk7XG5cdFx0XHRcdCAgICBpZiAobSA8IDAgfHwgKG0gPT09IDAgJiYgdG9kYXkuZ2V0RGF0ZSgpIDwgYmlydGhEYXRlLmdldERhdGUoKSkpIHtcblx0XHRcdFx0ICAgICAgICBhZ2UtLTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIGlmKHBhcmFtLnJlbGF0aW9uPT0gJ3NlbGYnKXtcblx0XHRcdFx0XHRcdHNlbGZfYWdlID0gYWdlXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRhZHVsdDJhZ2UgPSBhZ2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgICBpZih0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkLmxlbmd0aD4wKXtcblx0XHRcdFx0ICAgIFx0aWYocGFyc2VJbnQoYWdlKSA8IHBhcnNlSW50KHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWluX2FnZSkgfHwgXG5cdFx0XHRcdFx0ICAgIFx0cGFyc2VJbnQoYWdlKSA+IHBhcnNlSW50KHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWF4X2FnZSkpe1xuXHRcdFx0XHQgIFx0XHRcdGZpZWxkcy5wdXNoKCdkb2InKVxuXHRcdFx0XHQgIFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXHRcdFx0ICAgIFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2UgaWYocGFyYW0uZG9iICE9IG51bGwgJiYgcGFyYW0ubWVtYmVyX3R5cGU9PSAnY2hpbGQnKXtcdFxuXHRcdFx0XHRcdGxldCBjaGlsZEFnZVx0XHRcdFx0XG5cdFx0XHRcdFx0bGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0XHRcdFx0ICAgIGxldCBiaXJ0aERhdGUgPSBuZXcgRGF0ZShwYXJhbS5kb2IpO1xuXHRcdFx0XHQgICAgY2hpbGRBZ2UgPSB0b2RheS5nZXRGdWxsWWVhcigpIC0gYmlydGhEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdCAgICBsZXQgbSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGUuZ2V0TW9udGgoKTtcblx0XHRcdFx0ICAgIGlmIChtIDwgMCB8fCAobSA9PT0gMCAmJiB0b2RheS5nZXREYXRlKCkgPCBiaXJ0aERhdGUuZ2V0RGF0ZSgpKSkge1xuXHRcdFx0XHQgICAgICAgIGNoaWxkQWdlLS07XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdFx0bGV0IG9uZURheSA9IDI0KjYwKjYwKjEwMDA7XG5cdFx0XHRcdFx0bGV0IGZpcnN0RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0bGV0IHNlY29uZERhdGUgPSBuZXcgRGF0ZShwYXJhbS5kb2IpO1xuXHRcdFx0XHRcdGxldCBkaWZmRGF5cyA9IE1hdGgucm91bmQoTWF0aC5hYnMoKGZpcnN0RGF0ZS5nZXRUaW1lKCkgLSBzZWNvbmREYXRlLmdldFRpbWUoKSkvKG9uZURheSkpKTtcblx0XHRcdFx0XHRpZih0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkLmxlbmd0aD4wKXtcblx0XHRcdFx0XHRcdGxldCBtaW5BZ2VPZkFkdWx0cyA9IE1hdGgubWluKHNlbGZfYWdlLGFkdWx0MmFnZSlcblx0XHRcdFx0XHRcdGxldCBhZHVsdENoaWxkQWdlRGlmZiA9IG1pbkFnZU9mQWR1bHRzIC0gY2hpbGRBZ2Vcblx0XHRcdFx0XHRcdGxldCBjaGlsZF9hZ2UgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLmNoaWxkX21pbl9hZ2Vcblx0XHRcdFx0XHRcdGxldCBjaGlsZF9tYXhfYWdlID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5jaGlsZF9tYXhfYWdlXG5cdFx0XHRcdFx0XHRpZihwYXJzZUludChkaWZmRGF5cykgPCBwYXJzZUludChjaGlsZF9hZ2UpIHx8IHBhcnNlSW50KGNoaWxkQWdlKSA+IHBhcnNlSW50KGNoaWxkX21heF9hZ2UpKXtcblx0XHRcdFx0ICBcdFx0XHRmaWVsZHMucHVzaCgnZG9iJylcblx0XHRcdFx0ICBcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVx0XHRcdCAgICBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmKGFkdWx0Q2hpbGRBZ2VEaWZmIDwgMTgpe1xuXHRcdFx0XHRcdFx0XHRkb2JFcnJvci5wdXNoKCdkb2InKVxuXHRcdFx0XHQgIFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZC5sZW5ndGg+MCl7XG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5jaGlsZF9tYXhfYWdlPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLmNoaWxkX21heF9hZ2Vcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLmNoaWxkX21pbl9hZ2U9IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0uY2hpbGRfbWluX2FnZVxuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmoubWF4X2FnZT0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5tYXhfYWdlXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5taW5fYWdlPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLm1pbl9hZ2Vcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLmNvbW1vbl9tZXNzYWdlPSAnKlRoaXMgaXMgYSBtYW5kYXRvcnkgZmllbGQnXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5tYXhfY2hhcmFjdGVyPSAnTWF4aW11bSBjaGFyYWN0ZXIgbGltaXQ6IDUwJ1xuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmoudmFsaWRfZW1haWw9ICcqUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwnXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5hZHVsdF9hZ2UgPSBgKkFnZSBzaG91bGQgYmUgbW9yZSB0aGFuICR7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5taW5fYWdlfSB5ZWFycyBhbmQgbGVzcyB0aGFuICR7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5tYXhfYWdlfSB5ZWFyc2Bcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLmNoaWxkX2FnZSA9IGAqQWdlIHNob3VsZCBiZSBtb3JlIHRoYW4gJHt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLmNoaWxkX21pbl9hZ2V9IGRheXMgYW5kIGxlc3MgdGhhbiAke3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0uY2hpbGRfbWF4X2FnZX0geWVhcnNgXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5zYW1lR2VuZGVyVGl0bGUgPSBcIipCb3RoIHRoZSBBZHVsdHMgY2FuJ3QgaGF2ZSBzYW1lIEdlbmRlciBhbmQgVGl0bGVcIlxuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmouc2hvdWxkR2VuZGVyVGl0bGUgPSBcIipCb3RoIEdlbmRlciBhbmQgVGl0bGUgY2FuJ3QgYmUgZGlmZmVyZW50XCJcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLmNoaWxkQWdlRGlmZiA9ICcqRGlmZmVyZW5jZSBiZXR3ZWVuIGFnZSBvZiBjaGlsZCBhbmQgYWR1bHQgc2hvdWxkIGJlIG1vcmUgdGhhbiAxOCB5ZWFycydcdFx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGlmKGZpZWxkcy5sZW5ndGggPiAwIHx8IGVtcHR5X2ZlaWxkcy5sZW5ndGggPiAwIHx8IGRvYkVycm9yLmxlbmd0aCA+IDApe1x0XG5cdFx0XHRcdC8vIFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0Ly8gXHRtZW1iZXJfcmVmID0gYG1lbWJlcl8ke3BhcmFtLmlkfWBcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRpZihwYXJhbS5uYW1lICE9IFwiXCIgJiYgcGFyYW0ubWlkZGxlX25hbWUgIT0gXCJcIiAmJiBwYXJhbS5sYXN0X25hbWUgIT0gXCJcIiAmJiAhcGFyYW0ubm9fbG5hbWUpey8vbmFtZSB2YWxpZGF0aW9uXG5cdFx0XHRcdFx0bGV0IGZ1bGxuYW1lT2JqPXt9XG5cdFx0XHRcdFx0ZnVsbG5hbWUgPSBwYXJhbS5uYW1lK3BhcmFtLm1pZGRsZV9uYW1lK3BhcmFtLmxhc3RfbmFtZVxuXHRcdFx0XHRcdGZ1bGxuYW1lT2JqLmlkPXBhcmFtLmlkXG5cdFx0XHRcdFx0ZnVsbG5hbWVPYmouZk5hbWU9ZnVsbG5hbWUudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdGZpZWxkc19uYW1lLnB1c2goZnVsbG5hbWVPYmopXG5cdFx0XHRcdH1lbHNlIGlmKHBhcmFtLm5hbWUgIT0gXCJcIiAmJiBwYXJhbS5taWRkbGVfbmFtZSA9PSBcIlwiICYmIHBhcmFtLmxhc3RfbmFtZSAhPSBcIlwiICYmICFwYXJhbS5ub19sbmFtZSl7XG5cdFx0XHRcdFx0bGV0IGZ1bGxuYW1lT2JqPXt9XG5cdFx0XHRcdFx0ZnVsbG5hbWUgPSBwYXJhbS5uYW1lK3BhcmFtLm1pZGRsZV9uYW1lK3BhcmFtLmxhc3RfbmFtZVxuXHRcdFx0XHRcdGZ1bGxuYW1lT2JqLmlkPXBhcmFtLmlkXG5cdFx0XHRcdFx0ZnVsbG5hbWVPYmouZk5hbWU9ZnVsbG5hbWUudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdGZpZWxkc19uYW1lLnB1c2goZnVsbG5hbWVPYmopXG5cdFx0XHRcdH1lbHNlIGlmKHBhcmFtLm5hbWUgIT0gXCJcIiAmJiBwYXJhbS5taWRkbGVfbmFtZSA9PSBcIlwiICYmIHBhcmFtLmxhc3RfbmFtZSA9PSBcIlwiICYmICFwYXJhbS5ub19sbmFtZSl7XG5cdFx0XHRcdFx0bGV0IGZ1bGxuYW1lT2JqPXt9XG5cdFx0XHRcdFx0ZnVsbG5hbWUgPSBwYXJhbS5uYW1lXG5cdFx0XHRcdFx0ZnVsbG5hbWVPYmouaWQ9cGFyYW0uaWRcblx0XHRcdFx0XHRmdWxsbmFtZU9iai5mTmFtZT1mdWxsbmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0ZmllbGRzX25hbWUucHVzaChmdWxsbmFtZU9iailcblx0XHRcdFx0fWVsc2UgaWYocGFyYW0ubmFtZSAhPSBcIlwiICYmIHBhcmFtLm5vX2xuYW1lKXtcblx0XHRcdFx0XHRsZXQgZnVsbG5hbWVPYmo9e31cblx0XHRcdFx0XHRmdWxsbmFtZSA9IHBhcmFtLm5hbWVcblx0XHRcdFx0XHRmdWxsbmFtZU9iai5pZD1wYXJhbS5pZFxuXHRcdFx0XHRcdGZ1bGxuYW1lT2JqLmZOYW1lPWZ1bGxuYW1lLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRmaWVsZHNfbmFtZS5wdXNoKGZ1bGxuYW1lT2JqKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFsaWRhdGluZ0Vycm9yc1twYXJhbS5pZF0gPSBmaWVsZHNcblx0XHRcdFx0dmFsaWRhdGluZ0RvYkVycm9yc1twYXJhbS5pZF0gPSBkb2JFcnJvclxuXHRcdFx0XHRpZihwYXJhbS5tZW1iZXJfdHlwZSA9PSAnYWR1bHQnKXtcblx0XHRcdFx0XHR2YWxpZGF0aW5nT3RoZXJFcnJvcnNbcGFyYW0uaWRdID0gZW1wdHlfZmVpbGRzXG5cdFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0fSlcdFx0XG5cdFx0dmFsaWRhdGluZ05hbWUgPSBmaWVsZHNfbmFtZVxuXHRcdFx0bGV0IG5ld0FycmF5PVtdXG5cdFx0XHRsZXQgQXJyYXlGbGFnPXRydWVcblx0XHRcdE9iamVjdC5lbnRyaWVzKHZhbGlkYXRpbmdOYW1lKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG5cdFx0XHRcdGlmKEFycmF5RmxhZyl7XG5cdFx0XHRcdFx0bmV3QXJyYXkgPSAgdmFsaWRhdGluZ05hbWUuZmlsdGVyKChuYW1lPT4gbmFtZS5mTmFtZSA9PSB2YWx1ZS5mTmFtZSkpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYobmV3QXJyYXkubGVuZ3RoPjEpe1xuXHRcdFx0XHRcdEFycmF5RmxhZyA9IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHRpZihuZXdBcnJheS5sZW5ndGggPjEpe1xuXHRcdFx0XHRtZW1iZXJfcmVmID0gYG1lbWJlcl8ke25ld0FycmF5WzFdLmlkfWBcblx0XHRcdFx0bGV0IGlkID0gJ2lkPScgKyBuZXdBcnJheVsxXS5pZFxuXHRcdFx0XHRpZihuZXdBcnJheVsxXS5uYW1lICE9ICcnICYmIG5ld0FycmF5WzFdLm1pZGRsZV9uYW1lICE9ICcnICYmIG5ld0FycmF5WzFdLmxhc3RfbmFtZSAhPScnKXtcblx0XHRcdFx0XHRpbnZhbGlkbmFtZS5wdXNoKGlkKVxuXHRcdFx0XHR9ZWxzZSBpZihuZXdBcnJheVsxXS5uYW1lICE9ICcnICYmIG5ld0FycmF5WzFdLm1pZGRsZV9uYW1lID09ICcnICYmIG5ld0FycmF5WzFdLmxhc3RfbmFtZSAhPScnKXtcblx0XHRcdFx0XHRpbnZhbGlkbmFtZS5wdXNoKGlkKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdGVycm9yTWVzc2FnZXNPYmouc2FtZU5hbWUgPSAnKk5hbWUgb2YgdGhlIG1lbWJlcnMgY2Fubm90IGJlIHNhbWUnXG5cdFx0XHR9XG5cblx0XHRcdE9iamVjdC5rZXlzKHZhbGlkYXRpbmdFcnJvcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgXHRcdFx0aWYodmFsaWRhdGluZ0Vycm9yc1trZXldLmxlbmd0aCA+IDApe1xuICAgIFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcbiAgICBcdFx0XHRcdG1lbWJlcl9yZWYgPSBgbWVtYmVyXyR7a2V5fWBcdFxuICAgIFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRPYmplY3Qua2V5cyh2YWxpZGF0aW5nT3RoZXJFcnJvcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgXHRcdFx0aWYodmFsaWRhdGluZ090aGVyRXJyb3JzW2tleV0ubGVuZ3RoID4gMCl7XG4gICAgXHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuICAgIFx0XHRcdFx0bWVtYmVyX3JlZiA9IGBtZW1iZXJfJHtrZXl9YFx0XG4gICAgXHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdE9iamVjdC5rZXlzKHZhbGlkYXRpbmdEb2JFcnJvcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgXHRcdFx0aWYodmFsaWRhdGluZ0RvYkVycm9yc1trZXldLmxlbmd0aCA+IDApe1xuICAgIFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcbiAgICBcdFx0XHRcdG1lbWJlcl9yZWYgPSBgbWVtYmVyXyR7a2V5fWBcdFxuICAgIFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRcblx0XHRcdGNvbnNvbGUubG9nKCd2YWxpZGF0ZUVycm9ycycpXG5cdFx0XHRjb25zb2xlLmxvZyh2YWxpZGF0aW5nRXJyb3JzKVxuXHRcdFx0Y29uc29sZS5sb2coJ3ZhbGlkYXRlT3RoZXJFcnJvcnMnKVxuXHRcdFx0Y29uc29sZS5sb2codmFsaWRhdGluZ090aGVyRXJyb3JzKVxuXHRcdFx0Y29uc29sZS5sb2coJ3ZhbGlkYXRpbmdOYW1lcycpXG5cdFx0XHRjb25zb2xlLmxvZyhpbnZhbGlkbmFtZSlcblx0XHRcdGNvbnNvbGUubG9nKCd2YWxpZGF0aW5nRG9iRXJyb3JzJylcblx0XHRcdGNvbnNvbGUubG9nKHZhbGlkYXRpbmdEb2JFcnJvcnMpXG5cdFx0XHRjb25zb2xlLmxvZygnbWVtYmVyX3JlZicpXG5cdFx0XHRjb25zb2xlLmxvZyhtZW1iZXJfcmVmKVxuXHRcdFx0Ly8gdmFsaWRhdGluZyBpcyB1c2VyIGhhZCBjaGFuZ2VkIGFueXRoaW5nXHRcblx0XHRcdGlmKHRoaXMucHJvcHMuZW5kb3JzZWRfbWVtYmVyX2RhdGEubWVtYmVycy5sZW5ndGggPT0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzKS5sZW5ndGgpe1xuXHRcdFx0XHRmb3IodmFyIGkgPTA7aSA8IHRoaXMucHJvcHMuZW5kb3JzZWRfbWVtYmVyX2RhdGEubWVtYmVycy5sZW5ndGg7aSsrKSB7XG5cdFx0XHRcdFx0bGV0IGlkID0gdGhpcy5wcm9wcy5lbmRvcnNlZF9tZW1iZXJfZGF0YS5tZW1iZXJzW2ldLmlkXG5cdFx0XHRcdFx0aWYodGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW2lkXSkge1xuXHRcdFx0XHRcdFx0bGV0IHNlbGVjdGVkUHJvZmlsZSA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1tpZF1cblx0XHRcdFx0XHRcdGxldCBzZWxlY3RlZEFwaVByb2ZpbGUgPSB0aGlzLnByb3BzLmVuZG9yc2VkX21lbWJlcl9kYXRhLm1lbWJlcnNbaV1cblx0XHRcdFx0XHRcdGZvcihsZXQgaiBpbiAgc2VsZWN0ZWRBcGlQcm9maWxlICkge1x0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmKGo9PSdmaXJzdF9uYW1lJykge1xuXHRcdFx0XHRcdFx0XHRcdGlmKHNlbGVjdGVkUHJvZmlsZVsnbmFtZSddICE9c2VsZWN0ZWRBcGlQcm9maWxlWydmaXJzdF9uYW1lJ10pe1xuXHRcdFx0XHRcdFx0XHRcdFx0aXNfZmllbGRzX2VkaXRlZC5wdXNoKGlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYoZWRpdGVkX2ZpZWxkc1tpZF0pIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlZGl0ZWRfZmllbGRzW2lkXSA9IFtdXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRlZGl0ZWRfZmllbGRzW2lkXS5wdXNoKGopXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmKGohPSdlbWFpbCcpIHtcblx0XHRcdFx0XHRcdFx0XHRpZihzZWxlY3RlZFByb2ZpbGVbal0gIT0gc2VsZWN0ZWRBcGlQcm9maWxlW2pdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpc19maWVsZHNfZWRpdGVkLnB1c2goaWQpXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihlZGl0ZWRfZmllbGRzW2lkXSkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVkaXRlZF9maWVsZHNbaWRdID0gW11cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGVkaXRlZF9maWVsZHNbaWRdLnB1c2goailcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMgJiYgdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5sZW5ndGg+MCAmJiBpc19maWVsZHNfZWRpdGVkLmluZGV4T2YoaWQpICE9IC0xKXtcblx0XHRcdFx0XHRcdG1lbWJlcl9wcm9vZiA9IHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMuZmlsdGVyKCh4PT54LmlkID09IGlkKSlcblx0XHRcdFx0XHRcdGlmKG1lbWJlcl9wcm9vZiAmJiBtZW1iZXJfcHJvb2YubGVuZ3RoPjAgJiYgbWVtYmVyX3Byb29mWzBdLmltZ19wYXRoX2lkcy5sZW5ndGggPiAwKXtcblx0XHRcdFx0XHRcdFx0YWxsX2lkX3Byb29mcy5wdXNoKG1lbWJlcl9wcm9vZlswXS5pZClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoYWxsX2lkX3Byb29mcyAmJiBhbGxfaWRfcHJvb2ZzLmxlbmd0aCA+IDApe1xuXHRcdFx0XHRcdG5ld0lkUHJvb2ZzID0gaXNfZmllbGRzX2VkaXRlZC5maWx0ZXIoZnVuY3Rpb24oeCkgeyBcblx0XHRcdFx0ICBcdFx0cmV0dXJuIGFsbF9pZF9wcm9vZnMuaW5kZXhPZih4KSA8IDA7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0bmV3SWRQcm9vZnMgPSBpc19maWVsZHNfZWRpdGVkXG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2cobmV3SWRQcm9vZnMpXG5cdFx0XHRcdGlmKG5ld0lkUHJvb2ZzICYmIG5ld0lkUHJvb2ZzLmxlbmd0aD4wKXtcblx0XHRcdFx0XHRuZXdJZFByb29mcy5tYXAoKG1lbV9pZCwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdG1lbWJlcl9yZWYgPSBgbWVtYmVyXyR7bWVtX2lkfV91cGxvYWRgXG5cdFx0XHRcdFx0fSlcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zb2xlLmxvZyhtZW1iZXJfcmVmKVxuXHRcdHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlRXJyb3JzOiB2YWxpZGF0aW5nRXJyb3JzLHZhbGlkYXRlT3RoZXJFcnJvcnM6IHZhbGlkYXRpbmdPdGhlckVycm9ycyx2YWxpZGF0aW5nTmFtZXM6aW52YWxpZG5hbWUsdmFsaWRhdGVEb2JFcnJvcnM6dmFsaWRhdGluZ0RvYkVycm9ycyxlcnJvck1lc3NhZ2VzOmVycm9yTWVzc2FnZXNPYmosZW5kb3JzZW1lbnRFcnJvcjpuZXdJZFByb29mc30pXG5cdFx0aWYoT2JqZWN0LmtleXMoZWRpdGVkX2ZpZWxkcykubGVuZ3RoID4wIHx8IHRoaXMuc3RhdGUuZW1haWxWZXJpZmllZCl7XG5cdCAgICBcdGlmKGlzX2Rpc2FibGUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVtYmVyX3JlZikpeyAgICBcdFx0XG5cdCAgICBcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVtYmVyX3JlZikuc2Nyb2xsSW50b1ZpZXcoKTtcblx0ICAgIFx0fWVsc2V7XG5cdCAgICBcdFx0dGhpcy5TYXZlVXNlckRhdGEodGhpcy5wcm9wcyxlZGl0ZWRfZmllbGRzKVxuXHQgICAgXHRcdGlmKFNUT1JBR0UuaXNBZ2VudCgpKXtcblx0ICAgIFx0XHRcdGlzQWdlbnQgPSB0cnVlXG5cdCAgICBcdFx0fVxuXHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2luc3VyYW5jZS9pbnN1cmFuY2UtdXNlci1kZXRhaWxzLXJldmlldz9pc19lbmRvcnNlbWVudD10cnVlJmlzQWdlbnQ9JHtpc0FnZW50fWApXG5cdCAgICBcdH1cblx0ICAgIH1lbHNle1xuXHQgICAgXHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHVwZGF0ZSB0aGUgcmVxdWlyZWQgZmllbGRzIHRvIHByb2NlZWRcIiB9KTtcblx0ICAgIH1cbiAgICB9XG5cbiAgICBTYXZlVXNlckRhdGEocHJvcHMsZWRpdGVkX2ZpZWxkcyl7XG4gICAgXHRsZXQgc2VsZiA9IHRoaXNcbiAgICBcdHZhciBpbnN1cmFuY2VVc2VyRGF0YT17fVxuICAgIFx0dmFyIG1lbWJlcnM9e31cbiAgICBcdGluc3VyYW5jZVVzZXJEYXRhLm1lbWJlcnM9IFtdXG4gICAgXHRpbnN1cmFuY2VVc2VyRGF0YS5lZGl0ZWRfZmllbGRzID0gZWRpdGVkX2ZpZWxkc1xuICAgIFx0T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG4gICAgXHRcdG1lbWJlcnM9e31cblx0XHRcdG1lbWJlcnM9ey4uLnNlbGYucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1t2YWx1ZVtrZXldXX1cblx0XHRcdHJldHVybiBcdGluc3VyYW5jZVVzZXJEYXRhLm1lbWJlcnMucHVzaChtZW1iZXJzKVxuXHRcdH0pXG5cdFx0dGhpcy5wcm9wcy5wdXNoVXNlckVuZG9yc2VkRGF0YShpbnN1cmFuY2VVc2VyRGF0YSkgLy8gdG8gc2F2ZSB1c2VyIGVudGVyZWQgZGV0YWlscyBpbiBkdW1teSB0YWJsZVxuICAgIH1cblxuXHRyZW5kZXIoKXtcblx0XHRsZXQgY2hpbGRcblx0XHRsZXQgYWR1bHRcblx0XHRsZXQgdXNlclByb2ZpbGVcblx0XHRsZXQgc3BvdXNlX2RhdGFcblx0XHRsZXQgY2hpbGRfZGF0YSA9W11cblx0XHRsZXQgc2VsZl9kYXRhXG5cdFx0bGV0IGZpbmRDaGlsZFxuXHRcdGlmKHRoaXMucHJvcHMuZW5kb3JzZURhdGEgJiYgdGhpcy5wcm9wcy5lbmRvcnNlRGF0YS5tZW1iZXJzLmxlbmd0aD4wICYmIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZC5sZW5ndGggPjApe1xuXHRcdFx0c2VsZl9kYXRhID0gdGhpcy5wcm9wcy5lbmRvcnNlZF9tZW1iZXJfZGF0YS5tZW1iZXJzLmZpbHRlcih4PT54LnJlbGF0aW9uID09J3NlbGYnKVxuXHRcdFx0aWYodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmFkdWx0X2NvdW50ID09IDIgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLmxlbmd0aD4xKXtcblx0XHRcdFx0c3BvdXNlX2RhdGEgPSB0aGlzLnByb3BzLmVuZG9yc2VkX21lbWJlcl9kYXRhLm1lbWJlcnMuZmlsdGVyKHg9PngucmVsYXRpb24gPT0nc3BvdXNlJylcblx0XHRcdFx0YWR1bHQgPSA8SW5zdXJPdGhlcnMgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRcdFx0XHQvLyBzZWxmX2dlbmRlcj17dXNlclByb2ZpbGUuZ2VuZGVyfSBcblx0XHRcdFx0XHRcdFx0c2VsZl9nZW5kZXI9J20nXG5cdFx0XHRcdFx0XHRcdHBhcmFtX2lkID0geycxJ30gXG5cdFx0XHRcdFx0XHRcdG1lbWJlcl9pZD17c3BvdXNlX2RhdGFbMF0uaWR9IFxuXHRcdFx0XHRcdFx0XHRjaGVja0ZvclZhbGlkYXRpb24gPXt0aGlzLmNoZWNrRm9yVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBcblx0XHRcdFx0XHRcdFx0aWQ9e2BtZW1iZXJfJHswfWB9IFxuXHRcdFx0XHRcdFx0XHR2YWxpZGF0ZUVycm9ycz17dGhpcy5zdGF0ZS52YWxpZGF0ZUVycm9yc1tzcG91c2VfZGF0YVswXS5pZF0gfHwgW119IFxuXHRcdFx0XHRcdFx0XHR2YWxpZGF0ZU90aGVyRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlT3RoZXJFcnJvcnNbc3BvdXNlX2RhdGFbMF0uaWRdIHx8IFtdfSBcblx0XHRcdFx0XHRcdFx0Y3JlYXRlQXBpRXJyb3JzPXt0aGlzLnN0YXRlLkNyZWF0ZUFwaUVycm9ycy5tZW1iZXJzP3RoaXMuc3RhdGUuQ3JlYXRlQXBpRXJyb3JzLm1lbWJlcnNbMV06W119XG5cdFx0XHRcdFx0XHRcdHNob3dfc2VsZWN0ZWRfcHJvZmlsZXM9e3RoaXMuc3RhdGUuc2hvd19zZWxlY3RlZF9wcm9maWxlc30gXG5cdFx0XHRcdFx0XHRcdHZhbGlkYXRlRG9iRXJyb3JzPXtbXX0gXG5cdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZXM9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlc30gXG5cdFx0XHRcdFx0XHRcdHZhbGlkYXRpbmdOYW1lcz17dGhpcy5zdGF0ZS52YWxpZGF0aW5nTmFtZXN8fFtdfVxuXHRcdFx0XHRcdFx0XHRpc19lbmRvcnNlbWVudCA9IHt0cnVlfVxuXHRcdFx0XHRcdFx0XHR1c2VyX2RhdGE9e3RoaXMucHJvcHMuZW5kb3JzZWRfbWVtYmVyX2RhdGEubWVtYmVycy5maWx0ZXIoeD0+eC5yZWxhdGlvbiA9PSAnc3BvdXNlJyl9XG5cdFx0XHRcdFx0XHRcdG1lbWJlcl90eXBlPXsnYWR1bHQnfVxuXHRcdFx0XHRcdFx0XHRlbmRvcnNlbWVudEVycm9yPXt0aGlzLnN0YXRlLmVuZG9yc2VtZW50RXJyb3J9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0fVxuXHRcdFx0dmFyIG4gPSAodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmNoaWxkX2NvdW50KTtcblx0XHRcdGxldCBmaW5kQ2hpbGQgPSB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubWFwKChkYXRhLCBpKSA9Pntcblx0XHRcdFx0XHRjaGlsZF9kYXRhID0gdGhpcy5wcm9wcy5lbmRvcnNlZF9tZW1iZXJfZGF0YS5tZW1iZXJzLmZpbHRlcih4PT54LnJlbGF0aW9uICE9ICdzZWxmJyAmJiB4LnJlbGF0aW9uICE9J3Nwb3VzZScpXG5cdFx0XHRcdH0pXG5cdFx0XHRpZihuICE9PSAwKXtcdFxuXHRcdFx0XHRpZihjaGlsZF9kYXRhICYmIGNoaWxkX2RhdGEubGVuZ3RoPjApe1xuXHRcdFx0XHRjaGlsZCA9IGNoaWxkX2RhdGEubWFwKChkYXRhLCBpKSA9Pntcblx0XHRcdFx0XHRyZXR1cm4gPEluc3VyT3RoZXJzIHsuLi50aGlzLnByb3BzfSBcblx0XHRcdFx0XHRcdFx0XHRrZXk9e2l9IFxuXHRcdFx0XHRcdFx0XHRcdG1lbWJlcl9pZD17Y2hpbGRfZGF0YVtpXS5pZH0gXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tGb3JWYWxpZGF0aW9uID17dGhpcy5jaGVja0ZvclZhbGlkYXRpb24uYmluZCh0aGlzKX0gXG5cdFx0XHRcdFx0XHRcdFx0aXNfY2hpbGRfb25seT17dHJ1ZX0gXG5cdFx0XHRcdFx0XHRcdFx0aWQ9e2BtZW1iZXJfJHtpKzF9YH0gXG5cdFx0XHRcdFx0XHRcdFx0cGFyYW1faWQgPSB7aX0gXG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyX3ZpZXdfaWQ9IHtpKzF9IFxuXHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRlRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3JzW2NoaWxkX2RhdGFbaV0uaWRdIHx8IFtdfSBcblx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZU90aGVyRXJyb3JzPXtbXX0gXG5cdFx0XHRcdFx0XHRcdFx0Y3JlYXRlQXBpRXJyb3JzQ2hpbGQ9e3RoaXMuc3RhdGUuQ3JlYXRlQXBpRXJyb3JzLm1lbWJlcnM/dGhpcy5zdGF0ZS5DcmVhdGVBcGlFcnJvcnMubWVtYmVyczpbXX0gXG5cdFx0XHRcdFx0XHRcdFx0c2hvd19zZWxlY3RlZF9wcm9maWxlcz17dGhpcy5zdGF0ZS5zaG93X3NlbGVjdGVkX3Byb2ZpbGVzfSBcblx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZURvYkVycm9ycz17dGhpcy5zdGF0ZS52YWxpZGF0ZURvYkVycm9yc1tpXSB8fCBbXX0gXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlcz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfSBcblx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0aW5nTmFtZXM9e3RoaXMuc3RhdGUudmFsaWRhdGluZ05hbWVzfHxbXX1cblx0XHRcdFx0XHRcdFx0XHRpc19lbmRvcnNlbWVudCA9IHt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdHVzZXJfZGF0YT17W2NoaWxkX2RhdGFbaV1dfVxuXHRcdFx0XHRcdFx0XHRcdG1lbWJlcl90eXBlPXsnY2hpbGQnfVxuXHRcdFx0XHRcdFx0XHRcdGVuZG9yc2VtZW50RXJyb3I9e3RoaXMuc3RhdGUuZW5kb3JzZW1lbnRFcnJvcn1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cblx0ICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPiBcblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBpbnMtbWFpbi1wYWRkaW5nXCI+XG5cdFx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWJvb2stc2NyZWVuXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHRcdFx0ey8qPEluc3VyQ29tbW9uIHsuLi50aGlzLnByb3BzfSBpc19lZGl0PXt0aGlzLnN0YXRlLmlzX2VkaXR9Lz4qL31cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1jYXJkLWhlYWRcIiBzdHlsZT17eydqdXN0aWZ5Q29udGVudCc6ICdlbmQnLCdhbGlnbkl0ZW1zJzogJ2VuZCd9fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLW5hbWUtaGVhZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHdpZHRoPVwiMTIwXCIgc3JjPXt0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmxvZ299IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXBkZi1kd25sb2FkXCIgc3R5bGU9e3snbWFyZ2luTGVmdCc6JzEycHgnfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdE9QRCBJbnN1cmFuY2UgYnkgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPkFwb2xsbyBNdW5pY2g8L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zdXJhbmNlLW1lbWJlci1jb250YWluZXJcIiBzdHlsZT17e3BhZGRpbmc6ICcxMHB4J319PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicGxjeS1jYW5jZWxcIj4qSW5jb3JyZWN0IG1lbWJlciBkZXRhaWxzIG1heSBsZWFkIHRvIHBvbGljeSBjYW5jZWxsYXRpb248L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibWItMFwiPkluc3VyZWQgTWVtYmVyIERldGFpbHM8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuIGZ3LTUwMCB0ZXh0LXJpZ2h0IGQtYmxvY2tcIiBzdHlsZT17e21hcmdpblRvcDonMHB4JywgZm9udFNpemU6ICcxMXB4J319PipBbGwgZmllbGRzIGFyZSBtYW5kYXRvcnlcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zdXJhbmNlLW1lbWJlci1kZXRhaWxzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnN1clNlbGYgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrRm9yVmFsaWRhdGlvbiA9e3RoaXMuY2hlY2tGb3JWYWxpZGF0aW9uLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgbWVtYmVyXyR7dGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkWzBdWycwJ119YH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX2lkPXtzZWxmX2RhdGFbMF0uaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsaWRhdGVFcnJvcnM9e3RoaXMuc3RhdGUudmFsaWRhdGVFcnJvcnNbc2VsZl9kYXRhWzBdLmlkXSB8fCBbXX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsaWRhdGVPdGhlckVycm9ycz17dGhpcy5zdGF0ZS52YWxpZGF0ZU90aGVyRXJyb3JzW3NlbGZfZGF0YVswXS5pZF0gfHwgW119XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3JlYXRlQXBpRXJyb3JzPXt0aGlzLnN0YXRlLkNyZWF0ZUFwaUVycm9ycy5tZW1iZXJzP3RoaXMuc3RhdGUuQ3JlYXRlQXBpRXJyb3JzLm1lbWJlcnNbMF06W119IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZXM9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlc30gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNfZW5kb3JzZW1lbnQgPSB7dHJ1ZX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlcl9kYXRhPXt0aGlzLnByb3BzLmVuZG9yc2VkX21lbWJlcl9kYXRhLm1lbWJlcnMuZmlsdGVyKHg9PngucmVsYXRpb24gPT0gJ3NlbGYnKX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX3R5cGU9eydhZHVsdCd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kb3JzZW1lbnRFcnJvcj17dGhpcy5zdGF0ZS5lbmRvcnNlbWVudEVycm9yfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrSXNFbWFpbFZlcmZpZWQgPSB7dGhpcy5jaGVja0lzRW1haWxWZXJmaWVkLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHthZHVsdH1cblx0XHRcdFx0XHRcdFx0e2NoaWxkfVxuXHRcdFx0XHRcdFx0PC9zZWN0aW9uPlx0XHRcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ2LWJ0biBwLTMgdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgYnRuLWxnIHRleHQtbGcgc3RpY2t5LWJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvY2VlZFBsYW4uYmluZCh0aGlzKX0+VXBkYXRlXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PENoYXRQYW5lbCAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiA8ZGl2PjwvZGl2PlxuXHRcdH1cblx0fVxuXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VFbmRvcmVzbWVudElucHV0VmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXInXG5cbmltcG9ydCB7IHVzZXJEYXRhLHNlbGVjdEluc3VyYW5jZVByb2ZpbGUsIHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzLCBwdXNoVXNlckRhdGEsIHJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzLCBnZXRJbnN1cmFuY2UsIGdldEVuZG9yc2VkTWVtYmVyTGlzdCwgcHVzaFVzZXJFbmRvcnNlZERhdGEsIHNlbGVjdEluc3VyYW5jZVBsYW4sIHVwbG9hZFByb29mLCBzdG9yZU1lbWJlclByb29mcywgcmVtb3ZlTWVtYmVyUHJvb2YsIHN1Ym1pdEVtYWlsT1RQLCBzZW5kT3RwT25FbWFpbH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBJbnN1cmFuY2VDb21wb25lbnRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZUVuZG9yc2VtZW50RGV0YWlsc1ZpZXcuanMnXG5cbmNsYXNzIEluc3VyYW5jZUVuZG9yc2VtZW50RGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGluc3VyYW5jZV9kYXRhOm51bGwsXG4gICAgICAgICAgICBtZW1iZXJzX2RhdGE6bnVsbCAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0RW5kb3JzZWRNZW1iZXJMaXN0KChtZW1fcmVzcCk9PnsgLy8gdG8gZ2V0IHRoZSBsaXN0IG9mIG1lbWJlcnMgd2hpY2ggYXJlIGFsbG93ZWQgZm9yIGVuZG9yc2VtZW50XG4gICAgICAgICAgICBpZihtZW1fcmVzcCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRJbnN1cmFuY2UodHJ1ZSwocmVzcCk9PnsgLy8gdG8gZ2V0IGluc3VyYW5jZSBwbGFuc1xuICAgICAgICAgICAgICAgICAgICBpZihyZXNwICYmIHJlc3AuaW5zdXJhbmNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGFuID0gcmVzcC5pbnN1cmFuY2VbMF0ucGxhbnMuZmlsdGVyKHg9PnguaWQgPT0gbWVtX3Jlc3AuaW5zdXJhbmNlX3BsYW4pWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdEluc3VyYW5jZVBsYW4oJ3BsYW4nLCBwbGFuKSAvLyB0byBzdG9yZSBzZWxlY3RlZCBwbGFuIGJ5IHVzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbWJlcnNfZGF0YTptZW1fcmVzcCAsIGluc3VyYW5jZV9kYXRhOnJlc3B9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgXG4gICAgfVxuXHRyZW5kZXIoKXtcblxuICAgICAgICBpZih0aGlzLnN0YXRlLm1lbWJlcnNfZGF0YSAmJiB0aGlzLnN0YXRlLmluc3VyYW5jZV9kYXRhKXtcbiAgICBcdFx0cmV0dXJuKFxuICAgIFx0XHRcdDxJbnN1cmFuY2VDb21wb25lbnRWaWV3IHsuLi50aGlzLnByb3BzfSBlbmRvcnNlRGF0YT17dGhpcy5zdGF0ZS5tZW1iZXJzX2RhdGF9Lz5cbiAgICBcdFx0KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogODAgfX0gPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxMb2FkZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBVU0VSID0gc3RhdGUuVVNFUlxuICAgIGxldCB7IGluc3VybmFjZURhdGEsIExPQURfSU5TVVJBTkNFLCBzZWxlY3RlZF9wbGFuLHNlbGZfZGF0YV92YWx1ZXMsc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnMsc2VsZWN0ZWRQcm9maWxlLCBjdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLGNyZWF0ZV9wYXltZW50X3Jlc3AsIGVuZG9yc2VkX21lbWJlcl9kYXRhLCBtZW1iZXJzX3Byb29mc30gPSBzdGF0ZS5JTlNVUkFOQ0VcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnN1cm5hY2VEYXRhLExPQURfSU5TVVJBTkNFLHNlbGVjdGVkX3BsYW4sVVNFUixzZWxmX2RhdGFfdmFsdWVzLHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzLHNlbGVjdGVkUHJvZmlsZSwgY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZCwgY3JlYXRlX3BheW1lbnRfcmVzcCwgZW5kb3JzZWRfbWVtYmVyX2RhdGEsIG1lbWJlcnNfcHJvb2ZzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJbnN1cmFuY2U6IChpc19lbmRvcnNlbWVudCxjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0SW5zdXJhbmNlKGlzX2VuZG9yc2VtZW50LGNhbGxiYWNrKSksXG4gICAgICAgIHVzZXJEYXRhIDooc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSA9PiBkaXNwYXRjaCh1c2VyRGF0YShzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpKSxcbiAgICAgICAgc2VsZWN0SW5zdXJhbmNlUHJvZmlsZSA6KG5ld1Byb2ZpbGVpZCxtZW1iZXJfaWQsbmV3UHJvZmlsZSxwYXJhbV9pZCkgPT4gZGlzcGF0Y2goc2VsZWN0SW5zdXJhbmNlUHJvZmlsZShuZXdQcm9maWxlaWQsbWVtYmVyX2lkLG5ld1Byb2ZpbGUscGFyYW1faWQpKSxcbiAgICAgICAgc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnM6IChtZW1iZXJzSWQpID0+IGRpc3BhdGNoKHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzKG1lbWJlcnNJZCkpLFxuICAgICAgICBwdXNoVXNlckRhdGEgOihjcml0ZXJpYSxjYWxsYmFjaykgPT4gZGlzcGF0Y2gocHVzaFVzZXJEYXRhKGNyaXRlcmlhLGNhbGxiYWNrKSksXG4gICAgICAgIHJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzOiAoKSA9PiBkaXNwYXRjaChyZXNldFNlbGVjdGVkSW5zdXJhbmNlTWVtYmVycygpKSxcbiAgICAgICAgZ2V0RW5kb3JzZWRNZW1iZXJMaXN0OihjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0RW5kb3JzZWRNZW1iZXJMaXN0KGNhbGxiYWNrKSksXG4gICAgICAgIHB1c2hVc2VyRW5kb3JzZWREYXRhIDooY3JpdGVyaWEsY2FsbGJhY2spID0+IGRpc3BhdGNoKHB1c2hVc2VyRW5kb3JzZWREYXRhKGNyaXRlcmlhLGNhbGxiYWNrKSksXG4gICAgICAgIHNlbGVjdEluc3VyYW5jZVBsYW46IChwbGFuLGNyaXRlcmlhKSA9PiBkaXNwYXRjaChzZWxlY3RJbnN1cmFuY2VQbGFuKHBsYW4sY3JpdGVyaWEpKSwgICAgICAgIFxuICAgICAgICB1cGxvYWRQcm9vZjoocHJvZmlsZURhdGEsIHByb2ZpbGVJZCxpbWdUeXBlLCBjYikgPT5kaXNwYXRjaCh1cGxvYWRQcm9vZihwcm9maWxlRGF0YSwgcHJvZmlsZUlkLGltZ1R5cGUsIGNiKSksXG4gICAgICAgIHN0b3JlTWVtYmVyUHJvb2ZzOihpbWdVcmwsY2IpPT5kaXNwYXRjaChzdG9yZU1lbWJlclByb29mcyhpbWdVcmwsY2IpKSxcbiAgICAgICAgcmVtb3ZlTWVtYmVyUHJvb2Y6KGNyaXRlcmlhKT0+ZGlzcGF0Y2gocmVtb3ZlTWVtYmVyUHJvb2YoY3JpdGVyaWEpKSxcbiAgICAgICAgc2VuZE90cE9uRW1haWw6KGNyaXRlcmlhLGNhbGxiYWNrKT0+ZGlzcGF0Y2goc2VuZE90cE9uRW1haWwoY3JpdGVyaWEsY2FsbGJhY2spKSxcbiAgICAgICAgc3VibWl0RW1haWxPVFA6IChkYXRhLCBjYikgPT4gZGlzcGF0Y2goc3VibWl0RW1haWxPVFAoZGF0YSwgY2IpKSxcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyAsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5zdXJhbmNlRW5kb3JzZW1lbnREZXRhaWxzKSJdLCJzb3VyY2VSb290IjoiIn0=