(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./dev/js/components/vipClub/vipClubPopup.js":
/*!***************************************************!*\
  !*** ./dev/js/components/vipClub/vipClubPopup.js ***!
  \***************************************************/
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

var VipLoginPopup = function (_React$Component) {
    _inherits(VipLoginPopup, _React$Component);

    function VipLoginPopup(props) {
        _classCallCheck(this, VipLoginPopup);

        var _this = _possibleConstructorReturn(this, (VipLoginPopup.__proto__ || Object.getPrototypeOf(VipLoginPopup)).call(this, props));

        _this.state = {
            profile_id: '',
            newprofile: {},
            phoneNumber: _this.props.user_loggedIn_number ? _this.props.user_loggedIn_number : '',
            validationError: '',
            showOTP: false,
            otp: "",
            otpTimeout: false,
            error_message: '',
            isLeadTrue: false,
            smsBtnType: null,
            selectedProfileAge: '',
            age: '',
            enableOtpRequest: false,
            user_name: '',
            search_city: '',
            filtered_city_list: [],
            showCitySearchPopup: false,
            selectedCity: ''
        };
        return _this;
    }

    _createClass(VipLoginPopup, [{
        key: 'handleChange',
        value: function handleChange(profileid, newProfile, selectedProfileAge, event) {
            // let newProfileNames = {}
            // let newName = newProfile.name.split(" ")
            // let tempArray
            // if (newName.length == 2) {
            //     newProfileNames.name = newName[0]
            //     newProfileNames.last_name = newName[1]
            // } else if (newName.length > 2) {
            //     tempArray = newName.slice(1, newName.length)
            //     newProfileNames.name = newName[0]
            //     newProfileNames.last_name = tempArray.join(' ')
            // } else {
            //     newProfileNames.name = newName[0]
            //     newProfileNames.last_name = ''
            // }
            // let exactProfile = { ...newProfile, ...newProfileNames }
            this.setState({ profile_id: profileid, newprofile: newProfile, selectedProfileAge: selectedProfileAge, age: newProfile.age });
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            if (this.state.showOTP && e.target.name == 'phoneNumber') {
                var _setState;

                this.setState((_setState = {}, _defineProperty(_setState, e.target.name, e.target.value), _defineProperty(_setState, 'validationError', ""), _defineProperty(_setState, 'showOTP', false), _defineProperty(_setState, 'otp', ""), _defineProperty(_setState, 'error_message', ''), _setState));
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
            /*if (this.state.user_name == '') {
                SnackBar.show({ pos: 'bottom-center', text: 'Enter your name' })
                return
            }*/

            var lead_data = queryString.parse(this.props.location.search);
            if (number.match(/^[56789]{1}[0-9]{9}$/)) {

                this.setState({ validationError: "" });
                /*if(this.props.user_cities && this.props.user_cities.length && !this.state.selectedCity){
                    this.setState({ validationError: "Please select the city", error_message: '' })
                    return;
                }*/
                this.props.sendOTP(number, viaSms, viaWhatsapp, 'insurance-login', function (error) {
                    // to generate otp
                    if (error) {
                        // this.setState({ validationError: "Could not generate OTP." })
                    } else {
                        // if (Object.keys(this.props.selected_plan).length > 0) {
                        //     this.props.generateInsuranceLead(this.props.selected_plan ? this.props.selected_plan.id : '', this.state.phoneNumber, lead_data)
                        // }
                        var data = {
                            'Category': 'ConsumerApp', 'Action': 'VipClubLoginPopupContinue', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'vip-login-popup-continue-click', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : '', 'mobileNo': _this2.state.phoneNumber
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

            // to verify entered otp
            var parsed = queryString.parse(this.props.location.search);
            var self = this;
            if (!this.state.otp) {
                this.setState({ validationError: "Please enter OTP", error_message: '' });
                return;
            }
            if (this.state.otp.length < 6 || this.state.otp.length > 6) {
                this.setState({ validationError: "Please enter valid OTP", error_message: '' });
                return;
            }

            var lead_data = parsed;
            if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
                this.setState({ validationError: "" });
                var extraParamsData = {};
                this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParamsData, function (exists) {
                    if (exists.code == 'invalid') {
                        _this3.setState({ error_message: exists.message, validationError: '' });
                    } else {
                        // if(this.props.vipPlusLead && parsed && parsed.utm_source) {
                        //     let data = {
                        //         name: this.state.user_name,
                        //         phone_number: this.state.phoneNumber,
                        //         utm_source: parsed.utm_source || '',
                        //         utm_spo_tags: parsed || ''
                        //     }
                        //     this.props.vipPlusLead(data)
                        // }
                        if (exists.token) {
                            // let data = {
                            //     'Category': 'ConsumerApp', 'Action': 'InsuranceLoginPopupOptVerified', 'CustomerID': GTM.getUserId() || '', 'event': 'Insurance-login-popup-opt-verified'
                            // }
                            // GTM.sendEvent({ data: data })
                            var api_params = {};
                            api_params.selectedLocation = _this3.props.selectedLocation;
                            api_params.isSalesAgent = _this3.props.isSalesAgent;
                            api_params.isAgent = _this3.props.isAgent;
                            api_params.is_gold = _this3.props.is_gold;
                            api_params.all = _this3.props.is_vip_gold;
                            api_params.fromWhere = null;
                            _this3.props.getVipList(false, api_params, function (resp) {
                                _this3.props.getUserProfile();
                                if (!resp.certificate) {
                                    var url = '/vip-club-member-details?isDummy=true';
                                    if (lead_data.utm_source) {
                                        url += '&utm_source=' + lead_data.utm_source;
                                    }
                                    if (lead_data.utm_term) {
                                        url += '&utm_term=' + lead_data.utm_term;
                                    }
                                    if (lead_data.utm_campaign) {
                                        url += '&utm_campaign=' + lead_data.utm_campaign;
                                    }
                                    if (lead_data.utm_medium) {
                                        url += '&utm_medium=' + lead_data.utm_medium;
                                    }
                                    if (lead_data.is_agent) {
                                        url += '&is_agent=' + lead_data.is_agent;
                                    }
                                    if (lead_data.is_gold) {
                                        url += '&is_gold=' + lead_data.is_gold;
                                    }
                                    // if (Object.keys(self.props.selected_vip_plan).length > 0) {
                                    //     let extraParams = {}
                                    /*if(this.props.user_cities && this.props.user_cities.length){
                                        extraParams.city_id = this.props.user_cities.filter(x => x.name == this.state.selectedCity).map(x => x.id)
                                    }*/

                                    // if(self.props.common_utm_tags && self.props.common_utm_tags.length){
                                    //     extraParams = self.props.common_utm_tags.filter(x=>x.type == "common_xtra_tags")[0].utm_tags
                                    // }
                                    // let visitor_info = GTM.getVisitorInfo()
                                    // if(visitor_info && visitor_info.visit_id){
                                    //     lead_data.visit_id = visitor_info.visit_id
                                    //     lead_data.visitor_id = visitor_info.visitor_id
                                    // }

                                    // to create vip or gold member lead for matrix
                                    //  self.props.generateVipClubLead({selectedPlan:self.props.selected_vip_plan ? self.props.selected_vip_plan.id : '', number:self.state.phoneNumber, lead_data:lead_data, selectedLocation:self.props.selectedLocation, user_name:self.state.user_name, extraParams:extraParams,
                                    //     cb: (resp) => {
                                    //         let LeadIdData = {
                                    //             'Category': 'ConsumerApp', 'Action': 'VipPopupLeadClicked', 'CustomerID': GTM.getUserId() || '', 'leadid': resp.lead_id?resp.lead_id:0, 'event': 'vip-popup-lead-clicked', 'source': lead_data.source || ''
                                    //         }
                                    //         GTM.sendEvent({ data: LeadIdData })
                                    //     }
                                    // })
                                    /*self.props.generateVipClubLead(self.props.selected_vip_plan ? self.props.selected_vip_plan.id : '', self.state.phoneNumber,lead_data, self.props.selectedLocation,self.state.user_name, extraParams, (resp)=>{
                                        let LeadIdData = {
                                            'Category': 'ConsumerApp', 'Action': 'VipLeadClicked', 'CustomerID': GTM.getUserId() || '', 'leadid': resp.lead_id ? resp.lead_id : 0, 'event': 'vip-lead-clicked', 'source': lead_data.source || ''
                                        }
                                        GTM.sendEvent({ data: LeadIdData })
                                    })*/
                                    // }
                                    if (exists.user_exists) {
                                        _this3.props.closeLeadPopup(); // to close lead popup
                                        _this3.props.history.push(url);
                                    } else {
                                        _this3.props.closeLeadPopup();
                                        _this3.props.history.push(url);
                                    }
                                } else {
                                    _this3.props.closeLeadPopup();
                                    _this3.props.history.push('vip-club-activated-details');
                                    // this.props.history.push('vip-club-activated-details?utm_source='+this.props.isSalesAgent+'&is_agent='+this.props.isAgent)
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
                this.verifyOTP();
            }
        }
    }, {
        key: '_handleContinuePress',
        value: function _handleContinuePress(e) {
            if (e.key === 'Enter') {
                if (!this.state.showOTP) {
                    this.submitOTPRequest(this.state.phoneNumber, '', true, false, 'one'); // to generate otp request
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

            this.props.closePopup(this.state.profile_id, this.props.member_id, this.state.newprofile);
        }
    }, {
        key: 'handleCityInut',
        value: function handleCityInut(type, event) {
            try {
                var _setState3;

                var search_string = event.target.value.toLowerCase();
                var filtered_doctor_list = [];
                this.props.user_cities && this.props.user_cities.map(function (doctor) {
                    var doctor_name = doctor.name.toLowerCase();
                    if (doctor_name.includes(search_string)) {
                        var index = doctor_name.indexOf(search_string);
                        filtered_doctor_list.push({ id: doctor.id, name: doctor.name, rank: index });
                    }
                });
                filtered_doctor_list = filtered_doctor_list.sort(function (x, y) {
                    return x.rank - y.rank;
                });
                this.setState((_setState3 = {}, _defineProperty(_setState3, type, event.target.value), _defineProperty(_setState3, 'filtered_city_list', filtered_doctor_list), _setState3));
            } catch (e) {}
        }
    }, {
        key: 'clickCityList',
        value: function clickCityList(value) {
            this.setState({ 'selectedCity': value, filtered_city_list: [], search_city: value, showCitySearchPopup: false });
        }
    }, {
        key: 'onFocusIn',
        value: function onFocusIn() {
            this.setState({ filtered_city_list: this.props.user_cities, search_city: '', showCitySearchPopup: true });
        }
    }, {
        key: 'onFocusOut',
        value: function onFocusOut() {
            var _this5 = this;

            setTimeout(function () {
                _this5.setState({ search_city: _this5.state.selectedCity, showCitySearchPopup: false });
            }, 500);
        }
    }, {
        key: 'addMemberBySelf',
        value: function addMemberBySelf() {
            this.props.addMembers(true);
            this.props.hideSelectProfilePopup();
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.isSelectprofile) {
                var currentSelectedProfiles = [];
                if (this.props.show_selected_profiles && this.props.show_selected_profiles.length > 0) {
                    this.props.currentSelectedVipMembersId.map(function (val, key) {
                        currentSelectedProfiles.push(val[key]);
                    });
                }
                var already_users_ids = [];
                if (this.props.vip_club_db_data && Object.keys(this.props.vip_club_db_data).length > 0 && this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data).length > 0 && Object.keys(this.props.vip_club_db_data.data.user).length > 0 && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0) {
                    this.props.vip_club_db_data.data.user.plus_members.map(function (val, key) {
                        already_users_ids.push(val.profile);
                    });
                }
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
                                this.props.USER && this.props.USER.profiles && Object.keys(this.props.USER.profiles).length > 0 && this.props.show_selected_profiles && this.props.show_selected_profiles.length > 0 ? Object.entries(this.props.USER.profiles).map(function (_ref) {
                                    var _ref2 = _slicedToArray(_ref, 2),
                                        key = _ref2[0],
                                        value = _ref2[1];

                                    if (currentSelectedProfiles.indexOf(parseInt(key)) == -1 && already_users_ids.indexOf(parseInt(key)) == -1) {
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
                                }, this) : '',
                                this.props.is_from_payment ? '' : _react2.default.createElement(
                                    'span',
                                    { className: 'text-primary fw-500 my-profile-item', onClick: this.addMemberBySelf.bind(this) },
                                    'Add New Profile'
                                )
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
            } else if (this.props.is_see_more) {
                return _react2.default.createElement(
                    'div',
                    { className: 'col-12 col-md-7  center-column' },
                    _react2.default.createElement('div', { className: 'cancel-overlay cancel-overlay-zindex', onClick: this.props.closeLeadPopup.bind(this) }),
                    _react2.default.createElement(
                        'section',
                        { className: 'mobile-verification-screen p-3' },
                        _react2.default.createElement(
                            'div',
                            { className: 'widget no-shadow no-round sign-up-container widget cancel-appointment-div cancel-popup' },
                            _react2.default.createElement(
                                'div',
                                { className: 'widget-header text-center action-screen-header' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'float-right', style: { cursor: 'pointer' }, onClick: this.props.closeLeadPopup.bind(this) },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rt-close.svg", style: { width: 14 } })
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500 cancel-appointment-head' },
                                    'Example'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'gold-avail-popup-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'avl-card-list' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'avl-left-cont' },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Doctor Appointments'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            'Average 40% OFF'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'avl-right-cont' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'duo-price-cont' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'duo-price' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'MRP'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'cut-price' },
                                                    '\u20B91000'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'duo-price' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'You Pay'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'b-0' },
                                                    '\u20B9600'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-center avl-svng' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Savings \u20B9400'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'avl-card-list' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'avl-left-cont' },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Lab Tests'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            'Average 45% OFF'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'avl-right-cont' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'duo-price-cont' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'duo-price' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'MRP'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'cut-price' },
                                                    '\u20B91000'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'duo-price' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'You Pay'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'b-0' },
                                                    '\u20B9550'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-center avl-svng' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Savings \u20B9450'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'avl-card-list' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'avl-left-cont' },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Medicines'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            'Average 23% OFF'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'avl-right-cont' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'duo-price-cont' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'duo-price' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'MRP'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'cut-price' },
                                                    '\u20B9700'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'duo-price' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'You Pay'
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'b-0' },
                                                    '\u20B9540'
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-center avl-svng' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Savings \u20B9160'
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'avl-foot-cont' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'avl-foot-text' },
                                    'Potential Savings ',
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'avl-cont' },
                                        '\u20B91010 X 6'
                                    ),
                                    ' Family members'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'avl-cont' },
                                    ' \u20B96060/yr'
                                )
                            )
                        )
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: 'col-12 col-md-7  center-column' },
                    _react2.default.createElement('div', { className: 'cancel-overlay cancel-overlay-zindex', onClick: this.props.closeLeadPopup.bind(this) }),
                    _react2.default.createElement(
                        'section',
                        { className: 'mobile-verification-screen p-3' },
                        _react2.default.createElement(
                            'div',
                            { className: 'widget no-shadow no-round sign-up-container widget cancel-appointment-div cancel-popup' },
                            _react2.default.createElement(
                                'span',
                                { className: 'float-right', style: { cursor: 'pointer' }, onClick: this.props.closeLeadPopup.bind(this) },
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
                                        { className: 'widget-header text-center mv-header ' },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'fw-500 text-md sign-up-mbl-text' },
                                            'Enter your registered mobile number to login'
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
                                                _react2.default.createElement('input', { type: 'number', id: 'number', className: 'fc-input text-center', placeholder: 'Enter your mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this._handleContinuePress.bind(this), disabled: this.state.showOTP ? true : false })
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
                                            'div',
                                            { className: 'text-center' },
                                            _react2.default.createElement(
                                                'button',
                                                { onClick: this.submitOTPRequest.bind(this, this.state.phoneNumber, false, true, false, 'one'), disabled: this.props.otp_request_sent, className: 'v-btn v-btn-primary btn-sm lg-sms-btn btn-grdnt' },
                                                'Let\u2019s get you in'
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
                                            { className: 'fw-500 text-md sign-up-mbl-text' },
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
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'text-center fw-500 p-3', style: { fontSize: 12 } },
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

    return VipLoginPopup;
}(_react2.default.Component);

exports.default = VipLoginPopup;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL3ZpcENsdWJQb3B1cC5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJWaXBMb2dpblBvcHVwIiwicHJvcHMiLCJzdGF0ZSIsInByb2ZpbGVfaWQiLCJuZXdwcm9maWxlIiwicGhvbmVOdW1iZXIiLCJ1c2VyX2xvZ2dlZEluX251bWJlciIsInZhbGlkYXRpb25FcnJvciIsInNob3dPVFAiLCJvdHAiLCJvdHBUaW1lb3V0IiwiZXJyb3JfbWVzc2FnZSIsImlzTGVhZFRydWUiLCJzbXNCdG5UeXBlIiwic2VsZWN0ZWRQcm9maWxlQWdlIiwiYWdlIiwiZW5hYmxlT3RwUmVxdWVzdCIsInVzZXJfbmFtZSIsInNlYXJjaF9jaXR5IiwiZmlsdGVyZWRfY2l0eV9saXN0Iiwic2hvd0NpdHlTZWFyY2hQb3B1cCIsInNlbGVjdGVkQ2l0eSIsInByb2ZpbGVpZCIsIm5ld1Byb2ZpbGUiLCJldmVudCIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm51bWJlciIsInJlc2VuZEZsYWciLCJ2aWFTbXMiLCJ2aWFXaGF0c2FwcCIsImZyb21Qb3B1cCIsImxlYWRfZGF0YSIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJtYXRjaCIsInNlbmRPVFAiLCJlcnJvciIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2Nyb2xsIiwibGVmdCIsImJlaGF2aW9yIiwicGFyc2VkIiwic2VsZiIsImxlbmd0aCIsImV4dHJhUGFyYW1zRGF0YSIsInN1Ym1pdE9UUCIsImV4aXN0cyIsImNvZGUiLCJtZXNzYWdlIiwidG9rZW4iLCJhcGlfcGFyYW1zIiwic2VsZWN0ZWRMb2NhdGlvbiIsImlzU2FsZXNBZ2VudCIsImlzQWdlbnQiLCJpc19nb2xkIiwiYWxsIiwiaXNfdmlwX2dvbGQiLCJmcm9tV2hlcmUiLCJnZXRWaXBMaXN0IiwicmVzcCIsImdldFVzZXJQcm9maWxlIiwiY2VydGlmaWNhdGUiLCJ1cmwiLCJ1dG1fc291cmNlIiwidXRtX3Rlcm0iLCJ1dG1fY2FtcGFpZ24iLCJ1dG1fbWVkaXVtIiwiaXNfYWdlbnQiLCJ1c2VyX2V4aXN0cyIsImNsb3NlTGVhZFBvcHVwIiwiaGlzdG9yeSIsInB1c2giLCJrZXkiLCJ2ZXJpZnlPVFAiLCJzdWJtaXRPVFBSZXF1ZXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsInRocmVzaG9sZF9tYXhfYWdlIiwidGhyZXNob2xkX21pbl9hZ2UiLCJlcnJvck1lc3NhZ2UiLCJjbG9zZVBvcHVwIiwibWVtYmVyX2lkIiwidHlwZSIsInNlYXJjaF9zdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImZpbHRlcmVkX2RvY3Rvcl9saXN0IiwidXNlcl9jaXRpZXMiLCJtYXAiLCJkb2N0b3IiLCJkb2N0b3JfbmFtZSIsImluY2x1ZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwiaWQiLCJyYW5rIiwic29ydCIsIngiLCJ5IiwiYWRkTWVtYmVycyIsImhpZGVTZWxlY3RQcm9maWxlUG9wdXAiLCJpc1NlbGVjdHByb2ZpbGUiLCJjdXJyZW50U2VsZWN0ZWRQcm9maWxlcyIsInNob3dfc2VsZWN0ZWRfcHJvZmlsZXMiLCJjdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQiLCJ2YWwiLCJhbHJlYWR5X3VzZXJzX2lkcyIsInZpcF9jbHViX2RiX2RhdGEiLCJPYmplY3QiLCJrZXlzIiwidXNlciIsInBsdXNfbWVtYmVycyIsInByb2ZpbGUiLCJiaW5kIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiLCJBU1NFVFNfQkFTRV9VUkwiLCJ3aWR0aCIsIlVTRVIiLCJwcm9maWxlcyIsImVudHJpZXMiLCJwYXJzZUludCIsImhhbmRsZUNoYW5nZSIsImlzX2Zyb21fcGF5bWVudCIsImFkZE1lbWJlckJ5U2VsZiIsImNsb3NlU2VsZWN0RnJvbVByb2ZpbGUiLCJpc19zZWVfbW9yZSIsImlucHV0SGFuZGxlciIsIl9oYW5kbGVDb250aW51ZVByZXNzIiwib3RwX3JlcXVlc3Rfc2VudCIsImVkaXROdW1iZXIiLCJfaGFuZGxlS2V5UHJlc3MiLCJmb250U2l6ZSIsInN1Ym1pdF9vdHAiLCJjb2xvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFGQSxJQUFNQSxjQUFjQyxtQkFBT0EsQ0FBQywwREFBUixDQUFwQjs7SUFJTUMsYTs7O0FBQ0YsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSUFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsd0JBQVksRUFESDtBQUVUQyx3QkFBWSxFQUZIO0FBR1RDLHlCQUFhLE1BQUtKLEtBQUwsQ0FBV0ssb0JBQVgsR0FBZ0MsTUFBS0wsS0FBTCxDQUFXSyxvQkFBM0MsR0FBZ0UsRUFIcEU7QUFJVEMsNkJBQWlCLEVBSlI7QUFLVEMscUJBQVMsS0FMQTtBQU1UQyxpQkFBSyxFQU5JO0FBT1RDLHdCQUFZLEtBUEg7QUFRVEMsMkJBQWUsRUFSTjtBQVNUQyx3QkFBWSxLQVRIO0FBVVRDLHdCQUFZLElBVkg7QUFXVEMsZ0NBQW9CLEVBWFg7QUFZVEMsaUJBQUssRUFaSTtBQWFUQyw4QkFBa0IsS0FiVDtBQWNUQyx1QkFBVyxFQWRGO0FBZVRDLHlCQUFhLEVBZko7QUFnQlRDLGdDQUFvQixFQWhCWDtBQWlCVEMsaUNBQXFCLEtBakJaO0FBa0JUQywwQkFBYztBQWxCTCxTQUFiO0FBRmU7QUFzQmxCOzs7O3FDQUNZQyxTLEVBQVdDLFUsRUFBWVQsa0IsRUFBb0JVLEssRUFBTztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEVBQUV0QixZQUFZbUIsU0FBZCxFQUF5QmxCLFlBQVltQixVQUFyQyxFQUFpRFQsb0JBQW9CQSxrQkFBckUsRUFBeUZDLEtBQUtRLFdBQVdSLEdBQXpHLEVBQWQ7QUFDSDs7O3FDQUNZVyxDLEVBQUc7QUFDWixnQkFBSSxLQUFLeEIsS0FBTCxDQUFXTSxPQUFYLElBQXNCa0IsRUFBRUMsTUFBRixDQUFTQyxJQUFULElBQWlCLGFBQTNDLEVBQTBEO0FBQUE7O0FBQ3RELHFCQUFLSCxRQUFMLDZDQUFpQkMsRUFBRUMsTUFBRixDQUFTQyxJQUExQixFQUFpQ0YsRUFBRUMsTUFBRixDQUFTRSxLQUExQyxpREFBa0UsRUFBbEUseUNBQStFLEtBQS9FLHFDQUEyRixFQUEzRiwrQ0FBOEcsRUFBOUc7QUFDSCxhQUZELE1BRU87QUFDSCxxQkFBS0osUUFBTCxxQkFBaUJDLEVBQUVDLE1BQUYsQ0FBU0MsSUFBMUIsRUFBaUNGLEVBQUVDLE1BQUYsQ0FBU0UsS0FBMUM7QUFDSDtBQUNKOzs7eUNBRWdCQyxNLEVBQW1FO0FBQUEsZ0JBQTNEQyxVQUEyRCx1RUFBOUMsS0FBOEM7QUFBQSxnQkFBdkNDLE1BQXVDOztBQUFBOztBQUFBLGdCQUEvQkMsV0FBK0I7QUFBQSxnQkFBbEJDLFNBQWtCLHVFQUFOLElBQU07QUFBRztBQUNuRjs7Ozs7QUFLQSxnQkFBSUMsWUFBWXJDLFlBQVlzQyxLQUFaLENBQWtCLEtBQUtuQyxLQUFMLENBQVdvQyxRQUFYLENBQW9CQyxNQUF0QyxDQUFoQjtBQUNBLGdCQUFJUixPQUFPUyxLQUFQLENBQWEsc0JBQWIsQ0FBSixFQUEwQzs7QUFFdEMscUJBQUtkLFFBQUwsQ0FBYyxFQUFFbEIsaUJBQWlCLEVBQW5CLEVBQWQ7QUFDQTs7OztBQUlBLHFCQUFLTixLQUFMLENBQVd1QyxPQUFYLENBQW1CVixNQUFuQixFQUEyQkUsTUFBM0IsRUFBbUNDLFdBQW5DLEVBQWdELGlCQUFoRCxFQUFtRSxVQUFDUSxLQUFELEVBQVc7QUFBRTtBQUM1RSx3QkFBSUEsS0FBSixFQUFXO0FBQ1A7QUFDSCxxQkFGRCxNQUVPO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNEJBQUlDLE9BQU87QUFDUCx3Q0FBWSxhQURMLEVBQ29CLFVBQVUsMkJBRDlCLEVBQzJELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFENUYsRUFDZ0csU0FBUyxnQ0FEekcsRUFDMkksUUFBUVosU0FBUyxRQUFULEdBQW9CQyxjQUFjLGFBQWQsR0FBOEIsRUFEck0sRUFDeU0sWUFBWSxPQUFLL0IsS0FBTCxDQUFXRztBQURoTyx5QkFBWDtBQUdBc0Msc0NBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNQSxJQUFSLEVBQWQ7QUFDQSw0QkFBSVQsV0FBSixFQUFpQjtBQUNiLG1DQUFLUixRQUFMLENBQWMsRUFBRVQsa0JBQWtCLElBQXBCLEVBQWQ7QUFDSCx5QkFGRCxNQUVPO0FBQ0gsbUNBQUtTLFFBQUwsQ0FBYyxFQUFFVCxrQkFBa0IsS0FBcEIsRUFBZDtBQUNIO0FBQ0QsK0JBQUtTLFFBQUwsQ0FBYyxFQUFFakIsU0FBUyxJQUFYLEVBQWlCRSxZQUFZLElBQTdCLEVBQW1DRyxZQUFZbUIsU0FBUyxJQUFULEdBQWdCLEtBQS9ELEVBQWQ7QUFDQWMsbUNBQVcsWUFBTTtBQUNiLG1DQUFLckIsUUFBTCxDQUFjLEVBQUVmLFlBQVksS0FBZCxFQUFkO0FBQ0gseUJBRkQsRUFFRyxLQUZIO0FBR0FvQyxtQ0FBVyxZQUFNO0FBQ2IsbUNBQUtyQixRQUFMLENBQWMsRUFBRVQsa0JBQWtCLEtBQXBCLEVBQWQ7QUFDSCx5QkFGRCxFQUVHLEtBRkg7O0FBSUEsNEJBQUlrQixhQUFhYSxTQUFTQyxzQkFBVCxDQUFnQyxpQkFBaEMsQ0FBakIsRUFBcUU7QUFDakUsZ0NBQUlkLGFBQWEsS0FBakIsRUFBd0I7QUFDcEJhLHlDQUFTQyxzQkFBVCxDQUFnQyxpQkFBaEMsRUFBbUQsQ0FBbkQsRUFBc0RDLE1BQXRELENBQTZELEVBQUVDLE1BQU0sR0FBUixFQUFhQyxVQUFVLFFBQXZCLEVBQTdEO0FBQ0gsNkJBRkQsTUFFTztBQUNISix5Q0FBU0Msc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1ELENBQW5ELEVBQXNEQyxNQUF0RCxDQUE2RCxFQUFFQyxNQUFNLENBQUMsR0FBVCxFQUFjQyxVQUFVLFFBQXhCLEVBQTdEO0FBQ0g7QUFDSjtBQUNKO0FBQ0osaUJBaENEO0FBaUNILGFBeENELE1Bd0NPO0FBQ0gscUJBQUsxQixRQUFMLENBQWMsRUFBRWxCLGlCQUFpQiwyQ0FBbkIsRUFBZDtBQUNIO0FBQ0o7OztvQ0FFVztBQUFBOztBQUFHO0FBQ1gsZ0JBQUk2QyxTQUFTdEQsWUFBWXNDLEtBQVosQ0FBa0IsS0FBS25DLEtBQUwsQ0FBV29DLFFBQVgsQ0FBb0JDLE1BQXRDLENBQWI7QUFDQSxnQkFBSWUsT0FBTyxJQUFYO0FBQ0EsZ0JBQUksQ0FBQyxLQUFLbkQsS0FBTCxDQUFXTyxHQUFoQixFQUFxQjtBQUNqQixxQkFBS2dCLFFBQUwsQ0FBYyxFQUFFbEIsaUJBQWlCLGtCQUFuQixFQUF1Q0ksZUFBZSxFQUF0RCxFQUFkO0FBQ0E7QUFDSDtBQUNELGdCQUFJLEtBQUtULEtBQUwsQ0FBV08sR0FBWCxDQUFlNkMsTUFBZixHQUF3QixDQUF4QixJQUE2QixLQUFLcEQsS0FBTCxDQUFXTyxHQUFYLENBQWU2QyxNQUFmLEdBQXdCLENBQXpELEVBQTREO0FBQ3hELHFCQUFLN0IsUUFBTCxDQUFjLEVBQUVsQixpQkFBaUIsd0JBQW5CLEVBQTZDSSxlQUFlLEVBQTVELEVBQWQ7QUFDQTtBQUNIOztBQUVELGdCQUFJd0IsWUFBWWlCLE1BQWhCO0FBQ0EsZ0JBQUksS0FBS2xELEtBQUwsQ0FBV0csV0FBWCxDQUF1QmtDLEtBQXZCLENBQTZCLHNCQUE3QixDQUFKLEVBQTBEO0FBQ3RELHFCQUFLZCxRQUFMLENBQWMsRUFBRWxCLGlCQUFpQixFQUFuQixFQUFkO0FBQ0Esb0JBQUlnRCxrQkFBa0IsRUFBdEI7QUFDQSxxQkFBS3RELEtBQUwsQ0FBV3VELFNBQVgsQ0FBcUIsS0FBS3RELEtBQUwsQ0FBV0csV0FBaEMsRUFBNkMsS0FBS0gsS0FBTCxDQUFXTyxHQUF4RCxFQUE2RDhDLGVBQTdELEVBQThFLFVBQUNFLE1BQUQsRUFBWTtBQUN0Rix3QkFBSUEsT0FBT0MsSUFBUCxJQUFlLFNBQW5CLEVBQThCO0FBQzFCLCtCQUFLakMsUUFBTCxDQUFjLEVBQUVkLGVBQWU4QyxPQUFPRSxPQUF4QixFQUFpQ3BELGlCQUFpQixFQUFsRCxFQUFkO0FBQ0gscUJBRkQsTUFFTztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUFJa0QsT0FBT0csS0FBWCxFQUFrQjtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQUlDLGFBQWEsRUFBakI7QUFDQUEsdUNBQVdDLGdCQUFYLEdBQThCLE9BQUs3RCxLQUFMLENBQVc2RCxnQkFBekM7QUFDQUQsdUNBQVdFLFlBQVgsR0FBMEIsT0FBSzlELEtBQUwsQ0FBVzhELFlBQXJDO0FBQ0FGLHVDQUFXRyxPQUFYLEdBQXFCLE9BQUsvRCxLQUFMLENBQVcrRCxPQUFoQztBQUNBSCx1Q0FBV0ksT0FBWCxHQUFxQixPQUFLaEUsS0FBTCxDQUFXZ0UsT0FBaEM7QUFDQUosdUNBQVdLLEdBQVgsR0FBaUIsT0FBS2pFLEtBQUwsQ0FBV2tFLFdBQTVCO0FBQ0FOLHVDQUFXTyxTQUFYLEdBQXVCLElBQXZCO0FBQ0EsbUNBQUtuRSxLQUFMLENBQVdvRSxVQUFYLENBQXNCLEtBQXRCLEVBQTZCUixVQUE3QixFQUF5QyxVQUFDUyxJQUFELEVBQVU7QUFDL0MsdUNBQUtyRSxLQUFMLENBQVdzRSxjQUFYO0FBQ0Esb0NBQUksQ0FBQ0QsS0FBS0UsV0FBVixFQUF1QjtBQUNuQix3Q0FBSUMsTUFBTSx1Q0FBVjtBQUNBLHdDQUFJdEMsVUFBVXVDLFVBQWQsRUFBMEI7QUFDdEJELCtDQUFPLGlCQUFpQnRDLFVBQVV1QyxVQUFsQztBQUNIO0FBQ0Qsd0NBQUl2QyxVQUFVd0MsUUFBZCxFQUF3QjtBQUNwQkYsK0NBQU8sZUFBZXRDLFVBQVV3QyxRQUFoQztBQUNIO0FBQ0Qsd0NBQUl4QyxVQUFVeUMsWUFBZCxFQUE0QjtBQUN4QkgsK0NBQU8sbUJBQW1CdEMsVUFBVXlDLFlBQXBDO0FBQ0g7QUFDRCx3Q0FBSXpDLFVBQVUwQyxVQUFkLEVBQTBCO0FBQ3RCSiwrQ0FBTyxpQkFBaUJ0QyxVQUFVMEMsVUFBbEM7QUFDSDtBQUNELHdDQUFJMUMsVUFBVTJDLFFBQWQsRUFBd0I7QUFDcEJMLCtDQUFPLGVBQWV0QyxVQUFVMkMsUUFBaEM7QUFDSDtBQUNELHdDQUFJM0MsVUFBVThCLE9BQWQsRUFBdUI7QUFDbkJRLCtDQUFPLGNBQWN0QyxVQUFVOEIsT0FBL0I7QUFDSDtBQUNEO0FBQ0E7QUFDSTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1KO0FBQ0Esd0NBQUlSLE9BQU9zQixXQUFYLEVBQXdCO0FBQ3BCLCtDQUFLOUUsS0FBTCxDQUFXK0UsY0FBWCxHQURvQixDQUNRO0FBQzVCLCtDQUFLL0UsS0FBTCxDQUFXZ0YsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0JULEdBQXhCO0FBQ0gscUNBSEQsTUFHTztBQUNILCtDQUFLeEUsS0FBTCxDQUFXK0UsY0FBWDtBQUNBLCtDQUFLL0UsS0FBTCxDQUFXZ0YsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0JULEdBQXhCO0FBQ0g7QUFDSixpQ0ExREQsTUEwRE87QUFDSCwyQ0FBS3hFLEtBQUwsQ0FBVytFLGNBQVg7QUFDQSwyQ0FBSy9FLEtBQUwsQ0FBV2dGLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLDRCQUF4QjtBQUNBO0FBQ0g7QUFDSiw2QkFqRUQ7QUFrRUg7QUFDSjtBQUVKLGlCQTlGRDtBQStGSCxhQWxHRCxNQWtHTztBQUNILHFCQUFLekQsUUFBTCxDQUFjLEVBQUVsQixpQkFBaUIsMkNBQW5CLEVBQWQ7QUFDSDtBQUNKOzs7d0NBRWVtQixDLEVBQUc7QUFDZixnQkFBSUEsRUFBRXlELEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ25CLHFCQUFLQyxTQUFMO0FBQ0g7QUFDSjs7OzZDQUVvQjFELEMsRUFBRztBQUNwQixnQkFBSUEsRUFBRXlELEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ25CLG9CQUFJLENBQUMsS0FBS2pGLEtBQUwsQ0FBV00sT0FBaEIsRUFBeUI7QUFDckIseUJBQUs2RSxnQkFBTCxDQUFzQixLQUFLbkYsS0FBTCxDQUFXRyxXQUFqQyxFQUE4QyxFQUE5QyxFQUFrRCxJQUFsRCxFQUF3RCxLQUF4RCxFQUErRCxLQUEvRCxFQURxQixDQUNpRDtBQUN6RTtBQUNKO0FBQ0o7OztxQ0FFWTtBQUFBOztBQUNULGdCQUFJeUIsU0FBUyxLQUFLNUIsS0FBTCxDQUFXRyxXQUF4Qjs7QUFFQTBDLHFCQUFTQyxzQkFBVCxDQUFnQyxpQkFBaEMsRUFBbUQsQ0FBbkQsRUFBc0RDLE1BQXRELENBQTZELEVBQUVDLE1BQU0sQ0FBQyxHQUFULEVBQWNDLFVBQVUsUUFBeEIsRUFBN0Q7O0FBRUFMLHVCQUFXLFlBQU07QUFDYix1QkFBS3JCLFFBQUwsQ0FBYyxFQUFFbEIsaUJBQWlCLEVBQW5CLEVBQXVCQyxTQUFTLEtBQWhDLEVBQXVDQyxLQUFLLEVBQTVDLEVBQWdESixhQUFhLEVBQTdELEVBQWQsRUFBaUYsWUFBTTtBQUNuRiwyQkFBS29CLFFBQUwsQ0FBYyxFQUFFcEIsYUFBYXlCLE1BQWYsRUFBZDtBQUNBaUIsNkJBQVN1QyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUFsQztBQUNILGlCQUhEO0FBSUgsYUFMRCxFQUtHLEdBTEg7QUFNSDs7O2lEQUN3QjtBQUNyQixnQkFBSUMsMEJBQUo7QUFDQSxnQkFBSUMsMEJBQUo7QUFDQSxnQkFBSUMscUJBQUo7O0FBRUEsaUJBQUt6RixLQUFMLENBQVcwRixVQUFYLENBQXNCLEtBQUt6RixLQUFMLENBQVdDLFVBQWpDLEVBQTZDLEtBQUtGLEtBQUwsQ0FBVzJGLFNBQXhELEVBQW1FLEtBQUsxRixLQUFMLENBQVdFLFVBQTlFO0FBQ0g7Ozt1Q0FFY3lGLEksRUFBTXJFLEssRUFBTztBQUN4QixnQkFBSTtBQUFBOztBQUNBLG9CQUFJc0UsZ0JBQWdCdEUsTUFBTUcsTUFBTixDQUFhRSxLQUFiLENBQW1Ca0UsV0FBbkIsRUFBcEI7QUFDQSxvQkFBSUMsdUJBQXVCLEVBQTNCO0FBQ0EscUJBQUsvRixLQUFMLENBQVdnRyxXQUFYLElBQTBCLEtBQUtoRyxLQUFMLENBQVdnRyxXQUFYLENBQXVCQyxHQUF2QixDQUEyQixVQUFDQyxNQUFELEVBQVk7QUFDN0Qsd0JBQUlDLGNBQWVELE9BQU92RSxJQUFSLENBQWNtRSxXQUFkLEVBQWxCO0FBQ0Esd0JBQUlLLFlBQVlDLFFBQVosQ0FBcUJQLGFBQXJCLENBQUosRUFBeUM7QUFDckMsNEJBQUlRLFFBQVFGLFlBQVlHLE9BQVosQ0FBb0JULGFBQXBCLENBQVo7QUFDQUUsNkNBQXFCZCxJQUFyQixDQUEwQixFQUFFc0IsSUFBSUwsT0FBT0ssRUFBYixFQUFpQjVFLE1BQU11RSxPQUFPdkUsSUFBOUIsRUFBb0M2RSxNQUFNSCxLQUExQyxFQUExQjtBQUNIO0FBQ0osaUJBTnlCLENBQTFCO0FBT0FOLHVDQUF1QkEscUJBQXFCVSxJQUFyQixDQUEwQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN2RCwyQkFBT0QsRUFBRUYsSUFBRixHQUFTRyxFQUFFSCxJQUFsQjtBQUNILGlCQUZzQixDQUF2QjtBQUdBLHFCQUFLaEYsUUFBTCwrQ0FBaUJvRSxJQUFqQixFQUF3QnJFLE1BQU1HLE1BQU4sQ0FBYUUsS0FBckMscURBQWdFbUUsb0JBQWhFO0FBQ0gsYUFkRCxDQWNFLE9BQU90RSxDQUFQLEVBQVUsQ0FFWDtBQUNKOzs7c0NBRWFHLEssRUFBTztBQUNqQixpQkFBS0osUUFBTCxDQUFjLEVBQUUsZ0JBQWdCSSxLQUFsQixFQUF5QlYsb0JBQW9CLEVBQTdDLEVBQWlERCxhQUFhVyxLQUE5RCxFQUFxRVQscUJBQXFCLEtBQTFGLEVBQWQ7QUFDSDs7O29DQUVXO0FBQ1IsaUJBQUtLLFFBQUwsQ0FBYyxFQUFFTixvQkFBb0IsS0FBS2xCLEtBQUwsQ0FBV2dHLFdBQWpDLEVBQThDL0UsYUFBYSxFQUEzRCxFQUErREUscUJBQXFCLElBQXBGLEVBQWQ7QUFDSDs7O3FDQUVZO0FBQUE7O0FBQ1QwQix1QkFBVyxZQUFNO0FBQ2IsdUJBQUtyQixRQUFMLENBQWMsRUFBRVAsYUFBYSxPQUFLaEIsS0FBTCxDQUFXbUIsWUFBMUIsRUFBd0NELHFCQUFxQixLQUE3RCxFQUFkO0FBQ0gsYUFGRCxFQUVHLEdBRkg7QUFJSDs7OzBDQUVpQjtBQUNkLGlCQUFLbkIsS0FBTCxDQUFXNEcsVUFBWCxDQUFzQixJQUF0QjtBQUNBLGlCQUFLNUcsS0FBTCxDQUFXNkcsc0JBQVg7QUFDSDs7O2lDQUVRO0FBQ0wsZ0JBQUksS0FBSzdHLEtBQUwsQ0FBVzhHLGVBQWYsRUFBZ0M7QUFDNUIsb0JBQUlDLDBCQUEwQixFQUE5QjtBQUNBLG9CQUFJLEtBQUsvRyxLQUFMLENBQVdnSCxzQkFBWCxJQUFxQyxLQUFLaEgsS0FBTCxDQUFXZ0gsc0JBQVgsQ0FBa0MzRCxNQUFsQyxHQUEyQyxDQUFwRixFQUF1RjtBQUNuRix5QkFBS3JELEtBQUwsQ0FBV2lILDJCQUFYLENBQXVDaEIsR0FBdkMsQ0FBMkMsVUFBQ2lCLEdBQUQsRUFBTWhDLEdBQU4sRUFBYztBQUNyRDZCLGdEQUF3QjlCLElBQXhCLENBQTZCaUMsSUFBSWhDLEdBQUosQ0FBN0I7QUFDSCxxQkFGRDtBQUdIO0FBQ0Qsb0JBQUlpQyxvQkFBb0IsRUFBeEI7QUFDQSxvQkFBSSxLQUFLbkgsS0FBTCxDQUFXb0gsZ0JBQVgsSUFBK0JDLE9BQU9DLElBQVAsQ0FBWSxLQUFLdEgsS0FBTCxDQUFXb0gsZ0JBQXZCLEVBQXlDL0QsTUFBekMsR0FBa0QsQ0FBakYsSUFBc0YsS0FBS3JELEtBQUwsQ0FBV29ILGdCQUFYLENBQTRCM0UsSUFBNUIsQ0FBaUM4RSxJQUF2SCxJQUErSEYsT0FBT0MsSUFBUCxDQUFZLEtBQUt0SCxLQUFMLENBQVdvSCxnQkFBWCxDQUE0QjNFLElBQXhDLEVBQThDWSxNQUE5QyxHQUF1RCxDQUF0TCxJQUEyTGdFLE9BQU9DLElBQVAsQ0FBWSxLQUFLdEgsS0FBTCxDQUFXb0gsZ0JBQVgsQ0FBNEIzRSxJQUE1QixDQUFpQzhFLElBQTdDLEVBQW1EbEUsTUFBbkQsR0FBNEQsQ0FBdlAsSUFBNFAsS0FBS3JELEtBQUwsQ0FBV29ILGdCQUFYLENBQTRCM0UsSUFBNUIsQ0FBaUM4RSxJQUFqQyxDQUFzQ0MsWUFBbFMsSUFBa1QsS0FBS3hILEtBQUwsQ0FBV29ILGdCQUFYLENBQTRCM0UsSUFBNUIsQ0FBaUM4RSxJQUFqQyxDQUFzQ0MsWUFBdEMsQ0FBbURuRSxNQUFuRCxHQUE0RCxDQUFsWCxFQUFxWDtBQUNqWCx5QkFBS3JELEtBQUwsQ0FBV29ILGdCQUFYLENBQTRCM0UsSUFBNUIsQ0FBaUM4RSxJQUFqQyxDQUFzQ0MsWUFBdEMsQ0FBbUR2QixHQUFuRCxDQUF1RCxVQUFDaUIsR0FBRCxFQUFNaEMsR0FBTixFQUFjO0FBQ2pFaUMsMENBQWtCbEMsSUFBbEIsQ0FBdUJpQyxJQUFJTyxPQUEzQjtBQUNILHFCQUZEO0FBR0g7QUFDRCx1QkFDSTtBQUFBO0FBQUE7QUFDSSwyREFBSyxXQUFVLHNDQUFmLEVBQXNELFNBQVMsS0FBS3pILEtBQUwsQ0FBVzZHLHNCQUFYLENBQWtDYSxJQUFsQyxDQUF1QyxJQUF2QyxDQUEvRCxHQURKO0FBRUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsNERBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxpQkFBZjtBQUFBO0FBRUE7QUFBQTtBQUFBLGtDQUFNLFdBQVUsYUFBaEIsRUFBOEIsT0FBTyxFQUFFQyxRQUFRLFNBQVYsRUFBcUJDLGFBQWEsTUFBbEMsRUFBckMsRUFBaUYsU0FBUyxLQUFLNUgsS0FBTCxDQUFXNkcsc0JBQVgsQ0FBa0NhLElBQWxDLENBQXVDLElBQXZDLENBQTFGO0FBQXdJLHVFQUFLLEtBQUtHLFNBQWVBLEdBQUcsa0NBQTVCLEVBQWdFLE9BQU8sRUFBRUMsT0FBTyxFQUFULEVBQXZFO0FBQXhJO0FBRkEseUJBREo7QUFLSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxnREFBZjtBQUNJLGlFQUFHLFdBQVUsZ0NBQWI7QUFESix5QkFMSjtBQVFJLCtEQUFLLFdBQVUscUNBQWYsR0FSSjtBQVVJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFFBQWY7QUFDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxrQ0FBZjtBQUVRLHFDQUFLOUgsS0FBTCxDQUFXK0gsSUFBWCxJQUFtQixLQUFLL0gsS0FBTCxDQUFXK0gsSUFBWCxDQUFnQkMsUUFBbkMsSUFBK0NYLE9BQU9DLElBQVAsQ0FBWSxLQUFLdEgsS0FBTCxDQUFXK0gsSUFBWCxDQUFnQkMsUUFBNUIsRUFBc0MzRSxNQUF0QyxHQUErQyxDQUE5RixJQUFtRyxLQUFLckQsS0FBTCxDQUFXZ0gsc0JBQTlHLElBQXdJLEtBQUtoSCxLQUFMLENBQVdnSCxzQkFBWCxDQUFrQzNELE1BQWxDLEdBQTJDLENBQW5MLEdBQ0lnRSxPQUFPWSxPQUFQLENBQWUsS0FBS2pJLEtBQUwsQ0FBVytILElBQVgsQ0FBZ0JDLFFBQS9CLEVBQXlDL0IsR0FBekMsQ0FBNkMsZ0JBQXdCO0FBQUE7QUFBQSx3Q0FBYmYsR0FBYTtBQUFBLHdDQUFSdEQsS0FBUTs7QUFFakUsd0NBQUltRix3QkFBd0JULE9BQXhCLENBQWdDNEIsU0FBU2hELEdBQVQsQ0FBaEMsS0FBa0QsQ0FBQyxDQUFuRCxJQUF3RGlDLGtCQUFrQmIsT0FBbEIsQ0FBMEI0QixTQUFTaEQsR0FBVCxDQUExQixLQUE0QyxDQUFDLENBQXpHLEVBQTRHO0FBQ3hHLCtDQUFPO0FBQUE7QUFBQSw4Q0FBSyxLQUFLQSxHQUFWLEVBQWUsV0FBVSxXQUF6QjtBQUNIO0FBQUE7QUFBQSxrREFBTyxXQUFVLGlCQUFqQjtBQUNLdEQsc0RBQU1ELElBRFg7QUFFSSx5RkFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxZQUF6QixFQUFzQyxPQUFNLEVBQTVDLEVBQStDLElBQUl1RCxHQUFuRCxFQUF3RCxjQUFXLFlBQW5FLEVBQWdGLFNBQVMsS0FBS2pGLEtBQUwsQ0FBV0MsVUFBWCxLQUEwQjBCLE1BQU0yRSxFQUF6SCxFQUE2SCxVQUFVLEtBQUs0QixZQUFMLENBQWtCVCxJQUFsQixDQUF1QixJQUF2QixFQUE2QjlGLE1BQU0yRSxFQUFuQyxFQUF1QzNFLEtBQXZDLEVBQThDQSxNQUFNZCxHQUFwRCxDQUF2SSxHQUZKO0FBR0ksd0ZBQU0sV0FBVSxlQUFoQjtBQUhKO0FBREcseUNBQVA7QUFPSDtBQUNKLGlDQVhELEVBV0csSUFYSCxDQURKLEdBYU0sRUFmZDtBQWdCSyxxQ0FBS2QsS0FBTCxDQUFXb0ksZUFBWCxHQUE2QixFQUE3QixHQUNLO0FBQUE7QUFBQSxzQ0FBTSxXQUFVLHFDQUFoQixFQUFzRCxTQUFTLEtBQUtDLGVBQUwsQ0FBcUJYLElBQXJCLENBQTBCLElBQTFCLENBQS9EO0FBQUE7QUFBQTtBQWpCVjtBQURKLHlCQVZKO0FBZ0NJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLG9CQUFmLEVBQW9DLFNBQVMsS0FBS1ksc0JBQUwsQ0FBNEJaLElBQTVCLENBQWlDLElBQWpDLENBQTdDO0FBQ0k7QUFBQTtBQUFBLGtDQUFRLFdBQVcsS0FBS3pILEtBQUwsQ0FBV0MsVUFBWCxJQUF5QixFQUF6QixHQUE4QixxQkFBOUIsR0FBc0QsUUFBekUsRUFBbUYsVUFBVSxLQUFLRCxLQUFMLENBQVdDLFVBQVgsSUFBeUIsRUFBekIsR0FBOEIsVUFBOUIsR0FBMkMsRUFBeEk7QUFBQTtBQUFBO0FBREo7QUFoQ0o7QUFGSixpQkFESjtBQXlDSCxhQXRERCxNQXNETyxJQUFJLEtBQUtGLEtBQUwsQ0FBV3VJLFdBQWYsRUFBNEI7QUFDL0IsdUJBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0NBQWY7QUFDSSwyREFBSyxpREFBTCxFQUF3RCxTQUFTLEtBQUt2SSxLQUFMLENBQVcrRSxjQUFYLENBQTBCMkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBakUsR0FESjtBQUdJO0FBQUE7QUFBQSwwQkFBUyxXQUFVLGdDQUFuQjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxtR0FBTDtBQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLGdEQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFNLFdBQVUsYUFBaEIsRUFBOEIsT0FBTyxFQUFFQyxRQUFRLFNBQVYsRUFBckMsRUFBNEQsU0FBUyxLQUFLM0gsS0FBTCxDQUFXK0UsY0FBWCxDQUEwQjJDLElBQTFCLENBQStCLElBQS9CLENBQXJFO0FBQTJHLDJFQUFLLEtBQUtHLFNBQWVBLEdBQUcsa0NBQTVCLEVBQWdFLE9BQU8sRUFBRUMsT0FBTyxFQUFULEVBQXZFO0FBQTNHLGlDQURKO0FBRUk7QUFBQTtBQUFBLHNDQUFHLFdBQVUsZ0NBQWI7QUFBQTtBQUFBO0FBRkosNkJBREo7QUFLSTtBQUFBO0FBQUEsa0NBQUssV0FBVSw0QkFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixxQ0FESjtBQUtJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsa0RBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFESjtBQUVJO0FBQUE7QUFBQSxzREFBTSxXQUFVLFdBQWhCO0FBQUE7QUFBQTtBQUZKLDZDQURKO0FBS0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBREo7QUFFSTtBQUFBO0FBQUEsc0RBQU0sV0FBVSxLQUFoQjtBQUFBO0FBQUE7QUFGSjtBQUxKLHlDQURKO0FBV0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsc0JBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFYSjtBQUxKLGlDQURKO0FBc0JJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsMENBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixxQ0FESjtBQUtJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsa0RBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFESjtBQUVJO0FBQUE7QUFBQSxzREFBTSxXQUFVLFdBQWhCO0FBQUE7QUFBQTtBQUZKLDZDQURKO0FBS0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBREo7QUFFSTtBQUFBO0FBQUEsc0RBQU0sV0FBVSxLQUFoQjtBQUFBO0FBQUE7QUFGSjtBQUxKLHlDQURKO0FBV0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsc0JBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFYSjtBQUxKLGlDQXRCSjtBQTJDSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkoscUNBREo7QUFLSTtBQUFBO0FBQUEsMENBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBREo7QUFFSTtBQUFBO0FBQUEsc0RBQU0sV0FBVSxXQUFoQjtBQUFBO0FBQUE7QUFGSiw2Q0FESjtBQUtJO0FBQUE7QUFBQSxrREFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQURKO0FBRUk7QUFBQTtBQUFBLHNEQUFNLFdBQVUsS0FBaEI7QUFBQTtBQUFBO0FBRko7QUFMSix5Q0FESjtBQVdJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLHNCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBWEo7QUFMSjtBQTNDSiw2QkFMSjtBQXNFSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxlQUFmO0FBQ1E7QUFBQTtBQUFBLHNDQUFHLFdBQVUsZUFBYjtBQUFBO0FBQStDO0FBQUE7QUFBQSwwQ0FBTSxXQUFVLFVBQWhCO0FBQUE7QUFBQSxxQ0FBL0M7QUFBQTtBQUFBLGlDQURSO0FBRVE7QUFBQTtBQUFBLHNDQUFHLFdBQVUsVUFBYjtBQUFBO0FBQUE7QUFGUjtBQXRFSjtBQURKO0FBSEosaUJBREo7QUFtRkgsYUFwRk0sTUFvRkE7QUFDSCx1QkFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQ0FBZjtBQUNJLDJEQUFLLGlEQUFMLEVBQXdELFNBQVMsS0FBSzlILEtBQUwsQ0FBVytFLGNBQVgsQ0FBMEIyQyxJQUExQixDQUErQixJQUEvQixDQUFqRSxHQURKO0FBR0k7QUFBQTtBQUFBLDBCQUFTLFdBQVUsZ0NBQW5CO0FBQ0k7QUFBQTtBQUFBLDhCQUFLLG1HQUFMO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsYUFBaEIsRUFBOEIsT0FBTyxFQUFFQyxRQUFRLFNBQVYsRUFBckMsRUFBNEQsU0FBUyxLQUFLM0gsS0FBTCxDQUFXK0UsY0FBWCxDQUEwQjJDLElBQTFCLENBQStCLElBQS9CLENBQXJFO0FBQTJHLHVFQUFLLEtBQUtHLFNBQWVBLEdBQUcsa0NBQTVCLEVBQWdFLE9BQU8sRUFBRUMsT0FBTyxFQUFULEVBQXZFO0FBQTNHLDZCQURKO0FBRUk7QUFBQTtBQUFBLGtDQUFLLFdBQVUsaUJBQWY7QUFDSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxLQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUsc0NBQWY7QUFDSTtBQUFBO0FBQUEsOENBQUksV0FBVSxpQ0FBZDtBQUFBO0FBQUE7QUFESixxQ0FESjtBQUlJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLDRCQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsd0NBQWY7QUFJSTtBQUFBO0FBQUEsa0RBQUssV0FBVSxnQ0FBZjtBQUNJLHlGQUFPLE1BQUssUUFBWixFQUFxQixJQUFHLFFBQXhCLEVBQWlDLFdBQVUsc0JBQTNDLEVBQWtFLGFBQVksMEJBQTlFLEVBQXlHLE9BQU8sS0FBSzdILEtBQUwsQ0FBV0csV0FBM0gsRUFBd0ksVUFBVSxLQUFLb0ksWUFBTCxDQUFrQmQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbEosRUFBZ0wsTUFBSyxhQUFyTCxFQUFtTSxZQUFZLEtBQUtlLG9CQUFMLENBQTBCZixJQUExQixDQUErQixJQUEvQixDQUEvTSxFQUFxUCxVQUFVLEtBQUt6SCxLQUFMLENBQVdNLE9BQVgsR0FBcUIsSUFBckIsR0FBNEIsS0FBM1I7QUFESjtBQUpKLHlDQURKO0FBZ0NJO0FBQUE7QUFBQSw4Q0FBTSxXQUFVLHVCQUFoQjtBQUF5QyxpREFBS04sS0FBTCxDQUFXUztBQUFwRCx5Q0FoQ0o7QUFpQ0k7QUFBQTtBQUFBLDhDQUFNLFdBQVUsdUJBQWhCO0FBQXlDLGlEQUFLVCxLQUFMLENBQVdLO0FBQXBELHlDQWpDSjtBQW1DSTtBQUFBO0FBQUEsOENBQUssV0FBVSxhQUFmO0FBQ0k7QUFBQTtBQUFBLGtEQUFRLFNBQVMsS0FBSzhFLGdCQUFMLENBQXNCc0MsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsS0FBS3pILEtBQUwsQ0FBV0csV0FBNUMsRUFBeUQsS0FBekQsRUFBZ0UsSUFBaEUsRUFBc0UsS0FBdEUsRUFBNkUsS0FBN0UsQ0FBakIsRUFBc0csVUFBVSxLQUFLSixLQUFMLENBQVcwSSxnQkFBM0gsRUFBNkksV0FBVSxpREFBdko7QUFBQTtBQUFBO0FBREo7QUFuQ0o7QUFKSixpQ0FESjtBQThDSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxLQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFLLFdBQVUscUNBQWY7QUFDSTtBQUFBO0FBQUEsOENBQUksV0FBVSxpQ0FBZDtBQUFBO0FBQUE7QUFESixxQ0FESjtBQUlJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLDRCQUFmO0FBQ0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsd0NBQWY7QUFDSTtBQUFBO0FBQUEsa0RBQUssV0FBVSxnQ0FBZjtBQUNJLHlGQUFPLE1BQUssUUFBWixFQUFxQixJQUFHLFFBQXhCLEVBQWlDLFdBQVUsc0JBQTNDLEVBQWtFLGFBQVksd0JBQTlFLEVBQXVHLE9BQU8sS0FBS3pJLEtBQUwsQ0FBV0csV0FBekgsRUFBc0ksVUFBVSxLQUFLb0ksWUFBTCxDQUFrQmQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBaEosRUFBOEssTUFBSyxhQUFuTCxFQUFpTSxZQUFZLEtBQUtlLG9CQUFMLENBQTBCZixJQUExQixDQUErQixJQUEvQixDQUE3TSxFQUFtUCxVQUFVLEtBQUt6SCxLQUFMLENBQVdNLE9BQVgsR0FBcUIsSUFBckIsR0FBNEIsS0FBelIsR0FESjtBQUVJO0FBQUE7QUFBQSxzREFBRyxXQUFVLGNBQWIsRUFBNEIsU0FBUyxLQUFLb0ksVUFBTCxDQUFnQmpCLElBQWhCLENBQXFCLElBQXJCLENBQXJDO0FBQUE7QUFBQTtBQUZKLDZDQURKO0FBTVEsaURBQUt6SCxLQUFMLENBQVdNLE9BQVgsR0FDSTtBQUFBO0FBQUEsa0RBQUssV0FBVSxnQ0FBZjtBQUNJLHlGQURKO0FBQ1UseUZBRFY7QUFFSSx5RkFBTyxNQUFLLFFBQVosRUFBcUIsV0FBVSxzQkFBL0IsRUFBc0QsYUFBWSxXQUFsRSxFQUE4RSxPQUFPLEtBQUtOLEtBQUwsQ0FBV08sR0FBaEcsRUFBcUcsVUFBVSxLQUFLZ0ksWUFBTCxDQUFrQmQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBL0csRUFBNkksTUFBSyxLQUFsSixFQUF3SixZQUFZLEtBQUtrQixlQUFMLENBQXFCbEIsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBcEssR0FGSjtBQUlRLHFEQUFLekgsS0FBTCxDQUFXUSxVQUFYLEdBQXdCLEVBQXhCLEdBQ0k7QUFBQTtBQUFBLHNEQUFLLFdBQVUsa0RBQWY7QUFDSTtBQUFBO0FBQUEsMERBQUcsV0FBVSxXQUFiLEVBQXlCLE9BQU8sRUFBRW9JLFVBQVUsTUFBWixFQUFoQyxFQUFzRCxTQUFTLEtBQUt6RCxnQkFBTCxDQUFzQnNDLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLEtBQUt6SCxLQUFMLENBQVdHLFdBQTVDLEVBQXlELElBQXpELEVBQStELEtBQUtILEtBQUwsQ0FBV1csVUFBWCxHQUF3QixLQUF4QixHQUFnQyxJQUEvRixFQUFxRyxDQUFDLEtBQUtYLEtBQUwsQ0FBV1csVUFBWixHQUF5QixLQUF6QixHQUFpQyxJQUF0SSxFQUE0SSxLQUE1SSxDQUEvRDtBQUFvTiw2REFBS1gsS0FBTCxDQUFXVyxVQUFYLEdBQXdCLCtCQUF4QixHQUEwRDtBQUE5USxxREFESjtBQUdLLHlEQUFLWCxLQUFMLENBQVdjLGdCQUFYLEdBQThCLEVBQTlCLEdBQ0c7QUFBQTtBQUFBLDBEQUFHLFdBQVUsMEJBQWIsRUFBd0MsU0FBUyxLQUFLcUUsZ0JBQUwsQ0FBc0JzQyxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxLQUFLekgsS0FBTCxDQUFXRyxXQUE1QyxFQUF5RCxJQUF6RCxFQUErRCxLQUFLSCxLQUFMLENBQVdXLFVBQVgsR0FBd0IsSUFBeEIsR0FBK0IsS0FBOUYsRUFBcUcsQ0FBQyxLQUFLWCxLQUFMLENBQVdXLFVBQVosR0FBeUIsSUFBekIsR0FBZ0MsS0FBckksRUFBNEksS0FBNUksQ0FBakQ7QUFBQTtBQUFBO0FBSlI7QUFMWiw2Q0FESixHQWVNO0FBckJkLHlDQURKO0FBeUJJO0FBQUE7QUFBQSw4Q0FBTSxXQUFVLHVCQUFoQjtBQUF5QyxpREFBS1gsS0FBTCxDQUFXUztBQUFwRCx5Q0F6Qko7QUEwQkk7QUFBQTtBQUFBLDhDQUFNLFdBQVUsdUJBQWhCO0FBQXlDLGlEQUFLVCxLQUFMLENBQVdLO0FBQXBELHlDQTFCSjtBQTRCUSw2Q0FBS0wsS0FBTCxDQUFXTSxPQUFYLEdBQ0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsYUFBZjtBQUNJO0FBQUE7QUFBQSxrREFBUSxTQUFTLEtBQUs0RSxTQUFMLENBQWV1QyxJQUFmLENBQW9CLElBQXBCLENBQWpCLEVBQTRDLFVBQVUsS0FBSzFILEtBQUwsQ0FBVzhJLFVBQWpFLEVBQTZFLFdBQVUsc0NBQXZGO0FBQUE7QUFBQTtBQURKLHlDQURKLEdBTU07QUFBQTtBQUFBLDhDQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSxrREFBUSxTQUFTLEtBQUsxRCxnQkFBTCxDQUFzQnNDLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLEtBQUt6SCxLQUFMLENBQVdHLFdBQTVDLEVBQXlELEtBQXpELEVBQWdFLElBQWhFLEVBQXNFLEtBQXRFLENBQWpCLEVBQStGLFVBQVUsS0FBS0osS0FBTCxDQUFXMEksZ0JBQXBILEVBQXNJLFdBQVUsaURBQWhKO0FBQUE7QUFBQTtBQURGO0FBbENkO0FBSko7QUE5Q0osNkJBRko7QUErRkk7QUFBQTtBQUFBLGtDQUFHLFdBQVUsd0JBQWIsRUFBc0MsT0FBTyxFQUFFRyxVQUFVLEVBQVosRUFBN0M7QUFBQTtBQUF1RztBQUFBO0FBQUEsc0NBQUcsTUFBSyxRQUFSLEVBQWlCLFFBQU8sUUFBeEIsRUFBaUMsT0FBTyxFQUFFRSxvQ0FBRixFQUF4QztBQUFBO0FBQUEsaUNBQXZHO0FBQUE7QUFBcU47QUFBQTtBQUFBLHNDQUFHLE1BQUssVUFBUixFQUFtQixRQUFPLFFBQTFCLEVBQW1DLE9BQU8sRUFBRUEsb0NBQUYsRUFBMUM7QUFBQTtBQUFBO0FBQXJOO0FBL0ZKO0FBREo7QUFISixpQkFESjtBQXdHSDtBQUNKOzs7O0VBemhCdUJDLGdCQUFNQyxTOztrQkEyaEJuQmxKLGEiLCJmaWxlIjoiMzcuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgVmlwTG9naW5Qb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcm9maWxlX2lkOiAnJyxcbiAgICAgICAgICAgIG5ld3Byb2ZpbGU6IHt9LFxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHRoaXMucHJvcHMudXNlcl9sb2dnZWRJbl9udW1iZXI/dGhpcy5wcm9wcy51c2VyX2xvZ2dlZEluX251bWJlcjonJyxcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcjogJycsXG4gICAgICAgICAgICBzaG93T1RQOiBmYWxzZSxcbiAgICAgICAgICAgIG90cDogXCJcIixcbiAgICAgICAgICAgIG90cFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JfbWVzc2FnZTogJycsXG4gICAgICAgICAgICBpc0xlYWRUcnVlOiBmYWxzZSxcbiAgICAgICAgICAgIHNtc0J0blR5cGU6IG51bGwsXG4gICAgICAgICAgICBzZWxlY3RlZFByb2ZpbGVBZ2U6ICcnLFxuICAgICAgICAgICAgYWdlOiAnJyxcbiAgICAgICAgICAgIGVuYWJsZU90cFJlcXVlc3Q6IGZhbHNlLFxuICAgICAgICAgICAgdXNlcl9uYW1lOiAnJyxcbiAgICAgICAgICAgIHNlYXJjaF9jaXR5OiAnJyxcbiAgICAgICAgICAgIGZpbHRlcmVkX2NpdHlfbGlzdDogW10sXG4gICAgICAgICAgICBzaG93Q2l0eVNlYXJjaFBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkQ2l0eTogJydcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UocHJvZmlsZWlkLCBuZXdQcm9maWxlLCBzZWxlY3RlZFByb2ZpbGVBZ2UsIGV2ZW50KSB7XG4gICAgICAgIC8vIGxldCBuZXdQcm9maWxlTmFtZXMgPSB7fVxuICAgICAgICAvLyBsZXQgbmV3TmFtZSA9IG5ld1Byb2ZpbGUubmFtZS5zcGxpdChcIiBcIilcbiAgICAgICAgLy8gbGV0IHRlbXBBcnJheVxuICAgICAgICAvLyBpZiAobmV3TmFtZS5sZW5ndGggPT0gMikge1xuICAgICAgICAvLyAgICAgbmV3UHJvZmlsZU5hbWVzLm5hbWUgPSBuZXdOYW1lWzBdXG4gICAgICAgIC8vICAgICBuZXdQcm9maWxlTmFtZXMubGFzdF9uYW1lID0gbmV3TmFtZVsxXVxuICAgICAgICAvLyB9IGVsc2UgaWYgKG5ld05hbWUubGVuZ3RoID4gMikge1xuICAgICAgICAvLyAgICAgdGVtcEFycmF5ID0gbmV3TmFtZS5zbGljZSgxLCBuZXdOYW1lLmxlbmd0aClcbiAgICAgICAgLy8gICAgIG5ld1Byb2ZpbGVOYW1lcy5uYW1lID0gbmV3TmFtZVswXVxuICAgICAgICAvLyAgICAgbmV3UHJvZmlsZU5hbWVzLmxhc3RfbmFtZSA9IHRlbXBBcnJheS5qb2luKCcgJylcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIG5ld1Byb2ZpbGVOYW1lcy5uYW1lID0gbmV3TmFtZVswXVxuICAgICAgICAvLyAgICAgbmV3UHJvZmlsZU5hbWVzLmxhc3RfbmFtZSA9ICcnXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gbGV0IGV4YWN0UHJvZmlsZSA9IHsgLi4ubmV3UHJvZmlsZSwgLi4ubmV3UHJvZmlsZU5hbWVzIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2ZpbGVfaWQ6IHByb2ZpbGVpZCwgbmV3cHJvZmlsZTogbmV3UHJvZmlsZSwgc2VsZWN0ZWRQcm9maWxlQWdlOiBzZWxlY3RlZFByb2ZpbGVBZ2UsIGFnZTogbmV3UHJvZmlsZS5hZ2UgfSlcbiAgICB9XG4gICAgaW5wdXRIYW5kbGVyKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd09UUCAmJiBlLnRhcmdldC5uYW1lID09ICdwaG9uZU51bWJlcicpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLCB2YWxpZGF0aW9uRXJyb3I6IFwiXCIsIHNob3dPVFA6IGZhbHNlLCBvdHA6IFwiXCIsIGVycm9yX21lc3NhZ2U6ICcnIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VibWl0T1RQUmVxdWVzdChudW1iZXIsIHJlc2VuZEZsYWcgPSBmYWxzZSwgdmlhU21zLCB2aWFXaGF0c2FwcCwgZnJvbVBvcHVwID0gbnVsbCkgeyAgLy8gdG8gZ2VuZXJhdGUgb3RwXG4gICAgICAgIC8qaWYgKHRoaXMuc3RhdGUudXNlcl9uYW1lID09ICcnKSB7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6ICdFbnRlciB5b3VyIG5hbWUnIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSovXG5cbiAgICAgICAgbGV0IGxlYWRfZGF0YSA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBpZiAobnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiXCIgfSlcbiAgICAgICAgICAgIC8qaWYodGhpcy5wcm9wcy51c2VyX2NpdGllcyAmJiB0aGlzLnByb3BzLnVzZXJfY2l0aWVzLmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5zZWxlY3RlZENpdHkpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIHNlbGVjdCB0aGUgY2l0eVwiLCBlcnJvcl9tZXNzYWdlOiAnJyB9KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kT1RQKG51bWJlciwgdmlhU21zLCB2aWFXaGF0c2FwcCwgJ2luc3VyYW5jZS1sb2dpbicsIChlcnJvcikgPT4geyAvLyB0byBnZW5lcmF0ZSBvdHBcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJDb3VsZCBub3QgZ2VuZXJhdGUgT1RQLlwiIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKE9iamVjdC5rZXlzKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5nZW5lcmF0ZUluc3VyYW5jZUxlYWQodGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuID8gdGhpcy5wcm9wcy5zZWxlY3RlZF9wbGFuLmlkIDogJycsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIGxlYWRfZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVmlwQ2x1YkxvZ2luUG9wdXBDb250aW51ZScsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAndmlwLWxvZ2luLXBvcHVwLWNvbnRpbnVlLWNsaWNrJywgJ21vZGUnOiB2aWFTbXMgPyAndmlhU21zJyA6IHZpYVdoYXRzYXBwID8gJ3ZpYVdoYXRzYXBwJyA6ICcnLCAnbW9iaWxlTm8nOiB0aGlzLnN0YXRlLnBob25lTnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpYVdoYXRzYXBwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlT3RwUmVxdWVzdDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZU90cFJlcXVlc3Q6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPVFA6IHRydWUsIG90cFRpbWVvdXQ6IHRydWUsIHNtc0J0blR5cGU6IHZpYVNtcyA/IHRydWUgOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdHBUaW1lb3V0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwMClcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW5hYmxlT3RwUmVxdWVzdDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfSwgNjAwMDApXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21Qb3B1cCAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnMtZm9ybS1zbGlkZXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyb21Qb3B1cCA9PSAnb25lJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucy1mb3JtLXNsaWRlcicpWzBdLnNjcm9sbCh7IGxlZnQ6IDk5OSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucy1mb3JtLXNsaWRlcicpWzBdLnNjcm9sbCh7IGxlZnQ6IC05OTksIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBudW1iZXIgKDEwIGRpZ2l0cylcIiB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmVyaWZ5T1RQKCkgeyAgLy8gdG8gdmVyaWZ5IGVudGVyZWQgb3RwXG4gICAgICAgIGxldCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5vdHApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIGVudGVyIE9UUFwiLCBlcnJvcl9tZXNzYWdlOiAnJyB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3RwLmxlbmd0aCA8IDYgfHwgdGhpcy5zdGF0ZS5vdHAubGVuZ3RoID4gNikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJQbGVhc2UgZW50ZXIgdmFsaWQgT1RQXCIsIGVycm9yX21lc3NhZ2U6ICcnIH0pXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZWFkX2RhdGEgPSBwYXJzZWRcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiXCIgfSlcbiAgICAgICAgICAgIGxldCBleHRyYVBhcmFtc0RhdGEgPSB7fVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXRPVFAodGhpcy5zdGF0ZS5waG9uZU51bWJlciwgdGhpcy5zdGF0ZS5vdHAsIGV4dHJhUGFyYW1zRGF0YSwgKGV4aXN0cykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleGlzdHMuY29kZSA9PSAnaW52YWxpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yX21lc3NhZ2U6IGV4aXN0cy5tZXNzYWdlLCB2YWxpZGF0aW9uRXJyb3I6ICcnIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYodGhpcy5wcm9wcy52aXBQbHVzTGVhZCAmJiBwYXJzZWQgJiYgcGFyc2VkLnV0bV9zb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUudXNlcl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHBob25lX251bWJlcjogdGhpcy5zdGF0ZS5waG9uZU51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB1dG1fc291cmNlOiBwYXJzZWQudXRtX3NvdXJjZSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB1dG1fc3BvX3RhZ3M6IHBhcnNlZCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy52aXBQbHVzTGVhZChkYXRhKVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnSW5zdXJhbmNlTG9naW5Qb3B1cE9wdFZlcmlmaWVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdJbnN1cmFuY2UtbG9naW4tcG9wdXAtb3B0LXZlcmlmaWVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcGlfcGFyYW1zID0ge31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaV9wYXJhbXMuc2VsZWN0ZWRMb2NhdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpX3BhcmFtcy5pc1NhbGVzQWdlbnQgPSB0aGlzLnByb3BzLmlzU2FsZXNBZ2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpX3BhcmFtcy5pc0FnZW50ID0gdGhpcy5wcm9wcy5pc0FnZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlfcGFyYW1zLmlzX2dvbGQgPSB0aGlzLnByb3BzLmlzX2dvbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaV9wYXJhbXMuYWxsID0gdGhpcy5wcm9wcy5pc192aXBfZ29sZFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpX3BhcmFtcy5mcm9tV2hlcmUgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldFZpcExpc3QoZmFsc2UsIGFwaV9wYXJhbXMsIChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwLmNlcnRpZmljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSAnL3ZpcC1jbHViLW1lbWJlci1kZXRhaWxzP2lzRHVtbXk9dHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlYWRfZGF0YS51dG1fc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1dG1fc291cmNlPScgKyBsZWFkX2RhdGEudXRtX3NvdXJjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWFkX2RhdGEudXRtX3Rlcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCArPSAnJnV0bV90ZXJtPScgKyBsZWFkX2RhdGEudXRtX3Rlcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVhZF9kYXRhLnV0bV9jYW1wYWlnbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmdXRtX2NhbXBhaWduPScgKyBsZWFkX2RhdGEudXRtX2NhbXBhaWduXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlYWRfZGF0YS51dG1fbWVkaXVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1dG1fbWVkaXVtPScgKyBsZWFkX2RhdGEudXRtX21lZGl1bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWFkX2RhdGEuaXNfYWdlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCArPSAnJmlzX2FnZW50PScgKyBsZWFkX2RhdGEuaXNfYWdlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVhZF9kYXRhLmlzX2dvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCArPSAnJmlzX2dvbGQ9JyArIGxlYWRfZGF0YS5pc19nb2xkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKE9iamVjdC5rZXlzKHNlbGYucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBleHRyYVBhcmFtcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmlmKHRoaXMucHJvcHMudXNlcl9jaXRpZXMgJiYgdGhpcy5wcm9wcy51c2VyX2NpdGllcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhUGFyYW1zLmNpdHlfaWQgPSB0aGlzLnByb3BzLnVzZXJfY2l0aWVzLmZpbHRlcih4ID0+IHgubmFtZSA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2l0eSkubWFwKHggPT4geC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZihzZWxmLnByb3BzLmNvbW1vbl91dG1fdGFncyAmJiBzZWxmLnByb3BzLmNvbW1vbl91dG1fdGFncy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGV4dHJhUGFyYW1zID0gc2VsZi5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHg9PngudHlwZSA9PSBcImNvbW1vbl94dHJhX3RhZ3NcIilbMF0udXRtX3RhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCB2aXNpdG9yX2luZm8gPSBHVE0uZ2V0VmlzaXRvckluZm8oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYodmlzaXRvcl9pbmZvICYmIHZpc2l0b3JfaW5mby52aXNpdF9pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGVhZF9kYXRhLnZpc2l0X2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGVhZF9kYXRhLnZpc2l0b3JfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRvcl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBjcmVhdGUgdmlwIG9yIGdvbGQgbWVtYmVyIGxlYWQgZm9yIG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHNlbGYucHJvcHMuZ2VuZXJhdGVWaXBDbHViTGVhZCh7c2VsZWN0ZWRQbGFuOnNlbGYucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gPyBzZWxmLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkIDogJycsIG51bWJlcjpzZWxmLnN0YXRlLnBob25lTnVtYmVyLCBsZWFkX2RhdGE6bGVhZF9kYXRhLCBzZWxlY3RlZExvY2F0aW9uOnNlbGYucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgdXNlcl9uYW1lOnNlbGYuc3RhdGUudXNlcl9uYW1lLCBleHRyYVBhcmFtczpleHRyYVBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjYjogKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IExlYWRJZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1ZpcFBvcHVwTGVhZENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IHJlc3AubGVhZF9pZD9yZXNwLmxlYWRfaWQ6MCwgJ2V2ZW50JzogJ3ZpcC1wb3B1cC1sZWFkLWNsaWNrZWQnLCAnc291cmNlJzogbGVhZF9kYXRhLnNvdXJjZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBMZWFkSWREYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qc2VsZi5wcm9wcy5nZW5lcmF0ZVZpcENsdWJMZWFkKHNlbGYucHJvcHMuc2VsZWN0ZWRfdmlwX3BsYW4gPyBzZWxmLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuLmlkIDogJycsIHNlbGYuc3RhdGUucGhvbmVOdW1iZXIsbGVhZF9kYXRhLCBzZWxmLnByb3BzLnNlbGVjdGVkTG9jYXRpb24sc2VsZi5zdGF0ZS51c2VyX25hbWUsIGV4dHJhUGFyYW1zLCAocmVzcCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgTGVhZElkRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdWaXBMZWFkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogcmVzcC5sZWFkX2lkID8gcmVzcC5sZWFkX2lkIDogMCwgJ2V2ZW50JzogJ3ZpcC1sZWFkLWNsaWNrZWQnLCAnc291cmNlJzogbGVhZF9kYXRhLnNvdXJjZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogTGVhZElkRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMudXNlcl9leGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAoKSAvLyB0byBjbG9zZSBsZWFkIHBvcHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlTGVhZFBvcHVwKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgndmlwLWNsdWItYWN0aXZhdGVkLWRldGFpbHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgndmlwLWNsdWItYWN0aXZhdGVkLWRldGFpbHM/dXRtX3NvdXJjZT0nK3RoaXMucHJvcHMuaXNTYWxlc0FnZW50KycmaXNfYWdlbnQ9Jyt0aGlzLnByb3BzLmlzQWdlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBudW1iZXIgKDEwIGRpZ2l0cylcIiB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZUtleVByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLnZlcmlmeU9UUCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGFuZGxlQ29udGludWVQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNob3dPVFApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdE9UUFJlcXVlc3QodGhpcy5zdGF0ZS5waG9uZU51bWJlciwgJycsIHRydWUsIGZhbHNlLCAnb25lJykgLy8gdG8gZ2VuZXJhdGUgb3RwIHJlcXVlc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVkaXROdW1iZXIoKSB7XG4gICAgICAgIGxldCBudW1iZXIgPSB0aGlzLnN0YXRlLnBob25lTnVtYmVyXG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJylbMF0uc2Nyb2xsKHsgbGVmdDogLTk5OSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiLCBzaG93T1RQOiBmYWxzZSwgb3RwOiBcIlwiLCBwaG9uZU51bWJlcjogJycgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaG9uZU51bWJlcjogbnVtYmVyIH0pXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXJcIikuZm9jdXMoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMjAwKVxuICAgIH1cbiAgICBjbG9zZVNlbGVjdEZyb21Qcm9maWxlKCkge1xuICAgICAgICBsZXQgdGhyZXNob2xkX21heF9hZ2VcbiAgICAgICAgbGV0IHRocmVzaG9sZF9taW5fYWdlXG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2VcblxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlUG9wdXAodGhpcy5zdGF0ZS5wcm9maWxlX2lkLCB0aGlzLnByb3BzLm1lbWJlcl9pZCwgdGhpcy5zdGF0ZS5uZXdwcm9maWxlKVxuICAgIH1cblxuICAgIGhhbmRsZUNpdHlJbnV0KHR5cGUsIGV2ZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoX3N0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRfZG9jdG9yX2xpc3QgPSBbXVxuICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyX2NpdGllcyAmJiB0aGlzLnByb3BzLnVzZXJfY2l0aWVzLm1hcCgoZG9jdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRvY3Rvcl9uYW1lID0gKGRvY3Rvci5uYW1lKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgaWYgKGRvY3Rvcl9uYW1lLmluY2x1ZGVzKHNlYXJjaF9zdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGRvY3Rvcl9uYW1lLmluZGV4T2Yoc2VhcmNoX3N0cmluZylcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRfZG9jdG9yX2xpc3QucHVzaCh7IGlkOiBkb2N0b3IuaWQsIG5hbWU6IGRvY3Rvci5uYW1lLCByYW5rOiBpbmRleCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBmaWx0ZXJlZF9kb2N0b3JfbGlzdCA9IGZpbHRlcmVkX2RvY3Rvcl9saXN0LnNvcnQoKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC5yYW5rIC0geS5yYW5rXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFt0eXBlXTogZXZlbnQudGFyZ2V0LnZhbHVlLCBmaWx0ZXJlZF9jaXR5X2xpc3Q6IGZpbHRlcmVkX2RvY3Rvcl9saXN0IH0pXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tDaXR5TGlzdCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgJ3NlbGVjdGVkQ2l0eSc6IHZhbHVlLCBmaWx0ZXJlZF9jaXR5X2xpc3Q6IFtdLCBzZWFyY2hfY2l0eTogdmFsdWUsIHNob3dDaXR5U2VhcmNoUG9wdXA6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgb25Gb2N1c0luKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyZWRfY2l0eV9saXN0OiB0aGlzLnByb3BzLnVzZXJfY2l0aWVzLCBzZWFyY2hfY2l0eTogJycsIHNob3dDaXR5U2VhcmNoUG9wdXA6IHRydWUgfSlcbiAgICB9XG5cbiAgICBvbkZvY3VzT3V0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfY2l0eTogdGhpcy5zdGF0ZS5zZWxlY3RlZENpdHksIHNob3dDaXR5U2VhcmNoUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0sIDUwMClcblxuICAgIH1cblxuICAgIGFkZE1lbWJlckJ5U2VsZigpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRNZW1iZXJzKHRydWUpXG4gICAgICAgIHRoaXMucHJvcHMuaGlkZVNlbGVjdFByb2ZpbGVQb3B1cCgpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc1NlbGVjdHByb2ZpbGUpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50U2VsZWN0ZWRQcm9maWxlcyA9IFtdXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93X3NlbGVjdGVkX3Byb2ZpbGVzICYmIHRoaXMucHJvcHMuc2hvd19zZWxlY3RlZF9wcm9maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VsZWN0ZWRQcm9maWxlcy5wdXNoKHZhbFtrZXldKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYWxyZWFkeV91c2Vyc19pZHMgPSBbXVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlciAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YSkubGVuZ3RoID4gMCAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlfdXNlcnNfaWRzLnB1c2godmFsLnByb2ZpbGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVTZWxlY3RQcm9maWxlUG9wdXAuYmluZCh0aGlzKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwIG9uc2NyZWVuLXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3AtdG9wLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBGYW1pbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0gb25DbGljaz17dGhpcy5wcm9wcy5oaWRlU2VsZWN0UHJvZmlsZVBvcHVwLmJpbmQodGhpcyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcnQtY2xvc2Uuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCB9fSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyIHBvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1zLWNvbmRpdGlvbi1kaXYgb25zY3JlZW4tc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1yYWRpbyBpbnNyYWRpby1vbi1wb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlVTRVIgJiYgdGhpcy5wcm9wcy5VU0VSLnByb2ZpbGVzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLnNob3dfc2VsZWN0ZWRfcHJvZmlsZXMgJiYgdGhpcy5wcm9wcy5zaG93X3NlbGVjdGVkX3Byb2ZpbGVzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNlbGVjdGVkUHJvZmlsZXMuaW5kZXhPZihwYXJzZUludChrZXkpKSA9PSAtMSAmJiBhbHJlYWR5X3VzZXJzX2lkcy5pbmRleE9mKHBhcnNlSW50KGtleSkpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcm9maWxlX2lkXCIgdmFsdWU9JycgaWQ9e2tleX0gZGF0YS1wYXJhbT0ncHJvZmlsZV9pZCcgY2hlY2tlZD17dGhpcy5zdGF0ZS5wcm9maWxlX2lkID09PSB2YWx1ZS5pZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgdmFsdWUuaWQsIHZhbHVlLCB2YWx1ZS5hZ2UpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNfZnJvbV9wYXltZW50ID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTUwMCBteS1wcm9maWxlLWl0ZW1cIiBvbkNsaWNrPXt0aGlzLmFkZE1lbWJlckJ5U2VsZi5iaW5kKHRoaXMpfT5BZGQgTmV3IFByb2ZpbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9jZWR1cmVzLWJ0bi1wb3BcIiBvbkNsaWNrPXt0aGlzLmNsb3NlU2VsZWN0RnJvbVByb2ZpbGUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUucHJvZmlsZV9pZCA9PSAnJyA/ICdmdy01MDAgYnRuLWRpc2FibGVkJyA6ICdmdy01MDAnfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5wcm9maWxlX2lkID09ICcnID8gJ2Rpc2FibGVkJyA6ICcnfT5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pc19zZWVfbW9yZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyAgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNhbmNlbC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleGB9IG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2JpbGUtdmVyaWZpY2F0aW9uLXNjcmVlbiBwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd2lkZ2V0IG5vLXNoYWRvdyBuby1yb3VuZCBzaWduLXVwLWNvbnRhaW5lciB3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgYWN0aW9uLXNjcmVlbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTGVhZFBvcHVwLmJpbmQodGhpcyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcnQtY2xvc2Uuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCB9fSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+RXhhbXBsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtYXZhaWwtcG9wdXAtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZsLWNhcmQtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmwtbGVmdC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RG9jdG9yIEFwcG9pbnRtZW50czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BdmVyYWdlIDQwJSBPRkY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZsLXJpZ2h0LWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1by1wcmljZS1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVvLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NUlA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXQtcHJpY2VcIj7igrkxMDAwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdW8tcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBQYXk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiLTBcIj7igrk2MDA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYXZsLXN2bmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2F2aW5ncyDigrk0MDA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZsLWNhcmQtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmwtbGVmdC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGFiIFRlc3RzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkF2ZXJhZ2UgNDUlIE9GRjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmwtcmlnaHQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVvLXByaWNlLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdW8tcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1SUDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1dC1wcmljZVwiPuKCuTEwMDA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1by1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IFBheTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImItMFwiPuKCuTU1MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBhdmwtc3ZuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TYXZpbmdzIOKCuTQ1MDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmwtY2FyZC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2bC1sZWZ0LWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NZWRpY2luZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QXZlcmFnZSAyMyUgT0ZGPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2bC1yaWdodC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdW8tcHJpY2UtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1by1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TVJQPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3V0LXByaWNlXCI+4oK5NzAwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdW8tcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBQYXk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiLTBcIj7igrk1NDA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYXZsLXN2bmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2F2aW5ncyDigrkxNjA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmwtZm9vdC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdmwtZm9vdC10ZXh0XCI+UG90ZW50aWFsIFNhdmluZ3MgPHNwYW4gY2xhc3NOYW1lPVwiYXZsLWNvbnRcIj7igrkxMDEwIFggNjwvc3Bhbj4gRmFtaWx5IG1lbWJlcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdmwtY29udFwiPiDigrk2MDYwL3lyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03ICBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4YH0gb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZUxlYWRQb3B1cC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vYmlsZS12ZXJpZmljYXRpb24tc2NyZWVuIHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3aWRnZXQgbm8tc2hhZG93IG5vLXJvdW5kIHNpZ24tdXAtY29udGFpbmVyIHdpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZUxlYWRQb3B1cC5iaW5kKHRoaXMpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3J0LWNsb3NlLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTQgfX0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1zbGlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBtdi1oZWFkZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kIHNpZ24tdXAtbWJsLXRleHRcIj5FbnRlciB5b3VyIHJlZ2lzdGVyZWQgbW9iaWxlIG51bWJlciB0byBsb2dpbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbW9iaWxlLWZpZWxkIHN1cC1pbnB1dC1wZG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiYWRvbi1ncm91cCBlbnRlci1tb2JpbGUtbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBjbGFzc05hbWU9XCJmYy1pbnB1dCB0ZXh0LWNlbnRlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcl9uYW1lfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cInVzZXJfbmFtZVwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLnNob3dPVFAgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgZW50ZXItbW9iaWxlLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1vYmlsZSBudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZUNvbnRpbnVlUHJlc3MuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2hvd09UUCA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiYWRvbi1ncm91cCBlbnRlci1tb2JpbGUtbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyIFwiIHBsYWNlaG9sZGVyPSdTZWFyY2ggQ2l0aWVzJyBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaXR5SW51dC5iaW5kKHRoaXMsICdzZWFyY2hfY2l0eScpfSBvbkZvY3VzPXt0aGlzLm9uRm9jdXNJbi5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMub25Gb2N1c091dC5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hfY2l0eX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dDaXR5U2VhcmNoUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1zcmNoLWZsdHIgdmlwLXNsY3QtcG9wXCIgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlcmVkX2NpdHlfbGlzdCAmJiB0aGlzLnN0YXRlLmZpbHRlcmVkX2NpdHlfbGlzdC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlcmVkX2NpdHlfbGlzdC5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImN1cnNvci1wbnRyXCIga2V5PXtrZXl9IGlkPXtkYXRhLmlkfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tDaXR5TGlzdChkYXRhLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8cD5ObyByZXN1bHQgZm91bmQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLmVycm9yX21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZSBtLTAgbWItMlwiPnt0aGlzLnN0YXRlLnZhbGlkYXRpb25FcnJvcn08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgZmFsc2UsIHRydWUsIGZhbHNlLCAnb25lJyl9IGRpc2FibGVkPXt0aGlzLnByb3BzLm90cF9yZXF1ZXN0X3NlbnR9IGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGxnLXNtcy1idG4gYnRuLWdyZG50XCI+TGV04oCZcyBnZXQgeW91IGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIG12LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCI+RW50ZXIgdGhlIE9UUCB3ZeKAmXZlIHNlbnQgdG8geW91ciBtb2JpbGUgbnVtYmVyPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtb2JpbGUtZmllbGQgc3VwLWlucHV0LXBkbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmYy1pbnB1dCB0ZXh0LWNlbnRlclwiIHBsYWNlaG9sZGVyPVwiMTAgZGlnaXQgbW9iaWxlIG51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lTnVtYmVyfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cInBob25lTnVtYmVyXCIgb25LZXlQcmVzcz17dGhpcy5faGFuZGxlQ29udGludWVQcmVzcy5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zaG93T1RQID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5zLW51bS1lZGl0XCIgb25DbGljaz17dGhpcy5lZGl0TnVtYmVyLmJpbmQodGhpcyl9PkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dPVFAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRvbi1ncm91cCBlbnRlci1tb2JpbGUtbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZjLWlucHV0IHRleHQtY2VudGVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBPVFBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5vdHB9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwib3RwXCIgb25LZXlQcmVzcz17dGhpcy5faGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vdHBUaW1lb3V0ID8gXCJcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzZW5kT3RwXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fSBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCB0cnVlLCB0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyBmYWxzZSA6IHRydWUsICF0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyBmYWxzZSA6IHRydWUsICdvbmUnKX0+e3RoaXMuc3RhdGUuc21zQnRuVHlwZSA/ICdQcmVmZXIgd2UgV2hhdHNBcHAgaXQgdG8geW91PycgOiAnU2VuZCB2aWEgU01TJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lbmFibGVPdHBSZXF1ZXN0ID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzZW5kT3RwIGlucy1vdHAtcmVzZW5kXCIgb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgdHJ1ZSwgdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gdHJ1ZSA6IGZhbHNlLCAhdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gdHJ1ZSA6IGZhbHNlLCAnb25lJyl9PlJlc2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uRXJyb3J9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93T1RQID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudmVyaWZ5T1RQLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnByb3BzLnN1Ym1pdF9vdHB9IGNsYXNzTmFtZT1cImJ0bi1ncmRudCB2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2Nlc3MgTm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdE9UUFJlcXVlc3QuYmluZCh0aGlzLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCBmYWxzZSwgdHJ1ZSwgZmFsc2UpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5vdHBfcmVxdWVzdF9zZW50fSBjbGFzc05hbWU9XCJ2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1zbSBsZy1zbXMtYnRuIGJ0bi1ncmRudFwiPkxldOKAmXMgZ2V0IHlvdSBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZnctNTAwIHAtM1wiIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fSA+QnkgcHJvY2VlZGluZywgeW91IGhlcmVieSBhZ3JlZSB0byB0aGUgPGEgaHJlZj1cIi90ZXJtc1wiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSA+RW5kIFVzZXIgQWdyZWVtZW50PC9hPiBhbmQgPGEgaHJlZj1cIi9wcml2YWN5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5Qcml2YWN5IFBvbGljeS48L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBWaXBMb2dpblBvcHVwIl0sInNvdXJjZVJvb3QiOiIifQ==