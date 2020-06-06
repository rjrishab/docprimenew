(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./dev/js/components/commons/couponSelectionView/couponSelectionView.js":
/*!******************************************************************************!*\
  !*** ./dev/js/components/commons/couponSelectionView/couponSelectionView.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _termsConditions = __webpack_require__(/*! ./termsConditions.js */ "./dev/js/components/commons/couponSelectionView/termsConditions.js");

var _termsConditions2 = _interopRequireDefault(_termsConditions);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _bookingErrorPopUp = __webpack_require__(/*! ../../opd/patientDetails/bookingErrorPopUp */ "./dev/js/components/opd/patientDetails/bookingErrorPopUp.js");

var _bookingErrorPopUp2 = _interopRequireDefault(_bookingErrorPopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var CouponSelectionView = function (_React$Component) {
    _inherits(CouponSelectionView, _React$Component);

    function CouponSelectionView(props) {
        _classCallCheck(this, CouponSelectionView);

        var _this = _possibleConstructorReturn(this, (CouponSelectionView.__proto__ || Object.getPrototypeOf(CouponSelectionView)).call(this, props));

        _this.closeErrorPopup = function () {
            _this.setState({ error: '' });
        };

        _this.state = {
            coupon: '',
            appointmentType: '',
            id: '',
            couponName: '',
            errorMsg: '',
            openTermsConditions: false,
            couponText: "",
            couponTextMessage: "",
            test_ids: null,
            procedures_ids: null,
            clinicId: null,
            deal_price: null,
            cart_item: null,
            error: null
        };
        return _this;
    }

    _createClass(CouponSelectionView, [{
        key: 'toggle',
        value: function toggle(which) {
            var _setState;

            var tnc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            this.setState((_setState = {}, _defineProperty(_setState, which, !this.state[which]), _defineProperty(_setState, 'tnc', tnc), _setState));
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            this.setState({ couponText: e.target.value.toUpperCase() });
        }
    }, {
        key: 'initialSetCoupons',
        value: function initialSetCoupons(props) {
            if (window) {
                window.scrollTo(0, 0);
            }
            var appointmentType = props.match.params.type;
            var id = props.match.params.id;
            var clinicId = props.match.params.cid;
            var parsed = queryString.parse(props.location.search);
            var test_ids = null;
            var procedures_ids = null;
            var deal_price = null;
            var cart_item = parsed.cart_item || null;

            if (parsed.deal_price) {
                deal_price = parseInt(parsed.deal_price);
            }
            if (appointmentType == 'opd') {
                appointmentType = 1;
            } else if (appointmentType == 'lab') {
                appointmentType = 2;
            } else if (appointmentType == 'vip') {
                appointmentType = 3;
            } else {
                appointmentType = '';
            }

            if (appointmentType == 2) {
                if (parsed.test_ids) {
                    test_ids = parsed.test_ids;
                }
                props.getCoupons({
                    productId: 2, lab_id: id, test_ids: test_ids, profile_id: props.selectedProfile, deal_price: deal_price, cart_item: cart_item
                });
            } else if (appointmentType == 3) {
                props.getCoupons({
                    productId: clinicId, gold_plan_id: id, deal_price: deal_price
                });
            } else {
                if (parsed.procedures_ids) {
                    procedures_ids = parsed.procedures_ids;
                }
                props.getCoupons({
                    productId: 1, doctor_id: id, hospital_id: clinicId, profile_id: props.selectedProfile, procedures_ids: procedures_ids, deal_price: deal_price, cart_item: cart_item
                });
            }

            this.setState({ appointmentType: appointmentType, id: id, clinicId: clinicId, test_ids: test_ids, procedures_ids: procedures_ids, deal_price: deal_price, cart_item: cart_item });
        }
    }, {
        key: 'pushGoldData',
        value: function pushGoldData(coupon) {
            var _this2 = this;

            var parsed = queryString.parse(this.props.location.search);
            var gold_push_data = {};
            var param = void 0;
            gold_push_data.plan = this.props.selected_vip_plan;
            gold_push_data.dummy_data_type = 'PLAN_PURCHASE';
            gold_push_data.members = [];
            gold_push_data.coupon_data = [];
            gold_push_data.coupon_data.push(coupon);
            gold_push_data.utm_spo_tags = parsed;
            gold_push_data.coupon_type = this.state.clinicId == 8 ? 'gold' : this.state.clinicId == 11 ? 'vip' : '';
            this.props.currentSelectedVipMembersId.map(function (val, key) {
                if (Object.keys(_this2.props.vipClubMemberDetails).length > 0) {
                    param = _this2.props.vipClubMemberDetails[val[key]];
                    gold_push_data.members.push(param);
                }
            });
            if (_storage2.default.isAgent()) {
                gold_push_data.is_agent = true;
            } else {
                gold_push_data.is_agent = false;
            }
            if (_storage2.default.isAgent() && gold_push_data && Object.keys(gold_push_data).length && gold_push_data.members && gold_push_data.members.length) {
                if (gold_push_data.members.length == 1 && gold_push_data.members[0] == null) {} else {
                    this.props.pushMembersData(gold_push_data);
                }
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.initialSetCoupons(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.selectedProfile != nextProps.selectedProfile) {
                this.initialSetCoupons(nextProps);
            }
        }
    }, {
        key: 'toggleButtons',
        value: function toggleButtons(coupon, e) {
            if (coupon.valid) {
                this.setState({ coupon: coupon.coupon_id, couponName: coupon.code, errorMsg: '' });
                if (this.state.appointmentType == 3) {
                    this.pushGoldData(coupon);
                }
                this.props.applyCoupons(this.state.appointmentType, coupon, coupon.coupon_id, this.state.id, function (success) {});
                this.props.history.go(-1);
            } else {
                // open popup
                this.setState({ error: coupon.invalidating_message });
            }
        }
    }, {
        key: 'applyCoupon',
        value: function applyCoupon() {
            /*if(this.state.coupon){  
                this.props.applyCoupons(this.state.appointmentType, this.state.couponName ,this.state.coupon,this.state.id )
                this.props.history.go(-1)   
            }else{
                this.setState({errorMsg:'Please Select Coupon'})
            }   */
        }
    }, {
        key: 'getDots',
        value: function getDots(no, used) {
            var dots = [];
            for (var i = 1; i <= no; i++) {
                if (i <= used) dots.push(_react2.default.createElement(
                    'li',
                    { key: i, className: 'active' },
                    _react2.default.createElement(
                        'span',
                        { className: 'dot' },
                        i
                    )
                ));else dots.push(_react2.default.createElement(
                    'li',
                    { key: i, className: '' },
                    _react2.default.createElement(
                        'span',
                        { className: 'dot' },
                        i
                    )
                ));
            }
            return dots;
        }
    }, {
        key: 'applyTextCoupon',
        value: function applyTextCoupon(e) {
            var _this3 = this;

            this.setState({ couponTextMessage: "" });
            if (this.state.couponText) {
                var cb = function cb(coupon) {
                    if (coupon && coupon[0] && coupon[0].valid) {
                        _this3.toggleButtons(coupon[0], e);
                    } else {
                        _this3.setState({ couponTextMessage: "Please enter a valid coupon code" });
                    }
                };
                if (this.state.appointmentType == 2) {
                    this.props.getCoupons({
                        productId: 2, lab_id: this.state.id, test_ids: this.state.test_ids, profile_id: this.props.selectedProfile, save_in_store: false, coupon_code: this.state.couponText, deal_price: this.state.deal_price, cb: cb, cart_item: this.state.cart_item
                    });
                } else if (this.state.appointmentType == 3) {
                    this.props.getCoupons({
                        productId: this.state.clinicId, gold_plan_id: this.state.id, deal_price: this.state.deal_price, coupon_code: this.state.couponText, save_in_store: false, cb: cb
                    });
                } else {
                    this.props.getCoupons({
                        productId: 1, doctor_id: this.state.id, hospital_id: this.state.clinicId, profile_id: this.props.selectedProfile, procedures_ids: this.state.procedures_ids, save_in_store: false,
                        coupon_code: this.state.couponText, deal_price: this.state.deal_price, cb: cb, cart_item: this.state.cart_item
                    });
                }
            } else {
                this.setState({ couponTextMessage: "Please enter a coupon code" });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, null),
                _react2.default.createElement(
                    'section',
                    { className: 'container container-top-margin' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row mrng-copn' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column' },
                            _react2.default.createElement(
                                'section',
                                { className: 'dr-profile-screen booking-confirm-screen' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row mrb-20' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrt-10 ct-profile skin-white' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'coupons-list' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'pd-12 select-coupon-heading' },
                                                        'Select Coupon'
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'coupon-search-input' },
                                                        _react2.default.createElement('input', { placeholder: 'Enter Coupon here', style: { textTransform: 'uppercase' }, onChange: this.inputHandler.bind(this), value: this.state.couponText }),
                                                        _react2.default.createElement(
                                                            'button',
                                                            { onClick: this.applyTextCoupon.bind(this) },
                                                            'Apply'
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            { style: { color: 'red' } },
                                                            this.state.couponTextMessage
                                                        )
                                                    ),
                                                    this.props.applicableCoupons.length ? _react2.default.createElement(
                                                        'ul',
                                                        null,
                                                        this.props.applicableCoupons.map(function (coupons, index) {
                                                            return _react2.default.createElement(
                                                                'li',
                                                                { key: index, className: "coupon-style search-list-radio pd-12" },
                                                                _react2.default.createElement('input', { type: 'radio', id: coupons.coupon_id, name: 'radio-group', checked: _this4.state.coupon === coupons.coupon_id, value: coupons.code, onClick: _this4.toggleButtons.bind(_this4, coupons) }),
                                                                _react2.default.createElement(
                                                                    'label',
                                                                    { className: 'fw-700 text-md', htmlFor: coupons.coupon_id },
                                                                    coupons.code
                                                                ),
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'coupon-input col-12' },
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        null,
                                                                        coupons.desc
                                                                    ),
                                                                    coupons.coupon_count > 1 ? _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'coupon-timeline book-confirmed-timeline' },
                                                                        _react2.default.createElement(
                                                                            'p',
                                                                            { className: 'text-sm text-primary' },
                                                                            'can be used ',
                                                                            coupons.coupon_count - coupons.used_count,
                                                                            ' more times'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'ul',
                                                                            { className: 'coupon-inline-list' },
                                                                            _this4.getDots(coupons.coupon_count, coupons.used_count)
                                                                        )
                                                                    ) : "",
                                                                    coupons.tnc ? _react2.default.createElement(
                                                                        'p',
                                                                        { className: 'text-sm text-primary', style: { 'cursor': 'pointer' }, onClick: _this4.toggle.bind(_this4, 'openTermsConditions', coupons.tnc) },
                                                                        'Terms & Conditions'
                                                                    ) : ''
                                                                )
                                                            );
                                                        }),
                                                        this.state.openTermsConditions ? _react2.default.createElement(_termsConditions2.default, { toggle: this.toggle.bind(this, 'openTermsConditions'), tnc: this.state.tnc }) : ""
                                                    ) : _react2.default.createElement(
                                                        'div',
                                                        null,
                                                        _react2.default.createElement(
                                                            'p',
                                                            { className: 'no-coupon' },
                                                            'No coupons available'
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        this.state.error ? _react2.default.createElement(_bookingErrorPopUp2.default, { heading: "Invalid Coupon", message: this.state.error, closeErrorPopup: this.closeErrorPopup }) : ''
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', msgTemplate: 'gold_general_template' })
                    )
                )
            );
        }
    }]);

    return CouponSelectionView;
}(_react2.default.Component);

