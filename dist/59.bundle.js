(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./dev/js/components/commons/Home/staticDisclaimer.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/Home/staticDisclaimer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var isVip = _ref.isVip;

    return _react2.default.createElement(
        'div',
        { className: 'dsclmer-ftr ' + (isVip ? 'margin-bottom-55' : '') },
        _react2.default.createElement(
            'p',
            { className: 'fw-500 mrt-20', style: { color: '#8a8a8a', fontSize: 10 } },
            'The Website is not intended to be used in case of a medical emergency and/ or critical care and the user should directly contact his/ her medical service provider for Physical Examination. Docprime is solely a technology partner.'
        ),
        _react2.default.createElement(
            'div',
            { className: 'col-12 footer-new-copyrght', style: { paddingBottom: 5 } },
            _react2.default.createElement(
                'p',
                null,
                'Docprime.com Copyright \xA9 2020.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'All rights reserved.'
            ),
            _react2.default.createElement(
                'p',
                null,
                'DOCPRIME TECHNOLOGIES PRIVATE LIMITED'
            ),
            _react2.default.createElement(
                'p',
                null,
                'CIN : U74999HR2016PTC064312'
            )
        )
    );
};

/***/ }),

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

/***/ "./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js":
/*!***************************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js ***!
  \***************************************************************************/
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

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _ReviewPopUp = __webpack_require__(/*! ./ReviewPopUp */ "./dev/js/components/commons/ratingsProfileView/ReviewPopUp.js");

var _ReviewPopUp2 = _interopRequireDefault(_ReviewPopUp);

var _ThankYouPopUp = __webpack_require__(/*! ./ThankYouPopUp */ "./dev/js/components/commons/ratingsProfileView/ThankYouPopUp.js");

var _ThankYouPopUp2 = _interopRequireDefault(_ThankYouPopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RatingProfileCard = function (_React$Component) {
    _inherits(RatingProfileCard, _React$Component);

    function RatingProfileCard(props) {
        _classCallCheck(this, RatingProfileCard);

        var _this = _possibleConstructorReturn(this, (RatingProfileCard.__proto__ || Object.getPrototypeOf(RatingProfileCard)).call(this, props));

        _this.getAppointmentType = function () {
            var type = _this.props.details.type && _this.props.details.type == "lab" ? 1 : 2;
            return type;
        };

        _this.thanYouButton = function () {
            _this.setState({ rating_done: false });
        };

        _this.submitRating = function (post_data, flag) {
            _this.setState({ data: null });
            if (!flag) {
                _this.props.updateAppointmentRating(post_data, function (err, data) {
                    if (!err && data) {
                        _this.setState({ appointmentData: _this.state.data, data: null, rating_done: true });
                    }
                });
            }
        };

        _this.state = {
            data: null,
            selectedRating: 0,
            rating_id: null,
            compliments: [],
            rating_done: false,
            appointmentData: null
        };
        return _this;
    }

    _createClass(RatingProfileCard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.setState({ data: this.props.details });
            if (_storage2.default.checkAuth()) {
                this.props.getRatingCompliments(function (err, compliments) {
                    if (!err && compliments) {
                        _this2.setState({ compliments: compliments });
                    }
                });
            }
        }
    }, {
        key: 'selectRating',
        value: function selectRating(x) {
            var _this3 = this;

            this.setState({ selectedRating: x });
            var type = this.getAppointmentType();
            var post_data = { 'rating': x, 'appointment_id': this.props.details.id, 'appointment_type': type };
            this.props.createAppointmentRating(post_data, function (err, data) {
                if (!err && data) {
                    _this3.setState({ rating_id: data.id });
                }
            });
        }
    }, {
        key: 'declineRating',
        value: function declineRating(type, id) {
            var post_data = { 'appointment_id': id, 'appointment_type': type };
            this.props.closeAppointmentRating(post_data, function (err, data) {
                if (!err && data) {
                    console.log('Popup Closed');
                }
            });

            this.setState({ data: null });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            if (this.state.rating_done && (this.state.data == null || this.state.data && this.state.data.length == 0)) {
                return _react2.default.createElement(_ThankYouPopUp2.default, _extends({}, this.props, { submit: this.thanYouButton, selectedRating: this.state.selectedRating, appointmentData: this.state.appointmentData }));
            }
            var app_id = this.props.details.id;
            var submitted_flag = !!this.props.rated_appoinments[app_id];
            if (!submitted_flag && this.state.data) {
                var qualification_object = this.props.details.doctor ? this.props.details.doctor.qualifications : null;
                var pipe = '';
                var data_obj = {
                    'name': this.props.details.doctor ? this.props.details.doctor.name : this.props.details.lab_name,
                    'qualification': qualification_object && qualification_object.length ? qualification_object[0].qualification : '',
                    'specialization': qualification_object && qualification_object.length ? qualification_object[0].specialization : '',
                    'type': this.getAppointmentType(),
                    'thumbnail': this.props.details.doctor ? this.props.details.doctor_thumbnail : this.props.details.lab_thumbnail,
                    'pipe': pipe
                };
                if (data_obj.type !== 1) {
                    data_obj.pipe = ' | ';
                }
                var entity = data_obj.type == 1 ? 'lab' : 'doctor';
                if (!this.state.rating_id) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'rating-upside-container mt-0' },
                        _react2.default.createElement(
                            'div',
                            { className: 'sub-upside-star' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Rate your recent visit with the ',
                                entity
                            ),
                            [1, 2, 3, 4, 5].map(function (x, i) {
                                return _react2.default.createElement('img', { key: i, onClick: _this4.selectRating.bind(_this4, x), className: 'img-fluid', src: "/assets/img/customer-icons/" + (_this4.state.selectedRating > 0 && _this4.state.selectedRating >= x ? "" : "un") + "selected-star.svg" });
                            })
                        )
                    );
                } else {
                    return _react2.default.createElement(_ReviewPopUp2.default, _extends({}, this.props, { details: this.state.data, submit: this.submitRating, obj: data_obj, rating_id: this.state.rating_id, selected_rating: this.state.selectedRating, compliments: this.state.compliments }));
                }
            } else {
                return "";
            }
        }
    }]);

    return RatingProfileCard;
}(_react2.default.Component);

exports.default = RatingProfileCard;

/***/ }),

/***/ "./dev/js/components/opd/booking/BookingView.js":
/*!******************************************************!*\
  !*** ./dev/js/components/opd/booking/BookingView.js ***!
  \******************************************************/
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

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _RatingProfileCard = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingProfileCard.js */ "./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js");

var _RatingProfileCard2 = _interopRequireDefault(_RatingProfileCard);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _cancelPopup = __webpack_require__(/*! ./cancelPopup.js */ "./dev/js/components/opd/booking/cancelPopup.js");

var _cancelPopup2 = _interopRequireDefault(_cancelPopup);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _criteo = __webpack_require__(/*! ../../../helpers/criteo.js */ "./dev/js/helpers/criteo.js");

var _criteo2 = _interopRequireDefault(_criteo);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _RatingsPopUp = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingsPopUp.js */ "./dev/js/components/commons/ratingsProfileView/RatingsPopUp.js");

var _RatingsPopUp2 = _interopRequireDefault(_RatingsPopUp);

