exports.ids = [14];
exports.modules = {

/***/ "./dev/js/components/commons/Loader/Loader.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/Loader/Loader.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Loader extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(
            "div",
            { className: this.props.classType || "loaderCircular" },
            _react2.default.createElement("div", { className: "dp-loader" }),
            this.props.iFramePopup ? _react2.default.createElement(
                "p",
                { className: "fw-500 mrt-10" },
                "Redirecting you to Pharmeasy website..."
            ) : ''
        );
    }
}

exports.default = Loader;

/***/ }),

/***/ "./dev/js/components/commons/Loader/index.js":
/*!***************************************************!*\
  !*** ./dev/js/components/commons/Loader/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = __webpack_require__(/*! ./Loader */ "./dev/js/components/commons/Loader/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loader2.default;

/***/ }),

/***/ "./dev/js/components/insurance/insuranceCommonSection.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/insurance/insuranceCommonSection.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceCommon extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedProfile: '',
			selected_plan_price: '',
			toggle: 'one'

		};
	}
	componentDidMount() {
		let self = this;
		this.setState(_extends({ selectedProfile: this.props.USER.defaultProfile, selected_plan_price: this.props.selected_plan.amount }, self.props.self_data_values[this.props.USER.defaultProfile]));
	}
	render() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'div',
				{ className: 'widget mrb-10' },
				_react2.default.createElement(
					'div',
					{ className: 'ins-card-head' },
					_react2.default.createElement(
						'div',
						{ className: 'ins-name-head-div d-flex align-items-start' },
						_react2.default.createElement('img', { width: '120', src: this.props.insurnaceData['insurance'][0].logo }),
						_react2.default.createElement(
							'p',
							{ className: 'fw-500 mrt-10' },
							'Group Out-patient Insurance'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'ins-pdf-dwnload-div d-flex align-items-center' },
						_react2.default.createElement(
							'a',
							{ href: this.props.insurnaceData['insurance'][0].insurer_document, download: true, target: '_blank' },
							_react2.default.createElement('img', { src: "/assets" + "/img/pdf-dwn.png" })
						),
						_react2.default.createElement(
							'span',
							{ className: 'fw-500' },
							'Policy Details'
						)
					)
				),
				!this.props.isSelectPlan ? _react2.default.createElement(
					'div',
					{ className: 'mt-0', style: { padding: '0 4px 10px' } },
					_react2.default.createElement(
						'div',
						{ className: 'd-flex align-items-start' },
						_react2.default.createElement(
							'div',
							{ className: 'd-flex ins-form-info align-items-center text-center' },
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 mrb-10' },
								'Coverage (1 Year)'
							),
							_react2.default.createElement(
								'p',
								{ className: 'fw-500' },
								this.props.selected_plan.name
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'd-flex ins-form-info align-items-center text-center' },
							_react2.default.createElement(
								'p',
								{ className: 'fw-500 mrb-10' },
								'Annual Premium'
							),
							_react2.default.createElement(
								'p',
								{ className: 'fw-500' },
								'\u20B9 ',
								this.props.selected_plan.amount
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'mrt-10', style: { cursor: 'pointer', paddingLeft: 5 }, onClick: () => {
								this.props.is_edit ? this.props.history.push('/insurance/insurance-plan-view') : this.props.history.push('/insurance/insurance-user-details');
							} },
						_react2.default.createElement(
							'p',
							{ className: 'fw-500 text-primary' },
							this.props.is_edit ? 'Select another plan' : 'Edit'
						)
					)
				) : ''
				// <table className="table table-bordered insurance-tbl insurance-checkboxes">
				// 	<thead>
				// 		<tr>
				// 			<th className="tbl-first-head"><p>Coverage (1 Year)</p></th>
				// 			<th className="tbl-second-head"><p>Annual Premium</p></th>
				// 		</tr>
				// 	</thead>
				// 	<tbody>
				// 		<tr>
				// 			<td><p className="ins-dtls-members-edit">{this.props.is_edit?'Change Insured Plan':'Insured Member Details'}   
				// 			<span style={{ 'cursor': 'pointer' }} onClick={()=>{this.props.is_edit?this.props.history.push('/insurance/insurance-plans'):this.props.history.push('/insurance/insurance-user-details')}}>EDIT
				// 			</span></p></td>
				// 			<td></td>
				// 		</tr>
				// 		<tr>
				// 			<td>
				// 				<label className="ck-bx" htmlform="test11" style={{'fontWeight': '400', 'fontSsize': '14'}}>{this.props.selected_plan.name}
				// 				<input type="checkbox" defaultChecked className="ins-chk-bx" value="" id="test11" name="fruit-1" />
				// 				<span className="checkmark"></span></label>
				// 			</td>

				// 			<td><span>₹ {this.props.selected_plan.amount}</span></td>
				// 		</tr>
				// 	</tbody>
				// </table>

			),
			_react2.default.createElement(
				'div',
				{ className: 'ins-status-container' },
				_react2.default.createElement(
					'div',
					{ className: 'navigation_menu', id: '' },
					_react2.default.createElement(
						'ul',
						{ className: 'navigation_tabs', id: '' },
						_react2.default.createElement(
							'li',
							{ className: 'tab_inactive' },
							_react2.default.createElement(
								'a',
								{ href: '#' },
								'Choose Your Plan'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: this.props.isSelectPlan ? '' : 'tab_inactive' },
							_react2.default.createElement(
								'a',
								{ href: '#' },
								'Fill Member Details'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: 'tab_disabled' },
							_react2.default.createElement(
								'a',
								{ href: '#' },
								'Payment'
							)
						)
					)
				)
			)
		);
	}
}
exports.default = InsuranceCommon;

/***/ }),

