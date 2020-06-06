exports.ids = [22];
exports.modules = {

/***/ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class WhatsAppOptinView extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.state = {
            whatsapp_optin_View: true
        };
    }

    shouldRender() {
        if (this.props.profiles) {
            if (this.props.profiles.whatsapp_optin != null) {
                if (this.props.isAppointment && !this.props.profiles.whatsapp_optin && !this.props.profiles.whatsapp_is_declined) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else if (this.props.isUserProfile) {
            return true;
        } else {
            return false;
        }
    }

    toggleWhatsap(status, e) {
        if (this.props.isAppointment) {
            let profileData = _extends({}, this.props.profiles);
            if (status) {
                profileData.whatsapp_optin = true;
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "You whatsApp notifications has been enabled." });
            } else {
                profileData.whatsapp_is_declined = true;
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "your whatsApp notifications has been disabled." });
            }
            this.props.editUserProfile(profileData, profileData.id, () => {
                document.getElementsByClassName('whatsappCardContainer')[0].classList.add('d-none');
            });
        } else {
            this.setState({ whatsapp_optin_View: status }, () => {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'Whatsaptoggled', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Whatsap-toggled'
                };
                _gtm2.default.sendEvent({ data: data });
                this.props.toggleWhatsap(status);
            });
        }
    }

    render() {

        if (!this.shouldRender()) return _react2.default.createElement('div', null);

        return _react2.default.createElement(
            'div',
            null,
            this.props.isAppointment ? _react2.default.createElement(
                'div',
                { className: 'whatsappCardContainer' },
                _react2.default.createElement(
                    'div',
                    { className: 'wa-logo-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'wa-container' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/wa-logo.svg" })
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Docprime would like to send you updates through whatsapp'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'allowDeclineContainer' },
                    _react2.default.createElement(
                        'p',
                        { className: 'allowBtns', onClick: this.toggleWhatsap.bind(this, true) },
                        'Allow'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'declineBtns', style: { color: '#757575' }, onClick: this.toggleWhatsap.bind(this, false) },
                        'Decline'
                    )
                )
            ) : _react2.default.createElement(
                'div',
                { className: 'widget mrb-15' },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-content' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { className: 'ck-bx', style: { fontWeight: '600', fontSize: '14px' } },
                            'Enable ',
                            _react2.default.createElement(
                                'span',
                                { className: 'sm-wtsp-img' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/wa-logo-sm.png" }),
                                'WhatsApp'
                            ),
                            ' notification',
                            _react2.default.createElement('input', { type: 'checkbox', onChange: this.toggleWhatsap.bind(this, !this.state.whatsapp_optin_View), checked: this.state.whatsapp_optin_View }),
                            _react2.default.createElement('span', { className: 'checkmark' })
                        )
                    )
                )
            )
        );
    }
}

exports.default = WhatsAppOptinView;

/***/ }),

/***/ "./dev/js/components/ipd/IPDFormView.js":
/*!**********************************************!*\
  !*** ./dev/js/components/ipd/IPDFormView.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _footer = __webpack_require__(/*! ../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _ipdThankYouScreen = __webpack_require__(/*! ./ipdThankYouScreen.js */ "./dev/js/components/ipd/ipdThankYouScreen.js");

var _ipdThankYouScreen2 = _interopRequireDefault(_ipdThankYouScreen);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _bannerCarousel = __webpack_require__(/*! ../commons/Home/bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

var _IpdTabForm = __webpack_require__(/*! ./IpdTabForm.js */ "./dev/js/components/ipd/IpdTabForm.js");

var _IpdTabForm2 = _interopRequireDefault(_IpdTabForm);

var _staticDisclaimer = __webpack_require__(/*! ../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class IPDFormView extends _react2.default.Component {

	componentDidMount() {

		if (!this.props.tabView) {

			const parsed = queryString.parse(this.props.location.search);
			let gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IpdLeadGenerationPageLanded', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'ipd-lead-generation-page-landed', selectedId: this.props.match.params.id, 'hospitalId': parsed.hospital_id ? parsed.hospital_id : ''
			};
			_gtm2.default.sendEvent({ data: gtmData });

			let selectedLocation = '';
			let lat = 28.644800;
			let long = 77.216721;
			if (this.props.selectedLocation) {
				selectedLocation = this.props.selectedLocation;
				lat = selectedLocation.geometry.location.lat;
				long = selectedLocation.geometry.location.lng;
				if (typeof lat === 'function') lat = lat();
				if (typeof long === 'function') long = long();
			}

			this.props.getOfferList(lat, long);
		}
	}

	render() {
		let { ipd_info } = this.props;

		if (this.props.tabView) {
			return _react2.default.createElement(_IpdTabForm2.default, this.props);
		} else {

			return _react2.default.createElement(
				'div',
				{ className: 'profile-body-wrap' },
				_react2.default.createElement(_DesktopProfileHeader2.default, null),
				_react2.default.createElement(
					'section',
					{ className: 'container container-top-margin' },
					_react2.default.createElement(
						'div',
						{ className: 'row main-row parent-section-row' },
						_react2.default.createElement(_LeftBar2.default, null),
						_react2.default.createElement(
							'div',
							{ className: 'col-12 col-md-7 col-lg-7 center-column' },
							this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'ipd_lead_form').length ? _react2.default.createElement(
								'div',
								{ className: 'col-12 mrb-20' },
								_react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'ipd_lead_form' }))
							) : '',
							_react2.default.createElement(_IpdTabForm2.default, this.props)
						),
						_react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', msgTemplate: 'gold_general_template' })
					)
				),
				_react2.default.createElement(_staticDisclaimer2.default, null)
			);
		}
	}
}

exports.default = IPDFormView;

/***/ }),

/***/ "./dev/js/components/ipd/IpdTabForm.js":
/*!*********************************************!*\
  !*** ./dev/js/components/ipd/IpdTabForm.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _ipdThankYouScreen = __webpack_require__(/*! ./ipdThankYouScreen.js */ "./dev/js/components/ipd/ipdThankYouScreen.js");

