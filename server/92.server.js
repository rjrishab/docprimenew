exports.ids = [92];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class WhatsAppOptinView extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.state = {
            whatsapp_optin_View: true
        };
    }

    shouldRender() {
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

    toggleWhatsap(status, e) {
        if (this.props.isAppointment) {
            let profileData = _extends({}, this.props.profiles);
            if (status) {
                profileData.whatsapp_optin = true;
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "You whatsApp notifications has been enabled." });
            } else {
                profileData.whatsapp_is_declined = true;
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "your whatsApp notifications has been disabled." });
            }
            this.props.editUserProfile(profileData, profileData.id, () => {
                document.getElementsByClassName('whatsappCardContainer')[0].classList.add('d-none');
            });
        } else {
            this.setState({ whatsapp_optin_View: status }, () => {
                let data = {
                    'Category': 'ConsumerApp', 'Action': 'Whatsaptoggled', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Whatsap-toggled'
                };
                _gtm2.default.sendEvent({ data: data });
                this.props.toggleWhatsap(status);
            });
        }
    }

    render() {

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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _WhatsAppOptinView = __webpack_require__(/*! ../../commons/WhatsAppOptin/WhatsAppOptinView.js */ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js");

var _WhatsAppOptinView2 = _interopRequireDefault(_WhatsAppOptinView);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _newDateSelector = __webpack_require__(/*! ../../commons/newDateSelector.js */ "./dev/js/components/commons/newDateSelector.js");

var _newDateSelector2 = _interopRequireDefault(_newDateSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

const moment = __webpack_require__(/*! moment */ "moment");


const stepperStyle = {
    padding: 60,
    paddingBottom: 0,
    paddingTop: 10
};

class UserSignupView extends _react2.default.Component {
    constructor(props) {
        super(props);

        let existingUser = false;
        if (this.props.location.search.includes('existing')) {
            // create profile scenario
            existingUser = true;
        }

        const parsed = queryString.parse(this.props.location.search);

        this.state = {
            name: '',
            age: '',
            gender: 'm',
            email: '',
            dob: '',
            formattedDate: '',
            phone_number: this.props.phoneNumber || '',
            existingUser,
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
    }

    componentDidMount() {
        let default_profile;
        let gold_user_profile = {};
        if (this.props.USER && this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.defaultProfile && this.props.USER.profiles[this.props.USER.defaultProfile] && Object.keys(this.props.USER.profiles[this.props.USER.defaultProfile]).length > 0) {
            default_profile = this.props.USER.profiles[this.props.USER.defaultProfile];
            Object.entries(this.props.USER.profiles).map(function ([key, value]) {
                if (!value.isDummyUser && value.is_vip_gold_member) {
                    gold_user_profile = value;
                }
            });
            this.setState({ primary_profile: default_profile, gold_user_profile: gold_user_profile });
        }
    }

    componentWillReceiveProps(props) {
        let default_profile;
        let gold_user_profile = {};
        if (this.props.USER && this.props.USER.profiles && Object.keys(this.props.USER.profiles).length && this.props.USER.defaultProfile && this.props.USER.profiles[this.props.USER.defaultProfile] && Object.keys(this.props.USER.profiles[this.props.USER.defaultProfile]).length > 0 && this.state.toUpdateState) {
            default_profile = this.props.USER.profiles[this.props.USER.defaultProfile];
            Object.entries(this.props.USER.profiles).map(function ([key, value]) {
                if (!value.isDummyUser && value.is_vip_gold_member) {
                    gold_user_profile = value;
                }
            });
            this.setState({ primary_profile: default_profile, gold_user_profile: gold_user_profile, toUpdateState: false });
        }
    }

    inputHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    toggleReferral(e) {
        this.setState({ have_referralCode: e.target.checked });
    }

    toggleWhatsap(status, e) {
        this.setState({ whatsapp_optin: status });
    }

    selectDateFromCalendar(date) {
        if (date) {
            date = date.toDate();
            let formattedDate = this.getFormattedDate(date);
            date = new Date(date).toISOString().split('T')[0];
            this.setState({ dob: date, formattedDate: formattedDate, dateModal: false });
        } else {
            this.setState({ dateModal: false });
        }
    }

    getFormattedDate(date) {
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

    openCalendar() {
        this.setState({ dateModal: true });
    }

    submitForm() {
        this.setState({ err: "" });
        // validate
        let register = true;
        Object.keys(this.refs).forEach((prp, i) => {
            let validated = false;
            switch (this.refs[prp].name) {
                case "name":
                    {
                        if (!this.refs[prp].value) {
                            validated = false;
                        } else {
                            validated = !/[^a-zA-Z ]/.test(this.refs[prp].value);
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
                        if (!this.refs[prp].value) {
                            validated = false;
                        } else {
                            validated = this.refs[prp].value.match(/\S+@\S+\.\S+/);
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
                this.refs[prp].style.border = '';
            } else {
                this.refs[prp].style.border = '1px solid red';
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
            let post_data = this.state;
            if (this.state.referralCode && this.state.have_referralCode) {
                post_data["referral_code"] = this.state.referralCode;
            }
            this.props.createProfile(post_data, (err, res) => {
                if (!err) {
                    // this.props.resetVipData()
                    // this.setState({ showMedical: true })
                    const parsed = queryString.parse(this.props.location.search);
                    if (parsed.callback) {
                        this.props.history.replace(parsed.callback);
                    } else {
                        if (this.state.referralCode && this.state.have_referralCode) {
                            this.props.history.replace('/user');
                        } else {
                            this.props.history.go(-1);
                        }
                    }
                } else {
                    let message = "Error signing up user.";
                    if (err.message) {
                        message = err.message;
                    }
                    this.setState({ err: message });
                }
            });
        }
    }

    handleEnterPress(e) {
        if (e.key === 'Enter') {
            this.submitForm();
        }
    }

    getNewDate(type, newDate, isValidDob) {
        this.setState({ dob: newDate, isDobValidated: isValidDob });
    }

    addToGold(value) {
        this.setState({ add_to_gold: value });
    }

    render() {
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
                                                            { className: `label-names-buttons ${this.state.gender == 'm' ? 'btn-active' : ''}`, name: 'gender', checked: this.state.gender == 'm', onClick: () => this.setState({ 'gender': 'm' }) },
                                                            'Male'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: `label-names-buttons ${this.state.gender == 'f' ? 'btn-active' : ''}`, name: 'gender', checked: this.state.gender == 'f', onClick: () => this.setState({ 'gender': 'f' }) },
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
                                                                disabledDate: date => {
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _userSignup = __webpack_require__(/*! ../../components/commons/userSignup */ "./dev/js/components/commons/userSignup/index.js");

var _userSignup2 = _interopRequireDefault(_userSignup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserSignup extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(_userSignup2.default, this.props);
    }
}

UserSignup.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    let {
        token,
        error_message,
        success_message,
        phoneNumber,
        submit_otp,
        submit_otp_success,
        submit_otp_fail
    } = state.AUTH;

    let USER = state.USER;

    return {
        token,
        error_message,
        success_message,
        phoneNumber,
        submit_otp,
        submit_otp_success,
        submit_otp_fail,
        USER
    };
};

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (postData, cb) => dispatch((0, _index.registerUser)(postData, cb)),
        createProfile: (postData, cb) => dispatch((0, _index.createProfile)(postData, cb)),
        resetVipData: () => dispatch((0, _index.resetVipData)())
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserSignup);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1doYXRzQXBwT3B0aW4vV2hhdHNBcHBPcHRpblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyU2lnbnVwL1VzZXJTaWdudXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyU2lnbnVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvVXNlclNpZ251cC5qcyJdLCJuYW1lcyI6WyJXaGF0c0FwcE9wdGluVmlldyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwid2hhdHNhcHBfb3B0aW5fVmlldyIsInNob3VsZFJlbmRlciIsInByb2ZpbGVzIiwid2hhdHNhcHBfb3B0aW4iLCJpc0FwcG9pbnRtZW50Iiwid2hhdHNhcHBfaXNfZGVjbGluZWQiLCJpc1VzZXJQcm9maWxlIiwidG9nZ2xlV2hhdHNhcCIsInN0YXR1cyIsImUiLCJwcm9maWxlRGF0YSIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJlZGl0VXNlclByb2ZpbGUiLCJpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInNldFN0YXRlIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsInJlbmRlciIsIkFTU0VUU19CQVNFX1VSTCIsImJpbmQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIm1vbWVudCIsInN0ZXBwZXJTdHlsZSIsInBhZGRpbmciLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsIlVzZXJTaWdudXBWaWV3IiwiZXhpc3RpbmdVc2VyIiwibG9jYXRpb24iLCJzZWFyY2giLCJpbmNsdWRlcyIsInBhcnNlZCIsInBhcnNlIiwibmFtZSIsImFnZSIsImdlbmRlciIsImVtYWlsIiwiZG9iIiwiZm9ybWF0dGVkRGF0ZSIsInBob25lX251bWJlciIsInBob25lTnVtYmVyIiwic2hvd01lZGljYWwiLCJlcnIiLCJyZWZlcnJhbENvZGUiLCJyZWZlcnJhbCIsImhhdmVfcmVmZXJyYWxDb2RlIiwiZGF0ZU1vZGFsIiwiaXNEb2JWYWxpZGF0ZWQiLCJpc19kb2JfZXJyb3IiLCJwcmltYXJ5X3Byb2ZpbGUiLCJhZGRfdG9fZ29sZCIsImdvbGRfdXNlcl9wcm9maWxlIiwidG9VcGRhdGVTdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiZGVmYXVsdF9wcm9maWxlIiwiVVNFUiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJkZWZhdWx0UHJvZmlsZSIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsImlzRHVtbXlVc2VyIiwiaXNfdmlwX2dvbGRfbWVtYmVyIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsImlucHV0SGFuZGxlciIsInRhcmdldCIsInRvZ2dsZVJlZmVycmFsIiwiY2hlY2tlZCIsInNlbGVjdERhdGVGcm9tQ2FsZW5kYXIiLCJkYXRlIiwidG9EYXRlIiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiZGQiLCJnZXREYXRlIiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInRvZGF5Iiwib3BlbkNhbGVuZGFyIiwic3VibWl0Rm9ybSIsInJlZ2lzdGVyIiwicmVmcyIsImZvckVhY2giLCJwcnAiLCJpIiwidmFsaWRhdGVkIiwidGVzdCIsIm1hdGNoIiwic3R5bGUiLCJib3JkZXIiLCJwb3N0X2RhdGEiLCJjcmVhdGVQcm9maWxlIiwicmVzIiwiY2FsbGJhY2siLCJoaXN0b3J5IiwicmVwbGFjZSIsImdvIiwibWVzc2FnZSIsImhhbmRsZUVudGVyUHJlc3MiLCJnZXROZXdEYXRlIiwidHlwZSIsIm5ld0RhdGUiLCJpc1ZhbGlkRG9iIiwiYWRkVG9Hb2xkIiwiZGlmZiIsImlzX2RlZmF1bHRfdXNlciIsInZpcF9kYXRhIiwidG90YWxfbWVtYmVyc19hbGxvd2VkIiwiaXNfbWVtYmVyX2FsbG93ZWQiLCJlcnJvcl9tZXNzYWdlIiwiVXNlclNpZ251cCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInRva2VuIiwic3VjY2Vzc19tZXNzYWdlIiwic3VibWl0X290cCIsInN1Ym1pdF9vdHBfc3VjY2VzcyIsInN1Ym1pdF9vdHBfZmFpbCIsIkFVVEgiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInJlZ2lzdGVyVXNlciIsInBvc3REYXRhIiwiY2IiLCJyZXNldFZpcERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLGlCQUFOLFNBQWdDQyxnQkFBTUMsU0FBdEMsQ0FBZ0Q7QUFDNUNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjs7QUFFQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsaUNBQW9CO0FBRFgsU0FBYjtBQUdIOztBQUVEQyxtQkFBYztBQUNWLFlBQUcsS0FBS0gsS0FBTCxDQUFXSSxRQUFkLEVBQXVCO0FBQ25CLGdCQUFJLEtBQUtKLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkMsY0FBcEIsSUFBcUMsSUFBekMsRUFBOEM7QUFDMUMsb0JBQUcsS0FBS0wsS0FBTCxDQUFXTSxhQUFYLElBQTRCLENBQUMsS0FBS04sS0FBTCxDQUFXSSxRQUFYLENBQW9CQyxjQUFqRCxJQUFtRSxDQUFDLEtBQUtMLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkcsb0JBQTNGLEVBQWdIO0FBQzVHLDJCQUFPLElBQVA7QUFDSCxpQkFGRCxNQUVLO0FBQ0QsMkJBQU8sS0FBUDtBQUNIO0FBQ0osYUFORCxNQU1LO0FBQ0QsdUJBQU8sSUFBUDtBQUNIO0FBQ0osU0FWRCxNQVVNLElBQUcsS0FBS1AsS0FBTCxDQUFXUSxh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QU9yRSxNQUFNcUUsSUFBakI7O0FBRUEsV0FBTztBQUNIa0UsYUFERztBQUVITCxxQkFGRztBQUdITSx1QkFIRztBQUlIbEYsbUJBSkc7QUFLSG1GLGtCQUxHO0FBTUhDLDBCQU5HO0FBT0hDLHVCQVBHO0FBUUh0RTtBQVJHLEtBQVA7QUFVSCxDQXZCRDs7QUF5QkEsTUFBTXdFLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3JDLFdBQU87QUFDSEMsc0JBQWMsQ0FBQ0MsUUFBRCxFQUFXQyxFQUFYLEtBQWtCSCxTQUFTLHlCQUFhRSxRQUFiLEVBQXVCQyxFQUF2QixDQUFULENBRDdCO0FBRUhqQyx1QkFBZSxDQUFDZ0MsUUFBRCxFQUFXQyxFQUFYLEtBQWtCSCxTQUFTLDBCQUFjRSxRQUFkLEVBQXdCQyxFQUF4QixDQUFULENBRjlCO0FBR0hDLHNCQUFhLE1BQU1KLFNBQVMsMEJBQVQ7QUFIaEIsS0FBUDtBQUtILENBTkQ7O2tCQVNlLHlCQUFRUixlQUFSLEVBQXlCTyxrQkFBekIsRUFBNkNWLFVBQTdDLEMiLCJmaWxlIjoiOTIuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgV2hhdHNBcHBPcHRpblZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aGF0c2FwcF9vcHRpbl9WaWV3OnRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZFJlbmRlcigpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnByb2ZpbGVzKXtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzLndoYXRzYXBwX29wdGluICE9bnVsbCl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5pc0FwcG9pbnRtZW50ICYmICF0aGlzLnByb3BzLnByb2ZpbGVzLndoYXRzYXBwX29wdGluICYmICF0aGlzLnByb3BzLnByb2ZpbGVzLndoYXRzYXBwX2lzX2RlY2xpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5pc1VzZXJQcm9maWxlKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gICAgXG4gICAgfVxuXG4gICAgdG9nZ2xlV2hhdHNhcChzdGF0dXMsZSkgeyAgICAgICBcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pc0FwcG9pbnRtZW50KXsgICAgICBcbiAgICAgICAgICAgIGxldCBwcm9maWxlRGF0YSA9IHsuLi50aGlzLnByb3BzLnByb2ZpbGVzfVxuICAgICAgICAgICAgaWYoc3RhdHVzKXtcbiAgICAgICAgICAgICAgICBwcm9maWxlRGF0YS53aGF0c2FwcF9vcHRpbiA9IHRydWVcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiWW91IHdoYXRzQXBwIG5vdGlmaWNhdGlvbnMgaGFzIGJlZW4gZW5hYmxlZC5cIn0pICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9maWxlRGF0YS53aGF0c2FwcF9pc19kZWNsaW5lZCA9IHRydWVcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwieW91ciB3aGF0c0FwcCBub3RpZmljYXRpb25zIGhhcyBiZWVuIGRpc2FibGVkLlwifSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZWRpdFVzZXJQcm9maWxlKHByb2ZpbGVEYXRhLCBwcm9maWxlRGF0YS5pZCAsKCk9PntcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aGF0c2FwcENhcmRDb250YWluZXInKVswXS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2hhdHNhcHBfb3B0aW5fVmlldzogc3RhdHVzIH0sKCkgPT57XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdXaGF0c2FwdG9nZ2xlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ1doYXRzYXAtdG9nZ2xlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZVdoYXRzYXAoc3RhdHVzKSAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZFJlbmRlcigpKVxuICAgICAgICAgICAgcmV0dXJuICg8ZGl2PjwvZGl2PilcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzQXBwb2ludG1lbnQ/XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGF0c2FwcENhcmRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YS1sb2dvLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2EtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YS1sb2dvLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZSB3b3VsZCBsaWtlIHRvIHNlbmQgeW91IHVwZGF0ZXMgdGhyb3VnaCB3aGF0c2FwcDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsb3dEZWNsaW5lQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbGxvd0J0bnNcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzLHRydWUpfT5BbGxvdzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlY2xpbmVCdG5zXCIgc3R5bGU9e3tjb2xvcjonIzc1NzU3NSd9fW9uQ2xpY2s9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMsZmFsc2UpfT5EZWNsaW5lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzYwMCcsIGZvbnRTaXplOiAnMTRweCcgfX0+RW5hYmxlIDxzcGFuIGNsYXNzTmFtZT1cInNtLXd0c3AtaW1nXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YS1sb2dvLXNtLnBuZ1wifSAvPldoYXRzQXBwPC9zcGFuPiBub3RpZmljYXRpb248aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMsIXRoaXMuc3RhdGUud2hhdHNhcHBfb3B0aW5fVmlldyl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUud2hhdHNhcHBfb3B0aW5fVmlld30gLz48c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFdoYXRzQXBwT3B0aW5WaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyJztcbmltcG9ydCBXaGF0c0FwcE9wdGluVmlldyBmcm9tICcuLi8uLi9jb21tb25zL1doYXRzQXBwT3B0aW4vV2hhdHNBcHBPcHRpblZpZXcuanMnXG5jb25zdCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuaW1wb3J0IE5ld0RhdGVTZWxlY3RvciBmcm9tICcuLi8uLi9jb21tb25zL25ld0RhdGVTZWxlY3Rvci5qcydcblxuY29uc3Qgc3RlcHBlclN0eWxlID0ge1xuICAgIHBhZGRpbmc6IDYwLFxuICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgcGFkZGluZ1RvcDogMTAsXG59XG5cblxuY2xhc3MgVXNlclNpZ251cFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIGxldCBleGlzdGluZ1VzZXIgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2V4aXN0aW5nJykpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBwcm9maWxlIHNjZW5hcmlvXG4gICAgICAgICAgICBleGlzdGluZ1VzZXIgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBhZ2U6ICcnLFxuICAgICAgICAgICAgZ2VuZGVyOiAnbScsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBkb2I6JycsXG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRlOiAnJyxcbiAgICAgICAgICAgIHBob25lX251bWJlcjogdGhpcy5wcm9wcy5waG9uZU51bWJlciB8fCAnJyxcbiAgICAgICAgICAgIGV4aXN0aW5nVXNlcixcbiAgICAgICAgICAgIHNob3dNZWRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgIGVycjogXCJcIixcbiAgICAgICAgICAgIHJlZmVycmFsQ29kZTogcGFyc2VkLnJlZmVycmFsIHx8IG51bGwsXG4gICAgICAgICAgICBoYXZlX3JlZmVycmFsQ29kZTogISFwYXJzZWQucmVmZXJyYWwsXG4gICAgICAgICAgICBkYXRlTW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgd2hhdHNhcHBfb3B0aW46dHJ1ZSxcbiAgICAgICAgICAgIGlzRG9iVmFsaWRhdGVkOmZhbHNlLFxuICAgICAgICAgICAgaXNfZG9iX2Vycm9yOmZhbHNlLFxuICAgICAgICAgICAgcHJpbWFyeV9wcm9maWxlOnt9LFxuICAgICAgICAgICAgYWRkX3RvX2dvbGQ6ZmFsc2UsXG4gICAgICAgICAgICBnb2xkX3VzZXJfcHJvZmlsZTp7fSxcbiAgICAgICAgICAgIHRvVXBkYXRlU3RhdGU6dHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgbGV0IGRlZmF1bHRfcHJvZmlsZVxuICAgICAgICBsZXQgZ29sZF91c2VyX3Byb2ZpbGUgPSB7fVxuICAgICAgICBpZih0aGlzLnByb3BzLlVTRVIgJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoICYmIHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSkubGVuZ3RoID4gMCl7IFxuICAgICAgICAgICAgICAgZGVmYXVsdF9wcm9maWxlID0gdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZV0gICBcbiAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICBpZighdmFsdWUuaXNEdW1teVVzZXIgJiYgdmFsdWUuaXNfdmlwX2dvbGRfbWVtYmVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGRfdXNlcl9wcm9maWxlID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJpbWFyeV9wcm9maWxlOmRlZmF1bHRfcHJvZmlsZSxnb2xkX3VzZXJfcHJvZmlsZTpnb2xkX3VzZXJfcHJvZmlsZX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKXtcbiAgICAgICAgbGV0IGRlZmF1bHRfcHJvZmlsZVxuICAgICAgICBsZXQgZ29sZF91c2VyX3Byb2ZpbGUgPSB7fVxuICAgICAgICBpZih0aGlzLnByb3BzLlVTRVIgJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoICYmIHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlXSkubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLnRvVXBkYXRlU3RhdGUpeyBcbiAgICAgICAgICAgICAgIGRlZmF1bHRfcHJvZmlsZSA9IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdICAgXG4gICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLm1hcChmdW5jdGlvbihba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIXZhbHVlLmlzRHVtbXlVc2VyICYmIHZhbHVlLmlzX3ZpcF9nb2xkX21lbWJlcil7XG4gICAgICAgICAgICAgICAgICAgICAgICBnb2xkX3VzZXJfcHJvZmlsZSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ByaW1hcnlfcHJvZmlsZTpkZWZhdWx0X3Byb2ZpbGUsZ29sZF91c2VyX3Byb2ZpbGU6Z29sZF91c2VyX3Byb2ZpbGUsdG9VcGRhdGVTdGF0ZTpmYWxzZX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dEhhbmRsZXIoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cblxuICAgIHRvZ2dsZVJlZmVycmFsKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhdmVfcmVmZXJyYWxDb2RlOiBlLnRhcmdldC5jaGVja2VkIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlV2hhdHNhcChzdGF0dXMsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2hhdHNhcHBfb3B0aW46IHN0YXR1cyB9KVxuICAgIH1cblxuICAgIHNlbGVjdERhdGVGcm9tQ2FsZW5kYXIoZGF0ZSkge1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUudG9EYXRlKClcbiAgICAgICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKGRhdGUpXG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG9iOiBkYXRlLCBmb3JtYXR0ZWREYXRlOmZvcm1hdHRlZERhdGUsIGRhdGVNb2RhbDogZmFsc2V9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVNb2RhbDogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZvcm1hdHRlZERhdGUoZGF0ZSl7XG4gICAgICAgIHZhciBkZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbW0gPSBkYXRlLmdldE1vbnRoKCkrMTsgXG4gICAgICAgIHZhciB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBpZihkZDwxMCl7XG4gICAgICAgICAgICBkZD0nMCcrZGQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYobW08MTApe1xuICAgICAgICAgICAgbW09JzAnK21tO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b2RheSA9IGRkKyctJyttbSsnLScreXl5eTtcbiAgICAgICAgcmV0dXJuIHRvZGF5XG4gICAgfVxuXG4gICAgb3BlbkNhbGVuZGFyKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGVNb2RhbDp0cnVlfSlcbiAgICB9XG5cbiAgICBzdWJtaXRGb3JtKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyOiBcIlwiIH0pXG4gICAgICAgIC8vIHZhbGlkYXRlXG4gICAgICAgIGxldCByZWdpc3RlciA9IHRydWVcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5yZWZzKS5mb3JFYWNoKChwcnAsIGkpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnJlZnNbcHJwXS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucmVmc1twcnBdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gIS9bXmEtekEtWiBdLy50ZXN0KHRoaXMucmVmc1twcnBdLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNhc2UgXCJwaG9uZV9udW1iZXJcIjoge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoISF0aGlzLnJlZnNbcHJwXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFsaWRhdGVkID0gdGhpcy5yZWZzW3BycF0udmFsdWUubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLylcbiAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICBicmVha1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiZW1haWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucmVmc1twcnBdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gdGhpcy5yZWZzW3BycF0udmFsdWUubWF0Y2goL1xcUytAXFxTK1xcLlxcUysvKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qY2FzZSBcImRvYlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRoaXMuc3RhdGUuaXNEb2JWYWxpZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW3BycF0uc3R5bGUuYm9yZGVyID0gJydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW3BycF0uc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXIgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZih0aGlzLnN0YXRlLmRvYiA9PSBudWxsICYmICF0aGlzLnN0YXRlLmlzRG9iVmFsaWRhdGVkKXtcbiAgICAgICAgICAgIHJlZ2lzdGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2RvYl9lcnJvcjp0cnVlfSlcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnN0YXRlLmRvYiAhPSBudWxsICYmICF0aGlzLnN0YXRlLmlzRG9iVmFsaWRhdGVkKXtcbiAgICAgICAgICAgIHJlZ2lzdGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2RvYl9lcnJvcjp0cnVlfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVnaXN0ZXIpIHtcbiAgICAgICAgICAgIGxldCBwb3N0X2RhdGEgPSB0aGlzLnN0YXRlXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWZlcnJhbENvZGUgJiYgdGhpcy5zdGF0ZS5oYXZlX3JlZmVycmFsQ29kZSkge1xuICAgICAgICAgICAgICAgIHBvc3RfZGF0YVtcInJlZmVycmFsX2NvZGVcIl0gPSB0aGlzLnN0YXRlLnJlZmVycmFsQ29kZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVQcm9maWxlKHBvc3RfZGF0YSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5yZXNldFZpcERhdGEoKVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgc2hvd01lZGljYWw6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWQuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKHBhcnNlZC5jYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJlZmVycmFsQ29kZSAmJiB0aGlzLnN0YXRlLmhhdmVfcmVmZXJyYWxDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoJy91c2VyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIkVycm9yIHNpZ25pbmcgdXAgdXNlci5cIlxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnI6IG1lc3NhZ2UgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRW50ZXJQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRGb3JtKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXROZXdEYXRlKHR5cGUsbmV3RGF0ZSxpc1ZhbGlkRG9iKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZG9iOm5ld0RhdGUsaXNEb2JWYWxpZGF0ZWQ6aXNWYWxpZERvYn0pXG4gICAgfVxuXG4gICAgYWRkVG9Hb2xkKHZhbHVlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWRkX3RvX2dvbGQ6dmFsdWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZhbGlkYXRpb24tYm9vay1zY3JlZW5cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5zaG93TWVkaWNhbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJuZy10b3AtMTIgbXJiLTE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImdvLWJvdHRvbVwiID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm51bWJlclwiIG5hbWU9XCJwaG9uZV9udW1iZXJcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZV9udW1iZXJ9IHJlcXVpcmVkIHJlZj1cInBob25lX251bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlRW50ZXJQcmVzcy5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm51bWJlclwiPk1vYmlsZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGxhYmVsLW5hbWVzLWJ1dHRvbnMgJHt0aGlzLnN0YXRlLmdlbmRlciA9PSAnbSc/J2J0bi1hY3RpdmUnOicnfWB9IG5hbWU9XCJnZW5kZXJcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmdlbmRlciA9PSAnbSd9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAnZ2VuZGVyJzogJ20nIH0pfT5NYWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ2YnPydidG4tYWN0aXZlJzonJ31gfSBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ2YnfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgJ2dlbmRlcic6ICdmJyB9KX0+RmVtYWxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImZuYW1lXCIgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSByZXF1aXJlZCByZWY9XCJuYW1lXCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVFbnRlclByZXNzLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZm5hbWVcIj57dGhpcy5zdGF0ZS5leGlzdGluZ1VzZXIgPyBcIk1lbWJlclwiIDogXCJQYXRpZW50XCJ9IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbGlnaHRcIj4oQXBwb2ludG1lbnQgdmFsaWQgb25seSBmb3IgdGhlIHByb3ZpZGVkIG5hbWUpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRvYlwiIG5hbWU9XCJkb2JcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1hdHRlZERhdGV9IG9uQ2xpY2s9e3RoaXMub3BlbkNhbGVuZGFyLmJpbmQodGhpcyl9IHJlcXVpcmVkIHJlZj1cImRvYlwiIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlRW50ZXJQcmVzcy5iaW5kKHRoaXMpfSBvbkZvY3VzPXt0aGlzLm9wZW5DYWxlbmRhci5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZG9iXCI+RGF0ZSBvZiBCaXJ0aDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdEYXRlU2VsZWN0b3Igey4uLnRoaXMucHJvcHN9IGdldE5ld0RhdGU9e3RoaXMuZ2V0TmV3RGF0ZS5iaW5kKHRoaXMpfSBpc19kb2JfZXJyb3I9e3RoaXMuc3RhdGUuaXNfZG9iX2Vycm9yfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0ZU1vZGFsID8gPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1vdmVybGF5XCI+PGRpdiBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1tb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXI9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bW9tZW50KG5ldyBEYXRlKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZT17KGRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZGlmZihtb21lbnQoKG5ldyBEYXRlKSksICdkYXlzJykgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvZGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuc2VsZWN0RGF0ZUZyb21DYWxlbmRhci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcmltYXJ5X3Byb2ZpbGUgJiYgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5wcmltYXJ5X3Byb2ZpbGUpLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5wcmltYXJ5X3Byb2ZpbGUuaXNfZGVmYXVsdF91c2VyICYmICF0aGlzLnN0YXRlLnByaW1hcnlfcHJvZmlsZS5lbWFpbCA/PGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IHJlcXVpcmVkIHJlZj1cImVtYWlsXCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVFbnRlclByZXNzLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+OicnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwicmVmZXJyYWwtc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc2MDAnLCBmb250U2l6ZTogJzE0cHgnIH19PkkgaGF2ZSBhIHJlZmVycmFsIGNvZGU8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DbGljaz17dGhpcy50b2dnbGVSZWZlcnJhbC5iaW5kKHRoaXMpfSBjaGVja2VkPXt0aGlzLnN0YXRlLmhhdmVfcmVmZXJyYWxDb2RlfSAvPjxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnRoaXMuc3RhdGUuaGF2ZV9yZWZlcnJhbENvZGUgPyA8ZGl2IGNsYXNzTmFtZT1cInJlZmVycmFsQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsdC1udy1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6ICc4MHB4JyB9fSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInNsdC10ZXh0LWlucHV0XCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiRW50ZXIgaGVyZVwiIG5hbWU9XCJyZWZlcnJhbENvZGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yZWZlcnJhbENvZGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIiovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdvbGRfdXNlcl9wcm9maWxlICYmIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZ29sZF91c2VyX3Byb2ZpbGUpLmxlbmd0aCAmJiB0aGlzLnN0YXRlLmdvbGRfdXNlcl9wcm9maWxlLnZpcF9kYXRhICYmIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZ29sZF91c2VyX3Byb2ZpbGUudmlwX2RhdGEpLmxlbmd0aCAmJiB0aGlzLnN0YXRlLmdvbGRfdXNlcl9wcm9maWxlLnZpcF9kYXRhLnRvdGFsX21lbWJlcnNfYWxsb3dlZCA+IDAgJiYgIXRoaXMuc3RhdGUucHJpbWFyeV9wcm9maWxlLmlzRHVtbXlVc2VyICYmIHRoaXMuc3RhdGUuZ29sZF91c2VyX3Byb2ZpbGUudmlwX2RhdGEuaXNfbWVtYmVyX2FsbG93ZWQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWZhdWx0UHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnggYWRkLW1lbWJlci1jaGtieFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0aGlzIG1lbWJlciB0byBEb2NwcmltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWwtMlwiIHdpZHRoPVwiMzVcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9nb2xkLWxnLnBuZ1wiICBhbHQ9XCJnb2xkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLXdhcm5pbmctdGV4dFwiPk9uY2UgYWRkZWQgdG8gZ29sZCwgeW91IGNhbm5vbnQgZWRpdCBvciByZW1vdmUgdGhlIG1lbWJlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNsaWNrPXt0aGlzLmFkZFRvR29sZC5iaW5kKHRoaXMsICF0aGlzLnN0YXRlLmFkZF90b19nb2xkKX0gY2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFkZF90b19nb2xkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2hhdHNBcHBPcHRpblZpZXcgey4uLnRoaXMucHJvcHN9IHRvZ2dsZVdoYXRzYXA9e3RoaXMudG9nZ2xlV2hhdHNhcC5iaW5kKHRoaXMpfSBpc1VzZXJQcm9maWxlPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlXCI+e3RoaXMuc3RhdGUuZXJyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2VcIj57dGhpcy5wcm9wcy5lcnJvcl9tZXNzYWdlfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TWVkaWNhbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0YXRpYy1idG5cIj5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0YXRpYy1idG5cIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKX0+RG9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBub0NoYXRCdXR0b249e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJTaWdudXBWaWV3XG4iLCJpbXBvcnQgVXNlclNpZ251cFZpZXcgZnJvbSAnLi9Vc2VyU2lnbnVwJ1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyU2lnbnVwVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyByZWdpc3RlclVzZXIsIGNyZWF0ZVByb2ZpbGUsIHJlc2V0VmlwRGF0YSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBVc2VyU2lnbnVwVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvdXNlclNpZ251cCdcblxuXG5jbGFzcyBVc2VyU2lnbnVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxVc2VyU2lnbnVwVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGxldCB7XG4gICAgICAgIHRva2VuLFxuICAgICAgICBlcnJvcl9tZXNzYWdlLFxuICAgICAgICBzdWNjZXNzX21lc3NhZ2UsXG4gICAgICAgIHBob25lTnVtYmVyLFxuICAgICAgICBzdWJtaXRfb3RwLFxuICAgICAgICBzdWJtaXRfb3RwX3N1Y2Nlc3MsXG4gICAgICAgIHN1Ym1pdF9vdHBfZmFpbFxuICAgIH0gPSBzdGF0ZS5BVVRIXG5cbiAgICBsZXQgVVNFUiA9IHN0YXRlLlVTRVJcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRva2VuLFxuICAgICAgICBlcnJvcl9tZXNzYWdlLFxuICAgICAgICBzdWNjZXNzX21lc3NhZ2UsXG4gICAgICAgIHBob25lTnVtYmVyLFxuICAgICAgICBzdWJtaXRfb3RwLFxuICAgICAgICBzdWJtaXRfb3RwX3N1Y2Nlc3MsXG4gICAgICAgIHN1Ym1pdF9vdHBfZmFpbCxcbiAgICAgICAgVVNFUlxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVnaXN0ZXJVc2VyOiAocG9zdERhdGEsIGNiKSA9PiBkaXNwYXRjaChyZWdpc3RlclVzZXIocG9zdERhdGEsIGNiKSksXG4gICAgICAgIGNyZWF0ZVByb2ZpbGU6IChwb3N0RGF0YSwgY2IpID0+IGRpc3BhdGNoKGNyZWF0ZVByb2ZpbGUocG9zdERhdGEsIGNiKSksXG4gICAgICAgIHJlc2V0VmlwRGF0YTooKSA9PiBkaXNwYXRjaChyZXNldFZpcERhdGEoKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlclNpZ251cCk7XG4iXSwic291cmNlUm9vdCI6IiJ9