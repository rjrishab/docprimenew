(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

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

/***/ "./dev/js/components/commons/couponSelectionView/termsConditions.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/commons/couponSelectionView/termsConditions.js ***!
  \**************************************************************************/
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

var Terms = function (_React$Component) {
    _inherits(Terms, _React$Component);

    function Terms() {
        _classCallCheck(this, Terms);

        return _possibleConstructorReturn(this, (Terms.__proto__ || Object.getPrototypeOf(Terms)).apply(this, arguments));
    }

    _createClass(Terms, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("div", { className: "cancel-overlay", onClick: this.props.toggle }),
                _react2.default.createElement(
                    "div",
                    { className: "widget cancel-appointment-div cancel-popup" },
                    _react2.default.createElement(
                        "div",
                        { className: "widget-header text-center action-screen-header" },
                        _react2.default.createElement(
                            "p",
                            { className: "fw-500 cancel-appointment-head" },
                            "Terms & Conditions"
                        ),
                        _react2.default.createElement("hr", null)
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "terms-condition-div paypal-dtls-cont" },
                        _react2.default.createElement("p", { className: "terms-condition", dangerouslySetInnerHTML: { __html: this.props.tnc } })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "payment-content-btn text-center" },
                        _react2.default.createElement(
                            "button",
                            { className: "fw-500", onClick: this.props.toggle },
                            "Done"
                        )
                    )
                )
            );
        }
    }]);

    return Terms;
}(_react2.default.Component);

exports.default = Terms;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/UserProfileView.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/UserProfileView.js ***!
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

var _index = __webpack_require__(/*! ./profileData/index.js */ "./dev/js/components/commons/userProfile/profileData/index.js");

var _index2 = _interopRequireDefault(_index);

var _userAppointments = __webpack_require__(/*! ./userAppointments */ "./dev/js/components/commons/userProfile/userAppointments/index.js");

var _userAppointments2 = _interopRequireDefault(_userAppointments);

var _userFamily = __webpack_require__(/*! ./userFamily */ "./dev/js/components/commons/userProfile/userFamily/index.js");

var _userFamily2 = _interopRequireDefault(_userFamily);

var _editProfile = __webpack_require__(/*! ./editProfile */ "./dev/js/components/commons/userProfile/editProfile/index.js");

var _editProfile2 = _interopRequireDefault(_editProfile);

var _userAddress = __webpack_require__(/*! ./userAddress */ "./dev/js/components/commons/userProfile/userAddress/index.js");

var _userAddress2 = _interopRequireDefault(_userAddress);

var _add = __webpack_require__(/*! ./userAddress/add */ "./dev/js/components/commons/userProfile/userAddress/add/index.js");

var _add2 = _interopRequireDefault(_add);

var _userReports = __webpack_require__(/*! ./userReports */ "./dev/js/components/commons/userProfile/userReports/index.js");

var _userReports2 = _interopRequireDefault(_userReports);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _userPrescriptions = __webpack_require__(/*! ./userPrescriptions */ "./dev/js/components/commons/userProfile/userPrescriptions/index.js");

var _userPrescriptions2 = _interopRequireDefault(_userPrescriptions);

var _userCoupons = __webpack_require__(/*! ./userCoupons */ "./dev/js/components/commons/userProfile/userCoupons/index.js");

var _userCoupons2 = _interopRequireDefault(_userCoupons);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _userReviews = __webpack_require__(/*! ../../commons/userProfile/userReviews */ "./dev/js/components/commons/userProfile/userReviews/index.js");

var _userReviews2 = _interopRequireDefault(_userReviews);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section_Component = function Section_Component(_ref) {
    var children = _ref.children,
        title = _ref.title,
        history = _ref.history,
        logout = _ref.logout;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'section',
            { className: 'consumer-profile-screen' },
            _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        children
                    )
                )
            )
        )
    );
};

var UserProfileView = function (_React$Component) {
    _inherits(UserProfileView, _React$Component);

    function UserProfileView(props) {
        _classCallCheck(this, UserProfileView);

        var _this = _possibleConstructorReturn(this, (UserProfileView.__proto__ || Object.getPrototypeOf(UserProfileView)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(UserProfileView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$USER = this.props.USER,
                profiles = _props$USER.profiles,
                selectedProfile = _props$USER.selectedProfile;

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
                            profiles[selectedProfile] ? _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/', render: function render(props) {
                                        return _react2.default.createElement(
                                            Section_Component,
                                            _extends({}, _this2.props, { title: 'My Profile' }),
                                            _react2.default.createElement(_index2.default, _extends({}, _this2.props, props))
                                        );
                                    } }),
                                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/appointments', render: function render(props) {
                                        return _react2.default.createElement(
                                            Section_Component,
                                            _extends({}, _this2.props, { title: 'My Appointments' }),
                                            _react2.default.createElement(_userAppointments2.default, _extends({}, _this2.props, props))
                                        );
                                    } }),
                                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/family', render: function render(props) {
                                        return _react2.default.createElement(
                                            Section_Component,
                                            _extends({}, _this2.props, { title: 'My Family' }),
                                            _react2.default.createElement(_userFamily2.default, _extends({}, _this2.props, props))
                                        );
                                    } }),
                                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/address', render: function render(props) {
                                        return _react2.default.createElement(
                                            Section_Component,
                                            _extends({}, _this2.props, { title: 'Manage Address' }),
                                            _react2.default.createElement(_userAddress2.default, _extends({}, _this2.props, props))
                                        );
                                    } }),
                                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/address/add', render: function render(props) {
                                        return _react2.default.createElement(_add2.default, _extends({}, _this2.props, props));
                                    } }),
                                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/address/edit/:id', render: function render(props) {
                                        return _react2.default.createElement(_add2.default, _extends({}, _this2.props, props, { edit: true }));
                                    } }),
                                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/edit/:id', render: function render(props) {
                                        return _react2.default.createElement(_editProfile2.default, _extends({}, _this2.props, props));
                                    } }),
                                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/:type/reports/:id', render: function render(props) {
                                        return _react2.default.createElement(
                                            Section_Component,
                                            _extends({}, _this2.props, { title: props.match.params.type == 'opd' ? "Prescriptions" : "Lab Reports" }),
                                            _react2.default.createElement(_userReports2.default, _extends({}, _this2.props, props))
                                        );
                                    } }),
                                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/onlinePrescriptions', render: function render(props) {
                                        return _react2.default.createElement(_userPrescriptions2.default, _extends({}, _this2.props, props));
                                    } }),
                                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: this.props.match.url + '/coupons', render: function render(props) {
                                        return _react2.default.createElement(_userCoupons2.default, _extends({}, _this2.props, props));
                                    } })
                            ) : "",
                            profiles[selectedProfile] ? "" : _react2.default.createElement(_Loader2.default, null)
                        ),
                        _react2.default.createElement(_RightBar2.default, { noChatButton: true, extraClass: this.props.location.pathname.includes('/family') || this.props.location.pathname.includes('/address') ? " chat-float-btn-3" : this.props.location.pathname.includes('/edit') ? " chat-float-btn-2" : "" })
                    )
                ),
                _react2.default.createElement(_staticDisclaimer2.default, null)
            );
        }
    }]);

    return UserProfileView;
}(_react2.default.Component);

exports.default = UserProfileView;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/editProfile/EditProfile.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/editProfile/EditProfile.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _basic = __webpack_require__(/*! ./basic */ "./dev/js/components/commons/userProfile/editProfile/basic.js");

var _basic2 = _interopRequireDefault(_basic);

var _medical = __webpack_require__(/*! ./medical */ "./dev/js/components/commons/userProfile/editProfile/medical.js");

var _medical2 = _interopRequireDefault(_medical);

var _Loader = __webpack_require__(/*! ../../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _WhatsAppOptinView = __webpack_require__(/*! ../../WhatsAppOptin/WhatsAppOptinView.js */ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js");

var _WhatsAppOptinView2 = _interopRequireDefault(_WhatsAppOptinView);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditProfile = function (_React$Component) {
    _inherits(EditProfile, _React$Component);

    function EditProfile(props) {
        _classCallCheck(this, EditProfile);

        var _this = _possibleConstructorReturn(this, (EditProfile.__proto__ || Object.getPrototypeOf(EditProfile)).call(this, props));

        var profiles = _this.props.USER.profiles;

        var currentProfile = null;
        currentProfile = _extends({}, profiles[_this.props.match.params.id]);
        _this.state = {
            selectedTab: 0,
            profileData: currentProfile,
            loading: false,
            openCrop: false,
            errors: {},
            whatsapp_optin: false,
            isEmailVerified: false,
            isEmailUpdated: false,
            isEmailError: false,
            isDobValidated: false,
            is_dob_error: false,
            add_to_gold: _this.props.location.search.includes('add_to_gold=true') ? true : false,
            from_booking: _this.props.location.search.includes('from_booking=true') ? true : false
        };
        return _this;
    }

    _createClass(EditProfile, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var currentProfile = null;
            if (this.props.USER && this.props.USER.profiles && Object.keys(this.props.USER.profiles).length) {
                currentProfile = _extends({}, this.props.USER.profiles[this.props.match.params.id]);
                this.setState({ profileData: currentProfile, isDobValidated: currentProfile.dob ? true : false, whatsapp_optin: currentProfile.whatsapp_optin });
            }
        }
    }, {
        key: 'toggleOpenCrop',
        value: function toggleOpenCrop() {
            this.setState({ openCrop: !this.state.openCrop });
        }
    }, {
        key: 'manageAddress',
        value: function manageAddress() {
            this.props.history.push('/user/address');
        }
    }, {
        key: 'toggleWhatsap',
        value: function toggleWhatsap(status, e) {
            this.setState({ whatsapp_optin: status });
        }
    }, {
        key: 'getComp',
        value: function getComp() {
            if (this.state.loading) {
                return _react2.default.createElement(_Loader2.default, null);
            }
            var self = this;
            var show_default_checkBox = true;
            var is_profile_editable = true;
            var gold_user_profile = {};
            var default_profile = {};
            if (this.props.USER && this.props.USER.profiles) {
                if (Object.keys(this.props.USER.profiles).length > 0) {
                    Object.entries(this.props.USER.profiles).map(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            key = _ref2[0],
                            value = _ref2[1];

                        if (show_default_checkBox && value.is_insured) {
                            show_default_checkBox = false;
                        }
                        if (value.is_default_user) {
                            default_profile = value;
                        }
                        if (self.state.profileData) {
                            if (value.id == self.state.profileData.id && value.is_insured) {
                                is_profile_editable = false;
                            }
                        }
                        if (value.is_vip_gold_member) {
                            gold_user_profile = value;
                        }
                    });
                }
            }

            switch (this.state.selectedTab) {
                case 0:
                    {
                        return _react2.default.createElement(
                            'div',
                            { style: { marginBottom: '60px' } },
                            _react2.default.createElement(_basic2.default, _extends({}, this.props, {
                                manageAddress: this.manageAddress.bind(this),
                                profileData: this.state.profileData,
                                updateProfile: this.updateProfile.bind(this),
                                proceedUpdate: this.proceedUpdate.bind(this),
                                errors: this.state.errors,
                                toggleOpenCrop: this.toggleOpenCrop.bind(this),
                                show_default_checkBox: show_default_checkBox,
                                isEmailError: this.state.isEmailError,
                                verifyEndorsementEmail: this.verifyEndorsementEmail.bind(this),
                                is_profile_editable: is_profile_editable,
                                is_dob_error: this.state.is_dob_error,
                                gold_user_profile: gold_user_profile,
                                add_to_gold: this.state.add_to_gold,
                                addToGold: this.addToGold.bind(this),
                                default_profile: default_profile
                            })),
                            _react2.default.createElement(_WhatsAppOptinView2.default, _extends({}, this.props, {
                                toggleWhatsap: this.toggleWhatsap.bind(this),
                                profiles: this.state.profileData
                            }))
                        );
                    }
                case 1:
                    {
                        return _react2.default.createElement(_medical2.default, null);
                    }
            }
        }
    }, {
        key: 'addToGold',
        value: function addToGold(value) {
            this.setState({ add_to_gold: value });
        }
    }, {
        key: 'updateProfile',
        value: function updateProfile(key, value, isDobValidated) {
            this.state.profileData[key] = value;
            if (key == 'dob') {
                this.setState({ isDobValidated: isDobValidated });
            }
            this.setState({ profileData: this.state.profileData });
        }
    }, {
        key: 'verifyEndorsementEmail',
        value: function verifyEndorsementEmail(newemail, verified, is_email_changed) {
            this.state.profileData['email'] = newemail;
            this.setState({ profileData: this.state.profileData });
            if (verified) {
                this.setState({ isEmailUpdated: verified, isEmailVerified: is_email_changed });
            } else {
                this.setState({ isEmailUpdated: verified, isEmailVerified: is_email_changed });
            }
        }
    }, {
        key: 'proceedUpdate',
        value: function proceedUpdate(e) {
            var _this2 = this;

            // update profile
            e.stopPropagation();
            e.preventDefault();

            var errors = {};
            var vals = ['email', 'phone_number', 'dob'];
            vals.map(function (field) {
                var validated = true;
                if (_this2.state.profileData.dob == null && !_this2.state.isDobValidated) {
                    validated = true;
                    errors['dob'] = !validated;
                    return;
                }
                switch (field) {
                    case "phone_number":
                        {
                            if (!_this2.state.profileData[field]) {
                                validated = true;
                                errors[field] = !validated;
                                return;
                            } else {
                                validated = _this2.state.profileData[field].toString().match(/^[56789]{1}[0-9]{9}$/);
                                errors[field] = !validated;
                            }
                            break;
                        }
                    case "email":
                        {
                            // if (!this.state.profileData[field]) {
                            //     validated = false
                            //     errors[field] = !validated
                            //     return
                            // } else {
                            //     validated = this.state.profileData[field].match(/\S+@\S+\.\S+/)
                            //     errors[field] = !validated
                            // }
                            // break
                        }
                    default:
                        {
                            validated = true;
                            errors[field] = !validated;
                            break;
                        }
                }
            });

            this.setState({ errors: errors }, function () {
                var validated = true;
                for (var key in _this2.state.errors) {
                    if (_this2.state.errors[key]) {
                        validated = false;
                    }
                }
                if (!_this2.state.isEmailUpdated && _this2.state.isEmailVerified) {
                    _this2.setState({ isEmailError: true });
                    return;
                }

                if (!_this2.state.isDobValidated) {
                    _this2.setState({ is_dob_error: true });
                    validated = false;
                    return;
                }
                if (!_this2.state.profileData.gender) {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: 'Please select gender' });
                    validated = false;
                    return;
                }
                if (validated) {
                    _this2.setState({ loading: true });
                    _this2.state.profileData.whatsapp_optin = _this2.state.whatsapp_optin == null ? true : _this2.state.whatsapp_optin;
                    _this2.state.profileData.add_to_gold = _this2.state.add_to_gold;
                    _this2.props.editUserProfile(_this2.state.profileData, _this2.state.profileData.id, function (err, data) {
                        // update profile
                        _this2.setState({ loading: false });
                        if (err) {
                            if (err.message) {
                                setTimeout(function () {
                                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: err.message });
                                }, 500);
                                return;
                            }
                        }
                        _this2.props.resetVipData();
                        if (_this2.state.from_booking) {
                            _this2.props.history.go(-2);
                        } else {
                            _this2.props.history.go(-1);
                        }
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.getComp(),
                this.state.openCrop ? "" : _react2.default.createElement(
                    'button',
                    { onClick: this.proceedUpdate.bind(this), className: 'fixed p-3 horizontal bottom v-btn v-btn-primary no-round btn-lg text-center static-btn' },
                    '' + (this.state.from_booking ? 'Continue Booking' : 'Update Profile')
                )
            );
        }
    }]);

    return EditProfile;
}(_react2.default.Component);

exports.default = EditProfile;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/editProfile/basic.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/editProfile/basic.js ***!
  \********************************************************************/
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

var _reactCropper = __webpack_require__(/*! react-cropper */ "./node_modules/react-cropper/dist/react-cropper.js");

var _reactCropper2 = _interopRequireDefault(_reactCropper);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _Loader = __webpack_require__(/*! ../../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "./node_modules/rc-calendar/es/index.js");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _verifyEmail = __webpack_require__(/*! ../../../insurance/verifyEmail.js */ "./dev/js/components/insurance/verifyEmail.js");

var _verifyEmail2 = _interopRequireDefault(_verifyEmail);

var _newDateSelector = __webpack_require__(/*! ../../newDateSelector.js */ "./dev/js/components/commons/newDateSelector.js");

var _newDateSelector2 = _interopRequireDefault(_newDateSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Compress = __webpack_require__(/*! compress.js */ "./node_modules/compress.js/index.js");

var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var BasicDetails = function (_React$Component) {
    _inherits(BasicDetails, _React$Component);

    function BasicDetails(props) {
        _classCallCheck(this, BasicDetails);

        var _this = _possibleConstructorReturn(this, (BasicDetails.__proto__ || Object.getPrototypeOf(BasicDetails)).call(this, props));

        _this.state = {
            dataUrl: null,
            loading: false,
            formattedDate: '',
            is_default_user: _this.props.profileData.is_default_user
        };
        return _this;
    }

    _createClass(BasicDetails, [{
        key: 'handleChange',
        value: function handleChange(key, e) {
            this.props.updateProfile(key, e.target.value);
        }
    }, {
        key: 'handleGender',
        value: function handleGender(val) {
            this.props.updateProfile('gender', val);
        }
    }, {
        key: 'pickFile',
        value: function pickFile(e) {
            var _this2 = this;

            if (e.target.files && e.target.files[0]) {
                var compress = new Compress();
                var file = e.target.files[0];
                compress.compress([file], {
                    quality: 1,
                    maxWidth: 1000,
                    maxHeight: 1000
                }).then(function (results) {
                    var img1 = results[0];
                    var base64str = img1.data;
                    var imgExt = img1.ext;
                    var file = Compress.convertBase64ToFile(base64str, imgExt);
                    _this2.getBase64(file, function (dataUrl) {
                        _this2.props.toggleOpenCrop();
                        _this2.setState({ dataUrl: dataUrl });
                    });
                }).catch(function (e) {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Error uploading image." });
                });
            }
        }
    }, {
        key: 'getBase64',
        value: function getBase64(file, cb) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                cb(reader.result);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
    }, {
        key: 'finishCrop',
        value: function finishCrop(e) {
            var _this3 = this;

            e.stopPropagation();
            e.preventDefault();
            var file_blob_data = this.dataURItoBlob(this.refs.cropper.getCroppedCanvas().toDataURL());
            this.setState({
                dataUrl: null,
                loading: true
            }, function () {
                _this3.props.toggleOpenCrop();
                // document.getElementById('imageFilePicker').value = ""
                var form_data = new FormData();
                form_data.append("profile_image", file_blob_data, "imageFilename.jpeg");
                _this3.props.editUserProfileImage(form_data, _this3.props.profileData.id, function (err, data) {
                    _this3.setState({ loading: false });
                    _this3.props.history.go(-1);
                });
            });
        }
    }, {
        key: 'dataURItoBlob',
        value: function dataURItoBlob(dataURI) {
            var binary = atob(dataURI.split(',')[1]);
            var array = [];
            for (var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
        }
    }, {
        key: 'handleEnterPress',
        value: function handleEnterPress(e) {
            if (e.key === 'Enter') {
                this.props.proceedUpdate(e);
            }
        }
    }, {
        key: 'openCalendar',
        value: function openCalendar() {
            this.setState({ dateModal: true });
        }
    }, {
        key: 'selectDateFromCalendar',
        value: function selectDateFromCalendar(date) {
            if (date) {
                date = date.toDate();
                var formattedDate = this.getFormattedDate(date);
                date = new Date(date).toISOString().split('T')[0];
                this.setState({ formattedDate: formattedDate, dateModal: false });
                this.props.updateProfile('dob', formattedDate);
            } else {
                this.setState({ dateModal: false });
            }
        }
    }, {
        key: 'getFormattedDate',
        value: function getFormattedDate(date) {
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
    }, {
        key: 'handleDefaultUser',
        value: function handleDefaultUser(value) {
            this.setState({ 'is_default_user': value });
            this.props.updateProfile('is_default_user', value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$profileData = this.props.profileData,
                name = _props$profileData.name,
                email = _props$profileData.email,
                gender = _props$profileData.gender,
                phone_number = _props$profileData.phone_number,
                profile_image = _props$profileData.profile_image,
                id = _props$profileData.id,
                dob = _props$profileData.dob;

            profile_image = profile_image || "/assets" + "/img/customer-icons/user.png";
            return _react2.default.createElement(
                'section',
                { className: 'myProfile profile-details mrb-15 ' + (this.props.is_profile_editable ? '' : 'click-disable') },
                this.state.loading ? "" : _react2.default.createElement(
                    'div',
                    { className: 'widget no-shadow no-radius' },
                    _react2.default.createElement(
                        'div',
                        { className: 'widget-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'profile-icon' },
                            _react2.default.createElement('img', { src: profile_image, style: { width: '100%', cursor: 'pointer' }, className: 'img-fluid img-round', onClick: function onClick() {
                                    document.getElementById('imageFilePicker').click();
                                    document.getElementById('imageFilePicker').value = "";
                                } }),
                            _react2.default.createElement(
                                'span',
                                { className: 'cam-icon' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/icons/cam-md.png", className: 'img-fluid cam-icon-img', onClick: function onClick() {
                                        document.getElementById('imageFilePicker').click();
                                        document.getElementById('imageFilePicker').value = "";
                                    } }),
                                _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, id: 'imageFilePicker', onChange: this.pickFile.bind(this) })
                            )
                        )
                    )
                ),
                this.state.loading ? _react2.default.createElement(_Loader2.default, null) : _react2.default.createElement(
                    'div',
                    { className: 'widget no-shadow no-radius' },
                    _react2.default.createElement(
                        'div',
                        { className: 'widget-content' },
                        _react2.default.createElement(
                            'form',
                            { className: 'go-bottom' },
                            _react2.default.createElement(
                                'div',
                                { className: 'd-flex mb-3' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'label-names-buttons ' + (gender == 'm' ? 'btn-active' : ''), name: 'gender', checked: gender == 'm', onClick: this.handleGender.bind(this, "m") },
                                    'Male'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'label-names-buttons ' + (gender == 'f' ? 'btn-active' : ''), name: 'gender', checked: gender == 'f', onClick: this.handleGender.bind(this, 'f') },
                                    'Female'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'labelWrap' },
                                _react2.default.createElement('input', { value: name, onChange: this.handleChange.bind(this, 'name'), id: 'fname', className: 'fc-input', name: 'fname', type: 'text', required: true, onKeyPress: this.handleEnterPress.bind(this) }),
                                _react2.default.createElement(
                                    'label',
                                    { htmlFor: 'fname' },
                                    'Name'
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
                                        defaultValue: moment(dob == null ? new Date() : dob),
                                        disabledDate: function disabledDate(date) {
                                            return date.diff(moment(new Date()), 'days') > -1;
                                        },
                                        showToday: true,
                                        onSelect: this.selectDateFromCalendar.bind(this)
                                    })
                                )
                            ) : "",
                            _react2.default.createElement(_newDateSelector2.default, _extends({}, this.props, { getNewDate: this.props.updateProfile.bind(this), old_dob: dob })),
                            this.props.default_profile && Object.keys(this.props.default_profile).length && this.props.default_profile.is_default_user && this.props.default_profile.id == this.props.profileData.id ? _react2.default.createElement(_verifyEmail2.default, _extends({}, this.props, { member_id: this.props.profileData, email: email, validateErrors: [] })) : '',
                            this.props.default_profile && Object.keys(this.props.default_profile).length && this.props.default_profile.is_default_user && this.props.default_profile.id == this.props.profileData.id ? _react2.default.createElement(
                                'div',
                                { className: 'labelWrap' },
                                _react2.default.createElement('input', { value: phone_number || "", onChange: this.handleChange.bind(this, 'phone_number'), id: 'number', name: 'lname', type: 'text', className: this.props.errors['phone_number'] ? 'errorColorBorder' : "", required: true, onKeyPress: this.handleEnterPress.bind(this) }),
                                _react2.default.createElement(
                                    'label',
                                    { htmlFor: 'number' },
                                    'Mobile Number'
                                )
                            ) : ''
                        ),
                        this.props.gold_user_profile && Object.keys(this.props.gold_user_profile).length && this.props.gold_user_profile.vip_data && Object.keys(this.props.gold_user_profile.vip_data).length && this.props.gold_user_profile.vip_data.total_members_allowed > 0 && !this.props.profileData.is_vip_gold_member && this.props.gold_user_profile.vip_data.is_member_allowed ? _react2.default.createElement(
                            'div',
                            { className: 'defaultProfile' },
                            _react2.default.createElement(
                                'label',
                                { className: 'ck-bx add-member-chkbx' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Add this member to Docprime',
                                    _react2.default.createElement('img', { className: 'ml-2', width: '35', src: 'https://cdn.docprime.com/cp/assets/img/gold-lg.png', alt: 'gold' })
                                ),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'profile-warning-text' },
                                    'Once added to gold, you cannont edit or remove the member'
                                ),
                                _react2.default.createElement('input', { type: 'checkbox', onClick: this.props.addToGold.bind(this, !this.props.add_to_gold), checked: this.props.add_to_gold }),
                                _react2.default.createElement('span', { className: 'checkmark' })
                            )
                        ) : '',
                        this.props.show_default_checkBox ? _react2.default.createElement(
                            'div',
                            { className: 'defaultProfile' },
                            _react2.default.createElement(
                                'label',
                                { className: 'ck-bx add-member-chkbx' },
                                'Make Primary Profile',
                                _react2.default.createElement('input', { type: 'checkbox', onClick: this.handleDefaultUser.bind(this, !this.state.is_default_user), checked: this.state.is_default_user }),
                                _react2.default.createElement('span', { className: 'checkmark' })
                            )
                        ) : '',
                        this.props.is_profile_editable ? '' : _react2.default.createElement(
                            'span',
                            null,
                            '*Details of the profiles which are covered under insurance cannot be updated'
                        )
                    )
                ),
                this.state.dataUrl ? _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_reactCropper2.default, {
                        ref: 'cropper',
                        src: this.state.dataUrl,
                        style: { "height": "100%", "width": "100%", "maxWidth": "600px", "position": "fixed", "left": "50%", "top": "50%", "zIndex": "999999", "transform": "translate(-50%, -50%)" },
                        aspectRatio: 1 / 1,
                        cropBoxResizable: false,
                        viewMode: 2,
                        dragMode: 'move',
                        modal: true,
                        guides: true,
                        background: false
                    }),
                    _react2.default.createElement(
                        'a',
                        { style: { zIndex: 9999999 }, href: '#', onClick: this.finishCrop.bind(this), className: 'fixed horizontal bottom v-btn v-btn-primary no-round btn-lg text-center update-profile-img-btn' },
                        'Update Profile Image'
                    )
                ) : ""
            );
        }
    }]);

    return BasicDetails;
}(_react2.default.Component);

exports.default = BasicDetails;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/editProfile/index.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/editProfile/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EditProfile = __webpack_require__(/*! ./EditProfile */ "./dev/js/components/commons/userProfile/editProfile/EditProfile.js");

var _EditProfile2 = _interopRequireDefault(_EditProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _EditProfile2.default;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/editProfile/medical.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/editProfile/medical.js ***!
  \**********************************************************************/
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

var MedicalDetails = function (_React$Component) {
    _inherits(MedicalDetails, _React$Component);

    function MedicalDetails(props) {
        _classCallCheck(this, MedicalDetails);

        return _possibleConstructorReturn(this, (MedicalDetails.__proto__ || Object.getPrototypeOf(MedicalDetails)).call(this, props));
    }

    _createClass(MedicalDetails, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "section",
                { className: "myProfile profile-details" },
                _react2.default.createElement(
                    "div",
                    { className: "widget-panel" },
                    _react2.default.createElement(
                        "h4",
                        { className: "panel-title" },
                        "Medical History"
                    ),
                    _react2.default.createElement("div", { className: "panel-content pd-0" })
                )
            );
        }
    }]);

    return MedicalDetails;
}(_react2.default.Component);

exports.default = MedicalDetails;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/index.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/userProfile/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserProfileView = __webpack_require__(/*! ./UserProfileView.js */ "./dev/js/components/commons/userProfile/UserProfileView.js");

