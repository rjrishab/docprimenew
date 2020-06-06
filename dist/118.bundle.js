(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./dev/js/components/insurance/insuranceReview.js":
/*!********************************************************!*\
  !*** ./dev/js/components/insurance/insuranceReview.js ***!
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

var _ChatPanel = __webpack_require__(/*! ../commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _insuranceCommonSection = __webpack_require__(/*! ./insuranceCommonSection.js */ "./dev/js/components/insurance/insuranceCommonSection.js");

var _insuranceCommonSection2 = _interopRequireDefault(_insuranceCommonSection);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _paymentForm = __webpack_require__(/*! ../commons/paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceReview = function (_React$Component) {
	_inherits(InsuranceReview, _React$Component);

	function InsuranceReview(props) {
		_classCallCheck(this, InsuranceReview);

		var _this = _possibleConstructorReturn(this, (InsuranceReview.__proto__ || Object.getPrototypeOf(InsuranceReview)).call(this, props));

		_this.state = {
			selectedProfile: '',
			selected_plan_price: '',
			is_edit: false,
			gst: 'inclusive of 18% GST',
			paymentData: null
		};
		return _this;
	}

	_createClass(InsuranceReview, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (window) {
				window.scrollTo(0, 0);
			}
			var self = this;
			this.setState(_extends({ selectedProfile: this.props.USER.defaultProfile, selected_plan_price: this.props.selected_plan.amount }, self.props.self_data_values[this.props.USER.defaultProfile]));
		}
	}, {
		key: 'proceedPlan',
		value: function proceedPlan() {
			var _this2 = this;

			var success_id = void 0;
			var insurance_pay = {};
			// insurance_pay.profile=1
			var isDummyUser = void 0;
			insurance_pay.insurance_plan = this.props.selected_plan.id;
			insurance_pay.insurer = this.props.insurnaceData['insurance'][0].id;
			insurance_pay.members = [];
			var selectedUser = this.props.USER.defaultProfile;
			var address = '';
			var email = '';
			var pincode = '';
			var town = '';
			var district = '';
			var state = '';
			var state_code = '';
			var city_code = '';
			var district_code = '';
			var endorsedSelf = void 0;
			var is_change = void 0;
			// let show_lname_flag = ''
			// let isDefaultUser
			if (this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.profiles[this.props.USER.defaultProfile]) {
				// isDefaultUser = this.props.USER.profiles[this.props.USER.defaultProfile].is_default_user
				isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
			}
			if (this.props.self_data_values && this.props.self_data_values[selectedUser] && !isDummyUser) {
				address = this.props.self_data_values[selectedUser].address;
				district = this.props.self_data_values[selectedUser].district;
				pincode = this.props.self_data_values[selectedUser].pincode;
				email = this.props.self_data_values[selectedUser].email;
				town = this.props.self_data_values[selectedUser].town;
				state = this.props.self_data_values[selectedUser].state;
				state_code = this.props.self_data_values[selectedUser].state_code;
				city_code = this.props.self_data_values[selectedUser].town_code;
				district_code = this.props.self_data_values[selectedUser].district_code;
				// show_lname_flag = this.props.self_data_values[selectedUser].show_lname_flag
			} else if (this.props.self_data_values && this.props.self_data_values[0] && isDummyUser) {
				address = this.props.self_data_values[0].address;
				district = this.props.self_data_values[0].district;
				pincode = this.props.self_data_values[0].pincode;
				email = this.props.self_data_values[0].email;
				town = this.props.self_data_values[0].town;
				state = this.props.self_data_values[0].state;
				state_code = this.props.self_data_values[0].state_code;
				city_code = this.props.self_data_values[0].town_code;
				district_code = this.props.self_data_values[0].district_code;
				// show_lname_flag = this.props.self_data_values[0].show_lname_flag
			} else if (this.props.self_data_values && this.props.is_endorsement) {
				Object.entries(this.props.self_data_values).map(function (_ref) {
					var _ref2 = _slicedToArray(_ref, 2),
					    key = _ref2[0],
					    value = _ref2[1];

					if (value.relation == 'self') {
						endorsedSelf = value;
					}
				});
				address = endorsedSelf.address;
				district = endorsedSelf.district;
				district_code = endorsedSelf.district_code;
				pincode = endorsedSelf.pincode;
				email = endorsedSelf.email;
				town = endorsedSelf.town;
				city_code = endorsedSelf.town_code;
				state = endorsedSelf.state;
				state_code = endorsedSelf.state_code;

				// show_lname_flag = this.props.self_data_values[0].show_lname_flag
			}

			var members = {};
			var currentSelectedProfiles = [];
			this.props.currentSelectedInsuredMembersId.map(function (val, key) {
				currentSelectedProfiles.push(val[key]);
			});
			var is_member_updated = [];
			var image_ids = [];
			{
				Object.entries(this.props.currentSelectedInsuredMembersId).map(function (_ref3) {
					var _ref4 = _slicedToArray(_ref3, 2),
					    key = _ref4[0],
					    value = _ref4[1];

					image_ids = [];
					var param = this.props.self_data_values[value[key]];
					members = {};
					members.title = param.title;
					if (param.no_lname) {
						members.middle_name = '';
						members.last_name = '';
					} else {
						members.middle_name = param.middle_name;
						members.last_name = param.last_name;
					}
					if (this.props.is_endorsement) {
						if (this.props.members_proofs && this.props.members_proofs.length > 0) {
							is_member_updated = this.props.members_proofs.filter(function (x) {
								return x.id == param.id;
							});
							if (is_member_updated && is_member_updated.length > 0) {
								members.is_change = true;
								if (is_member_updated[0].img_path_ids.length > 0) {
									is_member_updated[0].img_path_ids.map(function (imgId, i) {
										image_ids.push({ 'document_image': imgId.id });
									});
								}
								members.image_ids = image_ids;
							} else {
								members.is_change = false;
							}
						}
						members.id = param.id;
					}
					members.member = param.id;
					members.first_name = param.name;
					members.address = address;
					members.email = email;
					members.pincode = pincode;
					members.town = town;
					members.district = district;
					members.state = state;
					members.state_code = state_code;
					members.city_code = city_code;
					members.district_code = district_code;
					members.dob = param.dob;
					members.member_type = param.member_type;
					members.gender = param.gender;
					members.profile = param.profile_id;
					members.relation = param.relation;
					members.user_form_id = param.id;
					return insurance_pay.members.push(members);
				}, this);
			}
			console.log(insurance_pay);
			if (this.props.is_endorsement) {
				this.props.createEndorsementData(insurance_pay, function (resp) {
					// submit endoresment data
					if (resp && resp.success) {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.success });
						_this2.props.history.push('/insurance/certificate');
					} else if (resp.error) {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.error });
					}
				});
			} else {
				this.props.resetSelectedInsuranceMembers(); // filter only visible forms objexts in the store
				this.props.insurancePay(insurance_pay, function (resp) {
					// // to request payment
					if (resp.members && resp.members.length > 0) {
						_this2.props.history.push('/insurance/insurance-user-details');
					} else {
						if (resp.certificate) {
							_this2.props.history.push('/insurance/certificate');
						} else {
							if (resp.payment_required) {
								// this.props.history.push(`/payment/${resp.data.orderId}?refs=opd`)
								_this2.processPayment(resp);
							} else {
								success_id = '/insurance/complete?payment_success=true&id=' + resp.data.id;
								_this2.props.history.push(success_id);
							}
						}
					}
				});
			}
		}
	}, {
		key: 'sendAgentBookingURL',
		value: function sendAgentBookingURL() {
			var sms_type = 'insurance';
			if (this.props.is_endorsement && this.props.isAgent && this.props.isAgent == 'true') {
				sms_type = 'endorsement';
			}
			var extraParams = {};
			this.props.sendAgentBookingURL(null, 'sms', sms_type, null, extraParams, function (err, res) {
				//send payment link in sms to user by agaent
				if (err) {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SEND ERROR" });
				} else {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SENT SUCCESSFULY" });
				}
			});
		}
	}, {
		key: 'processPayment',
		value: function processPayment(data) {
			var _this3 = this;

			if (data && data.status) {
				this.setState({ paymentData: data.data }, function () {
					setTimeout(function () {
						if (document.getElementById('paymentForm') && Object.keys(_this3.state.paymentData).length > 0) {
							var form = document.getElementById('paymentForm');
							form.submit();
						}
					}, 500);
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			if (this.props.data) {
				var self = this;
				var isDummyUser = void 0;
				if (Object.keys(this.props.data.members).length > 0) {
					// if(this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.profiles[this.props.USER.defaultProfile]){
					// 	isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser
					// }

					var self_profile = this.props.data.members.filter(function (x) {
						return x.relation == 'self';
					})[0];
					var family_profile = this.props.data.members.filter(function (x) {
						return x.relation != 'self';
					});
					// if(!isDummyUser){
					// 	self_profile  = Object.assign({}, this.props.self_data_values[this.props.USER.defaultProfile])		
					// }else{
					// 	self_profile  = Object.assign({}, this.props.self_data_values[0])		
					// }
					// let currentSelectedProfiles = []
					//  this.props.currentSelectedInsuredMembersId.map((val,key) => {
					//		currentSelectedProfiles.push(val[key])
					//  })
					var self_edited_fields = [];
					if (this.props.data && this.props.data.edited_fields) {
						Object.entries(this.props.data.edited_fields).map(function (_ref5) {
							var _ref6 = _slicedToArray(_ref5, 2),
							    key = _ref6[0],
							    value = _ref6[1];

							if (key == self_profile.id) {
								self_edited_fields = value;
							}
						});
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
											this.props.is_endorsement ? _react2.default.createElement(
												'p',
												{ className: 'rev-ins-header', style: { color: '#000000' } },
												' Review your details',
												this.props.isAgent && this.props.isAgent == 'true' ? '' : _react2.default.createElement(
													'a',
													{ style: { color: 'var(--text--dark--all)', float: 'right' }, onClick: function onClick() {
															return _this4.props.history.push('/insurance/insurance-endorsement-details');
														} },
													_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/edit.svg" }),
													' Edit'
												)
											) : _react2.default.createElement(_insuranceCommonSection2.default, _extends({}, this.props, { is_edit: this.state.is_edit, is_edit_endorsment: this.props.is_endorsement })),
											_react2.default.createElement(
												'div',
												{ className: 'widget mrt-10', style: { padding: '10px 4px' } },
												_react2.default.createElement(
													'div',
													{ className: 'insurance-member-container', style: { padding: '0 8px 0' } },
													_react2.default.createElement(
														'div',
														{ className: 'ins-user-details-lisitng' },
														_react2.default.createElement(
															'p',
															{ className: 'sub-form-hed' },
															'Proposer'
														),
														_react2.default.createElement(
															'ul',
															{ className: 'ins-usr-img-para pl-0' },
															_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																	'div',
																	{ className: 'img-list-width' },
																	_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/user-01.svg" })
																),
																self_profile.no_lname ? _react2.default.createElement(
																	'p',
																	{ style: { 'textTransform': 'capitalize' } },
																	self_profile.name,
																	' | ',
																	self_profile.gender == 'm' ? 'Male' : self_profile.gender == 'f' ? 'Female' : self_profile.gender == 'o' ? 'Others' : '',
																	this.props.is_endorsement && self_edited_fields.length > 0 && (self_edited_fields.indexOf('first_name') != -1 || self_edited_fields.indexOf('middle_name') != -1 || self_edited_fields.indexOf('last_name') != -1 || self_edited_fields.indexOf('gender') != -1 || self_edited_fields.indexOf('title') != -1) ? _react2.default.createElement(
																		'span',
																		{ style: { color: '#757575', 'textTransform': 'none' } },
																		' (edited)'
																	) : ''
																) : _react2.default.createElement(
																	'p',
																	{ style: { 'textTransform': 'capitalize' } },
																	self_profile.name,
																	' ',
																	self_profile.middle_name,
																	' ',
																	self_profile.last_name,
																	' | ',
																	self_profile.gender == 'm' ? 'Male' : self_profile.gender == 'f' ? 'Female' : self_profile.gender == 'o' ? 'Others' : '',
																	this.props.is_endorsement && self_edited_fields.length > 0 && (self_edited_fields.indexOf('first_name') != -1 || self_edited_fields.indexOf('middle_name') != -1 || self_edited_fields.indexOf('last_name') != -1 || self_edited_fields.indexOf('gender') != -1 || self_edited_fields.indexOf('title') != -1) ? _react2.default.createElement(
																		'span',
																		{ style: { color: '#757575', 'textTransform': 'none' } },
																		' (edited)'
																	) : ''
																)
															),
															_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																	'div',
																	{ className: 'img-list-width' },
																	_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/calendar-01.svg" })
																),
																_react2.default.createElement(
																	'p',
																	null,
																	self_profile.dob,
																	this.props.is_endorsement && self_edited_fields.length > 0 && self_edited_fields.indexOf('dob') != -1 ? _react2.default.createElement(
																		'span',
																		{ style: { color: '#757575', 'textTransform': 'none' } },
																		' (edited)'
																	) : ''
																)
															),
															_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																	'div',
																	{ className: 'img-list-width' },
																	_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/mail-01.svg" })
																),
																_react2.default.createElement(
																	'p',
																	null,
																	self_profile.email,
																	this.props.is_endorsement && self_edited_fields.length > 0 && self_edited_fields.indexOf('email') != -1 ? _react2.default.createElement(
																		'span',
																		{ style: { color: '#757575', 'textTransform': 'none' } },
																		' (edited)'
																	) : ''
																)
															),
															_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																	'div',
																	{ className: 'img-list-width' },
																	_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/location-01.svg" })
																),
																_react2.default.createElement(
																	'p',
																	{ style: { 'textTransform': 'capitalize' } },
																	self_profile.address + ', ' + self_profile.town + ', ' + self_profile.district + ', ' + self_profile.state + ' - ' + self_profile.pincode,
																	this.props.is_endorsement && self_edited_fields.length > 0 && (self_edited_fields.indexOf('address') != -1 || self_edited_fields.indexOf('town') != -1 || self_edited_fields.indexOf('district') != -1 || self_edited_fields.indexOf('state') != -1 || self_edited_fields.indexOf('pincode') != -1) ? _react2.default.createElement(
																		'span',
																		{ style: { color: '#757575', 'textTransform': 'none' } },
																		' (edited)'
																	) : ''
																)
															)
														)
													),
													family_profile.map(function (val, key) {
														return _react2.default.createElement(
															'div',
															{ key: key, className: 'ins-sub-forms sub-input-forms-containers' },
															_react2.default.createElement('hr', { className: 'ins-internal-hr' }),
															_react2.default.createElement(
																'div',
																{ className: 'ins-user-details-lisitng' },
																_react2.default.createElement(
																	'p',
																	{ className: 'sub-form-hed' },
																	'Member ',
																	key + 1,
																	' '
																),
																_react2.default.createElement(
																	'div',
																	{ className: 'members-container-padding pl-0' },
																	_react2.default.createElement(
																		'div',
																		{ className: 'row' },
																		_react2.default.createElement(
																			'div',
																			{ className: 'col-6' },
																			_react2.default.createElement(
																				'div',
																				{ className: 'members-listings' },
																				_react2.default.createElement(
																					'div',
																					{ className: 'member-list-width' },
																					_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/hands-01.svg" })
																				),
																				_react2.default.createElement(
																					'p',
																					{ style: { 'textTransform': 'capitalize' } },
																					val.relation
																				)
																			)
																		),
																		_react2.default.createElement(
																			'div',
																			{ className: 'col-6' },
																			_react2.default.createElement(
																				'div',
																				{ className: 'members-listings' },
																				_react2.default.createElement(
																					'div',
																					{ className: 'member-list-width' },
																					_react2.default.createElement('img', { style: { width: '19px' }, className: 'ins-input-img', src: "/assets" + "/img/user-01.svg" })
																				),
																				val.no_lname ? _react2.default.createElement(
																					'p',
																					{ style: { 'textTransform': 'capitalize' } },
																					val.name,
																					' | ',
																					val.gender == 'm' ? 'Male' : val.gender == 'f' ? 'Female' : val.gender == 'o' ? 'Others' : '',
																					_this4.props.is_endorsement && _this4.props.data.edited_fields[val.id] && (_this4.props.data.edited_fields[val.id].indexOf('first_name') > -1 || _this4.props.data.edited_fields[val.id].indexOf('middle_name') > -1 || _this4.props.data.edited_fields[val.id].indexOf('last_name') > -1 || _this4.props.data.edited_fields[val.id].indexOf('gender') > -1 || _this4.props.data.edited_fields[val.id].indexOf('title') > -1) ? _react2.default.createElement(
																						'span',
																						{ style: { color: '#757575', 'textTransform': 'none' } },
																						' (edited)'
																					) : ''
																				) : _react2.default.createElement(
																					'p',
																					{ style: { 'textTransform': 'capitalize' } },
																					val.name,
																					' ',
																					val.middle_name,
																					' ',
																					val.last_name,
																					' | ',
																					val.gender == 'm' ? 'Male' : val.gender == 'f' ? 'Female' : val.gender == 'o' ? 'Others' : '',
																					_this4.props.is_endorsement && _this4.props.data.edited_fields[val.id] && (_this4.props.data.edited_fields[val.id].indexOf('first_name') > -1 || _this4.props.data.edited_fields[val.id].indexOf('middle_name') > -1 || _this4.props.data.edited_fields[val.id].indexOf('last_name') > -1 || _this4.props.data.edited_fields[val.id].indexOf('gender') > -1 || _this4.props.data.edited_fields[val.id].indexOf('title') > -1) ? _react2.default.createElement(
																						'span',
																						{ style: { color: '#757575', 'textTransform': 'none' } },
																						' (edited)'
																					) : ''
																				)
																			)
																		),
																		_react2.default.createElement(
																			'div',
																			{ className: 'col-6' },
																			_react2.default.createElement(
																				'div',
																				{ className: 'members-listings' },
																				_react2.default.createElement(
																					'div',
																					{ className: 'member-list-width' },
																					_react2.default.createElement('img', { className: 'ins-input-img', src: "/assets" + "/img/calendar-01.svg" })
																				),
																				_react2.default.createElement(
																					'p',
																					null,
																					val.dob,
																					_this4.props.is_endorsement && _this4.props.data.edited_fields[val.id] && _this4.props.data.edited_fields[val.id].indexOf('dob') > -1 ? _react2.default.createElement(
																						'span',
																						{ style: { color: '#757575', 'textTransform': 'none' } },
																						' (edited)'
																					) : ''
																				)
																			)
																		)
																	)
																)
															)
														);
													})
												)
											)
										)
									),
									_storage2.default.isAgent() ? _react2.default.createElement(
										'button',
										{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.sendAgentBookingURL.bind(this) },
										'Send SMS (\u20B9 ',
										this.state.selected_plan_price,
										')',
										_react2.default.createElement(
											'span',
											{ className: 'foot-btn-sub-span' },
											this.state.gst
										)
									) : _react2.default.createElement(
										'button',
										{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this) },
										this.props.is_endorsement ? 'Submit' : 'Pay Now (\u20B9' + this.state.selected_plan_price + ')',
										this.props.is_endorsement ? '' : _react2.default.createElement(
											'span',
											{ className: 'foot-btn-sub-span' },
											this.state.gst
										)
									)
								),
								_react2.default.createElement(_ChatPanel2.default, null)
							)
						),
						this.state.paymentData ? _react2.default.createElement(_paymentForm2.default, { paymentData: this.state.paymentData, refs: 'opd' }) : ""
					);
				} else {
					return _react2.default.createElement('div', null);
				}
			}
		}
	}]);

	return InsuranceReview;
}(_react2.default.Component);

exports.default = InsuranceReview;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceReview.js":
/*!********************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceReview.js ***!
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

var _insuranceReview = __webpack_require__(/*! ../../components/insurance/insuranceReview.js */ "./dev/js/components/insurance/insuranceReview.js");

