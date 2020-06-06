exports.ids = [116];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CommonPopup extends _react2.default.PureComponent {

	render() {

		return _react2.default.createElement(
			_react2.default.Fragment,
			null,
			_react2.default.createElement("div", { className: "cancel-overlay cancel-overlay-zindex", onClick: () => this.props.cancelOverlay(1) }),
			_react2.default.createElement(
				"div",
				{ className: "widget cancel-appointment-div cancel-popup" },
				this.props.children
			)
		);
	}
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../../components/commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _commonFixedPopup = __webpack_require__(/*! ../../components/commons/commonFixedPopup/commonFixedPopup.js */ "./dev/js/components/commons/commonFixedPopup/commonFixedPopup.js");

var _commonFixedPopup2 = _interopRequireDefault(_commonFixedPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Insurance extends _react2.default.Component {
	constructor(props) {
		super(props);

		this.cancelOverlay = () => {
			this.setState({ showPopup: false });
		};

		this.openPopup = () => {
			this.setState({ showPopup: true });
		};

		this.state = {
			showPopup: false
		};
	}

	toggleTab() {}
	render() {

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
}

exports.default = Insurance;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NvbW1vbkZpeGVkUG9wdXAvY29tbW9uRml4ZWRQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL0luc3VyYW5jZVZpZXcuanMiXSwibmFtZXMiOlsiQ29tbW9uUG9wdXAiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsImNhbmNlbE92ZXJsYXkiLCJjaGlsZHJlbiIsIkluc3VyYW5jZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic2V0U3RhdGUiLCJzaG93UG9wdXAiLCJvcGVuUG9wdXAiLCJzdGF0ZSIsInRvZ2dsZVRhYiIsIkFTU0VUU19CQVNFX1VSTCIsImlzX2VkaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUdBLE1BQU1BLFdBQU4sU0FBMEJDLGdCQUFNQyxhQUFoQyxDQUE4Qzs7QUFFN0NDLFVBQVE7O0FBRVAsU0FDQztBQUFDLGtCQUFELENBQU8sUUFBUDtBQUFBO0FBQ0MsMENBQUssV0FBVSxzQ0FBZixFQUFzRCxTQUFTLE1BQUksS0FBS0MsS0FBTCxDQUFXQyxhQUFYLENBQXlCLENBQXpCLENBQW5FLEdBREQ7QUFFYTtBQUFBO0FBQUEsTUFBSyxXQUFVLDRDQUFmO0FBT0QsU0FBS0QsS0FBTCxDQUFXRTtBQVBWO0FBRmIsR0FERDtBQWVBO0FBbkI0Qzs7a0JBc0IvQk4sVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFLQSxNQUFNTyxTQUFOLFNBQXdCTixnQkFBTU8sU0FBOUIsQ0FBd0M7QUFDdkNDLGFBQVlMLEtBQVosRUFBbUI7QUFDbEIsUUFBTUEsS0FBTjs7QUFEa0IsT0FNbkJDLGFBTm1CLEdBTUgsTUFBTTtBQUNyQixRQUFLSyxRQUFMLENBQWMsRUFBRUMsV0FBVyxLQUFiLEVBQWQ7QUFDQSxHQVJrQjs7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QWhLLE9BSEQ7QUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTEQ7QUFNQztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTkQ7QUFPQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEQ7QUFGRDtBQURELElBREQsR0FjdUI7QUF4V3pCLEdBREQ7QUE4V0E7QUFqWXNDOztrQkFvWXpCRSxTIiwiZmlsZSI6IjExNi5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuY2xhc3MgQ29tbW9uUG9wdXAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybihcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5jYW5jZWxPdmVybGF5KDEpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyIHBvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1zLWNvbmRpdGlvbi1kaXYgb25zY3JlZW4tc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICBcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHQgICAgICAgICAgICBcdH1cbiAgICAgICAgICAgIFx0PC9kaXY+XG5cdCAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tb25Qb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDaGF0UGFuZWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0NoYXRQYW5lbCdcbmltcG9ydCBDb21tb25Mb2dpblBvcHVwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9jb21tb25GaXhlZFBvcHVwL2NvbW1vbkZpeGVkUG9wdXAuanMnXG5cblxuXG5cbmNsYXNzIEluc3VyYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dQb3B1cDogZmFsc2Vcblx0XHR9XG5cdH1cblx0Y2FuY2VsT3ZlcmxheSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwOiBmYWxzZSB9KVxuXHR9XG5cblx0b3BlblBvcHVwID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IHRydWUgfSlcblx0fVxuXHR0b2dnbGVUYWIoKSB7XG5cblx0fVxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cblx0XHRcdFx0XHRcdDxQcm9maWxlSGVhZGVyIHNob3dQYWNrYWdlU3RyaXA9e3RydWV9IC8+XG5cdFx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgYXJ0aWNsZS1jb250YWluZXIgYm90dG9tTWFyZ2luXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEwIGNvbC1sZy0xMCBjZW50ZXItY29sdW1uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0yMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA9PT09PT09PT09PT09PT09PT09PSB0b3Agc2VjdGlvbiB3aXRoIGljb25zIGFuZCBsaXN0aW5nID09PT09PT09PT09PT09PT09PT09ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtY2FyZC1oZWFkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLW5hbWUtaGVhZC1kaXYgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IGRpZ2l0LWxvZ29cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBcIiB3aWR0aD1cIjYwXCIgc3JjPVwiaHR0cHM6Ly93d3cucmVpbnN1cmFuY2VuZS53cy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9kaWdpdC1pbnN1cmFuY2UtbG9nby5qcGdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdERpZ2l0IENvdmlkIEdyb3VwIGluc3VyYW5jZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXBkZi1kd25sb2FkLWRpdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIlwiID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcGRmLWR3bi5wbmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQb2xpY3kgRGV0YWlsczwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXN3aWNoLXRhYnMtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXRhYnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nIGFjdGl2ZSc+RmVhdHVyZXM8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdpbnMtdGFiLWluYWN0aXZlJyA+V2hhdCdzIG5vdCBDb3ZlcmVkPzwvcD48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy10YWJzLWNvbnRlbnQgd2lkZ2V0LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+U3VtIEluc3VyZWQgVHlwZSA6IEluZGl2aWR1YWwgZm9yIGVhY2ggbWVtYmVyIGNvdmVyZWQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlJvb20gcmVudCByZXN0cmljdGlvbiA6IE5vIFJlc3RyaWN0aW9uPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5JQ1UgbGltaXQgOiBObyBSZXN0cmljdGlvbjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+UHJlIGFuZCBQb3N0IGhvc3BpdGFsaXphdGlvbiBkYXlzIDogMzAgZGF5cyBhbmQgNjAgZGF5cyByZXNwZWN0aXZlbHk8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlJvYWQgQW1idWxhbmNlIDogMSUgb2YgdGhlIFNJICh1cCB0byBJTlIgNSwwMDApPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5TZWNvbmQgbWVkaWNhbCBvcGluaW9uIDogQ292ZXJlZDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+VHlwZXMgb2YgaG9zcGl0YWxzIGNvdmVyZWQgOiBBbGw8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImQtbm9uZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPkhvc3BpdGFsaXNhdGlvbiBleHBlbnNlcyBub3QgaW4gbGlldSBvZiB0cmVhdG1lbnQgZm9yIENvcm9uYXZpcnVzIGRpc2Vhc2UgKENPVklELTE5KSB3aWxsIG5vdCBiZSBjb3ZlcmVkLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+SW5zdXJlZCBtZW1iZXJzIGFscmVhZHkgdHJlYXRlZCBmb3Igb3IgcXVhcmFudGluZWQgZm9yIENvcm9uYXZpcnVzIGRpc2Vhc2UgKENPVklELTE5KSBiZWZvcmUgdGhlIHBvbGljeSBpc3N1YW5jZSB3aWxsIG5vdCBiZSBjb3ZlcmVkLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+VHJlYXRtZW50IHRha2VuIG91dHNpZGUgSW5kaWEgd2lsbCBub3QgYmUgY292ZXJlZC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPkhvbWUgaG9zcGl0YWxpc2F0aW9uIChEb21pY2lsaWFyeSBob3NwaXRhbGlzYXRpb24pIGV4cGVuc2VzIHdpbGwgbm90IGJlIGNvdmVyZWQuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5Ib3NwaXRhbGlzYXRpb24gZXhwZW5zZXMgZm9yIHBhdGllbnRzIG9ubHkgdW5kZXIgaW52ZXN0aWdhdGlvbiB3aXRoIGluY29uY2x1c2l2ZSBtZWRpY2FsIHJlcG9ydCB3aWxsIG5vdCBiZSBjb3ZlcmVkLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gdG9wIHNlY3Rpb24gd2l0aCBpY29ucyBhbmQgbGlzdGluZyA9PT09PT09PT09PT09PT09PT09PSAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gU3RlcHMgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMCBkaWdpLXN0ZXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXN0YXR1cy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX21lbnVcIiBpZD1cIlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX3RhYnNcIiBpZD1cIlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRhYl9pbmFjdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPkNob29zZSBZb3VyIFBsYW48L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0ndGFiX2luYWN0aXZlJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5GaWxsIE1lbWJlciBEZXRhaWxzPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJ0YWJfZGlzYWJsZWRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5QYXltZW50PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA9PT09PT09PT09PT09PT09PT09PSBTdGVwcyBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT0gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qID09PT09PT09PT09PT09PT09PT09IHRhYmxlIENvbnRhaW5lciA9PT09PT09PT09PT09PT09PT09PSAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCBpbnN1cmFuY2UtdGJsIGluc3VyYW5jZS1jaGVja2JveGVzIGRpZ2l0VGJsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwidGJsLWZpcnN0LWhlYWRcIj48cD5Db3ZlcmFnZSAoMSBZZWFyKTwvcD48L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInRibC1zZWNvbmQtaGVhZFwiPjxwPkFubnVhbCBQcmVtaXVtPC9wPjwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD48cCBjbGFzc05hbWU9XCJpbnMtZHRscy1tZW1iZXJzLWVkaXRcIj57dGhpcy5wcm9wcy5pc19lZGl0ID8gJ0NoYW5nZSBJbnN1cmVkIFBsYW4nIDogJ0luc3VyZWQgTWVtYmVyIERldGFpbHMnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD48L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFxuXHRcdFx0XHRcdFx0XHQgXHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjaGVja2VkIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD48c3Bhbj7igrkgODg4ODwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFxuXHRcdFx0XHRcdFx0XHQgXHRcdDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT0nJyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+PHNwYW4+4oK5IDg4ODg8L3NwYW4+PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcblx0XHRcdFx0XHRcdFx0IFx0XHQ8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9JycgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPjxzcGFuPuKCuSA4ODg4PC9zcGFuPjwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XG5cdFx0XHRcdFx0XHRcdCBcdFx0PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPScnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD48c3Bhbj7igrkgODg4ODwvc3Bhbj48L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA9PT09PT09PT09PT09PT09PT09PSB0YWJsZSBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT0gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPT09PT09PT09PT09PT09PT09PT0gc2VsZiBkZXRhaWxzID09PT09PT09PT09PT09PT09PT09ICAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdWItZm9ybS1pbnB1dC1kYXRhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN1Yi1mb3JtLWhlZFwiPlNlbGY8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRsdHMtY250XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL253LXVzci5zdmcnfSAvPjxzcGFuPk1yLiBNYXlhbmsgWWFkYXY8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jYWxlbmRhci0wMS5zdmcnfSAvPjxzcGFuPjA5LzAyLzE5OTA8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9tYWlsLTAxLnN2Zyd9IC8+PHNwYW4+bWF5YW5rQGdtYWlsLmNvbTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2NhbGwuc3ZnJ30gLz48c3Bhbj44ODAwMzI3MDA2PC9zcGFuPjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvbG9jYXRpb24tMDEuc3ZnJ30gLz48c3Bhbj4xMTAwOTI8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9sb2NhdGlvbi1jb2xvcmVkLnN2Zyd9IC8+PHNwYW4+QjExLzEgVmlub2QgbmFnYXIgV2VzdCBEZWxoaTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL253LXVzci5zdmcnfSAvPjxzcGFuPk5vbWluZWUgTmFtZTwvc3Bhbj48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL253LXVzci5zdmcnfSAvPjxzcGFuPkJyb3RoZXI8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKj09PT09PT09PT09PT09PT09PT09IHNlbGYgZGV0YWlscyA9PT09PT09PT09PT09PT09PT09PSAgKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qID09PT09PT09PT09PT09PT09PT09IGR1bW15IGRhdGEgPT09PT09PT09PT09PT09PT09PT0gICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMCBkaWdpdC1pbnB1dC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtc3ViLWZvcm1zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxociBjbGFzc05hbWU9XCJpbnMtaW50ZXJuYWwtaHJcIiAvPiAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN1Yi1mb3JtLWlucHV0LWRhdGFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInN1Yi1mb3JtLWhlZFwiPkRldGFpbHM8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3ViLWZvcm0taGVkLWNsaWNrXCIgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZGQgTW9yZSA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JndC1hcncuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2xhYmVsLW5hbWVzLWJ1dHRvbnMgYnRuLWFjdGl2ZSAnIG5hbWU9XCJ0aXRsZVwiIHZhbHVlPSdtci4nIGRhdGEtcGFyYW09J3RpdGxlJyA+TXIuPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0nbGFiZWwtbmFtZXMtYnV0dG9ucycgbmFtZT1cInRpdGxlXCIgdmFsdWU9J21pc3MuJyBkYXRhLXBhcmFtPSd0aXRsZScgPk1zLjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2xhYmVsLW5hbWVzLWJ1dHRvbnMnIHZhbHVlPSdtcnMuJyBuYW1lPVwidGl0bGVcIiBkYXRhLXBhcmFtPSd0aXRsZScgID5NcnMuPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1yaWdodCBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWUxXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJvZmZcIiBuYW1lPVwibmFtZVwiIGRhdGEtcGFyYW09J25hbWUnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9XCJuYW1lMVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbnctdXNyLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1yaWdodCBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1pZGRsZV9uYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJvZmZcIiBuYW1lPVwibWlkZGxlX25hbWVcIiB2YWx1ZT1cIlwiIGRhdGEtcGFyYW09J21pZGRsZV9uYW1lJyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPVwibWlkZGxlX25hbWVcIj5NaWRkbGUgTmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0X25hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbFwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJsYXN0X25hbWVcIiBkYXRhLXBhcmFtPSdsYXN0X25hbWUnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9XCJsYXN0X25hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbnctdXNyLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiaXNuLWRhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCBpbnMtZGF0ZS1waWNrZXItc3R5bGVcIiByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJvZmZcIiBuYW1lPVwiZG9iXCIgZGF0YS1wYXJhbT0nZG9iJyB2YWx1ZT0nZGF0ZScgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyIGRhdGVQaWNrZXJMYWJlbFwiIGh0bWxGb3I9XCJpbnMtZGF0ZVwiPkRhdGUgb2YgYmlydGg8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FsZW5kYXItMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCcgcmVxdWlyZWQgaWQ9XCJtaWxcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbC1wbGFjZWhvbGRlciAnIGh0bWxGb3I9XCJtaWxcIj5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9tYWlsLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWJsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgaW5zLWRhdGUtcGlja2VyLXN0eWxlXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cImRvYlwiIGRhdGEtcGFyYW09J2RvYicgdmFsdWU9JycgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj1cIm1ibFwiPk1vYmlsZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9jYWxsLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicGluXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgaW5zLWRhdGUtcGlja2VyLXN0eWxlXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cImRvYlwiIGRhdGEtcGFyYW09J2RvYicgdmFsdWU9JycgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj1cInBpblwiPlBpbiBDb2RlPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvY2F0aW9uLTAxLnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgaW5zLWRhdGUtcGlja2VyLXN0eWxlXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cImRvYlwiIGRhdGEtcGFyYW09J2RvYicgdmFsdWU9JycgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj1cImFkclwiPkFkZHJlc3M8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGlucC1tYXJnaW4tcmlnaHQgXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJub21OYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJvZmZcIiBuYW1lPVwibmFtZVwiIGRhdGEtcGFyYW09J25hbWUnIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9XCJub21OYW1lXCI+Tm9taW5lZSBOYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzTmFtZT1cImlucy1zZWxlY3QtZHJvcFwiIGlkPVwicmVsYXRpb25fZHJvcGRvd25cIiA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGRhdGEtcGFyYW09XCJyZWxhdGlvblwiIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbiB2YWx1ZT1cInJlbGF0aW9uXCI+Tm9taW5lZSBSZWxhdGlvbjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBkYXRhLXBhcmFtPVwicmVsYXRpb25cIiB2YWx1ZT1cInNwb3VzZVwiPlNQT1VTRTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBkYXRhLXBhcmFtPVwicmVsYXRpb25cIiB2YWx1ZT1cInNvblwiPlNPTjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBkYXRhLXBhcmFtPVwicmVsYXRpb25cIiB2YWx1ZT1cImRhdWdodGVyXCI+REFVR0hURVI8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gZHVtbXkgZGF0YSA9PT09PT09PT09PT09PT09PT09PSAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gUGF5bWVudCA9PT09PT09PT09PT09PT09PT09PSAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBhY3Rpb24tc2NyZWVuLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5Db25maXJtIFBheW1lbnQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxociAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPlByZW1pdW0gQW1vdW50PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyAwLDA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+R1NUPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyAwLDA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+UG9saWN5IFN0YXJ0RGF0ZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPi0tLy0tLy0tPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPkFtb3VudCBQYXlhYmxlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+JiM4Mzc3OyA0MDA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRlcm0tY29udC1kaWdpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBodG1sZm9ybT1cInRlc3QxMVwiIHN0eWxlPXt7ICdmb250V2VpZ2h0JzogJzUwMCcsICdmb250U2l6ZSc6ICcxM3B4JyB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRlZmF1bHRDaGVja2VkIGNsYXNzTmFtZT1cImlucy1jaGstYnhcIiB2YWx1ZT1cIlwiIGlkPVwidGVzdDExXCIgbmFtZT1cImZydWl0LTFcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+SSBBZ3JlZSB0byB0aGUgPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIG9uQ2xpY2s9e3RoaXMub3BlblBvcHVwfT5UZXJtcyBhbmQgQ29uZGl0aW9uczwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tTWFyZ2luXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA9PT09PT09PT09PT09PT09PT09PSBQYXltZW50ID09PT09PT09PT09PT09PT09PT09ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gYWZ0ZXIgUGF5bWVudCA9PT09PT09PT09PT09PT09PT09PSAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtY2FyZC1oZWFkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1uYW1lLWhlYWQtZGl2IGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydCBkaWdpdC1sb2dvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIFwiIHdpZHRoPVwiNjBcIiBzcmM9XCJodHRwczovL3d3dy5yZWluc3VyYW5jZW5lLndzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzAzL2RpZ2l0LWluc3VyYW5jZS1sb2dvLmpwZ1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHREaWdpdCBDb3ZpZCBHcm91cCBpbnN1cmFuY2U8YnIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImlucy1hY3RpdmUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5BY3RpdmUgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGstZ3JlZW4uc3ZnXCJ9IC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1wb2xpY3ktZGF0ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWZsZXgtY29udFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1wb2xpY3ktZGV0YWlsc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlBvbGljeSBQdXJjaGFzZSBEYXRlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjExdGggT2N0IDIwMjA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1wb2xpY3ktZGV0YWlsc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlZhbGlkIFVwdG88L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+MTF0aCBPY3QgMjAyMTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXBvbGljeS1tZW1iZXJzLWRldGFpbHMgbXQtMjBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PHNwYW4+UHJlbWl1bTwvc3Bhbj4gOiBScyAyMDAwPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyAndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyB9fT48c3Bhbj5Qcm9wb3NlciBOYW1lIDwvc3Bhbj4gOiBNYXlhbmsgWWFkYXY8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxzcGFuPlBvbGljeSBOdW1iZXI8L3NwYW4+IDogRElESUcyMjkyNjc2NTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PHNwYW4+Q292ZXI8L3NwYW4+IDogNCAnTWVtYmVycyc8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpbnNhLXRibC1uYW1lc1wiPiBNYWRkeTogPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaW5zYS1zdWItdGJsLW5hbWVzXCI+IFNoYWR5PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaW5zYS1zdWItdGJsLW5hbWVzXCI+IFRlc3RJbmc8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qID09PT09PT09PT09PT09PT09PT09IGFmdGVyIFBheW1lbnQgPT09PT09PT09PT09PT09PT09PT0gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHsvKiA9PT09PT09PT09PT09PT09PT09PSBDb21tb24gYnV0dG9uID09PT09PT09PT09PT09PT09PT09ICovfVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1idG4gZml4ZWQgaW5zdUJ0bnNDb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImluc3UtcmlnaHQtb3JuZy1idG4gaW5zLWJ1eS1idG5cIj5CdXkgTm93PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7LyogPT09PT09PT09PT09PT09PT09PT0gQ29tbW9uIGJ1dHRvbiA9PT09PT09PT09PT09PT09PT09PSAqL31cblx0XHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXYgPlxuXG5cdFx0XHRcdHsvKiA9PT09PT09PT09PT09PT09PT09PSBQb3BVcCA9PT09PT09PT09PT09PT09PT09PSAqL31cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuc2hvd1BvcHVwID9cblx0XHRcdFx0XHRcdDxDb21tb25Mb2dpblBvcHVwIGNhbmNlbE92ZXJsYXk9e3RoaXMuY2FuY2VsT3ZlcmxheX0gY2xhc3NOYW1lPVwidGVzdC1jbGFzXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGlnaXRUTkMtY29udFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz5UZXJtcyAmIENvbmRpdGlvbnM8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5Db3ZlcmFnZSBpcyBhcHBsaWNhYmxlIG9ubHkgaWYgdGhlIGluc3VyZWQgbWVtYmVyKHMpIGlzL2FyZSBkaWFnbm9zZWQgd2l0aCBhbmQgaG9zcGl0YWxpc2VkIHNvbGVseSBmb3IgQ09WSUQtMTkuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5Db21vcmJpZGl0eSBleGNsdXNpb24gY2xhdXNlLSBJbnN1cmVkIE1lbWJlcihzKSBpcy9hcmUgbm90IHN1ZmZlcmluZyBmcm9tIGZldmVyIG9yIHN1ZmZlcmluZyAvc3VmZmVyZWQgZnJvbSBkaWFiZXRlcywgaHlwZXJ0ZW5zaW9uLCBkaXNlYXNlIHJlbGF0ZWQgdG8gaGVhcnQvbHVuZ3Mva2lkbmV5L2xpdmVyLCBjYW5jZXIsIHN0cm9rZSBvciBhbnkgY29uZGl0aW9uIHRoYXQgbmVlZHMgb25nb2luZyBtZWRpY2F0aW9uIG9yIHRoZSBpbnN1cmVkIG1lbWJlcnMocykgaXMvYXJlIGR1ZSBmb3IgYW55IG1lZGljYWwgdHJlYXRtZW50LCBhdCB0aGUgdGltZSBvZiBidXlpbmcgdGhpcyBwb2xpY3k8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlBvc2l0aXZlIHRlc3QgcmVwb3J0IGZvciBDb3JvbmF2aXJ1cyBkaXNlYXNlIChDT1ZJRC0xOSkgY29uZHVjdGVkIGZyb20gR292dC9JQ01SIEF1dGhvcml6ZWQgdGVzdCBDZW50cmUgaW4gSW5kaWEgZnJvbSBOYXRpb25hbCBJbnN0aXR1dGUgb2YgVmlyb2xvZ3ksIFB1bmUuIDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2ljbXIubmljLmluL3NpdGVzL2RlZmF1bHQvZmlsZXMvdXBsb2FkX2RvY3VtZW50cy9UZXN0aW5nX3NpdGVzX2Zvcl9DT1ZJRDE5LnBkZlwiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vaWNtci5uaWMuaW4vc2l0ZXMvZGVmYXVsdC9maWxlcy91cGxvYWRfZG9jdW1lbnRzL1Rlc3Rpbmdfc2l0ZXNfZm9yX0NPVklEMTkucGRmPC9hPjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+SG9zcGl0YWxpc2F0aW9uIGV4cGVuc2VzIGR1ZSB0byBRdWFyYW50aW5lIGZvciBDT1ZJRC0xOSBhcmUgYWxzbyBjb3ZlcmVkIGlmIHRoZSBpbnN1cmVkIG1lbWJlcihzKSB3YXMvd2VyZSBzdWZmZXJpbmcgZnJvbSBDT1ZJRCAtMTkgZHVyaW5nIHRoZSBob3NwaXRhbGlzYXRpb24gYW5kIHRoZSBzYWlkIGhvc3BpdGFsaXNhdGlvbiB3YXMgc29sZWx5IGR1ZSB0byBDT1ZJRC0xOS48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPkNoaWxkIGJlbG93IDE4IHllYXJzIGNhbiBiZSBjb3ZlcmVkIGlmIGVpdGhlciBwYXJlbnQgYWxzbyB0YWtlcyB0aGUgcG9saWN5PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT4qUGFyZW50cyBjYW4gYWxzbyBiZSBjb3ZlcmVkIGluIGNhc2Ugb2YgZW1wbG95ZXIg4oCTIGVtcGxveWVlIHBvbGljeSBwcm92aWRlZCB0aGV5IGFyZSBiZWxvdyBhZ2UgNjAuPC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvQ29tbW9uTG9naW5Qb3B1cD4gOiAnJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdHsvKiA9PT09PT09PT09PT09PT09PT09PSBQb3BVcCA9PT09PT09PT09PT09PT09PT09PSAqL31cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3VyYW5jZSJdLCJzb3VyY2VSb290IjoiIn0=