(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WhatsAppOptinView = function (_React$Component) {
    _inherits(WhatsAppOptinView, _React$Component);

    function WhatsAppOptinView(props) {
        _classCallCheck(this, WhatsAppOptinView);

        var _this = _possibleConstructorReturn(this, (WhatsAppOptinView.__proto__ || Object.getPrototypeOf(WhatsAppOptinView)).call(this, props));

        _this.state = {
            whatsapp_optin_View: true
        };
        return _this;
    }

    _createClass(WhatsAppOptinView, [{
        key: 'shouldRender',
        value: function shouldRender() {
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
    }, {
        key: 'toggleWhatsap',
        value: function toggleWhatsap(status, e) {
            var _this2 = this;

            if (this.props.isAppointment) {
                var profileData = _extends({}, this.props.profiles);
                if (status) {
                    profileData.whatsapp_optin = true;
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "You whatsApp notifications has been enabled." });
                } else {
                    profileData.whatsapp_is_declined = true;
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "your whatsApp notifications has been disabled." });
                }
                this.props.editUserProfile(profileData, profileData.id, function () {
                    document.getElementsByClassName('whatsappCardContainer')[0].classList.add('d-none');
                });
            } else {
                this.setState({ whatsapp_optin_View: status }, function () {
                    var data = {
                        'Category': 'ConsumerApp', 'Action': 'Whatsaptoggled', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Whatsap-toggled'
                    };
                    _gtm2.default.sendEvent({ data: data });
                    _this2.props.toggleWhatsap(status);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

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
    }]);

    return WhatsAppOptinView;
}(_react2.default.Component);

exports.default = WhatsAppOptinView;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js":
/*!********************************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookingConfirmationPopup = function (_React$Component) {
	_inherits(BookingConfirmationPopup, _React$Component);

	function BookingConfirmationPopup(props) {
		_classCallCheck(this, BookingConfirmationPopup);

		var _this = _possibleConstructorReturn(this, (BookingConfirmationPopup.__proto__ || Object.getPrototypeOf(BookingConfirmationPopup)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(BookingConfirmationPopup, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'search-el-popup-overlay' },
				_react2.default.createElement(
					'div',
					{ className: 'search-el-popup vip-srch-pop-min' },
					_react2.default.createElement(
						'div',
						{ className: 'widget' },
						_react2.default.createElement(
							'div',
							{ className: 'widget-content padiing-srch-el' },
							_react2.default.createElement(
								_react2.default.Fragment,
								null,
								_react2.default.createElement(
									'p',
									{ className: 'srch-el-conent' },
									this.props.is_gold ? 'Confirm delete member?' : 'Do you wish to continue?'
								),
								_react2.default.createElement(
									'div',
									{ className: 'search-el-btn-container' },
									_react2.default.createElement(
										'button',
										{ onClick: this.props.priceConfirmationPopup.bind(this, true) },
										'Yes'
									),
									_react2.default.createElement(
										'button',
										{ onClick: this.props.priceConfirmationPopup.bind(this, false) },
										'No'
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return BookingConfirmationPopup;
}(_react2.default.Component);

exports.default = BookingConfirmationPopup;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/lensfitPopup.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/lensfitPopup.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookingConfirmationPopup = function (_React$Component) {
	_inherits(BookingConfirmationPopup, _React$Component);

	function BookingConfirmationPopup(props) {
		_classCallCheck(this, BookingConfirmationPopup);

		var _this = _possibleConstructorReturn(this, (BookingConfirmationPopup.__proto__ || Object.getPrototypeOf(BookingConfirmationPopup)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(BookingConfirmationPopup, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var pathName = this.props.location.pathname;
			var searchParam = this.props.location.search;
			var callBackUrl = pathName + searchParam;
			return _react2.default.createElement(
				'div',
				{ className: 'search-el-popup-overlay' },
				_react2.default.createElement(
					'div',
					{ className: 'search-el-popup' },
					_react2.default.createElement(
						'div',
						{ className: 'widget' },
						_react2.default.createElement(
							'div',
							{ className: 'lnst-fit-pop-bg' },
							_react2.default.createElement(
								'p',
								null,
								'Get a Free Eyewear with ',
								_react2.default.createElement('br', null),
								'this appointment'
							),
							_react2.default.createElement(
								'div',
								{ className: 'by-lansfit' },
								_react2.default.createElement(
									'span',
									null,
									'by'
								),
								_react2.default.createElement('img', { className: 'lnsfit-pop-ico', src: "/assets" + "/img/lensico.png" })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'lnst-fit-sub-pop' },
							_react2.default.createElement(
								'p',
								{ className: 'lns-para-mn' },
								'\u201CFREE PAIR OF EYE GLASSES ',
								_react2.default.createElement('br', null),
								'(Frame + Lens) or Sunglasses'
							),
							_react2.default.createElement(
								'p',
								{ className: 'lnsft-cpn' },
								'Use Coupon: LENSFIT'
							),
							_react2.default.createElement(
								'p',
								{ className: 'lns-know', onClick: function onClick(e) {
										e.preventDefault();
										e.stopPropagation();
										var data = {
											'Category': 'ConsumerApp', 'Action': 'LensFitKnowMore', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lensfit-knowmore-clicked'
										};

										_gtm2.default.sendEvent({ data: data });
										_this2.props.history.push('/lensfit-tnc?callbackurl=' + callBackUrl + '&isLensfitSpecific=true');
									} },
								'Know more'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'lnsfit-btn-container' },
							_react2.default.createElement(
								'button',
								{ onClick: this.props.closeLensFitPopup.bind(this) },
								'I Don\u2019t want'
							),
							_react2.default.createElement(
								'button',
								{ onClick: this.props.applyLensFitCoupons.bind(this, this.props.isOPD ? this.props.deal_price : 0, this.props.lensfit_coupons) },
								'Apply LENSFIT'
							)
						)
					)
				)
			);
		}
	}]);

	return BookingConfirmationPopup;
}(_react2.default.Component);

exports.default = BookingConfirmationPopup;

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/VipGoldPackage.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/VipGoldPackage.js ***!
  \****************************************************************/
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

var VipGoldPackagePriceView = function (_React$PureComponent) {
	_inherits(VipGoldPackagePriceView, _React$PureComponent);

	function VipGoldPackagePriceView() {
		_classCallCheck(this, VipGoldPackagePriceView);

		return _possibleConstructorReturn(this, (VipGoldPackagePriceView.__proto__ || Object.getPrototypeOf(VipGoldPackagePriceView)).apply(this, arguments));
	}

	_createClass(VipGoldPackagePriceView, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: "search-el-popup-overlay cancel-overlay-zindex", onClick: function onClick(e) {
						e.preventDefault();
						e.stopPropagation();
						_this2.props.toggleGoldPricePopup();
					} },
				_react2.default.createElement(
					"div",
					{ className: "search-el-popup", onClick: function onClick(e) {
							e.preventDefault();
							e.stopPropagation();
						} },
					_react2.default.createElement(
						"div",
						{ className: "widget p-12" },
						_react2.default.createElement(
							"div",
							{ className: "p-relative" },
							_react2.default.createElement(
								"span",
								{ className: "ipd-pop-ild", onClick: function onClick(e) {
										e.stopPropagation();
										e.preventDefault();
										_this2.props.toggleGoldPricePopup();
									} },
								_react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png" })
							)
						),
						_react2.default.createElement(
							"h4",
							{ className: "gold-pop-hdng" },
							"Select Plan"
						),
						_react2.default.createElement(
							"div",
							{ className: "gold-offer-cont gold-pop-pading" },
							_react2.default.createElement(
								"h4",
								{ className: "gold-ofr-hdng" },
								"LIMITED PERIOD OFFER"
							),
							_react2.default.createElement(
								"div",
								{ className: "gold-list-container" },
								this.props.vipGoldPlans && this.props.vipGoldPlans.length > 0 ? this.props.vipGoldPlans.map(function (value, key) {
									return _react2.default.createElement(
										"div",
										{ key: key, className: "gold-ofr-lising addpdng-popup " + (value.id == (_this2.props.selected_vip_plan && _this2.props.selected_vip_plan.id) ? 'gold-select' : ''), onClick: function onClick() {
												return _this2.props.toggleGoldPlans(value);
											} },
										_react2.default.createElement(
											"div",
											{ className: "gold-mnthplan" },
											_react2.default.createElement(
												"p",
												{ className: "mnth-plan-gld" },
												"Coverage: ",
												value.total_allowed_members,
												" ",
												parseInt(value.total_allowed_members) > 1 ? 'Members' : 'Member'
											),
											_react2.default.createElement(
												"p",
												{ className: "gld-cvr-txt" },
												"Valid for ",
												value.tenure,
												" Months ",
												value.is_selected ? _react2.default.createElement(
													"span",
													null,
													"POPULAR"
												) : ''
											)
										),
										_react2.default.createElement(
											"div",
											{ className: "gold-price" },
											_react2.default.createElement(
												"p",
												{ className: "gld-prc" },
												_react2.default.createElement(
													"span",
													{ className: "gold-prc-cut" },
													"\u20B9",
													value.mrp
												),
												" \u20B9",
												value.deal_price
											),
											_react2.default.createElement(
												"div",
												{ className: "gold-pln-slct-radio" },
												_react2.default.createElement("div", { className: "gd-rdio-gray" }),
												_react2.default.createElement("img", { className: "gd-rdio-chk", src: "/assets" + '/img/vip-chk.svg' })
											)
										)
									);
								}) : ''
							),
							 false ? undefined : ''
						),
						_react2.default.createElement(
							"p",
							{ className: "gol-pop-custom-btn", onClick: this.props.goToGoldPage },
							"View Details"
						)
					)
				)
			);
		}
	}]);

	return VipGoldPackagePriceView;
}(_react2.default.PureComponent);

exports.default = VipGoldPackagePriceView;

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/bookingErrorPopUp.js":
/*!*******************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/bookingErrorPopUp.js ***!
  \*******************************************************************/
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

var BookingError = function (_React$Component) {
    _inherits(BookingError, _React$Component);

    function BookingError() {
        _classCallCheck(this, BookingError);

        return _possibleConstructorReturn(this, (BookingError.__proto__ || Object.getPrototypeOf(BookingError)).apply(this, arguments));
    }

    _createClass(BookingError, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "error-msg-pop" },
                _react2.default.createElement("div", { className: "cancel-overlay" }),
                _react2.default.createElement(
                    "div",
                    { className: "popup-error", style: { width: '300px' } },
                    _react2.default.createElement(
                        "div",
                        { className: "error-head" },
                        _react2.default.createElement("img", { className: "errorInfoImg", src: "/assets" + "/img/infoerror.svg" }),
                        "Alert"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "cross-btn" },
                        _react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", alt: "close", onClick: this.props.closeErrorPopup })
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "error-msg" },
                        this.props.message
                    )
                )
            );
        }
    }]);

    return BookingError;
}(_react2.default.Component);

exports.default = BookingError;

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/choosePatientNew.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/choosePatientNew.js ***!
  \******************************************************************/
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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "./node_modules/rc-calendar/es/index.js");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _newDateSelector = __webpack_require__(/*! ../../commons/newDateSelector.js */ "./dev/js/components/commons/newDateSelector.js");

