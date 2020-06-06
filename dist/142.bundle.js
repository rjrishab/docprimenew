(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[142],{

/***/ "./dev/js/components/vipClub/digitInsuranceForm.js":
/*!*********************************************************!*\
  !*** ./dev/js/components/vipClub/digitInsuranceForm.js ***!
  \*********************************************************/
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DigitInsuranceForm = function (_React$Component) {
    _inherits(DigitInsuranceForm, _React$Component);

    function DigitInsuranceForm(props) {
        _classCallCheck(this, DigitInsuranceForm);

        var _this = _possibleConstructorReturn(this, (DigitInsuranceForm.__proto__ || Object.getPrototypeOf(DigitInsuranceForm)).call(this, props));

        _this.state = {
            title: 'mr.',
            name: '',
            last_name: '',
            middle_name: '',
            dob: '',
            email: '',
            phone_number: _this.props.user_phone_number,
            pincode: '',
            address: '',
            nominee_name: '',
            nominee_relation: '',
            gender: '',
            id: '',
            profile: '',
            userProfiles: {},
            profile_id: null,
            profile_flag: true
        };
        return _this;
    }

    _createClass(DigitInsuranceForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var profile = void 0;
            var isDummyUser = void 0;
            var loginUserId = void 0;

            if (this.props.USER && this.props.USER.profiles && Object.keys(this.props.USER.profiles).length > 0) {
                isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
                loginUserId = this.props.USER.profiles[this.props.USER.defaultProfile].id;
                if (this.props.digit_self_details[loginUserId]) {

                    if (!isDummyUser) {
                        profile = Object.assign({}, this.props.digit_self_details[loginUserId]);
                    } else {
                        profile = Object.assign({}, this.props.digit_self_details[loginUserId]);
                    }
                    if (Object.keys(profile).length > 0) {
                        isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
                        if (profile.isDummyUser) {
                            profile.id = 0;
                            this.setState({ id: 0 }, function () {
                                _this2.getUserDetails(profile); // fill user details in form
                            });
                        } else {
                            this.setState({ id: profile.id }, function () {
                                _this2.getUserDetails(profile); // fill user details in form
                            });
                        }
                    }
                }
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var _this3 = this;

            var self = this;
            var loginUserId = void 0;
            if (props.USER && props.USER.profiles && Object.keys(props.USER.profiles).length > 0 && this.state.profile_flag) {
                var isDummyUser = props.USER.profiles[props.USER.defaultProfile].isDummyUser;
                loginUserId = props.USER.defaultProfile;
                if (Object.keys(props.digit_self_details).length > 0) {
                    // retrieve already member details from user store
                    var profile = void 0;
                    if (!isDummyUser) {
                        profile = Object.assign({}, props.digit_self_details[loginUserId]);
                    } else {
                        profile = Object.assign({}, props.digit_self_details[loginUserId]);
                    }
                    console.log(profile);
                    if (profile && Object.keys(profile).length) {
                        this.setState({ id: profile.id, profile_flag: false }, function () {
                            _this3.getUserDetails(profile); // fill user details in form    
                        });
                    }
                } else if (props.USER && props.USER.profiles && Object.keys(props.USER.profiles).length > 0 && props.USER.profiles[props.USER.defaultProfile]) {
                    var _profile = void 0;
                    var exitsting_user_profile = void 0;
                    // retrieve already member details from user profiles
                    _profile = Object.assign({}, props.USER.profiles[props.USER.defaultProfile]);
                    if (_profile && Object.keys(_profile).length) {
                        if (_profile.isDummyUser) {
                            _profile.id = 0;
                            this.setState({ id: 0, profile_flag: false }, function () {
                                _this3.getUserDetails(_profile); // fill user details in form    
                            });
                        } else {
                            this.setState({ id: _profile.id, profile_flag: false }, function () {
                                _this3.getUserDetails(_profile); // fill user details in form
                            });
                        }
                    }
                }
            }
        }
    }, {
        key: 'getUserDetails',
        value: function getUserDetails(profile) {
            var _this4 = this;

            var empty_state = {};
            console.log(profile);
            if (Object.keys(profile).length > 0) {
                if (profile.id) {
                    this.setState({ profile_id: profile.id ? profile.id : '' });
                }
                if (profile.profile) {
                    this.setState({ profile_id: profile.profile ? profile.profile : '' });
                }
                if (profile.gender == 'm') {
                    this.setState({ gender: profile.gender ? profile.gender : '', title: 'mr.' });
                } else if (profile.gender == 'f') {
                    this.setState({ gender: profile.gender ? profile.gender : '', title: 'miss' });
                }

                if (profile.name == 'User' || profile.name == 'user') {
                    this.setState({ name: '' });
                } else if (profile.name) {
                    var profName = profile.name;
                    var splitName = profName.split(' ');
                    if (typeof splitName[0] != 'undefined') {
                        this.setState({ name: splitName[0] ? splitName[0] : '' });
                    }
                    if (typeof splitName[1] != 'undefined') {
                        this.setState({ last_name: splitName[1] ? splitName[1] : '' });
                    }
                }
                if (profile.email) {
                    this.setState({ email: profile.email });
                }
                if (profile.phone_number) {
                    this.setState({ phone_number: profile.phone_number });
                }
                if (profile.pincode) {
                    this.setState({ pincode: profile.pincode });
                }
                if (profile.address) {
                    this.setState({ address: profile.address });
                }
                if (profile.nominee_name) {
                    this.setState({ nominee_name: profile.nominee_name });
                }
                if (profile.nominee_relation) {
                    this.setState({ nominee_relation: profile.nominee_relation });
                }

                this.setState({
                    dob: profile.dob ? profile.dob : ''
                }, function () {
                    _this4.handleSubmit();
                });
            }
        }
    }, {
        key: 'handleRelation',
        value: function handleRelation(event) {
            var _this5 = this;

            this.setState({
                nominee_relation: event.target.value
            }, function () {
                _this5.handleSubmit(event);
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(field, event) {
            this.setState(_defineProperty({}, event.target.getAttribute('data-param'), event.target.value));
        }
    }, {
        key: 'handleTitle',
        value: function handleTitle(field, event) {
            var _this6 = this;

            var title_value = event.target.value;
            if (title_value == 'mr.') {
                this.setState({ gender: 'm', title: title_value });
            } else if (title_value == 'miss' || title_value == 'mrs.') {
                this.setState({ gender: 'f', title: title_value });
            }
            this.setState({ title: event.target.value }, function () {
                var self_data = _this6.state;
                self_data.is_change = true;
                _this6.props.saveUserDetails('self_data', self_data); // to save entered data in store
            });
        }
    }, {
        key: 'handleEmail',
        value: function handleEmail() {
            var formIsValid = true;
            if (this.state.email != '') {
                var validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                validEmail = validEmail.test(this.state.email);
                if (validEmail) {
                    this.handleSubmit();
                } else {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter valid Email" });
                }
            }
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            var profile = Object.assign({}, this.props.USER.profiles[this.props.USER.defaultProfile]);
            if (!profile.isDummyUser && this.props.member_id > 0) {
                this.setState({ profile_id: 0, id: 0 });
            } else {
                this.setState({ profile_id: null, id: profile.isDummyUser ? 0 : profile.id });
            }
            var self_data = this.state;
            this.props.saveUserDetails('self_data', self_data);
        }
    }, {
        key: 'render',
        value: function render() {
            var _React$createElement;

            var isDummyUser = void 0;
            var profile_id = 0;
            if (this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.profiles[this.props.USER.defaultProfile]) {
                isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
                profile_id = isDummyUser ? 0 : this.props.USER.profiles[this.props.USER.defaultProfile].id;
            }
            var errors = [];
            if (this.props.validateErrors && Object.keys(this.props.validateErrors).length) {
                errors = this.props.validateErrors[profile_id];
            }
            var commonMsgSpan = _react2.default.createElement(
                'span',
                { className: 'fill-error-span' },
                '*This is a mandatory field'
            );
            return _react2.default.createElement(
                'div',
                { className: 'widget mrb-10 digit-input-container', id: isDummyUser ? 'member_0' : 'member_' + profile_id },
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
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12' },
                            _react2.default.createElement(
                                'button',
                                { className: 'label-names-buttons ' + (this.state.title == 'mr.' ? 'btn-active' : ''), name: 'title', value: 'mr.', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mr.') },
                                'Mr.'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'label-names-buttons ' + (this.state.title == 'miss' ? 'btn-active' : ''), name: 'title', value: 'miss', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'miss.') },
                                'Ms.'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'label-names-buttons ' + (this.state.title == 'mrs.' ? 'btn-active' : ''), value: 'mrs.', name: 'title', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mrs.') },
                                'Mrs.'
                            )
                        ),
                        errors && errors.length && errors.indexOf('title') > -1 ? commonMsgSpan : '',
                        _react2.default.createElement(
                            'div',
                            { className: 'row no-gutters' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-6' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'ins-form-group inp-margin-right' },
                                    _react2.default.createElement('input', { type: 'text', id: 'name1', className: 'form-control ins-form-control', required: true, autoComplete: 'off', name: 'name', 'data-param': 'name', value: this.state.name,
                                        onChange: this.handleChange.bind(this, 'name'),
                                        onBlur: this.handleSubmit.bind(this) }),
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'form-control-placeholder', htmlFor: 'name1' },
                                        'First Name'
                                    ),
                                    _react2.default.createElement('img', { src: "/assets" + "/img/nw-usr.svg" })
                                )
                            ),
                            errors && errors.length && errors.indexOf('name') > -1 ? commonMsgSpan : '',
                            _react2.default.createElement(
                                'div',
                                { className: 'col-6' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'ins-form-group inp-margin-right ' },
                                    _react2.default.createElement('input', { type: 'text', id: 'middle_name', className: 'form-control ins-form-control', required: true, autoComplete: 'off', name: 'middle_name', value: this.state.middle_name, 'data-param': 'middle_name',
                                        onChange: this.handleChange.bind(this, 'middle_name'),
                                        onBlur: this.handleSubmit.bind(this) }),
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
                                    _react2.default.createElement('input', { type: 'text', id: 'last_name', className: 'form-control ins-form-control', required: true, autoComplete: 'off', name: 'last_name', 'data-param': 'last_name', value: this.state.last_name,
                                        onChange: this.handleChange.bind(this, 'last_name'),
                                        onBlur: this.handleSubmit.bind(this)
                                    }),
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'form-control-placeholder', htmlFor: 'last_name' },
                                        'Last Name'
                                    ),
                                    _react2.default.createElement('img', { src: "/assets" + "/img/nw-usr.svg" })
                                )
                            ),
                            errors && errors.length && errors.indexOf('last_name') > -1 ? commonMsgSpan : '',
                            _react2.default.createElement(
                                'div',
                                { className: 'col-12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'ins-form-group' },
                                    _react2.default.createElement('input', { type: 'date', id: 'isn-date', className: 'form-control ins-form-control ins-date-picker-style', required: true, autoComplete: 'off', name: 'dob', 'data-param': 'dob', value: this.state.dob,
                                        onChange: this.handleChange.bind(this, 'dob'),
                                        onBlur: this.handleSubmit.bind(this)
                                    }),
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'form-control-placeholder datePickerLabel', htmlFor: 'ins-date' },
                                        'Date of birth'
                                    ),
                                    _react2.default.createElement('img', { src: "/assets" + "/img/calendar-01.svg" })
                                )
                            ),
                            errors && errors.length && errors.indexOf('dob') > -1 ? commonMsgSpan : '',
                            _react2.default.createElement(
                                'div',
                                { className: 'col-12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'ins-form-group' },
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control ins-form-control', required: true, id: 'mil',
                                        onBlur: this.handleEmail.bind(this), 'data-param': 'email', onChange: this.handleChange.bind(this, 'email'), value: this.state.email, name: 'email'
                                    }),
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'form-control-placeholder ', htmlFor: 'mil' },
                                        'Email'
                                    ),
                                    _react2.default.createElement('img', { src: "/assets" + "/img/mail-01.svg" })
                                )
                            ),
                            errors && errors.length && errors.indexOf('email') > -1 ? commonMsgSpan : '',
                            _react2.default.createElement(
                                'div',
                                { className: 'col-12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'ins-form-group' },
                                    _react2.default.createElement('input', (_React$createElement = { type: 'number', id: 'mbl', max: '9999999999', min: '1000000000', className: 'form-control ins-form-control ins-date-picker-style', required: true, autoComplete: 'off', name: 'phone_number', 'data-param': 'phone_number', value: '',
                                        onChange: this.handleChange.bind(this, 'phone_number') }, _defineProperty(_React$createElement, 'value', this.state.phone_number), _defineProperty(_React$createElement, 'onBlur', this.handleSubmit.bind(this)), _React$createElement)),
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'form-control-placeholder', htmlFor: 'mbl' },
                                        'Mobile'
                                    ),
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/call.svg" })
                                )
                            ),
                            errors && errors.length && errors.indexOf('phone_number') > -1 ? commonMsgSpan : '',
                            _react2.default.createElement(
                                'div',
                                { className: 'col-12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'ins-form-group' },
                                    _react2.default.createElement('input', { type: 'number', id: 'pin', className: 'form-control ins-form-control ins-date-picker-style', required: true, autoComplete: 'off', name: 'pincode', 'data-param': 'pincode', value: this.state.pincode,
                                        onChange: this.handleChange.bind(this, 'pincode'),
                                        onBlur: this.handleSubmit.bind(this) }),
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'form-control-placeholder', htmlFor: 'pin' },
                                        'Pin Code'
                                    ),
                                    _react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
                                )
                            ),
                            errors && errors.length && errors.indexOf('pincode') > -1 ? commonMsgSpan : '',
                            _react2.default.createElement(
                                'div',
                                { className: 'col-12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'ins-form-group' },
                                    _react2.default.createElement('input', { type: 'text', id: 'adr', className: 'form-control ins-form-control ins-date-picker-style', required: true, autoComplete: 'off', name: 'address', 'data-param': 'address', value: this.state.address,
                                        onChange: this.handleChange.bind(this, 'address'),
                                        onBlur: this.handleSubmit.bind(this) }),
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'form-control-placeholder', htmlFor: 'adr' },
                                        'Address'
                                    ),
                                    _react2.default.createElement('img', { src: "/assets" + "/img/location-01.svg" })
                                )
                            ),
                            errors && errors.length && errors.indexOf('address') > -1 ? commonMsgSpan : '',
                            _react2.default.createElement(
                                'div',
                                { className: 'col-12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'ins-form-group inp-margin-right ' },
                                    _react2.default.createElement('input', { type: 'text', id: 'nomName', className: 'form-control ins-form-control', required: true, autoComplete: 'off', name: 'name', 'data-param': 'nominee_name',
                                        onChange: this.handleChange.bind(this, 'nominee_name'),
                                        value: this.state.nominee_name,
                                        onBlur: this.handleSubmit.bind(this) }),
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'form-control-placeholder', htmlFor: 'nomName' },
                                        'Nominee Name'
                                    ),
                                    _react2.default.createElement('img', { src: "/assets" + "/img/nw-usr.svg" })
                                )
                            ),
                            errors && errors.length && errors.indexOf('nominee_name') > -1 ? commonMsgSpan : '',
                            _react2.default.createElement(
                                'div',
                                { className: 'col-12' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'ins-form-group' },
                                    _react2.default.createElement(
                                        'select',
                                        { className: 'ins-select-drop', name: 'nominee_relation', id: 'relation_dropdown', onChange: this.handleRelation.bind(this), value: this.state.nominee_relation },
                                        _react2.default.createElement(
                                            'option',
                                            { 'data-param': 'relation', disabled: true },
                                            'Nominee Relation'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            { 'data-param': 'relation', value: 'FATHER' },
                                            'FATHER'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            { 'data-param': 'relation', value: 'MOTHER' },
                                            'MOTHER'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            { 'data-param': 'relation', value: 'BROTHER' },
                                            'BROTHER'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            { 'data-param': 'relation', value: 'SISTER' },
                                            'SISTER'
                                        )
                                    ),
                                    _react2.default.createElement('img', { src: "/assets" + "/img/nw-usr.svg" })
                                )
                            ),
                            errors && errors.length && errors.indexOf('nominee_relation') > -1 ? commonMsgSpan : ''
                        )
                    )
                )
            );
        }
    }]);

    return DigitInsuranceForm;
}(_react2.default.Component);

