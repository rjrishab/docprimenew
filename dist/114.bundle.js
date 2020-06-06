(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114],{

/***/ "./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js ***!
  \************************************************************************/
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

var CommonPopup = function (_React$PureComponent) {
	_inherits(CommonPopup, _React$PureComponent);

	function CommonPopup() {
		_classCallCheck(this, CommonPopup);

		return _possibleConstructorReturn(this, (CommonPopup.__proto__ || Object.getPrototypeOf(CommonPopup)).apply(this, arguments));
	}

	_createClass(CommonPopup, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				_react2.default.createElement("div", { className: "cancel-overlay cancel-overlay-zindex", onClick: function onClick() {
						return _this2.props.cancelOverlay(1);
					} }),
				_react2.default.createElement(
					"div",
					{ className: "widget cancel-appointment-div cancel-popup" },
					this.props.children
				)
			);
		}
	}]);

	return CommonPopup;
}(_react2.default.PureComponent);

exports.default = CommonPopup;

/***/ }),

/***/ "./dev/js/containers/commons/InsuranceView.js":
/*!****************************************************!*\
  !*** ./dev/js/containers/commons/InsuranceView.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../../components/commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _commonFixedPopup = __webpack_require__(/*! ../../components/commons/commonFixedPopup/commonFixedPopup.js */ "./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js");

