(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[143],{

/***/ "./dev/js/components/vipClub/digitSummaryView.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/vipClub/digitSummaryView.js ***!
  \*******************************************************/
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

var DigitSummaryView = function (_React$Component) {
    _inherits(DigitSummaryView, _React$Component);

    function DigitSummaryView(props) {
        _classCallCheck(this, DigitSummaryView);

        var _this = _possibleConstructorReturn(this, (DigitSummaryView.__proto__ || Object.getPrototypeOf(DigitSummaryView)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(DigitSummaryView, [{
        key: 'render',
        value: function render() {
            var fullName = this.props.selfdata.title + ' ' + this.props.selfdata.name + ' ' + this.props.selfdata.last_name;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'widget mrb-10' },
                    _react2.default.createElement(
                        'div',
                        { className: 'widget-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'sub-form-input-data' },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'p',
                                    { className: 'sub-form-hed' },
                                    'Self'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'dlts-cnt' },
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/nw-usr.svg' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    fullName
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/calendar-01.svg' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    this.props.selfdata.dob
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/mail-01.svg' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    this.props.selfdata.email
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/customer-icons/call.svg' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    this.props.selfdata.phone_number
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/location-01.svg' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    this.props.selfdata.pincode
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/customer-icons/location-colored.svg' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    this.props.selfdata.address
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/nw-usr.svg' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    this.props.selfdata.nominee_name
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/nw-usr.svg' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    this.props.selfdata.nominee_relation
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'widget mrb-10' },
                    _react2.default.createElement(
                        'div',
                        { className: 'widget-header text-center action-screen-header' },
                        _react2.default.createElement(
                            'p',
                            { className: 'fw-500 cancel-appointment-head' },
                            'Confirm Payment'
                        ),
                        _react2.default.createElement('hr', null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'payment-content-div' },
                        _react2.default.createElement(
                            'p',
                            { className: 'payment-content fw-500' },
                            'Plan Name'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'payment-content fw-500' },
                            this.props.plandata.name
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'payment-content-div' },
                        _react2.default.createElement(
                            'p',
                            { className: 'payment-content fw-500' },
                            'Premium Amount'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'payment-content fw-500' },
                            '\u20B9 ',
                            this.props.plandata.amount
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'payment-content-div' },
                        _react2.default.createElement(
                            'p',
                            { className: 'payment-content fw-500' },
                            'GST'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'payment-content fw-500' },
                            ' 18%'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'payment-content-div' },
                        _react2.default.createElement(
                            'p',
                            { className: 'payment-content fw-500' },
                            'Amount Payable'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'payment-content fw-500' },
                            '\u20B9  ',
                            this.props.plandata.final_amount
                        )
                    )
                )
            );
        }
    }]);

    return DigitSummaryView;
}(_react2.default.Component);

exports.default = DigitSummaryView;

/***/ }),

/***/ "./dev/js/containers/vipClub/DigitSummaryPage.js":
/*!*******************************************************!*\
  !*** ./dev/js/containers/vipClub/DigitSummaryPage.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _digitSummaryView = __webpack_require__(/*! ../../components/vipClub/digitSummaryView.js */ "./dev/js/components/vipClub/digitSummaryView.js");

var _digitSummaryView2 = _interopRequireDefault(_digitSummaryView);

var _digitStaticDataView = __webpack_require__(/*! ../../components/vipClub/digitStaticDataView.js */ "./dev/js/components/vipClub/digitStaticDataView.js");

