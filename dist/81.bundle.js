(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

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

/***/ "./dev/js/components/commons/orderSummary/index.js":
/*!*********************************************************!*\
  !*** ./dev/js/components/commons/orderSummary/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _orderSummaryView = __webpack_require__(/*! ./orderSummaryView */ "./dev/js/components/commons/orderSummary/orderSummaryView.js");

var _orderSummaryView2 = _interopRequireDefault(_orderSummaryView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _orderSummaryView2.default;

/***/ }),

/***/ "./dev/js/components/commons/orderSummary/orderSummaryView.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/commons/orderSummary/orderSummaryView.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _criteo = __webpack_require__(/*! ../../../helpers/criteo.js */ "./dev/js/helpers/criteo.js");

var _criteo2 = _interopRequireDefault(_criteo);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderSummaryView = function (_React$Component) {
    _inherits(OrderSummaryView, _React$Component);

    function OrderSummaryView(props) {
        _classCallCheck(this, OrderSummaryView);

        var _this = _possibleConstructorReturn(this, (OrderSummaryView.__proto__ || Object.getPrototypeOf(OrderSummaryView)).call(this, props));

        _this.state = {
            items: [],
            payment_success: _this.props.location.search.includes('payment_success')
        };
        return _this;
    }

    _createClass(OrderSummaryView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (window) {
                window.scrollTo(0, 0);
            }

            if (_storage2.default.checkAuth()) {
                this.props.fetchOrderSummary(this.props.match.params.id).then(function (res) {
                    if (res.data && res.data.length) {
                        _this2.setState({ items: res.data, data: res });

                        var orderId = _this2.props.match.params.id;
                        var deal_price = 0;
                        var info = {};
                        info[orderId] = [];
                        var isLab = res.data[0].data.tests;
                        var isDoctor = res.data[0].data.doctor;
                        var appointmentId = res.data[0].booking_id;
                        res.data.map(function (data) {
                            info[orderId].push({ 'booking_id': data.booking_id, 'mrp': data.mrp, 'deal_price': data.deal_price });
                            deal_price += parseInt(data.deal_price);

                            if (data.payment_type && data.payment_type == 2) {
                                var analyticData = {
                                    'Category': 'ConsumerApp', 'Action': 'OrderPlaced', 'CustomerID': _gtm2.default.getUserId(), 'leadid': orderId, 'event': 'cod-doctor-appointment-booked', 'mrp': data.mrp
                                };
                                _gtm2.default.sendEvent({ data: analyticData });
                            }
                        });
                        info = JSON.stringify(info);

                        _storage2.default.setAppointmentDetails(info).then(function (setCookie) {
                            if (_this2.state.payment_success) {
                                if (isLab && isLab.length > 0) {
                                    var labData = {
                                        'Category': 'ConsumerApp', 'Action': 'LabAppointmentBooked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': appointmentId, 'event': 'lab-appointment-booked'
                                    };

                                    _gtm2.default.sendEvent({ data: labData });
                                }

                                if (isDoctor && Object.keys(isDoctor).length > 0) {
                                    var docData = {
                                        'Category': 'ConsumerApp', 'Action': 'DoctorAppointmentBooked', 'CustomerID': _gtm2.default.getUserId(), 'leadid': appointmentId, 'event': 'doctor-appointment-booked'
                                    };
                                    _gtm2.default.sendEvent({ data: docData });
                                }

                                var analyticData = {
                                    'Category': 'ConsumerApp', 'Action': 'OrderPlaced', 'CustomerID': _gtm2.default.getUserId(), 'leadid': orderId, 'event': 'order-booked'
                                };
                                _gtm2.default.sendEvent({ data: analyticData });
                                _this2.props.history.replace(_this2.props.location.pathname + "?hide_button=true");

                                var criteo_data = {
                                    'event': "trackTransaction", 'id': orderId, 'item': [{ 'id': "1", 'price': deal_price, 'quantity': 1 }]
                                };

                                _criteo2.default.sendData(criteo_data);
                            }
                        });
                    }
                }).catch(function (e) {});
            }
        }
    }, {
        key: 'viewDetail',
        value: function viewDetail(item) {
            if (item.booking_id) {
                if (item.data.doctor) {
                    this.props.history.push('/opd/appointment/' + item.booking_id);
                } else {
                    this.props.history.push('/lab/appointment/' + item.booking_id);
                }
            } else {
                this.props.history.push('/cart');
            }
        }
    }, {
        key: 'navigateToSBI',
        value: function navigateToSBI() {
            window.open('http://13.235.199.36/webcore/docprimecallback', '_blank');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

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
                                'section',
                                { className: 'booking-confirm-screen' },
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
                                                'h4',
                                                { className: 'shoping-cart-main-heading' },
                                                'Your Appointments'
                                            ),
                                            this.state.items.map(function (item, i) {
                                                return _react2.default.createElement(
                                                    'div',
                                                    { key: i, className: 'widget mrb-15 mrng-top-12 p-relative pb-5' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        null,
                                                        item.booking_id ? _react2.default.createElement(
                                                            'p',
                                                            { className: 'cart-appntmnt' },
                                                            'Transaction success '
                                                        ) : _react2.default.createElement(
                                                            'p',
                                                            { className: 'cart-appntmnt-failed' },
                                                            'Transaction Failed '
                                                        ),
                                                        item.booking_id ? _react2.default.createElement(
                                                            'p',
                                                            { className: 'cartBooking' },
                                                            'Booking ID : ',
                                                            item.booking_id
                                                        ) : ""
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: item.booking_id ? "" : "cart-card-blur-opacity" },
                                                        !item.is_vip_member && !item.covered_under_vip ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'shopng-cart-price' },
                                                            item.payment_type == 3 ? _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                item.data.profile && item.data.profile.name ? item.data.profile.name : ''
                                                            ) : item.payment_type == 1 || item.payment_type == 4 ? _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                _react2.default.createElement('img', { src: "/assets" + "/img/rupee-icon.svg", alt: 'rupee-icon', className: 'icon-rupee' }),
                                                                " " + item.effective_price
                                                            ) : item.payment_type == 2 ? _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                _react2.default.createElement('img', { src: "/assets" + "/img/rupee-icon.svg", alt: 'rupee-icon', className: 'icon-rupee' }),
                                                                " " + (parseInt(item.cod_deal_price) - (parseInt(item.discount) || 0))
                                                            ) : _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                _react2.default.createElement('img', { src: "/assets" + "/img/rupee-icon.svg", alt: 'rupee-icon', className: 'icon-rupee' }),
                                                                " " + item.mrp
                                                            )
                                                        ) : _react2.default.createElement(
                                                            'div',
                                                            { className: 'shopng-cart-price' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'text-right mb-2' },
                                                                item.is_gold_member ? _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/gold-sm.png' }) : _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/viplog.png' })
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                '\u20B9 ',
                                                                item.effective_price,
                                                                ' ',
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'cstm-doc-cut-price' },
                                                                    '\u20B9 ',
                                                                    item.mrp,
                                                                    ' '
                                                                )
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'widget-header dr-qucik-info' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    null,
                                                                    _react2.default.createElement(
                                                                        _initialsPicture2.default,
                                                                        { name: item.data.doctor ? item.data.doctor.name : item.data.lab.name, has_image: !!item.data.thumbnail, className: item.data.doctor && item.data.doctor.name ? 'img-round mt-0' : 'initialsPicture-ls mt-0' },
                                                                        _react2.default.createElement('img', { src: item.data.thumbnail,
                                                                            className: item.data.doctor ? 'img-round' : 'fltr-usr-image-lab' })
                                                                    )
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'dr-profile mrt-10' },
                                                                item.data.doctor ? _react2.default.createElement(
                                                                    'h1',
                                                                    { className: 'dr-name' },
                                                                    item.data.doctor.name
                                                                ) : _react2.default.createElement(
                                                                    'h1',
                                                                    { className: 'dr-name' },
                                                                    item.data.lab.name
                                                                ),
                                                                item.data.hospital ? _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'clinic-name text-sm' },
                                                                    item.data.hospital.name
                                                                ) : "",
                                                                item.payment_type == 2 ? _react2.default.createElement(
                                                                    'span',
                                                                    { style: { top: -50 }, className: 'pay-at-clinic' },
                                                                    'Pay at Clinic'
                                                                ) : ""
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'shopping-card-details-list' },
                                                            _react2.default.createElement(
                                                                'ul',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'li',
                                                                    { className: 'cart-viewdtls-container' },
                                                                    _react2.default.createElement(
                                                                        'p',
                                                                        null,
                                                                        _react2.default.createElement(
                                                                            'span',
                                                                            { className: 'shpng-dtls-ico' },
                                                                            _react2.default.createElement('img', { src: "/assets" + "/img/watch-date.svg", style: { marginTop: '2px', width: '15px' } })
                                                                        ),
                                                                        new Date(item.time_slot_start).toLocaleDateString(),
                                                                        ' | ',
                                                                        new Date(item.time_slot_start).toLocaleTimeString()
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { onClick: _this3.viewDetail.bind(_this3, item), className: 'float-right cart-viewdtls-btn' },
                                                                        item.booking_id ? "View Detail" : "View in Cart"
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        item.payment_mode ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'd-flex align-item-center jc-spaceb shopping-card-details-list fw-500' },
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Payment mode'
                                                            ),
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                item.payment_mode
                                                            )
                                                        ) : ''
                                                    )
                                                );
                                            }),
                                            this.state.data && this.state.data.appointment_via_sbi ? _react2.default.createElement(
                                                'div',
                                                { className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container ' },
                                                _react2.default.createElement(
                                                    'button',
                                                    { className: 'v-btn-primary book-btn-mrgn-adjust ', onClick: function onClick() {
                                                            _this3.navigateToSBI();
                                                        } },
                                                    'Go Back To SBIG Home'
                                                )
                                            ) : ''
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', noChatButton: true, msgTemplate: 'gold_general_template' })
                    )
                ),
                _react2.default.createElement(_staticDisclaimer2.default, null)
            );
        }
    }]);

    return OrderSummaryView;
}(_react2.default.Component);

