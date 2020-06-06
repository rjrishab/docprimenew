(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader(props) {
        _classCallCheck(this, Loader);

        return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));
    }

    _createClass(Loader, [{
        key: "render",
        value: function render() {

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
    }]);

    return Loader;
}(_react2.default.Component);

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

/***/ "./dev/js/components/insurance/insuranceCertificate.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/insurance/insuranceCertificate.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../../components/commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _initialsPicture = __webpack_require__(/*! ../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var InsuranceCertificateView = function (_React$Component) {
	_inherits(InsuranceCertificateView, _React$Component);

	function InsuranceCertificateView(props) {
		_classCallCheck(this, InsuranceCertificateView);

		var _this = _possibleConstructorReturn(this, (InsuranceCertificateView.__proto__ || Object.getPrototypeOf(InsuranceCertificateView)).call(this, props));

		_this.state = {
			showCancelPopup: false
		};
		return _this;
	}

	_createClass(InsuranceCertificateView, [{
		key: 'getGetOrdinal',
		value: function getGetOrdinal(n) {
			var s = ["th", "st", "nd", "rd"],
			    v = n % 100;
			return n + (s[(v - 20) % 10] || s[v] || s[0]);
		}
	}, {
		key: 'cancelPolicy',
		value: function cancelPolicy() {
			if (this.props.get_insured_profile && this.props.get_insured_profile.is_cancel_allowed) {
				this.props.history.push('/insurance/cancelpolicy');
			} else {
				this.setState({ showCancelPopup: true });
			}
		}
	}, {
		key: 'hideCancelPolicyPopup',
		value: function hideCancelPolicyPopup() {
			this.setState({ showCancelPopup: false });
		}
	}, {
		key: 'goToEndorsement',
		value: function goToEndorsement() {
			this.props.clearInsurance(); // to reset insurance data in store
			this.props.history.push('/insurance/insurance-endorsement-details');
		}
	}, {
		key: 'goToBooking',
		value: function goToBooking() {
			var data = this.props.avail_now_data;
			this.props.clearAvailNowInsurance(); // to clear avail now from store
			if (data && Object.keys(data).length > 0) {
				if (data.type == 'lab') {
					this.props.history.push('/lab/' + data.id + '/book');
				} else {
					this.props.history.push('/opd/doctor/' + data.id + '/' + data.selectedClinic + '/bookdetails');
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var parsed = queryString.parse(this.props.location.search);
			if (Object.keys(this.props.get_insured_profile).length > 0) {
				var primaryMember = void 0;
				var FamilyMembers = void 0;
				{
					primaryMember = this.props.get_insured_profile.insured_members.filter(function (x) {
						return x.relation == 'self';
					});
					FamilyMembers = this.props.get_insured_profile.insured_members.filter(function (x) {
						return x.relation != 'self';
					});
				}
				var purchase_date = new Date(this.props.get_insured_profile.purchase_date);
				var purchase_time = purchase_date.toTimeString();
				var purchaseTime = purchase_time.split(" ");
				purchase_date = purchase_date.toDateString();
				var purchaseDate = purchase_date.split(" ");
				var expiry_date = new Date(this.props.get_insured_profile.expiry_date);
				var expiry_time = expiry_date.toTimeString();
				var expiryTime = expiry_time.split(" ");
				expiry_date = expiry_date.toDateString();
				var expiryDate = expiry_date.split(" ");
				return _react2.default.createElement(
					'div',
					{ className: 'profile-body-wrap', style: { paddingBottom: 80 } },
					_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
					this.state.showCancelPopup ? _react2.default.createElement(
						'section',
						{ className: 'error-msg-pop' },
						_react2.default.createElement('div', { className: 'cancel-overlay' }),
						_react2.default.createElement(
							'div',
							{ className: 'popup-error', style: { width: '300px' } },
							_react2.default.createElement(
								'div',
								{ className: 'error-head' },
								_react2.default.createElement('img', { className: 'errorInfoImg', src: "/assets" + "/img/infoerror.svg" }),
								"Alert"
							),
							_react2.default.createElement(
								'div',
								{ className: 'cross-btn' },
								_react2.default.createElement('img', { src: "/assets" + "/img/icons/close.png", alt: 'close', onClick: this.hideCancelPolicyPopup.bind(this) })
							),
							_react2.default.createElement(
								'p',
								{ className: 'error-msg' },
								'Your policy cannot be cancelled as you have already completed atleast 1 claim under your policy'
							),
							_react2.default.createElement(
								'p',
								{ className: 'error-msg subAlertins' },
								'for any other query you can call us at ',
								_react2.default.createElement(
									'span',
									null,
									'1800-123-9419'
								)
							)
						)
					) : '',
					_react2.default.createElement(
						'section',
						{ className: 'container parent-section book-appointment-section container-top-margin' },
						_react2.default.createElement(
							'div',
							{ className: 'row main-row parent-section-row' },
							_react2.default.createElement(
								'div',
								{ className: 'col-12 col-md-7 col-lg-7' },
								_react2.default.createElement(
									'section',
									{ className: 'profile-book-screen' },
									_react2.default.createElement(
										'div',
										{ className: 'widget' },
										_react2.default.createElement(
											'div',
											{ className: 'widget-content' },
											this.props.get_insured_profile && parsed.show_congo ? _react2.default.createElement(
												'div',
												null,
												_react2.default.createElement(
													'p',
													{ className: 'fw-500 ins-congo-text text-primary text-center mrb-10' },
													'Congratulations !'
												),
												_react2.default.createElement(
													'p',
													{ className: 'fw-500 text-center mrb-10' },
													'Your Group Out-patient Insurance has been issued'
												)
											) : '',
											_react2.default.createElement(
												'div',
												{ className: 'ins-flex mrb-20' },
												_react2.default.createElement('img', { width: '100', src: 'https://qacdn.docprime.com/media/insurer/images/apllogo.png' }),
												_react2.default.createElement(
													'p',
													{ className: 'fw-500' },
													'Group Out-Patient Insurance'
												),
												this.props.get_insured_profile ? _react2.default.createElement(
													'div',
													{ style: { flexGrow: '0', flexShrink: '0' } },
													_react2.default.createElement('img', { width: '30', src: "/assets" + "/img/chk-green.svg", style: { verticalAlign: '-31px' } }),
													_react2.default.createElement(
														'span',
														{ className: 'fw-500', style: { color: '#4fc243', verticalAlign: '-21px' } },
														'Active'
													)
												) : ''
											),
											_react2.default.createElement(
												'div',
												{ style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } },
												_react2.default.createElement(
													'a',
													{ style: { fontWeight: '500', fontSize: '12px', color: '#f78631', textDecoration: 'underline', cursor: 'pointer' }, href: '/insurance/network', onClick: function onClick(e) {
															e.preventDefault();
															var data = {
																'Category': 'ConsumerApp', 'Action': 'InsuranceNetworkCertificate', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'insurance-network-certificate', 'click_value': 'insurance-network-certificate'
															};
															_gtm2.default.sendEvent({ data: data });
															_this2.props.history.push('/insurance/network');
														} },
													'View Network'
												)
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'ins-flex justify-content-between ins-date-row mrb-0' },
											_react2.default.createElement(
												'div',
												{ className: 'ins-date text-center' },
												_react2.default.createElement(
													'p',
													{ className: 'fw-500 mrb-5' },
													'Policy issue Date'
												),
												_react2.default.createElement(
													'p',
													{ className: 'fw-700' },
													this.getGetOrdinal(purchaseDate[2]) + ' ' + purchaseDate[1] + ' ' + purchaseDate[3]
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'ins-date text-center' },
												_react2.default.createElement(
													'p',
													{ className: 'fw-500 mrb-5' },
													'Policy expiry Date'
												),
												_react2.default.createElement(
													'p',
													{ className: 'fw-700' },
													this.getGetOrdinal(expiryDate[2]) + ' ' + expiryDate[1] + ' ' + expiryDate[3]
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'ins-date text-center' },
												_react2.default.createElement(
													'p',
													{ className: 'fw-500 mrb-5' },
													'Policy Number'
												),
												_react2.default.createElement(
													'p',
													{ className: 'fw-700' },
													this.props.get_insured_profile.policy_number
												)
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'widget-content ins-bg-grey' },
											_react2.default.createElement(
												'div',
												{ className: 'container ins-details-container' },
												_react2.default.createElement(
													'div',
													{ className: 'row ins-details-row no-gutters' },
													_react2.default.createElement(
														'div',
														{ className: 'col-6 ins-details-div' },
														_react2.default.createElement(
															'p',
															{ className: 'ins-gr-text fw-500' },
															'Annual Premium Paid:'
														)
													),
													_react2.default.createElement(
														'div',
														{ className: 'col-6 ins-details-div' },
														_react2.default.createElement(
															'p',
															{ className: 'ins-bl-text fw-500' },
															'\u20B9 ',
															this.props.get_insured_profile.premium_amount
														)
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'row ins-details-row no-gutters' },
													_react2.default.createElement(
														'div',
														{ className: 'col-6 ins-details-div' },
														_react2.default.createElement(
															'p',
															{ className: 'ins-gr-text fw-500' },
															'Proposer Name:'
														)
													),
													_react2.default.createElement(
														'div',
														{ className: 'col-6 ins-details-div' },
														_react2.default.createElement(
															'p',
															{ className: 'ins-bl-text fw-500', style: { 'textTransform': 'capitalize' } },
															this.props.get_insured_profile.proposer_name[0].first_name,
															' ',
															this.props.get_insured_profile.proposer_name[0].middle_name,
															' ',
															this.props.get_insured_profile.proposer_name[0].last_name
														)
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'row ins-details-row no-gutters' },
													_react2.default.createElement(
														'div',
														{ className: 'col-6 ins-details-div' },
														_react2.default.createElement(
															'p',
															{ className: 'ins-gr-text fw-500' },
															'Covered Members:'
														)
													),
													_react2.default.createElement(
														'div',
														{ className: 'col-6 ins-details-div' },
														primaryMember && primaryMember.length > 0 ? _react2.default.createElement(
															'p',
															{ key: 0, style: { 'textTransform': 'capitalize' }, className: 'ins-bl-text fw-500' },
															_react2.default.createElement(
																'span',
																{ className: 'fw-400' },
																primaryMember[0].relation,
																' : - '
															),
															primaryMember[0].first_name,
															' ',
															primaryMember[0].middle_name,
															' ',
															primaryMember[0].last_name
														) : '',
														Object.entries(FamilyMembers).map(function (_ref) {
															var _ref2 = _slicedToArray(_ref, 2),
															    key = _ref2[0],
															    value = _ref2[1];

															return _react2.default.createElement(
																'p',
																{ key: key, style: { 'textTransform': 'capitalize' }, className: 'ins-bl-text fw-500' },
																_react2.default.createElement(
																	'span',
																	{ className: 'fw-400' },
																	value.relation,
																	' : - '
																),
																value.first_name,
																' ',
																value.middle_name,
																' ',
																value.last_name
															);
														})
													)
												)
											)
										)
									),
									this.props.get_insured_profile && this.props.get_insured_profile.is_endorsement_allowed ? _react2.default.createElement(
										'a',
										{ className: 'ins-open-endrs', onClick: this.goToEndorsement.bind(this) },
										'click here to update insured members details',
										_react2.default.createElement('img', { className: 'ins-rgt-endrs', src: "/assets" + "/img/right-sc.svg" }),
										' '
									) : '',
									this.props.avail_now_data && Object.keys(this.props.avail_now_data).length > 0 ? _react2.default.createElement(
										'div',
										{ className: 'widget mrb-15 mrng-top-12', onClick: this.goToBooking.bind(this), style: { cursor: 'pointer' } },
										_react2.default.createElement(
											'div',
											{ className: 'widget-header dr-qucik-info' },
											_react2.default.createElement(
												'div',
												{ style: { cursor: 'pointer' } },
												_react2.default.createElement(
													_initialsPicture2.default,
													{ name: this.props.avail_now_data.name, has_image: !!this.props.avail_now_data.thumbnail, className: 'initialsPicture-dp docCardIntPic' },
													_react2.default.createElement('img', { src: this.props.avail_now_data.thumbnail, style: { width: '60px', height: '60px' }, className: 'img-fluid img-round' })
												)
											),
											_react2.default.createElement(
												'div',
												{ className: 'dr-profile d-flex align-items-center justify-content-between' },
												_react2.default.createElement(
													'div',
													null,
													_react2.default.createElement(
														'h1',
														{ className: 'dr-name' },
														this.props.avail_now_data.name,
														_react2.default.createElement('span', { className: 'nwDocViewPrf' })
													),
													_react2.default.createElement(
														'p',
														{ className: 'upd-colr' },
														'Continue Booking '
													)
												),
												_react2.default.createElement(
													'div',
													{ className: 'doc-insu-prfl-img' },
													_react2.default.createElement('img', { src: "/assets" + '/img/right-sc.svg' })
												)
											)
										)
									) : '',
									this.props.get_insured_profile && this.props.get_insured_profile.is_endorsement_exist ? _react2.default.createElement(
										'a',
										{ className: 'ins-open-endrs', style: { filter: 'grayscale(100%)' }, onClick: function onClick() {
												return _nodeSnackbar2.default.show({ pos: 'bottom-center', text: 'Your last requested changes are in process. Therefore, we cannot take request for any new changes.' });
											} },
										'click here to update insured members details',
										_react2.default.createElement('img', { className: 'ins-rgt-endrs', src: "/assets" + "/img/right-sc.svg" }),
										' '
									) : ''
								),
								this.props.get_insured_profile && (this.props.get_insured_profile.insurance_status == 1 || this.props.get_insured_profile.insurance_status == 4 || this.props.get_insured_profile.insurance_status == 7) ? _react2.default.createElement(
									'div',
									{ className: 'sticky-btn fixed insuBtnsContainer' },
									_react2.default.createElement(
										'button',
										{ className: 'insu-left-white-btn', onClick: this.cancelPolicy.bind(this), style: { color: this.props.get_insured_profile.is_cancel_allowed ? '#f78631' : '#757575' } },
										'Cancel Policy'
									),
									_react2.default.createElement(
										'a',
										{ className: 'insu-right-orng-btn foot-btn-Anchr', href: this.props.get_insured_profile.coi_url, download: true, target: '_blank' },
										'Download Certificate of Insurance ',
										_react2.default.createElement(
											'span',
											{ className: 'foot-btn-sub-span' },
											'(Policy Document)'
										)
									)
								) : ''
							),
							_react2.default.createElement(_ChatPanel2.default, null)
						)
					)
				);
			} else {
				return _react2.default.createElement(
					'div',
					{ className: 'profile-body-wrap', style: { paddingBottom: 80 } },
					_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
					_react2.default.createElement(_Loader2.default, null)
				);
			}
		}
	}]);

	return InsuranceCertificateView;
}(_react2.default.Component);