var _ipdThankYouScreen2 = _interopRequireDefault(_ipdThankYouScreen);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _WhatsAppOptinView = __webpack_require__(/*! ../commons/WhatsAppOptin/WhatsAppOptinView.js */ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js");

var _WhatsAppOptinView2 = _interopRequireDefault(_WhatsAppOptinView);

var _newDateSelector = __webpack_require__(/*! ../commons/newDateSelector.js */ "./dev/js/components/commons/newDateSelector.js");

var _newDateSelector2 = _interopRequireDefault(_newDateSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const moment = __webpack_require__(/*! moment */ "moment");

const queryString = __webpack_require__(/*! query-string */ "query-string");


class IpdTabForm extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			phone_number: '',
			email: '',
			gender: '',
			dob: '',
			validateError: [],
			dateModal: false,
			formattedDate: '',
			submitFormSuccess: false,
			whatsapp_optin: false,
			isDobValidated: false
		};
	}

	componentDidMount() {
		if (this.props.defaultProfile && !this.state.name && this.props.profiles && this.props.profiles[this.props.defaultProfile] && !this.props.profiles[this.props.defaultProfile].isDummyUser) {
			let userData = this.props.profiles[this.props.defaultProfile];
			this.setState({ name: userData.name || '', phone_number: userData.phone_number + '' || '', email: userData.email || '', gender: userData.gender || '', dob: userData.dob || '', formattedDate: userData.dob || '', isDobValidated: userData.dob ? true : false });
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.defaultProfile && !this.state.name && nextProps.profiles && nextProps.profiles[nextProps.defaultProfile] && !nextProps.profiles[nextProps.defaultProfile].isDummyUser) {
			let userData = nextProps.profiles[nextProps.defaultProfile];
			this.setState({ name: userData.name || '', phone_number: userData.phone_number + '' || '', email: userData.email || '', gender: userData.gender || '', dob: userData.dob || '', formattedDate: userData.dob || '', isDobValidated: userData.dob ? true : false });
		}
	}

	selectDateFromCalendar(date) {
		if (date) {
			date = date.toDate();
			let formattedDate = this.getFormattedDate(date);
			date = new Date(date).toISOString().split('T')[0];
			this.setState({ dob: date, formattedDate: formattedDate, dateModal: false });
		} else {
			this.setState({ dateModal: false });
		}
	}

	inputHandler(e) {
		if (e.target.name == 'phone_number') {
			e.target.value.length > 10 ? '' : this.setState({
				[e.target.name]: e.target.value
			});
		} else {
			this.setState({ [e.target.name]: e.target.value });
		}
	}

	getFormattedDate(date) {
		var dd = date.getDate();
		var mm = date.getMonth() + 1;
		var yyyy = date.getFullYear();
		if (dd < 10) {
			dd = '0' + dd;
		}
		if (mm < 10) {
			mm = '0' + mm;
		}
		var today = yyyy + '-' + mm + '-' + dd;
		return today;
	}

	openCalendar() {
		this.setState({ dateModal: true });
	}

	submitClicked() {
		let self = this;
		let validateError = [];
		if (!this.state.name.match(/^[a-zA-Z ]+$/)) {
			validateError.push('name');
		}

		if (this.state.phone_number.match(/^[56789]{1}[0-9]{9}$/)) {} else {
			validateError.push('phone_number');
		}

		if (this.state.email == '') {

			validateError.push('email');
		}

		if (this.state.gender == '') {

			validateError.push('gender');
		}

		if (!this.state.email.match(/\S+@\S+\.\S+/)) {
			validateError.push('email');
		}

		if (this.state.dob == '') {

			validateError.push('dob');
		}

		if (this.state.dob && !this.state.isDobValidated) {
			validateError.push('dob');
		}

		if (validateError.length) {

			this.setState({ validateError: validateError });
		} else {

			const parsed = queryString.parse(this.props.location.search);

			this.setState({ validateError: validateError });
			let ipd_id = this.props.match.params.id;
			if (!ipd_id || ipd_id.includes('price')) {
				ipd_id = '';
			}
			let formData = _extends({}, this.state, {
				ipd_procedure: ipd_id

			});

			if (parsed.hospital_id) {
				formData.hospital = parsed.hospital_id;
			}

			let utm_tags = {
				utm_source: parsed.utm_source || '',
				utm_medium: parsed.utm_medium || '',
				utm_term: parsed.utm_term || '',
				utm_campaign: parsed.utm_campaign || '',
				referrer: document.referrer || '',
				gclid: parsed.gclid || ''
			};

			formData.data = {};
			formData.data.utm_tags = utm_tags;
			formData.data.url = window.location.href;
			formData.data.formSource = this.props.formSource || 'LeadForm';
			formData.source = 'Costestimate';
			this.props.submitIPDForm(formData, this.props.selectedLocation, (error, response) => {
				if (!error && response) {
					this.props.ipdPopupFired();
					let gtmData = {
						'Category': 'ConsumerApp', 'Action': 'IpdLeadGenerationSuccess', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': response.id || '', 'event': 'ipd-lead-generation-success', selectedId: ipd_id, 'hospitalId': parsed.hospital_id ? parsed.hospital_id : '', 'mobileNo': this.state.phone_number
					};
					_gtm2.default.sendEvent({ data: gtmData });
					this.setState({ submitFormSuccess: true });
				} else {
					setTimeout(() => {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please try after some time" });
					}, 500);
				}
			});
		}
	}

	togglePopup(toggle) {
		let formData = {
			name: '',
			phone_number: '',
			email: '',
			gender: '',
			dob: '',
			validateError: [],
			dateModal: false,
			formattedDate: '',
			submitFormSuccess: false
		};
		this.setState(_extends({}, formData));
		setTimeout(() => {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Record Submitted Successfully" });
		}, 500);
	}

	toggleWhatsap(e) {
		this.setState({ whatsapp_optin: !this.state.whatsapp_optin });
	}

	getNewDate(type, newDate, isValidDob) {
		this.setState({ dob: newDate, isDobValidated: isValidDob }, () => {});
	}

	render() {
		let { ipd_info } = this.props;

		if (this.props.tabView || !(this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length)) {
			ipd_info = null;
		}

		return _react2.default.createElement(
			'div',
			{ className: `${this.props.tabView ? '' : 'ipd-section ipd-form-view'}`, style: { 'marginTop': '11px' } },
			this.props.match.params.id != 'price' && ipd_info && ipd_info.about && ipd_info.about.name ? _react2.default.createElement(
				'h4',
				{ className: 'section-heading pt-0' },
				`Get Cost Estimate of ${ipd_info.about.name}`
			) : '',
			this.props.tabView || !(ipd_info && ipd_info.about && ipd_info.about.name) ? _react2.default.createElement(
				'div',
				{ className: 'lead-form' },
				_react2.default.createElement(
					'h2',
					{ className: 'section-heading hd-mrgn-top' },
					'Get Help from Medical Experts'
				)
			) : '',
			_react2.default.createElement(
				'div',
				{ className: 'info-popup' },
				_react2.default.createElement(
					'div',
					{ className: 'form-group fm-grp mt-0' },
					_react2.default.createElement(
						'div',
						{ className: 'lbl-txt' },
						'Name:'
					),
					_react2.default.createElement(
						'div',
						{ className: 'input-form' },
						_react2.default.createElement('input', { type: 'text', autoComplete: 'none', className: `form-control ${this.state.validateError.indexOf('name') > -1 ? 'error-on' : ''}`, name: 'name', value: this.state.name, onChange: this.inputHandler.bind(this) })
					),
					this.state.validateError.indexOf('name') > -1 ? _react2.default.createElement(
						'span',
						{ className: 'error-msg' },
						'Required'
					) : ''
				),
				_react2.default.createElement(
					'div',
					{ className: 'form-group fm-grp' },
					_react2.default.createElement(
						'div',
						{ className: 'lbl-txt' },
						'Mobile No:'
					),
					_react2.default.createElement(
						'div',
						{ className: 'input-form' },
						_react2.default.createElement('input', { type: 'number', autoComplete: 'none', className: `form-control ${this.state.validateError.indexOf('phone_number') > -1 ? 'error-on' : ''}`, name: 'phone_number', value: this.state.phone_number, onChange: this.inputHandler.bind(this) })
					),
					this.state.validateError.indexOf('phone_number') > -1 ? _react2.default.createElement(
						'span',
						{ className: 'error-msg' },
						'Required'
					) : ''
				),
				_react2.default.createElement(
					'div',
					{ className: 'form-group fm-grp emailForm' },
					_react2.default.createElement(
						'div',
						{ className: 'lbl-txt' },
						'Email Id:'
					),
					_react2.default.createElement(
						'div',
						{ className: 'input-form' },
						_react2.default.createElement('input', { type: 'text', autoComplete: 'none', className: `form-control ${this.state.validateError.indexOf('email') > -1 ? 'error-on' : ''}`, name: 'email', value: this.state.email, onChange: this.inputHandler.bind(this) })
					),
					this.state.validateError.indexOf('email') > -1 ? _react2.default.createElement(
						'span',
						{ className: 'error-msg' },
						'Required'
					) : ''
				),
				_react2.default.createElement(
					'div',
					{ className: 'form-group fm-grp mrg-mb0' },
					_react2.default.createElement(
						'div',
						{ className: 'lbl-txt gender-label' },
						'Gender:'
					),
					_react2.default.createElement(
						'div',
						{ className: 'input-form dis-flx' },
						_react2.default.createElement(
							'div',
							{ className: 'dtl-radio' },
							_react2.default.createElement(
								'label',
								{ className: 'container-radio' },
								'Male',
								_react2.default.createElement('input', { type: 'radio', name: 'gender', value: 'on', checked: this.state.gender == 'm', onChange: () => this.setState({ gender: 'm' }) }),
								_react2.default.createElement('span', { className: 'doc-checkmark' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'dtl-radio' },
							_react2.default.createElement(
								'label',
								{ className: 'container-radio' },
								'Female',
								_react2.default.createElement('input', { type: 'radio', name: 'gender', value: 'on', checked: this.state.gender == 'f', onClick: () => this.setState({ gender: 'f' }) }),
								_react2.default.createElement('span', { className: 'doc-checkmark' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'dtl-radio' },
							_react2.default.createElement(
								'label',
								{ className: 'container-radio' },
								'Others',
								_react2.default.createElement('input', { type: 'radio', name: 'gender', value: 'on', checked: this.state.gender == 'o', onClick: () => this.setState({ gender: 'o' }) }),
								_react2.default.createElement('span', { className: 'doc-checkmark' })
							)
						),
						this.state.dateModal ? _react2.default.createElement(
							'div',
							{ className: 'calendar-overlay' },
							_react2.default.createElement(
								'div',
								{ className: 'date-picker-modal' },
								_react2.default.createElement(_rcCalendar2.default, {
									showWeekNumber: false,
									defaultValue: moment(new Date()),
									disabledDate: date => {
										return date.diff(moment(new Date()), 'days') > -1;
									},
									showToday: true,
									onSelect: this.selectDateFromCalendar.bind(this)
								})
							)
						) : ""
					),
					this.state.validateError.indexOf('gender') > -1 ? _react2.default.createElement(
						'span',
						{ className: 'error-msg gender-error-msg' },
						'Required'
					) : ''
				),
				_react2.default.createElement(
					'div',
					{ className: 'form-group fm-grp mrg-mt0 slt-nw-input summery-dob-cont' },
					_react2.default.createElement(
						'div',
						{ className: 'lbl-txt' },
						'DOB:',
						_react2.default.createElement(
							'p',
							{ className: 'dob-input-sub' },
							'dd/mm/yyyy'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'input-form' },
						_react2.default.createElement(_newDateSelector2.default, _extends({}, this.props, { getNewDate: this.getNewDate.bind(this), is_dob_error: this.state.is_dob_error, old_dob: this.state.dob, is_summary: true }))
					),
					!this.state.dob && this.state.validateError.indexOf('dob') > -1 ? _react2.default.createElement(
						'span',
						{ className: 'error-msg' },
						'Required'
					) : ''
				),
				this.props.tabView ? _react2.default.createElement(
					'div',
					{ className: `${this.props.tabView ? 'text-center' : 'btn-search-div btn-apply-div btn-sbmt btncallback'}` },
					_react2.default.createElement(
						'a',
						{ href: 'javascript:void(0);', className: 'ipd-frm-btn', onClick: this.submitClicked.bind(this) },
						'Submit'
					)
				) : ''
			),
			this.props.tabView ? '' : _react2.default.createElement(
				'div',
				{ className: `${this.props.tabView ? ' btn-apply-div  mt-20' : 'btn-search-div btn-apply-div btn-sbmt btncallback'}` },
				_react2.default.createElement(
					'a',
					{ href: 'javascript:void(0);', className: 'btn-search', onClick: this.submitClicked.bind(this) },
					'Submit'
				)
			),
			this.state.submitFormSuccess ? _react2.default.createElement(_ipdThankYouScreen2.default, _extends({}, this.props, { togglePopup: this.togglePopup.bind(this) })) : ''
		);
	}
}

exports.default = IpdTabForm;

/***/ }),

/***/ "./dev/js/components/ipd/ipdThankYouScreen.js":
/*!****************************************************!*\
  !*** ./dev/js/components/ipd/ipdThankYouScreen.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IpdThankYouScreen extends _react2.default.Component {

	signUpClicked() {
		this.props.history.push('/login');
	}
	render() {
		let userLogin = _storage2.default.checkAuth() || false;
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement('div', { className: 'custom-overlay', onClick: () => this.props.tabView ? this.props.togglePopup(false) : this.props.history.push('/') }),
			_react2.default.createElement(
				'div',
				{ className: `custom-popup thanks-popup text-center ${userLogin ? 'login-cls' : ''}` },
				_react2.default.createElement(
					'div',
					{ className: 'thumb-icon' },
					_react2.default.createElement('img', { src: "/assets" + "/images/thumbsup.png", alt: '' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'cross-btn' },
					_react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/close.png', alt: '', onClick: () => this.props.tabView ? this.props.togglePopup(false) : this.props.history.push('/') })
				),
				_react2.default.createElement(
					'div',
					{ className: 'pop-head text-center' },
					'Your request has been received.'
				),
				_react2.default.createElement(
					'p',
					null,
					'Our medical expert will call you shortly and help you with the following:'
				),
				_react2.default.createElement(
					'ul',
					{ className: 'med-help' },
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('img', { src: "/assets" + "/images/tick.png", alt: '' }),
						'Find the right Doctor and Hospital '
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('img', { src: "/assets" + "/images/tick.png", alt: '' }),
						'Comparing Surgery/Procedure cost'
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement('img', { src: "/assets" + "/images/tick.png", alt: '' }),
						'Managing Hospital Process'
					)
				),
				userLogin ? '' : _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'a',
						{ href: 'javascript:void(0);', className: 'btn-search btn-singup', onClick: this.signUpClicked.bind(this) },
						'Signup on Docprime'
					),
					_react2.default.createElement(
						'a',
						{ href: 'javascript:void(0);', className: 'btn-coupan' },
						'& Get coupons worth \u20B9300 '
					)
				)
			)
		);
	}
}

exports.default = IpdThankYouScreen;

/***/ }),