var _UserProfileView2 = _interopRequireDefault(_UserProfileView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _UserProfileView2.default;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/profileData/ProfileData.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/profileData/ProfileData.js ***!
  \**************************************************************************/
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

var _termsConditions = __webpack_require__(/*! ../../couponSelectionView/termsConditions.js */ "./dev/js/components/commons/couponSelectionView/termsConditions.js");

var _termsConditions2 = _interopRequireDefault(_termsConditions);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _config = __webpack_require__(/*! ../../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileData = function (_React$Component) {
    _inherits(ProfileData, _React$Component);

    function ProfileData(props) {
        _classCallCheck(this, ProfileData);

        var _this = _possibleConstructorReturn(this, (ProfileData.__proto__ || Object.getPrototypeOf(ProfileData)).call(this, props));

        _this.state = {
            openTermsConditions: false
        };
        return _this;
    }

    _createClass(ProfileData, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'gotTo',
        value: function gotTo(where) {
            this.props.history.push('/user/' + where);
        }
    }, {
        key: 'toggleTandC',
        value: function toggleTandC() {
            this.setState({ openTermsConditions: !this.state.openTermsConditions });
        }
    }, {
        key: 'searchLab',
        value: function searchLab(coupon) {
            this.props.setCorporateCoupon(coupon);
            this.props.clearExtraTests();

            var test_ids = [];
            var network_id = "";
            if (coupon && coupon.tests) {
                test_ids = coupon.tests;
            }
            if (coupon && coupon.network_id) {
                network_id = coupon.network_id;
            }
            window.location.href = '/lab/searchresults?test_ids=' + test_ids.join(',') + '&network_id=' + network_id;
        }
    }, {
        key: 'isDocCare',
        value: function isDocCare() {
            // redirect to care page or to care dashboard
            if (this.props.isUserCared && this.props.isUserCared.has_active_plan) {
                this.props.history.push('/prime/success?user_plan=' + this.props.isUserCared.user_plan_id);
            } else {
                this.props.history.push('/prime/plans');
            }
        }
    }, {
        key: 'goToInsurance',
        value: function goToInsurance(isUserLoginInsured) {
            // redirect to insurance plan page or to insured dashboard
            if (isUserLoginInsured) {
                if (this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].insurance_status == 1 || this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].insurance_status == 4 || this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].insurance_status == 5) {
                    this.props.history.push('/insurance/certificate');
                } else {
                    this.props.history.push('/insurance/insurance-plans?source=profile-insurance-clicked');
                }
            } else {
                this.props.generateInsuranceLead();
                this.props.history.push('/insurance/insurance-plans?source=profile-insurance-clicked');
            }
        }
    }, {
        key: 'getInsuranceBtnText',
        value: function getInsuranceBtnText() {
            // set button text as person user policy status active/inactive/ cancelled
            var isUserLoginInsured = this.props.USER.profiles && this.props.USER.defaultProfile && this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].is_default_user ? this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].is_default_user : false;
            if (isUserLoginInsured) {
                if (this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].insurance_status == 1 || this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].insurance_status == 4 || this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].insurance_status == 5) {
                    return _react2.default.createElement(
                        'button',
                        { className: 'ins-userdetails-active' },
                        'Active'
                    );
                } else {
                    return _react2.default.createElement(
                        'button',
                        { className: 'ins-userdetails-buy' },
                        'Buy Now'
                    );
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var currentRoomId = this.props.USER.currentRoomId;
            var coupon = null;
            var memberClass = 'float-right ins-userdetails-buy';
            var memStatus = 'New';
            if (this.props.applicableCoupons && this.props.applicableCoupons.length) {
                coupon = this.props.applicableCoupons[0];
            }

            var isUserLoginInsured = this.props.USER.profiles && this.props.USER.defaultProfile && this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].is_default_user ? this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].is_default_user : false;

            if (this.props.isUserCared && this.props.isUserCared.has_active_plan) {
                memberClass = 'float-right ins-userdetails-active';
                memStatus = 'Active';
            }

            var is_care = false;
            var care_user_profile = {};

            var defaultProfile = this.props.USER.profiles && this.props.USER.defaultProfile && this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)] ? this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)] : null;

            if (this.props.USER.profiles && Object.keys(this.props.USER.profiles).length) {
                Object.entries(this.props.USER.profiles).map(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        value = _ref2[1];

                    if (value.is_care) {
                        care_user_profile = value;
                    }
                });
                if (care_user_profile && Object.keys(care_user_profile).length) {
                    is_care = true;
                }
            }

            return _react2.default.createElement(
                'div',
                { className: 'widget no-round no-shadow skin-transparent profile-nav new-profile-header-margin' },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-content padding-remove' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'list nav-items dp-user-list bg-lst' },
                        _react2.default.createElement(
                            'li',
                            { className: 'my-profile-item padding-remove' },
                            _react2.default.createElement(
                                'p',
                                { className: 'usr-dtls-name pdng-usr-dtls-slots' },
                                'Welcome to Docprime' + (this.props.USER.userName ? ', ' + this.props.USER.userName + '! ' : '') + ' '
                            ),
                            defaultProfile && defaultProfile.is_vip_gold_member && defaultProfile.vip_data ? _react2.default.createElement(
                                'div',
                                { className: 'gold-white-bg-container card-container m-0', onClick: function onClick() {
                                        return _this2.props.history.push('/vip-club-activated-details');
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'gold-card-section' },
                                    _react2.default.createElement('img', { className: 'vipLogiImg-2 pd-12', style: { paddingBottom: 7 }, src: '/assets/img/docgold.png', width: '80px' }),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'gold-card-user text-right text-white pd-12', style: { paddingTop: 0 } },
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            defaultProfile.name
                                        ),
                                        _react2.default.createElement(
                                            'h6',
                                            null,
                                            '(Primary)'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'membership-validity-column pd-12 text-black text-center' },
                                        _react2.default.createElement(
                                            'h4',
                                            null,
                                            'Docprime Gold Member'
                                        ),
                                        _react2.default.createElement(
                                            'h6',
                                            null,
                                            'Valid till ',
                                            _react2.default.createElement(
                                                'strong',
                                                null,
                                                defaultProfile.vip_data.expiry_date || '',
                                                ' '
                                            )
                                        )
                                    )
                                )
                            ) : _react2.default.createElement(
                                'div',
                                { className: 'usr-dtls-startup' },
                                _react2.default.createElement(
                                    _react2.default.Fragment,
                                    null,
                                    defaultProfile && (defaultProfile.insurance_status == 1 || defaultProfile.insurance_status == 4 || defaultProfile.insurance_status == 5 || defaultProfile.is_vip_member) ? '' : _react2.default.createElement(
                                        'div',
                                        { className: 'usr-dtls-strt-txt pdng-usr-dtls-slots ' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'fw-500' },
                                            'Become a Docprime ',
                                            _react2.default.createElement('img', { style: { width: '40px' }, src: "/assets" + "/img/gold-sm.png", className: 'img-fluid mr-0' }),
                                            ' member and get Discounts like never before'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'gold-benifi-cards-cont pdng-usr-dtls-slots mb-3 pr-0', style: { paddingLeft: '8px' } },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'gold-benifi-cards', onClick: function onClick(e) {

                                                    var data = {
                                                        'Category': 'ConsumerApp', 'Action': 'FindDoctorsProfileClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'find-doctors-profile-clicked'
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });
                                                    _this2.props.clearVipSelectedPlan(); // reset gld or vip store to default state
                                                    _this2.props.history.push('/vip-gold-details?is_gold=true&source=user-profile-page');
                                                } },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/gl1.png' }),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Exclusive price on',
                                                _react2.default.createElement('br', null),
                                                _react2.default.createElement(
                                                    'strong',
                                                    null,
                                                    '30,000'
                                                ),
                                                ' Doctors'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'gold-benifi-cards', onClick: function onClick(e) {
                                                    var data = {
                                                        'Category': 'ConsumerApp', 'Action': 'BookTestsProfileClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'book-tests-profile-clicked'
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });
                                                    _this2.props.clearVipSelectedPlan(); // reset gld or vip store to default state
                                                    _this2.props.history.push('/vip-gold-details?is_gold=true&source=user-profile-page');
                                                } },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/gl2.png' }),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Discounts on ',
                                                _react2.default.createElement('br', null),
                                                _react2.default.createElement(
                                                    'strong',
                                                    null,
                                                    '5,000'
                                                ),
                                                ' Labs'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'gold-benifi-cards', onClick: function onClick(e) {
                                                    var data = {
                                                        'Category': 'ConsumerApp', 'Action': 'SaveMedicinesProfileClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'save-medicines-profile-clicked'
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });
                                                    _this2.props.clearVipSelectedPlan(); // reset gld or vip store to default state
                                                    _this2.props.history.push('/all-medicines');
                                                } },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/medlife-med.png' }),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                ' Save 23% ',
                                                _react2.default.createElement('br', null),
                                                ' on medicines'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        coupon ? _react2.default.createElement(
                            'li',
                            { className: 'my-profile-item', style: { cursor: 'auto' } },
                            _react2.default.createElement(
                                'div',
                                { className: 'usr-dtls-off-act' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'usr-dtls-strt-txt' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/stmp.svg", className: 'img-fluid' }),
                                    'OFFERS'
                                ),
                                coupon.is_corporate ? _react2.default.createElement(
                                    'span',
                                    { onClick: this.searchLab.bind(this, coupon), className: 'usr-dtls-plan-act' },
                                    'Avail Now ',
                                    _react2.default.createElement('img', { style: { height: '10px' }, src: "/assets" + "/img/customer-icons/rgt-arw.svg", className: 'img-fluid' })
                                ) : ""
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'ofr-img-txt' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'box-img-cont' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/vector-smart-object.png", className: 'img-fluid' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'ofr-contnt' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'ofr-bkg' },
                                        _react2.default.createElement(
                                            'b',
                                            { className: 'fw-500 drk-blk' },
                                            coupon.heading
                                        ),
                                        ' ',
                                        coupon.desc
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'mrt-10', style: { color: '#757575' } },
                                            'Use Coupon : ',
                                            _react2.default.createElement(
                                                'b',
                                                { className: 'fw-700', style: { color: '#000000' } },
                                                coupon.code
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'mrt-20', style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
                                            _react2.default.createElement(
                                                'p',
                                                { onClick: function onClick() {
                                                        return _this2.toggleTandC();
                                                    }, className: 'text-xs fw-500', style: { color: 'var(--text--dark--all)', cursor: 'pointer' } },
                                                'Terms & Conditions'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'view-more-coupons', onClick: function onClick() {
                                                // redirect to more available coupons
                                                _this2.props.history.push('/user/coupons');
                                            } },
                                        'View more offers'
                                    )
                                )
                            )
                        ) : "",
                        _config2.default.ENABLE_INSURANCE && isUserLoginInsured && this.props.USER && this.props.USER.profiles && Object.keys(this.props.USER.profiles).length > 0 && this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].insurance_status == 1 ? _react2.default.createElement(
                            'li',
                            { onClick: this.goToInsurance.bind(this, isUserLoginInsured), className: 'my-profile-item lst-spcng' },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-md nav-icon' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/ins.png", className: 'img-fluid' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'nav-content' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title' },
                                        'OPD Insurance'
                                    )
                                )
                            ),
                            this.getInsuranceBtnText()
                        ) : '',
                        _config2.default.ENABLE_VIP_CLUB && defaultProfile && defaultProfile.is_vip_member && !defaultProfile.is_vip_gold_member ?
                        // redirect to  vip plan page
                        _react2.default.createElement(
                            'li',
                            { onClick: function onClick(e) {
                                    var data = {
                                        'Category': 'ConsumerApp', 'Action': 'ProfileMenuVipClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'profile-menu-vip-clicked'
                                    };
                                    _gtm2.default.sendEvent({ data: data });
                                    e.preventDefault();
                                    _this2.props.clearVipSelectedPlan(); // reset gld or vip store to default state
                                    _this2.props.history.push('/vip-club-details?source=profile-menu-vip-clicked&lead_source=Docprime');
                                }, className: 'my-profile-item lst-spcng' },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-md nav-icon' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/viplog.png", className: 'img-fluid' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'nav-content', style: { width: '100%' } },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title' },
                                        'Docprime Vip'
                                    )
                                )
                            )
                        ) : '',
                        _config2.default.ENABLE_VIP_GOLD ?
                        // redirect to  vip gold page
                        _react2.default.createElement(
                            'li',
                            { onClick: function onClick(e) {
                                    var data = {
                                        'Category': 'ConsumerApp', 'Action': 'ProfileMenuGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'profile-menu-gold-clicked'
                                    };
                                    _gtm2.default.sendEvent({ data: data });
                                    e.preventDefault();
                                    _this2.props.clearVipSelectedPlan(); // reset gld or vip store to default state
                                    _this2.props.history.push('/vip-gold-details?is_gold=true&source=profile-menu-gold-clicked&lead_source=Docprime');
                                }, className: 'my-profile-item lst-spcng' },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-md nav-icon' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/gold-sm.png", className: 'img-fluid' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'nav-content', style: { width: '100%' } },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title' },
                                        'Docprime Gold'
                                    )
                                )
                            )
                        ) : '',
                        is_care ? _react2.default.createElement(
                            'li',
                            { onClick: this.isDocCare.bind(this), className: 'my-profile-item lst-spcng' },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-md nav-icon' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/primecae.png", className: 'img-fluid' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'nav-content', style: { width: '100%' } },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title' },
                                        'Docprime Care',
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'ins-userdetails-active' },
                                            'Active'
                                        )
                                    )
                                )
                            )
                        ) : '',
                        _react2.default.createElement(
                            'li',
                            { onClick: this.gotTo.bind(this, 'appointments'), className: 'my-profile-item lst-spcng' },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-md nav-icon' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/apoitm.svg", className: 'img-fluid' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'nav-content' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title' },
                                        'My Appointments'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: this.gotTo.bind(this, 'family'), className: 'my-profile-item lst-spcng' },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-md nav-icon' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/fmly.svg", className: 'img-fluid' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'nav-content' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title' },
                                        'My Family'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: function onClick() {
                                    return _this2.props.history.push('/myratings');
                                }, className: 'my-profile-item lst-spcng' },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-md nav-icon' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/review.png", className: 'img-fluid' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'nav-content' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title' },
                                        'My Reviews'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: function onClick() {
                                    _this2.props.history.push('/wallet');
                                }, className: 'my-profile-item lst-spcng' },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-md nav-icon' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rp-ico.png", className: 'img-fluid' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'nav-content' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title' },
                                        'My Wallet'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: function onClick() {
                                    _this2.props.history.push('/user/address');
                                }, className: 'my-profile-item lst-spcng' },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-md nav-icon' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/addmang.png", className: 'img-fluid' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'nav-content' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title' },
                                        'Manage Address'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: function onClick() {
                                    _this2.props.history.push('/notifications');
                                }, className: 'my-profile-item lst-spcng' },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-md nav-icon' },
                                    _react2.default.createElement('img', _defineProperty({ className: 'img-fluid', src: "/assets" + "/img/customer-icons/bl-bell.png" }, 'className', 'img-fluid'))
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'nav-content' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title' },
                                        'Notifications'
                                    )
                                )
                            ),
                            this.props.USER.unread_count ? _react2.default.createElement(
                                'div',
                                { className: 'notification-count' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'fw-500 text-xs' },
                                    this.props.USER.unread_count
                                )
                            ) : ''
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: function onClick() {
                                    _this2.props.logout(currentRoomId);
                                }, className: 'my-profile-item lst-spcng ' },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-md nav-icon' },
                                    _react2.default.createElement('img', _defineProperty({ className: 'img-fluid', src: "/assets" + "/img/customer-icons/log-out.svg" }, 'className', 'img-fluid'))
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'nav-content' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title' },
                                        'Logout'
                                    )
                                )
                            )
                        )
                    )
                ),
                this.state.openTermsConditions ? _react2.default.createElement(_termsConditions2.default, { toggle: function toggle() {
                        return _this2.toggleTandC();
                    }, tnc: coupon.tnc }) : ""
            );
        }
    }]);

    return ProfileData;
}(_react2.default.Component);

exports.default = ProfileData;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/profileData/index.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/profileData/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProfileData = __webpack_require__(/*! ./ProfileData.js */ "./dev/js/components/commons/userProfile/profileData/ProfileData.js");

var _ProfileData2 = _interopRequireDefault(_ProfileData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ProfileData2.default;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userAddress/UserAddress.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userAddress/UserAddress.js ***!
  \**************************************************************************/
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

var UserAddress = function (_React$Component) {
    _inherits(UserAddress, _React$Component);

    function UserAddress(props) {
        _classCallCheck(this, UserAddress);

        var _this = _possibleConstructorReturn(this, (UserAddress.__proto__ || Object.getPrototypeOf(UserAddress)).call(this, props));

        _this.state = {
            pick: _this.props.location.search.includes('pick=true')
        };
        return _this;
    }

    _createClass(UserAddress, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // this.props.getUserAddress()
        }
    }, {
        key: 'addAddress',
        value: function addAddress() {
            //add new address
            this.props.history.push('/user/address/add');
        }
    }, {
        key: 'editAddress',
        value: function editAddress(id) {
            // edit existing address
            if (this.props.location.search.includes('pick=true')) {
                // pick address and go back, else go on to edit.
                this.props.selectPickupAddress(id);
                this.props.history.go(-1);
            } else {
                this.props.history.push('/user/address/edit/' + id);
            }
        }
    }, {
        key: 'updateAddress',
        value: function updateAddress(addressData, e) {
            var _this2 = this;

            // update changes in address
            addressData.is_default = true;
            this.props.updateUserAddress(addressData, function (err, data) {
                _this2.props.getUserAddress();
                _this2.editAddress(addressData.id);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var address = this.props.USER.address;


            return _react2.default.createElement(
                'div',
                { className: 'widget-content pl-0 pr-0' },
                _react2.default.createElement(
                    'ul',
                    { className: 'list family-list dp-user-list' },
                    address && address.length ? address.map(function (curr, key) {
                        return _react2.default.createElement(
                            'li',
                            { key: key },
                            _react2.default.createElement(
                                'span',
                                { className: 'icon icon-lg member-icon', onClick: _this3.updateAddress.bind(_this3, curr), style: { top: '0px', position: 'absolute', left: '10px', height: '0px', width: '0px', cursor: 'pointer' } },
                                _react2.default.createElement('input', { type: 'radio', value: curr.id.toString(), checked: curr.is_default, className: 'user-address-hidden-radio' }),
                                _react2.default.createElement('span', { className: 'user-address-radio' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'member-details padding-leftadjest', onClick: _this3.updateAddress.bind(_this3, curr) },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'list' },
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'fw-500 text-sm', style: { width: '80%', wordWrap: 'break-word' } },
                                        curr.address
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'fw-500 text-sm', style: { width: '80%', wordWrap: 'break-word' } },
                                        curr.land_mark !== "" ? curr.land_mark : curr.locality
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'span',
                                { onClick: _this3.updateAddress.bind(_this3, curr), style: { top: 10 }, className: 'ct-img ct-img-sm arrow-forward-right' },
                                _this3.state.pick ? "Pick" : "Edit"
                            )
                        );
                    }) : _react2.default.createElement(
                        'div',
                        { className: 'text-center pd-20' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/no-address.png" }),
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 text-lg mrt-20' },
                            'No Address !!'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mrt-20' },
                    _react2.default.createElement(
                        'p',
                        { onClick: this.addAddress.bind(this), className: 'text-primary fw-500', style: { cursor: 'pointer', fontSize: 16 } },
                        'Add new address'
                    )
                )
            );
        }
    }]);

    return UserAddress;
}(_react2.default.Component);

exports.default = UserAddress;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userAddress/add/addAddress.js":
/*!*****************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userAddress/add/addAddress.js ***!
  \*****************************************************************************/
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

var _mapHelpers = __webpack_require__(/*! ../../../../../helpers/mapHelpers.js */ "./dev/js/helpers/mapHelpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserSignupView = function (_React$Component) {
    _inherits(UserSignupView, _React$Component);

    function UserSignupView(props) {
        _classCallCheck(this, UserSignupView);

        var _this = _possibleConstructorReturn(this, (UserSignupView.__proto__ || Object.getPrototypeOf(UserSignupView)).call(this, props));

        var _this$props$USER = _this.props.USER,
            profiles = _this$props$USER.profiles,
            selectedProfile = _this$props$USER.selectedProfile,
            defaultProfile = _this$props$USER.defaultProfile;

        var def_profile = null;
        if (profiles && profiles[defaultProfile]) {
            def_profile = profiles[defaultProfile];
        }

        _this.state = {
            address: '',

            land_mark: '',
            landmark_place_id: '',
            landmark_location_lat: '',
            landmark_location_long: '',

            pincode: '',

            locality: '',
            locality_place_id: '',
            locality_location_lat: '',
            locality_location_long: '',

            type: 'home',
            phone_number: def_profile ? def_profile.phone_number : "",
            edit: !!_this.props.match.params.id,
            land_mark_results: [],
            locality_results: []
        };
        return _this;
    }

    _createClass(UserSignupView, [{
        key: 'getLocation',
        value: function getLocation(location, resultField) {
            var types = ['establishment'];
            if (resultField == 'locality_results') {
                types = ['(regions)'];
            }
            (0, _mapHelpers._autoCompleteService)(location, function (results, status) {
                results = results || [];
                this.setState(_defineProperty({}, resultField, results));
            }.bind(this), types);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.state.edit) {
                var editState = {};
                if (this.props.USER.address) {
                    this.props.USER.address.map(function (add) {
                        if (add.id == _this2.props.match.params.id) {
                            editState = add;
                        }
                    });
                }
                this.setState(_extends({}, editState));
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (this.state.edit) {
                var editState = {};
                if (props.USER.address) {
                    props.USER.address.map(function (add) {
                        if (add.id == props.match.params.id) {
                            editState = add;
                        }
                    });
                }
                this.setState(_extends({}, editState));
            }
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));

            // if (e.target.name == 'land_mark') {
            //     // this.getLocation(e.target.value, 'land_mark_results')
            // }

            if (e.target.name == 'locality') {
                this.getLocation(e.target.value, 'locality_results');
            }
        }
    }, {
        key: 'submitForm',
        value: function submitForm() {
            var _this3 = this;

            // validate
            var addAddress = true;
            Object.keys(this.refs).forEach(function (prp, i) {
                var validated = false;
                switch (_this3.refs[prp].name) {
                    case "phone_number":
                        {
                            if (_this3.refs[prp].value == "") {
                                validated = true;
                                _this3.refs[prp].style.border = '';
                                return;
                            } else {
                                validated = _this3.refs[prp].value.match(/^[56789]{1}[0-9]{9}$/);
                            }
                            break;
                        }
                    case "pincode":
                        {
                            validated = _this3.refs[prp].value.match(/^[1-9][0-9]{5}$/);
                            break;
                        }
                    case "locality":
                        {
                            if (_this3.state.locality && _this3.state.locality_place_id && _this3.refs[prp].value) {
                                validated = true;
                            } else {
                                _this3.refs[prp].value = "";
                            }
                            break;
                        }

                    case "address":
                        {
                            if (_this3.refs[prp].value) {
                                validated = true;
                            }
                            break;
                        }

                    case "land_mark":
                        {
                            validated = true;
                            /*if (this.state.land_mark && this.state.landmark_place_id) {
                                validated = true
                            } else {
                                this.refs[prp].value = ""
                            }*/
                            break;
                        }
                    default:
                        {
                            validated = true;
                            break;
                        }
                }
                if ( /*this.refs[prp].value && */validated) {
                    _this3.refs[prp].style.border = '';
                } else {
                    _this3.refs[prp].style.border = '1px solid red';
                    addAddress = false;
                }
            });

            if (addAddress) {
                if (this.state.edit) {
                    this.props.updateUserAddress(this.state, function (err, data) {
                        if (err) {
                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not update address." });
                        }
                        _this3.props.history.go(-1);
                    });
                } else {
                    this.props.addUserAddress(this.state, function (err, res) {
                        if (!err) {
                            _this3.props.selectPickupAddress(res.id);
                        } else {
                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not add address." });
                        }
                        // go back
                        _this3.props.history.go(-1);
                    });
                }
            }
        }
    }, {
        key: 'selectLocation',
        value: function selectLocation(location, type) {
            var _this4 = this;

            (0, _mapHelpers._getLocationFromPlaceId)(location.reference, function (place) {
                var place_id = place.place_id,
                    formatted_address = place.formatted_address,
                    geometry = place.geometry,
                    name = place.name;

                var lat = geometry.location.lat;
                var long = geometry.location.lng;

                if (type == 'land_mark') {
                    _this4.setState({
                        land_mark: name,
                        landmark_place_id: place_id,
                        landmark_location_lat: lat,
                        landmark_location_long: long,
                        land_mark_results: [],
                        locality_results: []
                    });
                }

                if (type == 'locality') {
                    _this4.setState({
                        locality: formatted_address,
                        locality_place_id: place_id,
                        locality_location_lat: lat,
                        locality_location_long: long,
                        land_mark_results: [],
                        locality_results: []
                    });
                }
            }, true);
        }
    }, {
        key: 'closeResults',
        value: function closeResults(e) {
            if (this.state.land_mark_results.length) {
                this.setState({ land_mark_results: [] });
            }

            if (this.state.locality_results.length) {
                this.setState({ locality_results: [] });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'section',
                    { className: 'validation-book-screen', onClick: this.closeResults.bind(this) },
                    _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
                    _react2.default.createElement(
                        'div',
                        { className: 'widget no-round no-shadow' },
                        _react2.default.createElement(
                            'div',
                            { className: 'widget-content' },
                            _react2.default.createElement(
                                'form',
                                { className: 'go-bottom' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'labelWrap' },
                                    _react2.default.createElement('input', { id: 'number', name: 'phone_number', type: 'text', onChange: this.inputHandler.bind(this), value: this.state.phone_number, required: true, ref: 'phone_number' }),
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'number' },
                                        'Mobile Number'
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'text-xs' },
                                        ' (will be used at the time of sample pickup)'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'labelWrap' },
                                    _react2.default.createElement('input', { id: 'locality', name: 'locality', type: 'text', onChange: this.inputHandler.bind(this), value: this.state.locality, ref: 'locality', required: true, autoComplete: 'null' }),
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'locality' },
                                        'Select Locality'
                                    ),
                                    this.state.locality_results.length ? _react2.default.createElement(
                                        'div',
                                        { className: 'panel-content pd-0 searchlocationresults' },
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'list city-list' },
                                            this.state.locality_results.map(function (result, i) {
                                                return _react2.default.createElement(
                                                    'li',
                                                    { key: i, onClick: _this5.selectLocation.bind(_this5, result, 'locality') },
                                                    _react2.default.createElement(
                                                        'a',
                                                        null,
                                                        result.description,
                                                        _react2.default.createElement('span', { className: 'city-loc' })
                                                    )
                                                );
                                            })
                                        )
                                    ) : ""
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'labelWrap' },
                                    _react2.default.createElement('input', { id: 'address', name: 'address', type: 'text', onChange: this.inputHandler.bind(this), value: this.state.address, required: true, ref: 'address' }),
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'address' },
                                        'House Address'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'labelWrap' },
                                    _react2.default.createElement('input', { id: 'land_mark', name: 'land_mark', type: 'text', onChange: this.inputHandler.bind(this), value: this.state.land_mark, required: true, autoComplete: 'off' }),
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'land_mark' },
                                        'Land Mark'
                                    ),
                                    this.state.land_mark_results.length ? _react2.default.createElement(
                                        'div',
                                        { className: 'panel-content pd-0 searchlocationresults' },
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'list city-list' },
                                            this.state.land_mark_results.map(function (result, i) {
                                                return _react2.default.createElement(
                                                    'li',
                                                    { key: i, onClick: _this5.selectLocation.bind(_this5, result, 'land_mark') },
                                                    _react2.default.createElement(
                                                        'a',
                                                        null,
                                                        result.description,
                                                        _react2.default.createElement('span', { className: 'city-loc' })
                                                    )
                                                );
                                            })
                                        )
                                    ) : ""
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'labelWrap' },
                                    _react2.default.createElement('input', { id: 'pincode', name: 'pincode', type: 'text', onChange: this.inputHandler.bind(this), value: this.state.pincode, required: true, ref: 'pincode' }),
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'pincode' },
                                        'Pin Code'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group input-group' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'inline input-label' },
                                        'Place Type'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'choose-gender' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'radio-inline' },
                                            _react2.default.createElement('input', { value: 'home', onChange: this.inputHandler.bind(this), checked: this.state.type == 'home', type: 'radio', name: 'type' }),
                                            'Home'
                                        ),
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'radio-inline' },
                                            _react2.default.createElement('input', { value: 'office', onChange: this.inputHandler.bind(this), checked: this.state.type == 'office', type: 'radio', name: 'type' }),
                                            'Office'
                                        ),
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'radio-inline' },
                                            _react2.default.createElement('input', { value: 'other', onChange: this.inputHandler.bind(this), checked: this.state.type == 'other', type: 'radio', name: 'type' }),
                                            'Other'
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                this.state.edit ? _react2.default.createElement(
                    'button',
                    { className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg static-btn', onClick: this.submitForm.bind(this) },
                    'Update'
                ) : _react2.default.createElement(
                    'button',
                    { className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg static-btn', onClick: this.submitForm.bind(this) },
                    'Add'
                )
            );
        }
    }]);

    return UserSignupView;
}(_react2.default.Component);

exports.default = UserSignupView;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userAddress/add/index.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userAddress/add/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addAddress = __webpack_require__(/*! ./addAddress */ "./dev/js/components/commons/userProfile/userAddress/add/addAddress.js");

var _addAddress2 = _interopRequireDefault(_addAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _addAddress2.default;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userAddress/index.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userAddress/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserAddress = __webpack_require__(/*! ./UserAddress */ "./dev/js/components/commons/userProfile/userAddress/UserAddress.js");

var _UserAddress2 = _interopRequireDefault(_UserAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _UserAddress2.default;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userAppointments/UserAppointmentsView.js":
/*!****************************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userAppointments/UserAppointmentsView.js ***!
  \****************************************************************************************/
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

var _index = __webpack_require__(/*! ./appointmentList/index.js */ "./dev/js/components/commons/userProfile/userAppointments/appointmentList/index.js");

var _index2 = _interopRequireDefault(_index);

var _Loader = __webpack_require__(/*! ../../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserAppointmentsView = function (_React$Component) {
    _inherits(UserAppointmentsView, _React$Component);

    function UserAppointmentsView(props) {
        _classCallCheck(this, UserAppointmentsView);

        var _this = _possibleConstructorReturn(this, (UserAppointmentsView.__proto__ || Object.getPrototypeOf(UserAppointmentsView)).call(this, props));

        _this.state = {
            showReports: false,
            appointmentReports: [],
            show_sorted_results: ['all']
        };
        return _this;
    }

    _createClass(UserAppointmentsView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getProfileAppointments(this.props.USER.selectedProfile); // get user appointments
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (this.props.USER.selectedProfile != props.USER.selectedProfile) {
                this.props.getProfileAppointments(props.USER.selectedProfile); // get user appointments
            }
        }
    }, {
        key: 'viewReportClick',
        value: function viewReportClick(reports) {
            this.setState({ showReports: true, appointmentReports: reports });
        }
    }, {
        key: 'hideReports',
        value: function hideReports() {
            this.setState({ showReports: false });
        }
    }, {
        key: 'reportClick',
        value: function reportClick(src) {
            if (window) {
                window.open(src, '_blank');
            }
        }
    }, {
        key: 'toggleSortOrder',
        value: function toggleSortOrder() {

            this.setState({ show_sorted_results: !this.state.show_sorted_results });
        }
    }, {
        key: 'selectOptions',
        value: function selectOptions(value, type) {
            var appointments = [];
            if (value == 'all') {
                appointments.push('all');
            } else if (value == 'upcoming') {
                appointments = [2, 3, 4, 5];
            } else {
                appointments.push(value);
            }
            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'AppointmentChipsSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'appointment-chips-selected', 'type': type
            };
            _gtm2.default.sendEvent({ data: gtmData });
            this.setState({ show_sorted_results: appointments });

            /*let found = false
            let appointments = []
             if(this.state.show_sorted_results.length==1 && this.state.show_sorted_results.indexOf(value)>-1) {
                
            }else {
                let isAllExist = this.state.show_sorted_results.indexOf('all')
                if(isAllExist==-1 && value=='all'){
                    appointments = ['all']
                }else {
                    appointments = this.state.show_sorted_results.filter((x)=>{
                        if(isAllExist >-1 && value!='all'){
                            return false
                        }
                        if(x==value){
                            found = true
                            return false
                        }
                        if(value=='all'){
                            return false
                        }
                        return x
                    })
                    if(!found){
                        appointments.push(value)
                    }    
                }
                
                this.setState({ show_sorted_results: appointments })
            }*/
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$USER = this.props.USER,
                appointments = _props$USER.appointments,
                selectedProfile = _props$USER.selectedProfile;

            var appointment_list = appointments[selectedProfile] || [];

            if (this.state.show_sorted_results.indexOf('all') == -1) {

                if (appointments[selectedProfile] && appointments[selectedProfile].length) {
                    appointment_list = appointments[selectedProfile].filter(function (x) {

                        if (_this2.state.show_sorted_results.indexOf(x.status) > -1) {
                            return true;
                        }
                        return false;
                    });
                }
            }

            return _react2.default.createElement(
                'div',
                { className: 'widget-content pl-0 pr-0' },
                _react2.default.createElement(
                    'div',
                    { className: 'booking-filter-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'bkn-chips-container' },
                        _react2.default.createElement(
                            'p',
                            { className: '' + (this.state.show_sorted_results.indexOf('all') > -1 ? 'bkselect' : ''), onClick: function onClick() {
                                    return _this2.selectOptions('all', 'all');
                                } },
                            'All'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: '' + (this.state.show_sorted_results.indexOf(2) > -1 || this.state.show_sorted_results.indexOf(3) > -1 || this.state.show_sorted_results.indexOf(4) > -1 || this.state.show_sorted_results.indexOf(5) > -1 ? 'bkselect' : ''), onClick: function onClick() {
                                    return _this2.selectOptions('upcoming', 'upcoming');
                                } },
                            'Upcoming'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: '' + (this.state.show_sorted_results.indexOf(7) > -1 ? 'bkselect' : ''), onClick: function onClick() {
                                    return _this2.selectOptions(7, 'Completed');
                                } },
                            'Completed'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: '' + (this.state.show_sorted_results.indexOf(6) > -1 ? 'bkselect' : ''), onClick: function onClick() {
                                    return _this2.selectOptions(6, 'Cancelled');
                                } },
                            'Cancelled'
                        )
                    )
                ),
                appointment_list ? _react2.default.createElement(
                    'ul',
                    { className: 'list online-consultant-list dp-user-list', style: { marginTop: 15, marginBottom: 70 } },
                    appointment_list && appointment_list.length ? appointment_list.map(function (app, i) {
                        return app.type == 'lab' && app.lab || app.type == 'doctor' ? _react2.default.createElement(_index2.default, _extends({ key: i }, _this2.props, { data: app, viewReportClick: _this2.viewReportClick.bind(_this2) })) : '';
                    }) : _react2.default.createElement(
                        'div',
                        { className: 'text-center pd-20' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/no-appointment.png" }),
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 text-lg mrt-20' },
                            'No Appointments !!'
                        )
                    )
                ) : _react2.default.createElement(_Loader2.default, null),
                this.state.showReports && this.state.appointmentReports && this.state.appointmentReports.length ? _react2.default.createElement(
                    'div',
                    { className: 'search-el-popup-overlay cancel-overlay-zindex' },
                    _react2.default.createElement(
                        'div',
                        { className: 'search-el-popup ipd-pop-width' },
                        _react2.default.createElement(
                            'div',
                            { className: 'widget p-12' },
                            _react2.default.createElement(
                                'div',
                                { className: 'p-relative' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'ipd-pop-cls' },
                                    _react2.default.createElement('img', { src: '/assets/img/icons/close.png', onClick: function onClick() {
                                            return _this2.hideReports();
                                        } })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'ipd-needHelp mb-20', style: { fontSize: 16 } },
                                    'View Report'
                                ),
                                this.state.appointmentReports.map(function (report, index) {
                                    return _react2.default.createElement(
                                        'div',
                                        { key: index, className: 'd-flex align-items-center cursor-pntr mb-10', onClick: function onClick() {
                                                return _this2.reportClick(report);
                                            } },
                                        _react2.default.createElement(
                                            'div',
                                            { style: { width: 32, marginRight: 16 } },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/pdf-icon.png', style: { width: '100%' } })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { style: { flex: 1 } },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'fw-500', style: { fontSize: 16 } },
                                                'Report ' + (index + 1)
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { style: { width: 24, marginLeft: 16 } },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/download-icon.svg', style: { width: '100%' } })
                                        )
                                    );
                                })
                            )
                        )
                    )
                ) : ''
            );
        }
    }]);

    return UserAppointmentsView;
}(_react2.default.Component);

