(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _staticDisclaimer = __webpack_require__(/*! ../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

var _vipTncView = __webpack_require__(/*! ./vipTncView.js */ "./dev/js/components/vipClub/vipTncView.js");

var _vipTncView2 = _interopRequireDefault(_vipTncView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import LocationElements from '../../../containers/commons/locationElements'
// import CommonSearch from '../../../containers/commons/CommonSearch.js'


var VipClub = function (_React$Component) {
    _inherits(VipClub, _React$Component);

    // dashboard view
    function VipClub(props) {
        _classCallCheck(this, VipClub);

        var _this = _possibleConstructorReturn(this, (VipClub.__proto__ || Object.getPrototypeOf(VipClub)).call(this, props));

        _this.state = {
            toggleTabType: false,
            tabsValue: [],
            openMedlifeTnC: false
        };
        return _this;
    }

    _createClass(VipClub, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
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
            var initialTabs = [];
            this.props.data.user.plus_members.map(function (val, key) {
                return initialTabs.push(key);
            });
            this.setState({ tabsValue: initialTabs });
        }
    }, {
        key: 'AddMemberDetails',
        value: function AddMemberDetails() {
            this.props.history.push('/vip-club-member-details?is_from_payment=true');
        }
    }, {
        key: 'ButtonHandler',
        value: function ButtonHandler(field, event) {
            var tabs = [].concat(this.state.tabsValue);
            var self = this;
            var found = false;
            tabs = tabs.filter(function (x) {
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
    }, {
        key: 'closeTncPopup',
        value: function closeTncPopup() {
            this.setState({ openMedlifeTnC: false });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.setState({ openMedlifeTnC: true });
        }
    }, {
        key: 'copyText',
        value: function copyText(e) {
            e.preventDefault();
            var copyText = document.getElementById("myInput");
            copyText.select();
            document.execCommand("copy");
        }
    }, {
        key: 'navigateTo',
        value: function navigateTo(where, type, data, e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (type) {
                this.props.selectSearchType(type);
            }
            this.props.history.push(where);
        }
    }, {
        key: 'navigateToSBI',
        value: function navigateToSBI() {
            window.open('http://13.235.199.36/webcore/docprimecallback', '_blank');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var expiry_date = new Date(this.props.data.user.expire_date);
            expiry_date = expiry_date.toDateString();
            var expiryDate = expiry_date.split(" ");
            var primary_user = {};
            if (this.props.vip_club_db_data.data.user && Object.keys(this.props.vip_club_db_data.data.user).length > 0 && this.props.vip_club_db_data.data.user.plus_members && this.props.vip_club_db_data.data.user.plus_members.length > 0) {
                primary_user = this.props.vip_club_db_data.data.user.plus_members.filter(function (x) {
                    return x.is_primary_user;
                })[0];
            }
            var is_corporate = false;
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
                    { className: 'd-lg-none d-block ' + (!this.props.is_gold ? 'd-none' : '') },
                    _react2.default.createElement(
                        'div',
                        { className: 'vip-new-sub-header', onClick: function onClick() {
                                return _this2.props.history.push('/');
                            } },
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
                    { className: 'vipHeaderBar ' + (this.state.toggleTabType ? 'hed-curv-rmove' : ''), ref: 'vipHeaderBar' },
                    _react2.default.createElement(
                        'div',
                        { className: 'vipBackIco', onClick: function onClick() {
                                return _this2.props.history.push('/');
                            }, style: { background: '#f78631' } },
                        _react2.default.createElement('img', { src: "/assets" + "/img/vip-home.svg" })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'vip-logo-cont ' + (this.state.toggleTabType ? 'header-scroll-change' : ''), ref: '' },
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
                    { className: 'container container-top-margin ' + (this.props.is_gold ? 'md-top-mrgn-rmv' : 'sub-pdng-add'), style: { marginTop: '' } },
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
                                        { className: '' + (this.props.is_gold ? 'gold-white-bg-container mb-24' : ''), style: { paddingTop: 0, paddingBottom: 20 } },
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
                                                        'You can add the remaining ' + (this.props.vip_club_db_data.data.plan[0].total_allowed_members - this.props.vip_club_db_data.data.user.plus_members.length) + ' members anytime until the expiry date.'
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
                                                        { href: '/search', onClick: function onClick(e) {
                                                                e.preventDefault();
                                                                _this2.navigateTo("/search", 'opd');
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
                                                        { href: '/search', onClick: function onClick(e) {
                                                                e.preventDefault();
                                                                _this2.navigateTo("/search", 'lab');
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
                                                    { onClick: function onClick() {
                                                            return _this2.props.history.push('/user/appointments');
                                                        } },
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
                                                            { className: 'vip-btn-sbs', onClick: function onClick() {
                                                                    _this2.props.history.push('/searchpackages');

                                                                    var data = {
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
                                                    { href: '/search', onClick: function onClick(e) {
                                                            e.preventDefault();
                                                            _this2.navigateTo("/search", 'opd');
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
                                                    { href: '/search', onClick: function onClick(e) {
                                                            e.preventDefault();
                                                            _this2.navigateTo("/search", 'lab');
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
                                                    this.props.data.user.plus_members.map(function (val, key) {
                                                        return _react2.default.createElement(
                                                            'li',
                                                            { key: key },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                { onClick: _this2.ButtonHandler.bind(_this2, key), className: 'vip-acrd-hdng' },
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
                                                                _react2.default.createElement('img', { className: 'acdn-arrow  ' + (_this2.state.tabsValue.indexOf(key) > -1 ? '' : 'acdn-arrow-up'), src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'vip-sn-tbl ' + (_this2.state.tabsValue.indexOf(key) > -1 ? 'd-none' : '') },
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
                                { className: 'v-btn-primary book-btn-mrgn-adjust ', onClick: function onClick() {
                                        _this2.navigateToSBI();
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
    }]);

    return VipClub;
}(_react2.default.Component);

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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var toggle = _ref.toggle,
        props = _ref.props,
        is_insurance_applicable = _ref.is_insurance_applicable;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var VipClubActivatedDetails = function (_React$Component) {
    _inherits(VipClubActivatedDetails, _React$Component);

    function VipClubActivatedDetails(props) {
        _classCallCheck(this, VipClubActivatedDetails);

        var _this = _possibleConstructorReturn(this, (VipClubActivatedDetails.__proto__ || Object.getPrototypeOf(VipClubActivatedDetails)).call(this, props));

        _this.state = {
            data: null,
            is_gold: false
        };
        return _this;
    }

    _createClass(VipClubActivatedDetails, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile(); // to get loggedIn user profile
            }
            if (window) {
                window.scrollTo(0, 0);
            }

            var url_string = window.location.href;
            var url = new URL(url_string);
            var primary_member_id = null;
            var member_list_id = url.searchParams.get("id");
            if (member_list_id !== null) {
                // in case after successfull payment.
                this.props.resetVipData(); // to set vip or gold sotre to initial state
                this.props.getVipDashboardList(member_list_id, false, function (resp) {
                    // to retrive vip or gold dashboard data
                    if (resp && Object.keys(resp.data).length > 0) {
                        if (resp.data.user && Object.keys(resp.data.user).length > 0) {
                            primary_member_id = resp.data.user.user;
                        }
                        var gtmData = {
                            'Category': 'ConsumerApp', 'Action': 'vipbooked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vipbooked', 'user_id': primary_member_id
                        };
                        _gtm2.default.sendEvent({ data: gtmData });
                        _this2.setState({ data: resp.data, is_gold: resp.data.plan[0].is_gold });
                    }
                });
            } else {
                this.props.resetVipData(); // to set vip or gold sotre to initial state
                this.props.getVipDashboardList(member_list_id, true, function (resp) {
                    // to retrive vip or gold dashboard data
                    if (resp && Object.keys(resp.data).length > 0) {
                        _this2.setState({ data: resp.data, is_gold: resp.data.plan[0].is_gold });
                    }
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
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
    }]);

    return VipClubActivatedDetails;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$VIPCLUB = state.VIPCLUB,
        LOAD_VIP_CLUB = _state$VIPCLUB.LOAD_VIP_CLUB,
        vipClubList = _state$VIPCLUB.vipClubList,
        selected_vip_plan = _state$VIPCLUB.selected_vip_plan,
        LOAD_VIP_CLUB_DASHBOARD = _state$VIPCLUB.LOAD_VIP_CLUB_DASHBOARD,
        vip_club_db_data = _state$VIPCLUB.vip_club_db_data;
    var selectedLocation = state.SEARCH_CRITERIA_OPD.selectedLocation;

    return {
        USER: USER, selectedLocation: selectedLocation, LOAD_VIP_CLUB: LOAD_VIP_CLUB, vipClubList: vipClubList, selected_vip_plan: selected_vip_plan, vip_club_db_data: vip_club_db_data, LOAD_VIP_CLUB_DASHBOARD: LOAD_VIP_CLUB_DASHBOARD
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        resetVipData: function resetVipData() {
            return dispatch((0, _index.resetVipData)());
        },
        selectVipClubPlan: function selectVipClubPlan(plan, criteria, callback) {
            return dispatch((0, _index.selectVipClubPlan)(plan, criteria, callback));
        },
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        getInsurance: function getInsurance(is_endorsement, callback) {
            return dispatch((0, _index.getInsurance)(is_endorsement, callback));
        },
        getVipDashboardList: function getVipDashboardList(user_id, is_dashboard, callback) {
            return dispatch((0, _index.getVipDashboardList)(user_id, is_dashboard, callback));
        },

        selectInsurancePlan: function selectInsurancePlan(plan, criteria) {
            return dispatch((0, _index.selectInsurancePlan)(plan, criteria));
        },
        // saveCurrentSelectedMembers: (membersId) => dispatch(saveCurrentSelectedMembers(membersId)),
        resetSelectedPlans: function resetSelectedPlans() {
            return dispatch((0, _index.resetSelectedPlans)());
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
        userData: function userData(self_data, criteria, forceadd) {
            return dispatch((0, _index.userData)(self_data, criteria, forceadd));
        },
        generateInsuranceLead: function generateInsuranceLead(selectedPlan, number, lead_data, cb) {
            return dispatch((0, _index.generateInsuranceLead)(selectedPlan, number, lead_data, cb));
        },
        urlShortner: function urlShortner(url, cb) {
            return dispatch((0, _index.urlShortner)(url, cb));
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VipClubActivatedDetails);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvdmlwQ2x1Yi92aXBDbHViQWN0aXZhdGVzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL3ZpcFRuY1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvdmlwQ2x1Yi9WaXBDbHViQWN0aXZhdGVkRGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsIkxvYWRlciIsInByb3BzIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlZpcENsdWIiLCJzdGF0ZSIsInRvZ2dsZVRhYlR5cGUiLCJ0YWJzVmFsdWUiLCJvcGVuTWVkbGlmZVRuQyIsInNlbGYiLCJ3aW5kb3ciLCJkb2N1bWVudCIsIm9uc2Nyb2xsIiwic2Nyb2xsUG9zaXRpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJib2R5IiwicmVmcyIsInNldFN0YXRlIiwiaW5pdGlhbFRhYnMiLCJkYXRhIiwidXNlciIsInBsdXNfbWVtYmVycyIsIm1hcCIsInZhbCIsImtleSIsInB1c2giLCJoaXN0b3J5IiwiZmllbGQiLCJldmVudCIsInRhYnMiLCJjb25jYXQiLCJmb3VuZCIsImZpbHRlciIsIngiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb3B5VGV4dCIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJ3aGVyZSIsInR5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzZWxlY3RTZWFyY2hUeXBlIiwib3BlbiIsImV4cGlyeV9kYXRlIiwiRGF0ZSIsImV4cGlyZV9kYXRlIiwidG9EYXRlU3RyaW5nIiwiZXhwaXJ5RGF0ZSIsInNwbGl0IiwicHJpbWFyeV91c2VyIiwidmlwX2NsdWJfZGJfZGF0YSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJpc19wcmltYXJ5X3VzZXIiLCJpc19jb3Jwb3JhdGUiLCJpc19nb2xkIiwicGxhbiIsImJhY2tncm91bmQiLCJBU1NFVFNfQkFTRV9VUkwiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nVG9wIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImlzX21lbWJlcl9hbGxvd2VkIiwiZGlzcGxheSIsInRvdGFsX2FsbG93ZWRfbWVtYmVycyIsIkFkZE1lbWJlckRldGFpbHMiLCJiaW5kIiwibmF2aWdhdGVUbyIsInV0aWxpemUiLCJkb2N0b3JfY29uc3VsdF9hbW91bnQiLCJkb2N0b3JfYW1vdW50X3V0aWxpemVkIiwiZG9jdG9yX2Ftb3VudF9hdmFpbGFibGUiLCJhdmFpbGFibGVfbGFidGVzdF9hbW91bnQiLCJsYWJfYW1vdW50X3V0aWxpemVkIiwid29ydGgiLCJ0b3RhbF90ZXN0X2NvdmVyZWRfaW5fcGFja2FnZSIsIm1lbWJlcnNfY292ZXJlZF9pbl9wYWNrYWdlIiwiYXZhaWxhYmxlX3BhY2thZ2VfY291bnQiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJ0b3RhbF92aXBfYW1vdW50IiwibGFiX2FwcG9pbnRtZW50X2NvdW50Iiwib3BkX2FwcG9pbnRtZW50X2NvdW50IiwidG9nZ2xlIiwib3BhY2l0eSIsIkJ1dHRvbkhhbmRsZXIiLCJyZWxhdGlvbiIsImluZGV4T2YiLCJ0aXRsZSIsImdlbmRlciIsImRvYiIsInBsdXNfdmlhX3NiaSIsIm5hdmlnYXRlVG9TQkkiLCJjbG9zZVRuY1BvcHVwIiwiaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJWaXBDbHViQWN0aXZhdGVkRGV0YWlscyIsIlNUT1JBR0UiLCJjaGVja0F1dGgiLCJnZXRVc2VyUHJvZmlsZSIsInNjcm9sbFRvIiwidXJsX3N0cmluZyIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsIlVSTCIsInByaW1hcnlfbWVtYmVyX2lkIiwibWVtYmVyX2xpc3RfaWQiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJyZXNldFZpcERhdGEiLCJnZXRWaXBEYXNoYm9hcmRMaXN0IiwicmVzcCIsImd0bURhdGEiLCJMT0FEX1ZJUF9DTFVCX0RBU0hCT0FSRCIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJWSVBDTFVCIiwiTE9BRF9WSVBfQ0xVQiIsInZpcENsdWJMaXN0Iiwic2VsZWN0ZWRfdmlwX3BsYW4iLCJzZWxlY3RlZExvY2F0aW9uIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic2VsZWN0VmlwQ2x1YlBsYW4iLCJjcml0ZXJpYSIsImNhbGxiYWNrIiwiZ2V0SW5zdXJhbmNlIiwiaXNfZW5kb3JzZW1lbnQiLCJ1c2VyX2lkIiwiaXNfZGFzaGJvYXJkIiwic2VsZWN0SW5zdXJhbmNlUGxhbiIsInJlc2V0U2VsZWN0ZWRQbGFucyIsInNlbmRPVFAiLCJudW1iZXIiLCJ2aWFTbXMiLCJ2aWFXaGF0c2FwcCIsIm1lc3NhZ2VfdHlwZSIsImNiIiwic3VibWl0T1RQIiwib3RwIiwiZXh0cmFQYXJhbXNEYXRhIiwicmVzZXRBdXRoIiwidXNlckRhdGEiLCJzZWxmX2RhdGEiLCJmb3JjZWFkZCIsImdlbmVyYXRlSW5zdXJhbmNlTGVhZCIsInNlbGVjdGVkUGxhbiIsImxlYWRfZGF0YSIsInVybFNob3J0bmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNGO0FBQ1Y7QUFDRjtBQUNNO0FBQ0Y7QUFDSjtBQUNGO0FBQ0k7QUFDRjtBQUNjO0FBQ0Y7QUFDVjtBQUNGO0FBQ2M7QUFDRjtBQUNKO0FBQ0Y7QUFDSSIsImZpbGUiOiI3My5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5leHBvcnQgZGVmYXVsdCAoeyBpc1ZpcCB9KSA9PiB7XG5cdHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Bkc2NsbWVyLWZ0ciAke2lzVmlwPydtYXJnaW4tYm90dG9tLTU1JzonJ31gfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTIwXCIgc3R5bGU9e3sgY29sb3I6ICcjOGE4YThhJywgZm9udFNpemU6IDEwIH19ID5UaGUgV2Vic2l0ZSBpcyBub3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiBjYXNlIG9mIGEgbWVkaWNhbCBlbWVyZ2VuY3kgYW5kLyBvciBjcml0aWNhbCBjYXJlIGFuZCB0aGUgdXNlciBzaG91bGQgZGlyZWN0bHkgY29udGFjdCBoaXMvIGhlciBtZWRpY2FsIHNlcnZpY2UgcHJvdmlkZXIgZm9yIFBoeXNpY2FsIEV4YW1pbmF0aW9uLiBEb2NwcmltZSBpcyBzb2xlbHkgYSB0ZWNobm9sb2d5IHBhcnRuZXIuPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGZvb3Rlci1uZXctY29weXJnaHRcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA1IH19ID5cbiAgICAgICAgICAgICAgICAgICAgPHA+RG9jcHJpbWUuY29tIENvcHlyaWdodCAmY29weTsgMjAyMC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5ET0NQUklNRSBURUNITk9MT0dJRVMgUFJJVkFURSBMSU1JVEVEPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5DSU4gOiBVNzQ5OTlIUjIwMTZQVEMwNjQzMTI8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVHlwZSB8fCBcImxvYWRlckNpcmN1bGFyXCJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwLWxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pRnJhbWVQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTEwXCI+UmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtZWFzeSB3ZWJzaXRlLi4uPC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiIsImltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uL2NvbW1vbnMvSG9tZS9zdGF0aWNEaXNjbGFpbWVyLmpzJ1xuaW1wb3J0IFZpcFRuQyBmcm9tICcuL3ZpcFRuY1ZpZXcuanMnXG4vLyBpbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbi8vIGltcG9ydCBDb21tb25TZWFyY2ggZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL0NvbW1vblNlYXJjaC5qcydcblxuXG5jbGFzcyBWaXBDbHViIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgLy8gZGFzaGJvYXJkIHZpZXdcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvZ2dsZVRhYlR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgdGFic1ZhbHVlOiBbXSxcbiAgICAgICAgICAgIG9wZW5NZWRsaWZlVG5DOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAod2luZG93ICYmIGRvY3VtZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYucmVmc1sndmlwSGVhZGVyQmFyJ10pIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IHRvZ2dsZVRhYlR5cGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyB0b2dnbGVUYWJUeXBlOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBpbml0aWFsVGFicyA9IFtdXG4gICAgICAgIHRoaXMucHJvcHMuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5tYXAoKHZhbCwga2V5KSA9PlxuICAgICAgICAgICAgaW5pdGlhbFRhYnMucHVzaChrZXkpXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhYnNWYWx1ZTogaW5pdGlhbFRhYnMgfSlcbiAgICB9XG5cbiAgICBBZGRNZW1iZXJEZXRhaWxzKCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1jbHViLW1lbWJlci1kZXRhaWxzP2lzX2Zyb21fcGF5bWVudD10cnVlJylcbiAgICB9XG5cbiAgICBCdXR0b25IYW5kbGVyKGZpZWxkLCBldmVudCkge1xuICAgICAgICBsZXQgdGFicyA9IFtdLmNvbmNhdCh0aGlzLnN0YXRlLnRhYnNWYWx1ZSlcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlXG4gICAgICAgIHRhYnMgPSB0YWJzLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAgICAgaWYgKHggPT0gZmllbGQpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgIHRhYnMucHVzaChmaWVsZClcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoeyB0YWJzVmFsdWU6IHRhYnMgfSlcbiAgICB9XG5cbiAgICBjbG9zZVRuY1BvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1lZGxpZmVUbkM6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1lZGxpZmVUbkM6IHRydWUgfSlcbiAgICB9XG5cbiAgICBjb3B5VGV4dChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGNvcHlUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUlucHV0XCIpO1xuICAgICAgICBjb3B5VGV4dC5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIH1cblxuICAgIG5hdmlnYXRlVG8od2hlcmUsIHR5cGUsIGRhdGEsIGUpIHtcblx0XHRpZiAoZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0fVxuXHRcdGlmICh0eXBlKSB7XG5cdFx0XHR0aGlzLnByb3BzLnNlbGVjdFNlYXJjaFR5cGUodHlwZSlcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2god2hlcmUpXG5cdH1cblxuICAgIG5hdmlnYXRlVG9TQkkoKXtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly8xMy4yMzUuMTk5LjM2L3dlYmNvcmUvZG9jcHJpbWVjYWxsYmFjaycsICdfYmxhbmsnKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGV4cGlyeV9kYXRlID0gbmV3IERhdGUodGhpcy5wcm9wcy5kYXRhLnVzZXIuZXhwaXJlX2RhdGUpXG4gICAgICAgIGV4cGlyeV9kYXRlID0gZXhwaXJ5X2RhdGUudG9EYXRlU3RyaW5nKClcbiAgICAgICAgbGV0IGV4cGlyeURhdGUgPSBleHBpcnlfZGF0ZS5zcGxpdChcIiBcIilcbiAgICAgICAgbGV0IHByaW1hcnlfdXNlciA9IHt9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIpLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJpbWFyeV91c2VyID0gdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEudXNlci5wbHVzX21lbWJlcnMuZmlsdGVyKCh4ID0+IHguaXNfcHJpbWFyeV91c2VyKSlbMF1cbiAgICAgICAgfVxuICAgICAgICBsZXQgaXNfY29ycG9yYXRlID0gZmFsc2VcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuaXNfZ29sZCAmJiB0aGlzLnByb3BzLmRhdGEucGxhbiAmJiB0aGlzLnByb3BzLmRhdGEucGxhbi5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGlzX2NvcnBvcmF0ZSA9IHRoaXMucHJvcHMuZGF0YS5wbGFuWzBdLmlzX2NvcnBvcmF0ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIlwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge2BkLWxnLW5vbmUgZC1ibG9jayAkeyF0aGlzLnByb3BzLmlzX2dvbGQ/J2Qtbm9uZSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW5ldy1zdWItaGVhZGVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTVwdFwiIGhlaWdodD1cIjE4cHRcIiB2aWV3Qm94PVwiMCAwIDI1IDI0XCIgdmVyc2lvbj1cIjEuMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cInN1cmZhY2UxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiI2Y3ODYzMVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTSAyNC41NjY0MDYgMTIuOTI1NzgxIEMgMjQuMjk2ODc1IDEzLjIwMzEyNSAyMy45MzM1OTQgMTMuMzU5Mzc1IDIzLjU1NDY4OCAxMy4zNTkzNzUgQyAyMy4xNzU3ODEgMTMuMzU5Mzc1IDIyLjgwODU5NCAxMy4yMDMxMjUgMjIuNTQyOTY5IDEyLjkyNTc4MSBMIDEzLjA3MDMxMiAzLjE1NjI1IEMgMTIuNzYxNzE5IDIuODM5ODQ0IDEyLjIxODc1IDIuODM5ODQ0IDExLjkxMDE1NiAzLjE1NjI1IEwgMi40NDE0MDYgMTIuOTI1NzgxIEMgMS44Nzg5MDYgMTMuNTAzOTA2IDAuOTc2NTYyIDEzLjUwMzkwNiAwLjQxNDA2MiAxMi45MjU3ODEgQyAwLjE0ODQzOCAxMi42NTIzNDQgLTAuMDAzOTA2MjUgMTIuMjczNDM4IC0wLjAwMzkwNjI1IDExLjg4MjgxMiBDIC0wLjAwMzkwNjI1IDExLjQ4ODI4MSAwLjE0ODQzOCAxMS4xMTMyODEgMC40MTQwNjIgMTAuODM1OTM4IEwgOS44ODY3MTkgMS4wNjY0MDYgQyAxMS4yNzczNDQgLTAuMzcxMDk0IDEzLjY5OTIxOSAtMC4zNzEwOTQgMTUuMDkzNzUgMS4wNjY0MDYgTCAxNy45MTQwNjIgMy45NzI2NTYgTCAyMC43ODEyNSA2LjkyOTY4OCBMIDI0LjU2NjQwNiAxMC44MzU5MzggQyAyNC44MzU5MzggMTEuMTEzMjgxIDI0Ljk4ODI4MSAxMS40ODgyODEgMjQuOTg4MjgxIDExLjg4MjgxMiBDIDI0Ljk4ODI4MSAxMi4yNzM0MzggMjQuODM1OTM4IDEyLjY1MjM0NCAyNC41NjY0MDYgMTIuOTI1NzgxIFogTSAxMS45OTIxODggNS45NjA5MzggQyAxMi4yNjk1MzEgNS42Nzk2ODggMTIuNzE0ODQ0IDUuNjc5Njg4IDEyLjk4ODI4MSA1Ljk2MDkzOCBMIDIxLjMxNjQwNiAxNC41NTQ2ODggQyAyMS40NDkyMTkgMTQuNjg3NSAyMS41MjM0MzggMTQuODc1IDIxLjUyMzQzOCAxNS4wNjY0MDYgTCAyMS41MjM0MzggMjEuMzMyMDMxIEMgMjEuNTIzNDM4IDIyLjgwNDY4OCAyMC4zNjcxODggMjMuOTk2MDk0IDE4Ljk0MTQwNiAyMy45OTYwOTQgTCAxNC44MjAzMTIgMjMuOTk2MDk0IEwgMTQuODIwMzEyIDE3LjQwNjI1IEwgMTAuMTY0MDYyIDE3LjQwNjI1IEwgMTAuMTY0MDYyIDIzLjk5NjA5NCBMIDYuMDM5MDYyIDIzLjk5NjA5NCBDIDQuNjEzMjgxIDIzLjk5NjA5NCAzLjQ1NzAzMSAyMi44MDQ2ODggMy40NTcwMzEgMjEuMzMyMDMxIEwgMy40NTcwMzEgMTUuMDY2NDA2IEMgMy40NTcwMzEgMTQuODc1IDMuNTMxMjUgMTQuNjg3NSAzLjY2NDA2MiAxNC41NTQ2ODggWiBNIDExLjk5MjE4OCA1Ljk2MDkzOCBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNfZ29sZD8nJzpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B2aXBIZWFkZXJCYXIgJHt0aGlzLnN0YXRlLnRvZ2dsZVRhYlR5cGUgPyAnaGVkLWN1cnYtcm1vdmUnIDogJyd9YH0gcmVmPVwidmlwSGVhZGVyQmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcEJhY2tJY29cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpfSBzdHlsZT17e2JhY2tncm91bmQ6JyNmNzg2MzEnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy92aXAtaG9tZS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdmlwLWxvZ28tY29udCAke3RoaXMuc3RhdGUudG9nZ2xlVGFiVHlwZSA/ICdoZWFkZXItc2Nyb2xsLWNoYW5nZScgOiAnJ31gfSByZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXBMb2dpSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdmlwLWxvZ28ucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNjcmwtY29udC1kYXRcIj57aXNfY29ycG9yYXRlP1wiWW91ciBhIERvY3ByaW1lIFZJUCBNZW1iZXJcIjpcIlNhdmUgNzAlIG9uIHlvdXIgZmFtaWx5J3MgbWVkaWNhbCBiaWxsc1wifTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlZhbGlkIHRpbGwge2V4cGlyeURhdGVbMV0gKyAnICcgKyBleHBpcnlEYXRlWzJdICsgJywnICsgJyAnKyBleHBpcnlEYXRlWzNdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsvKiBsYXN0IHNjcmVlbiBkZXNpZ24gKi99XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSB7YGNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpbiAke3RoaXMucHJvcHMuaXNfZ29sZD8nbWQtdG9wLW1yZ24tcm12Jzonc3ViLXBkbmctYWRkJ31gfSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZS1uZXctY29udGFpbmVyIGZvbnQtYW5hbHl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNfZ29sZCAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycyAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5sZW5ndGggPiAwICYmIHByaW1hcnlfdXNlciAmJiBPYmplY3Qua2V5cyhwcmltYXJ5X3VzZXIpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC13aGl0ZS1iZy1jb250YWluZXIgY2FyZC1jb250YWluZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1jYXJkLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImFzc2V0cy9pbWcvd2hpdGViZy5wbmdcIiBhbHQ9XCJHb2xkIEN1c3RvbWVyXCIgY2xhc3NOYW1lPVwic2hhZG93LWltZ1wiLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpcExvZ2lJbWctMiBwZC0xMlwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDcgfX0gc3JjPVwiL2Fzc2V0cy9pbWcvZG9jZ29sZC5wbmdcIiB3aWR0aD1cIjgwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWNhcmQtdXNlciB0ZXh0LXJpZ2h0IHRleHQtd2hpdGUgcGQtMTJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57cHJpbWFyeV91c2VyLmZpcnN0X25hbWV9IHtwcmltYXJ5X3VzZXIubGFzdF9uYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PihQcmltYXJ5KTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyc2hpcC12YWxpZGl0eS1jb2x1bW4gcGQtMTIgdGV4dC1ibGFjayB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Eb2NwcmltZSBHb2xkIE1lbWJlcjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlZhbGlkIHRpbGwgPHN0cm9uZz57ZXhwaXJ5RGF0ZVsxXSArICcgJyArIGV4cGlyeURhdGVbMl0gKyAnLCcgKyAnICcgKyBleHBpcnlEYXRlWzNdfSA8L3N0cm9uZz48L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLmlzX21lbWJlcl9hbGxvd2VkICYmICFpc19jb3Jwb3JhdGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtgJHt0aGlzLnByb3BzLmlzX2dvbGQ/J2dvbGQtd2hpdGUtYmctY29udGFpbmVyIG1iLTI0JzonJ31gfSBzdHlsZT17eyBwYWRkaW5nVG9wOiAwLCBwYWRkaW5nQm90dG9tOiAyMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtYWN0LXBvcCB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXdybi1pbWcgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy90aWNraWNvbi5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC13cm4tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+WW91ciBzdWJzY3JpcHRpb24gaXMgbm93IGFjdGl2ZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzICYmIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmxlbmd0aCA+IDAgJiYgdGhpcy5wcm9wcy52aXBfY2x1Yl9kYl9kYXRhLmRhdGEucGxhbiAmJiB0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS5wbGFuLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7YFlvdSBjYW4gYWRkIHRoZSByZW1haW5pbmcgJHt0aGlzLnByb3BzLnZpcF9jbHViX2RiX2RhdGEuZGF0YS5wbGFuWzBdLnRvdGFsX2FsbG93ZWRfbWVtYmVycyAtIHRoaXMucHJvcHMudmlwX2NsdWJfZGJfZGF0YS5kYXRhLnVzZXIucGx1c19tZW1iZXJzLmxlbmd0aH0gbWVtYmVycyBhbnl0aW1lIHVudGlsIHRoZSBleHBpcnkgZGF0ZS5gfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuQWRkTWVtYmVyRGV0YWlscy5iaW5kKHRoaXMpfT5BZGQgbWVtYmVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5pc19nb2xkICYmIHRoaXMucHJvcHMuZGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRhdGEpLmxlbmd0aCA+IDAgICYmIGlzX2NvcnBvcmF0ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtYWNudC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5WSVAgQmVuZWZpdHM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgcC0xMiBtYi0yNCBwZC1yLTAgcGQtbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtYmVuaWZpLWNhcmRzLWNvbnQgdmlwLWNsdWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtYmVuaWZpLWNhcmRzIG1yLWItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NlYXJjaFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG8oXCIvc2VhcmNoXCIsICdvcGQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ2wxLnBuZyd9IC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci10LTVcIj5Cb29rIDxici8+IERvY3RvcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWJlbmlmaS1jYXJkcyBtci1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NlYXJjaFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3NlYXJjaFwiLCAnbGFiJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ2wyLnBuZyd9IC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci10LTVcIj5Cb29rIExhYiA8YnIvPiBUZXN0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iZW5pZmktY2FyZHMgbXItYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5tZWRsaWZlLmNvbS9hcHAvP2Jhbm5lcl91cmw9aHR0cHM6Ly9tZWRpYS5tZWRsaWZlLmNvbS9QVFIvZG9jcHJpbWUuanBnIy9yb290L2xvZ2luL0xvZ2luTGFuZGluZ09sZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9tZWRsaWZlLW1lZC5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLXQtNVwiPk9yZGVyIDxici8+IE1lZGljaW5lczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmlzX2dvbGQgJiYgdGhpcy5wcm9wcy5kYXRhLnBsYW4gJiYgdGhpcy5wcm9wcy5kYXRhLnBsYW4ubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLmRhdGEucGxhblswXS51dGlsaXplICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YS5wbGFuWzBdLnV0aWxpemUpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1kc2gtbWFpbi1jb250IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1hY250LWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PllvdXIgQWNjb3VudDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdXNlci9hcHBvaW50bWVudHMnKX0+VmlldyBBcHBvaW50bWVudHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2Mtb25sbi1jbnNsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1jbnNsdC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidmlwLWJyZGVyLWhkbmdcIj5Jbi1DbGluaWMgQ29uc3VsdGF0aW9uPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VG90YWwgTGltaXQ6IDxzcGFuPuKCuXt0aGlzLnByb3BzLmRhdGEucGxhblswXS51dGlsaXplLmRvY3Rvcl9jb25zdWx0X2Ftb3VudCA+PSA5OTk5OT8nVW5saW1pdGVkJzp0aGlzLnByb3BzLmRhdGEucGxhblswXS51dGlsaXplLmRvY3Rvcl9jb25zdWx0X2Ftb3VudH0gIDwvc3Bhbj48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VXRpbGl6ZWQ6IDxzcGFuPuKCuXt0aGlzLnByb3BzLmRhdGEucGxhblswXS51dGlsaXplLmRvY3Rvcl9hbW91bnRfdXRpbGl6ZWR9IDwvc3Bhbj48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLnBsYW5bMF0udXRpbGl6ZS5kb2N0b3JfYW1vdW50X2F2YWlsYWJsZSA8PTk5OTk5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QXZhaWxhYmxlOiA8c3BhbiBjbGFzc05hbWU9XCJ2aXAtY3JkLWF2bC1ncm5cIj7igrl7dGhpcy5wcm9wcy5kYXRhLnBsYW5bMF0udXRpbGl6ZS5kb2N0b3JfYW1vdW50X2F2YWlsYWJsZX08L3NwYW4+PC9wPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc19jb3Jwb3JhdGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1jbnNsdC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInZpcC1icmRlci1oZG5nXCI+TGFiIFRlc3RzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48cD5Ub3RhbCBMaW1pdDogPHNwYW4+4oK5e3RoaXMucHJvcHMuZGF0YS5wbGFuWzBdLnV0aWxpemUuYXZhaWxhYmxlX2xhYnRlc3RfYW1vdW50ID49IDk5OTk5PydVbmxpbWl0ZWQnOnRoaXMucHJvcHMuZGF0YS5wbGFuWzBdLnV0aWxpemUuYXZhaWxhYmxlX2xhYnRlc3RfYW1vdW50fSAgPC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+VXRpbGl6ZWQ6IDxzcGFuPuKCuXt0aGlzLnByb3BzLmRhdGEucGxhblswXS51dGlsaXplLmxhYl9hbW91bnRfdXRpbGl6ZWR9IDwvc3Bhbj48L3A+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5wbGFuWzBdLnV0aWxpemUuYXZhaWxhYmxlX2xhYnRlc3RfYW1vdW50IDw9OTk5OTk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHA+QXZhaWxhYmxlOiA8c3BhbiBjbGFzc05hbWU9XCJ2aXAtY3JkLWF2bC1ncm5cIj7igrl7dGhpcy5wcm9wcy5kYXRhLnBsYW5bMF0udXRpbGl6ZS5hdmFpbGFibGVfbGFidGVzdF9hbW91bnR9PC9zcGFuPjwvcD48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1jbnNsdC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInZpcC1icmRlci1oZG5nXCI+RG9jcHJpbWUgQ2FyZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmlwLXVuLW1lbVwiPlVubGltaXRlZCBvbmxpbmUgY29uc3VsdCBmb3IgOCBtZW1iZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZpcC1jbnNsLWFjdFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtY2hrLnN2Zyd9IC8+QWN0aXZhdGVkIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aXAtY3JkLWJ0blwiPkNoYXQgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNfY29ycG9yYXRlPycnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInZpcC1icmRlci1oZG5nXCI+RnVsbCBCb2R5IEhlYWx0aCBQYWNrYWdlPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtc2JzLWNyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1zYnMtY3JkLWxmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkluY2x1ZGVzIHt0aGlzLnByb3BzLmRhdGEucGxhblswXS53b3J0aC50b3RhbF90ZXN0X2NvdmVyZWRfaW5fcGFja2FnZX0gVGVzdHMsIGNhbiBiZSB1c2VkIGJ5IHt0aGlzLnByb3BzLmRhdGEucGxhblswXS53b3J0aC5tZW1iZXJzX2NvdmVyZWRfaW5fcGFja2FnZX0gbWVtYmVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtc2JzLWNyZC1yZ3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJybW5nLXBudFwiPnt0aGlzLnByb3BzLmRhdGEucGxhblswXS51dGlsaXplLmF2YWlsYWJsZV9wYWNrYWdlX2NvdW50fSA8c3Bhbj5yZW1haW5pbmcgPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInZpcC1idG4tc2JzXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaHBhY2thZ2VzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3ZpcFBhY2thZ2VDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ZpcC1wYWNrYWdlLWNsaWNrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+Qm9vayBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLmlzX2dvbGQgJiYgIWlzX2NvcnBvcmF0ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1vZmZlci1jYXJkcyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ2aXAtYnJkZXItaGRuZ1wiPlRheCBCZW5lZml0PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmQtbGZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVuZGVyIFNlY3Rpb24gODBEPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmQtcmd0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2aXAtYnRuLXNic1wiPkRvd25sb2FkIEludm9pY2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc19nb2xkICYmIHRoaXMucHJvcHMuZGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLmRhdGEpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgcC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ29sZC1jbXBsdC1mcnN0XCI+WW91IFNhdmVkIDxzcGFuPuKCuXt0aGlzLnByb3BzLmRhdGEudG90YWxfdmlwX2Ftb3VudH08L3NwYW4+IHRpbGwgbm93PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ29sZC1jbXBsdC1zZWNvbmRcIj5Ub3RhbCBHb2xkIGFwcG9pbnRtZW50cyB0aWxsIG5vdyA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsZC1jbXBsdC1sc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnb2xkLWNtcGx0LWZyc3RcIj48c3Bhbj57dGhpcy5wcm9wcy5kYXRhLmxhYl9hcHBvaW50bWVudF9jb3VudH08L3NwYW4+IExhYjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnb2xkLWNtcGx0LWZyc3RcIj48c3Bhbj57dGhpcy5wcm9wcy5kYXRhLm9wZF9hcHBvaW50bWVudF9jb3VudH08L3NwYW4+IERvY3RvcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09IGdvbGQgYmVuaWZpdHMgID09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzX2dvbGQgJiYgdGhpcy5wcm9wcy5kYXRhICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YSkubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtb2ZmZXItY2FyZHMgcC0xMiBtYi0yNCBwZC1yLTAgcGQtbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29sZC1iZW5pZmktY2FyZHMtY29udCB2aXAtY2x1YlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWJlbmlmaS1jYXJkcyBtci1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NlYXJjaFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3NlYXJjaFwiLCAnb3BkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ2wxLnBuZyd9IC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLXQtNVwiPkJvb2sgPGJyLz4gRG9jdG9yczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWJlbmlmaS1jYXJkcyBtci1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvc2VhcmNoXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvKFwiL3NlYXJjaFwiLCAnbGFiJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nbDIucG5nJ30gLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItdC01XCI+Qm9vayBMYWIgPGJyLz4gVGVzdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLWJlbmlmaS1jYXJkcyBtci1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubWVkbGlmZS5jb20vYXBwLz9iYW5uZXJfdXJsPWh0dHBzOi8vbWVkaWEubWVkbGlmZS5jb20vUFRSL2RvY3ByaW1lLmpwZyMvcm9vdC9sb2dpbi9Mb2dpbkxhbmRpbmdPbGRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9tZWRsaWZlLW1lZC5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci10LTVcIj5PcmRlciA8YnIvPiBNZWRpY2luZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKip2aXAgZGlzY291bnQgZGFzaGJvYXJkKiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtZGlzY291bnQtY29sIHAtMTIgbWItMjQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJnLWNpcmNsZS1pbWdcIiBzcmM9XCIvYXNzZXRzL2ltZy9jaXJjbGUtYmcucG5nXCIgYWx0PVwiY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyLWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GbGF0IDIzJSBPRkYgPGJyIC8+IDxzcGFuPm9uIG1lZGljaW5lczwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTEyXCI+PGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vbWVkaWEvZGlhZ25vc3RpYy9jb21tb25fcGFja2FnZV9pY29ucy9tZWRsaWZlX2hEUXhpbEoucG5nXCIgYWx0PVwiTWVkbGlmZVwiIC8+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0Yy1hcHBseSBwZC1yLTBcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpfT5UJmFtcDtDIEFwcGx5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY291bnQtY291cGFuLWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXBhbi1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Vc2UgY291cG9uOiA8c3Bhbj5ET0NQUklNRTwvc3Bhbj48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1ub25lXCIgb25DbGljaz17dGhpcy5jb3B5VGV4dC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGE+PGltZyBzcmM9XCJcIiBhbHQ9XCJjb3B5XCIgLz48L2E+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvY29weS5zdmdcIiBhbHQ9XCJjb3B5XCIgaGVpZ2h0PVwiMThweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGFwIHRvIGNvcHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7IG9wYWNpdHk6IDAgfX0gaWQ9XCJteUlucHV0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIkRPQ1BSSU1FXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vYml0Lmx5LzJ2SExwbVdcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJvcmRlci1ub3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk9yZGVyIG1lZGljaW5lIG5vdzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJib3JkZXItY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS51c2VyICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YS51c2VyKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuZGF0YS51c2VyLnBsdXNfbWVtYmVycyAmJiB0aGlzLnByb3BzLmRhdGEudXNlci5wbHVzX21lbWJlcnMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLW9mZmVyLWNhcmRzIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlwLXNicy1jcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidmlwLWJyZGVyLWhkbmdcIj5NZW1iZXJzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1hY2NvcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ2aXAtYWNyLWxzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS51c2VyLnBsdXNfbWVtYmVycy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG9uQ2xpY2s9e3RoaXMuQnV0dG9uSGFuZGxlci5iaW5kKHRoaXMsIGtleSl9IGNsYXNzTmFtZT1cInZpcC1hY3JkLWhkbmdcIj48c3Bhbj57dmFsLmZpcnN0X25hbWV9IHt2YWwubGFzdF9uYW1lfSA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsLnJlbGF0aW9uID09ICdTRUxGJyA/IDxiPihQcmltYXJ5KTwvYj4gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48aW1nIGNsYXNzTmFtZT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YGFjZG4tYXJyb3cgICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZihrZXkpID4gLTEgPyAnJyA6ICdhY2RuLWFycm93LXVwJ31gfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B2aXAtc24tdGJsICR7dGhpcy5zdGF0ZS50YWJzVmFsdWUuaW5kZXhPZihrZXkpID4gLTEgPyAnZC1ub25lJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ2aXAtYWNyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVsYXRpb25zaGlwPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+R2VuZGVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RE9CPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt2YWwucmVsYXRpb259PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgJ3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScgfX0gPnt2YWwudGl0bGUgPT0gJ21yLicgPyAnbScgOiB2YWwuZ2VuZGVyID09ICdtJz8nbSc6ICdmJ308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dmFsLmRvYn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEuaXNfbWVtYmVyX2FsbG93ZWQgJiYgIWlzX2NvcnBvcmF0ZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuQWRkTWVtYmVyRGV0YWlscy5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ2aXAtYWNyZC1hZGQtbWVtYmVyXCI+PGltZyBjbGFzc05hbWU9XCJ2aXAtYWRkLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLW1lbS5zdmcnfSAvPkFkZCBNZW1iZXJzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtY29udGFjdCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXAtc2JzLWNyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidmlwLWJyZGVyLWhkbmdcIj5Db250YWN0IFN1cHBvcnQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpcC1jb2N0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5lZWQgaGVscCB3aXRoIGJvb2tpbmc/IDxzcGFuPkNhbGwgdXMgYXQgMTgwMC0xMjMtOTQxOTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IYXZlIGEgcXVlcnk/IDxzcGFuPkVtYWlsIHVzIGF0IGN1c3RvbWVyY2FyZUBkb2NwcmltZS5jb208L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhICYmIHRoaXMucHJvcHMuZGF0YS5wbHVzX3ZpYV9zYmk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgc3RpY2t5LWJ0biBwLTAgdi1idG4gIGJ0bi1sZyBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIGJ1dHRvbnMtYWRkY2FydC1jb250YWluZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2LWJ0bi1wcmltYXJ5IGJvb2stYnRuLW1yZ24tYWRqdXN0IFwiIG9uQ2xpY2s9eygpPT57dGhpcy5uYXZpZ2F0ZVRvU0JJKCl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrIFRvIFNCSUcgSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3Blbk1lZGxpZmVUbkMgPyA8VmlwVG5DIHByb3BzPXt0aGlzLnByb3BzfSB0b2dnbGU9e3RoaXMuY2xvc2VUbmNQb3B1cC5iaW5kKHRoaXMpfSBpc19pbnN1cmFuY2VfYXBwbGljYWJsZT17ZmFsc2V9Lz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RGlzY2xhaW1lciBpc1ZpcD17dHJ1ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlwQ2x1YiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRvZ2dsZSxwcm9wcyxpc19pbnN1cmFuY2VfYXBwbGljYWJsZSB9KSA9PiB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4XCIgb25DbGljaz17dG9nZ2xlfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXAgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0bmMtaGVhZGVyIHRleHQtY2VudGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+VGVybXMgJmFtcDsgQ29uZGl0aW9uczwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0bmMtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTI0XCI+PHN0cm9uZz5NZWRsaWZlIFRuQzwvc3Ryb25nPjwvaDM+XG4gICAgICAgICAgICAgICAgPGg1PjxzdHJvbmc+T2ZmZXIgVGVybXM6PC9zdHJvbmc+PC9oNT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwib2ZmZXItdGVybXMtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5TYXZlIDIzJSBvbiBhbGwgcHJlc2NyaWJlZCBtZWRpY2luZXMgZXhjbHVzaXZlbHkgZm9yIDxzdHJvbmc+RG9jcHJpbWUgR29sZCAvIFZJUCB1c2Vyczwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5ObyBtaW5pbXVtIG9yZGVyIHZhbHVlIHJlcXVpcmVkIHRvIGF2YWlsIGRpc2NvdW50LjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5WaXNpdCA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWVkbGlmZS5jb20vXCI+TWVkbGlmZS5jb208L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBwcmVzY3JpcHRpb24gJmFtcDsgc2VsZWN0IG1lZGljaW5lcy48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+RW50ZXIgcHJvbW8gaW4gdGhlIG9yZGVyIGNoZWNrb3V0IHBhZ2UuIENvbXBsZXRlIHBheW1lbnQgdmlhIGFueSBtb2RlLiAqKlByb21vIG5vdCBhcHBsaWNhYmxlIG9uIE9UQyBwcm9kdWN0czwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aDU+PHN0cm9uZz5UJmFtcDtDIFBoYXJtYWN5OiA8L3N0cm9uZz48L2g1PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJvZmZlci10ZXJtcy1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPk9mZmVyIFZhbGlkIG9uIFByZXNjcmlwdGlvbiBEcnVnczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5Qcm9tbyBjb2RlIGNhbiBiZSB1c2VkIE11bHRpcGxlIHRpbWVzIGR1cmluZyB0aGUgb2ZmZXIgcGVyaW9kLiBDdXN0b21lcnMgY2FuIGF2YWlsIHRoaXMgcHJvbW8gY29kZSBieSBjYWxsaW5nIGN1c3RvbWVyIHN1cHBvcnQgKDE4NjAtMTIzNC0xMjM0KSBvciBieSBib29raW5nIG9ubGluZSB0aHJvdWdoIGxhbmRpbmcgcGFnZSBsaW5rLiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EaXNjb3VudCBvbiBTZWxlY3RlZCBQcm9kdWN0czogRGlzY291bnRzIHByb3ZpZGVkIG9uIHRoZSB3ZWJzaXRlL21vYmlsZSBhcHBsaWNhdGlvbiBhcmUgb24gc2VsZWN0ZWQgcHJvZHVjdHMuIERpc2NvdW50cyBhcmUgbm90IGFwcGxpY2FibGUgb24gdGhlIGZvbGxvd2luZyBwcm9kdWN0cyBhbmQgb24gYW55IHByb2R1Y3RzIHNvIG1lbnRpb25lZCBlbHNld2hlcmUgb24gdGhlIHdlYnNpdGUvbW9iaWxlIGFwcGxpY2F0aW9uOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGlsZC1saXN0LWl0ZW0gcGQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWxsIEJhYnkgZm9vZHMgdml6IENlcmFsYWMsIExhY3RvZ2VuLCBOYW5wcm8gZXRjLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFsbCBIZWFsdGggU3VwcGxlbWVudHMgdml6IFBlZGlhc3VyZSwgUHJvdGVpbmV4LCBQcm90ZWludWxlcywgVGhyZXB0aW4gZXRjPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T3ZlciB0aGUgY291bnRlciAoT1RDKSBwcm9kdWN0cyDigJMgQmVuYWRyeWwgQ291Z2ggU3lydXAsIENyb2NpbiwgU2FyaWRvbiwgYWxsIERldHRvbCwgU2F2bG9uIHByb2R1Y3RzLCBtZWRpY2F0ZWQgc29hcHMgZXRjLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFsbCBDb3NtZXRpYyBwcm9kdWN0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+T2ZmZXIgVmFsaWRpdHkg4oCTIDEgeWVhciA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgZ2V0SW5zdXJhbmNlLCBzZWxlY3RJbnN1cmFuY2VQbGFuICwgc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnMscmVzZXRTZWxlY3RlZEluc3VyYW5jZU1lbWJlcnMscmVzZXRTZWxlY3RlZFBsYW5zLHNlbmRPVFAsIHN1Ym1pdE9UUCwgcmVzZXRBdXRoLCBnZXRVc2VyUHJvZmlsZSwgdXNlckRhdGEsIGdlbmVyYXRlSW5zdXJhbmNlTGVhZCwgdXJsU2hvcnRuZXIsXG5cblxuc2VsZWN0VmlwQ2x1YlBsYW4sIGdldFZpcERhc2hib2FyZExpc3QsIHJlc2V0VmlwRGF0YSwgc2VsZWN0U2VhcmNoVHlwZVxuIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBWaXBDbHViVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpcENsdWIvdmlwQ2x1YkFjdGl2YXRlc1ZpZXcuanMnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uL2hlbHBlcnMvZ3RtJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuY2xhc3MgVmlwQ2x1YkFjdGl2YXRlZERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBkYXRhOm51bGwsXG4gICAgICAgICAgICBpc19nb2xkOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKCkgLy8gdG8gZ2V0IGxvZ2dlZEluIHVzZXIgcHJvZmlsZVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XG4gICAgICAgIGxldCBwcmltYXJ5X21lbWJlcl9pZCA9IG51bGxcbiAgICAgICAgdmFyIG1lbWJlcl9saXN0X2lkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcbiAgICAgICAgaWYgKG1lbWJlcl9saXN0X2lkICE9PSBudWxsKSB7IC8vIGluIGNhc2UgYWZ0ZXIgc3VjY2Vzc2Z1bGwgcGF5bWVudC5cbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRWaXBEYXRhKCkgLy8gdG8gc2V0IHZpcCBvciBnb2xkIHNvdHJlIHRvIGluaXRpYWwgc3RhdGVcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VmlwRGFzaGJvYXJkTGlzdChtZW1iZXJfbGlzdF9pZCxmYWxzZSwocmVzcCk9PnsgLy8gdG8gcmV0cml2ZSB2aXAgb3IgZ29sZCBkYXNoYm9hcmQgZGF0YVxuICAgICAgICAgICAgICAgIGlmKHJlc3AgJiYgT2JqZWN0LmtleXMocmVzcC5kYXRhKS5sZW5ndGggPjApe1xuICAgICAgICAgICAgICAgICAgICBpZihyZXNwLmRhdGEudXNlciAmJiBPYmplY3Qua2V5cyhyZXNwLmRhdGEudXNlcikubGVuZ3RoID4gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeV9tZW1iZXJfaWQgPSAgIHJlc3AuZGF0YS51c2VyLnVzZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3ZpcGJvb2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ZpcGJvb2tlZCcsICd1c2VyX2lkJzogcHJpbWFyeV9tZW1iZXJfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6cmVzcC5kYXRhLGlzX2dvbGQ6cmVzcC5kYXRhLnBsYW5bMF0uaXNfZ29sZH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0VmlwRGF0YSgpIC8vIHRvIHNldCB2aXAgb3IgZ29sZCBzb3RyZSB0byBpbml0aWFsIHN0YXRlXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFZpcERhc2hib2FyZExpc3QobWVtYmVyX2xpc3RfaWQsdHJ1ZSwocmVzcCk9PnsgLy8gdG8gcmV0cml2ZSB2aXAgb3IgZ29sZCBkYXNoYm9hcmQgZGF0YVxuICAgICAgICAgICAgICAgIGlmKHJlc3AgJiYgT2JqZWN0LmtleXMocmVzcC5kYXRhKS5sZW5ndGggPjApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOnJlc3AuZGF0YSxpc19nb2xkOnJlc3AuZGF0YS5wbGFuWzBdLmlzX2dvbGR9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5MT0FEX1ZJUF9DTFVCX0RBU0hCT0FSRCAmJiB0aGlzLnN0YXRlLmRhdGEpe1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxWaXBDbHViVmlldyB7Li4udGhpcy5wcm9wc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBpc19nb2xkPXt0aGlzLnN0YXRlLmlzX2dvbGR9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyBMT0FEX1ZJUF9DTFVCLCB2aXBDbHViTGlzdCwgc2VsZWN0ZWRfdmlwX3BsYW4sIExPQURfVklQX0NMVUJfREFTSEJPQVJELCB2aXBfY2x1Yl9kYl9kYXRhIH0gPSBzdGF0ZS5WSVBDTFVCXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uXG5cbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuICAgIHJldHVybiB7XG4gICAgICAgVVNFUiwgc2VsZWN0ZWRMb2NhdGlvbixMT0FEX1ZJUF9DTFVCLCB2aXBDbHViTGlzdCwgc2VsZWN0ZWRfdmlwX3BsYW4sIHZpcF9jbHViX2RiX2RhdGEsIExPQURfVklQX0NMVUJfREFTSEJPQVJEXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXNldFZpcERhdGE6KCkgPT4gZGlzcGF0Y2gocmVzZXRWaXBEYXRhKCkpLFxuICAgICAgICBzZWxlY3RWaXBDbHViUGxhbjogKHBsYW4sY3JpdGVyaWEsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChzZWxlY3RWaXBDbHViUGxhbihwbGFuLGNyaXRlcmlhLCBjYWxsYmFjaykpLFxuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIGdldEluc3VyYW5jZTogKGlzX2VuZG9yc2VtZW50LGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRJbnN1cmFuY2UoaXNfZW5kb3JzZW1lbnQsY2FsbGJhY2spKSwgXG4gICAgICAgIGdldFZpcERhc2hib2FyZExpc3Q6KHVzZXJfaWQsaXNfZGFzaGJvYXJkLGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXRWaXBEYXNoYm9hcmRMaXN0KHVzZXJfaWQsaXNfZGFzaGJvYXJkLGNhbGxiYWNrKSksICAgICAgIFxuXG4gICAgICAgIHNlbGVjdEluc3VyYW5jZVBsYW46IChwbGFuLGNyaXRlcmlhKSA9PiBkaXNwYXRjaChzZWxlY3RJbnN1cmFuY2VQbGFuKHBsYW4sY3JpdGVyaWEpKSxcbiAgICAgICAgLy8gc2F2ZUN1cnJlbnRTZWxlY3RlZE1lbWJlcnM6IChtZW1iZXJzSWQpID0+IGRpc3BhdGNoKHNhdmVDdXJyZW50U2VsZWN0ZWRNZW1iZXJzKG1lbWJlcnNJZCkpLFxuICAgICAgICByZXNldFNlbGVjdGVkUGxhbnM6ICgpID0+IGRpc3BhdGNoKHJlc2V0U2VsZWN0ZWRQbGFucygpKSxcbiAgICAgICAgc2VuZE9UUDogKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikgPT4gZGlzcGF0Y2goc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpKSxcbiAgICAgICAgc3VibWl0T1RQOiAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zRGF0YSxjYikgPT4gZGlzcGF0Y2goc3VibWl0T1RQKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsY2IpKSxcbiAgICAgICAgcmVzZXRBdXRoOiAoKSA9PiBkaXNwYXRjaChyZXNldEF1dGgoKSksXG4gICAgICAgIHVzZXJEYXRhIDooc2VsZl9kYXRhLGNyaXRlcmlhLGZvcmNlYWRkKSA9PiBkaXNwYXRjaCh1c2VyRGF0YShzZWxmX2RhdGEsY3JpdGVyaWEsZm9yY2VhZGQpKSxcbiAgICAgICAgZ2VuZXJhdGVJbnN1cmFuY2VMZWFkOihzZWxlY3RlZFBsYW4sbnVtYmVyLGxlYWRfZGF0YSxjYikgPT4gZGlzcGF0Y2goZ2VuZXJhdGVJbnN1cmFuY2VMZWFkKHNlbGVjdGVkUGxhbixudW1iZXIsbGVhZF9kYXRhLGNiKSksXG4gICAgICAgIHVybFNob3J0bmVyOiAodXJsLCBjYikgPT4gZGlzcGF0Y2godXJsU2hvcnRuZXIodXJsLCBjYikpLFxuICAgICAgICBzZWxlY3RTZWFyY2hUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0U2VhcmNoVHlwZSh0eXBlKSksXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMgLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZpcENsdWJBY3RpdmF0ZWREZXRhaWxzKSIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9