exports.ids = [49];
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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class CartItem extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    removeFromCart(id) {
        this.props.removeFromCart(id);
    }

    edit(item) {
        let { valid, product_id, mrp, deal_price, id, data } = this.props;
        let { lab, test_ids, doctor, hospital, coupon_code, profile, procedure_ids, is_home_pickup, address, start_date, start_time } = this.props.actual_data;

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

    buildOpdTimeSlot(data) {

        let time = {
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

    buildLabTimeSlot(data) {
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
        let time = {};

        if (data.actual_data.multi_timings_enabled) {
            let timeSelected = {};
            let pathology_timing = {};
            let radiology_timing = {};
            let common_timing = {};
            let finalTests = {};
            let r_pickup = 'home';
            let p_pickup = 'home';
            data.data.tests.map(test => {

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
            let selectedType = {
                r_pickup: r_pickup,
                p_pickup: p_pickup
            };
            this.props.selectLabAppointmentType(selectedType);
            timeSelected['selectedTestsTimeSlot'] = finalTests;
            return timeSelected;
        }

        return time;
    }

    getFormattedDate(date) {
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

    setOpdBooking(data) {

        if (data.valid) {

            let time_slot = this.buildOpdTimeSlot(data);
            let timeSlot = {
                date: new Date(data.data.date),
                slot: '',
                time: time_slot,
                selectedDoctor: data.actual_data.doctor,
                selectedClinic: data.actual_data.hospital
            };
            let extraTimeParams = null;
            if (timeSlot.date) {
                extraTimeParams = this.getFormattedDate(timeSlot.date);
            }
            this.props.selectOpdTimeSLot(timeSlot, false, null, extraTimeParams);

            if (data.actual_data.coupon_code) {
                let coupon_id = '';
                let is_cashback = false;
                let coupon_code = data.actual_data.coupon_code.length ? data.actual_data.coupon_code[0] : '';
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
            this.props.history.push(`/${data.data.doctor.url}/booking?doctor_id=${data.actual_data.doctor}&hospital_id=${data.actual_data.hospital}&cart_item=${this.props.id}`);
        } else {
            this.props.history.push(`/opd/doctor/${data.actual_data.doctor}/${data.actual_data.hospital}/bookdetails?cart_item=${this.props.id}`);
        }
    }

    setLabBooking(data) {
        this.props.clearAllTests();
        for (let curr_test of data.actual_data.test_ids) {
            let curr = {};
            curr.id = curr_test;
            curr.extra_test = true;
            curr.lab_id = data.actual_data.lab;
            this.props.toggleDiagnosisCriteria('test', curr, true);
        }

        if (data.actual_data && data.actual_data.pincode) {
            this.props.savePincode(data.actual_data.pincode);
        }

        this.props.selectProfile(data.actual_data.profile);
        if (data.valid) {
            let timeSlot = this.buildLabTimeSlot(data);

            let extraTimeParams = null;
            if (timeSlot.date) {
                extraTimeParams = this.getFormattedDate(timeSlot.date);
            }
            this.props.selectLabTimeSLot(timeSlot, false, extraTimeParams);
            if (data.actual_data.coupon_code) {

                let coupon_id = '';
                let is_cashback = false;
                let coupon_code = data.actual_data.coupon_code.length ? data.actual_data.coupon_code[0] : '';
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
            this.props.history.push(`/${data.data.lab.url}/booking?lab_id=${data.actual_data.lab}&cart_item=${this.props.id}`);
        } else {
            this.props.history.push(`/lab/${data.actual_data.lab}/book?cart_item=${this.props.id}`);
        }
    }

    is_item_old(date) {
        return new Date() > new Date(date);
    }

    render() {

        let { valid, product_id, mrp, deal_price, id, is_enabled_for_cod, cod_deal_price } = this.props;
        let { lab, tests, doctor, hospital, coupons, profile, date, thumbnail, procedures } = this.props.data;
        let { is_home_pickup, payment_type, insurance_message, is_appointment_insured, included_in_user_plan, cover_under_vip, is_vip_member, vip_amount, is_gold_member, vip_convenience_amount, amount_to_be_paid } = this.props.actual_data;
        if (date) {
            date = new Date(date);
        }
        let parsed = queryString.parse(this.props.location.search);
        let is_vip_applicable = is_vip_member && cover_under_vip;
        let is_gold_price = vip_amount + vip_convenience_amount;
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
                                tests.map((test, i) => {
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
                                procedures.map((proc, i) => {
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
}

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

var _react = __webpack_require__(/*! react */ "react");

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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");


class CartView extends _react2.default.Component {
    constructor(props) {

        const parsed = queryString.parse(props.location.search);

        super(props);

        this.closeErrorPopup = () => {
            this.setState({ error: '' });
        };

        this.state = {
            use_wallet: true,
            error: parsed.error_message || "",
            showConfirmationPopup: false,
            paymentData: null,
            isMatrix: parsed.is_matrix
        };
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    toggleWalletUse(e) {
        this.setState({ use_wallet: e.target.checked });
    }

    getPriceBreakup(cart_items) {
        // calculate all final price(coupon,convience fee, vip or gold or insurance price) in case of multiple item or single item 
        if (!cart_items) {
            cart_items = [];
        }
        let total_mrp = 0;
        let total_deal_price = 0;
        let total_home_pickup_charges = 0;
        let total_coupon_discount = 0;
        let total_coupon_cashback = 0;
        let coupon_breakup = {};
        let cashback_breakup = {};
        let platformConvFees = 0;
        let total_amnt = 0;
        let dd = 0;
        let vip_amnt_price = 0;
        let is_gold_member = false;
        for (let item of cart_items) {
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
        total_amnt = total_mrp - total_deal_price + platformConvFees - total_coupon_discount + total_home_pickup_charges - vip_amnt_price;
        return {
            total_mrp,
            total_deal_price,
            total_home_pickup_charges,
            total_coupon_discount,
            total_coupon_cashback,
            coupon_breakup,
            cashback_breakup,
            platformConvFees,
            total_amnt,
            vip_amnt_price,
            is_gold_member
        };
    }

    processCart(total_price, is_selected_user_insurance_status, is_any_vip_appointment) {
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
        let currentTime = new Date().getTime();
        let extraParams = {};
        if (sessionStorage && sessionStorage.getItem('sessionIdVal') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(x => x.type == 'spo').length) {

            let spo_tags = this.props.common_utm_tags.filter(x => x.type == 'spo')[0];
            let sessionVal = parseInt(sessionStorage.getItem('sessionIdVal'));
            if (spo_tags.utm_tags && spo_tags.time && sessionVal == parseInt(spo_tags.currentSessionId)) {
                let time_offset = (currentTime - spo_tags.time) / 60000;
                //Clear SPO utm tags after 15minutes
                //900
                if (time_offset > 180) {
                    this.props.unSetCommonUtmTags('spo');
                } else {
                    extraParams = spo_tags.utm_tags;
                }
            }
        }

        this.props.processCartItems(this.state.use_wallet, extraParams).then(data => {
            if (data.payment_required) {
                // this.props.history.push(`/payment/${data.data.orderId}?refs=lab`)
                this.processPayment(data);
            } else {
                this.props.history.replace(`/order/summary/${data.data.orderId}`);
            }
        }).catch(e => {
            let error_message;
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

        let data = {
            'Category': 'ConsumerApp', 'Action': 'continueToPay', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-to-pay'
        };

        _gtm2.default.sendEvent({ data: data });
    }

    getBookingButtonText(total_wallet_balance, price_to_pay) {
        //get booking button text depend on multiple cases
        let price_from_wallet = 0;
        let price_from_pg = 0;

        if (this.state.use_wallet && total_wallet_balance) {
            price_from_wallet = Math.min(total_wallet_balance, price_to_pay);
        }

        price_from_pg = price_to_pay - price_from_wallet;

        if (price_from_pg) {
            return `Continue to pay (₹ ${price_from_pg})`;
        }

        return `Confirm Booking`;
    }

    sendAgentBookingURL(dataParams = {}) {
        // send payment link to user in case of agent booking 
        let extraParams = _extends({}, dataParams);
        this.props.sendAgentBookingURL(null, 'sms', null, null, extraParams, (err, res) => {
            if (err) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SEND ERROR" });
            } else {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "SMS SENT SUCCESSFULY" });
            }
        });
    }

    priceConfirmationPopup(choice) {
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

    processPayment(data) {
        if (data && data.status) {
            this.setState({ paymentData: data.data }, () => {
                setTimeout(() => {
                    if (document.getElementById('paymentForm') && Object.keys(this.state.paymentData).length > 0) {
                        let form = document.getElementById('paymentForm');
                        form.submit();
                    }
                }, 500);
            });
        }
    }

    render() {

        let { cart } = this.props;
        let {
            total_mrp,
            total_deal_price,
            total_home_pickup_charges,
            total_coupon_discount,
            total_coupon_cashback,
            coupon_breakup,
            cashback_breakup,
            platformConvFees,
            total_amnt,
            vip_amnt_price,
            is_gold_member
        } = this.getPriceBreakup(cart);

        let total_wallet_balance = 0;
        if (this.props.userWalletBalance >= 0 && this.props.userCashbackBalance >= 0) {
            total_wallet_balance = this.props.userWalletBalance + this.props.userCashbackBalance;
        }

        let invalid_items = false;
        let valid_items = false;
        let all_appointments_insured = true;
        let is_cod_applicable = true;
        let is_platform_conv_fees = 0;
        let is_default_user_insured = false;
        let is_selected_user_insurance_status;
        let is_any_vip_appointment = false;
        if (Object.keys(this.props.profiles).length > 0 && this.props.defaultProfile && this.props.profiles[this.props.defaultProfile]) {
            is_default_user_insured = this.props.profiles[this.props.defaultProfile].is_insured;
            is_selected_user_insurance_status = this.props.profiles[this.props.defaultProfile].insurance_status;
        }

        if (cart && cart.length) {
            cart.map((cart_item, i) => {
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
        is_cod_applicable = is_cod_applicable && cart && cart.length && cart.filter(x => x.valid).length == 1;
        return _react2.default.createElement(
            'div',
            { className: 'profile-body-wrap' },
            _react2.default.createElement(_DesktopProfileHeader2.default, null),
            this.state.showConfirmationPopup && is_selected_user_insurance_status != 4 ? _react2.default.createElement(_BookingConfirmationPopup2.default, { priceConfirmationPopup: this.priceConfirmationPopup.bind(this), bannerConfirmationPopup: () => {}, isCart: true }) : '',
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
                                                    cart.filter(x => !x.valid).length,
                                                    ' appointment',
                                                    cart.filter(x => !x.valid).length > 1 ? "s" : '',
                                                    ' in your cart have become invalid. Please Edit/Remove ',
                                                    cart.filter(x => !x.valid).length > 1 ? "them" : 'it',
                                                    '.'
                                                )
                                            ) : "",
                                            _react2.default.createElement(
                                                'h4',
                                                { className: 'shoping-cart-main-heading' },
                                                'My Cart'
                                            ),
                                            cart.filter(x => x.valid).map((cart_item, i) => {
                                                return _react2.default.createElement(_cartItem2.default, _extends({ key: i + "v" }, this.props, cart_item));
                                            }),
                                            invalid_items ? _react2.default.createElement(
                                                'h4',
                                                { className: 'shoping-cart-main-heading' },
                                                'Invalid Items'
                                            ) : "",
                                            cart.filter(x => !x.valid).map((cart_item, i) => {
                                                return _react2.default.createElement(_cartItem2.default, _extends({ key: i + "iv" }, this.props, cart_item));
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
                                                            Object.keys(coupon_breakup).map((cp, j) => {
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
                                                        Object.keys(cashback_breakup).map((key, i) => {
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
                                        { className: 'add-shpng-cart-btn', onClick: () => {
                                                this.props.history.push('/search?from=cart');

                                                let data = {
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
                                            { onClick: () => {
                                                    this.props.history.push('/search');
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
}

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

/***/ "./dev/js/components/commons/paymentForm/PaymentForm.js":
/*!**************************************************************!*\
  !*** ./dev/js/components/commons/paymentForm/PaymentForm.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PaymentForm extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    sendEvent() {
        let refs = this.props.refs;
        if (refs) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ContinueClicked', 'pageSource': refs, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
        } else {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ContinueClicked', 'pageSource': 'UNKNOWN', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }

    componentDidMount() {
        this.sendEvent();
    }

    getPaymentNodeName(name, index) {
        return `${name}[${index}]`;
    }

    render() {

        // let data = { "paymentMode": "CC", "responseCode": "227", "bankTxId": "", "txDate": "Jun 4, 2018 12:10:23 PM", "bankName": "SBI", "statusMsg": "Oops an error occurred. We will get back to you!", "currency": "INR", "statusCode": 1, "pgGatewayName": "MOCK", "responseMessage": "Your payment has been declined by your bank. Please contact your bank for any queries. If money has been deducted from your account, your bank will inform us within 48 hrs and we will refund the same", "txStatus": "TXN_FAILURE", "customerId": 51, "orderNo": this.props.paymentData['orderId'], "statusShortMsg": "Others", "email": "dummy_appointment@policybazaar.com", "pbGatewayName": "paytm", "mobile": "9999999997", productId: this.props.paymentData['productId'] }

        // if (this.props.paymentData['referenceId']) {
        //     data['referenceId'] = this.props.paymentData['referenceId']
        // }

        // data['pgTxId'] = this.props.paymentData['orderId']
        // data = btoa(JSON.stringify(data))

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'form',
                { id: 'paymentForm', ref: 'paymentForm', method: 'post', action: this.props.paymentData && this.props.paymentData['is_single_flow'] ? _config2.default.PG_MULTI_ORDER_URL : _config2.default.PG_URL, style: { display: 'none' } },
                this.props.paymentData['is_single_flow'] ? _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    this.props.paymentData['items'].map((item, i) => {
                        return _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('name', i), id: item['name'], defaultValue: item['name'] }),
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('productId', i), id: item['productId'], defaultValue: item['productId'] }),
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('txAmount', i), id: item['txAmount'], defaultValue: item['txAmount'] }),
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('orderId', i), id: item['orderId'], defaultValue: item['orderId'] }),
                            _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('holdPayment', i), id: item['holdPayment'], defaultValue: item['holdPayment'] }),
                            item && item['insurerCode'] ? _react2.default.createElement('input', { type: 'text', name: this.getPaymentNodeName('insurerCode', i), id: item['insurerCode'], defaultValue: item['insurerCode'] }) : ''
                        );
                    })
                ) : _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement('input', { type: 'text', name: 'name', defaultValue: this.props.paymentData['name'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'productId', defaultValue: this.props.paymentData['productId'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'txAmount', defaultValue: this.props.paymentData['txAmount'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'orderId', defaultValue: this.props.paymentData['orderId'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'holdPayment', defaultValue: this.props.paymentData['holdPayment'] }),
                    this.props.paymentData && this.props.paymentData['insurerCode'] ? _react2.default.createElement('input', { type: 'text', name: 'insurerCode', defaultValue: this.props.paymentData['insurerCode'] }) : ''
                ),
                _react2.default.createElement('input', { type: 'text', name: 'custId', defaultValue: this.props.paymentData['custId'] }),
                _react2.default.createElement('input', { type: 'text', name: 'mobile', defaultValue: this.props.paymentData['mobile'] }),
                _react2.default.createElement('input', { type: 'text', name: 'email', defaultValue: this.props.paymentData['email'] }),
                _react2.default.createElement('input', { type: 'text', name: 'surl', defaultValue: this.props.paymentData['surl'] }),
                _react2.default.createElement('input', { type: 'text', name: 'furl', defaultValue: this.props.paymentData['furl'] }),
                this.props.paymentData && this.props.paymentData['referenceId'] ? _react2.default.createElement('input', { type: 'text', name: 'referenceId', defaultValue: this.props.paymentData['referenceId'] }) : '',
                _react2.default.createElement('input', { type: 'text', name: 'hash', defaultValue: this.props.paymentData['hash'] }),
                _react2.default.createElement('input', { type: 'text', name: 'isPreAuth', defaultValue: this.props.paymentData['isPreAuth'] }),
                this.props.paymentData && this.props.paymentData['paytmMsg'] ? _react2.default.createElement('input', { type: 'text', name: 'paytmMsg', defaultValue: this.props.paymentData['paytmMsg'] }) : '',
                this.props.paymentData && this.props.paymentData['couponCode'] ? _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement('input', { type: 'text', name: 'couponCode', defaultValue: this.props.paymentData['couponCode'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'discountedAmnt', defaultValue: this.props.paymentData['discountedAmnt'] }),
                    _react2.default.createElement('input', { type: 'text', name: 'couponPgMode', defaultValue: this.props.paymentData['couponPgMode'] })
                ) : '',
                this.props.paymentData && this.props.paymentData['refOrderId'] ? _react2.default.createElement('input', { type: 'text', name: 'refOrderId', defaultValue: this.props.paymentData['refOrderId'] }) : '',
                this.props.paymentData && this.props.paymentData['refOrderNo'] ? _react2.default.createElement('input', { type: 'text', name: 'refOrderNo', defaultValue: this.props.paymentData['refOrderNo'] }) : '',
                this.props.paymentData && this.props.paymentData['parentProductId'] ? _react2.default.createElement('input', { type: 'text', name: 'parentProductId', defaultValue: this.props.paymentData['parentProductId'] }) : ''
            )
        );
    }
}

exports.default = PaymentForm;

/***/ }),

/***/ "./dev/js/components/commons/paymentForm/index.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/paymentForm/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PaymentForm = __webpack_require__(/*! ./PaymentForm */ "./dev/js/components/commons/paymentForm/PaymentForm.js");

var _PaymentForm2 = _interopRequireDefault(_PaymentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PaymentForm2.default;

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BookingConfirmationPopup extends _react2.default.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BookingError extends _react2.default.Component {
    render() {
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _cart = __webpack_require__(/*! ../../components/commons/cart */ "./dev/js/components/commons/cart/index.js");

var _cart2 = _interopRequireDefault(_cart);

var _storage = __webpack_require__(/*! ../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class Cart extends _react2.default.Component {
    constructor(props) {
        super(props);
        if (!_storage2.default.checkAuth()) {
            this.props.history.replace(`/login?callback=/cart`);
        }
    }

    componentDidMount() {
        if (_storage2.default.checkAuth()) {
            this.props.getUserProfile(); // get loggedIn user profiles
            this.props.getCartItems(); // get cart items
            this.props.fetchTransactions(); // get already done transaction details
        }
    }

    render() {

        return _react2.default.createElement(_cart2.default, _extends({}, this.props, this.state));
    }
}

Cart.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    let {
        cart, userWalletBalance, userCashbackBalance, profiles, defaultProfile,
        common_utm_tags
    } = state.USER;

    return {
        cart, userWalletBalance, userCashbackBalance, profiles, defaultProfile,
        common_utm_tags
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserProfile: () => dispatch((0, _index.getUserProfile)()),
        getCartItems: () => dispatch((0, _index.getCartItems)()),
        removeFromCart: id => dispatch((0, _index.removeFromCart)(id)),
        processCartItems: (use_wallet, extraParams) => dispatch((0, _index.processCartItems)(use_wallet, extraParams)),
        selectProfile: id => dispatch((0, _index.selectProfile)(id)),
        selectOpdTimeSLot: (slot, reschedule, appointmentId, dateParam) => dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId, dateParam)),
        selectLabTimeSLot: (slot, reschedule, dateParam) => dispatch((0, _index.selectLabTimeSLot)(slot, reschedule, dateParam)),
        saveProfileProcedures: (doctor_id, clinic_id, selectedProcedures, forceAdd) => dispatch((0, _index.saveProfileProcedures)(doctor_id, clinic_id, selectedProcedures, forceAdd)),
        clearAllTests: () => dispatch((0, _index.clearAllTests)()),
        applyCoupons: (productId, couponData, couponId, doctor_id) => dispatch((0, _index.applyCoupons)(productId, couponData, couponId, doctor_id)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd)),
        fetchTransactions: () => dispatch((0, _index.fetchTransactions)()),
        selectLabAppointmentType: type => dispatch((0, _index.selectLabAppointmentType)(type)),
        sendAgentBookingURL: (orderId, type, purchase_type, query_data, extraParams, cb) => dispatch((0, _index.sendAgentBookingURL)(orderId, type, purchase_type, query_data, extraParams, cb)),
        select_opd_payment_type: type => dispatch((0, _index.select_opd_payment_type)(type)),
        savePincode: pincode => dispatch((0, _index.savePincode)(pincode)),
        setCommonUtmTags: (type, tag) => dispatch((0, _index.setCommonUtmTags)(type, tag)),
        unSetCommonUtmTags: (type, tag) => dispatch((0, _index.unSetCommonUtmTags)(type, tag))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cart);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9jYXJ0L2NhcnRJdGVtLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvY2FydC9jYXJ0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2NhcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9wYXltZW50Rm9ybS9QYXltZW50Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3BheW1lbnRGb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9Cb29raW5nQ29uZmlybWF0aW9uUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3BhdGllbnREZXRhaWxzL2Jvb2tpbmdFcnJvclBvcFVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvY2FydC5qcyJdLCJuYW1lcyI6WyJpc1ZpcCIsImNvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwiTG9hZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJDYXJ0SXRlbSIsInN0YXRlIiwicmVtb3ZlRnJvbUNhcnQiLCJpZCIsImVkaXQiLCJpdGVtIiwidmFsaWQiLCJwcm9kdWN0X2lkIiwibXJwIiwiZGVhbF9wcmljZSIsImRhdGEiLCJsYWIiLCJ0ZXN0X2lkcyIsImRvY3RvciIsImhvc3BpdGFsIiwiY291cG9uX2NvZGUiLCJwcm9maWxlIiwicHJvY2VkdXJlX2lkcyIsImlzX2hvbWVfcGlja3VwIiwiYWRkcmVzcyIsInN0YXJ0X2RhdGUiLCJzdGFydF90aW1lIiwiYWN0dWFsX2RhdGEiLCJzZXRPcGRCb29raW5nIiwic2V0TGFiQm9va2luZyIsImJ1aWxkT3BkVGltZVNsb3QiLCJ0aW1lIiwidGV4dCIsIkRhdGUiLCJkYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwic3BsaXQiLCJjb25zdWx0YXRpb24iLCJpc19hdmFpbGFibGUiLCJmZWVzIiwicHJpY2UiLCJ0aXRsZSIsImdldEhvdXJzIiwidmFsdWUiLCJnZXRNaW51dGVzIiwiYnVpbGRMYWJUaW1lU2xvdCIsIm11bHRpX3RpbWluZ3NfZW5hYmxlZCIsInRpbWVTZWxlY3RlZCIsInBhdGhvbG9neV90aW1pbmciLCJyYWRpb2xvZ3lfdGltaW5nIiwiY29tbW9uX3RpbWluZyIsImZpbmFsVGVzdHMiLCJyX3BpY2t1cCIsInBfcGlja3VwIiwidGVzdHMiLCJtYXAiLCJ0ZXN0Iiwic2VsZWN0ZWRfdGltaW5nc190eXBlIiwidGVzdF9pZCIsInRlc3RfbmFtZSIsInR5cGUiLCJzZWxlY3RlZFR5cGUiLCJzZWxlY3RMYWJBcHBvaW50bWVudFR5cGUiLCJnZXRGb3JtYXR0ZWREYXRlIiwiZGQiLCJnZXREYXRlIiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInRvZGF5IiwidGltZV9zbG90IiwidGltZVNsb3QiLCJzbG90Iiwic2VsZWN0ZWREb2N0b3IiLCJzZWxlY3RlZENsaW5pYyIsImV4dHJhVGltZVBhcmFtcyIsInNlbGVjdE9wZFRpbWVTTG90IiwiY291cG9uX2lkIiwiaXNfY2FzaGJhY2siLCJsZW5ndGgiLCJjb3Vwb25zIiwiYXBwbHlDb3Vwb25zIiwiY29kZSIsInBheW1lbnRfdHlwZSIsInNlbGVjdF9vcGRfcGF5bWVudF90eXBlIiwic2VsZWN0UHJvZmlsZSIsInNhdmVQcm9maWxlUHJvY2VkdXJlcyIsInVybCIsImhpc3RvcnkiLCJwdXNoIiwiY2xlYXJBbGxUZXN0cyIsImN1cnJfdGVzdCIsImN1cnIiLCJleHRyYV90ZXN0IiwibGFiX2lkIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJwaW5jb2RlIiwic2F2ZVBpbmNvZGUiLCJzZWxlY3RMYWJUaW1lU0xvdCIsImlzX2l0ZW1fb2xkIiwiaXNfZW5hYmxlZF9mb3JfY29kIiwiY29kX2RlYWxfcHJpY2UiLCJ0aHVtYm5haWwiLCJwcm9jZWR1cmVzIiwiaW5zdXJhbmNlX21lc3NhZ2UiLCJpc19hcHBvaW50bWVudF9pbnN1cmVkIiwiaW5jbHVkZWRfaW5fdXNlcl9wbGFuIiwiY292ZXJfdW5kZXJfdmlwIiwiaXNfdmlwX21lbWJlciIsInZpcF9hbW91bnQiLCJpc19nb2xkX21lbWJlciIsInZpcF9jb252ZW5pZW5jZV9hbW91bnQiLCJhbW91bnRfdG9fYmVfcGFpZCIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJpc192aXBfYXBwbGljYWJsZSIsImlzX2dvbGRfcHJpY2UiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJBU1NFVFNfQkFTRV9VUkwiLCJ0b0RhdGVTdHJpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJpIiwicHJvYyIsImJpbmQiLCJpc19hZ2VudF9ib29raW5nIiwiQ2FydFZpZXciLCJjbG9zZUVycm9yUG9wdXAiLCJzZXRTdGF0ZSIsImVycm9yIiwidXNlX3dhbGxldCIsImVycm9yX21lc3NhZ2UiLCJzaG93Q29uZmlybWF0aW9uUG9wdXAiLCJwYXltZW50RGF0YSIsImlzTWF0cml4IiwiaXNfbWF0cml4IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvZ2dsZVdhbGxldFVzZSIsImUiLCJ0YXJnZXQiLCJjaGVja2VkIiwiZ2V0UHJpY2VCcmVha3VwIiwiY2FydF9pdGVtcyIsInRvdGFsX21ycCIsInRvdGFsX2RlYWxfcHJpY2UiLCJ0b3RhbF9ob21lX3BpY2t1cF9jaGFyZ2VzIiwidG90YWxfY291cG9uX2Rpc2NvdW50IiwidG90YWxfY291cG9uX2Nhc2hiYWNrIiwiY291cG9uX2JyZWFrdXAiLCJjYXNoYmFja19icmVha3VwIiwicGxhdGZvcm1Db252RmVlcyIsInRvdGFsX2FtbnQiLCJ2aXBfYW1udF9wcmljZSIsInBhcnNlSW50IiwiY291cG9uX2Rpc2NvdW50IiwiY291cG9uX2Nhc2hiYWNrIiwicHJvY2Vzc0NhcnQiLCJ0b3RhbF9wcmljZSIsImlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cyIsImlzX2FueV92aXBfYXBwb2ludG1lbnQiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJjdXJyZW50VGltZSIsImdldFRpbWUiLCJleHRyYVBhcmFtcyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImNvbW1vbl91dG1fdGFncyIsImZpbHRlciIsIngiLCJzcG9fdGFncyIsInNlc3Npb25WYWwiLCJ1dG1fdGFncyIsImN1cnJlbnRTZXNzaW9uSWQiLCJ0aW1lX29mZnNldCIsInVuU2V0Q29tbW9uVXRtVGFncyIsInByb2Nlc3NDYXJ0SXRlbXMiLCJ0aGVuIiwicGF5bWVudF9yZXF1aXJlZCIsInByb2Nlc3NQYXltZW50IiwicmVwbGFjZSIsIm9yZGVySWQiLCJjYXRjaCIsIm1lc3NhZ2UiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJnZXRCb29raW5nQnV0dG9uVGV4dCIsInRvdGFsX3dhbGxldF9iYWxhbmNlIiwicHJpY2VfdG9fcGF5IiwicHJpY2VfZnJvbV93YWxsZXQiLCJwcmljZV9mcm9tX3BnIiwiTWF0aCIsIm1pbiIsInNlbmRBZ2VudEJvb2tpbmdVUkwiLCJkYXRhUGFyYW1zIiwiZXJyIiwicmVzIiwicHJpY2VDb25maXJtYXRpb25Qb3B1cCIsImNob2ljZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGljayIsInN0YXR1cyIsInNldFRpbWVvdXQiLCJPYmplY3QiLCJrZXlzIiwiZm9ybSIsInN1Ym1pdCIsImNhcnQiLCJ1c2VyV2FsbGV0QmFsYW5jZSIsInVzZXJDYXNoYmFja0JhbGFuY2UiLCJpbnZhbGlkX2l0ZW1zIiwidmFsaWRfaXRlbXMiLCJhbGxfYXBwb2ludG1lbnRzX2luc3VyZWQiLCJpc19jb2RfYXBwbGljYWJsZSIsImlzX3BsYXRmb3JtX2NvbnZfZmVlcyIsImlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkIiwicHJvZmlsZXMiLCJkZWZhdWx0UHJvZmlsZSIsImlzX2luc3VyZWQiLCJpbnN1cmFuY2Vfc3RhdHVzIiwiY2FydF9pdGVtIiwiY3AiLCJqIiwia2V5IiwiZm9udFdlaWdodCIsIlNUT1JBR0UiLCJpc0FnZW50IiwibWVzc2FnZV9tZWRpdW0iLCJQYXltZW50Rm9ybSIsInJlZnMiLCJnZXRQYXltZW50Tm9kZU5hbWUiLCJpbmRleCIsIkNPTkZJRyIsIlBHX01VTFRJX09SREVSX1VSTCIsIlBHX1VSTCIsImRpc3BsYXkiLCJCb29raW5nQ29uZmlybWF0aW9uUG9wdXAiLCJpc19nb2xkIiwiQm9va2luZ0Vycm9yIiwiQ2FydCIsImNoZWNrQXV0aCIsImdldFVzZXJQcm9maWxlIiwiZ2V0Q2FydEl0ZW1zIiwiZmV0Y2hUcmFuc2FjdGlvbnMiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJVU0VSIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJyZXNjaGVkdWxlIiwiYXBwb2ludG1lbnRJZCIsImRhdGVQYXJhbSIsImRvY3Rvcl9pZCIsImNsaW5pY19pZCIsInNlbGVjdGVkUHJvY2VkdXJlcyIsImZvcmNlQWRkIiwicHJvZHVjdElkIiwiY291cG9uRGF0YSIsImNvdXBvbklkIiwiY3JpdGVyaWEiLCJwdXJjaGFz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LFNBQVMscUNBQXlCdk0sSUFBekIsQ0FBVCxDQWJqQztBQWNIOEksNkJBQXFCLENBQUNiLE9BQUQsRUFBVWpJLElBQVYsRUFBZ0JtTixhQUFoQixFQUE4QkMsVUFBOUIsRUFBeUNwRyxXQUF6QyxFQUFzRHFHLEVBQXRELEtBQTZEZCxTQUFTLGdDQUFvQnRFLE9BQXBCLEVBQTZCakksSUFBN0IsRUFBa0NtTixhQUFsQyxFQUFnREMsVUFBaEQsRUFBNERwRyxXQUE1RCxFQUF5RXFHLEVBQXpFLENBQVQsQ0FkL0U7QUFlSDVMLGlDQUEwQnpCLElBQUQsSUFBVXVNLFNBQVMsb0NBQXdCdk0sSUFBeEIsQ0FBVCxDQWZoQztBQWdCSHNDLHFCQUFjRCxPQUFELElBQWFrSyxTQUFTLHdCQUFZbEssT0FBWixDQUFULENBaEJ2QjtBQWlCSGlMLDBCQUFrQixDQUFDdE4sSUFBRCxFQUFPdU4sR0FBUCxLQUFlaEIsU0FBUyw2QkFBaUJ2TSxJQUFqQixFQUF1QnVOLEdBQXZCLENBQVQsQ0FqQjlCO0FBa0JINUYsNEJBQW9CLENBQUMzSCxJQUFELEVBQU91TixHQUFQLEtBQWNoQixTQUFTLCtCQUFtQnZNLElBQW5CLEVBQXlCdU4sR0FBekIsQ0FBVDtBQWxCL0IsS0FBUDtBQW9CSCxDQXJCRDs7a0JBd0JlLHlCQUFRbkIsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDVCxJQUE3QyxDIiwiZmlsZSI6IjQ5LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7IGlzVmlwIH0pID0+IHtcblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17YGRzY2xtZXItZnRyICR7aXNWaXA/J21hcmdpbi1ib3R0b20tNTUnOicnfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjBcIiBzdHlsZT17eyBjb2xvcjogJyM4YThhOGEnLCBmb250U2l6ZTogMTAgfX0gPlRoZSBXZWJzaXRlIGlzIG5vdCBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhc2Ugb2YgYSBtZWRpY2FsIGVtZXJnZW5jeSBhbmQvIG9yIGNyaXRpY2FsIGNhcmUgYW5kIHRoZSB1c2VyIHNob3VsZCBkaXJlY3RseSBjb250YWN0IGhpcy8gaGVyIG1lZGljYWwgc2VydmljZSBwcm92aWRlciBmb3IgUGh5c2ljYWwgRXhhbWluYXRpb24uIERvY3ByaW1lIGlzIHNvbGVseSBhIHRlY2hub2xvZ3kgcGFydG5lci48L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgZm9vdGVyLW5ldy1jb3B5cmdodFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDUgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8cD5Eb2NwcmltZS5jb20gQ29weXJpZ2h0ICZjb3B5OyAyMDIwLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRPQ1BSSU1FIFRFQ0hOT0xPR0lFUyBQUklWQVRFIExJTUlURUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNJTiA6IFU3NDk5OUhSMjAxNlBUQzA2NDMxMjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pilcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5jbGFzcyBDYXJ0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUZyb21DYXJ0KGlkKSB7XG4gICAgICAgIHRoaXMucHJvcHMucmVtb3ZlRnJvbUNhcnQoaWQpXG4gICAgfVxuXG4gICAgZWRpdChpdGVtKSB7XG4gICAgICAgIGxldCB7IHZhbGlkLCBwcm9kdWN0X2lkLCBtcnAsIGRlYWxfcHJpY2UsIGlkLCBkYXRhIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGxldCB7IGxhYiwgdGVzdF9pZHMsIGRvY3RvciwgaG9zcGl0YWwsIGNvdXBvbl9jb2RlLCBwcm9maWxlLCBwcm9jZWR1cmVfaWRzLCBpc19ob21lX3BpY2t1cCwgYWRkcmVzcywgc3RhcnRfZGF0ZSwgc3RhcnRfdGltZSB9ID0gdGhpcy5wcm9wcy5hY3R1YWxfZGF0YVxuXG4gICAgICAgIC8vIGRvY3RvclxuICAgICAgICBpZiAocHJvZHVjdF9pZCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldE9wZEJvb2tpbmcodGhpcy5wcm9wcylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGFiXG4gICAgICAgIGlmIChwcm9kdWN0X2lkID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TGFiQm9va2luZyh0aGlzLnByb3BzKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGJ1aWxkT3BkVGltZVNsb3QoZGF0YSkge1xuXG4gICAgICAgIGxldCB0aW1lID0ge1xuICAgICAgICAgICAgdGV4dDogbmV3IERhdGUoZGF0YS5kYXRhLmRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pLnNwbGl0KCcgJylbMF0sXG4gICAgICAgICAgICBkZWFsX3ByaWNlOiBkYXRhLmNvbnN1bHRhdGlvbi5kZWFsX3ByaWNlLFxuICAgICAgICAgICAgaXNfYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgbXJwOiBkYXRhLmNvbnN1bHRhdGlvbi5tcnAsXG4gICAgICAgICAgICBmZWVzOmRhdGEuY29uc3VsdGF0aW9uLmZlZXMsXG4gICAgICAgICAgICBwcmljZTogZGF0YS5jb25zdWx0YXRpb24uZGVhbF9wcmljZSxcbiAgICAgICAgICAgIHRpdGxlOiBuZXcgRGF0ZShkYXRhLmRhdGEuZGF0ZSkuZ2V0SG91cnMoKSA+PSAxMiA/ICdQTScgOiAnQU0nLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGRhdGEuZGF0YS5kYXRlKS5nZXRIb3VycygpICsgbmV3IERhdGUoZGF0YS5kYXRhLmRhdGUpLmdldE1pbnV0ZXMoKSAvIDYwXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGltZVxuXG4gICAgfVxuXG4gICAgYnVpbGRMYWJUaW1lU2xvdChkYXRhKSB7XG4gICAgICAgIC8qbGV0IHRpbWVTbG90ID0ge1xuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGEuZGF0YS5kYXRlKSxcbiAgICAgICAgICAgICAgICB0aW1lOiB0aW1lX3Nsb3RcbiAgICAgICAgICAgIH0qL1xuICAgICAgICAvKmxldCB0aW1lID0ge1xuICAgICAgICAgICAgZGVhbF9wcmljZTogZGF0YS5kZWFsX3ByaWNlLFxuICAgICAgICAgICAgaXNfYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgbXJwOiBkYXRhLm1ycCxcbiAgICAgICAgICAgIHByaWNlOiBkYXRhLmRlYWxfcHJpY2UsXG4gICAgICAgICAgICB0aW1lLnRleHQgOm5ldyBEYXRlKGRhdGEuZGF0YS5kYXRlKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSB9KS5zcGxpdCgnICcpWzBdXG4gICAgICAgICAgICB0aW1lLnRpdGxlIDogbmV3IERhdGUoZGF0YS5kYXRhLmRhdGUpLmdldEhvdXJzKCkgPj0gMTIgPyAnUE0nIDogJ0FNJyxcbiAgICAgICAgICAgIHRpbWUudmFsdWUgOiBuZXcgRGF0ZShkYXRhLmRhdGEuZGF0ZSkuZ2V0SG91cnMoKSArIG5ldyBEYXRlKGRhdGEuZGF0YS5kYXRlKS5nZXRNaW51dGVzKCkgLyA2MFxuICAgICAgICB9Ki9cbiAgICAgICAgbGV0IHRpbWUgPSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGRhdGEuYWN0dWFsX2RhdGEubXVsdGlfdGltaW5nc19lbmFibGVkKSB7XG4gICAgICAgICAgICBsZXQgdGltZVNlbGVjdGVkID0ge31cbiAgICAgICAgICAgIGxldCBwYXRob2xvZ3lfdGltaW5nID0ge31cbiAgICAgICAgICAgIGxldCByYWRpb2xvZ3lfdGltaW5nID0ge31cbiAgICAgICAgICAgIGxldCBjb21tb25fdGltaW5nID0ge31cbiAgICAgICAgICAgIGxldCBmaW5hbFRlc3RzID0ge31cbiAgICAgICAgICAgIGxldCByX3BpY2t1cCA9ICdob21lJ1xuICAgICAgICAgICAgbGV0IHBfcGlja3VwID0gJ2hvbWUnXG4gICAgICAgICAgICBkYXRhLmRhdGEudGVzdHMubWFwKCh0ZXN0KT0+e1xuXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5kYXRhLnNlbGVjdGVkX3RpbWluZ3NfdHlwZT09J2NvbW1vbicpe1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRpbWVTZWxlY3RlZFsnYWxsJ10pe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxUZXN0c1t0ZXN0LnRlc3RfaWRdID0gey4uLnRpbWVTZWxlY3RlZFsnYWxsJ10sIHRlc3RfaWQ6dGVzdC50ZXN0X2lkLCB0ZXN0X25hbWU6ICcnLCBpc19ob21lX3BpY2t1cDogdGVzdC5pc19ob21lX3BpY2t1cH1cbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tb25fdGltaW5nID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG5ldyBEYXRlKHRlc3QuZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSkuc3BsaXQoJyAnKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWFsX3ByaWNlOiB0ZXN0LmRlYWxfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ycDogdGVzdC5tcnAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHRlc3QuZGVhbF9wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpuZXcgRGF0ZSh0ZXN0LmRhdGUpLmdldEhvdXJzKCkgPj0gMTIgPyAnUE0nIDogJ0FNJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpuZXcgRGF0ZSh0ZXN0LmRhdGUpLmdldEhvdXJzKCkgKyBuZXcgRGF0ZSh0ZXN0LmRhdGUpLmdldE1pbnV0ZXMoKSAvIDYwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwX3BpY2t1cCA9IHRlc3QuaXNfaG9tZV9waWNrdXA/J2hvbWUnOidsYWInXG4gICAgICAgICAgICAgICAgICAgICAgICByX3BpY2t1cCA9IHRlc3QuaXNfaG9tZV9waWNrdXA/J2hvbWUnOidsYWInXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lU2VsZWN0ZWRbJ2FsbCddID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6bmV3IERhdGUodGVzdC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBjb21tb25fdGltaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6J2FsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdF9pZDogdGVzdC50ZXN0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFRlc3RzW3Rlc3QudGVzdF9pZF0gPSB7Li4udGltZVNlbGVjdGVkWydhbGwnXSwgdGVzdF9pZDp0ZXN0LnRlc3RfaWQsIHRlc3RfbmFtZTogdGVzdC50ZXN0X25hbWUsIGlzX2hvbWVfcGlja3VwOiB0ZXN0LmlzX2hvbWVfcGlja3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aW1lU2VsZWN0ZWRbJ3NlbGVjdGVkVGVzdHNUaW1lU2xvdCddID0gdGltZVNlbGVjdGVkWydzZWxlY3RlZFRlc3RzVGltZVNsb3QnXT97Li4udGltZVNlbGVjdGVkWydzZWxlY3RlZFRlc3RzVGltZVNsb3QnXX06e31cblxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH1lbHNlIHtcblxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRlc3QudHlwZT09Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGltZVNlbGVjdGVkWydwYXRob2xvZ3knXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxUZXN0c1t0ZXN0LnRlc3RfaWRdID0gey4uLnRpbWVTZWxlY3RlZFsncGF0aG9sb2d5J10sIHRlc3RfaWQ6dGVzdC50ZXN0X2lkLCB0ZXN0X25hbWU6ICcnLCBpc19ob21lX3BpY2t1cDogdGVzdC5pc19ob21lX3BpY2t1cH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhvbG9neV90aW1pbmcgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG5ldyBEYXRlKHRlc3QuZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSkuc3BsaXQoJyAnKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhbF9wcmljZTogdGVzdC5kZWFsX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19hdmFpbGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ycDogdGVzdC5tcnAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiB0ZXN0LmRlYWxfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOm5ldyBEYXRlKHRlc3QuZGF0ZSkuZ2V0SG91cnMoKSA+PSAxMiA/ICdQTScgOiAnQU0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpuZXcgRGF0ZSh0ZXN0LmRhdGUpLmdldEhvdXJzKCkgKyBuZXcgRGF0ZSh0ZXN0LmRhdGUpLmdldE1pbnV0ZXMoKSAvIDYwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBfcGlja3VwID0gdGVzdC5pc19ob21lX3BpY2t1cD8naG9tZSc6J2xhYidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lU2VsZWN0ZWRbJ3BhdGhvbG9neSddID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOm5ldyBEYXRlKHRlc3QuZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IHBhdGhvbG9neV90aW1pbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6J3BhdGhvbG9neScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfaWQ6IHRlc3QudGVzdF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFRlc3RzW3Rlc3QudGVzdF9pZF0gPSB7Li4udGltZVNlbGVjdGVkWydwYXRob2xvZ3knXSwgdGVzdF9pZDp0ZXN0LnRlc3RfaWQsIHRlc3RfbmFtZTogdGVzdC50ZXN0X25hbWUsIGlzX2hvbWVfcGlja3VwOiB0ZXN0LmlzX2hvbWVfcGlja3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGltZVNlbGVjdGVkWydzZWxlY3RlZFRlc3RzVGltZVNsb3QnXSA9IHRpbWVTZWxlY3RlZFsnc2VsZWN0ZWRUZXN0c1RpbWVTbG90J10/ey4uLnRpbWVTZWxlY3RlZFsnc2VsZWN0ZWRUZXN0c1RpbWVTbG90J119Ont9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodGVzdC50eXBlPT0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aW1lU2VsZWN0ZWRbJ3JhZGlvbG9neSddKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFRlc3RzW3Rlc3QudGVzdF9pZF0gPSB7Li4udGltZVNlbGVjdGVkWydyYWRpb2xvZ3knXSwgdGVzdF9pZDp0ZXN0LnRlc3RfaWQsIHRlc3RfbmFtZTogdGVzdC50ZXN0X25hbWUsIGlzX2hvbWVfcGlja3VwOiB0ZXN0LmlzX2hvbWVfcGlja3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTZWxlY3RlZFsncmFkaW9sb2d5J11bdGVzdC50ZXN0X2lkXSA9IHsuLi50aW1lU2VsZWN0ZWRbJ3JhZGlvbG9neSddLCB0ZXN0X2lkOnRlc3QudGVzdF9pZCwgdGVzdF9uYW1lOiB0ZXN0LnRlc3RfbmFtZSwgaXNfaG9tZV9waWNrdXA6IHRlc3QuaXNfaG9tZV9waWNrdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpb2xvZ3lfdGltaW5nID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBuZXcgRGF0ZSh0ZXN0LmRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH0pLnNwbGl0KCcgJylbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYWxfcHJpY2U6IHRlc3QuZGVhbF9wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcnA6IHRlc3QubXJwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogdGVzdC5kZWFsX3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpuZXcgRGF0ZSh0ZXN0LmRhdGUpLmdldEhvdXJzKCkgPj0gMTIgPyAnUE0nIDogJ0FNJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6bmV3IERhdGUodGVzdC5kYXRlKS5nZXRIb3VycygpICsgbmV3IERhdGUodGVzdC5kYXRlKS5nZXRNaW51dGVzKCkgLyA2MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByX3BpY2t1cCA9IHRlc3QuaXNfaG9tZV9waWNrdXA/J2hvbWUnOidsYWInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNlbGVjdGVkWydyYWRpb2xvZ3knXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTpuZXcgRGF0ZSh0ZXN0LmRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiByYWRpb2xvZ3lfdGltaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOidyYWRpb2xvZ3knLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0X2lkOiB0ZXN0LnRlc3RfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNlbGVjdGVkWydyYWRpb2xvZ3knXVt0ZXN0LnRlc3RfaWRdID0gey4uLnRpbWVTZWxlY3RlZFsncmFkaW9sb2d5J10sIHRlc3RfaWQ6dGVzdC50ZXN0X2lkLCB0ZXN0X25hbWU6IHRlc3QudGVzdF9uYW1lLCBpc19ob21lX3BpY2t1cDogdGVzdC5pc19ob21lX3BpY2t1cH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVGVzdHNbdGVzdC50ZXN0X2lkXSA9IHsuLi50aW1lU2VsZWN0ZWRbJ3JhZGlvbG9neSddLCB0ZXN0X2lkOnRlc3QudGVzdF9pZCwgdGVzdF9uYW1lOiB0ZXN0LnRlc3RfbmFtZSwgaXNfaG9tZV9waWNrdXA6IHRlc3QuaXNfaG9tZV9waWNrdXB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFR5cGUgPSB7XG4gICAgICAgICAgICAgICAgcl9waWNrdXA6IHJfcGlja3VwLFxuICAgICAgICAgICAgICAgIHBfcGlja3VwOiBwX3BpY2t1cFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJBcHBvaW50bWVudFR5cGUoc2VsZWN0ZWRUeXBlKVxuICAgICAgICAgICAgdGltZVNlbGVjdGVkWydzZWxlY3RlZFRlc3RzVGltZVNsb3QnXSA9IGZpbmFsVGVzdHNcbiAgICAgICAgICAgIHJldHVybiB0aW1lU2VsZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aW1lXG5cbiAgICB9XG5cbiAgICBnZXRGb3JtYXR0ZWREYXRlKGRhdGUpe1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSlcbiAgICAgICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgdmFyIG1tID0gZGF0ZS5nZXRNb250aCgpKzE7IFxuICAgICAgICB2YXIgeXl5eSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaWYoZGQ8MTApIFxuICAgICAgICB7XG4gICAgICAgICAgICBkZD0nMCcrZGQ7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYobW08MTApIFxuICAgICAgICB7XG4gICAgICAgICAgICBtbT0nMCcrbW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9kYXkgPSB5eXl5KyctJyttbSsnLScrZGRcbiAgICAgICAgcmV0dXJuIHRvZGF5XG4gICAgfVxuXG4gICAgc2V0T3BkQm9va2luZyhkYXRhKSB7XG5cbiAgICAgICAgaWYgKGRhdGEudmFsaWQpIHtcblxuICAgICAgICAgICAgbGV0IHRpbWVfc2xvdCA9IHRoaXMuYnVpbGRPcGRUaW1lU2xvdChkYXRhKVxuICAgICAgICAgICAgbGV0IHRpbWVTbG90ID0ge1xuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGEuZGF0YS5kYXRlKSxcbiAgICAgICAgICAgICAgICBzbG90OiAnJyxcbiAgICAgICAgICAgICAgICB0aW1lOiB0aW1lX3Nsb3QsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREb2N0b3I6IGRhdGEuYWN0dWFsX2RhdGEuZG9jdG9yLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2xpbmljOiBkYXRhLmFjdHVhbF9kYXRhLmhvc3BpdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZXh0cmFUaW1lUGFyYW1zID0gbnVsbFxuICAgICAgICAgICAgaWYodGltZVNsb3QuZGF0ZSkge1xuICAgICAgICAgICAgICAgIGV4dHJhVGltZVBhcmFtcyA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZSh0aW1lU2xvdC5kYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RPcGRUaW1lU0xvdCh0aW1lU2xvdCwgZmFsc2UsIG51bGwsIGV4dHJhVGltZVBhcmFtcylcblxuICAgICAgICAgICAgaWYgKGRhdGEuYWN0dWFsX2RhdGEuY291cG9uX2NvZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY291cG9uX2lkID0gJydcbiAgICAgICAgICAgICAgICBsZXQgaXNfY2FzaGJhY2sgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGxldCBjb3Vwb25fY29kZSA9IGRhdGEuYWN0dWFsX2RhdGEuY291cG9uX2NvZGUubGVuZ3RoID8gZGF0YS5hY3R1YWxfZGF0YS5jb3Vwb25fY29kZVswXSA6ICcnXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS5jb3Vwb25zICYmIGRhdGEuZGF0YS5jb3Vwb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb3Vwb25faWQgPSBkYXRhLmRhdGEuY291cG9uc1swXS5pZFxuICAgICAgICAgICAgICAgICAgICBpc19jYXNoYmFjayA9IGRhdGEuZGF0YS5jb3Vwb25zWzBdLmlzX2Nhc2hiYWNrXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvdXBvbl9jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlDb3Vwb25zKCcxJywgeyBjb2RlOiBjb3Vwb25fY29kZSwgY291cG9uX2lkOiBjb3Vwb25faWQsIGlzX2Nhc2hiYWNrOiBpc19jYXNoYmFjayB9LCBjb3Vwb25faWQsIGRhdGEuYWN0dWFsX2RhdGEuZG9jdG9yKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5hY3R1YWxfZGF0YS5wYXltZW50X3R5cGUgPj0gMCAmJiBkYXRhLmFjdHVhbF9kYXRhLnBheW1lbnRfdHlwZSA8PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3Rfb3BkX3BheW1lbnRfdHlwZShkYXRhLmFjdHVhbF9kYXRhLnBheW1lbnRfdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0UHJvZmlsZShkYXRhLmFjdHVhbF9kYXRhLnByb2ZpbGUpXG4gICAgICAgIGlmIChkYXRhLmFjdHVhbF9kYXRhLnByb2NlZHVyZV9pZHMgJiYgZGF0YS5hY3R1YWxfZGF0YS5wcm9jZWR1cmVfaWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlUHJvZmlsZVByb2NlZHVyZXMoJycsICcnLCBkYXRhLmFjdHVhbF9kYXRhLnByb2NlZHVyZV9pZHMsIHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuZGF0YS5kb2N0b3IgJiYgZGF0YS5kYXRhLmRvY3Rvci51cmwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtkYXRhLmRhdGEuZG9jdG9yLnVybH0vYm9va2luZz9kb2N0b3JfaWQ9JHtkYXRhLmFjdHVhbF9kYXRhLmRvY3Rvcn0maG9zcGl0YWxfaWQ9JHtkYXRhLmFjdHVhbF9kYXRhLmhvc3BpdGFsfSZjYXJ0X2l0ZW09JHt0aGlzLnByb3BzLmlkfWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtkYXRhLmFjdHVhbF9kYXRhLmRvY3Rvcn0vJHtkYXRhLmFjdHVhbF9kYXRhLmhvc3BpdGFsfS9ib29rZGV0YWlscz9jYXJ0X2l0ZW09JHt0aGlzLnByb3BzLmlkfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRMYWJCb29raW5nKGRhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckFsbFRlc3RzKClcbiAgICAgICAgZm9yIChsZXQgY3Vycl90ZXN0IG9mIGRhdGEuYWN0dWFsX2RhdGEudGVzdF9pZHMpIHtcbiAgICAgICAgICAgIGxldCBjdXJyID0ge31cbiAgICAgICAgICAgIGN1cnIuaWQgPSBjdXJyX3Rlc3RcbiAgICAgICAgICAgIGN1cnIuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgICAgIGN1cnIubGFiX2lkID0gZGF0YS5hY3R1YWxfZGF0YS5sYWJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCBjdXJyLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuYWN0dWFsX2RhdGEgJiYgZGF0YS5hY3R1YWxfZGF0YS5waW5jb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNhdmVQaW5jb2RlKGRhdGEuYWN0dWFsX2RhdGEucGluY29kZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0UHJvZmlsZShkYXRhLmFjdHVhbF9kYXRhLnByb2ZpbGUpXG4gICAgICAgIGlmIChkYXRhLnZhbGlkKSB7XG4gICAgICAgICAgICBsZXQgdGltZVNsb3QgPSB0aGlzLmJ1aWxkTGFiVGltZVNsb3QoZGF0YSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGV4dHJhVGltZVBhcmFtcyA9IG51bGxcbiAgICAgICAgICAgIGlmKHRpbWVTbG90LmRhdGUpe1xuICAgICAgICAgICAgICAgIGV4dHJhVGltZVBhcmFtcyA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZSh0aW1lU2xvdC5kYXRlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJUaW1lU0xvdCh0aW1lU2xvdCwgZmFsc2UsIGV4dHJhVGltZVBhcmFtcylcbiAgICAgICAgICAgIGlmIChkYXRhLmFjdHVhbF9kYXRhLmNvdXBvbl9jb2RlKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgY291cG9uX2lkID0gJydcbiAgICAgICAgICAgICAgICBsZXQgaXNfY2FzaGJhY2sgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGxldCBjb3Vwb25fY29kZSA9IGRhdGEuYWN0dWFsX2RhdGEuY291cG9uX2NvZGUubGVuZ3RoID8gZGF0YS5hY3R1YWxfZGF0YS5jb3Vwb25fY29kZVswXSA6ICcnXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS5jb3Vwb25zICYmIGRhdGEuZGF0YS5jb3Vwb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb3Vwb25faWQgPSBkYXRhLmRhdGEuY291cG9uc1swXS5pZFxuICAgICAgICAgICAgICAgICAgICBpc19jYXNoYmFjayA9IGRhdGEuZGF0YS5jb3Vwb25zWzBdLmlzX2Nhc2hiYWNrXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY291cG9uX2NvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUNvdXBvbnMoJzInLCB7IGNvZGU6IGNvdXBvbl9jb2RlLCBjb3Vwb25faWQ6IGNvdXBvbl9pZCwgaXNfY2FzaGJhY2s6IGlzX2Nhc2hiYWNrIH0sIGNvdXBvbl9pZCwgZGF0YS5hY3R1YWxfZGF0YS5sYWIpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKmlmIChkYXRhLmFjdHVhbF9kYXRhLmlzX2hvbWVfcGlja3VwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJBcHBvaW50bWVudFR5cGUoJ2hvbWUnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSgnbGFiJylcbiAgICAgICAgICAgIH0qL1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5kYXRhLmxhYiAmJiBkYXRhLmRhdGEubGFiLnVybCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke2RhdGEuZGF0YS5sYWIudXJsfS9ib29raW5nP2xhYl9pZD0ke2RhdGEuYWN0dWFsX2RhdGEubGFifSZjYXJ0X2l0ZW09JHt0aGlzLnByb3BzLmlkfWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke2RhdGEuYWN0dWFsX2RhdGEubGFifS9ib29rP2NhcnRfaXRlbT0ke3RoaXMucHJvcHMuaWR9YClcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaXNfaXRlbV9vbGQoZGF0ZSkge1xuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKCkpID4gKG5ldyBEYXRlKGRhdGUpKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgeyB2YWxpZCwgcHJvZHVjdF9pZCwgbXJwLCBkZWFsX3ByaWNlLCBpZCwgaXNfZW5hYmxlZF9mb3JfY29kLCBjb2RfZGVhbF9wcmljZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBsZXQgeyBsYWIsIHRlc3RzLCBkb2N0b3IsIGhvc3BpdGFsLCBjb3Vwb25zLCBwcm9maWxlLCBkYXRlLCB0aHVtYm5haWwsIHByb2NlZHVyZXMgfSA9IHRoaXMucHJvcHMuZGF0YVxuICAgICAgICBsZXQgeyBpc19ob21lX3BpY2t1cCwgcGF5bWVudF90eXBlLCBpbnN1cmFuY2VfbWVzc2FnZSwgaXNfYXBwb2ludG1lbnRfaW5zdXJlZCwgaW5jbHVkZWRfaW5fdXNlcl9wbGFuLCBjb3Zlcl91bmRlcl92aXAsIGlzX3ZpcF9tZW1iZXIsIHZpcF9hbW91bnQsIGlzX2dvbGRfbWVtYmVyLCB2aXBfY29udmVuaWVuY2VfYW1vdW50LCBhbW91bnRfdG9fYmVfcGFpZCB9ID0gdGhpcy5wcm9wcy5hY3R1YWxfZGF0YVxuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgaXNfdmlwX2FwcGxpY2FibGUgPSBpc192aXBfbWVtYmVyICYmIGNvdmVyX3VuZGVyX3ZpcFxuICAgICAgICBsZXQgaXNfZ29sZF9wcmljZSA9IHZpcF9hbW91bnQgKyB2aXBfY29udmVuaWVuY2VfYW1vdW50XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNSBtcm5nLXRvcC0xMiBwLXJlbGF0aXZlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3ZhbGlkID8gXCJcIiA6IFwiY2FydC1jYXJkLWJsdXItb3BhY2l0eVwifT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdmFsaWQgPyA8cCBjbGFzc05hbWU9XCJhcHBvaW50bWVudFBhc3NlZFwiPllvdXIgYXBwb2ludG1lbnQgZGF0ZSBhbmQgdGltZSBoYXMgcGFzc2VkLjwvcD4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2dvbGRfbWVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPzxkaXYgY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+4oK5IHthbW91bnRfdG9fYmVfcGFpZH0gPHNwYW4gY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2UtY3V0XCI+4oK5IHttcnB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGlzX3ZpcF9hcHBsaWNhYmxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+4oK5IHthbW91bnRfdG9fYmVfcGFpZH0gPHNwYW4gY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2UtY3V0XCI+4oK5IHttcnB9PC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuKCuSB7aXNfZ29sZF9wcmljZX0gPHNwYW4gY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2UtY3V0XCI+4oK5IHttcnB9PC9zcGFuPiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge2lzX3ZpcF9hcHBsaWNhYmxlIHx8IGlzX2dvbGRfbWVtYmVyPyAnJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19hcHBvaW50bWVudF9pbnN1cmVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wbmctY2FydC1wcmljZSBpbnMtdmFsLWJ4XCI+Q292ZXJlZCBVbmRlciBJbnN1cmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlZF9pbl91c2VyX3BsYW4gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wbmctY2FydC1wcmljZSBpbnMtdmFsLWJ4IHBrZy1kaXNjb3VudENwblwiPkRvY3ByaW1lIENhcmUgQmVuZWZpdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXltZW50X3R5cGUgPT0gMSA/IDxkaXYgY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ycCAhPSBkZWFsX3ByaWNlID8gPHA+4oK5IHtkZWFsX3ByaWNlfSA8c3BhbiBjbGFzc05hbWU9XCJzaG9wbmctY2FydC1wcmljZS1jdXRcIj7igrkge21ycH08L3NwYW4+PC9wPiA6IG1ycCA9PSBkZWFsX3ByaWNlPzxwPuKCuSB7ZGVhbF9wcmljZX08L3A+OlwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwYXltZW50X3R5cGUgPT0gMiAmJiBpc19lbmFibGVkX2Zvcl9jb2QgJiYgbXJwICE9IGNvZF9kZWFsX3ByaWNlPyA8ZGl2IGNsYXNzTmFtZT1cInNob3BuZy1jYXJ0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcnAgPyA8cD7igrkge2NvZF9kZWFsX3ByaWNlP2NvZF9kZWFsX3ByaWNlOmRlYWxfcHJpY2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNob3BuZy1jYXJ0LXByaWNlLWN1dFwiPuKCuSB7bXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwic2hvcG5nLWNhcnQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXJwID8gPHA+4oK5IHttcnB9PC9wPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIGRyLXF1Y2lrLWluZm8gd2lkZ2V0SGVhZGVyUGFkZGluZ1RvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yID8gPEluaXRpYWxzUGljdHVyZSBuYW1lPXtkb2N0b3IubmFtZX0gaGFzX2ltYWdlPXshIXRodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWRiZCBjYXJ0LWluaXRpYWxzcGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aHVtYm5haWx9IHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGhlaWdodDogJzUwcHgnLCBtYXJnaW5Ub3A6ICc4cHgnIH19IGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbWctcm91bmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPiA6IDxJbml0aWFsc1BpY3R1cmUgbmFtZT17bGFiICYmIGxhYi5uYW1lP2xhYi5uYW1lOicnfSBoYXNfaW1hZ2U9eyEhdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUteHMtY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICdhdXRvJywgd2lkdGg6ICdhdXRvJywgbWFyZ2luVG9wOiAnMTVweCcgfX0gc3JjPXt0aHVtYm5haWx9IGNsYXNzTmFtZT1cImZsdHItdXNyLWltYWdlLWxhYlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvciA/IDxkaXYgY2xhc3NOYW1lPVwiZHItcHJvZmlsZSBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkci1uYW1lIHZpcC1pY28taGRuZ1wiPkRyLiB7ZG9jdG9yLm5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc19nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e2hlaWdodDonMTVweCcsIHdpZHRoOiczNXB4J319IGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWQgdmlwLWljby1oZG5nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXNfdmlwX2FwcGxpY2FibGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3toZWlnaHQ6JzI4cHgnLCB3aWR0aDonMjVweCd9fSBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkIHZpcC1pY28taGRuZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKmlzX2dvbGRfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7aGVpZ2h0OicxNXB4Jywgd2lkdGg6JzM1cHgnfX0gY2xhc3NOYW1lPVwidmlwLW1haW4taWNvIGltZy1mbHVpZCB2aXAtaWNvLWhkbmdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JycqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudF90eXBlID09IDIgPyA8c3BhbiBjbGFzc05hbWU9XCJwYXktYXQtY2xpbmljXCI+UGF5IGF0IENsaW5pYzwvc3Bhbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjbGluaWMtbmFtZSB0ZXh0LXNtXCI+e2hvc3BpdGFsLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cImRyLXByb2ZpbGUgbXJ0LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRyLW5hbWUgdmlwLWljby1oZG5nXCI+e2xhYiAmJiBsYWIubmFtZT9sYWIubmFtZTonJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc19nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3toZWlnaHQ6JzE1cHgnLCB3aWR0aDonMzVweCd9fSBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkIHZpcC1pY28taGRuZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpc192aXBfYXBwbGljYWJsZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3toZWlnaHQ6JzI4cHgnLCB3aWR0aDonMjVweCd9fSBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkIHZpcC1pY28taGRuZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcHBpbmctY2FyZC1kZXRhaWxzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPyA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNocG5nLWR0bHMtaWNvXCI+PGltZyBzdHlsZT17eyBtYXJnaW5Ub3A6ICcycHgnLCB3aWR0aDogJzE1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IC8+PC9zcGFuPntkYXRlLnRvRGF0ZVN0cmluZygpfSB8IHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IgPyBcIlwiIDogPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzX2hvbWVfcGlja3VwID8gXCIgfCBIb21lIHBpY2t1cFwiIDogXCIgfCBDZW50ZXIgdmlzaXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZSA/IDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvciA/IDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hwbmctZHRscy1pY29cIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL253LXVzci5zdmdcIn0gLz48L3NwYW4+e3Byb2ZpbGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiA6IDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNocG5nLWR0bHMtaWNvXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9udy11c3Iuc3ZnXCJ9IC8+PC9zcGFuPntwcm9maWxlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Vwb25zICYmIGNvdXBvbnMubGVuZ3RoID8gPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaHBuZy1kdGxzLWljb1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvb2ZyLWNwbi5zdmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdXBvbiBBcHBsaWVkOiA8c3BhbiBjbGFzc05hbWU9XCJjb3Vwb24tYXBwbGllcy1zaHBuZ2NhcmRcIj57Y291cG9uc1swXS5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RzICYmIHRlc3RzLmxlbmd0aCA/IDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BpbmctY2FydC10ZXN0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2hwbmctY2FydC10c3QtbHN0LWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ZsYXNrLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdHMubWFwKCh0ZXN0LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtpfSBjbGFzc05hbWU9XCJ0ZXN0LWxpc3QgdGVzdC1saXN0LWxhYmVsIGNsZWFyZml4IG5ldy1sYWItdGVzdC1saXN0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2dvbGRfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBmdy03MDBcIj7igrkge2Ftb3VudF90b19iZV9wYWlkfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHttcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppc192aXBfYXBwbGljYWJsZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgZnctNzAwXCI+4oK5IHthbW91bnRfdG9fYmVfcGFpZH08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7bXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGZ3LTcwMFwiPuKCuSB7aXNfZ29sZF9wcmljZX08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7bXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JycqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfdmlwX2FwcGxpY2FibGUgfHwgaXNfZ29sZF9tZW1iZXI/JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpc19hcHBvaW50bWVudF9pbnN1cmVkIHx8IGluY2x1ZGVkX2luX3VzZXJfcGxhbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBmdy03MDBcIj7igrkgMCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IGZ3LTcwMFwiPuKCuSB7dGVzdC5kZWFsX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHt0ZXN0Lm1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1uYW1lLWl0ZW1cIj57dGVzdC50ZXN0X25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWR1cmVzICYmIHByb2NlZHVyZXMubGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcGluZy1jYXJ0LXRlc3QtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzaHBuZy1jYXJ0LXRzdC1sc3QtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaGFuZC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2NlZHVyZXMubWFwKChwcm9jLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtpfSBjbGFzc05hbWU9XCJ0ZXN0LWxpc3QgdGVzdC1saXN0LWxhYmVsIGNsZWFyZml4IG5ldy1sYWItdGVzdC1saXN0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBmdy03MDBcIj7igrkge3Byb2MuZGVhbF9wcmljZX08c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7cHJvYy5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW5hbWUtaXRlbVwiPntwcm9jLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hwbmctY2FyZC1idG5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucmVtb3ZlRnJvbUNhcnQuYmluZCh0aGlzLCBpZCl9PlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZC5pc19hZ2VudF9ib29raW5nICYmIHBhcnNlZC5pc19hZ2VudF9ib29raW5nID09ICd0cnVlJyAmJiBpc19hcHBvaW50bWVudF9pbnN1cmVkPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxidXR0b24gb25DbGljaz17dGhpcy5lZGl0LmJpbmQodGhpcyl9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxidXR0b24gb25DbGljaz17dGhpcy5lZGl0LmJpbmQodGhpcyl9PkVkaXQ8L2J1dHRvbj4qL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0SXRlbVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSAnLi9jYXJ0SXRlbSdcbmltcG9ydCBCb29raW5nRXJyb3IgZnJvbSAnLi4vLi4vb3BkL3BhdGllbnREZXRhaWxzL2Jvb2tpbmdFcnJvclBvcFVwJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bSc7XG5pbXBvcnQgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGZyb20gJy4uLy4uL2RpYWdub3Npcy9ib29raW5nU3VtbWFyeS9Cb29raW5nQ29uZmlybWF0aW9uUG9wdXAuanMnXG5pbXBvcnQgUGF5bWVudEZvcm0gZnJvbSAnLi4vcGF5bWVudEZvcm0nXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvc3RhdGljRGlzY2xhaW1lci5qcydcblxuY2xhc3MgQ2FydFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UocHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXNlX3dhbGxldDogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yOiBwYXJzZWQuZXJyb3JfbWVzc2FnZSB8fCBcIlwiLFxuICAgICAgICAgICAgc2hvd0NvbmZpcm1hdGlvblBvcHVwOmZhbHNlLFxuICAgICAgICAgICAgcGF5bWVudERhdGE6IG51bGwsXG4gICAgICAgICAgICBpc01hdHJpeDpwYXJzZWQuaXNfbWF0cml4XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZUVycm9yUG9wdXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJycgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVXYWxsZXRVc2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlX3dhbGxldDogZS50YXJnZXQuY2hlY2tlZCB9KVxuICAgIH1cblxuICAgIGdldFByaWNlQnJlYWt1cChjYXJ0X2l0ZW1zKSB7IC8vIGNhbGN1bGF0ZSBhbGwgZmluYWwgcHJpY2UoY291cG9uLGNvbnZpZW5jZSBmZWUsIHZpcCBvciBnb2xkIG9yIGluc3VyYW5jZSBwcmljZSkgaW4gY2FzZSBvZiBtdWx0aXBsZSBpdGVtIG9yIHNpbmdsZSBpdGVtIFxuICAgICAgICBpZiAoIWNhcnRfaXRlbXMpIHtcbiAgICAgICAgICAgIGNhcnRfaXRlbXMgPSBbXVxuICAgICAgICB9XG4gICAgICAgIGxldCB0b3RhbF9tcnAgPSAwXG4gICAgICAgIGxldCB0b3RhbF9kZWFsX3ByaWNlID0gMFxuICAgICAgICBsZXQgdG90YWxfaG9tZV9waWNrdXBfY2hhcmdlcyA9IDBcbiAgICAgICAgbGV0IHRvdGFsX2NvdXBvbl9kaXNjb3VudCA9IDBcbiAgICAgICAgbGV0IHRvdGFsX2NvdXBvbl9jYXNoYmFjayA9IDBcbiAgICAgICAgbGV0IGNvdXBvbl9icmVha3VwID0ge31cbiAgICAgICAgbGV0IGNhc2hiYWNrX2JyZWFrdXAgPSB7fVxuICAgICAgICBsZXQgcGxhdGZvcm1Db252RmVlcyA9IDBcbiAgICAgICAgbGV0IHRvdGFsX2FtbnQgPSAwXG4gICAgICAgIGxldCBkZCA9IDBcbiAgICAgICAgbGV0IHZpcF9hbW50X3ByaWNlID0wXG4gICAgICAgIGxldCBpc19nb2xkX21lbWJlciA9IGZhbHNlXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgY2FydF9pdGVtcykge1xuICAgICAgICAgICAgaWYgKGl0ZW0udmFsaWQgJiYgKGl0ZW0uYWN0dWFsX2RhdGEucGF5bWVudF90eXBlID09IDEgfHwgaXRlbS5hY3R1YWxfZGF0YS5wYXltZW50X3R5cGUgPT0gNSB8fCBpdGVtLmFjdHVhbF9kYXRhLnBheW1lbnRfdHlwZSA9PSA2KSkge1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLy9Gb3IgSW5zdXJlZCBBcHBvaW50bWVudHMgRG8gbm90IGFkZCBkZWFsIHByaWNlIHRvIEFtb3VudCBQYXlhYmxlXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5hY3R1YWxfZGF0YS5pc19hcHBvaW50bWVudF9pbnN1cmVkKXtcblxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0b3RhbF9tcnAgKz0gaXRlbS5tcnBcblxuICAgICAgICAgICAgICAgICAgICBpZighaXRlbS5hY3R1YWxfZGF0YS5jb3Zlcl91bmRlcl92aXApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5jb25zdWx0YXRpb24gJiYgaXRlbS5jb25zdWx0YXRpb24uZmVlcyA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZCA9IGl0ZW0ubXJwXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZCA9IGl0ZW0ubXJwIC0gaXRlbS5kZWFsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9kZWFsX3ByaWNlICs9IGRkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0b3RhbF9kZWFsX3ByaWNlICs9IGl0ZW0uZGVhbF9wcmljZSAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdG90YWxfaG9tZV9waWNrdXBfY2hhcmdlcyArPSBpdGVtLnRvdGFsX2hvbWVfcGlja3VwX2NoYXJnZXMgfHwgMFxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtLmNvbnN1bHRhdGlvbiAmJiBpdGVtLmNvbnN1bHRhdGlvbi5mZWVzID09IDAgJiYgIWl0ZW0uYWN0dWFsX2RhdGEuY292ZXJfdW5kZXJfdmlwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtQ29udkZlZXMgKz0gcGFyc2VJbnQoaXRlbS5kZWFsX3ByaWNlKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGF0YS5jb3Vwb25zICYmIGl0ZW0uZGF0YS5jb3Vwb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxfY291cG9uX2Rpc2NvdW50ICs9IGl0ZW0uY291cG9uX2Rpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9jb3Vwb25fY2FzaGJhY2sgKz0gaXRlbS5jb3Vwb25fY2FzaGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNvdXBvbl9jYXNoYmFjayA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdXBvbl9icmVha3VwW2l0ZW0uZGF0YS5jb3Vwb25zWzBdLmNvZGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBvbl9icmVha3VwW2l0ZW0uZGF0YS5jb3Vwb25zWzBdLmNvZGVdICs9IGl0ZW0uY291cG9uX2Rpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291cG9uX2JyZWFrdXBbaXRlbS5kYXRhLmNvdXBvbnNbMF0uY29kZV0gPSBpdGVtLmNvdXBvbl9kaXNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhc2hiYWNrX2JyZWFrdXBbaXRlbS5kYXRhLmNvdXBvbnNbMF0uY29kZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzaGJhY2tfYnJlYWt1cFtpdGVtLmRhdGEuY291cG9uc1swXS5jb2RlXSArPSBpdGVtLmNvdXBvbl9jYXNoYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2hiYWNrX2JyZWFrdXBbaXRlbS5kYXRhLmNvdXBvbnNbMF0uY29kZV0gPSBpdGVtLmNvdXBvbl9jYXNoYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uYWN0dWFsX2RhdGEuaXNfdmlwX21lbWJlciAmJiBpdGVtLmFjdHVhbF9kYXRhLmNvdmVyX3VuZGVyX3ZpcCl7IC8vIGdvbGQgcHJpY2UgY2FsY3VsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2dvbGRfbWVtYmVyID0gaXRlbS5hY3R1YWxfZGF0YS5pc19nb2xkX21lbWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYoaXRlbS5hY3R1YWxfZGF0YS52aXBfYW1vdW50ID09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZpcF9hbW50X3ByaWNlICs9IGl0ZW0ubXJwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZihpdGVtLmFjdHVhbF9kYXRhLmlzX2dvbGRfbWVtYmVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmlwX2FtbnRfcHJpY2UgKz0gaXRlbS5tcnAgLSAoaXRlbS5hY3R1YWxfZGF0YS52aXBfYW1vdW50ICsgaXRlbS5hY3R1YWxfZGF0YS52aXBfY29udmVuaWVuY2VfYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB2aXBfYW1udF9wcmljZSArPSBpdGVtLm1ycCAtIGl0ZW0uYWN0dWFsX2RhdGEudmlwX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uYWN0dWFsX2RhdGEuYW1vdW50X3RvX2JlX3BhaWQgPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlwX2FtbnRfcHJpY2UgKz0gaXRlbS5tcnBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uYWN0dWFsX2RhdGEuaXNfZ29sZF9tZW1iZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXBfYW1udF9wcmljZSArPSBpdGVtLm1ycCAtIHRvdGFsX2NvdXBvbl9kaXNjb3VudCAtIGl0ZW0uYWN0dWFsX2RhdGEuYW1vdW50X3RvX2JlX3BhaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlwX2FtbnRfcHJpY2UgKz0gaXRlbS5tcnAgLSBpdGVtLmFjdHVhbF9kYXRhLmFtb3VudF90b19iZV9wYWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRvdGFsX2FtbnQgPSB0b3RhbF9tcnAgLSB0b3RhbF9kZWFsX3ByaWNlICsgcGxhdGZvcm1Db252RmVlcyAtIHRvdGFsX2NvdXBvbl9kaXNjb3VudCArIHRvdGFsX2hvbWVfcGlja3VwX2NoYXJnZXMgLSB2aXBfYW1udF9wcmljZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG90YWxfbXJwLFxuICAgICAgICAgICAgdG90YWxfZGVhbF9wcmljZSxcbiAgICAgICAgICAgIHRvdGFsX2hvbWVfcGlja3VwX2NoYXJnZXMsXG4gICAgICAgICAgICB0b3RhbF9jb3Vwb25fZGlzY291bnQsXG4gICAgICAgICAgICB0b3RhbF9jb3Vwb25fY2FzaGJhY2ssXG4gICAgICAgICAgICBjb3Vwb25fYnJlYWt1cCxcbiAgICAgICAgICAgIGNhc2hiYWNrX2JyZWFrdXAsXG4gICAgICAgICAgICBwbGF0Zm9ybUNvbnZGZWVzLFxuICAgICAgICAgICAgdG90YWxfYW1udCxcbiAgICAgICAgICAgIHZpcF9hbW50X3ByaWNlLFxuICAgICAgICAgICAgaXNfZ29sZF9tZW1iZXJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2Nlc3NDYXJ0KHRvdGFsX3ByaWNlLGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cywgaXNfYW55X3ZpcF9hcHBvaW50bWVudCkgeyAvLyB0byBwcm9jZXNzIGZvciBwYXltZW50XG5cbiAgICAgICAgaWYoaXNfc2VsZWN0ZWRfdXNlcl9pbnN1cmFuY2Vfc3RhdHVzICYmIGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cyA9PSA0KXtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJZb3VyIGRvY3VtZW50cyBmcm9tIHRoZSBsYXN0IGNsYWltIGFyZSB1bmRlciB2ZXJpZmljYXRpb24uUGxlYXNlIHdyaXRlIHRvIGN1c3RvbWVyY2FyZUBkb2NwcmltZS5jb20gZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIgfSk7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuc2hvd0NvbmZpcm1hdGlvblBvcHVwICYmIHRvdGFsX3ByaWNlID09IDApe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0NvbmZpcm1hdGlvblBvcHVwOnRydWV9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy9BZGQgU1BPIFV0bSBUYWdzIHRvIHRoZSBjYXJ0IEFQSVxuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICBsZXQgZXh0cmFQYXJhbXMgPSB7fVxuICAgICAgICBpZihzZXNzaW9uU3RvcmFnZSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uSWRWYWwnKSAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncyAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5sZW5ndGggJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHg9PngudHlwZT09J3NwbycpLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBsZXQgc3BvX3RhZ3MgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeD0+eC50eXBlPT0nc3BvJylbMF1cbiAgICAgICAgICAgIGxldCBzZXNzaW9uVmFsID0gcGFyc2VJbnQoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkVmFsJykpXG4gICAgICAgICAgICBpZihzcG9fdGFncy51dG1fdGFncyAmJiBzcG9fdGFncy50aW1lICYmIHNlc3Npb25WYWwgPT0gcGFyc2VJbnQoc3BvX3RhZ3MuY3VycmVudFNlc3Npb25JZCkpe1xuICAgICAgICAgICAgICAgIGxldCB0aW1lX29mZnNldCA9IChjdXJyZW50VGltZSAtIHNwb190YWdzLnRpbWUpLzYwMDAwXG4gICAgICAgICAgICAgICAgLy9DbGVhciBTUE8gdXRtIHRhZ3MgYWZ0ZXIgMTVtaW51dGVzXG4gICAgICAgICAgICAgICAgLy85MDBcbiAgICAgICAgICAgICAgICBpZih0aW1lX29mZnNldD4xODApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51blNldENvbW1vblV0bVRhZ3MoJ3NwbycpXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleHRyYVBhcmFtcyA9IHNwb190YWdzLnV0bV90YWdzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5wcm9jZXNzQ2FydEl0ZW1zKHRoaXMuc3RhdGUudXNlX3dhbGxldCwgZXh0cmFQYXJhbXMpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLnBheW1lbnRfcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL3BheW1lbnQvJHtkYXRhLmRhdGEub3JkZXJJZH0/cmVmcz1sYWJgKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1BheW1lbnQoZGF0YSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9vcmRlci9zdW1tYXJ5LyR7ZGF0YS5kYXRhLm9yZGVySWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBlcnJvcl9tZXNzYWdlIFxuICAgICAgICAgICAgICAgIGlmKGUuZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcl9tZXNzYWdlID0gZS5lcnJvclxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBlcnJvcl9tZXNzYWdlID0gXCJFcnJvciBQcm9jZXNzaW5nIGNhcnRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGUubWVzc2FnZSl7XG4gICAgICAgICAgICAgICAgZXJyb3JfbWVzc2FnZSA9IGUubWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBlcnJvcl9tZXNzYWdlIH0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdjb250aW51ZVRvUGF5JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29udGludWUtdG8tcGF5J1xuICAgICAgICB9XG5cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG5cbiAgICBnZXRCb29raW5nQnV0dG9uVGV4dCh0b3RhbF93YWxsZXRfYmFsYW5jZSwgcHJpY2VfdG9fcGF5KSB7IC8vZ2V0IGJvb2tpbmcgYnV0dG9uIHRleHQgZGVwZW5kIG9uIG11bHRpcGxlIGNhc2VzXG4gICAgICAgIGxldCBwcmljZV9mcm9tX3dhbGxldCA9IDBcbiAgICAgICAgbGV0IHByaWNlX2Zyb21fcGcgPSAwXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudXNlX3dhbGxldCAmJiB0b3RhbF93YWxsZXRfYmFsYW5jZSkge1xuICAgICAgICAgICAgcHJpY2VfZnJvbV93YWxsZXQgPSBNYXRoLm1pbih0b3RhbF93YWxsZXRfYmFsYW5jZSwgcHJpY2VfdG9fcGF5KVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpY2VfZnJvbV9wZyA9IHByaWNlX3RvX3BheSAtIHByaWNlX2Zyb21fd2FsbGV0XG5cbiAgICAgICAgaWYgKHByaWNlX2Zyb21fcGcpIHtcbiAgICAgICAgICAgIHJldHVybiBgQ29udGludWUgdG8gcGF5ICjigrkgJHtwcmljZV9mcm9tX3BnfSlgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYENvbmZpcm0gQm9va2luZ2BcbiAgICB9XG5cbiAgICBzZW5kQWdlbnRCb29raW5nVVJMKGRhdGFQYXJhbXM9e30pIHsgLy8gc2VuZCBwYXltZW50IGxpbmsgdG8gdXNlciBpbiBjYXNlIG9mIGFnZW50IGJvb2tpbmcgXG4gICAgICAgIGxldCBleHRyYVBhcmFtcyA9IHsuLi5kYXRhUGFyYW1zfVxuICAgICAgICB0aGlzLnByb3BzLnNlbmRBZ2VudEJvb2tpbmdVUkwobnVsbCwgJ3NtcycsIG51bGwsbnVsbCwgZXh0cmFQYXJhbXMsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTTVMgU0VORCBFUlJPUlwiIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTTVMgU0VOVCBTVUNDRVNTRlVMWVwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpY2VDb25maXJtYXRpb25Qb3B1cChjaG9pY2UpeyAvLyBhc2sgdG8gY29uZmlybSB0aGUgYXBwb2ludG1lbnQgaW4gY2FzZSBvZiBpbnN1cm5hbmNlIG9yIHVzZXIgcGF5YWJsZSBhbW91bnQgaXMgMC5cbiAgICAgICAgaWYoIWNob2ljZSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93Q29uZmlybWF0aW9uUG9wdXA6Y2hvaWNlfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93Q29uZmlybWF0aW9uUG9wdXA6Jyd9KVxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1fYm9va2luZycpKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybV9ib29raW5nJykuY2xpY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHByb2Nlc3NQYXltZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXltZW50RGF0YTogZGF0YS5kYXRhIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudEZvcm0nKSAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBheW1lbnREYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50Rm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LDUwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IHsgY2FydCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgdG90YWxfbXJwLFxuICAgICAgICAgICAgdG90YWxfZGVhbF9wcmljZSxcbiAgICAgICAgICAgIHRvdGFsX2hvbWVfcGlja3VwX2NoYXJnZXMsXG4gICAgICAgICAgICB0b3RhbF9jb3Vwb25fZGlzY291bnQsXG4gICAgICAgICAgICB0b3RhbF9jb3Vwb25fY2FzaGJhY2ssXG4gICAgICAgICAgICBjb3Vwb25fYnJlYWt1cCxcbiAgICAgICAgICAgIGNhc2hiYWNrX2JyZWFrdXAsXG4gICAgICAgICAgICBwbGF0Zm9ybUNvbnZGZWVzLFxuICAgICAgICAgICAgdG90YWxfYW1udCxcbiAgICAgICAgICAgIHZpcF9hbW50X3ByaWNlLFxuICAgICAgICAgICAgaXNfZ29sZF9tZW1iZXJcbiAgICAgICAgfSA9IHRoaXMuZ2V0UHJpY2VCcmVha3VwKGNhcnQpXG5cbiAgICAgICAgbGV0IHRvdGFsX3dhbGxldF9iYWxhbmNlID0gMFxuICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VyV2FsbGV0QmFsYW5jZSA+PSAwICYmIHRoaXMucHJvcHMudXNlckNhc2hiYWNrQmFsYW5jZSA+PSAwKSB7XG4gICAgICAgICAgICB0b3RhbF93YWxsZXRfYmFsYW5jZSA9IHRoaXMucHJvcHMudXNlcldhbGxldEJhbGFuY2UgKyB0aGlzLnByb3BzLnVzZXJDYXNoYmFja0JhbGFuY2VcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGludmFsaWRfaXRlbXMgPSBmYWxzZVxuICAgICAgICBsZXQgdmFsaWRfaXRlbXMgPSBmYWxzZVxuICAgICAgICBsZXQgYWxsX2FwcG9pbnRtZW50c19pbnN1cmVkID0gdHJ1ZVxuICAgICAgICBsZXQgaXNfY29kX2FwcGxpY2FibGUgPSB0cnVlXG4gICAgICAgIGxldCBpc19wbGF0Zm9ybV9jb252X2ZlZXMgPSAwXG4gICAgICAgIGxldCBpc19kZWZhdWx0X3VzZXJfaW5zdXJlZCA9IGZhbHNlXG4gICAgICAgIGxldCBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXNcbiAgICAgICAgbGV0IGlzX2FueV92aXBfYXBwb2ludG1lbnQgPSBmYWxzZVxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5wcm9wcy5wcm9maWxlcykubGVuZ3RoID4gMCAmJiB0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0pIHtcbiAgICAgICAgICAgIGlzX2RlZmF1bHRfdXNlcl9pbnN1cmVkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgICAgICBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMgPSB0aGlzLnByb3BzLnByb2ZpbGVzW3RoaXMucHJvcHMuZGVmYXVsdFByb2ZpbGVdLmluc3VyYW5jZV9zdGF0dXNcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGNhcnQgJiYgY2FydC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhcnQubWFwKChjYXJ0X2l0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNhcnRfaXRlbS52YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkX2l0ZW1zID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkX2l0ZW1zID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBpZihjYXJ0X2l0ZW0uYWN0dWFsX2RhdGEgJiYgY2FydF9pdGVtLmFjdHVhbF9kYXRhLmNvdmVyX3VuZGVyX3ZpcCAmJiBjYXJ0X2l0ZW0uYWN0dWFsX2RhdGEuaXNfdmlwX21lbWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfYW55X3ZpcF9hcHBvaW50bWVudCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihjYXJ0X2l0ZW0uYWN0dWFsX2RhdGEgJiYgIWNhcnRfaXRlbS5hY3R1YWxfZGF0YS5pc19hcHBvaW50bWVudF9pbnN1cmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbF9hcHBvaW50bWVudHNfaW5zdXJlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoY2FydF9pdGVtLmNvbnN1bHRhdGlvbiAmJiBjYXJ0X2l0ZW0uY29uc3VsdGF0aW9uLmZlZXMgPT0gMCAmJiBjYXJ0X2l0ZW0uYWN0dWFsX2RhdGEucGF5bWVudF90eXBlID09IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfcGxhdGZvcm1fY29udl9mZWVzKytcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIENPRCBhcHBsaWNhYmxlIGZvciBhbGwgYXBwb2ludG1lbnRzXG4gICAgICAgICAgICAgICAgICAgIGlmKCBjYXJ0X2l0ZW0uYWN0dWFsX2RhdGEgJiYgY2FydF9pdGVtLmFjdHVhbF9kYXRhLnBheW1lbnRfdHlwZSAmJiBjYXJ0X2l0ZW0uYWN0dWFsX2RhdGEucGF5bWVudF90eXBlIT0yICl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc19jb2RfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlzX2NvZF9hcHBsaWNhYmxlID0gaXNfY29kX2FwcGxpY2FibGUgJiYgY2FydCAmJiBjYXJ0Lmxlbmd0aCAmJiBjYXJ0LmZpbHRlcih4ID0+IHgudmFsaWQpLmxlbmd0aD09MVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dDb25maXJtYXRpb25Qb3B1cCAmJiBpc19zZWxlY3RlZF91c2VyX2luc3VyYW5jZV9zdGF0dXMgIT00P1xuICAgICAgICAgICAgICAgICAgICA8Qm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIHByaWNlQ29uZmlybWF0aW9uUG9wdXA9e3RoaXMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMpfSBiYW5uZXJDb25maXJtYXRpb25Qb3B1cD17KCk9Pnt9fSBpc0NhcnQ9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItdG9wLW1hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydCAmJiBjYXJ0Lmxlbmd0aCA/IDxzZWN0aW9uIGNsYXNzTmFtZT1cImRyLXByb2ZpbGUtc2NyZWVuIGJvb2tpbmctY29uZmlybS1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtcmItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWRfaXRlbXMgPyA8aDQgY2xhc3NOYW1lPVwiY2FydC13YXJuaWctaWNvbi10ZXh0XCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzIwcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NhcGFXYXJuaW5nLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcnQuZmlsdGVyKHggPT4gIXgudmFsaWQpLmxlbmd0aH0gYXBwb2ludG1lbnR7Y2FydC5maWx0ZXIoeCA9PiAheC52YWxpZCkubGVuZ3RoID4gMSA/IFwic1wiIDogJyd9IGluIHlvdXIgY2FydCBoYXZlIGJlY29tZSBpbnZhbGlkLiBQbGVhc2UgRWRpdC9SZW1vdmUge2NhcnQuZmlsdGVyKHggPT4gIXgudmFsaWQpLmxlbmd0aCA+IDEgPyBcInRoZW1cIiA6ICdpdCd9LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PC9oND4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInNob3BpbmctY2FydC1tYWluLWhlYWRpbmdcIj5NeSBDYXJ0PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydC5maWx0ZXIoeCA9PiB4LnZhbGlkKS5tYXAoKGNhcnRfaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYXJ0SXRlbSBrZXk9e2kgKyBcInZcIn0gey4uLnRoaXMucHJvcHN9IHsuLi5jYXJ0X2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkX2l0ZW1zID8gPGg0IGNsYXNzTmFtZT1cInNob3BpbmctY2FydC1tYWluLWhlYWRpbmdcIj5JbnZhbGlkIEl0ZW1zPC9oND4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0LmZpbHRlcih4ID0+ICF4LnZhbGlkKS5tYXAoKGNhcnRfaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYXJ0SXRlbSBrZXk9e2kgKyBcIml2XCJ9IHsuLi50aGlzLnByb3BzfSB7Li4uY2FydF9pdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZF9pdGVtcyA/IDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBtYi0yMFwiPlBheW1lbnQgU3VtbWFyeTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh0b3RhbF9tcnApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1zdW1tYXJ5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG90YWwgRmVlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXktYW1udC1zaHJua1wiPiYjODM3Nzsge3BhcnNlSW50KHRvdGFsX21ycCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfcGxhdGZvcm1fY29udl9mZWVzPjA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGxhdGZvcm0gQ29udmVuaWVuY2UgRmVlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXktYW1udC1zaHJua1wiPiYjODM3Nzsge3BhcnNlSW50KHBsYXRmb3JtQ29udkZlZXMpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbF9kZWFsX3ByaWNlICE9MCAmJiB0b3RhbF9tcnAgIT10b3RhbF9kZWFsX3ByaWNlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRvY3ByaW1lIERpc2NvdW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4tICYjODM3Nzsge3BhcnNlSW50KHRvdGFsX2RlYWxfcHJpY2UpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsX2hvbWVfcGlja3VwX2NoYXJnZXMgPyA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtZGV0YWlsIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib21lIHBpY2t1cCBjaGFyZ2VzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4rICYjODM3Nzsge3BhcnNlSW50KHRvdGFsX2hvbWVfcGlja3VwX2NoYXJnZXMpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXBfYW1udF9wcmljZT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1kZXRhaWwgZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnZ3JlZW4nfX0gY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW0tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPiBEb2NwcmltZSBHb2xkIERpc2NvdW50IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7aGVpZ2h0OicxNXB4Jywgd2lkdGg6JzM1cHgnfX0gY2xhc3NOYW1lPVwidmlwLW1haW4taWNvIGltZy1mbHVpZCB2aXAtaWNvLWhkbmdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdncmVlbid9fT4t4oK5IHt2aXBfYW1udF9wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXggYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdncmVlbid9fSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+RG9jcHJpbWUgVmlwIERpc2NvdW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3toZWlnaHQ6JzI4cHgnLCB3aWR0aDonMjVweCd9fSBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkIHZpcC1pY28taGRuZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnZ3JlZW4nfX0+LeKCuSB7dmlwX2FtbnRfcHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxfY291cG9uX2Rpc2NvdW50ID8gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY291cG9uX2JyZWFrdXApLm1hcCgoY3AsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LWRldGFpbCBkLWZsZXhcIiBrZXk9e2p9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5Db3Vwb24gRGlzY291bnQgKHtjcH0pPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT4tJiM4Mzc3OyB7Y291cG9uX2JyZWFrdXBbY3BdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtcmVwb3J0IHBheW1lbnQtZGV0YWlsIG10LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBwYXltZW50LWFtdC1sYWJlbFwiPkFtb3VudCBQYXlhYmxlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInBheW1lbnQtYW10LXZhbHVlXCI+JiM4Mzc3OyB7dG90YWxfYW1udH08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9jb3Vwb25fY2FzaGJhY2sgPyA8ZGl2IGNsYXNzTmFtZT1cImNzaC1iYWNrLWFwcGxpZWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY2FzaGJhY2tfYnJlYWt1cCkubWFwKChrZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17aX0gY2xhc3NOYW1lPVwiY3NoLW1ueS1hcHBsaWVkXCI+KyAmIzgzNzc7IHtjYXNoYmFja19icmVha3VwW2tleV19IENhc2hiYWNrIEFwcGxpZWQgKHtrZXl9KTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3NoLW1ueS1hcHBsaWVkLWNvbnRlbnRcIj5DYXNoYmFjayB3aWxsIGJlIGFkZGVkIHRvIHlvdXIgZG9jcHJpbWUgd2FsbGV0IGJhbGFuY2Ugb24gYXBwb2ludG1lbnQgY29tcGxldGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWFsbF9hcHBvaW50bWVudHNfaW5zdXJlZCAmJiB2YWxpZF9pdGVtcyAmJiB0b3RhbF93YWxsZXRfYmFsYW5jZSAmJiB0b3RhbF93YWxsZXRfYmFsYW5jZSA+IDAgPyA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1wdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmZXJyYWwtc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6ICcxNHB4JyB9fT5Vc2UgZG9jcHJpbWUgd2FsbGV0IG1vbmV5PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVdhbGxldFVzZS5iaW5kKHRoaXMpfSBjaGVja2VkPXt0aGlzLnN0YXRlLnVzZV93YWxsZXR9IC8+PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZnJsLWF2bC1iYWxhbmNlXCI+QXZhaWxhYmxlIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc5cHgnLCBtYXJnaW5Ub3A6ICc0cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3J1cGVlLWljb24uc3ZnXCJ9IC8+e3RvdGFsX3dhbGxldF9iYWxhbmNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAoU1RPUkFHRS5pc0FnZW50KCkgJiYgaXNfY29kX2FwcGxpY2FibGUpIHx8ICFTVE9SQUdFLmlzQWdlbnQoKSApICYmICF0aGlzLnN0YXRlLmlzTWF0cml4ICYmIHZhbGlkX2l0ZW1zID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgc3RpY2t5LWJ0biBwLTAgdi1idG4gIGJ0bi1sZyBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIGJ1dHRvbnMtYWRkY2FydC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXNocG5nLWNhcnQtYnRuXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoP2Zyb209Y2FydCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnYWRkTW9yZVRvQ2FydCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2FkZC1tb3JlLXRvLWNhcnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BZGQgbW9yZSB0byBjYXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuLXByaW1hcnkgYm9vay1idG4tbXJnbi1hZGp1c3RcIiBpZD1cImNvbmZpcm1fYm9va2luZ1wiIG9uQ2xpY2s9e3RoaXMucHJvY2Vzc0NhcnQuYmluZCh0aGlzLCB0b3RhbF9hbW50LGlzX3NlbGVjdGVkX3VzZXJfaW5zdXJhbmNlX3N0YXR1cywgaXNfYW55X3ZpcF9hcHBvaW50bWVudCl9Pnt0aGlzLmdldEJvb2tpbmdCdXR0b25UZXh0KHRvdGFsX3dhbGxldF9iYWxhbmNlLCB0b3RhbF9hbW50KX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFNUT1JBR0UuaXNBZ2VudCgpIHx8IHRoaXMuc3RhdGUuaXNNYXRyaXgpICYmICFpc19jb2RfYXBwbGljYWJsZSA/IDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgc3RpY2t5LWJ0biBwLTAgdi1idG4gIGJ0bi1sZyBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIGJ1dHRvbnMtYWRkY2FydC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXNocG5nLWNhcnQtYnRuXCIgb25DbGljaz17dGhpcy5zZW5kQWdlbnRCb29raW5nVVJMLmJpbmQodGhpcywge30pfT5TZW5kIFNNUyBFTUFJTDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtc2hwbmctY2FydC1idG5cIiBvbkNsaWNrPXsgdGhpcy5zZW5kQWdlbnRCb29raW5nVVJMLmJpbmQodGhpcywge21lc3NhZ2VfbWVkaXVtOiAnV0hBVFNBUFAnfSApIH0+PGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3dhLWxvZ28tc20ucG5nJ30vPlNlbmQgb24gV2hhdHNhcHA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciA/IDxCb29raW5nRXJyb3IgaGVhZGluZz17XCJUcmFuc2FjdGlvbiBFcnJvclwifSBtZXNzYWdlPXt0aGlzLnN0YXRlLmVycm9yfSBjbG9zZUVycm9yUG9wdXA9e3RoaXMuY2xvc2VFcnJvclBvcHVwfSAvPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj4gOiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vcmYgd2lkZ2V0XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcsIGhlaWdodDogJzY5dmgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnQgPT0gbnVsbCA/IFwiXCIgOiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZW1wdHlDYXJ0MS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1wdHlDYXJkVGV4dFwiPllvdXIgQ2FydCBpcyBFbXB0eSE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaCcpIH19IGNsYXNzTmFtZT1cImVtcHR5Q2FydFJlZGlyZWN0XCI+Qm9vayBBcHBvaW50bWVudHMgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWdodEJhciBub0NoYXRCdXR0b249e3RydWV9IG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPERpc2NsYWltZXIgLz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGF5bWVudERhdGEgPyA8UGF5bWVudEZvcm0gcGF5bWVudERhdGE9e3RoaXMuc3RhdGUucGF5bWVudERhdGF9IHJlZnM9J2xhYicvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcnRWaWV3XG4iLCJpbXBvcnQgQ2FydFZpZXcgZnJvbSAnLi9jYXJ0VmlldydcblxuZXhwb3J0IGRlZmF1bHQgQ2FydFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5cbmNsYXNzIFBheW1lbnRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNlbmRFdmVudCgpIHtcbiAgICAgICAgbGV0IHJlZnMgPSB0aGlzLnByb3BzLnJlZnNcbiAgICAgICAgaWYgKHJlZnMpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29udGludWVDbGlja2VkJywgJ3BhZ2VTb3VyY2UnOiByZWZzLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb250aW51ZS1jbGlja2VkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29udGludWVDbGlja2VkJywgJ3BhZ2VTb3VyY2UnOiAnVU5LTk9XTicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2VuZEV2ZW50KClcbiAgICB9XG5cbiAgICBnZXRQYXltZW50Tm9kZU5hbWUobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGAke25hbWV9WyR7aW5kZXh9XWBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgLy8gbGV0IGRhdGEgPSB7IFwicGF5bWVudE1vZGVcIjogXCJDQ1wiLCBcInJlc3BvbnNlQ29kZVwiOiBcIjIyN1wiLCBcImJhbmtUeElkXCI6IFwiXCIsIFwidHhEYXRlXCI6IFwiSnVuIDQsIDIwMTggMTI6MTA6MjMgUE1cIiwgXCJiYW5rTmFtZVwiOiBcIlNCSVwiLCBcInN0YXR1c01zZ1wiOiBcIk9vcHMgYW4gZXJyb3Igb2NjdXJyZWQuIFdlIHdpbGwgZ2V0IGJhY2sgdG8geW91IVwiLCBcImN1cnJlbmN5XCI6IFwiSU5SXCIsIFwic3RhdHVzQ29kZVwiOiAxLCBcInBnR2F0ZXdheU5hbWVcIjogXCJNT0NLXCIsIFwicmVzcG9uc2VNZXNzYWdlXCI6IFwiWW91ciBwYXltZW50IGhhcyBiZWVuIGRlY2xpbmVkIGJ5IHlvdXIgYmFuay4gUGxlYXNlIGNvbnRhY3QgeW91ciBiYW5rIGZvciBhbnkgcXVlcmllcy4gSWYgbW9uZXkgaGFzIGJlZW4gZGVkdWN0ZWQgZnJvbSB5b3VyIGFjY291bnQsIHlvdXIgYmFuayB3aWxsIGluZm9ybSB1cyB3aXRoaW4gNDggaHJzIGFuZCB3ZSB3aWxsIHJlZnVuZCB0aGUgc2FtZVwiLCBcInR4U3RhdHVzXCI6IFwiVFhOX0ZBSUxVUkVcIiwgXCJjdXN0b21lcklkXCI6IDUxLCBcIm9yZGVyTm9cIjogdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnb3JkZXJJZCddLCBcInN0YXR1c1Nob3J0TXNnXCI6IFwiT3RoZXJzXCIsIFwiZW1haWxcIjogXCJkdW1teV9hcHBvaW50bWVudEBwb2xpY3liYXphYXIuY29tXCIsIFwicGJHYXRld2F5TmFtZVwiOiBcInBheXRtXCIsIFwibW9iaWxlXCI6IFwiOTk5OTk5OTk5N1wiLCBwcm9kdWN0SWQ6IHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3Byb2R1Y3RJZCddIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmZXJlbmNlSWQnXSkge1xuICAgICAgICAvLyAgICAgZGF0YVsncmVmZXJlbmNlSWQnXSA9IHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZmVyZW5jZUlkJ11cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGRhdGFbJ3BnVHhJZCddID0gdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnb3JkZXJJZCddXG4gICAgICAgIC8vIGRhdGEgPSBidG9hKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJwYXltZW50Rm9ybVwiIHJlZj1cInBheW1lbnRGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj17dGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpc19zaW5nbGVfZmxvdyddP0NPTkZJRy5QR19NVUxUSV9PUkRFUl9VUkw6Q09ORklHLlBHX1VSTH0gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhWydpc19zaW5nbGVfZmxvdyddP1xuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaXRlbXMnXS5tYXAoKGl0ZW0sIGkpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuZ2V0UGF5bWVudE5vZGVOYW1lKCduYW1lJywgaSl9IGlkPXtpdGVtWyduYW1lJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsnbmFtZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuZ2V0UGF5bWVudE5vZGVOYW1lKCdwcm9kdWN0SWQnLCBpKX0gaWQ9e2l0ZW1bJ3Byb2R1Y3RJZCddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ3Byb2R1Y3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuZ2V0UGF5bWVudE5vZGVOYW1lKCd0eEFtb3VudCcsIGkpfSBpZD17aXRlbVsndHhBbW91bnQnXX0gZGVmYXVsdFZhbHVlPXtpdGVtWyd0eEFtb3VudCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuZ2V0UGF5bWVudE5vZGVOYW1lKCdvcmRlcklkJywgaSl9IGlkPXtpdGVtWydvcmRlcklkJ119IGRlZmF1bHRWYWx1ZT17aXRlbVsnb3JkZXJJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e3RoaXMuZ2V0UGF5bWVudE5vZGVOYW1lKCdob2xkUGF5bWVudCcsIGkpfSAgaWQ9e2l0ZW1bJ2hvbGRQYXltZW50J119IGRlZmF1bHRWYWx1ZT17aXRlbVsnaG9sZFBheW1lbnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gJiYgaXRlbVsnaW5zdXJlckNvZGUnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17dGhpcy5nZXRQYXltZW50Tm9kZU5hbWUoJ2luc3VyZXJDb2RlJywgaSl9IGlkPXtpdGVtWydpbnN1cmVyQ29kZSddfSBkZWZhdWx0VmFsdWU9e2l0ZW1bJ2luc3VyZXJDb2RlJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgOjxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnbmFtZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcm9kdWN0SWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3Byb2R1Y3RJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eEFtb3VudFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsndHhBbW91bnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwib3JkZXJJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnb3JkZXJJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJob2xkUGF5bWVudFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaG9sZFBheW1lbnQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsnaW5zdXJlckNvZGUnXT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluc3VyZXJDb2RlXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydpbnN1cmVyQ29kZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3VzdElkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydjdXN0SWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1vYmlsZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnbW9iaWxlJ119IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydlbWFpbCddfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3VybFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnc3VybCddfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZnVybFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnZnVybCddfSAvPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZmVyZW5jZUlkJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicmVmZXJlbmNlSWRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZmVyZW5jZUlkJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImhhc2hcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2hhc2gnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpc1ByZUF1dGhcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2lzUHJlQXV0aCddfSAvPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3BheXRtTXNnJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGF5dG1Nc2dcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ3BheXRtTXNnJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ2NvdXBvbkNvZGUnXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvdXBvbkNvZGVcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2NvdXBvbkNvZGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGlzY291bnRlZEFtbnRcIiBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMucGF5bWVudERhdGFbJ2Rpc2NvdW50ZWRBbW50J119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvdXBvblBnTW9kZVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsnY291cG9uUGdNb2RlJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYXltZW50RGF0YSAmJiB0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZPcmRlcklkJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicmVmT3JkZXJJZFwiIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5wYXltZW50RGF0YVsncmVmT3JkZXJJZCddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBheW1lbnREYXRhICYmIHRoaXMucHJvcHMucGF5bWVudERhdGFbJ3JlZk9yZGVyTm8nXT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZWZPcmRlck5vXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydyZWZPcmRlck5vJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGF5bWVudERhdGEgJiYgdGhpcy5wcm9wcy5wYXltZW50RGF0YVsncGFyZW50UHJvZHVjdElkJ10/XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFyZW50UHJvZHVjdElkXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLnBheW1lbnREYXRhWydwYXJlbnRQcm9kdWN0SWQnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuXG4gICAgICAgICAgICAgICAgey8qIDxmb3JtIGlkPVwicGF5bWVudEZvcm1cIiByZWY9XCJwYXltZW50Rm9ybVwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249e2Ake0NPTkZJRy5BUElfQkFTRV9VUkx9L2FwaS92MS91c2VyL3RyYW5zYWN0aW9uL3NhdmVgfSBzdHlsZT17eyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlc3BvbnNlXCIgZGVmYXVsdFZhbHVlPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT4gKi99XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQYXltZW50Rm9ybVxuIiwiaW1wb3J0IFBheW1lbnRGb3JtIGZyb20gJy4vUGF5bWVudEZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRGb3JtIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuY2xhc3MgQm9va2luZ0NvbmZpcm1hdGlvblBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLXBvcHVwIHZpcC1zcmNoLXBvcC1taW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBwYWRpaW5nLXNyY2gtZWxcIj5cblx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNyY2gtZWwtY29uZW50XCI+e3RoaXMucHJvcHMuaXNfZ29sZD8nQ29uZmlybSBkZWxldGUgbWVtYmVyPyc6J0RvIHlvdSB3aXNoIHRvIGNvbnRpbnVlPyd9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWVsLWJ0bi1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgdHJ1ZSl9PlllczwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnByaWNlQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLCBmYWxzZSl9Pk5vPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8qKHRoaXMucHJvcHMuaXNfdmlwX2FwcGxpY2FibGUgfHwgdGhpcy5wcm9wcy5pc19pbnN1cmFuY2VfYXBwbGljYWJsZSkgfHwgdGhpcy5wcm9wcy5pc0NhcnQgfHwgdGhpcy5wcm9wcy5pc0xhYj9cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IHBhZGlpbmctc3JjaC1lbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtcnQtMjAgdGV4dC1jZW50ZXIgZnctNTAwXCI+V2UgYXJlIHJlZGlyZWN0aW5nIHlvdSB0byBQaGFybUVhc3kgd2Vic2l0ZSBpbiAzIHNlY29uZHMuLi48L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3JjaC1lbC1jb25lbnRcIj5EbyB5b3Ugd2lzaCB0byBjb250aW51ZT88L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1idG4tY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5wcmljZUNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcywgdHJ1ZSl9PlllczwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMucHJpY2VDb25maXJtYXRpb25Qb3B1cC5iaW5kKHRoaXMsIGZhbHNlKX0+Tm88L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aXAtYmFubmVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZpcC1iYW5uZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCB2cC1jbHMtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtcG9wLWNscy5zdmcnfSBvbkNsaWNrPXt0aGlzLnByb3BzLmJhbm5lckNvbmZpcm1hdGlvblBvcHVwLmJpbmQodGhpcyxmYWxzZSl9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCB2cC1ibnItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXAtaW1nLXBvcC5wbmcnfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9wLWJuci10eHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInZwLWJuci1rbm93LXR4dFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdCb29raW5nUGFnZVZpcEJhbm5lckNsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYm9va2luZ3BhZ2UtdmlwLWNsaWNrJ1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIFx0fVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtY2x1Yi1kZXRhaWxzP3NvdXJjZT1ib29raW5ncGFnZSZsZWFkX3NvdXJjZT1ib29raW5ncGFnZScpIH19Pktub3cgbW9yZSBhYm91dCBEb2NwcmltZSBWSVA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ2cC1ibnItc3ViLXR4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuYmFubmVyQ29uZmlybWF0aW9uUG9wdXAuYmluZCh0aGlzLHRydWUpfT5Ob3QgSW50ZXJlc3RlZD8gQ29udGludWUgQm9va2luZyA8aW1nIHN0eWxlPXt7d2lkdGg6JzdweCd9fSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcC1yZ2h0LnN2Zyd9IC8+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PiovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nQ29uZmlybWF0aW9uUG9wdXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBCb29raW5nRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImVycm9yLW1zZy1wb3BcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1lcnJvclwiIHN0eWxlPXt7IHdpZHRoOiAnMzAwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWhlYWRcIj48aW1nIGNsYXNzTmFtZT1cImVycm9ySW5mb0ltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2luZm9lcnJvci5zdmdcIn0gLz57XCJBbGVydFwifTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gYWx0PVwiY2xvc2VcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlRXJyb3JQb3B1cH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLW1zZ1wiPnt0aGlzLnByb3BzLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nRXJyb3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgc2VsZWN0X29wZF9wYXltZW50X3R5cGUsIHNlbmRBZ2VudEJvb2tpbmdVUkwsIGdldFVzZXJQcm9maWxlLCBnZXRDYXJ0SXRlbXMsIHJlbW92ZUZyb21DYXJ0LCBwcm9jZXNzQ2FydEl0ZW1zLCBzZWxlY3RQcm9maWxlLCBzZWxlY3RMYWJUaW1lU0xvdCwgc2VsZWN0T3BkVGltZVNMb3QsIHNhdmVQcm9maWxlUHJvY2VkdXJlcywgY2xlYXJBbGxUZXN0cywgYXBwbHlDb3Vwb25zLCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSwgZmV0Y2hUcmFuc2FjdGlvbnMsIHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSwgc2F2ZVBpbmNvZGUsIHNldENvbW1vblV0bVRhZ3MsIHVuU2V0Q29tbW9uVXRtVGFncyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5cbmltcG9ydCBDYXJ0VmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvY2FydCdcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJylcblxuY2xhc3MgQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGlmICghU1RPUkFHRS5jaGVja0F1dGgoKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UoYC9sb2dpbj9jYWxsYmFjaz0vY2FydGApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKFNUT1JBR0UuY2hlY2tBdXRoKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlclByb2ZpbGUoKSAvLyBnZXQgbG9nZ2VkSW4gdXNlciBwcm9maWxlc1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRDYXJ0SXRlbXMoKSAvLyBnZXQgY2FydCBpdGVtc1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFRyYW5zYWN0aW9ucygpIC8vIGdldCBhbHJlYWR5IGRvbmUgdHJhbnNhY3Rpb24gZGV0YWlsc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2FydFZpZXcgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnN0YXRlfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgICAgY2FydCwgdXNlcldhbGxldEJhbGFuY2UsIHVzZXJDYXNoYmFja0JhbGFuY2UsIHByb2ZpbGVzLCBkZWZhdWx0UHJvZmlsZSxcbiAgICAgICAgY29tbW9uX3V0bV90YWdzXG4gICAgfSA9IHN0YXRlLlVTRVJcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNhcnQsIHVzZXJXYWxsZXRCYWxhbmNlLCB1c2VyQ2FzaGJhY2tCYWxhbmNlLCBwcm9maWxlcywgZGVmYXVsdFByb2ZpbGUsXG4gICAgICAgIGNvbW1vbl91dG1fdGFnc1xuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VXNlclByb2ZpbGU6ICgpID0+IGRpc3BhdGNoKGdldFVzZXJQcm9maWxlKCkpLFxuICAgICAgICBnZXRDYXJ0SXRlbXM6ICgpID0+IGRpc3BhdGNoKGdldENhcnRJdGVtcygpKSxcbiAgICAgICAgcmVtb3ZlRnJvbUNhcnQ6IChpZCkgPT4gZGlzcGF0Y2gocmVtb3ZlRnJvbUNhcnQoaWQpKSxcbiAgICAgICAgcHJvY2Vzc0NhcnRJdGVtczogKHVzZV93YWxsZXQsIGV4dHJhUGFyYW1zKSA9PiBkaXNwYXRjaChwcm9jZXNzQ2FydEl0ZW1zKHVzZV93YWxsZXQsIGV4dHJhUGFyYW1zKSksXG4gICAgICAgIHNlbGVjdFByb2ZpbGU6IChpZCkgPT4gZGlzcGF0Y2goc2VsZWN0UHJvZmlsZShpZCkpLFxuICAgICAgICBzZWxlY3RPcGRUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUsIGFwcG9pbnRtZW50SWQsIGRhdGVQYXJhbSkgPT4gZGlzcGF0Y2goc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSwgYXBwb2ludG1lbnRJZCwgZGF0ZVBhcmFtKSksXG4gICAgICAgIHNlbGVjdExhYlRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSwgZGF0ZVBhcmFtKSA9PiBkaXNwYXRjaChzZWxlY3RMYWJUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlLCBkYXRlUGFyYW0pKSxcbiAgICAgICAgc2F2ZVByb2ZpbGVQcm9jZWR1cmVzOiAoZG9jdG9yX2lkLCBjbGluaWNfaWQsIHNlbGVjdGVkUHJvY2VkdXJlcywgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHNhdmVQcm9maWxlUHJvY2VkdXJlcyhkb2N0b3JfaWQsIGNsaW5pY19pZCwgc2VsZWN0ZWRQcm9jZWR1cmVzLCBmb3JjZUFkZCkpLFxuICAgICAgICBjbGVhckFsbFRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckFsbFRlc3RzKCkpLFxuICAgICAgICBhcHBseUNvdXBvbnM6IChwcm9kdWN0SWQsIGNvdXBvbkRhdGEsIGNvdXBvbklkLCBkb2N0b3JfaWQpID0+IGRpc3BhdGNoKGFwcGx5Q291cG9ucyhwcm9kdWN0SWQsIGNvdXBvbkRhdGEsIGNvdXBvbklkLCBkb2N0b3JfaWQpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkpLFxuICAgICAgICBmZXRjaFRyYW5zYWN0aW9uczogKCkgPT4gZGlzcGF0Y2goZmV0Y2hUcmFuc2FjdGlvbnMoKSksXG4gICAgICAgIHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSh0eXBlKSksXG4gICAgICAgIHNlbmRBZ2VudEJvb2tpbmdVUkw6IChvcmRlcklkLCB0eXBlLCBwdXJjaGFzZV90eXBlLHF1ZXJ5X2RhdGEsZXh0cmFQYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChzZW5kQWdlbnRCb29raW5nVVJMKG9yZGVySWQsIHR5cGUscHVyY2hhc2VfdHlwZSxxdWVyeV9kYXRhLCBleHRyYVBhcmFtcywgY2IpKSxcbiAgICAgICAgc2VsZWN0X29wZF9wYXltZW50X3R5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3Rfb3BkX3BheW1lbnRfdHlwZSh0eXBlKSksXG4gICAgICAgIHNhdmVQaW5jb2RlOiAocGluY29kZSkgPT4gZGlzcGF0Y2goc2F2ZVBpbmNvZGUocGluY29kZSkpLFxuICAgICAgICBzZXRDb21tb25VdG1UYWdzOiAodHlwZSwgdGFnKSA9PiBkaXNwYXRjaChzZXRDb21tb25VdG1UYWdzKHR5cGUsIHRhZykpLFxuICAgICAgICB1blNldENvbW1vblV0bVRhZ3M6ICh0eXBlLCB0YWcpPT4gZGlzcGF0Y2godW5TZXRDb21tb25VdG1UYWdzKHR5cGUsIHRhZykpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==