/***/ "./dev/js/containers/ipd/IpdForm.js":
/*!******************************************!*\
  !*** ./dev/js/containers/ipd/IpdForm.js ***!
  \******************************************/
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

var _IPDFormView = __webpack_require__(/*! ../../components/ipd/IPDFormView.js */ "./dev/js/components/ipd/IPDFormView.js");

var _IPDFormView2 = _interopRequireDefault(_IPDFormView);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IPDForm extends _react2.default.Component {

	componentDidMount() {
		if (window) {
			window.scrollTo(0, 0);
		}
		if (!this.props.defaultProfile && _storage2.default.checkAuth()) {
			this.props.getUserProfile();
		}
		if (this.props.match.params.id && this.props.match.params.id != 'price') {
			this.props.getIpdInfo(this.props.match.params.id);
		}
	}
	render() {

		return _react2.default.createElement(_IPDFormView2.default, this.props);
	}
}

const mapStateToProps = (state, passedProps) => {

	const {
		selectedCriterias,
		ipd_info,
		IPD_INFO_LOADED,
		commonSelectedCriterias
	} = state.SEARCH_CRITERIA_IPD;

	const {
		selectedLocation
	} = state.SEARCH_CRITERIA_OPD;

	const {
		defaultProfile,
		profiles,
		offerList
	} = state.USER;

	return {
		selectedCriterias,
		ipd_info,
		IPD_INFO_LOADED,
		defaultProfile,
		profiles,
		offerList,
		selectedLocation,
		commonSelectedCriterias
	};
};