var _newDateSelector2 = _interopRequireDefault(_newDateSelector);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var ChoosePatientNewView = function (_React$Component) {
    _inherits(ChoosePatientNewView, _React$Component);

    function ChoosePatientNewView(props) {
        _classCallCheck(this, ChoosePatientNewView);

        var _this = _possibleConstructorReturn(this, (ChoosePatientNewView.__proto__ || Object.getPrototypeOf(ChoosePatientNewView)).call(this, props));

        _this.state = {
            showOtp: false,
            otpVerifySuccess: false,
            name: '',
            phoneNumber: _this.props.user_loggedIn_number ? _this.props.user_loggedIn_number : '',
            gender: 'm',
            data: false,
            email: '',
            smsBtnType: null,
            isEmailNotValid: false,
            isPopupDataFilled: false,
            enableOtpRequest: false,
            dob: null,
            formattedDate: '',
            dateModal: false,
            isDobNotValid: false,
            isNewPatient: false,
            is_dob_error: null,
            isDobValidated: false,
            otp: null,
            showLogin: false,
            askUserDetails: false,
            otpTimeout: false
        };
        return _this;
    }

    _createClass(ChoosePatientNewView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (!this.props.patient) {

                if (this.props.saved_patient_details && Object.keys(this.props.saved_patient_details).length) {

                    this.setState(_extends({}, this.props.saved_patient_details, { isPopupDataFilled: false, showLogin: false, otp: null }), function () {
                        _this2.profileValidation();
                    });
                }
            }
            if (document.getElementById('otpMob')) {
                document.getElementById('otpMob').focus();
            }
            if (this.props.user_loggedIn_number) {
                this.setState({ phoneNumber: this.props.user_loggedIn_number ? this.props.user_loggedIn_number : '' });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this3 = this;

            if (this.props.doctorSummaryPage && !nextProps.patient && !this.state.isPopupDataFilled && nextProps.ipdPopupData && nextProps.ipdPopupData['popup1'] && (!this.props.ipdPopupData['popup1'] || this.props.ipdPopupData['popup1'] && nextProps.ipdPopupData['popup1'].name != this.props.ipdPopupData['popup1'])) {
                var popup1 = void 0;
                try {
                    var _popup = nextProps.ipdPopupData['popup1'];

                    if (_popup && Object.keys(_popup).length && _popup.doctor == this.props.selectedDoctor) {
                        this.setState({ name: _popup && _popup.first_name ? _popup.first_name : '', phoneNumber: _popup && _popup.phone_number ? _popup.phone_number : '', gender: _popup && _popup.gender ? _popup.gender : '', showVerify: _popup && _popup.phone_number.length == 10 ? true : false, isPopupDataFilled: true, showLogin: false, otp: null }, function () {
                            _this3.profileValidation();
                        });
                    }
                } catch (e) {}
            }
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            if (e.target.name == 'phoneNumber') {
                var _setState;

                e.target.value.length <= 10 ? e.target.value.length == 10 ? this.setState((_setState = {}, _defineProperty(_setState, e.target.name, e.target.value), _defineProperty(_setState, 'showVerify', true), _setState)) : this.setState(_defineProperty({}, e.target.name, e.target.value)) : this.setState({ showVerify: true });
            } else if (e.target.name == 'otp') {
                e.target.value.length <= 6 ? e.target.value.length == 6 ? this.setState(_defineProperty({}, e.target.name, e.target.value)) : this.setState(_defineProperty({}, e.target.name, e.target.value)) : this.setState({ showVerify: true });
            } else {
                this.setState(_defineProperty({}, e.target.name, e.target.value));
            }
        }
    }, {
        key: 'handleContinuePress',
        value: function handleContinuePress(e) {
            if (e.key === 'Enter') {
                this.verify();
            }
        }
    }, {
        key: 'handleOtpContinuePress',
        value: function handleOtpContinuePress(e) {
            if (e.key === 'Enter') {
                this.submitOTPRequest();
            }
        }
    }, {
        key: 'submitOTPRequest',
        value: function submitOTPRequest(number) {
            var _this4 = this;

            if (!this.state.otp) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Otp" });
                return;
            }
            var self = this;
            var extraParamsData = {
                summaryPage: true
            };
            this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParamsData, function (response) {
                if (response.token) {

                    var data = {
                        'Category': 'ConsumerApp', 'Action': 'LoginSuccess', 'pageSource': 'BookingPage', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'login-success', 'mobileNo': _this4.state.phoneNumber
                    };
                    _gtm2.default.sendEvent({ data: data });

                    self.setState({ otpVerifySuccess: true }, function () {
                        self.props.profileDataCompleted(_this4.state);
                        //Create IPD lead for IPD Hospital
                        /*if (self.props.doctorSummaryPage && self.props.is_ipd_hospital) {
                            let formData = {
                                phone_number: this.state.phoneNumber,
                                source: 'dropoff',
                                is_valid: false,
                                first_name: this.state.name || 'unknown'
                            }
                            if (self.props.doctor_id) {
                                formData['doctor'] = self.props.doctor_id
                            }
                            if (self.props.hospital_id) {
                                formData['hospital'] = self.props.hospital_id
                            }
                            self.props.submitIPDForm(formData, this.props.selectedLocation)
                        }*/
                        if (response.user_exists == 1) {
                            self.props.getUserProfile().then(function () {
                                if (self.props.is_lab) {
                                    self.props.checkPrescription();
                                    self.props.clearTestForInsured();
                                }
                                _this4.props.getDataAfterLogin();
                                if (self.props.is_opd) {
                                    self.props.sendEmailNotification();
                                }
                            });
                        }
                        // self.props.createProfile(this.state, (err, res) => {
                        //     //self.setState({data:true})
                        //     self.props.getUserProfile().then(() => {

                        //         if (self.props.is_lab) {
                        //             self.props.checkPrescription()
                        //             self.props.clearTestForInsured()
                        //         }
                        //         this.props.getDataAfterLogin()
                        //         if (self.props.is_opd) {
                        //             self.props.sendEmailNotification()
                        //         }
                        //     })
                        //     self.setState({ dob: null, email: null })
                        // })
                    });
                } else {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Otp" });
                }
            });
        }
    }, {
        key: 'profileValidation',
        value: function profileValidation() {
            this.props.profileDataCompleted(this.state);
        }
    }, {
        key: 'profileEmailValidation',
        value: function profileEmailValidation() {
            if (!this.state.email.match(/\S+@\S+\.\S+/)) {
                this.setState({ isEmailNotValid: true });
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Email Id" });
                }, 500);
                return;
            }
        }
    }, {
        key: 'profileDobValidation',
        value: function profileDobValidation(e) {
            var _this5 = this;

            var data = _extends({}, this.props.patient);
            if (data) {
                this.setState({ dob: data.dob ? data.dob : this.state.dob }, function () {
                    if (_this5.state.dob) {
                        if (_this5.state.dob != null && data.dob == null && !_this5.state.isDobValidated) {
                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Date of Birth" });
                            return;
                        }
                        _this5.setState({ isDobNotValid: false });
                        data.dob = _this5.state.dob;
                        data.otpVerifySuccess = true;
                        _this5.props.profileDataCompleted(data);
                        _this5.props.editUserProfile(data, _this5.props.patient.id, function (err, res) {
                            _this5.props.getUserProfile();
                            _this5.setState({ dob: null });
                        });
                    } else {
                        if (!_this5.state.dob && !data.dob) {
                            _this5.setState({ isDobNotValid: true });
                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Date of Birth" });
                        }
                    }
                });
            }
            // if (data) {
            //     this.setState({ email: data.email ? data.email : this.state.email, dob: data.dob ? data.dob : this.state.dob }, () => {
            //         if (this.state.dob && this.state.email) {
            //             if (this.state.dob != null && data.dob == null && !this.state.isDobValidated) {
            //                 SnackBar.show({ pos: 'bottom-center', text: "Please Enter Date of Birth" })
            //                 return
            //             }
            //             this.setState({ isEmailNotValid: false, isDobNotValid: false })
            //             data.dob = this.state.dob
            //             data.email = this.state.email
            //             data.otpVerifySuccess = true
            //             this.props.profileDataCompleted(data)
            //             this.props.editUserProfile(data, this.props.patient.id, (err, res) => {
            //                 this.props.getUserProfile()
            //                 this.setState({ dob: null, email: null })
            //             })
            //         } else {
            //             if (!this.state.email && !data.email) {
            //                 this.setState({ isEmailNotValid: true })
            //                 SnackBar.show({ pos: 'bottom-center', text: "Please Enter Valid Email Id" })
            //             }
            //             if (!this.state.dob && !data.dob) {
            //                 this.setState({ isDobNotValid: true })
            //                 SnackBar.show({ pos: 'bottom-center', text: "Please Enter Date of Birth" })
            //             }
            //         }
            //     })
            // }
        }
    }, {
        key: 'selectDateFromCalendar',
        value: function selectDateFromCalendar(date) {
            var _this6 = this;

            var data = _extends({}, this.props.patient);
            if (date) {
                date = date.toDate();
                var formattedDate = this.getFormattedDate(date);
                date = new Date(date).toISOString().split('T')[0];
                /*this.setState({ dob: date, formattedDate:formattedDate, dateModal: false},()=>{
                    data.dob = this.state.dob    
                    this.props.editUserProfile(data, this.props.patient.id, (err, res) => {
                        this.props.getUserProfile()
                    })
                })*/
                this.setState({ dob: date, formattedDate: formattedDate, dateModal: false }, function () {
                    if (_this6.state.isNewPatient) {
                        _this6.profileValidation();
                    }
                });
            } else {
                this.setState({ dateModal: false });
            }
        }
    }, {
        key: 'getFormattedDate',
        value: function getFormattedDate(date) {
            date = new Date(date);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            var today = dd + '-' + mm + '-' + yyyy;
            return today;
        }
    }, {
        key: 'openCalendar',
        value: function openCalendar(isNewPatient) {
            this.setState({ dateModal: true, isNewPatient: isNewPatient });
        }
    }, {
        key: 'verify',
        value: function verify() {
            var resendFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var viaSms = arguments[1];
            var viaWhatsapp = arguments[2];

            var self = this;

            if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
                this.setState({ validationError: "" });

                if (resendFlag) {
                    var analyticData = {
                        'Category': 'ConsumerApp', 'Action': 'ResendOtp', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'resend-otp', 'mobileNo': this.state.phoneNumber, 'pageSource': 'BookingPage', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : ''
                    };
                    _gtm2.default.sendEvent({ data: analyticData });
                } else {
                    var _analyticData = {
                        'Category': 'ConsumerApp', 'Action': 'GetOtpRequest', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'get-otp-request', 'mobileNo': this.state.phoneNumber, 'pageSource': 'BookingPage', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : ''
                    };
                    _gtm2.default.sendEvent({ data: _analyticData });
                }
                this.props.nonIpdLeads(this.state.phoneNumber);
                this.props.sendOTP(this.state.phoneNumber, viaSms, viaWhatsapp, 'booking-login', function (error) {
                    if (error) {
                        setTimeout(function () {
                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not generate OTP." });
                        }, 500);
                        //self.setState({ validationError: "Could not generate OTP." })
                    } else {
                        var _self$setState;

                        // if (viaWhatsapp) {
                        //     this.setState({ enableOtpRequest: true })
                        // } else {
                        //     this.setState({ enableOtpRequest: true })
                        // }
                        self.setState((_self$setState = { showOtp: true, showVerify: false, smsBtnType: viaSms ? true : false, showLogin: true, enableOtpRequest: true }, _defineProperty(_self$setState, 'enableOtpRequest', false), _defineProperty(_self$setState, 'otpTimeout', false), _self$setState), function () {
                            self.resendOtpCountDown();
                        });
                        // setTimeout(() => {
                        //     this.setState({ otpTimeout: false })
                        // }, 20000)
                        // setTimeout(() => {
                        //     this.setState({ enableOtpRequest: false,otpTimeout: false })
                        //     this.resendOtpCountDown()
                        // }, 60000)
                    }
                });
            } else {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please provide a valid number (10 digits)" });
                }, 500);
            }
        }
    }, {
        key: 'getNewDate',
        value: function getNewDate(type, newDate, isValidDob) {
            var _this7 = this;

            this.setState({ dob: newDate, isDobValidated: isValidDob }, function () {
                _this7.profileValidation();
            });
        }
    }, {
        key: 'editPhoneNumber',
        value: function editPhoneNumber() {
            this.setState({ showOtp: false, showLogin: false, otp: null });
            document.getElementById('otpMob').focus();
        }
    }, {
        key: 'addUserProfile',
        value: function addUserProfile() {
            var _this8 = this;

            //new logic
            if (!this.state.name.match(/^[a-zA-Z ]+$/)) {
                setTimeout(function () {
                    if (!_this8.state.name) {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please enter patient's name." });
                    } else {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Name should only contain alphabets." });
                    }
                }, 500);
                return;
            }

            if (this.state.gender == '') {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Select The Gender" });
                }, 500);
                return;
            }

            if (this.state.email == '') {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Your Email Id" });
                }, 500);
                return;
            }

            if (!this.state.email.match(/\S+@\S+\.\S+/)) {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Email Id" });
                }, 500);
                return;
            }

            if (this.state.dob == '' || this.state.dob == null) {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Date of Birth" });
                }, 500);
                return;
            }

            if (this.state.dob != null && !this.state.isDobValidated) {
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter Valid Date of Birth" });
                }, 500);
                return;
            }

            this.props.profileDataCompleted(this.state);
            this.props.createProfile(this.state, function (err, res) {
                _this8.props.getUserProfile().then(function () {

                    if (_this8.props.is_lab) {
                        _this8.props.checkPrescription();
                        _this8.props.clearTestForInsured();
                    }
                    _this8.props.getDataAfterLogin();
                    if (_this8.props.is_opd) {
                        _this8.props.sendEmailNotification();
                    }
                });
                _this8.setState({ dob: null, email: null });
            });
        }
    }, {
        key: 'resendOtpCountDown',
        value: function resendOtpCountDown() {
            var self = this;
            var timeLeft = 30;
            var timerId = setInterval(countdown, 1000);
            var timeElm = document.getElementById('timeElm');
            function countdown() {
                if (timeLeft == 0) {
                    if (timeElm) {
                        timeElm.innerHTML = '';
                    }
                    self.setState({ otpTimeout: true });
                    clearTimeout(timerId);
                } else {
                    if (timeElm) {
                        if (timeLeft < 10) {
                            timeElm.innerHTML = '00:' + '0' + timeLeft;
                        } else {
                            timeElm.innerHTML = '00:' + timeLeft;
                        }
                    }
                    timeLeft--;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this9 = this;

            var parsed = queryString.parse(this.props.location.search);
            return _react2.default.createElement(
                'div',
                { className: 'widget mrb-15 ' + (this.props.profileError ? 'rnd-error-nm' : '') },
                !this.props.patient ? _react2.default.createElement(
                    'div',
                    { className: 'widget-content' },
                    !_storage2.default.checkAuth() && !this.props.patient ? _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'otp-heading' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'title d-flex mb-0' },
                                'Please enter your mobile number to proceed'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'otp-sub-heading' },
                                'Appointment details will be sent to this number'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'otp-container' },
                            _react2.default.createElement(
                                'form',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'div',
                                    { className: 'labelWrap' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'p-relative' },
                                        _react2.default.createElement('input', { type: 'number', required: true, id: 'otpMob', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this.handleContinuePress.bind(this), onBlur: this.profileValidation.bind(this), className: this.state.showOtp ? 'click-disable' : '' }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'otpMob' },
                                            'Mobile number'
                                        ),
                                        this.state.showOtp ? _react2.default.createElement(
                                            'button',
                                            { className: 'otp-edit', onClick: function onClick(e) {
                                                    e.preventDefault();_this9.editPhoneNumber();
                                                } },
                                            'Edit'
                                        ) : ''
                                    )
                                ),
                                this.state.showOtp ? _react2.default.createElement(
                                    'div',
                                    { className: 'labelWrap' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'p-relative' },
                                        _react2.default.createElement('input', { type: 'number', required: true, id: 'otpNumber', autoComplete: 'off', onKeyPress: this.handleOtpContinuePress.bind(this), onChange: this.inputHandler.bind(this), name: 'otp', value: this.state.otp }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'otpNumber' },
                                            'Enter 6 digit OTP'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'otp-edit' },
                                            this.state.enableOtpRequest ? '' : _react2.default.createElement(
                                                _react2.default.Fragment,
                                                null,
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: ' ' + (this.state.otpTimeout ? 'otp-rsnd-active' : 'otp-rsnd click-disable'), onClick: function onClick(e) {
                                                            e.preventDefault();_this9.verify(true, _this9.state.smsBtnType ? true : false, !_this9.state.smsBtnType ? true : false);
                                                        } },
                                                    'Resend'
                                                ),
                                                _react2.default.createElement('span', { className: 'otp-timer', id: 'timeElm' })
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'get-otp ' + (this.state.otpTimeout ? 'otp-rsnd-active' : 'otp-rsnd click-disable'), onClick: function onClick(e) {
                                                e.preventDefault();_this9.verify(true, _this9.state.smsBtnType ? false : true, !_this9.state.smsBtnType ? false : true);
                                            } },
                                        ' ',
                                        this.state.smsBtnType ? 'Get OTP on Whatsapp' : 'Get OTP on SMS'
                                    )
                                ) : "",
                                _react2.default.createElement(
                                    'div',
                                    { className: 'input-booking-smswhts d-flex align-flex-sp-bt  single-btn ' + (this.state.showLogin ? 'otpLogin' : '') },
                                    this.state.showLogin ? _react2.default.createElement(
                                        'button',
                                        { className: 'otp-login-btn', onClick: function onClick(e) {
                                                e.preventDefault();_this9.submitOTPRequest();
                                            } },
                                        'Login'
                                    ) : _react2.default.createElement(
                                        _react2.default.Fragment,
                                        null,
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'input-sms-ver mr-0', onClick: function onClick(e) {
                                                    e.preventDefault();_this9.verify(false, true, false);
                                                } },
                                            _react2.default.createElement('img', { className: 'sms-ico', src: '/assets/img/smsicon.svg', style: { marginRight: '5px' } }),
                                            'Get OTP on SMS'
                                        )
                                    )
                                )
                            )
                        )
                    ) : _storage2.default.checkAuth() && !this.props.patient ? _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'otp-heading' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'title d-flex' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    _react2.default.createElement('img', { style: { width: '20px', marginRight: '8px' }, src: "/assets" + "/img/nw-usr.svg" })
                                ),
                                'Patient Details'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'otp-container' },
                            _react2.default.createElement(
                                'form',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'div',
                                    { className: 'labelWrap' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'p-relative' },
                                        _react2.default.createElement('input', { type: 'number', id: 'otpMobver', className: 'click-disable', value: this.props.user_loggedIn_number ? this.props.user_loggedIn_number : this.state.phoneNumber ? this.state.phoneNumber : '', autoComplete: 'off' }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'otpMobver' },
                                            'Mobile number'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'num-verified' },
                                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/chk-green.svg' }),
                                            ' Verified'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'd-flex' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'label-names-buttons ' + (this.state.gender == 'm' ? 'btn-active' : ''), name: 'gender', checked: this.state.gender == 'm', onClick: function onClick() {
                                                return _this9.setState({ 'gender': 'm' });
                                            }, onBlur: this.profileValidation.bind(this) },
                                        'Male'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'label-names-buttons ' + (this.state.gender == 'f' ? 'btn-active' : ''), name: 'gender', checked: this.state.gender == 'f', onClick: function onClick() {
                                                return _this9.setState({ 'gender': 'f' });
                                            }, onBlur: this.profileValidation.bind(this) },
                                        'Female'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'labelWrap' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'p-relative' },
                                        _react2.default.createElement('input', { type: 'text', required: true, id: 'ptntName', name: 'name', value: this.state.name, onChange: this.inputHandler.bind(this), onBlur: this.profileValidation.bind(this), placeholder: '', autoComplete: 'off' }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'ptntName' },
                                            'Name'
                                        )
                                    )
                                ),
                                _react2.default.createElement(_newDateSelector2.default, _extends({}, this.props, { getNewDate: this.getNewDate.bind(this), is_dob_error: this.state.is_dob_error, old_dob: this.state.dob, is_summary: false })),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'labelWrap' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'p-relative' },
                                        _react2.default.createElement('input', { type: 'text', required: true, id: 'ptntEmail', name: 'email', value: this.state.email, onChange: this.inputHandler.bind(this), onBlur: this.profileValidation.bind(this), placeholder: '', autoComplete: 'off' }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'ptntEmail' },
                                            'Email'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'text-center' },
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'button', className: 'ptnt-dtls-cnfrm', onClick: function onClick(e) {
                                                e.preventDefault();_this9.addUserProfile();
                                            } },
                                        'Confirm'
                                    )
                                )
                            )
                        )
                    ) : ''
                ) : _react2.default.createElement(
                    'div',
                    { className: 'widget-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'lab-visit-time d-flex jc-spaceb' },
                        _react2.default.createElement(
                            'div',
                            { className: 'd-flex flex-1', style: { flexDirection: 'column', paddingRight: 15 } },
                            _react2.default.createElement(
                                'h4',
                                { className: 'title d-flex' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    _react2.default.createElement('img', { style: { width: '20px', marginRight: '8px' }, src: "/assets" + "/img/nw-usr.svg" })
                                ),
                                'Patient'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'mbl-view-formatting text-right' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'date-time title', style: { textTransform: 'capitalize' } },
                                this.props.patient ? this.props.patient.name : "",
                                ' '
                            )
                        )
                    ),
                    (this.props.is_opd || this.props.is_lab) && (!this.props.patient.email || !this.props.patient.dob) ? _react2.default.createElement(
                        'div',
                        { className: 'otp-container' },
                        _react2.default.createElement(
                            'form',
                            null,
                            !this.props.patient.dob ? _react2.default.createElement(_newDateSelector2.default, _extends({}, this.props, { getNewDate: this.getNewDate.bind(this), is_dob_error: this.state.is_dob_error, old_dob: this.state.dob, is_summary: false })) : ""
                        )
                    ) : '',
                    _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        this.state.dob || this.state.email ? _react2.default.createElement(
                            'div',
                            { className: 'text-right' },
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: 'text-primary fw-700 text-sm', onClick: this.profileDobValidation.bind(this) },
                                'Update'
                            )
                        ) : parsed && parsed.cod_to_prepaid == 'true' ? '' : _react2.default.createElement(
                            'div',
                            { className: 'text-right' },
                            _react2.default.createElement(
                                'a',
                                { href: '#', onClick: function onClick(e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        _this9.props.navigateTo('patient', _this9.props.is_insurance_applicable);
                                    }, className: 'text-primary fw-700 text-sm' },
                                this.props.patient ? "Change Patient" : "Select Patient"
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: '' },
                            this.props.show_insurance_error && this.props.insurance_error_msg ? _react2.default.createElement(
                                'p',
                                { className: 'gyn-text' },
                                this.props.insurance_error_msg
                            ) : ''
                        )
                    )
                ),
                // old logic
                this.props.patient ? _react2.default.createElement('div', { className: 'd-none' }) : _react2.default.createElement('div', { className: 'd-none' })
            );
        }
    }]);

    return ChoosePatientNewView;
}(_react2.default.Component);

