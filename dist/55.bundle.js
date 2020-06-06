(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./dev/js/components/commons/ratingsProfileView/HospitalPopUp.js":
/*!***********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/HospitalPopUp.js ***!
  \***********************************************************************/
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

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _RatingsPopUp = __webpack_require__(/*! ./RatingsPopUp.js */ "./dev/js/components/commons/ratingsProfileView/RatingsPopUp.js");

var _RatingsPopUp2 = _interopRequireDefault(_RatingsPopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HospitalPopUp = function (_React$Component) {
    _inherits(HospitalPopUp, _React$Component);

    function HospitalPopUp(props) {
        _classCallCheck(this, HospitalPopUp);

        var _this = _possibleConstructorReturn(this, (HospitalPopUp.__proto__ || Object.getPrototypeOf(HospitalPopUp)).call(this, props));

        _this.getunverifiedData = function () {
            var obj = {};
            if (_this.props.doctor_details) {
                obj = {
                    "doctor": _this.props.doctor_details,
                    "hospital": _this.props.doctor_details.hospitals,
                    "doctor_thumbnail": _this.props.doctor_details.thumbnail,
                    "display_name": _this.props.doctor_details.display_name,
                    "type": 'doctor',
                    "id": _this.props.doctor_details.id,
                    "lab": null
                };
            }
            return obj;
        };

        _this.state = {
            data: null,
            displayRatingBlock: 0,
            selectedHospital: null
        };
        return _this;
    }

    _createClass(HospitalPopUp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // if (STORAGE.checkAuth()) {
            //     this.props.getUnratedAppointment((err, data) => {
            //         if (!err && data) {
            //             this.setState({ data })
            //         }
            //     })
            // }
        }
    }, {
        key: 'selectRatingHospital',
        value: function selectRatingHospital(id) {
            this.setState({ displayRatingBlock: 1 });
            var selectedHospital = this.props.doctor_details.hospitals.filter(function (x) {
                return x.hospital_id == id;
            });
            selectedHospital = selectedHospital ? selectedHospital[0] : null;
            this.setState({ selectedHospital: selectedHospital });
        }
    }, {
        key: 'declineRating',
        value: function declineRating() {
            this.props.popUpState();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.state.displayRatingBlock) {
                return _react2.default.createElement(_RatingsPopUp2.default, _extends({}, this.props, { unverified: true, unverifiedData: this.getunverifiedData(), selectedHospital: this.state.selectedHospital }));
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: 'raiting-popup' },
                    _react2.default.createElement(
                        'div',
                        { className: 'home-rating-card' },
                        _react2.default.createElement(
                            'div',
                            { className: 'rate-card-header' },
                            'Choose Clinic to rate Doctor',
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('img', { onClick: this.declineRating.bind(this), src: "/assets" + "/img/customer-icons/rt-close.svg", className: 'img-fluid' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rate-seceltion-cont' },
                            this.props.doctor_details.hospitals && this.props.doctor_details.hospitals.length ? this.props.doctor_details.hospitals.map(function (hosp, i) {
                                return _react2.default.createElement(
                                    'p',
                                    { key: i, onClick: _this2.selectRatingHospital.bind(_this2, hosp.hospital_id) },
                                    ' ',
                                    hosp.hospital_name,
                                    ' '
                                );
                            }) : ""
                        )
                    )
                );
            }
        }
    }]);

    return HospitalPopUp;
}(_react2.default.Component);

exports.default = HospitalPopUp;

/***/ }),

/***/ "./dev/js/components/opd/commons/clinicSelector/ClinicSelector.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/opd/commons/clinicSelector/ClinicSelector.js ***!
  \************************************************************************/
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

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _profilePopUp = __webpack_require__(/*! ../profilePopUp.js */ "./dev/js/components/opd/commons/profilePopUp.js");

var _profilePopUp2 = _interopRequireDefault(_profilePopUp);

var _os = __webpack_require__(/*! os */ "./node_modules/os-browserify/browser.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClinicSelector = function (_React$Component) {
    _inherits(ClinicSelector, _React$Component);

    function ClinicSelector(props) {
        _classCallCheck(this, ClinicSelector);

        var _this = _possibleConstructorReturn(this, (ClinicSelector.__proto__ || Object.getPrototypeOf(ClinicSelector)).call(this, props));

        _this.state = {
            numberShown: ""
        };
        return _this;
    }

    _createClass(ClinicSelector, [{
        key: 'showNumber',
        value: function showNumber(id, hospital_id, e) {
            var _this2 = this;

            e.preventDefault();
            e.stopPropagation();

            var data = {
                'Category': 'ConsumerApp', 'Action': 'ShowNoClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-no-clicked', 'doctor_id': id, "hospital_id": hospital_id
            };
            _gtm2.default.sendEvent({ data: data });

            if (!this.state.numberShown) {
                this.props.getDoctorNumber(id, function (err, data) {
                    if (!err && data.number) {
                        _this2.setState({
                            numberShown: data.number
                        });
                    }
                });
            }
        }
    }, {
        key: 'toggle',
        value: function toggle(which) {
            this.setState(_defineProperty({}, which, !this.state[which]));
        }
    }, {
        key: 'procedurePopUp',
        value: function procedurePopUp(hospital_id) {
            this.setState({ vieMoreProcedures: true, selectedId: hospital_id });
        }
    }, {
        key: 'goToHospitalPage',
        value: function goToHospitalPage(hospital, e) {
            e.preventDefault();
            e.stopPropagation();
            if (hospital.url) {
                this.props.history.push('/' + hospital.url);
            } else {
                this.props.history.push('/ipd/hospital/' + hospital.hospital_id);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props$details = this.props.details,
                id = _props$details.id,
                name = _props$details.name,
                hospitals = _props$details.hospitals,
                is_live = _props$details.is_live,
                enabled_for_online_booking = _props$details.enabled_for_online_booking;

            var style = {};
            if (hospitals && hospitals.length == 1) {
                style['width'] = '98%';
            }

            if (!this.props.selectedClinic) {
                if (hospitals && hospitals.length) {
                    this.props.selectClinic(hospitals[0].hospital_id, hospitals[0].enabled_for_online_booking, 0, hospitals[0].discounted_price || 0, hospitals[0].show_contact);
                }
            }

            return (
                // <div className="widget-panel">
                //     <h4 className="panel-title mb-rmv">Dr. {name} Available at</h4>
                //     <div className="panel-content clinic-info-panel">
                //         <ul className="inline-list Clinic-card-list rtng-box-shadow">
                //             {
                //                 hospitals.map((hospital, i) => {
                //                     return <li key={i} style={style}>
                //                         <div className="widget no-shadow">
                //                             {/* <div className="widget-header pb-rmv clearfix">
                //                                 <h4 className="widget-title text-md fw-700 clinic-selector-name ratng-clinic-slc-name">{hospital.hospital_name}</h4>
                //                                 <span className="float-right text-md fw-700 ratng-doc-price">&#8377; {hospital.deal_price}</span>
                //                             </div> */}
                //                             <div className="widget-header pb-rmv clearfix">
                //                                 <h4 className="widget-title text-md fw-700 clinic-selector-name ratng-clinic-slc-name">{hospital.hospital_name}</h4>
                //                                 <span className="float-right text-md fw-700 ratng-doc-price add-on-doc-price">&#8377; {hospital.deal_price} <b className="ratng-doc-oldprice">&#8377; {hospital.mrp}</b>
                //                                     {
                //                                         STORAGE.checkAuth() || hospital.deal_price < 100 ?
                //                                             ''
                //                                             : <span className="signup-off-doc">+ &#8377; 100 OFF <b>on Signup</b> </span>
                //                                     }
                //                                 </span>
                //                             </div>
                //                             <div className="widget-content pt-two">
                //                                 <div className="location-details clearfix">
                //                                     <p className="address">{hospital.address}</p>
                //                                     <a href={`https://www.google.com/maps/search/?api=1&query=${hospital.lat},${hospital.long}`} style={{ float: 'right', cursor: 'pointer' }} target="_blank">
                //                                         <img src={ASSETS_BASE_URL + "/img/customer-icons/map-icon.png"} />
                //                                     </a>
                //                                     {/* <div style={{ float: 'right', cursor: 'pointer' }} >

                //                                     </div> */}
                //                                 </div>
                //                                 <div className="timing-details mt-rmv">
                //                                     <span className="rtng-clnc-time">Timings</span>
                //                                     {
                //                                         Object.keys(hospital.timings).map((timingKey, key) => {
                //                                             return <p className="fw-700" key={key}>
                //                                                 <label className="fw-700 text-md text-primary" style={{ verticalAlign: 'initial' }} >
                //                                                     {timingKey}
                //                                                 </label>
                //                                                 {" " + hospital.timings[timingKey].join(', ')}
                //                                             </p>
                //                                         })
                //                                     }
                //                                 </div>
                //                             </div>
                //                             <div className="text-center" style={{ marginTop: 12 }}>
                //                                 {
                //                                     enabled_for_online_booking ? <button style={{ visibility: (!!is_live ? "visible" : "hidden") }} className="v-btn v-btn-primary btn-sm" onClick={this.selectClinic.bind(this, hospital.hospital_id, !!is_live, i)}>Book Now</button> : <button onClick={this.showNumber.bind(this, id, hospital.hospital_id)} className={this.state.numberShown ? "v-btn v-btn-primary btn-sm btn-number" : "v-btn v-btn-primary btn-sm"}>{this.state.numberShown || "Contact"}</button>
                //                                 }

                //                             </div>
                //                         </div>
                //                     </li>
                //                 })
                //             }
                //         </ul>
                //     </div>
                // </div>
                _react2.default.createElement(
                    'div',
                    { className: 'widget-panel' },
                    _react2.default.createElement(
                        'h2',
                        { className: 'panel-title mb-rmv' },
                        'Dr. ',
                        name,
                        ' Available at'
                    ),
                    hospitals.map(function (hospital, i) {
                        var vip_discounted_price = 0;
                        vip_discounted_price = hospital.discounted_price - (hospital.vip.vip_gold_price + hospital.vip.vip_convenience_amount);
                        return _react2.default.createElement(
                            'div',
                            { key: i, className: 'panel-content pnl-bottom-border' },
                            _react2.default.createElement(
                                'div',
                                { className: 'dtl-radio' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'container-radio', onClick: function onClick() {
                                            _this3.props.selectClinic(hospital.hospital_id, hospital.enabled_for_online_booking, i, hospital.discounted_price, hospital.show_contact);
                                        } },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'fw-500 hosptl-vq-mr', style: { fontSize: 'inherit' } },
                                        hospital.hospital_name,
                                        ' '
                                    ),
                                    _this3.props.selectedClinic == hospital.hospital_id ? _react2.default.createElement('input', { type: 'radio', checked: true, name: 'radio' }) : _react2.default.createElement('input', { type: 'radio', name: 'radio' }),
                                    _react2.default.createElement(
                                        'a',
                                        { href: hospital.url ? '/' + hospital.url : '/ipd/hospital/' + hospital.hospital_id, onClick: _this3.goToHospitalPage.bind(_this3, hospital) },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'vw-hsptl-di' },
                                            '(View Hospital)'
                                        )
                                    ),
                                    _react2.default.createElement('span', { className: 'doc-checkmark' })
                                )
                            ),
                             false ? undefined : _react2.default.createElement(
                                'div',
                                { className: 'dtl-cnslt-fee pb-list cnslt-fee-style mb-0' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'clearfix' },
                                    hospital.insurance && hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured && parseInt(hospital.discounted_price) <= hospital.insurance.insurance_threshold_amount ? _react2.default.createElement(
                                        'span',
                                        { className: 'test-price txt-ornage' },
                                        '\u20B9 ',
                                        0
                                    ) : (hospital.vip.is_gold_member || hospital.vip.is_vip_member) && hospital.vip.cover_under_vip ? _react2.default.createElement(
                                        _react2.default.Fragment,
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'text-right' },
                                            _react2.default.createElement('img', { className: 'gld-cd-icon', src: "/assets" + '/img/gold-sm.png' })
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'cst-doc-price' },
                                            '\u20B9 ',
                                            hospital.vip.vip_amount + hospital.vip.vip_convenience_amount,
                                            ' ',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'cstm-doc-cut-price' },
                                                '\u20B9 ',
                                                hospital.mrp,
                                                ' '
                                            )
                                        )
                                    )
                                    /*:hospital.vip.is_gold_member?
                                        <span className="test-price txt-ornage">₹ {hospital.vip.vip_amount + hospital.vip.vip_convenience_amount}
                                            <span className="test-mrp">₹ {hospital.mrp}</span>
                                        </span>
                                    :hospital.vip.is_vip_member?
                                        <span className="test-price txt-ornage">₹ {hospital.vip.vip_amount}
                                            <span className="test-mrp">₹ {hospital.mrp}</span>
                                        </span>*/
                                    : hospital.enabled_for_cod && !hospital.enabled_for_prepaid ? hospital.cod_deal_price ? _react2.default.createElement(
                                        'span',
                                        { className: 'test-price txt-ornage' },
                                        '\u20B9 ',
                                        hospital.cod_deal_price,
                                        parseInt(hospital.cod_deal_price) == parseInt(hospital.mrp) ? '' : _react2.default.createElement(
                                            'span',
                                            { className: 'test-mrp' },
                                            '\u20B9 ',
                                            hospital.mrp
                                        )
                                    ) : _react2.default.createElement(
                                        'span',
                                        { className: 'test-price txt-ornage' },
                                        '\u20B9 ',
                                        hospital.mrp
                                    ) : hospital.enabled_for_online_booking ? _react2.default.createElement(
                                        'span',
                                        { className: 'test-price txt-ornage' },
                                        '\u20B9 ',
                                        hospital.discounted_price,
                                        parseInt(hospital.discounted_price) == parseInt(hospital.mrp) ? '' : _react2.default.createElement(
                                            'span',
                                            { className: 'test-mrp' },
                                            '\u20B9 ',
                                            hospital.mrp
                                        )
                                    ) : hospital.mrp && hospital.mrp != 0 ? _react2.default.createElement(
                                        'span',
                                        { className: 'test-price txt-ornage' },
                                        '\u20B9 ',
                                        hospital.mrp
                                    ) : '',
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'fw-500 test-name-item' },
                                        'Consultation Fee'
                                    )
                                )
                            ),
                            !hospital.insurance.is_user_insured && !hospital.vip.is_vip_member && !hospital.vip.is_gold_member && hospital.vip.is_enable_for_vip && hospital.discounted_price > (hospital.vip.vip_convenience_amount || 0 + hospital.vip.vip_gold_price || 0) ? _react2.default.createElement(
                                'div',
                                { className: 'd-flex align-items-center justify-content-end goldCard gold-price-card-addon-clinicSelector', onClick: function onClick(e) {
                                        e.stopPropagation();
                                        _this3.props.clearVipSelectedPlan();
                                        var analyticData = {
                                            'Category': 'ConsumerApp', 'Action': 'OpdProfileVipGoldClick', 'CustomerID': _gtm2.default.getUserId(), 'leadid': 0, 'event': 'opd-profile-vip-gold-click'
                                        };
                                        _gtm2.default.sendEvent({ data: analyticData });
                                        _this3.props.history.push('/vip-gold-details?is_gold=true&source=opd-profile-vip-gold-click&lead_source=Docprime');
                                    } },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'gld-p-rc' },
                                    'For'
                                ),
                                _react2.default.createElement('img', { className: 'gld-cd-icon', src: "/assets" + '/img/gold-sm.png' }),
                                ' ',
                                _react2.default.createElement(
                                    'p',
                                    { className: 'gld-p-rc' },
                                    'Members'
                                ),
                                ' ',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'gld-rate-lf' },
                                    '\u20B9 ',
                                    hospital.vip.vip_gold_price + hospital.vip.vip_convenience_amount
                                ),
                                _react2.default.createElement('img', { style: { transform: 'rotate(-90deg)', width: '10px', margin: '0px 10px 0px 0px' }, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                            ) : '',
                            hospital.insurance && hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured && parseInt(hospital.discounted_price) <= hospital.insurance.insurance_threshold_amount ? '' : hospital.enabled_for_cod && !hospital.enabled_for_prepaid ? hospital.cod_deal_price && hospital.cod_deal_price !== hospital.mrp ? _react2.default.createElement(
                                'p',
                                { className: 'cstm-cpn' },
                                parseInt((hospital.mrp - hospital.cod_deal_price) / hospital.mrp * 100),
                                '% Off',
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    _react2.default.createElement('br', null),
                                    '(includes Coupon)'
                                )
                            ) : '' : hospital.enabled_for_online_booking && hospital.discounted_price < hospital.mrp ? _react2.default.createElement(
                                'p',
                                { className: 'cstm-cpn' },
                                parseInt((hospital.mrp - hospital.discounted_price) / hospital.mrp * 100),
                                '% Off',
                                hospital.agreed_price != hospital.discounted_price ? _react2.default.createElement(
                                    'span',
                                    null,
                                    _react2.default.createElement('br', null),
                                    '(includes Coupon)'
                                ) : ''
                            ) : '',
                            hospital.insurance && hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured && parseInt(hospital.discounted_price) <= hospital.insurance.insurance_threshold_amount ? _react2.default.createElement(
                                'div',
                                { className: 'ins-val-bx-opd' },
                                'Covered Under Insurance'
                            ) : '',
                            _react2.default.createElement(
                                'div',
                                { className: 'address-bg-color' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row no-gutters' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-10' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'add-content' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'add-span' },
                                                'Address:'
                                            ),
                                            _react2.default.createElement(
                                                'h4',
                                                { className: 'fw-500', style: { fontSize: 14 } },
                                                hospital.address
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'add-content' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'add-span' },
                                                'Timings:'
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { style: { flex: 1 } },
                                                Object.keys(hospital.timings).map(function (timingKey, key) {
                                                    return _react2.default.createElement(
                                                        'p',
                                                        { key: key },
                                                        timingKey,
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            " " + hospital.timings[timingKey].join(', ')
                                                        )
                                                    );
                                                })
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-2' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'https://www.google.com/maps/search/?api=1&query=' + hospital.lat + ',' + hospital.long, style: { float: 'right', cursor: 'pointer' }, target: '_blank' },
                                            _react2.default.createElement('img', { style: { width: "35px", height: "35px", cursor: 'pointer' }, src: "/assets" + "/img/customer-icons/map-icon.png", className: 'img-fluid' })
                                        )
                                    )
                                )
                            ),
                             false ? undefined : '',
                             false ? undefined : '',
                             false ? undefined : ''
                        );
                    })
                )
            );
        }
    }]);

    return ClinicSelector;
}(_react2.default.Component);

exports.default = ClinicSelector;

/***/ }),

/***/ "./dev/js/components/opd/commons/clinicSelector/index.js":
/*!***************************************************************!*\
  !*** ./dev/js/components/opd/commons/clinicSelector/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClinicSelector = __webpack_require__(/*! ./ClinicSelector.js */ "./dev/js/components/opd/commons/clinicSelector/ClinicSelector.js");

var _ClinicSelector2 = _interopRequireDefault(_ClinicSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ClinicSelector2.default;

/***/ }),

/***/ "./dev/js/components/opd/commons/profilePopUp.js":
/*!*******************************************************!*\
  !*** ./dev/js/components/opd/commons/profilePopUp.js ***!
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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopUpView = function (_React$Component) {
    _inherits(PopUpView, _React$Component);

    function PopUpView(props) {
        _classCallCheck(this, PopUpView);

        var _this = _possibleConstructorReturn(this, (PopUpView.__proto__ || Object.getPrototypeOf(PopUpView)).call(this, props));

        _this.state = {
            selectedProcedureIds: [],
            procedure: []
        };
        return _this;
    }

    _createClass(PopUpView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var selectedProcedureIds = [];
            Object.values(this.props.data).map(function (procedure) {

                selectedProcedureIds = selectedProcedureIds.concat(procedure.filter(function (x) {
                    return x.is_selected;
                }).map(function (x) {
                    return x.procedure_id;
                }));
            });
            this.setState({ selectedProcedureIds: selectedProcedureIds, procedure: [].concat(selectedProcedureIds) });
        }
    }, {
        key: 'toggleData',
        value: function toggleData(procedure) {
            var selectedProcedures = this.state.selectedProcedureIds;
            if (selectedProcedures.length > 1 || selectedProcedures.length == 1 && selectedProcedures.indexOf(procedure.procedure_id) == -1) {

                if (selectedProcedures.indexOf(procedure.procedure_id) != -1) {
                    selectedProcedures.splice(selectedProcedures.indexOf(procedure.procedure_id), 1);
                } else {
                    selectedProcedures.push(procedure.procedure_id);
                }
                this.setState({ selectedProcedureIds: selectedProcedures });
            } else if (selectedProcedures.length == 0) {
                selectedProcedures.push(procedure.procedure_id);
                this.setState({ selectedProcedureIds: selectedProcedures });
            } else {
                //this.setState({ errorMessage: true })
                setTimeout(function () {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please Select at least one Procedure" });
                }, 500);
                return null;
            }
        }
    }, {
        key: 'toggleFinal',
        value: function toggleFinal(doctor_id, hospital_id) {
            var fetchResults = false;
            var selectedProcedures = this.state.selectedProcedureIds;
            var procedure = this.state.procedure;
            if (selectedProcedures.length === procedure.length && selectedProcedures.sort().every(function (value, index) {
                return value === procedure.sort()[index];
            })) {} else {
                fetchResults = true;
            }
            if (fetchResults) {
                this.props.toggleProfileProcedures(selectedProcedures, doctor_id, hospital_id);
            }
            this.props.toggle();
        }
    }, {
        key: 'toggleProcedure',
        value: function toggleProcedure(procedure_to_toggle, doctor_id, hospital_id) {

            var selectedProcedureIds = [];
            Object.values(this.props.selectedDoctorProcedure[doctor_id][hospital_id].categories).map(function (procedure) {

                selectedProcedureIds = selectedProcedureIds.concat(procedure.filter(function (x) {
                    return x.is_selected;
                }).map(function (x) {
                    return x.procedure_id;
                }));
            });

            //selectedProcedureIds = selectedProcedureIds.concat(this.props.profileCommonProcedures)

            var found = false;

            if (selectedProcedureIds.length > 1 || selectedProcedureIds.length < 1 || selectedProcedureIds.length == 1 && selectedProcedureIds.indexOf(procedure_to_toggle.procedure_id) == -1) {
                found = true;
            }

            if (found) {
                this.props.toggleProfileProcedures(procedure_to_toggle, doctor_id, hospital_id);
            } else {
                this.setState({ errorMsg: true });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var procedure_ids = this.state.selectedProcedureIds;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { className: 'cancel-overlay', onClick: this.props.toggle }),
                _react2.default.createElement(
                    'div',
                    { className: 'widget cancel-appointment-div cancel-popup' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pop-top-heading' },
                        'Select Treatment(s)',
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/close-black.svg", onClick: this.props.toggle })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'onscreen-scroll' },
                        Object.values(this.props.data).map(function (category, i) {

                            return _react2.default.createElement(
                                'div',
                                { className: 'pop-underline', key: i },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'widget-header action-screen-header pop-padding' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'fw-500 cancel-appointment-head' },
                                        category[0].category_name
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'terms-condition-div' },
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'procedure-list' },
                                            category.map(function (procedure, key) {
                                                return _react2.default.createElement(
                                                    'li',
                                                    { key: key },
                                                    _react2.default.createElement(
                                                        'label',
                                                        { className: 'procedure-check ck-bx', htmlFor: procedure.procedure_id + '_' },
                                                        procedure.procedure_name,
                                                        _react2.default.createElement('input', { type: 'checkbox', checked: procedure_ids.indexOf(procedure.procedure_id) != -1 ? true : false, id: procedure.procedure_id + '_', name: 'fruit-2', value: '', onChange: _this2.toggleData.bind(_this2, procedure) /*{this.toggleProcedure.bind(this, procedure, this.props.doctor_id, this.props.hospital_id)}*/ }),
                                                        _react2.default.createElement('span', { className: 'checkmark' })
                                                    ),
                                                    _this2.props.hospitalEnable ? _react2.default.createElement(
                                                        'p',
                                                        { className: 'pr-prices' },
                                                        '\u20B9 ',
                                                        procedure.deal_price,
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'pr-cut-price' },
                                                            '\u20B9 ',
                                                            procedure.mrp
                                                        )
                                                    ) : _react2.default.createElement(
                                                        'p',
                                                        { className: 'pr-prices' },
                                                        '\u20B9 ',
                                                        procedure.mrp
                                                    )
                                                );
                                            })
                                        )
                                    )
                                )
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'procedures-btn-pop' },
                        _react2.default.createElement(
                            'button',
                            { className: 'fw-500', onClick: this.toggleFinal.bind(this, this.props.doctor_id, this.props.hospital_id) },
                            'Done'
                        )
                    )
                )
            );
        }
    }]);

    return PopUpView;
}(_react2.default.Component);

