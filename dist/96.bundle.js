(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

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

/***/ "./dev/js/components/commons/primeCare/primeCareBookingView.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/primeCare/primeCareBookingView.js ***!
  \*********************************************************************/
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

var _LeftBar = __webpack_require__(/*! ../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _paymentForm = __webpack_require__(/*! ../paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

var _staticDisclaimer = __webpack_require__(/*! ../Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var PrimeCareBookingView = function (_React$Component) {
    _inherits(PrimeCareBookingView, _React$Component);

    function PrimeCareBookingView(props) {
        _classCallCheck(this, PrimeCareBookingView);

        var _this = _possibleConstructorReturn(this, (PrimeCareBookingView.__proto__ || Object.getPrototypeOf(PrimeCareBookingView)).call(this, props));

        _this.state = {
            name: '',
            phoneNumber: '',
            gender: '',
            email: '',
            profileDataFilled: true,
            paymentData: null
        };
        return _this;
    }

    _createClass(PrimeCareBookingView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'proceed',
        value: function proceed() {
            var _this2 = this;

            var parsed = queryString.parse(this.props.location.search);
            var member_profile = null;
            var selectedPlan = {};
            var self = this;
            selectedPlan.plan = parseInt(parsed.plan_id);
            if (this.props.USER.profiles[this.props.USER.defaultProfile]) {
                member_profile = this.props.USER.profiles[this.props.USER.defaultProfile];
            }
            if (member_profile && member_profile.isDummyUser) {
                var data = this.state;
                if (data.name == '' || data.gender == '' || data.phoneNumber == '' || data.email == '') {
                    this.setState({ profileDataFilled: false });
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please fill the info" });
                    return;
                } else {
                    this.setState({ profileDataFilled: true });
                }
                var profileData = {};
                profileData.name = this.state.name;
                profileData.phoneNumber = this.state.phoneNumber;
                profileData.gender = this.state.gender;
                profileData.email = this.state.email;
                this.props.createProfile(profileData, function (err, res) {
                    self.props.getUserProfile();
                });
                self.props.createCareBooking(selectedPlan, function (resp) {
                    //proceed to payment gate way
                    if (resp.payment_required) {
                        // this.props.history.push(`/payment/${resp.data.orderId}?refs=care`)
                        _this2.processPayment(resp);
                    } else {
                        _this2.props.history.push('/prime/success?user_plan=' + resp.data.id);
                    }
                });
            } else {
                this.props.createCareBooking(selectedPlan, function (resp) {
                    //proceed to payment gate way
                    if (resp.payment_required) {
                        // this.props.history.push(`/payment/${resp.data.orderId}?refs=care`)
                        _this2.processPayment(resp);
                    } else {
                        _this2.props.history.push('/prime/success?user_plan=' + resp.data.id);
                    }
                });
            }
        }
    }, {
        key: 'processPayment',
        value: function processPayment(data) {
            var _this3 = this;

            if (data && data.status) {
                this.setState({ paymentData: data.data }, function () {
                    setTimeout(function () {
                        if (document.getElementById('paymentForm') && Object.keys(_this3.state.paymentData).length > 0) {
                            var form = document.getElementById('paymentForm');
                            form.submit();
                        }
                    }, 500);
                });
            }
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            if (e.target.name == 'phoneNumber') {
                e.target.value.length <= 10 ? e.target.value.length == 10 ? this.setState(_defineProperty({}, e.target.name, e.target.value)) : this.setState(_defineProperty({}, e.target.name, e.target.value)) : '';
            } else {
                this.setState(_defineProperty({}, e.target.name, e.target.value));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this,
                _React$createElement,
                _React$createElement2,
                _React$createElement3;

            var member_profile = null;
            if (this.props.USER.profiles[this.props.USER.defaultProfile]) {
                member_profile = this.props.USER.profiles[this.props.USER.defaultProfile];
            }
            var self = this;
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap', style: { paddingBottom: 54 } },
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
                            { className: 'col-12 center-column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget mrng-top-12 mrb-60' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget-content mrng-top-12 care-widget' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'careMemberContainer' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'careMembrLogo' },
                                                _react2.default.createElement('img', { src: "/assets" + "/img/logoornage.png" })
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'careMembrtxt' },
                                                _react2.default.createElement(
                                                    'h5',
                                                    null,
                                                    'Docprime Care '
                                                ),
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'membership'
                                                )
                                            )
                                        ),
                                        member_profile && member_profile.isDummyUser ? _react2.default.createElement(
                                            'div',
                                            { className: 'widget-content' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'lab-visit-time d-flex jc-spaceb' },
                                                _react2.default.createElement(
                                                    'h4',
                                                    { className: 'title d-flex' },
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        _react2.default.createElement('img', { style: { width: '20px', marginRight: '8px' }, src: "/assets" + "/img/nw-usr.svg" })
                                                    ),
                                                    'Member Detail'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'select-pt-form' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'slt-nw-input' },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { className: 'slt-label', htmlFor: 'male' },
                                                        _react2.default.createElement(
                                                            'sup',
                                                            { className: 'requiredAst' },
                                                            '*'
                                                        ),
                                                        'Name:'
                                                    ),
                                                    _react2.default.createElement('input', { className: 'slt-text-input', style: { 'textTransform': 'capitalize' }, autoComplete: 'none', type: 'text', name: 'name', value: this.state.name, onChange: this.inputHandler.bind(this), placeholder: '' })
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'slt-nw-input radio-mbl' },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { className: 'slt-label', htmlFor: 'male' },
                                                        _react2.default.createElement(
                                                            'sup',
                                                            { className: 'requiredAst' },
                                                            '*'
                                                        ),
                                                        'Gender:'
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'slt-label-radio' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'dtl-radio' },
                                                            _react2.default.createElement(
                                                                'label',
                                                                { className: 'container-radio' },
                                                                'Male',
                                                                _react2.default.createElement('input', (_React$createElement = { type: 'radio', name: 'gender' }, _defineProperty(_React$createElement, 'name', 'gender'), _defineProperty(_React$createElement, 'onClick', function onClick() {
                                                                    return _this4.setState({ 'gender': 'm' });
                                                                }), _React$createElement)),
                                                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'dtl-radio' },
                                                            _react2.default.createElement(
                                                                'label',
                                                                { className: 'container-radio' },
                                                                'Female',
                                                                _react2.default.createElement('input', (_React$createElement2 = { type: 'radio', name: 'gender', value: 'm' }, _defineProperty(_React$createElement2, 'name', 'gender'), _defineProperty(_React$createElement2, 'onClick', function onClick() {
                                                                    return _this4.setState({ 'gender': 'f' });
                                                                }), _React$createElement2)),
                                                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'dtl-radio' },
                                                            _react2.default.createElement(
                                                                'label',
                                                                { className: 'container-radio' },
                                                                'Other',
                                                                _react2.default.createElement('input', (_React$createElement3 = { type: 'radio', name: 'gender' }, _defineProperty(_React$createElement3, 'name', 'gender'), _defineProperty(_React$createElement3, 'onClick', function onClick() {
                                                                    return _this4.setState({ 'gender': 'o' });
                                                                }), _React$createElement3)),
                                                                _react2.default.createElement('span', { className: 'doc-checkmark' })
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'slt-nw-input' },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { className: 'slt-label', htmlFor: 'male' },
                                                        _react2.default.createElement(
                                                            'sup',
                                                            { className: 'requiredAst' },
                                                            '*'
                                                        ),
                                                        'Email:'
                                                    ),
                                                    _react2.default.createElement('input', { className: 'slt-text-input', style: { 'textTransform': 'capitalize' }, autoComplete: 'none', type: 'text', name: 'email', value: this.state.email, onChange: this.inputHandler.bind(this), placeholder: '' })
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'slt-nw-input' },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { className: 'slt-label', htmlFor: 'male' },
                                                        _react2.default.createElement(
                                                            'sup',
                                                            { className: 'requiredAst' },
                                                            '*'
                                                        ),
                                                        'Mobile:'
                                                    ),
                                                    _react2.default.createElement('input', { className: 'slt-text-input', autoComplete: 'none', type: 'number', placeholder: '', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber' })
                                                )
                                            )
                                        ) : member_profile ? _react2.default.createElement(
                                            'div',
                                            { className: 'row no-gutters' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-7' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'carePara' },
                                                    _react2.default.createElement('img', { src: "/assets" + "/img/memsecur.png" }),
                                                    'Valid for :'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-5 text-right' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'careSUbpara' },
                                                    '1 year'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-7' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'carePara' },
                                                    _react2.default.createElement('img', { src: "/assets" + "/img/memuser.png" }),
                                                    'Member Name :'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-5 text-right' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'careSUbpara', style: { 'textTransform': 'capitalize' } },
                                                    member_profile.name
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-7' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'carePara' },
                                                    _react2.default.createElement('img', { src: "/assets" + "/img/memcall.png" }),
                                                    'Mobile no: '
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-5 text-right' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'careSUbpara' },
                                                    member_profile.phone_number
                                                )
                                            )
                                        ) : '',
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'careListingWithSideline' },
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'UlcareListingWithSide' },
                                                this.props.data && this.props.data.length > 0 && this.props.data[0].unlimited_online_consultation ? _react2.default.createElement(
                                                    'li',
                                                    { className: 'careListiLi' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'careListin' },
                                                        'Free Unlimited Online Consultation '
                                                    ),
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        'Our online consultation timings are from 8:00 AM to 5:00 PM'
                                                    )
                                                ) : '',
                                                this.props.data && this.props.data.length > 0 && this.props.data[0].priority_queue ? _react2.default.createElement(
                                                    'li',
                                                    { className: 'careListiLi' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'careListin' },
                                                        'Priority Queue '
                                                    ),
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        'No waiting time!'
                                                    )
                                                ) : '',
                                                this.props.data && this.props.data.length > 0 && this.props.data[0].features.length > 0 ? Object.entries(this.props.data[0].features).map(function (_ref) {
                                                    var _ref2 = _slicedToArray(_ref, 2),
                                                        key = _ref2[0],
                                                        value = _ref2[1];

                                                    if (value.count != null) {
                                                        return _react2.default.createElement(
                                                            'li',
                                                            { key: value.id, className: 'careListiLi' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'careListin' },
                                                                self.props.data[0].feature_details[0].name,
                                                                ' '
                                                            ),
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Memeber can avail this offer ' + (value.count == 2 ? 'twice' : 'once') + ' in a year'
                                                            )
                                                        );
                                                    }
                                                }) : ''
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'button',
                                { onClick: this.proceed.bind(this), className: 'p-3 v-btn v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn' },
                                'Pay Now',
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    this.props.data ? '(\u20B9 ' + parseInt(this.props.data[0].deal_price) + ')' : ''
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(_staticDisclaimer2.default, null),
                this.state.paymentData ? _react2.default.createElement(_paymentForm2.default, { paymentData: this.state.paymentData, refs: 'care' }) : ""
            );
        }
    }]);

    return PrimeCareBookingView;
}(_react2.default.Component);

exports.default = PrimeCareBookingView;

/***/ }),