/***/ "./dev/js/components/insurance/insurancePopup.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/insurance/insurancePopup.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class InsurancePopup extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_id: '',
            newprofile: {},
            phoneNumber: '',
            validationError: '',
            showOTP: false,
            otp: "",
            otpTimeout: false,
            error_message: '',
            isLeadTrue: false,
            smsBtnType: null,
            selectedProfileAge: '',
            age: '',
            enableOtpRequest: false
        };
    }
    handleChange(profileid, newProfile, selectedProfileAge, event) {
        let newProfileNames = {};
        let newName = newProfile.name.split(" ");
        let tempArray;
        if (newName.length == 2) {
            newProfileNames.name = newName[0];
            if (!this.props.self_data_values.no_lname) {
                newProfileNames.middle_name = '';
                newProfileNames.last_name = newName[1];
            } else {
                newProfileNames.middle_name = '';
                newProfileNames.last_name = '';
            }
        } else if (newName.length == 3) {
            newProfileNames.name = newName[0];
            if (!this.props.self_data_values.no_lname) {
                newProfileNames.middle_name = newName[1];
                newProfileNames.last_name = newName[2];
            } else {
                newProfileNames.middle_name = '';
                newProfileNames.last_name = '';
            }
        } else if (newName.length > 3) {
            tempArray = newName.slice(2, newName.length);
            newProfileNames.name = newName[0];
            if (!this.props.self_data_values.no_lname) {
                newProfileNames.middle_name = newName[1];
                newProfileNames.last_name = tempArray.join(' ');
            } else {
                newProfileNames.middle_name = '';
                newProfileNames.last_name = '';
            }
        } else {
            newProfileNames.name = newName[0];
            if (!this.props.self_data_values.no_lname) {
                newProfileNames.middle_name = '';
                newProfileNames.last_name = '';
            } else {
                newProfileNames.middle_name = '';
                newProfileNames.last_name = '';
            }
        }
        let exactProfile = _extends({}, newProfile, newProfileNames);
        if (this.props.is_child_only) {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;
            var startDate = Date.parse(today);
            var endDate = Date.parse(newProfile.dob);
            var timeDiff = startDate - endDate;
            let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            this.setState({ profile_id: profileid, newprofile: exactProfile, selectedProfileAge: daysDiff, age: newProfile.age });
        } else {
            this.setState({ profile_id: profileid, newprofile: exactProfile, selectedProfileAge: selectedProfileAge, age: newProfile.age });
        }
    }
    inputHandler(e) {
        if (this.state.showOTP && e.target.name == 'phoneNumber') {
            this.setState({ [e.target.name]: e.target.value, validationError: "", showOTP: false, otp: "" });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    submitOTPRequest(number, resendFlag = false, viaSms, viaWhatsapp, fromPopup = null) {
        // to generate otp
        let lead_data = queryString.parse(this.props.location.search);
        if (number.match(/^[56789]{1}[0-9]{9}$/)) {
            this.setState({ validationError: "" });
            this.props.sendOTP(number, viaSms, viaWhatsapp, 'insurance-login', error => {
                if (error) {
                    // this.setState({ validationError: "Could not generate OTP." })
                } else {
                    if (Object.keys(this.props.selected_plan).length > 0) {
                        this.props.generateInsuranceLead(this.props.selected_plan ? this.props.selected_plan.id : '', this.state.phoneNumber, lead_data); // to create insurance lead for matrix
                    }
                    let data = {
                        'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopupContinue', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'Insurance-login-popup-continue-click', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : '', 'mobileNo': this.state.phoneNumber
                    };
                    _gtm2.default.sendEvent({ data: data });
                    if (viaWhatsapp) {
                        this.setState({ enableOtpRequest: true });
                    } else {
                        this.setState({ enableOtpRequest: false });
                    }
                    this.setState({ showOTP: true, otpTimeout: true, smsBtnType: viaSms ? true : false });
                    setTimeout(() => {
                        this.setState({ otpTimeout: false });
                    }, 20000);
                    setTimeout(() => {
                        this.setState({ enableOtpRequest: false });
                    }, 60000);

                    if (fromPopup && document.getElementsByClassName('ins-form-slider')) {
                        if (fromPopup == 'one') {
                            document.getElementsByClassName('ins-form-slider')[0].scroll({ left: 999, behavior: 'smooth' });
                        } else {
                            document.getElementsByClassName('ins-form-slider')[0].scroll({ left: -999, behavior: 'smooth' });
                        }
                    }
                }
            });
        } else {
            this.setState({ validationError: "Please provide a valid number (10 digits)" });
        }
    }

    verifyOTP() {
        //verify user entered otp
        let parsed = queryString.parse(this.props.location.search);
        let self = this;
        if (!this.state.otp) {
            this.setState({ validationError: "Please enter OTP" });
            return;
        }
        if (this.state.otp.length < 6 || this.state.otp.length > 6) {
            this.setState({ validationError: "Please enter valid OTP" });
            return;
        }
        let lead_data = parsed;
        if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
            this.setState({ validationError: "" });
            let extraParamsData = {};
            this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParamsData, exists => {
                // to verify user entered otp
                if (exists.code == 'invalid') {
                    this.setState({ error_message: exists.message });
                } else {
                    if (exists.token) {
                        let data = {
                            'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopupOptVerified', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'Insurance-login-popup-opt-verified'
                        };
                        _gtm2.default.sendEvent({ data: data });
                        if (Object.keys(self.props.selected_plan).length > 0) {
                            self.props.generateInsuranceLead(self.props.selected_plan ? self.props.selected_plan.id : '', this.state.phoneNumber, lead_data, this.props.selectedLocation); // to create insurance lead for matrix
                        }
                        this.props.getInsurance(false, resp => {
                            // to get insurance plans
                            if (!resp.certificate) {
                                if (this.props.isLead == 'proceed') {
                                    if (exists.user_exists) {
                                        // if (this.props.identifyUserClick == 'userClick') {
                                        //     this.props.history.push('/insurance/insurance-user-details')
                                        // } else {
                                        //     this.props.closeLeadPopup()
                                        // }
                                        this.props.closeLeadPopup(); // to close lead form
                                        this.props.history.push('/insurance/insurance-plan-view');
                                    } else {
                                        // if (this.props.identifyUserClick == 'userClick') {
                                        //     this.props.history.push('/insurance/insurance-user-details')
                                        // } else {
                                        //     this.props.closeLeadPopup()
                                        // }
                                        this.props.closeLeadPopup(); // to close lead form
                                        this.props.history.push('/insurance/insurance-plan-view');
                                    }
                                } else {
                                    self.setState({ isLeadTrue: true });
                                    // if(document.getElementById('terms_condition')){
                                    //     document.getElementById('terms_condition').click()
                                    // }
                                }
                            }
                        });
                    }
                }
            });
        } else {
            this.setState({ validationError: "Please provide a valid number (10 digits)" });
        }
    }

    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.verifyOTP(); // to verify user entered otp
        }
    }

    _handleContinuePress(e) {
        if (e.key === 'Enter') {
            if (!this.state.showOTP) {
                this.submitOTPRequest(this.state.phoneNumber, '', true, false, 'one');
            }
        }
    }

    editNumber() {
        let number = this.state.phoneNumber;

        document.getElementsByClassName('ins-form-slider')[0].scroll({ left: -999, behavior: 'smooth' });

        setTimeout(() => {
            this.setState({ validationError: "", showOTP: false, otp: "", phoneNumber: '' }, () => {
                this.setState({ phoneNumber: number });
                document.getElementById("number").focus();
            });
        }, 200);
    }
    closeSelectFromProfile() {
        let threshold_max_age;
        let threshold_min_age;
        let errorMessage;

        if (this.props.selected_plan && this.props.selected_plan.threshold && this.props.selected_plan.threshold[0]) {
            if (this.props.is_child_only) {
                threshold_max_age = this.props.selected_plan.threshold[0].child_max_age;
                threshold_min_age = this.props.selected_plan.threshold[0].child_min_age;
                errorMessage = `The age of the selected member should be between ${this.props.selected_plan.threshold[0].child_min_age} days and ${this.props.selected_plan.threshold[0].child_max_age} years`;
            } else {
                threshold_max_age = this.props.selected_plan.threshold[0].max_age;
                threshold_min_age = this.props.selected_plan.threshold[0].min_age;
                errorMessage = `The age of the selected member should be between ${this.props.selected_plan.threshold[0].min_age} and ${this.props.selected_plan.threshold[0].max_age} years`;
            }
        }
        if (this.props.is_child_only) {
            if (this.state.selectedProfileAge > threshold_min_age && this.state.age < threshold_max_age) {
                this.props.closePopup(this.state.profile_id, this.props.member_id, this.state.newprofile);
            } else {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: errorMessage });
            }
        }
        if (!this.props.is_child_only) {
            if (this.state.selectedProfileAge > threshold_min_age && this.state.selectedProfileAge < threshold_max_age) {
                this.props.closePopup(this.state.profile_id, this.props.member_id, this.state.newprofile);
            } else {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: errorMessage });
            }
        }
    }
    render() {
        if (this.props.isSelectprofile) {
            let currentSelectedProfiles = [];
            this.props.currentSelectedInsuredMembersId.map((val, key) => {
                currentSelectedProfiles.push(val[key]);
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { className: 'cancel-overlay cancel-overlay-zindex', onClick: this.props.hideSelectProfilePopup.bind(this) }),
                _react2.default.createElement(
                    'div',
                    { className: 'widget cancel-appointment-div cancel-popup onscreen-scroll' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pop-top-heading' },
                        'My Family',
                        _react2.default.createElement(
                            'span',
                            { className: 'float-right', style: { cursor: 'pointer', marginRight: '10px' }, onClick: this.props.hideSelectProfilePopup.bind(this) },
                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rt-close.svg", style: { width: 14 } })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'widget-header action-screen-header pop-padding' },
                        _react2.default.createElement('p', { className: 'fw-500 cancel-appointment-head' })
                    ),
                    _react2.default.createElement('div', { className: 'terms-condition-div onscreen-scroll' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'ins-form-radio insradio-on-popup' },
                            Object.entries(this.props.profiles).map(function ([key, value]) {
                                if (currentSelectedProfiles.indexOf(parseInt(key)) == -1) {
                                    return _react2.default.createElement(
                                        'div',
                                        { key: key, className: 'dtl-radio' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'container-radio' },
                                            value.name,
                                            _react2.default.createElement('input', { type: 'radio', name: 'profile_id', value: '', id: key, 'data-param': 'profile_id', checked: this.state.profile_id === value.id, onChange: this.handleChange.bind(this, value.id, value, value.age) }),
                                            _react2.default.createElement('span', { className: 'doc-checkmark' })
                                        )
                                    );
                                }
                            }, this)
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'procedures-btn-pop', onClick: this.closeSelectFromProfile.bind(this) },
                        _react2.default.createElement(
                            'button',
                            { className: this.state.profile_id == '' ? 'fw-500 btn-disabled' : 'fw-500', disabled: this.state.profile_id == '' ? 'disabled' : '' },
                            'Done'
                        )
                    )
                )
            );
        } else {
            return _react2.default.createElement(
                'div',
                { className: 'col-12 col-md-7  center-column' },
                _react2.default.createElement('div', { className: `cancel-overlay cancel-overlay-zindex ${this.props.overlayClass}`, onClick: this.props.hideLoginPopup.bind(this) }),
                _react2.default.createElement(
                    'section',
                    { className: 'mobile-verification-screen p-3' },
                    this.state.isLeadTrue ? _react2.default.createElement(
                        'div',
                        { className: 'insu-popup-container', onClick: this.props.closeLeadPopup.bind(this) },
                        _react2.default.createElement(
                            'div',
                            { className: 'insu-pop-up' },
                            _react2.default.createElement('img', { className: 'insPopUp', src: "/assets" + "/img/tec.svg" }),
                            _react2.default.createElement(
                                'p',
                                { className: 'ins-main-pera-text' },
                                'Request Submitted'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'ins-main-pera-sub-text' },
                                'Thank you for showing interest in OPD Insurance. Our customer service executive will give you a call from 0124-6073XXX.'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'insupopdonebtn', onClick: this.props.closeLeadPopup.bind(this) },
                                'Done'
                            )
                        )
                    ) : _react2.default.createElement(
                        'div',
                        { className: `widget no-shadow no-round sign-up-container widget cancel-appointment-div cancel-popup ${this.props.popupClass}` },
                        _react2.default.createElement(
                            'span',
                            { className: 'float-right', style: { cursor: 'pointer' }, onClick: this.props.hideLoginPopup.bind(this) },
                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rt-close.svg", style: { width: 14 } })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ins-form-slider' },
                            _react2.default.createElement(
                                'div',
                                { className: 'one' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget-header text-center mv-header' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'fw-500 text-md sign-up-mbl-text', style: this.props.popupClass != '' ? { color: '#fff' } : {} },
                                        'Sounds too good to be true !! But it is ! Only docprime members get to access'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget-content text-center' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group mobile-field sup-input-pdng' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'adon-group enter-mobile-number' },
                                            _react2.default.createElement('input', { type: 'number', id: 'number', className: 'fc-input text-center', placeholder: '10 digit mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this), disabled: this.state.showOTP ? true : false })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'errorMessage m-0 mb-2' },
                                        this.state.error_message
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'errorMessage m-0 mb-2' },
                                        this.state.validationError
                                    ),
                                    _react2.default.createElement(
                                        _react2.default.Fragment,
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-center' },
                                            _react2.default.createElement(
                                                'button',
                                                { onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, false, true, false, 'one'), disabled: this.props.otp_request_sent, className: 'v-btn v-btn-primary btn-sm lg-sms-btn btn-grdnt' },
                                                'Let\u2019s get you in'
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'two' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget-header text-center mv-header' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'fw-500 text-md sign-up-mbl-text', style: this.props.popupClass != '' ? { color: '#fff' } : {} },
                                        'Enter the OTP we\u2019ve sent to your mobile number'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget-content text-center' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group mobile-field sup-input-pdng' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'adon-group enter-mobile-number' },
                                            _react2.default.createElement('input', { type: 'number', id: 'number', className: 'fc-input text-center', placeholder: '10 digit mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this), disabled: this.state.showOTP ? true : false }),
                                            _react2.default.createElement(
                                                'a',
                                                { className: 'ins-num-edit', onClick: this.editNumber.bind(this) },
                                                'Edit'
                                            )
                                        ),
                                        this.state.showOTP ? _react2.default.createElement(
                                            'div',
                                            { className: 'adon-group enter-mobile-number' },
                                            _react2.default.createElement('br', null),
                                            _react2.default.createElement('br', null),
                                            _react2.default.createElement('input', { type: 'number', className: 'fc-input text-center', placeholder: 'Enter OTP', value: this.state.otp, onChange: this.inputHandler.bind(this), name: 'otp', onKeyPress: this._handleKeyPress.bind(this) }),
                                            this.state.otpTimeout ? "" : _react2.default.createElement(
                                                'div',
                                                { className: 'd-flex align-items-start justify-content-between' },
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'resendOtp', style: { fontSize: '12px' }, onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, true, this.state.smsBtnType ? false : true, !this.state.smsBtnType ? false : true, 'one') },
                                                    this.state.smsBtnType ? 'Prefer we WhatsApp it to you?' : 'Send via SMS'
                                                ),
                                                this.state.enableOtpRequest ? '' : _react2.default.createElement(
                                                    'a',
                                                    { className: 'resendOtp ins-otp-resend', onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, true, this.state.smsBtnType ? true : false, !this.state.smsBtnType ? true : false, 'one') },
                                                    'Resend'
                                                )
                                            )
                                        ) : ""
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'errorMessage m-0 mb-2' },
                                        this.state.error_message
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'errorMessage m-0 mb-2' },
                                        this.state.validationError
                                    ),
                                    this.state.showOTP ? _react2.default.createElement(
                                        'div',
                                        { className: 'text-center' },
                                        _react2.default.createElement(
                                            'button',
                                            { onClick: this.verifyOTP.bind(this), disabled: this.props.submit_otp, className: 'btn-grdnt v-btn v-btn-primary btn-sm' },
                                            'Access Now'
                                        )
                                    ) : _react2.default.createElement(
                                        _react2.default.Fragment,
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-center' },
                                            _react2.default.createElement(
                                                'button',
                                                { onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, false, true, false), disabled: this.props.otp_request_sent, className: 'v-btn v-btn-primary btn-sm lg-sms-btn btn-grdnt' },
                                                'Let\u2019s get you in'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-center fw-500 p-3', style: this.props.popupClass != '' ? { fontSize: 12, color: '#fff' } : { fontSize: 12, color: '#8a8a8a' } },
                            'By proceeding, you hereby agree to the ',
                            _react2.default.createElement(
                                'a',
                                { href: '/terms', target: '_blank', style: { color: `var(--text--primary--color)` } },
                                'End User Agreement'
                            ),
                            ' and ',
                            _react2.default.createElement(
                                'a',
                                { href: '/privacy', target: '_blank', style: { color: `var(--text--primary--color)` } },
                                'Privacy Policy.'
                            )
                        )
                    )
                )
            );
        }
    }
}
exports.default = InsurancePopup;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZUNvbW1vblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZVBvcHVwLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiSW5zdXJhbmNlQ29tbW9uIiwic3RhdGUiLCJzZWxlY3RlZFByb2ZpbGUiLCJzZWxlY3RlZF9wbGFuX3ByaWNlIiwidG9nZ2xlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZWxmIiwic2V0U3RhdGUiLCJVU0VSIiwiZGVmYXVsdFByb2ZpbGUiLCJzZWxlY3RlZF9wbGFuIiwiYW1vdW50Iiwic2VsZl9kYXRhX3ZhbHVlcyIsImluc3VybmFjZURhdGEiLCJsb2dvIiwiaW5zdXJlcl9kb2N1bWVudCIsIkFTU0VUU19CQVNFX1VSTCIsImlzU2VsZWN0UGxhbiIsInBhZGRpbmciLCJuYW1lIiwiY3Vyc29yIiwicGFkZGluZ0xlZnQiLCJpc19lZGl0IiwiaGlzdG9yeSIsInB1c2giLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJJbnN1cmFuY2VQb3B1cCIsInByb2ZpbGVfaWQiLCJuZXdwcm9maWxlIiwicGhvbmVOdW1iZXIiLCJ2YWxpZGF0aW9uRXJyb3IiLCJzaG93T1RQIiwib3RwIiwib3RwVGltZW91dCIsImVycm9yX21lc3NhZ2UiLCJpc0xlYWRUcnVlIiwic21zQnRuVHlwZSIsInNlbGVjdGVkUHJvZmlsZUFnZSIsImFnZSIsImVuYWJsZU90cFJlcXVlc3QiLCJoYW5kbGVDaGFuZ2UiLCJwcm9maWxlaWQiLCJuZXdQcm9maWxlIiwiZXZlbnQiLCJuZXdQcm9maWxlTmFtZXMiLCJuZXdOYW1lIiwic3BsaXQiLCJ0ZW1wQXJyYXkiLCJsZW5ndGgiLCJub19sbmFtZSIsIm1pZGRsZV9uYW1lIiwibGFzdF9uYW1lIiwic2xpY2UiLCJqb2luIiwiZXhhY3RQcm9maWxlIiwiaXNfY2hpbGRfb25seSIsInRvZGF5IiwiRGF0ZSIsImRkIiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInN0YXJ0RGF0ZSIsInBhcnNlIiwiZW5kRGF0ZSIsImRvYiIsInRpbWVEaWZmIiwiZGF5c0RpZmYiLCJNYXRoIiwiZmxvb3IiLCJpbnB1dEhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJtaXRPVFBSZXF1ZXN0IiwibnVtYmVyIiwicmVzZW5kRmxhZyIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwiZnJvbVBvcHVwIiwibGVhZF9kYXRhIiwibG9jYXRpb24iLCJzZWFyY2giLCJtYXRjaCIsInNlbmRPVFAiLCJlcnJvciIsIk9iamVjdCIsImtleXMiLCJnZW5lcmF0ZUluc3VyYW5jZUxlYWQiLCJpZCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2Nyb2xsIiwibGVmdCIsImJlaGF2aW9yIiwidmVyaWZ5T1RQIiwicGFyc2VkIiwiZXh0cmFQYXJhbXNEYXRhIiwic3VibWl0T1RQIiwiZXhpc3RzIiwiY29kZSIsIm1lc3NhZ2UiLCJ0b2tlbiIsInNlbGVjdGVkTG9jYXRpb24iLCJnZXRJbnN1cmFuY2UiLCJyZXNwIiwiY2VydGlmaWNhdGUiLCJpc0xlYWQiLCJ1c2VyX2V4aXN0cyIsImNsb3NlTGVhZFBvcHVwIiwiX2hhbmRsZUtleVByZXNzIiwia2V5IiwiX2hhbmRsZUNvbnRpbnVlUHJlc3MiLCJlZGl0TnVtYmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImNsb3NlU2VsZWN0RnJvbVByb2ZpbGUiLCJ0aHJlc2hvbGRfbWF4X2FnZSIsInRocmVzaG9sZF9taW5fYWdlIiwiZXJyb3JNZXNzYWdlIiwidGhyZXNob2xkIiwiY2hpbGRfbWF4X2FnZSIsImNoaWxkX21pbl9hZ2UiLCJtYXhfYWdlIiwibWluX2FnZSIsImNsb3NlUG9wdXAiLCJtZW1iZXJfaWQiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiaXNTZWxlY3Rwcm9maWxlIiwiY3VycmVudFNlbGVjdGVkUHJvZmlsZXMiLCJjdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkIiwibWFwIiwidmFsIiwiaGlkZVNlbGVjdFByb2ZpbGVQb3B1cCIsImJpbmQiLCJtYXJnaW5SaWdodCIsIndpZHRoIiwiZW50cmllcyIsInByb2ZpbGVzIiwiaW5kZXhPZiIsInBhcnNlSW50Iiwib3ZlcmxheUNsYXNzIiwiaGlkZUxvZ2luUG9wdXAiLCJwb3B1cENsYXNzIiwiY29sb3IiLCJvdHBfcmVxdWVzdF9zZW50IiwiZm9udFNpemUiLCJzdWJtaXRfb3RwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxNQUFNQSxNQUFOLFNBQXFCQyxnQkFBTUMsU0FBM0IsQ0FBcUM7QUFDakNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUVEQyxhQUFTOztBQUVMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVyxLQUFLRCxLQUFMLENBQVdFLFNBQVgsSUFBd0IsZ0JBQXhDO0FBQ0ksbURBQUssV0FBVSxXQUFmLEdBREo7QUFHUSxpQkFBS0YsS0FBTCxDQUFXRyxXQUFYLEdBQ0k7QUFBQTtBQUFBLGtCQUFHLFdBQVUsZUFBYjtBQUFBO0FBQUEsYUFESixHQUMrRTtBQUp2RixTQURKO0FBU0g7QUFoQmdDOztrQkFtQnRCUCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7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ekw7QUFBQTtBQUF1UztBQUFBO0FBQUEsa0NBQUcsTUFBSyxVQUFSLEVBQW1CLFFBQU8sUUFBMUIsRUFBbUMsT0FBTyxFQUFFQSxPQUFRLDZCQUFWLEVBQTFDO0FBQUE7QUFBQTtBQUF2UztBQXRISjtBQVpaO0FBSEosYUFESjtBQTJJSDtBQUNKO0FBL2F3QztrQkFpYjlCbEksYyIsImZpbGUiOiIxNC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBJbnN1cmFuY2VDb21tb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBcdHNlbGVjdGVkUHJvZmlsZTonJyxcbiAgICAgICAgXHRzZWxlY3RlZF9wbGFuX3ByaWNlOicnLFxuICAgICAgICBcdHRvZ2dsZTogJ29uZSdcblxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgXHRsZXQgc2VsZiA9IHRoaXNcbiAgICBcdHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkUHJvZmlsZTp0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUsIHNlbGVjdGVkX3BsYW5fcHJpY2U6dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmFtb3VudCwgLi4uc2VsZi5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV19KVxuICAgIH1cblx0cmVuZGVyKCl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtY2FyZC1oZWFkXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1uYW1lLWhlYWQtZGl2IGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHdpZHRoPVwiMTIwXCIgc3JjPXt0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLmxvZ299IC8+XG5cdFx0XHRcdFx0XHRcdHsvKjxwPlxuXHRcdFx0XHRcdFx0XHRcdE9QRCBJbnN1cmFuY2UgYnkgPHNwYW4+e3RoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0ubmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvcD4qL31cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdEdyb3VwIE91dC1wYXRpZW50IEluc3VyYW5jZVxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXBkZi1kd25sb2FkLWRpdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e3RoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0uaW5zdXJlcl9kb2N1bWVudH0gZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCIgPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BkZi1kd24ucG5nXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0UG9saWN5IERldGFpbHNcblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0IXRoaXMucHJvcHMuaXNTZWxlY3RQbGFuP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTBcIiBzdHlsZT17e3BhZGRpbmc6JzAgNHB4IDEwcHgnfX0gPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBpbnMtZm9ybS1pbmZvIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTEwXCI+Q292ZXJhZ2UgKDEgWWVhcik8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPnt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4ubmFtZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGlucy1mb3JtLWluZm8gYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcmItMTBcIj5Bbm51YWwgUHJlbWl1bTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+4oK5IHt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYW1vdW50fTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXJ0LTEwXCIgc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInLCBwYWRkaW5nTGVmdDo1fX0gb25DbGljaz17KCk9Pnt0aGlzLnByb3BzLmlzX2VkaXQ/dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXBsYW4tdmlldycpOnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS11c2VyLWRldGFpbHMnKX19PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtcHJpbWFyeVwiPnt0aGlzLnByb3BzLmlzX2VkaXQ/J1NlbGVjdCBhbm90aGVyIHBsYW4nOidFZGl0J308L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PiA6ICcnXG5cdFx0XHRcdFx0XHRcdC8vIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCBpbnN1cmFuY2UtdGJsIGluc3VyYW5jZS1jaGVja2JveGVzXCI+XG5cdFx0XHRcdFx0XHQvLyBcdDx0aGVhZD5cblx0XHRcdFx0XHRcdC8vIFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHQvLyBcdFx0XHQ8dGggY2xhc3NOYW1lPVwidGJsLWZpcnN0LWhlYWRcIj48cD5Db3ZlcmFnZSAoMSBZZWFyKTwvcD48L3RoPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0PHRoIGNsYXNzTmFtZT1cInRibC1zZWNvbmQtaGVhZFwiPjxwPkFubnVhbCBQcmVtaXVtPC9wPjwvdGg+XG5cdFx0XHRcdFx0XHQvLyBcdFx0PC90cj5cblx0XHRcdFx0XHRcdC8vIFx0PC90aGVhZD5cblx0XHRcdFx0XHRcdC8vIFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0Ly8gXHRcdDx0cj5cblx0XHRcdFx0XHRcdC8vIFx0XHRcdDx0ZD48cCBjbGFzc05hbWU9XCJpbnMtZHRscy1tZW1iZXJzLWVkaXRcIj57dGhpcy5wcm9wcy5pc19lZGl0PydDaGFuZ2UgSW5zdXJlZCBQbGFuJzonSW5zdXJlZCBNZW1iZXIgRGV0YWlscyd9ICAgXG5cdFx0XHRcdFx0XHQvLyBcdFx0XHQ8c3BhbiBzdHlsZT17eyAnY3Vyc29yJzogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpPT57dGhpcy5wcm9wcy5pc19lZGl0P3RoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS1wbGFucycpOnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS11c2VyLWRldGFpbHMnKX19PkVESVRcblx0XHRcdFx0XHRcdC8vIFx0XHRcdDwvc3Bhbj48L3A+PC90ZD5cblx0XHRcdFx0XHRcdC8vIFx0XHRcdDx0ZD48L3RkPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQvLyBcdFx0PHRyPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBodG1sZm9ybT1cInRlc3QxMVwiIHN0eWxlPXt7J2ZvbnRXZWlnaHQnOiAnNDAwJywgJ2ZvbnRTc2l6ZSc6ICcxNCd9fT57dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLm5hbWV9XG5cdFx0XHRcdFx0XHQvLyBcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkZWZhdWx0Q2hlY2tlZCBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgdmFsdWU9XCJcIiBpZD1cInRlc3QxMVwiIG5hbWU9XCJmcnVpdC0xXCIgLz5cblx0XHRcdFx0XHRcdC8vIFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHQvLyBcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvLyBcdFx0XHQ8dGQ+PHNwYW4+4oK5IHt0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uYW1vdW50fTwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdFx0Ly8gXHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQvLyBcdDwvdGJvZHk+XG5cdFx0XHRcdFx0XHQvLyA8L3RhYmxlPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7Lypcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaXNTZWxlY3RQbGFuP1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtc3dpY2gtdGFicy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtdGFic1wiPlxuXHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBvbkNsaWNrPXsoKT0+IHRoaXMuc2V0U3RhdGUoe3RvZ2dsZTonb25lJ30pfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnRvZ2dsZSA9PSBcIm9uZVwiPydhY3RpdmUnOidpbnMtdGFiLWluYWN0aXZlJ30gPlNhbGllbnQgRmVhdHVyZXM8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIG9uQ2xpY2s9eygpPT4gdGhpcy5zZXRTdGF0ZSh7dG9nZ2xlOid0d28nfSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3RoaXMuc3RhdGUudG9nZ2xlID09IFwidHdvXCI/J2FjdGl2ZSAnOidpbnMtdGFiLWluYWN0aXZlJ30gPldoYXQncyBub3QgQ292ZXJlZD88L3A+PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtdGFicy1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206MTB9fT5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnRvZ2dsZSA9PSBcIm9uZVwiP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QudmFsdWVzKHRoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0ucGxhbnMpLmZpbHRlcih4PT54LmlkPT10aGlzLnByb3BzLmlzX2NoZWNrZWQpLm1hcCgoc2VsZWN0ZWRfcGxhbixpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICg8dWwga2V5PXtpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2VsZWN0ZWRfcGxhbi5jb250ZW50WydzYWxpZW50X2ZlYXR1cmVzJ10ubWFwKChyZXN1bHQsIGkpID0+IHsgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8bGkga2V5PXtpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3Jlc3VsdH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD4pXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6T2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLmluc3VybmFjZURhdGFbJ2luc3VyYW5jZSddWzBdLnBsYW5zKS5maWx0ZXIoeD0+eC5pZD09dGhpcy5wcm9wcy5pc19jaGVja2VkKS5tYXAoKHNlbGVjdGVkX3BsYW4saSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoPHVsIGtleT17aX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3NlbGVjdGVkX3BsYW4uY29udGVudFsnd2hhdHNfbm90X2NvdmVyZWQnXS5tYXAoKHJlc3VsdCwgaSkgPT4geyBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGxpIGtleT17aX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+e3Jlc3VsdH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT59KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+KVx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSkgXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgfVxuXHRcdFx0XHRcdFx0XHQgICAgICAgIHt0aGlzLnN0YXRlLnRvZ2dsZSA9PSAnb25lJz9cblx0XHRcdFx0XHRcdFx0ICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsYWxpZ25JdGVtczonY2VudGVyJyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbid9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgc3R5bGU9e3twYWRkaW5nTGVmdDogJzEycHgnLGZvbnRXZWlnaHQ6ICc1MDAnLGZvbnRTaXplOiAnMTJweCcsY29sb3I6JyNmNzg2MzEnLHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxjdXJzb3I6ICdwb2ludGVyJ319IGhyZWY9e3RoaXMucHJvcHMuaW5zdXJuYWNlRGF0YVsnaW5zdXJhbmNlJ11bMF0uaW5zdXJlcl9kb2N1bWVudH0gZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCIgaWQ9XCJ0ZXJtc19jb25kaXRpb25cIj5UJkMgYXBwbHk8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAnMTJweCcsZm9udFdlaWdodDogJzUwMCcsZm9udFNpemU6ICcxMnB4Jyxjb2xvcjonI2Y3ODYzMScsdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLGN1cnNvcjogJ3BvaW50ZXInfX0gaHJlZj0nL2luc3VyYW5jZS9uZXR3b3JrJyBvbkNsaWNrPXsoZSk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvbmV0d29yaycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlZpZXcgTmV0d29yazwvYT5cblx0XHRcdFx0XHRcdFx0ICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0ICAgICAgICA6Jydcblx0XHRcdFx0XHRcdFx0ICAgICAgICB9XHRcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHQqL31cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXN0YXR1cy1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fbWVudVwiIGlkPVwiXCI+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl90YWJzXCIgaWQ9XCJcIj5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRhYl9pbmFjdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+Q2hvb3NlIFlvdXIgUGxhbjwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pc1NlbGVjdFBsYW4/Jyc6J3RhYl9pbmFjdGl2ZSd9PlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+RmlsbCBNZW1iZXIgRGV0YWlsczwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRhYl9kaXNhYmxlZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+UGF5bWVudDwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+KVx0XG5cdFx0XHR9XG59XG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VDb21tb24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBJbnN1cmFuY2VQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcm9maWxlX2lkOiAnJyxcbiAgICAgICAgICAgIG5ld3Byb2ZpbGU6IHt9LFxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yOiAnJyxcbiAgICAgICAgICAgIHNob3dPVFA6IGZhbHNlLFxuICAgICAgICAgICAgb3RwOiBcIlwiLFxuICAgICAgICAgICAgb3RwVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcl9tZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIGlzTGVhZFRydWU6IGZhbHNlLFxuICAgICAgICAgICAgc21zQnRuVHlwZTogbnVsbCxcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvZmlsZUFnZTonJyxcbiAgICAgICAgICAgIGFnZTonJyxcbiAgICAgICAgICAgIGVuYWJsZU90cFJlcXVlc3Q6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UocHJvZmlsZWlkLCBuZXdQcm9maWxlLHNlbGVjdGVkUHJvZmlsZUFnZSwgZXZlbnQpIHtcbiAgICAgICAgbGV0IG5ld1Byb2ZpbGVOYW1lcyA9IHt9XG4gICAgICAgIGxldCBuZXdOYW1lID0gbmV3UHJvZmlsZS5uYW1lLnNwbGl0KFwiIFwiKVxuICAgICAgICBsZXQgdGVtcEFycmF5XG4gICAgICAgIGlmIChuZXdOYW1lLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubmFtZSA9IG5ld05hbWVbMF1cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzLm5vX2xuYW1lKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLm1pZGRsZV9uYW1lID0gJydcbiAgICAgICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubGFzdF9uYW1lID0gbmV3TmFtZVsxXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubWlkZGxlX25hbWUgPSAnJ1xuICAgICAgICAgICAgICAgIG5ld1Byb2ZpbGVOYW1lcy5sYXN0X25hbWUgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5ld05hbWUubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIG5ld1Byb2ZpbGVOYW1lcy5uYW1lID0gbmV3TmFtZVswXVxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMubm9fbG5hbWUpIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubWlkZGxlX25hbWUgPSBuZXdOYW1lWzFdXG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLmxhc3RfbmFtZSA9IG5ld05hbWVbMl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLm1pZGRsZV9uYW1lID0gJydcbiAgICAgICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubGFzdF9uYW1lID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuZXdOYW1lLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIHRlbXBBcnJheSA9IG5ld05hbWUuc2xpY2UoMiwgbmV3TmFtZS5sZW5ndGgpXG4gICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubmFtZSA9IG5ld05hbWVbMF1cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzLm5vX2xuYW1lKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLm1pZGRsZV9uYW1lID0gbmV3TmFtZVsxXVxuICAgICAgICAgICAgICAgIG5ld1Byb2ZpbGVOYW1lcy5sYXN0X25hbWUgPSB0ZW1wQXJyYXkuam9pbignICcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1Byb2ZpbGVOYW1lcy5taWRkbGVfbmFtZSA9ICcnXG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLmxhc3RfbmFtZSA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubmFtZSA9IG5ld05hbWVbMF1cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzLm5vX2xuYW1lKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLm1pZGRsZV9uYW1lID0gJydcbiAgICAgICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubGFzdF9uYW1lID0gJydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLm1pZGRsZV9uYW1lID0gJydcbiAgICAgICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubGFzdF9uYW1lID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZXhhY3RQcm9maWxlID0geyAuLi5uZXdQcm9maWxlLCAuLi5uZXdQcm9maWxlTmFtZXMgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmlzX2NoaWxkX29ubHkpe1xuICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgICAgICB2YXIgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxuICAgICAgICAgICAgdmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgICAgICB0b2RheSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IERhdGUucGFyc2UodG9kYXkpO1xuICAgICAgICAgICAgdmFyIGVuZERhdGUgPSBEYXRlLnBhcnNlKG5ld1Byb2ZpbGUuZG9iKTtcbiAgICAgICAgICAgIHZhciB0aW1lRGlmZiA9IHN0YXJ0RGF0ZSAtIGVuZERhdGU7XG4gICAgICAgICAgICBsZXQgZGF5c0RpZmYgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb2ZpbGVfaWQ6IHByb2ZpbGVpZCwgbmV3cHJvZmlsZTogZXhhY3RQcm9maWxlLHNlbGVjdGVkUHJvZmlsZUFnZTpkYXlzRGlmZixhZ2U6bmV3UHJvZmlsZS5hZ2V9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb2ZpbGVfaWQ6IHByb2ZpbGVpZCwgbmV3cHJvZmlsZTogZXhhY3RQcm9maWxlLHNlbGVjdGVkUHJvZmlsZUFnZTpzZWxlY3RlZFByb2ZpbGVBZ2UsYWdlOm5ld1Byb2ZpbGUuYWdlfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnB1dEhhbmRsZXIoZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T1RQICYmIGUudGFyZ2V0Lm5hbWUgPT0gJ3Bob25lTnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsIHZhbGlkYXRpb25FcnJvcjogXCJcIiwgc2hvd09UUDogZmFsc2UsIG90cDogXCJcIiB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdE9UUFJlcXVlc3QobnVtYmVyLCByZXNlbmRGbGFnID0gZmFsc2UsIHZpYVNtcywgdmlhV2hhdHNhcHAsIGZyb21Qb3B1cD1udWxsKSB7IC8vIHRvIGdlbmVyYXRlIG90cFxuICAgICAgICBsZXQgbGVhZF9kYXRhID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmIChudW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiXCIgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE9UUChudW1iZXIsIHZpYVNtcywgdmlhV2hhdHNhcHAsJ2luc3VyYW5jZS1sb2dpbicsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIkNvdWxkIG5vdCBnZW5lcmF0ZSBPVFAuXCIgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdlbmVyYXRlSW5zdXJhbmNlTGVhZCh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gPyB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uaWQgOiAnJywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgbGVhZF9kYXRhKSAvLyB0byBjcmVhdGUgaW5zdXJhbmNlIGxlYWQgZm9yIG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJbnN1cmFuY2VMb2dpblBvcHVwQ29udGludWUnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ0luc3VyYW5jZS1sb2dpbi1wb3B1cC1jb250aW51ZS1jbGljaycsICdtb2RlJzogdmlhU21zID8gJ3ZpYVNtcycgOiB2aWFXaGF0c2FwcCA/ICd2aWFXaGF0c2FwcCcgOiAnJywgJ21vYmlsZU5vJzogdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIGlmKHZpYVdoYXRzYXBwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZU90cFJlcXVlc3Q6dHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlT3RwUmVxdWVzdDpmYWxzZX0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPVFA6IHRydWUsIG90cFRpbWVvdXQ6IHRydWUsIHNtc0J0blR5cGU6IHZpYVNtcyA/IHRydWUgOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdHBUaW1lb3V0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwMClcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlT3RwUmVxdWVzdDpmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9LCA2MDAwMClcblxuICAgICAgICAgICAgICAgICAgICBpZihmcm9tUG9wdXAgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZnJvbVBvcHVwPT0nb25lJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJylbMF0uc2Nyb2xsKHsgbGVmdDogOTk5LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnMtZm9ybS1zbGlkZXInKVswXS5zY3JvbGwoeyBsZWZ0OiAtOTk5LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbnVtYmVyICgxMCBkaWdpdHMpXCIgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZlcmlmeU9UUCgpIHsgLy92ZXJpZnkgdXNlciBlbnRlcmVkIG90cFxuICAgICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUub3RwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBlbnRlciBPVFBcIiB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5vdHAubGVuZ3RoIDwgNiB8fCB0aGlzLnN0YXRlLm90cC5sZW5ndGggPiA2KXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIGVudGVyIHZhbGlkIE9UUFwiIH0pXG4gICAgICAgICAgICByZXR1cm4gICBcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGVhZF9kYXRhID0gcGFyc2VkXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBob25lTnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiIH0pXG4gICAgICAgICAgICBsZXQgZXh0cmFQYXJhbXNEYXRhID0ge31cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3VibWl0T1RQKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRoaXMuc3RhdGUub3RwLCBleHRyYVBhcmFtc0RhdGEsIChleGlzdHMpID0+IHsgLy8gdG8gdmVyaWZ5IHVzZXIgZW50ZXJlZCBvdHBcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzLmNvZGUgPT0gJ2ludmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiBleGlzdHMubWVzc2FnZSB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSW5zdXJhbmNlTG9naW5Qb3B1cE9wdFZlcmlmaWVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdJbnN1cmFuY2UtbG9naW4tcG9wdXAtb3B0LXZlcmlmaWVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzZWxmLnByb3BzLnNlbGVjdGVkX3BsYW4pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLmdlbmVyYXRlSW5zdXJhbmNlTGVhZChzZWxmLnByb3BzLnNlbGVjdGVkX3BsYW4gPyBzZWxmLnByb3BzLnNlbGVjdGVkX3BsYW4uaWQgOiAnJywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgbGVhZF9kYXRhLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIC8vIHRvIGNyZWF0ZSBpbnN1cmFuY2UgbGVhZCBmb3IgbWF0cml4XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldEluc3VyYW5jZShmYWxzZSwgKHJlc3ApID0+IHsgLy8gdG8gZ2V0IGluc3VyYW5jZSBwbGFuc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcC5jZXJ0aWZpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0xlYWQgPT0gJ3Byb2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RzLnVzZXJfZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuaWRlbnRpZnlVc2VyQ2xpY2sgPT0gJ3VzZXJDbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXVzZXItZGV0YWlscycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5jbG9zZUxlYWRQb3B1cCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAoKSAvLyB0byBjbG9zZSBsZWFkIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtcGxhbi12aWV3JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuaWRlbnRpZnlVc2VyQ2xpY2sgPT0gJ3VzZXJDbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXVzZXItZGV0YWlscycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5jbG9zZUxlYWRQb3B1cCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAoKSAvLyB0byBjbG9zZSBsZWFkIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtcGxhbi12aWV3JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyBpc0xlYWRUcnVlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVybXNfY29uZGl0aW9uJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXJtc19jb25kaXRpb24nKS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG51bWJlciAoMTAgZGlnaXRzKVwiIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMudmVyaWZ5T1RQKCkgLy8gdG8gdmVyaWZ5IHVzZXIgZW50ZXJlZCBvdHBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVDb250aW51ZVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd09UUCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0T1RQUmVxdWVzdCh0aGlzLnN0YXRlLnBob25lTnVtYmVyLCcnLHRydWUsZmFsc2UsJ29uZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0TnVtYmVyKCkge1xuICAgICAgICBsZXQgbnVtYmVyID0gdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJylbMF0uc2Nyb2xsKHsgbGVmdDogLTk5OSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiwgc2hvd09UUDogZmFsc2UsIG90cDogXCJcIiwgcGhvbmVOdW1iZXI6ICcnIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGhvbmVOdW1iZXI6IG51bWJlciB9KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyXCIpLmZvY3VzKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgfVxuICAgIGNsb3NlU2VsZWN0RnJvbVByb2ZpbGUoKXtcbiAgICAgICAgbGV0IHRocmVzaG9sZF9tYXhfYWdlIFxuICAgICAgICBsZXQgdGhyZXNob2xkX21pbl9hZ2VcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGQgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXSl7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLmlzX2NoaWxkX29ubHkpe1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZF9tYXhfYWdlID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5jaGlsZF9tYXhfYWdlXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkX21pbl9hZ2UgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLmNoaWxkX21pbl9hZ2VcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBgVGhlIGFnZSBvZiB0aGUgc2VsZWN0ZWQgbWVtYmVyIHNob3VsZCBiZSBiZXR3ZWVuICR7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5jaGlsZF9taW5fYWdlfSBkYXlzIGFuZCAke3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0uY2hpbGRfbWF4X2FnZX0geWVhcnNgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGRfbWF4X2FnZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWF4X2FnZVxuICAgICAgICAgICAgICAgIHRocmVzaG9sZF9taW5fYWdlID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5taW5fYWdlXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gYFRoZSBhZ2Ugb2YgdGhlIHNlbGVjdGVkIG1lbWJlciBzaG91bGQgYmUgYmV0d2VlbiAke3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWluX2FnZX0gYW5kICR7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5tYXhfYWdlfSB5ZWFyc2BcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmlzX2NoaWxkX29ubHkpe1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFByb2ZpbGVBZ2UgPiB0aHJlc2hvbGRfbWluX2FnZSAmJiB0aGlzLnN0YXRlLmFnZSA8IHRocmVzaG9sZF9tYXhfYWdlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlUG9wdXAodGhpcy5zdGF0ZS5wcm9maWxlX2lkLCB0aGlzLnByb3BzLm1lbWJlcl9pZCwgdGhpcy5zdGF0ZS5uZXdwcm9maWxlKSAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogZXJyb3JNZXNzYWdlIH0pICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMucHJvcHMuaXNfY2hpbGRfb25seSl7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkUHJvZmlsZUFnZSA+IHRocmVzaG9sZF9taW5fYWdlICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9maWxlQWdlIDwgdGhyZXNob2xkX21heF9hZ2Upe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VQb3B1cCh0aGlzLnN0YXRlLnByb2ZpbGVfaWQsIHRoaXMucHJvcHMubWVtYmVyX2lkLCB0aGlzLnN0YXRlLm5ld3Byb2ZpbGUpICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IGVycm9yTWVzc2FnZSB9KSAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc1NlbGVjdHByb2ZpbGUpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50U2VsZWN0ZWRQcm9maWxlcyA9IFtdXG4gICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzLnB1c2godmFsW2tleV0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZVNlbGVjdFByb2ZpbGVQb3B1cC5iaW5kKHRoaXMpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXAgb25zY3JlZW4tc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC10b3AtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IEZhbWlseVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fSBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVTZWxlY3RQcm9maWxlUG9wdXAuYmluZCh0aGlzKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ydC1jbG9zZS5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE0IH19IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgYWN0aW9uLXNjcmVlbi1oZWFkZXIgcG9wLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybXMtY29uZGl0aW9uLWRpdiBvbnNjcmVlbi1zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLXJhZGlvIGluc3JhZGlvLW9uLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnByb2ZpbGVzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzLmluZGV4T2YocGFyc2VJbnQoa2V5KSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcm9maWxlX2lkXCIgdmFsdWU9JycgaWQ9e2tleX0gZGF0YS1wYXJhbT0ncHJvZmlsZV9pZCcgY2hlY2tlZD17dGhpcy5zdGF0ZS5wcm9maWxlX2lkID09PSB2YWx1ZS5pZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgdmFsdWUuaWQsIHZhbHVlLHZhbHVlLmFnZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9jZWR1cmVzLWJ0bi1wb3BcIiBvbkNsaWNrPXt0aGlzLmNsb3NlU2VsZWN0RnJvbVByb2ZpbGUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUucHJvZmlsZV9pZCA9PSAnJyA/ICdmdy01MDAgYnRuLWRpc2FibGVkJyA6ICdmdy01MDAnfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5wcm9maWxlX2lkID09ICcnID8gJ2Rpc2FibGVkJyA6ICcnfT5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03ICBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4ICR7dGhpcy5wcm9wcy5vdmVybGF5Q2xhc3N9YH0gb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTG9naW5Qb3B1cC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vYmlsZS12ZXJpZmljYXRpb24tc2NyZWVuIHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMZWFkVHJ1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdS1wb3B1cC1jb250YWluZXJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTGVhZFBvcHVwLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN1LXBvcC11cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5zUG9wVXBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy90ZWMuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLW1haW4tcGVyYS10ZXh0XCI+UmVxdWVzdCBTdWJtaXR0ZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLW1haW4tcGVyYS1zdWItdGV4dFwiPlRoYW5rIHlvdSBmb3Igc2hvd2luZyBpbnRlcmVzdCBpbiBPUEQgSW5zdXJhbmNlLiBPdXIgY3VzdG9tZXIgc2VydmljZSBleGVjdXRpdmUgd2lsbCBnaXZlIHlvdSBhIGNhbGwgZnJvbSAwMTI0LTYwNzNYWFguPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5zdXBvcGRvbmVidG5cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTGVhZFBvcHVwLmJpbmQodGhpcyl9PkRvbmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHdpZGdldCBuby1zaGFkb3cgbm8tcm91bmQgc2lnbi11cC1jb250YWluZXIgd2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwICR7dGhpcy5wcm9wcy5wb3B1cENsYXNzfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVMb2dpblBvcHVwLmJpbmQodGhpcyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcnQtY2xvc2Uuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCB9fSAvPjwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1zbGlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgbXYtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aDMgY2xhc3NOYW1lPVwic2lnbi1jb3Vwb24gZnctNzAwXCI+UGxlYXNlIGxvZ2luIHRvIGNvbnRpbnVlPC9oMz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCIgc3R5bGU9e3RoaXMucHJvcHMucG9wdXBDbGFzcyAhPSAnJyA/IHsgY29sb3I6ICcjZmZmJyB9IDoge319ID5Tb3VuZHMgdG9vIGdvb2QgdG8gYmUgdHJ1ZSAhISBCdXQgaXQgaXMgISBPbmx5IGRvY3ByaW1lIG1lbWJlcnMgZ2V0IHRvIGFjY2VzczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlkZW50aWZ5VXNlckNsaWNrID09ICd1c2VyQ2xpY2snID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgc2lnbi11cC1tYmwtdGV4dFwiIHN0eWxlPXt0aGlzLnByb3BzLnBvcHVwQ2xhc3MgIT0gJycgPyB7IGNvbG9yOiAnI2ZmZicgfSA6IHt9fSA+U291bmRzIHRvbyBnb29kIHRvIGJlIHRydWUgISEgQnV0IGl0IGlzICEgT25seSBkb2NwcmltZSBtZW1iZXJzIGdldCB0byBhY2Nlc3M8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5pZGVudGlmeVVzZXJDbGljayA9PSAnQXV0b0NsaWNrJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgc2lnbi11cC1tYmwtdGV4dFwiIHN0eWxlPXt0aGlzLnByb3BzLnBvcHVwQ2xhc3MgIT0gJycgPyB7IGNvbG9yOiAnI2ZmZicgfSA6IHt9fSA+RW50ZXIgeW91ciBhY2Nlc3MgY29kZSB3ZeKAmXZlIHNlbnQgdG8geW91ciBtb2JpbGUgbnVtYmVyPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGg0IGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kIHNpZ24tdXAtbWJsLXRleHRcIiBzdHlsZT17dGhpcy5wcm9wcy5wb3B1cENsYXNzICE9ICcnID8geyBjb2xvcjogJyNmZmYnIH0gOiB7fX0gPlBsZWFzZSBFbnRlciB5b3VyIE1vYmlsZSBOdW1iZXIgdG8gcHJvY2VlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS12ZXJpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJpZmktbW9iLWlvY24gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbW9iLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtb2JpbGUtZmllbGQgc3VwLWlucHV0LXBkbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgZW50ZXItbW9iaWxlLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXQgdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIjEwIGRpZ2l0IG1vYmlsZSBudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZUNvbnRpbnVlUHJlc3MuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2hvd09UUCA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlIG0tMCBtYi0yXCI+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uRXJyb3J9PC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgZmFsc2UsIHRydWUsIGZhbHNlLCdvbmUnKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMub3RwX3JlcXVlc3Rfc2VudH0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc20gbGctc21zLWJ0biBidG4tZ3JkbnRcIj5MZXTigJlzIGdldCB5b3UgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLGZhbHNlLGZhbHNlLHRydWUpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5vdHBfcmVxdWVzdF9zZW50fSBjbGFzc05hbWU9XCJ2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1zbSBsZy13dHNwLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIndodHNwLWljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsnL2ltZy93YS1sb2dvLWdyLnN2Zyd9IC8+VmVyaWZ5IFZpYSBXaGF0c2FwcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIG12LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGgzIGNsYXNzTmFtZT1cInNpZ24tY291cG9uIGZ3LTcwMFwiPlBsZWFzZSBsb2dpbiB0byBjb250aW51ZTwvaDM+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgc2lnbi11cC1tYmwtdGV4dFwiIHN0eWxlPXt0aGlzLnByb3BzLnBvcHVwQ2xhc3MgIT0gJycgPyB7IGNvbG9yOiAnI2ZmZicgfSA6IHt9fSA+RW50ZXIgdGhlIE9UUCB3ZeKAmXZlIHNlbnQgdG8geW91ciBtb2JpbGUgbnVtYmVyPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWRlbnRpZnlVc2VyQ2xpY2sgPT0gJ3VzZXJDbGljaycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCIgc3R5bGU9e3RoaXMucHJvcHMucG9wdXBDbGFzcyAhPSAnJyA/IHsgY29sb3I6ICcjZmZmJyB9IDoge319ID5Tb3VuZHMgdG9vIGdvb2QgdG8gYmUgdHJ1ZSAhISBCdXQgaXQgaXMgISBPbmx5IGRvY3ByaW1lIG1lbWJlcnMgZ2V0IHRvIGFjY2VzczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmlkZW50aWZ5VXNlckNsaWNrID09ICdBdXRvQ2xpY2snID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCIgc3R5bGU9e3RoaXMucHJvcHMucG9wdXBDbGFzcyAhPSAnJyA/IHsgY29sb3I6ICcjZmZmJyB9IDoge319ID5FbnRlciB5b3VyIGFjY2VzcyBjb2RlIHdl4oCZdmUgc2VudCB0byB5b3VyIG1vYmlsZSBudW1iZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgc2lnbi11cC1tYmwtdGV4dFwiIHN0eWxlPXt0aGlzLnByb3BzLnBvcHVwQ2xhc3MgIT0gJycgPyB7IGNvbG9yOiAnI2ZmZicgfSA6IHt9fSA+UGxlYXNlIEVudGVyIHlvdXIgTW9iaWxlIE51bWJlciB0byBwcm9jZWVkPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXZlcmlmaWNhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcmlmaS1tb2ItaW9jbiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tb2Iuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1vYmlsZS1maWVsZCBzdXAtaW5wdXQtcGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRvbi1ncm91cCBlbnRlci1tb2JpbGUtbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmYy1pbnB1dCB0ZXh0LWNlbnRlclwiIHBsYWNlaG9sZGVyPVwiMTAgZGlnaXQgbW9iaWxlIG51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lTnVtYmVyfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cInBob25lTnVtYmVyXCIgb25LZXlQcmVzcz17dGhpcy5faGFuZGxlQ29udGludWVQcmVzcy5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zaG93T1RQID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbnMtbnVtLWVkaXRcIiBvbkNsaWNrPXt0aGlzLmVkaXROdW1iZXIuYmluZCh0aGlzKX0+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd09UUCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBPVFBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5vdHB9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwib3RwXCIgb25LZXlQcmVzcz17dGhpcy5faGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3RwVGltZW91dCA/IFwiXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNlbmRPdHBcIiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19IG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IGZhbHNlIDogdHJ1ZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IGZhbHNlIDogdHJ1ZSwgJ29uZScpfT57dGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gJ1ByZWZlciB3ZSBXaGF0c0FwcCBpdCB0byB5b3U/JyA6ICdTZW5kIHZpYSBTTVMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbmFibGVPdHBSZXF1ZXN0PycnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlc2VuZE90cCBpbnMtb3RwLXJlc2VuZFwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgJ29uZScpfT5SZXNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlIG0tMCBtYi0yXCI+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uRXJyb3J9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd09UUCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy52ZXJpZnlPVFAuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuc3VibWl0X290cH0gY2xhc3NOYW1lPVwiYnRuLWdyZG50IHYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXNzIE5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIGZhbHNlLCB0cnVlLCBmYWxzZSl9IGRpc2FibGVkPXt0aGlzLnByb3BzLm90cF9yZXF1ZXN0X3NlbnR9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGxnLXNtcy1idG4gYnRuLWdyZG50XCI+TGV04oCZcyBnZXQgeW91IGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlcixmYWxzZSxmYWxzZSx0cnVlKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMub3RwX3JlcXVlc3Rfc2VudH0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc20gbGctd3RzcC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3aHRzcC1pY29cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArJy9pbWcvd2EtbG9nby1nci5zdmcnfSAvPlZlcmlmeSBWaWEgV2hhdHNhcHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZ3LTUwMCBwLTNcIiBzdHlsZT17dGhpcy5wcm9wcy5wb3B1cENsYXNzICE9ICcnID8geyBmb250U2l6ZTogMTIsIGNvbG9yOiAnI2ZmZicgfSA6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogJyM4YThhOGEnIH19ID5CeSBwcm9jZWVkaW5nLCB5b3UgaGVyZWJ5IGFncmVlIHRvIHRoZSA8YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5FbmQgVXNlciBBZ3JlZW1lbnQ8L2E+IGFuZCA8YSBocmVmPVwiL3ByaXZhY3lcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0gPlByaXZhY3kgUG9saWN5LjwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5zdXJhbmNlUG9wdXAiXSwic291cmNlUm9vdCI6IiJ9