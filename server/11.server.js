exports.ids = [11];
exports.modules = {

/***/ "./dev/js/components/commons/ratingsProfileView/RatingStars.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/RatingStars.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RatingStars extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { average_rating, rating_count } = this.props;

        let rating = '';
        if (average_rating) {
            rating = Math.ceil(average_rating * 2) / 2;
        }

        let ratingArray = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            ratingArray.push(_react2.default.createElement('img', { key: i, src: "/assets" + '/img/customer-icons/rating-star-filled.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
        }

        if (rating != Math.floor(rating)) {
            ratingArray.push(_react2.default.createElement('img', { key: 'half', src: "/assets" + '/img/customer-icons/halfstar_new.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
        }

        let emptyStars = Math.floor(5 - rating);
        if (emptyStars) {
            for (let i = 0; i < emptyStars; i++) {
                ratingArray.push(_react2.default.createElement('img', { key: i + 'empty', src: "/assets" + '/img/customer-icons/rating-star-empty.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
            }
        }
        return _react2.default.createElement(
            'div',
            { className: 'cstm-doc-rtng', style: this.props.justifyCenter ? { justifyContent: 'center' } : {} },
            ratingArray,
            rating_count ? _react2.default.createElement(
                'span',
                null,
                '(',
                rating_count,
                ')'
            ) : ''
        );
    }
}

exports.default = RatingStars;

/***/ }),

/***/ "./dev/js/containers/ipd/ipdLeadForm.js":
/*!**********************************************!*\
  !*** ./dev/js/containers/ipd/ipdLeadForm.js ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class IpdLeadForm extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			phone_number: '',
			showForm: true,
			comments: '',
			gender: ''
			/*			gender: '',
   			comments: '',
   			whatsapp_optin: true*/
		};
	}

	inputHandler(e) {
		e.stopPropagation();
		if (e.target.name == 'phone_number') {
			e.target.value.length <= 10 ? e.target.value.length == 10 ? this.setState({
				[e.target.name]: e.target.value
			}) : this.setState({
				[e.target.name]: e.target.value
			}) : '';
		} else {
			this.setState({ [e.target.name]: e.target.value });
		}
	}

	submitLeadForm() {
		if (!this.state.first_name.match(/^[a-zA-Z ]+$/)) {
			setTimeout(() => {
				if (!this.state.first_name) {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please enter patient's name." });
				} else {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Name should only contain alphabets." });
				}
			}, 500);
			return;
		}

		if (this.state.phone_number.match(/^[56789]{1}[0-9]{9}$/)) {} else {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Mobile No" });
			return;
		}

		if (!this.state.gender) {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select your Gender" });
			return;
		}

		if (!this.state.comments) {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please enter your Comment" });
			return;
		}

		const parsed = queryString.parse(this.props.location.search);

		let formData = _extends({}, this.state);

		if (this.props.hospital_id) {
			formData.hospital = this.props.hospital_id;
		}

		if (this.props.procedure_id) {
			formData.ipd_procedure = this.props.procedure_id;
		}

		if (this.props.doctor_id) {
			formData.doctor = parseInt(this.props.doctor_id);
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
		formData.data.formSource = this.props.formSource || 'PopupLeadForm';
		if (this.props.sourceTag) {
			formData.source = this.props.sourceTag;
		}

		this.props.submitIPDForm(formData, this.props.selectedLocation, (error, response) => {
			if (!error && response) {
				//Save popup data for doctor profile data auto filled
				if (this.props.is_booking_page) {
					this.props.saveIpdPopupData('popup1', formData);
				}
				this.props.ipdPopupFired();
				if (this.props.saveLeadIdForUpdation && typeof this.props.saveLeadIdForUpdation == 'function') {
					this.props.saveLeadIdForUpdation(response);
				}
				if (this.state.first_name && this.state.first_name.includes('test')) {} else {
					let gtmData = {
						'Category': 'ConsumerApp', 'Action': 'IPD-popup-lead', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': response.id || '', 'event': 'IPD-popup-lead', selectedId: '', 'hospitalId': '', 'from': 'leadForm', 'mobileNo': this.state.phone_number
					};
					_gtm2.default.sendEvent({ data: gtmData });
				}

				if (this.props.noToastMessage) {} else {
					setTimeout(() => {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Your request has been submitted sucessfully" });
					}, 500);
				}
				this.setState({ showForm: false });
			} else {
				setTimeout(() => {
					_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please try after some time" });
				}, 500);
			}
			this.props.submitLeadFormGeneration(this.state);
		});
	}

	closePopUpClicked(skip = false) {
		if (skip) {
			let gtmData = {
				'Category': 'ConsumerApp', 'Action': 'IPD-1popup-skip-clicked', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'IPD-1popup-skip-clicked', 'formNo': '1'
			};
			_gtm2.default.sendEvent({ data: gtmData });
		}
		const parsed = queryString.parse(this.props.location.search);
		if (parsed.get_feedback && parsed.get_feedback == '1' || this.props.forcedPopup) {
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please fill the feedback form" });
		} else {
			this.redirectToChat();
			this.props.submitLeadFormGeneration(this.state);
		}
	}

	redirectToChat() {
		/*let params = JSON.stringify(this.state)
  this.props.history.push(`/mobileviewchat?product=IPD&params=${params}&source=${this.props.hospital_id}`)*/
	}

	toggleWhatsap(e) {
		this.setState({ whatsapp_optin: !this.state.whatsapp_optin });
	}

	getSpecializationNames(specializationData) {
		try {
			return specializationData.map(x => x.name).join(',');
		} catch (e) {}
	}

	render() {
		const parsed = queryString.parse(this.props.location.search);
		let specialization_name = null;
		let vowels = 'aeiou';
		let is_vowel = false;
		if (this.props.specialization_data && this.props.specialization_data.length) {
			specialization_name = this.getSpecializationNames(this.props.specialization_data) || '';

			if (specialization_name && specialization_name.length && vowels.includes(specialization_name[0].toLowerCase())) {
				is_vowel = true;
			}
		}

		return _react2.default.createElement(
			'div',
			{ className: 'search-el-popup-overlay cancel-overlay-zindex', onClick: e => {
					e.preventDefault();
					e.stopPropagation();
					this.closePopUpClicked();
				} },
			_react2.default.createElement(
				'div',
				{ className: 'search-el-popup ipd-pop-width booking-popup', onClick: e => {
						e.preventDefault();
						e.stopPropagation();
					} },
				_react2.default.createElement(
					'div',
					{ className: 'widget p-12' },
					this.state.showForm ? _react2.default.createElement(
						'div',
						{ className: 'p-relative' },
						specialization_name ? _react2.default.createElement(
							'p',
							{ className: 'ipd-needHelp' },
							`Need an appointment with ${is_vowel ? 'an' : 'a'} ${specialization_name} ${this.props.hospital_name ? `at ${this.props.hospital_name}?` : ''}`
						) : this.props.doctor_name ? _react2.default.createElement(
							'p',
							{ className: 'ipd-needHelp' },
							`Need to book an appointment with ${this.props.doctor_name} ${this.props.hospital_name ? `at ${this.props.hospital_name}?` : ''}`
						) : this.props.hospital_name ? _react2.default.createElement(
							'p',
							{ className: 'ipd-needHelp' },
							`Need help with an appointment ${this.props.hospital_name ? `at ${this.props.hospital_name}?` : ''}`
						) : '',
						this.props.procedure_name ? _react2.default.createElement(
							'section',
							null,
							_react2.default.createElement(
								'p',
								{ className: 'ipd-needHelp' },
								`Need help with ${this.props.procedure_name}?`
							)
						) : '',
						!parsed.type || true ? _react2.default.createElement(
							_react2.default.Fragment,
							null,
							_react2.default.createElement(
								'p',
								{ className: 'srch-el-ipd-cont ipd-pop-tick-text' },
								_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
								' ',
								_react2.default.createElement(
									'span',
									null,
									this.props.procedure_name ? 'Book the right Doctor/Hospital' : 'Get upto 30% Off on Appointments'
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'srch-el-ipd-cont ipd-pop-tick-text' },
								_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
								' ',
								_react2.default.createElement(
									'span',
									null,
									this.props.procedure_name ? 'Compare Surgery Cost across Hospitals' : 'Instant Booking Confirmation'
								)
							),
							_react2.default.createElement(
								'p',
								{ className: 'srch-el-ipd-cont ipd-pop-tick-text' },
								_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
								' ',
								_react2.default.createElement(
									'span',
									{ className: 'd-block' },
									this.props.procedure_name ? 'Special Prices for Docprime Customers' : 'Dedicated Doctor for Advice'
								)
							)
						) : '',
						!parsed.type && this.props.procedure_name ? _react2.default.createElement(
							'p',
							{ className: 'srch-el-ipd-cont ipd-pop-tick-text' },
							_react2.default.createElement('img', { className: 'ipd-pop-tick', src: "/assets" + '/images/tick.png' }),
							' ',
							_react2.default.createElement(
								'span',
								{ className: 'd-block' },
								'Dedicated Doctor for Medical Advice'
							)
						) : '',
						_react2.default.createElement(
							'div',
							{ className: 'ipd-pop-scrl', onClick: e => {
									e.stopPropagation();
									e.preventDefault();
								} },
							_react2.default.createElement(
								'div',
								{ className: 'ipd-inp-section' },
								_react2.default.createElement(
									'div',
									{ className: 'nm-lst-inputcnt' },
									_react2.default.createElement('input', { style: { marginRight: '8px' }, type: 'text', value: this.state.first_name, name: 'first_name', placeholder: '*First Name', onChange: this.inputHandler.bind(this) }),
									_react2.default.createElement('input', { type: 'text', value: this.state.last_name, name: 'last_name', placeholder: 'Last Name', onChange: this.inputHandler.bind(this) })
								),
								_react2.default.createElement('input', { type: 'text', value: this.state.phone_number, name: 'phone_number', placeholder: '*Mobile Number', onChange: this.inputHandler.bind(this) }),
								_react2.default.createElement(
									'div',
									{ className: 'slt-nw-input radio-mbl mb-10' },
									_react2.default.createElement(
										'label',
										{ className: 'slt-label text-left', htmlFor: 'male' },
										'*Gender:'
									),
									_react2.default.createElement(
										'div',
										{ className: 'slt-label-radio ml-2' },
										_react2.default.createElement(
											'div',
											{ className: 'dtl-radio' },
											_react2.default.createElement(
												'label',
												{ className: 'container-radio', onClick: () => this.setState({ gender: 'm' }) },
												'Male',
												_react2.default.createElement('input', { type: 'radio', name: 'gender', name: 'gender', checked: this.state.gender === 'm' }),
												_react2.default.createElement('span', { className: 'doc-checkmark' })
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'dtl-radio' },
											_react2.default.createElement(
												'label',
												{ className: 'container-radio', onClick: () => this.setState({ gender: 'f' }) },
												'Female',
												_react2.default.createElement('input', { type: 'radio', name: 'gender', value: 'm', name: 'gender', checked: this.state.gender === 'f' }),
												_react2.default.createElement('span', { className: 'doc-checkmark' })
											)
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'ipd-lead-textarea' },
									_react2.default.createElement('textarea', { placeholder: '*How can we help you?', style: { fontWeight: 500 }, rows: '1', name: 'comments', value: this.state.comments, onChange: this.inputHandler.bind(this) })
								),
								_react2.default.createElement(
									'div',
									{ className: 'skip-btn-sgn' },
									_react2.default.createElement(
										'button',
										{ className: 'ipd-inp-sbmt', onClick: e => {
												e.stopPropagation();
												e.preventDefault();
												this.submitLeadForm();
											} },
										'Click to Proceed'
									),
									parsed && parsed.get_feedback && parsed.get_feedback == '1' || this.props.forcedPopup ? '' : _react2.default.createElement(
										'p',
										{ onClick: e => {
												e.stopPropagation();
												e.preventDefault();
												this.closePopUpClicked(true);
											} },
										'Skip'
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'popUp-whtsappEnable-ipd' },
									_react2.default.createElement(
										'div',
										{ className: 'whtsappEnable-container' },
										_react2.default.createElement(
											'p',
											{ className: 'text-center fw-500', style: { fontSize: 9, color: '#8a8a8a' } },
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
							)
						)
					) : ''
				)
			)
		);
	}
}

const mapStateToProps = (state, passedProps) => {

	const {
		selectedLocation
	} = state.SEARCH_CRITERIA_OPD;

	return {
		selectedLocation
	};
};

const mapDispatchToProps = dispatch => {

	return {
		submitIPDForm: (formData, selectedLocation, cb) => dispatch((0, _index.submitIPDForm)(formData, selectedLocation, cb)),
		ipdPopupFired: () => dispatch((0, _index.ipdPopupFired)()),
		saveIpdPopupData: (type, data) => dispatch((0, _index.saveIpdPopupData)(type, data))
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IpdLeadForm);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdTdGFycy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pcGQvaXBkTGVhZEZvcm0uanMiXSwibmFtZXMiOlsiUmF0aW5nU3RhcnMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInJlbmRlciIsImF2ZXJhZ2VfcmF0aW5nIiwicmF0aW5nX2NvdW50IiwicmF0aW5nIiwiTWF0aCIsImNlaWwiLCJyYXRpbmdBcnJheSIsImkiLCJmbG9vciIsInB1c2giLCJBU1NFVFNfQkFTRV9VUkwiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwiaGVpZ2h0IiwiZW1wdHlTdGFycyIsImp1c3RpZnlDZW50ZXIiLCJqdXN0aWZ5Q29udGVudCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIklwZExlYWRGb3JtIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBob25lX251bWJlciIsInNob3dGb3JtIiwiY29tbWVudHMiLCJnZW5kZXIiLCJpbnB1dEhhbmRsZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJzdWJtaXRMZWFkRm9ybSIsIm1hdGNoIiwic2V0VGltZW91dCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiZm9ybURhdGEiLCJob3NwaXRhbF9pZCIsImhvc3BpdGFsIiwicHJvY2VkdXJlX2lkIiwiaXBkX3Byb2NlZHVyZSIsImRvY3Rvcl9pZCIsImRvY3RvciIsInBhcnNlSW50IiwidXRtX3RhZ3MiLCJ1dG1fc291cmNlIiwidXRtX21lZGl1bSIsInV0bV90ZXJtIiwidXRtX2NhbXBhaWduIiwicmVmZXJyZXIiLCJkb2N1bWVudCIsImdjbGlkIiwiZGF0YSIsInVybCIsIndpbmRvdyIsImhyZWYiLCJmb3JtU291cmNlIiwic291cmNlVGFnIiwic291cmNlIiwic3VibWl0SVBERm9ybSIsInNlbGVjdGVkTG9jYXRpb24iLCJlcnJvciIsInJlc3BvbnNlIiwiaXNfYm9va2luZ19wYWdlIiwic2F2ZUlwZFBvcHVwRGF0YSIsImlwZFBvcHVwRmlyZWQiLCJzYXZlTGVhZElkRm9yVXBkYXRpb24iLCJpbmNsdWRlcyIsImd0bURhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJpZCIsInNlbGVjdGVkSWQiLCJzZW5kRXZlbnQiLCJub1RvYXN0TWVzc2FnZSIsInN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbiIsImNsb3NlUG9wVXBDbGlja2VkIiwic2tpcCIsImdldF9mZWVkYmFjayIsImZvcmNlZFBvcHVwIiwicmVkaXJlY3RUb0NoYXQiLCJ0b2dnbGVXaGF0c2FwIiwid2hhdHNhcHBfb3B0aW4iLCJnZXRTcGVjaWFsaXphdGlvbk5hbWVzIiwic3BlY2lhbGl6YXRpb25EYXRhIiwibWFwIiwieCIsImpvaW4iLCJzcGVjaWFsaXphdGlvbl9uYW1lIiwidm93ZWxzIiwiaXNfdm93ZWwiLCJzcGVjaWFsaXphdGlvbl9kYXRhIiwidG9Mb3dlckNhc2UiLCJwcmV2ZW50RGVmYXVsdCIsImhvc3BpdGFsX25hbWUiLCJkb2N0b3JfbmFtZSIsInByb2NlZHVyZV9uYW1lIiwidHlwZSIsImJpbmQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLE1BQU1BLFdBQU4sU0FBMEJDLGdCQUFNQyxTQUFoQyxDQUEwQztBQUN0Q0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFHSDtBQUNEQyxhQUFTO0FBQ0wsWUFBSSxFQUFFQyxjQUFGLEVBQWtCQyxZQUFsQixLQUFtQyxLQUFLSixLQUE1Qzs7QUFFQSxZQUFJSyxTQUFTLEVBQWI7QUFDQSxZQUFJRixjQUFKLEVBQW9CO0FBQ2hCRSxxQkFBVUMsS0FBS0MsSUFBTCxDQUFVSixpQkFBaUIsQ0FBM0IsQ0FBRCxHQUFrQyxDQUEzQztBQUNIOztBQUVELFlBQUlLLGNBQWMsRUFBbEI7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsS0FBS0ksS0FBTCxDQUFXTCxNQUFYLENBQXBCLEVBQXdDSSxHQUF4QyxFQUE2QztBQUN6Q0Qsd0JBQVlHLElBQVosQ0FBaUIsdUNBQUssS0FBS0YsQ0FBVixFQUFhLEtBQUtHLFNBQWVBLEdBQUcsNENBQXBDLEVBQWtGLFdBQVUsb0JBQTVGLEVBQWlILE9BQU8sRUFBRUMsT0FBTyxLQUFLYixLQUFMLENBQVdhLEtBQXBCLEVBQTJCQyxhQUFhLENBQXhDLEVBQTJDQyxRQUFRLEtBQUtmLEtBQUwsQ0FBV2UsTUFBOUQsRUFBeEgsR0FBakI7QUFDSDs7QUFFRCxZQUFJVixVQUFVQyxLQUFLSSxLQUFMLENBQVdMLE1BQVgsQ0FBZCxFQUFrQztBQUM5Qkcsd0JBQVlHLElBQVosQ0FBaUIsdUNBQUssS0FBSSxNQUFULEVBQWdCLEtBQUtDLFNBQWVBLEdBQUcsc0NBQXZDLEVBQStFLFdBQVUsb0JBQXpGLEVBQThHLE9BQU8sRUFBRUMsT0FBTyxLQUFLYixLQUFMLENBQVdhLEtBQXBCLEVBQTJCQyxhQUFhLENBQXhDLEVBQTJDQyxRQUFRLEtBQUtmLEtBQUwsQ0FBV2UsTUFBOUQsRUFBckgsR0FBakI7QUFDSDs7QUFFRCxZQUFJQyxhQUFhVixLQUFLSSxLQUFMLENBQVcsSUFBSUwsTUFBZixDQUFqQjtBQUNBLFlBQUlXLFVBQUosRUFBZ0I7QUFDWixpQkFBSyxJQUFJUCxJQUFJLENBQWIsRUFBZ0JBLElBQUlPLFVBQXBCLEVBQWdDUCxHQUFoQyxFQUFxQztBQUNqQ0QsNEJBQVlHLElBQVosQ0FBaUIsdUNBQUssS0FBS0YsSUFBSSxPQUFkLEVBQXVCLEtBQUtHLFNBQWVBLEdBQUcsMkNBQTlDLEVBQTJGLFdBQVUsb0JBQXJHLEVBQTBILE9BQU8sRUFBRUMsT0FBTyxLQUFLYixLQUFMLENBQVdhLEtBQXBCLEVBQTJCQyxhQUFhLENBQXhDLEVBQTJDQyxRQUFRLEtBQUtmLEtBQUwsQ0FBV2UsTUFBOUQsRUFBakksR0FBakI7QUFDSDtBQUNKO0FBQ0QsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWYsRUFBK0IsT0FBTyxLQUFLZixLQUFMLENBQVdpQixhQUFYLEdBQTJCLEVBQUVDLGdCQUFnQixRQUFsQixFQUEzQixHQUEwRCxFQUFoRztBQUNLVix1QkFETDtBQUdRSiwyQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFRQSw0QkFBUjtBQUFBO0FBQUEsYUFESixHQUNvQztBQUo1QyxTQURKO0FBU0g7QUF2Q3FDOztrQkEwQzNCUixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDZjs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLE1BQU11QixjQUFjQyxtQkFBT0EsQ0FBQyxrQ0FBUixDQUFwQjs7QUFFQSxNQUFNQyxXQUFOLFNBQTBCeEIsZ0JBQU1DLFNBQWhDLENBQTBDOztBQUV6Q0MsYUFBWUMsS0FBWixFQUFtQjtBQUNsQixRQUFNQSxLQUFOO0FBQ0EsT0FBS0MsS0FBTCxHQUFhO0FBQ1pxQixlQUFZLEVBREE7QUFFWkMsY0FBVyxFQUZDO0FBR1pDLGlCQUFjLEVBSEY7QUFJWkMsYUFBVSxJQUpFO0FBS1pDLGFBQVUsRUFMRTtBQU1aQyxXQUFRO0FBQ1I7OztBQVBZLEdBQWI7QUFXQTs7QUFFREMsY0FBYUMsQ0FBYixFQUFnQjtBQUNmQSxJQUFFQyxlQUFGO0FBQ0EsTUFBSUQsRUFBRUUsTUFBRixDQUFTQyxJQUFULElBQWlCLGNBQXJCLEVBQXFDO0FBQ3BDSCxLQUFFRSxNQUFGLENBQVNFLEtBQVQsQ0FBZUMsTUFBZixJQUF5QixFQUF6QixHQUNHTCxFQUFFRSxNQUFGLENBQVNFLEtBQVQsQ0FBZUMsTUFBZixJQUF5QixFQUF6QixHQUNDLEtBQUtDLFFBQUwsQ0FBYztBQUNmLEtBQUNOLEVBQUVFLE1BQUYsQ0FBU0MsSUFBVixHQUFpQkgsRUFBRUUsTUFBRixDQUFTRTtBQURYLElBQWQsQ0FERCxHQUlDLEtBQUtFLFFBQUwsQ0FBYztBQUNmLEtBQUNOLEVBQUVFLE1BQUYsQ0FBU0MsSUFBVixHQUFpQkgsRUFBRUUsTUFBRixDQUFTRTtBQURYLElBQWQsQ0FMSixHQVFHLEVBUkg7QUFTQSxHQVZELE1BVU87QUFDTixRQUFLRSxRQUFMLENBQWMsRUFBRSxDQUFDTixFQUFFRSxNQUFGLENBQVNDLElBQVYsR0FBaUJILEVBQUVFLE1BQUYsQ0FBU0UsS0FBNUIsRUFBZDtBQUNBO0FBRUQ7O0FBRURHLGtCQUFpQjtBQUNoQixNQUFJLENBQUMsS0FBS25DLEtBQUwsQ0FBV3FCLFVBQVgsQ0FBc0JlLEtBQXRCLENBQTRCLGNBQTVCLENBQUwsRUFBa0Q7QUFDakRDLGNBQVcsTUFBTTtBQUNoQixRQUFJLENBQUMsS0FBS3JDLEtBQUwsQ0FBV3FCLFVBQWhCLEVBQTRCO0FBQzNCaUIsNEJBQVNDLElBQVQsQ0FBYyxFQUFFQyxLQUFLLGVBQVAsRUFBd0JDLE1BQU0sOEJBQTlCLEVBQWQ7QUFDQSxLQUZELE1BRU87QUFDTkgsNEJBQVNDLElBQVQsQ0FBYyxFQUFFQyxLQUFLLGVBQVAsRUFBd0JDLE1BQU0scUNBQTlCLEVBQWQ7QUFDQTtBQUNELElBTkQsRUFNRyxHQU5IO0FBT0E7QUFDQTs7QUFFRCxNQUFJLEtBQUt6QyxLQUFMLENBQVd1QixZQUFYLENBQXdCYSxLQUF4QixDQUE4QixzQkFBOUIsQ0FBSixFQUEyRCxDQUUxRCxDQUZELE1BRU87QUFDTkUsMEJBQVNDLElBQVQsQ0FBYyxFQUFFQyxLQUFLLGVBQVAsRUFBd0JDLE1BQU0sOEJBQTlCLEVBQWQ7QUFDQTtBQUNBOztBQUVELE1BQUksQ0FBQyxLQUFLekMsS0FBTCxDQUFXMEIsTUFBaEIsRUFBd0I7QUFDdkJZLDBCQUFTQyxJQUFULENBQWMsRUFBRUMsS0FBSyxlQUFQLEVBQXdCQyxNQUFNLDJCQUE5QixFQUFkO0FBQ0E7QUFDQTs7QUFFRCxNQUFJLENBQUMsS0FBS3pDLEtBQUwsQ0FBV3lCLFFBQWhCLEVBQTBCO0FBQ3pCYSwwQkFBU0MsSUFBVCxDQUFjLEVBQUVDLEtBQUssZUFBUCxFQUF3QkMsTUFBTSwyQkFBOUIsRUFBZDtBQUNBO0FBQ0E7O0FBRUQsUUFBTUMsU0FBU3hCLFlBQVl5QixLQUFaLENBQWtCLEtBQUs1QyxLQUFMLENBQVc2QyxRQUFYLENBQW9CQyxNQUF0QyxDQUFmOztBQUVBLE1BQUlDLHdCQUNBLEtBQUs5QyxLQURMLENBQUo7O0FBSUEsTUFBSSxLQUFLRCxLQUFMLENBQVdnRCxXQUFmLEVBQTRCO0FBQzNCRCxZQUFTRSxRQUFULEdBQW9CLEtBQUtqRCxLQUFMLENBQVdnRCxXQUEvQjtBQUNBOztBQUVELE1BQUksS0FBS2hELEtBQUwsQ0FBV2tELFlBQWYsRUFBNkI7QUFDNUJILFlBQVNJLGFBQVQsR0FBeUIsS0FBS25ELEtBQUwsQ0FBV2tELFlBQXBDO0FBQ0E7O0FBRUQsTUFBSSxLQUFLbEQsS0FBTCxDQUFXb0QsU0FBZixFQUEwQjtBQUN6QkwsWUFBU00sTUFBVCxHQUFrQkMsU0FBUyxLQUFLdEQsS0FBTCxDQUFXb0QsU0FBcEIsQ0FBbEI7QUFDQTs7QUFFRCxNQUFJRyxXQUFXO0FBQ2RDLGVBQVliLE9BQU9hLFVBQVAsSUFBcUIsRUFEbkI7QUFFZEMsZUFBWWQsT0FBT2MsVUFBUCxJQUFxQixFQUZuQjtBQUdkQyxhQUFVZixPQUFPZSxRQUFQLElBQW1CLEVBSGY7QUFJZEMsaUJBQWNoQixPQUFPZ0IsWUFBUCxJQUF1QixFQUp2QjtBQUtkQyxhQUFVQyxTQUFTRCxRQUFULElBQXFCLEVBTGpCO0FBTWRFLFVBQU9uQixPQUFPbUIsS0FBUCxJQUFnQjtBQU5ULEdBQWY7O0FBU0FmLFdBQVNnQixJQUFULEdBQWdCLEVBQWhCO0FBQ0FoQixXQUFTZ0IsSUFBVCxDQUFjUixRQUFkLEdBQXlCQSxRQUF6QjtBQUNBUixXQUFTZ0IsSUFBVCxDQUFjQyxHQUFkLEdBQW9CQyxPQUFPcEIsUUFBUCxDQUFnQnFCLElBQXBDO0FBQ0FuQixXQUFTZ0IsSUFBVCxDQUFjSSxVQUFkLEdBQTJCLEtBQUtuRSxLQUFMLENBQVdtRSxVQUFYLElBQXlCLGVBQXBEO0FBQ0EsTUFBSSxLQUFLbkUsS0FBTCxDQUFXb0UsU0FBZixFQUEwQjtBQUN6QnJCLFlBQVNzQixNQUFULEdBQWtCLEtBQUtyRSxLQUFMLENBQVdvRSxTQUE3QjtBQUNBOztBQUVELE9BQUtwRSxLQUFMLENBQVdzRSxhQUFYLENBQXlCdkIsUUFBekIsRUFBbUMsS0FBSy9DLEtBQUwsQ0FBV3VFLGdCQUE5QyxFQUFnRSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsS0FBcUI7QUFDcEYsT0FBSSxDQUFDRCxLQUFELElBQVVDLFFBQWQsRUFBd0I7QUFDdkI7QUFDQSxRQUFJLEtBQUt6RSxLQUFMLENBQVcwRSxlQUFmLEVBQWdDO0FBQy9CLFVBQUsxRSxLQUFMLENBQVcyRSxnQkFBWCxDQUE0QixRQUE1QixFQUFzQzVCLFFBQXRDO0FBQ0E7QUFDRCxTQUFLL0MsS0FBTCxDQUFXNEUsYUFBWDtBQUNBLFFBQUksS0FBSzVFLEtBQUwsQ0FBVzZFLHFCQUFYLElBQW9DLE9BQVEsS0FBSzdFLEtBQUwsQ0FBVzZFLHFCQUFuQixJQUE2QyxVQUFyRixFQUFpRztBQUNoRyxVQUFLN0UsS0FBTCxDQUFXNkUscUJBQVgsQ0FBaUNKLFFBQWpDO0FBQ0E7QUFDRCxRQUFJLEtBQUt4RSxLQUFMLENBQVdxQixVQUFYLElBQXlCLEtBQUtyQixLQUFMLENBQVdxQixVQUFYLENBQXNCd0QsUUFBdEIsQ0FBK0IsTUFBL0IsQ0FBN0IsRUFBcUUsQ0FFcEUsQ0FGRCxNQUVPO0FBQ04sU0FBSUMsVUFBVTtBQUNiLGtCQUFZLGFBREMsRUFDYyxVQUFVLGdCQUR4QixFQUMwQyxjQUFjQyxjQUFJQyxTQUFKLE1BQW1CLEVBRDNFLEVBQytFLFVBQVVSLFNBQVNTLEVBQVQsSUFBZSxFQUR4RyxFQUM0RyxTQUFTLGdCQURySCxFQUN1SUMsWUFBWSxFQURuSixFQUN1SixjQUFjLEVBRHJLLEVBQ3lLLFFBQVEsVUFEakwsRUFDNkwsWUFBWSxLQUFLbEYsS0FBTCxDQUFXdUI7QUFEcE4sTUFBZDtBQUdBd0QsbUJBQUlJLFNBQUosQ0FBYyxFQUFFckIsTUFBTWdCLE9BQVIsRUFBZDtBQUNBOztBQUVELFFBQUksS0FBSy9FLEtBQUwsQ0FBV3FGLGNBQWYsRUFBK0IsQ0FFOUIsQ0FGRCxNQUVPO0FBQ04vQyxnQkFBVyxNQUFNO0FBQ2hCQyw2QkFBU0MsSUFBVCxDQUFjLEVBQUVDLEtBQUssZUFBUCxFQUF3QkMsTUFBTSw2Q0FBOUIsRUFBZDtBQUNBLE1BRkQsRUFFRyxHQUZIO0FBR0E7QUFDRCxTQUFLUCxRQUFMLENBQWMsRUFBRVYsVUFBVSxLQUFaLEVBQWQ7QUFDQSxJQTFCRCxNQTBCTztBQUNOYSxlQUFXLE1BQU07QUFDaEJDLDRCQUFTQyxJQUFULENBQWMsRUFBRUMsS0FBSyxlQUFQLEVBQXdCQyxNQUFNLDRCQUE5QixFQUFkO0FBQ0EsS0FGRCxFQUVHLEdBRkg7QUFHQTtBQUNELFFBQUsxQyxLQUFMLENBQVdzRix3QkFBWCxDQUFvQyxLQUFLckYsS0FBekM7QUFDQSxHQWpDRDtBQW1DQTs7QUFFRHNGLG1CQUFrQkMsT0FBTyxLQUF6QixFQUFnQztBQUMvQixNQUFJQSxJQUFKLEVBQVU7QUFDVCxPQUFJVCxVQUFVO0FBQ2IsZ0JBQVksYUFEQyxFQUNjLFVBQVUseUJBRHhCLEVBQ21ELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEcEYsRUFDd0YsU0FBUyx5QkFEakcsRUFDNEgsVUFBVTtBQUR0SSxJQUFkO0FBR0FELGlCQUFJSSxTQUFKLENBQWMsRUFBRXJCLE1BQU1nQixPQUFSLEVBQWQ7QUFDQTtBQUNELFFBQU1wQyxTQUFTeEIsWUFBWXlCLEtBQVosQ0FBa0IsS0FBSzVDLEtBQUwsQ0FBVzZDLFFBQVgsQ0FBb0JDLE1BQXRDLENBQWY7QUFDQSxNQUFLSCxPQUFPOEMsWUFBUCxJQUF1QjlDLE9BQU84QyxZQUFQLElBQXVCLEdBQS9DLElBQXVELEtBQUt6RixLQUFMLENBQVcwRixXQUF0RSxFQUFtRjtBQUNsRm5ELDBCQUFTQyxJQUFULENBQWMsRUFBRUMsS0FBSyxlQUFQLEVBQXdCQyxNQUFNLCtCQUE5QixFQUFkO0FBQ0EsR0FGRCxNQUVPO0FBQ04sUUFBS2lELGNBQUw7QUFDQSxRQUFLM0YsS0FBTCxDQUFXc0Ysd0JBQVgsQ0FBb0MsS0FBS3JGLEtBQXpDO0FBQ0E7QUFDRDs7QUFFRDBGLGtCQUFpQjtBQUNoQjs7QUFFQTs7QUFFREMsZUFBYy9ELENBQWQsRUFBaUI7QUFDaEIsT0FBS00sUUFBTCxDQUFjLEVBQUUwRCxnQkFBZ0IsQ0FBQyxLQUFLNUYsS0FBTCxDQUFXNEYsY0FBOUIsRUFBZDtBQUNBOztBQUVEQyx3QkFBdUJDLGtCQUF2QixFQUEyQztBQUMxQyxNQUFJO0FBQ0gsVUFBT0EsbUJBQW1CQyxHQUFuQixDQUF1QkMsS0FBS0EsRUFBRWpFLElBQTlCLEVBQW9Da0UsSUFBcEMsQ0FBeUMsR0FBekMsQ0FBUDtBQUNBLEdBRkQsQ0FFRSxPQUFPckUsQ0FBUCxFQUFVLENBRVg7QUFDRDs7QUFFRDNCLFVBQVM7QUFDUixRQUFNeUMsU0FBU3hCLFlBQVl5QixLQUFaLENBQWtCLEtBQUs1QyxLQUFMLENBQVc2QyxRQUFYLENBQW9CQyxNQUF0QyxDQUFmO0FBQ0EsTUFBSXFELHNCQUFzQixJQUExQjtBQUNBLE1BQUlDLFNBQVMsT0FBYjtBQUNBLE1BQUlDLFdBQVcsS0FBZjtBQUNBLE1BQUksS0FBS3JHLEtBQUwsQ0FBV3NHLG1CQUFYLElBQWtDLEtBQUt0RyxLQUFMLENBQVdzRyxtQkFBWCxDQUErQnBFLE1BQXJFLEVBQTZFO0FBQzVFaUUseUJBQXNCLEtBQUtMLHNCQUFMLENBQTRCLEtBQUs5RixLQUFMLENBQVdzRyxtQkFBdkMsS0FBK0QsRUFBckY7O0FBRUEsT0FBSUgsdUJBQXVCQSxvQkFBb0JqRSxNQUEzQyxJQUFxRGtFLE9BQU90QixRQUFQLENBQWdCcUIsb0JBQW9CLENBQXBCLEVBQXVCSSxXQUF2QixFQUFoQixDQUF6RCxFQUFnSDtBQUMvR0YsZUFBVyxJQUFYO0FBQ0E7QUFDRDs7QUFHRCxTQUNDO0FBQUE7QUFBQSxLQUFLLFdBQVUsK0NBQWYsRUFBK0QsU0FBVXhFLENBQUQsSUFBTztBQUM5RUEsT0FBRTJFLGNBQUY7QUFDQTNFLE9BQUVDLGVBQUY7QUFDQSxVQUFLeUQsaUJBQUw7QUFDQSxLQUpEO0FBS0M7QUFBQTtBQUFBLE1BQUssV0FBVSw2Q0FBZixFQUE2RCxTQUFVMUQsQ0FBRCxJQUFPO0FBQzVFQSxRQUFFMkUsY0FBRjtBQUNBM0UsUUFBRUMsZUFBRjtBQUVBLE1BSkQ7QUFLQztBQUFBO0FBQUEsT0FBSyxXQUFVLGFBQWY7QUFFRSxVQUFLN0IsS0FBTCxDQUFXd0IsUUFBWCxHQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQVdFMEUsNEJBQ0M7QUFBQTtBQUFBLFNBQUcsV0FBVSxjQUFiO0FBQThCLG1DQUEyQkUsV0FBVyxJQUFYLEdBQWtCLEdBQUksSUFBR0YsbUJBQW9CLElBQUcsS0FBS25HLEtBQUwsQ0FBV3lHLGFBQVgsR0FBNEIsTUFBSyxLQUFLekcsS0FBTCxDQUFXeUcsYUFBYyxHQUExRCxHQUErRCxFQUFHO0FBQTNLLE9BREQsR0FFRyxLQUFLekcsS0FBTCxDQUFXMEcsV0FBWCxHQUNEO0FBQUE7QUFBQSxTQUFHLFdBQVUsY0FBYjtBQUE4QiwyQ0FBbUMsS0FBSzFHLEtBQUwsQ0FBVzBHLFdBQVksSUFBRyxLQUFLMUcsS0FBTCxDQUFXeUcsYUFBWCxHQUE0QixNQUFLLEtBQUt6RyxLQUFMLENBQVd5RyxhQUFjLEdBQTFELEdBQStELEVBQUc7QUFBN0osT0FEQyxHQUVDLEtBQUt6RyxLQUFMLENBQVd5RyxhQUFYLEdBQ0Q7QUFBQTtBQUFBLFNBQUcsV0FBVSxjQUFiO0FBQThCLHdDQUFnQyxLQUFLekcsS0FBTCxDQUFXeUcsYUFBWCxHQUE0QixNQUFLLEtBQUt6RyxLQUFMLENBQVd5RyxhQUFjLEdBQTFELEdBQStELEVBQUc7QUFBaEksT0FEQyxHQUVDLEVBakJQO0FBcUJFLFdBQUt6RyxLQUFMLENBQVcyRyxjQUFYLEdBQTRCO0FBQUE7QUFBQTtBQUMzQjtBQUFBO0FBQUEsVUFBRyxXQUFVLGNBQWI7QUFBOEIsMEJBQWlCLEtBQUszRyxLQUFMLENBQVcyRyxjQUFlO0FBQXpFO0FBRDJCLE9BQTVCLEdBRUcsRUF2Qkw7QUFxQ0UsT0FBQ2hFLE9BQU9pRSxJQUFSLElBQWdCLElBQWhCLEdBQ0M7QUFBQyxzQkFBRCxDQUFPLFFBQVA7QUFBQTtBQUNDO0FBQUE7QUFBQSxVQUFHLFdBQVUsb0NBQWI7QUFBa0QsK0NBQUssV0FBVSxjQUFmLEVBQThCLEtBQUtoRyxTQUFlQSxHQUFHLGtCQUFyRCxHQUFsRDtBQUFBO0FBQThIO0FBQUE7QUFBQTtBQUFPLGNBQUtaLEtBQUwsQ0FBVzJHLGNBQVgsR0FBNEIsZ0NBQTVCLEdBQStEO0FBQXRFO0FBQTlILFFBREQ7QUFFQztBQUFBO0FBQUEsVUFBRyxXQUFVLG9DQUFiO0FBQWtELCtDQUFLLFdBQVUsY0FBZixFQUE4QixLQUFLL0YsU0FBZUEsR0FBRyxrQkFBckQsR0FBbEQ7QUFBQTtBQUE4SDtBQUFBO0FBQUE7QUFBTyxjQUFLWixLQUFMLENBQVcyRyxjQUFYLEdBQTRCLHVDQUE1QixHQUFzRTtBQUE3RTtBQUE5SCxRQUZEO0FBR0M7QUFBQTtBQUFBLFVBQUcsV0FBVSxvQ0FBYjtBQUFrRCwrQ0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBSy9GLFNBQWVBLEdBQUcsa0JBQXJELEdBQWxEO0FBQUE7QUFBOEg7QUFBQTtBQUFBLFdBQU0sV0FBVSxTQUFoQjtBQUEyQixjQUFLWixLQUFMLENBQVcyRyxjQUFYLEdBQTRCLHVDQUE1QixHQUFzRTtBQUFqRztBQUE5SDtBQUhELE9BREQsR0FNRyxFQTNDTDtBQStDRSxPQUFDaEUsT0FBT2lFLElBQVIsSUFBZ0IsS0FBSzVHLEtBQUwsQ0FBVzJHLGNBQTNCLEdBQ0M7QUFBQTtBQUFBLFNBQUcsV0FBVSxvQ0FBYjtBQUFrRCw4Q0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBSy9GLFNBQWVBLEdBQUcsa0JBQXJELEdBQWxEO0FBQUE7QUFBOEg7QUFBQTtBQUFBLFVBQU0sV0FBVSxTQUFoQjtBQUFBO0FBQUE7QUFBOUgsT0FERCxHQUVHLEVBakRMO0FBOEVDO0FBQUE7QUFBQSxTQUFLLFdBQVUsY0FBZixFQUE4QixTQUFVaUIsQ0FBRCxJQUFPO0FBQzdDQSxXQUFFQyxlQUFGO0FBQ0FELFdBQUUyRSxjQUFGO0FBQ0EsU0FIRDtBQUlDO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWY7QUFDQztBQUFBO0FBQUEsV0FBSyxXQUFVLGlCQUFmO0FBQ0Msa0RBQU8sT0FBTyxFQUFFMUYsYUFBYSxLQUFmLEVBQWQsRUFBc0MsTUFBSyxNQUEzQyxFQUFrRCxPQUFPLEtBQUtiLEtBQUwsQ0FBV3FCLFVBQXBFLEVBQWdGLE1BQUssWUFBckYsRUFBa0csYUFBWSxhQUE5RyxFQUE0SCxVQUFVLEtBQUtNLFlBQUwsQ0FBa0JpRixJQUFsQixDQUF1QixJQUF2QixDQUF0SSxHQUREO0FBRUMsa0RBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBSzVHLEtBQUwsQ0FBV3NCLFNBQXJDLEVBQWdELE1BQUssV0FBckQsRUFBaUUsYUFBWSxXQUE3RSxFQUF5RixVQUFVLEtBQUtLLFlBQUwsQ0FBa0JpRixJQUFsQixDQUF1QixJQUF2QixDQUFuRztBQUZELFNBREQ7QUFLQyxpREFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLNUcsS0FBTCxDQUFXdUIsWUFBckMsRUFBbUQsTUFBSyxjQUF4RCxFQUF1RSxhQUFZLGdCQUFuRixFQUFvRyxVQUFVLEtBQUtJLFlBQUwsQ0FBa0JpRixJQUFsQixDQUF1QixJQUF2QixDQUE5RyxHQUxEO0FBTUM7QUFBQTtBQUFBLFdBQUssV0FBVSw4QkFBZjtBQUNDO0FBQUE7QUFBQSxZQUFPLFdBQVUscUJBQWpCLEVBQXVDLFNBQVEsTUFBL0M7QUFBQTtBQUFBLFVBREQ7QUFFQztBQUFBO0FBQUEsWUFBSyxXQUFVLHNCQUFmO0FBQ0M7QUFBQTtBQUFBLGFBQUssV0FBVSxXQUFmO0FBQ0M7QUFBQTtBQUFBLGNBQU8sV0FBVSxpQkFBakIsRUFBbUMsU0FBUyxNQUFNLEtBQUsxRSxRQUFMLENBQWMsRUFBRVIsUUFBUSxHQUFWLEVBQWQsQ0FBbEQ7QUFBQTtBQUM4QyxxREFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxRQUF6QixFQUFrQyxNQUFLLFFBQXZDLEVBQWdELFNBQVMsS0FBSzFCLEtBQUwsQ0FBVzBCLE1BQVgsS0FBc0IsR0FBL0UsR0FEOUM7QUFFQyxvREFBTSxXQUFVLGVBQWhCO0FBRkQ7QUFERCxXQUREO0FBT0M7QUFBQTtBQUFBLGFBQUssV0FBVSxXQUFmO0FBQ0M7QUFBQTtBQUFBLGNBQU8sV0FBVSxpQkFBakIsRUFBbUMsU0FBUyxNQUFNLEtBQUtRLFFBQUwsQ0FBYyxFQUFFUixRQUFRLEdBQVYsRUFBZCxDQUFsRDtBQUFBO0FBQzhDLHFEQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLFFBQXpCLEVBQWtDLE9BQU0sR0FBeEMsRUFBNEMsTUFBSyxRQUFqRCxFQUEwRCxTQUFTLEtBQUsxQixLQUFMLENBQVcwQixNQUFYLEtBQXNCLEdBQXpGLEdBRDlDO0FBRUMsb0RBQU0sV0FBVSxlQUFoQjtBQUZEO0FBREQ7QUFQRDtBQUZELFNBTkQ7QUF3REM7QUFBQTtBQUFBLFdBQUssV0FBVSxtQkFBZjtBQUNDLHFEQUFVLGFBQVksdUJBQXRCLEVBQThDLE9BQU8sRUFBRW1GLFlBQVksR0FBZCxFQUFyRCxFQUEwRSxNQUFLLEdBQS9FLEVBQW1GLE1BQUssVUFBeEYsRUFBbUcsT0FBTyxLQUFLN0csS0FBTCxDQUFXeUIsUUFBckgsRUFBK0gsVUFBVSxLQUFLRSxZQUFMLENBQWtCaUYsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBekk7QUFERCxTQXhERDtBQTJEQztBQUFBO0FBQUEsV0FBSyxXQUFVLGNBQWY7QUFDQztBQUFBO0FBQUEsWUFBUSxXQUFVLGNBQWxCLEVBQWlDLFNBQVVoRixDQUFELElBQU87QUFDaERBLGNBQUVDLGVBQUY7QUFDQUQsY0FBRTJFLGNBQUY7QUFDQSxpQkFBS3BFLGNBQUw7QUFDQSxZQUpEO0FBQUE7QUFBQSxVQUREO0FBT0dPLG1CQUFVQSxPQUFPOEMsWUFBakIsSUFBaUM5QyxPQUFPOEMsWUFBUCxJQUF1QixHQUF6RCxJQUFpRSxLQUFLekYsS0FBTCxDQUFXMEYsV0FBNUUsR0FBMEYsRUFBMUYsR0FDRztBQUFBO0FBQUEsWUFBRyxTQUFVN0QsQ0FBRCxJQUFPO0FBQ3BCQSxjQUFFQyxlQUFGO0FBQ0FELGNBQUUyRSxjQUFGO0FBQ0EsaUJBQUtqQixpQkFBTCxDQUF1QixJQUF2QjtBQUNBLFlBSkM7QUFBQTtBQUFBO0FBUkwsU0EzREQ7QUEwRUM7QUFBQTtBQUFBLFdBQUssV0FBVSx5QkFBZjtBQUNDO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFFSTtBQUFBO0FBQUEsYUFBRyxXQUFVLG9CQUFiLEVBQWtDLE9BQU8sRUFBRXdCLFVBQVUsQ0FBWixFQUFlQyxPQUFPLFNBQXRCLEVBQXpDO0FBQUE7QUFBb0g7QUFBQTtBQUFBLGNBQUcsTUFBSyxRQUFSLEVBQWlCLFFBQU8sUUFBeEIsRUFBaUMsT0FBTyxFQUFFQSxPQUFRLDZCQUFWLEVBQXhDO0FBQUE7QUFBQSxZQUFwSDtBQUFBO0FBQWtPO0FBQUE7QUFBQSxjQUFHLE1BQUssVUFBUixFQUFtQixRQUFPLFFBQTFCLEVBQW1DLE9BQU8sRUFBRUEsT0FBUSw2QkFBVixFQUExQztBQUFBO0FBQUE7QUFBbE87QUFGSjtBQUREO0FBMUVEO0FBSkQ7QUE5RUQsTUFERCxHQXNLRztBQXhLTDtBQUxEO0FBTEQsR0FERDtBQTBMQTtBQWpYd0M7O0FBb1gxQyxNQUFNQyxrQkFBa0IsQ0FBQ2hILEtBQUQsRUFBUWlILFdBQVIsS0FBd0I7O0FBRS9DLE9BQU07QUFDTDNDO0FBREssS0FFRnRFLE1BQU1rSCxtQkFGVjs7QUFJQSxRQUFPO0FBQ041QztBQURNLEVBQVA7QUFHQSxDQVREOztBQVdBLE1BQU02QyxxQkFBc0JDLFFBQUQsSUFBYzs7QUFFeEMsUUFBTztBQUNOL0MsaUJBQWUsQ0FBQ3ZCLFFBQUQsRUFBV3dCLGdCQUFYLEVBQTZCK0MsRUFBN0IsS0FBb0NELFNBQVMsMEJBQWN0RSxRQUFkLEVBQXdCd0IsZ0JBQXhCLEVBQTBDK0MsRUFBMUMsQ0FBVCxDQUQ3QztBQUVOMUMsaUJBQWUsTUFBTXlDLFNBQVMsMkJBQVQsQ0FGZjtBQUdOMUMsb0JBQWtCLENBQUNpQyxJQUFELEVBQU83QyxJQUFQLEtBQWdCc0QsU0FBUyw2QkFBaUJULElBQWpCLEVBQXVCN0MsSUFBdkIsQ0FBVDtBQUg1QixFQUFQO0FBS0EsQ0FQRDs7a0JBU2UseUJBQVFrRCxlQUFSLEVBQXlCRyxrQkFBekIsRUFBNkMvRixXQUE3QyxDIiwiZmlsZSI6IjExLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJhdGluZ1N0YXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgYXZlcmFnZV9yYXRpbmcsIHJhdGluZ19jb3VudCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGxldCByYXRpbmcgPSAnJ1xuICAgICAgICBpZiAoYXZlcmFnZV9yYXRpbmcpIHtcbiAgICAgICAgICAgIHJhdGluZyA9IChNYXRoLmNlaWwoYXZlcmFnZV9yYXRpbmcgKiAyKSkgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJhdGluZ0FycmF5ID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLmZsb29yKHJhdGluZyk7IGkrKykge1xuICAgICAgICAgICAgcmF0aW5nQXJyYXkucHVzaCg8aW1nIGtleT17aX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yYXRpbmctc3Rhci1maWxsZWQuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH19IC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJhdGluZyAhPSBNYXRoLmZsb29yKHJhdGluZykpIHtcbiAgICAgICAgICAgIHJhdGluZ0FycmF5LnB1c2goPGltZyBrZXk9J2hhbGYnIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvaGFsZnN0YXJfbmV3LnN2Zyd9IGNsYXNzTmFtZT1cImltZy1jc3RtLWRvY3JhdGluZ1wiIHN0eWxlPXt7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLCBtYXJnaW5SaWdodDogMiwgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB9fSAvPilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlbXB0eVN0YXJzID0gTWF0aC5mbG9vcig1IC0gcmF0aW5nKTtcbiAgICAgICAgaWYgKGVtcHR5U3RhcnMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW1wdHlTdGFyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmF0aW5nQXJyYXkucHVzaCg8aW1nIGtleT17aSArICdlbXB0eSd9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvcmF0aW5nLXN0YXItZW1wdHkuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH19IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jLXJ0bmdcIiBzdHlsZT17dGhpcy5wcm9wcy5qdXN0aWZ5Q2VudGVyID8geyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfSA6IHt9fT5cbiAgICAgICAgICAgICAgICB7cmF0aW5nQXJyYXl9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByYXRpbmdfY291bnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHtyYXRpbmdfY291bnR9KTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdTdGFycyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHN1Ym1pdElQREZvcm0sIGlwZFBvcHVwRmlyZWQsIHNhdmVJcGRQb3B1cERhdGEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKVxuXG5jbGFzcyBJcGRMZWFkRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Zmlyc3RfbmFtZTogJycsXG5cdFx0XHRsYXN0X25hbWU6ICcnLFxuXHRcdFx0cGhvbmVfbnVtYmVyOiAnJyxcblx0XHRcdHNob3dGb3JtOiB0cnVlLFxuXHRcdFx0Y29tbWVudHM6ICcnLFxuXHRcdFx0Z2VuZGVyOiAnJ1xuXHRcdFx0LypcdFx0XHRnZW5kZXI6ICcnLFxuXHRcdFx0XHRcdFx0Y29tbWVudHM6ICcnLFxuXHRcdFx0XHRcdFx0d2hhdHNhcHBfb3B0aW46IHRydWUqL1xuXHRcdH1cblx0fVxuXG5cdGlucHV0SGFuZGxlcihlKSB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdGlmIChlLnRhcmdldC5uYW1lID09ICdwaG9uZV9udW1iZXInKSB7XG5cdFx0XHRlLnRhcmdldC52YWx1ZS5sZW5ndGggPD0gMTBcblx0XHRcdFx0PyBlLnRhcmdldC52YWx1ZS5sZW5ndGggPT0gMTBcblx0XHRcdFx0XHQ/IHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0W2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0OiB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQ6ICcnXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG5cdFx0fVxuXG5cdH1cblxuXHRzdWJtaXRMZWFkRm9ybSgpIHtcblx0XHRpZiAoIXRoaXMuc3RhdGUuZmlyc3RfbmFtZS5tYXRjaCgvXlthLXpBLVogXSskLykpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUuZmlyc3RfbmFtZSkge1xuXHRcdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZW50ZXIgcGF0aWVudCdzIG5hbWUuXCIgfSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiTmFtZSBzaG91bGQgb25seSBjb250YWluIGFscGhhYmV0cy5cIiB9KVxuXHRcdFx0XHR9XG5cdFx0XHR9LCA1MDApXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZiAodGhpcy5zdGF0ZS5waG9uZV9udW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykpIHtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFZhbGlkIE1vYmlsZSBOb1wiIH0pXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuc3RhdGUuZ2VuZGVyKSB7XG5cdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHNlbGVjdCB5b3VyIEdlbmRlclwiIH0pXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuc3RhdGUuY29tbWVudHMpIHtcblx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZW50ZXIgeW91ciBDb21tZW50XCIgfSlcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG5cdFx0bGV0IGZvcm1EYXRhID0ge1xuXHRcdFx0Li4udGhpcy5zdGF0ZVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnByb3BzLmhvc3BpdGFsX2lkKSB7XG5cdFx0XHRmb3JtRGF0YS5ob3NwaXRhbCA9IHRoaXMucHJvcHMuaG9zcGl0YWxfaWRcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wcm9wcy5wcm9jZWR1cmVfaWQpIHtcblx0XHRcdGZvcm1EYXRhLmlwZF9wcm9jZWR1cmUgPSB0aGlzLnByb3BzLnByb2NlZHVyZV9pZFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnByb3BzLmRvY3Rvcl9pZCkge1xuXHRcdFx0Zm9ybURhdGEuZG9jdG9yID0gcGFyc2VJbnQodGhpcy5wcm9wcy5kb2N0b3JfaWQpXG5cdFx0fVxuXG5cdFx0bGV0IHV0bV90YWdzID0ge1xuXHRcdFx0dXRtX3NvdXJjZTogcGFyc2VkLnV0bV9zb3VyY2UgfHwgJycsXG5cdFx0XHR1dG1fbWVkaXVtOiBwYXJzZWQudXRtX21lZGl1bSB8fCAnJyxcblx0XHRcdHV0bV90ZXJtOiBwYXJzZWQudXRtX3Rlcm0gfHwgJycsXG5cdFx0XHR1dG1fY2FtcGFpZ246IHBhcnNlZC51dG1fY2FtcGFpZ24gfHwgJycsXG5cdFx0XHRyZWZlcnJlcjogZG9jdW1lbnQucmVmZXJyZXIgfHwgJycsXG5cdFx0XHRnY2xpZDogcGFyc2VkLmdjbGlkIHx8ICcnXG5cdFx0fVxuXG5cdFx0Zm9ybURhdGEuZGF0YSA9IHt9XG5cdFx0Zm9ybURhdGEuZGF0YS51dG1fdGFncyA9IHV0bV90YWdzXG5cdFx0Zm9ybURhdGEuZGF0YS51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuXHRcdGZvcm1EYXRhLmRhdGEuZm9ybVNvdXJjZSA9IHRoaXMucHJvcHMuZm9ybVNvdXJjZSB8fCAnUG9wdXBMZWFkRm9ybSdcblx0XHRpZiAodGhpcy5wcm9wcy5zb3VyY2VUYWcpIHtcblx0XHRcdGZvcm1EYXRhLnNvdXJjZSA9IHRoaXMucHJvcHMuc291cmNlVGFnXG5cdFx0fVxuXG5cdFx0dGhpcy5wcm9wcy5zdWJtaXRJUERGb3JtKGZvcm1EYXRhLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24sIChlcnJvciwgcmVzcG9uc2UpID0+IHtcblx0XHRcdGlmICghZXJyb3IgJiYgcmVzcG9uc2UpIHtcblx0XHRcdFx0Ly9TYXZlIHBvcHVwIGRhdGEgZm9yIGRvY3RvciBwcm9maWxlIGRhdGEgYXV0byBmaWxsZWRcblx0XHRcdFx0aWYgKHRoaXMucHJvcHMuaXNfYm9va2luZ19wYWdlKSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5zYXZlSXBkUG9wdXBEYXRhKCdwb3B1cDEnLCBmb3JtRGF0YSlcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnByb3BzLmlwZFBvcHVwRmlyZWQoKVxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy5zYXZlTGVhZElkRm9yVXBkYXRpb24gJiYgdHlwZW9mICh0aGlzLnByb3BzLnNhdmVMZWFkSWRGb3JVcGRhdGlvbikgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuc2F2ZUxlYWRJZEZvclVwZGF0aW9uKHJlc3BvbnNlKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnN0YXRlLmZpcnN0X25hbWUgJiYgdGhpcy5zdGF0ZS5maXJzdF9uYW1lLmluY2x1ZGVzKCd0ZXN0JykpIHtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0XHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJUEQtcG9wdXAtbGVhZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogcmVzcG9uc2UuaWQgfHwgJycsICdldmVudCc6ICdJUEQtcG9wdXAtbGVhZCcsIHNlbGVjdGVkSWQ6ICcnLCAnaG9zcGl0YWxJZCc6ICcnLCAnZnJvbSc6ICdsZWFkRm9ybScsICdtb2JpbGVObyc6IHRoaXMuc3RhdGUucGhvbmVfbnVtYmVyXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy5ub1RvYXN0TWVzc2FnZSkge1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiWW91ciByZXF1ZXN0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNlc3NmdWxseVwiIH0pXG5cdFx0XHRcdFx0fSwgNTAwKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93Rm9ybTogZmFsc2UgfSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgdHJ5IGFmdGVyIHNvbWUgdGltZVwiIH0pXG5cdFx0XHRcdH0sIDUwMClcblx0XHRcdH1cblx0XHRcdHRoaXMucHJvcHMuc3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uKHRoaXMuc3RhdGUpXG5cdFx0fSlcblxuXHR9XG5cblx0Y2xvc2VQb3BVcENsaWNrZWQoc2tpcCA9IGZhbHNlKSB7XG5cdFx0aWYgKHNraXApIHtcblx0XHRcdGxldCBndG1EYXRhID0ge1xuXHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lQRC0xcG9wdXAtc2tpcC1jbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdJUEQtMXBvcHVwLXNraXAtY2xpY2tlZCcsICdmb3JtTm8nOiAnMSdcblx0XHRcdH1cblx0XHRcdEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cdFx0fVxuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGlmICgocGFyc2VkLmdldF9mZWVkYmFjayAmJiBwYXJzZWQuZ2V0X2ZlZWRiYWNrID09ICcxJykgfHwgdGhpcy5wcm9wcy5mb3JjZWRQb3B1cCkge1xuXHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBmaWxsIHRoZSBmZWVkYmFjayBmb3JtXCIgfSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZWRpcmVjdFRvQ2hhdCgpXG5cdFx0XHR0aGlzLnByb3BzLnN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbih0aGlzLnN0YXRlKVxuXHRcdH1cblx0fVxuXG5cdHJlZGlyZWN0VG9DaGF0KCkge1xuXHRcdC8qbGV0IHBhcmFtcyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpXG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9tb2JpbGV2aWV3Y2hhdD9wcm9kdWN0PUlQRCZwYXJhbXM9JHtwYXJhbXN9JnNvdXJjZT0ke3RoaXMucHJvcHMuaG9zcGl0YWxfaWR9YCkqL1xuXHR9XG5cblx0dG9nZ2xlV2hhdHNhcChlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHdoYXRzYXBwX29wdGluOiAhdGhpcy5zdGF0ZS53aGF0c2FwcF9vcHRpbiB9KVxuXHR9XG5cblx0Z2V0U3BlY2lhbGl6YXRpb25OYW1lcyhzcGVjaWFsaXphdGlvbkRhdGEpIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHNwZWNpYWxpemF0aW9uRGF0YS5tYXAoeCA9PiB4Lm5hbWUpLmpvaW4oJywnKVxuXHRcdH0gY2F0Y2ggKGUpIHtcblxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRsZXQgc3BlY2lhbGl6YXRpb25fbmFtZSA9IG51bGxcblx0XHRsZXQgdm93ZWxzID0gJ2FlaW91J1xuXHRcdGxldCBpc192b3dlbCA9IGZhbHNlXG5cdFx0aWYgKHRoaXMucHJvcHMuc3BlY2lhbGl6YXRpb25fZGF0YSAmJiB0aGlzLnByb3BzLnNwZWNpYWxpemF0aW9uX2RhdGEubGVuZ3RoKSB7XG5cdFx0XHRzcGVjaWFsaXphdGlvbl9uYW1lID0gdGhpcy5nZXRTcGVjaWFsaXphdGlvbk5hbWVzKHRoaXMucHJvcHMuc3BlY2lhbGl6YXRpb25fZGF0YSkgfHwgJydcblxuXHRcdFx0aWYgKHNwZWNpYWxpemF0aW9uX25hbWUgJiYgc3BlY2lhbGl6YXRpb25fbmFtZS5sZW5ndGggJiYgdm93ZWxzLmluY2x1ZGVzKHNwZWNpYWxpemF0aW9uX25hbWVbMF0udG9Mb3dlckNhc2UoKSkpIHtcblx0XHRcdFx0aXNfdm93ZWwgPSB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHR0aGlzLmNsb3NlUG9wVXBDbGlja2VkKClcblx0XHRcdH19PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cCBpcGQtcG9wLXdpZHRoIGJvb2tpbmctcG9wdXBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblxuXHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBwLTEyXCI+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuc2hvd0Zvcm0gP1xuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC1yZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKihwYXJzZWQuZ2V0X2ZlZWRiYWNrICYmIHBhcnNlZC5nZXRfZmVlZGJhY2sgPT0gJzEnKSB8fCB0aGlzLnByb3BzLmZvcmNlZFBvcHVwID8gJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IDxzcGFuIGNsYXNzTmFtZT1cImlwZC1wb3AtY2xzXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5jbG9zZVBvcFVwQ2xpY2tlZCgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+Ki9cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3BlY2lhbGl6YXRpb25fbmFtZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaXBkLW5lZWRIZWxwXCI+e2BOZWVkIGFuIGFwcG9pbnRtZW50IHdpdGggJHtpc192b3dlbCA/ICdhbicgOiAnYSd9ICR7c3BlY2lhbGl6YXRpb25fbmFtZX0gJHt0aGlzLnByb3BzLmhvc3BpdGFsX25hbWUgPyBgYXQgJHt0aGlzLnByb3BzLmhvc3BpdGFsX25hbWV9P2AgOiAnJ31gfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMucHJvcHMuZG9jdG9yX25hbWUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaXBkLW5lZWRIZWxwXCI+e2BOZWVkIHRvIGJvb2sgYW4gYXBwb2ludG1lbnQgd2l0aCAke3RoaXMucHJvcHMuZG9jdG9yX25hbWV9ICR7dGhpcy5wcm9wcy5ob3NwaXRhbF9uYW1lID8gYGF0ICR7dGhpcy5wcm9wcy5ob3NwaXRhbF9uYW1lfT9gIDogJyd9YH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMucHJvcHMuaG9zcGl0YWxfbmFtZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlwZC1uZWVkSGVscFwiPntgTmVlZCBoZWxwIHdpdGggYW4gYXBwb2ludG1lbnQgJHt0aGlzLnByb3BzLmhvc3BpdGFsX25hbWUgPyBgYXQgJHt0aGlzLnByb3BzLmhvc3BpdGFsX25hbWV9P2AgOiAnJ31gfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMucHJvY2VkdXJlX25hbWUgPyA8c2VjdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJpcGQtbmVlZEhlbHBcIj57YE5lZWQgaGVscCB3aXRoICR7dGhpcy5wcm9wcy5wcm9jZWR1cmVfbmFtZX0/YH08L3A+PC9zZWN0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlZC50eXBlICYmIHBhcnNlZC50eXBlLmluY2x1ZGVzKCdvZmZlcnMnKT9cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtaXBkLWNvbnQgaXBkLXBvcC10aWNrLXRleHRcIj48aW1nIGNsYXNzTmFtZT1cImlwZC1wb3AtdGlja1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvdGljay5wbmcnfS8+IDxzcGFuPlVwdG8gMzAlIE9mZiBvbiBTdXJnZXJ5ICh3aXRoIEltcGxhbnRzKTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1pcGQtY29udCBpcGQtcG9wLXRpY2stdGV4dFwiPjxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9Lz4gPHNwYW4+MXN0IERvY3RvciBCb29raW5nICYgWC1yYXkgRlJFRTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1pcGQtY29udCBpcGQtcG9wLXRpY2stdGV4dFwiPjxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9Lz4gPHNwYW4+NTAlIE9mZiBvbiBQaHlzaW90aGVyYXB5IChQb3N0IE9wZXJhdGlvbik8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtaXBkLWNvbnQgaXBkLXBvcC10aWNrLXRleHRcIj48aW1nIGNsYXNzTmFtZT1cImlwZC1wb3AtdGlja1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvdGljay5wbmcnfS8+IDxzcGFuPkRlZGljYXRlZCBEb2N0b3IgZm9yIE1lZGljYWwgQWR2aWNlPC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD46Jydcblx0XHRcdFx0XHRcdFx0XHRcdCovfVxuXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFwYXJzZWQudHlwZSB8fCB0cnVlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWlwZC1jb250IGlwZC1wb3AtdGljay10ZXh0XCI+PGltZyBjbGFzc05hbWU9XCJpcGQtcG9wLXRpY2tcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3RpY2sucG5nJ30gLz4gPHNwYW4+e3RoaXMucHJvcHMucHJvY2VkdXJlX25hbWUgPyAnQm9vayB0aGUgcmlnaHQgRG9jdG9yL0hvc3BpdGFsJyA6ICdHZXQgdXB0byAzMCUgT2ZmIG9uIEFwcG9pbnRtZW50cyd9PC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtaXBkLWNvbnQgaXBkLXBvcC10aWNrLXRleHRcIj48aW1nIGNsYXNzTmFtZT1cImlwZC1wb3AtdGlja1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvdGljay5wbmcnfSAvPiA8c3Bhbj57dGhpcy5wcm9wcy5wcm9jZWR1cmVfbmFtZSA/ICdDb21wYXJlIFN1cmdlcnkgQ29zdCBhY3Jvc3MgSG9zcGl0YWxzJyA6ICdJbnN0YW50IEJvb2tpbmcgQ29uZmlybWF0aW9uJ308L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1pcGQtY29udCBpcGQtcG9wLXRpY2stdGV4dFwiPjxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9IC8+IDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2tcIj57dGhpcy5wcm9wcy5wcm9jZWR1cmVfbmFtZSA/ICdTcGVjaWFsIFByaWNlcyBmb3IgRG9jcHJpbWUgQ3VzdG9tZXJzJyA6ICdEZWRpY2F0ZWQgRG9jdG9yIGZvciBBZHZpY2UnfTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IXBhcnNlZC50eXBlICYmIHRoaXMucHJvcHMucHJvY2VkdXJlX25hbWUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtaXBkLWNvbnQgaXBkLXBvcC10aWNrLXRleHRcIj48aW1nIGNsYXNzTmFtZT1cImlwZC1wb3AtdGlja1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvdGljay5wbmcnfSAvPiA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrXCI+RGVkaWNhdGVkIERvY3RvciBmb3IgTWVkaWNhbCBBZHZpY2U8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qPGRpdiBjbGFzc05hbWU9XCJpcGQtaW5wLXNlY3Rpb25cIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG5hbWU9J25hbWUnIHBsYWNlaG9sZGVyPVwiKk5hbWVcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJOdW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZV9udW1iZXJ9IG5hbWU9J3Bob25lX251bWJlcicgcGxhY2Vob2xkZXI9XCIqTW9iaWxlIE51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1sZWFkLXRleHRhcmVhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiKkhvdyBjYW4gd2UgaGVscCB5b3U/XCIgc3R5bGU9e3tmb250V2VpZ2h0OjUwMH19IHJvd3M9JzEnIHZhbHVlPXt0aGlzLnN0YXRlLmNvbW1lbnRzfSBuYW1lPSdjb21tZW50cycgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9PjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwic2tpcC1idG4tc2duXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpcGQtaW5wLXNibXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1Ym1pdExlYWRGb3JtKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5DbGljayB0byBQcm9jZWVkPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHBhcnNlZCAmJiBwYXJzZWQuZ2V0X2ZlZWRiYWNrICYmIHBhcnNlZC5nZXRfZmVlZGJhY2sgPT0gJzEnKSB8fCB0aGlzLnByb3BzLmZvcmNlZFBvcHVwID8nJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OjxwIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY2xvc2VQb3BVcENsaWNrZWQoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+U2tpcDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1wb3Atc2NybFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtaW5wLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5tLWxzdC1pbnB1dGNudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnOHB4JyB9fSB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0X25hbWV9IG5hbWU9J2ZpcnN0X25hbWUnIHBsYWNlaG9sZGVyPVwiKkZpcnN0IE5hbWVcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3RfbmFtZX0gbmFtZT0nbGFzdF9uYW1lJyBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lX251bWJlcn0gbmFtZT0ncGhvbmVfbnVtYmVyJyBwbGFjZWhvbGRlcj1cIipNb2JpbGUgTnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbHQtbnctaW5wdXQgcmFkaW8tbWJsIG1iLTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic2x0LWxhYmVsIHRleHQtbGVmdFwiIGh0bWxGb3I9XCJtYWxlXCIgPipHZW5kZXI6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2x0LWxhYmVsLXJhZGlvIG1sLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdlbmRlcjogJ20nIH0pfT5NYWxlXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT09ICdtJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBnZW5kZXI6ICdmJyB9KX0+RmVtYWxlXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJnZW5kZXJcIiB2YWx1ZT1cIm1cIiBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT09ICdmJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1kYXRlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNT4qUHJlZmVycmVkIERhdGU6PC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLWRhdGUtc2VsZWN0LWNvbnRhaW5lclwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOjB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2xlY3QtZGF0ZS1oZWFkaW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWwtZGF0ZS1saXN0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cInZlci1kYXRlLWxpc3QtdWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZGF0ZS1saXN0LWFjdGl2ZVwiPjIyPHNwYW4+RnJpPC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIlwiPjI5PHNwYW4+RnJpPC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIlwiPjY8c3Bhbj5Gcmk8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBzdHlsZT17e3BhZGRpbmc6MH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nICBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2NhbG5leHQuc3ZnJ30gc3R5bGU9e3t3aWR0aDoyMiwgbWFyZ2luVG9wOjEwfX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1kYXRlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNT5QcmVmZXJyZWQgVGltZTwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24+b3B0aW9uIDE8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24+b3B0aW9uIDI8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24+b3B0aW9uIDM8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcGQtbGVhZC10ZXh0YXJlYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiKkhvdyBjYW4gd2UgaGVscCB5b3U/XCIgc3R5bGU9e3sgZm9udFdlaWdodDogNTAwIH19IHJvd3M9JzEnIG5hbWU9J2NvbW1lbnRzJyB2YWx1ZT17dGhpcy5zdGF0ZS5jb21tZW50c30gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9PjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJza2lwLWJ0bi1zZ25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaXBkLWlucC1zYm10XCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdWJtaXRMZWFkRm9ybSgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5DbGljayB0byBQcm9jZWVkPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChwYXJzZWQgJiYgcGFyc2VkLmdldF9mZWVkYmFjayAmJiBwYXJzZWQuZ2V0X2ZlZWRiYWNrID09ICcxJykgfHwgdGhpcy5wcm9wcy5mb3JjZWRQb3B1cCA/ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiA8cCBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNsb3NlUG9wVXBDbGlja2VkKHRydWUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+U2tpcDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcFVwLXdodHNhcHBFbmFibGUtaXBkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndodHNhcHBFbmFibGUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKjxwIGNsYXNzTmFtZT1cInd0c2FwcC1jaGstdHh0XCI+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3RpY2suc3ZnJ30gLz4gRW5hYmxlIFdoYXRzYXBwIGZvciBzZWFtbGVzcyBjb21tdW5pY2F0aW9uPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQqL308cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmdy01MDBcIiBzdHlsZT17eyBmb250U2l6ZTogOSwgY29sb3I6ICcjOGE4YThhJyB9fSA+QnkgcHJvY2VlZGluZywgeW91IGhlcmVieSBhZ3JlZSB0byB0aGUgPGEgaHJlZj1cIi90ZXJtc1wiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSA+RW5kIFVzZXIgQWdyZWVtZW50PC9hPiBhbmQgPGEgaHJlZj1cIi9wcml2YWN5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5Qcml2YWN5IFBvbGljeS48L2E+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcblxuXHRjb25zdCB7XG5cdFx0c2VsZWN0ZWRMb2NhdGlvblxuXHR9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG5cdHJldHVybiB7XG5cdFx0c2VsZWN0ZWRMb2NhdGlvblxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXG5cdHJldHVybiB7XG5cdFx0c3VibWl0SVBERm9ybTogKGZvcm1EYXRhLCBzZWxlY3RlZExvY2F0aW9uLCBjYikgPT4gZGlzcGF0Y2goc3VibWl0SVBERm9ybShmb3JtRGF0YSwgc2VsZWN0ZWRMb2NhdGlvbiwgY2IpKSxcblx0XHRpcGRQb3B1cEZpcmVkOiAoKSA9PiBkaXNwYXRjaChpcGRQb3B1cEZpcmVkKCkpLFxuXHRcdHNhdmVJcGRQb3B1cERhdGE6ICh0eXBlLCBkYXRhKSA9PiBkaXNwYXRjaChzYXZlSXBkUG9wdXBEYXRhKHR5cGUsIGRhdGEpKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKElwZExlYWRGb3JtKSJdLCJzb3VyY2VSb290IjoiIn0=