exports.default = CouponSelectionView;

/***/ }),

/***/ "./dev/js/components/commons/couponSelectionView/index.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/commons/couponSelectionView/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _couponSelectionView = __webpack_require__(/*! ./couponSelectionView */ "./dev/js/components/commons/couponSelectionView/couponSelectionView.js");

var _couponSelectionView2 = _interopRequireDefault(_couponSelectionView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _couponSelectionView2.default;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Terms = function (_React$Component) {
    _inherits(Terms, _React$Component);

    function Terms() {
        _classCallCheck(this, Terms);

        return _possibleConstructorReturn(this, (Terms.__proto__ || Object.getPrototypeOf(Terms)).apply(this, arguments));
    }

    _createClass(Terms, [{
        key: "render",
        value: function render() {

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
    }]);

    return Terms;
}(_react2.default.Component);

exports.default = Terms;

/***/ }),

/***/ "./dev/js/components/opd/patientDetails/bookingErrorPopUp.js":
/*!*******************************************************************!*\
  !*** ./dev/js/components/opd/patientDetails/bookingErrorPopUp.js ***!
  \*******************************************************************/
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

var BookingError = function (_React$Component) {
    _inherits(BookingError, _React$Component);

    function BookingError() {
        _classCallCheck(this, BookingError);

        return _possibleConstructorReturn(this, (BookingError.__proto__ || Object.getPrototypeOf(BookingError)).apply(this, arguments));
    }

    _createClass(BookingError, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "error-msg-pop" },
                _react2.default.createElement("div", { className: "cancel-overlay" }),
                _react2.default.createElement(
                    "div",
                    { className: "popup-error", style: { width: '300px' } },
                    _react2.default.createElement(
                        "div",
                        { className: "error-head" },
                        _react2.default.createElement("img", { className: "errorInfoImg", src: "/assets" + "/img/infoerror.svg" }),
                        "Alert"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "cross-btn" },
                        _react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", alt: "close", onClick: this.props.closeErrorPopup })
                    ),
                    _react2.default.createElement(
                        "p",
                        { className: "error-msg" },
                        this.props.message
                    )
                )
            );
        }
    }]);

    return BookingError;
}(_react2.default.Component);