exports.default = InsuranceCertificateView;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceCertificate.js":
/*!*************************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceCertificate.js ***!
  \*************************************************************/
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

var _insuranceCertificate = __webpack_require__(/*! ../../components/insurance/insuranceCertificate.js */ "./dev/js/components/insurance/insuranceCertificate.js");

var _insuranceCertificate2 = _interopRequireDefault(_insuranceCertificate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceCertificate = function (_React$Component) {
    _inherits(InsuranceCertificate, _React$Component);

    function InsuranceCertificate(props) {
        _classCallCheck(this, InsuranceCertificate);

        var _this = _possibleConstructorReturn(this, (InsuranceCertificate.__proto__ || Object.getPrototypeOf(InsuranceCertificate)).call(this, props));

        _this.state = {
            showBtn: false
        };
        return _this;
    }

    _createClass(InsuranceCertificate, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getInsuredProfile(); // to get insured members data and certification details
            // this.props.getInsuredProfile((resp)=>{
            //     if(resp && resp.coi_url !=''){
            //         this.setState({showBtn:false})
            //     }else{
            //         setTimeout(() => {
            //             this.props.getInsuredProfile()
            //         }, 500)
            //     }
            // } )      
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_insuranceCertificate2.default, _extends({}, this.props, { showBtn: this.state.showBtn }));
        }
    }]);

    return InsuranceCertificate;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$INSURANCE = state.INSURANCE,
        insurnaceData = _state$INSURANCE.insurnaceData,
        LOAD_INSURANCE = _state$INSURANCE.LOAD_INSURANCE,
        selected_plan = _state$INSURANCE.selected_plan,
        self_data_values = _state$INSURANCE.self_data_values,
        insured_member_list = _state$INSURANCE.insured_member_list,
        get_insured_profile = _state$INSURANCE.get_insured_profile,
        avail_now_data = _state$INSURANCE.avail_now_data;

    return {
        insurnaceData: insurnaceData, LOAD_INSURANCE: LOAD_INSURANCE, selected_plan: selected_plan, USER: USER, self_data_values: self_data_values, insured_member_list: insured_member_list, get_insured_profile: get_insured_profile, avail_now_data: avail_now_data
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {

        getInsuredProfile: function getInsuredProfile(cb) {
            return dispatch((0, _index.getInsuredProfile)(cb));
        },
        clearInsurance: function clearInsurance() {
            return dispatch((0, _index.clearInsurance)());
        },
        clearAvailNowInsurance: function clearAvailNowInsurance() {
            return dispatch((0, _index.clearAvailNowInsurance)());
        }

    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceCertificate);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZUNlcnRpZmljYXRlLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2luc3VyYW5jZS9JbnN1cmFuY2VDZXJ0aWZpY2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTG9hZGVyIiwicHJvcHMiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiSW5zdXJhbmNlQ2VydGlmaWNhdGVWaWV3Iiwic3RhdGUiLCJzaG93Q2FuY2VsUG9wdXAiLCJuIiwicyIsInYiLCJnZXRfaW5zdXJlZF9wcm9maWxlIiwiaXNfY2FuY2VsX2FsbG93ZWQiLCJoaXN0b3J5IiwicHVzaCIsInNldFN0YXRlIiwiY2xlYXJJbnN1cmFuY2UiLCJkYXRhIiwiYXZhaWxfbm93X2RhdGEiLCJjbGVhckF2YWlsTm93SW5zdXJhbmNlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInR5cGUiLCJpZCIsInNlbGVjdGVkQ2xpbmljIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInByaW1hcnlNZW1iZXIiLCJGYW1pbHlNZW1iZXJzIiwiaW5zdXJlZF9tZW1iZXJzIiwiZmlsdGVyIiwieCIsInJlbGF0aW9uIiwicHVyY2hhc2VfZGF0ZSIsIkRhdGUiLCJwdXJjaGFzZV90aW1lIiwidG9UaW1lU3RyaW5nIiwicHVyY2hhc2VUaW1lIiwic3BsaXQiLCJ0b0RhdGVTdHJpbmciLCJwdXJjaGFzZURhdGUiLCJleHBpcnlfZGF0ZSIsImV4cGlyeV90aW1lIiwiZXhwaXJ5VGltZSIsImV4cGlyeURhdGUiLCJwYWRkaW5nQm90dG9tIiwid2lkdGgiLCJBU1NFVFNfQkFTRV9VUkwiLCJoaWRlQ2FuY2VsUG9saWN5UG9wdXAiLCJiaW5kIiwic2hvd19jb25nbyIsImZsZXhHcm93IiwiZmxleFNocmluayIsInZlcnRpY2FsQWxpZ24iLCJjb2xvciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsImN1cnNvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsImdldEdldE9yZGluYWwiLCJwb2xpY3lfbnVtYmVyIiwicHJlbWl1bV9hbW91bnQiLCJwcm9wb3Nlcl9uYW1lIiwiZmlyc3RfbmFtZSIsIm1pZGRsZV9uYW1lIiwibGFzdF9uYW1lIiwiZW50cmllcyIsIm1hcCIsImtleSIsInZhbHVlIiwiaXNfZW5kb3JzZW1lbnRfYWxsb3dlZCIsImdvVG9FbmRvcnNlbWVudCIsImdvVG9Cb29raW5nIiwibmFtZSIsInRodW1ibmFpbCIsImhlaWdodCIsImlzX2VuZG9yc2VtZW50X2V4aXN0IiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImluc3VyYW5jZV9zdGF0dXMiLCJjYW5jZWxQb2xpY3kiLCJjb2lfdXJsIiwiSW5zdXJhbmNlQ2VydGlmaWNhdGUiLCJzaG93QnRuIiwiZ2V0SW5zdXJlZFByb2ZpbGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJVU0VSIiwiSU5TVVJBTkNFIiwiaW5zdXJuYWNlRGF0YSIsIkxPQURfSU5TVVJBTkNFIiwic2VsZWN0ZWRfcGxhbiIsInNlbGZfZGF0YV92YWx1ZXMiLCJpbnN1cmVkX21lbWJlcl9saXN0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlz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bUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Y7QUFDVjtBQUNGO0FBQ007QUFDRjtBQUNKO0FBQ0Y7QUFDSTtBQUNGO0FBQ2M7QUFDRjtBQUNWO0FBQ0Y7QUFDYztBQUNGO0FBQ0o7QUFDRjtBQUNJIiwiZmlsZSI6IjkzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ2hhdFBhbmVsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9DaGF0UGFuZWwnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIEluc3VyYW5jZUNlcnRpZmljYXRlVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dDYW5jZWxQb3B1cDogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRnZXRHZXRPcmRpbmFsKG4pIHtcblx0XHR2YXIgcyA9IFtcInRoXCIsIFwic3RcIiwgXCJuZFwiLCBcInJkXCJdLFxuXHRcdFx0diA9IG4gJSAxMDA7XG5cdFx0cmV0dXJuIG4gKyAoc1sodiAtIDIwKSAlIDEwXSB8fCBzW3ZdIHx8IHNbMF0pO1xuXHR9XG5cblx0Y2FuY2VsUG9saWN5KCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUgJiYgdGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLmlzX2NhbmNlbF9hbGxvd2VkKSB7XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9jYW5jZWxwb2xpY3knKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd0NhbmNlbFBvcHVwOiB0cnVlIH0pXG5cdFx0fVxuXHR9XG5cblx0aGlkZUNhbmNlbFBvbGljeVBvcHVwKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93Q2FuY2VsUG9wdXA6IGZhbHNlIH0pXG5cdH1cblxuXHRnb1RvRW5kb3JzZW1lbnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5jbGVhckluc3VyYW5jZSgpICAvLyB0byByZXNldCBpbnN1cmFuY2UgZGF0YSBpbiBzdG9yZVxuXHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS1lbmRvcnNlbWVudC1kZXRhaWxzJylcblx0fVxuXG5cdGdvVG9Cb29raW5nKCkge1xuXHRcdGxldCBkYXRhID0gdGhpcy5wcm9wcy5hdmFpbF9ub3dfZGF0YVxuXHRcdHRoaXMucHJvcHMuY2xlYXJBdmFpbE5vd0luc3VyYW5jZSgpIC8vIHRvIGNsZWFyIGF2YWlsIG5vdyBmcm9tIHN0b3JlXG5cdFx0aWYgKGRhdGEgJiYgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKGRhdGEudHlwZSA9PSAnbGFiJykge1xuXHRcdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke2RhdGEuaWR9L2Jvb2tgKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7ZGF0YS5pZH0vJHtkYXRhLnNlbGVjdGVkQ2xpbmljfS9ib29rZGV0YWlsc2ApXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgcHJpbWFyeU1lbWJlclxuXHRcdFx0bGV0IEZhbWlseU1lbWJlcnNcblx0XHRcdHtcblx0XHRcdFx0cHJpbWFyeU1lbWJlciA9IHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5pbnN1cmVkX21lbWJlcnMuZmlsdGVyKHggPT4geC5yZWxhdGlvbiA9PSAnc2VsZicpXG5cdFx0XHRcdEZhbWlseU1lbWJlcnMgPSB0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUuaW5zdXJlZF9tZW1iZXJzLmZpbHRlcih4ID0+IHgucmVsYXRpb24gIT0gJ3NlbGYnKVxuXG5cdFx0XHR9XG5cdFx0XHR2YXIgcHVyY2hhc2VfZGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5wdXJjaGFzZV9kYXRlKVxuXHRcdFx0bGV0IHB1cmNoYXNlX3RpbWUgPSBwdXJjaGFzZV9kYXRlLnRvVGltZVN0cmluZygpXG5cdFx0XHRsZXQgcHVyY2hhc2VUaW1lID0gcHVyY2hhc2VfdGltZS5zcGxpdChcIiBcIilcblx0XHRcdHB1cmNoYXNlX2RhdGUgPSBwdXJjaGFzZV9kYXRlLnRvRGF0ZVN0cmluZygpXG5cdFx0XHRsZXQgcHVyY2hhc2VEYXRlID0gcHVyY2hhc2VfZGF0ZS5zcGxpdChcIiBcIilcblx0XHRcdGxldCBleHBpcnlfZGF0ZSA9IG5ldyBEYXRlKHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5leHBpcnlfZGF0ZSlcblx0XHRcdGxldCBleHBpcnlfdGltZSA9IGV4cGlyeV9kYXRlLnRvVGltZVN0cmluZygpXG5cdFx0XHRsZXQgZXhwaXJ5VGltZSA9IGV4cGlyeV90aW1lLnNwbGl0KFwiIFwiKVxuXHRcdFx0ZXhwaXJ5X2RhdGUgPSBleHBpcnlfZGF0ZS50b0RhdGVTdHJpbmcoKVxuXHRcdFx0bGV0IGV4cGlyeURhdGUgPSBleHBpcnlfZGF0ZS5zcGxpdChcIiBcIilcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogODAgfX0gPlxuXHRcdFx0XHQ8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfS8+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnNob3dDYW5jZWxQb3B1cCA/XG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiZXJyb3ItbXNnLXBvcFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3B1cC1lcnJvclwiIHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnIH19PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWhlYWRcIj48aW1nIGNsYXNzTmFtZT1cImVycm9ySW5mb0ltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2luZm9lcnJvci5zdmdcIn0gLz57XCJBbGVydFwifTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNyb3NzLWJ0blwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvY2xvc2UucG5nXCJ9IGFsdD1cImNsb3NlXCIgb25DbGljaz17dGhpcy5oaWRlQ2FuY2VsUG9saWN5UG9wdXAuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPllvdXIgcG9saWN5IGNhbm5vdCBiZSBjYW5jZWxsZWQgYXMgeW91IGhhdmUgYWxyZWFkeSBjb21wbGV0ZWQgYXRsZWFzdCAxIGNsYWltIHVuZGVyIHlvdXIgcG9saWN5PC9wPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJlcnJvci1tc2cgc3ViQWxlcnRpbnNcIj5mb3IgYW55IG90aGVyIHF1ZXJ5IHlvdSBjYW4gY2FsbCB1cyBhdCA8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQxODAwLTEyMy05NDE5XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdDogJydcblx0XHRcdFx0fVxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gYm9vay1hcHBvaW50bWVudC1zZWN0aW9uIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctN1wiPlxuXHRcdFx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWJvb2stc2NyZWVuXCI+XG5cdFx0XHRcdFx0XHRcdFx0ey8qPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1tYXJnaW4tYm90dG9tXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjb25nLW1hcmdpbi1idG1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtZmluYWwtc2NyZWVuLWNvbnRpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtY2FyZC1oZWFkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1uYW1lLWhlYWQgY2VydGlmaWNhdGUtd2lkdGhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyB3aWR0aD1cIjE0MFwiIHNyYz17dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLmluc3VyZXJfaW1nfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRPUEQgSW5zdXJhbmNlIGJ5IDxzcGFuPkFwb2xsbyBNdW5pY2g8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaW5zLWFjdGl2ZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPkFjdGl2ZSA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2Noay1ncmVlbi5zdmdcIn0gLz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5Hcm91cCBPdXQtcGF0aWVudCBJbnN1cmFuY2U8c3BhbiBjbGFzc05hbWU9XCJpbnMtYWN0aXZlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPkFjdGl2ZSA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2Noay1ncmVlbi5zdmdcIn0gLz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtcG9saWN5LWRhdGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1mbGV4LWNvbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtcG9saWN5LWRldGFpbHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5Qb2xpY3kgUHVyY2hhc2UgRGF0ZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57YCR7cHVyY2hhc2VEYXRlWzJdfXRoICR7cHVyY2hhc2VEYXRlWzFdfSAke3B1cmNoYXNlRGF0ZVszXX1gfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXBvbGljeS1kZXRhaWxzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+VmFsaWQgVXB0bzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57YCR7ZXhwaXJ5RGF0ZVsyXX10aCAke2V4cGlyeURhdGVbMV19ICR7ZXhwaXJ5RGF0ZVszXX1gfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXBvbGljeS1tZW1iZXJzLWRldGFpbHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PHNwYW4+UHJlbWl1bTwvc3Bhbj4gOiBScyB7dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLnByZW1pdW1fYW1vdW50fTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0+PHNwYW4+UHJvcG9zZXIgTmFtZSA8L3NwYW4+IDoge3RoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5wcm9wb3Nlcl9uYW1lWzBdLmZpcnN0X25hbWV9IHt0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUucHJvcG9zZXJfbmFtZVswXS5taWRkbGVfbmFtZX0ge3RoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5wcm9wb3Nlcl9uYW1lWzBdLmxhc3RfbmFtZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPjxzcGFuPlBvbGljeSBOdW1iZXI8L3NwYW4+IDoge3RoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5wb2xpY3lfbnVtYmVyfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+PHNwYW4+Q292ZXI8L3NwYW4+IDoge3RoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5pbnN1cmVkX21lbWJlcnMubGVuZ3RofSB7dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLmluc3VyZWRfbWVtYmVycy5sZW5ndGggPT0gMSA/ICdNZW1iZXInIDogJ01lbWJlcnMnfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsPntPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUuaW5zdXJlZF9tZW1iZXJzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8bGkga2V5PXtrZXl9IHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaW5zYS10YmwtbmFtZXNcIj4ge3ZhbHVlLnJlbGF0aW9ufSA6IDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImluc2Etc3ViLXRibC1uYW1lc1wiPiB7dmFsdWUuZmlyc3RfbmFtZX0ge3ZhbHVlLm1pZGRsZV9uYW1lfSB7dmFsdWUubGFzdF9uYW1lfSA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgdGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L3NlY3Rpb24+Ki99XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZSAmJiBwYXJzZWQuc2hvd19jb25nbyA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBpbnMtY29uZ28tdGV4dCB0ZXh0LXByaW1hcnkgdGV4dC1jZW50ZXIgbXJiLTEwXCI+Q29uZ3JhdHVsYXRpb25zICE8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jZW50ZXIgbXJiLTEwXCI+WW91ciBHcm91cCBPdXQtcGF0aWVudCBJbnN1cmFuY2UgaGFzIGJlZW4gaXNzdWVkPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZsZXggbXJiLTIwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyB3aWR0aD1cIjEwMFwiIHNyYz1cImh0dHBzOi8vcWFjZG4uZG9jcHJpbWUuY29tL21lZGlhL2luc3VyZXIvaW1hZ2VzL2FwbGxvZ28ucG5nXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5PUEQgSW5zdXJhbmNlIDxiciAvPmJ5IDxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMFwiPkFwb2xsbyBNdW5pY2g8L3NwYW4+PC9wPiovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkdyb3VwIE91dC1QYXRpZW50IEluc3VyYW5jZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZmxleEdyb3c6ICcwJywgZmxleFNocmluazogJzAnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHdpZHRoPVwiMzBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jaGstZ3JlZW4uc3ZnXCJ9IHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICctMzFweCcgfX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6ICcjNGZjMjQzJywgdmVydGljYWxBbGlnbjogJy0yMXB4JyB9fSA+QWN0aXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qdGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlICYmIHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5pbnN1cmFuY2Vfc3RhdHVzID09IDQ/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1jZW50ZXIgbXJiLTEwXCI+WW91ciBpbnN1cmFuY2UgcG9saWN5IGlzIG9uaG9sZDwvcD5cdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OnRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZSAmJiB0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUuaW5zdXJhbmNlX3N0YXR1cyA9PSA1P1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2VudGVyIG1yYi0xMFwiPllvdXIgY2FuY2VsbGF0aW9uIHJlcXVlc3QgaGFzIGJlZW4gaW5pdGlhdGVkPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwiaW5zLWZsZXggbXJiLTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3BkZi5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtci0wXCI+UGxlYXNlIGZpbmQgYXR0YWNoZWQgdGhlIGNlcnRpZmljYXRlIG9mIGluc3VyYW5jZSBmb3IgdGhlIGlzc3VlZCBwb2xpY3k8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc1MDAnLCBmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyNmNzg2MzEnLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsIGN1cnNvcjogJ3BvaW50ZXInIH19IGhyZWY9Jy9pbnN1cmFuY2UvbmV0d29yaycgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSW5zdXJhbmNlTmV0d29ya0NlcnRpZmljYXRlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdpbnN1cmFuY2UtbmV0d29yay1jZXJ0aWZpY2F0ZScsICdjbGlja192YWx1ZSc6ICdpbnN1cmFuY2UtbmV0d29yay1jZXJ0aWZpY2F0ZSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL25ldHdvcmsnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlZpZXcgTmV0d29yazwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gaW5zLWRhdGUtcm93IG1yYi0wXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWRhdGUgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTVcIj5Qb2xpY3kgaXNzdWUgRGF0ZTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy03MDBcIj57YCR7dGhpcy5nZXRHZXRPcmRpbmFsKHB1cmNoYXNlRGF0ZVsyXSl9ICR7cHVyY2hhc2VEYXRlWzFdfSAke3B1cmNoYXNlRGF0ZVszXX1gfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWRhdGUgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJiLTVcIj5Qb2xpY3kgZXhwaXJ5IERhdGU8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNzAwXCI+e2Ake3RoaXMuZ2V0R2V0T3JkaW5hbChleHBpcnlEYXRlWzJdKX0gJHtleHBpcnlEYXRlWzFdfSAke2V4cGlyeURhdGVbM119YH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy1kYXRlIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIG1yYi01XCI+UG9saWN5IE51bWJlcjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy03MDBcIj57dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLnBvbGljeV9udW1iZXJ9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBpbnMtYmctZ3JleVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBpbnMtZGV0YWlscy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBpbnMtZGV0YWlscy1yb3cgbm8tZ3V0dGVyc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNiBpbnMtZGV0YWlscy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW5zLWdyLXRleHQgZnctNTAwXCI+QW5udWFsIFByZW1pdW0gUGFpZDo8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgaW5zLWRldGFpbHMtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlucy1ibC10ZXh0IGZ3LTUwMFwiPiYjODM3Nzsge3RoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5wcmVtaXVtX2Ftb3VudH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBpbnMtZGV0YWlscy1yb3cgbm8tZ3V0dGVyc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNiBpbnMtZGV0YWlscy1kaXZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW5zLWdyLXRleHQgZnctNTAwXCI+UHJvcG9zZXIgTmFtZTo8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgaW5zLWRldGFpbHMtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlucy1ibC10ZXh0IGZ3LTUwMFwiIHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19Pnt0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUucHJvcG9zZXJfbmFtZVswXS5maXJzdF9uYW1lfSB7dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLnByb3Bvc2VyX25hbWVbMF0ubWlkZGxlX25hbWV9IHt0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUucHJvcG9zZXJfbmFtZVswXS5sYXN0X25hbWV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgaW5zLWRldGFpbHMtcm93IG5vLWd1dHRlcnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgaW5zLWRldGFpbHMtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlucy1nci10ZXh0IGZ3LTUwMFwiPkNvdmVyZWQgTWVtYmVyczo8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgaW5zLWRldGFpbHMtZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcmltYXJ5TWVtYmVyICYmIHByaW1hcnlNZW1iZXIubGVuZ3RoID4gMCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBrZXk9ezB9IHN0eWxlPXt7ICd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnIH19IGNsYXNzTmFtZT1cImlucy1ibC10ZXh0IGZ3LTUwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy00MDBcIj57cHJpbWFyeU1lbWJlclswXS5yZWxhdGlvbn0gOiAtIDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3ByaW1hcnlNZW1iZXJbMF0uZmlyc3RfbmFtZX0ge3ByaW1hcnlNZW1iZXJbMF0ubWlkZGxlX25hbWV9IHtwcmltYXJ5TWVtYmVyWzBdLmxhc3RfbmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3QuZW50cmllcyhGYW1pbHlNZW1iZXJzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8cCBrZXk9e2tleX0gc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0gY2xhc3NOYW1lPVwiaW5zLWJsLXRleHQgZnctNTAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmdy00MDBcIj57dmFsdWUucmVsYXRpb259IDogLSA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dmFsdWUuZmlyc3RfbmFtZX0ge3ZhbHVlLm1pZGRsZV9uYW1lfSB7dmFsdWUubGFzdF9uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUgJiYgdGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLmlzX2VuZG9yc2VtZW50X2FsbG93ZWQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJpbnMtb3Blbi1lbmRyc1wiIG9uQ2xpY2s9e3RoaXMuZ29Ub0VuZG9yc2VtZW50LmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrIGhlcmUgdG8gdXBkYXRlIGluc3VyZWQgbWVtYmVycyBkZXRhaWxzXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImlucy1yZ3QtZW5kcnNcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yaWdodC1zYy5zdmdcIn0gLz4gPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuYXZhaWxfbm93X2RhdGEgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5hdmFpbF9ub3dfZGF0YSkubGVuZ3RoID4gMCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtcm5nLXRvcC0xMlwiIG9uQ2xpY2s9e3RoaXMuZ29Ub0Jvb2tpbmcuYmluZCh0aGlzKX0gc3R5bGU9e3tjdXJzb3I6J3BvaW50ZXInfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIGRyLXF1Y2lrLWluZm9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbml0aWFsc1BpY3R1cmUgbmFtZT17dGhpcy5wcm9wcy5hdmFpbF9ub3dfZGF0YS5uYW1lfSBoYXNfaW1hZ2U9eyEhdGhpcy5wcm9wcy5hdmFpbF9ub3dfZGF0YS50aHVtYm5haWx9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1kcCBkb2NDYXJkSW50UGljXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3RoaXMucHJvcHMuYXZhaWxfbm93X2RhdGEudGh1bWJuYWlsfSBzdHlsZT17eyB3aWR0aDogJzYwcHgnLCBoZWlnaHQ6ICc2MHB4JyB9fSBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nLXJvdW5kXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Jbml0aWFsc1BpY3R1cmU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHItcHJvZmlsZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImRyLW5hbWVcIj57dGhpcy5wcm9wcy5hdmFpbF9ub3dfZGF0YS5uYW1lfTxzcGFuIGNsYXNzTmFtZT1cIm53RG9jVmlld1ByZlwiPjwvc3Bhbj48L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInVwZC1jb2xyXCI+Q29udGludWUgQm9va2luZyA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvYy1pbnN1LXByZmwtaW1nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3JpZ2h0LXNjLnN2Zyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZSAmJiB0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUuaXNfZW5kb3JzZW1lbnRfZXhpc3QgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJpbnMtb3Blbi1lbmRyc1wiIHN0eWxlPXt7IGZpbHRlcjogJ2dyYXlzY2FsZSgxMDAlKScgfX0gb25DbGljaz17KCkgPT4gU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiAnWW91ciBsYXN0IHJlcXVlc3RlZCBjaGFuZ2VzIGFyZSBpbiBwcm9jZXNzLiBUaGVyZWZvcmUsIHdlIGNhbm5vdCB0YWtlIHJlcXVlc3QgZm9yIGFueSBuZXcgY2hhbmdlcy4nIH0pfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGljayBoZXJlIHRvIHVwZGF0ZSBpbnN1cmVkIG1lbWJlcnMgZGV0YWlsc1xuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJpbnMtcmd0LWVuZHJzXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmlnaHQtc2Muc3ZnXCJ9IC8+IDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlICYmICh0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUuaW5zdXJhbmNlX3N0YXR1cyA9PSAxIHx8IHRoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5pbnN1cmFuY2Vfc3RhdHVzID09IDQgfHwgdGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLmluc3VyYW5jZV9zdGF0dXMgPT0gNykgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGlja3ktYnRuIGZpeGVkIGluc3VCdG5zQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaW5zdS1sZWZ0LXdoaXRlLWJ0blwiIG9uQ2xpY2s9e3RoaXMuY2FuY2VsUG9saWN5LmJpbmQodGhpcyl9IHN0eWxlPXt7IGNvbG9yOiB0aGlzLnByb3BzLmdldF9pbnN1cmVkX3Byb2ZpbGUuaXNfY2FuY2VsX2FsbG93ZWQgPyAnI2Y3ODYzMScgOiAnIzc1NzU3NScgfX0+Q2FuY2VsIFBvbGljeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiaW5zdS1yaWdodC1vcm5nLWJ0biBmb290LWJ0bi1BbmNoclwiIGhyZWY9e3RoaXMucHJvcHMuZ2V0X2luc3VyZWRfcHJvZmlsZS5jb2lfdXJsfSBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5Eb3dubG9hZCBDZXJ0aWZpY2F0ZSBvZiBJbnN1cmFuY2UgPHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj4oUG9saWN5IERvY3VtZW50KTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICcnfVxuXHRcdFx0XHRcdFx0XHR7Lyo8YSBvbkNsaWNrPXt0aGlzLmNhbmNlbFBvbGljeS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdGNhbmNlbCBwb2xpY3lcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtcInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGlja3ktYnRuIHRleHQtY2VudGVyXCIgKyh0aGlzLnByb3BzLnNob3dCdG4/J2lucy1uby1kb3dubG9hZCc6JycpfSBzdHlsZT17eyBjb2xvcjogXCIjZmZmZmZmXCIgfX0gaHJlZj17dGhpcy5wcm9wcy5nZXRfaW5zdXJlZF9wcm9maWxlLmNvaV91cmx9IGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0RG93bmxvYWQgQ2VydGlmaWNhdGUgb2YgSW5zdXJhbmNlPHNwYW4gY2xhc3NOYW1lPVwiZm9vdC1idG4tc3ViLXNwYW5cIj4oUG9saWN5IERvY3VtZW50KTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPiovfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8Q2hhdFBhbmVsIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvZGl2PlxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDgwIH19ID5cblx0XHRcdFx0PFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPlxuXHRcdFx0XHQ8TG9hZGVyIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHR9XG5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VDZXJ0aWZpY2F0ZVZpZXcgICAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgZ2V0SW5zdXJlZFByb2ZpbGUsIGNsZWFySW5zdXJhbmNlLCBjbGVhckF2YWlsTm93SW5zdXJhbmNlfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IEluc3VyYW5jZUNlcnRpZmljYXRlVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2luc3VyYW5jZS9pbnN1cmFuY2VDZXJ0aWZpY2F0ZS5qcydcblxuY2xhc3MgSW5zdXJhbmNlQ2VydGlmaWNhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dCdG46ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0SW5zdXJlZFByb2ZpbGUoKSAvLyB0byBnZXQgaW5zdXJlZCBtZW1iZXJzIGRhdGEgYW5kIGNlcnRpZmljYXRpb24gZGV0YWlsc1xuICAgICAgICAvLyB0aGlzLnByb3BzLmdldEluc3VyZWRQcm9maWxlKChyZXNwKT0+e1xuICAgICAgICAvLyAgICAgaWYocmVzcCAmJiByZXNwLmNvaV91cmwgIT0nJyl7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0J0bjpmYWxzZX0pXG4gICAgICAgIC8vICAgICB9ZWxzZXtcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRJbnN1cmVkUHJvZmlsZSgpXG4gICAgICAgIC8vICAgICAgICAgfSwgNTAwKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9ICkgICAgICBcbiAgICB9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxJbnN1cmFuY2VDZXJ0aWZpY2F0ZVZpZXcgey4uLnRoaXMucHJvcHN9IHNob3dCdG49e3RoaXMuc3RhdGUuc2hvd0J0bn0vPlxuXHRcdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgaW5zdXJuYWNlRGF0YSwgTE9BRF9JTlNVUkFOQ0UsIHNlbGVjdGVkX3BsYW4sc2VsZl9kYXRhX3ZhbHVlcyxpbnN1cmVkX21lbWJlcl9saXN0LGdldF9pbnN1cmVkX3Byb2ZpbGUsIGF2YWlsX25vd19kYXRhfSA9IHN0YXRlLklOU1VSQU5DRVxuICAgIHJldHVybiB7XG4gICAgICAgIGluc3VybmFjZURhdGEsTE9BRF9JTlNVUkFOQ0Usc2VsZWN0ZWRfcGxhbixVU0VSLHNlbGZfZGF0YV92YWx1ZXMsaW5zdXJlZF9tZW1iZXJfbGlzdCxnZXRfaW5zdXJlZF9wcm9maWxlLCBhdmFpbF9ub3dfZGF0YVxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcblxuICAgICAgICBnZXRJbnN1cmVkUHJvZmlsZSA6KGNiKSA9PiBkaXNwYXRjaChnZXRJbnN1cmVkUHJvZmlsZShjYikpLFxuICAgICAgICBjbGVhckluc3VyYW5jZTooKT0+ZGlzcGF0Y2goY2xlYXJJbnN1cmFuY2UoKSksXG4gICAgICAgIGNsZWFyQXZhaWxOb3dJbnN1cmFuY2U6KCk9PmRpc3BhdGNoKGNsZWFyQXZhaWxOb3dJbnN1cmFuY2UoKSlcbiAgICAgICAgXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMgLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluc3VyYW5jZUNlcnRpZmljYXRlKSIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9