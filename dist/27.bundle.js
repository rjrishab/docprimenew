(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./dev/js/components/insurance/insurancePopup.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/insurance/insurancePopup.js ***!
  \*******************************************************/
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

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var InsurancePopup = function (_React$Component) {
    _inherits(InsurancePopup, _React$Component);

    function InsurancePopup(props) {
        _classCallCheck(this, InsurancePopup);

        var _this = _possibleConstructorReturn(this, (InsurancePopup.__proto__ || Object.getPrototypeOf(InsurancePopup)).call(this, props));

        _this.state = {
            profile_id: '',
            newprofile: {},
            phoneNumber: '',
            validationError: '',
            showOTP: false,
            otp: "",
            otpTimeout: false,
            error_message: '',
            isLeadTrue: false,
            smsBtnType: null,
            selectedProfileAge: '',
            age: '',
            enableOtpRequest: false
        };
        return _this;
    }

    _createClass(InsurancePopup, [{
        key: 'handleChange',
        value: function handleChange(profileid, newProfile, selectedProfileAge, event) {
            var newProfileNames = {};
            var newName = newProfile.name.split(" ");
            var tempArray = void 0;
            if (newName.length == 2) {
                newProfileNames.name = newName[0];
                if (!this.props.self_data_values.no_lname) {
                    newProfileNames.middle_name = '';
                    newProfileNames.last_name = newName[1];
                } else {
                    newProfileNames.middle_name = '';
                    newProfileNames.last_name = '';
                }
            } else if (newName.length == 3) {
                newProfileNames.name = newName[0];
                if (!this.props.self_data_values.no_lname) {
                    newProfileNames.middle_name = newName[1];
                    newProfileNames.last_name = newName[2];
                } else {
                    newProfileNames.middle_name = '';
                    newProfileNames.last_name = '';
                }
            } else if (newName.length > 3) {
                tempArray = newName.slice(2, newName.length);
                newProfileNames.name = newName[0];
                if (!this.props.self_data_values.no_lname) {
                    newProfileNames.middle_name = newName[1];
                    newProfileNames.last_name = tempArray.join(' ');
                } else {
                    newProfileNames.middle_name = '';
                    newProfileNames.last_name = '';
                }
            } else {
                newProfileNames.name = newName[0];
                if (!this.props.self_data_values.no_lname) {
                    newProfileNames.middle_name = '';
                    newProfileNames.last_name = '';
                } else {
                    newProfileNames.middle_name = '';
                    newProfileNames.last_name = '';
                }
            }
            var exactProfile = _extends({}, newProfile, newProfileNames);
            if (this.props.is_child_only) {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();

                today = yyyy + '-' + mm + '-' + dd;
                var startDate = Date.parse(today);
                var endDate = Date.parse(newProfile.dob);
                var timeDiff = startDate - endDate;
                var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                this.setState({ profile_id: profileid, newprofile: exactProfile, selectedProfileAge: daysDiff, age: newProfile.age });
            } else {
                this.setState({ profile_id: profileid, newprofile: exactProfile, selectedProfileAge: selectedProfileAge, age: newProfile.age });
            }
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            if (this.state.showOTP && e.target.name == 'phoneNumber') {
                var _setState;

                this.setState((_setState = {}, _defineProperty(_setState, e.target.name, e.target.value), _defineProperty(_setState, 'validationError', ""), _defineProperty(_setState, 'showOTP', false), _defineProperty(_setState, 'otp', ""), _setState));
            } else {
                this.setState(_defineProperty({}, e.target.name, e.target.value));
            }
        }
    }, {
        key: 'submitOTPRequest',
        value: function submitOTPRequest(number) {
            var resendFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var viaSms = arguments[2];

            var _this2 = this;

            var viaWhatsapp = arguments[3];
            var fromPopup = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            // to generate otp
            var lead_data = queryString.parse(this.props.location.search);
            if (number.match(/^[56789]{1}[0-9]{9}$/)) {
                this.setState({ validationError: "" });
                this.props.sendOTP(number, viaSms, viaWhatsapp, 'insurance-login', function (error) {
                    if (error) {
                        // this.setState({ validationError: "Could not generate OTP." })
                    } else {
                        if (Object.keys(_this2.props.selected_plan).length > 0) {
                            _this2.props.generateInsuranceLead(_this2.props.selected_plan ? _this2.props.selected_plan.id : '', _this2.state.phoneNumber, lead_data); // to create insurance lead for matrix
                        }
                        var data = {
                            'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopupContinue', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'Insurance-login-popup-continue-click', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : '', 'mobileNo': _this2.state.phoneNumber
                        };
                        _gtm2.default.sendEvent({ data: data });
                        if (viaWhatsapp) {
                            _this2.setState({ enableOtpRequest: true });
                        } else {
                            _this2.setState({ enableOtpRequest: false });
                        }
                        _this2.setState({ showOTP: true, otpTimeout: true, smsBtnType: viaSms ? true : false });
                        setTimeout(function () {
                            _this2.setState({ otpTimeout: false });
                        }, 20000);
                        setTimeout(function () {
                            _this2.setState({ enableOtpRequest: false });
                        }, 60000);

                        if (fromPopup && document.getElementsByClassName('ins-form-slider')) {
                            if (fromPopup == 'one') {
                                document.getElementsByClassName('ins-form-slider')[0].scroll({ left: 999, behavior: 'smooth' });
                            } else {
                                document.getElementsByClassName('ins-form-slider')[0].scroll({ left: -999, behavior: 'smooth' });
                            }
                        }
                    }
                });
            } else {
                this.setState({ validationError: "Please provide a valid number (10 digits)" });
            }
        }
    }, {
        key: 'verifyOTP',
        value: function verifyOTP() {
            var _this3 = this;

            //verify user entered otp
            var parsed = queryString.parse(this.props.location.search);
            var self = this;
            if (!this.state.otp) {
                this.setState({ validationError: "Please enter OTP" });
                return;
            }
            if (this.state.otp.length < 6 || this.state.otp.length > 6) {
                this.setState({ validationError: "Please enter valid OTP" });
                return;
            }
            var lead_data = parsed;
            if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
                this.setState({ validationError: "" });
                var extraParamsData = {};
                this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParamsData, function (exists) {
                    // to verify user entered otp
                    if (exists.code == 'invalid') {
                        _this3.setState({ error_message: exists.message });
                    } else {
                        if (exists.token) {
                            var data = {
                                'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopupOptVerified', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'Insurance-login-popup-opt-verified'
                            };
                            _gtm2.default.sendEvent({ data: data });
                            if (Object.keys(self.props.selected_plan).length > 0) {
                                self.props.generateInsuranceLead(self.props.selected_plan ? self.props.selected_plan.id : '', _this3.state.phoneNumber, lead_data, _this3.props.selectedLocation); // to create insurance lead for matrix
                            }
                            _this3.props.getInsurance(false, function (resp) {
                                // to get insurance plans
                                if (!resp.certificate) {
                                    if (_this3.props.isLead == 'proceed') {
                                        if (exists.user_exists) {
                                            // if (this.props.identifyUserClick == 'userClick') {
                                            //     this.props.history.push('/insurance/insurance-user-details')
                                            // } else {
                                            //     this.props.closeLeadPopup()
                                            // }
                                            _this3.props.closeLeadPopup(); // to close lead form
                                            _this3.props.history.push('/insurance/insurance-plan-view');
                                        } else {
                                            // if (this.props.identifyUserClick == 'userClick') {
                                            //     this.props.history.push('/insurance/insurance-user-details')
                                            // } else {
                                            //     this.props.closeLeadPopup()
                                            // }
                                            _this3.props.closeLeadPopup(); // to close lead form
                                            _this3.props.history.push('/insurance/insurance-plan-view');
                                        }
                                    } else {
                                        self.setState({ isLeadTrue: true });
                                        // if(document.getElementById('terms_condition')){
                                        //     document.getElementById('terms_condition').click()
                                        // }
                                    }
                                }
                            });
                        }
                    }
                });
            } else {
                this.setState({ validationError: "Please provide a valid number (10 digits)" });
            }
        }
    }, {
        key: '_handleKeyPress',
        value: function _handleKeyPress(e) {
            if (e.key === 'Enter') {
                this.verifyOTP(); // to verify user entered otp
            }
        }
    }, {
        key: '_handleContinuePress',
        value: function _handleContinuePress(e) {
            if (e.key === 'Enter') {
                if (!this.state.showOTP) {
                    this.submitOTPRequest(this.state.phoneNumber, '', true, false, 'one');
                }
            }
        }
    }, {
        key: 'editNumber',
        value: function editNumber() {
            var _this4 = this;

            var number = this.state.phoneNumber;

            document.getElementsByClassName('ins-form-slider')[0].scroll({ left: -999, behavior: 'smooth' });

            setTimeout(function () {
                _this4.setState({ validationError: "", showOTP: false, otp: "", phoneNumber: '' }, function () {
                    _this4.setState({ phoneNumber: number });
                    document.getElementById("number").focus();
                });
            }, 200);
        }
    }, {
        key: 'closeSelectFromProfile',
        value: function closeSelectFromProfile() {
            var threshold_max_age = void 0;
            var threshold_min_age = void 0;
            var errorMessage = void 0;

            if (this.props.selected_plan && this.props.selected_plan.threshold && this.props.selected_plan.threshold[0]) {
                if (this.props.is_child_only) {
                    threshold_max_age = this.props.selected_plan.threshold[0].child_max_age;
                    threshold_min_age = this.props.selected_plan.threshold[0].child_min_age;
                    errorMessage = 'The age of the selected member should be between ' + this.props.selected_plan.threshold[0].child_min_age + ' days and ' + this.props.selected_plan.threshold[0].child_max_age + ' years';
                } else {
                    threshold_max_age = this.props.selected_plan.threshold[0].max_age;
                    threshold_min_age = this.props.selected_plan.threshold[0].min_age;
                    errorMessage = 'The age of the selected member should be between ' + this.props.selected_plan.threshold[0].min_age + ' and ' + this.props.selected_plan.threshold[0].max_age + ' years';
                }
            }
            if (this.props.is_child_only) {
                if (this.state.selectedProfileAge > threshold_min_age && this.state.age < threshold_max_age) {
                    this.props.closePopup(this.state.profile_id, this.props.member_id, this.state.newprofile);
                } else {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: errorMessage });
                }
            }
            if (!this.props.is_child_only) {
                if (this.state.selectedProfileAge > threshold_min_age && this.state.selectedProfileAge < threshold_max_age) {
                    this.props.closePopup(this.state.profile_id, this.props.member_id, this.state.newprofile);
                } else {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: errorMessage });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.isSelectprofile) {
                var currentSelectedProfiles = [];
                this.props.currentSelectedInsuredMembersId.map(function (val, key) {
                    currentSelectedProfiles.push(val[key]);
                });
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('div', { className: 'cancel-overlay cancel-overlay-zindex', onClick: this.props.hideSelectProfilePopup.bind(this) }),
                    _react2.default.createElement(
                        'div',
                        { className: 'widget cancel-appointment-div cancel-popup onscreen-scroll' },
                        _react2.default.createElement(
                            'div',
                            { className: 'pop-top-heading' },
                            'My Family',
                            _react2.default.createElement(
                                'span',
                                { className: 'float-right', style: { cursor: 'pointer', marginRight: '10px' }, onClick: this.props.hideSelectProfilePopup.bind(this) },
                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rt-close.svg", style: { width: 14 } })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'widget-header action-screen-header pop-padding' },
                            _react2.default.createElement('p', { className: 'fw-500 cancel-appointment-head' })
                        ),
                        _react2.default.createElement('div', { className: 'terms-condition-div onscreen-scroll' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12' },
                            _react2.default.createElement(
                                'div',
                                { className: 'ins-form-radio insradio-on-popup' },
                                Object.entries(this.props.profiles).map(function (_ref) {
                                    var _ref2 = _slicedToArray(_ref, 2),
                                        key = _ref2[0],
                                        value = _ref2[1];

                                    if (currentSelectedProfiles.indexOf(parseInt(key)) == -1) {
                                        return _react2.default.createElement(
                                            'div',
                                            { key: key, className: 'dtl-radio' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'container-radio' },
                                                value.name,
                                                _react2.default.createElement('input', { type: 'radio', name: 'profile_id', value: '', id: key, 'data-param': 'profile_id', checked: this.state.profile_id === value.id, onChange: this.handleChange.bind(this, value.id, value, value.age) }),
                                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                                            )
                                        );
                                    }
                                }, this)
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'procedures-btn-pop', onClick: this.closeSelectFromProfile.bind(this) },
                            _react2.default.createElement(
                                'button',
                                { className: this.state.profile_id == '' ? 'fw-500 btn-disabled' : 'fw-500', disabled: this.state.profile_id == '' ? 'disabled' : '' },
                                'Done'
                            )
                        )
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: 'col-12 col-md-7  center-column' },
                    _react2.default.createElement('div', { className: 'cancel-overlay cancel-overlay-zindex ' + this.props.overlayClass, onClick: this.props.hideLoginPopup.bind(this) }),
                    _react2.default.createElement(
                        'section',
                        { className: 'mobile-verification-screen p-3' },
                        this.state.isLeadTrue ? _react2.default.createElement(
                            'div',
                            { className: 'insu-popup-container', onClick: this.props.closeLeadPopup.bind(this) },
                            _react2.default.createElement(
                                'div',
                                { className: 'insu-pop-up' },
                                _react2.default.createElement('img', { className: 'insPopUp', src: "/assets" + "/img/tec.svg" }),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'ins-main-pera-text' },
                                    'Request Submitted'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'ins-main-pera-sub-text' },
                                    'Thank you for showing interest in OPD Insurance. Our customer service executive will give you a call from 0124-6073XXX.'
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { className: 'insupopdonebtn', onClick: this.props.closeLeadPopup.bind(this) },
                                    'Done'
                                )
                            )
                        ) : _react2.default.createElement(
                            'div',
                            { className: 'widget no-shadow no-round sign-up-container widget cancel-appointment-div cancel-popup ' + this.props.popupClass },
                            _react2.default.createElement(
                                'span',
                                { className: 'float-right', style: { cursor: 'pointer' }, onClick: this.props.hideLoginPopup.bind(this) },
                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rt-close.svg", style: { width: 14 } })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'ins-form-slider' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'one' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget-header text-center mv-header' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'fw-500 text-md sign-up-mbl-text', style: this.props.popupClass != '' ? { color: '#fff' } : {} },
                                            'Sounds too good to be true !! But it is ! Only docprime members get to access'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget-content text-center' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'form-group mobile-field sup-input-pdng' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'adon-group enter-mobile-number' },
                                                _react2.default.createElement('input', { type: 'number', id: 'number', className: 'fc-input text-center', placeholder: '10 digit mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this), disabled: this.state.showOTP ? true : false })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'errorMessage m-0 mb-2' },
                                            this.state.error_message
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'errorMessage m-0 mb-2' },
                                            this.state.validationError
                                        ),
                                        _react2.default.createElement(
                                            _react2.default.Fragment,
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'text-center' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, false, true, false, 'one'), disabled: this.props.otp_request_sent, className: 'v-btn v-btn-primary btn-sm lg-sms-btn btn-grdnt' },
                                                    'Let\u2019s get you in'
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'two' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget-header text-center mv-header' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'fw-500 text-md sign-up-mbl-text', style: this.props.popupClass != '' ? { color: '#fff' } : {} },
                                            'Enter the OTP we\u2019ve sent to your mobile number'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget-content text-center' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'form-group mobile-field sup-input-pdng' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'adon-group enter-mobile-number' },
                                                _react2.default.createElement('input', { type: 'number', id: 'number', className: 'fc-input text-center', placeholder: '10 digit mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this), disabled: this.state.showOTP ? true : false }),
                                                _react2.default.createElement(
                                                    'a',
                                                    { className: 'ins-num-edit', onClick: this.editNumber.bind(this) },
                                                    'Edit'
                                                )
                                            ),
                                            this.state.showOTP ? _react2.default.createElement(
                                                'div',
                                                { className: 'adon-group enter-mobile-number' },
                                                _react2.default.createElement('br', null),
                                                _react2.default.createElement('br', null),
                                                _react2.default.createElement('input', { type: 'number', className: 'fc-input text-center', placeholder: 'Enter OTP', value: this.state.otp, onChange: this.inputHandler.bind(this), name: 'otp', onKeyPress: this._handleKeyPress.bind(this) }),
                                                this.state.otpTimeout ? "" : _react2.default.createElement(
                                                    'div',
                                                    { className: 'd-flex align-items-start justify-content-between' },
                                                    _react2.default.createElement(
                                                        'a',
                                                        { className: 'resendOtp', style: { fontSize: '12px' }, onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, true, this.state.smsBtnType ? false : true, !this.state.smsBtnType ? false : true, 'one') },
                                                        this.state.smsBtnType ? 'Prefer we WhatsApp it to you?' : 'Send via SMS'
                                                    ),
                                                    this.state.enableOtpRequest ? '' : _react2.default.createElement(
                                                        'a',
                                                        { className: 'resendOtp ins-otp-resend', onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, true, this.state.smsBtnType ? true : false, !this.state.smsBtnType ? true : false, 'one') },
                                                        'Resend'
                                                    )
                                                )
                                            ) : ""
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'errorMessage m-0 mb-2' },
                                            this.state.error_message
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'errorMessage m-0 mb-2' },
                                            this.state.validationError
                                        ),
                                        this.state.showOTP ? _react2.default.createElement(
                                            'div',
                                            { className: 'text-center' },
                                            _react2.default.createElement(
                                                'button',
                                                { onClick: this.verifyOTP.bind(this), disabled: this.props.submit_otp, className: 'btn-grdnt v-btn v-btn-primary btn-sm' },
                                                'Access Now'
                                            )
                                        ) : _react2.default.createElement(
                                            _react2.default.Fragment,
                                            null,
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'text-center' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, false, true, false), disabled: this.props.otp_request_sent, className: 'v-btn v-btn-primary btn-sm lg-sms-btn btn-grdnt' },
                                                    'Let\u2019s get you in'
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'text-center fw-500 p-3', style: this.props.popupClass != '' ? { fontSize: 12, color: '#fff' } : { fontSize: 12, color: '#8a8a8a' } },
                                'By proceeding, you hereby agree to the ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '/terms', target: '_blank', style: { color: 'var(--text--primary--color)' } },
                                    'End User Agreement'
                                ),
                                ' and ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '/privacy', target: '_blank', style: { color: 'var(--text--primary--color)' } },
                                    'Privacy Policy.'
                                )
                            )
                        )
                    )
                );
            }
        }
    }]);

    return InsurancePopup;
}(_react2.default.Component);

