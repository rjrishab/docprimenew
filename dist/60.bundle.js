(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

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

/***/ "./dev/js/components/commons/cart/cartItem.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/cart/cartItem.js ***!
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

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var CartItem = function (_React$Component) {
    _inherits(CartItem, _React$Component);

    function CartItem(props) {
        _classCallCheck(this, CartItem);

        var _this = _possibleConstructorReturn(this, (CartItem.__proto__ || Object.getPrototypeOf(CartItem)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(CartItem, [{
        key: 'removeFromCart',
        value: function removeFromCart(id) {
            this.props.removeFromCart(id);
        }
    }, {
        key: 'edit',
        value: function edit(item) {
            var _props = this.props,
                valid = _props.valid,
                product_id = _props.product_id,
                mrp = _props.mrp,
                deal_price = _props.deal_price,
                id = _props.id,
                data = _props.data;
            var _props$actual_data = this.props.actual_data,
                lab = _props$actual_data.lab,
                test_ids = _props$actual_data.test_ids,
                doctor = _props$actual_data.doctor,
                hospital = _props$actual_data.hospital,
                coupon_code = _props$actual_data.coupon_code,
                profile = _props$actual_data.profile,
                procedure_ids = _props$actual_data.procedure_ids,
                is_home_pickup = _props$actual_data.is_home_pickup,
                address = _props$actual_data.address,
                start_date = _props$actual_data.start_date,
                start_time = _props$actual_data.start_time;

            // doctor

            if (product_id == 1) {
                this.setOpdBooking(this.props);
                return;
            }

            // lab
            if (product_id == 2) {
                this.setLabBooking(this.props);
                return;
            }
        }
    }, {
        key: 'buildOpdTimeSlot',
        value: function buildOpdTimeSlot(data) {

            var time = {
                text: new Date(data.data.date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).split(' ')[0],
                deal_price: data.consultation.deal_price,
                is_available: true,
                mrp: data.consultation.mrp,
                fees: data.consultation.fees,
                price: data.consultation.deal_price,
                title: new Date(data.data.date).getHours() >= 12 ? 'PM' : 'AM',
                value: new Date(data.data.date).getHours() + new Date(data.data.date).getMinutes() / 60
            };

            return time;
        }
    }, {
        key: 'buildLabTimeSlot',
        value: function buildLabTimeSlot(data) {
            /*let timeSlot = {
                    date: new Date(data.data.date),
                    time: time_slot
                }*/
            /*let time = {
                deal_price: data.deal_price,
                is_available: true,
                mrp: data.mrp,
                price: data.deal_price,
                time.text :new Date(data.data.date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).split(' ')[0]
                time.title : new Date(data.data.date).getHours() >= 12 ? 'PM' : 'AM',
                time.value : new Date(data.data.date).getHours() + new Date(data.data.date).getMinutes() / 60
            }*/
            var time = {};

            if (data.actual_data.multi_timings_enabled) {
                var timeSelected = {};
                var pathology_timing = {};
                var radiology_timing = {};
                var common_timing = {};
                var finalTests = {};
                var r_pickup = 'home';
                var p_pickup = 'home';
                data.data.tests.map(function (test) {

                    if (data.data.selected_timings_type == 'common') {

                        if (timeSelected['all']) {
                            finalTests[test.test_id] = _extends({}, timeSelected['all'], { test_id: test.test_id, test_name: '', is_home_pickup: test.is_home_pickup });
                        } else {
                            common_timing = {
                                text: new Date(test.date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).split(' ')[0],
                                deal_price: test.deal_price,
                                is_available: true,
                                mrp: test.mrp,
                                price: test.deal_price,
                                title: new Date(test.date).getHours() >= 12 ? 'PM' : 'AM',
                                value: new Date(test.date).getHours() + new Date(test.date).getMinutes() / 60
                            };
                            p_pickup = test.is_home_pickup ? 'home' : 'lab';
                            r_pickup = test.is_home_pickup ? 'home' : 'lab';
                            timeSelected['all'] = {
                                date: new Date(test.date),
                                time: common_timing,
                                type: 'all',
                                test_id: test.test_id
                            };
                            finalTests[test.test_id] = _extends({}, timeSelected['all'], { test_id: test.test_id, test_name: test.test_name, is_home_pickup: test.is_home_pickup
                                //timeSelected['selectedTestsTimeSlot'] = timeSelected['selectedTestsTimeSlot']?{...timeSelected['selectedTestsTimeSlot']}:{}

                            });
                        }
                    } else {

                        if (test.type == 2) {
                            if (timeSelected['pathology']) {
                                finalTests[test.test_id] = _extends({}, timeSelected['pathology'], { test_id: test.test_id, test_name: '', is_home_pickup: test.is_home_pickup });
                            } else {
                                pathology_timing = {
                                    text: new Date(test.date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).split(' ')[0],
                                    deal_price: test.deal_price,
                                    is_available: true,
                                    mrp: test.mrp,
                                    price: test.deal_price,
                                    title: new Date(test.date).getHours() >= 12 ? 'PM' : 'AM',
                                    value: new Date(test.date).getHours() + new Date(test.date).getMinutes() / 60
                                };
                                p_pickup = test.is_home_pickup ? 'home' : 'lab';
                                timeSelected['pathology'] = {
                                    date: new Date(test.date),
                                    time: pathology_timing,
                                    type: 'pathology',
                                    test_id: test.test_id
                                };
                                finalTests[test.test_id] = _extends({}, timeSelected['pathology'], { test_id: test.test_id, test_name: test.test_name, is_home_pickup: test.is_home_pickup
                                    //timeSelected['selectedTestsTimeSlot'] = timeSelected['selectedTestsTimeSlot']?{...timeSelected['selectedTestsTimeSlot']}:{}

                                });
                            }
                        }

                        if (test.type == 1) {
                            if (timeSelected['radiology']) {
                                finalTests[test.test_id] = _extends({}, timeSelected['radiology'], { test_id: test.test_id, test_name: test.test_name, is_home_pickup: test.is_home_pickup });
                                timeSelected['radiology'][test.test_id] = _extends({}, timeSelected['radiology'], { test_id: test.test_id, test_name: test.test_name, is_home_pickup: test.is_home_pickup });
                            } else {
                                radiology_timing = {
                                    text: new Date(test.date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).split(' ')[0],
                                    deal_price: test.deal_price,
                                    is_available: true,
                                    mrp: test.mrp,
                                    price: test.deal_price,
                                    title: new Date(test.date).getHours() >= 12 ? 'PM' : 'AM',
                                    value: new Date(test.date).getHours() + new Date(test.date).getMinutes() / 60
                                };
                                r_pickup = test.is_home_pickup ? 'home' : 'lab';
                                timeSelected['radiology'] = {
                                    date: new Date(test.date),
                                    time: radiology_timing,
                                    type: 'radiology',
                                    test_id: test.test_id
                                };
                                timeSelected['radiology'][test.test_id] = _extends({}, timeSelected['radiology'], { test_id: test.test_id, test_name: test.test_name, is_home_pickup: test.is_home_pickup });

                                finalTests[test.test_id] = _extends({}, timeSelected['radiology'], { test_id: test.test_id, test_name: test.test_name, is_home_pickup: test.is_home_pickup });
                            }
                        }
                    }
                });
                var selectedType = {
                    r_pickup: r_pickup,
                    p_pickup: p_pickup
                };
                this.props.selectLabAppointmentType(selectedType);
                timeSelected['selectedTestsTimeSlot'] = finalTests;
                return timeSelected;
            }

            return time;
        }
    }, {
        key: 'getFormattedDate',
        value: function getFormattedDate(date) {
            date = new Date(date);
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
    }, {
        key: 'setOpdBooking',
        value: function setOpdBooking(data) {

            if (data.valid) {

                var time_slot = this.buildOpdTimeSlot(data);
                var timeSlot = {
                    date: new Date(data.data.date),
                    slot: '',
                    time: time_slot,
                    selectedDoctor: data.actual_data.doctor,
                    selectedClinic: data.actual_data.hospital
                };
                var extraTimeParams = null;
                if (timeSlot.date) {
                    extraTimeParams = this.getFormattedDate(timeSlot.date);
                }
                this.props.selectOpdTimeSLot(timeSlot, false, null, extraTimeParams);

                if (data.actual_data.coupon_code) {
                    var coupon_id = '';
                    var is_cashback = false;
                    var coupon_code = data.actual_data.coupon_code.length ? data.actual_data.coupon_code[0] : '';
                    if (data.data.coupons && data.data.coupons.length) {
                        coupon_id = data.data.coupons[0].id;
                        is_cashback = data.data.coupons[0].is_cashback;
                    }
                    if (coupon_code) {
                        this.props.applyCoupons('1', { code: coupon_code, coupon_id: coupon_id, is_cashback: is_cashback }, coupon_id, data.actual_data.doctor);
                    }
                }

                if (data.actual_data.payment_type >= 0 && data.actual_data.payment_type <= 2) {
                    this.props.select_opd_payment_type(data.actual_data.payment_type);
                }
            }

            this.props.selectProfile(data.actual_data.profile);
            if (data.actual_data.procedure_ids && data.actual_data.procedure_ids.length) {
                this.props.saveProfileProcedures('', '', data.actual_data.procedure_ids, true);
            }
            if (data.data.doctor && data.data.doctor.url) {
                this.props.history.push('/' + data.data.doctor.url + '/booking?doctor_id=' + data.actual_data.doctor + '&hospital_id=' + data.actual_data.hospital + '&cart_item=' + this.props.id);
            } else {
                this.props.history.push('/opd/doctor/' + data.actual_data.doctor + '/' + data.actual_data.hospital + '/bookdetails?cart_item=' + this.props.id);
            }
        }
    }, {
        key: 'setLabBooking',
        value: function setLabBooking(data) {
            this.props.clearAllTests();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = data.actual_data.test_ids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var curr_test = _step.value;

                    var curr = {};
                    curr.id = curr_test;
                    curr.extra_test = true;
                    curr.lab_id = data.actual_data.lab;
                    this.props.toggleDiagnosisCriteria('test', curr, true);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (data.actual_data && data.actual_data.pincode) {
                this.props.savePincode(data.actual_data.pincode);
            }

            this.props.selectProfile(data.actual_data.profile);
            if (data.valid) {
                var timeSlot = this.buildLabTimeSlot(data);

                var extraTimeParams = null;
                if (timeSlot.date) {
                    extraTimeParams = this.getFormattedDate(timeSlot.date);
                }
                this.props.selectLabTimeSLot(timeSlot, false, extraTimeParams);
                if (data.actual_data.coupon_code) {

                    var coupon_id = '';
                    var is_cashback = false;
                    var coupon_code = data.actual_data.coupon_code.length ? data.actual_data.coupon_code[0] : '';
                    if (data.data.coupons && data.data.coupons.length) {
                        coupon_id = data.data.coupons[0].id;
                        is_cashback = data.data.coupons[0].is_cashback;
                    }

                    if (coupon_code) {
                        this.props.applyCoupons('2', { code: coupon_code, coupon_id: coupon_id, is_cashback: is_cashback }, coupon_id, data.actual_data.lab);
                    }
                }
                /*if (data.actual_data.is_home_pickup) {
                    this.props.selectLabAppointmentType('home')
                } else {
                    this.props.selectLabAppointmentType('lab')
                }*/
            }

            if (data.data.lab && data.data.lab.url) {
                this.props.history.push('/' + data.data.lab.url + '/booking?lab_id=' + data.actual_data.lab + '&cart_item=' + this.props.id);
            } else {
                this.props.history.push('/lab/' + data.actual_data.lab + '/book?cart_item=' + this.props.id);
            }
        }
    }, {
        key: 'is_item_old',
        value: function is_item_old(date) {
            return new Date() > new Date(date);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                valid = _props2.valid,
                product_id = _props2.product_id,
                mrp = _props2.mrp,
                deal_price = _props2.deal_price,
                id = _props2.id,
                is_enabled_for_cod = _props2.is_enabled_for_cod,
                cod_deal_price = _props2.cod_deal_price;
            var _props$data = this.props.data,
                lab = _props$data.lab,
                tests = _props$data.tests,
                doctor = _props$data.doctor,
                hospital = _props$data.hospital,
                coupons = _props$data.coupons,
                profile = _props$data.profile,
                date = _props$data.date,
                thumbnail = _props$data.thumbnail,
                procedures = _props$data.procedures;
            var _props$actual_data2 = this.props.actual_data,
                is_home_pickup = _props$actual_data2.is_home_pickup,
                payment_type = _props$actual_data2.payment_type,
                insurance_message = _props$actual_data2.insurance_message,
                is_appointment_insured = _props$actual_data2.is_appointment_insured,
                included_in_user_plan = _props$actual_data2.included_in_user_plan,
                cover_under_vip = _props$actual_data2.cover_under_vip,
                is_vip_member = _props$actual_data2.is_vip_member,
                vip_amount = _props$actual_data2.vip_amount,
                is_gold_member = _props$actual_data2.is_gold_member,
                vip_convenience_amount = _props$actual_data2.vip_convenience_amount,
                amount_to_be_paid = _props$actual_data2.amount_to_be_paid;

            if (date) {
                date = new Date(date);
            }
            var parsed = queryString.parse(this.props.location.search);
            var is_vip_applicable = is_vip_member && cover_under_vip;
            var is_gold_price = vip_amount + vip_convenience_amount;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'widget mrb-15 mrng-top-12 p-relative' },
                    _react2.default.createElement(
                        'div',
                        { className: valid ? "" : "cart-card-blur-opacity" },
                        is_gold_member ? _react2.default.createElement(
                            'div',
                            { className: 'shopng-cart-price' },
                            _react2.default.createElement(
                                'p',
                                null,
                                '\u20B9 ',
                                amount_to_be_paid,
                                ' ',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'shopng-cart-price-cut' },
                                    '\u20B9 ',
                                    mrp
                                )
                            )
                        ) : is_vip_applicable ? _react2.default.createElement(
                            'div',
                            { className: 'shopng-cart-price' },
                            _react2.default.createElement(
                                'p',
                                null,
                                '\u20B9 ',
                                amount_to_be_paid,
                                ' ',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'shopng-cart-price-cut' },
                                    '\u20B9 ',
                                    mrp
                                )
                            )
                        ) : '',
                        is_vip_applicable || is_gold_member ? '' : is_appointment_insured ? _react2.default.createElement(
                            'div',
                            { className: 'shopng-cart-price ins-val-bx' },
                            'Covered Under Insurance'
                        ) : included_in_user_plan ? _react2.default.createElement(
                            'div',
                            { className: 'shopng-cart-price ins-val-bx pkg-discountCpn' },
                            'Docprime Care Benefit'
                        ) : payment_type == 1 ? _react2.default.createElement(
                            'div',
                            { className: 'shopng-cart-price' },
                            mrp != deal_price ? _react2.default.createElement(
                                'p',
                                null,
                                '\u20B9 ',
                                deal_price,
                                ' ',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'shopng-cart-price-cut' },
                                    '\u20B9 ',
                                    mrp
                                )
                            ) : mrp == deal_price ? _react2.default.createElement(
                                'p',
                                null,
                                '\u20B9 ',
                                deal_price
                            ) : ""
                        ) : payment_type == 2 && is_enabled_for_cod && mrp != cod_deal_price ? _react2.default.createElement(
                            'div',
                            { className: 'shopng-cart-price' },
                            mrp ? _react2.default.createElement(
                                'p',
                                null,
                                '\u20B9 ',
                                cod_deal_price ? cod_deal_price : deal_price,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'shopng-cart-price-cut' },
                                    '\u20B9 ',
                                    mrp
                                )
                            ) : ""
                        ) : _react2.default.createElement(
                            'div',
                            { className: 'shopng-cart-price' },
                            mrp ? _react2.default.createElement(
                                'p',
                                null,
                                '\u20B9 ',
                                mrp
                            ) : ""
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'widget-header dr-qucik-info widgetHeaderPaddingTop' },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    doctor ? _react2.default.createElement(
                                        _initialsPicture2.default,
                                        { name: doctor.name, has_image: !!thumbnail, className: 'initialsPicture-dbd cart-initialspic' },
                                        _react2.default.createElement('img', { src: thumbnail, style: { width: '50px', height: '50px', marginTop: '8px' }, className: 'img-fluid img-round' })
                                    ) : _react2.default.createElement(
                                        _initialsPicture2.default,
                                        { name: lab && lab.name ? lab.name : '', has_image: !!thumbnail, className: 'initialsPicture-xs-cart' },
                                        _react2.default.createElement('img', { style: { height: 'auto', width: 'auto', marginTop: '15px' }, src: thumbnail, className: 'fltr-usr-image-lab' })
                                    )
                                )
                            ),
                            doctor ? _react2.default.createElement(
                                'div',
                                { className: 'dr-profile mrt-10' },
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'dr-name vip-ico-hdng' },
                                    'Dr. ',
                                    doctor.name,
                                    is_gold_member ? _react2.default.createElement('img', { style: { height: '15px', width: '35px' }, className: 'vip-main-ico img-fluid vip-ico-hdng', src: "/assets" + '/img/gold-sm.png' }) : is_vip_applicable ? _react2.default.createElement('img', { style: { height: '28px', width: '25px' }, className: 'vip-main-ico img-fluid vip-ico-hdng', src: "/assets" + '/img/viplog.png' }) : ''
                                ),
                                payment_type == 2 ? _react2.default.createElement(
                                    'span',
                                    { className: 'pay-at-clinic' },
                                    'Pay at Clinic'
                                ) : "",
                                _react2.default.createElement(
                                    'p',
                                    { className: 'clinic-name text-sm' },
                                    hospital.name
                                )
                            ) : _react2.default.createElement(
                                'div',
                                { className: 'dr-profile mrt-10' },
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'dr-name vip-ico-hdng' },
                                    lab && lab.name ? lab.name : '',
                                    is_gold_member ? _react2.default.createElement('img', { style: { height: '15px', width: '35px' }, className: 'vip-main-ico img-fluid vip-ico-hdng', src: "/assets" + '/img/gold-sm.png' }) : is_vip_applicable ? _react2.default.createElement('img', { style: { height: '28px', width: '25px' }, className: 'vip-main-ico img-fluid vip-ico-hdng', src: "/assets" + '/img/viplog.png' }) : ''
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'shopping-card-details-list' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                date ? _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'shpng-dtls-ico' },
                                            _react2.default.createElement('img', { style: { marginTop: '2px', width: '15px' }, src: "/assets" + "/img/watch-date.svg" })
                                        ),
                                        date.toDateString(),
                                        ' | ',
                                        date.toLocaleTimeString(),
                                        doctor ? "" : _react2.default.createElement(
                                            'span',
                                            null,
                                            is_home_pickup ? " | Home pickup" : " | Center visit"
                                        )
                                    )
                                ) : "",
                                profile ? _react2.default.createElement(
                                    'li',
                                    null,
                                    doctor ? _react2.default.createElement(
                                        'p',
                                        null,
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'shpng-dtls-ico' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/nw-usr.svg" })
                                        ),
                                        profile.name
                                    ) : _react2.default.createElement(
                                        'p',
                                        null,
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'shpng-dtls-ico' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/nw-usr.svg" })
                                        ),
                                        profile.name
                                    )
                                ) : "",
                                coupons && coupons.length ? _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'shpng-dtls-ico' },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/ofr-cpn.svg" })
                                        ),
                                        'Coupon Applied: ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'coupon-applies-shpngcard' },
                                            coupons[0].code
                                        )
                                    )
                                ) : ""
                            )
                        ),
                        tests && tests.length ? _react2.default.createElement(
                            'div',
                            { className: 'widget-content pt-0' },
                            _react2.default.createElement(
                                'div',
                                { className: 'shoping-cart-test-list' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'p-relative' },
                                    _react2.default.createElement('img', { className: 'shpng-cart-tst-lst-img', src: "/assets" + "/img/flask.svg" }),
                                    tests.map(function (test, i) {
                                        return _react2.default.createElement(
                                            'p',
                                            { key: i, className: 'test-list test-list-label clearfix new-lab-test-list' },
                                            is_gold_member ? _react2.default.createElement(
                                                'span',
                                                { className: 'float-right fw-700' },
                                                '\u20B9 ',
                                                amount_to_be_paid,
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'test-mrp' },
                                                    '\u20B9 ',
                                                    mrp
                                                )
                                            ) : is_vip_applicable ? _react2.default.createElement(
                                                'span',
                                                { className: 'float-right fw-700' },
                                                '\u20B9 ',
                                                amount_to_be_paid,
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'test-mrp' },
                                                    '\u20B9 ',
                                                    mrp
                                                )
                                            ) : '',
                                            is_vip_applicable || is_gold_member ? '' : is_appointment_insured || included_in_user_plan ? _react2.default.createElement(
                                                'span',
                                                { className: 'float-right fw-700' },
                                                '\u20B9 0 '
                                            ) : _react2.default.createElement(
                                                'span',
                                                { className: 'float-right fw-700' },
                                                '\u20B9 ',
                                                test.deal_price,
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'test-mrp' },
                                                    '\u20B9 ',
                                                    test.mrp
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'test-name-item' },
                                                test.test_name
                                            )
                                        );
                                    })
                                )
                            )
                        ) : "",
                        procedures && procedures.length ? _react2.default.createElement(
                            'div',
                            { className: 'widget-content pt-0' },
                            _react2.default.createElement(
                                'div',
                                { className: 'shoping-cart-test-list' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'p-relative' },
                                    _react2.default.createElement('img', { className: 'shpng-cart-tst-lst-img', src: "/assets" + "/img/hand.svg" }),
                                    procedures.map(function (proc, i) {
                                        return _react2.default.createElement(
                                            'p',
                                            { key: i, className: 'test-list test-list-label clearfix new-lab-test-list' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'float-right fw-700' },
                                                '\u20B9 ',
                                                proc.deal_price,
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'test-mrp' },
                                                    '\u20B9 ',
                                                    proc.mrp
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'test-name-item' },
                                                proc.name
                                            )
                                        );
                                    })
                                )
                            )
                        ) : ""
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'shpng-card-btns' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.removeFromCart.bind(this, id) },
                            'Remove'
                        ),
                        parsed.is_agent_booking && parsed.is_agent_booking == 'true' && is_appointment_insured ? '' : _react2.default.createElement(
                            'button',
                            { onClick: this.edit.bind(this) },
                            'Edit'
                        )
                    )
                )
            );
        }
    }]);

    return CartItem;
}(_react2.default.Component);