/***/ "./dev/js/containers/care/primeCareBooking.js":
/*!****************************************************!*\
  !*** ./dev/js/containers/care/primeCareBooking.js ***!
  \****************************************************/
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

var _primeCareBookingView = __webpack_require__(/*! ../../components/commons/primeCare/primeCareBookingView.js */ "./dev/js/components/commons/primeCare/primeCareBookingView.js");

var _primeCareBookingView2 = _interopRequireDefault(_primeCareBookingView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var primeCareBooking = function (_React$Component) {
    _inherits(primeCareBooking, _React$Component);

    function primeCareBooking(props) {
        _classCallCheck(this, primeCareBooking);

        var _this = _possibleConstructorReturn(this, (primeCareBooking.__proto__ || Object.getPrototypeOf(primeCareBooking)).call(this, props));

        _this.state = {
            data: ''
        };
        return _this;
    }

    _createClass(primeCareBooking, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var parsed = queryString.parse(this.props.location.search);

            this.props.getCareDetails(function (resp) {
                // get care plans
                var feature_detail = resp.plans.filter(function (x) {
                    return x.id == parsed.plan_id;
                });
                feature_detail[0].feature_details = resp.feature_details;
                _this2.setState({ data: feature_detail });
            });
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_primeCareBookingView2.default, _extends({}, this.props, { data: this.state.data }));
        }
    }]);

    return primeCareBooking;
}(_react2.default.Component);