var _digitStaticDataView2 = _interopRequireDefault(_digitStaticDataView);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _paymentForm = __webpack_require__(/*! ../../components/commons/paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var DigitInsuranceFormPage = function (_React$Component) {
    _inherits(DigitInsuranceFormPage, _React$Component);

    function DigitInsuranceFormPage(props) {
        _classCallCheck(this, DigitInsuranceFormPage);

        var _this = _possibleConstructorReturn(this, (DigitInsuranceFormPage.__proto__ || Object.getPrototypeOf(DigitInsuranceFormPage)).call(this, props));

        var parsed = queryString.parse(_this.props.location.search);
        _this.state = {
            source: parsed.source,
            is_from_organic: parsed.fromOrganic,
            is_pb: parsed.utm_source ? parsed.utm_source && parsed.utm_source.includes('policybazaar.com') : false,
            paymentData: null
        };
        return _this;
    }

    _createClass(DigitInsuranceFormPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile(); // to get loggedIn user profile
            }
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'proceed',
        value: function proceed() {
            var _this2 = this;

            if (this.props.selected_digit_plan && Object.keys(this.props.selected_digit_plan).length > 0 && this.props.digit_self_details && Object.keys(this.props.digit_self_details).length > 0) {
                var members = {};
                var param = void 0;
                var data = {};
                data.insurance_plan = this.props.selected_digit_plan.id;
                data.members = [];
                this.props.currentSelectedDigitMembersId.map(function (val, key) {
                    if (Object.keys(_this2.props.digit_self_details).length > 0) {
                        param = _this2.props.digit_self_details[val[key]];
                        if (param.id) {
                            members = {};
                            members.title = param.title;
                            members.first_name = param.name;
                            members.last_name = param.last_name;
                            members.email = param.email;
                            members.dob = param.dob;
                            members.gender = param.gender;
                            members.mobile = param.phone_number;
                            members.nominee_name = param.nominee_name;
                            members.nominee_relation = param.nominee_relation;
                            members.pincode = param.pincode;
                            members.profile = param.profile_id;
                            members.id = param.id;
                            members.address = param.address;
                            data.members.push(members);
                            _this2.props.digitPay(data, function (resp) {
                                // to request for payment

                                if (resp && resp.error) {
                                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: resp.error });
                                    return;
                                }
                                if (resp.payment_required) {
                                    _this2.processPayment(resp);
                                } else {
                                    if (resp && resp.data) {
                                        // alert('no payment')
                                        success_id = '/covid-order/summary/' + resp.data.id + '?payment_success=true';
                                        _this2.props.history.push(success_id);
                                    }
                                }
                            });
                        }
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
        key: 'render',
        value: function render() {
            var _this4 = this;

            var selfDataObj = this.props.digit_self_details[Object.keys(this.props.digit_self_details)[0]];
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
                                                                { className: 'tab_inactive' },
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
                                            _react2.default.createElement(_digitSummaryView2.default, { selfdata: selfDataObj, plandata: this.props.selected_digit_plan })
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'sticky-btn fixed insuBtnsContainer' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'insu-right-orng-btn ins-buy-btn', onClick: function onClick() {
                                            return _this4.proceed();
                                        } },
                                    'Buy Now'
                                )
                            )
                        )
                    ),
                    this.state.paymentData ? _react2.default.createElement(_paymentForm2.default, { paymentData: this.state.paymentData, refs: 'opd' }) : ""
                )
            );
        }
    }]);

    return DigitInsuranceFormPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$USER = state.USER,
        common_utm_tags = _state$USER.common_utm_tags,
        user_loggedIn_number = _state$USER.user_loggedIn_number;
    var _state$VIPCLUB = state.VIPCLUB,
        selected_digit_plan = _state$VIPCLUB.selected_digit_plan,
        digit_self_details = _state$VIPCLUB.digit_self_details,
        currentSelectedDigitMembersId = _state$VIPCLUB.currentSelectedDigitMembersId;


    return {
        USER: USER, common_utm_tags: common_utm_tags, user_loggedIn_number: user_loggedIn_number, selected_digit_plan: selected_digit_plan, digit_self_details: digit_self_details, currentSelectedDigitMembersId: currentSelectedDigitMembersId
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {

        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
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
        digitPay: function digitPay(data, cb) {
            return dispatch((0, _index.digitPay)(data, cb));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DigitInsuranceFormPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy92aXBDbHViL2RpZ2l0U3VtbWFyeVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvdmlwQ2x1Yi9EaWdpdFN1bW1hcnlQYWdlLmpzIl0sIm5hbWVzIjpbIkRpZ2l0U3VtbWFyeVZpZXciLCJwcm9wcyIsInN0YXRlIiwiZnVsbE5hbWUiLCJzZWxmZGF0YSIsInRpdGxlIiwibmFtZSIsImxhc3RfbmFtZSIsIkFTU0VUU19CQVNFX1VSTCIsImRvYiIsImVtYWlsIiwicGhvbmVfbnVtYmVyIiwicGluY29kZSIsImFkZHJlc3MiLCJub21pbmVlX25hbWUiLCJub21pbmVlX3JlbGF0aW9uIiwicGxhbmRhdGEiLCJhbW91bnQiLCJmaW5hbF9hbW91bnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkRpZ2l0SW5zdXJhbmNlRm9ybVBhZ2UiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwic291cmNlIiwiaXNfZnJvbV9vcmdhbmljIiwiZnJvbU9yZ2FuaWMiLCJpc19wYiIsInV0bV9zb3VyY2UiLCJpbmNsdWRlcyIsInBheW1lbnREYXRhIiwiU1RPUkFHRSIsImNoZWNrQXV0aCIsImdldFVzZXJQcm9maWxlIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZWxlY3RlZF9kaWdpdF9wbGFuIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImRpZ2l0X3NlbGZfZGV0YWlscyIsIm1lbWJlcnMiLCJwYXJhbSIsImRhdGEiLCJpbnN1cmFuY2VfcGxhbiIsImlkIiwiY3VycmVudFNlbGVjdGVkRGlnaXRNZW1iZXJzSWQiLCJtYXAiLCJ2YWwiLCJrZXkiLCJmaXJzdF9uYW1lIiwiZ2VuZGVyIiwibW9iaWxlIiwicHJvZmlsZSIsInByb2ZpbGVfaWQiLCJwdXNoIiwiZGlnaXRQYXkiLCJyZXNwIiwiZXJyb3IiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwicGF5bWVudF9yZXF1aXJlZCIsInByb2Nlc3NQYXltZW50Iiwic3VjY2Vzc19pZCIsImhpc3RvcnkiLCJzdGF0dXMiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9ybSIsInN1Ym1pdCIsInNlbGZEYXRhT2JqIiwicHJvY2VlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJjb21tb25fdXRtX3RhZ3MiLCJ1c2VyX2xvZ2dlZEluX251bWJlciIsIlZJUENMVUIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNlbmRPVFAiLCJudW1iZXIiLCJ2aWFTbXMiLCJ2aWFXaGF0c2FwcCIsIm1lc3NhZ2VfdHlwZSIsImNiIiwic3VibWl0T1RQIiwib3RwIiwiZXh0cmFQYXJhbXNEYXRhIiwicmVzZXRBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLGdCOzs7QUFDRiw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdJQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmU7QUFJbEI7Ozs7aUNBRVE7QUFDTCxnQkFBSUMsV0FBVyxLQUFLRixLQUFMLENBQVdHLFFBQVgsQ0FBb0JDLEtBQXBCLEdBQTJCLEdBQTNCLEdBQWlDLEtBQUtKLEtBQUwsQ0FBV0csUUFBWCxDQUFvQkUsSUFBckQsR0FBNEQsR0FBNUQsR0FBaUUsS0FBS0wsS0FBTCxDQUFXRyxRQUFYLENBQW9CRyxTQUFwRztBQUNBLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLHFCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLHNDQUFHLFdBQVUsY0FBYjtBQUFBO0FBQUE7QUFESjtBQURKLHlCQURKO0FBTUk7QUFBQTtBQUFB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QUFHSCxDQVJEOztBQVVBLElBQU1tQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDckMsV0FBTzs7QUFFSGpELHdCQUFnQjtBQUFBLG1CQUFNaUQsU0FBUyw0QkFBVCxDQUFOO0FBQUEsU0FGYjtBQUdIQyxpQkFBUyxpQkFBQ0MsTUFBRCxFQUFRQyxNQUFSLEVBQWVDLFdBQWYsRUFBMkJDLFlBQTNCLEVBQXlDQyxFQUF6QztBQUFBLG1CQUFnRE4sU0FBUyxvQkFBUUUsTUFBUixFQUFlQyxNQUFmLEVBQXNCQyxXQUF0QixFQUFrQ0MsWUFBbEMsRUFBZ0RDLEVBQWhELENBQVQsQ0FBaEQ7QUFBQSxTQUhOO0FBSUhDLG1CQUFXLG1CQUFDTCxNQUFELEVBQVNNLEdBQVQsRUFBY0MsZUFBZCxFQUE4QkgsRUFBOUI7QUFBQSxtQkFBcUNOLFNBQVMsc0JBQVVFLE1BQVYsRUFBa0JNLEdBQWxCLEVBQXNCQyxlQUF0QixFQUF1Q0gsRUFBdkMsQ0FBVCxDQUFyQztBQUFBLFNBSlI7QUFLSEksbUJBQVc7QUFBQSxtQkFBTVYsU0FBUyx1QkFBVCxDQUFOO0FBQUEsU0FMUjtBQU1IMUIsa0JBQVMsa0JBQUNiLElBQUQsRUFBTTZDLEVBQU47QUFBQSxtQkFBYU4sU0FBUyxxQkFBU3ZDLElBQVQsRUFBYzZDLEVBQWQsQ0FBVCxDQUFiO0FBQUE7QUFOTixLQUFQO0FBUUgsQ0FURDs7a0JBYWUseUJBQVFaLGVBQVIsRUFBMEJLLGtCQUExQixFQUE4QzlELHNCQUE5QyxDIiwiZmlsZSI6IjE0My5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIERpZ2l0U3VtbWFyeVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZnVsbE5hbWUgPSB0aGlzLnByb3BzLnNlbGZkYXRhLnRpdGxlKyAnICcgKyB0aGlzLnByb3BzLnNlbGZkYXRhLm5hbWUgKyAnICcgK3RoaXMucHJvcHMuc2VsZmRhdGEubGFzdF9uYW1lO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItZm9ybS1pbnB1dC1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWZvcm0taGVkXCI+U2VsZjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbHRzLWNudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9udy11c3Iuc3ZnJ30gLz48c3Bhbj57ZnVsbE5hbWV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY2FsZW5kYXItMDEuc3ZnJ30gLz48c3Bhbj57dGhpcy5wcm9wcy5zZWxmZGF0YS5kb2J9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvbWFpbC0wMS5zdmcnfSAvPjxzcGFuPnt0aGlzLnByb3BzLnNlbGZkYXRhLmVtYWlsfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2NhbGwuc3ZnJ30gLz48c3Bhbj57dGhpcy5wcm9wcy5zZWxmZGF0YS5waG9uZV9udW1iZXJ9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvbG9jYXRpb24tMDEuc3ZnJ30gLz48c3Bhbj57dGhpcy5wcm9wcy5zZWxmZGF0YS5waW5jb2RlfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2xvY2F0aW9uLWNvbG9yZWQuc3ZnJ30gLz48c3Bhbj57dGhpcy5wcm9wcy5zZWxmZGF0YS5hZGRyZXNzfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL253LXVzci5zdmcnfSAvPjxzcGFuPnt0aGlzLnByb3BzLnNlbGZkYXRhLm5vbWluZWVfbmFtZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9udy11c3Iuc3ZnJ30gLz48c3Bhbj57dGhpcy5wcm9wcy5zZWxmZGF0YS5ub21pbmVlX3JlbGF0aW9ufTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBhY3Rpb24tc2NyZWVuLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+Q29uZmlybSBQYXltZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj5QbGFuIE5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+e3RoaXMucHJvcHMucGxhbmRhdGEubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj5QcmVtaXVtIEFtb3VudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj4mIzgzNzc7IHt0aGlzLnByb3BzLnBsYW5kYXRhLmFtb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj5HU1Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXltZW50LWNvbnRlbnQgZnctNTAwXCI+IDE4JTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudC1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBheW1lbnQtY29udGVudCBmdy01MDBcIj5Qb2xpY3kgU3RhcnREYXRlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPi0tLy0tLy0tPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50LWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPkFtb3VudCBQYXlhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGF5bWVudC1jb250ZW50IGZ3LTUwMFwiPiYjODM3NzsgIHt0aGlzLnByb3BzLnBsYW5kYXRhLmZpbmFsX2Ftb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWdpdFN1bW1hcnlWaWV3OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IHNlbmRPVFAsIHN1Ym1pdE9UUCwgcmVzZXRBdXRoLCBnZXRVc2VyUHJvZmlsZSwgZGlnaXRQYXkgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IERpZ2l0U3VtbWFyeVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy92aXBDbHViL2RpZ2l0U3VtbWFyeVZpZXcuanMnXG5pbXBvcnQgRGlnaXRTdGF0aWNEYXRhVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpcENsdWIvZGlnaXRTdGF0aWNEYXRhVmlldy5qcydcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0xvYWRlcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvcGF5bWVudEZvcm0nXG5cbmNsYXNzIERpZ2l0SW5zdXJhbmNlRm9ybVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykgeyAgICBcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIHNvdXJjZTpwYXJzZWQuc291cmNlLFxuICAgICAgICAgICAgaXNfZnJvbV9vcmdhbmljOnBhcnNlZC5mcm9tT3JnYW5pYyxcbiAgICAgICAgICAgIGlzX3BiOnBhcnNlZC51dG1fc291cmNlP3BhcnNlZC51dG1fc291cmNlICYmIHBhcnNlZC51dG1fc291cmNlLmluY2x1ZGVzKCdwb2xpY3liYXphYXIuY29tJyk6ZmFsc2UsXG4gICAgICAgICAgICBwYXltZW50RGF0YTpudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFVzZXJQcm9maWxlKCkgLy8gdG8gZ2V0IGxvZ2dlZEluIHVzZXIgcHJvZmlsZVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2VlZCgpe1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkX2RpZ2l0X3BsYW4gJiYgT2JqZWN0LmtleXModGhpcy5wcm9wcy5zZWxlY3RlZF9kaWdpdF9wbGFuKS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzICYmIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbWVtYmVycyA9IHt9XG4gICAgICAgICAgICBsZXQgcGFyYW1cbiAgICAgICAgICAgIGxldCBkYXRhID0ge31cbiAgICAgICAgICAgIGRhdGEuaW5zdXJhbmNlX3BsYW4gPSB0aGlzLnByb3BzLnNlbGVjdGVkX2RpZ2l0X3BsYW4uaWRcbiAgICAgICAgICAgIGRhdGEubWVtYmVycyA9IFtdXG4gICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVyc0lkLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5kaWdpdF9zZWxmX2RldGFpbHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW0gPSB0aGlzLnByb3BzLmRpZ2l0X3NlbGZfZGV0YWlsc1t2YWxba2V5XV1cbiAgICAgICAgICAgICAgICAgICAgaWYocGFyYW0uaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVycyA9IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzLnRpdGxlID0gcGFyYW0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMuZmlyc3RfbmFtZSA9IHBhcmFtLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMubGFzdF9uYW1lID0gcGFyYW0ubGFzdF9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzLmVtYWlsID0gcGFyYW0uZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMuZG9iID0gcGFyYW0uZG9iXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzLmdlbmRlciA9IHBhcmFtLmdlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVycy5tb2JpbGUgPSBwYXJhbS5waG9uZV9udW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMubm9taW5lZV9uYW1lID0gcGFyYW0ubm9taW5lZV9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzLm5vbWluZWVfcmVsYXRpb24gPSBwYXJhbS5ub21pbmVlX3JlbGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzLnBpbmNvZGUgPSBwYXJhbS5waW5jb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzLnByb2ZpbGUgPSBwYXJhbS5wcm9maWxlX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzLmlkID0gcGFyYW0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMuYWRkcmVzcyA9IHBhcmFtLmFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWVtYmVycy5wdXNoKG1lbWJlcnMpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpZ2l0UGF5KGRhdGEsIChyZXNwKSA9PiB7IC8vIHRvIHJlcXVlc3QgZm9yIHBheW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwICYmIHJlc3AuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiByZXNwLmVycm9yIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcC5wYXltZW50X3JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1BheW1lbnQocmVzcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwICYmIHJlc3AuZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGVydCgnbm8gcGF5bWVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzX2lkID0gJy9jb3ZpZC1vcmRlci9zdW1tYXJ5LycrcmVzcC5kYXRhLmlkKyc/cGF5bWVudF9zdWNjZXNzPXRydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChzdWNjZXNzX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzUGF5bWVudChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGF5bWVudERhdGE6IGRhdGEuZGF0YSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudEZvcm0nKSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBheW1lbnREYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCBzZWxmRGF0YU9iaiA9IHRoaXMucHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzW09iamVjdC5rZXlzKHRoaXMucHJvcHMuZGlnaXRfc2VsZl9kZXRhaWxzKVswXV07IFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBhcnRpY2xlLWNvbnRhaW5lciBib3R0b21NYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtMTAgY29sLWxnLTEwIGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qID09PT09PT09PT09PT09PT09PT09IHRvcCBzZWN0aW9uIHdpdGggaWNvbnMgYW5kIGxpc3RpbmcgPT09PT09PT09PT09PT09PT09PT0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8RGlnaXRTdGF0aWNEYXRhVmlldyAvPiAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PSB0b3Agc2VjdGlvbiB3aXRoIGljb25zIGFuZCBsaXN0aW5nID09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT0gU3RlcHMgQ29udGFpbmVyID09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTAgZGlnaS1zdGVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1zdGF0dXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX21lbnVcIiBpZD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbl90YWJzXCIgaWQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJfaW5hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkNob29zZSBZb3VyIFBsYW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndGFiX2luYWN0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkZpbGwgTWVtYmVyIERldGFpbHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYl9pbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+UGF5bWVudDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWdpdFN1bW1hcnlWaWV3IHNlbGZkYXRhPXtzZWxmRGF0YU9ian0gcGxhbmRhdGE9e3RoaXMucHJvcHMuc2VsZWN0ZWRfZGlnaXRfcGxhbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PSBDb21tb24gYnV0dG9uID09PT09PT09PT09PT09PT09PT09ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWJ0biBmaXhlZCBpbnN1QnRuc0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImluc3UtcmlnaHQtb3JuZy1idG4gaW5zLWJ1eS1idG5cIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9jZWVkKCl9PkJ1eSBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPT09PT09PT09PT09PT09PT09PT0gQ29tbW9uIGJ1dHRvbiA9PT09PT09PT09PT09PT09PT09PSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wYXltZW50RGF0YSA/IDxQYXltZW50Rm9ybSBwYXltZW50RGF0YT17dGhpcy5zdGF0ZS5wYXltZW50RGF0YX0gcmVmcz0nb3BkJyAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcblxuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyBjb21tb25fdXRtX3RhZ3MsIHVzZXJfbG9nZ2VkSW5fbnVtYmVyIH0gPSBzdGF0ZS5VU0VSXG4gICAgbGV0IHsgIHNlbGVjdGVkX2RpZ2l0X3BsYW4sZGlnaXRfc2VsZl9kZXRhaWxzLGN1cnJlbnRTZWxlY3RlZERpZ2l0TWVtYmVyc0lkIH0gPSBzdGF0ZS5WSVBDTFVCXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBVU0VSLCAgY29tbW9uX3V0bV90YWdzLCB1c2VyX2xvZ2dlZEluX251bWJlcixzZWxlY3RlZF9kaWdpdF9wbGFuLGRpZ2l0X3NlbGZfZGV0YWlscyxjdXJyZW50U2VsZWN0ZWREaWdpdE1lbWJlcnNJZFxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgIGdldFVzZXJQcm9maWxlOiAoKSA9PiBkaXNwYXRjaChnZXRVc2VyUHJvZmlsZSgpKSxcbiAgICAgICAgc2VuZE9UUDogKG51bWJlcix2aWFTbXMsdmlhV2hhdHNhcHAsbWVzc2FnZV90eXBlLCBjYikgPT4gZGlzcGF0Y2goc2VuZE9UUChudW1iZXIsdmlhU21zLHZpYVdoYXRzYXBwLG1lc3NhZ2VfdHlwZSwgY2IpKSxcbiAgICAgICAgc3VibWl0T1RQOiAobnVtYmVyLCBvdHAsIGV4dHJhUGFyYW1zRGF0YSxjYikgPT4gZGlzcGF0Y2goc3VibWl0T1RQKG51bWJlciwgb3RwLGV4dHJhUGFyYW1zRGF0YSwgY2IpKSxcbiAgICAgICAgcmVzZXRBdXRoOiAoKSA9PiBkaXNwYXRjaChyZXNldEF1dGgoKSksXG4gICAgICAgIGRpZ2l0UGF5OihkYXRhLGNiKSA9PiBkaXNwYXRjaChkaWdpdFBheShkYXRhLGNiKSlcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyAsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGlnaXRJbnN1cmFuY2VGb3JtUGFnZSkiXSwic291cmNlUm9vdCI6IiJ9