exports.default = CartItem;

/***/ }),

/***/ "./dev/js/components/commons/cart/cartView.js":
/*!****************************************************!*\
  !*** ./dev/js/components/commons/cart/cartView.js ***!
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

var _Loader = __webpack_require__(/*! ../Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _cartItem = __webpack_require__(/*! ./cartItem */ "./dev/js/components/commons/cart/cartItem.js");

var _cartItem2 = _interopRequireDefault(_cartItem);

var _bookingErrorPopUp = __webpack_require__(/*! ../../opd/patientDetails/bookingErrorPopUp */ "./dev/js/components/opd/patientDetails/bookingErrorPopUp.js");

var _bookingErrorPopUp2 = _interopRequireDefault(_bookingErrorPopUp);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _BookingConfirmationPopup = __webpack_require__(/*! ../../diagnosis/bookingSummary/BookingConfirmationPopup.js */ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js");

var _BookingConfirmationPopup2 = _interopRequireDefault(_BookingConfirmationPopup);

var _paymentForm = __webpack_require__(/*! ../paymentForm */ "./dev/js/components/commons/paymentForm/index.js");

var _paymentForm2 = _interopRequireDefault(_paymentForm);

var _staticDisclaimer = __webpack_require__(/*! ../../commons/Home/staticDisclaimer.js */ "./dev/js/components/commons/Home/staticDisclaimer.js");

var _staticDisclaimer2 = _interopRequireDefault(_staticDisclaimer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var CartView = function (_React$Component) {
    _inherits(CartView, _React$Component);

    function CartView(props) {
        _classCallCheck(this, CartView);

        var parsed = queryString.parse(props.location.search);

        var _this = _possibleConstructorReturn(this, (CartView.__proto__ || Object.getPrototypeOf(CartView)).call(this, props));

        _this.closeErrorPopup = function () {
            _this.setState({ error: '' });
        };

        _this.state = {
            use_wallet: true,
            error: parsed.error_message || "",
            showConfirmationPopup: false,
            paymentData: null,
            isMatrix: parsed.is_matrix
        };
        return _this;
    }

    _createClass(CartView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'toggleWalletUse',
        value: function toggleWalletUse(e) {
            this.setState({ use_wallet: e.target.checked });
        }
    }, {
        key: 'getPriceBreakup',
        value: function getPriceBreakup(cart_items) {
            // calculate all final price(coupon,convience fee, vip or gold or insurance price) in case of multiple item or single item 
            if (!cart_items) {
                cart_items = [];
            }
            var total_mrp = 0;
            var total_deal_price = 0;
            var total_home_pickup_charges = 0;
            var total_coupon_discount = 0;
            var total_coupon_cashback = 0;
            var coupon_breakup = {};
            var cashback_breakup = {};
            var platformConvFees = 0;
            var total_amnt = 0;
            var dd = 0;
            var vip_amnt_price = 0;
            var is_gold_member = false;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = cart_items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.valid && (item.actual_data.payment_type == 1 || item.actual_data.payment_type == 5 || item.actual_data.payment_type == 6)) {

                        //For Insured Appointments Do not add deal price to Amount Payable
                        if (item.actual_data.is_appointment_insured) {} else {
                            total_mrp += item.mrp;

                            if (!item.actual_data.cover_under_vip) {
                                if (item.consultation && item.consultation.fees == 0) {
                                    dd = item.mrp;
                                } else {
                                    dd = item.mrp - item.deal_price;
                                }
                                total_deal_price += dd;
                                // total_deal_price += item.deal_price  
                            }
                            total_home_pickup_charges += item.total_home_pickup_charges || 0;
                            if (item.consultation && item.consultation.fees == 0 && !item.actual_data.cover_under_vip) {
                                platformConvFees += parseInt(item.deal_price);
                            }

                            if (item.data.coupons && item.data.coupons.length) {
                                total_coupon_discount += item.coupon_discount;
                                total_coupon_cashback += item.coupon_cashback;
                                if (item.coupon_cashback <= 0) {
                                    if (coupon_breakup[item.data.coupons[0].code]) {
                                        coupon_breakup[item.data.coupons[0].code] += item.coupon_discount;
                                    } else {
                                        coupon_breakup[item.data.coupons[0].code] = item.coupon_discount;
                                    }
                                } else {
                                    if (cashback_breakup[item.data.coupons[0].code]) {
                                        cashback_breakup[item.data.coupons[0].code] += item.coupon_cashback;
                                    } else {
                                        cashback_breakup[item.data.coupons[0].code] = item.coupon_cashback;
                                    }
                                }
                            }

                            if (item.actual_data.is_vip_member && item.actual_data.cover_under_vip) {
                                // gold price calculation
                                is_gold_member = item.actual_data.is_gold_member;
                                // if(item.actual_data.vip_amount == 0){
                                //     vip_amnt_price += item.mrp
                                // }else{
                                //     if(item.actual_data.is_gold_member){
                                //         vip_amnt_price += item.mrp - (item.actual_data.vip_amount + item.actual_data.vip_convenience_amount)
                                //     }else{
                                //         vip_amnt_price += item.mrp - item.actual_data.vip_amount
                                //     }

                                // }
                                if (item.actual_data.amount_to_be_paid == 0) {
                                    vip_amnt_price += item.mrp;
                                } else {
                                    if (item.actual_data.is_gold_member) {
                                        vip_amnt_price += item.mrp - total_coupon_discount - item.actual_data.amount_to_be_paid;
                                    } else {
                                        vip_amnt_price += item.mrp - item.actual_data.amount_to_be_paid;
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            total_amnt = total_mrp - total_deal_price + platformConvFees - total_coupon_discount + total_home_pickup_charges - vip_amnt_price;
            return {
                total_mrp: total_mrp,
                total_deal_price: total_deal_price,
                total_home_pickup_charges: total_home_pickup_charges,
                total_coupon_discount: total_coupon_discount,
                total_coupon_cashback: total_coupon_cashback,
                coupon_breakup: coupon_breakup,
                cashback_breakup: cashback_breakup,
                platformConvFees: platformConvFees,
                total_amnt: total_amnt,
                vip_amnt_price: vip_amnt_price,
                is_gold_member: is_gold_member
            };
        }
    }, {
        key: 'processCart',
        value: function processCart(total_price, is_selected_user_insurance_status, is_any_vip_appointment) {
            var _this2 = this;

            // to process for payment

            if (is_selected_user_insurance_status && is_selected_user_insurance_status == 4) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Your documents from the last claim are under verification.Please write to customercare@docprime.com for more information." });
                window.scrollTo(0, 0);
                return;
            }

            if (!this.state.showConfirmationPopup && total_price == 0) {
                this.setState({ showConfirmationPopup: true });
                return;
            }
            //Add SPO Utm Tags to the cart API
            var currentTime = new Date().getTime();
            var extraParams = {};
            if (sessionStorage && sessionStorage.getItem('sessionIdVal') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(function (x) {
                return x.type == 'spo';
            }).length) {

                var spo_tags = this.props.common_utm_tags.filter(function (x) {
                    return x.type == 'spo';
                })[0];
                var sessionVal = parseInt(sessionStorage.getItem('sessionIdVal'));
                if (spo_tags.utm_tags && spo_tags.time && sessionVal == parseInt(spo_tags.currentSessionId)) {
                    var time_offset = (currentTime - spo_tags.time) / 60000;
                    //Clear SPO utm tags after 15minutes
                    //900
                    if (time_offset > 180) {
                        this.props.unSetCommonUtmTags('spo');
                    } else {
                        extraParams = spo_tags.utm_tags;
                    }
                }
            }

            this.props.processCartItems(this.state.use_wallet, extraParams).then(function (data) {
                if (data.payment_required) {
                    // this.props.history.push(`/payment/${data.data.orderId}?refs=lab`)
                    _this2.processPayment(data);
                } else {
                    _this2.props.history.replace('/order/summary/' + data.data.orderId);
                }
            }).catch(function (e) {
                var error_message = void 0;
                if (e.error) {
                    error_message = e.error;
                } else {
                    error_message = "Error Processing cart";
                }
                if (e.message) {
                    error_message = e.message;
                }
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: error_message });
            });

            var data = {
                'Category': 'ConsumerApp', 'Action': 'continueToPay', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-to-pay'
            };

            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'getBookingButtonText',
        value: function getBookingButtonText(total_wallet_balance, price_to_pay) {
            //get booking button text depend on multiple cases
            var price_from_wallet = 0;
            var price_from_pg = 0;

            if (this.state.use_wallet && total_wallet_balance) {
                price_from_wallet = Math.min(total_wallet_balance, price_to_pay);
            }

            price_from_pg = price_to_pay - price_from_wallet;

            if (price_from_pg) {
                return 'Continue to pay (\u20B9 ' + price_from_pg + ')';
            }

            return 'Confirm Booking';
        }
    }, {
        key: 'sendAgentBookingURL',
        value: function sendAgentBookingURL() {
            var dataParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            // send payment link to user in case of agent booking 
            var extraParams = _extends({}, dataParams);
            this.props.sendAgentBookingURL(null, 'sms', null, null, extraParams, function (err, res) {
                if (err) {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SEND ERROR" });
                } else {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SENT SUCCESSFULY" });
                }
            });
        }
    }, {
        key: 'priceConfirmationPopup',
        value: function priceConfirmationPopup(choice) {
            // ask to confirm the appointment in case of insurnance or user payable amount is 0.
            if (!choice) {
                this.setState({ showConfirmationPopup: choice });
            } else {
                this.setState({ showConfirmationPopup: '' });
                if (document.getElementById('confirm_booking')) {
                    document.getElementById('confirm_booking').click();
                }
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

            var cart = this.props.cart;

            var _getPriceBreakup = this.getPriceBreakup(cart),
                total_mrp = _getPriceBreakup.total_mrp,
                total_deal_price = _getPriceBreakup.total_deal_price,
                total_home_pickup_charges = _getPriceBreakup.total_home_pickup_charges,
                total_coupon_discount = _getPriceBreakup.total_coupon_discount,
                total_coupon_cashback = _getPriceBreakup.total_coupon_cashback,
                coupon_breakup = _getPriceBreakup.coupon_breakup,
                cashback_breakup = _getPriceBreakup.cashback_breakup,
                platformConvFees = _getPriceBreakup.platformConvFees,
                total_amnt = _getPriceBreakup.total_amnt,
                vip_amnt_price = _getPriceBreakup.vip_amnt_price,
                is_gold_member = _getPriceBreakup.is_gold_member;

            var total_wallet_balance = 0;
            if (this.props.userWalletBalance >= 0 && this.props.userCashbackBalance >= 0) {
                total_wallet_balance = this.props.userWalletBalance + this.props.userCashbackBalance;
            }

            var invalid_items = false;
            var valid_items = false;
            var all_appointments_insured = true;
            var is_cod_applicable = true;
            var is_platform_conv_fees = 0;
            var is_default_user_insured = false;
            var is_selected_user_insurance_status = void 0;
            var is_any_vip_appointment = false;
            if (Object.keys(this.props.profiles).length > 0 && this.props.defaultProfile && this.props.profiles[this.props.defaultProfile]) {
                is_default_user_insured = this.props.profiles[this.props.defaultProfile].is_insured;
                is_selected_user_insurance_status = this.props.profiles[this.props.defaultProfile].insurance_status;
            }

            if (cart && cart.length) {
                cart.map(function (cart_item, i) {
                    if (!cart_item.valid) {
                        invalid_items = true;
                    } else {
                        valid_items = true;
                        if (cart_item.actual_data && cart_item.actual_data.cover_under_vip && cart_item.actual_data.is_vip_member) {
                            is_any_vip_appointment = true;
                        }
                        if (cart_item.actual_data && !cart_item.actual_data.is_appointment_insured) {
                            all_appointments_insured = false;
                        }
                        if (cart_item.consultation && cart_item.consultation.fees == 0 && cart_item.actual_data.payment_type == 1) {
                            is_platform_conv_fees++;
                        }
                        //Check if COD applicable for all appointments
                        if (cart_item.actual_data && cart_item.actual_data.payment_type && cart_item.actual_data.payment_type != 2) {
                            is_cod_applicable = false;
                        }
                    }
                });
            }
            is_cod_applicable = is_cod_applicable && cart && cart.length && cart.filter(function (x) {
                return x.valid;
            }).length == 1;
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, null),
                this.state.showConfirmationPopup && is_selected_user_insurance_status != 4 ? _react2.default.createElement(_BookingConfirmationPopup2.default, { priceConfirmationPopup: this.priceConfirmationPopup.bind(this), bannerConfirmationPopup: function bannerConfirmationPopup() {}, isCart: true }) : '',
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
                                'div',
                                null,
                                cart && cart.length ? _react2.default.createElement(
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
                                                invalid_items ? _react2.default.createElement(
                                                    'h4',
                                                    { className: 'cart-warnig-icon-text' },
                                                    _react2.default.createElement('img', { style: { width: '20px' }, src: "/assets" + "/img/capaWarning.png" }),
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        cart.filter(function (x) {
                                                            return !x.valid;
                                                        }).length,
                                                        ' appointment',
                                                        cart.filter(function (x) {
                                                            return !x.valid;
                                                        }).length > 1 ? "s" : '',
                                                        ' in your cart have become invalid. Please Edit/Remove ',
                                                        cart.filter(function (x) {
                                                            return !x.valid;
                                                        }).length > 1 ? "them" : 'it',
                                                        '.'
                                                    )
                                                ) : "",
                                                _react2.default.createElement(
                                                    'h4',
                                                    { className: 'shoping-cart-main-heading' },
                                                    'My Cart'
                                                ),
                                                cart.filter(function (x) {
                                                    return x.valid;
                                                }).map(function (cart_item, i) {
                                                    return _react2.default.createElement(_cartItem2.default, _extends({ key: i + "v" }, _this4.props, cart_item));
                                                }),
                                                invalid_items ? _react2.default.createElement(
                                                    'h4',
                                                    { className: 'shoping-cart-main-heading' },
                                                    'Invalid Items'
                                                ) : "",
                                                cart.filter(function (x) {
                                                    return !x.valid;
                                                }).map(function (cart_item, i) {
                                                    return _react2.default.createElement(_cartItem2.default, _extends({ key: i + "iv" }, _this4.props, cart_item));
                                                }),
                                                valid_items ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget mrb-15' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-content' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'title mb-20' },
                                                            'Payment Summary'
                                                        ),
                                                        parseInt(total_mrp) ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'payment-summary-content' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    'Total Fees'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'pay-amnt-shrnk' },
                                                                    '\u20B9 ',
                                                                    parseInt(total_mrp)
                                                                )
                                                            ),
                                                            is_platform_conv_fees > 0 ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    'Platform Convenience Fee'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { className: 'pay-amnt-shrnk' },
                                                                    '\u20B9 ',
                                                                    parseInt(platformConvFees)
                                                                )
                                                            ) : '',
                                                            total_deal_price != 0 && total_mrp != total_deal_price ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    'Docprime Discount'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    '- \u20B9 ',
                                                                    parseInt(total_deal_price)
                                                                )
                                                            ) : '',
                                                            total_home_pickup_charges ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    'Home pickup charges'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    '+ \u20B9 ',
                                                                    parseInt(total_home_pickup_charges)
                                                                )
                                                            ) : "",
                                                            vip_amnt_price ? is_gold_member ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex align-item-center' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' }, className: 'd-flex align-item-center' },
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'mr-2' },
                                                                        ' Docprime Gold Discount '
                                                                    ),
                                                                    _react2.default.createElement('img', { style: { height: '15px', width: '35px' }, className: 'vip-main-ico img-fluid vip-ico-hdng', src: "/assets" + '/img/gold-sm.png' })
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' } },
                                                                    '-\u20B9 ',
                                                                    vip_amnt_price
                                                                )
                                                            ) : _react2.default.createElement(
                                                                'div',
                                                                { className: 'payment-detail d-flex align-item-center' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' }, className: 'd-flex align-item-center' },
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'mr-2' },
                                                                        'Docprime Vip Discount'
                                                                    ),
                                                                    _react2.default.createElement('img', { style: { height: '28px', width: '25px' }, className: 'vip-main-ico img-fluid vip-ico-hdng', src: "/assets" + '/img/viplog.png' })
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    { style: { color: 'green' } },
                                                                    '-\u20B9 ',
                                                                    vip_amnt_price
                                                                )
                                                            ) : '',
                                                            total_coupon_discount ? _react2.default.createElement(
                                                                'div',
                                                                null,
                                                                Object.keys(coupon_breakup).map(function (cp, j) {
                                                                    return _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'payment-detail d-flex', key: j },
                                                                        _react2.default.createElement(
                                                                            'p',
                                                                            { style: { color: 'green' } },
                                                                            'Coupon Discount (',
                                                                            cp,
                                                                            ')'
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'p',
                                                                            { style: { color: 'green' } },
                                                                            '-\u20B9 ',
                                                                            coupon_breakup[cp]
                                                                        )
                                                                    );
                                                                })
                                                            ) : ''
                                                        ) : '',
                                                        _react2.default.createElement('hr', null),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'test-report payment-detail mt-20' },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                { className: 'title payment-amt-label' },
                                                                'Amount Payable'
                                                            ),
                                                            _react2.default.createElement(
                                                                'h5',
                                                                { className: 'payment-amt-value' },
                                                                '\u20B9 ',
                                                                total_amnt
                                                            )
                                                        ),
                                                        total_coupon_cashback ? _react2.default.createElement(
                                                            'div',
                                                            { className: 'csh-back-applied-container' },
                                                            Object.keys(cashback_breakup).map(function (key, i) {
                                                                return _react2.default.createElement(
                                                                    'p',
                                                                    { key: i, className: 'csh-mny-applied' },
                                                                    '+ \u20B9 ',
                                                                    cashback_breakup[key],
                                                                    ' Cashback Applied (',
                                                                    key,
                                                                    ')'
                                                                );
                                                            }),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'csh-mny-applied-content' },
                                                                'Cashback will be added to your docprime wallet balance on appointment completion'
                                                            )
                                                        ) : ""
                                                    )
                                                ) : "",
                                                !all_appointments_insured && valid_items && total_wallet_balance && total_wallet_balance > 0 ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'widget mrb-15' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-content' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'select-pt-form' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'referral-select' },
                                                                _react2.default.createElement(
                                                                    'label',
                                                                    { className: 'ck-bx', style: { fontWeight: '600', fontSize: '14px' } },
                                                                    'Use docprime wallet money',
                                                                    _react2.default.createElement('input', { type: 'checkbox', onChange: this.toggleWalletUse.bind(this), checked: this.state.use_wallet }),
                                                                    _react2.default.createElement('span', { className: 'checkmark' })
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'rfrl-avl-balance' },
                                                                    'Available ',
                                                                    _react2.default.createElement('img', { style: { width: '9px', marginTop: '4px' }, src: "/assets" + "/img/rupee-icon.svg" }),
                                                                    total_wallet_balance
                                                                )
                                                            )
                                                        )
                                                    )
                                                ) : ""
                                            )
                                        )
                                    ),
                                    (_storage2.default.isAgent() && is_cod_applicable || !_storage2.default.isAgent()) && !this.state.isMatrix && valid_items ? _react2.default.createElement(
                                        'div',
                                        { className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container' },
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'add-shpng-cart-btn', onClick: function onClick() {
                                                    _this4.props.history.push('/search?from=cart');

                                                    var data = {
                                                        'Category': 'ConsumerApp', 'Action': 'addMoreToCart', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'add-more-to-cart'
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });
                                                } },
                                            'Add more to cart'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'v-btn-primary book-btn-mrgn-adjust', id: 'confirm_booking', onClick: this.processCart.bind(this, total_amnt, is_selected_user_insurance_status, is_any_vip_appointment) },
                                            this.getBookingButtonText(total_wallet_balance, total_amnt)
                                        )
                                    ) : "",
                                    (_storage2.default.isAgent() || this.state.isMatrix) && !is_cod_applicable ? _react2.default.createElement(
                                        'div',
                                        { className: 'fixed sticky-btn p-0 v-btn  btn-lg horizontal bottom no-round text-lg buttons-addcart-container' },
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'add-shpng-cart-btn', onClick: this.sendAgentBookingURL.bind(this, {}) },
                                            'Send SMS EMAIL'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'add-shpng-cart-btn', onClick: this.sendAgentBookingURL.bind(this, { message_medium: 'WHATSAPP' }) },
                                            _react2.default.createElement('img', { className: 'img-fluid', src: "/assets" + '/img/wa-logo-sm.png' }),
                                            'Send on Whatsapp'
                                        )
                                    ) : "",
                                    this.state.error ? _react2.default.createElement(_bookingErrorPopUp2.default, { heading: "Transaction Error", message: this.state.error, closeErrorPopup: this.closeErrorPopup }) : ''
                                ) : _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'norf widget', style: { marginTop: '10px', height: '69vh' } },
                                        cart == null ? "" : _react2.default.createElement(
                                            'div',
                                            { className: 'text-center' },
                                            _react2.default.createElement('img', { style: { width: '150px' }, src: "/assets" + "/img/emptyCart1.png" }),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'emptyCardText' },
                                                'Your Cart is Empty!'
                                            ),
                                            _react2.default.createElement(
                                                'button',
                                                { onClick: function onClick() {
                                                        _this4.props.history.push('/search');
                                                    }, className: 'emptyCartRedirect' },
                                                'Book Appointments Now'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_RightBar2.default, { noChatButton: true, msgTemplate: 'gold_general_template' })
                    )
                ),
                _react2.default.createElement(_staticDisclaimer2.default, null),
                this.state.paymentData ? _react2.default.createElement(_paymentForm2.default, { paymentData: this.state.paymentData, refs: 'lab' }) : ""
            );
        }
    }]);

    return CartView;
}(_react2.default.Component);