exports.default = OrderSummaryView;

/***/ }),

/***/ "./dev/js/containers/commons/OrderSummary.js":
/*!***************************************************!*\
  !*** ./dev/js/containers/commons/OrderSummary.js ***!
  \***************************************************/
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

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _orderSummary = __webpack_require__(/*! ../../components/commons/orderSummary */ "./dev/js/components/commons/orderSummary/index.js");

var _orderSummary2 = _interopRequireDefault(_orderSummary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderSummary = function (_React$Component) {
    _inherits(OrderSummary, _React$Component);

    function OrderSummary(props) {
        _classCallCheck(this, OrderSummary);

        var _this = _possibleConstructorReturn(this, (OrderSummary.__proto__ || Object.getPrototypeOf(OrderSummary)).call(this, props));

        if (!_storage2.default.checkAuth()) {
            _this.props.history.replace('/login?callback=/');
        }
        return _this;
    }

    _createClass(OrderSummary, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (_storage2.default.checkAuth()) {
                this.props.getCartItems();
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_orderSummary2.default, this.props);
        }
    }]);

    return OrderSummary;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {

    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchOrderSummary: function fetchOrderSummary(order_id) {
            return dispatch((0, _index.fetchOrderSummary)(order_id));
        },
        getCartItems: function getCartItems() {
            return dispatch((0, _index.getCartItems)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrderSummary);

/***/ }),