exports.default = PopUpView;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/ContactPopup.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/ContactPopup.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactPoupView = function (_React$Component) {
	_inherits(ContactPoupView, _React$Component);

	function ContactPoupView(props) {
		_classCallCheck(this, ContactPoupView);

		var _this = _possibleConstructorReturn(this, (ContactPoupView.__proto__ || Object.getPrototypeOf(ContactPoupView)).call(this, props));

		_this.state = { validateNo: false, phoneNumber: '' };
		return _this;
	}

	_createClass(ContactPoupView, [{
		key: 'inputHandler',
		value: function inputHandler(e) {
			if (e.target.name == 'phoneNumber') {
				var _setState;

				e.target.value.length <= 10 ? e.target.value.length == 10 ? this.setState((_setState = {}, _defineProperty(_setState, e.target.name, e.target.value), _defineProperty(_setState, 'validateNo', true), _setState)) : this.setState(_defineProperty({}, e.target.name, e.target.value)) : this.setState({ validateNo: true });
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.mobileNo) {
				this.setState({ phoneNumber: this.props.mobileNo, validateNo: true });
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			//    	if(nextProps)
		}
	}, {
		key: 'handleContinuePress',
		value: function handleContinuePress(e) {
			if (e.key === 'Enter') {
				this.submit();
			}
		}
	}, {
		key: 'submit',
		value: function submit() {
			if (this.state.validateNo) {
				this.props.getDoctor(this.state.phoneNumber);
			} else {
				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please provide a valid number (10 digits)" });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('div', { className: 'cancel-overlay', onClick: this.props.toggle }),
				_react2.default.createElement(
					'div',
					{ className: 'widget cancel-appointment-div cancel-popup' },
					_react2.default.createElement('img', { src: "/assets" + "/img/icons/close.png", style: { cursor: 'pointer', zIndex: '9' }, className: 'close-modal', onClick: this.props.toggle }),
					_react2.default.createElement(
						'div',
						{ className: 'widget-header text-center action-screen-header', style: { position: 'relative', paddingTop: '28px' } },
						_react2.default.createElement(
							'p',
							{ className: 'fw-500 cancel-appointment-head' },
							'Please enter your mobile number to view contact details. You will only be able to call this number from the entered mobile number.'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: '' },
						_react2.default.createElement(
							'div',
							{ className: 'slt-nw-input policyNumbeInput' },
							_react2.default.createElement(
								'label',
								{ className: 'numLabel', htmlFor: 'male' },
								'+91'
							),
							_react2.default.createElement('input', { className: 'slt-text-input', type: 'number', placeholder: '10 digit mobile number', value: this.state.phoneNumber, onChange: this.inputHandler.bind(this), name: 'phoneNumber', onKeyPress: this.handleContinuePress.bind(this) })
						),
						_react2.default.createElement(
							'button',
							{ className: 'mobileNumber-fill-btn', onClick: this.submit.bind(this) },
							'Submit'
						)
					),
					_react2.default.createElement(
						'p',
						{ className: 'text-center fw-500 p-3 imptnt-cls', style: { fontSize: 12, color: '#8a8a8a' } },
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
			);
		}
	}]);

	return ContactPoupView;
}(_react2.default.Component);

exports.default = ContactPoupView;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/DoctorProfileView.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/DoctorProfileView.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _RatingProfileCard = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingProfileCard.js */ "./dev/js/components/commons/ratingsProfileView/RatingProfileCard.js");

var _RatingProfileCard2 = _interopRequireDefault(_RatingProfileCard);

var _ComplimentListView = __webpack_require__(/*! ../../commons/ratingsProfileView/ComplimentListView.js */ "./dev/js/components/commons/ratingsProfileView/ComplimentListView.js");

var _ComplimentListView2 = _interopRequireDefault(_ComplimentListView);

var _doctorProfileCard = __webpack_require__(/*! ../commons/doctorProfileCard */ "./dev/js/components/opd/commons/doctorProfileCard/index.js");

var _doctorProfileCard2 = _interopRequireDefault(_doctorProfileCard);

var _index = __webpack_require__(/*! ../doctorProfile/aboutDoctor/index.js */ "./dev/js/components/opd/doctorProfile/aboutDoctor/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../doctorProfile/professionalGraph/index.js */ "./dev/js/components/opd/doctorProfile/professionalGraph/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../commons/clinicSelector/index.js */ "./dev/js/components/opd/commons/clinicSelector/index.js");

var _index6 = _interopRequireDefault(_index5);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _footer = __webpack_require__(/*! ../../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _ContactPopup = __webpack_require__(/*! ../doctorProfile/ContactPopup.js */ "./dev/js/components/opd/doctorProfile/ContactPopup.js");

var _ContactPopup2 = _interopRequireDefault(_ContactPopup);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _initialsPicture = __webpack_require__(/*! ../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _ReviewList = __webpack_require__(/*! ../../commons/ratingsProfileView/ReviewList.js */ "./dev/js/components/commons/ratingsProfileView/ReviewList.js");

var _ReviewList2 = _interopRequireDefault(_ReviewList);

var _RatingGraph = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingGraph.js */ "./dev/js/components/commons/ratingsProfileView/RatingGraph.js");

var _RatingGraph2 = _interopRequireDefault(_RatingGraph);

var _ratingReviewView = __webpack_require__(/*! ../../commons/ratingsProfileView/ratingReviewView.js */ "./dev/js/components/commons/ratingsProfileView/ratingReviewView.js");

var _ratingReviewView2 = _interopRequireDefault(_ratingReviewView);

var _RatingStars = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

var _HospitalPopUp = __webpack_require__(/*! ../../commons/ratingsProfileView/HospitalPopUp.js */ "./dev/js/components/commons/ratingsProfileView/HospitalPopUp.js");

var _HospitalPopUp2 = _interopRequireDefault(_HospitalPopUp);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _ipdLeadForm = __webpack_require__(/*! ../../../containers/ipd/ipdLeadForm.js */ "./dev/js/containers/ipd/ipdLeadForm.js");

var _ipdLeadForm2 = _interopRequireDefault(_ipdLeadForm);

var _IpdDoctorCityPopup = __webpack_require__(/*! ../../../containers/ipd/IpdDoctorCityPopup.js */ "./dev/js/containers/ipd/IpdDoctorCityPopup.js");

var _IpdDoctorCityPopup2 = _interopRequireDefault(_IpdDoctorCityPopup);

var _nonBookableDoctor = __webpack_require__(/*! ./nonBookableDoctor.js */ "./dev/js/components/opd/doctorProfile/nonBookableDoctor.js");

var _nonBookableDoctor2 = _interopRequireDefault(_nonBookableDoctor);

var _vipProfilePopup = __webpack_require__(/*! ./vipProfilePopup.js */ "./dev/js/components/opd/doctorProfile/vipProfilePopup.js");

var _vipProfilePopup2 = _interopRequireDefault(_vipProfilePopup);

var _nonIpdPopup = __webpack_require__(/*! ../../commons/nonIpdPopup.js */ "./dev/js/components/commons/nonIpdPopup.js");

var _nonIpdPopup2 = _interopRequireDefault(_nonIpdPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var DoctorProfileView = function (_React$Component) {
    _inherits(DoctorProfileView, _React$Component);

    function DoctorProfileView(props) {
        _classCallCheck(this, DoctorProfileView);

        var _this = _possibleConstructorReturn(this, (DoctorProfileView.__proto__ || Object.getPrototypeOf(DoctorProfileView)).call(this, props));

        _this.display_hospital_rating_block = function () {
            _this.setState({ displayHospitalRatingBlock: 1 });
        };

        var footerData = null;
        if (_this.props.initialServerData) {
            footerData = _this.props.initialServerData.footerData;
        }
        var parsed = queryString.parse(_this.props.location.search);
        _this.state = {
            footerData: footerData,
            seoFriendly: _this.props.match.url.includes('-dpp'),
            selectedClinic: _this.props.hospital_id || "",
            is_live: false,
            rank: 0,
            consultation_fee: 0,
            numberShown: "",
            searchShown: false,
            searchDataHidden: _this.props.location.search.includes('hide_search_data'),
            openContactPopup: false,
            clinicPhoneNo: {},
            show_contact: '',
            isOrganic: _this.props.location.search.includes('hospital_id'),
            displayHospitalRatingBlock: 0,
            showIpdLeadForm: true,
            showSecondPopup: false,
            firstLeadId: '',
            closeNonBookable: false,
            showVipPopup: false,
            showNonIpdPopup: parsed.show_popup,
            to_be_force: 1,
            is_organic_landing: false,
            is_lead_enabled: true
        };
        return _this;
    }

    _createClass(DoctorProfileView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (window) {
                window.scrollTo(0, 0);
            }
            if (this.state.seoFriendly) {
                this.props.getFooterData(this.props.match.url.split('/')[1]).then(function (footerData) {
                    if (footerData) {
                        _this2.setState({ footerData: footerData });
                    }
                });
            }

            if (this.props.app_download_list && !this.props.app_download_list.length) {

                this.props.getDownloadAppBannerList(function (resp) {
                    if (resp && resp.length && resp[0].data) {
                        _this2.showDownloadAppWidget(resp[0].data);
                    }
                });
            } else {
                this.showDownloadAppWidget(this.props.app_download_list);
            }

            this.setState({ searchShown: true });
            var time_to_show = 2000;
            var doctor_id = this.props.selectedDoctor;
            if (this.props.initialServerData && this.props.initialServerData.doctor_id) {
                doctor_id = this.props.initialServerData.doctor_id;
            }
            if (this.props.DOCTORS[doctor_id]) {
                time_to_show = 1000;
            }
            // setTimeout(()=>{
            //     this.setState({showVipPopup: true})
            // }, time_to_show)
            this.setState({ is_organic_landing: true });
        }
    }, {
        key: 'showDownloadAppWidget',
        value: function showDownloadAppWidget(dataList) {
            var _this3 = this;

            var landing_page = false;
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE) {
                landing_page = true;
            }

            var downloadAppButtonData = {};

            if (landing_page && dataList && dataList.length) {

                dataList.map(function (banner) {
                    if (banner.isenabled && (_this3.props.match.url.includes(banner.ends_with) || _this3.props.match.url.includes(banner.starts_with))) {
                        downloadAppButtonData = banner;
                    }
                });
            }

            if (Object.values(downloadAppButtonData).length) {

                var gtmTrack = {
                    'Category': 'ConsumerApp', 'Action': 'DownloadAppButtonVisible', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'download-app-button-visible', 'starts_with': downloadAppButtonData.starts_with ? downloadAppButtonData.starts_with : '', 'ends_with': downloadAppButtonData.ends_with ? downloadAppButtonData.ends_with : '', 'device': this.props.device_info
                };
                _gtm2.default.sendEvent({ data: gtmTrack });
            }
        }
    }, {
        key: 'getMetaTagsData',
        value: function getMetaTagsData(seoData) {
            var title = "";
            var description = "";
            var schema = {};
            if (seoData) {
                title = seoData.title || "";
                description = seoData.description || "";
                schema = seoData.schema;
            }
            return { title: title, description: description, schema: schema };
        }
    }, {
        key: 'selectClinic',
        value: function selectClinic(clinic_id, is_live, rank, consultation_fee, show_contact) {
            var clinicPhoneNo = this.state.clinicPhoneNo;
            if (!clinicPhoneNo[clinic_id]) {
                clinicPhoneNo[clinic_id] = "";
            }
            this.setState({ selectedClinic: clinic_id, is_live: is_live, rank: rank, numberShown: "", consultation_fee: consultation_fee, clinicPhoneNo: clinicPhoneNo, show_contact: show_contact });
        }
    }, {
        key: 'navigateToClinic',
        value: function navigateToClinic(doctor_id, clinicId, topBookNow) {
            var rank = this.state.rank;
            if (topBookNow) {
                var gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'OpdTopBookNowClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-top-book-now-clicked', 'selectedId': clinicId || ''
                };
                _gtm2.default.sendEvent({ data: gtmData });
            }
            if (this.state.is_live) {

                var data = {
                    'Category': 'ConsumerApp', 'Action': 'OpdBookNowClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-book-now-clicked', 'selectedId': clinicId || ''
                };
                _gtm2.default.sendEvent({ data: data });

                data = {
                    'Category': 'ConsumerApp', 'Action': 'OpdBookNowRank', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-book-now-rank', 'rank': rank + 1
                };
                _gtm2.default.sendEvent({ data: data });
                this.props.saveProfileProcedures(doctor_id, clinicId);

                if (this.state.seoFriendly) {
                    this.props.history.push(window.location.pathname + '/booking?doctor_id=' + doctor_id + '&hospital_id=' + clinicId);
                } else {
                    this.props.history.push('/opd/doctor/' + doctor_id + '/' + clinicId + '/bookdetails');
                }
            }
        }
    }, {
        key: 'getDoctorNo',
        value: function getDoctorNo(mobileNo) {
            var _this4 = this;

            var doctor_id = this.props.selectedDoctor;
            if (this.props.initialServerData && this.props.initialServerData.doctor_id) {
                doctor_id = this.props.initialServerData.doctor_id;
            }

            var data = {
                'Category': 'ConsumerApp', 'Action': 'SubmitPhoneNo', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'submit-phone-no', 'doctor_id': doctor_id, "hospital_id": this.state.selectedClinic, 'mobileNo': mobileNo
            };
            _gtm2.default.sendEvent({ data: data });
            var postData = {
                "mobile": mobileNo,
                "doctor": doctor_id,
                "hospital": this.state.selectedClinic
            };
            this.props.getDoctorNo(postData, function (err, data) {
                if (!err && data) {

                    var clinicPhoneNo = _this4.state.clinicPhoneNo;
                    clinicPhoneNo[_this4.state.selectedClinic] = data.number;

                    _this4.setState({
                        numberShown: data.number,
                        openContactPopup: false,
                        clinicPhoneNo: clinicPhoneNo
                    });
                }
            });
        }
    }, {
        key: 'showNumber',
        value: function showNumber(id, e) {
            e.preventDefault();
            e.stopPropagation();

            var data = {
                'Category': 'ConsumerApp', 'Action': 'ShowNoClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'show-no-clicked', 'doctor_id': id, "hospital_id": this.state.selectedClinic
            };
            if (!this.state.clinicPhoneNo[this.state.selectedClinic]) {
                _gtm2.default.sendEvent({ data: data });
                /*this.props.getDoctorNumber(id, this.state.selectedClinic, (err, data) => {
                    if (!err && data.number) {
                        this.setState({
                            numberShown: data.number
                        })
                    }
                })*/
                this.setState({ openContactPopup: true });
            }
        }
    }, {
        key: 'toggle',
        value: function toggle(which) {
            this.setState(_defineProperty({}, which, !this.state[which]));
        }
    }, {
        key: 'navigateToDoctor',
        value: function navigateToDoctor(doctor, e) {
            e.preventDefault();
            if (doctor.url) {
                this.props.history.push('/' + doctor.url);
            } else {
                this.props.history.push('/opd/doctor/' + doctor.id);
            }

            var data = {
                'Category': 'ConsumerApp', 'Action': 'recommendedDoctorClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'recommended-doctor-click', 'DoctorID': doctor.doctor_id
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'viewAllDocClick',
        value: function viewAllDocClick(nearbyDoctors) {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'viewAllDoctorsClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'view-all-doctors-click'
            };
            _gtm2.default.sendEvent({ data: data });

            window.open(nearbyDoctors.doctors_url, '_self');
        }
    }, {
        key: 'hospitalPopUpState',
        value: function hospitalPopUpState() {
            this.setState({ displayHospitalRatingBlock: 0 });
        }
    }, {
        key: 'downloadButton',
        value: function downloadButton(data) {
            var gtmTrack = {
                'Category': 'ConsumerApp', 'Action': 'DownloadAppButtonClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'download-app-button-clicked', 'starts_with': data.starts_with ? data.starts_with : '', 'ends_with': data.ends_with ? data.ends_with : '', 'device': this.props.device_info
            };
            _gtm2.default.sendEvent({ data: gtmTrack });
            if (window) {
                window.open(data.URL, '_self');
            }
        }
    }, {
        key: 'submitLeadFormGeneration',
        value: function submitLeadFormGeneration(ipdFormParams) {
            if (ipdFormParams) {
                var gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'DoctorProfileIpdFormClosed', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-profile-ipd-form-closed'
                };
                _gtm2.default.sendEvent({ data: gtmData });
            }
            var ipd_data = {
                showChat: true,
                ipdFormParams: ipdFormParams
            };

            this.setState({ showIpdLeadForm: false, showSecondPopup: true }, function () {
                // this.props.ipdChatView({showIpdChat:true, ipdForm: ipdFormParams, showMinimize:true})   
            });
        }
    }, {
        key: 'saveLeadIdForUpdation',
        value: function saveLeadIdForUpdation(response) {
            if (response.id) {
                this.setState({ firstLeadId: response.id, showSecondPopup: true });
            }
        }
    }, {
        key: 'secondIpdFormSubmitted',
        value: function secondIpdFormSubmitted() {
            this.setState({ showSecondPopup: false });
        }
    }, {
        key: 'closeNonBookableDocPopup',
        value: function closeNonBookableDocPopup() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'NonBookableDoctorCrossClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Non-Bookable-Doctor-cross-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState({ closeNonBookable: true });
        }
    }, {
        key: 'toggleVip',
        value: function toggleVip() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'DocProfileCrossClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Doctor-profile-cross-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState({ showVipPopup: false });
        }
    }, {
        key: 'navigateToVip',
        value: function navigateToVip() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'DocProfileVipNavigation', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Doctor-profile-vip-navigation', 'doctorId': this.props.selectedDoctor
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/vip-club-details?source=doctor-profile-page&lead_source=doctorpage');
        }
    }, {
        key: 'goldClicked',
        value: function goldClicked(id) {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'NonBookableVipGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'non-bookable-vip-gold-clicked', 'selectedId': id
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/vip-gold-details?is_gold=true&source=docgoldlisting&lead_source=Docprime');
        }
    }, {
        key: 'nonIpdLeads',
        value: function nonIpdLeads(phone_number) {
            var _this5 = this;

            var landing_page = false;
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE) {
                landing_page = true;
            }
            var parsed = queryString.parse(this.props.location.search);
            var doctor_id = this.props.selectedDoctor;
            if (this.props.initialServerData && this.props.initialServerData.doctor_id) {
                doctor_id = this.props.initialServerData.doctor_id;
            }
            var criteriaStr = this.props.DOCTORS[doctor_id].display_name;
            var hospital_id = void 0;
            var display_total_mrp = 0;
            var display_docprime_discount = 0;
            var selected_hospital = this.props.DOCTORS[doctor_id].hospitals.filter(function (x) {
                return x.hospital_id == _this5.state.selectedClinic;
            });
            if (selected_hospital.length) {
                hospital_id = selected_hospital[0].hospital_id;
                display_total_mrp = parseInt(selected_hospital[0].mrp);
                display_docprime_discount = display_total_mrp - parseInt(selected_hospital[0].deal_price);
                if (!selected_hospital[0].insurance.is_user_insured && !selected_hospital[0].vip.is_vip_member && !selected_hospital[0].vip.is_gold_member && selected_hospital[0].vip.is_enable_for_vip) {
                    display_docprime_discount = display_total_mrp - (selected_hospital[0].vip.vip_convenience_amount + selected_hospital[0].vip.vip_gold_price);
                }
            }
            //check if any utm tag exist in url
            var isUtmTagsExist = false;
            if (parsed.utm_source || parsed.utm_medium || parsed.utm_term || parsed.utm_campaign) {
                isUtmTagsExist = true;
            }
            var data = { phone_number: phone_number, lead_source: '' + (!isUtmTagsExist && landing_page ? 'docorganic' : 'docads'), source: parsed, lead_type: 'DOCADS', exitpoint_url: 'http://docprime.com' + this.props.location.pathname + '/booking?doctor_id=' + doctor_id + '&hospital_id=' + hospital_id, doctor_id: doctor_id, hospital_id: hospital_id, doctor_name: null, hospital_name: null, is_organic: landing_page, amount_discount: display_docprime_discount };
            if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
                data.utm_tags = this.props.common_utm_tags.filter(function (x) {
                    return x.type == "common_xtra_tags";
                })[0].utm_tags;
            }
            var visitor_info = _gtm2.default.getVisitorInfo();
            if (visitor_info && visitor_info.visit_id) {
                data.visit_id = visitor_info.visit_id;
                data.visitor_id = visitor_info.visitor_id;
            }
            var gtm_data = { 'Category': 'ConsumerApp', 'Action': 'DocAdsDppSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-hpp-Submit-click', is_organic: landing_page };
            _gtm2.default.sendEvent({ data: gtm_data });
            this.props.saveLeadPhnNumber(phone_number);
            if (this.state.is_lead_enabled && !_storage2.default.isAgent()) {
                this.setState({ is_lead_enabled: false });
                this.props.NonIpdBookingLead(data);
                setTimeout(function () {
                    _this5.setState({ is_lead_enabled: true });
                }, 5000);
            }
            this.setState({ to_be_force: 0 });
        }
    }, {
        key: 'closeIpdLeadPopup',
        value: function closeIpdLeadPopup(from) {
            if (from) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'DocAdsDppCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-hpp-cross-click'
                };
                _gtm2.default.sendEvent({ data: data });
                this.setState({ to_be_force: 0 });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var doctor_id = this.props.selectedDoctor;
            var enabled_for_online_booking = false;
            var show_dpp_organic_popup = false;
            if (this.props.initialServerData && this.props.initialServerData.doctor_id) {
                doctor_id = this.props.initialServerData.doctor_id;
            }
            var final_price = parseInt(this.state.consultation_fee);
            if (this.props.selectedDoctorProcedure[doctor_id] && this.props.selectedDoctorProcedure[doctor_id][this.state.selectedClinic] && this.props.selectedDoctorProcedure[doctor_id][this.state.selectedClinic].categories) {

                final_price += parseInt(this.props.selectedDoctorProcedure[doctor_id][this.state.selectedClinic].price.deal_price) || 0;
            }

            var search_data = null;
            var seo_url = "";
            if (this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].search_data) {
                search_data = this.props.DOCTORS[doctor_id].search_data;
            }
            var doc_organic_price = 0;
            if (this.props.DOCTORS[doctor_id]) {
                enabled_for_online_booking = this.props.DOCTORS[doctor_id].enabled_for_online_booking;
                doc_organic_price = this.props.DOCTORS[doctor_id].lead_compare_amount;
                if (this.props.DOCTORS[doctor_id].hospitals && this.props.DOCTORS[doctor_id].hospitals.length) {
                    this.props.DOCTORS[doctor_id].hospitals.map(function (hospital, i) {
                        if (!hospital.insurance.is_user_insured && !hospital.vip.is_vip_member && !hospital.vip.is_gold_member && hospital.vip.is_enable_for_vip && hospital.discounted_price - (hospital.vip.vip_convenience_amount + hospital.vip.vip_gold_price) >= doc_organic_price) {
                            show_dpp_organic_popup = true;
                        }
                    });
                }
                seo_url = this.props.DOCTORS[doctor_id].url || "";
                if (seo_url) {
                    seo_url = "/" + seo_url;
                }
            }
            var nearbyDoctors = {};
            if (this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].doctors && Object.keys(this.props.DOCTORS[doctor_id].doctors).length) {
                nearbyDoctors = this.props.DOCTORS[doctor_id].doctors;
            }

            var is_insurance_applicable = false;
            if (this.state.selectedClinic && this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].hospitals && this.props.DOCTORS[doctor_id].hospitals.length) {
                this.props.DOCTORS[doctor_id].hospitals.map(function (hospital) {
                    if (hospital.hospital_id == _this6.state.selectedClinic) {
                        is_insurance_applicable = hospital.insurance.is_insurance_covered && hospital.insurance.is_user_insured;
                    }
                });
            }
            //Check if reviews exist for doctor, if not then pick the google reviews for that doctor/hospital
            var google_rating = {};
            if (this.props.DOCTORS[doctor_id] && !this.props.DOCTORS[doctor_id].display_rating_widget) {

                if (this.props.DOCTORS[doctor_id].google_rating && this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic] && this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating && this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating.length && this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating_graph && this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating_graph.avg_rating && this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating_graph.rating_count) {

                    google_rating.rating = this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating;
                    google_rating.rating_graph = this.props.DOCTORS[doctor_id].google_rating[this.state.selectedClinic].google_rating_graph;
                }
            }

            var avgRating = '';
            var ratingCount = '';
            if (this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].rating_graph && this.props.DOCTORS[doctor_id].rating_graph.avg_rating && this.props.DOCTORS[doctor_id].rating_graph.rating_count) {
                avgRating = this.props.DOCTORS[doctor_id].rating_graph.avg_rating;
                ratingCount = this.props.DOCTORS[doctor_id].rating_graph.rating_count;
            }

            var show_google_rating = Object.values(google_rating).length > 0;

            //Get Selected Clinic/Hospital Name
            var selectedClinicName = '';

            if (this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].hospitals && this.props.DOCTORS[doctor_id].hospitals.length && this.state.selectedClinic) {

                var selectedClinicInfo = this.props.DOCTORS[doctor_id].hospitals.filter(function (x) {
                    return x.hospital_id == _this6.state.selectedClinic;
                });

                selectedClinicName = selectedClinicInfo.length ? selectedClinicInfo[0].hospital_name : '';
            }

            var landing_page = false;
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE) {
                landing_page = true;
            }

            var downloadAppButtonData = {};

            if (landing_page && this.props.app_download_list && this.props.app_download_list.length) {

                this.props.app_download_list.map(function (banner) {
                    if (banner.isenabled && (_this6.props.match.url.includes(banner.ends_with) || _this6.props.match.url.includes(banner.starts_with))) {
                        downloadAppButtonData = banner;
                    }
                });
            }

            var parsed = queryString.parse(this.props.location.search);
            //check if any utm tag exist in url
            var isUtmTagsExist = false;
            if (parsed.utm_source || parsed.utm_medium || parsed.utm_term || parsed.utm_campaign) {
                isUtmTagsExist = true;
            }
            var showForcedPopup = !isUtmTagsExist && landing_page && this.state.seoFriendly && doctor_id && this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].is_congot && this.state.showIpdLeadForm && this.props.DOCTORS[doctor_id].potential_ipd && !this.state.is_live;
            showForcedPopup = false;
            var isSeoValid = true;
            if (_config2.default.SEO_FRIENDLY_HOSPITAL_IDS && this.state.selectedClinic && _config2.default.SEO_FRIENDLY_HOSPITAL_IDS.indexOf(parseInt(this.state.selectedClinic)) > -1) {
                isSeoValid = false;
            }
            var showVipPopup = this.state.showVipPopup;
            if (nearbyDoctors && Object.keys(nearbyDoctors).length) {
                showVipPopup = showVipPopup && this.state.closeNonBookable;
            }
            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, { showSearch: true }),
                this.props.DOCTORS[doctor_id] && parsed.showPopup && this.state.showIpdLeadForm && (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE || showForcedPopup ? _react2.default.createElement(_ipdLeadForm2.default, _extends({ submitLeadFormGeneration: this.submitLeadFormGeneration.bind(this) }, this.props, { hospital_name: selectedClinicName, hospital_id: this.state.selectedClinic, doctor_name: this.props.DOCTORS[doctor_id].name ? this.props.DOCTORS[doctor_id].name : '', formSource: 'DoctorBookingPage', saveLeadIdForUpdation: this.saveLeadIdForUpdation.bind(this) })) : '',
                this.props.DOCTORS[doctor_id] && this.state.showSecondPopup && parsed.get_feedback && parsed.get_feedback == '1' ? _react2.default.createElement(_IpdDoctorCityPopup2.default, _extends({}, this.props, { firstLeadId: this.state.firstLeadId, all_doctors: [], all_cities: this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].all_cities ? this.props.DOCTORS[doctor_id].all_cities : [], doctorProfilePage: true, secondIpdFormSubmitted: this.secondIpdFormSubmitted.bind(this), hospital_name: selectedClinicName, hospital_id: this.state.selectedClinic, doctor_name: this.props.DOCTORS[doctor_id].name ? this.props.DOCTORS[doctor_id].name : '', formSource: 'DoctorBookingPage' })) : '',
                nearbyDoctors && Object.keys(nearbyDoctors).length && !this.state.closeNonBookable ? _react2.default.createElement(_nonBookableDoctor2.default, _extends({}, this.props, { closeNonBookableDocPopup: this.closeNonBookableDocPopup.bind(this), nearbyDoctors: nearbyDoctors, navigateToDoctor: this.navigateToDoctor.bind(this), details: this.props.DOCTORS[doctor_id] })) : '',
                _react2.default.createElement(
                    'section',
                    { className: 'container parent-section book-appointment-section breadcrumb-mrgn' },
                    this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].breadcrumb && this.props.DOCTORS[doctor_id].breadcrumb.length ? _react2.default.createElement(
                        'section',
                        { className: 'col-12 mrng-top-12 d-none d-md-block' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'mrb-10 breadcrumb-list breadcrumb-list-ul', style: { 'wordBreak': 'breakWord' } },
                            this.props.DOCTORS[doctor_id] && this.props.DOCTORS[doctor_id].breadcrumb && this.props.DOCTORS[doctor_id].breadcrumb.length ? this.props.DOCTORS[doctor_id].breadcrumb.map(function (data, key) {
                                return _react2.default.createElement(
                                    'li',
                                    { className: 'breadcrumb-list-item', key: key },
                                    key == _this6.props.DOCTORS[doctor_id].breadcrumb.length - 1 ? _react2.default.createElement(
                                        'span',
                                        null,
                                        data.title
                                    ) : _react2.default.createElement(
                                        'a',
                                        { href: data.url, title: data.link_title || data.title, onClick: function onClick(e) {
                                                e.preventDefault();
                                                _this6.props.history.push(key == 0 || key == _this6.props.DOCTORS[doctor_id].breadcrumb.length - 1 ? data.url : '/' + data.url);
                                            } },
                                        key == 0 || key == _this6.props.DOCTORS[doctor_id].breadcrumb.length - 1 ? _react2.default.createElement(
                                            'span',
                                            { className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
                                            data.title
                                        ) : _react2.default.createElement(
                                            'h2',
                                            { className: 'fw-500 breadcrumb-title breadcrumb-colored-title d-inline-blck' },
                                            data.title
                                        )
                                    ),
                                    key != _this6.props.DOCTORS[doctor_id].breadcrumb.length - 1 ? _react2.default.createElement(
                                        'span',
                                        { className: 'breadcrumb-arrow' },
                                        '>'
                                    ) : ''
                                );
                            }) : ''
                        )
                    ) : '',
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column' },
                            this.props.DOCTORS[doctor_id] ? _react2.default.createElement(
                                'section',
                                { className: 'dr-profile-screen', style: { paddingBottom: 0 } },
                                !parsed.showPopup && downloadAppButtonData && Object.values(downloadAppButtonData).length ? _react2.default.createElement(
                                    'a',
                                    { className: 'downloadBtn', href: 'javascript:void(0);', onClick: this.downloadButton.bind(this, downloadAppButtonData) },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'dwnlAppBtn' },
                                        !this.props.device_info ? '' : this.props.device_info.toLowerCase().includes('iphone') || this.props.device_info.toLowerCase().includes('ipad') ? _react2.default.createElement('img', { style: { width: '13px', marginRight: '5px', marginTop: '-1px' }, src: "/assets" + "/img/appl1.svg" }) : _react2.default.createElement('img', { style: { width: '13px', marginRight: '5px' }, src: "/assets" + "/img/andr1.svg" }),
                                        'Download App'
                                    )
                                ) : '',
                                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                                        title: this.getMetaTagsData(this.props.DOCTORS[doctor_id].seo).title,
                                        description: this.getMetaTagsData(this.props.DOCTORS[doctor_id].seo).description,
                                        canonicalUrl: '' + _config2.default.API_BASE_URL + (seo_url || this.props.match.url),
                                        schema: this.getMetaTagsData(this.props.DOCTORS[doctor_id].seo).schema
                                    }, noIndex: !this.state.seoFriendly || !isSeoValid }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'container-fluid' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'row' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            this.state.is_live && landing_page && this.state.seoFriendly ? _react2.default.createElement(
                                                'button',
                                                { className: 'doc-top-book-btn', onClick: this.navigateToClinic.bind(this, doctor_id, this.state.selectedClinic, true) },
                                                'Book Now'
                                            ) : '',
                                            this.state.displayHospitalRatingBlock ? _react2.default.createElement(_HospitalPopUp2.default, _extends({}, this.props, { doctor_details: this.props.DOCTORS[doctor_id], popUpState: this.hospitalPopUpState.bind(this) })) : "",
                                            this.props.DOCTORS[doctor_id].unrated_appointment ? _react2.default.createElement(_RatingProfileCard2.default, _extends({}, this.props, { details: this.props.DOCTORS[doctor_id].unrated_appointment })) : "",
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'widget mrt-10 ct-profile skin-white border-bottom-radious gold-relative' },
                                                this.props.DOCTORS[doctor_id].is_gold ? _react2.default.createElement('img', { className: 'gold-card-img', src: "/assets" + "/img/gold.svg" }) : '',
                                                _react2.default.createElement(_doctorProfileCard2.default, _extends({
                                                    details: this.props.DOCTORS[doctor_id],
                                                    getDoctorNumber: this.props.getDoctorNumber,
                                                    recommendDocs: nearbyDoctors.result && nearbyDoctors.result.length,
                                                    viewAllDocClick: this.viewAllDocClick.bind(this),
                                                    nearbyDoctors: nearbyDoctors ? nearbyDoctors : '',
                                                    isSeoFriendly: this.state.seoFriendly,
                                                    isOrganic: this.state.isOrganic
                                                }, this.props)),
                                                nearbyDoctors && Object.keys(nearbyDoctors).length ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'widge-content pd-0' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-panel' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'panel-content pd-0 border-bottom-panel' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'docScrollSliderContainer' },
                                                                nearbyDoctors.result && nearbyDoctors.result.length ? nearbyDoctors.result.map(function (doctor, id) {
                                                                    return _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'docSlideCard', key: id, style: { cursor: 'auto' } },
                                                                        _react2.default.createElement(
                                                                            'div',
                                                                            { className: 'docSlideHead' },
                                                                            _react2.default.createElement(
                                                                                _initialsPicture2.default,
                                                                                { name: doctor.name, has_image: !!doctor.thumbnail, className: 'initialsPicture-ds slideDocMainImg', style: { width: 60, height: 60, fontSize: '2rem' } },
                                                                                _react2.default.createElement('img', { className: 'fltr-usr-image img-round slideDocMainImg', src: doctor.thumbnail, alt: doctor.display_name, title: doctor.display_name })
                                                                            )
                                                                        ),
                                                                        _react2.default.createElement(
                                                                            'div',
                                                                            { className: 'slideDocContent' },
                                                                            doctor.url ? _react2.default.createElement(
                                                                                'a',
                                                                                { href: '/' + doctor.url, onClick: function onClick(e) {
                                                                                        return _this6.navigateToDoctor(doctor, e);
                                                                                    } },
                                                                                _react2.default.createElement(
                                                                                    'p',
                                                                                    { className: 'slideDocName' },
                                                                                    doctor.display_name
                                                                                )
                                                                            ) : _react2.default.createElement(
                                                                                'a',
                                                                                { href: 'javascript:;', style: { cursor: 'auto' } },
                                                                                _react2.default.createElement(
                                                                                    'p',
                                                                                    { className: 'slideDocName' },
                                                                                    doctor.display_name
                                                                                )
                                                                            ),
                                                                            _react2.default.createElement(
                                                                                'p',
                                                                                { className: 'slideDocExp' },
                                                                                doctor.experience_years,
                                                                                ' Years of Experience'
                                                                            ),
                                                                            doctor.qualifications && doctor.qualifications.length ? _react2.default.createElement(
                                                                                'p',
                                                                                { className: 'slideDocdeg' },
                                                                                doctor.qualifications.map(function (qualification, index) {
                                                                                    return _react2.default.createElement(
                                                                                        'span',
                                                                                        { key: index },
                                                                                        qualification.qualification
                                                                                    );
                                                                                })
                                                                            ) : '',
                                                                            doctor.hospitals && doctor.hospitals.length ? _react2.default.createElement(
                                                                                'p',
                                                                                { className: 'slideDocExp', style: { marginTop: 5 } },
                                                                                doctor.hospitals[0].hospital_name
                                                                            ) : '',
                                                                            (doctor.hospitals[0].is_gold_member || doctor.hospitals[0].is_vip_member) && doctor.hospitals[0].cover_under_vip ? _react2.default.createElement(
                                                                                'div',
                                                                                { className: 'slideDocPrice mb-0' },
                                                                                doctor.hospitals[0].is_gold_member ? _react2.default.createElement(
                                                                                    'span',
                                                                                    { className: 'slideNamePrc' },
                                                                                    _react2.default.createElement('img', { className: 'non-doc-vip-ico img-fluid', src: "/assets" + '/img/gold-sm.png' })
                                                                                ) : _react2.default.createElement(
                                                                                    'span',
                                                                                    { className: 'slideNamePrc' },
                                                                                    _react2.default.createElement('img', { className: 'vip-main-ico img-fluid', src: "/assets" + '/img/viplog.png' })
                                                                                ),
                                                                                _react2.default.createElement(
                                                                                    'span',
                                                                                    { className: 'slideNamePrc' },
                                                                                    '\u20B9 ',
                                                                                    doctor.hospitals[0].vip_convenience_amount + doctor.hospitals[0].vip_gold_price
                                                                                ),
                                                                                _react2.default.createElement(
                                                                                    'span',
                                                                                    { className: 'slideCutPrc' },
                                                                                    '\u20B9 ',
                                                                                    doctor.mrp
                                                                                )
                                                                            ) : doctor.discounted_price && doctor.mrp ? _react2.default.createElement(
                                                                                'div',
                                                                                { className: 'slideDocPrice mb-0' },
                                                                                _react2.default.createElement(
                                                                                    'span',
                                                                                    { className: 'slideNamePrc' },
                                                                                    '\u20B9 ',
                                                                                    doctor.discounted_price
                                                                                ),
                                                                                _react2.default.createElement(
                                                                                    'span',
                                                                                    { className: 'slideCutPrc' },
                                                                                    '\u20B9 ',
                                                                                    doctor.mrp
                                                                                )
                                                                            ) : '',
                                                                            doctor.hospitals[0].enabled_for_online_booking && !doctor.hospitals[0].is_gold_member && !doctor.hospitals[0].is_vip_member && doctor.discounted_price > doctor.hospitals[0].vip_convenience_amount + doctor.hospitals[0].vip_gold_price && doctor.hospitals[0].hosp_is_gold ? _react2.default.createElement(
                                                                                'div',
                                                                                { className: 'pkg-prc-ct home-screengoldprice mb-2', onClick: _this6.goldClicked.bind(_this6, doctor.id) },
                                                                                _react2.default.createElement('img', { className: 'gld-cd-icon', src: "/assets" + '/img/gold-sm.png' }),
                                                                                _react2.default.createElement(
                                                                                    'p',
                                                                                    { className: 'gld-p-rc' },
                                                                                    'Price'
                                                                                ),
                                                                                ' ',
                                                                                _react2.default.createElement(
                                                                                    'span',
                                                                                    { className: 'gld-rate-lf' },
                                                                                    '\u20B9 ',
                                                                                    doctor.hospitals[0].vip_convenience_amount + doctor.hospitals[0].vip_gold_price
                                                                                ),
                                                                                _react2.default.createElement('img', { style: { transform: 'rotate(-90deg)', width: '10px', margin: '0px 10px 0px 0px' }, src: "/assets" + '/img/customer-icons/dropdown-arrow.svg' })
                                                                            ) : '',
                                                                            _react2.default.createElement(
                                                                                'div',
                                                                                { className: 'slidBookBtn' },
                                                                                _react2.default.createElement(
                                                                                    'button',
                                                                                    { style: { cursor: 'pointer' }, onClick: function onClick(e) {
                                                                                            return _this6.navigateToDoctor(doctor, e);
                                                                                        } },
                                                                                    'Book Now'
                                                                                )
                                                                            )
                                                                        )
                                                                    );
                                                                }) : ''
                                                            )
                                                        )
                                                    )
                                                ) : '',
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widge-content pd-0' },
                                                    this.props.DOCTORS[doctor_id].about_web ? _react2.default.createElement(_index2.default, {
                                                        details: this.props.DOCTORS[doctor_id]
                                                    }) : ""
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'widge-content pd-0' },
                                                    this.props.DOCTORS[doctor_id].hospitals && this.props.DOCTORS[doctor_id].hospitals.length ? _react2.default.createElement(_index6.default, _extends({
                                                        details: this.props.DOCTORS[doctor_id]
                                                    }, this.props, { doctorId: doctor_id,
                                                        selectClinic: this.selectClinic.bind(this),
                                                        selectedClinic: this.state.selectedClinic
                                                    })) : "",
                                                    _react2.default.createElement(_index4.default, {
                                                        details: this.props.DOCTORS[doctor_id]
                                                    }),
                                                    _storage2.default.checkAuth() ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-panel' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'panel-content ratecardBrdr' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'rateUrDoc' },
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    'Rate your Doctor here'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'button',
                                                                    { onClick: this.display_hospital_rating_block },
                                                                    'Rate Now'
                                                                )
                                                            )
                                                        )
                                                    ) : "",
                                                    avgRating >= 4 || ratingCount >= 5 ? _react2.default.createElement(_ratingReviewView2.default, _extends({ id: doctor_id, content_type: 2 }, this.props)) : show_google_rating ? _react2.default.createElement(
                                                        'div',
                                                        { className: 'widget-panel' },
                                                        _react2.default.createElement(
                                                            'h4',
                                                            { className: 'panel-title mb-rmv' },
                                                            'Patient Feedback ',
                                                            _react2.default.createElement('a', { className: 'rateViewAll' })
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'panel-content pd-0 border-bottom-panel d-flex align-items-start' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'googleReviewcard', style: { flex: 1 } },
                                                                _react2.default.createElement('img', { src: "/assets" + "/img/powered_by_google_on_white.png" }),
                                                                selectedClinicName ? _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    'Ratings for',
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        null,
                                                                        selectedClinicName
                                                                    )
                                                                ) : ''
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'feed-back-container', style: { flex: 1, marginBottom: 0 } },
                                                                _react2.default.createElement(
                                                                    'div',
                                                                    { className: 'row' },
                                                                    _react2.default.createElement(
                                                                        'div',
                                                                        { className: 'col-12' },
                                                                        google_rating.rating_graph && google_rating.rating_graph.avg_rating ? _react2.default.createElement(_RatingStars2.default, { average_rating: google_rating.rating_graph.avg_rating, width: '12px', height: '12px', justifyCenter: true }) : '',
                                                                        _react2.default.createElement(
                                                                            'div',
                                                                            { className: 'feedback-rating-text' },
                                                                            _react2.default.createElement(
                                                                                'p',
                                                                                { className: 'feedback-rate' },
                                                                                google_rating.rating_graph.avg_rating
                                                                            ),
                                                                            _react2.default.createElement(
                                                                                'p',
                                                                                { className: 'feedback-rate-status' },
                                                                                google_rating.rating_graph.rating_count,
                                                                                ' ratings'
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ) : ""
                                                )
                                            )
                                        )
                                    )
                                ),
                                showVipPopup && _react2.default.createElement(_vipProfilePopup2.default, { toggle: function toggle() {
                                        return _this6.toggleVip();
                                    }, navigateToVip: function navigateToVip() {
                                        return _this6.navigateToVip();
                                    } }),
                                this.state.is_live ? _react2.default.createElement(
                                    'div',
                                    { className: 'dpp-btn-div fixed horizontal bottom sticky-btn' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'dpp-btn-book dpp-btn-book-custom', onClick: this.navigateToClinic.bind(this, doctor_id, this.state.selectedClinic, false) },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            _react2.default.createElement(
                                                'span',
                                                { style: { display: 'inline-block' } },
                                                'Book Now'
                                            )
                                        ),
                                        is_insurance_applicable || true ? '' : _react2.default.createElement(
                                            'p',
                                            { className: 'cp-auto', style: { marginBottom: '8px' } },
                                            '*Coupon auto applied on checkout'
                                        )
                                    )
                                ) : _react2.default.createElement(
                                    'div',
                                    { className: 'dpp-btn-div fixed horizontal bottom sticky-btn' },
                                    this.state.clinicPhoneNo[this.state.selectedClinic] ? _react2.default.createElement(
                                        'div',
                                        { className: 'dpp-btn-div fixed horizontal bottom sticky-btn' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: 'tel:' + this.state.clinicPhoneNo[this.state.selectedClinic], className: 'dpp-btn-book d-lg-none d-flex' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                _react2.default.createElement('img', { style: { width: '20px', marginRight: '4px', position: 'relative', left: '-3px', bottom: '-2px' }, src: "/assets" + "/img/call-ico.svg" }),
                                                this.state.clinicPhoneNo[this.state.selectedClinic]
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'dpp-btn-book d-lg-flex d-none' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                this.state.clinicPhoneNo[this.state.selectedClinic]
                                            )
                                        )
                                    ) : this.state.show_contact ? _react2.default.createElement(
                                        'div',
                                        { className: 'dpp-btn-book', onClick: this.showNumber.bind(this, doctor_id) },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'View Contact'
                                        )
                                    ) : '',
                                    this.state.openContactPopup ? _react2.default.createElement(_ContactPopup2.default, { toggle: this.toggle.bind(this, 'openContactPopup'), mobileNo: this.props.primaryMobile, getDoctor: this.getDoctorNo.bind(this) }) : ''
                                )
                            ) : _react2.default.createElement(_Loader2.default, null)
                        ),
                        _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', type: 'opd', noChatButton: !this.state.searchDataHidden, showDesktopIpd: true, msgTemplate: 'gold_general_template' })
                    )
                ),
                _react2.default.createElement(_footer2.default, { footerData: this.state.footerData })
            );
        }
    }]);

    return DoctorProfileView;
}(_react2.default.Component);

