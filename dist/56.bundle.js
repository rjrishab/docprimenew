(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

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

/***/ "./dev/js/components/diagnosis/booking/BookingView.js":
/*!************************************************************!*\
  !*** ./dev/js/components/diagnosis/booking/BookingView.js ***!
  \************************************************************/
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

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _testDetail = __webpack_require__(/*! ./testDetail */ "./dev/js/components/diagnosis/booking/testDetail/index.js");

var _testDetail2 = _interopRequireDefault(_testDetail);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _RatingProfileCard = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingProfileCard.js */ "./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js");

var _RatingProfileCard2 = _interopRequireDefault(_RatingProfileCard);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _cancelPopup = __webpack_require__(/*! ./cancelPopup.js */ "./dev/js/components/diagnosis/booking/cancelPopup.js");

var _cancelPopup2 = _interopRequireDefault(_cancelPopup);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _criteo = __webpack_require__(/*! ../../../helpers/criteo.js */ "./dev/js/helpers/criteo.js");

var _criteo2 = _interopRequireDefault(_criteo);

var _WhatsAppOptinView = __webpack_require__(/*! ../../commons/WhatsAppOptin/WhatsAppOptinView.js */ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js");

var _WhatsAppOptinView2 = _interopRequireDefault(_WhatsAppOptinView);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

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

var BookingView = function (_React$Component) {
    _inherits(BookingView, _React$Component);

    function BookingView(props) {
        _classCallCheck(this, BookingView);

        var _this = _possibleConstructorReturn(this, (BookingView.__proto__ || Object.getPrototypeOf(BookingView)).call(this, props));

        _this.state = {
            showTestDetail: false,
            data: null,
            loading: true,
            showCancel: false,
            payment_success: _this.props.location.search.includes('payment_success'),
            hide_button: _this.props.location.search.includes('payment_success') || _this.props.location.search.includes('hide_button')
        };
        return _this;
    }

    _createClass(BookingView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var appointmentId = this.props.match.params.refId;

            if (this.props.rescheduleSlot && this.props.rescheduleSlot.selectedTestsTimeSlot && Object.values(this.props.rescheduleSlot.selectedTestsTimeSlot).length) {
                //On reshedule this function calls , to update the appointment status
                /*let tests = []
                Object.values(this.props.rescheduleSlot.selectedTestsTimeSlot).map((twp)=>{
                         let type = 3
                        if(twp.type=="radiology"){
                            type = 1
                        }else if(twp.type == "pathology"){
                            type = 2
                        }
                         tests.push({test: twp.test_id,type:type, start_date: twp.date, start_time: twp.time.value, is_home_pickup: twp.is_home_pickup })
                })*/
                var selectedTime = Object.values(this.props.rescheduleSlot.selectedTestsTimeSlot)[0];
                var start_date = selectedTime.date;
                var start_time = selectedTime.time.value;
                var appointmentData = { id: this.props.match.params.refId, status: 4, start_date: start_date, start_time: start_time
                    //multi_timings_enabled: true,

                };this.props.updateLabAppointment(appointmentData, function (err, data) {
                    if (data) {
                        _this2.setState({ data: data.data, loading: false });

                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Appointment reschedule success." });
                    } else {
                        _this2.props.getLabBookingSummary(_this2.props.match.params.refId, function (err, data) {
                            if (!err) {
                                _this2.setState({ data: data[0], loading: false });
                            } else {
                                _this2.setState({ data: null, loading: false });
                            }
                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Appointment reschedule failed." });
                        });
                    }

                    _this2.props.selectLabTimeSLot({ time: {} }, true);
                    _this2.props.getUpcomingAppointments();
                });
            } else {
                //get appoinment data 
                this.props.getLabBookingSummary(this.props.match.params.refId, function (err, data) {
                    if (!err) {
                        _this2.setState({ data: data[0], loading: false });

                        var info = {};
                        info[appointmentId] = [];
                        var mrp = 0;
                        var deal_price = 0;
                        if (data.length && data[0].lab_test) {
                            data[0].lab_test.map(function (test) {
                                mrp += parseInt(test.mrp);
                                deal_price += parseInt(test.deal_price);
                            });
                        }
                        info[appointmentId].push({ 'booking_id': appointmentId, 'mrp': mrp, 'deal_price': deal_price });
                        info = JSON.stringify(info);
                        var is_gold_user = false;
                        if (data && data.length && data[0].gold && Object.keys(data[0].gold).length) {
                            is_gold_user = data[0].gold.is_gold;
                        }
                        _storage2.default.setAppointmentDetails(info).then(function (setCookie) {

                            if (_this2.state.payment_success) {

                                var analyticData = {
                                    'Category': 'ConsumerApp', 'Action': 'LabAppointmentBooked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': appointmentId, 'event': 'lab-appointment-booked'
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
                                _this2.props.setCorporateCoupon(null);
                            }
                        });
                    } else {
                        _this2.setState({ data: null, loading: false });
                    }
                });
            }

            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'cancelAppointment',
        value: function cancelAppointment(cancelData) {
            var _this3 = this;

            this.setState({ loading: true, showCancel: false });
            var data = void 0;
            if (cancelData.cancelStatus) {

                data = {
                    'Category': 'ConsumerApp', 'Action': 'CancelLabAppointmentAndRefund', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'cancel-lab-appointment-Refund', 'appointmentId': this.state.data.id
                };
            } else {

                data = {
                    'Category': 'ConsumerApp', 'Action': 'CancelLabAppointmentAndBookNew', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'cancel-lab-appointment-Book-New', 'appointmentId': this.state.data.id
                };
            }

            _gtm2.default.sendEvent({ data: data });

            var appointmentData = { id: this.state.data.id, status: 6, refund: cancelData.cancelStatus, cancellation_comment: cancelData.cancelText, cancellation_reason: cancelData.cancelId };

            this.props.updateLabAppointment(appointmentData, function (err, data) {
                if (data) {
                    _this3.setState({ data: data, loading: false, showCancel: false });
                } else {
                    _this3.setState({ loading: false, showCancel: false });
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
        key: 'toogleTestDetails',
        value: function toogleTestDetails() {
            this.setState({ showTestDetail: !this.state.showTestDetail });
        }
    }, {
        key: 'goToSlotSelector',
        value: function goToSlotSelector(e) {
            e.preventDefault();
            e.stopPropagation();
            var test_ids = [];
            var p_pickup = 'home';
            var r_pickup = 'lab';
            //if(this.state.selected_timings_type){}
            var test_type = 0;
            if (this.state.data.lab_test) {
                this.state.data.lab_test.map(function (test) {
                    test_ids.push(test.test_id);
                    test_type = test.test_type;
                });
            }
            this.props.selectLabTimeSLot({ time: {} }, true);
            var selected_timings_type = this.state.data && this.state.data.selected_timings_type == 'separate' ? 'seperately' : 'all';

            if (this.state.data) {
                if (this.state.data.is_home_pickup) {
                    if (test_type == 2) {
                        p_pickup = 'home';
                        r_pickup = 'lab';
                    } else if (test_type == 1) {
                        r_pickup = 'home';
                        p_pickup = 'lab';
                    }
                } else {
                    if (test_type == 2) {
                        p_pickup = 'lab';
                        r_pickup = 'lab';
                    } else if (test_type == 1) {
                        r_pickup = 'lab';
                        p_pickup = 'lab';
                    }
                }
            }

            if (this.state.data.lab && this.state.data.lab.is_thyrocare) {
                this.props.history.push('/lab/' + this.state.data.lab.id + '/timeslots?reschedule=true&type=' + (this.state.data.is_home_pickup ? 'home' : 'lab') + '&is_thyrocare=true&test_ids=' + test_ids + '&r_pickup=' + r_pickup + '&p_pickup=' + p_pickup);
            } else {
                this.props.history.push('/lab/' + this.state.data.lab.id + '/timeslots?reschedule=true&type=' + (this.state.data.is_home_pickup ? 'home' : 'lab') + '&is_thyrocare=false&test_ids=' + test_ids + '&r_pickup=' + r_pickup + '&p_pickup=' + p_pickup);
            }
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(where, e) {
            e.preventDefault();
            e.stopPropagation();
            this.props.history.push(where);
        }
    }, {
        key: 'goToBookingPage',
        value: function goToBookingPage() {
            var analyticData = {
                'Category': 'ConsumerApp', 'Action': 'RebookLabAppointmentClicked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': '', 'event': 'rebook-lab-appointment-clicked'
            };
            _gtm2.default.sendEvent({ data: analyticData });
            var criteria = {};
            var extraParams = {
                forceAddTestids: true,
                labId: this.state.data.lab.id,
                tests: this.state.data.lab_test
            };
            this.props.toggleDiagnosisCriteria('test', criteria, true, extraParams);
            this.props.history.push('/lab/' + this.state.data.lab.id + '/book');
        }
    }, {
        key: 'navigateToSBI',
        value: function navigateToSBI() {
            window.open('http://13.235.199.36/webcore/docprimecallback', '_blank');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var profile = {};
            var lab_test = [];
            var lab = {};
            var date = new Date();
            var actions = [];
            var status = 1;
            var lab_thumbnail = "";
            var reports = [];
            var is_thyrocare = null;
            var payment_type = void 0;
            var mrp = '';
            var deal_price = '';
            var discount = '';
            var effective_price = '';
            var paymentMode = '';

            if (this.state.data) {
                lab = this.state.data.lab;
                lab_test = this.state.data.lab_test;
                profile = this.state.data.profile;
                date = this.state.data.time_slot_start ? new Date(this.state.data.time_slot_start) : new Date();
                actions = this.state.data.allowed_action || [];
                status = this.state.data.status;
                lab_thumbnail = this.state.data.lab_thumbnail;
                reports = this.state.data.reports || [];
                is_thyrocare = this.state.data.lab ? this.state.data.lab.is_thyrocare : null;
                payment_type = this.state.data.payment_type;
                mrp = this.state.data.price;
                deal_price = this.state.data.deal_price;
                effective_price = this.state.data.effective_price;
            }
            var summar_utm_tag = "";
            if (this.state.data && this.props.summary_utm && this.props.summary_utm_validity) {
                if (new Date(this.props.summary_utm_validity) > new Date()) {
                    var src = 'https://cplcps.com/p.ashx?o=116216&e=4531&f=img&t=' + this.state.data.id;
                    summar_utm_tag = _react2.default.createElement('img', { src: src, width: '1', height: '1', border: '0' });
                }
            }

            if (payment_type == 2) {
                discount = mrp - deal_price;
            } else {
                discount = mrp - effective_price;
            }

            if (payment_type == 1) {
                paymentMode = 'Online';
            } else if (payment_type == 2) {
                paymentMode = 'Cash';
            } else if (payment_type == 3) {
                paymentMode = 'Insurance';
            } else if (payment_type == 4) {
                paymentMode = 'Docprime Care';
            }

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                summar_utm_tag,
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
                            !this.state.loading && this.state.data ? _react2.default.createElement(
                                'section',
                                { className: 'booking-confirm-screen' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid' },
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
                                            this.state.data.is_rated == false && this.state.data.status == 7 ? _react2.default.createElement(_RatingProfileCard2.default, _extends({}, this.props, { booking_flag: true, details: this.state.data })) : "",
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
                                                        'Share this code with lab at the time of your appointment'
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
                                                        'We are waiting for the confirmation from the lab and we will get back to you shortly.'
                                                    )
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
                                                        { className: 'fw-500 text-md mrb-10' },
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
                                                    actions.indexOf(6) > -1 && !this.state.hide_button && !is_thyrocare ? _react2.default.createElement(
                                                        'a',
                                                        { onClick: this.toggleCancel.bind(this), href: '#', className: 'text-primary fw-700 text-sm' },
                                                        'Cancel Booking'
                                                    ) : ""
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget  mrb-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content pb-details pb-location' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'wc-title text-md fw-700' },
                                                        lab.name
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'address-details clearfix' },
                                                        _react2.default.createElement(
                                                            _initialsPicture2.default,
                                                            { name: lab.name, has_image: !!lab_thumbnail, className: 'initialsPicture-ls', style: { float: 'right' }, onClick: this.navigateTo.bind(this, '/lab/' + lab.id) },
                                                            _react2.default.createElement('img', { className: 'fltr-usr-image-lab', style: { float: 'right', cursor: 'pointer' }, src: lab_thumbnail })
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'add-info fw-500' },
                                                            lab.address
                                                        )
                                                    ),
                                                    status == 6 || status == 7 ? _react2.default.createElement(
                                                        'button',
                                                        { className: 'rebook-btn', onClick: this.goToBookingPage.bind(this) },
                                                        'Rebook Appointment'
                                                    ) : ''
                                                )
                                            ),
                                            is_thyrocare ? _react2.default.createElement(
                                                'div',
                                                { className: 'thyroCallContainer' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'thyroContent' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'wc-title text-md fw-700' },
                                                        'Reschedule Appointment?'
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'If you want to reschedule or cancel appointment, contact us at  ',
                                                        _react2.default.createElement(
                                                            'a',
                                                            { href: 'tel:18001239419' },
                                                            '1800 123 9419'
                                                        )
                                                    )
                                                )
                                            ) : '',
                                            this.state.data.is_home_pickup ? _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrt-10' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content mrb-10' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'test-report' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'title' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                _react2.default.createElement('img', { className: 'visit-time-icon', src: "/assets" + "/img/icons/home-orange.svg", style: {
                                                                        width: 18, marginRight: 5, verticalAlign: -3
                                                                    } })
                                                            ),
                                                            'Sample Pickup Address'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'test-list fw-500', style: { width: '100%', wordWrap: 'break-word' } },
                                                            this.state.data.address
                                                        )
                                                    )
                                                )
                                            ) : "",
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
                                                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/clock.svg", className: 'visit-time-icon' })
                                                            ),
                                                            'Visit Time',
                                                            !is_thyrocare && actions.indexOf(4) > -1 /* && (new Date(date).getTime() > new Date().getTime()) */ ? _react2.default.createElement(
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
                                                            new Date(date).toDateString(),
                                                            ' | ',
                                                            new Date(date).toLocaleTimeString()
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrt-10' },
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
                                                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/test.svg", className: 'visit-time-icon' })
                                                            ),
                                                            'Tests ',
                                                            _react2.default.createElement('span', { className: 'float-right' })
                                                        ),
                                                        lab_test.map(function (test, i) {
                                                            return _react2.default.createElement(
                                                                'p',
                                                                { key: i, className: 'test-list fw-500' },
                                                                test.test.name
                                                            );
                                                        })
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrt-10 mrb-10' },
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
                                                                _react2.default.createElement('img', { className: 'visit-time-icon', src: "/assets" + "/img/icons/user.svg", style: {
                                                                        width: 14, marginRight: 5, verticalAlign: -3
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
                                                        discount && payment_type != 3 ? _react2.default.createElement(
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
                                                                parseInt(deal_price)
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
                                                { className: 'widget mrb-10', style: { marginTop: 10 } },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'my-profile-item', style: { cursor: 'auto' }, onClick: function onClick() {
                                                                _this4.props.history.push('/referral');
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
                                                                        ' 200'
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
                                reports && reports.length ? _react2.default.createElement(
                                    'button',
                                    { onClick: function onClick() {
                                            _this4.props.history.push('/user/lab/reports/' + _this4.state.data.id);
                                        }, className: 'viewpresbtn' },
                                    'View Reports'
                                ) : "",
                                this.state.data && this.state.data.appointment_via_sbi ? _react2.default.createElement(
                                    'div',
                                    { className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container ' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'v-btn-primary book-btn-mrgn-adjust ', onClick: function onClick() {
                                                _this4.navigateToSBI();
                                            } },
                                        'Go Back To SBIG Home'
                                    )
                                ) : ''
                            ) : _react2.default.createElement(_Loader2.default, null),
                            _react2.default.createElement(_testDetail2.default, { show: this.state.showTestDetail, toggle: this.toogleTestDetails.bind(this), lab_test: lab_test }),
                            this.state.showCancel ? _react2.default.createElement(_cancelPopup2.default, { toggle: this.toggleCancel.bind(this), cancelAppointment: this.cancelAppointment.bind(this), comments: this.state.data && this.state.data.cancellation_reason ? this.state.data.cancellation_reason : [], showCommentReasons: payment_type == 3 || payment_type == 2 ? true : false }) : ""
                        ),
                        _react2.default.createElement(_RightBar2.default, null)
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

/***/ "./dev/js/components/diagnosis/booking/cancelPopup.js":
/*!************************************************************!*\
  !*** ./dev/js/components/diagnosis/booking/cancelPopup.js ***!
  \************************************************************/
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
                                _react2.default.createElement('img', { style: { width: 10 }, src: "/assets" + "/img/customer-icons/close-black.svg", className: 'img-fluid' })
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
                                _react2.default.createElement('img', { style: { width: 10 }, src: "/assets" + "/img/customer-icons/close-black.svg", className: 'img-fluid' })
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

{/*
           <div className="widget cancel-appointment-div">
               <div className="widget-header text-center">
                   <p className="fw-500 cancel-appointment-head">Cancel Appointment</p>
                   <hr />
               </div>
               <a href="javascript:;">
                   <div className="widget-content cancel-content-div" onClick={() => {
                       cancelAppointment(0)
                   }}>
                       <p className="fw-500 cancel-appointment-head">Cancel and Rebook</p>
                       <p className="fw-500 cancel-content">Cancel the current appointment and book a new Appointment with other doctor</p>
                       <div className="cancel-right-arrow">
                           <img src={ASSETS_BASE_URL + "/img/customer-icons/arrow-forward-right.svg"} />
                       </div>
                   </div>
               </a>
               <hr />
               <a href="javascript:;">
                   <div className="widget-content cancel-content-div" onClick={() => {
                       cancelAppointment(1)
                   }}>
                       <p className="fw-500 cancel-appointment-head">Cancel and Refund</p>
                       <p className="fw-500 cancel-content">Cancel the appointment and get refund within 24 hours</p>
                       <div className="cancel-right-arrow">
                           <img src={ASSETS_BASE_URL + "/img/customer-icons/arrow-forward-right.svg"} />
                       </div>
                   </div>
               </a>
               <hr />
           </div>*/}
exports.default = CancelPopUp;

/***/ }),

