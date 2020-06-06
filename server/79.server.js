exports.ids = [79];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Loader extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DigitInsuranceForm extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'mr.',
            name: '',
            last_name: '',
            middle_name: '',
            dob: '',
            email: '',
            phone_number: this.props.user_phone_number,
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
    }

    componentDidMount() {
        let profile;
        let isDummyUser;
        let loginUserId;

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
                        this.setState({ id: 0 }, () => {
                            this.getUserDetails(profile); // fill user details in form
                        });
                    } else {
                        this.setState({ id: profile.id }, () => {
                            this.getUserDetails(profile); // fill user details in form
                        });
                    }
                }
            }
        }
    }

    componentWillReceiveProps(props) {
        let self = this;
        let loginUserId;
        if (props.USER && props.USER.profiles && Object.keys(props.USER.profiles).length > 0 && this.state.profile_flag) {
            let isDummyUser = props.USER.profiles[props.USER.defaultProfile].isDummyUser;
            loginUserId = props.USER.defaultProfile;
            if (Object.keys(props.digit_self_details).length > 0) {
                // retrieve already member details from user store
                let profile;
                if (!isDummyUser) {
                    profile = Object.assign({}, props.digit_self_details[loginUserId]);
                } else {
                    profile = Object.assign({}, props.digit_self_details[loginUserId]);
                }
                console.log(profile);
                if (profile && Object.keys(profile).length) {
                    this.setState({ id: profile.id, profile_flag: false }, () => {
                        this.getUserDetails(profile); // fill user details in form    
                    });
                }
            } else if (props.USER && props.USER.profiles && Object.keys(props.USER.profiles).length > 0 && props.USER.profiles[props.USER.defaultProfile]) {
                let profile;
                let exitsting_user_profile;
                // retrieve already member details from user profiles
                profile = Object.assign({}, props.USER.profiles[props.USER.defaultProfile]);
                if (profile && Object.keys(profile).length) {
                    if (profile.isDummyUser) {
                        profile.id = 0;
                        this.setState({ id: 0, profile_flag: false }, () => {
                            this.getUserDetails(profile); // fill user details in form    
                        });
                    } else {
                        this.setState({ id: profile.id, profile_flag: false }, () => {
                            this.getUserDetails(profile); // fill user details in form
                        });
                    }
                }
            }
        }
    }
    getUserDetails(profile) {
        let empty_state = {};
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
                let profName = profile.name;
                let splitName = profName.split(' ');
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
            }, () => {
                this.handleSubmit();
            });
        }
    }

    handleRelation(event) {
        this.setState({
            nominee_relation: event.target.value
        }, () => {
            this.handleSubmit(event);
        });
    }

    handleChange(field, event) {
        this.setState({
            [event.target.getAttribute('data-param')]: event.target.value
        });
    }

    handleTitle(field, event) {
        let title_value = event.target.value;
        if (title_value == 'mr.') {
            this.setState({ gender: 'm', title: title_value });
        } else if (title_value == 'miss' || title_value == 'mrs.') {
            this.setState({ gender: 'f', title: title_value });
        }
        this.setState({ title: event.target.value }, () => {
            var self_data = this.state;
            self_data.is_change = true;
            this.props.saveUserDetails('self_data', self_data); // to save entered data in store
        });
    }

    handleEmail() {
        let formIsValid = true;
        if (this.state.email != '') {
            let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            validEmail = validEmail.test(this.state.email);
            if (validEmail) {
                this.handleSubmit();
            } else {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter valid Email" });
            }
        }
    }

    handleSubmit() {
        let profile = Object.assign({}, this.props.USER.profiles[this.props.USER.defaultProfile]);
        if (!profile.isDummyUser && this.props.member_id > 0) {
            this.setState({ profile_id: 0, id: 0 });
        } else {
            this.setState({ profile_id: null, id: profile.isDummyUser ? 0 : profile.id });
        }
        var self_data = this.state;
        this.props.saveUserDetails('self_data', self_data);
    }

    render() {
        let isDummyUser;
        let profile_id = 0;
        if (this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.profiles[this.props.USER.defaultProfile]) {
            isDummyUser = this.props.USER.profiles[this.props.USER.defaultProfile].isDummyUser;
            profile_id = isDummyUser ? 0 : this.props.USER.profiles[this.props.USER.defaultProfile].id;
        }
        let errors = [];
        if (this.props.validateErrors && Object.keys(this.props.validateErrors).length) {
            errors = this.props.validateErrors[profile_id];
        }
        let commonMsgSpan = _react2.default.createElement(
            'span',
            { className: 'fill-error-span' },
            '*This is a mandatory field'
        );
        return _react2.default.createElement(
            'div',
            { className: 'widget mrb-10 digit-input-container', id: isDummyUser ? 'member_0' : `member_${profile_id}` },
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
                            { className: `label-names-buttons ${this.state.title == 'mr.' ? 'btn-active' : ''}`, name: 'title', value: 'mr.', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mr.') },
                            'Mr.'
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: `label-names-buttons ${this.state.title == 'miss' ? 'btn-active' : ''}`, name: 'title', value: 'miss', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'miss.') },
                            'Ms.'
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: `label-names-buttons ${this.state.title == 'mrs.' ? 'btn-active' : ''}`, value: 'mrs.', name: 'title', 'data-param': 'title', onClick: this.handleTitle.bind(this, 'mrs.') },
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
                                _react2.default.createElement('input', { type: 'number', id: 'mbl', max: '9999999999', min: '1000000000', className: 'form-control ins-form-control ins-date-picker-style', required: true, autoComplete: 'off', name: 'phone_number', 'data-param': 'phone_number', value: '',
                                    onChange: this.handleChange.bind(this, 'phone_number'), value: this.state.phone_number,
                                    onBlur: this.handleSubmit.bind(this) }),
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
}

exports.default = DigitInsuranceForm;

/***/ }),

