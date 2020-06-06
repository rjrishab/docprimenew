(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./dev/js/components/insurance/insuranceStaticView.js":
/*!************************************************************!*\
  !*** ./dev/js/components/insurance/insuranceStaticView.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _insurancePopup = __webpack_require__(/*! ./insurancePopup.js */ "./dev/js/components/insurance/insurancePopup.js");

var _insurancePopup2 = _interopRequireDefault(_insurancePopup);

var _insuranceCommonSection = __webpack_require__(/*! ./insuranceCommonSection.js */ "./dev/js/components/insurance/insuranceCommonSection.js");

var _insuranceCommonSection2 = _interopRequireDefault(_insuranceCommonSection);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");

var _assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");

var _HelmetTags = __webpack_require__(/*! ../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var InsuranceStaticView = function (_React$Component) {
	_inherits(InsuranceStaticView, _React$Component);

	function InsuranceStaticView(props) {
		_classCallCheck(this, InsuranceStaticView);

		var _this = _possibleConstructorReturn(this, (InsuranceStaticView.__proto__ || Object.getPrototypeOf(InsuranceStaticView)).call(this, props));

		_this.state = {
			//insuranceResults:this.props.insurnaceData,
			toggle: 'one',
			is_checked: _this.props.selected_plan ? _this.props.selected_plan.id : '',
			selected_plan_price: _this.props.selected_plan ? _this.props.selected_plan.amount : '',
			gst: 'Inclusive of 18% GST',
			selected_plan_data: _this.props.selected_plan ? _this.props.selected_plan : '',
			showPopup: false,
			shortURL: "",
			isLead: 'proceed',
			checkIdleTimeout: true,
			popupClass: '',
			overlayClass: '',
			identifyUserClick: ''
		};
		return _this;
	}

	_createClass(InsuranceStaticView, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// if (STORAGE.checkAuth()) {
			// 	this.props.getUserProfile()
			// }
			var lead_data = queryString.parse(this.props.location.search);
			var phoneNumber = '';
			if (!_storage2.default.checkAuth() && lead_data.page_source == 'banner') {
				// this.setState({checkIdleTimeout:false, showPopup:true, popupClass: 'translucent-popup', overlayClass: 'white-overlay', identifyUserClick:'bannerClick'})
				this.setState({ checkIdleTimeout: false, showPopup: true, popupClass: '', overlayClass: '', identifyUserClick: 'bannerClick' });
				var data = {
					'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopup', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'Insurance-login-popup-click', 'click_value': 'bannerClick'
				};

				_gtm2.default.sendEvent({ data: data });
			}
			if (_storage2.default.checkAuth() && this.props.USER && this.props.USER.primaryMobile != '') {
				phoneNumber = this.props.USER.primaryMobile;
			}
			this.props.generateInsuranceLead('', phoneNumber, lead_data, this.props.selectedLocation); // to create insurance lead for matrix
			var selectedId = this.props.selected_plan ? this.props.selected_plan.id : '';
			if (selectedId) {
				this.selectPlan(this.props.selected_plan);
			} else {
				if (this.textInput) {
					this.textInput.click();
				}
			}
			if (this.state.checkIdleTimeout && !_storage2.default.checkAuth()) {
				// this.setState({popupClass: 'translucent-popup', overlayClass: 'white-overlay'})
				this.inactivityTime();
			}
		}
	}, {
		key: 'inactivityTime',
		value: function inactivityTime() {
			var time;
			var self = this;
			window.onload = resetTimer;
			document.onmousemove = resetTimer;
			document.onkeypress = resetTimer;
			resetTimer();
			function stop() {
				var data = {
					'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopup', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'Insurance-login-popup-click', 'click_value': 'AutoClick'
				};
				_gtm2.default.sendEvent({ data: data });
				if (document.getElementById('proceedLead')) {
					document.getElementById('proceedLead').click();
					self.setState({ checkIdleTimeout: false, identifyUserClick: 'AutoClick' });
				}
			}

			function resetTimer() {
				clearTimeout(time);
				if (self.state.checkIdleTimeout) {
					time = setTimeout(stop, 20000);
				}
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			// let self = this
			// let selectedId = this.props.selected_plan?this.props.selected_plan.id:''
			// let newSelectedId = props.selected_plan?props.selected_plan.id:''
			// if(selectedId){
			// 	this.setState({ selected_plan_data: props.selected_plan , selected_plan_price: `(₹ ${props.selected_plan.amount})`, is_checked: selectedId })
			// }
			// if(!newSelectedId){
			// 	if(this.textInput){
			// 		this.textInput.click()
			// 	}
			// }
		}
	}, {
		key: 'selectPlan',
		value: function selectPlan(plan_to_toggle) {
			var plan = plan_to_toggle;
			plan_to_toggle.is_selected = true;
			// plan_to_toggle.plan_name = this.props.insurnaceData['insurance'][0].name
			// plan_to_toggle.logo = this.props.insurnaceData['insurance'][0].logo 
			// plan_to_toggle.insurer_document = this.props.insurnaceData['insurance'][0].insurer_document
			// plan_to_toggle.insurer = this.props.insurnaceData['insurance'][0].id
			// plan_to_toggle.stateData = this.props.insurnaceData['state'] 
			this.props.selectInsurancePlan('plan', plan); // save user selected plan
			this.setState({ is_checked: plan_to_toggle.id, selected_plan_data: plan_to_toggle, selected_plan_price: '(\u20B9 ' + plan_to_toggle.amount + ')', toggle: this.state.toggle == 'two' ? 'one' : 'one' });
		}
	}, {
		key: 'proceedPlan',
		value: function proceedPlan() {
			var parsed = queryString.parse(this.props.location.search);
			var plan = Object.assign({}, this.state.selected_plan_data);
			var lead_data = void 0;
			var phoneNumber = '';
			if (_storage2.default.checkAuth()) {
				if (this.props.USER && this.props.USER.primaryMobile != '') {
					phoneNumber = this.props.USER.primaryMobile;
				}
				if (Object.keys(plan).length > 0) {
					lead_data = parsed;
					this.props.generateInsuranceLead(plan.id, phoneNumber, lead_data, this.props.selectedLocation); // to create insurance lead for matrix
				}
				this.props.history.push('/insurance/insurance-plan-view');
			} else {
				this.setState({ showPopup: true });
			}
		}
	}, {
		key: 'proceedPlan1',
		value: function proceedPlan1() {
			var self = this;
			var parsed = queryString.parse(this.props.location.search);
			var plan = Object.assign({}, this.state.selected_plan_data);
			var profileLength = void 0;
			var memberStoreDataLength = void 0;
			var membersArray = [];
			var profilesArray = [];
			var lead_data = void 0;
			// plan.plan_name = this.props.insurnaceData['insurance'][0].name
			// plan.logo = this.props.insurnaceData['insurance'][0].logo 
			// plan.insurer_document = this.props.insurnaceData['insurance'][0].insurer_document   	
			// plan.insurer = this.props.insurnaceData['insurance'][0].id
			// plan.stateData = this.props.insurnaceData['state']
			// this.props.selectInsurancePlan('plan', plan)
			this.props.resetSelectedPlans(); // to reset user selected plan
			if (_storage2.default.checkAuth()) {
				var phoneNumber = '';
				if (this.props.USER && this.props.USER.primaryMobile != '') {
					phoneNumber = this.props.USER.primaryMobile;
				}
				if (Object.keys(plan).length > 0) {
					lead_data = parsed;
					this.props.generateInsuranceLead(plan.id, phoneNumber, lead_data, this.props.selectedLocation); // to create insurance lead for matrix
				}
				profileLength = Object.keys(this.props.USER.profiles).length;
				memberStoreDataLength = Object.keys(this.props.self_data_values).length;
				if (profileLength > 0 && memberStoreDataLength > 0) {
					Object.entries(this.props.self_data_values).map(function (_ref) {
						var _ref2 = _slicedToArray(_ref, 2),
						    key = _ref2[0],
						    self_data_values = _ref2[1];

						Object.entries(self.props.USER.profiles).map(function (_ref3) {
							var _ref4 = _slicedToArray(_ref3, 2),
							    k = _ref4[0],
							    profiles = _ref4[1];

							if (self_data_values.id == profiles.id) {
								membersArray.push(self_data_values);
								profilesArray.push(profiles);
							}
						});
					});
					if (membersArray.length == profilesArray.length) {
						Object.entries(membersArray).map(function (_ref5) {
							var _ref6 = _slicedToArray(_ref5, 2),
							    key = _ref6[0],
							    values = _ref6[1];

							if (membersArray[key].id == profilesArray[key].id) {
								var memberNewdata = values;
								var newName = profilesArray[key].name.split(" ");
								if (newName.length == 3) {
									memberNewdata.name = newName[0];
									memberNewdata.middle_name = newName[1];
									memberNewdata.last_name = newName[2];
								} else if (newName.length == 2) {
									memberNewdata.name = newName[0];
									memberNewdata.last_name = newName[1];
								} else {
									memberNewdata.name = newName[0];
								}
								if (membersArray[key].email != '') {
									memberNewdata.email = membersArray[key].email;
								} else {
									memberNewdata.email = profilesArray[key].email;
								}

								if (membersArray[key].dob != null || membersArray[key].dob != '') {
									memberNewdata.dob = membersArray[key].dob;
								} else {
									memberNewdata.dob = profilesArray[key].dob;
								}
								if (membersArray[key].gender != '') {
									memberNewdata.gender = membersArray[key].gender;
								} else {
									memberNewdata.gender = profilesArray[key].gender;
								}
								self.props.userData('memberNewdata', memberNewdata);
							}
						});
						this.props.history.push('/insurance/insurance-user-details');
					} else {
						this.props.history.push('/insurance/insurance-user-details');
					}
				} else {
					this.props.history.push('/insurance/insurance-user-details');
				}
			} else {
				this.setState({ showPopup: true });
			}
		}
	}, {
		key: 'proceedLead',
		value: function proceedLead(type) {
			if (!this.state.checkIdleTimeout) {
				var data = {
					'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopup', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'Insurance-login-popup-click', 'click_value': 'userClick', type: type
				};
				this.setState({ popupClass: '', overlayClass: '' });
				_gtm2.default.sendEvent({ data: data });
			}
			this.setState({ isLead: type, showPopup: true, identifyUserClick: 'userClick' });
		}
	}, {
		key: 'closeLeadPopup',
		value: function closeLeadPopup() {
			this.setState({ showPopup: false });
		}
	}, {
		key: 'hideLoginPopup',
		value: function hideLoginPopup() {
			this.setState({ showPopup: false });
		}
	}, {
		key: 'shortenUrl',
		value: function shortenUrl() {
			var _this2 = this;

			if (window) {
				var url = window.location.href + '&force_location=true';
				this.props.urlShortner(url, function (err, data) {
					if (!err) {
						_this2.setState({ shortURL: data.tiny_url });
					}
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var parsed = queryString.parse(this.props.location.search);

			if (this.props.LOAD_INSURANCE) {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'profile-body-wrap' },
						_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
						_react2.default.createElement(
							'section',
							{ className: 'container article-container' },
							_react2.default.createElement(
								'div',
								{ className: 'row main-row parent-section-row justify-content-center' },
								_react2.default.createElement(
									'div',
									{ className: 'col-12 col-md-10 col-lg-10 center-column' },
									_react2.default.createElement(
										'div',
										{ className: 'container-fluid article-column ins-landing-shadow' },
										_react2.default.createElement(
											'div',
											{ className: 'ins-landing-container' },
											_react2.default.createElement(
												'div',
												null,
												_react2.default.createElement(
													'div',
													{ className: 'ins-steps-section' },
													_react2.default.createElement(
														'div',
														{ className: 'doc-usr-only' },
														_react2.default.createElement(
															'h1',
															null,
															'Group OPD Insurance exclusively for ',
															_react2.default.createElement(
																'span',
																null,
																'Docprime'
															),
															' users only '
														),
														_react2.default.createElement(
															'div',
															{ className: 'doc-pwdby' },
															_react2.default.createElement(
																'p',
																null,
																'Powered by'
															),
															_react2.default.createElement('img', { style: { width: '130px' }, src: 'https://cdn.docprime.com/media/insurer/images/AMHI_Logo-01.png' })
														)
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'ins-steps-section' },
													_react2.default.createElement(
														'div',
														{ className: 'row align-item-center' },
														_react2.default.createElement(
															'div',
															{ className: 'col-6' },
															_react2.default.createElement(
																'div',
																{ className: 'lft-cntn-algn' },
																_react2.default.createElement('img', { className: 'ins-step-img', src: "/assets" + "/img/ins-hosp.png" })
															)
														),
														_react2.default.createElement(
															'div',
															{ className: 'col-6' },
															_react2.default.createElement(
																'div',
																{ className: 'lft-para-algn' },
																_react2.default.createElement(
																	'p',
																	{ className: 'step-blk-para' },
																	'Unlimited'
																),
																_react2.default.createElement(
																	'p',
																	{ className: 'step-blk-para' },
																	'Doctor'
																),
																_react2.default.createElement(
																	'p',
																	{ className: 'step-orng-para' },
																	'Consultation'
																),
																_react2.default.createElement(
																	'p',
																	{ className: 'step-qut-para' },
																	'with ',
																	_react2.default.createElement(
																		'span',
																		null,
																		'20,000+'
																	),
																	' Doctors*'
																)
															)
														)
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'ins-steps-section' },
													_react2.default.createElement(
														'div',
														{ className: 'row align-item-center' },
														_react2.default.createElement(
															'div',
															{ className: 'col-6' },
															_react2.default.createElement(
																'div',
																{ className: 'lft-para-algn' },
																_react2.default.createElement(
																	'p',
																	{ className: 'step-blk-para' },
																	'Unlimited'
																),
																_react2.default.createElement(
																	'p',
																	{ className: 'step-orng-para' },
																	'Lab Tests'
																),
																_react2.default.createElement(
																	'p',
																	{ className: 'step-qut-para' },
																	'at ',
																	_react2.default.createElement(
																		'span',
																		null,
																		'2,000+'
																	),
																	' Diagnostic Labs*'
																)
															)
														),
														_react2.default.createElement(
															'div',
															{ className: 'col-6' },
															_react2.default.createElement('img', { className: 'ins-step-img', src: "/assets" + "/img/isn-lab.png" })
														)
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'ins-steps-section' },
													_react2.default.createElement(
														'div',
														{ className: 'row align-item-center' },
														_react2.default.createElement(
															'div',
															{ className: 'col-6' },
															_react2.default.createElement(
																'div',
																{ className: 'lft-cntn-algn' },
																_react2.default.createElement('img', { className: 'ins-step-img', src: "/assets" + "/img/ins-act.png" })
															)
														),
														_react2.default.createElement(
															'div',
															{ className: 'col-6' },
															_react2.default.createElement(
																'div',
																{ className: 'lft-para-algn' },
																_react2.default.createElement(
																	'p',
																	{ className: 'step-orng-para' },
																	'Instant Activation'
																),
																_react2.default.createElement(
																	'p',
																	{ className: 'step-blk-para' },
																	'Upon Purchase'
																)
															)
														)
													)
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'ins-land-listing' },
												_react2.default.createElement(
													'p',
													null,
													_react2.default.createElement('img', { src: "/assets" + '/img/ins-hrt.png' }),
													'Pre existing diseases covered'
												),
												_react2.default.createElement(
													'p',
													null,
													_react2.default.createElement('img', { src: "/assets" + '/img/ins-rprt.png' }),
													'No medical test required for policy issuance'
												),
												_react2.default.createElement(
													'p',
													null,
													_react2.default.createElement('img', { src: "/assets" + '/img/ins-yr.png' }),
													'Valid for 1 year from policy issuance'
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'ins-network-cont' },
												_react2.default.createElement(
													'div',
													{ className: 'ins-netwrk-heading-cont' },
													_react2.default.createElement(
														'p',
														null,
														'Only available on Docprime network* '
													),
													_react2.default.createElement(
														'span',
														{ href: '/insurance/network', onClick: function onClick(e) {
																e.preventDefault();
																var data = {
																	'Category': 'ConsumerApp', 'Action': 'InsuranceNetwork', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'insurance-network', 'click_value': 'insurance-network'
																};

																_gtm2.default.sendEvent({ data: data });
																_this3.props.history.push('/insurance/network');
															} },
														'View network'
													)
												),
												_react2.default.createElement(
													'p',
													{ className: 'ins-nw-note' },
													'A few things to note... '
												),
												_react2.default.createElement(
													'ul',
													{ className: 'ins-nw-listing' },
													_react2.default.createElement(
														'li',
														null,
														'All procedures (dental, daycare etc..) and sessions (therapy, counselling etc..) are not covered'
													),
													_react2.default.createElement(
														'li',
														null,
														'Any lab test or doctor appointments with MRP more than \u20B91500 are not covered'
													),
													_react2.default.createElement(
														'li',
														null,
														'Only 5 oncology and 5 Gynecology doctor appointments are covered in a policy year'
													),
													_react2.default.createElement(
														'li',
														null,
														'Docprime\'s Insurance network is dynamic in nature and may change from time to time'
													)
												)
											)
										)
									),
									parsed.show_button ? _react2.default.createElement(
										'div',
										{ className: 'sticky-btn fixed insuBtnsContainer' },
										_react2.default.createElement(
											'button',
											{ className: 'insu-left-white-btn', onClick: function onClick() {
													return _this3.props.history.go(-1);
												} },
											'Back to Booking'
										),
										_react2.default.createElement(
											'button',
											{ className: 'insu-right-orng-btn', onClick: this.proceedPlan.bind(this) },
											'Buy Now'
										)
									) : _react2.default.createElement(
										'div',
										{ className: 'sticky-btn fixed insuBtnsContainer' },
										_react2.default.createElement(
											'button',
											{ id: 'proceedLead', className: 'insu-right-orng-btn ins-buy-btn', onClick: this.proceedPlan.bind(this) },
											'Buy Now'
										)
									)
								)
							)
						),
						this.state.showPopup ? _react2.default.createElement(_insurancePopup2.default, _extends({}, this.props, { selected_plan: this.state.selected_plan_data, hideLoginPopup: this.hideLoginPopup.bind(this), isLead: this.state.isLead, closeLeadPopup: this.closeLeadPopup.bind(this), popupClass: this.state.popupClass, overlayClass: this.state.overlayClass, identifyUserClick: this.state.identifyUserClick })) : ''
					)
				);
			}
		}
	}]);

	return InsuranceStaticView;
}(_react2.default.Component);

exports.default = InsuranceStaticView;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceStaticView.js":
/*!************************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceStaticView.js ***!
  \************************************************************/
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

var _insuranceStaticView = __webpack_require__(/*! ../../components/insurance/insuranceStaticView.js */ "./dev/js/components/insurance/insuranceStaticView.js");

var _insuranceStaticView2 = _interopRequireDefault(_insuranceStaticView);

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

var InsuranceStaticView = function (_React$Component) {
    _inherits(InsuranceStaticView, _React$Component);

    function InsuranceStaticView(props) {
        _classCallCheck(this, InsuranceStaticView);

        var _this = _possibleConstructorReturn(this, (InsuranceStaticView.__proto__ || Object.getPrototypeOf(InsuranceStaticView)).call(this, props));

        _this.state = {
            showInsuranceView: false
        };
        return _this;
    }

    _createClass(InsuranceStaticView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile(); // to get loggedIn user profile
            }
            /*this.props.getInsurance(resp=>{
                if(!resp.certificate){
                    this.props.generateInsuranceLead('',phoneNumber,lead_data)
                }
            })*/
            if (window) {
                window.scrollTo(0, 0);
            }
            this.props.getInsurance(false); // to get insurance plans
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.LOAD_INSURANCE) {
                // this.props.history.push('/vip-club-details?source=mobile-leftmenu-vip-clicked&lead_source=Docprime')
                return _react2.default.createElement(_insuranceStaticView2.default, this.props);
            } else {
                if (this.props.insurnaceData.certificate && _storage2.default.checkAuth()) {
                    // if user is already an insurance customer so redirect on insured dashboard page
                    this.props.history.push('/insurance/certificate');
                }
                return _react2.default.createElement(
                    'div',
                    { className: 'profile-body-wrap' },
                    _react2.default.createElement(_Loader2.default, null)
                );
            }
        }
    }]);

    return InsuranceStaticView;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$INSURANCE = state.INSURANCE,
        insurnaceData = _state$INSURANCE.insurnaceData,
        LOAD_INSURANCE = _state$INSURANCE.LOAD_INSURANCE,
        selected_plan = _state$INSURANCE.selected_plan,
        self_data_values = _state$INSURANCE.self_data_values;
    var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;

    return {
        insurnaceData: insurnaceData, LOAD_INSURANCE: LOAD_INSURANCE, selected_plan: selected_plan, self_data_values: self_data_values, USER: USER, selectedLocation: selectedLocation
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getInsurance: function getInsurance(is_endorsement, callback) {
            return dispatch((0, _index.getInsurance)(is_endorsement, callback));
        },
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        selectInsurancePlan: function selectInsurancePlan(plan, criteria) {
            return dispatch((0, _index.selectInsurancePlan)(plan, criteria));
        },
        // saveCurrentSelectedMembers: (membersId) => dispatch(saveCurrentSelectedMembers(membersId)),
        resetSelectedPlans: function resetSelectedPlans() {
            return dispatch((0, _index.resetSelectedPlans)());
        },
        sendOTP: function sendOTP(number, viaSms, viaWhatsapp, message_type, cb) {
            return dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb));
        },
        submitOTP: function submitOTP(number, otp, extraParamsData, cb) {
            return dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb));
        },
        resetAuth: function resetAuth() {
            return dispatch((0, _index.resetAuth)());
        },
        userData: function userData(self_data, criteria, forceadd) {
            return dispatch((0, _index.userData)(self_data, criteria, forceadd));
        },
        generateInsuranceLead: function generateInsuranceLead(selectedPlan, number, lead_data, cb) {
            return dispatch((0, _index.generateInsuranceLead)(selectedPlan, number, lead_data, cb));
        },
        urlShortner: function urlShortner(url, cb) {
            return dispatch((0, _index.urlShortner)(url, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceStaticView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlU3RhdGljVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pbnN1cmFuY2UvSW5zdXJhbmNlU3RhdGljVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiSW5zdXJhbmNlU3RhdGljVmlldyIsInByb3BzIiwic3RhdGUiLCJ0b2dnbGUiLCJpc19jaGVja2VkIiwic2VsZWN0ZWRfcGxhbiIsImlkIiwic2VsZWN0ZWRfcGxhbl9wcmljZSIsImFtb3VudCIsImdzdCIsInNlbGVjdGVkX3BsYW5fZGF0YSIsInNob3dQb3B1cCIsInNob3J0VVJMIiwiaXNMZWFkIiwiY2hlY2tJZGxlVGltZW91dCIsInBvcHVwQ2xhc3MiLCJvdmVybGF5Q2xhc3MiLCJpZGVudGlmeVVzZXJDbGljayIsImxlYWRfZGF0YSIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJwaG9uZU51bWJlciIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJwYWdlX3NvdXJjZSIsInNldFN0YXRlIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsIlVTRVIiLCJwcmltYXJ5TW9iaWxlIiwiZ2VuZXJhdGVJbnN1cmFuY2VMZWFkIiwic2VsZWN0ZWRMb2NhdGlvbiIsInNlbGVjdGVkSWQiLCJzZWxlY3RQbGFuIiwidGV4dElucHV0IiwiY2xpY2siLCJpbmFjdGl2aXR5VGltZSIsInRpbWUiLCJzZWxmIiwid2luZG93Iiwib25sb2FkIiwicmVzZXRUaW1lciIsImRvY3VtZW50Iiwib25tb3VzZW1vdmUiLCJvbmtleXByZXNzIiwic3RvcCIsImdldEVsZW1lbnRCeUlkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInBsYW5fdG9fdG9nZ2xlIiwicGxhbiIsImlzX3NlbGVjdGVkIiwic2VsZWN0SW5zdXJhbmNlUGxhbiIsInBhcnNlZCIsIk9iamVjdCIsImFzc2lnbiIsImtleXMiLCJsZW5ndGgiLCJoaXN0b3J5IiwicHVzaCIsInByb2ZpbGVMZW5ndGgiLCJtZW1iZXJTdG9yZURhdGFMZW5ndGgiLCJtZW1iZXJzQXJyYXkiLCJwcm9maWxlc0FycmF5IiwicmVzZXRTZWxlY3RlZFBsYW5zIiwicHJvZmlsZXMiLCJzZWxmX2RhdGFfdmFsdWVzIiwiZW50cmllcyIsIm1hcCIsImtleSIsImsiLCJ2YWx1ZXMiLCJtZW1iZXJOZXdkYXRhIiwibmV3TmFtZSIsIm5hbWUiLCJzcGxpdCIsIm1pZGRsZV9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJkb2IiLCJnZW5kZXIiLCJ1c2VyRGF0YSIsInR5cGUiLCJ1cmwiLCJocmVmIiwidXJsU2hvcnRuZXIiLCJlcnIiLCJ0aW55X3VybCIsIkxPQURfSU5TVVJBTkNFIiwid2lkdGgiLCJBU1NFVFNfQkFTRV9VUkwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzaG93X2J1dHRvbiIsImdvIiwicHJvY2VlZFBsYW4iLCJiaW5kIiwiaGlkZUxvZ2luUG9wdXAiLCJjbG9zZUxlYWRQb3B1cCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwic2hvd0luc3VyYW5jZVZpZXciLCJnZXRVc2VyUHJvZmlsZSIsInNjcm9sbFRvIiwiZ2V0SW5zdXJhbmNlIiwiaW5zdXJuYWNlRGF0YSIsImNlcnRpZmljYXRlIiwibWFwU3RhdGVUb1Byb3BzIiwiSU5TVVJBTkNFIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiaXNfZW5kb3JzZW1lbnQiLCJjYWxsYmFjayIsImNyaXRlcmlhIiwic2VuZE9UUCIsIm51bWJlciIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwibWVzc2FnZV90eXBlIiwiY2IiLCJzdWJtaXRPVFAiLCJvdHAiLCJleHRyYVBhcmFtc0RhdGEiLCJyZXNldEF1dGgiLCJzZWxmX2RhdGEiLCJmb3JjZWFkZCIsInNlbGVjdGVkUGxhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUhBLElBQU1BLGNBQWNDLG1CQUFPQSxDQUFDLDBEQUFSLENBQXBCOztJQUtNQyxtQjs7O0FBQ0wsOEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SUFDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1o7QUFDQUMsV0FBUSxLQUZJO0FBR1pDLGVBQVksTUFBS0gsS0FBTCxDQUFXSSxhQUFYLEdBQTJCLE1BQUtKLEtBQUwsQ0FBV0ksYUFBWCxDQUF5QkMsRUFBcEQsR0FBeUQsRUFIekQ7QUFJWkMsd0JBQXFCLE1BQUtOLEtBQUwsQ0FBV0ksYUFBWCxHQUEyQixNQUFLSixLQUFMLENBQVdJLGFBQVgsQ0FBeUJHLE1BQXBELEdBQTZELEVBSnRFO0FBS1pDLFFBQUssc0JBTE87QUFNWkMsdUJBQW9CLE1BQUtULEtBQUwsQ0FBV0ksYUFBWCxHQUEyQixNQUFLSixLQUFMLENBQVdJLGFBQXRDLEdBQXNELEVBTjlEO0FBT1pNLGNBQVcsS0FQQztBQVFaQyxhQUFVLEVBUkU7QUFTWkMsV0FBUSxTQVRJO0FBVVpDLHFCQUFrQixJQVZOO0FBV1pDLGVBQVksRUFYQTtBQVlaQyxpQkFBYyxFQVpGO0FBYVpDLHNCQUFtQjtBQWJQLEdBQWI7QUFGa0I7QUFpQmxCOzs7O3NDQUNtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxPQUFJQyxZQUFZcEIsWUFBWXFCLEtBQVosQ0FBa0IsS0FBS2xCLEtBQUwsQ0FBV21CLFFBQVgsQ0FBb0JDLE1BQXRDLENBQWhCO0FBQ0EsT0FBSUMsY0FBYyxFQUFs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Y7QUFDVjtBQUNGO0FBQ007QUFDRjtBQUNKO0FBQ0Y7QUFDSTtBQUNGO0FBQ2M7QUFDRjtBQUNWO0FBQ0Y7QUFDYztBQUNGO0FBQ0o7QUFDRjtBQUNJIiwiZmlsZSI6IjExOS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENoYXRQYW5lbCBmcm9tICcuLi9jb21tb25zL0NoYXRQYW5lbCdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IEluc3VyUG9wdXAgZnJvbSAnLi9pbnN1cmFuY2VQb3B1cC5qcydcbmltcG9ydCBJbnN1ckNvbW1vbiBmcm9tICcuL2luc3VyYW5jZUNvbW1vblNlY3Rpb24uanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IHsgQXNzZXJ0aW9uRXJyb3IgfSBmcm9tICdhc3NlcnQnO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgSW5zdXJhbmNlU3RhdGljVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdC8vaW5zdXJhbmNlUmVzdWx0czp0aGlzLnByb3BzLmluc3VybmFjZURhdGEsXG5cdFx0XHR0b2dnbGU6ICdvbmUnLFxuXHRcdFx0aXNfY2hlY2tlZDogdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuID8gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmlkIDogJycsXG5cdFx0XHRzZWxlY3RlZF9wbGFuX3ByaWNlOiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gPyB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYW1vdW50IDogJycsXG5cdFx0XHRnc3Q6ICdJbmNsdXNpdmUgb2YgMTglIEdTVCcsXG5cdFx0XHRzZWxlY3RlZF9wbGFuX2RhdGE6IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbiA/IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbiA6ICcnLFxuXHRcdFx0c2hvd1BvcHVwOiBmYWxzZSxcblx0XHRcdHNob3J0VVJMOiBcIlwiLFxuXHRcdFx0aXNMZWFkOiAncHJvY2VlZCcsXG5cdFx0XHRjaGVja0lkbGVUaW1lb3V0OiB0cnVlLFxuXHRcdFx0cG9wdXBDbGFzczogJycsXG5cdFx0XHRvdmVybGF5Q2xhc3M6ICcnLFxuXHRcdFx0aWRlbnRpZnlVc2VyQ2xpY2s6ICcnXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdC8vIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG5cdFx0Ly8gXHR0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKClcblx0XHQvLyB9XG5cdFx0bGV0IGxlYWRfZGF0YSA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGxldCBwaG9uZU51bWJlciA9ICcnXG5cdFx0aWYgKCFTVE9SQUdFLmNoZWNrQXV0aCgpICYmIGxlYWRfZGF0YS5wYWdlX3NvdXJjZSA9PSAnYmFubmVyJykge1xuXHRcdFx0Ly8gdGhpcy5zZXRTdGF0ZSh7Y2hlY2tJZGxlVGltZW91dDpmYWxzZSwgc2hvd1BvcHVwOnRydWUsIHBvcHVwQ2xhc3M6ICd0cmFuc2x1Y2VudC1wb3B1cCcsIG92ZXJsYXlDbGFzczogJ3doaXRlLW92ZXJsYXknLCBpZGVudGlmeVVzZXJDbGljazonYmFubmVyQ2xpY2snfSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjaGVja0lkbGVUaW1lb3V0OiBmYWxzZSwgc2hvd1BvcHVwOiB0cnVlLCBwb3B1cENsYXNzOiAnJywgb3ZlcmxheUNsYXNzOiAnJywgaWRlbnRpZnlVc2VyQ2xpY2s6ICdiYW5uZXJDbGljaycgfSlcblx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0luc3VyYW5jZUxvZ2luUG9wdXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ0luc3VyYW5jZS1sb2dpbi1wb3B1cC1jbGljaycsICdjbGlja192YWx1ZSc6ICdiYW5uZXJDbGljaydcblx0XHRcdH1cblxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHR9XG5cdFx0aWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkgJiYgdGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlICE9ICcnKSB7XG5cdFx0XHRwaG9uZU51bWJlciA9IHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlXG5cdFx0fVxuXHRcdHRoaXMucHJvcHMuZ2VuZXJhdGVJbnN1cmFuY2VMZWFkKCcnLCBwaG9uZU51bWJlciwgbGVhZF9kYXRhLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIC8vIHRvIGNyZWF0ZSBpbnN1cmFuY2UgbGVhZCBmb3IgbWF0cml4XG5cdFx0bGV0IHNlbGVjdGVkSWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gPyB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uaWQgOiAnJ1xuXHRcdGlmIChzZWxlY3RlZElkKSB7XG5cdFx0XHR0aGlzLnNlbGVjdFBsYW4odGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICh0aGlzLnRleHRJbnB1dCkge1xuXHRcdFx0XHR0aGlzLnRleHRJbnB1dC5jbGljaygpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzLnN0YXRlLmNoZWNrSWRsZVRpbWVvdXQgJiYgIVNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcblx0XHRcdC8vIHRoaXMuc2V0U3RhdGUoe3BvcHVwQ2xhc3M6ICd0cmFuc2x1Y2VudC1wb3B1cCcsIG92ZXJsYXlDbGFzczogJ3doaXRlLW92ZXJsYXknfSlcblx0XHRcdHRoaXMuaW5hY3Rpdml0eVRpbWUoKVxuXHRcdH1cblx0fVxuXG5cdGluYWN0aXZpdHlUaW1lKCkge1xuXHRcdHZhciB0aW1lO1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdHdpbmRvdy5vbmxvYWQgPSByZXNldFRpbWVyO1xuXHRcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gcmVzZXRUaW1lcjtcblx0XHRkb2N1bWVudC5vbmtleXByZXNzID0gcmVzZXRUaW1lcjtcblx0XHRyZXNldFRpbWVyKClcblx0XHRmdW5jdGlvbiBzdG9wKCkge1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSW5zdXJhbmNlTG9naW5Qb3B1cCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnSW5zdXJhbmNlLWxvZ2luLXBvcHVwLWNsaWNrJywgJ2NsaWNrX3ZhbHVlJzogJ0F1dG9DbGljaydcblx0XHRcdH1cblx0XHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2NlZWRMZWFkJykpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2NlZWRMZWFkJykuY2xpY2soKVxuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgY2hlY2tJZGxlVGltZW91dDogZmFsc2UsIGlkZW50aWZ5VXNlckNsaWNrOiAnQXV0b0NsaWNrJyB9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHQgICAgZnVuY3Rpb24gcmVzZXRUaW1lcigpIHtcblx0ICAgICAgICBjbGVhclRpbWVvdXQodGltZSk7XG5cdCAgICAgICAgaWYoc2VsZi5zdGF0ZS5jaGVja0lkbGVUaW1lb3V0KXtcblx0ICAgICAgICBcdHRpbWUgPSBzZXRUaW1lb3V0KHN0b3AsIDIwMDAwKVx0XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuXHRcdC8vIGxldCBzZWxmID0gdGhpc1xuXHRcdC8vIGxldCBzZWxlY3RlZElkID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuP3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5pZDonJ1xuXHRcdC8vIGxldCBuZXdTZWxlY3RlZElkID0gcHJvcHMuc2VsZWN0ZWRfcGxhbj9wcm9wcy5zZWxlY3RlZF9wbGFuLmlkOicnXG5cdFx0Ly8gaWYoc2VsZWN0ZWRJZCl7XG5cdFx0Ly8gXHR0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRfcGxhbl9kYXRhOiBwcm9wcy5zZWxlY3RlZF9wbGFuICwgc2VsZWN0ZWRfcGxhbl9wcmljZTogYCjigrkgJHtwcm9wcy5zZWxlY3RlZF9wbGFuLmFtb3VudH0pYCwgaXNfY2hlY2tlZDogc2VsZWN0ZWRJZCB9KVxuXHRcdC8vIH1cblx0XHQvLyBpZighbmV3U2VsZWN0ZWRJZCl7XG5cdFx0Ly8gXHRpZih0aGlzLnRleHRJbnB1dCl7XG5cdFx0Ly8gXHRcdHRoaXMudGV4dElucHV0LmNsaWNrKClcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdH1cblx0c2VsZWN0UGxhbihwbGFuX3RvX3RvZ2dsZSkge1xuXHRcdGxldCBwbGFuID0gcGxhbl90b190b2dnbGVcblx0XHRwbGFuX3RvX3RvZ2dsZS5pc19zZWxlY3RlZCA9IHRydWVcblx0XHQvLyBwbGFuX3RvX3RvZ2dsZS5wbGFuX25hbWUgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLm5hbWVcblx0XHQvLyBwbGFuX3RvX3RvZ2dsZS5sb2dvID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5sb2dvIFxuXHRcdC8vIHBsYW5fdG9fdG9nZ2xlLmluc3VyZXJfZG9jdW1lbnQgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmluc3VyZXJfZG9jdW1lbnRcblx0XHQvLyBwbGFuX3RvX3RvZ2dsZS5pbnN1cmVyID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5pZFxuXHRcdC8vIHBsYW5fdG9fdG9nZ2xlLnN0YXRlRGF0YSA9IHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnc3RhdGUnXSBcblx0XHR0aGlzLnByb3BzLnNlbGVjdEluc3VyYW5jZVBsYW4oJ3BsYW4nLCBwbGFuKSAvLyBzYXZlIHVzZXIgc2VsZWN0ZWQgcGxhblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBpc19jaGVja2VkOiBwbGFuX3RvX3RvZ2dsZS5pZCwgc2VsZWN0ZWRfcGxhbl9kYXRhOiBwbGFuX3RvX3RvZ2dsZSwgc2VsZWN0ZWRfcGxhbl9wcmljZTogYCjigrkgJHtwbGFuX3RvX3RvZ2dsZS5hbW91bnR9KWAsIHRvZ2dsZTogdGhpcy5zdGF0ZS50b2dnbGUgPT0gJ3R3bycgPyAnb25lJyA6ICdvbmUnIH0pXG5cdH1cblxuXHRwcm9jZWVkUGxhbigpIHtcblx0XHRsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0bGV0IHBsYW4gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fZGF0YSlcblx0XHRsZXQgbGVhZF9kYXRhXG5cdFx0bGV0IHBob25lTnVtYmVyID0gJydcblx0XHRpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIucHJpbWFyeU1vYmlsZSAhPSAnJykge1xuXHRcdFx0XHRwaG9uZU51bWJlciA9IHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlXG5cdFx0XHR9XG5cdFx0XHRpZiAoT2JqZWN0LmtleXMocGxhbikubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsZWFkX2RhdGEgPSBwYXJzZWRcblx0XHRcdFx0dGhpcy5wcm9wcy5nZW5lcmF0ZUluc3VyYW5jZUxlYWQocGxhbi5pZCwgcGhvbmVOdW1iZXIsIGxlYWRfZGF0YSwgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSAvLyB0byBjcmVhdGUgaW5zdXJhbmNlIGxlYWQgZm9yIG1hdHJpeFxuXHRcdFx0fVxuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXBsYW4tdmlldycpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IHRydWUgfSlcblx0XHR9XG5cdH1cblx0cHJvY2VlZFBsYW4xKCkge1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdGxldCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRsZXQgcGxhbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuc2VsZWN0ZWRfcGxhbl9kYXRhKVxuXHRcdGxldCBwcm9maWxlTGVuZ3RoXG5cdFx0bGV0IG1lbWJlclN0b3JlRGF0YUxlbmd0aFxuXHRcdGxldCBtZW1iZXJzQXJyYXkgPSBbXVxuXHRcdGxldCBwcm9maWxlc0FycmF5ID0gW11cblx0XHRsZXQgbGVhZF9kYXRhXG5cdFx0Ly8gcGxhbi5wbGFuX25hbWUgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLm5hbWVcblx0XHQvLyBwbGFuLmxvZ28gPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmxvZ28gXG5cdFx0Ly8gcGxhbi5pbnN1cmVyX2RvY3VtZW50ID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5pbnN1cmVyX2RvY3VtZW50ICAgXHRcblx0XHQvLyBwbGFuLmluc3VyZXIgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmlkXG5cdFx0Ly8gcGxhbi5zdGF0ZURhdGEgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ3N0YXRlJ11cblx0XHQvLyB0aGlzLnByb3BzLnNlbGVjdEluc3VyYW5jZVBsYW4oJ3BsYW4nLCBwbGFuKVxuXHRcdHRoaXMucHJvcHMucmVzZXRTZWxlY3RlZFBsYW5zKCkgLy8gdG8gcmVzZXQgdXNlciBzZWxlY3RlZCBwbGFuXG5cdFx0aWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcblx0XHRcdGxldCBwaG9uZU51bWJlciA9ICcnXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlICE9ICcnKSB7XG5cdFx0XHRcdHBob25lTnVtYmVyID0gdGhpcy5wcm9wcy5VU0VSLnByaW1hcnlNb2JpbGVcblx0XHRcdH1cblx0XHRcdGlmIChPYmplY3Qua2V5cyhwbGFuKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGxlYWRfZGF0YSA9IHBhcnNlZFxuXHRcdFx0XHR0aGlzLnByb3BzLmdlbmVyYXRlSW5zdXJhbmNlTGVhZChwbGFuLmlkLCBwaG9uZU51bWJlciwgbGVhZF9kYXRhLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIC8vIHRvIGNyZWF0ZSBpbnN1cmFuY2UgbGVhZCBmb3IgbWF0cml4XG5cdFx0XHR9XG5cdFx0XHRwcm9maWxlTGVuZ3RoID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGhcblx0XHRcdG1lbWJlclN0b3JlRGF0YUxlbmd0aCA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlcykubGVuZ3RoXG5cdFx0XHRpZiAocHJvZmlsZUxlbmd0aCA+IDAgJiYgbWVtYmVyU3RvcmVEYXRhTGVuZ3RoID4gMCkge1xuXHRcdFx0XHRPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMpLm1hcChmdW5jdGlvbiAoW2tleSwgc2VsZl9kYXRhX3ZhbHVlc10pIHtcblx0XHRcdFx0XHRPYmplY3QuZW50cmllcyhzZWxmLnByb3BzLlVTRVIucHJvZmlsZXMpLm1hcChmdW5jdGlvbiAoW2ssIHByb2ZpbGVzXSkge1xuXHRcdFx0XHRcdFx0aWYgKHNlbGZfZGF0YV92YWx1ZXMuaWQgPT0gcHJvZmlsZXMuaWQpIHtcblx0XHRcdFx0XHRcdFx0bWVtYmVyc0FycmF5LnB1c2goc2VsZl9kYXRhX3ZhbHVlcylcblx0XHRcdFx0XHRcdFx0cHJvZmlsZXNBcnJheS5wdXNoKHByb2ZpbGVzKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGlmIChtZW1iZXJzQXJyYXkubGVuZ3RoID09IHByb2ZpbGVzQXJyYXkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmVudHJpZXMobWVtYmVyc0FycmF5KS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlc10pIHtcblx0XHRcdFx0XHRcdGlmIChtZW1iZXJzQXJyYXlba2V5XS5pZCA9PSBwcm9maWxlc0FycmF5W2tleV0uaWQpIHtcblx0XHRcdFx0XHRcdFx0bGV0IG1lbWJlck5ld2RhdGEgPSB2YWx1ZXNcblx0XHRcdFx0XHRcdFx0bGV0IG5ld05hbWUgPSBwcm9maWxlc0FycmF5W2tleV0ubmFtZS5zcGxpdChcIiBcIilcblx0XHRcdFx0XHRcdFx0aWYgKG5ld05hbWUubGVuZ3RoID09IDMpIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLm5hbWUgPSBuZXdOYW1lWzBdXG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5taWRkbGVfbmFtZSA9IG5ld05hbWVbMV1cblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmxhc3RfbmFtZSA9IG5ld05hbWVbMl1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChuZXdOYW1lLmxlbmd0aCA9PSAyKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5uYW1lID0gbmV3TmFtZVswXVxuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEubGFzdF9uYW1lID0gbmV3TmFtZVsxXVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEubmFtZSA9IG5ld05hbWVbMF1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAobWVtYmVyc0FycmF5W2tleV0uZW1haWwgIT0gJycpIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmVtYWlsID0gbWVtYmVyc0FycmF5W2tleV0uZW1haWxcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmVtYWlsID0gcHJvZmlsZXNBcnJheVtrZXldLmVtYWlsXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAobWVtYmVyc0FycmF5W2tleV0uZG9iICE9IG51bGwgfHwgbWVtYmVyc0FycmF5W2tleV0uZG9iICE9ICcnKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5kb2IgPSBtZW1iZXJzQXJyYXlba2V5XS5kb2Jcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmRvYiA9IHByb2ZpbGVzQXJyYXlba2V5XS5kb2Jcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAobWVtYmVyc0FycmF5W2tleV0uZ2VuZGVyICE9ICcnKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5nZW5kZXIgPSBtZW1iZXJzQXJyYXlba2V5XS5nZW5kZXJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmdlbmRlciA9IHByb2ZpbGVzQXJyYXlba2V5XS5nZW5kZXJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRzZWxmLnByb3BzLnVzZXJEYXRhKCdtZW1iZXJOZXdkYXRhJywgbWVtYmVyTmV3ZGF0YSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS11c2VyLWRldGFpbHMnKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS11c2VyLWRldGFpbHMnKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtdXNlci1kZXRhaWxzJylcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cDogdHJ1ZSB9KVxuXHRcdH1cblx0fVxuXG5cdHByb2NlZWRMZWFkKHR5cGUpIHtcblx0XHRpZiAoIXRoaXMuc3RhdGUuY2hlY2tJZGxlVGltZW91dCkge1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSW5zdXJhbmNlTG9naW5Qb3B1cCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnSW5zdXJhbmNlLWxvZ2luLXBvcHVwLWNsaWNrJywgJ2NsaWNrX3ZhbHVlJzogJ3VzZXJDbGljaycsIHR5cGU6IHR5cGVcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwb3B1cENsYXNzOiAnJywgb3ZlcmxheUNsYXNzOiAnJyB9KVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGlzTGVhZDogdHlwZSwgc2hvd1BvcHVwOiB0cnVlLCBpZGVudGlmeVVzZXJDbGljazogJ3VzZXJDbGljaycgfSlcblx0fVxuXG5cdGNsb3NlTGVhZFBvcHVwKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IGZhbHNlfSlcblx0fVxuXG5cdGhpZGVMb2dpblBvcHVwKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogZmFsc2V9KVxuXHR9XG5cblx0c2hvcnRlblVybCgpIHtcblx0XHRpZiAod2luZG93KSB7XG5cdFx0XHRsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYgKyAnJmZvcmNlX2xvY2F0aW9uPXRydWUnXG5cdFx0XHR0aGlzLnByb3BzLnVybFNob3J0bmVyKHVybCwgKGVyciwgZGF0YSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVycikge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogZGF0YS50aW55X3VybCB9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0XG5cdFx0aWYgKHRoaXMucHJvcHMuTE9BRF9JTlNVUkFOQ0UpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXHRcdFx0XHRcdFx0PFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0gLz5cblxuXHRcdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGFydGljbGUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEwIGNvbC1sZy0xMCBjZW50ZXItY29sdW1uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBhcnRpY2xlLWNvbHVtbiBpbnMtbGFuZGluZy1zaGFkb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtbGFuZGluZy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtc3RlcHMtc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYy11c3Itb25seVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMT5Hcm91cCBPUEQgSW5zdXJhbmNlIGV4Y2x1c2l2ZWx5IGZvciA8c3Bhbj5Eb2NwcmltZTwvc3Bhbj4gdXNlcnMgb25seSA8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9jLXB3ZGJ5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5Qb3dlcmVkIGJ5PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzdHlsZT17eyB3aWR0aDogJzEzMHB4JyB9fSBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvaW5zdXJlci9pbWFnZXMvQU1ISV9Mb2dvLTAxLnBuZ1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1zdGVwcy1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW0tY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZnQtY250bi1hbGduXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW5zLXN0ZXAtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5zLWhvc3AucG5nXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxmdC1wYXJhLWFsZ25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3RlcC1ibGstcGFyYVwiPlVubGltaXRlZDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3RlcC1ibGstcGFyYVwiPkRvY3RvcjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3RlcC1vcm5nLXBhcmFcIj5Db25zdWx0YXRpb248L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN0ZXAtcXV0LXBhcmFcIj53aXRoIDxzcGFuPjIwLDAwMCs8L3NwYW4+IERvY3RvcnMqPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1zdGVwcy1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW0tY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZnQtcGFyYS1hbGduXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN0ZXAtYmxrLXBhcmFcIj5VbmxpbWl0ZWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN0ZXAtb3JuZy1wYXJhXCI+TGFiIFRlc3RzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdGVwLXF1dC1wYXJhXCI+YXQgPHNwYW4+MiwwMDArPC9zcGFuPiBEaWFnbm9zdGljIExhYnMqPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbnMtc3RlcC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pc24tbGFiLnBuZ1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtc3RlcHMtc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGZ0LWNudG4tYWxnblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlucy1zdGVwLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2lucy1hY3QucG5nXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxmdC1wYXJhLWFsZ25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3RlcC1vcm5nLXBhcmFcIj5JbnN0YW50IEFjdGl2YXRpb248L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN0ZXAtYmxrLXBhcmFcIj5VcG9uIFB1cmNoYXNlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtbGFuZC1saXN0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaW5zLWhydC5wbmcnfSAvPlByZSBleGlzdGluZyBkaXNlYXNlcyBjb3ZlcmVkPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2lucy1ycHJ0LnBuZyd9IC8+Tm8gbWVkaWNhbCB0ZXN0IHJlcXVpcmVkIGZvciBwb2xpY3kgaXNzdWFuY2U8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaW5zLXlyLnBuZyd9IC8+VmFsaWQgZm9yIDEgeWVhciBmcm9tIHBvbGljeSBpc3N1YW5jZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1uZXR3b3JrLWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLW5ldHdyay1oZWFkaW5nLWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+T25seSBhdmFpbGFibGUgb24gRG9jcHJpbWUgbmV0d29yayogPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBocmVmPScvaW5zdXJhbmNlL25ldHdvcmsnIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJbnN1cmFuY2VOZXR3b3JrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdpbnN1cmFuY2UtbmV0d29yaycsICdjbGlja192YWx1ZSc6ICdpbnN1cmFuY2UtbmV0d29yaydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL25ldHdvcmsnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5WaWV3IG5ldHdvcms8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlucy1udy1ub3RlXCI+QSBmZXcgdGhpbmdzIHRvIG5vdGUuLi4gPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImlucy1udy1saXN0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5BbGwgcHJvY2VkdXJlcyAoZGVudGFsLCBkYXljYXJlIGV0Yy4uKSBhbmQgc2Vzc2lvbnMgKHRoZXJhcHksIGNvdW5zZWxsaW5nIGV0Yy4uKSBhcmUgbm90IGNvdmVyZWQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+QW55IGxhYiB0ZXN0IG9yIGRvY3RvciBhcHBvaW50bWVudHMgd2l0aCBNUlAgbW9yZSB0aGFuIOKCuTE1MDAgYXJlIG5vdCBjb3ZlcmVkPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPk9ubHkgNSBvbmNvbG9neSBhbmQgNSBHeW5lY29sb2d5IGRvY3RvciBhcHBvaW50bWVudHMgYXJlIGNvdmVyZWQgaW4gYSBwb2xpY3kgeWVhcjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5Eb2NwcmltZSdzIEluc3VyYW5jZSBuZXR3b3JrIGlzIGR5bmFtaWMgaW4gbmF0dXJlIGFuZCBtYXkgY2hhbmdlIGZyb20gdGltZSB0byB0aW1lPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHR7cGFyc2VkLnNob3dfYnV0dG9uID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGlja3ktYnRuIGZpeGVkIGluc3VCdG5zQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpbnN1LWxlZnQtd2hpdGUtYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKX0+QmFjayB0byBCb29raW5nXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpbnN1LXJpZ2h0LW9ybmctYnRuXCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMpfT5CdXkgTm93XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWJ0biBmaXhlZCBpbnN1QnRuc0NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gaWQ9XCJwcm9jZWVkTGVhZFwiIGNsYXNzTmFtZT1cImluc3UtcmlnaHQtb3JuZy1idG4gaW5zLWJ1eS1idG5cIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcyl9PkJ1eSBOb3c8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnNob3dQb3B1cCA/XG5cdFx0XHRcdFx0XHRcdDxJbnN1clBvcHVwIHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZF9wbGFuPXt0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fZGF0YX0gaGlkZUxvZ2luUG9wdXA9e3RoaXMuaGlkZUxvZ2luUG9wdXAuYmluZCh0aGlzKX0gaXNMZWFkPXt0aGlzLnN0YXRlLmlzTGVhZH0gY2xvc2VMZWFkUG9wdXA9e3RoaXMuY2xvc2VMZWFkUG9wdXAuYmluZCh0aGlzKX0gcG9wdXBDbGFzcz17dGhpcy5zdGF0ZS5wb3B1cENsYXNzfSBvdmVybGF5Q2xhc3M9e3RoaXMuc3RhdGUub3ZlcmxheUNsYXNzfSBpZGVudGlmeVVzZXJDbGljaz17dGhpcy5zdGF0ZS5pZGVudGlmeVVzZXJDbGlja30gLz4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdXJhbmNlU3RhdGljVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IGdldEluc3VyYW5jZSwgc2VsZWN0SW5zdXJhbmNlUGxhbiAsIHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzLHJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzLHJlc2V0U2VsZWN0ZWRQbGFucyxzZW5kT1RQLCBzdWJtaXRPVFAsIHJlc2V0QXV0aCwgZ2V0VXNlclByb2ZpbGUsIHVzZXJEYXRhLCBnZW5lcmF0ZUluc3VyYW5jZUxlYWQsIHVybFNob3J0bmVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBJbnN1cmFuY2VDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlU3RhdGljVmlldy5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIEluc3VyYW5jZVN0YXRpY1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBzaG93SW5zdXJhbmNlVmlldzpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpIC8vIHRvIGdldCBsb2dnZWRJbiB1c2VyIHByb2ZpbGVcbiAgICAgICAgfVxuICAgICAgICAvKnRoaXMucHJvcHMuZ2V0SW5zdXJhbmNlKHJlc3A9PntcbiAgICAgICAgICAgIGlmKCFyZXNwLmNlcnRpZmljYXRlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdlbmVyYXRlSW5zdXJhbmNlTGVhZCgnJyxwaG9uZU51bWJlcixsZWFkX2RhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKi9cbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRJbnN1cmFuY2UoZmFsc2UpICAvLyB0byBnZXQgaW5zdXJhbmNlIHBsYW5zXG4gICAgfVxuXHRyZW5kZXIoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5MT0FEX0lOU1VSQU5DRSl7XG4gICAgICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1jbHViLWRldGFpbHM/c291cmNlPW1vYmlsZS1sZWZ0bWVudS12aXAtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPEluc3VyYW5jZUNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YS5jZXJ0aWZpY2F0ZSAmJiBTVE9SQUdFLmNoZWNrQXV0aCgpKXsgLy8gaWYgdXNlciBpcyBhbHJlYWR5IGFuIGluc3VyYW5jZSBjdXN0b21lciBzbyByZWRpcmVjdCBvbiBpbnN1cmVkIGRhc2hib2FyZCBwYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvY2VydGlmaWNhdGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIHsvKjxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9Lz4qL31cbiAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgIH1cblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBVU0VSID0gc3RhdGUuVVNFUlxuICAgIGxldCB7IGluc3VybmFjZURhdGEsIExPQURfSU5TVVJBTkNFLCBzZWxlY3RlZF9wbGFuLHNlbGZfZGF0YV92YWx1ZXN9ID0gc3RhdGUuSU5TVVJBTkNFXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG5cbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuICAgIHJldHVybiB7XG4gICAgICAgIGluc3VybmFjZURhdGEsTE9BRF9JTlNVUkFOQ0Usc2VsZWN0ZWRfcGxhbixzZWxmX2RhdGFfdmFsdWVzLFVTRVIsIHNlbGVjdGVkTG9jYXRpb25cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEluc3VyYW5jZTogKGlzX2VuZG9yc2VtZW50LGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRJbnN1cmFuY2UoaXNfZW5kb3JzZW1lbnQsY2FsbGJhY2spKSxcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICBzZWxlY3RJbnN1cmFuY2VQbGFuOiAocGxhbixjcml0ZXJpYSkgPT4gZGlzcGF0Y2goc2VsZWN0SW5zdXJhbmNlUGxhbihwbGFuLGNyaXRlcmlhKSksXG4gICAgICAgIC8vIHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzOiAobWVtYmVyc0lkKSA9PiBkaXNwYXRjaChzYXZlQ3VycmVudFNlbGVjdGVkTWVtYmVycyhtZW1iZXJzSWQpKSxcbiAgICAgICAgcmVzZXRTZWxlY3RlZFBsYW5zOiAoKSA9PiBkaXNwYXRjaChyZXNldFNlbGVjdGVkUGxhbnMoKSksXG4gICAgICAgIHNlbmRPVFA6IChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpID0+IGRpc3BhdGNoKHNlbmRPVFAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSksXG4gICAgICAgIHN1Ym1pdE9UUDogKG51bWJlciwgb3RwLGV4dHJhUGFyYW1zRGF0YSwgIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRPVFAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zRGF0YSwgY2IpKSxcbiAgICAgICAgcmVzZXRBdXRoOiAoKSA9PiBkaXNwYXRjaChyZXNldEF1dGgoKSksXG4gICAgICAgIHVzZXJEYXRhIDooc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSA9PiBkaXNwYXRjaCh1c2VyRGF0YShzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpKSxcbiAgICAgICAgZ2VuZXJhdGVJbnN1cmFuY2VMZWFkOihzZWxlY3RlZFBsYW4sbnVtYmVyLGxlYWRfZGF0YSxjYikgPT4gZGlzcGF0Y2goZ2VuZXJhdGVJbnN1cmFuY2VMZWFkKHNlbGVjdGVkUGxhbixudW1iZXIsbGVhZF9kYXRhLGNiKSksXG4gICAgICAgIHVybFNob3J0bmVyOiAodXJsLCBjYikgPT4gZGlzcGF0Y2godXJsU2hvcnRuZXIodXJsLCBjYikpLFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbnN1cmFuY2VTdGF0aWNWaWV3KSIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9