exports.default = ChoosePatientNewView;

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9XaGF0c0FwcE9wdGluL1doYXRzQXBwT3B0aW5WaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9Cb29raW5nQ29uZmlybWF0aW9uUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2Jvb2tpbmdTdW1tYXJ5L2xlbnNmaXRQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvVmlwR29sZFBhY2thZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3BhdGllbnREZXRhaWxzL2Jvb2tpbmdFcnJvclBvcFVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9wYXRpZW50RGV0YWlscy9jaG9vc2VQYXRpZW50TmV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCJdLCJuYW1lcyI6WyJMb2FkZXIiLCJwcm9wcyIsImNsYXNzVHlwZSIsImlGcmFtZVBvcHVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJXaGF0c0FwcE9wdGluVmlldyIsInN0YXRlIiwid2hhdHNhcHBfb3B0aW5fVmlldyIsInByb2ZpbGVzIiwid2hhdHNhcHBfb3B0aW4iLCJpc0FwcG9pbnRtZW50Iiwid2hhdHNhcHBfaXNfZGVjbGluZWQiLCJpc1VzZXJQcm9maWxlIiwic3RhdHVzIiwiZSIsInByb2ZpbGVEYXRhIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImVkaXRVc2VyUHJvZmlsZSIsImlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0U3RhdGUiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwidG9nZ2xlV2hhdHNhcCIsInNob3VsZFJlbmRlciIsIkFTU0VUU19CQVNFX1VSTCIsImJpbmQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIkJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCIsImlzX2dvbGQiLCJwcmljZUNvbmZpcm1hdGlvblBvcHVwIiwicGF0aE5hbWUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoUGFyYW0iLCJzZWFyY2giLCJjYWxsQmFja1VybCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGlzdG9yeSIsInB1c2giLCJjbG9zZUxlbnNGaXRQb3B1cCIsImFwcGx5TGVuc0ZpdENvdXBvbnMiLCJpc09QRCIsImRlYWxfcHJpY2UiLCJsZW5zZml0X2NvdXBvbnMiLCJWaXBHb2xkUGFja2FnZVByaWNlVmlldyIsInRvZ2dsZUdvbGRQcmljZVBvcHVwIiwidmlwR29sZFBsYW5zIiwibGVuZ3RoIiwibWFwIiwidmFsdWUiLCJrZXkiLCJzZWxlY3RlZF92aXBfcGxhbiIsInRvZ2dsZUdvbGRQbGFucyIsInRvdGFsX2FsbG93ZWRfbWVtYmVycyIsInBhcnNlSW50IiwidGVudXJlIiwiaXNfc2VsZWN0ZWQiLCJtcnAiLCJnb1RvR29sZFBhZ2UiLCJQdXJlQ29tcG9uZW50IiwiQm9va2luZ0Vycm9yIiwid2lkdGgiLCJjbG9zZUVycm9yUG9wdXAiLCJtZXNzYWdlIiwibW9tZW50IiwicmVxdWlyZSIsInF1ZXJ5U3RyaW5nIiwiQ2hvb3NlUGF0aWVudE5ld1ZpZXciLCJzaG93T3RwIiwib3RwVmVyaWZ5U3VjY2VzcyIsIm5hbWUiLCJwaG9uZU51bWJlciIsInVzZXJfbG9nZ2VkSW5fbnVtYmVyIiwiZ2VuZGVyIiwiZW1haWwiLCJzbXNCdG5UeXBlIiwiaXNFbWFpbE5vdFZhbGlkIiwiaXNQb3B1cERhdGFGaWxsZWQiLCJlbmFibGVPdHBSZXF1ZXN0IiwiZG9iIiwiZm9ybWF0dGVkRGF0ZSIsImRhdGVNb2RhbCIsImlzRG9iTm90VmFsaWQiLCJpc05ld1BhdGllbnQiLCJpc19kb2JfZXJyb3IiLCJpc0RvYlZhbGlkYXRlZCIsIm90cCIsInNob3dMb2dpbiIsImFza1VzZXJEZXRhaWxzIiwib3RwVGltZW91dCIsInBhdGllbnQiLCJzYXZlZF9wYXRpZW50X2RldGFpbHMiLCJPYmplY3QiLCJrZXlzIiwicHJvZmlsZVZhbGlkYXRpb24iLCJnZXRFbGVtZW50QnlJZCIsImZvY3VzIiwibmV4dFByb3BzIiwiZG9jdG9yU3VtbWFyeVBhZ2UiLCJpcGRQb3B1cERhdGEiLCJwb3B1cDEiLCJkb2N0b3IiLCJzZWxlY3RlZERvY3RvciIsImZpcnN0X25hbWUiLCJwaG9uZV9udW1iZXIiLCJzaG93VmVyaWZ5IiwidGFyZ2V0IiwidmVyaWZ5Iiwic3VibWl0T1RQUmVxdWVzdCIsIm51bWJlciIsInNlbGYiLCJleHRyYVBhcmFtc0RhdGEiLCJzdW1tYXJ5UGFnZSIsInN1Ym1pdE9UUCIsInJlc3BvbnNlIiwidG9rZW4iLCJwcm9maWxlRGF0YUNvbXBsZXRlZCIsInVzZXJfZXhpc3RzIiwiZ2V0VXNlclByb2ZpbGUiLCJ0aGVuIiwiaXNfbGFiIiwiY2hlY2tQcmVzY3JpcHRpb24iLCJjbGVhclRlc3RGb3JJbnN1cmVkIiwiZ2V0RGF0YUFmdGVyTG9naW4iLCJpc19vcGQiLCJzZW5kRW1haWxOb3RpZmljYXRpb24iLCJtYXRjaCIsInNldFRpbWVvdXQiLCJlcnIiLCJyZXMiLCJkYXRlIiwidG9EYXRlIiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiZGQiLCJnZXREYXRlIiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInRvZGF5IiwicmVzZW5kRmxhZyIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwidmFsaWRhdGlvbkVycm9yIiwiYW5hbHl0aWNEYXRhIiwibm9uSXBkTGVhZHMiLCJzZW5kT1RQIiwiZXJyb3IiLCJyZXNlbmRPdHBDb3VudERvd24iLCJ0eXBlIiwibmV3RGF0ZSIsImlzVmFsaWREb2IiLCJjcmVhdGVQcm9maWxlIiwidGltZUxlZnQiLCJ0aW1lcklkIiwic2V0SW50ZXJ2YWwiLCJjb3VudGRvd24iLCJ0aW1lRWxtIiwiaW5uZXJIVE1MIiwiY2xlYXJUaW1lb3V0IiwicGFyc2VkIiwicGFyc2UiLCJwcm9maWxlRXJyb3IiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiaW5wdXRIYW5kbGVyIiwiaGFuZGxlQ29udGludWVQcmVzcyIsImVkaXRQaG9uZU51bWJlciIsImhhbmRsZU90cENvbnRpbnVlUHJlc3MiLCJtYXJnaW5SaWdodCIsImdldE5ld0RhdGUiLCJhZGRVc2VyUHJvZmlsZSIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nUmlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwicHJvZmlsZURvYlZhbGlkYXRpb24iLCJjb2RfdG9fcHJlcGFpZCIsIm5hdmlnYXRlVG8iLCJpc19pbnN1cmFuY2VfYXBwbGljYWJsZSIsInNob3dfaW5zdXJhbmNlX2Vycm9yIiwiaW5zdXJhbmNlX2Vycm9yX21zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNUQSxLQURTO0FBRWxCOzs7O2lDQUVROztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFXLEtBQUtBLEtBQUwsQ0FBV0MsU0FBWCxJQUF3QixnQkFBeEM7QUFDSSx1REFBSyxXQUFVLFdBQWYsR0FESjtBQUdRLHFCQUFLRCxLQUFMLENBQVdFLFdBQVgsR0FDSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQSxpQkFESixHQUMrRTtBQUp2RixhQURKO0FBU0g7Ozs7RUFo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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoiMjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIFdoYXRzQXBwT3B0aW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgd2hhdHNhcHBfb3B0aW5fVmlldzp0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRSZW5kZXIoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wcm9maWxlcyl7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlcy53aGF0c2FwcF9vcHRpbiAhPW51bGwpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuaXNBcHBvaW50bWVudCAmJiAhdGhpcy5wcm9wcy5wcm9maWxlcy53aGF0c2FwcF9vcHRpbiAmJiAhdGhpcy5wcm9wcy5wcm9maWxlcy53aGF0c2FwcF9pc19kZWNsaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMuaXNVc2VyUHJvZmlsZSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHRvZ2dsZVdoYXRzYXAoc3RhdHVzLGUpIHsgICAgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaXNBcHBvaW50bWVudCl7ICAgICAgXG4gICAgICAgICAgICBsZXQgcHJvZmlsZURhdGEgPSB7Li4udGhpcy5wcm9wcy5wcm9maWxlc31cbiAgICAgICAgICAgIGlmKHN0YXR1cyl7XG4gICAgICAgICAgICAgICAgcHJvZmlsZURhdGEud2hhdHNhcHBfb3B0aW4gPSB0cnVlXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIllvdSB3aGF0c0FwcCBub3RpZmljYXRpb25zIGhhcyBiZWVuIGVuYWJsZWQuXCJ9KSAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcHJvZmlsZURhdGEud2hhdHNhcHBfaXNfZGVjbGluZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcInlvdXIgd2hhdHNBcHAgbm90aWZpY2F0aW9ucyBoYXMgYmVlbiBkaXNhYmxlZC5cIn0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmVkaXRVc2VyUHJvZmlsZShwcm9maWxlRGF0YSwgcHJvZmlsZURhdGEuaWQgLCgpPT57XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2hhdHNhcHBDYXJkQ29udGFpbmVyJylbMF0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoYXRzYXBwX29wdGluX1ZpZXc6IHN0YXR1cyB9LCgpID0+e1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnV2hhdHNhcHRvZ2dsZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdXaGF0c2FwLXRvZ2dsZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVXaGF0c2FwKHN0YXR1cykgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5zaG91bGRSZW5kZXIoKSlcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0FwcG9pbnRtZW50P1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdHNhcHBDYXJkQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2EtbG9nby1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2EtbG9nby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUgd291bGQgbGlrZSB0byBzZW5kIHlvdSB1cGRhdGVzIHRocm91Z2ggd2hhdHNhcHA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbG93RGVjbGluZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWxsb3dCdG5zXCIgb25DbGljaz17dGhpcy50b2dnbGVXaGF0c2FwLmJpbmQodGhpcyx0cnVlKX0+QWxsb3c8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZWNsaW5lQnRuc1wiIHN0eWxlPXt7Y29sb3I6JyM3NTc1NzUnfX1vbkNsaWNrPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzLGZhbHNlKX0+RGVjbGluZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc2MDAnLCBmb250U2l6ZTogJzE0cHgnIH19PkVuYWJsZSA8c3BhbiBjbGFzc05hbWU9XCJzbS13dHNwLWltZ1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2EtbG9nby1zbS5wbmdcIn0gLz5XaGF0c0FwcDwvc3Bhbj4gbm90aWZpY2F0aW9uPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzLCF0aGlzLnN0YXRlLndoYXRzYXBwX29wdGluX1ZpZXcpfSBjaGVja2VkPXt0aGlzLnN0YXRlLndoYXRzYXBwX29wdGluX1ZpZXd9IC8+PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBXaGF0c0FwcE9wdGluVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwIHZpcC1zcmNoLXBvcC1taW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYWRpaW5nLXNyY2gtZWxcIj5cblx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtY29uZW50XCI+e3RoaXMucHJvcHMuaXNfZ29sZD8nQ29uZmlybSBkZWxldGUgbWVtYmVyPyc6J0RvIHlvdSB3aXNoIHRvIGNvbnRpbnVlPyd9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgdHJ1ZSl9PlllczwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCBmYWxzZSl9Pk5vPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8qKHRoaXMucHJvcHMuaXNfdmlwX2FwcGxpY2FibGUgfHwgdGhpcy5wcm9wcy5pc19pbnN1cmFuY2VfYXBwbGljYWJsZSkgfHwgdGhpcy5wcm9wcy5pc0NhcnQgfHwgdGhpcy5wcm9wcy5pc0xhYj9cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtcnQtMjAgdGV4dC1jZW50ZXIgZnctNTAwXCI+V2UgYXJlIHJlZGlyZWN0aW5nIHlvdSB0byBQaGFybUVhc3kgd2Vic2l0ZSBpbiAzIHNlY29uZHMuLi48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj5EbyB5b3Ugd2lzaCB0byBjb250aW51ZT88L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1idG4tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgdHJ1ZSl9PlllczwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsIGZhbHNlKX0+Tm88L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aXAtYmFubmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpcC1iYW5uZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCB2cC1jbHMtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtcG9wLWNscy5zdmcnfSBvbkNsaWNrPXt0aGlzLnByb3BzLmJhbm5lckNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcyxmYWxzZSl9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCB2cC1ibnItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtaW1nLXBvcC5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9wLWJuci10eHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInZwLWJuci1rbm93LXR4dFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdCb29raW5nUGFnZVZpcEJhbm5lckNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYm9va2luZ3BhZ2UtdmlwLWNsaWNrJ1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIFx0fVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1kZXRhaWxzP3NvdXJjZT1ib29raW5ncGFnZSZsZWFkX3NvdXJjZT1ib29raW5ncGFnZScpIH19Pktub3cgbW9yZSBhYm91dCBEb2NwcmltZSBWSVA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ2cC1ibnItc3ViLXR4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuYmFubmVyQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLHRydWUpfT5Ob3QgSW50ZXJlc3RlZD8gQ29udGludWUgQm9va2luZyA8aW1nIHN0eWxlPXt7d2lkdGg6JzdweCd9fSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1yZ2h0LnN2Zyd9IC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PiovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHBhdGhOYW1lID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZVxuXHRcdGxldCBzZWFyY2hQYXJhbSA9IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoXG5cdFx0bGV0IGNhbGxCYWNrVXJsID0gcGF0aE5hbWUgKyBzZWFyY2hQYXJhbVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5XCIgPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxuc3QtZml0LXBvcC1iZ1wiPlxuXHRcdFx0XHRcdFx0XHQ8cD5HZXQgYSBGcmVlIEV5ZXdlYXIgd2l0aCA8YnIgLz50aGlzIGFwcG9pbnRtZW50PC9wPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ5LWxhbnNmaXRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5ieTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImxuc2ZpdC1wb3AtaWNvXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbGVuc2ljby5wbmdcIn0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG5zdC1maXQtc3ViLXBvcFwiPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsbnMtcGFyYS1tblwiPuKAnEZSRUUgUEFJUiBPRiBFWUUgR0xBU1NFUyA8YnIvPihGcmFtZSArIExlbnMpIG9yIFN1bmdsYXNzZXM8L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxuc2Z0LWNwblwiPlVzZSBDb3Vwb246IExFTlNGSVQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxucy1rbm93XCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGVuc0ZpdEtub3dNb3JlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGVuc2ZpdC1rbm93bW9yZS1jbGlja2VkJ1xuXHRcdFx0XHRcdCAgICAgICAgICAgIH1cblxuXHRcdFx0XHRcdCAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sZW5zZml0LXRuYz9jYWxsYmFja3VybD0nK2NhbGxCYWNrVXJsKycmaXNMZW5zZml0U3BlY2lmaWM9dHJ1ZScpXG5cdFx0XHRcdFx0XHRcdFx0fX0+S25vdyBtb3JlPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxuc2ZpdC1idG4tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZUxlbnNGaXRQb3B1cC5iaW5kKHRoaXMpfT5JIERvbuKAmXQgd2FudDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuYXBwbHlMZW5zRml0Q291cG9ucy5iaW5kKHRoaXMsdGhpcy5wcm9wcy5pc09QRD90aGlzLnByb3BzLmRlYWxfcHJpY2U6MCx0aGlzLnByb3BzLmxlbnNmaXRfY291cG9ucyl9PkFwcGx5IExFTlNGSVQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+KVxuXHRcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgICAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBWaXBHb2xkUGFja2FnZVByaWNlVmlldyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdHRoaXMucHJvcHMudG9nZ2xlR29sZFByaWNlUG9wdXAoKVxuXHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdFxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IHAtMTJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicC1yZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpcGQtcG9wLWlsZFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudG9nZ2xlR29sZFByaWNlUG9wdXAoKVxuXHRcdFx0XHRcdFx0XHR9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSAvPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJnb2xkLXBvcC1oZG5nXCI+U2VsZWN0IFBsYW48L2g0PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnb2xkLW9mZmVyLWNvbnQgZ29sZC1wb3AtcGFkaW5nXCI+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJnb2xkLW9mci1oZG5nXCI+TElNSVRFRCBQRVJJT0QgT0ZGRVI8L2g0PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdvbGQtbGlzdC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZpcEdvbGRQbGFucyAmJiB0aGlzLnByb3BzLnZpcEdvbGRQbGFucy5sZW5ndGggPiAwID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy52aXBHb2xkUGxhbnMubWFwKCh2YWx1ZSwga2V5KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17YGdvbGQtb2ZyLWxpc2luZyBhZGRwZG5nLXBvcHVwICR7dmFsdWUuaWQgPT0gKHRoaXMucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZCkgPyAnZ29sZC1zZWxlY3QnIDogJyd9YH0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy50b2dnbGVHb2xkUGxhbnModmFsdWUpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1tbnRocGxhblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtbnRoLXBsYW4tZ2xkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q292ZXJhZ2U6IHt2YWx1ZS50b3RhbF9hbGxvd2VkX21lbWJlcnN9IHtwYXJzZUludCh2YWx1ZS50b3RhbF9hbGxvd2VkX21lbWJlcnMpID4gMSA/ICdNZW1iZXJzJyA6ICdNZW1iZXInfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImdsZC1jdnItdHh0XCI+VmFsaWQgZm9yIHt2YWx1ZS50ZW51cmV9IE1vbnRocyB7dmFsdWUuaXNfc2VsZWN0ZWQgPyA8c3Bhbj5QT1BVTEFSPC9zcGFuPiA6ICcnfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnb2xkLXByaWNlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImdsZC1wcmNcIj48c3BhbiBjbGFzc05hbWU9XCJnb2xkLXByYy1jdXRcIj7igrl7dmFsdWUubXJwfTwvc3Bhbj4g4oK5e3ZhbHVlLmRlYWxfcHJpY2V9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdvbGQtcGxuLXNsY3QtcmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdkLXJkaW8tZ3JheVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZ2QtcmRpby1jaGtcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1jaGsuc3ZnJ30gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ31cblxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZmFsc2UgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuX2RhdGEpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5pc192aXBfZ29sZCAmJiB0aGlzLnByb3BzLnZpcENsdWJMaXN0ICYmIHRoaXMucHJvcHMudmlwQ2x1Ykxpc3QuZ29sZF9wbGFucyAmJiB0aGlzLnByb3BzLnZpcENsdWJMaXN0LmdvbGRfcGxhbnMubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW5fZGF0YS5zaG93X2NvbnN1bHRhdGlvbl90ZXh0ID9cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImdsZC1sc3QtZm9vdC10eHRcIj5JbmNsdWRlcyBVbmxpbWl0ZWQgT25saW5lIENvbnN1bHRhdGlvbiA8c3Bhbj4oR2VuZXJhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBoeXNpY2lhbik8L3NwYW4+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImdvbC1wb3AtY3VzdG9tLWJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuZ29Ub0dvbGRQYWdlfT5WaWV3IERldGFpbHM8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpcEdvbGRQYWNrYWdlUHJpY2VWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQm9va2luZ0Vycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJlcnJvci1tc2ctcG9wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtZXJyb3JcIiBzdHlsZT17eyB3aWR0aDogJzMwMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1oZWFkXCI+PGltZyBjbGFzc05hbWU9XCJlcnJvckluZm9JbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pbmZvZXJyb3Iuc3ZnXCJ9IC8+e1wiQWxlcnRcIn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zcy1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvY2xvc2UucG5nXCJ9IGFsdD1cImNsb3NlXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZUVycm9yUG9wdXB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci1tc2dcIj57dGhpcy5wcm9wcy5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va2luZ0Vycm9yIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBDYWxlbmRhciBmcm9tICdyYy1jYWxlbmRhcic7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgTmV3RGF0ZVNlbGVjdG9yIGZyb20gJy4uLy4uL2NvbW1vbnMvbmV3RGF0ZVNlbGVjdG9yLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5jbGFzcyBDaG9vc2VQYXRpZW50TmV3VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93T3RwOiBmYWxzZSxcbiAgICAgICAgICAgIG90cFZlcmlmeVN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5wcm9wcy51c2VyX2xvZ2dlZEluX251bWJlcj90aGlzLnByb3BzLnVzZXJfbG9nZ2VkSW5fbnVtYmVyOicnLFxuICAgICAgICAgICAgZ2VuZGVyOiAnbScsXG4gICAgICAgICAgICBkYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHNtc0J0blR5cGU6IG51bGwsXG4gICAgICAgICAgICBpc0VtYWlsTm90VmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNQb3B1cERhdGFGaWxsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZW5hYmxlT3RwUmVxdWVzdDogZmFsc2UsXG4gICAgICAgICAgICBkb2I6IG51bGwsXG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRlOiAnJyxcbiAgICAgICAgICAgIGRhdGVNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICBpc0RvYk5vdFZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzTmV3UGF0aWVudDogZmFsc2UsXG4gICAgICAgICAgICBpc19kb2JfZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBpc0RvYlZhbGlkYXRlZDogZmFsc2UsXG4gICAgICAgICAgICBvdHA6bnVsbCxcbiAgICAgICAgICAgIHNob3dMb2dpbjpmYWxzZSxcbiAgICAgICAgICAgIGFza1VzZXJEZXRhaWxzOmZhbHNlLFxuICAgICAgICAgICAgb3RwVGltZW91dDpmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5wYXRpZW50KSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNhdmVkX3BhdGllbnRfZGV0YWlscyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNhdmVkX3BhdGllbnRfZGV0YWlscykubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5wcm9wcy5zYXZlZF9wYXRpZW50X2RldGFpbHMsIGlzUG9wdXBEYXRhRmlsbGVkOiBmYWxzZSxzaG93TG9naW46ZmFsc2Usb3RwOm51bGwgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVWYWxpZGF0aW9uKClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ290cE1vYicpKXtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdHBNb2InKS5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy51c2VyX2xvZ2dlZEluX251bWJlcil7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwaG9uZU51bWJlcjp0aGlzLnByb3BzLnVzZXJfbG9nZ2VkSW5fbnVtYmVyP3RoaXMucHJvcHMudXNlcl9sb2dnZWRJbl9udW1iZXI6Jyd9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZG9jdG9yU3VtbWFyeVBhZ2UgJiYgIW5leHRQcm9wcy5wYXRpZW50ICYmICF0aGlzLnN0YXRlLmlzUG9wdXBEYXRhRmlsbGVkICYmIG5leHRQcm9wcy5pcGRQb3B1cERhdGEgJiYgbmV4dFByb3BzLmlwZFBvcHVwRGF0YVsncG9wdXAxJ10gJiYgKCF0aGlzLnByb3BzLmlwZFBvcHVwRGF0YVsncG9wdXAxJ10gfHwgKHRoaXMucHJvcHMuaXBkUG9wdXBEYXRhWydwb3B1cDEnXSAmJiBuZXh0UHJvcHMuaXBkUG9wdXBEYXRhWydwb3B1cDEnXS5uYW1lICE9IHRoaXMucHJvcHMuaXBkUG9wdXBEYXRhWydwb3B1cDEnXSkpKSB7XG4gICAgICAgICAgICBsZXQgcG9wdXAxO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgcG9wdXAxID0gbmV4dFByb3BzLmlwZFBvcHVwRGF0YVsncG9wdXAxJ11cblxuICAgICAgICAgICAgICAgIGlmIChwb3B1cDEgJiYgT2JqZWN0LmtleXMocG9wdXAxKS5sZW5ndGggJiYgcG9wdXAxLmRvY3RvciA9PSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBwb3B1cDEgJiYgcG9wdXAxLmZpcnN0X25hbWUgPyBwb3B1cDEuZmlyc3RfbmFtZSA6ICcnLCBwaG9uZU51bWJlcjogcG9wdXAxICYmIHBvcHVwMS5waG9uZV9udW1iZXIgPyBwb3B1cDEucGhvbmVfbnVtYmVyIDogJycsIGdlbmRlcjogcG9wdXAxICYmIHBvcHVwMS5nZW5kZXIgPyBwb3B1cDEuZ2VuZGVyIDogJycsIHNob3dWZXJpZnk6IHBvcHVwMSAmJiBwb3B1cDEucGhvbmVfbnVtYmVyLmxlbmd0aCA9PSAxMD90cnVlOmZhbHNlLCBpc1BvcHVwRGF0YUZpbGxlZDogdHJ1ZSwgc2hvd0xvZ2luOmZhbHNlLG90cDpudWxsIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZVZhbGlkYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09ICdwaG9uZU51bWJlcicpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA8PSAxMFxuICAgICAgICAgICAgICAgID8gZS50YXJnZXQudmFsdWUubGVuZ3RoID09IDEwXG4gICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLCBzaG93VmVyaWZ5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNldFN0YXRlKHsgc2hvd1ZlcmlmeTogdHJ1ZSB9KVxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gJ290cCcpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA8PSA2XG4gICAgICAgICAgICAgICAgPyBlLnRhcmdldC52YWx1ZS5sZW5ndGggPT0gNlxuICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogdGhpcy5zZXRTdGF0ZSh7IHNob3dWZXJpZnk6IHRydWUgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGhhbmRsZUNvbnRpbnVlUHJlc3MoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMudmVyaWZ5KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU90cENvbnRpbnVlUHJlc3MoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0T1RQUmVxdWVzdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXRPVFBSZXF1ZXN0KG51bWJlcikge1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5vdHApIHtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgVmFsaWQgT3RwXCIgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgZXh0cmFQYXJhbXNEYXRhID0ge1xuICAgICAgICAgICAgc3VtbWFyeVBhZ2U6IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnN1Ym1pdE9UUCh0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0aGlzLnN0YXRlLm90cCwgZXh0cmFQYXJhbXNEYXRhLCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS50b2tlbikge1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTG9naW5TdWNjZXNzJywgJ3BhZ2VTb3VyY2UnOiAnQm9va2luZ1BhZ2UnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsb2dpbi1zdWNjZXNzJywgJ21vYmlsZU5vJzogdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IG90cFZlcmlmeVN1Y2Nlc3M6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLnByb2ZpbGVEYXRhQ29tcGxldGVkKHRoaXMuc3RhdGUpXG4gICAgICAgICAgICAgICAgICAgIC8vQ3JlYXRlIElQRCBsZWFkIGZvciBJUEQgSG9zcGl0YWxcbiAgICAgICAgICAgICAgICAgICAgLyppZiAoc2VsZi5wcm9wcy5kb2N0b3JTdW1tYXJ5UGFnZSAmJiBzZWxmLnByb3BzLmlzX2lwZF9ob3NwaXRhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lX251bWJlcjogdGhpcy5zdGF0ZS5waG9uZU51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6ICdkcm9wb2ZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc192YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogdGhpcy5zdGF0ZS5uYW1lIHx8ICd1bmtub3duJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucHJvcHMuZG9jdG9yX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGFbJ2RvY3RvciddID0gc2VsZi5wcm9wcy5kb2N0b3JfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnByb3BzLmhvc3BpdGFsX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGFbJ2hvc3BpdGFsJ10gPSBzZWxmLnByb3BzLmhvc3BpdGFsX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLnN1Ym1pdElQREZvcm0oZm9ybURhdGEsIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnVzZXJfZXhpc3RzID09IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnByb3BzLmlzX2xhYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLmNoZWNrUHJlc2NyaXB0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5jbGVhclRlc3RGb3JJbnN1cmVkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXREYXRhQWZ0ZXJMb2dpbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucHJvcHMuaXNfb3BkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvcHMuc2VuZEVtYWlsTm90aWZpY2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbGYucHJvcHMuY3JlYXRlUHJvZmlsZSh0aGlzLnN0YXRlLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vc2VsZi5zZXRTdGF0ZSh7ZGF0YTp0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYucHJvcHMuZ2V0VXNlclByb2ZpbGUoKS50aGVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChzZWxmLnByb3BzLmlzX2xhYikge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzZWxmLnByb3BzLmNoZWNrUHJlc2NyaXB0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2VsZi5wcm9wcy5jbGVhclRlc3RGb3JJbnN1cmVkKClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9wcy5nZXREYXRhQWZ0ZXJMb2dpbigpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHNlbGYucHJvcHMuaXNfb3BkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNlbGYucHJvcHMuc2VuZEVtYWlsTm90aWZpY2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5zZXRTdGF0ZSh7IGRvYjogbnVsbCwgZW1haWw6IG51bGwgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFZhbGlkIE90cFwiIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHByb2ZpbGVWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnByb3BzLnByb2ZpbGVEYXRhQ29tcGxldGVkKHRoaXMuc3RhdGUpXG4gICAgfVxuXG4gICAgcHJvZmlsZUVtYWlsVmFsaWRhdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmVtYWlsLm1hdGNoKC9cXFMrQFxcUytcXC5cXFMrLykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VtYWlsTm90VmFsaWQ6IHRydWUgfSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgVmFsaWQgRW1haWwgSWRcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9maWxlRG9iVmFsaWRhdGlvbihlKSB7XG4gICAgICAgIGxldCBkYXRhID0geyAuLi50aGlzLnByb3BzLnBhdGllbnQgfVxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvYjogZGF0YS5kb2IgPyBkYXRhLmRvYiA6IHRoaXMuc3RhdGUuZG9iIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kb2IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZG9iICE9IG51bGwgJiYgZGF0YS5kb2IgPT0gbnVsbCAmJiAhdGhpcy5zdGF0ZS5pc0RvYlZhbGlkYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBWYWxpZCBEYXRlIG9mIEJpcnRoXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzRG9iTm90VmFsaWQ6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZG9iID0gdGhpcy5zdGF0ZS5kb2JcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5vdHBWZXJpZnlTdWNjZXNzID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByb2ZpbGVEYXRhQ29tcGxldGVkKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZWRpdFVzZXJQcm9maWxlKGRhdGEsIHRoaXMucHJvcHMucGF0aWVudC5pZCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb2I6IG51bGwgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZG9iICYmICFkYXRhLmRvYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRG9iTm90VmFsaWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgRGF0ZSBvZiBCaXJ0aFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIChkYXRhKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGRhdGEuZW1haWwgPyBkYXRhLmVtYWlsIDogdGhpcy5zdGF0ZS5lbWFpbCwgZG9iOiBkYXRhLmRvYiA/IGRhdGEuZG9iIDogdGhpcy5zdGF0ZS5kb2IgfSwgKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRvYiAmJiB0aGlzLnN0YXRlLmVtYWlsKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRvYiAhPSBudWxsICYmIGRhdGEuZG9iID09IG51bGwgJiYgIXRoaXMuc3RhdGUuaXNEb2JWYWxpZGF0ZWQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgRGF0ZSBvZiBCaXJ0aFwiIH0pXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNFbWFpbE5vdFZhbGlkOiBmYWxzZSwgaXNEb2JOb3RWYWxpZDogZmFsc2UgfSlcbiAgICAgICAgLy8gICAgICAgICAgICAgZGF0YS5kb2IgPSB0aGlzLnN0YXRlLmRvYlxuICAgICAgICAvLyAgICAgICAgICAgICBkYXRhLmVtYWlsID0gdGhpcy5zdGF0ZS5lbWFpbFxuICAgICAgICAvLyAgICAgICAgICAgICBkYXRhLm90cFZlcmlmeVN1Y2Nlc3MgPSB0cnVlXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucHJvcHMucHJvZmlsZURhdGFDb21wbGV0ZWQoZGF0YSlcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5wcm9wcy5lZGl0VXNlclByb2ZpbGUoZGF0YSwgdGhpcy5wcm9wcy5wYXRpZW50LmlkLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvYjogbnVsbCwgZW1haWw6IG51bGwgfSlcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZW1haWwgJiYgIWRhdGEuZW1haWwpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VtYWlsTm90VmFsaWQ6IHRydWUgfSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgVmFsaWQgRW1haWwgSWRcIiB9KVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5kb2IgJiYgIWRhdGEuZG9iKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEb2JOb3RWYWxpZDogdHJ1ZSB9KVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciBEYXRlIG9mIEJpcnRoXCIgfSlcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBzZWxlY3REYXRlRnJvbUNhbGVuZGFyKGRhdGUpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7IC4uLnRoaXMucHJvcHMucGF0aWVudCB9XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS50b0RhdGUoKVxuICAgICAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUoZGF0ZSlcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgIC8qdGhpcy5zZXRTdGF0ZSh7IGRvYjogZGF0ZSwgZm9ybWF0dGVkRGF0ZTpmb3JtYXR0ZWREYXRlLCBkYXRlTW9kYWw6IGZhbHNlfSwoKT0+e1xuICAgICAgICAgICAgICAgIGRhdGEuZG9iID0gdGhpcy5zdGF0ZS5kb2IgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5lZGl0VXNlclByb2ZpbGUoZGF0YSwgdGhpcy5wcm9wcy5wYXRpZW50LmlkLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKi9cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb2I6IGRhdGUsIGZvcm1hdHRlZERhdGU6IGZvcm1hdHRlZERhdGUsIGRhdGVNb2RhbDogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzTmV3UGF0aWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVWYWxpZGF0aW9uKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVNb2RhbDogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZERhdGUoZGF0ZSkge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgICAgICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIHZhciB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBpZiAoZGQgPCAxMCkge1xuICAgICAgICAgICAgZGQgPSAnMCcgKyBkZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW0gPCAxMCkge1xuICAgICAgICAgICAgbW0gPSAnMCcgKyBtbTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG9kYXkgPSBkZCArICctJyArIG1tICsgJy0nICsgeXl5eTtcbiAgICAgICAgcmV0dXJuIHRvZGF5XG4gICAgfVxuXG4gICAgb3BlbkNhbGVuZGFyKGlzTmV3UGF0aWVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiB0cnVlLCBpc05ld1BhdGllbnQ6IGlzTmV3UGF0aWVudCB9KVxuICAgIH1cblxuICAgIHZlcmlmeShyZXNlbmRGbGFnID0gZmFsc2UsIHZpYVNtcywgdmlhV2hhdHNhcHApIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiXCIgfSlcblxuICAgICAgICAgICAgaWYgKHJlc2VuZEZsYWcpIHtcbiAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Jlc2VuZE90cCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Jlc2VuZC1vdHAnLCAnbW9iaWxlTm8nOiB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCAncGFnZVNvdXJjZSc6ICdCb29raW5nUGFnZScsICdtb2RlJzogdmlhU21zID8gJ3ZpYVNtcycgOiB2aWFXaGF0c2FwcCA/ICd2aWFXaGF0c2FwcCcgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnR2V0T3RwUmVxdWVzdCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2dldC1vdHAtcmVxdWVzdCcsICdtb2JpbGVObyc6IHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsICdwYWdlU291cmNlJzogJ0Jvb2tpbmdQYWdlJywgJ21vZGUnOiB2aWFTbXMgPyAndmlhU21zJyA6IHZpYVdoYXRzYXBwID8gJ3ZpYVdoYXRzYXBwJyA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMubm9uSXBkTGVhZHModGhpcy5zdGF0ZS5waG9uZU51bWJlcilcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE9UUCh0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB2aWFTbXMsIHZpYVdoYXRzYXBwLCAnYm9va2luZy1sb2dpbicsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3QgZ2VuZXJhdGUgT1RQLlwiIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICAgICAgLy9zZWxmLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIkNvdWxkIG5vdCBnZW5lcmF0ZSBPVFAuXCIgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAodmlhV2hhdHNhcHApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlT3RwUmVxdWVzdDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyBzaG93T3RwOiB0cnVlLCBzaG93VmVyaWZ5OiBmYWxzZSwgc21zQnRuVHlwZTogdmlhU21zID8gdHJ1ZSA6IGZhbHNlLCBzaG93TG9naW46dHJ1ZSxlbmFibGVPdHBSZXF1ZXN0OiB0cnVlLGVuYWJsZU90cFJlcXVlc3Q6IGZhbHNlLG90cFRpbWVvdXQ6IGZhbHNlIH0sKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXNlbmRPdHBDb3VudERvd24oKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBvdHBUaW1lb3V0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICAvLyB9LCAyMDAwMClcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlT3RwUmVxdWVzdDogZmFsc2Usb3RwVGltZW91dDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMucmVzZW5kT3RwQ291bnREb3duKClcbiAgICAgICAgICAgICAgICAgICAgLy8gfSwgNjAwMDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG51bWJlciAoMTAgZGlnaXRzKVwiIH0pXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBnZXROZXdEYXRlKHR5cGUsIG5ld0RhdGUsIGlzVmFsaWREb2IpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRvYjogbmV3RGF0ZSwgaXNEb2JWYWxpZGF0ZWQ6IGlzVmFsaWREb2IgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9maWxlVmFsaWRhdGlvbigpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZWRpdFBob25lTnVtYmVyKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dPdHA6ZmFsc2Usc2hvd0xvZ2luOmZhbHNlLG90cDpudWxsfSlcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ290cE1vYicpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgYWRkVXNlclByb2ZpbGUoKXsgLy9uZXcgbG9naWNcbiAgICAgICBpZiAoIXRoaXMuc3RhdGUubmFtZS5tYXRjaCgvXlthLXpBLVogXSskLykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZW50ZXIgcGF0aWVudCdzIG5hbWUuXCIgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiTmFtZSBzaG91bGQgb25seSBjb250YWluIGFscGhhYmV0cy5cIiB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZ2VuZGVyID09ICcnKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIFNlbGVjdCBUaGUgR2VuZGVyXCIgfSlcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW1haWwgPT0gJycpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgWW91ciBFbWFpbCBJZFwiIH0pXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5lbWFpbC5tYXRjaCgvXFxTK0BcXFMrXFwuXFxTKy8pKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFZhbGlkIEVtYWlsIElkXCIgfSlcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZG9iID09ICcnIHx8IHRoaXMuc3RhdGUuZG9iID09IG51bGwpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgRW50ZXIgVmFsaWQgRGF0ZSBvZiBCaXJ0aFwiIH0pXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRvYiAhPSBudWxsICYmICF0aGlzLnN0YXRlLmlzRG9iVmFsaWRhdGVkKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIFZhbGlkIERhdGUgb2YgQmlydGhcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gXG5cbiAgICAgICAgdGhpcy5wcm9wcy5wcm9maWxlRGF0YUNvbXBsZXRlZCh0aGlzLnN0YXRlKVxuICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZVByb2ZpbGUodGhpcy5zdGF0ZSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKCkudGhlbigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pc19sYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGVja1ByZXNjcmlwdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJUZXN0Rm9ySW5zdXJlZCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0RGF0YUFmdGVyTG9naW4oKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmlzX29wZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRFbWFpbE5vdGlmaWNhdGlvbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb2I6IG51bGwsIGVtYWlsOiBudWxsIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVzZW5kT3RwQ291bnREb3duKCl7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB2YXIgdGltZUxlZnQgPSAzMDtcbiAgICAgICAgdmFyIHRpbWVySWQgPSBzZXRJbnRlcnZhbChjb3VudGRvd24sIDEwMDApO1xuICAgICAgICBsZXQgdGltZUVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lRWxtJyk7XG4gICAgICAgIGZ1bmN0aW9uIGNvdW50ZG93bigpIHtcbiAgICAgICAgICBpZiAodGltZUxlZnQgPT0gMCkge1xuICAgICAgICAgICAgaWYodGltZUVsbSl7XG4gICAgICAgICAgICAgICAgdGltZUVsbS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe290cFRpbWVvdXQ6dHJ1ZX0pXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRpbWVFbG0pe1xuICAgICAgICAgICAgICAgIGlmKHRpbWVMZWZ0IDwgMTApe1xuICAgICAgICAgICAgICAgICAgICB0aW1lRWxtLmlubmVySFRNTCA9ICcwMDonKyAnMCcrdGltZUxlZnQ7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVFbG0uaW5uZXJIVE1MID0gJzAwOicrIHRpbWVMZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbWVMZWZ0LS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd2lkZ2V0IG1yYi0xNSAke3RoaXMucHJvcHMucHJvZmlsZUVycm9yID8gJ3JuZC1lcnJvci1ubScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PSBOZXcgTG9naW4gRmxvdyBTdGFydCA9PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5wYXRpZW50P1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgeyFTVE9SQUdFLmNoZWNrQXV0aCgpICYmICF0aGlzLnByb3BzLnBhdGllbnQ/XG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RwLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgZC1mbGV4IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIHlvdXIgbW9iaWxlIG51bWJlciB0byBwcm9jZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvdHAtc3ViLWhlYWRpbmdcIj5BcHBvaW50bWVudCBkZXRhaWxzIHdpbGwgYmUgc2VudCB0byB0aGlzIG51bWJlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdHAtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+IHsvKiA9PT09PT09PT09PT09PT09PT09IG90cCBzZWN0aW9uID09PT09PT09PT09PT09PT09PT0qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcmVxdWlyZWQgaWQ9XCJvdHBNb2JcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlQ29udGludWVQcmVzcy5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMucHJvZmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKX0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dPdHA/J2NsaWNrLWRpc2FibGUnOicnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdHBNb2JcIj5Nb2JpbGUgbnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd090cD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvdHAtZWRpdFwiIG9uQ2xpY2s9eyhlKSA9PntlLnByZXZlbnREZWZhdWx0KCk7IHRoaXMuZWRpdFBob25lTnVtYmVyKCl9fT5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93T3RwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcmVxdWlyZWQgaWQ9XCJvdHBOdW1iZXJcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBvbktleVByZXNzPXt0aGlzLmhhbmRsZU90cENvbnRpbnVlUHJlc3MuYmluZCh0aGlzKX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJvdHBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5vdHB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdHBOdW1iZXJcIj5FbnRlciA2IGRpZ2l0IE9UUDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RwLWVkaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVuYWJsZU90cFJlcXVlc3QgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ge2AgJHt0aGlzLnN0YXRlLm90cFRpbWVvdXQ/J290cC1yc25kLWFjdGl2ZSc6J290cC1yc25kIGNsaWNrLWRpc2FibGUnfWB9IG9uQ2xpY2s9eyhlKSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLnZlcmlmeSh0cnVlLCB0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyB0cnVlIDogZmFsc2UsICF0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyB0cnVlIDogZmFsc2UpfX0+UmVzZW5kPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3RwLXRpbWVyXCIgaWQ9XCJ0aW1lRWxtXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgZ2V0LW90cCAke3RoaXMuc3RhdGUub3RwVGltZW91dD8nb3RwLXJzbmQtYWN0aXZlJzonb3RwLXJzbmQgY2xpY2stZGlzYWJsZSd9YH0gb25DbGljaz17KGUpID0+IHtlLnByZXZlbnREZWZhdWx0KCk7IHRoaXMudmVyaWZ5KHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IGZhbHNlIDogdHJ1ZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IGZhbHNlIDogdHJ1ZSl9fT4ge3RoaXMuc3RhdGUuc21zQnRuVHlwZSA/ICdHZXQgT1RQIG9uIFdoYXRzYXBwJyA6ICdHZXQgT1RQIG9uIFNNUyd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge2BpbnB1dC1ib29raW5nLXNtc3dodHMgZC1mbGV4IGFsaWduLWZsZXgtc3AtYnQgIHNpbmdsZS1idG4gJHt0aGlzLnN0YXRlLnNob3dMb2dpbj8nb3RwTG9naW4nOicnfWB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2dpbj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm90cC1sb2dpbi1idG5cIiBvbkNsaWNrPXsoZSkgPT57ZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLnN1Ym1pdE9UUFJlcXVlc3QoKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJpbnB1dC1zbXMtd2h0c1wiIG9uQ2xpY2s9eyhlKSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLnZlcmlmeShmYWxzZSwgZmFsc2UsIHRydWUpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwid2h0c3AtaWNvXCIgc3JjPVwiL2Fzc2V0cy9pbWcvd2EtbG9nby1tYWluLnN2Z1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNXB4JyB9fSAvPkdldCBPVFAgb24gV2hhdHNhcHA8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbnB1dC1zbXMtdmVyIG1yLTBcIiBvbkNsaWNrPXsoZSkgPT4ge2UucHJldmVudERlZmF1bHQoKTsgdGhpcy52ZXJpZnkoZmFsc2UsIHRydWUsIGZhbHNlKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNtcy1pY29cIiBzcmM9XCIvYXNzZXRzL2ltZy9zbXNpY29uLnN2Z1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNXB4JyB9fSAvPkdldCBPVFAgb24gU01TPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwIGNsYXNzTmFtZT1cInd0c2FwcC1jaGstdHh0IG1iLTBcIiBzdHlsZT17e2ZvbnRTaXplOiAnMTBweCd9fT48aW1nIHN0eWxlPXt7d2lkdGg6JzEwcHgnfX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy90aWNrLnN2Zyd9IC8+IEVuYWJsZSBXaGF0c2FwcCBmb3Igc2VhbWxlc3MgY29tbXVuaWNhdGlvbjwvcD4gICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA6U1RPUkFHRS5jaGVja0F1dGgoKSAmJiAhdGhpcy5wcm9wcy5wYXRpZW50P1xuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90cC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGQtZmxleFwiPjxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIG1hcmdpblJpZ2h0OiAnOHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlBhdGllbnQgRGV0YWlsczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RwLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPiB7LyogPT09PT09PT09PT09PT09PT09PSBwYXRpZW50IGRldGFpbHMgc2VjdGlvbiA9PT09PT09PT09PT09PT09PT09Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwib3RwTW9idmVyXCIgY2xhc3NOYW1lPVwiY2xpY2stZGlzYWJsZVwiIHZhbHVlID0ge3RoaXMucHJvcHMudXNlcl9sb2dnZWRJbl9udW1iZXI/dGhpcy5wcm9wcy51c2VyX2xvZ2dlZEluX251bWJlcjp0aGlzLnN0YXRlLnBob25lTnVtYmVyP3RoaXMuc3RhdGUucGhvbmVOdW1iZXI6Jyd9IGF1dG9Db21wbGV0ZT1cIm9mZlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90cE1vYnZlclwiPk1vYmlsZSBudW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bS12ZXJpZmllZFwiPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jaGstZ3JlZW4uc3ZnJ30gLz4gVmVyaWZpZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ20nPydidG4tYWN0aXZlJzonJ31gfSBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ20nfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgJ2dlbmRlcic6ICdtJyB9KX0gb25CbHVyPXt0aGlzLnByb2ZpbGVWYWxpZGF0aW9uLmJpbmQodGhpcyl9Pk1hbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ2YnPydidG4tYWN0aXZlJzonJ31gfSBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ2YnfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgJ2dlbmRlcic6ICdmJyB9KX0gb25CbHVyPXt0aGlzLnByb2ZpbGVWYWxpZGF0aW9uLmJpbmQodGhpcyl9PkZlbWFsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBpZD1cInB0bnROYW1lXCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLnByb2ZpbGVWYWxpZGF0aW9uLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHRudE5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGRhdGUgc2VjdGlvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5ld0RhdGVTZWxlY3RvciB7Li4udGhpcy5wcm9wc30gZ2V0TmV3RGF0ZT17dGhpcy5nZXROZXdEYXRlLmJpbmQodGhpcyl9IGlzX2RvYl9lcnJvcj17dGhpcy5zdGF0ZS5pc19kb2JfZXJyb3J9IG9sZF9kb2I9e3RoaXMuc3RhdGUuZG9ifSBpc19zdW1tYXJ5PXtmYWxzZX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgaWQ9XCJwdG50RW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5wcm9maWxlVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIlwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInB0bnRFbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicHRudC1kdGxzLWNuZnJtXCIgb25DbGljaz17KGUpID0+e2UucHJldmVudERlZmF1bHQoKTsgdGhpcy5hZGRVc2VyUHJvZmlsZSgpfX0+Q29uZmlybTwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PSBwYXRpZW50IGRldGFpbHMgc2VjdGlvbiA9PT09PT09PT09PT09PT09PT09Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgOicnfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiLXZpc2l0LXRpbWUgZC1mbGV4IGpjLXNwYWNlYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC0xXCIgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHBhZGRpbmdSaWdodDogMTUgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBkLWZsZXhcIj48c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzIwcHgnLCBtYXJnaW5SaWdodDogJzhweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbnctdXNyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5QYXRpZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYmwtdmlldy1mb3JtYXR0aW5nIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGF0ZS10aW1lIHRpdGxlXCIgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnIH19ID57dGhpcy5wcm9wcy5wYXRpZW50ID8gdGhpcy5wcm9wcy5wYXRpZW50Lm5hbWUgOiBcIlwifSA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7KHRoaXMucHJvcHMuaXNfb3BkIHx8IHRoaXMucHJvcHMuaXNfbGFiKSAmJiAoIXRoaXMucHJvcHMucGF0aWVudC5lbWFpbCB8fCAhdGhpcy5wcm9wcy5wYXRpZW50LmRvYiApP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90cC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiF0aGlzLnByb3BzLnBhdGllbnQuZW1haWwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBpZD1cInB0bnRFbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLnByb2ZpbGVFbWFpbFZhbGlkYXRpb24uYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBzdHlsZT17KHRoaXMucHJvcHMuaXNFbWFpbE5vdFZhbGlkIHx8IHRoaXMuc3RhdGUuaXNFbWFpbE5vdFZhbGlkKSA/IHsgYm9yZGVyOiAnMXB4IHNvbGlkIHJlZCcgfSA6IHt9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHRudEVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJycqL1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5wYXRpZW50LmRvYj9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdEYXRlU2VsZWN0b3Igey4uLnRoaXMucHJvcHN9IGdldE5ld0RhdGU9e3RoaXMuZ2V0TmV3RGF0ZS5iaW5kKHRoaXMpfSBpc19kb2JfZXJyb3I9e3RoaXMuc3RhdGUuaXNfZG9iX2Vycm9yfSBvbGRfZG9iPXt0aGlzLnN0YXRlLmRvYn0gaXNfc3VtbWFyeT17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRvYiB8fCB0aGlzLnN0YXRlLmVtYWlsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIiBvbkNsaWNrPXt0aGlzLnByb2ZpbGVEb2JWYWxpZGF0aW9uLmJpbmQodGhpcyl9PlVwZGF0ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChwYXJzZWQgJiYgcGFyc2VkLmNvZF90b19wcmVwYWlkID09ICd0cnVlJykgPyAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3BhdGllbnQnLCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+e3RoaXMucHJvcHMucGF0aWVudCA/IFwiQ2hhbmdlIFBhdGllbnRcIiA6IFwiU2VsZWN0IFBhdGllbnRcIn08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93X2luc3VyYW5jZV9lcnJvciAmJiB0aGlzLnByb3BzLmluc3VyYW5jZV9lcnJvcl9tc2cgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneW4tdGV4dFwiPnt0aGlzLnByb3BzLmluc3VyYW5jZV9lcnJvcl9tc2d9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IC8vIG9sZCBsb2dpY1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBhdGllbnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImxhYi12aXNpdC10aW1lIGQtZmxleCBqYy1zcGFjZWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC0xXCIgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHBhZGRpbmdSaWdodDogMTUgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGQtZmxleFwiPjxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5QYXRpZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWJsLXZpZXctZm9ybWF0dGluZyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGF0ZS10aW1lIHRpdGxlXCIgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnIH19ID57dGhpcy5wcm9wcy5wYXRpZW50ID8gdGhpcy5wcm9wcy5wYXRpZW50Lm5hbWUgOiBcIlwifSA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKHRoaXMucHJvcHMuaXNfb3BkIHx8IHRoaXMucHJvcHMuaXNfbGFiKSAmJiAhdGhpcy5wcm9wcy5wYXRpZW50LmVtYWlsID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsdC1udy1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzbHQtbGFiZWxcIiBodG1sRm9yPVwibWFsZVwiPjxzdXAgY2xhc3NOYW1lPVwicmVxdWlyZWRBc3RcIj4qPC9zdXA+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2x0LXRleHQtaW5wdXRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLnByb2ZpbGVFbWFpbFZhbGlkYXRpb24uYmluZCh0aGlzKX0gc3R5bGU9eyh0aGlzLnByb3BzLmlzRW1haWxOb3RWYWxpZCB8fCB0aGlzLnN0YXRlLmlzRW1haWxOb3RWYWxpZCkgPyB7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCByZWQnIH0gOiB7fX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyp0aGlzLnByb3BzLmlzX2xhYiAmJiB0aGlzLnByb3BzLnBhdGllbnQuZG9iID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJiLTIwXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDI4IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzbHQtdGV4dC1pbnB1dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJkYXRlXCIgbmFtZT1cImRvYlwiIHZhbHVlPXt0aGlzLnN0YXRlLmRvYn0gb25DaGFuZ2U9e3RoaXMucHJvZmlsZURvYlZhbGlkYXRpb24uYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJEYXRlIG9mIEJpcnRoXCIgc3R5bGU9e3RoaXMucHJvcHMuaXNEb2JOb3RWYWxpZCA/IHsgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJlZCcgfSA6IHt9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKih0aGlzLnByb3BzLmlzX29wZCB8fCB0aGlzLnByb3BzLmlzX2xhYikgJiYgIXRoaXMucHJvcHMucGF0aWVudC5kb2I/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLnBhdGllbnQuZG9iID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2Itc3VtbWFyeS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRvYlwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkb2JcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1hdHRlZERhdGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkNhbGVuZGFyLmJpbmQodGhpcyxmYWxzZSl9IHJlcXVpcmVkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXsodGhpcy5wcm9wcy5pc0RvYk5vdFZhbGlkIHx8IHRoaXMuc3RhdGUuaXNEb2JOb3RWYWxpZCkgPyB7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCByZWQnIH0gOiB7fX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuZG9iPzxsYWJlbCBodG1sRm9yPVwiZG9iXCI+RGF0ZSBvZiBCaXJ0aDwvbGFiZWw+OicnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGVNb2RhbCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLW92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXI9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21vbWVudChuZXcgRGF0ZSgpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWREYXRlPXsoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZGlmZihtb21lbnQoKG5ldyBEYXRlKSksICdkYXlzJykgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9kYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuc2VsZWN0RGF0ZUZyb21DYWxlbmRhci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoodGhpcy5wcm9wcy5pc19vcGQgfHwgdGhpcy5wcm9wcy5pc19sYWIpICYmICF0aGlzLnByb3BzLnBhdGllbnQuZG9iID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2x0LW53LWlucHV0IHN1bW1lcnktZG9iLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2x0LWxhYmVsXCIgaHRtbEZvcj1cIm1hbGVcIj48c3VwIGNsYXNzTmFtZT1cInJlcXVpcmVkQXN0XCI+Kjwvc3VwPkRvYjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkb2ItaW5wdXQtc3ViXCI+ZGQvbW0veXl5eTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdEYXRlU2VsZWN0b3Igey4uLnRoaXMucHJvcHN9IGdldE5ld0RhdGU9e3RoaXMuZ2V0TmV3RGF0ZS5iaW5kKHRoaXMpfSBpc19kb2JfZXJyb3I9e3RoaXMuc3RhdGUuaXNfZG9iX2Vycm9yfSBvbGRfZG9iPXt0aGlzLnN0YXRlLmRvYn0gaXNfc3VtbWFyeT17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRvYiB8fCB0aGlzLnN0YXRlLmVtYWlsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCIgb25DbGljaz17dGhpcy5wcm9maWxlRG9iVmFsaWRhdGlvbi5iaW5kKHRoaXMpfT5VcGRhdGU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHBhcnNlZCAmJiBwYXJzZWQuY29kX3RvX3ByZXBhaWQgPT0gJ3RydWUnKSA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8oJ3BhdGllbnQnLCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj57dGhpcy5wcm9wcy5wYXRpZW50ID8gXCJDaGFuZ2UgUGF0aWVudFwiIDogXCJTZWxlY3QgUGF0aWVudFwifTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd19pbnN1cmFuY2VfZXJyb3IgJiYgdGhpcy5wcm9wcy5pbnN1cmFuY2VfZXJyb3JfbXNnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJneW4tdGV4dFwiPnt0aGlzLnByb3BzLmluc3VyYW5jZV9lcnJvcl9tc2d9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJsYWItdmlzaXQtdGltZSBkLWZsZXggamMtc3BhY2ViXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBkLWZsZXhcIj48c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlBhdGllbnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXB0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHQtbnctaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzbHQtbGFiZWxcIiBodG1sRm9yPVwibWFsZVwiPjxzdXAgY2xhc3NOYW1lPVwicmVxdWlyZWRBc3RcIj4qPC9zdXA+TmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNsdC10ZXh0LWlucHV0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMucHJvZmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHQtbnctaW5wdXQgcmFkaW8tbWJsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2x0LWxhYmVsXCIgaHRtbEZvcj1cIm1hbGVcIiA+PHN1cCBjbGFzc05hbWU9XCJyZXF1aXJlZEFzdFwiPio8L3N1cD5HZW5kZXI6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2x0LWxhYmVsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPk1hbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09ICdtJ30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7ICdnZW5kZXInOiAnbScgfSl9IG9uQmx1cj17dGhpcy5wcm9maWxlVmFsaWRhdGlvbi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+RmVtYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImdlbmRlclwiIHZhbHVlPVwibVwiIG5hbWU9XCJnZW5kZXJcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PSAnZid9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAnZ2VuZGVyJzogJ2YnIH0pfSBvbkJsdXI9e3RoaXMucHJvZmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPk90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImdlbmRlclwiIG5hbWU9XCJnZW5kZXJcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PSAnbyd9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAnZ2VuZGVyJzogJ28nIH0pfSBvbkJsdXI9e3RoaXMucHJvZmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2x0LW53LWlucHV0IHN1bW1lcnktZG9iLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzbHQtbGFiZWxcIiBodG1sRm9yPVwibWFsZVwiPjxzdXAgY2xhc3NOYW1lPVwicmVxdWlyZWRBc3RcIj4qPC9zdXA+RG9iOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZG9iLWlucHV0LXN1YlwiPmRkL21tL3l5eXk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5ld0RhdGVTZWxlY3RvciB7Li4udGhpcy5wcm9wc30gZ2V0TmV3RGF0ZT17dGhpcy5nZXROZXdEYXRlLmJpbmQodGhpcyl9IGlzX2RvYl9lcnJvcj17dGhpcy5zdGF0ZS5pc19kb2JfZXJyb3J9IG9sZF9kb2I9e3RoaXMuc3RhdGUuZG9ifSBpc19zdW1tYXJ5PXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHQtbnctaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzbHQtbGFiZWxcIiBodG1sRm9yPVwibWFsZVwiPjxzdXAgY2xhc3NOYW1lPVwicmVxdWlyZWRBc3RcIj4qPC9zdXA+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzbHQtdGV4dC1pbnB1dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMucHJvZmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHQtbnctaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzbHQtbGFiZWxcIiBodG1sRm9yPVwibWFsZVwiPjxzdXAgY2xhc3NOYW1lPVwicmVxdWlyZWRBc3RcIj4qPC9zdXA+TW9iaWxlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2x0LXRleHQtaW5wdXRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlQ29udGludWVQcmVzcy5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMucHJvZmlsZVZhbGlkYXRpb24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm9va2luZy1zbXN3aHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93VmVyaWZ5ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbnB1dC1zbXMtdmVyXCIgb25DbGljaz17KCkgPT4gdGhpcy52ZXJpZnkoZmFsc2UsIHRydWUsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzVweCcgfX0gY2xhc3NOYW1lPVwic21zLWljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvc21zaWNvbi5zdmcnfSAvPlZlcmlmeSBWaWEgU01TPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlucHV0LXNtcy13aHRzXCIgb25DbGljaz17KCkgPT4gdGhpcy52ZXJpZnkoZmFsc2UsIGZhbHNlLCB0cnVlKX0+PGltZyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzVweCcgfX0gY2xhc3NOYW1lPVwid2h0c3AtaWNvXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy93YS1sb2dvLWdyLnN2Zyd9IC8+VmVyaWZ5IFZpYSBXaGF0c2FwcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPdHAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2x0LW53LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2x0LWxhYmVsXCIgaHRtbEZvcj1cIm1hbGVcIj5PVFA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzbHQtdGV4dC1pbnB1dFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJudW1iZXJcIiBvbktleVByZXNzPXt0aGlzLmhhbmRsZU90cENvbnRpbnVlUHJlc3MuYmluZCh0aGlzKX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJvdHBcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE9UUCBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2JpbGUtZmlsbC1idG5cIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1zdGFydCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVzZW5kLW90cC1idG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnZlcmlmeSh0cnVlLCB0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyBmYWxzZSA6IHRydWUsICF0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyBmYWxzZSA6IHRydWUpfT57dGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gJ1NlbmQgdmlhIFdoYXRzYXBwJyA6ICdTZW5kIHZpYSBTTVMnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVuYWJsZU90cFJlcXVlc3QgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwicmVzZW5kLW90cC1idG5cIiBzdHlsZT17eyBjb2xvcjogJyNlYzBkMGQnIH19IG9uQ2xpY2s9eygpID0+IHRoaXMudmVyaWZ5KHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSl9PlJlc2VuZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2hvb3NlUGF0aWVudE5ld1ZpZXdcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwic291cmNlUm9vdCI6IiJ9