/***/ "./dev/js/components/diagnosis/booking/testDetail/TestDetail.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/diagnosis/booking/testDetail/TestDetail.js ***!
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

var TestDetail = function (_React$Component) {
    _inherits(TestDetail, _React$Component);

    function TestDetail(props) {
        _classCallCheck(this, TestDetail);

        return _possibleConstructorReturn(this, (TestDetail.__proto__ || Object.getPrototypeOf(TestDetail)).call(this, props));
    }

    _createClass(TestDetail, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                null,
                this.props.show ? _react2.default.createElement(
                    "div",
                    { className: "overlay black", onClick: function onClick(e) {
                            _this2.props.toggle();
                        } },
                    _react2.default.createElement(
                        "div",
                        { className: "widget filter-popup scroll-y ht-500 info-popup", onClick: function onClick(e) {
                                e.preventDefault();
                                e.stopPropagation();
                            } },
                        _react2.default.createElement(
                            "div",
                            { className: "widget-header text-center" },
                            _react2.default.createElement(
                                "h4",
                                { className: "widget-title text-md fw-700" },
                                "Test Information"
                            ),
                            _react2.default.createElement(
                                "span",
                                { className: "close" },
                                _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/close-black.svg", className: "img-fluid" })
                            )
                        ),
                        this.props.lab_test.map(function (test, i) {
                            return _react2.default.createElement(
                                "div",
                                { className: "widget-content", key: i },
                                _react2.default.createElement(
                                    "h3",
                                    { className: "text-lg fw-700 mrb-10" },
                                    test.test.name
                                ),
                                _react2.default.createElement(
                                    "h4",
                                    { className: "fw-700 text-md mrb-10" },
                                    "Description"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    { className: "text-sm" },
                                    test.test.why
                                )
                            );
                        })
                    )
                ) : ""
            );
        }
    }]);

    return TestDetail;
}(_react2.default.Component);

exports.default = TestDetail;

/***/ }),

/***/ "./dev/js/components/diagnosis/booking/testDetail/index.js":
/*!*****************************************************************!*\
  !*** ./dev/js/components/diagnosis/booking/testDetail/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TestDetail = __webpack_require__(/*! ./TestDetail */ "./dev/js/components/diagnosis/booking/testDetail/TestDetail.js");

var _TestDetail2 = _interopRequireDefault(_TestDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TestDetail2.default;

/***/ }),

/***/ "./dev/js/containers/diagnosis/Booking.js":
/*!************************************************!*\
  !*** ./dev/js/containers/diagnosis/Booking.js ***!
  \************************************************/
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