exports.default = UserAppointmentsView;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userAppointments/appointmentList/AppointmentList.js":
/*!***************************************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userAppointments/appointmentList/AppointmentList.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STATUS_MAP = {
    CREATED: 1,
    BOOKED: 2,
    RESCHEDULED_DOCTOR: 3,
    RESCHEDULED_PATIENT: 4,
    ACCEPTED: 5,
    CANCELED: 6,
    COMPLETED: 7
};

var AppointmentList = function (_React$Component) {
    _inherits(AppointmentList, _React$Component);

    function AppointmentList(props) {
        _classCallCheck(this, AppointmentList);

        return _possibleConstructorReturn(this, (AppointmentList.__proto__ || Object.getPrototypeOf(AppointmentList)).call(this, props));
    }

    _createClass(AppointmentList, [{
        key: 'getTime',
        value: function getTime(unix_timestamp) {
            var date = new Date(unix_timestamp);
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        }
    }, {
        key: 'openAppointment',
        value: function openAppointment(type, id) {
            if (type == 'doctor') type = 'opd';
            this.props.history.push('/' + type + '/appointment/' + id);
        }
    }, {
        key: 'viewReports',
        value: function viewReports(type, id, e) {
            e.stopPropagation();
            e.preventDefault();

            if (type == 'doctor') type = 'opd';
            this.props.history.push('/user/' + type + '/reports/' + id);
        }
    }, {
        key: 'getStatus',
        value: function getStatus(status) {
            status = parseInt(status);
            switch (status) {
                case 1:
                    {
                        return _react2.default.createElement(
                            'span',
                            { className: 'appointment-status', style: { color: 'var(--text--primary--color)' } },
                            'Created'
                        );
                    }
                case 2:
                    {
                        return _react2.default.createElement(
                            'span',
                            { className: 'appointment-status', style: { color: 'var(--text--primary--color)' } },
                            'Booked'
                        );
                    }
                case 3:
                    {
                        return _react2.default.createElement(
                            'span',
                            { className: 'appointment-status', style: { color: 'var(--text--primary--color)' } },
                            'Rescheduled'
                        );
                    }
                case 4:
                    {
                        return _react2.default.createElement(
                            'span',
                            { className: 'appointment-status', style: { color: 'var(--text--primary--color)' } },
                            'Rescheduled'
                        );
                    }
                case 5:
                    {
                        return _react2.default.createElement(
                            'span',
                            { className: 'appointment-status', style: { color: 'var(--text--primary--color)' } },
                            'Accepted'
                        );
                    }
                case 6:
                    {
                        return _react2.default.createElement(
                            'span',
                            { className: 'appointment-status', style: { color: 'red' } },
                            'Cancelled'
                        );
                    }
                case 7:
                    {
                        return _react2.default.createElement(
                            'span',
                            { className: 'appointment-status', style: { color: 'green' } },
                            'Completed'
                        );
                    }
                default:
                    {
                        return _react2.default.createElement(
                            'span',
                            { className: 'appointment-status', style: { color: 'var(--text--primary--color)' } },
                            'Upcoming'
                        );
                    }
            }
        }
    }, {
        key: 'invoiceClick',
        value: function invoiceClick(invoiceLink) {
            var win = window.open(invoiceLink, '_blank');
            win.focus();
        }
    }, {
        key: 'reportClick',
        value: function reportClick(reports) {
            if (reports.length == 1) {
                if (window) {
                    window.open(reports[0], '_blank');
                }
            } else {
                this.props.viewReportClick(reports);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$data = this.props.data,
                deal_price = _props$data.deal_price,
                doctor_name = _props$data.doctor_name,
                display_name = _props$data.display_name,
                time_slot_end = _props$data.time_slot_end,
                time_slot_start = _props$data.time_slot_start,
                status = _props$data.status,
                type = _props$data.type,
                id = _props$data.id,
                lab_name = _props$data.lab_name,
                lab_test_name = _props$data.lab_test_name,
                doctor_thumbnail = _props$data.doctor_thumbnail,
                lab_thumbnail = _props$data.lab_thumbnail,
                patient_name = _props$data.patient_name,
                invoices = _props$data.invoices,
                hospital_name = _props$data.hospital_name,
                specialization = _props$data.specialization,
                vip = _props$data.vip,
                payment_mode = _props$data.payment_mode,
                discount = _props$data.discount;


            var date = new Date(time_slot_start);
            var is_vip_applicable = vip.is_vip_member && vip.covered_under_vip;
            return _react2.default.createElement(
                'li',
                { style: { position: 'relative', paddingTop: 32, cursor: 'unset' } },
                _react2.default.createElement(
                    'span',
                    { className: 'icon consultant-dp' },
                    _react2.default.createElement(
                        _initialsPicture2.default,
                        { name: doctor_name || lab_name, has_image: !!(doctor_thumbnail || lab_thumbnail), className: lab_name ? 'initialsPicture-ls' : 'initialsPicture-appointment', style: { position: 'relative' } },
                        _react2.default.createElement('img', { src: doctor_thumbnail, className: doctor_thumbnail ? 'img-fluid img-round my-appont-img' : 'd-none' }),
                        _react2.default.createElement('img', { src: lab_thumbnail, className: lab_thumbnail ? 'fltr-usr-image-lab' : 'd-none' }),
                        type == 'doctor' ? _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/stethoscope.svg", className: 'appointment-icon' }) : _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/beaker.svg", className: 'appointment-icon' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'consultant-details', style: { cursor: 'pointer' }, onClick: this.openAppointment.bind(this, type, id) },
                    _react2.default.createElement(
                        'h4',
                        { className: 'title app-title vip-ico-hdng' },
                        display_name || lab_name,
                        is_vip_applicable ? _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/viplog.png' }) : ''
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'list' },
                        specialization && specialization.length ? _react2.default.createElement(
                            'li',
                            { className: 'appointment-specialization' },
                            specialization.map(function (speciality, index) {
                                if (index < 3) {
                                    return _react2.default.createElement(
                                        'span',
                                        { className: 'apnt-hsp-name', key: index },
                                        speciality,
                                        ' ',
                                        index < specialization.length - 1 && index != 2 ? '| ' : ''
                                    );
                                }
                            })
                        ) : '',
                        hospital_name ? _react2.default.createElement(
                            'li',
                            { style: { marginBottom: 4 }, className: 'apnt-hsp-name' },
                            hospital_name
                        ) : '',
                        lab_test_name && lab_test_name.length ? _react2.default.createElement(
                            'li',
                            { style: { marginBottom: 4 }, className: 'apnt-hsp-name' },
                            lab_test_name[0].test_name,
                            ' ',
                            lab_test_name.length > 1 ? '& ' + (lab_test_name.length - 1) + ' more' : ''
                        ) : '',
                        _react2.default.createElement(
                            'li',
                            { style: { marginBottom: 5 } },
                            _react2.default.createElement(
                                'span',
                                { className: 'ct-img ct-img-xs text-right' },
                                _react2.default.createElement('img', { style: { width: '15px' }, src: "/assets" + "/img/new-cal.svg", className: 'img-fluid' })
                            ),
                            date.toDateString(),
                            ' | ',
                            _react2.default.createElement(
                                'span',
                                { className: 'ct-img ct-img-xs text-right' },
                                _react2.default.createElement('img', { style: { width: '15px' }, src: "/assets" + "/img/watch-date.svg", className: 'img-fluid' })
                            ),
                            this.getTime(time_slot_start)
                        ),
                        _react2.default.createElement(
                            'li',
                            { style: { marginBottom: 5 } },
                            _react2.default.createElement(
                                'span',
                                { className: 'ct-img ct-img-xs text-right' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/nw-usr.svg", className: 'img-fluid', style: { width: 15, marginTop: -4 } })
                            ),
                            patient_name
                        )
                    )
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'arrow-custom-right', style: { cursor: 'pointer' }, onClick: this.openAppointment.bind(this, type, id) },
                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/arrow-forward-right.svg" })
                ),
                this.getStatus(status),
                id ? _react2.default.createElement(
                    'span',
                    { className: 'fw-500', style: { position: 'absolute', top: 4, left: 8, fontSize: 12 } },
                    'Booking id : ' + id
                ) : '',
                deal_price && !is_vip_applicable ? _react2.default.createElement(
                    'span',
                    { className: 'fw-500', style: { position: 'absolute', top: 20, right: 8, fontSize: 12, color: '#f78631' } },
                    '\u20B9 ',
                    parseInt(deal_price) - (discount ? parseInt(discount) : 0)
                ) : '',
                invoices && invoices.length === 1 && (!this.props.data.reports || !this.props.data.reports.length) ? _react2.default.createElement(
                    'div',
                    { className: 'mrt-20', style: { padding: '0 30px' }, onClick: function onClick() {
                            return _this2.invoiceClick(invoices[0]);
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'invoice-div' },
                        _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/invoice.svg' }),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'p',
                                { className: 'text-primary fw-500' },
                                'Download Payment Receipt'
                            )
                        )
                    )
                ) : '',
                invoices && invoices.length && this.props.data.reports && this.props.data.reports.length ? _react2.default.createElement(
                    'div',
                    { className: 'mrt-20 multiple-invoice-div' },
                    _react2.default.createElement(
                        'div',
                        { className: 'multiple-invoice' },
                        _react2.default.createElement(
                            'div',
                            { className: 'invoice-div', onClick: function onClick() {
                                    return _this2.invoiceClick(invoices[0]);
                                } },
                            _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/invoice.svg' }),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'p',
                                    { className: 'text-primary fw-500' },
                                    'Download'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'text-primary fw-500' },
                                    'Payment Receipt'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'invoice-div', onClick: function onClick() {
                                    return _this2.reportClick(_this2.props.data.reports);
                                } },
                            _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/report.svg' }),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'p',
                                    { className: 'text-primary fw-500' },
                                    'View'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'text-primary fw-500' },
                                    'Report'
                                )
                            )
                        )
                    )
                ) : ''
            );
        }
    }]);

    return AppointmentList;
}(_react2.default.Component);

exports.default = AppointmentList;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userAppointments/appointmentList/index.js":
/*!*****************************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userAppointments/appointmentList/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppointmentList = __webpack_require__(/*! ./AppointmentList.js */ "./dev/js/components/commons/userProfile/userAppointments/appointmentList/AppointmentList.js");

var _AppointmentList2 = _interopRequireDefault(_AppointmentList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AppointmentList2.default;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userAppointments/index.js":
/*!*************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userAppointments/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserAppointmentsView = __webpack_require__(/*! ./UserAppointmentsView.js */ "./dev/js/components/commons/userProfile/userAppointments/UserAppointmentsView.js");

var _UserAppointmentsView2 = _interopRequireDefault(_UserAppointmentsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _UserAppointmentsView2.default;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userCoupons/index.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userCoupons/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userCoupons = __webpack_require__(/*! ./userCoupons */ "./dev/js/components/commons/userProfile/userCoupons/userCoupons.js");

var _userCoupons2 = _interopRequireDefault(_userCoupons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _userCoupons2.default;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userCoupons/userCoupons.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userCoupons/userCoupons.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _termsConditions = __webpack_require__(/*! ../../couponSelectionView/termsConditions.js */ "./dev/js/components/commons/couponSelectionView/termsConditions.js");

var _termsConditions2 = _interopRequireDefault(_termsConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserCoupons = function (_React$Component) {
    _inherits(UserCoupons, _React$Component);

    function UserCoupons(props) {
        _classCallCheck(this, UserCoupons);

        var _this = _possibleConstructorReturn(this, (UserCoupons.__proto__ || Object.getPrototypeOf(UserCoupons)).call(this, props));

        _this.state = {
            openTermsConditions: false,
            selectedCoupon: null
        };
        return _this;
    }

    _createClass(UserCoupons, [{
        key: 'toggleTandC',
        value: function toggleTandC() {
            var selectedCoupon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            this.setState({ openTermsConditions: !this.state.openTermsConditions, selectedCoupon: selectedCoupon });
        }
    }, {
        key: 'searchLab',
        value: function searchLab(coupon) {
            this.props.setCorporateCoupon(coupon);

            var test_ids = [];
            var network_id = "";
            if (coupon && coupon.tests) {
                test_ids = coupon.tests;
            }
            if (coupon && coupon.network_id) {
                network_id = coupon.network_id;
            }
            window.location.href = '/lab/searchresults?test_ids=' + test_ids.join(',') + '&network_id=' + network_id;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'widget-content' },
                _react2.default.createElement(
                    'div',
                    { className: '' },
                    _react2.default.createElement(
                        'h5',
                        { className: 'all-offers cpn-mrgn' },
                        'All offers'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'widget no-round no-shadow skin-transparent profile-nav' },
                        _react2.default.createElement(
                            'div',
                            { className: 'widget-content padding-remove' },
                            this.props.applicableCoupons && this.props.applicableCoupons.length ? _react2.default.createElement(
                                'div',
                                { className: 'coupon-listing dp-user-list bg-lst' },
                                this.props.applicableCoupons.map(function (coupon, i) {
                                    return _react2.default.createElement(
                                        'div',
                                        { className: 'coupons-container' },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'avl-cpn-hdng' },
                                            'Available Coupons'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'coupan-name' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'coupon-desing' },
                                                coupon.code
                                            ),
                                            coupon.is_corporate ? _react2.default.createElement(
                                                'span',
                                                { onClick: _this2.searchLab.bind(_this2, coupon), className: 'coupon-avail' },
                                                'Avail Now   ',
                                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rgt-arw.svg", className: 'img-fluid' }),
                                                ' '
                                            ) : ""
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'couon-details' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'coupon-ins' },
                                                coupon.heading
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'coupon-dtls-p' },
                                                coupon.desc
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { onClick: _this2.toggleTandC.bind(_this2, coupon), className: 'coupon-terms' },
                                                'Terms & Conditions'
                                            )
                                        )
                                    );
                                })
                            ) : ""
                        )
                    )
                ),
                this.state.openTermsConditions && this.state.selectedCoupon ? _react2.default.createElement(_termsConditions2.default, { toggle: function toggle() {
                        return _this2.toggleTandC();
                    }, tnc: this.state.selectedCoupon.tnc }) : ''
            );
        }
    }]);

    return UserCoupons;
}(_react2.default.Component);

exports.default = UserCoupons;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userFamily/UserFamily.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userFamily/UserFamily.js ***!
  \************************************************************************/
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

var _initialsPicture = __webpack_require__(/*! ../../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var GENDER = {
    "m": "Male",
    "f": "Female",
    "o": "Other"
};

var UserFamily = function (_React$Component) {
    _inherits(UserFamily, _React$Component);

    function UserFamily(props) {
        _classCallCheck(this, UserFamily);

        var _this = _possibleConstructorReturn(this, (UserFamily.__proto__ || Object.getPrototypeOf(UserFamily)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(UserFamily, [{
        key: 'getAge',
        value: function getAge(birthday) {
            birthday = new Date(birthday);
            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    }, {
        key: 'addProfile',
        value: function addProfile() {
            // to add new profile
            this.props.history.push('/addprofile?existing=true');
        }
    }, {
        key: 'editProfile',
        value: function editProfile(id, fromWhere) {
            // to edit existing profile
            var parsed = queryString.parse(this.props.location.search);
            if (this.props.location.search.includes('pick=true')) {
                // pick paitent and go back, else go on to edit.
                this.props.selectProfile(id);
                var data = {};
                var selected_test_id = [];
                var selectedDate = null;
                if (parsed.is_insurance && parsed.is_insurance == 'true') {
                    if (this.props.selectedCriterias && this.props.selectedCriterias.length > 0) {
                        this.props.selectedCriterias.map(function (twp, i) {
                            selected_test_id.push(twp.id);
                        });
                    }
                    data.start_date = selectedDate ? selectedDate : this.props.selectedSlot && this.props.selectedSlot.date ? this.props.selectedSlot.date : new Date();
                    data.lab_test = selected_test_id;
                    data.lab = parsed.lab_id;
                    data.profile = id;
                    this.props.preBooking(data);
                }
                //Clear Tests if there is any gold profile
                // let selectedProfile = this.props.USER && this.props.USER.profiles && this.props.USER.profiles[id];
                // if(selectedProfile && (selectedProfile.is_vip_member || selectedProfile.is_vip_gold_member) && this.props.clearExtraTests){
                //     this.props.clearExtraTests();
                // }
                if (fromWhere) {
                    this.props.history.push('/user/edit/' + id + '?add_to_gold=' + fromWhere + '&from_booking=true');
                } else {
                    this.props.history.go(-1);
                }
            } else {
                this.props.history.push('/user/edit/' + id + '?add_to_gold=' + fromWhere);
            }
        }
    }, {
        key: 'addtoGold',
        value: function addtoGold(id) {
            this.editProfile(id, true);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$USER = this.props.USER,
                profiles = _props$USER.profiles,
                selectedProfile = _props$USER.selectedProfile;


            var gold_profile = [];
            var normal_profile = [];
            var insurance_profile = [];
            var gold_user_profile = {};
            if (this.props.USER && this.props.USER.profiles) {
                if (Object.keys(this.props.USER.profiles).length > 0) {
                    Object.entries(this.props.USER.profiles).map(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            key = _ref2[0],
                            value = _ref2[1];

                        if (value.is_vip_gold_member) {
                            gold_user_profile = value;
                        }
                    });
                }
            }

            {
                Object.keys(profiles).filter(function (x) {
                    return !profiles[x].isDummyUser;
                }).map(function (id, key) {
                    if (profiles[id].is_vip_gold_member) {
                        gold_profile.push(_react2.default.createElement(
                            'li',
                            { key: key, onClick: _this2.editProfile.bind(_this2, id, false) },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-lg member-icon' },
                                    _react2.default.createElement(
                                        _initialsPicture2.default,
                                        { name: profiles[id].name, has_image: profiles[id].profile_image, className: 'initialsPicture-family' },
                                        _react2.default.createElement('img', { style: { width: '45px', height: '45px' }, src: profiles[id].profile_image, className: 'img-fluid img-round' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'member-details' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title', style: { paddingRight: 95, wordBreak: 'break-word', textTransform: 'capitalize' } },
                                        profiles[id].name
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'list' },
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'fw-500 text-sm', style: { marginBottom: 5 } },
                                            profiles[id].dob ? _react2.default.createElement(
                                                'span',
                                                { className: 'fw-500 text-sm' },
                                                profiles[id].dob
                                            ) : '',
                                            profiles[id].dob && profiles[id].gender ? _react2.default.createElement(
                                                'span',
                                                { className: 'pipe-sign' },
                                                ' | '
                                            ) : '',
                                            profiles[id].gender ? ' ' + GENDER[profiles[id].gender] : ''
                                        ),
                                        profiles[id].is_default_user ? _react2.default.createElement(
                                            'li',
                                            { className: 'fw-500 text-sm' },
                                            profiles[id].phone_number ? '' + profiles[id].phone_number : '',
                                            profiles[id].phone_number && profiles[id].email ? _react2.default.createElement(
                                                'span',
                                                { className: 'pipe-sign' },
                                                ' | '
                                            ) : '',
                                            profiles[id].email ? '' + profiles[id].email : ''
                                        ) : ''
                                    ),
                                    profiles[id].is_vip_gold_member && _react2.default.createElement(
                                        'div',
                                        { className: 'gold-covrd-txt' },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            _react2.default.createElement('img', { className: 'ml-2', width: '35', src: 'https://cdn.docprime.com/cp/assets/img/gold-lg.png', alt: 'gold' })
                                        )
                                    )
                                )
                            )
                        ));
                    } else if (profiles[id].is_insured) {
                        insurance_profile.push(_react2.default.createElement(
                            'li',
                            { key: key, onClick: _this2.editProfile.bind(_this2, id, false) },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-lg member-icon' },
                                    _react2.default.createElement(
                                        _initialsPicture2.default,
                                        { name: profiles[id].name, has_image: profiles[id].profile_image, className: 'initialsPicture-family' },
                                        _react2.default.createElement('img', { style: { width: '45px', height: '45px' }, src: profiles[id].profile_image, className: 'img-fluid img-round' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'member-details' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title', style: { paddingRight: 95, wordBreak: 'break-word', textTransform: 'capitalize' } },
                                        profiles[id].name
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'list' },
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'fw-500 text-sm', style: { marginBottom: 5 } },
                                            profiles[id].dob ? _react2.default.createElement(
                                                'span',
                                                { className: 'fw-500 text-sm' },
                                                profiles[id].dob
                                            ) : '',
                                            profiles[id].dob && profiles[id].gender ? _react2.default.createElement(
                                                'span',
                                                { className: 'pipe-sign' },
                                                ' | '
                                            ) : '',
                                            profiles[id].gender ? '' + GENDER[profiles[id].gender] : ''
                                        ),
                                        profiles[id].is_default_user ? _react2.default.createElement(
                                            'li',
                                            { className: 'fw-500 text-sm' },
                                            profiles[id].phone_number ? '' + profiles[id].phone_number : '',
                                            profiles[id].phone_number && profiles[id].email ? _react2.default.createElement(
                                                'span',
                                                { className: 'pipe-sign' },
                                                ' | '
                                            ) : '',
                                            profiles[id].email ? '' + profiles[id].email : ''
                                        ) : ''
                                    ),
                                    profiles[id].is_insured && _react2.default.createElement(
                                        'div',
                                        { className: 'ins-covrd-txt' },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Covered',
                                            _react2.default.createElement('br', null),
                                            'Under Insurance'
                                        )
                                    )
                                )
                            )
                        ));
                    } else {
                        normal_profile.push(_react2.default.createElement(
                            'li',
                            { key: key, onClick: _this2.editProfile.bind(_this2, id, false) },
                            _react2.default.createElement(
                                'a',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon icon-lg member-icon' },
                                    _react2.default.createElement(
                                        _initialsPicture2.default,
                                        { name: profiles[id].name, has_image: profiles[id].profile_image, className: 'initialsPicture-family' },
                                        _react2.default.createElement('img', { style: { width: '45px', height: '45px' }, src: profiles[id].profile_image, className: 'img-fluid img-round' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'member-details' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'title app-title', style: { paddingRight: 95, wordBreak: 'break-word', textTransform: 'capitalize' } },
                                        profiles[id].name
                                    ),
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'list' },
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'fw-500 text-sm', style: { marginBottom: 5 } },
                                            profiles[id].dob ? _react2.default.createElement(
                                                'span',
                                                { className: 'fw-500 text-sm' },
                                                profiles[id].dob
                                            ) : '',
                                            profiles[id].dob && profiles[id].gender ? _react2.default.createElement(
                                                'span',
                                                { className: 'pipe-sign' },
                                                ' | '
                                            ) : '',
                                            profiles[id].gender ? '' + GENDER[profiles[id].gender] : ''
                                        ),
                                        profiles[id].is_default_user ? _react2.default.createElement(
                                            'li',
                                            { className: 'fw-500 text-sm' },
                                            profiles[id].phone_number ? '' + profiles[id].phone_number : '',
                                            profiles[id].phone_number && profiles[id].email ? _react2.default.createElement(
                                                'span',
                                                { className: 'pipe-sign' },
                                                ' | '
                                            ) : '',
                                            profiles[id].email ? '' + profiles[id].email : ''
                                        ) : ''
                                    ),
                                    gold_user_profile && Object.keys(gold_user_profile).length && gold_user_profile.vip_data && Object.keys(gold_user_profile.vip_data).length && gold_user_profile.vip_data.total_members_allowed > 0 && gold_user_profile.vip_data.is_member_allowed ? _react2.default.createElement(
                                        'button',
                                        { onClick: function onClick(e) {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                _this2.addtoGold(id);
                                            }, className: 'gold-covrd-btn' },
                                        '+ Add to Gold'
                                    ) : ''
                                )
                            )
                        ));
                    }
                });
            }

            return _react2.default.createElement(
                'div',
                { className: 'widget mt-20' },
                profiles && Object.keys(profiles).length ? _react2.default.createElement(
                    'h4',
                    { className: 'fw-500 user-heading' },
                    'Select Member'
                ) : '',
                _react2.default.createElement(
                    'div',
                    { className: 'widget-content pl-0 pr-0' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'list family-list dp-user-list box-shadow-none' },
                        gold_profile,
                        insurance_profile,
                        normal_profile
                    ),
                    Object.keys(profiles).filter(function (x) {
                        return !profiles[x].isDummyUser;
                    }).length == 0 ? _react2.default.createElement(
                        'div',
                        { className: 'text-center pd-20' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/no-family.png" }),
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 text-lg mrt-20' },
                            'No Family Member Added !!'
                        )
                    ) : "",
                    _react2.default.createElement(
                        'div',
                        { className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container mrng-top-20' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.addProfile.bind(this), className: 'v-btn-primary book-btn-mrgn-adjust ' },
                            'Add New Member'
                        )
                    )
                )
            );
        }
    }]);

    return UserFamily;
}(_react2.default.Component);

exports.default = UserFamily;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userFamily/index.js":
/*!*******************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userFamily/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserFamily = __webpack_require__(/*! ./UserFamily */ "./dev/js/components/commons/userProfile/userFamily/UserFamily.js");

var _UserFamily2 = _interopRequireDefault(_UserFamily);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _UserFamily2.default;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userPrescriptions/PrescriptionCard.js":
/*!*************************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userPrescriptions/PrescriptionCard.js ***!
  \*************************************************************************************/
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

var PrescriptionCardView = function (_React$Component) {
    _inherits(PrescriptionCardView, _React$Component);

    function PrescriptionCardView() {
        _classCallCheck(this, PrescriptionCardView);

        return _possibleConstructorReturn(this, (PrescriptionCardView.__proto__ || Object.getPrototypeOf(PrescriptionCardView)).apply(this, arguments));
    }

    _createClass(PrescriptionCardView, [{
        key: 'downloadImage',
        value: function downloadImage(src) {
            if (window) {
                window.open(src, '_blank');
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var date = new Date(this.props._updatedAt).toDateString();

            return _react2.default.createElement(
                'div',
                { className: 'prescription-card' },
                _react2.default.createElement(
                    'div',
                    { className: 'pres-card-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-8' },
                            _react2.default.createElement(
                                'div',
                                { className: 'prs-name-section' },
                                _react2.default.createElement('img', { src: "/assets" + "/img/ps-lft.svg" }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'name-sec-text' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'prs-name-age-gender' },
                                        '  ',
                                        this.props.profile.name,
                                        ' | ',
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            this.props.profile.age
                                        ),
                                        '   |   ',
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            this.props.profile.gender.toUpperCase()
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'prs-sub-txt' },
                                        'By Dr. ' + this.props.doctorProfile.name
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4' },
                            _react2.default.createElement(
                                'div',
                                { className: 'prs-pdf-section' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Created on',
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        date
                                    )
                                ),
                                _react2.default.createElement(
                                    'a',
                                    { href: '#', onClick: this.downloadImage.bind(this, this.props.PrescriptionFileURL) },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/pdf-dwn.png" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PrescriptionCardView;
}(_react2.default.Component);

exports.default = PrescriptionCardView;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userPrescriptions/index.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userPrescriptions/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userPrescriptions = __webpack_require__(/*! ./userPrescriptions */ "./dev/js/components/commons/userProfile/userPrescriptions/userPrescriptions.js");

var _userPrescriptions2 = _interopRequireDefault(_userPrescriptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _userPrescriptions2.default;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userPrescriptions/userPrescriptions.js":
/*!**************************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userPrescriptions/userPrescriptions.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _PrescriptionCard = __webpack_require__(/*! ./PrescriptionCard */ "./dev/js/components/commons/userProfile/userPrescriptions/PrescriptionCard.js");

var _PrescriptionCard2 = _interopRequireDefault(_PrescriptionCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserPrescriptionList = function (_React$Component) {
	_inherits(UserPrescriptionList, _React$Component);

	function UserPrescriptionList() {
		_classCallCheck(this, UserPrescriptionList);

		return _possibleConstructorReturn(this, (UserPrescriptionList.__proto__ || Object.getPrototypeOf(UserPrescriptionList)).apply(this, arguments));
	}

	_createClass(UserPrescriptionList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.USER.primaryMobile) {
				//this.props.getUserPrescription(this.props.USER.primaryMobile);
			}
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				null,
				this.props.USER.userPrescriptions && this.props.USER.userPrescriptions.data && this.props.USER.userPrescriptions.data.prescriptions.length ? this.props.USER.userPrescriptions.data.prescriptions.map(function (prescription, index) {
					return _react2.default.createElement(_PrescriptionCard2.default, prescription);
				}) : _react2.default.createElement(
					'p',
					null,
					'No Prescriptions Found'
				)
			);
		}
	}]);

	return UserPrescriptionList;
}(_react2.default.Component);

exports.default = UserPrescriptionList;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userReports/UserReportsView.js":
/*!******************************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userReports/UserReportsView.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(/*! ../../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _reactImageLightbox = __webpack_require__(/*! react-image-lightbox */ "./node_modules/react-image-lightbox/dist/index.es.js");

var _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Lightbox from '../../../../helpers/lightbox';


var UserReportsView = function (_React$Component) {
    _inherits(UserReportsView, _React$Component);

    function UserReportsView(props) {
        _classCallCheck(this, UserReportsView);

        var _this = _possibleConstructorReturn(this, (UserReportsView.__proto__ || Object.getPrototypeOf(UserReportsView)).call(this, props));

        _this.state = {
            loading: true,
            type: _this.props.match.params.type,
            id: _this.props.match.params.id,
            reports: [],
            lightboxIsOpen: false,
            imageIndex: 0
        };
        return _this;
    }

    _createClass(UserReportsView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.setState({ loading: true });
            this.props.getAppointmentReports(this.state.id, this.state.type, function (err, data) {
                // get user reports
                if (!err) {
                    _this2.setState({ reports: data, loading: false });
                } else {
                    _this2.setState({ loading: false });
                }
            });
        }
    }, {
        key: 'toggleLightBox',
        value: function toggleLightBox() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var imageIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            this.setState({ lightboxIsOpen: type, imageIndex: imageIndex });
        }
    }, {
        key: 'checkExtension',
        value: function checkExtension(report, i) {
            var extensionArr = report.name.split('.');
            var extension = extensionArr[extensionArr.length - 1];
            if (extension == 'pdf') {
                return _react2.default.createElement(
                    'div',
                    { onClick: this.downloadImage.bind(this, report.name), className: 'pdf-report-div', key: i },
                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/pdf-icon.svg" })
                );
            } else if (extension == 'txt') {
                return _react2.default.createElement(
                    'div',
                    { onClick: this.downloadImage.bind(this, report.name), className: 'pdf-report-div', key: i },
                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/text-icon.svg" })
                );
            } else {
                return _react2.default.createElement('img', { src: report.name, key: i, className: 'imageReports', onClick: this.toggleLightBox.bind(this, true, i) });
            }
        }
    }, {
        key: 'downloadImage',
        value: function downloadImage(src) {
            if (window) {
                window.open(src, '_blank');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var images = [];
            var _state = this.state,
                lightboxIsOpen = _state.lightboxIsOpen,
                imageIndex = _state.imageIndex;

            if (this.state.reports && this.state.reports.length) {
                images = this.state.reports.map(function (im) {
                    return im.name;
                });
            }

            return _react2.default.createElement(
                'div',
                { className: 'widget-content' },
                !this.state.loading ? _react2.default.createElement(
                    'div',
                    null,
                    this.state.reports.length == 0 ? _react2.default.createElement(
                        'div',
                        { className: 'text-center pd-20' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/no-address.png" }),
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 text-lg mrt-20' },
                            'No Files Uploaded !!'
                        )
                    ) : "",
                    this.state.reports.map(function (report, i) {
                        return _this3.checkExtension(report, i);
                    }),
                    this.state.lightboxIsOpen ? _react2.default.createElement(_reactImageLightbox2.default, {
                        toolbarButtons: [_react2.default.createElement(
                            'p',
                            { className: 'dwnloadbtnpres', onClick: this.downloadImage.bind(this, images[imageIndex]) },
                            'DOWNLOAD'
                        )],
                        mainSrc: images[imageIndex],
                        nextSrc: images[(imageIndex + 1) % images.length],
                        prevSrc: images[(imageIndex + images.length - 1) % images.length],
                        onCloseRequest: function onCloseRequest() {
                            return _this3.setState({ lightboxIsOpen: false });
                        },
                        onMovePrevRequest: function onMovePrevRequest() {
                            return _this3.setState({
                                imageIndex: (imageIndex + images.length - 1) % images.length
                            });
                        },
                        onMoveNextRequest: function onMoveNextRequest() {
                            return _this3.setState({
                                imageIndex: (imageIndex + 1) % images.length
                            });
                        }
                    }) : ""
                ) : _react2.default.createElement(_Loader2.default, null)
            );
        }
    }]);

    return UserReportsView;
}(_react2.default.Component);