/***/ "./dev/js/helpers/criteo.js":
/*!**********************************!*\
  !*** ./dev/js/helpers/criteo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var CRITEO = {
	sendData: function sendData(data) {
		try {

			if (window) {

				window.criteo_q = window.criteo_q || [];
				var deviceType = navigator ? /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d" : '';

				window.criteo_q.push({ 'event': "setAccount", account: 57439 }, // You should never update this line
				{ 'event': "setEmail", 'email': '' }, { 'event': "setSiteType", type: deviceType }, data);
			}
		} catch (e) {}
	}
};

exports.default = CRITEO;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL29yZGVyU3VtbWFyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL29yZGVyU3VtbWFyeS9vcmRlclN1bW1hcnlWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvT3JkZXJTdW1tYXJ5LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9oZWxwZXJzL2NyaXRlby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaXNWaXAiLCJjb2xvciIsImZvbnRTaXplIiwicGFkZGluZ0JvdHRvbSIsIk9yZGVyU3VtbWFyeSIsIk9yZGVyU3VtbWFyeVZpZXciLCJwcm9wcyIsInN0YXRlIiwiaXRlbXMiLCJwYXltZW50X3N1Y2Nlc3MiLCJsb2NhdGlvbiIsInNlYXJjaCIsImluY2x1ZGVzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJTVE9SQUdFIiwiY2hlY2tBdXRoIiwiZmV0Y2hPcmRlclN1bW1hcnkiLCJtYXRjaCIsInBhcmFtcyIsImlkIiwidGhlbiIsInJlcyIsImRhdGEiLCJsZW5ndGgiLCJzZXRTdGF0ZSIsIm9yZGVySWQiLCJkZWFsX3ByaWNlIiwiaW5mbyIsImlzTGFiIiwidGVzdHMiLCJpc0RvY3RvciIsImRvY3RvciIsImFwcG9pbnRtZW50SWQiLCJib29raW5nX2lkIiwibWFwIiwicHVzaCIsIm1ycCIsInBhcnNlSW50IiwicGF5bWVudF90eXBlIiwiYW5hbHl0aWNEYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsInNldEFwcG9pbnRtZW50RGV0YWlscyIsInNldENvb2tpZSIsImxhYkRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZG9jRGF0YSIsImhpc3RvcnkiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJjcml0ZW9fZGF0YSIsIkNSSVRFTyIsInNlbmREYXRhIiwiY2F0Y2giLCJlIiwiaXRlbSIsIm9wZW4iLCJpIiwiaXNfdmlwX21lbWJlciIsImNvdmVyZWRfdW5kZXJfdmlwIiwicHJvZmlsZSIsIm5hbWUiLCJBU1NFVFNfQkFTRV9VUkwiLCJlZmZlY3RpdmVfcHJpY2UiLCJjb2RfZGVhbF9wcmljZSIsImRpc2NvdW50IiwiaXNfZ29sZF9tZW1iZXIiLCJsYWIiLCJ0aHVtYm5haWwiLCJob3NwaXRhbCIsInRvcCIsIm1hcmdpblRvcCIsIndpZHRoIiwiRGF0ZSIsInRpbWVfc2xvdF9zdGFydCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRvTG9jYWxlVGltZVN0cmluZyIsInZpZXdEZXRhaWwiLCJiaW5kIiwicGF5bWVudF9tb2RlIiwiYXBwb2ludG1lbnRfdmlhX3NiaSIsIm5hdmlnYXRlVG9TQkkiLCJSZWFjdCIsIkNvbXBvbmVudCIsImdldENhcnRJdGVtcyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib3JkZXJfaWQiLCJjcml0ZW9fcSIsImRldmljZVR5cGUiLCJuYXZpZ2F0b3IiLCJ0ZXN0IiwidXNlckFnZW50IiwiYWNjb3VudCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUNlLGdCQUFlO0FBQUEsUUFBWkEsS0FBWSxRQUFaQSxLQUFZOztBQUM3QixXQUFRO0FBQUE7QUFBQSxVQUFLLDZCQUEwQkEsUUFBTSxrQkFBTixHQUF5QixFQUFuRCxDQUFMO0FBQ087QUFBQTtBQUFBLGNBQUcsV0FBVSxlQUFiLEVBQTZCLE9BQU8sRUFBRUMsT0FBTyxTQUFULEVBQW9CQyxVQUFVLEVBQTlCLEVB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LEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Y7QUFDVjtBQUNGO0FBQ007QUFDRjtBQUNKO0FBQ0Y7QUFDSTtBQUNGO0FBQ2M7QUFDRjtBQUNWO0FBQ0Y7QUFDYztBQUNGO0FBQ0o7QUFDRjtBQUNJIiwiZmlsZSI6IjgxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gJy4vb3JkZXJTdW1tYXJ5VmlldydcblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJTdW1tYXJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExlZnRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbW1vbnMvUmlnaHRCYXInXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnXG5pbXBvcnQgQ1JJVEVPIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvY3JpdGVvLmpzJ1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL3N0YXRpY0Rpc2NsYWltZXIuanMnXG5cbmNsYXNzIE9yZGVyU3VtbWFyeVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgcGF5bWVudF9zdWNjZXNzOiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygncGF5bWVudF9zdWNjZXNzJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoT3JkZXJTdW1tYXJ5KHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtczogcmVzLmRhdGEsIGRhdGE6IHJlcyB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcmRlcklkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlYWxfcHJpY2UgPSAwXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmZvID0ge31cbiAgICAgICAgICAgICAgICAgICAgaW5mb1tvcmRlcklkXSA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0xhYiA9IHJlcy5kYXRhWzBdLmRhdGEudGVzdHNcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzRG9jdG9yID0gcmVzLmRhdGFbMF0uZGF0YS5kb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFwcG9pbnRtZW50SWQgPSByZXMuZGF0YVswXS5ib29raW5nX2lkXG4gICAgICAgICAgICAgICAgICAgIHJlcy5kYXRhLm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb1tvcmRlcklkXS5wdXNoKHsgJ2Jvb2tpbmdfaWQnOiBkYXRhLmJvb2tpbmdfaWQsICdtcnAnOiBkYXRhLm1ycCwgJ2RlYWxfcHJpY2UnOiBkYXRhLmRlYWxfcHJpY2UgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2UgKz0gcGFyc2VJbnQoZGF0YS5kZWFsX3ByaWNlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXltZW50X3R5cGUgJiYgZGF0YS5wYXltZW50X3R5cGUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmFseXRpY0RhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3JkZXJQbGFjZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSwgJ2xlYWRpZCc6IG9yZGVySWQsICdldmVudCc6ICdjb2QtZG9jdG9yLWFwcG9pbnRtZW50LWJvb2tlZCcsICdtcnAnOiBkYXRhLm1ycFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGluZm8gPSBKU09OLnN0cmluZ2lmeShpbmZvKVxuXG4gICAgICAgICAgICAgICAgICAgIFNUT1JBR0Uuc2V0QXBwb2ludG1lbnREZXRhaWxzKGluZm8pLnRoZW4oKHNldENvb2tpZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucGF5bWVudF9zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNMYWIgJiYgaXNMYWIubGVuZ3RoID4wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYkRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYkFwcG9pbnRtZW50Qm9va2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiBhcHBvaW50bWVudElkLCAnZXZlbnQnOiAnbGFiLWFwcG9pbnRtZW50LWJvb2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBsYWJEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNEb2N0b3IgJiYgT2JqZWN0LmtleXMoaXNEb2N0b3IpLmxlbmd0aCA+MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkb2NEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JBcHBvaW50bWVudEJvb2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogYXBwb2ludG1lbnRJZCwgJ2V2ZW50JzogJ2RvY3Rvci1hcHBvaW50bWVudC1ib29rZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRvY0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09yZGVyUGxhY2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCksICdsZWFkaWQnOiBvcmRlcklkLCAnZXZlbnQnOiAnb3JkZXItYm9va2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogYW5hbHl0aWNEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSArIFwiP2hpZGVfYnV0dG9uPXRydWVcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjcml0ZW9fZGF0YSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiBcInRyYWNrVHJhbnNhY3Rpb25cIiwgJ2lkJzogb3JkZXJJZCwgJ2l0ZW0nOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICdpZCc6IFwiMVwiLCAncHJpY2UnOiBkZWFsX3ByaWNlLCAncXVhbnRpdHknOiAxIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENSSVRFTy5zZW5kRGF0YShjcml0ZW9fZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZpZXdEZXRhaWwoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5ib29raW5nX2lkKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5kYXRhLmRvY3Rvcikge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2FwcG9pbnRtZW50LyR7aXRlbS5ib29raW5nX2lkfWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiL2FwcG9pbnRtZW50LyR7aXRlbS5ib29raW5nX2lkfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NhcnQnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb1NCSSgpe1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cDovLzEzLjIzNS4xOTkuMzYvd2ViY29yZS9kb2NwcmltZWNhbGxiYWNrJywgJ19ibGFuaycpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExlZnRCYXIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTcgY2VudGVyLWNvbHVtblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9va2luZy1jb25maXJtLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJzaG9waW5nLWNhcnQtbWFpbi1oZWFkaW5nXCI+WW91ciBBcHBvaW50bWVudHM8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTE1IG1ybmctdG9wLTEyIHAtcmVsYXRpdmUgcGItNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYm9va2luZ19pZCA/IDxwIGNsYXNzTmFtZT1cImNhcnQtYXBwbnRtbnRcIj5UcmFuc2FjdGlvbiBzdWNjZXNzIDwvcD4gOiA8cCBjbGFzc05hbWU9XCJjYXJ0LWFwcG50bW50LWZhaWxlZFwiPlRyYW5zYWN0aW9uIEZhaWxlZCA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ib29raW5nX2lkID8gPHAgY2xhc3NOYW1lPVwiY2FydEJvb2tpbmdcIj5Cb29raW5nIElEIDoge2l0ZW0uYm9va2luZ19pZH08L3A+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2l0ZW0uYm9va2luZ19pZCA/IFwiXCIgOiBcImNhcnQtY2FyZC1ibHVyLW9wYWNpdHlcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0uaXNfdmlwX21lbWJlciAmJiAhaXRlbS5jb3ZlcmVkX3VuZGVyX3ZpcD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BuZy1jYXJ0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGF5bWVudF90eXBlID09IDMgPyA8c3Bhbj57aXRlbS5kYXRhLnByb2ZpbGUgJiYgaXRlbS5kYXRhLnByb2ZpbGUubmFtZSA/IGl0ZW0uZGF0YS5wcm9maWxlLm5hbWUgOiAnJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLnBheW1lbnRfdHlwZSA9PSAxIHx8IGl0ZW0ucGF5bWVudF90eXBlID09IDQgPyA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ydXBlZS1pY29uLnN2Z1wifSBhbHQ9XCJydXBlZS1pY29uXCIgY2xhc3NOYW1lPVwiaWNvbi1ydXBlZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIiArIGl0ZW0uZWZmZWN0aXZlX3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gOiBpdGVtLnBheW1lbnRfdHlwZSA9PSAyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcnVwZWUtaWNvbi5zdmdcIn0gYWx0PVwicnVwZWUtaWNvblwiIGNsYXNzTmFtZT1cImljb24tcnVwZWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIiArICggcGFyc2VJbnQoaXRlbS5jb2RfZGVhbF9wcmljZSktKHBhcnNlSW50KGl0ZW0uZGlzY291bnQpfHwwKSApIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9ydXBlZS1pY29uLnN2Z1wifSBhbHQ9XCJydXBlZS1pY29uXCIgY2xhc3NOYW1lPVwiaWNvbi1ydXBlZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwiICsgaXRlbS5tcnB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJzaG9wbmctY2FydC1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgY2xhc3NOYW1lPVwidmlwLW1haW4taWNvIGltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7igrkge2l0ZW0uZWZmZWN0aXZlX3ByaWNlfSA8c3BhbiBjbGFzc05hbWU9XCJjc3RtLWRvYy1jdXQtcHJpY2VcIj7igrkge2l0ZW0ubXJwfSA8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIGRyLXF1Y2lrLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtpdGVtLmRhdGEuZG9jdG9yID8gaXRlbS5kYXRhLmRvY3Rvci5uYW1lIDogaXRlbS5kYXRhLmxhYi5uYW1lfSBoYXNfaW1hZ2U9eyEhaXRlbS5kYXRhLnRodW1ibmFpbH0gY2xhc3NOYW1lPXtpdGVtLmRhdGEuZG9jdG9yICYmIGl0ZW0uZGF0YS5kb2N0b3IubmFtZSA/ICdpbWctcm91bmQgbXQtMCcgOiAnaW5pdGlhbHNQaWN0dXJlLWxzIG10LTAnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5kYXRhLnRodW1ibmFpbH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtLmRhdGEuZG9jdG9yID8gJ2ltZy1yb3VuZCcgOiAnZmx0ci11c3ItaW1hZ2UtbGFiJyB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luaXRpYWxzUGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkci1wcm9maWxlIG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRhdGEuZG9jdG9yID8gPGgxIGNsYXNzTmFtZT1cImRyLW5hbWVcIj57aXRlbS5kYXRhLmRvY3Rvci5uYW1lfTwvaDE+IDogPGgxIGNsYXNzTmFtZT1cImRyLW5hbWVcIj57aXRlbS5kYXRhLmxhYi5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRhdGEuaG9zcGl0YWwgPyA8cCBjbGFzc05hbWU9XCJjbGluaWMtbmFtZSB0ZXh0LXNtXCI+e2l0ZW0uZGF0YS5ob3NwaXRhbC5uYW1lfTwvcD4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBheW1lbnRfdHlwZSA9PSAyID8gPHNwYW4gc3R5bGU9e3sgdG9wOiAtNTAgfX0gY2xhc3NOYW1lPVwicGF5LWF0LWNsaW5pY1wiPlBheSBhdCBDbGluaWM8L3NwYW4+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcHBpbmctY2FyZC1kZXRhaWxzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJ0LXZpZXdkdGxzLWNvbnRhaW5lclwiPjxwPjxzcGFuIGNsYXNzTmFtZT1cInNocG5nLWR0bHMtaWNvXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YXRjaC1kYXRlLnN2Z1wifSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcycHgnLCB3aWR0aDogJzE1cHgnIH19IC8+PC9zcGFuPnsobmV3IERhdGUoaXRlbS50aW1lX3Nsb3Rfc3RhcnQpKS50b0xvY2FsZURhdGVTdHJpbmcoKX0gfCB7KG5ldyBEYXRlKGl0ZW0udGltZV9zbG90X3N0YXJ0KSkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy52aWV3RGV0YWlsLmJpbmQodGhpcywgaXRlbSl9IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGNhcnQtdmlld2R0bHMtYnRuXCI+e2l0ZW0uYm9va2luZ19pZCA/IFwiVmlldyBEZXRhaWxcIiA6IFwiVmlldyBpbiBDYXJ0XCJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBheW1lbnRfbW9kZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtLWNlbnRlciBqYy1zcGFjZWIgc2hvcHBpbmctY2FyZC1kZXRhaWxzLWxpc3QgZnctNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBheW1lbnQgbW9kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ucGF5bWVudF9tb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj46JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnN0YXRlLmRhdGEuYXBwb2ludG1lbnRfdmlhX3NiaSA/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHN0aWNreS1idG4gcC0wIHYtYnRuICBidG4tbGcgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgdGV4dC1sZyBidXR0b25zLWFkZGNhcnQtY29udGFpbmVyIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuLXByaW1hcnkgYm9vay1idG4tbXJnbi1hZGp1c3QgXCIgb25DbGljaz17KCkgPT4geyB0aGlzLm5hdmlnYXRlVG9TQkkoKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gQmFjayBUbyBTQklHIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBleHRyYUNsYXNzPVwiIGNoYXQtZmxvYXQtYnRuLTJcIiBub0NoYXRCdXR0b249e3RydWV9IG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPERpc2NsYWltZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBPcmRlclN1bW1hcnlWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZmV0Y2hPcmRlclN1bW1hcnksIGdldENhcnRJdGVtcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmltcG9ydCBPcmRlclN1bW1hcnlWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9vcmRlclN1bW1hcnknXG5cblxuY2xhc3MgT3JkZXJTdW1tYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgaWYgKCFTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShgL2xvZ2luP2NhbGxiYWNrPS9gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldENhcnRJdGVtcygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxPcmRlclN1bW1hcnlWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmZXRjaE9yZGVyU3VtbWFyeTogKG9yZGVyX2lkKSA9PiBkaXNwYXRjaChmZXRjaE9yZGVyU3VtbWFyeShvcmRlcl9pZCkpLFxuICAgICAgICBnZXRDYXJ0SXRlbXM6ICgpID0+IGRpc3BhdGNoKGdldENhcnRJdGVtcygpKSxcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoT3JkZXJTdW1tYXJ5KTtcbiIsIlxuY29uc3QgQ1JJVEVPID0ge1xuXG5cdHNlbmREYXRhKGRhdGEgKXtcblx0XHR0cnl7XG5cblx0XHRcdGlmKHdpbmRvdyl7XG5cdFx0XHRcblx0XHRcdFx0d2luZG93LmNyaXRlb19xID0gd2luZG93LmNyaXRlb19xIHx8IFtdXG5cdFx0XHRcdHZhciBkZXZpY2VUeXBlID0gbmF2aWdhdG9yPy9pUGFkLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gXCJ0XCIgOiAvTW9iaWxlfGlQKGhvbmV8b2QpfEFuZHJvaWR8QmxhY2tCZXJyeXxJRU1vYmlsZXxTaWxrLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gXCJtXCIgOiBcImRcIjonJztcblxuXHRcdFx0XHR3aW5kb3cuY3JpdGVvX3EucHVzaCh7ICdldmVudCc6IFwic2V0QWNjb3VudFwiLCBhY2NvdW50OiA1NzQzOX0sIC8vIFlvdSBzaG91bGQgbmV2ZXIgdXBkYXRlIHRoaXMgbGluZVxuXHRcdFx0XHR7J2V2ZW50JzogXCJzZXRFbWFpbFwiLCAnZW1haWwnOiAnJ30sXG5cdFx0XHRcdHsgJ2V2ZW50JzogXCJzZXRTaXRlVHlwZVwiLCB0eXBlOiBkZXZpY2VUeXBlfSxcblx0XHRcdFx0ZGF0YVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cblx0XHR9Y2F0Y2goZSl7XG5cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ1JJVEVPIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsImltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gXCIuL01lbW9yeVJvdXRlclwiO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gXCIuL1Byb21wdFwiO1xuZXhwb3J0IHsgX1Byb21wdCBhcyBQcm9tcHQgfTtcbmltcG9ydCBfUmVkaXJlY3QgZnJvbSBcIi4vUmVkaXJlY3RcIjtcbmV4cG9ydCB7IF9SZWRpcmVjdCBhcyBSZWRpcmVjdCB9O1xuaW1wb3J0IF9Sb3V0ZSBmcm9tIFwiLi9Sb3V0ZVwiO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcbmV4cG9ydCB7IF9Sb3V0ZXIgYXMgUm91dGVyIH07XG5pbXBvcnQgX1N0YXRpY1JvdXRlciBmcm9tIFwiLi9TdGF0aWNSb3V0ZXJcIjtcbmV4cG9ydCB7IF9TdGF0aWNSb3V0ZXIgYXMgU3RhdGljUm91dGVyIH07XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwiLi9Td2l0Y2hcIjtcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX2dlbmVyYXRlUGF0aCBmcm9tIFwiLi9nZW5lcmF0ZVBhdGhcIjtcbmV4cG9ydCB7IF9nZW5lcmF0ZVBhdGggYXMgZ2VuZXJhdGVQYXRoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tIFwiLi9tYXRjaFBhdGhcIjtcbmV4cG9ydCB7IF9tYXRjaFBhdGggYXMgbWF0Y2hQYXRoIH07XG5pbXBvcnQgX3dpdGhSb3V0ZXIgZnJvbSBcIi4vd2l0aFJvdXRlclwiO1xuZXhwb3J0IHsgX3dpdGhSb3V0ZXIgYXMgd2l0aFJvdXRlciB9OyJdLCJzb3VyY2VSb290IjoiIn0=