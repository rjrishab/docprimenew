(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[140],{

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceInputView = function (_React$Component) {
	_inherits(InsuranceInputView, _React$Component);

	function InsuranceInputView(props) {
		_classCallCheck(this, InsuranceInputView);

		var _this = _possibleConstructorReturn(this, (InsuranceInputView.__proto__ || Object.getPrototypeOf(InsuranceInputView)).call(this, props));

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
			endorsementError: []
		};
		return _this;
	}

	_createClass(InsuranceInputView, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var self = this;
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
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			var card = void 0;
			var self = this;
			var isDummyUser = void 0;
			if (!this.state.saveMembers && Object.keys(props.selected_plan).length > 0 && props.USER.defaultProfile && !props.currentSelectedInsuredMembersId.length) {
				// let loginUser = props.USER.selectedProfile
				var loginUser = props.USER.defaultProfile;
				var membersId = [];
				var isDefaultUser = void 0;
				if (props.USER.profiles && Object.keys(props.USER.profiles).length && props.USER.profiles[props.USER.defaultProfile]) {
					isDefaultUser = props.USER.profiles[props.USER.defaultProfile].is_default_user;
				}
				isDummyUser = props.USER.profiles[props.USER.defaultProfile].isDummyUser;
				if (!isDummyUser) {
					membersId.push({ '0': loginUser, type: 'self' });
					var n = props.selected_plan.adult_count + props.selected_plan.child_count - 1;
					card = [].concat(_toConsumableArray(Array(props.selected_plan.adult_count - 1))).map(function (e, i) {
						var _membersId$push;

						membersId.push((_membersId$push = {}, _defineProperty(_membersId$push, i + 1, i + 1), _defineProperty(_membersId$push, 'type', 'adult'), _membersId$push));
					});

					card = [].concat(_toConsumableArray(Array(props.selected_plan.child_count))).map(function (e, i) {
						if (props.selected_plan.adult_count > 1) {
							var _membersId$push2;

							membersId.push((_membersId$push2 = {}, _defineProperty(_membersId$push2, i + 2, i + 2), _defineProperty(_membersId$push2, 'type', 'child'), _membersId$push2));
						} else {
							var _membersId$push3;

							membersId.push((_membersId$push3 = {}, _defineProperty(_membersId$push3, i + 1, i + 1), _defineProperty(_membersId$push3, 'type', 'child'), _membersId$push3));
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
					card = [].concat(_toConsumableArray(Array(props.selected_plan.adult_count - 1))).map(function (e, i) {
						var _membersId$push4;

						membersId.push((_membersId$push4 = {}, _defineProperty(_membersId$push4, i + 1, i + 1), _defineProperty(_membersId$push4, 'type', 'adult'), _membersId$push4));
					});

					card = [].concat(_toConsumableArray(Array(props.selected_plan.child_count))).map(function (e, i) {
						if (props.selected_plan.adult_count > 1) {
							var _membersId$push5;

							membersId.push((_membersId$push5 = {}, _defineProperty(_membersId$push5, i + 2, i + 2), _defineProperty(_membersId$push5, 'type', 'child'), _membersId$push5));
						} else {
							var _membersId$push6;

							membersId.push((_membersId$push6 = {}, _defineProperty(_membersId$push6, i + 1, i + 1), _defineProperty(_membersId$push6, 'type', 'child'), _membersId$push6));
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
			var profileLength = Object.keys(props.USER.profiles).length;
			var currentSelectedProfiles = [];
			var show_selected_profile = [];
			this.props.currentSelectedInsuredMembersId.map(function (val, key) {
				currentSelectedProfiles.push(val[key]);
			});
			if (profileLength > 0) {
				if (!props.USER.profiles[props.USER.defaultProfile].isDummyUser) {
					{
						Object.entries(props.USER.profiles).map(function (_ref) {
							var _ref2 = _slicedToArray(_ref, 2),
							    key = _ref2[0],
							    value = _ref2[1];

							if (currentSelectedProfiles.indexOf(parseInt(key)) == -1 && key !== props.USER.defaultProfile) {
								show_selected_profile.push(key);
							}
						});
					}
					self.setState({ show_selected_profiles: show_selected_profile });
				}
			}
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
			if (Object.keys(this.props.self_data_values).length > 0) {
				isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
				if (!isDummyUser) {
					self_profile = Object.assign({}, this.props.self_data_values[this.props.USER.defaultProfile]);
				} else {
					self_profile = Object.assign({}, this.props.self_data_values[0]);
				}
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
			Object.entries(validatingName).map(function (_ref3) {
				var _ref4 = _slicedToArray(_ref3, 2),
				    key = _ref4[0],
				    value = _ref4[1];

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
			this.setState({ validateErrors: validatingErrors, validateOtherErrors: validatingOtherErrors, validatingNames: invalidname, validateDobErrors: validatingDobErrors, errorMessages: errorMessagesObj });
			if (is_disable && document.getElementById(member_ref)) {
				document.getElementById(member_ref).scrollIntoView();
			} else {
				this.SaveUserData(this.props); // to save user entered details
				this.props.history.push('/insurance/insurance-user-details-review');
			}
		}
	}, {
		key: 'SaveUserData',
		value: function SaveUserData(props) {
			var self = this;
			var insuranceUserData = {};
			var members = {};
			// insuranceUserData.insurnaceData = props.insurnaceData
			insuranceUserData.selected_plan_id = props.selected_plan.id;
			// insuranceUserData.insurer= props.insurnaceData['insurance'][0].id
			insuranceUserData.members = [];
			// insuranceUserData.selected_plan = []
			insuranceUserData.currentSelectedInsuredMembersId = this.props.currentSelectedInsuredMembersId;

			Object.entries(this.props.currentSelectedInsuredMembersId).map(function (_ref5) {
				var _ref6 = _slicedToArray(_ref5, 2),
				    key = _ref6[0],
				    value = _ref6[1];

				members = {};
				members = _extends({}, self.props.self_data_values[value[key]]);
				return insuranceUserData.members.push(members);
			});
			this.props.pushUserData(insuranceUserData); // to save user entered details in dummy table
		}
	}, {
		key: 'checkIsEmailVerfied',
		value: function checkIsEmailVerfied() {}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var child = void 0;
			var adult = void 0;
			var userProfile = void 0;
			var selectedProfileId = parseInt(this.props.USER.defaultProfile);
			var selectedMembersId = 0;
			if (Object.keys(this.props.selected_plan).length > 0) {

				userProfile = Object.assign({}, this.props.USER.profiles[this.props.USER.defaultProfile]);

				var adult_count_api = this.props.selected_plan.adult_count - 1;
				if (adult_count_api !== 0 && this.props.currentSelectedInsuredMembersId.length > 1) {
					selectedMembersId++;
					adult = this.props.currentSelectedInsuredMembersId.filter(function (x) {
						return x.type === 'adult';
					}).map(function (data, i) {
						return _react2.default.createElement(_insuranceFamily2.default, _extends({}, _this3.props, {
							self_gender: userProfile.gender,
							param_id: selectedMembersId,
							member_id: data[selectedMembersId],
							checkForValidation: _this3.checkForValidation.bind(_this3),
							id: 'member_' + selectedMembersId,
							validateErrors: _this3.state.validateErrors[data[selectedMembersId]] || [],
							validateOtherErrors: _this3.state.validateOtherErrors[data[selectedMembersId]] || [],
							createApiErrors: _this3.state.CreateApiErrors.members ? _this3.state.CreateApiErrors.members[i + 1] : [],
							show_selected_profiles: _this3.state.show_selected_profiles,
							validateDobErrors: [],
							errorMessages: _this3.state.errorMessages,
							validatingNames: _this3.state.validatingNames || [],
							is_endorsement: false,
							endorsementError: _this3.state.endorsementError,
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
					child = this.props.currentSelectedInsuredMembersId.filter(function (x) {
						return x.type === 'child';
					}).map(function (data, i) {
						selectedMembersId++;
						return _react2.default.createElement(_insuranceFamily2.default, _extends({}, _this3.props, {
							key: i,
							member_id: data[selectedMembersId],
							checkForValidation: _this3.checkForValidation.bind(_this3),
							is_child_only: true,
							id: 'member_' + selectedMembersId,
							param_id: selectedMembersId,
							member_view_id: selectedMembersId,
							validateErrors: _this3.state.validateErrors[data[selectedMembersId]] || [],
							validateOtherErrors: [],
							createApiErrorsChild: _this3.state.CreateApiErrors.members ? _this3.state.CreateApiErrors.members : [],
							show_selected_profiles: _this3.state.show_selected_profiles,
							validateDobErrors: _this3.state.validateDobErrors[data[selectedMembersId]] || [],
							errorMessages: _this3.state.errorMessages,
							validatingNames: _this3.state.validatingNames || [],
							is_endorsement: false,
							endorsementError: _this3.state.endorsementError,
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
													id: 'member_' + this.props.USER.defaultProfile,
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
	}]);

	return InsuranceInputView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _insuranceDetailsView = __webpack_require__(/*! ../../components/insurance/insuranceDetailsView.js */ "./dev/js/components/insurance/insuranceDetailsView.js");

var _insuranceDetailsView2 = _interopRequireDefault(_insuranceDetailsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceDetails = function (_React$Component) {
    _inherits(InsuranceDetails, _React$Component);

    function InsuranceDetails() {
        _classCallCheck(this, InsuranceDetails);

        return _possibleConstructorReturn(this, (InsuranceDetails.__proto__ || Object.getPrototypeOf(InsuranceDetails)).apply(this, arguments));
    }

    _createClass(InsuranceDetails, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //this.props.getUserProfile()
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_insuranceDetailsView2.default, this.props);
        }
    }]);

    return InsuranceDetails;
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
        // getInsurance: (insuranceId) => dispatch(getInsurance(insuranceId)),
        // getUserProfile: () => dispatch(getUserProfile()),
        // selectInsurancePlan: (plan,criteria,forceadd) => dispatch(selectInsurancePlan(plan,criteria,forceadd)),
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
        submitEmailOTP: function submitEmailOTP(data, cb) {
            return dispatch((0, _index.submitEmailOTP)(data, cb));
        },
        sendOtpOnEmail: function sendOtpOnEmail(criteria, callback) {
            return dispatch((0, _index.sendOtpOnEmail)(criteria, callback));
        }
        // resetSelectedInsuranceMembers: () => dispatch(resetSelectedInsuranceMembers())
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceDetails);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlRGV0YWlsc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvaW5zdXJhbmNlL0luc3VyYW5jZURldGFpbHMuanMiXSwibmFtZXMiOlsiSW5zdXJhbmNlSW5wdXRWaWV3IiwicHJvcHMiLCJzdGF0ZSIsIm5vX2xuYW1lIiwiaXNfZWRpdCIsImdzdCIsImVuYWJsZV9wcm9jZWVkIiwicHJvZmlsZXNfc2VsZWN0ZWQiLCJzYXZlTWVtYmVycyIsImlzX2Rpc2FibGUiLCJ2YWxpZGF0ZUVycm9ycyIsInZhbGlkYXRlT3RoZXJFcnJvcnMiLCJ2YWxpZGF0aW5nTmFtZXMiLCJDcmVhdGVBcGlFcnJvcnMiLCJzaG93X3NlbGVjdGVkX3Byb2ZpbGVzIiwidmFsaWRhdGVEb2JFcnJvcnMiLCJlcnJvck1lc3NhZ2VzIiwiZW5kb3JzZW1lbnRFcnJvciIsInNlbGYiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNldFN0YXRlIiwic2VsZl9kYXRhX3ZhbHVlcyIsInNlbGVjdGVkX3BsYW5fcHJpY2UiLCJzZWxlY3RlZF9wbGFuIiwiYW1vdW50IiwiY3JlYXRlX3BheW1lbnRfcmVzcCIsIm1lbWJlcnMiLCJsZW5ndGgiLCJjYXJkIiwiaXNEdW1teVVzZXIiLCJPYmplY3QiLCJrZXlzIiwiVVNFUiIsImRlZmF1bHRQcm9maWxlIiwiY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZCIsImxvZ2luVXNlciIsIm1lbWJlcnNJZCIsImlzRGVmYXVsdFVzZXIiLCJwcm9maWxlcyIsImlzX2RlZmF1bHRfdXNlciIsInB1c2giLCJ0eXBlIiwibiIsImFkdWx0X2NvdW50IiwiY2hpbGRfY291bnQiLCJBcnJheSIsIm1hcCIsImUiLCJpIiwic2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnMiLCJwcm9maWxlTGVuZ3RoIiwiY3VycmVudFNlbGVjdGVkUHJvZmlsZXMiLCJzaG93X3NlbGVjdGVkX3Byb2ZpbGUiLCJ2YWwiLCJrZXkiLCJlbnRyaWVzIiwidmFsdWUiLCJpbmRleE9mIiwicGFyc2VJbnQiLCJwcm9maWxlX2RhdGEiLCJtZW1iZXJfaWQiLCJmaWx0ZXIiLCJ4IiwiaWQiLCJpc19lbmFibGUiLCJpc2Zvcm1Db21wbGV0ZWQiLCJtZW1iZXJfcmVmIiwiZW1wdHlfZmVpbGRzIiwiZmllbGRzX25hbWUiLCJmaWVsZHNfbmFtZV9vYmoiLCJlcnJvck1lc3NhZ2VzT2JqIiwic2VsZl9wcm9maWxlIiwic2VsZl9hZ2UiLCJhZHVsdDJhZ2UiLCJ2YWxpZGF0aW5nRXJyb3JzIiwidmFsaWRhdGluZ0RvYkVycm9ycyIsInZhbGlkYXRpbmdOYW1lIiwidmFsaWRhdGluZ090aGVyRXJyb3JzIiwiaW52YWxpZG5hbWUiLCJmdWxsbmFtZSIsImZ1bGxuYW1lT2JqIiwiYXNzaWduIiwiZmllbGRzIiwiZG9iRXJyb3IiLCJwYXJhbSIsInRpdGxlIiwicmVsYXRpb24iLCJuYW1lIiwiZ2VuZGVyIiwiZG9iIiwibGFzdF9uYW1lIiwicGluY29kZSIsImFkZHJlc3MiLCJzdGF0ZV9jb2RlIiwidG93biIsInRvd25fY29kZSIsImRpc3RyaWN0IiwiZW1haWwiLCJ2YWxpZEVtYWlsIiwidGVzdCIsIm1lbWJlcl90eXBlIiwib25seV9hZHVsdCIsInRvZGF5IiwiRGF0ZSIsImJpcnRoRGF0ZSIsImFnZSIsImdldEZ1bGxZZWFyIiwibSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInRocmVzaG9sZCIsIm1pbl9hZ2UiLCJtYXhfYWdlIiwiY2hpbGRBZ2UiLCJvbmVEYXkiLCJmaXJzdERhdGUiLCJzZWNvbmREYXRlIiwiZGlmZkRheXMiLCJNYXRoIiwicm91bmQiLCJhYnMiLCJnZXRUaW1lIiwibWluQWdlT2ZBZHVsdHMiLCJtaW4iLCJhZHVsdENoaWxkQWdlRGlmZiIsImNoaWxkX2FnZSIsImNoaWxkX21pbl9hZ2UiLCJjaGlsZF9tYXhfYWdlIiwiY29tbW9uX21lc3NhZ2UiLCJtYXhfY2hhcmFjdGVyIiwidmFsaWRfZW1haWwiLCJhZHVsdF9hZ2UiLCJzYW1lR2VuZGVyVGl0bGUiLCJzaG91bGRHZW5kZXJUaXRsZSIsImNoaWxkQWdlRGlmZiIsIm1pZGRsZV9uYW1lIiwiZk5hbWUiLCJ0b0xvd2VyQ2FzZSIsIm5ld0FycmF5IiwiQXJyYXlGbGFnIiwic2FtZU5hbWUiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIlNhdmVVc2VyRGF0YSIsImhpc3RvcnkiLCJpbnN1cmFuY2VVc2VyRGF0YSIsInNlbGVjdGVkX3BsYW5faWQiLCJwdXNoVXNlckRhdGEiLCJjaGlsZCIsImFkdWx0IiwidXNlclByb2ZpbGUiLCJzZWxlY3RlZFByb2ZpbGVJZCIsInNlbGVjdGVkTWVtYmVyc0lkIiwiYWR1bHRfY291bnRfYXBpIiwiZGF0YSIsImNoZWNrRm9yVmFsaWRhdGlvbiIsImJpbmQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJjb2xvciIsIm1hcmdpblRvcCIsInBhZGRpbmdMZWZ0IiwiY2hlY2tJc0VtYWlsVmVyZmllZCIsInByb2NlZWRQbGFuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJJbnN1cmFuY2VEZXRhaWxzIiwibWFwU3RhdGVUb1Byb3BzIiwiSU5TVVJBTkNFIiwiaW5zdXJuYWNlRGF0YSIsIkxPQURfSU5TVVJBTkNFIiwic2VsZWN0ZWRQcm9maWxlIiwiZW5kb3JzZWRfbWVtYmVyX2RhdGEiLCJtZW1iZXJzX3Byb29mcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidXNlckRhdGEiLCJzZWxmX2RhdGEiLCJjcml0ZXJpYSIsImZvcmNlYWRkIiwic2VsZWN0SW5zdXJhbmNlUHJvZmlsZSIsIm5ld1Byb2ZpbGVpZCIsIm5ld1Byb2ZpbGUiLCJwYXJhbV9pZCIsImNhbGxiYWNrIiwicmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnMiLCJzdWJtaXRFbWFpbE9UUCIsImNiIiwic2VuZE90cE9uRW1haWwiXSwi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LEVBQXFCaUMsRUFBckIsQ0FBVCxDQUFkO0FBQUEsU0FUYjtBQVVIQyx3QkFBZSx3QkFBQ1YsUUFBRCxFQUFVTSxRQUFWO0FBQUEsbUJBQXFCVCxTQUFTLDJCQUFlRyxRQUFmLEVBQXdCTSxRQUF4QixDQUFULENBQXJCO0FBQUE7QUFDZjtBQVhHLEtBQVA7QUFhSCxDQWREOztrQkFrQmUseUJBQVFqQixlQUFSLEVBQTBCTyxrQkFBMUIsRUFBOENSLGdCQUE5QyxDIiwiZmlsZSI6IjE0MC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENoYXRQYW5lbCBmcm9tICcuLi9jb21tb25zL0NoYXRQYW5lbCdcbmltcG9ydCBJbnN1clNlbGYgZnJvbSAnLi9pbnN1cmFuY2VTZWxmLmpzJ1xuaW1wb3J0IEluc3VyT3RoZXJzIGZyb20gJy4vaW5zdXJhbmNlRmFtaWx5LmpzJ1xuaW1wb3J0IEluc3VyQ29tbW9uIGZyb20gJy4vaW5zdXJhbmNlQ29tbW9uU2VjdGlvbi5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBJbnN1cmFuY2VJbnB1dFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLy8gc2VsZWN0ZWRfcGxhbl9wbGFuOicnLFxuICAgICAgICAgICAgbm9fbG5hbWU6ZmFsc2UsXG4gICAgICAgICAgICBpc19lZGl0OnRydWUsXG4gICAgICAgICAgICBnc3Q6ICdpbmNsdXNpdmUgb2YgMTglIEdTVCcsXG4gICAgICAgICAgICBlbmFibGVfcHJvY2VlZDpmYWxzZSxcbiAgICAgICAgICAgIHByb2ZpbGVzX3NlbGVjdGVkOltdLFxuICAgICAgICAgICAgc2F2ZU1lbWJlcnM6ZmFsc2UsXG4gICAgICAgICAgICAvLyBpc19hZHVsdF9vbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIGlzX2Rpc2FibGU6IFtdLFxuICAgICAgICAgICAgLy8gaXNWYWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVFcnJvcnM6e30sXG4gICAgICAgICAgICB2YWxpZGF0ZU90aGVyRXJyb3JzOnt9LFxuICAgICAgICAgICAgdmFsaWRhdGluZ05hbWVzOltdLFxuICAgICAgICAgICAgQ3JlYXRlQXBpRXJyb3JzOnt9LFxuICAgICAgICAgICAgc2hvd19zZWxlY3RlZF9wcm9maWxlczpbXSxcbiAgICAgICAgICAgIHZhbGlkYXRlRG9iRXJyb3JzOltdLFxuICAgICAgICAgICBcdGVycm9yTWVzc2FnZXM6W10sXG4gICAgICAgICAgIFx0ZW5kb3JzZW1lbnRFcnJvcjpbXVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgXHRsZXQgc2VsZiA9IHRoaXNcbiAgICBcdGlmKHdpbmRvdyl7XG4gICAgXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApXG4gICAgXHR9XG4gICAgXHR0aGlzLnNldFN0YXRlKHsuLi5zZWxmLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMsIHNlbGVjdGVkX3BsYW5fcHJpY2U6dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmFtb3VudH0pXG4gICAgXHRpZih0aGlzLnByb3BzLmNyZWF0ZV9wYXltZW50X3Jlc3Ape1xuICAgIFx0XHRpZih0aGlzLnByb3BzLmNyZWF0ZV9wYXltZW50X3Jlc3AubWVtYmVycyAmJiB0aGlzLnByb3BzLmNyZWF0ZV9wYXltZW50X3Jlc3AubWVtYmVycy5sZW5ndGggPjApe1xuICAgIFx0XHRcdHRoaXMuc2V0U3RhdGUoe0NyZWF0ZUFwaUVycm9yczpzZWxmLnByb3BzLmNyZWF0ZV9wYXltZW50X3Jlc3B9KVx0XG4gICAgXHRcdH1cbiAgICBcdFx0XG4gICAgXHR9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcyl7XG4gICAgXHRsZXQgY2FyZFxuICAgIFx0bGV0IHNlbGYgPSB0aGlzXG4gICAgXHRsZXQgaXNEdW1teVVzZXJcbiAgICBcdGlmKCF0aGlzLnN0YXRlLnNhdmVNZW1iZXJzICYmIE9iamVjdC5rZXlzKHByb3BzLnNlbGVjdGVkX3BsYW4pLmxlbmd0aCA+MCAmJiBwcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlICYmICFwcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLmxlbmd0aCl7XG4gICAgXHRcdC8vIGxldCBsb2dpblVzZXIgPSBwcm9wcy5VU0VSLnNlbGVjdGVkUHJvZmlsZVxuICAgIFx0XHRsZXQgbG9naW5Vc2VyID0gcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZVxuICAgIFx0XHRsZXQgbWVtYmVyc0lkID0gW11cbiAgICBcdFx0bGV0IGlzRGVmYXVsdFVzZXJcbiAgICBcdFx0aWYocHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyhwcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggJiYgcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSl7XG4gICAgXHRcdFx0aXNEZWZhdWx0VXNlciA9IHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNfZGVmYXVsdF91c2VyXG4gICAgXHRcdH1cbiAgICBcdFx0aXNEdW1teVVzZXIgPSBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzRHVtbXlVc2VyXG4gICAgXHRcdGlmKCFpc0R1bW15VXNlcil7XG5cdCAgICBcdFx0bWVtYmVyc0lkLnB1c2goeycwJzpsb2dpblVzZXIsIHR5cGU6ICdzZWxmJ30pXG5cdCAgICBcdFx0dmFyIG4gPSAocHJvcHMuc2VsZWN0ZWRfcGxhbi5hZHVsdF9jb3VudCArIHByb3BzLnNlbGVjdGVkX3BsYW4uY2hpbGRfY291bnQpIC0gMTtcblx0ICAgIFx0XHRjYXJkID0gWy4uLkFycmF5KHByb3BzLnNlbGVjdGVkX3BsYW4uYWR1bHRfY291bnQtMSldLm1hcCgoZSwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0bWVtYmVyc0lkLnB1c2goe1tpKzFdOiBpKzEsIHR5cGU6J2FkdWx0J30pXG5cdFx0XHRcdFx0fSlcblxuXHQgICAgXHRcdGNhcmQgPSBbLi4uQXJyYXkocHJvcHMuc2VsZWN0ZWRfcGxhbi5jaGlsZF9jb3VudCldLm1hcCgoZSwgaSkgPT4ge1xuXHQgICAgXHRcdFx0XHRpZihwcm9wcy5zZWxlY3RlZF9wbGFuLmFkdWx0X2NvdW50ID4xKXtcblx0ICAgIFx0XHRcdFx0XHRtZW1iZXJzSWQucHVzaCh7W2krMl06IGkrMiwgdHlwZTonY2hpbGQnfSlcblx0ICAgIFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHtbaSsxXTogaSsxLCB0eXBlOidjaGlsZCd9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG4vKlxuXHRcdFx0XHRpZihuICE9PSAwKXtcblx0XHRcdFx0XHRjYXJkID0gWy4uLkFycmF5KG4pXS5tYXAoKGUsIGkpID0+IHtcblx0XHRcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHtbaSsxXTogaSsxLCB0eXBlOicnfSlcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9Ki9cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRtZW1iZXJzSWQucHVzaCh7JzAnOjAsIHR5cGU6J3NlbGYnfSlcblx0XHRcdFx0dmFyIG4gPSAocHJvcHMuc2VsZWN0ZWRfcGxhbi5hZHVsdF9jb3VudCArIHByb3BzLnNlbGVjdGVkX3BsYW4uY2hpbGRfY291bnQpIC0gMTtcblx0XHRcdFx0Y2FyZCA9IFsuLi5BcnJheShwcm9wcy5zZWxlY3RlZF9wbGFuLmFkdWx0X2NvdW50LTEpXS5tYXAoKGUsIGkpID0+IHtcblx0XHRcdFx0XHRcdG1lbWJlcnNJZC5wdXNoKHtbaSsxXTogaSsxLCB0eXBlOidhZHVsdCd9KVxuXHRcdFx0XHRcdH0pXG5cblx0ICAgIFx0XHRjYXJkID0gWy4uLkFycmF5KHByb3BzLnNlbGVjdGVkX3BsYW4uY2hpbGRfY291bnQpXS5tYXAoKGUsIGkpID0+IHtcblx0ICAgIFx0XHRcdFx0aWYocHJvcHMuc2VsZWN0ZWRfcGxhbi5hZHVsdF9jb3VudCA+MSl7XG5cdCAgICBcdFx0XHRcdFx0bWVtYmVyc0lkLnB1c2goe1tpKzJdOiBpKzIsIHR5cGU6J2NoaWxkJ30pXG5cdCAgICBcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRtZW1iZXJzSWQucHVzaCh7W2krMV06IGkrMSwgdHlwZTonY2hpbGQnfSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQvLyBpZihuICE9PSAwKXtcblx0XHRcdFx0Ly8gXHRjYXJkID0gWy4uLkFycmF5KG4pXS5tYXAoKGUsIGkpID0+IHtcblx0XHRcdFx0Ly8gXHRcdG1lbWJlcnNJZC5wdXNoKHtbaSsxXTogaSsxfSlcblx0XHRcdFx0Ly8gXHR9KVxuXHRcdFx0XHQvLyB9XG5cdFx0XHR9XG5cdFx0XHRwcm9wcy5zYXZlQ3VycmVudFNlbGVjdGVkTWVtYmVycyhtZW1iZXJzSWQpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc2F2ZU1lbWJlcnM6IHRydWV9KVxuICAgIFx0fVxuICAgIFx0bGV0IHByb2ZpbGVMZW5ndGggPSBPYmplY3Qua2V5cyhwcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGg7XG5cdFx0bGV0IGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzID0gW11cblx0XHRsZXQgc2hvd19zZWxlY3RlZF9wcm9maWxlID0gW11cbiAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLm1hcCgodmFsLGtleSkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkUHJvZmlsZXMucHVzaCh2YWxba2V5XSlcbiAgICAgICAgfSlcblx0ICAgIGlmKHByb2ZpbGVMZW5ndGggPiAwKXtcblx0ICAgIFx0aWYoIXByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXIpe1xuXHRcdFx0XHR7T2JqZWN0LmVudHJpZXMocHJvcHMuVVNFUi5wcm9maWxlcykubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkge1xuXG5cdFx0XHRcdFx0aWYoY3VycmVudFNlbGVjdGVkUHJvZmlsZXMuaW5kZXhPZihwYXJzZUludChrZXkpKSA9PSAtMSAmJiBrZXkgIT09IHByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpe1xuXHRcdFx0XHRcdFx0c2hvd19zZWxlY3RlZF9wcm9maWxlLnB1c2goa2V5KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSl9XG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe3Nob3dfc2VsZWN0ZWRfcHJvZmlsZXMgOiBzaG93X3NlbGVjdGVkX3Byb2ZpbGV9KVxuXHRcdFx0fVxuXHRcdH1cbiAgICB9XG5cbiAgICBjaGVja0ZvclZhbGlkYXRpb24ocHJvZmlsZV9kYXRhLCBtZW1iZXJfaWQpe1xuICAgIFx0bGV0IHByb2ZpbGVzID0gdGhpcy5zdGF0ZS5wcm9maWxlc19zZWxlY3RlZFxuICAgIFx0aWYocHJvZmlsZXMubGVuZ3RoKXtcbiAgICBcdFx0cHJvZmlsZXMgPSB0aGlzLnN0YXRlLnByb2ZpbGVzX3NlbGVjdGVkLmZpbHRlcigoeCA9PiB4LmlkICE9IG1lbWJlcl9pZCkpXG4gICAgXHR9XG4gICAgXHRwcm9maWxlcy5wdXNoKHByb2ZpbGVfZGF0YSlcblxuICAgIFx0bGV0IGlzX2VuYWJsZSA9IHByb2ZpbGVzLmZpbHRlcih4PT4gIXguaXNmb3JtQ29tcGxldGVkKVxuICAgIFx0aXNfZW5hYmxlID0gaXNfZW5hYmxlLmxlbmd0aD9mYWxzZTp0cnVlXG4gICAgXHR0aGlzLnNldFN0YXRlKHtlbmFibGVfcHJvY2VlZDogaXNfZW5hYmxlLCBwcm9maWxlc19zZWxlY3RlZDogcHJvZmlsZXN9KVxuICAgIH1cblxuICAgIHByb2NlZWRQbGFuKCl7XG4gICAgXHRsZXQgaXNfZGlzYWJsZSAgPSBmYWxzZVxuICAgIFx0bGV0IG1lbWJlcl9yZWYgPSAnJ1xuICAgIFx0bGV0IGVtcHR5X2ZlaWxkcyA9IFtdXG4gICAgXHRsZXQgY3VycmVudFNlbGVjdGVkUHJvZmlsZXMgPSBbXVxuICAgIFx0bGV0IGZpZWxkc19uYW1lID0gW11cbiAgICBcdGxldCBmaWVsZHNfbmFtZV9vYmogPSB7fVxuICAgIFx0bGV0IGVycm9yTWVzc2FnZXNPYmogPSB7fVxuICAgIFx0bGV0IHNlbGZfcHJvZmlsZVxuICAgIFx0bGV0IHNlbGZfYWdlXG4gICAgXHRsZXQgYWR1bHQyYWdlXG4gICAgXHR0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubWFwKCh2YWwsa2V5KSA9PiB7XG4gICAgXHRcdGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzLnB1c2godmFsW2tleV0pXG4gICAgXHR9KVxuICAgIFx0bGV0IHZhbGlkYXRpbmdFcnJvcnMgPSB7fVxuICAgIFx0bGV0IHZhbGlkYXRpbmdEb2JFcnJvcnMgPSB7fVxuICAgIFx0bGV0IHZhbGlkYXRpbmdOYW1lID0ge31cbiAgICBcdGxldCB2YWxpZGF0aW5nT3RoZXJFcnJvcnMgPSB7fVxuICAgIFx0bGV0IGludmFsaWRuYW1lID0gW11cbiAgICBcdGxldCBmdWxsbmFtZVxuICAgIFx0bGV0IGZ1bGxuYW1lT2JqPXt9XG4gICAgXHRsZXQgaXNEdW1teVVzZXJcbiAgICBcdGlmKE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlcykubGVuZ3RoID4gMCl7XG4gICAgXHRcdGlzRHVtbXlVc2VyID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcbiAgICBcdFx0aWYoIWlzRHVtbXlVc2VyKXtcbiAgICBcdFx0XHRzZWxmX3Byb2ZpbGUgID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pXHRcbiAgICBcdFx0fWVsc2V7XG4gICAgXHRcdFx0c2VsZl9wcm9maWxlICA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXSlcbiAgICBcdFx0fVxuICAgIFx0fVxuICAgIFx0dGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLm1hcCgodmFsLGtleSkgPT4ge1xuICAgIFx0XHRpZihPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMpLmxlbmd0aCA+IDApe1xuICAgIFx0XHRcdGxldCBmaWVsZHMgPSBbXVxuICAgIFx0XHRcdGxldCBkb2JFcnJvciA9IFtdXG4gICAgXHRcdFx0bGV0IHBhcmFtID10aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdmFsW2tleV1dXG5cdFx0XHRcdGlmKHBhcmFtLnRpdGxlID09IFwiXCIpeyAgLy9jb21tb24gdmFsaWRhdGlvblxuXHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0ZmllbGRzLnB1c2goJ3RpdGxlJylcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHBhcmFtLnJlbGF0aW9uID09IFwiXCIpe1xuXHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0ZmllbGRzLnB1c2goJ3JlbGF0aW9uJylcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHBhcmFtLm5hbWUgPT0gXCJcIil7XG5cdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRmaWVsZHMucHVzaCgnbmFtZScpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihwYXJhbS5nZW5kZXIgPT0gXCJcIil7XG5cdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRmaWVsZHMucHVzaCgnZ2VuZGVyJylcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHBhcmFtLmRvYiA9PSBudWxsIHx8IHBhcmFtLmRvYiA9PSBcIlwiKXtcblx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdkb2InKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIXBhcmFtLm5vX2xuYW1lICYmIHBhcmFtLnJlbGF0aW9uICE9PSAnc2VsZicpe1xuXHRcdFx0XHRcdGlmKHBhcmFtLmxhc3RfbmFtZSA9PVwiXCIpe1xuXHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdGZpZWxkcy5wdXNoKCdsYXN0X25hbWUnKVx0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYocGFyYW0ucmVsYXRpb249PSAnc2VsZicpeyAvL29ubHkgc2VsZiB2YWxpZGF0aW9uXG5cdFx0XHRcdFx0aWYocGFyYW0ucGluY29kZSA9PSBcIlwiKXtcblx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgncGluY29kZScpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHBhcmFtLmFkZHJlc3MgPT0gXCJcIil7XG5cdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2FkZHJlc3MnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwYXJhbS5zdGF0ZSA9PSBcIlwiIHx8IHBhcmFtLnN0YXRlX2NvZGUgPT0gMCl7XG5cdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ3N0YXRlJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYocGFyYW0udG93biA9PSBcIlwiIHx8IHBhcmFtLnRvd25fY29kZSA9PSAnJyl7XG5cdFx0XHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ3Rvd24nKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwYXJhbS5kaXN0cmljdCA9PSBcIlwiIHx8IHBhcmFtLmRpc3RyaWN0ID09ICcnKXtcblx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgnZGlzdHJpY3QnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwYXJhbS5lbWFpbCA9PSBcIlwiKXtcblx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRmaWVsZHMucHVzaCgnZW1haWwnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZihwYXJhbS5lbWFpbCAhPScnICYmIHBhcmFtLnJlbGF0aW9uID09ICdzZWxmJyl7XG5cdFx0XHRcdFx0XHRsZXQgdmFsaWRFbWFpbCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXHRcdFx0ICBcdFx0XHR2YWxpZEVtYWlsID0gdmFsaWRFbWFpbC50ZXN0KHBhcmFtLmVtYWlsKVxuXHRcdFx0ICBcdFx0XHRpZighdmFsaWRFbWFpbCl7XG5cdFx0XHQgIFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0ZmllbGRzLnB1c2goJ2VtYWlsJylcdFx0XG5cdFx0XHQgIFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihwYXJhbS5tZW1iZXJfdHlwZSA9PSAnYWR1bHQnKXsgLy8gb25seSBhZHVsdCB2YWxpZGF0aW9uIGluIGNhc2Ugb2Ygc2FtZSBnZW5kZXIgb3IgdGl0bGVcblx0XHRcdFx0XHRpZihwYXJhbS5vbmx5X2FkdWx0ICYmIHBhcmFtLnRpdGxlICE9PSBcIlwiKXtcblx0XHRcdFx0XHRcdGlmKHNlbGZfcHJvZmlsZS50aXRsZSA9PSBwYXJhbS50aXRsZSl7XG5cdFx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdGVtcHR5X2ZlaWxkcy5wdXNoKCd0aXRsZScpXHRcblx0XHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHBhcmFtLmdlbmRlciAhPSAnJyAmJiBwYXJhbS50aXRsZSAhPScnKXtcblx0XHRcdFx0XHRcdGlmKHBhcmFtLmdlbmRlciA9PSAnbScgJiYgcGFyYW0udGl0bGUgIT0nbXIuJyl7XG5cdFx0XHRcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdGVtcHR5X2ZlaWxkcy5wdXNoKCdnZW5kZXInKVx0XG5cdFx0XHRcdFx0XHR9ZWxzZSBpZihwYXJhbS5nZW5kZXIgPT0gJ2YnICYmIHBhcmFtLnRpdGxlPT0nbXInKXtcblx0XHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0ZW1wdHlfZmVpbGRzLnB1c2goJ2dlbmRlcicpXHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYocGFyYW0ucGluY29kZSAmJiBwYXJhbS5waW5jb2RlICE9PScnKXtcblx0XHRcdFx0XHRcdGlmKHBhcmFtLnBpbmNvZGUubGVuZ3RoIDw2KXtcblx0XHRcdFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcblx0XHRcdFx0XHRcdFx0ZW1wdHlfZmVpbGRzLnB1c2goJ3BpbmNvZGUnKVx0XHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihwYXJhbS5kb2IgIT0gbnVsbCAmJiBwYXJhbS5tZW1iZXJfdHlwZT09ICdhZHVsdCcpeyAvL2RvYiB2YWxpZGF0aW9uXG5cdFx0XHRcdFx0bGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0XHRcdFx0ICAgIGxldCBiaXJ0aERhdGUgPSBuZXcgRGF0ZShwYXJhbS5kb2IpO1xuXHRcdFx0XHQgICAgbGV0IGFnZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgLSBiaXJ0aERhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0ICAgIGxldCBtID0gdG9kYXkuZ2V0TW9udGgoKSAtIGJpcnRoRGF0ZS5nZXRNb250aCgpO1xuXHRcdFx0XHQgICAgaWYgKG0gPCAwIHx8IChtID09PSAwICYmIHRvZGF5LmdldERhdGUoKSA8IGJpcnRoRGF0ZS5nZXREYXRlKCkpKSB7XG5cdFx0XHRcdCAgICAgICAgYWdlLS07XG5cdFx0XHRcdCAgICB9XG5cdFx0XHRcdCAgICBpZihwYXJhbS5yZWxhdGlvbj09ICdzZWxmJyl7XG5cdFx0XHRcdFx0XHRzZWxmX2FnZSA9IGFnZVxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0YWR1bHQyYWdlID0gYWdlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZC5sZW5ndGg+MCl7XG5cdFx0XHRcdCAgICBcdGlmKHBhcnNlSW50KGFnZSkgPCBwYXJzZUludCh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLm1pbl9hZ2UpIHx8IFxuXHRcdFx0XHRcdCAgICBcdHBhcnNlSW50KGFnZSkgPiBwYXJzZUludCh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLm1heF9hZ2UpKXtcblx0XHRcdFx0ICBcdFx0XHRmaWVsZHMucHVzaCgnZG9iJylcblx0XHRcdFx0ICBcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVx0XHRcdCAgICBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1lbHNlIGlmKHBhcmFtLmRvYiAhPSBudWxsICYmIHBhcmFtLm1lbWJlcl90eXBlPT0gJ2NoaWxkJyl7XHRcblx0XHRcdFx0XHRsZXQgY2hpbGRBZ2VcdFx0XHRcdFxuXHRcdFx0XHRcdGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdCAgICBsZXQgYmlydGhEYXRlID0gbmV3IERhdGUocGFyYW0uZG9iKTtcblx0XHRcdFx0ICAgIGNoaWxkQWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHQgICAgbGV0IG0gPSB0b2RheS5nZXRNb250aCgpIC0gYmlydGhEYXRlLmdldE1vbnRoKCk7XG5cdFx0XHRcdCAgICBpZiAobSA8IDAgfHwgKG0gPT09IDAgJiYgdG9kYXkuZ2V0RGF0ZSgpIDwgYmlydGhEYXRlLmdldERhdGUoKSkpIHtcblx0XHRcdFx0ICAgICAgICBjaGlsZEFnZS0tO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0XHRcdGxldCBvbmVEYXkgPSAyNCo2MCo2MCoxMDAwO1xuXHRcdFx0XHRcdGxldCBmaXJzdERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdGxldCBzZWNvbmREYXRlID0gbmV3IERhdGUocGFyYW0uZG9iKTtcblx0XHRcdFx0XHRsZXQgZGlmZkRheXMgPSBNYXRoLnJvdW5kKE1hdGguYWJzKChmaXJzdERhdGUuZ2V0VGltZSgpIC0gc2Vjb25kRGF0ZS5nZXRUaW1lKCkpLyhvbmVEYXkpKSk7XG5cdFx0XHRcdFx0aWYodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZC5sZW5ndGg+MCl7XG5cdFx0XHRcdFx0XHRsZXQgbWluQWdlT2ZBZHVsdHMgPSBNYXRoLm1pbihzZWxmX2FnZSxhZHVsdDJhZ2UpXG5cdFx0XHRcdFx0XHRsZXQgYWR1bHRDaGlsZEFnZURpZmYgPSBtaW5BZ2VPZkFkdWx0cyAtIGNoaWxkQWdlXG5cdFx0XHRcdFx0XHRsZXQgY2hpbGRfYWdlID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5jaGlsZF9taW5fYWdlXG5cdFx0XHRcdFx0XHRsZXQgY2hpbGRfbWF4X2FnZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0uY2hpbGRfbWF4X2FnZVxuXHRcdFx0XHRcdFx0aWYocGFyc2VJbnQoZGlmZkRheXMpIDwgcGFyc2VJbnQoY2hpbGRfYWdlKSB8fCBwYXJzZUludChjaGlsZEFnZSkgPiBwYXJzZUludChjaGlsZF9tYXhfYWdlKSl7XG5cdFx0XHRcdCAgXHRcdFx0ZmllbGRzLnB1c2goJ2RvYicpXG5cdFx0XHRcdCAgXHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcdFx0XHQgICAgXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZihhZHVsdENoaWxkQWdlRGlmZiA8IDE4KXtcblx0XHRcdFx0XHRcdFx0ZG9iRXJyb3IucHVzaCgnZG9iJylcblx0XHRcdFx0ICBcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGQubGVuZ3RoPjApe1xuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmouY2hpbGRfbWF4X2FnZT0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5jaGlsZF9tYXhfYWdlXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5jaGlsZF9taW5fYWdlPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLmNoaWxkX21pbl9hZ2Vcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLm1heF9hZ2U9IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWF4X2FnZVxuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmoubWluX2FnZT0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5taW5fYWdlXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5jb21tb25fbWVzc2FnZT0gJypUaGlzIGlzIGEgbWFuZGF0b3J5IGZpZWxkJ1xuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmoubWF4X2NoYXJhY3Rlcj0gJ01heGltdW0gY2hhcmFjdGVyIGxpbWl0OiA1MCdcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLnZhbGlkX2VtYWlsPSAnKlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsJ1xuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmouYWR1bHRfYWdlID0gYCpBZ2Ugc2hvdWxkIGJlIG1vcmUgdGhhbiAke3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWluX2FnZX0geWVhcnMgYW5kIGxlc3MgdGhhbiAke3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWF4X2FnZX0geWVhcnNgXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5jaGlsZF9hZ2UgPSBgKkFnZSBzaG91bGQgYmUgbW9yZSB0aGFuICR7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5jaGlsZF9taW5fYWdlfSBkYXlzIGFuZCBsZXNzIHRoYW4gJHt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLmNoaWxkX21heF9hZ2V9IHllYXJzYFxuXHRcdFx0XHRcdGVycm9yTWVzc2FnZXNPYmouc2FtZUdlbmRlclRpdGxlID0gXCIqQm90aCB0aGUgQWR1bHRzIGNhbid0IGhhdmUgc2FtZSBHZW5kZXIgYW5kIFRpdGxlXCJcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLnNob3VsZEdlbmRlclRpdGxlID0gXCIqQm90aCBHZW5kZXIgYW5kIFRpdGxlIGNhbid0IGJlIGRpZmZlcmVudFwiXG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlc09iai5jaGlsZEFnZURpZmYgPSAnKkRpZmZlcmVuY2UgYmV0d2VlbiBhZ2Ugb2YgY2hpbGQgYW5kIGFkdWx0IHNob3VsZCBiZSBtb3JlIHRoYW4gMTggeWVhcnMnXHRcdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaWYoZmllbGRzLmxlbmd0aCA+IDAgfHwgZW1wdHlfZmVpbGRzLmxlbmd0aCA+IDAgfHwgZG9iRXJyb3IubGVuZ3RoID4gMCl7XHRcblx0XHRcdFx0Ly8gXHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHQvLyBcdG1lbWJlcl9yZWYgPSBgbWVtYmVyXyR7cGFyYW0uaWR9YFxuXHRcdFx0XHQvLyB9XG5cdFx0XHRcdGlmKHBhcmFtLm5hbWUgIT0gXCJcIiAmJiBwYXJhbS5taWRkbGVfbmFtZSAhPSBcIlwiICYmIHBhcmFtLmxhc3RfbmFtZSAhPSBcIlwiICYmICFwYXJhbS5ub19sbmFtZSl7Ly9uYW1lIHZhbGlkYXRpb25cblx0XHRcdFx0XHRsZXQgZnVsbG5hbWVPYmo9e31cblx0XHRcdFx0XHRmdWxsbmFtZSA9IHBhcmFtLm5hbWUrcGFyYW0ubWlkZGxlX25hbWUrcGFyYW0ubGFzdF9uYW1lXG5cdFx0XHRcdFx0ZnVsbG5hbWVPYmouaWQ9cGFyYW0uaWRcblx0XHRcdFx0XHRmdWxsbmFtZU9iai5mTmFtZT1mdWxsbmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0ZmllbGRzX25hbWUucHVzaChmdWxsbmFtZU9iailcblx0XHRcdFx0fWVsc2UgaWYocGFyYW0ubmFtZSAhPSBcIlwiICYmIHBhcmFtLm1pZGRsZV9uYW1lID09IFwiXCIgJiYgcGFyYW0ubGFzdF9uYW1lICE9IFwiXCIgJiYgIXBhcmFtLm5vX2xuYW1lKXtcblx0XHRcdFx0XHRsZXQgZnVsbG5hbWVPYmo9e31cblx0XHRcdFx0XHRmdWxsbmFtZSA9IHBhcmFtLm5hbWUrcGFyYW0ubWlkZGxlX25hbWUrcGFyYW0ubGFzdF9uYW1lXG5cdFx0XHRcdFx0ZnVsbG5hbWVPYmouaWQ9cGFyYW0uaWRcblx0XHRcdFx0XHRmdWxsbmFtZU9iai5mTmFtZT1mdWxsbmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0ZmllbGRzX25hbWUucHVzaChmdWxsbmFtZU9iailcblx0XHRcdFx0fWVsc2UgaWYocGFyYW0ubmFtZSAhPSBcIlwiICYmIHBhcmFtLm1pZGRsZV9uYW1lID09IFwiXCIgJiYgcGFyYW0ubGFzdF9uYW1lID09IFwiXCIgJiYgIXBhcmFtLm5vX2xuYW1lKXtcblx0XHRcdFx0XHRsZXQgZnVsbG5hbWVPYmo9e31cblx0XHRcdFx0XHRmdWxsbmFtZSA9IHBhcmFtLm5hbWVcblx0XHRcdFx0XHRmdWxsbmFtZU9iai5pZD1wYXJhbS5pZFxuXHRcdFx0XHRcdGZ1bGxuYW1lT2JqLmZOYW1lPWZ1bGxuYW1lLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRmaWVsZHNfbmFtZS5wdXNoKGZ1bGxuYW1lT2JqKVxuXHRcdFx0XHR9ZWxzZSBpZihwYXJhbS5uYW1lICE9IFwiXCIgJiYgcGFyYW0ubm9fbG5hbWUpe1xuXHRcdFx0XHRcdGxldCBmdWxsbmFtZU9iaj17fVxuXHRcdFx0XHRcdGZ1bGxuYW1lID0gcGFyYW0ubmFtZVxuXHRcdFx0XHRcdGZ1bGxuYW1lT2JqLmlkPXBhcmFtLmlkXG5cdFx0XHRcdFx0ZnVsbG5hbWVPYmouZk5hbWU9ZnVsbG5hbWUudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdGZpZWxkc19uYW1lLnB1c2goZnVsbG5hbWVPYmopXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHZhbGlkYXRpbmdFcnJvcnNbcGFyYW0uaWRdID0gZmllbGRzXG5cdFx0XHRcdHZhbGlkYXRpbmdEb2JFcnJvcnNbcGFyYW0uaWRdID0gZG9iRXJyb3Jcblx0XHRcdFx0aWYocGFyYW0ubWVtYmVyX3R5cGUgPT0gJ2FkdWx0Jyl7XG5cdFx0XHRcdFx0dmFsaWRhdGluZ090aGVyRXJyb3JzW3BhcmFtLmlkXSA9IGVtcHR5X2ZlaWxkc1xuXHRcdFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdH0pXHRcdFxuXHRcdHZhbGlkYXRpbmdOYW1lID0gZmllbGRzX25hbWVcblx0XHRcdGxldCBuZXdBcnJheT1bXVxuXHRcdFx0bGV0IEFycmF5RmxhZz10cnVlXG5cdFx0XHRPYmplY3QuZW50cmllcyh2YWxpZGF0aW5nTmFtZSkubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkge1xuXHRcdFx0XHRpZihBcnJheUZsYWcpe1xuXHRcdFx0XHRcdG5ld0FycmF5ID0gIHZhbGlkYXRpbmdOYW1lLmZpbHRlcigobmFtZT0+IG5hbWUuZk5hbWUgPT0gdmFsdWUuZk5hbWUpKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKG5ld0FycmF5Lmxlbmd0aD4xKXtcblx0XHRcdFx0XHRBcnJheUZsYWcgPSBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0aWYobmV3QXJyYXkubGVuZ3RoID4xKXtcblx0XHRcdFx0bWVtYmVyX3JlZiA9IGBtZW1iZXJfJHtuZXdBcnJheVsxXS5pZH1gXG5cdFx0XHRcdGxldCBpZCA9ICdpZD0nICsgbmV3QXJyYXlbMV0uaWRcblx0XHRcdFx0aWYobmV3QXJyYXlbMV0ubmFtZSAhPSAnJyAmJiBuZXdBcnJheVsxXS5taWRkbGVfbmFtZSAhPSAnJyAmJiBuZXdBcnJheVsxXS5sYXN0X25hbWUgIT0nJyl7XG5cdFx0XHRcdFx0aW52YWxpZG5hbWUucHVzaChpZClcblx0XHRcdFx0fWVsc2UgaWYobmV3QXJyYXlbMV0ubmFtZSAhPSAnJyAmJiBuZXdBcnJheVsxXS5taWRkbGVfbmFtZSA9PSAnJyAmJiBuZXdBcnJheVsxXS5sYXN0X25hbWUgIT0nJyl7XG5cdFx0XHRcdFx0aW52YWxpZG5hbWUucHVzaChpZClcblx0XHRcdFx0fVxuXHRcdFx0XHRpc19kaXNhYmxlID0gdHJ1ZVxuXHRcdFx0XHRlcnJvck1lc3NhZ2VzT2JqLnNhbWVOYW1lID0gJypOYW1lIG9mIHRoZSBtZW1iZXJzIGNhbm5vdCBiZSBzYW1lJ1xuXHRcdFx0fVxuXG5cdFx0XHRPYmplY3Qua2V5cyh2YWxpZGF0aW5nRXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIFx0XHRcdGlmKHZhbGlkYXRpbmdFcnJvcnNba2V5XS5sZW5ndGggPiAwKXtcbiAgICBcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG4gICAgXHRcdFx0XHRtZW1iZXJfcmVmID0gYG1lbWJlcl8ke2tleX1gXHRcbiAgICBcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0T2JqZWN0LmtleXModmFsaWRhdGluZ090aGVyRXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIFx0XHRcdGlmKHZhbGlkYXRpbmdPdGhlckVycm9yc1trZXldLmxlbmd0aCA+IDApe1xuICAgIFx0XHRcdFx0aXNfZGlzYWJsZSA9IHRydWVcbiAgICBcdFx0XHRcdG1lbWJlcl9yZWYgPSBgbWVtYmVyXyR7a2V5fWBcdFxuICAgIFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRPYmplY3Qua2V5cyh2YWxpZGF0aW5nRG9iRXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIFx0XHRcdGlmKHZhbGlkYXRpbmdEb2JFcnJvcnNba2V5XS5sZW5ndGggPiAwKXtcbiAgICBcdFx0XHRcdGlzX2Rpc2FibGUgPSB0cnVlXG4gICAgXHRcdFx0XHRtZW1iZXJfcmVmID0gYG1lbWJlcl8ke2tleX1gXHRcbiAgICBcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0XG5cdFx0XHRjb25zb2xlLmxvZygndmFsaWRhdGVFcnJvcnMnKVxuXHRcdFx0Y29uc29sZS5sb2codmFsaWRhdGluZ0Vycm9ycylcblx0XHRcdGNvbnNvbGUubG9nKCd2YWxpZGF0ZU90aGVyRXJyb3JzJylcblx0XHRcdGNvbnNvbGUubG9nKHZhbGlkYXRpbmdPdGhlckVycm9ycylcblx0XHRcdGNvbnNvbGUubG9nKCd2YWxpZGF0aW5nTmFtZXMnKVxuXHRcdFx0Y29uc29sZS5sb2coaW52YWxpZG5hbWUpXG5cdFx0XHRjb25zb2xlLmxvZygndmFsaWRhdGluZ0RvYkVycm9ycycpXG5cdFx0XHRjb25zb2xlLmxvZyh2YWxpZGF0aW5nRG9iRXJyb3JzKVxuXHRcdFx0Y29uc29sZS5sb2coJ21lbWJlcl9yZWYnKVxuXHRcdFx0Y29uc29sZS5sb2cobWVtYmVyX3JlZilcblx0XHR0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZUVycm9yczogdmFsaWRhdGluZ0Vycm9ycyx2YWxpZGF0ZU90aGVyRXJyb3JzOiB2YWxpZGF0aW5nT3RoZXJFcnJvcnMsdmFsaWRhdGluZ05hbWVzOmludmFsaWRuYW1lLHZhbGlkYXRlRG9iRXJyb3JzOnZhbGlkYXRpbmdEb2JFcnJvcnMsZXJyb3JNZXNzYWdlczplcnJvck1lc3NhZ2VzT2JqfSlcbiAgICBcdGlmKGlzX2Rpc2FibGUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVtYmVyX3JlZikpeyAgICBcdFx0XG4gICAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lbWJlcl9yZWYpLnNjcm9sbEludG9WaWV3KCk7XG4gICAgXHR9ZWxzZXtcbiAgICBcdFx0dGhpcy5TYXZlVXNlckRhdGEodGhpcy5wcm9wcykgLy8gdG8gc2F2ZSB1c2VyIGVudGVyZWQgZGV0YWlsc1xuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXVzZXItZGV0YWlscy1yZXZpZXcnKVxuICAgIFx0fVxuICAgIH1cblxuICAgIFNhdmVVc2VyRGF0YShwcm9wcyl7XG4gICAgXHRsZXQgc2VsZiA9IHRoaXNcbiAgICBcdHZhciBpbnN1cmFuY2VVc2VyRGF0YT17fVxuICAgIFx0dmFyIG1lbWJlcnM9e31cbiAgICBcdC8vIGluc3VyYW5jZVVzZXJEYXRhLmluc3VybmFjZURhdGEgPSBwcm9wcy5pbnN1cm5hY2VEYXRhXG4gICAgXHRpbnN1cmFuY2VVc2VyRGF0YS5zZWxlY3RlZF9wbGFuX2lkPXByb3BzLnNlbGVjdGVkX3BsYW4uaWRcbiAgICBcdC8vIGluc3VyYW5jZVVzZXJEYXRhLmluc3VyZXI9IHByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmlkXG4gICAgXHRpbnN1cmFuY2VVc2VyRGF0YS5tZW1iZXJzPSBbXVxuICAgIFx0Ly8gaW5zdXJhbmNlVXNlckRhdGEuc2VsZWN0ZWRfcGxhbiA9IFtdXG4gICAgXHRpbnN1cmFuY2VVc2VyRGF0YS5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkID0gdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkXG5cbiAgICBcdE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZCkubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkge1xuICAgIFx0XHRtZW1iZXJzPXt9XG5cdFx0XHRtZW1iZXJzPXsuLi5zZWxmLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdmFsdWVba2V5XV19XG5cdFx0XHRyZXR1cm4gXHRpbnN1cmFuY2VVc2VyRGF0YS5tZW1iZXJzLnB1c2gobWVtYmVycylcblx0XHR9KVxuXHRcdHRoaXMucHJvcHMucHVzaFVzZXJEYXRhKGluc3VyYW5jZVVzZXJEYXRhKSAvLyB0byBzYXZlIHVzZXIgZW50ZXJlZCBkZXRhaWxzIGluIGR1bW15IHRhYmxlXG4gICAgfVxuXG4gICAgY2hlY2tJc0VtYWlsVmVyZmllZCgpe1xuICAgIFx0XG4gICAgfVxuICAgIFxuXHRyZW5kZXIoKXtcblx0XHRsZXQgY2hpbGRcblx0XHRsZXQgYWR1bHRcblx0XHRsZXQgdXNlclByb2ZpbGVcblx0XHRsZXQgc2VsZWN0ZWRQcm9maWxlSWQgPSBwYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXG5cdFx0bGV0IHNlbGVjdGVkTWVtYmVyc0lkID0wXG5cdFx0aWYoT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuKS5sZW5ndGggPjApe1xuXHRcdFxuXHRcdFx0dXNlclByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSlcblxuXHRcdFx0dmFyIGFkdWx0X2NvdW50X2FwaSA9ICh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYWR1bHRfY291bnQgLSAxKVxuXHRcdFx0aWYoYWR1bHRfY291bnRfYXBpICE9PTAgJiYgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLmxlbmd0aD4xKXtcblx0XHRcdFx0c2VsZWN0ZWRNZW1iZXJzSWQrK1xuXHRcdFx0XHRhZHVsdCA9dGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLmZpbHRlcih4PT54LnR5cGUgPT09J2FkdWx0JykubWFwKChkYXRhLCBpKSA9Pntcblx0XHRcdFx0XHRcdHJldHVybiA8SW5zdXJPdGhlcnMgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRcdFx0XHRzZWxmX2dlbmRlcj17dXNlclByb2ZpbGUuZ2VuZGVyfSBcblx0XHRcdFx0XHRcdFx0cGFyYW1faWQgPSB7c2VsZWN0ZWRNZW1iZXJzSWR9IFxuXHRcdFx0XHRcdFx0XHRtZW1iZXJfaWQ9e2RhdGFbc2VsZWN0ZWRNZW1iZXJzSWRdfVxuXHRcdFx0XHRcdFx0XHRjaGVja0ZvclZhbGlkYXRpb24gPXt0aGlzLmNoZWNrRm9yVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBcblx0XHRcdFx0XHRcdFx0aWQ9e2BtZW1iZXJfJHtzZWxlY3RlZE1lbWJlcnNJZH1gfSBcblx0XHRcdFx0XHRcdFx0dmFsaWRhdGVFcnJvcnM9e3RoaXMuc3RhdGUudmFsaWRhdGVFcnJvcnNbZGF0YVtzZWxlY3RlZE1lbWJlcnNJZF1dIHx8IFtdfSBcblx0XHRcdFx0XHRcdFx0dmFsaWRhdGVPdGhlckVycm9ycz17dGhpcy5zdGF0ZS52YWxpZGF0ZU90aGVyRXJyb3JzW2RhdGFbc2VsZWN0ZWRNZW1iZXJzSWRdXSB8fCBbXX0gXG5cdFx0XHRcdFx0XHRcdGNyZWF0ZUFwaUVycm9ycz17dGhpcy5zdGF0ZS5DcmVhdGVBcGlFcnJvcnMubWVtYmVycz90aGlzLnN0YXRlLkNyZWF0ZUFwaUVycm9ycy5tZW1iZXJzW2krMV06W119XG5cdFx0XHRcdFx0XHRcdHNob3dfc2VsZWN0ZWRfcHJvZmlsZXM9e3RoaXMuc3RhdGUuc2hvd19zZWxlY3RlZF9wcm9maWxlc30gXG5cdFx0XHRcdFx0XHRcdHZhbGlkYXRlRG9iRXJyb3JzPXtbXX0gXG5cdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZXM9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlc30gXG5cdFx0XHRcdFx0XHRcdHZhbGlkYXRpbmdOYW1lcz17dGhpcy5zdGF0ZS52YWxpZGF0aW5nTmFtZXN8fFtdfVxuXHRcdFx0XHRcdFx0XHRpc19lbmRvcnNlbWVudCA9IHtmYWxzZX1cblx0XHRcdFx0XHRcdFx0ZW5kb3JzZW1lbnRFcnJvcj17dGhpcy5zdGF0ZS5lbmRvcnNlbWVudEVycm9yfVxuXHRcdFx0XHRcdFx0XHRtZW1iZXJfdHlwZSA9ICdhZHVsdCdcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0fSlcblx0XHRcdH1cblxuXG5cdFx0XHQvLyBpZih0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYWR1bHRfY291bnQgPT0gMiAmJiB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubGVuZ3RoPjEpe1xuXHRcdFx0Ly8gXHRzZWxlY3RlZE1lbWJlcnNJZCsrXG5cdFx0XHQvLyBcdGFkdWx0ID0gPEluc3VyT3RoZXJzIHsuLi50aGlzLnByb3BzfSBcblx0XHRcdC8vIFx0XHRcdFx0c2VsZl9nZW5kZXI9e3VzZXJQcm9maWxlLmdlbmRlcn0gXG5cdFx0XHQvLyBcdFx0XHRcdHBhcmFtX2lkID0geycxJ30gXG5cdFx0XHQvLyBcdFx0XHRcdG1lbWJlcl9pZD17dGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkWzFdWycxJ119IFxuXHRcdFx0Ly8gXHRcdFx0XHRjaGVja0ZvclZhbGlkYXRpb24gPXt0aGlzLmNoZWNrRm9yVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBcblx0XHRcdC8vIFx0XHRcdFx0aWQ9e2BtZW1iZXJfJHswfWB9IFxuXHRcdFx0Ly8gXHRcdFx0XHR2YWxpZGF0ZUVycm9ycz17dGhpcy5zdGF0ZS52YWxpZGF0ZUVycm9yc1snMSddIHx8IFtdfSBcblx0XHRcdC8vIFx0XHRcdFx0dmFsaWRhdGVPdGhlckVycm9ycz17dGhpcy5zdGF0ZS52YWxpZGF0ZU90aGVyRXJyb3JzWycxJ10gfHwgW119IFxuXHRcdFx0Ly8gXHRcdFx0XHRjcmVhdGVBcGlFcnJvcnM9e3RoaXMuc3RhdGUuQ3JlYXRlQXBpRXJyb3JzLm1lbWJlcnM/dGhpcy5zdGF0ZS5DcmVhdGVBcGlFcnJvcnMubWVtYmVyc1sxXTpbXX1cblx0XHRcdC8vIFx0XHRcdFx0c2hvd19zZWxlY3RlZF9wcm9maWxlcz17dGhpcy5zdGF0ZS5zaG93X3NlbGVjdGVkX3Byb2ZpbGVzfSBcblx0XHRcdC8vIFx0XHRcdFx0dmFsaWRhdGVEb2JFcnJvcnM9e1tdfSBcblx0XHRcdC8vIFx0XHRcdFx0ZXJyb3JNZXNzYWdlcz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfSBcblx0XHRcdC8vIFx0XHRcdFx0dmFsaWRhdGluZ05hbWVzPXt0aGlzLnN0YXRlLnZhbGlkYXRpbmdOYW1lc3x8W119XG5cdFx0XHQvLyBcdFx0XHRcdGlzX2VuZG9yc2VtZW50ID0ge2ZhbHNlfVxuXHRcdFx0Ly8gXHRcdFx0XHRlbmRvcnNlbWVudEVycm9yPXt0aGlzLnN0YXRlLmVuZG9yc2VtZW50RXJyb3J9XG5cdFx0XHQvLyBcdFx0XHRcdG1lbWJlcl90eXBlID0gJ2FkdWx0JyBcblx0XHRcdC8vIFx0XHRcdC8+XG5cdFx0XHQvLyB9XG5cdFx0XG5cdFx0XHR2YXIgbiA9ICh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uY2hpbGRfY291bnQpO1xuXHRcdFxuXHRcdFx0aWYobiAhPT0gMCl7XG5cdFx0XHRcdGNoaWxkID10aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQuZmlsdGVyKHg9PngudHlwZSA9PT0nY2hpbGQnKS5tYXAoKGRhdGEsIGkpID0+e1xuXHRcdFx0XHRcdHNlbGVjdGVkTWVtYmVyc0lkKytcblx0XHRcdFx0XHRcdHJldHVybiA8SW5zdXJPdGhlcnMgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpfSBcblx0XHRcdFx0XHRcdFx0XHRcdG1lbWJlcl9pZD17ZGF0YVtzZWxlY3RlZE1lbWJlcnNJZF19IFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tGb3JWYWxpZGF0aW9uID17dGhpcy5jaGVja0ZvclZhbGlkYXRpb24uYmluZCh0aGlzKX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRpc19jaGlsZF9vbmx5PXt0cnVlfSBcblx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgbWVtYmVyXyR7c2VsZWN0ZWRNZW1iZXJzSWR9YH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXJhbV9pZCA9IHtzZWxlY3RlZE1lbWJlcnNJZH0gXG5cdFx0XHRcdFx0XHRcdFx0XHRtZW1iZXJfdmlld19pZD0ge3NlbGVjdGVkTWVtYmVyc0lkfSBcblx0XHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRlRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3JzW2RhdGFbc2VsZWN0ZWRNZW1iZXJzSWRdXSB8fCBbXX0gXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZU90aGVyRXJyb3JzPXtbXX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRjcmVhdGVBcGlFcnJvcnNDaGlsZD17dGhpcy5zdGF0ZS5DcmVhdGVBcGlFcnJvcnMubWVtYmVycz90aGlzLnN0YXRlLkNyZWF0ZUFwaUVycm9ycy5tZW1iZXJzOltdfSBcblx0XHRcdFx0XHRcdFx0XHRcdHNob3dfc2VsZWN0ZWRfcHJvZmlsZXM9e3RoaXMuc3RhdGUuc2hvd19zZWxlY3RlZF9wcm9maWxlc30gXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZURvYkVycm9ycz17dGhpcy5zdGF0ZS52YWxpZGF0ZURvYkVycm9yc1tkYXRhW3NlbGVjdGVkTWVtYmVyc0lkXV0gfHwgW119IFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlcz17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2VzfSBcblx0XHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRpbmdOYW1lcz17dGhpcy5zdGF0ZS52YWxpZGF0aW5nTmFtZXN8fFtdfVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNfZW5kb3JzZW1lbnQgPSB7ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRlbmRvcnNlbWVudEVycm9yPXt0aGlzLnN0YXRlLmVuZG9yc2VtZW50RXJyb3J9XG5cdFx0XHRcdFx0XHRcdFx0XHRtZW1iZXJfdHlwZSA9ICdjaGlsZCdcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXG5cdFx0fVxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cblx0ICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPiBcblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luIGNhcmRNYWluUGFkZGluZ1JtdlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgZHNrdHAtcm93LWd1dHRlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgaW5zLW1haW4tcGFkZGluZ1wiPlxuXHRcdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZmlsZS1ib29rLXNjcmVlblwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxJbnN1ckNvbW1vbiB7Li4udGhpcy5wcm9wc30gaXNfZWRpdD17dGhpcy5zdGF0ZS5pc19lZGl0fS8+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnN1cmFuY2UtbWVtYmVyLWNvbnRhaW5lclwiIHN0eWxlPXt7cGFkZGluZzowfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibWItMFwiIHN0eWxlPXt7cGFkZGluZzonMnB4IDBweCA2cHgnfX0+UHJvcG9zZXIgTWVtYmVyIERldGFpbHM8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIiBzdHlsZT17e3BhZGRpbmc6JzEwcHgnfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGxjeS1jYW5jZWwtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicGxjeS1jYW5jZWwgbWItMCBmdy01MDBcIj4qSW5jb3JyZWN0IG1lbWJlciBkZXRhaWxzIG1heSBsZWFkIHRvIHBvbGljeSBjYW5jZWxsYXRpb248L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgZC1ibG9ja1wiIHN0eWxlPXt7Zm9udFNpemU6IDExLCBjb2xvcjonI0Y0NDMzNicsIG1hcmdpblRvcDo1LCBwYWRkaW5nTGVmdDo4fX0+KkFsbCBmaWVsZHMgYXJlIG1hbmRhdG9yeTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnN1cmFuY2UtbWVtYmVyLWRldGFpbHMgbXJ0LTIwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEluc3VyU2VsZiB7Li4udGhpcy5wcm9wc30gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja0ZvclZhbGlkYXRpb24gPXt0aGlzLmNoZWNrRm9yVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgbWVtYmVyXyR7dGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlfWB9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX2lkPXt0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGV9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsaWRhdGVFcnJvcnM9e3RoaXMuc3RhdGUudmFsaWRhdGVFcnJvcnNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSB8fCBbXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRlT3RoZXJFcnJvcnM9e3RoaXMuc3RhdGUudmFsaWRhdGVPdGhlckVycm9yc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdIHx8IFtdfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNyZWF0ZUFwaUVycm9ycz17dGhpcy5zdGF0ZS5DcmVhdGVBcGlFcnJvcnMubWVtYmVycz90aGlzLnN0YXRlLkNyZWF0ZUFwaUVycm9ycy5tZW1iZXJzWzBdOltdfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZXM9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlc30gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc19lbmRvcnNlbWVudCA9IHtmYWxzZX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbmRvcnNlbWVudEVycm9yPXt0aGlzLnN0YXRlLmVuZG9yc2VtZW50RXJyb3J9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja0lzRW1haWxWZXJmaWVkID0ge3RoaXMuY2hlY2tJc0VtYWlsVmVyZmllZC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVtYmVyX3R5cGU9J2FkdWx0J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdHthZHVsdH1cblx0XHRcdFx0XHRcdFx0XHRcdHtjaGlsZH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XHRcdFxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGlja3ktYnRuXCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMpfT5Qcm9jZWVkICjigrkge3RoaXMuc3RhdGUuc2VsZWN0ZWRfcGxhbl9wcmljZX0pXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj57dGhpcy5zdGF0ZS5nc3R9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxDaGF0UGFuZWwgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdH1cblx0XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5zdXJhbmNlSW5wdXRWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgdXNlckRhdGEsc2VsZWN0SW5zdXJhbmNlUHJvZmlsZSwgc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnMsIHB1c2hVc2VyRGF0YSwgcmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnMsIHN1Ym1pdEVtYWlsT1RQLCBzZW5kT3RwT25FbWFpbH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBJbnN1cmFuY2VDb21wb25lbnRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZURldGFpbHNWaWV3LmpzJ1xuXG5jbGFzcyBJbnN1cmFuY2VEZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgLy90aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKClcbiAgICB9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxJbnN1cmFuY2VDb21wb25lbnRWaWV3IHsuLi50aGlzLnByb3BzfS8+XG5cdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgaW5zdXJuYWNlRGF0YSwgTE9BRF9JTlNVUkFOQ0UsIHNlbGVjdGVkX3BsYW4sc2VsZl9kYXRhX3ZhbHVlcyxzYXZlQ3VycmVudFNlbGVjdGVkTWVtYmVycyxzZWxlY3RlZFByb2ZpbGUsIGN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQsY3JlYXRlX3BheW1lbnRfcmVzcCwgZW5kb3JzZWRfbWVtYmVyX2RhdGEsIFxuICAgICAgICBtZW1iZXJzX3Byb29mc30gPSBzdGF0ZS5JTlNVUkFOQ0VcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnN1cm5hY2VEYXRhLExPQURfSU5TVVJBTkNFLHNlbGVjdGVkX3BsYW4sVVNFUixzZWxmX2RhdGFfdmFsdWVzLHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzLHNlbGVjdGVkUHJvZmlsZSwgY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZCwgY3JlYXRlX3BheW1lbnRfcmVzcCwgZW5kb3JzZWRfbWVtYmVyX2RhdGEsIG1lbWJlcnNfcHJvb2ZzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBnZXRJbnN1cmFuY2U6IChpbnN1cmFuY2VJZCkgPT4gZGlzcGF0Y2goZ2V0SW5zdXJhbmNlKGluc3VyYW5jZUlkKSksXG4gICAgICAgIC8vIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKSxcbiAgICAgICAgLy8gc2VsZWN0SW5zdXJhbmNlUGxhbjogKHBsYW4sY3JpdGVyaWEsZm9yY2VhZGQpID0+IGRpc3BhdGNoKHNlbGVjdEluc3VyYW5jZVBsYW4ocGxhbixjcml0ZXJpYSxmb3JjZWFkZCkpLFxuICAgICAgICB1c2VyRGF0YSA6KHNlbGZfZGF0YSxjcml0ZXJpYSxmb3JjZWFkZCkgPT4gZGlzcGF0Y2godXNlckRhdGEoc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSksXG4gICAgICAgIHNlbGVjdEluc3VyYW5jZVByb2ZpbGUgOihuZXdQcm9maWxlaWQsbWVtYmVyX2lkLG5ld1Byb2ZpbGUscGFyYW1faWQpID0+IGRpc3BhdGNoKHNlbGVjdEluc3VyYW5jZVByb2ZpbGUobmV3UHJvZmlsZWlkLG1lbWJlcl9pZCxuZXdQcm9maWxlLHBhcmFtX2lkKSksXG4gICAgICAgIHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzOiAobWVtYmVyc0lkKSA9PiBkaXNwYXRjaChzYXZlQ3VycmVudFNlbGVjdGVkTWVtYmVycyhtZW1iZXJzSWQpKSxcbiAgICAgICAgcHVzaFVzZXJEYXRhIDooY3JpdGVyaWEsY2FsbGJhY2spID0+IGRpc3BhdGNoKHB1c2hVc2VyRGF0YShjcml0ZXJpYSxjYWxsYmFjaykpLFxuICAgICAgICByZXNldFNlbGVjdGVkSW5zdXJhbmNlTWVtYmVyczogKCkgPT4gZGlzcGF0Y2gocmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnMoKSksXG4gICAgICAgIHN1Ym1pdEVtYWlsT1RQOiAoZGF0YSwgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdEVtYWlsT1RQKGRhdGEsIGNiKSksXG4gICAgICAgIHNlbmRPdHBPbkVtYWlsOihjcml0ZXJpYSxjYWxsYmFjayk9PmRpc3BhdGNoKHNlbmRPdHBPbkVtYWlsKGNyaXRlcmlhLGNhbGxiYWNrKSksXG4gICAgICAgIC8vIHJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzOiAoKSA9PiBkaXNwYXRjaChyZXNldFNlbGVjdGVkSW5zdXJhbmNlTWVtYmVycygpKVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbnN1cmFuY2VEZXRhaWxzKSJdLCJzb3VyY2VSb290IjoiIn0=