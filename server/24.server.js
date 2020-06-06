exports.ids = [24];
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class VipLoginPopup extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_id: '',
            newprofile: {},
            phoneNumber: this.props.user_loggedIn_number ? this.props.user_loggedIn_number : '',
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
    }
    handleChange(profileid, newProfile, selectedProfileAge, event) {
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
    inputHandler(e) {
        if (this.state.showOTP && e.target.name == 'phoneNumber') {
            this.setState({ [e.target.name]: e.target.value, validationError: "", showOTP: false, otp: "", error_message: '' });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    submitOTPRequest(number, resendFlag = false, viaSms, viaWhatsapp, fromPopup = null) {
        // to generate otp
        /*if (this.state.user_name == '') {
            SnackBar.show({ pos: 'bottom-center', text: 'Enter your name' })
            return
        }*/

        let lead_data = queryString.parse(this.props.location.search);
        if (number.match(/^[56789]{1}[0-9]{9}$/)) {

            this.setState({ validationError: "" });
            /*if(this.props.user_cities && this.props.user_cities.length && !this.state.selectedCity){
                this.setState({ validationError: "Please select the city", error_message: '' })
                return;
            }*/
            this.props.sendOTP(number, viaSms, viaWhatsapp, 'insurance-login', error => {
                // to generate otp
                if (error) {
                    // this.setState({ validationError: "Could not generate OTP." })
                } else {
                    // if (Object.keys(this.props.selected_plan).length > 0) {
                    //     this.props.generateInsuranceLead(this.props.selected_plan ? this.props.selected_plan.id : '', this.state.phoneNumber, lead_data)
                    // }
                    let data = {
                        'Category': 'ConsumerApp', 'Action': 'VipClubLoginPopupContinue', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'vip-login-popup-continue-click', 'mode': viaSms ? 'viaSms' : viaWhatsapp ? 'viaWhatsapp' : '', 'mobileNo': this.state.phoneNumber
                    };
                    _gtm2.default.sendEvent({ data: data });
                    if (viaWhatsapp) {
                        this.setState({ enableOtpRequest: true });
                    } else {
                        this.setState({ enableOtpRequest: false });
                    }
                    this.setState({ showOTP: true, otpTimeout: true, smsBtnType: viaSms ? true : false });
                    setTimeout(() => {
                        this.setState({ otpTimeout: false });
                    }, 20000);
                    setTimeout(() => {
                        this.setState({ enableOtpRequest: false });
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

    verifyOTP() {
        // to verify entered otp
        let parsed = queryString.parse(this.props.location.search);
        let self = this;
        if (!this.state.otp) {
            this.setState({ validationError: "Please enter OTP", error_message: '' });
            return;
        }
        if (this.state.otp.length < 6 || this.state.otp.length > 6) {
            this.setState({ validationError: "Please enter valid OTP", error_message: '' });
            return;
        }

        let lead_data = parsed;
        if (this.state.phoneNumber.match(/^[56789]{1}[0-9]{9}$/)) {
            this.setState({ validationError: "" });
            let extraParamsData = {};
            this.props.submitOTP(this.state.phoneNumber, this.state.otp, extraParamsData, exists => {
                if (exists.code == 'invalid') {
                    this.setState({ error_message: exists.message, validationError: '' });
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
                        let api_params = {};
                        api_params.selectedLocation = this.props.selectedLocation;
                        api_params.isSalesAgent = this.props.isSalesAgent;
                        api_params.isAgent = this.props.isAgent;
                        api_params.is_gold = this.props.is_gold;
                        api_params.all = this.props.is_vip_gold;
                        api_params.fromWhere = null;
                        this.props.getVipList(false, api_params, resp => {
                            this.props.getUserProfile();
                            if (!resp.certificate) {
                                let url = '/vip-club-member-details?isDummy=true';
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
                                    this.props.closeLeadPopup(); // to close lead popup
                                    this.props.history.push(url);
                                } else {
                                    this.props.closeLeadPopup();
                                    this.props.history.push(url);
                                }
                            } else {
                                this.props.closeLeadPopup();
                                this.props.history.push('vip-club-activated-details');
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

    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.verifyOTP();
        }
    }

    _handleContinuePress(e) {
        if (e.key === 'Enter') {
            if (!this.state.showOTP) {
                this.submitOTPRequest(this.state.phoneNumber, '', true, false, 'one'); // to generate otp request
            }
        }
    }

    editNumber() {
        let number = this.state.phoneNumber;

        document.getElementsByClassName('ins-form-slider')[0].scroll({ left: -999, behavior: 'smooth' });

        setTimeout(() => {
            this.setState({ validationError: "", showOTP: false, otp: "", phoneNumber: '' }, () => {
                this.setState({ phoneNumber: number });
                document.getElementById("number").focus();
            });
        }, 200);
    }
    closeSelectFromProfile() {
        let threshold_max_age;
        let threshold_min_age;
        let errorMessage;

        this.props.closePopup(this.state.profile_id, this.props.member_id, this.state.newprofile);
    }

    handleCityInut(type, event) {
        try {
            let search_string = event.target.value.toLowerCase();
            let filtered_doctor_list = [];
            this.props.user_cities && this.props.user_cities.map(doctor => {
                let doctor_name = doctor.name.toLowerCase();
                if (doctor_name.includes(search_string)) {
                    let index = doctor_name.indexOf(search_string);
                    filtered_doctor_list.push({ id: doctor.id, name: doctor.name, rank: index });
                }
            });
            filtered_doctor_list = filtered_doctor_list.sort((x, y) => {
                return x.rank - y.rank;
            });
            this.setState({ [type]: event.target.value, filtered_city_list: filtered_doctor_list });
        } catch (e) {}
    }

    clickCityList(value) {
        this.setState({ 'selectedCity': value, filtered_city_list: [], search_city: value, showCitySearchPopup: false });
    }

    onFocusIn() {
        this.setState({ filtered_city_list: this.props.user_cities, search_city: '', showCitySearchPopup: true });
    }

    onFocusOut() {
        setTimeout(() => {
            this.setState({ search_city: this.state.selectedCity, showCitySearchPopup: false });
        }, 500);
    }

    addMemberBySelf() {
        this.props.addMembers(true);
        this.props.hideSelectProfilePopup();
    }

    render() {
        if (this.props.isSelectprofile) {
            let currentSelectedProfiles = [];
            if (this.props.show_selected_profiles && this.props.show_selected_profiles.length > 0) {
                this.props.currentSelectedVipMembersId.map((val, key) => {
                    currentSelectedProfiles.push(val[key]);
                });
            }
            let already_users_ids = [];
            if (this.props.vip_club_db_data && Object.keys(this.props.vip_club_db_data).length > 0 && this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data).length > 0 && Object.keys(this.props.vip_club_db_data.data.user).length > 0 && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0) {
                this.props.vip_club_db_data.data.user.plus_members.map((val, key) => {
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
                            this.props.USER && this.props.USER.profiles && Object.keys(this.props.USER.profiles).length > 0 && this.props.show_selected_profiles && this.props.show_selected_profiles.length > 0 ? Object.entries(this.props.USER.profiles).map(function ([key, value]) {

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
                _react2.default.createElement('div', { className: `cancel-overlay cancel-overlay-zindex`, onClick: this.props.closeLeadPopup.bind(this) }),
                _react2.default.createElement(
                    'section',
                    { className: 'mobile-verification-screen p-3' },
                    _react2.default.createElement(
                        'div',
                        { className: `widget no-shadow no-round sign-up-container widget cancel-appointment-div cancel-popup` },
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
                _react2.default.createElement('div', { className: `cancel-overlay cancel-overlay-zindex`, onClick: this.props.closeLeadPopup.bind(this) }),
                _react2.default.createElement(
                    'section',
                    { className: 'mobile-verification-screen p-3' },
                    _react2.default.createElement(
                        'div',
                        { className: `widget no-shadow no-round sign-up-container widget cancel-appointment-div cancel-popup` },
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
                                { href: '/terms', target: '_blank', style: { color: `var(--text--primary--color)` } },
                                'End User Agreement'
                            ),
                            ' and ',
                            _react2.default.createElement(
                                'a',
                                { href: '/privacy', target: '_blank', style: { color: `var(--text--primary--color)` } },
                                'Privacy Policy.'
                            )
                        )
                    )
                )
            );
        }
    }
}
exports.default = VipLoginPopup;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi92aXBDbHViUG9wdXAuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJWaXBMb2dpblBvcHVwIiwic3RhdGUiLCJwcm9maWxlX2lkIiwibmV3cHJvZmlsZSIsInBob25lTnVtYmVyIiwidXNlcl9sb2dnZWRJbl9udW1iZXIiLCJ2YWxpZGF0aW9uRXJyb3IiLCJzaG93T1RQIiwib3RwIiwib3RwVGltZW91dCIsImVycm9yX21lc3NhZ2UiLCJpc0xlYWRUcnVlIiwic21zQnRuVHlwZSIsInNlbGVjdGVkUHJvZmlsZUFnZSIsImFnZSIsImVuYWJsZU90cFJlcXVlc3QiLCJ1c2VyX25hbWUiLCJzZWFyY2hfY2l0eSIsImZpbHRlcmVkX2NpdHlfbGlzdCIsInNob3dDaXR5U2VhcmNoUG9wdXAiLCJzZWxlY3RlZENpdHkiLCJoYW5kbGVDaGFuZ2UiLCJwcm9maWxlaWQiLCJuZXdQcm9maWxlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImlucHV0SGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRPVFBSZXF1ZXN0IiwibnVtYmVyIiwicmVzZW5kRmxhZyIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwiZnJvbVBvcHVwIiwibGVhZF9kYXRhIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsIm1hdGNoIiwic2VuZE9UUCIsImVycm9yIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzY3JvbGwiLCJsZWZ0IiwiYmVoYXZpb3IiLCJ2ZXJpZnlPVFAiLCJwYXJzZWQiLCJzZWxmIiwibGVuZ3RoIiwiZXh0cmFQYXJhbXNEYXRhIiwic3VibWl0T1RQIiwiZXhpc3RzIiwiY29kZSIsIm1lc3NhZ2UiLCJ0b2tlbiIsImFwaV9wYXJhbXMiLCJzZWxlY3RlZExvY2F0aW9uIiwiaXNTYWxlc0FnZW50IiwiaXNBZ2VudCIsImlzX2dvbGQiLCJhbGwiLCJpc192aXBfZ29sZCIsImZyb21XaGVyZSIsImdldFZpcExpc3QiLCJyZXNwIiwiZ2V0VXNlclByb2ZpbGUiLCJjZXJ0aWZpY2F0ZSIsInVybCIsInV0bV9zb3VyY2UiLCJ1dG1fdGVybSIsInV0bV9jYW1wYWlnbiIsInV0bV9tZWRpdW0iLCJpc19hZ2VudCIsInVzZXJfZXhpc3RzIiwiY2xvc2VMZWFkUG9wdXAiLCJoaXN0b3J5IiwicHVzaCIsIl9oYW5kbGVLZXlQcmVzcyIsImtleSIsIl9oYW5kbGVDb250aW51ZVByZXNzIiwiZWRpdE51bWJlciIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJjbG9zZVNlbGVjdEZyb21Qcm9maWxlIiwidGhyZXNob2xkX21heF9hZ2UiLCJ0aHJlc2hvbGRfbWluX2FnZSIsImVycm9yTWVzc2FnZSIsImNsb3NlUG9wdXAiLCJtZW1iZXJfaWQiLCJoYW5kbGVDaXR5SW51dCIsInR5cGUiLCJzZWFyY2hfc3RyaW5nIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXJlZF9kb2N0b3JfbGlzdCIsInVzZXJfY2l0aWVzIiwibWFwIiwiZG9jdG9yIiwiZG9jdG9yX25hbWUiLCJpbmNsdWRlcyIsImluZGV4IiwiaW5kZXhPZiIsImlkIiwicmFuayIsInNvcnQiLCJ4IiwieSIsImNsaWNrQ2l0eUxpc3QiLCJvbkZvY3VzSW4iLCJvbkZvY3VzT3V0IiwiYWRkTWVtYmVyQnlTZWxmIiwiYWRkTWVtYmVycyIsImhpZGVTZWxlY3RQcm9maWxlUG9wdXAiLCJpc1NlbGVjdHByb2ZpbGUiLCJjdXJyZW50U2VsZWN0ZWRQcm9maWxlcyIsInNob3dfc2VsZWN0ZWRfcHJvZmlsZXMiLCJjdXJyZW50U2VsZWN0ZWRWaXBNZW1iZXJzSWQiLCJ2YWwiLCJhbHJlYWR5X3VzZXJzX2lkcyIsInZpcF9jbHViX2RiX2RhdGEiLCJPYmplY3QiLCJrZXlzIiwidXNlciIsInBsdXNfbWVtYmVycyIsInByb2ZpbGUiLCJiaW5kIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiLCJBU1NFVFNfQkFTRV9VUkwiLCJ3aWR0aCIsIlVTRVIiLCJwcm9maWxlcyIsImVudHJpZXMiLCJwYXJzZUludCIsImlzX2Zyb21fcGF5bWVudCIsImlzX3NlZV9tb3JlIiwib3RwX3JlcXVlc3Rfc2VudCIsImZvbnRTaXplIiwic3VibWl0X290cCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxNQUFNQSxNQUFOLFNBQXFCQyxnQkFBTUMsU0FBM0IsQ0FBcUM7QUFDakNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNIOztBQUVEQyxhQUFTOztBQUVMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVyxLQUFLRCxLQUFMLENBQVdFLFNBQVgsSUFBd0IsZ0JBQXhDO0FBQ0ksbURBQUssV0FBVSxXQUFmLEdBREo7QUFHUSxpQkFBS0YsS0FBTCxDQUFXRyxXQUFYLEdBQ0k7QUFBQTtBQUFBLGtCQUFHLFdBQVUsZUFBYjtBQUFBO0FBQUEsYUFESixHQUMrRTtBQUp2RixTQURKO0FBU0g7QUFoQmdDOztrQkFtQnRCUCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7OztrQkFFZUEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRkEsTUFBTVEsY0FBY0MsbUJBQU9BLENBQUMsa0NBQVIsQ0FBcEI7OztBQUlBLE1BQU1DLGFBQU4sU0FBNEJULGdCQUFNQyxTQUFsQyxDQUE0QztBQUN4Q0Ms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QUFBO0FBREY7QUFsQ2Q7QUFKSjtBQTlDSix5QkFGSjtBQStGSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSx3QkFBYixFQUFzQyxPQUFPLEVBQUVDLFVBQVUsRUFBWixFQUE3QztBQUFBO0FBQXVHO0FBQUE7QUFBQSxrQ0FBRyxNQUFLLFFBQVIsRUFBaUIsUUFBTyxRQUF4QixFQUFpQyxPQUFPLEVBQUVFLE9BQVEsNkJBQVYsRUFBeEM7QUFBQTtBQUFBLDZCQUF2RztBQUFBO0FBQXFOO0FBQUE7QUFBQSxrQ0FBRyxNQUFLLFVBQVIsRUFBbUIsUUFBTyxRQUExQixFQUFtQyxPQUFPLEVBQUVBLE9BQVEsNkJBQVYsRUFBMUM7QUFBQTtBQUFBO0FBQXJOO0FBL0ZKO0FBREo7QUFISixhQURKO0FBd0dIO0FBQ0o7QUF6aEJ1QztrQkEyaEI3Qm5KLGEiLCJmaWxlIjoiMjQuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIFZpcExvZ2luUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJvZmlsZV9pZDogJycsXG4gICAgICAgICAgICBuZXdwcm9maWxlOiB7fSxcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiB0aGlzLnByb3BzLnVzZXJfbG9nZ2VkSW5fbnVtYmVyP3RoaXMucHJvcHMudXNlcl9sb2dnZWRJbl9udW1iZXI6JycsXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I6ICcnLFxuICAgICAgICAgICAgc2hvd09UUDogZmFsc2UsXG4gICAgICAgICAgICBvdHA6IFwiXCIsXG4gICAgICAgICAgICBvdHBUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yX21lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgaXNMZWFkVHJ1ZTogZmFsc2UsXG4gICAgICAgICAgICBzbXNCdG5UeXBlOiBudWxsLFxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9maWxlQWdlOiAnJyxcbiAgICAgICAgICAgIGFnZTogJycsXG4gICAgICAgICAgICBlbmFibGVPdHBSZXF1ZXN0OiBmYWxzZSxcbiAgICAgICAgICAgIHVzZXJfbmFtZTogJycsXG4gICAgICAgICAgICBzZWFyY2hfY2l0eTogJycsXG4gICAgICAgICAgICBmaWx0ZXJlZF9jaXR5X2xpc3Q6IFtdLFxuICAgICAgICAgICAgc2hvd0NpdHlTZWFyY2hQb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZENpdHk6ICcnXG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlKHByb2ZpbGVpZCwgbmV3UHJvZmlsZSwgc2VsZWN0ZWRQcm9maWxlQWdlLCBldmVudCkge1xuICAgICAgICAvLyBsZXQgbmV3UHJvZmlsZU5hbWVzID0ge31cbiAgICAgICAgLy8gbGV0IG5ld05hbWUgPSBuZXdQcm9maWxlLm5hbWUuc3BsaXQoXCIgXCIpXG4gICAgICAgIC8vIGxldCB0ZW1wQXJyYXlcbiAgICAgICAgLy8gaWYgKG5ld05hbWUubGVuZ3RoID09IDIpIHtcbiAgICAgICAgLy8gICAgIG5ld1Byb2ZpbGVOYW1lcy5uYW1lID0gbmV3TmFtZVswXVxuICAgICAgICAvLyAgICAgbmV3UHJvZmlsZU5hbWVzLmxhc3RfbmFtZSA9IG5ld05hbWVbMV1cbiAgICAgICAgLy8gfSBlbHNlIGlmIChuZXdOYW1lLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgLy8gICAgIHRlbXBBcnJheSA9IG5ld05hbWUuc2xpY2UoMSwgbmV3TmFtZS5sZW5ndGgpXG4gICAgICAgIC8vICAgICBuZXdQcm9maWxlTmFtZXMubmFtZSA9IG5ld05hbWVbMF1cbiAgICAgICAgLy8gICAgIG5ld1Byb2ZpbGVOYW1lcy5sYXN0X25hbWUgPSB0ZW1wQXJyYXkuam9pbignICcpXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBuZXdQcm9maWxlTmFtZXMubmFtZSA9IG5ld05hbWVbMF1cbiAgICAgICAgLy8gICAgIG5ld1Byb2ZpbGVOYW1lcy5sYXN0X25hbWUgPSAnJ1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGxldCBleGFjdFByb2ZpbGUgPSB7IC4uLm5ld1Byb2ZpbGUsIC4uLm5ld1Byb2ZpbGVOYW1lcyB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlX2lkOiBwcm9maWxlaWQsIG5ld3Byb2ZpbGU6IG5ld1Byb2ZpbGUsIHNlbGVjdGVkUHJvZmlsZUFnZTogc2VsZWN0ZWRQcm9maWxlQWdlLCBhZ2U6IG5ld1Byb2ZpbGUuYWdlIH0pXG4gICAgfVxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dPVFAgJiYgZS50YXJnZXQubmFtZSA9PSAncGhvbmVOdW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSwgdmFsaWRhdGlvbkVycm9yOiBcIlwiLCBzaG93T1RQOiBmYWxzZSwgb3RwOiBcIlwiLCBlcnJvcl9tZXNzYWdlOiAnJyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdE9UUFJlcXVlc3QobnVtYmVyLCByZXNlbmRGbGFnID0gZmFsc2UsIHZpYVNtcywgdmlhV2hhdHNhcHAsIGZyb21Qb3B1cCA9IG51bGwpIHsgIC8vIHRvIGdlbmVyYXRlIG90cFxuICAgICAgICAvKmlmICh0aGlzLnN0YXRlLnVzZXJfbmFtZSA9PSAnJykge1xuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiAnRW50ZXIgeW91ciBuYW1lJyB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0qL1xuXG4gICAgICAgIGxldCBsZWFkX2RhdGEgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKG51bWJlci5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKSkge1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiIH0pXG4gICAgICAgICAgICAvKmlmKHRoaXMucHJvcHMudXNlcl9jaXRpZXMgJiYgdGhpcy5wcm9wcy51c2VyX2NpdGllcy5sZW5ndGggJiYgIXRoaXMuc3RhdGUuc2VsZWN0ZWRDaXR5KXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBzZWxlY3QgdGhlIGNpdHlcIiwgZXJyb3JfbWVzc2FnZTogJycgfSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE9UUChudW1iZXIsIHZpYVNtcywgdmlhV2hhdHNhcHAsICdpbnN1cmFuY2UtbG9naW4nLCAoZXJyb3IpID0+IHsgLy8gdG8gZ2VuZXJhdGUgb3RwXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiQ291bGQgbm90IGdlbmVyYXRlIE9UUC5cIiB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNlbGVjdGVkX3BsYW4pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMucHJvcHMuZ2VuZXJhdGVJbnN1cmFuY2VMZWFkKHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbiA/IHRoaXMucHJvcHMuc2VsZWN0ZWRfcGxhbi5pZCA6ICcnLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCBsZWFkX2RhdGEpXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1ZpcENsdWJMb2dpblBvcHVwQ29udGludWUnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ3ZpcC1sb2dpbi1wb3B1cC1jb250aW51ZS1jbGljaycsICdtb2RlJzogdmlhU21zID8gJ3ZpYVNtcycgOiB2aWFXaGF0c2FwcCA/ICd2aWFXaGF0c2FwcCcgOiAnJywgJ21vYmlsZU5vJzogdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWFXaGF0c2FwcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZU90cFJlcXVlc3Q6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmFibGVPdHBSZXF1ZXN0OiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T1RQOiB0cnVlLCBvdHBUaW1lb3V0OiB0cnVlLCBzbXNCdG5UeXBlOiB2aWFTbXMgPyB0cnVlIDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3RwVGltZW91dDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMDApXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZU90cFJlcXVlc3Q6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMDAwKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9tUG9wdXAgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5zLWZvcm0tc2xpZGVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcm9tUG9wdXAgPT0gJ29uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnMtZm9ybS1zbGlkZXInKVswXS5zY3JvbGwoeyBsZWZ0OiA5OTksIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnMtZm9ybS1zbGlkZXInKVswXS5zY3JvbGwoeyBsZWZ0OiAtOTk5LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbnVtYmVyICgxMCBkaWdpdHMpXCIgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZlcmlmeU9UUCgpIHsgIC8vIHRvIHZlcmlmeSBlbnRlcmVkIG90cFxuICAgICAgICBsZXQgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUub3RwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBlbnRlciBPVFBcIiwgZXJyb3JfbWVzc2FnZTogJycgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm90cC5sZW5ndGggPCA2IHx8IHRoaXMuc3RhdGUub3RwLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uRXJyb3I6IFwiUGxlYXNlIGVudGVyIHZhbGlkIE9UUFwiLCBlcnJvcl9tZXNzYWdlOiAnJyB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGVhZF9kYXRhID0gcGFyc2VkXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBob25lTnVtYmVyLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlwiIH0pXG4gICAgICAgICAgICBsZXQgZXh0cmFQYXJhbXNEYXRhID0ge31cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3VibWl0T1RQKHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRoaXMuc3RhdGUub3RwLCBleHRyYVBhcmFtc0RhdGEsIChleGlzdHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzLmNvZGUgPT0gJ2ludmFsaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcl9tZXNzYWdlOiBleGlzdHMubWVzc2FnZSwgdmFsaWRhdGlvbkVycm9yOiAnJyB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKHRoaXMucHJvcHMudmlwUGx1c0xlYWQgJiYgcGFyc2VkICYmIHBhcnNlZC51dG1fc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLnVzZXJfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwaG9uZV9udW1iZXI6IHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdXRtX3NvdXJjZTogcGFyc2VkLnV0bV9zb3VyY2UgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdXRtX3Nwb190YWdzOiBwYXJzZWQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMucHJvcHMudmlwUGx1c0xlYWQoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RzLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0luc3VyYW5jZUxvZ2luUG9wdXBPcHRWZXJpZmllZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnSW5zdXJhbmNlLWxvZ2luLXBvcHVwLW9wdC12ZXJpZmllZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXBpX3BhcmFtcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlfcGFyYW1zLnNlbGVjdGVkTG9jYXRpb24gPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaV9wYXJhbXMuaXNTYWxlc0FnZW50ID0gdGhpcy5wcm9wcy5pc1NhbGVzQWdlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaV9wYXJhbXMuaXNBZ2VudCA9IHRoaXMucHJvcHMuaXNBZ2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpX3BhcmFtcy5pc19nb2xkID0gdGhpcy5wcm9wcy5pc19nb2xkXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlfcGFyYW1zLmFsbCA9IHRoaXMucHJvcHMuaXNfdmlwX2dvbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaV9wYXJhbXMuZnJvbVdoZXJlID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRWaXBMaXN0KGZhbHNlLCBhcGlfcGFyYW1zLCAocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcC5jZXJ0aWZpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gJy92aXAtY2x1Yi1tZW1iZXItZGV0YWlscz9pc0R1bW15PXRydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWFkX2RhdGEudXRtX3NvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmdXRtX3NvdXJjZT0nICsgbGVhZF9kYXRhLnV0bV9zb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVhZF9kYXRhLnV0bV90ZXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyZ1dG1fdGVybT0nICsgbGVhZF9kYXRhLnV0bV90ZXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlYWRfZGF0YS51dG1fY2FtcGFpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCArPSAnJnV0bV9jYW1wYWlnbj0nICsgbGVhZF9kYXRhLnV0bV9jYW1wYWlnblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWFkX2RhdGEudXRtX21lZGl1bSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmdXRtX21lZGl1bT0nICsgbGVhZF9kYXRhLnV0bV9tZWRpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVhZF9kYXRhLmlzX2FnZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyZpc19hZ2VudD0nICsgbGVhZF9kYXRhLmlzX2FnZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlYWRfZGF0YS5pc19nb2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJyZpc19nb2xkPScgKyBsZWFkX2RhdGEuaXNfZ29sZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChPYmplY3Qua2V5cyhzZWxmLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZXh0cmFQYXJhbXMgPSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyppZih0aGlzLnByb3BzLnVzZXJfY2l0aWVzICYmIHRoaXMucHJvcHMudXNlcl9jaXRpZXMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYVBhcmFtcy5jaXR5X2lkID0gdGhpcy5wcm9wcy51c2VyX2NpdGllcy5maWx0ZXIoeCA9PiB4Lm5hbWUgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENpdHkpLm1hcCh4ID0+IHguaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Ki9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYoc2VsZi5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgc2VsZi5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBleHRyYVBhcmFtcyA9IHNlbGYucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4PT54LnR5cGUgPT0gXCJjb21tb25feHRyYV90YWdzXCIpWzBdLnV0bV90YWdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgdmlzaXRvcl9pbmZvID0gR1RNLmdldFZpc2l0b3JJbmZvKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKHZpc2l0b3JfaW5mbyAmJiB2aXNpdG9yX2luZm8udmlzaXRfaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxlYWRfZGF0YS52aXNpdF9pZCA9IHZpc2l0b3JfaW5mby52aXNpdF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxlYWRfZGF0YS52aXNpdG9yX2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0b3JfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gY3JlYXRlIHZpcCBvciBnb2xkIG1lbWJlciBsZWFkIGZvciBtYXRyaXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBzZWxmLnByb3BzLmdlbmVyYXRlVmlwQ2x1YkxlYWQoe3NlbGVjdGVkUGxhbjpzZWxmLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuID8gc2VsZi5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZCA6ICcnLCBudW1iZXI6c2VsZi5zdGF0ZS5waG9uZU51bWJlciwgbGVhZF9kYXRhOmxlYWRfZGF0YSwgc2VsZWN0ZWRMb2NhdGlvbjpzZWxmLnByb3BzLnNlbGVjdGVkTG9jYXRpb24sIHVzZXJfbmFtZTpzZWxmLnN0YXRlLnVzZXJfbmFtZSwgZXh0cmFQYXJhbXM6ZXh0cmFQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2I6IChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBMZWFkSWREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdWaXBQb3B1cExlYWRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiByZXNwLmxlYWRfaWQ/cmVzcC5sZWFkX2lkOjAsICdldmVudCc6ICd2aXAtcG9wdXAtbGVhZC1jbGlja2VkJywgJ3NvdXJjZSc6IGxlYWRfZGF0YS5zb3VyY2UgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogTGVhZElkRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnNlbGYucHJvcHMuZ2VuZXJhdGVWaXBDbHViTGVhZChzZWxmLnByb3BzLnNlbGVjdGVkX3ZpcF9wbGFuID8gc2VsZi5wcm9wcy5zZWxlY3RlZF92aXBfcGxhbi5pZCA6ICcnLCBzZWxmLnN0YXRlLnBob25lTnVtYmVyLGxlYWRfZGF0YSwgc2VsZi5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLHNlbGYuc3RhdGUudXNlcl9uYW1lLCBleHRyYVBhcmFtcywgKHJlc3ApPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IExlYWRJZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVmlwTGVhZENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IHJlc3AubGVhZF9pZCA/IHJlc3AubGVhZF9pZCA6IDAsICdldmVudCc6ICd2aXAtbGVhZC1jbGlja2VkJywgJ3NvdXJjZSc6IGxlYWRfZGF0YS5zb3VyY2UgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IExlYWRJZERhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RzLnVzZXJfZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlTGVhZFBvcHVwKCkgLy8gdG8gY2xvc2UgbGVhZCBwb3B1cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUxlYWRQb3B1cCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlTGVhZFBvcHVwKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJ3ZpcC1jbHViLWFjdGl2YXRlZC1kZXRhaWxzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJ3ZpcC1jbHViLWFjdGl2YXRlZC1kZXRhaWxzP3V0bV9zb3VyY2U9Jyt0aGlzLnByb3BzLmlzU2FsZXNBZ2VudCsnJmlzX2FnZW50PScrdGhpcy5wcm9wcy5pc0FnZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbkVycm9yOiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgbnVtYmVyICgxMCBkaWdpdHMpXCIgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy52ZXJpZnlPVFAoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hhbmRsZUNvbnRpbnVlUHJlc3MoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5zaG93T1RQKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRPVFBSZXF1ZXN0KHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsICcnLCB0cnVlLCBmYWxzZSwgJ29uZScpIC8vIHRvIGdlbmVyYXRlIG90cCByZXF1ZXN0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0TnVtYmVyKCkge1xuICAgICAgICBsZXQgbnVtYmVyID0gdGhpcy5zdGF0ZS5waG9uZU51bWJlclxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucy1mb3JtLXNsaWRlcicpWzBdLnNjcm9sbCh7IGxlZnQ6IC05OTksIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25FcnJvcjogXCJcIiwgc2hvd09UUDogZmFsc2UsIG90cDogXCJcIiwgcGhvbmVOdW1iZXI6ICcnIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGhvbmVOdW1iZXI6IG51bWJlciB9KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyXCIpLmZvY3VzKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDIwMClcbiAgICB9XG4gICAgY2xvc2VTZWxlY3RGcm9tUHJvZmlsZSgpIHtcbiAgICAgICAgbGV0IHRocmVzaG9sZF9tYXhfYWdlXG4gICAgICAgIGxldCB0aHJlc2hvbGRfbWluX2FnZVxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlXG5cbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZVBvcHVwKHRoaXMuc3RhdGUucHJvZmlsZV9pZCwgdGhpcy5wcm9wcy5tZW1iZXJfaWQsIHRoaXMuc3RhdGUubmV3cHJvZmlsZSlcbiAgICB9XG5cbiAgICBoYW5kbGVDaXR5SW51dCh0eXBlLCBldmVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHNlYXJjaF9zdHJpbmcgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkX2RvY3Rvcl9saXN0ID0gW11cbiAgICAgICAgICAgIHRoaXMucHJvcHMudXNlcl9jaXRpZXMgJiYgdGhpcy5wcm9wcy51c2VyX2NpdGllcy5tYXAoKGRvY3RvcikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkb2N0b3JfbmFtZSA9IChkb2N0b3IubmFtZSkudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgIGlmIChkb2N0b3JfbmFtZS5pbmNsdWRlcyhzZWFyY2hfc3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBkb2N0b3JfbmFtZS5pbmRleE9mKHNlYXJjaF9zdHJpbmcpXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkX2RvY3Rvcl9saXN0LnB1c2goeyBpZDogZG9jdG9yLmlkLCBuYW1lOiBkb2N0b3IubmFtZSwgcmFuazogaW5kZXggfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZmlsdGVyZWRfZG9jdG9yX2xpc3QgPSBmaWx0ZXJlZF9kb2N0b3JfbGlzdC5zb3J0KCh4LCB5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgucmFuayAtIHkucmFua1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbdHlwZV06IGV2ZW50LnRhcmdldC52YWx1ZSwgZmlsdGVyZWRfY2l0eV9saXN0OiBmaWx0ZXJlZF9kb2N0b3JfbGlzdCB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrQ2l0eUxpc3QodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdzZWxlY3RlZENpdHknOiB2YWx1ZSwgZmlsdGVyZWRfY2l0eV9saXN0OiBbXSwgc2VhcmNoX2NpdHk6IHZhbHVlLCBzaG93Q2l0eVNlYXJjaFBvcHVwOiBmYWxzZSB9KVxuICAgIH1cblxuICAgIG9uRm9jdXNJbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcmVkX2NpdHlfbGlzdDogdGhpcy5wcm9wcy51c2VyX2NpdGllcywgc2VhcmNoX2NpdHk6ICcnLCBzaG93Q2l0eVNlYXJjaFBvcHVwOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgb25Gb2N1c091dCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2NpdHk6IHRoaXMuc3RhdGUuc2VsZWN0ZWRDaXR5LCBzaG93Q2l0eVNlYXJjaFBvcHVwOiBmYWxzZSB9KVxuICAgICAgICB9LCA1MDApXG5cbiAgICB9XG5cbiAgICBhZGRNZW1iZXJCeVNlbGYoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuYWRkTWVtYmVycyh0cnVlKVxuICAgICAgICB0aGlzLnByb3BzLmhpZGVTZWxlY3RQcm9maWxlUG9wdXAoKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3Rwcm9maWxlKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFNlbGVjdGVkUHJvZmlsZXMgPSBbXVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd19zZWxlY3RlZF9wcm9maWxlcyAmJiB0aGlzLnByb3BzLnNob3dfc2VsZWN0ZWRfcHJvZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkUHJvZmlsZXMucHVzaCh2YWxba2V5XSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGFscmVhZHlfdXNlcnNfaWRzID0gW11cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEpLmxlbmd0aCA+IDAgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlcikubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycyAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5X3VzZXJzX2lkcy5wdXNoKHZhbC5wcm9maWxlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4XCIgb25DbGljaz17dGhpcy5wcm9wcy5oaWRlU2VsZWN0UHJvZmlsZVBvcHVwLmJpbmQodGhpcyl9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cCBvbnNjcmVlbi1zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wLXRvcC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgRmFtaWx5XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5SaWdodDogJzEwcHgnIH19IG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZVNlbGVjdFByb2ZpbGVQb3B1cC5iaW5kKHRoaXMpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3J0LWNsb3NlLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTQgfX0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciBhY3Rpb24tc2NyZWVuLWhlYWRlciBwb3AtcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXJtcy1jb25kaXRpb24tZGl2IG9uc2NyZWVuLXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tcmFkaW8gaW5zcmFkaW8tb24tcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5VU0VSICYmIHRoaXMucHJvcHMuVVNFUi5wcm9maWxlcyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy5zaG93X3NlbGVjdGVkX3Byb2ZpbGVzICYmIHRoaXMucHJvcHMuc2hvd19zZWxlY3RlZF9wcm9maWxlcy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLlVTRVIucHJvZmlsZXMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3RlZFByb2ZpbGVzLmluZGV4T2YocGFyc2VJbnQoa2V5KSkgPT0gLTEgJiYgYWxyZWFkeV91c2Vyc19pZHMuaW5kZXhPZihwYXJzZUludChrZXkpKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cImR0bC1yYWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJvZmlsZV9pZFwiIHZhbHVlPScnIGlkPXtrZXl9IGRhdGEtcGFyYW09J3Byb2ZpbGVfaWQnIGNoZWNrZWQ9e3RoaXMuc3RhdGUucHJvZmlsZV9pZCA9PT0gdmFsdWUuaWR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsIHZhbHVlLmlkLCB2YWx1ZSwgdmFsdWUuYWdlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzX2Zyb21fcGF5bWVudCA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy01MDAgbXktcHJvZmlsZS1pdGVtXCIgb25DbGljaz17dGhpcy5hZGRNZW1iZXJCeVNlbGYuYmluZCh0aGlzKX0+QWRkIE5ldyBQcm9maWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvY2VkdXJlcy1idG4tcG9wXCIgb25DbGljaz17dGhpcy5jbG9zZVNlbGVjdEZyb21Qcm9maWxlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnByb2ZpbGVfaWQgPT0gJycgPyAnZnctNTAwIGJ0bi1kaXNhYmxlZCcgOiAnZnctNTAwJ30gZGlzYWJsZWQ9e3RoaXMuc3RhdGUucHJvZmlsZV9pZCA9PSAnJyA/ICdkaXNhYmxlZCcgOiAnJ30+RG9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXNfc2VlX21vcmUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgIGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYW5jZWwtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhgfSBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTGVhZFBvcHVwLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9iaWxlLXZlcmlmaWNhdGlvbi1zY3JlZW4gcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHdpZGdldCBuby1zaGFkb3cgbm8tcm91bmQgc2lnbi11cC1jb250YWluZXIgd2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZUxlYWRQb3B1cC5iaW5kKHRoaXMpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3J0LWNsb3NlLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTQgfX0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBjYW5jZWwtYXBwb2ludG1lbnQtaGVhZFwiPkV4YW1wbGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWF2YWlsLXBvcHVwLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2bC1jYXJkLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZsLWxlZnQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRvY3RvciBBcHBvaW50bWVudHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QXZlcmFnZSA0MCUgT0ZGPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2bC1yaWdodC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdW8tcHJpY2UtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1by1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TVJQPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3V0LXByaWNlXCI+4oK5MTAwMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVvLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgUGF5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYi0wXCI+4oK5NjAwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGF2bC1zdm5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNhdmluZ3Mg4oK5NDAwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2bC1jYXJkLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZsLWxlZnQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxhYiBUZXN0czwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BdmVyYWdlIDQ1JSBPRkY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZsLXJpZ2h0LWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1by1wcmljZS1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVvLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5NUlA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXQtcHJpY2VcIj7igrkxMDAwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdW8tcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBQYXk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiLTBcIj7igrk1NTA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYXZsLXN2bmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2F2aW5ncyDigrk0NTA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZsLWNhcmQtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmwtbGVmdC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWVkaWNpbmVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkF2ZXJhZ2UgMjMlIE9GRjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmwtcmlnaHQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVvLXByaWNlLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdW8tcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1SUDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1dC1wcmljZVwiPuKCuTcwMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVvLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgUGF5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYi0wXCI+4oK5NTQwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGF2bC1zdm5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNhdmluZ3Mg4oK5MTYwPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZsLWZvb3QtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXZsLWZvb3QtdGV4dFwiPlBvdGVudGlhbCBTYXZpbmdzIDxzcGFuIGNsYXNzTmFtZT1cImF2bC1jb250XCI+4oK5MTAxMCBYIDY8L3NwYW4+IEZhbWlseSBtZW1iZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXZsLWNvbnRcIj4g4oK5NjA2MC95cjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyAgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNhbmNlbC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleGB9IG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2JpbGUtdmVyaWZpY2F0aW9uLXNjcmVlbiBwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd2lkZ2V0IG5vLXNoYWRvdyBuby1yb3VuZCBzaWduLXVwLWNvbnRhaW5lciB3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VMZWFkUG9wdXAuYmluZCh0aGlzKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ydC1jbG9zZS5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE0IH19IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWZvcm0tc2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgbXYtaGVhZGVyIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZCBzaWduLXVwLW1ibC10ZXh0XCI+RW50ZXIgeW91ciByZWdpc3RlcmVkIG1vYmlsZSBudW1iZXIgdG8gbG9naW48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1vYmlsZS1maWVsZCBzdXAtaW5wdXQtcGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgZW50ZXItbW9iaWxlLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXQgdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJfbmFtZX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJ1c2VyX25hbWVcIiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zaG93T1RQID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9uLWdyb3VwIGVudGVyLW1vYmlsZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmYy1pbnB1dCB0ZXh0LWNlbnRlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtb2JpbGUgbnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVOdW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwicGhvbmVOdW1iZXJcIiBvbktleVByZXNzPXt0aGlzLl9oYW5kbGVDb250aW51ZVByZXNzLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnN0YXRlLnNob3dPVFAgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgZW50ZXItbW9iaWxlLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmYy1pbnB1dCB0ZXh0LWNlbnRlciBcIiBwbGFjZWhvbGRlcj0nU2VhcmNoIENpdGllcycgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2l0eUludXQuYmluZCh0aGlzLCAnc2VhcmNoX2NpdHknKX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzSW4uYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLm9uRm9jdXNPdXQuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoX2NpdHl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93Q2l0eVNlYXJjaFBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2Mtc3JjaC1mbHRyIHZpcC1zbGN0LXBvcFwiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXJlZF9jaXR5X2xpc3QgJiYgdGhpcy5zdGF0ZS5maWx0ZXJlZF9jaXR5X2xpc3QubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXJlZF9jaXR5X2xpc3QubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG50clwiIGtleT17a2V5fSBpZD17ZGF0YS5pZH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrQ2l0eUxpc3QoZGF0YS5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHA+Tm8gcmVzdWx0IGZvdW5kPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS5lcnJvcl9tZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvck1lc3NhZ2UgbS0wIG1iLTJcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uRXJyb3J9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIGZhbHNlLCB0cnVlLCBmYWxzZSwgJ29uZScpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5vdHBfcmVxdWVzdF9zZW50fSBjbGFzc05hbWU9XCJ2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1zbSBsZy1zbXMtYnRuIGJ0bi1ncmRudFwiPkxldOKAmXMgZ2V0IHlvdSBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBtdi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWQgc2lnbi11cC1tYmwtdGV4dFwiPkVudGVyIHRoZSBPVFAgd2XigJl2ZSBzZW50IHRvIHlvdXIgbW9iaWxlIG51bWJlcjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbW9iaWxlLWZpZWxkIHN1cC1pbnB1dC1wZG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRvbi1ncm91cCBlbnRlci1tb2JpbGUtbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZmMtaW5wdXQgdGV4dC1jZW50ZXJcIiBwbGFjZWhvbGRlcj1cIjEwIGRpZ2l0IG1vYmlsZSBudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZUNvbnRpbnVlUHJlc3MuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2hvd09UUCA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlucy1udW0tZWRpdFwiIG9uQ2xpY2s9e3RoaXMuZWRpdE51bWJlci5iaW5kKHRoaXMpfT5FZGl0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93T1RQID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkb24tZ3JvdXAgZW50ZXItbW9iaWxlLW51bWJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmYy1pbnB1dCB0ZXh0LWNlbnRlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgT1RQXCIgdmFsdWU9e3RoaXMuc3RhdGUub3RwfSBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gbmFtZT1cIm90cFwiIG9uS2V5UHJlc3M9e3RoaXMuX2hhbmRsZUtleVByZXNzLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3RwVGltZW91dCA/IFwiXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlc2VuZE90cFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX0gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgdHJ1ZSwgdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gZmFsc2UgOiB0cnVlLCAhdGhpcy5zdGF0ZS5zbXNCdG5UeXBlID8gZmFsc2UgOiB0cnVlLCAnb25lJyl9Pnt0aGlzLnN0YXRlLnNtc0J0blR5cGUgPyAnUHJlZmVyIHdlIFdoYXRzQXBwIGl0IHRvIHlvdT8nIDogJ1NlbmQgdmlhIFNNUyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZW5hYmxlT3RwUmVxdWVzdCA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlc2VuZE90cCBpbnMtb3RwLXJlc2VuZFwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0T1RQUmVxdWVzdC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIHRydWUsIHRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgIXRoaXMuc3RhdGUuc21zQnRuVHlwZSA/IHRydWUgOiBmYWxzZSwgJ29uZScpfT5SZXNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlIG0tMCBtYi0yXCI+e3RoaXMuc3RhdGUuZXJyb3JfbWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JNZXNzYWdlIG0tMCBtYi0yXCI+e3RoaXMuc3RhdGUudmFsaWRhdGlvbkVycm9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd09UUCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnZlcmlmeU9UUC5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5zdWJtaXRfb3RwfSBjbGFzc05hbWU9XCJidG4tZ3JkbnQgdi1idG4gdi1idG4tcHJpbWFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXNzIE5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRPVFBSZXF1ZXN0LmJpbmQodGhpcywgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgZmFsc2UsIHRydWUsIGZhbHNlKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMub3RwX3JlcXVlc3Rfc2VudH0gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc20gbGctc21zLWJ0biBidG4tZ3JkbnRcIj5MZXTigJlzIGdldCB5b3UgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZ3LTUwMCBwLTNcIiBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPkJ5IHByb2NlZWRpbmcsIHlvdSBoZXJlYnkgYWdyZWUgdG8gdGhlIDxhIGhyZWY9XCIvdGVybXNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0gPkVuZCBVc2VyIEFncmVlbWVudDwvYT4gYW5kIDxhIGhyZWY9XCIvcHJpdmFjeVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7IGNvbG9yOiBgdmFyKC0tdGV4dC0tcHJpbWFyeS0tY29sb3IpYCB9fSA+UHJpdmFjeSBQb2xpY3kuPC9hPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVmlwTG9naW5Qb3B1cCJdLCJzb3VyY2VSb290IjoiIn0=