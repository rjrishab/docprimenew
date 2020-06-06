exports.ids = [42];
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Terms extends _react2.default.Component {

    render() {

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
}
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

var _react = __webpack_require__(/*! react */ "react");

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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Section_Component = ({ children, title, history, logout }) => {
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

class UserProfileView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    render() {

        let { profiles, selectedProfile } = this.props.USER;
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
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/`, render: props => {
                                    return _react2.default.createElement(
                                        Section_Component,
                                        _extends({}, this.props, { title: 'My Profile' }),
                                        _react2.default.createElement(_index2.default, _extends({}, this.props, props))
                                    );
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/appointments`, render: props => {
                                    return _react2.default.createElement(
                                        Section_Component,
                                        _extends({}, this.props, { title: 'My Appointments' }),
                                        _react2.default.createElement(_userAppointments2.default, _extends({}, this.props, props))
                                    );
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/family`, render: props => {
                                    return _react2.default.createElement(
                                        Section_Component,
                                        _extends({}, this.props, { title: 'My Family' }),
                                        _react2.default.createElement(_userFamily2.default, _extends({}, this.props, props))
                                    );
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/address`, render: props => {
                                    return _react2.default.createElement(
                                        Section_Component,
                                        _extends({}, this.props, { title: 'Manage Address' }),
                                        _react2.default.createElement(_userAddress2.default, _extends({}, this.props, props))
                                    );
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/address/add`, render: props => {
                                    return _react2.default.createElement(_add2.default, _extends({}, this.props, props));
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/address/edit/:id`, render: props => {
                                    return _react2.default.createElement(_add2.default, _extends({}, this.props, props, { edit: true }));
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/edit/:id`, render: props => {
                                    return _react2.default.createElement(_editProfile2.default, _extends({}, this.props, props));
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/:type/reports/:id`, render: props => {
                                    return _react2.default.createElement(
                                        Section_Component,
                                        _extends({}, this.props, { title: props.match.params.type == 'opd' ? "Prescriptions" : "Lab Reports" }),
                                        _react2.default.createElement(_userReports2.default, _extends({}, this.props, props))
                                    );
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/onlinePrescriptions`, render: props => {
                                    return _react2.default.createElement(_userPrescriptions2.default, _extends({}, this.props, props));
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: `${this.props.match.url}/coupons`, render: props => {
                                    return _react2.default.createElement(_userCoupons2.default, _extends({}, this.props, props));
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
}

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _basic = __webpack_require__(/*! ./basic */ "./dev/js/components/commons/userProfile/editProfile/basic.js");

var _basic2 = _interopRequireDefault(_basic);

var _medical = __webpack_require__(/*! ./medical */ "./dev/js/components/commons/userProfile/editProfile/medical.js");

var _medical2 = _interopRequireDefault(_medical);

var _Loader = __webpack_require__(/*! ../../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _WhatsAppOptinView = __webpack_require__(/*! ../../WhatsAppOptin/WhatsAppOptinView.js */ "./dev/js/components/commons/WhatsAppOptin/WhatsAppOptinView.js");

var _WhatsAppOptinView2 = _interopRequireDefault(_WhatsAppOptinView);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EditProfile extends _react2.default.Component {
    constructor(props) {
        super(props);
        let { profiles } = this.props.USER;
        let currentProfile = null;
        currentProfile = _extends({}, profiles[this.props.match.params.id]);
        this.state = {
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
            add_to_gold: this.props.location.search.includes('add_to_gold=true') ? true : false,
            from_booking: this.props.location.search.includes('from_booking=true') ? true : false
        };
    }

    componentDidMount() {
        let currentProfile = null;
        if (this.props.USER && this.props.USER.profiles && Object.keys(this.props.USER.profiles).length) {
            currentProfile = _extends({}, this.props.USER.profiles[this.props.match.params.id]);
            this.setState({ profileData: currentProfile, isDobValidated: currentProfile.dob ? true : false, whatsapp_optin: currentProfile.whatsapp_optin });
        }
    }

    toggleOpenCrop() {
        this.setState({ openCrop: !this.state.openCrop });
    }

    manageAddress() {
        this.props.history.push('/user/address');
    }

    toggleWhatsap(status, e) {
        this.setState({ whatsapp_optin: status });
    }

    getComp() {
        if (this.state.loading) {
            return _react2.default.createElement(_Loader2.default, null);
        }
        let self = this;
        let show_default_checkBox = true;
        let is_profile_editable = true;
        let gold_user_profile = {};
        let default_profile = {};
        if (this.props.USER && this.props.USER.profiles) {
            if (Object.keys(this.props.USER.profiles).length > 0) {
                Object.entries(this.props.USER.profiles).map(function ([key, value]) {
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

    addToGold(value) {
        this.setState({ add_to_gold: value });
    }

    updateProfile(key, value, isDobValidated) {
        this.state.profileData[key] = value;
        if (key == 'dob') {
            this.setState({ isDobValidated: isDobValidated });
        }
        this.setState({ profileData: this.state.profileData });
    }

    verifyEndorsementEmail(newemail, verified, is_email_changed) {
        this.state.profileData['email'] = newemail;
        this.setState({ profileData: this.state.profileData });
        if (verified) {
            this.setState({ isEmailUpdated: verified, isEmailVerified: is_email_changed });
        } else {
            this.setState({ isEmailUpdated: verified, isEmailVerified: is_email_changed });
        }
    }

    proceedUpdate(e) {
        // update profile
        e.stopPropagation();
        e.preventDefault();

        let errors = {};
        let vals = ['email', 'phone_number', 'dob'];
        vals.map(field => {
            let validated = true;
            if (this.state.profileData.dob == null && !this.state.isDobValidated) {
                validated = true;
                errors['dob'] = !validated;
                return;
            }
            switch (field) {
                case "phone_number":
                    {
                        if (!this.state.profileData[field]) {
                            validated = true;
                            errors[field] = !validated;
                            return;
                        } else {
                            validated = this.state.profileData[field].toString().match(/^[56789]{1}[0-9]{9}$/);
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

        this.setState({ errors }, () => {
            let validated = true;
            for (let key in this.state.errors) {
                if (this.state.errors[key]) {
                    validated = false;
                }
            }
            if (!this.state.isEmailUpdated && this.state.isEmailVerified) {
                this.setState({ isEmailError: true });
                return;
            }

            if (!this.state.isDobValidated) {
                this.setState({ is_dob_error: true });
                validated = false;
                return;
            }
            if (!this.state.profileData.gender) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: 'Please select gender' });
                validated = false;
                return;
            }
            if (validated) {
                this.setState({ loading: true });
                this.state.profileData.whatsapp_optin = this.state.whatsapp_optin == null ? true : this.state.whatsapp_optin;
                this.state.profileData.add_to_gold = this.state.add_to_gold;
                this.props.editUserProfile(this.state.profileData, this.state.profileData.id, (err, data) => {
                    // update profile
                    this.setState({ loading: false });
                    if (err) {
                        if (err.message) {
                            setTimeout(() => {
                                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: err.message });
                            }, 500);
                            return;
                        }
                    }
                    this.props.resetVipData();
                    if (this.state.from_booking) {
                        this.props.history.go(-2);
                    } else {
                        this.props.history.go(-1);
                    }
                });
            }
        });
    }

    render() {
        return _react2.default.createElement(
            'div',
            null,
            this.getComp(),
            this.state.openCrop ? "" : _react2.default.createElement(
                'button',
                { onClick: this.proceedUpdate.bind(this), className: 'fixed p-3 horizontal bottom v-btn v-btn-primary no-round btn-lg text-center static-btn' },
                `${this.state.from_booking ? 'Continue Booking' : 'Update Profile'}`
            )
        );
    }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactCropper = __webpack_require__(/*! react-cropper */ "react-cropper");

var _reactCropper2 = _interopRequireDefault(_reactCropper);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _Loader = __webpack_require__(/*! ../../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _rcCalendar = __webpack_require__(/*! rc-calendar */ "rc-calendar");

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _verifyEmail = __webpack_require__(/*! ../../../insurance/verifyEmail.js */ "./dev/js/components/insurance/verifyEmail.js");

var _verifyEmail2 = _interopRequireDefault(_verifyEmail);

var _newDateSelector = __webpack_require__(/*! ../../newDateSelector.js */ "./dev/js/components/commons/newDateSelector.js");

var _newDateSelector2 = _interopRequireDefault(_newDateSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Compress = __webpack_require__(/*! compress.js */ "compress.js");

const moment = __webpack_require__(/*! moment */ "moment");


class BasicDetails extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUrl: null,
            loading: false,
            formattedDate: '',
            is_default_user: this.props.profileData.is_default_user
        };
    }

    handleChange(key, e) {
        this.props.updateProfile(key, e.target.value);
    }

    handleGender(val) {
        this.props.updateProfile('gender', val);
    }

    pickFile(e) {
        if (e.target.files && e.target.files[0]) {
            const compress = new Compress();
            let file = e.target.files[0];
            compress.compress([file], {
                quality: 1,
                maxWidth: 1000,
                maxHeight: 1000
            }).then(results => {
                const img1 = results[0];
                const base64str = img1.data;
                const imgExt = img1.ext;
                const file = Compress.convertBase64ToFile(base64str, imgExt);
                this.getBase64(file, dataUrl => {
                    this.props.toggleOpenCrop();
                    this.setState({ dataUrl });
                });
            }).catch(e => {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Error uploading image." });
            });
        }
    }

    getBase64(file, cb) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    finishCrop(e) {
        e.stopPropagation();
        e.preventDefault();
        let file_blob_data = this.dataURItoBlob(this.refs.cropper.getCroppedCanvas().toDataURL());
        this.setState({
            dataUrl: null,
            loading: true
        }, () => {
            this.props.toggleOpenCrop();
            // document.getElementById('imageFilePicker').value = ""
            let form_data = new FormData();
            form_data.append("profile_image", file_blob_data, "imageFilename.jpeg");
            this.props.editUserProfileImage(form_data, this.props.profileData.id, (err, data) => {
                this.setState({ loading: false });
                this.props.history.go(-1);
            });
        });
    }

    dataURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    }

    handleEnterPress(e) {
        if (e.key === 'Enter') {
            this.props.proceedUpdate(e);
        }
    }

    openCalendar() {
        this.setState({ dateModal: true });
    }

    selectDateFromCalendar(date) {
        if (date) {
            date = date.toDate();
            let formattedDate = this.getFormattedDate(date);
            date = new Date(date).toISOString().split('T')[0];
            this.setState({ formattedDate: formattedDate, dateModal: false });
            this.props.updateProfile('dob', formattedDate);
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
        var today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    handleDefaultUser(value) {
        this.setState({ 'is_default_user': value });
        this.props.updateProfile('is_default_user', value);
    }

    render() {
        let { name, email, gender, phone_number, profile_image, id, dob } = this.props.profileData;
        profile_image = profile_image || "/assets" + "/img/customer-icons/user.png";
        return _react2.default.createElement(
            'section',
            { className: `myProfile profile-details mrb-15 ${this.props.is_profile_editable ? '' : 'click-disable'}` },
            this.state.loading ? "" : _react2.default.createElement(
                'div',
                { className: 'widget no-shadow no-radius' },
                _react2.default.createElement(
                    'div',
                    { className: 'widget-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'profile-icon' },
                        _react2.default.createElement('img', { src: profile_image, style: { width: '100%', cursor: 'pointer' }, className: 'img-fluid img-round', onClick: () => {
                                document.getElementById('imageFilePicker').click();
                                document.getElementById('imageFilePicker').value = "";
                            } }),
                        _react2.default.createElement(
                            'span',
                            { className: 'cam-icon' },
                            _react2.default.createElement('img', { src: "/assets" + "/img/icons/cam-md.png", className: 'img-fluid cam-icon-img', onClick: () => {
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
                                { className: `label-names-buttons ${gender == 'm' ? 'btn-active' : ''}`, name: 'gender', checked: gender == 'm', onClick: this.handleGender.bind(this, "m") },
                                'Male'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: `label-names-buttons ${gender == 'f' ? 'btn-active' : ''}`, name: 'gender', checked: gender == 'f', onClick: this.handleGender.bind(this, 'f') },
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
                                    disabledDate: date => {
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MedicalDetails extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _termsConditions = __webpack_require__(/*! ../../couponSelectionView/termsConditions.js */ "./dev/js/components/commons/couponSelectionView/termsConditions.js");

var _termsConditions2 = _interopRequireDefault(_termsConditions);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _config = __webpack_require__(/*! ../../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProfileData extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            openTermsConditions: false
        };
    }

    componentDidMount() {}

    gotTo(where) {
        this.props.history.push(`/user/${where}`);
    }

    toggleTandC() {
        this.setState({ openTermsConditions: !this.state.openTermsConditions });
    }

    searchLab(coupon) {
        this.props.setCorporateCoupon(coupon);
        this.props.clearExtraTests();

        let test_ids = [];
        let network_id = "";
        if (coupon && coupon.tests) {
            test_ids = coupon.tests;
        }
        if (coupon && coupon.network_id) {
            network_id = coupon.network_id;
        }
        window.location.href = `/lab/searchresults?test_ids=${test_ids.join(',')}&network_id=${network_id}`;
    }

    isDocCare() {
        // redirect to care page or to care dashboard
        if (this.props.isUserCared && this.props.isUserCared.has_active_plan) {
            this.props.history.push('/prime/success?user_plan=' + this.props.isUserCared.user_plan_id);
        } else {
            this.props.history.push('/prime/plans');
        }
    }

    goToInsurance(isUserLoginInsured) {
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

    getInsuranceBtnText() {
        // set button text as person user policy status active/inactive/ cancelled
        let isUserLoginInsured = this.props.USER.profiles && this.props.USER.defaultProfile && this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].is_default_user ? this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].is_default_user : false;
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

    render() {
        let currentRoomId = this.props.USER.currentRoomId;
        let coupon = null;
        let memberClass = 'float-right ins-userdetails-buy';
        let memStatus = 'New';
        if (this.props.applicableCoupons && this.props.applicableCoupons.length) {
            coupon = this.props.applicableCoupons[0];
        }

        let isUserLoginInsured = this.props.USER.profiles && this.props.USER.defaultProfile && this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].is_default_user ? this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)].is_default_user : false;

        if (this.props.isUserCared && this.props.isUserCared.has_active_plan) {
            memberClass = 'float-right ins-userdetails-active';
            memStatus = 'Active';
        }

        let is_care = false;
        let care_user_profile = {};

        let defaultProfile = this.props.USER.profiles && this.props.USER.defaultProfile && this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)] ? this.props.USER.profiles[parseInt(this.props.USER.defaultProfile)] : null;

        if (this.props.USER.profiles && Object.keys(this.props.USER.profiles).length) {
            Object.entries(this.props.USER.profiles).map(function ([key, value]) {
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
                            `Welcome to Docprime${this.props.USER.userName ? `, ${this.props.USER.userName}! ` : ''} `
                        ),
                        defaultProfile && defaultProfile.is_vip_gold_member && defaultProfile.vip_data ? _react2.default.createElement(
                            'div',
                            { className: 'gold-white-bg-container card-container m-0', onClick: () => this.props.history.push('/vip-club-activated-details') },
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
                                        { className: 'gold-benifi-cards', onClick: e => {

                                                let data = {
                                                    'Category': 'ConsumerApp', 'Action': 'FindDoctorsProfileClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'find-doctors-profile-clicked'
                                                };
                                                _gtm2.default.sendEvent({ data: data });
                                                this.props.clearVipSelectedPlan(); // reset gld or vip store to default state
                                                this.props.history.push(`/vip-gold-details?is_gold=true&source=user-profile-page`);
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
                                        { className: 'gold-benifi-cards', onClick: e => {
                                                let data = {
                                                    'Category': 'ConsumerApp', 'Action': 'BookTestsProfileClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'book-tests-profile-clicked'
                                                };
                                                _gtm2.default.sendEvent({ data: data });
                                                this.props.clearVipSelectedPlan(); // reset gld or vip store to default state
                                                this.props.history.push(`/vip-gold-details?is_gold=true&source=user-profile-page`);
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
                                        { className: 'gold-benifi-cards', onClick: e => {
                                                let data = {
                                                    'Category': 'ConsumerApp', 'Action': 'SaveMedicinesProfileClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'save-medicines-profile-clicked'
                                                };
                                                _gtm2.default.sendEvent({ data: data });
                                                this.props.clearVipSelectedPlan(); // reset gld or vip store to default state
                                                this.props.history.push(`/all-medicines`);
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
                                            { onClick: () => this.toggleTandC(), className: 'text-xs fw-500', style: { color: `var(--text--dark--all)`, cursor: 'pointer' } },
                                            'Terms & Conditions'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'view-more-coupons', onClick: () => {
                                            // redirect to more available coupons
                                            this.props.history.push('/user/coupons');
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
                        { onClick: e => {
                                let data = {
                                    'Category': 'ConsumerApp', 'Action': 'ProfileMenuVipClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'profile-menu-vip-clicked'
                                };
                                _gtm2.default.sendEvent({ data: data });
                                e.preventDefault();
                                this.props.clearVipSelectedPlan(); // reset gld or vip store to default state
                                this.props.history.push('/vip-club-details?source=profile-menu-vip-clicked&lead_source=Docprime');
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
                        { onClick: e => {
                                let data = {
                                    'Category': 'ConsumerApp', 'Action': 'ProfileMenuGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'profile-menu-gold-clicked'
                                };
                                _gtm2.default.sendEvent({ data: data });
                                e.preventDefault();
                                this.props.clearVipSelectedPlan(); // reset gld or vip store to default state
                                this.props.history.push('/vip-gold-details?is_gold=true&source=profile-menu-gold-clicked&lead_source=Docprime');
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
                        { onClick: () => this.props.history.push(`/myratings`), className: 'my-profile-item lst-spcng' },
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
                        { onClick: () => {
                                this.props.history.push('/wallet');
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
                        { onClick: () => {
                                this.props.history.push('/user/address');
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
                        { onClick: () => {
                                this.props.history.push('/notifications');
                            }, className: 'my-profile-item lst-spcng' },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement(
                                'span',
                                { className: 'icon icon-md nav-icon' },
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/customer-icons/bl-bell.png", className: 'img-fluid' })
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
                        { onClick: () => {
                                this.props.logout(currentRoomId);
                            }, className: 'my-profile-item lst-spcng ' },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement(
                                'span',
                                { className: 'icon icon-md nav-icon' },
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + "/img/customer-icons/log-out.svg", className: 'img-fluid' })
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
            this.state.openTermsConditions ? _react2.default.createElement(_termsConditions2.default, { toggle: () => this.toggleTandC(), tnc: coupon.tnc }) : ""
        );
    }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserAddress extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            pick: this.props.location.search.includes('pick=true')
        };
    }

    componentDidMount() {
        // this.props.getUserAddress()
    }

    addAddress() {
        //add new address
        this.props.history.push('/user/address/add');
    }

    editAddress(id) {
        // edit existing address
        if (this.props.location.search.includes('pick=true')) {
            // pick address and go back, else go on to edit.
            this.props.selectPickupAddress(id);
            this.props.history.go(-1);
        } else {
            this.props.history.push(`/user/address/edit/${id}`);
        }
    }

    updateAddress(addressData, e) {
        // update changes in address
        addressData.is_default = true;
        this.props.updateUserAddress(addressData, (err, data) => {
            this.props.getUserAddress();
            this.editAddress(addressData.id);
        });
    }

    render() {

        let { address } = this.props.USER;

        return _react2.default.createElement(
            'div',
            { className: 'widget-content pl-0 pr-0' },
            _react2.default.createElement(
                'ul',
                { className: 'list family-list dp-user-list' },
                address && address.length ? address.map((curr, key) => {
                    return _react2.default.createElement(
                        'li',
                        { key: key },
                        _react2.default.createElement(
                            'span',
                            { className: 'icon icon-lg member-icon', onClick: this.updateAddress.bind(this, curr), style: { top: '0px', position: 'absolute', left: '10px', height: '0px', width: '0px', cursor: 'pointer' } },
                            _react2.default.createElement('input', { type: 'radio', value: curr.id.toString(), checked: curr.is_default, className: 'user-address-hidden-radio' }),
                            _react2.default.createElement('span', { className: 'user-address-radio' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'member-details padding-leftadjest', onClick: this.updateAddress.bind(this, curr) },
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
                            { onClick: this.updateAddress.bind(this, curr), style: { top: 10 }, className: 'ct-img ct-img-sm arrow-forward-right' },
                            this.state.pick ? "Pick" : "Edit"
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _mapHelpers = __webpack_require__(/*! ../../../../../helpers/mapHelpers.js */ "./dev/js/helpers/mapHelpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserSignupView extends _react2.default.Component {
    constructor(props) {
        super(props);

        let { profiles, selectedProfile, defaultProfile } = this.props.USER;
        let def_profile = null;
        if (profiles && profiles[defaultProfile]) {
            def_profile = profiles[defaultProfile];
        }

        this.state = {
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
            edit: !!this.props.match.params.id,
            land_mark_results: [],
            locality_results: []
        };
    }

    getLocation(location, resultField) {
        let types = ['establishment'];
        if (resultField == 'locality_results') {
            types = ['(regions)'];
        }
        (0, _mapHelpers._autoCompleteService)(location, function (results, status) {
            results = results || [];
            this.setState({ [resultField]: results });
        }.bind(this), types);
    }

    componentDidMount() {
        if (this.state.edit) {
            let editState = {};
            if (this.props.USER.address) {
                this.props.USER.address.map(add => {
                    if (add.id == this.props.match.params.id) {
                        editState = add;
                    }
                });
            }
            this.setState(_extends({}, editState));
        }
    }

    componentWillReceiveProps(props) {
        if (this.state.edit) {
            let editState = {};
            if (props.USER.address) {
                props.USER.address.map(add => {
                    if (add.id == props.match.params.id) {
                        editState = add;
                    }
                });
            }
            this.setState(_extends({}, editState));
        }
    }

    inputHandler(e) {
        this.setState({ [e.target.name]: e.target.value });

        // if (e.target.name == 'land_mark') {
        //     // this.getLocation(e.target.value, 'land_mark_results')
        // }

        if (e.target.name == 'locality') {
            this.getLocation(e.target.value, 'locality_results');
        }
    }

    submitForm() {
        // validate
        let addAddress = true;
        Object.keys(this.refs).forEach((prp, i) => {
            let validated = false;
            switch (this.refs[prp].name) {
                case "phone_number":
                    {
                        if (this.refs[prp].value == "") {
                            validated = true;
                            this.refs[prp].style.border = '';
                            return;
                        } else {
                            validated = this.refs[prp].value.match(/^[56789]{1}[0-9]{9}$/);
                        }
                        break;
                    }
                case "pincode":
                    {
                        validated = this.refs[prp].value.match(/^[1-9][0-9]{5}$/);
                        break;
                    }
                case "locality":
                    {
                        if (this.state.locality && this.state.locality_place_id && this.refs[prp].value) {
                            validated = true;
                        } else {
                            this.refs[prp].value = "";
                        }
                        break;
                    }

                case "address":
                    {
                        if (this.refs[prp].value) {
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
                this.refs[prp].style.border = '';
            } else {
                this.refs[prp].style.border = '1px solid red';
                addAddress = false;
            }
        });

        if (addAddress) {
            if (this.state.edit) {
                this.props.updateUserAddress(this.state, (err, data) => {
                    if (err) {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not update address." });
                    }
                    this.props.history.go(-1);
                });
            } else {
                this.props.addUserAddress(this.state, (err, res) => {
                    if (!err) {
                        this.props.selectPickupAddress(res.id);
                    } else {
                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not add address." });
                    }
                    // go back
                    this.props.history.go(-1);
                });
            }
        }
    }

    selectLocation(location, type) {

        (0, _mapHelpers._getLocationFromPlaceId)(location.reference, place => {
            let { place_id, formatted_address, geometry, name } = place;
            let lat = geometry.location.lat;
            let long = geometry.location.lng;

            if (type == 'land_mark') {
                this.setState({
                    land_mark: name,
                    landmark_place_id: place_id,
                    landmark_location_lat: lat,
                    landmark_location_long: long,
                    land_mark_results: [],
                    locality_results: []
                });
            }

            if (type == 'locality') {
                this.setState({
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

    closeResults(e) {
        if (this.state.land_mark_results.length) {
            this.setState({ land_mark_results: [] });
        }

        if (this.state.locality_results.length) {
            this.setState({ locality_results: [] });
        }
    }

    render() {

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
                                        this.state.locality_results.map((result, i) => {
                                            return _react2.default.createElement(
                                                'li',
                                                { key: i, onClick: this.selectLocation.bind(this, result, 'locality') },
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
                                        this.state.land_mark_results.map((result, i) => {
                                            return _react2.default.createElement(
                                                'li',
                                                { key: i, onClick: this.selectLocation.bind(this, result, 'land_mark') },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ./appointmentList/index.js */ "./dev/js/components/commons/userProfile/userAppointments/appointmentList/index.js");

var _index2 = _interopRequireDefault(_index);

var _Loader = __webpack_require__(/*! ../../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserAppointmentsView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            showReports: false,
            appointmentReports: [],
            show_sorted_results: ['all']
        };
    }

    componentDidMount() {
        this.props.getProfileAppointments(this.props.USER.selectedProfile); // get user appointments
    }

    componentWillReceiveProps(props) {
        if (this.props.USER.selectedProfile != props.USER.selectedProfile) {
            this.props.getProfileAppointments(props.USER.selectedProfile); // get user appointments
        }
    }

    viewReportClick(reports) {
        this.setState({ showReports: true, appointmentReports: reports });
    }

    hideReports() {
        this.setState({ showReports: false });
    }

    reportClick(src) {
        if (window) {
            window.open(src, '_blank');
        }
    }

    toggleSortOrder() {

        this.setState({ show_sorted_results: !this.state.show_sorted_results });
    }

    selectOptions(value, type) {
        let appointments = [];
        if (value == 'all') {
            appointments.push('all');
        } else if (value == 'upcoming') {
            appointments = [2, 3, 4, 5];
        } else {
            appointments.push(value);
        }
        let gtmData = {
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

    render() {

        let { appointments, selectedProfile } = this.props.USER;
        let appointment_list = appointments[selectedProfile] || [];

        if (this.state.show_sorted_results.indexOf('all') == -1) {

            if (appointments[selectedProfile] && appointments[selectedProfile].length) {
                appointment_list = appointments[selectedProfile].filter(x => {

                    if (this.state.show_sorted_results.indexOf(x.status) > -1) {
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
                        { className: `${this.state.show_sorted_results.indexOf('all') > -1 ? 'bkselect' : ''}`, onClick: () => this.selectOptions('all', 'all') },
                        'All'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: `${this.state.show_sorted_results.indexOf(2) > -1 || this.state.show_sorted_results.indexOf(3) > -1 || this.state.show_sorted_results.indexOf(4) > -1 || this.state.show_sorted_results.indexOf(5) > -1 ? 'bkselect' : ''}`, onClick: () => this.selectOptions('upcoming', 'upcoming') },
                        'Upcoming'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: `${this.state.show_sorted_results.indexOf(7) > -1 ? 'bkselect' : ''}`, onClick: () => this.selectOptions(7, 'Completed') },
                        'Completed'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: `${this.state.show_sorted_results.indexOf(6) > -1 ? 'bkselect' : ''}`, onClick: () => this.selectOptions(6, 'Cancelled') },
                        'Cancelled'
                    )
                )
            ),
            appointment_list ? _react2.default.createElement(
                'ul',
                { className: 'list online-consultant-list dp-user-list', style: { marginTop: 15, marginBottom: 70 } },
                appointment_list && appointment_list.length ? appointment_list.map((app, i) => {
                    return app.type == 'lab' && app.lab || app.type == 'doctor' ? _react2.default.createElement(_index2.default, _extends({ key: i }, this.props, { data: app, viewReportClick: this.viewReportClick.bind(this) })) : '';
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
                                _react2.default.createElement('img', { src: '/assets/img/icons/close.png', onClick: () => this.hideReports() })
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'ipd-needHelp mb-20', style: { fontSize: 16 } },
                                'View Report'
                            ),
                            this.state.appointmentReports.map((report, index) => {
                                return _react2.default.createElement(
                                    'div',
                                    { key: index, className: 'd-flex align-items-center cursor-pntr mb-10', onClick: () => this.reportClick(report) },
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
                                            `Report ${index + 1}`
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS_MAP = {
    CREATED: 1,
    BOOKED: 2,
    RESCHEDULED_DOCTOR: 3,
    RESCHEDULED_PATIENT: 4,
    ACCEPTED: 5,
    CANCELED: 6,
    COMPLETED: 7
};

class AppointmentList extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    getTime(unix_timestamp) {
        let date = new Date(unix_timestamp);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    openAppointment(type, id) {
        if (type == 'doctor') type = 'opd';
        this.props.history.push(`/${type}/appointment/${id}`);
    }

    viewReports(type, id, e) {
        e.stopPropagation();
        e.preventDefault();

        if (type == 'doctor') type = 'opd';
        this.props.history.push(`/user/${type}/reports/${id}`);
    }

    getStatus(status) {
        status = parseInt(status);
        switch (status) {
            case 1:
                {
                    return _react2.default.createElement(
                        'span',
                        { className: 'appointment-status', style: { color: `var(--text--primary--color)` } },
                        'Created'
                    );
                }
            case 2:
                {
                    return _react2.default.createElement(
                        'span',
                        { className: 'appointment-status', style: { color: `var(--text--primary--color)` } },
                        'Booked'
                    );
                }
            case 3:
                {
                    return _react2.default.createElement(
                        'span',
                        { className: 'appointment-status', style: { color: `var(--text--primary--color)` } },
                        'Rescheduled'
                    );
                }
            case 4:
                {
                    return _react2.default.createElement(
                        'span',
                        { className: 'appointment-status', style: { color: `var(--text--primary--color)` } },
                        'Rescheduled'
                    );
                }
            case 5:
                {
                    return _react2.default.createElement(
                        'span',
                        { className: 'appointment-status', style: { color: `var(--text--primary--color)` } },
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
                        { className: 'appointment-status', style: { color: `var(--text--primary--color)` } },
                        'Upcoming'
                    );
                }
        }
    }

    invoiceClick(invoiceLink) {
        var win = window.open(invoiceLink, '_blank');
        win.focus();
    }

    reportClick(reports) {
        if (reports.length == 1) {
            if (window) {
                window.open(reports[0], '_blank');
            }
        } else {
            this.props.viewReportClick(reports);
        }
    }

    render() {

        let { deal_price, doctor_name, display_name, time_slot_end, time_slot_start, status, type, id, lab_name, lab_test_name, doctor_thumbnail, lab_thumbnail, patient_name, invoices, hospital_name, specialization, vip, payment_mode, discount } = this.props.data;

        let date = new Date(time_slot_start);
        let is_vip_applicable = vip.is_vip_member && vip.covered_under_vip;
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
                        specialization.map((speciality, index) => {
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
                        lab_test_name.length > 1 ? `& ${lab_test_name.length - 1} more` : ''
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
                `Booking id : ${id}`
            ) : '',
            deal_price && !is_vip_applicable ? _react2.default.createElement(
                'span',
                { className: 'fw-500', style: { position: 'absolute', top: 20, right: 8, fontSize: 12, color: '#f78631' } },
                '\u20B9 ',
                parseInt(deal_price) - (discount ? parseInt(discount) : 0)
            ) : '',
            invoices && invoices.length === 1 && (!this.props.data.reports || !this.props.data.reports.length) ? _react2.default.createElement(
                'div',
                { className: 'mrt-20', style: { padding: '0 30px' }, onClick: () => this.invoiceClick(invoices[0]) },
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
                        { className: 'invoice-div', onClick: () => this.invoiceClick(invoices[0]) },
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
                        { className: 'invoice-div', onClick: () => this.reportClick(this.props.data.reports) },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _termsConditions = __webpack_require__(/*! ../../couponSelectionView/termsConditions.js */ "./dev/js/components/commons/couponSelectionView/termsConditions.js");

var _termsConditions2 = _interopRequireDefault(_termsConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserCoupons extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            openTermsConditions: false,
            selectedCoupon: null
        };
    }

    toggleTandC(selectedCoupon = null) {
        this.setState({ openTermsConditions: !this.state.openTermsConditions, selectedCoupon });
    }

    searchLab(coupon) {
        this.props.setCorporateCoupon(coupon);

        let test_ids = [];
        let network_id = "";
        if (coupon && coupon.tests) {
            test_ids = coupon.tests;
        }
        if (coupon && coupon.network_id) {
            network_id = coupon.network_id;
        }
        window.location.href = `/lab/searchresults?test_ids=${test_ids.join(',')}&network_id=${network_id}`;
    }

    render() {

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
                            this.props.applicableCoupons.map((coupon, i) => {
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
                                            { onClick: this.searchLab.bind(this, coupon), className: 'coupon-avail' },
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
                                            { onClick: this.toggleTandC.bind(this, coupon), className: 'coupon-terms' },
                                            'Terms & Conditions'
                                        )
                                    )
                                );
                            })
                        ) : ""
                    )
                )
            ),
            this.state.openTermsConditions && this.state.selectedCoupon ? _react2.default.createElement(_termsConditions2.default, { toggle: () => this.toggleTandC(), tnc: this.state.selectedCoupon.tnc }) : ''
        );
    }
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

const GENDER = {
    "m": "Male",
    "f": "Female",
    "o": "Other"
};

class UserFamily extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getAge(birthday) {
        birthday = new Date(birthday);
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    addProfile() {
        // to add new profile
        this.props.history.push('/addprofile?existing=true');
    }

    editProfile(id, fromWhere) {
        // to edit existing profile
        const parsed = queryString.parse(this.props.location.search);
        if (this.props.location.search.includes('pick=true')) {
            // pick paitent and go back, else go on to edit.
            this.props.selectProfile(id);
            let data = {};
            let selected_test_id = [];
            let selectedDate = null;
            if (parsed.is_insurance && parsed.is_insurance == 'true') {
                if (this.props.selectedCriterias && this.props.selectedCriterias.length > 0) {
                    this.props.selectedCriterias.map((twp, i) => {
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
                this.props.history.push(`/user/edit/${id}?add_to_gold=${fromWhere}&from_booking=true`);
            } else {
                this.props.history.go(-1);
            }
        } else {
            this.props.history.push(`/user/edit/${id}?add_to_gold=${fromWhere}`);
        }
    }

    addtoGold(id) {
        this.editProfile(id, true);
    }

    render() {

        let { profiles, selectedProfile } = this.props.USER;

        let gold_profile = [];
        let normal_profile = [];
        let insurance_profile = [];
        let gold_user_profile = {};
        if (this.props.USER && this.props.USER.profiles) {
            if (Object.keys(this.props.USER.profiles).length > 0) {
                Object.entries(this.props.USER.profiles).map(function ([key, value]) {
                    if (value.is_vip_gold_member) {
                        gold_user_profile = value;
                    }
                });
            }
        }

        {
            Object.keys(profiles).filter(x => !profiles[x].isDummyUser).map((id, key) => {
                if (profiles[id].is_vip_gold_member) {
                    gold_profile.push(_react2.default.createElement(
                        'li',
                        { key: key, onClick: this.editProfile.bind(this, id, false) },
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
                                        profiles[id].gender ? ` ${GENDER[profiles[id].gender]}` : ''
                                    ),
                                    profiles[id].is_default_user ? _react2.default.createElement(
                                        'li',
                                        { className: 'fw-500 text-sm' },
                                        profiles[id].phone_number ? `${profiles[id].phone_number}` : '',
                                        profiles[id].phone_number && profiles[id].email ? _react2.default.createElement(
                                            'span',
                                            { className: 'pipe-sign' },
                                            ' | '
                                        ) : '',
                                        profiles[id].email ? `${profiles[id].email}` : ''
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
                        { key: key, onClick: this.editProfile.bind(this, id, false) },
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
                                        profiles[id].gender ? `${GENDER[profiles[id].gender]}` : ''
                                    ),
                                    profiles[id].is_default_user ? _react2.default.createElement(
                                        'li',
                                        { className: 'fw-500 text-sm' },
                                        profiles[id].phone_number ? `${profiles[id].phone_number}` : '',
                                        profiles[id].phone_number && profiles[id].email ? _react2.default.createElement(
                                            'span',
                                            { className: 'pipe-sign' },
                                            ' | '
                                        ) : '',
                                        profiles[id].email ? `${profiles[id].email}` : ''
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
                        { key: key, onClick: this.editProfile.bind(this, id, false) },
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
                                        profiles[id].gender ? `${GENDER[profiles[id].gender]}` : ''
                                    ),
                                    profiles[id].is_default_user ? _react2.default.createElement(
                                        'li',
                                        { className: 'fw-500 text-sm' },
                                        profiles[id].phone_number ? `${profiles[id].phone_number}` : '',
                                        profiles[id].phone_number && profiles[id].email ? _react2.default.createElement(
                                            'span',
                                            { className: 'pipe-sign' },
                                            ' | '
                                        ) : '',
                                        profiles[id].email ? `${profiles[id].email}` : ''
                                    ) : ''
                                ),
                                gold_user_profile && Object.keys(gold_user_profile).length && gold_user_profile.vip_data && Object.keys(gold_user_profile.vip_data).length && gold_user_profile.vip_data.total_members_allowed > 0 && gold_user_profile.vip_data.is_member_allowed ? _react2.default.createElement(
                                    'button',
                                    { onClick: e => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            this.addtoGold(id);
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
                Object.keys(profiles).filter(x => !profiles[x].isDummyUser).length == 0 ? _react2.default.createElement(
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PrescriptionCardView extends _react2.default.Component {

    downloadImage(src) {
        if (window) {
            window.open(src, '_blank');
        }
    }

    render() {

        let date = new Date(this.props._updatedAt).toDateString();

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
                                    `By Dr. ${this.props.doctorProfile.name}`
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _PrescriptionCard = __webpack_require__(/*! ./PrescriptionCard */ "./dev/js/components/commons/userProfile/userPrescriptions/PrescriptionCard.js");

var _PrescriptionCard2 = _interopRequireDefault(_PrescriptionCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserPrescriptionList extends _react2.default.Component {

	componentDidMount() {
		if (this.props.USER.primaryMobile) {
			//this.props.getUserPrescription(this.props.USER.primaryMobile);
		}
	}

	render() {

		return _react2.default.createElement(
			'div',
			null,
			this.props.USER.userPrescriptions && this.props.USER.userPrescriptions.data && this.props.USER.userPrescriptions.data.prescriptions.length ? this.props.USER.userPrescriptions.data.prescriptions.map((prescription, index) => {
				return _react2.default.createElement(_PrescriptionCard2.default, prescription);
			}) : _react2.default.createElement(
				'p',
				null,
				'No Prescriptions Found'
			)
		);
	}
}
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(/*! ../../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _reactImageLightbox = __webpack_require__(/*! react-image-lightbox */ "react-image-lightbox");

var _reactImageLightbox2 = _interopRequireDefault(_reactImageLightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserReportsView extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            type: this.props.match.params.type,
            id: this.props.match.params.id,
            reports: [],
            lightboxIsOpen: false,
            imageIndex: 0
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.getAppointmentReports(this.state.id, this.state.type, (err, data) => {
            // get user reports
            if (!err) {
                this.setState({ reports: data, loading: false });
            } else {
                this.setState({ loading: false });
            }
        });
    }

    toggleLightBox(type = false, imageIndex = 0) {
        this.setState({ lightboxIsOpen: type, imageIndex: imageIndex });
    }

    checkExtension(report, i) {
        let extensionArr = report.name.split('.');
        let extension = extensionArr[extensionArr.length - 1];
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

    downloadImage(src) {
        if (window) {
            window.open(src, '_blank');
        }
    }

    render() {
        let images = [];
        let { lightboxIsOpen, imageIndex } = this.state;
        if (this.state.reports && this.state.reports.length) {
            images = this.state.reports.map(im => {
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
                this.state.reports.map((report, i) => {
                    return this.checkExtension(report, i);
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
                    onCloseRequest: () => this.setState({ lightboxIsOpen: false }),
                    onMovePrevRequest: () => this.setState({
                        imageIndex: (imageIndex + images.length - 1) % images.length
                    }),
                    onMoveNextRequest: () => this.setState({
                        imageIndex: (imageIndex + 1) % images.length
                    })
                }) : ""
            ) : _react2.default.createElement(_Loader2.default, null)
        );
    }
}
// import Lightbox from '../../../../helpers/lightbox';
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

/***/ "./dev/js/components/insurance/verifyEmail.js":
/*!****************************************************!*\
  !*** ./dev/js/components/insurance/verifyEmail.js ***!
  \****************************************************/
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

class VerifyEmail extends _react2.default.Component {
	// email verification
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			oldEmail: '',
			VerifyEmails: false,
			showOtp: false,
			otpTimeout: false,
			initialStage: true,
			otpValue: '',
			emailSuccessId: ''
		};
	}

	componentWillReceiveProps(props) {
		if (this.state.initialStage && this.props.email != '') {
			this.setState({ email: this.props.email, oldEmail: this.props.email, initialStage: false });
		}
	}

	componentDidMount() {
		if (this.state.initialStage && this.props.email != '') {
			this.setState({ email: this.props.email, oldEmail: this.props.email, initialStage: false });
		}
	}

	handleEndoresmentEmail(event) {
		let oldEmail;
		if (this.props.is_endorsement && this.props.user_data && this.props.user_data.length > 0) {
			oldEmail = this.props.user_data[0].email;
		} else {
			oldEmail = this.state.oldEmail;
		}
		this.setState({ email: event.target.value }, () => {
			if (oldEmail !== this.state.email) {
				let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				validEmail = validEmail.test(this.state.email);
				if (validEmail) {
					this.setState({ VerifyEmails: true });
					if (this.props.is_endorsement) {
						this.props.handleSubmit(false, true);
					} else {
						this.props.verifyEndorsementEmail(this.state.email, false, true);
					}
				}
			} else {
				this.props.verifyEndorsementEmail(this.state.email, false, false);
				this.setState({ VerifyEmails: false });
			}
			if (this.state.email == '') {
				this.setState({ VerifyEmails: false });
				if (this.props.is_endorsement) {
					this.props.handleSubmit(false, true);
				} else {
					this.props.verifyEndorsementEmail(this.state.email, false, true); //verify email using otp
				}
			}
		});
	}

	VerifyEmail(resendFlag) {
		if (resendFlag) {
			this.setState({ otpTimeout: false, otpValue: '' });
		}
		let data = {};
		if (this.props.is_endorsement && this.props.user_data && this.props.user_data.length > 0) {
			data.profile = this.props.user_data[0].profile;
		} else {
			data.profile = this.props.member_id.id;
		}
		let validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (this.state.email != '') {
			validEmail = validEmail.test(this.state.email);
			if (validEmail) {
				data.email = this.state.email;
				this.props.sendOtpOnEmail(data, resp => {
					if (resp && resp.id) {
						this.setState({ emailSuccessId: resp.id, showOtp: true, otpTimeout: false });
						if (this.props.is_endorsement) {
							this.props.handleSubmit(false, true);
						}
						setTimeout(() => {
							this.setState({ otpTimeout: true });
						}, 10000);
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "OTP has been sent successfuly to your new email." });
					} else {
						this.setState({ showOtp: false, otpTimeout: false });
						_nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.message });
					}
				});
			} else {
				this.setState({ VerifyEmails: false });
				if (!this.props.is_endorsement) {
					this.props.verifyEndorsementEmail(this.state.email, false, true);
				}
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter valid Email" });
			}
		} else {
			this.setState({ VerifyEmails: false });
			_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Enter valid Email" });
		}
	}

	setOtp(event) {
		this.setState({ otpValue: event.target.value });
	}
	submitOtp() {
		let data = {};
		data.id = this.state.emailSuccessId;
		if (this.props.is_endorsement && this.props.user_data && this.props.user_data.length > 0) {
			data.profile = this.props.user_data[0].profile;
		} else {
			data.profile = this.props.member_id.id;
		}
		data.otp = parseInt(this.state.otpValue);
		if (this.props.is_endorsement) {
			data.process_immediately = false;
		} else {
			data.process_immediately = true;
		}
		this.props.submitEmailOTP(data, (resp, error) => {
			if (resp) {
				this.props.verifyEndorsementEmail(this.state.email, true, false);
				this.setState({ VerifyEmails: false, showOtp: false, otpTimeout: false, otpValue: '', emailSuccessId: '' });
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.message });
			} else {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.message });
			}
		});
	}
	render() {
		let self = this;
		return _react2.default.createElement(
			'div',
			{ className: `col-12 mrt-10 ${this.props.is_endorsement ? '' : 'ins-fmpage-input'}`, onClick: e => {
					e.stopPropagation();
					e.preventDefault();
				} },
			_react2.default.createElement(
				'div',
				{ className: this.state.showOtp ? 'ins-email-cont' : '' },
				_react2.default.createElement(
					'div',
					{ className: `ins-form-group ${this.state.showOtp ? 'mb-0' : ''}` },
					_react2.default.createElement('input', {
						type: 'text',
						id: `emails_${this.props.member_id.id}`,
						className: `form-control ins-form-control ${this.props.validateErrors && this.props.is_endorsement && this.props.validateErrors.indexOf('email') > -1 ? 'fill-error' : ''} ${this.props.isEmailError ? 'errorColorBorder' : ''}`, required: true,
						autoComplete: 'email',
						name: 'email',
						'data-param': 'email',
						value: this.state.email,
						onChange: this.handleEndoresmentEmail.bind(this),
						onBlur: this.handleEndoresmentEmail.bind(this)
					}),
					_react2.default.createElement(
						'label',
						{ className: 'form-control-placeholder datePickerLabel', htmlFor: 'statick' },
						_react2.default.createElement('span', { className: 'labelDot' }),
						'Email'
					),
					_react2.default.createElement('img', { src: "/assets" + "/img/mail-01.svg" }),
					this.state.VerifyEmails ? _react2.default.createElement(
						'span',
						{ className: 'vrfy-edit', onClick: this.VerifyEmail.bind(this, false) },
						'Verify now'
					) : ''
				),
				this.state.showOtp && this.state.VerifyEmails ? _react2.default.createElement(
					'div',
					{ className: 'ins-otp-mail-cont' },
					_react2.default.createElement(
						'p',
						{ className: 'ins-em-otp' },
						'An OTP has been sent to your email address'
					),
					_react2.default.createElement(
						'div',
						{ className: 'em-ins-inp-cont' },
						_react2.default.createElement('input', { type: 'number', className: 'em-ins-inpu', placeholder: 'Enter OTP', onChange: this.setOtp.bind(this), value: this.state.otpValue }),
						this.state.otpValue.length == 6 ? _react2.default.createElement(
							'button',
							{ onClick: this.submitOtp.bind(this) },
							'Submit'
						) : ''
					),
					this.state.otpTimeout ? _react2.default.createElement(
						'span',
						{ className: 'rdsn-ipt-md', onClick: this.VerifyEmail.bind(this, true) },
						'Resend'
					) : ''
				) : ''
			)
		);
	}

}

exports.default = VerifyEmail;

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _index2 = __webpack_require__(/*! ../../components/commons/userProfile/index.js */ "./dev/js/components/commons/userProfile/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class UserProfile extends _react2.default.Component {
    constructor(props) {
        super(props);
        if (!_storage2.default.checkAuth()) {
            const parsed = queryString.parse(window.location.search);
            if (parsed && parsed.ref) {
                this.props.history.replace(`/login?callback=/&ref=home`);
            } else {
                this.props.history.replace(`/login?callback=/`);
            }
        }
    }

    static loadData(store) {
        return store.dispatch((0, _index.getUserProfile)());
    }

    componentDidMount() {
        if (_storage2.default.checkAuth()) {
            this.props.getUserProfile(); // get loggedIn user profiles
            this.props.getUserAddress(); // get user address
            this.props.getCoupons({}); // get user specific coupons
            this.props.getCartItems(); // get user cart items
            //this.props.getIsCareDetails() // get user subscription plan details
        }
        // this.props.loadOPDInsurance(this.props.selectedLocation)
    }

    render() {
        if (!_storage2.default.checkAuth()) {
            return _react2.default.createElement('div', null);
        }
        return _react2.default.createElement(_index3.default, this.props);
    }
}

UserProfile.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    const USER = state.USER;

    const {
        applicableCoupons,
        isUserCared
    } = state.USER;
    let { selectedSlot } = state.LAB_SEARCH;

    const {
        selectedCriterias
    } = state.SEARCH_CRITERIA_LABS;

    const {
        selectedLocation,
        common_settings
    } = state.SEARCH_CRITERIA_OPD;

    return {
        USER,
        applicableCoupons,
        isUserCared,
        selectedSlot,
        selectedCriterias,
        selectedLocation,
        common_settings
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: roomId => dispatch((0, _index.logout)(roomId)),
        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        getProfileAppointments: profile_id => dispatch((0, _index.getProfileAppointments)(profile_id)),
        selectProfile: profile_id => dispatch((0, _index.selectProfile)(profile_id)),
        getUserAddress: () => dispatch((0, _index.getUserAddress)()),
        addUserAddress: (postData, cb) => dispatch((0, _index.addUserAddress)(postData, cb)),
        updateUserAddress: (postData, cb) => dispatch((0, _index.updateUserAddress)(postData, cb)),
        editUserProfile: (profileData, profileId, cb) => dispatch((0, _index.editUserProfile)(profileData, profileId, cb)),
        editUserProfileImage: (profileData, profileId, cb) => dispatch((0, _index.editUserProfileImage)(profileData, profileId, cb)),
        selectPickupAddress: address => dispatch((0, _index.selectPickupAddress)(address)),
        getAppointmentReports: (appointmentId, type, cb) => dispatch((0, _index.getAppointmentReports)(appointmentId, type, cb)),
        getUserPrescription: mobileNo => dispatch((0, _index.getUserPrescription)(mobileNo)),
        getCoupons: productId => dispatch((0, _index.getCoupons)(productId)),
        getUserReviews: cb => dispatch((0, _index.getUserReviews)(cb)),
        getRatingCompliments: callback => dispatch((0, _index.getRatingCompliments)(callback)),
        updateAppointmentRating: (ratingData, callback) => dispatch((0, _index.updateAppointmentRating)(ratingData, callback)),
        OTTLogin: (ott, user_id) => dispatch((0, _index.OTTLogin)(ott, user_id)),
        setCorporateCoupon: coupon => dispatch((0, _index.setCorporateCoupon)(coupon)),
        clearExtraTests: () => dispatch((0, _index.clearExtraTests)()),
        getCartItems: () => dispatch((0, _index.getCartItems)()),
        generateInsuranceLead: (selectedPlan, cb) => dispatch((0, _index.generateInsuranceLead)(selectedPlan, cb)),
        getIsCareDetails: () => dispatch((0, _index.getIsCareDetails)()),
        preBooking: slot => dispatch((0, _index.preBooking)(slot)),
        loadOPDInsurance: city => dispatch((0, _index.loadOPDInsurance)(city)),
        sendOtpOnEmail: (criteria, callback) => dispatch((0, _index.sendOtpOnEmail)(criteria, callback)),
        submitEmailOTP: (data, cb) => dispatch((0, _index.submitEmailOTP)(data, cb)),
        clearVipSelectedPlan: () => dispatch((0, _index.clearVipSelectedPlan)()),
        resetVipData: () => dispatch((0, _index.resetVipData)())
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserProfile);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9XaGF0c0FwcE9wdGluL1doYXRzQXBwT3B0aW5WaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvY291cG9uU2VsZWN0aW9uVmlldy90ZXJtc0NvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS9Vc2VyUHJvZmlsZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS9lZGl0UHJvZmlsZS9FZGl0UHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL2VkaXRQcm9maWxlL2Jhc2ljLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvZWRpdFByb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS9lZGl0UHJvZmlsZS9tZWRpY2FsLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS9wcm9maWxlRGF0YS9Qcm9maWxlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3Byb2ZpbGVEYXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlckFkZHJlc3MvVXNlckFkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS91c2VyQWRkcmVzcy9hZGQvYWRkQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJBZGRyZXNzL2FkZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJBZGRyZXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlckFwcG9pbnRtZW50cy9Vc2VyQXBwb2ludG1lbnRzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJBcHBvaW50bWVudHMvYXBwb2ludG1lbnRMaXN0L0FwcG9pbnRtZW50TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJBcHBvaW50bWVudHMvYXBwb2ludG1lbnRMaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlckFwcG9pbnRtZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJDb3Vwb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlckNvdXBvbnMvdXNlckNvdXBvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS91c2VyRmFtaWx5L1VzZXJGYW1pbHkuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS91c2VyRmFtaWx5L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlclByZXNjcmlwdGlvbnMvUHJlc2NyaXB0aW9uQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJQcmVzY3JpcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvdXNlclByb2ZpbGUvdXNlclByZXNjcmlwdGlvbnMvdXNlclByZXNjcmlwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS91c2VyUmVwb3J0cy9Vc2VyUmVwb3J0c1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy91c2VyUHJvZmlsZS91c2VyUmVwb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvdmVyaWZ5RW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJMb2FkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIldoYXRzQXBwT3B0aW5WaWV3Iiwic3RhdGUiLCJ3aGF0c2FwcF9vcHRpbl9WaWV3Iiwic2hvdWxkUmVuZGVyIiwicHJvZmlsZXMiLCJ3aGF0c2FwcF9vcHRpbiIsImlzQXBwb2ludG1lbnQiLCJ3aGF0c2FwcF9pc19kZWNsaW5lZCIsImlzVXNlclByb2ZpbGUiLCJ0b2dnbGVXaGF0c2FwIiwic3RhdHVzIiwiZSIsInByb2ZpbGVEYXRhIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImVkaXRVc2VyUHJvZmlsZSIsImlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0U3RhdGUiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiQVNTRVRTX0JBU0VfVVJMIiwiYmluZCIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiVGVybXMiLCJ0b2dnbGUiLCJfX2h0bWwiLCJ0bmMiLCJTZWN0aW9uX0NvbXBvbmVudCIsImNoaWxkcmVuIiwidGl0bGUiLCJoaXN0b3J5IiwibG9nb3V0IiwiVXNlclByb2ZpbGVWaWV3IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInNlbGVjdGVkUHJvZmlsZSIsIlVTRVIiLCJtYXRjaCIsInVybCIsInBhcmFtcyIsInR5cGUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJFZGl0UHJvZmlsZSIsImN1cnJlbnRQcm9maWxlIiwic2VsZWN0ZWRUYWIiLCJsb2FkaW5nIiwib3BlbkNyb3AiLCJlcnJvcnMiLCJpc0VtYWlsVmVyaWZpZWQiLCJpc0VtYWlsVXBkYXRlZCIsImlzRW1haWxFcnJvciIsImlzRG9iVmFsaWRhdGVkIiwiaXNfZG9iX2Vycm9yIiwiYWRkX3RvX2dvbGQiLCJzZWFyY2giLCJmcm9tX2Jvb2tpbmciLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiZG9iIiwidG9nZ2xlT3BlbkNyb3AiLCJtYW5hZ2VBZGRyZXNzIiwicHVzaCIsImdldENvbXAiLCJzZWxmIiwic2hvd19kZWZhdWx0X2NoZWNrQm94IiwiaXNfcHJvZmlsZV9lZGl0YWJsZSIsImdvbGRfdXNlcl9wcm9maWxlIiwiZGVmYXVsdF9wcm9maWxlIiwiZW50cmllcyIsIm1hcCIsImtleSIsInZhbHVlIiwiaXNfaW5zdXJlZCIsImlzX2RlZmF1bHRfdXNlciIsImlzX3ZpcF9nb2xkX21lbWJlciIsIm1hcmdpbkJvdHRvbSIsInVwZGF0ZVByb2ZpbGUiLCJwcm9jZWVkVXBkYXRlIiwidmVyaWZ5RW5kb3JzZW1lbnRFbWFpbCIsImFkZFRvR29sZCIsIm5ld2VtYWlsIiwidmVyaWZpZWQiLCJpc19lbWFpbF9jaGFuZ2VkIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJ2YWxzIiwiZmllbGQiLCJ2YWxpZGF0ZWQiLCJ0b1N0cmluZyIsImdlbmRlciIsImVyciIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwicmVzZXRWaXBEYXRhIiwiZ28iLCJDb21wcmVzcyIsInJlcXVpcmUiLCJtb21lbnQiLCJCYXNpY0RldGFpbHMiLCJkYXRhVXJsIiwiZm9ybWF0dGVkRGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImhhbmRsZUdlbmRlciIsInZhbCIsInBpY2tGaWxlIiwiZmlsZXMiLCJjb21wcmVzcyIsImZpbGUiLCJxdWFsaXR5IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJ0aGVuIiwicmVzdWx0cyIsImltZzEiLCJiYXNlNjRzdHIiLCJpbWdFeHQiLCJleHQiLCJjb252ZXJ0QmFzZTY0VG9GaWxlIiwiZ2V0QmFzZTY0IiwiY2F0Y2giLCJjYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZpbmlzaENyb3AiLCJmaWxlX2Jsb2JfZGF0YSIsImRhdGFVUkl0b0Jsb2IiLCJyZWZzIiwiY3JvcHBlciIsImdldENyb3BwZWRDYW52YXMiLCJ0b0RhdGFVUkwiLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImVkaXRVc2VyUHJvZmlsZUltYWdlIiwiZGF0YVVSSSIsImJpbmFyeSIsImF0b2IiLCJzcGxpdCIsImFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJCbG9iIiwiVWludDhBcnJheSIsImhhbmRsZUVudGVyUHJlc3MiLCJvcGVuQ2FsZW5kYXIiLCJkYXRlTW9kYWwiLCJzZWxlY3REYXRlRnJvbUNhbGVuZGFyIiwiZGF0ZSIsInRvRGF0ZSIsImdldEZvcm1hdHRlZERhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJkZCIsImdldERhdGUiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwidG9kYXkiLCJoYW5kbGVEZWZhdWx0VXNlciIsIm5hbWUiLCJlbWFpbCIsInBob25lX251bWJlciIsInByb2ZpbGVfaW1hZ2UiLCJ3aWR0aCIsImN1cnNvciIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJkaXNwbGF5IiwiZGlmZiIsInZpcF9kYXRhIiwidG90YWxfbWVtYmVyc19hbGxvd2VkIiwiaXNfbWVtYmVyX2FsbG93ZWQiLCJ6SW5kZXgiLCJNZWRpY2FsRGV0YWlscyIsIlByb2ZpbGVEYXRhIiwib3BlblRlcm1zQ29uZGl0aW9ucyIsImdvdFRvIiwid2hlcmUiLCJ0b2dnbGVUYW5kQyIsInNlYXJjaExhYiIsImNvdXBvbiIsInNldENvcnBvcmF0ZUNvdXBvbiIsImNsZWFyRXh0cmFUZXN0cyIsInRlc3RfaWRzIiwibmV0d29ya19pZCIsInRlc3RzIiwiaHJlZiIsImpvaW4iLCJpc0RvY0NhcmUiLCJpc1VzZXJDYXJlZCIsImhhc19hY3RpdmVfcGxhbiIsInVzZXJfcGxhbl9pZCIsImdvVG9JbnN1cmFuY2UiLCJpc1VzZXJMb2dpbkluc3VyZWQiLCJwYXJzZUludCIsImRlZmF1bHRQcm9maWxlIiwiaW5zdXJhbmNlX3N0YXR1cyIsImdlbmVyYXRlSW5zdXJhbmNlTGVhZCIsImdldEluc3VyYW5jZUJ0blRleHQiLCJjdXJyZW50Um9vbUlkIiwibWVtYmVyQ2xhc3MiLCJtZW1TdGF0dXMiLCJhcHBsaWNhYmxlQ291cG9ucyIsImlzX2NhcmUiLCJjYXJlX3VzZXJfcHJvZmlsZSIsInVzZXJOYW1lIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJleHBpcnlfZGF0ZSIsImlzX3ZpcF9tZW1iZXIiLCJwYWRkaW5nTGVmdCIsImNsZWFyVmlwU2VsZWN0ZWRQbGFuIiwiaXNfY29ycG9yYXRlIiwiaGVpZ2h0IiwiaGVhZGluZyIsImRlc2MiLCJjb2RlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiQ09ORklHIiwiRU5BQkxFX0lOU1VSQU5DRSIsIkVOQUJMRV9WSVBfQ0xVQiIsIkVOQUJMRV9WSVBfR09MRCIsInVucmVhZF9jb3VudCIsIlVzZXJBZGRyZXNzIiwicGljayIsImFkZEFkZHJlc3MiLCJlZGl0QWRkcmVzcyIsInNlbGVjdFBpY2t1cEFkZHJlc3MiLCJ1cGRhdGVBZGRyZXNzIiwiYWRkcmVzc0RhdGEiLCJpc19kZWZhdWx0IiwidXBkYXRlVXNlckFkZHJlc3MiLCJnZXRVc2VyQWRkcmVzcyIsImFkZHJlc3MiLCJjdXJyIiwidG9wIiwicG9zaXRpb24iLCJsZWZ0Iiwid29yZFdyYXAiLCJsYW5kX21hcmsiLCJsb2NhbGl0eSIsIlVzZXJTaWdudXBWaWV3IiwiZGVmX3Byb2ZpbGUiLCJsYW5kbWFya19wbGFjZV9pZCIsImxhbmRtYXJrX2xvY2F0aW9uX2xhdCIsImxhbmRtYXJrX2xvY2F0aW9uX2xvbmciLCJwaW5jb2RlIiwibG9jYWxpdHlfcGxhY2VfaWQiLCJsb2NhbGl0eV9sb2NhdGlvbl9sYXQiLCJsb2NhbGl0eV9sb2NhdGlvbl9sb25nIiwiZWRpdCIsImxhbmRfbWFya19yZXN1bHRzIiwibG9jYWxpdHlfcmVzdWx0cyIsImdldExvY2F0aW9uIiwicmVzdWx0RmllbGQiLCJ0eXBlcyIsImVkaXRTdGF0ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJpbnB1dEhhbmRsZXIiLCJzdWJtaXRGb3JtIiwiZm9yRWFjaCIsInBycCIsInN0eWxlIiwiYm9yZGVyIiwiYWRkVXNlckFkZHJlc3MiLCJyZXMiLCJzZWxlY3RMb2NhdGlvbiIsInJlZmVyZW5jZSIsInBsYWNlIiwicGxhY2VfaWQiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImdlb21ldHJ5IiwibGF0IiwibG9uZyIsImxuZyIsImNsb3NlUmVzdWx0cyIsImRlc2NyaXB0aW9uIiwiQWRkQWRkcmVzcyIsIlVzZXJBcHBvaW50bWVudHNWaWV3Iiwic2hvd1JlcG9ydHMiLCJhcHBvaW50bWVudFJlcG9ydHMiLCJzaG93X3NvcnRlZF9yZXN1bHRzIiwiZ2V0UHJvZmlsZUFwcG9pbnRtZW50cyIsInZpZXdSZXBvcnRDbGljayIsInJlcG9ydHMiLCJoaWRlUmVwb3J0cyIsInJlcG9ydENsaWNrIiwic3JjIiwib3BlbiIsInRvZ2dsZVNvcnRPcmRlciIsInNlbGVjdE9wdGlvbnMiLCJhcHBvaW50bWVudHMiLCJndG1EYXRhIiwiYXBwb2ludG1lbnRfbGlzdCIsImluZGV4T2YiLCJmaWx0ZXIiLCJ4IiwibWFyZ2luVG9wIiwiYXBwIiwibGFiIiwicmVwb3J0IiwiaW5kZXgiLCJtYXJnaW5SaWdodCIsImZsZXgiLCJtYXJnaW5MZWZ0IiwiU1RBVFVTX01BUCIsIkNSRUFURUQiLCJCT09LRUQiLCJSRVNDSEVEVUxFRF9ET0NUT1IiLCJSRVNDSEVEVUxFRF9QQVRJRU5UIiwiQUNDRVBURUQiLCJDQU5DRUxFRCIsIkNPTVBMRVRFRCIsIkFwcG9pbnRtZW50TGlzdCIsImdldFRpbWUiLCJ1bml4X3RpbWVzdGFtcCIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImFtcG0iLCJzdHJUaW1lIiwib3BlbkFwcG9pbnRtZW50Iiwidmlld1JlcG9ydHMiLCJnZXRTdGF0dXMiLCJpbnZvaWNlQ2xpY2siLCJpbnZvaWNlTGluayIsIndpbiIsImZvY3VzIiwiZGVhbF9wcmljZSIsImRvY3Rvcl9uYW1lIiwiZGlzcGxheV9uYW1lIiwidGltZV9zbG90X2VuZCIsInRpbWVfc2xvdF9zdGFydCIsImxhYl9uYW1lIiwibGFiX3Rlc3RfbmFtZSIsImRvY3Rvcl90aHVtYm5haWwiLCJsYWJfdGh1bWJuYWlsIiwicGF0aWVudF9uYW1lIiwiaW52b2ljZXMiLCJob3NwaXRhbF9uYW1lIiwic3BlY2lhbGl6YXRpb24iLCJ2aXAiLCJwYXltZW50X21vZGUiLCJkaXNjb3VudCIsImlzX3ZpcF9hcHBsaWNhYmxlIiwiY292ZXJlZF91bmRlcl92aXAiLCJzcGVjaWFsaXR5IiwidGVzdF9uYW1lIiwidG9EYXRlU3RyaW5nIiwicmlnaHQiLCJwYWRkaW5nIiwidXNlckNvdXBvbnMiLCJVc2VyQ291cG9ucyIsInNlbGVjdGVkQ291cG9uIiwicXVlcnlTdHJpbmciLCJHRU5ERVIiLCJVc2VyRmFtaWx5IiwiZ2V0QWdlIiwiYmlydGhkYXkiLCJhZ2VEaWZNcyIsIm5vdyIsImFnZURhdGUiLCJNYXRoIiwiYWJzIiwiZ2V0VVRDRnVsbFllYXIiLCJhZGRQcm9maWxlIiwiZWRpdFByb2ZpbGUiLCJmcm9tV2hlcmUiLCJwYXJzZWQiLCJwYXJzZSIsInNlbGVjdFByb2ZpbGUiLCJzZWxlY3RlZF90ZXN0X2lkIiwic2VsZWN0ZWREYXRlIiwiaXNfaW5zdXJhbmNlIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJ0d3AiLCJzdGFydF9kYXRlIiwic2VsZWN0ZWRTbG90IiwibGFiX3Rlc3QiLCJsYWJfaWQiLCJwcm9maWxlIiwicHJlQm9va2luZyIsImFkZHRvR29sZCIsImdvbGRfcHJvZmlsZSIsIm5vcm1hbF9wcm9maWxlIiwiaW5zdXJhbmNlX3Byb2ZpbGUiLCJpc0R1bW15VXNlciIsInBhZGRpbmdSaWdodCIsIndvcmRCcmVhayIsInRleHRUcmFuc2Zvcm0iLCJQcmVzY3JpcHRpb25DYXJkVmlldyIsImRvd25sb2FkSW1hZ2UiLCJfdXBkYXRlZEF0IiwiYWdlIiwidG9VcHBlckNhc2UiLCJkb2N0b3JQcm9maWxlIiwiUHJlc2NyaXB0aW9uRmlsZVVSTCIsIlVzZXJQcmVzY3JpcHRpb24iLCJVc2VyUHJlc2NyaXB0aW9uTGlzdCIsInByaW1hcnlNb2JpbGUiLCJ1c2VyUHJlc2NyaXB0aW9ucyIsInByZXNjcmlwdGlvbnMiLCJwcmVzY3JpcHRpb24iLCJVc2VyUmVwb3J0c1ZpZXciLCJsaWdodGJveElzT3BlbiIsImltYWdlSW5kZXgiLCJnZXRBcHBvaW50bWVudFJlcG9ydHMiLCJ0b2dnbGVMaWdodEJveCIsImNoZWNrRXh0ZW5zaW9uIiwiZXh0ZW5zaW9uQXJyIiwiZXh0ZW5zaW9uIiwiaW1hZ2VzIiwiaW0iLCJWZXJpZnlFbWFpbCIsIm9sZEVtYWlsIiwiVmVyaWZ5RW1haWxzIiwic2hvd090cCIsIm90cFRpbWVvdXQiLCJpbml0aWFsU3RhZ2UiLCJvdHBWYWx1ZSIsImVtYWlsU3VjY2Vzc0lkIiwiaGFuZGxlRW5kb3Jlc21lbnRFbWFpbCIsImV2ZW50IiwiaXNfZW5kb3JzZW1lbnQiLCJ1c2VyX2RhdGEiLCJ2YWxpZEVtYWlsIiwidGVzdCIsImhhbmRsZVN1Ym1pdCIsInJlc2VuZEZsYWciLCJtZW1iZXJfaWQiLCJzZW5kT3RwT25FbWFpbCIsInJlc3AiLCJzZXRPdHAiLCJzdWJtaXRPdHAiLCJvdHAiLCJwcm9jZXNzX2ltbWVkaWF0ZWx5Iiwic3VibWl0RW1haWxPVFAiLCJ2YWxpZGF0ZUVycm9ycyIsIlVzZXJQcm9maWxlIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsInJlZiIsInJlcGxhY2UiLCJsb2FkRGF0YSIsInN0b3JlIiwiZGlzcGF0Y2giLCJnZXRVc2VyUHJvZmlsZSIsImdldENvdXBvbnMiLCJnZXRDYXJ0SXRlbXMiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJMQUJfU0VBUkNIIiwiU0VBUkNIX0NSSVRFUklBX0xBQlMiLCJzZWxlY3RlZExvY2F0aW9uIiwiY29tbW9uX3NldHRpbmdzIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInJvb21JZCIsInByb2ZpbGVfaWQiLCJwb3N0RGF0YSIsInByb2ZpbGVJZCIsImFwcG9pbnRtZW50SWQiLCJnZXRVc2VyUHJlc2NyaXB0aW9uIiwibW9iaWxlTm8iLCJwcm9kdWN0SWQiLCJnZXRVc2VyUmV2aWV3cyIsImdldFJhdGluZ0NvbXBsaW1lbnRzIiwiY2FsbGJhY2siLCJ1cGRhdGVBcHBvaW50bWVudFJhdGluZyIsInJhdGluZ0RhdGEiLCJPVFRMb2dpbiIsIm90dCIsInVzZXJfaWQiLCJzZWxlY3RlZFBsYW4iLCJnZXRJc0NhcmVEZXRhaWxzIiwic2xvdCIsImxvYWRPUERJbnN1cmFuY2UiLCJjaXR5IiwiY3JpdGVyaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLGdCQUFNQyxTQUEzQixDQUFxQztBQUNqQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0g7O0FBRURDLGFBQVM7O0FBRUwsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFXLEtBQUtELEtBQUwsQ0FBV0UsU0FBWCxJQUF3QixnQkFBeEM7QUFDSSxtREFBSyxXQUFVLFdBQWYsR0FESjtBQUdRLGlCQUFLRixLQUFMLENBQVdHLFdBQVgsR0FDSTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxlQUFiO0FBQUE7QUFBQSxhQURKLEdBQytFO0FBSnZGLFNBREo7QUFTSDtBQWhCZ0M7O2tCQW1CdEJQLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZjs7Ozs7O2tCQUVlQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1RLGlCQUFOLFNBQWdDUCxnQkFBTUMsU0FBdEMsQ0FBZ0Q7QUFDNUNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjs7QUFFQSxhQUFLSyxLQUFMLEdBQWE7QUFDVEMsaUNBQW9CO0FBRFgsU0FBYjtBQUdIOztBQUVEQyxtQkFBYztBQUNWLFlBQUcsS0FBS1AsS0FBTCxDQUFXUSxRQUFkLEVBQXVCO0FBQ25CLGdCQUFJLEtBQUtSLEtBQUwsQ0FBV1EsUUFBWCxDQUFvQkMsY0FBcEIsSUFBcUMsSUFBekMsRUFBOEM7QUFDMUMsb0JBQUcsS0FBS1QsS0FBTCxDQUFXVSxhQUFYLElBQTRCLENBQUMsS0FBS1YsS0FBTCxDQUFXUSxRQUFYLENBQW9CQyxjQUFqRCxJQUFtRSxDQUFDLEtBQUtULEtBQUwsQ0FBV1EsUUFBWCxDQUFvQkcsb0JBQTNGLEVBQWdIO0FBQzVHLDJC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QVQsQ0FoQmhEO0FBaUJIRyxrQkFBVSxDQUFDQyxHQUFELEVBQUtDLE9BQUwsS0FBaUI1QixTQUFTLHFCQUFTMkIsR0FBVCxFQUFhQyxPQUFiLENBQVQsQ0FqQnhCO0FBa0JIdFMsNEJBQXFCRCxNQUFELElBQVkyUSxTQUFTLCtCQUFtQjNRLE1BQW5CLENBQVQsQ0FsQjdCO0FBbUJIRSx5QkFBaUIsTUFBTXlRLFNBQVMsNkJBQVQsQ0FuQnBCO0FBb0JIRyxzQkFBYyxNQUFNSCxTQUFTLDBCQUFULENBcEJqQjtBQXFCSDFQLCtCQUFzQixDQUFDdVIsWUFBRCxFQUFlNVcsRUFBZixLQUFzQitVLFNBQVMsa0NBQXNCNkIsWUFBdEIsRUFBbUM1VyxFQUFuQyxDQUFULENBckJ6QztBQXNCSDZXLDBCQUFrQixNQUFNOUIsU0FBUyw4QkFBVCxDQXRCckI7QUF1QkhoRSxvQkFBWStGLElBQUQsSUFBVS9CLFNBQVMsdUJBQVcrQixJQUFYLENBQVQsQ0F2QmxCO0FBd0JIQywwQkFBbUJDLElBQUQsSUFBVWpDLFNBQVMsNkJBQWlCaUMsSUFBakIsQ0FBVCxDQXhCekI7QUF5QkhoRCx3QkFBZSxDQUFDaUQsUUFBRCxFQUFVWCxRQUFWLEtBQXFCdkIsU0FBUywyQkFBZWtDLFFBQWYsRUFBd0JYLFFBQXhCLENBQVQsQ0F6QmpDO0FBMEJIaEMsd0JBQWdCLENBQUNyYixJQUFELEVBQU8rRyxFQUFQLEtBQWMrVSxTQUFTLDJCQUFlOWIsSUFBZixFQUFxQitHLEVBQXJCLENBQVQsQ0ExQjNCO0FBMkJIbUcsOEJBQXFCLE1BQU00TyxTQUFTLGtDQUFULENBM0J4QjtBQTRCSDNXLHNCQUFhLE1BQU0yVyxTQUFTLDBCQUFUO0FBNUJoQixLQUFQO0FBOEJILENBL0JEOztrQkFrQ2UseUJBQVFNLGVBQVIsRUFBeUJNLGtCQUF6QixFQUE2Q25CLFdBQTdDLEMiLCJmaWxlIjoiNDIuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIFdoYXRzQXBwT3B0aW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgd2hhdHNhcHBfb3B0aW5fVmlldzp0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRSZW5kZXIoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wcm9maWxlcyl7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wcm9maWxlcy53aGF0c2FwcF9vcHRpbiAhPW51bGwpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuaXNBcHBvaW50bWVudCAmJiAhdGhpcy5wcm9wcy5wcm9maWxlcy53aGF0c2FwcF9vcHRpbiAmJiAhdGhpcy5wcm9wcy5wcm9maWxlcy53aGF0c2FwcF9pc19kZWNsaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucHJvcHMuaXNVc2VyUHJvZmlsZSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIHRvZ2dsZVdoYXRzYXAoc3RhdHVzLGUpIHsgICAgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaXNBcHBvaW50bWVudCl7ICAgICAgXG4gICAgICAgICAgICBsZXQgcHJvZmlsZURhdGEgPSB7Li4udGhpcy5wcm9wcy5wcm9maWxlc31cbiAgICAgICAgICAgIGlmKHN0YXR1cyl7XG4gICAgICAgICAgICAgICAgcHJvZmlsZURhdGEud2hhdHNhcHBfb3B0aW4gPSB0cnVlXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIllvdSB3aGF0c0FwcCBub3RpZmljYXRpb25zIGhhcyBiZWVuIGVuYWJsZWQuXCJ9KSAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcHJvZmlsZURhdGEud2hhdHNhcHBfaXNfZGVjbGluZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcInlvdXIgd2hhdHNBcHAgbm90aWZpY2F0aW9ucyBoYXMgYmVlbiBkaXNhYmxlZC5cIn0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmVkaXRVc2VyUHJvZmlsZShwcm9maWxlRGF0YSwgcHJvZmlsZURhdGEuaWQgLCgpPT57XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2hhdHNhcHBDYXJkQ29udGFpbmVyJylbMF0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoYXRzYXBwX29wdGluX1ZpZXc6IHN0YXR1cyB9LCgpID0+e1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnV2hhdHNhcHRvZ2dsZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdXaGF0c2FwLXRvZ2dsZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVXaGF0c2FwKHN0YXR1cykgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5zaG91bGRSZW5kZXIoKSlcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0FwcG9pbnRtZW50P1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdHNhcHBDYXJkQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2EtbG9nby1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2EtbG9nby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUgd291bGQgbGlrZSB0byBzZW5kIHlvdSB1cGRhdGVzIHRocm91Z2ggd2hhdHNhcHA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbG93RGVjbGluZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWxsb3dCdG5zXCIgb25DbGljaz17dGhpcy50b2dnbGVXaGF0c2FwLmJpbmQodGhpcyx0cnVlKX0+QWxsb3c8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZWNsaW5lQnRuc1wiIHN0eWxlPXt7Y29sb3I6JyM3NTc1NzUnfX1vbkNsaWNrPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzLGZhbHNlKX0+RGVjbGluZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc2MDAnLCBmb250U2l6ZTogJzE0cHgnIH19PkVuYWJsZSA8c3BhbiBjbGFzc05hbWU9XCJzbS13dHNwLWltZ1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2EtbG9nby1zbS5wbmdcIn0gLz5XaGF0c0FwcDwvc3Bhbj4gbm90aWZpY2F0aW9uPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzLCF0aGlzLnN0YXRlLndoYXRzYXBwX29wdGluX1ZpZXcpfSBjaGVja2VkPXt0aGlzLnN0YXRlLndoYXRzYXBwX29wdGluX1ZpZXd9IC8+PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBXaGF0c0FwcE9wdGluVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj5UZXJtcyAmIENvbmRpdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybXMtY29uZGl0aW9uLWRpdiBwYXlwYWwtZHRscy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXJtcy1jb25kaXRpb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMudG5jIH19ID48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWJ0biB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDBcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZX0+RG9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9maWxlRGF0YSBmcm9tICcuL3Byb2ZpbGVEYXRhL2luZGV4LmpzJ1xuaW1wb3J0IEFwcG9pbnRtZW50cyBmcm9tICcuL3VzZXJBcHBvaW50bWVudHMnXG5pbXBvcnQgRmFtaWx5IGZyb20gJy4vdXNlckZhbWlseSdcbmltcG9ydCBFZGl0UHJvZmlsZSBmcm9tICcuL2VkaXRQcm9maWxlJ1xuaW1wb3J0IEFkZHJlc3MgZnJvbSAnLi91c2VyQWRkcmVzcydcbmltcG9ydCBBZGRyZXNzRm9ybSBmcm9tICcuL3VzZXJBZGRyZXNzL2FkZCdcbmltcG9ydCBSZXBvcnRzIGZyb20gJy4vdXNlclJlcG9ydHMnXG5cbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvTGVmdEJhcidcbmltcG9ydCBSaWdodEJhciBmcm9tICcuLi8uLi9jb21tb25zL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBVc2VyUHJlc2NyaXB0aW9uIGZyb20gJy4vdXNlclByZXNjcmlwdGlvbnMnXG5pbXBvcnQgVXNlckNvdXBvbnMgZnJvbSAnLi91c2VyQ291cG9ucydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgVXNlclJldmlldyBmcm9tICcuLi8uLi9jb21tb25zL3VzZXJQcm9maWxlL3VzZXJSZXZpZXdzJ1xuXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY29uc3QgU2VjdGlvbl9Db21wb25lbnQgPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGhpc3RvcnksIGxvZ291dCB9KSA9PiB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnN1bWVyLXByb2ZpbGUtc2NyZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbn1cblxuY2xhc3MgVXNlclByb2ZpbGVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7IHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUgfSA9IHRoaXMucHJvcHMuVVNFUlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tzZWxlY3RlZFByb2ZpbGVdID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2B9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U2VjdGlvbl9Db21wb25lbnQgey4uLnRoaXMucHJvcHN9IHRpdGxlPVwiTXkgUHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVEYXRhICB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25fQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2FwcG9pbnRtZW50c2B9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U2VjdGlvbl9Db21wb25lbnQgey4uLnRoaXMucHJvcHN9IHRpdGxlPVwiTXkgQXBwb2ludG1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXBwb2ludG1lbnRzICB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25fQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2ZhbWlseWB9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8U2VjdGlvbl9Db21wb25lbnQgey4uLnRoaXMucHJvcHN9IHRpdGxlPVwiTXkgRmFtaWx5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFtaWx5ICB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25fQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2FkZHJlc3NgfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFNlY3Rpb25fQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSB0aXRsZT1cIk1hbmFnZSBBZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkcmVzcyAgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uX0NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS9hZGRyZXNzL2FkZGB9IHJlbmRlcj17KHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8QWRkcmVzc0Zvcm0gey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS9hZGRyZXNzL2VkaXQvOmlkYH0gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxBZGRyZXNzRm9ybSB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSBlZGl0PXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2VkaXQvOmlkYH0gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFZGl0UHJvZmlsZSB7Li4udGhpcy5wcm9wc30gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9Lzp0eXBlL3JlcG9ydHMvOmlkYH0gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTZWN0aW9uX0NvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gdGl0bGU9e3Byb3BzLm1hdGNoLnBhcmFtcy50eXBlID09ICdvcGQnID8gXCJQcmVzY3JpcHRpb25zXCIgOiBcIkxhYiBSZXBvcnRzXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9ydHMgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uX0NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS9vbmxpbmVQcmVzY3JpcHRpb25zYH0gcmVuZGVyPXsocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxVc2VyUHJlc2NyaXB0aW9uIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7dGhpcy5wcm9wcy5tYXRjaC51cmx9L2NvdXBvbnNgfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFVzZXJDb3Vwb25zIHsuLi50aGlzLnByb3BzfSB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFJvdXRlIGV4YWN0IHBhdGg9e2Ake3RoaXMucHJvcHMubWF0Y2gudXJsfS9teXJhdGluZ3NgfSByZW5kZXI9eyhwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFVzZXJSZXZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbc2VsZWN0ZWRQcm9maWxlXSA/IFwiXCIgOiA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIG5vQ2hhdEJ1dHRvbj17dHJ1ZX0gZXh0cmFDbGFzcz17KHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy9mYW1pbHknKSB8fCB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCcvYWRkcmVzcycpKSA/IFwiIGNoYXQtZmxvYXQtYnRuLTNcIiA6ICh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCcvZWRpdCcpID8gXCIgY2hhdC1mbG9hdC1idG4tMlwiIDogXCJcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJhc2ljRGV0YWlscyBmcm9tICcuL2Jhc2ljJ1xuaW1wb3J0IE1lZGlhbERldGFpbHMgZnJvbSAnLi9tZWRpY2FsJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9Mb2FkZXInXG5pbXBvcnQgV2hhdHNBcHBPcHRpblZpZXcgZnJvbSAnLi4vLi4vV2hhdHNBcHBPcHRpbi9XaGF0c0FwcE9wdGluVmlldy5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5cbmNsYXNzIEVkaXRQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgbGV0IHsgcHJvZmlsZXMgfSA9IHRoaXMucHJvcHMuVVNFUlxuICAgICAgICBsZXQgY3VycmVudFByb2ZpbGUgPSBudWxsXG4gICAgICAgIGN1cnJlbnRQcm9maWxlID0gey4uLnByb2ZpbGVzW3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkXX1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkVGFiOiAwLFxuICAgICAgICAgICAgcHJvZmlsZURhdGE6IGN1cnJlbnRQcm9maWxlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBvcGVuQ3JvcDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcnM6IHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdoYXRzYXBwX29wdGluOmZhbHNlLFxuICAgICAgICAgICAgaXNFbWFpbFZlcmlmaWVkOmZhbHNlLFxuICAgICAgICAgICAgaXNFbWFpbFVwZGF0ZWQ6ZmFsc2UsXG4gICAgICAgICAgICBpc0VtYWlsRXJyb3I6ZmFsc2UsXG4gICAgICAgICAgICBpc0RvYlZhbGlkYXRlZDpmYWxzZSxcbiAgICAgICAgICAgIGlzX2RvYl9lcnJvcjpmYWxzZSxcbiAgICAgICAgICAgIGFkZF90b19nb2xkOnRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdhZGRfdG9fZ29sZD10cnVlJyk/dHJ1ZTpmYWxzZSxcbiAgICAgICAgICAgIGZyb21fYm9va2luZzp0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnZnJvbV9ib29raW5nPXRydWUnKT90cnVlOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBsZXQgY3VycmVudFByb2ZpbGUgPSBudWxsXG4gICAgICAgIGlmKHRoaXMucHJvcHMuVVNFUiAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGgpe1xuICAgICAgICAgICAgY3VycmVudFByb2ZpbGUgPSB7Li4udGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkXX1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb2ZpbGVEYXRhOmN1cnJlbnRQcm9maWxlLGlzRG9iVmFsaWRhdGVkOmN1cnJlbnRQcm9maWxlLmRvYj90cnVlOmZhbHNlLHdoYXRzYXBwX29wdGluOmN1cnJlbnRQcm9maWxlLndoYXRzYXBwX29wdGlufSkgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cblxuICAgIHRvZ2dsZU9wZW5Dcm9wKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbkNyb3A6ICF0aGlzLnN0YXRlLm9wZW5Dcm9wIH0pXG4gICAgfVxuXG4gICAgbWFuYWdlQWRkcmVzcygpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy91c2VyL2FkZHJlc3MnKVxuICAgIH1cblxuICAgIHRvZ2dsZVdoYXRzYXAoc3RhdHVzLGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoYXRzYXBwX29wdGluOiBzdGF0dXMgfSlcbiAgICB9XG5cbiAgICBnZXRDb21wKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRlciAvPlxuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgc2hvd19kZWZhdWx0X2NoZWNrQm94PSB0cnVlXG4gICAgICAgIGxldCBpc19wcm9maWxlX2VkaXRhYmxlID0gdHJ1ZVxuICAgICAgICBsZXQgZ29sZF91c2VyX3Byb2ZpbGUgPSB7fVxuICAgICAgICBsZXQgZGVmYXVsdF9wcm9maWxlID0ge31cbiAgICAgICAgaWYodGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyl7XG4gICAgICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5tYXAoZnVuY3Rpb24oW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHNob3dfZGVmYXVsdF9jaGVja0JveCAmJiB2YWx1ZS5pc19pbnN1cmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfZGVmYXVsdF9jaGVja0JveCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUuaXNfZGVmYXVsdF91c2VyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRfcHJvZmlsZSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5zdGF0ZS5wcm9maWxlRGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5pZCA9PSBzZWxmLnN0YXRlLnByb2ZpbGVEYXRhLmlkICYmIHZhbHVlLmlzX2luc3VyZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX3Byb2ZpbGVfZWRpdGFibGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5pc192aXBfZ29sZF9tZW1iZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZF91c2VyX3Byb2ZpbGUgPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgICAgIGNhc2UgMDoge1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOic2MHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXNpY0RldGFpbHMgey4uLnRoaXMucHJvcHN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VBZGRyZXNzPXt0aGlzLm1hbmFnZUFkZHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZURhdGE9e3RoaXMuc3RhdGUucHJvZmlsZURhdGF9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9maWxlPXt0aGlzLnVwZGF0ZVByb2ZpbGUuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZWRVcGRhdGU9e3RoaXMucHJvY2VlZFVwZGF0ZS5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXt0aGlzLnN0YXRlLmVycm9yc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZU9wZW5Dcm9wPXt0aGlzLnRvZ2dsZU9wZW5Dcm9wLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X2RlZmF1bHRfY2hlY2tCb3g9e3Nob3dfZGVmYXVsdF9jaGVja0JveH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1haWxFcnJvcj17dGhpcy5zdGF0ZS5pc0VtYWlsRXJyb3J9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJpZnlFbmRvcnNlbWVudEVtYWlsPXt0aGlzLnZlcmlmeUVuZG9yc2VtZW50RW1haWwuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfcHJvZmlsZV9lZGl0YWJsZT17aXNfcHJvZmlsZV9lZGl0YWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZG9iX2Vycm9yID0ge3RoaXMuc3RhdGUuaXNfZG9iX2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb2xkX3VzZXJfcHJvZmlsZSA9IHtnb2xkX3VzZXJfcHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RvX2dvbGQgPSB7dGhpcy5zdGF0ZS5hZGRfdG9fZ29sZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9Hb2xkID0ge3RoaXMuYWRkVG9Hb2xkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRfcHJvZmlsZSA9IHtkZWZhdWx0X3Byb2ZpbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2hhdHNBcHBPcHRpblZpZXcgey4uLnRoaXMucHJvcHN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVXaGF0c2FwPXt0aGlzLnRvZ2dsZVdoYXRzYXAuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzPXt0aGlzLnN0YXRlLnByb2ZpbGVEYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNZWRpYWxEZXRhaWxzIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRUb0dvbGQodmFsdWUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHthZGRfdG9fZ29sZDp2YWx1ZX0pXG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZmlsZShrZXksIHZhbHVlLGlzRG9iVmFsaWRhdGVkKSB7XG4gICAgICAgIHRoaXMuc3RhdGUucHJvZmlsZURhdGFba2V5XSA9IHZhbHVlXG4gICAgICAgIGlmKGtleSA9PSAnZG9iJyl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0RvYlZhbGlkYXRlZDppc0RvYlZhbGlkYXRlZH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVEYXRhOiB0aGlzLnN0YXRlLnByb2ZpbGVEYXRhfSlcbiAgICB9XG5cbiAgICB2ZXJpZnlFbmRvcnNlbWVudEVtYWlsKG5ld2VtYWlsLHZlcmlmaWVkLGlzX2VtYWlsX2NoYW5nZWQpeyAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUucHJvZmlsZURhdGFbJ2VtYWlsJ10gPSBuZXdlbWFpbFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZmlsZURhdGE6IHRoaXMuc3RhdGUucHJvZmlsZURhdGEgfSlcbiAgICAgICAgaWYodmVyaWZpZWQpe1xuICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0VtYWlsVXBkYXRlZDp2ZXJpZmllZCxpc0VtYWlsVmVyaWZpZWQ6aXNfZW1haWxfY2hhbmdlZH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNFbWFpbFVwZGF0ZWQ6dmVyaWZpZWQsaXNFbWFpbFZlcmlmaWVkOmlzX2VtYWlsX2NoYW5nZWR9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2VlZFVwZGF0ZShlKSB7IC8vIHVwZGF0ZSBwcm9maWxlXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgbGV0IGVycm9ycyA9IHt9XG4gICAgICAgIGxldCB2YWxzID0gWydlbWFpbCcsICdwaG9uZV9udW1iZXInLCdkb2InXVxuICAgICAgICB2YWxzLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnByb2ZpbGVEYXRhLmRvYiA9PSBudWxsICYmICF0aGlzLnN0YXRlLmlzRG9iVmFsaWRhdGVkKXtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgZXJyb3JzWydkb2InXSA9ICF2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicGhvbmVfbnVtYmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnByb2ZpbGVEYXRhW2ZpZWxkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzW2ZpZWxkXSA9ICF2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gdGhpcy5zdGF0ZS5wcm9maWxlRGF0YVtmaWVsZF0udG9TdHJpbmcoKS5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzW2ZpZWxkXSA9ICF2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiZW1haWxcIjoge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIXRoaXMuc3RhdGUucHJvZmlsZURhdGFbZmllbGRdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YWxpZGF0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZXJyb3JzW2ZpZWxkXSA9ICF2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFsaWRhdGVkID0gdGhpcy5zdGF0ZS5wcm9maWxlRGF0YVtmaWVsZF0ubWF0Y2goL1xcUytAXFxTK1xcLlxcUysvKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZXJyb3JzW2ZpZWxkXSA9ICF2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzW2ZpZWxkXSA9ICF2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsaWRhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc3RhdGUuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXJyb3JzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZS5pc0VtYWlsVXBkYXRlZCAmJiB0aGlzLnN0YXRlLmlzRW1haWxWZXJpZmllZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNFbWFpbEVycm9yOnRydWV9KVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZS5pc0RvYlZhbGlkYXRlZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfZG9iX2Vycm9yOnRydWV9KVxuICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZS5wcm9maWxlRGF0YS5nZW5kZXIpe1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogJ1BsZWFzZSBzZWxlY3QgZ2VuZGVyJyB9KVxuICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnByb2ZpbGVEYXRhLndoYXRzYXBwX29wdGluID0gdGhpcy5zdGF0ZS53aGF0c2FwcF9vcHRpbiA9PSBudWxsID90cnVlOiB0aGlzLnN0YXRlLndoYXRzYXBwX29wdGluXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9maWxlRGF0YS5hZGRfdG9fZ29sZCA9IHRoaXMuc3RhdGUuYWRkX3RvX2dvbGRcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmVkaXRVc2VyUHJvZmlsZSh0aGlzLnN0YXRlLnByb2ZpbGVEYXRhLCB0aGlzLnN0YXRlLnByb2ZpbGVEYXRhLmlkLCAoZXJyLCBkYXRhKSA9PiB7IC8vIHVwZGF0ZSBwcm9maWxlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXJyLm1lc3NhZ2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IGVyci5tZXNzYWdlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldFZpcERhdGEoKVxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLmZyb21fYm9va2luZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTIpICAgIFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSkgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIDxoZWFkZXIgY2xhc3NOYW1lPVwic2tpbi13aGl0ZSBmaXhlZCBob3Jpem9udGFsIHRvcCBiZHItMSBib3R0b20gbGlnaHQgc3RpY2t5LWhlYWRlclwiIHN0eWxlPXt7IHpJbmRleDogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNtIHRleHQtbWlkZGxlIGJhY2staWNvbi13aGl0ZVwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYmFjay1pY29uLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGUgZnctNzAwIGNhcGl0YWxpemUgdGV4dC1jZW50ZXJcIj5FZGl0IFByb2ZpbGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+ICovfVxuXG4gICAgICAgICAgICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnN1bWVyLXByb2ZpbGUtdXBkYXRlIHN0aWNreS1oZWFkZXItM1wiIHN0eWxlPXt7IHpJbmRleDogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3QgdGFiLWl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDAsIG1hcmdpblJpZ2h0OiAwIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVGFiOiAwIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlbGVjdGVkVGFiID09PSAwID8gXCJhY3RpdmVcIiA6IFwiXCJ9PjxhIGNsYXNzTmFtZT1cImxpbmstdGV4dCB0ZXh0LXhzIHVwcGVyY2FzZVwiPkJhc2ljIFByb2ZpbGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3ttYXJnaW5MZWZ0OiAwLCBtYXJnaW5SaWdodDogMH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVGFiOiAxIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNlbGVjdGVkVGFiID09PSAxID8gXCJhY3RpdmVcIiA6IFwiXCJ9PjxhIGNsYXNzTmFtZT1cImxpbmstdGV4dCB0ZXh0LXhzIHVwcGVyY2FzZVwiPk1lZGljYWw8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gKi99XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZXRDb21wKCl9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlbkNyb3AgPyBcIlwiIDogPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb2NlZWRVcGRhdGUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiZml4ZWQgcC0zIGhvcml6b250YWwgYm90dG9tIHYtYnRuIHYtYnRuLXByaW1hcnkgbm8tcm91bmQgYnRuLWxnIHRleHQtY2VudGVyIHN0YXRpYy1idG5cIj57YCR7dGhpcy5zdGF0ZS5mcm9tX2Jvb2tpbmc/J0NvbnRpbnVlIEJvb2tpbmcnOidVcGRhdGUgUHJvZmlsZSd9YH08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvZmlsZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDcm9wcGVyIGZyb20gJ3JlYWN0LWNyb3BwZXInO1xuY29uc3QgQ29tcHJlc3MgPSByZXF1aXJlKCdjb21wcmVzcy5qcycpXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vTG9hZGVyJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3JjLWNhbGVuZGFyJztcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuaW1wb3J0IFZlcmlmeUVtYWlsIGZyb20gJy4uLy4uLy4uL2luc3VyYW5jZS92ZXJpZnlFbWFpbC5qcydcbmltcG9ydCBOZXdEYXRlU2VsZWN0b3IgZnJvbSAnLi4vLi4vbmV3RGF0ZVNlbGVjdG9yLmpzJ1xuXG5jbGFzcyBCYXNpY0RldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YVVybDogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTonJyxcbiAgICAgICAgICAgIGlzX2RlZmF1bHRfdXNlcjogdGhpcy5wcm9wcy5wcm9maWxlRGF0YS5pc19kZWZhdWx0X3VzZXJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShrZXksIGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVQcm9maWxlKGtleSwgZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgaGFuZGxlR2VuZGVyKHZhbCl7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlUHJvZmlsZSgnZ2VuZGVyJyx2YWwpXG4gICAgfVxuXG4gICAgcGlja0ZpbGUoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXByZXNzID0gbmV3IENvbXByZXNzKClcbiAgICAgICAgICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgICAgIGNvbXByZXNzLmNvbXByZXNzKFtmaWxlXSwge1xuICAgICAgICAgICAgICAgIHF1YWxpdHk6IDEsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMDAsXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAxMDAwLFxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltZzEgPSByZXN1bHRzWzBdXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0c3RyID0gaW1nMS5kYXRhXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nRXh0ID0gaW1nMS5leHRcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gQ29tcHJlc3MuY29udmVydEJhc2U2NFRvRmlsZShiYXNlNjRzdHIsIGltZ0V4dClcbiAgICAgICAgICAgICAgICB0aGlzLmdldEJhc2U2NChmaWxlLCAoZGF0YVVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZU9wZW5Dcm9wKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFVcmwgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiRXJyb3IgdXBsb2FkaW5nIGltYWdlLlwiIH0pO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QmFzZTY0KGZpbGUsIGNiKSB7XG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYihyZWFkZXIucmVzdWx0KVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluaXNoQ3JvcChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxldCBmaWxlX2Jsb2JfZGF0YSA9IHRoaXMuZGF0YVVSSXRvQmxvYih0aGlzLnJlZnMuY3JvcHBlci5nZXRDcm9wcGVkQ2FudmFzKCkudG9EYXRhVVJMKCkpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGF0YVVybDogbnVsbCxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPcGVuQ3JvcCgpXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyJykudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICBsZXQgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoXCJwcm9maWxlX2ltYWdlXCIsIGZpbGVfYmxvYl9kYXRhLCBcImltYWdlRmlsZW5hbWUuanBlZ1wiKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5lZGl0VXNlclByb2ZpbGVJbWFnZShmb3JtX2RhdGEsIHRoaXMucHJvcHMucHJvZmlsZURhdGEuaWQsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRhdGFVUkl0b0Jsb2IoZGF0YVVSSSkge1xuICAgICAgICB2YXIgYmluYXJ5ID0gYXRvYihkYXRhVVJJLnNwbGl0KCcsJylbMV0pO1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaW5hcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goYmluYXJ5LmNoYXJDb2RlQXQoaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXSwgeyB0eXBlOiAnaW1hZ2UvanBlZycgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRW50ZXJQcmVzcyhlKXsgXG4gICAgICAgIGlmKGUua2V5ID09PSAnRW50ZXInKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucHJvY2VlZFVwZGF0ZShlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5DYWxlbmRhcigpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRlTW9kYWw6dHJ1ZX0pXG4gICAgfVxuXG4gICAgc2VsZWN0RGF0ZUZyb21DYWxlbmRhcihkYXRlKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS50b0RhdGUoKVxuICAgICAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUoZGF0ZSlcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1hdHRlZERhdGU6Zm9ybWF0dGVkRGF0ZSwgZGF0ZU1vZGFsOiBmYWxzZX0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVByb2ZpbGUoJ2RvYicsIGZvcm1hdHRlZERhdGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0ZU1vZGFsOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKXtcbiAgICAgICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtbSA9IGRhdGUuZ2V0TW9udGgoKSsxOyBcbiAgICAgICAgdmFyIHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlmKGRkPDEwKXtcbiAgICAgICAgICAgIGRkPScwJytkZDtcbiAgICAgICAgfVxuICAgICAgICBpZihtbTwxMCl7XG4gICAgICAgICAgICBtbT0nMCcrbW07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvZGF5ID0geXl5eSsnLScrbW0rJy0nK2RkO1xuICAgICAgICByZXR1cm4gdG9kYXlcbiAgICB9XG5cbiAgICBoYW5kbGVEZWZhdWx0VXNlcih2YWx1ZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeydpc19kZWZhdWx0X3VzZXInOnZhbHVlfSlcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVQcm9maWxlKCdpc19kZWZhdWx0X3VzZXInLCB2YWx1ZSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IG5hbWUsIGVtYWlsLCBnZW5kZXIsIHBob25lX251bWJlciwgcHJvZmlsZV9pbWFnZSwgaWQsIGRvYn0gPSB0aGlzLnByb3BzLnByb2ZpbGVEYXRhXG4gICAgICAgIHByb2ZpbGVfaW1hZ2UgPSBwcm9maWxlX2ltYWdlIHx8IChBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdXNlci5wbmdcIilcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YG15UHJvZmlsZSBwcm9maWxlLWRldGFpbHMgbXJiLTE1ICR7dGhpcy5wcm9wcy5pc19wcm9maWxlX2VkaXRhYmxlPycnOidjbGljay1kaXNhYmxlJ31gfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA/IFwiXCIgOiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBuby1zaGFkb3cgbm8tcmFkaXVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2ZpbGVfaW1hZ2V9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGN1cnNvcjogJ3BvaW50ZXInIH19IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcm91bmRcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyJykuY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcicpLnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYW0taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jYW0tbWQucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZCBjYW0taWNvbi1pbWdcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcicpLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyJykudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IGlkPVwiaW1hZ2VGaWxlUGlja2VyXCIgb25DaGFuZ2U9e3RoaXMucGlja0ZpbGUuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGVyIC8+IDogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbm8tc2hhZG93IG5vLXJhZGl1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImdvLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7Z2VuZGVyID09ICdtJz8nYnRuLWFjdGl2ZSc6Jyd9YH0gbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e2dlbmRlciA9PSAnbSd9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlR2VuZGVyLmJpbmQodGhpcyxcIm1cIil9Pk1hbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BsYWJlbC1uYW1lcy1idXR0b25zICR7Z2VuZGVyID09ICdmJz8nYnRuLWFjdGl2ZSc6Jyd9YH0gbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e2dlbmRlciA9PSAnZid9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlR2VuZGVyLmJpbmQodGhpcywnZicpfT5GZW1hbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnbmFtZScpfSBpZD1cImZuYW1lXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXRcIiBuYW1lPVwiZm5hbWVcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlRW50ZXJQcmVzcy5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmbmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRvYlwiIG5hbWU9XCJkb2JcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1hdHRlZERhdGUgPT0gJyc/ZG9iOnRoaXMuc3RhdGUuZm9ybWF0dGVkRGF0ZX0gb25DbGljaz17dGhpcy5vcGVuQ2FsZW5kYXIuYmluZCh0aGlzKX0gcmVxdWlyZWQgcmVmPVwiZG9iXCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVFbnRlclByZXNzLmJpbmQodGhpcyl9IG9uRm9jdXM9e3RoaXMub3BlbkNhbGVuZGFyLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZG9iXCI+RGF0ZSBvZiBCaXJ0aDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGVNb2RhbCA/IDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItb3ZlcmxheVwiPjxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXI9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21vbWVudChkb2IgPT0gbnVsbD9uZXcgRGF0ZSgpOmRvYil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZT17KGRhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmRpZmYobW9tZW50KChuZXcgRGF0ZSkpLCAnZGF5cycpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvZGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnNlbGVjdERhdGVGcm9tQ2FsZW5kYXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdEYXRlU2VsZWN0b3Igey4uLnRoaXMucHJvcHN9IGdldE5ld0RhdGU9e3RoaXMucHJvcHMudXBkYXRlUHJvZmlsZS5iaW5kKHRoaXMpfSBvbGRfZG9iPXtkb2J9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ25hbWUnKX0gaWQ9XCJhZ2VcIiBuYW1lPVwibG5hbWVcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlXCI+QWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnZW1haWwnKX0gaWQ9XCJlbWFpbFwiIG5hbWU9XCJsbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmVycm9yc1snZW1haWwnXSA/ICdlcnJvckNvbG9yQm9yZGVyJyA6IFwiXCJ9IHJlcXVpcmVkIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlRW50ZXJQcmVzcy5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlZmF1bHRfcHJvZmlsZSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRlZmF1bHRfcHJvZmlsZSkubGVuZ3RoICYmIHRoaXMucHJvcHMuZGVmYXVsdF9wcm9maWxlLmlzX2RlZmF1bHRfdXNlciAmJiB0aGlzLnByb3BzLmRlZmF1bHRfcHJvZmlsZS5pZCA9PSB0aGlzLnByb3BzLnByb2ZpbGVEYXRhLmlkP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcmlmeUVtYWlsIHsuLi50aGlzLnByb3BzfSBtZW1iZXJfaWQ9e3RoaXMucHJvcHMucHJvZmlsZURhdGF9IGVtYWlsPXtlbWFpbH0gdmFsaWRhdGVFcnJvcnMgPSB7W119Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlZmF1bHRfcHJvZmlsZSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRlZmF1bHRfcHJvZmlsZSkubGVuZ3RoICYmIHRoaXMucHJvcHMuZGVmYXVsdF9wcm9maWxlLmlzX2RlZmF1bHRfdXNlciAmJiB0aGlzLnByb3BzLmRlZmF1bHRfcHJvZmlsZS5pZCA9PSB0aGlzLnByb3BzLnByb2ZpbGVEYXRhLmlkID88ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwaG9uZV9udW1iZXIgfHwgXCJcIn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ3Bob25lX251bWJlcicpfSBpZD1cIm51bWJlclwiIG5hbWU9XCJsbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmVycm9yc1sncGhvbmVfbnVtYmVyJ10gPyAnZXJyb3JDb2xvckJvcmRlcicgOiBcIlwifSByZXF1aXJlZCBvbktleVByZXNzPXt0aGlzLmhhbmRsZUVudGVyUHJlc3MuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnVtYmVyXCI+TW9iaWxlIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjonJ31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIHN0eWxlPXt7IGNvbG9yOiAnI2Y3ODM2MScgfX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tYW5hZ2VBZGRyZXNzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5NYW5hZ2UgTXkgQWRkcmVzczxzcGFuPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmlnaHQtYXJyb3cuc3ZnXCJ9IGNsYXNzTmFtZT1cImxpc3QtYXJyb3ctcnRcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4LCB3aWR0aDogNyB9fT48L2ltZz48L3NwYW4+PC9hPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ29sZF91c2VyX3Byb2ZpbGUgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5nb2xkX3VzZXJfcHJvZmlsZSkubGVuZ3RoICYmIHRoaXMucHJvcHMuZ29sZF91c2VyX3Byb2ZpbGUudmlwX2RhdGEgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5nb2xkX3VzZXJfcHJvZmlsZS52aXBfZGF0YSkubGVuZ3RoICYmIHRoaXMucHJvcHMuZ29sZF91c2VyX3Byb2ZpbGUudmlwX2RhdGEudG90YWxfbWVtYmVyc19hbGxvd2VkID4gMCAmJiAhdGhpcy5wcm9wcy5wcm9maWxlRGF0YS5pc192aXBfZ29sZF9tZW1iZXIgJiYgdGhpcy5wcm9wcy5nb2xkX3VzZXJfcHJvZmlsZS52aXBfZGF0YS5pc19tZW1iZXJfYWxsb3dlZD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlZmF1bHRQcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieCBhZGQtbWVtYmVyLWNoa2J4XCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRoaXMgbWVtYmVyIHRvIERvY3ByaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtbC0yXCIgd2lkdGg9XCIzNVwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2dvbGQtbGcucG5nXCIgIGFsdD1cImdvbGRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtd2FybmluZy10ZXh0XCI+T25jZSBhZGRlZCB0byBnb2xkLCB5b3UgY2Fubm9udCBlZGl0IG9yIHJlbW92ZSB0aGUgbWVtYmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuYWRkVG9Hb2xkLmJpbmQodGhpcywgIXRoaXMucHJvcHMuYWRkX3RvX2dvbGQpfSBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkX3RvX2dvbGR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd19kZWZhdWx0X2NoZWNrQm94P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVmYXVsdFByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4IGFkZC1tZW1iZXItY2hrYnhcIj5NYWtlIFByaW1hcnkgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVmYXVsdFVzZXIuYmluZCh0aGlzLCAhdGhpcy5zdGF0ZS5pc19kZWZhdWx0X3VzZXIpfSBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNfZGVmYXVsdF91c2VyfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc19wcm9maWxlX2VkaXRhYmxlPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8c3Bhbj4qRGV0YWlscyBvZiB0aGUgcHJvZmlsZXMgd2hpY2ggYXJlIGNvdmVyZWQgdW5kZXIgaW5zdXJhbmNlIGNhbm5vdCBiZSB1cGRhdGVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhVXJsID8gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDcm9wcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPSdjcm9wcGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5kYXRhVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwiaGVpZ2h0XCI6IFwiMTAwJVwiLCBcIndpZHRoXCI6IFwiMTAwJVwiLCBcIm1heFdpZHRoXCI6IFwiNjAwcHhcIiwgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsIFwibGVmdFwiOiBcIjUwJVwiLCBcInRvcFwiOiBcIjUwJVwiLCBcInpJbmRleFwiOiBcIjk5OTk5OVwiLCBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNwZWN0UmF0aW89ezEgLyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3BCb3hSZXNpemFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdNb2RlPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdNb2RlPXsnbW92ZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGVzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHpJbmRleDogOTk5OTk5OSB9fSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuZmluaXNoQ3JvcC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJmaXhlZCBob3Jpem9udGFsIGJvdHRvbSB2LWJ0biB2LWJ0bi1wcmltYXJ5IG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWNlbnRlciB1cGRhdGUtcHJvZmlsZS1pbWctYnRuXCI+VXBkYXRlIFByb2ZpbGUgSW1hZ2U8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljRGV0YWlsc1xuIiwiaW1wb3J0IEVkaXRQcm9maWxlIGZyb20gJy4vRWRpdFByb2ZpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRQcm9maWxlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTWVkaWNhbERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXlQcm9maWxlIHByb2ZpbGUtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiPk1lZGljYWwgSGlzdG9yeTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudCBwZC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGlzZWFzZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UZW51cmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGlhYmV0ZXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdHJhZGlvXCIgLz4gWWVzPC9sYWJlbD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZmMtaW5wdXQgaW5wdXQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yIFllYXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SHlwZXJ0ZW5zaW9uPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJvcHRyYWRpb1wiIC8+IFllczwvbGFiZWw+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZjLWlucHV0IGlucHV0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+MiBZZWFyczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFzdGhtYTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0cmFkaW9cIiAvPiBZZXM8L2xhYmVsPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmYy1pbnB1dCBpbnB1dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjIgWWVhcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5IZWFydDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0cmFkaW9cIiAvPiBZZXM8L2xhYmVsPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmYy1pbnB1dCBpbnB1dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjIgWWVhcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BaWxtZW50PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJvcHRyYWRpb1wiIC8+IFllczwvbGFiZWw+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZjLWlucHV0IGlucHV0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+MiBZZWFyczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFuYWVtaWE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdHJhZGlvXCIgLz4gWWVzPC9sYWJlbD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZmMtaW5wdXQgaW5wdXQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yIFllYXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGVwcmVzc2lvbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0cmFkaW9cIiAvPiBZZXM8L2xhYmVsPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmYy1pbnB1dCBpbnB1dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjIgWWVhcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BbGxlcmdpZXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdHJhZGlvXCIgLz4gWWVzPC9sYWJlbD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZmMtaW5wdXQgaW5wdXQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yIFllYXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1lZGljYWxEZXRhaWxzXG4iLCJpbXBvcnQgVXNlclByb2ZpbGVWaWV3IGZyb20gJy4vVXNlclByb2ZpbGVWaWV3LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRlcm1zQ29uZGl0aW9ucyBmcm9tICcuLi8uLi9jb3Vwb25TZWxlY3Rpb25WaWV3L3Rlcm1zQ29uZGl0aW9ucy5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZydcblxuXG5jbGFzcyBQcm9maWxlRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuVGVybXNDb25kaXRpb25zOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB9XG5cbiAgICBnb3RUbyh3aGVyZSkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3VzZXIvJHt3aGVyZX1gKVxuICAgIH1cblxuICAgIHRvZ2dsZVRhbmRDKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlblRlcm1zQ29uZGl0aW9uczogIXRoaXMuc3RhdGUub3BlblRlcm1zQ29uZGl0aW9ucyB9KTtcbiAgICB9XG5cbiAgICBzZWFyY2hMYWIoY291cG9uKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0Q29ycG9yYXRlQ291cG9uKGNvdXBvbilcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKVxuXG4gICAgICAgIGxldCB0ZXN0X2lkcyA9IFtdXG4gICAgICAgIGxldCBuZXR3b3JrX2lkID0gXCJcIlxuICAgICAgICBpZiAoY291cG9uICYmIGNvdXBvbi50ZXN0cykge1xuICAgICAgICAgICAgdGVzdF9pZHMgPSBjb3Vwb24udGVzdHNcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291cG9uICYmIGNvdXBvbi5uZXR3b3JrX2lkKSB7XG4gICAgICAgICAgICBuZXR3b3JrX2lkID0gY291cG9uLm5ldHdvcmtfaWRcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvbGFiL3NlYXJjaHJlc3VsdHM/dGVzdF9pZHM9JHt0ZXN0X2lkcy5qb2luKCcsJyl9Jm5ldHdvcmtfaWQ9JHtuZXR3b3JrX2lkfWBcbiAgICB9XG5cbiAgICBpc0RvY0NhcmUoKSB7IC8vIHJlZGlyZWN0IHRvIGNhcmUgcGFnZSBvciB0byBjYXJlIGRhc2hib2FyZFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc1VzZXJDYXJlZCAmJiB0aGlzLnByb3BzLmlzVXNlckNhcmVkLmhhc19hY3RpdmVfcGxhbikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9wcmltZS9zdWNjZXNzP3VzZXJfcGxhbj0nICsgdGhpcy5wcm9wcy5pc1VzZXJDYXJlZC51c2VyX3BsYW5faWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ByaW1lL3BsYW5zJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvVG9JbnN1cmFuY2UoaXNVc2VyTG9naW5JbnN1cmVkKSB7IC8vIHJlZGlyZWN0IHRvIGluc3VyYW5jZSBwbGFuIHBhZ2Ugb3IgdG8gaW5zdXJlZCBkYXNoYm9hcmRcbiAgICAgICAgaWYgKGlzVXNlckxvZ2luSW5zdXJlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1twYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXS5pbnN1cmFuY2Vfc3RhdHVzID09IDEgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbcGFyc2VJbnQodGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlKV0uaW5zdXJhbmNlX3N0YXR1cyA9PSA0IHx8IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1twYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXS5pbnN1cmFuY2Vfc3RhdHVzID09IDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9jZXJ0aWZpY2F0ZScpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS1wbGFucz9zb3VyY2U9cHJvZmlsZS1pbnN1cmFuY2UtY2xpY2tlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdlbmVyYXRlSW5zdXJhbmNlTGVhZCgpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtcGxhbnM/c291cmNlPXByb2ZpbGUtaW5zdXJhbmNlLWNsaWNrZWQnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SW5zdXJhbmNlQnRuVGV4dCgpIHtcbiAgICAgICAgLy8gc2V0IGJ1dHRvbiB0ZXh0IGFzIHBlcnNvbiB1c2VyIHBvbGljeSBzdGF0dXMgYWN0aXZlL2luYWN0aXZlLyBjYW5jZWxsZWRcbiAgICAgICAgbGV0IGlzVXNlckxvZ2luSW5zdXJlZCA9IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiB0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUgJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3BhcnNlSW50KHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSldLmlzX2RlZmF1bHRfdXNlciA/IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1twYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXS5pc19kZWZhdWx0X3VzZXIgOiBmYWxzZVxuICAgICAgICBpZiAoaXNVc2VyTG9naW5JbnN1cmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3BhcnNlSW50KHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSldLmluc3VyYW5jZV9zdGF0dXMgPT0gMSB8fFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1twYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXS5pbnN1cmFuY2Vfc3RhdHVzID09IDQgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbcGFyc2VJbnQodGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlKV0uaW5zdXJhbmNlX3N0YXR1cyA9PSA1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPVwiaW5zLXVzZXJkZXRhaWxzLWFjdGl2ZVwiPkFjdGl2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9XCJpbnMtdXNlcmRldGFpbHMtYnV5XCI+QnV5IE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY3VycmVudFJvb21JZCA9IHRoaXMucHJvcHMuVVNFUi5jdXJyZW50Um9vbUlkXG4gICAgICAgIGxldCBjb3Vwb24gPSBudWxsXG4gICAgICAgIGxldCBtZW1iZXJDbGFzcyA9ICdmbG9hdC1yaWdodCBpbnMtdXNlcmRldGFpbHMtYnV5J1xuICAgICAgICBsZXQgbWVtU3RhdHVzID0gJ05ldydcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXBwbGljYWJsZUNvdXBvbnMgJiYgdGhpcy5wcm9wcy5hcHBsaWNhYmxlQ291cG9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvdXBvbiA9IHRoaXMucHJvcHMuYXBwbGljYWJsZUNvdXBvbnNbMF1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc1VzZXJMb2dpbkluc3VyZWQgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1twYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXS5pc19kZWZhdWx0X3VzZXIgPyB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbcGFyc2VJbnQodGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlKV0uaXNfZGVmYXVsdF91c2VyIDogZmFsc2VcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc1VzZXJDYXJlZCAmJiB0aGlzLnByb3BzLmlzVXNlckNhcmVkLmhhc19hY3RpdmVfcGxhbikge1xuICAgICAgICAgICAgbWVtYmVyQ2xhc3MgPSAnZmxvYXQtcmlnaHQgaW5zLXVzZXJkZXRhaWxzLWFjdGl2ZSdcbiAgICAgICAgICAgIG1lbVN0YXR1cyA9ICdBY3RpdmUnXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfY2FyZSA9IGZhbHNlXG4gICAgICAgIGxldCBjYXJlX3VzZXJfcHJvZmlsZSA9e31cblxuICAgICAgICBsZXQgZGVmYXVsdFByb2ZpbGUgPSB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1twYXJzZUludCh0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGUpXT90aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbcGFyc2VJbnQodGhpcy5wcm9wcy5VU0VSLmRlZmF1bHRQcm9maWxlKV06bnVsbDtcblxuICAgICAgICBpZih0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKS5sZW5ndGgpe1xuICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubWFwKGZ1bmN0aW9uKFtrZXksIHZhbHVlXSkgeyBcbiAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmlzX2NhcmUpe1xuICAgICAgICAgICAgICAgICAgICAgIGNhcmVfdXNlcl9wcm9maWxlID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgaWYoY2FyZV91c2VyX3Byb2ZpbGUgJiYgT2JqZWN0LmtleXMoY2FyZV91c2VyX3Byb2ZpbGUpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgaXNfY2FyZSA9IHRydWVcbiAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbm8tcm91bmQgbm8tc2hhZG93IHNraW4tdHJhbnNwYXJlbnQgcHJvZmlsZS1uYXYgbmV3LXByb2ZpbGUtaGVhZGVyLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkZGluZy1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QgbmF2LWl0ZW1zIGRwLXVzZXItbGlzdCBiZy1sc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS1wcm9maWxlLWl0ZW0gcGFkZGluZy1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c3ItZHRscy1uYW1lIHBkbmctdXNyLWR0bHMtc2xvdHNcIj57YFdlbGNvbWUgdG8gRG9jcHJpbWUke3RoaXMucHJvcHMuVVNFUi51c2VyTmFtZSA/IGAsICR7dGhpcy5wcm9wcy5VU0VSLnVzZXJOYW1lfSEgYCA6ICcnfSBgfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9maWxlICYmIGRlZmF1bHRQcm9maWxlLmlzX3ZpcF9nb2xkX21lbWJlciAmJiBkZWZhdWx0UHJvZmlsZS52aXBfZGF0YT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLXdoaXRlLWJnLWNvbnRhaW5lciBjYXJkLWNvbnRhaW5lciBtLTBcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1hY3RpdmF0ZWQtZGV0YWlscycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1jYXJkLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpcExvZ2lJbWctMiBwZC0xMlwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDcgfX0gc3JjPVwiL2Fzc2V0cy9pbWcvZG9jZ29sZC5wbmdcIiB3aWR0aD1cIjgwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1jYXJkLXVzZXIgdGV4dC1yaWdodCB0ZXh0LXdoaXRlIHBkLTEyXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntkZWZhdWx0UHJvZmlsZS5uYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj4oUHJpbWFyeSk8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyc2hpcC12YWxpZGl0eS1jb2x1bW4gcGQtMTIgdGV4dC1ibGFjayB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RG9jcHJpbWUgR29sZCBNZW1iZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+VmFsaWQgdGlsbCA8c3Ryb25nPntkZWZhdWx0UHJvZmlsZS52aXBfZGF0YS5leHBpcnlfZGF0ZXx8Jyd9IDwvc3Ryb25nPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cInVzci1kdGxzLXN0YXJ0dXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cCBjbGFzc05hbWU9XCJ1c3ItZHRscy1zdHJ0LXR4dCBwZG5nLXVzci1kdGxzLXNsb3RzIGZ3LTUwMFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdmlwbG9nLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPkJlY29tZSBhIERvY3ByaW1lIFZJUCBtZW1iZXIgYW5kIGdldCBiZWxvdyBiZW5lZml0czwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIHBkbmctYnR0bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IG1ibC11c3ItZ3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c3ItZHRscy1mcmVlXCI+RlJFRTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVzci1kdGxzLWFuY2hvclwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDaGF0Tm93UHJvZmlsZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGF0LW5vdy1wcm9maWxlLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC92aXAtY2x1Yi1kZXRhaWxzYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc3UtY2hhdC5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHVzci1mcnN0LWljb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlVubGltaXRlZCBjaGF0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBxdWFsaWZpZWQgZG9jdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgbWJsLXVzci1ncmRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0ZpbmREb2N0b3JzUHJvZmlsZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdmaW5kLWRvY3RvcnMtcHJvZmlsZS1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC92aXAtY2x1Yi1kZXRhaWxzYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1c3ItZHRscy1hbmNob3IgbGZ0LXJndC1icmRyXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Jvb2stZG9jdG9yLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb29rIERvY3RvcnMgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlIDcwJVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgbWJsLXVzci1ncmRcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdCb29rVGVzdHNQcm9maWxlQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Jvb2stdGVzdHMtcHJvZmlsZS1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC92aXAtY2x1Yi1kZXRhaWxzYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1c3ItZHRscy1hbmNob3JcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYmstdHN0LnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb29rIFRlc3RzIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjUlIE9GRlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFByb2ZpbGUgJiYgKGRlZmF1bHRQcm9maWxlLmluc3VyYW5jZV9zdGF0dXM9PTEgfHwgZGVmYXVsdFByb2ZpbGUuaW5zdXJhbmNlX3N0YXR1cz09NCB8fCBkZWZhdWx0UHJvZmlsZS5pbnN1cmFuY2Vfc3RhdHVzPT01IHx8IGRlZmF1bHRQcm9maWxlLmlzX3ZpcF9tZW1iZXIpPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwidXNyLWR0bHMtc3RydC10eHQgcGRuZy11c3ItZHRscy1zbG90cyBcIj48cCBjbGFzc05hbWU9XCJmdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVjb21lIGEgRG9jcHJpbWUgPGltZyBzdHlsZT17eyB3aWR0aDogJzQwcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2dvbGQtc20ucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZCBtci0wXCIgLz4gbWVtYmVyIGFuZCBnZXQgRGlzY291bnRzIGxpa2UgbmV2ZXIgYmVmb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtYmVuaWZpLWNhcmRzLWNvbnQgcGRuZy11c3ItZHRscy1zbG90cyBtYi0zIHByLTBcIiBzdHlsZT17e3BhZGRpbmdMZWZ0OiAnOHB4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iZW5pZmktY2FyZHNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdGaW5kRG9jdG9yc1Byb2ZpbGVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZmluZC1kb2N0b3JzLXByb2ZpbGUtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKCkgLy8gcmVzZXQgZ2xkIG9yIHZpcCBzdG9yZSB0byBkZWZhdWx0IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPXVzZXItcHJvZmlsZS1wYWdlYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dsMS5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FeGNsdXNpdmUgcHJpY2Ugb248YnIgLz48c3Ryb25nPjMwLDAwMDwvc3Ryb25nPiBEb2N0b3JzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iZW5pZmktY2FyZHNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQm9va1Rlc3RzUHJvZmlsZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdib29rLXRlc3RzLXByb2ZpbGUtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKCkgLy8gcmVzZXQgZ2xkIG9yIHZpcCBzdG9yZSB0byBkZWZhdWx0IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPXVzZXItcHJvZmlsZS1wYWdlYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dsMi5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EaXNjb3VudHMgb24gPGJyIC8+PHN0cm9uZz41LDAwMDwvc3Ryb25nPiBMYWJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iZW5pZmktY2FyZHNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2F2ZU1lZGljaW5lc1Byb2ZpbGVDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2F2ZS1tZWRpY2luZXMtcHJvZmlsZS1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKSAvLyByZXNldCBnbGQgb3IgdmlwIHN0b3JlIHRvIGRlZmF1bHQgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9hbGwtbWVkaWNpbmVzYClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL21lZGxpZmUtbWVkLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBTYXZlIDIzJSA8YnIvPiBvbiBtZWRpY2luZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cG9uID8gPGxpIGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbVwiIHN0eWxlPXt7IGN1cnNvcjogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzci1kdGxzLW9mZi1hY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVzci1kdGxzLXN0cnQtdHh0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zdG1wLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPk9GRkVSU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBvbi5pc19jb3Jwb3JhdGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLnNlYXJjaExhYi5iaW5kKHRoaXMsIGNvdXBvbil9IGNsYXNzTmFtZT1cInVzci1kdGxzLXBsYW4tYWN0XCI+QXZhaWwgTm93IDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnMTBweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmd0LWFydy5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZnItaW1nLXR4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtaW1nLWNvbnRcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3ZlY3Rvci1zbWFydC1vYmplY3QucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mci1jb250bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvZnItYmtnXCI+PGIgY2xhc3NOYW1lPVwiZnctNTAwIGRyay1ibGtcIj57Y291cG9uLmhlYWRpbmd9PC9iPiB7Y291cG9uLmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1ydC0xMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzc1NzU3NScgfX0+VXNlIENvdXBvbiA6IDxiIGNsYXNzTmFtZT1cImZ3LTcwMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzAwMDAwMCcgfX0+e2NvdXBvbi5jb2RlfTwvYj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJ0LTIwXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlVGFuZEMoKX0gY2xhc3NOYW1lPVwidGV4dC14cyBmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLWRhcmstLWFsbClgLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5UZXJtcyAmIENvbmRpdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpZXctbW9yZS1jb3Vwb25zXCIgb25DbGljaz17KCkgPT4geyAvLyByZWRpcmVjdCB0byBtb3JlIGF2YWlsYWJsZSBjb3Vwb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9jb3Vwb25zJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5WaWV3IG1vcmUgb2ZmZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8bGkgY2xhc3NOYW1lPVwibXktcHJvZmlsZS1pdGVtXCIgc3R5bGU9e3sgY3Vyc29yOiAnYXV0bycgfX0gb25DbGljaz17KCkgPT4geyAvLyByZWRpcmVjdCB0byByZWZlcnJhbCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9yZWZlcnJhbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzci1kdGxzLW9mZi1hY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXNyLWR0bHMtc3RydC10eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmVmZXIuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+UkVGRVIgJmFtcDsgRUFSTjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mci1pbWctdHh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWltZy1jb250XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zdGVwLTIucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZyLWNvbnRudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib2ZyLWJrZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludml0ZSB5b3VyIGZyaWVuZHMgb24gZG9jcHJpbWUuY29tIGFuZCBlYXJuIDxiIGNsYXNzTmFtZT1cImZ3LTUwMCBkcmstYmxrXCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzhweCcsIG1hcmdpblRvcDogJzRweCcsIG1hcmdpblJpZ2h0OiAnMHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ydXBlZS1pY29uLnN2Z1wifSAvPiAyMDA8L2I+IG9uIGNvbXBsZXRpb24gb2YgdGhlaXIgZmlyc3Qgb3JkZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJ0LTIwXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmdy01MDBcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLWRhcmstLWFsbClgICwgY3Vyc29yOiAncG9pbnRlcicgfX0+S25vdyBtb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4qL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2NvbnN1bHRhbnQuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGFwcC10aXRsZVwiPk9QRCBJbnN1cmFuY2U8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibXktcHJvZmlsZS1pdGVtXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY2hhdGhpc3RvcnknKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCBuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tZXNzYWdlLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5PbmxpbmUgQ29uc3VsdGF0aW9uPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDT05GSUcuRU5BQkxFX0lOU1VSQU5DRSAmJiBpc1VzZXJMb2dpbkluc3VyZWQgJiYgdGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzW3BhcnNlSW50KHRoaXMucHJvcHMuVVNFUi5kZWZhdWx0UHJvZmlsZSldLmluc3VyYW5jZV9zdGF0dXMgPT0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuZ29Ub0luc3VyYW5jZS5iaW5kKHRoaXMsIGlzVXNlckxvZ2luSW5zdXJlZCl9IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbWQgbmF2LWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2lucy5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCI+T1BEIEluc3VyYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRJbnN1cmFuY2VCdG5UZXh0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge0NPTkZJRy5FTkFCTEVfVklQX0NMVUIgJiYgZGVmYXVsdFByb2ZpbGUgJiYgZGVmYXVsdFByb2ZpbGUuaXNfdmlwX21lbWJlciAmJiAhZGVmYXVsdFByb2ZpbGUuaXNfdmlwX2dvbGRfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZGlyZWN0IHRvICB2aXAgcGxhbiBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Byb2ZpbGVNZW51VmlwQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Byb2ZpbGUtbWVudS12aXAtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKCkgLy8gcmVzZXQgZ2xkIG9yIHZpcCBzdG9yZSB0byBkZWZhdWx0IHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWNsdWItZGV0YWlscz9zb3VyY2U9cHJvZmlsZS1tZW51LXZpcC1jbGlja2VkJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3ZpcGxvZy5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCIgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5Eb2NwcmltZSBWaXAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgaW5zLXVzZXJkZXRhaWxzLWJ1eVwiPnttZW1TdGF0dXN9PC9idXR0b24+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtDT05GSUcuRU5BQkxFX1ZJUF9HT0xEID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWRpcmVjdCB0byAgdmlwIGdvbGQgcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUHJvZmlsZU1lbnVHb2xkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Byb2ZpbGUtbWVudS1nb2xkLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKSAvLyByZXNldCBnbGQgb3IgdmlwIHN0b3JlIHRvIGRlZmF1bHQgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9cHJvZmlsZS1tZW51LWdvbGQtY2xpY2tlZCZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwibXktcHJvZmlsZS1pdGVtIGxzdC1zcGNuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCBuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZ29sZC1zbS5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5Eb2NwcmltZSBHb2xkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJ1dHRvbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBpbnMtdXNlcmRldGFpbHMtYnV5XCI+e21lbVN0YXR1c308L2J1dHRvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHJlZGlyZWN0IHRvICBkb2NwcmltZSBjYXJlIHBhZ2UqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19jYXJlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0aGlzLmlzRG9jQ2FyZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJteS1wcm9maWxlLWl0ZW0gbHN0LXNwY25nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wcmltZWNhZS5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5Eb2NwcmltZSBDYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5zLXVzZXJkZXRhaWxzLWFjdGl2ZVwiPkFjdGl2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypQcmVzY3JpcHRpb25zIHBhZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17dGhpcy5nb3RUby5iaW5kKHRoaXMsICdvbmxpbmVQcmVzY3JpcHRpb25zJyl9IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL29ubG5wcmVzLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5NeSBPbmxpbmUgUHJlc2NyaXB0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypBcHBvaW50bWVudHMgcGFnZSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuZ290VG8uYmluZCh0aGlzLCAnYXBwb2ludG1lbnRzJyl9IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Fwb2l0bS5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCI+TXkgQXBwb2ludG1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGJhZGdlIGJhZGdlLXdhcm5pbmdcIj4xPC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21lZGljYWwtaGlzdG9yeS5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCI+TWVkaWNhbCBIaXN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgYmFkZ2UgYmFkZ2Utd2FybmluZ1wiPjI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCBuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9vcGQtdmlzaXQuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGFwcC10aXRsZVwiPlRlc3QgUmVwb3J0IDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGJhZGdlIGJhZGdlLXdhcm5pbmdcIj41PC9zcGFuPjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qdXNlciBmYW1pbHkgc2VjdGlvbiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuZ290VG8uYmluZCh0aGlzLCAnZmFtaWx5Jyl9IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2ZtbHkuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGFwcC10aXRsZVwiPk15IEZhbWlseTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogdXNlciByZXZpZXdzKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9teXJhdGluZ3NgKX0gY2xhc3NOYW1lPVwibXktcHJvZmlsZS1pdGVtIGxzdC1zcGNuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbWQgbmF2LWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmV2aWV3LnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5NeSBSZXZpZXdzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCBuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9vcGQtdmlzaXQuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGFwcC10aXRsZVwiPkxpZmUgU3R5bGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB1c2VyIHdhbGxldCBzZWN0aW9uKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvd2FsbGV0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3JwLWljby5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCI+TXkgV2FsbGV0PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgeyAvKnVzZXIgYWRkcmVzcyBzZWN0aW9uKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9hZGRyZXNzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1kIG5hdi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2FkZG1hbmcucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGFwcC10aXRsZVwiPk1hbmFnZSBBZGRyZXNzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgey8qdXNlciBub3RpZmljYXRpb25zKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbm90aWZpY2F0aW9ucycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJteS1wcm9maWxlLWl0ZW0gbHN0LXNwY25nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCBuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ibC1iZWxsLnBuZ1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5Ob3RpZmljYXRpb25zPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5VU0VSLnVucmVhZF9jb3VudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1jb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXhzXCI+e3RoaXMucHJvcHMuVVNFUi51bnJlYWRfY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICB7Lypsb2dvdXQqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dvdXQoY3VycmVudFJvb21JZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cIm15LXByb2ZpbGUtaXRlbSBsc3Qtc3BjbmcgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZCBuYXYtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9sb2ctb3V0LnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBhcHAtdGl0bGVcIj5Mb2dvdXQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuVGVybXNDb25kaXRpb25zID8gPFRlcm1zQ29uZGl0aW9ucyB0b2dnbGU9eygpID0+IHRoaXMudG9nZ2xlVGFuZEMoKX0gdG5jPXtjb3Vwb24udG5jfSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibG9nb3V0LWRpdiBkLW1kLW5vbmVcIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucHJvcHMubG9nb3V0KGN1cnJlbnRSb29tSWQpIH19PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5Mb2dvdXQ8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVEYXRhXG4iLCJpbXBvcnQgUHJvZmlsZURhdGEgZnJvbSAnLi9Qcm9maWxlRGF0YS5qcydcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZURhdGEiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIFVzZXJBZGRyZXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBpY2s6IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdwaWNrPXRydWUnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIHRoaXMucHJvcHMuZ2V0VXNlckFkZHJlc3MoKVxuICAgIH1cblxuICAgIGFkZEFkZHJlc3MoKSB7IC8vYWRkIG5ldyBhZGRyZXNzXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9hZGRyZXNzL2FkZCcpXG4gICAgfVxuXG4gICAgZWRpdEFkZHJlc3MoaWQpIHsgLy8gZWRpdCBleGlzdGluZyBhZGRyZXNzXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygncGljaz10cnVlJykpIHtcbiAgICAgICAgICAgIC8vIHBpY2sgYWRkcmVzcyBhbmQgZ28gYmFjaywgZWxzZSBnbyBvbiB0byBlZGl0LlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RQaWNrdXBBZGRyZXNzKGlkKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvKC0xKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC91c2VyL2FkZHJlc3MvZWRpdC8ke2lkfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVBZGRyZXNzKGFkZHJlc3NEYXRhLCBlKSB7IC8vIHVwZGF0ZSBjaGFuZ2VzIGluIGFkZHJlc3NcbiAgICAgICAgYWRkcmVzc0RhdGEuaXNfZGVmYXVsdCA9IHRydWVcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVVc2VyQWRkcmVzcyhhZGRyZXNzRGF0YSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyQWRkcmVzcygpXG4gICAgICAgICAgICB0aGlzLmVkaXRBZGRyZXNzKGFkZHJlc3NEYXRhLmlkKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgeyBhZGRyZXNzIH0gPSB0aGlzLnByb3BzLlVTRVJcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwbC0wIHByLTBcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBmYW1pbHktbGlzdCBkcC11c2VyLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKGFkZHJlc3MgJiYgYWRkcmVzcy5sZW5ndGgpID8gYWRkcmVzcy5tYXAoKGN1cnIsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbGcgbWVtYmVyLWljb25cIiBvbkNsaWNrPXt0aGlzLnVwZGF0ZUFkZHJlc3MuYmluZCh0aGlzLCBjdXJyKX0gc3R5bGU9e3sgdG9wOiAnMHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICcxMHB4JywgaGVpZ2h0OiAnMHB4Jywgd2lkdGg6ICcwcHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT17Y3Vyci5pZC50b1N0cmluZygpfSBjaGVja2VkPXtjdXJyLmlzX2RlZmF1bHR9IGNsYXNzTmFtZT1cInVzZXItYWRkcmVzcy1oaWRkZW4tcmFkaW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1hZGRyZXNzLXJhZGlvXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWRldGFpbHMgcGFkZGluZy1sZWZ0YWRqZXN0XCIgb25DbGljaz17dGhpcy51cGRhdGVBZGRyZXNzLmJpbmQodGhpcywgY3Vycil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtc21cIiBzdHlsZT17eyB3aWR0aDogJzgwJScsIHdvcmRXcmFwOiAnYnJlYWstd29yZCcgfX0+e2N1cnIuYWRkcmVzc308L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiIHN0eWxlPXt7IHdpZHRoOiAnODAlJywgd29yZFdyYXA6ICdicmVhay13b3JkJyB9fT57Y3Vyci5sYW5kX21hcmsgIT09IFwiXCI/Y3Vyci5sYW5kX21hcms6Y3Vyci5sb2NhbGl0eX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMudXBkYXRlQWRkcmVzcy5iaW5kKHRoaXMsIGN1cnIpfSBzdHlsZT17eyB0b3A6IDEwIH19IGNsYXNzTmFtZT1cImN0LWltZyBjdC1pbWctc20gYXJyb3ctZm9yd2FyZC1yaWdodFwiPnt0aGlzLnN0YXRlLnBpY2sgPyBcIlBpY2tcIiA6IFwiRWRpdFwifTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHBkLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbm8tYWRkcmVzcy5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbGcgbXJ0LTIwXCI+Tm8gQWRkcmVzcyAhITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17dGhpcy5hZGRBZGRyZXNzLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy01MDBcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgZm9udFNpemU6IDE2IH19ID5BZGQgbmV3IGFkZHJlc3M8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRBZGRyZXNzLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIGFkZC1tb3JlLW1lbWJlcnMtYnRuXCI+KzwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQWRkcmVzc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IHsgX2dldGxvY2F0aW9uRnJvbUxhdExvbmcsIF9nZXRMb2NhdGlvbkZyb21QbGFjZUlkLCBfYXV0b0NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2hlbHBlcnMvbWFwSGVscGVycy5qcydcblxuY2xhc3MgVXNlclNpZ251cFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIGxldCB7IHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUsIGRlZmF1bHRQcm9maWxlIH0gPSB0aGlzLnByb3BzLlVTRVJcbiAgICAgICAgbGV0IGRlZl9wcm9maWxlID0gbnVsbFxuICAgICAgICBpZiAocHJvZmlsZXMgJiYgcHJvZmlsZXNbZGVmYXVsdFByb2ZpbGVdKSB7XG4gICAgICAgICAgICBkZWZfcHJvZmlsZSA9IHByb2ZpbGVzW2RlZmF1bHRQcm9maWxlXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxuXG4gICAgICAgICAgICBsYW5kX21hcms6ICcnLFxuICAgICAgICAgICAgbGFuZG1hcmtfcGxhY2VfaWQ6ICcnLFxuICAgICAgICAgICAgbGFuZG1hcmtfbG9jYXRpb25fbGF0OiAnJyxcbiAgICAgICAgICAgIGxhbmRtYXJrX2xvY2F0aW9uX2xvbmc6ICcnLFxuXG4gICAgICAgICAgICBwaW5jb2RlOiAnJyxcblxuICAgICAgICAgICAgbG9jYWxpdHk6ICcnLFxuICAgICAgICAgICAgbG9jYWxpdHlfcGxhY2VfaWQ6ICcnLFxuICAgICAgICAgICAgbG9jYWxpdHlfbG9jYXRpb25fbGF0OiAnJyxcbiAgICAgICAgICAgIGxvY2FsaXR5X2xvY2F0aW9uX2xvbmc6ICcnLFxuXG4gICAgICAgICAgICB0eXBlOiAnaG9tZScsXG4gICAgICAgICAgICBwaG9uZV9udW1iZXI6IGRlZl9wcm9maWxlID8gZGVmX3Byb2ZpbGUucGhvbmVfbnVtYmVyIDogXCJcIixcbiAgICAgICAgICAgIGVkaXQ6ICEhdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsXG4gICAgICAgICAgICBsYW5kX21hcmtfcmVzdWx0czogW10sXG4gICAgICAgICAgICBsb2NhbGl0eV9yZXN1bHRzOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb24obG9jYXRpb24sIHJlc3VsdEZpZWxkKSB7XG4gICAgICAgIGxldCB0eXBlcyA9IFsnZXN0YWJsaXNobWVudCddXG4gICAgICAgIGlmIChyZXN1bHRGaWVsZCA9PSAnbG9jYWxpdHlfcmVzdWx0cycpIHtcbiAgICAgICAgICAgIHR5cGVzID0gWycocmVnaW9ucyknXVxuICAgICAgICB9XG4gICAgICAgIF9hdXRvQ29tcGxldGVTZXJ2aWNlKGxvY2F0aW9uLCBmdW5jdGlvbiAocmVzdWx0cywgc3RhdHVzKSB7XG4gICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cyB8fCBbXVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtyZXN1bHRGaWVsZF06IHJlc3VsdHMgfSlcbiAgICAgICAgfS5iaW5kKHRoaXMpLCB0eXBlcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWRpdCkge1xuICAgICAgICAgICAgbGV0IGVkaXRTdGF0ZSA9IHt9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5VU0VSLmFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlVTRVIuYWRkcmVzcy5tYXAoKGFkZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkLmlkID09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0U3RhdGUgPSBhZGRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4uZWRpdFN0YXRlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXQpIHtcbiAgICAgICAgICAgIGxldCBlZGl0U3RhdGUgPSB7fVxuICAgICAgICAgICAgaWYgKHByb3BzLlVTRVIuYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHByb3BzLlVTRVIuYWRkcmVzcy5tYXAoKGFkZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkLmlkID09IHByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFN0YXRlID0gYWRkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLmVkaXRTdGF0ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcblxuICAgICAgICAvLyBpZiAoZS50YXJnZXQubmFtZSA9PSAnbGFuZF9tYXJrJykge1xuICAgICAgICAvLyAgICAgLy8gdGhpcy5nZXRMb2NhdGlvbihlLnRhcmdldC52YWx1ZSwgJ2xhbmRfbWFya19yZXN1bHRzJylcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09ICdsb2NhbGl0eScpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oZS50YXJnZXQudmFsdWUsICdsb2NhbGl0eV9yZXN1bHRzJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oKSB7XG4gICAgICAgIC8vIHZhbGlkYXRlXG4gICAgICAgIGxldCBhZGRBZGRyZXNzID0gdHJ1ZVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlZnMpLmZvckVhY2goKHBycCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucmVmc1twcnBdLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicGhvbmVfbnVtYmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVmc1twcnBdLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmc1twcnBdLnN0eWxlLmJvcmRlciA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRoaXMucmVmc1twcnBdLnZhbHVlLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcInBpbmNvZGVcIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0aGlzLnJlZnNbcHJwXS52YWx1ZS5tYXRjaCgvXlsxLTldWzAtOV17NX0kLylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImxvY2FsaXR5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9jYWxpdHkgJiYgdGhpcy5zdGF0ZS5sb2NhbGl0eV9wbGFjZV9pZCAmJiB0aGlzLnJlZnNbcHJwXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzW3BycF0udmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiYWRkcmVzc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucmVmc1twcnBdLnZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhc2UgXCJsYW5kX21hcmtcIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIC8qaWYgKHRoaXMuc3RhdGUubGFuZF9tYXJrICYmIHRoaXMuc3RhdGUubGFuZG1hcmtfcGxhY2VfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmc1twcnBdLnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC8qdGhpcy5yZWZzW3BycF0udmFsdWUgJiYgKi92YWxpZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbcHJwXS5zdHlsZS5ib3JkZXIgPSAnJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbcHJwXS5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCdcbiAgICAgICAgICAgICAgICBhZGRBZGRyZXNzID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoYWRkQWRkcmVzcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZWRpdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlVXNlckFkZHJlc3ModGhpcy5zdGF0ZSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ291bGQgbm90IHVwZGF0ZSBhZGRyZXNzLlwiIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFkZFVzZXJBZGRyZXNzKHRoaXMuc3RhdGUsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RQaWNrdXBBZGRyZXNzKHJlcy5pZClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3QgYWRkIGFkZHJlc3MuXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZ28gYmFja1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdExvY2F0aW9uKGxvY2F0aW9uLCB0eXBlKSB7XG4gICAgICAgIFxuICAgICAgICBfZ2V0TG9jYXRpb25Gcm9tUGxhY2VJZChsb2NhdGlvbi5yZWZlcmVuY2UsIChwbGFjZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGxhY2VfaWQsIGZvcm1hdHRlZF9hZGRyZXNzLCBnZW9tZXRyeSwgbmFtZSB9ID0gcGxhY2VcbiAgICAgICAgICAgIGxldCBsYXQgPSBnZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxldCBsb25nID0gZ2VvbWV0cnkubG9jYXRpb24ubG5nXG5cbiAgICAgICAgICAgIGlmICh0eXBlID09ICdsYW5kX21hcmsnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxhbmRfbWFyazogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGFuZG1hcmtfcGxhY2VfaWQ6IHBsYWNlX2lkLFxuICAgICAgICAgICAgICAgICAgICBsYW5kbWFya19sb2NhdGlvbl9sYXQ6IGxhdCxcbiAgICAgICAgICAgICAgICAgICAgbGFuZG1hcmtfbG9jYXRpb25fbG9uZzogbG9uZyxcbiAgICAgICAgICAgICAgICAgICAgbGFuZF9tYXJrX3Jlc3VsdHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGl0eV9yZXN1bHRzOiBbXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09ICdsb2NhbGl0eScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxpdHk6IGZvcm1hdHRlZF9hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGl0eV9wbGFjZV9pZDogcGxhY2VfaWQsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXR5X2xvY2F0aW9uX2xhdDogbGF0LFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGl0eV9sb2NhdGlvbl9sb25nOiBsb25nLFxuICAgICAgICAgICAgICAgICAgICBsYW5kX21hcmtfcmVzdWx0czogW10sXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXR5X3Jlc3VsdHM6IFtdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSlcbiAgICB9XG5cbiAgICBjbG9zZVJlc3VsdHMoZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sYW5kX21hcmtfcmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYW5kX21hcmtfcmVzdWx0czogW10gfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxvY2FsaXR5X3Jlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9jYWxpdHlfcmVzdWx0czogW10gfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7LyogPGhlYWRlciBjbGFzc05hbWU9XCJza2luLXdoaXRlIGZpeGVkIGhvcml6b250YWwgdG9wIGJkci0xIGJvdHRvbSBsaWdodCBzdGlja3ktaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1zbSB0ZXh0LW1pZGRsZSBiYWNrLWljb24td2hpdGVcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2JhY2staWNvbi5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlIGZ3LTcwMCBjYXBpdGFsaXplIHRleHQtY2VudGVyXCI+e3RoaXMuc3RhdGUuZWRpdCA/IFwiRWRpdFwiIDogXCJBZGRcIn0gQWRkcmVzczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj4gKi99XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ2YWxpZGF0aW9uLWJvb2stc2NyZWVuXCIgb25DbGljaz17dGhpcy5jbG9zZVJlc3VsdHMuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG5vLXJvdW5kIG5vLXNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImdvLWJvdHRvbVwiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm51bWJlclwiIG5hbWU9XCJwaG9uZV9udW1iZXJcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZV9udW1iZXJ9IHJlcXVpcmVkIHJlZj1cInBob25lX251bWJlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm51bWJlclwiPk1vYmlsZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14c1wiPiAod2lsbCBiZSB1c2VkIGF0IHRoZSB0aW1lIG9mIHNhbXBsZSBwaWNrdXApPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxvY2FsaXR5XCIgbmFtZT1cImxvY2FsaXR5XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUubG9jYWxpdHl9IHJlZj1cImxvY2FsaXR5XCIgcmVxdWlyZWQgYXV0b0NvbXBsZXRlPSdudWxsJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb2NhbGl0eVwiPlNlbGVjdCBMb2NhbGl0eTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvY2FsaXR5X3Jlc3VsdHMubGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBkLTAgc2VhcmNobG9jYXRpb25yZXN1bHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0IGNpdHktbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9jYWxpdHlfcmVzdWx0cy5tYXAoKHJlc3VsdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0gb25DbGljaz17dGhpcy5zZWxlY3RMb2NhdGlvbi5iaW5kKHRoaXMsIHJlc3VsdCwgJ2xvY2FsaXR5Jyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Jlc3VsdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaXR5LWxvY1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiYWRkcmVzc1wiIG5hbWU9XCJhZGRyZXNzXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc30gcmVxdWlyZWQgcmVmPVwiYWRkcmVzc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIj5Ib3VzZSBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsYW5kX21hcmtcIiBuYW1lPVwibGFuZF9tYXJrXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUubGFuZF9tYXJrfSByZXF1aXJlZCAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZF9tYXJrXCI+TGFuZCBNYXJrPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGFuZF9tYXJrX3Jlc3VsdHMubGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBkLTAgc2VhcmNobG9jYXRpb25yZXN1bHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0IGNpdHktbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGFuZF9tYXJrX3Jlc3VsdHMubWFwKChyZXN1bHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0TG9jYXRpb24uYmluZCh0aGlzLCByZXN1bHQsICdsYW5kX21hcmsnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57cmVzdWx0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpdHktbG9jXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwaW5jb2RlXCIgbmFtZT1cInBpbmNvZGVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5waW5jb2RlfSByZXF1aXJlZCByZWY9XCJwaW5jb2RlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGluY29kZVwiPlBpbiBDb2RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlubGluZSBpbnB1dC1sYWJlbFwiPlBsYWNlIFR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaG9vc2UtZ2VuZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPjxpbnB1dCB2YWx1ZT17J2hvbWUnfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS50eXBlID09ICdob21lJ30gdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiAvPkhvbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj48aW5wdXQgdmFsdWU9eydvZmZpY2UnfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS50eXBlID09ICdvZmZpY2UnfSB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIC8+T2ZmaWNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+PGlucHV0IHZhbHVlPXsnb3RoZXInfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS50eXBlID09ICdvdGhlcid9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgLz5PdGhlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZWRpdCA/IDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gcC0zIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0YXRpYy1idG5cIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKX0+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCBidG4tbGcgdGV4dC1sZyBzdGF0aWMtYnRuXCIgb25DbGljaz17dGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyl9PkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNpZ251cFZpZXdcbiIsImltcG9ydCBBZGRBZGRyZXNzIGZyb20gJy4vYWRkQWRkcmVzcydcblxuZXhwb3J0IGRlZmF1bHQgQWRkQWRkcmVzcyIsImltcG9ydCBVc2VyQWRkcmVzcyBmcm9tICcuL1VzZXJBZGRyZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyQWRkcmVzcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBcHBvaW50bWVudExpc3QgZnJvbSAnLi9hcHBvaW50bWVudExpc3QvaW5kZXguanMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL0xvYWRlcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0nXG5cbmNsYXNzIFVzZXJBcHBvaW50bWVudHNWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dSZXBvcnRzOiBmYWxzZSxcbiAgICAgICAgICAgIGFwcG9pbnRtZW50UmVwb3J0czogW10sXG4gICAgICAgICAgICBzaG93X3NvcnRlZF9yZXN1bHRzOiBbJ2FsbCddXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRQcm9maWxlQXBwb2ludG1lbnRzKHRoaXMucHJvcHMuVVNFUi5zZWxlY3RlZFByb2ZpbGUpIC8vIGdldCB1c2VyIGFwcG9pbnRtZW50c1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUi5zZWxlY3RlZFByb2ZpbGUgIT0gcHJvcHMuVVNFUi5zZWxlY3RlZFByb2ZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0UHJvZmlsZUFwcG9pbnRtZW50cyhwcm9wcy5VU0VSLnNlbGVjdGVkUHJvZmlsZSkgLy8gZ2V0IHVzZXIgYXBwb2ludG1lbnRzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aWV3UmVwb3J0Q2xpY2socmVwb3J0cykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1JlcG9ydHM6IHRydWUsIGFwcG9pbnRtZW50UmVwb3J0czogcmVwb3J0cyB9KVxuICAgIH1cblxuICAgIGhpZGVSZXBvcnRzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1JlcG9ydHM6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgcmVwb3J0Q2xpY2soc3JjKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHNyYywgJ19ibGFuaycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVTb3J0T3JkZXIoKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfc29ydGVkX3Jlc3VsdHM6ICF0aGlzLnN0YXRlLnNob3dfc29ydGVkX3Jlc3VsdHMgfSlcbiAgICB9XG5cbiAgICBzZWxlY3RPcHRpb25zKHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIGxldCBhcHBvaW50bWVudHMgPSBbXVxuICAgICAgICBpZih2YWx1ZSA9PSAnYWxsJykge1xuICAgICAgICAgICAgYXBwb2ludG1lbnRzLnB1c2goJ2FsbCcpXG4gICAgICAgIH1lbHNlIGlmKHZhbHVlID09ICd1cGNvbWluZycpIHtcbiAgICAgICAgICAgIGFwcG9pbnRtZW50cyA9IFsyLDMsNCw1XVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBhcHBvaW50bWVudHMucHVzaCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQXBwb2ludG1lbnRDaGlwc1NlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdhcHBvaW50bWVudC1jaGlwcy1zZWxlY3RlZCcsICd0eXBlJzogdHlwZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X3NvcnRlZF9yZXN1bHRzOiBhcHBvaW50bWVudHMgfSlcblxuICAgICAgICAvKmxldCBmb3VuZCA9IGZhbHNlXG4gICAgICAgIGxldCBhcHBvaW50bWVudHMgPSBbXVxuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2hvd19zb3J0ZWRfcmVzdWx0cy5sZW5ndGg9PTEgJiYgdGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YodmFsdWUpPi0xKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgbGV0IGlzQWxsRXhpc3QgPSB0aGlzLnN0YXRlLnNob3dfc29ydGVkX3Jlc3VsdHMuaW5kZXhPZignYWxsJylcbiAgICAgICAgICAgIGlmKGlzQWxsRXhpc3Q9PS0xICYmIHZhbHVlPT0nYWxsJyl7XG4gICAgICAgICAgICAgICAgYXBwb2ludG1lbnRzID0gWydhbGwnXVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGFwcG9pbnRtZW50cyA9IHRoaXMuc3RhdGUuc2hvd19zb3J0ZWRfcmVzdWx0cy5maWx0ZXIoKHgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKGlzQWxsRXhpc3QgPi0xICYmIHZhbHVlIT0nYWxsJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZih4PT12YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlPT0nYWxsJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYoIWZvdW5kKXtcbiAgICAgICAgICAgICAgICAgICAgYXBwb2ludG1lbnRzLnB1c2godmFsdWUpXG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfc29ydGVkX3Jlc3VsdHM6IGFwcG9pbnRtZW50cyB9KVxuICAgICAgICB9Ki9cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgeyBhcHBvaW50bWVudHMsIHNlbGVjdGVkUHJvZmlsZSB9ID0gdGhpcy5wcm9wcy5VU0VSXG4gICAgICAgIGxldCBhcHBvaW50bWVudF9saXN0ID0gYXBwb2ludG1lbnRzW3NlbGVjdGVkUHJvZmlsZV0gfHwgW11cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YoJ2FsbCcpPT0tMSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihhcHBvaW50bWVudHNbc2VsZWN0ZWRQcm9maWxlXSAmJiBhcHBvaW50bWVudHNbc2VsZWN0ZWRQcm9maWxlXS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGFwcG9pbnRtZW50X2xpc3QgPSBhcHBvaW50bWVudHNbc2VsZWN0ZWRQcm9maWxlXS5maWx0ZXIoKHgpPT57XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNob3dfc29ydGVkX3Jlc3VsdHMuaW5kZXhPZih4LnN0YXR1cyk+LTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwbC0wIHByLTBcIj5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJhcHQtc29ydGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VmlldyBieTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsgKGUpPT4gdGhpcy5zZWxlY3RPcHRpb25zKCdzaG93X3NvcnRlZF9yZXN1bHRzJywgZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD5BbGwgQXBwb2ludG1lbnRzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkNyZWF0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Qm9va2VkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPlJlc2NoZWR1bGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPkFjY2VwdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPkNhbmNlbGxlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj5Db21wbGV0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1maWx0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmtuLWNoaXBzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLnNob3dfc29ydGVkX3Jlc3VsdHMuaW5kZXhPZignYWxsJyk+LTE/J2Jrc2VsZWN0JzonJ31gfSBvbkNsaWNrPXsoKT0+dGhpcy5zZWxlY3RPcHRpb25zKCdhbGwnLCAnYWxsJyl9PkFsbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YoMik+LTEgfHwgdGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YoMyk+LTEgfHwgdGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YoNCk+LTEgfHwgdGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YoNSk+LTE/J2Jrc2VsZWN0JzonJ31gfSBvbkNsaWNrPXsoKT0+dGhpcy5zZWxlY3RPcHRpb25zKCd1cGNvbWluZycsICd1cGNvbWluZycpfT5VcGNvbWluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzLmluZGV4T2YoNyk+LTE/J2Jrc2VsZWN0JzonJ31gfSBvbkNsaWNrPXsoKT0+dGhpcy5zZWxlY3RPcHRpb25zKDcsICdDb21wbGV0ZWQnKX0+Q29tcGxldGVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLnNob3dfc29ydGVkX3Jlc3VsdHMuaW5kZXhPZig2KT4tMT8nYmtzZWxlY3QnOicnfWB9IG9uQ2xpY2s9eygpPT50aGlzLnNlbGVjdE9wdGlvbnMoNiwgJ0NhbmNlbGxlZCcpfT5DYW5jZWxsZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRnLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Tb3J0IGJ5IEFwcG9pbnRtZW50IFN0YXR1czwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRnbCB0Z2wtaW9zXCIgaWQ9XCJsYWJfaW5zdXJhbmNlXCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5zaG93X3NvcnRlZF9yZXN1bHRzfSBvbkNoYW5nZT17dGhpcy50b2dnbGVTb3J0T3JkZXIuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRnbC1idG5cIiBodG1sRm9yPVwibGFiX2luc3VyYW5jZVwiPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwb2ludG1lbnRfbGlzdCA/IDx1bCBjbGFzc05hbWU9XCJsaXN0IG9ubGluZS1jb25zdWx0YW50LWxpc3QgZHAtdXNlci1saXN0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNSwgbWFyZ2luQm90dG9tOiA3MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYXBwb2ludG1lbnRfbGlzdCAmJiBhcHBvaW50bWVudF9saXN0Lmxlbmd0aCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBvaW50bWVudF9saXN0Lm1hcCgoYXBwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKChhcHAudHlwZSA9PSAnbGFiJyAmJiBhcHAubGFiKSB8fCBhcHAudHlwZSA9PSAnZG9jdG9yJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBvaW50bWVudExpc3Qga2V5PXtpfSB7Li4udGhpcy5wcm9wc30gZGF0YT17YXBwfSB2aWV3UmVwb3J0Q2xpY2s9e3RoaXMudmlld1JlcG9ydENsaWNrLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbm8tYXBwb2ludG1lbnQucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1sZyBtcnQtMjBcIj5ObyBBcHBvaW50bWVudHMgISE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPiA6IDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dSZXBvcnRzICYmIHRoaXMuc3RhdGUuYXBwb2ludG1lbnRSZXBvcnRzICYmIHRoaXMuc3RhdGUuYXBwb2ludG1lbnRSZXBvcnRzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwIGlwZC1wb3Atd2lkdGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgcC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXBkLXBvcC1jbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9pY29ucy9jbG9zZS5wbmdcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhpZGVSZXBvcnRzKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlwZC1uZWVkSGVscCBtYi0yMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNiB9fT5WaWV3IFJlcG9ydDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXBwb2ludG1lbnRSZXBvcnRzLm1hcCgocmVwb3J0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBjdXJzb3ItcG50ciBtYi0xMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVwb3J0Q2xpY2socmVwb3J0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMzIsIG1hcmdpblJpZ2h0OiAxNiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3BkZi1pY29uLnBuZyd9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNiB9fT57YFJlcG9ydCAke2luZGV4ICsgMX1gfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAyNCwgbWFyZ2luTGVmdDogMTYgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kb3dubG9hZC1pY29uLnN2Zyd9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJBcHBvaW50bWVudHNWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi8uLi9pbml0aWFsc1BpY3R1cmUnXG5cbmNvbnN0IFNUQVRVU19NQVAgPSB7XG4gICAgQ1JFQVRFRDogMSxcbiAgICBCT09LRUQ6IDIsXG4gICAgUkVTQ0hFRFVMRURfRE9DVE9SOiAzLFxuICAgIFJFU0NIRURVTEVEX1BBVElFTlQ6IDQsXG4gICAgQUNDRVBURUQ6IDUsXG4gICAgQ0FOQ0VMRUQ6IDYsXG4gICAgQ09NUExFVEVEOiA3LFxufVxuXG5jbGFzcyBBcHBvaW50bWVudExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIGdldFRpbWUodW5peF90aW1lc3RhbXApIHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh1bml4X3RpbWVzdGFtcClcbiAgICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICB2YXIgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICB2YXIgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG4gICAgICAgIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgICAgICAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuICAgICAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgICAgIHZhciBzdHJUaW1lID0gaG91cnMgKyAnOicgKyBtaW51dGVzICsgJyAnICsgYW1wbTtcbiAgICAgICAgcmV0dXJuIHN0clRpbWU7XG4gICAgfVxuXG4gICAgb3BlbkFwcG9pbnRtZW50KHR5cGUsIGlkKSB7XG4gICAgICAgIGlmICh0eXBlID09ICdkb2N0b3InKSB0eXBlID0gJ29wZCc7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt0eXBlfS9hcHBvaW50bWVudC8ke2lkfWApXG4gICAgfVxuXG4gICAgdmlld1JlcG9ydHModHlwZSwgaWQsIGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBpZiAodHlwZSA9PSAnZG9jdG9yJykgdHlwZSA9ICdvcGQnO1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3VzZXIvJHt0eXBlfS9yZXBvcnRzLyR7aWR9YClcbiAgICB9XG5cbiAgICBnZXRTdGF0dXMoc3RhdHVzKSB7XG4gICAgICAgIHN0YXR1cyA9IHBhcnNlSW50KHN0YXR1cylcbiAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJhcHBvaW50bWVudC1zdGF0dXNcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0+Q3JlYXRlZDwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJhcHBvaW50bWVudC1zdGF0dXNcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0+Qm9va2VkPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LXN0YXR1c1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fT5SZXNjaGVkdWxlZDwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNDoge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJhcHBvaW50bWVudC1zdGF0dXNcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0+UmVzY2hlZHVsZWQ8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDU6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtc3RhdHVzXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19PkFjY2VwdGVkPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA2OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LXN0YXR1c1wiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5DYW5jZWxsZWQ8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtc3RhdHVzXCIgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+Q29tcGxldGVkPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJhcHBvaW50bWVudC1zdGF0dXNcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0+VXBjb21pbmc8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZvaWNlQ2xpY2soaW52b2ljZUxpbmspIHtcbiAgICAgICAgdmFyIHdpbiA9IHdpbmRvdy5vcGVuKGludm9pY2VMaW5rLCAnX2JsYW5rJyk7XG4gICAgICAgIHdpbi5mb2N1cygpO1xuICAgIH1cblxuICAgIHJlcG9ydENsaWNrKHJlcG9ydHMpIHtcbiAgICAgICAgaWYgKHJlcG9ydHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihyZXBvcnRzWzBdLCAnX2JsYW5rJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudmlld1JlcG9ydENsaWNrKHJlcG9ydHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7IGRlYWxfcHJpY2UsIGRvY3Rvcl9uYW1lLCBkaXNwbGF5X25hbWUsIHRpbWVfc2xvdF9lbmQsIHRpbWVfc2xvdF9zdGFydCwgc3RhdHVzLCB0eXBlLCBpZCwgbGFiX25hbWUsIGxhYl90ZXN0X25hbWUsIGRvY3Rvcl90aHVtYm5haWwsIGxhYl90aHVtYm5haWwsIHBhdGllbnRfbmFtZSwgaW52b2ljZXMsIGhvc3BpdGFsX25hbWUsIHNwZWNpYWxpemF0aW9uLCB2aXAsIHBheW1lbnRfbW9kZSwgZGlzY291bnQgfSA9IHRoaXMucHJvcHMuZGF0YVxuXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZV9zbG90X3N0YXJ0KVxuICAgICAgICBsZXQgaXNfdmlwX2FwcGxpY2FibGUgPSB2aXAuaXNfdmlwX21lbWJlciAmJiB2aXAuY292ZXJlZF91bmRlcl92aXBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgcGFkZGluZ1RvcDogMzIsIGN1cnNvcjogJ3Vuc2V0JyB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGNvbnN1bHRhbnQtZHBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXsoZG9jdG9yX25hbWUgfHwgbGFiX25hbWUpfSBoYXNfaW1hZ2U9eyEhKGRvY3Rvcl90aHVtYm5haWwgfHwgbGFiX3RodW1ibmFpbCl9IGNsYXNzTmFtZT17bGFiX25hbWUgPyAnaW5pdGlhbHNQaWN0dXJlLWxzJzogJ2luaXRpYWxzUGljdHVyZS1hcHBvaW50bWVudCd9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RvY3Rvcl90aHVtYm5haWx9IGNsYXNzTmFtZT17ZG9jdG9yX3RodW1ibmFpbCA/ICdpbWctZmx1aWQgaW1nLXJvdW5kIG15LWFwcG9udC1pbWcnOiAnZC1ub25lJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsYWJfdGh1bWJuYWlsfSBjbGFzc05hbWU9e2xhYl90aHVtYm5haWwgPyAnZmx0ci11c3ItaW1hZ2UtbGFiJzogJ2Qtbm9uZSd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlID09ICdkb2N0b3InID8gPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zdGV0aG9zY29wZS5zdmdcIn0gY2xhc3NOYW1lPVwiYXBwb2ludG1lbnQtaWNvblwiIC8+IDogPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9iZWFrZXIuc3ZnXCJ9IGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWljb25cIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VsdGFudC1kZXRhaWxzXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17dGhpcy5vcGVuQXBwb2ludG1lbnQuYmluZCh0aGlzLCB0eXBlLCBpZCl9PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlIHZpcC1pY28taGRuZ1wiPntkaXNwbGF5X25hbWUgfHwgbGFiX25hbWV9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX3ZpcF9hcHBsaWNhYmxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb24gJiYgc3BlY2lhbGl6YXRpb24ubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LXNwZWNpYWxpemF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb24ubWFwKChzcGVjaWFsaXR5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiYXBudC1oc3AtbmFtZVwiIGtleT17aW5kZXh9PntzcGVjaWFsaXR5fSB7KGluZGV4IDwgc3BlY2lhbGl6YXRpb24ubGVuZ3RoIC0gMSkgJiYgKGluZGV4ICE9IDIpID8gJ3wgJyA6ICcnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbF9uYW1lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNCB9fSBjbGFzc05hbWU9XCJhcG50LWhzcC1uYW1lXCI+e2hvc3BpdGFsX25hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYl90ZXN0X25hbWUgJiYgbGFiX3Rlc3RfbmFtZS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0IH19IGNsYXNzTmFtZT1cImFwbnQtaHNwLW5hbWVcIj57bGFiX3Rlc3RfbmFtZVswXS50ZXN0X25hbWV9IHtsYWJfdGVzdF9uYW1lLmxlbmd0aCA+IDEgPyBgJiAke2xhYl90ZXN0X25hbWUubGVuZ3RoIC0gMX0gbW9yZWAgOiAnJ308L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA1IH19ID48c3BhbiBjbGFzc05hbWU9XCJjdC1pbWcgY3QtaW1nLXhzIHRleHQtcmlnaHRcIj48aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbmV3LWNhbC5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+e2RhdGUudG9EYXRlU3RyaW5nKCl9IHwgPHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy14cyB0ZXh0LXJpZ2h0XCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzE1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9zcGFuPnt0aGlzLmdldFRpbWUodGltZV9zbG90X3N0YXJ0KX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDUgfX0gPjwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNSB9fSA+PHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy14cyB0ZXh0LXJpZ2h0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHN0eWxlPXt7IHdpZHRoOiAxNSwgbWFyZ2luVG9wOiAtNCB9fSAvPjwvc3Bhbj57cGF0aWVudF9uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInZpZXctY2hhdCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhdHVzID09IDcgJiYgdHlwZSA9PSAnZG9jdG9yJykgPyA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudmlld1JlcG9ydHMuYmluZCh0aGlzLCB0eXBlLCBpZCl9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnlcIj5WaWV3IFByZXNjcmlwdGlvbjwvYnV0dG9uPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0dXMgPT0gNyAmJiB0eXBlID09ICdsYWInKSA/IDxidXR0b24gb25DbGljaz17dGhpcy52aWV3UmVwb3J0cy5iaW5kKHRoaXMsIHR5cGUsIGlkKX0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeVwiPlZpZXcgUmVwb3J0PC9idXR0b24+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1jdXN0b20tcmlnaHRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLm9wZW5BcHBvaW50bWVudC5iaW5kKHRoaXMsIHR5cGUsIGlkKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9hcnJvdy1mb3J3YXJkLXJpZ2h0LnN2Z1wifSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZXRTdGF0dXMoc3RhdHVzKX1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDQsIGxlZnQ6IDgsIGZvbnRTaXplOiAxMiB9fT57YEJvb2tpbmcgaWQgOiAke2lkfWB9PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZSAmJiAhaXNfdmlwX2FwcGxpY2FibGU/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAyMCwgcmlnaHQ6IDgsIGZvbnRTaXplOiAxMiwgY29sb3I6ICcjZjc4NjMxJyB9fT4mIzgzNzc7IHtwYXJzZUludChkZWFsX3ByaWNlKS0gKGRpc2NvdW50P3BhcnNlSW50KGRpc2NvdW50KTowKX08L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlcyAmJiBpbnZvaWNlcy5sZW5ndGggPT09IDEgJiYgKCF0aGlzLnByb3BzLmRhdGEucmVwb3J0cyB8fCAhdGhpcy5wcm9wcy5kYXRhLnJlcG9ydHMubGVuZ3RoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ydC0yMFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDMwcHgnIH19IG9uQ2xpY2s9eygpID0+IHRoaXMuaW52b2ljZUNsaWNrKGludm9pY2VzWzBdKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZvaWNlLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvaW52b2ljZS5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTUwMFwiPkRvd25sb2FkIFBheW1lbnQgUmVjZWlwdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGludm9pY2VzICYmIGludm9pY2VzLmxlbmd0aCAmJiB0aGlzLnByb3BzLmRhdGEucmVwb3J0cyAmJiB0aGlzLnByb3BzLmRhdGEucmVwb3J0cy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMjAgbXVsdGlwbGUtaW52b2ljZS1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11bHRpcGxlLWludm9pY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZvaWNlLWRpdlwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaW52b2ljZUNsaWNrKGludm9pY2VzWzBdKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvaW52b2ljZS5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNTAwXCI+RG93bmxvYWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTUwMFwiPlBheW1lbnQgUmVjZWlwdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZvaWNlLWRpdlwiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVwb3J0Q2xpY2sodGhpcy5wcm9wcy5kYXRhLnJlcG9ydHMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yZXBvcnQuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTUwMFwiPlZpZXc8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTUwMFwiPlJlcG9ydDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICBwYXltZW50X21vZGUgJiYgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyIGpjLXNwYWNlYiBzaG9wcGluZy1jYXJkLWRldGFpbHMtbGlzdCBmdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBheW1lbnQgbW9kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwYXltZW50X21vZGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBvaW50bWVudExpc3QiLCJpbXBvcnQgQXBwb2ludG1lbnRMaXN0IGZyb20gJy4vQXBwb2ludG1lbnRMaXN0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBBcHBvaW50bWVudExpc3QiLCJpbXBvcnQgVXNlckFwcG9pbnRtZW50c1ZpZXcgZnJvbSAnLi9Vc2VyQXBwb2ludG1lbnRzVmlldy5qcydcblxuZXhwb3J0IGRlZmF1bHQgVXNlckFwcG9pbnRtZW50c1ZpZXciLCJpbXBvcnQgdXNlckNvdXBvbnMgZnJvbSAnLi91c2VyQ291cG9ucydcblxuZXhwb3J0IGRlZmF1bHQgdXNlckNvdXBvbnMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRlcm1zQ29uZGl0aW9ucyBmcm9tICcuLi8uLi9jb3Vwb25TZWxlY3Rpb25WaWV3L3Rlcm1zQ29uZGl0aW9ucy5qcydcblxuY2xhc3MgVXNlckNvdXBvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlblRlcm1zQ29uZGl0aW9uczogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZENvdXBvbjogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlVGFuZEMoc2VsZWN0ZWRDb3Vwb24gPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuVGVybXNDb25kaXRpb25zOiAhdGhpcy5zdGF0ZS5vcGVuVGVybXNDb25kaXRpb25zLCBzZWxlY3RlZENvdXBvbiB9KTtcbiAgICB9XG5cbiAgICBzZWFyY2hMYWIoY291cG9uKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0Q29ycG9yYXRlQ291cG9uKGNvdXBvbilcblxuICAgICAgICBsZXQgdGVzdF9pZHMgPSBbXVxuICAgICAgICBsZXQgbmV0d29ya19pZCA9IFwiXCJcbiAgICAgICAgaWYgKGNvdXBvbiAmJiBjb3Vwb24udGVzdHMpIHtcbiAgICAgICAgICAgIHRlc3RfaWRzID0gY291cG9uLnRlc3RzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdXBvbiAmJiBjb3Vwb24ubmV0d29ya19pZCkge1xuICAgICAgICAgICAgbmV0d29ya19pZCA9IGNvdXBvbi5uZXR3b3JrX2lkXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2xhYi9zZWFyY2hyZXN1bHRzP3Rlc3RfaWRzPSR7dGVzdF9pZHMuam9pbignLCcpfSZuZXR3b3JrX2lkPSR7bmV0d29ya19pZH1gXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImFsbC1vZmZlcnMgY3BuLW1yZ25cIj5BbGwgb2ZmZXJzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbm8tcm91bmQgbm8tc2hhZG93IHNraW4tdHJhbnNwYXJlbnQgcHJvZmlsZS1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkZGluZy1yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbGljYWJsZUNvdXBvbnMgJiYgdGhpcy5wcm9wcy5hcHBsaWNhYmxlQ291cG9ucy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vwb24tbGlzdGluZyBkcC11c2VyLWxpc3QgYmctbHN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGxpY2FibGVDb3Vwb25zLm1hcCgoY291cG9uLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb3Vwb25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJhdmwtY3BuLWhkbmdcIj5BdmFpbGFibGUgQ291cG9uczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VwYW4tbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3Vwb24tZGVzaW5nXCI+e2NvdXBvbi5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cG9uLmlzX2NvcnBvcmF0ZSA/IDxzcGFuIG9uQ2xpY2s9e3RoaXMuc2VhcmNoTGFiLmJpbmQodGhpcywgY291cG9uKX0gY2xhc3NOYW1lPVwiY291cG9uLWF2YWlsXCI+QXZhaWwgTm93ICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9yZ3QtYXJ3LnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPiA8L3NwYW4+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vvbi1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdXBvbi1pbnNcIj57Y291cG9uLmhlYWRpbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3Vwb24tZHRscy1wXCI+e2NvdXBvbi5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy50b2dnbGVUYW5kQy5iaW5kKHRoaXMsIGNvdXBvbil9IGNsYXNzTmFtZT1cImNvdXBvbi10ZXJtc1wiPlRlcm1zICYgQ29uZGl0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuVGVybXNDb25kaXRpb25zICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3Vwb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgPFRlcm1zQ29uZGl0aW9ucyB0b2dnbGU9eygpID0+IHRoaXMudG9nZ2xlVGFuZEMoKX0gdG5jPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ291cG9uLnRuY30gLz4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ291cG9uc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vaW5pdGlhbHNQaWN0dXJlJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY29uc3QgR0VOREVSID0ge1xuICAgIFwibVwiOiBcIk1hbGVcIixcbiAgICBcImZcIjogXCJGZW1hbGVcIixcbiAgICBcIm9cIjogXCJPdGhlclwiXG59XG5cbmNsYXNzIFVzZXJGYW1pbHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBZ2UoYmlydGhkYXkpIHtcbiAgICAgICAgYmlydGhkYXkgPSBuZXcgRGF0ZShiaXJ0aGRheSlcbiAgICAgICAgdmFyIGFnZURpZk1zID0gRGF0ZS5ub3coKSAtIGJpcnRoZGF5LmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGFnZURhdGUgPSBuZXcgRGF0ZShhZ2VEaWZNcyk7IC8vIG1pbGlzZWNvbmRzIGZyb20gZXBvY2hcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGFnZURhdGUuZ2V0VVRDRnVsbFllYXIoKSAtIDE5NzApO1xuICAgIH1cblxuICAgIGFkZFByb2ZpbGUoKSB7IC8vIHRvIGFkZCBuZXcgcHJvZmlsZVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2FkZHByb2ZpbGU/ZXhpc3Rpbmc9dHJ1ZScpXG4gICAgfVxuXG4gICAgZWRpdFByb2ZpbGUoaWQsZnJvbVdoZXJlKSB7IC8vIHRvIGVkaXQgZXhpc3RpbmcgcHJvZmlsZVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdwaWNrPXRydWUnKSkge1xuICAgICAgICAgICAgLy8gcGljayBwYWl0ZW50IGFuZCBnbyBiYWNrLCBlbHNlIGdvIG9uIHRvIGVkaXQuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFByb2ZpbGUoaWQpXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRfdGVzdF9pZCA9IFtdXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWREYXRlID0gbnVsbFxuICAgICAgICAgICAgaWYocGFyc2VkLmlzX2luc3VyYW5jZSAmJiBwYXJzZWQuaXNfaW5zdXJhbmNlID09ICd0cnVlJyl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLm1hcCgodHdwLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF90ZXN0X2lkLnB1c2godHdwLmlkKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhLnN0YXJ0X2RhdGUgPSBzZWxlY3RlZERhdGU/c2VsZWN0ZWREYXRlOnRoaXMucHJvcHMuc2VsZWN0ZWRTbG90ICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRTbG90LmRhdGU/dGhpcy5wcm9wcy5zZWxlY3RlZFNsb3QuZGF0ZTpuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgZGF0YS5sYWJfdGVzdCA9IHNlbGVjdGVkX3Rlc3RfaWRcbiAgICAgICAgICAgICAgICBkYXRhLmxhYiA9IHBhcnNlZC5sYWJfaWRcbiAgICAgICAgICAgICAgICBkYXRhLnByb2ZpbGUgPSBpZFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlQm9va2luZyhkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9DbGVhciBUZXN0cyBpZiB0aGVyZSBpcyBhbnkgZ29sZCBwcm9maWxlXG4gICAgICAgICAgICAvLyBsZXQgc2VsZWN0ZWRQcm9maWxlID0gdGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiB0aGlzLnByb3BzLlVTRVIucHJvZmlsZXNbaWRdO1xuICAgICAgICAgICAgLy8gaWYoc2VsZWN0ZWRQcm9maWxlICYmIChzZWxlY3RlZFByb2ZpbGUuaXNfdmlwX21lbWJlciB8fCBzZWxlY3RlZFByb2ZpbGUuaXNfdmlwX2dvbGRfbWVtYmVyKSAmJiB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cyl7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmKGZyb21XaGVyZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC91c2VyL2VkaXQvJHtpZH0/YWRkX3RvX2dvbGQ9JHtmcm9tV2hlcmV9JmZyb21fYm9va2luZz10cnVlYClcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvdXNlci9lZGl0LyR7aWR9P2FkZF90b19nb2xkPSR7ZnJvbVdoZXJlfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGR0b0dvbGQoaWQpe1xuICAgICAgICB0aGlzLmVkaXRQcm9maWxlKGlkLHRydWUpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7IHByb2ZpbGVzLCBzZWxlY3RlZFByb2ZpbGUgfSA9IHRoaXMucHJvcHMuVVNFUlxuXG4gICAgICAgIGxldCBnb2xkX3Byb2ZpbGUgPSBbXVxuICAgICAgICBsZXQgbm9ybWFsX3Byb2ZpbGUgPSBbXVxuICAgICAgICBsZXQgaW5zdXJhbmNlX3Byb2ZpbGUgPSBbXVxuICAgICAgICBsZXQgZ29sZF91c2VyX3Byb2ZpbGUgPSB7fVxuICAgICAgICBpZih0aGlzLnByb3BzLlVTRVIgJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzKXtcbiAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLm1hcChmdW5jdGlvbihba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUuaXNfdmlwX2dvbGRfbWVtYmVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGRfdXNlcl9wcm9maWxlID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB7T2JqZWN0LmtleXMocHJvZmlsZXMpLmZpbHRlcih4ID0+ICFwcm9maWxlc1t4XS5pc0R1bW15VXNlcikubWFwKChpZCwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZihwcm9maWxlc1tpZF0uaXNfdmlwX2dvbGRfbWVtYmVyKXtcbiAgICAgICAgICAgICAgICBnb2xkX3Byb2ZpbGUucHVzaCg8bGkga2V5PXtrZXl9IG9uQ2xpY2s9e3RoaXMuZWRpdFByb2ZpbGUuYmluZCh0aGlzLGlkLGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1sZyBtZW1iZXItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtwcm9maWxlc1tpZF0ubmFtZX0gaGFzX2ltYWdlPXtwcm9maWxlc1tpZF0ucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWZhbWlseVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc0NXB4JywgaGVpZ2h0OiAnNDVweCcgfX0gc3JjPXtwcm9maWxlc1tpZF0ucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1yb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCIgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiA5NSwgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fSA+e3Byb2ZpbGVzW2lkXS5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5nZW5kZXIgPT0gJ28nID8gXCJcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0uZ2VuZGVyID09ICdtJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tYW4uc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+IDogPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9mZW1hbGUuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCwgaGVpZ2h0OiAxNiB9fSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHRU5ERVJbcHJvZmlsZXNbaWRdLmdlbmRlcl19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLmRvYiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtc21cIj57cHJvZmlsZXNbaWRdLmRvYn08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiPntwcm9maWxlc1tpZF0uaXNfZGVmYXVsdF91c2VyID8gXCJTZWxmL1ByaW1hcnlcIiA6IFwiRmFtaWx5IE1lbWJlclwifTwvbGk+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5kb2IgPzxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXNtXCI+e3Byb2ZpbGVzW2lkXS5kb2J9PC9zcGFuPjogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0uZG9iICYmIHByb2ZpbGVzW2lkXS5nZW5kZXI/IDxzcGFuIGNsYXNzTmFtZT1cInBpcGUtc2lnblwiPiB8IDwvc3Bhbj4gOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5nZW5kZXI/IGAgJHtHRU5ERVJbcHJvZmlsZXNbaWRdLmdlbmRlcl19YDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGVzW2lkXS5pc19kZWZhdWx0X3VzZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5waG9uZV9udW1iZXI/IGAke3Byb2ZpbGVzW2lkXS5waG9uZV9udW1iZXJ9YDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0ucGhvbmVfbnVtYmVyICYmIHByb2ZpbGVzW2lkXS5lbWFpbD8gPHNwYW4gY2xhc3NOYW1lPVwicGlwZS1zaWduXCI+IHwgPC9zcGFuPiA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0uZW1haWw/IGAke3Byb2ZpbGVzW2lkXS5lbWFpbH1gOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLmlzX3ZpcF9nb2xkX21lbWJlciAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtY292cmQtdHh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpbWcgY2xhc3NOYW1lPVwibWwtMlwiIHdpZHRoPVwiMzVcIiBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9nb2xkLWxnLnBuZ1wiICBhbHQ9XCJnb2xkXCIvPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cImN0LWltZyBjdC1pbWctc20gYXJyb3ctZm9yd2FyZC1yaWdodFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYXJyb3ctZm9yd2FyZC1yaWdodC5zdmdcIn0gLz48L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICB9ZWxzZSBpZihwcm9maWxlc1tpZF0uaXNfaW5zdXJlZCl7ICBcbiAgICAgICAgICAgICAgICBpbnN1cmFuY2VfcHJvZmlsZS5wdXNoKDxsaSBrZXk9e2tleX0gb25DbGljaz17dGhpcy5lZGl0UHJvZmlsZS5iaW5kKHRoaXMsIGlkLGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1sZyBtZW1iZXItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtwcm9maWxlc1tpZF0ubmFtZX0gaGFzX2ltYWdlPXtwcm9maWxlc1tpZF0ucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWZhbWlseVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc0NXB4JywgaGVpZ2h0OiAnNDVweCcgfX0gc3JjPXtwcm9maWxlc1tpZF0ucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1yb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCIgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiA5NSwgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fSA+e3Byb2ZpbGVzW2lkXS5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXNtXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA1IH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLmRvYiA/PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtc21cIj57cHJvZmlsZXNbaWRdLmRvYn08L3NwYW4+OiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5kb2IgJiYgcHJvZmlsZXNbaWRdLmdlbmRlcj8gPHNwYW4gY2xhc3NOYW1lPVwicGlwZS1zaWduXCI+IHwgPC9zcGFuPiA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLmdlbmRlcj8gYCR7R0VOREVSW3Byb2ZpbGVzW2lkXS5nZW5kZXJdfWA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlc1tpZF0uaXNfZGVmYXVsdF91c2VyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0ucGhvbmVfbnVtYmVyPyBgJHtwcm9maWxlc1tpZF0ucGhvbmVfbnVtYmVyfWA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLnBob25lX251bWJlciAmJiBwcm9maWxlc1tpZF0uZW1haWw/IDxzcGFuIGNsYXNzTmFtZT1cInBpcGUtc2lnblwiPiB8IDwvc3Bhbj4gOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLmVtYWlsPyBgJHtwcm9maWxlc1tpZF0uZW1haWx9YDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ31cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0uaXNfaW5zdXJlZCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1jb3ZyZC10eHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q292ZXJlZDxiciAvPlVuZGVyIEluc3VyYW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cImN0LWltZyBjdC1pbWctc20gYXJyb3ctZm9yd2FyZC1yaWdodFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvYXJyb3ctZm9yd2FyZC1yaWdodC5zdmdcIn0gLz48L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBub3JtYWxfcHJvZmlsZS5wdXNoKDxsaSBrZXk9e2tleX0gb25DbGljaz17dGhpcy5lZGl0UHJvZmlsZS5iaW5kKHRoaXMsIGlkLGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1sZyBtZW1iZXItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtwcm9maWxlc1tpZF0ubmFtZX0gaGFzX2ltYWdlPXtwcm9maWxlc1tpZF0ucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWZhbWlseVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc0NXB4JywgaGVpZ2h0OiAnNDVweCcgfX0gc3JjPXtwcm9maWxlc1tpZF0ucHJvZmlsZV9pbWFnZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGltZy1yb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbWJlci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgYXBwLXRpdGxlXCIgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiA5NSwgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fSA+e3Byb2ZpbGVzW2lkXS5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1zbVwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5kb2IgPzxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXNtXCI+e3Byb2ZpbGVzW2lkXS5kb2J9PC9zcGFuPjogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlc1tpZF0uZG9iICYmIHByb2ZpbGVzW2lkXS5nZW5kZXI/IDxzcGFuIGNsYXNzTmFtZT1cInBpcGUtc2lnblwiPiB8IDwvc3Bhbj4gOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5nZW5kZXI/IGAke0dFTkRFUltwcm9maWxlc1tpZF0uZ2VuZGVyXX1gOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZXNbaWRdLmlzX2RlZmF1bHRfdXNlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXNbaWRdLnBob25lX251bWJlcj8gYCR7cHJvZmlsZXNbaWRdLnBob25lX251bWJlcn1gOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5waG9uZV9udW1iZXIgJiYgcHJvZmlsZXNbaWRdLmVtYWlsPyA8c3BhbiBjbGFzc05hbWU9XCJwaXBlLXNpZ25cIj4gfCA8L3NwYW4+IDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzW2lkXS5lbWFpbD8gYCR7cHJvZmlsZXNbaWRdLmVtYWlsfWA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvbGRfdXNlcl9wcm9maWxlICYmIE9iamVjdC5rZXlzKGdvbGRfdXNlcl9wcm9maWxlKS5sZW5ndGggJiYgZ29sZF91c2VyX3Byb2ZpbGUudmlwX2RhdGEgJiYgT2JqZWN0LmtleXMoZ29sZF91c2VyX3Byb2ZpbGUudmlwX2RhdGEpLmxlbmd0aCAmJiBnb2xkX3VzZXJfcHJvZmlsZS52aXBfZGF0YS50b3RhbF9tZW1iZXJzX2FsbG93ZWQgPiAwICYmICBnb2xkX3VzZXJfcHJvZmlsZS52aXBfZGF0YS5pc19tZW1iZXJfYWxsb3dlZD8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHRvR29sZChpZCl9fSBjbGFzc05hbWU9XCJnb2xkLWNvdnJkLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIEFkZCB0byBHb2xkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy1zbSBhcnJvdy1mb3J3YXJkLXJpZ2h0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9hcnJvdy1mb3J3YXJkLXJpZ2h0LnN2Z1wifSAvPjwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSl9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG10LTIwXCI+XG4gICAgICAgICAgICAgICB7cHJvZmlsZXMgJiYgT2JqZWN0LmtleXMocHJvZmlsZXMpLmxlbmd0aD88aDQgY2xhc3NOYW1lPVwiZnctNTAwIHVzZXItaGVhZGluZ1wiPlNlbGVjdCBNZW1iZXI8L2g0PjonJ31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBsLTAgcHItMFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0IGZhbWlseS1saXN0IGRwLXVzZXItbGlzdCBib3gtc2hhZG93LW5vbmVcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge2dvbGRfcHJvZmlsZX1cbiAgICAgICAgICAgICAgICAgICAge2luc3VyYW5jZV9wcm9maWxlfVxuICAgICAgICAgICAgICAgICAgICB7bm9ybWFsX3Byb2ZpbGV9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb2ZpbGVzKS5maWx0ZXIoeCA9PiAhcHJvZmlsZXNbeF0uaXNEdW1teVVzZXIpLmxlbmd0aCA9PSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL25vLWZhbWlseS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1sZyBtcnQtMjBcIj5ObyBGYW1pbHkgTWVtYmVyIEFkZGVkICEhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHN0aWNreS1idG4gcC0wIHYtYnRuICBidG4tbGcgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBidXR0b25zLWFkZGNhcnQtY29udGFpbmVyIG1ybmctdG9wLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRQcm9maWxlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cInYtYnRuLXByaW1hcnkgYm9vay1idG4tbXJnbi1hZGp1c3QgXCI+QWRkIE5ldyBNZW1iZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlckZhbWlseVxuIiwiaW1wb3J0IFVzZXJGYW1pbHkgZnJvbSAnLi9Vc2VyRmFtaWx5J1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyRmFtaWx5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBQcmVzY3JpcHRpb25DYXJkVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIGRvd25sb2FkSW1hZ2Uoc3JjKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHNyYywgJ19ibGFuaycpXG4gICAgICAgIH1cbiAgICB9XG5cblx0cmVuZGVyKCl7XG5cbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnByb3BzLl91cGRhdGVkQXQpLnRvRGF0ZVN0cmluZygpXG5cblxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJlc2NyaXB0aW9uLWNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXMtY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcnMtbmFtZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcHMtbGZ0LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtc2VjLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBycy1uYW1lLWFnZS1nZW5kZXJcIj4gIHt0aGlzLnByb3BzLnByb2ZpbGUubmFtZX0gfCA8c3Bhbj57dGhpcy5wcm9wcy5wcm9maWxlLmFnZX08L3NwYW4+ICAgfCAgIDxzcGFuPnt0aGlzLnByb3BzLnByb2ZpbGUuZ2VuZGVyLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBycy1zdWItdHh0XCI+e2BCeSBEci4gJHt0aGlzLnByb3BzLmRvY3RvclByb2ZpbGUubmFtZX1gfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBycy1wZGYtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DcmVhdGVkIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgb25DbGljayA9IHt0aGlzLmRvd25sb2FkSW1hZ2UuYmluZCh0aGlzLHRoaXMucHJvcHMuUHJlc2NyaXB0aW9uRmlsZVVSTCl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcGRmLWR3bi5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlc2NyaXB0aW9uQ2FyZFZpZXciLCJpbXBvcnQgVXNlclByZXNjcmlwdGlvbiBmcm9tICcuL3VzZXJQcmVzY3JpcHRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJlc2NyaXB0aW9uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByZXNjcmlwdGlvbkNhcmQgZnJvbSAnLi9QcmVzY3JpcHRpb25DYXJkJ1xuXG5jbGFzcyBVc2VyUHJlc2NyaXB0aW9uTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGlmKHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlKXtcblx0XHRcdC8vdGhpcy5wcm9wcy5nZXRVc2VyUHJlc2NyaXB0aW9uKHRoaXMucHJvcHMuVVNFUi5wcmltYXJ5TW9iaWxlKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0e1xuXHRcdFx0XHQodGhpcy5wcm9wcy5VU0VSLnVzZXJQcmVzY3JpcHRpb25zICYmIHRoaXMucHJvcHMuVVNFUi51c2VyUHJlc2NyaXB0aW9ucy5kYXRhICYmIHRoaXMucHJvcHMuVVNFUi51c2VyUHJlc2NyaXB0aW9ucy5kYXRhLnByZXNjcmlwdGlvbnMubGVuZ3RoKT9cblx0XHRcdFx0XHR0aGlzLnByb3BzLlVTRVIudXNlclByZXNjcmlwdGlvbnMuZGF0YS5wcmVzY3JpcHRpb25zLm1hcCgocHJlc2NyaXB0aW9uLGluZGV4KT0+e1x0XHRcblx0XHRcdFx0XHRcdHJldHVybiA8UHJlc2NyaXB0aW9uQ2FyZCB7Li4ucHJlc2NyaXB0aW9ufSAvPlx0XHRcblx0XHRcdFx0XHR9KVx0XG5cdFx0XHRcdFx0OjxwPk5vIFByZXNjcmlwdGlvbnMgRm91bmQ8L3A+XG5cdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlclByZXNjcmlwdGlvbkxpc3QiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL0xvYWRlcidcbi8vIGltcG9ydCBMaWdodGJveCBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2xpZ2h0Ym94JztcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveCc7XG5cbmNsYXNzIFVzZXJSZXBvcnRzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudHlwZSxcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcbiAgICAgICAgICAgIHJlcG9ydHM6IFtdLFxuICAgICAgICAgICAgbGlnaHRib3hJc09wZW46IGZhbHNlLFxuICAgICAgICAgICAgaW1hZ2VJbmRleDogMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0QXBwb2ludG1lbnRSZXBvcnRzKHRoaXMuc3RhdGUuaWQsIHRoaXMuc3RhdGUudHlwZSwgKGVyciwgZGF0YSkgPT4geyAvLyBnZXQgdXNlciByZXBvcnRzXG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXBvcnRzOiBkYXRhLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVMaWdodEJveCh0eXBlID0gZmFsc2UsIGltYWdlSW5kZXggPSAwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaWdodGJveElzT3BlbjogdHlwZSwgaW1hZ2VJbmRleDogaW1hZ2VJbmRleCB9KVxuICAgIH1cblxuICAgIGNoZWNrRXh0ZW5zaW9uKHJlcG9ydCwgaSkge1xuICAgICAgICBsZXQgZXh0ZW5zaW9uQXJyID0gcmVwb3J0Lm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgbGV0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbkFycltleHRlbnNpb25BcnIubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChleHRlbnNpb24gPT0gJ3BkZicpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IG9uQ2xpY2s9e3RoaXMuZG93bmxvYWRJbWFnZS5iaW5kKHRoaXMsIHJlcG9ydC5uYW1lKX0gY2xhc3NOYW1lPVwicGRmLXJlcG9ydC1kaXZcIiBrZXk9e2l9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcGRmLWljb24uc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXh0ZW5zaW9uID09ICd0eHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXt0aGlzLmRvd25sb2FkSW1hZ2UuYmluZCh0aGlzLCByZXBvcnQubmFtZSl9IGNsYXNzTmFtZT1cInBkZi1yZXBvcnQtZGl2XCIga2V5PXtpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3RleHQtaWNvbi5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17cmVwb3J0Lm5hbWV9IGtleT17aX0gY2xhc3NOYW1lPVwiaW1hZ2VSZXBvcnRzXCIgb25DbGljaz17dGhpcy50b2dnbGVMaWdodEJveC5iaW5kKHRoaXMsIHRydWUsIGkpfSAvPlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG93bmxvYWRJbWFnZShzcmMpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oc3JjLCAnX2JsYW5rJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGltYWdlcyA9IFtdXG4gICAgICAgIGxldCB7IGxpZ2h0Ym94SXNPcGVuLCBpbWFnZUluZGV4IH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlcG9ydHMgJiYgdGhpcy5zdGF0ZS5yZXBvcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaW1hZ2VzID0gdGhpcy5zdGF0ZS5yZXBvcnRzLm1hcCgoaW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW0ubmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZXBvcnRzLmxlbmd0aCA9PSAwID8gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwZC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9uby1hZGRyZXNzLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbGcgbXJ0LTIwXCI+Tm8gRmlsZXMgVXBsb2FkZWQgISE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVwb3J0cy5tYXAoKHJlcG9ydCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tFeHRlbnNpb24ocmVwb3J0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxpZ2h0Ym94SXNPcGVuID8gPExpZ2h0Ym94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyQnV0dG9ucz17WzxwIGNsYXNzTmFtZT1cImR3bmxvYWRidG5wcmVzXCIgb25DbGljaz17dGhpcy5kb3dubG9hZEltYWdlLmJpbmQodGhpcywgaW1hZ2VzW2ltYWdlSW5kZXhdKX0+RE9XTkxPQUQ8L3A+XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5TcmM9e2ltYWdlc1tpbWFnZUluZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTcmM9e2ltYWdlc1soaW1hZ2VJbmRleCArIDEpICUgaW1hZ2VzLmxlbmd0aF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2U3JjPXtpbWFnZXNbKGltYWdlSW5kZXggKyBpbWFnZXMubGVuZ3RoIC0gMSkgJSBpbWFnZXMubGVuZ3RoXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VSZXF1ZXN0PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbGlnaHRib3hJc09wZW46IGZhbHNlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlUHJldlJlcXVlc3Q9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSW5kZXg6IChpbWFnZUluZGV4ICsgaW1hZ2VzLmxlbmd0aCAtIDEpICUgaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlTmV4dFJlcXVlc3Q9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSW5kZXg6IChpbWFnZUluZGV4ICsgMSkgJSBpbWFnZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgKSA6IDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlclJlcG9ydHNWaWV3XG4iLCJpbXBvcnQgVXNlclJlcG9ydHNWaWV3IGZyb20gJy4vVXNlclJlcG9ydHNWaWV3LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUmVwb3J0c1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgVmVyaWZ5RW1haWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyAvLyBlbWFpbCB2ZXJpZmljYXRpb25cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZW1haWw6ICcnLFxuXHRcdFx0b2xkRW1haWw6JycsXG5cdFx0XHRWZXJpZnlFbWFpbHM6ZmFsc2UsXG5cdFx0XHRzaG93T3RwOmZhbHNlLFxuXHRcdFx0b3RwVGltZW91dDpmYWxzZSxcblx0XHRcdGluaXRpYWxTdGFnZTp0cnVlLFxuXHRcdFx0b3RwVmFsdWU6JycsXG5cdFx0XHRlbWFpbFN1Y2Nlc3NJZDonJ1xuXHRcdH1cblx0fVxuXHRcblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuXHRcdGlmKHRoaXMuc3RhdGUuaW5pdGlhbFN0YWdlICYmIHRoaXMucHJvcHMuZW1haWwgIT0nJyl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbWFpbDp0aGlzLnByb3BzLmVtYWlsLG9sZEVtYWlsOnRoaXMucHJvcHMuZW1haWwsIGluaXRpYWxTdGFnZTpmYWxzZX0pXHRcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuaW5pdGlhbFN0YWdlICYmIHRoaXMucHJvcHMuZW1haWwgIT0nJyl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlbWFpbDp0aGlzLnByb3BzLmVtYWlsLG9sZEVtYWlsOnRoaXMucHJvcHMuZW1haWwsIGluaXRpYWxTdGFnZTpmYWxzZX0pXHRcblx0XHR9XHRcblx0fVxuXHRcblx0aGFuZGxlRW5kb3Jlc21lbnRFbWFpbChldmVudCkge1xuXHRcdGxldCBvbGRFbWFpbFxuXHRcdGlmICh0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50ICYmIHRoaXMucHJvcHMudXNlcl9kYXRhICYmIHRoaXMucHJvcHMudXNlcl9kYXRhLmxlbmd0aCA+IDApIHtcblx0XHRcdG9sZEVtYWlsID0gdGhpcy5wcm9wcy51c2VyX2RhdGFbMF0uZW1haWxcblx0XHR9ZWxzZXtcblx0XHRcdG9sZEVtYWlsID0gdGhpcy5zdGF0ZS5vbGRFbWFpbFxuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHtlbWFpbDpldmVudC50YXJnZXQudmFsdWV9LCgpPT57XG5cdFx0XHRpZihvbGRFbWFpbCAhPT0gdGhpcy5zdGF0ZS5lbWFpbCl7XG5cdFx0XHRcdGxldCB2YWxpZEVtYWlsID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cdFx0XHRcdHZhbGlkRW1haWwgPSB2YWxpZEVtYWlsLnRlc3QodGhpcy5zdGF0ZS5lbWFpbClcblx0XHRcdFx0aWYgKHZhbGlkRW1haWwpIHtcdFxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1ZlcmlmeUVtYWlsczp0cnVlfSlcblx0XHRcdFx0XHRpZih0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50KXtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KGZhbHNlLHRydWUpXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnZlcmlmeUVuZG9yc2VtZW50RW1haWwodGhpcy5zdGF0ZS5lbWFpbCxmYWxzZSx0cnVlKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMucHJvcHMudmVyaWZ5RW5kb3JzZW1lbnRFbWFpbCh0aGlzLnN0YXRlLmVtYWlsLGZhbHNlLGZhbHNlKVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtWZXJpZnlFbWFpbHM6ZmFsc2V9KVxuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5zdGF0ZS5lbWFpbCA9PSAnJyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1ZlcmlmeUVtYWlsczpmYWxzZX0pXG5cdFx0XHRcdGlmKHRoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KGZhbHNlLHRydWUpXHRcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy52ZXJpZnlFbmRvcnNlbWVudEVtYWlsKHRoaXMuc3RhdGUuZW1haWwsZmFsc2UsdHJ1ZSkgLy92ZXJpZnkgZW1haWwgdXNpbmcgb3RwXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0VmVyaWZ5RW1haWwocmVzZW5kRmxhZyl7XG5cdFx0aWYocmVzZW5kRmxhZyl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtvdHBUaW1lb3V0OmZhbHNlLG90cFZhbHVlOicnIH0pXG5cdFx0fVxuXHRcdGxldCBkYXRhPXt9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50ICYmIHRoaXMucHJvcHMudXNlcl9kYXRhICYmIHRoaXMucHJvcHMudXNlcl9kYXRhLmxlbmd0aCA+IDApIHtcblx0XHRcdGRhdGEucHJvZmlsZSA9IHRoaXMucHJvcHMudXNlcl9kYXRhWzBdLnByb2ZpbGVcblx0XHR9ZWxzZXtcblx0XHRcdGRhdGEucHJvZmlsZSA9IHRoaXMucHJvcHMubWVtYmVyX2lkLmlkXG5cdFx0fVxuXHRcdGxldCB2YWxpZEVtYWlsID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cdFx0aWYgKHRoaXMuc3RhdGUuZW1haWwgIT0gJycpIHtcdFx0XHRcblx0XHRcdHZhbGlkRW1haWwgPSB2YWxpZEVtYWlsLnRlc3QodGhpcy5zdGF0ZS5lbWFpbClcblx0XHRcdGlmICh2YWxpZEVtYWlsKSB7XG5cdFx0XHRcdGRhdGEuZW1haWw9IHRoaXMuc3RhdGUuZW1haWxcdFxuXHRcdFx0XHR0aGlzLnByb3BzLnNlbmRPdHBPbkVtYWlsKGRhdGEsIChyZXNwKSA9PiB7ICAgICAgICBcblx0ICAgICAgICAgICAgXHRpZihyZXNwICYmIHJlc3AuaWQpe1xuXHRcdCAgICAgICAgICAgIFx0dGhpcy5zZXRTdGF0ZSh7ZW1haWxTdWNjZXNzSWQ6cmVzcC5pZCwgc2hvd090cDogdHJ1ZSwgb3RwVGltZW91dDogZmFsc2UgfSlcblx0XHQgICAgICAgICAgICBcdGlmKHRoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQpe1xuXHRcdCAgICAgICAgICAgIFx0XHR0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdChmYWxzZSx0cnVlKVxuXHRcdCAgICAgICAgICAgIFx0fVxuXHRcdCAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHQgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdHBUaW1lb3V0OiB0cnVlIH0pXG5cdFx0ICAgICAgICAgICAgICAgIH0sIDEwMDAwKVxuXHRcdCAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiT1RQIGhhcyBiZWVuIHNlbnQgc3VjY2Vzc2Z1bHkgdG8geW91ciBuZXcgZW1haWwuXCJ9KVxuXHRcdCAgICAgICAgICAgIH1lbHNlIHtcblx0XHQgICAgICAgICAgICBcdHRoaXMuc2V0U3RhdGUoe3Nob3dPdHA6IGZhbHNlLCBvdHBUaW1lb3V0OiBmYWxzZSB9KVxuXHRcdCAgICAgICAgICAgIFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiByZXNwLm1lc3NhZ2UgfSlcblx0XHQgICAgICAgICAgICB9XG5cdFx0ICAgICAgICB9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7VmVyaWZ5RW1haWxzOmZhbHNlfSlcblx0XHRcdFx0aWYoIXRoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQpe1xuXHRcdFx0XHRcdHRoaXMucHJvcHMudmVyaWZ5RW5kb3JzZW1lbnRFbWFpbCh0aGlzLnN0YXRlLmVtYWlsLGZhbHNlLHRydWUpXG5cdFx0XHRcdH1cblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciB2YWxpZCBFbWFpbFwiIH0pO1xuXHRcdFx0fVxuXHRcdH1lbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7VmVyaWZ5RW1haWxzOmZhbHNlfSlcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSBFbnRlciB2YWxpZCBFbWFpbFwiIH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldE90cChldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7b3RwVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG5cdH1cblx0c3VibWl0T3RwKCl7XG5cdFx0bGV0IGRhdGE9e31cblx0XHRkYXRhLmlkID0gdGhpcy5zdGF0ZS5lbWFpbFN1Y2Nlc3NJZFxuXHRcdGlmICh0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50ICYmIHRoaXMucHJvcHMudXNlcl9kYXRhICYmIHRoaXMucHJvcHMudXNlcl9kYXRhLmxlbmd0aCA+IDApIHtcblx0XHRcdGRhdGEucHJvZmlsZSA9IHRoaXMucHJvcHMudXNlcl9kYXRhWzBdLnByb2ZpbGVcblx0XHR9ZWxzZXtcblx0XHRcdGRhdGEucHJvZmlsZSA9IHRoaXMucHJvcHMubWVtYmVyX2lkLmlkXG5cdFx0fVxuXHRcdGRhdGEub3RwID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5vdHBWYWx1ZSlcblx0XHRpZih0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50KXtcblx0XHRcdGRhdGEucHJvY2Vzc19pbW1lZGlhdGVseSA9IGZhbHNlXG5cdFx0fWVsc2V7XG5cdFx0XHRkYXRhLnByb2Nlc3NfaW1tZWRpYXRlbHkgPSB0cnVlXG5cdFx0fVxuXHRcdHRoaXMucHJvcHMuc3VibWl0RW1haWxPVFAoZGF0YSwocmVzcCwgZXJyb3IpID0+e1xuXHRcdFx0aWYocmVzcCl7XG5cdFx0ICAgICAgICB0aGlzLnByb3BzLnZlcmlmeUVuZG9yc2VtZW50RW1haWwodGhpcy5zdGF0ZS5lbWFpbCx0cnVlLGZhbHNlKVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtWZXJpZnlFbWFpbHM6ZmFsc2Usc2hvd090cDpmYWxzZSxvdHBUaW1lb3V0OmZhbHNlLG90cFZhbHVlOicnLGVtYWlsU3VjY2Vzc0lkOicnfSlcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiByZXNwLm1lc3NhZ2UgfSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiByZXNwLm1lc3NhZ2UgfSk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgY29sLTEyIG1ydC0xMCAke3RoaXMucHJvcHMuaXNfZW5kb3JzZW1lbnQ/Jyc6ICdpbnMtZm1wYWdlLWlucHV0J31gfSBvbkNsaWNrPXsoZSk9PntlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dPdHA/J2lucy1lbWFpbC1jb250JzonJ30+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BpbnMtZm9ybS1ncm91cCAke3RoaXMuc3RhdGUuc2hvd090cD8nbWItMCc6Jyd9YH0+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0XHRcdGlkPXtgZW1haWxzXyR7dGhpcy5wcm9wcy5tZW1iZXJfaWQuaWR9YH0gXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBpbnMtZm9ybS1jb250cm9sICR7dGhpcy5wcm9wcy52YWxpZGF0ZUVycm9ycyAmJiB0aGlzLnByb3BzLmlzX2VuZG9yc2VtZW50ICYmIHRoaXMucHJvcHMudmFsaWRhdGVFcnJvcnMuaW5kZXhPZignZW1haWwnKSA+IC0xID8gJ2ZpbGwtZXJyb3InOiAnJ30gJHt0aGlzLnByb3BzLmlzRW1haWxFcnJvcj8nZXJyb3JDb2xvckJvcmRlcic6Jyd9YH0gcmVxdWlyZWQgXG5cdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cImVtYWlsXCIgXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiIFxuXHRcdFx0XHRcdFx0XHRkYXRhLXBhcmFtPSdlbWFpbCcgXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlRW5kb3Jlc21lbnRFbWFpbC5iaW5kKHRoaXMpfSBcblx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLmhhbmRsZUVuZG9yZXNtZW50RW1haWwuYmluZCh0aGlzKX0gXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1wbGFjZWhvbGRlciBkYXRlUGlja2VyTGFiZWxcIiBodG1sRm9yPVwic3RhdGlja1wiPjxzcGFuIGNsYXNzTmFtZT1cImxhYmVsRG90XCI+PC9zcGFuPkVtYWlsPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbWFpbC0wMS5zdmdcIn0gLz5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5WZXJpZnlFbWFpbHM/XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidnJmeS1lZGl0XCIgb25DbGljaz17dGhpcy5WZXJpZnlFbWFpbC5iaW5kKHRoaXMsIGZhbHNlKX0+VmVyaWZ5IG5vdzwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93T3RwICYmIHRoaXMuc3RhdGUuVmVyaWZ5RW1haWxzP1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtb3RwLW1haWwtY29udFwiPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJpbnMtZW0tb3RwXCI+QW4gT1RQIGhhcyBiZWVuIHNlbnQgdG8geW91ciBlbWFpbCBhZGRyZXNzPC9wPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVtLWlucy1pbnAtY29udFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZW0taW5zLWlucHVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE9UUFwiIG9uQ2hhbmdlPXt0aGlzLnNldE90cC5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5vdHBWYWx1ZX0gLz5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLm90cFZhbHVlLmxlbmd0aCA9PTY/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRPdHAuYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5vdHBUaW1lb3V0P1xuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInJkc24taXB0LW1kXCIgb25DbGljaz17dGhpcy5WZXJpZnlFbWFpbC5iaW5kKHRoaXMsdHJ1ZSl9PlJlc2VuZDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0OicnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlcmlmeUVtYWlsIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cblxuaW1wb3J0IHsgc2V0Q29ycG9yYXRlQ291cG9uLCBlZGl0VXNlclByb2ZpbGVJbWFnZSwgZ2V0QXBwb2ludG1lbnRSZXBvcnRzLCBzZWxlY3RQaWNrdXBBZGRyZXNzLCBlZGl0VXNlclByb2ZpbGUsIGdldFVzZXJQcm9maWxlLCBnZXRQcm9maWxlQXBwb2ludG1lbnRzLCBzZWxlY3RQcm9maWxlLCBnZXRVc2VyQWRkcmVzcywgYWRkVXNlckFkZHJlc3MsIHVwZGF0ZVVzZXJBZGRyZXNzLCBsb2dvdXQsIGdldFVzZXJQcmVzY3JpcHRpb24sIGdldENvdXBvbnMsIGFwcGx5Q291cG9ucywgY2xlYXJFeHRyYVRlc3RzLCBnZXRVc2VyUmV2aWV3cywgZ2V0UmF0aW5nQ29tcGxpbWVudHMsIHVwZGF0ZUFwcG9pbnRtZW50UmF0aW5nLCBPVFRMb2dpbiwgZ2V0Q2FydEl0ZW1zLCBnZXRJc0NhcmVEZXRhaWxzLCBnZW5lcmF0ZUluc3VyYW5jZUxlYWQsIHByZUJvb2tpbmcsbG9hZE9QREluc3VyYW5jZSwgc2VuZE90cE9uRW1haWwgLHN1Ym1pdEVtYWlsT1RQLCBjbGVhclZpcFNlbGVjdGVkUGxhbiwgcmVzZXRWaXBEYXRhfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmltcG9ydCBVc2VyUHJvZmlsZVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL3VzZXJQcm9maWxlL2luZGV4LmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuXG5jbGFzcyBVc2VyUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGlmICghU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgICAgIGlmIChwYXJzZWQgJiYgcGFyc2VkLnJlZikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGAvbG9naW4/Y2FsbGJhY2s9LyZyZWY9aG9tZWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKGAvbG9naW4/Y2FsbGJhY2s9L2ApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkRGF0YShzdG9yZSkge1xuICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKSAvLyBnZXQgbG9nZ2VkSW4gdXNlciBwcm9maWxlc1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyQWRkcmVzcygpIC8vIGdldCB1c2VyIGFkZHJlc3NcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0Q291cG9ucyh7fSkgLy8gZ2V0IHVzZXIgc3BlY2lmaWMgY291cG9uc1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRDYXJ0SXRlbXMoKSAvLyBnZXQgdXNlciBjYXJ0IGl0ZW1zXG4gICAgICAgICAgICAvL3RoaXMucHJvcHMuZ2V0SXNDYXJlRGV0YWlscygpIC8vIGdldCB1c2VyIHN1YnNjcmlwdGlvbiBwbGFuIGRldGFpbHNcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnByb3BzLmxvYWRPUERJbnN1cmFuY2UodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIVNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxVc2VyUHJvZmlsZVZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBVU0VSID0gc3RhdGUuVVNFUlxuXG4gICAgY29uc3Qge1xuICAgICAgICBhcHBsaWNhYmxlQ291cG9ucyxcbiAgICAgICAgaXNVc2VyQ2FyZWRcbiAgICB9ID0gc3RhdGUuVVNFUlxuICAgIGxldCB7IHNlbGVjdGVkU2xvdCB9ID0gc3RhdGUuTEFCX1NFQVJDSFxuXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZENyaXRlcmlhc1xuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBjb21tb25fc2V0dGluZ3NcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgVVNFUixcbiAgICAgICAgYXBwbGljYWJsZUNvdXBvbnMsXG4gICAgICAgIGlzVXNlckNhcmVkLFxuICAgICAgICBzZWxlY3RlZFNsb3QsXG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBjb21tb25fc2V0dGluZ3NcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvZ291dDogKHJvb21JZCkgPT4gZGlzcGF0Y2gobG9nb3V0KHJvb21JZCkpLFxuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIGdldFByb2ZpbGVBcHBvaW50bWVudHM6IChwcm9maWxlX2lkKSA9PiBkaXNwYXRjaChnZXRQcm9maWxlQXBwb2ludG1lbnRzKHByb2ZpbGVfaWQpKSxcbiAgICAgICAgc2VsZWN0UHJvZmlsZTogKHByb2ZpbGVfaWQpID0+IGRpc3BhdGNoKHNlbGVjdFByb2ZpbGUocHJvZmlsZV9pZCkpLFxuICAgICAgICBnZXRVc2VyQWRkcmVzczogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlckFkZHJlc3MoKSksXG4gICAgICAgIGFkZFVzZXJBZGRyZXNzOiAocG9zdERhdGEsIGNiKSA9PiBkaXNwYXRjaChhZGRVc2VyQWRkcmVzcyhwb3N0RGF0YSwgY2IpKSxcbiAgICAgICAgdXBkYXRlVXNlckFkZHJlc3M6IChwb3N0RGF0YSwgY2IpID0+IGRpc3BhdGNoKHVwZGF0ZVVzZXJBZGRyZXNzKHBvc3REYXRhLCBjYikpLFxuICAgICAgICBlZGl0VXNlclByb2ZpbGU6IChwcm9maWxlRGF0YSwgcHJvZmlsZUlkLCBjYikgPT4gZGlzcGF0Y2goZWRpdFVzZXJQcm9maWxlKHByb2ZpbGVEYXRhLCBwcm9maWxlSWQsIGNiKSksXG4gICAgICAgIGVkaXRVc2VyUHJvZmlsZUltYWdlOiAocHJvZmlsZURhdGEsIHByb2ZpbGVJZCwgY2IpID0+IGRpc3BhdGNoKGVkaXRVc2VyUHJvZmlsZUltYWdlKHByb2ZpbGVEYXRhLCBwcm9maWxlSWQsIGNiKSksXG4gICAgICAgIHNlbGVjdFBpY2t1cEFkZHJlc3M6IChhZGRyZXNzKSA9PiBkaXNwYXRjaChzZWxlY3RQaWNrdXBBZGRyZXNzKGFkZHJlc3MpKSxcbiAgICAgICAgZ2V0QXBwb2ludG1lbnRSZXBvcnRzOiAoYXBwb2ludG1lbnRJZCwgdHlwZSwgY2IpID0+IGRpc3BhdGNoKGdldEFwcG9pbnRtZW50UmVwb3J0cyhhcHBvaW50bWVudElkLCB0eXBlLCBjYikpLFxuICAgICAgICBnZXRVc2VyUHJlc2NyaXB0aW9uOiAobW9iaWxlTm8pID0+IGRpc3BhdGNoKGdldFVzZXJQcmVzY3JpcHRpb24obW9iaWxlTm8pKSxcbiAgICAgICAgZ2V0Q291cG9uczogKHByb2R1Y3RJZCkgPT4gZGlzcGF0Y2goZ2V0Q291cG9ucyhwcm9kdWN0SWQpKSxcbiAgICAgICAgZ2V0VXNlclJldmlld3M6IChjYikgPT4gZGlzcGF0Y2goZ2V0VXNlclJldmlld3MoY2IpKSxcbiAgICAgICAgZ2V0UmF0aW5nQ29tcGxpbWVudHM6IChjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0UmF0aW5nQ29tcGxpbWVudHMoY2FsbGJhY2spKSxcbiAgICAgICAgdXBkYXRlQXBwb2ludG1lbnRSYXRpbmc6IChyYXRpbmdEYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2godXBkYXRlQXBwb2ludG1lbnRSYXRpbmcocmF0aW5nRGF0YSwgY2FsbGJhY2spKSxcbiAgICAgICAgT1RUTG9naW46IChvdHQsdXNlcl9pZCkgPT4gZGlzcGF0Y2goT1RUTG9naW4ob3R0LHVzZXJfaWQpKSxcbiAgICAgICAgc2V0Q29ycG9yYXRlQ291cG9uOiAoY291cG9uKSA9PiBkaXNwYXRjaChzZXRDb3Jwb3JhdGVDb3Vwb24oY291cG9uKSksXG4gICAgICAgIGNsZWFyRXh0cmFUZXN0czogKCkgPT4gZGlzcGF0Y2goY2xlYXJFeHRyYVRlc3RzKCkpLFxuICAgICAgICBnZXRDYXJ0SXRlbXM6ICgpID0+IGRpc3BhdGNoKGdldENhcnRJdGVtcygpKSxcbiAgICAgICAgZ2VuZXJhdGVJbnN1cmFuY2VMZWFkOihzZWxlY3RlZFBsYW4sIGNiKSA9PiBkaXNwYXRjaChnZW5lcmF0ZUluc3VyYW5jZUxlYWQoc2VsZWN0ZWRQbGFuLGNiKSksXG4gICAgICAgIGdldElzQ2FyZURldGFpbHM6ICgpID0+IGRpc3BhdGNoKGdldElzQ2FyZURldGFpbHMoKSksXG4gICAgICAgIHByZUJvb2tpbmc6KHNsb3QpID0+IGRpc3BhdGNoKHByZUJvb2tpbmcoc2xvdCkpLFxuICAgICAgICBsb2FkT1BESW5zdXJhbmNlOiAoY2l0eSkgPT4gZGlzcGF0Y2gobG9hZE9QREluc3VyYW5jZShjaXR5KSksXG4gICAgICAgIHNlbmRPdHBPbkVtYWlsOihjcml0ZXJpYSxjYWxsYmFjayk9PmRpc3BhdGNoKHNlbmRPdHBPbkVtYWlsKGNyaXRlcmlhLGNhbGxiYWNrKSksXG4gICAgICAgIHN1Ym1pdEVtYWlsT1RQOiAoZGF0YSwgY2IpID0+IGRpc3BhdGNoKHN1Ym1pdEVtYWlsT1RQKGRhdGEsIGNiKSksXG4gICAgICAgIGNsZWFyVmlwU2VsZWN0ZWRQbGFuOigpID0+IGRpc3BhdGNoKGNsZWFyVmlwU2VsZWN0ZWRQbGFuKCkpLFxuICAgICAgICByZXNldFZpcERhdGE6KCkgPT4gZGlzcGF0Y2gocmVzZXRWaXBEYXRhKCkpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJQcm9maWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=