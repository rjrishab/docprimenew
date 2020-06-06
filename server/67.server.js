exports.ids = [67];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ isVip }) => {
    return _react2.default.createElement(
        'div',
        { className: `dsclmer-ftr ${isVip ? 'margin-bottom-55' : ''}` },
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

/***/ "./dev/js/components/vipClub/vipClubActivatesView.js":
/*!***********************************************************!*\
  !*** ./dev/js/components/vipClub/vipClubActivatesView.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _config = __webpack_require__(/*! ../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _HelmetTags = __webpack_require__(/*! ../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _gtm = __webpack_require__(/*! ../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _staticDisclaimer = __webpack_require__(/*! ../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _vipTncView = __webpack_require__(/*! ./vipTncView.js */ "./dev/js/components/vipClub/vipTncView.js");

var _vipTncView2 = _interopRequireDefault(_vipTncView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import LocationElements from '../../../containers/commons/locationElements'
// import CommonSearch from '../../../containers/commons/CommonSearch.js'


class VipClub extends _react2.default.Component {
    // dashboard view
    constructor(props) {
        super(props);
        this.state = {
            toggleTabType: false,
            tabsValue: [],
            openMedlifeTnC: false
        };
    }

    componentDidMount() {
        let self = this;
        if (window && document) {
            window.onscroll = function () {
                var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

                if (self.refs['vipHeaderBar']) {

                    if (scrollPosition > 10) {
                        self.setState({ toggleTabType: true });
                    } else {
                        self.setState({ toggleTabType: false });
                    }
                }
            };
        }
        let initialTabs = [];
        this.props.data.user.plus_members.map((val, key) => initialTabs.push(key));
        this.setState({ tabsValue: initialTabs });
    }

    AddMemberDetails() {
        this.props.history.push('/vip-club-member-details?is_from_payment=true');
    }

    ButtonHandler(field, event) {
        let tabs = [].concat(this.state.tabsValue);
        let self = this;
        let found = false;
        tabs = tabs.filter(x => {
            if (x == field) {
                found = true;
                return false;
            }
            return true;
        });
        if (!found) {
            tabs.push(field);
        }

        self.setState({ tabsValue: tabs });
    }

    closeTncPopup() {
        this.setState({ openMedlifeTnC: false });
    }

    toggle() {
        this.setState({ openMedlifeTnC: true });
    }

    copyText(e) {
        e.preventDefault();
        var copyText = document.getElementById("myInput");
        copyText.select();
        document.execCommand("copy");
    }

    navigateTo(where, type, data, e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (type) {
            this.props.selectSearchType(type);
        }
        this.props.history.push(where);
    }

    navigateToSBI() {
        window.open('http://13.235.199.36/webcore/docprimecallback', '_blank');
    }

    render() {
        let expiry_date = new Date(this.props.data.user.expire_date);
        expiry_date = expiry_date.toDateString();
        let expiryDate = expiry_date.split(" ");
        let primary_user = {};
        if (this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data.user).length > 0 && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0) {
            primary_user = this.props.vip_club_db_data.data.user.plus_members.filter(x => x.is_primary_user)[0];
        }
        let is_corporate = false;
        if (!this.props.is_gold && this.props.data.plan && this.props.data.plan.length > 0) {
            is_corporate = this.props.data.plan[0].is_corporate;
        }

        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap', style: { background: "" } },
            _react2.default.createElement(
                'div',
                { className: 'd-none d-lg-block' },
                _react2.default.createElement(_DesktopProfileHeader2.default, null)
            ),
            _react2.default.createElement(
                'div',
                { className: `d-lg-none d-block ${!this.props.is_gold ? 'd-none' : ''}` },
                _react2.default.createElement(
                    'div',
                    { className: 'vip-new-sub-header', onClick: () => this.props.history.push('/') },
                    _react2.default.createElement(
                        'svg',
                        { xmlns: 'http://www.w3.org/2000/svg', width: '15pt', height: '18pt', viewBox: '0 0 25 24', version: '1.1' },
                        _react2.default.createElement(
                            'g',
                            { id: 'surface1' },
                            _react2.default.createElement('path', { fill: '#f78631', 'fill-rule': 'evenodd', d: 'M 24.566406 12.925781 C 24.296875 13.203125 23.933594 13.359375 23.554688 13.359375 C 23.175781 13.359375 22.808594 13.203125 22.542969 12.925781 L 13.070312 3.15625 C 12.761719 2.839844 12.21875 2.839844 11.910156 3.15625 L 2.441406 12.925781 C 1.878906 13.503906 0.976562 13.503906 0.414062 12.925781 C 0.148438 12.652344 -0.00390625 12.273438 -0.00390625 11.882812 C -0.00390625 11.488281 0.148438 11.113281 0.414062 10.835938 L 9.886719 1.066406 C 11.277344 -0.371094 13.699219 -0.371094 15.09375 1.066406 L 17.914062 3.972656 L 20.78125 6.929688 L 24.566406 10.835938 C 24.835938 11.113281 24.988281 11.488281 24.988281 11.882812 C 24.988281 12.273438 24.835938 12.652344 24.566406 12.925781 Z M 11.992188 5.960938 C 12.269531 5.679688 12.714844 5.679688 12.988281 5.960938 L 21.316406 14.554688 C 21.449219 14.6875 21.523438 14.875 21.523438 15.066406 L 21.523438 21.332031 C 21.523438 22.804688 20.367188 23.996094 18.941406 23.996094 L 14.820312 23.996094 L 14.820312 17.40625 L 10.164062 17.40625 L 10.164062 23.996094 L 6.039062 23.996094 C 4.613281 23.996094 3.457031 22.804688 3.457031 21.332031 L 3.457031 15.066406 C 3.457031 14.875 3.53125 14.6875 3.664062 14.554688 Z M 11.992188 5.960938 ' })
                        )
                    )
                )
            ),
            this.props.is_gold ? '' : _react2.default.createElement(
                'div',
                { className: `vipHeaderBar ${this.state.toggleTabType ? 'hed-curv-rmove' : ''}`, ref: 'vipHeaderBar' },
                _react2.default.createElement(
                    'div',
                    { className: 'vipBackIco', onClick: () => this.props.history.push('/'), style: { background: '#f78631' } },
                    _react2.default.createElement('img', { src: "/assets" + "/img/vip-home.svg" })
                ),
                _react2.default.createElement(
                    'div',
                    { className: `vip-logo-cont ${this.state.toggleTabType ? 'header-scroll-change' : ''}`, ref: '' },
                    _react2.default.createElement('img', { className: 'vipLogiImg', src: "/assets" + "/img/vip-logo.png" }),
                    _react2.default.createElement(
                        'p',
                        { className: 'scrl-cont-dat' },
                        is_corporate ? "Your a Docprime VIP Member" : "Save 70% on your family's medical bills"
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Valid till ',
                        expiryDate[1] + ' ' + expiryDate[2] + ',' + ' ' + expiryDate[3]
                    )
                )
            ),
            _react2.default.createElement(
                'section',
                { className: `container container-top-margin ${this.props.is_gold ? 'md-top-mrgn-rmv' : 'sub-pdng-add'}`, style: { marginTop: '' } },
                _react2.default.createElement(
                    'div',
                    { className: 'row main-row parent-section-row' },
                    _react2.default.createElement(_LeftBar2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-12 center-column' },
                        _react2.default.createElement(
                            'div',
                            { className: 'container-fluid ' },
                            _react2.default.createElement(
                                'div',
                                { className: 'care-new-container font-analyze' },
                                this.props.is_gold && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0 && primary_user && Object.keys(primary_user).length > 0 ? _react2.default.createElement(
                                    'div',
                                    { className: 'gold-white-bg-container card-container' },
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
                                                primary_user.first_name,
                                                ' ',
                                                primary_user.last_name
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
                                                    expiryDate[1] + ' ' + expiryDate[2] + ',' + ' ' + expiryDate[3],
                                                    ' '
                                                )
                                            )
                                        )
                                    )
                                ) : '',
                                this.props.data.is_member_allowed && !is_corporate ? _react2.default.createElement(
                                    'div',
                                    { className: `${this.props.is_gold ? 'gold-white-bg-container mb-24' : ''}`, style: { paddingTop: 0, paddingBottom: 20 } },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-act-pop text-right', style: { display: 'block' } },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-wrn-img text-left' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/tickicon.png" }),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'vip-wrn-content' },
                                                _react2.default.createElement(
                                                    'h5',
                                                    null,
                                                    'Your subscription is now active'
                                                ),
                                                this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0 && this.props.vip_club_db_data.data.plan && this.props.vip_club_db_data.data.plan.length > 0 ? _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    ' ',
                                                    `You can add the remaining ${this.props.vip_club_db_data.data.plan[0].total_allowed_members - this.props.vip_club_db_data.data.user.plus_members.length} members anytime until the expiry date.`
                                                ) : ''
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { onClick: this.AddMemberDetails.bind(this) },
                                            'Add member'
                                        )
                                    )
                                ) : '',
                                !this.props.is_gold && this.props.data && Object.keys(this.props.data).length > 0 && is_corporate ? _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-acnt-heading' },
                                        _react2.default.createElement(
                                            'h5',
                                            null,
                                            'VIP Benefits'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-offer-cards p-12 mb-24 pd-r-0 pd-l-0' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'gold-benifi-cards-cont vip-club' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'gold-benifi-cards mr-b-0' },
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/search', onClick: e => {
                                                            e.preventDefault();
                                                            this.navigateTo("/search", 'opd');
                                                        } },
                                                    _react2.default.createElement('img', { src: "/assets" + '/img/gl1.png' })
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'mr-t-5' },
                                                    'Book ',
                                                    _react2.default.createElement('br', null),
                                                    ' Doctors'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'gold-benifi-cards mr-b-0' },
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '/search', onClick: e => {
                                                            e.preventDefault();
                                                            this.navigateTo("/search", 'lab');
                                                        } },
                                                    _react2.default.createElement('img', { src: "/assets" + '/img/gl2.png' })
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'mr-t-5' },
                                                    'Book Lab ',
                                                    _react2.default.createElement('br', null),
                                                    ' Test'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'gold-benifi-cards mr-b-0' },
                                                _react2.default.createElement(
                                                    'a',
                                                    { target: '_blank', href: 'https://www.medlife.com/app/?banner_url=https://media.medlife.com/PTR/docprime.jpg#/root/login/LoginLandingOld' },
                                                    _react2.default.createElement('img', { src: "/assets" + '/img/medlife-med.png' })
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'mr-t-5' },
                                                    'Order ',
                                                    _react2.default.createElement('br', null),
                                                    ' Medicines'
                                                )
                                            )
                                        )
                                    )
                                ) : '',
                                !this.props.is_gold && this.props.data.plan && this.props.data.plan.length > 0 && this.props.data.plan[0].utilize && Object.keys(this.props.data.plan[0].utilize).length > 0 ? _react2.default.createElement(
                                    _react2.default.Fragment,
                                    null,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-dsh-main-cont mb-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-acnt-heading' },
                                            _react2.default.createElement(
                                                'h5',
                                                null,
                                                'Your Account'
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { onClick: () => this.props.history.push('/user/appointments') },
                                                'View Appointments'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'doc-onln-cnslt' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'vip-cnslt-card' },
                                                _react2.default.createElement(
                                                    'h5',
                                                    { className: 'vip-brder-hdng' },
                                                    'In-Clinic Consultation'
                                                ),
                                                _react2.default.createElement(
                                                    'ul',
                                                    null,
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Total Limit: ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                '\u20B9',
                                                                this.props.data.plan[0].utilize.doctor_consult_amount >= 99999 ? 'Unlimited' : this.props.data.plan[0].utilize.doctor_consult_amount,
                                                                '  '
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Utilized: ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                '\u20B9',
                                                                this.props.data.plan[0].utilize.doctor_amount_utilized,
                                                                ' '
                                                            )
                                                        )
                                                    ),
                                                    this.props.data.plan[0].utilize.doctor_amount_available <= 99999 ? _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Available: ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'vip-crd-avl-grn' },
                                                                '\u20B9',
                                                                this.props.data.plan[0].utilize.doctor_amount_available
                                                            )
                                                        )
                                                    ) : ''
                                                )
                                            ),
                                            is_corporate ? _react2.default.createElement(
                                                'div',
                                                { className: 'vip-cnslt-card' },
                                                _react2.default.createElement(
                                                    'h5',
                                                    { className: 'vip-brder-hdng' },
                                                    'Lab Tests'
                                                ),
                                                _react2.default.createElement(
                                                    'ul',
                                                    null,
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Total Limit: ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                '\u20B9',
                                                                this.props.data.plan[0].utilize.available_labtest_amount >= 99999 ? 'Unlimited' : this.props.data.plan[0].utilize.available_labtest_amount,
                                                                '  '
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Utilized: ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                '\u20B9',
                                                                this.props.data.plan[0].utilize.lab_amount_utilized,
                                                                ' '
                                                            )
                                                        )
                                                    ),
                                                    this.props.data.plan[0].utilize.available_labtest_amount <= 99999 ? _react2.default.createElement(
                                                        'li',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Available: ',
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'vip-crd-avl-grn' },
                                                                '\u20B9',
                                                                this.props.data.plan[0].utilize.available_labtest_amount
                                                            )
                                                        )
                                                    ) : ''
                                                )
                                            ) : _react2.default.createElement(
                                                'div',
                                                { className: 'vip-cnslt-card' },
                                                _react2.default.createElement(
                                                    'h5',
                                                    { className: 'vip-brder-hdng' },
                                                    'Docprime Care'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'vip-un-mem' },
                                                    'Unlimited online consult for 8 members'
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'vip-cnsl-act' },
                                                    _react2.default.createElement('img', { src: "/assets" + '/img/vip-chk.svg' }),
                                                    'Activated '
                                                )
                                            )
                                        )
                                    ),
                                    is_corporate ? '' : _react2.default.createElement(
                                        'div',
                                        { className: 'vip-offer-cards mb-3' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-sbs-crd' },
                                            _react2.default.createElement(
                                                'h5',
                                                { className: 'vip-brder-hdng' },
                                                'Full Body Health Package'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'vip-sbs-crd-content' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'vip-sbs-crd-lft' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Includes ',
                                                        this.props.data.plan[0].worth.total_test_covered_in_package,
                                                        ' Tests, can be used by ',
                                                        this.props.data.plan[0].worth.members_covered_in_package,
                                                        ' members'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'vip-sbs-crd-rgt' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'rmng-pnt' },
                                                        this.props.data.plan[0].utilize.available_package_count,
                                                        ' ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            'remaining '
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: 'vip-btn-sbs', onClick: () => {
                                                                this.props.history.push('/searchpackages');

                                                                let data = {
                                                                    'Category': 'ConsumerApp', 'Action': 'vipPackageClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-package-click'
                                                                };
                                                                _gtm2.default.sendEvent({ data: data });
                                                            } },
                                                        'Book Now'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ) : '',
                                !this.props.is_gold && !is_corporate ? _react2.default.createElement(
                                    'div',
                                    { className: 'vip-offer-cards mb-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-sbs-crd' },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'vip-brder-hdng' },
                                            'Tax Benefit'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-sbs-crd-content' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'vip-sbs-crd-lft' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Under Section 80D'
                                                )
                                            )
                                        )
                                    )
                                ) : '',
                                this.props.is_gold && this.props.data && Object.keys(this.props.data).length > 0 ? _react2.default.createElement(
                                    'div',
                                    { className: 'mb-24' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-offer-cards p-12 text-center' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'gold-cmplt-frst' },
                                            'You Saved ',
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                '\u20B9',
                                                this.props.data.total_vip_amount
                                            ),
                                            ' till now'
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'gold-cmplt-second' },
                                            'Total Gold appointments till now '
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'gld-cmplt-lst' },
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'gold-cmplt-frst' },
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    this.props.data.lab_appointment_count
                                                ),
                                                ' Lab'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'gold-cmplt-frst' },
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    this.props.data.opd_appointment_count
                                                ),
                                                ' Doctor'
                                            )
                                        )
                                    )
                                ) : '',
                                this.props.is_gold && this.props.data && Object.keys(this.props.data).length > 0 ? _react2.default.createElement(
                                    'div',
                                    { className: 'vip-offer-cards p-12 mb-24 pd-r-0 pd-l-0' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'gold-benifi-cards-cont vip-club' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'gold-benifi-cards mr-b-0' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/search', onClick: e => {
                                                        e.preventDefault();
                                                        this.navigateTo("/search", 'opd');
                                                    } },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/gl1.png' })
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'mr-t-5' },
                                                'Book ',
                                                _react2.default.createElement('br', null),
                                                ' Doctors'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'gold-benifi-cards mr-b-0' },
                                            _react2.default.createElement(
                                                'a',
                                                { href: '/search', onClick: e => {
                                                        e.preventDefault();
                                                        this.navigateTo("/search", 'lab');
                                                    } },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/gl2.png' })
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'mr-t-5' },
                                                'Book Lab ',
                                                _react2.default.createElement('br', null),
                                                ' Test'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'gold-benifi-cards mr-b-0' },
                                            _react2.default.createElement(
                                                'a',
                                                { target: '_blank', href: 'https://www.medlife.com/app/?banner_url=https://media.medlife.com/PTR/docprime.jpg#/root/login/LoginLandingOld' },
                                                _react2.default.createElement('img', { src: "/assets" + '/img/medlife-med.png' })
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'mr-t-5' },
                                                'Order ',
                                                _react2.default.createElement('br', null),
                                                ' Medicines'
                                            )
                                        )
                                    )
                                ) : '',
                                _react2.default.createElement(
                                    'div',
                                    { className: 'vip-discount-col p-12 mb-24 no-overflow' },
                                    _react2.default.createElement('img', { className: 'bg-circle-img', src: '/assets/img/circle-bg.png', alt: 'circle' }),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'offer-col' },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Flat 23% OFF ',
                                            _react2.default.createElement('br', null),
                                            ' ',
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'on medicines'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'mb-12' },
                                            _react2.default.createElement('img', { src: 'https://cdn.docprime.com/media/diagnostic/common_package_icons/medlife_hDQxilJ.png', alt: 'Medlife' })
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { className: 'tc-apply pd-r-0', onClick: this.toggle.bind(this) },
                                            'T&C Apply'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'discount-coupan-col' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'coupan-col' },
                                            _react2.default.createElement(
                                                'h4',
                                                null,
                                                'Use coupon: ',
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'DOCPRIME'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'd-none', onClick: this.copyText.bind(this) },
                                                _react2.default.createElement('img', { src: '/assets/img/copy.svg', alt: 'copy', height: '18px' }),
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Tap to copy'
                                                ),
                                                _react2.default.createElement('input', { style: { opacity: 0 }, id: 'myInput', type: 'text', value: 'DOCPRIME' })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'http://bit.ly/2vHLpmW', target: '_blank', className: 'order-now' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'Order medicine now'
                                            ),
                                            _react2.default.createElement('img', { src: '/assets/img/customer-icons/dropdown-arrow.svg' })
                                        )
                                    )
                                ),
                                this.props.data.user && Object.keys(this.props.data.user).length > 0 && this.props.data.user.plus_members && this.props.data.user.plus_members.length > 0 ? _react2.default.createElement(
                                    'div',
                                    { className: 'vip-offer-cards mb-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-sbs-crd' },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'vip-brder-hdng' },
                                            'Members'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-accord-container' },
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'vip-acr-lst' },
                                                this.props.data.user.plus_members.map((val, key) => {
                                                    return _react2.default.createElement(
                                                        'li',
                                                        { key: key },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { onClick: this.ButtonHandler.bind(this, key), className: 'vip-acrd-hdng' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                val.first_name,
                                                                ' ',
                                                                val.last_name,
                                                                ' ',
                                                                _react2.default.createElement('br', null),
                                                                val.relation == 'SELF' ? _react2.default.createElement(
                                                                    'b',
                                                                    null,
                                                                    '(Primary)'
                                                                ) : ''
                                                            ),
                                                            _react2.default.createElement('img', { className: `acdn-arrow  ${this.state.tabsValue.indexOf(key) > -1 ? '' : 'acdn-arrow-up'}`, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: `vip-sn-tbl ${this.state.tabsValue.indexOf(key) > -1 ? 'd-none' : ''}` },
                                                            _react2.default.createElement(
                                                                'table',
                                                                { className: 'vip-acrd-content' },
                                                                _react2.default.createElement(
                                                                    'tbody',
                                                                    null,
                                                                    _react2.default.createElement(
                                                                        'tr',
                                                                        null,
                                                                        _react2.default.createElement(
                                                                            'th',
                                                                            null,
                                                                            'Relationship'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'th',
                                                                            null,
                                                                            'Gender'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'th',
                                                                            null,
                                                                            'DOB'
                                                                        )
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'tr',
                                                                        null,
                                                                        _react2.default.createElement(
                                                                            'td',
                                                                            null,
                                                                            val.relation
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'td',
                                                                            { style: { 'textTransform': 'capitalize' } },
                                                                            val.title == 'mr.' ? 'm' : val.gender == 'm' ? 'm' : 'f'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'td',
                                                                            null,
                                                                            val.dob
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    );
                                                }),
                                                this.props.data.is_member_allowed && !is_corporate ? _react2.default.createElement(
                                                    'li',
                                                    { onClick: this.AddMemberDetails.bind(this) },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        { className: 'vip-acrd-add-member' },
                                                        _react2.default.createElement('img', { className: 'vip-add-img', src: "/assets" + '/img/vip-mem.svg' }),
                                                        'Add Members'
                                                    )
                                                ) : ''
                                            )
                                        )
                                    )
                                ) : '',
                                _react2.default.createElement(
                                    'div',
                                    { className: 'vip-contact mb-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'vip-sbs-crd' },
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'vip-brder-hdng' },
                                            'Contact Support'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'vip-coct-content' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Need help with booking? ',
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Call us at 1800-123-9419'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Have a query? ',
                                                _react2.default.createElement(
                                                    'span',
                                                    null,
                                                    'Email us at customercare@docprime.com'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    this.props.data && this.props.data.plus_via_sbi ? _react2.default.createElement(
                        'div',
                        { className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container ' },
                        _react2.default.createElement(
                            'button',
                            { className: 'v-btn-primary book-btn-mrgn-adjust ', onClick: () => {
                                    this.navigateToSBI();
                                } },
                            'Go Back To SBIG Home'
                        )
                    ) : '',
                    this.state.openMedlifeTnC ? _react2.default.createElement(_vipTncView2.default, { props: this.props, toggle: this.closeTncPopup.bind(this), is_insurance_applicable: false }) : ""
                )
            ),
            _react2.default.createElement(_staticDisclaimer2.default, { isVip: true })
        );
    }
}

