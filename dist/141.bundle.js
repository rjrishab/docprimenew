(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[141],{

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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceEndoresmentInputView = function (_React$Component) {
	_inherits(InsuranceEndoresmentInputView, _React$Component);

	function InsuranceEndoresmentInputView(props) {
		_classCallCheck(this, InsuranceEndoresmentInputView);

		var _this = _possibleConstructorReturn(this, (InsuranceEndoresmentInputView.__proto__ || Object.getPrototypeOf(InsuranceEndoresmentInputView)).call(this, props));

		_this.state = {
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
		return _this;
	}

	_createClass(InsuranceEndoresmentInputView, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var self = this;
			if (window) {
				window.scrollTo(0, 0);
			}
			var card = void 0;
			var membersId = [];
			if (this.props.endorseData && this.props.endorseData.members.length > 0) {
				card = this.props.endorseData.members.map(function (member, i) {
					membersId.push(_defineProperty({}, i, member.id));
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
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
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
	}, {
		key: 'checkForValidation',
		value: function checkForValidation(profile_data, member_id) {
			var profiles = this.state.profiles_selected;
			if (profiles.length) {
				profiles = this.state.profiles_selected.filter(function (x) {
					return x.id != member_id;
				});
			}
			profiles.push(profile_data);

			var is_enable = profiles.filter(function (x) {
				return !x.isformCompleted;
			});
			is_enable = is_enable.length ? false : true;
			this.setState({ enable_proceed: is_enable, profiles_selected: profiles });
		}
	}, {
		key: 'checkIsEmailVerfied',
		value: function checkIsEmailVerfied() {
			this.setState({ emailVerified: true });
		}
	}, {
		key: 'proceedPlan',
		value: function proceedPlan() {
			var _this2 = this;

			var is_disable = false;
			var member_ref = '';
			var empty_feilds = [];
			var currentSelectedProfiles = [];
			var fields_name = [];
			var fields_name_obj = {};
			var errorMessagesObj = {};
			var self_profile = void 0;
			var self_age = void 0;
			var adult2age = void 0;
			this.props.currentSelectedInsuredMembersId.map(function (val, key) {
				currentSelectedProfiles.push(val[key]);
			});
			var validatingErrors = {};
			var validatingDobErrors = {};
			var validatingName = {};
			var validatingOtherErrors = {};
			var invalidname = [];
			var fullname = void 0;
			var fullnameObj = {};
			var isDummyUser = void 0;
			var all_id_proofs = [];
			var is_fields_edited = [];
			var edited_fields = {};
			var member_proof = [];
			var newIdProofs = void 0;
			var isAgent = false;
			if (Object.keys(this.props.self_data_values).length > 0) {
				// isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser
				// if(!isDummyUser){
				// 	self_profile  = Object.assign({}, this.props.self_data_values[this.props.USER.defaultProfile])	
				// }else{
				// 	self_profile  = Object.assign({}, this.props.self_data_values[0])
				// }
				// self_profile  = Object.assign({}, this.props.self_data_values[0])
				this.props.currentSelectedInsuredMembersId.map(function (val, key) {
					if (_this2.props.self_data_values[val[key]].relation == 'self') {
						self_profile = Object.assign({}, _this2.props.self_data_values[val[key]]);
					}
				});
			}
			this.props.currentSelectedInsuredMembersId.map(function (val, key) {
				if (Object.keys(_this2.props.self_data_values).length > 0) {
					var fields = [];
					var dobError = [];
					var param = _this2.props.self_data_values[val[key]];
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
							var validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
						var today = new Date();
						var birthDate = new Date(param.dob);
						var age = today.getFullYear() - birthDate.getFullYear();
						var m = today.getMonth() - birthDate.getMonth();
						if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
							age--;
						}
						if (param.relation == 'self') {
							self_age = age;
						} else {
							adult2age = age;
						}
						if (_this2.props.selected_plan.threshold.length > 0) {
							if (parseInt(age) < parseInt(_this2.props.selected_plan.threshold[0].min_age) || parseInt(age) > parseInt(_this2.props.selected_plan.threshold[0].max_age)) {
								fields.push('dob');
								is_disable = true;
							}
						}
					} else if (param.dob != null && param.member_type == 'child') {
						var childAge = void 0;
						var _today = new Date();
						var _birthDate = new Date(param.dob);
						childAge = _today.getFullYear() - _birthDate.getFullYear();
						var _m = _today.getMonth() - _birthDate.getMonth();
						if (_m < 0 || _m === 0 && _today.getDate() < _birthDate.getDate()) {
							childAge--;
						}
						var oneDay = 24 * 60 * 60 * 1000;
						var firstDate = new Date();
						var secondDate = new Date(param.dob);
						var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
						if (_this2.props.selected_plan.threshold.length > 0) {
							var minAgeOfAdults = Math.min(self_age, adult2age);
							var adultChildAgeDiff = minAgeOfAdults - childAge;
							var child_age = _this2.props.selected_plan.threshold[0].child_min_age;
							var child_max_age = _this2.props.selected_plan.threshold[0].child_max_age;
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

					if (_this2.props.selected_plan.threshold.length > 0) {
						errorMessagesObj.child_max_age = _this2.props.selected_plan.threshold[0].child_max_age;
						errorMessagesObj.child_min_age = _this2.props.selected_plan.threshold[0].child_min_age;
						errorMessagesObj.max_age = _this2.props.selected_plan.threshold[0].max_age;
						errorMessagesObj.min_age = _this2.props.selected_plan.threshold[0].min_age;
						errorMessagesObj.common_message = '*This is a mandatory field';
						errorMessagesObj.max_character = 'Maximum character limit: 50';
						errorMessagesObj.valid_email = '*Please enter a valid email';
						errorMessagesObj.adult_age = '*Age should be more than ' + _this2.props.selected_plan.threshold[0].min_age + ' years and less than ' + _this2.props.selected_plan.threshold[0].max_age + ' years';
						errorMessagesObj.child_age = '*Age should be more than ' + _this2.props.selected_plan.threshold[0].child_min_age + ' days and less than ' + _this2.props.selected_plan.threshold[0].child_max_age + ' years';
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
						var _fullnameObj = {};
						fullname = param.name + param.middle_name + param.last_name;
						_fullnameObj.id = param.id;
						_fullnameObj.fName = fullname.toLowerCase();
						fields_name.push(_fullnameObj);
					} else if (param.name != "" && param.middle_name == "" && param.last_name != "" && !param.no_lname) {
						var _fullnameObj2 = {};
						fullname = param.name + param.middle_name + param.last_name;
						_fullnameObj2.id = param.id;
						_fullnameObj2.fName = fullname.toLowerCase();
						fields_name.push(_fullnameObj2);
					} else if (param.name != "" && param.middle_name == "" && param.last_name == "" && !param.no_lname) {
						var _fullnameObj3 = {};
						fullname = param.name;
						_fullnameObj3.id = param.id;
						_fullnameObj3.fName = fullname.toLowerCase();
						fields_name.push(_fullnameObj3);
					} else if (param.name != "" && param.no_lname) {
						var _fullnameObj4 = {};
						fullname = param.name;
						_fullnameObj4.id = param.id;
						_fullnameObj4.fName = fullname.toLowerCase();
						fields_name.push(_fullnameObj4);
					}

					validatingErrors[param.id] = fields;
					validatingDobErrors[param.id] = dobError;
					if (param.member_type == 'adult') {
						validatingOtherErrors[param.id] = empty_feilds;
					}
				}
			});
			validatingName = fields_name;
			var newArray = [];
			var ArrayFlag = true;
			Object.entries(validatingName).map(function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2),
				    key = _ref2[0],
				    value = _ref2[1];

				if (ArrayFlag) {
					newArray = validatingName.filter(function (name) {
						return name.fName == value.fName;
					});
				}
				if (newArray.length > 1) {
					ArrayFlag = false;
				}
			});
			if (newArray.length > 1) {
				member_ref = 'member_' + newArray[1].id;
				var id = 'id=' + newArray[1].id;
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
					member_ref = 'member_' + key;
				}
			});

			Object.keys(validatingOtherErrors).forEach(function (key) {
				if (validatingOtherErrors[key].length > 0) {
					is_disable = true;
					member_ref = 'member_' + key;
				}
			});

			Object.keys(validatingDobErrors).forEach(function (key) {
				if (validatingDobErrors[key].length > 0) {
					is_disable = true;
					member_ref = 'member_' + key;
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
				var _loop = function _loop() {
					var id = _this2.props.endorsed_member_data.members[i].id;
					if (_this2.props.self_data_values[id]) {
						var selectedProfile = _this2.props.self_data_values[id];
						var selectedApiProfile = _this2.props.endorsed_member_data.members[i];
						for (var j in selectedApiProfile) {
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
					if (_this2.props.members_proofs && _this2.props.members_proofs.length > 0 && is_fields_edited.indexOf(id) != -1) {
						member_proof = _this2.props.members_proofs.filter(function (x) {
							return x.id == id;
						});
						if (member_proof && member_proof.length > 0 && member_proof[0].img_path_ids.length > 0) {
							all_id_proofs.push(member_proof[0].id);
						}
					}
				};

				for (var i = 0; i < this.props.endorsed_member_data.members.length; i++) {
					_loop();
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
					newIdProofs.map(function (mem_id, i) {
						is_disable = true;
						member_ref = 'member_' + mem_id + '_upload';
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
					this.props.history.push('/insurance/insurance-user-details-review?is_endorsement=true&isAgent=' + isAgent);
				}
			} else {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please update the required fields to proceed" });
			}
		}
	}, {
		key: 'SaveUserData',
		value: function SaveUserData(props, edited_fields) {
			var self = this;
			var insuranceUserData = {};
			var members = {};
			insuranceUserData.members = [];
			insuranceUserData.edited_fields = edited_fields;
			Object.entries(this.props.currentSelectedInsuredMembersId).map(function (_ref3) {
				var _ref4 = _slicedToArray(_ref3, 2),
				    key = _ref4[0],
				    value = _ref4[1];

				members = {};
				members = _extends({}, self.props.self_data_values[value[key]]);
				return insuranceUserData.members.push(members);
			});
			this.props.pushUserEndorsedData(insuranceUserData); // to save user entered details in dummy table
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var child = void 0;
			var adult = void 0;
			var userProfile = void 0;
			var spouse_data = void 0;
			var child_data = [];
			var self_data = void 0;
			var findChild = void 0;
			if (this.props.endorseData && this.props.endorseData.members.length > 0 && this.props.currentSelectedInsuredMembersId.length > 0) {
				self_data = this.props.endorsed_member_data.members.filter(function (x) {
					return x.relation == 'self';
				});
				if (this.props.selected_plan.adult_count == 2 && this.props.currentSelectedInsuredMembersId.length > 1) {
					spouse_data = this.props.endorsed_member_data.members.filter(function (x) {
						return x.relation == 'spouse';
					});
					adult = _react2.default.createElement(_insuranceFamily2.default, _extends({}, this.props, {
						// self_gender={userProfile.gender} 
						self_gender: 'm',
						param_id: '1',
						member_id: spouse_data[0].id,
						checkForValidation: this.checkForValidation.bind(this),
						id: 'member_' + 0,
						validateErrors: this.state.validateErrors[spouse_data[0].id] || [],
						validateOtherErrors: this.state.validateOtherErrors[spouse_data[0].id] || [],
						createApiErrors: this.state.CreateApiErrors.members ? this.state.CreateApiErrors.members[1] : [],
						show_selected_profiles: this.state.show_selected_profiles,
						validateDobErrors: [],
						errorMessages: this.state.errorMessages,
						validatingNames: this.state.validatingNames || [],
						is_endorsement: true,
						user_data: this.props.endorsed_member_data.members.filter(function (x) {
							return x.relation == 'spouse';
						}),
						member_type: 'adult',
						endorsementError: this.state.endorsementError
					}));
				}
				var n = this.props.selected_plan.child_count;
				var _findChild = this.props.currentSelectedInsuredMembersId.map(function (data, i) {
					child_data = _this3.props.endorsed_member_data.members.filter(function (x) {
						return x.relation != 'self' && x.relation != 'spouse';
					});
				});
				if (n !== 0) {
					if (child_data && child_data.length > 0) {
						child = child_data.map(function (data, i) {
							return _react2.default.createElement(_insuranceFamily2.default, _extends({}, _this3.props, {
								key: i,
								member_id: child_data[i].id,
								checkForValidation: _this3.checkForValidation.bind(_this3),
								is_child_only: true,
								id: 'member_' + (i + 1),
								param_id: i,
								member_view_id: i + 1,
								validateErrors: _this3.state.validateErrors[child_data[i].id] || [],
								validateOtherErrors: [],
								createApiErrorsChild: _this3.state.CreateApiErrors.members ? _this3.state.CreateApiErrors.members : [],
								show_selected_profiles: _this3.state.show_selected_profiles,
								validateDobErrors: _this3.state.validateDobErrors[i] || [],
								errorMessages: _this3.state.errorMessages,
								validatingNames: _this3.state.validatingNames || [],
								is_endorsement: true,
								user_data: [child_data[i]],
								member_type: 'child',
								endorsementError: _this3.state.endorsementError
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
													id: 'member_' + this.props.currentSelectedInsuredMembersId[0]['0'],
													member_id: self_data[0].id,
													validateErrors: this.state.validateErrors[self_data[0].id] || [],
													validateOtherErrors: this.state.validateOtherErrors[self_data[0].id] || [],
													createApiErrors: this.state.CreateApiErrors.members ? this.state.CreateApiErrors.members[0] : [],
													errorMessages: this.state.errorMessages,
													is_endorsement: true,
													user_data: this.props.endorsed_member_data.members.filter(function (x) {
														return x.relation == 'self';
													}),
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
	}]);

	return InsuranceEndoresmentInputView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _insuranceEndorsementDetailsView = __webpack_require__(/*! ../../components/insurance/insuranceEndorsementDetailsView.js */ "./dev/js/components/insurance/insuranceEndorsementDetailsView.js");

var _insuranceEndorsementDetailsView2 = _interopRequireDefault(_insuranceEndorsementDetailsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceEndorsementDetails = function (_React$Component) {
    _inherits(InsuranceEndorsementDetails, _React$Component);

    function InsuranceEndorsementDetails(props) {
        _classCallCheck(this, InsuranceEndorsementDetails);

        var _this = _possibleConstructorReturn(this, (InsuranceEndorsementDetails.__proto__ || Object.getPrototypeOf(InsuranceEndorsementDetails)).call(this, props));

        _this.state = {
            insurance_data: null,
            members_data: null
        };
        return _this;
    }

    _createClass(InsuranceEndorsementDetails, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var self = this;
            this.props.getEndorsedMemberList(function (mem_resp) {
                // to get the list of members which are allowed for endorsement
                if (mem_resp) {
                    _this2.props.getInsurance(true, function (resp) {
                        // to get insurance plans
                        if (resp && resp.insurance) {
                            var plan = resp.insurance[0].plans.filter(function (x) {
                                return x.id == mem_resp.insurance_plan;
                            })[0];
                            _this2.props.selectInsurancePlan('plan', plan); // to store selected plan by user
                            _this2.setState({ members_data: mem_resp, insurance_data: resp });
                        }
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

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
    }]);

    return InsuranceEndorsementDetails;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$INSURANCE = state.INSURANCE,
        insurnaceData = _state$INSURANCE.insurnaceData,
        LOAD_INSURANCE = _state$INSURANCE.LOAD_INSURANCE,
        selected_plan = _state$INSURANCE.selected_plan,
        self_data_values = _state$INSURANCE.self_data_values,
        saveCurrentSelectedMembers = _state$INSURANCE.saveCurrentSelectedMembers,
        selectedProfile = _state$INSURANCE.selectedProfile,
        currentSelectedInsuredMembersId = _state$INSURANCE.currentSelectedInsuredMembersId,
        create_payment_resp = _state$INSURANCE.create_payment_resp,
        endorsed_member_data = _state$INSURANCE.endorsed_member_data,
        members_proofs = _state$INSURANCE.members_proofs;

    return {
        insurnaceData: insurnaceData, LOAD_INSURANCE: LOAD_INSURANCE, selected_plan: selected_plan, USER: USER, self_data_values: self_data_values, saveCurrentSelectedMembers: saveCurrentSelectedMembers, selectedProfile: selectedProfile, currentSelectedInsuredMembersId: currentSelectedInsuredMembersId, create_payment_resp: create_payment_resp, endorsed_member_data: endorsed_member_data, members_proofs: members_proofs
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getInsurance: function getInsurance(is_endorsement, callback) {
            return dispatch((0, _index.getInsurance)(is_endorsement, callback));
        },
        userData: function userData(self_data, criteria, forceadd) {
            return dispatch((0, _index.userData)(self_data, criteria, forceadd));
        },
        selectInsuranceProfile: function selectInsuranceProfile(newProfileid, member_id, newProfile, param_id) {
            return dispatch((0, _index.selectInsuranceProfile)(newProfileid, member_id, newProfile, param_id));
        },
        saveCurrentSelectedMembers: function saveCurrentSelectedMembers(membersId) {
            return dispatch((0, _index.saveCurrentSelectedMembers)(membersId));
        },
        pushUserData: function pushUserData(criteria, callback) {
            return dispatch((0, _index.pushUserData)(criteria, callback));
        },
        resetSelectedInsuranceMembers: function resetSelectedInsuranceMembers() {
            return dispatch((0, _index.resetSelectedInsuranceMembers)());
        },
        getEndorsedMemberList: function getEndorsedMemberList(callback) {
            return dispatch((0, _index.getEndorsedMemberList)(callback));
        },
        pushUserEndorsedData: function pushUserEndorsedData(criteria, callback) {
            return dispatch((0, _index.pushUserEndorsedData)(criteria, callback));
        },
        selectInsurancePlan: function selectInsurancePlan(plan, criteria) {
            return dispatch((0, _index.selectInsurancePlan)(plan, criteria));
        },
        uploadProof: function uploadProof(profileData, profileId, imgType, cb) {
            return dispatch((0, _index.uploadProof)(profileData, profileId, imgType, cb));
        },
        storeMemberProofs: function storeMemberProofs(imgUrl, cb) {
            return dispatch((0, _index.storeMemberProofs)(imgUrl, cb));
        },
        removeMemberProof: function removeMemberProof(criteria) {
            return dispatch((0, _index.removeMemberProof)(criteria));
        },
        sendOtpOnEmail: function sendOtpOnEmail(criteria, callback) {
            return dispatch((0, _index.sendOtpOnEmail)(criteria, callback));
        },
        submitEmailOTP: function submitEmailOTP(data, cb) {
            return dispatch((0, _index.submitEmailOTP)(data, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceEndorsementDetails);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlRW5kb3JzZW1lbnREZXRhaWxzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pbnN1cmFuY2UvSW5zdXJhbmNlRW5kb3JzZW1lbnREZXRhaWxzLmpzIl0sIm5hbWVzIjpbIkluc3VyYW5jZUVuZG9yZXNtZW50SW5wdXRWaWV3IiwicHJvcHMiLCJzdGF0ZSIsIm5vX2xuYW1lIiwiaXNfZWRpdCIsImdzdCIsImVuYWJsZV9wcm9jZWVkIiwicHJvZmlsZXNfc2VsZWN0ZWQiLCJzYXZlTWVtYmVycyIsImlzX2Rpc2FibGUiLCJ2YWxpZGF0ZUVycm9ycyIsInZhbGlkYXRlT3RoZXJFcnJvcnMiLCJ2YWxpZGF0aW5nTmFtZXMiLCJDcmVhdGVBcGlFcnJvcnMiLCJzaG93X3NlbGVjdGVkX3Byb2ZpbGVzIiwidmFsaWRhdGVEb2JFcnJvcnMiLCJlcnJvck1lc3NhZ2VzIiwiZW5kb3JzZW1lbnRFcnJvciIsImVtYWlsVmVyaWZpZWQiLCJzZWxmIiwid2luZG93Iiwic2Nyb2xsVG8iLCJjYXJkIiwibWVtYmVyc0lkIiwiZW5kb3JzZURhdGEiLCJtZW1iZXJzIiwibGVuZ3RoIiwibWFwIiwibWVtYmVyIiwiaSIsInB1c2giLCJpZCIsInNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzIiwic2V0U3RhdGUiLCJzZWxmX2RhdGFfdmFsdWVzIiwic2VsZWN0ZWRfcGxhbl9wcmljZSIsInNlbGVjdGVkX3BsYW4iLCJhbW91bnQiLCJjcmVhdGVfcGF5bWVudF9yZXNwIiwicHJvZmlsZV9kYXRhIiwibWVtYmVyX2lkIiwicHJvZmlsZXMiLCJmaWx0ZXIiLCJ4IiwiaXNfZW5hYmxlIiwiaXNmb3JtQ29tcGxldGVkIiwibWVtYmVyX3JlZiIsImVtcHR5X2ZlaWxkcyIsImN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzIiwiZmllbGRzX25hbWUiLCJmaWVsZHNfbmFtZV9vYmoiLCJlcnJvck1lc3NhZ2VzT2JqIiwic2VsZl9wcm9maWxlIiwic2VsZl9hZ2UiLCJhZHVsdDJhZ2UiLCJjdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkIiwidmFsIiwia2V5IiwidmFsaWRhdGluZ0Vycm9ycyIsInZhbGlkYXRpbmdEb2JFcnJvcnMiLCJ2YWxpZGF0aW5nTmFtZSIsInZhbGlkYXRpbmdPdGhlckVycm9ycyIsImludmFsaWRuYW1lIiwiZnVsbG5hbWUiLCJmdWxsbmFtZU9iaiIsImlzRHVtbXlVc2VyIiwiYWxsX2lkX3Byb29mcyIsImlzX2ZpZWxkc19lZGl0ZWQiLCJlZGl0ZWRfZmllbGRzIiwibWVtYmVyX3Byb29mIiwibmV3SWRQcm9vZnMiLCJpc0FnZW50IiwiT2JqZWN0Iiwia2V5cyIsInJlbGF0aW9uIiwiYXNzaWduIiwiZmllbGRzIiwiZG9iRXJyb3IiLCJwYXJhbSIsInRpdGxlIiwibmFtZSIsImdlbmRlciIsImRvYiIsImxhc3RfbmFtZSIsInBpbmNvZGUiLCJhZGRyZXNzIiwic3RhdGVfY29kZSIsInRvd24iLCJkaXN0cmljdCIsImVtYWlsIiwidmFsaWRFbWFpbCIsInRlc3QiLCJtZW1iZXJfdHlwZSIsIm9ubHlfYWR1bHQiLCJ0b2RheSIsIkRhdGUiLCJiaXJ0aERhdGUiLCJhZ2UiLCJnZXRGdWxsWWVhciIsIm0iLCJnZXRNb250aCIsImdldERhdGUiLCJ0aHJlc2hvbGQiLCJwYXJzZUludCIsIm1pbl9hZ2UiLCJtYXhfYWdlIiwiY2hpbGRBZ2UiLCJvbmVEYXkiLCJmaXJzdERhdGUiLCJzZWNvbmREYXRlIiwiZGlmZkRheXMiLCJNYXRoIiwicm91bmQiLCJhYnMiLCJnZXRUaW1lIiwibWluQWdlT2ZBZHVsdHMiLCJtaW4iLCJhZHVsdENoaWxkQWdlRGlmZiIsImNoaWxkX2FnZSIsImNoaWxkX21pbl9hZ2UiLCJjaGlsZF9tYXhfYWdlIiwiY29tbW9uX21lc3NhZ2UiLCJtYXhfY2hhcmFjdGVyIiwidmFsaWRfZW1haWwiLCJhZHVsdF9hZ2UiLCJzYW1lR2VuZGVyVGl0bGUiLCJzaG91bGRHZW5kZXJUaXRsZSIsImNoaWxkQWdlRGlmZiIsIm1pZGRsZV9uYW1lIiwiZk5hbWUiLCJ0b0xvd2VyQ2FzZSIsIm5ld0FycmF5IiwiQXJyYXlGbGFnIiwiZW50cmllcyIsInZhbHVlIiwic2FtZU5hbWUiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyIsImVuZG9yc2VkX21lbWJlcl9kYXRhIiwic2VsZWN0ZWRQcm9maWxlIiwic2VsZWN0ZWRBcGlQcm9maWxlIiwiaiIsIm1lbWJlcnNfcHJvb2ZzIiwiaW5kZXhPZiIsImltZ19wYXRoX2lkcyIsIm1lbV9pZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIlNhdmVVc2VyRGF0YSIsIlNUT1JBR0UiLCJoaXN0b3J5IiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImluc3VyYW5jZVVzZXJEYXRhIiwicHVzaFVzZXJFbmRvcnNlZERhdGEiLCJjaGlsZCIsImFkdWx0IiwidXNlclByb2ZpbGUiLCJzcG91c2VfZGF0YSIsImNoaWxkX2RhdGEiLCJzZWxmX2RhdGEiLCJmaW5kQ2hpbGQiLCJhZHVsdF9jb3VudCIsImNoZWNrRm9yVmFsaWRhdGlvbiIsImJpbmQiLCJuIiwiY2hpbGRfY291bnQiLCJkYXRhIiwiaW5zdXJuYWNlRGF0YSIsImxvZ28iLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJjaGVja0lzRW1haWxWZXJmaWVkIiwicHJvY2VlZFBsYW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIkluc3VyYW5jZUVuZG9yc2VtZW50RGV0YWlscyIsImluc3VyYW5jZV9kYXRhIiwibWVtYmVyc19kYXRhIiwiZ2V0RW5kb3JzZWRNZW1iZXJMaXN0IiwibWVtX3Jlc3AiLCJnZXRJbnN1cmFuY2UiLCJyZXNwIiwiaW5zdXJhbmNlIiwicGxhbiIsInBsYW5zIiwiaW5zdXJhbmNlX3BsYW4iLCJzZWxlY3RJbnN1cmFuY2VQbGFuIiwicGFkZGluZ0JvdHRvbSIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJJTlNVUkFOQ0UiLCJMT0FEX0lOU1VSQU5DRSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiaXNfZW5kb3JzZW1lbnQiLCJjYWxsYmFjayIsInVzZXJEYXRhIiwiY3JpdGVyaWEiLCJmb3JjZWFkZCIsInNlbGVjdEluc3VyYW5jZVByb2ZpbGUiLCJuZXdQcm9maWxlaWQiLCJuZXdQcm9maWxlIiwicGFyYW1faWQiLCJwdXNoVXNlckRhdGEiLCJyZXNldFNlbGVjdGVkSW5zdXJhbmNlTWVtYmVycyIsInVwbG9hZFByb29mIiwicHJvZmlsZURhdGEiLCJwcm9maWxlSWQiLCJpbWdUeXBlIiwiY2IiLCJzdG9yZU1lbWJlclByb29mcyIsImltZ1VybCIsInJlbW92ZU1lbWJlclByb29mIiwic2VuZE90cE9uRW1haWwiLCJzdWJtaXRFbWFpbE9UUCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLDZCOzs7QUFDTCx3Q0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRKQUNOQSxLQURNOztBQUVaLFFBQUtDLEtBQUwsR0FBYTtBQUNUO0FBQ0FDLGFBQVMsS0FGQTtBQUdUQyxZQUFRLElBSEM7QUFJVEMsUUFBSyxzQkFKSTtBQUtUQyxtQkFBZSxLQUxOO0FBTVRDLHNCQUFrQixFQU5UO0FBT1RDLGdCQUFZLEtBUEg7QUFRVDtBQUNBQyxlQUFZLEVBVEg7QUFVVDtBQUNBQyxtQkFBZSxFQVhOO0FBWVRDLHdCQUFvQixFQVpYO0FBYVRDLG9CQUFnQixFQWJQO0FBY1RDLG9CQUFnQixFQWRQO0FBZVRDLDJCQUF1QixFQWZkO0FBZ0JUQyxzQkFBa0IsRUFoQlQ7QUFpQlRDLGtCQUFjLEVBakJMO0FBa0JUQyxxQkFBaUIsRUFsQlI7QUFtQlRDLGtCQUFjO0FBbkJMLEdBQWI7QUFGWTtBQXVCZjs7OztzQ0FDa0I7QUFD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LEVBQThCRixRQUE5QixDQUFULENBQXZCO0FBQUEsU0FSbkI7QUFTSFQsNkJBQXFCLDZCQUFDSCxJQUFELEVBQU1jLFFBQU47QUFBQSxtQkFBbUJKLFNBQVMsZ0NBQW9CVixJQUFwQixFQUF5QmMsUUFBekIsQ0FBVCxDQUFuQjtBQUFBLFNBVGxCO0FBVUhRLHFCQUFZLHFCQUFDQyxXQUFELEVBQWNDLFNBQWQsRUFBd0JDLE9BQXhCLEVBQWlDQyxFQUFqQztBQUFBLG1CQUF1Q2hCLFNBQVMsd0JBQVlhLFdBQVosRUFBeUJDLFNBQXpCLEVBQW1DQyxPQUFuQyxFQUE0Q0MsRUFBNUMsQ0FBVCxDQUF2QztBQUFBLFNBVlQ7QUFXSEMsMkJBQWtCLDJCQUFDQyxNQUFELEVBQVFGLEVBQVI7QUFBQSxtQkFBYWhCLFNBQVMsOEJBQWtCa0IsTUFBbEIsRUFBeUJGLEVBQXpCLENBQVQsQ0FBYjtBQUFBLFNBWGY7QUFZSEcsMkJBQWtCLDJCQUFDZixRQUFEO0FBQUEsbUJBQVlKLFNBQVMsOEJBQWtCSSxRQUFsQixDQUFULENBQVo7QUFBQSxTQVpmO0FBYUhnQix3QkFBZSx3QkFBQ2hCLFFBQUQsRUFBVUYsUUFBVjtBQUFBLG1CQUFxQkYsU0FBUywyQkFBZUksUUFBZixFQUF3QkYsUUFBeEIsQ0FBVCxDQUFyQjtBQUFBLFNBYlo7QUFjSG1CLHdCQUFnQix3QkFBQ2pELElBQUQsRUFBTzRDLEVBQVA7QUFBQSxtQkFBY2hCLFNBQVMsMkJBQWU1QixJQUFmLEVBQXFCNEMsRUFBckIsQ0FBVCxDQUFkO0FBQUE7QUFkYixLQUFQO0FBZ0JILENBakJEOztrQkFxQmUseUJBQVFyQixlQUFSLEVBQTBCSSxrQkFBMUIsRUFBOENqQiwyQkFBOUMsQyIsImZpbGUiOiIxNDEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDaGF0UGFuZWwgZnJvbSAnLi4vY29tbW9ucy9DaGF0UGFuZWwnXG5pbXBvcnQgSW5zdXJTZWxmIGZyb20gJy4vaW5zdXJhbmNlU2VsZi5qcydcbmltcG9ydCBJbnN1ck90aGVycyBmcm9tICcuL2luc3VyYW5jZUZhbWlseS5qcydcbmltcG9ydCBJbnN1ckNvbW1vbiBmcm9tICcuL2luc3VyYW5jZUNvbW1vblNlY3Rpb24uanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuY2xhc3MgSW5zdXJhbmNlRW5kb3Jlc21lbnRJbnB1dFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLy8gc2VsZWN0ZWRfcGxhbl9wbGFuOicnLFxuICAgICAgICAgICAgbm9fbG5hbWU6ZmFsc2UsXG4gICAgICAgICAgICBpc19lZGl0OnRydWUsXG4gICAgICAgICAgICBnc3Q6ICdpbmNsdXNpdmUgb2YgMTglIEdTVCcsXG4gICAgICAgICAgICBlbmFibGVfcHJvY2VlZDpmYWxzZSxcbiAgICAgICAgICAgIHByb2ZpbGVzX3NlbGVjdGVkOltdLFxuICAgICAgICAgICAgc2F2ZU1lbWJlcnM6ZmFsc2UsXG4gICAgICAgICAgICAvLyBpc19hZHVsdF9vbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIGlzX2Rpc2FibGU6IFtdLFxuICAgICAgICAgICAgLy8gaXNWYWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVFcnJvcnM6e30sXG4gICAgICAgICAgICB2YWxpZGF0ZU90aGVyRXJyb3JzOnt9LFxuICAgICAgICAgICAgdmFsaWRhdGluZ05hbWVzOltdLFxuICAgICAgICAgICAgQ3JlYXRlQXBpRXJyb3JzOnt9LFxuICAgICAgICAgICAgc2hvd19zZWxlY3RlZF9wcm9maWxlczpbXSxcbiAgICAgICAgICAgIHZhbGlkYXRlRG9iRXJyb3JzOltdLFxuICAgICAgICAgICBcdGVycm9yTWVzc2FnZXM6W10sXG4gICAgICAgICAgIFx0ZW5kb3JzZW1lbnRFcnJvcjpbXSxcbiAgICAgICAgICAgXHRlbWFpbFZlcmlmaWVkOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBcdGxldCBzZWxmID0gdGhpc1xuICAgIFx0aWYod2luZG93KXtcbiAgICBcdFx0d2luZG93LnNjcm9sbFRvKDAsMClcbiAgICBcdH1cbiAgICBcdGxldCBjYXJkXG4gICAgXHRsZXQgbWVtYmVyc0lkID0gW11cbiAgICBcdGlmKHRoaXMucHJvcHMuZW5kb3JzZURhdGEgJiYgdGhpcy5wcm9wcy5lbmRvcnNlRGF0YS5tZW1iZXJzLmxlbmd0aD4wKXtcbiAgICBcdFx0Y2FyZCA9IHRoaXMucHJvcHMuZW5kb3JzZURhdGEubWVtYmVycy5tYXAoKG1lbWJlciwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0bWVtYmVyc0lkLnB1c2goe1tpXTogbWVtYmVyLmlkfSlcblx0XHRcdFx0XHR9KVxuICAgIFx0XHR0aGlzLnByb3BzLnNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzKG1lbWJlcnNJZCkgLy8gdG8gc2F2ZSBjdXJyZW50IHNlbGVjdGVkIG1lbWJlcnMgZGF0YSBpbiBzdG9yZVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNhdmVNZW1iZXJzOiB0cnVlfSlcblxuICAgIFx0fVxuICAgIFx0dGhpcy5zZXRTdGF0ZSh7Li4uc2VsZi5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzLCBzZWxlY3RlZF9wbGFuX3ByaWNlOnRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5hbW91bnR9KVxuICAgIFx0aWYodGhpcy5wcm9wcy5jcmVhdGVfcGF5bWVudF9yZXNwKXtcbiAgICBcdFx0aWYodGhpcy5wcm9wcy5jcmVhdGVfcGF5bWVudF9yZXNwLm1lbWJlcnMgJiYgdGhpcy5wcm9wcy5jcmVhdGVfcGF5bWVudF9yZXNwLm1lbWJlcnMubGVuZ3RoID4wKXtcbiAgICBcdFx0XHR0aGlzLnNldFN0YXRlKHtDcmVhdGVBcGlFcnJvcnM6c2VsZi5wcm9wcy5jcmVhdGVfcGF5bWVudF9yZXNwfSlcdFxuICAgIFx0XHR9XG4gICAgXHRcdFxuICAgIFx0fVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpe1xuICAgIFx0Ly8gbGV0IGNhcmRcbiAgICBcdC8vIGxldCBzZWxmID0gdGhpc1xuICAgIFx0Ly8gbGV0IGlzRHVtbXlVc2VyXG4gICAgXHQvLyBsZXQgbWVtYmVyc0lkID0gW11cbiAgLy8gICBcdGlmKCF0aGlzLnN0YXRlLnNhdmVNZW1iZXJzICYmIE9iamVjdC5rZXlzKHByb3BzLnNlbGVjdGVkX3BsYW4pLmxlbmd0aCA+MCAmJiBwcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlICYmICFwcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLmxlbmd0aCl7XG4gIC8vICAgXHRcdC8vIGxldCBsb2dpblVzZXIgPSBwcm9wcy5VU0VSLnNlbGVjdGVkUHJvZmlsZVxuICAvLyAgIFx0XHRsZXQgbG9naW5Vc2VyID0gcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZVxuICAvLyAgIFx0XHRsZXQgbWVtYmVyc0lkID0gW11cbiAgLy8gICBcdFx0bGV0IGlzRGVmYXVsdFVzZXJcbiAgLy8gICBcdFx0aWYocHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyhwcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggJiYgcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSl7XG4gIC8vICAgXHRcdFx0aXNEZWZhdWx0VXNlciA9IHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNfZGVmYXVsdF91c2VyXG4gIC8vICAgXHRcdH1cbiAgLy8gICBcdFx0aXNEdW1teVVzZXIgPSBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzRHVtbXlVc2VyXG4gIC8vICAgXHRcdGlmKCFpc0R1bW15VXNlcil7XG5cdCAvLyAgICBcdFx0bWVtYmVyc0lkLnB1c2goeycwJzpsb2dpblVzZXJ9KVxuXHQgLy8gICAgXHRcdHZhciBuID0gKHByb3BzLnNlbGVjdGVkX3BsYW4uYWR1bHRfY291bnQgKyBwcm9wcy5zZWxlY3RlZF9wbGFuLmNoaWxkX2NvdW50KSAtIDE7XG5cdFx0Ly8gXHRcdGlmKG4gIT09IDApe1xuXHRcdC8vIFx0XHRcdGNhcmQgPSBbLi4uQXJyYXkobildLm1hcCgoZSwgaSkgPT4ge1xuXHRcdC8vIFx0XHRcdFx0bWVtYmVyc0lkLnB1c2goe1tpKzFdOiBpKzF9KVxuXHRcdC8vIFx0XHRcdH0pXG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1lbHNle1xuXHRcdC8vIFx0XHRtZW1iZXJzSWQucHVzaCh7JzAnOjB9KVxuXHRcdC8vIFx0XHR2YXIgbiA9IChwcm9wcy5zZWxlY3RlZF9wbGFuLmFkdWx0X2NvdW50ICsgcHJvcHMuc2VsZWN0ZWRfcGxhbi5jaGlsZF9jb3VudCkgLSAxO1xuXHRcdC8vIFx0XHRpZihuICE9PSAwKXtcblx0XHQvLyBcdFx0XHRjYXJkID0gWy4uLkFycmF5KG4pXS5tYXAoKGUsIGkpID0+IHtcblx0XHQvLyBcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHtbaSsxXTogaSsxfSlcblx0XHQvLyBcdFx0XHR9KVxuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHRwcm9wcy5zYXZlQ3VycmVudFNlbGVjdGVkTWVtYmVycyhtZW1iZXJzSWQpXG5cdFx0Ly8gXHR0aGlzLnNldFN0YXRlKHsgc2F2ZU1lbWJlcnM6IHRydWV9KVxuICAvLyAgIFx0fVxuICAvLyAgIFx0bGV0IHByb2ZpbGVMZW5ndGggPSBPYmplY3Qua2V5cyhwcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGg7XG5cdFx0Ly8gbGV0IGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzID0gW11cblx0XHQvLyBsZXQgc2hvd19zZWxlY3RlZF9wcm9maWxlID0gW11cbiAgLy8gICAgICAgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLm1hcCgodmFsLGtleSkgPT4ge1xuICAvLyAgICAgICAgICAgY3VycmVudFNlbGVjdGVkUHJvZmlsZXMucHVzaCh2YWxba2V5XSlcbiAgLy8gICAgICAgfSlcblx0IC8vICAgIGlmKHByb2ZpbGVMZW5ndGggPiAwKXtcblx0IC8vICAgIFx0aWYoIXByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXIpe1xuXHRcdC8vIFx0XHR7T2JqZWN0LmVudHJpZXMocHJvcHMuVVNFUi5wcm9maWxlcykubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkge1xuXG5cdFx0Ly8gXHRcdFx0aWYoY3VycmVudFNlbGVjdGVkUHJvZmlsZXMuaW5kZXhPZihwYXJzZUludChrZXkpKSA9PSAtMSAmJiBrZXkgIT09IHByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpe1xuXHRcdC8vIFx0XHRcdFx0c2hvd19zZWxlY3RlZF9wcm9maWxlLnB1c2goa2V5KVxuXHRcdC8vIFx0XHRcdH1cblx0XHQvLyBcdFx0fSl9XG5cdFx0Ly8gXHRcdHNlbGYuc2V0U3RhdGUoe3Nob3dfc2VsZWN0ZWRfcHJvZmlsZXMgOiBzaG93X3NlbGVjdGVkX3Byb2ZpbGV9KVxuXHRcdC8vIFx0fVxuXHRcdC8vIH1cbiAgICB9XG5cbiAgICBjaGVja0ZvclZhbGlkYXRpb24ocHJvZmlsZV9kYXRhLCBtZW1iZXJfaWQpe1xuICAgIFx0bGV0IHByb2ZpbGVzID0gdGhpcy5zdGF0ZS5wcm9maWxlc19zZWxlY3RlZFxuICAgIFx0aWYocHJvZmlsZXMubGVuZ3RoKXtcbiAgICBcdFx0cHJvZmlsZXMgPSB0aGlzLnN0YXRlLnByb2ZpbGVzX3NlbGVjdGVkLmZpbHRlcigoeCA9PiB4LmlkICE9IG1lbWJlcl9pZCkpXG4gICAgXHR9XG4gICAgXHRwcm9maWxlcy5wdXNoKHByb2ZpbGVfZGF0YSlcblxuICAgIFx0bGV0IGlzX2VuYWJsZSA9IHByb2ZpbGVzLmZpbHRlcih4PT4gIXguaXNmb3JtQ29tcGxldGVkKVxuICAgIFx0aXNfZW5hYmxlID0gaXNfZW5hYmxlLmxlbmd0aD9mYWxzZTp0cnVlXG4gICAgXHR0aGlzLnNldFN0YXRlKHtlbmFibGVfcHJvY2VlZDogaXNfZW5hYmxlLCBwcm9maWxlc19zZWxlY3RlZDogcHJvZmlsZXN9KVxuICAgIH1cblxuICAgIGNoZWNrSXNFbWFpbFZlcmZpZWQoKXtcbiAgICBcdHRoaXMuc2V0U3RhdGUoe2VtYWlsVmVyaWZpZWQ6dHJ1ZX0pXG4gICAgfVxuXG4gICAgcHJvY2VlZFBsYW4oKXtcbiAgICBcdGxldCBpc19kaXNhYmxlICA9IGZhbHNlXG4gICAgXHRsZXQgbWVtYmVyX3JlZiA9ICcnXG4gICAgXHRsZXQgZW1wdHlfZmVpbGRzID0gW11cbiAgICBcdGxldCBjdXJyZW50U2VsZWN0ZWRQcm9maWxlcyA9IFtdXG4gICAgXHRsZXQgZmllbGRzX25hbWUgPSBbXVxuICAgIFx0bGV0IGZpZWxkc19uYW1lX29iaiA9IHt9XG4gICAgXHRsZXQgZXJyb3JNZXNzYWdlc09iaiA9IHt9XG4gICAgXHRsZXQgc2VsZl9wcm9maWxlXG4gICAgXHRsZXQgc2VsZl9hZ2VcbiAgICBcdGxldCBhZHVsdDJhZ2VcbiAgICBcdHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZC5tYXAoKHZhbCxrZXkpID0+IHtcbiAgICBcdFx0Y3VycmVudFNlbGVjdGVkUHJvZmlsZXMucHVzaCh2YWxba2V5XSlcbiAgICBcdH0pXG4gICAgXHRsZXQgdmFsaWRhdGluZ0Vycm9ycyA9IHt9XG4gICAgXHRsZXQgdmFsaWRhdGluZ0RvYkVycm9ycyA9IHt9XG4gICAgXHRsZXQgdmFsaWRhdGluZ05hbWUgPSB7fVxuICAgIFx0bGV0IHZhbGlkYXRpbmdPdGhlckVycm9ycyA9IHt9XG4gICAgXHRsZXQgaW52YWxpZG5hbWUgPSBbXVxuICAgIFx0bGV0IGZ1bGxuYW1lXG4gICAgXHRsZXQgZnVsbG5hbWVPYmo9e31cbiAgICBcdGxldCBpc0R1bW15VXNlclxuICAgIFx0bGV0IGFsbF9pZF9wcm9vZnMgPSBbXVxuICAgIFx0bGV0IGlzX2ZpZWxkc19lZGl0ZWQgPSBbXVxuICAgIFx0bGV0IGVkaXRlZF9maWVsZHMgPXt9XG4gICAgXHRsZXQgbWVtYmVyX3Byb29mPVtdXG4gICAgXHRsZXQgbmV3SWRQcm9vZnNcbiAgICBcdGxldCBpc0FnZW50PWZhbHNlXG4gICAgXHRpZihPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMpLmxlbmd0aCA+IDApe1xuICAgIFx0XHQvLyBpc0R1bW15VXNlciA9IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzRHVtbXlVc2VyXG4gICAgXHRcdC8vIGlmKCFpc0R1bW15VXNlcil7XG4gICAgXHRcdC8vIFx0c2VsZl9wcm9maWxlICA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKVx0XG4gICAgXHRcdC8vIH1lbHNle1xuICAgIFx0XHQvLyBcdHNlbGZfcHJvZmlsZSAgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbMF0pXG4gICAgXHRcdC8vIH1cbiAgICBcdFx0Ly8gc2VsZl9wcm9maWxlICA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXSlcbiAgICBcdFx0dGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLm1hcCgodmFsLGtleSkgPT4ge1xuICAgIFx0XHRcdGlmKHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1t2YWxba2V5XV0ucmVsYXRpb24gPT0gJ3NlbGYnKXtcbiAgICBcdFx0XHRcdHNlbGZfcHJvZmlsZSAgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdmFsW2tleV1dKVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fSlcbiAgICBcdH1cbiAgICBcdHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZC5tYXAoKHZhbCxrZXkpID0+IHtcbiAgICBcdFx0aWYoT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzKS5sZW5ndGggPiAwKXtcbiAgICBcdFx0XHRsZXQgZmllbGRzID0gW11cbiAgICBcdFx0XHRsZXQgZG9iRXJyb3IgPSBbXVxuICAgIFx0XHRcdGxldCBwYXJhbSA9dGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3ZhbFtrZXldXVxuXHRcdFx0XHRpZihwYXJhbS50aXRsZSA9PSBcIlwiKXsgIC8vY29tbW9uIHZhbGlkYXRpb25cblx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGZpZWxkcy5wdXNoKCd0aXRsZScpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihwYXJhbS5yZWxhdGlvbiA9PSBcIlwiKXtcblx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdyZWxhdGlvbicpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihwYXJhbS5uYW1lID09IFwiXCIpe1xuXHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0ZmllbGRzLnB1c2goJ25hbWUnKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocGFyYW0uZ2VuZGVyID09IFwiXCIpe1xuXHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2dlbmRlcicpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihwYXJhbS5kb2IgPT0gbnVsbCB8fCBwYXJhbS5kb2IgPT0gXCJcIil7XG5cdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRmaWVsZHMucHVzaCgnZG9iJylcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCFwYXJhbS5ub19sbmFtZSl7XG5cdFx0XHRcdFx0aWYocGFyYW0ubGFzdF9uYW1lID09XCJcIil7XG5cdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2xhc3RfbmFtZScpXHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihwYXJhbS5yZWxhdGlvbj09ICdzZWxmJyl7IC8vb25seSBzZWxmIHZhbGlkYXRpb25cblx0XHRcdFx0XHRpZihwYXJhbS5waW5jb2RlID09IFwiXCIpe1xuXHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdwaW5jb2RlJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYocGFyYW0uYWRkcmVzcyA9PSBcIlwiKXtcblx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgnYWRkcmVzcycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHBhcmFtLnN0YXRlID09IFwiXCIgfHwgcGFyYW0uc3RhdGVfY29kZSA9PSAwKXtcblx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgnc3RhdGUnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwYXJhbS50b3duID09IFwiXCIpe1xuXHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCd0b3duJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYocGFyYW0uZGlzdHJpY3QgPT0gXCJcIil7XG5cdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2Rpc3RyaWN0Jylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYocGFyYW0uZW1haWwgPT0gXCJcIil7XG5cdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2VtYWlsJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYocGFyYW0uZW1haWwgIT0nJyAmJiBwYXJhbS5yZWxhdGlvbiA9PSAnc2VsZicpe1xuXHRcdFx0XHRcdFx0bGV0IHZhbGlkRW1haWwgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblx0XHRcdCAgXHRcdFx0dmFsaWRFbWFpbCA9IHZhbGlkRW1haWwudGVzdChwYXJhbS5lbWFpbClcblx0XHRcdCAgXHRcdFx0aWYoIXZhbGlkRW1haWwpe1xuXHRcdFx0ICBcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdlbWFpbCcpXHRcdFxuXHRcdFx0ICBcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocGFyYW0ubWVtYmVyX3R5cGUgPT0gJ2FkdWx0Jyl7IC8vIG9ubHkgYWR1bHQgdmFsaWRhdGlvbiBpbiBjYXNlIG9mIHNhbWUgZ2VuZGVyIG9yIHRpdGxlXG5cdFx0XHRcdFx0aWYocGFyYW0ub25seV9hZHVsdCAmJiBwYXJhbS50aXRsZSAhPT0gXCJcIil7XG5cdFx0XHRcdFx0XHRpZihzZWxmX3Byb2ZpbGUudGl0bGUgPT0gcGFyYW0udGl0bGUpe1xuXHRcdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRlbXB0eV9mZWlsZHMucHVzaCgndGl0bGUnKVx0XG5cdFx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwYXJhbS5nZW5kZXIgIT0gJycgJiYgcGFyYW0udGl0bGUgIT0nJyl7XG5cdFx0XHRcdFx0XHRpZihwYXJhbS5nZW5kZXIgPT0gJ20nICYmIHBhcmFtLnRpdGxlICE9J21yLicpe1xuXHRcdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRlbXB0eV9mZWlsZHMucHVzaCgnZ2VuZGVyJylcdFxuXHRcdFx0XHRcdFx0fWVsc2UgaWYocGFyYW0uZ2VuZGVyID09ICdmJyAmJiBwYXJhbS50aXRsZT09J21yJyl7XG5cdFx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdGVtcHR5X2ZlaWxkcy5wdXNoKCdnZW5kZXInKVx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHBhcmFtLnBpbmNvZGUgJiYgcGFyYW0ucGluY29kZSAhPT0nJyl7XG5cdFx0XHRcdFx0XHRpZihwYXJhbS5waW5jb2RlLmxlbmd0aCA8Nil7XG5cdFx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdGVtcHR5X2ZlaWxkcy5wdXNoKCdwaW5jb2RlJylcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocGFyYW0uZG9iICE9IG51bGwgJiYgcGFyYW0ubWVtYmVyX3R5cGU9PSAnYWR1bHQnKXsgLy9kb2IgdmFsaWRhdGlvblxuXHRcdFx0XHRcdGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdCAgICBsZXQgYmlydGhEYXRlID0gbmV3IERhdGUocGFyYW0uZG9iKTtcblx0XHRcdFx0ICAgIGxldCBhZ2UgPSB0b2RheS5nZXRGdWxsWWVhcigpIC0gYmlydGhEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdCAgICBsZXQgbSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGUuZ2V0TW9udGgoKTtcblx0XHRcdFx0ICAgIGlmIChtIDwgMCB8fCAobSA9PT0gMCAmJiB0b2RheS5nZXREYXRlKCkgPCBiaXJ0aERhdGUuZ2V0RGF0ZSgpKSkge1xuXHRcdFx0XHQgICAgICAgIGFnZS0tO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgaWYocGFyYW0ucmVsYXRpb249PSAnc2VsZicpe1xuXHRcdFx0XHRcdFx0c2VsZl9hZ2UgPSBhZ2Vcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdGFkdWx0MmFnZSA9IGFnZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGQubGVuZ3RoPjApe1xuXHRcdFx0XHQgICAgXHRpZihwYXJzZUludChhZ2UpIDwgcGFyc2VJbnQodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5taW5fYWdlKSB8fCBcblx0XHRcdFx0XHQgICAgXHRwYXJzZUludChhZ2UpID4gcGFyc2VJbnQodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5tYXhfYWdlKSl7XG5cdFx0XHRcdCAgXHRcdFx0ZmllbGRzLnB1c2goJ2RvYicpXG5cdFx0XHRcdCAgXHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcdFx0XHQgICAgXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ZWxzZSBpZihwYXJhbS5kb2IgIT0gbnVsbCAmJiBwYXJhbS5tZW1iZXJfdHlwZT09ICdjaGlsZCcpe1x0XG5cdFx0XHRcdFx0bGV0IGNoaWxkQWdlXHRcdFx0XHRcblx0XHRcdFx0XHRsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHQgICAgbGV0IGJpcnRoRGF0ZSA9IG5ldyBEYXRlKHBhcmFtLmRvYik7XG5cdFx0XHRcdCAgICBjaGlsZEFnZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgLSBiaXJ0aERhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0ICAgIGxldCBtID0gdG9kYXkuZ2V0TW9udGgoKSAtIGJpcnRoRGF0ZS5nZXRNb250aCgpO1xuXHRcdFx0XHQgICAgaWYgKG0gPCAwIHx8IChtID09PSAwICYmIHRvZGF5LmdldERhdGUoKSA8IGJpcnRoRGF0ZS5nZXREYXRlKCkpKSB7XG5cdFx0XHRcdCAgICAgICAgY2hpbGRBZ2UtLTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdFx0XHRsZXQgb25lRGF5ID0gMjQqNjAqNjAqMTAwMDtcblx0XHRcdFx0XHRsZXQgZmlyc3REYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdFx0XHRsZXQgc2Vjb25kRGF0ZSA9IG5ldyBEYXRlKHBhcmFtLmRvYik7XG5cdFx0XHRcdFx0bGV0IGRpZmZEYXlzID0gTWF0aC5yb3VuZChNYXRoLmFicygoZmlyc3REYXRlLmdldFRpbWUoKSAtIHNlY29uZERhdGUuZ2V0VGltZSgpKS8ob25lRGF5KSkpO1xuXHRcdFx0XHRcdGlmKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGQubGVuZ3RoPjApe1xuXHRcdFx0XHRcdFx0bGV0IG1pbkFnZU9mQWR1bHRzID0gTWF0aC5taW4oc2VsZl9hZ2UsYWR1bHQyYWdlKVxuXHRcdFx0XHRcdFx0bGV0IGFkdWx0Q2hpbGRBZ2VEaWZmID0gbWluQWdlT2ZBZHVsdHMgLSBjaGlsZEFnZVxuXHRcdFx0XHRcdFx0bGV0IGNoaWxkX2FnZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0uY2hpbGRfbWluX2FnZVxuXHRcdFx0XHRcdFx0bGV0IGNoaWxkX21heF9hZ2UgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLmNoaWxkX21heF9hZ2Vcblx0XHRcdFx0XHRcdGlmKHBhcnNlSW50KGRpZmZEYXlzKSA8IHBhcnNlSW50KGNoaWxkX2FnZSkgfHwgcGFyc2VJbnQoY2hpbGRBZ2UpID4gcGFyc2VJbnQoY2hpbGRfbWF4X2FnZSkpe1xuXHRcdFx0XHQgIFx0XHRcdGZpZWxkcy5wdXNoKCdkb2InKVxuXHRcdFx0XHQgIFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXHRcdFx0ICAgIFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYoYWR1bHRDaGlsZEFnZURpZmYgPCAxOCl7XG5cdFx0XHRcdFx0XHRcdGRvYkVycm9yLnB1c2goJ2RvYicpXG5cdFx0XHRcdCAgXHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZih0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkLmxlbmd0aD4wKXtcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLmNoaWxkX21heF9hZ2U9IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0uY2hpbGRfbWF4X2FnZVxuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmouY2hpbGRfbWluX2FnZT0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5jaGlsZF9taW5fYWdlXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5tYXhfYWdlPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLm1heF9hZ2Vcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLm1pbl9hZ2U9IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWluX2FnZVxuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmouY29tbW9uX21lc3NhZ2U9ICcqVGhpcyBpcyBhIG1hbmRhdG9yeSBmaWVsZCdcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLm1heF9jaGFyYWN0ZXI9ICdNYXhpbXVtIGNoYXJhY3RlciBsaW1pdDogNTAnXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai52YWxpZF9lbWFpbD0gJypQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCdcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLmFkdWx0X2FnZSA9IGAqQWdlIHNob3VsZCBiZSBtb3JlIHRoYW4gJHt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLm1pbl9hZ2V9IHllYXJzIGFuZCBsZXNzIHRoYW4gJHt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLm1heF9hZ2V9IHllYXJzYFxuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmouY2hpbGRfYWdlID0gYCpBZ2Ugc2hvdWxkIGJlIG1vcmUgdGhhbiAke3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0uY2hpbGRfbWluX2FnZX0gZGF5cyBhbmQgbGVzcyB0aGFuICR7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5jaGlsZF9tYXhfYWdlfSB5ZWFyc2Bcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLnNhbWVHZW5kZXJUaXRsZSA9IFwiKkJvdGggdGhlIEFkdWx0cyBjYW4ndCBoYXZlIHNhbWUgR2VuZGVyIGFuZCBUaXRsZVwiXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5zaG91bGRHZW5kZXJUaXRsZSA9IFwiKkJvdGggR2VuZGVyIGFuZCBUaXRsZSBjYW4ndCBiZSBkaWZmZXJlbnRcIlxuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmouY2hpbGRBZ2VEaWZmID0gJypEaWZmZXJlbmNlIGJldHdlZW4gYWdlIG9mIGNoaWxkIGFuZCBhZHVsdCBzaG91bGQgYmUgbW9yZSB0aGFuIDE4IHllYXJzJ1x0XHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gaWYoZmllbGRzLmxlbmd0aCA+IDAgfHwgZW1wdHlfZmVpbGRzLmxlbmd0aCA+IDAgfHwgZG9iRXJyb3IubGVuZ3RoID4gMCl7XHRcblx0XHRcdFx0Ly8gXHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHQvLyBcdG1lbWJlcl9yZWYgPSBgbWVtYmVyXyR7cGFyYW0uaWR9YFxuXHRcdFx0XHQvLyB9XG5cdFx0XHRcdGlmKHBhcmFtLm5hbWUgIT0gXCJcIiAmJiBwYXJhbS5taWRkbGVfbmFtZSAhPSBcIlwiICYmIHBhcmFtLmxhc3RfbmFtZSAhPSBcIlwiICYmICFwYXJhbS5ub19sbmFtZSl7Ly9uYW1lIHZhbGlkYXRpb25cblx0XHRcdFx0XHRsZXQgZnVsbG5hbWVPYmo9e31cblx0XHRcdFx0XHRmdWxsbmFtZSA9IHBhcmFtLm5hbWUrcGFyYW0ubWlkZGxlX25hbWUrcGFyYW0ubGFzdF9uYW1lXG5cdFx0XHRcdFx0ZnVsbG5hbWVPYmouaWQ9cGFyYW0uaWRcblx0XHRcdFx0XHRmdWxsbmFtZU9iai5mTmFtZT1mdWxsbmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0ZmllbGRzX25hbWUucHVzaChmdWxsbmFtZU9iailcblx0XHRcdFx0fWVsc2UgaWYocGFyYW0ubmFtZSAhPSBcIlwiICYmIHBhcmFtLm1pZGRsZV9uYW1lID09IFwiXCIgJiYgcGFyYW0ubGFzdF9uYW1lICE9IFwiXCIgJiYgIXBhcmFtLm5vX2xuYW1lKXtcblx0XHRcdFx0XHRsZXQgZnVsbG5hbWVPYmo9e31cblx0XHRcdFx0XHRmdWxsbmFtZSA9IHBhcmFtLm5hbWUrcGFyYW0ubWlkZGxlX25hbWUrcGFyYW0ubGFzdF9uYW1lXG5cdFx0XHRcdFx0ZnVsbG5hbWVPYmouaWQ9cGFyYW0uaWRcblx0XHRcdFx0XHRmdWxsbmFtZU9iai5mTmFtZT1mdWxsbmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0ZmllbGRzX25hbWUucHVzaChmdWxsbmFtZU9iailcblx0XHRcdFx0fWVsc2UgaWYocGFyYW0ubmFtZSAhPSBcIlwiICYmIHBhcmFtLm1pZGRsZV9uYW1lID09IFwiXCIgJiYgcGFyYW0ubGFzdF9uYW1lID09IFwiXCIgJiYgIXBhcmFtLm5vX2xuYW1lKXtcblx0XHRcdFx0XHRsZXQgZnVsbG5hbWVPYmo9e31cblx0XHRcdFx0XHRmdWxsbmFtZSA9IHBhcmFtLm5hbWVcblx0XHRcdFx0XHRmdWxsbmFtZU9iai5pZD1wYXJhbS5pZFxuXHRcdFx0XHRcdGZ1bGxuYW1lT2JqLmZOYW1lPWZ1bGxuYW1lLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRmaWVsZHNfbmFtZS5wdXNoKGZ1bGxuYW1lT2JqKVxuXHRcdFx0XHR9ZWxzZSBpZihwYXJhbS5uYW1lICE9IFwiXCIgJiYgcGFyYW0ubm9fbG5hbWUpe1xuXHRcdFx0XHRcdGxldCBmdWxsbmFtZU9iaj17fVxuXHRcdFx0XHRcdGZ1bGxuYW1lID0gcGFyYW0ubmFtZVxuXHRcdFx0XHRcdGZ1bGxuYW1lT2JqLmlkPXBhcmFtLmlkXG5cdFx0XHRcdFx0ZnVsbG5hbWVPYmouZk5hbWU9ZnVsbG5hbWUudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdGZpZWxkc19uYW1lLnB1c2goZnVsbG5hbWVPYmopXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YWxpZGF0aW5nRXJyb3JzW3BhcmFtLmlkXSA9IGZpZWxkc1xuXHRcdFx0XHR2YWxpZGF0aW5nRG9iRXJyb3JzW3BhcmFtLmlkXSA9IGRvYkVycm9yXG5cdFx0XHRcdGlmKHBhcmFtLm1lbWJlcl90eXBlID09ICdhZHVsdCcpe1xuXHRcdFx0XHRcdHZhbGlkYXRpbmdPdGhlckVycm9yc1twYXJhbS5pZF0gPSBlbXB0eV9mZWlsZHNcblx0XHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHR9KVx0XHRcblx0XHR2YWxpZGF0aW5nTmFtZSA9IGZpZWxkc19uYW1lXG5cdFx0XHRsZXQgbmV3QXJyYXk9W11cblx0XHRcdGxldCBBcnJheUZsYWc9dHJ1ZVxuXHRcdFx0T2JqZWN0LmVudHJpZXModmFsaWRhdGluZ05hbWUpLm1hcChmdW5jdGlvbihba2V5LCB2YWx1ZV0pIHtcblx0XHRcdFx0aWYoQXJyYXlGbGFnKXtcblx0XHRcdFx0XHRuZXdBcnJheSA9ICB2YWxpZGF0aW5nTmFtZS5maWx0ZXIoKG5hbWU9PiBuYW1lLmZOYW1lID09IHZhbHVlLmZOYW1lKSlcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihuZXdBcnJheS5sZW5ndGg+MSl7XG5cdFx0XHRcdFx0QXJyYXlGbGFnID0gZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdGlmKG5ld0FycmF5Lmxlbmd0aCA+MSl7XG5cdFx0XHRcdG1lbWJlcl9yZWYgPSBgbWVtYmVyXyR7bmV3QXJyYXlbMV0uaWR9YFxuXHRcdFx0XHRsZXQgaWQgPSAnaWQ9JyArIG5ld0FycmF5WzFdLmlkXG5cdFx0XHRcdGlmKG5ld0FycmF5WzFdLm5hbWUgIT0gJycgJiYgbmV3QXJyYXlbMV0ubWlkZGxlX25hbWUgIT0gJycgJiYgbmV3QXJyYXlbMV0ubGFzdF9uYW1lICE9Jycpe1xuXHRcdFx0XHRcdGludmFsaWRuYW1lLnB1c2goaWQpXG5cdFx0XHRcdH1lbHNlIGlmKG5ld0FycmF5WzFdLm5hbWUgIT0gJycgJiYgbmV3QXJyYXlbMV0ubWlkZGxlX25hbWUgPT0gJycgJiYgbmV3QXJyYXlbMV0ubGFzdF9uYW1lICE9Jycpe1xuXHRcdFx0XHRcdGludmFsaWRuYW1lLnB1c2goaWQpXG5cdFx0XHRcdH1cblx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5zYW1lTmFtZSA9ICcqTmFtZSBvZiB0aGUgbWVtYmVycyBjYW5ub3QgYmUgc2FtZSdcblx0XHRcdH1cblxuXHRcdFx0T2JqZWN0LmtleXModmFsaWRhdGluZ0Vycm9ycykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBcdFx0XHRpZih2YWxpZGF0aW5nRXJyb3JzW2tleV0ubGVuZ3RoID4gMCl7XG4gICAgXHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuICAgIFx0XHRcdFx0bWVtYmVyX3JlZiA9IGBtZW1iZXJfJHtrZXl9YFx0XG4gICAgXHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdE9iamVjdC5rZXlzKHZhbGlkYXRpbmdPdGhlckVycm9ycykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBcdFx0XHRpZih2YWxpZGF0aW5nT3RoZXJFcnJvcnNba2V5XS5sZW5ndGggPiAwKXtcbiAgICBcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG4gICAgXHRcdFx0XHRtZW1iZXJfcmVmID0gYG1lbWJlcl8ke2tleX1gXHRcbiAgICBcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0T2JqZWN0LmtleXModmFsaWRhdGluZ0RvYkVycm9ycykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBcdFx0XHRpZih2YWxpZGF0aW5nRG9iRXJyb3JzW2tleV0ubGVuZ3RoID4gMCl7XG4gICAgXHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuICAgIFx0XHRcdFx0bWVtYmVyX3JlZiA9IGBtZW1iZXJfJHtrZXl9YFx0XG4gICAgXHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdFxuXHRcdFx0Y29uc29sZS5sb2coJ3ZhbGlkYXRlRXJyb3JzJylcblx0XHRcdGNvbnNvbGUubG9nKHZhbGlkYXRpbmdFcnJvcnMpXG5cdFx0XHRjb25zb2xlLmxvZygndmFsaWRhdGVPdGhlckVycm9ycycpXG5cdFx0XHRjb25zb2xlLmxvZyh2YWxpZGF0aW5nT3RoZXJFcnJvcnMpXG5cdFx0XHRjb25zb2xlLmxvZygndmFsaWRhdGluZ05hbWVzJylcblx0XHRcdGNvbnNvbGUubG9nKGludmFsaWRuYW1lKVxuXHRcdFx0Y29uc29sZS5sb2coJ3ZhbGlkYXRpbmdEb2JFcnJvcnMnKVxuXHRcdFx0Y29uc29sZS5sb2codmFsaWRhdGluZ0RvYkVycm9ycylcblx0XHRcdGNvbnNvbGUubG9nKCdtZW1iZXJfcmVmJylcblx0XHRcdGNvbnNvbGUubG9nKG1lbWJlcl9yZWYpXG5cdFx0XHQvLyB2YWxpZGF0aW5nIGlzIHVzZXIgaGFkIGNoYW5nZWQgYW55dGhpbmdcdFxuXHRcdFx0aWYodGhpcy5wcm9wcy5lbmRvcnNlZF9tZW1iZXJfZGF0YS5tZW1iZXJzLmxlbmd0aCA9PSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMpLmxlbmd0aCl7XG5cdFx0XHRcdGZvcih2YXIgaSA9MDtpIDwgdGhpcy5wcm9wcy5lbmRvcnNlZF9tZW1iZXJfZGF0YS5tZW1iZXJzLmxlbmd0aDtpKyspIHtcblx0XHRcdFx0XHRsZXQgaWQgPSB0aGlzLnByb3BzLmVuZG9yc2VkX21lbWJlcl9kYXRhLm1lbWJlcnNbaV0uaWRcblx0XHRcdFx0XHRpZih0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbaWRdKSB7XG5cdFx0XHRcdFx0XHRsZXQgc2VsZWN0ZWRQcm9maWxlID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW2lkXVxuXHRcdFx0XHRcdFx0bGV0IHNlbGVjdGVkQXBpUHJvZmlsZSA9IHRoaXMucHJvcHMuZW5kb3JzZWRfbWVtYmVyX2RhdGEubWVtYmVyc1tpXVxuXHRcdFx0XHRcdFx0Zm9yKGxldCBqIGluICBzZWxlY3RlZEFwaVByb2ZpbGUgKSB7XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYoaj09J2ZpcnN0X25hbWUnKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYoc2VsZWN0ZWRQcm9maWxlWyduYW1lJ10gIT1zZWxlY3RlZEFwaVByb2ZpbGVbJ2ZpcnN0X25hbWUnXSl7XG5cdFx0XHRcdFx0XHRcdFx0XHRpc19maWVsZHNfZWRpdGVkLnB1c2goaWQpXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihlZGl0ZWRfZmllbGRzW2lkXSkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVkaXRlZF9maWVsZHNbaWRdID0gW11cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGVkaXRlZF9maWVsZHNbaWRdLnB1c2goailcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYoaiE9J2VtYWlsJykge1xuXHRcdFx0XHRcdFx0XHRcdGlmKHNlbGVjdGVkUHJvZmlsZVtqXSAhPSBzZWxlY3RlZEFwaVByb2ZpbGVbal0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlzX2ZpZWxkc19lZGl0ZWQucHVzaChpZClcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGVkaXRlZF9maWVsZHNbaWRdKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdH1lbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWRpdGVkX2ZpZWxkc1tpZF0gPSBbXVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZWRpdGVkX2ZpZWxkc1tpZF0ucHVzaChqKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYodGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcyAmJiB0aGlzLnByb3BzLm1lbWJlcnNfcHJvb2ZzLmxlbmd0aD4wICYmIGlzX2ZpZWxkc19lZGl0ZWQuaW5kZXhPZihpZCkgIT0gLTEpe1xuXHRcdFx0XHRcdFx0bWVtYmVyX3Byb29mID0gdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5maWx0ZXIoKHg9PnguaWQgPT0gaWQpKVxuXHRcdFx0XHRcdFx0aWYobWVtYmVyX3Byb29mICYmIG1lbWJlcl9wcm9vZi5sZW5ndGg+MCAmJiBtZW1iZXJfcHJvb2ZbMF0uaW1nX3BhdGhfaWRzLmxlbmd0aCA+IDApe1xuXHRcdFx0XHRcdFx0XHRhbGxfaWRfcHJvb2ZzLnB1c2gobWVtYmVyX3Byb29mWzBdLmlkKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZihhbGxfaWRfcHJvb2ZzICYmIGFsbF9pZF9wcm9vZnMubGVuZ3RoID4gMCl7XG5cdFx0XHRcdFx0bmV3SWRQcm9vZnMgPSBpc19maWVsZHNfZWRpdGVkLmZpbHRlcihmdW5jdGlvbih4KSB7IFxuXHRcdFx0XHQgIFx0XHRyZXR1cm4gYWxsX2lkX3Byb29mcy5pbmRleE9mKHgpIDwgMDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRuZXdJZFByb29mcyA9IGlzX2ZpZWxkc19lZGl0ZWRcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZyhuZXdJZFByb29mcylcblx0XHRcdFx0aWYobmV3SWRQcm9vZnMgJiYgbmV3SWRQcm9vZnMubGVuZ3RoPjApe1xuXHRcdFx0XHRcdG5ld0lkUHJvb2ZzLm1hcCgobWVtX2lkLCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0bWVtYmVyX3JlZiA9IGBtZW1iZXJfJHttZW1faWR9X3VwbG9hZGBcblx0XHRcdFx0XHR9KVx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnNvbGUubG9nKG1lbWJlcl9yZWYpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGVFcnJvcnM6IHZhbGlkYXRpbmdFcnJvcnMsdmFsaWRhdGVPdGhlckVycm9yczogdmFsaWRhdGluZ090aGVyRXJyb3JzLHZhbGlkYXRpbmdOYW1lczppbnZhbGlkbmFtZSx2YWxpZGF0ZURvYkVycm9yczp2YWxpZGF0aW5nRG9iRXJyb3JzLGVycm9yTWVzc2FnZXM6ZXJyb3JNZXNzYWdlc09iaixlbmRvcnNlbWVudEVycm9yOm5ld0lkUHJvb2ZzfSlcblx0XHRpZihPYmplY3Qua2V5cyhlZGl0ZWRfZmllbGRzKS5sZW5ndGggPjAgfHwgdGhpcy5zdGF0ZS5lbWFpbFZlcmlmaWVkKXtcblx0ICAgIFx0aWYoaXNfZGlzYWJsZSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW1iZXJfcmVmKSl7ICAgIFx0XHRcblx0ICAgIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW1iZXJfcmVmKS5zY3JvbGxJbnRvVmlldygpO1xuXHQgICAgXHR9ZWxzZXtcblx0ICAgIFx0XHR0aGlzLlNhdmVVc2VyRGF0YSh0aGlzLnByb3BzLGVkaXRlZF9maWVsZHMpXG5cdCAgICBcdFx0aWYoU1RPUkFHRS5pc0FnZW50KCkpe1xuXHQgICAgXHRcdFx0aXNBZ2VudCA9IHRydWVcblx0ICAgIFx0XHR9XG5cdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaW5zdXJhbmNlL2luc3VyYW5jZS11c2VyLWRldGFpbHMtcmV2aWV3P2lzX2VuZG9yc2VtZW50PXRydWUmaXNBZ2VudD0ke2lzQWdlbnR9YClcblx0ICAgIFx0fVxuXHQgICAgfWVsc2V7XG5cdCAgICBcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgdXBkYXRlIHRoZSByZXF1aXJlZCBmaWVsZHMgdG8gcHJvY2VlZFwiIH0pO1xuXHQgICAgfVxuICAgIH1cblxuICAgIFNhdmVVc2VyRGF0YShwcm9wcyxlZGl0ZWRfZmllbGRzKXtcbiAgICBcdGxldCBzZWxmID0gdGhpc1xuICAgIFx0dmFyIGluc3VyYW5jZVVzZXJEYXRhPXt9XG4gICAgXHR2YXIgbWVtYmVycz17fVxuICAgIFx0aW5zdXJhbmNlVXNlckRhdGEubWVtYmVycz0gW11cbiAgICBcdGluc3VyYW5jZVVzZXJEYXRhLmVkaXRlZF9maWVsZHMgPSBlZGl0ZWRfZmllbGRzXG4gICAgXHRPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQpLm1hcChmdW5jdGlvbihba2V5LCB2YWx1ZV0pIHtcbiAgICBcdFx0bWVtYmVycz17fVxuXHRcdFx0bWVtYmVycz17Li4uc2VsZi5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3ZhbHVlW2tleV1dfVxuXHRcdFx0cmV0dXJuIFx0aW5zdXJhbmNlVXNlckRhdGEubWVtYmVycy5wdXNoKG1lbWJlcnMpXG5cdFx0fSlcblx0XHR0aGlzLnByb3BzLnB1c2hVc2VyRW5kb3JzZWREYXRhKGluc3VyYW5jZVVzZXJEYXRhKSAvLyB0byBzYXZlIHVzZXIgZW50ZXJlZCBkZXRhaWxzIGluIGR1bW15IHRhYmxlXG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXHRcdGxldCBjaGlsZFxuXHRcdGxldCBhZHVsdFxuXHRcdGxldCB1c2VyUHJvZmlsZVxuXHRcdGxldCBzcG91c2VfZGF0YVxuXHRcdGxldCBjaGlsZF9kYXRhID1bXVxuXHRcdGxldCBzZWxmX2RhdGFcblx0XHRsZXQgZmluZENoaWxkXG5cdFx0aWYodGhpcy5wcm9wcy5lbmRvcnNlRGF0YSAmJiB0aGlzLnByb3BzLmVuZG9yc2VEYXRhLm1lbWJlcnMubGVuZ3RoPjAgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLmxlbmd0aCA+MCl7XG5cdFx0XHRzZWxmX2RhdGEgPSB0aGlzLnByb3BzLmVuZG9yc2VkX21lbWJlcl9kYXRhLm1lbWJlcnMuZmlsdGVyKHg9PngucmVsYXRpb24gPT0nc2VsZicpXG5cdFx0XHRpZih0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYWR1bHRfY291bnQgPT0gMiAmJiB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubGVuZ3RoPjEpe1xuXHRcdFx0XHRzcG91c2VfZGF0YSA9IHRoaXMucHJvcHMuZW5kb3JzZWRfbWVtYmVyX2RhdGEubWVtYmVycy5maWx0ZXIoeD0+eC5yZWxhdGlvbiA9PSdzcG91c2UnKVxuXHRcdFx0XHRhZHVsdCA9IDxJbnN1ck90aGVycyB7Li4udGhpcy5wcm9wc30gXG5cdFx0XHRcdFx0XHRcdC8vIHNlbGZfZ2VuZGVyPXt1c2VyUHJvZmlsZS5nZW5kZXJ9IFxuXHRcdFx0XHRcdFx0XHRzZWxmX2dlbmRlcj0nbSdcblx0XHRcdFx0XHRcdFx0cGFyYW1faWQgPSB7JzEnfSBcblx0XHRcdFx0XHRcdFx0bWVtYmVyX2lkPXtzcG91c2VfZGF0YVswXS5pZH0gXG5cdFx0XHRcdFx0XHRcdGNoZWNrRm9yVmFsaWRhdGlvbiA9e3RoaXMuY2hlY2tGb3JWYWxpZGF0aW9uLmJpbmQodGhpcyl9IFxuXHRcdFx0XHRcdFx0XHRpZD17YG1lbWJlcl8kezB9YH0gXG5cdFx0XHRcdFx0XHRcdHZhbGlkYXRlRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3JzW3Nwb3VzZV9kYXRhWzBdLmlkXSB8fCBbXX0gXG5cdFx0XHRcdFx0XHRcdHZhbGlkYXRlT3RoZXJFcnJvcnM9e3RoaXMuc3RhdGUudmFsaWRhdGVPdGhlckVycm9yc1tzcG91c2VfZGF0YVswXS5pZF0gfHwgW119IFxuXHRcdFx0XHRcdFx0XHRjcmVhdGVBcGlFcnJvcnM9e3RoaXMuc3RhdGUuQ3JlYXRlQXBpRXJyb3JzLm1lbWJlcnM/dGhpcy5zdGF0ZS5DcmVhdGVBcGlFcnJvcnMubWVtYmVyc1sxXTpbXX1cblx0XHRcdFx0XHRcdFx0c2hvd19zZWxlY3RlZF9wcm9maWxlcz17dGhpcy5zdGF0ZS5zaG93X3NlbGVjdGVkX3Byb2ZpbGVzfSBcblx0XHRcdFx0XHRcdFx0dmFsaWRhdGVEb2JFcnJvcnM9e1tdfSBcblx0XHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlcz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfSBcblx0XHRcdFx0XHRcdFx0dmFsaWRhdGluZ05hbWVzPXt0aGlzLnN0YXRlLnZhbGlkYXRpbmdOYW1lc3x8W119XG5cdFx0XHRcdFx0XHRcdGlzX2VuZG9yc2VtZW50ID0ge3RydWV9XG5cdFx0XHRcdFx0XHRcdHVzZXJfZGF0YT17dGhpcy5wcm9wcy5lbmRvcnNlZF9tZW1iZXJfZGF0YS5tZW1iZXJzLmZpbHRlcih4PT54LnJlbGF0aW9uID09ICdzcG91c2UnKX1cblx0XHRcdFx0XHRcdFx0bWVtYmVyX3R5cGU9eydhZHVsdCd9XG5cdFx0XHRcdFx0XHRcdGVuZG9yc2VtZW50RXJyb3I9e3RoaXMuc3RhdGUuZW5kb3JzZW1lbnRFcnJvcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHR9XG5cdFx0XHR2YXIgbiA9ICh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uY2hpbGRfY291bnQpO1xuXHRcdFx0bGV0IGZpbmRDaGlsZCA9IHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZC5tYXAoKGRhdGEsIGkpID0+e1xuXHRcdFx0XHRcdGNoaWxkX2RhdGEgPSB0aGlzLnByb3BzLmVuZG9yc2VkX21lbWJlcl9kYXRhLm1lbWJlcnMuZmlsdGVyKHg9PngucmVsYXRpb24gIT0gJ3NlbGYnICYmIHgucmVsYXRpb24gIT0nc3BvdXNlJylcblx0XHRcdFx0fSlcblx0XHRcdGlmKG4gIT09IDApe1x0XG5cdFx0XHRcdGlmKGNoaWxkX2RhdGEgJiYgY2hpbGRfZGF0YS5sZW5ndGg+MCl7XG5cdFx0XHRcdGNoaWxkID0gY2hpbGRfZGF0YS5tYXAoKGRhdGEsIGkpID0+e1xuXHRcdFx0XHRcdHJldHVybiA8SW5zdXJPdGhlcnMgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRcdFx0XHRcdGtleT17aX0gXG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyX2lkPXtjaGlsZF9kYXRhW2ldLmlkfSBcblx0XHRcdFx0XHRcdFx0XHRjaGVja0ZvclZhbGlkYXRpb24gPXt0aGlzLmNoZWNrRm9yVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBcblx0XHRcdFx0XHRcdFx0XHRpc19jaGlsZF9vbmx5PXt0cnVlfSBcblx0XHRcdFx0XHRcdFx0XHRpZD17YG1lbWJlcl8ke2krMX1gfSBcblx0XHRcdFx0XHRcdFx0XHRwYXJhbV9pZCA9IHtpfSBcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJfdmlld19pZD0ge2krMX0gXG5cdFx0XHRcdFx0XHRcdFx0dmFsaWRhdGVFcnJvcnM9e3RoaXMuc3RhdGUudmFsaWRhdGVFcnJvcnNbY2hpbGRfZGF0YVtpXS5pZF0gfHwgW119IFxuXHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRlT3RoZXJFcnJvcnM9e1tdfSBcblx0XHRcdFx0XHRcdFx0XHRjcmVhdGVBcGlFcnJvcnNDaGlsZD17dGhpcy5zdGF0ZS5DcmVhdGVBcGlFcnJvcnMubWVtYmVycz90aGlzLnN0YXRlLkNyZWF0ZUFwaUVycm9ycy5tZW1iZXJzOltdfSBcblx0XHRcdFx0XHRcdFx0XHRzaG93X3NlbGVjdGVkX3Byb2ZpbGVzPXt0aGlzLnN0YXRlLnNob3dfc2VsZWN0ZWRfcHJvZmlsZXN9IFxuXHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRlRG9iRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlRG9iRXJyb3JzW2ldIHx8IFtdfSBcblx0XHRcdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZXN9IFxuXHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRpbmdOYW1lcz17dGhpcy5zdGF0ZS52YWxpZGF0aW5nTmFtZXN8fFtdfVxuXHRcdFx0XHRcdFx0XHRcdGlzX2VuZG9yc2VtZW50ID0ge3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0dXNlcl9kYXRhPXtbY2hpbGRfZGF0YVtpXV19XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyX3R5cGU9eydjaGlsZCd9XG5cdFx0XHRcdFx0XHRcdFx0ZW5kb3JzZW1lbnRFcnJvcj17dGhpcy5zdGF0ZS5lbmRvcnNlbWVudEVycm9yfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXHQgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfS8+IFxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGlucy1tYWluLXBhZGRpbmdcIj5cblx0XHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtYm9vay1zY3JlZW5cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cblx0XHRcdFx0XHRcdFx0XHR7Lyo8SW5zdXJDb21tb24gey4uLnRoaXMucHJvcHN9IGlzX2VkaXQ9e3RoaXMuc3RhdGUuaXNfZWRpdH0vPiovfVxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWNhcmQtaGVhZFwiIHN0eWxlPXt7J2p1c3RpZnlDb250ZW50JzogJ2VuZCcsJ2FsaWduSXRlbXMnOiAnZW5kJ319PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtbmFtZS1oZWFkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgd2lkdGg9XCIxMjBcIiBzcmM9e3RoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0ubG9nb30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtcGRmLWR3bmxvYWRcIiBzdHlsZT17eydtYXJnaW5MZWZ0JzonMTJweCd9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0T1BEIEluc3VyYW5jZSBieSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+QXBvbGxvIE11bmljaDwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnN1cmFuY2UtbWVtYmVyLWNvbnRhaW5lclwiIHN0eWxlPXt7cGFkZGluZzogJzEwcHgnfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwbGN5LWNhbmNlbFwiPipJbmNvcnJlY3QgbWVtYmVyIGRldGFpbHMgbWF5IGxlYWQgdG8gcG9saWN5IGNhbmNlbGxhdGlvbjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJtYi0wXCI+SW5zdXJlZCBNZW1iZXIgRGV0YWlsczwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmaWxsLWVycm9yLXNwYW4gZnctNTAwIHRleHQtcmlnaHQgZC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luVG9wOicwcHgnLCBmb250U2l6ZTogJzExcHgnfX0+KkFsbCBmaWVsZHMgYXJlIG1hbmRhdG9yeVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnN1cmFuY2UtbWVtYmVyLWRldGFpbHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEluc3VyU2VsZiB7Li4udGhpcy5wcm9wc30gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tGb3JWYWxpZGF0aW9uID17dGhpcy5jaGVja0ZvclZhbGlkYXRpb24uYmluZCh0aGlzKX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2BtZW1iZXJfJHt0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWRbMF1bJzAnXX1gfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZW1iZXJfaWQ9e3NlbGZfZGF0YVswXS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZUVycm9ycz17dGhpcy5zdGF0ZS52YWxpZGF0ZUVycm9yc1tzZWxmX2RhdGFbMF0uaWRdIHx8IFtdfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZU90aGVyRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlT3RoZXJFcnJvcnNbc2VsZl9kYXRhWzBdLmlkXSB8fCBbXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjcmVhdGVBcGlFcnJvcnM9e3RoaXMuc3RhdGUuQ3JlYXRlQXBpRXJyb3JzLm1lbWJlcnM/dGhpcy5zdGF0ZS5DcmVhdGVBcGlFcnJvcnMubWVtYmVyc1swXTpbXX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlcz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc19lbmRvcnNlbWVudCA9IHt0cnVlfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1c2VyX2RhdGE9e3RoaXMucHJvcHMuZW5kb3JzZWRfbWVtYmVyX2RhdGEubWVtYmVycy5maWx0ZXIoeD0+eC5yZWxhdGlvbiA9PSAnc2VsZicpfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZW1iZXJfdHlwZT17J2FkdWx0J31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbmRvcnNlbWVudEVycm9yPXt0aGlzLnN0YXRlLmVuZG9yc2VtZW50RXJyb3J9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tJc0VtYWlsVmVyZmllZCA9IHt0aGlzLmNoZWNrSXNFbWFpbFZlcmZpZWQuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e2FkdWx0fVxuXHRcdFx0XHRcdFx0XHR7Y2hpbGR9XG5cdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XHRcdFxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGlja3ktYnRuXCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMpfT5VcGRhdGVcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8Q2hhdFBhbmVsIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIDxkaXY+PC9kaXY+XG5cdFx0fVxuXHR9XG5cdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluc3VyYW5jZUVuZG9yZXNtZW50SW5wdXRWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcblxuaW1wb3J0IHsgdXNlckRhdGEsc2VsZWN0SW5zdXJhbmNlUHJvZmlsZSwgc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnMsIHB1c2hVc2VyRGF0YSwgcmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnMsIGdldEluc3VyYW5jZSwgZ2V0RW5kb3JzZWRNZW1iZXJMaXN0LCBwdXNoVXNlckVuZG9yc2VkRGF0YSwgc2VsZWN0SW5zdXJhbmNlUGxhbiwgdXBsb2FkUHJvb2YsIHN0b3JlTWVtYmVyUHJvb2ZzLCByZW1vdmVNZW1iZXJQcm9vZiwgc3VibWl0RW1haWxPVFAsIHNlbmRPdHBPbkVtYWlsfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IEluc3VyYW5jZUNvbXBvbmVudFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlRW5kb3JzZW1lbnREZXRhaWxzVmlldy5qcydcblxuY2xhc3MgSW5zdXJhbmNlRW5kb3JzZW1lbnREZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW5zdXJhbmNlX2RhdGE6bnVsbCxcbiAgICAgICAgICAgIG1lbWJlcnNfZGF0YTpudWxsICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRFbmRvcnNlZE1lbWJlckxpc3QoKG1lbV9yZXNwKT0+eyAvLyB0byBnZXQgdGhlIGxpc3Qgb2YgbWVtYmVycyB3aGljaCBhcmUgYWxsb3dlZCBmb3IgZW5kb3JzZW1lbnRcbiAgICAgICAgICAgIGlmKG1lbV9yZXNwKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldEluc3VyYW5jZSh0cnVlLChyZXNwKT0+eyAvLyB0byBnZXQgaW5zdXJhbmNlIHBsYW5zXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3AgJiYgcmVzcC5pbnN1cmFuY2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW4gPSByZXNwLmluc3VyYW5jZVswXS5wbGFucy5maWx0ZXIoeD0+eC5pZCA9PSBtZW1fcmVzcC5pbnN1cmFuY2VfcGxhbilbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0SW5zdXJhbmNlUGxhbigncGxhbicsIHBsYW4pIC8vIHRvIHN0b3JlIHNlbGVjdGVkIHBsYW4gYnkgdXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVtYmVyc19kYXRhOm1lbV9yZXNwICwgaW5zdXJhbmNlX2RhdGE6cmVzcH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSBcbiAgICB9XG5cdHJlbmRlcigpe1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubWVtYmVyc19kYXRhICYmIHRoaXMuc3RhdGUuaW5zdXJhbmNlX2RhdGEpe1xuICAgIFx0XHRyZXR1cm4oXG4gICAgXHRcdFx0PEluc3VyYW5jZUNvbXBvbmVudFZpZXcgey4uLnRoaXMucHJvcHN9IGVuZG9yc2VEYXRhPXt0aGlzLnN0YXRlLm1lbWJlcnNfZGF0YX0vPlxuICAgIFx0XHQpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA4MCB9fSA+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExvYWRlci8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgaW5zdXJuYWNlRGF0YSwgTE9BRF9JTlNVUkFOQ0UsIHNlbGVjdGVkX3BsYW4sc2VsZl9kYXRhX3ZhbHVlcyxzYXZlQ3VycmVudFNlbGVjdGVkTWVtYmVycyxzZWxlY3RlZFByb2ZpbGUsIGN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQsY3JlYXRlX3BheW1lbnRfcmVzcCwgZW5kb3JzZWRfbWVtYmVyX2RhdGEsIG1lbWJlcnNfcHJvb2ZzfSA9IHN0YXRlLklOU1VSQU5DRVxuICAgIHJldHVybiB7XG4gICAgICAgIGluc3VybmFjZURhdGEsTE9BRF9JTlNVUkFOQ0Usc2VsZWN0ZWRfcGxhbixVU0VSLHNlbGZfZGF0YV92YWx1ZXMsc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnMsc2VsZWN0ZWRQcm9maWxlLCBjdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLCBjcmVhdGVfcGF5bWVudF9yZXNwLCBlbmRvcnNlZF9tZW1iZXJfZGF0YSwgbWVtYmVyc19wcm9vZnNcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEluc3VyYW5jZTogKGlzX2VuZG9yc2VtZW50LGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRJbnN1cmFuY2UoaXNfZW5kb3JzZW1lbnQsY2FsbGJhY2spKSxcbiAgICAgICAgdXNlckRhdGEgOihzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpID0+IGRpc3BhdGNoKHVzZXJEYXRhKHNlbGZfZGF0YSxjcml0ZXJpYSxmb3JjZWFkZCkpLFxuICAgICAgICBzZWxlY3RJbnN1cmFuY2VQcm9maWxlIDoobmV3UHJvZmlsZWlkLG1lbWJlcl9pZCxuZXdQcm9maWxlLHBhcmFtX2lkKSA9PiBkaXNwYXRjaChzZWxlY3RJbnN1cmFuY2VQcm9maWxlKG5ld1Byb2ZpbGVpZCxtZW1iZXJfaWQsbmV3UHJvZmlsZSxwYXJhbV9pZCkpLFxuICAgICAgICBzYXZlQ3VycmVudFNlbGVjdGVkTWVtYmVyczogKG1lbWJlcnNJZCkgPT4gZGlzcGF0Y2goc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnMobWVtYmVyc0lkKSksXG4gICAgICAgIHB1c2hVc2VyRGF0YSA6KGNyaXRlcmlhLGNhbGxiYWNrKSA9PiBkaXNwYXRjaChwdXNoVXNlckRhdGEoY3JpdGVyaWEsY2FsbGJhY2spKSxcbiAgICAgICAgcmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnM6ICgpID0+IGRpc3BhdGNoKHJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzKCkpLFxuICAgICAgICBnZXRFbmRvcnNlZE1lbWJlckxpc3Q6KGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRFbmRvcnNlZE1lbWJlckxpc3QoY2FsbGJhY2spKSxcbiAgICAgICAgcHVzaFVzZXJFbmRvcnNlZERhdGEgOihjcml0ZXJpYSxjYWxsYmFjaykgPT4gZGlzcGF0Y2gocHVzaFVzZXJFbmRvcnNlZERhdGEoY3JpdGVyaWEsY2FsbGJhY2spKSxcbiAgICAgICAgc2VsZWN0SW5zdXJhbmNlUGxhbjogKHBsYW4sY3JpdGVyaWEpID0+IGRpc3BhdGNoKHNlbGVjdEluc3VyYW5jZVBsYW4ocGxhbixjcml0ZXJpYSkpLCAgICAgICAgXG4gICAgICAgIHVwbG9hZFByb29mOihwcm9maWxlRGF0YSwgcHJvZmlsZUlkLGltZ1R5cGUsIGNiKSA9PmRpc3BhdGNoKHVwbG9hZFByb29mKHByb2ZpbGVEYXRhLCBwcm9maWxlSWQsaW1nVHlwZSwgY2IpKSxcbiAgICAgICAgc3RvcmVNZW1iZXJQcm9vZnM6KGltZ1VybCxjYik9PmRpc3BhdGNoKHN0b3JlTWVtYmVyUHJvb2ZzKGltZ1VybCxjYikpLFxuICAgICAgICByZW1vdmVNZW1iZXJQcm9vZjooY3JpdGVyaWEpPT5kaXNwYXRjaChyZW1vdmVNZW1iZXJQcm9vZihjcml0ZXJpYSkpLFxuICAgICAgICBzZW5kT3RwT25FbWFpbDooY3JpdGVyaWEsY2FsbGJhY2spPT5kaXNwYXRjaChzZW5kT3RwT25FbWFpbChjcml0ZXJpYSxjYWxsYmFjaykpLFxuICAgICAgICBzdWJtaXRFbWFpbE9UUDogKGRhdGEsIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRFbWFpbE9UUChkYXRhLCBjYikpLFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbnN1cmFuY2VFbmRvcnNlbWVudERldGFpbHMpIl0sInNvdXJjZVJvb3QiOiIifQ==