exports.default = InsurancePopup;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9pbnN1cmFuY2UvaW5zdXJhbmNlUG9wdXAuanMiXSwibmFtZXMiOlsicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiSW5zdXJhbmNlUG9wdXAiLCJwcm9wcyIsInN0YXRlIiwicHJvZmlsZV9pZCIsIm5ld3Byb2ZpbGUiLCJwaG9uZU51bWJlciIsInZhbGlkYXRpb25FcnJvciIsInNob3dPVFAiLCJvdHAiLCJvdHBUaW1lb3V0IiwiZXJyb3JfbWVzc2FnZSIsImlzTGVhZFRydWUiLCJzbXNCdG5UeXBlIiwic2VsZWN0ZWRQcm9maWxlQWdlIiwiYWdlIiwiZW5hYmxlT3RwUmVxdWVzdCIsInByb2ZpbGVpZCIsIm5ld1Byb2ZpbGUiLCJldmVudCIsIm5ld1Byb2ZpbGVOYW1lcyIsIm5ld05hbWUiLCJuYW1lIiwic3BsaXQiLCJ0ZW1wQXJyYXkiLCJsZW5ndGgiLCJzZWxmX2RhdGFfdmFsdWVzIiwibm9fbG5hbWUiLCJtaWRkbGVfbmFtZSIsImxhc3RfbmFtZSIsInNsaWNlIiwiam9pbiIsImV4YWN0UHJvZmlsZSIsImlzX2NoaWxkX29ubHkiLCJ0b2RheSIsIkRhdGUiLCJkZCIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJzdGFydERhdGUiLCJwYXJzZSIsImVuZERhdGUiLCJkb2IiLCJ0aW1lRGlmZiIsImRheXNEaWZmIiwiTWF0aCIsImZsb29yIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJudW1iZXIiLCJyZXNlbmRGbGFnIiwidmlhU21zIiwidmlhV2hhdHNhcHAiLCJmcm9tUG9wdXAiLCJsZWFkX2RhdGEiLCJsb2NhdGlvbiIsInNlYXJjaCIsIm1hdGNoIiwic2VuZE9UUCIsImVycm9yIiwiT2JqZWN0Iiwia2V5cyIsInNlbGVjdGVkX3BsYW4iLCJnZW5lcmF0ZUluc3VyYW5jZUxlYWQiLCJpZCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2Nyb2xsIiwibGVmdCIsImJlaGF2aW9yIiwicGFyc2VkIiwic2VsZiIsImV4dHJhUGFyYW1zRGF0YSIsInN1Ym1pdE9UUCIsImV4aXN0cyIsImNvZGUiLCJtZXNzYWdlIiwidG9rZW4iLCJzZWxlY3RlZExvY2F0aW9uIiwiZ2V0SW5zdXJhbmNlIiwicmVzcCIsImNlcnRpZmljYXRlIiwiaXNMZWFkIiwidXNlcl9leGlzdHMiLCJjbG9zZUxlYWRQb3B1cCIsImhpc3RvcnkiLCJwdXNoIiwia2V5IiwidmVyaWZ5T1RQIiwic3VibWl0T1RQUmVxdWVzdCIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJ0aHJlc2hvbGRfbWF4X2FnZSIsInRocmVzaG9sZF9taW5fYWdlIiwiZXJyb3JNZXNzYWdlIiwidGhyZXNob2xkIiwiY2hpbGRfbWF4X2FnZSIsImNoaWxkX21pbl9hZ2UiLCJtYXhfYWdlIiwibWluX2FnZSIsImNsb3NlUG9wdXAiLCJtZW1iZXJfaWQiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiaXNTZWxlY3Rwcm9maWxlIiwiY3VycmVudFNlbGVjdGVkUHJvZmlsZXMiLCJjdXJyZW50U2VsZWN0ZWRJbnN1cmVkTWVtYmVyc0lkIiwibWFwIiwidmFsIiwiaGlkZVNlbGVjdFByb2ZpbGVQb3B1cCIsImJpbmQiLCJjdXJzb3IiLCJtYXJnaW5SaWdodCIsIkFTU0VUU19CQVNFX1VSTCIsIndpZHRoIiwiZW50cmllcyIsInByb2ZpbGVzIiwiaW5kZXhPZiIsInBhcnNlSW50IiwiaGFuZGxlQ2hhbmdlIiwiY2xvc2VTZWxlY3RGcm9tUHJvZmlsZSIsIm92ZXJsYXlDbGFzcyIsImhpZGVMb2dpblBvcHVwIiwicG9wdXBDbGFzcyIsImNvbG9yIiwiaW5wdXRIYW5kbGVyIiwiX2hhbmRsZUNvbnRpbnVlUHJlc3MiLCJvdHBfcmVxdWVzdF9zZW50IiwiZWRpdE51bWJlciIsIl9oYW5kbGVLZXlQcmVzcyIsImZvbnRTaXplIiwic3VibWl0X290cCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUZBLElBQU1BLGNBQWNDLG1CQUFPQSxDQUFDLDBEQUFSLENBQXBCOztJQUlNQyxjOzs7QUFDRiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx3QkFBWSxFQURIO0FBRVRDLHdCQUFZLEVBRkg7QUFHVEMseUJBQWEsRUFISjtBQUlUQyw2QkFBaUIsRUFKUjtBQUtUQyxxQkFBUyxLQUxBO0FBTVRDLGlCQUFLLEVBTkk7QUFPVEMsd0JBQVksS0FQSDtBQVFUQywyQkFBZSxFQVJOO0FBU1RDLHdCQUFZLEtBVEg7QUFVVEMsd0JBQVksSUFWSDtBQVdUQyxnQ0FBbUIsRUFYVjtBQVlUQyxpQkFBSSxFQVpLO0FBYVRDLDhCQUFpQjtBQWJSLFNBQWI7QUFGZTtBQWlCbEI7Ozs7cUNBQ1lDLFMsRUFBV0MsVSxFQUFXSixrQixFQUFvQkssSyxFQUFPO0FBQzFELGdCQUFJQyxrQkFBa0IsRUFBdEI7QUFDQSxnQkFBSUMsVUFBVUgsV0FBV0ksSUFBWCxDQUFnQkMsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBZDtBQUNBLGdCQUFJQyxrQkFBSjtBQUNBLGdCQUFJSCxRQUFRSSxNQUFSLElBQWtCLENBQXRCLEVBQXlCO0FBQ3JCTCxnQ0FBZ0JFLElBQWhCLEdBQXVCRCxRQUFRLENBQVIsQ0FBdkI7QUFDQSxvQkFBSSxDQUFDLEtBQUtuQixLQUFMLENBQVd3QixnQkFBWCxDQUE0QkMsUUFBakMsRUFBMkM7QUFDdkNQLG9DQUFnQlEsV0FBaEIsR0FBOEIsRUFBOUI7QUFDQVIsb0NBQWdCUyxTQUFoQixHQUE0QlIsUUFBUSxDQUFSLENBQTVCO0FBQ0gsaUJBSEQsTUFHTztBQUNIRCxvQ0FBZ0JR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ZEo7QUE1Q0osNkJBSEo7QUFzSEk7QUFBQTtBQUFBLGtDQUFHLFdBQVUsd0JBQWIsRUFBc0MsT0FBTyxLQUFLM0ksS0FBTCxDQUFXdUksVUFBWCxJQUF5QixFQUF6QixHQUE4QixFQUFFTyxVQUFVLEVBQVosRUFBZ0JOLE9BQU8sTUFBdkIsRUFBOUIsR0FBZ0UsRUFBRU0sVUFBVSxFQUFaLEVBQWdCTixPQUFPLFNBQXZCLEVBQTdHO0FBQUE7QUFBeUw7QUFBQTtBQUFBLHNDQUFHLE1BQUssUUFBUixFQUFpQixRQUFPLFFBQXhCLEVBQWlDLE9BQU8sRUFBRUEsb0NBQUYsRUFBeEM7QUFBQTtBQUFBLGlDQUF6TDtBQUFBO0FBQXVTO0FBQUE7QUFBQSxzQ0FBRyxNQUFLLFVBQVIsRUFBbUIsUUFBTyxRQUExQixFQUFtQyxPQUFPLEVBQUVBLG9DQUFGLEVBQTFDO0FBQUE7QUFBQTtBQUF2UztBQXRISjtBQVpaO0FBSEosaUJBREo7QUEySUg7QUFDSjs7OztFQS9hd0JRLGdCQUFNQyxTOztrQkFpYnBCbEosYyIsImZpbGUiOiIyNy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBJbnN1cmFuY2VQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcm9maWxlX2lkOiAnJyxcbiAgICAgICAgICAgIG5ld3Byb2ZpbGU6IHt9LFxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICcnLFxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yOiAnJyxcbiAgICAgICAgICAgIHNob3dPVFA6IGZhbHNlLFxuICAgICAgICAgICAgb3RwOiBcIlwiLFxuICAgICAgICAgICAgb3RwVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcl9tZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIGlzTGVhZFRydWU6IGZhbHNlLFxuICAgICAgICAgICAgc21zQnRuVHlwZTogbnVsbCxcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvZmlsZUFnZTonJyxcbiAgICAgICAgICAgIGFnZTonJyxcbiAgICAgICAgICAgIGVuYWJsZU90cFJlcXVlc3Q6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UocHJvZmlsZWlkLCBuZXdQcm9maWxlLHNlbGVjdGVkUHJvZmlsZUFnZSwgZXZlbnQpIHtcbiAgICAgICAgbGV0IG5ld1Byb2ZpbGVOYW1lcyA9IHt9XG4gICAgICAgIGxldCBuZXdOYW1lID0gbmV3UHJvZmlsZS5uYW1lLnNwbGl0KFwiIFwiKVxuICAgICAgICBsZXQgdGVtcEFycmF5XG4gICAgICAgIGlmIChuZXdOYW1lLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubmFtZSA9IG5ld05hbWVbMF1cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzLm5vX2xuYW1lKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLm1pZGRsZV9uYW1lID0gJydcbiAgICAgICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubGFzdF9uYW1lID0gbmV3TmFtZVsxXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubWlkZGxlX25hbWUgPSAnJ1xuICAgICAgICAgICAgICAgIG5ld1Byb2ZpbGVOYW1lcy5sYXN0X25hbWUgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5ld05hbWUubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIG5ld1Byb2ZpbGVOYW1lcy5uYW1lID0gbmV3TmFtZVswXVxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLnNlbGZfZGF0YV92YWx1ZXMubm9fbG5hbWUpIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubWlkZGxlX25hbWUgPSBuZXdOYW1lWzFdXG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLmxhc3RfbmFtZSA9IG5ld05hbWVbMl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLm1pZGRsZV9uYW1lID0gJydcbiAgICAgICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubGFzdF9uYW1lID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuZXdOYW1lLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIHRlbXBBcnJheSA9IG5ld05hbWUuc2xpY2UoMiwgbmV3TmFtZS5sZW5ndGgpXG4gICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubmFtZSA9IG5ld05hbWVbMF1cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzLm5vX2xuYW1lKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLm1pZGRsZV9uYW1lID0gbmV3TmFtZVsxXVxuICAgICAgICAgICAgICAgIG5ld1Byb2ZpbGVOYW1lcy5sYXN0X25hbWUgPSB0ZW1wQXJyYXkuam9pbignICcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1Byb2ZpbGVOYW1lcy5taWRkbGVfbmFtZSA9ICcnXG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLmxhc3RfbmFtZSA9ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubmFtZSA9IG5ld05hbWVbMF1cbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5zZWxmX2RhdGFfdmFsdWVzLm5vX2xuYW1lKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLm1pZGRsZV9uYW1lID0gJydcbiAgICAgICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubGFzdF9uYW1lID0gJydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvZmlsZU5hbWVzLm1pZGRsZV9uYW1lID0gJydcbiAgICAgICAgICAgICAgICBuZXdQcm9maWxlTmFtZXMubGFzdF9uYW1lID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZXhhY3RQcm9maWxlID0geyAuLi5uZXdQcm9maWxlLCAuLi5uZXdQcm9maWxlTmFtZXMgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmlzX2NoaWxkX29ubHkpe1xuICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgICAgICB2YXIgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxuICAgICAgICAgICAgdmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgICAgICB0b2RheSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IERhdGUucGFyc2UodG9kYXkpO1xuICAgICAgICAgICAgdmFyIGVuZERhdGUgPSBEYXRlLnBhcnNlKG5ld1Byb2ZpbGUuZG9iKTtcbiAgICAgICAgICAgIHZhciB0aW1lRGlmZiA9IHN0YXJ0RGF0ZSAtIGVuZERhdGU7XG4gICAgICAgICAgICBsZXQgZGF5c0RpZmYgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb2ZpbGVfaWQ6IHByb2ZpbGVpZCwgbmV3cHJvZmlsZTogZXhhY3RQcm9maWxlLHNlbGVjdGVkUHJvZmlsZUFnZTpkYXlzRGlmZixhZ2U6bmV3UHJvZmlsZS5hZ2V9KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb2ZpbGVfaWQ6IHByb2ZpbGVpZCwgbmV3cHJvZmlsZTogZXhhY3RQcm9maWxlLHNlbGVjdGVkUHJvZmlsZUFnZTpzZWxlY3RlZFByb2ZpbGVBZ2UsYWdlOm5ld1Byb2ZpbGUuYWdlfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnB1dEhhbmRsZXIoZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T1RQICYmIGUudGFyZ2V0Lm5hbWUgPT0gJ3Bob25lTnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsIHZhbGlkYXRpb25FcnJvcjogXCJcIiwgc2hvd09UUDogZmFsc2UsIG90cDogXCJcIiB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdE9UUFJlcXVlc3QobnVtYmVyLCByZXNlbmRGbGFnID0gZmFsc2UsIHZpYVNtcywgdmlhV2hhdHNhcHAsIGZyb21Qb3B1cD1udWxsKSB7IC8vIHRvIGdlbmVyYXRlIG90cFxuICAgICAgICBsZXQgbGVhZF9kYXRhID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmIChudW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiXCIgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE9UUChudW1iZXIsIHZpYVNtcywgdmlhV2hhdHNhcHAsJ2luc3VyYW5jZS1sb2dpbicsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIkNvdWxkIG5vdCBnZW5lcmF0ZSBPVFAuXCIgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdlbmVyYXRlSW5zdXJhbmNlTGVhZCh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4gPyB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4uaWQgOiAnJywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgbGVhZF9kYXRhKSAvLyB0byBjcmVhdGUgaW5zdXJhbmNlIGxlYWQgZm9yIG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdJbnN1cmFuY2VMb2dpblBvcHVwQ29udGludWUnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ0luc3VyYW5jZS1sb2dpbi1wb3B1cC1jb250aW51ZS1jbGljaycsICdtb2RlJzogdmlhU21zID8gJ3ZpYVNtcycgOiB2aWFXaGF0c2FwcCA/ICd2aWFXaGF0c2FwcCcgOiAnJywgJ21vYmlsZU5vJzogdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIGlmKHZpYVdoYXRzYXBwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZU90cFJlcXVlc3Q6dHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlT3RwUmVxdWVzdDpmYWxzZX0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPVFA6IHRydWUsIG90cFRpbWVvdXQ6IHRydWUsIHNtc0J0blR5cGU6IHZpYVNtcyA/IHRydWUgOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdHBUaW1lb3V0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwMClcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlT3RwUmVxdWVzdDpmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9LCA2MDAwMClcblxuICAgICAgICAgICAgICAgICAgICBpZihmcm9tUG9wdXAgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZnJvbVBvcHVwPT0nb25lJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJylbMF0uc2Nyb2xsKHsgbGVmdDogOTk5LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnMtZm9ybS1zbGlkZXInKVswXS5zY3JvbGwoeyBsZWZ0OiAtOTk5LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbnVtYmVyICgxMCBkaWdpdHMpXCIgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZlcmlmeU9UUCgpIHsgLy92ZXJpZnkgdXNlciBlbnRlcmVkIG90cFxuICAgICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUub3RwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBlbnRlciBPVFBcIiB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5vdHAubGVuZ3RoIDwgNiB8fCB0aGlzLnN0YXRlLm90cC5sZW5ndGggPiA2KXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIGVudGVyIHZhbGlkIE9UUFwiIH0pXG4gICAgICAgICAgICByZXR1cm4gICBcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGVhZF9kYXRhID0gcGFyc2VkXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBob25lTnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiIH0pXG4gICAgICAgICAgICBsZXQgZXh0cmFQYXJhbXNEYXRhID0ge31cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3VibWl0T1RQKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRoaXMuc3RhdGUub3RwLCBleHRyYVBhcmFtc0RhdGEsIChleGlzdHMpID0+IHsgLy8gdG8gdmVyaWZ5IHVzZXIgZW50ZXJlZCBvdHBcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzLmNvZGUgPT0gJ2ludmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiBleGlzdHMubWVzc2FnZSB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSW5zdXJhbmNlTG9naW5Qb3B1cE9wdFZlcmlmaWVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdJbnN1cmFuY2UtbG9naW4tcG9wdXAtb3B0LXZlcmlmaWVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzZWxmLnByb3BzLnNlbGVjdGVkX3BsYW4pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLmdlbmVyYXRlSW5zdXJhbmNlTGVhZChzZWxmLnByb3BzLnNlbGVjdGVkX3BsYW4gPyBzZWxmLnByb3BzLnNlbGVjdGVkX3BsYW4uaWQgOiAnJywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgbGVhZF9kYXRhLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIC8vIHRvIGNyZWF0ZSBpbnN1cmFuY2UgbGVhZCBmb3IgbWF0cml4XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldEluc3VyYW5jZShmYWxzZSwgKHJlc3ApID0+IHsgLy8gdG8gZ2V0IGluc3VyYW5jZSBwbGFuc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcC5jZXJ0aWZpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0xlYWQgPT0gJ3Byb2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RzLnVzZXJfZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuaWRlbnRpZnlVc2VyQ2xpY2sgPT0gJ3VzZXJDbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXVzZXItZGV0YWlscycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5jbG9zZUxlYWRQb3B1cCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAoKSAvLyB0byBjbG9zZSBsZWFkIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtcGxhbi12aWV3JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuaWRlbnRpZnlVc2VyQ2xpY2sgPT0gJ3VzZXJDbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXVzZXItZGV0YWlscycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5jbG9zZUxlYWRQb3B1cCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAoKSAvLyB0byBjbG9zZSBsZWFkIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9pbnN1cmFuY2UtcGxhbi12aWV3JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyBpc0xlYWRUcnVlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVybXNfY29uZGl0aW9uJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXJtc19jb25kaXRpb24nKS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIG51bWJlciAoMTAgZGlnaXRzKVwiIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMudmVyaWZ5T1RQKCkgLy8gdG8gdmVyaWZ5IHVzZXIgZW50ZXJlZCBvdHBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVDb250aW51ZVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd09UUCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0T1RQUmVxdWVzdCh0aGlzLnN0YXRlLnBob25lTnVtYmVyLCcnLHRydWUsZmFsc2UsJ29uZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0TnVtYmVyKCkge1xuICAgICAgICBsZXQgbnVtYmVyID0gdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJylbMF0uc2Nyb2xsKHsgbGVmdDogLTk5OSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiwgc2hvd09UUDogZmFsc2UsIG90cDogXCJcIiwgcGhvbmVOdW1iZXI6ICcnIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGhvbmVOdW1iZXI6IG51bWJlciB9KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyXCIpLmZvY3VzKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgfVxuICAgIGNsb3NlU2VsZWN0RnJvbVByb2ZpbGUoKXtcbiAgICAgICAgbGV0IHRocmVzaG9sZF9tYXhfYWdlIFxuICAgICAgICBsZXQgdGhyZXNob2xkX21pbl9hZ2VcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGQgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXSl7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLmlzX2NoaWxkX29ubHkpe1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZF9tYXhfYWdlID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5jaGlsZF9tYXhfYWdlXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkX21pbl9hZ2UgPSB0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4udGhyZXNob2xkWzBdLmNoaWxkX21pbl9hZ2VcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBgVGhlIGFnZSBvZiB0aGUgc2VsZWN0ZWQgbWVtYmVyIHNob3VsZCBiZSBiZXR3ZWVuICR7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5jaGlsZF9taW5fYWdlfSBkYXlzIGFuZCAke3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0uY2hpbGRfbWF4X2FnZX0geWVhcnNgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGRfbWF4X2FnZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWF4X2FnZVxuICAgICAgICAgICAgICAgIHRocmVzaG9sZF9taW5fYWdlID0gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5taW5fYWdlXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gYFRoZSBhZ2Ugb2YgdGhlIHNlbGVjdGVkIG1lbWJlciBzaG91bGQgYmUgYmV0d2VlbiAke3RoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi50aHJlc2hvbGRbMF0ubWluX2FnZX0gYW5kICR7dGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLnRocmVzaG9sZFswXS5tYXhfYWdlfSB5ZWFyc2BcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmlzX2NoaWxkX29ubHkpe1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFByb2ZpbGVBZ2UgPiB0aHJlc2hvbGRfbWluX2FnZSAmJiB0aGlzLnN0YXRlLmFnZSA8IHRocmVzaG9sZF9tYXhfYWdlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlUG9wdXAodGhpcy5zdGF0ZS5wcm9maWxlX2lkLCB0aGlzLnByb3BzLm1lbWJlcl9pZCwgdGhpcy5zdGF0ZS5uZXdwcm9maWxlKSAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogZXJyb3JNZXNzYWdlIH0pICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMucHJvcHMuaXNfY2hpbGRfb25seSl7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkUHJvZmlsZUFnZSA+IHRocmVzaG9sZF9taW5fYWdlICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRQcm9maWxlQWdlIDwgdGhyZXNob2xkX21heF9hZ2Upe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VQb3B1cCh0aGlzLnN0YXRlLnByb2ZpbGVfaWQsIHRoaXMucHJvcHMubWVtYmVyX2lkLCB0aGlzLnN0YXRlLm5ld3Byb2ZpbGUpICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IGVycm9yTWVzc2FnZSB9KSAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc1NlbGVjdHByb2ZpbGUpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50U2VsZWN0ZWRQcm9maWxlcyA9IFtdXG4gICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZEluc3VyZWRNZW1iZXJzSWQubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzLnB1c2godmFsW2tleV0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZVNlbGVjdFByb2ZpbGVQb3B1cC5iaW5kKHRoaXMpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXAgb25zY3JlZW4tc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC10b3AtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IEZhbWlseVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fSBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVTZWxlY3RQcm9maWxlUG9wdXAuYmluZCh0aGlzKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ydC1jbG9zZS5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE0IH19IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgYWN0aW9uLXNjcmVlbi1oZWFkZXIgcG9wLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgY2FuY2VsLWFwcG9pbnRtZW50LWhlYWRcIj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybXMtY29uZGl0aW9uLWRpdiBvbnNjcmVlbi1zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLXJhZGlvIGluc3JhZGlvLW9uLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLnByb2ZpbGVzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzLmluZGV4T2YocGFyc2VJbnQoa2V5KSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcm9maWxlX2lkXCIgdmFsdWU9JycgaWQ9e2tleX0gZGF0YS1wYXJhbT0ncHJvZmlsZV9pZCcgY2hlY2tlZD17dGhpcy5zdGF0ZS5wcm9maWxlX2lkID09PSB2YWx1ZS5pZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgdmFsdWUuaWQsIHZhbHVlLHZhbHVlLmFnZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9jZWR1cmVzLWJ0bi1wb3BcIiBvbkNsaWNrPXt0aGlzLmNsb3NlU2VsZWN0RnJvbVByb2ZpbGUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUucHJvZmlsZV9pZCA9PSAnJyA/ICdmdy01MDAgYnRuLWRpc2FibGVkJyA6ICdmdy01MDAnfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5wcm9maWxlX2lkID09ICcnID8gJ2Rpc2FibGVkJyA6ICcnfT5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03ICBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4ICR7dGhpcy5wcm9wcy5vdmVybGF5Q2xhc3N9YH0gb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTG9naW5Qb3B1cC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vYmlsZS12ZXJpZmljYXRpb24tc2NyZWVuIHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMZWFkVHJ1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdS1wb3B1cC1jb250YWluZXJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTGVhZFBvcHVwLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN1LXBvcC11cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5zUG9wVXBcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy90ZWMuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLW1haW4tcGVyYS10ZXh0XCI+UmVxdWVzdCBTdWJtaXR0ZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLW1haW4tcGVyYS1zdWItdGV4dFwiPlRoYW5rIHlvdSBmb3Igc2hvd2luZyBpbnRlcmVzdCBpbiBPUEQgSW5zdXJhbmNlLiBPdXIgY3VzdG9tZXIgc2VydmljZSBleGVjdXRpdmUgd2lsbCBnaXZlIHlvdSBhIGNhbGwgZnJvbSAwMTI0LTYwNzNYWFguPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5zdXBvcGRvbmVidG5cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTGVhZFBvcHVwLmJpbmQodGhpcyl9PkRvbmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHdpZGdldCBuby1zaGFkb3cgbm8tcm91bmQgc2lnbi11cC1jb250YWluZXIgd2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwICR7dGhpcy5wcm9wcy5wb3B1cENsYXNzfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVMb2dpblBvcHVwLmJpbmQodGhpcyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcnQtY2xvc2Uuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCB9fSAvPjwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1zbGlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgbXYtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aDMgY2xhc3NOYW1lPVwic2lnbi1jb3Vwb24gZnctNzAwXCI+UGxlYXNlIGxvZ2luIHRvIGNvbnRpbnVlPC9oMz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCIgc3R5bGU9e3RoaXMucHJvcHMucG9wdXBDbGFzcyAhPSAnJyA/IHsgY29sb3I6ICcjZmZmJyB9IDoge319ID5Tb3VuZHMgdG9vIGdvb2QgdG8gYmUgdHJ1ZSAhISBCdXQgaXQgaXMgISBPbmx5IGRvY3ByaW1lIG1lbWJlcnMgZ2V0IHRvIGFjY2VzczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlkZW50aWZ5VXNlckNsaWNrID09ICd1c2VyQ2xpY2snID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgc2lnbi11cC1tYmwtdGV4dFwiIHN0eWxlPXt0aGlzLnByb3BzLnBvcHVwQ2xhc3MgIT0gJycgPyB7IGNvbG9yOiAnI2ZmZicgfSA6IHt9fSA+U291bmRzIHRvbyBnb29kIHRvIGJlIHRydWUgISEgQnV0IGl0IGlzICEgT25seSBkb2NwcmltZSBtZW1iZXJzIGdldCB0byBhY2Nlc3M8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5pZGVudGlmeVVzZXJDbGljayA9PSAnQXV0b0NsaWNrJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgc2lnbi11cC1tYmwtdGV4dFwiIHN0eWxlPXt0aGlzLnByb3BzLnBvcHVwQ2xhc3MgIT0gJycgPyB7IGNvbG9yOiAnI2ZmZicgfSA6IHt9fSA+RW50ZXIgeW91ciBhY2Nlc3MgY29kZSB3ZeKAmXZlIHNlbnQgdG8geW91ciBtb2JpbGUgbnVtYmVyPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGg0IGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kIHNpZ24tdXAtbWJsLXRleHRcIiBzdHlsZT17dGhpcy5wcm9wcy5wb3B1cENsYXNzICE9ICcnID8geyBjb2xvcjogJyNmZmYnIH0gOiB7fX0gPlBsZWFzZSBFbnRlciB5b3VyIE1vYmlsZSBOdW1iZXIgdG8gcHJvY2VlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS12ZXJpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJpZmktbW9iLWlvY24gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbW9iLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtb2JpbGUtZmllbGQgc3VwLWlucHV0LXBkbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgZW50ZXItbW9iaWxlLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXQgdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIjEwIGRpZ2l0IG1vYmlsZSBudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZUNvbnRpbnVlUHJlc3MuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2hvd09UUCA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlIG0tMCBtYi0yXCI+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uRXJyb3J9PC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgZmFsc2UsIHRydWUsIGZhbHNlLCdvbmUnKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMub3RwX3JlcXVlc3Rfc2VudH0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc20gbGctc21zLWJ0biBidG4tZ3JkbnRcIj5MZXTigJlzIGdldCB5b3UgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLGZhbHNlLGZhbHNlLHRydWUpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5vdHBfcmVxdWVzdF9zZW50fSBjbGFzc05hbWU9XCJ2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1zbSBsZy13dHNwLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIndodHNwLWljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsnL2ltZy93YS1sb2dvLWdyLnN2Zyd9IC8+VmVyaWZ5IFZpYSBXaGF0c2FwcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIG12LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGgzIGNsYXNzTmFtZT1cInNpZ24tY291cG9uIGZ3LTcwMFwiPlBsZWFzZSBsb2dpbiB0byBjb250aW51ZTwvaDM+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgc2lnbi11cC1tYmwtdGV4dFwiIHN0eWxlPXt0aGlzLnByb3BzLnBvcHVwQ2xhc3MgIT0gJycgPyB7IGNvbG9yOiAnI2ZmZicgfSA6IHt9fSA+RW50ZXIgdGhlIE9UUCB3ZeKAmXZlIHNlbnQgdG8geW91ciBtb2JpbGUgbnVtYmVyPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWRlbnRpZnlVc2VyQ2xpY2sgPT0gJ3VzZXJDbGljaycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCIgc3R5bGU9e3RoaXMucHJvcHMucG9wdXBDbGFzcyAhPSAnJyA/IHsgY29sb3I6ICcjZmZmJyB9IDoge319ID5Tb3VuZHMgdG9vIGdvb2QgdG8gYmUgdHJ1ZSAhISBCdXQgaXQgaXMgISBPbmx5IGRvY3ByaW1lIG1lbWJlcnMgZ2V0IHRvIGFjY2VzczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmlkZW50aWZ5VXNlckNsaWNrID09ICdBdXRvQ2xpY2snID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCIgc3R5bGU9e3RoaXMucHJvcHMucG9wdXBDbGFzcyAhPSAnJyA/IHsgY29sb3I6ICcjZmZmJyB9IDoge319ID5FbnRlciB5b3VyIGFjY2VzcyBjb2RlIHdl4oCZdmUgc2VudCB0byB5b3VyIG1vYmlsZSBudW1iZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgc2lnbi11cC1tYmwtdGV4dFwiIHN0eWxlPXt0aGlzLnByb3BzLnBvcHVwQ2xhc3MgIT0gJycgPyB7IGNvbG9yOiAnI2ZmZicgfSA6IHt9fSA+UGxlYXNlIEVudGVyIHlvdXIgTW9iaWxlIE51bWJlciB0byBwcm9jZWVkPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXZlcmlmaWNhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcmlmaS1tb2ItaW9jbiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tb2Iuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1vYmlsZS1maWVsZCBzdXAtaW5wdXQtcGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRvbi1ncm91cCBlbnRlci1tb2JpbGUtbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmYy1pbnB1dCB0ZXh0LWNlbnRlclwiIHBsYWNlaG9sZGVyPVwiMTAgZGlnaXQgbW9iaWxlIG51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lTnVtYmVyfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cInBob25lTnVtYmVyXCIgb25LZXlQcmVzcz17dGhpcy5faGFuZGxlQ29udGludWVQcmVzcy5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zaG93T1RQID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbnMtbnVtLWVkaXRcIiBvbkNsaWNrPXt0aGlzLmVkaXROdW1iZXIuYmluZCh0aGlzKX0+RWRpdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd09UUCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBPVFBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5vdHB9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwib3RwXCIgb25LZXlQcmVzcz17dGhpcy5faGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3RwVGltZW91dCA/IFwiXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNlbmRPdHBcIiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19IG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IGZhbHNlIDogdHJ1ZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IGZhbHNlIDogdHJ1ZSwgJ29uZScpfT57dGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gJ1ByZWZlciB3ZSBXaGF0c0FwcCBpdCB0byB5b3U/JyA6ICdTZW5kIHZpYSBTTVMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbmFibGVPdHBSZXF1ZXN0PycnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlc2VuZE90cCBpbnMtb3RwLXJlc2VuZFwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgJ29uZScpfT5SZXNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlIG0tMCBtYi0yXCI+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uRXJyb3J9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd09UUCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy52ZXJpZnlPVFAuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuc3VibWl0X290cH0gY2xhc3NOYW1lPVwiYnRuLWdyZG50IHYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXNzIE5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIGZhbHNlLCB0cnVlLCBmYWxzZSl9IGRpc2FibGVkPXt0aGlzLnByb3BzLm90cF9yZXF1ZXN0X3NlbnR9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGxnLXNtcy1idG4gYnRuLWdyZG50XCI+TGV04oCZcyBnZXQgeW91IGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlcixmYWxzZSxmYWxzZSx0cnVlKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMub3RwX3JlcXVlc3Rfc2VudH0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc20gbGctd3RzcC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3aHRzcC1pY29cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArJy9pbWcvd2EtbG9nby1nci5zdmcnfSAvPlZlcmlmeSBWaWEgV2hhdHNhcHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZ3LTUwMCBwLTNcIiBzdHlsZT17dGhpcy5wcm9wcy5wb3B1cENsYXNzICE9ICcnID8geyBmb250U2l6ZTogMTIsIGNvbG9yOiAnI2ZmZicgfSA6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogJyM4YThhOGEnIH19ID5CeSBwcm9jZWVkaW5nLCB5b3UgaGVyZWJ5IGFncmVlIHRvIHRoZSA8YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5FbmQgVXNlciBBZ3JlZW1lbnQ8L2E+IGFuZCA8YSBocmVmPVwiL3ByaXZhY3lcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0gPlByaXZhY3kgUG9saWN5LjwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5zdXJhbmNlUG9wdXAiXSwic291cmNlUm9vdCI6IiJ9