exports.default = UserReportsView;

/***/ }),

/***/ "./dev/js/components/commons/userProfile/userReports/index.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/userProfile/userReports/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserReportsView = __webpack_require__(/*! ./UserReportsView.js */ "./dev/js/components/commons/userProfile/userReports/UserReportsView.js");

var _UserReportsView2 = _interopRequireDefault(_UserReportsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _UserReportsView2.default;

/***/ }),

/***/ "./dev/js/containers/commons/UserProfile.js":
/*!**************************************************!*\
  !*** ./dev/js/containers/commons/UserProfile.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _index2 = __webpack_require__(/*! ../../components/commons/userProfile/index.js */ "./dev/js/components/commons/userProfile/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var UserProfile = function (_React$Component) {
    _inherits(UserProfile, _React$Component);

    function UserProfile(props) {
        _classCallCheck(this, UserProfile);

        var _this = _possibleConstructorReturn(this, (UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).call(this, props));

        if (!_storage2.default.checkAuth()) {
            var parsed = queryString.parse(window.location.search);
            if (parsed && parsed.ref) {
                _this.props.history.replace('/login?callback=/&ref=home');
            } else {
                _this.props.history.replace('/login?callback=/');
            }
        }
        return _this;
    }

    _createClass(UserProfile, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile(); // get loggedIn user profiles
                this.props.getUserAddress(); // get user address
                this.props.getCoupons({}); // get user specific coupons
                this.props.getCartItems(); // get user cart items
                //this.props.getIsCareDetails() // get user subscription plan details
            }
            // this.props.loadOPDInsurance(this.props.selectedLocation)
        }
    }, {
        key: 'render',
        value: function render() {
            if (!_storage2.default.checkAuth()) {
                return _react2.default.createElement('div', null);
            }
            return _react2.default.createElement(_index3.default, this.props);
        }
    }], [{
        key: 'loadData',
        value: function loadData(store) {
            return store.dispatch((0, _index.getUserProfile)());
        }
    }]);

    return UserProfile;
}(_react2.default.Component);