var _commonFixedPopup2 = _interopRequireDefault(_commonFixedPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Insurance = function (_React$Component) {
	_inherits(Insurance, _React$Component);

	function Insurance(props) {
		_classCallCheck(this, Insurance);

		var _this = _possibleConstructorReturn(this, (Insurance.__proto__ || Object.getPrototypeOf(Insurance)).call(this, props));

		_this.cancelOverlay = function () {
			_this.setState({ showPopup: false });
		};

		_this.openPopup = function () {
			_this.setState({ showPopup: true });
		};

		_this.state = {
			showPopup: false
		};
		return _this;
	}

	_createClass(Insurance, [{
		key: 'toggleTab',
		value: function toggleTab() {}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'profile-body-wrap' },
						_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
						_react2.default.createElement(
							'section',
							{ className: 'container article-container bottomMargin' },
							_react2.default.createElement(
								'div',
								{ className: 'row main-row parent-section-row justify-content-center' },
								_react2.default.createElement(
									'div',
									{ className: 'col-12 col-md-10 col-lg-10 center-column' },
									_react2.default.createElement(
										'div',
										{ className: 'container-fluid mt-20' },
										_react2.default.createElement(
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
														{ className: 'ins-name-head-div d-flex align-items-start digit-logo' },
														_react2.default.createElement('img', { className: 'img-fluid ', width: '60', src: 'https://www.reinsurancene.ws/wp-content/uploads/2019/03/digit-insurance-logo.jpg' }),
														_react2.default.createElement(
															'p',
															{ className: 'fw-500 mrt-10' },
															'Digit Covid Group insurance'
														)
													),
													_react2.default.createElement(
														'div',
														{ className: 'ins-pdf-dwnload-div d-flex align-items-center' },
														_react2.default.createElement(
															'a',
															{ href: '' },
															_react2.default.createElement('img', { src: "/assets" + "/img/pdf-dwn.png" })
														),
														_react2.default.createElement(
															'span',
															{ className: 'fw-500' },
															'Policy Details'
														)
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'ins-swich-tabs-container' },
													_react2.default.createElement(
														'div',
														{ className: 'ins-tabs' },
														_react2.default.createElement(
															'ul',
															null,
															_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																	'p',
																	{ className: ' active' },
																	'Features'
																)
															),
															_react2.default.createElement(
																'li',
																null,
																_react2.default.createElement(
																	'p',
																	{ className: 'ins-tab-inactive' },
																	'What\'s not Covered?'
																)
															)
														)
													),
													_react2.default.createElement(
														'div',
														{ className: 'ins-tabs-content widget-content' },
														_react2.default.createElement(
															'ul',
															null,
															_react2.default.createElement(
																'li',
																null,
																'Sum Insured Type : Individual for each member covered'
															),
															_react2.default.createElement(
																'li',
																null,
																'Room rent restriction : No Restriction'
															),
															_react2.default.createElement(
																'li',
																null,
																'ICU limit : No Restriction'
															),
															_react2.default.createElement(
																'li',
																null,
																'Pre and Post hospitalization days : 30 days and 60 days respectively'
															),
															_react2.default.createElement(
																'li',
																null,
																'Road Ambulance : 1% of the SI (up to INR 5,000)'
															),
															_react2.default.createElement(
																'li',
																null,
																'Second medical opinion : Covered'
															),
															_react2.default.createElement(
																'li',
																null,
																'Types of hospitals covered : All'
															)
														),
														_react2.default.createElement(
															'ul',
															{ className: 'd-none' },
															_react2.default.createElement(
																'li',
																null,
																'Hospitalisation expenses not in lieu of treatment for Coronavirus disease (COVID-19) will not be covered.'
															),
															_react2.default.createElement(
																'li',
																null,
																'Insured members already treated for or quarantined for Coronavirus disease (COVID-19) before the policy issuance will not be covered.'
															),
															_react2.default.createElement(
																'li',
																null,
																'Treatment taken outside India will not be covered.'
															),
															_react2.default.createElement(
																'li',
																null,
																'Home hospitalisation (Domiciliary hospitalisation) expenses will not be covered.'
															),
															_react2.default.createElement(
																'li',
																null,
																'Hospitalisation expenses for patients only under investigation with inconclusive medical report will not be covered.'
															)
														)
													)
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'widget mrb-10 digi-step' },
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
																{ className: 'tab_inactive' },
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
											),
											_react2.default.createElement(
												'div',
												{ className: 'widget mrb-10' },
												_react2.default.createElement(
													'table',
													{ className: 'table table-bordered insurance-tbl insurance-checkboxes digitTbl' },
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
														_react2.default.createElement(
															'tr',
															null,
															_react2.default.createElement(
																'td',
																null,
																_react2.default.createElement(
																	'p',
																	{ className: 'ins-dtls-members-edit' },
																	this.props.is_edit ? 'Change Insured Plan' : 'Insured Member Details'
																)
															),
															_react2.default.createElement('td', null)
														),
														_react2.default.createElement(
															'tr',
															null,
															_react2.default.createElement(
																'td',
																null,
																_react2.default.createElement(
																	'div',
																	{ className: 'dtl-radio' },
																	_react2.default.createElement(
																		'label',
																		{ className: 'container-radio' },
																		'Lorem ipsum dolor sit amet',
																		_react2.default.createElement('input', { type: 'radio', checked: true }),
																		_react2.default.createElement('span', { className: 'doc-checkmark' })
																	)
																)
															),
															_react2.default.createElement(
																'td',
																null,
																_react2.default.createElement(
																	'span',
																	null,
																	'\u20B9 8888'
																)
															)
														),
														_react2.default.createElement(
															'tr',
															null,
															_react2.default.createElement(
																'td',
																null,
																_react2.default.createElement(
																	'div',
																	{ className: 'dtl-radio' },
																	_react2.default.createElement(
																		'label',
																		{ className: 'container-radio' },
																		'Lorem ipsum dolor sit amet',
																		_react2.default.createElement('input', { type: 'radio', value: '' }),
																		_react2.default.createElement('span', { className: 'doc-checkmark' })
																	)
																)
															),
															_react2.default.createElement(
																'td',
																null,
																_react2.default.createElement(
																	'span',
																	null,
																	'\u20B9 8888'
																)
															)
														),
														_react2.default.createElement(
															'tr',
															null,
															_react2.default.createElement(
																'td',
																null,
																_react2.default.createElement(
																	'div',
																	{ className: 'dtl-radio' },
																	_react2.default.createElement(
																		'label',
																		{ className: 'container-radio' },
																		'Lorem ipsum dolor sit amet',
																		_react2.default.createElement('input', { type: 'radio', value: '' }),
																		_react2.default.createElement('span', { className: 'doc-checkmark' })
																	)
																)
															),
															_react2.default.createElement(
																'td',
																null,
																_react2.default.createElement(
																	'span',
																	null,
																	'\u20B9 8888'
																)
															)
														),
														_react2.default.createElement(
															'tr',
															null,
															_react2.default.createElement(
																'td',
																null,
																_react2.default.createElement(
																	'div',
																	{ className: 'dtl-radio' },
																	_react2.default.createElement(
																		'label',
																		{ className: 'container-radio' },
																		'Lorem ipsum dolor sit amet',
																		_react2.default.createElement('input', { type: 'radio', value: '' }),
																		_react2.default.createElement('span', { className: 'doc-checkmark' })
																	)
																)
															),
															_react2.default.createElement(
																'td',
																null,
																_react2.default.createElement(
																	'span',
																	null,
																	'\u20B9 8888'
																)
															)
														)
													)
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'widget mrb-10' },
												_react2.default.createElement(
													'div',
													{ className: 'widget-content' },
													_react2.default.createElement(
														'div',
														{ className: 'sub-form-input-data' },
														_react2.default.createElement(
															'div',
															null,
															_react2.default.createElement(
																'p',
																{ className: 'sub-form-hed' },
																'Self'
															)
														)
													),
													_react2.default.createElement(
														'div',
														{ className: 'dlts-cnt' },
														_react2.default.createElement(
															'p',
															null,
															_react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/nw-usr.svg' }),
															_react2.default.createElement(
																'span',
																null,
																'Mr. Mayank Yadav'
															)
														),
														_react2.default.createElement(
															'p',
															null,
															_react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/calendar-01.svg' }),
															_react2.default.createElement(
																'span',
																null,
																'09/02/1990'
															)
														),
														_react2.default.createElement(
															'p',
															null,
															_react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/mail-01.svg' }),
															_react2.default.createElement(
																'span',
																null,
																'mayank@gmail.com'
															)
														),
														_react2.default.createElement(
															'p',
															null,
															_react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/customer-icons/call.svg' }),
															_react2.default.createElement(
																'span',
																null,
																'8800327006'
															)
														),
														_react2.default.createElement(
															'p',
															null,
															_react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/location-01.svg' }),
															_react2.default.createElement(
																'span',
																null,
																'110092'
															)
														),
														_react2.default.createElement(
															'p',
															null,
															_react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/customer-icons/location-colored.svg' }),
															_react2.default.createElement(
																'span',
																null,
																'B11/1 Vinod nagar West Delhi'
															)
														),
														_react2.default.createElement(
															'p',
															null,
															_react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/nw-usr.svg' }),
															_react2.default.createElement(
																'span',
																null,
																'Nominee Name'
															)
														),
														_react2.default.createElement(
															'p',
															null,
															_react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/nw-usr.svg' }),
															_react2.default.createElement(
																'span',
																null,
																'Brother'
															)
														)
													)
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'widget mrb-10 digit-input-container' },
												_react2.default.createElement(
													'div',
													{ className: 'widget-content' },
													_react2.default.createElement(
														'div',
														{ className: 'ins-sub-forms' },
														_react2.default.createElement(
															'div',
															{ className: 'sub-form-input-data' },
															_react2.default.createElement(
																'div',
																null,
																_react2.default.createElement(
																	'p',
																	{ className: 'sub-form-hed' },
																	'Details'
																)
															),
															_react2.default.createElement(
																'div',
																{ className: 'sub-form-hed-click' },
																'Add More ',
																_react2.default.createElement('img', { src: "/assets" + "/img/rgt-arw.svg" })
															)
														),
														_react2.default.createElement(
															'div',
															{ className: 'col-12' },
															_react2.default.createElement(
																'button',
																{ className: 'label-names-buttons btn-active ', name: 'title', value: 'mr.', 'data-param': 'title' },
																'Mr.'
															),
															_react2.default.createElement(
																'button',
																{ className: 'label-names-buttons', name: 'title', value: 'miss.', 'data-param': 'title' },
																'Ms.'
															),
															_react2.default.createElement(
																'button',
																{ className: 'label-names-buttons', value: 'mrs.', name: 'title', 'data-param': 'title' },
																'Mrs.'
															)
														),
														_react2.default.createElement(
															'div',
															{ className: 'row no-gutters' },
															_react2.default.createElement(
																'div',
																{ className: 'col-6' },
																_react2.default.createElement(
																	'div',
																	{ className: 'ins-form-group inp-margin-right ' },
																	_react2.default.createElement('input', { type: 'text', id: 'name1', className: 'form-control ins-form-control', required: true, autoComplete: 'off', name: 'name', 'data-param': 'name' }),
																	_react2.default.createElement(
																		'label',
																		{ className: 'form-control-placeholder', htmlFor: 'name1' },
																		'First Name'
																	),
																	_react2.default.createElement('img', { src: "/assets" + "/img/nw-usr.svg" })
																)
															),
															_react2.default.createElement(
																'div',
																{ className: 'col-6' },
																_react2.default.createElement(
																	'div',
																	{ className: 'ins-form-group inp-margin-right ' },
																	_react2.default.createElement('input', { type: 'text', id: 'middle_name', className: 'form-control ins-form-control', required: true, autoComplete: 'off', name: 'middle_name', value: '', 'data-param': 'middle_name' }),
																	_react2.default.createElement(
																		'label',
																		{ className: 'form-control-placeholder', htmlFor: 'middle_name' },
																		'Middle Name'
																	),
																	_react2.default.createElement('img', { src: "/assets" + "/img/nw-usr.svg" })
																)
															),
															_react2.default.createElement(
																'div',
																{ className: 'col-6' },
																_react2.default.createElement(
																	'div',
																	{ className: 'ins-form-group inp-margin-left' },
																	_react2.default.createElement('input', { type: 'text', id: 'last_name', className: 'form-control ins-form-control', required: true, autoComplete: 'off', name: 'last_name', 'data-param': 'last_name' }),
																	_react2.default.createElement(
																		'label',
																		{ className: 'form-control-placeholder', htmlFor: 'last_name' },
																		'Last Name'
																	),
																	_react2.default.createElement('img', { src: "/assets" + "/img/nw-usr.svg" })
																)
															),
															_react2.default.createElement(
																'div',
																{ className: 'col-12' },
																_react2.default.createElement(
																	'div',
																	{ className: 'ins-form-group' },
																	_react2.default.createElement('input', { type: 'date', id: 'isn-date', className: 'form-control ins-form-control ins-date-picker-style', required: true, autoComplete: 'off', name: 'dob', 'data-param': 'dob', value: 'date' }),
																	_react2.default.createElement(
																		'label',
																		{ className: 'form-control-placeholder datePickerLabel', htmlFor: 'ins-date' },
																		'Date of birth'
																	),
																	_react2.default.createElement('img', { src: "/assets" + "/img/calendar-01.svg" })
																)
															),
															_react2.default.createElement(
																'div',
																{ className: 'col-12' },
																_react2.default.createElement(
																	'div',
																	{ className: 'ins-form-group' },
																	_react2.default.createElement('input', { type: 'text', className: 'form-control ins-form-control', required: true, id: 'mil' }),
																	_react2.default.createElement(
																		'label',
																		{ className: 'form-control-placeholder ', htmlFor: 'mil' },
																		'Email'
																	),
																	_react2.default.createElement('img', { src: "/assets" + "/img/mail-01.svg" })
																)
															),
															_react2.default.createElement(
																'div',
																{ className: 'col-12' },
																_react2.default.createElement(
																	'div',
																	{ className: 'ins-form-group' },
																	_react2.default.createElement('input', { type: 'text', id: 'mbl', className: 'form-control ins-form-control ins-date-picker-style', required: true, autoComplete: 'off', name: 'dob', 'data-param': 'dob', value: '' }),
																	_react2.default.createElement(
																		'label',
																		{ className: 'form-control-placeholder', htmlFor: 'mbl' },
																		'Mobile'
																	),
																	_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/call.svg" })
																)
															),
															_react2.default.createElement(
																'div',
																{ className: 'col-12' },
																_react2.default.createElement(
																	'div',
																	{ className: 'ins-form-group' },
																	_react2.default.createElement('input', { type: 'text', id: 'pin', className: 'form-control ins-form-control ins-date-picker-style', required: true, autoComplete: 'off', name: 'dob', 'data-param': 'dob', value: '' }),
																	_react2.default.createElement(
																		'label',
																		{ className: 'form-control-placeholder', htmlFor: 'pin' },
																		'Pin Code'
																	),
																	_react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
																)
															),
															_react2.default.createElement(
																'div',
																{ className: 'col-12' },
																_react2.default.createElement(
																	'div',
																	{ className: 'ins-form-group' },
																	_react2.default.createElement('input', { type: 'text', id: 'adr', className: 'form-control ins-form-control ins-date-picker-style', required: true, autoComplete: 'off', name: 'dob', 'data-param': 'dob', value: '' }),
																	_react2.default.createElement(
																		'label',
																		{ className: 'form-control-placeholder', htmlFor: 'adr' },
																		'Address'
																	),
																	_react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
																)
															),
															_react2.default.createElement(
																'div',
																{ className: 'col-12' },
																_react2.default.createElement(
																	'div',
																	{ className: 'ins-form-group inp-margin-right ' },
																	_react2.default.createElement('input', { type: 'text', id: 'nomName', className: 'form-control ins-form-control', required: true, autoComplete: 'off', name: 'name', 'data-param': 'name' }),
																	_react2.default.createElement(
																		'label',
																		{ className: 'form-control-placeholder', htmlFor: 'nomName' },
																		'Nominee Name'
																	),
																	_react2.default.createElement('img', { src: "/assets" + "/img/nw-usr.svg" })
																)
															),
															_react2.default.createElement(
																'div',
																{ className: 'col-12' },
																_react2.default.createElement(
																	'div',
																	{ className: 'ins-form-group' },
																	_react2.default.createElement(
																		'select',
																		{ className: 'ins-select-drop', id: 'relation_dropdown' },
																		_react2.default.createElement(
																			'option',
																			{ 'data-param': 'relation', disabled: true, selected: true, hidden: true, value: 'relation' },
																			'Nominee Relation'
																		),
																		_react2.default.createElement(
																			'option',
																			{ 'data-param': 'relation', value: 'spouse' },
																			'SPOUSE'
																		),
																		_react2.default.createElement(
																			'option',
																			{ 'data-param': 'relation', value: 'son' },
																			'SON'
																		),
																		_react2.default.createElement(
																			'option',
																			{ 'data-param': 'relation', value: 'daughter' },
																			'DAUGHTER'
																		)
																	),
																	_react2.default.createElement('img', { src: "/assets" + "/img/nw-usr.svg" })
																)
															)
														)
													)
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'widget mrb-10' },
												_react2.default.createElement(
													'div',
													{ className: 'widget-header text-center action-screen-header' },
													_react2.default.createElement(
														'p',
														{ className: 'fw-500 cancel-appointment-head' },
														'Confirm Payment'
													),
													_react2.default.createElement('hr', null)
												),
												_react2.default.createElement(
													'div',
													{ className: 'payment-content-div' },
													_react2.default.createElement(
														'p',
														{ className: 'payment-content fw-500' },
														'Premium Amount'
													),
													_react2.default.createElement(
														'p',
														{ className: 'payment-content fw-500' },
														'\u20B9 0,0'
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'payment-content-div' },
													_react2.default.createElement(
														'p',
														{ className: 'payment-content fw-500' },
														'GST'
													),
													_react2.default.createElement(
														'p',
														{ className: 'payment-content fw-500' },
														'\u20B9 0,0'
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'payment-content-div' },
													_react2.default.createElement(
														'p',
														{ className: 'payment-content fw-500' },
														'Policy StartDate'
													),
													_react2.default.createElement(
														'p',
														{ className: 'payment-content fw-500' },
														'--/--/--'
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'payment-content-div' },
													_react2.default.createElement(
														'p',
														{ className: 'payment-content fw-500' },
														'Amount Payable'
													),
													_react2.default.createElement(
														'p',
														{ className: 'payment-content fw-500' },
														'\u20B9 400'
													)
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'term-cont-digi' },
												_react2.default.createElement(
													'label',
													{ className: 'ck-bx', htmlform: 'test11', style: { 'fontWeight': '500', 'fontSize': '13px' } },
													_react2.default.createElement('input', { type: 'checkbox', defaultChecked: true, className: 'ins-chk-bx', value: '', id: 'test11', name: 'fruit-1' }),
													_react2.default.createElement('span', { className: 'checkmark' }),
													'I Agree to the '
												),
												_react2.default.createElement(
													'p',
													{ onClick: this.openPopup },
													'Terms and Conditions'
												)
											)
										),
										_react2.default.createElement('div', { className: 'bottomMargin' }),
										_react2.default.createElement(
											'div',
											{ className: 'widget mrb-10' },
											_react2.default.createElement(
												'div',
												{ className: 'ins-card-head' },
												_react2.default.createElement(
													'div',
													{ className: 'ins-name-head-div d-flex align-items-start digit-logo' },
													_react2.default.createElement('img', { className: 'img-fluid ', width: '60', src: 'https://www.reinsurancene.ws/wp-content/uploads/2019/03/digit-insurance-logo.jpg' }),
													_react2.default.createElement(
														'p',
														{ className: 'fw-500 mrt-10' },
														'Digit Covid Group insurance',
														_react2.default.createElement('br', null),
														_react2.default.createElement(
															'span',
															{ className: 'ins-active-container' },
															_react2.default.createElement(
																'p',
																null,
																'Active ',
																_react2.default.createElement('img', { src: "/assets" + "/img/chk-green.svg" })
															)
														)
													)
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'ins-policy-date' },
												_react2.default.createElement(
													'div',
													{ className: 'details-flex-cont' },
													_react2.default.createElement(
														'div',
														{ className: 'ins-policy-details' },
														_react2.default.createElement(
															'p',
															null,
															'Policy Purchase Date'
														),
														_react2.default.createElement(
															'span',
															null,
															'11th Oct 2020'
														)
													),
													_react2.default.createElement(
														'div',
														{ className: 'ins-policy-details' },
														_react2.default.createElement(
															'p',
															null,
															'Valid Upto'
														),
														_react2.default.createElement(
															'span',
															null,
															'11th Oct 2021'
														)
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'ins-policy-members-details mt-20' },
													_react2.default.createElement(
														'p',
														null,
														_react2.default.createElement(
															'span',
															null,
															'Premium'
														),
														' : Rs 2000'
													),
													_react2.default.createElement(
														'p',
														{ style: { 'textTransform': 'capitalize' } },
														_react2.default.createElement(
															'span',
															null,
															'Proposer Name '
														),
														' : Mayank Yadav'
													),
													_react2.default.createElement(
														'p',
														null,
														_react2.default.createElement(
															'span',
															null,
															'Policy Number'
														),
														' : DIDIG22926765'
													),
													_react2.default.createElement(
														'p',
														null,
														_react2.default.createElement(
															'span',
															null,
															'Cover'
														),
														' : 4 \'Members\''
													),
													_react2.default.createElement(
														'ul',
														null,
														_react2.default.createElement(
															'li',
															{ style: { 'textTransform': 'capitalize' } },
															_react2.default.createElement(
																'span',
																{ className: 'insa-tbl-names' },
																' Maddy: '
															),
															_react2.default.createElement(
																'span',
																{ className: 'insa-sub-tbl-names' },
																' Shady'
															),
															_react2.default.createElement(
																'span',
																{ className: 'insa-sub-tbl-names' },
																' TestIng'
															)
														)
													)
												)
											)
										)
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'sticky-btn fixed insuBtnsContainer' },
								_react2.default.createElement(
									'button',
									{ className: 'insu-right-orng-btn ins-buy-btn' },
									'Buy Now'
								)
							)
						)
					)
				),
				this.state.showPopup ? _react2.default.createElement(
					_commonFixedPopup2.default,
					{ cancelOverlay: this.cancelOverlay, className: 'test-clas' },
					_react2.default.createElement(
						'div',
						{ className: 'digitTNC-cont' },
						_react2.default.createElement(
							'h3',
							null,
							'Terms & Conditions'
						),
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								'Coverage is applicable only if the insured member(s) is/are diagnosed with and hospitalised solely for COVID-19.'
							),
							_react2.default.createElement(
								'li',
								null,
								'Comorbidity exclusion clause- Insured Member(s) is/are not suffering from fever or suffering /suffered from diabetes, hypertension, disease related to heart/lungs/kidney/liver, cancer, stroke or any condition that needs ongoing medication or the insured members(s) is/are due for any medical treatment, at the time of buying this policy'
							),
							_react2.default.createElement(
								'li',
								null,
								'Positive test report for Coronavirus disease (COVID-19) conducted from Govt/ICMR Authorized test Centre in India from National Institute of Virology, Pune. ',
								_react2.default.createElement(
									'a',
									{
										href: 'https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf', target: '_blank' },
									'https://icmr.nic.in/sites/default/files/upload_documents/Testing_sites_for_COVID19.pdf'
								)
							),
							_react2.default.createElement(
								'li',
								null,
								'Hospitalisation expenses due to Quarantine for COVID-19 are also covered if the insured member(s) was/were suffering from COVID -19 during the hospitalisation and the said hospitalisation was solely due to COVID-19.'
							),
							_react2.default.createElement(
								'li',
								null,
								'Child below 18 years can be covered if either parent also takes the policy'
							),
							_react2.default.createElement(
								'li',
								null,
								'*Parents can also be covered in case of employer \u2013 employee policy provided they are below age 60.'
							)
						)
					)
				) : ''
			);
		}
	}]);

	return Insurance;
}(_react2.default.Component);