exports.default = BookingError;

/***/ }),

/***/ "./dev/js/containers/commons/CouponsView.js":
/*!**************************************************!*\
  !*** ./dev/js/containers/commons/CouponsView.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _couponSelectionView = __webpack_require__(/*! ../../components/commons/couponSelectionView */ "./dev/js/components/commons/couponSelectionView/index.js");

var _couponSelectionView2 = _interopRequireDefault(_couponSelectionView);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coupons = function (_React$Component) {
	_inherits(Coupons, _React$Component);

	function Coupons() {
		_classCallCheck(this, Coupons);

		return _possibleConstructorReturn(this, (Coupons.__proto__ || Object.getPrototypeOf(Coupons)).apply(this, arguments));
	}

	_createClass(Coupons, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_couponSelectionView2.default, this.props);
		}
	}]);

	return Coupons;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
	var _state$USER = state.USER,
	    applicableCoupons = _state$USER.applicableCoupons,
	    selectedProfile = _state$USER.selectedProfile,
	    profiles = _state$USER.profiles;
	var selectedSlot = state.DOCTOR_SEARCH.selectedSlot;
	var _state$VIPCLUB = state.VIPCLUB,
	    selected_vip_plan = _state$VIPCLUB.selected_vip_plan,
	    vipClubMemberDetails = _state$VIPCLUB.vipClubMemberDetails,
	    currentSelectedVipMembersId = _state$VIPCLUB.currentSelectedVipMembersId,
	    vipCoupons = _state$VIPCLUB.vipCoupons;


	return {
		applicableCoupons: applicableCoupons,
		selectedSlot: selectedSlot,
		selectedProfile: selectedProfile, profiles: profiles,
		selected_vip_plan: selected_vip_plan, vipClubMemberDetails: vipClubMemberDetails, currentSelectedVipMembersId: currentSelectedVipMembersId, vipCoupons: vipCoupons
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {

	return {
		getCoupons: function getCoupons(data) {
			return dispatch((0, _index.getCoupons)(data));
		},
		applyCoupons: function applyCoupons(productId, couponData, couponId, hospitalId, callback) {
			return dispatch((0, _index.applyCoupons)(productId, couponData, couponId, hospitalId, callback));
		},
		pushMembersData: function pushMembersData(criteria) {
			return dispatch((0, _index.pushMembersData)(criteria));
		}

	};
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Coupons);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NvdXBvblNlbGVjdGlvblZpZXcvY291cG9uU2VsZWN0aW9uVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NvdXBvblNlbGVjdGlvblZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jb3Vwb25TZWxlY3Rpb25WaWV3L3Rlcm1zQ29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvYm9va2luZ0Vycm9yUG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9Db3Vwb25zVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiQ291cG9uU2VsZWN0aW9uVmlldyIsInByb3BzIiwiY2xvc2VFcnJvclBvcHVwIiwic2V0U3RhdGUiLCJlcnJvciIsInN0YXRlIiwiY291cG9uIiwiYXBwb2ludG1lbnRUeXBlIiwiaWQiLCJjb3Vwb25OYW1lIiwiZXJyb3JNc2ciLCJvcGVuVGVybXNDb25kaXRpb25zIiwiY291cG9uVGV4dCIsImNvdXBvblRleHRNZXNzYWdlIiwidGVzdF9pZHMiLCJwcm9jZWR1cmVzX2lkcyIsImNsaW5pY0lkIiwiZGVhbF9wcmljZSIsImNhcnRfaXRlbSIsIndoaWNoIiwidG5jIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9VcHBlckNhc2UiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIm1hdGNoIiwicGFyYW1zIiwidHlwZSIsImNpZCIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJwYXJzZUludCIsImdldENvdXBvbnMiLCJwcm9kdWN0SWQiLCJsYWJfaWQiLCJwcm9maWxlX2lkIiwic2VsZWN0ZWRQcm9maWxlIiwiZ29sZF9wbGFuX2lkIiwiZG9jdG9yX2lkIiwiaG9zcGl0YWxfaWQiLCJnb2xkX3B1c2hfZGF0YSIsInBhcmFtIiwicGxhbiIsInNlbGVjdGVkX3ZpcF9wbGFuIiwiZHVtbXlfZGF0YV90eXBlIiwibWVtYmVycyIsImNvdXBvbl9kYXRhIiwicHVzaCIsInV0bV9zcG9fdGFncyIsImNvdXBvbl90eXBlIiwiY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkIiwibWFwIiwidmFsIiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsInZpcENsdWJNZW1iZXJEZXRhaWxzIiwibGVuZ3RoIiwiU1RPUkFHRSIsImlzQWdlbnQiLCJpc19hZ2VudCIsInB1c2hNZW1iZXJzRGF0YSIsImluaXRpYWxTZXRDb3Vwb25zIiwibmV4dFByb3BzIiwidmFsaWQiLCJjb3Vwb25faWQiLCJjb2RlIiwicHVzaEdvbGREYXRhIiwiYXBwbHlDb3Vwb25zIiwic3VjY2VzcyIsImhpc3RvcnkiLCJnbyIsImludmFsaWRhdGluZ19tZXNzYWdlIiwibm8iLCJ1c2VkIiwiZG90cyIsImkiLCJjYiIsInRvZ2dsZUJ1dHRvbnMiLCJzYXZlX2luX3N0b3JlIiwiY291cG9uX2NvZGUiLCJ0ZXh0VHJhbnNmb3JtIiwiaW5wdXRIYW5kbGVyIiwiYmluZCIsImFwcGx5VGV4dENvdXBvbiIsImNvbG9yIiwiYXBwbGljYWJsZUNvdXBvbnMiLCJjb3Vwb25zIiwiaW5kZXgiLCJkZXNjIiwiY291cG9uX2NvdW50IiwidXNlZF9jb3VudCIsImdldERvdHMiLCJ0b2dnbGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvdXBvblNlbGVjdGlvbiIsIlRlcm1zIiwiX19odG1sIiwiQm9va2luZ0Vycm9yIiwid2lkdGgiLCJBU1NFVFNfQkFTRV9VUkwiLCJtZXNzYWdlIiwiQ291cG9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJwcm9maWxlcyIsInNlbGVjdGVkU2xvdCIsIkRPQ1RPUl9TRUFSQ0giLCJWSVBDTFVCIiwidmlwQ291cG9ucyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZGF0YSIsImNvdXBvbkRhdGEiLCJjb3Vwb25JZCIsImhvc3BpdGFsSWQiLCJjYWxsYmFjayIsImNyaXRlcmlhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFGQSxJQUFNQSxjQUFjQyxtQkFBT0EsQ0FBQywwREFBUixDQUFwQjs7SUFJTUMsbUI7OztBQUNGLGlDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOElBQ1RBLEtBRFM7O0FBQUEsY0FvQm5CQyxlQXBCbUIsR0FvQkQsWUFBTTtBQUNwQixrQkFBS0MsUUFBTCxDQUFjLEVBQUVDLE9BQU8sRUFBVCxFQUFkO0FBQ0gsU0F0QmtCOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxvQkFBUSxFQURDO0FBRVRDLDZCQUFpQixFQUZSO0FBR1RDLGdCQUFJLEVBSEs7QUFJVEMsd0JBQVksRUFKSDtBQUtUQyxzQkFBVSxFQUxEO0FBTVRDLGlDQUFxQixLQU5aO0FBT1RDLHdCQUFZLEVBUEg7QUFRVEMsK0JBQW1CLEVBUlY7QUFTVEMsc0JBQVUsSUFURDtBQVVUQyw0QkFBZ0IsSUFWUDtBQVdUQyxzQkFBVSxJQVhEO0FBWVRDLHdCQUFZLElBWkg7QUFhVEMsdUJBQVcsSUFiRjtBQWNUZCxtQkFBTztBQWRFLFNBQWI7QUFGZTtBQWtCbEI7Ozs7K0JBTU1lLEssRUFBaUI7QUFBQTs7QUFBQSxnQkFBVkMsR0FBVSx1RUFBSixFQUFJOztBQUNwQixpQkFBS2pCLFFBQUwsNkNBQWlCZ0IsS0FBakIsRUFBeUIsQ0FBQyxLQUFLZCxLQUFMLENBQVdjLEtBQVgsQ0FBMUIscUNBQWtEQyxHQUFsRDtBQUNIOzs7cUNBRVlDLEMsRUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNGO0FBQ1Y7QUFDRjtBQUNNO0FBQ0Y7QUFDSjtBQUNGO0FBQ0k7QUFDRjtBQUNjO0FBQ0Y7QUFDVjtBQUNGO0FBQ2M7QUFDRjtBQUNKO0FBQ0Y7QUFDSSIsImZpbGUiOiI4Ny5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uL1JpZ2h0QmFyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgVGVybXNDb25kaXRpb25zIGZyb20gJy4vdGVybXNDb25kaXRpb25zLmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBCb29raW5nRXJyb3IgZnJvbSAnLi4vLi4vb3BkL3BhdGllbnREZXRhaWxzL2Jvb2tpbmdFcnJvclBvcFVwJ1xuXG5jbGFzcyBDb3Vwb25TZWxlY3Rpb25WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvdXBvbjogJycsXG4gICAgICAgICAgICBhcHBvaW50bWVudFR5cGU6ICcnLFxuICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgY291cG9uTmFtZTogJycsXG4gICAgICAgICAgICBlcnJvck1zZzogJycsXG4gICAgICAgICAgICBvcGVuVGVybXNDb25kaXRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgIGNvdXBvblRleHQ6IFwiXCIsXG4gICAgICAgICAgICBjb3Vwb25UZXh0TWVzc2FnZTogXCJcIixcbiAgICAgICAgICAgIHRlc3RfaWRzOiBudWxsLFxuICAgICAgICAgICAgcHJvY2VkdXJlc19pZHM6IG51bGwsXG4gICAgICAgICAgICBjbGluaWNJZDogbnVsbCxcbiAgICAgICAgICAgIGRlYWxfcHJpY2U6IG51bGwsXG4gICAgICAgICAgICBjYXJ0X2l0ZW06IG51bGwsXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VFcnJvclBvcHVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6ICcnIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlKHdoaWNoLCB0bmMgPSAnJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW3doaWNoXTogIXRoaXMuc3RhdGVbd2hpY2hdLCB0bmM6IHRuYyB9KVxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vwb25UZXh0OiBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpIH0pXG4gICAgfVxuXG4gICAgaW5pdGlhbFNldENvdXBvbnMocHJvcHMpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFwcG9pbnRtZW50VHlwZSA9IHByb3BzLm1hdGNoLnBhcmFtcy50eXBlO1xuICAgICAgICBsZXQgaWQgPSBwcm9wcy5tYXRjaC5wYXJhbXMuaWQ7XG4gICAgICAgIGxldCBjbGluaWNJZCA9IHByb3BzLm1hdGNoLnBhcmFtcy5jaWRcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UocHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgdGVzdF9pZHMgPSBudWxsXG4gICAgICAgIGxldCBwcm9jZWR1cmVzX2lkcyA9IG51bGxcbiAgICAgICAgbGV0IGRlYWxfcHJpY2UgPSBudWxsXG4gICAgICAgIGxldCBjYXJ0X2l0ZW0gPSBwYXJzZWQuY2FydF9pdGVtIHx8IG51bGxcblxuICAgICAgICBpZiAocGFyc2VkLmRlYWxfcHJpY2UpIHtcbiAgICAgICAgICAgIGRlYWxfcHJpY2UgPSBwYXJzZUludChwYXJzZWQuZGVhbF9wcmljZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXBwb2ludG1lbnRUeXBlID09ICdvcGQnKSB7XG4gICAgICAgICAgICBhcHBvaW50bWVudFR5cGUgPSAxXG4gICAgICAgIH0gZWxzZSBpZiAoYXBwb2ludG1lbnRUeXBlID09ICdsYWInKSB7XG4gICAgICAgICAgICBhcHBvaW50bWVudFR5cGUgPSAyXG4gICAgICAgIH0gZWxzZSBpZiAoYXBwb2ludG1lbnRUeXBlID09ICd2aXAnKSB7XG4gICAgICAgICAgICBhcHBvaW50bWVudFR5cGUgPSAzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBvaW50bWVudFR5cGUgPSAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFwcG9pbnRtZW50VHlwZSA9PSAyKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnRlc3RfaWRzKSB7XG4gICAgICAgICAgICAgICAgdGVzdF9pZHMgPSBwYXJzZWQudGVzdF9pZHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BzLmdldENvdXBvbnMoe1xuICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogMiwgbGFiX2lkOiBpZCwgdGVzdF9pZHM6IHRlc3RfaWRzLCBwcm9maWxlX2lkOiBwcm9wcy5zZWxlY3RlZFByb2ZpbGUsIGRlYWxfcHJpY2U6IGRlYWxfcHJpY2UsIGNhcnRfaXRlbVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmKGFwcG9pbnRtZW50VHlwZSA9PSAzKXtcbiAgICAgICAgICAgICBwcm9wcy5nZXRDb3Vwb25zKHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6Y2xpbmljSWQsZ29sZF9wbGFuX2lkOmlkLCBkZWFsX3ByaWNlOmRlYWxfcHJpY2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnByb2NlZHVyZXNfaWRzKSB7XG4gICAgICAgICAgICAgICAgcHJvY2VkdXJlc19pZHMgPSBwYXJzZWQucHJvY2VkdXJlc19pZHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BzLmdldENvdXBvbnMoe1xuICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogMSwgZG9jdG9yX2lkOiBpZCwgaG9zcGl0YWxfaWQ6IGNsaW5pY0lkLCBwcm9maWxlX2lkOiBwcm9wcy5zZWxlY3RlZFByb2ZpbGUsIHByb2NlZHVyZXNfaWRzLCBkZWFsX3ByaWNlOiBkZWFsX3ByaWNlLCBjYXJ0X2l0ZW1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXBwb2ludG1lbnRUeXBlOiBhcHBvaW50bWVudFR5cGUsIGlkOiBpZCwgY2xpbmljSWQ6IGNsaW5pY0lkLCB0ZXN0X2lkcywgcHJvY2VkdXJlc19pZHMsIGRlYWxfcHJpY2UsIGNhcnRfaXRlbSB9KVxuICAgIH1cblxuICAgIHB1c2hHb2xkRGF0YShjb3Vwb24pe1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGdvbGRfcHVzaF9kYXRhPXt9XG4gICAgICAgIGxldCBwYXJhbVxuICAgICAgICBnb2xkX3B1c2hfZGF0YS5wbGFuID0gdGhpcy5wcm9wcy5zZWxlY3RlZF92aXBfcGxhblxuICAgICAgICBnb2xkX3B1c2hfZGF0YS5kdW1teV9kYXRhX3R5cGUgPSAnUExBTl9QVVJDSEFTRSdcbiAgICAgICAgZ29sZF9wdXNoX2RhdGEubWVtYmVycyA9IFtdXG4gICAgICAgIGdvbGRfcHVzaF9kYXRhLmNvdXBvbl9kYXRhID0gW11cbiAgICAgICAgZ29sZF9wdXNoX2RhdGEuY291cG9uX2RhdGEucHVzaChjb3Vwb24pXG4gICAgICAgIGdvbGRfcHVzaF9kYXRhLnV0bV9zcG9fdGFncyA9IHBhcnNlZFxuICAgICAgICBnb2xkX3B1c2hfZGF0YS5jb3Vwb25fdHlwZSA9IHRoaXMuc3RhdGUuY2xpbmljSWQgPT0gOD8nZ29sZCc6IHRoaXMuc3RhdGUuY2xpbmljSWQgPT0gMTEgPyAndmlwJzonJ1xuICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZC5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnByb3BzLnZpcENsdWJNZW1iZXJEZXRhaWxzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwYXJhbSA9IHRoaXMucHJvcHMudmlwQ2x1Yk1lbWJlckRldGFpbHNbdmFsW2tleV1dXG4gICAgICAgICAgICBnb2xkX3B1c2hfZGF0YS5tZW1iZXJzLnB1c2gocGFyYW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmKFNUT1JBR0UuaXNBZ2VudCgpKXtcbiAgICAgICAgICAgIGdvbGRfcHVzaF9kYXRhLmlzX2FnZW50ID0gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGdvbGRfcHVzaF9kYXRhLmlzX2FnZW50ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZihTVE9SQUdFLmlzQWdlbnQoKSAmJiBnb2xkX3B1c2hfZGF0YSAmJiBPYmplY3Qua2V5cyhnb2xkX3B1c2hfZGF0YSkubGVuZ3RoICYmIGdvbGRfcHVzaF9kYXRhLm1lbWJlcnMgJiYgZ29sZF9wdXNoX2RhdGEubWVtYmVycy5sZW5ndGgpe1xuICAgICAgICAgICAgaWYoZ29sZF9wdXNoX2RhdGEubWVtYmVycy5sZW5ndGggPT0xICYmIGdvbGRfcHVzaF9kYXRhLm1lbWJlcnNbMF0gPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnB1c2hNZW1iZXJzRGF0YShnb2xkX3B1c2hfZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmluaXRpYWxTZXRDb3Vwb25zKHRoaXMucHJvcHMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRQcm9maWxlICE9IG5leHRQcm9wcy5zZWxlY3RlZFByb2ZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFNldENvdXBvbnMobmV4dFByb3BzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQnV0dG9ucyhjb3Vwb24sIGUpIHtcbiAgICAgICAgaWYgKGNvdXBvbi52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvbjogY291cG9uLmNvdXBvbl9pZCwgY291cG9uTmFtZTogY291cG9uLmNvZGUsIGVycm9yTXNnOiAnJyB9KVxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5hcHBvaW50bWVudFR5cGUgPT0gMyl7XG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoR29sZERhdGEoY291cG9uKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUNvdXBvbnModGhpcy5zdGF0ZS5hcHBvaW50bWVudFR5cGUsIGNvdXBvbiwgY291cG9uLmNvdXBvbl9pZCwgdGhpcy5zdGF0ZS5pZCwgKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBvcGVuIHBvcHVwXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IGNvdXBvbi5pbnZhbGlkYXRpbmdfbWVzc2FnZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwbHlDb3Vwb24oKSB7XG4gICAgICAgIC8qaWYodGhpcy5zdGF0ZS5jb3Vwb24peyAgXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5Q291cG9ucyh0aGlzLnN0YXRlLmFwcG9pbnRtZW50VHlwZSwgdGhpcy5zdGF0ZS5jb3Vwb25OYW1lICx0aGlzLnN0YXRlLmNvdXBvbix0aGlzLnN0YXRlLmlkIClcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5nbygtMSkgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1zZzonUGxlYXNlIFNlbGVjdCBDb3Vwb24nfSlcbiAgICAgICAgfSAgICovXG4gICAgfVxuXG4gICAgZ2V0RG90cyhubywgdXNlZCkge1xuICAgICAgICBsZXQgZG90cyA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG5vOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDw9IHVzZWQpXG4gICAgICAgICAgICAgICAgZG90cy5wdXNoKDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPntpfTwvc3Bhbj48L2xpPilcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkb3RzLnB1c2goPGxpIGtleT17aX0gY2xhc3NOYW1lPVwiXCI+PHNwYW4gY2xhc3NOYW1lPVwiZG90XCI+e2l9PC9zcGFuPjwvbGk+KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb3RzXG4gICAgfVxuXG4gICAgYXBwbHlUZXh0Q291cG9uKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdXBvblRleHRNZXNzYWdlOiBcIlwiIH0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvdXBvblRleHQpIHtcbiAgICAgICAgICAgIGxldCBjYiA9IChjb3Vwb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY291cG9uICYmIGNvdXBvblswXSAmJiBjb3Vwb25bMF0udmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVCdXR0b25zKGNvdXBvblswXSwgZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uVGV4dE1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgY291cG9uIGNvZGVcIiB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFwcG9pbnRtZW50VHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRDb3Vwb25zKHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiAyLCBsYWJfaWQ6IHRoaXMuc3RhdGUuaWQsIHRlc3RfaWRzOiB0aGlzLnN0YXRlLnRlc3RfaWRzLCBwcm9maWxlX2lkOiB0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZSwgc2F2ZV9pbl9zdG9yZTogZmFsc2UsIGNvdXBvbl9jb2RlOiB0aGlzLnN0YXRlLmNvdXBvblRleHQsIGRlYWxfcHJpY2U6IHRoaXMuc3RhdGUuZGVhbF9wcmljZSwgY2I6IGNiLCBjYXJ0X2l0ZW06IHRoaXMuc3RhdGUuY2FydF9pdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuYXBwb2ludG1lbnRUeXBlID09IDMpe1xuICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldENvdXBvbnMoe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6dGhpcy5zdGF0ZS5jbGluaWNJZCxnb2xkX3BsYW5faWQ6dGhpcy5zdGF0ZS5pZCwgZGVhbF9wcmljZTp0aGlzLnN0YXRlLmRlYWxfcHJpY2UsIGNvdXBvbl9jb2RlOiB0aGlzLnN0YXRlLmNvdXBvblRleHQsIHNhdmVfaW5fc3RvcmU6IGZhbHNlLCBjYjogY2IsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRDb3Vwb25zKHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiAxLCBkb2N0b3JfaWQ6IHRoaXMuc3RhdGUuaWQsIGhvc3BpdGFsX2lkOiB0aGlzLnN0YXRlLmNsaW5pY0lkLCBwcm9maWxlX2lkOiB0aGlzLnByb3BzLnNlbGVjdGVkUHJvZmlsZSwgcHJvY2VkdXJlc19pZHM6IHRoaXMuc3RhdGUucHJvY2VkdXJlc19pZHMsIHNhdmVfaW5fc3RvcmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb3Vwb25fY29kZTogdGhpcy5zdGF0ZS5jb3Vwb25UZXh0LCBkZWFsX3ByaWNlOiB0aGlzLnN0YXRlLmRlYWxfcHJpY2UsIGNiOiBjYiwgY2FydF9pdGVtOiB0aGlzLnN0YXRlLmNhcnRfaXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cG9uVGV4dE1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIGEgY291cG9uIGNvZGVcIiB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93IG1ybmctY29wblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRyLXByb2ZpbGUtc2NyZWVuIGJvb2tpbmctY29uZmlybS1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1yYi0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1ydC0xMCBjdC1wcm9maWxlIHNraW4td2hpdGVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vwb25zLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwZC0xMiBzZWxlY3QtY291cG9uLWhlYWRpbmdcIj5TZWxlY3QgQ291cG9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cG9uLXNlYXJjaC1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBDb3Vwb24gaGVyZVwiIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTondXBwZXJjYXNlJ319IG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5jb3Vwb25UZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYXBwbHlUZXh0Q291cG9uLmJpbmQodGhpcyl9PkFwcGx5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57dGhpcy5zdGF0ZS5jb3Vwb25UZXh0TWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGxpY2FibGVDb3Vwb25zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGxpY2FibGVDb3Vwb25zLm1hcCgoY291cG9ucywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcImNvdXBvbi1zdHlsZSBzZWFyY2gtbGlzdC1yYWRpbyBwZC0xMlwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9e2NvdXBvbnMuY291cG9uX2lkfSBuYW1lPVwicmFkaW8tZ3JvdXBcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmNvdXBvbiA9PT0gY291cG9ucy5jb3Vwb25faWR9IHZhbHVlPXtjb3Vwb25zLmNvZGV9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQnV0dG9ucy5iaW5kKHRoaXMsIGNvdXBvbnMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZFwiIGh0bWxGb3I9e2NvdXBvbnMuY291cG9uX2lkfT57Y291cG9ucy5jb2RlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vwb24taW5wdXQgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb3Vwb25zLmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Vwb25zLmNvdXBvbl9jb3VudCA+IDEgPyA8ZGl2IGNsYXNzTmFtZT1cImNvdXBvbi10aW1lbGluZSBib29rLWNvbmZpcm1lZC10aW1lbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1wcmltYXJ5XCI+Y2FuIGJlIHVzZWQge2NvdXBvbnMuY291cG9uX2NvdW50IC0gY291cG9ucy51c2VkX2NvdW50fSBtb3JlIHRpbWVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb3Vwb24taW5saW5lLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXREb3RzKGNvdXBvbnMuY291cG9uX2NvdW50LCBjb3Vwb25zLnVzZWRfY291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cG9ucy50bmMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1wcmltYXJ5XCIgc3R5bGU9e3sgJ2N1cnNvcic6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsICdvcGVuVGVybXNDb25kaXRpb25zJywgY291cG9ucy50bmMpfT5UZXJtcyAmIENvbmRpdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW5UZXJtc0NvbmRpdGlvbnMgPyA8VGVybXNDb25kaXRpb25zIHRvZ2dsZT17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnb3BlblRlcm1zQ29uZGl0aW9ucycpfSB0bmM9e3RoaXMuc3RhdGUudG5jfSAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vLWNvdXBvblwiPk5vIGNvdXBvbnMgYXZhaWxhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciA/IDxCb29raW5nRXJyb3IgaGVhZGluZz17XCJJbnZhbGlkIENvdXBvblwifSBtZXNzYWdlPXt0aGlzLnN0YXRlLmVycm9yfSBjbG9zZUVycm9yUG9wdXA9e3RoaXMuY2xvc2VFcnJvclBvcHVwfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ291cG9uU2VsZWN0aW9uVmlld1xuIiwiaW1wb3J0IENvdXBvblNlbGVjdGlvbiBmcm9tICcuL2NvdXBvblNlbGVjdGlvblZpZXcnXG5cbmV4cG9ydCBkZWZhdWx0IENvdXBvblNlbGVjdGlvbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5XCIgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGV9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBhY3Rpb24tc2NyZWVuLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+VGVybXMgJiBDb25kaXRpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1zLWNvbmRpdGlvbi1kaXYgcGF5cGFsLWR0bHMtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVybXMtY29uZGl0aW9uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLnRuYyB9fSA+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1idG4gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZnctNTAwXCIgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGV9PkRvbmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBCb29raW5nRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImVycm9yLW1zZy1wb3BcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1lcnJvclwiIHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWhlYWRcIj48aW1nIGNsYXNzTmFtZT1cImVycm9ySW5mb0ltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2luZm9lcnJvci5zdmdcIn0gLz57XCJBbGVydFwifTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gYWx0PVwiY2xvc2VcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlRXJyb3JQb3B1cH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPnt0aGlzLnByb3BzLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nRXJyb3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ291cG9uU2VsZWN0aW9uVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvY291cG9uU2VsZWN0aW9uVmlldydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGdldENvdXBvbnMsIGFwcGx5Q291cG9ucywgcHVzaE1lbWJlcnNEYXRhIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuXG5jbGFzcyBDb3Vwb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PENvdXBvblNlbGVjdGlvblZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0YXBwbGljYWJsZUNvdXBvbnMsIHNlbGVjdGVkUHJvZmlsZSwgcHJvZmlsZXNcblx0fSA9IHN0YXRlLlVTRVJcblxuXHRsZXQge1xuXHRcdHNlbGVjdGVkU2xvdFxuXHR9ID0gc3RhdGUuRE9DVE9SX1NFQVJDSFxuXG5cdGxldCB7ICBzZWxlY3RlZF92aXBfcGxhbiwgdmlwQ2x1Yk1lbWJlckRldGFpbHMsIGN1cnJlbnRTZWxlY3RlZFZpcE1lbWJlcnNJZCwgdmlwQ291cG9ucyB9ID0gc3RhdGUuVklQQ0xVQlxuXG5cdHJldHVybiB7XG5cdFx0YXBwbGljYWJsZUNvdXBvbnMsXG5cdFx0c2VsZWN0ZWRTbG90LFxuXHRcdHNlbGVjdGVkUHJvZmlsZSwgcHJvZmlsZXMsXG5cdFx0IHNlbGVjdGVkX3ZpcF9wbGFuLCB2aXBDbHViTWVtYmVyRGV0YWlscywgY3VycmVudFNlbGVjdGVkVmlwTWVtYmVyc0lkLCB2aXBDb3Vwb25zXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cblx0cmV0dXJuIHtcblx0XHRnZXRDb3Vwb25zOiAoZGF0YSkgPT4gZGlzcGF0Y2goZ2V0Q291cG9ucyhkYXRhKSksXG5cdFx0YXBwbHlDb3Vwb25zOiAocHJvZHVjdElkLCBjb3Vwb25EYXRhLCBjb3Vwb25JZCwgaG9zcGl0YWxJZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGFwcGx5Q291cG9ucyhwcm9kdWN0SWQsIGNvdXBvbkRhdGEsIGNvdXBvbklkLCBob3NwaXRhbElkLCBjYWxsYmFjaykpLFxuXHRcdHB1c2hNZW1iZXJzRGF0YTooY3JpdGVyaWEpID0+ZGlzcGF0Y2gocHVzaE1lbWJlcnNEYXRhKGNyaXRlcmlhKSksXG5cblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291cG9ucykiLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiaW1wb3J0IF9NZW1vcnlSb3V0ZXIgZnJvbSBcIi4vTWVtb3J5Um91dGVyXCI7XG5leHBvcnQgeyBfTWVtb3J5Um91dGVyIGFzIE1lbW9yeVJvdXRlciB9O1xuaW1wb3J0IF9Qcm9tcHQgZnJvbSBcIi4vUHJvbXB0XCI7XG5leHBvcnQgeyBfUHJvbXB0IGFzIFByb21wdCB9O1xuaW1wb3J0IF9SZWRpcmVjdCBmcm9tIFwiLi9SZWRpcmVjdFwiO1xuZXhwb3J0IHsgX1JlZGlyZWN0IGFzIFJlZGlyZWN0IH07XG5pbXBvcnQgX1JvdXRlIGZyb20gXCIuL1JvdXRlXCI7XG5leHBvcnQgeyBfUm91dGUgYXMgUm91dGUgfTtcbmltcG9ydCBfUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuZXhwb3J0IHsgX1JvdXRlciBhcyBSb3V0ZXIgfTtcbmltcG9ydCBfU3RhdGljUm91dGVyIGZyb20gXCIuL1N0YXRpY1JvdXRlclwiO1xuZXhwb3J0IHsgX1N0YXRpY1JvdXRlciBhcyBTdGF0aWNSb3V0ZXIgfTtcbmltcG9ydCBfU3dpdGNoIGZyb20gXCIuL1N3aXRjaFwiO1xuZXhwb3J0IHsgX1N3aXRjaCBhcyBTd2l0Y2ggfTtcbmltcG9ydCBfZ2VuZXJhdGVQYXRoIGZyb20gXCIuL2dlbmVyYXRlUGF0aFwiO1xuZXhwb3J0IHsgX2dlbmVyYXRlUGF0aCBhcyBnZW5lcmF0ZVBhdGggfTtcbmltcG9ydCBfbWF0Y2hQYXRoIGZyb20gXCIuL21hdGNoUGF0aFwiO1xuZXhwb3J0IHsgX21hdGNoUGF0aCBhcyBtYXRjaFBhdGggfTtcbmltcG9ydCBfd2l0aFJvdXRlciBmcm9tIFwiLi93aXRoUm91dGVyXCI7XG5leHBvcnQgeyBfd2l0aFJvdXRlciBhcyB3aXRoUm91dGVyIH07Il0sInNvdXJjZVJvb3QiOiIifQ==