var _BookingView = __webpack_require__(/*! ../../components/diagnosis/booking/BookingView.js */ "./dev/js/components/diagnosis/booking/BookingView.js");

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
            }
            this.props.resetPkgCompare();
            _fcm2.default.getPermission();
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_BookingView2.default, this.props);
        }
    }]);

    return Booking;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var rescheduleSlot = state.LAB_SEARCH.rescheduleSlot;
    var _state$USER = state.USER,
        summary_utm = _state$USER.summary_utm,
        summary_utm_validity = _state$USER.summary_utm_validity,
        newNotification = _state$USER.newNotification,
        notifications = _state$USER.notifications,
        rated_appoinments = _state$USER.rated_appoinments,
        profiles = _state$USER.profiles,
        selectedProfile = _state$USER.selectedProfile;


    return {
        rescheduleSlot: rescheduleSlot, newNotification: newNotification, notifications: notifications, rated_appoinments: rated_appoinments, profiles: profiles, selectedProfile: selectedProfile, summary_utm: summary_utm, summary_utm_validity: summary_utm_validity
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getUpcomingAppointments: function getUpcomingAppointments() {
            return dispatch((0, _index.getUpcomingAppointments)());
        },
        getLabBookingSummary: function getLabBookingSummary(appointmentID, callback) {
            return dispatch((0, _index.getLabBookingSummary)(appointmentID, callback));
        },
        updateLabAppointment: function updateLabAppointment(appointmentData, callback) {
            return dispatch((0, _index.updateLabAppointment)(appointmentData, callback));
        },
        selectLabTimeSLot: function selectLabTimeSLot(slot, reschedule) {
            return dispatch((0, _index.selectLabTimeSLot)(slot, reschedule));
        },
        retryPaymentLAB: function retryPaymentLAB(appointmentId, callback) {
            return dispatch((0, _index.retryPaymentLAB)(appointmentId, callback));
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
        setCorporateCoupon: function setCorporateCoupon(coupon) {
            return dispatch((0, _index.setCorporateCoupon)(coupon));
        },
        getCartItems: function getCartItems() {
            return dispatch((0, _index.getCartItems)());
        },
        editUserProfile: function editUserProfile(profileData, profileId, cb) {
            return dispatch((0, _index.editUserProfile)(profileData, profileId, cb));
        },
        resetPkgCompare: function resetPkgCompare() {
            return dispatch((0, _index.resetPkgCompare)());
        },
        clearVipSelectedPlan: function clearVipSelectedPlan() {
            return dispatch((0, _index.clearVipSelectedPlan)());
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, test, forceAdd, filters) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, test, forceAdd, filters));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9XaGF0c0FwcE9wdGluL1doYXRzQXBwT3B0aW5WaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ1Byb2ZpbGVDYXJkLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nL0Jvb2tpbmdWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nL2NhbmNlbFBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nL3Rlc3REZXRhaWwvVGVzdERldGFpbC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZy90ZXN0RGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2RpYWdub3Npcy9Cb29raW5nLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9oZWxwZXJzL2NyaXRlby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsIkxvYWRlciIsInByb3BzIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsIldoYXRzQXBwT3B0aW5WaWV3Iiwic3RhdGUiLCJ3aGF0c2FwcF9vcHRpbl9WaWV3IiwicHJvZmlsZXMiLCJ3aGF0c2FwcF9vcHRpbiIsImlzQXBwb2ludG1lbnQiLCJ3aGF0c2FwcF9pc19kZWNsaW5lZCIsImlzVXNlclByb2ZpbGUiLCJzdGF0dXMiLCJlIiwicHJvZmlsZURhdGEiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiZWRpdFVzZXJQcm9maWxlIiwiaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRTdGF0ZSIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJ0b2dnbGVXaGF0c2FwIiwic2hvdWxkUmVuZGVyIiwiQVNTRVRTX0JBU0VfVVJMIiwiYmluZCIsImZvbnRXZWlnaHQiLCJSYXRpbmdQcm9maWxlQ2FyZCIsImdldEFwcG9pbnRtZW50VHlwZSIsInR5cGUiLCJkZXRhaWxzIiwidGhhbllvdUJ1dHRvbiIsInJhdGluZ19kb25lIiwic3VibWl0UmF0aW5nIiwicG9zdF9kYXRhIiwiZmxhZyIsInVwZGF0ZUFwcG9pbnRtZW50UmF0aW5nIiwiZXJyIiwiYXBwb2ludG1lbnREYXRhIiwic2VsZWN0ZWRSYXRpbmciLCJyYXRpbmdfaWQiLCJjb21wbGltZW50cyIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJnZXRSYXRpbmdDb21wbGltZW50cyIsIngiLCJjcmVhdGVBcHBvaW50bWVudFJhdGluZyIsImNsb3NlQXBwb2ludG1lbnRSYXRpbmciLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiYXBwX2lkIiwic3VibWl0dGVkX2ZsYWciLCJyYXRlZF9hcHBvaW5tZW50cyIsInF1YWxpZmljYXRpb25fb2JqZWN0IiwiZG9jdG9yIiwicXVhbGlmaWNhdGlvbnMiLCJwaXBlIiwiZGF0YV9vYmoiLCJuYW1lIiwibGFiX25hbWUiLCJxdWFsaWZpY2F0aW9uIiwic3BlY2lhbGl6YXRpb24iLCJkb2N0b3JfdGh1bWJuYWlsIiwibGFiX3RodW1ibmFpbCIsImVudGl0eSIsIm1hcCIsImkiLCJzZWxlY3RSYXRpbmciLCJTVEFUVVNfTUFQIiwiQ1JFQVRFRCIsIkJPT0tFRCIsIlJFU0NIRURVTEVEX0RPQ1RPUiIsIlJFU0NIRURVTEVEX1BBVElFTlQiLCJBQ0NFUFRFRCIsIkNBTkNFTEVEIiwiQ09NUExFVEVEIiwiQm9va2luZ1ZpZXciLCJzaG93VGVzdERldGFpbCIsImxvYWRpbmciLCJzaG93Q2FuY2VsIiwicGF5bWVudF9zdWNjZXNzIiwibG9jYXRpb24iLCJzZWFyY2giLCJpbmNsdWRlcyIsImhpZGVfYnV0dG9uIiwiYXBwb2ludG1lbnRJZCIsIm1hdGNoIiwicGFyYW1zIiwicmVmSWQiLCJyZXNjaGVkdWxlU2xvdCIsInNlbGVjdGVkVGVzdHNUaW1lU2xvdCIsIk9iamVjdCIsInZhbHVlcyIsInNlbGVjdGVkVGltZSIsInN0YXJ0X2RhdGUiLCJkYXRlIiwic3RhcnRfdGltZSIsInRpbWUiLCJ2YWx1ZSIsInVwZGF0ZUxhYkFwcG9pbnRtZW50IiwiZ2V0TGFiQm9va2luZ1N1bW1hcnkiLCJzZWxlY3RMYWJUaW1lU0xvdCIsImdldFVwY29taW5nQXBwb2ludG1lbnRzIiwiaW5mbyIsIm1ycCIsImRlYWxfcHJpY2UiLCJsYWJfdGVzdCIsInRlc3QiLCJwYXJzZUludCIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5IiwiaXNfZ29sZF91c2VyIiwiZ29sZCIsImtleXMiLCJpc19nb2xkIiwic2V0QXBwb2ludG1lbnREZXRhaWxzIiwidGhlbiIsInNldENvb2tpZSIsImFuYWx5dGljRGF0YSIsInZpcEJvb2tlZERhdGEiLCJjcml0ZW9fZGF0YSIsIkNSSVRFTyIsInNlbmREYXRhIiwiaGlzdG9yeSIsInJlcGxhY2UiLCJwYXRobmFtZSIsInNldENvcnBvcmF0ZUNvdXBvbiIsIndpbmRvdyIsInNjcm9sbFRvIiwiY2FuY2VsRGF0YSIsImNhbmNlbFN0YXR1cyIsInJlZnVuZCIsImNhbmNlbGxhdGlvbl9jb21tZW50IiwiY2FuY2VsVGV4dCIsImNhbmNlbGxhdGlvbl9yZWFzb24iLCJjYW5jZWxJZCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGVzdF9pZHMiLCJwX3BpY2t1cCIsInJfcGlja3VwIiwidGVzdF90eXBlIiwidGVzdF9pZCIsInNlbGVjdGVkX3RpbWluZ3NfdHlwZSIsImlzX2hvbWVfcGlja3VwIiwibGFiIiwiaXNfdGh5cm9jYXJlIiwid2hlcmUiLCJjcml0ZXJpYSIsImV4dHJhUGFyYW1zIiwiZm9yY2VBZGRUZXN0aWRzIiwibGFiSWQiLCJ0ZXN0cyIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwib3BlbiIsInByb2ZpbGUiLCJEYXRlIiwiYWN0aW9ucyIsInJlcG9ydHMiLCJwYXltZW50X3R5cGUiLCJkaXNjb3VudCIsImVmZmVjdGl2ZV9wcmljZSIsInBheW1lbnRNb2RlIiwidGltZV9zbG90X3N0YXJ0IiwiYWxsb3dlZF9hY3Rpb24iLCJwcmljZSIsInN1bW1hcl91dG1fdGFnIiwic3VtbWFyeV91dG0iLCJzdW1tYXJ5X3V0bV92YWxpZGl0eSIsInNyYyIsInRleHRBbGlnbiIsImlzX3JhdGVkIiwib3RwIiwiaW5kZXhPZiIsInRvZ2dsZUNhbmNlbCIsImZsb2F0IiwibmF2aWdhdGVUbyIsImN1cnNvciIsImFkZHJlc3MiLCJnb1RvQm9va2luZ1BhZ2UiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwidmVydGljYWxBbGlnbiIsIndvcmRXcmFwIiwiZ29Ub1Nsb3RTZWxlY3RvciIsInRvRGF0ZVN0cmluZyIsInRvTG9jYWxlVGltZVN0cmluZyIsInBob25lX251bWJlciIsImVtYWlsIiwicGFkZGluZ1RvcCIsImJveFNpemluZyIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJhcHBvaW50bWVudF92aWFfc2JpIiwibmF2aWdhdGVUb1NCSSIsInRvb2dsZVRlc3REZXRhaWxzIiwiY2FuY2VsQXBwb2ludG1lbnQiLCJDYW5jZWxQb3BVcCIsInNob3dDb21tZW50UmVhc29ucyIsInNlbGVjdGVkQ2FuY2VsUmVhc29uSWQiLCJvdGhlclJlYXNvbiIsImNvbW1lbnRzIiwiZmlsdGVyIiwic2V0VGltZW91dCIsImlzX2NvbW1lbnRfbmVlZGVkIiwidGFyZ2V0Iiwib3RoZXJUeXBlIiwidG9nZ2xlIiwicmVhc29ucyIsImtleSIsImhhbmRsZUlucHV0SGFuZGxlciIsInN1Ym1pdENsaWNrZWQiLCJUZXN0RGV0YWlsIiwid2h5IiwiQm9va2luZyIsImdldENhcnRJdGVtcyIsInJlc2V0UGtnQ29tcGFyZSIsIkZDTSIsImdldFBlcm1pc3Npb24iLCJtYXBTdGF0ZVRvUHJvcHMiLCJMQUJfU0VBUkNIIiwiVVNFUiIsIm5ld05vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbnMiLCJzZWxlY3RlZFByb2ZpbGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFwcG9pbnRtZW50SUQiLCJjYWxsYmFjayIsInNsb3QiLCJyZXNjaGVkdWxlIiwicmV0cnlQYXltZW50TEFCIiwicmF0aW5nRGF0YSIsImNsb3NlQXBwb2ludG1lbnRQb3BVcCIsImNvdXBvbiIsInByb2ZpbGVJZCIsImNiIiwiY2xlYXJWaXBTZWxlY3RlZFBsYW4iLCJmb3JjZUFkZCIsImZpbHRlcnMiLCJjcml0ZW9fcSIsImRldmljZVR5cGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJhY2NvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFDZSxnQkFBZTtBQUFBLFFBQVpBLEtBQVksUUFBWkEsS0FBWTs7QUFDN0IsV0FBUTtBQUFBO0FBQUEsVUFBSyw2QkFBMEJBLFFBQU0sa0JBQU4sR0FBeUIsRUFBbkQsQ0FBTDtBQUNPO0FBQUE7QUFBQSxjQUFHLFdBQVUsZUFBYixFQUE2QixPQUFP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QTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNGO0FBQ1Y7QUFDRjtBQUNNO0FBQ0Y7QUFDSjtBQUNGO0FBQ0k7QUFDRjtBQUNjO0FBQ0Y7QUFDVjtBQUNGO0FBQ2M7QUFDRjtBQUNKO0FBQ0Y7QUFDSSIsImZpbGUiOiI1Ni5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5leHBvcnQgZGVmYXVsdCAoeyBpc1ZpcCB9KSA9PiB7XG5cdHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Bkc2NsbWVyLWZ0ciAke2lzVmlwPydtYXJnaW4tYm90dG9tLTU1JzonJ31gfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTIwXCIgc3R5bGU9e3sgY29sb3I6ICcjOGE4YThhJywgZm9udFNpemU6IDEwIH19ID5UaGUgV2Vic2l0ZSBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiBjYXNlIG9mIGEgbWVkaWNhbCBlbWVyZ2VuY3kgYW5kLyBvciBjcml0aWNhbCBjYXJlIGFuZCB0aGUgdXNlciBzaG91bGQgZGlyZWN0bHkgY29udGFjdCBoaXMvIGhlciBtZWRpY2FsIHNlcnZpY2UgcHJvdmlkZXIgZm9yIFBoeXNpY2FsIEV4YW1pbmF0aW9uLiBEb2NwcmltZSBpcyBzb2xlbHkgYSB0ZWNobm9sb2d5IHBhcnRuZXIuPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZvb3Rlci1uZXctY29weXJnaHRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1IH19ID5cbiAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUuY29tIENvcHlyaWdodCAmY29weTsgMjAyMC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5ET0NQUklNRSBURUNITk9MT0dJRVMgUFJJVkFURSBMSU1JVEVEPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5DSU4gOiBVNzQ5OTlIUjIwMTZQVEMwNjQzMTI8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIFdoYXRzQXBwT3B0aW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgd2hhdHNhcHBfb3B0aW5fVmlldzp0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRSZW5kZXIoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wcm9maWxlcyl7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlcy53aGF0c2FwcF9vcHRpbiAhPW51bGwpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuaXNBcHBvaW50bWVudCAmJiAhdGhpcy5wcm9wcy5wcm9maWxlcy53aGF0c2FwcF9vcHRpbiAmJiAhdGhpcy5wcm9wcy5wcm9maWxlcy53aGF0c2FwcF9pc19kZWNsaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMuaXNVc2VyUHJvZmlsZSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHRvZ2dsZVdoYXRzYXAoc3RhdHVzLGUpIHsgICAgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaXNBcHBvaW50bWVudCl7ICAgICAgXG4gICAgICAgICAgICBsZXQgcHJvZmlsZURhdGEgPSB7Li4udGhpcy5wcm9wcy5wcm9maWxlc31cbiAgICAgICAgICAgIGlmKHN0YXR1cyl7XG4gICAgICAgICAgICAgICAgcHJvZmlsZURhdGEud2hhdHNhcHBfb3B0aW4gPSB0cnVlXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIllvdSB3aGF0c0FwcCBub3RpZmljYXRpb25zIGhhcyBiZWVuIGVuYWJsZWQuXCJ9KSAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcHJvZmlsZURhdGEud2hhdHNhcHBfaXNfZGVjbGluZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcInlvdXIgd2hhdHNBcHAgbm90aWZpY2F0aW9ucyBoYXMgYmVlbiBkaXNhYmxlZC5cIn0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmVkaXRVc2VyUHJvZmlsZShwcm9maWxlRGF0YSwgcHJvZmlsZURhdGEuaWQgLCgpPT57XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2hhdHNhcHBDYXJkQ29udGFpbmVyJylbMF0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoYXRzYXBwX29wdGluX1ZpZXc6IHN0YXR1cyB9LCgpID0+e1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnV2hhdHNhcHRvZ2dsZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdXaGF0c2FwLXRvZ2dsZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVXaGF0c2FwKHN0YXR1cykgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5zaG91bGRSZW5kZXIoKSlcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0FwcG9pbnRtZW50P1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdHNhcHBDYXJkQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2EtbG9nby1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2EtbG9nby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUgd291bGQgbGlrZSB0byBzZW5kIHlvdSB1cGRhdGVzIHRocm91Z2ggd2hhdHNhcHA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbG93RGVjbGluZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWxsb3dCdG5zXCIgb25DbGljaz17dGhpcy50b2dnbGVXaGF0c2FwLmJpbmQodGhpcyx0cnVlKX0+QWxsb3c8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZWNsaW5lQnRuc1wiIHN0eWxlPXt7Y29sb3I6JyM3NTc1NzUnfX1vbkNsaWNrPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzLGZhbHNlKX0+RGVjbGluZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc2MDAnLCBmb250U2l6ZTogJzE0cHgnIH19PkVuYWJsZSA8c3BhbiBjbGFzc05hbWU9XCJzbS13dHNwLWltZ1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2EtbG9nby1zbS5wbmdcIn0gLz5XaGF0c0FwcDwvc3Bhbj4gbm90aWZpY2F0aW9uPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzLCF0aGlzLnN0YXRlLndoYXRzYXBwX29wdGluX1ZpZXcpfSBjaGVja2VkPXt0aGlzLnN0YXRlLndoYXRzYXBwX29wdGluX1ZpZXd9IC8+PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBXaGF0c0FwcE9wdGluVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IFJldmlld1BvcFVwIGZyb20gJy4vUmV2aWV3UG9wVXAnXG5pbXBvcnQgVGhhbmtZb3VQb3BVcCBmcm9tICcuL1RoYW5rWW91UG9wVXAnXG5cblxuY2xhc3MgUmF0aW5nUHJvZmlsZUNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICBzZWxlY3RlZFJhdGluZzogMCxcbiAgICAgICAgICAgIHJhdGluZ19pZDogbnVsbCxcbiAgICAgICAgICAgIGNvbXBsaW1lbnRzOiBbXSxcbiAgICAgICAgICAgIHJhdGluZ19kb25lOiBmYWxzZSxcbiAgICAgICAgICAgIGFwcG9pbnRtZW50RGF0YTpudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHRoaXMucHJvcHMuZGV0YWlscyB9KVxuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRSYXRpbmdDb21wbGltZW50cygoZXJyLCBjb21wbGltZW50cykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyICYmIGNvbXBsaW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wbGltZW50cyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RSYXRpbmcoeCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSYXRpbmc6IHggfSlcbiAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmdldEFwcG9pbnRtZW50VHlwZSgpO1xuICAgICAgICBsZXQgcG9zdF9kYXRhID0geyAncmF0aW5nJzogeCwgJ2FwcG9pbnRtZW50X2lkJzogdGhpcy5wcm9wcy5kZXRhaWxzLmlkLCAnYXBwb2ludG1lbnRfdHlwZSc6IHR5cGUgfTtcbiAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVBcHBvaW50bWVudFJhdGluZyhwb3N0X2RhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyICYmIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmF0aW5nX2lkOiBkYXRhLmlkIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGVjbGluZVJhdGluZyh0eXBlLCBpZCkge1xuICAgICAgICBsZXQgcG9zdF9kYXRhID0geyAnYXBwb2ludG1lbnRfaWQnOiBpZCwgJ2FwcG9pbnRtZW50X3R5cGUnOiB0eXBlIH07XG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2VBcHBvaW50bWVudFJhdGluZyhwb3N0X2RhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyICYmIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUG9wdXAgQ2xvc2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSlcbiAgICB9XG5cbiAgICBnZXRBcHBvaW50bWVudFR5cGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0eXBlID0gdGhpcy5wcm9wcy5kZXRhaWxzLnR5cGUgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnR5cGUgPT0gXCJsYWJcIiA/IDEgOiAyO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG5cblxuICAgIHRoYW5Zb3VCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYXRpbmdfZG9uZTogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBzdWJtaXRSYXRpbmcgPSAocG9zdF9kYXRhLCBmbGFnKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pXG4gICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVBcHBvaW50bWVudFJhdGluZyhwb3N0X2RhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBvaW50bWVudERhdGE6dGhpcy5zdGF0ZS5kYXRhLCBkYXRhOiBudWxsLCByYXRpbmdfZG9uZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJhdGluZ19kb25lICYmICgodGhpcy5zdGF0ZS5kYXRhID09IG51bGwpIHx8ICh0aGlzLnN0YXRlLmRhdGEgJiYgdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA9PSAwKSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoPFRoYW5rWW91UG9wVXAgey4uLnRoaXMucHJvcHN9IHN1Ym1pdD17dGhpcy50aGFuWW91QnV0dG9ufSBzZWxlY3RlZFJhdGluZz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZ30gYXBwb2ludG1lbnREYXRhPXt0aGlzLnN0YXRlLmFwcG9pbnRtZW50RGF0YX0vPik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFwcF9pZCA9IHRoaXMucHJvcHMuZGV0YWlscy5pZFxuICAgICAgICBsZXQgc3VibWl0dGVkX2ZsYWcgPSAhIXRoaXMucHJvcHMucmF0ZWRfYXBwb2lubWVudHNbYXBwX2lkXTtcbiAgICAgICAgaWYgKCFzdWJtaXR0ZWRfZmxhZyAmJiB0aGlzLnN0YXRlLmRhdGEpIHtcbiAgICAgICAgICAgIGxldCBxdWFsaWZpY2F0aW9uX29iamVjdCA9IHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3IgPyB0aGlzLnByb3BzLmRldGFpbHMuZG9jdG9yLnF1YWxpZmljYXRpb25zIDogbnVsbDtcbiAgICAgICAgICAgIGxldCBwaXBlID0gJydcbiAgICAgICAgICAgIGxldCBkYXRhX29iaiA9IHtcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICh0aGlzLnByb3BzLmRldGFpbHMuZG9jdG9yKSA/IHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3IubmFtZSA6IHRoaXMucHJvcHMuZGV0YWlscy5sYWJfbmFtZSxcbiAgICAgICAgICAgICAgICAncXVhbGlmaWNhdGlvbic6IHF1YWxpZmljYXRpb25fb2JqZWN0ICYmIHF1YWxpZmljYXRpb25fb2JqZWN0Lmxlbmd0aCA/IHF1YWxpZmljYXRpb25fb2JqZWN0WzBdLnF1YWxpZmljYXRpb24gOiAnJyxcbiAgICAgICAgICAgICAgICAnc3BlY2lhbGl6YXRpb24nOiBxdWFsaWZpY2F0aW9uX29iamVjdCAmJiBxdWFsaWZpY2F0aW9uX29iamVjdC5sZW5ndGggPyBxdWFsaWZpY2F0aW9uX29iamVjdFswXS5zcGVjaWFsaXphdGlvbiA6ICcnLFxuICAgICAgICAgICAgICAgICd0eXBlJzogdGhpcy5nZXRBcHBvaW50bWVudFR5cGUoKSxcbiAgICAgICAgICAgICAgICAndGh1bWJuYWlsJzogdGhpcy5wcm9wcy5kZXRhaWxzLmRvY3RvciA/IHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3JfdGh1bWJuYWlsIDogdGhpcy5wcm9wcy5kZXRhaWxzLmxhYl90aHVtYm5haWwsXG4gICAgICAgICAgICAgICAgJ3BpcGUnOiBwaXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YV9vYmoudHlwZSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIGRhdGFfb2JqLnBpcGUgPSAnIHwgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBlbnRpdHkgPSAoZGF0YV9vYmoudHlwZSA9PSAxKSA/ICdsYWInIDogJ2RvY3Rvcic7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUucmF0aW5nX2lkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctdXBzaWRlLWNvbnRhaW5lciBtdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi11cHNpZGUtc3RhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJhdGUgeW91ciByZWNlbnQgdmlzaXQgd2l0aCB0aGUge2VudGl0eX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMSwgMiwgMywgNCwgNV0ubWFwKCh4LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBrZXk9e2l9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0UmF0aW5nLmJpbmQodGhpcywgeCl9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9cIiArICh0aGlzLnN0YXRlLnNlbGVjdGVkUmF0aW5nID4gMCAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkUmF0aW5nID49IHggPyBcIlwiIDogXCJ1blwiKSArIFwic2VsZWN0ZWQtc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPFJldmlld1BvcFVwIHsuLi50aGlzLnByb3BzfSBkZXRhaWxzPXt0aGlzLnN0YXRlLmRhdGF9IHN1Ym1pdD17dGhpcy5zdWJtaXRSYXRpbmd9IG9iaj17ZGF0YV9vYmp9IHJhdGluZ19pZD17dGhpcy5zdGF0ZS5yYXRpbmdfaWR9IHNlbGVjdGVkX3JhdGluZz17dGhpcy5zdGF0ZS5zZWxlY3RlZFJhdGluZ30gY29tcGxpbWVudHM9e3RoaXMuc3RhdGUuY29tcGxpbWVudHN9IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nUHJvZmlsZUNhcmQ7XG5cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5pbXBvcnQgVGVzdERldGFpbCBmcm9tICcuL3Rlc3REZXRhaWwnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IFJhdGluZ1Byb2ZpbGVDYXJkIGZyb20gJy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ1Byb2ZpbGVDYXJkLmpzJ1xuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENhbmNlbFBvcHVwIGZyb20gJy4vY2FuY2VsUG9wdXAuanMnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IENSSVRFTyBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2NyaXRlby5qcydcbmltcG9ydCBXaGF0c0FwcE9wdGluVmlldyBmcm9tICcuLi8uLi9jb21tb25zL1doYXRzQXBwT3B0aW4vV2hhdHNBcHBPcHRpblZpZXcuanMnXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY29uc3QgU1RBVFVTX01BUCA9IHtcbiAgICBDUkVBVEVEOiAxLFxuICAgIEJPT0tFRDogMixcbiAgICBSRVNDSEVEVUxFRF9ET0NUT1I6IDMsXG4gICAgUkVTQ0hFRFVMRURfUEFUSUVOVDogNCxcbiAgICBBQ0NFUFRFRDogNSxcbiAgICBDQU5DRUxFRDogNixcbiAgICBDT01QTEVURUQ6IDcsXG59XG5cblxuY2xhc3MgQm9va2luZ1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd1Rlc3REZXRhaWw6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgIHBheW1lbnRfc3VjY2VzczogdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ3BheW1lbnRfc3VjY2VzcycpLFxuICAgICAgICAgICAgaGlkZV9idXR0b246IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdwYXltZW50X3N1Y2Nlc3MnKSB8fCB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnaGlkZV9idXR0b24nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICAgICAgbGV0IGFwcG9pbnRtZW50SWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZFxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJlc2NoZWR1bGVTbG90ICYmIHRoaXMucHJvcHMucmVzY2hlZHVsZVNsb3Quc2VsZWN0ZWRUZXN0c1RpbWVTbG90ICYmIE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5yZXNjaGVkdWxlU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3QpLmxlbmd0aCkge1xuICAgICAgICAgICAvL09uIHJlc2hlZHVsZSB0aGlzIGZ1bmN0aW9uIGNhbGxzICwgdG8gdXBkYXRlIHRoZSBhcHBvaW50bWVudCBzdGF0dXNcbiAgICAgICAgICAgIC8qbGV0IHRlc3RzID0gW11cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5yZXNjaGVkdWxlU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3QpLm1hcCgodHdwKT0+e1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gM1xuICAgICAgICAgICAgICAgICAgICBpZih0d3AudHlwZT09XCJyYWRpb2xvZ3lcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gMVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0d3AudHlwZSA9PSBcInBhdGhvbG9neVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAyXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0ZXN0cy5wdXNoKHt0ZXN0OiB0d3AudGVzdF9pZCx0eXBlOnR5cGUsIHN0YXJ0X2RhdGU6IHR3cC5kYXRlLCBzdGFydF90aW1lOiB0d3AudGltZS52YWx1ZSwgaXNfaG9tZV9waWNrdXA6IHR3cC5pc19ob21lX3BpY2t1cCB9KVxuICAgICAgICAgICAgfSkqL1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkVGltZSA9IE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5yZXNjaGVkdWxlU2xvdC5zZWxlY3RlZFRlc3RzVGltZVNsb3QpWzBdXG4gICAgICAgICAgICBsZXQgc3RhcnRfZGF0ZSA9IHNlbGVjdGVkVGltZS5kYXRlXG4gICAgICAgICAgICBsZXQgc3RhcnRfdGltZSA9IHNlbGVjdGVkVGltZS50aW1lLnZhbHVlXG4gICAgICAgICAgICBsZXQgYXBwb2ludG1lbnREYXRhID0geyBpZDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMucmVmSWQsIHN0YXR1czogNCwgc3RhcnRfZGF0ZSwgc3RhcnRfdGltZSB9XG4gICAgICAgICAgICAvL211bHRpX3RpbWluZ3NfZW5hYmxlZDogdHJ1ZSxcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVMYWJBcHBvaW50bWVudChhcHBvaW50bWVudERhdGEsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YS5kYXRhLCBsb2FkaW5nOiBmYWxzZSB9KVxuXG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJBcHBvaW50bWVudCByZXNjaGVkdWxlIHN1Y2Nlc3MuXCIgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRMYWJCb29raW5nU3VtbWFyeSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YVswXSwgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwsIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQXBwb2ludG1lbnQgcmVzY2hlZHVsZSBmYWlsZWQuXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJUaW1lU0xvdCh7IHRpbWU6IHt9IH0sIHRydWUpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVcGNvbWluZ0FwcG9pbnRtZW50cygpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9nZXQgYXBwb2lubWVudCBkYXRhIFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRMYWJCb29raW5nU3VtbWFyeSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5yZWZJZCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhWzBdLCBsb2FkaW5nOiBmYWxzZSB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmZvID0ge31cbiAgICAgICAgICAgICAgICAgICAgaW5mb1thcHBvaW50bWVudElkXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGxldCBtcnAgPSAwXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWFsX3ByaWNlID0gMFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggJiYgZGF0YVswXS5sYWJfdGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVswXS5sYWJfdGVzdC5tYXAoKHRlc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcnAgKz0gcGFyc2VJbnQodGVzdC5tcnApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZSArPSBwYXJzZUludCh0ZXN0LmRlYWxfcHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZm9bYXBwb2ludG1lbnRJZF0ucHVzaCh7ICdib29raW5nX2lkJzogYXBwb2ludG1lbnRJZCwgJ21ycCc6IG1ycCwgJ2RlYWxfcHJpY2UnOiBkZWFsX3ByaWNlIH0pXG4gICAgICAgICAgICAgICAgICAgIGluZm8gPSBKU09OLnN0cmluZ2lmeShpbmZvKVxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNfZ29sZF91c2VyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEgJiYgZGF0YS5sZW5ndGggJiYgZGF0YVswXS5nb2xkICYmIE9iamVjdC5rZXlzKGRhdGFbMF0uZ29sZCkubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19nb2xkX3VzZXIgPSBkYXRhWzBdLmdvbGQuaXNfZ29sZCBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5zZXRBcHBvaW50bWVudERldGFpbHMoaW5mbykudGhlbigoc2V0Q29va2llKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnBheW1lbnRfc3VjY2Vzcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuYWx5dGljRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJBcHBvaW50bWVudEJvb2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogYXBwb2ludG1lbnRJZCwgJ2V2ZW50JzogJ2xhYi1hcHBvaW50bWVudC1ib29rZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGFuYWx5dGljRGF0YSB9LCB0cnVlLCBmYWxzZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzX2dvbGRfdXNlcil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aXBCb29rZWREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd2aXBib29rZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXBib29rZWQnLCAndXNlcl9pZCc6IEdUTS5nZXRVc2VySWQoKSwgJ2lzX3NpbmdsZV9mbG93Jzp0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IHZpcEJvb2tlZERhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNyaXRlb19kYXRhID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6IFwidHJhY2tUcmFuc2FjdGlvblwiLCAnaWQnOiBhcHBvaW50bWVudElkLCAnaXRlbSc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgJ2lkJzogXCIxXCIsICdwcmljZSc6IGRhdGEubGVuZ3RoID8gZGF0YVswXS5kZWFsX3ByaWNlIDogJycsICdxdWFudGl0eSc6IDEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JJVEVPLnNlbmREYXRhKGNyaXRlb19kYXRhKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSArIFwiP2hpZGVfYnV0dG9uPXRydWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldENvcnBvcmF0ZUNvdXBvbihudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbmNlbEFwcG9pbnRtZW50KGNhbmNlbERhdGEpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIHNob3dDYW5jZWw6IGZhbHNlIH0pXG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICBpZiAoY2FuY2VsRGF0YS5jYW5jZWxTdGF0dXMpIHtcblxuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NhbmNlbExhYkFwcG9pbnRtZW50QW5kUmVmdW5kJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2FuY2VsLWxhYi1hcHBvaW50bWVudC1SZWZ1bmQnLCAnYXBwb2ludG1lbnRJZCc6IHRoaXMuc3RhdGUuZGF0YS5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ2FuY2VsTGFiQXBwb2ludG1lbnRBbmRCb29rTmV3JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2FuY2VsLWxhYi1hcHBvaW50bWVudC1Cb29rLU5ldycsICdhcHBvaW50bWVudElkJzogdGhpcy5zdGF0ZS5kYXRhLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG5cbiAgICAgICAgbGV0IGFwcG9pbnRtZW50RGF0YSA9IHsgaWQ6IHRoaXMuc3RhdGUuZGF0YS5pZCwgc3RhdHVzOiA2LCByZWZ1bmQ6IGNhbmNlbERhdGEuY2FuY2VsU3RhdHVzLCBjYW5jZWxsYXRpb25fY29tbWVudDogY2FuY2VsRGF0YS5jYW5jZWxUZXh0LCBjYW5jZWxsYXRpb25fcmVhc29uOiBjYW5jZWxEYXRhLmNhbmNlbElkIH1cblxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUxhYkFwcG9pbnRtZW50KGFwcG9pbnRtZW50RGF0YSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSwgbG9hZGluZzogZmFsc2UsIHNob3dDYW5jZWw6IGZhbHNlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgc2hvd0NhbmNlbDogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVDYW5jZWwoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NhbmNlbDogIXRoaXMuc3RhdGUuc2hvd0NhbmNlbCB9KVxuICAgIH1cblxuICAgIHRvb2dsZVRlc3REZXRhaWxzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1Rlc3REZXRhaWw6ICF0aGlzLnN0YXRlLnNob3dUZXN0RGV0YWlsIH0pXG4gICAgfVxuXG4gICAgZ29Ub1Nsb3RTZWxlY3RvcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCB0ZXN0X2lkcyA9IFtdXG4gICAgICAgIGxldCBwX3BpY2t1cCA9ICdob21lJ1xuICAgICAgICBsZXQgcl9waWNrdXAgPSAnbGFiJ1xuICAgICAgICAvL2lmKHRoaXMuc3RhdGUuc2VsZWN0ZWRfdGltaW5nc190eXBlKXt9XG4gICAgICAgIGxldCB0ZXN0X3R5cGUgPSAwXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGEubGFiX3Rlc3QpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YS5sYWJfdGVzdC5tYXAoKHRlc3QpID0+IHtcbiAgICAgICAgICAgICAgICB0ZXN0X2lkcy5wdXNoKHRlc3QudGVzdF9pZClcbiAgICAgICAgICAgICAgICB0ZXN0X3R5cGUgPSB0ZXN0LnRlc3RfdHlwZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYlRpbWVTTG90KHsgdGltZToge30gfSwgdHJ1ZSlcbiAgICAgICAgbGV0IHNlbGVjdGVkX3RpbWluZ3NfdHlwZSA9IHRoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnN0YXRlLmRhdGEuc2VsZWN0ZWRfdGltaW5nc190eXBlID09ICdzZXBhcmF0ZScgPyAnc2VwZXJhdGVseScgOiAnYWxsJ1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGEuaXNfaG9tZV9waWNrdXApIHtcbiAgICAgICAgICAgICAgICBpZiAodGVzdF90eXBlID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcF9waWNrdXAgPSAnaG9tZSdcbiAgICAgICAgICAgICAgICAgICAgcl9waWNrdXAgPSAnbGFiJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGVzdF90eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcl9waWNrdXAgPSAnaG9tZSdcbiAgICAgICAgICAgICAgICAgICAgcF9waWNrdXAgPSAnbGFiJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3RfdHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHBfcGlja3VwID0gJ2xhYidcbiAgICAgICAgICAgICAgICAgICAgcl9waWNrdXAgPSAnbGFiJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGVzdF90eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcl9waWNrdXAgPSAnbGFiJ1xuICAgICAgICAgICAgICAgICAgICBwX3BpY2t1cCA9ICdsYWInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YS5sYWIgJiYgdGhpcy5zdGF0ZS5kYXRhLmxhYi5pc190aHlyb2NhcmUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7dGhpcy5zdGF0ZS5kYXRhLmxhYi5pZH0vdGltZXNsb3RzP3Jlc2NoZWR1bGU9dHJ1ZSZ0eXBlPSR7dGhpcy5zdGF0ZS5kYXRhLmlzX2hvbWVfcGlja3VwID8gJ2hvbWUnIDogJ2xhYid9JmlzX3RoeXJvY2FyZT10cnVlJnRlc3RfaWRzPSR7dGVzdF9pZHN9JnJfcGlja3VwPSR7cl9waWNrdXB9JnBfcGlja3VwPSR7cF9waWNrdXB9YClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7dGhpcy5zdGF0ZS5kYXRhLmxhYi5pZH0vdGltZXNsb3RzP3Jlc2NoZWR1bGU9dHJ1ZSZ0eXBlPSR7dGhpcy5zdGF0ZS5kYXRhLmlzX2hvbWVfcGlja3VwID8gJ2hvbWUnIDogJ2xhYid9JmlzX3RoeXJvY2FyZT1mYWxzZSZ0ZXN0X2lkcz0ke3Rlc3RfaWRzfSZyX3BpY2t1cD0ke3JfcGlja3VwfSZwX3BpY2t1cD0ke3BfcGlja3VwfWApXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG5hdmlnYXRlVG8od2hlcmUsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUpXG4gICAgfVxuXG4gICAgZ29Ub0Jvb2tpbmdQYWdlKCkge1xuICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdSZWJvb2tMYWJBcHBvaW50bWVudENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6ICcnLCAnZXZlbnQnOiAncmVib29rLWxhYi1hcHBvaW50bWVudC1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgbGV0IGNyaXRlcmlhID0ge31cbiAgICAgICAgbGV0IGV4dHJhUGFyYW1zID0ge1xuICAgICAgICAgICAgZm9yY2VBZGRUZXN0aWRzOiB0cnVlLFxuICAgICAgICAgICAgbGFiSWQ6IHRoaXMuc3RhdGUuZGF0YS5sYWIuaWQsXG4gICAgICAgICAgICB0ZXN0czogdGhpcy5zdGF0ZS5kYXRhLmxhYl90ZXN0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIGNyaXRlcmlhLCB0cnVlLCBleHRyYVBhcmFtcylcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvJHt0aGlzLnN0YXRlLmRhdGEubGFiLmlkfS9ib29rYClcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvU0JJKCl7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwOi8vMTMuMjM1LjE5OS4zNi93ZWJjb3JlL2RvY3ByaW1lY2FsbGJhY2snLCAnX2JsYW5rJylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBwcm9maWxlID0ge31cbiAgICAgICAgbGV0IGxhYl90ZXN0ID0gW11cbiAgICAgICAgbGV0IGxhYiA9IHt9XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXG4gICAgICAgIGxldCBzdGF0dXMgPSAxXG4gICAgICAgIGxldCBsYWJfdGh1bWJuYWlsID0gXCJcIlxuICAgICAgICBsZXQgcmVwb3J0cyA9IFtdXG4gICAgICAgIGxldCBpc190aHlyb2NhcmUgPSBudWxsXG4gICAgICAgIGxldCBwYXltZW50X3R5cGVcbiAgICAgICAgbGV0IG1ycCA9ICcnXG4gICAgICAgIGxldCBkZWFsX3ByaWNlID0gJydcbiAgICAgICAgbGV0IGRpc2NvdW50ID0gJydcbiAgICAgICAgbGV0IGVmZmVjdGl2ZV9wcmljZSA9ICcnXG4gICAgICAgIGxldCBwYXltZW50TW9kZSA9ICcnXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSkge1xuICAgICAgICAgICAgbGFiID0gdGhpcy5zdGF0ZS5kYXRhLmxhYlxuICAgICAgICAgICAgbGFiX3Rlc3QgPSB0aGlzLnN0YXRlLmRhdGEubGFiX3Rlc3RcbiAgICAgICAgICAgIHByb2ZpbGUgPSB0aGlzLnN0YXRlLmRhdGEucHJvZmlsZVxuICAgICAgICAgICAgZGF0ZSA9IHRoaXMuc3RhdGUuZGF0YS50aW1lX3Nsb3Rfc3RhcnQgPyBuZXcgRGF0ZSh0aGlzLnN0YXRlLmRhdGEudGltZV9zbG90X3N0YXJ0KSA6IG5ldyBEYXRlKClcbiAgICAgICAgICAgIGFjdGlvbnMgPSB0aGlzLnN0YXRlLmRhdGEuYWxsb3dlZF9hY3Rpb24gfHwgW11cbiAgICAgICAgICAgIHN0YXR1cyA9IHRoaXMuc3RhdGUuZGF0YS5zdGF0dXNcbiAgICAgICAgICAgIGxhYl90aHVtYm5haWwgPSB0aGlzLnN0YXRlLmRhdGEubGFiX3RodW1ibmFpbFxuICAgICAgICAgICAgcmVwb3J0cyA9IHRoaXMuc3RhdGUuZGF0YS5yZXBvcnRzIHx8IFtdXG4gICAgICAgICAgICBpc190aHlyb2NhcmUgPSB0aGlzLnN0YXRlLmRhdGEubGFiID8gdGhpcy5zdGF0ZS5kYXRhLmxhYi5pc190aHlyb2NhcmUgOiBudWxsXG4gICAgICAgICAgICBwYXltZW50X3R5cGUgPSB0aGlzLnN0YXRlLmRhdGEucGF5bWVudF90eXBlXG4gICAgICAgICAgICBtcnAgPSB0aGlzLnN0YXRlLmRhdGEucHJpY2VcbiAgICAgICAgICAgIGRlYWxfcHJpY2UgPSB0aGlzLnN0YXRlLmRhdGEuZGVhbF9wcmljZVxuICAgICAgICAgICAgZWZmZWN0aXZlX3ByaWNlID0gdGhpcy5zdGF0ZS5kYXRhLmVmZmVjdGl2ZV9wcmljZVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdW1tYXJfdXRtX3RhZyA9IFwiXCJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnByb3BzLnN1bW1hcnlfdXRtICYmIHRoaXMucHJvcHMuc3VtbWFyeV91dG1fdmFsaWRpdHkpIHtcbiAgICAgICAgICAgIGlmICgobmV3IERhdGUodGhpcy5wcm9wcy5zdW1tYXJ5X3V0bV92YWxpZGl0eSkpID4gKG5ldyBEYXRlKCkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNyYyA9IGBodHRwczovL2NwbGNwcy5jb20vcC5hc2h4P289MTE2MjE2JmU9NDUzMSZmPWltZyZ0PSR7dGhpcy5zdGF0ZS5kYXRhLmlkfWBcbiAgICAgICAgICAgICAgICBzdW1tYXJfdXRtX3RhZyA9IDxpbWcgc3JjPXtzcmN9IHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIiBib3JkZXI9XCIwXCIgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXltZW50X3R5cGUgPT0gMikge1xuICAgICAgICAgICAgZGlzY291bnQgPSBtcnAgLSBkZWFsX3ByaWNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNjb3VudCA9IG1ycCAtIGVmZmVjdGl2ZV9wcmljZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBheW1lbnRfdHlwZSA9PSAxKSB7XG4gICAgICAgICAgICBwYXltZW50TW9kZSA9ICdPbmxpbmUnXG4gICAgICAgIH0gZWxzZSBpZiAocGF5bWVudF90eXBlID09IDIpIHtcbiAgICAgICAgICAgIHBheW1lbnRNb2RlID0gJ0Nhc2gnXG4gICAgICAgIH0gZWxzZSBpZiAocGF5bWVudF90eXBlID09IDMpIHtcbiAgICAgICAgICAgIHBheW1lbnRNb2RlID0gJ0luc3VyYW5jZSdcbiAgICAgICAgfSBlbHNlIGlmIChwYXltZW50X3R5cGUgPT0gNCkge1xuICAgICAgICAgICAgcGF5bWVudE1vZGUgPSAnRG9jcHJpbWUgQ2FyZSdcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAge3N1bW1hcl91dG1fdGFnfVxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aGVhZGVyIGNsYXNzTmFtZT1cInNraW4tcHJpbWFyeSBmaXhlZCBob3Jpem9udGFsIHRvcCBzdGlja3ktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBiYWNrLWljb25cIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSkgfX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9iYWNrLXdoaXRlLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZ3LTcwMCBjYXBpdGFsaXplIHRleHQtd2hpdGVcIj5Zb3VyIEFwcG9pbnRtZW50PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1ob21lLWljb24tZGl2XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZG9jLXByaW1lLWxvZ28ucG5nXCJ9IGNsYXNzTmFtZT1cIm1vYmlsZS1ob21lLWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0IGZsb2F0LXJpZ2h0IHVzZXItbm90aWZpY2F0aW9uLWFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyJykgfX0+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIHRleHQtbWlkZGxlXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy91c2VyLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCB0ZXh0LW1pZGRsZSBub3RpZmljYXRpb24taWNvblwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbm90aWZpY2F0aW9uLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzLCAnL25vdGlmaWNhdGlvbnMnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmV3Tm90aWZpY2F0aW9uID4gMCA/IDxzcGFuIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1hbGVydFwiPnt0aGlzLnByb3BzLm5ld05vdGlmaWNhdGlvbn08L3NwYW4+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5zdGF0ZS5sb2FkaW5nICYmIHRoaXMuc3RhdGUuZGF0YSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9va2luZy1jb25maXJtLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaGF0c0FwcE9wdGluVmlldyB7Li4udGhpcy5wcm9wc30gcHJvZmlsZXM9e3Byb2ZpbGV9IGlzQXBwb2ludG1lbnQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLXRpbWVsaW5lIGJvb2stY29uZmlybWVkLXRpbWVsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9PSA2ID8gPGg0IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+QXBwb2ludG1lbnQgQ2FuY2VsbGVkPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0YXR1cyA9PSAxID8gPGg0IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+QXBwb2ludG1lbnQgQ3JlYXRlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsoc3RhdHVzIDw9IDUgfHwgc3RhdHVzID09IDcpID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmdy03MDAgdGV4dC1saWdodFwiPlJlY2VpdmVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eyhzdGF0dXMgPT0gNSB8fCBzdGF0dXMgPT0gNykgPyBcImFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+Mjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZ3LTcwMCB0ZXh0LWxpZ2h0XCI+Q29uZmlybWVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0YXR1cyA9PSA3ID8gXCJhY3RpdmVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmdy03MDAgdGV4dC1saWdodFwiPntzdGF0dXMgPT0gNiA/IFwiQ29tcGxldGVkXCIgOiBcIkNvbXBsZXRlZFwifTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLmlzX3JhdGVkID09IGZhbHNlICYmIHRoaXMuc3RhdGUuZGF0YS5zdGF0dXMgPT0gNyA/ICg8UmF0aW5nUHJvZmlsZUNhcmQgey4uLnRoaXMucHJvcHN9IGJvb2tpbmdfZmxhZz17dHJ1ZX0gZGV0YWlscz17dGhpcy5zdGF0ZS5kYXRhfSAvPikgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZGF0YS5vdHAgJiYgc3RhdHVzID09IDUpID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgbXJiLTEwXCI+VW5pcXVlIENvbmZpcm1hdGlvbiBDb2RlOiA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZFwiPnt0aGlzLnN0YXRlLmRhdGEub3RwfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWxpZ2h0XCI+U2hhcmUgdGhpcyBjb2RlIHdpdGggbGFiIGF0IHRoZSB0aW1lIG9mIHlvdXIgYXBwb2ludG1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXltZW50X3N1Y2Nlc3MgPyA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBtcmItMTBcIj48c3BhbiBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZFwiPlRoYW5rcyEgQXBwb2ludG1lbnQgUmVjZWl2ZWQ8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1saWdodFwiPldlIGFyZSB3YWl0aW5nIGZvciB0aGUgY29uZmlybWF0aW9uIGZyb20gdGhlIGxhYiBhbmQgd2Ugd2lsbCBnZXQgYmFjayB0byB5b3Ugc2hvcnRseS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBtcmItMTBcIj5Cb29raW5nIElEOiA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZFwiPnt0aGlzLnN0YXRlLmRhdGEuaWR9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1saWdodFwiPkRldGFpbHMgaGF2ZSBiZWVuIHNlbnQgdG8geW91ciBlbWFpbC1pZCBhbmQgbW9iaWxlIG51bWJlci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5pbmRleE9mKDYpID4gLTEgJiYgIXRoaXMuc3RhdGUuaGlkZV9idXR0b24gJiYgIWlzX3RoeXJvY2FyZSA/IDxhIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2FuY2VsLmJpbmQodGhpcyl9IGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+Q2FuY2VsIEJvb2tpbmc8L2E+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0ICBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYi1kZXRhaWxzIHBiLWxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2MtdGl0bGUgdGV4dC1tZCBmdy03MDBcIj57bGFiLm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzcy1kZXRhaWxzIGNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtsYWIubmFtZX0gaGFzX2ltYWdlPXshIWxhYl90aHVtYm5haWx9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1sc1wiIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0J319IG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMsIGAvbGFiLyR7bGFiLmlkfWApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbHRyLXVzci1pbWFnZS1sYWJcIiBzdHlsZT17eyBmbG9hdDoncmlnaHQnLGN1cnNvcjogJ3BvaW50ZXInIH19IHNyYz17bGFiX3RodW1ibmFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZC1pbmZvIGZ3LTUwMFwiPntsYWIuYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwicGItdmlldyB0ZXh0LWxlZnQgY2xlYXJmaXggbXJ0LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvP2FwaT0xJnF1ZXJ5PSR7bGFiLmxhdH0sJHtsYWIubG9uZ31gfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rLXRleHQgdGV4dC1tZCBmdy03MDAgbXJ0LTEwXCIgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JyB9fSA+VmlldyBpbiBHb29nbGUgTWFwPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT0ke2xhYi5sYXR9LCR7bGFiLmxvbmd9YH0gY2xhc3NOYW1lPVwibGluay10ZXh0IHRleHQtbWQgZnctNzAwXCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwLCBmbG9hdDogJ3JpZ2h0JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbWFwLWljb24ucG5nXCJ9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPT0gNiB8fCBzdGF0dXMgPT0gNyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVib29rLWJ0blwiIG9uQ2xpY2s9e3RoaXMuZ29Ub0Jvb2tpbmdQYWdlLmJpbmQodGhpcyl9PlJlYm9vayBBcHBvaW50bWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc190aHlyb2NhcmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHlyb0NhbGxDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoeXJvQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2MtdGl0bGUgdGV4dC1tZCBmdy03MDBcIj5SZXNjaGVkdWxlIEFwcG9pbnRtZW50PzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSB3YW50IHRvIHJlc2NoZWR1bGUgb3IgY2FuY2VsIGFwcG9pbnRtZW50LCBjb250YWN0IHVzIGF0ICA8YSBocmVmPVwidGVsOjE4MDAxMjM5NDE5XCI+MTgwMCAxMjMgOTQxOTwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLmlzX2hvbWVfcGlja3VwID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJ0LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1yZXBvcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+PHNwYW4+PGltZyBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9ob21lLW9yYW5nZS5zdmdcIn0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOCwgbWFyZ2luUmlnaHQ6IDUsIHZlcnRpY2FsQWxpZ246IC0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+PC9zcGFuPlNhbXBsZSBQaWNrdXAgQWRkcmVzczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlc3QtbGlzdCBmdy01MDBcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnIH19Pnt0aGlzLnN0YXRlLmRhdGEuYWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPjxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvY2suc3ZnXCJ9IGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIC8+PC9zcGFuPlZpc2l0IFRpbWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIWlzX3RoeXJvY2FyZSkgJiYgKGFjdGlvbnMuaW5kZXhPZig0KSA+IC0xKS8qICYmIChuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKCkgPiBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgKi8gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuZ29Ub1Nsb3RTZWxlY3Rvci5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTcwMCB0ZXh0LXNtXCI+UmVzY2hlZHVsZSBUaW1lPC9hPjwvc3Bhbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZS10aW1lIHRlc3QtbGlzdCBmdy01MDBcIj57bmV3IERhdGUoZGF0ZSkudG9EYXRlU3RyaW5nKCl9IHwge25ldyBEYXRlKGRhdGUpLnRvTG9jYWxlVGltZVN0cmluZygpfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEubGFiX3Rlc3QgJiYgdGhpcy5zdGF0ZS5kYXRhLmxhYl90ZXN0Lm1hcCgodGVzdCwga2V5KT0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZzdC1jb250ZW50LWJsXCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZzdC10c3QtbmFtZVwiPnt0ZXN0LnRlc3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlICYmIDxwIGNsYXNzTmFtZT1cInJkby10aW1lLXZzdFwiPntuZXcgRGF0ZShkYXRlKS50b0RhdGVTdHJpbmcoKX0gfCB7bmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXJlcG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPjxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdGVzdC5zdmdcIn0gY2xhc3NOYW1lPVwidmlzaXQtdGltZS1pY29uXCIgLz48L3NwYW4+VGVzdHMgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b29nbGVUZXN0RGV0YWlscygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy03MDAgdGV4dC1zbVwiPlZpZXcgRGV0YWlsczwvYT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYl90ZXN0Lm1hcCgodGVzdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17aX0gY2xhc3NOYW1lPVwidGVzdC1saXN0IGZ3LTUwMFwiPnt0ZXN0LnRlc3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcnQtMTAgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdC1yZXBvcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGVcIj48c3Bhbj48aW1nIGNsYXNzTmFtZT1cInZpc2l0LXRpbWUtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL3VzZXIuc3ZnXCJ9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNCwgbWFyZ2luUmlnaHQ6IDUsIHZlcnRpY2FsQWxpZ246IC0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz48L3NwYW4+UGF0aWVudCBEZXRhaWxzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXN0LWxpc3QgZnctNTAwXCI+e3Byb2ZpbGUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVzdC1saXN0IGZ3LTUwMFwiPntwcm9maWxlLnBob25lX251bWJlcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVzdC1saXN0IGZ3LTUwMFwiPntwcm9maWxlLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzICE9PSA2ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXJlcG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+PHNwYW4+PGltZyBjbGFzc05hbWU9XCJ2aXNpdC10aW1lLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ydXBlZWljb24ucG5nXCJ9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2LCBtYXJnaW5SaWdodDogNSwgdmVydGljYWxBbGlnbjogLTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+PC9zcGFuPlBheW1lbnQgRGV0YWlsPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X3R5cGUgPT0gMyA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6ICcjNzU3NTc1JywgcGFkZGluZ1RvcDogNCB9fT5NUlA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj4mIzgzNzc7IHtwYXJzZUludChtcnApfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnQgJiYgcGF5bWVudF90eXBlICE9IDMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5Eb2NwcmltZSBEaXNjb3VudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pi0gJiM4Mzc3OyB7cGFyc2VJbnQoZGlzY291bnQpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50X3R5cGUgPT0gMyA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPXt7IGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBtYXJnaW46ICcwIC0xMnB4IDEwcHggLTEycHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1yYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPkFtb3VudCBQYXlhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF90eXBlID09IDIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+JiM4Mzc3OyB7cGFyc2VJbnQoZGVhbF9wcmljZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+JiM4Mzc3OyB7cGFyc2VJbnQoZWZmZWN0aXZlX3ByaWNlKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1vZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlBheW1lbnQgTW9kZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPntwYXltZW50TW9kZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA8PSA1ID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbVwiIHN0eWxlPXt7IGN1cnNvcjogJ2F1dG8nIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9yZWZlcnJhbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNyLWR0bHMtb2ZmLWFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2MtdGl0bGUgdGV4dC1tZCBmdy03MDAgY2FyZC1ubS1vdnJscG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9yZWZlci5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkICBpbWctZi0xXCIgLz5SZWZlciAmYW1wOyBFYXJuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZnItaW1nLXR4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtaW1nLWNvbnRcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3N0ZXAtMi5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZyLWNvbnRudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFkZC1pbmZvIGZ3LTUwMCBhZGQtaW5mby1wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludml0ZSB5b3VyIGZyaWVuZHMgb24gZG9jcHJpbWUuY29tIGFuZCBlYXJuIDxiIGNsYXNzTmFtZT1cImZ3LTUwMCBkcmstYmxrXCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzhweCcsIG1hcmdpblRvcDogJzRweCcsIG1hcmdpblJpZ2h0OiAnMHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ydXBlZS1pY29uLnN2Z1wifSAvPiAyMDA8L2I+IG9uIGNvbXBsZXRpb24gb2YgdGhlaXIgZmlyc3Qgb3JkZXIgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJ0LTIwXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1kYXJrLS1hbGwpYCwgY3Vyc29yOiAncG9pbnRlcicgfX0+S25vdyBtb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBvcnRzICYmIHJlcG9ydHMubGVuZ3RoID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3VzZXIvbGFiL3JlcG9ydHMvJHt0aGlzLnN0YXRlLmRhdGEuaWR9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwidmlld3ByZXNidG5cIj5WaWV3IFJlcG9ydHM8L2J1dHRvbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5hcHBvaW50bWVudF92aWFfc2JpID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBzdGlja3ktYnRuIHAtMCB2LWJ0biAgYnRuLWxnIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgYnV0dG9ucy1hZGRjYXJ0LWNvbnRhaW5lciBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuLXByaW1hcnkgYm9vay1idG4tbXJnbi1hZGp1c3QgXCIgb25DbGljaz17KCkgPT4geyB0aGlzLm5hdmlnYXRlVG9TQkkoKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrIFRvIFNCSUcgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiA6IDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVzdERldGFpbCBzaG93PXt0aGlzLnN0YXRlLnNob3dUZXN0RGV0YWlsfSB0b2dnbGU9e3RoaXMudG9vZ2xlVGVzdERldGFpbHMuYmluZCh0aGlzKX0gbGFiX3Rlc3Q9e2xhYl90ZXN0fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dDYW5jZWwgPyA8Q2FuY2VsUG9wdXAgdG9nZ2xlPXt0aGlzLnRvZ2dsZUNhbmNlbC5iaW5kKHRoaXMpfSBjYW5jZWxBcHBvaW50bWVudD17dGhpcy5jYW5jZWxBcHBvaW50bWVudC5iaW5kKHRoaXMpfSBjb21tZW50cz17dGhpcy5zdGF0ZS5kYXRhICYmIHRoaXMuc3RhdGUuZGF0YS5jYW5jZWxsYXRpb25fcmVhc29uID8gdGhpcy5zdGF0ZS5kYXRhLmNhbmNlbGxhdGlvbl9yZWFzb24gOiBbXX0gc2hvd0NvbW1lbnRSZWFzb25zPXtwYXltZW50X3R5cGUgPT0gMyB8fCBwYXltZW50X3R5cGUgPT0gMiA/IHRydWUgOiBmYWxzZX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhci8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIENhbmNlbFBvcFVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICAgICAgICBzaG93Q29tbWVudFJlYXNvbnM6IHRoaXMucHJvcHMuc2hvd0NvbW1lbnRSZWFzb25zLFxuICAgICAgICAgICAgc2VsZWN0ZWRDYW5jZWxSZWFzb25JZDogJycsXG4gICAgICAgICAgICBjYW5jZWxUZXh0OiAnJyxcbiAgICAgICAgICAgIGNhbmNlbFN0YXR1czogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdENsaWNrZWQoZSl7XG4gICAgICAgIGxldCBvdGhlclJlYXNvbiA9IHRoaXMucHJvcHMuY29tbWVudHMuZmlsdGVyKHg9PnguaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENhbmNlbFJlYXNvbklkKVxuICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuc2VsZWN0ZWRDYW5jZWxSZWFzb25JZCl7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBzZWxlY3QgdmFsaWQgcmVhc29uXCIgfSlcbiAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICB9ZWxzZSBpZiggb3RoZXJSZWFzb24ubGVuZ3RoICYmIG90aGVyUmVhc29uWzBdLmlzX2NvbW1lbnRfbmVlZGVkICYmICF0aGlzLnN0YXRlLmNhbmNlbFRleHQgKXtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGVudGVyIGNvbW1lbnRcIiB9KVxuICAgICAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9ZWxzZXtcblxuICAgICAgICAgICAgaWYob3RoZXJSZWFzb24ubGVuZ3RoICYmIG90aGVyUmVhc29uWzBdLmlzX2NvbW1lbnRfbmVlZGVkKXtcbiAgICAgICAgICAgICAgICBvdGhlclJlYXNvbiA9IHRoaXMuc3RhdGUuY2FuY2VsVGV4dFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgb3RoZXJSZWFzb24gPSAnJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2FuY2VsRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiBvdGhlclJlYXNvbixcbiAgICAgICAgICAgICAgICBjYW5jZWxJZDogdGhpcy5zdGF0ZS5zZWxlY3RlZENhbmNlbFJlYXNvbklkLFxuICAgICAgICAgICAgICAgIGNhbmNlbFN0YXR1czogdGhpcy5zdGF0ZS5jYW5jZWxTdGF0dXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2FuY2VsQXBwb2ludG1lbnQoY2FuY2VsRGF0YSlcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0SGFuZGxlcihlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2FuY2VsVGV4dDogZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuXG4gICAgICAgIGxldCBvdGhlclR5cGUgPSB0aGlzLnByb3BzLmNvbW1lbnRzLmZpbHRlcih4PT54LmlkID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDYW5jZWxSZWFzb25JZClcbiAgICAgICAgaWYob3RoZXJUeXBlLmxlbmd0aCAmJiBvdGhlclR5cGVbMF0uaXNfY29tbWVudF9uZWVkZWQpe1xuICAgICAgICAgICAgb3RoZXJUeXBlID0gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG90aGVyVHlwZSA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93Q29tbWVudFJlYXNvbnM/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsUG9wdXBDb250YWluZXJPdmVybGF5XCIgb25DbGljaz17KGUpPT50aGlzLnByb3BzLnRvZ2dsZShlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbFBvcHVwQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtSGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UmVhc29uIGZvciBDYW5jZWxsYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNuLWJ0bi1oZWFkXCI+PGltZyBzdHlsZT17eyB3aWR0aDogMTAgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvc2UtYmxhY2suc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtd2lkLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tbWVudHMubWFwKChyZWFzb25zLCBrZXkpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17cmVhc29ucy5pZH0gY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCIgb25DbGljaz17KGUpPT57ZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZENhbmNlbFJlYXNvbklkOiByZWFzb25zLmlkfSkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUnLCBmb250U2l6ZTogJ2luaGVyaXQnIH19ID57cmVhc29ucy5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDYW5jZWxSZWFzb25JZCA9PSByZWFzb25zLmlkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyVHlwZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxhdGlvblJlc29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJXcml0ZSByZWFzb24gZm9yIGNhbmNlbGxhdGlvblwiIG9uQ2hhbmdlID17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVJbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gb25DbGljaz17KGUpPT57ZS5zdG9wUHJvcGFnYXRpb24oKX19IHZhbHVlPXt0aGlzLnN0YXRlLmNhbmNlbFRleHR9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxhdGlvbkJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9IHt0aGlzLnN1Ym1pdENsaWNrZWQuYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbFBvcHVwQ29udGFpbmVyT3ZlcmxheVwiIG9uQ2xpY2s9eyhlKT0+dGhpcy5wcm9wcy50b2dnbGUoZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxQb3B1cENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLUhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNhbmNlbCBBcHBvaW50bWVudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY24tYnRuLWhlYWRcIj48aW1nIHN0eWxlPXt7d2lkdGg6IDEwfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvc2UtYmxhY2suc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbmN0LXNlbGVjdC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7ZS5zdG9wUHJvcGFnYXRpb24oKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0NvbW1lbnRSZWFzb25zOiB0cnVlLCBjYW5jZWxTdGF0dXM6IDB9KSB9fT5DYW5jZWwgYW5kIFJlYm9vazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7ZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93Q29tbWVudFJlYXNvbnM6IHRydWUsIGNhbmNlbFN0YXR1czogMX0pIH19ID5DYW5jZWwgYW5kIFJlZnVuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgIH1cbn1cblxuey8qXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPkNhbmNlbCBBcHBvaW50bWVudDwvcD5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgY2FuY2VsLWNvbnRlbnQtZGl2XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBcHBvaW50bWVudCgwKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5DYW5jZWwgYW5kIFJlYm9vazwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1jb250ZW50XCI+Q2FuY2VsIHRoZSBjdXJyZW50IGFwcG9pbnRtZW50IGFuZCBib29rIGEgbmV3IEFwcG9pbnRtZW50IHdpdGggb3RoZXIgZG9jdG9yPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1yaWdodC1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9hcnJvdy1mb3J3YXJkLXJpZ2h0LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgY2FuY2VsLWNvbnRlbnQtZGl2XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxBcHBvaW50bWVudCgxKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5DYW5jZWwgYW5kIFJlZnVuZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1jb250ZW50XCI+Q2FuY2VsIHRoZSBhcHBvaW50bWVudCBhbmQgZ2V0IHJlZnVuZCB3aXRoaW4gMjQgaG91cnM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLXJpZ2h0LWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Fycm93LWZvcndhcmQtcmlnaHQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvZGl2PiovfVxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsUG9wVXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBUZXN0RGV0YWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNob3cgPyA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXkgYmxhY2tcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoKVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGZpbHRlci1wb3B1cCBzY3JvbGwteSBodC01MDAgaW5mby1wb3B1cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgdGV4dC1tZCBmdy03MDBcIj5UZXN0IEluZm9ybWF0aW9uPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Nsb3NlLWJsYWNrLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJfdGVzdC5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmdy03MDAgbXJiLTEwXCI+e3Rlc3QudGVzdC5uYW1lfTwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtbWQgbXJiLTEwXCI+RGVzY3JpcHRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57dGVzdC50ZXN0LndoeX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUZXN0RGV0YWlsXG4iLCJpbXBvcnQgVGVzdERldGFpbCBmcm9tICcuL1Rlc3REZXRhaWwnXG5cbmV4cG9ydCBkZWZhdWx0IFRlc3REZXRhaWwiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0Q2FydEl0ZW1zLCBnZXRVcGNvbWluZ0FwcG9pbnRtZW50cywgZ2V0TGFiQm9va2luZ1N1bW1hcnksIHVwZGF0ZUxhYkFwcG9pbnRtZW50LCBzZWxlY3RMYWJUaW1lU0xvdCwgcmV0cnlQYXltZW50TEFCLCBnZXRSYXRpbmdDb21wbGltZW50cywgY3JlYXRlQXBwb2ludG1lbnRSYXRpbmcsIHVwZGF0ZUFwcG9pbnRtZW50UmF0aW5nLCBjbG9zZUFwcG9pbnRtZW50UG9wVXAsIHNldENvcnBvcmF0ZUNvdXBvbiwgZWRpdFVzZXJQcm9maWxlLCByZXNldFBrZ0NvbXBhcmUsIGNsZWFyVmlwU2VsZWN0ZWRQbGFuLCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgQm9va2luZ1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFnbm9zaXMvYm9va2luZy9Cb29raW5nVmlldy5qcydcbmltcG9ydCBGQ00gZnJvbSAnLi4vLi4vaGVscGVycy9mY20nXG5cbmNsYXNzIEJvb2tpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRDYXJ0SXRlbXMoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMucmVzZXRQa2dDb21wYXJlKClcbiAgICAgICAgRkNNLmdldFBlcm1pc3Npb24oKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJvb2tpbmdWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgbGV0IHsgcmVzY2hlZHVsZVNsb3QgfSA9IHN0YXRlLkxBQl9TRUFSQ0hcblxuICAgIGxldCB7XG4gICAgICAgIHN1bW1hcnlfdXRtLCBzdW1tYXJ5X3V0bV92YWxpZGl0eSwgbmV3Tm90aWZpY2F0aW9uLCBub3RpZmljYXRpb25zLCByYXRlZF9hcHBvaW5tZW50cywgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZVxuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZXNjaGVkdWxlU2xvdCwgbmV3Tm90aWZpY2F0aW9uLCBub3RpZmljYXRpb25zLCByYXRlZF9hcHBvaW5tZW50cywgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZSwgc3VtbWFyeV91dG0sIHN1bW1hcnlfdXRtX3ZhbGlkaXR5XG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRVcGNvbWluZ0FwcG9pbnRtZW50czogKCkgPT4gZGlzcGF0Y2goZ2V0VXBjb21pbmdBcHBvaW50bWVudHMoKSksXG4gICAgICAgIGdldExhYkJvb2tpbmdTdW1tYXJ5OiAoYXBwb2ludG1lbnRJRCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldExhYkJvb2tpbmdTdW1tYXJ5KGFwcG9pbnRtZW50SUQsIGNhbGxiYWNrKSksXG4gICAgICAgIHVwZGF0ZUxhYkFwcG9pbnRtZW50OiAoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBkYXRlTGFiQXBwb2ludG1lbnQoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykpLFxuICAgICAgICBzZWxlY3RMYWJUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYlRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUpKSxcbiAgICAgICAgcmV0cnlQYXltZW50TEFCOiAoYXBwb2ludG1lbnRJZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKHJldHJ5UGF5bWVudExBQihhcHBvaW50bWVudElkLCBjYWxsYmFjaykpLFxuICAgICAgICBnZXRSYXRpbmdDb21wbGltZW50czogKGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRSYXRpbmdDb21wbGltZW50cyhjYWxsYmFjaykpLFxuICAgICAgICBjcmVhdGVBcHBvaW50bWVudFJhdGluZzogKGFwcG9pbnRtZW50RGF0YSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nKGFwcG9pbnRtZW50RGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgdXBkYXRlQXBwb2ludG1lbnRSYXRpbmc6IChyYXRpbmdEYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBkYXRlQXBwb2ludG1lbnRSYXRpbmcocmF0aW5nRGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgY2xvc2VBcHBvaW50bWVudFBvcFVwOiAoaWQsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChjbG9zZUFwcG9pbnRtZW50UG9wVXAoaWQsIGNhbGxiYWNrKSksXG4gICAgICAgIHNldENvcnBvcmF0ZUNvdXBvbjogKGNvdXBvbikgPT4gZGlzcGF0Y2goc2V0Q29ycG9yYXRlQ291cG9uKGNvdXBvbikpLFxuICAgICAgICBnZXRDYXJ0SXRlbXM6ICgpID0+IGRpc3BhdGNoKGdldENhcnRJdGVtcygpKSxcbiAgICAgICAgZWRpdFVzZXJQcm9maWxlOiAocHJvZmlsZURhdGEsIHByb2ZpbGVJZCwgY2IpID0+IGRpc3BhdGNoKGVkaXRVc2VyUHJvZmlsZShwcm9maWxlRGF0YSwgcHJvZmlsZUlkLCBjYikpLFxuICAgICAgICByZXNldFBrZ0NvbXBhcmU6ICgpID0+IGRpc3BhdGNoKHJlc2V0UGtnQ29tcGFyZSgpKSxcbiAgICAgICAgY2xlYXJWaXBTZWxlY3RlZFBsYW46KCkgPT5kaXNwYXRjaChjbGVhclZpcFNlbGVjdGVkUGxhbigpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCB0ZXN0LCBmb3JjZUFkZCwgZmlsdGVycykgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgdGVzdCwgZm9yY2VBZGQsIGZpbHRlcnMpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCb29raW5nKTtcbiIsIlxuY29uc3QgQ1JJVEVPID0ge1xuXG5cdHNlbmREYXRhKGRhdGEgKXtcblx0XHR0cnl7XG5cblx0XHRcdGlmKHdpbmRvdyl7XG5cdFx0XHRcblx0XHRcdFx0d2luZG93LmNyaXRlb19xID0gd2luZG93LmNyaXRlb19xIHx8IFtdXG5cdFx0XHRcdHZhciBkZXZpY2VUeXBlID0gbmF2aWdhdG9yPy9pUGFkLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gXCJ0XCIgOiAvTW9iaWxlfGlQKGhvbmV8b2QpfEFuZHJvaWR8QmxhY2tCZXJyeXxJRU1vYmlsZXxTaWxrLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gXCJtXCIgOiBcImRcIjonJztcblxuXHRcdFx0XHR3aW5kb3cuY3JpdGVvX3EucHVzaCh7ICdldmVudCc6IFwic2V0QWNjb3VudFwiLCBhY2NvdW50OiA1NzQzOX0sIC8vIFlvdSBzaG91bGQgbmV2ZXIgdXBkYXRlIHRoaXMgbGluZVxuXHRcdFx0XHR7J2V2ZW50JzogXCJzZXRFbWFpbFwiLCAnZW1haWwnOiAnJ30sXG5cdFx0XHRcdHsgJ2V2ZW50JzogXCJzZXRTaXRlVHlwZVwiLCB0eXBlOiBkZXZpY2VUeXBlfSxcblx0XHRcdFx0ZGF0YVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cblx0XHR9Y2F0Y2goZSl7XG5cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ1JJVEVPIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=