exports.default = DoctorProfileView;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/aboutDoctor/AboutDoctor.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/aboutDoctor/AboutDoctor.js ***!
  \************************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var doctorData = false;

var AboutDoctor = function (_React$Component) {
    _inherits(AboutDoctor, _React$Component);

    function AboutDoctor(props) {
        _classCallCheck(this, AboutDoctor);

        var _this = _possibleConstructorReturn(this, (AboutDoctor.__proto__ || Object.getPrototypeOf(AboutDoctor)).call(this, props));

        _this.state = {
            // lessAbout: "",
            // requiredReadMore: false,
            readMore: doctorData
        };
        return _this;
    }

    _createClass(AboutDoctor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ readMore: true });
            // this.renderAbout(this.props)
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {}
        // this.renderAbout(props)


        // renderAbout(props) {
        //     let { about } = props.details
        //     if (about) {
        //         if (about.length > 100) {
        //             this.setState({
        //                 readMore: true,
        //                 requiredReadMore: true
        //             })
        //         }
        //         this.setState({
        //             lessAbout: about.slice(0, 100) + "..."
        //         })
        //     }
        // }

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$details = this.props.details,
                about = _props$details.about,
                name = _props$details.name;

            var button = "";

            if (this.state.requiredReadMore) {
                // button = <a className="fw-700 text-primary" style={{ cursor: 'pointer' }} onClick={() => {
                //     this.setState({ readMore: false, lessAbout: about })
                // }}> READ MORE &#9660;</a>

                // if (!this.state.readMore) {
                //     button = <a className="fw-700 text-primary" style={{ cursor: 'pointer' }} onClick={() => {
                //         this.setState({ readMore: true, lessAbout: about.slice(0, 100) + "..." })
                //     }}> SHOW LESS &#9650;</a>
                // }
            }
            var aboutTxt = void 0;
            if (this.props.details.about_web) {
                if (this.props.details.about_web.length > 150) {
                    if (this.state.readMore) {
                        aboutTxt = this.props.details.about_web.slice(0, 150) + "...";
                        button = _react2.default.createElement(
                            'a',
                            { className: 'fw-700 text-primary', style: { cursor: 'pointer' }, onClick: function onClick() {
                                    _this2.setState({ readMore: !_this2.state.readMore });
                                } },
                            ' Read More ',
                            _react2.default.createElement(
                                'span',
                                { style: { fontSize: 11, display: 'inline-block', verticalAlign: 'middle' } },
                                '\u25BC'
                            )
                        );
                    } else {
                        aboutTxt = this.props.details.about_web;
                        button = _react2.default.createElement(
                            'a',
                            { className: 'fw-700 text-primary', style: { cursor: 'pointer' }, onClick: function onClick() {
                                    _this2.setState({ readMore: !_this2.state.readMore });
                                } },
                            ' Show Less ',
                            _react2.default.createElement(
                                'span',
                                { style: { fontSize: 11, display: 'inline-block', verticalAlign: 'middle' } },
                                '\u25B2'
                            )
                        );
                    }
                } else {
                    aboutTxt = this.props.details.about_web;
                }
            }
            return _react2.default.createElement(
                'div',
                { className: 'widget-panel' },
                _react2.default.createElement(
                    'h2',
                    { className: 'panel-title mb-rmv' },
                    'About Dr. ',
                    name
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'panel-content' },
                    _react2.default.createElement('div', { className: 'fw-10000 text-md abt-doc-inlinetext', dangerouslySetInnerHTML: { __html: aboutTxt } }),
                    button
                )
            );
        }
    }]);

    return AboutDoctor;
}(_react2.default.Component);

exports.default = AboutDoctor;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/aboutDoctor/index.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/aboutDoctor/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AboutDoctor = __webpack_require__(/*! ./AboutDoctor.js */ "./dev/js/components/opd/doctorProfile/aboutDoctor/AboutDoctor.js");

var _AboutDoctor2 = _interopRequireDefault(_AboutDoctor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AboutDoctor2.default;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/index.js":
/*!******************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DoctorProfileView = __webpack_require__(/*! ./DoctorProfileView.js */ "./dev/js/components/opd/doctorProfile/DoctorProfileView.js");

var _DoctorProfileView2 = _interopRequireDefault(_DoctorProfileView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DoctorProfileView2.default;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/nonBookableDoctor.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/nonBookableDoctor.js ***!
  \******************************************************************/
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

var _RatingStars = __webpack_require__(/*! ../../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

var _doctorResultCard = __webpack_require__(/*! ../commons/doctorResultCard */ "./dev/js/components/opd/commons/doctorResultCard/index.js");

var _doctorResultCard2 = _interopRequireDefault(_doctorResultCard);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonBookableDoctor = function (_React$Component) {
	_inherits(NonBookableDoctor, _React$Component);

	function NonBookableDoctor(props) {
		_classCallCheck(this, NonBookableDoctor);

		var _this = _possibleConstructorReturn(this, (NonBookableDoctor.__proto__ || Object.getPrototypeOf(NonBookableDoctor)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(NonBookableDoctor, [{
		key: 'ViewAll',
		value: function ViewAll() {
			var _this2 = this;

			var speciality = {};
			if (this.props.details.doctors && this.props.details.doctors.specializations) {

				speciality.id = this.props.details.doctors.specializations[0].id;
				speciality.name = this.props.details.doctors.specializations[0].name;
				speciality.type = 'speciality';
				var data = {
					'Category': 'ConsumerApp', 'Action': 'NonBookableDoctorViewAllClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Non-Bookable-Doctor-ViewAll-clicked', 'selected': speciality.name || '', 'selectedId': speciality.id || ''
				};
				_gtm2.default.sendEvent({ data: data });
				this.props.toggleOPDCriteria('speciality', speciality, true);
				setTimeout(function () {
					_this2.props.history.push('/opd/searchresults');
				}, 100);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'search-el-popup-overlay  cancel-overlay-zindex' },
				_react2.default.createElement(
					'div',
					{ className: 'search-el-popup non-book-pop' },
					_react2.default.createElement(
						'div',
						{ className: 'widget p-relative' },
						_react2.default.createElement('img', { className: 'non-book-cls-btn', src: "/assets" + "/img/icons/close.png", onClick: this.props.closeNonBookableDocPopup.bind(this) }),
						_react2.default.createElement(
							'div',
							{ className: 'non-bok-hdng-container' },
							_react2.default.createElement(
								'p',
								{ className: 'non-bok-heading' },
								this.props.details.display_name,
								' is not bookable'
							),
							_react2.default.createElement(
								'p',
								{ className: 'non-bok-subhdng' },
								'See bookable doctors with great discounts below'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'non-bok-cards-container' },
							this.props.nearbyDoctors.result && this.props.nearbyDoctors.result.length ? this.props.nearbyDoctors.result.map(function (doctor, id) {
								if (id <= 1) {
									return _react2.default.createElement(_doctorResultCard2.default, _extends({}, _this3.props, { details: doctor, key: id, rank: id, isNonBookablePopup: true }));
								}
							}) : ''
						),
						this.props.details.doctors && this.props.details.doctors.specializations ? _react2.default.createElement(
							'p',
							{ className: 'viw-all-non-bok', onClick: this.ViewAll.bind(this) },
							'View All Top ',
							this.props.details.doctors.specializations[0].name,
							' Near You'
						) : ''
					)
				)
			);
		}
	}]);

	return NonBookableDoctor;
}(_react2.default.Component);

exports.default = NonBookableDoctor;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/professionalGraph/ExpansionPanel.js":
/*!*********************************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/professionalGraph/ExpansionPanel.js ***!
  \*********************************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExpansionPanel = function (_React$Component) {
	_inherits(ExpansionPanel, _React$Component);

	function ExpansionPanel(props) {
		_classCallCheck(this, ExpansionPanel);

		var _this = _possibleConstructorReturn(this, (ExpansionPanel.__proto__ || Object.getPrototypeOf(ExpansionPanel)).call(this, props));

		_this.state = {
			open: true
		};
		return _this;
	}

	_createClass(ExpansionPanel, [{
		key: 'toggleOpen',
		value: function toggleOpen() {
			this.setState({ open: !this.state.open });
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    heading = _props.heading,
			    contentList = _props.contentList,
			    image = _props.image;


			var listId = heading.toLowerCase();

			return _react2.default.createElement(
				'li',
				{ className: 'expansion-panel-list-item', id: listId },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'title', onClick: this.toggleOpen.bind(this), style: { marginBottom: 0 } },
						_react2.default.createElement('img', { src: image, style: { verticalAlign: '-2px', marginRight: 8, display: 'inline-block', width: '22px' } }),
						_react2.default.createElement(
							'h3',
							{ className: 'fw-500 text-md mrb-0', style: { display: 'inline-block' } },
							heading
						),
						this.state.open ? _react2.default.createElement('img', { className: 'titlearrow-up', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" }) : _react2.default.createElement('img', { className: 'titlearrow', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
					),
					this.state.open ? _react2.default.createElement(
						'div',
						{ className: 'more-content' },
						this.props.qulification ? contentList.map(function (cont, i) {
							return _react2.default.createElement(
								'div',
								{ className: 'form-group expansion-label-div', key: i, style: { marginTop: 10 } },
								_react2.default.createElement(
									'div',
									null,
									_react2.default.createElement(
										'p',
										{ className: 'fw-700 text-md text-light', style: { display: 'inline-block', verticalAlign: 'middle' } },
										cont.qualification,
										cont.specialization ? _react2.default.createElement(
											'span',
											{ className: 'fw-700 text-md text-light', style: { verticalAlign: 'middle' } },
											'\xA0\xA0|\xA0\xA0'
										) : '',
										cont.specialization,
										cont.college ? _react2.default.createElement(
											'span',
											{ className: 'fw-700 text-md text-light', style: { verticalAlign: 'middle' } },
											'\xA0\xA0|\xA0\xA0'
										) : '',
										cont.passing_year ? _react2.default.createElement(
											'span',
											null,
											cont.college + ' - ' + cont.passing_year
										) : ''
									)
								)
							);
						}) : contentList.map(function (cont, i) {
							return _react2.default.createElement(
								'div',
								{ className: 'expansion-label-div', key: i },
								cont.heading ? _react2.default.createElement(
									'label',
									{ className: 'fw-700 text-sm text-primary' },
									cont.heading
								) : "",
								_react2.default.createElement(
									'p',
									{ className: 'fw-700 text-md text-light', style: { lineHeight: '20px' } },
									cont.content
								)
							);
						})
					) : ""
				)
			);
		}
	}]);

	return ExpansionPanel;
}(_react2.default.Component);

exports.default = ExpansionPanel;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/professionalGraph/ProfessionalGraph.js":
/*!************************************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/professionalGraph/ProfessionalGraph.js ***!
  \************************************************************************************/
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

var _ExpansionPanel = __webpack_require__(/*! ./ExpansionPanel */ "./dev/js/components/opd/doctorProfile/professionalGraph/ExpansionPanel.js");

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfessionalGraph = function (_React$Component) {
    _inherits(ProfessionalGraph, _React$Component);

    function ProfessionalGraph(props) {
        _classCallCheck(this, ProfessionalGraph);

        return _possibleConstructorReturn(this, (ProfessionalGraph.__proto__ || Object.getPrototypeOf(ProfessionalGraph)).call(this, props));
    }

    _createClass(ProfessionalGraph, [{
        key: 'render',
        value: function render() {
            var _props$details = this.props.details,
                name = _props$details.name,
                profile_img = _props$details.profile_img,
                qualifications = _props$details.qualifications,
                phone_number = _props$details.phone_number,
                email = _props$details.email,
                practicing_since = _props$details.practicing_since,
                gender = _props$details.gender,
                languages = _props$details.languages,
                license = _props$details.license,
                mobiles = _props$details.mobiles,
                awards = _props$details.awards,
                associations = _props$details.associations,
                medical_services = _props$details.medical_services,
                experiences = _props$details.experiences;


            qualifications = qualifications || [];

            return _react2.default.createElement(
                'div',
                { className: 'widget-panel' },
                _react2.default.createElement(
                    'h2',
                    { className: 'panel-title', style: { marginBottom: 0 } },
                    'Professional Graph of Dr. ',
                    name
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'panel-content expansion-content pd-0' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'list drop-down-list' },
                        qualifications ? _react2.default.createElement(_ExpansionPanel2.default, {
                            heading: "Qualification",
                            contentList: qualifications,
                            qulification: true,
                            image: "/assets/img/customer-icons/Education-01.svg"
                        }) : "",
                        languages && languages.length ? _react2.default.createElement(_ExpansionPanel2.default, {
                            heading: "Language",
                            image: "/assets/img/customer-icons/Language-01.svg",
                            contentList: [{
                                heading: "", content: languages.reduce(function (final, curr, i) {
                                    final += '' + curr.language;
                                    if (i < languages.length - 1) final += " | ";
                                    return final;
                                }, "")
                            }]
                        }) : "",
                        awards && awards.length ? _react2.default.createElement(_ExpansionPanel2.default, {
                            heading: "Awards",
                            image: "/assets/img/customer-icons/Award-01.svg",
                            contentList: awards.map(function (award) {
                                award.year = award.year || "";
                                if (award.year) {
                                    return { heading: "", content: award.name + ', ' + award.year };
                                } else {
                                    return { heading: "", content: '' + award.name };
                                }
                            })
                        }) : "",
                        associations && associations.length ? _react2.default.createElement(_ExpansionPanel2.default, {
                            heading: "Associate Membership",
                            image: "/assets/img/customer-icons/AssociateMembership.svg",
                            contentList: associations.map(function (association) {
                                return { heading: "", content: '' + association.name };
                            })
                        }) : "",
                        experiences && experiences.length ? _react2.default.createElement(_ExpansionPanel2.default, {
                            heading: "Experience",
                            image: "/assets/img/customer-icons/Experienced-01.svg",
                            contentList: experiences.map(function (experience) {
                                return { heading: "", content: experience.hospital + ', ' + experience.start_year + ' - ' + experience.end_year };
                            })
                        }) : "",
                        medical_services && medical_services.length ? _react2.default.createElement(_ExpansionPanel2.default, {
                            heading: "Subscribed Services",
                            image: "/assets/img/customer-icons/SubscribedServices-01.svg",
                            contentList: medical_services.map(function (service) {
                                return { heading: "", content: '' + service.name };
                            })
                        }) : ""
                    )
                )
            );
        }
    }]);

    return ProfessionalGraph;
}(_react2.default.Component);

exports.default = ProfessionalGraph;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/professionalGraph/index.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/professionalGraph/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProfessionalGraph = __webpack_require__(/*! ./ProfessionalGraph.js */ "./dev/js/components/opd/doctorProfile/professionalGraph/ProfessionalGraph.js");

var _ProfessionalGraph2 = _interopRequireDefault(_ProfessionalGraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ProfessionalGraph2.default;

/***/ }),

/***/ "./dev/js/components/opd/doctorProfile/vipProfilePopup.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/opd/doctorProfile/vipProfilePopup.js ***!
  \****************************************************************/
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
	var props = _ref.props,
	    toggle = _ref.toggle,
	    navigateToVip = _ref.navigateToVip;

	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement("div", { className: "cancel-overlay vip-cncl-overlay", onClick: function onClick() {
				return toggle();
			} }),
		_react2.default.createElement(
			"div",
			{ className: "widget cancel-appointment-div cancel-popup vip-pop-mbl" },
			_react2.default.createElement("img", { src: "/assets" + "/img/icons/close.png", style: { cursor: 'pointer', zIndex: '9' }, className: "close-modal", onClick: function onClick() {
					return toggle();
				} }),
			_react2.default.createElement(
				"div",
				{ className: "widget-header text-center action-screen-header", style: { position: 'relative', paddingTop: '' } },
				_react2.default.createElement(
					"p",
					{ className: "vp-pop-grn" },
					"Save 70% on Appointments"
				),
				_react2.default.createElement(
					"p",
					{ className: "vp-pop-sub-txt" },
					" Become Docprime ",
					_react2.default.createElement("img", { src: "/assets" + "/img/viplog.png" }),
					" member today "
				),
				_react2.default.createElement(
					"button",
					{ className: "vp-pop-ch-btn", onClick: function onClick() {
							return navigateToVip();
						} },
					"Know more"
				)
			)
		)
	);
};

/***/ }),

/***/ "./dev/js/containers/opd/DoctorProfile.js":
/*!************************************************!*\
  !*** ./dev/js/containers/opd/DoctorProfile.js ***!
  \************************************************/
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

var _index2 = __webpack_require__(/*! ../../components/opd/doctorProfile/index.js */ "./dev/js/components/opd/doctorProfile/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var DoctorProfile = function (_React$Component) {
    _inherits(DoctorProfile, _React$Component);

    function DoctorProfile(props) {
        _classCallCheck(this, DoctorProfile);

        var _this = _possibleConstructorReturn(this, (DoctorProfile.__proto__ || Object.getPrototypeOf(DoctorProfile)).call(this, props));

        var d_id = _this.props.match.params.id || _this.get_doctor_id_by_url(_this.props.match.url);
        _this.state = {
            selectedDoctor: d_id,
            is_procedure: false,
            hospital_id: ''
        };
        return _this;
    }

    _createClass(DoctorProfile, [{
        key: 'get_doctor_id_by_url',
        value: function get_doctor_id_by_url(url) {
            for (var d_id in this.props.DOCTORS) {
                if (this.props.DOCTORS[d_id].url && url.includes(this.props.DOCTORS[d_id].url)) {
                    return d_id;
                }
            }
            return null;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var parsed = queryString.parse(this.props.location.search);
            var hospital_id = '';
            var is_procedure = false;
            var category_ids = [];
            var procedure_ids = [];

            if (parsed) {
                hospital_id = parsed.hospital_id || '';
                is_procedure = parsed.is_procedure || false;
                category_ids = parsed.category_ids || [];
                procedure_ids = parsed.procedure_ids || [];
            }

            if (this.props.match.params.id) {
                //if (!this.state.selectedDoctor || !this.props.DOCTORS[this.state.selectedDoctor]) {
                this.props.getDoctorById(this.props.match.params.id, hospital_id, procedure_ids, category_ids);
                //}
                this.setState({ hospital_id: hospital_id, is_procedure: is_procedure });
            } else {
                var url = this.props.match.url;
                if (url) {
                    url = url.split("/")[1];
                }
                //if (!this.state.selectedDoctor || !this.props.DOCTORS[this.state.selectedDoctor]) {
                this.props.getDoctorByUrl(url, hospital_id, procedure_ids, category_ids, function (doctor_id) {
                    if (doctor_id) {
                        _this2.setState({ selectedDoctor: doctor_id });
                    }
                });
                //}
                this.setState({ hospital_id: hospital_id, is_procedure: is_procedure });
            }

            //always clear selected time at doctor profile
            var slot = { time: {} };
            this.props.selectOpdTimeSLot(slot, false);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.fetchNewResults && props.fetchNewResults != this.props.fetchNewResults) {
                if (window) {
                    window.scrollTo(0, 0);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_index3.default, _extends({}, this.props, { selectedDoctor: this.state.selectedDoctor }, this.state));
        }
    }], [{
        key: 'loadData',
        value: function loadData(store, match) {
            var queryData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            if (match.params.id) {
                return store.dispatch((0, _index.getDoctorById)(match.params.id, queryData.hospital_id || '', queryData.procedure_ids || [], queryData.category_ids || []));
            } else {
                var url = match.url;
                if (url) {
                    url = url.split("/")[1];
                }
                return new Promise(function (resolve, reject) {
                    store.dispatch((0, _index.getDoctorByUrl)(url, queryData.hospital_id || '', queryData.procedure_ids || [], queryData.category_ids || [], function (doctor_id, url) {
                        if (doctor_id) {
                            if (match.url.includes('-dpp')) {
                                (0, _index.getFooterData)(match.url.split("/")[1])().then(function (footerData) {
                                    footerData = footerData || null;
                                    resolve({ doctor_id: doctor_id, footerData: footerData });
                                }).catch(function (e) {
                                    resolve({ doctor_id: doctor_id });
                                });
                            } else {
                                resolve({ doctor_id: doctor_id });
                            }
                        } else {
                            reject({
                                url: url
                            });
                        }
                    }));
                });
            }
        }
    }]);

    return DoctorProfile;
}(_react2.default.Component);