var _insuranceReview2 = _interopRequireDefault(_insuranceReview);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var InsuranceReview = function (_React$Component) {
    _inherits(InsuranceReview, _React$Component);

    function InsuranceReview(props) {
        _classCallCheck(this, InsuranceReview);

        var _this = _possibleConstructorReturn(this, (InsuranceReview.__proto__ || Object.getPrototypeOf(InsuranceReview)).call(this, props));

        _this.state = {
            data: null,
            is_endorsement: false,
            isAgent: false
        };
        return _this;
    }

    _createClass(InsuranceReview, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var self = this;
            var parsed = queryString.parse(this.props.location.search);
            if (parsed.is_endorsement) {
                this.props.getInsurance(true, function (response) {
                    // to get insurance plans
                    if (!response.certificate) {
                        _this2.props.retrieveEndorsedData(function (resp) {
                            // to retrieve user endorsement data (if user want's to update any of details in there policy details)
                            _this2.setState({ data: resp.data, is_endorsement: true, isAgent: parsed.isAgent });
                        });
                    }
                });
            } else {
                this.props.getInsurance(false, function (response) {
                    if (!response.certificate) {
                        _this2.props.retrieveUserData(function (resp) {
                            // to retrieve user data in case of agent has loggedin instead of user 
                            if (resp && !resp.error) {
                                _this2.props.resetUserInsuredData(resp.data); // to reset the insurance store to initial state
                                _this2.setState({ data: resp.data });
                            }
                        });
                    }
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.LOAD_INSURANCE && this.state.data) {
                return _react2.default.createElement(_insuranceReview2.default, _extends({}, this.props, { data: this.state.data, is_endorsement: this.state.is_endorsement, isAgent: this.state.isAgent }));
            } else {
                if (this.props.insurnaceData.certificate && _storage2.default.checkAuth()) {
                    // if user is already an insurance customer so redirect on insured dashboard page
                    this.props.history.push('/insurance/certificate');
                }
                return _react2.default.createElement(
                    'div',
                    { className: 'profile-body-wrap' },
                    _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
                    _react2.default.createElement(_Loader2.default, null)
                );
            }
        }
    }]);

    return InsuranceReview;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$INSURANCE = state.INSURANCE,
        insurnaceData = _state$INSURANCE.insurnaceData,
        LOAD_INSURANCE = _state$INSURANCE.LOAD_INSURANCE,
        selected_plan = _state$INSURANCE.selected_plan,
        self_data_values = _state$INSURANCE.self_data_values,
        create_payment_resp = _state$INSURANCE.create_payment_resp,
        currentSelectedInsuredMembersId = _state$INSURANCE.currentSelectedInsuredMembersId,
        members_proofs = _state$INSURANCE.members_proofs;

    return {
        insurnaceData: insurnaceData, LOAD_INSURANCE: LOAD_INSURANCE, selected_plan: selected_plan, USER: USER, self_data_values: self_data_values, create_payment_resp: create_payment_resp, currentSelectedInsuredMembersId: currentSelectedInsuredMembersId, members_proofs: members_proofs
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getInsurance: function getInsurance(is_endorsement, callback) {
            return dispatch((0, _index.getInsurance)(is_endorsement, callback));
        },
        // getUserProfile: () => dispatch(getUserProfile()),
        // selectInsurancePlan: (plan,criteria,forceadd) => dispatch(selectInsurancePlan(plan,criteria,forceadd)),
        // userData :(self_data,criteria,forceadd) => dispatch(userData(self_data,criteria,forceadd)),
        insurancePay: function insurancePay(criteria, callback) {
            return dispatch((0, _index.insurancePay)(criteria, callback));
        },
        resetSelectedInsuranceMembers: function resetSelectedInsuranceMembers() {
            return dispatch((0, _index.resetSelectedInsuranceMembers)());
        },
        retrieveUserData: function retrieveUserData(cb) {
            return dispatch((0, _index.retrieveUserData)(cb));
        },
        sendAgentBookingURL: function sendAgentBookingURL(orderId, type, purchase_type, query_data, extraParams, cb) {
            return dispatch((0, _index.sendAgentBookingURL)(orderId, type, purchase_type, query_data, extraParams, cb));
        },
        resetUserInsuredData: function resetUserInsuredData(criteria) {
            return dispatch((0, _index.resetUserInsuredData)(criteria));
        },
        retrieveEndorsedData: function retrieveEndorsedData(cb) {
            return dispatch((0, _index.retrieveEndorsedData)(cb));
        },
        createEndorsementData: function createEndorsementData(insurance_pay, cb) {
            return dispatch((0, _index.createEndorsementData)(insurance_pay, cb));
        }

    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceReview);

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/es/index.js ***!
  \***********************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router/es/MemoryRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router/es/Prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return _Prompt__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router/es/Redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router/es/Route.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router/es/StaticRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return _StaticRouter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-router/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router/es/generatePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return _generatePath__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router/es/withRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _withRouter__WEBPACK_IMPORTED_MODULE_9__["default"]; });






















