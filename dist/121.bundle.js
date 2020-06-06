(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

/***/ "./dev/js/components/insurance/insuranceView.js":
/*!******************************************************!*\
  !*** ./dev/js/components/insurance/insuranceView.js ***!
  \******************************************************/
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

var Insurance = function (_React$Component) {
	_inherits(Insurance, _React$Component);

	function Insurance(props) {
		_classCallCheck(this, Insurance);

		var _this = _possibleConstructorReturn(this, (Insurance.__proto__ || Object.getPrototypeOf(Insurance)).call(this, props));

		_this.state = {
			//insuranceResults:this.props.insurnaceData,
			toggle: 'one',
			is_checked: _this.props.selected_plan ? _this.props.selected_plan.id : '',
			selected_plan_price: _this.props.selected_plan ? _this.props.selected_plan.amount : '',
			gst: 'Inclusive of 18% GST',
			selected_plan_data: _this.props.selected_plan ? _this.props.selected_plan : '',
			showPopup: false,
			shortURL: "",
			isLead: '',
			checkIdleTimeout: true,
			popupClass: '',
			overlayClass: '',
			identifyUserClick: ''
		};
		return _this;
	}

	_createClass(Insurance, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// if (STORAGE.checkAuth()) {
			// 	this.props.getUserProfile()
			// }
			var lead_data = queryString.parse(this.props.location.search);
			var phoneNumber = '';
			if (!_storage2.default.checkAuth() && lead_data.page_source == 'banner') {
				//this.setState({checkIdleTimeout:false, showPopup:true, popupClass: 'translucent-popup', overlayClass: 'white-overlay', identifyUserClick:'bannerClick'})
				var data = {
					'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopup', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'Insurance-login-popup-click', 'click_value': 'bannerClick'
				};

				_gtm2.default.sendEvent({ data: data });
			}
			if (_storage2.default.checkAuth() && this.props.USER && this.props.USER.primaryMobile != '') {
				phoneNumber = this.props.USER.primaryMobile;
			}
			// this.props.generateInsuranceLead('',phoneNumber,lead_data,this.props.selectedLocation)
			var selectedId = this.props.selected_plan ? this.props.selected_plan.id : '';
			if (selectedId) {
				this.selectPlan(this.props.selected_plan);
			} else {
				if (this.textInput) {
					this.textInput.click();
				}
			}
			if (this.state.checkIdleTimeout && !_storage2.default.checkAuth()) {
				//this.setState({popupClass: 'translucent-popup', overlayClass: 'white-overlay'})
				this.inactivityTime();
			}
		}
	}, {
		key: 'inactivityTime',
		value: function inactivityTime() {
			// to check user inactive time on page and ask for login
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
					time = setTimeout(stop, 12000);
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
			this.props.selectInsurancePlan('plan', plan);
			this.setState({ is_checked: plan_to_toggle.id, selected_plan_data: plan_to_toggle, selected_plan_price: '(\u20B9 ' + plan_to_toggle.amount + ')', toggle: this.state.toggle == 'two' ? 'one' : 'one' });
		}
	}, {
		key: 'proceedPlan',
		value: function proceedPlan() {
			// to save user agreed plan and redirect to ask user details for policy
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
				// if (Object.keys(plan).length > 0) {
				// 	lead_data = parsed
				// 	this.props.generateInsuranceLead(plan.id, phoneNumber,lead_data,this.props.selectedLocation)
				// }
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
			this.setState({
				showPopup: false
			});
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
				var _parsed = queryString.parse(this.props.location.search);
				return _react2.default.createElement(
					'div',
					{ className: 'profile-body-wrap' },
					_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
					_react2.default.createElement(_HelmetTags2.default, { tagsData: {
							canonicalUrl: _config2.default.API_BASE_URL + '/insurance/insurance-view',
							title: 'OPD Insurance | Buy OPD Insurance Cover | OPD Cover',
							description: 'OPD Insurance: Buy OPD insurance cover & get cashless benefits on lab tests & doctor consultation with a network of over 15000 doctors and 2000 labs.'
						}, noIndex: false }),
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
									{ className: 'profile-book-screen', style: { position: 'relative' } },
									_react2.default.createElement(
										'div',
										null,
										this.state.shortURL ? _react2.default.createElement(
											'div',
											{ className: 'shareLinkpopupOverlay', onClick: function onClick() {
													_this3.setState({ shortURL: "" });
												} },
											_react2.default.createElement(
												'div',
												{ className: 'shareLinkpopup', onClick: function onClick(e) {
														e.stopPropagation();
													} },
												_react2.default.createElement(
													'p',
													null,
													this.state.shortURL
												),
												_react2.default.createElement(
													_reactCopyToClipboard.CopyToClipboard,
													{ text: this.state.shortURL,
														onCopy: function onCopy() {
															_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Shortened URL Copied." });
															_this3.setState({ shortURL: "" });
														} },
													_react2.default.createElement(
														'span',
														{ className: 'shrelinkBtn' },
														_react2.default.createElement(
															'button',
															null,
															'Copy'
														)
													)
												)
											)
										) : "",
										_react2.default.createElement(_insuranceCommonSection2.default, _extends({}, this.props, { isSelectPlan: true, is_checked: this.state.is_checked })),
										_react2.default.createElement(
											'div',
											{ className: 'widget mrt-20' },
											_react2.default.createElement(
												'div',
												{ className: 'coverage-list-container border-bg-transprant' },
												_react2.default.createElement(
													'table',
													{ className: 'table table-bordered insurance-tbl insurance-checkboxes' },
													_react2.default.createElement(
														'thead',
														null,
														_react2.default.createElement(
															'tr',
															null,
															_react2.default.createElement(
																'th',
																{ className: 'tbl-first-head' },
																_react2.default.createElement(
																	'p',
																	null,
																	'Coverage (1 Year)'
																)
															),
															_react2.default.createElement(
																'th',
																{ className: 'tbl-second-head' },
																_react2.default.createElement(
																	'p',
																	null,
																	'Annual Premium'
																)
															)
														)
													),
													_react2.default.createElement(
														'tbody',
														null,
														this.props.insurnaceData['insurance'][0].plans.map(function (result, i) {
															return _react2.default.createElement(
																'tr',
																{ id: result.id, key: i, onClick: _this3.selectPlan.bind(_this3, result), ref: result.adult_count == 2 && result.child_count == 2 ? function (input) {
																		_this3.textInput = input;
																	} : 'ref_0' },
																_react2.default.createElement(
																	'td',
																	null,
																	_react2.default.createElement(
																		'label',
																		{ className: 'container-radio', htmlform: i },
																		result.name,
																		_react2.default.createElement('input', { type: 'radio', name: 'gender', id: i, value: i, checked: _this3.state.is_checked ? _this3.state.is_checked === result.id : result.is_selected }),
																		_react2.default.createElement('span', { className: 'doc-checkmark' })
																	)
																),
																_react2.default.createElement(
																	'td',
																	null,
																	_react2.default.createElement(
																		'span',
																		null,
																		'\u20B9 ',
																		result.amount
																	)
																)
															);
														})
													)
												)
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ style: { position: 'absolute', bottom: '-40px', right: '15px' } },
										_react2.default.createElement(
											'a',
											{ className: 'fw-500', href: '/terms', style: { color: "#f78631" }, onClick: function onClick(e) {
													e.preventDefaut();
													_this3.props.history.push('/terms');
												} },
											'Website T&C Apply'
										)
									)
								),
								this.state.showPopup ? _react2.default.createElement(_insurancePopup2.default, _extends({}, this.props, { selected_plan: this.state.selected_plan_data, hideLoginPopup: this.hideLoginPopup.bind(this), isLead: this.state.isLead, closeLeadPopup: this.closeLeadPopup.bind(this), popupClass: this.state.popupClass, overlayClass: this.state.overlayClass, identifyUserClick: this.state.identifyUserClick })) : '',
								_parsed.show_button ? _react2.default.createElement(
									'div',
									{ className: 'sticky-btn fixed insuBtnsContainer' },
									_react2.default.createElement(
										'button',
										{ className: 'insu-left-white-btn', onClick: function onClick() {
												return _this3.props.history.go(-1);
											} },
										'Back to Booking'
									),
									_storage2.default.checkAuth() ? _react2.default.createElement(
										'button',
										{ className: 'insu-right-orng-btn', onClick: this.proceedPlan.bind(this) },
										'Proceed ',
										this.state.selected_plan_price,
										' ',
										_react2.default.createElement(
											'span',
											{ className: 'foot-btn-sub-span' },
											this.state.gst
										)
									) : _react2.default.createElement(
										'button',
										{ className: 'insu-right-orng-btn', id: 'proceedLead', onClick: this.proceedLead.bind(this, 'proceed') },
										'Proceed ',
										this.state.selected_plan_price,
										' ',
										_react2.default.createElement(
											'span',
											{ className: 'foot-btn-sub-span' },
											this.state.gst
										)
									)
								) : _storage2.default.checkAuth() ? _react2.default.createElement(
									'button',
									{ className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg sticky-btn', onClick: this.proceedPlan.bind(this) },
									'Proceed ',
									this.state.selected_plan_price,
									' ',
									_react2.default.createElement(
										'span',
										{ className: 'foot-btn-sub-span' },
										this.state.gst
									)
								) : _react2.default.createElement(
									'div',
									{ className: 'sticky-btn fixed insuBtnsContainer' },
									_react2.default.createElement(
										'button',
										{ className: 'insu-left-white-btn', id: 'proceedLead', onClick: this.proceedLead.bind(this, 'interest') },
										'Click here to know more'
									),
									_react2.default.createElement(
										'button',
										{ className: 'insu-right-orng-btn', onClick: this.proceedLead.bind(this, 'proceed') },
										'Proceed ',
										this.state.selected_plan_price,
										' ',
										_react2.default.createElement(
											'span',
											{ className: 'foot-btn-sub-span' },
											this.state.gst
										)
									)
								)
							),
							_react2.default.createElement(_ChatPanel2.default, null)
						)
					)
				);
			}
			// else{
			// 	if(this.props.insurnaceData.certificate){
			// 		this.props.history.push('/insurance/certificate')
			// 	}
			// 	return(
			// 	<div className="profile-body-wrap">
			//        <ProfileHeader />
			// 		<Loader />
			// 	</div>
			// 	)
			// }
		}
	}]);

	return Insurance;
}(_react2.default.Component);