DoctorProfile.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state, passedProps) {
    /**
     * initialServerData is server rendered async data required build html on server. 
     */
    var initialServerData = null;
    var staticContext = passedProps.staticContext;

    if (staticContext && staticContext.data) {
        initialServerData = staticContext.data;
    }

    var DOCTORS = state.DOCTOR_PROFILES;
    var _state$USER = state.USER,
        rated_appoinments = _state$USER.rated_appoinments,
        profiles = _state$USER.profiles,
        selectedProfile = _state$USER.selectedProfile,
        primaryMobile = _state$USER.primaryMobile,
        app_download_list = _state$USER.app_download_list,
        device_info = _state$USER.device_info,
        ipd_chat = _state$USER.ipd_chat;
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
        selectedCriterias = _state$SEARCH_CRITERI.selectedCriterias,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        fetchNewResults = _state$SEARCH_CRITERI.fetchNewResults,
        commonProcedurers = _state$SEARCH_CRITERI.commonProcedurers,
        filterCriteria = _state$SEARCH_CRITERI.filterCriteria,
        commonSelectedCriterias = _state$SEARCH_CRITERI.commonSelectedCriterias;
    var _state$DOCTOR_SEARCH = state.DOCTOR_SEARCH,
        selectedDoctorProcedure = _state$DOCTOR_SEARCH.selectedDoctorProcedure,
        profileCommonProcedures = _state$DOCTOR_SEARCH.profileCommonProcedures;


    return {
        DOCTORS: DOCTORS, initialServerData: initialServerData, rated_appoinments: rated_appoinments, profiles: profiles, selectedProfile: selectedProfile, selectedCriterias: selectedCriterias, selectedLocation: selectedLocation, fetchNewResults: fetchNewResults, commonProcedurers: commonProcedurers, selectedDoctorProcedure: selectedDoctorProcedure, profileCommonProcedures: profileCommonProcedures, primaryMobile: primaryMobile, filterCriteria: filterCriteria, app_download_list: app_download_list, device_info: device_info, ipd_chat: ipd_chat, commonSelectedCriterias: commonSelectedCriterias
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getDoctorByUrl: function getDoctorByUrl(doctr_url, hospitalId, procedure_ids, category_ids, cb) {
            return dispatch((0, _index.getDoctorByUrl)(doctr_url, hospitalId, procedure_ids, category_ids, cb));
        },
        getDoctorById: function getDoctorById(doctorId, hospitalId, procedure_ids, category_ids) {
            return dispatch((0, _index.getDoctorById)(doctorId, hospitalId, procedure_ids, category_ids));
        },
        selectOpdTimeSLot: function selectOpdTimeSLot(slot, reschedule, appointmentId) {
            return dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId));
        },
        getRatingCompliments: function getRatingCompliments(callback) {
            return dispatch((0, _index.getRatingCompliments)(callback));
        },
        createAppointmentRating: function createAppointmentRating(appointmentData, callback) {
            return dispatch((0, _index.createAppointmentRating)(appointmentData, callback));
        },
        updateAppointmentRating: function updateAppointmentRating(ratingData, callback) {
            return dispatch((0, _index.updateAppointmentRating)(ratingData, callback));
        },
        getDoctorNumber: function getDoctorNumber(doctorId, hospital_id, callback) {
            return dispatch((0, _index.getDoctorNumber)(doctorId, hospital_id, callback));
        },
        closeAppointmentRating: function closeAppointmentRating(doctorId, callback) {
            return dispatch((0, _index.closeAppointmentRating)(doctorId, callback));
        },
        closeAppointmentPopUp: function closeAppointmentPopUp(id, callback) {
            return dispatch((0, _index.closeAppointmentPopUp)(id, callback));
        },
        getFooterData: function getFooterData(url) {
            return dispatch((0, _index.getFooterData)(url));
        },
        mergeOPDState: function mergeOPDState(state, fetchNewResults) {
            return dispatch((0, _index.mergeOPDState)(state, fetchNewResults));
        },
        toggleProfileProcedures: function toggleProfileProcedures(procedure_to_toggle, doctor_id, hospital_id) {
            return dispatch((0, _index.toggleProfileProcedures)(procedure_to_toggle, doctor_id, hospital_id));
        },
        saveProfileProcedures: function saveProfileProcedures(doctor_id, clinic_id) {
            return dispatch((0, _index.saveProfileProcedures)(doctor_id, clinic_id));
        },
        getDoctorNo: function getDoctorNo(doctorData, cb) {
            return dispatch((0, _index.getDoctorNo)(doctorData, cb));
        },
        toggleOPDCriteria: function toggleOPDCriteria(type, criteria, forceAdd) {
            return dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd));
        },
        getAllRatings: function getAllRatings(content_type, object_id, page, cb) {
            return dispatch((0, _index.getAllRatings)(content_type, object_id, page, cb));
        },
        getDownloadAppBannerList: function getDownloadAppBannerList(cb) {
            return dispatch((0, _index.getDownloadAppBannerList)(cb));
        },
        ipdChatView: function ipdChatView(data) {
            return dispatch((0, _index.ipdChatView)(data));
        },
        clearVipSelectedPlan: function clearVipSelectedPlan() {
            return dispatch((0, _index.clearVipSelectedPlan)());
        },
        NonIpdBookingLead: function NonIpdBookingLead(data, cb) {
            return dispatch((0, _index.NonIpdBookingLead)(data, cb));
        },
        saveLeadPhnNumber: function saveLeadPhnNumber(number) {
            return dispatch((0, _index.saveLeadPhnNumber)(number));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DoctorProfile);

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/os-browserify/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/os-browserify/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9Ib3NwaXRhbFBvcFVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9jb21tb25zL2NsaW5pY1NlbGVjdG9yL0NsaW5pY1NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9jb21tb25zL2NsaW5pY1NlbGVjdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9jb21tb25zL3Byb2ZpbGVQb3BVcC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvZG9jdG9yUHJvZmlsZS9Db250YWN0UG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvRG9jdG9yUHJvZmlsZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvYWJvdXREb2N0b3IvQWJvdXREb2N0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvYWJvdXREb2N0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvbm9uQm9va2FibGVEb2N0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvcHJvZmVzc2lvbmFsR3JhcGgvRXhwYW5zaW9uUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvcHJvZmVzc2lvbmFsR3JhcGgvUHJvZmVzc2lvbmFsR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvcHJvZmVzc2lvbmFsR3JhcGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2RvY3RvclByb2ZpbGUvdmlwUHJvZmlsZVBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL29wZC9Eb2N0b3JQcm9maWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb3MtYnJvd3NlcmlmeS9icm93c2VyLmpzIl0sIm5hbWVzIjpbIkhvc3BpdGFsUG9wVXAiLCJwcm9wcyIsImdldHVudmVyaWZpZWREYXRhIiwib2JqIiwiZG9jdG9yX2RldGFpbHMiLCJob3NwaXRhbHMiLCJ0aHVtYm5haWwiLCJkaXNwbGF5X25hbWUiLCJpZCIsInN0YXRlIiwiZGF0YSIsImRpc3BsYXlSYXRpbmdCbG9jayIsInNlbGVjdGVkSG9zcGl0YWwiLCJzZXRTdGF0ZSIsImZpbHRlciIsIngiLCJob3NwaXRhbF9pZCIsInBvcFVwU3RhdGUiLCJkZWNsaW5lUmF0aW5nIiwiYmluZCIsIkFTU0VUU19CQVNFX1VSTCIsImxlbmd0aCIsIm1hcCIsImhvc3AiLCJpIiwic2VsZWN0UmF0aW5nSG9zcGl0YWwiLCJob3NwaXRhbF9uYW1lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJDbGluaWNTZWxlY3RvciIsIm51bWJlclNob3duIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiZ2V0RG9jdG9yTnVtYmVyIiwiZXJyIiwibnVtYmVyIiwid2hpY2giLCJ2aWVNb3JlUHJvY2VkdXJlcyIsInNlbGVjdGVkSWQiLCJob3NwaXRhbCIsInVybCIsImhpc3RvcnkiLCJwdXNoIiwiZGV0YWlscyIsIm5hbWUiLCJpc19saXZlIiwiZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmciLCJzdHlsZSIsInNlbGVjdGVkQ2xpbmljIiwic2VsZWN0Q2xpbmljIiwiZGlzY291bnRlZF9wcmljZSIsInNob3dfY29udGFjdCIsInZpcF9kaXNjb3VudGVkX3ByaWNlIiwidmlwIiwidmlwX2dvbGRfcHJpY2UiLCJ2aXBfY29udmVuaWVuY2VfYW1vdW50IiwiZm9udFNpemUiLCJnb1RvSG9zcGl0YWxQYWdlIiwiaW5zdXJhbmNlIiwiaXNfaW5zdXJhbmNlX2NvdmVyZWQiLCJpc191c2VyX2luc3VyZWQiLCJwYXJzZUludCIsImluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50IiwiaXNfZ29sZF9tZW1iZXIiLCJpc192aXBfbWVtYmVyIiwiY292ZXJfdW5kZXJfdmlwIiwidmlwX2Ftb3VudCIsIm1ycCIsImVuYWJsZWRfZm9yX2NvZCIsImVuYWJsZWRfZm9yX3ByZXBhaWQiLCJjb2RfZGVhbF9wcmljZSIsImlzX2VuYWJsZV9mb3JfdmlwIiwiY2xlYXJWaXBTZWxlY3RlZFBsYW4iLCJhbmFseXRpY0RhdGEiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsIm1hcmdpbiIsImFncmVlZF9wcmljZSIsImFkZHJlc3MiLCJmbGV4IiwiT2JqZWN0Iiwia2V5cyIsInRpbWluZ3MiLCJ0aW1pbmdLZXkiLCJrZXkiLCJqb2luIiwibGF0IiwibG9uZyIsImZsb2F0IiwiY3Vyc29yIiwiaGVpZ2h0IiwiUG9wVXBWaWV3Iiwic2VsZWN0ZWRQcm9jZWR1cmVJZHMiLCJwcm9jZWR1cmUiLCJ2YWx1ZXMiLCJjb25jYXQiLCJpc19zZWxlY3RlZCIsInByb2NlZHVyZV9pZCIsInNlbGVjdGVkUHJvY2VkdXJlcyIsImluZGV4T2YiLCJzcGxpY2UiLCJzZXRUaW1lb3V0IiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImRvY3Rvcl9pZCIsImZldGNoUmVzdWx0cyIsInNvcnQiLCJldmVyeSIsInZhbHVlIiwiaW5kZXgiLCJ0b2dnbGVQcm9maWxlUHJvY2VkdXJlcyIsInRvZ2dsZSIsInByb2NlZHVyZV90b190b2dnbGUiLCJzZWxlY3RlZERvY3RvclByb2NlZHVyZSIsImNhdGVnb3JpZXMiLCJmb3VuZCIsImVycm9yTXNnIiwicHJvY2VkdXJlX2lkcyIsImNhdGVnb3J5IiwiY2F0ZWdvcnlfbmFtZSIsInByb2NlZHVyZV9uYW1lIiwidG9nZ2xlRGF0YSIsImhvc3BpdGFsRW5hYmxlIiwiZGVhbF9wcmljZSIsInRvZ2dsZUZpbmFsIiwiQ29udGFjdFBvdXBWaWV3IiwidmFsaWRhdGVObyIsInBob25lTnVtYmVyIiwidGFyZ2V0IiwibW9iaWxlTm8iLCJuZXh0UHJvcHMiLCJzdWJtaXQiLCJnZXREb2N0b3IiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsInBhZGRpbmdUb3AiLCJpbnB1dEhhbmRsZXIiLCJoYW5kbGVDb250aW51ZVByZXNzIiwiY29sb3IiLCJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJEb2N0b3JQcm9maWxlVmlldyIsImRpc3BsYXlfaG9zcGl0YWxfcmF0aW5nX2Jsb2NrIiwiZGlzcGxheUhvc3BpdGFsUmF0aW5nQmxvY2siLCJmb290ZXJEYXRhIiwiaW5pdGlhbFNlcnZlckRhdGEiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwic2VvRnJpZW5kbHkiLCJtYXRjaCIsImluY2x1ZGVzIiwicmFuayIsImNvbnN1bHRhdGlvbl9mZWUiLCJzZWFyY2hTaG93biIsInNlYXJjaERhdGFIaWRkZW4iLCJvcGVuQ29udGFjdFBvcHVwIiwiY2xpbmljUGhvbmVObyIsImlzT3JnYW5pYyIsInNob3dJcGRMZWFkRm9ybSIsInNob3dTZWNvbmRQb3B1cCIsImZpcnN0TGVhZElkIiwiY2xvc2VOb25Cb29rYWJsZSIsInNob3dWaXBQb3B1cCIsInNob3dOb25JcGRQb3B1cCIsInNob3dfcG9wdXAiLCJ0b19iZV9mb3JjZSIsImlzX29yZ2FuaWNfbGFuZGluZyIsImlzX2xlYWRfZW5hYmxlZCIsIndpbmRvdyIsInNjcm9sbFRvIiwiZ2V0Rm9vdGVyRGF0YSIsInNwbGl0IiwidGhlbiIsImFwcF9kb3dubG9hZF9saXN0IiwiZ2V0RG93bmxvYWRBcHBCYW5uZXJMaXN0IiwicmVzcCIsInNob3dEb3dubG9hZEFwcFdpZGdldCIsInRpbWVfdG9fc2hvdyIsInNlbGVjdGVkRG9jdG9yIiwiRE9DVE9SUyIsImRhdGFMaXN0IiwibGFuZGluZ19wYWdlIiwiT05fTEFORElOR19QQUdFIiwiZG93bmxvYWRBcHBCdXR0b25EYXRhIiwiYmFubmVyIiwiaXNlbmFibGVkIiwiZW5kc193aXRoIiwic3RhcnRzX3dpdGgiLCJndG1UcmFjayIsImRldmljZV9pbmZvIiwic2VvRGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzY2hlbWEiLCJjbGluaWNfaWQiLCJjbGluaWNJZCIsInRvcEJvb2tOb3ciLCJndG1EYXRhIiwic2F2ZVByb2ZpbGVQcm9jZWR1cmVzIiwicGF0aG5hbWUiLCJwb3N0RGF0YSIsImdldERvY3Rvck5vIiwiZG9jdG9yIiwibmVhcmJ5RG9jdG9ycyIsIm9wZW4iLCJkb2N0b3JzX3VybCIsIlVSTCIsImlwZEZvcm1QYXJhbXMiLCJpcGRfZGF0YSIsInNob3dDaGF0IiwicmVzcG9uc2UiLCJwaG9uZV9udW1iZXIiLCJjcml0ZXJpYVN0ciIsImRpc3BsYXlfdG90YWxfbXJwIiwiZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCIsInNlbGVjdGVkX2hvc3BpdGFsIiwiaXNVdG1UYWdzRXhpc3QiLCJ1dG1fc291cmNlIiwidXRtX21lZGl1bSIsInV0bV90ZXJtIiwidXRtX2NhbXBhaWduIiwibGVhZF9zb3VyY2UiLCJzb3VyY2UiLCJsZWFkX3R5cGUiLCJleGl0cG9pbnRfdXJsIiwiZG9jdG9yX25hbWUiLCJpc19vcmdhbmljIiwiYW1vdW50X2Rpc2NvdW50IiwiY29tbW9uX3V0bV90YWdzIiwidXRtX3RhZ3MiLCJ0eXBlIiwidmlzaXRvcl9pbmZvIiwiZ2V0VmlzaXRvckluZm8iLCJ2aXNpdF9pZCIsInZpc2l0b3JfaWQiLCJndG1fZGF0YSIsInNhdmVMZWFkUGhuTnVtYmVyIiwiU1RPUkFHRSIsImlzQWdlbnQiLCJOb25JcGRCb29raW5nTGVhZCIsImZyb20iLCJzaG93X2RwcF9vcmdhbmljX3BvcHVwIiwiZmluYWxfcHJpY2UiLCJwcmljZSIsInNlYXJjaF9kYXRhIiwic2VvX3VybCIsImRvY19vcmdhbmljX3ByaWNlIiwibGVhZF9jb21wYXJlX2Ftb3VudCIsImRvY3RvcnMiLCJpc19pbnN1cmFuY2VfYXBwbGljYWJsZSIsImdvb2dsZV9yYXRpbmciLCJkaXNwbGF5X3JhdGluZ193aWRnZXQiLCJnb29nbGVfcmF0aW5nX2dyYXBoIiwiYXZnX3JhdGluZyIsInJhdGluZ19jb3VudCIsInJhdGluZyIsInJhdGluZ19ncmFwaCIsImF2Z1JhdGluZyIsInJhdGluZ0NvdW50Iiwic2hvd19nb29nbGVfcmF0aW5nIiwic2VsZWN0ZWRDbGluaWNOYW1lIiwic2VsZWN0ZWRDbGluaWNJbmZvIiwic2hvd0ZvcmNlZFBvcHVwIiwiaXNfY29uZ290IiwicG90ZW50aWFsX2lwZCIsImlzU2VvVmFsaWQiLCJDT05GSUciLCJTRU9fRlJJRU5ETFlfSE9TUElUQUxfSURTIiwic2hvd1BvcHVwIiwic3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uIiwic2F2ZUxlYWRJZEZvclVwZGF0aW9uIiwiZ2V0X2ZlZWRiYWNrIiwiYWxsX2NpdGllcyIsInNlY29uZElwZEZvcm1TdWJtaXR0ZWQiLCJjbG9zZU5vbkJvb2thYmxlRG9jUG9wdXAiLCJuYXZpZ2F0ZVRvRG9jdG9yIiwiYnJlYWRjcnVtYiIsImxpbmtfdGl0bGUiLCJwYWRkaW5nQm90dG9tIiwiZG93bmxvYWRCdXR0b24iLCJ0b0xvd2VyQ2FzZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwiZ2V0TWV0YVRhZ3NEYXRhIiwic2VvIiwiY2Fub25pY2FsVXJsIiwiQVBJX0JBU0VfVVJMIiwibmF2aWdhdGVUb0NsaW5pYyIsImhvc3BpdGFsUG9wVXBTdGF0ZSIsInVucmF0ZWRfYXBwb2ludG1lbnQiLCJpc19nb2xkIiwicmVzdWx0Iiwidmlld0FsbERvY0NsaWNrIiwiZXhwZXJpZW5jZV95ZWFycyIsInF1YWxpZmljYXRpb25zIiwicXVhbGlmaWNhdGlvbiIsImhvc3BfaXNfZ29sZCIsImdvbGRDbGlja2VkIiwiYWJvdXRfd2ViIiwiY2hlY2tBdXRoIiwibWFyZ2luQm90dG9tIiwidG9nZ2xlVmlwIiwibmF2aWdhdGVUb1ZpcCIsImRpc3BsYXkiLCJsZWZ0IiwiYm90dG9tIiwic2hvd051bWJlciIsInByaW1hcnlNb2JpbGUiLCJkb2N0b3JEYXRhIiwiQWJvdXREb2N0b3IiLCJyZWFkTW9yZSIsImFib3V0IiwiYnV0dG9uIiwicmVxdWlyZWRSZWFkTW9yZSIsImFib3V0VHh0Iiwic2xpY2UiLCJ2ZXJ0aWNhbEFsaWduIiwiX19odG1sIiwiTm9uQm9va2FibGVEb2N0b3IiLCJzcGVjaWFsaXR5Iiwic3BlY2lhbGl6YXRpb25zIiwidG9nZ2xlT1BEQ3JpdGVyaWEiLCJWaWV3QWxsIiwiRXhwYW5zaW9uUGFuZWwiLCJoZWFkaW5nIiwiY29udGVudExpc3QiLCJpbWFnZSIsImxpc3RJZCIsInRvZ2dsZU9wZW4iLCJxdWxpZmljYXRpb24iLCJjb250Iiwic3BlY2lhbGl6YXRpb24iLCJjb2xsZWdlIiwicGFzc2luZ195ZWFyIiwibGluZUhlaWdodCIsImNvbnRlbnQiLCJQcm9mZXNzaW9uYWxHcmFwaCIsInByb2ZpbGVfaW1nIiwiZW1haWwiLCJwcmFjdGljaW5nX3NpbmNlIiwiZ2VuZGVyIiwibGFuZ3VhZ2VzIiwibGljZW5zZSIsIm1vYmlsZXMiLCJhd2FyZHMiLCJhc3NvY2lhdGlvbnMiLCJtZWRpY2FsX3NlcnZpY2VzIiwiZXhwZXJpZW5jZXMiLCJyZWR1Y2UiLCJmaW5hbCIsImN1cnIiLCJsYW5ndWFnZSIsImF3YXJkIiwieWVhciIsImFzc29jaWF0aW9uIiwiZXhwZXJpZW5jZSIsInN0YXJ0X3llYXIiLCJlbmRfeWVhciIsInNlcnZpY2UiLCJEb2N0b3JQcm9maWxlIiwiZF9pZCIsInBhcmFtcyIsImdldF9kb2N0b3JfaWRfYnlfdXJsIiwiaXNfcHJvY2VkdXJlIiwiY2F0ZWdvcnlfaWRzIiwiZ2V0RG9jdG9yQnlJZCIsImdldERvY3RvckJ5VXJsIiwic2xvdCIsInRpbWUiLCJzZWxlY3RPcGRUaW1lU0xvdCIsImZldGNoTmV3UmVzdWx0cyIsInN0b3JlIiwicXVlcnlEYXRhIiwiZGlzcGF0Y2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNhdGNoIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJzdGF0aWNDb250ZXh0IiwiRE9DVE9SX1BST0ZJTEVTIiwiVVNFUiIsInJhdGVkX2FwcG9pbm1lbnRzIiwicHJvZmlsZXMiLCJzZWxlY3RlZFByb2ZpbGUiLCJpcGRfY2hhdCIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJzZWxlY3RlZENyaXRlcmlhcyIsInNlbGVjdGVkTG9jYXRpb24iLCJjb21tb25Qcm9jZWR1cmVycyIsImZpbHRlckNyaXRlcmlhIiwiY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJET0NUT1JfU0VBUkNIIiwicHJvZmlsZUNvbW1vblByb2NlZHVyZXMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkb2N0cl91cmwiLCJob3NwaXRhbElkIiwiY2IiLCJkb2N0b3JJZCIsInJlc2NoZWR1bGUiLCJhcHBvaW50bWVudElkIiwiZ2V0UmF0aW5nQ29tcGxpbWVudHMiLCJjYWxsYmFjayIsImNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nIiwiYXBwb2ludG1lbnREYXRhIiwidXBkYXRlQXBwb2ludG1lbnRSYXRpbmciLCJyYXRpbmdEYXRhIiwiY2xvc2VBcHBvaW50bWVudFJhdGluZyIsImNsb3NlQXBwb2ludG1lbnRQb3BVcCIsIm1lcmdlT1BEU3RhdGUiLCJjcml0ZXJpYSIsImZvcmNlQWRkIiwiZ2V0QWxsUmF0aW5ncyIsImNvbnRlbnRfdHlwZSIsIm9iamVjdF9pZCIsInBhZ2UiLCJpcGRDaGF0VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDblJBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjs7QUFFL0IsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qjs7QUFFNUIsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsVUFBVTs7QUFFekIsNEJBQTRCOztBQUU1QixnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNTUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IFJhdGluZ3NQb3BVcCBmcm9tICcuL1JhdGluZ3NQb3BVcC5qcydcblxuXG5jbGFzcyBIb3NwaXRhbFBvcFVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgZGlzcGxheVJhdGluZ0Jsb2NrOiAwLFxuICAgICAgICAgICAgc2VsZWN0ZWRIb3NwaXRhbDogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIGlmIChTVE9SQUdFLmNoZWNrQXV0aCgpKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnByb3BzLmdldFVucmF0ZWRBcHBvaW50bWVudCgoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKCFlcnIgJiYgZGF0YSkge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSB9KVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBnZXR1bnZlcmlmaWVkRGF0YSA9ICgpID0+IHtcbiAgICAgICAgbGV0IG9iaiA9IHt9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZG9jdG9yX2RldGFpbHMpe1xuICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBcImRvY3RvclwiOiB0aGlzLnByb3BzLmRvY3Rvcl9kZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICBcImhvc3BpdGFsXCI6IHRoaXMucHJvcHMuZG9jdG9yX2RldGFpbHMuaG9zcGl0YWxzLFxuICAgICAgICAgICAgICAgICAgICBcImRvY3Rvcl90aHVtYm5haWxcIjogdGhpcy5wcm9wcy5kb2N0b3JfZGV0YWlscy50aHVtYm5haWwsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheV9uYW1lXCI6IHRoaXMucHJvcHMuZG9jdG9yX2RldGFpbHMuZGlzcGxheV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogJ2RvY3RvcicsXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogdGhpcy5wcm9wcy5kb2N0b3JfZGV0YWlscy5pZCxcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJcIjogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqXG4gICAgfVxuXG4gICAgc2VsZWN0UmF0aW5nSG9zcGl0YWwoaWQpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVJhdGluZ0Jsb2NrOiAxIH0pXG4gICAgICAgIGxldCBzZWxlY3RlZEhvc3BpdGFsID0gdGhpcy5wcm9wcy5kb2N0b3JfZGV0YWlscy5ob3NwaXRhbHMuZmlsdGVyKHggPT4geC5ob3NwaXRhbF9pZCA9PSBpZClcbiAgICAgICAgc2VsZWN0ZWRIb3NwaXRhbCA9IHNlbGVjdGVkSG9zcGl0YWwgPyBzZWxlY3RlZEhvc3BpdGFsWzBdIDogbnVsbCBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSG9zcGl0YWwgfSlcbiAgICB9XG5cbiAgICBkZWNsaW5lUmF0aW5nKClcbiAgICB7XG4gICAgICAgIHRoaXMucHJvcHMucG9wVXBTdGF0ZSgpXG4gICAgfSAgIFxuICAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlSYXRpbmdCbG9jaykge1xuICAgICAgICAgICAgcmV0dXJuICg8UmF0aW5nc1BvcFVwIHsuLi50aGlzLnByb3BzfSB1bnZlcmlmaWVkPXt0cnVlfSB1bnZlcmlmaWVkRGF0YT17dGhpcy5nZXR1bnZlcmlmaWVkRGF0YSgpfSBzZWxlY3RlZEhvc3BpdGFsPXt0aGlzLnN0YXRlLnNlbGVjdGVkSG9zcGl0YWx9IC8+KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInJhaXRpbmctcG9wdXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcmF0aW5nLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlLWNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJyYXRlLXBvcC1iYWNrXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9iYWNrLWljb24ucG5nXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIENob29zZSBDbGluaWMgdG8gcmF0ZSBEb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgb25DbGljaz17dGhpcy5kZWNsaW5lUmF0aW5nLmJpbmQodGhpcyl9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3J0LWNsb3NlLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1zZWNlbHRpb24tY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZG9jdG9yX2RldGFpbHMuaG9zcGl0YWxzICYmIHRoaXMucHJvcHMuZG9jdG9yX2RldGFpbHMuaG9zcGl0YWxzLmxlbmd0aCA/IHRoaXMucHJvcHMuZG9jdG9yX2RldGFpbHMuaG9zcGl0YWxzLm1hcCgoaG9zcCwgaSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2l9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0UmF0aW5nSG9zcGl0YWwuYmluZCh0aGlzLCBob3NwLmhvc3BpdGFsX2lkKX0+IHtob3NwLmhvc3BpdGFsX25hbWV9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwIGNsYXNzPVwicnQtcGFyLXNlbGVjdFwiPlRodSAtIDI6MDAgUE0gdG8gNjowMCBQTTwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9zcGl0YWxQb3BVcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgUHJvY2VkdXJlUG9wdXAgZnJvbSAnLi4vcHJvZmlsZVBvcFVwLmpzJ1xuaW1wb3J0IHsgaG9zdG5hbWUgfSBmcm9tICdvcyc7XG5cbmNsYXNzIENsaW5pY1NlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG51bWJlclNob3duOiBcIlwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93TnVtYmVyKGlkLCBob3NwaXRhbF9pZCwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdTaG93Tm9DbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2hvdy1uby1jbGlja2VkJywgJ2RvY3Rvcl9pZCc6IGlkLCBcImhvc3BpdGFsX2lkXCI6IGhvc3BpdGFsX2lkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubnVtYmVyU2hvd24pIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0RG9jdG9yTnVtYmVyKGlkLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIgJiYgZGF0YS5udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJTaG93bjogZGF0YS5udW1iZXJcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKHdoaWNoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbd2hpY2hdOiAhdGhpcy5zdGF0ZVt3aGljaF0gfSlcbiAgICB9XG5cbiAgICBwcm9jZWR1cmVQb3BVcChob3NwaXRhbF9pZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmllTW9yZVByb2NlZHVyZXM6IHRydWUsIHNlbGVjdGVkSWQ6IGhvc3BpdGFsX2lkIH0pXG4gICAgfVxuXG4gICAgZ29Ub0hvc3BpdGFsUGFnZShob3NwaXRhbCwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBpZihob3NwaXRhbC51cmwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtob3NwaXRhbC51cmx9YClcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pcGQvaG9zcGl0YWwvJHtob3NwaXRhbC5ob3NwaXRhbF9pZH1gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBpZCwgbmFtZSwgaG9zcGl0YWxzLCBpc19saXZlLCBlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyB9ID0gdGhpcy5wcm9wcy5kZXRhaWxzXG4gICAgICAgIGxldCBzdHlsZSA9IHt9XG4gICAgICAgIGlmIChob3NwaXRhbHMgJiYgaG9zcGl0YWxzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICBzdHlsZVsnd2lkdGgnXSA9ICc5OCUnXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWMpIHtcbiAgICAgICAgICAgIGlmIChob3NwaXRhbHMgJiYgaG9zcGl0YWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0Q2xpbmljKGhvc3BpdGFsc1swXS5ob3NwaXRhbF9pZCwgaG9zcGl0YWxzWzBdLmVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nLCAwLCBob3NwaXRhbHNbMF0uZGlzY291bnRlZF9wcmljZSB8fCAwLCBob3NwaXRhbHNbMF0uc2hvd19jb250YWN0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXBhbmVsXCI+XG4gICAgICAgICAgICAvLyAgICAgPGg0IGNsYXNzTmFtZT1cInBhbmVsLXRpdGxlIG1iLXJtdlwiPkRyLiB7bmFtZX0gQXZhaWxhYmxlIGF0PC9oND5cbiAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWNvbnRlbnQgY2xpbmljLWluZm8tcGFuZWxcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0IENsaW5pYy1jYXJkLWxpc3QgcnRuZy1ib3gtc2hhZG93XCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaG9zcGl0YWxzLm1hcCgoaG9zcGl0YWwsIGkpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBuby1zaGFkb3dcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIHBiLXJtdiBjbGVhcmZpeFwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlIHRleHQtbWQgZnctNzAwIGNsaW5pYy1zZWxlY3Rvci1uYW1lIHJhdG5nLWNsaW5pYy1zbGMtbmFtZVwiPntob3NwaXRhbC5ob3NwaXRhbF9uYW1lfTwvaDQ+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHRleHQtbWQgZnctNzAwIHJhdG5nLWRvYy1wcmljZVwiPiYjODM3Nzsge2hvc3BpdGFsLmRlYWxfcHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgcGItcm12IGNsZWFyZml4XCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgdGV4dC1tZCBmdy03MDAgY2xpbmljLXNlbGVjdG9yLW5hbWUgcmF0bmctY2xpbmljLXNsYy1uYW1lXCI+e2hvc3BpdGFsLmhvc3BpdGFsX25hbWV9PC9oND5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgdGV4dC1tZCBmdy03MDAgcmF0bmctZG9jLXByaWNlIGFkZC1vbi1kb2MtcHJpY2VcIj4mIzgzNzc7IHtob3NwaXRhbC5kZWFsX3ByaWNlfSA8YiBjbGFzc05hbWU9XCJyYXRuZy1kb2Mtb2xkcHJpY2VcIj4mIzgzNzc7IHtob3NwaXRhbC5tcnB9PC9iPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JBR0UuY2hlY2tBdXRoKCkgfHwgaG9zcGl0YWwuZGVhbF9wcmljZSA8IDEwMCA/XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwic2lnbnVwLW9mZi1kb2NcIj4rICYjODM3NzsgMTAwIE9GRiA8Yj5vbiBTaWdudXA8L2I+IDwvc3Bhbj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnQgcHQtdHdvXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb24tZGV0YWlscyBjbGVhcmZpeFwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPntob3NwaXRhbC5hZGRyZXNzfTwvcD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT0ke2hvc3BpdGFsLmxhdH0sJHtob3NwaXRhbC5sb25nfWB9IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdwb2ludGVyJyB9fSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL21hcC1pY29uLnBuZ1wifSAvPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIGN1cnNvcjogJ3BvaW50ZXInIH19ID5cblxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1pbmctZGV0YWlscyBtdC1ybXZcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJ0bmctY2xuYy10aW1lXCI+VGltaW5nczwvc3Bhbj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhob3NwaXRhbC50aW1pbmdzKS5tYXAoKHRpbWluZ0tleSwga2V5KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJmdy03MDBcIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtbWQgdGV4dC1wcmltYXJ5XCIgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogJ2luaXRpYWwnIH19ID5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltaW5nS2V5fVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIiArIGhvc3BpdGFsLnRpbWluZ3NbdGltaW5nS2V5XS5qb2luKCcsICcpfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTIgfX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID8gPGJ1dHRvbiBzdHlsZT17eyB2aXNpYmlsaXR5OiAoISFpc19saXZlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiKSB9fSBjbGFzc05hbWU9XCJ2LWJ0biB2LWJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0Q2xpbmljLmJpbmQodGhpcywgaG9zcGl0YWwuaG9zcGl0YWxfaWQsICEhaXNfbGl2ZSwgaSl9PkJvb2sgTm93PC9idXR0b24+IDogPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3dOdW1iZXIuYmluZCh0aGlzLCBpZCwgaG9zcGl0YWwuaG9zcGl0YWxfaWQpfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUubnVtYmVyU2hvd24gPyBcInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLXNtIGJ0bi1udW1iZXJcIiA6IFwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tc21cIn0+e3RoaXMuc3RhdGUubnVtYmVyU2hvd24gfHwgXCJDb250YWN0XCJ9PC9idXR0b24+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGUgbWItcm12XCI+RHIuIHtuYW1lfSBBdmFpbGFibGUgYXQ8L2gyPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWxzLm1hcCgoaG9zcGl0YWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2aXBfZGlzY291bnRlZF9wcmljZSA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpcF9kaXNjb3VudGVkX3ByaWNlID0gaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSAtIChob3NwaXRhbC52aXAudmlwX2dvbGRfcHJpY2UgKyBob3NwaXRhbC52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicGFuZWwtY29udGVudCBwbmwtYm90dG9tLWJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLXJhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250YWluZXItcmFkaW9cIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucHJvcHMuc2VsZWN0Q2xpbmljKGhvc3BpdGFsLmhvc3BpdGFsX2lkLCBob3NwaXRhbC5lbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZywgaSwgaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSwgaG9zcGl0YWwuc2hvd19jb250YWN0KSB9fT48aDMgY2xhc3NOYW1lPVwiZnctNTAwIGhvc3B0bC12cS1tclwiIHN0eWxlPXt7Zm9udFNpemU6ICdpbmhlcml0JyB9fSA+e2hvc3BpdGFsLmhvc3BpdGFsX25hbWV9IDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZENsaW5pYyA9PSBob3NwaXRhbC5ob3NwaXRhbF9pZCA/IDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjaGVja2VkIG5hbWU9XCJyYWRpb1wiIC8+IDogPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtob3NwaXRhbC51cmw/YC8ke2hvc3BpdGFsLnVybH1gOmAvaXBkL2hvc3BpdGFsLyR7aG9zcGl0YWwuaG9zcGl0YWxfaWR9YH0gb25DbGljaz17dGhpcy5nb1RvSG9zcGl0YWxQYWdlLmJpbmQodGhpcywgaG9zcGl0YWwpfT48c3BhbiBjbGFzc05hbWU9XCJ2dy1oc3B0bC1kaVwiID4oVmlldyBIb3NwaXRhbCk8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRDbGluaWMgPT0gaG9zcGl0YWwuaG9zcGl0YWxfaWQgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF0gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS5jYXRlZ29yaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiZHRsLWNuc2x0LWZlZSBwYi1saXN0IGNuc2x0LWZlZS1zdHlsZSBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbC5pbnN1cmFuY2UgJiYgaG9zcGl0YWwuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIGhvc3BpdGFsLmluc3VyYW5jZS5pc191c2VyX2luc3VyZWQgJiYgcGFyc2VJbnQoaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSkgPD1ob3NwaXRhbC5pbnN1cmFuY2UuaW5zdXJhbmNlX3RocmVzaG9sZF9hbW91bnQ/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHR4dC1vcm5hZ2VcIj7igrkgezB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOihob3NwaXRhbC52aXAuaXNfZ29sZF9tZW1iZXIgfHwgaG9zcGl0YWwudmlwLmlzX3ZpcF9tZW1iZXIpICYmIGhvc3BpdGFsLnZpcC5jb3Zlcl91bmRlcl92aXAgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ2xkLWNkLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkge2hvc3BpdGFsLnZpcC52aXBfYW1vdW50K2hvc3BpdGFsLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fSA8c3BhbiBjbGFzc05hbWU9XCJjc3RtLWRvYy1jdXQtcHJpY2VcIj7igrkge2hvc3BpdGFsLm1ycH0gPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo6aG9zcGl0YWwudmlwLmlzX2dvbGRfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdHh0LW9ybmFnZVwiPuKCuSB7aG9zcGl0YWwudmlwLnZpcF9hbW91bnQgKyBob3NwaXRhbC52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1tcnBcIj7igrkge2hvc3BpdGFsLm1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhvc3BpdGFsLnZpcC5pc192aXBfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdHh0LW9ybmFnZVwiPuKCuSB7aG9zcGl0YWwudmlwLnZpcF9hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+4oK5IHtob3NwaXRhbC5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4qL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhvc3BpdGFsLmVuYWJsZWRfZm9yX2NvZCAmJiAhaG9zcGl0YWwuZW5hYmxlZF9mb3JfcHJlcGFpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2hvc3BpdGFsLmNvZF9kZWFsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPzxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdHh0LW9ybmFnZVwiPuKCuSB7aG9zcGl0YWwuY29kX2RlYWxfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGhvc3BpdGFsLmNvZF9kZWFsX3ByaWNlKSA9PSBwYXJzZUludChob3NwaXRhbC5tcnApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1tcnBcIj7igrkge2hvc3BpdGFsLm1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdHh0LW9ybmFnZVwiPuKCuSB7aG9zcGl0YWwubXJwfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhvc3BpdGFsLmVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHR4dC1vcm5hZ2VcIj7igrkge2hvc3BpdGFsLmRpc2NvdW50ZWRfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGhvc3BpdGFsLmRpc2NvdW50ZWRfcHJpY2UpID09IHBhcnNlSW50KGhvc3BpdGFsLm1ycClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LW1ycFwiPuKCuSB7aG9zcGl0YWwubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGhvc3BpdGFsLm1ycCAmJiBob3NwaXRhbC5tcnAgIT0gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdHh0LW9ybmFnZVwiPuKCuSB7aG9zcGl0YWwubXJwfTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXN0LW5hbWUtaXRlbVwiPkNvbnN1bHRhdGlvbiBGZWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWhvc3BpdGFsLmluc3VyYW5jZS5pc191c2VyX2luc3VyZWQgJiYgIWhvc3BpdGFsLnZpcC5pc192aXBfbWVtYmVyICYmICFob3NwaXRhbC52aXAuaXNfZ29sZF9tZW1iZXIgJiYgaG9zcGl0YWwudmlwLmlzX2VuYWJsZV9mb3JfdmlwICYmIGhvc3BpdGFsLmRpc2NvdW50ZWRfcHJpY2U+KGhvc3BpdGFsLnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fHwwICsgaG9zcGl0YWwudmlwLnZpcF9nb2xkX3ByaWNlfHwwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kIGdvbGRDYXJkIGdvbGQtcHJpY2UtY2FyZC1hZGRvbi1jbGluaWNTZWxlY3RvclwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5hbHl0aWNEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BkUHJvZmlsZVZpcEdvbGRDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29wZC1wcm9maWxlLXZpcC1nb2xkLWNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBhbmFseXRpY0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPW9wZC1wcm9maWxlLXZpcC1nb2xkLWNsaWNrJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnbGQtcC1yY1wiPkZvcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdsZC1jZC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9Lz4gPHAgY2xhc3NOYW1lPVwiZ2xkLXAtcmNcIj5NZW1iZXJzPC9wPiA8c3BhbiBjbGFzc05hbWU9XCJnbGQtcmF0ZS1sZlwiPuKCuSB7aG9zcGl0YWwudmlwLnZpcF9nb2xkX3ByaWNlKyBob3NwaXRhbC52aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudH08L3NwYW4+PGltZyBzdHlsZT17e3RyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyx3aWR0aDogJzEwcHgnLCBtYXJnaW46JzBweCAxMHB4IDBweCAwcHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsLmluc3VyYW5jZSAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgaG9zcGl0YWwuaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSkgPD0gaG9zcGl0YWwuaW5zdXJhbmNlLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50ID8gJycgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpob3NwaXRhbC5lbmFibGVkX2Zvcl9jb2QgJiYgIWhvc3BpdGFsLmVuYWJsZWRfZm9yX3ByZXBhaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP2hvc3BpdGFsLmNvZF9kZWFsX3ByaWNlICYmIGhvc3BpdGFsLmNvZF9kZWFsX3ByaWNlICE9PSBob3NwaXRhbC5tcnBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID88cCBjbGFzc05hbWU9XCJjc3RtLWNwblwiPntwYXJzZUludCgoKGhvc3BpdGFsLm1ycCAtIGhvc3BpdGFsLmNvZF9kZWFsX3ByaWNlKSAvIGhvc3BpdGFsLm1ycCkgKiAxMDApfSUgT2ZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGJyIC8+KGluY2x1ZGVzIENvdXBvbik8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhvc3BpdGFsLmVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nICYmIGhvc3BpdGFsLmRpc2NvdW50ZWRfcHJpY2UgPCBob3NwaXRhbC5tcnAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3N0bS1jcG5cIj57cGFyc2VJbnQoKChob3NwaXRhbC5tcnAgLSBob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlKSAvIGhvc3BpdGFsLm1ycCkgKiAxMDApfSUgT2ZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3NwaXRhbC5hZ3JlZWRfcHJpY2UgIT0gaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48YnIgLz4oaW5jbHVkZXMgQ291cG9uKTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwuaW5zdXJhbmNlICYmIGhvc3BpdGFsLmluc3VyYW5jZS5pc19pbnN1cmFuY2VfY292ZXJlZCAmJiBob3NwaXRhbC5pbnN1cmFuY2UuaXNfdXNlcl9pbnN1cmVkICYmIHBhcnNlSW50KGhvc3BpdGFsLmRpc2NvdW50ZWRfcHJpY2UpIDw9aG9zcGl0YWwuaW5zdXJhbmNlLmluc3VyYW5jZV90aHJlc2hvbGRfYW1vdW50P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy12YWwtYngtb3BkXCI+Q292ZXJlZCBVbmRlciBJbnN1cmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdGwtY25zbHQtZmVlIHBiLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JBR0UuY2hlY2tBdXRoKCkgfHwgaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSA8IDEwMCB8fCAoZmFsc2UgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZENsaW5pYyA9PSBob3NwaXRhbC5ob3NwaXRhbF9pZCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXVtob3NwaXRhbC5ob3NwaXRhbF9pZF0gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdLmNhdGVnb3JpZXMpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWRvY1wiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19ID4rICYjODM3NzsgMTAwIE9GRiA8Yj5vbiBTaWdudXA8L2I+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzcy1iZy1jb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLXNwYW5cIj5BZGRyZXNzOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fT57aG9zcGl0YWwuYWRkcmVzc308L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLXNwYW5cIj5UaW1pbmdzOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGhvc3BpdGFsLnRpbWluZ3MpLm1hcCgodGltaW5nS2V5LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17a2V5fT57dGltaW5nS2V5fTxzcGFuPntcIiBcIiArIGhvc3BpdGFsLnRpbWluZ3NbdGltaW5nS2V5XS5qb2luKCcsICcpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9JHtob3NwaXRhbC5sYXR9LCR7aG9zcGl0YWwubG9uZ31gfSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgY3Vyc29yOiAncG9pbnRlcicgfX0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMzVweFwiLCBoZWlnaHQ6IFwiMzVweFwiLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9tYXAtaWNvbi5wbmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljICE9IGhvc3BpdGFsLmhvc3BpdGFsX2lkICYmICh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXVtob3NwaXRhbC5ob3NwaXRhbF9pZF0pICYmICh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXVtob3NwaXRhbC5ob3NwaXRhbF9pZF0uc2VsZWN0ZWRQcm9jZWR1cmVzID4gMCB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXVtob3NwaXRhbC5ob3NwaXRhbF9pZF0udW5zZWxlY3RlZFByb2NlZHVyZXMgPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8cD5UcmVhdG1lbnRzIEF2YWlsYWJsZSB7YCgke3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS51bnNlbGVjdGVkUHJvY2VkdXJlcyArIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS5zZWxlY3RlZFByb2NlZHVyZXN9KWB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgJiYgdGhpcy5wcm9wcy5pc19wcm9jZWR1cmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF0gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS5zZWxlY3RlZFByb2NlZHVyZXMgPj0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT1cInNlbGVjdC1ibnItZHNuXCI+U2VsZWN0ZWQgdHJlYXRtZW50IG5vdCBhdmFpbGFibGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljID09IGhvc3BpdGFsLmhvc3BpdGFsX2lkICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXVtob3NwaXRhbC5ob3NwaXRhbF9pZF0uY2F0ZWdvcmllcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2NlZHVyZS1jaGVja2JveGVzIHJlbW92ZS1iZy1jb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLWNuc2x0LWZlZSBwYi1saXN0IG9mci1tcm5nYnRtXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JBR0UuY2hlY2tBdXRoKCkgfHwgaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSA8IDEwMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwic2lnbnVwLW9mZi1kb2NcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSA+KyAmIzgzNzc7IDEwMCBPRkYgPGI+b24gU2lnbnVwPC9iPiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHRsLWNuc2x0LWZlZSBwYi1saXN0IGNuc2x0LWZlZS1zdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwuZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHR4dC1vcm5hZ2VcIj7igrkge2hvc3BpdGFsLmRpc2NvdW50ZWRfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoaG9zcGl0YWwuZGlzY291bnRlZF9wcmljZSkgPT0gcGFyc2VJbnQoaG9zcGl0YWwubXJwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1tcnBcIj7igrkge2hvc3BpdGFsLm1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBob3NwaXRhbC5tcnAgJiYgaG9zcGl0YWwubXJwICE9IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0eHQtb3JuYWdlXCI+4oK5IHtob3NwaXRhbC5tcnB9PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgdGVzdC1uYW1lLWl0ZW1cIj5Db25zdWx0YXRpb24gRmVlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19IGNsYXNzTmFtZT1cInByb2NlZHVyZS1vdXQtaGVhZGluZy1mb250XCI+VHJlYXRtZW50KHMpIHNlbGVjdGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4+e3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS5jYXRlZ29yaWVzX25hbWUuam9pbignfCcpfTwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3VyYW5jZS1jaGVja2JveGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9jZWR1cmUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdLmNhdGVnb3JpZXMpLm1hcCgocHJvY2VkdXJlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2NlZHVyZS5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKS5tYXAoKGNhdGVnb3J5LCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvY2VkdXJlLWNoZWNrIGNrLWJ4XCIgaHRtbEZvcj17YCR7Y2F0ZWdvcnkucHJvY2VkdXJlX2lkfV9ob3Mke2NhdGVnb3J5Lmhvc3BpdGFsX2lkfWB9PntjYXRlZ29yeS5wcm9jZWR1cmVfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RydWV9IGlkPXtgJHtjYXRlZ29yeS5wcm9jZWR1cmVfaWR9X2hvcyR7Y2F0ZWdvcnkuaG9zcGl0YWxfaWR9YH0gbmFtZT1cImZydWl0LTFcIiB2YWx1ZT1cIlwiIGhvc3BpdGFsPXtob3NwaXRhbC5ob3NwaXRhbF9pZH0gb25DaGFuZ2U9e3RoaXMucHJvY2VkdXJlUG9wVXAuYmluZCh0aGlzLCBjYXRlZ29yeS5ob3NwaXRhbF9pZCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RydWV9IGNsYXNzTmFtZT1cImlucy1jaGstYnhcIiBpZD17YCR7Y2F0ZWdvcnkucHJvY2VkdXJlX2lkfV9ob3Mke2NhdGVnb3J5Lmhvc3BpdGFsX2lkfWB9IG5hbWU9XCJmcnVpdC0xXCIgdmFsdWU9XCJcIiBob3NwaXRhbD17aG9zcGl0YWwuaG9zcGl0YWxfaWR9IG9uQ2hhbmdlPXt0aGlzLnByb2NlZHVyZVBvcFVwLmJpbmQodGhpcywgY2F0ZWdvcnkuaG9zcGl0YWxfaWQpfSAvPjxsYWJlbCBodG1sRm9yPXtgJHtjYXRlZ29yeS5wcm9jZWR1cmVfaWR9X2hvcyR7Y2F0ZWdvcnkuaG9zcGl0YWxfaWR9YH0+e2NhdGVnb3J5LnByb2NlZHVyZV9uYW1lfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zcGl0YWwuZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHItcHJpY2VzXCI+4oK5IHtjYXRlZ29yeS5kaXNjb3VudGVkX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInByLWN1dC1wcmljZVwiPuKCuSB7Y2F0ZWdvcnkubXJwfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwci1wcmljZXNcIj7igrkge2NhdGVnb3J5Lm1ycH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkQ2xpbmljID09IGhvc3BpdGFsLmhvc3BpdGFsX2lkICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS5zZWxlY3RlZFByb2NlZHVyZXMgKyB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXVtob3NwaXRhbC5ob3NwaXRhbF9pZF0udW5zZWxlY3RlZFByb2NlZHVyZXMgPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS52aWVNb3JlUHJvY2VkdXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8UHJvY2VkdXJlUG9wdXAgdG9nZ2xlPXt0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsICd2aWVNb3JlUHJvY2VkdXJlcycpfSBob3NwaXRhbF9pZD17dGhpcy5zdGF0ZS5zZWxlY3RlZElkfSBkb2N0b3JfaWQ9e2lkfSAgey4uLnRoaXMucHJvcHN9IGRhdGE9e3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW3RoaXMuc3RhdGUuc2VsZWN0ZWRJZF0uY2F0ZWdvcmllc30gaG9zcGl0YWxFbmFibGU9e2hvc3BpdGFsLmVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2lkXVtob3NwaXRhbC5ob3NwaXRhbF9pZF0uc2VsZWN0ZWRQcm9jZWR1cmVzICsgdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtpZF1baG9zcGl0YWwuaG9zcGl0YWxfaWRdLnVuc2VsZWN0ZWRQcm9jZWR1cmVzICE9IHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS5zZWxlY3RlZFByb2NlZHVyZXMgPyA8YnV0dG9uIGNsYXNzTmFtZT1cInByLXBsdXMtYWRkLWJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvY2VkdXJlUG9wVXAuYmluZCh0aGlzLCBob3NwaXRhbC5ob3NwaXRhbF9pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsge3RoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbaWRdW2hvc3BpdGFsLmhvc3BpdGFsX2lkXS51bnNlbGVjdGVkUHJvY2VkdXJlc30gbW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGluaWNTZWxlY3RvciIsImltcG9ydCBDbGluaWNTZWxlY3RvciBmcm9tICcuL0NsaW5pY1NlbGVjdG9yLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBDbGluaWNTZWxlY3RvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BVcFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZFByb2NlZHVyZUlkczogW10sXG4gICAgICAgICAgICBwcm9jZWR1cmU6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkUHJvY2VkdXJlSWRzID0gW11cbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLmRhdGEpLm1hcCgocHJvY2VkdXJlKSA9PiB7XG5cbiAgICAgICAgICAgIHNlbGVjdGVkUHJvY2VkdXJlSWRzID0gc2VsZWN0ZWRQcm9jZWR1cmVJZHMuY29uY2F0KHByb2NlZHVyZS5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKS5tYXAoeCA9PiB4LnByb2NlZHVyZV9pZCkpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFByb2NlZHVyZUlkczogc2VsZWN0ZWRQcm9jZWR1cmVJZHMsIHByb2NlZHVyZTogW10uY29uY2F0KHNlbGVjdGVkUHJvY2VkdXJlSWRzKSB9KVxuICAgIH1cblxuICAgIHRvZ2dsZURhdGEocHJvY2VkdXJlKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZFByb2NlZHVyZXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUHJvY2VkdXJlSWRzXG4gICAgICAgIGlmIChzZWxlY3RlZFByb2NlZHVyZXMubGVuZ3RoID4gMSB8fCAoc2VsZWN0ZWRQcm9jZWR1cmVzLmxlbmd0aCA9PSAxICYmIHNlbGVjdGVkUHJvY2VkdXJlcy5pbmRleE9mKHByb2NlZHVyZS5wcm9jZWR1cmVfaWQpID09IC0xKSkge1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRQcm9jZWR1cmVzLmluZGV4T2YocHJvY2VkdXJlLnByb2NlZHVyZV9pZCkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFByb2NlZHVyZXMuc3BsaWNlKHNlbGVjdGVkUHJvY2VkdXJlcy5pbmRleE9mKHByb2NlZHVyZS5wcm9jZWR1cmVfaWQpLCAxKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFByb2NlZHVyZXMucHVzaChwcm9jZWR1cmUucHJvY2VkdXJlX2lkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUHJvY2VkdXJlSWRzOiBzZWxlY3RlZFByb2NlZHVyZXMgfSlcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGVjdGVkUHJvY2VkdXJlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRQcm9jZWR1cmVzLnB1c2gocHJvY2VkdXJlLnByb2NlZHVyZV9pZClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFByb2NlZHVyZUlkczogc2VsZWN0ZWRQcm9jZWR1cmVzIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL3RoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IHRydWUgfSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJQbGVhc2UgU2VsZWN0IGF0IGxlYXN0IG9uZSBQcm9jZWR1cmVcIiB9KVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZpbmFsKGRvY3Rvcl9pZCwgaG9zcGl0YWxfaWQpIHtcbiAgICAgICAgbGV0IGZldGNoUmVzdWx0cyA9IGZhbHNlXG4gICAgICAgIGxldCBzZWxlY3RlZFByb2NlZHVyZXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUHJvY2VkdXJlSWRzXG4gICAgICAgIGxldCBwcm9jZWR1cmUgPSB0aGlzLnN0YXRlLnByb2NlZHVyZVxuICAgICAgICBpZiAoc2VsZWN0ZWRQcm9jZWR1cmVzLmxlbmd0aCA9PT0gcHJvY2VkdXJlLmxlbmd0aCAmJiBzZWxlY3RlZFByb2NlZHVyZXMuc29ydCgpLmV2ZXJ5KGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHsgcmV0dXJuIHZhbHVlID09PSBwcm9jZWR1cmUuc29ydCgpW2luZGV4XSB9KSkge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmZXRjaFJlc3VsdHMgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZldGNoUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVQcm9maWxlUHJvY2VkdXJlcyhzZWxlY3RlZFByb2NlZHVyZXMsIGRvY3Rvcl9pZCwgaG9zcGl0YWxfaWQpXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZSgpXG4gICAgfVxuXG4gICAgdG9nZ2xlUHJvY2VkdXJlKHByb2NlZHVyZV90b190b2dnbGUsIGRvY3Rvcl9pZCwgaG9zcGl0YWxfaWQpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ZWRQcm9jZWR1cmVJZHMgPSBbXVxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbZG9jdG9yX2lkXVtob3NwaXRhbF9pZF0uY2F0ZWdvcmllcykubWFwKChwcm9jZWR1cmUpID0+IHtcblxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9jZWR1cmVJZHMgPSBzZWxlY3RlZFByb2NlZHVyZUlkcy5jb25jYXQocHJvY2VkdXJlLmZpbHRlcih4ID0+IHguaXNfc2VsZWN0ZWQpLm1hcCh4ID0+IHgucHJvY2VkdXJlX2lkKSlcbiAgICAgICAgfSlcblxuICAgICAgICAvL3NlbGVjdGVkUHJvY2VkdXJlSWRzID0gc2VsZWN0ZWRQcm9jZWR1cmVJZHMuY29uY2F0KHRoaXMucHJvcHMucHJvZmlsZUNvbW1vblByb2NlZHVyZXMpXG5cbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2VcblxuICAgICAgICBpZiAoc2VsZWN0ZWRQcm9jZWR1cmVJZHMubGVuZ3RoID4gMSB8fCBzZWxlY3RlZFByb2NlZHVyZUlkcy5sZW5ndGggPCAxIHx8IChzZWxlY3RlZFByb2NlZHVyZUlkcy5sZW5ndGggPT0gMSAmJiBzZWxlY3RlZFByb2NlZHVyZUlkcy5pbmRleE9mKHByb2NlZHVyZV90b190b2dnbGUucHJvY2VkdXJlX2lkKSA9PSAtMSkpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZVByb2ZpbGVQcm9jZWR1cmVzKHByb2NlZHVyZV90b190b2dnbGUsIGRvY3Rvcl9pZCwgaG9zcGl0YWxfaWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNc2c6IHRydWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHByb2NlZHVyZV9pZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkUHJvY2VkdXJlSWRzXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3AtdG9wLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBUcmVhdG1lbnQocylcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2xvc2UtYmxhY2suc3ZnXCJ9IG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbnNjcmVlbi1zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMuZGF0YSkubWFwKChjYXRlZ29yeSwgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBvcC11bmRlcmxpbmVcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtaGVhZGVyIGFjdGlvbi1zY3JlZW4taGVhZGVyIHBvcC1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+e2NhdGVnb3J5WzBdLmNhdGVnb3J5X25hbWV9PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXJtcy1jb25kaXRpb24tZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9jZWR1cmUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm1hcCgocHJvY2VkdXJlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvY2VkdXJlLWNoZWNrIGNrLWJ4XCIgaHRtbEZvcj17YCR7cHJvY2VkdXJlLnByb2NlZHVyZV9pZH1fYH0+e3Byb2NlZHVyZS5wcm9jZWR1cmVfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17cHJvY2VkdXJlX2lkcy5pbmRleE9mKHByb2NlZHVyZS5wcm9jZWR1cmVfaWQpICE9IC0xID8gdHJ1ZSA6IGZhbHNlfSBpZD17YCR7cHJvY2VkdXJlLnByb2NlZHVyZV9pZH1fYH0gbmFtZT1cImZydWl0LTJcIiB2YWx1ZT1cIlwiIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZURhdGEuYmluZCh0aGlzLCBwcm9jZWR1cmUpfS8qe3RoaXMudG9nZ2xlUHJvY2VkdXJlLmJpbmQodGhpcywgcHJvY2VkdXJlLCB0aGlzLnByb3BzLmRvY3Rvcl9pZCwgdGhpcy5wcm9wcy5ob3NwaXRhbF9pZCl9Ki8gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Byb2NlZHVyZV9pZHMuaW5kZXhPZihwcm9jZWR1cmUucHJvY2VkdXJlX2lkKSAhPSAtMSA/IHRydWUgOiBmYWxzZX0gY2xhc3NOYW1lPVwiaW5zLWNoay1ieFwiIGlkPXtgJHtwcm9jZWR1cmUucHJvY2VkdXJlX2lkfV9gfSBuYW1lPVwiZnJ1aXQtMlwiIHZhbHVlPVwiXCIgb25DaGFuZ2U9e3RoaXMudG9nZ2xlRGF0YS5iaW5kKHRoaXMsIHByb2NlZHVyZSl9e3RoaXMudG9nZ2xlUHJvY2VkdXJlLmJpbmQodGhpcywgcHJvY2VkdXJlLCB0aGlzLnByb3BzLmRvY3Rvcl9pZCwgdGhpcy5wcm9wcy5ob3NwaXRhbF9pZCl9IC8+PGxhYmVsIGh0bWxGb3I9e2Ake3Byb2NlZHVyZS5wcm9jZWR1cmVfaWR9X2B9Pntwcm9jZWR1cmUucHJvY2VkdXJlX25hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhvc3BpdGFsRW5hYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHItcHJpY2VzXCI+4oK5IHtwcm9jZWR1cmUuZGVhbF9wcmljZX08c3BhbiBjbGFzc05hbWU9XCJwci1jdXQtcHJpY2VcIj7igrkge3Byb2NlZHVyZS5tcnB9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwci1wcmljZXNcIj7igrkge3Byb2NlZHVyZS5tcnB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9jZWR1cmVzLWJ0bi1wb3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZnctNTAwXCIgb25DbGljaz17dGhpcy50b2dnbGVGaW5hbC5iaW5kKHRoaXMsIHRoaXMucHJvcHMuZG9jdG9yX2lkLCB0aGlzLnByb3BzLmhvc3BpdGFsX2lkKX0+RG9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBDb250YWN0UG91cFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHsgdmFsaWRhdGVObzogZmFsc2UsIHBob25lTnVtYmVyOiAnJyB9XG5cdH1cblxuXHRpbnB1dEhhbmRsZXIoZSkge1xuXHRcdGlmIChlLnRhcmdldC5uYW1lID09ICdwaG9uZU51bWJlcicpIHtcblx0XHRcdGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA8PSAxMFxuXHRcdFx0XHQ/IGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PSAxMFxuXHRcdFx0XHRcdD8gdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLCB2YWxpZGF0ZU5vOiB0cnVlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQ6IHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0W2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdDogdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRlTm86IHRydWUgfSlcblx0XHR9XG5cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGlmICh0aGlzLnByb3BzLm1vYmlsZU5vKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgcGhvbmVOdW1iZXI6IHRoaXMucHJvcHMubW9iaWxlTm8sIHZhbGlkYXRlTm86IHRydWUgfSlcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHQvLyAgICBcdGlmKG5leHRQcm9wcylcblx0fVxuXG5cdGhhbmRsZUNvbnRpbnVlUHJlc3MoZSkge1xuXHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0dGhpcy5zdWJtaXQoKVxuXHRcdH1cblx0fVxuXG5cdHN1Ym1pdCgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS52YWxpZGF0ZU5vKSB7XG5cdFx0XHR0aGlzLnByb3BzLmdldERvY3Rvcih0aGlzLnN0YXRlLnBob25lTnVtYmVyKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBudW1iZXIgKDEwIGRpZ2l0cylcIiB9KVxuXHRcdH1cblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5XCIgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGV9PjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cFwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvY2xvc2UucG5nXCJ9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCB6SW5kZXg6ICc5JyB9fSBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlfSAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWhlYWRlciB0ZXh0LWNlbnRlciBhY3Rpb24tc2NyZWVuLWhlYWRlclwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBwYWRkaW5nVG9wOiAnMjhweCcgfX0gPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIGNhbmNlbC1hcHBvaW50bWVudC1oZWFkXCI+UGxlYXNlIGVudGVyIHlvdXIgbW9iaWxlIG51bWJlciB0byB2aWV3IGNvbnRhY3QgZGV0YWlscy4gWW91IHdpbGwgb25seSBiZSBhYmxlIHRvIGNhbGwgdGhpcyBudW1iZXIgZnJvbSB0aGUgZW50ZXJlZCBtb2JpbGUgbnVtYmVyLjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbHQtbnctaW5wdXQgcG9saWN5TnVtYmVJbnB1dFwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwibnVtTGFiZWxcIiBodG1sRm9yPVwibWFsZVwiPis5MTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJzbHQtdGV4dC1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIjEwIGRpZ2l0IG1vYmlsZSBudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IG5hbWU9XCJwaG9uZU51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlQ29udGludWVQcmVzcy5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cIm1vYmlsZU51bWJlci1maWxsLWJ0blwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0LmJpbmQodGhpcyl9PlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZ3LTUwMCBwLTMgaW1wdG50LWNsc1wiIHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6ICcjOGE4YThhJ319ID5CeSBwcm9jZWVkaW5nLCB5b3UgaGVyZWJ5IGFncmVlIHRvIHRoZSA8YSBocmVmPVwiL3Rlcm1zXCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9e3sgY29sb3I6IGB2YXIoLS10ZXh0LS1wcmltYXJ5LS1jb2xvcilgIH19ID5FbmQgVXNlciBBZ3JlZW1lbnQ8L2E+IGFuZCA8YSBocmVmPVwiL3ByaXZhY3lcIiB0YXJnZXQ9XCJfYmxhbmtcIiBzdHlsZT17eyBjb2xvcjogYHZhcigtLXRleHQtLXByaW1hcnktLWNvbG9yKWAgfX0gPlByaXZhY3kgUG9saWN5LjwvYT48L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQb3VwVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgUmF0aW5nUHJvZmlsZUNhcmQgZnJvbSAnLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nUHJvZmlsZUNhcmQuanMnXG5pbXBvcnQgQ29tcGxpbWVudExpc3RWaWV3IGZyb20gJy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L0NvbXBsaW1lbnRMaXN0Vmlldy5qcydcbmltcG9ydCBEb2N0b3JQcm9maWxlQ2FyZCBmcm9tICcuLi9jb21tb25zL2RvY3RvclByb2ZpbGVDYXJkJ1xuaW1wb3J0IEFib3V0RG9jdG9yIGZyb20gJy4uL2RvY3RvclByb2ZpbGUvYWJvdXREb2N0b3IvaW5kZXguanMnXG5pbXBvcnQgUHJvZmVzc2lvbmFsR3JhcGggZnJvbSAnLi4vZG9jdG9yUHJvZmlsZS9wcm9mZXNzaW9uYWxHcmFwaC9pbmRleC5qcydcbmltcG9ydCBDbGluaWNTZWxlY3RvciBmcm9tICcuLi9jb21tb25zL2NsaW5pY1NlbGVjdG9yL2luZGV4LmpzJ1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL2Zvb3RlcidcbmltcG9ydCBDb250YWN0UG91cFZpZXcgZnJvbSAnLi4vZG9jdG9yUHJvZmlsZS9Db250YWN0UG9wdXAuanMnXG5cbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uLy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJztcbmltcG9ydCBSZXZpZXdMaXN0IGZyb20gJy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1Jldmlld0xpc3QuanMnXG5pbXBvcnQgUmF0aW5nR3JhcGggZnJvbSAnLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nR3JhcGguanMnXG5pbXBvcnQgUmF0aW5nUmV2aWV3VmlldyBmcm9tICcuLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9yYXRpbmdSZXZpZXdWaWV3LmpzJ1xuaW1wb3J0IFJhdGluZ1N0YXJzIGZyb20gJy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ1N0YXJzJztcbmltcG9ydCBIb3NwaXRhbFBvcFVwIGZyb20gJy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L0hvc3BpdGFsUG9wVXAuanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgSXBkTGVhZEZvcm0gZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9pcGQvaXBkTGVhZEZvcm0uanMnXG5pbXBvcnQgSXBkU2Vjb25kUG9wdXAgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9pcGQvSXBkRG9jdG9yQ2l0eVBvcHVwLmpzJ1xuaW1wb3J0IE5vbkJvb2thYmxlRG9jdG9yIGZyb20gJy4vbm9uQm9va2FibGVEb2N0b3IuanMnXG5pbXBvcnQgVklQUG9wdXAgZnJvbSAnLi92aXBQcm9maWxlUG9wdXAuanMnXG5pbXBvcnQgTm9uSXBkUG9wdXBWaWV3IGZyb20gJy4uLy4uL2NvbW1vbnMvbm9uSXBkUG9wdXAuanMnXG5cbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIERvY3RvclByb2ZpbGVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgbGV0IGZvb3RlckRhdGEgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhKSB7XG4gICAgICAgICAgICBmb290ZXJEYXRhID0gdGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YS5mb290ZXJEYXRhXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmb290ZXJEYXRhLFxuICAgICAgICAgICAgc2VvRnJpZW5kbHk6IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctZHBwJyksXG4gICAgICAgICAgICBzZWxlY3RlZENsaW5pYzogdGhpcy5wcm9wcy5ob3NwaXRhbF9pZCB8fCBcIlwiLFxuICAgICAgICAgICAgaXNfbGl2ZTogZmFsc2UsXG4gICAgICAgICAgICByYW5rOiAwLFxuICAgICAgICAgICAgY29uc3VsdGF0aW9uX2ZlZTogMCxcbiAgICAgICAgICAgIG51bWJlclNob3duOiBcIlwiLFxuICAgICAgICAgICAgc2VhcmNoU2hvd246IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoRGF0YUhpZGRlbjogdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2hpZGVfc2VhcmNoX2RhdGEnKSxcbiAgICAgICAgICAgIG9wZW5Db250YWN0UG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgY2xpbmljUGhvbmVObzoge30sXG4gICAgICAgICAgICBzaG93X2NvbnRhY3Q6ICcnLFxuICAgICAgICAgICAgaXNPcmdhbmljOiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnaG9zcGl0YWxfaWQnKSxcbiAgICAgICAgICAgIGRpc3BsYXlIb3NwaXRhbFJhdGluZ0Jsb2NrOiAwLFxuICAgICAgICAgICAgc2hvd0lwZExlYWRGb3JtOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1NlY29uZFBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIGZpcnN0TGVhZElkOiAnJyxcbiAgICAgICAgICAgIGNsb3NlTm9uQm9va2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1ZpcFBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dOb25JcGRQb3B1cDogcGFyc2VkLnNob3dfcG9wdXAsXG4gICAgICAgICAgICB0b19iZV9mb3JjZToxLFxuICAgICAgICAgICAgaXNfb3JnYW5pY19sYW5kaW5nOmZhbHNlLFxuICAgICAgICAgICAgaXNfbGVhZF9lbmFibGVkOnRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRGb290ZXJEYXRhKHRoaXMucHJvcHMubWF0Y2gudXJsLnNwbGl0KCcvJylbMV0pLnRoZW4oKGZvb3RlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZm9vdGVyRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9vdGVyRGF0YTogZm9vdGVyRGF0YSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5hcHBfZG93bmxvYWRfbGlzdCAmJiAhdGhpcy5wcm9wcy5hcHBfZG93bmxvYWRfbGlzdC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXREb3dubG9hZEFwcEJhbm5lckxpc3QoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcCAmJiByZXNwLmxlbmd0aCAmJiByZXNwWzBdLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RG93bmxvYWRBcHBXaWRnZXQocmVzcFswXS5kYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dEb3dubG9hZEFwcFdpZGdldCh0aGlzLnByb3BzLmFwcF9kb3dubG9hZF9saXN0KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFNob3duOiB0cnVlIH0pXG4gICAgICAgIGxldCB0aW1lX3RvX3Nob3cgPSAyMDAwXG4gICAgICAgIGxldCBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhICYmIHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuZG9jdG9yX2lkKSB7XG4gICAgICAgICAgICBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmRvY3Rvcl9pZFxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdKSB7XG4gICAgICAgICAgICB0aW1lX3RvX3Nob3cgPSAxMDAwXG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1ZpcFBvcHVwOiB0cnVlfSlcbiAgICAgICAgLy8gfSwgdGltZV90b19zaG93KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19vcmdhbmljX2xhbmRpbmc6dHJ1ZX0pXG4gICAgfVxuXG4gICAgc2hvd0Rvd25sb2FkQXBwV2lkZ2V0KGRhdGFMaXN0KSB7XG4gICAgICAgIGxldCBsYW5kaW5nX3BhZ2UgPSBmYWxzZVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cuT05fTEFORElOR19QQUdFKSB7XG4gICAgICAgICAgICBsYW5kaW5nX3BhZ2UgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZG93bmxvYWRBcHBCdXR0b25EYXRhID0ge31cblxuICAgICAgICBpZiAobGFuZGluZ19wYWdlICYmIGRhdGFMaXN0ICYmIGRhdGFMaXN0Lmxlbmd0aCkge1xuXG4gICAgICAgICAgICBkYXRhTGlzdC5tYXAoKGJhbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChiYW5uZXIuaXNlbmFibGVkICYmICh0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcyhiYW5uZXIuZW5kc193aXRoKSB8fCB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcyhiYW5uZXIuc3RhcnRzX3dpdGgpKSkge1xuICAgICAgICAgICAgICAgICAgICBkb3dubG9hZEFwcEJ1dHRvbkRhdGEgPSBiYW5uZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoT2JqZWN0LnZhbHVlcyhkb3dubG9hZEFwcEJ1dHRvbkRhdGEpLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBsZXQgZ3RtVHJhY2sgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb3dubG9hZEFwcEJ1dHRvblZpc2libGUnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb3dubG9hZC1hcHAtYnV0dG9uLXZpc2libGUnLCAnc3RhcnRzX3dpdGgnOiBkb3dubG9hZEFwcEJ1dHRvbkRhdGEuc3RhcnRzX3dpdGggPyBkb3dubG9hZEFwcEJ1dHRvbkRhdGEuc3RhcnRzX3dpdGggOiAnJywgJ2VuZHNfd2l0aCc6IGRvd25sb2FkQXBwQnV0dG9uRGF0YS5lbmRzX3dpdGggPyBkb3dubG9hZEFwcEJ1dHRvbkRhdGEuZW5kc193aXRoIDogJycsICdkZXZpY2UnOiB0aGlzLnByb3BzLmRldmljZV9pbmZvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtVHJhY2sgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1ldGFUYWdzRGF0YShzZW9EYXRhKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiXCJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gXCJcIlxuICAgICAgICBsZXQgc2NoZW1hID0ge31cbiAgICAgICAgaWYgKHNlb0RhdGEpIHtcbiAgICAgICAgICAgIHRpdGxlID0gc2VvRGF0YS50aXRsZSB8fCBcIlwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHNlb0RhdGEuZGVzY3JpcHRpb24gfHwgXCJcIlxuICAgICAgICAgICAgc2NoZW1hID0gc2VvRGF0YS5zY2hlbWFcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIHNjaGVtYSB9XG4gICAgfVxuXG4gICAgc2VsZWN0Q2xpbmljKGNsaW5pY19pZCwgaXNfbGl2ZSwgcmFuaywgY29uc3VsdGF0aW9uX2ZlZSwgc2hvd19jb250YWN0KSB7XG4gICAgICAgIGxldCBjbGluaWNQaG9uZU5vID0gdGhpcy5zdGF0ZS5jbGluaWNQaG9uZU5vXG4gICAgICAgIGlmICghY2xpbmljUGhvbmVOb1tjbGluaWNfaWRdKSB7XG4gICAgICAgICAgICBjbGluaWNQaG9uZU5vW2NsaW5pY19pZF0gPSBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ2xpbmljOiBjbGluaWNfaWQsIGlzX2xpdmUsIHJhbmssIG51bWJlclNob3duOiBcIlwiLCBjb25zdWx0YXRpb25fZmVlOiBjb25zdWx0YXRpb25fZmVlLCBjbGluaWNQaG9uZU5vOiBjbGluaWNQaG9uZU5vLCBzaG93X2NvbnRhY3Q6IHNob3dfY29udGFjdCB9KVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9DbGluaWMoZG9jdG9yX2lkLCBjbGluaWNJZCwgdG9wQm9va05vdykge1xuICAgICAgICBsZXQgcmFuayA9IHRoaXMuc3RhdGUucmFua1xuICAgICAgICBpZiAodG9wQm9va05vdykge1xuICAgICAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGRUb3BCb29rTm93Q2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29wZC10b3AtYm9vay1ub3ctY2xpY2tlZCcsICdzZWxlY3RlZElkJzogY2xpbmljSWQgfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNfbGl2ZSkge1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZEJvb2tOb3dDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3BkLWJvb2stbm93LWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IGNsaW5pY0lkIHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BkQm9va05vd1JhbmsnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtYm9vay1ub3ctcmFuaycsICdyYW5rJzogcmFuayArIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNhdmVQcm9maWxlUHJvY2VkdXJlcyhkb2N0b3JfaWQsIGNsaW5pY0lkKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vYm9va2luZz9kb2N0b3JfaWQ9JHtkb2N0b3JfaWR9Jmhvc3BpdGFsX2lkPSR7Y2xpbmljSWR9YClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7ZG9jdG9yX2lkfS8ke2NsaW5pY0lkfS9ib29rZGV0YWlsc2ApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREb2N0b3JObyhtb2JpbGVObykge1xuICAgICAgICBsZXQgZG9jdG9yX2lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YSAmJiB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmRvY3Rvcl9pZCkge1xuICAgICAgICAgICAgZG9jdG9yX2lkID0gdGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YS5kb2N0b3JfaWRcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdTdWJtaXRQaG9uZU5vJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc3VibWl0LXBob25lLW5vJywgJ2RvY3Rvcl9pZCc6IGRvY3Rvcl9pZCwgXCJob3NwaXRhbF9pZFwiOiB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljLCAnbW9iaWxlTm8nOiBtb2JpbGVOb1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIGxldCBwb3N0RGF0YSA9IHtcbiAgICAgICAgICAgIFwibW9iaWxlXCI6IG1vYmlsZU5vLFxuICAgICAgICAgICAgXCJkb2N0b3JcIjogZG9jdG9yX2lkLFxuICAgICAgICAgICAgXCJob3NwaXRhbFwiOiB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXREb2N0b3JObyhwb3N0RGF0YSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIgJiYgZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgbGV0IGNsaW5pY1Bob25lTm8gPSB0aGlzLnN0YXRlLmNsaW5pY1Bob25lTm9cbiAgICAgICAgICAgICAgICBjbGluaWNQaG9uZU5vW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdID0gZGF0YS5udW1iZXJcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBudW1iZXJTaG93bjogZGF0YS5udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIG9wZW5Db250YWN0UG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjbGluaWNQaG9uZU5vOiBjbGluaWNQaG9uZU5vXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzaG93TnVtYmVyKGlkLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Nob3dOb0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzaG93LW5vLWNsaWNrZWQnLCAnZG9jdG9yX2lkJzogaWQsIFwiaG9zcGl0YWxfaWRcIjogdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jbGluaWNQaG9uZU5vW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdKSB7XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgLyp0aGlzLnByb3BzLmdldERvY3Rvck51bWJlcihpZCwgdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYywgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyICYmIGRhdGEubnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyU2hvd246IGRhdGEubnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkqL1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5Db250YWN0UG9wdXA6IHRydWUgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSh3aGljaCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW3doaWNoXTogIXRoaXMuc3RhdGVbd2hpY2hdIH0pXG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb0RvY3Rvcihkb2N0b3IsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZG9jdG9yLnVybCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke2RvY3Rvci51cmx9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtkb2N0b3IuaWR9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAncmVjb21tZW5kZWREb2N0b3JDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3JlY29tbWVuZGVkLWRvY3Rvci1jbGljaycsICdEb2N0b3JJRCc6IGRvY3Rvci5kb2N0b3JfaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIH1cblxuICAgIHZpZXdBbGxEb2NDbGljayhuZWFyYnlEb2N0b3JzKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd2aWV3QWxsRG9jdG9yc0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndmlldy1hbGwtZG9jdG9ycy1jbGljaydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIHdpbmRvdy5vcGVuKG5lYXJieURvY3RvcnMuZG9jdG9yc191cmwsICdfc2VsZicpO1xuXG4gICAgfVxuXG4gICAgZGlzcGxheV9ob3NwaXRhbF9yYXRpbmdfYmxvY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5SG9zcGl0YWxSYXRpbmdCbG9jazogMSB9KVxuICAgIH1cblxuICAgIGhvc3BpdGFsUG9wVXBTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlIb3NwaXRhbFJhdGluZ0Jsb2NrOiAwIH0pXG4gICAgfVxuXG4gICAgZG93bmxvYWRCdXR0b24oZGF0YSkge1xuICAgICAgICBsZXQgZ3RtVHJhY2sgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Rvd25sb2FkQXBwQnV0dG9uQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Rvd25sb2FkLWFwcC1idXR0b24tY2xpY2tlZCcsICdzdGFydHNfd2l0aCc6IGRhdGEuc3RhcnRzX3dpdGggPyBkYXRhLnN0YXJ0c193aXRoIDogJycsICdlbmRzX3dpdGgnOiBkYXRhLmVuZHNfd2l0aCA/IGRhdGEuZW5kc193aXRoIDogJycsICdkZXZpY2UnOiB0aGlzLnByb3BzLmRldmljZV9pbmZvXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bVRyYWNrIH0pXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGRhdGEuVVJMLCAnX3NlbGYnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uKGlwZEZvcm1QYXJhbXMpIHtcbiAgICAgICAgaWYgKGlwZEZvcm1QYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yUHJvZmlsZUlwZEZvcm1DbG9zZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3ItcHJvZmlsZS1pcGQtZm9ybS1jbG9zZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCBpcGRfZGF0YSA9IHtcbiAgICAgICAgICAgIHNob3dDaGF0OiB0cnVlLFxuICAgICAgICAgICAgaXBkRm9ybVBhcmFtczogaXBkRm9ybVBhcmFtc1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dJcGRMZWFkRm9ybTogZmFsc2UsIHNob3dTZWNvbmRQb3B1cDogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLnByb3BzLmlwZENoYXRWaWV3KHtzaG93SXBkQ2hhdDp0cnVlLCBpcGRGb3JtOiBpcGRGb3JtUGFyYW1zLCBzaG93TWluaW1pemU6dHJ1ZX0pICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2F2ZUxlYWRJZEZvclVwZGF0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5pZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpcnN0TGVhZElkOiByZXNwb25zZS5pZCwgc2hvd1NlY29uZFBvcHVwOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWNvbmRJcGRGb3JtU3VibWl0dGVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1NlY29uZFBvcHVwOiBmYWxzZSB9KVxuICAgIH1cblxuICAgIGNsb3NlTm9uQm9va2FibGVEb2NQb3B1cCgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ05vbkJvb2thYmxlRG9jdG9yQ3Jvc3NDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnTm9uLUJvb2thYmxlLURvY3Rvci1jcm9zcy1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZU5vbkJvb2thYmxlOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlVmlwKCl7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2NQcm9maWxlQ3Jvc3NDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnRG9jdG9yLXByb2ZpbGUtY3Jvc3MtY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93VmlwUG9wdXA6IGZhbHNlfSlcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvVmlwKCl7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2NQcm9maWxlVmlwTmF2aWdhdGlvbicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ0RvY3Rvci1wcm9maWxlLXZpcC1uYXZpZ2F0aW9uJywgJ2RvY3RvcklkJzogdGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWNsdWItZGV0YWlscz9zb3VyY2U9ZG9jdG9yLXByb2ZpbGUtcGFnZSZsZWFkX3NvdXJjZT1kb2N0b3JwYWdlJylcblxuICAgIH1cblxuICAgIGdvbGRDbGlja2VkKGlkKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdOb25Cb29rYWJsZVZpcEdvbGRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbm9uLWJvb2thYmxlLXZpcC1nb2xkLWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IGlkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9ZG9jZ29sZGxpc3RpbmcmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgIH1cblxuICAgIG5vbklwZExlYWRzKHBob25lX251bWJlcil7XG4gICAgICAgIGxldCBsYW5kaW5nX3BhZ2UgPSBmYWxzZVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cuT05fTEFORElOR19QQUdFKSB7XG4gICAgICAgICAgICBsYW5kaW5nX3BhZ2UgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhICYmIHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuZG9jdG9yX2lkKSB7XG4gICAgICAgICAgICBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmRvY3Rvcl9pZFxuICAgICAgICB9XG4gICAgICAgIGxldCBjcml0ZXJpYVN0ciA9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmRpc3BsYXlfbmFtZVxuICAgICAgICBsZXQgaG9zcGl0YWxfaWRcbiAgICAgICAgbGV0IGRpc3BsYXlfdG90YWxfbXJwID0gMFxuICAgICAgICBsZXQgZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCA9IDBcbiAgICAgICAgbGV0IHNlbGVjdGVkX2hvc3BpdGFsID0gdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uaG9zcGl0YWxzLmZpbHRlcih4ID0+IHguaG9zcGl0YWxfaWQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYylcbiAgICAgICAgaWYoc2VsZWN0ZWRfaG9zcGl0YWwubGVuZ3RoKXtcbiAgICAgICAgICAgIGhvc3BpdGFsX2lkID0gc2VsZWN0ZWRfaG9zcGl0YWxbMF0uaG9zcGl0YWxfaWRcbiAgICAgICAgICAgIGRpc3BsYXlfdG90YWxfbXJwID0gcGFyc2VJbnQoc2VsZWN0ZWRfaG9zcGl0YWxbMF0ubXJwKVxuICAgICAgICAgICAgZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudCA9IGRpc3BsYXlfdG90YWxfbXJwIC0gKHBhcnNlSW50KHNlbGVjdGVkX2hvc3BpdGFsWzBdLmRlYWxfcHJpY2UpKVxuICAgICAgICAgICAgaWYoIXNlbGVjdGVkX2hvc3BpdGFsWzBdLmluc3VyYW5jZS5pc191c2VyX2luc3VyZWQgJiYgIXNlbGVjdGVkX2hvc3BpdGFsWzBdLnZpcC5pc192aXBfbWVtYmVyICYmICFzZWxlY3RlZF9ob3NwaXRhbFswXS52aXAuaXNfZ29sZF9tZW1iZXIgJiYgc2VsZWN0ZWRfaG9zcGl0YWxbMF0udmlwLmlzX2VuYWJsZV9mb3JfdmlwKXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5X2RvY3ByaW1lX2Rpc2NvdW50ID0gZGlzcGxheV90b3RhbF9tcnAgLSAoc2VsZWN0ZWRfaG9zcGl0YWxbMF0udmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQgKyBzZWxlY3RlZF9ob3NwaXRhbFswXS52aXAudmlwX2dvbGRfcHJpY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9jaGVjayBpZiBhbnkgdXRtIHRhZyBleGlzdCBpbiB1cmxcbiAgICAgICAgbGV0IGlzVXRtVGFnc0V4aXN0ID0gZmFsc2VcbiAgICAgICAgaWYgKHBhcnNlZC51dG1fc291cmNlIHx8IHBhcnNlZC51dG1fbWVkaXVtIHx8IHBhcnNlZC51dG1fdGVybSB8fCBwYXJzZWQudXRtX2NhbXBhaWduKSB7XG4gICAgICAgICAgICBpc1V0bVRhZ3NFeGlzdCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9KHtwaG9uZV9udW1iZXI6cGhvbmVfbnVtYmVyLGxlYWRfc291cmNlOmAkeyFpc1V0bVRhZ3NFeGlzdCAmJiBsYW5kaW5nX3BhZ2U/J2RvY29yZ2FuaWMnOidkb2NhZHMnfWAsc291cmNlOnBhcnNlZCxsZWFkX3R5cGU6J0RPQ0FEUycsZXhpdHBvaW50X3VybDpgaHR0cDovL2RvY3ByaW1lLmNvbSR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX0vYm9va2luZz9kb2N0b3JfaWQ9JHtkb2N0b3JfaWR9Jmhvc3BpdGFsX2lkPSR7aG9zcGl0YWxfaWR9YCxkb2N0b3JfaWQ6ZG9jdG9yX2lkLGhvc3BpdGFsX2lkOmhvc3BpdGFsX2lkLGRvY3Rvcl9uYW1lOm51bGwsaG9zcGl0YWxfbmFtZTpudWxsLGlzX29yZ2FuaWM6bGFuZGluZ19wYWdlLGFtb3VudF9kaXNjb3VudDogZGlzcGxheV9kb2NwcmltZV9kaXNjb3VudH0pXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCl7XG4gICAgICAgICAgICBkYXRhLnV0bV90YWdzID0gdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHg9PngudHlwZSA9PSBcImNvbW1vbl94dHJhX3RhZ3NcIilbMF0udXRtX3RhZ3NcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmlzaXRvcl9pbmZvID0gR1RNLmdldFZpc2l0b3JJbmZvKClcbiAgICAgICAgICAgIGlmKHZpc2l0b3JfaW5mbyAmJiB2aXNpdG9yX2luZm8udmlzaXRfaWQpe1xuICAgICAgICAgICAgICAgIGRhdGEudmlzaXRfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRfaWRcbiAgICAgICAgICAgICAgICBkYXRhLnZpc2l0b3JfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRvcl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICBsZXQgZ3RtX2RhdGEgPSB7J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2NBZHNEcHBTdWJtaXRDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnZG9jLWFkcy1ocHAtU3VibWl0LWNsaWNrJyxpc19vcmdhbmljOmxhbmRpbmdfcGFnZX1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bV9kYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuc2F2ZUxlYWRQaG5OdW1iZXIocGhvbmVfbnVtYmVyKVxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzX2xlYWRfZW5hYmxlZCAmJiAhU1RPUkFHRS5pc0FnZW50KCkpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOmZhbHNlfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuTm9uSXBkQm9va2luZ0xlYWQoZGF0YSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2xlYWRfZW5hYmxlZDp0cnVlfSlcbiAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgIH1cbiAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iZV9mb3JjZTowfSlcbiAgICB9XG5cbiAgICBjbG9zZUlwZExlYWRQb3B1cChmcm9tKXtcbiAgICAgICAgaWYoZnJvbSl7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2NBZHNEcHBDcm9zc0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdkb2MtYWRzLWhwcC1jcm9zcy1jbGljaydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fYmVfZm9yY2U6MH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBkb2N0b3JfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yXG4gICAgICAgIGxldCBlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyA9IGZhbHNlXG4gICAgICAgIGxldCBzaG93X2RwcF9vcmdhbmljX3BvcHVwID0gZmFsc2VcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEgJiYgdGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YS5kb2N0b3JfaWQpIHtcbiAgICAgICAgICAgIGRvY3Rvcl9pZCA9IHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuZG9jdG9yX2lkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbmFsX3ByaWNlID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5jb25zdWx0YXRpb25fZmVlKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZERvY3RvclByb2NlZHVyZVtkb2N0b3JfaWRdICYmIHRoaXMucHJvcHMuc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmVbZG9jdG9yX2lkXVt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2RvY3Rvcl9pZF1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10uY2F0ZWdvcmllcykge1xuXG4gICAgICAgICAgICBmaW5hbF9wcmljZSArPSBwYXJzZUludCh0aGlzLnByb3BzLnNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlW2RvY3Rvcl9pZF1bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10ucHJpY2UuZGVhbF9wcmljZSkgfHwgMFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlYXJjaF9kYXRhID0gbnVsbFxuICAgICAgICBsZXQgc2VvX3VybCA9IFwiXCJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLnNlYXJjaF9kYXRhKSB7XG4gICAgICAgICAgICBzZWFyY2hfZGF0YSA9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLnNlYXJjaF9kYXRhXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRvY19vcmdhbmljX3ByaWNlID0wXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXSkge1xuICAgICAgICAgICAgZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgPSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5lbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZ1xuICAgICAgICAgICAgZG9jX29yZ2FuaWNfcHJpY2UgPSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5sZWFkX2NvbXBhcmVfYW1vdW50XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5ob3NwaXRhbHMgJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uaG9zcGl0YWxzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uaG9zcGl0YWxzLm1hcCgoaG9zcGl0YWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWhvc3BpdGFsLmluc3VyYW5jZS5pc191c2VyX2luc3VyZWQgJiYgIWhvc3BpdGFsLnZpcC5pc192aXBfbWVtYmVyICYmICFob3NwaXRhbC52aXAuaXNfZ29sZF9tZW1iZXIgJiYgaG9zcGl0YWwudmlwLmlzX2VuYWJsZV9mb3JfdmlwICYmIChob3NwaXRhbC5kaXNjb3VudGVkX3ByaWNlIC0oaG9zcGl0YWwudmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQgKyBob3NwaXRhbC52aXAudmlwX2dvbGRfcHJpY2UpID49IGRvY19vcmdhbmljX3ByaWNlKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93X2RwcF9vcmdhbmljX3BvcHVwID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlb191cmwgPSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS51cmwgfHwgXCJcIlxuICAgICAgICAgICAgaWYgKHNlb191cmwpIHtcbiAgICAgICAgICAgICAgICBzZW9fdXJsID0gXCIvXCIgKyBzZW9fdXJsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lYXJieURvY3RvcnMgPSB7fVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0gJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uZG9jdG9ycyAmJiBPYmplY3Qua2V5cyh0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5kb2N0b3JzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5lYXJieURvY3RvcnMgPSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5kb2N0b3JzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMgJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0gJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uaG9zcGl0YWxzICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmhvc3BpdGFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmhvc3BpdGFscy5tYXAoKGhvc3BpdGFsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhvc3BpdGFsLmhvc3BpdGFsX2lkID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBob3NwaXRhbC5pbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgaG9zcGl0YWwuaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy9DaGVjayBpZiByZXZpZXdzIGV4aXN0IGZvciBkb2N0b3IsIGlmIG5vdCB0aGVuIHBpY2sgdGhlIGdvb2dsZSByZXZpZXdzIGZvciB0aGF0IGRvY3Rvci9ob3NwaXRhbFxuICAgICAgICBsZXQgZ29vZ2xlX3JhdGluZyA9IHt9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXSAmJiAhdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uZGlzcGxheV9yYXRpbmdfd2lkZ2V0KSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5nb29nbGVfcmF0aW5nICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmdvb2dsZV9yYXRpbmdbdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10gJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uZ29vZ2xlX3JhdGluZ1t0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5nb29nbGVfcmF0aW5nICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmdvb2dsZV9yYXRpbmdbdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10uZ29vZ2xlX3JhdGluZy5sZW5ndGggJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uZ29vZ2xlX3JhdGluZ1t0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5nb29nbGVfcmF0aW5nX2dyYXBoICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmdvb2dsZV9yYXRpbmdbdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10uZ29vZ2xlX3JhdGluZ19ncmFwaC5hdmdfcmF0aW5nICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmdvb2dsZV9yYXRpbmdbdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY10uZ29vZ2xlX3JhdGluZ19ncmFwaC5yYXRpbmdfY291bnQpIHtcblxuICAgICAgICAgICAgICAgIGdvb2dsZV9yYXRpbmcucmF0aW5nID0gdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uZ29vZ2xlX3JhdGluZ1t0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXS5nb29nbGVfcmF0aW5nXG4gICAgICAgICAgICAgICAgZ29vZ2xlX3JhdGluZy5yYXRpbmdfZ3JhcGggPSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5nb29nbGVfcmF0aW5nW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdLmdvb2dsZV9yYXRpbmdfZ3JhcGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhdmdSYXRpbmcgPSAnJ1xuICAgICAgICBsZXQgcmF0aW5nQ291bnQgPSAnJ1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0gJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0ucmF0aW5nX2dyYXBoICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLnJhdGluZ19ncmFwaC5hdmdfcmF0aW5nICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLnJhdGluZ19ncmFwaC5yYXRpbmdfY291bnQpIHtcbiAgICAgICAgICAgIGF2Z1JhdGluZyA9IHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLnJhdGluZ19ncmFwaC5hdmdfcmF0aW5nO1xuICAgICAgICAgICAgcmF0aW5nQ291bnQgPSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5yYXRpbmdfZ3JhcGgucmF0aW5nX2NvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNob3dfZ29vZ2xlX3JhdGluZyA9IE9iamVjdC52YWx1ZXMoZ29vZ2xlX3JhdGluZykubGVuZ3RoID4gMFxuXG4gICAgICAgIC8vR2V0IFNlbGVjdGVkIENsaW5pYy9Ib3NwaXRhbCBOYW1lXG4gICAgICAgIGxldCBzZWxlY3RlZENsaW5pY05hbWUgPSAnJ1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5ob3NwaXRhbHMgJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uaG9zcGl0YWxzLmxlbmd0aCAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljKSB7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZENsaW5pY0luZm8gPSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5ob3NwaXRhbHMuZmlsdGVyKHggPT4geC5ob3NwaXRhbF9pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljKVxuXG4gICAgICAgICAgICBzZWxlY3RlZENsaW5pY05hbWUgPSBzZWxlY3RlZENsaW5pY0luZm8ubGVuZ3RoID8gc2VsZWN0ZWRDbGluaWNJbmZvWzBdLmhvc3BpdGFsX25hbWUgOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxhbmRpbmdfcGFnZSA9IGZhbHNlXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdy5PTl9MQU5ESU5HX1BBR0UpIHtcbiAgICAgICAgICAgIGxhbmRpbmdfcGFnZSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkb3dubG9hZEFwcEJ1dHRvbkRhdGEgPSB7fVxuXG4gICAgICAgIGlmIChsYW5kaW5nX3BhZ2UgJiYgdGhpcy5wcm9wcy5hcHBfZG93bmxvYWRfbGlzdCAmJiB0aGlzLnByb3BzLmFwcF9kb3dubG9hZF9saXN0Lmxlbmd0aCkge1xuXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFwcF9kb3dubG9hZF9saXN0Lm1hcCgoYmFubmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJhbm5lci5pc2VuYWJsZWQgJiYgKHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKGJhbm5lci5lbmRzX3dpdGgpIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKGJhbm5lci5zdGFydHNfd2l0aCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvd25sb2FkQXBwQnV0dG9uRGF0YSA9IGJhbm5lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgLy9jaGVjayBpZiBhbnkgdXRtIHRhZyBleGlzdCBpbiB1cmxcbiAgICAgICAgbGV0IGlzVXRtVGFnc0V4aXN0ID0gZmFsc2VcbiAgICAgICAgaWYgKHBhcnNlZC51dG1fc291cmNlIHx8IHBhcnNlZC51dG1fbWVkaXVtIHx8IHBhcnNlZC51dG1fdGVybSB8fCBwYXJzZWQudXRtX2NhbXBhaWduKSB7XG4gICAgICAgICAgICBpc1V0bVRhZ3NFeGlzdCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvd0ZvcmNlZFBvcHVwID0gIWlzVXRtVGFnc0V4aXN0ICYmIGxhbmRpbmdfcGFnZSAmJiB0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5ICYmIGRvY3Rvcl9pZCAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5pc19jb25nb3QgJiYgdGhpcy5zdGF0ZS5zaG93SXBkTGVhZEZvcm0gJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0ucG90ZW50aWFsX2lwZCAmJiAhdGhpcy5zdGF0ZS5pc19saXZlXG4gICAgICAgIHNob3dGb3JjZWRQb3B1cCA9IGZhbHNlXG4gICAgICAgIGxldCBpc1Nlb1ZhbGlkPSB0cnVlXG4gICAgICAgIGlmKENPTkZJRy5TRU9fRlJJRU5ETFlfSE9TUElUQUxfSURTICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMgJiYgIENPTkZJRy5TRU9fRlJJRU5ETFlfSE9TUElUQUxfSURTLmluZGV4T2YocGFyc2VJbnQodGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYykpPiAtMSl7XG4gICAgICAgICAgICBpc1Nlb1ZhbGlkID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvd1ZpcFBvcHVwID0gdGhpcy5zdGF0ZS5zaG93VmlwUG9wdXBcbiAgICAgICAgaWYobmVhcmJ5RG9jdG9ycyAmJiBPYmplY3Qua2V5cyhuZWFyYnlEb2N0b3JzKS5sZW5ndGgpe1xuICAgICAgICAgICAgIHNob3dWaXBQb3B1cCA9IHNob3dWaXBQb3B1cCAmJiB0aGlzLnN0YXRlLmNsb3NlTm9uQm9va2FibGVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIHNob3dTZWFyY2g9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0gJiYgcGFyc2VkLnNob3dQb3B1cCAmJiB0aGlzLnN0YXRlLnNob3dJcGRMZWFkRm9ybSAmJiB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdy5PTl9MQU5ESU5HX1BBR0UpIHx8IHNob3dGb3JjZWRQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXBkTGVhZEZvcm0gc3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uPXt0aGlzLnN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbi5iaW5kKHRoaXMpfSB7Li4udGhpcy5wcm9wc30gaG9zcGl0YWxfbmFtZT17c2VsZWN0ZWRDbGluaWNOYW1lfSBob3NwaXRhbF9pZD17dGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY30gZG9jdG9yX25hbWU9e3RoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLm5hbWUgPyB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5uYW1lIDogJyd9IGZvcm1Tb3VyY2U9J0RvY3RvckJvb2tpbmdQYWdlJyBzYXZlTGVhZElkRm9yVXBkYXRpb249e3RoaXMuc2F2ZUxlYWRJZEZvclVwZGF0aW9uLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0gJiYgdGhpcy5zdGF0ZS5zaG93U2Vjb25kUG9wdXAgJiYgcGFyc2VkLmdldF9mZWVkYmFjayAmJiBwYXJzZWQuZ2V0X2ZlZWRiYWNrID09ICcxJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXBkU2Vjb25kUG9wdXAgey4uLnRoaXMucHJvcHN9IGZpcnN0TGVhZElkPXt0aGlzLnN0YXRlLmZpcnN0TGVhZElkfSBhbGxfZG9jdG9ycz17W119IGFsbF9jaXRpZXM9e3RoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmFsbF9jaXRpZXMgPyB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5hbGxfY2l0aWVzIDogW119IGRvY3RvclByb2ZpbGVQYWdlPXt0cnVlfSBzZWNvbmRJcGRGb3JtU3VibWl0dGVkPXt0aGlzLnNlY29uZElwZEZvcm1TdWJtaXR0ZWQuYmluZCh0aGlzKX0gaG9zcGl0YWxfbmFtZT17c2VsZWN0ZWRDbGluaWNOYW1lfSBob3NwaXRhbF9pZD17dGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY30gZG9jdG9yX25hbWU9e3RoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLm5hbWUgPyB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5uYW1lIDogJyd9IGZvcm1Tb3VyY2U9J0RvY3RvckJvb2tpbmdQYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5lYXJieURvY3RvcnMgJiYgT2JqZWN0LmtleXMobmVhcmJ5RG9jdG9ycykubGVuZ3RoICYmICF0aGlzLnN0YXRlLmNsb3NlTm9uQm9va2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPE5vbkJvb2thYmxlRG9jdG9yIHsuLi50aGlzLnByb3BzfSBjbG9zZU5vbkJvb2thYmxlRG9jUG9wdXA9e3RoaXMuY2xvc2VOb25Cb29rYWJsZURvY1BvcHVwLmJpbmQodGhpcyl9IG5lYXJieURvY3RvcnM9e25lYXJieURvY3RvcnN9IG5hdmlnYXRlVG9Eb2N0b3I9e3RoaXMubmF2aWdhdGVUb0RvY3Rvci5iaW5kKHRoaXMpfSBkZXRhaWxzPXt0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvKih0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cCA9PSAxIHx8IHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwID09IDIpICYmIHRoaXMuc3RhdGUudG9fYmVfZm9yY2UgPT0gMT9cbiAgICAgICAgICAgICAgICAgICAgPE5vbklwZFBvcHVwVmlldyB7Li4udGhpcy5wcm9wc30gbm9uSXBkTGVhZHM9e3RoaXMubm9uSXBkTGVhZHMuYmluZCh0aGlzKX0gY2xvc2VJcGRMZWFkUG9wdXAgPSB7dGhpcy5jbG9zZUlwZExlYWRQb3B1cC5iaW5kKHRoaXMpfSBpc19mb3JjZT17dGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXB9IGlzX2RwcD17dHJ1ZX0gZG9jdG9yX2lkPXtkb2N0b3JfaWR9IGhvc3BpdGFsX2lkPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljfS8+XG4gICAgICAgICAgICAgICAgICAgIDonJyovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLypzaG93X2RwcF9vcmdhbmljX3BvcHVwICYmIHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkgJiYgZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgJiYgbGFuZGluZ19wYWdlICYmIHRoaXMuc3RhdGUuaXNfb3JnYW5pY19sYW5kaW5nICYmIHRoaXMuc3RhdGUudG9fYmVfZm9yY2UgPT0gMSAmJiAhaXNVdG1UYWdzRXhpc3Q/XG4gICAgICAgICAgICAgICAgICAgICA8Tm9uSXBkUG9wdXBWaWV3IHsuLi50aGlzLnByb3BzfSBub25JcGRMZWFkcz17dGhpcy5ub25JcGRMZWFkcy5iaW5kKHRoaXMpfSBjbG9zZUlwZExlYWRQb3B1cCA9IHt0aGlzLmNsb3NlSXBkTGVhZFBvcHVwLmJpbmQodGhpcyl9IGlzX2ZvcmNlPXt0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cH0gaXNfZHBwPXt0cnVlfSBkb2N0b3JfaWQ9e2RvY3Rvcl9pZH0gaXNfb3JnYW5pYz17ZmFsc2V9IGhvc3BpdGFsX2lkPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljfS8+XG4gICAgICAgICAgICAgICAgICAgIDonJyovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb24gYnJlYWRjcnVtYi1tcmduXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXSAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5icmVhZGNydW1iICYmIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmJyZWFkY3J1bWIubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC0xMiBtcm5nLXRvcC0xMiBkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtcmItMTAgYnJlYWRjcnVtYi1saXN0IGJyZWFkY3J1bWItbGlzdC11bFwiIHN0eWxlPXt7ICd3b3JkQnJlYWsnOiAnYnJlYWtXb3JkJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0gJiYgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uYnJlYWRjcnVtYiAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5icmVhZGNydW1iLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uYnJlYWRjcnVtYi5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5icmVhZGNydW1iLmxlbmd0aCAtIDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGEgaHJlZj17ZGF0YS51cmx9IHRpdGxlPXtkYXRhLmxpbmtfdGl0bGUgfHwgZGF0YS50aXRsZX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKChrZXkgPT0gMCB8fCBrZXkgPT0gdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uYnJlYWRjcnVtYi5sZW5ndGggLSAxKSA/IGRhdGEudXJsIDogYC8ke2RhdGEudXJsfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PSAwIHx8IGtleSA9PSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5icmVhZGNydW1iLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZSBicmVhZGNydW1iLWNvbG9yZWQtdGl0bGVcIj57ZGF0YS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGgyIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZSBkLWlubGluZS1ibGNrXCI+e2RhdGEudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSAhPSB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5icmVhZGNydW1iLmxlbmd0aCAtIDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmVhZGNydW1iLWFycm93XCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHItcHJvZmlsZS1zY3JlZW5cIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXBhcnNlZC5zaG93UG9wdXAgJiYgZG93bmxvYWRBcHBCdXR0b25EYXRhICYmIE9iamVjdC52YWx1ZXMoZG93bmxvYWRBcHBCdXR0b25EYXRhKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZG93bmxvYWRCdG5cIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9e3RoaXMuZG93bmxvYWRCdXR0b24uYmluZCh0aGlzLCBkb3dubG9hZEFwcEJ1dHRvbkRhdGEpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHdubEFwcEJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5kZXZpY2VfaW5mbyA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5wcm9wcy5kZXZpY2VfaW5mby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdpcGhvbmUnKSB8fCB0aGlzLnByb3BzLmRldmljZV9pbmZvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2lwYWQnKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTNweCcsIG1hcmdpblJpZ2h0OiAnNXB4JywgbWFyZ2luVG9wOiAnLTFweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvYXBwbDEuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGltZyBzdHlsZT17eyB3aWR0aDogJzEzcHgnLCBtYXJnaW5SaWdodDogJzVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvYW5kcjEuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWQgQXBwXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldE1ldGFUYWdzRGF0YSh0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5zZW8pLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uc2VvKS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7c2VvX3VybCB8fCB0aGlzLnByb3BzLm1hdGNoLnVybH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWE6IHRoaXMuZ2V0TWV0YVRhZ3NEYXRhKHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLnNlbykuc2NoZW1hXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gbm9JbmRleD17IXRoaXMuc3RhdGUuc2VvRnJpZW5kbHkgfHwgIWlzU2VvVmFsaWR9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNfbGl2ZSAmJiBsYW5kaW5nX3BhZ2UgJiYgdGhpcy5zdGF0ZS5zZW9GcmllbmRseSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRvYy10b3AtYm9vay1idG5cIiBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlVG9DbGluaWMuYmluZCh0aGlzLCBkb2N0b3JfaWQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWMsIHRydWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29rIE5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogSG9zcGl0YWwgU2VsZWN0aW9uIEJsb2NrICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXlIb3NwaXRhbFJhdGluZ0Jsb2NrID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvc3BpdGFsUG9wVXAgey4uLnRoaXMucHJvcHN9IGRvY3Rvcl9kZXRhaWxzPXt0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXX0gcG9wVXBTdGF0ZT17dGhpcy5ob3NwaXRhbFBvcFVwU3RhdGUuYmluZCh0aGlzKX0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS51bnJhdGVkX2FwcG9pbnRtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxSYXRpbmdQcm9maWxlQ2FyZCB7Li4udGhpcy5wcm9wc30gZGV0YWlscz17dGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0udW5yYXRlZF9hcHBvaW50bWVudH0gLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1ydC0xMCBjdC1wcm9maWxlIHNraW4td2hpdGUgYm9yZGVyLWJvdHRvbS1yYWRpb3VzIGdvbGQtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF0uaXNfZ29sZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJnb2xkLWNhcmQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZ29sZC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvY3RvclByb2ZpbGVDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzPXt0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldERvY3Rvck51bWJlcj17dGhpcy5wcm9wcy5nZXREb2N0b3JOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmREb2NzPXtuZWFyYnlEb2N0b3JzLnJlc3VsdCAmJiBuZWFyYnlEb2N0b3JzLnJlc3VsdC5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3QWxsRG9jQ2xpY2s9e3RoaXMudmlld0FsbERvY0NsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWFyYnlEb2N0b3JzPXtuZWFyYnlEb2N0b3JzID8gbmVhcmJ5RG9jdG9ycyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZW9GcmllbmRseT17dGhpcy5zdGF0ZS5zZW9GcmllbmRseX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3JnYW5pYz17dGhpcy5zdGF0ZS5pc09yZ2FuaWN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVhcmJ5RG9jdG9ycyAmJiBPYmplY3Qua2V5cyhuZWFyYnlEb2N0b3JzKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2UtY29udGVudCBwZC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWFyYnlEb2N0b3JzLnJlc3VsdCAmJiBuZWFyYnlEb2N0b3JzLnJlc3VsdC5sZW5ndGggJiYgbmVhcmJ5RG9jdG9ycy5zcGVjaWFsaXphdGlvbnMgJiYgbmVhcmJ5RG9jdG9ycy5zcGVjaWFsaXphdGlvbnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC10aXRsZSBtYi1ybXYgcC1yZWxhdGl2ZSBkb2NzbGlkZUhlYWRBbGlnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Qm9vayBleHBlcmllbmNlZCB7bmVhcmJ5RG9jdG9ycy5zcGVjaWFsaXphdGlvbnNbMF0ubmFtZX1zIG5lYXIgeW91PHNwYW4gY2xhc3NOYW1lPVwiZG9jU2xpZGVTdWJIZWFkaW5nXCI+R2V0IGV4Y2x1c2l2ZSBEb2NwcmltZSBkaXNjb3VudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWFyYnlEb2N0b3JzLmNvdW50ID49IDEgJiYgbmVhcmJ5RG9jdG9ycy5kb2N0b3JzX3VybCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvY1NsaWRldmlld0FsbFwiIG9uQ2xpY2s9eygpID0+IHRoaXMudmlld0FsbERvY0NsaWNrKG5lYXJieURvY3RvcnMpfT5WaWV3IEFsbCA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2Fycm93UmlnaHQuc3ZnXCJ9IC8+PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudCBwZC0wIGJvcmRlci1ib3R0b20tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY1Njcm9sbFNsaWRlckNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWFyYnlEb2N0b3JzLnJlc3VsdCAmJiBuZWFyYnlEb2N0b3JzLnJlc3VsdC5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lYXJieURvY3RvcnMucmVzdWx0Lm1hcCgoZG9jdG9yLCBpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkb2NTbGlkZUNhcmRcIiBrZXk9e2lkfSBzdHlsZT17eyBjdXJzb3I6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jU2xpZGVIZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHsgICAvLyBSQVRJTkcgQ09ERSBCRUxPVywgRE9OVCBERUxFVEVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLnJhdGluZ19ncmFwaC5hdmdfcmF0aW5nID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlRG9jUmF0aW5nXCI+e2RvY3Rvci5yYXRpbmdfZ3JhcGguYXZnX3JhdGluZ30gPGltZyBzdHlsZT17eyB3aWR0aDogJzE0cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NsaWRlZG9jcmF0aW5nLnN2Z1wifSAvPjwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtkb2N0b3IubmFtZX0gaGFzX2ltYWdlPXshIWRvY3Rvci50aHVtYm5haWx9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1kcyBzbGlkZURvY01haW5JbWdcIiBzdHlsZT17eyB3aWR0aDogNjAsIGhlaWdodDogNjAsIGZvbnRTaXplOiAnMnJlbScgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsdHItdXNyLWltYWdlIGltZy1yb3VuZCBzbGlkZURvY01haW5JbWdcIiBzcmM9e2RvY3Rvci50aHVtYm5haWx9IGFsdD17ZG9jdG9yLmRpc3BsYXlfbmFtZX0gdGl0bGU9e2RvY3Rvci5kaXNwbGF5X25hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVEb2NDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IudXJsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvJHtkb2N0b3IudXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm5hdmlnYXRlVG9Eb2N0b3IoZG9jdG9yLCBlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2xpZGVEb2NOYW1lXCI+e2RvY3Rvci5kaXNwbGF5X25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIHN0eWxlPXt7IGN1cnNvcjogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNsaWRlRG9jTmFtZVwiPntkb2N0b3IuZGlzcGxheV9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2xpZGVEb2NFeHBcIj57ZG9jdG9yLmV4cGVyaWVuY2VfeWVhcnN9IFllYXJzIG9mIEV4cGVyaWVuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IucXVhbGlmaWNhdGlvbnMgJiYgZG9jdG9yLnF1YWxpZmljYXRpb25zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbGlkZURvY2RlZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLnF1YWxpZmljYXRpb25zLm1hcCgocXVhbGlmaWNhdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2luZGV4fT57cXVhbGlmaWNhdGlvbi5xdWFsaWZpY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuaG9zcGl0YWxzICYmIGRvY3Rvci5ob3NwaXRhbHMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNsaWRlRG9jRXhwXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiA1IH19ID57ZG9jdG9yLmhvc3BpdGFsc1swXS5ob3NwaXRhbF9uYW1lfTwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkb2N0b3IuaG9zcGl0YWxzWzBdLmlzX2dvbGRfbWVtYmVyIHx8IGRvY3Rvci5ob3NwaXRhbHNbMF0uaXNfdmlwX21lbWJlciApICYmIGRvY3Rvci5ob3NwaXRhbHNbMF0uY292ZXJfdW5kZXJfdmlwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVEb2NQcmljZSBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmhvc3BpdGFsc1swXS5pc19nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVOYW1lUHJjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vbi1kb2MtdmlwLWljbyBpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlTmFtZVByY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZU5hbWVQcmNcIj7igrkge2RvY3Rvci5ob3NwaXRhbHNbMF0udmlwX2NvbnZlbmllbmNlX2Ftb3VudCArIGRvY3Rvci5ob3NwaXRhbHNbMF0udmlwX2dvbGRfcHJpY2V9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInNsaWRlQ3V0UHJjXCI+4oK5IHtkb2N0b3IubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkb2N0b3IuZGlzY291bnRlZF9wcmljZSAmJiBkb2N0b3IubXJwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVEb2NQcmljZSBtYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVOYW1lUHJjXCI+4oK5IHtkb2N0b3IuZGlzY291bnRlZF9wcmljZX08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwic2xpZGVDdXRQcmNcIj7igrkge2RvY3Rvci5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuaG9zcGl0YWxzWzBdLmVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAhZG9jdG9yLmhvc3BpdGFsc1swXS5pc19nb2xkX21lbWJlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgIWRvY3Rvci5ob3NwaXRhbHNbMF0uaXNfdmlwX21lbWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBkb2N0b3IuZGlzY291bnRlZF9wcmljZT4oZG9jdG9yLmhvc3BpdGFsc1swXS52aXBfY29udmVuaWVuY2VfYW1vdW50ICsgZG9jdG9yLmhvc3BpdGFsc1swXS52aXBfZ29sZF9wcmljZSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGRvY3Rvci5ob3NwaXRhbHNbMF0uaG9zcF9pc19nb2xkP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1wcmMtY3QgaG9tZS1zY3JlZW5nb2xkcHJpY2UgbWItMlwiIG9uQ2xpY2s9e3RoaXMuZ29sZENsaWNrZWQuYmluZCh0aGlzLGRvY3Rvci5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJnbGQtY2QtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfS8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2xkLXAtcmNcIj5QcmljZTwvcD4gPHNwYW4gY2xhc3NOYW1lPVwiZ2xkLXJhdGUtbGZcIj7igrkge2RvY3Rvci5ob3NwaXRhbHNbMF0udmlwX2NvbnZlbmllbmNlX2Ftb3VudCArIGRvY3Rvci5ob3NwaXRhbHNbMF0udmlwX2dvbGRfcHJpY2V9PC9zcGFuPjxpbWcgc3R5bGU9e3t0cmFuc2Zvcm06ICdyb3RhdGUoLTkwZGVnKScsIHdpZHRoOiAnMTBweCcsIG1hcmdpbjonMHB4IDEwcHggMHB4IDBweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkQm9va0J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm5hdmlnYXRlVG9Eb2N0b3IoZG9jdG9yLCBlKX0+Qm9vayBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lYXJieURvY3RvcnMuY291bnQgPiAxICYmIG5lYXJieURvY3RvcnMuc3BlY2lhbGl6YXRpb25zICYmIG5lYXJieURvY3RvcnMuc3BlY2lhbGl6YXRpb25zLmxlbmd0aCAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzICE9ICcnICYmIG5lYXJieURvY3RvcnMuZG9jdG9yc191cmwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jU2xpZGVDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jU2Nyb2xsU2VhcmNoQWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3ZhbGwucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlZpZXcgYWxsIHtuZWFyYnlEb2N0b3JzLmNvdW50fSB7bmVhcmJ5RG9jdG9ycy5zcGVjaWFsaXphdGlvbnNbMF0ubmFtZX08YnIgLz4gaW4ge3RoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzc30gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZS1jb250ZW50IHBkLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5hYm91dF93ZWIgPyA8QWJvdXREb2N0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscz17dGhpcy5wcm9wcy5ET0NUT1JTW2RvY3Rvcl9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdlLWNvbnRlbnQgcGQtMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdLmhvc3BpdGFscyAmJiB0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXS5ob3NwaXRhbHMubGVuZ3RoKSA/IDxDbGluaWNTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzPXt0aGlzLnByb3BzLkRPQ1RPUlNbZG9jdG9yX2lkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9IGRvY3RvcklkPXtkb2N0b3JfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdENsaW5pYz17dGhpcy5zZWxlY3RDbGluaWMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDbGluaWM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9mZXNzaW9uYWxHcmFwaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM9e3RoaXMucHJvcHMuRE9DVE9SU1tkb2N0b3JfaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHRoaXMgb25lIGlzIHJhdGluZyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtTVE9SQUdFLmNoZWNrQXV0aCgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWNvbnRlbnQgcmF0ZWNhcmRCcmRyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGVVckRvY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJhdGUgeW91ciBEb2N0b3IgaGVyZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZGlzcGxheV9ob3NwaXRhbF9yYXRpbmdfYmxvY2t9PlJhdGUgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHRoaXMgb25lIGlzIHJhdGluZyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmdSYXRpbmcgPj0gNCB8fCByYXRpbmdDb3VudCA+PSA1ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ1Jldmlld1ZpZXcgaWQ9e2RvY3Rvcl9pZH0gY29udGVudF90eXBlPXsyfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzaG93X2dvb2dsZV9yYXRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGUgbWItcm12XCI+UGF0aWVudCBGZWVkYmFjayA8YSBjbGFzc05hbWU9XCJyYXRlVmlld0FsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudCBwZC0wIGJvcmRlci1ib3R0b20tcGFuZWwgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZ2xlUmV2aWV3Y2FyZFwiIHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3Bvd2VyZWRfYnlfZ29vZ2xlX29uX3doaXRlLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2xpbmljTmFtZSA/IDxwPlJhdGluZ3MgZm9yPHNwYW4+e3NlbGVjdGVkQ2xpbmljTmFtZX08L3NwYW4+PC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWQtYmFjay1jb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBtYXJnaW5Cb3R0b206IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZV9yYXRpbmcucmF0aW5nX2dyYXBoICYmIGdvb2dsZV9yYXRpbmcucmF0aW5nX2dyYXBoLmF2Z19yYXRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmdTdGFycyBhdmVyYWdlX3JhdGluZz17Z29vZ2xlX3JhdGluZy5yYXRpbmdfZ3JhcGguYXZnX3JhdGluZ30gd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMTJweFwiIGp1c3RpZnlDZW50ZXI9e3RydWV9IC8+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWRiYWNrLXJhdGluZy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZWVkYmFjay1yYXRlXCI+e2dvb2dsZV9yYXRpbmcucmF0aW5nX2dyYXBoLmF2Z19yYXRpbmd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmVlZGJhY2stcmF0ZS1zdGF0dXNcIj57Z29vZ2xlX3JhdGluZy5yYXRpbmdfZ3JhcGgucmF0aW5nX2NvdW50fSByYXRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VmlwUG9wdXAgJiYgPFZJUFBvcHVwIHRvZ2dsZT17KCk9PnRoaXMudG9nZ2xlVmlwKCl9IG5hdmlnYXRlVG9WaXA9eygpPT50aGlzLm5hdmlnYXRlVG9WaXAoKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNfbGl2ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwcC1idG4tZGl2IGZpeGVkIGhvcml6b250YWwgYm90dG9tIHN0aWNreS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5zZWFyY2hEYXRhSGlkZGVuICYmIHNlYXJjaF9kYXRhICYmIHNlYXJjaF9kYXRhLnJlc3VsdF9jb3VudCAmJiBzZWFyY2hfZGF0YS50aXRsZSAmJiBzZWFyY2hfZGF0YS51cmwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHBwLWJ0bi12aWV3XCIgaHJlZj17Jy8nICsgc2VhcmNoX2RhdGEudXJsfSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtzZWFyY2hfZGF0YS51cmx9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd2aWV3TW9yZURvY3RvcnNDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ZpZXctbW9yZS1kb2N0b3JzLWNsaWNrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmlnaHQtb3JhbmdlLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntgVmlldyAke3NlYXJjaF9kYXRhLnJlc3VsdF9jb3VudH0gJHtzZWFyY2hfZGF0YS50aXRsZX1gfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcHAtYnRuLWJvb2sgZHBwLWJ0bi1ib29rLWN1c3RvbVwiIG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUb0NsaW5pYy5iaW5kKHRoaXMsIGRvY3Rvcl9pZCwgdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pYywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHA+e2BCb29rIE5vdyAo4oK5ICR7ZmluYWxfcHJpY2V9KWB9PC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5Cb29rIE5vdzwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIHx8IHRydWU/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9XCJjcC1hdXRvXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnOHB4JyB9fT4qQ291cG9uIGF1dG8gYXBwbGllZCBvbiBjaGVja291dDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHBwLWJ0bi1kaXYgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gc3RpY2t5LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnNlYXJjaERhdGFIaWRkZW4gJiYgc2VhcmNoX2RhdGEgJiYgc2VhcmNoX2RhdGEucmVzdWx0X2NvdW50ICYmIHNlYXJjaF9kYXRhLnRpdGxlICYmIHNlYXJjaF9kYXRhLnVybCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcHAtYnRuLXZpZXdcIiBocmVmPXsnLycgKyBzZWFyY2hfZGF0YS51cmx9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3NlYXJjaF9kYXRhLnVybH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3ZpZXdNb3JlRG9jdG9yc0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndmlldy1tb3JlLWRvY3RvcnMtY2xpY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9yaWdodC1vcmFuZ2Uuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2BWaWV3ICR7c2VhcmNoX2RhdGEucmVzdWx0X2NvdW50fSAke3NlYXJjaF9kYXRhLnRpdGxlfWB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xpbmljUGhvbmVOb1t0aGlzLnN0YXRlLnNlbGVjdGVkQ2xpbmljXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImRwcC1idG4tZGl2IGZpeGVkIGhvcml6b250YWwgYm90dG9tIHN0aWNreS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgdGVsOiR7dGhpcy5zdGF0ZS5jbGluaWNQaG9uZU5vW3RoaXMuc3RhdGUuc2VsZWN0ZWRDbGluaWNdfWB9IGNsYXNzTmFtZT1cImRwcC1idG4tYm9vayBkLWxnLW5vbmUgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpbWcgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JywgbWFyZ2luUmlnaHQ6ICc0cHgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbGVmdDogJy0zcHgnLCBib3R0b206ICctMnB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYWxsLWljby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNsaW5pY1Bob25lTm9bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY119PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwcC1idG4tYm9vayBkLWxnLWZsZXggZC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmNsaW5pY1Bob25lTm9bdGhpcy5zdGF0ZS5zZWxlY3RlZENsaW5pY119PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc3RhdGUuc2hvd19jb250YWN0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRwcC1idG4tYm9va1wiIG9uQ2xpY2s9e3RoaXMuc2hvd051bWJlci5iaW5kKHRoaXMsIGRvY3Rvcl9pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5WaWV3IENvbnRhY3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImRwcC1idG4tYm9va1wiIG9uQ2xpY2s9e3RoaXMuc2hvd051bWJlci5iaW5kKHRoaXMsIGRvY3Rvcl9pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm51bWJlclNob3duP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnMjBweCcsIG1hcmdpblJpZ2h0OiAnNHB4JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGxlZnQ6ICctM3B4JywgYm90dG9tOiAnLTJweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jYWxsLWljby5zdmdcIn0gLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH17dGhpcy5zdGF0ZS5udW1iZXJTaG93biB8fCBcIlZpZXcgQ29udGFjdFwifTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlbkNvbnRhY3RQb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdFBvdXBWaWV3IHRvZ2dsZT17dGhpcy50b2dnbGUuYmluZCh0aGlzLCAnb3BlbkNvbnRhY3RQb3B1cCcpfSBtb2JpbGVObz17dGhpcy5wcm9wcy5wcmltYXJ5TW9iaWxlfSBnZXREb2N0b3I9e3RoaXMuZ2V0RG9jdG9yTm8uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+IDogPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIGV4dHJhQ2xhc3M9XCIgY2hhdC1mbG9hdC1idG4tMlwiIHR5cGU9XCJvcGRcIiBub0NoYXRCdXR0b249eyF0aGlzLnN0YXRlLnNlYXJjaERhdGFIaWRkZW59IHNob3dEZXNrdG9wSXBkPXt0cnVlfSBtc2dUZW1wbGF0ZT1cImdvbGRfZ2VuZXJhbF90ZW1wbGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgZm9vdGVyRGF0YT17dGhpcy5zdGF0ZS5mb290ZXJEYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXYgPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdG9yUHJvZmlsZVZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxubGV0IGRvY3RvckRhdGEgPSBmYWxzZVxuY2xhc3MgQWJvdXREb2N0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAvLyBsZXNzQWJvdXQ6IFwiXCIsXG4gICAgICAgICAgICAvLyByZXF1aXJlZFJlYWRNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIHJlYWRNb3JlOiBkb2N0b3JEYXRhXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVhZE1vcmU6IHRydWV9KVxuICAgICAgICAvLyB0aGlzLnJlbmRlckFib3V0KHRoaXMucHJvcHMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICAvLyB0aGlzLnJlbmRlckFib3V0KHByb3BzKVxuICAgIH1cblxuICAgIC8vIHJlbmRlckFib3V0KHByb3BzKSB7XG4gICAgLy8gICAgIGxldCB7IGFib3V0IH0gPSBwcm9wcy5kZXRhaWxzXG4gICAgLy8gICAgIGlmIChhYm91dCkge1xuICAgIC8vICAgICAgICAgaWYgKGFib3V0Lmxlbmd0aCA+IDEwMCkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgICAgICAgICByZWFkTW9yZTogdHJ1ZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVxdWlyZWRSZWFkTW9yZTogdHJ1ZVxuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgICAgICBsZXNzQWJvdXQ6IGFib3V0LnNsaWNlKDAsIDEwMCkgKyBcIi4uLlwiXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7IGFib3V0LCBuYW1lIH0gPSB0aGlzLnByb3BzLmRldGFpbHNcbiAgICAgICAgbGV0IGJ1dHRvbiA9IFwiXCJcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZXF1aXJlZFJlYWRNb3JlKSB7XG4gICAgICAgICAgICAvLyBidXR0b24gPSA8YSBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1wcmltYXJ5XCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyByZWFkTW9yZTogZmFsc2UsIGxlc3NBYm91dDogYWJvdXQgfSlcbiAgICAgICAgICAgIC8vIH19PiBSRUFEIE1PUkUgJiM5NjYwOzwvYT5cblxuICAgICAgICAgICAgLy8gaWYgKCF0aGlzLnN0YXRlLnJlYWRNb3JlKSB7XG4gICAgICAgICAgICAvLyAgICAgYnV0dG9uID0gPGEgY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtcHJpbWFyeVwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlYWRNb3JlOiB0cnVlLCBsZXNzQWJvdXQ6IGFib3V0LnNsaWNlKDAsIDEwMCkgKyBcIi4uLlwiIH0pXG4gICAgICAgICAgICAvLyAgICAgfX0+IFNIT1cgTEVTUyAmIzk2NTA7PC9hPlxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIGxldCBhYm91dFR4dFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5kZXRhaWxzLmFib3V0X3dlYikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGV0YWlscy5hYm91dF93ZWIubGVuZ3RoID4gMTUwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVhZE1vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRUeHQgPSB0aGlzLnByb3BzLmRldGFpbHMuYWJvdXRfd2ViLnNsaWNlKDAsIDE1MCkgKyBcIi4uLlwiXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IDxhIGNsYXNzTmFtZT1cImZ3LTcwMCB0ZXh0LXByaW1hcnlcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmU6ICF0aGlzLnN0YXRlLnJlYWRNb3JlIH0pXG4gICAgICAgICAgICAgICAgICAgIH19PiBSZWFkIE1vcmUgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDExLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+JiM5NjYwOzwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRUeHQgPSB0aGlzLnByb3BzLmRldGFpbHMuYWJvdXRfd2ViXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiA9IDxhIGNsYXNzTmFtZT1cImZ3LTcwMCB0ZXh0LXByaW1hcnlcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmU6ICF0aGlzLnN0YXRlLnJlYWRNb3JlIH0pXG4gICAgICAgICAgICAgICAgICAgIH19PiBTaG93IExlc3MgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDExLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+JiM5NjUwOzwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhYm91dFR4dCA9IHRoaXMucHJvcHMuZGV0YWlscy5hYm91dF93ZWJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGUgbWItcm12XCI+QWJvdXQgRHIuIHtuYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnctMTAwMDAgdGV4dC1tZCBhYnQtZG9jLWlubGluZXRleHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFib3V0VHh0IH19PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2J1dHRvbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBYm91dERvY3RvclxuIiwiaW1wb3J0IEFib3V0RG9jdG9yIGZyb20gJy4vQWJvdXREb2N0b3IuanMnXG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0RG9jdG9yIiwiaW1wb3J0IERvY3RvclByb2ZpbGVWaWV3IGZyb20gJy4vRG9jdG9yUHJvZmlsZVZpZXcuanMnXG5cbmV4cG9ydCBkZWZhdWx0IERvY3RvclByb2ZpbGVWaWV3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnO1xuaW1wb3J0IFJhdGluZ1N0YXJzIGZyb20gJy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ1N0YXJzJztcbmltcG9ydCBEb2N0b3JSZXN1bHRDYXJkIGZyb20gJy4uL2NvbW1vbnMvZG9jdG9yUmVzdWx0Q2FyZCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmNsYXNzIE5vbkJvb2thYmxlRG9jdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXG5cdFx0fVxuXHR9XG5cdFZpZXdBbGwoKXtcblx0XHRsZXQgc3BlY2lhbGl0eT17fVxuXHRcdGlmKHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3JzICYmIHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3JzLnNwZWNpYWxpemF0aW9ucyl7XG5cdFx0XHRcblx0XHRcdHNwZWNpYWxpdHkuaWQgPSB0aGlzLnByb3BzLmRldGFpbHMuZG9jdG9ycy5zcGVjaWFsaXphdGlvbnNbMF0uaWRcblx0XHRcdHNwZWNpYWxpdHkubmFtZSA9IHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3JzLnNwZWNpYWxpemF0aW9uc1swXS5uYW1lXG5cdFx0XHRzcGVjaWFsaXR5LnR5cGUgPSAnc3BlY2lhbGl0eSdcblx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdOb25Cb29rYWJsZURvY3RvclZpZXdBbGxDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnTm9uLUJvb2thYmxlLURvY3Rvci1WaWV3QWxsLWNsaWNrZWQnLCAnc2VsZWN0ZWQnOiBzcGVjaWFsaXR5Lm5hbWUgfHwgJycsICdzZWxlY3RlZElkJzogc3BlY2lhbGl0eS5pZCB8fCAnJ1xuXHRcdFx0fVxuXHRcdFx0R1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblx0XHRcdHRoaXMucHJvcHMudG9nZ2xlT1BEQ3JpdGVyaWEoJ3NwZWNpYWxpdHknLCBzcGVjaWFsaXR5LCB0cnVlKVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvb3BkL3NlYXJjaHJlc3VsdHMnKVxuXHRcdFx0fSwgMTAwKVxuXHRcdH1cblxuXHR9XG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1lbC1wb3B1cC1vdmVybGF5ICBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZWwtcG9wdXAgbm9uLWJvb2stcG9wXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgcC1yZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwibm9uLWJvb2stY2xzLWJ0blwiIHNyYz0ge0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZU5vbkJvb2thYmxlRG9jUG9wdXAuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub24tYm9rLWhkbmctY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5vbi1ib2staGVhZGluZ1wiPnt0aGlzLnByb3BzLmRldGFpbHMuZGlzcGxheV9uYW1lfSBpcyBub3QgYm9va2FibGU8L3A+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5vbi1ib2stc3ViaGRuZ1wiPlNlZSBib29rYWJsZSBkb2N0b3JzIHdpdGggZ3JlYXQgZGlzY291bnRzIGJlbG93PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vbi1ib2stY2FyZHMtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLm5lYXJieURvY3RvcnMucmVzdWx0ICYmIHRoaXMucHJvcHMubmVhcmJ5RG9jdG9ycy5yZXN1bHQubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uZWFyYnlEb2N0b3JzLnJlc3VsdC5tYXAoKGRvY3RvciwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRpZihpZCA8PTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHJldHVybiA8RG9jdG9yUmVzdWx0Q2FyZCB7Li4udGhpcy5wcm9wc30gZGV0YWlscz17ZG9jdG9yfSBrZXk9e2lkfSByYW5rPXtpZH0gaXNOb25Cb29rYWJsZVBvcHVwPXt0cnVlfS8+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cdFx0XHRcdFx0XHRcdDonJ31cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuZGV0YWlscy5kb2N0b3JzICYmIHRoaXMucHJvcHMuZGV0YWlscy5kb2N0b3JzLnNwZWNpYWxpemF0aW9ucz9cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidml3LWFsbC1ub24tYm9rXCIgb25DbGljaz17dGhpcy5WaWV3QWxsLmJpbmQodGhpcyl9PlZpZXcgQWxsIFRvcCB7dGhpcy5wcm9wcy5kZXRhaWxzLmRvY3RvcnMuc3BlY2lhbGl6YXRpb25zWzBdLm5hbWV9IE5lYXIgWW91PC9wPlxuXHRcdFx0XHRcdFx0OicnfVxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vbkJvb2thYmxlRG9jdG9yIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNsYXNzIEV4cGFuc2lvblBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRvcGVuOiB0cnVlXG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlT3BlbigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgb3BlbjogIXRoaXMuc3RhdGUub3BlbiB9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0bGV0IHsgaGVhZGluZywgY29udGVudExpc3QsIGltYWdlIH0gPSB0aGlzLnByb3BzXG5cblx0XHRsZXQgbGlzdElkID0gaGVhZGluZy50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSBjbGFzc05hbWU9XCJleHBhbnNpb24tcGFuZWwtbGlzdC1pdGVtXCIgaWQ9e2xpc3RJZH0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3Blbi5iaW5kKHRoaXMpfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0gPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e2ltYWdlfSBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAnLTJweCcsIG1hcmdpblJpZ2h0OiA4LCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6ICcyMnB4JyB9fSAvPlxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kIG1yYi0wXCIgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+e2hlYWRpbmd9PC9oMz5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5vcGVuID8gPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93LXVwXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+IDogPGltZyBjbGFzc05hbWU9XCJ0aXRsZWFycm93XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5vcGVuID8gPGRpdiBjbGFzc05hbWU9XCJtb3JlLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMucXVsaWZpY2F0aW9uID8gY29udGVudExpc3QubWFwKChjb250LCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGV4cGFuc2lvbi1sYWJlbC1kaXZcIiBrZXk9e2l9IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTcwMCB0ZXh0LW1kIHRleHQtbGlnaHRcIiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+e2NvbnQucXVhbGlmaWNhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udC5zcGVjaWFsaXphdGlvbiA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtbWQgdGV4dC1saWdodFwiIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19PiZuYnNwOyZuYnNwO3wmbmJzcDsmbmJzcDs8L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtjb250LnNwZWNpYWxpemF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250LmNvbGxlZ2UgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMCB0ZXh0LW1kIHRleHQtbGlnaHRcIiBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fT4mbmJzcDsmbmJzcDt8Jm5ic3A7Jm5ic3A7PC9zcGFuPiA6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnQucGFzc2luZ195ZWFyID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57YCR7Y29udC5jb2xsZWdlfSAtICR7Y29udC5wYXNzaW5nX3llYXJ9YH08L3NwYW4+IDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0fSkgOiBjb250ZW50TGlzdC5tYXAoKGNvbnQsIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImV4cGFuc2lvbi1sYWJlbC1kaXZcIiBrZXk9e2l9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udC5oZWFkaW5nID8gPGxhYmVsIGNsYXNzTmFtZT1cImZ3LTcwMCB0ZXh0LXNtIHRleHQtcHJpbWFyeVwiPntjb250LmhlYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpIDwgY29udGVudExpc3QubGVuZ3RoIC0gMSA/IFwifFwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+IDogXCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtbWQgdGV4dC1saWdodFwiIHN0eWxlPXt7IGxpbmVIZWlnaHQ6ICcyMHB4JyB9fSA+e2NvbnQuY29udGVudH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aSA8IGNvbnRlbnRMaXN0Lmxlbmd0aCAtIDEgPyBcInxcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PiA6IFwiXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5zaW9uUGFuZWxcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgRXhwYW5zaW9uUGFuZWwgZnJvbSAnLi9FeHBhbnNpb25QYW5lbCc7XG5cbmNsYXNzIFByb2Zlc3Npb25hbEdyYXBoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgeyBuYW1lLCBwcm9maWxlX2ltZywgcXVhbGlmaWNhdGlvbnMsIHBob25lX251bWJlciwgZW1haWwsIHByYWN0aWNpbmdfc2luY2UsIGdlbmRlciwgbGFuZ3VhZ2VzLCBsaWNlbnNlLCBtb2JpbGVzLCBhd2FyZHMsIGFzc29jaWF0aW9ucywgbWVkaWNhbF9zZXJ2aWNlcywgZXhwZXJpZW5jZXMgfSA9IHRoaXMucHJvcHMuZGV0YWlsc1xuXG4gICAgICAgIHF1YWxpZmljYXRpb25zID0gcXVhbGlmaWNhdGlvbnMgfHwgW11cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0gPlByb2Zlc3Npb25hbCBHcmFwaCBvZiBEci4ge25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWNvbnRlbnQgZXhwYW5zaW9uLWNvbnRlbnQgcGQtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBkcm9wLWRvd24tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpZmljYXRpb25zID8gPEV4cGFuc2lvblBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e1wiUXVhbGlmaWNhdGlvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50TGlzdD17cXVhbGlmaWNhdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1bGlmaWNhdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e1wiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvRWR1Y2F0aW9uLTAxLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VzICYmIGxhbmd1YWdlcy5sZW5ndGggPyA8RXhwYW5zaW9uUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17XCJMYW5ndWFnZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9MYW5ndWFnZS0wMS5zdmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudExpc3Q9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOiBcIlwiLCBjb250ZW50OiBsYW5ndWFnZXMucmVkdWNlKChmaW5hbCwgY3VyciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbCArPSBgJHtjdXJyLmxhbmd1YWdlfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgbGFuZ3VhZ2VzLmxlbmd0aCAtIDEpIGZpbmFsICs9IFwiIHwgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FyZHMgJiYgYXdhcmRzLmxlbmd0aCA/IDxFeHBhbnNpb25QYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXtcIkF3YXJkc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9Bd2FyZC0wMS5zdmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudExpc3Q9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhcmRzLm1hcCgoYXdhcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FyZC55ZWFyID0gYXdhcmQueWVhciB8fCBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF3YXJkLnllYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgaGVhZGluZzogXCJcIiwgY29udGVudDogYCR7YXdhcmQubmFtZX0sICR7YXdhcmQueWVhcn1gIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBoZWFkaW5nOiBcIlwiLCBjb250ZW50OiBgJHthd2FyZC5uYW1lfWAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc29jaWF0aW9ucyAmJiBhc3NvY2lhdGlvbnMubGVuZ3RoID8gPEV4cGFuc2lvblBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e1wiQXNzb2NpYXRlIE1lbWJlcnNoaXBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e1wiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvQXNzb2NpYXRlTWVtYmVyc2hpcC5zdmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudExpc3Q9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzb2NpYXRpb25zLm1hcCgoYXNzb2NpYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBoZWFkaW5nOiBcIlwiLCBjb250ZW50OiBgJHthc3NvY2lhdGlvbi5uYW1lfWAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZXMgJiYgZXhwZXJpZW5jZXMubGVuZ3RoID8gPEV4cGFuc2lvblBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e1wiRXhwZXJpZW5jZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9FeHBlcmllbmNlZC0wMS5zdmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudExpc3Q9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZXMubWFwKChleHBlcmllbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgaGVhZGluZzogXCJcIiwgY29udGVudDogYCR7ZXhwZXJpZW5jZS5ob3NwaXRhbH0sICR7ZXhwZXJpZW5jZS5zdGFydF95ZWFyfSAtICR7ZXhwZXJpZW5jZS5lbmRfeWVhcn1gIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGljYWxfc2VydmljZXMgJiYgbWVkaWNhbF9zZXJ2aWNlcy5sZW5ndGggPyA8RXhwYW5zaW9uUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17XCJTdWJzY3JpYmVkIFNlcnZpY2VzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtcIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL1N1YnNjcmliZWRTZXJ2aWNlcy0wMS5zdmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudExpc3Q9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWNhbF9zZXJ2aWNlcy5tYXAoKHNlcnZpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBoZWFkaW5nOiBcIlwiLCBjb250ZW50OiBgJHtzZXJ2aWNlLm5hbWV9YCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmVzc2lvbmFsR3JhcGhcbiIsImltcG9ydCBQcm9mZXNzaW9uYWxHcmFwaCBmcm9tICcuL1Byb2Zlc3Npb25hbEdyYXBoLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBQcm9mZXNzaW9uYWxHcmFwaCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0ICh7cHJvcHMsdG9nZ2xlLCBuYXZpZ2F0ZVRvVmlwfSkgPT4ge1xuXHRyZXR1cm4oXG5cdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheSB2aXAtY25jbC1vdmVybGF5XCIgb25DbGljaz17KCk9PnRvZ2dsZSgpfT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXAgdmlwLXBvcC1tYmxcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgekluZGV4OiAnOScgfX0gY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIiBvbkNsaWNrPXsoKT0+dG9nZ2xlKCl9Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1oZWFkZXIgdGV4dC1jZW50ZXIgYWN0aW9uLXNjcmVlbi1oZWFkZXJcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgcGFkZGluZ1RvcDogJycgfX0gPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidnAtcG9wLWdyblwiPlNhdmUgNzAlIG9uIEFwcG9pbnRtZW50czwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInZwLXBvcC1zdWItdHh0XCI+IEJlY29tZSBEb2NwcmltZSA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3ZpcGxvZy5wbmdcIn0vPiBtZW1iZXIgdG9kYXkgPC9wPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ2cC1wb3AtY2gtYnRuXCIgb25DbGljaz17KCk9Pm5hdmlnYXRlVG9WaXAoKX0+S25vdyBtb3JlPC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0RG9jdG9yTnVtYmVyLCBnZXREb2N0b3JCeVVybCwgZ2V0RG9jdG9yQnlJZCwgc2VsZWN0T3BkVGltZVNMb3QsIGdldFJhdGluZ0NvbXBsaW1lbnRzLCBjcmVhdGVBcHBvaW50bWVudFJhdGluZywgdXBkYXRlQXBwb2ludG1lbnRSYXRpbmcsIGNsb3NlQXBwb2ludG1lbnRSYXRpbmcsIGNsb3NlQXBwb2ludG1lbnRQb3BVcCwgZ2V0Rm9vdGVyRGF0YSwgbWVyZ2VPUERTdGF0ZSwgdG9nZ2xlUHJvZmlsZVByb2NlZHVyZXMsIHNhdmVQcm9maWxlUHJvY2VkdXJlcywgZ2V0RG9jdG9yTm8sIHRvZ2dsZU9QRENyaXRlcmlhLCBnZXRBbGxSYXRpbmdzLCBnZXREb3dubG9hZEFwcEJhbm5lckxpc3QsIGlwZENoYXRWaWV3LCBjbGVhclZpcFNlbGVjdGVkUGxhbiwgTm9uSXBkQm9va2luZ0xlYWQsIHNhdmVMZWFkUGhuTnVtYmVyfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5pbXBvcnQgRG9jdG9yUHJvZmlsZVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vcGQvZG9jdG9yUHJvZmlsZS9pbmRleC5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cblxuY2xhc3MgRG9jdG9yUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGxldCBkX2lkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQgfHwgdGhpcy5nZXRfZG9jdG9yX2lkX2J5X3VybCh0aGlzLnByb3BzLm1hdGNoLnVybClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkRG9jdG9yOiBkX2lkLFxuICAgICAgICAgICAgaXNfcHJvY2VkdXJlOiBmYWxzZSxcbiAgICAgICAgICAgIGhvc3BpdGFsX2lkOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0X2RvY3Rvcl9pZF9ieV91cmwodXJsKSB7XG4gICAgICAgIGZvciAobGV0IGRfaWQgaW4gdGhpcy5wcm9wcy5ET0NUT1JTKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5ET0NUT1JTW2RfaWRdLnVybCAmJiB1cmwuaW5jbHVkZXModGhpcy5wcm9wcy5ET0NUT1JTW2RfaWRdLnVybCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZF9pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnlEYXRhID0ge30pIHtcbiAgICAgICAgaWYgKG1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldERvY3RvckJ5SWQobWF0Y2gucGFyYW1zLmlkLCBxdWVyeURhdGEuaG9zcGl0YWxfaWQgfHwgJycsIHF1ZXJ5RGF0YS5wcm9jZWR1cmVfaWRzIHx8IFtdLCBxdWVyeURhdGEuY2F0ZWdvcnlfaWRzIHx8IFtdKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBtYXRjaC51cmxcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3BsaXQoXCIvXCIpWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGdldERvY3RvckJ5VXJsKHVybCwgcXVlcnlEYXRhLmhvc3BpdGFsX2lkIHx8ICcnLCBxdWVyeURhdGEucHJvY2VkdXJlX2lkcyB8fCBbXSwgcXVlcnlEYXRhLmNhdGVnb3J5X2lkcyB8fCBbXSwgKGRvY3Rvcl9pZCwgdXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N0b3JfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC51cmwuaW5jbHVkZXMoJy1kcHAnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZvb3RlckRhdGEobWF0Y2gudXJsLnNwbGl0KFwiL1wiKVsxXSkoKS50aGVuKChmb290ZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvb3RlckRhdGEgPSBmb290ZXJEYXRhIHx8IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGRvY3Rvcl9pZCwgZm9vdGVyRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBkb2N0b3JfaWQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgZG9jdG9yX2lkIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgaG9zcGl0YWxfaWQgPSAnJ1xuICAgICAgICBsZXQgaXNfcHJvY2VkdXJlID0gZmFsc2VcbiAgICAgICAgbGV0IGNhdGVnb3J5X2lkcyA9IFtdXG4gICAgICAgIGxldCBwcm9jZWR1cmVfaWRzID0gW11cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICBob3NwaXRhbF9pZCA9IHBhcnNlZC5ob3NwaXRhbF9pZCB8fCAnJ1xuICAgICAgICAgICAgaXNfcHJvY2VkdXJlID0gcGFyc2VkLmlzX3Byb2NlZHVyZSB8fCBmYWxzZVxuICAgICAgICAgICAgY2F0ZWdvcnlfaWRzID0gcGFyc2VkLmNhdGVnb3J5X2lkcyB8fCBbXVxuICAgICAgICAgICAgcHJvY2VkdXJlX2lkcyA9IHBhcnNlZC5wcm9jZWR1cmVfaWRzIHx8IFtdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgICAgICAgIC8vaWYgKCF0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yIHx8ICF0aGlzLnByb3BzLkRPQ1RPUlNbdGhpcy5zdGF0ZS5zZWxlY3RlZERvY3Rvcl0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldERvY3RvckJ5SWQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsIGhvc3BpdGFsX2lkLCBwcm9jZWR1cmVfaWRzLCBjYXRlZ29yeV9pZHMpXG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBob3NwaXRhbF9pZDogaG9zcGl0YWxfaWQsIGlzX3Byb2NlZHVyZTogaXNfcHJvY2VkdXJlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5tYXRjaC51cmxcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3BsaXQoXCIvXCIpWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmICghdGhpcy5zdGF0ZS5zZWxlY3RlZERvY3RvciB8fCAhdGhpcy5wcm9wcy5ET0NUT1JTW3RoaXMuc3RhdGUuc2VsZWN0ZWREb2N0b3JdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXREb2N0b3JCeVVybCh1cmwsIGhvc3BpdGFsX2lkLCBwcm9jZWR1cmVfaWRzLCBjYXRlZ29yeV9pZHMsIChkb2N0b3JfaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3Rvcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRG9jdG9yOiBkb2N0b3JfaWQgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBob3NwaXRhbF9pZDogaG9zcGl0YWxfaWQsIGlzX3Byb2NlZHVyZTogaXNfcHJvY2VkdXJlIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvL2Fsd2F5cyBjbGVhciBzZWxlY3RlZCB0aW1lIGF0IGRvY3RvciBwcm9maWxlXG4gICAgICAgIGxldCBzbG90ID0geyB0aW1lOiB7fSB9XG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgZmFsc2UpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuZmV0Y2hOZXdSZXN1bHRzICYmIChwcm9wcy5mZXRjaE5ld1Jlc3VsdHMgIT0gdGhpcy5wcm9wcy5mZXRjaE5ld1Jlc3VsdHMpKSB7XG4gICAgICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RG9jdG9yUHJvZmlsZVZpZXcgey4uLnRoaXMucHJvcHN9IHNlbGVjdGVkRG9jdG9yPXt0aGlzLnN0YXRlLnNlbGVjdGVkRG9jdG9yfSB7Li4udGhpcy5zdGF0ZX0gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcbiAgICAvKipcbiAgICAgKiBpbml0aWFsU2VydmVyRGF0YSBpcyBzZXJ2ZXIgcmVuZGVyZWQgYXN5bmMgZGF0YSByZXF1aXJlZCBidWlsZCBodG1sIG9uIHNlcnZlci4gXG4gICAgICovXG4gICAgbGV0IGluaXRpYWxTZXJ2ZXJEYXRhID0gbnVsbFxuICAgIGxldCB7IHN0YXRpY0NvbnRleHQgfSA9IHBhc3NlZFByb3BzXG4gICAgaWYgKHN0YXRpY0NvbnRleHQgJiYgc3RhdGljQ29udGV4dC5kYXRhKSB7XG4gICAgICAgIGluaXRpYWxTZXJ2ZXJEYXRhID0gc3RhdGljQ29udGV4dC5kYXRhXG4gICAgfVxuXG4gICAgbGV0IERPQ1RPUlMgPSBzdGF0ZS5ET0NUT1JfUFJPRklMRVNcbiAgICBsZXQgeyByYXRlZF9hcHBvaW5tZW50cywgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZSwgcHJpbWFyeU1vYmlsZSwgYXBwX2Rvd25sb2FkX2xpc3QsIGRldmljZV9pbmZvLCBpcGRfY2hhdCB9ID0gc3RhdGUuVVNFUlxuXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZmV0Y2hOZXdSZXN1bHRzLFxuICAgICAgICBjb21tb25Qcm9jZWR1cmVycyxcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWREb2N0b3JQcm9jZWR1cmUsXG4gICAgICAgIHByb2ZpbGVDb21tb25Qcm9jZWR1cmVzXG4gICAgfSA9IHN0YXRlLkRPQ1RPUl9TRUFSQ0hcblxuICAgIHJldHVybiB7XG4gICAgICAgIERPQ1RPUlMsIGluaXRpYWxTZXJ2ZXJEYXRhLCByYXRlZF9hcHBvaW5tZW50cywgcHJvZmlsZXMsIHNlbGVjdGVkUHJvZmlsZSwgc2VsZWN0ZWRDcml0ZXJpYXMsIHNlbGVjdGVkTG9jYXRpb24sIGZldGNoTmV3UmVzdWx0cywgY29tbW9uUHJvY2VkdXJlcnMsIHNlbGVjdGVkRG9jdG9yUHJvY2VkdXJlLCBwcm9maWxlQ29tbW9uUHJvY2VkdXJlcywgcHJpbWFyeU1vYmlsZSwgZmlsdGVyQ3JpdGVyaWEsIGFwcF9kb3dubG9hZF9saXN0LCBkZXZpY2VfaW5mbywgaXBkX2NoYXQsIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXREb2N0b3JCeVVybDogKGRvY3RyX3VybCwgaG9zcGl0YWxJZCwgcHJvY2VkdXJlX2lkcywgY2F0ZWdvcnlfaWRzLCBjYikgPT4gZGlzcGF0Y2goZ2V0RG9jdG9yQnlVcmwoZG9jdHJfdXJsLCBob3NwaXRhbElkLCBwcm9jZWR1cmVfaWRzLCBjYXRlZ29yeV9pZHMsIGNiKSksXG4gICAgICAgIGdldERvY3RvckJ5SWQ6IChkb2N0b3JJZCwgaG9zcGl0YWxJZCwgcHJvY2VkdXJlX2lkcywgY2F0ZWdvcnlfaWRzKSA9PiBkaXNwYXRjaChnZXREb2N0b3JCeUlkKGRvY3RvcklkLCBob3NwaXRhbElkLCBwcm9jZWR1cmVfaWRzLCBjYXRlZ29yeV9pZHMpKSxcbiAgICAgICAgc2VsZWN0T3BkVGltZVNMb3Q6IChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkKSA9PiBkaXNwYXRjaChzZWxlY3RPcGRUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkKSksXG4gICAgICAgIGdldFJhdGluZ0NvbXBsaW1lbnRzOiAoY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldFJhdGluZ0NvbXBsaW1lbnRzKGNhbGxiYWNrKSksXG4gICAgICAgIGNyZWF0ZUFwcG9pbnRtZW50UmF0aW5nOiAoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goY3JlYXRlQXBwb2ludG1lbnRSYXRpbmcoYXBwb2ludG1lbnREYXRhLCBjYWxsYmFjaykpLFxuICAgICAgICB1cGRhdGVBcHBvaW50bWVudFJhdGluZzogKHJhdGluZ0RhdGEsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaCh1cGRhdGVBcHBvaW50bWVudFJhdGluZyhyYXRpbmdEYXRhLCBjYWxsYmFjaykpLFxuICAgICAgICBnZXREb2N0b3JOdW1iZXI6IChkb2N0b3JJZCwgaG9zcGl0YWxfaWQsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXREb2N0b3JOdW1iZXIoZG9jdG9ySWQsIGhvc3BpdGFsX2lkLCBjYWxsYmFjaykpLFxuICAgICAgICBjbG9zZUFwcG9pbnRtZW50UmF0aW5nOiAoZG9jdG9ySWQsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChjbG9zZUFwcG9pbnRtZW50UmF0aW5nKGRvY3RvcklkLCBjYWxsYmFjaykpLFxuICAgICAgICBjbG9zZUFwcG9pbnRtZW50UG9wVXA6IChpZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGNsb3NlQXBwb2ludG1lbnRQb3BVcChpZCwgY2FsbGJhY2spKSxcbiAgICAgICAgZ2V0Rm9vdGVyRGF0YTogKHVybCkgPT4gZGlzcGF0Y2goZ2V0Rm9vdGVyRGF0YSh1cmwpKSxcbiAgICAgICAgbWVyZ2VPUERTdGF0ZTogKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpID0+IGRpc3BhdGNoKG1lcmdlT1BEU3RhdGUoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykpLFxuICAgICAgICB0b2dnbGVQcm9maWxlUHJvY2VkdXJlczogKHByb2NlZHVyZV90b190b2dnbGUsIGRvY3Rvcl9pZCwgaG9zcGl0YWxfaWQpID0+IGRpc3BhdGNoKHRvZ2dsZVByb2ZpbGVQcm9jZWR1cmVzKHByb2NlZHVyZV90b190b2dnbGUsIGRvY3Rvcl9pZCwgaG9zcGl0YWxfaWQpKSxcbiAgICAgICAgc2F2ZVByb2ZpbGVQcm9jZWR1cmVzOiAoZG9jdG9yX2lkLCBjbGluaWNfaWQpID0+IGRpc3BhdGNoKHNhdmVQcm9maWxlUHJvY2VkdXJlcyhkb2N0b3JfaWQsIGNsaW5pY19pZCkpLFxuICAgICAgICBnZXREb2N0b3JObzogKGRvY3RvckRhdGEsIGNiKSA9PiBkaXNwYXRjaChnZXREb2N0b3JObyhkb2N0b3JEYXRhLCBjYikpLFxuICAgICAgICB0b2dnbGVPUERDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2godG9nZ2xlT1BEQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkKSksXG4gICAgICAgIGdldEFsbFJhdGluZ3M6IChjb250ZW50X3R5cGUsIG9iamVjdF9pZCwgcGFnZSwgY2IpID0+IGRpc3BhdGNoKGdldEFsbFJhdGluZ3MoY29udGVudF90eXBlLCBvYmplY3RfaWQsIHBhZ2UsIGNiKSksXG4gICAgICAgIGdldERvd25sb2FkQXBwQmFubmVyTGlzdDogKGNiKSA9PiBkaXNwYXRjaChnZXREb3dubG9hZEFwcEJhbm5lckxpc3QoY2IpKSxcbiAgICAgICAgaXBkQ2hhdFZpZXc6IChkYXRhKSA9PiBkaXNwYXRjaChpcGRDaGF0VmlldyhkYXRhKSksXG4gICAgICAgIGNsZWFyVmlwU2VsZWN0ZWRQbGFuOigpID0+ZGlzcGF0Y2goY2xlYXJWaXBTZWxlY3RlZFBsYW4oKSksXG4gICAgICAgIE5vbklwZEJvb2tpbmdMZWFkOihkYXRhLGNiKSA9PmRpc3BhdGNoKE5vbklwZEJvb2tpbmdMZWFkKGRhdGEsIGNiKSksXG4gICAgICAgIHNhdmVMZWFkUGhuTnVtYmVyOihudW1iZXIpID0+IGRpc3BhdGNoKHNhdmVMZWFkUGhuTnVtYmVyKG51bWJlcikpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERvY3RvclByb2ZpbGUpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tU0dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImV4cG9ydHMuZW5kaWFubmVzcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdMRScgfTtcblxuZXhwb3J0cy5ob3N0bmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWVcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gJyc7XG59O1xuXG5leHBvcnRzLmxvYWRhdmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXSB9O1xuXG5leHBvcnRzLnVwdGltZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDAgfTtcblxuZXhwb3J0cy5mcmVlbWVtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xufTtcblxuZXhwb3J0cy50b3RhbG1lbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbn07XG5cbmV4cG9ydHMuY3B1cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH07XG5cbmV4cG9ydHMudHlwZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdCcm93c2VyJyB9O1xuXG5leHBvcnRzLnJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuYXBwVmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0cy5uZXR3b3JrSW50ZXJmYWNlc1xuPSBleHBvcnRzLmdldE5ldHdvcmtJbnRlcmZhY2VzXG49IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHt9IH07XG5cbmV4cG9ydHMuYXJjaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdqYXZhc2NyaXB0JyB9O1xuXG5leHBvcnRzLnBsYXRmb3JtID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ2Jyb3dzZXInIH07XG5cbmV4cG9ydHMudG1wZGlyID0gZXhwb3J0cy50bXBEaXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcvdG1wJztcbn07XG5cbmV4cG9ydHMuRU9MID0gJ1xcbic7XG5cbmV4cG9ydHMuaG9tZWRpciA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuICcvJ1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=