/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlUmV2aWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2luc3VyYW5jZS9JbnN1cmFuY2VSZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluc3VyYW5jZVJldmlldyIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RlZFByb2ZpbGUiLCJzZWxlY3RlZF9wbGFuX3ByaWNlIiwiaXNfZWRpdCIsImdzdCIsInBheW1lbnREYXRhIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZWxmIiwic2V0U3RhdGUiLCJVU0VSIiwiZGVmYXVsdFByb2ZpbGUiLCJzZWxlY3RlZF9wbGFuIiwiYW1vdW50Iiwic2VsZl9kYXRhX3ZhbHVlcyIsInN1Y2Nlc3NfaWQiLCJpbnN1cmFuY2VfcGF5IiwiaXNEdW1teVVzZXIiLCJpbnN1cmFuY2VfcGxhbiIsImlkIiwiaW5zdXJlciIsImluc3VybmFjZURhdGEiLCJtZW1iZXJzIiwic2VsZWN0ZWRVc2VyIiwiYWRkcmVzcyIsImVtYWlsIiwicGluY29kZSIsInRvd24iLCJkaXN0cmljdCIsInN0YXRlX2NvZGUiLCJjaXR5X2NvZGUiLCJkaXN0cmljdF9jb2RlIiwiZW5kb3JzZWRTZWxmIiwiaXNfY2hhbmdlIiwicHJvZmlsZXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG93bl9jb2RlIiwiaXNfZW5kb3JzZW1lbnQiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwidmFsdWUiLCJyZWxhdGlvbiIsImN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzIiwiY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZCIsInZhbCIsInB1c2giLCJpc19tZW1iZXJfdXBkYXRlZCIsImltYWdlX2lkcyIsInBhcmFtIiwidGl0bGUiLCJub19sbmFtZSIsIm1pZGRsZV9uYW1lIiwibGFzdF9uYW1lIiwibWVtYmVyc19wcm9vZnMiLCJmaWx0ZXIiLCJ4IiwiaW1nX3BhdGhfaWRzIiwiaW1nSWQiLCJpIiwibWVtYmVyIiwiZmlyc3RfbmFtZSIsIm5hbWUiLCJkb2IiLCJtZW1iZXJfdHlwZSIsImdlbmRlciIsInByb2ZpbGUiLCJwcm9maWxlX2lkIiwidXNlcl9mb3JtX2lkIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVuZG9yc2VtZW50RGF0YSIsInJlc3AiLCJzdWNjZXNzIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImhpc3RvcnkiLCJlcnJvciIsInJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzIiwiaW5zdXJhbmNlUGF5IiwiY2VydGlmaWNhdGUiLCJwYXltZW50X3JlcXVpcmVkIiwicHJvY2Vzc1BheW1lbnQiLCJkYXRhIiwic21zX3R5cGUiLCJpc0FnZW50IiwiZXh0cmFQYXJhbXMiLCJzZW5kQWdlbnRCb29raW5nVVJMIiwiZXJyIiwicmVzIiwic3RhdHVzIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JtIiwic3VibWl0Iiwic2VsZl9wcm9maWxlIiwiZmFtaWx5X3Byb2ZpbGUiLCJzZWxmX2VkaXRlZF9maWVsZHMiLCJlZGl0ZWRfZmllbGRzIiwiY29sb3IiLCJmbG9hdCIsIkFTU0VUU19CQVNFX1VSTCIsInBhZGRpbmciLCJpbmRleE9mIiwid2lkdGgiLCJTVE9SQUdFIiwiYmluZCIsInByb2NlZWRQbGFuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiZ2V0SW5zdXJhbmNlIiwicmVzcG9uc2UiLCJyZXRyaWV2ZUVuZG9yc2VkRGF0YSIsInJldHJpZXZlVXNlckRhdGEiLCJyZXNldFVzZXJJbnN1cmVkRGF0YSIsIkxPQURfSU5TVVJBTkNFIiwiY2hlY2tBdXRoIiwibWFwU3RhdGVUb1Byb3BzIiwiSU5TVVJBTkNFIiwiY3JlYXRlX3BheW1lbnRfcmVzcCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2FsbGJhY2siLCJjcml0ZXJpYSIsImNiIiwib3JkZXJJZCIsInR5cGUiLCJwdXJjaGFzZV90eXBlIiwicXVlcnlfZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxlOzs7QUFDTCwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNOQSxLQURNOztBQUVaLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxvQkFBZ0IsRUFESjtBQUVaQyx3QkFBb0IsRUFGUjtBQUdaQyxZQUFRLEtBSEk7QUFJWkMsUUFBSyxzQkFKTztBQUtUQyxnQkFBYTtBQUxKLEdBQWI7QUFGWTtBQVNmOzs7O3NDQUNrQjtBQUNsQixPQUFHQyxNQUFILEVBQVU7QUFDVEEsV0FBT0MsUUFBUCxDQUFnQixDQUFoQixFQUFrQixDQUFsQjtBQUNBO0FBQ0QsT0FBSUMsT0FBTyxJQUFYO0FBQ0EsUUFBS0MsUUFBTCxZQUFlUixpQkFBZ0IsS0FBS0YsS0FBTCxDQUFXVyxJQUFYLENBQWdCQyxjQUEvQyxFQUErRFQscUJBQW9CLEtBQUtILEtBQUwsQ0FBV2EsYUFBWCxDQUF5QkMsTUFBNUcsSUFBdUhMLEtBQUtULEtBQUwsQ0FBV2UsZ0JBQVgsQ0FBNEIsS0FBS2YsS0FBTCxDQUFXVyxJQUFYLENBQWdCQyxjQUE1QyxDQUF2SDtBQUNBOzs7Z0NBQ1k7QUFBQTs7QUFDWixPQUFJSSxtQkFBSjtBQUNBLE9BQUlDLGdCQUFjLEVBQWxCO0FBQ0E7QUFDQSxPQUFJQyxvQkFBSjtBQUNBRCxpQkFBY0UsY0FBZCxHQUE2QixLQUFLbkIsS0FBTCxDQUFXYSxhQUFYLENBQXlCTyxFQUF0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Ozs7Ozs7O0FDN1NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Y7QUFDVjtBQUNGO0FBQ007QUFDRjtBQUNKO0FBQ0Y7QUFDSTtBQUNGO0FBQ2M7QUFDRjtBQUNWO0FBQ0Y7QUFDYztBQUNGO0FBQ0o7QUFDRjtBQUNJIiwiZmlsZSI6IjExOC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2hhdFBhbmVsIGZyb20gJy4uL2NvbW1vbnMvQ2hhdFBhbmVsJ1xuaW1wb3J0IEluc3VyQ29tbW9uIGZyb20gJy4vaW5zdXJhbmNlQ29tbW9uU2VjdGlvbi5qcydcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi4vY29tbW9ucy9wYXltZW50Rm9ybSdcblxuY2xhc3MgSW5zdXJhbmNlUmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgXHRzZWxlY3RlZFByb2ZpbGU6JycsXG4gICAgICAgIFx0c2VsZWN0ZWRfcGxhbl9wcmljZTonJyxcbiAgICAgICAgXHRpc19lZGl0OmZhbHNlLFxuICAgICAgICBcdGdzdDogJ2luY2x1c2l2ZSBvZiAxOCUgR1NUJyxcbiAgICAgICAgICAgIHBheW1lbnREYXRhOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBcdGlmKHdpbmRvdyl7XG4gICAgXHRcdHdpbmRvdy5zY3JvbGxUbygwLDApXG4gICAgXHR9XG4gICAgXHRsZXQgc2VsZiA9IHRoaXNcbiAgICBcdHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkUHJvZmlsZTp0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUsIHNlbGVjdGVkX3BsYW5fcHJpY2U6dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmFtb3VudCwgLi4uc2VsZi5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV19KSAgXG4gICAgfVxuICAgIHByb2NlZWRQbGFuKCl7XG4gICAgXHRsZXQgc3VjY2Vzc19pZFxuICAgIFx0dmFyIGluc3VyYW5jZV9wYXk9e31cbiAgICBcdC8vIGluc3VyYW5jZV9wYXkucHJvZmlsZT0xXG4gICAgXHRsZXQgaXNEdW1teVVzZXJcbiAgICBcdGluc3VyYW5jZV9wYXkuaW5zdXJhbmNlX3BsYW49dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmlkXG4gICAgXHRpbnN1cmFuY2VfcGF5Lmluc3VyZXI9IHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0uaWRcbiAgICBcdGluc3VyYW5jZV9wYXkubWVtYmVycz1bXVxuICAgIFx0bGV0IHNlbGVjdGVkVXNlciA9IHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZVxuICAgIFx0bGV0IGFkZHJlc3M9JydcbiAgICBcdGxldCBlbWFpbD0nJ1xuICAgIFx0bGV0IHBpbmNvZGUgPSAnJ1xuICAgIFx0bGV0IHRvd24gPSAnJ1xuICAgIFx0bGV0IGRpc3RyaWN0ID0gJydcbiAgICBcdGxldCBzdGF0ZSA9ICcnXG4gICAgXHRsZXQgc3RhdGVfY29kZSA9ICcnXG4gICAgXHRsZXQgY2l0eV9jb2RlID0gJydcbiAgICBcdGxldCBkaXN0cmljdF9jb2RlID0gJydcbiAgICBcdGxldCBlbmRvcnNlZFNlbGZcbiAgICBcdGxldCBpc19jaGFuZ2VcbiAgICBcdC8vIGxldCBzaG93X2xuYW1lX2ZsYWcgPSAnJ1xuICAgIFx0Ly8gbGV0IGlzRGVmYXVsdFVzZXJcblx0XHRpZih0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pe1xuXHRcdFx0Ly8gaXNEZWZhdWx0VXNlciA9IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzX2RlZmF1bHRfdXNlclxuXHRcdFx0aXNEdW1teVVzZXIgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlclxuXHRcdH1cbiAgICBcdGlmKHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlcyAmJiB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbc2VsZWN0ZWRVc2VyXSAmJiAhaXNEdW1teVVzZXIpe1xuICAgIFx0XHRhZGRyZXNzID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3NlbGVjdGVkVXNlcl0uYWRkcmVzc1xuICAgIFx0XHRkaXN0cmljdCA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1tzZWxlY3RlZFVzZXJdLmRpc3RyaWN0XG4gICAgXHRcdHBpbmNvZGUgPSB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbc2VsZWN0ZWRVc2VyXS5waW5jb2RlXG4gICAgXHRcdGVtYWlsID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3NlbGVjdGVkVXNlcl0uZW1haWxcbiAgICBcdFx0dG93biA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1tzZWxlY3RlZFVzZXJdLnRvd25cbiAgICBcdFx0c3RhdGUgPSB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbc2VsZWN0ZWRVc2VyXS5zdGF0ZVxuICAgIFx0XHRzdGF0ZV9jb2RlID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3NlbGVjdGVkVXNlcl0uc3RhdGVfY29kZVxuICAgIFx0XHRjaXR5X2NvZGUgPSB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbc2VsZWN0ZWRVc2VyXS50b3duX2NvZGVcbiAgICBcdFx0ZGlzdHJpY3RfY29kZSA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1tzZWxlY3RlZFVzZXJdLmRpc3RyaWN0X2NvZGVcbiAgICBcdFx0Ly8gc2hvd19sbmFtZV9mbGFnID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3NlbGVjdGVkVXNlcl0uc2hvd19sbmFtZV9mbGFnXG4gICAgXHR9ZWxzZSBpZih0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMgJiYgdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzWzBdICYmIGlzRHVtbXlVc2VyKXtcbiAgICBcdFx0YWRkcmVzcyA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXS5hZGRyZXNzXG4gICAgXHRcdGRpc3RyaWN0ID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzWzBdLmRpc3RyaWN0XG4gICAgXHRcdHBpbmNvZGUgPSB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbMF0ucGluY29kZVxuICAgIFx0XHRlbWFpbCA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXS5lbWFpbFxuICAgIFx0XHR0b3duID0gdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzWzBdLnRvd25cbiAgICBcdFx0c3RhdGUgPSB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbMF0uc3RhdGVcbiAgICBcdFx0c3RhdGVfY29kZSA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXS5zdGF0ZV9jb2RlXG4gICAgXHRcdGNpdHlfY29kZSA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXS50b3duX2NvZGVcbiAgICBcdFx0ZGlzdHJpY3RfY29kZSA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXS5kaXN0cmljdF9jb2RlXG4gICAgXHRcdC8vIHNob3dfbG5hbWVfZmxhZyA9IHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXS5zaG93X2xuYW1lX2ZsYWdcbiAgICBcdH1lbHNlIGlmKHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlcyAmJiB0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50KXtcbiAgICBcdFx0T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG4gICAgXHRcdFx0aWYodmFsdWUucmVsYXRpb24gPT0gJ3NlbGYnKXtcbiAgICBcdFx0XHRcdGVuZG9yc2VkU2VsZiA9IHZhbHVlXG4gICAgXHRcdFx0fVxuICAgIFx0XHR9KVxuICAgIFx0XHRhZGRyZXNzID0gZW5kb3JzZWRTZWxmLmFkZHJlc3NcbiAgICBcdFx0ZGlzdHJpY3QgPSBlbmRvcnNlZFNlbGYuZGlzdHJpY3RcbiAgICBcdFx0ZGlzdHJpY3RfY29kZSA9IGVuZG9yc2VkU2VsZi5kaXN0cmljdF9jb2RlXG4gICAgXHRcdHBpbmNvZGUgPSBlbmRvcnNlZFNlbGYucGluY29kZVxuICAgIFx0XHRlbWFpbCA9IGVuZG9yc2VkU2VsZi5lbWFpbFxuICAgIFx0XHR0b3duID0gZW5kb3JzZWRTZWxmLnRvd25cbiAgICBcdFx0Y2l0eV9jb2RlID0gZW5kb3JzZWRTZWxmLnRvd25fY29kZVxuICAgIFx0XHRzdGF0ZSA9IGVuZG9yc2VkU2VsZi5zdGF0ZVxuICAgIFx0XHRzdGF0ZV9jb2RlID0gZW5kb3JzZWRTZWxmLnN0YXRlX2NvZGVcblxuICAgIFx0XHQvLyBzaG93X2xuYW1lX2ZsYWcgPSB0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbMF0uc2hvd19sbmFtZV9mbGFnXG4gICAgXHR9XG5cblxuICAgIFx0dmFyIG1lbWJlcnM9e31cbiAgICBcdGxldCBjdXJyZW50U2VsZWN0ZWRQcm9maWxlcyA9IFtdXG4gICAgXHR0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubWFwKCh2YWwsa2V5KSA9PiB7XG4gICAgXHRcdGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzLnB1c2godmFsW2tleV0pXG4gICAgXHR9KVxuICAgIFx0bGV0IGlzX21lbWJlcl91cGRhdGVkID0gW11cbiAgICBcdGxldCBpbWFnZV9pZHMgPSBbXVxuICAgIFx0e09iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZCkubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkge1xuICAgIFx0XHRpbWFnZV9pZHM9W11cbiAgICBcdFx0bGV0IHBhcmFtID10aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXNbdmFsdWVba2V5XV1cblx0XHRcdFx0bWVtYmVycz17fVxuXHRcdFx0XHRtZW1iZXJzLnRpdGxlPXBhcmFtLnRpdGxlXG5cdFx0XHRcdGlmKHBhcmFtLm5vX2xuYW1lKXtcblx0XHRcdFx0XHRtZW1iZXJzLm1pZGRsZV9uYW1lPScnXG5cdFx0ICAgIFx0XHRtZW1iZXJzLmxhc3RfbmFtZT0nJ1x0XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdG1lbWJlcnMubWlkZGxlX25hbWU9cGFyYW0ubWlkZGxlX25hbWVcblx0XHQgICAgXHRcdG1lbWJlcnMubGFzdF9uYW1lPXBhcmFtLmxhc3RfbmFtZVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKHRoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQpe1xuXHRcdFx0XHRcdGlmKHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMgJiYgdGhpcy5wcm9wcy5tZW1iZXJzX3Byb29mcy5sZW5ndGg+MCl7XG5cdFx0XHRcdFx0XHRpc19tZW1iZXJfdXBkYXRlZCA9IHRoaXMucHJvcHMubWVtYmVyc19wcm9vZnMuZmlsdGVyKCh4PT54LmlkID09IHBhcmFtLmlkKSlcblx0XHRcdFx0XHRcdGlmKGlzX21lbWJlcl91cGRhdGVkICYmIGlzX21lbWJlcl91cGRhdGVkLmxlbmd0aCA+IDApe1xuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmlzX2NoYW5nZT10cnVlXG5cdFx0XHRcdFx0XHRcdGlmKGlzX21lbWJlcl91cGRhdGVkWzBdLmltZ19wYXRoX2lkcy5sZW5ndGggPiAwKXtcblx0XHRcdFx0XHRcdFx0XHRpc19tZW1iZXJfdXBkYXRlZFswXS5pbWdfcGF0aF9pZHMubWFwKChpbWdJZCxpKT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2VfaWRzLnB1c2goeydkb2N1bWVudF9pbWFnZSc6aW1nSWQuaWR9KVxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWVtYmVycy5pbWFnZV9pZHMgPSBpbWFnZV9pZHNcblx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRtZW1iZXJzLmlzX2NoYW5nZT1mYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtZW1iZXJzLmlkPXBhcmFtLmlkXG5cdFx0XHRcdH1cblx0XHQgICAgXHRtZW1iZXJzLm1lbWJlciA9IHBhcmFtLmlkXG5cdFx0ICAgIFx0bWVtYmVycy5maXJzdF9uYW1lPXBhcmFtLm5hbWVcblx0XHQgICAgXHRtZW1iZXJzLmFkZHJlc3M9YWRkcmVzc1xuXHRcdCAgICBcdG1lbWJlcnMuZW1haWw9ZW1haWxcblx0XHQgICAgXHRtZW1iZXJzLnBpbmNvZGU9cGluY29kZVxuXHRcdCAgICBcdG1lbWJlcnMudG93bj10b3duXG5cdFx0ICAgIFx0bWVtYmVycy5kaXN0cmljdD1kaXN0cmljdFxuXHRcdCAgICBcdG1lbWJlcnMuc3RhdGU9c3RhdGVcblx0XHQgICAgXHRtZW1iZXJzLnN0YXRlX2NvZGU9c3RhdGVfY29kZVxuXHRcdCAgICBcdG1lbWJlcnMuY2l0eV9jb2RlPWNpdHlfY29kZVxuXHRcdCAgICBcdG1lbWJlcnMuZGlzdHJpY3RfY29kZT1kaXN0cmljdF9jb2RlXG5cdFx0ICAgIFx0bWVtYmVycy5kb2I9cGFyYW0uZG9iXG5cdFx0ICAgIFx0bWVtYmVycy5tZW1iZXJfdHlwZT1wYXJhbS5tZW1iZXJfdHlwZVxuXHRcdCAgICBcdG1lbWJlcnMuZ2VuZGVyPXBhcmFtLmdlbmRlclxuXHRcdCAgICBcdG1lbWJlcnMucHJvZmlsZT1wYXJhbS5wcm9maWxlX2lkXG5cdFx0ICAgIFx0bWVtYmVycy5yZWxhdGlvbj1wYXJhbS5yZWxhdGlvblxuXHRcdCAgICBcdG1lbWJlcnMudXNlcl9mb3JtX2lkPXBhcmFtLmlkXG5cdFx0XHRcdHJldHVybiBcdGluc3VyYW5jZV9wYXkubWVtYmVycy5wdXNoKG1lbWJlcnMpXG5cdFx0ICAgIFxuXHRcdH0sdGhpcyl9XG5cdFx0Y29uc29sZS5sb2coaW5zdXJhbmNlX3BheSlcblx0XHRpZih0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50KXtcblx0XHRcdHRoaXMucHJvcHMuY3JlYXRlRW5kb3JzZW1lbnREYXRhKGluc3VyYW5jZV9wYXksKHJlc3ApPT57IC8vIHN1Ym1pdCBlbmRvcmVzbWVudCBkYXRhXG5cdFx0XHRcdGlmKHJlc3AgJiYgcmVzcC5zdWNjZXNzKXtcblx0XHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IHJlc3Auc3VjY2Vzc30pXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvY2VydGlmaWNhdGUnKVxuXHRcdFx0XHR9ZWxzZSBpZihyZXNwLmVycm9yKXtcblx0XHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IHJlc3AuZXJyb3IgfSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMucHJvcHMucmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnMoKSAvLyBmaWx0ZXIgb25seSB2aXNpYmxlIGZvcm1zIG9iamV4dHMgaW4gdGhlIHN0b3JlXG5cdFx0XHR0aGlzLnByb3BzLmluc3VyYW5jZVBheShpbnN1cmFuY2VfcGF5LChyZXNwKT0+eyAvLyAvLyB0byByZXF1ZXN0IHBheW1lbnRcblx0XHRcdFx0aWYocmVzcC5tZW1iZXJzICYmIHJlc3AubWVtYmVycy5sZW5ndGggPjApe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS11c2VyLWRldGFpbHMnKVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZihyZXNwLmNlcnRpZmljYXRlKXtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2NlcnRpZmljYXRlJylcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdGlmKHJlc3AucGF5bWVudF9yZXF1aXJlZCl7XG5cdFx0XHRcdFx0XHRcdC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvcGF5bWVudC8ke3Jlc3AuZGF0YS5vcmRlcklkfT9yZWZzPW9wZGApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUGF5bWVudChyZXNwKVxuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3NfaWQgPSAnL2luc3VyYW5jZS9jb21wbGV0ZT9wYXltZW50X3N1Y2Nlc3M9dHJ1ZSZpZD0nK3Jlc3AuZGF0YS5pZFxuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChzdWNjZXNzX2lkKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0fSlcblx0XHR9XG4gICAgfVxuICAgIHNlbmRBZ2VudEJvb2tpbmdVUkwoKSB7XG4gICAgXHRsZXQgc21zX3R5cGUgPSAnaW5zdXJhbmNlJ1xuICAgIFx0aWYodGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCAmJiB0aGlzLnByb3BzLmlzQWdlbnQgJiYgdGhpcy5wcm9wcy5pc0FnZW50ID09ICd0cnVlJyl7XG4gICAgXHRcdHNtc190eXBlID0gJ2VuZG9yc2VtZW50J1xuXHRcdH1cblx0XHRsZXQgZXh0cmFQYXJhbXMgPSB7fVxuICAgICAgICB0aGlzLnByb3BzLnNlbmRBZ2VudEJvb2tpbmdVUkwobnVsbCwgJ3NtcycsIHNtc190eXBlLG51bGwsZXh0cmFQYXJhbXMsIChlcnIsIHJlcykgPT4geyAvL3NlbmQgcGF5bWVudCBsaW5rIGluIHNtcyB0byB1c2VyIGJ5IGFnYWVudFxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTTVMgU0VORCBFUlJPUlwiIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTTVMgU0VOVCBTVUNDRVNTRlVMWVwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHByb2Nlc3NQYXltZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50RGF0YTogZGF0YS5kYXRhIH0sICgpID0+IHtcbiAgICAgICAgICAgIFx0c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgXHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudEZvcm0nKSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBheW1lbnREYXRhKS5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudEZvcm0nKVxuXHQgICAgICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KClcblx0ICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFx0fSw1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cdHJlbmRlcigpe1x0XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhKXtcdFxuXHRcdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0XHRsZXQgaXNEdW1teVVzZXJcblx0XHRcdGlmKE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YS5tZW1iZXJzKS5sZW5ndGg+MCl7XG5cdCAgICBcdFx0Ly8gaWYodGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKXtcblx0ICAgIFx0XHQvLyBcdGlzRHVtbXlVc2VyID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcblx0ICAgIFx0XHQvLyB9XG5cblx0ICAgIFx0XHRsZXQgc2VsZl9wcm9maWxlID0gdGhpcy5wcm9wcy5kYXRhLm1lbWJlcnMuZmlsdGVyKHg9PiB4LnJlbGF0aW9uID09ICdzZWxmJylbMF1cblx0ICAgIFx0XHRsZXQgZmFtaWx5X3Byb2ZpbGUgPSB0aGlzLnByb3BzLmRhdGEubWVtYmVycy5maWx0ZXIoeD0+IHgucmVsYXRpb24gIT0gJ3NlbGYnKVxuXHQgICAgXHRcdC8vIGlmKCFpc0R1bW15VXNlcil7XG5cdCAgICBcdFx0Ly8gXHRzZWxmX3Byb2ZpbGUgID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pXHRcdFxuXHQgICAgXHRcdC8vIH1lbHNle1xuXHQgICAgXHRcdC8vIFx0c2VsZl9wcm9maWxlICA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlc1swXSlcdFx0XG5cdCAgICBcdFx0Ly8gfVxuXHRcdFx0Ly8gbGV0IGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzID0gW11cblx0ICAgIFx0Ly8gIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkSW5zdXJlZE1lbWJlcnNJZC5tYXAoKHZhbCxrZXkpID0+IHtcblx0ICAgIFx0Ly9cdFx0Y3VycmVudFNlbGVjdGVkUHJvZmlsZXMucHVzaCh2YWxba2V5XSlcblx0ICAgIFx0Ly8gIH0pXG5cdCAgICBcdGxldCBzZWxmX2VkaXRlZF9maWVsZHMgPSBbXVxuXHQgICAgXHRpZih0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhLmVkaXRlZF9maWVsZHMpe1xuXHQgICAgXHRcdE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuZGF0YS5lZGl0ZWRfZmllbGRzKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG5cdCAgICBcdFx0XHRpZihrZXkgPT0gc2VsZl9wcm9maWxlLmlkKXtcblx0ICAgIFx0XHRcdFx0c2VsZl9lZGl0ZWRfZmllbGRzPXZhbHVlXG5cdCAgICBcdFx0XHR9XHRcblx0ICAgIFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG5cdFx0XHRcdDxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9Lz5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luIGNhcmRNYWluUGFkZGluZ1JtdlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgZHNrdHAtcm93LWd1dHRlclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGlucy1tYWluLXBhZGRpbmdcIj5cblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWJvb2stc2NyZWVuXCI+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50P1xuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicmV2LWlucy1oZWFkZXJcIiBzdHlsZT17e2NvbG9yOicjMDAwMDAwJ319PiBSZXZpZXcgeW91ciBkZXRhaWxzIFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNBZ2VudCAmJiB0aGlzLnByb3BzLmlzQWdlbnQgPT0gJ3RydWUnPycnXG5cdFx0XHRcdFx0XHRcdDo8YSBzdHlsZT17e2NvbG9yOmB2YXIoLS10ZXh0LS1kYXJrLS1hbGwpYCxmbG9hdDoncmlnaHQnfX0gb25DbGljaz17KCk9PnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS1lbmRvcnNlbWVudC1kZXRhaWxzJyl9PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZWRpdC5zdmdcIn0vPiBFZGl0XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0OjxJbnN1ckNvbW1vbiB7Li4udGhpcy5wcm9wc30gaXNfZWRpdD17dGhpcy5zdGF0ZS5pc19lZGl0fSBpc19lZGl0X2VuZG9yc21lbnQ9e3RoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnR9Lz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcnQtMTBcIiBzdHlsZT17e3BhZGRpbmc6JzEwcHggNHB4J319PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnN1cmFuY2UtbWVtYmVyLWNvbnRhaW5lclwiIHN0eWxlPXt7cGFkZGluZzonMCA4cHggMCd9fT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtdXNlci1kZXRhaWxzLWxpc2l0bmdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWItZm9ybS1oZWRcIj5Qcm9wb3NlcjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiaW5zLXVzci1pbWctcGFyYSBwbC0wXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nLWxpc3Qtd2lkdGhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlucy1pbnB1dC1pbWdcIiAgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdXNlci0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxmX3Byb2ZpbGUubm9fbG5hbWU/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319PntzZWxmX3Byb2ZpbGUubmFtZX0gfCB7c2VsZl9wcm9maWxlLmdlbmRlcj09J20nPydNYWxlJzpzZWxmX3Byb2ZpbGUuZ2VuZGVyPT0nZic/J0ZlbWFsZSc6c2VsZl9wcm9maWxlLmdlbmRlcj09J28nPydPdGhlcnMnOicnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50ICYmIHNlbGZfZWRpdGVkX2ZpZWxkcy5sZW5ndGggPiAwICYmIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHNlbGZfZWRpdGVkX2ZpZWxkcy5pbmRleE9mKCdmaXJzdF9uYW1lJykgIT0gLTEgfHwgc2VsZl9lZGl0ZWRfZmllbGRzLmluZGV4T2YoJ21pZGRsZV9uYW1lJykgIT0gLTEgfHwgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGZfZWRpdGVkX2ZpZWxkcy5pbmRleE9mKCdsYXN0X25hbWUnKSAhPSAtMSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxmX2VkaXRlZF9maWVsZHMuaW5kZXhPZignZ2VuZGVyJykgIT0gLTEgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZl9lZGl0ZWRfZmllbGRzLmluZGV4T2YoJ3RpdGxlJykgIT0gLTEpP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjonIzc1NzU3NScsJ3RleHRUcmFuc2Zvcm0nOiAnbm9uZSd9fT4gKGVkaXRlZCk8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OicnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD46XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319PntzZWxmX3Byb2ZpbGUubmFtZX0ge3NlbGZfcHJvZmlsZS5taWRkbGVfbmFtZX0ge3NlbGZfcHJvZmlsZS5sYXN0X25hbWV9IHwge3NlbGZfcHJvZmlsZS5nZW5kZXI9PSdtJz8nTWFsZSc6c2VsZl9wcm9maWxlLmdlbmRlcj09J2YnPydGZW1hbGUnOnNlbGZfcHJvZmlsZS5nZW5kZXI9PSdvJz8nT3RoZXJzJzonJ30gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQgJiYgc2VsZl9lZGl0ZWRfZmllbGRzLmxlbmd0aCA+IDAgJiYgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoc2VsZl9lZGl0ZWRfZmllbGRzLmluZGV4T2YoJ2ZpcnN0X25hbWUnKSAhPSAtMSB8fCBzZWxmX2VkaXRlZF9maWVsZHMuaW5kZXhPZignbWlkZGxlX25hbWUnKSAhPSAtMSB8fCBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZl9lZGl0ZWRfZmllbGRzLmluZGV4T2YoJ2xhc3RfbmFtZScpICE9IC0xIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGZfZWRpdGVkX2ZpZWxkcy5pbmRleE9mKCdnZW5kZXInKSAhPSAtMSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxmX2VkaXRlZF9maWVsZHMuaW5kZXhPZigndGl0bGUnKSAhPSAtMSk/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17e2NvbG9yOicjNzU3NTc1JywndGV4dFRyYW5zZm9ybSc6ICdub25lJ319PiAoZWRpdGVkKTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6Jyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltZy1saXN0LXdpZHRoXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbnMtaW5wdXQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FsZW5kYXItMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57c2VsZl9wcm9maWxlLmRvYn0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50ICYmIHNlbGZfZWRpdGVkX2ZpZWxkcy5sZW5ndGggPiAwICYmIHNlbGZfZWRpdGVkX2ZpZWxkcy5pbmRleE9mKCdkb2InKSAhPSAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjonIzc1NzU3NScsJ3RleHRUcmFuc2Zvcm0nOiAnbm9uZSd9fT4gKGVkaXRlZCk8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDonJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWctbGlzdC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW5zLWlucHV0LWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21haWwtMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57c2VsZl9wcm9maWxlLmVtYWlsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudCAmJiBzZWxmX2VkaXRlZF9maWVsZHMubGVuZ3RoID4gMCAmJiBzZWxmX2VkaXRlZF9maWVsZHMuaW5kZXhPZignZW1haWwnKSAhPSAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjonIzc1NzU3NScsJ3RleHRUcmFuc2Zvcm0nOiAnbm9uZSd9fT4gKGVkaXRlZCk8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDonJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWctbGlzdC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW5zLWlucHV0LWltZ1wiICBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7J3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZSd9fT57YCR7c2VsZl9wcm9maWxlLmFkZHJlc3N9LCAke3NlbGZfcHJvZmlsZS50b3dufSwgJHtzZWxmX3Byb2ZpbGUuZGlzdHJpY3R9LCAke3NlbGZfcHJvZmlsZS5zdGF0ZX0gLSAke3NlbGZfcHJvZmlsZS5waW5jb2RlfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50ICYmIHNlbGZfZWRpdGVkX2ZpZWxkcy5sZW5ndGggPiAwICYmIChzZWxmX2VkaXRlZF9maWVsZHMuaW5kZXhPZignYWRkcmVzcycpICE9IC0xIHx8IHNlbGZfZWRpdGVkX2ZpZWxkcy5pbmRleE9mKCd0b3duJykgIT0gLTEgfHwgc2VsZl9lZGl0ZWRfZmllbGRzLmluZGV4T2YoJ2Rpc3RyaWN0JykgIT0gLTEgfHwgc2VsZl9lZGl0ZWRfZmllbGRzLmluZGV4T2YoJ3N0YXRlJykgIT0gLTF8fCBzZWxmX2VkaXRlZF9maWVsZHMuaW5kZXhPZigncGluY29kZScpICE9IC0xKT9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7Y29sb3I6JyM3NTc1NzUnLCd0ZXh0VHJhbnNmb3JtJzogJ25vbmUnfX0+IChlZGl0ZWQpPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6Jyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRmYW1pbHlfcHJvZmlsZS5tYXAoKHZhbCxrZXkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJpbnMtc3ViLWZvcm1zIHN1Yi1pbnB1dC1mb3Jtcy1jb250YWluZXJzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxociBjbGFzc05hbWU9XCJpbnMtaW50ZXJuYWwtaHJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy11c2VyLWRldGFpbHMtbGlzaXRuZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN1Yi1mb3JtLWhlZFwiPk1lbWJlciB7a2V5KzF9IDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlcnMtY29udGFpbmVyLXBhZGRpbmcgcGwtMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVtYmVycy1saXN0aW5nc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW1iZXItbGlzdC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlucy1pbnB1dC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9oYW5kcy0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319Pnt2YWwucmVsYXRpb259PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVtYmVycy1saXN0aW5nc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW1iZXItbGlzdC13aWR0aFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTlweCcgfX0gY2xhc3NOYW1lPVwiaW5zLWlucHV0LWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3VzZXItMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsLm5vX2xuYW1lP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319Pnt2YWwubmFtZX0gfCB7dmFsLmdlbmRlcj09J20nPydNYWxlJzp2YWwuZ2VuZGVyPT0nZic/J0ZlbWFsZSc6dmFsLmdlbmRlcj09J28nPydPdGhlcnMnOicnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQgJiYgdGhpcy5wcm9wcy5kYXRhLmVkaXRlZF9maWVsZHNbdmFsLmlkXSAmJiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHRoaXMucHJvcHMuZGF0YS5lZGl0ZWRfZmllbGRzW3ZhbC5pZF0uaW5kZXhPZignZmlyc3RfbmFtZScpID4gLTEgfHwgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5lZGl0ZWRfZmllbGRzW3ZhbC5pZF0uaW5kZXhPZignbWlkZGxlX25hbWUnKSA+IC0xIHx8IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEuZWRpdGVkX2ZpZWxkc1t2YWwuaWRdLmluZGV4T2YoJ2xhc3RfbmFtZScpID4gLTEgfHwgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5lZGl0ZWRfZmllbGRzW3ZhbC5pZF0uaW5kZXhPZignZ2VuZGVyJykgPiAtMSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEuZWRpdGVkX2ZpZWxkc1t2YWwuaWRdLmluZGV4T2YoJ3RpdGxlJykgPiAtMSk/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7Y29sb3I6JyM3NTc1NzUnLCd0ZXh0VHJhbnNmb3JtJzogJ25vbmUnfX0+IChlZGl0ZWQpPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDo8cCBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0+e3ZhbC5uYW1lfSB7dmFsLm1pZGRsZV9uYW1lfSB7dmFsLmxhc3RfbmFtZX0gfCB7dmFsLmdlbmRlcj09J20nPydNYWxlJzp2YWwuZ2VuZGVyPT0nZic/J0ZlbWFsZSc6dmFsLmdlbmRlcj09J28nPydPdGhlcnMnOicnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQgJiYgdGhpcy5wcm9wcy5kYXRhLmVkaXRlZF9maWVsZHNbdmFsLmlkXSAmJiBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHRoaXMucHJvcHMuZGF0YS5lZGl0ZWRfZmllbGRzW3ZhbC5pZF0uaW5kZXhPZignZmlyc3RfbmFtZScpID4gLTEgfHwgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5lZGl0ZWRfZmllbGRzW3ZhbC5pZF0uaW5kZXhPZignbWlkZGxlX25hbWUnKSA+IC0xIHx8IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEuZWRpdGVkX2ZpZWxkc1t2YWwuaWRdLmluZGV4T2YoJ2xhc3RfbmFtZScpID4gLTEgfHwgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5lZGl0ZWRfZmllbGRzW3ZhbC5pZF0uaW5kZXhPZignZ2VuZGVyJykgPiAtMSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEuZWRpdGVkX2ZpZWxkc1t2YWwuaWRdLmluZGV4T2YoJ3RpdGxlJykgPiAtMSk/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7Y29sb3I6JyM3NTc1NzUnLCd0ZXh0VHJhbnNmb3JtJzogJ25vbmUnfX0+IChlZGl0ZWQpPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlcnMtbGlzdGluZ3NcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWxpc3Qtd2lkdGhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbnMtaW5wdXQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FsZW5kYXItMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt2YWwuZG9ifVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQgJiYgdGhpcy5wcm9wcy5kYXRhLmVkaXRlZF9maWVsZHNbdmFsLmlkXSAmJiAodGhpcy5wcm9wcy5kYXRhLmVkaXRlZF9maWVsZHNbdmFsLmlkXS5pbmRleE9mKCdkb2InKSA+IC0xKT9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3tjb2xvcjonIzc1NzU3NScsJ3RleHRUcmFuc2Zvcm0nOiAnbm9uZSd9fT4gKGVkaXRlZCk8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDonJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdFNUT1JBR0UuaXNBZ2VudCgpPzxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0aWNreS1idG5cIiBvbkNsaWNrPXt0aGlzLnNlbmRBZ2VudEJvb2tpbmdVUkwuYmluZCh0aGlzKX0+U2VuZCBTTVMgKOKCuSB7dGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX3ByaWNlfSkgXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvb3QtYnRuLXN1Yi1zcGFuXCI+e3RoaXMuc3RhdGUuZ3N0fTwvc3Bhbj5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDo8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGlja3ktYnRuXCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMpfT57dGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudD8nU3VibWl0JzpgUGF5IE5vdyAo4oK5JHt0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fcHJpY2V9KWAgfVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5pc19lbmRvcnNlbWVudD8nJzo8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPnt0aGlzLnN0YXRlLmdzdH08L3NwYW4+XG5cdFx0XHRcdH1cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDaGF0UGFuZWwgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGF5bWVudERhdGEgPyA8UGF5bWVudEZvcm0gcGF5bWVudERhdGE9e3RoaXMuc3RhdGUucGF5bWVudERhdGF9IHJlZnM9J29wZCcgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQpXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIDxkaXY+PC9kaXY+XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VSZXZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3VzZXJEYXRhLGluc3VyYW5jZVBheSwgcmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnMsIHJldHJpZXZlVXNlckRhdGEsIHNlbmRBZ2VudEJvb2tpbmdVUkwsIHJlc2V0VXNlckluc3VyZWREYXRhLCBnZXRJbnN1cmFuY2UscmV0cmlldmVFbmRvcnNlZERhdGEsIGNyZWF0ZUVuZG9yc2VtZW50RGF0YX0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBJbnN1cmFuY2VSZXZpZXdWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZVJldmlldy5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmNsYXNzIEluc3VyYW5jZVJldmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBpc19lbmRvcnNlbWVudDpmYWxzZSxcbiAgICAgICAgICAgIGlzQWdlbnQ6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYocGFyc2VkLmlzX2VuZG9yc2VtZW50KXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0SW5zdXJhbmNlKHRydWUsKHJlc3BvbnNlKT0+eyAvLyB0byBnZXQgaW5zdXJhbmNlIHBsYW5zXG4gICAgICAgICAgICAgICAgaWYoIXJlc3BvbnNlLmNlcnRpZmljYXRlKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXRyaWV2ZUVuZG9yc2VkRGF0YSgocmVzcCk9PnsgLy8gdG8gcmV0cmlldmUgdXNlciBlbmRvcnNlbWVudCBkYXRhIChpZiB1c2VyIHdhbnQncyB0byB1cGRhdGUgYW55IG9mIGRldGFpbHMgaW4gdGhlcmUgcG9saWN5IGRldGFpbHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOnJlc3AuZGF0YSxpc19lbmRvcnNlbWVudDp0cnVlLCBpc0FnZW50OnBhcnNlZC5pc0FnZW50fSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0SW5zdXJhbmNlKGZhbHNlLChyZXNwb25zZSk9PntcbiAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuY2VydGlmaWNhdGUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJldHJpZXZlVXNlckRhdGEoKHJlc3ApPT57IC8vIHRvIHJldHJpZXZlIHVzZXIgZGF0YSBpbiBjYXNlIG9mIGFnZW50IGhhcyBsb2dnZWRpbiBpbnN0ZWFkIG9mIHVzZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwICYmICFyZXNwLmVycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0VXNlckluc3VyZWREYXRhKHJlc3AuZGF0YSkgLy8gdG8gcmVzZXQgdGhlIGluc3VyYW5jZSBzdG9yZSB0byBpbml0aWFsIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTpyZXNwLmRhdGF9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cdHJlbmRlcigpe1xuICAgICAgICBpZih0aGlzLnByb3BzLkxPQURfSU5TVVJBTkNFICYmIHRoaXMuc3RhdGUuZGF0YSl7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8SW5zdXJhbmNlUmV2aWV3VmlldyB7Li4udGhpcy5wcm9wc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBpc19lbmRvcnNlbWVudD17dGhpcy5zdGF0ZS5pc19lbmRvcnNlbWVudH0gaXNBZ2VudD17dGhpcy5zdGF0ZS5pc0FnZW50fS8+XG4gICAgICAgICAgICApXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhLmNlcnRpZmljYXRlICYmIFNUT1JBR0UuY2hlY2tBdXRoKCkpeyAvLyBpZiB1c2VyIGlzIGFscmVhZHkgYW4gaW5zdXJhbmNlIGN1c3RvbWVyIHNvIHJlZGlyZWN0IG9uIGluc3VyZWQgZGFzaGJvYXJkIHBhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9jZXJ0aWZpY2F0ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuXHRcdFxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgaW5zdXJuYWNlRGF0YSwgTE9BRF9JTlNVUkFOQ0UsIHNlbGVjdGVkX3BsYW4sc2VsZl9kYXRhX3ZhbHVlcyxjcmVhdGVfcGF5bWVudF9yZXNwLCBjdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkLCBtZW1iZXJzX3Byb29mc30gPSBzdGF0ZS5JTlNVUkFOQ0VcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnN1cm5hY2VEYXRhLExPQURfSU5TVVJBTkNFLHNlbGVjdGVkX3BsYW4sVVNFUixzZWxmX2RhdGFfdmFsdWVzLGNyZWF0ZV9wYXltZW50X3Jlc3AsIGN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQsIG1lbWJlcnNfcHJvb2ZzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJbnN1cmFuY2U6IChpc19lbmRvcnNlbWVudCxjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0SW5zdXJhbmNlKGlzX2VuZG9yc2VtZW50LGNhbGxiYWNrKSksXG4gICAgICAgIC8vIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKSxcbiAgICAgICAgLy8gc2VsZWN0SW5zdXJhbmNlUGxhbjogKHBsYW4sY3JpdGVyaWEsZm9yY2VhZGQpID0+IGRpc3BhdGNoKHNlbGVjdEluc3VyYW5jZVBsYW4ocGxhbixjcml0ZXJpYSxmb3JjZWFkZCkpLFxuICAgICAgICAvLyB1c2VyRGF0YSA6KHNlbGZfZGF0YSxjcml0ZXJpYSxmb3JjZWFkZCkgPT4gZGlzcGF0Y2godXNlckRhdGEoc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSksXG4gICAgICAgIGluc3VyYW5jZVBheSA6KGNyaXRlcmlhLGNhbGxiYWNrKSA9PiBkaXNwYXRjaChpbnN1cmFuY2VQYXkoY3JpdGVyaWEsY2FsbGJhY2spKSxcbiAgICAgICAgcmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnM6ICgpID0+IGRpc3BhdGNoKHJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzKCkpLFxuICAgICAgICByZXRyaWV2ZVVzZXJEYXRhOihjYikgPT5kaXNwYXRjaChyZXRyaWV2ZVVzZXJEYXRhKGNiKSksXG4gICAgICAgIHNlbmRBZ2VudEJvb2tpbmdVUkw6IChvcmRlcklkLCB0eXBlLCBwdXJjaGFzZV90eXBlLHF1ZXJ5X2RhdGEsIGV4dHJhUGFyYW1zLCBjYikgPT4gZGlzcGF0Y2goc2VuZEFnZW50Qm9va2luZ1VSTChvcmRlcklkLCB0eXBlLHB1cmNoYXNlX3R5cGUscXVlcnlfZGF0YSxleHRyYVBhcmFtcywgY2IpKSxcbiAgICAgICAgcmVzZXRVc2VySW5zdXJlZERhdGE6KGNyaXRlcmlhKSA9PmRpc3BhdGNoKHJlc2V0VXNlckluc3VyZWREYXRhKGNyaXRlcmlhKSksXG4gICAgICAgIHJldHJpZXZlRW5kb3JzZWREYXRhOihjYikgPT5kaXNwYXRjaChyZXRyaWV2ZUVuZG9yc2VkRGF0YShjYikpLFxuICAgICAgICBjcmVhdGVFbmRvcnNlbWVudERhdGE6KGluc3VyYW5jZV9wYXksY2IpID0+ZGlzcGF0Y2goY3JlYXRlRW5kb3JzZW1lbnREYXRhKGluc3VyYW5jZV9wYXksY2IpKVxuICAgICAgICBcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyAsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5zdXJhbmNlUmV2aWV3KSIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9