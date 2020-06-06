(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RatingStars = function (_React$Component) {
    _inherits(RatingStars, _React$Component);

    function RatingStars(props) {
        _classCallCheck(this, RatingStars);

        var _this = _possibleConstructorReturn(this, (RatingStars.__proto__ || Object.getPrototypeOf(RatingStars)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(RatingStars, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                average_rating = _props.average_rating,
                rating_count = _props.rating_count;


            var rating = '';
            if (average_rating) {
                rating = Math.ceil(average_rating * 2) / 2;
            }

            var ratingArray = [];
            for (var i = 0; i < Math.floor(rating); i++) {
                ratingArray.push(_react2.default.createElement('img', { key: i, src: "/assets" + '/img/customer-icons/rating-star-filled.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
            }

            if (rating != Math.floor(rating)) {
                ratingArray.push(_react2.default.createElement('img', { key: 'half', src: "/assets" + '/img/customer-icons/halfstar_new.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
            }

            var emptyStars = Math.floor(5 - rating);
            if (emptyStars) {
                for (var _i = 0; _i < emptyStars; _i++) {
                    ratingArray.push(_react2.default.createElement('img', { key: _i + 'empty', src: "/assets" + '/img/customer-icons/rating-star-empty.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
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
    }]);

    return RatingStars;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var IpdLeadForm = function (_React$Component) {
	_inherits(IpdLeadForm, _React$Component);

	function IpdLeadForm(props) {
		_classCallCheck(this, IpdLeadForm);

		var _this = _possibleConstructorReturn(this, (IpdLeadForm.__proto__ || Object.getPrototypeOf(IpdLeadForm)).call(this, props));

		_this.state = {
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
		return _this;
	}

	_createClass(IpdLeadForm, [{
		key: 'inputHandler',
		value: function inputHandler(e) {
			e.stopPropagation();
			if (e.target.name == 'phone_number') {
				e.target.value.length <= 10 ? e.target.value.length == 10 ? this.setState(_defineProperty({}, e.target.name, e.target.value)) : this.setState(_defineProperty({}, e.target.name, e.target.value)) : '';
			} else {
				this.setState(_defineProperty({}, e.target.name, e.target.value));
			}
		}
	}, {
		key: 'submitLeadForm',
		value: function submitLeadForm() {
			var _this2 = this;

			if (!this.state.first_name.match(/^[a-zA-Z ]+$/)) {
				setTimeout(function () {
					if (!_this2.state.first_name) {
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

			var parsed = queryString.parse(this.props.location.search);

			var formData = _extends({}, this.state);

			if (this.props.hospital_id) {
				formData.hospital = this.props.hospital_id;
			}

			if (this.props.procedure_id) {
				formData.ipd_procedure = this.props.procedure_id;
			}

			if (this.props.doctor_id) {
				formData.doctor = parseInt(this.props.doctor_id);
			}

			var utm_tags = {
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

			this.props.submitIPDForm(formData, this.props.selectedLocation, function (error, response) {
				if (!error && response) {
					//Save popup data for doctor profile data auto filled
					if (_this2.props.is_booking_page) {
						_this2.props.saveIpdPopupData('popup1', formData);
					}
					_this2.props.ipdPopupFired();
					if (_this2.props.saveLeadIdForUpdation && typeof _this2.props.saveLeadIdForUpdation == 'function') {
						_this2.props.saveLeadIdForUpdation(response);
					}
					if (_this2.state.first_name && _this2.state.first_name.includes('test')) {} else {
						var gtmData = {
							'Category': 'ConsumerApp', 'Action': 'IPD-popup-lead', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': response.id || '', 'event': 'IPD-popup-lead', selectedId: '', 'hospitalId': '', 'from': 'leadForm', 'mobileNo': _this2.state.phone_number
						};
						_gtm2.default.sendEvent({ data: gtmData });
					}

					if (_this2.props.noToastMessage) {} else {
						setTimeout(function () {
							_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Your request has been submitted sucessfully" });
						}, 500);
					}
					_this2.setState({ showForm: false });
				} else {
					setTimeout(function () {
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please try after some time" });
					}, 500);
				}
				_this2.props.submitLeadFormGeneration(_this2.state);
			});
		}
	}, {
		key: 'closePopUpClicked',
		value: function closePopUpClicked() {
			var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			if (skip) {
				var gtmData = {
					'Category': 'ConsumerApp', 'Action': 'IPD-1popup-skip-clicked', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'IPD-1popup-skip-clicked', 'formNo': '1'
				};
				_gtm2.default.sendEvent({ data: gtmData });
			}
			var parsed = queryString.parse(this.props.location.search);
			if (parsed.get_feedback && parsed.get_feedback == '1' || this.props.forcedPopup) {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please fill the feedback form" });
			} else {
				this.redirectToChat();
				this.props.submitLeadFormGeneration(this.state);
			}
		}
	}, {
		key: 'redirectToChat',
		value: function redirectToChat() {
			/*let params = JSON.stringify(this.state)
   this.props.history.push(`/mobileviewchat?product=IPD&params=${params}&source=${this.props.hospital_id}`)*/
		}
	}, {
		key: 'toggleWhatsap',
		value: function toggleWhatsap(e) {
			this.setState({ whatsapp_optin: !this.state.whatsapp_optin });
		}
	}, {
		key: 'getSpecializationNames',
		value: function getSpecializationNames(specializationData) {
			try {
				return specializationData.map(function (x) {
					return x.name;
				}).join(',');
			} catch (e) {}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this,
			    _React$createElement,
			    _React$createElement2;

			var parsed = queryString.parse(this.props.location.search);
			var specialization_name = null;
			var vowels = 'aeiou';
			var is_vowel = false;
			if (this.props.specialization_data && this.props.specialization_data.length) {
				specialization_name = this.getSpecializationNames(this.props.specialization_data) || '';

				if (specialization_name && specialization_name.length && vowels.includes(specialization_name[0].toLowerCase())) {
					is_vowel = true;
				}
			}

			return _react2.default.createElement(
				'div',
				{ className: 'search-el-popup-overlay cancel-overlay-zindex', onClick: function onClick(e) {
						e.preventDefault();
						e.stopPropagation();
						_this3.closePopUpClicked();
					} },
				_react2.default.createElement(
					'div',
					{ className: 'search-el-popup ipd-pop-width booking-popup', onClick: function onClick(e) {
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
								'Need an appointment with ' + (is_vowel ? 'an' : 'a') + ' ' + specialization_name + ' ' + (this.props.hospital_name ? 'at ' + this.props.hospital_name + '?' : '')
							) : this.props.doctor_name ? _react2.default.createElement(
								'p',
								{ className: 'ipd-needHelp' },
								'Need to book an appointment with ' + this.props.doctor_name + ' ' + (this.props.hospital_name ? 'at ' + this.props.hospital_name + '?' : '')
							) : this.props.hospital_name ? _react2.default.createElement(
								'p',
								{ className: 'ipd-needHelp' },
								'Need help with an appointment ' + (this.props.hospital_name ? 'at ' + this.props.hospital_name + '?' : '')
							) : '',
							this.props.procedure_name ? _react2.default.createElement(
								'section',
								null,
								_react2.default.createElement(
									'p',
									{ className: 'ipd-needHelp' },
									'Need help with ' + this.props.procedure_name + '?'
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
								{ className: 'ipd-pop-scrl', onClick: function onClick(e) {
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
													{ className: 'container-radio', onClick: function onClick() {
															return _this3.setState({ gender: 'm' });
														} },
													'Male',
													_react2.default.createElement('input', (_React$createElement = { type: 'radio', name: 'gender' }, _defineProperty(_React$createElement, 'name', 'gender'), _defineProperty(_React$createElement, 'checked', this.state.gender === 'm'), _React$createElement)),
													_react2.default.createElement('span', { className: 'doc-checkmark' })
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'dtl-radio' },
												_react2.default.createElement(
													'label',
													{ className: 'container-radio', onClick: function onClick() {
															return _this3.setState({ gender: 'f' });
														} },
													'Female',
													_react2.default.createElement('input', (_React$createElement2 = { type: 'radio', name: 'gender', value: 'm' }, _defineProperty(_React$createElement2, 'name', 'gender'), _defineProperty(_React$createElement2, 'checked', this.state.gender === 'f'), _React$createElement2)),
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
											{ className: 'ipd-inp-sbmt', onClick: function onClick(e) {
													e.stopPropagation();
													e.preventDefault();
													_this3.submitLeadForm();
												} },
											'Click to Proceed'
										),
										parsed && parsed.get_feedback && parsed.get_feedback == '1' || this.props.forcedPopup ? '' : _react2.default.createElement(
											'p',
											{ onClick: function onClick(e) {
													e.stopPropagation();
													e.preventDefault();
													_this3.closePopUpClicked(true);
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
													{ href: '/terms', target: '_blank', style: { color: 'var(--text--primary--color)' } },
													'End User Agreement'
												),
												' and ',
												_react2.default.createElement(
													'a',
													{ href: '/privacy', target: '_blank', style: { color: 'var(--text--primary--color)' } },
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
	}]);

	return IpdLeadForm;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, passedProps) {
	var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;


	return {
		selectedLocation: selectedLocation
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {

	return {
		submitIPDForm: function submitIPDForm(formData, selectedLocation, cb) {
			return dispatch((0, _index.submitIPDForm)(formData, selectedLocation, cb));
		},
		ipdPopupFired: function ipdPopupFired() {
			return dispatch((0, _index.ipdPopupFired)());
		},
		saveIpdPopupData: function saveIpdPopupData(type, data) {
			return dispatch((0, _index.saveIpdPopupData)(type, data));
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IpdLeadForm);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdTdGFycy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pcGQvaXBkTGVhZEZvcm0uanMiXSwibmFtZXMiOlsiUmF0aW5nU3RhcnMiLCJwcm9wcyIsInN0YXRlIiwiYXZlcmFnZV9yYXRpbmciLCJyYXRpbmdfY291bnQiLCJyYXRpbmciLCJNYXRoIiwiY2VpbCIsInJhdGluZ0FycmF5IiwiaSIsImZsb29yIiwicHVzaCIsIkFTU0VUU19CQVNFX1VSTCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJoZWlnaHQiLCJlbXB0eVN0YXJzIiwianVzdGlmeUNlbnRlciIsImp1c3RpZnlDb250ZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJJcGRMZWFkRm9ybSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwaG9uZV9udW1iZXIiLCJzaG93Rm9ybSIsImNvbW1lbnRzIiwiZ2VuZGVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImxlbmd0aCIsInNldFN0YXRlIiwibWF0Y2giLCJzZXRUaW1lb3V0IiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJmb3JtRGF0YSIsImhvc3BpdGFsX2lkIiwiaG9zcGl0YWwiLCJwcm9jZWR1cmVfaWQiLCJpcGRfcHJvY2VkdXJlIiwiZG9jdG9yX2lkIiwiZG9jdG9yIiwicGFyc2VJbnQiLCJ1dG1fdGFncyIsInV0bV9zb3VyY2UiLCJ1dG1fbWVkaXVtIiwidXRtX3Rlcm0iLCJ1dG1fY2FtcGFpZ24iLCJyZWZlcnJlciIsImRvY3VtZW50IiwiZ2NsaWQiLCJkYXRhIiwidXJsIiwid2luZG93IiwiaHJlZiIsImZvcm1Tb3VyY2UiLCJzb3VyY2VUYWciLCJzb3VyY2UiLCJzdWJtaXRJUERGb3JtIiwic2VsZWN0ZWRMb2NhdGlvbiIsImVycm9yIiwicmVzcG9uc2UiLCJpc19ib29raW5nX3BhZ2UiLCJzYXZlSXBkUG9wdXBEYXRhIiwiaXBkUG9wdXBGaXJlZCIsInNhdmVMZWFkSWRGb3JVcGRhdGlvbiIsImluY2x1ZGVzIiwiZ3RtRGF0YSIsIkdUTSIsImdldFVzZXJJZCIsImlkIiwic2VsZWN0ZWRJZCIsInNlbmRFdmVudCIsIm5vVG9hc3RNZXNzYWdlIiwic3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uIiwic2tpcCIsImdldF9mZWVkYmFjayIsImZvcmNlZFBvcHVwIiwicmVkaXJlY3RUb0NoYXQiLCJ3aGF0c2FwcF9vcHRpbiIsInNwZWNpYWxpemF0aW9uRGF0YSIsIm1hcCIsIngiLCJqb2luIiwic3BlY2lhbGl6YXRpb25fbmFtZSIsInZvd2VscyIsImlzX3Zvd2VsIiwic3BlY2lhbGl6YXRpb25fZGF0YSIsImdldFNwZWNpYWxpemF0aW9uTmFtZXMiLCJ0b0xvd2VyQ2FzZSIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VQb3BVcENsaWNrZWQiLCJob3NwaXRhbF9uYW1lIiwiZG9jdG9yX25hbWUiLCJwcm9jZWR1cmVfbmFtZSIsInR5cGUiLCJpbnB1dEhhbmRsZXIiLCJiaW5kIiwiZm9udFdlaWdodCIsInN1Ym1pdExlYWRGb3JtIiwiZm9udFNpemUiLCJjb2xvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsVzs7O0FBQ0YseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBS2xCOzs7O2lDQUNRO0FBQUEseUJBQ2tDLEtBQUtELEtBRHZDO0FBQUEs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QWUsdUJBQUN2QixRQUFELEVBQVd3QixnQkFBWCxFQUE2QmdELEVBQTdCO0FBQUEsVUFBb0NELFNBQVMsMEJBQWN2RSxRQUFkLEVBQXdCd0IsZ0JBQXhCLEVBQTBDZ0QsRUFBMUMsQ0FBVCxDQUFwQztBQUFBLEdBRFQ7QUFFTjNDLGlCQUFlO0FBQUEsVUFBTTBDLFNBQVMsMkJBQVQsQ0FBTjtBQUFBLEdBRlQ7QUFHTjNDLG9CQUFrQiwwQkFBQ2dDLElBQUQsRUFBTzVDLElBQVA7QUFBQSxVQUFnQnVELFNBQVMsNkJBQWlCWCxJQUFqQixFQUF1QjVDLElBQXZCLENBQVQsQ0FBaEI7QUFBQTtBQUhaLEVBQVA7QUFLQSxDQVBEOztrQkFTZSx5QkFBUW1ELGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2QzlGLFdBQTdDLEMiLCJmaWxlIjoiMTguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUmF0aW5nU3RhcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBhdmVyYWdlX3JhdGluZywgcmF0aW5nX2NvdW50IH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgbGV0IHJhdGluZyA9ICcnXG4gICAgICAgIGlmIChhdmVyYWdlX3JhdGluZykge1xuICAgICAgICAgICAgcmF0aW5nID0gKE1hdGguY2VpbChhdmVyYWdlX3JhdGluZyAqIDIpKSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmF0aW5nQXJyYXkgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGguZmxvb3IocmF0aW5nKTsgaSsrKSB7XG4gICAgICAgICAgICByYXRpbmdBcnJheS5wdXNoKDxpbWcga2V5PXtpfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3JhdGluZy1zdGFyLWZpbGxlZC5zdmcnfSBjbGFzc05hbWU9XCJpbWctY3N0bS1kb2NyYXRpbmdcIiBzdHlsZT17eyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCwgbWFyZ2luUmlnaHQ6IDIsIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfX0gLz4pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmF0aW5nICE9IE1hdGguZmxvb3IocmF0aW5nKSkge1xuICAgICAgICAgICAgcmF0aW5nQXJyYXkucHVzaCg8aW1nIGtleT0naGFsZicgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9oYWxmc3Rhcl9uZXcuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH19IC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGVtcHR5U3RhcnMgPSBNYXRoLmZsb29yKDUgLSByYXRpbmcpO1xuICAgICAgICBpZiAoZW1wdHlTdGFycykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbXB0eVN0YXJzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByYXRpbmdBcnJheS5wdXNoKDxpbWcga2V5PXtpICsgJ2VtcHR5J30gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yYXRpbmctc3Rhci1lbXB0eS5zdmcnfSBjbGFzc05hbWU9XCJpbWctY3N0bS1kb2NyYXRpbmdcIiBzdHlsZT17eyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCwgbWFyZ2luUmlnaHQ6IDIsIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfX0gLz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2MtcnRuZ1wiIHN0eWxlPXt0aGlzLnByb3BzLmp1c3RpZnlDZW50ZXIgPyB7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9IDoge319PlxuICAgICAgICAgICAgICAgIHtyYXRpbmdBcnJheX1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJhdGluZ19jb3VudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe3JhdGluZ19jb3VudH0pPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ1N0YXJzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc3VibWl0SVBERm9ybSwgaXBkUG9wdXBGaXJlZCwgc2F2ZUlwZFBvcHVwRGF0YSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpXG5cbmNsYXNzIElwZExlYWRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRmaXJzdF9uYW1lOiAnJyxcblx0XHRcdGxhc3RfbmFtZTogJycsXG5cdFx0XHRwaG9uZV9udW1iZXI6ICcnLFxuXHRcdFx0c2hvd0Zvcm06IHRydWUsXG5cdFx0XHRjb21tZW50czogJycsXG5cdFx0XHRnZW5kZXI6ICcnXG5cdFx0XHQvKlx0XHRcdGdlbmRlcjogJycsXG5cdFx0XHRcdFx0XHRjb21tZW50czogJycsXG5cdFx0XHRcdFx0XHR3aGF0c2FwcF9vcHRpbjogdHJ1ZSovXG5cdFx0fVxuXHR9XG5cblx0aW5wdXRIYW5kbGVyKGUpIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0aWYgKGUudGFyZ2V0Lm5hbWUgPT0gJ3Bob25lX251bWJlcicpIHtcblx0XHRcdGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA8PSAxMFxuXHRcdFx0XHQ/IGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PSAxMFxuXHRcdFx0XHRcdD8gdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQ6IHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0W2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdDogJydcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcblx0XHR9XG5cblx0fVxuXG5cdHN1Ym1pdExlYWRGb3JtKCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5maXJzdF9uYW1lLm1hdGNoKC9eW2EtekEtWiBdKyQvKSkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5maXJzdF9uYW1lKSB7XG5cdFx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBlbnRlciBwYXRpZW50J3MgbmFtZS5cIiB9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJOYW1lIHNob3VsZCBvbmx5IGNvbnRhaW4gYWxwaGFiZXRzLlwiIH0pXG5cdFx0XHRcdH1cblx0XHRcdH0sIDUwMClcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN0YXRlLnBob25lX251bWJlci5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKSkge1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgVmFsaWQgTW9iaWxlIE5vXCIgfSlcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5zdGF0ZS5nZW5kZXIpIHtcblx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2Ugc2VsZWN0IHlvdXIgR2VuZGVyXCIgfSlcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5zdGF0ZS5jb21tZW50cykge1xuXHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBlbnRlciB5b3VyIENvbW1lbnRcIiB9KVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cblx0XHRsZXQgZm9ybURhdGEgPSB7XG5cdFx0XHQuLi50aGlzLnN0YXRlXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucHJvcHMuaG9zcGl0YWxfaWQpIHtcblx0XHRcdGZvcm1EYXRhLmhvc3BpdGFsID0gdGhpcy5wcm9wcy5ob3NwaXRhbF9pZFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnByb3BzLnByb2NlZHVyZV9pZCkge1xuXHRcdFx0Zm9ybURhdGEuaXBkX3Byb2NlZHVyZSA9IHRoaXMucHJvcHMucHJvY2VkdXJlX2lkXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucHJvcHMuZG9jdG9yX2lkKSB7XG5cdFx0XHRmb3JtRGF0YS5kb2N0b3IgPSBwYXJzZUludCh0aGlzLnByb3BzLmRvY3Rvcl9pZClcblx0XHR9XG5cblx0XHRsZXQgdXRtX3RhZ3MgPSB7XG5cdFx0XHR1dG1fc291cmNlOiBwYXJzZWQudXRtX3NvdXJjZSB8fCAnJyxcblx0XHRcdHV0bV9tZWRpdW06IHBhcnNlZC51dG1fbWVkaXVtIHx8ICcnLFxuXHRcdFx0dXRtX3Rlcm06IHBhcnNlZC51dG1fdGVybSB8fCAnJyxcblx0XHRcdHV0bV9jYW1wYWlnbjogcGFyc2VkLnV0bV9jYW1wYWlnbiB8fCAnJyxcblx0XHRcdHJlZmVycmVyOiBkb2N1bWVudC5yZWZlcnJlciB8fCAnJyxcblx0XHRcdGdjbGlkOiBwYXJzZWQuZ2NsaWQgfHwgJydcblx0XHR9XG5cblx0XHRmb3JtRGF0YS5kYXRhID0ge31cblx0XHRmb3JtRGF0YS5kYXRhLnV0bV90YWdzID0gdXRtX3RhZ3Ncblx0XHRmb3JtRGF0YS5kYXRhLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG5cdFx0Zm9ybURhdGEuZGF0YS5mb3JtU291cmNlID0gdGhpcy5wcm9wcy5mb3JtU291cmNlIHx8ICdQb3B1cExlYWRGb3JtJ1xuXHRcdGlmICh0aGlzLnByb3BzLnNvdXJjZVRhZykge1xuXHRcdFx0Zm9ybURhdGEuc291cmNlID0gdGhpcy5wcm9wcy5zb3VyY2VUYWdcblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLnN1Ym1pdElQREZvcm0oZm9ybURhdGEsIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuXHRcdFx0aWYgKCFlcnJvciAmJiByZXNwb25zZSkge1xuXHRcdFx0XHQvL1NhdmUgcG9wdXAgZGF0YSBmb3IgZG9jdG9yIHByb2ZpbGUgZGF0YSBhdXRvIGZpbGxlZFxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy5pc19ib29raW5nX3BhZ2UpIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLnNhdmVJcGRQb3B1cERhdGEoJ3BvcHVwMScsIGZvcm1EYXRhKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucHJvcHMuaXBkUG9wdXBGaXJlZCgpXG5cdFx0XHRcdGlmICh0aGlzLnByb3BzLnNhdmVMZWFkSWRGb3JVcGRhdGlvbiAmJiB0eXBlb2YgKHRoaXMucHJvcHMuc2F2ZUxlYWRJZEZvclVwZGF0aW9uKSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5zYXZlTGVhZElkRm9yVXBkYXRpb24ocmVzcG9uc2UpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuc3RhdGUuZmlyc3RfbmFtZSAmJiB0aGlzLnN0YXRlLmZpcnN0X25hbWUuaW5jbHVkZXMoJ3Rlc3QnKSkge1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdFx0XHRcdFx0XHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0lQRC1wb3B1cC1sZWFkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiByZXNwb25zZS5pZCB8fCAnJywgJ2V2ZW50JzogJ0lQRC1wb3B1cC1sZWFkJywgc2VsZWN0ZWRJZDogJycsICdob3NwaXRhbElkJzogJycsICdmcm9tJzogJ2xlYWRGb3JtJywgJ21vYmlsZU5vJzogdGhpcy5zdGF0ZS5waG9uZV9udW1iZXJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLnByb3BzLm5vVG9hc3RNZXNzYWdlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJZb3VyIHJlcXVlc3QgaGFzIGJlZW4gc3VibWl0dGVkIHN1Y2Vzc2Z1bGx5XCIgfSlcblx0XHRcdFx0XHR9LCA1MDApXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dGb3JtOiBmYWxzZSB9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSB0cnkgYWZ0ZXIgc29tZSB0aW1lXCIgfSlcblx0XHRcdFx0fSwgNTAwKVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5wcm9wcy5zdWJtaXRMZWFkRm9ybUdlbmVyYXRpb24odGhpcy5zdGF0ZSlcblx0XHR9KVxuXG5cdH1cblxuXHRjbG9zZVBvcFVwQ2xpY2tlZChza2lwID0gZmFsc2UpIHtcblx0XHRpZiAoc2tpcCkge1xuXHRcdFx0bGV0IGd0bURhdGEgPSB7XG5cdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSVBELTFwb3B1cC1za2lwLWNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ0lQRC0xcG9wdXAtc2tpcC1jbGlja2VkJywgJ2Zvcm1Obyc6ICcxJ1xuXHRcdFx0fVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblx0XHR9XG5cdFx0Y29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cdFx0aWYgKChwYXJzZWQuZ2V0X2ZlZWRiYWNrICYmIHBhcnNlZC5nZXRfZmVlZGJhY2sgPT0gJzEnKSB8fCB0aGlzLnByb3BzLmZvcmNlZFBvcHVwKSB7XG5cdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGZpbGwgdGhlIGZlZWRiYWNrIGZvcm1cIiB9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlZGlyZWN0VG9DaGF0KClcblx0XHRcdHRoaXMucHJvcHMuc3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uKHRoaXMuc3RhdGUpXG5cdFx0fVxuXHR9XG5cblx0cmVkaXJlY3RUb0NoYXQoKSB7XG5cdFx0LypsZXQgcGFyYW1zID0gSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSlcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL21vYmlsZXZpZXdjaGF0P3Byb2R1Y3Q9SVBEJnBhcmFtcz0ke3BhcmFtc30mc291cmNlPSR7dGhpcy5wcm9wcy5ob3NwaXRhbF9pZH1gKSovXG5cdH1cblxuXHR0b2dnbGVXaGF0c2FwKGUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgd2hhdHNhcHBfb3B0aW46ICF0aGlzLnN0YXRlLndoYXRzYXBwX29wdGluIH0pXG5cdH1cblxuXHRnZXRTcGVjaWFsaXphdGlvbk5hbWVzKHNwZWNpYWxpemF0aW9uRGF0YSkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gc3BlY2lhbGl6YXRpb25EYXRhLm1hcCh4ID0+IHgubmFtZSkuam9pbignLCcpXG5cdFx0fSBjYXRjaCAoZSkge1xuXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGxldCBzcGVjaWFsaXphdGlvbl9uYW1lID0gbnVsbFxuXHRcdGxldCB2b3dlbHMgPSAnYWVpb3UnXG5cdFx0bGV0IGlzX3Zvd2VsID0gZmFsc2Vcblx0XHRpZiAodGhpcy5wcm9wcy5zcGVjaWFsaXphdGlvbl9kYXRhICYmIHRoaXMucHJvcHMuc3BlY2lhbGl6YXRpb25fZGF0YS5sZW5ndGgpIHtcblx0XHRcdHNwZWNpYWxpemF0aW9uX25hbWUgPSB0aGlzLmdldFNwZWNpYWxpemF0aW9uTmFtZXModGhpcy5wcm9wcy5zcGVjaWFsaXphdGlvbl9kYXRhKSB8fCAnJ1xuXG5cdFx0XHRpZiAoc3BlY2lhbGl6YXRpb25fbmFtZSAmJiBzcGVjaWFsaXphdGlvbl9uYW1lLmxlbmd0aCAmJiB2b3dlbHMuaW5jbHVkZXMoc3BlY2lhbGl6YXRpb25fbmFtZVswXS50b0xvd2VyQ2FzZSgpKSkge1xuXHRcdFx0XHRpc192b3dlbCA9IHRydWVcblx0XHRcdH1cblx0XHR9XG5cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdHRoaXMuY2xvc2VQb3BVcENsaWNrZWQoKVxuXHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwIGlwZC1wb3Atd2lkdGggYm9va2luZy1wb3B1cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXG5cdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHAtMTJcIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93Rm9ybSA/XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qKHBhcnNlZC5nZXRfZmVlZGJhY2sgJiYgcGFyc2VkLmdldF9mZWVkYmFjayA9PSAnMScpIHx8IHRoaXMucHJvcHMuZm9yY2VkUG9wdXAgPyAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogPHNwYW4gY2xhc3NOYW1lPVwiaXBkLXBvcC1jbHNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNsb3NlUG9wVXBDbGlja2VkKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj4qL1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcGVjaWFsaXphdGlvbl9uYW1lID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJpcGQtbmVlZEhlbHBcIj57YE5lZWQgYW4gYXBwb2ludG1lbnQgd2l0aCAke2lzX3Zvd2VsID8gJ2FuJyA6ICdhJ30gJHtzcGVjaWFsaXphdGlvbl9uYW1lfSAke3RoaXMucHJvcHMuaG9zcGl0YWxfbmFtZSA/IGBhdCAke3RoaXMucHJvcHMuaG9zcGl0YWxfbmFtZX0/YCA6ICcnfWB9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogdGhpcy5wcm9wcy5kb2N0b3JfbmFtZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJpcGQtbmVlZEhlbHBcIj57YE5lZWQgdG8gYm9vayBhbiBhcHBvaW50bWVudCB3aXRoICR7dGhpcy5wcm9wcy5kb2N0b3JfbmFtZX0gJHt0aGlzLnByb3BzLmhvc3BpdGFsX25hbWUgPyBgYXQgJHt0aGlzLnByb3BzLmhvc3BpdGFsX25hbWV9P2AgOiAnJ31gfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogdGhpcy5wcm9wcy5ob3NwaXRhbF9uYW1lID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaXBkLW5lZWRIZWxwXCI+e2BOZWVkIGhlbHAgd2l0aCBhbiBhcHBvaW50bWVudCAke3RoaXMucHJvcHMuaG9zcGl0YWxfbmFtZSA/IGBhdCAke3RoaXMucHJvcHMuaG9zcGl0YWxfbmFtZX0/YCA6ICcnfWB9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5wcm9jZWR1cmVfbmFtZSA/IDxzZWN0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlwZC1uZWVkSGVscFwiPntgTmVlZCBoZWxwIHdpdGggJHt0aGlzLnByb3BzLnByb2NlZHVyZV9uYW1lfT9gfTwvcD48L3NlY3Rpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHR7Lypcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFyc2VkLnR5cGUgJiYgcGFyc2VkLnR5cGUuaW5jbHVkZXMoJ29mZmVycycpP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1pcGQtY29udCBpcGQtcG9wLXRpY2stdGV4dFwiPjxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9Lz4gPHNwYW4+VXB0byAzMCUgT2ZmIG9uIFN1cmdlcnkgKHdpdGggSW1wbGFudHMpPC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWlwZC1jb250IGlwZC1wb3AtdGljay10ZXh0XCI+PGltZyBjbGFzc05hbWU9XCJpcGQtcG9wLXRpY2tcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3RpY2sucG5nJ30vPiA8c3Bhbj4xc3QgRG9jdG9yIEJvb2tpbmcgJiBYLXJheSBGUkVFPC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWlwZC1jb250IGlwZC1wb3AtdGljay10ZXh0XCI+PGltZyBjbGFzc05hbWU9XCJpcGQtcG9wLXRpY2tcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3RpY2sucG5nJ30vPiA8c3Bhbj41MCUgT2ZmIG9uIFBoeXNpb3RoZXJhcHkgKFBvc3QgT3BlcmF0aW9uKTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1pcGQtY29udCBpcGQtcG9wLXRpY2stdGV4dFwiPjxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9Lz4gPHNwYW4+RGVkaWNhdGVkIERvY3RvciBmb3IgTWVkaWNhbCBBZHZpY2U8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PjonJ1xuXHRcdFx0XHRcdFx0XHRcdFx0Ki99XG5cblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IXBhcnNlZC50eXBlIHx8IHRydWUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtaXBkLWNvbnQgaXBkLXBvcC10aWNrLXRleHRcIj48aW1nIGNsYXNzTmFtZT1cImlwZC1wb3AtdGlja1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWFnZXMvdGljay5wbmcnfSAvPiA8c3Bhbj57dGhpcy5wcm9wcy5wcm9jZWR1cmVfbmFtZSA/ICdCb29rIHRoZSByaWdodCBEb2N0b3IvSG9zcGl0YWwnIDogJ0dldCB1cHRvIDMwJSBPZmYgb24gQXBwb2ludG1lbnRzJ308L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1pcGQtY29udCBpcGQtcG9wLXRpY2stdGV4dFwiPjxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9IC8+IDxzcGFuPnt0aGlzLnByb3BzLnByb2NlZHVyZV9uYW1lID8gJ0NvbXBhcmUgU3VyZ2VyeSBDb3N0IGFjcm9zcyBIb3NwaXRhbHMnIDogJ0luc3RhbnQgQm9va2luZyBDb25maXJtYXRpb24nfTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWlwZC1jb250IGlwZC1wb3AtdGljay10ZXh0XCI+PGltZyBjbGFzc05hbWU9XCJpcGQtcG9wLXRpY2tcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1hZ2VzL3RpY2sucG5nJ30gLz4gPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9ja1wiPnt0aGlzLnByb3BzLnByb2NlZHVyZV9uYW1lID8gJ1NwZWNpYWwgUHJpY2VzIGZvciBEb2NwcmltZSBDdXN0b21lcnMnIDogJ0RlZGljYXRlZCBEb2N0b3IgZm9yIEFkdmljZSd9PC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQhcGFyc2VkLnR5cGUgJiYgdGhpcy5wcm9wcy5wcm9jZWR1cmVfbmFtZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1pcGQtY29udCBpcGQtcG9wLXRpY2stdGV4dFwiPjxpbWcgY2xhc3NOYW1lPVwiaXBkLXBvcC10aWNrXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltYWdlcy90aWNrLnBuZyd9IC8+IDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2tcIj5EZWRpY2F0ZWQgRG9jdG9yIGZvciBNZWRpY2FsIEFkdmljZTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cImlwZC1pbnAtc2VjdGlvblwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gbmFtZT0nbmFtZScgcGxhY2Vob2xkZXI9XCIqTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIk51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lX251bWJlcn0gbmFtZT0ncGhvbmVfbnVtYmVyJyBwbGFjZWhvbGRlcj1cIipNb2JpbGUgTnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLWxlYWQtdGV4dGFyZWFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCIqSG93IGNhbiB3ZSBoZWxwIHlvdT9cIiBzdHlsZT17e2ZvbnRXZWlnaHQ6NTAwfX0gcm93cz0nMScgdmFsdWU9e3RoaXMuc3RhdGUuY29tbWVudHN9IG5hbWU9J2NvbW1lbnRzJyBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJza2lwLWJ0bi1zZ25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImlwZC1pbnAtc2JtdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3VibWl0TGVhZEZvcm0oKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PkNsaWNrIHRvIFByb2NlZWQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQocGFyc2VkICYmIHBhcnNlZC5nZXRfZmVlZGJhY2sgJiYgcGFyc2VkLmdldF9mZWVkYmFjayA9PSAnMScpIHx8IHRoaXMucHJvcHMuZm9yY2VkUG9wdXAgPycnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6PHAgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5jbG9zZVBvcFVwQ2xpY2tlZCgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5Ta2lwPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4qL31cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXBkLXBvcC1zY3JsXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1pbnAtc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm0tbHN0LWlucHV0Y250XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3RfbmFtZX0gbmFtZT0nZmlyc3RfbmFtZScgcGxhY2Vob2xkZXI9XCIqRmlyc3QgTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubGFzdF9uYW1lfSBuYW1lPSdsYXN0X25hbWUnIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVfbnVtYmVyfSBuYW1lPSdwaG9uZV9udW1iZXInIHBsYWNlaG9sZGVyPVwiKk1vYmlsZSBOdW1iZXJcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsdC1udy1pbnB1dCByYWRpby1tYmwgbWItMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzbHQtbGFiZWwgdGV4dC1sZWZ0XCIgaHRtbEZvcj1cIm1hbGVcIiA+KkdlbmRlcjo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbHQtbGFiZWwtcmFkaW8gbWwtMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2VuZGVyOiAnbScgfSl9Pk1hbGVcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXJcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PT0gJ20nfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGdlbmRlcjogJ2YnIH0pfT5GZW1hbGVcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImdlbmRlclwiIHZhbHVlPVwibVwiIG5hbWU9XCJnZW5kZXJcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PT0gJ2YnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWRhdGUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1PipQcmVmZXJyZWQgRGF0ZTo8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWwtZGF0ZS1zZWxlY3QtY29udGFpbmVyXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206MH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbGVjdC1kYXRlLWhlYWRpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1kYXRlLWxpc3RpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwidmVyLWRhdGUtbGlzdC11bFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkYXRlLWxpc3QtYWN0aXZlXCI+MjI8c3Bhbj5Gcmk8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiXCI+Mjk8c3Bhbj5Gcmk8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiXCI+NjxzcGFuPkZyaTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIHN0eWxlPXt7cGFkZGluZzowfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY2FsbmV4dC5zdmcnfSBzdHlsZT17e3dpZHRoOjIyLCBtYXJnaW5Ub3A6MTB9fS8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWRhdGUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1PlByZWZlcnJlZCBUaW1lPC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbj5vcHRpb24gMTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbj5vcHRpb24gMjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbj5vcHRpb24gMzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4qL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlwZC1sZWFkLXRleHRhcmVhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCIqSG93IGNhbiB3ZSBoZWxwIHlvdT9cIiBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAgfX0gcm93cz0nMScgbmFtZT0nY29tbWVudHMnIHZhbHVlPXt0aGlzLnN0YXRlLmNvbW1lbnRzfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNraXAtYnRuLXNnblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpcGQtaW5wLXNibXRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1Ym1pdExlYWRGb3JtKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PkNsaWNrIHRvIFByb2NlZWQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHBhcnNlZCAmJiBwYXJzZWQuZ2V0X2ZlZWRiYWNrICYmIHBhcnNlZC5nZXRfZmVlZGJhY2sgPT0gJzEnKSB8fCB0aGlzLnByb3BzLmZvcmNlZFBvcHVwID8gJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IDxwIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY2xvc2VQb3BVcENsaWNrZWQodHJ1ZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5Ta2lwPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9wVXAtd2h0c2FwcEVuYWJsZS1pcGRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2h0c2FwcEVuYWJsZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPHAgY2xhc3NOYW1lPVwid3RzYXBwLWNoay10eHRcIj48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvdGljay5zdmcnfSAvPiBFbmFibGUgV2hhdHNhcHAgZm9yIHNlYW1sZXNzIGNvbW11bmljYXRpb248L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCovfTxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZ3LTUwMFwiIHN0eWxlPXt7IGZvbnRTaXplOiA5LCBjb2xvcjogJyM4YThhOGEnIH19ID5CeSBwcm9jZWVkaW5nLCB5b3UgaGVyZWJ5IGFncmVlIHRvIHRoZSA8YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5FbmQgVXNlciBBZ3JlZW1lbnQ8L2E+IGFuZCA8YSBocmVmPVwiL3ByaXZhY3lcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0gPlByaXZhY3kgUG9saWN5LjwvYT48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwYXNzZWRQcm9wcykgPT4ge1xuXG5cdGNvbnN0IHtcblx0XHRzZWxlY3RlZExvY2F0aW9uXG5cdH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cblx0cmV0dXJuIHtcblx0XHRzZWxlY3RlZExvY2F0aW9uXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cblx0cmV0dXJuIHtcblx0XHRzdWJtaXRJUERGb3JtOiAoZm9ybURhdGEsIHNlbGVjdGVkTG9jYXRpb24sIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRJUERGb3JtKGZvcm1EYXRhLCBzZWxlY3RlZExvY2F0aW9uLCBjYikpLFxuXHRcdGlwZFBvcHVwRmlyZWQ6ICgpID0+IGRpc3BhdGNoKGlwZFBvcHVwRmlyZWQoKSksXG5cdFx0c2F2ZUlwZFBvcHVwRGF0YTogKHR5cGUsIGRhdGEpID0+IGRpc3BhdGNoKHNhdmVJcGRQb3B1cERhdGEodHlwZSwgZGF0YSkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSXBkTGVhZEZvcm0pIl0sInNvdXJjZVJvb3QiOiIifQ==