exports.default = VipClub;

/***/ }),

/***/ "./dev/js/components/vipClub/vipTncView.js":
/*!*************************************************!*\
  !*** ./dev/js/components/vipClub/vipTncView.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ toggle, props, is_insurance_applicable }) => {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("div", { className: "cancel-overlay cancel-overlay-zindex", onClick: toggle }),
        _react2.default.createElement(
            "div",
            { className: "widget cancel-appointment-div cancel-popup no-overflow" },
            _react2.default.createElement(
                "div",
                { className: "widget-header tnc-header text-center action-screen-header" },
                _react2.default.createElement(
                    "p",
                    { className: "fw-500 cancel-appointment-head" },
                    "Terms & Conditions"
                ),
                _react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", className: "close-modal", onClick: toggle }),
                _react2.default.createElement("hr", null)
            ),
            _react2.default.createElement(
                "div",
                { className: "tnc-column" },
                _react2.default.createElement(
                    "h3",
                    { className: "mb-24" },
                    _react2.default.createElement(
                        "strong",
                        null,
                        "Medlife TnC"
                    )
                ),
                _react2.default.createElement(
                    "h5",
                    null,
                    _react2.default.createElement(
                        "strong",
                        null,
                        "Offer Terms:"
                    )
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "offer-terms-column" },
                    _react2.default.createElement(
                        "li",
                        null,
                        "Save 23% on all prescribed medicines exclusively for ",
                        _react2.default.createElement(
                            "strong",
                            null,
                            "Docprime Gold / VIP users"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "No minimum order value required to avail discount."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Visit ",
                        _react2.default.createElement(
                            "a",
                            { href: "https://www.medlife.com/" },
                            "Medlife.com"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Upload prescription & select medicines."
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Enter promo in the order checkout page. Complete payment via any mode. **Promo not applicable on OTC products"
                    )
                ),
                _react2.default.createElement(
                    "h5",
                    null,
                    _react2.default.createElement(
                        "strong",
                        null,
                        "T&C Pharmacy: "
                    )
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "offer-terms-column" },
                    _react2.default.createElement(
                        "li",
                        null,
                        "Offer Valid on Prescription Drugs"
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Promo code can be used Multiple times during the offer period. Customers can avail this promo code by calling customer support (1860-1234-1234) or by booking online through landing page link. "
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "span",
                            null,
                            "Discount on Selected Products: Discounts provided on the website/mobile application are on selected products. Discounts are not applicable on the following products and on any products so mentioned elsewhere on the website/mobile application:"
                        ),
                        _react2.default.createElement(
                            "ul",
                            { className: "child-list-item pd-12" },
                            _react2.default.createElement(
                                "li",
                                null,
                                "All Baby foods viz Ceralac, Lactogen, Nanpro etc."
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                "All Health Supplements viz Pediasure, Proteinex, Proteinules, Threptin etc"
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                "Over the counter (OTC) products \u2013 Benadryl Cough Syrup, Crocin, Saridon, all Dettol, Savlon products, medicated soaps etc."
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                "All Cosmetic products"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        "Offer Validity \u2013 1 year "
                    )
                )
            )
        )
    );
};

/***/ }),