exports.default = Insurance;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceView.js":
/*!******************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceView.js ***!
  \******************************************************/
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

var _insuranceView = __webpack_require__(/*! ../../components/insurance/insuranceView.js */ "./dev/js/components/insurance/insuranceView.js");

var _insuranceView2 = _interopRequireDefault(_insuranceView);

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

var Insurance = function (_React$Component) {
    _inherits(Insurance, _React$Component);

    function Insurance(props) {
        _classCallCheck(this, Insurance);

        var _this = _possibleConstructorReturn(this, (Insurance.__proto__ || Object.getPrototypeOf(Insurance)).call(this, props));

        _this.state = {
            showInsuranceView: false
        };
        return _this;
    }

    _createClass(Insurance, [{
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
                return _react2.default.createElement(_insuranceView2.default, this.props);
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
            // return(
            //         <InsuranceComponent {...this.props}/>
            //     )
        }
    }]);

    return Insurance;
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Insurance);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pbnN1cmFuY2UvSW5zdXJhbmNlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiSW5zdXJhbmNlIiwicHJvcHMiLCJzdGF0ZSIsInRvZ2dsZSIsImlzX2NoZWNrZWQiLCJzZWxlY3RlZF9wbGFuIiwiaWQiLCJzZWxlY3RlZF9wbGFuX3ByaWNlIiwiYW1vdW50IiwiZ3N0Iiwic2VsZWN0ZWRfcGxhbl9kYXRhIiwic2hvd1BvcHVwIiwic2hvcnRVUkwiLCJpc0xlYWQiLCJjaGVja0lkbGVUaW1lb3V0IiwicG9wdXBDbGFzcyIsIm92ZXJsYXlDbGFzcyIsImlkZW50aWZ5VXNlckNsaWNrIiwibGVhZF9kYXRhIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBob25lTnVtYmVyIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsInBhZ2Vfc291cmNlIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsIlVTRVIiLCJwcmltYXJ5TW9iaWxlIiwic2VsZWN0ZWRJZCIsInNlbGVjdFBsYW4iLCJ0ZXh0SW5wdXQiLCJjbGljayIsImluYWN0aXZpdHlUaW1lIiwidGltZSIsInNlbGYiLCJ3aW5kb3ciLCJvbmxvYWQiLCJyZXNldFRpbWVyIiwiZG9jdW1lbnQiLCJvbm1vdXNlbW92ZSIsIm9ua2V5cHJlc3MiLCJzdG9wIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRTdGF0ZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJwbGFuX3RvX3RvZ2dsZSIsInBsYW4iLCJpc19zZWxlY3RlZCIsInNlbGVjdEluc3VyYW5jZVBsYW4iLCJwYXJzZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9maWxlTGVuZ3RoIiwibWVtYmVyU3RvcmVEYXRhTGVuZ3RoIiwibWVtYmVyc0FycmF5IiwicHJvZmlsZXNBcnJheSIsInJlc2V0U2VsZWN0ZWRQbGFucyIsImtleXMiLCJwcm9maWxlcyIsImxlbmd0aCIsInNlbGZfZGF0YV92YWx1ZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwiayIsInB1c2giLCJ2YWx1ZXMiLCJtZW1iZXJOZXdkYXRhIiwibmV3TmFtZSIsIm5hbWUiLCJzcGxpdCIsIm1pZGRsZV9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJkb2IiLCJnZW5kZXIiLCJ1c2VyRGF0YSIsImhpc3RvcnkiLCJ0eXBlIiwidXJsIiwiaHJlZiIsInVybFNob3J0bmVyIiwiZXJyIiwidGlueV91cmwiLCJMT0FEX0lOU1VSQU5DRSIsImNhbm9uaWNhbFVybCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwb3NpdGlvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiaW5zdXJuYWNlRGF0YSIsInBsYW5zIiwicmVzdWx0IiwiaSIsImJpbmQiLCJhZHVsdF9jb3VudCIsImNoaWxkX2NvdW50IiwiaW5wdXQiLCJib3R0b20iLCJyaWdodCIsImNvbG9yIiwicHJldmVudERlZmF1dCIsImhpZGVMb2dpblBvcHVwIiwiY2xvc2VMZWFkUG9wdXAiLCJzaG93X2J1dHRvbiIsImdvIiwicHJvY2VlZFBsYW4iLCJwcm9jZWVkTGVhZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwic2hvd0luc3VyYW5jZVZpZXciLCJnZXRVc2VyUHJvZmlsZSIsInNjcm9sbFRvIiwiZ2V0SW5zdXJhbmNlIiwiY2VydGlmaWNhdGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJJTlNVUkFOQ0UiLCJzZWxlY3RlZExvY2F0aW9uIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiaXNfZW5kb3JzZW1lbnQiLCJjYWxsYmFjayIsImNyaXRlcmlhIiwic2VuZE9UUCIsIm51bWJlciIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwibWVzc2FnZV90eXBlIiwiY2IiLCJzdWJtaXRPVFAiLCJvdHAiLCJleHRyYVBhcmFtc0RhdGEiLCJyZXNldEF1dGgiLCJzZWxmX2RhdGEiLCJmb3JjZWFkZCIsImdlbmVyYXRlSW5zdXJhbmNlTGVhZCIsInNlbGVjdGVkUGxhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUhBLElBQU1BLGNBQWNDLG1CQUFPQSxDQUFDLDBEQUFSLENBQXBCOztJQUtNQyxTOzs7QUFDTCxvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWjtBQUNBQyxXQUFRLEtBRkk7QUFHWkMsZUFBWSxNQUFLSCxLQUFMLENBQVdJLGFBQVgsR0FBMkIsTUFBS0osS0FBTCxDQUFXSSxhQUFYLENBQXlCQyxFQUFwRCxHQUF5RCxFQUh6RDtBQUlaQyx3QkFBcUIsTUFBS04sS0FBTCxDQUFXSSxhQUFYLEdBQTJCLE1BQUtKLEtBQUwsQ0FBV0ksYUFBWCxDQUF5QkcsTUFBcEQsR0FBNkQsRUFKdEU7QUFLWkMsUUFBSyxzQkFMTztBQU1aQyx1QkFBb0IsTUFBS1QsS0FBTCxDQUFXSSxhQUFYLEdBQTJCLE1BQUtKLEtBQUwsQ0FBV0ksYUFBdEMsR0FBc0QsRUFOOUQ7QUFPWk0sY0FBVyxLQVBDO0FBUVpDLGFBQVUsRUFSRTtBQVNaQyxXQUFRLEVBVEk7QUFVWkMscUJBQWlCLElBVkw7QUFXWkMsZUFBWSxFQVhBO0FBWVpDLGlCQUFj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QTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNGO0FBQ1Y7QUFDRjtBQUNNO0FBQ0Y7QUFDSjtBQUNGO0FBQ0k7QUFDRjtBQUNjO0FBQ0Y7QUFDVjtBQUNGO0FBQ2M7QUFDRjtBQUNKO0FBQ0Y7QUFDSSIsImZpbGUiOiIxMjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDaGF0UGFuZWwgZnJvbSAnLi4vY29tbW9ucy9DaGF0UGFuZWwnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBJbnN1clBvcHVwIGZyb20gJy4vaW5zdXJhbmNlUG9wdXAuanMnXG5pbXBvcnQgSW5zdXJDb21tb24gZnJvbSAnLi9pbnN1cmFuY2VDb21tb25TZWN0aW9uLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCB7IEFzc2VydGlvbkVycm9yIH0gZnJvbSAnYXNzZXJ0JztcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIEluc3VyYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdC8vaW5zdXJhbmNlUmVzdWx0czp0aGlzLnByb3BzLmluc3VybmFjZURhdGEsXG5cdFx0XHR0b2dnbGU6ICdvbmUnLFxuXHRcdFx0aXNfY2hlY2tlZDogdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuID8gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmlkIDogJycsXG5cdFx0XHRzZWxlY3RlZF9wbGFuX3ByaWNlOiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gPyB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYW1vdW50IDogJycsXG5cdFx0XHRnc3Q6ICdJbmNsdXNpdmUgb2YgMTglIEdTVCcsXG5cdFx0XHRzZWxlY3RlZF9wbGFuX2RhdGE6IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbiA/IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbiA6ICcnLFxuXHRcdFx0c2hvd1BvcHVwOiBmYWxzZSxcblx0XHRcdHNob3J0VVJMOiBcIlwiLFxuXHRcdFx0aXNMZWFkOiAnJyxcblx0XHRcdGNoZWNrSWRsZVRpbWVvdXQ6dHJ1ZSxcblx0XHRcdHBvcHVwQ2xhc3M6ICcnLFxuXHRcdFx0b3ZlcmxheUNsYXNzOiAnJyxcblx0XHRcdGlkZW50aWZ5VXNlckNsaWNrOicnXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdC8vIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG5cdFx0Ly8gXHR0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKClcblx0XHQvLyB9XG5cdFx0bGV0IGxlYWRfZGF0YSA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGxldCBwaG9uZU51bWJlciA9ICcnXG5cdFx0aWYgKCFTVE9SQUdFLmNoZWNrQXV0aCgpICYmIGxlYWRfZGF0YS5wYWdlX3NvdXJjZSA9PSAnYmFubmVyJykge1xuXHRcdFx0Ly90aGlzLnNldFN0YXRlKHtjaGVja0lkbGVUaW1lb3V0OmZhbHNlLCBzaG93UG9wdXA6dHJ1ZSwgcG9wdXBDbGFzczogJ3RyYW5zbHVjZW50LXBvcHVwJywgb3ZlcmxheUNsYXNzOiAnd2hpdGUtb3ZlcmxheScsIGlkZW50aWZ5VXNlckNsaWNrOidiYW5uZXJDbGljayd9KVxuXHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0luc3VyYW5jZUxvZ2luUG9wdXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ0luc3VyYW5jZS1sb2dpbi1wb3B1cC1jbGljaycsICdjbGlja192YWx1ZSc6ICdiYW5uZXJDbGljaydcblx0XHRcdH1cblxuXHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0fVxuXHRcdGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpICYmIHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIucHJpbWFyeU1vYmlsZSAhPSAnJykge1xuICAgICAgICAgICAgcGhvbmVOdW1iZXIgPSB0aGlzLnByb3BzLlVTRVIucHJpbWFyeU1vYmlsZVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMucHJvcHMuZ2VuZXJhdGVJbnN1cmFuY2VMZWFkKCcnLHBob25lTnVtYmVyLGxlYWRfZGF0YSx0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXG5cdFx0bGV0IHNlbGVjdGVkSWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gPyB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uaWQgOiAnJ1xuXHRcdGlmIChzZWxlY3RlZElkKSB7XG5cdFx0XHR0aGlzLnNlbGVjdFBsYW4odGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICh0aGlzLnRleHRJbnB1dCkge1xuXHRcdFx0XHR0aGlzLnRleHRJbnB1dC5jbGljaygpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHRoaXMuc3RhdGUuY2hlY2tJZGxlVGltZW91dCAmJiAhU1RPUkFHRS5jaGVja0F1dGgoKSl7XG5cdFx0XHQvL3RoaXMuc2V0U3RhdGUoe3BvcHVwQ2xhc3M6ICd0cmFuc2x1Y2VudC1wb3B1cCcsIG92ZXJsYXlDbGFzczogJ3doaXRlLW92ZXJsYXknfSlcblx0XHRcdHRoaXMuaW5hY3Rpdml0eVRpbWUoKSBcblx0XHR9XG5cdH1cblxuXHRpbmFjdGl2aXR5VGltZSgpIHsgLy8gdG8gY2hlY2sgdXNlciBpbmFjdGl2ZSB0aW1lIG9uIHBhZ2UgYW5kIGFzayBmb3IgbG9naW5cbiAgICB2YXIgdGltZTtcbiAgICBsZXQgc2VsZiA9ICB0aGlzXG4gICAgd2luZG93Lm9ubG9hZCA9IHJlc2V0VGltZXI7XG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSByZXNldFRpbWVyO1xuICAgIGRvY3VtZW50Lm9ua2V5cHJlc3MgPSByZXNldFRpbWVyO1xuICAgIHJlc2V0VGltZXIoKVxuXHQgICAgZnVuY3Rpb24gc3RvcCgpIHtcblx0ICAgIFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSW5zdXJhbmNlTG9naW5Qb3B1cCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnSW5zdXJhbmNlLWxvZ2luLXBvcHVwLWNsaWNrJywgJ2NsaWNrX3ZhbHVlJzogJ0F1dG9DbGljaydcblx0XHRcdFx0fVxuXHRcdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHQgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9jZWVkTGVhZCcpKXtcblx0ICAgICAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9jZWVkTGVhZCcpLmNsaWNrKClcblx0ICAgICAgICBcdHNlbGYuc2V0U3RhdGUoe2NoZWNrSWRsZVRpbWVvdXQ6ZmFsc2UsIGlkZW50aWZ5VXNlckNsaWNrOidBdXRvQ2xpY2snfSlcblx0ICAgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIHJlc2V0VGltZXIoKSB7XG5cdCAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWUpO1xuXHQgICAgICAgIGlmKHNlbGYuc3RhdGUuY2hlY2tJZGxlVGltZW91dCl7XG5cdCAgICAgICAgXHR0aW1lID0gc2V0VGltZW91dChzdG9wLCAxMjAwMClcdFxuXHQgICAgICAgIH1cblx0ICAgIH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcblx0XHQvLyBsZXQgc2VsZiA9IHRoaXNcblx0XHQvLyBsZXQgc2VsZWN0ZWRJZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbj90aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uaWQ6Jydcblx0XHQvLyBsZXQgbmV3U2VsZWN0ZWRJZCA9IHByb3BzLnNlbGVjdGVkX3BsYW4/cHJvcHMuc2VsZWN0ZWRfcGxhbi5pZDonJ1xuXHRcdC8vIGlmKHNlbGVjdGVkSWQpe1xuXHRcdC8vIFx0dGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkX3BsYW5fZGF0YTogcHJvcHMuc2VsZWN0ZWRfcGxhbiAsIHNlbGVjdGVkX3BsYW5fcHJpY2U6IGAo4oK5ICR7cHJvcHMuc2VsZWN0ZWRfcGxhbi5hbW91bnR9KWAsIGlzX2NoZWNrZWQ6IHNlbGVjdGVkSWQgfSlcblx0XHQvLyB9XG5cdFx0Ly8gaWYoIW5ld1NlbGVjdGVkSWQpe1xuXHRcdC8vIFx0aWYodGhpcy50ZXh0SW5wdXQpe1xuXHRcdC8vIFx0XHR0aGlzLnRleHRJbnB1dC5jbGljaygpXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHR9XG5cdHNlbGVjdFBsYW4ocGxhbl90b190b2dnbGUpIHtcblx0XHRsZXQgcGxhbiA9IHBsYW5fdG9fdG9nZ2xlXG5cdFx0cGxhbl90b190b2dnbGUuaXNfc2VsZWN0ZWQgPSB0cnVlXG5cdFx0Ly8gcGxhbl90b190b2dnbGUucGxhbl9uYW1lID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5uYW1lXG5cdFx0Ly8gcGxhbl90b190b2dnbGUubG9nbyA9IHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0ubG9nbyBcblx0XHQvLyBwbGFuX3RvX3RvZ2dsZS5pbnN1cmVyX2RvY3VtZW50ID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5pbnN1cmVyX2RvY3VtZW50XG5cdFx0Ly8gcGxhbl90b190b2dnbGUuaW5zdXJlciA9IHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0uaWRcblx0XHQvLyBwbGFuX3RvX3RvZ2dsZS5zdGF0ZURhdGEgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ3N0YXRlJ10gXG5cdFx0dGhpcy5wcm9wcy5zZWxlY3RJbnN1cmFuY2VQbGFuKCdwbGFuJywgcGxhbilcblx0XHR0aGlzLnNldFN0YXRlKHsgaXNfY2hlY2tlZDogcGxhbl90b190b2dnbGUuaWQsIHNlbGVjdGVkX3BsYW5fZGF0YTogcGxhbl90b190b2dnbGUsIHNlbGVjdGVkX3BsYW5fcHJpY2U6IGAo4oK5ICR7cGxhbl90b190b2dnbGUuYW1vdW50fSlgLCB0b2dnbGU6IHRoaXMuc3RhdGUudG9nZ2xlID09ICd0d28nID8gJ29uZScgOiAnb25lJyB9KVxuXHR9XG5cdHByb2NlZWRQbGFuKCkgeyAvLyB0byBzYXZlIHVzZXIgYWdyZWVkIHBsYW4gYW5kIHJlZGlyZWN0IHRvIGFzayB1c2VyIGRldGFpbHMgZm9yIHBvbGljeVxuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdGxldCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRsZXQgcGxhbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuc2VsZWN0ZWRfcGxhbl9kYXRhKVxuXHRcdGxldCBwcm9maWxlTGVuZ3RoXG5cdFx0bGV0IG1lbWJlclN0b3JlRGF0YUxlbmd0aFxuXHRcdGxldCBtZW1iZXJzQXJyYXkgPSBbXVxuXHRcdGxldCBwcm9maWxlc0FycmF5ID0gW11cblx0XHRsZXQgbGVhZF9kYXRhXG5cdFx0Ly8gcGxhbi5wbGFuX25hbWUgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLm5hbWVcblx0XHQvLyBwbGFuLmxvZ28gPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmxvZ28gXG5cdFx0Ly8gcGxhbi5pbnN1cmVyX2RvY3VtZW50ID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5pbnN1cmVyX2RvY3VtZW50ICAgXHRcblx0XHQvLyBwbGFuLmluc3VyZXIgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmlkXG5cdFx0Ly8gcGxhbi5zdGF0ZURhdGEgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ3N0YXRlJ11cblx0XHQvLyB0aGlzLnByb3BzLnNlbGVjdEluc3VyYW5jZVBsYW4oJ3BsYW4nLCBwbGFuKVxuXHRcdHRoaXMucHJvcHMucmVzZXRTZWxlY3RlZFBsYW5zKCkgLy8gdG8gcmVzZXQgdXNlciBzZWxlY3RlZCBwbGFuXG5cdFx0aWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcblx0XHRcdGxldCBwaG9uZU51bWJlciA9ICcnXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlICE9ICcnKSB7XG5cdFx0XHRcdHBob25lTnVtYmVyID0gdGhpcy5wcm9wcy5VU0VSLnByaW1hcnlNb2JpbGVcblx0XHRcdH1cblx0XHRcdC8vIGlmIChPYmplY3Qua2V5cyhwbGFuKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQvLyBcdGxlYWRfZGF0YSA9IHBhcnNlZFxuXHRcdFx0Ly8gXHR0aGlzLnByb3BzLmdlbmVyYXRlSW5zdXJhbmNlTGVhZChwbGFuLmlkLCBwaG9uZU51bWJlcixsZWFkX2RhdGEsdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuXHRcdFx0Ly8gfVxuXHRcdFx0cHJvZmlsZUxlbmd0aCA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoXG5cdFx0XHRtZW1iZXJTdG9yZURhdGFMZW5ndGggPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMpLmxlbmd0aFxuXHRcdFx0aWYgKHByb2ZpbGVMZW5ndGggPiAwICYmIG1lbWJlclN0b3JlRGF0YUxlbmd0aCA+IDApIHtcblx0XHRcdFx0T2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHNlbGZfZGF0YV92YWx1ZXNdKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmVudHJpZXMoc2VsZi5wcm9wcy5VU0VSLnByb2ZpbGVzKS5tYXAoZnVuY3Rpb24gKFtrLCBwcm9maWxlc10pIHtcblx0XHRcdFx0XHRcdGlmIChzZWxmX2RhdGFfdmFsdWVzLmlkID09IHByb2ZpbGVzLmlkKSB7XG5cdFx0XHRcdFx0XHRcdG1lbWJlcnNBcnJheS5wdXNoKHNlbGZfZGF0YV92YWx1ZXMpXG5cdFx0XHRcdFx0XHRcdHByb2ZpbGVzQXJyYXkucHVzaChwcm9maWxlcylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRpZiAobWVtYmVyc0FycmF5Lmxlbmd0aCA9PSBwcm9maWxlc0FycmF5Lmxlbmd0aCkge1xuXHRcdFx0XHRcdE9iamVjdC5lbnRyaWVzKG1lbWJlcnNBcnJheSkubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZXNdKSB7XG5cdFx0XHRcdFx0XHRpZiAobWVtYmVyc0FycmF5W2tleV0uaWQgPT0gcHJvZmlsZXNBcnJheVtrZXldLmlkKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBtZW1iZXJOZXdkYXRhID0gdmFsdWVzXG5cdFx0XHRcdFx0XHRcdGxldCBuZXdOYW1lID0gcHJvZmlsZXNBcnJheVtrZXldLm5hbWUuc3BsaXQoXCIgXCIpXG5cdFx0XHRcdFx0XHRcdGlmIChuZXdOYW1lLmxlbmd0aCA9PSAzKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5uYW1lID0gbmV3TmFtZVswXVxuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEubWlkZGxlX25hbWUgPSBuZXdOYW1lWzFdXG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5sYXN0X25hbWUgPSBuZXdOYW1lWzJdXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobmV3TmFtZS5sZW5ndGggPT0gMikge1xuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEubmFtZSA9IG5ld05hbWVbMF1cblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmxhc3RfbmFtZSA9IG5ld05hbWVbMV1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLm5hbWUgPSBuZXdOYW1lWzBdXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKG1lbWJlcnNBcnJheVtrZXldLmVtYWlsICE9ICcnKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5lbWFpbCA9IG1lbWJlcnNBcnJheVtrZXldLmVtYWlsXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5lbWFpbCA9IHByb2ZpbGVzQXJyYXlba2V5XS5lbWFpbFxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKG1lbWJlcnNBcnJheVtrZXldLmRvYiAhPSBudWxsIHx8IG1lbWJlcnNBcnJheVtrZXldLmRvYiAhPSAnJykge1xuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEuZG9iID0gbWVtYmVyc0FycmF5W2tleV0uZG9iXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5kb2IgPSBwcm9maWxlc0FycmF5W2tleV0uZG9iXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKG1lbWJlcnNBcnJheVtrZXldLmdlbmRlciAhPSAnJykge1xuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEuZ2VuZGVyID0gbWVtYmVyc0FycmF5W2tleV0uZ2VuZGVyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5nZW5kZXIgPSBwcm9maWxlc0FycmF5W2tleV0uZ2VuZGVyXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0c2VsZi5wcm9wcy51c2VyRGF0YSgnbWVtYmVyTmV3ZGF0YScsIG1lbWJlck5ld2RhdGEpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtdXNlci1kZXRhaWxzJylcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtdXNlci1kZXRhaWxzJylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXVzZXItZGV0YWlscycpXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IHRydWUgfSlcblx0XHR9XG5cdH1cblxuXHRwcm9jZWVkTGVhZCh0eXBlKSB7XG5cdFx0aWYoIXRoaXMuc3RhdGUuY2hlY2tJZGxlVGltZW91dCl7XG5cdFx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJbnN1cmFuY2VMb2dpblBvcHVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdJbnN1cmFuY2UtbG9naW4tcG9wdXAtY2xpY2snLCAnY2xpY2tfdmFsdWUnOiAndXNlckNsaWNrJywgdHlwZTp0eXBlXG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtwb3B1cENsYXNzOiAnJywgb3ZlcmxheUNsYXNzOiAnJ30pXG5cdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHsgaXNMZWFkOiB0eXBlLCBzaG93UG9wdXA6IHRydWUsIGlkZW50aWZ5VXNlckNsaWNrOid1c2VyQ2xpY2snIH0pXG5cdH1cblxuXHRjbG9zZUxlYWRQb3B1cCgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IGZhbHNlIH0pXG5cdH1cblxuXHRoaWRlTG9naW5Qb3B1cCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNob3dQb3B1cDogZmFsc2Vcblx0XHR9KTtcblx0fVxuXG5cdHNob3J0ZW5VcmwoKSB7XG5cdFx0aWYgKHdpbmRvdykge1xuXHRcdFx0bGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgJyZmb3JjZV9sb2NhdGlvbj10cnVlJ1xuXHRcdFx0dGhpcy5wcm9wcy51cmxTaG9ydG5lcih1cmwsIChlcnIsIGRhdGEpID0+IHtcblx0XHRcdFx0aWYgKCFlcnIpIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IGRhdGEudGlueV91cmwgfSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGlmICh0aGlzLnByb3BzLkxPQURfSU5TVVJBTkNFKSB7XG5cdFx0XHRsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG5cdFx0XHRcdFx0PFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPlxuXHRcdFx0XHRcdDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgIFx0Y2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfS9pbnN1cmFuY2UvaW5zdXJhbmNlLXZpZXdgLFxuICAgICAgICAgICAgICAgICAgICBcdHRpdGxlOiAnT1BEIEluc3VyYW5jZSB8IEJ1eSBPUEQgSW5zdXJhbmNlIENvdmVyIHwgT1BEIENvdmVyJyxcbiAgICAgICAgICAgICAgICAgICAgXHRkZXNjcmlwdGlvbjogJ09QRCBJbnN1cmFuY2U6IEJ1eSBPUEQgaW5zdXJhbmNlIGNvdmVyICYgZ2V0IGNhc2hsZXNzIGJlbmVmaXRzIG9uIGxhYiB0ZXN0cyAmIGRvY3RvciBjb25zdWx0YXRpb24gd2l0aCBhIG5ldHdvcmsgb2Ygb3ZlciAxNTAwMCBkb2N0b3JzIGFuZCAyMDAwIGxhYnMuJ1xuICAgICAgICAgICAgICAgIFx0fX0gbm9JbmRleD17ZmFsc2V9IC8+ICAgICAgICAgICAgICAgIFxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpbiBjYXJkTWFpblBhZGRpbmdSbXZcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgZHNrdHAtcm93LWd1dHRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBpbnMtbWFpbi1wYWRkaW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZmlsZS1ib29rLXNjcmVlblwiIHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJ319PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qPGRpdj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3RoaXMuc2hvcnRlblVybC5iaW5kKHRoaXMpfT5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3VybC1zaG9ydC5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDgwIH19IC8+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDwvZGl2PiovXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG9ydFVSTCA/IDxkaXYgY2xhc3NOYW1lPVwic2hhcmVMaW5rcG9wdXBPdmVybGF5XCIgb25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBcIlwiIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNoYXJlTGlua3BvcHVwXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPnt0aGlzLnN0YXRlLnNob3J0VVJMfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PENvcHlUb0NsaXBib2FyZCB0ZXh0PXt0aGlzLnN0YXRlLnNob3J0VVJMfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ29weT17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNob3J0ZW5lZCBVUkwgQ29waWVkLlwiIH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBcIlwiIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2hyZWxpbmtCdG5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24+Q29weTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Db3B5VG9DbGlwYm9hcmQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOiBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEluc3VyQ29tbW9uIHsuLi50aGlzLnByb3BzfSBpc1NlbGVjdFBsYW49e3RydWV9IGlzX2NoZWNrZWQ9e3RoaXMuc3RhdGUuaXNfY2hlY2tlZH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIGNvdmVyYWdlIGxpc3RpbmcgKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1ydC0yMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY292ZXJhZ2UtbGlzdC1jb250YWluZXIgYm9yZGVyLWJnLXRyYW5zcHJhbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCBpbnN1cmFuY2UtdGJsIGluc3VyYW5jZS1jaGVja2JveGVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwidGJsLWZpcnN0LWhlYWRcIj48cD5Db3ZlcmFnZSAoMSBZZWFyKTwvcD48L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInRibC1zZWNvbmQtaGVhZFwiPjxwPkFubnVhbCBQcmVtaXVtPC9wPjwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0ucGxhbnMubWFwKChyZXN1bHQsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDx0ciBpZD17cmVzdWx0LmlkfSBrZXk9e2l9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0UGxhbi5iaW5kKHRoaXMsIHJlc3VsdCl9IHJlZj17cmVzdWx0LmFkdWx0X2NvdW50ID09IDIgJiYgcmVzdWx0LmNoaWxkX2NvdW50ID09IDIgPyAoaW5wdXQpID0+IHsgdGhpcy50ZXh0SW5wdXQgPSBpbnB1dCB9IDogJ3JlZl8wJ30+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiIGh0bWxmb3JtPXtpfSA+e3Jlc3VsdC5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImdlbmRlclwiIGlkPXtpfSB2YWx1ZT17aX0gY2hlY2tlZD17dGhpcy5zdGF0ZS5pc19jaGVja2VkID8gdGhpcy5zdGF0ZS5pc19jaGVja2VkID09PSByZXN1bHQuaWQgOiByZXN1bHQuaXNfc2VsZWN0ZWR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPjxzcGFuPuKCuSB7cmVzdWx0LmFtb3VudH08L3NwYW4+PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiBjb3ZlcmFnZSBsaXN0aW5nICovfVx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3Bvc2l0aW9uOidhYnNvbHV0ZScsIGJvdHRvbTonLTQwcHgnLCByaWdodDonMTVweCd9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJmdy01MDBcIiBocmVmPVwiL3Rlcm1zXCIgc3R5bGU9e3tjb2xvcjpcIiNmNzg2MzFcIn19IG9uQ2xpY2s9eyhlKSA9PiB7ZS5wcmV2ZW50RGVmYXV0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3Rlcm1zJyl9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFdlYnNpdGUgVCZDIEFwcGx5PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnNob3dQb3B1cCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5zdXJQb3B1cCB7Li4udGhpcy5wcm9wc30gc2VsZWN0ZWRfcGxhbj17dGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX2RhdGF9IGhpZGVMb2dpblBvcHVwPXt0aGlzLmhpZGVMb2dpblBvcHVwLmJpbmQodGhpcyl9IGlzTGVhZD17dGhpcy5zdGF0ZS5pc0xlYWR9IGNsb3NlTGVhZFBvcHVwPXt0aGlzLmNsb3NlTGVhZFBvcHVwLmJpbmQodGhpcyl9IHBvcHVwQ2xhc3M9e3RoaXMuc3RhdGUucG9wdXBDbGFzc30gb3ZlcmxheUNsYXNzPXt0aGlzLnN0YXRlLm92ZXJsYXlDbGFzc30gaWRlbnRpZnlVc2VyQ2xpY2s9e3RoaXMuc3RhdGUuaWRlbnRpZnlVc2VyQ2xpY2t9Lz4gOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRwYXJzZWQuc2hvd19idXR0b24/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1idG4gZml4ZWQgaW5zdUJ0bnNDb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImluc3UtbGVmdC13aGl0ZS1idG5cIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKX0+QmFjayB0byBCb29raW5nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U1RPUkFHRS5jaGVja0F1dGgoKT9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaW5zdS1yaWdodC1vcm5nLWJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvY2VlZFBsYW4uYmluZCh0aGlzKX0+UHJvY2VlZCB7dGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX3ByaWNlfSA8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPnt0aGlzLnN0YXRlLmdzdH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaW5zdS1yaWdodC1vcm5nLWJ0blwiIGlkPVwicHJvY2VlZExlYWRcIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRMZWFkLmJpbmQodGhpcywgJ3Byb2NlZWQnKX0+UHJvY2VlZCB7dGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX3ByaWNlfSA8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPnt0aGlzLnN0YXRlLmdzdH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cdFxuXHRcdFx0XHRcdFx0XHRcdFx0OlNUT1JBR0UuY2hlY2tBdXRoKCk/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0aWNreS1idG5cIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcyl9PlByb2NlZWQge3RoaXMuc3RhdGUuc2VsZWN0ZWRfcGxhbl9wcmljZX0gPHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj57dGhpcy5zdGF0ZS5nc3R9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1idG4gZml4ZWQgaW5zdUJ0bnNDb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImluc3UtbGVmdC13aGl0ZS1idG5cIiBpZD1cInByb2NlZWRMZWFkXCIgb25DbGljaz17dGhpcy5wcm9jZWVkTGVhZC5iaW5kKHRoaXMsICdpbnRlcmVzdCcpfT5DbGljayBoZXJlIHRvIGtub3cgbW9yZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaW5zdS1yaWdodC1vcm5nLWJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvY2VlZExlYWQuYmluZCh0aGlzLCAncHJvY2VlZCcpfT5Qcm9jZWVkIHt0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fcHJpY2V9IDxzcGFuIGNsYXNzTmFtZT1cImZvb3QtYnRuLXN1Yi1zcGFuXCI+e3RoaXMuc3RhdGUuZ3N0fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8Q2hhdFBhbmVsIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHRcdH1cblx0XHQvLyBlbHNle1xuXHRcdC8vIFx0aWYodGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhLmNlcnRpZmljYXRlKXtcblx0XHQvLyBcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvY2VydGlmaWNhdGUnKVxuXHRcdC8vIFx0fVxuXHRcdC8vIFx0cmV0dXJuKFxuXHRcdC8vIFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXHRcdC8vICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuXHRcdC8vIFx0XHQ8TG9hZGVyIC8+XG5cdFx0Ly8gXHQ8L2Rpdj5cblx0XHQvLyBcdClcblx0XHQvLyB9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdXJhbmNlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgZ2V0SW5zdXJhbmNlLCBzZWxlY3RJbnN1cmFuY2VQbGFuICwgc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnMscmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnMscmVzZXRTZWxlY3RlZFBsYW5zLHNlbmRPVFAsIHN1Ym1pdE9UUCwgcmVzZXRBdXRoLCBnZXRVc2VyUHJvZmlsZSwgdXNlckRhdGEsIGdlbmVyYXRlSW5zdXJhbmNlTGVhZCwgdXJsU2hvcnRuZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IEluc3VyYW5jZUNvbXBvbmVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2luc3VyYW5jZS9pbnN1cmFuY2VWaWV3LmpzJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgSW5zdXJhbmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc2hvd0luc3VyYW5jZVZpZXc6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKSAvLyB0byBnZXQgbG9nZ2VkSW4gdXNlciBwcm9maWxlXG4gICAgICAgIH1cbiAgICAgICAgLyp0aGlzLnByb3BzLmdldEluc3VyYW5jZShyZXNwPT57XG4gICAgICAgICAgICBpZighcmVzcC5jZXJ0aWZpY2F0ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZW5lcmF0ZUluc3VyYW5jZUxlYWQoJycscGhvbmVOdW1iZXIsbGVhZF9kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSovXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0SW5zdXJhbmNlKGZhbHNlKSAvLyB0byBnZXQgaW5zdXJhbmNlIHBsYW5zXG4gICAgfVxuXHRyZW5kZXIoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5MT0FEX0lOU1VSQU5DRSl7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPEluc3VyYW5jZUNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgICAgKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YS5jZXJ0aWZpY2F0ZSAmJiBTVE9SQUdFLmNoZWNrQXV0aCgpKXsgLy8gaWYgdXNlciBpcyBhbHJlYWR5IGFuIGluc3VyYW5jZSBjdXN0b21lciBzbyByZWRpcmVjdCBvbiBpbnN1cmVkIGRhc2hib2FyZCBwYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvY2VydGlmaWNhdGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0dXJuKFxuICAgICAgICAvLyAgICAgICAgIDxJbnN1cmFuY2VDb21wb25lbnQgey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgLy8gICAgIClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBVU0VSID0gc3RhdGUuVVNFUlxuICAgIGxldCB7IGluc3VybmFjZURhdGEsIExPQURfSU5TVVJBTkNFLCBzZWxlY3RlZF9wbGFuLHNlbGZfZGF0YV92YWx1ZXN9ID0gc3RhdGUuSU5TVVJBTkNFXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG5cbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuICAgIHJldHVybiB7XG4gICAgICAgIGluc3VybmFjZURhdGEsTE9BRF9JTlNVUkFOQ0Usc2VsZWN0ZWRfcGxhbixzZWxmX2RhdGFfdmFsdWVzLFVTRVIsIHNlbGVjdGVkTG9jYXRpb25cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEluc3VyYW5jZTogKGlzX2VuZG9yc2VtZW50LGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRJbnN1cmFuY2UoaXNfZW5kb3JzZW1lbnQsY2FsbGJhY2spKSxcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICBzZWxlY3RJbnN1cmFuY2VQbGFuOiAocGxhbixjcml0ZXJpYSkgPT4gZGlzcGF0Y2goc2VsZWN0SW5zdXJhbmNlUGxhbihwbGFuLGNyaXRlcmlhKSksXG4gICAgICAgIC8vIHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzOiAobWVtYmVyc0lkKSA9PiBkaXNwYXRjaChzYXZlQ3VycmVudFNlbGVjdGVkTWVtYmVycyhtZW1iZXJzSWQpKSxcbiAgICAgICAgcmVzZXRTZWxlY3RlZFBsYW5zOiAoKSA9PiBkaXNwYXRjaChyZXNldFNlbGVjdGVkUGxhbnMoKSksXG4gICAgICAgIHNlbmRPVFA6IChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpID0+IGRpc3BhdGNoKHNlbmRPVFAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSksXG4gICAgICAgIHN1Ym1pdE9UUDogKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRPVFAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zRGF0YSwgY2IpKSxcbiAgICAgICAgcmVzZXRBdXRoOiAoKSA9PiBkaXNwYXRjaChyZXNldEF1dGgoKSksXG4gICAgICAgIHVzZXJEYXRhIDooc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSA9PiBkaXNwYXRjaCh1c2VyRGF0YShzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpKSxcbiAgICAgICAgZ2VuZXJhdGVJbnN1cmFuY2VMZWFkOihzZWxlY3RlZFBsYW4sbnVtYmVyLGxlYWRfZGF0YSxjYikgPT4gZGlzcGF0Y2goZ2VuZXJhdGVJbnN1cmFuY2VMZWFkKHNlbGVjdGVkUGxhbixudW1iZXIsbGVhZF9kYXRhLGNiKSksXG4gICAgICAgIHVybFNob3J0bmVyOiAodXJsLCBjYikgPT4gZGlzcGF0Y2godXJsU2hvcnRuZXIodXJsLCBjYikpLFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbnN1cmFuY2UpIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=