var _WhatsAppOptinView = __webpack_require__(/*! ../../commons/WhatsAppOptin/WhatsAppOptinView.js */ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js");

var _WhatsAppOptinView2 = _interopRequireDefault(_WhatsAppOptinView);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");


var STATUS_MAP = {
    CREATED: 1,
    BOOKED: 2,
    RESCHEDULED_DOCTOR: 3,
    RESCHEDULED_PATIENT: 4,
    ACCEPTED: 5,
    CANCELED: 6,
    COMPLETED: 7
};

var BookingView = function (_React$Component) {
    _inherits(BookingView, _React$Component);

    function BookingView(props) {
        _classCallCheck(this, BookingView);

        var _this = _possibleConstructorReturn(this, (BookingView.__proto__ || Object.getPrototypeOf(BookingView)).call(this, props));

        _this.state = {
            data: null,
            loading: true,
            showCancel: false,
            payment_success: _this.props.location.search.includes('payment_success'),
            hide_button: _this.props.location.search.includes('payment_success') || _this.props.location.search.includes('hide_button'),
            isCompleted: false,
            showPopup: false
        };
        return _this;
    }

    _createClass(BookingView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // reset reschedule data
            if (this.props.rescheduleSlot && this.props.rescheduleSlot.date) {
                this.props.selectOpdTimeSLot({ time: {} }, true, null);
            }
            var parsed = queryString.parse(this.props.location.search);
            var smsComplete = parsed.complete;
            var appointmentId = this.props.match.params.refId;
            this.props.getOPDBookingSummary(appointmentId, function (err, data) {
                if (!err) {
                    _this2.setState({ data: data[0], loading: false }, function () {

                        if (smsComplete) {
                            if (data[0].status != 7) {
                                _this2.setState({ showPopup: true });
                            }
                        }
                    });

                    var info = {};
                    info[appointmentId] = [];
                    info[appointmentId].push({ 'booking_id': appointmentId, 'mrp': data.length ? data[0].mrp : '', 'deal_price': data.length ? data[0].deal_price : '' });

                    info = JSON.stringify(info);
                    var is_gold_user = false;
                    if (data && data.length && data[0].gold && Object.keys(data[0].gold).length) {
                        is_gold_user = data[0].gold.is_gold;
                    }
                    _storage2.default.setAppointmentDetails(info).then(function (setCookie) {

                        if (_this2.state.payment_success) {

                            var analyticData = {
                                'Category': 'ConsumerApp', 'Action': 'DoctorAppointmentBooked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': appointmentId, 'event': 'doctor-appointment-booked'
                            };
                            _gtm2.default.sendEvent({ data: analyticData }, true, false);

                            if (is_gold_user) {
                                var vipBookedData = {
                                    'Category': 'ConsumerApp', 'Action': 'vipbooked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vipbooked', 'user_id': _gtm2.default.getUserId(), 'is_single_flow': true
                                };
                                _gtm2.default.sendEvent({ data: vipBookedData });
                            }

                            var criteo_data = {
                                'event': "trackTransaction", 'id': appointmentId, 'item': [{ 'id': "1", 'price': data.length ? data[0].deal_price : '', 'quantity': 1 }]
                            };

                            _criteo2.default.sendData(criteo_data);

                            _this2.props.history.replace(_this2.props.location.pathname + "?hide_button=true");
                        }
                    });
                } else {
                    _this2.setState({ data: null, loading: false });
                }
            });

            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'getAppointment',
        value: function getAppointment(props) {
            var _this3 = this;

            var appointmentId = this.props.match.params.refId;
            if (!this.state.isCompleted) {
                var appointmentData = { id: appointmentId, status: 7 };
                this.props.updateOPDAppointment(appointmentData, function (err, data) {
                    if (data) {
                        _this3.setState({ data: data, isCompleted: true });
                    } else {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Something went wrong." });
                    }
                });
            } else {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Your appointment is already completed." });
            }
        }
    }, {
        key: 'getQualificationStr',
        value: function getQualificationStr(qualificationSpecialization) {
            return qualificationSpecialization.reduce(function (str, curr, i) {
                str += '' + curr.name;
                if (i < qualificationSpecialization.length - 1) str += ', ';
                return str;
            }, "");
        }
    }, {
        key: 'cancelAppointment',
        value: function cancelAppointment(cancelData) {
            var _this4 = this;

            this.setState({ loading: true, showCancel: false });
            var data = void 0;
            if (cancelData.cancelStatus) {

                data = {
                    'Category': 'ConsumerApp', 'Action': 'CancelOpdAppointmentAndRefund', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'cancel-opd-appointment-Refund', 'appointmentId': this.state.data.id
                };
            } else {

                data = {
                    'Category': 'ConsumerApp', 'Action': 'CancelOpdAppointmentAndBookNew', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'cancel-opd-appointment-Book-New', 'appointmentId': this.state.data.id
                };
            }

            _gtm2.default.sendEvent({ data: data });

            var appointmentData = { id: this.state.data.id, status: 6, refund: cancelData.cancelStatus, cancellation_comment: cancelData.cancelText, cancellation_reason: cancelData.cancelId };

            this.props.updateOPDAppointment(appointmentData, function (err, data) {
                if (data) {
                    _this4.setState({ data: data, loading: false, showCancel: false });
                } else {
                    _this4.setState({ loading: false, showCancel: false });
                }
            });
        }
    }, {
        key: 'toggleCancel',
        value: function toggleCancel(e) {

            e.preventDefault();
            e.stopPropagation();
            this.setState({ showCancel: !this.state.showCancel });
        }
    }, {
        key: 'goToSlotSelector',
        value: function goToSlotSelector(e) {
            e.preventDefault();
            e.stopPropagation();
            this.props.history.push('/opd/doctor/' + this.state.data.doctor.id + '/' + this.state.data.hospital.id + '/book?reschedule=' + this.props.match.params.refId + '&type=opd');
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(where, e) {
            e.preventDefault();
            e.stopPropagation();
            this.props.history.push(where);
        }
    }, {
        key: 'popupBtnClick',
        value: function popupBtnClick(flag) {
            if (flag) {
                this.getAppointment();
            }
            this.setState({ showPopup: false });
        }
    }, {
        key: 'goToBookingPage',
        value: function goToBookingPage() {
            var analyticData = {
                'Category': 'ConsumerApp', 'Action': 'RebookDoctorAppointmentClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': '', 'event': 'rebook-doctor-appointment-clicked'
            };
            _gtm2.default.sendEvent({ data: analyticData });
            this.props.history.push('/opd/doctor/' + this.state.data.doctor.id + '/' + this.state.data.hospital.id + '/bookdetails');
        }
    }, {
        key: 'navigateToVIP',
        value: function navigateToVIP() {
            var profile = {};
            var number = '';
            var name = '';
            var city_id = '';
            if (this.state.data) {
                profile = this.state.data.profile;
                number = profile.phone_number;
                name = profile.name;
            }
            if (this.state.data.hospital) {
                city_id = this.state.data.hospital.matrix_city;
            }
            var lead_data = {};
            lead_data.source = 'AppointmentPaySuccess';
            lead_data.lead_source = 'AppointmentPaySuccess';
            lead_data.city_id = city_id;
            var extraParams = {};
            if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
                extraParams = this.props.common_utm_tags.filter(function (x) {
                    return x.type == "common_xtra_tags";
                })[0].utm_tags;
            }
            // this.props.generateVipClubLead('', number,lead_data, this.props.selectedLocation, name, extraParams)

            this.props.generateVipClubLead({ selectedPlan: '', number: number, lead_data: lead_data, selectedLocation: this.props.selectedLocation, user_name: name, extraParams: extraParams,
                cb: function cb(resp) {}
            });
            var analyticData = {
                'Category': 'ConsumerApp', 'Action': 'VipKnowMoreClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': '', 'event': 'vip-know-more-clicked', city_id: city_id
            };
            _gtm2.default.sendEvent({ data: analyticData });
            this.props.clearVipSelectedPlan();
            this.props.history.push('/vip-club-details?source=appointment-success-page&lead_source=Docprime');
        }
    }, {
        key: 'navigateToSBI',
        value: function navigateToSBI() {
            window.open('http://13.235.199.36/webcore/docprimecallback', '_blank');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var doctor = {};
            var profile = {};
            var hospital = {};
            var date = new Date();
            var actions = [];
            var status = 1;
            var doctor_thumbnail = "";
            var payment_type = 1;
            var mrp = 0;
            var deal_price = 0;
            var discount = 0;
            var paymentMode = '';
            var effective_price = 0;
            var is_vip_member = false;
            var covered_under_vip = false;
            var vip_amount = 0;
            var is_gold_vip = 0;
            var vip_convenient_price = 0;
            var cod_discounted_price = 0;
            if (this.state.data) {
                doctor = this.state.data.doctor;
                hospital = this.state.data.hospital;
                profile = this.state.data.profile;
                date = this.state.data.time_slot_start ? new Date(this.state.data.time_slot_start) : new Date();
                actions = this.state.data.allowed_action || [];
                status = this.state.data.status;
                doctor_thumbnail = this.state.data.doctor_thumbnail;
                payment_type = this.state.data.payment_type;
                mrp = this.state.data.mrp;
                deal_price = this.state.data.deal_price;
                effective_price = this.state.data.effective_price;
                is_vip_member = this.state.data.vip.is_vip_member;
                covered_under_vip = this.state.data.vip.covered_under_vip;
                vip_amount = this.state.data.vip.vip_amount;
                is_gold_vip = this.state.data.vip.is_gold_member;
                vip_convenient_price = this.state.data.vip.extra_charge;
                cod_discounted_price = this.state.data.discount;
            }

            var summary_utm_tag = "";
            if (this.state.data && this.props.summary_utm && this.props.summary_utm_validity) {
                if (new Date(this.props.summary_utm_validity) > new Date()) {
                    var src = 'https://cplcps.com/p.ashx?o=116216&e=4531&f=img&t=' + this.state.data.id;
                    summary_utm_tag = _react2.default.createElement('img', { src: src, width: '1', height: '1', border: '0' });
                }
            }

            if (payment_type == 2) {
                discount = parseInt(cod_discounted_price);
            } else {
                discount = mrp - effective_price;
            }
            if (!is_vip_member && !covered_under_vip) {
                if (payment_type == 1) {
                    paymentMode = 'Online';
                } else if (payment_type == 2) {
                    paymentMode = 'Cash';
                } else if (payment_type == 3) {
                    paymentMode = 'Insurance';
                } else if (payment_type == 4) {
                    paymentMode = 'Docprime Care';
                }
            }
            if (is_vip_member && covered_under_vip) {
                paymentMode = 'Docprime VIP Member';
            }

            if (is_gold_vip) {
                paymentMode = 'Docprime Gold Member';
            }
            var docprime_gold_price = 0;
            var total_amount_payable = 0;
            if (is_vip_member || is_gold_vip) {
                docprime_gold_price = parseInt(mrp) - (parseInt(vip_convenient_price) + parseInt(vip_amount));
                discount = parseInt(vip_amount) + parseInt(vip_convenient_price) - effective_price;
                total_amount_payable = parseInt(mrp) - (docprime_gold_price + discount);
            }

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                summary_utm_tag,
                this.state.isCompleted ? _react2.default.createElement(_RatingsPopUp2.default, this.props) : '',
                _react2.default.createElement(_DesktopProfileHeader2.default, null),
                this.state.showPopup ? _react2.default.createElement(
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
                                { className: 'widget-content padiing-srch-el' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'srch-el-conent' },
                                    'Are you sure you want to complete this appointment?'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'search-el-btn-container' },
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: function onClick() {
                                                return _this5.popupBtnClick(true);
                                            } },
                                        'Yes'
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: function onClick() {
                                                return _this5.popupBtnClick(false);
                                            } },
                                        'No'
                                    )
                                )
                            )
                        )
                    )
                ) : '',
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
                            !this.state.loading && this.state.data ? _react2.default.createElement(
                                'section',
                                { className: 'booking-confirm-screen' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid cardMainPaddingRmv' },
                                    _react2.default.createElement(_WhatsAppOptinView2.default, _extends({}, this.props, { profiles: profile, isAppointment: true })),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'app-timeline book-confirmed-timeline' },
                                                status == 6 ? _react2.default.createElement(
                                                    'h4',
                                                    { style: { textAlign: 'center' } },
                                                    'Appointment Cancelled'
                                                ) : status == 1 ? _react2.default.createElement(
                                                    'h4',
                                                    { style: { textAlign: 'center' } },
                                                    'Appointment Created'
                                                ) : _react2.default.createElement(
                                                    'ul',
                                                    { className: 'inline-list' },
                                                    _react2.default.createElement(
                                                        'li',
                                                        { className: status <= 5 || status == 7 ? "active" : "" },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'dot' },
                                                            '1'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'text-sm fw-700 text-light' },
                                                            'Received'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        { className: status == 5 || status == 7 ? "active" : "" },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'dot' },
                                                            '2'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'text-sm fw-700 text-light' },
                                                            'Confirmed'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        { className: status == 7 ? "active" : "" },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'dot' },
                                                            '3'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'text-sm fw-700 text-light' },
                                                            status == 6 ? "Completed" : "Completed"
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            this.state.data.status == 7 && this.state.data.is_rated === false ? _react2.default.createElement(_RatingProfileCard2.default, _extends({}, this.props, { booking_flag: true, details: this.state.data })) : "",
                                            this.state.data.otp && status == 5 ? _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'fw-500 text-md mrb-10' },
                                                        'Unique Confirmation Code: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'fw-700 text-md' },
                                                            this.state.data.otp
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'text-xs text-light' },
                                                        'Share this code with doctor at the time of your appointment'
                                                    )
                                                )
                                            ) : "",
                                            this.state.payment_success ? _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'fw-500 text-md mrb-10' },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'fw-700 text-md' },
                                                            'Thanks! Appointment Received'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'text-xs text-light' },
                                                        'We are waiting for the confirmation from the doctor and we will get back to you shortly.'
                                                    )
                                                )
                                            ) : "",
                                            payment_type == 2 && status < 6 ? _react2.default.createElement(
                                                'div',
                                                { className: 'payAtclinic' },
                                                _react2.default.createElement(
                                                    'h5',
                                                    null,
                                                    'Pay at clinic'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Please pay ',
                                                    _react2.default.createElement(
                                                        'b',
                                                        null,
                                                        '\u20B9 ',
                                                        parseInt(deal_price) - parseInt(cod_discounted_price)
                                                    ),
                                                    ' at the time of appointment'
                                                )
                                            ) : "",
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'fw-500 text-md' },
                                                        'Booking ID: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'fw-700 text-md' },
                                                            this.state.data.id
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'text-xs text-light' },
                                                        'Details have been sent to your email-id and mobile number.'
                                                    ),
                                                    actions.indexOf(6) > -1 && !this.state.hide_button ? _react2.default.createElement(
                                                        'a',
                                                        { onClick: this.toggleCancel.bind(this), href: '#', className: 'text-primary fw-700 text-sm' },
                                                        'Cancel Booking'
                                                    ) : "",
                                                    _storage2.default.checkAuth() && this.props.profiles && this.props.profiles[this.props.defaultProfile] && this.props.profiles[this.props.defaultProfile].is_vip_member || is_gold_vip || payment_type == 3 ? '' : status != 6 && status != 7 && _react2.default.createElement(
                                                        'div',
                                                        { className: 'vip-content-book' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'You could have saved ',
                                                                _react2.default.createElement(
                                                                    'b',
                                                                    null,
                                                                    '70%'
                                                                ),
                                                                ' on this booking'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'if you were a Docprime ',
                                                                _react2.default.createElement('img', { src: "/assets" + '/img/viplog.png' }),
                                                                ' Member!'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'button',
                                                            { onClick: function onClick() {
                                                                    return _this5.navigateToVIP();
                                                                } },
                                                            'Know more'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content bokng-card pb-location' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'wc-title text-md fw-700 card-nm-ovrlpng' },
                                                        doctor.display_name
                                                    ),
                                                    _react2.default.createElement(
                                                        _initialsPicture2.default,
                                                        { name: doctor.name, has_image: !!doctor_thumbnail, className: 'initialsPicture-ds', style: { float: 'right' }, onClick: this.navigateTo.bind(this, '/opd/doctor/' + doctor.id) },
                                                        _react2.default.createElement('img', { src: doctor_thumbnail, style: { width: 50 }, className: 'img-fluid add-map img-round crd-doc-img' })
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'address-details' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'add-info fw-500' },
                                                            this.getQualificationStr(doctor.general_specialization || [])
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content  pb-location' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'wc-title text-md fw-700 card-nm-ovrlpng' },
                                                        hospital.name
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'address-details' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'add-info fw-500' },
                                                            hospital.address
                                                        )
                                                    ),
                                                    status == 6 || status == 7 ? _react2.default.createElement(
                                                        'button',
                                                        { className: 'rebook-btn', onClick: this.goToBookingPage.bind(this) },
                                                        'Rebook Appointment'
                                                    ) : ''
                                                ),
                                                this.state.data && this.state.data.procedures && this.state.data.procedures.length ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content pb-details pb-location' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'title', style: { fontSize: 14 } },
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/teeth.svg", className: 'visit-time-icon', style: { width: 17, marginRight: 8 } })
                                                        ),
                                                        'Services Included'
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'pb-view text-left proc-para-margin' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Doctor consultation '
                                                        ),
                                                        this.state.data.procedures.map(function (procedure) {
                                                            return _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                procedure.name
                                                            );
                                                        })
                                                    )
                                                ) : ''
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        null,
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'title' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                _react2.default.createElement('img', { style: { marginRight: '10px' }, className: 'visit-time-icon', src: "/assets" + "/img/watch-date.svg" })
                                                            ),
                                                            'Clinic Visit Time',
                                                            actions.indexOf(4) > -1 && new Date(date).getTime() > new Date().getTime() ? _react2.default.createElement(
                                                                'span',
                                                                { onClick: this.goToSlotSelector.bind(this), className: 'float-right' },
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { href: '#', className: 'text-primary fw-700 text-sm' },
                                                                    'Reschedule Time'
                                                                )
                                                            ) : ""
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'date-time test-list fw-500' },
                                                            date.toDateString(),
                                                            ' | ',
                                                            date.toLocaleTimeString()
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
                                                        { className: 'test-report' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'title' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                _react2.default.createElement('img', { className: 'visit-time-icon', src: "/assets" + "/img/nw-usr.svg", style: {
                                                                        width: 16, marginRight: 5, verticalAlign: -3
                                                                    } })
                                                            ),
                                                            'Patient Details'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'test-list fw-500' },
                                                            profile.name
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'test-list fw-500' },
                                                            profile.phone_number
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'test-list fw-500' },
                                                            profile.email
                                                        )
                                                    )
                                                )
                                            ),
                                            status !== 6 ? _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'test-report' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'title' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                _react2.default.createElement('img', { className: 'visit-time-icon', src: "/assets" + "/img/rupeeicon.png", style: {
                                                                        width: 16, marginRight: 5, verticalAlign: -3
                                                                    } })
                                                            ),
                                                            'Payment Detail'
                                                        ),
                                                        payment_type == 3 ? '' : _react2.default.createElement(
                                                            'div',
                                                            { className: 'd-flex justify-content-between align-items-center mrb-10' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500', style: { color: '#757575', paddingTop: 4 } },
                                                                'MRP'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500' },
                                                                '\u20B9 ',
                                                                parseInt(mrp)
                                                            )
                                                        ),
                                                        is_vip_member && covered_under_vip && !is_gold_vip ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'd-flex justify-content-between align-items-center mrb-10' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500', style: { color: 'green' } },
                                                                'Docprime VIP Member ',
                                                                _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/viplog.png' })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500', style: { color: 'green' } },
                                                                '- \u20B9 ',
                                                                parseInt(mrp) - (parseInt(vip_amount) + discount)
                                                            )
                                                        ) : '',
                                                        is_gold_vip && _react2.default.createElement(
                                                            'div',
                                                            { className: 'd-flex justify-content-between align-items-center mrb-10' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500', style: { color: 'green' } },
                                                                ' Docprime Gold Member ',
                                                                _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/gold-sm.png' })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500', style: { color: 'green' } },
                                                                '- \u20B9 ',
                                                                docprime_gold_price
                                                            )
                                                        ),
                                                        discount && payment_type != 3 /*&& !is_vip_member && !covered_under_vip && !is_gold_vip*/ ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'd-flex justify-content-between align-items-center mrb-10' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500', style: { color: 'green' } },
                                                                'Docprime Discount'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500', style: { color: 'green' } },
                                                                '- \u20B9 ',
                                                                parseInt(discount)
                                                            )
                                                        ) : '',
                                                        payment_type == 3 ? '' : _react2.default.createElement('hr', { style: { boxSizing: 'border-box', margin: '0 -12px 10px -12px', backgroundColor: '#eeeeee' } }),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'd-flex justify-content-between align-items-center mrb-10' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500' },
                                                                'Amount Payable'
                                                            ),
                                                            payment_type == 2 ? _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500' },
                                                                '\u20B9 ',
                                                                parseInt(deal_price) - parseInt(cod_discounted_price)
                                                            ) : is_gold_vip ? _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500' },
                                                                '\u20B9 ',
                                                                total_amount_payable
                                                            ) : is_vip_member && covered_under_vip ? _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500' },
                                                                '\u20B9 ',
                                                                total_amount_payable
                                                            ) : _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500' },
                                                                '\u20B9 ',
                                                                parseInt(effective_price)
                                                            )
                                                        ),
                                                        paymentMode ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'd-flex justify-content-between align-items-center' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500' },
                                                                'Payment Mode'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500' },
                                                                paymentMode
                                                            )
                                                        ) : ''
                                                    )
                                                )
                                            ) : '',
                                            status <= 5 ? _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrb-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'my-profile-item', style: { cursor: 'auto' }, onClick: function onClick() {
                                                                _this5.props.history.push('/referral');
                                                            } },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'usr-dtls-off-act' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'wc-title text-md fw-700 card-nm-ovrlpng' },
                                                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/refer.svg", className: 'img-fluid  img-f-1' }),
                                                                'Refer & Earn'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'ofr-img-txt' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'box-img-cont' },
                                                                _react2.default.createElement('img', { src: "/assets" + "/img/step-2.png", className: 'img-fluid' })
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'ofr-contnt' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'add-info fw-500 add-info-p' },
                                                                    'Invite your friends on docprime.com and earn ',
                                                                    _react2.default.createElement(
                                                                        'b',
                                                                        { className: 'fw-500 drk-blk' },
                                                                        _react2.default.createElement('img', { style: { width: '8px', marginTop: '4px', marginRight: '0px' }, src: "/assets" + "/img/rupee-icon.svg" }),
                                                                        ' ',
                                                                        this.state.data.user_referral_amt
                                                                    ),
                                                                    ' on completion of their first order '
                                                                ),
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    null,
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'mrt-20', style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
                                                                        _react2.default.createElement(
                                                                            'p',
                                                                            { className: 'text-xs fw-500', style: { color: 'var(--text--dark--all)', cursor: 'pointer' } },
                                                                            'Know more'
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            ) : ""
                                        )
                                    )
                                ),
                                status == 7 ? _react2.default.createElement(
                                    'button',
                                    { onClick: function onClick() {
                                            _this5.props.history.push('/user/opd/reports/' + _this5.state.data.id);
                                        }, className: 'viewpresbtn' },
                                    'View Prescription'
                                ) : "",
                                this.state.data && this.state.data.appointment_via_sbi ? _react2.default.createElement(
                                    'div',
                                    { className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container ' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'v-btn-primary book-btn-mrgn-adjust ', onClick: function onClick() {
                                                _this5.navigateToSBI();
                                            } },
                                        'Go Back To SBIG Home'
                                    )
                                ) : ''
                            ) : _react2.default.createElement(_Loader2.default, null),
                            this.state.showCancel ? _react2.default.createElement(_cancelPopup2.default, { toggle: this.toggleCancel.bind(this), cancelAppointment: this.cancelAppointment.bind(this), comments: this.state.data && this.state.data.cancellation_reason ? this.state.data.cancellation_reason : [], showCommentReasons: payment_type == 3 || payment_type == 2 ? true : false }) : ""
                        ),
                        _react2.default.createElement(_RightBar2.default, { msgTemplate: 'gold_general_template' })
                    )
                ),
                _react2.default.createElement(_staticDisclaimer2.default, null)
            );
        }
    }]);

    return BookingView;
}(_react2.default.Component);

