(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

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

/***/ "./dev/js/components/commons/userSignup/UserSignup.js":
/*!************************************************************!*\
  !*** ./dev/js/components/commons/userSignup/UserSignup.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "./node_modules/rc-calendar/es/index.js");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _WhatsAppOptinView = __webpack_require__(/*! ../../commons/WhatsAppOptin/WhatsAppOptinView.js */ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js");

var _WhatsAppOptinView2 = _interopRequireDefault(_WhatsAppOptinView);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _newDateSelector = __webpack_require__(/*! ../../commons/newDateSelector.js */ "./dev/js/components/commons/newDateSelector.js");

var _newDateSelector2 = _interopRequireDefault(_newDateSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");


var stepperStyle = {
    padding: 60,
    paddingBottom: 0,
    paddingTop: 10
};

var UserSignupView = function (_React$Component) {
    _inherits(UserSignupView, _React$Component);

    function UserSignupView(props) {
        _classCallCheck(this, UserSignupView);

        var _this = _possibleConstructorReturn(this, (UserSignupView.__proto__ || Object.getPrototypeOf(UserSignupView)).call(this, props));

        var existingUser = false;
        if (_this.props.location.search.includes('existing')) {
            // create profile scenario
            existingUser = true;
        }

        var parsed = queryString.parse(_this.props.location.search);

        _this.state = {
            name: '',
            age: '',
            gender: 'm',
            email: '',
            dob: '',
            formattedDate: '',
            phone_number: _this.props.phoneNumber || '',
            existingUser: existingUser,
            showMedical: false,
            err: "",
            referralCode: parsed.referral || null,
            have_referralCode: !!parsed.referral,
            dateModal: false,
            whatsapp_optin: true,
            isDobValidated: false,
            is_dob_error: false,
            primary_profile: {},
            add_to_gold: false,
            gold_user_profile: {},
            toUpdateState: true
        };
        return _this;
    }

    _createClass(UserSignupView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var default_profile = void 0;
            var gold_user_profile = {};
            if (this.props.USER && this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.defaultProfile && this.props.USER.profiles[this.props.USER.defaultProfile] && Object.keys(this.props.USER.profiles[this.props.USER.defaultProfile]).length > 0) {
                default_profile = this.props.USER.profiles[this.props.USER.defaultProfile];
                Object.entries(this.props.USER.profiles).map(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        value = _ref2[1];

                    if (!value.isDummyUser && value.is_vip_gold_member) {
                        gold_user_profile = value;
                    }
                });
                this.setState({ primary_profile: default_profile, gold_user_profile: gold_user_profile });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var default_profile = void 0;
            var gold_user_profile = {};
            if (this.props.USER && this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.defaultProfile && this.props.USER.profiles[this.props.USER.defaultProfile] && Object.keys(this.props.USER.profiles[this.props.USER.defaultProfile]).length > 0 && this.state.toUpdateState) {
                default_profile = this.props.USER.profiles[this.props.USER.defaultProfile];
                Object.entries(this.props.USER.profiles).map(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                        key = _ref4[0],
                        value = _ref4[1];

                    if (!value.isDummyUser && value.is_vip_gold_member) {
                        gold_user_profile = value;
                    }
                });
                this.setState({ primary_profile: default_profile, gold_user_profile: gold_user_profile, toUpdateState: false });
            }
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: 'toggleReferral',
        value: function toggleReferral(e) {
            this.setState({ have_referralCode: e.target.checked });
        }
    }, {
        key: 'toggleWhatsap',
        value: function toggleWhatsap(status, e) {
            this.setState({ whatsapp_optin: status });
        }
    }, {
        key: 'selectDateFromCalendar',
        value: function selectDateFromCalendar(date) {
            if (date) {
                date = date.toDate();
                var formattedDate = this.getFormattedDate(date);
                date = new Date(date).toISOString().split('T')[0];
                this.setState({ dob: date, formattedDate: formattedDate, dateModal: false });
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
            var today = dd + '-' + mm + '-' + yyyy;
            return today;
        }
    }, {
        key: 'openCalendar',
        value: function openCalendar() {
            this.setState({ dateModal: true });
        }
    }, {
        key: 'submitForm',
        value: function submitForm() {
            var _this2 = this;

            this.setState({ err: "" });
            // validate
            var register = true;
            Object.keys(this.refs).forEach(function (prp, i) {
                var validated = false;
                switch (_this2.refs[prp].name) {
                    case "name":
                        {
                            if (!_this2.refs[prp].value) {
                                validated = false;
                            } else {
                                validated = !/[^a-zA-Z ]/.test(_this2.refs[prp].value);
                            }
                            break;
                        }
                    // case "phone_number": {
                    //     if (!!this.refs[prp].value) {
                    //         validated = this.refs[prp].value.match(/^[56789]{1}[0-9]{9}$/)
                    //     } else {
                    //         validated = true
                    //     }
                    //     break
                    // }
                    case "email":
                        {
                            if (!_this2.refs[prp].value) {
                                validated = false;
                            } else {
                                validated = _this2.refs[prp].value.match(/\S+@\S+\.\S+/);
                            }
                            break;
                        }
                    /*case "dob": {
                        validated = this.state.isDobValidated
                        break
                    }*/
                    default:
                        {
                            validated = true;
                            break;
                        }
                }
                if (validated) {
                    _this2.refs[prp].style.border = '';
                } else {
                    _this2.refs[prp].style.border = '1px solid red';
                    register = false;
                }
            });
            if (this.state.dob == null && !this.state.isDobValidated) {
                register = false;
                this.setState({ is_dob_error: true });
            }
            if (this.state.dob != null && !this.state.isDobValidated) {
                register = false;
                this.setState({ is_dob_error: true });
            }
            if (register) {
                var post_data = this.state;
                if (this.state.referralCode && this.state.have_referralCode) {
                    post_data["referral_code"] = this.state.referralCode;
                }
                this.props.createProfile(post_data, function (err, res) {
                    if (!err) {
                        // this.props.resetVipData()
                        // this.setState({ showMedical: true })
                        var parsed = queryString.parse(_this2.props.location.search);
                        if (parsed.callback) {
                            _this2.props.history.replace(parsed.callback);
                        } else {
                            if (_this2.state.referralCode && _this2.state.have_referralCode) {
                                _this2.props.history.replace('/user');
                            } else {
                                _this2.props.history.go(-1);
                            }
                        }
                    } else {
                        var message = "Error signing up user.";
                        if (err.message) {
                            message = err.message;
                        }
                        _this2.setState({ err: message });
                    }
                });
            }
        }
    }, {
        key: 'handleEnterPress',
        value: function handleEnterPress(e) {
            if (e.key === 'Enter') {
                this.submitForm();
            }
        }
    }, {
        key: 'getNewDate',
        value: function getNewDate(type, newDate, isValidDob) {
            this.setState({ dob: newDate, isDobValidated: isValidDob });
        }
    }, {
        key: 'addToGold',
        value: function addToGold(value) {
            this.setState({ add_to_gold: value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

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
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        _react2.default.createElement(
                                            'section',
                                            { className: 'validation-book-screen' },
                                            !this.state.showMedical ? _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrng-top-12 mrb-15' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget-content' },
                                                    _react2.default.createElement(
                                                        'form',
                                                        { className: 'go-bottom' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'd-flex' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'label-names-buttons ' + (this.state.gender == 'm' ? 'btn-active' : ''), name: 'gender', checked: this.state.gender == 'm', onClick: function onClick() {
                                                                        return _this3.setState({ 'gender': 'm' });
                                                                    } },
                                                                'Male'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'label-names-buttons ' + (this.state.gender == 'f' ? 'btn-active' : ''), name: 'gender', checked: this.state.gender == 'f', onClick: function onClick() {
                                                                        return _this3.setState({ 'gender': 'f' });
                                                                    } },
                                                                'Female'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'labelWrap' },
                                                            _react2.default.createElement('input', { id: 'fname', name: 'name', type: 'text', value: this.state.name, onChange: this.inputHandler.bind(this), required: true, ref: 'name', onKeyPress: this.handleEnterPress.bind(this) }),
                                                            _react2.default.createElement(
                                                                'label',
                                                                { htmlFor: 'fname' },
                                                                this.state.existingUser ? "Member" : "Patient",
                                                                ' Name'
                                                            ),
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'text-xs text-light' },
                                                                '(Appointment valid only for the provided name)'
                                                            )
                                                        ),
                                                        _react2.default.createElement(_newDateSelector2.default, _extends({}, this.props, { getNewDate: this.getNewDate.bind(this), is_dob_error: this.state.is_dob_error })),
                                                        this.state.dateModal ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'calendar-overlay' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'date-picker-modal' },
                                                                _react2.default.createElement(_rcCalendar2.default, {
                                                                    showWeekNumber: false,
                                                                    defaultValue: moment(new Date()),
                                                                    disabledDate: function disabledDate(date) {
                                                                        return date.diff(moment(new Date()), 'days') > -1;
                                                                    },
                                                                    showToday: true,
                                                                    onSelect: this.selectDateFromCalendar.bind(this)
                                                                })
                                                            )
                                                        ) : "",
                                                        this.state.primary_profile && Object.keys(this.state.primary_profile).length > 0 && this.state.primary_profile.is_default_user && !this.state.primary_profile.email ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'labelWrap' },
                                                            _react2.default.createElement('input', { id: 'email', name: 'email', type: 'email', value: this.state.email, onChange: this.inputHandler.bind(this), required: true, ref: 'email', onKeyPress: this.handleEnterPress.bind(this) }),
                                                            _react2.default.createElement(
                                                                'label',
                                                                { htmlFor: 'email' },
                                                                'Email'
                                                            )
                                                        ) : '',
                                                        this.state.gold_user_profile && Object.keys(this.state.gold_user_profile).length && this.state.gold_user_profile.vip_data && Object.keys(this.state.gold_user_profile.vip_data).length && this.state.gold_user_profile.vip_data.total_members_allowed > 0 && !this.state.primary_profile.isDummyUser && this.state.gold_user_profile.vip_data.is_member_allowed ? _react2.default.createElement(
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
                                                                _react2.default.createElement('input', { type: 'checkbox', onClick: this.addToGold.bind(this, !this.state.add_to_gold), checked: this.state.add_to_gold }),
                                                                _react2.default.createElement('span', { className: 'checkmark' })
                                                            )
                                                        ) : ''
                                                    )
                                                )
                                            ) : "",
                                            _react2.default.createElement(_WhatsAppOptinView2.default, _extends({}, this.props, { toggleWhatsap: this.toggleWhatsap.bind(this), isUserProfile: true }))
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'errorMessage' },
                                            this.state.err
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'errorMessage' },
                                            this.props.error_message
                                        ),
                                        this.state.showMedical ? _react2.default.createElement(
                                            'button',
                                            { className: 'v-btn v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg static-btn' },
                                            'Done'
                                        ) : _react2.default.createElement(
                                            'button',
                                            { className: 'v-btn v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg static-btn', onClick: this.submitForm.bind(this) },
                                            'Done'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { noChatButton: true })
                    )
                ),
                _react2.default.createElement(_staticDisclaimer2.default, null)
            );
        }
    }]);

    return UserSignupView;
}(_react2.default.Component);