exports.default = CartView;

/***/ }),

/***/ "./dev/js/components/commons/cart/index.js":
/*!*************************************************!*\
  !*** ./dev/js/components/commons/cart/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cartView = __webpack_require__(/*! ./cartView */ "./dev/js/components/commons/cart/cartView.js");

var _cartView2 = _interopRequireDefault(_cartView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cartView2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js":
/*!********************************************************************************!*\
  !*** ./dev/js/components/diagnosis/bookingSummary/BookingConfirmationPopup.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookingConfirmationPopup = function (_React$Component) {
	_inherits(BookingConfirmationPopup, _React$Component);

	function BookingConfirmationPopup(props) {
		_classCallCheck(this, BookingConfirmationPopup);

		var _this = _possibleConstructorReturn(this, (BookingConfirmationPopup.__proto__ || Object.getPrototypeOf(BookingConfirmationPopup)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(BookingConfirmationPopup, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'search-el-popup-overlay' },
				_react2.default.createElement(
					'div',
					{ className: 'search-el-popup vip-srch-pop-min' },
					_react2.default.createElement(
						'div',
						{ className: 'widget' },
						_react2.default.createElement(
							'div',
							{ className: 'widget-content padiing-srch-el' },
							_react2.default.createElement(
								_react2.default.Fragment,
								null,
								_react2.default.createElement(
									'p',
									{ className: 'srch-el-conent' },
									this.props.is_gold ? 'Confirm delete member?' : 'Do you wish to continue?'
								),
								_react2.default.createElement(
									'div',
									{ className: 'search-el-btn-container' },
									_react2.default.createElement(
										'button',
										{ onClick: this.props.priceConfirmationPopup.bind(this, true) },
										'Yes'
									),
									_react2.default.createElement(
										'button',
										{ onClick: this.props.priceConfirmationPopup.bind(this, false) },
										'No'
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return BookingConfirmationPopup;
}(_react2.default.Component);

exports.default = BookingConfirmationPopup;

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

/***/ "./dev/js/containers/commons/cart.js":
/*!*******************************************!*\
  !*** ./dev/js/containers/commons/cart.js ***!
  \*******************************************/
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

var _cart = __webpack_require__(/*! ../../components/commons/cart */ "./dev/js/components/commons/cart/index.js");

var _cart2 = _interopRequireDefault(_cart);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var Cart = function (_React$Component) {
    _inherits(Cart, _React$Component);

    function Cart(props) {
        _classCallCheck(this, Cart);

        var _this = _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, props));

        if (!_storage2.default.checkAuth()) {
            _this.props.history.replace('/login?callback=/cart');
        }
        return _this;
    }

    _createClass(Cart, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (_storage2.default.checkAuth()) {
                this.props.getUserProfile(); // get loggedIn user profiles
                this.props.getCartItems(); // get cart items
                this.props.fetchTransactions(); // get already done transaction details
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_cart2.default, _extends({}, this.props, this.state));
        }
    }]);

    return Cart;
}(_react2.default.Component);