/***/ "./dev/js/containers/vipClub/VipClubActivatedDetails.js":
/*!**************************************************************!*\
  !*** ./dev/js/containers/vipClub/VipClubActivatedDetails.js ***!
  \**************************************************************/
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

var _vipClubActivatesView = __webpack_require__(/*! ../../components/vipClub/vipClubActivatesView.js */ "./dev/js/components/vipClub/vipClubActivatesView.js");

var _vipClubActivatesView2 = _interopRequireDefault(_vipClubActivatesView);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _gtm = __webpack_require__(/*! ../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class VipClubActivatedDetails extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            is_gold: false
        };
    }

    componentDidMount() {

        if (_storage2.default.checkAuth()) {
            this.props.getUserProfile(); // to get loggedIn user profile
        }
        if (window) {
            window.scrollTo(0, 0);
        }

        var url_string = window.location.href;
        var url = new URL(url_string);
        let primary_member_id = null;
        var member_list_id = url.searchParams.get("id");
        if (member_list_id !== null) {
            // in case after successfull payment.
            this.props.resetVipData(); // to set vip or gold sotre to initial state
            this.props.getVipDashboardList(member_list_id, false, resp => {
                // to retrive vip or gold dashboard data
                if (resp && Object.keys(resp.data).length > 0) {
                    if (resp.data.user && Object.keys(resp.data.user).length > 0) {
                        primary_member_id = resp.data.user.user;
                    }
                    let gtmData = {
                        'Category': 'ConsumerApp', 'Action': 'vipbooked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vipbooked', 'user_id': primary_member_id
                    };
                    _gtm2.default.sendEvent({ data: gtmData });
                    this.setState({ data: resp.data, is_gold: resp.data.plan[0].is_gold });
                }
            });
        } else {
            this.props.resetVipData(); // to set vip or gold sotre to initial state
            this.props.getVipDashboardList(member_list_id, true, resp => {
                // to retrive vip or gold dashboard data
                if (resp && Object.keys(resp.data).length > 0) {
                    this.setState({ data: resp.data, is_gold: resp.data.plan[0].is_gold });
                }
            });
        }
    }
    render() {
        if (this.props.LOAD_VIP_CLUB_DASHBOARD && this.state.data) {
            return _react2.default.createElement(_vipClubActivatesView2.default, _extends({}, this.props, { data: this.state.data, is_gold: this.state.is_gold }));
        } else {
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
                _react2.default.createElement(_Loader2.default, null)
            );
        }
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { LOAD_VIP_CLUB, vipClubList, selected_vip_plan, LOAD_VIP_CLUB_DASHBOARD, vip_club_db_data } = state.VIPCLUB;
    const {
        selectedLocation

    } = state.SEARCH_CRITERIA_OPD;
    return {
        USER, selectedLocation, LOAD_VIP_CLUB, vipClubList, selected_vip_plan, vip_club_db_data, LOAD_VIP_CLUB_DASHBOARD
    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetVipData: () => dispatch((0, _index.resetVipData)()),
        selectVipClubPlan: (plan, criteria, callback) => dispatch((0, _index.selectVipClubPlan)(plan, criteria, callback)),
        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        getInsurance: (is_endorsement, callback) => dispatch((0, _index.getInsurance)(is_endorsement, callback)),
        getVipDashboardList: (user_id, is_dashboard, callback) => dispatch((0, _index.getVipDashboardList)(user_id, is_dashboard, callback)),

        selectInsurancePlan: (plan, criteria) => dispatch((0, _index.selectInsurancePlan)(plan, criteria)),
        // saveCurrentSelectedMembers: (membersId) => dispatch(saveCurrentSelectedMembers(membersId)),
        resetSelectedPlans: () => dispatch((0, _index.resetSelectedPlans)()),
        sendOTP: (number, viaSms, viaWhatsapp, message_type, cb) => dispatch((0, _index.sendOTP)(number, viaSms, viaWhatsapp, message_type, cb)),
        submitOTP: (number, otp, extraParamsData, cb) => dispatch((0, _index.submitOTP)(number, otp, extraParamsData, cb)),
        resetAuth: () => dispatch((0, _index.resetAuth)()),
        userData: (self_data, criteria, forceadd) => dispatch((0, _index.userData)(self_data, criteria, forceadd)),
        generateInsuranceLead: (selectedPlan, number, lead_data, cb) => dispatch((0, _index.generateInsuranceLead)(selectedPlan, number, lead_data, cb)),
        urlShortner: (url, cb) => dispatch((0, _index.urlShortner)(url, cb)),
        selectSearchType: type => dispatch((0, _index.selectSearchType)(type))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VipClubActivatedDetails);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi92aXBDbHViQWN0aXZhdGVzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL3ZpcFRuY1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvdmlwQ2x1Yi9WaXBDbHViQWN0aXZhdGVkRGV0YWlscy5qcyJdLCJuYW1lcyI6WyJpc1ZpcCIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwiTG9hZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJWaXBDbHViIiwic3RhdGUiLCJ0b2dnbGVUYWJUeXBlIiwidGFic1ZhbHVlIiwib3Blbk1lZGxpZmVUbkMiLCJjb21wb25lbnREaWRNb3VudCIsInNlbGYiLCJ3aW5kb3ciLCJkb2N1bWVudCIsIm9uc2Nyb2xsIiwic2Nyb2xsUG9zaXRpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJib2R5IiwicmVmcyIsInNldFN0YXRlIiwiaW5pdGlhbFRhYnMiLCJkYXRhIiwidXNlciIsInBsdXNfbWVtYmVycyIsIm1hcCIsInZhbCIsImtleSIsInB1c2giLCJBZGRNZW1iZXJEZXRhaWxzIiwiaGlzdG9yeSIsIkJ1dHRvbkhhbmRsZXIiLCJmaWVsZCIsImV2ZW50IiwidGFicyIsImNvbmNhdCIsImZvdW5kIiwiZmlsdGVyIiwieCIsImNsb3NlVG5jUG9wdXAiLCJ0b2dnbGUiLCJjb3B5VGV4dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJuYXZpZ2F0ZVRvIiwid2hlcmUiLCJ0eXBlIiwic3RvcFByb3BhZ2F0aW9uIiwic2VsZWN0U2VhcmNoVHlwZSIsIm5hdmlnYXRlVG9TQkkiLCJvcGVuIiwiZXhwaXJ5X2RhdGUiLCJEYXRlIiwiZXhwaXJlX2RhdGUiLCJ0b0RhdGVTdHJpbmciLCJleHBpcnlEYXRlIiwic3BsaXQiLCJwcmltYXJ5X3VzZXIiLCJ2aXBfY2x1Yl9kYl9kYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImlzX3ByaW1hcnlfdXNlciIsImlzX2NvcnBvcmF0ZSIsImlzX2dvbGQiLCJwbGFuIiwiYmFja2dyb3VuZCIsIkFTU0VUU19CQVNFX1VSTCIsIm1hcmdpblRvcCIsInBhZGRpbmdUb3AiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiaXNfbWVtYmVyX2FsbG93ZWQiLCJkaXNwbGF5IiwidG90YWxfYWxsb3dlZF9tZW1iZXJzIiwiYmluZCIsInV0aWxpemUiLCJkb2N0b3JfY29uc3VsdF9hbW91bnQiLCJkb2N0b3JfYW1vdW50X3V0aWxpemVkIiwiZG9jdG9yX2Ftb3VudF9hdmFpbGFibGUiLCJhdmFpbGFibGVfbGFidGVzdF9hbW91bnQiLCJsYWJfYW1vdW50X3V0aWxpemVkIiwid29ydGgiLCJ0b3RhbF90ZXN0X2NvdmVyZWRfaW5fcGFja2FnZSIsIm1lbWJlcnNfY292ZXJlZF9pbl9wYWNrYWdlIiwiYXZhaWxhYmxlX3BhY2thZ2VfY291bnQiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJ0b3RhbF92aXBfYW1vdW50IiwibGFiX2FwcG9pbnRtZW50X2NvdW50Iiwib3BkX2FwcG9pbnRtZW50X2NvdW50Iiwib3BhY2l0eSIsInJlbGF0aW9uIiwiaW5kZXhPZiIsInRpdGxlIiwiZ2VuZGVyIiwiZG9iIiwicGx1c192aWFfc2JpIiwiaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJWaXBDbHViQWN0aXZhdGVkRGV0YWlscyIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJnZXRVc2VyUHJvZmlsZSIsInNjcm9sbFRvIiwidXJsX3N0cmluZyIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsIlVSTCIsInByaW1hcnlfbWVtYmVyX2lkIiwibWVtYmVyX2xpc3RfaWQiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJyZXNldFZpcERhdGEiLCJnZXRWaXBEYXNoYm9hcmRMaXN0IiwicmVzcCIsImd0bURhdGEiLCJMT0FEX1ZJUF9DTFVCX0RBU0hCT0FSRCIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJMT0FEX1ZJUF9DTFVCIiwidmlwQ2x1Ykxpc3QiLCJzZWxlY3RlZF92aXBfcGxhbiIsIlZJUENMVUIiLCJzZWxlY3RlZExvY2F0aW9uIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2VsZWN0VmlwQ2x1YlBsYW4iLCJjcml0ZXJpYSIsImNhbGxiYWNrIiwiZ2V0SW5zdXJhbmNlIiwiaXNfZW5kb3JzZW1lbnQiLCJ1c2VyX2lkIiwiaXNfZGFzaGJvYXJkIiwic2VsZWN0SW5zdXJhbmNlUGxhbiIsInJlc2V0U2VsZWN0ZWRQbGFucyIsInNlbmRPVFAiLCJudW1iZXIiLCJ2aWFTbXMiLCJ2aWFXaGF0c2FwcCIsIm1lc3NhZ2VfdHlwZSIsImNiIiwic3VibWl0T1RQIiwib3RwIiwiZXh0cmFQYXJhbXNEYXRhIiwicmVzZXRBdXRoIiwidXNlckRhdGEiLCJzZWxmX2RhdGEiLCJmb3JjZWFkZCIsImdlbmVyYXRlSW5zdXJhbmNlTGVhZCIsInNlbGVjdGVkUGxhbiIsImxlYWRfZGF0YSIsInVybFNob3J0bmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBQ2UsQ0FBQyxFQUFFQSxLQUFGLEVBQUQsS0FBZTtBQUM3QixXQUFRO0FBQUE7QUFB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LEVBQW9EVixFQUFwRCxDQUFULENBZHpEO0FBZUhXLHFCQUFhLENBQUM5QyxHQUFELEVBQU1tQyxFQUFOLEtBQWFmLFNBQVMsd0JBQVlwQixHQUFaLEVBQWlCbUMsRUFBakIsQ0FBVCxDQWZ2QjtBQWdCSGpHLDBCQUFtQkYsSUFBRCxJQUFVb0YsU0FBUyw2QkFBaUJwRixJQUFqQixDQUFUO0FBaEJ6QixLQUFQO0FBa0JILENBbkJEOztrQkF1QmUseUJBQVEyRSxlQUFSLEVBQTBCUSxrQkFBMUIsRUFBOEMzQix1QkFBOUMsQyIsImZpbGUiOiI2Ny5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5leHBvcnQgZGVmYXVsdCAoeyBpc1ZpcCB9KSA9PiB7XG5cdHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Bkc2NsbWVyLWZ0ciAke2lzVmlwPydtYXJnaW4tYm90dG9tLTU1JzonJ31gfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTIwXCIgc3R5bGU9e3sgY29sb3I6ICcjOGE4YThhJywgZm9udFNpemU6IDEwIH19ID5UaGUgV2Vic2l0ZSBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiBjYXNlIG9mIGEgbWVkaWNhbCBlbWVyZ2VuY3kgYW5kLyBvciBjcml0aWNhbCBjYXJlIGFuZCB0aGUgdXNlciBzaG91bGQgZGlyZWN0bHkgY29udGFjdCBoaXMvIGhlciBtZWRpY2FsIHNlcnZpY2UgcHJvdmlkZXIgZm9yIFBoeXNpY2FsIEV4YW1pbmF0aW9uLiBEb2NwcmltZSBpcyBzb2xlbHkgYSB0ZWNobm9sb2d5IHBhcnRuZXIuPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZvb3Rlci1uZXctY29weXJnaHRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1IH19ID5cbiAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUuY29tIENvcHlyaWdodCAmY29weTsgMjAyMC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5ET0NQUklNRSBURUNITk9MT0dJRVMgUFJJVkFURSBMSU1JVEVEPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5DSU4gOiBVNzQ5OTlIUjIwMTZQVEMwNjQzMTI8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuaW1wb3J0IFZpcFRuQyBmcm9tICcuL3ZpcFRuY1ZpZXcuanMnXG4vLyBpbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbi8vIGltcG9ydCBDb21tb25TZWFyY2ggZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL0NvbW1vblNlYXJjaC5qcydcblxuXG5jbGFzcyBWaXBDbHViIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgLy8gZGFzaGJvYXJkIHZpZXdcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvZ2dsZVRhYlR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgdGFic1ZhbHVlOiBbXSxcbiAgICAgICAgICAgIG9wZW5NZWRsaWZlVG5DOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAod2luZG93ICYmIGRvY3VtZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYucmVmc1sndmlwSGVhZGVyQmFyJ10pIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IHRvZ2dsZVRhYlR5cGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyB0b2dnbGVUYWJUeXBlOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBpbml0aWFsVGFicyA9IFtdXG4gICAgICAgIHRoaXMucHJvcHMuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5tYXAoKHZhbCwga2V5KSA9PlxuICAgICAgICAgICAgaW5pdGlhbFRhYnMucHVzaChrZXkpXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhYnNWYWx1ZTogaW5pdGlhbFRhYnMgfSlcbiAgICB9XG5cbiAgICBBZGRNZW1iZXJEZXRhaWxzKCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1jbHViLW1lbWJlci1kZXRhaWxzP2lzX2Zyb21fcGF5bWVudD10cnVlJylcbiAgICB9XG5cbiAgICBCdXR0b25IYW5kbGVyKGZpZWxkLCBldmVudCkge1xuICAgICAgICBsZXQgdGFicyA9IFtdLmNvbmNhdCh0aGlzLnN0YXRlLnRhYnNWYWx1ZSlcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlXG4gICAgICAgIHRhYnMgPSB0YWJzLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAgICAgaWYgKHggPT0gZmllbGQpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgIHRhYnMucHVzaChmaWVsZClcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoeyB0YWJzVmFsdWU6IHRhYnMgfSlcbiAgICB9XG5cbiAgICBjbG9zZVRuY1BvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1lZGxpZmVUbkM6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1lZGxpZmVUbkM6IHRydWUgfSlcbiAgICB9XG5cbiAgICBjb3B5VGV4dChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGNvcHlUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUlucHV0XCIpO1xuICAgICAgICBjb3B5VGV4dC5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIH1cblxuICAgIG5hdmlnYXRlVG8od2hlcmUsIHR5cGUsIGRhdGEsIGUpIHtcblx0XHRpZiAoZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0fVxuXHRcdGlmICh0eXBlKSB7XG5cdFx0XHR0aGlzLnByb3BzLnNlbGVjdFNlYXJjaFR5cGUodHlwZSlcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUpXG5cdH1cblxuICAgIG5hdmlnYXRlVG9TQkkoKXtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly8xMy4yMzUuMTk5LjM2L3dlYmNvcmUvZG9jcHJpbWVjYWxsYmFjaycsICdfYmxhbmsnKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGV4cGlyeV9kYXRlID0gbmV3IERhdGUodGhpcy5wcm9wcy5kYXRhLnVzZXIuZXhwaXJlX2RhdGUpXG4gICAgICAgIGV4cGlyeV9kYXRlID0gZXhwaXJ5X2RhdGUudG9EYXRlU3RyaW5nKClcbiAgICAgICAgbGV0IGV4cGlyeURhdGUgPSBleHBpcnlfZGF0ZS5zcGxpdChcIiBcIilcbiAgICAgICAgbGV0IHByaW1hcnlfdXNlciA9IHt9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJpbWFyeV91c2VyID0gdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMuZmlsdGVyKCh4ID0+IHguaXNfcHJpbWFyeV91c2VyKSlbMF1cbiAgICAgICAgfVxuICAgICAgICBsZXQgaXNfY29ycG9yYXRlID0gZmFsc2VcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuaXNfZ29sZCAmJiB0aGlzLnByb3BzLmRhdGEucGxhbiAmJiB0aGlzLnByb3BzLmRhdGEucGxhbi5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGlzX2NvcnBvcmF0ZSA9IHRoaXMucHJvcHMuZGF0YS5wbGFuWzBdLmlzX2NvcnBvcmF0ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIlwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge2BkLWxnLW5vbmUgZC1ibG9jayAkeyF0aGlzLnByb3BzLmlzX2dvbGQ/J2Qtbm9uZSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW5ldy1zdWItaGVhZGVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTVwdFwiIGhlaWdodD1cIjE4cHRcIiB2aWV3Qm94PVwiMCAwIDI1IDI0XCIgdmVyc2lvbj1cIjEuMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cInN1cmZhY2UxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiI2Y3ODYzMVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTSAyNC41NjY0MDYgMTIuOTI1NzgxIEMgMjQuMjk2ODc1IDEzLjIwMzEyNSAyMy45MzM1OTQgMTMuMzU5Mzc1IDIzLjU1NDY4OCAxMy4zNTkzNzUgQyAyMy4xNzU3ODEgMTMuMzU5Mzc1IDIyLjgwODU5NCAxMy4yMDMxMjUgMjIuNTQyOTY5IDEyLjkyNTc4MSBMIDEzLjA3MDMxMiAzLjE1NjI1IEMgMTIuNzYxNzE5IDIuODM5ODQ0IDEyLjIxODc1IDIuODM5ODQ0IDExLjkxMDE1NiAzLjE1NjI1IEwgMi40NDE0MDYgMTIuOTI1NzgxIEMgMS44Nzg5MDYgMTMuNTAzOTA2IDAuOTc2NTYyIDEzLjUwMzkwNiAwLjQxNDA2MiAxMi45MjU3ODEgQyAwLjE0ODQzOCAxMi42NTIzNDQgLTAuMDAzOTA2MjUgMTIuMjczNDM4IC0wLjAwMzkwNjI1IDExLjg4MjgxMiBDIC0wLjAwMzkwNjI1IDExLjQ4ODI4MSAwLjE0ODQzOCAxMS4xMTMyODEgMC40MTQwNjIgMTAuODM1OTM4IEwgOS44ODY3MTkgMS4wNjY0MDYgQyAxMS4yNzczNDQgLTAuMzcxMDk0IDEzLjY5OTIxOSAtMC4zNzEwOTQgMTUuMDkzNzUgMS4wNjY0MDYgTCAxNy45MTQwNjIgMy45NzI2NTYgTCAyMC43ODEyNSA2LjkyOTY4OCBMIDI0LjU2NjQwNiAxMC44MzU5MzggQyAyNC44MzU5MzggMTEuMTEzMjgxIDI0Ljk4ODI4MSAxMS40ODgyODEgMjQuOTg4MjgxIDExLjg4MjgxMiBDIDI0Ljk4ODI4MSAxMi4yNzM0MzggMjQuODM1OTM4IDEyLjY1MjM0NCAyNC41NjY0MDYgMTIuOTI1NzgxIFogTSAxMS45OTIxODggNS45NjA5MzggQyAxMi4yNjk1MzEgNS42Nzk2ODggMTIuNzE0ODQ0IDUuNjc5Njg4IDEyLjk4ODI4MSA1Ljk2MDkzOCBMIDIxLjMxNjQwNiAxNC41NTQ2ODggQyAyMS40NDkyMTkgMTQuNjg3NSAyMS41MjM0MzggMTQuODc1IDIxLjUyMzQzOCAxNS4wNjY0MDYgTCAyMS41MjM0MzggMjEuMzMyMDMxIEMgMjEuNTIzNDM4IDIyLjgwNDY4OCAyMC4zNjcxODggMjMuOTk2MDk0IDE4Ljk0MTQwNiAyMy45OTYwOTQgTCAxNC44MjAzMTIgMjMuOTk2MDk0IEwgMTQuODIwMzEyIDE3LjQwNjI1IEwgMTAuMTY0MDYyIDE3LjQwNjI1IEwgMTAuMTY0MDYyIDIzLjk5NjA5NCBMIDYuMDM5MDYyIDIzLjk5NjA5NCBDIDQuNjEzMjgxIDIzLjk5NjA5NCAzLjQ1NzAzMSAyMi44MDQ2ODggMy40NTcwMzEgMjEuMzMyMDMxIEwgMy40NTcwMzEgMTUuMDY2NDA2IEMgMy40NTcwMzEgMTQuODc1IDMuNTMxMjUgMTQuNjg3NSAzLjY2NDA2MiAxNC41NTQ2ODggWiBNIDExLjk5MjE4OCA1Ljk2MDkzOCBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNfZ29sZD8nJzpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B2aXBIZWFkZXJCYXIgJHt0aGlzLnN0YXRlLnRvZ2dsZVRhYlR5cGUgPyAnaGVkLWN1cnYtcm1vdmUnIDogJyd9YH0gcmVmPVwidmlwSGVhZGVyQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcEJhY2tJY29cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpfSBzdHlsZT17e2JhY2tncm91bmQ6JyNmNzg2MzEnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy92aXAtaG9tZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdmlwLWxvZ28tY29udCAke3RoaXMuc3RhdGUudG9nZ2xlVGFiVHlwZSA/ICdoZWFkZXItc2Nyb2xsLWNoYW5nZScgOiAnJ31gfSByZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXBMb2dpSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdmlwLWxvZ28ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNjcmwtY29udC1kYXRcIj57aXNfY29ycG9yYXRlP1wiWW91ciBhIERvY3ByaW1lIFZJUCBNZW1iZXJcIjpcIlNhdmUgNzAlIG9uIHlvdXIgZmFtaWx5J3MgbWVkaWNhbCBiaWxsc1wifTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlZhbGlkIHRpbGwge2V4cGlyeURhdGVbMV0gKyAnICcgKyBleHBpcnlEYXRlWzJdICsgJywnICsgJyAnKyBleHBpcnlEYXRlWzNdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsvKiBsYXN0IHNjcmVlbiBkZXNpZ24gKi99XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSB7YGNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpbiAke3RoaXMucHJvcHMuaXNfZ29sZD8nbWQtdG9wLW1yZ24tcm12Jzonc3ViLXBkbmctYWRkJ31gfSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZS1uZXctY29udGFpbmVyIGZvbnQtYW5hbHl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNfZ29sZCAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycyAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5sZW5ndGggPiAwICYmIHByaW1hcnlfdXNlciAmJiBPYmplY3Qua2V5cyhwcmltYXJ5X3VzZXIpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC13aGl0ZS1iZy1jb250YWluZXIgY2FyZC1jb250YWluZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1jYXJkLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImFzc2V0cy9pbWcvd2hpdGViZy5wbmdcIiBhbHQ9XCJHb2xkIEN1c3RvbWVyXCIgY2xhc3NOYW1lPVwic2hhZG93LWltZ1wiLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpcExvZ2lJbWctMiBwZC0xMlwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDcgfX0gc3JjPVwiL2Fzc2V0cy9pbWcvZG9jZ29sZC5wbmdcIiB3aWR0aD1cIjgwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWNhcmQtdXNlciB0ZXh0LXJpZ2h0IHRleHQtd2hpdGUgcGQtMTJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cHJpbWFyeV91c2VyLmZpcnN0X25hbWV9IHtwcmltYXJ5X3VzZXIubGFzdF9uYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PihQcmltYXJ5KTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyc2hpcC12YWxpZGl0eS1jb2x1bW4gcGQtMTIgdGV4dC1ibGFjayB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Eb2NwcmltZSBHb2xkIE1lbWJlcjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlZhbGlkIHRpbGwgPHN0cm9uZz57ZXhwaXJ5RGF0ZVsxXSArICcgJyArIGV4cGlyeURhdGVbMl0gKyAnLCcgKyAnICcgKyBleHBpcnlEYXRlWzNdfSA8L3N0cm9uZz48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLmlzX21lbWJlcl9hbGxvd2VkICYmICFpc19jb3Jwb3JhdGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtgJHt0aGlzLnByb3BzLmlzX2dvbGQ/J2dvbGQtd2hpdGUtYmctY29udGFpbmVyIG1iLTI0JzonJ31gfSBzdHlsZT17eyBwYWRkaW5nVG9wOiAwLCBwYWRkaW5nQm90dG9tOiAyMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtYWN0LXBvcCB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXdybi1pbWcgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy90aWNraWNvbi5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC13cm4tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+WW91ciBzdWJzY3JpcHRpb24gaXMgbm93IGFjdGl2ZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEucGxhbiAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS5wbGFuLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7YFlvdSBjYW4gYWRkIHRoZSByZW1haW5pbmcgJHt0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS5wbGFuWzBdLnRvdGFsX2FsbG93ZWRfbWVtYmVycyAtIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmxlbmd0aH0gbWVtYmVycyBhbnl0aW1lIHVudGlsIHRoZSBleHBpcnkgZGF0ZS5gfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuQWRkTWVtYmVyRGV0YWlscy5iaW5kKHRoaXMpfT5BZGQgbWVtYmVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5pc19nb2xkICYmIHRoaXMucHJvcHMuZGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRhdGEpLmxlbmd0aCA+IDAgICYmIGlzX2NvcnBvcmF0ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtYWNudC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5WSVAgQmVuZWZpdHM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgcC0xMiBtYi0yNCBwZC1yLTAgcGQtbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtYmVuaWZpLWNhcmRzLWNvbnQgdmlwLWNsdWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtYmVuaWZpLWNhcmRzIG1yLWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NlYXJjaFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvc2VhcmNoXCIsICdvcGQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ2wxLnBuZyd9IC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci10LTVcIj5Cb29rIDxici8+IERvY3RvcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWJlbmlmaS1jYXJkcyBtci1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NlYXJjaFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3NlYXJjaFwiLCAnbGFiJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ2wyLnBuZyd9IC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci10LTVcIj5Cb29rIExhYiA8YnIvPiBUZXN0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iZW5pZmktY2FyZHMgbXItYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5tZWRsaWZlLmNvbS9hcHAvP2Jhbm5lcl91cmw9aHR0cHM6Ly9tZWRpYS5tZWRsaWZlLmNvbS9QVFIvZG9jcHJpbWUuanBnIy9yb290L2xvZ2luL0xvZ2luTGFuZGluZ09sZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9tZWRsaWZlLW1lZC5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLXQtNVwiPk9yZGVyIDxici8+IE1lZGljaW5lczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmlzX2dvbGQgJiYgdGhpcy5wcm9wcy5kYXRhLnBsYW4gJiYgdGhpcy5wcm9wcy5kYXRhLnBsYW4ubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLmRhdGEucGxhblswXS51dGlsaXplICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YS5wbGFuWzBdLnV0aWxpemUpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1kc2gtbWFpbi1jb250IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1hY250LWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PllvdXIgQWNjb3VudDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9hcHBvaW50bWVudHMnKX0+VmlldyBBcHBvaW50bWVudHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2Mtb25sbi1jbnNsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1jbnNsdC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidmlwLWJyZGVyLWhkbmdcIj5Jbi1DbGluaWMgQ29uc3VsdGF0aW9uPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VG90YWwgTGltaXQ6IDxzcGFuPuKCuXt0aGlzLnByb3BzLmRhdGEucGxhblswXS51dGlsaXplLmRvY3Rvcl9jb25zdWx0X2Ftb3VudCA+PSA5OTk5OT8nVW5saW1pdGVkJzp0aGlzLnByb3BzLmRhdGEucGxhblswXS51dGlsaXplLmRvY3Rvcl9jb25zdWx0X2Ftb3VudH0gIDwvc3Bhbj48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VXRpbGl6ZWQ6IDxzcGFuPuKCuXt0aGlzLnByb3BzLmRhdGEucGxhblswXS51dGlsaXplLmRvY3Rvcl9hbW91bnRfdXRpbGl6ZWR9IDwvc3Bhbj48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLnBsYW5bMF0udXRpbGl6ZS5kb2N0b3JfYW1vdW50X2F2YWlsYWJsZSA8PTk5OTk5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QXZhaWxhYmxlOiA8c3BhbiBjbGFzc05hbWU9XCJ2aXAtY3JkLWF2bC1ncm5cIj7igrl7dGhpcy5wcm9wcy5kYXRhLnBsYW5bMF0udXRpbGl6ZS5kb2N0b3JfYW1vdW50X2F2YWlsYWJsZX08L3NwYW4+PC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc19jb3Jwb3JhdGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1jbnNsdC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInZpcC1icmRlci1oZG5nXCI+TGFiIFRlc3RzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ub3RhbCBMaW1pdDogPHNwYW4+4oK5e3RoaXMucHJvcHMuZGF0YS5wbGFuWzBdLnV0aWxpemUuYXZhaWxhYmxlX2xhYnRlc3RfYW1vdW50ID49IDk5OTk5PydVbmxpbWl0ZWQnOnRoaXMucHJvcHMuZGF0YS5wbGFuWzBdLnV0aWxpemUuYXZhaWxhYmxlX2xhYnRlc3RfYW1vdW50fSAgPC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VXRpbGl6ZWQ6IDxzcGFuPuKCuXt0aGlzLnByb3BzLmRhdGEucGxhblswXS51dGlsaXplLmxhYl9hbW91bnRfdXRpbGl6ZWR9IDwvc3Bhbj48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5wbGFuWzBdLnV0aWxpemUuYXZhaWxhYmxlX2xhYnRlc3RfYW1vdW50IDw9OTk5OTk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QXZhaWxhYmxlOiA8c3BhbiBjbGFzc05hbWU9XCJ2aXAtY3JkLWF2bC1ncm5cIj7igrl7dGhpcy5wcm9wcy5kYXRhLnBsYW5bMF0udXRpbGl6ZS5hdmFpbGFibGVfbGFidGVzdF9hbW91bnR9PC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1jbnNsdC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInZpcC1icmRlci1oZG5nXCI+RG9jcHJpbWUgQ2FyZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLXVuLW1lbVwiPlVubGltaXRlZCBvbmxpbmUgY29uc3VsdCBmb3IgOCBtZW1iZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcC1jbnNsLWFjdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtY2hrLnN2Zyd9IC8+QWN0aXZhdGVkIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aXAtY3JkLWJ0blwiPkNoYXQgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNfY29ycG9yYXRlPycnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInZpcC1icmRlci1oZG5nXCI+RnVsbCBCb2R5IEhlYWx0aCBQYWNrYWdlPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtc2JzLWNyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1zYnMtY3JkLWxmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkluY2x1ZGVzIHt0aGlzLnByb3BzLmRhdGEucGxhblswXS53b3J0aC50b3RhbF90ZXN0X2NvdmVyZWRfaW5fcGFja2FnZX0gVGVzdHMsIGNhbiBiZSB1c2VkIGJ5IHt0aGlzLnByb3BzLmRhdGEucGxhblswXS53b3J0aC5tZW1iZXJzX2NvdmVyZWRfaW5fcGFja2FnZX0gbWVtYmVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtc2JzLWNyZC1yZ3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJybW5nLXBudFwiPnt0aGlzLnByb3BzLmRhdGEucGxhblswXS51dGlsaXplLmF2YWlsYWJsZV9wYWNrYWdlX2NvdW50fSA8c3Bhbj5yZW1haW5pbmcgPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInZpcC1idG4tc2JzXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaHBhY2thZ2VzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3ZpcFBhY2thZ2VDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ZpcC1wYWNrYWdlLWNsaWNrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+Qm9vayBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLmlzX2dvbGQgJiYgIWlzX2NvcnBvcmF0ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1vZmZlci1jYXJkcyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ2aXAtYnJkZXItaGRuZ1wiPlRheCBCZW5lZml0PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmQtbGZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVuZGVyIFNlY3Rpb24gODBEPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmQtcmd0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aXAtYnRuLXNic1wiPkRvd25sb2FkIEludm9pY2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc19nb2xkICYmIHRoaXMucHJvcHMuZGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRhdGEpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgcC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ29sZC1jbXBsdC1mcnN0XCI+WW91IFNhdmVkIDxzcGFuPuKCuXt0aGlzLnByb3BzLmRhdGEudG90YWxfdmlwX2Ftb3VudH08L3NwYW4+IHRpbGwgbm93PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ29sZC1jbXBsdC1zZWNvbmRcIj5Ub3RhbCBHb2xkIGFwcG9pbnRtZW50cyB0aWxsIG5vdyA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsZC1jbXBsdC1sc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnb2xkLWNtcGx0LWZyc3RcIj48c3Bhbj57dGhpcy5wcm9wcy5kYXRhLmxhYl9hcHBvaW50bWVudF9jb3VudH08L3NwYW4+IExhYjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnb2xkLWNtcGx0LWZyc3RcIj48c3Bhbj57dGhpcy5wcm9wcy5kYXRhLm9wZF9hcHBvaW50bWVudF9jb3VudH08L3NwYW4+IERvY3RvcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IGdvbGQgYmVuaWZpdHMgID09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzX2dvbGQgJiYgdGhpcy5wcm9wcy5kYXRhICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YSkubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgcC0xMiBtYi0yNCBwZC1yLTAgcGQtbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iZW5pZmktY2FyZHMtY29udCB2aXAtY2x1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWJlbmlmaS1jYXJkcyBtci1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NlYXJjaFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3NlYXJjaFwiLCAnb3BkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ2wxLnBuZyd9IC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLXQtNVwiPkJvb2sgPGJyLz4gRG9jdG9yczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWJlbmlmaS1jYXJkcyBtci1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvc2VhcmNoXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3NlYXJjaFwiLCAnbGFiJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nbDIucG5nJ30gLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItdC01XCI+Qm9vayBMYWIgPGJyLz4gVGVzdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWJlbmlmaS1jYXJkcyBtci1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubWVkbGlmZS5jb20vYXBwLz9iYW5uZXJfdXJsPWh0dHBzOi8vbWVkaWEubWVkbGlmZS5jb20vUFRSL2RvY3ByaW1lLmpwZyMvcm9vdC9sb2dpbi9Mb2dpbkxhbmRpbmdPbGRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9tZWRsaWZlLW1lZC5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci10LTVcIj5PcmRlciA8YnIvPiBNZWRpY2luZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKip2aXAgZGlzY291bnQgZGFzaGJvYXJkKiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtZGlzY291bnQtY29sIHAtMTIgbWItMjQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJnLWNpcmNsZS1pbWdcIiBzcmM9XCIvYXNzZXRzL2ltZy9jaXJjbGUtYmcucG5nXCIgYWx0PVwiY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyLWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GbGF0IDIzJSBPRkYgPGJyIC8+IDxzcGFuPm9uIG1lZGljaW5lczwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTEyXCI+PGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvZGlhZ25vc3RpYy9jb21tb25fcGFja2FnZV9pY29ucy9tZWRsaWZlX2hEUXhpbEoucG5nXCIgYWx0PVwiTWVkbGlmZVwiIC8+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0Yy1hcHBseSBwZC1yLTBcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpfT5UJmFtcDtDIEFwcGx5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY291bnQtY291cGFuLWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXBhbi1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Vc2UgY291cG9uOiA8c3Bhbj5ET0NQUklNRTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1ub25lXCIgb25DbGljaz17dGhpcy5jb3B5VGV4dC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGE+PGltZyBzcmM9XCJcIiBhbHQ9XCJjb3B5XCIgLz48L2E+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvY29weS5zdmdcIiBhbHQ9XCJjb3B5XCIgaGVpZ2h0PVwiMThweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGFwIHRvIGNvcHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7IG9wYWNpdHk6IDAgfX0gaWQ9XCJteUlucHV0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIkRPQ1BSSU1FXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vYml0Lmx5LzJ2SExwbVdcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJvcmRlci1ub3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk9yZGVyIG1lZGljaW5lIG5vdzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJib3JkZXItY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS51c2VyICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YS51c2VyKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuZGF0YS51c2VyLnBsdXNfbWVtYmVycyAmJiB0aGlzLnByb3BzLmRhdGEudXNlci5wbHVzX21lbWJlcnMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW9mZmVyLWNhcmRzIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidmlwLWJyZGVyLWhkbmdcIj5NZW1iZXJzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ2aXAtYWNyLWxzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsIGtleSl9IGNsYXNzTmFtZT1cInZpcC1hY3JkLWhkbmdcIj48c3Bhbj57dmFsLmZpcnN0X25hbWV9IHt2YWwubGFzdF9uYW1lfSA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsLnJlbGF0aW9uID09ICdTRUxGJyA/IDxiPihQcmltYXJ5KTwvYj4gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48aW1nIGNsYXNzTmFtZT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YGFjZG4tYXJyb3cgICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZihrZXkpID4gLTEgPyAnJyA6ICdhY2RuLWFycm93LXVwJ31gfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B2aXAtc24tdGJsICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZihrZXkpID4gLTEgPyAnZC1ub25lJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ2aXAtYWNyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVsYXRpb25zaGlwPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+R2VuZGVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RE9CPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt2YWwucmVsYXRpb259PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0gPnt2YWwudGl0bGUgPT0gJ21yLicgPyAnbScgOiB2YWwuZ2VuZGVyID09ICdtJz8nbSc6ICdmJ308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dmFsLmRvYn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEuaXNfbWVtYmVyX2FsbG93ZWQgJiYgIWlzX2NvcnBvcmF0ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuQWRkTWVtYmVyRGV0YWlscy5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ2aXAtYWNyZC1hZGQtbWVtYmVyXCI+PGltZyBjbGFzc05hbWU9XCJ2aXAtYWRkLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLW1lbS5zdmcnfSAvPkFkZCBNZW1iZXJzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtY29udGFjdCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtc2JzLWNyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidmlwLWJyZGVyLWhkbmdcIj5Db250YWN0IFN1cHBvcnQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1jb2N0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5lZWQgaGVscCB3aXRoIGJvb2tpbmc/IDxzcGFuPkNhbGwgdXMgYXQgMTgwMC0xMjMtOTQxOTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IYXZlIGEgcXVlcnk/IDxzcGFuPkVtYWlsIHVzIGF0IGN1c3RvbWVyY2FyZUBkb2NwcmltZS5jb208L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhICYmIHRoaXMucHJvcHMuZGF0YS5wbHVzX3ZpYV9zYmk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgc3RpY2t5LWJ0biBwLTAgdi1idG4gIGJ0bi1sZyBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIGJ1dHRvbnMtYWRkY2FydC1jb250YWluZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2LWJ0bi1wcmltYXJ5IGJvb2stYnRuLW1yZ24tYWRqdXN0IFwiIG9uQ2xpY2s9eygpPT57dGhpcy5uYXZpZ2F0ZVRvU0JJKCl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrIFRvIFNCSUcgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3Blbk1lZGxpZmVUbkMgPyA8VmlwVG5DIHByb3BzPXt0aGlzLnByb3BzfSB0b2dnbGU9e3RoaXMuY2xvc2VUbmNQb3B1cC5iaW5kKHRoaXMpfSBpc19pbnN1cmFuY2VfYXBwbGljYWJsZT17ZmFsc2V9Lz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciBpc1ZpcD17dHJ1ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlwQ2x1YiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRvZ2dsZSxwcm9wcyxpc19pbnN1cmFuY2VfYXBwbGljYWJsZSB9KSA9PiB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4XCIgb25DbGljaz17dG9nZ2xlfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXAgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0bmMtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+VGVybXMgJmFtcDsgQ29uZGl0aW9uczwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bmMtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTI0XCI+PHN0cm9uZz5NZWRsaWZlIFRuQzwvc3Ryb25nPjwvaDM+XG4gICAgICAgICAgICAgICAgPGg1PjxzdHJvbmc+T2ZmZXIgVGVybXM6PC9zdHJvbmc+PC9oNT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwib2ZmZXItdGVybXMtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5TYXZlIDIzJSBvbiBhbGwgcHJlc2NyaWJlZCBtZWRpY2luZXMgZXhjbHVzaXZlbHkgZm9yIDxzdHJvbmc+RG9jcHJpbWUgR29sZCAvIFZJUCB1c2Vyczwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5ObyBtaW5pbXVtIG9yZGVyIHZhbHVlIHJlcXVpcmVkIHRvIGF2YWlsIGRpc2NvdW50LjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5WaXNpdCA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWVkbGlmZS5jb20vXCI+TWVkbGlmZS5jb208L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwcmVzY3JpcHRpb24gJmFtcDsgc2VsZWN0IG1lZGljaW5lcy48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+RW50ZXIgcHJvbW8gaW4gdGhlIG9yZGVyIGNoZWNrb3V0IHBhZ2UuIENvbXBsZXRlIHBheW1lbnQgdmlhIGFueSBtb2RlLiAqKlByb21vIG5vdCBhcHBsaWNhYmxlIG9uIE9UQyBwcm9kdWN0czwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aDU+PHN0cm9uZz5UJmFtcDtDIFBoYXJtYWN5OiA8L3N0cm9uZz48L2g1PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJvZmZlci10ZXJtcy1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPk9mZmVyIFZhbGlkIG9uIFByZXNjcmlwdGlvbiBEcnVnczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Qcm9tbyBjb2RlIGNhbiBiZSB1c2VkIE11bHRpcGxlIHRpbWVzIGR1cmluZyB0aGUgb2ZmZXIgcGVyaW9kLiBDdXN0b21lcnMgY2FuIGF2YWlsIHRoaXMgcHJvbW8gY29kZSBieSBjYWxsaW5nIGN1c3RvbWVyIHN1cHBvcnQgKDE4NjAtMTIzNC0xMjM0KSBvciBieSBib29raW5nIG9ubGluZSB0aHJvdWdoIGxhbmRpbmcgcGFnZSBsaW5rLiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EaXNjb3VudCBvbiBTZWxlY3RlZCBQcm9kdWN0czogRGlzY291bnRzIHByb3ZpZGVkIG9uIHRoZSB3ZWJzaXRlL21vYmlsZSBhcHBsaWNhdGlvbiBhcmUgb24gc2VsZWN0ZWQgcHJvZHVjdHMuIERpc2NvdW50cyBhcmUgbm90IGFwcGxpY2FibGUgb24gdGhlIGZvbGxvd2luZyBwcm9kdWN0cyBhbmQgb24gYW55IHByb2R1Y3RzIHNvIG1lbnRpb25lZCBlbHNld2hlcmUgb24gdGhlIHdlYnNpdGUvbW9iaWxlIGFwcGxpY2F0aW9uOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGlsZC1saXN0LWl0ZW0gcGQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWxsIEJhYnkgZm9vZHMgdml6IENlcmFsYWMsIExhY3RvZ2VuLCBOYW5wcm8gZXRjLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFsbCBIZWFsdGggU3VwcGxlbWVudHMgdml6IFBlZGlhc3VyZSwgUHJvdGVpbmV4LCBQcm90ZWludWxlcywgVGhyZXB0aW4gZXRjPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T3ZlciB0aGUgY291bnRlciAoT1RDKSBwcm9kdWN0cyDigJMgQmVuYWRyeWwgQ291Z2ggU3lydXAsIENyb2NpbiwgU2FyaWRvbiwgYWxsIERldHRvbCwgU2F2bG9uIHByb2R1Y3RzLCBtZWRpY2F0ZWQgc29hcHMgZXRjLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFsbCBDb3NtZXRpYyBwcm9kdWN0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+T2ZmZXIgVmFsaWRpdHkg4oCTIDEgeWVhciA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgZ2V0SW5zdXJhbmNlLCBzZWxlY3RJbnN1cmFuY2VQbGFuICwgc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnMscmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnMscmVzZXRTZWxlY3RlZFBsYW5zLHNlbmRPVFAsIHN1Ym1pdE9UUCwgcmVzZXRBdXRoLCBnZXRVc2VyUHJvZmlsZSwgdXNlckRhdGEsIGdlbmVyYXRlSW5zdXJhbmNlTGVhZCwgdXJsU2hvcnRuZXIsXG5cblxuc2VsZWN0VmlwQ2x1YlBsYW4sIGdldFZpcERhc2hib2FyZExpc3QsIHJlc2V0VmlwRGF0YSwgc2VsZWN0U2VhcmNoVHlwZVxuIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBWaXBDbHViVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpcENsdWIvdmlwQ2x1YkFjdGl2YXRlc1ZpZXcuanMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgVmlwQ2x1YkFjdGl2YXRlZERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBkYXRhOm51bGwsXG4gICAgICAgICAgICBpc19nb2xkOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKCkgLy8gdG8gZ2V0IGxvZ2dlZEluIHVzZXIgcHJvZmlsZVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XG4gICAgICAgIGxldCBwcmltYXJ5X21lbWJlcl9pZCA9IG51bGxcbiAgICAgICAgdmFyIG1lbWJlcl9saXN0X2lkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcbiAgICAgICAgaWYgKG1lbWJlcl9saXN0X2lkICE9PSBudWxsKSB7IC8vIGluIGNhc2UgYWZ0ZXIgc3VjY2Vzc2Z1bGwgcGF5bWVudC5cbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRWaXBEYXRhKCkgLy8gdG8gc2V0IHZpcCBvciBnb2xkIHNvdHJlIHRvIGluaXRpYWwgc3RhdGVcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VmlwRGFzaGJvYXJkTGlzdChtZW1iZXJfbGlzdF9pZCxmYWxzZSwocmVzcCk9PnsgLy8gdG8gcmV0cml2ZSB2aXAgb3IgZ29sZCBkYXNoYm9hcmQgZGF0YVxuICAgICAgICAgICAgICAgIGlmKHJlc3AgJiYgT2JqZWN0LmtleXMocmVzcC5kYXRhKS5sZW5ndGggPjApe1xuICAgICAgICAgICAgICAgICAgICBpZihyZXNwLmRhdGEudXNlciAmJiBPYmplY3Qua2V5cyhyZXNwLmRhdGEudXNlcikubGVuZ3RoID4gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeV9tZW1iZXJfaWQgPSAgIHJlc3AuZGF0YS51c2VyLnVzZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3ZpcGJvb2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ZpcGJvb2tlZCcsICd1c2VyX2lkJzogcHJpbWFyeV9tZW1iZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6cmVzcC5kYXRhLGlzX2dvbGQ6cmVzcC5kYXRhLnBsYW5bMF0uaXNfZ29sZH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0VmlwRGF0YSgpIC8vIHRvIHNldCB2aXAgb3IgZ29sZCBzb3RyZSB0byBpbml0aWFsIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFZpcERhc2hib2FyZExpc3QobWVtYmVyX2xpc3RfaWQsdHJ1ZSwocmVzcCk9PnsgLy8gdG8gcmV0cml2ZSB2aXAgb3IgZ29sZCBkYXNoYm9hcmQgZGF0YVxuICAgICAgICAgICAgICAgIGlmKHJlc3AgJiYgT2JqZWN0LmtleXMocmVzcC5kYXRhKS5sZW5ndGggPjApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOnJlc3AuZGF0YSxpc19nb2xkOnJlc3AuZGF0YS5wbGFuWzBdLmlzX2dvbGR9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5MT0FEX1ZJUF9DTFVCX0RBU0hCT0FSRCAmJiB0aGlzLnN0YXRlLmRhdGEpe1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxWaXBDbHViVmlldyB7Li4udGhpcy5wcm9wc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBpc19nb2xkPXt0aGlzLnN0YXRlLmlzX2dvbGR9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyBMT0FEX1ZJUF9DTFVCLCB2aXBDbHViTGlzdCwgc2VsZWN0ZWRfdmlwX3BsYW4sIExPQURfVklQX0NMVUJfREFTSEJPQVJELCB2aXBfY2x1Yl9kYl9kYXRhIH0gPSBzdGF0ZS5WSVBDTFVCXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG5cbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuICAgIHJldHVybiB7XG4gICAgICAgVVNFUiwgc2VsZWN0ZWRMb2NhdGlvbixMT0FEX1ZJUF9DTFVCLCB2aXBDbHViTGlzdCwgc2VsZWN0ZWRfdmlwX3BsYW4sIHZpcF9jbHViX2RiX2RhdGEsIExPQURfVklQX0NMVUJfREFTSEJPQVJEXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXNldFZpcERhdGE6KCkgPT4gZGlzcGF0Y2gocmVzZXRWaXBEYXRhKCkpLFxuICAgICAgICBzZWxlY3RWaXBDbHViUGxhbjogKHBsYW4sY3JpdGVyaWEsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChzZWxlY3RWaXBDbHViUGxhbihwbGFuLGNyaXRlcmlhLCBjYWxsYmFjaykpLFxuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIGdldEluc3VyYW5jZTogKGlzX2VuZG9yc2VtZW50LGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRJbnN1cmFuY2UoaXNfZW5kb3JzZW1lbnQsY2FsbGJhY2spKSwgXG4gICAgICAgIGdldFZpcERhc2hib2FyZExpc3Q6KHVzZXJfaWQsaXNfZGFzaGJvYXJkLGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRWaXBEYXNoYm9hcmRMaXN0KHVzZXJfaWQsaXNfZGFzaGJvYXJkLGNhbGxiYWNrKSksICAgICAgIFxuXG4gICAgICAgIHNlbGVjdEluc3VyYW5jZVBsYW46IChwbGFuLGNyaXRlcmlhKSA9PiBkaXNwYXRjaChzZWxlY3RJbnN1cmFuY2VQbGFuKHBsYW4sY3JpdGVyaWEpKSxcbiAgICAgICAgLy8gc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnM6IChtZW1iZXJzSWQpID0+IGRpc3BhdGNoKHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzKG1lbWJlcnNJZCkpLFxuICAgICAgICByZXNldFNlbGVjdGVkUGxhbnM6ICgpID0+IGRpc3BhdGNoKHJlc2V0U2VsZWN0ZWRQbGFucygpKSxcbiAgICAgICAgc2VuZE9UUDogKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikgPT4gZGlzcGF0Y2goc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpKSxcbiAgICAgICAgc3VibWl0T1RQOiAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zRGF0YSxjYikgPT4gZGlzcGF0Y2goc3VibWl0T1RQKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsY2IpKSxcbiAgICAgICAgcmVzZXRBdXRoOiAoKSA9PiBkaXNwYXRjaChyZXNldEF1dGgoKSksXG4gICAgICAgIHVzZXJEYXRhIDooc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSA9PiBkaXNwYXRjaCh1c2VyRGF0YShzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpKSxcbiAgICAgICAgZ2VuZXJhdGVJbnN1cmFuY2VMZWFkOihzZWxlY3RlZFBsYW4sbnVtYmVyLGxlYWRfZGF0YSxjYikgPT4gZGlzcGF0Y2goZ2VuZXJhdGVJbnN1cmFuY2VMZWFkKHNlbGVjdGVkUGxhbixudW1iZXIsbGVhZF9kYXRhLGNiKSksXG4gICAgICAgIHVybFNob3J0bmVyOiAodXJsLCBjYikgPT4gZGlzcGF0Y2godXJsU2hvcnRuZXIodXJsLCBjYikpLFxuICAgICAgICBzZWxlY3RTZWFyY2hUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0U2VhcmNoVHlwZSh0eXBlKSksXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMgLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZpcENsdWJBY3RpdmF0ZWREZXRhaWxzKSJdLCJzb3VyY2VSb290IjoiIn0=