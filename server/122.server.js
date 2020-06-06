exports.ids = [122];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _insurancePopup = __webpack_require__(/*! ./insurancePopup.js */ "./dev/js/components/insurance/insurancePopup.js");

var _insurancePopup2 = _interopRequireDefault(_insurancePopup);

var _insuranceCommonSection = __webpack_require__(/*! ./insuranceCommonSection.js */ "./dev/js/components/insurance/insuranceCommonSection.js");

var _insuranceCommonSection2 = _interopRequireDefault(_insuranceCommonSection);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");

var _assert = __webpack_require__(/*! assert */ "assert");

var _HelmetTags = __webpack_require__(/*! ../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class InsuranceStaticView extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			//insuranceResults:this.props.insurnaceData,
			toggle: 'one',
			is_checked: this.props.selected_plan ? this.props.selected_plan.id : '',
			selected_plan_price: this.props.selected_plan ? this.props.selected_plan.amount : '',
			gst: 'Inclusive of 18% GST',
			selected_plan_data: this.props.selected_plan ? this.props.selected_plan : '',
			showPopup: false,
			shortURL: "",
			isLead: 'proceed',
			checkIdleTimeout: true,
			popupClass: '',
			overlayClass: '',
			identifyUserClick: ''
		};
	}
	componentDidMount() {
		// if (STORAGE.checkAuth()) {
		// 	this.props.getUserProfile()
		// }
		let lead_data = queryString.parse(this.props.location.search);
		let phoneNumber = '';
		if (!_storage2.default.checkAuth() && lead_data.page_source == 'banner') {
			// this.setState({checkIdleTimeout:false, showPopup:true, popupClass: 'translucent-popup', overlayClass: 'white-overlay', identifyUserClick:'bannerClick'})
			this.setState({ checkIdleTimeout: false, showPopup: true, popupClass: '', overlayClass: '', identifyUserClick: 'bannerClick' });
			let data = {
				'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopup', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'Insurance-login-popup-click', 'click_value': 'bannerClick'
			};

			_gtm2.default.sendEvent({ data: data });
		}
		if (_storage2.default.checkAuth() && this.props.USER && this.props.USER.primaryMobile != '') {
			phoneNumber = this.props.USER.primaryMobile;
		}
		this.props.generateInsuranceLead('', phoneNumber, lead_data, this.props.selectedLocation); // to create insurance lead for matrix
		let selectedId = this.props.selected_plan ? this.props.selected_plan.id : '';
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

	inactivityTime() {
		var time;
		let self = this;
		window.onload = resetTimer;
		document.onmousemove = resetTimer;
		document.onkeypress = resetTimer;
		resetTimer();
		function stop() {
			let data = {
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

	componentWillReceiveProps(props) {
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
	selectPlan(plan_to_toggle) {
		let plan = plan_to_toggle;
		plan_to_toggle.is_selected = true;
		// plan_to_toggle.plan_name = this.props.insurnaceData['insurance'][0].name
		// plan_to_toggle.logo = this.props.insurnaceData['insurance'][0].logo 
		// plan_to_toggle.insurer_document = this.props.insurnaceData['insurance'][0].insurer_document
		// plan_to_toggle.insurer = this.props.insurnaceData['insurance'][0].id
		// plan_to_toggle.stateData = this.props.insurnaceData['state'] 
		this.props.selectInsurancePlan('plan', plan); // save user selected plan
		this.setState({ is_checked: plan_to_toggle.id, selected_plan_data: plan_to_toggle, selected_plan_price: `(₹ ${plan_to_toggle.amount})`, toggle: this.state.toggle == 'two' ? 'one' : 'one' });
	}

	proceedPlan() {
		let parsed = queryString.parse(this.props.location.search);
		let plan = Object.assign({}, this.state.selected_plan_data);
		let lead_data;
		let phoneNumber = '';
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
	proceedPlan1() {
		let self = this;
		let parsed = queryString.parse(this.props.location.search);
		let plan = Object.assign({}, this.state.selected_plan_data);
		let profileLength;
		let memberStoreDataLength;
		let membersArray = [];
		let profilesArray = [];
		let lead_data;
		// plan.plan_name = this.props.insurnaceData['insurance'][0].name
		// plan.logo = this.props.insurnaceData['insurance'][0].logo 
		// plan.insurer_document = this.props.insurnaceData['insurance'][0].insurer_document   	
		// plan.insurer = this.props.insurnaceData['insurance'][0].id
		// plan.stateData = this.props.insurnaceData['state']
		// this.props.selectInsurancePlan('plan', plan)
		this.props.resetSelectedPlans(); // to reset user selected plan
		if (_storage2.default.checkAuth()) {
			let phoneNumber = '';
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
				Object.entries(this.props.self_data_values).map(function ([key, self_data_values]) {
					Object.entries(self.props.USER.profiles).map(function ([k, profiles]) {
						if (self_data_values.id == profiles.id) {
							membersArray.push(self_data_values);
							profilesArray.push(profiles);
						}
					});
				});
				if (membersArray.length == profilesArray.length) {
					Object.entries(membersArray).map(function ([key, values]) {
						if (membersArray[key].id == profilesArray[key].id) {
							let memberNewdata = values;
							let newName = profilesArray[key].name.split(" ");
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

	proceedLead(type) {
		if (!this.state.checkIdleTimeout) {
			let data = {
				'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopup', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'Insurance-login-popup-click', 'click_value': 'userClick', type: type
			};
			this.setState({ popupClass: '', overlayClass: '' });
			_gtm2.default.sendEvent({ data: data });
		}
		this.setState({ isLead: type, showPopup: true, identifyUserClick: 'userClick' });
	}

	closeLeadPopup() {
		this.setState({ showPopup: false });
	}

	hideLoginPopup() {
		this.setState({ showPopup: false });
	}

	shortenUrl() {
		if (window) {
			let url = window.location.href + '&force_location=true';
			this.props.urlShortner(url, (err, data) => {
				if (!err) {
					this.setState({ shortURL: data.tiny_url });
				}
			});
		}
	}

	render() {
		let parsed = queryString.parse(this.props.location.search);

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
													{ href: '/insurance/network', onClick: e => {
															e.preventDefault();
															let data = {
																'Category': 'ConsumerApp', 'Action': 'InsuranceNetwork', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'insurance-network', 'click_value': 'insurance-network'
															};

															_gtm2.default.sendEvent({ data: data });
															this.props.history.push('/insurance/network');
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
										{ className: 'insu-left-white-btn', onClick: () => this.props.history.go(-1) },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");

class InsuranceStaticView extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            showInsuranceView: false
        };
    }

    componentDidMount() {

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
    render() {
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
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { insurnaceData, LOAD_INSURANCE, selected_plan, self_data_values } = state.INSURANCE;
    const {
        selectedLocation

    } = state.SEARCH_CRITERIA_OPD;
    return {
        insurnaceData, LOAD_INSURANCE, selected_plan, self_data_values, USER, selectedLocation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getInsurance: (is_endorsement, callback) => dispatch((0, _index.getInsurance)(is_endorsement, callback)),
        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        selectInsurancePlan: (plan, criteria) => dispatch((0, _index.selectInsurancePlan)(plan, criteria)),
        // saveCurrentSelectedMembers: (membersId) => dispatch(saveCurrentSelectedMembers(membersId)),
        resetSelectedPlans: () => dispatch((0, _index.resetSelectedPlans)()),
        sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
        submitOTP: (number, otp, extraParamsData, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb)),
        resetAuth: () => dispatch((0, _index.resetAuth)()),
        userData: (self_data, criteria, forceadd) => dispatch((0, _index.userData)(self_data, criteria, forceadd)),
        generateInsuranceLead: (selectedPlan, number, lead_data, cb) => dispatch((0, _index.generateInsuranceLead)(selectedPlan, number, lead_data, cb)),
        urlShortner: (url, cb) => dispatch((0, _index.urlShortner)(url, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceStaticView);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlU3RhdGljVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pbnN1cmFuY2UvSW5zdXJhbmNlU3RhdGljVmlldy5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJJbnN1cmFuY2VTdGF0aWNWaWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ0b2dnbGUiLCJpc19jaGVja2VkIiwic2VsZWN0ZWRfcGxhbiIsImlkIiwic2VsZWN0ZWRfcGxhbl9wcmljZSIsImFtb3VudCIsImdzdCIsInNlbGVjdGVkX3BsYW5fZGF0YSIsInNob3dQb3B1cCIsInNob3J0VVJMIiwiaXNMZWFkIiwiY2hlY2tJZGxlVGltZW91dCIsInBvcHVwQ2xhc3MiLCJvdmVybGF5Q2xhc3MiLCJpZGVudGlmeVVzZXJDbGljayIsImNvbXBvbmVudERpZE1vdW50IiwibGVhZF9kYXRhIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBob25lTnVtYmVyIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsInBhZ2Vfc291cmNlIiwic2V0U3RhdGUiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiVVNFUiIsInByaW1hcnlNb2JpbGUiLCJnZW5lcmF0ZUluc3VyYW5jZUxlYWQiLCJzZWxlY3RlZExvY2F0aW9uIiwic2VsZWN0ZWRJZCIsInNlbGVjdFBsYW4iLCJ0ZXh0SW5wdXQiLCJjbGljayIsImluYWN0aXZpdHlUaW1lIiwidGltZSIsInNlbGYiLCJ3aW5kb3ciLCJvbmxvYWQiLCJyZXNldFRpbWVyIiwiZG9jdW1lbnQiLCJvbm1vdXNlbW92ZSIsIm9ua2V5cHJlc3MiLCJzdG9wIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInBsYW5fdG9fdG9nZ2xlIiwicGxhbiIsImlzX3NlbGVjdGVkIiwic2VsZWN0SW5zdXJhbmNlUGxhbiIsInByb2NlZWRQbGFuIiwicGFyc2VkIiwiT2JqZWN0IiwiYXNzaWduIiwia2V5cyIsImxlbmd0aCIsImhpc3RvcnkiLCJwdXNoIiwicHJvY2VlZFBsYW4xIiwicHJvZmlsZUxlbmd0aCIsIm1lbWJlclN0b3JlRGF0YUxlbmd0aCIsIm1lbWJlcnNBcnJheSIsInByb2ZpbGVzQXJyYXkiLCJyZXNldFNlbGVjdGVkUGxhbnMiLCJwcm9maWxlcyIsInNlbGZfZGF0YV92YWx1ZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwiayIsInZhbHVlcyIsIm1lbWJlck5ld2RhdGEiLCJuZXdOYW1lIiwibmFtZSIsInNwbGl0IiwibWlkZGxlX25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsImRvYiIsImdlbmRlciIsInVzZXJEYXRhIiwicHJvY2VlZExlYWQiLCJ0eXBlIiwiY2xvc2VMZWFkUG9wdXAiLCJoaWRlTG9naW5Qb3B1cCIsInNob3J0ZW5VcmwiLCJ1cmwiLCJocmVmIiwidXJsU2hvcnRuZXIiLCJlcnIiLCJ0aW55X3VybCIsInJlbmRlciIsIkxPQURfSU5TVVJBTkNFIiwid2lkdGgiLCJBU1NFVFNfQkFTRV9VUkwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzaG93X2J1dHRvbiIsImdvIiwiYmluZCIsInNob3dJbnN1cmFuY2VWaWV3IiwiZ2V0VXNlclByb2ZpbGUiLCJzY3JvbGxUbyIsImdldEluc3VyYW5jZSIsImluc3VybmFjZURhdGEiLCJjZXJ0aWZpY2F0ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIklOU1VSQU5DRSIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImlzX2VuZG9yc2VtZW50IiwiY2FsbGJhY2siLCJjcml0ZXJpYSIsInNlbmRPVFAiLCJudW1iZXIiLCJ2aWFTbXMiLCJ2aWFXaGF0c2FwcCIsIm1lc3NhZ2VfdHlwZSIsImNiIiwic3VibWl0T1RQIiwib3RwIiwiZXh0cmFQYXJhbXNEYXRhIiwicmVzZXRBdXRoIiwic2VsZl9kYXRhIiwiZm9yY2VhZGQiLCJzZWxlY3RlZFBsYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFIQSxNQUFNQSxjQUFjQyxtQkFBT0EsQ0FBQyxrQ0FBUixDQUFwQjs7O0FBS0EsTUFBTUMsbUJBQU4sU0FBa0NDLGdCQUFNQyxTQUF4QyxDQUFrRDtBQUNqREMsYUFBWUMsS0FBWixFQUFtQjtBQUNsQixRQUFNQSxLQUFOO0FBQ0EsT0FBS0MsS0FBTCxHQUFhO0FBQ1o7QUFDQUMsV0FBUSxLQUZJO0FBR1pDLGVBQVksS0FBS0gsS0FBTCxDQUFXSSxhQUFYLEdBQTJCLEtBQUtKLEtBQUwsQ0FBV0ksYUFBWCxDQUF5QkMsRUFBcEQsR0FBeUQsRUFIekQ7QUFJWkMsd0JBQXFCLEtBQUtOLEtBQUwsQ0FBV0ksYUFBWCxHQUEyQixLQUFLSixLQUFMLENBQVdJLGFBQVgsQ0FBeUJHLE1BQXBELEdBQTZELEVBSnRFO0FBS1pDLFFBQUssc0JBTE87QUFNWkMsdUJBQW9CLEtBQUtULEtBQUwsQ0FBV0ksYUFBWCxHQUEyQixLQUFLSixLQUFMLENBQVdJLGFBQXRDLEdBQXNELEVBTjlEO0FBT1pNLGNBQVcsS0FQQztBQVFaQyxhQUFVLEVBUkU7QUFTWkMsV0FBUSxTQVRJO0FBVVpDLHFCQUFrQixJQVZOO0FBV1pDLGVBQVksRUFYQTtBQVlaQyxpQkFBYyxFQVpGO0FBYVpDLHNCQUFtQjtBQWJQLEdBQWI7QUFlQTtBQUNEQyxxQkFBb0I7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsTUFBSUMsWUFBWXhCLFlBQVl5QixLQUFaLENBQWtCLEtBQUtuQixLQUFMLENBQVdvQixRQUFYLENBQW9CQyxNQUF0QyxDQUFoQjtBQUNBLE1BQUlDLGNBQWMsRUFBbEI7QUFDQSxNQUFJLENBQUNDLGtCQUFRQyxTQUFSLEVBQUQsSUFBd0JOLFVBQVVPLFdBQVYsSUFBeUIsUUFBckQsRUFBK0Q7QUFDOUQ7QUFDQSxRQUFLQyxRQUFMLENBQWMsRUFBRWIsa0JBQWtCLEtBQXBCLEVBQTJCSCxXQUFXLElBQXRDLEVBQTRDSSxZQUFZLEVBQXhELEVBQTREQyxjQUFjLEVBQTFFLEVBQThFQyxtQkFBbUIsYUFBakcsRUFBZDtBQUNBLE9BQUlXLE9BQU87QUFDVixnQkFBWSxhQURGLEVBQ2lCLFVBQVUscUJBRDNCLEVBQ2tELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEbkYsRUFDdUYsU0FBUyw2QkFEaEcsRUFDK0gsZUFBZTtBQUQ5SSxJQUFYOztBQUlBRCxpQkFBSUUsU0FBSixDQUFjLEVBQUVILE1BQU1BLElBQVIsRUFBZDtBQUNBO0FBQ0QsTUFBSUosa0JBQVFDLFNBQVIsTUFBdUIsS0FBS3hCLEtBQUwsQ0FBVytCLElBQWxDLElBQTBDLEtBQUsvQixLQUFMLENBQVcrQixJQUFYLENBQWdCQyxhQUFoQixJQUFpQyxFQUEvRSxFQUFtRjtBQUNsRlYsaUJBQWMsS0FBS3RCLEtBQUwsQ0FBVytCLElBQVgsQ0FBZ0JDLGFBQTlCO0FBQ0E7QUFDRCxPQUFLaEMsS0FBTCxDQUFXaUMscUJBQVgsQ0FBaUMsRUFBakMsRUFBcUNYLFdBQXJDLEVBQWtESixTQUFsRCxFQUE2RCxLQUFLbEIsS0FBTCxDQUFXa0MsZ0JBQXhFLEVBbEJtQixDQWtCdUU7QUFDMUYsTUFBSUMsYUFBYSxLQUFLbkMsS0FBTCxDQUFXSSxhQUFYLEdBQTJCLEtBQUtKLEtBQUwsQ0FBV0ksYUFBWCxDQUF5QkMsRUFBcEQsR0FBeUQsRUFBMUU7QUFDQSxNQUFJOEIsVUFBSixFQUFnQjtBQUNmLFFBQUtDLFVBQUwsQ0FBZ0IsS0FBS3BDLEtBQUwsQ0FBV0ksYUFBM0I7QUFDQSxHQUZELE1BR0s7QUFDSixPQUFJLEtBQUtpQyxTQUFULEVBQW9CO0FBQ25CLFNBQUtBLFNBQUwsQ0FBZUMsS0FBZjtBQUNBO0FBQ0Q7QUFDRCxNQUFJLEtBQUtyQyxLQUFMLENBQVdZLGdCQUFYLElBQStCLENBQUNVLGtCQUFRQyxTQUFSLEVBQXBDLEVBQXlEO0FBQ3hEO0FBQ0EsUUFBS2UsY0FBTDtBQUNBO0FBQ0Q7O0FBRURBLGtCQUFpQjtBQUNoQixNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsT0FBTyxJQUFYO0FBQ0FDLFNBQU9DLE1BQVAsR0FBZ0JDLFVBQWhCO0FBQ0FDLFdBQVNDLFdBQVQsR0FBdUJGLFVBQXZCO0FBQ0FDLFdBQVNFLFVBQVQsR0FBc0JILFVBQXRCO0FBQ0FBO0FBQ0EsV0FBU0ksSUFBVCxHQUFnQjtBQUNmLE9BQUlyQixPQUFPO0FBQ1YsZ0JBQVksYUFERixFQUNpQixVQUFVLHFCQUQzQixFQUNrRCxjQUFjQyxjQUFJQyxTQUFKLE1BQW1CLEVBRG5GLEVBQ3VGLFNBQVMsNkJBRGhHLEVBQytILGVBQWU7QUFEOUksSUFBWDtBQUdBRCxpQkFBSUUsU0FBSixDQUFjLEVBQUVILE1BQU1BLElBQVIsRUFBZDtBQUNBLE9BQUlrQixTQUFTSSxjQUFULENBQXdCLGFBQXhCLENBQUosRUFBNEM7QUFDM0NKLGFBQVNJLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNYLEtBQXZDO0FBQ0FHLFNBQUtmLFFBQUwsQ0FBYyxFQUFFYixrQkFBa0IsS0FBcEIsRUFBMkJHLG1CQUFtQixXQUE5QyxFQUFkO0FBQ0E7QUFDRDs7QUFFRSxXQUFTNEIsVUFBVCxHQUFzQjtBQUNsQk0sZ0JBQWFWLElBQWI7QUFDQSxPQUFHQyxLQUFLeEMsS0FBTCxDQUFXWSxnQkFBZCxFQUErQjtBQUM5QjJCLFdBQU9XLFdBQVdILElBQVgsRUFBaUIsS0FBakIsQ0FBUDtBQUNBO0FBQ0o7QUFDSjs7QUFFREksMkJBQTBCcEQsS0FBMUIsRUFBaUM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0RvQyxZQUFXaUIsY0FBWCxFQUEyQjtBQUMxQixNQUFJQyxPQUFPRCxjQUFYO0FBQ0FBLGlCQUFlRSxXQUFmLEdBQTZCLElBQTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQUt2RCxLQUFMLENBQVd3RCxtQkFBWCxDQUErQixNQUEvQixFQUF1Q0YsSUFBdkMsRUFSMEIsQ0FRbUI7QUFDN0MsT0FBSzVCLFFBQUwsQ0FBYyxFQUFFdkIsWUFBWWtELGVBQWVoRCxFQUE3QixFQUFpQ0ksb0JBQW9CNEMsY0FBckQsRUFBcUUvQyxxQkFBc0IsTUFBSytDLGVBQWU5QyxNQUFPLEdBQXRILEVBQTBITCxRQUFRLEtBQUtELEtBQUwsQ0FBV0MsTUFBWCxJQUFxQixLQUFyQixHQUE2QixLQUE3QixHQUFxQyxLQUF2SyxFQUFkO0FBQ0E7O0FBRUR1RCxlQUFjO0FBQ2IsTUFBSUMsU0FBU2hFLFlBQVl5QixLQUFaLENBQWtCLEtBQUtuQixLQUFMLENBQVdvQixRQUFYLENBQW9CQyxNQUF0QyxDQUFiO0FBQ0EsTUFBSWlDLE9BQU9LLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUszRCxLQUFMLENBQVdRLGtCQUE3QixDQUFYO0FBQ0EsTUFBSVMsU0FBSjtBQUNBLE1BQUlJLGNBQWMsRUFBbEI7QUFDQSxNQUFJQyxrQkFBUUMsU0FBUixFQUFKLEVBQXlCO0FBQ3hCLE9BQUksS0FBS3hCLEtBQUwsQ0FBVytCLElBQVgsSUFBbUIsS0FBSy9CLEtBQUwsQ0FBVytCLElBQVgsQ0FBZ0JDLGFBQWhCLElBQWlDLEVBQXhELEVBQTREO0FBQzNEVixrQkFBYyxLQUFLdEIsS0FBTCxDQUFXK0IsSUFBWCxDQUFnQkMsYUFBOUI7QUFDQTtBQUNELE9BQUkyQixPQUFPRSxJQUFQLENBQVlQLElBQVosRUFBa0JRLE1BQWxCLEdBQTJCLENBQS9CLEVBQWtDO0FBQ2pDNUMsZ0JBQVl3QyxNQUFaO0FBQ0EsU0FBSzFELEtBQUwsQ0FBV2lDLHFCQUFYLENBQWlDcUIsS0FBS2pELEVBQXRDLEVBQTBDaUIsV0FBMUMsRUFBdURKLFNBQXZELEVBQWtFLEtBQUtsQixLQUFMLENBQVdrQyxnQkFBN0UsRUFGaUMsQ0FFOEQ7QUFDL0Y7QUFDRCxRQUFLbEMsS0FBTCxDQUFXK0QsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsZ0NBQXhCO0FBQ0EsR0FURCxNQVNPO0FBQ04sUUFBS3RDLFFBQUwsQ0FBYyxFQUFFaEIsV0FBVyxJQUFiLEVBQWQ7QUFDQTtBQUNEO0FBQ0R1RCxnQkFBZTtBQUNkLE1BQUl4QixPQUFPLElBQVg7QUFDQSxNQUFJaUIsU0FBU2hFLFlBQVl5QixLQUFaLENBQWtCLEtBQUtuQixLQUFMLENBQVdvQixRQUFYLENBQW9CQyxNQUF0QyxDQUFiO0FBQ0EsTUFBSWlDLE9BQU9LLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUszRCxLQUFMLENBQVdRLGtCQUE3QixDQUFYO0FBQ0EsTUFBSXlELGFBQUo7QUFDQSxNQUFJQyxxQkFBSjtBQUNBLE1BQUlDLGVBQWUsRUFBbkI7QUFDQSxNQUFJQyxnQkFBZ0IsRUFBcEI7QUFDQSxNQUFJbkQsU0FBSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQUtsQixLQUFMLENBQVdzRSxrQkFBWCxHQWZjLENBZWtCO0FBQ2hDLE1BQUkvQyxrQkFBUUMsU0FBUixFQUFKLEVBQXlCO0FBQ3hCLE9BQUlGLGNBQWMsRUFBbEI7QUFDQSxPQUFJLEtBQUt0QixLQUFMLENBQVcrQixJQUFYLElBQW1CLEtBQUsvQixLQUFMLENBQVcrQixJQUFYLENBQWdCQyxhQUFoQixJQUFpQyxFQUF4RCxFQUE0RDtBQUMzRFYsa0JBQWMsS0FBS3RCLEtBQUwsQ0FBVytCLElBQVgsQ0FBZ0JDLGFBQTlCO0FBQ0E7QUFDRCxPQUFJMkIsT0FBT0UsSUFBUCxDQUFZUCxJQUFaLEVBQWtCUSxNQUFsQixHQUEyQixDQUEvQixFQUFrQztBQUNqQzVDLGdCQUFZd0MsTUFBWjtBQUNBLFNBQUsxRCxLQUFMLENBQVdpQyxxQkFBWCxDQUFpQ3FCLEtBQUtqRCxFQUF0QyxFQUEwQ2lCLFdBQTFDLEVBQXVESixTQUF2RCxFQUFrRSxLQUFLbEIsS0FBTCxDQUFXa0MsZ0JBQTdFLEVBRmlDLENBRThEO0FBQy9GO0FBQ0RnQyxtQkFBZ0JQLE9BQU9FLElBQVAsQ0FBWSxLQUFLN0QsS0FBTCxDQUFXK0IsSUFBWCxDQUFnQndDLFFBQTVCLEVBQXNDVCxNQUF0RDtBQUNBSywyQkFBd0JSLE9BQU9FLElBQVAsQ0FBWSxLQUFLN0QsS0FBTCxDQUFXd0UsZ0JBQXZCLEVBQXlDVixNQUFqRTtBQUNBLE9BQUlJLGdCQUFnQixDQUFoQixJQUFxQkMsd0JBQXdCLENBQWpELEVBQW9EO0FBQ25EUixXQUFPYyxPQUFQLENBQWUsS0FBS3pFLEtBQUwsQ0FBV3dFLGdCQUExQixFQUE0Q0UsR0FBNUMsQ0FBZ0QsVUFBVSxDQUFDQyxHQUFELEVBQU1ILGdCQUFOLENBQVYsRUFBbUM7QUFDbEZiLFlBQU9jLE9BQVAsQ0FBZWhDLEtBQUt6QyxLQUFMLENBQVcrQixJQUFYLENBQWdCd0MsUUFBL0IsRUFBeUNHLEdBQXpDLENBQTZDLFVBQVUsQ0FBQ0UsQ0FBRCxFQUFJTCxRQUFKLENBQVYsRUFBeUI7QUFDckUsVUFBSUMsaUJBQWlCbkUsRUFBakIsSUFBdUJrRSxTQUFTbEUsRUFBcEMsRUFBd0M7QUFDdkMrRCxvQkFBYUosSUFBYixDQUFrQlEsZ0JBQWxCO0FBQ0FILHFCQUFjTCxJQUFkLENBQW1CTyxRQUFuQjtBQUNBO0FBQ0QsTUFMRDtBQU1BLEtBUEQ7QUFRQSxRQUFJSCxhQUFhTixNQUFiLElBQXVCTyxjQUFjUCxNQUF6QyxFQUFpRDtBQUNoREgsWUFBT2MsT0FBUCxDQUFlTCxZQUFmLEVBQTZCTSxHQUE3QixDQUFpQyxVQUFVLENBQUNDLEdBQUQsRUFBTUUsTUFBTixDQUFWLEVBQXlCO0FBQ3pELFVBQUlULGFBQWFPLEdBQWIsRUFBa0J0RSxFQUFsQixJQUF3QmdFLGNBQWNNLEdBQWQsRUFBbUJ0RSxFQUEvQyxFQUFtRDtBQUNsRCxXQUFJeUUsZ0JBQWdCRCxNQUFwQjtBQUNBLFdBQUlFLFVBQVVWLGNBQWNNLEdBQWQsRUFBbUJLLElBQW5CLENBQXdCQyxLQUF4QixDQUE4QixHQUE5QixDQUFkO0FBQ0EsV0FBSUYsUUFBUWpCLE1BQVIsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDeEJnQixzQkFBY0UsSUFBZCxHQUFxQkQsUUFBUSxDQUFSLENBQXJCO0FBQ0FELHNCQUFjSSxXQUFkLEdBQTRCSCxRQUFRLENBQVIsQ0FBNUI7QUFDQUQsc0JBQWNLLFNBQWQsR0FBMEJKLFFBQVEsQ0FBUixDQUExQjtBQUNBLFFBSkQsTUFJTyxJQUFJQSxRQUFRakIsTUFBUixJQUFrQixDQUF0QixFQUF5QjtBQUMvQmdCLHNCQUFjRSxJQUFkLEdBQXFCRCxRQUFRLENBQVIsQ0FBckI7QUFDQUQsc0JBQWNLLFNBQWQsR0FBMEJKLFFBQVEsQ0FBUixDQUExQjtBQUNBLFFBSE0sTUFHQTtBQUNORCxzQkFBY0UsSUFBZCxHQUFxQkQsUUFBUSxDQUFSLENBQXJCO0FBQ0E7QUFDRCxXQUFJWCxhQUFhTyxHQUFiLEVBQWtCUyxLQUFsQixJQUEyQixFQUEvQixFQUFtQztBQUNsQ04sc0JBQWNNLEtBQWQsR0FBc0JoQixhQUFhTyxHQUFiLEVBQWtCUyxLQUF4QztBQUNBLFFBRkQsTUFFTztBQUNOTixzQkFBY00sS0FBZCxHQUFzQmYsY0FBY00sR0FBZCxFQUFtQlMsS0FBekM7QUFDQTs7QUFFRCxXQUFJaEIsYUFBYU8sR0FBYixFQUFrQlUsR0FBbEIsSUFBeUIsSUFBekIsSUFBaUNqQixhQUFhTyxHQUFiLEVBQWtCVSxHQUFsQixJQUF5QixFQUE5RCxFQUFrRTtBQUNqRVAsc0JBQWNPLEdBQWQsR0FBb0JqQixhQUFhTyxHQUFiLEVBQWtCVSxHQUF0QztBQUNBLFFBRkQsTUFFTztBQUNOUCxzQkFBY08sR0FBZCxHQUFvQmhCLGNBQWNNLEdBQWQsRUFBbUJVLEdBQXZDO0FBQ0E7QUFDRCxXQUFJakIsYUFBYU8sR0FBYixFQUFrQlcsTUFBbEIsSUFBNEIsRUFBaEMsRUFBb0M7QUFDbkNSLHNCQUFjUSxNQUFkLEdBQXVCbEIsYUFBYU8sR0FBYixFQUFrQlcsTUFBekM7QUFDQSxRQUZELE1BRU87QUFDTlIsc0JBQWNRLE1BQWQsR0FBdUJqQixjQUFjTSxHQUFkLEVBQW1CVyxNQUExQztBQUNBO0FBQ0Q3QyxZQUFLekMsS0FBTCxDQUFXdUYsUUFBWCxDQUFvQixlQUFwQixFQUFxQ1QsYUFBckM7QUFDQTtBQUNELE1BaENEO0FBaUNBLFVBQUs5RSxLQUFMLENBQVcrRCxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixtQ0FBeEI7QUFDQSxLQW5DRCxNQW1DTztBQUNOLFVBQUtoRSxLQUFMLENBQVcrRCxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixtQ0FBeEI7QUFDQTtBQUNELElBL0NELE1BK0NPO0FBQ04sU0FBS2hFLEtBQUwsQ0FBVytELE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLG1DQUF4QjtBQUNBO0FBQ0QsR0E3REQsTUE2RE87QUFDTixRQUFLdEMsUUFBTCxDQUFjLEVBQUVoQixXQUFXLElBQWIsRUFBZDtBQUNBO0FBQ0Q7O0FBRUQ4RSxhQUFZQyxJQUFaLEVBQWtCO0FBQ2pCLE1BQUksQ0FBQyxLQUFLeEYsS0FBTCxDQUFXWSxnQkFBaEIsRUFBa0M7QUFDakMsT0FBSWMsT0FBTztBQUNWLGdCQUFZLGFBREYsRUFDaUIsVUFBVSxxQkFEM0IsRUFDa0QsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQURuRixFQUN1RixTQUFTLDZCQURoRyxFQUMrSCxlQUFlLFdBRDlJLEVBQzJKNEQsTUFBTUE7QUFEakssSUFBWDtBQUdBLFFBQUsvRCxRQUFMLENBQWMsRUFBRVosWUFBWSxFQUFkLEVBQWtCQyxjQUFjLEVBQWhDLEVBQWQ7QUFDQWEsaUJBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNQSxJQUFSLEVBQWQ7QUFDQTtBQUNELE9BQUtELFFBQUwsQ0FBYyxFQUFFZCxRQUFRNkUsSUFBVixFQUFnQi9FLFdBQVcsSUFBM0IsRUFBaUNNLG1CQUFtQixXQUFwRCxFQUFkO0FBQ0E7O0FBRUQwRSxrQkFBaUI7QUFDaEIsT0FBS2hFLFFBQUwsQ0FBYyxFQUFFaEIsV0FBVyxLQUFiLEVBQWQ7QUFDQTs7QUFFRGlGLGtCQUFpQjtBQUNoQixPQUFLakUsUUFBTCxDQUFjLEVBQUNoQixXQUFXLEtBQVosRUFBZDtBQUNBOztBQUVEa0YsY0FBYTtBQUNaLE1BQUlsRCxNQUFKLEVBQVk7QUFDWCxPQUFJbUQsTUFBTW5ELE9BQU90QixRQUFQLENBQWdCMEUsSUFBaEIsR0FBdUIsc0JBQWpDO0FBQ0EsUUFBSzlGLEtBQUwsQ0FBVytGLFdBQVgsQ0FBdUJGLEdBQXZCLEVBQTRCLENBQUNHLEdBQUQsRUFBTXJFLElBQU4sS0FBZTtBQUMxQyxRQUFJLENBQUNxRSxHQUFMLEVBQVU7QUFDVCxVQUFLdEUsUUFBTCxDQUFjLEVBQUVmLFVBQVVnQixLQUFLc0UsUUFBakIsRUFBZDtBQUNBO0FBQ0QsSUFKRDtBQUtBO0FBQ0Q7O0FBRURDLFVBQVM7QUFDUixNQUFJeEMsU0FBU2hFLFlBQVl5QixLQUFaLENBQWtCLEtBQUtuQixLQUFMLENBQVdvQixRQUFYLENBQW9CQyxNQUF0QyxDQUFiOztBQUVBLE1BQUksS0FBS3JCLEtBQUwsQ0FBV21HLGNBQWYsRUFBK0I7QUFDOUIsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLG1CQUFmO0FBQ0MsbUNBQUMsOEJBQUQsSUFBZSxrQkFBa0IsSUFBakMsR0FERDtBQUdDO0FBQUE7QUFBQSxRQUFTLFdBQVUsNkJBQW5CO0FBQ0M7QUFBQTtBQUFBLFNBQUssV0FBVSx3REFBZjtBQUNDO0FBQUE7QUFBQSxVQUFLLFdBQVUsMENBQWY7QUFDQztBQUFBO0FBQUEsV0FBSyxXQUFVLG1EQUFmO0FBQ0M7QUFBQTtBQUFBLFlBQUssV0FBVSx1QkFBZjtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxjQUFLLFdBQVUsbUJBQWY7QUFDQztBQUFBO0FBQUEsZUFBSyxXQUFVLGNBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXhDO0FBQUE7QUFBQSxjQUREO0FBRUM7QUFBQTtBQUFBLGdCQUFLLFdBQVUsV0FBZjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUVDLHFEQUFLLE9BQU8sRUFBRUMsT0FBTyxPQUFULEVBQVosRUFBZ0MsS0FBSSxnRUFBcEM7QUFGRDtBQUZEO0FBREQsWUFERDtBQVVDO0FBQUE7QUFBQSxjQUFLLFdBQVUsbUJBQWY7QUFDQztBQUFBO0FBQUEsZUFBSyxXQUFVLHVCQUFmO0FBQ0M7QUFBQTtBQUFBLGdCQUFLLFdBQVUsT0FBZjtBQUNDO0FBQUE7QUFBQSxpQkFBSyxXQUFVLGVBQWY7QUFDQyxzREFBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS0MsU0FBZUEsR0FBRyxtQkFBckQ7QUFERDtBQURELGNBREQ7QUFNQztBQUFBO0FBQUEsZ0JBQUssV0FBVSxPQUFmO0FBQ0M7QUFBQTtBQUFBLGlCQUFLLFdBQVUsZUFBZjtBQUNDO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGdCQUREO0FBRUM7QUFBQTtBQUFBLGtCQUFHLFdBQVUsZUFBYjtBQUFBO0FBQUEsZ0JBRkQ7QUFHQztBQUFBO0FBQUEsa0JBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUEsZ0JBSEQ7QUFJQztBQUFBO0FBQUEsa0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBa0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBbEM7QUFBQTtBQUFBO0FBSkQ7QUFERDtBQU5EO0FBREQsWUFWRDtBQTJCQztBQUFBO0FBQUEsY0FBSyxXQUFVLG1CQUFmO0FBQ0M7QUFBQTtBQUFBLGVBQUssV0FBVSx1QkFBZjtBQUNDO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFDQztBQUFBO0FBQUEsaUJBQUssV0FBVSxlQUFmO0FBQ0M7QUFBQTtBQUFBLGtCQUFHLFdBQVUsZUFBYjtBQUFBO0FBQUEsZ0JBREQ7QUFFQztBQUFBO0FBQUEsa0JBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUEsZ0JBRkQ7QUFHQztBQUFBO0FBQUEsa0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaEM7QUFBQTtBQUFBO0FBSEQ7QUFERCxjQUREO0FBUUM7QUFBQTtBQUFBLGdCQUFLLFdBQVUsT0FBZjtBQUNDLHFEQUFLLFdBQVUsY0FBZixFQUE4QixLQUFLQSxTQUFlQSxHQUFHLGtCQUFyRDtBQUREO0FBUkQ7QUFERCxZQTNCRDtBQXlDQztBQUFBO0FBQUEsY0FBSyxXQUFVLG1CQUFmO0FBQ0M7QUFBQTtBQUFBLGVBQUssV0FBVSx1QkFBZjtBQUNDO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFDQztBQUFBO0FBQUEsaUJBQUssV0FBVSxlQUFmO0FBQ0Msc0RBQUssV0FBVSxjQUFmLEVBQThCLEtBQUtBLFNBQWVBLEdBQUcsa0JBQXJEO0FBREQ7QUFERCxjQUREO0FBTUM7QUFBQTtBQUFBLGdCQUFLLFdBQVUsT0FBZjtBQUNDO0FBQUE7QUFBQSxpQkFBSyxXQUFVLGVBQWY7QUFDQztBQUFBO0FBQUEsa0JBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUEsZ0JBREQ7QUFFQztBQUFBO0FBQUEsa0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQTtBQUZEO0FBREQ7QUFORDtBQUREO0FBekNELFdBREQ7QUEwREM7QUFBQTtBQUFBLGFBQUssV0FBVSxrQkFBZjtBQUNDO0FBQUE7QUFBQTtBQUFHLG1EQUFLLEtBQUtBLFNBQWVBLEdBQUcsa0JBQTVCLEdBQUg7QUFBQTtBQUFBLFlBREQ7QUFFQztBQUFBO0FBQUE7QUFBRyxtREFBSyxLQUFLQSxTQUFlQSxHQUFHLG1CQUE1QixHQUFIO0FBQUE7QUFBQSxZQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUcsbURBQUssS0FBS0EsU0FBZUEsR0FBRyxpQkFBNUIsR0FBSDtBQUFBO0FBQUE7QUFIRCxXQTFERDtBQStEQztBQUFBO0FBQUEsYUFBSyxXQUFVLGtCQUFmO0FBQ0M7QUFBQTtBQUFBLGNBQUssV0FBVSx5QkFBZjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERDtBQUVDO0FBQUE7QUFBQSxlQUFNLE1BQUssb0JBQVgsRUFBZ0MsU0FBVUMsQ0FBRCxJQUFPO0FBQy9DQSxpQkFBRUMsY0FBRjtBQUNBLG1CQUFJNUUsT0FBTztBQUNWLDRCQUFZLGFBREYsRUFDaUIsVUFBVSxrQkFEM0IsRUFDK0MsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQURoRixFQUNvRixTQUFTLG1CQUQ3RixFQUNrSCxlQUFlO0FBRGpJLGdCQUFYOztBQUlBRCw2QkFBSUUsU0FBSixDQUFjLEVBQUVILE1BQU1BLElBQVIsRUFBZDtBQUNBLG9CQUFLM0IsS0FBTCxDQUFXK0QsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0Isb0JBQXhCO0FBQ0EsZUFSRDtBQUFBO0FBQUE7QUFGRCxZQUREO0FBYUM7QUFBQTtBQUFBLGNBQUcsV0FBVSxhQUFiO0FBQUE7QUFBQSxZQWJEO0FBY0M7QUFBQTtBQUFBLGNBQUksV0FBVSxnQkFBZDtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRDtBQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRDtBQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRDtBQWREO0FBL0REO0FBREQsU0FERDtBQXdGRU4sZUFBTzhDLFdBQVAsR0FDQTtBQUFBO0FBQUEsV0FBSyxXQUFVLG9DQUFmO0FBQ0M7QUFBQTtBQUFBLFlBQVEsV0FBVSxxQkFBbEIsRUFBd0MsU0FBUyxNQUFNLEtBQUt4RyxLQUFMLENBQVcrRCxPQUFYLENBQW1CMEMsRUFBbkIsQ0FBc0IsQ0FBQyxDQUF2QixDQUF2RDtBQUFBO0FBQUEsVUFERDtBQUdDO0FBQUE7QUFBQSxZQUFRLFdBQVUscUJBQWxCLEVBQXdDLFNBQVMsS0FBS2hELFdBQUwsQ0FBaUJpRCxJQUFqQixDQUFzQixJQUF0QixDQUFqRDtBQUFBO0FBQUE7QUFIRCxTQURBLEdBUUE7QUFBQTtBQUFBLFdBQUssV0FBVSxvQ0FBZjtBQUNDO0FBQUE7QUFBQSxZQUFRLElBQUcsYUFBWCxFQUF5QixXQUFVLGlDQUFuQyxFQUFxRSxTQUFTLEtBQUtqRCxXQUFMLENBQWlCaUQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBOUU7QUFBQTtBQUFBO0FBREQ7QUFoR0Y7QUFERDtBQURELE1BSEQ7QUE2R0UsVUFBS3pHLEtBQUwsQ0FBV1MsU0FBWCxHQUNBLDhCQUFDLHdCQUFELGVBQWdCLEtBQUtWLEtBQXJCLElBQTRCLGVBQWUsS0FBS0MsS0FBTCxDQUFXUSxrQkFBdEQsRUFBMEUsZ0JBQWdCLEtBQUtrRixjQUFMLENBQW9CZSxJQUFwQixDQUF5QixJQUF6QixDQUExRixFQUEwSCxRQUFRLEtBQUt6RyxLQUFMLENBQVdXLE1BQTdJLEVBQXFKLGdCQUFnQixLQUFLOEUsY0FBTCxDQUFvQmdCLElBQXBCLENBQXlCLElBQXpCLENBQXJLLEVBQXFNLFlBQVksS0FBS3pHLEtBQUwsQ0FBV2EsVUFBNU4sRUFBd08sY0FBYyxLQUFLYixLQUFMLENBQVdjLFlBQWpRLEVBQStRLG1CQUFtQixLQUFLZCxLQUFMLENBQVdlLGlCQUE3UyxJQURBLEdBQ3FVO0FBOUd2VTtBQURELElBREQ7QUFxSEE7QUFDRDtBQXBXZ0Q7O2tCQXVXbkNwQixtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFhmOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLE1BQU1GLGNBQWNDLG1CQUFPQSxDQUFDLGtDQUFSLENBQXBCOztBQUVBLE1BQU1DLG1CQUFOLFNBQWtDQyxnQkFBTUMsU0FBeEMsQ0FBaUQ7O0FBRTdDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQVc7QUFDUDBHLCtCQUFrQjtBQURYLFNBQVg7QUFHSDs7QUFFRDFGLHdCQUFvQjs7QUFFaEIsWUFBSU0sa0JBQVFDLFNBQVIsRUFBSixFQUF5QjtBQUNyQixpQkFBS3hCLEtBQUwsQ0FBVzRHLGNBQVgsR0FEcUIsQ0FDTztBQUMvQjtBQUNEOzs7OztBQUtBLFlBQUlsRSxNQUFKLEVBQVk7QUFDUkEsbUJBQU9tRSxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7QUFDRCxhQUFLN0csS0FBTCxDQUFXOEcsWUFBWCxDQUF3QixLQUF4QixFQWJnQixDQWFnQjtBQUNuQztBQUNKWixhQUFRO0FBQ0QsWUFBRyxLQUFLbEcsS0FBTCxDQUFXbUcsY0FBZCxFQUE2QjtBQUN6QjtBQUNBLG1CQUNJLDhCQUFDLDZCQUFELEVBQXdCLEtBQUtuRyxLQUE3QixDQURKO0FBSUgsU0FORCxNQU1LO0FBQ0QsZ0JBQUcsS0FBS0EsS0FBTCxDQUFXK0csYUFBWCxDQUF5QkMsV0FBekIsSUFBd0N6RixrQkFBUUMsU0FBUixFQUEzQyxFQUErRDtBQUFFO0FBQzdELHFCQUFLeEIsS0FBTCxDQUFXK0QsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0Isd0JBQXhCO0FBQ0g7QUFDRCxtQkFDQTtBQUFBO0FBQUEsa0JBQUssV0FBVSxtQkFBZjtBQUVJLDhDQUFDLGdCQUFEO0FBRkosYUFEQTtBQU1IO0FBQ1A7QUExQytDOztBQTZDakQsTUFBTWlELGtCQUFtQmhILEtBQUQsSUFBVztBQUMvQixVQUFNOEIsT0FBTzlCLE1BQU04QixJQUFuQjtBQUNBLFFBQUksRUFBRWdGLGFBQUYsRUFBaUJaLGNBQWpCLEVBQWlDL0YsYUFBakMsRUFBK0NvRSxnQkFBL0MsS0FBbUV2RSxNQUFNaUgsU0FBN0U7QUFDQSxVQUFNO0FBQ0ZoRjs7QUFERSxRQUdGakMsTUFBTWtILG1CQUhWO0FBSUEsV0FBTztBQUNISixxQkFERyxFQUNXWixjQURYLEVBQzBCL0YsYUFEMUIsRUFDd0NvRSxnQkFEeEMsRUFDeUR6QyxJQUR6RCxFQUMrREc7QUFEL0QsS0FBUDtBQUdILENBVkQ7O0FBWUEsTUFBTWtGLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3JDLFdBQU87QUFDSFAsc0JBQWMsQ0FBQ1EsY0FBRCxFQUFnQkMsUUFBaEIsS0FBNkJGLFNBQVMseUJBQWFDLGNBQWIsRUFBNEJDLFFBQTVCLENBQVQsQ0FEeEM7QUFFSFgsd0JBQWdCLE1BQU1TLFNBQVMsNEJBQVQsQ0FGbkI7QUFHSDdELDZCQUFxQixDQUFDRixJQUFELEVBQU1rRSxRQUFOLEtBQW1CSCxTQUFTLGdDQUFvQi9ELElBQXBCLEVBQXlCa0UsUUFBekIsQ0FBVCxDQUhyQztBQUlIO0FBQ0FsRCw0QkFBb0IsTUFBTStDLFNBQVMsZ0NBQVQsQ0FMdkI7QUFNSEksaUJBQVMsQ0FBQ0MsTUFBRCxFQUFRQyxNQUFSLEVBQWVDLFdBQWYsRUFBMkJDLFlBQTNCLEVBQXlDQyxFQUF6QyxLQUFnRFQsU0FBUyxvQkFBUUssTUFBUixFQUFlQyxNQUFmLEVBQXNCQyxXQUF0QixFQUFrQ0MsWUFBbEMsRUFBZ0RDLEVBQWhELENBQVQsQ0FOdEQ7QUFPSEMsbUJBQVcsQ0FBQ0wsTUFBRCxFQUFTTSxHQUFULEVBQWFDLGVBQWIsRUFBK0JILEVBQS9CLEtBQXNDVCxTQUFTLHNCQUFVSyxNQUFWLEVBQWtCTSxHQUFsQixFQUF1QkMsZUFBdkIsRUFBd0NILEVBQXhDLENBQVQsQ0FQOUM7QUFRSEksbUJBQVcsTUFBTWIsU0FBUyx1QkFBVCxDQVJkO0FBU0g5QixrQkFBVSxDQUFDNEMsU0FBRCxFQUFXWCxRQUFYLEVBQW9CWSxRQUFwQixLQUFpQ2YsU0FBUyxxQkFBU2MsU0FBVCxFQUFtQlgsUUFBbkIsRUFBNEJZLFFBQTVCLENBQVQsQ0FUeEM7QUFVSG5HLCtCQUFzQixDQUFDb0csWUFBRCxFQUFjWCxNQUFkLEVBQXFCeEcsU0FBckIsRUFBK0I0RyxFQUEvQixLQUFzQ1QsU0FBUyxrQ0FBc0JnQixZQUF0QixFQUFtQ1gsTUFBbkMsRUFBMEN4RyxTQUExQyxFQUFvRDRHLEVBQXBELENBQVQsQ0FWekQ7QUFXSC9CLHFCQUFhLENBQUNGLEdBQUQsRUFBTWlDLEVBQU4sS0FBYVQsU0FBUyx3QkFBWXhCLEdBQVosRUFBaUJpQyxFQUFqQixDQUFUO0FBWHZCLEtBQVA7QUFhSCxDQWREOztrQkFrQmUseUJBQVFiLGVBQVIsRUFBMEJHLGtCQUExQixFQUE4Q3hILG1CQUE5QyxDIiwiZmlsZSI6IjEyMi5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENoYXRQYW5lbCBmcm9tICcuLi9jb21tb25zL0NoYXRQYW5lbCdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IEluc3VyUG9wdXAgZnJvbSAnLi9pbnN1cmFuY2VQb3B1cC5qcydcbmltcG9ydCBJbnN1ckNvbW1vbiBmcm9tICcuL2luc3VyYW5jZUNvbW1vblNlY3Rpb24uanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IHsgQXNzZXJ0aW9uRXJyb3IgfSBmcm9tICdhc3NlcnQnO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgSW5zdXJhbmNlU3RhdGljVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdC8vaW5zdXJhbmNlUmVzdWx0czp0aGlzLnByb3BzLmluc3VybmFjZURhdGEsXG5cdFx0XHR0b2dnbGU6ICdvbmUnLFxuXHRcdFx0aXNfY2hlY2tlZDogdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuID8gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmlkIDogJycsXG5cdFx0XHRzZWxlY3RlZF9wbGFuX3ByaWNlOiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gPyB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYW1vdW50IDogJycsXG5cdFx0XHRnc3Q6ICdJbmNsdXNpdmUgb2YgMTglIEdTVCcsXG5cdFx0XHRzZWxlY3RlZF9wbGFuX2RhdGE6IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbiA/IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbiA6ICcnLFxuXHRcdFx0c2hvd1BvcHVwOiBmYWxzZSxcblx0XHRcdHNob3J0VVJMOiBcIlwiLFxuXHRcdFx0aXNMZWFkOiAncHJvY2VlZCcsXG5cdFx0XHRjaGVja0lkbGVUaW1lb3V0OiB0cnVlLFxuXHRcdFx0cG9wdXBDbGFzczogJycsXG5cdFx0XHRvdmVybGF5Q2xhc3M6ICcnLFxuXHRcdFx0aWRlbnRpZnlVc2VyQ2xpY2s6ICcnXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdC8vIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG5cdFx0Ly8gXHR0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKClcblx0XHQvLyB9XG5cdFx0bGV0IGxlYWRfZGF0YSA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGxldCBwaG9uZU51bWJlciA9ICcnXG5cdFx0aWYgKCFTVE9SQUdFLmNoZWNrQXV0aCgpICYmIGxlYWRfZGF0YS5wYWdlX3NvdXJjZSA9PSAnYmFubmVyJykge1xuXHRcdFx0Ly8gdGhpcy5zZXRTdGF0ZSh7Y2hlY2tJZGxlVGltZW91dDpmYWxzZSwgc2hvd1BvcHVwOnRydWUsIHBvcHVwQ2xhc3M6ICd0cmFuc2x1Y2VudC1wb3B1cCcsIG92ZXJsYXlDbGFzczogJ3doaXRlLW92ZXJsYXknLCBpZGVudGlmeVVzZXJDbGljazonYmFubmVyQ2xpY2snfSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjaGVja0lkbGVUaW1lb3V0OiBmYWxzZSwgc2hvd1BvcHVwOiB0cnVlLCBwb3B1cENsYXNzOiAnJywgb3ZlcmxheUNsYXNzOiAnJywgaWRlbnRpZnlVc2VyQ2xpY2s6ICdiYW5uZXJDbGljaycgfSlcblx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0luc3VyYW5jZUxvZ2luUG9wdXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ0luc3VyYW5jZS1sb2dpbi1wb3B1cC1jbGljaycsICdjbGlja192YWx1ZSc6ICdiYW5uZXJDbGljaydcblx0XHRcdH1cblxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHR9XG5cdFx0aWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkgJiYgdGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlICE9ICcnKSB7XG5cdFx0XHRwaG9uZU51bWJlciA9IHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlXG5cdFx0fVxuXHRcdHRoaXMucHJvcHMuZ2VuZXJhdGVJbnN1cmFuY2VMZWFkKCcnLCBwaG9uZU51bWJlciwgbGVhZF9kYXRhLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIC8vIHRvIGNyZWF0ZSBpbnN1cmFuY2UgbGVhZCBmb3IgbWF0cml4XG5cdFx0bGV0IHNlbGVjdGVkSWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gPyB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uaWQgOiAnJ1xuXHRcdGlmIChzZWxlY3RlZElkKSB7XG5cdFx0XHR0aGlzLnNlbGVjdFBsYW4odGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICh0aGlzLnRleHRJbnB1dCkge1xuXHRcdFx0XHR0aGlzLnRleHRJbnB1dC5jbGljaygpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzLnN0YXRlLmNoZWNrSWRsZVRpbWVvdXQgJiYgIVNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcblx0XHRcdC8vIHRoaXMuc2V0U3RhdGUoe3BvcHVwQ2xhc3M6ICd0cmFuc2x1Y2VudC1wb3B1cCcsIG92ZXJsYXlDbGFzczogJ3doaXRlLW92ZXJsYXknfSlcblx0XHRcdHRoaXMuaW5hY3Rpdml0eVRpbWUoKVxuXHRcdH1cblx0fVxuXG5cdGluYWN0aXZpdHlUaW1lKCkge1xuXHRcdHZhciB0aW1lO1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdHdpbmRvdy5vbmxvYWQgPSByZXNldFRpbWVyO1xuXHRcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gcmVzZXRUaW1lcjtcblx0XHRkb2N1bWVudC5vbmtleXByZXNzID0gcmVzZXRUaW1lcjtcblx0XHRyZXNldFRpbWVyKClcblx0XHRmdW5jdGlvbiBzdG9wKCkge1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSW5zdXJhbmNlTG9naW5Qb3B1cCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnSW5zdXJhbmNlLWxvZ2luLXBvcHVwLWNsaWNrJywgJ2NsaWNrX3ZhbHVlJzogJ0F1dG9DbGljaydcblx0XHRcdH1cblx0XHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2NlZWRMZWFkJykpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2NlZWRMZWFkJykuY2xpY2soKVxuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHsgY2hlY2tJZGxlVGltZW91dDogZmFsc2UsIGlkZW50aWZ5VXNlckNsaWNrOiAnQXV0b0NsaWNrJyB9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHQgICAgZnVuY3Rpb24gcmVzZXRUaW1lcigpIHtcblx0ICAgICAgICBjbGVhclRpbWVvdXQodGltZSk7XG5cdCAgICAgICAgaWYoc2VsZi5zdGF0ZS5jaGVja0lkbGVUaW1lb3V0KXtcblx0ICAgICAgICBcdHRpbWUgPSBzZXRUaW1lb3V0KHN0b3AsIDIwMDAwKVx0XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuXHRcdC8vIGxldCBzZWxmID0gdGhpc1xuXHRcdC8vIGxldCBzZWxlY3RlZElkID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuP3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5pZDonJ1xuXHRcdC8vIGxldCBuZXdTZWxlY3RlZElkID0gcHJvcHMuc2VsZWN0ZWRfcGxhbj9wcm9wcy5zZWxlY3RlZF9wbGFuLmlkOicnXG5cdFx0Ly8gaWYoc2VsZWN0ZWRJZCl7XG5cdFx0Ly8gXHR0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRfcGxhbl9kYXRhOiBwcm9wcy5zZWxlY3RlZF9wbGFuICwgc2VsZWN0ZWRfcGxhbl9wcmljZTogYCjigrkgJHtwcm9wcy5zZWxlY3RlZF9wbGFuLmFtb3VudH0pYCwgaXNfY2hlY2tlZDogc2VsZWN0ZWRJZCB9KVxuXHRcdC8vIH1cblx0XHQvLyBpZighbmV3U2VsZWN0ZWRJZCl7XG5cdFx0Ly8gXHRpZih0aGlzLnRleHRJbnB1dCl7XG5cdFx0Ly8gXHRcdHRoaXMudGV4dElucHV0LmNsaWNrKClcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdH1cblx0c2VsZWN0UGxhbihwbGFuX3RvX3RvZ2dsZSkge1xuXHRcdGxldCBwbGFuID0gcGxhbl90b190b2dnbGVcblx0XHRwbGFuX3RvX3RvZ2dsZS5pc19zZWxlY3RlZCA9IHRydWVcblx0XHQvLyBwbGFuX3RvX3RvZ2dsZS5wbGFuX25hbWUgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLm5hbWVcblx0XHQvLyBwbGFuX3RvX3RvZ2dsZS5sb2dvID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5sb2dvIFxuXHRcdC8vIHBsYW5fdG9fdG9nZ2xlLmluc3VyZXJfZG9jdW1lbnQgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmluc3VyZXJfZG9jdW1lbnRcblx0XHQvLyBwbGFuX3RvX3RvZ2dsZS5pbnN1cmVyID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5pZFxuXHRcdC8vIHBsYW5fdG9fdG9nZ2xlLnN0YXRlRGF0YSA9IHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnc3RhdGUnXSBcblx0XHR0aGlzLnByb3BzLnNlbGVjdEluc3VyYW5jZVBsYW4oJ3BsYW4nLCBwbGFuKSAvLyBzYXZlIHVzZXIgc2VsZWN0ZWQgcGxhblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBpc19jaGVja2VkOiBwbGFuX3RvX3RvZ2dsZS5pZCwgc2VsZWN0ZWRfcGxhbl9kYXRhOiBwbGFuX3RvX3RvZ2dsZSwgc2VsZWN0ZWRfcGxhbl9wcmljZTogYCjigrkgJHtwbGFuX3RvX3RvZ2dsZS5hbW91bnR9KWAsIHRvZ2dsZTogdGhpcy5zdGF0ZS50b2dnbGUgPT0gJ3R3bycgPyAnb25lJyA6ICdvbmUnIH0pXG5cdH1cblxuXHRwcm9jZWVkUGxhbigpIHtcblx0XHRsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0bGV0IHBsYW4gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fZGF0YSlcblx0XHRsZXQgbGVhZF9kYXRhXG5cdFx0bGV0IHBob25lTnVtYmVyID0gJydcblx0XHRpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIucHJpbWFyeU1vYmlsZSAhPSAnJykge1xuXHRcdFx0XHRwaG9uZU51bWJlciA9IHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlXG5cdFx0XHR9XG5cdFx0XHRpZiAoT2JqZWN0LmtleXMocGxhbikubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsZWFkX2RhdGEgPSBwYXJzZWRcblx0XHRcdFx0dGhpcy5wcm9wcy5nZW5lcmF0ZUluc3VyYW5jZUxlYWQocGxhbi5pZCwgcGhvbmVOdW1iZXIsIGxlYWRfZGF0YSwgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSAvLyB0byBjcmVhdGUgaW5zdXJhbmNlIGxlYWQgZm9yIG1hdHJpeFxuXHRcdFx0fVxuXHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXBsYW4tdmlldycpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IHRydWUgfSlcblx0XHR9XG5cdH1cblx0cHJvY2VlZFBsYW4xKCkge1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdGxldCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRsZXQgcGxhbiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuc2VsZWN0ZWRfcGxhbl9kYXRhKVxuXHRcdGxldCBwcm9maWxlTGVuZ3RoXG5cdFx0bGV0IG1lbWJlclN0b3JlRGF0YUxlbmd0aFxuXHRcdGxldCBtZW1iZXJzQXJyYXkgPSBbXVxuXHRcdGxldCBwcm9maWxlc0FycmF5ID0gW11cblx0XHRsZXQgbGVhZF9kYXRhXG5cdFx0Ly8gcGxhbi5wbGFuX25hbWUgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLm5hbWVcblx0XHQvLyBwbGFuLmxvZ28gPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmxvZ28gXG5cdFx0Ly8gcGxhbi5pbnN1cmVyX2RvY3VtZW50ID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5pbnN1cmVyX2RvY3VtZW50ICAgXHRcblx0XHQvLyBwbGFuLmluc3VyZXIgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmlkXG5cdFx0Ly8gcGxhbi5zdGF0ZURhdGEgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ3N0YXRlJ11cblx0XHQvLyB0aGlzLnByb3BzLnNlbGVjdEluc3VyYW5jZVBsYW4oJ3BsYW4nLCBwbGFuKVxuXHRcdHRoaXMucHJvcHMucmVzZXRTZWxlY3RlZFBsYW5zKCkgLy8gdG8gcmVzZXQgdXNlciBzZWxlY3RlZCBwbGFuXG5cdFx0aWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcblx0XHRcdGxldCBwaG9uZU51bWJlciA9ICcnXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlICE9ICcnKSB7XG5cdFx0XHRcdHBob25lTnVtYmVyID0gdGhpcy5wcm9wcy5VU0VSLnByaW1hcnlNb2JpbGVcblx0XHRcdH1cblx0XHRcdGlmIChPYmplY3Qua2V5cyhwbGFuKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGxlYWRfZGF0YSA9IHBhcnNlZFxuXHRcdFx0XHR0aGlzLnByb3BzLmdlbmVyYXRlSW5zdXJhbmNlTGVhZChwbGFuLmlkLCBwaG9uZU51bWJlciwgbGVhZF9kYXRhLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIC8vIHRvIGNyZWF0ZSBpbnN1cmFuY2UgbGVhZCBmb3IgbWF0cml4XG5cdFx0XHR9XG5cdFx0XHRwcm9maWxlTGVuZ3RoID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGhcblx0XHRcdG1lbWJlclN0b3JlRGF0YUxlbmd0aCA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlcykubGVuZ3RoXG5cdFx0XHRpZiAocHJvZmlsZUxlbmd0aCA+IDAgJiYgbWVtYmVyU3RvcmVEYXRhTGVuZ3RoID4gMCkge1xuXHRcdFx0XHRPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMpLm1hcChmdW5jdGlvbiAoW2tleSwgc2VsZl9kYXRhX3ZhbHVlc10pIHtcblx0XHRcdFx0XHRPYmplY3QuZW50cmllcyhzZWxmLnByb3BzLlVTRVIucHJvZmlsZXMpLm1hcChmdW5jdGlvbiAoW2ssIHByb2ZpbGVzXSkge1xuXHRcdFx0XHRcdFx0aWYgKHNlbGZfZGF0YV92YWx1ZXMuaWQgPT0gcHJvZmlsZXMuaWQpIHtcblx0XHRcdFx0XHRcdFx0bWVtYmVyc0FycmF5LnB1c2goc2VsZl9kYXRhX3ZhbHVlcylcblx0XHRcdFx0XHRcdFx0cHJvZmlsZXNBcnJheS5wdXNoKHByb2ZpbGVzKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGlmIChtZW1iZXJzQXJyYXkubGVuZ3RoID09IHByb2ZpbGVzQXJyYXkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmVudHJpZXMobWVtYmVyc0FycmF5KS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlc10pIHtcblx0XHRcdFx0XHRcdGlmIChtZW1iZXJzQXJyYXlba2V5XS5pZCA9PSBwcm9maWxlc0FycmF5W2tleV0uaWQpIHtcblx0XHRcdFx0XHRcdFx0bGV0IG1lbWJlck5ld2RhdGEgPSB2YWx1ZXNcblx0XHRcdFx0XHRcdFx0bGV0IG5ld05hbWUgPSBwcm9maWxlc0FycmF5W2tleV0ubmFtZS5zcGxpdChcIiBcIilcblx0XHRcdFx0XHRcdFx0aWYgKG5ld05hbWUubGVuZ3RoID09IDMpIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLm5hbWUgPSBuZXdOYW1lWzBdXG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5taWRkbGVfbmFtZSA9IG5ld05hbWVbMV1cblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmxhc3RfbmFtZSA9IG5ld05hbWVbMl1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChuZXdOYW1lLmxlbmd0aCA9PSAyKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5uYW1lID0gbmV3TmFtZVswXVxuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEubGFzdF9uYW1lID0gbmV3TmFtZVsxXVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEubmFtZSA9IG5ld05hbWVbMF1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAobWVtYmVyc0FycmF5W2tleV0uZW1haWwgIT0gJycpIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmVtYWlsID0gbWVtYmVyc0FycmF5W2tleV0uZW1haWxcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmVtYWlsID0gcHJvZmlsZXNBcnJheVtrZXldLmVtYWlsXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAobWVtYmVyc0FycmF5W2tleV0uZG9iICE9IG51bGwgfHwgbWVtYmVyc0FycmF5W2tleV0uZG9iICE9ICcnKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5kb2IgPSBtZW1iZXJzQXJyYXlba2V5XS5kb2Jcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmRvYiA9IHByb2ZpbGVzQXJyYXlba2V5XS5kb2Jcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAobWVtYmVyc0FycmF5W2tleV0uZ2VuZGVyICE9ICcnKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5nZW5kZXIgPSBtZW1iZXJzQXJyYXlba2V5XS5nZW5kZXJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmdlbmRlciA9IHByb2ZpbGVzQXJyYXlba2V5XS5nZW5kZXJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRzZWxmLnByb3BzLnVzZXJEYXRhKCdtZW1iZXJOZXdkYXRhJywgbWVtYmVyTmV3ZGF0YSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS11c2VyLWRldGFpbHMnKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS11c2VyLWRldGFpbHMnKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtdXNlci1kZXRhaWxzJylcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cDogdHJ1ZSB9KVxuXHRcdH1cblx0fVxuXG5cdHByb2NlZWRMZWFkKHR5cGUpIHtcblx0XHRpZiAoIXRoaXMuc3RhdGUuY2hlY2tJZGxlVGltZW91dCkge1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSW5zdXJhbmNlTG9naW5Qb3B1cCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnSW5zdXJhbmNlLWxvZ2luLXBvcHVwLWNsaWNrJywgJ2NsaWNrX3ZhbHVlJzogJ3VzZXJDbGljaycsIHR5cGU6IHR5cGVcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwb3B1cENsYXNzOiAnJywgb3ZlcmxheUNsYXNzOiAnJyB9KVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGlzTGVhZDogdHlwZSwgc2hvd1BvcHVwOiB0cnVlLCBpZGVudGlmeVVzZXJDbGljazogJ3VzZXJDbGljaycgfSlcblx0fVxuXG5cdGNsb3NlTGVhZFBvcHVwKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IGZhbHNlfSlcblx0fVxuXG5cdGhpZGVMb2dpblBvcHVwKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogZmFsc2V9KVxuXHR9XG5cblx0c2hvcnRlblVybCgpIHtcblx0XHRpZiAod2luZG93KSB7XG5cdFx0XHRsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYgKyAnJmZvcmNlX2xvY2F0aW9uPXRydWUnXG5cdFx0XHR0aGlzLnByb3BzLnVybFNob3J0bmVyKHVybCwgKGVyciwgZGF0YSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVycikge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogZGF0YS50aW55X3VybCB9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0XG5cdFx0aWYgKHRoaXMucHJvcHMuTE9BRF9JTlNVUkFOQ0UpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXHRcdFx0XHRcdFx0PFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0gLz5cblxuXHRcdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGFydGljbGUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEwIGNvbC1sZy0xMCBjZW50ZXItY29sdW1uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBhcnRpY2xlLWNvbHVtbiBpbnMtbGFuZGluZy1zaGFkb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtbGFuZGluZy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtc3RlcHMtc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYy11c3Itb25seVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMT5Hcm91cCBPUEQgSW5zdXJhbmNlIGV4Y2x1c2l2ZWx5IGZvciA8c3Bhbj5Eb2NwcmltZTwvc3Bhbj4gdXNlcnMgb25seSA8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG9jLXB3ZGJ5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5Qb3dlcmVkIGJ5PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzdHlsZT17eyB3aWR0aDogJzEzMHB4JyB9fSBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvaW5zdXJlci9pbWFnZXMvQU1ISV9Mb2dvLTAxLnBuZ1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1zdGVwcy1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW0tY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZnQtY250bi1hbGduXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW5zLXN0ZXAtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5zLWhvc3AucG5nXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxmdC1wYXJhLWFsZ25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3RlcC1ibGstcGFyYVwiPlVubGltaXRlZDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3RlcC1ibGstcGFyYVwiPkRvY3RvcjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3RlcC1vcm5nLXBhcmFcIj5Db25zdWx0YXRpb248L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN0ZXAtcXV0LXBhcmFcIj53aXRoIDxzcGFuPjIwLDAwMCs8L3NwYW4+IERvY3RvcnMqPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1zdGVwcy1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW0tY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZnQtcGFyYS1hbGduXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN0ZXAtYmxrLXBhcmFcIj5VbmxpbWl0ZWQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN0ZXAtb3JuZy1wYXJhXCI+TGFiIFRlc3RzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdGVwLXF1dC1wYXJhXCI+YXQgPHNwYW4+MiwwMDArPC9zcGFuPiBEaWFnbm9zdGljIExhYnMqPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbnMtc3RlcC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pc24tbGFiLnBuZ1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtc3RlcHMtc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGZ0LWNudG4tYWxnblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlucy1zdGVwLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2lucy1hY3QucG5nXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxmdC1wYXJhLWFsZ25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3RlcC1vcm5nLXBhcmFcIj5JbnN0YW50IEFjdGl2YXRpb248L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN0ZXAtYmxrLXBhcmFcIj5VcG9uIFB1cmNoYXNlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtbGFuZC1saXN0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaW5zLWhydC5wbmcnfSAvPlByZSBleGlzdGluZyBkaXNlYXNlcyBjb3ZlcmVkPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2lucy1ycHJ0LnBuZyd9IC8+Tm8gbWVkaWNhbCB0ZXN0IHJlcXVpcmVkIGZvciBwb2xpY3kgaXNzdWFuY2U8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaW5zLXlyLnBuZyd9IC8+VmFsaWQgZm9yIDEgeWVhciBmcm9tIHBvbGljeSBpc3N1YW5jZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1uZXR3b3JrLWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLW5ldHdyay1oZWFkaW5nLWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+T25seSBhdmFpbGFibGUgb24gRG9jcHJpbWUgbmV0d29yayogPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBocmVmPScvaW5zdXJhbmNlL25ldHdvcmsnIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJbnN1cmFuY2VOZXR3b3JrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdpbnN1cmFuY2UtbmV0d29yaycsICdjbGlja192YWx1ZSc6ICdpbnN1cmFuY2UtbmV0d29yaydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL25ldHdvcmsnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5WaWV3IG5ldHdvcms8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlucy1udy1ub3RlXCI+QSBmZXcgdGhpbmdzIHRvIG5vdGUuLi4gPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImlucy1udy1saXN0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5BbGwgcHJvY2VkdXJlcyAoZGVudGFsLCBkYXljYXJlIGV0Yy4uKSBhbmQgc2Vzc2lvbnMgKHRoZXJhcHksIGNvdW5zZWxsaW5nIGV0Yy4uKSBhcmUgbm90IGNvdmVyZWQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+QW55IGxhYiB0ZXN0IG9yIGRvY3RvciBhcHBvaW50bWVudHMgd2l0aCBNUlAgbW9yZSB0aGFuIOKCuTE1MDAgYXJlIG5vdCBjb3ZlcmVkPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPk9ubHkgNSBvbmNvbG9neSBhbmQgNSBHeW5lY29sb2d5IGRvY3RvciBhcHBvaW50bWVudHMgYXJlIGNvdmVyZWQgaW4gYSBwb2xpY3kgeWVhcjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5Eb2NwcmltZSdzIEluc3VyYW5jZSBuZXR3b3JrIGlzIGR5bmFtaWMgaW4gbmF0dXJlIGFuZCBtYXkgY2hhbmdlIGZyb20gdGltZSB0byB0aW1lPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHR7cGFyc2VkLnNob3dfYnV0dG9uID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGlja3ktYnRuIGZpeGVkIGluc3VCdG5zQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpbnN1LWxlZnQtd2hpdGUtYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKX0+QmFjayB0byBCb29raW5nXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpbnN1LXJpZ2h0LW9ybmctYnRuXCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMpfT5CdXkgTm93XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWJ0biBmaXhlZCBpbnN1QnRuc0NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gaWQ9XCJwcm9jZWVkTGVhZFwiIGNsYXNzTmFtZT1cImluc3UtcmlnaHQtb3JuZy1idG4gaW5zLWJ1eS1idG5cIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcyl9PkJ1eSBOb3c8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnNob3dQb3B1cCA/XG5cdFx0XHRcdFx0XHRcdDxJbnN1clBvcHVwIHsuLi50aGlzLnByb3BzfSBzZWxlY3RlZF9wbGFuPXt0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fZGF0YX0gaGlkZUxvZ2luUG9wdXA9e3RoaXMuaGlkZUxvZ2luUG9wdXAuYmluZCh0aGlzKX0gaXNMZWFkPXt0aGlzLnN0YXRlLmlzTGVhZH0gY2xvc2VMZWFkUG9wdXA9e3RoaXMuY2xvc2VMZWFkUG9wdXAuYmluZCh0aGlzKX0gcG9wdXBDbGFzcz17dGhpcy5zdGF0ZS5wb3B1cENsYXNzfSBvdmVybGF5Q2xhc3M9e3RoaXMuc3RhdGUub3ZlcmxheUNsYXNzfSBpZGVudGlmeVVzZXJDbGljaz17dGhpcy5zdGF0ZS5pZGVudGlmeVVzZXJDbGlja30gLz4gOiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdXJhbmNlU3RhdGljVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IGdldEluc3VyYW5jZSwgc2VsZWN0SW5zdXJhbmNlUGxhbiAsIHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzLHJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzLHJlc2V0U2VsZWN0ZWRQbGFucyxzZW5kT1RQLCBzdWJtaXRPVFAsIHJlc2V0QXV0aCwgZ2V0VXNlclByb2ZpbGUsIHVzZXJEYXRhLCBnZW5lcmF0ZUluc3VyYW5jZUxlYWQsIHVybFNob3J0bmVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBJbnN1cmFuY2VDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlU3RhdGljVmlldy5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIEluc3VyYW5jZVN0YXRpY1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBzaG93SW5zdXJhbmNlVmlldzpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpIC8vIHRvIGdldCBsb2dnZWRJbiB1c2VyIHByb2ZpbGVcbiAgICAgICAgfVxuICAgICAgICAvKnRoaXMucHJvcHMuZ2V0SW5zdXJhbmNlKHJlc3A9PntcbiAgICAgICAgICAgIGlmKCFyZXNwLmNlcnRpZmljYXRlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdlbmVyYXRlSW5zdXJhbmNlTGVhZCgnJyxwaG9uZU51bWJlcixsZWFkX2RhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKi9cbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRJbnN1cmFuY2UoZmFsc2UpICAvLyB0byBnZXQgaW5zdXJhbmNlIHBsYW5zXG4gICAgfVxuXHRyZW5kZXIoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5MT0FEX0lOU1VSQU5DRSl7XG4gICAgICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1jbHViLWRldGFpbHM/c291cmNlPW1vYmlsZS1sZWZ0bWVudS12aXAtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPEluc3VyYW5jZUNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YS5jZXJ0aWZpY2F0ZSAmJiBTVE9SQUdFLmNoZWNrQXV0aCgpKXsgLy8gaWYgdXNlciBpcyBhbHJlYWR5IGFuIGluc3VyYW5jZSBjdXN0b21lciBzbyByZWRpcmVjdCBvbiBpbnN1cmVkIGRhc2hib2FyZCBwYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvY2VydGlmaWNhdGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIHsvKjxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9Lz4qL31cbiAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgIH1cblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBVU0VSID0gc3RhdGUuVVNFUlxuICAgIGxldCB7IGluc3VybmFjZURhdGEsIExPQURfSU5TVVJBTkNFLCBzZWxlY3RlZF9wbGFuLHNlbGZfZGF0YV92YWx1ZXN9ID0gc3RhdGUuSU5TVVJBTkNFXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG5cbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuICAgIHJldHVybiB7XG4gICAgICAgIGluc3VybmFjZURhdGEsTE9BRF9JTlNVUkFOQ0Usc2VsZWN0ZWRfcGxhbixzZWxmX2RhdGFfdmFsdWVzLFVTRVIsIHNlbGVjdGVkTG9jYXRpb25cbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEluc3VyYW5jZTogKGlzX2VuZG9yc2VtZW50LGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRJbnN1cmFuY2UoaXNfZW5kb3JzZW1lbnQsY2FsbGJhY2spKSxcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICBzZWxlY3RJbnN1cmFuY2VQbGFuOiAocGxhbixjcml0ZXJpYSkgPT4gZGlzcGF0Y2goc2VsZWN0SW5zdXJhbmNlUGxhbihwbGFuLGNyaXRlcmlhKSksXG4gICAgICAgIC8vIHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzOiAobWVtYmVyc0lkKSA9PiBkaXNwYXRjaChzYXZlQ3VycmVudFNlbGVjdGVkTWVtYmVycyhtZW1iZXJzSWQpKSxcbiAgICAgICAgcmVzZXRTZWxlY3RlZFBsYW5zOiAoKSA9PiBkaXNwYXRjaChyZXNldFNlbGVjdGVkUGxhbnMoKSksXG4gICAgICAgIHNlbmRPVFA6IChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpID0+IGRpc3BhdGNoKHNlbmRPVFAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSksXG4gICAgICAgIHN1Ym1pdE9UUDogKG51bWJlciwgb3RwLGV4dHJhUGFyYW1zRGF0YSwgIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRPVFAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zRGF0YSwgY2IpKSxcbiAgICAgICAgcmVzZXRBdXRoOiAoKSA9PiBkaXNwYXRjaChyZXNldEF1dGgoKSksXG4gICAgICAgIHVzZXJEYXRhIDooc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSA9PiBkaXNwYXRjaCh1c2VyRGF0YShzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpKSxcbiAgICAgICAgZ2VuZXJhdGVJbnN1cmFuY2VMZWFkOihzZWxlY3RlZFBsYW4sbnVtYmVyLGxlYWRfZGF0YSxjYikgPT4gZGlzcGF0Y2goZ2VuZXJhdGVJbnN1cmFuY2VMZWFkKHNlbGVjdGVkUGxhbixudW1iZXIsbGVhZF9kYXRhLGNiKSksXG4gICAgICAgIHVybFNob3J0bmVyOiAodXJsLCBjYikgPT4gZGlzcGF0Y2godXJsU2hvcnRuZXIodXJsLCBjYikpLFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbnN1cmFuY2VTdGF0aWNWaWV3KSJdLCJzb3VyY2VSb290IjoiIn0=