UserProfile.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;

    var _state$USER = state.USER,
        applicableCoupons = _state$USER.applicableCoupons,
        isUserCared = _state$USER.isUserCared;
    var selectedSlot = state.LAB_SEARCH.selectedSlot;
    var selectedCriterias = state.SEARCH_CRITERIA_LABS.selectedCriterias;
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        common_settings = _state$SEARCH_CRITERI.common_settings;


    return {
        USER: USER,
        applicableCoupons: applicableCoupons,
        isUserCared: isUserCared,
        selectedSlot: selectedSlot,
        selectedCriterias: selectedCriterias,
        selectedLocation: selectedLocation,
        common_settings: common_settings
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        logout: function logout(roomId) {
            return dispatch((0, _index.logout)(roomId));
        },
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        getProfileAppointments: function getProfileAppointments(profile_id) {
            return dispatch((0, _index.getProfileAppointments)(profile_id));
        },
        selectProfile: function selectProfile(profile_id) {
            return dispatch((0, _index.selectProfile)(profile_id));
        },
        getUserAddress: function getUserAddress() {
            return dispatch((0, _index.getUserAddress)());
        },
        addUserAddress: function addUserAddress(postData, cb) {
            return dispatch((0, _index.addUserAddress)(postData, cb));
        },
        updateUserAddress: function updateUserAddress(postData, cb) {
            return dispatch((0, _index.updateUserAddress)(postData, cb));
        },
        editUserProfile: function editUserProfile(profileData, profileId, cb) {
            return dispatch((0, _index.editUserProfile)(profileData, profileId, cb));
        },
        editUserProfileImage: function editUserProfileImage(profileData, profileId, cb) {
            return dispatch((0, _index.editUserProfileImage)(profileData, profileId, cb));
        },
        selectPickupAddress: function selectPickupAddress(address) {
            return dispatch((0, _index.selectPickupAddress)(address));
        },
        getAppointmentReports: function getAppointmentReports(appointmentId, type, cb) {
            return dispatch((0, _index.getAppointmentReports)(appointmentId, type, cb));
        },
        getUserPrescription: function getUserPrescription(mobileNo) {
            return dispatch((0, _index.getUserPrescription)(mobileNo));
        },
        getCoupons: function getCoupons(productId) {
            return dispatch((0, _index.getCoupons)(productId));
        },
        getUserReviews: function getUserReviews(cb) {
            return dispatch((0, _index.getUserReviews)(cb));
        },
        getRatingCompliments: function getRatingCompliments(callback) {
            return dispatch((0, _index.getRatingCompliments)(callback));
        },
        updateAppointmentRating: function updateAppointmentRating(ratingData, callback) {
            return dispatch((0, _index.updateAppointmentRating)(ratingData, callback));
        },
        OTTLogin: function OTTLogin(ott, user_id) {
            return dispatch((0, _index.OTTLogin)(ott, user_id));
        },
        setCorporateCoupon: function setCorporateCoupon(coupon) {
            return dispatch((0, _index.setCorporateCoupon)(coupon));
        },
        clearExtraTests: function clearExtraTests() {
            return dispatch((0, _index.clearExtraTests)());
        },
        getCartItems: function getCartItems() {
            return dispatch((0, _index.getCartItems)());
        },
        generateInsuranceLead: function generateInsuranceLead(selectedPlan, cb) {
            return dispatch((0, _index.generateInsuranceLead)(selectedPlan, cb));
        },
        getIsCareDetails: function getIsCareDetails() {
            return dispatch((0, _index.getIsCareDetails)());
        },
        preBooking: function preBooking(slot) {
            return dispatch((0, _index.preBooking)(slot));
        },
        loadOPDInsurance: function loadOPDInsurance(city) {
            return dispatch((0, _index.loadOPDInsurance)(city));
        },
        sendOtpOnEmail: function sendOtpOnEmail(criteria, callback) {
            return dispatch((0, _index.sendOtpOnEmail)(criteria, callback));
        },
        submitEmailOTP: function submitEmailOTP(data, cb) {
            return dispatch((0, _index.submitEmailOTP)(data, cb));
        },
        clearVipSelectedPlan: function clearVipSelectedPlan() {
            return dispatch((0, _index.clearVipSelectedPlan)());
        },
        resetVipData: function resetVipData() {
            return dispatch((0, _index.resetVipData)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserProfile);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9XaGF0c0FwcE9wdGluL1doYXRzQXBwT3B0aW5WaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvY291cG9uU2VsZWN0aW9uVmlldy90ZXJtc0NvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS9Vc2VyUHJvZmlsZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS9lZGl0UHJvZmlsZS9FZGl0UHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL2VkaXRQcm9maWxlL2Jhc2ljLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvZWRpdFByb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS9lZGl0UHJvZmlsZS9tZWRpY2FsLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS9wcm9maWxlRGF0YS9Qcm9maWxlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3Byb2ZpbGVEYXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlckFkZHJlc3MvVXNlckFkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS91c2VyQWRkcmVzcy9hZGQvYWRkQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJBZGRyZXNzL2FkZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJBZGRyZXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlckFwcG9pbnRtZW50cy9Vc2VyQXBwb2ludG1lbnRzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJBcHBvaW50bWVudHMvYXBwb2ludG1lbnRMaXN0L0FwcG9pbnRtZW50TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJBcHBvaW50bWVudHMvYXBwb2ludG1lbnRMaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlckFwcG9pbnRtZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJDb3Vwb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlckNvdXBvbnMvdXNlckNvdXBvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS91c2VyRmFtaWx5L1VzZXJGYW1pbHkuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS91c2VyRmFtaWx5L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlclByZXNjcmlwdGlvbnMvUHJlc2NyaXB0aW9uQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJQcmVzY3JpcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlclByZXNjcmlwdGlvbnMvdXNlclByZXNjcmlwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS91c2VyUmVwb3J0cy9Vc2VyUmVwb3J0c1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS91c2VyUmVwb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL1VzZXJQcm9maWxlLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsInByb3BzIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsIldoYXRzQXBwT3B0aW5WaWV3Iiwic3RhdGUiLCJ3aGF0c2FwcF9vcHRpbl9WaWV3IiwicHJvZmlsZXMiLCJ3aGF0c2FwcF9vcHRpbiIsImlzQXBwb2ludG1lbnQiLCJ3aGF0c2FwcF9pc19kZWNsaW5lZCIsImlzVXNlclByb2ZpbGUiLCJzdGF0dXMiLCJlIiwicHJvZmlsZURhdGEiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiZWRpdFVzZXJQcm9maWxlIiwiaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRTdGF0ZSIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJ0b2dnbGVXaGF0c2FwIiwic2hvdWxkUmVuZGVyIiwiQVNTRVRTX0JBU0VfVVJMIiwiYmluZCIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiVGVybXMiLCJ0b2dnbGUiLCJfX2h0bWwiLCJ0bmMiLCJTZWN0aW9uX0NvbXBvbmVudCIsImNoaWxkcmVuIiwidGl0bGUiLCJoaXN0b3J5IiwibG9nb3V0IiwiVXNlclByb2ZpbGVWaWV3Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJVU0VSIiwic2VsZWN0ZWRQcm9maWxlIiwibWF0Y2giLCJ1cmwiLCJwYXJhbXMiLCJ0eXBlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiRWRpdFByb2ZpbGUiLCJjdXJyZW50UHJvZmlsZSIsInNlbGVjdGVkVGFiIiwibG9hZGluZyIsIm9wZW5Dcm9wIiwiZXJyb3JzIiwiaXNFbWFpbFZlcmlmaWVkIiwiaXNFbWFpbFVwZGF0ZWQiLCJpc0VtYWlsRXJyb3IiLCJpc0RvYlZhbGlkYXRlZCIsImlzX2RvYl9lcnJvciIsImFkZF90b19nb2xkIiwic2VhcmNoIiwiZnJvbV9ib29raW5nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImRvYiIsInB1c2giLCJzZWxmIiwic2hvd19kZWZhdWx0X2NoZWNrQm94IiwiaXNfcHJvZmlsZV9lZGl0YWJsZSIsImdvbGRfdXNlcl9wcm9maWxlIiwiZGVmYXVsdF9wcm9maWxlIiwiZW50cmllcyIsIm1hcCIsImtleSIsInZhbHVlIiwiaXNfaW5zdXJlZCIsImlzX2RlZmF1bHRfdXNlciIsImlzX3ZpcF9nb2xkX21lbWJlciIsIm1hcmdpbkJvdHRvbSIsIm1hbmFnZUFkZHJlc3MiLCJ1cGRhdGVQcm9maWxlIiwicHJvY2VlZFVwZGF0ZSIsInRvZ2dsZU9wZW5Dcm9wIiwidmVyaWZ5RW5kb3JzZW1lbnRFbWFpbCIsImFkZFRvR29sZCIsIm5ld2VtYWlsIiwidmVyaWZpZWQiLCJpc19lbWFpbF9jaGFuZ2VkIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJ2YWxzIiwiZmllbGQiLCJ2YWxpZGF0ZWQiLCJ0b1N0cmluZyIsImdlbmRlciIsImVyciIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwicmVzZXRWaXBEYXRhIiwiZ28iLCJnZXRDb21wIiwiQ29tcHJlc3MiLCJyZXF1aXJlIiwibW9tZW50IiwiQmFzaWNEZXRhaWxzIiwiZGF0YVVybCIsImZvcm1hdHRlZERhdGUiLCJ0YXJnZXQiLCJ2YWwiLCJmaWxlcyIsImNvbXByZXNzIiwiZmlsZSIsInF1YWxpdHkiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInRoZW4iLCJyZXN1bHRzIiwiaW1nMSIsImJhc2U2NHN0ciIsImltZ0V4dCIsImV4dCIsImNvbnZlcnRCYXNlNjRUb0ZpbGUiLCJnZXRCYXNlNjQiLCJjYXRjaCIsImNiIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmlsZV9ibG9iX2RhdGEiLCJkYXRhVVJJdG9CbG9iIiwicmVmcyIsImNyb3BwZXIiLCJnZXRDcm9wcGVkQ2FudmFzIiwidG9EYXRhVVJMIiwiZm9ybV9kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJlZGl0VXNlclByb2ZpbGVJbWFnZSIsImRhdGFVUkkiLCJiaW5hcnkiLCJhdG9iIiwic3BsaXQiLCJhcnJheSIsImkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsIlVpbnQ4QXJyYXkiLCJkYXRlTW9kYWwiLCJkYXRlIiwidG9EYXRlIiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImRkIiwiZ2V0RGF0ZSIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJ0b2RheSIsIm5hbWUiLCJlbWFpbCIsInBob25lX251bWJlciIsInByb2ZpbGVfaW1hZ2UiLCJ3aWR0aCIsImN1cnNvciIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJkaXNwbGF5IiwicGlja0ZpbGUiLCJoYW5kbGVHZW5kZXIiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVFbnRlclByZXNzIiwiZGlmZiIsInNlbGVjdERhdGVGcm9tQ2FsZW5kYXIiLCJ2aXBfZGF0YSIsInRvdGFsX21lbWJlcnNfYWxsb3dlZCIsImlzX21lbWJlcl9hbGxvd2VkIiwiaGFuZGxlRGVmYXVsdFVzZXIiLCJ6SW5kZXgiLCJmaW5pc2hDcm9wIiwiTWVkaWNhbERldGFpbHMiLCJQcm9maWxlRGF0YSIsIm9wZW5UZXJtc0NvbmRpdGlvbnMiLCJ3aGVyZSIsImNvdXBvbiIsInNldENvcnBvcmF0ZUNvdXBvbiIsImNsZWFyRXh0cmFUZXN0cyIsInRlc3RfaWRzIiwibmV0d29ya19pZCIsInRlc3RzIiwiaHJlZiIsImpvaW4iLCJpc1VzZXJDYXJlZCIsImhhc19hY3RpdmVfcGxhbiIsInVzZXJfcGxhbl9pZCIsImlzVXNlckxvZ2luSW5zdXJlZCIsInBhcnNlSW50IiwiZGVmYXVsdFByb2ZpbGUiLCJpbnN1cmFuY2Vfc3RhdHVzIiwiZ2VuZXJhdGVJbnN1cmFuY2VMZWFkIiwiY3VycmVudFJvb21JZCIsIm1lbWJlckNsYXNzIiwibWVtU3RhdHVzIiwiYXBwbGljYWJsZUNvdXBvbnMiLCJpc19jYXJlIiwiY2FyZV91c2VyX3Byb2ZpbGUiLCJ1c2VyTmFtZSIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwiZXhwaXJ5X2RhdGUiLCJpc192aXBfbWVtYmVyIiwicGFkZGluZ0xlZnQiLCJjbGVhclZpcFNlbGVjdGVkUGxhbiIsImlzX2NvcnBvcmF0ZSIsInNlYXJjaExhYiIsImhlaWdodCIsImhlYWRpbmciLCJkZXNjIiwiY29kZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRvZ2dsZVRhbmRDIiwiQ09ORklHIiwiRU5BQkxFX0lOU1VSQU5DRSIsImdvVG9JbnN1cmFuY2UiLCJnZXRJbnN1cmFuY2VCdG5UZXh0IiwiRU5BQkxFX1ZJUF9DTFVCIiwiRU5BQkxFX1ZJUF9HT0xEIiwiaXNEb2NDYXJlIiwiZ290VG8iLCJ1bnJlYWRfY291bnQiLCJVc2VyQWRkcmVzcyIsInBpY2siLCJzZWxlY3RQaWNrdXBBZGRyZXNzIiwiYWRkcmVzc0RhdGEiLCJpc19kZWZhdWx0IiwidXBkYXRlVXNlckFkZHJlc3MiLCJnZXRVc2VyQWRkcmVzcyIsImVkaXRBZGRyZXNzIiwiYWRkcmVzcyIsImN1cnIiLCJ1cGRhdGVBZGRyZXNzIiwidG9wIiwicG9zaXRpb24iLCJsZWZ0Iiwid29yZFdyYXAiLCJsYW5kX21hcmsiLCJsb2NhbGl0eSIsImFkZEFkZHJlc3MiLCJVc2VyU2lnbnVwVmlldyIsImRlZl9wcm9maWxlIiwibGFuZG1hcmtfcGxhY2VfaWQiLCJsYW5kbWFya19sb2NhdGlvbl9sYXQiLCJsYW5kbWFya19sb2NhdGlvbl9sb25nIiwicGluY29kZSIsImxvY2FsaXR5X3BsYWNlX2lkIiwibG9jYWxpdHlfbG9jYXRpb25fbGF0IiwibG9jYWxpdHlfbG9jYXRpb25fbG9uZyIsImVkaXQiLCJsYW5kX21hcmtfcmVzdWx0cyIsImxvY2FsaXR5X3Jlc3VsdHMiLCJyZXN1bHRGaWVsZCIsInR5cGVzIiwiZWRpdFN0YXRlIiwiZ2V0TG9jYXRpb24iLCJmb3JFYWNoIiwicHJwIiwic3R5bGUiLCJib3JkZXIiLCJhZGRVc2VyQWRkcmVzcyIsInJlcyIsInJlZmVyZW5jZSIsInBsYWNlIiwicGxhY2VfaWQiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImdlb21ldHJ5IiwibGF0IiwibG9uZyIsImxuZyIsImNsb3NlUmVzdWx0cyIsImlucHV0SGFuZGxlciIsInNlbGVjdExvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJzdWJtaXRGb3JtIiwiQWRkQWRkcmVzcyIsIlVzZXJBcHBvaW50bWVudHNWaWV3Iiwic2hvd1JlcG9ydHMiLCJhcHBvaW50bWVudFJlcG9ydHMiLCJzaG93X3NvcnRlZF9yZXN1bHRzIiwiZ2V0UHJvZmlsZUFwcG9pbnRtZW50cyIsInJlcG9ydHMiLCJzcmMiLCJvcGVuIiwiYXBwb2ludG1lbnRzIiwiZ3RtRGF0YSIsImFwcG9pbnRtZW50X2xpc3QiLCJpbmRleE9mIiwiZmlsdGVyIiwieCIsInNlbGVjdE9wdGlvbnMiLCJtYXJnaW5Ub3AiLCJhcHAiLCJsYWIiLCJ2aWV3UmVwb3J0Q2xpY2siLCJoaWRlUmVwb3J0cyIsInJlcG9ydCIsImluZGV4IiwicmVwb3J0Q2xpY2siLCJtYXJnaW5SaWdodCIsImZsZXgiLCJtYXJnaW5MZWZ0IiwiU1RBVFVTX01BUCIsIkNSRUFURUQiLCJCT09LRUQiLCJSRVNDSEVEVUxFRF9ET0NUT1IiLCJSRVNDSEVEVUxFRF9QQVRJRU5UIiwiQUNDRVBURUQiLCJDQU5DRUxFRCIsIkNPTVBMRVRFRCIsIkFwcG9pbnRtZW50TGlzdCIsInVuaXhfdGltZXN0YW1wIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiYW1wbSIsInN0clRpbWUiLCJpbnZvaWNlTGluayIsIndpbiIsImZvY3VzIiwiZGVhbF9wcmljZSIsImRvY3Rvcl9uYW1lIiwiZGlzcGxheV9uYW1lIiwidGltZV9zbG90X2VuZCIsInRpbWVfc2xvdF9zdGFydCIsImxhYl9uYW1lIiwibGFiX3Rlc3RfbmFtZSIsImRvY3Rvcl90aHVtYm5haWwiLCJsYWJfdGh1bWJuYWlsIiwicGF0aWVudF9uYW1lIiwiaW52b2ljZXMiLCJob3NwaXRhbF9uYW1lIiwic3BlY2lhbGl6YXRpb24iLCJ2aXAiLCJwYXltZW50X21vZGUiLCJkaXNjb3VudCIsImlzX3ZpcF9hcHBsaWNhYmxlIiwiY292ZXJlZF91bmRlcl92aXAiLCJvcGVuQXBwb2ludG1lbnQiLCJzcGVjaWFsaXR5IiwidGVzdF9uYW1lIiwidG9EYXRlU3RyaW5nIiwiZ2V0VGltZSIsImdldFN0YXR1cyIsInJpZ2h0IiwicGFkZGluZyIsImludm9pY2VDbGljayIsInVzZXJDb3Vwb25zIiwiVXNlckNvdXBvbnMiLCJzZWxlY3RlZENvdXBvbiIsInF1ZXJ5U3RyaW5nIiwiR0VOREVSIiwiVXNlckZhbWlseSIsImJpcnRoZGF5IiwiYWdlRGlmTXMiLCJub3ciLCJhZ2VEYXRlIiwiTWF0aCIsImFicyIsImdldFVUQ0Z1bGxZZWFyIiwiZnJvbVdoZXJlIiwicGFyc2VkIiwicGFyc2UiLCJzZWxlY3RQcm9maWxlIiwic2VsZWN0ZWRfdGVzdF9pZCIsInNlbGVjdGVkRGF0ZSIsImlzX2luc3VyYW5jZSIsInNlbGVjdGVkQ3JpdGVyaWFzIiwidHdwIiwic3RhcnRfZGF0ZSIsInNlbGVjdGVkU2xvdCIsImxhYl90ZXN0IiwibGFiX2lkIiwicHJvZmlsZSIsInByZUJvb2tpbmciLCJlZGl0UHJvZmlsZSIsImdvbGRfcHJvZmlsZSIsIm5vcm1hbF9wcm9maWxlIiwiaW5zdXJhbmNlX3Byb2ZpbGUiLCJpc0R1bW15VXNlciIsInBhZGRpbmdSaWdodCIsIndvcmRCcmVhayIsInRleHRUcmFuc2Zvcm0iLCJhZGR0b0dvbGQiLCJhZGRQcm9maWxlIiwiUHJlc2NyaXB0aW9uQ2FyZFZpZXciLCJfdXBkYXRlZEF0IiwiYWdlIiwidG9VcHBlckNhc2UiLCJkb2N0b3JQcm9maWxlIiwiZG93bmxvYWRJbWFnZSIsIlByZXNjcmlwdGlvbkZpbGVVUkwiLCJVc2VyUHJlc2NyaXB0aW9uIiwiVXNlclByZXNjcmlwdGlvbkxpc3QiLCJwcmltYXJ5TW9iaWxlIiwidXNlclByZXNjcmlwdGlvbnMiLCJwcmVzY3JpcHRpb25zIiwicHJlc2NyaXB0aW9uIiwiVXNlclJlcG9ydHNWaWV3IiwibGlnaHRib3hJc09wZW4iLCJpbWFnZUluZGV4IiwiZ2V0QXBwb2ludG1lbnRSZXBvcnRzIiwiZXh0ZW5zaW9uQXJyIiwiZXh0ZW5zaW9uIiwidG9nZ2xlTGlnaHRCb3giLCJpbWFnZXMiLCJpbSIsImNoZWNrRXh0ZW5zaW9uIiwiVXNlclByb2ZpbGUiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwicmVmIiwicmVwbGFjZSIsImdldFVzZXJQcm9maWxlIiwiZ2V0Q291cG9ucyIsImdldENhcnRJdGVtcyIsInN0b3JlIiwiZGlzcGF0Y2giLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJMQUJfU0VBUkNIIiwiU0VBUkNIX0NSSVRFUklBX0xBQlMiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwic2VsZWN0ZWRMb2NhdGlvbiIsImNvbW1vbl9zZXR0aW5ncyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInJvb21JZCIsInByb2ZpbGVfaWQiLCJwb3N0RGF0YSIsInByb2ZpbGVJZCIsImFwcG9pbnRtZW50SWQiLCJnZXRVc2VyUHJlc2NyaXB0aW9uIiwibW9iaWxlTm8iLCJwcm9kdWN0SWQiLCJnZXRVc2VyUmV2aWV3cyIsImdldFJhdGluZ0NvbXBsaW1lbnRzIiwiY2FsbGJhY2siLCJ1cGRhdGVBcHBvaW50bWVudFJhdGluZyIsInJhdGluZ0RhdGEiLCJPVFRMb2dpbiIsIm90dCIsInVzZXJfaWQiLCJzZWxlY3RlZFBsYW4iLCJnZXRJc0NhcmVEZXRhaWxzIiwic2xvdCIsImxvYWRPUERJbnN1cmFuY2UiLCJjaXR5Iiwic2VuZE90cE9uRW1haWwiLCJjcml0ZXJpYSIsInN1Ym1pdEVtYWlsT1RQIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1RBLEtBRFM7QUFFbEI7Ozs7aUNBRVE7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsS0FBS0EsS0FBTCxDQUFXQyxTQUFYLElBQXdCLGdCQUF4QztBQUNJLHVEQUFLLFdBQVUsV0FBZixHQURKO0FBR1EscUJBQUtELEtBQUwsQ0FBV0UsV0FBWCxHQUNJO0FBQUE7QUFBQSxzQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGlCQURKLEdBQytFO0FBSnZGLGFBREo7QUFTSDs7OztFQWhCZ0JDLGdCQUFNQyxTOztrQkFtQlpMLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZjs7Ozs7O2tCQUVlQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBQ0E7Ozs7QUFD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LFFBQUQsRUFBVVosUUFBVjtBQUFBLG1CQUFxQnBCLFNBQVMsMkJBQWVnQyxRQUFmLEVBQXdCWixRQUF4QixDQUFULENBQXJCO0FBQUEsU0F6Qlo7QUEwQkhhLHdCQUFnQix3QkFBQ3BjLElBQUQsRUFBTzZHLEVBQVA7QUFBQSxtQkFBY3NULFNBQVMsMkJBQWVuYSxJQUFmLEVBQXFCNkcsRUFBckIsQ0FBVCxDQUFkO0FBQUEsU0ExQmI7QUEyQkgrRiw4QkFBcUI7QUFBQSxtQkFBTXVOLFNBQVMsa0NBQVQsQ0FBTjtBQUFBLFNBM0JsQjtBQTRCSGhWLHNCQUFhO0FBQUEsbUJBQU1nVixTQUFTLDBCQUFULENBQU47QUFBQTtBQTVCVixLQUFQO0FBOEJILENBL0JEOztrQkFrQ2UseUJBQVFHLGVBQVIsRUFBeUJNLGtCQUF6QixFQUE2Q2xCLFdBQTdDLEMiLCJmaWxlIjoiNTMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIFdoYXRzQXBwT3B0aW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgd2hhdHNhcHBfb3B0aW5fVmlldzp0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRSZW5kZXIoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wcm9maWxlcyl7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlcy53aGF0c2FwcF9vcHRpbiAhPW51bGwpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuaXNBcHBvaW50bWVudCAmJiAhdGhpcy5wcm9wcy5wcm9maWxlcy53aGF0c2FwcF9vcHRpbiAmJiAhdGhpcy5wcm9wcy5wcm9maWxlcy53aGF0c2FwcF9pc19kZWNsaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMuaXNVc2VyUHJvZmlsZSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHRvZ2dsZVdoYXRzYXAoc3RhdHVzLGUpIHsgICAgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaXNBcHBvaW50bWVudCl7ICAgICAgXG4gICAgICAgICAgICBsZXQgcHJvZmlsZURhdGEgPSB7Li4udGhpcy5wcm9wcy5wcm9maWxlc31cbiAgICAgICAgICAgIGlmKHN0YXR1cyl7XG4gICAgICAgICAgICAgICAgcHJvZmlsZURhdGEud2hhdHNhcHBfb3B0aW4gPSB0cnVlXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIllvdSB3aGF0c0FwcCBub3RpZmljYXRpb25zIGhhcyBiZWVuIGVuYWJsZWQuXCJ9KSAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcHJvZmlsZURhdGEud2hhdHNhcHBfaXNfZGVjbGluZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcInlvdXIgd2hhdHNBcHAgbm90aWZpY2F0aW9ucyBoYXMgYmVlbiBkaXNhYmxlZC5cIn0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmVkaXRVc2VyUHJvZmlsZShwcm9maWxlRGF0YSwgcHJvZmlsZURhdGEuaWQgLCgpPT57XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2hhdHNhcHBDYXJkQ29udGFpbmVyJylbMF0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoYXRzYXBwX29wdGluX1ZpZXc6IHN0YXR1cyB9LCgpID0+e1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnV2hhdHNhcHRvZ2dsZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdXaGF0c2FwLXRvZ2dsZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVXaGF0c2FwKHN0YXR1cykgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5zaG91bGRSZW5kZXIoKSlcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0FwcG9pbnRtZW50P1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdHNhcHBDYXJkQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2EtbG9nby1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2EtbG9nby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUgd291bGQgbGlrZSB0byBzZW5kIHlvdSB1cGRhdGVzIHRocm91Z2ggd2hhdHNhcHA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbG93RGVjbGluZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWxsb3dCdG5zXCIgb25DbGljaz17dGhpcy50b2dnbGVXaGF0c2FwLmJpbmQodGhpcyx0cnVlKX0+QWxsb3c8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZWNsaW5lQnRuc1wiIHN0eWxlPXt7Y29sb3I6JyM3NTc1NzUnfX1vbkNsaWNrPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzLGZhbHNlKX0+RGVjbGluZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc2MDAnLCBmb250U2l6ZTogJzE0cHgnIH19PkVuYWJsZSA8c3BhbiBjbGFzc05hbWU9XCJzbS13dHNwLWltZ1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2EtbG9nby1zbS5wbmdcIn0gLz5XaGF0c0FwcDwvc3Bhbj4gbm90aWZpY2F0aW9uPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzLCF0aGlzLnN0YXRlLndoYXRzYXBwX29wdGluX1ZpZXcpfSBjaGVja2VkPXt0aGlzLnN0YXRlLndoYXRzYXBwX29wdGluX1ZpZXd9IC8+PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBXaGF0c0FwcE9wdGluVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5UZXJtcyAmIENvbmRpdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybXMtY29uZGl0aW9uLWRpdiBwYXlwYWwtZHRscy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXJtcy1jb25kaXRpb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMudG5jIH19ID48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWJ0biB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDBcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZX0+RG9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9maWxlRGF0YSBmcm9tICcuL3Byb2ZpbGVEYXRhL2luZGV4LmpzJ1xuaW1wb3J0IEFwcG9pbnRtZW50cyBmcm9tICcuL3VzZXJBcHBvaW50bWVudHMnXG5pbXBvcnQgRmFtaWx5IGZyb20gJy4vdXNlckZhbWlseSdcbmltcG9ydCBFZGl0UHJvZmlsZSBmcm9tICcuL2VkaXRQcm9maWxlJ1xuaW1wb3J0IEFkZHJlc3MgZnJvbSAnLi91c2VyQWRkcmVzcydcbmltcG9ydCBBZGRyZXNzRm9ybSBmcm9tICcuL3VzZXJBZGRyZXNzL2FkZCdcbmltcG9ydCBSZXBvcnRzIGZyb20gJy4vdXNlclJlcG9ydHMnXG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBVc2VyUHJlc2NyaXB0aW9uIGZyb20gJy4vdXNlclByZXNjcmlwdGlvbnMnXG5pbXBvcnQgVXNlckNvdXBvbnMgZnJvbSAnLi91c2VyQ291cG9ucydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgVXNlclJldmlldyBmcm9tICcuLi8uLi9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJSZXZpZXdzJ1xuXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY29uc3QgU2VjdGlvbl9Db21wb25lbnQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGhpc3RvcnksIGxvZ291dCB9KSA9PiB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnN1bWVyLXByb2ZpbGUtc2NyZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbn1cblxuY2xhc3MgVXNlclByb2ZpbGVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7IHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUgfSA9IHRoaXMucHJvcHMuVVNFUlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tzZWxlY3RlZFByb2ZpbGVdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2B9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U2VjdGlvbl9Db21wb25lbnQgey4uLnRoaXMucHJvcHN9IHRpdGxlPVwiTXkgUHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVEYXRhICB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25fQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2FwcG9pbnRtZW50c2B9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U2VjdGlvbl9Db21wb25lbnQgey4uLnRoaXMucHJvcHN9IHRpdGxlPVwiTXkgQXBwb2ludG1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXBwb2ludG1lbnRzICB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25fQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2ZhbWlseWB9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U2VjdGlvbl9Db21wb25lbnQgey4uLnRoaXMucHJvcHN9IHRpdGxlPVwiTXkgRmFtaWx5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFtaWx5ICB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25fQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2FkZHJlc3NgfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNlY3Rpb25fQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSB0aXRsZT1cIk1hbmFnZSBBZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkcmVzcyAgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uX0NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS9hZGRyZXNzL2FkZGB9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8QWRkcmVzc0Zvcm0gey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS9hZGRyZXNzL2VkaXQvOmlkYH0gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBZGRyZXNzRm9ybSB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSBlZGl0PXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2VkaXQvOmlkYH0gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFZGl0UHJvZmlsZSB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9Lzp0eXBlL3JlcG9ydHMvOmlkYH0gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTZWN0aW9uX0NvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gdGl0bGU9e3Byb3BzLm1hdGNoLnBhcmFtcy50eXBlID09ICdvcGQnID8gXCJQcmVzY3JpcHRpb25zXCIgOiBcIkxhYiBSZXBvcnRzXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9ydHMgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uX0NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS9vbmxpbmVQcmVzY3JpcHRpb25zYH0gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxVc2VyUHJlc2NyaXB0aW9uIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2NvdXBvbnNgfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFVzZXJDb3Vwb25zIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS9teXJhdGluZ3NgfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFVzZXJSZXZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbc2VsZWN0ZWRQcm9maWxlXSA/IFwiXCIgOiA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIG5vQ2hhdEJ1dHRvbj17dHJ1ZX0gZXh0cmFDbGFzcz17KHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy9mYW1pbHknKSB8fCB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCcvYWRkcmVzcycpKSA/IFwiIGNoYXQtZmxvYXQtYnRuLTNcIiA6ICh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCcvZWRpdCcpID8gXCIgY2hhdC1mbG9hdC1idG4tMlwiIDogXCJcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJhc2ljRGV0YWlscyBmcm9tICcuL2Jhc2ljJ1xuaW1wb3J0IE1lZGlhbERldGFpbHMgZnJvbSAnLi9tZWRpY2FsJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9Mb2FkZXInXG5pbXBvcnQgV2hhdHNBcHBPcHRpblZpZXcgZnJvbSAnLi4vLi4vV2hhdHNBcHBPcHRpbi9XaGF0c0FwcE9wdGluVmlldy5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5cbmNsYXNzIEVkaXRQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgbGV0IHsgcHJvZmlsZXMgfSA9IHRoaXMucHJvcHMuVVNFUlxuICAgICAgICBsZXQgY3VycmVudFByb2ZpbGUgPSBudWxsXG4gICAgICAgIGN1cnJlbnRQcm9maWxlID0gey4uLnByb2ZpbGVzW3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkXX1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkVGFiOiAwLFxuICAgICAgICAgICAgcHJvZmlsZURhdGE6IGN1cnJlbnRQcm9maWxlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBvcGVuQ3JvcDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcnM6IHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdoYXRzYXBwX29wdGluOmZhbHNlLFxuICAgICAgICAgICAgaXNFbWFpbFZlcmlmaWVkOmZhbHNlLFxuICAgICAgICAgICAgaXNFbWFpbFVwZGF0ZWQ6ZmFsc2UsXG4gICAgICAgICAgICBpc0VtYWlsRXJyb3I6ZmFsc2UsXG4gICAgICAgICAgICBpc0RvYlZhbGlkYXRlZDpmYWxzZSxcbiAgICAgICAgICAgIGlzX2RvYl9lcnJvcjpmYWxzZSxcbiAgICAgICAgICAgIGFkZF90b19nb2xkOnRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdhZGRfdG9fZ29sZD10cnVlJyk/dHJ1ZTpmYWxzZSxcbiAgICAgICAgICAgIGZyb21fYm9va2luZzp0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnZnJvbV9ib29raW5nPXRydWUnKT90cnVlOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBsZXQgY3VycmVudFByb2ZpbGUgPSBudWxsXG4gICAgICAgIGlmKHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGgpe1xuICAgICAgICAgICAgY3VycmVudFByb2ZpbGUgPSB7Li4udGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkXX1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb2ZpbGVEYXRhOmN1cnJlbnRQcm9maWxlLGlzRG9iVmFsaWRhdGVkOmN1cnJlbnRQcm9maWxlLmRvYj90cnVlOmZhbHNlLHdoYXRzYXBwX29wdGluOmN1cnJlbnRQcm9maWxlLndoYXRzYXBwX29wdGlufSkgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cblxuICAgIHRvZ2dsZU9wZW5Dcm9wKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbkNyb3A6ICF0aGlzLnN0YXRlLm9wZW5Dcm9wIH0pXG4gICAgfVxuXG4gICAgbWFuYWdlQWRkcmVzcygpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyL2FkZHJlc3MnKVxuICAgIH1cblxuICAgIHRvZ2dsZVdoYXRzYXAoc3RhdHVzLGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoYXRzYXBwX29wdGluOiBzdGF0dXMgfSlcbiAgICB9XG5cbiAgICBnZXRDb21wKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRlciAvPlxuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgc2hvd19kZWZhdWx0X2NoZWNrQm94PSB0cnVlXG4gICAgICAgIGxldCBpc19wcm9maWxlX2VkaXRhYmxlID0gdHJ1ZVxuICAgICAgICBsZXQgZ29sZF91c2VyX3Byb2ZpbGUgPSB7fVxuICAgICAgICBsZXQgZGVmYXVsdF9wcm9maWxlID0ge31cbiAgICAgICAgaWYodGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyl7XG4gICAgICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNob3dfZGVmYXVsdF9jaGVja0JveCAmJiB2YWx1ZS5pc19pbnN1cmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfZGVmYXVsdF9jaGVja0JveCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUuaXNfZGVmYXVsdF91c2VyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRfcHJvZmlsZSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5zdGF0ZS5wcm9maWxlRGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5pZCA9PSBzZWxmLnN0YXRlLnByb2ZpbGVEYXRhLmlkICYmIHZhbHVlLmlzX2luc3VyZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3Byb2ZpbGVfZWRpdGFibGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5pc192aXBfZ29sZF9tZW1iZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZF91c2VyX3Byb2ZpbGUgPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgICAgIGNhc2UgMDoge1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOic2MHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXNpY0RldGFpbHMgey4uLnRoaXMucHJvcHN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VBZGRyZXNzPXt0aGlzLm1hbmFnZUFkZHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZURhdGE9e3RoaXMuc3RhdGUucHJvZmlsZURhdGF9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9maWxlPXt0aGlzLnVwZGF0ZVByb2ZpbGUuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZWRVcGRhdGU9e3RoaXMucHJvY2VlZFVwZGF0ZS5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXt0aGlzLnN0YXRlLmVycm9yc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZU9wZW5Dcm9wPXt0aGlzLnRvZ2dsZU9wZW5Dcm9wLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X2RlZmF1bHRfY2hlY2tCb3g9e3Nob3dfZGVmYXVsdF9jaGVja0JveH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWxFcnJvcj17dGhpcy5zdGF0ZS5pc0VtYWlsRXJyb3J9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJpZnlFbmRvcnNlbWVudEVtYWlsPXt0aGlzLnZlcmlmeUVuZG9yc2VtZW50RW1haWwuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfcHJvZmlsZV9lZGl0YWJsZT17aXNfcHJvZmlsZV9lZGl0YWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZG9iX2Vycm9yID0ge3RoaXMuc3RhdGUuaXNfZG9iX2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb2xkX3VzZXJfcHJvZmlsZSA9IHtnb2xkX3VzZXJfcHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RvX2dvbGQgPSB7dGhpcy5zdGF0ZS5hZGRfdG9fZ29sZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9Hb2xkID0ge3RoaXMuYWRkVG9Hb2xkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRfcHJvZmlsZSA9IHtkZWZhdWx0X3Byb2ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2hhdHNBcHBPcHRpblZpZXcgey4uLnRoaXMucHJvcHN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVXaGF0c2FwPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzPXt0aGlzLnN0YXRlLnByb2ZpbGVEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNZWRpYWxEZXRhaWxzIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRUb0dvbGQodmFsdWUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthZGRfdG9fZ29sZDp2YWx1ZX0pXG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZmlsZShrZXksIHZhbHVlLGlzRG9iVmFsaWRhdGVkKSB7XG4gICAgICAgIHRoaXMuc3RhdGUucHJvZmlsZURhdGFba2V5XSA9IHZhbHVlXG4gICAgICAgIGlmKGtleSA9PSAnZG9iJyl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0RvYlZhbGlkYXRlZDppc0RvYlZhbGlkYXRlZH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVEYXRhOiB0aGlzLnN0YXRlLnByb2ZpbGVEYXRhfSlcbiAgICB9XG5cbiAgICB2ZXJpZnlFbmRvcnNlbWVudEVtYWlsKG5ld2VtYWlsLHZlcmlmaWVkLGlzX2VtYWlsX2NoYW5nZWQpeyAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUucHJvZmlsZURhdGFbJ2VtYWlsJ10gPSBuZXdlbWFpbFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZURhdGE6IHRoaXMuc3RhdGUucHJvZmlsZURhdGEgfSlcbiAgICAgICAgaWYodmVyaWZpZWQpe1xuICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0VtYWlsVXBkYXRlZDp2ZXJpZmllZCxpc0VtYWlsVmVyaWZpZWQ6aXNfZW1haWxfY2hhbmdlZH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNFbWFpbFVwZGF0ZWQ6dmVyaWZpZWQsaXNFbWFpbFZlcmlmaWVkOmlzX2VtYWlsX2NoYW5nZWR9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2VlZFVwZGF0ZShlKSB7IC8vIHVwZGF0ZSBwcm9maWxlXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgbGV0IGVycm9ycyA9IHt9XG4gICAgICAgIGxldCB2YWxzID0gWydlbWFpbCcsICdwaG9uZV9udW1iZXInLCdkb2InXVxuICAgICAgICB2YWxzLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnByb2ZpbGVEYXRhLmRvYiA9PSBudWxsICYmICF0aGlzLnN0YXRlLmlzRG9iVmFsaWRhdGVkKXtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgZXJyb3JzWydkb2InXSA9ICF2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicGhvbmVfbnVtYmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnByb2ZpbGVEYXRhW2ZpZWxkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzW2ZpZWxkXSA9ICF2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gdGhpcy5zdGF0ZS5wcm9maWxlRGF0YVtmaWVsZF0udG9TdHJpbmcoKS5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzW2ZpZWxkXSA9ICF2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiZW1haWxcIjoge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIXRoaXMuc3RhdGUucHJvZmlsZURhdGFbZmllbGRdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YWxpZGF0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZXJyb3JzW2ZpZWxkXSA9ICF2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFsaWRhdGVkID0gdGhpcy5zdGF0ZS5wcm9maWxlRGF0YVtmaWVsZF0ubWF0Y2goL1xcUytAXFxTK1xcLlxcUysvKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZXJyb3JzW2ZpZWxkXSA9ICF2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzW2ZpZWxkXSA9ICF2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsaWRhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXJyb3JzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZS5pc0VtYWlsVXBkYXRlZCAmJiB0aGlzLnN0YXRlLmlzRW1haWxWZXJpZmllZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNFbWFpbEVycm9yOnRydWV9KVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZS5pc0RvYlZhbGlkYXRlZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfZG9iX2Vycm9yOnRydWV9KVxuICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZS5wcm9maWxlRGF0YS5nZW5kZXIpe1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogJ1BsZWFzZSBzZWxlY3QgZ2VuZGVyJyB9KVxuICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnByb2ZpbGVEYXRhLndoYXRzYXBwX29wdGluID0gdGhpcy5zdGF0ZS53aGF0c2FwcF9vcHRpbiA9PSBudWxsID90cnVlOiB0aGlzLnN0YXRlLndoYXRzYXBwX29wdGluXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9maWxlRGF0YS5hZGRfdG9fZ29sZCA9IHRoaXMuc3RhdGUuYWRkX3RvX2dvbGRcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmVkaXRVc2VyUHJvZmlsZSh0aGlzLnN0YXRlLnByb2ZpbGVEYXRhLCB0aGlzLnN0YXRlLnByb2ZpbGVEYXRhLmlkLCAoZXJyLCBkYXRhKSA9PiB7IC8vIHVwZGF0ZSBwcm9maWxlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXJyLm1lc3NhZ2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IGVyci5tZXNzYWdlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldFZpcERhdGEoKVxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmZyb21fYm9va2luZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTIpICAgIFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSkgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIDxoZWFkZXIgY2xhc3NOYW1lPVwic2tpbi13aGl0ZSBmaXhlZCBob3Jpem9udGFsIHRvcCBiZHItMSBib3R0b20gbGlnaHQgc3RpY2t5LWhlYWRlclwiIHN0eWxlPXt7IHpJbmRleDogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNtIHRleHQtbWlkZGxlIGJhY2staWNvbi13aGl0ZVwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYmFjay1pY29uLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGUgZnctNzAwIGNhcGl0YWxpemUgdGV4dC1jZW50ZXJcIj5FZGl0IFByb2ZpbGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+ICovfVxuXG4gICAgICAgICAgICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnN1bWVyLXByb2ZpbGUtdXBkYXRlIHN0aWNreS1oZWFkZXItM1wiIHN0eWxlPXt7IHpJbmRleDogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3QgdGFiLWl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDAsIG1hcmdpblJpZ2h0OiAwIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVGFiOiAwIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlbGVjdGVkVGFiID09PSAwID8gXCJhY3RpdmVcIiA6IFwiXCJ9PjxhIGNsYXNzTmFtZT1cImxpbmstdGV4dCB0ZXh0LXhzIHVwcGVyY2FzZVwiPkJhc2ljIFByb2ZpbGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwLCBtYXJnaW5SaWdodDogMH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVGFiOiAxIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlbGVjdGVkVGFiID09PSAxID8gXCJhY3RpdmVcIiA6IFwiXCJ9PjxhIGNsYXNzTmFtZT1cImxpbmstdGV4dCB0ZXh0LXhzIHVwcGVyY2FzZVwiPk1lZGljYWw8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gKi99XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZXRDb21wKCl9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlbkNyb3AgPyBcIlwiIDogPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb2NlZWRVcGRhdGUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiZml4ZWQgcC0zIGhvcml6b250YWwgYm90dG9tIHYtYnRuIHYtYnRuLXByaW1hcnkgbm8tcm91bmQgYnRuLWxnIHRleHQtY2VudGVyIHN0YXRpYy1idG5cIj57YCR7dGhpcy5zdGF0ZS5mcm9tX2Jvb2tpbmc/J0NvbnRpbnVlIEJvb2tpbmcnOidVcGRhdGUgUHJvZmlsZSd9YH08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvZmlsZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDcm9wcGVyIGZyb20gJ3JlYWN0LWNyb3BwZXInO1xuY29uc3QgQ29tcHJlc3MgPSByZXF1aXJlKCdjb21wcmVzcy5qcycpXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vTG9hZGVyJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyJztcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuaW1wb3J0IFZlcmlmeUVtYWlsIGZyb20gJy4uLy4uLy4uL2luc3VyYW5jZS92ZXJpZnlFbWFpbC5qcydcbmltcG9ydCBOZXdEYXRlU2VsZWN0b3IgZnJvbSAnLi4vLi4vbmV3RGF0ZVNlbGVjdG9yLmpzJ1xuXG5jbGFzcyBCYXNpY0RldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YVVybDogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTonJyxcbiAgICAgICAgICAgIGlzX2RlZmF1bHRfdXNlcjogdGhpcy5wcm9wcy5wcm9maWxlRGF0YS5pc19kZWZhdWx0X3VzZXJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShrZXksIGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVQcm9maWxlKGtleSwgZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgaGFuZGxlR2VuZGVyKHZhbCl7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlUHJvZmlsZSgnZ2VuZGVyJyx2YWwpXG4gICAgfVxuXG4gICAgcGlja0ZpbGUoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXByZXNzID0gbmV3IENvbXByZXNzKClcbiAgICAgICAgICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgICAgIGNvbXByZXNzLmNvbXByZXNzKFtmaWxlXSwge1xuICAgICAgICAgICAgICAgIHF1YWxpdHk6IDEsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMDAsXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAxMDAwLFxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltZzEgPSByZXN1bHRzWzBdXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0c3RyID0gaW1nMS5kYXRhXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nRXh0ID0gaW1nMS5leHRcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gQ29tcHJlc3MuY29udmVydEJhc2U2NFRvRmlsZShiYXNlNjRzdHIsIGltZ0V4dClcbiAgICAgICAgICAgICAgICB0aGlzLmdldEJhc2U2NChmaWxlLCAoZGF0YVVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZU9wZW5Dcm9wKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFVcmwgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiRXJyb3IgdXBsb2FkaW5nIGltYWdlLlwiIH0pO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QmFzZTY0KGZpbGUsIGNiKSB7XG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYihyZWFkZXIucmVzdWx0KVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluaXNoQ3JvcChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCBmaWxlX2Jsb2JfZGF0YSA9IHRoaXMuZGF0YVVSSXRvQmxvYih0aGlzLnJlZnMuY3JvcHBlci5nZXRDcm9wcGVkQ2FudmFzKCkudG9EYXRhVVJMKCkpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGF0YVVybDogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPcGVuQ3JvcCgpXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyJykudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICBsZXQgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoXCJwcm9maWxlX2ltYWdlXCIsIGZpbGVfYmxvYl9kYXRhLCBcImltYWdlRmlsZW5hbWUuanBlZ1wiKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5lZGl0VXNlclByb2ZpbGVJbWFnZShmb3JtX2RhdGEsIHRoaXMucHJvcHMucHJvZmlsZURhdGEuaWQsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRhdGFVUkl0b0Jsb2IoZGF0YVVSSSkge1xuICAgICAgICB2YXIgYmluYXJ5ID0gYXRvYihkYXRhVVJJLnNwbGl0KCcsJylbMV0pO1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaW5hcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goYmluYXJ5LmNoYXJDb2RlQXQoaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXSwgeyB0eXBlOiAnaW1hZ2UvanBlZycgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRW50ZXJQcmVzcyhlKXsgXG4gICAgICAgIGlmKGUua2V5ID09PSAnRW50ZXInKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucHJvY2VlZFVwZGF0ZShlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5DYWxlbmRhcigpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRlTW9kYWw6dHJ1ZX0pXG4gICAgfVxuXG4gICAgc2VsZWN0RGF0ZUZyb21DYWxlbmRhcihkYXRlKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS50b0RhdGUoKVxuICAgICAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUoZGF0ZSlcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1hdHRlZERhdGU6Zm9ybWF0dGVkRGF0ZSwgZGF0ZU1vZGFsOiBmYWxzZX0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVByb2ZpbGUoJ2RvYicsIGZvcm1hdHRlZERhdGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKXtcbiAgICAgICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtbSA9IGRhdGUuZ2V0TW9udGgoKSsxOyBcbiAgICAgICAgdmFyIHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmKGRkPDEwKXtcbiAgICAgICAgICAgIGRkPScwJytkZDtcbiAgICAgICAgfVxuICAgICAgICBpZihtbTwxMCl7XG4gICAgICAgICAgICBtbT0nMCcrbW07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvZGF5ID0geXl5eSsnLScrbW0rJy0nK2RkO1xuICAgICAgICByZXR1cm4gdG9kYXlcbiAgICB9XG5cbiAgICBoYW5kbGVEZWZhdWx0VXNlcih2YWx1ZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeydpc19kZWZhdWx0X3VzZXInOnZhbHVlfSlcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVQcm9maWxlKCdpc19kZWZhdWx0X3VzZXInLCB2YWx1ZSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IG5hbWUsIGVtYWlsLCBnZW5kZXIsIHBob25lX251bWJlciwgcHJvZmlsZV9pbWFnZSwgaWQsIGRvYn0gPSB0aGlzLnByb3BzLnByb2ZpbGVEYXRhXG4gICAgICAgIHByb2ZpbGVfaW1hZ2UgPSBwcm9maWxlX2ltYWdlIHx8IChBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdXNlci5wbmdcIilcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YG15UHJvZmlsZSBwcm9maWxlLWRldGFpbHMgbXJiLTE1ICR7dGhpcy5wcm9wcy5pc19wcm9maWxlX2VkaXRhYmxlPycnOidjbGljay1kaXNhYmxlJ31gfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA/IFwiXCIgOiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBuby1zaGFkb3cgbm8tcmFkaXVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGVfaW1hZ2V9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGN1cnNvcjogJ3BvaW50ZXInIH19IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcm91bmRcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyJykuY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcicpLnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYW0taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jYW0tbWQucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZCBjYW0taWNvbi1pbWdcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcicpLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyJykudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IGlkPVwiaW1hZ2VGaWxlUGlja2VyXCIgb25DaGFuZ2U9e3RoaXMucGlja0ZpbGUuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGVyIC8+IDogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbm8tc2hhZG93IG5vLXJhZGl1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImdvLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7Z2VuZGVyID09ICdtJz8nYnRuLWFjdGl2ZSc6Jyd9YH0gbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e2dlbmRlciA9PSAnbSd9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlR2VuZGVyLmJpbmQodGhpcyxcIm1cIil9Pk1hbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7Z2VuZGVyID09ICdmJz8nYnRuLWFjdGl2ZSc6Jyd9YH0gbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e2dlbmRlciA9PSAnZid9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlR2VuZGVyLmJpbmQodGhpcywnZicpfT5GZW1hbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnbmFtZScpfSBpZD1cImZuYW1lXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXRcIiBuYW1lPVwiZm5hbWVcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlRW50ZXJQcmVzcy5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRvYlwiIG5hbWU9XCJkb2JcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1hdHRlZERhdGUgPT0gJyc/ZG9iOnRoaXMuc3RhdGUuZm9ybWF0dGVkRGF0ZX0gb25DbGljaz17dGhpcy5vcGVuQ2FsZW5kYXIuYmluZCh0aGlzKX0gcmVxdWlyZWQgcmVmPVwiZG9iXCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVFbnRlclByZXNzLmJpbmQodGhpcyl9IG9uRm9jdXM9e3RoaXMub3BlbkNhbGVuZGFyLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZG9iXCI+RGF0ZSBvZiBCaXJ0aDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGVNb2RhbCA/IDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItb3ZlcmxheVwiPjxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXI9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21vbWVudChkb2IgPT0gbnVsbD9uZXcgRGF0ZSgpOmRvYil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZT17KGRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmRpZmYobW9tZW50KChuZXcgRGF0ZSkpLCAnZGF5cycpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvZGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnNlbGVjdERhdGVGcm9tQ2FsZW5kYXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdEYXRlU2VsZWN0b3Igey4uLnRoaXMucHJvcHN9IGdldE5ld0RhdGU9e3RoaXMucHJvcHMudXBkYXRlUHJvZmlsZS5iaW5kKHRoaXMpfSBvbGRfZG9iPXtkb2J9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ25hbWUnKX0gaWQ9XCJhZ2VcIiBuYW1lPVwibG5hbWVcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlXCI+QWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnZW1haWwnKX0gaWQ9XCJlbWFpbFwiIG5hbWU9XCJsbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmVycm9yc1snZW1haWwnXSA/ICdlcnJvckNvbG9yQm9yZGVyJyA6IFwiXCJ9IHJlcXVpcmVkIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlRW50ZXJQcmVzcy5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlZmF1bHRfcHJvZmlsZSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRlZmF1bHRfcHJvZmlsZSkubGVuZ3RoICYmIHRoaXMucHJvcHMuZGVmYXVsdF9wcm9maWxlLmlzX2RlZmF1bHRfdXNlciAmJiB0aGlzLnByb3BzLmRlZmF1bHRfcHJvZmlsZS5pZCA9PSB0aGlzLnByb3BzLnByb2ZpbGVEYXRhLmlkP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcmlmeUVtYWlsIHsuLi50aGlzLnByb3BzfSBtZW1iZXJfaWQ9e3RoaXMucHJvcHMucHJvZmlsZURhdGF9IGVtYWlsPXtlbWFpbH0gdmFsaWRhdGVFcnJvcnMgPSB7W119Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlZmF1bHRfcHJvZmlsZSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRlZmF1bHRfcHJvZmlsZSkubGVuZ3RoICYmIHRoaXMucHJvcHMuZGVmYXVsdF9wcm9maWxlLmlzX2RlZmF1bHRfdXNlciAmJiB0aGlzLnByb3BzLmRlZmF1bHRfcHJvZmlsZS5pZCA9PSB0aGlzLnByb3BzLnByb2ZpbGVEYXRhLmlkID88ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwaG9uZV9udW1iZXIgfHwgXCJcIn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ3Bob25lX251bWJlcicpfSBpZD1cIm51bWJlclwiIG5hbWU9XCJsbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmVycm9yc1sncGhvbmVfbnVtYmVyJ10gPyAnZXJyb3JDb2xvckJvcmRlcicgOiBcIlwifSByZXF1aXJlZCBvbktleVByZXNzPXt0aGlzLmhhbmRsZUVudGVyUHJlc3MuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnVtYmVyXCI+TW9iaWxlIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjonJ31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIHN0eWxlPXt7IGNvbG9yOiAnI2Y3ODM2MScgfX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tYW5hZ2VBZGRyZXNzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5NYW5hZ2UgTXkgQWRkcmVzczxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmlnaHQtYXJyb3cuc3ZnXCJ9IGNsYXNzTmFtZT1cImxpc3QtYXJyb3ctcnRcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4LCB3aWR0aDogNyB9fT48L2ltZz48L3NwYW4+PC9hPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ29sZF91c2VyX3Byb2ZpbGUgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5nb2xkX3VzZXJfcHJvZmlsZSkubGVuZ3RoICYmIHRoaXMucHJvcHMuZ29sZF91c2VyX3Byb2ZpbGUudmlwX2RhdGEgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5nb2xkX3VzZXJfcHJvZmlsZS52aXBfZGF0YSkubGVuZ3RoICYmIHRoaXMucHJvcHMuZ29sZF91c2VyX3Byb2ZpbGUudmlwX2RhdGEudG90YWxfbWVtYmVyc19hbGxvd2VkID4gMCAmJiAhdGhpcy5wcm9wcy5wcm9maWxlRGF0YS5pc192aXBfZ29sZF9tZW1iZXIgJiYgdGhpcy5wcm9wcy5nb2xkX3VzZXJfcHJvZmlsZS52aXBfZGF0YS5pc19tZW1iZXJfYWxsb3dlZD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlZmF1bHRQcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieCBhZGQtbWVtYmVyLWNoa2J4XCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRoaXMgbWVtYmVyIHRvIERvY3ByaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtbC0yXCIgd2lkdGg9XCIzNVwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2dvbGQtbGcucG5nXCIgIGFsdD1cImdvbGRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtd2FybmluZy10ZXh0XCI+T25jZSBhZGRlZCB0byBnb2xkLCB5b3UgY2Fubm9udCBlZGl0IG9yIHJlbW92ZSB0aGUgbWVtYmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuYWRkVG9Hb2xkLmJpbmQodGhpcywgIXRoaXMucHJvcHMuYWRkX3RvX2dvbGQpfSBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkX3RvX2dvbGR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd19kZWZhdWx0X2NoZWNrQm94P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVmYXVsdFByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4IGFkZC1tZW1iZXItY2hrYnhcIj5NYWtlIFByaW1hcnkgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVmYXVsdFVzZXIuYmluZCh0aGlzLCAhdGhpcy5zdGF0ZS5pc19kZWZhdWx0X3VzZXIpfSBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNfZGVmYXVsdF91c2VyfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc19wcm9maWxlX2VkaXRhYmxlPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8c3Bhbj4qRGV0YWlscyBvZiB0aGUgcHJvZmlsZXMgd2hpY2ggYXJlIGNvdmVyZWQgdW5kZXIgaW5zdXJhbmNlIGNhbm5vdCBiZSB1cGRhdGVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhVXJsID8gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDcm9wcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPSdjcm9wcGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5kYXRhVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwiaGVpZ2h0XCI6IFwiMTAwJVwiLCBcIndpZHRoXCI6IFwiMTAwJVwiLCBcIm1heFdpZHRoXCI6IFwiNjAwcHhcIiwgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsIFwibGVmdFwiOiBcIjUwJVwiLCBcInRvcFwiOiBcIjUwJVwiLCBcInpJbmRleFwiOiBcIjk5OTk5OVwiLCBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNwZWN0UmF0aW89ezEgLyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3BCb3hSZXNpemFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdNb2RlPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdNb2RlPXsnbW92ZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGVzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHpJbmRleDogOTk5OTk5OSB9fSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuZmluaXNoQ3JvcC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJmaXhlZCBob3Jpem9udGFsIGJvdHRvbSB2LWJ0biB2LWJ0bi1wcmltYXJ5IG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWNlbnRlciB1cGRhdGUtcHJvZmlsZS1pbWctYnRuXCI+VXBkYXRlIFByb2ZpbGUgSW1hZ2U8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljRGV0YWlsc1xuIiwiaW1wb3J0IEVkaXRQcm9maWxlIGZyb20gJy4vRWRpdFByb2ZpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRQcm9maWxlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTWVkaWNhbERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXlQcm9maWxlIHByb2ZpbGUtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPk1lZGljYWwgSGlzdG9yeTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudCBwZC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGlzZWFzZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UZW51cmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGlhYmV0ZXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdHJhZGlvXCIgLz4gWWVzPC9sYWJlbD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZmMtaW5wdXQgaW5wdXQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yIFllYXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SHlwZXJ0ZW5zaW9uPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJvcHRyYWRpb1wiIC8+IFllczwvbGFiZWw+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZjLWlucHV0IGlucHV0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+MiBZZWFyczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFzdGhtYTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0cmFkaW9cIiAvPiBZZXM8L2xhYmVsPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmYy1pbnB1dCBpbnB1dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjIgWWVhcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5IZWFydDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0cmFkaW9cIiAvPiBZZXM8L2xhYmVsPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmYy1pbnB1dCBpbnB1dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjIgWWVhcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BaWxtZW50PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJvcHRyYWRpb1wiIC8+IFllczwvbGFiZWw+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZjLWlucHV0IGlucHV0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+MiBZZWFyczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFuYWVtaWE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdHJhZGlvXCIgLz4gWWVzPC9sYWJlbD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZmMtaW5wdXQgaW5wdXQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yIFllYXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGVwcmVzc2lvbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0cmFkaW9cIiAvPiBZZXM8L2xhYmVsPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmYy1pbnB1dCBpbnB1dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjIgWWVhcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BbGxlcmdpZXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdHJhZGlvXCIgLz4gWWVzPC9sYWJlbD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZmMtaW5wdXQgaW5wdXQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yIFllYXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1lZGljYWxEZXRhaWxzXG4iLCJpbXBvcnQgVXNlclByb2ZpbGVWaWV3IGZyb20gJy4vVXNlclByb2ZpbGVWaWV3LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRlcm1zQ29uZGl0aW9ucyBmcm9tICcuLi8uLi9jb3Vwb25TZWxlY3Rpb25WaWV3L3Rlcm1zQ29uZGl0aW9ucy5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZydcblxuXG5jbGFzcyBQcm9maWxlRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuVGVybXNDb25kaXRpb25zOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB9XG5cbiAgICBnb3RUbyh3aGVyZSkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3VzZXIvJHt3aGVyZX1gKVxuICAgIH1cblxuICAgIHRvZ2dsZVRhbmRDKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlblRlcm1zQ29uZGl0aW9uczogIXRoaXMuc3RhdGUub3BlblRlcm1zQ29uZGl0aW9ucyB9KTtcbiAgICB9XG5cbiAgICBzZWFyY2hMYWIoY291cG9uKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0Q29ycG9yYXRlQ291cG9uKGNvdXBvbilcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKVxuXG4gICAgICAgIGxldCB0ZXN0X2lkcyA9IFtdXG4gICAgICAgIGxldCBuZXR3b3JrX2lkID0gXCJcIlxuICAgICAgICBpZiAoY291cG9uICYmIGNvdXBvbi50ZXN0cykge1xuICAgICAgICAgICAgdGVzdF9pZHMgPSBjb3Vwb24udGVzdHNcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291cG9uICYmIGNvdXBvbi5uZXR3b3JrX2lkKSB7XG4gICAgICAgICAgICBuZXR3b3JrX2lkID0gY291cG9uLm5ldHdvcmtfaWRcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvbGFiL3NlYXJjaHJlc3VsdHM/dGVzdF9pZHM9JHt0ZXN0X2lkcy5qb2luKCcsJyl9Jm5ldHdvcmtfaWQ9JHtuZXR3b3JrX2lkfWBcbiAgICB9XG5cbiAgICBpc0RvY0NhcmUoKSB7IC8vIHJlZGlyZWN0IHRvIGNhcmUgcGFnZSBvciB0byBjYXJlIGRhc2hib2FyZFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc1VzZXJDYXJlZCAmJiB0aGlzLnByb3BzLmlzVXNlckNhcmVkLmhhc19hY3RpdmVfcGxhbikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9wcmltZS9zdWNjZXNzP3VzZXJfcGxhbj0nICsgdGhpcy5wcm9wcy5pc1VzZXJDYXJlZC51c2VyX3BsYW5faWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ByaW1lL3BsYW5zJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvVG9JbnN1cmFuY2UoaXNVc2VyTG9naW5JbnN1cmVkKSB7IC8vIHJlZGlyZWN0IHRvIGluc3VyYW5jZSBwbGFuIHBhZ2Ugb3IgdG8gaW5zdXJlZCBkYXNoYm9hcmRcbiAgICAgICAgaWYgKGlzVXNlckxvZ2luSW5zdXJlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1twYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXS5pbnN1cmFuY2Vfc3RhdHVzID09IDEgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbcGFyc2VJbnQodGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlKV0uaW5zdXJhbmNlX3N0YXR1cyA9PSA0IHx8IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1twYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXS5pbnN1cmFuY2Vfc3RhdHVzID09IDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9jZXJ0aWZpY2F0ZScpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS1wbGFucz9zb3VyY2U9cHJvZmlsZS1pbnN1cmFuY2UtY2xpY2tlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdlbmVyYXRlSW5zdXJhbmNlTGVhZCgpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtcGxhbnM/c291cmNlPXByb2ZpbGUtaW5zdXJhbmNlLWNsaWNrZWQnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SW5zdXJhbmNlQnRuVGV4dCgpIHtcbiAgICAgICAgLy8gc2V0IGJ1dHRvbiB0ZXh0IGFzIHBlcnNvbiB1c2VyIHBvbGljeSBzdGF0dXMgYWN0aXZlL2luYWN0aXZlLyBjYW5jZWxsZWRcbiAgICAgICAgbGV0IGlzVXNlckxvZ2luSW5zdXJlZCA9IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiB0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUgJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3BhcnNlSW50KHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSldLmlzX2RlZmF1bHRfdXNlciA/IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1twYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXS5pc19kZWZhdWx0X3VzZXIgOiBmYWxzZVxuICAgICAgICBpZiAoaXNVc2VyTG9naW5JbnN1cmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3BhcnNlSW50KHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSldLmluc3VyYW5jZV9zdGF0dXMgPT0gMSB8fFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1twYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXS5pbnN1cmFuY2Vfc3RhdHVzID09IDQgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbcGFyc2VJbnQodGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlKV0uaW5zdXJhbmNlX3N0YXR1cyA9PSA1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPVwiaW5zLXVzZXJkZXRhaWxzLWFjdGl2ZVwiPkFjdGl2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9XCJpbnMtdXNlcmRldGFpbHMtYnV5XCI+QnV5IE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY3VycmVudFJvb21JZCA9IHRoaXMucHJvcHMuVVNFUi5jdXJyZW50Um9vbUlkXG4gICAgICAgIGxldCBjb3Vwb24gPSBudWxsXG4gICAgICAgIGxldCBtZW1iZXJDbGFzcyA9ICdmbG9hdC1yaWdodCBpbnMtdXNlcmRldGFpbHMtYnV5J1xuICAgICAgICBsZXQgbWVtU3RhdHVzID0gJ05ldydcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXBwbGljYWJsZUNvdXBvbnMgJiYgdGhpcy5wcm9wcy5hcHBsaWNhYmxlQ291cG9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvdXBvbiA9IHRoaXMucHJvcHMuYXBwbGljYWJsZUNvdXBvbnNbMF1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc1VzZXJMb2dpbkluc3VyZWQgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1twYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXS5pc19kZWZhdWx0X3VzZXIgPyB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbcGFyc2VJbnQodGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlKV0uaXNfZGVmYXVsdF91c2VyIDogZmFsc2VcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc1VzZXJDYXJlZCAmJiB0aGlzLnByb3BzLmlzVXNlckNhcmVkLmhhc19hY3RpdmVfcGxhbikge1xuICAgICAgICAgICAgbWVtYmVyQ2xhc3MgPSAnZmxvYXQtcmlnaHQgaW5zLXVzZXJkZXRhaWxzLWFjdGl2ZSdcbiAgICAgICAgICAgIG1lbVN0YXR1cyA9ICdBY3RpdmUnXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfY2FyZSA9IGZhbHNlXG4gICAgICAgIGxldCBjYXJlX3VzZXJfcHJvZmlsZSA9e31cblxuICAgICAgICBsZXQgZGVmYXVsdFByb2ZpbGUgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1twYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXT90aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbcGFyc2VJbnQodGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlKV06bnVsbDtcblxuICAgICAgICBpZih0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGgpe1xuICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkgeyBcbiAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmlzX2NhcmUpe1xuICAgICAgICAgICAgICAgICAgICAgIGNhcmVfdXNlcl9wcm9maWxlID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgaWYoY2FyZV91c2VyX3Byb2ZpbGUgJiYgT2JqZWN0LmtleXMoY2FyZV91c2VyX3Byb2ZpbGUpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgaXNfY2FyZSA9IHRydWVcbiAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbm8tcm91bmQgbm8tc2hhZG93IHNraW4tdHJhbnNwYXJlbnQgcHJvZmlsZS1uYXYgbmV3LXByb2ZpbGUtaGVhZGVyLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkZGluZy1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QgbmF2LWl0ZW1zIGRwLXVzZXItbGlzdCBiZy1sc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS1wcm9maWxlLWl0ZW0gcGFkZGluZy1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c3ItZHRscy1uYW1lIHBkbmctdXNyLWR0bHMtc2xvdHNcIj57YFdlbGNvbWUgdG8gRG9jcHJpbWUke3RoaXMucHJvcHMuVVNFUi51c2VyTmFtZSA/IGAsICR7dGhpcy5wcm9wcy5VU0VSLnVzZXJOYW1lfSEgYCA6ICcnfSBgfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9maWxlICYmIGRlZmF1bHRQcm9maWxlLmlzX3ZpcF9nb2xkX21lbWJlciAmJiBkZWZhdWx0UHJvZmlsZS52aXBfZGF0YT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLXdoaXRlLWJnLWNvbnRhaW5lciBjYXJkLWNvbnRhaW5lciBtLTBcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1hY3RpdmF0ZWQtZGV0YWlscycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1jYXJkLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpcExvZ2lJbWctMiBwZC0xMlwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDcgfX0gc3JjPVwiL2Fzc2V0cy9pbWcvZG9jZ29sZC5wbmdcIiB3aWR0aD1cIjgwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1jYXJkLXVzZXIgdGV4dC1yaWdodCB0ZXh0LXdoaXRlIHBkLTEyXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntkZWZhdWx0UHJvZmlsZS5uYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj4oUHJpbWFyeSk8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyc2hpcC12YWxpZGl0eS1jb2x1bW4gcGQtMTIgdGV4dC1ibGFjayB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RG9jcHJpbWUgR29sZCBNZW1iZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+VmFsaWQgdGlsbCA8c3Ryb25nPntkZWZhdWx0UHJvZmlsZS52aXBfZGF0YS5leHBpcnlfZGF0ZXx8Jyd9IDwvc3Ryb25nPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cInVzci1kdGxzLXN0YXJ0dXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cCBjbGFzc05hbWU9XCJ1c3ItZHRscy1zdHJ0LXR4dCBwZG5nLXVzci1kdGxzLXNsb3RzIGZ3LTUwMFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdmlwbG9nLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPkJlY29tZSBhIERvY3ByaW1lIFZJUCBtZW1iZXIgYW5kIGdldCBiZWxvdyBiZW5lZml0czwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIHBkbmctYnR0bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IG1ibC11c3ItZ3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c3ItZHRscy1mcmVlXCI+RlJFRTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVzci1kdGxzLWFuY2hvclwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDaGF0Tm93UHJvZmlsZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGF0LW5vdy1wcm9maWxlLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC92aXAtY2x1Yi1kZXRhaWxzYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc3UtY2hhdC5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHVzci1mcnN0LWljb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlVubGltaXRlZCBjaGF0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBxdWFsaWZpZWQgZG9jdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgbWJsLXVzci1ncmRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0ZpbmREb2N0b3JzUHJvZmlsZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdmaW5kLWRvY3RvcnMtcHJvZmlsZS1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC92aXAtY2x1Yi1kZXRhaWxzYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1c3ItZHRscy1hbmNob3IgbGZ0LXJndC1icmRyXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Jvb2stZG9jdG9yLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb29rIERvY3RvcnMgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlIDcwJVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgbWJsLXVzci1ncmRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdCb29rVGVzdHNQcm9maWxlQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Jvb2stdGVzdHMtcHJvZmlsZS1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC92aXAtY2x1Yi1kZXRhaWxzYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1c3ItZHRscy1hbmNob3JcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYmstdHN0LnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb29rIFRlc3RzIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjUlIE9GRlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFByb2ZpbGUgJiYgKGRlZmF1bHRQcm9maWxlLmluc3VyYW5jZV9zdGF0dXM9PTEgfHwgZGVmYXVsdFByb2ZpbGUuaW5zdXJhbmNlX3N0YXR1cz09NCB8fCBkZWZhdWx0UHJvZmlsZS5pbnN1cmFuY2Vfc3RhdHVzPT01IHx8IGRlZmF1bHRQcm9maWxlLmlzX3ZpcF9tZW1iZXIpPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwidXNyLWR0bHMtc3RydC10eHQgcGRuZy11c3ItZHRscy1zbG90cyBcIj48cCBjbGFzc05hbWU9XCJmdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVjb21lIGEgRG9jcHJpbWUgPGltZyBzdHlsZT17eyB3aWR0aDogJzQwcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2dvbGQtc20ucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZCBtci0wXCIgLz4gbWVtYmVyIGFuZCBnZXQgRGlzY291bnRzIGxpa2UgbmV2ZXIgYmVmb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtYmVuaWZpLWNhcmRzLWNvbnQgcGRuZy11c3ItZHRscy1zbG90cyBtYi0zIHByLTBcIiBzdHlsZT17e3BhZGRpbmdMZWZ0OiAnOHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iZW5pZmktY2FyZHNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdGaW5kRG9jdG9yc1Byb2ZpbGVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZmluZC1kb2N0b3JzLXByb2ZpbGUtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKCkgLy8gcmVzZXQgZ2xkIG9yIHZpcCBzdG9yZSB0byBkZWZhdWx0IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPXVzZXItcHJvZmlsZS1wYWdlYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dsMS5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FeGNsdXNpdmUgcHJpY2Ugb248YnIgLz48c3Ryb25nPjMwLDAwMDwvc3Ryb25nPiBEb2N0b3JzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iZW5pZmktY2FyZHNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQm9va1Rlc3RzUHJvZmlsZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdib29rLXRlc3RzLXByb2ZpbGUtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKCkgLy8gcmVzZXQgZ2xkIG9yIHZpcCBzdG9yZSB0byBkZWZhdWx0IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPXVzZXItcHJvZmlsZS1wYWdlYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dsMi5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EaXNjb3VudHMgb24gPGJyIC8+PHN0cm9uZz41LDAwMDwvc3Ryb25nPiBMYWJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iZW5pZmktY2FyZHNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2F2ZU1lZGljaW5lc1Byb2ZpbGVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2F2ZS1tZWRpY2luZXMtcHJvZmlsZS1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKSAvLyByZXNldCBnbGQgb3IgdmlwIHN0b3JlIHRvIGRlZmF1bHQgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9hbGwtbWVkaWNpbmVzYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL21lZGxpZmUtbWVkLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBTYXZlIDIzJSA8YnIvPiBvbiBtZWRpY2luZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cG9uID8gPGxpIGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbVwiIHN0eWxlPXt7IGN1cnNvcjogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzci1kdGxzLW9mZi1hY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzci1kdGxzLXN0cnQtdHh0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zdG1wLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPk9GRkVSU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBvbi5pc19jb3Jwb3JhdGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLnNlYXJjaExhYi5iaW5kKHRoaXMsIGNvdXBvbil9IGNsYXNzTmFtZT1cInVzci1kdGxzLXBsYW4tYWN0XCI+QXZhaWwgTm93IDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnMTBweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmd0LWFydy5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZnItaW1nLXR4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtaW1nLWNvbnRcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3ZlY3Rvci1zbWFydC1vYmplY3QucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mci1jb250bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvZnItYmtnXCI+PGIgY2xhc3NOYW1lPVwiZnctNTAwIGRyay1ibGtcIj57Y291cG9uLmhlYWRpbmd9PC9iPiB7Y291cG9uLmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1ydC0xMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzc1NzU3NScgfX0+VXNlIENvdXBvbiA6IDxiIGNsYXNzTmFtZT1cImZ3LTcwMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzAwMDAwMCcgfX0+e2NvdXBvbi5jb2RlfTwvYj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJ0LTIwXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlVGFuZEMoKX0gY2xhc3NOYW1lPVwidGV4dC14cyBmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLWRhcmstLWFsbClgLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5UZXJtcyAmIENvbmRpdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpZXctbW9yZS1jb3Vwb25zXCIgb25DbGljaz17KCkgPT4geyAvLyByZWRpcmVjdCB0byBtb3JlIGF2YWlsYWJsZSBjb3Vwb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9jb3Vwb25zJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5WaWV3IG1vcmUgb2ZmZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8bGkgY2xhc3NOYW1lPVwibXktcHJvZmlsZS1pdGVtXCIgc3R5bGU9e3sgY3Vyc29yOiAnYXV0bycgfX0gb25DbGljaz17KCkgPT4geyAvLyByZWRpcmVjdCB0byByZWZlcnJhbCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9yZWZlcnJhbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzci1kdGxzLW9mZi1hY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNyLWR0bHMtc3RydC10eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmVmZXIuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+UkVGRVIgJmFtcDsgRUFSTjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mci1pbWctdHh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWltZy1jb250XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGVwLTIucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZyLWNvbnRudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib2ZyLWJrZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludml0ZSB5b3VyIGZyaWVuZHMgb24gZG9jcHJpbWUuY29tIGFuZCBlYXJuIDxiIGNsYXNzTmFtZT1cImZ3LTUwMCBkcmstYmxrXCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzhweCcsIG1hcmdpblRvcDogJzRweCcsIG1hcmdpblJpZ2h0OiAnMHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ydXBlZS1pY29uLnN2Z1wifSAvPiAyMDA8L2I+IG9uIGNvbXBsZXRpb24gb2YgdGhlaXIgZmlyc3Qgb3JkZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJ0LTIwXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLWRhcmstLWFsbClgICwgY3Vyc29yOiAncG9pbnRlcicgfX0+S25vdyBtb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4qL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2NvbnN1bHRhbnQuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGFwcC10aXRsZVwiPk9QRCBJbnN1cmFuY2U8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibXktcHJvZmlsZS1pdGVtXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hhdGhpc3RvcnknKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCBuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tZXNzYWdlLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5PbmxpbmUgQ29uc3VsdGF0aW9uPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDT05GSUcuRU5BQkxFX0lOU1VSQU5DRSAmJiBpc1VzZXJMb2dpbkluc3VyZWQgJiYgdGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3BhcnNlSW50KHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSldLmluc3VyYW5jZV9zdGF0dXMgPT0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuZ29Ub0luc3VyYW5jZS5iaW5kKHRoaXMsIGlzVXNlckxvZ2luSW5zdXJlZCl9IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbWQgbmF2LWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2lucy5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCI+T1BEIEluc3VyYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRJbnN1cmFuY2VCdG5UZXh0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge0NPTkZJRy5FTkFCTEVfVklQX0NMVUIgJiYgZGVmYXVsdFByb2ZpbGUgJiYgZGVmYXVsdFByb2ZpbGUuaXNfdmlwX21lbWJlciAmJiAhZGVmYXVsdFByb2ZpbGUuaXNfdmlwX2dvbGRfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZGlyZWN0IHRvICB2aXAgcGxhbiBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Byb2ZpbGVNZW51VmlwQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Byb2ZpbGUtbWVudS12aXAtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKCkgLy8gcmVzZXQgZ2xkIG9yIHZpcCBzdG9yZSB0byBkZWZhdWx0IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWNsdWItZGV0YWlscz9zb3VyY2U9cHJvZmlsZS1tZW51LXZpcC1jbGlja2VkJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3ZpcGxvZy5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCIgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5Eb2NwcmltZSBWaXAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgaW5zLXVzZXJkZXRhaWxzLWJ1eVwiPnttZW1TdGF0dXN9PC9idXR0b24+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtDT05GSUcuRU5BQkxFX1ZJUF9HT0xEID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWRpcmVjdCB0byAgdmlwIGdvbGQgcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUHJvZmlsZU1lbnVHb2xkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Byb2ZpbGUtbWVudS1nb2xkLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKSAvLyByZXNldCBnbGQgb3IgdmlwIHN0b3JlIHRvIGRlZmF1bHQgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9cHJvZmlsZS1tZW51LWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwibXktcHJvZmlsZS1pdGVtIGxzdC1zcGNuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCBuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZ29sZC1zbS5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5Eb2NwcmltZSBHb2xkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJ1dHRvbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBpbnMtdXNlcmRldGFpbHMtYnV5XCI+e21lbVN0YXR1c308L2J1dHRvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHJlZGlyZWN0IHRvICBkb2NwcmltZSBjYXJlIHBhZ2UqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19jYXJlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLmlzRG9jQ2FyZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJteS1wcm9maWxlLWl0ZW0gbHN0LXNwY25nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wcmltZWNhZS5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5Eb2NwcmltZSBDYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5zLXVzZXJkZXRhaWxzLWFjdGl2ZVwiPkFjdGl2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypQcmVzY3JpcHRpb25zIHBhZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5nb3RUby5iaW5kKHRoaXMsICdvbmxpbmVQcmVzY3JpcHRpb25zJyl9IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL29ubG5wcmVzLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5NeSBPbmxpbmUgUHJlc2NyaXB0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypBcHBvaW50bWVudHMgcGFnZSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuZ290VG8uYmluZCh0aGlzLCAnYXBwb2ludG1lbnRzJyl9IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Fwb2l0bS5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCI+TXkgQXBwb2ludG1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGJhZGdlIGJhZGdlLXdhcm5pbmdcIj4xPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21lZGljYWwtaGlzdG9yeS5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCI+TWVkaWNhbCBIaXN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgYmFkZ2UgYmFkZ2Utd2FybmluZ1wiPjI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCBuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9vcGQtdmlzaXQuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGFwcC10aXRsZVwiPlRlc3QgUmVwb3J0IDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGJhZGdlIGJhZGdlLXdhcm5pbmdcIj41PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qdXNlciBmYW1pbHkgc2VjdGlvbiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuZ290VG8uYmluZCh0aGlzLCAnZmFtaWx5Jyl9IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2ZtbHkuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGFwcC10aXRsZVwiPk15IEZhbWlseTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogdXNlciByZXZpZXdzKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9teXJhdGluZ3NgKX0gY2xhc3NOYW1lPVwibXktcHJvZmlsZS1pdGVtIGxzdC1zcGNuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbWQgbmF2LWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmV2aWV3LnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5NeSBSZXZpZXdzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCBuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9vcGQtdmlzaXQuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGFwcC10aXRsZVwiPkxpZmUgU3R5bGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB1c2VyIHdhbGxldCBzZWN0aW9uKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvd2FsbGV0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3JwLWljby5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCI+TXkgV2FsbGV0PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgeyAvKnVzZXIgYWRkcmVzcyBzZWN0aW9uKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9hZGRyZXNzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2FkZG1hbmcucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGFwcC10aXRsZVwiPk1hbmFnZSBBZGRyZXNzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgey8qdXNlciBub3RpZmljYXRpb25zKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbm90aWZpY2F0aW9ucycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJteS1wcm9maWxlLWl0ZW0gbHN0LXNwY25nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCBuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ibC1iZWxsLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5Ob3RpZmljYXRpb25zPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5VU0VSLnVucmVhZF9jb3VudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXhzXCI+e3RoaXMucHJvcHMuVVNFUi51bnJlYWRfY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICB7Lypsb2dvdXQqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dvdXQoY3VycmVudFJvb21JZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmcgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCBuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9sb2ctb3V0LnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5Mb2dvdXQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuVGVybXNDb25kaXRpb25zID8gPFRlcm1zQ29uZGl0aW9ucyB0b2dnbGU9eygpID0+IHRoaXMudG9nZ2xlVGFuZEMoKX0gdG5jPXtjb3Vwb24udG5jfSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibG9nb3V0LWRpdiBkLW1kLW5vbmVcIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucHJvcHMubG9nb3V0KGN1cnJlbnRSb29tSWQpIH19PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5Mb2dvdXQ8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVEYXRhXG4iLCJpbXBvcnQgUHJvZmlsZURhdGEgZnJvbSAnLi9Qcm9maWxlRGF0YS5qcydcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZURhdGEiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIFVzZXJBZGRyZXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBpY2s6IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdwaWNrPXRydWUnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIHRoaXMucHJvcHMuZ2V0VXNlckFkZHJlc3MoKVxuICAgIH1cblxuICAgIGFkZEFkZHJlc3MoKSB7IC8vYWRkIG5ldyBhZGRyZXNzXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9hZGRyZXNzL2FkZCcpXG4gICAgfVxuXG4gICAgZWRpdEFkZHJlc3MoaWQpIHsgLy8gZWRpdCBleGlzdGluZyBhZGRyZXNzXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygncGljaz10cnVlJykpIHtcbiAgICAgICAgICAgIC8vIHBpY2sgYWRkcmVzcyBhbmQgZ28gYmFjaywgZWxzZSBnbyBvbiB0byBlZGl0LlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RQaWNrdXBBZGRyZXNzKGlkKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC91c2VyL2FkZHJlc3MvZWRpdC8ke2lkfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVBZGRyZXNzKGFkZHJlc3NEYXRhLCBlKSB7IC8vIHVwZGF0ZSBjaGFuZ2VzIGluIGFkZHJlc3NcbiAgICAgICAgYWRkcmVzc0RhdGEuaXNfZGVmYXVsdCA9IHRydWVcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVVc2VyQWRkcmVzcyhhZGRyZXNzRGF0YSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyQWRkcmVzcygpXG4gICAgICAgICAgICB0aGlzLmVkaXRBZGRyZXNzKGFkZHJlc3NEYXRhLmlkKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgeyBhZGRyZXNzIH0gPSB0aGlzLnByb3BzLlVTRVJcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwbC0wIHByLTBcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBmYW1pbHktbGlzdCBkcC11c2VyLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKGFkZHJlc3MgJiYgYWRkcmVzcy5sZW5ndGgpID8gYWRkcmVzcy5tYXAoKGN1cnIsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGcgbWVtYmVyLWljb25cIiBvbkNsaWNrPXt0aGlzLnVwZGF0ZUFkZHJlc3MuYmluZCh0aGlzLCBjdXJyKX0gc3R5bGU9e3sgdG9wOiAnMHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICcxMHB4JywgaGVpZ2h0OiAnMHB4Jywgd2lkdGg6ICcwcHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT17Y3Vyci5pZC50b1N0cmluZygpfSBjaGVja2VkPXtjdXJyLmlzX2RlZmF1bHR9IGNsYXNzTmFtZT1cInVzZXItYWRkcmVzcy1oaWRkZW4tcmFkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1hZGRyZXNzLXJhZGlvXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWRldGFpbHMgcGFkZGluZy1sZWZ0YWRqZXN0XCIgb25DbGljaz17dGhpcy51cGRhdGVBZGRyZXNzLmJpbmQodGhpcywgY3Vycil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtc21cIiBzdHlsZT17eyB3aWR0aDogJzgwJScsIHdvcmRXcmFwOiAnYnJlYWstd29yZCcgfX0+e2N1cnIuYWRkcmVzc308L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiIHN0eWxlPXt7IHdpZHRoOiAnODAlJywgd29yZFdyYXA6ICdicmVhay13b3JkJyB9fT57Y3Vyci5sYW5kX21hcmsgIT09IFwiXCI/Y3Vyci5sYW5kX21hcms6Y3Vyci5sb2NhbGl0eX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMudXBkYXRlQWRkcmVzcy5iaW5kKHRoaXMsIGN1cnIpfSBzdHlsZT17eyB0b3A6IDEwIH19IGNsYXNzTmFtZT1cImN0LWltZyBjdC1pbWctc20gYXJyb3ctZm9yd2FyZC1yaWdodFwiPnt0aGlzLnN0YXRlLnBpY2sgPyBcIlBpY2tcIiA6IFwiRWRpdFwifTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHBkLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbm8tYWRkcmVzcy5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbGcgbXJ0LTIwXCI+Tm8gQWRkcmVzcyAhITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17dGhpcy5hZGRBZGRyZXNzLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy01MDBcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgZm9udFNpemU6IDE2IH19ID5BZGQgbmV3IGFkZHJlc3M8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRBZGRyZXNzLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIGFkZC1tb3JlLW1lbWJlcnMtYnRuXCI+KzwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQWRkcmVzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IHsgX2dldGxvY2F0aW9uRnJvbUxhdExvbmcsIF9nZXRMb2NhdGlvbkZyb21QbGFjZUlkLCBfYXV0b0NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2hlbHBlcnMvbWFwSGVscGVycy5qcydcblxuY2xhc3MgVXNlclNpZ251cFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIGxldCB7IHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUsIGRlZmF1bHRQcm9maWxlIH0gPSB0aGlzLnByb3BzLlVTRVJcbiAgICAgICAgbGV0IGRlZl9wcm9maWxlID0gbnVsbFxuICAgICAgICBpZiAocHJvZmlsZXMgJiYgcHJvZmlsZXNbZGVmYXVsdFByb2ZpbGVdKSB7XG4gICAgICAgICAgICBkZWZfcHJvZmlsZSA9IHByb2ZpbGVzW2RlZmF1bHRQcm9maWxlXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxuXG4gICAgICAgICAgICBsYW5kX21hcms6ICcnLFxuICAgICAgICAgICAgbGFuZG1hcmtfcGxhY2VfaWQ6ICcnLFxuICAgICAgICAgICAgbGFuZG1hcmtfbG9jYXRpb25fbGF0OiAnJyxcbiAgICAgICAgICAgIGxhbmRtYXJrX2xvY2F0aW9uX2xvbmc6ICcnLFxuXG4gICAgICAgICAgICBwaW5jb2RlOiAnJyxcblxuICAgICAgICAgICAgbG9jYWxpdHk6ICcnLFxuICAgICAgICAgICAgbG9jYWxpdHlfcGxhY2VfaWQ6ICcnLFxuICAgICAgICAgICAgbG9jYWxpdHlfbG9jYXRpb25fbGF0OiAnJyxcbiAgICAgICAgICAgIGxvY2FsaXR5X2xvY2F0aW9uX2xvbmc6ICcnLFxuXG4gICAgICAgICAgICB0eXBlOiAnaG9tZScsXG4gICAgICAgICAgICBwaG9uZV9udW1iZXI6IGRlZl9wcm9maWxlID8gZGVmX3Byb2ZpbGUucGhvbmVfbnVtYmVyIDogXCJcIixcbiAgICAgICAgICAgIGVkaXQ6ICEhdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsXG4gICAgICAgICAgICBsYW5kX21hcmtfcmVzdWx0czogW10sXG4gICAgICAgICAgICBsb2NhbGl0eV9yZXN1bHRzOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb24obG9jYXRpb24sIHJlc3VsdEZpZWxkKSB7XG4gICAgICAgIGxldCB0eXBlcyA9IFsnZXN0YWJsaXNobWVudCddXG4gICAgICAgIGlmIChyZXN1bHRGaWVsZCA9PSAnbG9jYWxpdHlfcmVzdWx0cycpIHtcbiAgICAgICAgICAgIHR5cGVzID0gWycocmVnaW9ucyknXVxuICAgICAgICB9XG4gICAgICAgIF9hdXRvQ29tcGxldGVTZXJ2aWNlKGxvY2F0aW9uLCBmdW5jdGlvbiAocmVzdWx0cywgc3RhdHVzKSB7XG4gICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cyB8fCBbXVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtyZXN1bHRGaWVsZF06IHJlc3VsdHMgfSlcbiAgICAgICAgfS5iaW5kKHRoaXMpLCB0eXBlcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWRpdCkge1xuICAgICAgICAgICAgbGV0IGVkaXRTdGF0ZSA9IHt9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5VU0VSLmFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlVTRVIuYWRkcmVzcy5tYXAoKGFkZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkLmlkID09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0U3RhdGUgPSBhZGRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4uZWRpdFN0YXRlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXQpIHtcbiAgICAgICAgICAgIGxldCBlZGl0U3RhdGUgPSB7fVxuICAgICAgICAgICAgaWYgKHByb3BzLlVTRVIuYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHByb3BzLlVTRVIuYWRkcmVzcy5tYXAoKGFkZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkLmlkID09IHByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFN0YXRlID0gYWRkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLmVkaXRTdGF0ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcblxuICAgICAgICAvLyBpZiAoZS50YXJnZXQubmFtZSA9PSAnbGFuZF9tYXJrJykge1xuICAgICAgICAvLyAgICAgLy8gdGhpcy5nZXRMb2NhdGlvbihlLnRhcmdldC52YWx1ZSwgJ2xhbmRfbWFya19yZXN1bHRzJylcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09ICdsb2NhbGl0eScpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oZS50YXJnZXQudmFsdWUsICdsb2NhbGl0eV9yZXN1bHRzJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oKSB7XG4gICAgICAgIC8vIHZhbGlkYXRlXG4gICAgICAgIGxldCBhZGRBZGRyZXNzID0gdHJ1ZVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlZnMpLmZvckVhY2goKHBycCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucmVmc1twcnBdLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicGhvbmVfbnVtYmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVmc1twcnBdLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmc1twcnBdLnN0eWxlLmJvcmRlciA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRoaXMucmVmc1twcnBdLnZhbHVlLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcInBpbmNvZGVcIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0aGlzLnJlZnNbcHJwXS52YWx1ZS5tYXRjaCgvXlsxLTldWzAtOV17NX0kLylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImxvY2FsaXR5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9jYWxpdHkgJiYgdGhpcy5zdGF0ZS5sb2NhbGl0eV9wbGFjZV9pZCAmJiB0aGlzLnJlZnNbcHJwXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzW3BycF0udmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiYWRkcmVzc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucmVmc1twcnBdLnZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhc2UgXCJsYW5kX21hcmtcIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIC8qaWYgKHRoaXMuc3RhdGUubGFuZF9tYXJrICYmIHRoaXMuc3RhdGUubGFuZG1hcmtfcGxhY2VfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmc1twcnBdLnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC8qdGhpcy5yZWZzW3BycF0udmFsdWUgJiYgKi92YWxpZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbcHJwXS5zdHlsZS5ib3JkZXIgPSAnJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbcHJwXS5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCdcbiAgICAgICAgICAgICAgICBhZGRBZGRyZXNzID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoYWRkQWRkcmVzcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWRpdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlVXNlckFkZHJlc3ModGhpcy5zdGF0ZSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ291bGQgbm90IHVwZGF0ZSBhZGRyZXNzLlwiIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFkZFVzZXJBZGRyZXNzKHRoaXMuc3RhdGUsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RQaWNrdXBBZGRyZXNzKHJlcy5pZClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3QgYWRkIGFkZHJlc3MuXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZ28gYmFja1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdExvY2F0aW9uKGxvY2F0aW9uLCB0eXBlKSB7XG4gICAgICAgIFxuICAgICAgICBfZ2V0TG9jYXRpb25Gcm9tUGxhY2VJZChsb2NhdGlvbi5yZWZlcmVuY2UsIChwbGFjZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGxhY2VfaWQsIGZvcm1hdHRlZF9hZGRyZXNzLCBnZW9tZXRyeSwgbmFtZSB9ID0gcGxhY2VcbiAgICAgICAgICAgIGxldCBsYXQgPSBnZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxldCBsb25nID0gZ2VvbWV0cnkubG9jYXRpb24ubG5nXG5cbiAgICAgICAgICAgIGlmICh0eXBlID09ICdsYW5kX21hcmsnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxhbmRfbWFyazogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGFuZG1hcmtfcGxhY2VfaWQ6IHBsYWNlX2lkLFxuICAgICAgICAgICAgICAgICAgICBsYW5kbWFya19sb2NhdGlvbl9sYXQ6IGxhdCxcbiAgICAgICAgICAgICAgICAgICAgbGFuZG1hcmtfbG9jYXRpb25fbG9uZzogbG9uZyxcbiAgICAgICAgICAgICAgICAgICAgbGFuZF9tYXJrX3Jlc3VsdHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGl0eV9yZXN1bHRzOiBbXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09ICdsb2NhbGl0eScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxpdHk6IGZvcm1hdHRlZF9hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGl0eV9wbGFjZV9pZDogcGxhY2VfaWQsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXR5X2xvY2F0aW9uX2xhdDogbGF0LFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGl0eV9sb2NhdGlvbl9sb25nOiBsb25nLFxuICAgICAgICAgICAgICAgICAgICBsYW5kX21hcmtfcmVzdWx0czogW10sXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXR5X3Jlc3VsdHM6IFtdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSlcbiAgICB9XG5cbiAgICBjbG9zZVJlc3VsdHMoZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYW5kX21hcmtfcmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYW5kX21hcmtfcmVzdWx0czogW10gfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxvY2FsaXR5X3Jlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9jYWxpdHlfcmVzdWx0czogW10gfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7LyogPGhlYWRlciBjbGFzc05hbWU9XCJza2luLXdoaXRlIGZpeGVkIGhvcml6b250YWwgdG9wIGJkci0xIGJvdHRvbSBsaWdodCBzdGlja3ktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1zbSB0ZXh0LW1pZGRsZSBiYWNrLWljb24td2hpdGVcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2JhY2staWNvbi5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZ3LTcwMCBjYXBpdGFsaXplIHRleHQtY2VudGVyXCI+e3RoaXMuc3RhdGUuZWRpdCA/IFwiRWRpdFwiIDogXCJBZGRcIn0gQWRkcmVzczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj4gKi99XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ2YWxpZGF0aW9uLWJvb2stc2NyZWVuXCIgb25DbGljaz17dGhpcy5jbG9zZVJlc3VsdHMuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG5vLXJvdW5kIG5vLXNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImdvLWJvdHRvbVwiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm51bWJlclwiIG5hbWU9XCJwaG9uZV9udW1iZXJcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZV9udW1iZXJ9IHJlcXVpcmVkIHJlZj1cInBob25lX251bWJlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm51bWJlclwiPk1vYmlsZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14c1wiPiAod2lsbCBiZSB1c2VkIGF0IHRoZSB0aW1lIG9mIHNhbXBsZSBwaWNrdXApPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxvY2FsaXR5XCIgbmFtZT1cImxvY2FsaXR5XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUubG9jYWxpdHl9IHJlZj1cImxvY2FsaXR5XCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPSdudWxsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2NhbGl0eVwiPlNlbGVjdCBMb2NhbGl0eTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvY2FsaXR5X3Jlc3VsdHMubGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBkLTAgc2VhcmNobG9jYXRpb25yZXN1bHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0IGNpdHktbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9jYWxpdHlfcmVzdWx0cy5tYXAoKHJlc3VsdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0gb25DbGljaz17dGhpcy5zZWxlY3RMb2NhdGlvbi5iaW5kKHRoaXMsIHJlc3VsdCwgJ2xvY2FsaXR5Jyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Jlc3VsdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXR5LWxvY1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiYWRkcmVzc1wiIG5hbWU9XCJhZGRyZXNzXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc30gcmVxdWlyZWQgcmVmPVwiYWRkcmVzc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIj5Ib3VzZSBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsYW5kX21hcmtcIiBuYW1lPVwibGFuZF9tYXJrXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUubGFuZF9tYXJrfSByZXF1aXJlZCAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZF9tYXJrXCI+TGFuZCBNYXJrPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGFuZF9tYXJrX3Jlc3VsdHMubGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBkLTAgc2VhcmNobG9jYXRpb25yZXN1bHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0IGNpdHktbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGFuZF9tYXJrX3Jlc3VsdHMubWFwKChyZXN1bHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0TG9jYXRpb24uYmluZCh0aGlzLCByZXN1bHQsICdsYW5kX21hcmsnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57cmVzdWx0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpdHktbG9jXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwaW5jb2RlXCIgbmFtZT1cInBpbmNvZGVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5waW5jb2RlfSByZXF1aXJlZCByZWY9XCJwaW5jb2RlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGluY29kZVwiPlBpbiBDb2RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlubGluZSBpbnB1dC1sYWJlbFwiPlBsYWNlIFR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaG9vc2UtZ2VuZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB2YWx1ZT17J2hvbWUnfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS50eXBlID09ICdob21lJ30gdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiAvPkhvbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj48aW5wdXQgdmFsdWU9eydvZmZpY2UnfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS50eXBlID09ICdvZmZpY2UnfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIC8+T2ZmaWNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+PGlucHV0IHZhbHVlPXsnb3RoZXInfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS50eXBlID09ICdvdGhlcid9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgLz5PdGhlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZWRpdCA/IDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0YXRpYy1idG5cIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKX0+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGF0aWMtYnRuXCIgb25DbGljaz17dGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyl9PkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNpZ251cFZpZXdcbiIsImltcG9ydCBBZGRBZGRyZXNzIGZyb20gJy4vYWRkQWRkcmVzcydcblxuZXhwb3J0IGRlZmF1bHQgQWRkQWRkcmVzcyIsImltcG9ydCBVc2VyQWRkcmVzcyBmcm9tICcuL1VzZXJBZGRyZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyQWRkcmVzcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBcHBvaW50bWVudExpc3QgZnJvbSAnLi9hcHBvaW50bWVudExpc3QvaW5kZXguanMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL0xvYWRlcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0nXG5cbmNsYXNzIFVzZXJBcHBvaW50bWVudHNWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dSZXBvcnRzOiBmYWxzZSxcbiAgICAgICAgICAgIGFwcG9pbnRtZW50UmVwb3J0czogW10sXG4gICAgICAgICAgICBzaG93X3NvcnRlZF9yZXN1bHRzOiBbJ2FsbCddXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRQcm9maWxlQXBwb2ludG1lbnRzKHRoaXMucHJvcHMuVVNFUi5zZWxlY3RlZFByb2ZpbGUpIC8vIGdldCB1c2VyIGFwcG9pbnRtZW50c1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUi5zZWxlY3RlZFByb2ZpbGUgIT0gcHJvcHMuVVNFUi5zZWxlY3RlZFByb2ZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0UHJvZmlsZUFwcG9pbnRtZW50cyhwcm9wcy5VU0VSLnNlbGVjdGVkUHJvZmlsZSkgLy8gZ2V0IHVzZXIgYXBwb2ludG1lbnRzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aWV3UmVwb3J0Q2xpY2socmVwb3J0cykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1JlcG9ydHM6IHRydWUsIGFwcG9pbnRtZW50UmVwb3J0czogcmVwb3J0cyB9KVxuICAgIH1cblxuICAgIGhpZGVSZXBvcnRzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1JlcG9ydHM6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgcmVwb3J0Q2xpY2soc3JjKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHNyYywgJ19ibGFuaycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVTb3J0T3JkZXIoKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfc29ydGVkX3Jlc3VsdHM6ICF0aGlzLnN0YXRlLnNob3dfc29ydGVkX3Jlc3VsdHMgfSlcbiAgICB9XG5cbiAgICBzZWxlY3RPcHRpb25zKHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIGxldCBhcHBvaW50bWVudHMgPSBbXVxuICAgICAgICBpZih2YWx1ZSA9PSAnYWxsJykge1xuICAgICAgICAgICAgYXBwb2ludG1lbnRzLnB1c2goJ2FsbCcpXG4gICAgICAgIH1lbHNlIGlmKHZhbHVlID09ICd1cGNvbWluZycpIHtcbiAgICAgICAgICAgIGFwcG9pbnRtZW50cyA9IFsyLDMsNCw1XVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBhcHBvaW50bWVudHMucHVzaCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQXBwb2ludG1lbnRDaGlwc1NlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdhcHBvaW50bWVudC1jaGlwcy1zZWxlY3RlZCcsICd0eXBlJzogdHlwZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X3NvcnRlZF9yZXN1bHRzOiBhcHBvaW50bWVudHMgfSlcblxuICAgICAgICAvKmxldCBmb3VuZCA9IGZhbHNlXG4gICAgICAgIGxldCBhcHBvaW50bWVudHMgPSBbXVxuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2hvd19zb3J0ZWRfcmVzdWx0cy5sZW5ndGg9PTEgJiYgdGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YodmFsdWUpPi0xKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgbGV0IGlzQWxsRXhpc3QgPSB0aGlzLnN0YXRlLnNob3dfc29ydGVkX3Jlc3VsdHMuaW5kZXhPZignYWxsJylcbiAgICAgICAgICAgIGlmKGlzQWxsRXhpc3Q9PS0xICYmIHZhbHVlPT0nYWxsJyl7XG4gICAgICAgICAgICAgICAgYXBwb2ludG1lbnRzID0gWydhbGwnXVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcG9pbnRtZW50cyA9IHRoaXMuc3RhdGUuc2hvd19zb3J0ZWRfcmVzdWx0cy5maWx0ZXIoKHgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGlzQWxsRXhpc3QgPi0xICYmIHZhbHVlIT0nYWxsJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZih4PT12YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlPT0nYWxsJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYoIWZvdW5kKXtcbiAgICAgICAgICAgICAgICAgICAgYXBwb2ludG1lbnRzLnB1c2godmFsdWUpXG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfc29ydGVkX3Jlc3VsdHM6IGFwcG9pbnRtZW50cyB9KVxuICAgICAgICB9Ki9cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgeyBhcHBvaW50bWVudHMsIHNlbGVjdGVkUHJvZmlsZSB9ID0gdGhpcy5wcm9wcy5VU0VSXG4gICAgICAgIGxldCBhcHBvaW50bWVudF9saXN0ID0gYXBwb2ludG1lbnRzW3NlbGVjdGVkUHJvZmlsZV0gfHwgW11cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YoJ2FsbCcpPT0tMSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihhcHBvaW50bWVudHNbc2VsZWN0ZWRQcm9maWxlXSAmJiBhcHBvaW50bWVudHNbc2VsZWN0ZWRQcm9maWxlXS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGFwcG9pbnRtZW50X2xpc3QgPSBhcHBvaW50bWVudHNbc2VsZWN0ZWRQcm9maWxlXS5maWx0ZXIoKHgpPT57XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNob3dfc29ydGVkX3Jlc3VsdHMuaW5kZXhPZih4LnN0YXR1cyk+LTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwbC0wIHByLTBcIj5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJhcHQtc29ydGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VmlldyBieTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsgKGUpPT4gdGhpcy5zZWxlY3RPcHRpb25zKCdzaG93X3NvcnRlZF9yZXN1bHRzJywgZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD5BbGwgQXBwb2ludG1lbnRzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkNyZWF0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Qm9va2VkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPlJlc2NoZWR1bGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPkFjY2VwdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPkNhbmNlbGxlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj5Db21wbGV0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1maWx0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmtuLWNoaXBzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLnNob3dfc29ydGVkX3Jlc3VsdHMuaW5kZXhPZignYWxsJyk+LTE/J2Jrc2VsZWN0JzonJ31gfSBvbkNsaWNrPXsoKT0+dGhpcy5zZWxlY3RPcHRpb25zKCdhbGwnLCAnYWxsJyl9PkFsbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YoMik+LTEgfHwgdGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YoMyk+LTEgfHwgdGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YoNCk+LTEgfHwgdGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YoNSk+LTE/J2Jrc2VsZWN0JzonJ31gfSBvbkNsaWNrPXsoKT0+dGhpcy5zZWxlY3RPcHRpb25zKCd1cGNvbWluZycsICd1cGNvbWluZycpfT5VcGNvbWluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YoNyk+LTE/J2Jrc2VsZWN0JzonJ31gfSBvbkNsaWNrPXsoKT0+dGhpcy5zZWxlY3RPcHRpb25zKDcsICdDb21wbGV0ZWQnKX0+Q29tcGxldGVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLnNob3dfc29ydGVkX3Jlc3VsdHMuaW5kZXhPZig2KT4tMT8nYmtzZWxlY3QnOicnfWB9IG9uQ2xpY2s9eygpPT50aGlzLnNlbGVjdE9wdGlvbnMoNiwgJ0NhbmNlbGxlZCcpfT5DYW5jZWxsZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRnLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Tb3J0IGJ5IEFwcG9pbnRtZW50IFN0YXR1czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRnbCB0Z2wtaW9zXCIgaWQ9XCJsYWJfaW5zdXJhbmNlXCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzfSBvbkNoYW5nZT17dGhpcy50b2dnbGVTb3J0T3JkZXIuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRnbC1idG5cIiBodG1sRm9yPVwibGFiX2luc3VyYW5jZVwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwb2ludG1lbnRfbGlzdCA/IDx1bCBjbGFzc05hbWU9XCJsaXN0IG9ubGluZS1jb25zdWx0YW50LWxpc3QgZHAtdXNlci1saXN0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNSwgbWFyZ2luQm90dG9tOiA3MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYXBwb2ludG1lbnRfbGlzdCAmJiBhcHBvaW50bWVudF9saXN0Lmxlbmd0aCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBvaW50bWVudF9saXN0Lm1hcCgoYXBwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKChhcHAudHlwZSA9PSAnbGFiJyAmJiBhcHAubGFiKSB8fCBhcHAudHlwZSA9PSAnZG9jdG9yJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBvaW50bWVudExpc3Qga2V5PXtpfSB7Li4udGhpcy5wcm9wc30gZGF0YT17YXBwfSB2aWV3UmVwb3J0Q2xpY2s9e3RoaXMudmlld1JlcG9ydENsaWNrLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbm8tYXBwb2ludG1lbnQucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1sZyBtcnQtMjBcIj5ObyBBcHBvaW50bWVudHMgISE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPiA6IDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dSZXBvcnRzICYmIHRoaXMuc3RhdGUuYXBwb2ludG1lbnRSZXBvcnRzICYmIHRoaXMuc3RhdGUuYXBwb2ludG1lbnRSZXBvcnRzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwIGlwZC1wb3Atd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgcC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXBkLXBvcC1jbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhpZGVSZXBvcnRzKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlwZC1uZWVkSGVscCBtYi0yMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNiB9fT5WaWV3IFJlcG9ydDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXBwb2ludG1lbnRSZXBvcnRzLm1hcCgocmVwb3J0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBjdXJzb3ItcG50ciBtYi0xMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVwb3J0Q2xpY2socmVwb3J0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMzIsIG1hcmdpblJpZ2h0OiAxNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3BkZi1pY29uLnBuZyd9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNiB9fT57YFJlcG9ydCAke2luZGV4ICsgMX1gfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAyNCwgbWFyZ2luTGVmdDogMTYgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kb3dubG9hZC1pY29uLnN2Zyd9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJBcHBvaW50bWVudHNWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi8uLi9pbml0aWFsc1BpY3R1cmUnXG5cbmNvbnN0IFNUQVRVU19NQVAgPSB7XG4gICAgQ1JFQVRFRDogMSxcbiAgICBCT09LRUQ6IDIsXG4gICAgUkVTQ0hFRFVMRURfRE9DVE9SOiAzLFxuICAgIFJFU0NIRURVTEVEX1BBVElFTlQ6IDQsXG4gICAgQUNDRVBURUQ6IDUsXG4gICAgQ0FOQ0VMRUQ6IDYsXG4gICAgQ09NUExFVEVEOiA3LFxufVxuXG5jbGFzcyBBcHBvaW50bWVudExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIGdldFRpbWUodW5peF90aW1lc3RhbXApIHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh1bml4X3RpbWVzdGFtcClcbiAgICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICB2YXIgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICB2YXIgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG4gICAgICAgIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgICAgICAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuICAgICAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgICAgIHZhciBzdHJUaW1lID0gaG91cnMgKyAnOicgKyBtaW51dGVzICsgJyAnICsgYW1wbTtcbiAgICAgICAgcmV0dXJuIHN0clRpbWU7XG4gICAgfVxuXG4gICAgb3BlbkFwcG9pbnRtZW50KHR5cGUsIGlkKSB7XG4gICAgICAgIGlmICh0eXBlID09ICdkb2N0b3InKSB0eXBlID0gJ29wZCc7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt0eXBlfS9hcHBvaW50bWVudC8ke2lkfWApXG4gICAgfVxuXG4gICAgdmlld1JlcG9ydHModHlwZSwgaWQsIGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBpZiAodHlwZSA9PSAnZG9jdG9yJykgdHlwZSA9ICdvcGQnO1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3VzZXIvJHt0eXBlfS9yZXBvcnRzLyR7aWR9YClcbiAgICB9XG5cbiAgICBnZXRTdGF0dXMoc3RhdHVzKSB7XG4gICAgICAgIHN0YXR1cyA9IHBhcnNlSW50KHN0YXR1cylcbiAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJhcHBvaW50bWVudC1zdGF0dXNcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0+Q3JlYXRlZDwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJhcHBvaW50bWVudC1zdGF0dXNcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0+Qm9va2VkPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LXN0YXR1c1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fT5SZXNjaGVkdWxlZDwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNDoge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJhcHBvaW50bWVudC1zdGF0dXNcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0+UmVzY2hlZHVsZWQ8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDU6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtc3RhdHVzXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19PkFjY2VwdGVkPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA2OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LXN0YXR1c1wiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5DYW5jZWxsZWQ8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtc3RhdHVzXCIgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+Q29tcGxldGVkPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJhcHBvaW50bWVudC1zdGF0dXNcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0+VXBjb21pbmc8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZvaWNlQ2xpY2soaW52b2ljZUxpbmspIHtcbiAgICAgICAgdmFyIHdpbiA9IHdpbmRvdy5vcGVuKGludm9pY2VMaW5rLCAnX2JsYW5rJyk7XG4gICAgICAgIHdpbi5mb2N1cygpO1xuICAgIH1cblxuICAgIHJlcG9ydENsaWNrKHJlcG9ydHMpIHtcbiAgICAgICAgaWYgKHJlcG9ydHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihyZXBvcnRzWzBdLCAnX2JsYW5rJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudmlld1JlcG9ydENsaWNrKHJlcG9ydHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7IGRlYWxfcHJpY2UsIGRvY3Rvcl9uYW1lLCBkaXNwbGF5X25hbWUsIHRpbWVfc2xvdF9lbmQsIHRpbWVfc2xvdF9zdGFydCwgc3RhdHVzLCB0eXBlLCBpZCwgbGFiX25hbWUsIGxhYl90ZXN0X25hbWUsIGRvY3Rvcl90aHVtYm5haWwsIGxhYl90aHVtYm5haWwsIHBhdGllbnRfbmFtZSwgaW52b2ljZXMsIGhvc3BpdGFsX25hbWUsIHNwZWNpYWxpemF0aW9uLCB2aXAsIHBheW1lbnRfbW9kZSwgZGlzY291bnQgfSA9IHRoaXMucHJvcHMuZGF0YVxuXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZV9zbG90X3N0YXJ0KVxuICAgICAgICBsZXQgaXNfdmlwX2FwcGxpY2FibGUgPSB2aXAuaXNfdmlwX21lbWJlciAmJiB2aXAuY292ZXJlZF91bmRlcl92aXBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgcGFkZGluZ1RvcDogMzIsIGN1cnNvcjogJ3Vuc2V0JyB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGNvbnN1bHRhbnQtZHBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXsoZG9jdG9yX25hbWUgfHwgbGFiX25hbWUpfSBoYXNfaW1hZ2U9eyEhKGRvY3Rvcl90aHVtYm5haWwgfHwgbGFiX3RodW1ibmFpbCl9IGNsYXNzTmFtZT17bGFiX25hbWUgPyAnaW5pdGlhbHNQaWN0dXJlLWxzJzogJ2luaXRpYWxzUGljdHVyZS1hcHBvaW50bWVudCd9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvY3Rvcl90aHVtYm5haWx9IGNsYXNzTmFtZT17ZG9jdG9yX3RodW1ibmFpbCA/ICdpbWctZmx1aWQgaW1nLXJvdW5kIG15LWFwcG9udC1pbWcnOiAnZC1ub25lJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsYWJfdGh1bWJuYWlsfSBjbGFzc05hbWU9e2xhYl90aHVtYm5haWwgPyAnZmx0ci11c3ItaW1hZ2UtbGFiJzogJ2Qtbm9uZSd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlID09ICdkb2N0b3InID8gPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zdGV0aG9zY29wZS5zdmdcIn0gY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtaWNvblwiIC8+IDogPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9iZWFrZXIuc3ZnXCJ9IGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWljb25cIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VsdGFudC1kZXRhaWxzXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17dGhpcy5vcGVuQXBwb2ludG1lbnQuYmluZCh0aGlzLCB0eXBlLCBpZCl9PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlIHZpcC1pY28taGRuZ1wiPntkaXNwbGF5X25hbWUgfHwgbGFiX25hbWV9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX3ZpcF9hcHBsaWNhYmxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb24gJiYgc3BlY2lhbGl6YXRpb24ubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LXNwZWNpYWxpemF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb24ubWFwKChzcGVjaWFsaXR5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiYXBudC1oc3AtbmFtZVwiIGtleT17aW5kZXh9PntzcGVjaWFsaXR5fSB7KGluZGV4IDwgc3BlY2lhbGl6YXRpb24ubGVuZ3RoIC0gMSkgJiYgKGluZGV4ICE9IDIpID8gJ3wgJyA6ICcnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbF9uYW1lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNCB9fSBjbGFzc05hbWU9XCJhcG50LWhzcC1uYW1lXCI+e2hvc3BpdGFsX25hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYl90ZXN0X25hbWUgJiYgbGFiX3Rlc3RfbmFtZS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0IH19IGNsYXNzTmFtZT1cImFwbnQtaHNwLW5hbWVcIj57bGFiX3Rlc3RfbmFtZVswXS50ZXN0X25hbWV9IHtsYWJfdGVzdF9uYW1lLmxlbmd0aCA+IDEgPyBgJiAke2xhYl90ZXN0X25hbWUubGVuZ3RoIC0gMX0gbW9yZWAgOiAnJ308L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA1IH19ID48c3BhbiBjbGFzc05hbWU9XCJjdC1pbWcgY3QtaW1nLXhzIHRleHQtcmlnaHRcIj48aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbmV3LWNhbC5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+e2RhdGUudG9EYXRlU3RyaW5nKCl9IHwgPHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy14cyB0ZXh0LXJpZ2h0XCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzE1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9zcGFuPnt0aGlzLmdldFRpbWUodGltZV9zbG90X3N0YXJ0KX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDUgfX0gPjwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNSB9fSA+PHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy14cyB0ZXh0LXJpZ2h0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHN0eWxlPXt7IHdpZHRoOiAxNSwgbWFyZ2luVG9wOiAtNCB9fSAvPjwvc3Bhbj57cGF0aWVudF9uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInZpZXctY2hhdCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdHVzID09IDcgJiYgdHlwZSA9PSAnZG9jdG9yJykgPyA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudmlld1JlcG9ydHMuYmluZCh0aGlzLCB0eXBlLCBpZCl9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnlcIj5WaWV3IFByZXNjcmlwdGlvbjwvYnV0dG9uPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0dXMgPT0gNyAmJiB0eXBlID09ICdsYWInKSA/IDxidXR0b24gb25DbGljaz17dGhpcy52aWV3UmVwb3J0cy5iaW5kKHRoaXMsIHR5cGUsIGlkKX0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeVwiPlZpZXcgUmVwb3J0PC9idXR0b24+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1jdXN0b20tcmlnaHRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLm9wZW5BcHBvaW50bWVudC5iaW5kKHRoaXMsIHR5cGUsIGlkKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9hcnJvdy1mb3J3YXJkLXJpZ2h0LnN2Z1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZXRTdGF0dXMoc3RhdHVzKX1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDQsIGxlZnQ6IDgsIGZvbnRTaXplOiAxMiB9fT57YEJvb2tpbmcgaWQgOiAke2lkfWB9PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZSAmJiAhaXNfdmlwX2FwcGxpY2FibGU/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAyMCwgcmlnaHQ6IDgsIGZvbnRTaXplOiAxMiwgY29sb3I6ICcjZjc4NjMxJyB9fT4mIzgzNzc7IHtwYXJzZUludChkZWFsX3ByaWNlKS0gKGRpc2NvdW50P3BhcnNlSW50KGRpc2NvdW50KTowKX08L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlcyAmJiBpbnZvaWNlcy5sZW5ndGggPT09IDEgJiYgKCF0aGlzLnByb3BzLmRhdGEucmVwb3J0cyB8fCAhdGhpcy5wcm9wcy5kYXRhLnJlcG9ydHMubGVuZ3RoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ydC0yMFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDMwcHgnIH19IG9uQ2xpY2s9eygpID0+IHRoaXMuaW52b2ljZUNsaWNrKGludm9pY2VzWzBdKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZvaWNlLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvaW52b2ljZS5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTUwMFwiPkRvd25sb2FkIFBheW1lbnQgUmVjZWlwdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGludm9pY2VzICYmIGludm9pY2VzLmxlbmd0aCAmJiB0aGlzLnByb3BzLmRhdGEucmVwb3J0cyAmJiB0aGlzLnByb3BzLmRhdGEucmVwb3J0cy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMjAgbXVsdGlwbGUtaW52b2ljZS1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11bHRpcGxlLWludm9pY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZvaWNlLWRpdlwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaW52b2ljZUNsaWNrKGludm9pY2VzWzBdKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvaW52b2ljZS5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNTAwXCI+RG93bmxvYWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTUwMFwiPlBheW1lbnQgUmVjZWlwdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZvaWNlLWRpdlwiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVwb3J0Q2xpY2sodGhpcy5wcm9wcy5kYXRhLnJlcG9ydHMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yZXBvcnQuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTUwMFwiPlZpZXc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTUwMFwiPlJlcG9ydDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICBwYXltZW50X21vZGUgJiYgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIGpjLXNwYWNlYiBzaG9wcGluZy1jYXJkLWRldGFpbHMtbGlzdCBmdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBheW1lbnQgbW9kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwYXltZW50X21vZGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBvaW50bWVudExpc3QiLCJpbXBvcnQgQXBwb2ludG1lbnRMaXN0IGZyb20gJy4vQXBwb2ludG1lbnRMaXN0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBBcHBvaW50bWVudExpc3QiLCJpbXBvcnQgVXNlckFwcG9pbnRtZW50c1ZpZXcgZnJvbSAnLi9Vc2VyQXBwb2ludG1lbnRzVmlldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgVXNlckFwcG9pbnRtZW50c1ZpZXciLCJpbXBvcnQgdXNlckNvdXBvbnMgZnJvbSAnLi91c2VyQ291cG9ucydcblxuZXhwb3J0IGRlZmF1bHQgdXNlckNvdXBvbnMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRlcm1zQ29uZGl0aW9ucyBmcm9tICcuLi8uLi9jb3Vwb25TZWxlY3Rpb25WaWV3L3Rlcm1zQ29uZGl0aW9ucy5qcydcblxuY2xhc3MgVXNlckNvdXBvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlblRlcm1zQ29uZGl0aW9uczogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZENvdXBvbjogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlVGFuZEMoc2VsZWN0ZWRDb3Vwb24gPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuVGVybXNDb25kaXRpb25zOiAhdGhpcy5zdGF0ZS5vcGVuVGVybXNDb25kaXRpb25zLCBzZWxlY3RlZENvdXBvbiB9KTtcbiAgICB9XG5cbiAgICBzZWFyY2hMYWIoY291cG9uKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0Q29ycG9yYXRlQ291cG9uKGNvdXBvbilcblxuICAgICAgICBsZXQgdGVzdF9pZHMgPSBbXVxuICAgICAgICBsZXQgbmV0d29ya19pZCA9IFwiXCJcbiAgICAgICAgaWYgKGNvdXBvbiAmJiBjb3Vwb24udGVzdHMpIHtcbiAgICAgICAgICAgIHRlc3RfaWRzID0gY291cG9uLnRlc3RzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdXBvbiAmJiBjb3Vwb24ubmV0d29ya19pZCkge1xuICAgICAgICAgICAgbmV0d29ya19pZCA9IGNvdXBvbi5uZXR3b3JrX2lkXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2xhYi9zZWFyY2hyZXN1bHRzP3Rlc3RfaWRzPSR7dGVzdF9pZHMuam9pbignLCcpfSZuZXR3b3JrX2lkPSR7bmV0d29ya19pZH1gXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImFsbC1vZmZlcnMgY3BuLW1yZ25cIj5BbGwgb2ZmZXJzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbm8tcm91bmQgbm8tc2hhZG93IHNraW4tdHJhbnNwYXJlbnQgcHJvZmlsZS1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkZGluZy1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbGljYWJsZUNvdXBvbnMgJiYgdGhpcy5wcm9wcy5hcHBsaWNhYmxlQ291cG9ucy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vwb24tbGlzdGluZyBkcC11c2VyLWxpc3QgYmctbHN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGxpY2FibGVDb3Vwb25zLm1hcCgoY291cG9uLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb3Vwb25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJhdmwtY3BuLWhkbmdcIj5BdmFpbGFibGUgQ291cG9uczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VwYW4tbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vwb24tZGVzaW5nXCI+e2NvdXBvbi5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cG9uLmlzX2NvcnBvcmF0ZSA/IDxzcGFuIG9uQ2xpY2s9e3RoaXMuc2VhcmNoTGFiLmJpbmQodGhpcywgY291cG9uKX0gY2xhc3NOYW1lPVwiY291cG9uLWF2YWlsXCI+QXZhaWwgTm93ICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9yZ3QtYXJ3LnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPiA8L3NwYW4+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vvbi1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXBvbi1pbnNcIj57Y291cG9uLmhlYWRpbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3Vwb24tZHRscy1wXCI+e2NvdXBvbi5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGVUYW5kQy5iaW5kKHRoaXMsIGNvdXBvbil9IGNsYXNzTmFtZT1cImNvdXBvbi10ZXJtc1wiPlRlcm1zICYgQ29uZGl0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuVGVybXNDb25kaXRpb25zICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3Vwb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgPFRlcm1zQ29uZGl0aW9ucyB0b2dnbGU9eygpID0+IHRoaXMudG9nZ2xlVGFuZEMoKX0gdG5jPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ291cG9uLnRuY30gLz4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ291cG9uc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vaW5pdGlhbHNQaWN0dXJlJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY29uc3QgR0VOREVSID0ge1xuICAgIFwibVwiOiBcIk1hbGVcIixcbiAgICBcImZcIjogXCJGZW1hbGVcIixcbiAgICBcIm9cIjogXCJPdGhlclwiXG59XG5cbmNsYXNzIFVzZXJGYW1pbHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBZ2UoYmlydGhkYXkpIHtcbiAgICAgICAgYmlydGhkYXkgPSBuZXcgRGF0ZShiaXJ0aGRheSlcbiAgICAgICAgdmFyIGFnZURpZk1zID0gRGF0ZS5ub3coKSAtIGJpcnRoZGF5LmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGFnZURhdGUgPSBuZXcgRGF0ZShhZ2VEaWZNcyk7IC8vIG1pbGlzZWNvbmRzIGZyb20gZXBvY2hcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGFnZURhdGUuZ2V0VVRDRnVsbFllYXIoKSAtIDE5NzApO1xuICAgIH1cblxuICAgIGFkZFByb2ZpbGUoKSB7IC8vIHRvIGFkZCBuZXcgcHJvZmlsZVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2FkZHByb2ZpbGU/ZXhpc3Rpbmc9dHJ1ZScpXG4gICAgfVxuXG4gICAgZWRpdFByb2ZpbGUoaWQsZnJvbVdoZXJlKSB7IC8vIHRvIGVkaXQgZXhpc3RpbmcgcHJvZmlsZVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdwaWNrPXRydWUnKSkge1xuICAgICAgICAgICAgLy8gcGljayBwYWl0ZW50IGFuZCBnbyBiYWNrLCBlbHNlIGdvIG9uIHRvIGVkaXQuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFByb2ZpbGUoaWQpXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRfdGVzdF9pZCA9IFtdXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWREYXRlID0gbnVsbFxuICAgICAgICAgICAgaWYocGFyc2VkLmlzX2luc3VyYW5jZSAmJiBwYXJzZWQuaXNfaW5zdXJhbmNlID09ICd0cnVlJyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLm1hcCgodHdwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF90ZXN0X2lkLnB1c2godHdwLmlkKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhLnN0YXJ0X2RhdGUgPSBzZWxlY3RlZERhdGU/c2VsZWN0ZWREYXRlOnRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGU/dGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZTpuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgZGF0YS5sYWJfdGVzdCA9IHNlbGVjdGVkX3Rlc3RfaWRcbiAgICAgICAgICAgICAgICBkYXRhLmxhYiA9IHBhcnNlZC5sYWJfaWRcbiAgICAgICAgICAgICAgICBkYXRhLnByb2ZpbGUgPSBpZFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlQm9va2luZyhkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9DbGVhciBUZXN0cyBpZiB0aGVyZSBpcyBhbnkgZ29sZCBwcm9maWxlXG4gICAgICAgICAgICAvLyBsZXQgc2VsZWN0ZWRQcm9maWxlID0gdGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbaWRdO1xuICAgICAgICAgICAgLy8gaWYoc2VsZWN0ZWRQcm9maWxlICYmIChzZWxlY3RlZFByb2ZpbGUuaXNfdmlwX21lbWJlciB8fCBzZWxlY3RlZFByb2ZpbGUuaXNfdmlwX2dvbGRfbWVtYmVyKSAmJiB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cyl7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmKGZyb21XaGVyZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC91c2VyL2VkaXQvJHtpZH0/YWRkX3RvX2dvbGQ9JHtmcm9tV2hlcmV9JmZyb21fYm9va2luZz10cnVlYClcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdXNlci9lZGl0LyR7aWR9P2FkZF90b19nb2xkPSR7ZnJvbVdoZXJlfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGR0b0dvbGQoaWQpe1xuICAgICAgICB0aGlzLmVkaXRQcm9maWxlKGlkLHRydWUpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7IHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUgfSA9IHRoaXMucHJvcHMuVVNFUlxuXG4gICAgICAgIGxldCBnb2xkX3Byb2ZpbGUgPSBbXVxuICAgICAgICBsZXQgbm9ybWFsX3Byb2ZpbGUgPSBbXVxuICAgICAgICBsZXQgaW5zdXJhbmNlX3Byb2ZpbGUgPSBbXVxuICAgICAgICBsZXQgZ29sZF91c2VyX3Byb2ZpbGUgPSB7fVxuICAgICAgICBpZih0aGlzLnByb3BzLlVTRVIgJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKXtcbiAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLm1hcChmdW5jdGlvbihba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUuaXNfdmlwX2dvbGRfbWVtYmVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGRfdXNlcl9wcm9maWxlID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB7T2JqZWN0LmtleXMocHJvZmlsZXMpLmZpbHRlcih4ID0+ICFwcm9maWxlc1t4XS5pc0R1bW15VXNlcikubWFwKChpZCwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZihwcm9maWxlc1tpZF0uaXNfdmlwX2dvbGRfbWVtYmVyKXtcbiAgICAgICAgICAgICAgICBnb2xkX3Byb2ZpbGUucHVzaCg8bGkga2V5PXtrZXl9IG9uQ2xpY2s9e3RoaXMuZWRpdFByb2ZpbGUuYmluZCh0aGlzLGlkLGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1sZyBtZW1iZXItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtwcm9maWxlc1tpZF0ubmFtZX0gaGFzX2ltYWdlPXtwcm9maWxlc1tpZF0ucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWZhbWlseVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc0NXB4JywgaGVpZ2h0OiAnNDVweCcgfX0gc3JjPXtwcm9maWxlc1tpZF0ucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1yb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCIgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiA5NSwgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fSA+e3Byb2ZpbGVzW2lkXS5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5nZW5kZXIgPT0gJ28nID8gXCJcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0uZ2VuZGVyID09ICdtJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tYW4uc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+IDogPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9mZW1hbGUuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCwgaGVpZ2h0OiAxNiB9fSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHRU5ERVJbcHJvZmlsZXNbaWRdLmdlbmRlcl19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLmRvYiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtc21cIj57cHJvZmlsZXNbaWRdLmRvYn08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiPntwcm9maWxlc1tpZF0uaXNfZGVmYXVsdF91c2VyID8gXCJTZWxmL1ByaW1hcnlcIiA6IFwiRmFtaWx5IE1lbWJlclwifTwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5kb2IgPzxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXNtXCI+e3Byb2ZpbGVzW2lkXS5kb2J9PC9zcGFuPjogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0uZG9iICYmIHByb2ZpbGVzW2lkXS5nZW5kZXI/IDxzcGFuIGNsYXNzTmFtZT1cInBpcGUtc2lnblwiPiB8IDwvc3Bhbj4gOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5nZW5kZXI/IGAgJHtHRU5ERVJbcHJvZmlsZXNbaWRdLmdlbmRlcl19YDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGVzW2lkXS5pc19kZWZhdWx0X3VzZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5waG9uZV9udW1iZXI/IGAke3Byb2ZpbGVzW2lkXS5waG9uZV9udW1iZXJ9YDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0ucGhvbmVfbnVtYmVyICYmIHByb2ZpbGVzW2lkXS5lbWFpbD8gPHNwYW4gY2xhc3NOYW1lPVwicGlwZS1zaWduXCI+IHwgPC9zcGFuPiA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0uZW1haWw/IGAke3Byb2ZpbGVzW2lkXS5lbWFpbH1gOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLmlzX3ZpcF9nb2xkX21lbWJlciAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtY292cmQtdHh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpbWcgY2xhc3NOYW1lPVwibWwtMlwiIHdpZHRoPVwiMzVcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9nb2xkLWxnLnBuZ1wiICBhbHQ9XCJnb2xkXCIvPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cImN0LWltZyBjdC1pbWctc20gYXJyb3ctZm9yd2FyZC1yaWdodFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYXJyb3ctZm9yd2FyZC1yaWdodC5zdmdcIn0gLz48L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICB9ZWxzZSBpZihwcm9maWxlc1tpZF0uaXNfaW5zdXJlZCl7ICBcbiAgICAgICAgICAgICAgICBpbnN1cmFuY2VfcHJvZmlsZS5wdXNoKDxsaSBrZXk9e2tleX0gb25DbGljaz17dGhpcy5lZGl0UHJvZmlsZS5iaW5kKHRoaXMsIGlkLGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1sZyBtZW1iZXItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtwcm9maWxlc1tpZF0ubmFtZX0gaGFzX2ltYWdlPXtwcm9maWxlc1tpZF0ucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWZhbWlseVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc0NXB4JywgaGVpZ2h0OiAnNDVweCcgfX0gc3JjPXtwcm9maWxlc1tpZF0ucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1yb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCIgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiA5NSwgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fSA+e3Byb2ZpbGVzW2lkXS5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXNtXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA1IH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLmRvYiA/PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtc21cIj57cHJvZmlsZXNbaWRdLmRvYn08L3NwYW4+OiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5kb2IgJiYgcHJvZmlsZXNbaWRdLmdlbmRlcj8gPHNwYW4gY2xhc3NOYW1lPVwicGlwZS1zaWduXCI+IHwgPC9zcGFuPiA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLmdlbmRlcj8gYCR7R0VOREVSW3Byb2ZpbGVzW2lkXS5nZW5kZXJdfWA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlc1tpZF0uaXNfZGVmYXVsdF91c2VyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0ucGhvbmVfbnVtYmVyPyBgJHtwcm9maWxlc1tpZF0ucGhvbmVfbnVtYmVyfWA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLnBob25lX251bWJlciAmJiBwcm9maWxlc1tpZF0uZW1haWw/IDxzcGFuIGNsYXNzTmFtZT1cInBpcGUtc2lnblwiPiB8IDwvc3Bhbj4gOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLmVtYWlsPyBgJHtwcm9maWxlc1tpZF0uZW1haWx9YDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ31cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0uaXNfaW5zdXJlZCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1jb3ZyZC10eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q292ZXJlZDxiciAvPlVuZGVyIEluc3VyYW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cImN0LWltZyBjdC1pbWctc20gYXJyb3ctZm9yd2FyZC1yaWdodFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYXJyb3ctZm9yd2FyZC1yaWdodC5zdmdcIn0gLz48L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBub3JtYWxfcHJvZmlsZS5wdXNoKDxsaSBrZXk9e2tleX0gb25DbGljaz17dGhpcy5lZGl0UHJvZmlsZS5iaW5kKHRoaXMsIGlkLGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1sZyBtZW1iZXItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtwcm9maWxlc1tpZF0ubmFtZX0gaGFzX2ltYWdlPXtwcm9maWxlc1tpZF0ucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWZhbWlseVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc0NXB4JywgaGVpZ2h0OiAnNDVweCcgfX0gc3JjPXtwcm9maWxlc1tpZF0ucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1yb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCIgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiA5NSwgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fSA+e3Byb2ZpbGVzW2lkXS5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5kb2IgPzxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXNtXCI+e3Byb2ZpbGVzW2lkXS5kb2J9PC9zcGFuPjogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0uZG9iICYmIHByb2ZpbGVzW2lkXS5nZW5kZXI/IDxzcGFuIGNsYXNzTmFtZT1cInBpcGUtc2lnblwiPiB8IDwvc3Bhbj4gOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5nZW5kZXI/IGAke0dFTkRFUltwcm9maWxlc1tpZF0uZ2VuZGVyXX1gOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZXNbaWRdLmlzX2RlZmF1bHRfdXNlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLnBob25lX251bWJlcj8gYCR7cHJvZmlsZXNbaWRdLnBob25lX251bWJlcn1gOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5waG9uZV9udW1iZXIgJiYgcHJvZmlsZXNbaWRdLmVtYWlsPyA8c3BhbiBjbGFzc05hbWU9XCJwaXBlLXNpZ25cIj4gfCA8L3NwYW4+IDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5lbWFpbD8gYCR7cHJvZmlsZXNbaWRdLmVtYWlsfWA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvbGRfdXNlcl9wcm9maWxlICYmIE9iamVjdC5rZXlzKGdvbGRfdXNlcl9wcm9maWxlKS5sZW5ndGggJiYgZ29sZF91c2VyX3Byb2ZpbGUudmlwX2RhdGEgJiYgT2JqZWN0LmtleXMoZ29sZF91c2VyX3Byb2ZpbGUudmlwX2RhdGEpLmxlbmd0aCAmJiBnb2xkX3VzZXJfcHJvZmlsZS52aXBfZGF0YS50b3RhbF9tZW1iZXJzX2FsbG93ZWQgPiAwICYmICBnb2xkX3VzZXJfcHJvZmlsZS52aXBfZGF0YS5pc19tZW1iZXJfYWxsb3dlZD8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHRvR29sZChpZCl9fSBjbGFzc05hbWU9XCJnb2xkLWNvdnJkLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIEFkZCB0byBHb2xkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy1zbSBhcnJvdy1mb3J3YXJkLXJpZ2h0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9hcnJvdy1mb3J3YXJkLXJpZ2h0LnN2Z1wifSAvPjwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSl9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG10LTIwXCI+XG4gICAgICAgICAgICAgICB7cHJvZmlsZXMgJiYgT2JqZWN0LmtleXMocHJvZmlsZXMpLmxlbmd0aD88aDQgY2xhc3NOYW1lPVwiZnctNTAwIHVzZXItaGVhZGluZ1wiPlNlbGVjdCBNZW1iZXI8L2g0PjonJ31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBsLTAgcHItMFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0IGZhbWlseS1saXN0IGRwLXVzZXItbGlzdCBib3gtc2hhZG93LW5vbmVcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge2dvbGRfcHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgICAge2luc3VyYW5jZV9wcm9maWxlfVxuICAgICAgICAgICAgICAgICAgICB7bm9ybWFsX3Byb2ZpbGV9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb2ZpbGVzKS5maWx0ZXIoeCA9PiAhcHJvZmlsZXNbeF0uaXNEdW1teVVzZXIpLmxlbmd0aCA9PSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL25vLWZhbWlseS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1sZyBtcnQtMjBcIj5ObyBGYW1pbHkgTWVtYmVyIEFkZGVkICEhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHN0aWNreS1idG4gcC0wIHYtYnRuICBidG4tbGcgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBidXR0b25zLWFkZGNhcnQtY29udGFpbmVyIG1ybmctdG9wLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRQcm9maWxlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInYtYnRuLXByaW1hcnkgYm9vay1idG4tbXJnbi1hZGp1c3QgXCI+QWRkIE5ldyBNZW1iZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlckZhbWlseVxuIiwiaW1wb3J0IFVzZXJGYW1pbHkgZnJvbSAnLi9Vc2VyRmFtaWx5J1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyRmFtaWx5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBQcmVzY3JpcHRpb25DYXJkVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIGRvd25sb2FkSW1hZ2Uoc3JjKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHNyYywgJ19ibGFuaycpXG4gICAgICAgIH1cbiAgICB9XG5cblx0cmVuZGVyKCl7XG5cbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLl91cGRhdGVkQXQpLnRvRGF0ZVN0cmluZygpXG5cblxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJlc2NyaXB0aW9uLWNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXMtY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcnMtbmFtZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcHMtbGZ0LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtc2VjLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBycy1uYW1lLWFnZS1nZW5kZXJcIj4gIHt0aGlzLnByb3BzLnByb2ZpbGUubmFtZX0gfCA8c3Bhbj57dGhpcy5wcm9wcy5wcm9maWxlLmFnZX08L3NwYW4+ICAgfCAgIDxzcGFuPnt0aGlzLnByb3BzLnByb2ZpbGUuZ2VuZGVyLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBycy1zdWItdHh0XCI+e2BCeSBEci4gJHt0aGlzLnByb3BzLmRvY3RvclByb2ZpbGUubmFtZX1gfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBycy1wZGYtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DcmVhdGVkIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgb25DbGljayA9IHt0aGlzLmRvd25sb2FkSW1hZ2UuYmluZCh0aGlzLHRoaXMucHJvcHMuUHJlc2NyaXB0aW9uRmlsZVVSTCl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcGRmLWR3bi5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlc2NyaXB0aW9uQ2FyZFZpZXciLCJpbXBvcnQgVXNlclByZXNjcmlwdGlvbiBmcm9tICcuL3VzZXJQcmVzY3JpcHRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJlc2NyaXB0aW9uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByZXNjcmlwdGlvbkNhcmQgZnJvbSAnLi9QcmVzY3JpcHRpb25DYXJkJ1xuXG5jbGFzcyBVc2VyUHJlc2NyaXB0aW9uTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGlmKHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlKXtcblx0XHRcdC8vdGhpcy5wcm9wcy5nZXRVc2VyUHJlc2NyaXB0aW9uKHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0e1xuXHRcdFx0XHQodGhpcy5wcm9wcy5VU0VSLnVzZXJQcmVzY3JpcHRpb25zICYmIHRoaXMucHJvcHMuVVNFUi51c2VyUHJlc2NyaXB0aW9ucy5kYXRhICYmIHRoaXMucHJvcHMuVVNFUi51c2VyUHJlc2NyaXB0aW9ucy5kYXRhLnByZXNjcmlwdGlvbnMubGVuZ3RoKT9cblx0XHRcdFx0XHR0aGlzLnByb3BzLlVTRVIudXNlclByZXNjcmlwdGlvbnMuZGF0YS5wcmVzY3JpcHRpb25zLm1hcCgocHJlc2NyaXB0aW9uLGluZGV4KT0+e1x0XHRcblx0XHRcdFx0XHRcdHJldHVybiA8UHJlc2NyaXB0aW9uQ2FyZCB7Li4ucHJlc2NyaXB0aW9ufSAvPlx0XHRcblx0XHRcdFx0XHR9KVx0XG5cdFx0XHRcdFx0OjxwPk5vIFByZXNjcmlwdGlvbnMgRm91bmQ8L3A+XG5cdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlclByZXNjcmlwdGlvbkxpc3QiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL0xvYWRlcidcbi8vIGltcG9ydCBMaWdodGJveCBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2xpZ2h0Ym94JztcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveCc7XG5cbmNsYXNzIFVzZXJSZXBvcnRzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudHlwZSxcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcbiAgICAgICAgICAgIHJlcG9ydHM6IFtdLFxuICAgICAgICAgICAgbGlnaHRib3hJc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgaW1hZ2VJbmRleDogMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0QXBwb2ludG1lbnRSZXBvcnRzKHRoaXMuc3RhdGUuaWQsIHRoaXMuc3RhdGUudHlwZSwgKGVyciwgZGF0YSkgPT4geyAvLyBnZXQgdXNlciByZXBvcnRzXG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXBvcnRzOiBkYXRhLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVMaWdodEJveCh0eXBlID0gZmFsc2UsIGltYWdlSW5kZXggPSAwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaWdodGJveElzT3BlbjogdHlwZSwgaW1hZ2VJbmRleDogaW1hZ2VJbmRleCB9KVxuICAgIH1cblxuICAgIGNoZWNrRXh0ZW5zaW9uKHJlcG9ydCwgaSkge1xuICAgICAgICBsZXQgZXh0ZW5zaW9uQXJyID0gcmVwb3J0Lm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgbGV0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbkFycltleHRlbnNpb25BcnIubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChleHRlbnNpb24gPT0gJ3BkZicpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IG9uQ2xpY2s9e3RoaXMuZG93bmxvYWRJbWFnZS5iaW5kKHRoaXMsIHJlcG9ydC5uYW1lKX0gY2xhc3NOYW1lPVwicGRmLXJlcG9ydC1kaXZcIiBrZXk9e2l9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcGRmLWljb24uc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXh0ZW5zaW9uID09ICd0eHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXt0aGlzLmRvd25sb2FkSW1hZ2UuYmluZCh0aGlzLCByZXBvcnQubmFtZSl9IGNsYXNzTmFtZT1cInBkZi1yZXBvcnQtZGl2XCIga2V5PXtpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3RleHQtaWNvbi5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17cmVwb3J0Lm5hbWV9IGtleT17aX0gY2xhc3NOYW1lPVwiaW1hZ2VSZXBvcnRzXCIgb25DbGljaz17dGhpcy50b2dnbGVMaWdodEJveC5iaW5kKHRoaXMsIHRydWUsIGkpfSAvPlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG93bmxvYWRJbWFnZShzcmMpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oc3JjLCAnX2JsYW5rJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGltYWdlcyA9IFtdXG4gICAgICAgIGxldCB7IGxpZ2h0Ym94SXNPcGVuLCBpbWFnZUluZGV4IH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlcG9ydHMgJiYgdGhpcy5zdGF0ZS5yZXBvcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaW1hZ2VzID0gdGhpcy5zdGF0ZS5yZXBvcnRzLm1hcCgoaW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW0ubmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZXBvcnRzLmxlbmd0aCA9PSAwID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwZC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9uby1hZGRyZXNzLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbGcgbXJ0LTIwXCI+Tm8gRmlsZXMgVXBsb2FkZWQgISE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVwb3J0cy5tYXAoKHJlcG9ydCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tFeHRlbnNpb24ocmVwb3J0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpZ2h0Ym94SXNPcGVuID8gPExpZ2h0Ym94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyQnV0dG9ucz17WzxwIGNsYXNzTmFtZT1cImR3bmxvYWRidG5wcmVzXCIgb25DbGljaz17dGhpcy5kb3dubG9hZEltYWdlLmJpbmQodGhpcywgaW1hZ2VzW2ltYWdlSW5kZXhdKX0+RE9XTkxPQUQ8L3A+XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5TcmM9e2ltYWdlc1tpbWFnZUluZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTcmM9e2ltYWdlc1soaW1hZ2VJbmRleCArIDEpICUgaW1hZ2VzLmxlbmd0aF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2U3JjPXtpbWFnZXNbKGltYWdlSW5kZXggKyBpbWFnZXMubGVuZ3RoIC0gMSkgJSBpbWFnZXMubGVuZ3RoXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VSZXF1ZXN0PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbGlnaHRib3hJc09wZW46IGZhbHNlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlUHJldlJlcXVlc3Q9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSW5kZXg6IChpbWFnZUluZGV4ICsgaW1hZ2VzLmxlbmd0aCAtIDEpICUgaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlTmV4dFJlcXVlc3Q9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSW5kZXg6IChpbWFnZUluZGV4ICsgMSkgJSBpbWFnZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgKSA6IDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlclJlcG9ydHNWaWV3XG4iLCJpbXBvcnQgVXNlclJlcG9ydHNWaWV3IGZyb20gJy4vVXNlclJlcG9ydHNWaWV3LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUmVwb3J0c1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuXG5pbXBvcnQgeyBzZXRDb3Jwb3JhdGVDb3Vwb24sIGVkaXRVc2VyUHJvZmlsZUltYWdlLCBnZXRBcHBvaW50bWVudFJlcG9ydHMsIHNlbGVjdFBpY2t1cEFkZHJlc3MsIGVkaXRVc2VyUHJvZmlsZSwgZ2V0VXNlclByb2ZpbGUsIGdldFByb2ZpbGVBcHBvaW50bWVudHMsIHNlbGVjdFByb2ZpbGUsIGdldFVzZXJBZGRyZXNzLCBhZGRVc2VyQWRkcmVzcywgdXBkYXRlVXNlckFkZHJlc3MsIGxvZ291dCwgZ2V0VXNlclByZXNjcmlwdGlvbiwgZ2V0Q291cG9ucywgYXBwbHlDb3Vwb25zLCBjbGVhckV4dHJhVGVzdHMsIGdldFVzZXJSZXZpZXdzLCBnZXRSYXRpbmdDb21wbGltZW50cywgdXBkYXRlQXBwb2ludG1lbnRSYXRpbmcsIE9UVExvZ2luLCBnZXRDYXJ0SXRlbXMsIGdldElzQ2FyZURldGFpbHMsIGdlbmVyYXRlSW5zdXJhbmNlTGVhZCwgcHJlQm9va2luZyxsb2FkT1BESW5zdXJhbmNlLCBzZW5kT3RwT25FbWFpbCAsc3VibWl0RW1haWxPVFAsIGNsZWFyVmlwU2VsZWN0ZWRQbGFuLCByZXNldFZpcERhdGF9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuaW1wb3J0IFVzZXJQcm9maWxlVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvaW5kZXguanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5cbmNsYXNzIFVzZXJQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgaWYgKCFTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICAgICAgaWYgKHBhcnNlZCAmJiBwYXJzZWQucmVmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9sb2dpbj9jYWxsYmFjaz0vJnJlZj1ob21lYClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9sb2dpbj9jYWxsYmFjaz0vYClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWREYXRhKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpIC8vIGdldCBsb2dnZWRJbiB1c2VyIHByb2ZpbGVzXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJBZGRyZXNzKCkgLy8gZ2V0IHVzZXIgYWRkcmVzc1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRDb3Vwb25zKHt9KSAvLyBnZXQgdXNlciBzcGVjaWZpYyBjb3Vwb25zXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldENhcnRJdGVtcygpIC8vIGdldCB1c2VyIGNhcnQgaXRlbXNcbiAgICAgICAgICAgIC8vdGhpcy5wcm9wcy5nZXRJc0NhcmVEZXRhaWxzKCkgLy8gZ2V0IHVzZXIgc3Vic2NyaXB0aW9uIHBsYW4gZGV0YWlsc1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMucHJvcHMubG9hZE9QREluc3VyYW5jZSh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFVzZXJQcm9maWxlVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG5cbiAgICBjb25zdCB7XG4gICAgICAgIGFwcGxpY2FibGVDb3Vwb25zLFxuICAgICAgICBpc1VzZXJDYXJlZFxuICAgIH0gPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgc2VsZWN0ZWRTbG90IH0gPSBzdGF0ZS5MQUJfU0VBUkNIXG5cbiAgICBjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTXG5cbiAgICBjb25zdCB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGNvbW1vbl9zZXR0aW5nc1xuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBVU0VSLFxuICAgICAgICBhcHBsaWNhYmxlQ291cG9ucyxcbiAgICAgICAgaXNVc2VyQ2FyZWQsXG4gICAgICAgIHNlbGVjdGVkU2xvdCxcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGNvbW1vbl9zZXR0aW5nc1xuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9nb3V0OiAocm9vbUlkKSA9PiBkaXNwYXRjaChsb2dvdXQocm9vbUlkKSksXG4gICAgICAgIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKSxcbiAgICAgICAgZ2V0UHJvZmlsZUFwcG9pbnRtZW50czogKHByb2ZpbGVfaWQpID0+IGRpc3BhdGNoKGdldFByb2ZpbGVBcHBvaW50bWVudHMocHJvZmlsZV9pZCkpLFxuICAgICAgICBzZWxlY3RQcm9maWxlOiAocHJvZmlsZV9pZCkgPT4gZGlzcGF0Y2goc2VsZWN0UHJvZmlsZShwcm9maWxlX2lkKSksXG4gICAgICAgIGdldFVzZXJBZGRyZXNzOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyQWRkcmVzcygpKSxcbiAgICAgICAgYWRkVXNlckFkZHJlc3M6IChwb3N0RGF0YSwgY2IpID0+IGRpc3BhdGNoKGFkZFVzZXJBZGRyZXNzKHBvc3REYXRhLCBjYikpLFxuICAgICAgICB1cGRhdGVVc2VyQWRkcmVzczogKHBvc3REYXRhLCBjYikgPT4gZGlzcGF0Y2godXBkYXRlVXNlckFkZHJlc3MocG9zdERhdGEsIGNiKSksXG4gICAgICAgIGVkaXRVc2VyUHJvZmlsZTogKHByb2ZpbGVEYXRhLCBwcm9maWxlSWQsIGNiKSA9PiBkaXNwYXRjaChlZGl0VXNlclByb2ZpbGUocHJvZmlsZURhdGEsIHByb2ZpbGVJZCwgY2IpKSxcbiAgICAgICAgZWRpdFVzZXJQcm9maWxlSW1hZ2U6IChwcm9maWxlRGF0YSwgcHJvZmlsZUlkLCBjYikgPT4gZGlzcGF0Y2goZWRpdFVzZXJQcm9maWxlSW1hZ2UocHJvZmlsZURhdGEsIHByb2ZpbGVJZCwgY2IpKSxcbiAgICAgICAgc2VsZWN0UGlja3VwQWRkcmVzczogKGFkZHJlc3MpID0+IGRpc3BhdGNoKHNlbGVjdFBpY2t1cEFkZHJlc3MoYWRkcmVzcykpLFxuICAgICAgICBnZXRBcHBvaW50bWVudFJlcG9ydHM6IChhcHBvaW50bWVudElkLCB0eXBlLCBjYikgPT4gZGlzcGF0Y2goZ2V0QXBwb2ludG1lbnRSZXBvcnRzKGFwcG9pbnRtZW50SWQsIHR5cGUsIGNiKSksXG4gICAgICAgIGdldFVzZXJQcmVzY3JpcHRpb246IChtb2JpbGVObykgPT4gZGlzcGF0Y2goZ2V0VXNlclByZXNjcmlwdGlvbihtb2JpbGVObykpLFxuICAgICAgICBnZXRDb3Vwb25zOiAocHJvZHVjdElkKSA9PiBkaXNwYXRjaChnZXRDb3Vwb25zKHByb2R1Y3RJZCkpLFxuICAgICAgICBnZXRVc2VyUmV2aWV3czogKGNiKSA9PiBkaXNwYXRjaChnZXRVc2VyUmV2aWV3cyhjYikpLFxuICAgICAgICBnZXRSYXRpbmdDb21wbGltZW50czogKGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRSYXRpbmdDb21wbGltZW50cyhjYWxsYmFjaykpLFxuICAgICAgICB1cGRhdGVBcHBvaW50bWVudFJhdGluZzogKHJhdGluZ0RhdGEsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaCh1cGRhdGVBcHBvaW50bWVudFJhdGluZyhyYXRpbmdEYXRhLCBjYWxsYmFjaykpLFxuICAgICAgICBPVFRMb2dpbjogKG90dCx1c2VyX2lkKSA9PiBkaXNwYXRjaChPVFRMb2dpbihvdHQsdXNlcl9pZCkpLFxuICAgICAgICBzZXRDb3Jwb3JhdGVDb3Vwb246IChjb3Vwb24pID0+IGRpc3BhdGNoKHNldENvcnBvcmF0ZUNvdXBvbihjb3Vwb24pKSxcbiAgICAgICAgY2xlYXJFeHRyYVRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckV4dHJhVGVzdHMoKSksXG4gICAgICAgIGdldENhcnRJdGVtczogKCkgPT4gZGlzcGF0Y2goZ2V0Q2FydEl0ZW1zKCkpLFxuICAgICAgICBnZW5lcmF0ZUluc3VyYW5jZUxlYWQ6KHNlbGVjdGVkUGxhbiwgY2IpID0+IGRpc3BhdGNoKGdlbmVyYXRlSW5zdXJhbmNlTGVhZChzZWxlY3RlZFBsYW4sY2IpKSxcbiAgICAgICAgZ2V0SXNDYXJlRGV0YWlsczogKCkgPT4gZGlzcGF0Y2goZ2V0SXNDYXJlRGV0YWlscygpKSxcbiAgICAgICAgcHJlQm9va2luZzooc2xvdCkgPT4gZGlzcGF0Y2gocHJlQm9va2luZyhzbG90KSksXG4gICAgICAgIGxvYWRPUERJbnN1cmFuY2U6IChjaXR5KSA9PiBkaXNwYXRjaChsb2FkT1BESW5zdXJhbmNlKGNpdHkpKSxcbiAgICAgICAgc2VuZE90cE9uRW1haWw6KGNyaXRlcmlhLGNhbGxiYWNrKT0+ZGlzcGF0Y2goc2VuZE90cE9uRW1haWwoY3JpdGVyaWEsY2FsbGJhY2spKSxcbiAgICAgICAgc3VibWl0RW1haWxPVFA6IChkYXRhLCBjYikgPT4gZGlzcGF0Y2goc3VibWl0RW1haWxPVFAoZGF0YSwgY2IpKSxcbiAgICAgICAgY2xlYXJWaXBTZWxlY3RlZFBsYW46KCkgPT4gZGlzcGF0Y2goY2xlYXJWaXBTZWxlY3RlZFBsYW4oKSksXG4gICAgICAgIHJlc2V0VmlwRGF0YTooKSA9PiBkaXNwYXRjaChyZXNldFZpcERhdGEoKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlclByb2ZpbGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==