const mapDispatchToProps = dispatch => {

	return {
		getIpdInfo: ipd_id => dispatch((0, _index.getIpdInfo)(ipd_id)),
		submitIPDForm: (formData, selectedLocation, cb) => dispatch((0, _index.submitIPDForm)(formData, selectedLocation, cb)),
		getUserProfile: () => dispatch((0, _index.getUserProfile)()),
		getOfferList: (lat, long) => dispatch((0, _index.getOfferList)(lat, long)),
		ipdPopupFired: () => dispatch((0, _index.ipdPopupFired)())
	};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IPDForm);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1doYXRzQXBwT3B0aW4vV2hhdHNBcHBPcHRpblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaXBkL0lQREZvcm1WaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9JcGRUYWJGb3JtLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2lwZC9pcGRUaGFua1lvdVNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pcGQvSXBkRm9ybS5qcyJdLCJuYW1lcyI6WyJXaGF0c0FwcE9wdGluVmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwid2hhdHNhcHBfb3B0aW5fVmlldyIsInNob3VsZFJlbmRlciIsInByb2ZpbGVzIiwid2hhdHNhcHBfb3B0aW4iLCJpc0FwcG9pbnRtZW50Iiwid2hhdHNhcHBfaXNfZGVjbGluZWQiLCJpc1VzZXJQcm9maWxlIiwidG9nZ2xlV2hhdHNhcCIsInN0YXR1cyIsImUiLCJwcm9maWxlRGF0YSIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJlZGl0VXNlclByb2ZpbGUiLCJpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInNldFN0YXRlIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsInJlbmRlciIsIkFTU0VUU19CQVNFX1VSTCIsImJpbmQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIklQREZvcm1WaWV3IiwiY29tcG9uZW50RGlkTW91bnQiLCJ0YWJWaWV3IiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsImd0bURhdGEiLCJzZWxlY3RlZElkIiwibWF0Y2giLCJwYXJhbXMiLCJob3NwaXRhbF9pZCIsInNlbGVjdGVkTG9jYXRpb24iLCJsYXQiLCJsb25nIiwiZ2VvbWV0cnkiLCJsbmciLCJnZXRPZmZlckxpc3QiLCJpcGRfaW5mbyIsIm9mZmVyTGlzdCIsImZpbHRlciIsIngiLCJzbGlkZXJfbG9jYXRpb24iLCJsZW5ndGgiLCJtb21lbnQiLCJJcGRUYWJGb3JtIiwibmFtZSIsInBob25lX251bWJlciIsImVtYWlsIiwiZ2VuZGVyIiwiZG9iIiwidmFsaWRhdGVFcnJvciIsImRhdGVNb2RhbCIsImZvcm1hdHRlZERhdGUiLCJzdWJtaXRGb3JtU3VjY2VzcyIsImlzRG9iVmFsaWRhdGVkIiwiZGVmYXVsdFByb2ZpbGUiLCJpc0R1bW15VXNlciIsInVzZXJEYXRhIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNlbGVjdERhdGVGcm9tQ2FsZW5kYXIiLCJkYXRlIiwidG9EYXRlIiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiaW5wdXRIYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJkZCIsImdldERhdGUiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwidG9kYXkiLCJvcGVuQ2FsZW5kYXIiLCJzdWJtaXRDbGlja2VkIiwic2VsZiIsInB1c2giLCJpcGRfaWQiLCJpbmNsdWRlcyIsImZvcm1EYXRhIiwiaXBkX3Byb2NlZHVyZSIsImhvc3BpdGFsIiwidXRtX3RhZ3MiLCJ1dG1fc291cmNlIiwidXRtX21lZGl1bSIsInV0bV90ZXJtIiwidXRtX2NhbXBhaWduIiwicmVmZXJyZXIiLCJnY2xpZCIsInVybCIsIndpbmRvdyIsImhyZWYiLCJmb3JtU291cmNlIiwic291cmNlIiwic3VibWl0SVBERm9ybSIsImVycm9yIiwicmVzcG9uc2UiLCJpcGRQb3B1cEZpcmVkIiwic2V0VGltZW91dCIsInRvZ2dsZVBvcHVwIiwidG9nZ2xlIiwiZ2V0TmV3RGF0ZSIsInR5cGUiLCJuZXdEYXRlIiwiaXNWYWxpZERvYiIsImNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIiwiYWJvdXQiLCJpbmRleE9mIiwiZGlmZiIsImlzX2RvYl9lcnJvciIsIklwZFRoYW5rWW91U2NyZWVuIiwic2lnblVwQ2xpY2tlZCIsImhpc3RvcnkiLCJ1c2VyTG9naW4iLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiSVBERm9ybSIsInNjcm9sbFRvIiwiZ2V0VXNlclByb2ZpbGUiLCJnZXRJcGRJbmZvIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJzZWxlY3RlZENyaXRlcmlhcyIsIklQRF9JTkZPX0xPQURFRCIsIlNFQVJDSF9DUklURVJJQV9JUEQiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLGlCQUFOLFNBQWdDQyxnQkFBTUMsU0FBdEMsQ0FBZ0Q7QUFDNUNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjs7QUFFQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsaUNBQW9CO0FBRFgsU0FBYjtBQUdIOztBQUVEQyxtQkFBYztBQUNWLFlBQUcsS0FBS0gsS0FBTCxDQUFXSSxRQUFkLEVBQXVCO0FBQ25CLGdCQUFJLEtBQUtKLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkMsY0FBcEIsSUFBcUMsSUFBekMsRUFBOEM7QUFDMUMsb0JBQUcsS0FBS0wsS0FBTCxDQUFXTSxhQUFYLElBQTRCLENBQUMsS0FBS04sS0FBTCxDQUFXSSxRQUFYLENBQW9CQyxjQUFqRCxJQUFtRSxDQUFDLEtBQUtMLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkcsb0JBQTNGLEVBQWdIO0FBQzVHLDJCQUFPLElBQVA7QUFDSCxpQkFGRCxNQUVLO0FBQ0QsMkJBQU8sS0FBUDtBQUNIO0FBQ0osYUFORCxNQU1LO0FBQ0Qs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Q2YsUUFBRCxFQUFXcEQsZ0JBQVgsRUFBNkJzRyxFQUE3QixLQUFvQ0QsU0FBUywwQkFBY2pELFFBQWQsRUFBd0JwRCxnQkFBeEIsRUFBMENzRyxFQUExQyxDQUFULENBRjdDO0FBR05YLGtCQUFnQixNQUFNVSxTQUFTLDRCQUFULENBSGhCO0FBSU5oRyxnQkFBYyxDQUFDSixHQUFELEVBQU1DLElBQU4sS0FBZW1HLFNBQVMseUJBQWFwRyxHQUFiLEVBQWtCQyxJQUFsQixDQUFULENBSnZCO0FBS05vRSxpQkFBZSxNQUFNK0IsU0FBUywyQkFBVDtBQUxmLEVBQVA7QUFPQSxDQVREO2tCQVVlLHlCQUFRUixlQUFSLEVBQXlCTyxrQkFBekIsRUFBNkNYLE9BQTdDLEMiLCJmaWxlIjoiMjIuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgV2hhdHNBcHBPcHRpblZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aGF0c2FwcF9vcHRpbl9WaWV3OnRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZFJlbmRlcigpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnByb2ZpbGVzKXtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzLndoYXRzYXBwX29wdGluICE9bnVsbCl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5pc0FwcG9pbnRtZW50ICYmICF0aGlzLnByb3BzLnByb2ZpbGVzLndoYXRzYXBwX29wdGluICYmICF0aGlzLnByb3BzLnByb2ZpbGVzLndoYXRzYXBwX2lzX2RlY2xpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5pc1VzZXJQcm9maWxlKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gICAgXG4gICAgfVxuXG4gICAgdG9nZ2xlV2hhdHNhcChzdGF0dXMsZSkgeyAgICAgICBcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pc0FwcG9pbnRtZW50KXsgICAgICBcbiAgICAgICAgICAgIGxldCBwcm9maWxlRGF0YSA9IHsuLi50aGlzLnByb3BzLnByb2ZpbGVzfVxuICAgICAgICAgICAgaWYoc3RhdHVzKXtcbiAgICAgICAgICAgICAgICBwcm9maWxlRGF0YS53aGF0c2FwcF9vcHRpbiA9IHRydWVcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiWW91IHdoYXRzQXBwIG5vdGlmaWNhdGlvbnMgaGFzIGJlZW4gZW5hYmxlZC5cIn0pICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9maWxlRGF0YS53aGF0c2FwcF9pc19kZWNsaW5lZCA9IHRydWVcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwieW91ciB3aGF0c0FwcCBub3RpZmljYXRpb25zIGhhcyBiZWVuIGRpc2FibGVkLlwifSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZWRpdFVzZXJQcm9maWxlKHByb2ZpbGVEYXRhLCBwcm9maWxlRGF0YS5pZCAsKCk9PntcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aGF0c2FwcENhcmRDb250YWluZXInKVswXS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2hhdHNhcHBfb3B0aW5fVmlldzogc3RhdHVzIH0sKCkgPT57XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdXaGF0c2FwdG9nZ2xlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ1doYXRzYXAtdG9nZ2xlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZVdoYXRzYXAoc3RhdHVzKSAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZFJlbmRlcigpKVxuICAgICAgICAgICAgcmV0dXJuICg8ZGl2PjwvZGl2PilcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzQXBwb2ludG1lbnQ/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGF0c2FwcENhcmRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YS1sb2dvLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2EtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YS1sb2dvLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZSB3b3VsZCBsaWtlIHRvIHNlbmQgeW91IHVwZGF0ZXMgdGhyb3VnaCB3aGF0c2FwcDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsb3dEZWNsaW5lQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbGxvd0J0bnNcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzLHRydWUpfT5BbGxvdzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlY2xpbmVCdG5zXCIgc3R5bGU9e3tjb2xvcjonIzc1NzU3NSd9fW9uQ2xpY2s9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMsZmFsc2UpfT5EZWNsaW5lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcsIGZvbnRTaXplOiAnMTRweCcgfX0+RW5hYmxlIDxzcGFuIGNsYXNzTmFtZT1cInNtLXd0c3AtaW1nXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YS1sb2dvLXNtLnBuZ1wifSAvPldoYXRzQXBwPC9zcGFuPiBub3RpZmljYXRpb248aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMsIXRoaXMuc3RhdGUud2hhdHNhcHBfb3B0aW5fVmlldyl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUud2hhdHNhcHBfb3B0aW5fVmlld30gLz48c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFdoYXRzQXBwT3B0aW5WaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbW1vbnMvSG9tZS9mb290ZXInXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBUaGFua3lvdVBvdXAgZnJvbSAnLi9pcGRUaGFua1lvdVNjcmVlbi5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJylcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgQmFubmVyQ2Fyb3VzZWwgZnJvbSAnLi4vY29tbW9ucy9Ib21lL2Jhbm5lckNhcm91c2VsJztcbmltcG9ydCBJUERGb3JtIGZyb20gJy4vSXBkVGFiRm9ybS5qcydcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuXG5jbGFzcyBJUERGb3JtVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cblx0XHRpZighdGhpcy5wcm9wcy50YWJWaWV3KSB7XG5cblx0XHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSXBkTGVhZEdlbmVyYXRpb25QYWdlTGFuZGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnaXBkLWxlYWQtZ2VuZXJhdGlvbi1wYWdlLWxhbmRlZCcsIHNlbGVjdGVkSWQ6IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLCAnaG9zcGl0YWxJZCc6IHBhcnNlZC5ob3NwaXRhbF9pZCA/IHBhcnNlZC5ob3NwaXRhbF9pZCA6ICcnXG5cdFx0XHR9XG5cdFx0XHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuXG5cdFx0XHRsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9ICcnXG5cdFx0XHRsZXQgbGF0ID0gMjguNjQ0ODAwXG5cdFx0XHRsZXQgbG9uZyA9IDc3LjIxNjcyMVxuXHRcdFx0aWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuXHRcdFx0XHRzZWxlY3RlZExvY2F0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uO1xuXHRcdFx0XHRsYXQgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuXHRcdFx0XHRsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcblx0XHRcdFx0aWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG5cdFx0XHRcdGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnByb3BzLmdldE9mZmVyTGlzdChsYXQsIGxvbmcpXHRcblx0XHR9XG5cdFx0XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHsgaXBkX2luZm8gfSA9IHRoaXMucHJvcHNcblxuXHRcdGlmKHRoaXMucHJvcHMudGFiVmlldykge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8SVBERm9ybSB7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdFx0KVxuXHRcdH1lbHNlIHtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuXHRcdFx0XHRcdDxQcm9maWxlSGVhZGVyIC8+XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8TGVmdEJhciAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdpcGRfbGVhZF9mb3JtJykubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXJiLTIwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJhbm5lckNhcm91c2VsIHsuLi50aGlzLnByb3BzfSBzbGlkZXJMb2NhdGlvbj1cImlwZF9sZWFkX2Zvcm1cIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8SVBERm9ybSB7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxSaWdodEJhciBleHRyYUNsYXNzPVwiIGNoYXQtZmxvYXQtYnRuLTJcIiBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHQ8RGlzY2xhaW1lciAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSVBERm9ybVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmMtY2FsZW5kYXInO1xuY29uc3QgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBUaGFua3lvdVBvdXAgZnJvbSAnLi9pcGRUaGFua1lvdVNjcmVlbi5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJylcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgV2hhdHNBcHBPcHRpblZpZXcgZnJvbSAnLi4vY29tbW9ucy9XaGF0c0FwcE9wdGluL1doYXRzQXBwT3B0aW5WaWV3LmpzJ1xuaW1wb3J0IE5ld0RhdGVTZWxlY3RvciBmcm9tICcuLi9jb21tb25zL25ld0RhdGVTZWxlY3Rvci5qcydcblxuY2xhc3MgSXBkVGFiRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bmFtZTogJycsXG5cdFx0XHRwaG9uZV9udW1iZXI6ICcnLFxuXHRcdFx0ZW1haWw6ICcnLFxuXHRcdFx0Z2VuZGVyOiAnJyxcblx0XHRcdGRvYjogJycsXG5cdFx0XHR2YWxpZGF0ZUVycm9yOiBbXSxcblx0XHRcdGRhdGVNb2RhbDogZmFsc2UsXG5cdFx0XHRmb3JtYXR0ZWREYXRlOiAnJyxcblx0XHRcdHN1Ym1pdEZvcm1TdWNjZXNzOiBmYWxzZSxcblx0XHRcdHdoYXRzYXBwX29wdGluOiBmYWxzZSxcblx0XHRcdGlzRG9iVmFsaWRhdGVkOmZhbHNlXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGUgJiYgIXRoaXMuc3RhdGUubmFtZSAmJiB0aGlzLnByb3BzLnByb2ZpbGVzICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0gJiYgIXRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcblx0XHRcdGxldCB1c2VyRGF0YSA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV1cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBuYW1lOiB1c2VyRGF0YS5uYW1lIHx8ICcnLCBwaG9uZV9udW1iZXI6IHVzZXJEYXRhLnBob25lX251bWJlciArICcnIHx8ICcnLCBlbWFpbDogdXNlckRhdGEuZW1haWwgfHwgJycsIGdlbmRlcjogdXNlckRhdGEuZ2VuZGVyIHx8ICcnLCBkb2I6IHVzZXJEYXRhLmRvYiB8fCAnJywgZm9ybWF0dGVkRGF0ZTogdXNlckRhdGEuZG9iIHx8ICcnLCBpc0RvYlZhbGlkYXRlZDp1c2VyRGF0YS5kb2I/dHJ1ZTpmYWxzZSB9KVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0aWYgKG5leHRQcm9wcy5kZWZhdWx0UHJvZmlsZSAmJiAhdGhpcy5zdGF0ZS5uYW1lICYmIG5leHRQcm9wcy5wcm9maWxlcyAmJiBuZXh0UHJvcHMucHJvZmlsZXNbbmV4dFByb3BzLmRlZmF1bHRQcm9maWxlXSAmJiAhbmV4dFByb3BzLnByb2ZpbGVzW25leHRQcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXIpIHtcblx0XHRcdGxldCB1c2VyRGF0YSA9IG5leHRQcm9wcy5wcm9maWxlc1tuZXh0UHJvcHMuZGVmYXVsdFByb2ZpbGVdXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbmFtZTogdXNlckRhdGEubmFtZSB8fCAnJywgcGhvbmVfbnVtYmVyOiB1c2VyRGF0YS5waG9uZV9udW1iZXIgKyAnJyB8fCAnJywgZW1haWw6IHVzZXJEYXRhLmVtYWlsIHx8ICcnLCBnZW5kZXI6IHVzZXJEYXRhLmdlbmRlciB8fCAnJywgZG9iOiB1c2VyRGF0YS5kb2IgfHwgJycsIGZvcm1hdHRlZERhdGU6IHVzZXJEYXRhLmRvYiB8fCAnJywgaXNEb2JWYWxpZGF0ZWQ6dXNlckRhdGEuZG9iP3RydWU6ZmFsc2UgfSlcblx0XHR9XG5cdH1cblxuXHRzZWxlY3REYXRlRnJvbUNhbGVuZGFyKGRhdGUpIHtcblx0XHRpZiAoZGF0ZSkge1xuXHRcdFx0ZGF0ZSA9IGRhdGUudG9EYXRlKClcblx0XHRcdGxldCBmb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKGRhdGUpXG5cdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZG9iOiBkYXRlLCBmb3JtYXR0ZWREYXRlOiBmb3JtYXR0ZWREYXRlLCBkYXRlTW9kYWw6IGZhbHNlIH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBkYXRlTW9kYWw6IGZhbHNlIH0pXG5cdFx0fVxuXHR9XG5cblx0aW5wdXRIYW5kbGVyKGUpIHtcblx0XHRpZiAoZS50YXJnZXQubmFtZSA9PSAncGhvbmVfbnVtYmVyJykge1xuXHRcdFx0ZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMTBcblx0XHRcdFx0PyAnJ1xuXHRcdFx0XHQ6IHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcblx0XHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcblx0XHR9XG5cblx0fVxuXG5cdGdldEZvcm1hdHRlZERhdGUoZGF0ZSkge1xuXHRcdHZhciBkZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuXHRcdHZhciBtbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG5cdFx0dmFyIHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0aWYgKGRkIDwgMTApIHtcblx0XHRcdGRkID0gJzAnICsgZGQ7XG5cdFx0fVxuXHRcdGlmIChtbSA8IDEwKSB7XG5cdFx0XHRtbSA9ICcwJyArIG1tO1xuXHRcdH1cblx0XHR2YXIgdG9kYXkgPSB5eXl5ICsgJy0nICsgbW0gKyAnLScgKyBkZDtcblx0XHRyZXR1cm4gdG9kYXlcblx0fVxuXG5cdG9wZW5DYWxlbmRhcigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiB0cnVlIH0pXG5cdH1cblxuXHRzdWJtaXRDbGlja2VkKCkge1xuXHRcdGxldCBzZWxmID0gdGhpc1xuXHRcdGxldCB2YWxpZGF0ZUVycm9yID0gW11cblx0XHRpZiAoIXRoaXMuc3RhdGUubmFtZS5tYXRjaCgvXlthLXpBLVogXSskLykpIHtcblx0XHRcdHZhbGlkYXRlRXJyb3IucHVzaCgnbmFtZScpXG5cdFx0fVxuXG5cblx0XHRpZiAodGhpcy5zdGF0ZS5waG9uZV9udW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykpIHtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWxpZGF0ZUVycm9yLnB1c2goJ3Bob25lX251bWJlcicpXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3RhdGUuZW1haWwgPT0gJycpIHtcblxuXHRcdFx0dmFsaWRhdGVFcnJvci5wdXNoKCdlbWFpbCcpXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3RhdGUuZ2VuZGVyID09ICcnKSB7XG5cblx0XHRcdHZhbGlkYXRlRXJyb3IucHVzaCgnZ2VuZGVyJylcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuc3RhdGUuZW1haWwubWF0Y2goL1xcUytAXFxTK1xcLlxcUysvKSkge1xuXHRcdFx0dmFsaWRhdGVFcnJvci5wdXNoKCdlbWFpbCcpXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc3RhdGUuZG9iID09ICcnKSB7XG5cblx0XHRcdHZhbGlkYXRlRXJyb3IucHVzaCgnZG9iJylcblx0XHR9XG5cblx0XHRpZih0aGlzLnN0YXRlLmRvYiAmJiAhdGhpcy5zdGF0ZS5pc0RvYlZhbGlkYXRlZCl7XG5cdFx0XHR2YWxpZGF0ZUVycm9yLnB1c2goJ2RvYicpXG5cdFx0fVxuXHRcdFxuXHRcdGlmICh2YWxpZGF0ZUVycm9yLmxlbmd0aCkge1xuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGVFcnJvcjogdmFsaWRhdGVFcnJvciB9KVxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0ZUVycm9yOiB2YWxpZGF0ZUVycm9yIH0pXG5cdFx0XHRsZXQgaXBkX2lkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWRcblx0XHRcdGlmICghaXBkX2lkIHx8IGlwZF9pZC5pbmNsdWRlcygncHJpY2UnKSkge1xuXHRcdFx0XHRpcGRfaWQgPSAnJ1xuXHRcdFx0fVxuXHRcdFx0bGV0IGZvcm1EYXRhID0ge1xuXHRcdFx0XHQuLi50aGlzLnN0YXRlLFxuXHRcdFx0XHRpcGRfcHJvY2VkdXJlOiBpcGRfaWQsXG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhcnNlZC5ob3NwaXRhbF9pZCkge1xuXHRcdFx0XHRmb3JtRGF0YS5ob3NwaXRhbCA9IHBhcnNlZC5ob3NwaXRhbF9pZFxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdXRtX3RhZ3MgPSB7XG5cdCAgICAgICAgICAgIHV0bV9zb3VyY2U6IHBhcnNlZC51dG1fc291cmNlIHx8ICcnLFxuXHQgICAgICAgICAgICB1dG1fbWVkaXVtOiBwYXJzZWQudXRtX21lZGl1bSB8fCAnJyxcblx0ICAgICAgICAgICAgdXRtX3Rlcm06IHBhcnNlZC51dG1fdGVybSB8fCAnJyxcblx0ICAgICAgICAgICAgdXRtX2NhbXBhaWduOiBwYXJzZWQudXRtX2NhbXBhaWduIHx8ICcnLFxuXHQgICAgICAgICAgICByZWZlcnJlcjogZG9jdW1lbnQucmVmZXJyZXIgfHwgJycsXG5cdCAgICAgICAgICAgIGdjbGlkOiBwYXJzZWQuZ2NsaWQgfHwgJydcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBmb3JtRGF0YS5kYXRhID0ge31cblx0ICAgICAgICBmb3JtRGF0YS5kYXRhLnV0bV90YWdzID0gdXRtX3RhZ3Ncblx0ICAgICAgICBmb3JtRGF0YS5kYXRhLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG5cdCAgICAgICAgZm9ybURhdGEuZGF0YS5mb3JtU291cmNlID0gdGhpcy5wcm9wcy5mb3JtU291cmNlIHx8ICdMZWFkRm9ybSdcblx0ICAgICAgICBmb3JtRGF0YS5zb3VyY2UgPSAnQ29zdGVzdGltYXRlJ1xuXHRcdFx0dGhpcy5wcm9wcy5zdWJtaXRJUERGb3JtKGZvcm1EYXRhLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24sIChlcnJvciwgcmVzcG9uc2UpID0+IHtcblx0XHRcdFx0aWYgKCFlcnJvciAmJiByZXNwb25zZSkge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuaXBkUG9wdXBGaXJlZCgpXG5cdFx0XHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdFx0XHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lwZExlYWRHZW5lcmF0aW9uU3VjY2VzcycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogcmVzcG9uc2UuaWQgfHwgJycsICdldmVudCc6ICdpcGQtbGVhZC1nZW5lcmF0aW9uLXN1Y2Nlc3MnLCBzZWxlY3RlZElkOiBpcGRfaWQsICdob3NwaXRhbElkJzogcGFyc2VkLmhvc3BpdGFsX2lkID8gcGFyc2VkLmhvc3BpdGFsX2lkIDogJycsJ21vYmlsZU5vJzogdGhpcy5zdGF0ZS5waG9uZV9udW1iZXJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgc3VibWl0Rm9ybVN1Y2Nlc3M6IHRydWUgfSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgdHJ5IGFmdGVyIHNvbWUgdGltZVwiIH0pXG5cdFx0XHRcdFx0fSwgNTAwKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblxuXG5cdH1cblxuXHR0b2dnbGVQb3B1cCh0b2dnbGUpe1xuXHRcdGxldCBmb3JtRGF0YSA9IHtcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0cGhvbmVfbnVtYmVyOiAnJyxcblx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdGdlbmRlcjogJycsXG5cdFx0XHRkb2I6ICcnLFxuXHRcdFx0dmFsaWRhdGVFcnJvcjogW10sXG5cdFx0XHRkYXRlTW9kYWw6IGZhbHNlLFxuXHRcdFx0Zm9ybWF0dGVkRGF0ZTogJycsXG5cdFx0XHRzdWJtaXRGb3JtU3VjY2VzczogZmFsc2Vcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7Li4uZm9ybURhdGF9KVxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlJlY29yZCBTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5XCIgfSlcblx0XHR9LCA1MDApXG5cdH1cblxuXHR0b2dnbGVXaGF0c2FwKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoYXRzYXBwX29wdGluOiAhdGhpcy5zdGF0ZS53aGF0c2FwcF9vcHRpbiB9KVxuICAgIH1cblxuICAgIGdldE5ld0RhdGUodHlwZSxuZXdEYXRlLGlzVmFsaWREb2Ipe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG9iOiBuZXdEYXRlLGlzRG9iVmFsaWRhdGVkOmlzVmFsaWREb2J9LCgpPT57XG4gICAgICAgIH0pXG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXHRcdGxldCB7IGlwZF9pbmZvIH0gPSB0aGlzLnByb3BzXG5cblx0XHRpZih0aGlzLnByb3BzLnRhYlZpZXcgfHwgISh0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKSkgIHtcblx0XHRcdGlwZF9pbmZvID0gbnVsbFxuXHRcdH1cblxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLnRhYlZpZXc/Jyc6J2lwZC1zZWN0aW9uIGlwZC1mb3JtLXZpZXcnfWB9IHN0eWxlPXt7ICdtYXJnaW5Ub3AnOiAnMTFweCcgfX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCAhPSAncHJpY2UnICYmIGlwZF9pbmZvICYmIGlwZF9pbmZvLmFib3V0ICYmIGlwZF9pbmZvLmFib3V0Lm5hbWUgP1xuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZyBwdC0wXCI+e2BHZXQgQ29zdCBFc3RpbWF0ZSBvZiAke2lwZF9pbmZvLmFib3V0Lm5hbWV9YH08L2g0PlxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQoIHRoaXMucHJvcHMudGFiVmlldyB8fCAhKGlwZF9pbmZvICYmIGlwZF9pbmZvLmFib3V0ICYmIGlwZF9pbmZvLmFib3V0Lm5hbWUpICk/XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZWFkLWZvcm1cIj5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmcgaGQtbXJnbi10b3BcIj5HZXQgSGVscCBmcm9tIE1lZGljYWwgRXhwZXJ0czwvaDI+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0OicnXHRcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmZvLXBvcHVwXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZtLWdycCBtdC0wXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxibC10eHRcIj5OYW1lOjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1mb3JtXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwibm9uZVwiIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3RoaXMuc3RhdGUudmFsaWRhdGVFcnJvci5pbmRleE9mKCduYW1lJykgPiAtMSA/ICdlcnJvci1vbicgOiAnJ31gfSBuYW1lPVwibmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3IuaW5kZXhPZignbmFtZScpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPlJlcXVpcmVkPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm0tZ3JwXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxibC10eHRcIj5Nb2JpbGUgTm86PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZvcm1cIj48aW5wdXQgdHlwZT1cIm51bWJlclwiIGF1dG9Db21wbGV0ZT1cIm5vbmVcIiBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3IuaW5kZXhPZigncGhvbmVfbnVtYmVyJykgPiAtMSA/ICdlcnJvci1vbicgOiAnJ31gfSBuYW1lPVwicGhvbmVfbnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVfbnVtYmVyfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gLz48L2Rpdj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS52YWxpZGF0ZUVycm9yLmluZGV4T2YoJ3Bob25lX251bWJlcicpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPlJlcXVpcmVkPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm0tZ3JwIGVtYWlsRm9ybVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYmwtdHh0XCI+RW1haWwgSWQ6PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZvcm1cIj48aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJub25lXCIgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dGhpcy5zdGF0ZS52YWxpZGF0ZUVycm9yLmluZGV4T2YoJ2VtYWlsJykgPiAtMSA/ICdlcnJvci1vbicgOiAnJ31gfSBuYW1lPVwiZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IC8+PC9kaXY+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUudmFsaWRhdGVFcnJvci5pbmRleE9mKCdlbWFpbCcpID4gLTEgP1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPlJlcXVpcmVkPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmbS1ncnAgbXJnLW1iMFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYmwtdHh0IGdlbmRlci1sYWJlbFwiPkdlbmRlcjo8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZm9ybSBkaXMtZmx4XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPk1hbGVcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImdlbmRlclwiIHZhbHVlPVwib25cIiBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PSAnbSd9IG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2VuZGVyOiAnbScgfSl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5GZW1hbGVcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImdlbmRlclwiIHZhbHVlPVwib25cIiBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PSAnZid9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBnZW5kZXI6ICdmJyB9KX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPk90aGVyc1xuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZ2VuZGVyXCIgdmFsdWU9XCJvblwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09ICdvJ30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdlbmRlcjogJ28nIH0pfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuZGF0ZU1vZGFsID8gPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1vdmVybGF5XCI+PGRpdiBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1tb2RhbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENhbGVuZGFyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dXZWVrTnVtYmVyPXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXttb21lbnQobmV3IERhdGUoKSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkRGF0ZT17KGRhdGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZGF0ZS5kaWZmKG1vbWVudCgobmV3IERhdGUpKSwgJ2RheXMnKSA+IC0xXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dUb2RheVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17dGhpcy5zZWxlY3REYXRlRnJvbUNhbGVuZGFyLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PjwvZGl2PiA6IFwiXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUudmFsaWRhdGVFcnJvci5pbmRleE9mKCdnZW5kZXInKSA+IC0xID9cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tc2cgZ2VuZGVyLWVycm9yLW1zZ1wiPlJlcXVpcmVkPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm0tZ3JwIG1yZy1tdDAgc2x0LW53LWlucHV0IHN1bW1lcnktZG9iLWNvbnRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGJsLXR4dFwiPkRPQjpcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImRvYi1pbnB1dC1zdWJcIj5kZC9tbS95eXl5PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZvcm1cIj5cblx0XHRcdFx0XHRcdFx0ey8qPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwibm9uZVwiIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3RoaXMuc3RhdGUudmFsaWRhdGVFcnJvci5pbmRleE9mKCdkb2InKSA+IC0xID8gJ2Vycm9yLW9uJyA6ICcnfWB9IG5hbWU9XCJkb2JcIiB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtYXR0ZWREYXRlfSBvbkNsaWNrPXt0aGlzLm9wZW5DYWxlbmRhci5iaW5kKHRoaXMpfSBvbkZvY3VzPXt0aGlzLm9wZW5DYWxlbmRhci5iaW5kKHRoaXMpfSAvPiovfVxuXHRcdFx0XHRcdFx0XHQ8TmV3RGF0ZVNlbGVjdG9yIHsuLi50aGlzLnByb3BzfSBnZXROZXdEYXRlPXt0aGlzLmdldE5ld0RhdGUuYmluZCh0aGlzKX0gaXNfZG9iX2Vycm9yPXt0aGlzLnN0YXRlLmlzX2RvYl9lcnJvcn0gb2xkX2RvYj17dGhpcy5zdGF0ZS5kb2J9IGlzX3N1bW1hcnk9e3RydWV9Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdCF0aGlzLnN0YXRlLmRvYiAmJiB0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3IuaW5kZXhPZignZG9iJykgPiAtMSA/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+UmVxdWlyZWQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwibXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcsIGZvbnRTaXplOiAnMTRweCcgfX0+RW5hYmxlIDxzcGFuIGNsYXNzTmFtZT1cInNtLXd0c3AtaW1nXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YS1sb2dvLXNtLnBuZ1wifSAvPldoYXRzQXBwPC9zcGFuPiBub3RpZmljYXRpb248aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMpfSBjaGVja2VkPXt0aGlzLnN0YXRlLndoYXRzYXBwX29wdGlufSAvPjxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIFx0PC9kaXY+Ki99XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMudGFiVmlldz9cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLnRhYlZpZXc/J3RleHQtY2VudGVyJzonYnRuLXNlYXJjaC1kaXYgYnRuLWFwcGx5LWRpdiBidG4tc2JtdCBidG5jYWxsYmFjayd9YH0+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwiaXBkLWZybS1idG5cIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdENsaWNrZWQuYmluZCh0aGlzKX0+U3VibWl0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy50YWJWaWV3PycnXG5cdFx0XHRcdFx0OjxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLnRhYlZpZXc/JyBidG4tYXBwbHktZGl2ICBtdC0yMCc6J2J0bi1zZWFyY2gtZGl2IGJ0bi1hcHBseS1kaXYgYnRuLXNibXQgYnRuY2FsbGJhY2snfWB9PlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJidG4tc2VhcmNoXCIgb25DbGljaz17dGhpcy5zdWJtaXRDbGlja2VkLmJpbmQodGhpcyl9PlN1Ym1pdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5zdWJtaXRGb3JtU3VjY2VzcyA/XG5cdFx0XHRcdFx0XHQ8VGhhbmt5b3VQb3VwIHsuLi50aGlzLnByb3BzfSB0b2dnbGVQb3B1cD17dGhpcy50b2dnbGVQb3B1cC5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdH1cblxuXHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXBkVGFiRm9ybSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5cbmNsYXNzIElwZFRoYW5rWW91U2NyZWVuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRcblx0c2lnblVwQ2xpY2tlZCgpe1xuXHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKVxuXHR9XHRcblx0cmVuZGVyKCl7XG5cdFx0bGV0IHVzZXJMb2dpbiA9IFNUT1JBR0UuY2hlY2tBdXRoKCkgfHwgZmFsc2Vcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tb3ZlcmxheVwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLnRhYlZpZXc/dGhpcy5wcm9wcy50b2dnbGVQb3B1cChmYWxzZSk6dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKX0+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGN1c3RvbS1wb3B1cCB0aGFua3MtcG9wdXAgdGV4dC1jZW50ZXIgJHt1c2VyTG9naW4/J2xvZ2luLWNscyc6Jyd9YH0+XG5cdFx0XHQgICA8ZGl2IGNsYXNzTmFtZT1cInRodW1iLWljb25cIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3RodW1ic3VwLnBuZ1wifSBhbHQ9XCJcIiAvPjwvZGl2PlxuXHQgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3MtYnRuXCI+PGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiBhbHQ9XCJcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy50YWJWaWV3P3RoaXMucHJvcHMudG9nZ2xlUG9wdXAoZmFsc2UpOnRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyl9Lz48L2Rpdj5cblx0ICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC1oZWFkIHRleHQtY2VudGVyXCI+WW91ciByZXF1ZXN0IGhhcyBiZWVuIHJlY2VpdmVkLjwvZGl2PlxuXHQgICAgICAgICAgIDxwPk91ciBtZWRpY2FsIGV4cGVydCB3aWxsIGNhbGwgeW91IHNob3J0bHkgYW5kIGhlbHAgeW91IHdpdGggdGhlIGZvbGxvd2luZzo8L3A+XG5cdCAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZC1oZWxwXCI+XG5cdCAgICAgICAgICAgICA8bGk+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy90aWNrLnBuZ1wifSBhbHQ9XCJcIiAvPkZpbmQgdGhlIHJpZ2h0IERvY3RvciBhbmQgSG9zcGl0YWwgPC9saT5cblx0ICAgICAgICAgICAgIDxsaT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3RpY2sucG5nXCJ9IGFsdD1cIlwiIC8+Q29tcGFyaW5nIFN1cmdlcnkvUHJvY2VkdXJlIGNvc3Q8L2xpPlxuXHQgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvdGljay5wbmdcIn0gYWx0PVwiXCIgLz5NYW5hZ2luZyBIb3NwaXRhbCBQcm9jZXNzPC9saT5cblx0ICAgICAgICAgICA8L3VsPlxuXHQgICAgICAgICAgIFx0e1xuXHQgICAgICAgICAgIFx0XHR1c2VyTG9naW4/Jydcblx0ICAgICAgICAgICBcdFx0OjxkaXY+XG5cdCAgICAgICAgICAgXHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJidG4tc2VhcmNoIGJ0bi1zaW5ndXBcIiBvbkNsaWNrPXt0aGlzLnNpZ25VcENsaWNrZWQuYmluZCh0aGlzKX0+U2lnbnVwIG9uIERvY3ByaW1lPC9hPlxuXHRcdFx0ICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJidG4tY291cGFuXCI+JmFtcDsgR2V0IGNvdXBvbnMgd29ydGgg4oK5MzAwIDwvYT5cblx0ICAgICAgICAgICBcdFx0PC9kaXY+XHRcblx0ICAgICAgICAgICBcdH1cblx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgIFxuXHQgICAgICAgIDwvZGl2PlxuXHQgICAgICAgPC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElwZFRoYW5rWW91U2NyZWVuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZ2V0SXBkSW5mbywgc3VibWl0SVBERm9ybSwgZ2V0VXNlclByb2ZpbGUsIGdldE9mZmVyTGlzdCwgaXBkUG9wdXBGaXJlZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgSVBERm9ybVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pcGQvSVBERm9ybVZpZXcuanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnO1xuXG5jbGFzcyBJUERGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiAod2luZG93KSB7XG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMClcblx0XHR9XG5cdFx0aWYgKCF0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlICYmIFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcblx0XHRcdHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKVxuXHRcdH1cblx0XHRpZiAodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQgJiYgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQhPSdwcmljZScpIHtcblx0XHRcdHRoaXMucHJvcHMuZ2V0SXBkSW5mbyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZClcblx0XHR9XG5cblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PElQREZvcm1WaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG5cblx0Y29uc3Qge1xuXHRcdHNlbGVjdGVkQ3JpdGVyaWFzLFxuXHRcdGlwZF9pbmZvLFxuXHRcdElQRF9JTkZPX0xPQURFRCxcblx0XHRjb21tb25TZWxlY3RlZENyaXRlcmlhc1xuXHR9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0lQRFxuXG5cdGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvblxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cblx0Y29uc3Qge1xuXHRcdGRlZmF1bHRQcm9maWxlLFxuXHRcdHByb2ZpbGVzLFxuXHRcdG9mZmVyTGlzdFxuXHR9ID0gc3RhdGUuVVNFUlxuXG5cdHJldHVybiB7XG5cdFx0c2VsZWN0ZWRDcml0ZXJpYXMsXG5cdFx0aXBkX2luZm8sXG5cdFx0SVBEX0lORk9fTE9BREVELFxuXHRcdGRlZmF1bHRQcm9maWxlLFxuXHRcdHByb2ZpbGVzLFxuXHRcdG9mZmVyTGlzdCxcblx0XHRzZWxlY3RlZExvY2F0aW9uLFxuXHRcdGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cblx0cmV0dXJuIHtcblx0XHRnZXRJcGRJbmZvOiAoaXBkX2lkKSA9PiBkaXNwYXRjaChnZXRJcGRJbmZvKGlwZF9pZCkpLFxuXHRcdHN1Ym1pdElQREZvcm06IChmb3JtRGF0YSwgc2VsZWN0ZWRMb2NhdGlvbiwgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdElQREZvcm0oZm9ybURhdGEsIHNlbGVjdGVkTG9jYXRpb24sIGNiKSksXG5cdFx0Z2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuXHRcdGdldE9mZmVyTGlzdDogKGxhdCwgbG9uZykgPT4gZGlzcGF0Y2goZ2V0T2ZmZXJMaXN0KGxhdCwgbG9uZykpLFxuXHRcdGlwZFBvcHVwRmlyZWQ6ICgpID0+IGRpc3BhdGNoKGlwZFBvcHVwRmlyZWQoKSlcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSVBERm9ybSkiXSwic291cmNlUm9vdCI6IiJ9