exports.default = BookingView;

/***/ }),

/***/ "./dev/js/components/opd/booking/cancelPopup.js":
/*!******************************************************!*\
  !*** ./dev/js/components/opd/booking/cancelPopup.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CancelPopUp = function (_React$Component) {
    _inherits(CancelPopUp, _React$Component);

    function CancelPopUp(props) {
        _classCallCheck(this, CancelPopUp);

        var _this = _possibleConstructorReturn(this, (CancelPopUp.__proto__ || Object.getPrototypeOf(CancelPopUp)).call(this, props));

        _this.state = {
            showCommentReasons: _this.props.showCommentReasons,
            selectedCancelReasonId: '',
            cancelText: '',
            cancelStatus: ''
        };
        return _this;
    }

    _createClass(CancelPopUp, [{
        key: 'submitClicked',
        value: function submitClicked(e) {
            var _this2 = this;

            var otherReason = this.props.comments.filter(function (x) {
                return x.id == _this2.state.selectedCancelReasonId;
            });

            if (!this.state.selectedCancelReasonId) {
                e.stopPropagation();
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please select valid reason" });
                }, 200);
                return;
            } else if (otherReason.length && otherReason[0].is_comment_needed && !this.state.cancelText) {
                e.stopPropagation();
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please enter comment" });
                }, 200);
                return;
            } else {

                if (otherReason.length && otherReason[0].is_comment_needed) {
                    otherReason = this.state.cancelText;
                } else {
                    otherReason = '';
                }

                var cancelData = {
                    cancelText: otherReason,
                    cancelId: this.state.selectedCancelReasonId,
                    cancelStatus: this.state.cancelStatus
                };
                this.props.cancelAppointment(cancelData);
            }
        }
    }, {
        key: 'handleInputHandler',
        value: function handleInputHandler(e) {
            e.stopPropagation();
            this.setState({ cancelText: e.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var otherType = this.props.comments.filter(function (x) {
                return x.id == _this3.state.selectedCancelReasonId;
            });
            if (otherType.length && otherType[0].is_comment_needed) {
                otherType = true;
            } else {
                otherType = false;
            }

            return _react2.default.createElement(
                'div',
                null,
                this.state.showCommentReasons ? _react2.default.createElement(
                    'div',
                    { className: 'cancelPopupContainerOverlay', onClick: function onClick(e) {
                            return _this3.props.toggle(e);
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'cancelPopupContainer' },
                        _react2.default.createElement(
                            'div',
                            { className: 'cancel-Heading' },
                            _react2.default.createElement(
                                'h4',
                                null,
                                'Reason for Cancellation'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'cn-btn-head' },
                                _react2.default.createElement('img', { style: { width: 10 }, src: "/assets" + "/img/customer-icons/close-black.svg", className: 'img-fluid', onClick: function onClick(e) {
                                        return _this3.props.toggle(e);
                                    } })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'cancel-wid-radio' },
                            this.props.comments.map(function (reasons, key) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: reasons.id, className: 'dtl-radio', onClick: function onClick(e) {
                                            e.stopPropagation();
                                            _this3.setState({ selectedCancelReasonId: reasons.id });
                                        } },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'container-radio' },
                                        _react2.default.createElement(
                                            'h3',
                                            { className: 'fw-500', style: { display: 'inline', fontSize: 'inherit' } },
                                            reasons.name
                                        ),
                                        _react2.default.createElement('input', { type: 'radio', name: 'radio', checked: _this3.state.selectedCancelReasonId == reasons.id }),
                                        _react2.default.createElement('span', { className: 'doc-checkmark' })
                                    )
                                );
                            })
                        ),
                        otherType ? _react2.default.createElement(
                            'div',
                            { className: 'cancelationReson' },
                            _react2.default.createElement('textarea', { placeholder: 'Write reason for cancellation', onChange: this.handleInputHandler.bind(this), onClick: function onClick(e) {
                                    e.stopPropagation();
                                }, value: this.state.cancelText })
                        ) : '',
                        _react2.default.createElement(
                            'div',
                            { className: 'cancelationBtn' },
                            _react2.default.createElement(
                                'button',
                                { onClick: this.submitClicked.bind(this) },
                                'Submit'
                            )
                        )
                    )
                ) : _react2.default.createElement(
                    'div',
                    { className: 'cancelPopupContainerOverlay', onClick: function onClick(e) {
                            return _this3.props.toggle(e);
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'cancelPopupContainer' },
                        _react2.default.createElement(
                            'div',
                            { className: 'cancel-Heading' },
                            _react2.default.createElement(
                                'h4',
                                null,
                                'Cancel Appointment'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'cn-btn-head' },
                                _react2.default.createElement('img', { style: { width: 10 }, src: "/assets" + "/img/customer-icons/close-black.svg", className: 'img-fluid', onClick: function onClick(e) {
                                        return _this3.props.toggle(e);
                                    } })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'cnct-select-cont' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: function onClick(e) {
                                                e.stopPropagation();
                                                _this3.setState({ showCommentReasons: true, cancelStatus: 0 });
                                            } },
                                        'Cancel and Rebook'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: function onClick(e) {
                                                e.stopPropagation();
                                                _this3.setState({ showCommentReasons: true, cancelStatus: 1 });
                                            } },
                                        'Cancel and Refund'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CancelPopUp;
}(_react2.default.Component);

exports.default = CancelPopUp;

/***/ }),

/***/ "./dev/js/containers/opd/Booking.js":
/*!******************************************!*\
  !*** ./dev/js/containers/opd/Booking.js ***!
  \******************************************/
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

var _BookingView = __webpack_require__(/*! ../../components/opd/booking/BookingView.js */ "./dev/js/components/opd/booking/BookingView.js");

var _BookingView2 = _interopRequireDefault(_BookingView);

var _fcm = __webpack_require__(/*! ../../helpers/fcm */ "./dev/js/helpers/fcm.js");

var _fcm2 = _interopRequireDefault(_fcm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Booking = function (_React$Component) {
    _inherits(Booking, _React$Component);

    function Booking(props) {
        _classCallCheck(this, Booking);

        return _possibleConstructorReturn(this, (Booking.__proto__ || Object.getPrototypeOf(Booking)).call(this, props));
    }

    _createClass(Booking, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (_storage2.default.checkAuth()) {
                this.props.getCartItems();
            } else {
                this.props.history.push('/');
            }
            this.props.resetPkgCompare();
            _fcm2.default.getPermission();
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_BookingView2.default, this.props)
            );
        }
    }]);

    return Booking;
}(_react2.default.Component);

Booking.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var rescheduleSlot = state.DOCTOR_SEARCH.rescheduleSlot;
    var _state$USER = state.USER,
        summary_utm = _state$USER.summary_utm,
        summary_utm_validity = _state$USER.summary_utm_validity,
        newNotification = _state$USER.newNotification,
        notifications = _state$USER.notifications,
        rated_appoinments = _state$USER.rated_appoinments,
        profiles = _state$USER.profiles,
        selectedProfile = _state$USER.selectedProfile,
        defaultProfile = _state$USER.defaultProfile,
        common_utm_tags = _state$USER.common_utm_tags;
    var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;


    return {
        rescheduleSlot: rescheduleSlot, newNotification: newNotification, notifications: notifications, rated_appoinments: rated_appoinments, profiles: profiles, selectedProfile: selectedProfile, summary_utm: summary_utm, summary_utm_validity: summary_utm_validity, selectedLocation: selectedLocation, defaultProfile: defaultProfile, common_utm_tags: common_utm_tags
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        OTTLogin: function OTTLogin(ott, user_id) {
            return dispatch((0, _index.OTTLogin)(ott, user_id));
        },
        getOPDBookingSummary: function getOPDBookingSummary(appointmentID, callback) {
            return dispatch((0, _index.getOPDBookingSummary)(appointmentID, callback));
        },
        updateOPDAppointment: function updateOPDAppointment(appointmentData, callback) {
            return dispatch((0, _index.updateOPDAppointment)(appointmentData, callback));
        },
        selectOpdTimeSLot: function selectOpdTimeSLot(slot, reschedule, appointmentId) {
            return dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId));
        },
        retryPaymentOPD: function retryPaymentOPD(appointmentId, callback) {
            return dispatch((0, _index.retryPaymentOPD)(appointmentId, callback));
        },
        getRatingCompliments: function getRatingCompliments(callback) {
            return dispatch((0, _index.getRatingCompliments)(callback));
        },
        createAppointmentRating: function createAppointmentRating(appointmentData, callback) {
            return dispatch((0, _index.createAppointmentRating)(appointmentData, callback));
        },
        updateAppointmentRating: function updateAppointmentRating(ratingData, callback) {
            return dispatch((0, _index.updateAppointmentRating)(ratingData, callback));
        },
        closeAppointmentPopUp: function closeAppointmentPopUp(id, callback) {
            return dispatch((0, _index.closeAppointmentPopUp)(id, callback));
        },
        getCartItems: function getCartItems() {
            return dispatch((0, _index.getCartItems)());
        },
        getUnratedAppointment: function getUnratedAppointment(callback) {
            return dispatch((0, _index.getUnratedAppointment)(callback));
        },
        closeAppointmentRating: function closeAppointmentRating(doctorId, callback) {
            return dispatch((0, _index.closeAppointmentRating)(doctorId, callback));
        },
        editUserProfile: function editUserProfile(profileData, profileId, cb) {
            return dispatch((0, _index.editUserProfile)(profileData, profileId, cb));
        },
        resetPkgCompare: function resetPkgCompare() {
            return dispatch((0, _index.resetPkgCompare)());
        },
        generateVipClubLead: function generateVipClubLead(data) {
            return dispatch((0, _index.generateVipClubLead)(data));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Booking);

/***/ }),