Cart.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$USER = state.USER,
        cart = _state$USER.cart,
        userWalletBalance = _state$USER.userWalletBalance,
        userCashbackBalance = _state$USER.userCashbackBalance,
        profiles = _state$USER.profiles,
        defaultProfile = _state$USER.defaultProfile,
        common_utm_tags = _state$USER.common_utm_tags;


    return {
        cart: cart, userWalletBalance: userWalletBalance, userCashbackBalance: userCashbackBalance, profiles: profiles, defaultProfile: defaultProfile,
        common_utm_tags: common_utm_tags
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getUserProfile: function getUserProfile() {
            return dispatch((0, _index.getUserProfile)());
        },
        getCartItems: function getCartItems() {
            return dispatch((0, _index.getCartItems)());
        },
        removeFromCart: function removeFromCart(id) {
            return dispatch((0, _index.removeFromCart)(id));
        },
        processCartItems: function processCartItems(use_wallet, extraParams) {
            return dispatch((0, _index.processCartItems)(use_wallet, extraParams));
        },
        selectProfile: function selectProfile(id) {
            return dispatch((0, _index.selectProfile)(id));
        },
        selectOpdTimeSLot: function selectOpdTimeSLot(slot, reschedule, appointmentId, dateParam) {
            return dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId, dateParam));
        },
        selectLabTimeSLot: function selectLabTimeSLot(slot, reschedule, dateParam) {
            return dispatch((0, _index.selectLabTimeSLot)(slot, reschedule, dateParam));
        },
        saveProfileProcedures: function saveProfileProcedures(doctor_id, clinic_id, selectedProcedures, forceAdd) {
            return dispatch((0, _index.saveProfileProcedures)(doctor_id, clinic_id, selectedProcedures, forceAdd));
        },
        clearAllTests: function clearAllTests() {
            return dispatch((0, _index.clearAllTests)());
        },
        applyCoupons: function applyCoupons(productId, couponData, couponId, doctor_id) {
            return dispatch((0, _index.applyCoupons)(productId, couponData, couponId, doctor_id));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd));
        },
        fetchTransactions: function fetchTransactions() {
            return dispatch((0, _index.fetchTransactions)());
        },
        selectLabAppointmentType: function selectLabAppointmentType(type) {
            return dispatch((0, _index.selectLabAppointmentType)(type));
        },
        sendAgentBookingURL: function sendAgentBookingURL(orderId, type, purchase_type, query_data, extraParams, cb) {
            return dispatch((0, _index.sendAgentBookingURL)(orderId, type, purchase_type, query_data, extraParams, cb));
        },
        select_opd_payment_type: function select_opd_payment_type(type) {
            return dispatch((0, _index.select_opd_payment_type)(type));
        },
        savePincode: function savePincode(pincode) {
            return dispatch((0, _index.savePincode)(pincode));
        },
        setCommonUtmTags: function setCommonUtmTags(type, tag) {
            return dispatch((0, _index.setCommonUtmTags)(type, tag));
        },
        unSetCommonUtmTags: function unSetCommonUtmTags(type, tag) {
            return dispatch((0, _index.unSetCommonUtmTags)(type, tag));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cart);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jYXJ0L2NhcnRJdGVtLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvY2FydC9jYXJ0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NhcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2Jvb2tpbmdTdW1tYXJ5L0Jvb2tpbmdDb25maXJtYXRpb25Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvcGF0aWVudERldGFpbHMvYm9va2luZ0Vycm9yUG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9jYXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpc1ZpcCIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwiTG9hZGVyIiwicHJvcHMiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiQ2FydEl0ZW0iLCJzdGF0ZSIsImlkIiwicmVtb3ZlRnJvbUNhcnQiLCJpdGVtIiwidmFsaWQiLCJwcm9kdWN0X2lkIiwibXJwIiwiZGVhbF9wcmljZSIsImRhdGEiLCJhY3R1YWxfZGF0YSIsImxhYiIsInRlc3RfaWRzIiwiZG9jdG9yIiwiaG9zcGl0YWwiLCJjb3Vwb25fY29kZSIsInByb2ZpbGUiLCJwcm9jZWR1cmVfaWRzIiwiaXNfaG9tZV9waWNrdXAiLCJhZGRyZXNzIiwic3RhcnRfZGF0ZSIsInN0YXJ0X3RpbWUiLCJzZXRPcGRCb29raW5nIiwic2V0TGFiQm9va2luZyIsInRpbWUiLCJ0ZXh0IiwiRGF0ZSIsImRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJzcGxpdCIsImNvbnN1bHRhdGlvbiIsImlzX2F2YWlsYWJsZSIsImZlZXMiLCJwcmljZSIsInRpdGxlIiwiZ2V0SG91cnMiLCJ2YWx1ZSIsImdldE1pbnV0ZXMiLCJtdWx0aV90aW1pbmdzX2VuYWJsZWQiLCJ0aW1lU2VsZWN0ZWQiLCJwYXRob2xvZ3lfdGltaW5nIiwicmFkaW9sb2d5X3RpbWluZyIsImNvbW1vbl90aW1pbmciLCJmaW5hbFRlc3RzIiwicl9waWNrdXAiLCJwX3BpY2t1cCIsInRlc3RzIiwibWFwIiwidGVzdCIsInNlbGVjdGVkX3RpbWluZ3NfdHlwZSIsInRlc3RfaWQiLCJ0ZXN0X25hbWUiLCJ0eXBlIiwic2VsZWN0ZWRUeXBlIiwic2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlIiwiZGQiLCJnZXREYXRlIiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInRvZGF5IiwidGltZV9zbG90IiwiYnVpbGRPcGRUaW1lU2xvdCIsInRpbWVTbG90Iiwic2xvdCIsInNlbGVjdGVkRG9jdG9yIiwic2VsZWN0ZWRDbGluaWMiLCJleHRyYVRpbWVQYXJhbXMiLCJnZXRGb3JtYXR0ZWREYXRlIiwic2VsZWN0T3BkVGltZVNMb3QiLCJjb3Vwb25faWQiLCJpc19jYXNoYmFjayIsImxlbmd0aCIsImNvdXBvbnMiLCJhcHBseUNvdXBvbnMiLCJjb2RlIiwicGF5bWVudF90eXBlIiwic2VsZWN0X29wZF9wYXltZW50X3R5cGUiLCJzZWxlY3RQcm9maWxlIiwic2F2ZVByb2ZpbGVQcm9jZWR1cmVzIiwidXJsIiwiaGlzdG9yeSIsInB1c2giLCJjbGVhckFsbFRlc3RzIiwiY3Vycl90ZXN0IiwiY3VyciIsImV4dHJhX3Rlc3QiLCJsYWJfaWQiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsInBpbmNvZGUiLCJzYXZlUGluY29kZSIsImJ1aWxkTGFiVGltZVNsb3QiLCJzZWxlY3RMYWJUaW1lU0xvdCIsImlzX2VuYWJsZWRfZm9yX2NvZCIsImNvZF9kZWFsX3ByaWNlIiwidGh1bWJuYWlsIiwicHJvY2VkdXJlcyIsImluc3VyYW5jZV9tZXNzYWdlIiwiaXNfYXBwb2ludG1lbnRfaW5zdXJlZCIsImluY2x1ZGVkX2luX3VzZXJfcGxhbiIsImNvdmVyX3VuZGVyX3ZpcCIsImlzX3ZpcF9tZW1iZXIiLCJ2aXBfYW1vdW50IiwiaXNfZ29sZF9tZW1iZXIiLCJ2aXBfY29udmVuaWVuY2VfYW1vdW50IiwiYW1vdW50X3RvX2JlX3BhaWQiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiaXNfdmlwX2FwcGxpY2FibGUiLCJpc19nb2xkX3ByaWNlIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwiQVNTRVRTX0JBU0VfVVJMIiwidG9EYXRlU3RyaW5nIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaSIsInByb2MiLCJiaW5kIiwiaXNfYWdlbnRfYm9va2luZyIsImVkaXQiLCJDYXJ0VmlldyIsImNsb3NlRXJyb3JQb3B1cCIsInNldFN0YXRlIiwiZXJyb3IiLCJ1c2Vfd2FsbGV0IiwiZXJyb3JfbWVzc2FnZSIsInNob3dDb25maXJtYXRpb25Qb3B1cCIsInBheW1lbnREYXRhIiwiaXNNYXRyaXgiLCJpc19tYXRyaXgiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImUiLCJ0YXJnZXQiLCJjaGVja2VkIiwiY2FydF9pdGVtcyIsInRvdGFsX21ycCIsInRvdGFsX2RlYWxfcHJpY2UiLCJ0b3RhbF9ob21lX3BpY2t1cF9jaGFyZ2VzIiwidG90YWxfY291cG9uX2Rpc2NvdW50IiwidG90YWxfY291cG9uX2Nhc2hiYWNrIiwiY291cG9uX2JyZWFrdXAiLCJjYXNoYmFja19icmVha3VwIiwicGxhdGZvcm1Db252RmVlcyIsInRvdGFsX2FtbnQiLCJ2aXBfYW1udF9wcmljZSIsInBhcnNlSW50IiwiY291cG9uX2Rpc2NvdW50IiwiY291cG9uX2Nhc2hiYWNrIiwidG90YWxfcHJpY2UiLCJpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMiLCJpc19hbnlfdmlwX2FwcG9pbnRtZW50IiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwiY3VycmVudFRpbWUiLCJnZXRUaW1lIiwiZXh0cmFQYXJhbXMiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjb21tb25fdXRtX3RhZ3MiLCJmaWx0ZXIiLCJ4Iiwic3BvX3RhZ3MiLCJzZXNzaW9uVmFsIiwidXRtX3RhZ3MiLCJjdXJyZW50U2Vzc2lvbklkIiwidGltZV9vZmZzZXQiLCJ1blNldENvbW1vblV0bVRhZ3MiLCJwcm9jZXNzQ2FydEl0ZW1zIiwidGhlbiIsInBheW1lbnRfcmVxdWlyZWQiLCJwcm9jZXNzUGF5bWVudCIsInJlcGxhY2UiLCJvcmRlcklkIiwiY2F0Y2giLCJtZXNzYWdlIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwidG90YWxfd2FsbGV0X2JhbGFuY2UiLCJwcmljZV90b19wYXkiLCJwcmljZV9mcm9tX3dhbGxldCIsInByaWNlX2Zyb21fcGciLCJNYXRoIiwibWluIiwiZGF0YVBhcmFtcyIsInNlbmRBZ2VudEJvb2tpbmdVUkwiLCJlcnIiLCJyZXMiLCJjaG9pY2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJzdGF0dXMiLCJzZXRUaW1lb3V0IiwiT2JqZWN0Iiwia2V5cyIsImZvcm0iLCJzdWJtaXQiLCJjYXJ0IiwiZ2V0UHJpY2VCcmVha3VwIiwidXNlcldhbGxldEJhbGFuY2UiLCJ1c2VyQ2FzaGJhY2tCYWxhbmNlIiwiaW52YWxpZF9pdGVtcyIsInZhbGlkX2l0ZW1zIiwiYWxsX2FwcG9pbnRtZW50c19pbnN1cmVkIiwiaXNfY29kX2FwcGxpY2FibGUiLCJpc19wbGF0Zm9ybV9jb252X2ZlZXMiLCJpc19kZWZhdWx0X3VzZXJfaW5zdXJlZCIsInByb2ZpbGVzIiwiZGVmYXVsdFByb2ZpbGUiLCJpc19pbnN1cmVkIiwiaW5zdXJhbmNlX3N0YXR1cyIsImNhcnRfaXRlbSIsInByaWNlQ29uZmlybWF0aW9uUG9wdXAiLCJjcCIsImoiLCJrZXkiLCJmb250V2VpZ2h0IiwidG9nZ2xlV2FsbGV0VXNlIiwiU1RPUkFHRSIsImlzQWdlbnQiLCJwcm9jZXNzQ2FydCIsImdldEJvb2tpbmdCdXR0b25UZXh0IiwibWVzc2FnZV9tZWRpdW0iLCJCb29raW5nQ29uZmlybWF0aW9uUG9wdXAiLCJpc19nb2xkIiwiQm9va2luZ0Vycm9yIiwiQ2FydCIsImNoZWNrQXV0aCIsImdldFVzZXJQcm9maWxlIiwiZ2V0Q2FydEl0ZW1zIiwiZmV0Y2hUcmFuc2FjdGlvbnMiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJVU0VSIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJyZXNjaGVkdWxlIiwiYXBwb2ludG1lbnRJZCIsImRhdGVQYXJhbSIsImRvY3Rvcl9pZCIsImNsaW5pY19pZCIsInNlbGVjdGVkUHJvY2VkdXJlcyIsImZvcmNlQWRkIiwicHJvZHVjdElkIiwiY291cG9uRGF0YSIsImNvdXBvbklkIiwiY3JpdGVyaWEiLCJwdXJjaGFzZV90eXBlIiwicXVlcnlfZGF0YSIsImNiIiwic2V0Q29tbW9uVXRtVGFncyIsInRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBQ2UsZ0JBQWU7QUFBQSxRQUFaQSxLQUFZLFFBQVpBLEtBQVk7O0FBQzdCLFdBQVE7QUFBQTtBQUFBLFVBQUssNkJBQTBCQSxRQUFNLGtCQUFOLEdBQXlC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QUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0Y7QUFDVjtBQUNGO0FBQ007QUFDRjtBQUNKO0FBQ0Y7QUFDSTtBQUNGO0FBQ2M7QUFDRjtBQUNWO0FBQ0Y7QUFDYztBQUNGO0FBQ0o7QUFDRjtBQUNJIiwiZmlsZSI6IjYwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5jbGFzcyBDYXJ0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUZyb21DYXJ0KGlkKSB7XG4gICAgICAgIHRoaXMucHJvcHMucmVtb3ZlRnJvbUNhcnQoaWQpXG4gICAgfVxuXG4gICAgZWRpdChpdGVtKSB7XG4gICAgICAgIGxldCB7IHZhbGlkLCBwcm9kdWN0X2lkLCBtcnAsIGRlYWxfcHJpY2UsIGlkLCBkYXRhIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGxldCB7IGxhYiwgdGVzdF9pZHMsIGRvY3RvciwgaG9zcGl0YWwsIGNvdXBvbl9jb2RlLCBwcm9maWxlLCBwcm9jZWR1cmVfaWRzLCBpc19ob21lX3BpY2t1cCwgYWRkcmVzcywgc3RhcnRfZGF0ZSwgc3RhcnRfdGltZSB9ID0gdGhpcy5wcm9wcy5hY3R1YWxfZGF0YVxuXG4gICAgICAgIC8vIGRvY3RvclxuICAgICAgICBpZiAocHJvZHVjdF9pZCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldE9wZEJvb2tpbmcodGhpcy5wcm9wcylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGFiXG4gICAgICAgIGlmIChwcm9kdWN0X2lkID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TGFiQm9va2luZyh0aGlzLnByb3BzKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGJ1aWxkT3BkVGltZVNsb3QoZGF0YSkge1xuXG4gICAgICAgIGxldCB0aW1lID0ge1xuICAgICAgICAgICAgdGV4dDogbmV3IERhdGUoZGF0YS5kYXRhLmRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pLnNwbGl0KCcgJylbMF0sXG4gICAgICAgICAgICBkZWFsX3ByaWNlOiBkYXRhLmNvbnN1bHRhdGlvbi5kZWFsX3ByaWNlLFxuICAgICAgICAgICAgaXNfYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgbXJwOiBkYXRhLmNvbnN1bHRhdGlvbi5tcnAsXG4gICAgICAgICAgICBmZWVzOmRhdGEuY29uc3VsdGF0aW9uLmZlZXMsXG4gICAgICAgICAgICBwcmljZTogZGF0YS5jb25zdWx0YXRpb24uZGVhbF9wcmljZSxcbiAgICAgICAgICAgIHRpdGxlOiBuZXcgRGF0ZShkYXRhLmRhdGEuZGF0ZSkuZ2V0SG91cnMoKSA+PSAxMiA/ICdQTScgOiAnQU0nLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGRhdGEuZGF0YS5kYXRlKS5nZXRIb3VycygpICsgbmV3IERhdGUoZGF0YS5kYXRhLmRhdGUpLmdldE1pbnV0ZXMoKSAvIDYwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGltZVxuXG4gICAgfVxuXG4gICAgYnVpbGRMYWJUaW1lU2xvdChkYXRhKSB7XG4gICAgICAgIC8qbGV0IHRpbWVTbG90ID0ge1xuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGEuZGF0YS5kYXRlKSxcbiAgICAgICAgICAgICAgICB0aW1lOiB0aW1lX3Nsb3RcbiAgICAgICAgICAgIH0qL1xuICAgICAgICAvKmxldCB0aW1lID0ge1xuICAgICAgICAgICAgZGVhbF9wcmljZTogZGF0YS5kZWFsX3ByaWNlLFxuICAgICAgICAgICAgaXNfYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgbXJwOiBkYXRhLm1ycCxcbiAgICAgICAgICAgIHByaWNlOiBkYXRhLmRlYWxfcHJpY2UsXG4gICAgICAgICAgICB0aW1lLnRleHQgOm5ldyBEYXRlKGRhdGEuZGF0YS5kYXRlKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSB9KS5zcGxpdCgnICcpWzBdXG4gICAgICAgICAgICB0aW1lLnRpdGxlIDogbmV3IERhdGUoZGF0YS5kYXRhLmRhdGUpLmdldEhvdXJzKCkgPj0gMTIgPyAnUE0nIDogJ0FNJyxcbiAgICAgICAgICAgIHRpbWUudmFsdWUgOiBuZXcgRGF0ZShkYXRhLmRhdGEuZGF0ZSkuZ2V0SG91cnMoKSArIG5ldyBEYXRlKGRhdGEuZGF0YS5kYXRlKS5nZXRNaW51dGVzKCkgLyA2MFxuICAgICAgICB9Ki9cbiAgICAgICAgbGV0IHRpbWUgPSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGRhdGEuYWN0dWFsX2RhdGEubXVsdGlfdGltaW5nc19lbmFibGVkKSB7XG4gICAgICAgICAgICBsZXQgdGltZVNlbGVjdGVkID0ge31cbiAgICAgICAgICAgIGxldCBwYXRob2xvZ3lfdGltaW5nID0ge31cbiAgICAgICAgICAgIGxldCByYWRpb2xvZ3lfdGltaW5nID0ge31cbiAgICAgICAgICAgIGxldCBjb21tb25fdGltaW5nID0ge31cbiAgICAgICAgICAgIGxldCBmaW5hbFRlc3RzID0ge31cbiAgICAgICAgICAgIGxldCByX3BpY2t1cCA9ICdob21lJ1xuICAgICAgICAgICAgbGV0IHBfcGlja3VwID0gJ2hvbWUnXG4gICAgICAgICAgICBkYXRhLmRhdGEudGVzdHMubWFwKCh0ZXN0KT0+e1xuXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5kYXRhLnNlbGVjdGVkX3RpbWluZ3NfdHlwZT09J2NvbW1vbicpe1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRpbWVTZWxlY3RlZFsnYWxsJ10pe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxUZXN0c1t0ZXN0LnRlc3RfaWRdID0gey4uLnRpbWVTZWxlY3RlZFsnYWxsJ10sIHRlc3RfaWQ6dGVzdC50ZXN0X2lkLCB0ZXN0X25hbWU6ICcnLCBpc19ob21lX3BpY2t1cDogdGVzdC5pc19ob21lX3BpY2t1cH1cbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tb25fdGltaW5nID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG5ldyBEYXRlKHRlc3QuZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSkuc3BsaXQoJyAnKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlOiB0ZXN0LmRlYWxfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ycDogdGVzdC5tcnAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHRlc3QuZGVhbF9wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpuZXcgRGF0ZSh0ZXN0LmRhdGUpLmdldEhvdXJzKCkgPj0gMTIgPyAnUE0nIDogJ0FNJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpuZXcgRGF0ZSh0ZXN0LmRhdGUpLmdldEhvdXJzKCkgKyBuZXcgRGF0ZSh0ZXN0LmRhdGUpLmdldE1pbnV0ZXMoKSAvIDYwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwX3BpY2t1cCA9IHRlc3QuaXNfaG9tZV9waWNrdXA/J2hvbWUnOidsYWInXG4gICAgICAgICAgICAgICAgICAgICAgICByX3BpY2t1cCA9IHRlc3QuaXNfaG9tZV9waWNrdXA/J2hvbWUnOidsYWInXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lU2VsZWN0ZWRbJ2FsbCddID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6bmV3IERhdGUodGVzdC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBjb21tb25fdGltaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6J2FsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdF9pZDogdGVzdC50ZXN0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFRlc3RzW3Rlc3QudGVzdF9pZF0gPSB7Li4udGltZVNlbGVjdGVkWydhbGwnXSwgdGVzdF9pZDp0ZXN0LnRlc3RfaWQsIHRlc3RfbmFtZTogdGVzdC50ZXN0X25hbWUsIGlzX2hvbWVfcGlja3VwOiB0ZXN0LmlzX2hvbWVfcGlja3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aW1lU2VsZWN0ZWRbJ3NlbGVjdGVkVGVzdHNUaW1lU2xvdCddID0gdGltZVNlbGVjdGVkWydzZWxlY3RlZFRlc3RzVGltZVNsb3QnXT97Li4udGltZVNlbGVjdGVkWydzZWxlY3RlZFRlc3RzVGltZVNsb3QnXX06e31cblxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH1lbHNlIHtcblxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRlc3QudHlwZT09Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGltZVNlbGVjdGVkWydwYXRob2xvZ3knXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxUZXN0c1t0ZXN0LnRlc3RfaWRdID0gey4uLnRpbWVTZWxlY3RlZFsncGF0aG9sb2d5J10sIHRlc3RfaWQ6dGVzdC50ZXN0X2lkLCB0ZXN0X25hbWU6ICcnLCBpc19ob21lX3BpY2t1cDogdGVzdC5pc19ob21lX3BpY2t1cH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhvbG9neV90aW1pbmcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG5ldyBEYXRlKHRlc3QuZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSkuc3BsaXQoJyAnKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZTogdGVzdC5kZWFsX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19hdmFpbGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ycDogdGVzdC5tcnAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiB0ZXN0LmRlYWxfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOm5ldyBEYXRlKHRlc3QuZGF0ZSkuZ2V0SG91cnMoKSA+PSAxMiA/ICdQTScgOiAnQU0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpuZXcgRGF0ZSh0ZXN0LmRhdGUpLmdldEhvdXJzKCkgKyBuZXcgRGF0ZSh0ZXN0LmRhdGUpLmdldE1pbnV0ZXMoKSAvIDYwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBfcGlja3VwID0gdGVzdC5pc19ob21lX3BpY2t1cD8naG9tZSc6J2xhYidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lU2VsZWN0ZWRbJ3BhdGhvbG9neSddID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOm5ldyBEYXRlKHRlc3QuZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHBhdGhvbG9neV90aW1pbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6J3BhdGhvbG9neScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfaWQ6IHRlc3QudGVzdF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFRlc3RzW3Rlc3QudGVzdF9pZF0gPSB7Li4udGltZVNlbGVjdGVkWydwYXRob2xvZ3knXSwgdGVzdF9pZDp0ZXN0LnRlc3RfaWQsIHRlc3RfbmFtZTogdGVzdC50ZXN0X25hbWUsIGlzX2hvbWVfcGlja3VwOiB0ZXN0LmlzX2hvbWVfcGlja3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGltZVNlbGVjdGVkWydzZWxlY3RlZFRlc3RzVGltZVNsb3QnXSA9IHRpbWVTZWxlY3RlZFsnc2VsZWN0ZWRUZXN0c1RpbWVTbG90J10/ey4uLnRpbWVTZWxlY3RlZFsnc2VsZWN0ZWRUZXN0c1RpbWVTbG90J119Ont9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodGVzdC50eXBlPT0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aW1lU2VsZWN0ZWRbJ3JhZGlvbG9neSddKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFRlc3RzW3Rlc3QudGVzdF9pZF0gPSB7Li4udGltZVNlbGVjdGVkWydyYWRpb2xvZ3knXSwgdGVzdF9pZDp0ZXN0LnRlc3RfaWQsIHRlc3RfbmFtZTogdGVzdC50ZXN0X25hbWUsIGlzX2hvbWVfcGlja3VwOiB0ZXN0LmlzX2hvbWVfcGlja3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTZWxlY3RlZFsncmFkaW9sb2d5J11bdGVzdC50ZXN0X2lkXSA9IHsuLi50aW1lU2VsZWN0ZWRbJ3JhZGlvbG9neSddLCB0ZXN0X2lkOnRlc3QudGVzdF9pZCwgdGVzdF9uYW1lOiB0ZXN0LnRlc3RfbmFtZSwgaXNfaG9tZV9waWNrdXA6IHRlc3QuaXNfaG9tZV9waWNrdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpb2xvZ3lfdGltaW5nID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXcgRGF0ZSh0ZXN0LmRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pLnNwbGl0KCcgJylbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2U6IHRlc3QuZGVhbF9wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcnA6IHRlc3QubXJwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogdGVzdC5kZWFsX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpuZXcgRGF0ZSh0ZXN0LmRhdGUpLmdldEhvdXJzKCkgPj0gMTIgPyAnUE0nIDogJ0FNJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6bmV3IERhdGUodGVzdC5kYXRlKS5nZXRIb3VycygpICsgbmV3IERhdGUodGVzdC5kYXRlKS5nZXRNaW51dGVzKCkgLyA2MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByX3BpY2t1cCA9IHRlc3QuaXNfaG9tZV9waWNrdXA/J2hvbWUnOidsYWInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNlbGVjdGVkWydyYWRpb2xvZ3knXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTpuZXcgRGF0ZSh0ZXN0LmRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiByYWRpb2xvZ3lfdGltaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOidyYWRpb2xvZ3knLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0X2lkOiB0ZXN0LnRlc3RfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNlbGVjdGVkWydyYWRpb2xvZ3knXVt0ZXN0LnRlc3RfaWRdID0gey4uLnRpbWVTZWxlY3RlZFsncmFkaW9sb2d5J10sIHRlc3RfaWQ6dGVzdC50ZXN0X2lkLCB0ZXN0X25hbWU6IHRlc3QudGVzdF9uYW1lLCBpc19ob21lX3BpY2t1cDogdGVzdC5pc19ob21lX3BpY2t1cH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVGVzdHNbdGVzdC50ZXN0X2lkXSA9IHsuLi50aW1lU2VsZWN0ZWRbJ3JhZGlvbG9neSddLCB0ZXN0X2lkOnRlc3QudGVzdF9pZCwgdGVzdF9uYW1lOiB0ZXN0LnRlc3RfbmFtZSwgaXNfaG9tZV9waWNrdXA6IHRlc3QuaXNfaG9tZV9waWNrdXB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFR5cGUgPSB7XG4gICAgICAgICAgICAgICAgcl9waWNrdXA6IHJfcGlja3VwLFxuICAgICAgICAgICAgICAgIHBfcGlja3VwOiBwX3BpY2t1cFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJBcHBvaW50bWVudFR5cGUoc2VsZWN0ZWRUeXBlKVxuICAgICAgICAgICAgdGltZVNlbGVjdGVkWydzZWxlY3RlZFRlc3RzVGltZVNsb3QnXSA9IGZpbmFsVGVzdHNcbiAgICAgICAgICAgIHJldHVybiB0aW1lU2VsZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aW1lXG5cbiAgICB9XG5cbiAgICBnZXRGb3JtYXR0ZWREYXRlKGRhdGUpe1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgICAgICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgdmFyIG1tID0gZGF0ZS5nZXRNb250aCgpKzE7IFxuICAgICAgICB2YXIgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYoZGQ8MTApIFxuICAgICAgICB7XG4gICAgICAgICAgICBkZD0nMCcrZGQ7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYobW08MTApIFxuICAgICAgICB7XG4gICAgICAgICAgICBtbT0nMCcrbW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9kYXkgPSB5eXl5KyctJyttbSsnLScrZGRcbiAgICAgICAgcmV0dXJuIHRvZGF5XG4gICAgfVxuXG4gICAgc2V0T3BkQm9va2luZyhkYXRhKSB7XG5cbiAgICAgICAgaWYgKGRhdGEudmFsaWQpIHtcblxuICAgICAgICAgICAgbGV0IHRpbWVfc2xvdCA9IHRoaXMuYnVpbGRPcGRUaW1lU2xvdChkYXRhKVxuICAgICAgICAgICAgbGV0IHRpbWVTbG90ID0ge1xuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGEuZGF0YS5kYXRlKSxcbiAgICAgICAgICAgICAgICBzbG90OiAnJyxcbiAgICAgICAgICAgICAgICB0aW1lOiB0aW1lX3Nsb3QsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREb2N0b3I6IGRhdGEuYWN0dWFsX2RhdGEuZG9jdG9yLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2xpbmljOiBkYXRhLmFjdHVhbF9kYXRhLmhvc3BpdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZXh0cmFUaW1lUGFyYW1zID0gbnVsbFxuICAgICAgICAgICAgaWYodGltZVNsb3QuZGF0ZSkge1xuICAgICAgICAgICAgICAgIGV4dHJhVGltZVBhcmFtcyA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZSh0aW1lU2xvdC5kYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RPcGRUaW1lU0xvdCh0aW1lU2xvdCwgZmFsc2UsIG51bGwsIGV4dHJhVGltZVBhcmFtcylcblxuICAgICAgICAgICAgaWYgKGRhdGEuYWN0dWFsX2RhdGEuY291cG9uX2NvZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY291cG9uX2lkID0gJydcbiAgICAgICAgICAgICAgICBsZXQgaXNfY2FzaGJhY2sgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGxldCBjb3Vwb25fY29kZSA9IGRhdGEuYWN0dWFsX2RhdGEuY291cG9uX2NvZGUubGVuZ3RoID8gZGF0YS5hY3R1YWxfZGF0YS5jb3Vwb25fY29kZVswXSA6ICcnXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS5jb3Vwb25zICYmIGRhdGEuZGF0YS5jb3Vwb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb3Vwb25faWQgPSBkYXRhLmRhdGEuY291cG9uc1swXS5pZFxuICAgICAgICAgICAgICAgICAgICBpc19jYXNoYmFjayA9IGRhdGEuZGF0YS5jb3Vwb25zWzBdLmlzX2Nhc2hiYWNrXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvdXBvbl9jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlDb3Vwb25zKCcxJywgeyBjb2RlOiBjb3Vwb25fY29kZSwgY291cG9uX2lkOiBjb3Vwb25faWQsIGlzX2Nhc2hiYWNrOiBpc19jYXNoYmFjayB9LCBjb3Vwb25faWQsIGRhdGEuYWN0dWFsX2RhdGEuZG9jdG9yKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5hY3R1YWxfZGF0YS5wYXltZW50X3R5cGUgPj0gMCAmJiBkYXRhLmFjdHVhbF9kYXRhLnBheW1lbnRfdHlwZSA8PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3Rfb3BkX3BheW1lbnRfdHlwZShkYXRhLmFjdHVhbF9kYXRhLnBheW1lbnRfdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0UHJvZmlsZShkYXRhLmFjdHVhbF9kYXRhLnByb2ZpbGUpXG4gICAgICAgIGlmIChkYXRhLmFjdHVhbF9kYXRhLnByb2NlZHVyZV9pZHMgJiYgZGF0YS5hY3R1YWxfZGF0YS5wcm9jZWR1cmVfaWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlUHJvZmlsZVByb2NlZHVyZXMoJycsICcnLCBkYXRhLmFjdHVhbF9kYXRhLnByb2NlZHVyZV9pZHMsIHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuZGF0YS5kb2N0b3IgJiYgZGF0YS5kYXRhLmRvY3Rvci51cmwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtkYXRhLmRhdGEuZG9jdG9yLnVybH0vYm9va2luZz9kb2N0b3JfaWQ9JHtkYXRhLmFjdHVhbF9kYXRhLmRvY3Rvcn0maG9zcGl0YWxfaWQ9JHtkYXRhLmFjdHVhbF9kYXRhLmhvc3BpdGFsfSZjYXJ0X2l0ZW09JHt0aGlzLnByb3BzLmlkfWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtkYXRhLmFjdHVhbF9kYXRhLmRvY3Rvcn0vJHtkYXRhLmFjdHVhbF9kYXRhLmhvc3BpdGFsfS9ib29rZGV0YWlscz9jYXJ0X2l0ZW09JHt0aGlzLnByb3BzLmlkfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRMYWJCb29raW5nKGRhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckFsbFRlc3RzKClcbiAgICAgICAgZm9yIChsZXQgY3Vycl90ZXN0IG9mIGRhdGEuYWN0dWFsX2RhdGEudGVzdF9pZHMpIHtcbiAgICAgICAgICAgIGxldCBjdXJyID0ge31cbiAgICAgICAgICAgIGN1cnIuaWQgPSBjdXJyX3Rlc3RcbiAgICAgICAgICAgIGN1cnIuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgICAgIGN1cnIubGFiX2lkID0gZGF0YS5hY3R1YWxfZGF0YS5sYWJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCBjdXJyLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuYWN0dWFsX2RhdGEgJiYgZGF0YS5hY3R1YWxfZGF0YS5waW5jb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNhdmVQaW5jb2RlKGRhdGEuYWN0dWFsX2RhdGEucGluY29kZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0UHJvZmlsZShkYXRhLmFjdHVhbF9kYXRhLnByb2ZpbGUpXG4gICAgICAgIGlmIChkYXRhLnZhbGlkKSB7XG4gICAgICAgICAgICBsZXQgdGltZVNsb3QgPSB0aGlzLmJ1aWxkTGFiVGltZVNsb3QoZGF0YSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGV4dHJhVGltZVBhcmFtcyA9IG51bGxcbiAgICAgICAgICAgIGlmKHRpbWVTbG90LmRhdGUpe1xuICAgICAgICAgICAgICAgIGV4dHJhVGltZVBhcmFtcyA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZSh0aW1lU2xvdC5kYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJUaW1lU0xvdCh0aW1lU2xvdCwgZmFsc2UsIGV4dHJhVGltZVBhcmFtcylcbiAgICAgICAgICAgIGlmIChkYXRhLmFjdHVhbF9kYXRhLmNvdXBvbl9jb2RlKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgY291cG9uX2lkID0gJydcbiAgICAgICAgICAgICAgICBsZXQgaXNfY2FzaGJhY2sgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGxldCBjb3Vwb25fY29kZSA9IGRhdGEuYWN0dWFsX2RhdGEuY291cG9uX2NvZGUubGVuZ3RoID8gZGF0YS5hY3R1YWxfZGF0YS5jb3Vwb25fY29kZVswXSA6ICcnXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS5jb3Vwb25zICYmIGRhdGEuZGF0YS5jb3Vwb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb3Vwb25faWQgPSBkYXRhLmRhdGEuY291cG9uc1swXS5pZFxuICAgICAgICAgICAgICAgICAgICBpc19jYXNoYmFjayA9IGRhdGEuZGF0YS5jb3Vwb25zWzBdLmlzX2Nhc2hiYWNrXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY291cG9uX2NvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUNvdXBvbnMoJzInLCB7IGNvZGU6IGNvdXBvbl9jb2RlLCBjb3Vwb25faWQ6IGNvdXBvbl9pZCwgaXNfY2FzaGJhY2s6IGlzX2Nhc2hiYWNrIH0sIGNvdXBvbl9pZCwgZGF0YS5hY3R1YWxfZGF0YS5sYWIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKmlmIChkYXRhLmFjdHVhbF9kYXRhLmlzX2hvbWVfcGlja3VwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJBcHBvaW50bWVudFR5cGUoJ2hvbWUnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSgnbGFiJylcbiAgICAgICAgICAgIH0qL1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5kYXRhLmxhYiAmJiBkYXRhLmRhdGEubGFiLnVybCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke2RhdGEuZGF0YS5sYWIudXJsfS9ib29raW5nP2xhYl9pZD0ke2RhdGEuYWN0dWFsX2RhdGEubGFifSZjYXJ0X2l0ZW09JHt0aGlzLnByb3BzLmlkfWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke2RhdGEuYWN0dWFsX2RhdGEubGFifS9ib29rP2NhcnRfaXRlbT0ke3RoaXMucHJvcHMuaWR9YClcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaXNfaXRlbV9vbGQoZGF0ZSkge1xuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKCkpID4gKG5ldyBEYXRlKGRhdGUpKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgeyB2YWxpZCwgcHJvZHVjdF9pZCwgbXJwLCBkZWFsX3ByaWNlLCBpZCwgaXNfZW5hYmxlZF9mb3JfY29kLCBjb2RfZGVhbF9wcmljZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBsZXQgeyBsYWIsIHRlc3RzLCBkb2N0b3IsIGhvc3BpdGFsLCBjb3Vwb25zLCBwcm9maWxlLCBkYXRlLCB0aHVtYm5haWwsIHByb2NlZHVyZXMgfSA9IHRoaXMucHJvcHMuZGF0YVxuICAgICAgICBsZXQgeyBpc19ob21lX3BpY2t1cCwgcGF5bWVudF90eXBlLCBpbnN1cmFuY2VfbWVzc2FnZSwgaXNfYXBwb2ludG1lbnRfaW5zdXJlZCwgaW5jbHVkZWRfaW5fdXNlcl9wbGFuLCBjb3Zlcl91bmRlcl92aXAsIGlzX3ZpcF9tZW1iZXIsIHZpcF9hbW91bnQsIGlzX2dvbGRfbWVtYmVyLCB2aXBfY29udmVuaWVuY2VfYW1vdW50LCBhbW91bnRfdG9fYmVfcGFpZCB9ID0gdGhpcy5wcm9wcy5hY3R1YWxfZGF0YVxuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgaXNfdmlwX2FwcGxpY2FibGUgPSBpc192aXBfbWVtYmVyICYmIGNvdmVyX3VuZGVyX3ZpcFxuICAgICAgICBsZXQgaXNfZ29sZF9wcmljZSA9IHZpcF9hbW91bnQgKyB2aXBfY29udmVuaWVuY2VfYW1vdW50XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtcm5nLXRvcC0xMiBwLXJlbGF0aXZlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3ZhbGlkID8gXCJcIiA6IFwiY2FydC1jYXJkLWJsdXItb3BhY2l0eVwifT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdmFsaWQgPyA8cCBjbGFzc05hbWU9XCJhcHBvaW50bWVudFBhc3NlZFwiPllvdXIgYXBwb2ludG1lbnQgZGF0ZSBhbmQgdGltZSBoYXMgcGFzc2VkLjwvcD4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2dvbGRfbWVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPzxkaXYgY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+4oK5IHthbW91bnRfdG9fYmVfcGFpZH0gPHNwYW4gY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2UtY3V0XCI+4oK5IHttcnB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzX3ZpcF9hcHBsaWNhYmxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+4oK5IHthbW91bnRfdG9fYmVfcGFpZH0gPHNwYW4gY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2UtY3V0XCI+4oK5IHttcnB9PC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKCuSB7aXNfZ29sZF9wcmljZX0gPHNwYW4gY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2UtY3V0XCI+4oK5IHttcnB9PC9zcGFuPiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge2lzX3ZpcF9hcHBsaWNhYmxlIHx8IGlzX2dvbGRfbWVtYmVyPyAnJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19hcHBvaW50bWVudF9pbnN1cmVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wbmctY2FydC1wcmljZSBpbnMtdmFsLWJ4XCI+Q292ZXJlZCBVbmRlciBJbnN1cmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZF9pbl91c2VyX3BsYW4gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wbmctY2FydC1wcmljZSBpbnMtdmFsLWJ4IHBrZy1kaXNjb3VudENwblwiPkRvY3ByaW1lIENhcmUgQmVuZWZpdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXltZW50X3R5cGUgPT0gMSA/IDxkaXYgY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ycCAhPSBkZWFsX3ByaWNlID8gPHA+4oK5IHtkZWFsX3ByaWNlfSA8c3BhbiBjbGFzc05hbWU9XCJzaG9wbmctY2FydC1wcmljZS1jdXRcIj7igrkge21ycH08L3NwYW4+PC9wPiA6IG1ycCA9PSBkZWFsX3ByaWNlPzxwPuKCuSB7ZGVhbF9wcmljZX08L3A+OlwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwYXltZW50X3R5cGUgPT0gMiAmJiBpc19lbmFibGVkX2Zvcl9jb2QgJiYgbXJwICE9IGNvZF9kZWFsX3ByaWNlPyA8ZGl2IGNsYXNzTmFtZT1cInNob3BuZy1jYXJ0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcnAgPyA8cD7igrkge2NvZF9kZWFsX3ByaWNlP2NvZF9kZWFsX3ByaWNlOmRlYWxfcHJpY2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNob3BuZy1jYXJ0LXByaWNlLWN1dFwiPuKCuSB7bXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXJwID8gPHA+4oK5IHttcnB9PC9wPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIGRyLXF1Y2lrLWluZm8gd2lkZ2V0SGVhZGVyUGFkZGluZ1RvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yID8gPEluaXRpYWxzUGljdHVyZSBuYW1lPXtkb2N0b3IubmFtZX0gaGFzX2ltYWdlPXshIXRodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWRiZCBjYXJ0LWluaXRpYWxzcGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aHVtYm5haWx9IHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGhlaWdodDogJzUwcHgnLCBtYXJnaW5Ub3A6ICc4cHgnIH19IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcm91bmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPiA6IDxJbml0aWFsc1BpY3R1cmUgbmFtZT17bGFiICYmIGxhYi5uYW1lP2xhYi5uYW1lOicnfSBoYXNfaW1hZ2U9eyEhdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUteHMtY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICdhdXRvJywgd2lkdGg6ICdhdXRvJywgbWFyZ2luVG9wOiAnMTVweCcgfX0gc3JjPXt0aHVtYm5haWx9IGNsYXNzTmFtZT1cImZsdHItdXNyLWltYWdlLWxhYlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvciA/IDxkaXYgY2xhc3NOYW1lPVwiZHItcHJvZmlsZSBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkci1uYW1lIHZpcC1pY28taGRuZ1wiPkRyLiB7ZG9jdG9yLm5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc19nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e2hlaWdodDonMTVweCcsIHdpZHRoOiczNXB4J319IGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWQgdmlwLWljby1oZG5nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXNfdmlwX2FwcGxpY2FibGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3toZWlnaHQ6JzI4cHgnLCB3aWR0aDonMjVweCd9fSBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkIHZpcC1pY28taGRuZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKmlzX2dvbGRfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7aGVpZ2h0OicxNXB4Jywgd2lkdGg6JzM1cHgnfX0gY2xhc3NOYW1lPVwidmlwLW1haW4taWNvIGltZy1mbHVpZCB2aXAtaWNvLWhkbmdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JycqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF90eXBlID09IDIgPyA8c3BhbiBjbGFzc05hbWU9XCJwYXktYXQtY2xpbmljXCI+UGF5IGF0IENsaW5pYzwvc3Bhbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjbGluaWMtbmFtZSB0ZXh0LXNtXCI+e2hvc3BpdGFsLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cImRyLXByb2ZpbGUgbXJ0LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRyLW5hbWUgdmlwLWljby1oZG5nXCI+e2xhYiAmJiBsYWIubmFtZT9sYWIubmFtZTonJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc19nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3toZWlnaHQ6JzE1cHgnLCB3aWR0aDonMzVweCd9fSBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkIHZpcC1pY28taGRuZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpc192aXBfYXBwbGljYWJsZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3toZWlnaHQ6JzI4cHgnLCB3aWR0aDonMjVweCd9fSBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkIHZpcC1pY28taGRuZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcHBpbmctY2FyZC1kZXRhaWxzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPyA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNocG5nLWR0bHMtaWNvXCI+PGltZyBzdHlsZT17eyBtYXJnaW5Ub3A6ICcycHgnLCB3aWR0aDogJzE1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IC8+PC9zcGFuPntkYXRlLnRvRGF0ZVN0cmluZygpfSB8IHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IgPyBcIlwiIDogPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzX2hvbWVfcGlja3VwID8gXCIgfCBIb21lIHBpY2t1cFwiIDogXCIgfCBDZW50ZXIgdmlzaXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZSA/IDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvciA/IDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hwbmctZHRscy1pY29cIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz48L3NwYW4+e3Byb2ZpbGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiA6IDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNocG5nLWR0bHMtaWNvXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+PC9zcGFuPntwcm9maWxlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Vwb25zICYmIGNvdXBvbnMubGVuZ3RoID8gPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaHBuZy1kdGxzLWljb1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvb2ZyLWNwbi5zdmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdXBvbiBBcHBsaWVkOiA8c3BhbiBjbGFzc05hbWU9XCJjb3Vwb24tYXBwbGllcy1zaHBuZ2NhcmRcIj57Y291cG9uc1swXS5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RzICYmIHRlc3RzLmxlbmd0aCA/IDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BpbmctY2FydC10ZXN0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2hwbmctY2FydC10c3QtbHN0LWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ZsYXNrLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdHMubWFwKCh0ZXN0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtpfSBjbGFzc05hbWU9XCJ0ZXN0LWxpc3QgdGVzdC1saXN0LWxhYmVsIGNsZWFyZml4IG5ldy1sYWItdGVzdC1saXN0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2dvbGRfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBmdy03MDBcIj7igrkge2Ftb3VudF90b19iZV9wYWlkfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHttcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppc192aXBfYXBwbGljYWJsZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgZnctNzAwXCI+4oK5IHthbW91bnRfdG9fYmVfcGFpZH08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7bXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGZ3LTcwMFwiPuKCuSB7aXNfZ29sZF9wcmljZX08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7bXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JycqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfdmlwX2FwcGxpY2FibGUgfHwgaXNfZ29sZF9tZW1iZXI/JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpc19hcHBvaW50bWVudF9pbnN1cmVkIHx8IGluY2x1ZGVkX2luX3VzZXJfcGxhbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBmdy03MDBcIj7igrkgMCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGZ3LTcwMFwiPuKCuSB7dGVzdC5kZWFsX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHt0ZXN0Lm1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1uYW1lLWl0ZW1cIj57dGVzdC50ZXN0X25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWR1cmVzICYmIHByb2NlZHVyZXMubGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcGluZy1jYXJ0LXRlc3QtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzaHBuZy1jYXJ0LXRzdC1sc3QtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaGFuZC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZXMubWFwKChwcm9jLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtpfSBjbGFzc05hbWU9XCJ0ZXN0LWxpc3QgdGVzdC1saXN0LWxhYmVsIGNsZWFyZml4IG5ldy1sYWItdGVzdC1saXN0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBmdy03MDBcIj7igrkge3Byb2MuZGVhbF9wcmljZX08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7cHJvYy5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW5hbWUtaXRlbVwiPntwcm9jLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hwbmctY2FyZC1idG5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucmVtb3ZlRnJvbUNhcnQuYmluZCh0aGlzLCBpZCl9PlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZC5pc19hZ2VudF9ib29raW5nICYmIHBhcnNlZC5pc19hZ2VudF9ib29raW5nID09ICd0cnVlJyAmJiBpc19hcHBvaW50bWVudF9pbnN1cmVkPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxidXR0b24gb25DbGljaz17dGhpcy5lZGl0LmJpbmQodGhpcyl9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxidXR0b24gb25DbGljaz17dGhpcy5lZGl0LmJpbmQodGhpcyl9PkVkaXQ8L2J1dHRvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0SXRlbVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSAnLi9jYXJ0SXRlbSdcbmltcG9ydCBCb29raW5nRXJyb3IgZnJvbSAnLi4vLi4vb3BkL3BhdGllbnREZXRhaWxzL2Jvb2tpbmdFcnJvclBvcFVwJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bSc7XG5pbXBvcnQgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGZyb20gJy4uLy4uL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9Cb29raW5nQ29uZmlybWF0aW9uUG9wdXAuanMnXG5pbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi4vcGF5bWVudEZvcm0nXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY2xhc3MgQ2FydFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UocHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXNlX3dhbGxldDogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yOiBwYXJzZWQuZXJyb3JfbWVzc2FnZSB8fCBcIlwiLFxuICAgICAgICAgICAgc2hvd0NvbmZpcm1hdGlvblBvcHVwOmZhbHNlLFxuICAgICAgICAgICAgcGF5bWVudERhdGE6IG51bGwsXG4gICAgICAgICAgICBpc01hdHJpeDpwYXJzZWQuaXNfbWF0cml4XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZUVycm9yUG9wdXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJycgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVXYWxsZXRVc2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogZS50YXJnZXQuY2hlY2tlZCB9KVxuICAgIH1cblxuICAgIGdldFByaWNlQnJlYWt1cChjYXJ0X2l0ZW1zKSB7IC8vIGNhbGN1bGF0ZSBhbGwgZmluYWwgcHJpY2UoY291cG9uLGNvbnZpZW5jZSBmZWUsIHZpcCBvciBnb2xkIG9yIGluc3VyYW5jZSBwcmljZSkgaW4gY2FzZSBvZiBtdWx0aXBsZSBpdGVtIG9yIHNpbmdsZSBpdGVtIFxuICAgICAgICBpZiAoIWNhcnRfaXRlbXMpIHtcbiAgICAgICAgICAgIGNhcnRfaXRlbXMgPSBbXVxuICAgICAgICB9XG4gICAgICAgIGxldCB0b3RhbF9tcnAgPSAwXG4gICAgICAgIGxldCB0b3RhbF9kZWFsX3ByaWNlID0gMFxuICAgICAgICBsZXQgdG90YWxfaG9tZV9waWNrdXBfY2hhcmdlcyA9IDBcbiAgICAgICAgbGV0IHRvdGFsX2NvdXBvbl9kaXNjb3VudCA9IDBcbiAgICAgICAgbGV0IHRvdGFsX2NvdXBvbl9jYXNoYmFjayA9IDBcbiAgICAgICAgbGV0IGNvdXBvbl9icmVha3VwID0ge31cbiAgICAgICAgbGV0IGNhc2hiYWNrX2JyZWFrdXAgPSB7fVxuICAgICAgICBsZXQgcGxhdGZvcm1Db252RmVlcyA9IDBcbiAgICAgICAgbGV0IHRvdGFsX2FtbnQgPSAwXG4gICAgICAgIGxldCBkZCA9IDBcbiAgICAgICAgbGV0IHZpcF9hbW50X3ByaWNlID0wXG4gICAgICAgIGxldCBpc19nb2xkX21lbWJlciA9IGZhbHNlXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgY2FydF9pdGVtcykge1xuICAgICAgICAgICAgaWYgKGl0ZW0udmFsaWQgJiYgKGl0ZW0uYWN0dWFsX2RhdGEucGF5bWVudF90eXBlID09IDEgfHwgaXRlbS5hY3R1YWxfZGF0YS5wYXltZW50X3R5cGUgPT0gNSB8fCBpdGVtLmFjdHVhbF9kYXRhLnBheW1lbnRfdHlwZSA9PSA2KSkge1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLy9Gb3IgSW5zdXJlZCBBcHBvaW50bWVudHMgRG8gbm90IGFkZCBkZWFsIHByaWNlIHRvIEFtb3VudCBQYXlhYmxlXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5hY3R1YWxfZGF0YS5pc19hcHBvaW50bWVudF9pbnN1cmVkKXtcblxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0b3RhbF9tcnAgKz0gaXRlbS5tcnBcblxuICAgICAgICAgICAgICAgICAgICBpZighaXRlbS5hY3R1YWxfZGF0YS5jb3Zlcl91bmRlcl92aXApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5jb25zdWx0YXRpb24gJiYgaXRlbS5jb25zdWx0YXRpb24uZmVlcyA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZCA9IGl0ZW0ubXJwXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZCA9IGl0ZW0ubXJwIC0gaXRlbS5kZWFsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9kZWFsX3ByaWNlICs9IGRkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0b3RhbF9kZWFsX3ByaWNlICs9IGl0ZW0uZGVhbF9wcmljZSAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdG90YWxfaG9tZV9waWNrdXBfY2hhcmdlcyArPSBpdGVtLnRvdGFsX2hvbWVfcGlja3VwX2NoYXJnZXMgfHwgMFxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtLmNvbnN1bHRhdGlvbiAmJiBpdGVtLmNvbnN1bHRhdGlvbi5mZWVzID09IDAgJiYgIWl0ZW0uYWN0dWFsX2RhdGEuY292ZXJfdW5kZXJfdmlwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtQ29udkZlZXMgKz0gcGFyc2VJbnQoaXRlbS5kZWFsX3ByaWNlKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGF0YS5jb3Vwb25zICYmIGl0ZW0uZGF0YS5jb3Vwb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxfY291cG9uX2Rpc2NvdW50ICs9IGl0ZW0uY291cG9uX2Rpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9jb3Vwb25fY2FzaGJhY2sgKz0gaXRlbS5jb3Vwb25fY2FzaGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNvdXBvbl9jYXNoYmFjayA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdXBvbl9icmVha3VwW2l0ZW0uZGF0YS5jb3Vwb25zWzBdLmNvZGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBvbl9icmVha3VwW2l0ZW0uZGF0YS5jb3Vwb25zWzBdLmNvZGVdICs9IGl0ZW0uY291cG9uX2Rpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cG9uX2JyZWFrdXBbaXRlbS5kYXRhLmNvdXBvbnNbMF0uY29kZV0gPSBpdGVtLmNvdXBvbl9kaXNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhc2hiYWNrX2JyZWFrdXBbaXRlbS5kYXRhLmNvdXBvbnNbMF0uY29kZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzaGJhY2tfYnJlYWt1cFtpdGVtLmRhdGEuY291cG9uc1swXS5jb2RlXSArPSBpdGVtLmNvdXBvbl9jYXNoYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2hiYWNrX2JyZWFrdXBbaXRlbS5kYXRhLmNvdXBvbnNbMF0uY29kZV0gPSBpdGVtLmNvdXBvbl9jYXNoYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uYWN0dWFsX2RhdGEuaXNfdmlwX21lbWJlciAmJiBpdGVtLmFjdHVhbF9kYXRhLmNvdmVyX3VuZGVyX3ZpcCl7IC8vIGdvbGQgcHJpY2UgY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2dvbGRfbWVtYmVyID0gaXRlbS5hY3R1YWxfZGF0YS5pc19nb2xkX21lbWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYoaXRlbS5hY3R1YWxfZGF0YS52aXBfYW1vdW50ID09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZpcF9hbW50X3ByaWNlICs9IGl0ZW0ubXJwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZihpdGVtLmFjdHVhbF9kYXRhLmlzX2dvbGRfbWVtYmVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmlwX2FtbnRfcHJpY2UgKz0gaXRlbS5tcnAgLSAoaXRlbS5hY3R1YWxfZGF0YS52aXBfYW1vdW50ICsgaXRlbS5hY3R1YWxfZGF0YS52aXBfY29udmVuaWVuY2VfYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB2aXBfYW1udF9wcmljZSArPSBpdGVtLm1ycCAtIGl0ZW0uYWN0dWFsX2RhdGEudmlwX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uYWN0dWFsX2RhdGEuYW1vdW50X3RvX2JlX3BhaWQgPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlwX2FtbnRfcHJpY2UgKz0gaXRlbS5tcnBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uYWN0dWFsX2RhdGEuaXNfZ29sZF9tZW1iZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXBfYW1udF9wcmljZSArPSBpdGVtLm1ycCAtIHRvdGFsX2NvdXBvbl9kaXNjb3VudCAtIGl0ZW0uYWN0dWFsX2RhdGEuYW1vdW50X3RvX2JlX3BhaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlwX2FtbnRfcHJpY2UgKz0gaXRlbS5tcnAgLSBpdGVtLmFjdHVhbF9kYXRhLmFtb3VudF90b19iZV9wYWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRvdGFsX2FtbnQgPSB0b3RhbF9tcnAgLSB0b3RhbF9kZWFsX3ByaWNlICsgcGxhdGZvcm1Db252RmVlcyAtIHRvdGFsX2NvdXBvbl9kaXNjb3VudCArIHRvdGFsX2hvbWVfcGlja3VwX2NoYXJnZXMgLSB2aXBfYW1udF9wcmljZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG90YWxfbXJwLFxuICAgICAgICAgICAgdG90YWxfZGVhbF9wcmljZSxcbiAgICAgICAgICAgIHRvdGFsX2hvbWVfcGlja3VwX2NoYXJnZXMsXG4gICAgICAgICAgICB0b3RhbF9jb3Vwb25fZGlzY291bnQsXG4gICAgICAgICAgICB0b3RhbF9jb3Vwb25fY2FzaGJhY2ssXG4gICAgICAgICAgICBjb3Vwb25fYnJlYWt1cCxcbiAgICAgICAgICAgIGNhc2hiYWNrX2JyZWFrdXAsXG4gICAgICAgICAgICBwbGF0Zm9ybUNvbnZGZWVzLFxuICAgICAgICAgICAgdG90YWxfYW1udCxcbiAgICAgICAgICAgIHZpcF9hbW50X3ByaWNlLFxuICAgICAgICAgICAgaXNfZ29sZF9tZW1iZXJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2Nlc3NDYXJ0KHRvdGFsX3ByaWNlLGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cywgaXNfYW55X3ZpcF9hcHBvaW50bWVudCkgeyAvLyB0byBwcm9jZXNzIGZvciBwYXltZW50XG5cbiAgICAgICAgaWYoaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzICYmIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cyA9PSA0KXtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJZb3VyIGRvY3VtZW50cyBmcm9tIHRoZSBsYXN0IGNsYWltIGFyZSB1bmRlciB2ZXJpZmljYXRpb24uUGxlYXNlIHdyaXRlIHRvIGN1c3RvbWVyY2FyZUBkb2NwcmltZS5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIgfSk7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuc2hvd0NvbmZpcm1hdGlvblBvcHVwICYmIHRvdGFsX3ByaWNlID09IDApe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0NvbmZpcm1hdGlvblBvcHVwOnRydWV9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy9BZGQgU1BPIFV0bSBUYWdzIHRvIHRoZSBjYXJ0IEFQSVxuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICBsZXQgZXh0cmFQYXJhbXMgPSB7fVxuICAgICAgICBpZihzZXNzaW9uU3RvcmFnZSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uSWRWYWwnKSAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncyAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5sZW5ndGggJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHg9PngudHlwZT09J3NwbycpLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBsZXQgc3BvX3RhZ3MgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeD0+eC50eXBlPT0nc3BvJylbMF1cbiAgICAgICAgICAgIGxldCBzZXNzaW9uVmFsID0gcGFyc2VJbnQoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkVmFsJykpXG4gICAgICAgICAgICBpZihzcG9fdGFncy51dG1fdGFncyAmJiBzcG9fdGFncy50aW1lICYmIHNlc3Npb25WYWwgPT0gcGFyc2VJbnQoc3BvX3RhZ3MuY3VycmVudFNlc3Npb25JZCkpe1xuICAgICAgICAgICAgICAgIGxldCB0aW1lX29mZnNldCA9IChjdXJyZW50VGltZSAtIHNwb190YWdzLnRpbWUpLzYwMDAwXG4gICAgICAgICAgICAgICAgLy9DbGVhciBTUE8gdXRtIHRhZ3MgYWZ0ZXIgMTVtaW51dGVzXG4gICAgICAgICAgICAgICAgLy85MDBcbiAgICAgICAgICAgICAgICBpZih0aW1lX29mZnNldD4xODApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51blNldENvbW1vblV0bVRhZ3MoJ3NwbycpXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleHRyYVBhcmFtcyA9IHNwb190YWdzLnV0bV90YWdzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5wcm9jZXNzQ2FydEl0ZW1zKHRoaXMuc3RhdGUudXNlX3dhbGxldCwgZXh0cmFQYXJhbXMpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLnBheW1lbnRfcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3BheW1lbnQvJHtkYXRhLmRhdGEub3JkZXJJZH0/cmVmcz1sYWJgKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1BheW1lbnQoZGF0YSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9vcmRlci9zdW1tYXJ5LyR7ZGF0YS5kYXRhLm9yZGVySWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBlcnJvcl9tZXNzYWdlIFxuICAgICAgICAgICAgICAgIGlmKGUuZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcl9tZXNzYWdlID0gZS5lcnJvclxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBlcnJvcl9tZXNzYWdlID0gXCJFcnJvciBQcm9jZXNzaW5nIGNhcnRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGUubWVzc2FnZSl7XG4gICAgICAgICAgICAgICAgZXJyb3JfbWVzc2FnZSA9IGUubWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBlcnJvcl9tZXNzYWdlIH0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdjb250aW51ZVRvUGF5JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29udGludWUtdG8tcGF5J1xuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG5cbiAgICBnZXRCb29raW5nQnV0dG9uVGV4dCh0b3RhbF93YWxsZXRfYmFsYW5jZSwgcHJpY2VfdG9fcGF5KSB7IC8vZ2V0IGJvb2tpbmcgYnV0dG9uIHRleHQgZGVwZW5kIG9uIG11bHRpcGxlIGNhc2VzXG4gICAgICAgIGxldCBwcmljZV9mcm9tX3dhbGxldCA9IDBcbiAgICAgICAgbGV0IHByaWNlX2Zyb21fcGcgPSAwXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudXNlX3dhbGxldCAmJiB0b3RhbF93YWxsZXRfYmFsYW5jZSkge1xuICAgICAgICAgICAgcHJpY2VfZnJvbV93YWxsZXQgPSBNYXRoLm1pbih0b3RhbF93YWxsZXRfYmFsYW5jZSwgcHJpY2VfdG9fcGF5KVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpY2VfZnJvbV9wZyA9IHByaWNlX3RvX3BheSAtIHByaWNlX2Zyb21fd2FsbGV0XG5cbiAgICAgICAgaWYgKHByaWNlX2Zyb21fcGcpIHtcbiAgICAgICAgICAgIHJldHVybiBgQ29udGludWUgdG8gcGF5ICjigrkgJHtwcmljZV9mcm9tX3BnfSlgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYENvbmZpcm0gQm9va2luZ2BcbiAgICB9XG5cbiAgICBzZW5kQWdlbnRCb29raW5nVVJMKGRhdGFQYXJhbXM9e30pIHsgLy8gc2VuZCBwYXltZW50IGxpbmsgdG8gdXNlciBpbiBjYXNlIG9mIGFnZW50IGJvb2tpbmcgXG4gICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHsuLi5kYXRhUGFyYW1zfVxuICAgICAgICB0aGlzLnByb3BzLnNlbmRBZ2VudEJvb2tpbmdVUkwobnVsbCwgJ3NtcycsIG51bGwsbnVsbCwgZXh0cmFQYXJhbXMsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTTVMgU0VORCBFUlJPUlwiIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTTVMgU0VOVCBTVUNDRVNTRlVMWVwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpY2VDb25maXJtYXRpb25Qb3B1cChjaG9pY2UpeyAvLyBhc2sgdG8gY29uZmlybSB0aGUgYXBwb2ludG1lbnQgaW4gY2FzZSBvZiBpbnN1cm5hbmNlIG9yIHVzZXIgcGF5YWJsZSBhbW91bnQgaXMgMC5cbiAgICAgICAgaWYoIWNob2ljZSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93Q29uZmlybWF0aW9uUG9wdXA6Y2hvaWNlfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93Q29uZmlybWF0aW9uUG9wdXA6Jyd9KVxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fYm9va2luZycpKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykuY2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHByb2Nlc3NQYXltZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50RGF0YTogZGF0YS5kYXRhIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudEZvcm0nKSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBheW1lbnREYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IHsgY2FydCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgdG90YWxfbXJwLFxuICAgICAgICAgICAgdG90YWxfZGVhbF9wcmljZSxcbiAgICAgICAgICAgIHRvdGFsX2hvbWVfcGlja3VwX2NoYXJnZXMsXG4gICAgICAgICAgICB0b3RhbF9jb3Vwb25fZGlzY291bnQsXG4gICAgICAgICAgICB0b3RhbF9jb3Vwb25fY2FzaGJhY2ssXG4gICAgICAgICAgICBjb3Vwb25fYnJlYWt1cCxcbiAgICAgICAgICAgIGNhc2hiYWNrX2JyZWFrdXAsXG4gICAgICAgICAgICBwbGF0Zm9ybUNvbnZGZWVzLFxuICAgICAgICAgICAgdG90YWxfYW1udCxcbiAgICAgICAgICAgIHZpcF9hbW50X3ByaWNlLFxuICAgICAgICAgICAgaXNfZ29sZF9tZW1iZXJcbiAgICAgICAgfSA9IHRoaXMuZ2V0UHJpY2VCcmVha3VwKGNhcnQpXG5cbiAgICAgICAgbGV0IHRvdGFsX3dhbGxldF9iYWxhbmNlID0gMFxuICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VyV2FsbGV0QmFsYW5jZSA+PSAwICYmIHRoaXMucHJvcHMudXNlckNhc2hiYWNrQmFsYW5jZSA+PSAwKSB7XG4gICAgICAgICAgICB0b3RhbF93YWxsZXRfYmFsYW5jZSA9IHRoaXMucHJvcHMudXNlcldhbGxldEJhbGFuY2UgKyB0aGlzLnByb3BzLnVzZXJDYXNoYmFja0JhbGFuY2VcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGludmFsaWRfaXRlbXMgPSBmYWxzZVxuICAgICAgICBsZXQgdmFsaWRfaXRlbXMgPSBmYWxzZVxuICAgICAgICBsZXQgYWxsX2FwcG9pbnRtZW50c19pbnN1cmVkID0gdHJ1ZVxuICAgICAgICBsZXQgaXNfY29kX2FwcGxpY2FibGUgPSB0cnVlXG4gICAgICAgIGxldCBpc19wbGF0Zm9ybV9jb252X2ZlZXMgPSAwXG4gICAgICAgIGxldCBpc19kZWZhdWx0X3VzZXJfaW5zdXJlZCA9IGZhbHNlXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXNcbiAgICAgICAgbGV0IGlzX2FueV92aXBfYXBwb2ludG1lbnQgPSBmYWxzZVxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5wcm9maWxlcykubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0pIHtcbiAgICAgICAgICAgIGlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmluc3VyYW5jZV9zdGF0dXNcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGNhcnQgJiYgY2FydC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhcnQubWFwKChjYXJ0X2l0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNhcnRfaXRlbS52YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkX2l0ZW1zID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkX2l0ZW1zID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBpZihjYXJ0X2l0ZW0uYWN0dWFsX2RhdGEgJiYgY2FydF9pdGVtLmFjdHVhbF9kYXRhLmNvdmVyX3VuZGVyX3ZpcCAmJiBjYXJ0X2l0ZW0uYWN0dWFsX2RhdGEuaXNfdmlwX21lbWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfYW55X3ZpcF9hcHBvaW50bWVudCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihjYXJ0X2l0ZW0uYWN0dWFsX2RhdGEgJiYgIWNhcnRfaXRlbS5hY3R1YWxfZGF0YS5pc19hcHBvaW50bWVudF9pbnN1cmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbF9hcHBvaW50bWVudHNfaW5zdXJlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoY2FydF9pdGVtLmNvbnN1bHRhdGlvbiAmJiBjYXJ0X2l0ZW0uY29uc3VsdGF0aW9uLmZlZXMgPT0gMCAmJiBjYXJ0X2l0ZW0uYWN0dWFsX2RhdGEucGF5bWVudF90eXBlID09IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfcGxhdGZvcm1fY29udl9mZWVzKytcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIENPRCBhcHBsaWNhYmxlIGZvciBhbGwgYXBwb2ludG1lbnRzXG4gICAgICAgICAgICAgICAgICAgIGlmKCBjYXJ0X2l0ZW0uYWN0dWFsX2RhdGEgJiYgY2FydF9pdGVtLmFjdHVhbF9kYXRhLnBheW1lbnRfdHlwZSAmJiBjYXJ0X2l0ZW0uYWN0dWFsX2RhdGEucGF5bWVudF90eXBlIT0yICl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19jb2RfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlzX2NvZF9hcHBsaWNhYmxlID0gaXNfY29kX2FwcGxpY2FibGUgJiYgY2FydCAmJiBjYXJ0Lmxlbmd0aCAmJiBjYXJ0LmZpbHRlcih4ID0+IHgudmFsaWQpLmxlbmd0aD09MVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dDb25maXJtYXRpb25Qb3B1cCAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMgIT00P1xuICAgICAgICAgICAgICAgICAgICA8Qm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIHByaWNlQ29uZmlybWF0aW9uUG9wdXA9e3RoaXMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMpfSBiYW5uZXJDb25maXJtYXRpb25Qb3B1cD17KCk9Pnt9fSBpc0NhcnQ9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydCAmJiBjYXJ0Lmxlbmd0aCA/IDxzZWN0aW9uIGNsYXNzTmFtZT1cImRyLXByb2ZpbGUtc2NyZWVuIGJvb2tpbmctY29uZmlybS1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtcmItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWRfaXRlbXMgPyA8aDQgY2xhc3NOYW1lPVwiY2FydC13YXJuaWctaWNvbi10ZXh0XCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzIwcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhcGFXYXJuaW5nLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcnQuZmlsdGVyKHggPT4gIXgudmFsaWQpLmxlbmd0aH0gYXBwb2ludG1lbnR7Y2FydC5maWx0ZXIoeCA9PiAheC52YWxpZCkubGVuZ3RoID4gMSA/IFwic1wiIDogJyd9IGluIHlvdXIgY2FydCBoYXZlIGJlY29tZSBpbnZhbGlkLiBQbGVhc2UgRWRpdC9SZW1vdmUge2NhcnQuZmlsdGVyKHggPT4gIXgudmFsaWQpLmxlbmd0aCA+IDEgPyBcInRoZW1cIiA6ICdpdCd9LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PC9oND4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInNob3BpbmctY2FydC1tYWluLWhlYWRpbmdcIj5NeSBDYXJ0PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydC5maWx0ZXIoeCA9PiB4LnZhbGlkKS5tYXAoKGNhcnRfaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYXJ0SXRlbSBrZXk9e2kgKyBcInZcIn0gey4uLnRoaXMucHJvcHN9IHsuLi5jYXJ0X2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkX2l0ZW1zID8gPGg0IGNsYXNzTmFtZT1cInNob3BpbmctY2FydC1tYWluLWhlYWRpbmdcIj5JbnZhbGlkIEl0ZW1zPC9oND4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0LmZpbHRlcih4ID0+ICF4LnZhbGlkKS5tYXAoKGNhcnRfaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYXJ0SXRlbSBrZXk9e2kgKyBcIml2XCJ9IHsuLi50aGlzLnByb3BzfSB7Li4uY2FydF9pdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZF9pdGVtcyA/IDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yMFwiPlBheW1lbnQgU3VtbWFyeTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh0b3RhbF9tcnApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1zdW1tYXJ5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG90YWwgRmVlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXktYW1udC1zaHJua1wiPiYjODM3Nzsge3BhcnNlSW50KHRvdGFsX21ycCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfcGxhdGZvcm1fY29udl9mZWVzPjA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGxhdGZvcm0gQ29udmVuaWVuY2UgRmVlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXktYW1udC1zaHJua1wiPiYjODM3Nzsge3BhcnNlSW50KHBsYXRmb3JtQ29udkZlZXMpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbF9kZWFsX3ByaWNlICE9MCAmJiB0b3RhbF9tcnAgIT10b3RhbF9kZWFsX3ByaWNlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lIERpc2NvdW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4tICYjODM3Nzsge3BhcnNlSW50KHRvdGFsX2RlYWxfcHJpY2UpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsX2hvbWVfcGlja3VwX2NoYXJnZXMgPyA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib21lIHBpY2t1cCBjaGFyZ2VzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rICYjODM3Nzsge3BhcnNlSW50KHRvdGFsX2hvbWVfcGlja3VwX2NoYXJnZXMpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXBfYW1udF9wcmljZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnZ3JlZW4nfX0gY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPiBEb2NwcmltZSBHb2xkIERpc2NvdW50IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7aGVpZ2h0OicxNXB4Jywgd2lkdGg6JzM1cHgnfX0gY2xhc3NOYW1lPVwidmlwLW1haW4taWNvIGltZy1mbHVpZCB2aXAtaWNvLWhkbmdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdncmVlbid9fT4t4oK5IHt2aXBfYW1udF9wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdncmVlbid9fSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+RG9jcHJpbWUgVmlwIERpc2NvdW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3toZWlnaHQ6JzI4cHgnLCB3aWR0aDonMjVweCd9fSBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkIHZpcC1pY28taGRuZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnZ3JlZW4nfX0+LeKCuSB7dmlwX2FtbnRfcHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxfY291cG9uX2Rpc2NvdW50ID8gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY291cG9uX2JyZWFrdXApLm1hcCgoY3AsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIiBrZXk9e2p9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5Db3Vwb24gRGlzY291bnQgKHtjcH0pPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tJiM4Mzc3OyB7Y291cG9uX2JyZWFrdXBbY3BdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtcmVwb3J0IHBheW1lbnQtZGV0YWlsIG10LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbFwiPkFtb3VudCBQYXlhYmxlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInBheW1lbnQtYW10LXZhbHVlXCI+JiM4Mzc3OyB7dG90YWxfYW1udH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9jb3Vwb25fY2FzaGJhY2sgPyA8ZGl2IGNsYXNzTmFtZT1cImNzaC1iYWNrLWFwcGxpZWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY2FzaGJhY2tfYnJlYWt1cCkubWFwKChrZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17aX0gY2xhc3NOYW1lPVwiY3NoLW1ueS1hcHBsaWVkXCI+KyAmIzgzNzc7IHtjYXNoYmFja19icmVha3VwW2tleV19IENhc2hiYWNrIEFwcGxpZWQgKHtrZXl9KTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3NoLW1ueS1hcHBsaWVkLWNvbnRlbnRcIj5DYXNoYmFjayB3aWxsIGJlIGFkZGVkIHRvIHlvdXIgZG9jcHJpbWUgd2FsbGV0IGJhbGFuY2Ugb24gYXBwb2ludG1lbnQgY29tcGxldGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWFsbF9hcHBvaW50bWVudHNfaW5zdXJlZCAmJiB2YWxpZF9pdGVtcyAmJiB0b3RhbF93YWxsZXRfYmFsYW5jZSAmJiB0b3RhbF93YWxsZXRfYmFsYW5jZSA+IDAgPyA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1wdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmZXJyYWwtc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6ICcxNHB4JyB9fT5Vc2UgZG9jcHJpbWUgd2FsbGV0IG1vbmV5PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVdhbGxldFVzZS5iaW5kKHRoaXMpfSBjaGVja2VkPXt0aGlzLnN0YXRlLnVzZV93YWxsZXR9IC8+PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZnJsLWF2bC1iYWxhbmNlXCI+QXZhaWxhYmxlIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc5cHgnLCBtYXJnaW5Ub3A6ICc0cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3J1cGVlLWljb24uc3ZnXCJ9IC8+e3RvdGFsX3dhbGxldF9iYWxhbmNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAoU1RPUkFHRS5pc0FnZW50KCkgJiYgaXNfY29kX2FwcGxpY2FibGUpIHx8ICFTVE9SQUdFLmlzQWdlbnQoKSApICYmICF0aGlzLnN0YXRlLmlzTWF0cml4ICYmIHZhbGlkX2l0ZW1zID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgc3RpY2t5LWJ0biBwLTAgdi1idG4gIGJ0bi1sZyBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIGJ1dHRvbnMtYWRkY2FydC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXNocG5nLWNhcnQtYnRuXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoP2Zyb209Y2FydCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnYWRkTW9yZVRvQ2FydCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2FkZC1tb3JlLXRvLWNhcnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BZGQgbW9yZSB0byBjYXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuLXByaW1hcnkgYm9vay1idG4tbXJnbi1hZGp1c3RcIiBpZD1cImNvbmZpcm1fYm9va2luZ1wiIG9uQ2xpY2s9e3RoaXMucHJvY2Vzc0NhcnQuYmluZCh0aGlzLCB0b3RhbF9hbW50LGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cywgaXNfYW55X3ZpcF9hcHBvaW50bWVudCl9Pnt0aGlzLmdldEJvb2tpbmdCdXR0b25UZXh0KHRvdGFsX3dhbGxldF9iYWxhbmNlLCB0b3RhbF9hbW50KX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFNUT1JBR0UuaXNBZ2VudCgpIHx8IHRoaXMuc3RhdGUuaXNNYXRyaXgpICYmICFpc19jb2RfYXBwbGljYWJsZSA/IDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgc3RpY2t5LWJ0biBwLTAgdi1idG4gIGJ0bi1sZyBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIGJ1dHRvbnMtYWRkY2FydC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXNocG5nLWNhcnQtYnRuXCIgb25DbGljaz17dGhpcy5zZW5kQWdlbnRCb29raW5nVVJMLmJpbmQodGhpcywge30pfT5TZW5kIFNNUyBFTUFJTDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtc2hwbmctY2FydC1idG5cIiBvbkNsaWNrPXsgdGhpcy5zZW5kQWdlbnRCb29raW5nVVJMLmJpbmQodGhpcywge21lc3NhZ2VfbWVkaXVtOiAnV0hBVFNBUFAnfSApIH0+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3dhLWxvZ28tc20ucG5nJ30vPlNlbmQgb24gV2hhdHNhcHA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciA/IDxCb29raW5nRXJyb3IgaGVhZGluZz17XCJUcmFuc2FjdGlvbiBFcnJvclwifSBtZXNzYWdlPXt0aGlzLnN0YXRlLmVycm9yfSBjbG9zZUVycm9yUG9wdXA9e3RoaXMuY2xvc2VFcnJvclBvcHVwfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vcmYgd2lkZ2V0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcsIGhlaWdodDogJzY5dmgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnQgPT0gbnVsbCA/IFwiXCIgOiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZW1wdHlDYXJ0MS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1wdHlDYXJkVGV4dFwiPllvdXIgQ2FydCBpcyBFbXB0eSE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaCcpIH19IGNsYXNzTmFtZT1cImVtcHR5Q2FydFJlZGlyZWN0XCI+Qm9vayBBcHBvaW50bWVudHMgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBub0NoYXRCdXR0b249e3RydWV9IG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPERpc2NsYWltZXIgLz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGF5bWVudERhdGEgPyA8UGF5bWVudEZvcm0gcGF5bWVudERhdGE9e3RoaXMuc3RhdGUucGF5bWVudERhdGF9IHJlZnM9J2xhYicvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcnRWaWV3XG4iLCJpbXBvcnQgQ2FydFZpZXcgZnJvbSAnLi9jYXJ0VmlldydcblxuZXhwb3J0IGRlZmF1bHQgQ2FydFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5jbGFzcyBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwLW92ZXJsYXlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAgdmlwLXNyY2gtcG9wLW1pblwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj57dGhpcy5wcm9wcy5pc19nb2xkPydDb25maXJtIGRlbGV0ZSBtZW1iZXI/JzonRG8geW91IHdpc2ggdG8gY29udGludWU/J308L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtYnRuLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCB0cnVlKX0+WWVzPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsIGZhbHNlKX0+Tm88L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0LyoodGhpcy5wcm9wcy5pc192aXBfYXBwbGljYWJsZSB8fCB0aGlzLnByb3BzLmlzX2luc3VyYW5jZV9hcHBsaWNhYmxlKSB8fCB0aGlzLnByb3BzLmlzQ2FydCB8fCB0aGlzLnByb3BzLmlzTGFiP1xuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcGFkaWluZy1zcmNoLWVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1ydC0yMCB0ZXh0LWNlbnRlciBmdy01MDBcIj5XZSBhcmUgcmVkaXJlY3RpbmcgeW91IHRvIFBoYXJtRWFzeSB3ZWJzaXRlIGluIDMgc2Vjb25kcy4uLjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzcmNoLWVsLWNvbmVudFwiPkRvIHlvdSB3aXNoIHRvIGNvbnRpbnVlPzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCB0cnVlKX0+WWVzPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgZmFsc2UpfT5ObzwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpcC1iYW5uZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmlwLWJhbm5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHZwLWNscy1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1wb3AtY2xzLnN2Zyd9IG9uQ2xpY2s9e3RoaXMucHJvcHMuYmFubmVyQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLGZhbHNlKX0vPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHZwLWJuci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1pbWctcG9wLnBuZyd9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3AtYm5yLXR4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidnAtYm5yLWtub3ctdHh0XCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Jvb2tpbmdQYWdlVmlwQmFubmVyQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdib29raW5ncGFnZS12aXAtY2xpY2snXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgXHR9XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgXHRHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1jbHViLWRldGFpbHM/c291cmNlPWJvb2tpbmdwYWdlJmxlYWRfc291cmNlPWJvb2tpbmdwYWdlJykgfX0+S25vdyBtb3JlIGFib3V0IERvY3ByaW1lIFZJUDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInZwLWJuci1zdWItdHh0XCIgb25DbGljaz17dGhpcy5wcm9wcy5iYW5uZXJDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsdHJ1ZSl9Pk5vdCBJbnRlcmVzdGVkPyBDb250aW51ZSBCb29raW5nIDxpbWcgc3R5bGU9e3t3aWR0aDonN3B4J319IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwLXJnaHQuc3ZnJ30gLz48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+Ki9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdDb25maXJtYXRpb25Qb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEJvb2tpbmdFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZXJyb3ItbXNnLXBvcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWVycm9yXCIgc3R5bGU9e3sgd2lkdGg6ICczMDBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItaGVhZFwiPjxpbWcgY2xhc3NOYW1lPVwiZXJyb3JJbmZvSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaW5mb2Vycm9yLnN2Z1wifSAvPntcIkFsZXJ0XCJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3MtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSBhbHQ9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VFcnJvclBvcHVwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItbXNnXCI+e3RoaXMucHJvcHMubWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdFcnJvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZWxlY3Rfb3BkX3BheW1lbnRfdHlwZSwgc2VuZEFnZW50Qm9va2luZ1VSTCwgZ2V0VXNlclByb2ZpbGUsIGdldENhcnRJdGVtcywgcmVtb3ZlRnJvbUNhcnQsIHByb2Nlc3NDYXJ0SXRlbXMsIHNlbGVjdFByb2ZpbGUsIHNlbGVjdExhYlRpbWVTTG90LCBzZWxlY3RPcGRUaW1lU0xvdCwgc2F2ZVByb2ZpbGVQcm9jZWR1cmVzLCBjbGVhckFsbFRlc3RzLCBhcHBseUNvdXBvbnMsIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhLCBmZXRjaFRyYW5zYWN0aW9ucywgc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlLCBzYXZlUGluY29kZSwgc2V0Q29tbW9uVXRtVGFncywgdW5TZXRDb21tb25VdG1UYWdzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcblxuaW1wb3J0IENhcnRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9jYXJ0J1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKVxuXG5jbGFzcyBDYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgaWYgKCFTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShgL2xvZ2luP2NhbGxiYWNrPS9jYXJ0YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyUHJvZmlsZSgpIC8vIGdldCBsb2dnZWRJbiB1c2VyIHByb2ZpbGVzXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldENhcnRJdGVtcygpIC8vIGdldCBjYXJ0IGl0ZW1zXG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoVHJhbnNhY3Rpb25zKCkgLy8gZ2V0IGFscmVhZHkgZG9uZSB0cmFuc2FjdGlvbiBkZXRhaWxzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJ0VmlldyB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMuc3RhdGV9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBsZXQge1xuICAgICAgICBjYXJ0LCB1c2VyV2FsbGV0QmFsYW5jZSwgdXNlckNhc2hiYWNrQmFsYW5jZSwgcHJvZmlsZXMsIGRlZmF1bHRQcm9maWxlLFxuICAgICAgICBjb21tb25fdXRtX3RhZ3NcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2FydCwgdXNlcldhbGxldEJhbGFuY2UsIHVzZXJDYXNoYmFja0JhbGFuY2UsIHByb2ZpbGVzLCBkZWZhdWx0UHJvZmlsZSxcbiAgICAgICAgY29tbW9uX3V0bV90YWdzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRVc2VyUHJvZmlsZTogKCkgPT4gZGlzcGF0Y2goZ2V0VXNlclByb2ZpbGUoKSksXG4gICAgICAgIGdldENhcnRJdGVtczogKCkgPT4gZGlzcGF0Y2goZ2V0Q2FydEl0ZW1zKCkpLFxuICAgICAgICByZW1vdmVGcm9tQ2FydDogKGlkKSA9PiBkaXNwYXRjaChyZW1vdmVGcm9tQ2FydChpZCkpLFxuICAgICAgICBwcm9jZXNzQ2FydEl0ZW1zOiAodXNlX3dhbGxldCwgZXh0cmFQYXJhbXMpID0+IGRpc3BhdGNoKHByb2Nlc3NDYXJ0SXRlbXModXNlX3dhbGxldCwgZXh0cmFQYXJhbXMpKSxcbiAgICAgICAgc2VsZWN0UHJvZmlsZTogKGlkKSA9PiBkaXNwYXRjaChzZWxlY3RQcm9maWxlKGlkKSksXG4gICAgICAgIHNlbGVjdE9wZFRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCwgZGF0ZVBhcmFtKSA9PiBkaXNwYXRjaChzZWxlY3RPcGRUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkLCBkYXRlUGFyYW0pKSxcbiAgICAgICAgc2VsZWN0TGFiVGltZVNMb3Q6IChzbG90LCByZXNjaGVkdWxlLCBkYXRlUGFyYW0pID0+IGRpc3BhdGNoKHNlbGVjdExhYlRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUsIGRhdGVQYXJhbSkpLFxuICAgICAgICBzYXZlUHJvZmlsZVByb2NlZHVyZXM6IChkb2N0b3JfaWQsIGNsaW5pY19pZCwgc2VsZWN0ZWRQcm9jZWR1cmVzLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2goc2F2ZVByb2ZpbGVQcm9jZWR1cmVzKGRvY3Rvcl9pZCwgY2xpbmljX2lkLCBzZWxlY3RlZFByb2NlZHVyZXMsIGZvcmNlQWRkKSksXG4gICAgICAgIGNsZWFyQWxsVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyQWxsVGVzdHMoKSksXG4gICAgICAgIGFwcGx5Q291cG9uczogKHByb2R1Y3RJZCwgY291cG9uRGF0YSwgY291cG9uSWQsIGRvY3Rvcl9pZCkgPT4gZGlzcGF0Y2goYXBwbHlDb3Vwb25zKHByb2R1Y3RJZCwgY291cG9uRGF0YSwgY291cG9uSWQsIGRvY3Rvcl9pZCkpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSksXG4gICAgICAgIGZldGNoVHJhbnNhY3Rpb25zOiAoKSA9PiBkaXNwYXRjaChmZXRjaFRyYW5zYWN0aW9ucygpKSxcbiAgICAgICAgc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlKHR5cGUpKSxcbiAgICAgICAgc2VuZEFnZW50Qm9va2luZ1VSTDogKG9yZGVySWQsIHR5cGUsIHB1cmNoYXNlX3R5cGUscXVlcnlfZGF0YSxleHRyYVBhcmFtcywgY2IpID0+IGRpc3BhdGNoKHNlbmRBZ2VudEJvb2tpbmdVUkwob3JkZXJJZCwgdHlwZSxwdXJjaGFzZV90eXBlLHF1ZXJ5X2RhdGEsIGV4dHJhUGFyYW1zLCBjYikpLFxuICAgICAgICBzZWxlY3Rfb3BkX3BheW1lbnRfdHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdF9vcGRfcGF5bWVudF90eXBlKHR5cGUpKSxcbiAgICAgICAgc2F2ZVBpbmNvZGU6IChwaW5jb2RlKSA9PiBkaXNwYXRjaChzYXZlUGluY29kZShwaW5jb2RlKSksXG4gICAgICAgIHNldENvbW1vblV0bVRhZ3M6ICh0eXBlLCB0YWcpID0+IGRpc3BhdGNoKHNldENvbW1vblV0bVRhZ3ModHlwZSwgdGFnKSksXG4gICAgICAgIHVuU2V0Q29tbW9uVXRtVGFnczogKHR5cGUsIHRhZyk9PiBkaXNwYXRjaCh1blNldENvbW1vblV0bVRhZ3ModHlwZSwgdGFnKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7XG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiaW1wb3J0IF9NZW1vcnlSb3V0ZXIgZnJvbSBcIi4vTWVtb3J5Um91dGVyXCI7XG5leHBvcnQgeyBfTWVtb3J5Um91dGVyIGFzIE1lbW9yeVJvdXRlciB9O1xuaW1wb3J0IF9Qcm9tcHQgZnJvbSBcIi4vUHJvbXB0XCI7XG5leHBvcnQgeyBfUHJvbXB0IGFzIFByb21wdCB9O1xuaW1wb3J0IF9SZWRpcmVjdCBmcm9tIFwiLi9SZWRpcmVjdFwiO1xuZXhwb3J0IHsgX1JlZGlyZWN0IGFzIFJlZGlyZWN0IH07XG5pbXBvcnQgX1JvdXRlIGZyb20gXCIuL1JvdXRlXCI7XG5leHBvcnQgeyBfUm91dGUgYXMgUm91dGUgfTtcbmltcG9ydCBfUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuZXhwb3J0IHsgX1JvdXRlciBhcyBSb3V0ZXIgfTtcbmltcG9ydCBfU3RhdGljUm91dGVyIGZyb20gXCIuL1N0YXRpY1JvdXRlclwiO1xuZXhwb3J0IHsgX1N0YXRpY1JvdXRlciBhcyBTdGF0aWNSb3V0ZXIgfTtcbmltcG9ydCBfU3dpdGNoIGZyb20gXCIuL1N3aXRjaFwiO1xuZXhwb3J0IHsgX1N3aXRjaCBhcyBTd2l0Y2ggfTtcbmltcG9ydCBfZ2VuZXJhdGVQYXRoIGZyb20gXCIuL2dlbmVyYXRlUGF0aFwiO1xuZXhwb3J0IHsgX2dlbmVyYXRlUGF0aCBhcyBnZW5lcmF0ZVBhdGggfTtcbmltcG9ydCBfbWF0Y2hQYXRoIGZyb20gXCIuL21hdGNoUGF0aFwiO1xuZXhwb3J0IHsgX21hdGNoUGF0aCBhcyBtYXRjaFBhdGggfTtcbmltcG9ydCBfd2l0aFJvdXRlciBmcm9tIFwiLi93aXRoUm91dGVyXCI7XG5leHBvcnQgeyBfd2l0aFJvdXRlciBhcyB3aXRoUm91dGVyIH07Il0sInNvdXJjZVJvb3QiOiIifQ==