/***/ "./dev/js/components/vipClub/digitStaticDataView.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/vipClub/digitStaticDataView.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DigitStaticDataView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: 'one'
        };
    }

    render() {
        let dwnlUrl = 'https://drive.google.com/file/d/1furIUXTcmwgA6zQ1ipfydFDcEGleq2RE/view';
        return _react2.default.createElement(
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
                        { href: 'https://drive.google.com/file/d/1furIUXTcmwgA6zQ1ipfydFDcEGleq2RE/view', target: '_blank', download: true },
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
                            { onClick: () => this.setState({ toggle: 'one' }) },
                            _react2.default.createElement(
                                'p',
                                { className: this.state.toggle == "one" ? 'active' : 'ins-tab-inactive' },
                                'Features'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { onClick: () => this.setState({ toggle: 'two' }) },
                            _react2.default.createElement(
                                'p',
                                { className: this.state.toggle == "two" ? 'active' : 'ins-tab-inactive' },
                                'What\'s not Covered?'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ins-tabs-content widget-content' },
                    this.state.toggle == "one" ? _react2.default.createElement(
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
                    ) : _react2.default.createElement(
                        'ul',
                        null,
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
        );
    }
}

exports.default = DigitStaticDataView;

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");

class DigitInsuranceFormPage extends _react2.default.Component {

    constructor(props) {
        super(props);
        const parsed = queryString.parse(this.props.location.search);
        this.state = {
            source: parsed.source,
            is_from_organic: parsed.fromOrganic,
            is_pb: parsed.utm_source ? parsed.utm_source && parsed.utm_source.includes('policybazaar.com') : false,
            validateErrors: {},
            saveMembers: false
        };
    }

    componentDidMount() {

        if (_storage2.default.checkAuth()) {
            this.props.getUserProfile(); // to get loggedIn user profile
        }
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    componentWillReceiveProps(props) {
        if (!this.state.saveMembers && Object.keys(props.selected_digit_plan).length > 0 && !props.currentSelectedDigitMembersId.length) {
            let loginUser;
            let isDefaultUser;
            let isDummyUser;
            let membersId = [];
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

    proceed(isSms, extraDataParams = {}) {
        //new
        let success_id;
        let data = {};
        let pushData = {};
        let isDummyUser;
        let self_profile = {};
        let is_disable = false;
        let member_ref = '';
        let validatingErrors = {};
        let param;
        let parsed = queryString.parse(this.props.location.search);
        if (this.props.selected_digit_plan && Object.keys(this.props.selected_digit_plan).length > 0 && this.props.digit_self_details && Object.keys(this.props.digit_self_details).length > 0) {
            data.plan_id = this.props.selected_digit_plan.id;
            data.members = [];
            let fields = [];
            console.log(this.props.currentSelectedDigitMembersId);
            console.log(this.props.digit_self_details);
            this.props.currentSelectedDigitMembersId.map((val, key) => {
                if (Object.keys(this.props.digit_self_details).length > 0) {
                    fields = [];
                    param = this.props.digit_self_details[val[key]];
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
                                let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
                    member_ref = `member_${key}`;
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
                                { className: 'insu-right-orng-btn ins-buy-btn', onClick: () => this.proceed() },
                                'Buy Now'
                            )
                        )
                    )
                )
            )
        );
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { common_utm_tags, user_loggedIn_number } = state.USER;
    let { digitPlans, selected_digit_plan, digit_self_details, currentSelectedDigitMembersId } = state.VIPCLUB;

    return {
        USER, common_utm_tags, user_loggedIn_number, selected_digit_plan, digitPlans, digit_self_details, currentSelectedDigitMembersId
    };
};

const mapDispatchToProps = dispatch => {
    return {

        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
        submitOTP: (number, otp, extraParamsData, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb)),
        resetAuth: () => dispatch((0, _index.resetAuth)()),
        saveUserDetails: (self_data, criteria, forceadd) => dispatch((0, _index.saveUserDetails)(self_data, criteria, forceadd)),
        saveCurrentSelectedDigitMembers: (data, cb) => dispatch((0, _index.saveCurrentSelectedDigitMembers)(data, cb))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DigitInsuranceFormPage);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi9kaWdpdEluc3VyYW5jZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi9kaWdpdFN0YXRpY0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL3ZpcENsdWIvRGlnaXRJbnN1cmFuY2VGb3JtUGFnZS5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIkRpZ2l0SW5zdXJhbmNlRm9ybSIsInN0YXRlIiwidGl0bGUiLCJuYW1lIiwibGFzdF9uYW1lIiwibWlkZGxlX25hbWUiLCJkb2IiLCJlbWFpbCIsInBob25lX251bWJlciIsInVzZXJfcGhvbmVfbnVtYmVyIiwicGluY29kZSIsImFkZHJlc3MiLCJub21pbmVlX25hbWUiLCJub21pbmVlX3JlbGF0aW9uIiwiZ2VuZGVyIiwiaWQiLCJwcm9maWxlIiwidXNlclByb2ZpbGVzIiwicHJvZmlsZV9pZCIsInByb2ZpbGVfZmxhZyIsImNvbXBvbmVudERpZE1vdW50IiwiaXNEdW1teVVzZXIiLCJsb2dpblVzZXJJZCIsIlVTRVIiLCJwcm9maWxlcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJkZWZhdWx0UHJvZmlsZSIsImRpZ2l0X3NlbGZfZGV0YWlscyIsImFzc2lnbiIsInNldFN0YXRlIiwiZ2V0VXNlckRldGFpbHMiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJleGl0c3RpbmdfdXNlcl9wcm9maWxlIiwiZW1wdHlfc3RhdGUiLCJwcm9mTmFtZSIsInNwbGl0TmFtZSIsInNwbGl0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlUmVsYXRpb24iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGQiLCJnZXRBdHRyaWJ1dGUiLCJoYW5kbGVUaXRsZSIsInRpdGxlX3ZhbHVlIiwic2VsZl9kYXRhIiwiaXNfY2hhbmdlIiwic2F2ZVVzZXJEZXRhaWxzIiwiaGFuZGxlRW1haWwiLCJmb3JtSXNWYWxpZCIsInZhbGlkRW1haWwiLCJ0ZXN0IiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsIm1lbWJlcl9pZCIsImVycm9ycyIsInZhbGlkYXRlRXJyb3JzIiwiY29tbW9uTXNnU3BhbiIsImJpbmQiLCJpbmRleE9mIiwiQVNTRVRTX0JBU0VfVVJMIiwiRGlnaXRTdGF0aWNEYXRhVmlldyIsInRvZ2dsZSIsImR3bmxVcmwiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJEaWdpdEluc3VyYW5jZUZvcm1QYWdlIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInNvdXJjZSIsImlzX2Zyb21fb3JnYW5pYyIsImZyb21PcmdhbmljIiwiaXNfcGIiLCJ1dG1fc291cmNlIiwiaW5jbHVkZXMiLCJzYXZlTWVtYmVycyIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJnZXRVc2VyUHJvZmlsZSIsIndpbmRvdyIsInNjcm9sbFRvIiwic2VsZWN0ZWRfZGlnaXRfcGxhbiIsImN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVyc0lkIiwibG9naW5Vc2VyIiwiaXNEZWZhdWx0VXNlciIsIm1lbWJlcnNJZCIsImlzX2RlZmF1bHRfdXNlciIsInB1c2giLCJ0eXBlIiwic2F2ZUN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVycyIsInByb2NlZWQiLCJpc1NtcyIsImV4dHJhRGF0YVBhcmFtcyIsInN1Y2Nlc3NfaWQiLCJkYXRhIiwicHVzaERhdGEiLCJzZWxmX3Byb2ZpbGUiLCJpc19kaXNhYmxlIiwibWVtYmVyX3JlZiIsInZhbGlkYXRpbmdFcnJvcnMiLCJwYXJhbSIsInBsYW5faWQiLCJtZW1iZXJzIiwiZmllbGRzIiwibWFwIiwidmFsIiwia2V5IiwicmVsYXRpb24iLCJmb3JFYWNoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiaGlzdG9yeSIsIm9wZW5Qb3B1cCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbW1vbl91dG1fdGFncyIsInVzZXJfbG9nZ2VkSW5fbnVtYmVyIiwiZGlnaXRQbGFucyIsIlZJUENMVUIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNlbmRPVFAiLCJudW1iZXIiLCJ2aWFTbXMiLCJ2aWFXaGF0c2FwcCIsIm1lc3NhZ2VfdHlwZSIsImNiIiwic3VibWl0T1RQIiwib3RwIiwiZXh0cmFQYXJhbXNEYXRhIiwicmVzZXRBdXRoIiwiY3JpdGVyaWEiLCJmb3JjZWFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsZ0JBQU1DLFNBQTNCLENBQXFDO0FBQ2pDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMsYUFBUzs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVcsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLElBQXdCLGdCQUF4QztBQUNJLG1EQUFLLFdBQVUsV0FBZixHQURKO0FBR1EsaUJBQUtGLEtBQUwsQ0FBV0csV0FBWCxHQUNJO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGFBREosR0FDK0U7QUFKdkYsU0FESjtBQVNIO0FBaEJnQzs7a0JBbUJ0QlAsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJmOzs7Ozs7a0JBRWVBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNUSxrQkFBTixTQUFpQ1AsZ0JBQU1DLFNBQXZDLENBQWlE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a0JBY2UseUJBQVFaLGVBQVIsRUFBMEJLLGtCQUExQixFQUE4Q3ZELHNCQUE5QyxDIiwiZmlsZSI6Ijc5LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgRGlnaXRJbnN1cmFuY2VGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOidtci4nLFxuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBsYXN0X25hbWU6JycsXG4gICAgICAgICAgICBtaWRkbGVfbmFtZTonJyxcbiAgICAgICAgICAgIGRvYjogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwaG9uZV9udW1iZXI6dGhpcy5wcm9wcy51c2VyX3Bob25lX251bWJlcixcbiAgICAgICAgICAgIHBpbmNvZGU6JycsXG4gICAgICAgICAgICBhZGRyZXNzOicnLFxuICAgICAgICAgICAgbm9taW5lZV9uYW1lOicnLFxuICAgICAgICAgICAgbm9taW5lZV9yZWxhdGlvbjonJyxcbiAgICAgICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICBwcm9maWxlOicnLFxuICAgICAgICAgICAgdXNlclByb2ZpbGVzOnt9LFxuICAgICAgICAgICAgcHJvZmlsZV9pZDpudWxsLFxuICAgICAgICAgICAgcHJvZmlsZV9mbGFnOnRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgcHJvZmlsZVxuICAgICAgICBsZXQgaXNEdW1teVVzZXJcbiAgICAgICAgbGV0IGxvZ2luVXNlcklkXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpc0R1bW15VXNlciA9IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzRHVtbXlVc2VyXG4gICAgICAgICAgICBsb2dpblVzZXJJZCA9IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlkXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLmRpZ2l0X3NlbGZfZGV0YWlsc1tsb2dpblVzZXJJZF0pe1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0R1bW15VXNlcikge1xuICAgICAgICAgICAgICAgICAgICBwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5kaWdpdF9zZWxmX2RldGFpbHNbbG9naW5Vc2VySWRdKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLmRpZ2l0X3NlbGZfZGV0YWlsc1tsb2dpblVzZXJJZF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHByb2ZpbGUpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBpc0R1bW15VXNlciA9IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzRHVtbXlVc2VyXG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2ZpbGUuaXNEdW1teVVzZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZS5pZCA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lkOjB9LCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRVc2VyRGV0YWlscyhwcm9maWxlKSAvLyBmaWxsIHVzZXIgZGV0YWlscyBpbiBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lkOnByb2ZpbGUuaWR9LCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRVc2VyRGV0YWlscyhwcm9maWxlKSAvLyBmaWxsIHVzZXIgZGV0YWlscyBpbiBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IGxvZ2luVXNlcklkXG4gICAgICAgIGlmIChwcm9wcy5VU0VSICYmIHByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXMocHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLnByb2ZpbGVfZmxhZyApIHtcbiAgICAgICAgICAgIGxldCBpc0R1bW15VXNlciA9IHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcbiAgICAgICAgICAgIGxvZ2luVXNlcklkID0gcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZVxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzLmRpZ2l0X3NlbGZfZGV0YWlscykubGVuZ3RoID4gMCkgeyAvLyByZXRyaWV2ZSBhbHJlYWR5IG1lbWJlciBkZXRhaWxzIGZyb20gdXNlciBzdG9yZVxuICAgICAgICAgICAgICAgIGxldCBwcm9maWxlXG4gICAgICAgICAgICAgICAgaWYgKCFpc0R1bW15VXNlcikge1xuICAgICAgICAgICAgICAgICAgICBwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzW2xvZ2luVXNlcklkXSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzW2xvZ2luVXNlcklkXSlcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZmlsZSk7ICAgIFxuICAgICAgICAgICAgICAgIGlmKHByb2ZpbGUgJiYgT2JqZWN0LmtleXMocHJvZmlsZSkubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aWQ6cHJvZmlsZS5pZCxwcm9maWxlX2ZsYWc6ZmFsc2V9LCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJEZXRhaWxzKHByb2ZpbGUpIC8vIGZpbGwgdXNlciBkZXRhaWxzIGluIGZvcm0gICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2UgaWYgKHByb3BzLlVTRVIgJiYgcHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyhwcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggPiAwICAmJiBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2ZpbGVcbiAgICAgICAgICAgICAgICBsZXQgZXhpdHN0aW5nX3VzZXJfcHJvZmlsZVxuICAgICAgICAgICAgICAgICAvLyByZXRyaWV2ZSBhbHJlYWR5IG1lbWJlciBkZXRhaWxzIGZyb20gdXNlciBwcm9maWxlc1xuICAgICAgICAgICAgICAgIHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKVxuICAgICAgICAgICAgICAgIGlmIChwcm9maWxlICYmIE9iamVjdC5rZXlzKHByb2ZpbGUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZihwcm9maWxlLmlzRHVtbXlVc2VyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGUuaWQgPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpZDowLHByb2ZpbGVfZmxhZzpmYWxzZX0sKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJEZXRhaWxzKHByb2ZpbGUpLy8gZmlsbCB1c2VyIGRldGFpbHMgaW4gZm9ybSAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aWQ6cHJvZmlsZS5pZCxwcm9maWxlX2ZsYWc6ZmFsc2V9LCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRVc2VyRGV0YWlscyhwcm9maWxlKSAgICAvLyBmaWxsIHVzZXIgZGV0YWlscyBpbiBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldFVzZXJEZXRhaWxzKHByb2ZpbGUpIHtcbiAgICAgICAgbGV0IGVtcHR5X3N0YXRlID17fVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9maWxlKVxuICAgICAgICBpZihPYmplY3Qua2V5cyhwcm9maWxlKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGlmKHByb2ZpbGUuaWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb2ZpbGVfaWQ6cHJvZmlsZS5pZD9wcm9maWxlLmlkOicnfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByb2ZpbGUucHJvZmlsZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJvZmlsZV9pZDpwcm9maWxlLnByb2ZpbGU/cHJvZmlsZS5wcm9maWxlOicnfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByb2ZpbGUuZ2VuZGVyID09ICdtJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Z2VuZGVyOnByb2ZpbGUuZ2VuZGVyP3Byb2ZpbGUuZ2VuZGVyOicnLHRpdGxlOiAnbXIuJ30pXG4gICAgICAgICAgICB9ZWxzZSBpZihwcm9maWxlLmdlbmRlciA9PSAnZicpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2dlbmRlcjpwcm9maWxlLmdlbmRlcj9wcm9maWxlLmdlbmRlcjonJyx0aXRsZTogJ21pc3MnfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocHJvZmlsZS5uYW1lID09ICdVc2VyJyB8fCBwcm9maWxlLm5hbWUgPT0gJ3VzZXInKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTonJ30pXG4gICAgICAgICAgICB9ZWxzZSBpZihwcm9maWxlLm5hbWUpe1xuICAgICAgICAgICAgICAgIGxldCBwcm9mTmFtZSA9IHByb2ZpbGUubmFtZTtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXROYW1lID0gcHJvZk5hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2Ygc3BsaXROYW1lWzBdICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOnNwbGl0TmFtZVswXT9zcGxpdE5hbWVbMF06Jyd9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih0eXBlb2Ygc3BsaXROYW1lWzFdICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0X25hbWU6c3BsaXROYW1lWzFdP3NwbGl0TmFtZVsxXTonJ30pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJvZmlsZS5lbWFpbCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6cHJvZmlsZS5lbWFpbH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwcm9maWxlLnBob25lX251bWJlcil7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGhvbmVfbnVtYmVyOnByb2ZpbGUucGhvbmVfbnVtYmVyfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByb2ZpbGUucGluY29kZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGluY29kZTpwcm9maWxlLnBpbmNvZGV9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJvZmlsZS5hZGRyZXNzKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthZGRyZXNzOnByb2ZpbGUuYWRkcmVzc30pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwcm9maWxlLm5vbWluZWVfbmFtZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bm9taW5lZV9uYW1lOnByb2ZpbGUubm9taW5lZV9uYW1lfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByb2ZpbGUubm9taW5lZV9yZWxhdGlvbil7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bm9taW5lZV9yZWxhdGlvbjpwcm9maWxlLm5vbWluZWVfcmVsYXRpb259KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkb2I6IHByb2ZpbGUuZG9iID8gcHJvZmlsZS5kb2IgOicnXG4gICAgICAgICAgICB9LCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVJlbGF0aW9uKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbm9taW5lZV9yZWxhdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0sKCkgPT57XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdChldmVudClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZmllbGQsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyYW0nKV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVRpdGxlKGZpZWxkLCBldmVudCkge1xuICAgICAgICBsZXQgdGl0bGVfdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgaWYgKHRpdGxlX3ZhbHVlID09ICdtci4nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2VuZGVyOiAnbScsdGl0bGU6dGl0bGVfdmFsdWUgfSlcbiAgICAgICAgfSBlbHNlIGlmICh0aXRsZV92YWx1ZSA9PSAnbWlzcycgfHwgdGl0bGVfdmFsdWUgPT0gJ21ycy4nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2VuZGVyOiAnZicsdGl0bGU6dGl0bGVfdmFsdWUgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgc2VsZl9kYXRhID0gdGhpcy5zdGF0ZVxuICAgICAgICAgICAgc2VsZl9kYXRhLmlzX2NoYW5nZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2F2ZVVzZXJEZXRhaWxzKCdzZWxmX2RhdGEnLCBzZWxmX2RhdGEpIC8vIHRvIHNhdmUgZW50ZXJlZCBkYXRhIGluIHN0b3JlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlRW1haWwoKSB7XG4gICAgICAgIGxldCBmb3JtSXNWYWxpZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsICE9ICcnKSB7XG4gICAgICAgICAgICBsZXQgdmFsaWRFbWFpbCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgICAgICAgdmFsaWRFbWFpbCA9IHZhbGlkRW1haWwudGVzdCh0aGlzLnN0YXRlLmVtYWlsKTtcbiAgICAgICAgICAgIGlmICh2YWxpZEVtYWlsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciB2YWxpZCBFbWFpbFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KCkge1xuICAgIGxldCBwcm9maWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pXG4gICAgaWYgKCFwcm9maWxlLmlzRHVtbXlVc2VyICYmIHRoaXMucHJvcHMubWVtYmVyX2lkID4gMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZV9pZDogMCwgaWQ6MCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlX2lkOiBudWxsLCBpZDpwcm9maWxlLmlzRHVtbXlVc2VyPzA6cHJvZmlsZS5pZCB9KVxuICAgIH1cbiAgICB2YXIgc2VsZl9kYXRhID0gdGhpcy5zdGF0ZVxuICAgIHRoaXMucHJvcHMuc2F2ZVVzZXJEZXRhaWxzKCdzZWxmX2RhdGEnLCBzZWxmX2RhdGEpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgaXNEdW1teVVzZXJcbiAgICAgICAgbGV0IHByb2ZpbGVfaWQgPSAwXG4gICAgICAgIGlmICh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGggJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pIHtcbiAgICAgICAgICAgIGlzRHVtbXlVc2VyID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0uaXNEdW1teVVzZXJcbiAgICAgICAgICAgIHByb2ZpbGVfaWQgPSAgaXNEdW1teVVzZXI/MDp0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pZFxuICAgICAgICB9XG4gICAgICAgIGxldCBlcnJvcnMgPSBbXVxuICAgICAgICBpZih0aGlzLnByb3BzLnZhbGlkYXRlRXJyb3JzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMpLmxlbmd0aCl7XG4gICAgICAgICAgIGVycm9ycyA9IHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnNbcHJvZmlsZV9pZF1cbiAgICAgICAgfVxuICAgICAgICBsZXQgY29tbW9uTXNnU3BhbiA9IDxzcGFuIGNsYXNzTmFtZT1cImZpbGwtZXJyb3Itc3BhblwiPipUaGlzIGlzIGEgbWFuZGF0b3J5IGZpZWxkPC9zcGFuPlxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMCBkaWdpdC1pbnB1dC1jb250YWluZXJcIiBpZD17aXNEdW1teVVzZXIgPyAnbWVtYmVyXzAnIDogYG1lbWJlcl8ke3Byb2ZpbGVfaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1zdWItZm9ybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aHIgY2xhc3NOYW1lPVwiaW5zLWludGVybmFsLWhyXCIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1mb3JtLWlucHV0LWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItZm9ybS1oZWRcIj5EZXRhaWxzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1mb3JtLWhlZC1jbGlja1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIE1vcmUgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yZ3QtYXJ3LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLnRpdGxlID09ICdtci4nID8gJ2J0bi1hY3RpdmUnIDogJyd9YH0gbmFtZT1cInRpdGxlXCIgdmFsdWU9J21yLicgZGF0YS1wYXJhbT0ndGl0bGUnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGUuYmluZCh0aGlzLCAnbXIuJyl9Pk1yLjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUudGl0bGUgPT0gJ21pc3MnID8gJ2J0bi1hY3RpdmUnIDogJyd9YH0gbmFtZT1cInRpdGxlXCIgdmFsdWU9J21pc3MnIGRhdGEtcGFyYW09J3RpdGxlJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVRpdGxlLmJpbmQodGhpcywgJ21pc3MuJyl9Pk1zLjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgbGFiZWwtbmFtZXMtYnV0dG9ucyAke3RoaXMuc3RhdGUudGl0bGUgPT0gJ21ycy4nID8gJ2J0bi1hY3RpdmUnIDogJyd9YH0gdmFsdWU9J21ycy4nIG5hbWU9XCJ0aXRsZVwiIGRhdGEtcGFyYW09J3RpdGxlJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVRpdGxlLmJpbmQodGhpcywgJ21ycy4nKX0gPk1ycy48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoICYmIGVycm9ycy5pbmRleE9mKCd0aXRsZScpID4gLTEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25Nc2dTcGFuIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBpbnAtbWFyZ2luLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWUxXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJvZmZcIiBuYW1lPVwibmFtZVwiIGRhdGEtcGFyYW09J25hbWUnIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnbmFtZScpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPVwibmFtZTFcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbnctdXNyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzICYmIGVycm9ycy5sZW5ndGggJiYgZXJyb3JzLmluZGV4T2YoJ25hbWUnKSA+IC0xID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbk1zZ1NwYW4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXAgaW5wLW1hcmdpbi1yaWdodCBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWlkZGxlX25hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbFwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJtaWRkbGVfbmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm1pZGRsZV9uYW1lfSBkYXRhLXBhcmFtPSdtaWRkbGVfbmFtZScgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ21pZGRsZV9uYW1lJyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPVwibWlkZGxlX25hbWVcIj5NaWRkbGUgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwIGlucC1tYXJnaW4tbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0X25hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbFwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJsYXN0X25hbWVcIiBkYXRhLXBhcmFtPSdsYXN0X25hbWUnIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3RfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdsYXN0X25hbWUnKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPVwibGFzdF9uYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbnctdXNyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoICYmIGVycm9ycy5pbmRleE9mKCdsYXN0X25hbWUnKSA+IC0xID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbk1zZ1NwYW4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImlzbi1kYXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2wgaW5zLWRhdGUtcGlja2VyLXN0eWxlXCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cImRvYlwiIGRhdGEtcGFyYW09J2RvYicgdmFsdWU9e3RoaXMuc3RhdGUuZG9ifSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdkb2InKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgZGF0ZVBpY2tlckxhYmVsXCIgaHRtbEZvcj1cImlucy1kYXRlXCI+RGF0ZSBvZiBiaXJ0aDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhbGVuZGFyLTAxLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoICYmIGVycm9ycy5pbmRleE9mKCdkb2InKSA+IC0xID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbk1zZ1NwYW4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sJyByZXF1aXJlZCBpZD1cIm1pbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUVtYWlsLmJpbmQodGhpcyl9IGRhdGEtcGFyYW09XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsJ2VtYWlsJyl9IHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXIgJyBodG1sRm9yPVwibWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9tYWlsLTAxLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoICYmIGVycm9ycy5pbmRleE9mKCdlbWFpbCcpID4gLTEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uTXNnU3BhbiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtYmxcIiBtYXg9XCI5OTk5OTk5OTk5XCIgbWluPVwiMTAwMDAwMDAwMFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sIGlucy1kYXRlLXBpY2tlci1zdHlsZVwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJwaG9uZV9udW1iZXJcIiBkYXRhLXBhcmFtPSdwaG9uZV9udW1iZXInIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAncGhvbmVfbnVtYmVyJyl9IHZhbHVlPXt0aGlzLnN0YXRlLnBob25lX251bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj1cIm1ibFwiPk1vYmlsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2NhbGwuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzICYmIGVycm9ycy5sZW5ndGggJiYgZXJyb3JzLmluZGV4T2YoJ3Bob25lX251bWJlcicpID4gLTEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uTXNnU3BhbiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwaW5cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5zLWZvcm0tY29udHJvbCBpbnMtZGF0ZS1waWNrZXItc3R5bGVcIiByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJvZmZcIiBuYW1lPVwicGluY29kZVwiIGRhdGEtcGFyYW09J3BpbmNvZGUnIHZhbHVlPXt0aGlzLnN0YXRlLnBpbmNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAncGluY29kZScpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj1cInBpblwiPlBpbiBDb2RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9jYXRpb24tMDEuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzICYmIGVycm9ycy5sZW5ndGggJiYgZXJyb3JzLmluZGV4T2YoJ3BpbmNvZGUnKSA+IC0xID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1vbk1zZ1NwYW4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFkclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sIGlucy1kYXRlLXBpY2tlci1zdHlsZVwiIHJlcXVpcmVkIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJhZGRyZXNzXCIgZGF0YS1wYXJhbT0nYWRkcmVzcycgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdhZGRyZXNzJyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXJcIiBodG1sRm9yPVwiYWRyXCI+QWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2xvY2F0aW9uLTAxLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoICYmIGVycm9ycy5pbmRleE9mKCdhZGRyZXNzJykgPiAtMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tb25Nc2dTcGFuIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1ncm91cCBpbnAtbWFyZ2luLXJpZ2h0IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJub21OYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucy1mb3JtLWNvbnRyb2xcIiByZXF1aXJlZCBhdXRvQ29tcGxldGU9XCJvZmZcIiBuYW1lPVwibmFtZVwiIGRhdGEtcGFyYW09J25vbWluZWVfbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdub21pbmVlX25hbWUnKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ub21pbmVlX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXBsYWNlaG9sZGVyXCIgaHRtbEZvcj1cIm5vbU5hbWVcIj5Ob21pbmVlIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzICYmIGVycm9ycy5sZW5ndGggJiYgZXJyb3JzLmluZGV4T2YoJ25vbWluZWVfbmFtZScpID4gLTEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uTXNnU3BhbiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiaW5zLXNlbGVjdC1kcm9wXCIgbmFtZT1cIm5vbWluZWVfcmVsYXRpb25cIiBpZD1cInJlbGF0aW9uX2Ryb3Bkb3duXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUmVsYXRpb24uYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUubm9taW5lZV9yZWxhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkYXRhLXBhcmFtPVwicmVsYXRpb25cIiBkaXNhYmxlZCA+Tm9taW5lZSBSZWxhdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGF0YS1wYXJhbT1cInJlbGF0aW9uXCIgdmFsdWU9XCJGQVRIRVJcIj5GQVRIRVI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRhdGEtcGFyYW09XCJyZWxhdGlvblwiIHZhbHVlPVwiTU9USEVSXCI+TU9USEVSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkYXRhLXBhcmFtPVwicmVsYXRpb25cIiB2YWx1ZT1cIkJST1RIRVJcIj5CUk9USEVSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkYXRhLXBhcmFtPVwicmVsYXRpb25cIiB2YWx1ZT1cIlNJU1RFUlwiPlNJU1RFUjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCAmJiBlcnJvcnMuaW5kZXhPZignbm9taW5lZV9yZWxhdGlvbicpID4gLTEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbW9uTXNnU3BhbiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5leHBvcnQgZGVmYXVsdCBEaWdpdEluc3VyYW5jZUZvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBEaWdpdFN0YXRpY0RhdGFWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvZ2dsZTogJ29uZSdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGR3bmxVcmwgPSAnaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZnVySVVYVGNtd2dBNnpRMWlwZnlkRkRjRUdsZXEyUkUvdmlldyc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1jYXJkLWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtbmFtZS1oZWFkLWRpdiBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQgZGlnaXQtbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgXCIgd2lkdGg9XCI2MFwiIHNyYz1cImh0dHBzOi8vd3d3LnJlaW5zdXJhbmNlbmUud3Mvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDMvZGlnaXQtaW5zdXJhbmNlLWxvZ28uanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaWdpdCBDb3ZpZCBHcm91cCBpbnN1cmFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1wZGYtZHdubG9hZC1kaXYgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWZ1cklVWFRjbXdnQTZ6UTFpcGZ5ZEZEY0VHbGVxMlJFL3ZpZXdcIiB0YXJnZXQ9XCJfYmxhbmtcIiBkb3dubG9hZCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wZGYtZHduLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9saWN5IERldGFpbHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXN3aWNoLXRhYnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PiB0aGlzLnNldFN0YXRlKHt0b2dnbGU6J29uZSd9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS50b2dnbGUgPT0gXCJvbmVcIj8nYWN0aXZlJzonaW5zLXRhYi1pbmFjdGl2ZSd9PkZlYXR1cmVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpPT4gdGhpcy5zZXRTdGF0ZSh7dG9nZ2xlOid0d28nfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMuc3RhdGUudG9nZ2xlID09IFwidHdvXCI/J2FjdGl2ZSc6J2lucy10YWItaW5hY3RpdmUnfSA+V2hhdCdzIG5vdCBDb3ZlcmVkPzwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXRhYnMtY29udGVudCB3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9nZ2xlID09IFwib25lXCI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U3VtIEluc3VyZWQgVHlwZSA6IEluZGl2aWR1YWwgZm9yIGVhY2ggbWVtYmVyIGNvdmVyZWQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Um9vbSByZW50IHJlc3RyaWN0aW9uIDogTm8gUmVzdHJpY3Rpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SUNVIGxpbWl0IDogTm8gUmVzdHJpY3Rpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UHJlIGFuZCBQb3N0IGhvc3BpdGFsaXphdGlvbiBkYXlzIDogMzAgZGF5cyBhbmQgNjAgZGF5cyByZXNwZWN0aXZlbHk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Um9hZCBBbWJ1bGFuY2UgOiAxJSBvZiB0aGUgU0kgKHVwIHRvIElOUiA1LDAwMCk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2Vjb25kIG1lZGljYWwgb3BpbmlvbiA6IENvdmVyZWQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VHlwZXMgb2YgaG9zcGl0YWxzIGNvdmVyZWQgOiBBbGw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhvc3BpdGFsaXNhdGlvbiBleHBlbnNlcyBub3QgaW4gbGlldSBvZiB0cmVhdG1lbnQgZm9yIENvcm9uYXZpcnVzIGRpc2Vhc2UgKENPVklELTE5KSB3aWxsIG5vdCBiZSBjb3ZlcmVkLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbnN1cmVkIG1lbWJlcnMgYWxyZWFkeSB0cmVhdGVkIGZvciBvciBxdWFyYW50aW5lZCBmb3IgQ29yb25hdmlydXMgZGlzZWFzZSAoQ09WSUQtMTkpIGJlZm9yZSB0aGUgcG9saWN5IGlzc3VhbmNlIHdpbGwgbm90IGJlIGNvdmVyZWQuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRyZWF0bWVudCB0YWtlbiBvdXRzaWRlIEluZGlhIHdpbGwgbm90IGJlIGNvdmVyZWQuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhvbWUgaG9zcGl0YWxpc2F0aW9uIChEb21pY2lsaWFyeSBob3NwaXRhbGlzYXRpb24pIGV4cGVuc2VzIHdpbGwgbm90IGJlIGNvdmVyZWQuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhvc3BpdGFsaXNhdGlvbiBleHBlbnNlcyBmb3IgcGF0aWVudHMgb25seSB1bmRlciBpbnZlc3RpZ2F0aW9uIHdpdGggaW5jb25jbHVzaXZlIG1lZGljYWwgcmVwb3J0IHdpbGwgbm90IGJlIGNvdmVyZWQuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgRGlnaXRTdGF0aWNEYXRhVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IHNlbmRPVFAsIHN1Ym1pdE9UUCwgcmVzZXRBdXRoLCBnZXRVc2VyUHJvZmlsZSwgc2F2ZVVzZXJEZXRhaWxzLCBzYXZlQ3VycmVudFNlbGVjdGVkRGlnaXRNZW1iZXJzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBEaWdpdEluc3VyYW5jZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy92aXBDbHViL2RpZ2l0SW5zdXJhbmNlRm9ybS5qcydcbmltcG9ydCBEaWdpdFN0YXRpY0RhdGFWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdmlwQ2x1Yi9kaWdpdFN0YXRpY0RhdGFWaWV3LmpzJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgRGlnaXRJbnN1cmFuY2VGb3JtUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7ICAgIFxuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc291cmNlOnBhcnNlZC5zb3VyY2UsXG4gICAgICAgICAgICBpc19mcm9tX29yZ2FuaWM6cGFyc2VkLmZyb21PcmdhbmljLFxuICAgICAgICAgICAgaXNfcGI6cGFyc2VkLnV0bV9zb3VyY2U/cGFyc2VkLnV0bV9zb3VyY2UgJiYgcGFyc2VkLnV0bV9zb3VyY2UuaW5jbHVkZXMoJ3BvbGljeWJhemFhci5jb20nKTpmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlRXJyb3JzOnt9LFxuICAgICAgICAgICAgc2F2ZU1lbWJlcnM6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKSAvLyB0byBnZXQgbG9nZ2VkSW4gdXNlciBwcm9maWxlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKXtcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuc2F2ZU1lbWJlcnMgJiYgT2JqZWN0LmtleXMocHJvcHMuc2VsZWN0ZWRfZGlnaXRfcGxhbikubGVuZ3RoID4wICYmICFwcm9wcy5jdXJyZW50U2VsZWN0ZWREaWdpdE1lbWJlcnNJZC5sZW5ndGgpe1xuICAgICAgICAgICAgbGV0IGxvZ2luVXNlclxuICAgICAgICAgICAgbGV0IGlzRGVmYXVsdFVzZXJcbiAgICAgICAgICAgIGxldCBpc0R1bW15VXNlclxuICAgICAgICAgICAgbGV0IG1lbWJlcnNJZCA9IFtdXG4gICAgICAgICAgICBpZihwcm9wcy5VU0VSKXtcbiAgICAgICAgICAgICAgICBsb2dpblVzZXIgPSBwcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXMocHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoICYmIHByb3BzLlVTRVIucHJvZmlsZXNbcHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0pe1xuICAgICAgICAgICAgICAgIGlzRGVmYXVsdFVzZXIgPSBwcm9wcy5VU0VSLnByb2ZpbGVzW3Byb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdLmlzX2RlZmF1bHRfdXNlclxuICAgICAgICAgICAgICAgIGlzRHVtbXlVc2VyID0gcHJvcHMuVVNFUi5wcm9maWxlc1twcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXS5pc0R1bW15VXNlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIWlzRHVtbXlVc2VyKXtcbiAgICAgICAgICAgICAgICBtZW1iZXJzSWQucHVzaCh7JzAnOmxvZ2luVXNlciwgdHlwZTogJ3NlbGYnfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG1lbWJlcnNJZC5wdXNoKHsnMCc6MCwgdHlwZTonc2VsZid9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcHMuc2F2ZUN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVycyhtZW1iZXJzSWQpIC8vIHNhdmUgY3VycmVudCB2aXNpYmxlIGZvcm0gbWVtYmVyIG9yIHNlbGVjdGVkIHVzZXIgcHJvZmlsZSBpZFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNhdmVNZW1iZXJzOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZWVkKGlzU21zLCBleHRyYURhdGFQYXJhbXMgPSB7fSkgeyAvL25ld1xuICAgICAgICBsZXQgc3VjY2Vzc19pZFxuICAgICAgICBsZXQgZGF0YSA9IHt9XG4gICAgICAgIGxldCBwdXNoRGF0YSA9IHt9XG4gICAgICAgIGxldCBpc0R1bW15VXNlclxuICAgICAgICBsZXQgc2VsZl9wcm9maWxlID0ge31cbiAgICAgICAgbGV0IGlzX2Rpc2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgbWVtYmVyX3JlZiA9ICcnXG4gICAgICAgIGxldCB2YWxpZGF0aW5nRXJyb3JzID0ge31cbiAgICAgICAgbGV0IHBhcmFtXG4gICAgICAgIGxldCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRfZGlnaXRfcGxhbiAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX2RpZ2l0X3BsYW4pLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5kaWdpdF9zZWxmX2RldGFpbHMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5kaWdpdF9zZWxmX2RldGFpbHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRhdGEucGxhbl9pZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfZGlnaXRfcGxhbi5pZFxuICAgICAgICAgICAgZGF0YS5tZW1iZXJzID0gW11cbiAgICAgICAgICAgIGxldCBmaWVsZHMgPSBbXVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWREaWdpdE1lbWJlcnNJZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRpZ2l0X3NlbGZfZGV0YWlscyk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVyc0lkLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5kaWdpdF9zZWxmX2RldGFpbHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzID0gW11cbiAgICAgICAgICAgICAgICAgICAgcGFyYW0gPSB0aGlzLnByb3BzLmRpZ2l0X3NlbGZfZGV0YWlsc1t2YWxba2V5XV1cbiAgICAgICAgICAgICAgICAgICAgaWYocGFyYW0gJiYgcGFyYW0uaWQgIT09IFwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtICYmIE9iamVjdC5rZXlzKHBhcmFtKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb21tb24gdmFsaWRhdGlvbiBzdGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbS5uYW1lID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZGlzYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goJ25hbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0ubGFzdF9uYW1lID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZGlzYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goJ2xhc3RfbmFtZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLnRpdGxlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZGlzYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLnBpbmNvZGUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19kaXNhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMucHVzaCgncGluY29kZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLnBob25lX251bWJlciA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKCdwaG9uZV9udW1iZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbS5hZGRyZXNzID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZGlzYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goJ2FkZHJlc3MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbS5ub21pbmVlX25hbWUgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19kaXNhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMucHVzaCgnbm9taW5lZV9uYW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0ubm9taW5lZV9yZWxhdGlvbiA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKCdub21pbmVlX3JlbGF0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAocGFyYW0uZG9iID09IG51bGwgfHwgcGFyYW0uZG9iID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaXNfZGlzYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmllbGRzLnB1c2goJ2RvYicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLmVtYWlsICE9ICcnICYmIHBhcmFtLnJlbGF0aW9uID09ICdzZWxmJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRFbWFpbCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZEVtYWlsID0gdmFsaWRFbWFpbC50ZXN0KHBhcmFtLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkRW1haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMucHVzaCgnZW1haWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGluZ0Vycm9yc1twYXJhbS5pZF0gPSBmaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2YWxpZGF0aW5nRXJyb3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGluZ0Vycm9yc1trZXldLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfZGlzYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyX3JlZiA9IGBtZW1iZXJfJHtrZXl9YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRlRXJyb3JzOiB2YWxpZGF0aW5nRXJyb3JzIH0pXG4gICAgICAgICAgICBpZiAoaXNfZGlzYWJsZSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZW1iZXJfcmVmKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1lbWJlcl9yZWYpLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY292aWQtcmV2aWV3JylcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGFydGljbGUtY29udGFpbmVyIGJvdHRvbU1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMCBjb2wtbGctMTAgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT0gdG9wIHNlY3Rpb24gd2l0aCBpY29ucyBhbmQgbGlzdGluZyA9PT09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxEaWdpdFN0YXRpY0RhdGFWaWV3IC8+ICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IHRvcCBzZWN0aW9uIHdpdGggaWNvbnMgYW5kIGxpc3RpbmcgPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PSBTdGVwcyBDb250YWluZXIgPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMCBkaWdpLXN0ZXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXN0YXR1cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25fbWVudVwiIGlkPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX3RhYnNcIiBpZD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYl9pbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q2hvb3NlIFlvdXIgUGxhbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0YWJfaW5hY3RpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RmlsbCBNZW1iZXIgRGV0YWlsczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiX2Rpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5QYXltZW50PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpZ2l0SW5zdXJhbmNlRm9ybSB7Li4udGhpcy5wcm9wc30gdmFsaWRhdGVFcnJvcnM9e3RoaXMuc3RhdGUudmFsaWRhdGVFcnJvcnMgfHwgW119Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXJtLWNvbnQtZGlnaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgaHRtbGZvcm09XCJ0ZXN0MTFcIiBzdHlsZT17eyAnZm9udFdlaWdodCc6ICc1MDAnLCAnZm9udFNpemUnOiAnMTNweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRlZmF1bHRDaGVja2VkIGNsYXNzTmFtZT1cImlucy1jaGstYnhcIiB2YWx1ZT1cIlwiIGlkPVwidGVzdDExXCIgbmFtZT1cImZydWl0LTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5JIEFncmVlIHRvIHRoZSA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17dGhpcy5vcGVuUG9wdXB9PlRlcm1zIGFuZCBDb25kaXRpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21NYXJnaW5cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT0gQ29tbW9uIGJ1dHRvbiA9PT09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1idG4gZml4ZWQgaW5zdUJ0bnNDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJpbnN1LXJpZ2h0LW9ybmctYnRuIGlucy1idXktYnRuXCIgb25DbGljaz17KCk9PnRoaXMucHJvY2VlZCgpfT5CdXkgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IENvbW1vbiBidXR0b24gPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcblxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyBjb21tb25fdXRtX3RhZ3MsIHVzZXJfbG9nZ2VkSW5fbnVtYmVyIH0gPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgIGRpZ2l0UGxhbnMsc2VsZWN0ZWRfZGlnaXRfcGxhbixkaWdpdF9zZWxmX2RldGFpbHMsY3VycmVudFNlbGVjdGVkRGlnaXRNZW1iZXJzSWQgfSA9IHN0YXRlLlZJUENMVUJcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgVVNFUiwgIGNvbW1vbl91dG1fdGFncywgdXNlcl9sb2dnZWRJbl9udW1iZXIsIHNlbGVjdGVkX2RpZ2l0X3BsYW4sZGlnaXRQbGFucywgZGlnaXRfc2VsZl9kZXRhaWxzLGN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVyc0lkXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICBzZW5kT1RQOiAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSA9PiBkaXNwYXRjaChzZW5kT1RQKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikpLFxuICAgICAgICBzdWJtaXRPVFA6IChudW1iZXIsIG90cCwgZXh0cmFQYXJhbXNEYXRhLGNiKSA9PiBkaXNwYXRjaChzdWJtaXRPVFAobnVtYmVyLCBvdHAsZXh0cmFQYXJhbXNEYXRhLCBjYikpLFxuICAgICAgICByZXNldEF1dGg6ICgpID0+IGRpc3BhdGNoKHJlc2V0QXV0aCgpKSxcbiAgICAgICAgc2F2ZVVzZXJEZXRhaWxzOihzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpID0+IGRpc3BhdGNoKHNhdmVVc2VyRGV0YWlscyhzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpKSxcbiAgICAgICAgc2F2ZUN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVyczooZGF0YSxjYikgPT4gZGlzcGF0Y2goc2F2ZUN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVycyhkYXRhLGNiKSksXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMgLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERpZ2l0SW5zdXJhbmNlRm9ybVBhZ2UpIl0sInNvdXJjZVJvb3QiOiIifQ==