/***/ "./dev/js/helpers/criteo.js":
/*!**********************************!*\
  !*** ./dev/js/helpers/criteo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var CRITEO = {
	sendData: function sendData(data) {
		try {

			if (window) {

				window.criteo_q = window.criteo_q || [];
				var deviceType = navigator ? /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d" : '';

				window.criteo_q.push({ 'event': "setAccount", account: 57439 }, // You should never update this line
				{ 'event': "setEmail", 'email': '' }, { 'event': "setSiteType", type: deviceType }, data);
			}
		} catch (e) {}
	}
};

exports.default = CRITEO;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9XaGF0c0FwcE9wdGluL1doYXRzQXBwT3B0aW5WaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ1Byb2ZpbGVDYXJkLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9ib29raW5nL0Jvb2tpbmdWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9ib29raW5nL2NhbmNlbFBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL29wZC9Cb29raW5nLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9oZWxwZXJzL2NyaXRlby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsIkxvYWRlciIsInByb3BzIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsIldoYXRzQXBwT3B0aW5WaWV3Iiwic3RhdGUiLCJ3aGF0c2FwcF9vcHRpbl9WaWV3IiwicHJvZmlsZXMiLCJ3aGF0c2FwcF9vcHRpbiIsImlzQXBwb2ludG1lbnQiLCJ3aGF0c2FwcF9pc19kZWNsaW5lZCIsImlzVXNlclByb2ZpbGUiLCJzdGF0dXMiLCJlIiwicHJvZmlsZURhdGEiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiZWRpdFVzZXJQcm9maWxlIiwiaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRTdGF0ZSIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJ0b2dnbGVXaGF0c2FwIiwic2hvdWxkUmVuZGVyIiwiQVNTRVRTX0JBU0VfVVJMIiwiYmluZCIsImZvbnRXZWlnaHQiLCJSYXRpbmdQcm9maWxlQ2FyZCIsImdldEFwcG9pbnRtZW50VHlwZSIsInR5cGUiLCJkZXRhaWxzIiwidGhhbllvdUJ1dHRvbiIsInJhdGluZ19kb25lIiwic3VibWl0UmF0aW5nIiwicG9zdF9kYXRhIiwiZmxhZyIsInVwZGF0ZUFwcG9pbnRtZW50UmF0aW5nIiwiZXJyIiwiYXBwb2ludG1lbnREYXRhIiwic2VsZWN0ZWRSYXRpbmciLCJyYXRpbmdfaWQiLCJjb21wbGltZW50cyIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJnZXRSYXRpbmdDb21wbGltZW50cyIsIngiLCJjcmVhdGVBcHBvaW50bWVudFJhdGluZyIsImNsb3NlQXBwb2ludG1lbnRSYXRpbmciLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiYXBwX2lkIiwic3VibWl0dGVkX2ZsYWciLCJyYXRlZF9hcHBvaW5tZW50cyIsInF1YWxpZmljYXRpb25fb2JqZWN0IiwiZG9jdG9yIiwicXVhbGlmaWNhdGlvbnMiLCJwaXBlIiwiZGF0YV9vYmoiLCJuYW1lIiwibGFiX25hbWUiLCJxdWFsaWZpY2F0aW9uIiwic3BlY2lhbGl6YXRpb24iLCJkb2N0b3JfdGh1bWJuYWlsIiwibGFiX3RodW1ibmFpbCIsImVudGl0eSIsIm1hcCIsImkiLCJzZWxlY3RSYXRpbmciLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJTVEFUVVNfTUFQIiwiQ1JFQVRFRCIsIkJPT0tFRCIsIlJFU0NIRURVTEVEX0RPQ1RPUiIsIlJFU0NIRURVTEVEX1BBVElFTlQiLCJBQ0NFUFRFRCIsIkNBTkNFTEVEIiwiQ09NUExFVEVEIiwiQm9va2luZ1ZpZXciLCJsb2FkaW5nIiwic2hvd0NhbmNlbCIsInBheW1lbnRfc3VjY2VzcyIsImxvY2F0aW9uIiwic2VhcmNoIiwiaW5jbHVkZXMiLCJoaWRlX2J1dHRvbiIsImlzQ29tcGxldGVkIiwic2hvd1BvcHVwIiwicmVzY2hlZHVsZVNsb3QiLCJkYXRlIiwic2VsZWN0T3BkVGltZVNMb3QiLCJ0aW1lIiwicGFyc2VkIiwicGFyc2UiLCJzbXNDb21wbGV0ZSIsImNvbXBsZXRlIiwiYXBwb2ludG1lbnRJZCIsIm1hdGNoIiwicGFyYW1zIiwicmVmSWQiLCJnZXRPUERCb29raW5nU3VtbWFyeSIsImluZm8iLCJwdXNoIiwibXJwIiwiZGVhbF9wcmljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc19nb2xkX3VzZXIiLCJnb2xkIiwiT2JqZWN0Iiwia2V5cyIsImlzX2dvbGQiLCJzZXRBcHBvaW50bWVudERldGFpbHMiLCJ0aGVuIiwic2V0Q29va2llIiwiYW5hbHl0aWNEYXRhIiwidmlwQm9va2VkRGF0YSIsImNyaXRlb19kYXRhIiwiQ1JJVEVPIiwic2VuZERhdGEiLCJoaXN0b3J5IiwicmVwbGFjZSIsInBhdGhuYW1lIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ1cGRhdGVPUERBcHBvaW50bWVudCIsInF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbiIsInJlZHVjZSIsInN0ciIsImN1cnIiLCJjYW5jZWxEYXRhIiwiY2FuY2VsU3RhdHVzIiwicmVmdW5kIiwiY2FuY2VsbGF0aW9uX2NvbW1lbnQiLCJjYW5jZWxUZXh0IiwiY2FuY2VsbGF0aW9uX3JlYXNvbiIsImNhbmNlbElkIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJob3NwaXRhbCIsIndoZXJlIiwiZ2V0QXBwb2ludG1lbnQiLCJwcm9maWxlIiwibnVtYmVyIiwiY2l0eV9pZCIsInBob25lX251bWJlciIsIm1hdHJpeF9jaXR5IiwibGVhZF9kYXRhIiwic291cmNlIiwibGVhZF9zb3VyY2UiLCJleHRyYVBhcmFtcyIsImNvbW1vbl91dG1fdGFncyIsImZpbHRlciIsInV0bV90YWdzIiwiZ2VuZXJhdGVWaXBDbHViTGVhZCIsInNlbGVjdGVkUGxhbiIsInNlbGVjdGVkTG9jYXRpb24iLCJ1c2VyX25hbWUiLCJjYiIsInJlc3AiLCJjbGVhclZpcFNlbGVjdGVkUGxhbiIsIm9wZW4iLCJEYXRlIiwiYWN0aW9ucyIsInBheW1lbnRfdHlwZSIsImRpc2NvdW50IiwicGF5bWVudE1vZGUiLCJlZmZlY3RpdmVfcHJpY2UiLCJpc192aXBfbWVtYmVyIiwiY292ZXJlZF91bmRlcl92aXAiLCJ2aXBfYW1vdW50IiwiaXNfZ29sZF92aXAiLCJ2aXBfY29udmVuaWVudF9wcmljZSIsImNvZF9kaXNjb3VudGVkX3ByaWNlIiwidGltZV9zbG90X3N0YXJ0IiwiYWxsb3dlZF9hY3Rpb24iLCJ2aXAiLCJpc19nb2xkX21lbWJlciIsImV4dHJhX2NoYXJnZSIsInN1bW1hcnlfdXRtX3RhZyIsInN1bW1hcnlfdXRtIiwic3VtbWFyeV91dG1fdmFsaWRpdHkiLCJzcmMiLCJwYXJzZUludCIsImRvY3ByaW1lX2dvbGRfcHJpY2UiLCJ0b3RhbF9hbW91bnRfcGF5YWJsZSIsInBvcHVwQnRuQ2xpY2siLCJ0ZXh0QWxpZ24iLCJpc19yYXRlZCIsIm90cCIsImluZGV4T2YiLCJ0b2dnbGVDYW5jZWwiLCJkZWZhdWx0UHJvZmlsZSIsIm5hdmlnYXRlVG9WSVAiLCJkaXNwbGF5X25hbWUiLCJmbG9hdCIsIm5hdmlnYXRlVG8iLCJ3aWR0aCIsImdldFF1YWxpZmljYXRpb25TdHIiLCJnZW5lcmFsX3NwZWNpYWxpemF0aW9uIiwiYWRkcmVzcyIsImdvVG9Cb29raW5nUGFnZSIsInByb2NlZHVyZXMiLCJtYXJnaW5SaWdodCIsInByb2NlZHVyZSIsImdldFRpbWUiLCJnb1RvU2xvdFNlbGVjdG9yIiwidG9EYXRlU3RyaW5nIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwidmVydGljYWxBbGlnbiIsImVtYWlsIiwicGFkZGluZ1RvcCIsImJveFNpemluZyIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsIm1hcmdpblRvcCIsInVzZXJfcmVmZXJyYWxfYW10IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImFwcG9pbnRtZW50X3ZpYV9zYmkiLCJuYXZpZ2F0ZVRvU0JJIiwiY2FuY2VsQXBwb2ludG1lbnQiLCJDYW5jZWxQb3BVcCIsInNob3dDb21tZW50UmVhc29ucyIsInNlbGVjdGVkQ2FuY2VsUmVhc29uSWQiLCJvdGhlclJlYXNvbiIsImNvbW1lbnRzIiwic2V0VGltZW91dCIsImlzX2NvbW1lbnRfbmVlZGVkIiwidGFyZ2V0IiwidmFsdWUiLCJvdGhlclR5cGUiLCJ0b2dnbGUiLCJyZWFzb25zIiwia2V5IiwiaGFuZGxlSW5wdXRIYW5kbGVyIiwic3VibWl0Q2xpY2tlZCIsIkJvb2tpbmciLCJnZXRDYXJ0SXRlbXMiLCJyZXNldFBrZ0NvbXBhcmUiLCJGQ00iLCJnZXRQZXJtaXNzaW9uIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiRE9DVE9SX1NFQVJDSCIsIlVTRVIiLCJuZXdOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25zIiwic2VsZWN0ZWRQcm9maWxlIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiT1RUTG9naW4iLCJvdHQiLCJ1c2VyX2lkIiwiYXBwb2ludG1lbnRJRCIsImNhbGxiYWNrIiwic2xvdCIsInJlc2NoZWR1bGUiLCJyZXRyeVBheW1lbnRPUEQiLCJyYXRpbmdEYXRhIiwiY2xvc2VBcHBvaW50bWVudFBvcFVwIiwiZ2V0VW5yYXRlZEFwcG9pbnRtZW50IiwiZG9jdG9ySWQiLCJwcm9maWxlSWQiLCJjcml0ZW9fcSIsImRldmljZVR5cGUiLCJuYXZpZ2F0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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiNTkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgKHsgaXNWaXAgfSkgPT4ge1xuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgZHNjbG1lci1mdHIgJHtpc1ZpcD8nbWFyZ2luLWJvdHRvbS01NSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzhhOGE4YScsIGZvbnRTaXplOiAxMCB9fSA+VGhlIFdlYnNpdGUgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgaW4gY2FzZSBvZiBhIG1lZGljYWwgZW1lcmdlbmN5IGFuZC8gb3IgY3JpdGljYWwgY2FyZSBhbmQgdGhlIHVzZXIgc2hvdWxkIGRpcmVjdGx5IGNvbnRhY3QgaGlzLyBoZXIgbWVkaWNhbCBzZXJ2aWNlIHByb3ZpZGVyIGZvciBQaHlzaWNhbCBFeGFtaW5hdGlvbi4gRG9jcHJpbWUgaXMgc29sZWx5IGEgdGVjaG5vbG9neSBwYXJ0bmVyLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmb290ZXItbmV3LWNvcHlyZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lLmNvbSBDb3B5cmlnaHQgJmNvcHk7IDIwMjAuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RE9DUFJJTUUgVEVDSE5PTE9HSUVTIFBSSVZBVEUgTElNSVRFRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q0lOIDogVTc0OTk5SFIyMDE2UFRDMDY0MzEyPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBXaGF0c0FwcE9wdGluVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdoYXRzYXBwX29wdGluX1ZpZXc6dHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkUmVuZGVyKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMucHJvZmlsZXMpe1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXMud2hhdHNhcHBfb3B0aW4gIT1udWxsKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmlzQXBwb2ludG1lbnQgJiYgIXRoaXMucHJvcHMucHJvZmlsZXMud2hhdHNhcHBfb3B0aW4gJiYgIXRoaXMucHJvcHMucHJvZmlsZXMud2hhdHNhcHBfaXNfZGVjbGluZWQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLmlzVXNlclByb2ZpbGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSAgICBcbiAgICB9XG5cbiAgICB0b2dnbGVXaGF0c2FwKHN0YXR1cyxlKSB7ICAgICAgIFxuICAgICAgICBpZih0aGlzLnByb3BzLmlzQXBwb2ludG1lbnQpeyAgICAgIFxuICAgICAgICAgICAgbGV0IHByb2ZpbGVEYXRhID0gey4uLnRoaXMucHJvcHMucHJvZmlsZXN9XG4gICAgICAgICAgICBpZihzdGF0dXMpe1xuICAgICAgICAgICAgICAgIHByb2ZpbGVEYXRhLndoYXRzYXBwX29wdGluID0gdHJ1ZVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJZb3Ugd2hhdHNBcHAgbm90aWZpY2F0aW9ucyBoYXMgYmVlbiBlbmFibGVkLlwifSkgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHByb2ZpbGVEYXRhLndoYXRzYXBwX2lzX2RlY2xpbmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJ5b3VyIHdoYXRzQXBwIG5vdGlmaWNhdGlvbnMgaGFzIGJlZW4gZGlzYWJsZWQuXCJ9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5lZGl0VXNlclByb2ZpbGUocHJvZmlsZURhdGEsIHByb2ZpbGVEYXRhLmlkICwoKT0+e1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3doYXRzYXBwQ2FyZENvbnRhaW5lcicpWzBdLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aGF0c2FwcF9vcHRpbl9WaWV3OiBzdGF0dXMgfSwoKSA9PntcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1doYXRzYXB0b2dnbGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnV2hhdHNhcC10b2dnbGVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlV2hhdHNhcChzdGF0dXMpICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkUmVuZGVyKCkpXG4gICAgICAgICAgICByZXR1cm4gKDxkaXY+PC9kaXY+KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuaXNBcHBvaW50bWVudD9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXRzYXBwQ2FyZENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhLWxvZ28tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhLWxvZ28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lIHdvdWxkIGxpa2UgdG8gc2VuZCB5b3UgdXBkYXRlcyB0aHJvdWdoIHdoYXRzYXBwPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGxvd0RlY2xpbmVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFsbG93QnRuc1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMsdHJ1ZSl9PkFsbG93PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVjbGluZUJ0bnNcIiBzdHlsZT17e2NvbG9yOicjNzU3NTc1J319b25DbGljaz17dGhpcy50b2dnbGVXaGF0c2FwLmJpbmQodGhpcyxmYWxzZSl9PkRlY2xpbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6ICcxNHB4JyB9fT5FbmFibGUgPHNwYW4gY2xhc3NOYW1lPVwic20td3RzcC1pbWdcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhLWxvZ28tc20ucG5nXCJ9IC8+V2hhdHNBcHA8L3NwYW4+IG5vdGlmaWNhdGlvbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy50b2dnbGVXaGF0c2FwLmJpbmQodGhpcywhdGhpcy5zdGF0ZS53aGF0c2FwcF9vcHRpbl9WaWV3KX0gY2hlY2tlZD17dGhpcy5zdGF0ZS53aGF0c2FwcF9vcHRpbl9WaWV3fSAvPjxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgV2hhdHNBcHBPcHRpblZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBSZXZpZXdQb3BVcCBmcm9tICcuL1Jldmlld1BvcFVwJ1xuaW1wb3J0IFRoYW5rWW91UG9wVXAgZnJvbSAnLi9UaGFua1lvdVBvcFVwJ1xuXG5cbmNsYXNzIFJhdGluZ1Byb2ZpbGVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgc2VsZWN0ZWRSYXRpbmc6IDAsXG4gICAgICAgICAgICByYXRpbmdfaWQ6IG51bGwsXG4gICAgICAgICAgICBjb21wbGltZW50czogW10sXG4gICAgICAgICAgICByYXRpbmdfZG9uZTogZmFsc2UsXG4gICAgICAgICAgICBhcHBvaW50bWVudERhdGE6bnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiB0aGlzLnByb3BzLmRldGFpbHMgfSlcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0UmF0aW5nQ29tcGxpbWVudHMoKGVyciwgY29tcGxpbWVudHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVyciAmJiBjb21wbGltZW50cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcGxpbWVudHMgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0UmF0aW5nKHgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUmF0aW5nOiB4IH0pXG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5nZXRBcHBvaW50bWVudFR5cGUoKTtcbiAgICAgICAgbGV0IHBvc3RfZGF0YSA9IHsgJ3JhdGluZyc6IHgsICdhcHBvaW50bWVudF9pZCc6IHRoaXMucHJvcHMuZGV0YWlscy5pZCwgJ2FwcG9pbnRtZW50X3R5cGUnOiB0eXBlIH07XG4gICAgICAgIHRoaXMucHJvcHMuY3JlYXRlQXBwb2ludG1lbnRSYXRpbmcocG9zdF9kYXRhLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhdGluZ19pZDogZGF0YS5pZCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRlY2xpbmVSYXRpbmcodHlwZSwgaWQpIHtcbiAgICAgICAgbGV0IHBvc3RfZGF0YSA9IHsgJ2FwcG9pbnRtZW50X2lkJzogaWQsICdhcHBvaW50bWVudF90eXBlJzogdHlwZSB9O1xuICAgICAgICB0aGlzLnByb3BzLmNsb3NlQXBwb2ludG1lbnRSYXRpbmcocG9zdF9kYXRhLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BvcHVwIENsb3NlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pXG4gICAgfVxuXG4gICAgZ2V0QXBwb2ludG1lbnRUeXBlID0gKCkgPT4ge1xuICAgICAgICBsZXQgdHlwZSA9IHRoaXMucHJvcHMuZGV0YWlscy50eXBlICYmIHRoaXMucHJvcHMuZGV0YWlscy50eXBlID09IFwibGFiXCIgPyAxIDogMjtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG5cbiAgICB0aGFuWW91QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF0aW5nX2RvbmU6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgc3VibWl0UmF0aW5nID0gKHBvc3RfZGF0YSwgZmxhZykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogbnVsbCB9KVxuICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlQXBwb2ludG1lbnRSYXRpbmcocG9zdF9kYXRhLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIgJiYgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXBwb2ludG1lbnREYXRhOnRoaXMuc3RhdGUuZGF0YSwgZGF0YTogbnVsbCwgcmF0aW5nX2RvbmU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yYXRpbmdfZG9uZSAmJiAoKHRoaXMuc3RhdGUuZGF0YSA9PSBudWxsKSB8fCAodGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5sZW5ndGggPT0gMCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gKDxUaGFua1lvdVBvcFVwIHsuLi50aGlzLnByb3BzfSBzdWJtaXQ9e3RoaXMudGhhbllvdUJ1dHRvbn0gc2VsZWN0ZWRSYXRpbmc9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSYXRpbmd9IGFwcG9pbnRtZW50RGF0YT17dGhpcy5zdGF0ZS5hcHBvaW50bWVudERhdGF9Lz4pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhcHBfaWQgPSB0aGlzLnByb3BzLmRldGFpbHMuaWRcbiAgICAgICAgbGV0IHN1Ym1pdHRlZF9mbGFnID0gISF0aGlzLnByb3BzLnJhdGVkX2FwcG9pbm1lbnRzW2FwcF9pZF07XG4gICAgICAgIGlmICghc3VibWl0dGVkX2ZsYWcgJiYgdGhpcy5zdGF0ZS5kYXRhKSB7XG4gICAgICAgICAgICBsZXQgcXVhbGlmaWNhdGlvbl9vYmplY3QgPSB0aGlzLnByb3BzLmRldGFpbHMuZG9jdG9yID8gdGhpcy5wcm9wcy5kZXRhaWxzLmRvY3Rvci5xdWFsaWZpY2F0aW9ucyA6IG51bGw7XG4gICAgICAgICAgICBsZXQgcGlwZSA9ICcnXG4gICAgICAgICAgICBsZXQgZGF0YV9vYmogPSB7XG4gICAgICAgICAgICAgICAgJ25hbWUnOiAodGhpcy5wcm9wcy5kZXRhaWxzLmRvY3RvcikgPyB0aGlzLnByb3BzLmRldGFpbHMuZG9jdG9yLm5hbWUgOiB0aGlzLnByb3BzLmRldGFpbHMubGFiX25hbWUsXG4gICAgICAgICAgICAgICAgJ3F1YWxpZmljYXRpb24nOiBxdWFsaWZpY2F0aW9uX29iamVjdCAmJiBxdWFsaWZpY2F0aW9uX29iamVjdC5sZW5ndGggPyBxdWFsaWZpY2F0aW9uX29iamVjdFswXS5xdWFsaWZpY2F0aW9uIDogJycsXG4gICAgICAgICAgICAgICAgJ3NwZWNpYWxpemF0aW9uJzogcXVhbGlmaWNhdGlvbl9vYmplY3QgJiYgcXVhbGlmaWNhdGlvbl9vYmplY3QubGVuZ3RoID8gcXVhbGlmaWNhdGlvbl9vYmplY3RbMF0uc3BlY2lhbGl6YXRpb24gOiAnJyxcbiAgICAgICAgICAgICAgICAndHlwZSc6IHRoaXMuZ2V0QXBwb2ludG1lbnRUeXBlKCksXG4gICAgICAgICAgICAgICAgJ3RodW1ibmFpbCc6IHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3IgPyB0aGlzLnByb3BzLmRldGFpbHMuZG9jdG9yX3RodW1ibmFpbCA6IHRoaXMucHJvcHMuZGV0YWlscy5sYWJfdGh1bWJuYWlsLFxuICAgICAgICAgICAgICAgICdwaXBlJzogcGlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGFfb2JqLnR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgICAgICBkYXRhX29iai5waXBlID0gJyB8ICc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZW50aXR5ID0gKGRhdGFfb2JqLnR5cGUgPT0gMSkgPyAnbGFiJyA6ICdkb2N0b3InO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnJhdGluZ19pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLXVwc2lkZS1jb250YWluZXIgbXQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItdXBzaWRlLXN0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SYXRlIHlvdXIgcmVjZW50IHZpc2l0IHdpdGggdGhlIHtlbnRpdHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzEsIDIsIDMsIDQsIDVdLm1hcCgoeCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcga2V5PXtpfSBvbkNsaWNrPXt0aGlzLnNlbGVjdFJhdGluZy5iaW5kKHRoaXMsIHgpfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e1wiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvXCIgKyAodGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZyA+IDAgJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZyA+PSB4ID8gXCJcIiA6IFwidW5cIikgKyBcInNlbGVjdGVkLXN0YXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxSZXZpZXdQb3BVcCB7Li4udGhpcy5wcm9wc30gZGV0YWlscz17dGhpcy5zdGF0ZS5kYXRhfSBzdWJtaXQ9e3RoaXMuc3VibWl0UmF0aW5nfSBvYmo9e2RhdGFfb2JqfSByYXRpbmdfaWQ9e3RoaXMuc3RhdGUucmF0aW5nX2lkfSBzZWxlY3RlZF9yYXRpbmc9e3RoaXMuc3RhdGUuc2VsZWN0ZWRSYXRpbmd9IGNvbXBsaW1lbnRzPXt0aGlzLnN0YXRlLmNvbXBsaW1lbnRzfSAvPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ1Byb2ZpbGVDYXJkO1xuXG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnXG5pbXBvcnQgUmF0aW5nUHJvZmlsZUNhcmQgZnJvbSAnLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nUHJvZmlsZUNhcmQuanMnXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ2FuY2VsUG9wdXAgZnJvbSAnLi9jYW5jZWxQb3B1cC5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgQ1JJVEVPIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY3JpdGVvLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IFJhdGluZ3NQb3BVcCBmcm9tICcuLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdzUG9wVXAuanMnXG5pbXBvcnQgV2hhdHNBcHBPcHRpblZpZXcgZnJvbSAnLi4vLi4vY29tbW9ucy9XaGF0c0FwcE9wdGluL1doYXRzQXBwT3B0aW5WaWV3LmpzJ1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5cbmNvbnN0IFNUQVRVU19NQVAgPSB7XG4gICAgQ1JFQVRFRDogMSxcbiAgICBCT09LRUQ6IDIsXG4gICAgUkVTQ0hFRFVMRURfRE9DVE9SOiAzLFxuICAgIFJFU0NIRURVTEVEX1BBVElFTlQ6IDQsXG4gICAgQUNDRVBURUQ6IDUsXG4gICAgQ0FOQ0VMRUQ6IDYsXG4gICAgQ09NUExFVEVEOiA3LFxufVxuXG5jbGFzcyBCb29raW5nVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgcGF5bWVudF9zdWNjZXNzOiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygncGF5bWVudF9zdWNjZXNzJyksXG4gICAgICAgICAgICBoaWRlX2J1dHRvbjogdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ3BheW1lbnRfc3VjY2VzcycpIHx8IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdoaWRlX2J1dHRvbicpLFxuICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIHJlc2V0IHJlc2NoZWR1bGUgZGF0YVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXNjaGVkdWxlU2xvdCAmJiB0aGlzLnByb3BzLnJlc2NoZWR1bGVTbG90LmRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0T3BkVGltZVNMb3QoeyB0aW1lOiB7fSB9LCB0cnVlLCBudWxsKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgc21zQ29tcGxldGUgPSBwYXJzZWQuY29tcGxldGVcbiAgICAgICAgbGV0IGFwcG9pbnRtZW50SWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZDtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRPUERCb29raW5nU3VtbWFyeShhcHBvaW50bWVudElkLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhWzBdLCBsb2FkaW5nOiBmYWxzZSB9LCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNtc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5zdGF0dXMgIT0gNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IHt9XG4gICAgICAgICAgICAgICAgaW5mb1thcHBvaW50bWVudElkXSA9IFtdXG4gICAgICAgICAgICAgICAgaW5mb1thcHBvaW50bWVudElkXS5wdXNoKHsgJ2Jvb2tpbmdfaWQnOiBhcHBvaW50bWVudElkLCAnbXJwJzogZGF0YS5sZW5ndGggPyBkYXRhWzBdLm1ycCA6ICcnLCAnZGVhbF9wcmljZSc6IGRhdGEubGVuZ3RoID8gZGF0YVswXS5kZWFsX3ByaWNlIDogJycgfSlcblxuICAgICAgICAgICAgICAgIGluZm8gPSBKU09OLnN0cmluZ2lmeShpbmZvKVxuICAgICAgICAgICAgICAgIGxldCBpc19nb2xkX3VzZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGlmKGRhdGEgJiYgZGF0YS5sZW5ndGggJiYgZGF0YVswXS5nb2xkICYmIE9iamVjdC5rZXlzKGRhdGFbMF0uZ29sZCkubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgaXNfZ29sZF91c2VyID0gZGF0YVswXS5nb2xkLmlzX2dvbGQgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFNUT1JBR0Uuc2V0QXBwb2ludG1lbnREZXRhaWxzKGluZm8pLnRoZW4oKHNldENvb2tpZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnBheW1lbnRfc3VjY2Vzcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yQXBwb2ludG1lbnRCb29rZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IGFwcG9pbnRtZW50SWQsICdldmVudCc6ICdkb2N0b3ItYXBwb2ludG1lbnQtYm9va2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9LCB0cnVlLCBmYWxzZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNfZ29sZF91c2VyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmlwQm9va2VkRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd2aXBib29rZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXBib29rZWQnLCAndXNlcl9pZCc6IEdUTS5nZXRVc2VySWQoKSwgJ2lzX3NpbmdsZV9mbG93Jzp0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiB2aXBCb29rZWREYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjcml0ZW9fZGF0YSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogXCJ0cmFja1RyYW5zYWN0aW9uXCIsICdpZCc6IGFwcG9pbnRtZW50SWQsICdpdGVtJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICdpZCc6IFwiMVwiLCAncHJpY2UnOiBkYXRhLmxlbmd0aCA/IGRhdGFbMF0uZGVhbF9wcmljZSA6ICcnLCAncXVhbnRpdHknOiAxIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIENSSVRFTy5zZW5kRGF0YShjcml0ZW9fZGF0YSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSArIFwiP2hpZGVfYnV0dG9uPXRydWVcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwsIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBcHBvaW50bWVudChwcm9wcykge1xuICAgICAgICBjb25zdCBhcHBvaW50bWVudElkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucmVmSWRcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICBsZXQgYXBwb2ludG1lbnREYXRhID0geyBpZDogYXBwb2ludG1lbnRJZCwgc3RhdHVzOiA3IH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlT1BEQXBwb2ludG1lbnQoYXBwb2ludG1lbnREYXRhLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEsIGlzQ29tcGxldGVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiWW91ciBhcHBvaW50bWVudCBpcyBhbHJlYWR5IGNvbXBsZXRlZC5cIiB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFF1YWxpZmljYXRpb25TdHIocXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uKSB7XG4gICAgICAgIHJldHVybiBxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24ucmVkdWNlKChzdHIsIGN1cnIsIGkpID0+IHtcbiAgICAgICAgICAgIHN0ciArPSBgJHtjdXJyLm5hbWV9YFxuICAgICAgICAgICAgaWYgKGkgPCBxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24ubGVuZ3RoIC0gMSkgc3RyICs9IGAsIGA7XG4gICAgICAgICAgICByZXR1cm4gc3RyXG4gICAgICAgIH0sIFwiXCIpXG4gICAgfVxuXG4gICAgY2FuY2VsQXBwb2ludG1lbnQoY2FuY2VsRGF0YSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgc2hvd0NhbmNlbDogZmFsc2UgfSlcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIGlmIChjYW5jZWxEYXRhLmNhbmNlbFN0YXR1cykge1xuXG4gICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ2FuY2VsT3BkQXBwb2ludG1lbnRBbmRSZWZ1bmQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjYW5jZWwtb3BkLWFwcG9pbnRtZW50LVJlZnVuZCcsICdhcHBvaW50bWVudElkJzogdGhpcy5zdGF0ZS5kYXRhLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDYW5jZWxPcGRBcHBvaW50bWVudEFuZEJvb2tOZXcnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjYW5jZWwtb3BkLWFwcG9pbnRtZW50LUJvb2stTmV3JywgJ2FwcG9pbnRtZW50SWQnOiB0aGlzLnN0YXRlLmRhdGEuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgbGV0IGFwcG9pbnRtZW50RGF0YSA9IHsgaWQ6IHRoaXMuc3RhdGUuZGF0YS5pZCwgc3RhdHVzOiA2LCByZWZ1bmQ6IGNhbmNlbERhdGEuY2FuY2VsU3RhdHVzLCBjYW5jZWxsYXRpb25fY29tbWVudDogY2FuY2VsRGF0YS5jYW5jZWxUZXh0LCBjYW5jZWxsYXRpb25fcmVhc29uOiBjYW5jZWxEYXRhLmNhbmNlbElkIH1cblxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZU9QREFwcG9pbnRtZW50KGFwcG9pbnRtZW50RGF0YSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSwgbG9hZGluZzogZmFsc2UsIHNob3dDYW5jZWw6IGZhbHNlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgc2hvd0NhbmNlbDogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVDYW5jZWwoZSkge1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q2FuY2VsOiAhdGhpcy5zdGF0ZS5zaG93Q2FuY2VsIH0pXG4gICAgfVxuXG4gICAgZ29Ub1Nsb3RTZWxlY3RvcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke3RoaXMuc3RhdGUuZGF0YS5kb2N0b3IuaWR9LyR7dGhpcy5zdGF0ZS5kYXRhLmhvc3BpdGFsLmlkfS9ib29rP3Jlc2NoZWR1bGU9JHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZH0mdHlwZT1vcGRgKVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG8od2hlcmUsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUpXG4gICAgfVxuXG4gICAgcG9wdXBCdG5DbGljayhmbGFnKSB7XG4gICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICB0aGlzLmdldEFwcG9pbnRtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cDogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBnb1RvQm9va2luZ1BhZ2UoKSB7XG4gICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1JlYm9va0RvY3RvckFwcG9pbnRtZW50Q2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogJycsICdldmVudCc6ICdyZWJvb2stZG9jdG9yLWFwcG9pbnRtZW50LWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHt0aGlzLnN0YXRlLmRhdGEuZG9jdG9yLmlkfS8ke3RoaXMuc3RhdGUuZGF0YS5ob3NwaXRhbC5pZH0vYm9va2RldGFpbHNgKVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9WSVAoKXtcbiAgICAgICAgbGV0IHByb2ZpbGUgPSB7fVxuICAgICAgICBsZXQgbnVtYmVyID0gJydcbiAgICAgICAgbGV0IG5hbWUgPSAnJ1xuICAgICAgICBsZXQgY2l0eV9pZCA9ICcnXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGEpIHtcbiAgICAgICAgICAgIHByb2ZpbGUgPSB0aGlzLnN0YXRlLmRhdGEucHJvZmlsZVxuICAgICAgICAgICAgbnVtYmVyID0gcHJvZmlsZS5waG9uZV9udW1iZXJcbiAgICAgICAgICAgIG5hbWUgPSBwcm9maWxlLm5hbWVcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnN0YXRlLmRhdGEuaG9zcGl0YWwpe1xuICAgICAgICAgICAgY2l0eV9pZCAgPSB0aGlzLnN0YXRlLmRhdGEuaG9zcGl0YWwubWF0cml4X2NpdHlcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGVhZF9kYXRhID17fVxuICAgICAgICBsZWFkX2RhdGEuc291cmNlID0gJ0FwcG9pbnRtZW50UGF5U3VjY2VzcydcbiAgICAgICAgbGVhZF9kYXRhLmxlYWRfc291cmNlPSAnQXBwb2ludG1lbnRQYXlTdWNjZXNzJ1xuICAgICAgICBsZWFkX2RhdGEuY2l0eV9pZCA9IGNpdHlfaWRcbiAgICAgICAgbGV0IGV4dHJhUGFyYW1zID0ge31cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgZXh0cmFQYXJhbXMgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeD0+eC50eXBlID09IFwiY29tbW9uX3h0cmFfdGFnc1wiKVswXS51dG1fdGFnc1xuICAgICAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnByb3BzLmdlbmVyYXRlVmlwQ2x1YkxlYWQoJycsIG51bWJlcixsZWFkX2RhdGEsIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgbmFtZSwgZXh0cmFQYXJhbXMpXG5cbiAgICAgICAgdGhpcy5wcm9wcy5nZW5lcmF0ZVZpcENsdWJMZWFkKHtzZWxlY3RlZFBsYW46JycsIG51bWJlcjpudW1iZXIsIGxlYWRfZGF0YTpsZWFkX2RhdGEsIHNlbGVjdGVkTG9jYXRpb246dGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLCB1c2VyX25hbWU6bmFtZSwgZXh0cmFQYXJhbXM6ZXh0cmFQYXJhbXMsXG4gICAgICAgICAgICBjYjogKHJlc3ApID0+IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVmlwS25vd01vcmVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAnJywgJ2V2ZW50JzogJ3ZpcC1rbm93LW1vcmUtY2xpY2tlZCcsY2l0eV9pZDogY2l0eV9pZFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWNsdWItZGV0YWlscz9zb3VyY2U9YXBwb2ludG1lbnQtc3VjY2Vzcy1wYWdlJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvU0JJKCl7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwOi8vMTMuMjM1LjE5OS4zNi93ZWJjb3JlL2RvY3ByaW1lY2FsbGJhY2snLCAnX2JsYW5rJylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgZG9jdG9yID0ge31cbiAgICAgICAgbGV0IHByb2ZpbGUgPSB7fVxuICAgICAgICBsZXQgaG9zcGl0YWwgPSB7fVxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgbGV0IGFjdGlvbnMgPSBbXVxuICAgICAgICBsZXQgc3RhdHVzID0gMVxuICAgICAgICBsZXQgZG9jdG9yX3RodW1ibmFpbCA9IFwiXCJcbiAgICAgICAgbGV0IHBheW1lbnRfdHlwZSA9IDFcbiAgICAgICAgbGV0IG1ycCA9IDBcbiAgICAgICAgbGV0IGRlYWxfcHJpY2UgPSAwXG4gICAgICAgIGxldCBkaXNjb3VudCA9IDBcbiAgICAgICAgbGV0IHBheW1lbnRNb2RlID0gJydcbiAgICAgICAgbGV0IGVmZmVjdGl2ZV9wcmljZSA9IDBcbiAgICAgICAgbGV0IGlzX3ZpcF9tZW1iZXIgPSBmYWxzZVxuICAgICAgICBsZXQgY292ZXJlZF91bmRlcl92aXAgPSBmYWxzZVxuICAgICAgICBsZXQgdmlwX2Ftb3VudCA9IDBcbiAgICAgICAgbGV0IGlzX2dvbGRfdmlwID0gMFxuICAgICAgICBsZXQgdmlwX2NvbnZlbmllbnRfcHJpY2UgPSAwXG4gICAgICAgIGxldCBjb2RfZGlzY291bnRlZF9wcmljZSA9IDBcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSkge1xuICAgICAgICAgICAgZG9jdG9yID0gdGhpcy5zdGF0ZS5kYXRhLmRvY3RvclxuICAgICAgICAgICAgaG9zcGl0YWwgPSB0aGlzLnN0YXRlLmRhdGEuaG9zcGl0YWxcbiAgICAgICAgICAgIHByb2ZpbGUgPSB0aGlzLnN0YXRlLmRhdGEucHJvZmlsZVxuICAgICAgICAgICAgZGF0ZSA9IHRoaXMuc3RhdGUuZGF0YS50aW1lX3Nsb3Rfc3RhcnQgPyBuZXcgRGF0ZSh0aGlzLnN0YXRlLmRhdGEudGltZV9zbG90X3N0YXJ0KSA6IG5ldyBEYXRlKClcbiAgICAgICAgICAgIGFjdGlvbnMgPSB0aGlzLnN0YXRlLmRhdGEuYWxsb3dlZF9hY3Rpb24gfHwgW11cbiAgICAgICAgICAgIHN0YXR1cyA9IHRoaXMuc3RhdGUuZGF0YS5zdGF0dXNcbiAgICAgICAgICAgIGRvY3Rvcl90aHVtYm5haWwgPSB0aGlzLnN0YXRlLmRhdGEuZG9jdG9yX3RodW1ibmFpbFxuICAgICAgICAgICAgcGF5bWVudF90eXBlID0gdGhpcy5zdGF0ZS5kYXRhLnBheW1lbnRfdHlwZVxuICAgICAgICAgICAgbXJwID0gdGhpcy5zdGF0ZS5kYXRhLm1ycFxuICAgICAgICAgICAgZGVhbF9wcmljZSA9IHRoaXMuc3RhdGUuZGF0YS5kZWFsX3ByaWNlXG4gICAgICAgICAgICBlZmZlY3RpdmVfcHJpY2UgPSB0aGlzLnN0YXRlLmRhdGEuZWZmZWN0aXZlX3ByaWNlXG4gICAgICAgICAgICBpc192aXBfbWVtYmVyID0gdGhpcy5zdGF0ZS5kYXRhLnZpcC5pc192aXBfbWVtYmVyXG4gICAgICAgICAgICBjb3ZlcmVkX3VuZGVyX3ZpcCA9IHRoaXMuc3RhdGUuZGF0YS52aXAuY292ZXJlZF91bmRlcl92aXBcbiAgICAgICAgICAgIHZpcF9hbW91bnQgPSB0aGlzLnN0YXRlLmRhdGEudmlwLnZpcF9hbW91bnRcbiAgICAgICAgICAgIGlzX2dvbGRfdmlwID0gdGhpcy5zdGF0ZS5kYXRhLnZpcC5pc19nb2xkX21lbWJlclxuICAgICAgICAgICAgdmlwX2NvbnZlbmllbnRfcHJpY2UgPSB0aGlzLnN0YXRlLmRhdGEudmlwLmV4dHJhX2NoYXJnZVxuICAgICAgICAgICAgY29kX2Rpc2NvdW50ZWRfcHJpY2UgPSB0aGlzLnN0YXRlLmRhdGEuZGlzY291bnRcblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN1bW1hcnlfdXRtX3RhZyA9IFwiXCJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnByb3BzLnN1bW1hcnlfdXRtICYmIHRoaXMucHJvcHMuc3VtbWFyeV91dG1fdmFsaWRpdHkpIHtcbiAgICAgICAgICAgIGlmICgobmV3IERhdGUodGhpcy5wcm9wcy5zdW1tYXJ5X3V0bV92YWxpZGl0eSkpID4gKG5ldyBEYXRlKCkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNyYyA9IGBodHRwczovL2NwbGNwcy5jb20vcC5hc2h4P289MTE2MjE2JmU9NDUzMSZmPWltZyZ0PSR7dGhpcy5zdGF0ZS5kYXRhLmlkfWBcbiAgICAgICAgICAgICAgICBzdW1tYXJ5X3V0bV90YWcgPSA8aW1nIHNyYz17c3JjfSB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxXCIgYm9yZGVyPVwiMFwiIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGF5bWVudF90eXBlID09IDIpIHtcbiAgICAgICAgICAgIGRpc2NvdW50ID0gcGFyc2VJbnQoY29kX2Rpc2NvdW50ZWRfcHJpY2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNjb3VudCA9IG1ycCAtIGVmZmVjdGl2ZV9wcmljZVxuICAgICAgICB9XG4gICAgICAgIGlmKCFpc192aXBfbWVtYmVyICYmICFjb3ZlcmVkX3VuZGVyX3ZpcCl7XG4gICAgICAgICAgICBpZiAocGF5bWVudF90eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TW9kZSA9ICdPbmxpbmUnXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBheW1lbnRfdHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1vZGUgPSAnQ2FzaCdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGF5bWVudF90eXBlID09IDMpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TW9kZSA9ICdJbnN1cmFuY2UnXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBheW1lbnRfdHlwZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1vZGUgPSAnRG9jcHJpbWUgQ2FyZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihpc192aXBfbWVtYmVyICYmIGNvdmVyZWRfdW5kZXJfdmlwKXtcbiAgICAgICAgICAgIHBheW1lbnRNb2RlID0gJ0RvY3ByaW1lIFZJUCBNZW1iZXInXG4gICAgICAgIH1cblxuICAgICAgICBpZihpc19nb2xkX3ZpcCkge1xuICAgICAgICAgICAgcGF5bWVudE1vZGUgPSAnRG9jcHJpbWUgR29sZCBNZW1iZXInXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRvY3ByaW1lX2dvbGRfcHJpY2UgPSAwXG4gICAgICAgIGxldCB0b3RhbF9hbW91bnRfcGF5YWJsZSA9IDBcbiAgICAgICAgaWYoaXNfdmlwX21lbWJlciB8fCBpc19nb2xkX3ZpcCkge1xuICAgICAgICAgICAgZG9jcHJpbWVfZ29sZF9wcmljZSA9IHBhcnNlSW50KG1ycCkgLShwYXJzZUludCh2aXBfY29udmVuaWVudF9wcmljZSkgKyAgcGFyc2VJbnQodmlwX2Ftb3VudCkgKVxuICAgICAgICAgICAgZGlzY291bnQgPSAgIChwYXJzZUludCh2aXBfYW1vdW50KSArIHBhcnNlSW50KHZpcF9jb252ZW5pZW50X3ByaWNlKSApIC0gZWZmZWN0aXZlX3ByaWNlIFxuICAgICAgICAgICAgdG90YWxfYW1vdW50X3BheWFibGUgPSBwYXJzZUludChtcnApIC0gKGRvY3ByaW1lX2dvbGRfcHJpY2UgKyBkaXNjb3VudClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICB7c3VtbWFyeV91dG1fdGFnfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0NvbXBsZXRlZCA/IDxSYXRpbmdzUG9wVXAgey4uLnRoaXMucHJvcHN9IC8+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cblxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtY29uZW50XCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNvbXBsZXRlIHRoaXMgYXBwb2ludG1lbnQ/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBvcHVwQnRuQ2xpY2sodHJ1ZSl9PlllczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucG9wdXBCdG5DbGljayhmYWxzZSl9Pk5vPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5zdGF0ZS5sb2FkaW5nICYmIHRoaXMuc3RhdGUuZGF0YSkgPyA8c2VjdGlvbiBjbGFzc05hbWU9XCJib29raW5nLWNvbmZpcm0tc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjYXJkTWFpblBhZGRpbmdSbXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2hhdHNBcHBPcHRpblZpZXcgey4uLnRoaXMucHJvcHN9IHByb2ZpbGVzPXtwcm9maWxlfSBpc0FwcG9pbnRtZW50PXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC10aW1lbGluZSBib29rLWNvbmZpcm1lZC10aW1lbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID09IDYgPyA8aDQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5BcHBvaW50bWVudCBDYW5jZWxsZWQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGF0dXMgPT0gMSA/IDxoNCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkFwcG9pbnRtZW50IENyZWF0ZWQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyhzdGF0dXMgPD0gNSB8fCBzdGF0dXMgPT0gNykgPyBcImFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj4xPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmdy03MDAgdGV4dC1saWdodFwiPlJlY2VpdmVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsoc3RhdHVzID09IDUgfHwgc3RhdHVzID09IDcpID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+Mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZnctNzAwIHRleHQtbGlnaHRcIj5Db25maXJtZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0YXR1cyA9PSA3ID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+Mzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZnctNzAwIHRleHQtbGlnaHRcIj57c3RhdHVzID09IDYgPyBcIkNvbXBsZXRlZFwiIDogXCJDb21wbGV0ZWRcIn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLnN0YXR1cyA9PSA3ICYmIHRoaXMuc3RhdGUuZGF0YS5pc19yYXRlZCA9PT0gZmFsc2UgPyAoPFJhdGluZ1Byb2ZpbGVDYXJkIHsuLi50aGlzLnByb3BzfSBib29raW5nX2ZsYWc9e3RydWV9IGRldGFpbHM9e3RoaXMuc3RhdGUuZGF0YX0gLz4pIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZGF0YS5vdHAgJiYgc3RhdHVzID09IDUpID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kIG1yYi0xMFwiPlVuaXF1ZSBDb25maXJtYXRpb24gQ29kZTogPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtbWRcIj57dGhpcy5zdGF0ZS5kYXRhLm90cH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWxpZ2h0XCI+U2hhcmUgdGhpcyBjb2RlIHdpdGggZG9jdG9yIGF0IHRoZSB0aW1lIG9mIHlvdXIgYXBwb2ludG1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGF5bWVudF9zdWNjZXNzID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kIG1yYi0xMFwiPjxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMCB0ZXh0LW1kXCI+VGhhbmtzISBBcHBvaW50bWVudCBSZWNlaXZlZDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbGlnaHRcIj5XZSBhcmUgd2FpdGluZyBmb3IgdGhlIGNvbmZpcm1hdGlvbiBmcm9tIHRoZSBkb2N0b3IgYW5kIHdlIHdpbGwgZ2V0IGJhY2sgdG8geW91IHNob3J0bHkuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBjYXJ0IHByaWNlIGRlc2lnbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X3R5cGUgPT0gMiAmJiBzdGF0dXMgPCA2ID8gPGRpdiBjbGFzc05hbWU9XCJwYXlBdGNsaW5pY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UGF5IGF0IGNsaW5pYzwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBwYXkgPGI+4oK5IHtwYXJzZUludChkZWFsX3ByaWNlKS0gcGFyc2VJbnQoY29kX2Rpc2NvdW50ZWRfcHJpY2UpfTwvYj4gYXQgdGhlIHRpbWUgb2YgYXBwb2ludG1lbnQ8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBjYXJ0IHByaWNlIGRlc2lnbiAqL31cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kXCI+Qm9va2luZyBJRDogPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtbWRcIj57dGhpcy5zdGF0ZS5kYXRhLmlkfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1saWdodFwiPkRldGFpbHMgaGF2ZSBiZWVuIHNlbnQgdG8geW91ciBlbWFpbC1pZCBhbmQgbW9iaWxlIG51bWJlci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuaW5kZXhPZig2KSA+IC0xICYmICF0aGlzLnN0YXRlLmhpZGVfYnV0dG9uID8gPGEgb25DbGljaz17dGhpcy50b2dnbGVDYW5jZWwuYmluZCh0aGlzKX0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj5DYW5jZWwgQm9va2luZzwvYT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFNUT1JBR0UuY2hlY2tBdXRoKCkgJiYgdGhpcy5wcm9wcy5wcm9maWxlcyAmJiB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfdmlwX21lbWJlciB8fCBpc19nb2xkX3ZpcCB8fCBwYXltZW50X3R5cGU9PTMpPycnOnN0YXR1cyAhPSA2ICYmIHN0YXR1cyAhPSA3ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtY29udGVudC1ib29rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgY291bGQgaGF2ZSBzYXZlZCA8Yj43MCU8L2I+IG9uIHRoaXMgYm9va2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+aWYgeW91IHdlcmUgYSBEb2NwcmltZSA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IC8+IE1lbWJlciE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubmF2aWdhdGVUb1ZJUCgpfT5Lbm93IG1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IGJva25nLWNhcmQgcGItbG9jYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndjLXRpdGxlIHRleHQtbWQgZnctNzAwIGNhcmQtbm0tb3ZybHBuZ1wiPntkb2N0b3IuZGlzcGxheV9uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbml0aWFsc1BpY3R1cmUgbmFtZT17ZG9jdG9yLm5hbWV9IGhhc19pbWFnZT17ISFkb2N0b3JfdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtZHNcIiBzdHlsZT17e2Zsb2F0OidyaWdodCd9fSBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzLCBgL29wZC9kb2N0b3IvJHtkb2N0b3IuaWR9YCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvY3Rvcl90aHVtYm5haWx9IHN0eWxlPXt7IHdpZHRoOiA1MCB9fSBjbGFzc05hbWU9XCJpbWctZmx1aWQgYWRkLW1hcCBpbWctcm91bmQgY3JkLWRvYy1pbWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzLWRldGFpbHNcIj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhZGQtaW5mbyBmdy01MDBcIj57dGhpcy5nZXRRdWFsaWZpY2F0aW9uU3RyKGRvY3Rvci5nZW5lcmFsX3NwZWNpYWxpemF0aW9uIHx8IFtdKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgIHBiLWxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ3Yy10aXRsZSB0ZXh0LW1kIGZ3LTcwMCBjYXJkLW5tLW92cmxwbmdcIj57aG9zcGl0YWwubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3MtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tYXAtaWNvbi5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGFkZC1tYXBcIiAvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWRkLWluZm8gZnctNTAwXCI+e2hvc3BpdGFsLmFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJwYi12aWV3IHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvP2FwaT0xJnF1ZXJ5PSR7aG9zcGl0YWwubGF0fSwke2hvc3BpdGFsLmxvbmd9YH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwibGluay10ZXh0IHRleHQtbWQgZnctNzAwXCI+VmlldyBpbiBHb29nbGUgTWFwPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID09IDYgfHwgc3RhdHVzID09IDcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVib29rLWJ0blwiIG9uQ2xpY2s9e3RoaXMuZ29Ub0Jvb2tpbmdQYWdlLmJpbmQodGhpcyl9PlJlYm9vayBBcHBvaW50bWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEgJiYgdGhpcy5zdGF0ZS5kYXRhLnByb2NlZHVyZXMgJiYgdGhpcy5zdGF0ZS5kYXRhLnByb2NlZHVyZXMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGItZGV0YWlscyBwYi1sb2NhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT48c3Bhbj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3RlZXRoLnN2Z1wifSBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiBzdHlsZT17eyB3aWR0aDogMTcsIG1hcmdpblJpZ2h0OiA4IH19IC8+PC9zcGFuPlNlcnZpY2VzIEluY2x1ZGVkPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLXZpZXcgdGV4dC1sZWZ0IHByb2MtcGFyYS1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG9jdG9yIGNvbnN1bHRhdGlvbiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YS5wcm9jZWR1cmVzLm1hcCgocHJvY2VkdXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwPntwcm9jZWR1cmUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPjxzcGFuPjxpbWcgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fSBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YXRjaC1kYXRlLnN2Z1wifSAvPjwvc3Bhbj5DbGluaWMgVmlzaXQgVGltZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aW9ucy5pbmRleE9mKDQpID4gLTEpICYmIChuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKCkgPiBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5nb1RvU2xvdFNlbGVjdG9yLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNzAwIHRleHQtc21cIj5SZXNjaGVkdWxlIFRpbWU8L2E+PC9zcGFuPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlLXRpbWUgdGVzdC1saXN0IGZ3LTUwMFwiPntkYXRlLnRvRGF0ZVN0cmluZygpfSB8IHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXJlcG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+PHNwYW4+PGltZyBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2LCBtYXJnaW5SaWdodDogNSwgdmVydGljYWxBbGlnbjogLTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+PC9zcGFuPlBhdGllbnQgRGV0YWlsczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXN0LWxpc3QgZnctNTAwXCI+e3Byb2ZpbGUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXN0LWxpc3QgZnctNTAwXCI+e3Byb2ZpbGUucGhvbmVfbnVtYmVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlc3QtbGlzdCBmdy01MDBcIj57cHJvZmlsZS5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgIT09IDYgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtcmVwb3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPjxzcGFuPjxpbWcgY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcnVwZWVpY29uLnBuZ1wifSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2LCBtYXJnaW5SaWdodDogNSwgdmVydGljYWxBbGlnbjogLTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz48L3NwYW4+UGF5bWVudCBEZXRhaWw8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X3R5cGU9PTM/Jyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6ICcjNzU3NTc1JywgcGFkZGluZ1RvcDogNCB9fT5NUlA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+JiM4Mzc3OyB7cGFyc2VJbnQobXJwKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3ZpcF9tZW1iZXIgJiYgY292ZXJlZF91bmRlcl92aXAgJiYgIWlzX2dvbGRfdmlwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+RG9jcHJpbWUgVklQIE1lbWJlciA8aW1nIGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWRcInNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IC8+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tICYjODM3Nzsge3BhcnNlSW50KG1ycCkgLSAocGFyc2VJbnQodmlwX2Ftb3VudCkgKyBkaXNjb3VudCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZ29sZF92aXAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4gRG9jcHJpbWUgR29sZCBNZW1iZXIgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9Lz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+LSAmIzgzNzc7IHtkb2NwcmltZV9nb2xkX3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudCAmJiBwYXltZW50X3R5cGUhPTMgLyomJiAhaXNfdmlwX21lbWJlciAmJiAhY292ZXJlZF91bmRlcl92aXAgJiYgIWlzX2dvbGRfdmlwKi8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5Eb2NwcmltZSBEaXNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+LSAmIzgzNzc7IHtwYXJzZUludChkaXNjb3VudCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF90eXBlPT0zPycnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPXt7IGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBtYXJnaW46ICcwIC0xMnB4IDEwcHggLTEycHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5BbW91bnQgUGF5YWJsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X3R5cGUgPT0gMiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPiYjODM3Nzsge3BhcnNlSW50KGRlYWxfcHJpY2UpLSBwYXJzZUludChjb2RfZGlzY291bnRlZF9wcmljZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXNfZ29sZF92aXA/PHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+JiM4Mzc3OyB7dG90YWxfYW1vdW50X3BheWFibGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzX3ZpcF9tZW1iZXIgJiYgY292ZXJlZF91bmRlcl92aXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+JiM4Mzc3OyB7dG90YWxfYW1vdW50X3BheWFibGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPiYjODM3Nzsge3BhcnNlSW50KGVmZmVjdGl2ZV9wcmljZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TW9kZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlBheW1lbnQgTW9kZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+e3BheW1lbnRNb2RlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA8PSA1ID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktcHJvZmlsZS1pdGVtXCIgc3R5bGU9e3sgY3Vyc29yOiAnYXV0bycgfX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvcmVmZXJyYWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c3ItZHRscy1vZmYtYWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndjLXRpdGxlIHRleHQtbWQgZnctNzAwIGNhcmQtbm0tb3ZybHBuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9yZWZlci5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkICBpbWctZi0xXCIgLz5SZWZlciAmYW1wOyBFYXJuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZyLWltZy10eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtaW1nLWNvbnRcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0ZXAtMi5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZnItY29udG50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhZGQtaW5mbyBmdy01MDAgYWRkLWluZm8tcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludml0ZSB5b3VyIGZyaWVuZHMgb24gZG9jcHJpbWUuY29tIGFuZCBlYXJuIDxiIGNsYXNzTmFtZT1cImZ3LTUwMCBkcmstYmxrXCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzhweCcsIG1hcmdpblRvcDogJzRweCcsIG1hcmdpblJpZ2h0OiAnMHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ydXBlZS1pY29uLnN2Z1wifSAvPiB7dGhpcy5zdGF0ZS5kYXRhLnVzZXJfcmVmZXJyYWxfYW10fTwvYj4gb24gY29tcGxldGlvbiBvZiB0aGVpciBmaXJzdCBvcmRlciA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJ0LTIwXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLWRhcmstLWFsbClgICwgY3Vyc29yOiAncG9pbnRlcicgfX0+S25vdyBtb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPT0gNyA/IDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3VzZXIvb3BkL3JlcG9ydHMvJHt0aGlzLnN0YXRlLmRhdGEuaWR9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJ2aWV3cHJlc2J0blwiPlZpZXcgUHJlc2NyaXB0aW9uPC9idXR0b24+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnN0YXRlLmRhdGEuYXBwb2ludG1lbnRfdmlhX3NiaT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBzdGlja3ktYnRuIHAtMCB2LWJ0biAgYnRuLWxnIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgYnV0dG9ucy1hZGRjYXJ0LWNvbnRhaW5lciBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuLXByaW1hcnkgYm9vay1idG4tbXJnbi1hZGp1c3QgXCIgb25DbGljaz17KCk9Pnt0aGlzLm5hdmlnYXRlVG9TQkkoKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvIEJhY2sgVG8gU0JJRyBIb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dDYW5jZWwgPyA8Q2FuY2VsUG9wdXAgdG9nZ2xlPXt0aGlzLnRvZ2dsZUNhbmNlbC5iaW5kKHRoaXMpfSBjYW5jZWxBcHBvaW50bWVudD17dGhpcy5jYW5jZWxBcHBvaW50bWVudC5iaW5kKHRoaXMpfSBjb21tZW50cz17dGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5jYW5jZWxsYXRpb25fcmVhc29uID8gdGhpcy5zdGF0ZS5kYXRhLmNhbmNlbGxhdGlvbl9yZWFzb24gOiBbXX0gc2hvd0NvbW1lbnRSZWFzb25zPXtwYXltZW50X3R5cGUgPT0gMyB8fCBwYXltZW50X3R5cGUgPT0gMiA/IHRydWUgOiBmYWxzZX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPERpc2NsYWltZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBDYW5jZWxQb3BVcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgICAgICAgc2hvd0NvbW1lbnRSZWFzb25zOiB0aGlzLnByb3BzLnNob3dDb21tZW50UmVhc29ucyxcbiAgICAgICAgICAgIHNlbGVjdGVkQ2FuY2VsUmVhc29uSWQ6ICcnLFxuICAgICAgICAgICAgY2FuY2VsVGV4dDogJycsXG4gICAgICAgICAgICBjYW5jZWxTdGF0dXM6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWJtaXRDbGlja2VkKGUpe1xuXG4gICAgICAgIGxldCBvdGhlclJlYXNvbiA9IHRoaXMucHJvcHMuY29tbWVudHMuZmlsdGVyKHg9PnguaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENhbmNlbFJlYXNvbklkKVxuICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuc2VsZWN0ZWRDYW5jZWxSZWFzb25JZCl7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBzZWxlY3QgdmFsaWQgcmVhc29uXCIgfSlcbiAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICB9ZWxzZSBpZiggb3RoZXJSZWFzb24ubGVuZ3RoICYmIG90aGVyUmVhc29uWzBdLmlzX2NvbW1lbnRfbmVlZGVkICYmICF0aGlzLnN0YXRlLmNhbmNlbFRleHQpe1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgZW50ZXIgY29tbWVudFwiIH0pXG4gICAgICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICBpZihvdGhlclJlYXNvbi5sZW5ndGggJiYgb3RoZXJSZWFzb25bMF0uaXNfY29tbWVudF9uZWVkZWQpe1xuICAgICAgICAgICAgICAgIG90aGVyUmVhc29uID0gdGhpcy5zdGF0ZS5jYW5jZWxUZXh0XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBvdGhlclJlYXNvbiA9ICcnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjYW5jZWxEYXRhID0ge1xuICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6IG90aGVyUmVhc29uLFxuICAgICAgICAgICAgICAgIGNhbmNlbElkOiB0aGlzLnN0YXRlLnNlbGVjdGVkQ2FuY2VsUmVhc29uSWQsXG4gICAgICAgICAgICAgICAgY2FuY2VsU3RhdHVzOiB0aGlzLnN0YXRlLmNhbmNlbFN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jYW5jZWxBcHBvaW50bWVudChjYW5jZWxEYXRhKVxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXRIYW5kbGVyKGUpe1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NhbmNlbFRleHQ6IGUudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IG90aGVyVHlwZSA9IHRoaXMucHJvcHMuY29tbWVudHMuZmlsdGVyKHg9PnguaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENhbmNlbFJlYXNvbklkKVxuICAgICAgICBpZihvdGhlclR5cGUubGVuZ3RoICYmIG90aGVyVHlwZVswXS5pc19jb21tZW50X25lZWRlZCl7XG4gICAgICAgICAgICBvdGhlclR5cGUgPSB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgb3RoZXJUeXBlID0gZmFsc2VcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0NvbW1lbnRSZWFzb25zP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbFBvcHVwQ29udGFpbmVyT3ZlcmxheVwiIG9uQ2xpY2s9eyhlKT0+dGhpcy5wcm9wcy50b2dnbGUoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxQb3B1cENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLUhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlJlYXNvbiBmb3IgQ2FuY2VsbGF0aW9uPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbi1idG4taGVhZFwiPjxpbWcgc3R5bGU9e3sgd2lkdGg6IDEwIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Nsb3NlLWJsYWNrLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBvbkNsaWNrPXsoZSk9PnRoaXMucHJvcHMudG9nZ2xlKGUpfS8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtd2lkLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tbWVudHMubWFwKChyZWFzb25zLCBrZXkpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17cmVhc29ucy5pZH0gY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCIgb25DbGljaz17KGUpPT57ZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZENhbmNlbFJlYXNvbklkOiByZWFzb25zLmlkfSkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUnLCBmb250U2l6ZTogJ2luaGVyaXQnIH19ID57cmVhc29ucy5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDYW5jZWxSZWFzb25JZCA9PSByZWFzb25zLmlkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyVHlwZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxhdGlvblJlc29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJXcml0ZSByZWFzb24gZm9yIGNhbmNlbGxhdGlvblwiIG9uQ2hhbmdlID17dGhpcy5oYW5kbGVJbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gb25DbGljaz17KGUpPT57ZS5zdG9wUHJvcGFnYXRpb24oKX19IHZhbHVlPXt0aGlzLnN0YXRlLmNhbmNlbFRleHR9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxhdGlvbkJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9IHt0aGlzLnN1Ym1pdENsaWNrZWQuYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbFBvcHVwQ29udGFpbmVyT3ZlcmxheVwiIG9uQ2xpY2s9eyhlKT0+dGhpcy5wcm9wcy50b2dnbGUoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxQb3B1cENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLUhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNhbmNlbCBBcHBvaW50bWVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY24tYnRuLWhlYWRcIj48aW1nIHN0eWxlPXt7d2lkdGg6IDEwfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvc2UtYmxhY2suc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIG9uQ2xpY2s9eyhlKT0+dGhpcy5wcm9wcy50b2dnbGUoZSl9Lz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNuY3Qtc2VsZWN0LWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHtlLnN0b3BQcm9wYWdhdGlvbigpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93Q29tbWVudFJlYXNvbnM6IHRydWUsIGNhbmNlbFN0YXR1czogMH0pIH19PkNhbmNlbCBhbmQgUmVib29rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHtlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dDb21tZW50UmVhc29uczogdHJ1ZSwgY2FuY2VsU3RhdHVzOiAxfSkgfX0gPkNhbmNlbCBhbmQgUmVmdW5kPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsUG9wVXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0Q2FydEl0ZW1zLCBnZXRPUERCb29raW5nU3VtbWFyeSwgdXBkYXRlT1BEQXBwb2ludG1lbnQsIHNlbGVjdE9wZFRpbWVTTG90LCByZXRyeVBheW1lbnRPUEQsIGdldFJhdGluZ0NvbXBsaW1lbnRzLCBjcmVhdGVBcHBvaW50bWVudFJhdGluZywgdXBkYXRlQXBwb2ludG1lbnRSYXRpbmcsIGNsb3NlQXBwb2ludG1lbnRQb3BVcCxPVFRMb2dpbiwgZ2V0VW5yYXRlZEFwcG9pbnRtZW50LGNsb3NlQXBwb2ludG1lbnRSYXRpbmcsZWRpdFVzZXJQcm9maWxlLCByZXNldFBrZ0NvbXBhcmUsIGdlbmVyYXRlVmlwQ2x1YkxlYWR9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgQm9va2luZ1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vcGQvYm9va2luZy9Cb29raW5nVmlldy5qcydcbmltcG9ydCBGQ00gZnJvbSAnLi4vLi4vaGVscGVycy9mY20nXG5cbmNsYXNzIEJvb2tpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRDYXJ0SXRlbXMoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5wcm9wcy5yZXNldFBrZ0NvbXBhcmUoKVxuICAgICAgICBGQ00uZ2V0UGVybWlzc2lvbigpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCb29raW5nVmlldyB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgbGV0IHsgcmVzY2hlZHVsZVNsb3QgfSA9IHN0YXRlLkRPQ1RPUl9TRUFSQ0hcblxuICAgIGxldCB7XG4gICAgICAgIHN1bW1hcnlfdXRtLCBzdW1tYXJ5X3V0bV92YWxpZGl0eSwgbmV3Tm90aWZpY2F0aW9uLCBub3RpZmljYXRpb25zLCByYXRlZF9hcHBvaW5tZW50cywgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZSwgZGVmYXVsdFByb2ZpbGUsIGNvbW1vbl91dG1fdGFnc1xuICAgIH0gPSBzdGF0ZS5VU0VSXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG5cbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzY2hlZHVsZVNsb3QsIG5ld05vdGlmaWNhdGlvbiwgbm90aWZpY2F0aW9ucywgcmF0ZWRfYXBwb2lubWVudHMsIHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUsIHN1bW1hcnlfdXRtLCBzdW1tYXJ5X3V0bV92YWxpZGl0eSwgc2VsZWN0ZWRMb2NhdGlvbiwgZGVmYXVsdFByb2ZpbGUsIGNvbW1vbl91dG1fdGFnc1xuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgIE9UVExvZ2luOiAob3R0LHVzZXJfaWQpID0+IGRpc3BhdGNoKE9UVExvZ2luKG90dCx1c2VyX2lkKSksXG4gICAgICAgIGdldE9QREJvb2tpbmdTdW1tYXJ5OiAoYXBwb2ludG1lbnRJRCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldE9QREJvb2tpbmdTdW1tYXJ5KGFwcG9pbnRtZW50SUQsIGNhbGxiYWNrKSksXG4gICAgICAgIHVwZGF0ZU9QREFwcG9pbnRtZW50OiAoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBkYXRlT1BEQXBwb2ludG1lbnQoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykpLFxuICAgICAgICBzZWxlY3RPcGRUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUsIGFwcG9pbnRtZW50SWQpID0+IGRpc3BhdGNoKHNlbGVjdE9wZFRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUsIGFwcG9pbnRtZW50SWQpKSxcbiAgICAgICAgcmV0cnlQYXltZW50T1BEOiAoYXBwb2ludG1lbnRJZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKHJldHJ5UGF5bWVudE9QRChhcHBvaW50bWVudElkLCBjYWxsYmFjaykpLFxuICAgICAgICBnZXRSYXRpbmdDb21wbGltZW50czogKGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRSYXRpbmdDb21wbGltZW50cyhjYWxsYmFjaykpLFxuICAgICAgICBjcmVhdGVBcHBvaW50bWVudFJhdGluZzogKGFwcG9pbnRtZW50RGF0YSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nKGFwcG9pbnRtZW50RGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgdXBkYXRlQXBwb2ludG1lbnRSYXRpbmc6IChyYXRpbmdEYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBkYXRlQXBwb2ludG1lbnRSYXRpbmcocmF0aW5nRGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgY2xvc2VBcHBvaW50bWVudFBvcFVwOiAoaWQsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChjbG9zZUFwcG9pbnRtZW50UG9wVXAoaWQsIGNhbGxiYWNrKSksXG4gICAgICAgIGdldENhcnRJdGVtczogKCkgPT4gZGlzcGF0Y2goZ2V0Q2FydEl0ZW1zKCkpLFxuICAgICAgICBnZXRVbnJhdGVkQXBwb2ludG1lbnQ6IChjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0VW5yYXRlZEFwcG9pbnRtZW50KGNhbGxiYWNrKSksXG4gICAgICAgIGNsb3NlQXBwb2ludG1lbnRSYXRpbmc6IChkb2N0b3JJZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGNsb3NlQXBwb2ludG1lbnRSYXRpbmcoZG9jdG9ySWQsIGNhbGxiYWNrKSksXG4gICAgICAgIGVkaXRVc2VyUHJvZmlsZTogKHByb2ZpbGVEYXRhLCBwcm9maWxlSWQsIGNiKSA9PiBkaXNwYXRjaChlZGl0VXNlclByb2ZpbGUocHJvZmlsZURhdGEsIHByb2ZpbGVJZCwgY2IpKSxcbiAgICAgICAgcmVzZXRQa2dDb21wYXJlOigpID0+IGRpc3BhdGNoKHJlc2V0UGtnQ29tcGFyZSgpKSxcbiAgICAgICAgZ2VuZXJhdGVWaXBDbHViTGVhZDooZGF0YSkgPT5kaXNwYXRjaChnZW5lcmF0ZVZpcENsdWJMZWFkKGRhdGEpKSxcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQm9va2luZyk7XG4iLCJcbmNvbnN0IENSSVRFTyA9IHtcblxuXHRzZW5kRGF0YShkYXRhICl7XG5cdFx0dHJ5e1xuXG5cdFx0XHRpZih3aW5kb3cpe1xuXHRcdFx0XG5cdFx0XHRcdHdpbmRvdy5jcml0ZW9fcSA9IHdpbmRvdy5jcml0ZW9fcSB8fCBbXVxuXHRcdFx0XHR2YXIgZGV2aWNlVHlwZSA9IG5hdmlnYXRvcj8vaVBhZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/IFwidFwiIDogL01vYmlsZXxpUChob25lfG9kKXxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGV8U2lsay8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/IFwibVwiIDogXCJkXCI6Jyc7XG5cblx0XHRcdFx0d2luZG93LmNyaXRlb19xLnB1c2goeyAnZXZlbnQnOiBcInNldEFjY291bnRcIiwgYWNjb3VudDogNTc0Mzl9LCAvLyBZb3Ugc2hvdWxkIG5ldmVyIHVwZGF0ZSB0aGlzIGxpbmVcblx0XHRcdFx0eydldmVudCc6IFwic2V0RW1haWxcIiwgJ2VtYWlsJzogJyd9LFxuXHRcdFx0XHR7ICdldmVudCc6IFwic2V0U2l0ZVR5cGVcIiwgdHlwZTogZGV2aWNlVHlwZX0sXG5cdFx0XHRcdGRhdGFcblx0XHRcdFx0KVxuXHRcdFx0fVxuXG5cdFx0fWNhdGNoKGUpe1xuXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENSSVRFTyIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9