exports.default = Insurance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NvbW1vbkZpeGVkUG9wdXAvY29tbW9uRml4ZWRQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL0luc3VyYW5jZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbW1vblBvcHVwIiwicHJvcHMiLCJjYW5jZWxPdmVybGF5IiwiY2hpbGRyZW4iLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJJbnN1cmFuY2UiLCJzZXRTdGF0ZSIsInNob3dQb3B1cCIsIm9wZW5Qb3B1cCIsInN0YXRlIiwiQVNTRVRTX0JBU0VfVVJMIiwiaXNfZWRpdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUdNQSxXOzs7Ozs7Ozs7OzsyQkFFRztBQUFBOztBQUVQLFVBQ0M7QUFBQyxtQkFBRCxDQUFPLFFBQVA7QUFBQTtBQUNDLDJDQUFLLFdBQVUsc0NBQWYsRUFBc0QsU0FBUztBQUFBLGFBQUksT0FBS0MsS0FBTCxDQUFXQyxhQUFYLENBQXlCLENBQXpCLENBQUo7QUFBQSxNQUEvRCxHQUREO0FBRWE7QUFBQTtBQUFBLE9BQUssV0FBVSw0Q0FBZjtBQU9ELFVBQUtELEtBQUwsQ0FBV0U7QUFQVjtBQUZiLElBREQ7QUFlQTs7OztFQW5Cd0JDLGdCQUFNQyxhOztrQkFzQmpCTCxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBS01NLFM7OztBQUNMLG9CQUFZTCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1pBLEtBRFk7O0FBQUEsUUFNbkJDLGFBTm1CLEdBTUgs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RUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNGO0FBQ1Y7QUFDRjtBQUNNO0FBQ0Y7QUFDSjtBQUNGO0FBQ0k7QUFDRjtBQUNjO0FBQ0Y7QUFDVjtBQUNGO0FBQ2M7QUFDRjtBQUNKO0FBQ0Y7QUFDSSIsImZpbGUiOiIxMTQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cbmNsYXNzIENvbW1vblBvcHVwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4XCIgb25DbGljaz17KCk9PnRoaXMucHJvcHMuY2FuY2VsT3ZlcmxheSgxKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciBhY3Rpb24tc2NyZWVuLWhlYWRlciBwb3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXJtcy1jb25kaXRpb24tZGl2IG9uc2NyZWVuLXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgXHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0ICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICBcdDwvZGl2PlxuXHQgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uUG9wdXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ2hhdFBhbmVsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9DaGF0UGFuZWwnXG5pbXBvcnQgQ29tbW9uTG9naW5Qb3B1cCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvY29tbW9uRml4ZWRQb3B1cC9jb21tb25GaXhlZFBvcHVwLmpzJ1xuXG5cblxuXG5jbGFzcyBJbnN1cmFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93UG9wdXA6IGZhbHNlXG5cdFx0fVxuXHR9XG5cdGNhbmNlbE92ZXJsYXkgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cDogZmFsc2UgfSlcblx0fVxuXG5cdG9wZW5Qb3B1cCA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiB0cnVlIH0pXG5cdH1cblx0dG9nZ2xlVGFiKCkge1xuXG5cdH1cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG5cdFx0XHRcdFx0XHQ8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfSAvPlxuXHRcdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGFydGljbGUtY29udGFpbmVyIGJvdHRvbU1hcmdpblwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMCBjb2wtbGctMTAgY2VudGVyLWNvbHVtblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMjBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gdG9wIHNlY3Rpb24gd2l0aCBpY29ucyBhbmQgbGlzdGluZyA9PT09PT09PT09PT09PT09PT09PSAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWNhcmQtaGVhZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1uYW1lLWhlYWQtZGl2IGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydCBkaWdpdC1sb2dvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgXCIgd2lkdGg9XCI2MFwiIHNyYz1cImh0dHBzOi8vd3d3LnJlaW5zdXJhbmNlbmUud3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDMvZGlnaXQtaW5zdXJhbmNlLWxvZ28uanBnXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHREaWdpdCBDb3ZpZCBHcm91cCBpbnN1cmFuY2U8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1wZGYtZHdubG9hZC1kaXYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJcIiA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BkZi1kd24ucG5nXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0UG9saWN5IERldGFpbHM8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1zd2ljaC10YWJzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy10YWJzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9JyBhY3RpdmUnPkZlYXR1cmVzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0naW5zLXRhYi1pbmFjdGl2ZScgPldoYXQncyBub3QgQ292ZXJlZD88L3A+PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtdGFicy1jb250ZW50IHdpZGdldC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlN1bSBJbnN1cmVkIFR5cGUgOiBJbmRpdmlkdWFsIGZvciBlYWNoIG1lbWJlciBjb3ZlcmVkPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5Sb29tIHJlbnQgcmVzdHJpY3Rpb24gOiBObyBSZXN0cmljdGlvbjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+SUNVIGxpbWl0IDogTm8gUmVzdHJpY3Rpb248L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlByZSBhbmQgUG9zdCBob3NwaXRhbGl6YXRpb24gZGF5cyA6IDMwIGRheXMgYW5kIDYwIGRheXMgcmVzcGVjdGl2ZWx5PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5Sb2FkIEFtYnVsYW5jZSA6IDElIG9mIHRoZSBTSSAodXAgdG8gSU5SIDUsMDAwKTwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+U2Vjb25kIG1lZGljYWwgb3BpbmlvbiA6IENvdmVyZWQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlR5cGVzIG9mIGhvc3BpdGFscyBjb3ZlcmVkIDogQWxsPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJkLW5vbmVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5Ib3NwaXRhbGlzYXRpb24gZXhwZW5zZXMgbm90IGluIGxpZXUgb2YgdHJlYXRtZW50IGZvciBDb3JvbmF2aXJ1cyBkaXNlYXNlIChDT1ZJRC0xOSkgd2lsbCBub3QgYmUgY292ZXJlZC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPkluc3VyZWQgbWVtYmVycyBhbHJlYWR5IHRyZWF0ZWQgZm9yIG9yIHF1YXJhbnRpbmVkIGZvciBDb3JvbmF2aXJ1cyBkaXNlYXNlIChDT1ZJRC0xOSkgYmVmb3JlIHRoZSBwb2xpY3kgaXNzdWFuY2Ugd2lsbCBub3QgYmUgY292ZXJlZC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlRyZWF0bWVudCB0YWtlbiBvdXRzaWRlIEluZGlhIHdpbGwgbm90IGJlIGNvdmVyZWQuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5Ib21lIGhvc3BpdGFsaXNhdGlvbiAoRG9taWNpbGlhcnkgaG9zcGl0YWxpc2F0aW9uKSBleHBlbnNlcyB3aWxsIG5vdCBiZSBjb3ZlcmVkLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+SG9zcGl0YWxpc2F0aW9uIGV4cGVuc2VzIGZvciBwYXRpZW50cyBvbmx5IHVuZGVyIGludmVzdGlnYXRpb24gd2l0aCBpbmNvbmNsdXNpdmUgbWVkaWNhbCByZXBvcnQgd2lsbCBub3QgYmUgY292ZXJlZC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qID09PT09PT09PT09PT09PT09PT09IHRvcCBzZWN0aW9uIHdpdGggaWNvbnMgYW5kIGxpc3RpbmcgPT09PT09PT09PT09PT09PT09PT0gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qID09PT09PT09PT09PT09PT09PT09IFN0ZXBzIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PSAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTAgZGlnaS1zdGVwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1zdGF0dXMtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl9tZW51XCIgaWQ9XCJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl90YWJzXCIgaWQ9XCJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJ0YWJfaW5hY3RpdmVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5DaG9vc2UgWW91ciBQbGFuPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J3RhYl9pbmFjdGl2ZSc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+RmlsbCBNZW1iZXIgRGV0YWlsczwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidGFiX2Rpc2FibGVkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+UGF5bWVudDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gU3RlcHMgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA9PT09PT09PT09PT09PT09PT09PSB0YWJsZSBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT0gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWQgaW5zdXJhbmNlLXRibCBpbnN1cmFuY2UtY2hlY2tib3hlcyBkaWdpdFRibFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInRibC1maXJzdC1oZWFkXCI+PHA+Q292ZXJhZ2UgKDEgWWVhcik8L3A+PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJ0Ymwtc2Vjb25kLWhlYWRcIj48cD5Bbm51YWwgUHJlbWl1bTwvcD48L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHAgY2xhc3NOYW1lPVwiaW5zLWR0bHMtbWVtYmVycy1lZGl0XCI+e3RoaXMucHJvcHMuaXNfZWRpdCA/ICdDaGFuZ2UgSW5zdXJlZCBQbGFuJyA6ICdJbnN1cmVkIE1lbWJlciBEZXRhaWxzJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcblx0XHRcdFx0XHRcdFx0IFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2hlY2tlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHNwYW4+4oK5IDg4ODg8L3NwYW4+PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcblx0XHRcdFx0XHRcdFx0IFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9JycgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPjxzcGFuPuKCuSA4ODg4PC9zcGFuPjwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XG5cdFx0XHRcdFx0XHRcdCBcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPScnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD48c3Bhbj7igrkgODg4ODwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFxuXHRcdFx0XHRcdFx0XHQgXHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT0nJyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHNwYW4+4oK5IDg4ODg8L3NwYW4+PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gdGFibGUgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKj09PT09PT09PT09PT09PT09PT09IHNlbGYgZGV0YWlscyA9PT09PT09PT09PT09PT09PT09PSAgKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3ViLWZvcm0taW5wdXQtZGF0YVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWItZm9ybS1oZWRcIj5TZWxmPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkbHRzLWNudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9udy11c3Iuc3ZnJ30gLz48c3Bhbj5Nci4gTWF5YW5rIFlhZGF2PC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY2FsZW5kYXItMDEuc3ZnJ30gLz48c3Bhbj4wOS8wMi8xOTkwPC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvbWFpbC0wMS5zdmcnfSAvPjxzcGFuPm1heWFua0BnbWFpbC5jb208L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9jYWxsLnN2Zyd9IC8+PHNwYW4+ODgwMDMyNzAwNjwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2xvY2F0aW9uLTAxLnN2Zyd9IC8+PHNwYW4+MTEwMDkyPC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvbG9jYXRpb24tY29sb3JlZC5zdmcnfSAvPjxzcGFuPkIxMS8xIFZpbm9kIG5hZ2FyIFdlc3QgRGVsaGk8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9udy11c3Iuc3ZnJ30gLz48c3Bhbj5Ob21pbmVlIE5hbWU8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9udy11c3Iuc3ZnJ30gLz48c3Bhbj5Ccm90aGVyPC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo9PT09PT09PT09PT09PT09PT09PSBzZWxmIGRldGFpbHMgPT09PT09PT09PT09PT09PT09PT0gICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA9PT09PT09PT09PT09PT09PT09PSBkdW1teSBkYXRhID09PT09PT09PT09PT09PT09PT09ICAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTAgZGlnaXQtaW5wdXQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXN1Yi1mb3Jtc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8aHIgY2xhc3NOYW1lPVwiaW5zLWludGVybmFsLWhyXCIgLz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdWItZm9ybS1pbnB1dC1kYXRhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWItZm9ybS1oZWRcIj5EZXRhaWxzPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN1Yi1mb3JtLWhlZC1jbGlja1wiID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QWRkIE1vcmUgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yZ3QtYXJ3LnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdsYWJlbC1uYW1lcy1idXR0b25zIGJ0bi1hY3RpdmUgJyBuYW1lPVwidGl0bGVcIiB2YWx1ZT0nbXIuJyBkYXRhLXBhcmFtPSd0aXRsZScgPk1yLjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2xhYmVsLW5hbWVzLWJ1dHRvbnMnIG5hbWU9XCJ0aXRsZVwiIHZhbHVlPSdtaXNzLicgZGF0YS1wYXJhbT0ndGl0bGUnID5Ncy48L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdsYWJlbC1uYW1lcy1idXR0b25zJyB2YWx1ZT0nbXJzLicgbmFtZT1cInRpdGxlXCIgZGF0YS1wYXJhbT0ndGl0bGUnICA+TXJzLjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGlucC1tYXJnaW4tcmlnaHQgXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lMVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cIm5hbWVcIiBkYXRhLXBhcmFtPSduYW1lJyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPVwibmFtZTFcIj5GaXJzdCBOYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGlucC1tYXJnaW4tcmlnaHQgXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtaWRkbGVfbmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cIm1pZGRsZV9uYW1lXCIgdmFsdWU9XCJcIiBkYXRhLXBhcmFtPSdtaWRkbGVfbmFtZScgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj1cIm1pZGRsZV9uYW1lXCI+TWlkZGxlIE5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbnctdXNyLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGlucC1tYXJnaW4tbGVmdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGFzdF9uYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJvZmZcIiBuYW1lPVwibGFzdF9uYW1lXCIgZGF0YS1wYXJhbT0nbGFzdF9uYW1lJyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPVwibGFzdF9uYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImlzbi1kYXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgaW5zLWRhdGUtcGlja2VyLXN0eWxlXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cImRvYlwiIGRhdGEtcGFyYW09J2RvYicgdmFsdWU9J2RhdGUnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWxcIiBodG1sRm9yPVwiaW5zLWRhdGVcIj5EYXRlIG9mIGJpcnRoPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhbGVuZGFyLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wnIHJlcXVpcmVkIGlkPVwibWlsXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgJyBodG1sRm9yPVwibWlsXCI+RW1haWw8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbWFpbC0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1ibFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sIGlucy1kYXRlLXBpY2tlci1zdHlsZVwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJkb2JcIiBkYXRhLXBhcmFtPSdkb2InIHZhbHVlPScnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9XCJtYmxcIj5Nb2JpbGU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2FsbC5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBpblwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sIGlucy1kYXRlLXBpY2tlci1zdHlsZVwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJkb2JcIiBkYXRhLXBhcmFtPSdkb2InIHZhbHVlPScnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9XCJwaW5cIj5QaW4gQ29kZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFkclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sIGlucy1kYXRlLXBpY2tlci1zdHlsZVwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJkb2JcIiBkYXRhLXBhcmFtPSdkb2InIHZhbHVlPScnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9XCJhZHJcIj5BZGRyZXNzPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvY2F0aW9uLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBpbnAtbWFyZ2luLXJpZ2h0IFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibm9tTmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cIm5hbWVcIiBkYXRhLXBhcmFtPSduYW1lJyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPVwibm9tTmFtZVwiPk5vbWluZWUgTmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzc05hbWU9XCJpbnMtc2VsZWN0LWRyb3BcIiBpZD1cInJlbGF0aW9uX2Ryb3Bkb3duXCIgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBkYXRhLXBhcmFtPVwicmVsYXRpb25cIiBkaXNhYmxlZCBzZWxlY3RlZCBoaWRkZW4gdmFsdWU9XCJyZWxhdGlvblwiPk5vbWluZWUgUmVsYXRpb248L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gZGF0YS1wYXJhbT1cInJlbGF0aW9uXCIgdmFsdWU9XCJzcG91c2VcIj5TUE9VU0U8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gZGF0YS1wYXJhbT1cInJlbGF0aW9uXCIgdmFsdWU9XCJzb25cIj5TT048L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gZGF0YS1wYXJhbT1cInJlbGF0aW9uXCIgdmFsdWU9XCJkYXVnaHRlclwiPkRBVUdIVEVSPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qID09PT09PT09PT09PT09PT09PT09IGR1bW15IGRhdGEgPT09PT09PT09PT09PT09PT09PT0gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qID09PT09PT09PT09PT09PT09PT09IFBheW1lbnQgPT09PT09PT09PT09PT09PT09PT0gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgYWN0aW9uLXNjcmVlbi1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+Q29uZmlybSBQYXltZW50PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj5QcmVtaXVtIEFtb3VudDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPiYjODM3NzsgMCwwPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPkdTVDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPiYjODM3NzsgMCwwPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPlBvbGljeSBTdGFydERhdGU8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4tLS8tLS8tLTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj5BbW91bnQgUGF5YWJsZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPiYjODM3NzsgNDAwPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXJtLWNvbnQtZGlnaVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgaHRtbGZvcm09XCJ0ZXN0MTFcIiBzdHlsZT17eyAnZm9udFdlaWdodCc6ICc1MDAnLCAnZm9udFNpemUnOiAnMTNweCcgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkZWZhdWx0Q2hlY2tlZCBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgdmFsdWU9XCJcIiBpZD1cInRlc3QxMVwiIG5hbWU9XCJmcnVpdC0xXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPkkgQWdyZWUgdG8gdGhlIDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBvbkNsaWNrPXt0aGlzLm9wZW5Qb3B1cH0+VGVybXMgYW5kIENvbmRpdGlvbnM8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbU1hcmdpblwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gUGF5bWVudCA9PT09PT09PT09PT09PT09PT09PSAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qID09PT09PT09PT09PT09PT09PT09IGFmdGVyIFBheW1lbnQgPT09PT09PT09PT09PT09PT09PT0gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWNhcmQtaGVhZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtbmFtZS1oZWFkLWRpdiBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQgZGlnaXQtbG9nb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBcIiB3aWR0aD1cIjYwXCIgc3JjPVwiaHR0cHM6Ly93d3cucmVpbnN1cmFuY2VuZS53cy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9kaWdpdC1pbnN1cmFuY2UtbG9nby5qcGdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0RGlnaXQgQ292aWQgR3JvdXAgaW5zdXJhbmNlPGJyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpbnMtYWN0aXZlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+QWN0aXZlIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2hrLWdyZWVuLnN2Z1wifSAvPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtcG9saWN5LWRhdGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1mbGV4LWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtcG9saWN5LWRldGFpbHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5Qb2xpY3kgUHVyY2hhc2UgRGF0ZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj4xMXRoIE9jdCAyMDIwPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtcG9saWN5LWRldGFpbHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5WYWxpZCBVcHRvPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjExdGggT2N0IDIwMjE8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1wb2xpY3ktbWVtYmVycy1kZXRhaWxzIG10LTIwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxzcGFuPlByZW1pdW08L3NwYW4+IDogUnMgMjAwMDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0+PHNwYW4+UHJvcG9zZXIgTmFtZSA8L3NwYW4+IDogTWF5YW5rIFlhZGF2PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48c3Bhbj5Qb2xpY3kgTnVtYmVyPC9zcGFuPiA6IERJRElHMjI5MjY3NjU8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxzcGFuPkNvdmVyPC9zcGFuPiA6IDQgJ01lbWJlcnMnPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaW5zYS10YmwtbmFtZXNcIj4gTWFkZHk6IDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImluc2Etc3ViLXRibC1uYW1lc1wiPiBTaGFkeTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImluc2Etc3ViLXRibC1uYW1lc1wiPiBUZXN0SW5nPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA9PT09PT09PT09PT09PT09PT09PSBhZnRlciBQYXltZW50ID09PT09PT09PT09PT09PT09PT09ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gQ29tbW9uIGJ1dHRvbiA9PT09PT09PT09PT09PT09PT09PSAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGlja3ktYnRuIGZpeGVkIGluc3VCdG5zQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpbnN1LXJpZ2h0LW9ybmctYnRuIGlucy1idXktYnRuXCI+QnV5IE5vdzwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0ey8qID09PT09PT09PT09PT09PT09PT09IENvbW1vbiBidXR0b24gPT09PT09PT09PT09PT09PT09PT0gKi99XG5cdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2ID5cblxuXHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gUG9wVXAgPT09PT09PT09PT09PT09PT09PT0gKi99XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLnNob3dQb3B1cCA/XG5cdFx0XHRcdFx0XHQ8Q29tbW9uTG9naW5Qb3B1cCBjYW5jZWxPdmVybGF5PXt0aGlzLmNhbmNlbE92ZXJsYXl9IGNsYXNzTmFtZT1cInRlc3QtY2xhc1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRpZ2l0VE5DLWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDM+VGVybXMgJiBDb25kaXRpb25zPC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+Q292ZXJhZ2UgaXMgYXBwbGljYWJsZSBvbmx5IGlmIHRoZSBpbnN1cmVkIG1lbWJlcihzKSBpcy9hcmUgZGlhZ25vc2VkIHdpdGggYW5kIGhvc3BpdGFsaXNlZCBzb2xlbHkgZm9yIENPVklELTE5LjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+Q29tb3JiaWRpdHkgZXhjbHVzaW9uIGNsYXVzZS0gSW5zdXJlZCBNZW1iZXIocykgaXMvYXJlIG5vdCBzdWZmZXJpbmcgZnJvbSBmZXZlciBvciBzdWZmZXJpbmcgL3N1ZmZlcmVkIGZyb20gZGlhYmV0ZXMsIGh5cGVydGVuc2lvbiwgZGlzZWFzZSByZWxhdGVkIHRvIGhlYXJ0L2x1bmdzL2tpZG5leS9saXZlciwgY2FuY2VyLCBzdHJva2Ugb3IgYW55IGNvbmRpdGlvbiB0aGF0IG5lZWRzIG9uZ29pbmcgbWVkaWNhdGlvbiBvciB0aGUgaW5zdXJlZCBtZW1iZXJzKHMpIGlzL2FyZSBkdWUgZm9yIGFueSBtZWRpY2FsIHRyZWF0bWVudCwgYXQgdGhlIHRpbWUgb2YgYnV5aW5nIHRoaXMgcG9saWN5PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5Qb3NpdGl2ZSB0ZXN0IHJlcG9ydCBmb3IgQ29yb25hdmlydXMgZGlzZWFzZSAoQ09WSUQtMTkpIGNvbmR1Y3RlZCBmcm9tIEdvdnQvSUNNUiBBdXRob3JpemVkIHRlc3QgQ2VudHJlIGluIEluZGlhIGZyb20gTmF0aW9uYWwgSW5zdGl0dXRlIG9mIFZpcm9sb2d5LCBQdW5lLiA8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9pY21yLm5pYy5pbi9zaXRlcy9kZWZhdWx0L2ZpbGVzL3VwbG9hZF9kb2N1bWVudHMvVGVzdGluZ19zaXRlc19mb3JfQ09WSUQxOS5wZGZcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL2ljbXIubmljLmluL3NpdGVzL2RlZmF1bHQvZmlsZXMvdXBsb2FkX2RvY3VtZW50cy9UZXN0aW5nX3NpdGVzX2Zvcl9DT1ZJRDE5LnBkZjwvYT48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPkhvc3BpdGFsaXNhdGlvbiBleHBlbnNlcyBkdWUgdG8gUXVhcmFudGluZSBmb3IgQ09WSUQtMTkgYXJlIGFsc28gY292ZXJlZCBpZiB0aGUgaW5zdXJlZCBtZW1iZXIocykgd2FzL3dlcmUgc3VmZmVyaW5nIGZyb20gQ09WSUQgLTE5IGR1cmluZyB0aGUgaG9zcGl0YWxpc2F0aW9uIGFuZCB0aGUgc2FpZCBob3NwaXRhbGlzYXRpb24gd2FzIHNvbGVseSBkdWUgdG8gQ09WSUQtMTkuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5DaGlsZCBiZWxvdyAxOCB5ZWFycyBjYW4gYmUgY292ZXJlZCBpZiBlaXRoZXIgcGFyZW50IGFsc28gdGFrZXMgdGhlIHBvbGljeTwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+KlBhcmVudHMgY2FuIGFsc28gYmUgY292ZXJlZCBpbiBjYXNlIG9mIGVtcGxveWVyIOKAkyBlbXBsb3llZSBwb2xpY3kgcHJvdmlkZWQgdGhleSBhcmUgYmVsb3cgYWdlIDYwLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L0NvbW1vbkxvZ2luUG9wdXA+IDogJydcblx0XHRcdFx0fVxuXHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gUG9wVXAgPT09PT09PT09PT09PT09PT09PT0gKi99XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2UiLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiaW1wb3J0IF9NZW1vcnlSb3V0ZXIgZnJvbSBcIi4vTWVtb3J5Um91dGVyXCI7XG5leHBvcnQgeyBfTWVtb3J5Um91dGVyIGFzIE1lbW9yeVJvdXRlciB9O1xuaW1wb3J0IF9Qcm9tcHQgZnJvbSBcIi4vUHJvbXB0XCI7XG5leHBvcnQgeyBfUHJvbXB0IGFzIFByb21wdCB9O1xuaW1wb3J0IF9SZWRpcmVjdCBmcm9tIFwiLi9SZWRpcmVjdFwiO1xuZXhwb3J0IHsgX1JlZGlyZWN0IGFzIFJlZGlyZWN0IH07XG5pbXBvcnQgX1JvdXRlIGZyb20gXCIuL1JvdXRlXCI7XG5leHBvcnQgeyBfUm91dGUgYXMgUm91dGUgfTtcbmltcG9ydCBfUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuZXhwb3J0IHsgX1JvdXRlciBhcyBSb3V0ZXIgfTtcbmltcG9ydCBfU3RhdGljUm91dGVyIGZyb20gXCIuL1N0YXRpY1JvdXRlclwiO1xuZXhwb3J0IHsgX1N0YXRpY1JvdXRlciBhcyBTdGF0aWNSb3V0ZXIgfTtcbmltcG9ydCBfU3dpdGNoIGZyb20gXCIuL1N3aXRjaFwiO1xuZXhwb3J0IHsgX1N3aXRjaCBhcyBTd2l0Y2ggfTtcbmltcG9ydCBfZ2VuZXJhdGVQYXRoIGZyb20gXCIuL2dlbmVyYXRlUGF0aFwiO1xuZXhwb3J0IHsgX2dlbmVyYXRlUGF0aCBhcyBnZW5lcmF0ZVBhdGggfTtcbmltcG9ydCBfbWF0Y2hQYXRoIGZyb20gXCIuL21hdGNoUGF0aFwiO1xuZXhwb3J0IHsgX21hdGNoUGF0aCBhcyBtYXRjaFBhdGggfTtcbmltcG9ydCBfd2l0aFJvdXRlciBmcm9tIFwiLi93aXRoUm91dGVyXCI7XG5leHBvcnQgeyBfd2l0aFJvdXRlciBhcyB3aXRoUm91dGVyIH07Il0sInNvdXJjZVJvb3QiOiIifQ==