exports.default = DigitInsuranceForm;

/***/ }),

/***/ "./dev/js/containers/vipClub/DigitInsuranceFormPage.js":
/*!*************************************************************!*\
  !*** ./dev/js/containers/vipClub/DigitInsuranceFormPage.js ***!
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

var _digitInsuranceForm = __webpack_require__(/*! ../../components/vipClub/digitInsuranceForm.js */ "./dev/js/components/vipClub/digitInsuranceForm.js");

var _digitInsuranceForm2 = _interopRequireDefault(_digitInsuranceForm);

var _digitStaticDataView = __webpack_require__(/*! ../../components/vipClub/digitStaticDataView.js */ "./dev/js/components/vipClub/digitStaticDataView.js");

var _digitStaticDataView2 = _interopRequireDefault(_digitStaticDataView);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var DigitInsuranceFormPage = function (_React$Component) {
    _inherits(DigitInsuranceFormPage, _React$Component);

    function DigitInsuranceFormPage(props) {
        _classCallCheck(this, DigitInsuranceFormPage);

        var _this = _possibleConstructorReturn(this, (DigitInsuranceFormPage.__proto__ || Object.getPrototypeOf(DigitInsuranceFormPage)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);
        _this.state = {
            source: parsed.source,
            is_from_organic: parsed.fromOrganic,
            is_pb: parsed.utm_source ? parsed.utm_source && parsed.utm_source.includes('policybazaar.com') : false,
            validateErrors: {},
            saveMembers: false
        };
        return _this;
    }

    _createClass(DigitInsuranceFormPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile(); // to get loggedIn user profile
            }
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (!this.state.saveMembers && Object.keys(props.selected_digit_plan).length > 0 && !props.currentSelectedDigitMembersId.length) {
                var loginUser = void 0;
                var isDefaultUser = void 0;
                var isDummyUser = void 0;
                var membersId = [];
                if (props.USER) {
                    loginUser = props.USER.defaultProfile;
                }

                if (props.USER.profiles && Object.keys(props.USER.profiles).length && props.USER.profiles[props.USER.defaultProfile]) {
                    isDefaultUser = props.USER.profiles[props.USER.defaultProfile].is_default_user;
                    isDummyUser = props.USER.profiles[props.USER.defaultProfile].isDummyUser;
                }
                if (!isDummyUser) {
                    membersId.push({ '0': loginUser, type: 'self' });
                } else {
                    membersId.push({ '0': 0, type: 'self' });
                }
                props.saveCurrentSelectedDigitMembers(membersId); // save current visible form member or selected user profile id
                this.setState({ saveMembers: true });
            }
        }
    }, {
        key: 'proceed',
        value: function proceed(isSms) {
            var _this2 = this;

            var extraDataParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            //new
            var success_id = void 0;
            var data = {};
            var pushData = {};
            var isDummyUser = void 0;
            var self_profile = {};
            var is_disable = false;
            var member_ref = '';
            var validatingErrors = {};
            var param = void 0;
            var parsed = queryString.parse(this.props.location.search);
            if (this.props.selected_digit_plan && Object.keys(this.props.selected_digit_plan).length > 0 && this.props.digit_self_details && Object.keys(this.props.digit_self_details).length > 0) {
                data.plan_id = this.props.selected_digit_plan.id;
                data.members = [];
                var fields = [];
                console.log(this.props.currentSelectedDigitMembersId);
                console.log(this.props.digit_self_details);
                this.props.currentSelectedDigitMembersId.map(function (val, key) {
                    if (Object.keys(_this2.props.digit_self_details).length > 0) {
                        fields = [];
                        param = _this2.props.digit_self_details[val[key]];
                        if (param && param.id !== "") {
                            if (param && Object.keys(param).length > 0) {
                                //common validation starts

                                if (param.name == "") {
                                    is_disable = true;
                                    fields.push('name');
                                }
                                if (param.last_name == "") {
                                    is_disable = true;
                                    fields.push('last_name');
                                }

                                if (param.title == "") {
                                    is_disable = true;
                                    fields.push('title');
                                }
                                if (param.pincode == "") {
                                    is_disable = true;
                                    fields.push('pincode');
                                }

                                if (param.phone_number == "") {
                                    is_disable = true;
                                    fields.push('phone_number');
                                }

                                if (param.address == "") {
                                    is_disable = true;
                                    fields.push('address');
                                }

                                if (param.nominee_name == "") {
                                    is_disable = true;
                                    fields.push('nominee_name');
                                }

                                if (param.nominee_relation == "") {
                                    is_disable = true;
                                    fields.push('nominee_relation');
                                }

                                // if (param.dob == null || param.dob == "") {
                                //     is_disable = true
                                //     fields.push('dob')
                                // }

                                if (param.email != '' && param.relation == 'self') {
                                    var validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                    validEmail = validEmail.test(param.email);
                                    if (!validEmail) {
                                        is_disable = true;
                                        fields.push('email');
                                    }
                                }
                            }
                            validatingErrors[param.id] = fields;
                        }
                    }
                });
                Object.keys(validatingErrors).forEach(function (key) {
                    if (validatingErrors[key].length > 0) {
                        is_disable = true;
                        member_ref = 'member_' + key;
                    }
                });
                this.setState({ validateErrors: validatingErrors });
                if (is_disable && document.getElementById(member_ref)) {
                    document.getElementById(member_ref).scrollIntoView();
                } else {
                    this.props.history.push('/covid-review');
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

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
                                            _react2.default.createElement(_digitInsuranceForm2.default, _extends({}, this.props, { validateErrors: this.state.validateErrors || [] })),
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
                                            ),
                                            _react2.default.createElement('div', { className: 'bottomMargin' })
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'sticky-btn fixed insuBtnsContainer' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'insu-right-orng-btn ins-buy-btn', onClick: function onClick() {
                                            return _this3.proceed();
                                        } },
                                    'Buy Now'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DigitInsuranceFormPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$USER = state.USER,
        common_utm_tags = _state$USER.common_utm_tags,
        user_loggedIn_number = _state$USER.user_loggedIn_number;
    var _state$VIPCLUB = state.VIPCLUB,
        digitPlans = _state$VIPCLUB.digitPlans,
        selected_digit_plan = _state$VIPCLUB.selected_digit_plan,
        digit_self_details = _state$VIPCLUB.digit_self_details,
        currentSelectedDigitMembersId = _state$VIPCLUB.currentSelectedDigitMembersId;


    return {
        USER: USER, common_utm_tags: common_utm_tags, user_loggedIn_number: user_loggedIn_number, selected_digit_plan: selected_digit_plan, digitPlans: digitPlans, digit_self_details: digit_self_details, currentSelectedDigitMembersId: currentSelectedDigitMembersId
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {

        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        sendOTP: function sendOTP(number, viaSms, viaWhatsapp, message_type, cb) {
            return dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb));
        },
        submitOTP: function submitOTP(number, otp, extraParamsData, cb) {
            return dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb));
        },
        resetAuth: function resetAuth() {
            return dispatch((0, _index.resetAuth)());
        },
        saveUserDetails: function saveUserDetails(self_data, criteria, forceadd) {
            return dispatch((0, _index.saveUserDetails)(self_data, criteria, forceadd));
        },
        saveCurrentSelectedDigitMembers: function saveCurrentSelectedDigitMembers(data, cb) {
            return dispatch((0, _index.saveCurrentSelectedDigitMembers)(data, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DigitInsuranceFormPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL2RpZ2l0SW5zdXJhbmNlRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy92aXBDbHViL0RpZ2l0SW5zdXJhbmNlRm9ybVBhZ2UuanMiXSwibmFtZXMiOlsiRGlnaXRJbnN1cmFuY2VGb3JtIiwicHJvcHMiLCJzdGF0ZSIsInRpdGxlIiwibmFtZSIsImxhc3RfbmFtZSIsIm1pZGRsZV9uYW1lIiwiZG9iIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJ1c2VyX3Bob25lX251bWJlciIsInBpbmNvZGUiLCJhZGRyZXNzIiwibm9taW5lZV9uYW1lIiwibm9taW5lZV9yZWxhdGlvbiIsImdlbmRlciIsImlkIiwicHJvZmlsZSIsInVzZXJQcm9maWxlcyIsInByb2ZpbGVfaWQiLCJwcm9maWxlX2ZsYWciLCJpc0R1bW15VXNlciIsImxvZ2luVXNlcklkIiwiVVNFUiIsInByb2ZpbGVzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImRlZmF1bHRQcm9maWxlIiwiZGlnaXRfc2VsZl9kZXRhaWxzIiwiYXNzaWduIiwic2V0U3RhdGUiLCJnZXRVc2VyRGV0YWlscyIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiZXhpdHN0aW5nX3VzZXJfcHJvZmlsZSIsImVtcHR5X3N0YXRlIiwicHJvZk5hbWUiLCJzcGxpdE5hbWUiLCJzcGxpdCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJmaWVsZCIsImdldEF0dHJpYnV0ZSIsInRpdGxlX3ZhbHVlIiwic2VsZl9kYXRhIiwiaXNfY2hhbmdlIiwic2F2ZVVzZXJEZXRhaWxzIiwiZm9ybUlzVmFsaWQiLCJ2YWxpZEVtYWlsIiwidGVzdCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJtZW1iZXJfaWQiLCJlcnJvcnMiLCJ2YWxpZGF0ZUVycm9ycyIsImNvbW1vbk1zZ1NwYW4iLCJoYW5kbGVUaXRsZSIsImJpbmQiLCJpbmRleE9mIiwiaGFuZGxlQ2hhbmdlIiwiQVNTRVRTX0JBU0VfVVJMIiwiaGFuZGxlRW1haWwiLCJoYW5kbGVSZWxhdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiRGlnaXRJbnN1cmFuY2VGb3JtUGFnZSIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJzb3VyY2UiLCJpc19mcm9tX29yZ2FuaWMiLCJmcm9tT3JnYW5pYyIsImlzX3BiIiwidXRtX3NvdXJjZSIsImluY2x1ZGVzIiwic2F2ZU1lbWJlcnMiLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiZ2V0VXNlclByb2ZpbGUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNlbGVjdGVkX2RpZ2l0X3BsYW4iLCJjdXJyZW50U2VsZWN0ZWREaWdpdE1lbWJlcnNJZCIsImxvZ2luVXNlciIsImlzRGVmYXVsdFVzZXIiLCJtZW1iZXJzSWQiLCJpc19kZWZhdWx0X3VzZXIiLCJwdXNoIiwidHlwZSIsInNhdmVDdXJyZW50U2VsZWN0ZWREaWdpdE1lbWJlcnMiLCJpc1NtcyIsImV4dHJhRGF0YVBhcmFtcyIsInN1Y2Nlc3NfaWQiLCJkYXRhIiwicHVzaERhdGEiLCJzZWxmX3Byb2ZpbGUiLCJpc19kaXNhYmxlIiwibWVtYmVyX3JlZiIsInZhbGlkYXRpbmdFcnJvcnMiLCJwYXJhbSIsInBsYW5faWQiLCJtZW1iZXJzIiwiZmllbGRzIiwibWFwIiwidmFsIiwia2V5IiwicmVsYXRpb24iLCJmb3JFYWNoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiaGlzdG9yeSIsIm9wZW5Qb3B1cCIsInByb2NlZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb21tb25fdXRtX3RhZ3MiLCJ1c2VyX2xvZ2dlZEluX251bWJlciIsIlZJUENMVUIiLCJkaWdpdFBsYW5zIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzZW5kT1RQIiwibnVtYmVyIiwidmlhU21zIiwidmlhV2hhdHNhcHAiLCJtZXNzYWdlX3R5cGUiLCJjYiIsInN1Ym1pdE9UUCIsIm90cCIsImV4dHJhUGFyYW1zRGF0YSIsInJlc2V0QXV0aCIsImNyaXRlcmlhIiwiZm9yY2VhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGtCOzs7QUFDRixnQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRJQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTSxLQURHO0FBRVRDLGtCQUFNLEVBRkc7QUFHVEMsdUJBQVUsRUFIRDtBQUlUQyx5QkFBWSxFQUpIO0FBS1RDLGlCQUFLLEVBTEk7QUFNVEMsbUJBQU8sRUFORTtBQU9UQywwQkFBYSxNQUFLUixLQUFMLENBQVdTLGlCQVBmO0FBUVRDLHFCQUFRLEVBUkM7QUFTVEMscUJBQVEsRUFUQztBQVVUQywwQkFBYSxFQVZKO0FBV1RDLDhCQUFpQixFQVhSO0FBWVRDLG9CQUFRLEVBWkM7QUFhVEMsZ0JBQUksRUFiSztBQWNUQyxxQkFBUSxFQWRDO0FBZVRDLDBCQUFhLEVBZko7QUFnQlRDLHdCQUFXLElBaEJGO0FBaUJUQywwQkFBYTtBQWpCSixTQUFiO0FBRmU7QUFxQmxCOzs7OzRDQUVtQjtBQUFBOztBQUNoQixnQkFBSUgsZ0JBQUo7QUFDQSxnQkFBSUksb0JBQUo7QUFDQSxnQkFBSUMsb0JBQUo7O0FBRUEsZ0JBQUksS0FBS3JCLEtBQUwsQ0FBV3NCLElBQVgsSUFBbUIsS0FBS3RCLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0JDLFFBQW5DLElBQStDQyxPQUFPQyxJQUFQLENBQVksS0FBS3pCLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0JDLFFBQTVCLEVBQXNDRyxNQUF0QyxHQUErQyxDQUFsRyxFQUFxRztBQUNqR04sOEJBQWMsS0FBS3BCLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0JDLFFBQWhCLENBQXlCLEtBQUt2QixLQUFMLENBQVdzQixJQUFYLENB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LE1BQVIsRUFBZUMsV0FBZixFQUEyQkMsWUFBM0IsRUFBeUNDLEVBQXpDO0FBQUEsbUJBQWdETixTQUFTLG9CQUFRRSxNQUFSLEVBQWVDLE1BQWYsRUFBc0JDLFdBQXRCLEVBQWtDQyxZQUFsQyxFQUFnREMsRUFBaEQsQ0FBVCxDQUFoRDtBQUFBLFNBSE47QUFJSEMsbUJBQVcsbUJBQUNMLE1BQUQsRUFBU00sR0FBVCxFQUFjQyxlQUFkLEVBQThCSCxFQUE5QjtBQUFBLG1CQUFxQ04sU0FBUyxzQkFBVUUsTUFBVixFQUFrQk0sR0FBbEIsRUFBc0JDLGVBQXRCLEVBQXVDSCxFQUF2QyxDQUFULENBQXJDO0FBQUEsU0FKUjtBQUtISSxtQkFBVztBQUFBLG1CQUFNVixTQUFTLHVCQUFULENBQU47QUFBQSxTQUxSO0FBTUgvRSx5QkFBZ0IseUJBQUNGLFNBQUQsRUFBVzRGLFFBQVgsRUFBb0JDLFFBQXBCO0FBQUEsbUJBQWlDWixTQUFTLDRCQUFnQmpGLFNBQWhCLEVBQTBCNEYsUUFBMUIsRUFBbUNDLFFBQW5DLENBQVQsQ0FBakM7QUFBQSxTQU5iO0FBT0gzQyx5Q0FBZ0MseUNBQUNJLElBQUQsRUFBTWlDLEVBQU47QUFBQSxtQkFBYU4sU0FBUyw0Q0FBZ0MzQixJQUFoQyxFQUFxQ2lDLEVBQXJDLENBQVQsQ0FBYjtBQUFBO0FBUDdCLEtBQVA7QUFTSCxDQVZEOztrQkFjZSx5QkFBUVosZUFBUixFQUEwQkssa0JBQTFCLEVBQThDdkQsc0JBQTlDLEMiLCJmaWxlIjoiMTQyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBEaWdpdEluc3VyYW5jZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGl0bGU6J21yLicsXG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGxhc3RfbmFtZTonJyxcbiAgICAgICAgICAgIG1pZGRsZV9uYW1lOicnLFxuICAgICAgICAgICAgZG9iOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBob25lX251bWJlcjp0aGlzLnByb3BzLnVzZXJfcGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgcGluY29kZTonJyxcbiAgICAgICAgICAgIGFkZHJlc3M6JycsXG4gICAgICAgICAgICBub21pbmVlX25hbWU6JycsXG4gICAgICAgICAgICBub21pbmVlX3JlbGF0aW9uOicnLFxuICAgICAgICAgICAgZ2VuZGVyOiAnJyxcbiAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgIHByb2ZpbGU6JycsXG4gICAgICAgICAgICB1c2VyUHJvZmlsZXM6e30sXG4gICAgICAgICAgICBwcm9maWxlX2lkOm51bGwsXG4gICAgICAgICAgICBwcm9maWxlX2ZsYWc6dHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBwcm9maWxlXG4gICAgICAgIGxldCBpc0R1bW15VXNlclxuICAgICAgICBsZXQgbG9naW5Vc2VySWRcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlzRHVtbXlVc2VyID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcbiAgICAgICAgICAgIGxvZ2luVXNlcklkID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaWRcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzW2xvZ2luVXNlcklkXSl7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzRHVtbXlVc2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLmRpZ2l0X3NlbGZfZGV0YWlsc1tsb2dpblVzZXJJZF0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzW2xvZ2luVXNlcklkXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoT2JqZWN0LmtleXMocHJvZmlsZSkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlzRHVtbXlVc2VyID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvZmlsZS5pc0R1bW15VXNlcil7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlLmlkID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aWQ6MH0sKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJEZXRhaWxzKHByb2ZpbGUpIC8vIGZpbGwgdXNlciBkZXRhaWxzIGluIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aWQ6cHJvZmlsZS5pZH0sKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJEZXRhaWxzKHByb2ZpbGUpIC8vIGZpbGwgdXNlciBkZXRhaWxzIGluIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgbG9naW5Vc2VySWRcbiAgICAgICAgaWYgKHByb3BzLlVTRVIgJiYgcHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyhwcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUucHJvZmlsZV9mbGFnICkge1xuICAgICAgICAgICAgbGV0IGlzRHVtbXlVc2VyID0gcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlclxuICAgICAgICAgICAgbG9naW5Vc2VySWQgPSBwcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzKS5sZW5ndGggPiAwKSB7IC8vIHJldHJpZXZlIGFscmVhZHkgbWVtYmVyIGRldGFpbHMgZnJvbSB1c2VyIHN0b3JlXG4gICAgICAgICAgICAgICAgbGV0IHByb2ZpbGVcbiAgICAgICAgICAgICAgICBpZiAoIWlzRHVtbXlVc2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5kaWdpdF9zZWxmX2RldGFpbHNbbG9naW5Vc2VySWRdKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5kaWdpdF9zZWxmX2RldGFpbHNbbG9naW5Vc2VySWRdKVxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9maWxlKTsgICAgXG4gICAgICAgICAgICAgICAgaWYocHJvZmlsZSAmJiBPYmplY3Qua2V5cyhwcm9maWxlKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpZDpwcm9maWxlLmlkLHByb2ZpbGVfZmxhZzpmYWxzZX0sKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VXNlckRldGFpbHMocHJvZmlsZSkgLy8gZmlsbCB1c2VyIGRldGFpbHMgaW4gZm9ybSAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZSBpZiAocHJvcHMuVVNFUiAmJiBwcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCA+IDAgICYmIHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvZmlsZVxuICAgICAgICAgICAgICAgIGxldCBleGl0c3RpbmdfdXNlcl9wcm9maWxlXG4gICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIGFscmVhZHkgbWVtYmVyIGRldGFpbHMgZnJvbSB1c2VyIHByb2ZpbGVzXG4gICAgICAgICAgICAgICAgcHJvZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pXG4gICAgICAgICAgICAgICAgaWYgKHByb2ZpbGUgJiYgT2JqZWN0LmtleXMocHJvZmlsZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2ZpbGUuaXNEdW1teVVzZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS5pZCA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lkOjAscHJvZmlsZV9mbGFnOmZhbHNlfSwoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0VXNlckRldGFpbHMocHJvZmlsZSkvLyBmaWxsIHVzZXIgZGV0YWlscyBpbiBmb3JtICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpZDpwcm9maWxlLmlkLHByb2ZpbGVfZmxhZzpmYWxzZX0sKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJEZXRhaWxzKHByb2ZpbGUpICAgIC8vIGZpbGwgdXNlciBkZXRhaWxzIGluIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VXNlckRldGFpbHMocHJvZmlsZSkge1xuICAgICAgICBsZXQgZW1wdHlfc3RhdGUgPXt9XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2ZpbGUpXG4gICAgICAgIGlmKE9iamVjdC5rZXlzKHByb2ZpbGUpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaWYocHJvZmlsZS5pZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJvZmlsZV9pZDpwcm9maWxlLmlkP3Byb2ZpbGUuaWQ6Jyd9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJvZmlsZS5wcm9maWxlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwcm9maWxlX2lkOnByb2ZpbGUucHJvZmlsZT9wcm9maWxlLnByb2ZpbGU6Jyd9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJvZmlsZS5nZW5kZXIgPT0gJ20nKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtnZW5kZXI6cHJvZmlsZS5nZW5kZXI/cHJvZmlsZS5nZW5kZXI6JycsdGl0bGU6ICdtci4nfSlcbiAgICAgICAgICAgIH1lbHNlIGlmKHByb2ZpbGUuZ2VuZGVyID09ICdmJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z2VuZGVyOnByb2ZpbGUuZ2VuZGVyP3Byb2ZpbGUuZ2VuZGVyOicnLHRpdGxlOiAnbWlzcyd9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihwcm9maWxlLm5hbWUgPT0gJ1VzZXInIHx8IHByb2ZpbGUubmFtZSA9PSAndXNlcicpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOicnfSlcbiAgICAgICAgICAgIH1lbHNlIGlmKHByb2ZpbGUubmFtZSl7XG4gICAgICAgICAgICAgICAgbGV0IHByb2ZOYW1lID0gcHJvZmlsZS5uYW1lO1xuICAgICAgICAgICAgICAgIGxldCBzcGxpdE5hbWUgPSBwcm9mTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBzcGxpdE5hbWVbMF0gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6c3BsaXROYW1lWzBdP3NwbGl0TmFtZVswXTonJ30pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBzcGxpdE5hbWVbMV0gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RfbmFtZTpzcGxpdE5hbWVbMV0/c3BsaXROYW1lWzFdOicnfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwcm9maWxlLmVtYWlsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDpwcm9maWxlLmVtYWlsfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByb2ZpbGUucGhvbmVfbnVtYmVyKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwaG9uZV9udW1iZXI6cHJvZmlsZS5waG9uZV9udW1iZXJ9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJvZmlsZS5waW5jb2RlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwaW5jb2RlOnByb2ZpbGUucGluY29kZX0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwcm9maWxlLmFkZHJlc3Mpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FkZHJlc3M6cHJvZmlsZS5hZGRyZXNzfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByb2ZpbGUubm9taW5lZV9uYW1lKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtub21pbmVlX25hbWU6cHJvZmlsZS5ub21pbmVlX25hbWV9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJvZmlsZS5ub21pbmVlX3JlbGF0aW9uKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtub21pbmVlX3JlbGF0aW9uOnByb2ZpbGUubm9taW5lZV9yZWxhdGlvbn0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRvYjogcHJvZmlsZS5kb2IgPyBwcm9maWxlLmRvYiA6JydcbiAgICAgICAgICAgIH0sKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUmVsYXRpb24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBub21pbmVlX3JlbGF0aW9uOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSwoKSA9PntcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KGV2ZW50KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShmaWVsZCwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJhbScpXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlVGl0bGUoZmllbGQsIGV2ZW50KSB7XG4gICAgICAgIGxldCB0aXRsZV92YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICBpZiAodGl0bGVfdmFsdWUgPT0gJ21yLicpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5kZXI6ICdtJyx0aXRsZTp0aXRsZV92YWx1ZSB9KVxuICAgICAgICB9IGVsc2UgaWYgKHRpdGxlX3ZhbHVlID09ICdtaXNzJyB8fCB0aXRsZV92YWx1ZSA9PSAnbXJzLicpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5kZXI6ICdmJyx0aXRsZTp0aXRsZV92YWx1ZSB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0sICgpID0+IHtcbiAgICAgICAgICAgIHZhciBzZWxmX2RhdGEgPSB0aGlzLnN0YXRlXG4gICAgICAgICAgICBzZWxmX2RhdGEuaXNfY2hhbmdlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlVXNlckRldGFpbHMoJ3NlbGZfZGF0YScsIHNlbGZfZGF0YSkgLy8gdG8gc2F2ZSBlbnRlcmVkIGRhdGEgaW4gc3RvcmVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVFbWFpbCgpIHtcbiAgICAgICAgbGV0IGZvcm1Jc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW1haWwgIT0gJycpIHtcbiAgICAgICAgICAgIGxldCB2YWxpZEVtYWlsID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgICAgICAgICB2YWxpZEVtYWlsID0gdmFsaWRFbWFpbC50ZXN0KHRoaXMuc3RhdGUuZW1haWwpO1xuICAgICAgICAgICAgaWYgKHZhbGlkRW1haWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIEVudGVyIHZhbGlkIEVtYWlsXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgbGV0IHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSlcbiAgICBpZiAoIXByb2ZpbGUuaXNEdW1teVVzZXIgJiYgdGhpcy5wcm9wcy5tZW1iZXJfaWQgPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlX2lkOiAwLCBpZDowIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVfaWQ6IG51bGwsIGlkOnByb2ZpbGUuaXNEdW1teVVzZXI/MDpwcm9maWxlLmlkIH0pXG4gICAgfVxuICAgIHZhciBzZWxmX2RhdGEgPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5wcm9wcy5zYXZlVXNlckRldGFpbHMoJ3NlbGZfZGF0YScsIHNlbGZfZGF0YSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBpc0R1bW15VXNlclxuICAgICAgICBsZXQgcHJvZmlsZV9pZCA9IDBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSkge1xuICAgICAgICAgICAgaXNEdW1teVVzZXIgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlclxuICAgICAgICAgICAgcHJvZmlsZV9pZCA9ICBpc0R1bW15VXNlcj8wOnRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVycm9ycyA9IFtdXG4gICAgICAgIGlmKHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycykubGVuZ3RoKXtcbiAgICAgICAgICAgZXJyb3JzID0gdGhpcy5wcm9wcy52YWxpZGF0ZUVycm9yc1twcm9maWxlX2lkXVxuICAgICAgICB9XG4gICAgICAgIGxldCBjb21tb25Nc2dTcGFuID0gPHNwYW4gY2xhc3NOYW1lPVwiZmlsbC1lcnJvci1zcGFuXCI+KlRoaXMgaXMgYSBtYW5kYXRvcnkgZmllbGQ8L3NwYW4+XG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwIGRpZ2l0LWlucHV0LWNvbnRhaW5lclwiIGlkPXtpc0R1bW15VXNlciA/ICdtZW1iZXJfMCcgOiBgbWVtYmVyXyR7cHJvZmlsZV9pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXN1Yi1mb3Jtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxociBjbGFzc05hbWU9XCJpbnMtaW50ZXJuYWwtaHJcIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWZvcm0taW5wdXQtZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1mb3JtLWhlZFwiPkRldGFpbHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic3ViLWZvcm0taGVkLWNsaWNrXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgTW9yZSA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JndC1hcncuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUudGl0bGUgPT0gJ21yLicgPyAnYnRuLWFjdGl2ZScgOiAnJ31gfSBuYW1lPVwidGl0bGVcIiB2YWx1ZT0nbXIuJyBkYXRhLXBhcmFtPSd0aXRsZScgb25DbGljaz17dGhpcy5oYW5kbGVUaXRsZS5iaW5kKHRoaXMsICdtci4nKX0+TXIuPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS50aXRsZSA9PSAnbWlzcycgPyAnYnRuLWFjdGl2ZScgOiAnJ31gfSBuYW1lPVwidGl0bGVcIiB2YWx1ZT0nbWlzcycgZGF0YS1wYXJhbT0ndGl0bGUnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGUuYmluZCh0aGlzLCAnbWlzcy4nKX0+TXMuPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS50aXRsZSA9PSAnbXJzLicgPyAnYnRuLWFjdGl2ZScgOiAnJ31gfSB2YWx1ZT0nbXJzLicgbmFtZT1cInRpdGxlXCIgZGF0YS1wYXJhbT0ndGl0bGUnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGUuYmluZCh0aGlzLCAnbXJzLicpfSA+TXJzLjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzICYmIGVycm9ycy5sZW5ndGggJiYgZXJyb3JzLmluZGV4T2YoJ3RpdGxlJykgPiAtMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbk1zZ1NwYW4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGlucC1tYXJnaW4tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZTFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbFwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJuYW1lXCIgZGF0YS1wYXJhbT0nbmFtZScgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICduYW1lJyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9XCJuYW1lMVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCAmJiBlcnJvcnMuaW5kZXhPZignbmFtZScpID4gLTEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uTXNnU3BhbiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBpbnAtbWFyZ2luLXJpZ2h0IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtaWRkbGVfbmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cIm1pZGRsZV9uYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUubWlkZGxlX25hbWV9IGRhdGEtcGFyYW09J21pZGRsZV9uYW1lJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnbWlkZGxlX25hbWUnKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9XCJtaWRkbGVfbmFtZVwiPk1pZGRsZSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbnctdXNyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxhc3RfbmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cImxhc3RfbmFtZVwiIGRhdGEtcGFyYW09J2xhc3RfbmFtZScgdmFsdWU9e3RoaXMuc3RhdGUubGFzdF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ2xhc3RfbmFtZScpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9XCJsYXN0X25hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzICYmIGVycm9ycy5sZW5ndGggJiYgZXJyb3JzLmluZGV4T2YoJ2xhc3RfbmFtZScpID4gLTEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uTXNnU3BhbiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiaXNuLWRhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCBpbnMtZGF0ZS1waWNrZXItc3R5bGVcIiByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJvZmZcIiBuYW1lPVwiZG9iXCIgZGF0YS1wYXJhbT0nZG9iJyB2YWx1ZT17dGhpcy5zdGF0ZS5kb2J9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ2RvYicpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWxcIiBodG1sRm9yPVwiaW5zLWRhdGVcIj5EYXRlIG9mIGJpcnRoPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2FsZW5kYXItMDEuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzICYmIGVycm9ycy5sZW5ndGggJiYgZXJyb3JzLmluZGV4T2YoJ2RvYicpID4gLTEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uTXNnU3BhbiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wnIHJlcXVpcmVkIGlkPVwibWlsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlRW1haWwuYmluZCh0aGlzKX0gZGF0YS1wYXJhbT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywnZW1haWwnKX0gdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbC1wbGFjZWhvbGRlciAnIGh0bWxGb3I9XCJtaWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21haWwtMDEuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzICYmIGVycm9ycy5sZW5ndGggJiYgZXJyb3JzLmluZGV4T2YoJ2VtYWlsJykgPiAtMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25Nc2dTcGFuIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm1ibFwiIG1heD1cIjk5OTk5OTk5OTlcIiBtaW49XCIxMDAwMDAwMDAwXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgaW5zLWRhdGUtcGlja2VyLXN0eWxlXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cInBob25lX251bWJlclwiIGRhdGEtcGFyYW09J3Bob25lX251bWJlcicgdmFsdWU9JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdwaG9uZV9udW1iZXInKX0gdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVfbnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPVwibWJsXCI+TW9iaWxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2FsbC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCAmJiBlcnJvcnMuaW5kZXhPZigncGhvbmVfbnVtYmVyJykgPiAtMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25Nc2dTcGFuIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInBpblwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sIGlucy1kYXRlLXBpY2tlci1zdHlsZVwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJwaW5jb2RlXCIgZGF0YS1wYXJhbT0ncGluY29kZScgdmFsdWU9e3RoaXMuc3RhdGUucGluY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdwaW5jb2RlJyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPVwicGluXCI+UGluIENvZGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sb2NhdGlvbi0wMS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCAmJiBlcnJvcnMuaW5kZXhPZigncGluY29kZScpID4gLTEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uTXNnU3BhbiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgaW5zLWRhdGUtcGlja2VyLXN0eWxlXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cImFkZHJlc3NcIiBkYXRhLXBhcmFtPSdhZGRyZXNzJyB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ2FkZHJlc3MnKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9ICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlclwiIGh0bWxGb3I9XCJhZHJcIj5BZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzICYmIGVycm9ycy5sZW5ndGggJiYgZXJyb3JzLmluZGV4T2YoJ2FkZHJlc3MnKSA+IC0xID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbk1zZ1NwYW4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGlucC1tYXJnaW4tcmlnaHQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5vbU5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbFwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJuYW1lXCIgZGF0YS1wYXJhbT0nbm9taW5lZV9uYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ25vbWluZWVfbmFtZScpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5vbWluZWVfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPVwibm9tTmFtZVwiPk5vbWluZWUgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCAmJiBlcnJvcnMuaW5kZXhPZignbm9taW5lZV9uYW1lJykgPiAtMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25Nc2dTcGFuIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJpbnMtc2VsZWN0LWRyb3BcIiBuYW1lPVwibm9taW5lZV9yZWxhdGlvblwiIGlkPVwicmVsYXRpb25fZHJvcGRvd25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVSZWxhdGlvbi5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5ub21pbmVlX3JlbGF0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRhdGEtcGFyYW09XCJyZWxhdGlvblwiIGRpc2FibGVkID5Ob21pbmVlIFJlbGF0aW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkYXRhLXBhcmFtPVwicmVsYXRpb25cIiB2YWx1ZT1cIkZBVEhFUlwiPkZBVEhFUjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGF0YS1wYXJhbT1cInJlbGF0aW9uXCIgdmFsdWU9XCJNT1RIRVJcIj5NT1RIRVI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRhdGEtcGFyYW09XCJyZWxhdGlvblwiIHZhbHVlPVwiQlJPVEhFUlwiPkJST1RIRVI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRhdGEtcGFyYW09XCJyZWxhdGlvblwiIHZhbHVlPVwiU0lTVEVSXCI+U0lTVEVSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbnctdXNyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoICYmIGVycm9ycy5pbmRleE9mKCdub21pbmVlX3JlbGF0aW9uJykgPiAtMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25Nc2dTcGFuIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IERpZ2l0SW5zdXJhbmNlRm9ybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBzZW5kT1RQLCBzdWJtaXRPVFAsIHJlc2V0QXV0aCwgZ2V0VXNlclByb2ZpbGUsIHNhdmVVc2VyRGV0YWlscywgc2F2ZUN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVycyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgRGlnaXRJbnN1cmFuY2VGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdmlwQ2x1Yi9kaWdpdEluc3VyYW5jZUZvcm0uanMnXG5pbXBvcnQgRGlnaXRTdGF0aWNEYXRhVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpcENsdWIvZGlnaXRTdGF0aWNEYXRhVmlldy5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIERpZ2l0SW5zdXJhbmNlRm9ybVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykgeyAgICBcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIHNvdXJjZTpwYXJzZWQuc291cmNlLFxuICAgICAgICAgICAgaXNfZnJvbV9vcmdhbmljOnBhcnNlZC5mcm9tT3JnYW5pYyxcbiAgICAgICAgICAgIGlzX3BiOnBhcnNlZC51dG1fc291cmNlP3BhcnNlZC51dG1fc291cmNlICYmIHBhcnNlZC51dG1fc291cmNlLmluY2x1ZGVzKCdwb2xpY3liYXphYXIuY29tJyk6ZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZUVycm9yczp7fSxcbiAgICAgICAgICAgIHNhdmVNZW1iZXJzOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKCkgLy8gdG8gZ2V0IGxvZ2dlZEluIHVzZXIgcHJvZmlsZVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcyl7XG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLnNhdmVNZW1iZXJzICYmIE9iamVjdC5rZXlzKHByb3BzLnNlbGVjdGVkX2RpZ2l0X3BsYW4pLmxlbmd0aCA+MCAmJiAhcHJvcHMuY3VycmVudFNlbGVjdGVkRGlnaXRNZW1iZXJzSWQubGVuZ3RoKXtcbiAgICAgICAgICAgIGxldCBsb2dpblVzZXJcbiAgICAgICAgICAgIGxldCBpc0RlZmF1bHRVc2VyXG4gICAgICAgICAgICBsZXQgaXNEdW1teVVzZXJcbiAgICAgICAgICAgIGxldCBtZW1iZXJzSWQgPSBbXVxuICAgICAgICAgICAgaWYocHJvcHMuVVNFUil7XG4gICAgICAgICAgICAgICAgbG9naW5Vc2VyID0gcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihwcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCAmJiBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKXtcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHRVc2VyID0gcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc19kZWZhdWx0X3VzZXJcbiAgICAgICAgICAgICAgICBpc0R1bW15VXNlciA9IHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCFpc0R1bW15VXNlcil7XG4gICAgICAgICAgICAgICAgbWVtYmVyc0lkLnB1c2goeycwJzpsb2dpblVzZXIsIHR5cGU6ICdzZWxmJ30pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBtZW1iZXJzSWQucHVzaCh7JzAnOjAsIHR5cGU6J3NlbGYnfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BzLnNhdmVDdXJyZW50U2VsZWN0ZWREaWdpdE1lbWJlcnMobWVtYmVyc0lkKSAvLyBzYXZlIGN1cnJlbnQgdmlzaWJsZSBmb3JtIG1lbWJlciBvciBzZWxlY3RlZCB1c2VyIHByb2ZpbGUgaWRcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYXZlTWVtYmVyczogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2VlZChpc1NtcywgZXh0cmFEYXRhUGFyYW1zID0ge30pIHsgLy9uZXdcbiAgICAgICAgbGV0IHN1Y2Nlc3NfaWRcbiAgICAgICAgbGV0IGRhdGEgPSB7fVxuICAgICAgICBsZXQgcHVzaERhdGEgPSB7fVxuICAgICAgICBsZXQgaXNEdW1teVVzZXJcbiAgICAgICAgbGV0IHNlbGZfcHJvZmlsZSA9IHt9XG4gICAgICAgIGxldCBpc19kaXNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IG1lbWJlcl9yZWYgPSAnJ1xuICAgICAgICBsZXQgdmFsaWRhdGluZ0Vycm9ycyA9IHt9XG4gICAgICAgIGxldCBwYXJhbVxuICAgICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkX2RpZ2l0X3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9kaWdpdF9wbGFuKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkYXRhLnBsYW5faWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkX2RpZ2l0X3BsYW4uaWRcbiAgICAgICAgICAgIGRhdGEubWVtYmVycyA9IFtdXG4gICAgICAgICAgICBsZXQgZmllbGRzID0gW11cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkRGlnaXRNZW1iZXJzSWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5kaWdpdF9zZWxmX2RldGFpbHMpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWREaWdpdE1lbWJlcnNJZC5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcyA9IFtdXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtID0gdGhpcy5wcm9wcy5kaWdpdF9zZWxmX2RldGFpbHNbdmFsW2tleV1dXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhcmFtICYmIHBhcmFtLmlkICE9PSBcIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbSAmJiBPYmplY3Qua2V5cyhwYXJhbSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29tbW9uIHZhbGlkYXRpb24gc3RhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0ubmFtZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKCduYW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLmxhc3RfbmFtZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKCdsYXN0X25hbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbS50aXRsZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKCd0aXRsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbS5waW5jb2RlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZGlzYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goJ3BpbmNvZGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbS5waG9uZV9udW1iZXIgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19kaXNhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMucHVzaCgncGhvbmVfbnVtYmVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0uYWRkcmVzcyA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKCdhZGRyZXNzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0ubm9taW5lZV9uYW1lID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZGlzYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goJ25vbWluZWVfbmFtZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLm5vbWluZWVfcmVsYXRpb24gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19kaXNhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMucHVzaCgnbm9taW5lZV9yZWxhdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHBhcmFtLmRvYiA9PSBudWxsIHx8IHBhcmFtLmRvYiA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlzX2Rpc2FibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZpZWxkcy5wdXNoKCdkb2InKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbS5lbWFpbCAhPSAnJyAmJiBwYXJhbS5yZWxhdGlvbiA9PSAnc2VsZicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkRW1haWwgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRFbWFpbCA9IHZhbGlkRW1haWwudGVzdChwYXJhbS5lbWFpbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZEVtYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19kaXNhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goJ2VtYWlsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpbmdFcnJvcnNbcGFyYW0uaWRdID0gZmllbGRzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsaWRhdGluZ0Vycm9ycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpbmdFcnJvcnNba2V5XS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcl9yZWYgPSBgbWVtYmVyXyR7a2V5fWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0ZUVycm9yczogdmFsaWRhdGluZ0Vycm9ycyB9KVxuICAgICAgICAgICAgaWYgKGlzX2Rpc2FibGUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVtYmVyX3JlZikpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW1iZXJfcmVmKS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NvdmlkLXJldmlldycpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBhcnRpY2xlLWNvbnRhaW5lciBib3R0b21NYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtMTAgY29sLWxnLTEwIGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IHRvcCBzZWN0aW9uIHdpdGggaWNvbnMgYW5kIGxpc3RpbmcgPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8RGlnaXRTdGF0aWNEYXRhVmlldyAvPiAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PSB0b3Agc2VjdGlvbiB3aXRoIGljb25zIGFuZCBsaXN0aW5nID09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT0gU3RlcHMgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTAgZGlnaS1zdGVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1zdGF0dXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX21lbnVcIiBpZD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl90YWJzXCIgaWQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJfaW5hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkNob29zZSBZb3VyIFBsYW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndGFiX2luYWN0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkZpbGwgTWVtYmVyIERldGFpbHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYl9kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+UGF5bWVudDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWdpdEluc3VyYW5jZUZvcm0gey4uLnRoaXMucHJvcHN9IHZhbGlkYXRlRXJyb3JzPXt0aGlzLnN0YXRlLnZhbGlkYXRlRXJyb3JzIHx8IFtdfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybS1jb250LWRpZ2lcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIGh0bWxmb3JtPVwidGVzdDExXCIgc3R5bGU9e3sgJ2ZvbnRXZWlnaHQnOiAnNTAwJywgJ2ZvbnRTaXplJzogJzEzcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkZWZhdWx0Q2hlY2tlZCBjbGFzc05hbWU9XCJpbnMtY2hrLWJ4XCIgdmFsdWU9XCJcIiBpZD1cInRlc3QxMVwiIG5hbWU9XCJmcnVpdC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+SSBBZ3JlZSB0byB0aGUgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e3RoaXMub3BlblBvcHVwfT5UZXJtcyBhbmQgQ29uZGl0aW9uczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tTWFyZ2luXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IENvbW1vbiBidXR0b24gPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktYnRuIGZpeGVkIGluc3VCdG5zQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5zdS1yaWdodC1vcm5nLWJ0biBpbnMtYnV5LWJ0blwiIG9uQ2xpY2s9eygpPT50aGlzLnByb2NlZWQoKX0+QnV5IE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PSBDb21tb24gYnV0dG9uID09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG5cbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IFVTRVIgPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgY29tbW9uX3V0bV90YWdzLCB1c2VyX2xvZ2dlZEluX251bWJlciB9ID0gc3RhdGUuVVNFUlxuICAgIGxldCB7ICBkaWdpdFBsYW5zLHNlbGVjdGVkX2RpZ2l0X3BsYW4sZGlnaXRfc2VsZl9kZXRhaWxzLGN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVyc0lkIH0gPSBzdGF0ZS5WSVBDTFVCXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIFVTRVIsICBjb21tb25fdXRtX3RhZ3MsIHVzZXJfbG9nZ2VkSW5fbnVtYmVyLCBzZWxlY3RlZF9kaWdpdF9wbGFuLGRpZ2l0UGxhbnMsIGRpZ2l0X3NlbGZfZGV0YWlscyxjdXJyZW50U2VsZWN0ZWREaWdpdE1lbWJlcnNJZFxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKSxcbiAgICAgICAgc2VuZE9UUDogKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikgPT4gZGlzcGF0Y2goc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpKSxcbiAgICAgICAgc3VibWl0T1RQOiAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zRGF0YSxjYikgPT4gZGlzcGF0Y2goc3VibWl0T1RQKG51bWJlciwgb3RwLGV4dHJhUGFyYW1zRGF0YSwgY2IpKSxcbiAgICAgICAgcmVzZXRBdXRoOiAoKSA9PiBkaXNwYXRjaChyZXNldEF1dGgoKSksXG4gICAgICAgIHNhdmVVc2VyRGV0YWlsczooc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSA9PiBkaXNwYXRjaChzYXZlVXNlckRldGFpbHMoc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSksXG4gICAgICAgIHNhdmVDdXJyZW50U2VsZWN0ZWREaWdpdE1lbWJlcnM6KGRhdGEsY2IpID0+IGRpc3BhdGNoKHNhdmVDdXJyZW50U2VsZWN0ZWREaWdpdE1lbWJlcnMoZGF0YSxjYikpLFxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShEaWdpdEluc3VyYW5jZUZvcm1QYWdlKSJdLCJzb3VyY2VSb290IjoiIn0=