exports.default = UserSignupView;

/***/ }),

/***/ "./dev/js/components/commons/userSignup/index.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/commons/userSignup/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserSignup = __webpack_require__(/*! ./UserSignup */ "./dev/js/components/commons/userSignup/UserSignup.js");

var _UserSignup2 = _interopRequireDefault(_UserSignup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _UserSignup2.default;

/***/ }),

/***/ "./dev/js/containers/commons/UserSignup.js":
/*!*************************************************!*\
  !*** ./dev/js/containers/commons/UserSignup.js ***!
  \*************************************************/
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

var _userSignup = __webpack_require__(/*! ../../components/commons/userSignup */ "./dev/js/components/commons/userSignup/index.js");

var _userSignup2 = _interopRequireDefault(_userSignup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserSignup = function (_React$Component) {
    _inherits(UserSignup, _React$Component);

    function UserSignup(props) {
        _classCallCheck(this, UserSignup);

        return _possibleConstructorReturn(this, (UserSignup.__proto__ || Object.getPrototypeOf(UserSignup)).call(this, props));
    }

    _createClass(UserSignup, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_userSignup2.default, this.props);
        }
    }]);

    return UserSignup;
}(_react2.default.Component);

UserSignup.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$AUTH = state.AUTH,
        token = _state$AUTH.token,
        error_message = _state$AUTH.error_message,
        success_message = _state$AUTH.success_message,
        phoneNumber = _state$AUTH.phoneNumber,
        submit_otp = _state$AUTH.submit_otp,
        submit_otp_success = _state$AUTH.submit_otp_success,
        submit_otp_fail = _state$AUTH.submit_otp_fail;


    var USER = state.USER;

    return {
        token: token,
        error_message: error_message,
        success_message: success_message,
        phoneNumber: phoneNumber,
        submit_otp: submit_otp,
        submit_otp_success: submit_otp_success,
        submit_otp_fail: submit_otp_fail,
        USER: USER
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        registerUser: function registerUser(postData, cb) {
            return dispatch((0, _index.registerUser)(postData, cb));
        },
        createProfile: function createProfile(postData, cb) {
            return dispatch((0, _index.createProfile)(postData, cb));
        },
        resetVipData: function resetVipData() {
            return dispatch((0, _index.resetVipData)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserSignup);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1doYXRzQXBwT3B0aW4vV2hhdHNBcHBPcHRpblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyU2lnbnVwL1VzZXJTaWdudXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyU2lnbnVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvVXNlclNpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiXSwibmFtZXMiOlsiV2hhdHNBcHBPcHRpblZpZXciLCJwcm9wcyIsInN0YXRlIiwid2hhdHNhcHBfb3B0aW5fVmlldyIsInByb2ZpbGVzIiwid2hhdHNhcHBfb3B0aW4iLCJpc0FwcG9pbnRtZW50Iiwid2hhdHNhcHBfaXNfZGVjbGluZWQiLCJpc1VzZXJQcm9maWxlIiwic3RhdHVzIiwiZSIsInByb2ZpbGVEYXRhIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImVkaXRVc2VyUHJvZmlsZSIsImlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0U3RhdGUiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwidG9nZ2xlV2hhdHNhcCIsInNob3VsZFJlbmRlciIsIkFTU0VUU19CQVNFX1VSTCIsImJpbmQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwibW9tZW50Iiwic3RlcHBlclN0eWxlIiwicGFkZGluZyIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwiVXNlclNpZ251cFZpZXciLCJleGlzdGluZ1VzZXIiLCJsb2NhdGlvbiIsInNlYXJjaCIsImluY2x1ZGVzIiwicGFyc2VkIiwicGFyc2UiLCJuYW1lIiwiYWdlIiwiZ2VuZGVyIiwiZW1haWwiLCJkb2IiLCJmb3JtYXR0ZWREYXRlIiwicGhvbmVfbnVtYmVyIiwicGhvbmVOdW1iZXIiLCJzaG93TWVkaWNhbCIsImVyciIsInJlZmVycmFsQ29kZSIsInJlZmVycmFsIiwiaGF2ZV9yZWZlcnJhbENvZGUiLCJkYXRlTW9kYWwiLCJpc0RvYlZhbGlkYXRlZCIsImlzX2RvYl9lcnJvciIsInByaW1hcnlfcHJvZmlsZSIsImFkZF90b19nb2xkIiwiZ29sZF91c2VyX3Byb2ZpbGUiLCJ0b1VwZGF0ZVN0YXRlIiwiZGVmYXVsdF9wcm9maWxlIiwiVVNFUiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJkZWZhdWx0UHJvZmlsZSIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsImlzRHVtbXlVc2VyIiwiaXNfdmlwX2dvbGRfbWVtYmVyIiwidGFyZ2V0IiwiY2hlY2tlZCIsImRhdGUiLCJ0b0RhdGUiLCJnZXRGb3JtYXR0ZWREYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJkZCIsImdldERhdGUiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwidG9kYXkiLCJyZWdpc3RlciIsInJlZnMiLCJmb3JFYWNoIiwicHJwIiwiaSIsInZhbGlkYXRlZCIsInRlc3QiLCJtYXRjaCIsInN0eWxlIiwiYm9yZGVyIiwicG9zdF9kYXRhIiwiY3JlYXRlUHJvZmlsZSIsInJlcyIsImNhbGxiYWNrIiwiaGlzdG9yeSIsInJlcGxhY2UiLCJnbyIsIm1lc3NhZ2UiLCJzdWJtaXRGb3JtIiwidHlwZSIsIm5ld0RhdGUiLCJpc1ZhbGlkRG9iIiwiaW5wdXRIYW5kbGVyIiwiaGFuZGxlRW50ZXJQcmVzcyIsImdldE5ld0RhdGUiLCJkaWZmIiwic2VsZWN0RGF0ZUZyb21DYWxlbmRhciIsImlzX2RlZmF1bHRfdXNlciIsInZpcF9kYXRhIiwidG90YWxfbWVtYmVyc19hbGxvd2VkIiwiaXNfbWVtYmVyX2FsbG93ZWQiLCJhZGRUb0dvbGQiLCJlcnJvcl9tZXNzYWdlIiwiVXNlclNpZ251cCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIkFVVEgiLCJ0b2tlbiIsInN1Y2Nlc3NfbWVzc2FnZSIsInN1Ym1pdF9vdHAiLCJzdWJtaXRfb3RwX3N1Y2Nlc3MiLCJzdWJtaXRfb3RwX2ZhaWwiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInJlZ2lzdGVyVXNlciIsInBvc3REYXRhIiwiY2IiLCJyZXNldFZpcERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsaUI7OztBQUNGLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMElBQ1RBLEtBRFM7O0FBR2YsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLGlDQUFvQjtBQURYLFNBQWI7QUFIZTtBQU1sQjs7Ozt1Q0FFYTtBQUNWLGdCQUFHLEtBQUtGLEtBQUwsQ0FBV0csUUFBZCxFQUF1QjtBQUNuQixvQkFBSSxLQUFLSCxLQUFMLENBQVdHLFFBQVgsQ0FBb0JDLGNBQXBCLElBQXFDLElBQXpDLEVBQThDO0FBQzFDLHdCQUFHLEtBQUtKLEtBQUwsQ0FBV0ssYUFBWCxJQUE0QixDQUFDLEtBQUtMLEtBQUwsQ0FBV0csUUFBWCxDQUFvQkMsY0FBakQsSUFBbUUsQ0FBQyxLQUFLSixLQUFMLENBQVdHLFFBQVgsQ0FBb0JHLG9CQUEzRixFQUFnSDtBQUM1RywrQkFBTyxJQUFQO0FBQ0gscUJBRkQsTUFFSztBQUNELCtCQUFPLEtBQVA7QUFDSDtBQUNKLGlCQU5ELE1BTUs7QUFDRCwyQkFBTyxJQUFQO0FBQ0g7QUFDSixhQVZELE1BVU0sSUFBRyxLQUFLTixLQUFMLENBQVdPLGFBQWQsRUFBNEI7QUFDOUIsdUJBQU8sSUFBUDtBQUNILGFBRkssTUFFRDtBQUNELHVCQUFPLEtBQVA7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RSIsImZpbGUiOiI5OS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBXaGF0c0FwcE9wdGluVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdoYXRzYXBwX29wdGluX1ZpZXc6dHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkUmVuZGVyKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMucHJvZmlsZXMpe1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvZmlsZXMud2hhdHNhcHBfb3B0aW4gIT1udWxsKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmlzQXBwb2ludG1lbnQgJiYgIXRoaXMucHJvcHMucHJvZmlsZXMud2hhdHNhcHBfb3B0aW4gJiYgIXRoaXMucHJvcHMucHJvZmlsZXMud2hhdHNhcHBfaXNfZGVjbGluZWQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLmlzVXNlclByb2ZpbGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSAgICBcbiAgICB9XG5cbiAgICB0b2dnbGVXaGF0c2FwKHN0YXR1cyxlKSB7ICAgICAgIFxuICAgICAgICBpZih0aGlzLnByb3BzLmlzQXBwb2ludG1lbnQpeyAgICAgIFxuICAgICAgICAgICAgbGV0IHByb2ZpbGVEYXRhID0gey4uLnRoaXMucHJvcHMucHJvZmlsZXN9XG4gICAgICAgICAgICBpZihzdGF0dXMpe1xuICAgICAgICAgICAgICAgIHByb2ZpbGVEYXRhLndoYXRzYXBwX29wdGluID0gdHJ1ZVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJZb3Ugd2hhdHNBcHAgbm90aWZpY2F0aW9ucyBoYXMgYmVlbiBlbmFibGVkLlwifSkgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHByb2ZpbGVEYXRhLndoYXRzYXBwX2lzX2RlY2xpbmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJ5b3VyIHdoYXRzQXBwIG5vdGlmaWNhdGlvbnMgaGFzIGJlZW4gZGlzYWJsZWQuXCJ9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5lZGl0VXNlclByb2ZpbGUocHJvZmlsZURhdGEsIHByb2ZpbGVEYXRhLmlkICwoKT0+e1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3doYXRzYXBwQ2FyZENvbnRhaW5lcicpWzBdLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aGF0c2FwcF9vcHRpbl9WaWV3OiBzdGF0dXMgfSwoKSA9PntcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1doYXRzYXB0b2dnbGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnV2hhdHNhcC10b2dnbGVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlV2hhdHNhcChzdGF0dXMpICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkUmVuZGVyKCkpXG4gICAgICAgICAgICByZXR1cm4gKDxkaXY+PC9kaXY+KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuaXNBcHBvaW50bWVudD9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXRzYXBwQ2FyZENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhLWxvZ28tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhLWxvZ28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lIHdvdWxkIGxpa2UgdG8gc2VuZCB5b3UgdXBkYXRlcyB0aHJvdWdoIHdoYXRzYXBwPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGxvd0RlY2xpbmVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFsbG93QnRuc1wiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMsdHJ1ZSl9PkFsbG93PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVjbGluZUJ0bnNcIiBzdHlsZT17e2NvbG9yOicjNzU3NTc1J319b25DbGljaz17dGhpcy50b2dnbGVXaGF0c2FwLmJpbmQodGhpcyxmYWxzZSl9PkRlY2xpbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6ICcxNHB4JyB9fT5FbmFibGUgPHNwYW4gY2xhc3NOYW1lPVwic20td3RzcC1pbWdcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhLWxvZ28tc20ucG5nXCJ9IC8+V2hhdHNBcHA8L3NwYW4+IG5vdGlmaWNhdGlvbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy50b2dnbGVXaGF0c2FwLmJpbmQodGhpcywhdGhpcy5zdGF0ZS53aGF0c2FwcF9vcHRpbl9WaWV3KX0gY2hlY2tlZD17dGhpcy5zdGF0ZS53aGF0c2FwcF9vcHRpbl9WaWV3fSAvPjxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgV2hhdHNBcHBPcHRpblZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmMtY2FsZW5kYXInO1xuaW1wb3J0IFdoYXRzQXBwT3B0aW5WaWV3IGZyb20gJy4uLy4uL2NvbW1vbnMvV2hhdHNBcHBPcHRpbi9XaGF0c0FwcE9wdGluVmlldy5qcydcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5pbXBvcnQgTmV3RGF0ZVNlbGVjdG9yIGZyb20gJy4uLy4uL2NvbW1vbnMvbmV3RGF0ZVNlbGVjdG9yLmpzJ1xuXG5jb25zdCBzdGVwcGVyU3R5bGUgPSB7XG4gICAgcGFkZGluZzogNjAsXG4gICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICBwYWRkaW5nVG9wOiAxMCxcbn1cblxuXG5jbGFzcyBVc2VyU2lnbnVwVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgbGV0IGV4aXN0aW5nVXNlciA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnZXhpc3RpbmcnKSkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIHByb2ZpbGUgc2NlbmFyaW9cbiAgICAgICAgICAgIGV4aXN0aW5nVXNlciA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGFnZTogJycsXG4gICAgICAgICAgICBnZW5kZXI6ICdtJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIGRvYjonJyxcbiAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6ICcnLFxuICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiB0aGlzLnByb3BzLnBob25lTnVtYmVyIHx8ICcnLFxuICAgICAgICAgICAgZXhpc3RpbmdVc2VyLFxuICAgICAgICAgICAgc2hvd01lZGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgZXJyOiBcIlwiLFxuICAgICAgICAgICAgcmVmZXJyYWxDb2RlOiBwYXJzZWQucmVmZXJyYWwgfHwgbnVsbCxcbiAgICAgICAgICAgIGhhdmVfcmVmZXJyYWxDb2RlOiAhIXBhcnNlZC5yZWZlcnJhbCxcbiAgICAgICAgICAgIGRhdGVNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICB3aGF0c2FwcF9vcHRpbjp0cnVlLFxuICAgICAgICAgICAgaXNEb2JWYWxpZGF0ZWQ6ZmFsc2UsXG4gICAgICAgICAgICBpc19kb2JfZXJyb3I6ZmFsc2UsXG4gICAgICAgICAgICBwcmltYXJ5X3Byb2ZpbGU6e30sXG4gICAgICAgICAgICBhZGRfdG9fZ29sZDpmYWxzZSxcbiAgICAgICAgICAgIGdvbGRfdXNlcl9wcm9maWxlOnt9LFxuICAgICAgICAgICAgdG9VcGRhdGVTdGF0ZTp0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBsZXQgZGVmYXVsdF9wcm9maWxlXG4gICAgICAgIGxldCBnb2xkX3VzZXJfcHJvZmlsZSA9IHt9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggJiYgdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKS5sZW5ndGggPiAwKXsgXG4gICAgICAgICAgICAgICBkZWZhdWx0X3Byb2ZpbGUgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSAgIFxuICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCF2YWx1ZS5pc0R1bW15VXNlciAmJiB2YWx1ZS5pc192aXBfZ29sZF9tZW1iZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZF91c2VyX3Byb2ZpbGUgPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwcmltYXJ5X3Byb2ZpbGU6ZGVmYXVsdF9wcm9maWxlLGdvbGRfdXNlcl9wcm9maWxlOmdvbGRfdXNlcl9wcm9maWxlfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpe1xuICAgICAgICBsZXQgZGVmYXVsdF9wcm9maWxlXG4gICAgICAgIGxldCBnb2xkX3VzZXJfcHJvZmlsZSA9IHt9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggJiYgdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKS5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUudG9VcGRhdGVTdGF0ZSl7IFxuICAgICAgICAgICAgICAgZGVmYXVsdF9wcm9maWxlID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0gICBcbiAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICBpZighdmFsdWUuaXNEdW1teVVzZXIgJiYgdmFsdWUuaXNfdmlwX2dvbGRfbWVtYmVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGRfdXNlcl9wcm9maWxlID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJpbWFyeV9wcm9maWxlOmRlZmF1bHRfcHJvZmlsZSxnb2xkX3VzZXJfcHJvZmlsZTpnb2xkX3VzZXJfcHJvZmlsZSx0b1VwZGF0ZVN0YXRlOmZhbHNlfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlUmVmZXJyYWwoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGF2ZV9yZWZlcnJhbENvZGU6IGUudGFyZ2V0LmNoZWNrZWQgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVXaGF0c2FwKHN0YXR1cyxlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aGF0c2FwcF9vcHRpbjogc3RhdHVzIH0pXG4gICAgfVxuXG4gICAgc2VsZWN0RGF0ZUZyb21DYWxlbmRhcihkYXRlKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS50b0RhdGUoKVxuICAgICAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUoZGF0ZSlcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkb2I6IGRhdGUsIGZvcm1hdHRlZERhdGU6Zm9ybWF0dGVkRGF0ZSwgZGF0ZU1vZGFsOiBmYWxzZX0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKXtcbiAgICAgICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtbSA9IGRhdGUuZ2V0TW9udGgoKSsxOyBcbiAgICAgICAgdmFyIHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmKGRkPDEwKXtcbiAgICAgICAgICAgIGRkPScwJytkZDtcbiAgICAgICAgfVxuICAgICAgICBpZihtbTwxMCl7XG4gICAgICAgICAgICBtbT0nMCcrbW07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvZGF5ID0gZGQrJy0nK21tKyctJyt5eXl5O1xuICAgICAgICByZXR1cm4gdG9kYXlcbiAgICB9XG5cbiAgICBvcGVuQ2FsZW5kYXIoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0ZU1vZGFsOnRydWV9KVxuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnI6IFwiXCIgfSlcbiAgICAgICAgLy8gdmFsaWRhdGVcbiAgICAgICAgbGV0IHJlZ2lzdGVyID0gdHJ1ZVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlZnMpLmZvckVhY2goKHBycCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucmVmc1twcnBdLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZWZzW3BycF0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSAhL1teYS16QS1aIF0vLnRlc3QodGhpcy5yZWZzW3BycF0udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY2FzZSBcInBob25lX251bWJlclwiOiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICghIXRoaXMucmVmc1twcnBdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB2YWxpZGF0ZWQgPSB0aGlzLnJlZnNbcHJwXS52YWx1ZS5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKVxuICAgICAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFsaWRhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJlbWFpbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZWZzW3BycF0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0aGlzLnJlZnNbcHJwXS52YWx1ZS5tYXRjaCgvXFxTK0BcXFMrXFwuXFxTKy8pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLypjYXNlIFwiZG9iXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gdGhpcy5zdGF0ZS5pc0RvYlZhbGlkYXRlZFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbcHJwXS5zdHlsZS5ib3JkZXIgPSAnJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbcHJwXS5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCdcbiAgICAgICAgICAgICAgICByZWdpc3RlciA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZG9iID09IG51bGwgJiYgIXRoaXMuc3RhdGUuaXNEb2JWYWxpZGF0ZWQpe1xuICAgICAgICAgICAgcmVnaXN0ZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfZG9iX2Vycm9yOnRydWV9KVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZG9iICE9IG51bGwgJiYgIXRoaXMuc3RhdGUuaXNEb2JWYWxpZGF0ZWQpe1xuICAgICAgICAgICAgcmVnaXN0ZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfZG9iX2Vycm9yOnRydWV9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWdpc3Rlcikge1xuICAgICAgICAgICAgbGV0IHBvc3RfZGF0YSA9IHRoaXMuc3RhdGVcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJlZmVycmFsQ29kZSAmJiB0aGlzLnN0YXRlLmhhdmVfcmVmZXJyYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgcG9zdF9kYXRhW1wicmVmZXJyYWxfY29kZVwiXSA9IHRoaXMuc3RhdGUucmVmZXJyYWxDb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZVByb2ZpbGUocG9zdF9kYXRhLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLnJlc2V0VmlwRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBzaG93TWVkaWNhbDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UocGFyc2VkLmNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVmZXJyYWxDb2RlICYmIHRoaXMuc3RhdGUuaGF2ZV9yZWZlcnJhbENvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZSgnL3VzZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IFwiRXJyb3Igc2lnbmluZyB1cCB1c2VyLlwiXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVyci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycjogbWVzc2FnZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVFbnRlclByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE5ld0RhdGUodHlwZSxuZXdEYXRlLGlzVmFsaWREb2Ipe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkb2I6bmV3RGF0ZSxpc0RvYlZhbGlkYXRlZDppc1ZhbGlkRG9ifSlcbiAgICB9XG5cbiAgICBhZGRUb0dvbGQodmFsdWUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthZGRfdG9fZ29sZDp2YWx1ZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmFsaWRhdGlvbi1ib29rLXNjcmVlblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnNob3dNZWRpY2FsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcm5nLXRvcC0xMiBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZ28tYm90dG9tXCIgPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibnVtYmVyXCIgbmFtZT1cInBob25lX251bWJlclwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLnBob25lX251bWJlcn0gcmVxdWlyZWQgcmVmPVwicGhvbmVfbnVtYmVyXCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVFbnRlclByZXNzLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnVtYmVyXCI+TW9iaWxlIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUuZ2VuZGVyID09ICdtJz8nYnRuLWFjdGl2ZSc6Jyd9YH0gbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09ICdtJ30gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7ICdnZW5kZXInOiAnbScgfSl9Pk1hbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLmdlbmRlciA9PSAnZic/J2J0bi1hY3RpdmUnOicnfWB9IG5hbWU9XCJnZW5kZXJcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PSAnZid9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAnZ2VuZGVyJzogJ2YnIH0pfT5GZW1hbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZm5hbWVcIiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IHJlcXVpcmVkIHJlZj1cIm5hbWVcIiBvbktleVByZXNzPXt0aGlzLmhhbmRsZUVudGVyUHJlc3MuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbmFtZVwiPnt0aGlzLnN0YXRlLmV4aXN0aW5nVXNlciA/IFwiTWVtYmVyXCIgOiBcIlBhdGllbnRcIn0gTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1saWdodFwiPihBcHBvaW50bWVudCB2YWxpZCBvbmx5IGZvciB0aGUgcHJvdmlkZWQgbmFtZSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZG9iXCIgbmFtZT1cImRvYlwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZm9ybWF0dGVkRGF0ZX0gb25DbGljaz17dGhpcy5vcGVuQ2FsZW5kYXIuYmluZCh0aGlzKX0gcmVxdWlyZWQgcmVmPVwiZG9iXCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVFbnRlclByZXNzLmJpbmQodGhpcyl9IG9uRm9jdXM9e3RoaXMub3BlbkNhbGVuZGFyLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkb2JcIj5EYXRlIG9mIEJpcnRoPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5ld0RhdGVTZWxlY3RvciB7Li4udGhpcy5wcm9wc30gZ2V0TmV3RGF0ZT17dGhpcy5nZXROZXdEYXRlLmJpbmQodGhpcyl9IGlzX2RvYl9lcnJvcj17dGhpcy5zdGF0ZS5pc19kb2JfZXJyb3J9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRlTW9kYWwgPyA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLW92ZXJsYXlcIj48ZGl2IGNsYXNzTmFtZT1cImRhdGUtcGlja2VyLW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2Vla051bWJlcj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttb21lbnQobmV3IERhdGUoKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWREYXRlPXsoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5kaWZmKG1vbWVudCgobmV3IERhdGUpKSwgJ2RheXMnKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9kYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5zZWxlY3REYXRlRnJvbUNhbGVuZGFyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByaW1hcnlfcHJvZmlsZSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnByaW1hcnlfcHJvZmlsZSkubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLnByaW1hcnlfcHJvZmlsZS5pc19kZWZhdWx0X3VzZXIgJiYgIXRoaXMuc3RhdGUucHJpbWFyeV9wcm9maWxlLmVtYWlsID88ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gcmVxdWlyZWQgcmVmPVwiZW1haWxcIiBvbktleVByZXNzPXt0aGlzLmhhbmRsZUVudGVyUHJlc3MuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj46Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJyZWZlcnJhbC1zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcsIGZvbnRTaXplOiAnMTRweCcgfX0+SSBoYXZlIGEgcmVmZXJyYWwgY29kZTxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVJlZmVycmFsLmJpbmQodGhpcyl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUuaGF2ZV9yZWZlcnJhbENvZGV9IC8+PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qdGhpcy5zdGF0ZS5oYXZlX3JlZmVycmFsQ29kZSA/IDxkaXYgY2xhc3NOYW1lPVwicmVmZXJyYWxDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2x0LW53LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogJzgwcHgnIH19IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwic2x0LXRleHQtaW5wdXRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9XCJFbnRlciBoZXJlXCIgbmFtZT1cInJlZmVycmFsQ29kZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnJlZmVycmFsQ29kZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZ29sZF91c2VyX3Byb2ZpbGUgJiYgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5nb2xkX3VzZXJfcHJvZmlsZSkubGVuZ3RoICYmIHRoaXMuc3RhdGUuZ29sZF91c2VyX3Byb2ZpbGUudmlwX2RhdGEgJiYgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5nb2xkX3VzZXJfcHJvZmlsZS52aXBfZGF0YSkubGVuZ3RoICYmIHRoaXMuc3RhdGUuZ29sZF91c2VyX3Byb2ZpbGUudmlwX2RhdGEudG90YWxfbWVtYmVyc19hbGxvd2VkID4gMCAmJiAhdGhpcy5zdGF0ZS5wcmltYXJ5X3Byb2ZpbGUuaXNEdW1teVVzZXIgJiYgdGhpcy5zdGF0ZS5nb2xkX3VzZXJfcHJvZmlsZS52aXBfZGF0YS5pc19tZW1iZXJfYWxsb3dlZD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlZmF1bHRQcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieCBhZGQtbWVtYmVyLWNoa2J4XCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRoaXMgbWVtYmVyIHRvIERvY3ByaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtbC0yXCIgd2lkdGg9XCIzNVwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2dvbGQtbGcucG5nXCIgIGFsdD1cImdvbGRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtd2FybmluZy10ZXh0XCI+T25jZSBhZGRlZCB0byBnb2xkLCB5b3UgY2Fubm9udCBlZGl0IG9yIHJlbW92ZSB0aGUgbWVtYmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9e3RoaXMuYWRkVG9Hb2xkLmJpbmQodGhpcywgIXRoaXMuc3RhdGUuYWRkX3RvX2dvbGQpfSBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWRkX3RvX2dvbGR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaGF0c0FwcE9wdGluVmlldyB7Li4udGhpcy5wcm9wc30gdG9nZ2xlV2hhdHNhcD17dGhpcy50b2dnbGVXaGF0c2FwLmJpbmQodGhpcyl9IGlzVXNlclByb2ZpbGU9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57dGhpcy5zdGF0ZS5lcnJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPnt0aGlzLnByb3BzLmVycm9yX21lc3NhZ2V9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dNZWRpY2FsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgYnRuLWxnIHRleHQtbGcgc3RhdGljLWJ0blwiPkRvbmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgYnRuLWxnIHRleHQtbGcgc3RhdGljLWJ0blwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpfT5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIG5vQ2hhdEJ1dHRvbj17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNpZ251cFZpZXdcbiIsImltcG9ydCBVc2VyU2lnbnVwVmlldyBmcm9tICcuL1VzZXJTaWdudXAnXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTaWdudXBWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHJlZ2lzdGVyVXNlciwgY3JlYXRlUHJvZmlsZSwgcmVzZXRWaXBEYXRhIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IFVzZXJTaWdudXBWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy91c2VyU2lnbnVwJ1xuXG5cbmNsYXNzIFVzZXJTaWdudXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFVzZXJTaWdudXBWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIGVycm9yX21lc3NhZ2UsXG4gICAgICAgIHN1Y2Nlc3NfbWVzc2FnZSxcbiAgICAgICAgcGhvbmVOdW1iZXIsXG4gICAgICAgIHN1Ym1pdF9vdHAsXG4gICAgICAgIHN1Ym1pdF9vdHBfc3VjY2VzcyxcbiAgICAgICAgc3VibWl0X290cF9mYWlsXG4gICAgfSA9IHN0YXRlLkFVVEhcblxuICAgIGxldCBVU0VSID0gc3RhdGUuVVNFUlxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIGVycm9yX21lc3NhZ2UsXG4gICAgICAgIHN1Y2Nlc3NfbWVzc2FnZSxcbiAgICAgICAgcGhvbmVOdW1iZXIsXG4gICAgICAgIHN1Ym1pdF9vdHAsXG4gICAgICAgIHN1Ym1pdF9vdHBfc3VjY2VzcyxcbiAgICAgICAgc3VibWl0X290cF9mYWlsLFxuICAgICAgICBVU0VSXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZWdpc3RlclVzZXI6IChwb3N0RGF0YSwgY2IpID0+IGRpc3BhdGNoKHJlZ2lzdGVyVXNlcihwb3N0RGF0YSwgY2IpKSxcbiAgICAgICAgY3JlYXRlUHJvZmlsZTogKHBvc3REYXRhLCBjYikgPT4gZGlzcGF0Y2goY3JlYXRlUHJvZmlsZShwb3N0RGF0YSwgY2IpKSxcbiAgICAgICAgcmVzZXRWaXBEYXRhOigpID0+IGRpc3BhdGNoKHJlc2V0VmlwRGF0YSgpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyU2lnbnVwKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwic291cmNlUm9vdCI6IiJ9