primeCareBooking.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;

    return {
        USER: USER
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getCareDetails: function getCareDetails(callback) {
            return dispatch((0, _index.getCareDetails)(callback));
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
        createProfile: function createProfile(postData, cb) {
            return dispatch((0, _index.createProfile)(postData, cb));
        },
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        createCareBooking: function createCareBooking(selectedPlan, cb) {
            return dispatch((0, _index.createCareBooking)(selectedPlan, cb));
        }

    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(primeCareBooking);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3ByaW1lQ2FyZS9wcmltZUNhcmVCb29raW5nVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jYXJlL3ByaW1lQ2FyZUJvb2tpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImlzVmlwIiwiY29sb3IiLCJmb250U2l6ZSIsInBhZGRpbmdCb3R0b20iLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJQcmltZUNhcmVCb29raW5nVmlldyIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwicGhvbmVOdW1iZXIiLCJnZW5kZXIiLCJlbWFpbCIsInByb2ZpbGVEYXRhRmlsbGVkIiwicGF5bWVudERhdGEiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJtZW1iZXJfcHJvZmlsZSIsInNlbGVjdGVkUGxhbiIsInNlbGYiLCJwbGFuIiwicGFyc2VJbnQiLCJwbGFuX2lkIiwiVVNFUiIsInByb2ZpbGVzIiwiZGVmYXVsdFByb2ZpbGUiLCJpc0R1bW15VXNlciIsImRhdGEiLCJzZXRTdGF0ZSIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJwcm9maWxlRGF0YSIsImNyZWF0ZVByb2ZpbGUiLCJlcnIiLCJyZXMiLCJnZXRVc2VyUHJvZmlsZSIsImNyZWF0ZUNhcmVCb29raW5nIiwicmVzcCIsInBheW1lbnRfcmVxdWlyZWQiLCJwcm9jZXNzUGF5bWVudCIsImhpc3RvcnkiLCJwdXNoIiwiaWQiLCJzdGF0dXMiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJmb3JtIiwic3VibWl0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiQVNTRVRTX0JBU0VfVVJMIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImlucHV0SGFuZGxlciIsImJpbmQiLCJwaG9uZV9udW1iZXIiLCJ1bmxpbWl0ZWRfb25saW5lX2NvbnN1bHRhdGlvbiIsInByaW9yaXR5X3F1ZXVlIiwiZmVhdHVyZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwiY291bnQiLCJmZWF0dXJlX2RldGFpbHMiLCJwcm9jZWVkIiwiZGVhbF9wcmljZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJpbWVDYXJlQm9va2luZyIsImdldENhcmVEZXRhaWxzIiwiZmVhdHVyZV9kZXRhaWwiLCJwbGFucyIsImZpbHRlciIsIngiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNhbGxiYWNrIiwic2VuZE9UUCIsIm51bWJlciIsInZpYVNtcyIsInZpYVdoYXRzYXBwIiwibWVzc2FnZV90eXBlIiwiY2IiLCJzdWJtaXRPVFAiLCJvdHAiLCJleHRyYVBhcmFtc0RhdGEiLCJyZXNldEF1dGgiLCJwb3N0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBQ2UsZ0JBQWU7QUFBQSxRQUFaQSxLQUFZLFFBQVpBLEtBQVk7O0FBQzdCLFdBQVE7QUFBQTtBQUFBLFVBQUssNkJBQTBCQSxRQUFNLGtCQUFOLEdBQXlCLEVBQW5ELENBQUw7QUFDTztBQUFBO0FBQUEsY0FBRyxXQUFVLGVBQWIsRUFBNkIsT0FBTyxFQUFFQyxPQUFPLFNBQVQsRUFBb0JDLFVBQVUsRUFBOUIsRUFBcEM7QUFBQTtBQUFBLFNBRFA7QUFFTztBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmLEVBQTRDLE9BQU8sRUFBRUMsZUFBZSxDQUFqQixF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Q3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDRjtBQUNWO0FBQ0Y7QUFDTTtBQUNGO0FBQ0o7QUFDRjtBQUNJO0FBQ0Y7QUFDYztBQUNGO0FBQ1Y7QUFDRjtBQUNjO0FBQ0Y7QUFDSjtBQUNGO0FBQ0kiLCJmaWxlIjoiOTYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgKHsgaXNWaXAgfSkgPT4ge1xuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtgZHNjbG1lci1mdHIgJHtpc1ZpcD8nbWFyZ2luLWJvdHRvbS01NSc6Jyd9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzhhOGE4YScsIGZvbnRTaXplOiAxMCB9fSA+VGhlIFdlYnNpdGUgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgaW4gY2FzZSBvZiBhIG1lZGljYWwgZW1lcmdlbmN5IGFuZC8gb3IgY3JpdGljYWwgY2FyZSBhbmQgdGhlIHVzZXIgc2hvdWxkIGRpcmVjdGx5IGNvbnRhY3QgaGlzLyBoZXIgbWVkaWNhbCBzZXJ2aWNlIHByb3ZpZGVyIGZvciBQaHlzaWNhbCBFeGFtaW5hdGlvbi4gRG9jcHJpbWUgaXMgc29sZWx5IGEgdGVjaG5vbG9neSBwYXJ0bmVyLjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBmb290ZXItbmV3LWNvcHlyZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNSB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lLmNvbSBDb3B5cmlnaHQgJmNvcHk7IDIwMjAuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RE9DUFJJTUUgVEVDSE5PTE9HSUVTIFBSSVZBVEUgTElNSVRFRDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q0lOIDogVTc0OTk5SFIyMDE2UFRDMDY0MzEyPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi4vcGF5bWVudEZvcm0nXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5cbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIFByaW1lQ2FyZUJvb2tpbmdWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiAnJyxcbiAgICAgICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgICAgICBlbWFpbDonJyxcbiAgICAgICAgICAgIHByb2ZpbGVEYXRhRmlsbGVkOiB0cnVlLFxuICAgICAgICAgICAgcGF5bWVudERhdGE6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuICAgIHByb2NlZWQoKXtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBtZW1iZXJfcHJvZmlsZSA9IG51bGxcbiAgICAgICAgbGV0IHNlbGVjdGVkUGxhbiA9e31cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGVjdGVkUGxhbi5wbGFuPSBwYXJzZUludChwYXJzZWQucGxhbl9pZClcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKSB7XG4gICAgICAgICAgICBtZW1iZXJfcHJvZmlsZSA9IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdXG4gICAgICAgIH1cbiAgICAgICAgaWYobWVtYmVyX3Byb2ZpbGUgJiYgbWVtYmVyX3Byb2ZpbGUuaXNEdW1teVVzZXIpe1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlXG4gICAgICAgICAgICBpZiAoZGF0YS5uYW1lID09ICcnIHx8IGRhdGEuZ2VuZGVyID09ICcnIHx8IGRhdGEucGhvbmVOdW1iZXIgPT0gJycgfHwgZGF0YS5lbWFpbCA9PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlRGF0YUZpbGxlZDogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIGZpbGwgdGhlIGluZm9cIiB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9maWxlRGF0YUZpbGxlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHByb2ZpbGVEYXRhPXt9XG4gICAgICAgICAgICBwcm9maWxlRGF0YS5uYW1lID0gdGhpcy5zdGF0ZS5uYW1lXG4gICAgICAgICAgICBwcm9maWxlRGF0YS5waG9uZU51bWJlciA9IHRoaXMuc3RhdGUucGhvbmVOdW1iZXJcbiAgICAgICAgICAgIHByb2ZpbGVEYXRhLmdlbmRlciA9IHRoaXMuc3RhdGUuZ2VuZGVyXG4gICAgICAgICAgICBwcm9maWxlRGF0YS5lbWFpbCA9IHRoaXMuc3RhdGUuZW1haWxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3JlYXRlUHJvZmlsZShwcm9maWxlRGF0YSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2VsZi5wcm9wcy5jcmVhdGVDYXJlQm9va2luZyhzZWxlY3RlZFBsYW4sKHJlc3ApPT57IC8vcHJvY2VlZCB0byBwYXltZW50IGdhdGUgd2F5XG4gICAgICAgICAgICAgICAgaWYocmVzcC5wYXltZW50X3JlcXVpcmVkKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9wYXltZW50LyR7cmVzcC5kYXRhLm9yZGVySWR9P3JlZnM9Y2FyZWApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1BheW1lbnQocmVzcClcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9wcmltZS9zdWNjZXNzP3VzZXJfcGxhbj0nK3Jlc3AuZGF0YS5pZClcbiAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVDYXJlQm9va2luZyhzZWxlY3RlZFBsYW4sKHJlc3ApPT57Ly9wcm9jZWVkIHRvIHBheW1lbnQgZ2F0ZSB3YXlcbiAgICAgICAgICAgICAgICBpZihyZXNwLnBheW1lbnRfcmVxdWlyZWQpe1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3BheW1lbnQvJHtyZXNwLmRhdGEub3JkZXJJZH0/cmVmcz1jYXJlYClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUGF5bWVudChyZXNwKVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ByaW1lL3N1Y2Nlc3M/dXNlcl9wbGFuPScrcmVzcC5kYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgXG4gICAgfVxuXG4gICAgcHJvY2Vzc1BheW1lbnQoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBheW1lbnREYXRhOiBkYXRhLmRhdGEgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpICYmIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUucGF5bWVudERhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW1lbnRGb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sNTAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09ICdwaG9uZU51bWJlcicpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA8PSAxMFxuICAgICAgICAgICAgICAgID8gZS50YXJnZXQudmFsdWUubGVuZ3RoID09IDEwXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBtZW1iZXJfcHJvZmlsZSA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdKSB7XG4gICAgICAgICAgICBtZW1iZXJfcHJvZmlsZSA9IHRoaXMucHJvcHMuVVNFUi5wcm9maWxlc1t0aGlzLnByb3BzLlVTRVIuZGVmYXVsdFByb2ZpbGVdXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogNTQgfX0+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY2VudGVyLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1ybmctdG9wLTEyIG1yYi02MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBtcm5nLXRvcC0xMiBjYXJlLXdpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZU1lbWJlckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVNZW1ickxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbG9nb29ybmFnZS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZU1lbWJydHh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+RG9jcHJpbWUgQ2FyZSA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+bWVtYmVyc2hpcDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcl9wcm9maWxlICYmIG1lbWJlcl9wcm9maWxlLmlzRHVtbXlVc2VyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYi12aXNpdC10aW1lIGQtZmxleCBqYy1zcGFjZWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgZC1mbGV4XCI+PHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JywgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+TWVtYmVyIERldGFpbDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LXB0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsdC1udy1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2x0LWxhYmVsXCIgaHRtbEZvcj1cIm1hbGVcIj48c3VwIGNsYXNzTmFtZT1cInJlcXVpcmVkQXN0XCI+Kjwvc3VwPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNsdC10ZXh0LWlucHV0XCIgc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319IGF1dG9Db21wbGV0ZT1cIm5vbmVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9cGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2x0LW53LWlucHV0IHJhZGlvLW1ibFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2x0LWxhYmVsXCIgaHRtbEZvcj1cIm1hbGVcIiA+PHN1cCBjbGFzc05hbWU9XCJyZXF1aXJlZEFzdFwiPio8L3N1cD5HZW5kZXI6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHQtbGFiZWwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPk1hbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJnZW5kZXJcIiBuYW1lPVwiZ2VuZGVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7ICdnZW5kZXInOiAnbScgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJhZGlvXCI+RmVtYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZ2VuZGVyXCIgdmFsdWU9XCJtXCIgbmFtZT1cImdlbmRlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAnZ2VuZGVyJzogJ2YnIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRhaW5lci1yYWRpb1wiPk90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZ2VuZGVyXCIgbmFtZT1cImdlbmRlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAnZ2VuZGVyJzogJ28nIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHQtbnctaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNsdC1sYWJlbFwiIGh0bWxGb3I9XCJtYWxlXCI+PHN1cCBjbGFzc05hbWU9XCJyZXF1aXJlZEFzdFwiPio8L3N1cD5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2x0LXRleHQtaW5wdXRcIiBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0gYXV0b0NvbXBsZXRlPVwibm9uZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfXBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsdC1udy1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2x0LWxhYmVsXCIgaHRtbEZvcj1cIm1hbGVcIj48c3VwIGNsYXNzTmFtZT1cInJlcXVpcmVkQXN0XCI+Kjwvc3VwPk1vYmlsZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2x0LXRleHQtaW5wdXRcIiBhdXRvQ29tcGxldGU9XCJub25lXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiXCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmVOdW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSBuYW1lPVwicGhvbmVOdW1iZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWVtYmVyX3Byb2ZpbGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJlUGFyYVwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbWVtc2VjdXIucG5nXCJ9IC8+VmFsaWQgZm9yIDo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVTVWJwYXJhXCI+MSB5ZWFyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZVBhcmFcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21lbXVzZXIucG5nXCJ9IC8+TWVtYmVyIE5hbWUgOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZVNVYnBhcmFcIiBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0+e21lbWJlcl9wcm9maWxlLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZVBhcmFcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL21lbWNhbGwucG5nXCJ9IC8+TW9iaWxlIG5vOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmVTVWJwYXJhXCI+e21lbWJlcl9wcm9maWxlLnBob25lX251bWJlcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+OicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZUxpc3RpbmdXaXRoU2lkZWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIlVsY2FyZUxpc3RpbmdXaXRoU2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoPjAgJiYgdGhpcy5wcm9wcy5kYXRhWzBdLnVubGltaXRlZF9vbmxpbmVfY29uc3VsdGF0aW9uP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZUxpc3RpTGlcIj48cCBjbGFzc05hbWU9XCJjYXJlTGlzdGluXCI+RnJlZSBVbmxpbWl0ZWQgT25saW5lIENvbnN1bHRhdGlvbiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PdXIgb25saW5lIGNvbnN1bHRhdGlvbiB0aW1pbmdzIGFyZSBmcm9tIDg6MDAgQU0gdG8gNTowMCBQTTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoPjAgJiYgdGhpcy5wcm9wcy5kYXRhWzBdLnByaW9yaXR5X3F1ZXVlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZUxpc3RpTGlcIj48cCBjbGFzc05hbWU9XCJjYXJlTGlzdGluXCI+UHJpb3JpdHkgUXVldWUgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm8gd2FpdGluZyB0aW1lITwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoPjAgJiYgdGhpcy5wcm9wcy5kYXRhWzBdLmZlYXR1cmVzLmxlbmd0aCA+IDA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5kYXRhWzBdLmZlYXR1cmVzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5jb3VudCAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXt2YWx1ZS5pZH0gY2xhc3NOYW1lPVwiY2FyZUxpc3RpTGlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZUxpc3RpblwiPntzZWxmLnByb3BzLmRhdGFbMF0uZmVhdHVyZV9kZXRhaWxzWzBdLm5hbWV9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2BNZW1lYmVyIGNhbiBhdmFpbCB0aGlzIG9mZmVyICR7dmFsdWUuY291bnQgPT0yPyd0d2ljZSc6J29uY2UnfSBpbiBhIHllYXJgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb2NlZWQuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwicC0zIHYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIHRleHQtbGcgc3RpY2t5LWJ0blwiPlBheSBOb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuZGF0YT9gKOKCuSAke3BhcnNlSW50KHRoaXMucHJvcHMuZGF0YVswXS5kZWFsX3ByaWNlKX0pYDonJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxSaWdodEJhciBjbGFzc05hbWU9XCJjb2wtbWQtNSBtYi0zXCIgLz4qL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBheW1lbnREYXRhID8gPFBheW1lbnRGb3JtIHBheW1lbnREYXRhPXt0aGlzLnN0YXRlLnBheW1lbnREYXRhfSByZWZzPSdjYXJlJyAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJpbWVDYXJlQm9va2luZ1ZpZXdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRDYXJlRGV0YWlscywgc3VibWl0T1RQLCBzZW5kT1RQLCByZXNldEF1dGgsIGNyZWF0ZVByb2ZpbGUsIGdldFVzZXJQcm9maWxlLCBjcmVhdGVDYXJlQm9va2luZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBQcmltZUNhcmVCb29raW5nVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvcHJpbWVDYXJlL3ByaW1lQ2FyZUJvb2tpbmdWaWV3LmpzJ1xuXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5jbGFzcyBwcmltZUNhcmVCb29raW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBkYXRhOicnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRDYXJlRGV0YWlscygocmVzcCk9PnsgLy8gZ2V0IGNhcmUgcGxhbnNcbiAgICAgICAgICAgIGxldCBmZWF0dXJlX2RldGFpbCA9IHJlc3AucGxhbnMuZmlsdGVyKHggPT4geC5pZCA9PSBwYXJzZWQucGxhbl9pZClcbiAgICAgICAgICAgIGZlYXR1cmVfZGV0YWlsWzBdLmZlYXR1cmVfZGV0YWlscyA9IHJlc3AuZmVhdHVyZV9kZXRhaWxzXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOmZlYXR1cmVfZGV0YWlsfSlcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJpbWVDYXJlQm9va2luZ1ZpZXcgey4uLnRoaXMucHJvcHN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0vPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcblxuICAgIHJldHVybiB7XG4gICAgICAgIFVTRVJcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldENhcmVEZXRhaWxzOiAoY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldENhcmVEZXRhaWxzKGNhbGxiYWNrKSksXG4gICAgICAgIHNlbmRPVFA6IChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpID0+IGRpc3BhdGNoKHNlbmRPVFAobnVtYmVyLHZpYVNtcyx2aWFXaGF0c2FwcCxtZXNzYWdlX3R5cGUsIGNiKSksXG4gICAgICAgIHN1Ym1pdE9UUDogKG51bWJlciwgb3RwLCBleHRyYVBhcmFtc0RhdGEsIGNiKSA9PiBkaXNwYXRjaChzdWJtaXRPVFAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zRGF0YSwgY2IpKSxcbiAgICAgICAgcmVzZXRBdXRoOiAoKSA9PiBkaXNwYXRjaChyZXNldEF1dGgoKSksXG4gICAgICAgIGNyZWF0ZVByb2ZpbGU6IChwb3N0RGF0YSwgY2IpID0+IGRpc3BhdGNoKGNyZWF0ZVByb2ZpbGUocG9zdERhdGEsIGNiKSksXG4gICAgICAgIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKSxcbiAgICAgICAgY3JlYXRlQ2FyZUJvb2tpbmc6KHNlbGVjdGVkUGxhbiwgY2IpID0+IGRpc3BhdGNoKGNyZWF0ZUNhcmVCb29raW5nKHNlbGVjdGVkUGxhbixjYikpXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShwcmltZUNhcmVCb29raW5nKTtcbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9