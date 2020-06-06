exports.ids = [124];
exports.modules = {

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


class Insurance extends _react2.default.Component {
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
			isLead: '',
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
			//this.setState({checkIdleTimeout:false, showPopup:true, popupClass: 'translucent-popup', overlayClass: 'white-overlay', identifyUserClick:'bannerClick'})
			let data = {
				'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopup', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'Insurance-login-popup-click', 'click_value': 'bannerClick'
			};

			_gtm2.default.sendEvent({ data: data });
		}
		if (_storage2.default.checkAuth() && this.props.USER && this.props.USER.primaryMobile != '') {
			phoneNumber = this.props.USER.primaryMobile;
		}
		// this.props.generateInsuranceLead('',phoneNumber,lead_data,this.props.selectedLocation)
		let selectedId = this.props.selected_plan ? this.props.selected_plan.id : '';
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

	inactivityTime() {
		// to check user inactive time on page and ask for login
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
				time = setTimeout(stop, 12000);
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
		this.props.selectInsurancePlan('plan', plan);
		this.setState({ is_checked: plan_to_toggle.id, selected_plan_data: plan_to_toggle, selected_plan_price: `(₹ ${plan_to_toggle.amount})`, toggle: this.state.toggle == 'two' ? 'one' : 'one' });
	}
	proceedPlan() {
		// to save user agreed plan and redirect to ask user details for policy
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
			// if (Object.keys(plan).length > 0) {
			// 	lead_data = parsed
			// 	this.props.generateInsuranceLead(plan.id, phoneNumber,lead_data,this.props.selectedLocation)
			// }
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
		this.setState({
			showPopup: false
		});
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
			let parsed = queryString.parse(this.props.location.search);
			return _react2.default.createElement(
				'div',
				{ className: 'profile-body-wrap' },
				_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
				_react2.default.createElement(_HelmetTags2.default, { tagsData: {
						canonicalUrl: `${_config2.default.API_BASE_URL}/insurance/insurance-view`,
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
										{ className: 'shareLinkpopupOverlay', onClick: () => {
												this.setState({ shortURL: "" });
											} },
										_react2.default.createElement(
											'div',
											{ className: 'shareLinkpopup', onClick: e => {
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
													onCopy: () => {
														_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Shortened URL Copied." });
														this.setState({ shortURL: "" });
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
													this.props.insurnaceData['insurance'][0].plans.map((result, i) => {
														return _react2.default.createElement(
															'tr',
															{ id: result.id, key: i, onClick: this.selectPlan.bind(this, result), ref: result.adult_count == 2 && result.child_count == 2 ? input => {
																	this.textInput = input;
																} : 'ref_0' },
															_react2.default.createElement(
																'td',
																null,
																_react2.default.createElement(
																	'label',
																	{ className: 'container-radio', htmlform: i },
																	result.name,
																	_react2.default.createElement('input', { type: 'radio', name: 'gender', id: i, value: i, checked: this.state.is_checked ? this.state.is_checked === result.id : result.is_selected }),
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
										{ className: 'fw-500', href: '/terms', style: { color: "#f78631" }, onClick: e => {
												e.preventDefaut();
												this.props.history.push('/terms');
											} },
										'Website T&C Apply'
									)
								)
							),
							this.state.showPopup ? _react2.default.createElement(_insurancePopup2.default, _extends({}, this.props, { selected_plan: this.state.selected_plan_data, hideLoginPopup: this.hideLoginPopup.bind(this), isLead: this.state.isLead, closeLeadPopup: this.closeLeadPopup.bind(this), popupClass: this.state.popupClass, overlayClass: this.state.overlayClass, identifyUserClick: this.state.identifyUserClick })) : '',
							parsed.show_button ? _react2.default.createElement(
								'div',
								{ className: 'sticky-btn fixed insuBtnsContainer' },
								_react2.default.createElement(
									'button',
									{ className: 'insu-left-white-btn', onClick: () => this.props.history.go(-1) },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");

class Insurance extends _react2.default.Component {

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Insurance);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pbnN1cmFuY2UvSW5zdXJhbmNlVmlldy5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJJbnN1cmFuY2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInRvZ2dsZSIsImlzX2NoZWNrZWQiLCJzZWxlY3RlZF9wbGFuIiwiaWQiLCJzZWxlY3RlZF9wbGFuX3ByaWNlIiwiYW1vdW50IiwiZ3N0Iiwic2VsZWN0ZWRfcGxhbl9kYXRhIiwic2hvd1BvcHVwIiwic2hvcnRVUkwiLCJpc0xlYWQiLCJjaGVja0lkbGVUaW1lb3V0IiwicG9wdXBDbGFzcyIsIm92ZXJsYXlDbGFzcyIsImlkZW50aWZ5VXNlckNsaWNrIiwiY29tcG9uZW50RGlkTW91bnQiLCJsZWFkX2RhdGEiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicGhvbmVOdW1iZXIiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwicGFnZV9zb3VyY2UiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiVVNFUiIsInByaW1hcnlNb2JpbGUiLCJzZWxlY3RlZElkIiwic2VsZWN0UGxhbiIsInRleHRJbnB1dCIsImNsaWNrIiwiaW5hY3Rpdml0eVRpbWUiLCJ0aW1lIiwic2VsZiIsIndpbmRvdyIsIm9ubG9hZCIsInJlc2V0VGltZXIiLCJkb2N1bWVudCIsIm9ubW91c2Vtb3ZlIiwib25rZXlwcmVzcyIsInN0b3AiLCJnZXRFbGVtZW50QnlJZCIsInNldFN0YXRlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJwbGFuX3RvX3RvZ2dsZSIsInBsYW4iLCJpc19zZWxlY3RlZCIsInNlbGVjdEluc3VyYW5jZVBsYW4iLCJwcm9jZWVkUGxhbiIsInBhcnNlZCIsIk9iamVjdCIsImFzc2lnbiIsInByb2ZpbGVMZW5ndGgiLCJtZW1iZXJTdG9yZURhdGFMZW5ndGgiLCJtZW1iZXJzQXJyYXkiLCJwcm9maWxlc0FycmF5IiwicmVzZXRTZWxlY3RlZFBsYW5zIiwia2V5cyIsInByb2ZpbGVzIiwibGVuZ3RoIiwic2VsZl9kYXRhX3ZhbHVlcyIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJrIiwicHVzaCIsInZhbHVlcyIsIm1lbWJlck5ld2RhdGEiLCJuZXdOYW1lIiwibmFtZSIsInNwbGl0IiwibWlkZGxlX25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsImRvYiIsImdlbmRlciIsInVzZXJEYXRhIiwiaGlzdG9yeSIsInByb2NlZWRMZWFkIiwidHlwZSIsImNsb3NlTGVhZFBvcHVwIiwiaGlkZUxvZ2luUG9wdXAiLCJzaG9ydGVuVXJsIiwidXJsIiwiaHJlZiIsInVybFNob3J0bmVyIiwiZXJyIiwidGlueV91cmwiLCJyZW5kZXIiLCJMT0FEX0lOU1VSQU5DRSIsImNhbm9uaWNhbFVybCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwb3NpdGlvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiaW5zdXJuYWNlRGF0YSIsInBsYW5zIiwicmVzdWx0IiwiaSIsImJpbmQiLCJhZHVsdF9jb3VudCIsImNoaWxkX2NvdW50IiwiaW5wdXQiLCJib3R0b20iLCJyaWdodCIsImNvbG9yIiwicHJldmVudERlZmF1dCIsInNob3dfYnV0dG9uIiwiZ28iLCJzaG93SW5zdXJhbmNlVmlldyIsImdldFVzZXJQcm9maWxlIiwic2Nyb2xsVG8iLCJnZXRJbnN1cmFuY2UiLCJjZXJ0aWZpY2F0ZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIklOU1VSQU5DRSIsInNlbGVjdGVkTG9jYXRpb24iLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJpc19lbmRvcnNlbWVudCIsImNhbGxiYWNrIiwiY3JpdGVyaWEiLCJzZW5kT1RQIiwibnVtYmVyIiwidmlhU21zIiwidmlhV2hhdHNhcHAiLCJtZXNzYWdlX3R5cGUiLCJjYiIsInN1Ym1pdE9UUCIsIm90cCIsImV4dHJhUGFyYW1zRGF0YSIsInJlc2V0QXV0aCIsInNlbGZfZGF0YSIsImZvcmNlYWRkIiwiZ2VuZXJhdGVJbnN1cmFuY2VMZWFkIiwic2VsZWN0ZWRQbGFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSEEsTUFBTUEsY0FBY0MsbUJBQU9BLENBQUMsa0NBQVIsQ0FBcEI7OztBQUtBLE1BQU1DLFNBQU4sU0FBd0JDLGdCQUFNQyxTQUE5QixDQUF3QztBQUN2Q0MsYUFBWUMsS0FBWixFQUFtQjtBQUNsQixRQUFNQSxLQUFOO0FBQ0EsT0FBS0MsS0FBTCxHQUFhO0FBQ1o7QUFDQUMsV0FBUSxLQUZJO0FBR1pDLGVBQVksS0FBS0gsS0FBTCxDQUFXSSxhQUFYLEdBQTJCLEtBQUtKLEtBQUwsQ0FBV0ksYUFBWCxDQUF5QkMsRUFBcEQsR0FBeUQsRUFIekQ7QUFJWkMsd0JBQXFCLEtBQUtOLEtBQUwsQ0FBV0ksYUFBWCxHQUEyQixLQUFLSixLQUFMLENBQVdJLGFBQVgsQ0FBeUJHLE1BQXBELEdBQTZELEVBSnRFO0FBS1pDLFFBQUssc0JBTE87QUFNWkMsdUJBQW9CLEtBQUtULEtBQUwsQ0FBV0ksYUFBWCxHQUEyQixLQUFLSixLQUFMLENBQVdJLGFBQXRDLEdBQXNELEVBTjlEO0FBT1pNLGNBQVcsS0FQQztBQVFaQyxhQUFVLEVBUkU7QUFTWkMsV0FBUSxFQVRJO0FBVVpDLHFCQUFpQixJQVZMO0FBV1pDLGVBQVksRUFYQTtBQVlaQyxpQkFBYyxFQVpG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VCxDQVA5QztBQVFISSxtQkFBVyxNQUFNYixTQUFTLHVCQUFULENBUmQ7QUFTSGxELGtCQUFVLENBQUNnRSxTQUFELEVBQVdYLFFBQVgsRUFBb0JZLFFBQXBCLEtBQWlDZixTQUFTLHFCQUFTYyxTQUFULEVBQW1CWCxRQUFuQixFQUE0QlksUUFBNUIsQ0FBVCxDQVR4QztBQVVIQywrQkFBc0IsQ0FBQ0MsWUFBRCxFQUFjWixNQUFkLEVBQXFCeEgsU0FBckIsRUFBK0I0SCxFQUEvQixLQUFzQ1QsU0FBUyxrQ0FBc0JpQixZQUF0QixFQUFtQ1osTUFBbkMsRUFBMEN4SCxTQUExQyxFQUFvRDRILEVBQXBELENBQVQsQ0FWekQ7QUFXSGxELHFCQUFhLENBQUNGLEdBQUQsRUFBTW9ELEVBQU4sS0FBYVQsU0FBUyx3QkFBWTNDLEdBQVosRUFBaUJvRCxFQUFqQixDQUFUO0FBWHZCLEtBQVA7QUFhSCxDQWREOztrQkFrQmUseUJBQVFkLGVBQVIsRUFBMEJJLGtCQUExQixFQUE4Q3hJLFNBQTlDLEMiLCJmaWxlIjoiMTI0LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ2hhdFBhbmVsIGZyb20gJy4uL2NvbW1vbnMvQ2hhdFBhbmVsJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgSW5zdXJQb3B1cCBmcm9tICcuL2luc3VyYW5jZVBvcHVwLmpzJ1xuaW1wb3J0IEluc3VyQ29tbW9uIGZyb20gJy4vaW5zdXJhbmNlQ29tbW9uU2VjdGlvbi5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgeyBBc3NlcnRpb25FcnJvciB9IGZyb20gJ2Fzc2VydCc7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBJbnN1cmFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHQvL2luc3VyYW5jZVJlc3VsdHM6dGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhLFxuXHRcdFx0dG9nZ2xlOiAnb25lJyxcblx0XHRcdGlzX2NoZWNrZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbiA/IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5pZCA6ICcnLFxuXHRcdFx0c2VsZWN0ZWRfcGxhbl9wcmljZTogdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuID8gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmFtb3VudCA6ICcnLFxuXHRcdFx0Z3N0OiAnSW5jbHVzaXZlIG9mIDE4JSBHU1QnLFxuXHRcdFx0c2VsZWN0ZWRfcGxhbl9kYXRhOiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gPyB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gOiAnJyxcblx0XHRcdHNob3dQb3B1cDogZmFsc2UsXG5cdFx0XHRzaG9ydFVSTDogXCJcIixcblx0XHRcdGlzTGVhZDogJycsXG5cdFx0XHRjaGVja0lkbGVUaW1lb3V0OnRydWUsXG5cdFx0XHRwb3B1cENsYXNzOiAnJyxcblx0XHRcdG92ZXJsYXlDbGFzczogJycsXG5cdFx0XHRpZGVudGlmeVVzZXJDbGljazonJ1xuXHRcdH1cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHQvLyBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuXHRcdC8vIFx0dGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG5cdFx0Ly8gfVxuXHRcdGxldCBsZWFkX2RhdGEgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRsZXQgcGhvbmVOdW1iZXIgPSAnJ1xuXHRcdGlmICghU1RPUkFHRS5jaGVja0F1dGgoKSAmJiBsZWFkX2RhdGEucGFnZV9zb3VyY2UgPT0gJ2Jhbm5lcicpIHtcblx0XHRcdC8vdGhpcy5zZXRTdGF0ZSh7Y2hlY2tJZGxlVGltZW91dDpmYWxzZSwgc2hvd1BvcHVwOnRydWUsIHBvcHVwQ2xhc3M6ICd0cmFuc2x1Y2VudC1wb3B1cCcsIG92ZXJsYXlDbGFzczogJ3doaXRlLW92ZXJsYXknLCBpZGVudGlmeVVzZXJDbGljazonYmFubmVyQ2xpY2snfSlcblx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJbnN1cmFuY2VMb2dpblBvcHVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdJbnN1cmFuY2UtbG9naW4tcG9wdXAtY2xpY2snLCAnY2xpY2tfdmFsdWUnOiAnYmFubmVyQ2xpY2snXG5cdFx0XHR9XG5cblx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdH1cblx0XHRpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSAmJiB0aGlzLnByb3BzLlVTRVIgJiYgdGhpcy5wcm9wcy5VU0VSLnByaW1hcnlNb2JpbGUgIT0gJycpIHtcbiAgICAgICAgICAgIHBob25lTnVtYmVyID0gdGhpcy5wcm9wcy5VU0VSLnByaW1hcnlNb2JpbGVcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnByb3BzLmdlbmVyYXRlSW5zdXJhbmNlTGVhZCgnJyxwaG9uZU51bWJlcixsZWFkX2RhdGEsdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuXHRcdGxldCBzZWxlY3RlZElkID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuID8gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmlkIDogJydcblx0XHRpZiAoc2VsZWN0ZWRJZCkge1xuXHRcdFx0dGhpcy5zZWxlY3RQbGFuKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbilcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodGhpcy50ZXh0SW5wdXQpIHtcblx0XHRcdFx0dGhpcy50ZXh0SW5wdXQuY2xpY2soKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZih0aGlzLnN0YXRlLmNoZWNrSWRsZVRpbWVvdXQgJiYgIVNUT1JBR0UuY2hlY2tBdXRoKCkpe1xuXHRcdFx0Ly90aGlzLnNldFN0YXRlKHtwb3B1cENsYXNzOiAndHJhbnNsdWNlbnQtcG9wdXAnLCBvdmVybGF5Q2xhc3M6ICd3aGl0ZS1vdmVybGF5J30pXG5cdFx0XHR0aGlzLmluYWN0aXZpdHlUaW1lKCkgXG5cdFx0fVxuXHR9XG5cblx0aW5hY3Rpdml0eVRpbWUoKSB7IC8vIHRvIGNoZWNrIHVzZXIgaW5hY3RpdmUgdGltZSBvbiBwYWdlIGFuZCBhc2sgZm9yIGxvZ2luXG4gICAgdmFyIHRpbWU7XG4gICAgbGV0IHNlbGYgPSAgdGhpc1xuICAgIHdpbmRvdy5vbmxvYWQgPSByZXNldFRpbWVyO1xuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gcmVzZXRUaW1lcjtcbiAgICBkb2N1bWVudC5vbmtleXByZXNzID0gcmVzZXRUaW1lcjtcbiAgICByZXNldFRpbWVyKClcblx0ICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG5cdCAgICBcdGxldCBkYXRhID0ge1xuXHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0luc3VyYW5jZUxvZ2luUG9wdXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ0luc3VyYW5jZS1sb2dpbi1wb3B1cC1jbGljaycsICdjbGlja192YWx1ZSc6ICdBdXRvQ2xpY2snXG5cdFx0XHRcdH1cblx0XHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0ICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvY2VlZExlYWQnKSl7XG5cdCAgICAgICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvY2VlZExlYWQnKS5jbGljaygpXG5cdCAgICAgICAgXHRzZWxmLnNldFN0YXRlKHtjaGVja0lkbGVUaW1lb3V0OmZhbHNlLCBpZGVudGlmeVVzZXJDbGljazonQXV0b0NsaWNrJ30pXG5cdCAgICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiByZXNldFRpbWVyKCkge1xuXHQgICAgICAgIGNsZWFyVGltZW91dCh0aW1lKTtcblx0ICAgICAgICBpZihzZWxmLnN0YXRlLmNoZWNrSWRsZVRpbWVvdXQpe1xuXHQgICAgICAgIFx0dGltZSA9IHNldFRpbWVvdXQoc3RvcCwgMTIwMDApXHRcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG5cdFx0Ly8gbGV0IHNlbGYgPSB0aGlzXG5cdFx0Ly8gbGV0IHNlbGVjdGVkSWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4/dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmlkOicnXG5cdFx0Ly8gbGV0IG5ld1NlbGVjdGVkSWQgPSBwcm9wcy5zZWxlY3RlZF9wbGFuP3Byb3BzLnNlbGVjdGVkX3BsYW4uaWQ6Jydcblx0XHQvLyBpZihzZWxlY3RlZElkKXtcblx0XHQvLyBcdHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZF9wbGFuX2RhdGE6IHByb3BzLnNlbGVjdGVkX3BsYW4gLCBzZWxlY3RlZF9wbGFuX3ByaWNlOiBgKOKCuSAke3Byb3BzLnNlbGVjdGVkX3BsYW4uYW1vdW50fSlgLCBpc19jaGVja2VkOiBzZWxlY3RlZElkIH0pXG5cdFx0Ly8gfVxuXHRcdC8vIGlmKCFuZXdTZWxlY3RlZElkKXtcblx0XHQvLyBcdGlmKHRoaXMudGV4dElucHV0KXtcblx0XHQvLyBcdFx0dGhpcy50ZXh0SW5wdXQuY2xpY2soKVxuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0fVxuXHRzZWxlY3RQbGFuKHBsYW5fdG9fdG9nZ2xlKSB7XG5cdFx0bGV0IHBsYW4gPSBwbGFuX3RvX3RvZ2dsZVxuXHRcdHBsYW5fdG9fdG9nZ2xlLmlzX3NlbGVjdGVkID0gdHJ1ZVxuXHRcdC8vIHBsYW5fdG9fdG9nZ2xlLnBsYW5fbmFtZSA9IHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0ubmFtZVxuXHRcdC8vIHBsYW5fdG9fdG9nZ2xlLmxvZ28gPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmxvZ28gXG5cdFx0Ly8gcGxhbl90b190b2dnbGUuaW5zdXJlcl9kb2N1bWVudCA9IHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0uaW5zdXJlcl9kb2N1bWVudFxuXHRcdC8vIHBsYW5fdG9fdG9nZ2xlLmluc3VyZXIgPSB0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmlkXG5cdFx0Ly8gcGxhbl90b190b2dnbGUuc3RhdGVEYXRhID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydzdGF0ZSddIFxuXHRcdHRoaXMucHJvcHMuc2VsZWN0SW5zdXJhbmNlUGxhbigncGxhbicsIHBsYW4pXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGlzX2NoZWNrZWQ6IHBsYW5fdG9fdG9nZ2xlLmlkLCBzZWxlY3RlZF9wbGFuX2RhdGE6IHBsYW5fdG9fdG9nZ2xlLCBzZWxlY3RlZF9wbGFuX3ByaWNlOiBgKOKCuSAke3BsYW5fdG9fdG9nZ2xlLmFtb3VudH0pYCwgdG9nZ2xlOiB0aGlzLnN0YXRlLnRvZ2dsZSA9PSAndHdvJyA/ICdvbmUnIDogJ29uZScgfSlcblx0fVxuXHRwcm9jZWVkUGxhbigpIHsgLy8gdG8gc2F2ZSB1c2VyIGFncmVlZCBwbGFuIGFuZCByZWRpcmVjdCB0byBhc2sgdXNlciBkZXRhaWxzIGZvciBwb2xpY3lcblx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0bGV0IHBsYW4gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fZGF0YSlcblx0XHRsZXQgcHJvZmlsZUxlbmd0aFxuXHRcdGxldCBtZW1iZXJTdG9yZURhdGFMZW5ndGhcblx0XHRsZXQgbWVtYmVyc0FycmF5ID0gW11cblx0XHRsZXQgcHJvZmlsZXNBcnJheSA9IFtdXG5cdFx0bGV0IGxlYWRfZGF0YVxuXHRcdC8vIHBsYW4ucGxhbl9uYW1lID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5uYW1lXG5cdFx0Ly8gcGxhbi5sb2dvID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5sb2dvIFxuXHRcdC8vIHBsYW4uaW5zdXJlcl9kb2N1bWVudCA9IHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0uaW5zdXJlcl9kb2N1bWVudCAgIFx0XG5cdFx0Ly8gcGxhbi5pbnN1cmVyID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydpbnN1cmFuY2UnXVswXS5pZFxuXHRcdC8vIHBsYW4uc3RhdGVEYXRhID0gdGhpcy5wcm9wcy5pbnN1cm5hY2VEYXRhWydzdGF0ZSddXG5cdFx0Ly8gdGhpcy5wcm9wcy5zZWxlY3RJbnN1cmFuY2VQbGFuKCdwbGFuJywgcGxhbilcblx0XHR0aGlzLnByb3BzLnJlc2V0U2VsZWN0ZWRQbGFucygpIC8vIHRvIHJlc2V0IHVzZXIgc2VsZWN0ZWQgcGxhblxuXHRcdGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG5cdFx0XHRsZXQgcGhvbmVOdW1iZXIgPSAnJ1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIucHJpbWFyeU1vYmlsZSAhPSAnJykge1xuXHRcdFx0XHRwaG9uZU51bWJlciA9IHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlXG5cdFx0XHR9XG5cdFx0XHQvLyBpZiAoT2JqZWN0LmtleXMocGxhbikubGVuZ3RoID4gMCkge1xuXHRcdFx0Ly8gXHRsZWFkX2RhdGEgPSBwYXJzZWRcblx0XHRcdC8vIFx0dGhpcy5wcm9wcy5nZW5lcmF0ZUluc3VyYW5jZUxlYWQocGxhbi5pZCwgcGhvbmVOdW1iZXIsbGVhZF9kYXRhLHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbilcblx0XHRcdC8vIH1cblx0XHRcdHByb2ZpbGVMZW5ndGggPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aFxuXHRcdFx0bWVtYmVyU3RvcmVEYXRhTGVuZ3RoID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzKS5sZW5ndGhcblx0XHRcdGlmIChwcm9maWxlTGVuZ3RoID4gMCAmJiBtZW1iZXJTdG9yZURhdGFMZW5ndGggPiAwKSB7XG5cdFx0XHRcdE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuc2VsZl9kYXRhX3ZhbHVlcykubWFwKGZ1bmN0aW9uIChba2V5LCBzZWxmX2RhdGFfdmFsdWVzXSkge1xuXHRcdFx0XHRcdE9iamVjdC5lbnRyaWVzKHNlbGYucHJvcHMuVVNFUi5wcm9maWxlcykubWFwKGZ1bmN0aW9uIChbaywgcHJvZmlsZXNdKSB7XG5cdFx0XHRcdFx0XHRpZiAoc2VsZl9kYXRhX3ZhbHVlcy5pZCA9PSBwcm9maWxlcy5pZCkge1xuXHRcdFx0XHRcdFx0XHRtZW1iZXJzQXJyYXkucHVzaChzZWxmX2RhdGFfdmFsdWVzKVxuXHRcdFx0XHRcdFx0XHRwcm9maWxlc0FycmF5LnB1c2gocHJvZmlsZXMpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHRcdFx0aWYgKG1lbWJlcnNBcnJheS5sZW5ndGggPT0gcHJvZmlsZXNBcnJheS5sZW5ndGgpIHtcblx0XHRcdFx0XHRPYmplY3QuZW50cmllcyhtZW1iZXJzQXJyYXkpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVzXSkge1xuXHRcdFx0XHRcdFx0aWYgKG1lbWJlcnNBcnJheVtrZXldLmlkID09IHByb2ZpbGVzQXJyYXlba2V5XS5pZCkge1xuXHRcdFx0XHRcdFx0XHRsZXQgbWVtYmVyTmV3ZGF0YSA9IHZhbHVlc1xuXHRcdFx0XHRcdFx0XHRsZXQgbmV3TmFtZSA9IHByb2ZpbGVzQXJyYXlba2V5XS5uYW1lLnNwbGl0KFwiIFwiKVxuXHRcdFx0XHRcdFx0XHRpZiAobmV3TmFtZS5sZW5ndGggPT0gMykge1xuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEubmFtZSA9IG5ld05hbWVbMF1cblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLm1pZGRsZV9uYW1lID0gbmV3TmFtZVsxXVxuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEubGFzdF9uYW1lID0gbmV3TmFtZVsyXVxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG5ld05hbWUubGVuZ3RoID09IDIpIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLm5hbWUgPSBuZXdOYW1lWzBdXG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5sYXN0X25hbWUgPSBuZXdOYW1lWzFdXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0bWVtYmVyTmV3ZGF0YS5uYW1lID0gbmV3TmFtZVswXVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChtZW1iZXJzQXJyYXlba2V5XS5lbWFpbCAhPSAnJykge1xuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEuZW1haWwgPSBtZW1iZXJzQXJyYXlba2V5XS5lbWFpbFxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEuZW1haWwgPSBwcm9maWxlc0FycmF5W2tleV0uZW1haWxcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmIChtZW1iZXJzQXJyYXlba2V5XS5kb2IgIT0gbnVsbCB8fCBtZW1iZXJzQXJyYXlba2V5XS5kb2IgIT0gJycpIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmRvYiA9IG1lbWJlcnNBcnJheVtrZXldLmRvYlxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEuZG9iID0gcHJvZmlsZXNBcnJheVtrZXldLmRvYlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmIChtZW1iZXJzQXJyYXlba2V5XS5nZW5kZXIgIT0gJycpIHtcblx0XHRcdFx0XHRcdFx0XHRtZW1iZXJOZXdkYXRhLmdlbmRlciA9IG1lbWJlcnNBcnJheVtrZXldLmdlbmRlclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdG1lbWJlck5ld2RhdGEuZ2VuZGVyID0gcHJvZmlsZXNBcnJheVtrZXldLmdlbmRlclxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHNlbGYucHJvcHMudXNlckRhdGEoJ21lbWJlck5ld2RhdGEnLCBtZW1iZXJOZXdkYXRhKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXVzZXItZGV0YWlscycpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXVzZXItZGV0YWlscycpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS11c2VyLWRldGFpbHMnKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiB0cnVlIH0pXG5cdFx0fVxuXHR9XG5cblx0cHJvY2VlZExlYWQodHlwZSkge1xuXHRcdGlmKCF0aGlzLnN0YXRlLmNoZWNrSWRsZVRpbWVvdXQpe1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSW5zdXJhbmNlTG9naW5Qb3B1cCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnSW5zdXJhbmNlLWxvZ2luLXBvcHVwLWNsaWNrJywgJ2NsaWNrX3ZhbHVlJzogJ3VzZXJDbGljaycsIHR5cGU6dHlwZVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7cG9wdXBDbGFzczogJycsIG92ZXJsYXlDbGFzczogJyd9KVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGlzTGVhZDogdHlwZSwgc2hvd1BvcHVwOiB0cnVlLCBpZGVudGlmeVVzZXJDbGljazondXNlckNsaWNrJyB9KVxuXHR9XG5cblx0Y2xvc2VMZWFkUG9wdXAoKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiBmYWxzZSB9KVxuXHR9XG5cblx0aGlkZUxvZ2luUG9wdXAoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzaG93UG9wdXA6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRzaG9ydGVuVXJsKCkge1xuXHRcdGlmICh3aW5kb3cpIHtcblx0XHRcdGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiArICcmZm9yY2VfbG9jYXRpb249dHJ1ZSdcblx0XHRcdHRoaXMucHJvcHMudXJsU2hvcnRuZXIodXJsLCAoZXJyLCBkYXRhKSA9PiB7XG5cdFx0XHRcdGlmICghZXJyKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBkYXRhLnRpbnlfdXJsIH0pXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRpZiAodGhpcy5wcm9wcy5MT0FEX0lOU1VSQU5DRSkge1xuXHRcdFx0bGV0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXHRcdFx0XHRcdDxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9Lz5cblx0XHRcdFx0XHQ8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICBcdGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0vaW5zdXJhbmNlL2luc3VyYW5jZS12aWV3YCxcbiAgICAgICAgICAgICAgICAgICAgXHR0aXRsZTogJ09QRCBJbnN1cmFuY2UgfCBCdXkgT1BEIEluc3VyYW5jZSBDb3ZlciB8IE9QRCBDb3ZlcicsXG4gICAgICAgICAgICAgICAgICAgIFx0ZGVzY3JpcHRpb246ICdPUEQgSW5zdXJhbmNlOiBCdXkgT1BEIGluc3VyYW5jZSBjb3ZlciAmIGdldCBjYXNobGVzcyBiZW5lZml0cyBvbiBsYWIgdGVzdHMgJiBkb2N0b3IgY29uc3VsdGF0aW9uIHdpdGggYSBuZXR3b3JrIG9mIG92ZXIgMTUwMDAgZG9jdG9ycyBhbmQgMjAwMCBsYWJzLidcbiAgICAgICAgICAgICAgICBcdH19IG5vSW5kZXg9e2ZhbHNlfSAvPiAgICAgICAgICAgICAgICBcblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW4gY2FyZE1haW5QYWRkaW5nUm12XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIGRza3RwLXJvdy1ndXR0ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgaW5zLW1haW4tcGFkZGluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtYm9vay1zY3JlZW5cIiBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZSd9fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKjxkaXY+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLnNob3J0ZW5VcmwuYmluZCh0aGlzKX0+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy91cmwtc2hvcnQuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiA4MCB9fSAvPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8L2Rpdj4qL1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuc2hvcnRVUkwgPyA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlTGlua3BvcHVwT3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogXCJcIiB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaGFyZUxpbmtwb3B1cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD57dGhpcy5zdGF0ZS5zaG9ydFVSTH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dGhpcy5zdGF0ZS5zaG9ydFVSTH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNvcHk9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTaG9ydGVuZWQgVVJMIENvcGllZC5cIiB9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogXCJcIiB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNocmVsaW5rQnRuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uPkNvcHk8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQ29weVRvQ2xpcGJvYXJkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+IDogXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnN1ckNvbW1vbiB7Li4udGhpcy5wcm9wc30gaXNTZWxlY3RQbGFuPXt0cnVlfSBpc19jaGVja2VkPXt0aGlzLnN0YXRlLmlzX2NoZWNrZWR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiBjb3ZlcmFnZSBsaXN0aW5nICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcnQtMjBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvdmVyYWdlLWxpc3QtY29udGFpbmVyIGJvcmRlci1iZy10cmFuc3ByYW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWQgaW5zdXJhbmNlLXRibCBpbnN1cmFuY2UtY2hlY2tib3hlc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInRibC1maXJzdC1oZWFkXCI+PHA+Q292ZXJhZ2UgKDEgWWVhcik8L3A+PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJ0Ymwtc2Vjb25kLWhlYWRcIj48cD5Bbm51YWwgUHJlbWl1bTwvcD48L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLnBsYW5zLm1hcCgocmVzdWx0LCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8dHIgaWQ9e3Jlc3VsdC5pZH0ga2V5PXtpfSBvbkNsaWNrPXt0aGlzLnNlbGVjdFBsYW4uYmluZCh0aGlzLCByZXN1bHQpfSByZWY9e3Jlc3VsdC5hZHVsdF9jb3VudCA9PSAyICYmIHJlc3VsdC5jaGlsZF9jb3VudCA9PSAyID8gKGlucHV0KSA9PiB7IHRoaXMudGV4dElucHV0ID0gaW5wdXQgfSA6ICdyZWZfMCd9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIiBodG1sZm9ybT17aX0gPntyZXN1bHQubmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJnZW5kZXJcIiBpZD17aX0gdmFsdWU9e2l9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuaXNfY2hlY2tlZCA/IHRoaXMuc3RhdGUuaXNfY2hlY2tlZCA9PT0gcmVzdWx0LmlkIDogcmVzdWx0LmlzX3NlbGVjdGVkfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD48c3Bhbj7igrkge3Jlc3VsdC5hbW91bnR9PC9zcGFuPjwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogY292ZXJhZ2UgbGlzdGluZyAqL31cdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3twb3NpdGlvbjonYWJzb2x1dGUnLCBib3R0b206Jy00MHB4JywgcmlnaHQ6JzE1cHgnfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiZnctNTAwXCIgaHJlZj1cIi90ZXJtc1wiIHN0eWxlPXt7Y29sb3I6XCIjZjc4NjMxXCJ9fSBvbkNsaWNrPXsoZSkgPT4ge2UucHJldmVudERlZmF1dCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy90ZXJtcycpfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRXZWJzaXRlIFQmQyBBcHBseTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9zZWN0aW9uPlxuXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93UG9wdXAgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PEluc3VyUG9wdXAgey4uLnRoaXMucHJvcHN9IHNlbGVjdGVkX3BsYW49e3RoaXMuc3RhdGUuc2VsZWN0ZWRfcGxhbl9kYXRhfSBoaWRlTG9naW5Qb3B1cD17dGhpcy5oaWRlTG9naW5Qb3B1cC5iaW5kKHRoaXMpfSBpc0xlYWQ9e3RoaXMuc3RhdGUuaXNMZWFkfSBjbG9zZUxlYWRQb3B1cD17dGhpcy5jbG9zZUxlYWRQb3B1cC5iaW5kKHRoaXMpfSBwb3B1cENsYXNzPXt0aGlzLnN0YXRlLnBvcHVwQ2xhc3N9IG92ZXJsYXlDbGFzcz17dGhpcy5zdGF0ZS5vdmVybGF5Q2xhc3N9IGlkZW50aWZ5VXNlckNsaWNrPXt0aGlzLnN0YXRlLmlkZW50aWZ5VXNlckNsaWNrfS8+IDogJydcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0cGFyc2VkLnNob3dfYnV0dG9uP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGlja3ktYnRuIGZpeGVkIGluc3VCdG5zQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpbnN1LWxlZnQtd2hpdGUtYnRuXCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSl9PkJhY2sgdG8gQm9va2luZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNUT1JBR0UuY2hlY2tBdXRoKCk/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImluc3UtcmlnaHQtb3JuZy1idG5cIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRQbGFuLmJpbmQodGhpcyl9PlByb2NlZWQge3RoaXMuc3RhdGUuc2VsZWN0ZWRfcGxhbl9wcmljZX0gPHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj57dGhpcy5zdGF0ZS5nc3R9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImluc3UtcmlnaHQtb3JuZy1idG5cIiBpZD1cInByb2NlZWRMZWFkXCIgb25DbGljaz17dGhpcy5wcm9jZWVkTGVhZC5iaW5kKHRoaXMsICdwcm9jZWVkJyl9PlByb2NlZWQge3RoaXMuc3RhdGUuc2VsZWN0ZWRfcGxhbl9wcmljZX0gPHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj57dGhpcy5zdGF0ZS5nc3R9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHRcblx0XHRcdFx0XHRcdFx0XHRcdDpTVE9SQUdFLmNoZWNrQXV0aCgpP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGlja3ktYnRuXCIgb25DbGljaz17dGhpcy5wcm9jZWVkUGxhbi5iaW5kKHRoaXMpfT5Qcm9jZWVkIHt0aGlzLnN0YXRlLnNlbGVjdGVkX3BsYW5fcHJpY2V9IDxzcGFuIGNsYXNzTmFtZT1cImZvb3QtYnRuLXN1Yi1zcGFuXCI+e3RoaXMuc3RhdGUuZ3N0fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGlja3ktYnRuIGZpeGVkIGluc3VCdG5zQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpbnN1LWxlZnQtd2hpdGUtYnRuXCIgaWQ9XCJwcm9jZWVkTGVhZFwiIG9uQ2xpY2s9e3RoaXMucHJvY2VlZExlYWQuYmluZCh0aGlzLCAnaW50ZXJlc3QnKX0+Q2xpY2sgaGVyZSB0byBrbm93IG1vcmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImluc3UtcmlnaHQtb3JuZy1idG5cIiBvbkNsaWNrPXt0aGlzLnByb2NlZWRMZWFkLmJpbmQodGhpcywgJ3Byb2NlZWQnKX0+UHJvY2VlZCB7dGhpcy5zdGF0ZS5zZWxlY3RlZF9wbGFuX3ByaWNlfSA8c3BhbiBjbGFzc05hbWU9XCJmb290LWJ0bi1zdWItc3BhblwiPnt0aGlzLnN0YXRlLmdzdH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PENoYXRQYW5lbCAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdFx0Ly8gZWxzZXtcblx0XHQvLyBcdGlmKHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YS5jZXJ0aWZpY2F0ZSl7XG5cdFx0Ly8gXHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2NlcnRpZmljYXRlJylcblx0XHQvLyBcdH1cblx0XHQvLyBcdHJldHVybihcblx0XHQvLyBcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cblx0XHQvLyAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cblx0XHQvLyBcdFx0PExvYWRlciAvPlxuXHRcdC8vIFx0PC9kaXY+XG5cdFx0Ly8gXHQpXG5cdFx0Ly8gfVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3VyYW5jZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IGdldEluc3VyYW5jZSwgc2VsZWN0SW5zdXJhbmNlUGxhbiAsIHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzLHJlc2V0U2VsZWN0ZWRJbnN1cmFuY2VNZW1iZXJzLHJlc2V0U2VsZWN0ZWRQbGFucyxzZW5kT1RQLCBzdWJtaXRPVFAsIHJlc2V0QXV0aCwgZ2V0VXNlclByb2ZpbGUsIHVzZXJEYXRhLCBnZW5lcmF0ZUluc3VyYW5jZUxlYWQsIHVybFNob3J0bmVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBJbnN1cmFuY2VDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlVmlldy5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIEluc3VyYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIHNob3dJbnN1cmFuY2VWaWV3OmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKCkgLy8gdG8gZ2V0IGxvZ2dlZEluIHVzZXIgcHJvZmlsZVxuICAgICAgICB9XG4gICAgICAgIC8qdGhpcy5wcm9wcy5nZXRJbnN1cmFuY2UocmVzcD0+e1xuICAgICAgICAgICAgaWYoIXJlc3AuY2VydGlmaWNhdGUpe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2VuZXJhdGVJbnN1cmFuY2VMZWFkKCcnLHBob25lTnVtYmVyLGxlYWRfZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkqL1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmdldEluc3VyYW5jZShmYWxzZSkgLy8gdG8gZ2V0IGluc3VyYW5jZSBwbGFuc1xuICAgIH1cblx0cmVuZGVyKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuTE9BRF9JTlNVUkFOQ0Upe1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxJbnN1cmFuY2VDb21wb25lbnQgey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLmluc3VybmFjZURhdGEuY2VydGlmaWNhdGUgJiYgU1RPUkFHRS5jaGVja0F1dGgoKSl7IC8vIGlmIHVzZXIgaXMgYWxyZWFkeSBhbiBpbnN1cmFuY2UgY3VzdG9tZXIgc28gcmVkaXJlY3Qgb24gaW5zdXJlZCBkYXNoYm9hcmQgcGFnZVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2NlcnRpZmljYXRlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybihcbiAgICAgICAgLy8gICAgICAgICA8SW5zdXJhbmNlQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfS8+XG4gICAgICAgIC8vICAgICApXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyBpbnN1cm5hY2VEYXRhLCBMT0FEX0lOU1VSQU5DRSwgc2VsZWN0ZWRfcGxhbixzZWxmX2RhdGFfdmFsdWVzfSA9IHN0YXRlLklOU1VSQU5DRVxuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvblxuXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnN1cm5hY2VEYXRhLExPQURfSU5TVVJBTkNFLHNlbGVjdGVkX3BsYW4sc2VsZl9kYXRhX3ZhbHVlcyxVU0VSLCBzZWxlY3RlZExvY2F0aW9uXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJbnN1cmFuY2U6IChpc19lbmRvcnNlbWVudCxjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0SW5zdXJhbmNlKGlzX2VuZG9yc2VtZW50LGNhbGxiYWNrKSksXG4gICAgICAgIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKSxcbiAgICAgICAgc2VsZWN0SW5zdXJhbmNlUGxhbjogKHBsYW4sY3JpdGVyaWEpID0+IGRpc3BhdGNoKHNlbGVjdEluc3VyYW5jZVBsYW4ocGxhbixjcml0ZXJpYSkpLFxuICAgICAgICAvLyBzYXZlQ3VycmVudFNlbGVjdGVkTWVtYmVyczogKG1lbWJlcnNJZCkgPT4gZGlzcGF0Y2goc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnMobWVtYmVyc0lkKSksXG4gICAgICAgIHJlc2V0U2VsZWN0ZWRQbGFuczogKCkgPT4gZGlzcGF0Y2gocmVzZXRTZWxlY3RlZFBsYW5zKCkpLFxuICAgICAgICBzZW5kT1RQOiAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSA9PiBkaXNwYXRjaChzZW5kT1RQKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikpLFxuICAgICAgICBzdWJtaXRPVFA6IChudW1iZXIsIG90cCwgZXh0cmFQYXJhbXNEYXRhLCBjYikgPT4gZGlzcGF0Y2goc3VibWl0T1RQKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsIGNiKSksXG4gICAgICAgIHJlc2V0QXV0aDogKCkgPT4gZGlzcGF0Y2gocmVzZXRBdXRoKCkpLFxuICAgICAgICB1c2VyRGF0YSA6KHNlbGZfZGF0YSxjcml0ZXJpYSxmb3JjZWFkZCkgPT4gZGlzcGF0Y2godXNlckRhdGEoc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSksXG4gICAgICAgIGdlbmVyYXRlSW5zdXJhbmNlTGVhZDooc2VsZWN0ZWRQbGFuLG51bWJlcixsZWFkX2RhdGEsY2IpID0+IGRpc3BhdGNoKGdlbmVyYXRlSW5zdXJhbmNlTGVhZChzZWxlY3RlZFBsYW4sbnVtYmVyLGxlYWRfZGF0YSxjYikpLFxuICAgICAgICB1cmxTaG9ydG5lcjogKHVybCwgY2IpID0+IGRpc3BhdGNoKHVybFNob3J0bmVyKHVybCwgY2IpKSxcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyAsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5zdXJhbmNlKSJdLCJzb3VyY2VSb290IjoiIn0=