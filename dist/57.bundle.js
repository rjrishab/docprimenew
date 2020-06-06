(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./dev/js/components/commons/notFound/index.js":
/*!*****************************************************!*\
  !*** ./dev/js/components/commons/notFound/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notFound = __webpack_require__(/*! ./notFound */ "./dev/js/components/commons/notFound/notFound.js");

var _notFound2 = _interopRequireDefault(_notFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _notFound2.default;

/***/ }),

/***/ "./dev/js/components/commons/notFound/notFound.js":
/*!********************************************************!*\
  !*** ./dev/js/components/commons/notFound/notFound.js ***!
  \********************************************************/
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

var NotFound = function (_React$Component) {
    _inherits(NotFound, _React$Component);

    function NotFound(props) {
        _classCallCheck(this, NotFound);

        return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));
    }

    _createClass(NotFound, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "profile-body-wrap" },
                _react2.default.createElement(
                    "header",
                    { className: "profile-header", style: { display: 'block' } },
                    _react2.default.createElement(
                        "div",
                        { className: "smiley-img-div" },
                        _react2.default.createElement("img", { src: "/assets" + "/img/customer-icons/smiley.png" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "container" },
                        _react2.default.createElement(
                            "div",
                            { className: "row header-row" },
                            _react2.default.createElement(
                                "div",
                                { className: "col-12 text-center logo-icon-div" },
                                _react2.default.createElement(
                                    "a",
                                    { href: "javascript:;", onClick: function onClick() {
                                            _this2.props.history.push('/');
                                        } },
                                    _react2.default.createElement("img", { src: "/assets" + "/img/doc-prime-logo.png", className: "logo-icon" })
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement("div", { className: "subheader" }),
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-12 col-md-10 offset-md-1" },
                            _react2.default.createElement(
                                "div",
                                { className: "error-widget text-center" },
                                _react2.default.createElement(
                                    "p",
                                    { className: "error-head fw-500" },
                                    "404"
                                ),
                                _react2.default.createElement("img", { src: "/assets" + "/img/icons/error.png" }),
                                _react2.default.createElement(
                                    "p",
                                    { className: "error-text fw-500" },
                                    "Page not found !"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    { className: "error-link" },
                                    "Go to ",
                                    _react2.default.createElement(
                                        "a",
                                        { href: "javascript:;", onClick: function onClick() {
                                                _this2.props.history.push('/');
                                            } },
                                        "docprime homepage"
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NotFound;
}(_react2.default.Component);

exports.default = NotFound;

/***/ }),

/***/ "./dev/js/components/opd/commons/clinicResultCard/ClinicResultCard.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/opd/commons/clinicResultCard/ClinicResultCard.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _PopUp = __webpack_require__(/*! ../PopUp */ "./dev/js/components/opd/commons/PopUp/index.js");

var _PopUp2 = _interopRequireDefault(_PopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClinicResultCard = function (_React$Component) {
    _inherits(ClinicResultCard, _React$Component);

    function ClinicResultCard(props) {
        _classCallCheck(this, ClinicResultCard);

        var _this = _possibleConstructorReturn(this, (ClinicResultCard.__proto__ || Object.getPrototypeOf(ClinicResultCard)).call(this, props));

        _this.state = {
            openSelectDoctor: false
        };
        return _this;
    }

    _createClass(ClinicResultCard, [{
        key: 'toggleSelectDoctor',
        value: function toggleSelectDoctor() {
            this.setState({ openSelectDoctor: !this.state.openSelectDoctor });
        }
    }, {
        key: 'cardClick',
        value: function cardClick(id, url, hospital_id, e) {
            e.stopPropagation();
            var data = {
                'Category': 'ConsumerApp', 'Action': 'DoctorSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-selected', 'selectedId': id
            };
            _gtm2.default.sendEvent({ data: data });

            data = {
                'Category': 'ConsumerApp', 'Action': 'DoctorRankInSearch', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-rank-in-search', 'Rank': this.props.rank + 1
            };
            _gtm2.default.sendEvent({ data: data });

            if (e.ctrlKey || e.metaKey) {} else {
                e.preventDefault();

                var category_ids = this.props.commonSelectedCriterias.filter(function (x) {
                    return x.type == 'procedures_category';
                }).map(function (x) {
                    return x.id;
                });
                var procedure_ids = this.props.commonSelectedCriterias.filter(function (x) {
                    return x.type == 'procedures';
                }).map(function (x) {
                    return x.id;
                });

                if (url) {
                    //this.props.history.push(`/${url}`)
                    if (category_ids.length || procedure_ids.length) {
                        this.props.history.push('/' + url + '?hospital_id=' + hospital_id + '&is_procedure=true&category_ids=' + category_ids + '&procedure_ids=' + procedure_ids);
                    } else {
                        this.props.history.push('/' + url + '?hospital_id=' + hospital_id);
                    }
                } else {
                    //this.props.history.push(`/opd/doctor/${id}`)
                    if (category_ids.length || procedure_ids.length) {
                        this.props.history.push('/opd/doctor/' + id + '?hospital_id=' + hospital_id + '&is_procedure=true&category_ids=' + category_ids + '&procedure_ids=' + procedure_ids);
                    } else {
                        this.props.history.push('/opd/doctor/' + id + '?hospital_id=' + hospital_id);
                    }
                }
            }
        }
    }, {
        key: 'getQualificationStr',
        value: function getQualificationStr(qualificationSpecialization) {
            return qualificationSpecialization.reduce(function (str, curr, i) {
                str += '' + curr.name;
                if (i < qualificationSpecialization.length - 1) str += ', ';
                return str;
            }, "");
        }
    }, {
        key: 'bookNowClicked',
        value: function bookNowClicked(id, url, hospital_id, e) {
            //always clear selected time at doctor profile
            var slot = { time: {} };
            this.props.selectOpdTimeSLot(slot, false);

            var data = {
                'Category': 'ConsumerApp', 'Action': 'OpdSearchBookNowClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-book-now-clicked', 'selectedId': id
            };
            _gtm2.default.sendEvent({ data: data });

            var _trackingEventsBookNo = this.trackingEventsBookNow(id),
                procedure_ids = _trackingEventsBookNo.procedure_ids;

            this.props.saveProfileProcedures('', '', procedure_ids, true);
            if (url) {
                this.props.history.push('/' + url + '/booking?doctor_id=' + id + '&hospital_id=' + hospital_id);
            } else {
                this.props.history.push('/opd/doctor/' + id + '/' + hospital_id + '/bookdetails');
            }
        }
    }, {
        key: 'trackingEventsBookNow',
        value: function trackingEventsBookNow(id) {
            var Distance = '';

            if (this.props.details && this.props.details.distance) {
                Distance = (Math.round(this.props.details.distance * 10) / 10).toFixed(1);
            }

            var data = {
                'Category': 'ConsumerApp', 'Action': 'DoctorSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-selected', 'selectedId': id
            };
            _gtm2.default.sendEvent({ data: data });

            var category_ids = this.props.commonSelectedCriterias.filter(function (x) {
                return x.type == 'procedures_category';
            }).map(function (x) {
                return x.id;
            }).join(',');
            var procedure_ids = this.props.commonSelectedCriterias.filter(function (x) {
                return x.type == 'procedures';
            }).map(function (x) {
                return x.id;
            }).join(',');
            var condition_ids = this.props.commonSelectedCriterias.filter(function (x) {
                return x.type == 'condition';
            }).map(function (x) {
                return x.id;
            }).join(',');
            var specialization_ids = this.props.commonSelectedCriterias.filter(function (x) {
                return x.type == 'speciality';
            }).map(function (x) {
                return x.id;
            }).join(',');
            data = {
                'Category': 'ConsumerApp', 'Action': 'DoctorRankInSearch', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-rank-in-search', 'Rank': this.props.rank + 1, 'DoctorSearchCount': this.props.count, 'specializations': specialization_ids, 'conditions': condition_ids, 'procedures': procedure_ids, 'procedure_category': category_ids, 'Distance': Distance
            };
            _gtm2.default.sendEvent({ data: data });

            return { category_ids: category_ids, procedure_ids: procedure_ids };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$details = this.props.details,
                hospital_id = _props$details.hospital_id,
                address = _props$details.address,
                hospital_name = _props$details.hospital_name,
                doctors = _props$details.doctors,
                procedure_categories = _props$details.procedure_categories,
                short_address = _props$details.short_address;

            var specialization = "";
            var commonSelectedCriterias = this.props.commonSelectedCriterias;

            if (commonSelectedCriterias && commonSelectedCriterias.length) {
                specialization = commonSelectedCriterias[0].name;
            }
            var doctor = doctors && doctors.length ? doctors[0] : {};

            if (doctors && doctors.length) {
                var discounted_price = doctor.discounted_price,
                    distance = doctor.distance,
                    is_license_verified = doctor.is_license_verified,
                    deal_price = doctor.deal_price,
                    mrp = doctor.mrp,
                    general_specialization = doctor.general_specialization,
                    enabled_for_online_booking = doctor.enabled_for_online_booking;


                distance = (Math.round(distance * 10) / 10).toFixed(1);
                var discount = 0;
                if (mrp != 0 && discounted_price != 0) {
                    discount = 100 - Math.round(discounted_price * 100 / mrp);
                }

                var is_procedure = false;
                var selectedCount = 0;
                var unselectedCount = 0;
                var finalProcedureDealPrice = discounted_price;
                var finalProcedureMrp = mrp;
                procedure_categories.map(function (x) {
                    is_procedure = true;
                    x.procedures.filter(function (x) {
                        return x.is_selected;
                    }).map(function (x) {
                        finalProcedureDealPrice += x.deal_price;
                        finalProcedureMrp += x.mrp;
                        selectedCount++;
                    });

                    unselectedCount += x.procedures.filter(function (x) {
                        return !x.is_selected;
                    }).length;
                });

                if (is_procedure && false) {
                    if (finalProcedureMrp != 0 && finalProcedureDealPrice != 0) {
                        discount = 100 - Math.round(finalProcedureDealPrice * 100 / finalProcedureMrp);
                    }
                }

                is_procedure = false;

                return _react2.default.createElement(
                    'div',
                    { className: 'filter-card-dl mb-3' },
                    _react2.default.createElement(
                        'div',
                        { className: 'fltr-crd-top-container', style: { position: 'relative' } },
                        is_license_verified ? _react2.default.createElement(
                            'span',
                            { className: 'clinic-fltr-rtng' },
                            'Verified'
                        ) : "",
                        _react2.default.createElement(
                            'div',
                            { className: 'fltr-lctn-dtls' },
                            _react2.default.createElement(
                                'p',
                                null,
                                _react2.default.createElement('img', { className: 'fltr-loc-ico', width: '12px', height: '18px', src: "/assets" + "/img/new-loc-ico.svg" }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    distance,
                                    ' Km'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row no-gutters', style: { cursor: 'pointer' }, onClick: function onClick(e) {
                                    if (doctors && doctors.length == 1) {
                                        if (enabled_for_online_booking) {
                                            _this2.bookNowClicked(doctor.id, doctor.url, hospital_id || '');
                                        } else {
                                            _this2.cardClick(doctor.id, doctor.url, hospital_id, e);
                                        }
                                    } else {
                                        _this2.toggleSelectDoctor(e);
                                    }
                                } },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-8' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'clinic-fltr-name-dtls' },
                                    _react2.default.createElement(
                                        'a',
                                        null,
                                        _react2.default.createElement(
                                            'h5',
                                            { className: 'fw-500 clinic-fltr-dc-name text-md mrb-10' },
                                            hospital_name
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'clinic-fltr-loc-txt mrb-10' },
                                        address
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'mrb-10' },
                                        specialization
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'mrt-20' },
                                    enabled_for_online_booking && discount ? _react2.default.createElement(
                                        'p',
                                        { className: 'fw-500 text-xs', style: { color: 'red', paddingRight: '2px' } },
                                        '*Exclusive discount on clinic rates. Available only on prepaid bookings'
                                    ) : ""
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'fltr-bkng-section' },
                                    enabled_for_online_booking && discount ? _react2.default.createElement(
                                        'span',
                                        { className: 'filtr-offer ofr-ribbon fw-700' },
                                        discount,
                                        '% OFF'
                                    ) : "",
                                    enabled_for_online_booking ? _react2.default.createElement(
                                        'p',
                                        { className: 'fltr-prices' },
                                        '\u20B9 ',
                                        finalProcedureDealPrice,
                                        finalProcedureMrp == finalProcedureDealPrice ? "" : _react2.default.createElement(
                                            'span',
                                            { className: 'fltr-cut-price' },
                                            '\u20B9 ',
                                            finalProcedureMrp
                                        )
                                    ) : _react2.default.createElement(
                                        'p',
                                        { className: 'fltr-prices' },
                                        '\u20B9 ',
                                        finalProcedureMrp
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'signup-off-container' },
                                        enabled_for_online_booking && discounted_price != deal_price ? _react2.default.createElement(
                                            'span',
                                            { className: 'signup-off-doc-green', style: { fontSize: 12 } },
                                            'Includes coupon discount'
                                        ) : "",
                                        !discounted_price && !is_procedure ? _react2.default.createElement(
                                            'span',
                                            { className: 'filtr-offer ofr-ribbon free-ofr-ribbon fw-700' },
                                            'Free'
                                        ) : ''
                                    ),
                                    doctors && doctors.length == 1 ? enabled_for_online_booking ? _react2.default.createElement(
                                        'button',
                                        { className: 'fltr-bkng-btn' },
                                        'Book Now'
                                    ) : _react2.default.createElement(
                                        'button',
                                        { className: 'fltr-cntct-btn', style: { width: '100%' } },
                                        'Contact'
                                    ) : _react2.default.createElement(
                                        'button',
                                        { className: 'fltr-bkng-btn' },
                                        'Select Doctor'
                                    )
                                )
                            )
                        )
                    ),
                    doctors && doctors.length >= 2 && this.state.openSelectDoctor ? _react2.default.createElement(
                        'div',
                        { className: 'showBookTestList' },
                        _react2.default.createElement(
                            'ul',
                            null,
                            doctors.map(function (d, x) {
                                return _react2.default.createElement(
                                    'li',
                                    { key: x },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'showBookTestListImg' },
                                        'Dr. ',
                                        d.name
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'doc-price-cont' },
                                        !is_procedure ? _react2.default.createElement(
                                            'p',
                                            { className: 'doc-price-cutt' },
                                            '\u20B9 ',
                                            d.discounted_price,
                                            d.mrp == d.discounted_price ? "" : _react2.default.createElement(
                                                'span',
                                                null,
                                                '\u20B9 ',
                                                d.mrp
                                            )
                                        ) : "",
                                        d.enabled_for_online_booking ? _react2.default.createElement(
                                            'button',
                                            { style: { cursor: 'pointer' }, onClick: _this2.bookNowClicked.bind(_this2, d.id, d.url, hospital_id || ''), className: 'showBookTestListBtn' },
                                            'Book Now'
                                        ) : _react2.default.createElement(
                                            'button',
                                            { style: { cursor: 'pointer' }, onClick: _this2.cardClick.bind(_this2, d.id, d.url, hospital_id), className: 'showBookTestListBtn contact-small-btn' },
                                            'Contact'
                                        )
                                    )
                                );
                            })
                        )
                    ) : "",
                    doctors && doctors.length && this.state.openSelectDoctor ? _react2.default.createElement(
                        'div',
                        { onClick: this.toggleSelectDoctor.bind(this), className: 'filtr-card-footer', style: { cursor: 'pointer', borderTop: '1px solid #e8e8e8' } },
                        _react2.default.createElement(
                            'div',
                            { style: { paddingRight: '8px' } },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Hide'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text-right acrd-show' },
                            _react2.default.createElement('img', { className: '', style: { margin: '5px' }, src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                        )
                    ) : ""
                );
            } else {
                return "";
            }
        }
    }]);

    return ClinicResultCard;
}(_react2.default.Component);

exports.default = ClinicResultCard;

/***/ }),

/***/ "./dev/js/components/opd/commons/clinicResultCard/index.js":
/*!*****************************************************************!*\
  !*** ./dev/js/components/opd/commons/clinicResultCard/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClinicResultCard = __webpack_require__(/*! ./ClinicResultCard.js */ "./dev/js/components/opd/commons/clinicResultCard/ClinicResultCard.js");

var _ClinicResultCard2 = _interopRequireDefault(_ClinicResultCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ClinicResultCard2.default;

/***/ }),

/***/ "./dev/js/components/opd/searchResults/SearchResultsView.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/opd/searchResults/SearchResultsView.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../searchResults/doctorsList/index.js */ "./dev/js/components/opd/searchResults/doctorsList/index.js");

var _index2 = _interopRequireDefault(_index);

var _criteriaSearch = __webpack_require__(/*! ../../commons/criteriaSearch */ "./dev/js/components/commons/criteriaSearch/index.js");

var _criteriaSearch2 = _interopRequireDefault(_criteriaSearch);

var _newTopBar = __webpack_require__(/*! ./newTopBar */ "./dev/js/components/opd/searchResults/newTopBar/index.js");

var _newTopBar2 = _interopRequireDefault(_newTopBar);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _navigate = __webpack_require__(/*! ../../../helpers/navigate */ "./dev/js/helpers/navigate/index.js");

var _navigate2 = _interopRequireDefault(_navigate);

var _footer = __webpack_require__(/*! ../../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _result_count = __webpack_require__(/*! ./topBar/result_count.js */ "./dev/js/components/opd/searchResults/topBar/result_count.js");

var _result_count2 = _interopRequireDefault(_result_count);

var _scrollHelper = __webpack_require__(/*! ../../../helpers/scrollHelper.js */ "./dev/js/helpers/scrollHelper.js");

var _scrollHelper2 = _interopRequireDefault(_scrollHelper);

var _carouselView = __webpack_require__(/*! ./carouselView.js */ "./dev/js/components/opd/searchResults/carouselView.js");

var _carouselView2 = _interopRequireDefault(_carouselView);

var _nonIpdPopup = __webpack_require__(/*! ../../commons/nonIpdPopup.js */ "./dev/js/components/commons/nonIpdPopup.js");

var _nonIpdPopup2 = _interopRequireDefault(_nonIpdPopup);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var SearchResultsView = function (_React$Component) {
    _inherits(SearchResultsView, _React$Component);

    function SearchResultsView(props) {
        _classCallCheck(this, SearchResultsView);

        var _this = _possibleConstructorReturn(this, (SearchResultsView.__proto__ || Object.getPrototypeOf(SearchResultsView)).call(this, props));

        _this.scrollHandler = function () {
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
            var screenSize = window.screen && window.screen.width || null;
            var height = 375;
            if (screenSize && screenSize < 992) {
                height = height - 120;
            }
            if (scrollPosition > height) {
                _this.setState({ showSearchBtn: true });
            } else {
                _this.setState({ showSearchBtn: false });
            }
        };

        var seoData = null;
        var footerData = null;
        var parsed = queryString.parse(_this.props.location.search);
        if (_this.props.initialServerData) {
            seoData = _this.props.initialServerData.seoData;
            footerData = _this.props.initialServerData.footerData;
        }
        _this.state = {
            //seoData, 
            footerData: footerData,
            seoFriendly: _this.props.match.url.includes('-sptcit') || _this.props.match.url.includes('-sptlitcit') || _this.props.match.url.includes('-ipddp'),
            clinic_card: _this.props.location.search.includes('clinic_card') || null,
            showError: false,
            search_id: '',
            setSearchId: false,
            scrollPosition: 0,
            quickFilter: {},
            detectLocation: false,
            sponsorData: [],
            fromVip: parsed && (parsed.fromVip || parsed.fromGoldVip),
            search_string: '',
            showSearchBtn: false,
            scrollEventAdded: false,
            showNonIpdPopup: parsed.show_popup,
            to_be_force: 1,
            is_lead_enabled: true
        };
        return _this;
    }

    _createClass(SearchResultsView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            /*let aa = {...SCROLL}
            //aa.init()
            aa.addEvents('map')*/
            var parsed = queryString.parse(this.props.location.search);
            //API TO GET SPONSORLIST 
            var searchUrl = null;
            if (this.props.match.url.includes('-sptcit') || this.props.match.url.includes('-sptlitcit') || this.props.match.url.includes('-ipddp')) {
                searchUrl = this.props.match.url.toLowerCase();
            }

            //START Save Selected City on Location Change
            if (this.props.locationType && !this.props.locationType.includes("geo") && this.props.selectedLocation && this.props.selectedLocation.formatted_address) {

                this.setState({ search_string: this.props.selectedLocation.formatted_address });
            }
            //START Save Selected City on Location Change
            //Add Scroll Events for Sticky Search Filter for Vip Network search
            if (this.state.fromVip && !this.state.scrollEventAdded && this.refs['vip_srch_widget'] && typeof window !== 'undefined') {
                window.addEventListener('scroll', this.scrollHandler);
                this.setState({ scrollEventAdded: true });
            }

            //End Add Scroll Events for Sticky Search Filter for Vip Network search


            /*let sponsorData = {
                utm_term: parsed && parsed.utm_term?parsed.utm_term:'',
                searchUrl:searchUrl,
                specializations_ids:''
            }
            if(this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length) {
                sponsorData.specializations_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'speciality').map(x => x.id)
            }
            this.props.getSponsoredList(sponsorData, this.props.selectedLocation, (response)=>{
                this.setState({sponsorData: response})
            })*/

            //IF From VIP get nearbyDoctors
            if (this.state.fromVip) {
                var extraData = {
                    selectedLocation: this.props.selectedLocation,
                    type: parsed.fromVip ? 'is_vip' : parsed.fromGoldVip ? 'is_gold' : null
                };
                this.props.getNearbyHospitals(extraData);
                this.props.getTopHospitals(extraData);
            }

            if (this.props.mergeUrlState) {
                var getSearchId = true;
                //if search id exist in url then we get data for that search id from store
                if (this.props.location.search.includes('search_id')) {

                    if (this.props.search_id_data && this.props.search_id_data[parsed.search_id] && this.props.search_id_data[parsed.search_id].data) {

                        getSearchId = false;
                        if (this.props.search_id_data[parsed.search_id].data.result && this.props.search_id_data[parsed.search_id].data.result.length && !this.props.fetchNewResults) {

                            this.setState({ search_id: parsed.search_id }, function () {
                                _this2.props.getSearchIdResults(parsed.search_id, _this2.props.search_id_data[parsed.search_id]);
                            });
                        } else {
                            var filters = {};
                            filters.commonSelectedCriterias = this.props.search_id_data[parsed.search_id].commonSelectedCriterias;
                            filters.filterCriteria = this.props.search_id_data[parsed.search_id].filterCriteria;
                            this.setState({ search_id: parsed.search_id }, function () {
                                var page = 1;
                                if (!_this2.props.fetchNewResults) {
                                    page = parsed.page || 1;
                                }
                                _this2.props.setSearchId(parsed.search_id, filters, page);
                            });
                        }
                    }
                }

                if (getSearchId) {
                    //If no searchId in url then we create search id and store data corresponding to that search id
                    var _filters = {};
                    _filters.commonSelectedCriterias = this.props.nextSelectedCriterias;
                    _filters.filterCriteria = this.props.nextFilterCriteria;
                    var search_id = this.generateSearchId();
                    if (window) {
                        window.scrollTo(0, 0);
                    }
                    this.setState({ search_id: search_id }, function () {
                        //Check for insured user
                        if (_this2.props.is_login_user_insured && _this2.props.insurance_status == 1) {
                            _filters.filterCriteria = _extends({}, _filters.filterCriteria);
                            _filters.filterCriteria.is_insured = true;
                        }
                        var new_url = _this2.buildURI(_this2.props);
                        _this2.props.history.replace(new_url);
                        _this2.props.setSearchId(search_id, _filters, parsed.page || 1);
                    });
                }

                if (this.props.fetchNewResults) {
                    //this.getDoctorList(this.props)
                    if (window) {
                        window.scrollTo(0, 0);
                    }
                }
            }

            if (this.state.seoFriendly) {
                //this.props.mergeSelectedCriterias()
                var page = 1;
                if (parsed && parsed.page) {
                    page = parsed.page || 1;
                }
                this.props.getFooterData(this.props.match.url.split('/')[1], page).then(function (footerData) {
                    if (footerData) {
                        _this2.setState({ footerData: footerData });
                    }
                });
            }
            // if (window) {
            //     window.scrollTo(0, 0)
            // }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var _this3 = this;

            //START Save Selected City on Location Change
            if (props.selectedLocation && this.props.selectedLocation) {
                if ((this.state.search_string || this.state.fromVip) && props.selectedLocation != this.props.selectedLocation) {
                    var extraData = {
                        selectedLocation: props.selectedLocation
                    };
                    this.props.getNearbyHospitals(extraData);
                    this.setState({ search_string: props.selectedLocation.formatted_address });
                } else if (!props.locationType.includes("geo")) {
                    // this.setState({ location_object: props.selectedLocation, search: props.selectedLocation.formatted_address })
                }
            }
            //END Save Selected City on Location Change
            //Add Scroll Events for Sticky Search Filter for Vip Network search
            if (this.state.fromVip && !this.state.scrollEventAdded && this.refs['vip_srch_widget'] && typeof window !== 'undefined') {
                window.addEventListener('scroll', this.scrollHandler);
                this.setState({ scrollEventAdded: true });
            }

            //End Add Scroll Events for Sticky Search Filter for Vip Network search
            var search_id = '';
            var page = 1;
            var parsed = queryString.parse(props.location.search);
            if (props.location.search.includes('search_id')) {
                search_id = parsed.search_id;
            } else if (this.state.search_id) {
                search_id = this.state.search_id;
            }
            if (parsed.page) {
                page = parsed.page || 1;
            }

            if (props.mergeUrlState && props.mergeUrlState != this.props.mergeUrlState) {
                var filters = {};
                filters.commonSelectedCriterias = props.commonSelectedCriterias;
                filters.filterCriteria = props.filterCriteria;
                if (search_id) {
                    this.setState({ search_id: search_id }, function () {
                        var new_url = _this3.buildURI(props);
                        _this3.props.history.replace(new_url);
                        _this3.props.setSearchId(search_id, filters, page);
                    });
                } else {
                    search_id = this.generateSearchId();
                    this.setState({ search_id: search_id }, function () {
                        var new_url = _this3.buildURI(props);
                        _this3.props.history.replace(new_url);
                        //Check if user insured
                        if (props.is_login_user_insured && props.insurance_status == 1) {
                            filters.filterCriteria = _extends({}, filters.filterCriteria);
                            filters.filterCriteria.is_insured = true;
                        }

                        _this3.props.setSearchId(search_id, filters, page);
                    });
                }
                if (window) {
                    window.scrollTo(0, 0);
                }
            }

            if (props.getNewUrl && props.getNewUrl != this.props.getNewUrl && this.state.search_id) {
                if (props.fetchNewResults && props.fetchNewResults != this.props.fetchNewResults) {
                    this.getDoctorList(props);
                    // if (window) {
                    //     window.scrollTo(0, 0)
                    // }
                }
                this.buildURI(props);
            } else if (props.fetchNewResults && props.fetchNewResults != this.props.fetchNewResults && this.state.search_id) {
                if (this.state.detectLocation && this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length) {
                    this.props.cloneCommonSelectedCriterias(this.props.commonSelectedCriterias[0]);
                    var doctor_name = '',
                        hospital_name = '',
                        hospital_id = '';
                    var state = {
                        filterCriteria: _extends({}, this.props.nextFilterCriteria, {
                            sort_on: "distance",
                            doctor_name: doctor_name, hospital_name: hospital_name, hospital_id: hospital_id
                        }),
                        nextFilterCriteria: _extends({}, this.props.nextFilterCriteria, {
                            sort_on: "distance",
                            doctor_name: doctor_name, hospital_name: hospital_name, hospital_id: hospital_id
                        })
                    };

                    this.props.mergeOPDState(state, true);

                    this.props.history.push({ pathname: '/opd/searchresults' });
                } else {
                    this.setState({ setSearchId: true });
                    this.getDoctorList(props);
                }
                // if (window) {
                //     window.scrollTo(0, 0)
                // }
            } else if (props.fetchNewResults && this.state.search_id == search_id && !this.state.setSearchId && this.state.search_id) {
                this.setState({ setSearchId: true });
                this.getDoctorList(props);
                if (window) {
                    window.scrollTo(0, 0);
                }
            } else {
                //Whenever location changes make api calls
                if (props.selectedLocation != this.props.selectedLocation && props.mergeUrlState) {
                    var new_url = this.buildURI(props);
                    this.props.history.replace(new_url);
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (typeof window !== 'undefined' && this.state.scrollEventAdded) {
                window.removeEventListener('scroll', this.scrollHandler);
            }
        }
    }, {
        key: 'detectLocationClick',
        value: function detectLocationClick() {
            this.setState({ detectLocation: true });
        }
    }, {
        key: 'generateSearchId',
        value: function generateSearchId(uid_string) {
            //method to generate search id
            uid_string = 'xxyyxxxx-xxyx-4xxx-yxxx-xxxyyyxxxxxx';
            var dt = new Date().getTime();
            var uuid = uid_string.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
            return uuid;
        }
    }, {
        key: 'getLocationParam',
        value: function getLocationParam(tag) {
            // this API assumes the context of react-router-4
            var paramString = this.props.location.search;
            var params = new URLSearchParams(paramString);
            return params.get(tag);
        }
    }, {
        key: 'applyFilters',
        value: function applyFilters(filterState) {
            // clear LANDING_PAGE to enable loader
            //apply filters and get updated data
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object') {
                window.ON_LANDING_PAGE = false;
            }
            this.resetQuickFilters();
            var search_id_data = Object.assign({}, this.props.search_id_data);
            var parsed = queryString.parse(this.props.location.search);

            if (this.props.search_id_data && this.state.search_id && this.props.search_id_data[this.state.search_id]) {
                search_id_data[this.state.search_id].filterCriteria = filterState;
                search_id_data[this.state.search_id].page = 1;
            }
            this.props.mergeOPDState({ filterCriteria: filterState, search_id_data: search_id_data, page: 1 });
            // this.props.setSearchId(this.state.search_id, filterState, false)
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'buildURI',
        value: function buildURI(state) {
            //keep on updating url with the updated filters 
            var parsed = queryString.parse(this.props.location.search);

            var selectedLocation = state.selectedLocation,
                commonSelectedCriterias = state.commonSelectedCriterias,
                filterCriteria = state.filterCriteria,
                locationType = state.locationType,
                page = state.page;

            var specializations_ids = commonSelectedCriterias.filter(function (x) {
                return x.type == 'speciality';
            }).map(function (x) {
                return x.id;
            });
            var condition_ids = commonSelectedCriterias.filter(function (x) {
                return x.type == 'condition';
            }).map(function (x) {
                return x.id;
            });
            var procedures_ids = commonSelectedCriterias.filter(function (x) {
                return x.type == 'procedures';
            }).map(function (x) {
                return x.id;
            });
            var category_ids = commonSelectedCriterias.filter(function (x) {
                return x.type == 'procedures_category';
            }).map(function (x) {
                return x.id;
            });

            var ipd_ids = commonSelectedCriterias.filter(function (x) {
                return x.type == 'ipd';
            }).map(function (x) {
                return x.id;
            });

            var group_ids = commonSelectedCriterias.filter(function (x) {
                return x.type == 'group_ids';
            }).map(function (x) {
                return x.id;
            });

            var lat = 28.644800;
            var long = 77.216721;
            var place_id = "";
            var locality = 'Delhi';
            var sub_locality = '';

            if (selectedLocation) {
                place_id = selectedLocation.place_id || "";
                lat = selectedLocation.geometry.location.lat;
                long = selectedLocation.geometry.location.lng;
                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();

                lat = parseFloat(parseFloat(lat).toFixed(6));
                long = parseFloat(parseFloat(long).toFixed(6));

                locality = selectedLocation.locality || '';
                sub_locality = selectedLocation.sub_locality || '';
            }
            /*
                    let min_fees = filterCriteria.priceRange[0]
                    let max_fees = filterCriteria.priceRange[1]
                    let min_distance = filterCriteria.distanceRange[0]
                    let max_distance = filterCriteria.distanceRange[1]
                    let sort_on = filterCriteria.sort_on || ""
                    let is_available = filterCriteria.is_available
                    let is_female = filterCriteria.is_female
            
            */
            var sort_on = filterCriteria.sort_on || "";
            var sort_order = filterCriteria.sort_order || "";
            var availability = filterCriteria.availability || [];
            var avg_ratings = filterCriteria.avg_ratings || [];
            var gender = filterCriteria.gender || '';
            var sits_at_hospital = filterCriteria.sits_at_hospital;
            var sits_at_clinic = filterCriteria.sits_at_clinic;

            var hospital_name = filterCriteria.hospital_name || "";
            var doctor_name = filterCriteria.doctor_name || "";
            var hospital_id = filterCriteria.hospital_id || "";
            var is_insured = filterCriteria.is_insured || false;
            var specialization_filter_ids = filterCriteria.specialization_filter_ids || [];

            var url = '';

            //Check if any filter applied 
            var is_filter_applied = false;

            if (sort_on) {
                is_filter_applied = true;
            }
            if (availability && availability.length) {
                is_filter_applied = true;
            }

            if (avg_ratings && avg_ratings.length) {
                is_filter_applied = true;
            }

            if (gender) {
                is_filter_applied = true;
            }
            if (hospital_name) {
                is_filter_applied = true;
            }
            if (doctor_name) {
                is_filter_applied = true;
            }
            if (hospital_id) {
                is_filter_applied = true;
            }

            if (specialization_filter_ids && specialization_filter_ids.length) {
                is_filter_applied = true;
            }

            if (parsed && parsed.fromVip) {
                is_filter_applied = true;
            }

            if (parsed && parsed.fromGoldVip) {
                is_filter_applied = true;
            }

            var is_params_exist = false;
            url = '' + window.location.pathname;

            if (page > 1) {
                url += '?page=' + page;
                is_params_exist = true;
            }

            url += (is_params_exist ? '&' : '?') + 'search_id=' + this.state.search_id;
            is_params_exist = true;
            if (is_filter_applied || !this.state.seoFriendly) {

                url += '&specializations=' + specializations_ids + '&conditions=' + condition_ids + '&lat=' + lat + '&long=' + long + '&sort_on=' + sort_on + '&sort_order=' + sort_order + '&availability=' + availability + '&gender=' + gender + '&avg_ratings=' + avg_ratings + '&doctor_name=' + (doctor_name || "") + '&hospital_name=' + (hospital_name || "") + '&place_id=' + place_id + '&locationType=' + (locationType || "") + '&procedure_ids=' + (procedures_ids || "") + '&procedure_category_ids=' + (category_ids || "") + '&hospital_id=' + hospital_id + '&ipd_procedures=' + (ipd_ids || '') + '&is_insured=' + is_insured + '&locality=' + locality + '&sub_locality=' + sub_locality + '&sits_at_hospital=' + sits_at_hospital + '&sits_at_clinic=' + sits_at_clinic + '&group_ids=' + group_ids + '&specialization_filter_ids=' + specialization_filter_ids;

                if (parsed && parsed.fromVip) {
                    url += '&fromVip=' + (parsed.fromVip || '');
                }

                if (parsed && parsed.utm_term) {
                    url += '&utm_term=' + (parsed.utm_term || '');
                }

                if (parsed && parsed.fromGoldVip) {
                    url += '&fromGoldVip=' + (parsed.fromGoldVip || '');
                }

                is_params_exist = true;
            } /* else if (this.state.seoFriendly) {
                  url = `${window.location.pathname}`
              }*/

            if (parsed.utm_source) {
                url += '&utm_source=' + (parsed.utm_source || '');
            }

            if (parsed.utm_medium) {
                url += '&utm_medium=' + (parsed.utm_medium || '');
            }

            if (parsed.utm_campaign) {
                url += '&utm_campaign=' + (parsed.utm_campaign || '');
            }

            if (this.state.clinic_card) {
                url += (is_params_exist ? '&' : '?') + 'clinic_card=true';
                is_params_exist = true;
            }

            if (parsed.get_feedback) {
                url += (is_params_exist ? '&' : '?') + 'get_feedback=' + parsed.get_feedback;
                is_params_exist = true;
            }

            if (parsed.showPopup) {
                url += (is_params_exist ? '&' : '?') + 'showPopup=' + parsed.showPopup;
                is_params_exist = true;
            }

            if (this.state.showNonIpdPopup) {
                url += '' + ('&show_popup=' + this.state.showNonIpdPopup);
            }

            return url;
        }
    }, {
        key: 'getDoctorList',
        value: function getDoctorList() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var _this4 = this;

            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            //get doctor list on filters applied
            var searchUrl = null;
            if (this.props.match.url.includes('-sptcit') || this.props.match.url.includes('-sptlitcit') || this.props.match.url.includes('-ipddp')) {
                searchUrl = this.props.match.url.toLowerCase();
            }
            if (page === null) {
                page = this.props.page;
            }
            if (!state) {
                state = this.props;
            } else if (state.page) {
                page = state.page;
            }
            this.props.getDoctors(state, page, false, searchUrl, function () {
                // this.setState({ seoData: args[1] })
                if (cb) {
                    cb.apply(undefined, arguments);
                    var new_url = _this4.buildURI(state);
                    _this4.props.history.replace(new_url);
                } else {
                    var _new_url = _this4.buildURI(state);
                    _this4.props.history.replace(_new_url);
                }
            }, this.state.clinic_card).catch(function (e) {
                _this4.setState({ showError: true });
            });
        }
    }, {
        key: 'getMetaTagsData',
        value: function getMetaTagsData(seoData) {
            var title = '';
            var description = "";
            if (this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length) {
                title = this.props.commonSelectedCriterias[0].name + ' : Book Best ' + this.props.commonSelectedCriterias[0].name + ' Doctors Near You';
                description = this.props.commonSelectedCriterias[0].name + ': Book appointment with the best ' + this.props.commonSelectedCriterias[0].name + ' from top hospitals and clinics near you at discounted price. Check doctor reviews and more.';
            }
            var schema = {};
            if (seoData) {
                title = seoData.title || title;
                description = seoData.description || description;
                schema = seoData.schema || schema;
            }
            if (parseInt(this.props.page) != 1) {
                title = 'Page ' + this.props.page + ' - ' + title;
            }
            return { title: title, description: description, schema: schema };
        }
    }, {
        key: 'resetQuickFilters',
        value: function resetQuickFilters() {
            this.setState({ quickFilter: {} });
        }
    }, {
        key: 'applyQuickFilter',
        value: function applyQuickFilter(filter) {
            this.setState({ quickFilter: filter });
        }
    }, {
        key: 'isFilterApplied',
        value: function isFilterApplied(filterCriteria) {
            //Check if any filter applied 
            var is_filter_applied = false;
            if (filterCriteria) {
                var sort_on = filterCriteria.sort_on || "";
                var sort_order = filterCriteria.sort_order || "";
                var availability = filterCriteria.availability || [];
                var avg_ratings = filterCriteria.avg_ratings || [];
                var gender = filterCriteria.gender || '';
                var sits_at_hospital = filterCriteria.sits_at_hospital;
                var sits_at_clinic = filterCriteria.sits_at_clinic;

                var hospital_name = filterCriteria.hospital_name || "";
                var doctor_name = filterCriteria.doctor_name || "";
                var hospital_id = filterCriteria.hospital_id || "";
                var is_insured = filterCriteria.is_insured || false;

                if (sort_on) {
                    is_filter_applied = true;
                }
                if (availability && availability.length) {
                    is_filter_applied = true;
                }

                if (avg_ratings && avg_ratings.length) {
                    is_filter_applied = true;
                }

                if (gender) {
                    is_filter_applied = true;
                }
            }

            return is_filter_applied;
        }
    }, {
        key: 'searchDoctorSpecialization',
        value: function searchDoctorSpecialization(speciality, isViewAll) {
            var _this5 = this;

            //filter to search doctor specialization
            if (window) {
                window.scrollTo(0, 0);
            }
            var specialityData = {};
            var ViewAllData = [];
            if (isViewAll) {
                speciality.map(function (spec, i) {
                    ViewAllData.push({ id: spec.specialization_id, type: 'speciality' });
                });

                var state = {};
                var hospital_id = '';
                var doctor_name = '';
                var hospital_name = '';
                if (ViewAllData.length) {
                    this.props.cloneCommonSelectedCriterias(ViewAllData);
                }

                state = {
                    filterCriteria: _extends({}, this.props.filterCriteria, {
                        hospital_id: hospital_id, doctor_name: doctor_name, hospital_name: hospital_name
                    }),
                    nextFilterCriteria: _extends({}, this.props.filterCriteria, {
                        hospital_id: hospital_id, doctor_name: doctor_name, hospital_name: hospital_name
                    })
                };
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'SimilarSpecializationsViewAll', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'similar-specializations-viewall'
                };
                _gtm2.default.sendEvent({ data: data });
                this.props.mergeOPDState(state);
                this.props.history.push('/opd/searchresults');
            } else {
                specialityData.type = 'speciality';
                specialityData.name = speciality.specialization_name;
                specialityData.id = speciality.specialization_id;
                this.props.toggleOPDCriteria('speciality', specialityData, true);
                setTimeout(function () {
                    _this5.props.history.push('/opd/searchresults');
                }, 100);
                var _data = {
                    'Category': 'ConsumerApp', 'Action': 'SimilarSpecializations', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'similar-specializations'
                };
                _gtm2.default.sendEvent({ data: _data });
            }
        }
    }, {
        key: 'SimilarSpecialization',
        value: function SimilarSpecialization(flag) {
            /*
            let dataLength = parseInt(this.props.similar_specializations.length/2)
            let count = 0
            if (!flag) {
            count = dataLength;
            dataLength = 
            }*/
            //funciton to return search specialization to render
            var dataModel = [];
            for (var i = 0; i < this.props.similar_specializations.length; i++) {
                if (flag && i % 2 == 0) {
                    dataModel.push(_react2.default.createElement(
                        'span',
                        { id: this.props.similar_specializations[i].specialization_id, onClick: this.searchDoctorSpecialization.bind(this, this.props.similar_specializations[i], false) },
                        this.props.similar_specializations[i].specialization_name
                    ));
                }
                if (!flag && i % 2 != 0) {
                    dataModel.push(_react2.default.createElement(
                        'span',
                        { id: this.props.similar_specializations[i].specialization_id, onClick: this.searchDoctorSpecialization.bind(this, this.props.similar_specializations[i], false) },
                        this.props.similar_specializations[i].specialization_name
                    ));
                }
            }
            return dataModel;
        }
    }, {
        key: 'SimilarSpecializationData',
        value: function SimilarSpecializationData() {
            var data = _react2.default.createElement(
                'div',
                { className: 'sort-sub-filter-container mb-3 pb-0' },
                _react2.default.createElement(
                    'p',
                    null,
                    'Looking for other related',
                    _react2.default.createElement(
                        'span',
                        { className: 'fw-700' },
                        ' specializations? '
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'fw-500 sort-more-filter', onClick: this.searchDoctorSpecialization.bind(this, this.props.similar_specializations, true) },
                        'Search all'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'doc-sld-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'sm-chips-container' },
                        this.SimilarSpecialization(true)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sm-chips-container' },
                        this.SimilarSpecialization(false)
                    )
                )
            );
            return data;
        }
    }, {
        key: 'sortFilterClicked',
        value: function sortFilterClicked() {
            //function which called when we click on screen-filters 
            if (this.child && this.child.sortFilterClicked) {
                this.child.sortFilterClicked();
            }
        }
    }, {
        key: 'hospitalCardClicked',
        value: function hospitalCardClicked() {
            var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var data = arguments[1];

            var gtmData = {};
            if (top) {
                gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'nearby-hospitals-clicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'nearby-hospitals-clicked'
                };
            } else {
                gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'tophospitalsClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'top-hospitals-clicked'
                };
            }
            _gtm2.default.sendEvent({ data: gtmData });
            var redirectUrl = '';

            if (data.url) {
                redirectUrl = '/' + data.url + '?showPopup=true';
            } else {
                redirectUrl = '/ipd/hospital/' + data.id + '?showPopup=true';
            }
            this.props.history.push(redirectUrl);
        }
    }, {
        key: 'navigateToSearchVip',
        value: function navigateToSearchVip() {
            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'search-bar-clicked-fromVip', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'search-bar-clicked-fromVip'
            };
            _gtm2.default.sendEvent({ data: gtmData });
            this.props.history.push('/search');
        }
    }, {
        key: 'viewAllHospitalClicked',
        value: function viewAllHospitalClicked() {
            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'DoctorSearchHospitalViewAllClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-search-hospital-view-all-clicked'
            };
            _gtm2.default.sendEvent({ data: gtmData });
            this.props.mergeIpdCriteria({
                commonSelectedCriterias: [],
                nextSelectedCriterias: []
            });
            this.props.history.push('/ipd/searchHospitals');
        }
    }, {
        key: 'nonIpdLeads',
        value: function nonIpdLeads(phone_number) {
            var _this6 = this;

            var parsed = queryString.parse(this.props.location.search);
            var criteriaStr = this.getCriteriaString(this.props.commonSelectedCriterias);
            var data = { phone_number: phone_number, lead_source: 'docads', source: parsed, lead_type: 'DOCADS', doctor_name: criteriaStr, exitpoint_url: 'http://docprime.com' + this.props.location.pathname, doctor_id: null, hospital_id: null, hospital_name: null };
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
            var gtm_data = { 'Category': 'ConsumerApp', 'Action': 'DocAdsSearchListingSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-search-listing-Submit-click' };
            _gtm2.default.sendEvent({ data: gtm_data });
            this.props.saveLeadPhnNumber(phone_number);
            if (this.state.is_lead_enabled && !_storage2.default.isAgent()) {
                this.setState({ is_lead_enabled: false });
                this.props.NonIpdBookingLead(data);
                setTimeout(function () {
                    _this6.setState({ is_lead_enabled: true });
                }, 5000);
            }
            this.setState({ to_be_force: 0 });
        }
    }, {
        key: 'closeIpdLeadPopup',
        value: function closeIpdLeadPopup(from) {
            if (from) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'DocAdsSearchListingCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-search-listing-cross-click'
                };
                _gtm2.default.sendEvent({ data: data });
                this.setState({ to_be_force: 0 });
            }
        }
    }, {
        key: 'getCriteriaString',
        value: function getCriteriaString(selectedCriterias) {
            if (selectedCriterias && selectedCriterias.length) {
                var is_group_ids_exist = selectedCriterias.filter(function (x) {
                    return x.type == 'group_ids';
                });
                var selectedDataView = is_group_ids_exist.length ? is_group_ids_exist : selectedCriterias;

                return selectedDataView.reduce(function (final, curr, i) {
                    if (i != 0) {
                        final += ', ';
                    }
                    final += '' + curr.name;
                    return final;
                }, "");
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var show_pagination = this.props.doctorList && this.props.doctorList.length > 0;
            var url = '' + _config2.default.API_BASE_URL + this.props.location.pathname;
            url = url.replace(/&page=\d{1,}/, "");
            var page = "";
            var curr_page = parseInt(this.props.page);
            var prev = "";
            if (curr_page > 1) {
                page = '?page=' + curr_page;
                prev = url;
                if (curr_page > 2) {
                    prev += '?page=' + (curr_page - 1);
                }
            }
            var next = "";
            if (this.props.count > curr_page * 20) {
                next = url + ('?page=' + (curr_page + 1));
            }

            // do not set rel next/prev for non seoFriendly pages
            if (!this.state.seoFriendly) {
                next = "";
                prev = "";
            }

            // check if this was the landing page
            var landing_page = false;
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE) {
                landing_page = true;
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        canonicalUrl: '' + _config2.default.API_BASE_URL + (this.props.canonical_url ? '/' + this.props.canonical_url : this.props.match.url) + page,
                        title: this.getMetaTagsData(this.props.seoData).title,
                        description: this.getMetaTagsData(this.props.seoData).description,
                        schema: this.getMetaTagsData(this.props.seoData).schema,
                        seoFriendly: this.state.seoFriendly,
                        prev: prev,
                        next: next,
                        ogType: 'Website',
                        ogSiteName: 'Docprime',
                        ogTitle: this.getMetaTagsData(this.props.seoData).title,
                        ogDescription: this.getMetaTagsData(this.props.seoData).description
                    } }),
                _react2.default.createElement(
                    _criteriaSearch2.default,
                    _extends({}, this.props, { checkForLoad: landing_page || this.props.LOADED_DOCTOR_SEARCH || this.state.showError, title: 'Search For Disease or Doctor.', type: 'opd', goBack: true, clinic_card: !!this.state.clinic_card, newChatBtn: true, searchDoctors: true }),
                    this.state.showError ? _react2.default.createElement(
                        'div',
                        { className: 'norf' },
                        'No Results Found!!'
                    ) : _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_newTopBar2.default, _extends({}, this.props, { applyFilters: this.applyFilters.bind(this), seoData: this.props.seoData, clinic_card: !!this.state.clinic_card, seoFriendly: this.state.seoFriendly, resetQuickFilters: this.resetQuickFilters.bind(this), quickFilter: this.state.quickFilter, fromVip: this.state.fromVip, topBarRef: function topBarRef(ref) {
                                return _this7.child = ref;
                            } })),
                        this.state.clinic_card && this.props.hospitalList && this.props.hospitalList.length == 0 || this.props.doctorList && this.props.doctorList.length == 0 ? _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'container-fluid cardMainPaddingRmv' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'pkg-card-container mt-20 mb-3' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'pkg-no-result' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'pkg-n-rslt' },
                                            'No result found!'
                                        ),
                                        this.isFilterApplied(this.props.filterCriteria) ? _react2.default.createElement(
                                            _react2.default.Fragment,
                                            null,
                                            _react2.default.createElement('img', { className: 'n-rslt-img', src: "/assets" + '/img/no-result.png' }),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'pkg-ty-agn cursor-pntr', onClick: this.applyQuickFilter.bind(this, { viewMore: true }) },
                                                'Try again with fewer filters'
                                            )
                                        ) : _react2.default.createElement(
                                            _react2.default.Fragment,
                                            null,
                                            _react2.default.createElement('img', { style: { width: '130px' }, className: 'n-rslt-img', src: "/assets" + '/img/vct-no.png' }),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'pkg-ty-agn text-dark text-center' },
                                                'Can\u2019t find your doctor here?',
                                                _react2.default.createElement('br', null),
                                                'Help us to list your doctor'
                                            ),
                                            _react2.default.createElement(
                                                'button',
                                                { className: 'referDoctorbtn', onClick: function onClick(e) {
                                                        e.preventDefault();
                                                        var data = {
                                                            'Category': 'ConsumerApp', 'Action': 'ReferDoctorListNoresult', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'refer-doctor-list-noresult'
                                                        };
                                                        _gtm2.default.sendEvent({ data: data });
                                                        _this7.props.history.push('/doctorsignup?member_type=1');
                                                    } },
                                                'Refer your Doctor'
                                            )
                                        )
                                    )
                                ),
                                this.props.similar_specializations && this.props.similar_specializations.length && !this.state.sort_order && (!this.state.availability || !this.state.availability.length) && this.props.count == 0 ? this.SimilarSpecializationData() : ''
                            )
                        ) : _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            this.state.fromVip && _react2.default.createElement(
                                _react2.default.Fragment,
                                null,
                                this.props.topHospitals && this.props.topHospitals.top_hospitals && this.props.topHospitals.top_hospitals.length > 0 && _react2.default.createElement(_carouselView2.default, { topHeading: 'Top Hospitals', dataList: this.props.topHospitals.top_hospitals, dataType: 'topHospitals', carouselCardClicked: function carouselCardClicked(top, data) {
                                        return _this7.hospitalCardClicked(top, data);
                                    }, topHospital: true }),
                                this.props.nearbyHospitals && this.props.nearbyHospitals.hospitals && this.props.nearbyHospitals.hospitals.length > 0 && _react2.default.createElement(_carouselView2.default, { topHeading: 'Nearby Hospitals', dataList: this.props.nearbyHospitals.hospitals, dataType: 'nearbyHospitals', carouselCardClicked: function carouselCardClicked(top, data) {
                                        return _this7.hospitalCardClicked(top, data);
                                    }, extraHeading: 'View All', navigateTo: function navigateTo() {
                                        return _this7.viewAllHospitalClicked();
                                    } }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row vipNetTop searchForVip filter-row sticky-header mbl-stick sort-sticky-network', ref: 'vip_srch_widget' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'srt-scrl-btn', onClick: function onClick() {
                                                return _this7.sortFilterClicked();
                                            } },
                                        _react2.default.createElement('img', { src: "/assets" + '/img/filtersort.png' }),
                                        ' Sort/Filter'
                                    )
                                )
                            ),
                            _react2.default.createElement(_index2.default, _extends({}, this.props, { applyFilters: this.applyFilters.bind(this), getDoctorList: this.getDoctorList.bind(this), clinic_card: !!this.state.clinic_card, seoFriendly: this.state.seoFriendly, detectLocationClick: function detectLocationClick() {
                                    return _this7.detectLocationClick();
                                }, applyQuickFilter: this.applyQuickFilter.bind(this), SimilarSpecializationData: this.SimilarSpecializationData.bind(this), sponsorData: this.state.sponsorData })),
                            this.state.seoFriendly && show_pagination ? _react2.default.createElement(
                                'div',
                                { className: 'art-pagination-div' },
                                prev ? _react2.default.createElement(
                                    'a',
                                    { href: prev },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'art-pagination-btn' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'fw-500' },
                                            curr_page - 1
                                        )
                                    )
                                ) : "",
                                _react2.default.createElement(
                                    'div',
                                    { className: 'art-pagination-btn' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'fw-500', style: { color: '#000' } },
                                        curr_page
                                    )
                                ),
                                next ? _react2.default.createElement(
                                    'a',
                                    { href: next },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'art-pagination-btn' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'fw-500' },
                                            curr_page + 1
                                        )
                                    )
                                ) : ""
                            ) : ""
                        )
                    )
                ),
                _react2.default.createElement(_footer2.default, { footerData: this.state.footerData })
            );
        }
    }]);

    return SearchResultsView;
}(_react2.default.Component);

exports.default = SearchResultsView;

/***/ }),

/***/ "./dev/js/components/opd/searchResults/carouselView.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/opd/searchResults/carouselView.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselView = function (_React$Component) {
				_inherits(CarouselView, _React$Component);

				function CarouselView() {
								_classCallCheck(this, CarouselView);

								return _possibleConstructorReturn(this, (CarouselView.__proto__ || Object.getPrototypeOf(CarouselView)).apply(this, arguments));
				}

				_createClass(CarouselView, [{
								key: 'scroll',
								value: function scroll(type) {
												var elmnt = document.getElementById('top_' + this.props.dataType);

												if (elmnt && document.getElementsByClassName('top_' + this.props.dataType + '_list') && document.getElementById('leftArrow_' + this.props.dataType) && document.getElementById('RightArrow_' + this.props.dataType)) {

																var outerDivWidth = elmnt.offsetWidth;
																var childDivWidth = document.getElementsByClassName('top_' + this.props.dataType + '_list')[0].offsetWidth;
																var cardCount = document.getElementsByClassName('top_' + this.props.dataType + '_list')[0].childElementCount;
																var cardWidth = Math.ceil(childDivWidth / cardCount);

																var leftScroll = elmnt.scrollLeft;
																var scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
																var cardEnd = cardCount * cardWidth;

																if (type == 'right') {
																				elmnt.scroll({ left: leftScroll + scrollVal, behavior: 'smooth' });
																				if (cardEnd <= leftScroll + scrollVal + outerDivWidth) {
																								document.getElementById('leftArrow_' + this.props.dataType).classList.add("d-none");
																				}
																				document.getElementById('RightArrow_' + this.props.dataType).classList.remove("d-none");
																} else {
																				elmnt.scroll({ left: leftScroll - scrollVal, behavior: 'smooth' });
																				if (leftScroll - scrollVal <= 0) {
																								document.getElementById('RightArrow_' + this.props.dataType).classList.add("d-none");
																				}
																				document.getElementById('leftArrow_' + this.props.dataType).classList.remove("d-none");
																}
												}
								}
				}, {
								key: 'render',
								value: function render() {
												var _this2 = this;

												var _props = this.props,
												    topHeading = _props.topHeading,
												    dataList = _props.dataList,
												    dataType = _props.dataType,
												    topHospital = _props.topHospital,
												    extraHeading = _props.extraHeading,
												    viewAll = _props.viewAll;

												return _react2.default.createElement(
																'div',
																{ className: 'pakg-slider-container mt-10 mb-10 pkg-ntwk-mrgn' },
																_react2.default.createElement(
																				'div',
																				{ className: 'pkgSliderHeading pl-1' },
																				_react2.default.createElement(
																								'h5',
																								null,
																								topHeading || ''
																				),
																				extraHeading && (viewAll || dataList.length >= 20) && _react2.default.createElement(
																								'span',
																								{ onClick: function onClick() {
																																return _this2.props.navigateTo();
																												} },
																								extraHeading
																				)
																),
																_react2.default.createElement(
																				'div',
																				{ className: 'pkgSliderContainer network-slider', id: 'top_' + this.props.dataType },
																				_react2.default.createElement(
																								'div',
																								{ className: 'pkgCardsList d-inline-flex sub-wd-cards top_' + this.props.dataType + '_list' },
																								dataList.map(function (data, key) {
																												return _react2.default.createElement(
																																'a',
																																{ key: key + '_' + data.id, href: '', className: 'pkgcustCards', onClick: function onClick() {
																																								return _this2.props.carouselCardClicked(data, topHospital ? true : false);
																																				} },
																																_react2.default.createElement(
																																				'div',
																																				{ className: 'pkgcardImgCont' },
																																				data.logo && _react2.default.createElement('img', { style: { width: '82px' }, className: 'img-fluid', src: data.logo })
																																),
																																_react2.default.createElement(
																																				'p',
																																				{ className: 'pkgtstName prcd-height' },
																																				data.name
																																)
																												);
																								})
																				)
																),
																_react2.default.createElement(
																				'div',
																				{ className: 'pkglftRhtbtncont netwrk-btns' },
																				_react2.default.createElement(
																								'div',
																								{ className: 'pkg-btnlft d-none', id: 'RightArrow_' + dataType, onClick: this.scroll.bind(this, 'left') },
																								_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
																				),
																				_react2.default.createElement(
																								'div',
																								{ className: 'pkg-btnrgt', id: 'leftArrow_' + dataType, onClick: this.scroll.bind(this, 'right') },
																								_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
																				)
																)
												);
								}
				}]);

				return CarouselView;
}(_react2.default.Component);

exports.default = CarouselView;

/***/ }),

/***/ "./dev/js/components/opd/searchResults/doctorsList/DoctorsList.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/opd/searchResults/doctorsList/DoctorsList.js ***!
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

var _doctorResultCard = __webpack_require__(/*! ../../commons/doctorResultCard */ "./dev/js/components/opd/commons/doctorResultCard/index.js");

var _doctorResultCard2 = _interopRequireDefault(_doctorResultCard);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _Loader = __webpack_require__(/*! ../../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _clinicResultCard = __webpack_require__(/*! ../../commons/clinicResultCard */ "./dev/js/components/opd/commons/clinicResultCard/index.js");

var _clinicResultCard2 = _interopRequireDefault(_clinicResultCard);

var _bannerCarousel = __webpack_require__(/*! ../../../commons/Home/bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _mapHelpers = __webpack_require__(/*! ../../../../helpers/mapHelpers */ "./dev/js/helpers/mapHelpers.js");

var _RatingStars = __webpack_require__(/*! ../../../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DoctorsList = function (_React$Component) {
    _inherits(DoctorsList, _React$Component);

    function DoctorsList(props) {
        _classCallCheck(this, DoctorsList);

        var _this = _possibleConstructorReturn(this, (DoctorsList.__proto__ || Object.getPrototypeOf(DoctorsList)).call(this, props));

        _this.state = {
            hasMore: false,
            loading: false,
            renderBlock: false,
            page: 1,
            readMore: 'search-details-data-less',
            is_insured: props.filterCriteria && props.filterCriteria.is_insured ? props.filterCriteria.is_insured : false,
            availability: [],
            sort_on: '',
            sort_order: '',
            detectLoading: false
        };
        return _this;
    }

    _createClass(DoctorsList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            /**
             * Below code ensures smooth back page transitions in case of huge data sets, and maintains scroll position.
             * renderBlock = true (by default) will block render until the page transition is completed, and once its done, it will then render and set scroll position accordingly
             
            setTimeout(() => {
                if (this.refs.checkIfExists) {
                    this.setState({ renderBlock: false })
                }
                setTimeout(() => {
                    if (window) {
                        let scroll_pos = window.OPD_SCROLL_POS ? (window.OPD_SCROLL_POS) : 0
                        // TODO: improve scroll back logic
                        window.scrollTo(0, scroll_pos || 0)
                        window.OPD_SCROLL_POS = 0
                         window.onscroll = function () {
                            window.OPD_SCROLL_POS = window.pageYOffset
                        }
                    }
                }, 100)
            }, 100)
            
            */
            setTimeout(function () {
                _this2.setState({ hasMore: true });
            }, 0);
            this.setState(_extends({}, this.props.filterCriteria));
            var selectedLocation = '';
            var lat = 28.644800;
            var long = 77.216721;
            if (this.props.selectedLocation) {
                selectedLocation = this.props.selectedLocation;
                lat = selectedLocation.geometry.location.lat;
                long = selectedLocation.geometry.location.lng;
                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();
            }

            this.props.getOfferList(lat, long);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.filterCriteria) {
                this.setState({ sort_on: props.filterCriteria.sort_on, sort_order: props.filterCriteria.sort_order, availability: props.filterCriteria.availability || [] });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'DoctorSearchPagination', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-search-pagination', 'Pages': this.state.page
            };
            _gtm2.default.sendEvent({ data: data });

            // if (window) {
            //     window.onscroll = null
            // }
        }
    }, {
        key: 'getLocationParam',
        value: function getLocationParam(tag) {
            // this API assumes the context of react-router-4
            var paramString = this.props.location.search;
            var params = new URLSearchParams(paramString);
            return params.get(tag);
        }
    }, {
        key: 'loadMore',
        value: function loadMore(page) {
            var _this3 = this;

            this.setState({ hasMore: false, loading: true });
            this.props.getDoctorList(null, page + 1, function (hasMore) {
                _this3.setState({ loading: false, page: page + 1 });
                setTimeout(function () {
                    _this3.setState({ hasMore: hasMore });
                }, 1000);
            });
        }
    }, {
        key: 'toggleScroll',
        value: function toggleScroll() {
            if (window) {
                window.scrollTo(0, 0);
            }
            this.setState({ readMore: 'search-details-data-less' });
        }
    }, {
        key: 'applyQuickFilters',
        value: function applyQuickFilters(type, val, isArray, e) {
            var _this4 = this;

            var value = val;
            if (isArray) {
                var selectedVal = [].concat(this.state[type]) || [];
                var found = false;
                value = selectedVal.filter(function (data) {
                    if (data == val) {
                        found = true;
                        return false;
                    }
                    return true;
                });
                if (!found) {
                    value.push(val);
                }
            }

            var gtmData = {
                'Category': 'OpdQuickFilterClicked', 'Action': 'OpdQuickFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-quick-filter-clicked', 'url': window.location.pathname, 'type': type, 'val': val
            };
            _gtm2.default.sendEvent({ data: gtmData });

            var filters = _extends({}, this.props.filterCriteria);
            if (type.includes('sort_on')) {

                if (val.includes('price_asc') || val.includes('price_desc')) {

                    if (this.state[type] == 'fees' && (this.state['sort_order'] == 'asc' && val.includes('price_asc') || this.state['sort_order'] == 'desc' && val.includes('price_desc'))) {
                        this.setState({ sort_on: null, sort_order: null }, function () {
                            filters = Object.assign(_extends({ filters: filters }, _this4.state));
                            _this4.props.applyFilters(filters);
                        });
                    } else {
                        this.setState({ sort_on: 'fees', sort_order: val.includes('price_asc') ? 'asc' : 'desc' }, function () {
                            filters = Object.assign(_extends({ filters: filters }, _this4.state));
                            _this4.props.applyFilters(filters);
                        });
                    }
                } else {
                    this.setState({ sort_on: this.state[type] == value ? null : value, sort_order: null }, function () {
                        filters = Object.assign(_extends({ filters: filters }, _this4.state));
                        _this4.props.applyFilters(filters);
                    });
                }
            } else {
                this.setState(_defineProperty({}, type, this.state[type] == value ? '' : value), function () {
                    filters = Object.assign(_extends({ filters: filters }, _this4.state));
                    _this4.props.applyFilters(filters);
                });
            }
        }
    }, {
        key: 'viewMoreClicked',
        value: function viewMoreClicked() {
            var filters = {
                viewMore: true
            };
            this.props.applyQuickFilter(filters);
        }
    }, {
        key: 'detectLocation',
        value: function detectLocation(type) {
            var _this5 = this;

            var timeout = setTimeout(function () {
                if (_this5.state.detectLoading) {
                    _this5.setState({ detectLoading: false });
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not fetch location." });
                }
            }, 5000);

            var data = {
                'Category': 'ConsumerApp', 'Action': 'DetectLocation' + type + 'Click', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'Detect-Location-' + type + '-Click', 'Page': 'doctor-search'
            };
            _gtm2.default.sendEvent({ data: data });

            this.setState({ detectLoading: true });
            this.props.detectLocationClick();
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    (0, _mapHelpers._getlocationFromLatLong)(parseFloat(position.coords.latitude), parseFloat(position.coords.longitude), 'locality', function (location_object) {
                        _this5.props.selectLocation(location_object, 'autoDetect').then(function () {
                            clearTimeout(timeout);
                            _this5.setState({ detectLoading: false });
                        });
                    });
                }, function (a, b, c) {
                    _this5.setState({ detectLoading: false });
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not fetch location." });
                }, function (a, b, c) {
                    _this5.setState({ detectLoading: false });
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not fetch location." });
                });
            } else {
                this.setState({ detectLoading: false });
                // geolocation is not supported
            }
        }
    }, {
        key: 'navigateToHospital',
        value: function navigateToHospital(data) {
            var gtmData = {
                'Category': 'ConsumerApp', 'Action': 'SponsorCardClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'sponsor-card-clicked'
            };
            _gtm2.default.sendEvent({ data: gtmData });
            if (data.url) {
                this.props.history.push('/' + data.url);
            } else {
                this.props.history.push('/ipd/hospital/' + data.id);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var detectFlag = true;

            var _props = this.props,
                HOSPITALS = _props.HOSPITALS,
                DOCTORS = _props.DOCTORS,
                doctorList = _props.doctorList,
                hospitalList = _props.hospitalList;


            var start_page = 0;
            if (this.props.curr_page) {
                start_page = Math.max(0, this.props.curr_page - 1);
            } else {
                if (this.props.page) {
                    start_page = Math.max(0, this.props.page - 1);
                }
            }

            var result_list = doctorList;
            var result_data = DOCTORS;
            if (this.props.clinic_card) {
                result_list = hospitalList;
                result_data = HOSPITALS;
            }

            var card_ID = null;
            var bookableDoctors = true;

            result_list.map(function (cardId, i) {
                if (detectFlag && result_data[cardId] && !result_data[cardId].hospitals[0].enabled_for_online_booking && _this6.props.seoFriendly && _this6.props.match.url.includes('-sptlitcit') && _this6.props.commonSelectedCriterias && _this6.props.commonSelectedCriterias.length) {
                    card_ID = cardId;
                    detectFlag = false;
                }
                if (i == 0) {
                    if (result_data[cardId] && !result_data[cardId].hospitals[0].enabled_for_online_booking && _this6.props.seoFriendly && _this6.props.match.url.includes('-sptlitcit') && _this6.props.commonSelectedCriterias && _this6.props.commonSelectedCriterias.length) {
                        bookableDoctors = false;
                    }
                }
            });

            var sponsorData = this.props.sponsorData && this.props.sponsorData.length ? this.props.sponsorData[0] : null;

            return _react2.default.createElement(
                'section',
                { ref: 'checkIfExists' },
                this.state.renderBlock ? _react2.default.createElement(_Loader2.default, null) : _react2.default.createElement(
                    'div',
                    { className: 'container-fluid cardMainPaddingRmv' },
                    this.props.search_content && this.props.search_content != '' && parseInt(this.props.page) == 1 ? _react2.default.createElement(
                        'div',
                        { className: 'search-result-card-collpase d-none d-md-block mb-0', style: { borderRadius: '5px', marginTop: '5px' } },
                        _react2.default.createElement('div', { className: this.state.readMore, dangerouslySetInnerHTML: { __html: this.props.search_content } }),
                        this.state.readMore && this.state.readMore != '' ? _react2.default.createElement(
                            'span',
                            { className: 'rd-more', onClick: function onClick() {
                                    return _this6.setState({ readMore: '' });
                                } },
                            'Read More'
                        ) : '',
                        this.state.readMore == '' ? _react2.default.createElement(
                            'span',
                            { className: 'rd-more', onClick: this.toggleScroll.bind(this) },
                            'Read Less'
                        ) : ''
                    ) : '',
                    _react2.default.createElement(
                        'div',
                        { className: 'row no-gutters' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12' },
                            _react2.default.createElement(
                                _reactInfiniteScroller2.default,
                                {
                                    pageStart: start_page,
                                    loadMore: this.loadMore.bind(this),
                                    hasMore: this.state.hasMore,
                                    useWindow: true,
                                    initialLoad: false
                                },
                                _react2.default.createElement(
                                    'ul',
                                    null,
                                    sponsorData && sponsorData.name && _react2.default.createElement(
                                        'div',
                                        { className: 'clinic-card mb-3', onClick: function onClick() {
                                                return _this6.navigateToHospital(sponsorData);
                                            } },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'clnc-content' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'row no-gutters' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-8' },
                                                    _react2.default.createElement(
                                                        'h2',
                                                        { className: 'cstmDocName' },
                                                        sponsorData.name
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'cstm-doc-details-container' },
                                                        sponsorData.hospital_image && _react2.default.createElement(
                                                            'div',
                                                            { className: 'cstm-doc-img-container' },
                                                            _react2.default.createElement(
                                                                'div',
                                                                null,
                                                                _react2.default.createElement('img', { style: { width: '80px' }, className: 'clnc-stc-img', src: sponsorData.hospital_image })
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'cstm-doc-content-container' },
                                                            _react2.default.createElement(
                                                                'h3',
                                                                null,
                                                                (sponsorData.all_doctors ? sponsorData.all_doctors.length : '') + ' Doctors'
                                                            ),
                                                            sponsorData.opd_timings && _react2.default.createElement(
                                                                _react2.default.Fragment,
                                                                null,
                                                                _react2.default.createElement(
                                                                    'h3',
                                                                    { style: { marginBottom: "5px;" } },
                                                                    'OPD Timings :'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'p',
                                                                    null,
                                                                    _react2.default.createElement('img', { className: 'cstmTimeImg', src: "/assets" + "/img/watch-date.svg" }),
                                                                    ' ',
                                                                    sponsorData.opd_timings
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'cstm-doc-rtng' },
                                                        sponsorData.avg_rating && _react2.default.createElement(_RatingStars2.default, { average_rating: parseInt(sponsorData.avg_rating), rating_count: '', width: '12px', height: '12px' }),
                                                        sponsorData.rating && sponsorData.rating.length > 0 && _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            '(' + sponsorData.rating.length + ')'
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'col-4 text-right' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { className: 'clnc-spnsr' },
                                                        'SPONSORED'
                                                    ),
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: 'cstm-book-btn clnc-btn' },
                                                        'Book Appointment'
                                                    )
                                                )
                                            ),
                                            sponsorData.hospital_services && _react2.default.createElement(
                                                'div',
                                                { className: 'clnc-chps-cont' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'clnc-chps' },
                                                    sponsorData.hospital_services.map(function (serv, key) {
                                                        return key < 4 ? _react2.default.createElement(
                                                            'span',
                                                            { key: serv.id },
                                                            serv.name
                                                        ) : '';
                                                    })
                                                ),
                                                sponsorData.hospital_services && sponsorData.hospital_services.length > 4 && _react2.default.createElement(
                                                    'div',
                                                    { className: 'clnc-all-srvc' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        '+ ' + (sponsorData.hospital_services.length - 4) + ' More'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                { className: 'cln-loc-par' },
                                                _react2.default.createElement('img', { src: "/assets" + "/img/new-loc-ico.svg" }),
                                                sponsorData.short_address
                                            )
                                        )
                                    ),
                                    result_list.map(function (cardId, i) {
                                        if (result_data[cardId]) {

                                            return _react2.default.createElement(
                                                _react2.default.Fragment,
                                                { key: i },
                                                i == 1 && !!!bookableDoctors ? _react2.default.createElement(
                                                    'li',
                                                    { key: i },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'd-flex align-items-center justify-content-between auto-location-widget mb-3' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'd-flex align-items-center auto-location-text' },
                                                            _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/location-colored.svg' }),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500' },
                                                                'See ',
                                                                _this6.props.commonSelectedCriterias[0].name,
                                                                ' with great discounts near you'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'auto-location-btn fw-500', onClick: function onClick() {
                                                                    return _this6.detectLocation('Sptlitcit');
                                                                } },
                                                            'Detect Location'
                                                        )
                                                    )
                                                ) : '',
                                                i == 0 && _this6.props.seoFriendly && _this6.props.match.url.includes('-sptcit') && _this6.props.commonSelectedCriterias && _this6.props.commonSelectedCriterias.length ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'd-flex align-items-center justify-content-between auto-location-widget mrb-20 mrt-20' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'd-flex align-items-center auto-location-text' },
                                                        _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/location-colored.svg' }),
                                                        _react2.default.createElement(
                                                            'div',
                                                            null,
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500 pr-4 d-inline' },
                                                                'Show'
                                                            ),
                                                            _react2.default.createElement(
                                                                'h2',
                                                                { className: 'fw-500 d-inline', style: { fontSize: '14px' } },
                                                                _this6.props.commonSelectedCriterias[0].name,
                                                                ' near me'
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'auto-location-btn fw-500', onClick: function onClick() {
                                                                return _this6.detectLocation('Sptcit');
                                                            } },
                                                        'Detect Location'
                                                    )
                                                ) : '',
                                                i == 4 && (!_this6.state.availability || !_this6.state.availability.length) ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'sort-sub-filter-container mb-3' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Filter by ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'fw-700' },
                                                            'Availability '
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'fw-500 sort-more-filter', onClick: _this6.viewMoreClicked.bind(_this6) },
                                                            'More filters'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'srt-sb-btn-cont' },
                                                        _react2.default.createElement(
                                                            'button',
                                                            { className: '' + (_this6.state.availability && _this6.state.availability.length && _this6.state.availability.indexOf('1') > -1 ? 'srt-act' : ''), onClick: _this6.applyQuickFilters.bind(_this6, 'availability', '1', true) },
                                                            'Today'
                                                        ),
                                                        _react2.default.createElement(
                                                            'button',
                                                            { className: '' + (_this6.state.availability && _this6.state.availability.length && _this6.state.availability.indexOf('2') > -1 ? 'srt-act' : ''), onClick: _this6.applyQuickFilters.bind(_this6, 'availability', '2', true) },
                                                            'Tomorrow'
                                                        ),
                                                        _react2.default.createElement(
                                                            'button',
                                                            { className: '' + (_this6.state.availability && _this6.state.availability.length && _this6.state.availability.indexOf('3') > -1 ? 'srt-act' : ''), onClick: _this6.applyQuickFilters.bind(_this6, 'availability', '3', true) },
                                                            'Next 3 Days'
                                                        )
                                                    )
                                                ) : '',
                                                card_ID && card_ID == cardId && bookableDoctors ? _react2.default.createElement(
                                                    'li',
                                                    { key: i },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'd-flex align-items-center justify-content-between auto-location-widget mb-3' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'd-flex align-items-center auto-location-text' },
                                                            _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/location-colored.svg' }),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500' },
                                                                'See more ',
                                                                _this6.props.commonSelectedCriterias[0].name,
                                                                ' near you'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'auto-location-btn fw-500', onClick: function onClick() {
                                                                    return _this6.detectLocation('Sptlitcit');
                                                                } },
                                                            'Detect Location'
                                                        )
                                                    )
                                                ) : '',
                                                 false ? undefined : '',
                                                _this6.props.insurance_status != 1 && !_this6.state.sort_order && (i == 6 && _this6.state.availability && !_this6.state.availability.length || i == 3 && _this6.state.availability && _this6.state.availability.length) ? _react2.default.createElement(
                                                    'div',
                                                    { className: 'sort-sub-filter-container mb-3' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Sort by ',
                                                        _react2.default.createElement('span', { className: 'fw-700' }),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'fw-500 sort-more-filter', onClick: _this6.viewMoreClicked.bind(_this6) },
                                                            'More filters'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'srt-sb-btn-cont' },
                                                        _react2.default.createElement(
                                                            'button',
                                                            { className: '' + (_this6.state.sort_on == 'fees' && _this6.state.sort_order == 'asc' ? 'srt-act' : ''), onClick: _this6.applyQuickFilters.bind(_this6, 'sort_on', 'price_asc', false) },
                                                            'Price Low to High'
                                                        ),
                                                        _react2.default.createElement(
                                                            'button',
                                                            { className: '' + (_this6.state.sort_on == 'fees' && _this6.state.sort_order == 'desc' ? 'srt-act' : ''), onClick: _this6.applyQuickFilters.bind(_this6, 'sort_on', 'price_desc', false) },
                                                            'Price High to Low'
                                                        )
                                                    )
                                                ) : '',
                                                i == 5 && _this6.props.offerList && _this6.props.offerList.filter(function (x) {
                                                    return x.slider_location === 'doctor_search_page';
                                                }).length && !_this6.state.is_insured ?
                                                /*<div className="col-12">
                                                    <BannerCarousel {...this.props} sliderLocation="doctor_search_page" />
                                                </div> : ''*/
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'banner-cont-height home-page-banner-div mb-3 mr-0 banner-md-margn' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'hidderBanner banner-carousel-div d-md-none' },
                                                        _react2.default.createElement('div', { className: 'divHeight m-0', style: { marginBottom: "5px!important" } })
                                                    ),
                                                    _react2.default.createElement(_bannerCarousel2.default, _extends({}, _this6.props, { sliderLocation: 'doctor_search_page' }))
                                                ) : '',
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _this6.props.clinic_card ? _react2.default.createElement(_clinicResultCard2.default, _extends({}, _this6.props, { details: result_data[cardId], key: i, rank: i })) : _react2.default.createElement(_doctorResultCard2.default, _extends({}, _this6.props, { details: result_data[cardId], key: i, rank: i }))
                                                ),
                                                _this6.props.similar_specializations && _this6.props.similar_specializations.length && !_this6.state.sort_order && (!_this6.state.availability || !_this6.state.availability.length) && (i == 7 || _this6.props.count - 1 == i) ? _this6.props.SimilarSpecializationData() : '',
                                                _this6.props.similar_specializations && _this6.props.similar_specializations.length && _this6.state.sort_order && (_this6.state.availability || _this6.state.availability.length) && _this6.props.count < 8 && i == _this6.props.count - 1 ? _this6.props.SimilarSpecializationData() : '',
                                                _this6.props.similar_specializations && _this6.props.similar_specializations.length && _this6.state.sort_order && (_this6.state.availability || _this6.state.availability.length) && _this6.props.count < 8 && i == 3 ? _this6.props.SimilarSpecializationData() : '',
                                                _this6.props.similar_specializations && _this6.props.similar_specializations.length && _this6.state.sort_order && (_this6.state.availability || _this6.state.availability.length) && i == 3 ? _this6.props.SimilarSpecializationData() : '',
                                                !!!card_ID && i == result_list.length - 1 && _this6.props.seoFriendly && _this6.props.match.url.includes('-sptlitcit') && _this6.props.commonSelectedCriterias && _this6.props.commonSelectedCriterias.length ? _react2.default.createElement(
                                                    'li',
                                                    { key: i },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'd-flex align-items-center justify-content-between auto-location-widget mb-3' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'd-flex align-items-center auto-location-text' },
                                                            _react2.default.createElement('img', { src: "/assets" + '/img/customer-icons/location-colored.svg' }),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'fw-500' },
                                                                'See more ',
                                                                _this6.props.commonSelectedCriterias[0].name,
                                                                ' near you'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'auto-location-btn fw-500', onClick: function onClick() {
                                                                    return _this6.detectLocation('Sptlitcit');
                                                                } },
                                                            'Detect Location'
                                                        )
                                                    )
                                                ) : ''
                                            );
                                        } else {
                                            return "";
                                        }
                                    })
                                )
                            )
                        )
                    ),
                    this.state.loading ? _react2.default.createElement(_Loader2.default, { classType: 'loaderPagination' }) : ""
                )
            );
        }
    }]);

    return DoctorsList;
}(_react2.default.Component);

exports.default = DoctorsList;

/***/ }),

/***/ "./dev/js/components/opd/searchResults/doctorsList/index.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/opd/searchResults/doctorsList/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DoctorsList = __webpack_require__(/*! ./DoctorsList.js */ "./dev/js/components/opd/searchResults/doctorsList/DoctorsList.js");

var _DoctorsList2 = _interopRequireDefault(_DoctorsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DoctorsList2.default;

/***/ }),

/***/ "./dev/js/components/opd/searchResults/index.js":
/*!******************************************************!*\
  !*** ./dev/js/components/opd/searchResults/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SearchResultsView = __webpack_require__(/*! ./SearchResultsView.js */ "./dev/js/components/opd/searchResults/SearchResultsView.js");

var _SearchResultsView2 = _interopRequireDefault(_SearchResultsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SearchResultsView2.default;

/***/ }),

/***/ "./dev/js/components/opd/searchResults/newTopBar/index.js":
/*!****************************************************************!*\
  !*** ./dev/js/components/opd/searchResults/newTopBar/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newTopBar = __webpack_require__(/*! ./newTopBar.js */ "./dev/js/components/opd/searchResults/newTopBar/newTopBar.js");

var _newTopBar2 = _interopRequireDefault(_newTopBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _newTopBar2.default;

/***/ }),

/***/ "./dev/js/components/opd/searchResults/newTopBar/newTopBar.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/opd/searchResults/newTopBar/newTopBar.js ***!
  \********************************************************************/
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

var _Range = __webpack_require__(/*! rc-slider/lib/Range */ "./node_modules/rc-slider/lib/Range.js");

var _Range2 = _interopRequireDefault(_Range);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _locationElements = __webpack_require__(/*! ../../../../containers/commons/locationElements */ "./dev/js/containers/commons/locationElements.js");

var _locationElements2 = _interopRequireDefault(_locationElements);

var _locationPopup = __webpack_require__(/*! ../../../../containers/commons/locationPopup */ "./dev/js/containers/commons/locationPopup.js");

var _locationPopup2 = _interopRequireDefault(_locationPopup);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopBar = function (_React$Component) {
    _inherits(TopBar, _React$Component);

    function TopBar(props) {
        _classCallCheck(this, TopBar);

        var _this = _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call(this, props));

        _this.state = {
            anchorEl: null,
            is_insured: props.filterCriteria && props.filterCriteria.is_insured ? props.filterCriteria.is_insured : false,
            dropdown_visible: false,
            hospital_id: props.filterCriteria && props.filterCriteria.hospital_id ? props.filterCriteria.hospital_id : '',
            //New filters
            previous_filters: {},
            sort_on: '',
            sort_order: '',
            avg_ratings: '',
            availability: [],
            gender: '',
            sits_at_clinic: false,
            sits_at_hospital: false,
            specialization: [],
            shortURL: "",
            showLocationPopup: false,
            overlayVisible: false,
            quickFilter: {},
            HospFilter: [],
            HospFilterOnFoucsData: [],
            selectedHospitalIds: [],
            hideHospFilter: false,
            SpecialityFilter: [],
            SpecialityFilterOnFocusData: [],
            selectedSpecializationIds: [],
            hideSpecFilter: false,
            hideOtherFilters: false,
            filterSearchString: '',
            specialization_filter_ids: [],
            defaultSpecializationIds: [],
            searchCities: []
            //showPopupContainer: true
        };
        return _this;
    }

    _createClass(TopBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var _this2 = this;

            this.setState(_extends({}, props.filterCriteria, { selectedHospitalIds: props.filterCriteria.hospital_id ? props.filterCriteria.hospital_id : [], quickFilter: props.quickFilter || {} }), function () {
                if (_this2.state.quickFilter && _this2.state.quickFilter.viewMore) {
                    _this2.sortFilterClicked();
                }
            });
            var allReadySelectedSpecializationId = [];
            if (props.commonSelectedCriterias && props.commonSelectedCriterias.length > 0) {
                props.commonSelectedCriterias.map(function (spec_id, k) {
                    allReadySelectedSpecializationId.push(spec_id.id);
                });
                this.setState({ defaultSpecializationIds: allReadySelectedSpecializationId });
            }
            if (props.locationType && !props.locationType.includes("geo")) {
                this.setState({ showLocationPopup: false });
            } else {
                if (props.seoData && props.seoData.location || props.seoFriendly) {
                    this.setState({ showLocationPopup: false });
                } else {
                    if (props.selectedLocation != this.props.selectedLocation) {
                        this.setState({ showLocationPopup: true, overlayVisible: true });
                    }
                }
            }
            // this.shortenUrl()
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.fromVip) {
                this.props.topBarRef(this);
            }
            this.setState(_extends({}, this.props.filterCriteria, { selectedHospitalIds: this.props.filterCriteria.hospital_id ? this.props.filterCriteria.hospital_id : [] }));
            // this.shortenUrl()
            if (this.props.seoData && this.props.seoData.location || this.props.seoFriendly) {
                this.setState({ showLocationPopup: false });
            } else {
                if (this.props.locationType && this.props.locationType.includes("geo")) {
                    this.setState({ showLocationPopup: true, overlayVisible: true });
                }
            }
        }
    }, {
        key: 'applyFilters',
        value: function applyFilters() {
            var filterState = {
                sort_on: this.state.sort_on,
                sort_order: this.state.sort_order,
                gender: this.state.gender,
                availability: this.state.availability,
                avg_ratings: this.state.avg_ratings,
                sits_at_clinic: this.state.sits_at_clinic,
                sits_at_hospital: this.state.sits_at_hospital,
                is_insured: this.state.is_insured,
                hospital_id: this.state.selectedHospitalIds,
                specialization_filter_ids: this.state.specialization_filter_ids
            };
            var data = {
                'Category': 'FilterClick', 'Action': 'Clicked on Filter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-filter-clicked', 'url': window.location.pathname, 'availability': this.state.availability, 'sits_at_clinic': this.state.sits_at_clinic, 'sits_at_hospital': this.state.sits_at_hospital, 'gender': this.state.gender, 'sort_order': this.state.sort_order || '', 'sort_on': this.state.sort_on || '', 'rating': this.state.avg_ratings, hospital_id: this.state.selectedHospitalIds || '', specialization_filter_id: this.state.specialization_filter_ids || '', specializations: this.state.defaultSpecializationIds || ''
            };
            _gtm2.default.sendEvent({ data: data });

            var ifAnyFilterApplied = this.isDataFiltered({}, true);
            if (ifAnyFilterApplied) {
                this.props.applyFilters(filterState);
            }

            this.setState({ dropdown_visible: false });
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var e = arguments[1];


            if (reset) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'ResetOpdFilter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'reset-opd-filter', 'url': window.location.pathname, 'availability': this.state.availability, 'sits_at_clinic': this.state.sits_at_clinic, 'sits_at_hospital': this.state.sits_at_hospital, 'gender': this.state.gender, 'sort_order': this.state.sort_order || '', 'sort_on': this.state.sort_on || '', 'rating': this.state.avg_ratings
                };
                _gtm2.default.sendEvent({ data: data });
                var resetFilters = {
                    sort_on: '',
                    sort_order: '',
                    avg_ratings: '',
                    availability: [],
                    gender: '',
                    sits_at_clinic: false,
                    sits_at_hospital: false,
                    specialization: [],
                    selectedHospitalIds: [],
                    specialization_filter_ids: []

                };
                this.setState(_extends({}, resetFilters, {
                    quickFilter: {}
                }));
            } else {
                var _data = {
                    'Category': 'ConsumerApp', 'Action': 'CloseOpdFilter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'close-opd-filter', 'url': window.location.pathname, 'availability': this.state.availability, 'sits_at_clinic': this.state.sits_at_clinic, 'sits_at_hospital': this.state.sits_at_hospital, 'gender': this.state.gender, 'sort_order': this.state.sort_order || '', 'sort_on': this.state.sort_on || '', 'rating': this.state.avg_ratings
                };
                _gtm2.default.sendEvent({ data: _data });
                this.setState(_extends({
                    dropdown_visible: false, hideOtherFilters: false, hideHospFilter: false, hideSpecFilter: false
                }, this.state.previous_filters, {
                    quickFilter: {}
                }));
                //this.props.resetQuickFilters()
            }
        }
    }, {
        key: 'toggleAllFilters',
        value: function toggleAllFilters(type, val) {
            var isArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var e = arguments[3];

            var value = val;
            if (isArray) {
                var selectedVal = [].concat(this.state[type]) || [];
                var found = false;
                value = selectedVal.filter(function (data) {
                    if (data == val) {
                        found = true;
                        return false;
                    }
                    return true;
                });
                if (!found) {
                    value.push(val);
                }
            }
            if (type.includes('sort_on')) {

                if (val.includes('price_asc') || val.includes('price_desc')) {

                    if (this.state[type] == 'fees' && (this.state['sort_order'] == 'asc' && val.includes('price_asc') || this.state['sort_order'] == 'desc' && val.includes('price_desc'))) {
                        this.setState({ sort_on: null, sort_order: null });
                    } else {
                        this.setState({ sort_on: 'fees', sort_order: val.includes('price_asc') ? 'asc' : 'desc' });
                    }
                } else {
                    this.setState({ sort_on: this.state[type] == value ? null : value, sort_order: null });
                }
            } else if (type.includes('sits_at_clinic') || type.includes('sits_at_hospital')) {

                if (this.state[type]) {
                    this.setState(_defineProperty({}, type, !this.state[type]));
                } else {
                    this.setState({ 'sits_at_clinic': type.includes('sits_at_clinic') ? value : !value, 'sits_at_hospital': type.includes('sits_at_hospital') ? value : !value });
                }
            } else {
                this.setState(_defineProperty({}, type, this.state[type] == value ? '' : value));
            }
        }
    }, {
        key: 'sortFilterClicked',
        value: function sortFilterClicked() {
            var _this3 = this;

            var data = {
                'Category': 'ConsumerApp', 'Action': 'OpdSortFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-sort-filter-clicked', 'url': window.location.pathname, 'availability': this.state.availability, 'sits_at_clinic': this.state.sits_at_clinic, 'sits_at_hospital': this.state.sits_at_hospital, 'gender': this.state.gender, 'sort_order': this.state.sort_order || '', 'sort_on': this.state.sort_on || '', 'rating': this.state.avg_ratings
            };
            _gtm2.default.sendEvent({ data: data });
            var searchUrl = null;
            var page = this.props.page;
            var state = this.props;
            if (this.props.match.url.includes('-sptcit') || this.props.match.url.includes('-sptlitcit') || this.props.match.url.includes('-ipddp')) {
                searchUrl = this.props.match.url.toLowerCase();
                searchUrl = searchUrl.split('/');
                searchUrl = searchUrl.length > 1 ? searchUrl[1] : searchUrl[0];
            }
            this.props.getDoctorHospitalFilters(state, page, false, searchUrl, function () {
                for (var _len = arguments.length, resp = Array(_len), _key = 0; _key < _len; _key++) {
                    resp[_key] = arguments[_key];
                }

                if (resp && resp[0].result) {
                    _this3.setState({ HospFilter: resp[0].result, HospFilterOnFoucsData: resp[0].result });
                }
            });

            this.props.getDoctorHospitalSpeciality(state, page, false, searchUrl, function () {
                for (var _len2 = arguments.length, resp = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    resp[_key2] = arguments[_key2];
                }

                if (resp && resp[0].result) {
                    _this3.setState({ SpecialityFilter: resp[0].result, SpecialityFilterOnFocusData: resp[0].result });
                }
            });
            var currentFilters = {
                sort_on: this.state.sort_on,
                sort_order: this.state.sort_order,
                avg_ratings: this.state.avg_ratings,
                availability: [].concat(this.state.availability),
                gender: this.state.gender,
                sits_at_clinic: this.state.sits_at_clinic,
                sits_at_hospital: this.state.sits_at_hospital,
                specialization: [].concat(this.state.specialization),
                selectedHospitalIds: [].concat(this.state.selectedHospitalIds),
                specialization_filter_ids: [].concat(this.state.specialization_filter_ids)
            };
            this.setState({ dropdown_visible: true, previous_filters: currentFilters });
        }
    }, {
        key: 'isDataFiltered',
        value: function isDataFiltered() {
            var filterData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var checkIfAnyFilterAppliled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            if (checkIfAnyFilterAppliled) {

                try {
                    var filterCount = 0;
                    for (var filter in this.state.previous_filters) {

                        if (filter.includes('availability') || filter.includes('specialization') || filter.includes('selectedHospitalIds')) {

                            if (this.state.previous_filters[filter] && this.state[filter].length != this.state.previous_filters[filter].length) {

                                filterCount++;
                                break;
                            } else {

                                for (var arrFliter = 0; arrFliter < this.state[filter].length; arrFliter++) {
                                    if (this.state.previous_filters[filter].indexOf(this.state[filter][arrFliter]) == -1) {
                                        filterCount++;
                                        break;
                                    }
                                }
                            }
                        } else if (this.state[filter] != this.state.previous_filters[filter]) {
                            filterCount++;
                            break;
                        }
                    }
                    return filterCount;
                } catch (e) {
                    return false;
                }
            } else {

                filterData = {
                    avg_ratings: '',
                    availability: [],
                    gender: '',
                    hospital_type: '',
                    selectedHospitalIds: '',
                    specialization_filter_ids: []
                };
            }
            try {
                var _filterCount = 0;
                for (var _filter in filterData) {

                    if (_filter.includes('hospital_type')) {
                        if (this.state['sits_at_clinic'] || this.state['sits_at_hospital']) {
                            _filterCount++;
                        }
                    } else if (_filter.includes('availability') || _filter.includes('specialization_filter_ids')) {
                        if (this.state[_filter].length) {
                            _filterCount++;
                        }
                    } else if (_filter.includes('selectedHospitalIds')) {
                        if (this.state['selectedHospitalIds'] != '' || this.state['selectedHospitalIds'].length) {
                            _filterCount++;
                        }
                    } else if (filterData[_filter] != this.state[_filter]) {
                        _filterCount++;
                    }
                }
                return _filterCount;
            } catch (e) {
                return false;
            }
        }
    }, {
        key: 'getCriteriaString',
        value: function getCriteriaString(selectedCriterias) {
            if (selectedCriterias && selectedCriterias.length) {
                var is_group_ids_exist = selectedCriterias.filter(function (x) {
                    return x.type == 'group_ids';
                });
                var selectedDataView = is_group_ids_exist.length ? is_group_ids_exist : selectedCriterias;

                return selectedDataView.reduce(function (final, curr, i) {
                    if (i != 0) {
                        final += ', ';
                    }
                    final += '' + curr.name;
                    return final;
                }, "");
            }
        }
    }, {
        key: 'goToLocation',
        value: function goToLocation() {
            this.setState({
                searchCities: []
            });
            var redirect_to = "";
            if (window.location.pathname.includes('sptcit') || window.location.pathname.includes('sptlitcit')) {
                redirect_to = "/opd/searchresults";
            }

            var location_url = '/locationsearch';
            if (redirect_to) {
                location_url += '?redirect_to=' + redirect_to;
            }
            this.props.setNextSearchCriteria();
            var data = {
                'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push(location_url);
        }
    }, {
        key: 'overlayClick',
        value: function overlayClick() {
            this.setState({ overlayVisible: false, searchCities: [], showLocationPopup: false });
            if (document.getElementById('location_element')) {
                document.getElementById('location_element').style.zIndex = '0';
            }
        }
    }, {
        key: 'hideLocationPopup',
        value: function hideLocationPopup() {
            this.setState({ showLocationPopup: false });
        }
    }, {
        key: 'popupContainer',
        value: function popupContainer() {
            this.setState({ showPopupContainer: false, showLocationPopup: false });
        }
    }, {
        key: 'shortenUrl',
        value: function shortenUrl() {
            var _this4 = this;

            if (window) {
                var url = window.location.href + '&force_location=true';
                this.props.urlShortner(url, function (err, data) {
                    if (!err) {
                        _this4.setState({ shortURL: data.tiny_url });
                    }
                });
            }
        }
    }, {
        key: 'toggleInsured',
        value: function toggleInsured() {
            var _this5 = this;

            var data = {
                'Category': 'CoveredUnderOPDInsuranceClicked', 'Action': 'CoveredUnderLABInsuranceClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'covered-under-opd-insurance-clicked', 'url': window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });

            this.setState({ is_insured: !this.state.is_insured }, function () {

                var filterState = {
                    is_insured: _this5.state.is_insured,
                    hospital_id: _this5.state.selectedHospitalIds,
                    sort_order: _this5.state.sort_order,
                    sort_on: _this5.state.sort_on,
                    avg_ratings: _this5.state.avg_ratings,
                    availability: _this5.state.availability,
                    gender: _this5.state.gender,
                    sits_at_clinic: _this5.state.sits_at_clinic,
                    sits_at_hospital: _this5.state.sits_at_hospital,
                    specialization: []
                };
                _this5.props.applyFilters(filterState);
            });
        }
    }, {
        key: 'toggleSpecialization',
        value: function toggleSpecialization(spec_id) {
            var test_ids = [].concat(this.state.specialization_filter_ids);
            var self = this;
            var found = false;
            test_ids = test_ids.filter(function (x) {
                if (x == spec_id) {
                    found = true;
                    return false;
                }
                return true;
            });
            if (!found) {
                if (test_ids.length != 5) {
                    test_ids.push(spec_id);
                } else {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Max 5 specialization can be selected" });
                }
            }

            self.setState({ specialization_filter_ids: test_ids });
        }
    }, {
        key: 'handleChangeFocus',
        value: function handleChangeFocus(type) {
            if (type) {
                this.setState({ hideOtherFilters: true, hideSpecFilter: true });
            } else {
                this.setState({ hideOtherFilters: true, hideHospFilter: true });
            }
        }
    }, {
        key: 'handleCloseExtraFilter',
        value: function handleCloseExtraFilter(type) {
            this.setState({ hideOtherFilters: false, hideSpecFilter: false, hideHospFilter: false, filterSearchString: '' });
        }
    }, {
        key: 'handleChangeHosp',
        value: function handleChangeHosp(event) {
            var search_string = event.target.value.toLowerCase();
            this.setState({ filterSearchString: event.target.value });
            var filtered_hosp_list = [];
            this.state.HospFilter.map(function (Hosp) {
                var hosp_name = Hosp.name.toLowerCase();
                if (hosp_name.includes(search_string)) {
                    var index = hosp_name.indexOf(search_string);
                    filtered_hosp_list.push({ id: Hosp.id, name: Hosp.name, rank: index });
                }
            });
            filtered_hosp_list = filtered_hosp_list.sort(function (x, y) {
                return x.rank - y.rank;
            });
            this.setState({ HospFilterOnFoucsData: filtered_hosp_list });
        }
    }, {
        key: 'handleChangeSpec',
        value: function handleChangeSpec(event) {
            var search_string = event.target.value.toLowerCase();
            this.setState({ filterSearchString: event.target.value });
            var filtered_spec_list = [];
            this.state.SpecialityFilter.map(function (Spec) {
                var spec_name = Spec.name.toLowerCase();
                if (spec_name.includes(search_string)) {
                    var index = spec_name.indexOf(search_string);
                    filtered_spec_list.push({ id: Spec.id, name: Spec.name, rank: index });
                }
            });
            filtered_spec_list = filtered_spec_list.sort(function (x, y) {
                return x.rank - y.rank;
            });
            this.setState({ SpecialityFilterOnFocusData: filtered_spec_list });
        }
    }, {
        key: 'toggleHospital',
        value: function toggleHospital(hosp_id) {
            var test_ids = [].concat(this.state.selectedHospitalIds);
            var self = this;
            var found = false;
            test_ids = test_ids.filter(function (x) {
                if (x == hosp_id) {
                    found = true;
                    return false;
                }
                return true;
            });
            if (!found) {
                if (test_ids.length != 5) {
                    test_ids.push(hosp_id);
                } else {
                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Max 5 hospital can be selected" });
                }
            }

            self.setState({ selectedHospitalIds: test_ids });
        }
    }, {
        key: 'HospFilterData',
        value: function HospFilterData() {
            var liData = [];
            var self = this;
            if (self.state.selectedHospitalIds && self.state.selectedHospitalIds.length > 0 && !self.state.hideOtherFilters) {
                self.state.HospFilter.map(function (data, key) {
                    if (self.state.selectedHospitalIds.indexOf(data.id) > -1 && liData.length < 5) {
                        liData.push(_react2.default.createElement(
                            'li',
                            { key: key, onChange: self.toggleHospital.bind(self, data.id) },
                            _react2.default.createElement(
                                'label',
                                { className: 'ck-bx', style: { fontWeight: '500', fontSize: '13px' } },
                                data.name,
                                _react2.default.createElement('input', { type: 'checkbox', checked: self.state.selectedHospitalIds.indexOf(data.id) > -1 ? true : false }),
                                _react2.default.createElement('span', { className: 'checkmark' })
                            )
                        ));
                    }
                });
                self.state.HospFilter.map(function (data, key) {
                    if (self.state.selectedHospitalIds.indexOf(data.id) == -1 && liData.length < 5) {
                        liData.push(_react2.default.createElement(
                            'li',
                            { key: key, onChange: self.toggleHospital.bind(self, data.id) },
                            _react2.default.createElement(
                                'label',
                                { className: 'ck-bx', style: { fontWeight: '500', fontSize: '13px' } },
                                data.name,
                                _react2.default.createElement('input', { type: 'checkbox', checked: self.state.selectedHospitalIds.indexOf(data.id) > -1 ? true : false }),
                                _react2.default.createElement('span', { className: 'checkmark' })
                            )
                        ));
                    }
                });
            } else {
                if (self.state.hideOtherFilters) {
                    self.state.HospFilterOnFoucsData.map(function (data, key) {
                        liData.push(_react2.default.createElement(
                            'li',
                            { key: key, onChange: self.toggleHospital.bind(self, data.id) },
                            _react2.default.createElement(
                                'label',
                                { className: 'ck-bx', style: { fontWeight: '500', fontSize: '13px' } },
                                data.name,
                                _react2.default.createElement('input', { type: 'checkbox', checked: self.state.selectedHospitalIds.indexOf(data.id) > -1 ? true : false }),
                                _react2.default.createElement('span', { className: 'checkmark' })
                            )
                        ));
                    });
                } else {
                    self.state.HospFilter.map(function (data, key) {
                        if (self.state.selectedHospitalIds.length == 0 && key <= 4) {
                            liData.push(_react2.default.createElement(
                                'li',
                                { key: key, onChange: self.toggleHospital.bind(self, data.id) },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'ck-bx', style: { fontWeight: '500', fontSize: '13px' } },
                                    data.name,
                                    _react2.default.createElement('input', { type: 'checkbox', checked: self.state.selectedHospitalIds.indexOf(data.id) > -1 ? true : false }),
                                    _react2.default.createElement('span', { className: 'checkmark' })
                                )
                            ));
                        }
                    });
                }
            }
            return liData;
        }
    }, {
        key: 'SpecFilterData',
        value: function SpecFilterData() {
            var liData = [];
            var self = this;
            if (self.state.specialization_filter_ids.length > 0 && !self.state.hideOtherFilters) {
                self.state.SpecialityFilter.map(function (data, key) {
                    if (self.state.specialization_filter_ids.indexOf(data.id) > -1 && liData.length < 5) {
                        liData.push(_react2.default.createElement(
                            'li',
                            { key: key, onChange: self.toggleSpecialization.bind(self, data.id) },
                            _react2.default.createElement(
                                'label',
                                { className: 'ck-bx', style: { fontWeight: '500', fontSize: '13px' } },
                                data.name,
                                _react2.default.createElement('input', { type: 'checkbox',
                                    checked: self.state.specialization_filter_ids.indexOf(data.id) > -1 || self.state.defaultSpecializationIds.indexOf(data.id) > -1 ? true : false,
                                    disabled: self.state.defaultSpecializationIds.indexOf(data.id) > -1 ? true : false
                                }),
                                _react2.default.createElement('span', { className: 'checkmark' })
                            )
                        ));
                    }
                });
                self.state.SpecialityFilter.map(function (data, key) {
                    if (self.state.specialization_filter_ids.indexOf(data.id) == -1 && liData.length < 5) {
                        liData.push(_react2.default.createElement(
                            'li',
                            { key: key, onChange: self.toggleSpecialization.bind(self, data.id) },
                            _react2.default.createElement(
                                'label',
                                { className: 'ck-bx', style: { fontWeight: '500', fontSize: '13px' } },
                                data.name,
                                _react2.default.createElement('input', { type: 'checkbox',
                                    checked: self.state.specialization_filter_ids.indexOf(data.id) > -1 || self.state.defaultSpecializationIds.indexOf(data.id) > -1 ? true : false,
                                    disabled: self.state.defaultSpecializationIds.indexOf(data.id) > -1 ? true : false

                                }),
                                _react2.default.createElement('span', { className: 'checkmark' })
                            )
                        ));
                    }
                });
            } else {
                if (self.state.hideOtherFilters) {
                    self.state.SpecialityFilterOnFocusData.map(function (data, key) {
                        liData.push(_react2.default.createElement(
                            'li',
                            { key: key, onChange: self.toggleSpecialization.bind(self, data.id) },
                            _react2.default.createElement(
                                'label',
                                { className: 'ck-bx', style: { fontWeight: '500', fontSize: '13px' } },
                                data.name,
                                _react2.default.createElement('input', { type: 'checkbox',
                                    checked: self.state.specialization_filter_ids.indexOf(data.id) > -1 || self.state.defaultSpecializationIds.indexOf(data.id) > -1 ? true : false,
                                    disabled: self.state.defaultSpecializationIds.indexOf(data.id) > -1 ? true : false

                                }),
                                _react2.default.createElement('span', { className: 'checkmark' })
                            )
                        ));
                    });
                } else {
                    self.state.SpecialityFilter.map(function (data, key) {
                        if (self.state.specialization_filter_ids.length == 0 && key <= 4) {
                            liData.push(_react2.default.createElement(
                                'li',
                                { key: key, onChange: self.toggleSpecialization.bind(self, data.id) },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'ck-bx', style: { fontWeight: '500', fontSize: '13px' } },
                                    data.name,
                                    _react2.default.createElement('input', { type: 'checkbox',
                                        checked: self.state.specialization_filter_ids.indexOf(data.id) > -1 || self.state.defaultSpecializationIds.indexOf(data.id) > -1 ? true : false,
                                        disabled: self.state.defaultSpecializationIds.indexOf(data.id) > -1 ? true : false
                                    }),
                                    _react2.default.createElement('span', { className: 'checkmark' })
                                )
                            ));
                        }
                    });
                }
            }
            return liData;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.fromVip) {
                this.props.topBarRef(undefined);
            }
        }
    }, {
        key: 'getCityListLayout',
        value: function getCityListLayout() {
            var searchResults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            if (searchResults.length) {
                this.setState({ searchCities: searchResults });
            } else {
                this.setState({ searchCities: [] });
            }
        }
    }, {
        key: 'selectLocation',
        value: function selectLocation(city) {
            var _this6 = this;

            this.child.selectLocation(city, function () {

                _this6.setState({ searchCities: [] });
                var gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'DoctorSearchPageLocationSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-search-location-selected'
                };
                _gtm2.default.sendEvent({ data: gtmData });
            });
        }
    }, {
        key: 'getCityList',
        value: function getCityList() {
            var _this7 = this;

            return this.state.searchCities.length > 0 ? _react2.default.createElement(
                'section',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'widget mb-10' },
                    _react2.default.createElement(
                        'div',
                        { className: 'common-search-container' },
                        _react2.default.createElement(
                            'p',
                            { className: 'srch-heading' },
                            'Location Search'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'common-listing-cont' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                this.state.searchCities.map(function (result, i) {
                                    return _react2.default.createElement(
                                        'li',
                                        { key: i },
                                        _react2.default.createElement(
                                            'p',
                                            { className: '', onClick: _this7.selectLocation.bind(_this7, result) },
                                            result.description
                                        )
                                    );
                                })
                            )
                        )
                    )
                )
            ) : '';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this8 = this;

            // console.log(this.state.specialization_filter_ids)
            // console.log(this.state.specialization)
            var ipd_ids = this.props.commonSelectedCriterias.filter(function (x) {
                return x.type == 'ipd';
            }).map(function (x) {
                return x.id;
            });
            var criteriaStr = this.getCriteriaString(this.props.commonSelectedCriterias);

            var locationName = "";
            if (this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
                locationName = this.props.selectedLocation.formatted_address;
            }
            if (this.props.seoData && this.props.seoData.location) {
                locationName = this.props.seoData.location;
            }

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.dropdown_visible ? _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('div', { className: 'cancel-overlay cancel-overlay-zindex', onClick: this.handleClose.bind(this, false) }),
                    _react2.default.createElement(
                        'div',
                        { className: 'widget cancel-appointment-div cancel-popup overflow-hidden pb-0' },
                        this.state.hideOtherFilters ? '' : _react2.default.createElement(
                            'div',
                            { className: 'cross-btn', onClick: this.handleClose.bind(this, false) },
                            _react2.default.createElement('img', { src: "/assets" + "/img/icons/close.png", alt: 'close' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'pop-top-heading d-flex align-flex-sp-bt' },
                            this.state.hideOtherFilters ? _react2.default.createElement(
                                _react2.default.Fragment,
                                null,
                                _react2.default.createElement(
                                    'span',
                                    { className: 'pp-arw', onClick: this.handleCloseExtraFilter.bind(this) },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/back-icon.png" })
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Sort/Filter'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'pp-done', onClick: this.handleCloseExtraFilter.bind(this) },
                                    'Done'
                                )
                            ) : _react2.default.createElement(
                                'span',
                                null,
                                'Sort/Filter'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'multy-select-fltr-container' },
                            _react2.default.createElement(
                                'div',
                                { className: 'sorting-main-container ' + (this.state.hideOtherFilters ? 'd-none' : '') },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'sort-lft-cont' },
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'sort-headings' },
                                        'Sort by'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'sort-slider-scroll' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'sort-cards-list ' + (this.state.sort_on == '' ? 'chitActive' : ''), onClick: this.toggleAllFilters.bind(this, 'sort_on', '', false) },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'srt-lst-img' },
                                                this.state.sort_on == '' ? _react2.default.createElement('img', { src: "/assets" + "/img/popupicon/rv-relevence.svg", style: { width: 18 } }) : _react2.default.createElement('img', { src: "/assets" + "/img/revel.svg", style: { width: 18 } })
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Relevance'
                                            )
                                        ),
                                        this.props.is_login_user_insured && this.props.insurance_status == 1 ? '' : _react2.default.createElement(
                                            'div',
                                            { className: 'sort-cards-list ' + (this.state.sort_on == 'fees' && this.state.sort_order == 'asc' ? 'chitActive' : ''), onClick: this.toggleAllFilters.bind(this, 'sort_on', 'price_asc', false) },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'srt-lst-img' },
                                                this.state.sort_on == 'fees' && this.state.sort_order == 'asc' ? _react2.default.createElement('img', { src: "/assets" + "/img/popupicon/rv-pricesort.svg", style: { width: 18 } }) : _react2.default.createElement('img', { src: "/assets" + "/img/popupicon/pricesort.svg", style: { width: 18 } })
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Price Low to High'
                                            )
                                        ),
                                        this.props.is_login_user_insured && this.props.insurance_status == 1 ? '' : _react2.default.createElement(
                                            'div',
                                            { className: 'sort-cards-list ' + (this.state.sort_on == 'fees' && this.state.sort_order == 'desc' ? 'chitActive' : ''), onClick: this.toggleAllFilters.bind(this, 'sort_on', 'price_desc', false) },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'srt-lst-img' },
                                                this.state.sort_on == 'fees' && this.state.sort_order == 'desc' ? _react2.default.createElement('img', { src: "/assets" + "/img/popupicon/rv-priceup.svg", style: { width: 18 } }) : _react2.default.createElement('img', { src: "/assets" + "/img/popupicon/priceup.svg", style: { width: 18 } })
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Price High to Low'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'sort-cards-list ' + (this.state.sort_on == 'distance' ? 'chitActive' : ''), onClick: this.toggleAllFilters.bind(this, 'sort_on', 'distance', false) },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'srt-lst-img' },
                                                this.state.sort_on == 'distance' ? _react2.default.createElement('img', { src: "/assets" + "/img/popupicon/rv-locations.svg", style: { width: 14 } }) : _react2.default.createElement('img', { src: "/assets" + "/img/popupicon/locations.svg", style: { width: 14 } })
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Distance'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'sort-cards-list ' + (this.state.sort_on == 'experience' ? 'chitActive' : ''), onClick: this.toggleAllFilters.bind(this, 'sort_on', 'experience', false) },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'srt-lst-img' },
                                                this.state.sort_on == 'experience' ? _react2.default.createElement('img', { src: "/assets" + "/img/popupicon/rv-expr.svg", style: { width: 18 } }) : _react2.default.createElement('img', { src: "/assets" + "/img/popupicon/expr.svg", style: { width: 18 } })
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Experience'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'sorting-btns-cont' },
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'sort-headings' },
                                        'Ratings'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'sortbtncard' },
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'sortBtns ' + (this.state.avg_ratings == '3' ? 'srtBtnAct' : ''), onClick: this.toggleAllFilters.bind(this, 'avg_ratings', '3', false) },
                                            this.state.avg_ratings == '3' ? _react2.default.createElement('img', { className: 'srt-star-img', src: "/assets" + "/img/popupicon/rv-btn-star.svg" }) : _react2.default.createElement('img', { className: 'srt-star-img', src: "/assets" + "/img/customer-icons/selected-star.svg" }),
                                            '3.0 +'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'sortBtns ' + (this.state.avg_ratings == '4' ? 'srtBtnAct' : ''), onClick: this.toggleAllFilters.bind(this, 'avg_ratings', '4', false) },
                                            this.state.avg_ratings == '4' ? _react2.default.createElement('img', { className: 'srt-star-img', src: "/assets" + "/img/popupicon/rv-btn-star.svg" }) : _react2.default.createElement('img', { className: 'srt-star-img', src: "/assets" + "/img/customer-icons/selected-star.svg" }),
                                            '4.0 +'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'sortBtns ' + (this.state.avg_ratings == '4.5' ? 'srtBtnAct' : ''), onClick: this.toggleAllFilters.bind(this, 'avg_ratings', '4.5', false) },
                                            this.state.avg_ratings == '4.5' ? _react2.default.createElement('img', { className: 'srt-star-img', src: "/assets" + "/img/popupicon/rv-btn-star.svg" }) : _react2.default.createElement('img', { className: 'srt-star-img', src: "/assets" + "/img/customer-icons/selected-star.svg" }),
                                            '4.5 +'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'sorting-btns-cont' },
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'sort-headings' },
                                        'Availability'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'sortbtncard' },
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'sortBtns ' + (this.state.availability && this.state.availability.length && this.state.availability.indexOf('1') > -1 ? 'srtBtnAct' : ''), onClick: this.toggleAllFilters.bind(this, 'availability', '1', true) },
                                            'Today'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'sortBtns ' + (this.state.availability && this.state.availability.length && this.state.availability.indexOf('2') > -1 ? 'srtBtnAct' : ''), onClick: this.toggleAllFilters.bind(this, 'availability', '2', true) },
                                            'Tomorrow'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'sortBtns ' + (this.state.availability && this.state.availability.length && this.state.availability.indexOf('3') > -1 ? 'srtBtnAct' : ''), onClick: this.toggleAllFilters.bind(this, 'availability', '3', true) },
                                            'Next 3 Days'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'sorting-btns-cont' },
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'sort-headings' },
                                        'Gender'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'sortbtncard justyfy-twoBtns' },
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'sortBtns ' + (this.state.gender == 'm' ? 'srtBtnAct' : ''), onClick: this.toggleAllFilters.bind(this, 'gender', 'm', false) },
                                            'Male'
                                        ),
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'sortBtns ' + (this.state.gender == 'f' ? 'srtBtnAct' : ''), onClick: this.toggleAllFilters.bind(this, 'gender', 'f', false) },
                                            'Female'
                                        )
                                    )
                                )
                            ),
                            this.state.HospFilter && this.state.HospFilter.length > 0 ? _react2.default.createElement(
                                'div',
                                { className: 'sort-chk-filter-container ' + (this.state.hideHospFilter ? 'd-none' : '') },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'sort-hsptl-container' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'srt-cli-headings' },
                                        'Hospital',
                                        this.state.HospFilter.length > 5 ? _react2.default.createElement(
                                            'span',
                                            { onClick: this.handleChangeFocus.bind(this, true) },
                                            this.state.hideOtherFilters ? '' : '+' + (this.state.HospFilter.length - 5) + ' more'
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'srt-slct-list-container' },
                                        this.state.HospFilter.length > 5 ? _react2.default.createElement(
                                            'div',
                                            { className: 'srt-inp-csl' },
                                            _react2.default.createElement('input', { type: 'text', placeholder: 'Search Hospital', onChange: this.handleChangeHosp.bind(this), name: 'Hname', onFocus: this.handleChangeFocus.bind(this, true), value: this.state.filterSearchString })
                                        ) : '',
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'chklist-sort-fliter' },
                                            this.HospFilterData()
                                        )
                                    )
                                )
                            ) : '',
                            this.state.SpecialityFilter && this.state.SpecialityFilter.length > 0 ? _react2.default.createElement(
                                'div',
                                { className: 'sort-chk-filter-container ' + (this.state.hideSpecFilter ? 'd-none' : '') },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'sort-hsptl-container' },
                                    _react2.default.createElement(
                                        'h3',
                                        { className: 'srt-cli-headings' },
                                        'Specialization',
                                        this.state.SpecialityFilter.length > 5 ? _react2.default.createElement(
                                            'span',
                                            { onClick: this.handleChangeFocus.bind(this, false) },
                                            this.state.hideOtherFilters ? '' : '+' + (this.state.SpecialityFilter.length - 5) + ' more'
                                        ) : ''
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'srt-slct-list-container' },
                                        this.state.SpecialityFilter.length > 5 ? _react2.default.createElement(
                                            'div',
                                            { className: 'srt-inp-csl' },
                                            _react2.default.createElement('input', { type: 'text', placeholder: 'Search Specialization', onChange: this.handleChangeSpec.bind(this), name: 'Sname', onFocus: this.handleChangeFocus.bind(this, false), value: this.state.filterSearchString })
                                        ) : '',
                                        _react2.default.createElement(
                                            'ul',
                                            { className: 'chklist-sort-fliter' },
                                            this.SpecFilterData()
                                        )
                                    )
                                )
                            ) : ''
                        ),
                        this.state.hideOtherFilters ? '' : _react2.default.createElement(
                            'div',
                            { className: 'pop-foot-btns-cont' },
                            _react2.default.createElement(
                                'button',
                                { className: 'add-shpng-cart-btn', onClick: this.handleClose.bind(this, true) },
                                'Reset'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'v-btn-primary book-btn-mrgn-adjust', onClick: this.applyFilters.bind(this) },
                                'Apply Filter'
                            )
                        )
                    )
                ) : "",
                _react2.default.createElement(
                    'div',
                    { className: (this.props.fromVip ? 'vipNetTop' : '') + ' filter-row sticky-header mbl-stick vip-net-block' },
                    this.props.breadcrumb && this.props.breadcrumb.length ? _react2.default.createElement(
                        'div',
                        { className: 'col-12 mrng-top-12 d-none d-md-block p-0' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'mrb-10 breadcrumb-list breadcrumb-list-ul', style: { 'wordBreak': 'breakWord' } },
                            this.props.breadcrumb && this.props.breadcrumb.length ? this.props.breadcrumb.map(function (data, key) {
                                return _react2.default.createElement(
                                    'li',
                                    { className: 'breadcrumb-list-item', key: key },
                                    key == _this8.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                        'span',
                                        null,
                                        data.title
                                    ) : _react2.default.createElement(
                                        'a',
                                        { href: data.url, title: data.link_title || data.title, onClick: function onClick(e) {
                                                e.preventDefault();
                                                _this8.props.history.push(key == 0 || key == _this8.props.breadcrumb.length - 1 ? data.url : '/' + data.url);
                                            } },
                                        key == 0 || key == _this8.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                            'span',
                                            { className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
                                            data.title
                                        ) : _react2.default.createElement(
                                            'h2',
                                            { className: 'fw-500 breadcrumb-title breadcrumb-colored-title d-inline-blck' },
                                            data.title
                                        )
                                    ),
                                    key != _this8.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                        'span',
                                        { className: 'breadcrumb-arrow' },
                                        '>'
                                    ) : ''
                                );
                            }) : ''
                        )
                    ) : '',
                    this.props.fromVip ? _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                                return _this8.child = ref;
                            }, getCityListLayout: this.getCityListLayout.bind(this), resultType: 'search', locationName: locationName, fromVip: this.props.fromVip })),
                        this.getCityList()
                    ) : _react2.default.createElement(
                        'section',
                        { className: 'scroll-shadow-bar' },
                        _react2.default.createElement(
                            'div',
                            { className: 'top-filter-tab-container' },
                            _react2.default.createElement(
                                'div',
                                { className: 'top-filter-tabs-select locationTestFilter' },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'newStickyfilter' },
                                    this.props.count + ' ' + (ipd_ids.length ? 'Specialists' : 'Results') + ' for ' + (this.props.hospitalData && this.props.hospitalData.name ? (criteriaStr || 'Doctor') + '  in ' + this.props.hospitalData.name : ''),
                                    this.props.hospitalData && this.props.hospitalData.name ? '' : _react2.default.createElement(
                                        'h1',
                                        { className: 'sort-head-font-inline' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: '' + (this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length > 3 ? 'srch-truncate' : '') },
                                            '' + (criteriaStr || 'Doctor')
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { onClick: this.goToLocation.bind(this) },
                                            ' in ' + locationName
                                        )
                                    ),
                                    this.props.hospitalData && this.props.hospitalData.name || !locationName ? '' : _react2.default.createElement(
                                        'span',
                                        { onClick: this.goToLocation.bind(this) },
                                        _react2.default.createElement('img', { style: { width: '11px', height: '15px', marginLeft: '7px' }, src: "/assets" + "/img/customer-icons/edit.svg" })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'd-none d-md-inline-block' },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'inline-list' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'span',
                                            { style: { cursor: 'pointer' }, onClick: this.shortenUrl.bind(this) },
                                            _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/url-short.svg", style: { width: 80 } })
                                        )
                                    ),
                                    this.state.shortURL ? _react2.default.createElement(
                                        'div',
                                        { className: 'shareLinkpopupOverlay', onClick: function onClick() {
                                                _this8.setState({ shortURL: "" });
                                            } },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'shareLinkpopup', onClick: function onClick(e) {
                                                    e.stopPropagation();
                                                } },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                this.state.shortURL
                                            ),
                                            _react2.default.createElement(
                                                _reactCopyToClipboard.CopyToClipboard,
                                                { text: this.state.shortURL,
                                                    onCopy: function onCopy() {
                                                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Shortened URL Copied." });
                                                        _this8.setState({ shortURL: "" });
                                                    } },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'shrelinkBtn' },
                                                    _react2.default.createElement(
                                                        'button',
                                                        null,
                                                        'Copy'
                                                    )
                                                )
                                            )
                                        )
                                    ) : ""
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'top-filter-tabs-select newSortFilterbar', onClick: this.sortFilterClicked.bind(this) },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'p-relative' },
                                    _react2.default.createElement('img', { style: { width: '14px' }, src: "/assets" + "/img/filtersort.png" }),
                                    this.isDataFiltered() ? _react2.default.createElement(
                                        'p',
                                        { className: 'filterNotification' },
                                        this.isDataFiltered()
                                    ) : ''
                                ),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Sort/Filter'
                                )
                            )
                        )
                    ),
                    this.state.showLocationPopup && !this.props.fromVip ? _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                            return _this8.child = ref;
                        }, resultType: 'list', isTopbar: true, hideLocationPopup: function hideLocationPopup() {
                            return _this8.hideLocationPopup();
                        }, locationName: locationName })) : '',
                    this.state.showLocationPopup && this.state.overlayVisible && !this.props.clinic_card && !this.props.fromVip ? _react2.default.createElement('div', { className: 'locationPopup-overlay', onClick: function onClick() {
                            return _this8.overlayClick();
                        } }) : '',
                    this.state.showLocationPopup && this.props.clinic_card && this.state.showPopupContainer && !this.props.fromVip ? _react2.default.createElement('div', { className: 'popupContainer-overlay' }) : '',
                    _storage2.default.checkAuth() && this.props.is_login_user_insured && this.props.insurance_status == 1 ? _react2.default.createElement(
                        'div',
                        { className: 'tg-list-item' },
                        _react2.default.createElement('input', { className: 'tgl tgl-ios', id: 'lab_insurance', type: 'checkbox', checked: this.state.is_insured, onChange: this.toggleInsured.bind(this) }),
                        _react2.default.createElement('label', { className: 'tgl-btn', htmlFor: 'lab_insurance' }),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Covered under OPD insurance | ',
                            _react2.default.createElement(
                                'a',
                                { href: 'https://qacdn.docprime.com/media/insurer/documents/Group_Out-Patient_CIS_JNLVJju.PDF', target: '_blank' },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    ' Know More'
                                )
                            )
                        )
                    ) : ''
                )
            );
        }
    }]);

    return TopBar;
}(_react2.default.Component);

exports.default = TopBar;

/***/ }),

/***/ "./dev/js/components/opd/searchResults/topBar/result_count.js":
/*!********************************************************************!*\
  !*** ./dev/js/components/opd/searchResults/topBar/result_count.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Range = __webpack_require__(/*! rc-slider/lib/Range */ "./node_modules/rc-slider/lib/Range.js");

var _Range2 = _interopRequireDefault(_Range);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _locationElements = __webpack_require__(/*! ../../../../containers/commons/locationElements */ "./dev/js/containers/commons/locationElements.js");

var _locationElements2 = _interopRequireDefault(_locationElements);

var _locationPopup = __webpack_require__(/*! ../../../../containers/commons/locationPopup */ "./dev/js/containers/commons/locationPopup.js");

var _locationPopup2 = _interopRequireDefault(_locationPopup);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _ipdLeadForm = __webpack_require__(/*! ../../../../containers/ipd/ipdLeadForm.js */ "./dev/js/containers/ipd/ipdLeadForm.js");

var _ipdLeadForm2 = _interopRequireDefault(_ipdLeadForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var TopBar = function (_React$Component) {
    _inherits(TopBar, _React$Component);

    function TopBar(props) {
        _classCallCheck(this, TopBar);

        var _this = _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call(this, props));

        _this.state = {
            // anchorEl: null,
            // openFilter: false,
            // priceRange: [0, 3000],
            // distanceRange: [0, 15],
            // sort_on: null,
            // sits_at_clinic: false,
            // sits_at_hospital: false,
            // is_female: false,
            // is_available: false,
            shortURL: "",
            // dropdown_visible: false,
            showLocationPopup: false,
            overlayVisible: false,
            showPopupContainer: true,
            showIpdLeadForm: true
        };
        return _this;
    }

    _createClass(TopBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState(_extends({}, props.filterCriteria));
            if (props.locationType && !props.locationType.includes("geo")) {
                this.setState({ showLocationPopup: false });
            } else {
                if (props.seoData && props.seoData.location || props.seoFriendly) {
                    this.setState({ showLocationPopup: false });
                } else {
                    if (props.selectedLocation != this.props.selectedLocation) {
                        this.setState({ showLocationPopup: true, overlayVisible: true, showIpdLeadForm: false });
                    }
                }
            }
            // this.shortenUrl()
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState(_extends({}, this.props.filterCriteria));
            // this.shortenUrl()
            if (this.props.seoData && this.props.seoData.location || this.props.seoFriendly) {
                this.setState({ showLocationPopup: false, showIpdLeadForm: true });
            } else {
                if (this.props.locationType && this.props.locationType.includes("geo")) {
                    this.setState({ showLocationPopup: true, overlayVisible: true, showIpdLeadForm: false });
                }
            }
        }
    }, {
        key: 'handleInput',
        value: function handleInput(e) {
            var _this2 = this;

            var evName = e.target.name;
            var checked = e.target.checked;
            setTimeout(function () {
                _this2.setState(_defineProperty({}, evName, checked));
            });
        }

        // applyFilters() {
        //     let filterState = {
        //         priceRange: this.state.priceRange,
        //         distanceRange: this.state.distanceRange,
        //         sits_at: this.state.sits_at,
        //         sort_on: this.state.sort_on,
        //         is_female: this.state.is_female,
        //         is_available: this.state.is_available,
        //         sits_at_clinic: this.state.sits_at_clinic,
        //         sits_at_hospital: this.state.sits_at_hospital
        //     }
        //     let data = {
        //         'Category': 'FilterClick', 'Action': 'Clicked on Filter', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'opd-filter-clicked', 'url': window.location.pathname, 'available_today': this.state.is_available, 'sits_at_clinic': this.state.sits_at_clinic, 'sits_at_hospital': this.state.sits_at_hospital, 'lowPriceRange': this.state.priceRange[0], 'highPriceRange': this.state.priceRange[1], 'lowDistanceRange': this.state.distanceRange[0], 'highDistanceRange': this.state.distanceRange[1], 'is_female': this.state.is_female, 'sort_on': this.state.sort_on == "" ? 'relevance' : this.state.sort_on
        //     }
        //     GTM.sendEvent({ data: data })
        //     this.props.applyFilters(filterState)
        //     this.setState({ openFilter: false })
        // }

        // handleOpen(event) {
        //     // this.setState({ anchorEl: event.currentTarget })
        //     this.setState({
        //         dropdown_visible: true
        //     });
        // }

        // hideSortDiv() {
        //     this.setState({
        //         dropdown_visible: false
        //     });
        // }

        // handleClose(type) {
        //     let data = {
        //         'Category': 'ConsumerApp', 'Action': 'OpdSortFilterApplied', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'opd-sort-filter-applied', 'url': window.location.pathname, 'sort_on': type === "" ? 'relevance' : type
        //     }
        //     GTM.sendEvent({ data: data })
        //     this.setState({ anchorEl: null, sort_on: type, dropdown_visible: false }, () => {
        //         if (type || type === "") {
        //             this.applyFilters()
        //         }
        //     })
        // }

        // toggleFilter() {
        //     this.setState({
        //         openFilter: !this.state.openFilter
        //     })
        // }

        // handleRange(type, range) {
        //     this.setState({
        //         [type]: range
        //     })
        // }

    }, {
        key: 'getCriteriaString',
        value: function getCriteriaString(selectedCriterias) {
            if (selectedCriterias && selectedCriterias.length) {
                var selectedProcedureCategory = selectedCriterias.filter(function (x) {
                    return x.type == 'procedures_category';
                });
                var procedures = selectedCriterias.filter(function (x) {
                    return x.type == 'procedures';
                });

                return selectedCriterias.reduce(function (final, curr, i) {
                    if (i != 0) {
                        final += ', ';
                    }
                    final += '' + curr.name;
                    return final;
                }, "");
            }
        }

        // isFilterApplied() {
        //     const def = {
        //         priceRange: [0, 3000],
        //         distanceRange: [0, 15],
        //         sits_at_clinic: false,
        //         sits_at_hospital: false,
        //         is_female: false,
        //         is_available: false
        //     }
        //     try {
        //         for (let filter in def) {
        //             if (filter == 'priceRange' || filter == 'distanceRange') {
        //                 if (def[filter][0] != this.state[filter][0] || def[filter][1] != this.state[filter][1]) {
        //                     return true
        //                 }
        //             } else {
        //                 if (def[filter] != this.state[filter]) {
        //                     return true
        //                 }
        //             }
        //         }
        //         return false
        //     } catch (e) {
        //         return false
        //     }
        // }

    }, {
        key: 'shortenUrl',
        value: function shortenUrl() {
            var _this3 = this;

            if (window) {
                var url = window.location.href;
                if (url.includes('?')) {
                    url = window.location.href + '&force_location=true';
                } else {
                    url = window.location.href + '?force_location=true';
                }
                this.props.urlShortner(url, function (err, data) {
                    if (!err) {
                        _this3.setState({ shortURL: data.tiny_url });
                    }
                });
            }
        }
    }, {
        key: 'overlayClick',
        value: function overlayClick() {
            this.setState({ overlayVisible: false, searchCities: [], showIpdLeadForm: true });
            if (document.getElementById('location_element')) {
                document.getElementById('location_element').style.zIndex = '0';
            }
        }
    }, {
        key: 'hideLocationPopup',
        value: function hideLocationPopup() {
            this.setState({ showLocationPopup: false, showIpdLeadForm: true });
        }
    }, {
        key: 'popupContainer',
        value: function popupContainer() {
            this.setState({ showPopupContainer: false, showLocationPopup: false, showIpdLeadForm: true });
        }
    }, {
        key: 'goToLocation',
        value: function goToLocation() {
            this.setState({
                searchCities: []
            });
            var redirect_to = "";
            if (window.location.pathname.includes('sptcit') || window.location.pathname.includes('sptlitcit')) {
                redirect_to = "/opd/searchresults";
            }

            var location_url = '/locationsearch';
            if (redirect_to) {
                location_url += '?redirect_to=' + redirect_to;
            }
            this.props.setNextSearchCriteria();
            var data = {
                'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push(location_url);
        }
    }, {
        key: 'submitLeadFormGeneration',
        value: function submitLeadFormGeneration() {
            var close = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (close) {
                var gtmData = {
                    'Category': 'ConsumerApp', 'Action': 'DoctorSearchIpdFormClosed', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-search-ipd-form-closed'
                };
                _gtm2.default.sendEvent({ data: gtmData });
            }
            this.setState({ showIpdLeadForm: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var criteriaStr = this.getCriteriaString(this.props.commonSelectedCriterias);
            var locationName = "";
            if (this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
                locationName = this.props.selectedLocation.formatted_address;
            }
            if (this.props.seoData && this.props.seoData.location) {
                locationName = this.props.seoData.location;
            }

            var parsed = queryString.parse(this.props.location.search);
            var specializations = this.props.commonSelectedCriterias.filter(function (x) {
                return x.type == 'speciality';
            });

            var ipd_ids = this.props.commonSelectedCriterias.filter(function (x) {
                return x.type == 'ipd';
            }).map(function (x) {
                return x.id;
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid', id: 'filter-scroll' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12' },
                            _react2.default.createElement(
                                'div',
                                { className: 'filter-pdng' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'action-filter d-none d-md-block alignShareBtn' },
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'inline-list' },
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'd-none d-md-inline-block' },
                                            _react2.default.createElement(
                                                'span',
                                                { style: { cursor: 'pointer' }, onClick: this.shortenUrl.bind(this) },
                                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/url-short.svg", style: { width: 80 } })
                                            )
                                        ),
                                        this.state.shortURL ? _react2.default.createElement(
                                            'div',
                                            { className: 'shareLinkpopupOverlay', onClick: function onClick() {
                                                    _this4.setState({ shortURL: "" });
                                                } },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'shareLinkpopup', onClick: function onClick(e) {
                                                        e.stopPropagation();
                                                    } },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    this.state.shortURL
                                                ),
                                                _react2.default.createElement(
                                                    _reactCopyToClipboard.CopyToClipboard,
                                                    { text: this.state.shortURL,
                                                        onCopy: function onCopy() {
                                                            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Shortened URL Copied." });
                                                            _this4.setState({ shortURL: "" });
                                                        } },
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'shrelinkBtn' },
                                                        _react2.default.createElement(
                                                            'button',
                                                            null,
                                                            'Copy'
                                                        )
                                                    )
                                                )
                                            )
                                        ) : ""
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'filter-title' },
                                    this.props.count,
                                    ' results found for ',
                                    ipd_ids.length ? 'Best' : '',
                                    _react2.default.createElement(
                                        'h1',
                                        { className: 'search-result-heading' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'fw-700' },
                                            ' ',
                                            criteriaStr || "Doctors",
                                            ' ',
                                            ipd_ids.length && criteriaStr ? 'Doctors' : ''
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'search-result-span' },
                                            this.state.showLocationPopup && false ? '' : locationName ? _react2.default.createElement(
                                                'span',
                                                { className: 'location-edit' },
                                                ' in ' + locationName
                                            ) : ''
                                        )
                                    ),
                                    _react2.default.createElement('img', { style: { width: 15, height: 15, marginLeft: 7, cursor: 'pointer' }, src: "/assets" + "/img/customer-icons/edit.svg", onClick: this.goToLocation.bind(this) })
                                )
                            )
                        )
                    ),
                    this.state.showLocationPopup ? this.props.clinic_card && this.state.showPopupContainer ? _react2.default.createElement(_locationPopup2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                            return _this4.child = ref;
                        }, resultType: 'list', isTopbar: true, hideLocationPopup: function hideLocationPopup() {
                            return _this4.hideLocationPopup();
                        }, locationName: locationName, criteriaString: criteriaStr, popupContainer: function popupContainer() {
                            return _this4.popupContainer();
                        } })) : _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                            return _this4.child = ref;
                        }, resultType: 'list', isTopbar: true, hideLocationPopup: function hideLocationPopup() {
                            return _this4.hideLocationPopup();
                        }, locationName: locationName })) : '',
                    this.state.showLocationPopup && this.state.overlayVisible && !this.props.clinic_card ? _react2.default.createElement('div', { className: 'locationPopup-overlay', onClick: function onClick() {
                            return _this4.overlayClick();
                        } }) : '',
                    this.state.showLocationPopup && this.props.clinic_card && this.state.showPopupContainer ? _react2.default.createElement('div', { className: 'popupContainer-overlay' }) : '',
                    specializations && specializations.length && parsed.hospital_id && parsed.showPopup && this.state.showIpdLeadForm && (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE ? _react2.default.createElement(_ipdLeadForm2.default, _extends({ submitLeadFormGeneration: this.submitLeadFormGeneration.bind(this) }, this.props, { hospital_id: parsed.hospital_id, formSource: 'doctorResultPage' })) : ''
                )
            );
        }
    }]);

    return TopBar;
}(_react2.default.Component);

exports.default = TopBar;

/***/ }),

/***/ "./dev/js/containers/opd/SearchResults.js":
/*!************************************************!*\
  !*** ./dev/js/containers/opd/SearchResults.js ***!
  \************************************************/
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

var _urltoState = __webpack_require__(/*! ../../helpers/urltoState */ "./dev/js/helpers/urltoState.js");

var _index2 = __webpack_require__(/*! ../../components/opd/searchResults/index.js */ "./dev/js/components/opd/searchResults/index.js");

var _index3 = _interopRequireDefault(_index2);

var _notFound = __webpack_require__(/*! ../../components/commons/notFound */ "./dev/js/components/commons/notFound/index.js");

var _notFound2 = _interopRequireDefault(_notFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResults = function (_React$Component) {
    _inherits(SearchResults, _React$Component);

    function SearchResults(props) {
        _classCallCheck(this, SearchResults);

        var _this = _possibleConstructorReturn(this, (SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).call(this, props));

        _this.state = {
            show404: false
        };
        return _this;
    }

    _createClass(SearchResults, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.show404) {
                this.setState({ show404: true });
                this.props.toggle404(false);
            }
            /* API call is on Desktop Profile Header
                this.props.loadOPDInsurance(this.props.selectedLocation)
            */
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.props.show404 || this.state.show404) {
                return _react2.default.createElement(_notFound2.default, this.props);
            }

            return _react2.default.createElement(_index3.default, this.props);
        }
    }], [{
        key: 'loadData',
        value: function loadData(store, match) {
            var queryParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return new Promise(function (resolve, reject) {
                try {
                    var location_ms = null;
                    if (match.url.includes('location=')) {
                        location_ms = match.url.split('location=')[1];
                        location_ms = parseInt(location_ms);
                    }

                    (0, _urltoState.opdSearchStateBuilder)(null, queryParams, true, location_ms).then(function (state) {
                        store.dispatch((0, _index.mergeOPDState)(state));
                        if (queryParams && (queryParams.fromVip && queryParams.fromVip == "true" || queryParams.fromGoldVip && queryParams.fromGoldVip == "true")) {
                            var extraData = {
                                selectedLocation: state && state.selectedLocation ? state.selectedLocation : {},
                                type: queryParams.fromVip ? 'is_vip' : queryParams.fromGoldVip ? 'is_gold' : null
                            };
                            store.dispatch((0, _index.getNearbyHospitals)(extraData));
                            store.dispatch((0, _index.getTopHospitals)(extraData));
                        }

                        var searchUrl = null;
                        if (match.url.includes('-sptcit') || match.url.includes('-sptlitcit') || match.url.includes('-ipddp')) {
                            searchUrl = match.url.toLowerCase();
                        }
                        var clinic_card = false;
                        if (queryParams.clinic_card) {
                            clinic_card = true;
                        }
                        var page = 1;
                        if (queryParams.page) {
                            page = parseInt(queryParams.page);
                        }
                        return store.dispatch((0, _index.getDoctors)(state, page, true, searchUrl, function (loadMore) {
                            var noResults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                            if (noResults) {
                                resolve({ status: 404 });
                            }
                            if (match.url.includes('-sptcit') || match.url.includes('-sptlitcit') || match.url.includes('-ipddp')) {
                                (0, _index.getFooterData)(match.url.split("/")[1], queryParams.page || 1)().then(function (footerData) {
                                    footerData = footerData || null;
                                    resolve({ footerData: footerData });
                                }).catch(function (e) {
                                    resolve({});
                                });
                            } else {
                                resolve({});
                            }
                        }, clinic_card));
                    }).catch(function (e) {
                        reject();
                    });
                } catch (e) {
                    reject();
                }
            });
        }
    }]);

    return SearchResults;
}(_react2.default.Component);

SearchResults.contextTypes = {
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

    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_OPD,
        LOADED_SEARCH_CRITERIA_OPD = _state$SEARCH_CRITERI.LOADED_SEARCH_CRITERIA_OPD,
        commonSelectedCriterias = _state$SEARCH_CRITERI.commonSelectedCriterias,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        filterCriteria = _state$SEARCH_CRITERI.filterCriteria,
        locationType = _state$SEARCH_CRITERI.locationType,
        fetchNewResults = _state$SEARCH_CRITERI.fetchNewResults,
        getNewUrl = _state$SEARCH_CRITERI.getNewUrl,
        selectedCriterias = _state$SEARCH_CRITERI.selectedCriterias,
        page = _state$SEARCH_CRITERI.page,
        search_id_data = _state$SEARCH_CRITERI.search_id_data,
        nextSelectedCriterias = _state$SEARCH_CRITERI.nextSelectedCriterias,
        nextFilterCriteria = _state$SEARCH_CRITERI.nextFilterCriteria,
        mergeUrlState = _state$SEARCH_CRITERI.mergeUrlState,
        common_settings = _state$SEARCH_CRITERI.common_settings,
        nearbyHospitals = _state$SEARCH_CRITERI.nearbyHospitals,
        topHospitals = _state$SEARCH_CRITERI.topHospitals;
    var compare_packages = state.SEARCH_CRITERIA_LABS.compare_packages;


    var DOCTORS = state.DOCTORS;
    var HOSPITALS = state.HOSPITALS;

    var _state$DOCTOR_SEARCH = state.DOCTOR_SEARCH,
        hospitalList = _state$DOCTOR_SEARCH.hospitalList,
        doctorList = _state$DOCTOR_SEARCH.doctorList,
        LOADED_DOCTOR_SEARCH = _state$DOCTOR_SEARCH.LOADED_DOCTOR_SEARCH,
        count = _state$DOCTOR_SEARCH.count,
        SET_FROM_SERVER = _state$DOCTOR_SEARCH.SET_FROM_SERVER,
        search_content = _state$DOCTOR_SEARCH.search_content,
        curr_page = _state$DOCTOR_SEARCH.curr_page,
        ratings = _state$DOCTOR_SEARCH.ratings,
        reviews = _state$DOCTOR_SEARCH.reviews,
        ratings_title = _state$DOCTOR_SEARCH.ratings_title,
        bottom_content = _state$DOCTOR_SEARCH.bottom_content,
        breadcrumb = _state$DOCTOR_SEARCH.breadcrumb,
        seoData = _state$DOCTOR_SEARCH.seoData,
        show404 = _state$DOCTOR_SEARCH.show404,
        canonical_url = _state$DOCTOR_SEARCH.canonical_url,
        hospitalData = _state$DOCTOR_SEARCH.hospitalData,
        similar_specializations = _state$DOCTOR_SEARCH.similar_specializations;
    var _state$USER = state.USER,
        offerList = _state$USER.offerList,
        is_login_user_insured = _state$USER.is_login_user_insured,
        insurance_status = _state$USER.insurance_status,
        device_info = _state$USER.device_info;


    return {
        DOCTORS: DOCTORS, doctorList: doctorList, LOADED_DOCTOR_SEARCH: LOADED_DOCTOR_SEARCH,
        LOADED_SEARCH_CRITERIA_OPD: LOADED_SEARCH_CRITERIA_OPD,
        commonSelectedCriterias: commonSelectedCriterias,
        selectedLocation: selectedLocation,
        filterCriteria: filterCriteria,
        count: count,
        SET_FROM_SERVER: SET_FROM_SERVER,
        initialServerData: initialServerData,
        locationType: locationType,
        fetchNewResults: fetchNewResults,
        search_content: search_content,
        getNewUrl: getNewUrl,
        selectedCriterias: selectedCriterias,
        page: page,
        curr_page: curr_page,
        HOSPITALS: HOSPITALS,
        hospitalList: hospitalList, ratings: ratings, reviews: reviews, ratings_title: ratings_title,
        search_id_data: search_id_data,
        nextSelectedCriterias: nextSelectedCriterias,
        nextFilterCriteria: nextFilterCriteria,
        bottom_content: bottom_content,
        breadcrumb: breadcrumb,
        seoData: seoData,
        mergeUrlState: mergeUrlState,
        show404: show404,
        offerList: offerList,
        is_login_user_insured: is_login_user_insured,
        insurance_status: insurance_status,
        canonical_url: canonical_url,
        compare_packages: compare_packages,
        device_info: device_info,
        common_settings: common_settings,
        hospitalData: hospitalData,
        similar_specializations: similar_specializations,
        nearbyHospitals: nearbyHospitals,
        topHospitals: topHospitals
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        urlShortner: function urlShortner(url, cb) {
            return dispatch((0, _index.urlShortner)(url, cb));
        },
        loadOPDCommonCriteria: function (_loadOPDCommonCriteria) {
            function loadOPDCommonCriteria() {
                return _loadOPDCommonCriteria.apply(this, arguments);
            }

            loadOPDCommonCriteria.toString = function () {
                return _loadOPDCommonCriteria.toString();
            };

            return loadOPDCommonCriteria;
        }(function () {
            return dispatch(loadOPDCommonCriteria());
        }),
        toggleOPDCriteria: function toggleOPDCriteria(type, criteria, forceAdd, filter) {
            return dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filter));
        },
        getDoctors: function getDoctors(state, page, from_server, searchByUrl, cb, clinic_card) {
            return dispatch((0, _index.getDoctors)(state, page, from_server, searchByUrl, cb, clinic_card));
        },
        mergeOPDState: function mergeOPDState(state, fetchNewResults) {
            return dispatch((0, _index.mergeOPDState)(state, fetchNewResults));
        },
        getDoctorNumber: function getDoctorNumber(doctorId, callback) {
            return dispatch((0, _index.getDoctorNumber)(doctorId, callback));
        },
        getFooterData: function getFooterData(url, page) {
            return dispatch((0, _index.getFooterData)(url, page));
        },
        saveCommonProcedures: function saveCommonProcedures(procedure_ids) {
            return dispatch((0, _index.saveCommonProcedures)(procedure_ids));
        },
        resetProcedureURl: function resetProcedureURl() {
            return dispatch((0, _index.resetProcedureURl)());
        },
        mergeSelectedCriterias: function mergeSelectedCriterias() {
            return dispatch((0, _urltoState.mergeSelectedCriterias)());
        },
        setSearchId: function setSearchId(searchId, filters, setDefault) {
            return dispatch((0, _index.setSearchId)(searchId, filters, setDefault));
        },
        getSearchIdResults: function getSearchIdResults(searchId, searchResults) {
            return dispatch((0, _index.getSearchIdResults)(searchId, searchResults));
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        },
        setNextSearchCriteria: function setNextSearchCriteria() {
            return dispatch((0, _index.setNextSearchCriteria)());
        },
        toggle404: function toggle404(status) {
            return dispatch((0, _index.toggle404)(status));
        },
        selectOpdTimeSLot: function selectOpdTimeSLot(slot, reschedule, appointmentId) {
            return dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId));
        },
        saveProfileProcedures: function saveProfileProcedures(doctor_id, clinic_id, procedure_ids, forceAdd) {
            return dispatch((0, _index.saveProfileProcedures)(doctor_id, clinic_id, procedure_ids, forceAdd));
        },
        getOfferList: function getOfferList(lat, long) {
            return dispatch((0, _index.getOfferList)(lat, long));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd, filter) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filter));
        },
        resetPkgCompare: function resetPkgCompare() {
            return dispatch((0, _index.resetPkgCompare)());
        },
        selectLocation: function selectLocation(location, type) {
            return dispatch((0, _index.selectLocation)(location, type));
        },
        cloneCommonSelectedCriterias: function cloneCommonSelectedCriterias(selectedCriterias) {
            return dispatch((0, _index.cloneCommonSelectedCriterias)(selectedCriterias));
        },
        loadOPDInsurance: function loadOPDInsurance(city) {
            return dispatch((0, _index.loadOPDInsurance)(city));
        },
        getDoctorHospitalFilters: function getDoctorHospitalFilters(state, page, from_server, searchByUrl, cb, clinic_card) {
            return dispatch((0, _index.getDoctorHospitalFilters)(state, page, from_server, searchByUrl, cb, clinic_card));
        },
        getDoctorHospitalSpeciality: function getDoctorHospitalSpeciality(state, page, from_server, searchByUrl, cb, clinic_card) {
            return dispatch((0, _index.getDoctorHospitalSpeciality)(state, page, from_server, searchByUrl, cb, clinic_card));
        },
        getSponsoredList: function getSponsoredList(data, selectedLocation, cb) {
            return dispatch((0, _index.getSponsoredList)(data, selectedLocation, cb));
        },
        getNearbyHospitals: function getNearbyHospitals(params, cb) {
            return dispatch((0, _index.getNearbyHospitals)(params, cb));
        },
        toggleIPDCriteria: function toggleIPDCriteria(criteria, forceAdd) {
            return dispatch((0, _index.toggleIPDCriteria)(criteria, forceAdd));
        },
        getTopHospitals: function getTopHospitals(dataParams, cb) {
            return dispatch((0, _index.getTopHospitals)(dataParams, cb));
        },
        mergeIpdCriteria: function mergeIpdCriteria(filterCriteria) {
            return dispatch((0, _index.mergeIpdCriteria)(filterCriteria));
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchResults);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL25vdEZvdW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvbm90Rm91bmQvbm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2NvbW1vbnMvY2xpbmljUmVzdWx0Q2FyZC9DbGluaWNSZXN1bHRDYXJkLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9jb21tb25zL2NsaW5pY1Jlc3VsdENhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3NlYXJjaFJlc3VsdHMvU2VhcmNoUmVzdWx0c1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3NlYXJjaFJlc3VsdHMvY2Fyb3VzZWxWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9zZWFyY2hSZXN1bHRzL2RvY3RvcnNMaXN0L0RvY3RvcnNMaXN0LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9zZWFyY2hSZXN1bHRzL2RvY3RvcnNMaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9zZWFyY2hSZXN1bHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9zZWFyY2hSZXN1bHRzL25ld1RvcEJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvc2VhcmNoUmVzdWx0cy9uZXdUb3BCYXIvbmV3VG9wQmFyLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9zZWFyY2hSZXN1bHRzL3RvcEJhci9yZXN1bHRfY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvb3BkL1NlYXJjaFJlc3VsdHMuanMiXSwibmFtZXMiOlsiTm90Rm91bmRWaWV3IiwiTm90Rm91bmQiLCJwcm9wcyIsImRpc3BsYXkiLCJBU1NFVFNfQkFTRV9VUkwiLCJoaXN0b3J5IiwicHVzaCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2xpbmljUmVzdWx0Q2FyZCIsInN0YXRlIiwib3BlblNlbGVjdERvY3RvciIsInNldFN0YXRlIiwiaWQiLCJ1cmwiLCJob3NwaXRhbF9pZCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwicmFuayIsImN0cmxLZXkiLCJtZXRhS2V5IiwicHJldmVudERlZmF1bHQiLCJjYXRlZ29yeV9pZHMiLCJjb21tb25TZWxlY3RlZENyaXRlcmlhcyIsImZpbHRlciIsIngiLCJ0eXBlIiwibWFwIiwicHJvY2VkdXJlX2lkcyIsImxlbmd0aCIsInF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbiIsInJlZHVjZSIsInN0ciIsImN1cnIiLCJpIiwibmFtZSIsInNsb3QiLCJ0aW1lIiwic2VsZWN0T3BkVGltZVNMb3QiLCJ0cmFja2luZ0V2ZW50c0Jvb2tOb3ciLCJzYXZlUHJvZmlsZVByb2NlZHVyZXMiLCJEaXN0YW5jZSIsImRldGFpbHMiLCJkaXN0YW5jZSIsIk1hdGgiLCJyb3VuZCIsInRvRml4ZWQiLCJqb2luIiwiY29uZGl0aW9uX2lkcyIsInNwZWNpYWxpemF0aW9uX2lkcyIsImNvdW50IiwiYWRkcmVzcyIsImhvc3BpdGFsX25hbWUiLCJkb2N0b3JzIiwicHJvY2VkdXJlX2NhdGVnb3JpZXMiLCJzaG9ydF9hZGRyZXNzIiwic3BlY2lhbGl6YXRpb24iLCJkb2N0b3IiLCJkaXNjb3VudGVkX3ByaWNlIiwiaXNfbGljZW5zZV92ZXJpZmllZCIsImRlYWxfcHJpY2UiLCJtcnAiLCJnZW5lcmFsX3NwZWNpYWxpemF0aW9uIiwiZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmciLCJkaXNjb3VudCIsImlzX3Byb2NlZHVyZSIsInNlbGVjdGVkQ291bnQiLCJ1bnNlbGVjdGVkQ291bnQiLCJmaW5hbFByb2NlZHVyZURlYWxQcmljZSIsImZpbmFsUHJvY2VkdXJlTXJwIiwicHJvY2VkdXJlcyIsImlzX3NlbGVjdGVkIiwicG9zaXRpb24iLCJjdXJzb3IiLCJib29rTm93Q2xpY2tlZCIsImNhcmRDbGljayIsInRvZ2dsZVNlbGVjdERvY3RvciIsImNvbG9yIiwicGFkZGluZ1JpZ2h0IiwiZm9udFNpemUiLCJ3aWR0aCIsImQiLCJiaW5kIiwiYm9yZGVyVG9wIiwibWFyZ2luIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiU2VhcmNoUmVzdWx0c1ZpZXciLCJzY3JvbGxIYW5kbGVyIiwic2Nyb2xsUG9zaXRpb24iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJzY3JlZW5TaXplIiwid2luZG93Iiwic2NyZWVuIiwiaGVpZ2h0Iiwic2hvd1NlYXJjaEJ0biIsInNlb0RhdGEiLCJmb290ZXJEYXRhIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsImluaXRpYWxTZXJ2ZXJEYXRhIiwic2VvRnJpZW5kbHkiLCJtYXRjaCIsImluY2x1ZGVzIiwiY2xpbmljX2NhcmQiLCJzaG93RXJyb3IiLCJzZWFyY2hfaWQiLCJzZXRTZWFyY2hJZCIsInF1aWNrRmlsdGVyIiwiZGV0ZWN0TG9jYXRpb24iLCJzcG9uc29yRGF0YSIsImZyb21WaXAiLCJmcm9tR29sZFZpcCIsInNlYXJjaF9zdHJpbmciLCJzY3JvbGxFdmVudEFkZGVkIiwic2hvd05vbklwZFBvcHVwIiwic2hvd19wb3B1cCIsInRvX2JlX2ZvcmNlIiwiaXNfbGVhZF9lbmFibGVkIiwic2VhcmNoVXJsIiwidG9Mb3dlckNhc2UiLCJsb2NhdGlvblR5cGUiLCJzZWxlY3RlZExvY2F0aW9uIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJyZWZzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV4dHJhRGF0YSIsImdldE5lYXJieUhvc3BpdGFscyIsImdldFRvcEhvc3BpdGFscyIsIm1lcmdlVXJsU3RhdGUiLCJnZXRTZWFyY2hJZCIsInNlYXJjaF9pZF9kYXRhIiwicmVzdWx0IiwiZmV0Y2hOZXdSZXN1bHRzIiwiZ2V0U2VhcmNoSWRSZXN1bHRzIiwiZmlsdGVycyIsImZpbHRlckNyaXRlcmlhIiwicGFnZSIsIm5leHRTZWxlY3RlZENyaXRlcmlhcyIsIm5leHRGaWx0ZXJDcml0ZXJpYSIsImdlbmVyYXRlU2VhcmNoSWQiLCJzY3JvbGxUbyIsImlzX2xvZ2luX3VzZXJfaW5zdXJlZCIsImluc3VyYW5jZV9zdGF0dXMiLCJpc19pbnN1cmVkIiwibmV3X3VybCIsImJ1aWxkVVJJIiwicmVwbGFjZSIsImdldEZvb3RlckRhdGEiLCJzcGxpdCIsInRoZW4iLCJnZXROZXdVcmwiLCJnZXREb2N0b3JMaXN0IiwiY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyIsImRvY3Rvcl9uYW1lIiwic29ydF9vbiIsIm1lcmdlT1BEU3RhdGUiLCJwYXRobmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1aWRfc3RyaW5nIiwiZHQiLCJEYXRlIiwiZ2V0VGltZSIsInV1aWQiLCJjIiwiciIsInJhbmRvbSIsImZsb29yIiwidG9TdHJpbmciLCJ0YWciLCJwYXJhbVN0cmluZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImdldCIsImZpbHRlclN0YXRlIiwiT05fTEFORElOR19QQUdFIiwicmVzZXRRdWlja0ZpbHRlcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJzcGVjaWFsaXphdGlvbnNfaWRzIiwicHJvY2VkdXJlc19pZHMiLCJpcGRfaWRzIiwiZ3JvdXBfaWRzIiwibGF0IiwibG9uZyIsInBsYWNlX2lkIiwibG9jYWxpdHkiLCJzdWJfbG9jYWxpdHkiLCJnZW9tZXRyeSIsImxuZyIsInBhcnNlRmxvYXQiLCJzb3J0X29yZGVyIiwiYXZhaWxhYmlsaXR5IiwiYXZnX3JhdGluZ3MiLCJnZW5kZXIiLCJzaXRzX2F0X2hvc3BpdGFsIiwic2l0c19hdF9jbGluaWMiLCJzcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzIiwiaXNfZmlsdGVyX2FwcGxpZWQiLCJpc19wYXJhbXNfZXhpc3QiLCJ1dG1fdGVybSIsInV0bV9zb3VyY2UiLCJ1dG1fbWVkaXVtIiwidXRtX2NhbXBhaWduIiwiZ2V0X2ZlZWRiYWNrIiwic2hvd1BvcHVwIiwiY2IiLCJnZXREb2N0b3JzIiwiY2F0Y2giLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2NoZW1hIiwicGFyc2VJbnQiLCJzcGVjaWFsaXR5IiwiaXNWaWV3QWxsIiwic3BlY2lhbGl0eURhdGEiLCJWaWV3QWxsRGF0YSIsInNwZWMiLCJzcGVjaWFsaXphdGlvbl9pZCIsInNwZWNpYWxpemF0aW9uX25hbWUiLCJ0b2dnbGVPUERDcml0ZXJpYSIsInNldFRpbWVvdXQiLCJmbGFnIiwiZGF0YU1vZGVsIiwic2ltaWxhcl9zcGVjaWFsaXphdGlvbnMiLCJzZWFyY2hEb2N0b3JTcGVjaWFsaXphdGlvbiIsIlNpbWlsYXJTcGVjaWFsaXphdGlvbiIsImNoaWxkIiwic29ydEZpbHRlckNsaWNrZWQiLCJ0b3AiLCJndG1EYXRhIiwicmVkaXJlY3RVcmwiLCJtZXJnZUlwZENyaXRlcmlhIiwicGhvbmVfbnVtYmVyIiwiY3JpdGVyaWFTdHIiLCJnZXRDcml0ZXJpYVN0cmluZyIsImxlYWRfc291cmNlIiwic291cmNlIiwibGVhZF90eXBlIiwiZXhpdHBvaW50X3VybCIsImRvY3Rvcl9pZCIsImNvbW1vbl91dG1fdGFncyIsInV0bV90YWdzIiwidmlzaXRvcl9pbmZvIiwiZ2V0VmlzaXRvckluZm8iLCJ2aXNpdF9pZCIsInZpc2l0b3JfaWQiLCJndG1fZGF0YSIsInNhdmVMZWFkUGhuTnVtYmVyIiwiU1RPUkFHRSIsImlzQWdlbnQiLCJOb25JcGRCb29raW5nTGVhZCIsImZyb20iLCJzZWxlY3RlZENyaXRlcmlhcyIsImlzX2dyb3VwX2lkc19leGlzdCIsInNlbGVjdGVkRGF0YVZpZXciLCJmaW5hbCIsInNob3dfcGFnaW5hdGlvbiIsImRvY3Rvckxpc3QiLCJDT05GSUciLCJBUElfQkFTRV9VUkwiLCJjdXJyX3BhZ2UiLCJwcmV2IiwibmV4dCIsImxhbmRpbmdfcGFnZSIsImNhbm9uaWNhbFVybCIsImNhbm9uaWNhbF91cmwiLCJnZXRNZXRhVGFnc0RhdGEiLCJvZ1R5cGUiLCJvZ1NpdGVOYW1lIiwib2dUaXRsZSIsIm9nRGVzY3JpcHRpb24iLCJMT0FERURfRE9DVE9SX1NFQVJDSCIsImFwcGx5RmlsdGVycyIsInJlZiIsImhvc3BpdGFsTGlzdCIsImlzRmlsdGVyQXBwbGllZCIsImFwcGx5UXVpY2tGaWx0ZXIiLCJ2aWV3TW9yZSIsIlNpbWlsYXJTcGVjaWFsaXphdGlvbkRhdGEiLCJ0b3BIb3NwaXRhbHMiLCJ0b3BfaG9zcGl0YWxzIiwiaG9zcGl0YWxDYXJkQ2xpY2tlZCIsIm5lYXJieUhvc3BpdGFscyIsImhvc3BpdGFscyIsInZpZXdBbGxIb3NwaXRhbENsaWNrZWQiLCJkZXRlY3RMb2NhdGlvbkNsaWNrIiwiQ2Fyb3VzZWxWaWV3IiwiZWxtbnQiLCJnZXRFbGVtZW50QnlJZCIsImRhdGFUeXBlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm91dGVyRGl2V2lkdGgiLCJvZmZzZXRXaWR0aCIsImNoaWxkRGl2V2lkdGgiLCJjYXJkQ291bnQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNhcmRXaWR0aCIsImNlaWwiLCJsZWZ0U2Nyb2xsIiwic2Nyb2xsTGVmdCIsInNjcm9sbFZhbCIsImNhcmRFbmQiLCJzY3JvbGwiLCJsZWZ0IiwiYmVoYXZpb3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b3BIZWFkaW5nIiwiZGF0YUxpc3QiLCJ0b3BIb3NwaXRhbCIsImV4dHJhSGVhZGluZyIsInZpZXdBbGwiLCJuYXZpZ2F0ZVRvIiwia2V5IiwiY2Fyb3VzZWxDYXJkQ2xpY2tlZCIsImxvZ28iLCJEb2N0b3JzTGlzdCIsImhhc01vcmUiLCJsb2FkaW5nIiwicmVuZGVyQmxvY2siLCJyZWFkTW9yZSIsImRldGVjdExvYWRpbmciLCJnZXRPZmZlckxpc3QiLCJ2YWwiLCJpc0FycmF5IiwidmFsdWUiLCJzZWxlY3RlZFZhbCIsImNvbmNhdCIsImZvdW5kIiwidGltZW91dCIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibG9jYXRpb25fb2JqZWN0Iiwic2VsZWN0TG9jYXRpb24iLCJjbGVhclRpbWVvdXQiLCJhIiwiYiIsImRldGVjdEZsYWciLCJIT1NQSVRBTFMiLCJET0NUT1JTIiwic3RhcnRfcGFnZSIsIm1heCIsInJlc3VsdF9saXN0IiwicmVzdWx0X2RhdGEiLCJjYXJkX0lEIiwiYm9va2FibGVEb2N0b3JzIiwiY2FyZElkIiwic2VhcmNoX2NvbnRlbnQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJfX2h0bWwiLCJ0b2dnbGVTY3JvbGwiLCJsb2FkTW9yZSIsIm5hdmlnYXRlVG9Ib3NwaXRhbCIsImhvc3BpdGFsX2ltYWdlIiwiYWxsX2RvY3RvcnMiLCJvcGRfdGltaW5ncyIsIm1hcmdpbkJvdHRvbSIsImF2Z19yYXRpbmciLCJyYXRpbmciLCJob3NwaXRhbF9zZXJ2aWNlcyIsInNlcnYiLCJ2aWV3TW9yZUNsaWNrZWQiLCJpbmRleE9mIiwiYXBwbHlRdWlja0ZpbHRlcnMiLCJvZmZlckxpc3QiLCJzbGlkZXJfbG9jYXRpb24iLCJEb2N0b3JMaXN0IiwiTmV3VG9wQmFyIiwiVG9wQmFyIiwiYW5jaG9yRWwiLCJkcm9wZG93bl92aXNpYmxlIiwicHJldmlvdXNfZmlsdGVycyIsInNob3J0VVJMIiwic2hvd0xvY2F0aW9uUG9wdXAiLCJvdmVybGF5VmlzaWJsZSIsIkhvc3BGaWx0ZXIiLCJIb3NwRmlsdGVyT25Gb3Vjc0RhdGEiLCJzZWxlY3RlZEhvc3BpdGFsSWRzIiwiaGlkZUhvc3BGaWx0ZXIiLCJTcGVjaWFsaXR5RmlsdGVyIiwiU3BlY2lhbGl0eUZpbHRlck9uRm9jdXNEYXRhIiwic2VsZWN0ZWRTcGVjaWFsaXphdGlvbklkcyIsImhpZGVTcGVjRmlsdGVyIiwiaGlkZU90aGVyRmlsdGVycyIsImZpbHRlclNlYXJjaFN0cmluZyIsImRlZmF1bHRTcGVjaWFsaXphdGlvbklkcyIsInNlYXJjaENpdGllcyIsImFsbFJlYWR5U2VsZWN0ZWRTcGVjaWFsaXphdGlvbklkIiwic3BlY19pZCIsImsiLCJ0b3BCYXJSZWYiLCJzcGVjaWFsaXphdGlvbl9maWx0ZXJfaWQiLCJzcGVjaWFsaXphdGlvbnMiLCJpZkFueUZpbHRlckFwcGxpZWQiLCJpc0RhdGFGaWx0ZXJlZCIsInJlc2V0IiwicmVzZXRGaWx0ZXJzIiwiZ2V0RG9jdG9ySG9zcGl0YWxGaWx0ZXJzIiwicmVzcCIsImdldERvY3Rvckhvc3BpdGFsU3BlY2lhbGl0eSIsImN1cnJlbnRGaWx0ZXJzIiwiZmlsdGVyRGF0YSIsImNoZWNrSWZBbnlGaWx0ZXJBcHBsaWxlZCIsImZpbHRlckNvdW50IiwiYXJyRmxpdGVyIiwiaG9zcGl0YWxfdHlwZSIsInJlZGlyZWN0X3RvIiwibG9jYXRpb25fdXJsIiwic2V0TmV4dFNlYXJjaENyaXRlcmlhIiwic3R5bGUiLCJ6SW5kZXgiLCJzaG93UG9wdXBDb250YWluZXIiLCJocmVmIiwidXJsU2hvcnRuZXIiLCJlcnIiLCJ0aW55X3VybCIsInRlc3RfaWRzIiwic2VsZiIsImV2ZW50IiwidGFyZ2V0IiwiZmlsdGVyZWRfaG9zcF9saXN0IiwiSG9zcCIsImhvc3BfbmFtZSIsImluZGV4Iiwic29ydCIsInkiLCJmaWx0ZXJlZF9zcGVjX2xpc3QiLCJTcGVjIiwic3BlY19uYW1lIiwiaG9zcF9pZCIsImxpRGF0YSIsInRvZ2dsZUhvc3BpdGFsIiwiZm9udFdlaWdodCIsInRvZ2dsZVNwZWNpYWxpemF0aW9uIiwidW5kZWZpbmVkIiwic2VhcmNoUmVzdWx0cyIsImNpdHkiLCJsb2NhdGlvbk5hbWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsb3NlRXh0cmFGaWx0ZXIiLCJ0b2dnbGVBbGxGaWx0ZXJzIiwiaGFuZGxlQ2hhbmdlRm9jdXMiLCJoYW5kbGVDaGFuZ2VIb3NwIiwiSG9zcEZpbHRlckRhdGEiLCJoYW5kbGVDaGFuZ2VTcGVjIiwiU3BlY0ZpbHRlckRhdGEiLCJicmVhZGNydW1iIiwibGlua190aXRsZSIsImdldENpdHlMaXN0TGF5b3V0IiwiZ2V0Q2l0eUxpc3QiLCJob3NwaXRhbERhdGEiLCJnb1RvTG9jYXRpb24iLCJtYXJnaW5MZWZ0Iiwic2hvcnRlblVybCIsImhpZGVMb2NhdGlvblBvcHVwIiwib3ZlcmxheUNsaWNrIiwiY2hlY2tBdXRoIiwidG9nZ2xlSW5zdXJlZCIsInNob3dJcGRMZWFkRm9ybSIsImV2TmFtZSIsImNoZWNrZWQiLCJzZWxlY3RlZFByb2NlZHVyZUNhdGVnb3J5IiwiY2xvc2UiLCJwb3B1cENvbnRhaW5lciIsInN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbiIsIlNlYXJjaFJlc3VsdHMiLCJzaG93NDA0IiwidG9nZ2xlNDA0Iiwic3RvcmUiLCJxdWVyeVBhcmFtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9jYXRpb25fbXMiLCJkaXNwYXRjaCIsIm5vUmVzdWx0cyIsInN0YXR1cyIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInBhc3NlZFByb3BzIiwic3RhdGljQ29udGV4dCIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCIsImNvbW1vbl9zZXR0aW5ncyIsImNvbXBhcmVfcGFja2FnZXMiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIkRPQ1RPUl9TRUFSQ0giLCJTRVRfRlJPTV9TRVJWRVIiLCJyYXRpbmdzIiwicmV2aWV3cyIsInJhdGluZ3NfdGl0bGUiLCJib3R0b21fY29udGVudCIsIlVTRVIiLCJkZXZpY2VfaW5mbyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImxvYWRPUERDb21tb25Dcml0ZXJpYSIsImNyaXRlcmlhIiwiZm9yY2VBZGQiLCJmcm9tX3NlcnZlciIsInNlYXJjaEJ5VXJsIiwiZ2V0RG9jdG9yTnVtYmVyIiwiZG9jdG9ySWQiLCJjYWxsYmFjayIsInNhdmVDb21tb25Qcm9jZWR1cmVzIiwicmVzZXRQcm9jZWR1cmVVUmwiLCJtZXJnZVNlbGVjdGVkQ3JpdGVyaWFzIiwic2VhcmNoSWQiLCJzZXREZWZhdWx0Iiwic2VsZWN0U2VhcmNoVHlwZSIsInJlc2NoZWR1bGUiLCJhcHBvaW50bWVudElkIiwiY2xpbmljX2lkIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJyZXNldFBrZ0NvbXBhcmUiLCJsb2FkT1BESW5zdXJhbmNlIiwiZ2V0U3BvbnNvcmVkTGlzdCIsInRvZ2dsZUlQRENyaXRlcmlhIiwiZGF0YVBhcmFtcyIsImNsZWFyVmlwU2VsZWN0ZWRQbGFuIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZUEsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7Ozs7Ozs7OztJQUVNQyxROzs7QUFDRixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNUQSxLQURTO0FBRWxCOzs7O2lDQUVRO0FBQUE7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsbUJBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQVEsV0FBVSxnQkFBbEIsRUFBbUMsT0FBTyxFQUFFQyxTQUFTLE9BQVgsRUFBMUM7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxnQkFBZjtBQUNJLCtEQUFLLEtBQUtDLFNBQWVBLEdBQUcsZ0NBQTVCO0FBREoscUJBREo7QUFJSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxrQ0FBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBRyxNQUFLLGNBQVIsRUFBdUIsU0FBUyxtQkFBTTtBQUNsQyxtREFBS0YsS0FBTCxDQUFXRyxPQUFYLENBQW1CQyxJQUFuQixDQUF3QixHQUF4QjtBQUNILHlDQUZE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aUI1ZCxJQUFqQixFQUF1QmlILGdCQUF2QixFQUF5Q29GLEVBQXpDLENBQVQsQ0FBL0I7QUFBQSxTQTFCZjtBQTJCSC9FLDRCQUFvQiw0QkFBQzRDLE1BQUQsRUFBU21DLEVBQVQ7QUFBQSxtQkFBZ0J1UixTQUFTLCtCQUFtQjFULE1BQW5CLEVBQTJCbUMsRUFBM0IsQ0FBVCxDQUFoQjtBQUFBLFNBM0JqQjtBQTRCSGtVLDJCQUFtQiwyQkFBQ3BCLFFBQUQsRUFBV0MsUUFBWDtBQUFBLG1CQUF3QnhCLFNBQVMsOEJBQWtCdUIsUUFBbEIsRUFBNEJDLFFBQTVCLENBQVQsQ0FBeEI7QUFBQSxTQTVCaEI7QUE2Qkg3WCx5QkFBaUIseUJBQUNpWixVQUFELEVBQWFuVSxFQUFiO0FBQUEsbUJBQW9CdVIsU0FBUyw0QkFBZ0I0QyxVQUFoQixFQUE0Qm5VLEVBQTVCLENBQVQsQ0FBcEI7QUFBQSxTQTdCZDtBQThCSDBCLDBCQUFrQiwwQkFBQ2hHLGNBQUQ7QUFBQSxtQkFBbUI2VixTQUFTLDZCQUFpQjdWLGNBQWpCLENBQVQsQ0FBbkI7QUFBQSxTQTlCZjtBQStCSDBZLDhCQUFxQjtBQUFBLG1CQUFLN0MsU0FBUyxrQ0FBVCxDQUFMO0FBQUEsU0EvQmxCO0FBZ0NIMU8sMkJBQWtCLDJCQUFDbFAsSUFBRCxFQUFNcU0sRUFBTjtBQUFBLG1CQUFZdVIsU0FBUyw4QkFBa0I1ZCxJQUFsQixFQUF3QnFNLEVBQXhCLENBQVQsQ0FBWjtBQUFBLFNBaENmO0FBaUNIMEMsMkJBQWtCLDJCQUFDMlIsTUFBRDtBQUFBLG1CQUFXOUMsU0FBUyw4QkFBa0I4QyxNQUFsQixDQUFULENBQVg7QUFBQTtBQWpDZixLQUFQO0FBbUNILENBcENEOztrQkFzQ2UseUJBQVF6QyxlQUFSLEVBQXlCZ0Isa0JBQXpCLEVBQTZDOUIsYUFBN0MsQyIsImZpbGUiOiI1Ny5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm90Rm91bmRWaWV3IGZyb20gJy4vbm90Rm91bmQnXG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInByb2ZpbGUtaGVhZGVyXCIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWlsZXktaW1nLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zbWlsZXkucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaGVhZGVyLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyIGxvZ28taWNvbi1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9kb2MtcHJpbWUtbG9nby5wbmdcIn0gY2xhc3NOYW1lPVwibG9nby1pY29uXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtMTAgb2Zmc2V0LW1kLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLXdpZGdldCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci1oZWFkIGZ3LTUwMFwiPjQwNDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9lcnJvci5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dCBmdy01MDBcIj5QYWdlIG5vdCBmb3VuZCAhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci1saW5rXCI+R28gdG8gPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+ZG9jcHJpbWUgaG9tZXBhZ2U8L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSc7XG5pbXBvcnQgUHJvY2VkdXJlUG9wdXAgZnJvbSAnLi4vUG9wVXAnXG5cbmNsYXNzIENsaW5pY1Jlc3VsdENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlblNlbGVjdERvY3RvcjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVNlbGVjdERvY3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5TZWxlY3REb2N0b3I6ICF0aGlzLnN0YXRlLm9wZW5TZWxlY3REb2N0b3IgfSlcbiAgICB9XG5cbiAgICBjYXJkQ2xpY2soaWQsIHVybCwgaG9zcGl0YWxfaWQsIGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3Itc2VsZWN0ZWQnLCAnc2VsZWN0ZWRJZCc6IGlkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JSYW5rSW5TZWFyY2gnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3ItcmFuay1pbi1zZWFyY2gnLCAnUmFuayc6IHRoaXMucHJvcHMucmFuayArIDFcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5X2lkcyA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdwcm9jZWR1cmVzX2NhdGVnb3J5JykubWFwKHggPT4geC5pZClcbiAgICAgICAgICAgIGxldCBwcm9jZWR1cmVfaWRzID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Byb2NlZHVyZXMnKS5tYXAoeCA9PiB4LmlkKVxuXG5cbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt1cmx9YClcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlfaWRzLmxlbmd0aCB8fCBwcm9jZWR1cmVfaWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfT9ob3NwaXRhbF9pZD0ke2hvc3BpdGFsX2lkfSZpc19wcm9jZWR1cmU9dHJ1ZSZjYXRlZ29yeV9pZHM9JHtjYXRlZ29yeV9pZHN9JnByb2NlZHVyZV9pZHM9JHtwcm9jZWR1cmVfaWRzfWApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3VybH0/aG9zcGl0YWxfaWQ9JHtob3NwaXRhbF9pZH1gKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtpZH1gKVxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeV9pZHMubGVuZ3RoIHx8IHByb2NlZHVyZV9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke2lkfT9ob3NwaXRhbF9pZD0ke2hvc3BpdGFsX2lkfSZpc19wcm9jZWR1cmU9dHJ1ZSZjYXRlZ29yeV9pZHM9JHtjYXRlZ29yeV9pZHN9JnByb2NlZHVyZV9pZHM9JHtwcm9jZWR1cmVfaWRzfWApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7aWR9P2hvc3BpdGFsX2lkPSR7aG9zcGl0YWxfaWR9YClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRRdWFsaWZpY2F0aW9uU3RyKHF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbikge1xuICAgICAgICByZXR1cm4gcXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uLnJlZHVjZSgoc3RyLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgICAgICBzdHIgKz0gYCR7Y3Vyci5uYW1lfWBcbiAgICAgICAgICAgIGlmIChpIDwgcXVhbGlmaWNhdGlvblNwZWNpYWxpemF0aW9uLmxlbmd0aCAtIDEpIHN0ciArPSBgLCBgO1xuICAgICAgICAgICAgcmV0dXJuIHN0clxuICAgICAgICB9LCBcIlwiKVxuICAgIH1cblxuICAgIGJvb2tOb3dDbGlja2VkKGlkLCB1cmwsIGhvc3BpdGFsX2lkLCBlKSB7XG4gICAgICAgIC8vYWx3YXlzIGNsZWFyIHNlbGVjdGVkIHRpbWUgYXQgZG9jdG9yIHByb2ZpbGVcbiAgICAgICAgbGV0IHNsb3QgPSB7IHRpbWU6IHt9IH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RPcGRUaW1lU0xvdChzbG90LCBmYWxzZSlcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BkU2VhcmNoQm9va05vd0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtYm9vay1ub3ctY2xpY2tlZCcsICdzZWxlY3RlZElkJzogaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIGxldCB7IHByb2NlZHVyZV9pZHMgfSA9IHRoaXMudHJhY2tpbmdFdmVudHNCb29rTm93KGlkKVxuICAgICAgICB0aGlzLnByb3BzLnNhdmVQcm9maWxlUHJvY2VkdXJlcygnJywgJycsIHByb2NlZHVyZV9pZHMsIHRydWUpXG4gICAgICAgIGlmKHVybCl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfS9ib29raW5nP2RvY3Rvcl9pZD0ke2lkfSZob3NwaXRhbF9pZD0ke2hvc3BpdGFsX2lkfWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtpZH0vJHtob3NwaXRhbF9pZH0vYm9va2RldGFpbHNgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhY2tpbmdFdmVudHNCb29rTm93KGlkKSB7XG4gICAgICAgIGxldCBEaXN0YW5jZSA9ICcnXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGV0YWlscyAmJiB0aGlzLnByb3BzLmRldGFpbHMuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIERpc3RhbmNlID0gKE1hdGgucm91bmQodGhpcy5wcm9wcy5kZXRhaWxzLmRpc3RhbmNlICogMTApIC8gMTApLnRvRml4ZWQoMSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3Itc2VsZWN0ZWQnLCAnc2VsZWN0ZWRJZCc6IGlkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSk7XG5cbiAgICAgICAgbGV0IGNhdGVnb3J5X2lkcyA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdwcm9jZWR1cmVzX2NhdGVnb3J5JykubWFwKHggPT4geC5pZCkuam9pbignLCcpXG4gICAgICAgIGxldCBwcm9jZWR1cmVfaWRzID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Byb2NlZHVyZXMnKS5tYXAoeCA9PiB4LmlkKS5qb2luKCcsJylcbiAgICAgICAgbGV0IGNvbmRpdGlvbl9pZHMgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnY29uZGl0aW9uJykubWFwKHggPT4geC5pZCkuam9pbignLCcpXG4gICAgICAgIGxldCBzcGVjaWFsaXphdGlvbl9pZHMgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BlY2lhbGl0eScpLm1hcCh4ID0+IHguaWQpLmpvaW4oJywnKVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JSYW5rSW5TZWFyY2gnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3ItcmFuay1pbi1zZWFyY2gnLCAnUmFuayc6IHRoaXMucHJvcHMucmFuayArIDEsICdEb2N0b3JTZWFyY2hDb3VudCc6IHRoaXMucHJvcHMuY291bnQsICdzcGVjaWFsaXphdGlvbnMnOiBzcGVjaWFsaXphdGlvbl9pZHMsICdjb25kaXRpb25zJzogY29uZGl0aW9uX2lkcywgJ3Byb2NlZHVyZXMnOiBwcm9jZWR1cmVfaWRzLCAncHJvY2VkdXJlX2NhdGVnb3J5JzogY2F0ZWdvcnlfaWRzLCAnRGlzdGFuY2UnOiBEaXN0YW5jZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgcmV0dXJuICh7IGNhdGVnb3J5X2lkcywgcHJvY2VkdXJlX2lkcyB9KVxuXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IGhvc3BpdGFsX2lkLCBhZGRyZXNzLCBob3NwaXRhbF9uYW1lLCBkb2N0b3JzLCBwcm9jZWR1cmVfY2F0ZWdvcmllcywgc2hvcnRfYWRkcmVzcyB9ID0gdGhpcy5wcm9wcy5kZXRhaWxzXG4gICAgICAgIGxldCBzcGVjaWFsaXphdGlvbiA9IFwiXCJcbiAgICAgICAgbGV0IHsgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgaWYgKGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3BlY2lhbGl6YXRpb24gPSBjb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5uYW1lXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRvY3RvciA9IChkb2N0b3JzICYmIGRvY3RvcnMubGVuZ3RoKSA/IGRvY3RvcnNbMF0gOiB7fVxuXG4gICAgICAgIGlmIChkb2N0b3JzICYmIGRvY3RvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgeyBkaXNjb3VudGVkX3ByaWNlLCBkaXN0YW5jZSwgaXNfbGljZW5zZV92ZXJpZmllZCwgZGVhbF9wcmljZSwgbXJwLCBnZW5lcmFsX3NwZWNpYWxpemF0aW9uLCBlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyB9ID0gZG9jdG9yXG5cbiAgICAgICAgICAgIGRpc3RhbmNlID0gKE1hdGgucm91bmQoZGlzdGFuY2UgKiAxMCkgLyAxMCkudG9GaXhlZCgxKVxuICAgICAgICAgICAgbGV0IGRpc2NvdW50ID0gMFxuICAgICAgICAgICAgaWYgKG1ycCAhPSAwICYmIGRpc2NvdW50ZWRfcHJpY2UgIT0gMCkge1xuICAgICAgICAgICAgICAgIGRpc2NvdW50ID0gMTAwIC0gTWF0aC5yb3VuZCgoZGlzY291bnRlZF9wcmljZSAqIDEwMCkgLyBtcnApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpc19wcm9jZWR1cmUgPSBmYWxzZVxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ291bnQgPSAwXG4gICAgICAgICAgICBsZXQgdW5zZWxlY3RlZENvdW50ID0gMFxuICAgICAgICAgICAgbGV0IGZpbmFsUHJvY2VkdXJlRGVhbFByaWNlID0gZGlzY291bnRlZF9wcmljZVxuICAgICAgICAgICAgbGV0IGZpbmFsUHJvY2VkdXJlTXJwID0gbXJwXG4gICAgICAgICAgICBwcm9jZWR1cmVfY2F0ZWdvcmllcy5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgICAgICBpc19wcm9jZWR1cmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgeC5wcm9jZWR1cmVzLmZpbHRlcih4ID0+IHguaXNfc2VsZWN0ZWQpLm1hcCgoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbFByb2NlZHVyZURlYWxQcmljZSArPSB4LmRlYWxfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgZmluYWxQcm9jZWR1cmVNcnAgKz0geC5tcnBcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb3VudCsrXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHVuc2VsZWN0ZWRDb3VudCArPSB4LnByb2NlZHVyZXMuZmlsdGVyKHggPT4gIXguaXNfc2VsZWN0ZWQpLmxlbmd0aFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKGlzX3Byb2NlZHVyZSAmJiBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChmaW5hbFByb2NlZHVyZU1ycCAhPSAwICYmIGZpbmFsUHJvY2VkdXJlRGVhbFByaWNlICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnQgPSAxMDAgLSBNYXRoLnJvdW5kKChmaW5hbFByb2NlZHVyZURlYWxQcmljZSAqIDEwMCkgLyBmaW5hbFByb2NlZHVyZU1ycCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpc19wcm9jZWR1cmUgPSBmYWxzZVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY2FyZC1kbCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmx0ci1jcmQtdG9wLWNvbnRhaW5lclwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2xpY2Vuc2VfdmVyaWZpZWQgPyA8c3BhbiBjbGFzc05hbWU9XCJjbGluaWMtZmx0ci1ydG5nXCI+VmVyaWZpZWQ8L3NwYW4+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHRyLWxjdG4tZHRsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsdHItbG9jLWljb1wiIHdpZHRoPVwiMTJweFwiIGhlaWdodD1cIjE4cHhcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Rpc3RhbmNlfSBLbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N0b3JzICYmIGRvY3RvcnMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb2tOb3dDbGlja2VkKGRvY3Rvci5pZCwgZG9jdG9yLnVybCwgaG9zcGl0YWxfaWQgfHwgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRDbGljayhkb2N0b3IuaWQsIGRvY3Rvci51cmwsIGhvc3BpdGFsX2lkLCBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3REb2N0b3IoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpbmljLWZsdHItbmFtZS1kdGxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZnctNTAwIGNsaW5pYy1mbHRyLWRjLW5hbWUgdGV4dC1tZCBtcmItMTBcIj57aG9zcGl0YWxfbmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xpbmljLWZsdHItbG9jLXR4dCBtcmItMTBcIj57YWRkcmVzc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtcmItMTBcIj57c3BlY2lhbGl6YXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IGNvbG9yOiAnIzAwODAwMCcsIGZvbnRXZWlnaHQ6ICc1MDAnIH19Pk9wZW4gdG9kYXk8L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyAmJiBkaXNjb3VudCA/IDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXhzXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBwYWRkaW5nUmlnaHQ6ICcycHgnIH19PipFeGNsdXNpdmUgZGlzY291bnQgb24gY2xpbmljIHJhdGVzLiBBdmFpbGFibGUgb25seSBvbiBwcmVwYWlkIGJvb2tpbmdzPC9wPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdHItYmtuZy1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgJiYgZGlzY291bnQgPyA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ci1vZmZlciBvZnItcmliYm9uIGZ3LTcwMFwiPntkaXNjb3VudH0lIE9GRjwvc3Bhbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbHRyLXByaWNlc1wiPuKCuSB7ZmluYWxQcm9jZWR1cmVEZWFsUHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsUHJvY2VkdXJlTXJwID09IGZpbmFsUHJvY2VkdXJlRGVhbFByaWNlID8gXCJcIiA6IDxzcGFuIGNsYXNzTmFtZT1cImZsdHItY3V0LXByaWNlXCI+4oK5IHtmaW5hbFByb2NlZHVyZU1ycH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxwIGNsYXNzTmFtZT1cImZsdHItcHJpY2VzXCI+4oK5IHtmaW5hbFByb2NlZHVyZU1ycH08L3A+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1vZmYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyAmJiBkaXNjb3VudGVkX3ByaWNlICE9IGRlYWxfcHJpY2UgPyA8c3BhbiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWRvYy1ncmVlblwiIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fSA+SW5jbHVkZXMgY291cG9uIGRpc2NvdW50PC9zcGFuPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZGlzY291bnRlZF9wcmljZSAmJiAhaXNfcHJvY2VkdXJlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRyLW9mZmVyIG9mci1yaWJib24gZnJlZS1vZnItcmliYm9uIGZ3LTcwMFwiPkZyZWU8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JzICYmIGRvY3RvcnMubGVuZ3RoID09IDEgPyAoZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgPyA8YnV0dG9uIGNsYXNzTmFtZT1cImZsdHItYmtuZy1idG5cIj5Cb29rIE5vdzwvYnV0dG9uPiA6IDxidXR0b24gY2xhc3NOYW1lPVwiZmx0ci1jbnRjdC1idG5cIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PkNvbnRhY3Q8L2J1dHRvbj4pIDogPGJ1dHRvbiBjbGFzc05hbWU9XCJmbHRyLWJrbmctYnRuXCI+U2VsZWN0IERvY3RvcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvcnMgJiYgZG9jdG9ycy5sZW5ndGggPj0gMiAmJiB0aGlzLnN0YXRlLm9wZW5TZWxlY3REb2N0b3IgPyA8ZGl2IGNsYXNzTmFtZT1cInNob3dCb29rVGVzdExpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvcnMubWFwKChkLCB4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaG93Qm9va1Rlc3RMaXN0SW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEci4ge2QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLXByaWNlLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNfcHJvY2VkdXJlID8gPHAgY2xhc3NOYW1lPVwiZG9jLXByaWNlLWN1dHRcIj7igrkge2QuZGlzY291bnRlZF9wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5tcnAgPT0gZC5kaXNjb3VudGVkX3ByaWNlID8gXCJcIiA6IDxzcGFuPuKCuSB7ZC5tcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID8gPGJ1dHRvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLmJvb2tOb3dDbGlja2VkLmJpbmQodGhpcywgZC5pZCwgZC51cmwsIGhvc3BpdGFsX2lkIHx8ICcnKX0gY2xhc3NOYW1lPVwic2hvd0Jvb2tUZXN0TGlzdEJ0blwiPkJvb2sgTm93PC9idXR0b24+IDogPGJ1dHRvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLmNhcmRDbGljay5iaW5kKHRoaXMsIGQuaWQsIGQudXJsLCBob3NwaXRhbF9pZCl9IGNsYXNzTmFtZT1cInNob3dCb29rVGVzdExpc3RCdG4gY29udGFjdC1zbWFsbC1idG5cIj5Db250YWN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3RvcnMgJiYgZG9jdG9ycy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5vcGVuU2VsZWN0RG9jdG9yID8gPGRpdiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNlbGVjdERvY3Rvci5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJmaWx0ci1jYXJkLWZvb3RlclwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBib3JkZXJUb3A6ICcxcHggc29saWQgI2U4ZThlOCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6ICc4cHgnIH19PjxwPkhpZGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGFjcmQtc2hvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IG1hcmdpbjogJzVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDbGluaWNSZXN1bHRDYXJkXG4iLCJpbXBvcnQgQ2xpbmljUmVzdWx0Q2FyZCBmcm9tICcuL0NsaW5pY1Jlc3VsdENhcmQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IENsaW5pY1Jlc3VsdENhcmQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgRG9jdG9yc0xpc3QgZnJvbSAnLi4vc2VhcmNoUmVzdWx0cy9kb2N0b3JzTGlzdC9pbmRleC5qcydcbmltcG9ydCBDcml0ZXJpYVNlYXJjaCBmcm9tICcuLi8uLi9jb21tb25zL2NyaXRlcmlhU2VhcmNoJ1xuaW1wb3J0IFRvcEJhciBmcm9tICcuL25ld1RvcEJhcidcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBOQVZJR0FURSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL25hdmlnYXRlJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IFJlc3VsdENvdW50IGZyb20gJy4vdG9wQmFyL3Jlc3VsdF9jb3VudC5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgU0NST0xMIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc2Nyb2xsSGVscGVyLmpzJ1xuaW1wb3J0IENhcm91c2VsVmlldyBmcm9tICcuL2Nhcm91c2VsVmlldy5qcydcbmltcG9ydCBOb25JcGRQb3B1cFZpZXcgZnJvbSAnLi4vLi4vY29tbW9ucy9ub25JcGRQb3B1cC5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuY2xhc3MgU2VhcmNoUmVzdWx0c1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBsZXQgc2VvRGF0YSA9IG51bGxcbiAgICAgICAgbGV0IGZvb3RlckRhdGEgPSBudWxsXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YSkge1xuICAgICAgICAgICAgc2VvRGF0YSA9IHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuc2VvRGF0YVxuICAgICAgICAgICAgZm9vdGVyRGF0YSA9IHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEuZm9vdGVyRGF0YVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAvL3Nlb0RhdGEsIFxuICAgICAgICAgICAgZm9vdGVyRGF0YSxcbiAgICAgICAgICAgIHNlb0ZyaWVuZGx5OiB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLXNwdGNpdCcpIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctc3B0bGl0Y2l0JykgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1pcGRkcCcpLFxuICAgICAgICAgICAgY2xpbmljX2NhcmQ6IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdjbGluaWNfY2FyZCcpIHx8IG51bGwsXG4gICAgICAgICAgICBzaG93RXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgc2VhcmNoX2lkOiAnJyxcbiAgICAgICAgICAgIHNldFNlYXJjaElkOiBmYWxzZSxcbiAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uOiAwLFxuICAgICAgICAgICAgcXVpY2tGaWx0ZXI6IHt9LFxuICAgICAgICAgICAgZGV0ZWN0TG9jYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgc3BvbnNvckRhdGE6IFtdLFxuICAgICAgICAgICAgZnJvbVZpcDogcGFyc2VkICYmIChwYXJzZWQuZnJvbVZpcCB8fCBwYXJzZWQuZnJvbUdvbGRWaXApLFxuICAgICAgICAgICAgc2VhcmNoX3N0cmluZzonJyxcbiAgICAgICAgICAgIHNob3dTZWFyY2hCdG46ZmFsc2UsXG4gICAgICAgICAgICBzY3JvbGxFdmVudEFkZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dOb25JcGRQb3B1cDogcGFyc2VkLnNob3dfcG9wdXAsXG4gICAgICAgICAgICB0b19iZV9mb3JjZToxLFxuICAgICAgICAgICAgaXNfbGVhZF9lbmFibGVkOnRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbEhhbmRsZXI9ICgpPT57XG4gICAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgICAgdmFyIHNjcmVlblNpemUgPSB3aW5kb3cuc2NyZWVuICYmIHdpbmRvdy5zY3JlZW4ud2lkdGggfHwgbnVsbFxuICAgICAgICBsZXQgaGVpZ2h0ID0gMzc1XG4gICAgICAgIGlmKHNjcmVlblNpemUgJiYgc2NyZWVuU2l6ZTw5OTIpIHtcbiAgICAgICAgICAgIGhlaWdodD0gaGVpZ2h0LTEyMFxuICAgICAgICB9XG4gICAgICAgIGlmKHNjcm9sbFBvc2l0aW9uPmhlaWdodCl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93U2VhcmNoQnRuOiB0cnVlfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93U2VhcmNoQnRuOiBmYWxzZX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLypsZXQgYWEgPSB7Li4uU0NST0xMfVxuICAgICAgICAvL2FhLmluaXQoKVxuICAgICAgICBhYS5hZGRFdmVudHMoJ21hcCcpKi9cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIC8vQVBJIFRPIEdFVCBTUE9OU09STElTVCBcbiAgICAgICAgbGV0IHNlYXJjaFVybCA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctc3B0Y2l0JykgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1zcHRsaXRjaXQnKSB8fCB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWlwZGRwJykpIHtcbiAgICAgICAgICAgIHNlYXJjaFVybCA9IHRoaXMucHJvcHMubWF0Y2gudXJsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vU1RBUlQgU2F2ZSBTZWxlY3RlZCBDaXR5IG9uIExvY2F0aW9uIENoYW5nZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgJiYgIXRoaXMucHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MpIHtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaF9zdHJpbmc6IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB9KVxuXG4gICAgICAgIH1cbiAgICAgICAgLy9TVEFSVCBTYXZlIFNlbGVjdGVkIENpdHkgb24gTG9jYXRpb24gQ2hhbmdlXG4gICAgICAgIC8vQWRkIFNjcm9sbCBFdmVudHMgZm9yIFN0aWNreSBTZWFyY2ggRmlsdGVyIGZvciBWaXAgTmV0d29yayBzZWFyY2hcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5mcm9tVmlwICYmICF0aGlzLnN0YXRlLnNjcm9sbEV2ZW50QWRkZWQgJiYgdGhpcy5yZWZzWyd2aXBfc3JjaF93aWRnZXQnXSAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2Nyb2xsRXZlbnRBZGRlZDogdHJ1ZX0pXG4gICAgICAgIH1cblxuICAgICAgICAvL0VuZCBBZGQgU2Nyb2xsIEV2ZW50cyBmb3IgU3RpY2t5IFNlYXJjaCBGaWx0ZXIgZm9yIFZpcCBOZXR3b3JrIHNlYXJjaFxuXG5cblxuXG5cbiAgICAgICAgLypsZXQgc3BvbnNvckRhdGEgPSB7XG4gICAgICAgICAgICB1dG1fdGVybTogcGFyc2VkICYmIHBhcnNlZC51dG1fdGVybT9wYXJzZWQudXRtX3Rlcm06JycsXG4gICAgICAgICAgICBzZWFyY2hVcmw6c2VhcmNoVXJsLFxuICAgICAgICAgICAgc3BlY2lhbGl6YXRpb25zX2lkczonJ1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNwb25zb3JEYXRhLnNwZWNpYWxpemF0aW9uc19pZHMgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BlY2lhbGl0eScpLm1hcCh4ID0+IHguaWQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRTcG9uc29yZWRMaXN0KHNwb25zb3JEYXRhLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24sIChyZXNwb25zZSk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nwb25zb3JEYXRhOiByZXNwb25zZX0pXG4gICAgICAgIH0pKi9cblxuICAgICAgICAvL0lGIEZyb20gVklQIGdldCBuZWFyYnlEb2N0b3JzXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZyb21WaXApIHtcbiAgICAgICAgICAgIGxldCBleHRyYURhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbjogdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICAgICAgICAgIHR5cGU6cGFyc2VkLmZyb21WaXA/J2lzX3ZpcCc6cGFyc2VkLmZyb21Hb2xkVmlwPydpc19nb2xkJzpudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldE5lYXJieUhvc3BpdGFscyhleHRyYURhdGEpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldFRvcEhvc3BpdGFscyhleHRyYURhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tZXJnZVVybFN0YXRlKSB7XG4gICAgICAgICAgICBsZXQgZ2V0U2VhcmNoSWQgPSB0cnVlXG4gICAgICAgICAgICAvL2lmIHNlYXJjaCBpZCBleGlzdCBpbiB1cmwgdGhlbiB3ZSBnZXQgZGF0YSBmb3IgdGhhdCBzZWFyY2ggaWQgZnJvbSBzdG9yZVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdzZWFyY2hfaWQnKSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGEgJiYgdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXSAmJiB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICBnZXRTZWFyY2hJZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmRhdGEucmVzdWx0ICYmIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0uZGF0YS5yZXN1bHQubGVuZ3RoICYmICF0aGlzLnByb3BzLmZldGNoTmV3UmVzdWx0cykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2lkOiBwYXJzZWQuc2VhcmNoX2lkIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldFNlYXJjaElkUmVzdWx0cyhwYXJzZWQuc2VhcmNoX2lkLCB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVycyA9IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzID0gdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXS5jb21tb25TZWxlY3RlZENyaXRlcmlhc1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJDcml0ZXJpYSA9IHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0uZmlsdGVyQ3JpdGVyaWFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfaWQ6IHBhcnNlZC5zZWFyY2hfaWQgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYWdlID0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5mZXRjaE5ld1Jlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSA9IHBhcnNlZC5wYWdlIHx8IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRTZWFyY2hJZChwYXJzZWQuc2VhcmNoX2lkLCBmaWx0ZXJzLCBwYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZ2V0U2VhcmNoSWQpIHtcbiAgICAgICAgICAgICAgICAvL0lmIG5vIHNlYXJjaElkIGluIHVybCB0aGVuIHdlIGNyZWF0ZSBzZWFyY2ggaWQgYW5kIHN0b3JlIGRhdGEgY29ycmVzcG9uZGluZyB0byB0aGF0IHNlYXJjaCBpZFxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJzID0ge31cbiAgICAgICAgICAgICAgICBmaWx0ZXJzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzID0gdGhpcy5wcm9wcy5uZXh0U2VsZWN0ZWRDcml0ZXJpYXNcbiAgICAgICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhID0gdGhpcy5wcm9wcy5uZXh0RmlsdGVyQ3JpdGVyaWFcbiAgICAgICAgICAgICAgICBsZXQgc2VhcmNoX2lkID0gdGhpcy5nZW5lcmF0ZVNlYXJjaElkKClcbiAgICAgICAgICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2lkOiBzZWFyY2hfaWQgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGZvciBpbnN1cmVkIHVzZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNfbG9naW5fdXNlcl9pbnN1cmVkICYmIHRoaXMucHJvcHMuaW5zdXJhbmNlX3N0YXR1cyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhID0geyAuLi5maWx0ZXJzLmZpbHRlckNyaXRlcmlhIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMuZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVUkkodGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UobmV3X3VybClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRTZWFyY2hJZChzZWFyY2hfaWQsIGZpbHRlcnMsIHBhcnNlZC5wYWdlIHx8IDEpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmZldGNoTmV3UmVzdWx0cykge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5nZXREb2N0b3JMaXN0KHRoaXMucHJvcHMpXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgLy90aGlzLnByb3BzLm1lcmdlU2VsZWN0ZWRDcml0ZXJpYXMoKVxuICAgICAgICAgICAgbGV0IHBhZ2UgPSAxXG4gICAgICAgICAgICBpZiAocGFyc2VkICYmIHBhcnNlZC5wYWdlKSB7XG4gICAgICAgICAgICAgICAgcGFnZSA9IHBhcnNlZC5wYWdlIHx8IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0Rm9vdGVyRGF0YSh0aGlzLnByb3BzLm1hdGNoLnVybC5zcGxpdCgnLycpWzFdLCBwYWdlKS50aGVuKChmb290ZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZvb3RlckRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvb3RlckRhdGE6IGZvb3RlckRhdGEgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmICh3aW5kb3cpIHtcbiAgICAgICAgLy8gICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICAvL1NUQVJUIFNhdmUgU2VsZWN0ZWQgQ2l0eSBvbiBMb2NhdGlvbiBDaGFuZ2VcbiAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBpZiAoICh0aGlzLnN0YXRlLnNlYXJjaF9zdHJpbmcgfHwgdGhpcy5zdGF0ZS5mcm9tVmlwKSAmJiBwcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiApIHtcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmFEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uOiBwcm9wcy5zZWxlY3RlZExvY2F0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0TmVhcmJ5SG9zcGl0YWxzKGV4dHJhRGF0YSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX3N0cmluZzogcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmICghcHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uX29iamVjdDogcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoOiBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9FTkQgU2F2ZSBTZWxlY3RlZCBDaXR5IG9uIExvY2F0aW9uIENoYW5nZVxuICAgICAgICAgICAgICAgIC8vQWRkIFNjcm9sbCBFdmVudHMgZm9yIFN0aWNreSBTZWFyY2ggRmlsdGVyIGZvciBWaXAgTmV0d29yayBzZWFyY2hcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5mcm9tVmlwICYmICF0aGlzLnN0YXRlLnNjcm9sbEV2ZW50QWRkZWQgJiYgdGhpcy5yZWZzWyd2aXBfc3JjaF93aWRnZXQnXSAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2Nyb2xsRXZlbnRBZGRlZDogdHJ1ZX0pXG4gICAgICAgIH1cblxuICAgICAgICAvL0VuZCBBZGQgU2Nyb2xsIEV2ZW50cyBmb3IgU3RpY2t5IFNlYXJjaCBGaWx0ZXIgZm9yIFZpcCBOZXR3b3JrIHNlYXJjaFxuICAgICAgICBsZXQgc2VhcmNoX2lkID0gJydcbiAgICAgICAgbGV0IHBhZ2UgPSAxXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKHByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnc2VhcmNoX2lkJykpIHtcbiAgICAgICAgICAgIHNlYXJjaF9pZCA9IHBhcnNlZC5zZWFyY2hfaWRcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNlYXJjaF9pZCkge1xuICAgICAgICAgICAgc2VhcmNoX2lkID0gdGhpcy5zdGF0ZS5zZWFyY2hfaWRcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VkLnBhZ2UpIHtcbiAgICAgICAgICAgIHBhZ2UgPSBwYXJzZWQucGFnZSB8fCAxXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMubWVyZ2VVcmxTdGF0ZSAmJiBwcm9wcy5tZXJnZVVybFN0YXRlICE9IHRoaXMucHJvcHMubWVyZ2VVcmxTdGF0ZSkge1xuICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSB7fVxuICAgICAgICAgICAgZmlsdGVycy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyA9IHByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhID0gcHJvcHMuZmlsdGVyQ3JpdGVyaWFcbiAgICAgICAgICAgIGlmIChzZWFyY2hfaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2lkOiBzZWFyY2hfaWQgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVUkkocHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKG5ld191cmwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0U2VhcmNoSWQoc2VhcmNoX2lkLCBmaWx0ZXJzLCBwYWdlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlYXJjaF9pZCA9IHRoaXMuZ2VuZXJhdGVTZWFyY2hJZCgpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaF9pZDogc2VhcmNoX2lkIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld191cmwgPSB0aGlzLmJ1aWxkVVJJKHByb3BzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShuZXdfdXJsKVxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIGlmIHVzZXIgaW5zdXJlZFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMuaXNfbG9naW5fdXNlcl9pbnN1cmVkICYmIHByb3BzLmluc3VyYW5jZV9zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJDcml0ZXJpYSA9IHsgLi4uZmlsdGVycy5maWx0ZXJDcml0ZXJpYSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldFNlYXJjaElkKHNlYXJjaF9pZCwgZmlsdGVycywgcGFnZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuZ2V0TmV3VXJsICYmIHByb3BzLmdldE5ld1VybCAhPSB0aGlzLnByb3BzLmdldE5ld1VybCAmJiB0aGlzLnN0YXRlLnNlYXJjaF9pZCkge1xuICAgICAgICAgICAgaWYgKHByb3BzLmZldGNoTmV3UmVzdWx0cyAmJiAocHJvcHMuZmV0Y2hOZXdSZXN1bHRzICE9IHRoaXMucHJvcHMuZmV0Y2hOZXdSZXN1bHRzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RG9jdG9yTGlzdChwcm9wcylcbiAgICAgICAgICAgICAgICAvLyBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYnVpbGRVUkkocHJvcHMpXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMuZmV0Y2hOZXdSZXN1bHRzICYmIChwcm9wcy5mZXRjaE5ld1Jlc3VsdHMgIT0gdGhpcy5wcm9wcy5mZXRjaE5ld1Jlc3VsdHMgJiYgdGhpcy5zdGF0ZS5zZWFyY2hfaWQpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kZXRlY3RMb2NhdGlvbiAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0pXG4gICAgICAgICAgICAgICAgbGV0IGRvY3Rvcl9uYW1lID0gJycsIGhvc3BpdGFsX25hbWUgPSAnJywgaG9zcGl0YWxfaWQgPSAnJ1xuICAgICAgICAgICAgICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMubmV4dEZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydF9vbjogXCJkaXN0YW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWUsIGhvc3BpdGFsX2lkXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5leHRGaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5uZXh0RmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0X29uOiBcImRpc3RhbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZSwgaG9zcGl0YWxfaWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWVyZ2VPUERTdGF0ZShzdGF0ZSwgdHJ1ZSlcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6ICcvb3BkL3NlYXJjaHJlc3VsdHMnIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXRTZWFyY2hJZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RG9jdG9yTGlzdChwcm9wcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIC8vICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy5mZXRjaE5ld1Jlc3VsdHMgJiYgdGhpcy5zdGF0ZS5zZWFyY2hfaWQgPT0gc2VhcmNoX2lkICYmICF0aGlzLnN0YXRlLnNldFNlYXJjaElkICYmIHRoaXMuc3RhdGUuc2VhcmNoX2lkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2V0U2VhcmNoSWQ6IHRydWUgfSlcbiAgICAgICAgICAgIHRoaXMuZ2V0RG9jdG9yTGlzdChwcm9wcylcbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vV2hlbmV2ZXIgbG9jYXRpb24gY2hhbmdlcyBtYWtlIGFwaSBjYWxsc1xuICAgICAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHByb3BzLm1lcmdlVXJsU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVUkkocHJvcHMpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UobmV3X3VybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnN0YXRlLnNjcm9sbEV2ZW50QWRkZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0TG9jYXRpb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvY2F0aW9uOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVTZWFyY2hJZCh1aWRfc3RyaW5nKSB7XG4gICAgICAgIC8vbWV0aG9kIHRvIGdlbmVyYXRlIHNlYXJjaCBpZFxuICAgICAgICB1aWRfc3RyaW5nID0gJ3h4eXl4eHh4LXh4eXgtNHh4eC15eHh4LXh4eHl5eXh4eHh4eCdcbiAgICAgICAgdmFyIGR0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciB1dWlkID0gdWlkX3N0cmluZy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkdCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgICAgICBkdCA9IE1hdGguZmxvb3IoZHQgLyAxNik7XG4gICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb25QYXJhbSh0YWcpIHtcbiAgICAgICAgLy8gdGhpcyBBUEkgYXNzdW1lcyB0aGUgY29udGV4dCBvZiByZWFjdC1yb3V0ZXItNFxuICAgICAgICBjb25zdCBwYXJhbVN0cmluZyA9IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1TdHJpbmcpXG4gICAgICAgIHJldHVybiBwYXJhbXMuZ2V0KHRhZylcbiAgICB9XG5cbiAgICBhcHBseUZpbHRlcnMoZmlsdGVyU3RhdGUpIHtcbiAgICAgICAgLy8gY2xlYXIgTEFORElOR19QQUdFIHRvIGVuYWJsZSBsb2FkZXJcbiAgICAgICAgLy9hcHBseSBmaWx0ZXJzIGFuZCBnZXQgdXBkYXRlZCBkYXRhXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB3aW5kb3cuT05fTEFORElOR19QQUdFID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2V0UXVpY2tGaWx0ZXJzKClcbiAgICAgICAgbGV0IHNlYXJjaF9pZF9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YSlcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGEgJiYgdGhpcy5zdGF0ZS5zZWFyY2hfaWQgJiYgdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVt0aGlzLnN0YXRlLnNlYXJjaF9pZF0pIHtcbiAgICAgICAgICAgIHNlYXJjaF9pZF9kYXRhW3RoaXMuc3RhdGUuc2VhcmNoX2lkXS5maWx0ZXJDcml0ZXJpYSA9IGZpbHRlclN0YXRlXG4gICAgICAgICAgICBzZWFyY2hfaWRfZGF0YVt0aGlzLnN0YXRlLnNlYXJjaF9pZF0ucGFnZSA9IDFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm1lcmdlT1BEU3RhdGUoeyBmaWx0ZXJDcml0ZXJpYTogZmlsdGVyU3RhdGUsIHNlYXJjaF9pZF9kYXRhOiBzZWFyY2hfaWRfZGF0YSwgcGFnZTogMSB9KVxuICAgICAgICAvLyB0aGlzLnByb3BzLnNldFNlYXJjaElkKHRoaXMuc3RhdGUuc2VhcmNoX2lkLCBmaWx0ZXJTdGF0ZSwgZmFsc2UpXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGRVUkkoc3RhdGUpIHtcbiAgICAgICAgLy9rZWVwIG9uIHVwZGF0aW5nIHVybCB3aXRoIHRoZSB1cGRhdGVkIGZpbHRlcnMgXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCB7IHNlbGVjdGVkTG9jYXRpb24sIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLCBmaWx0ZXJDcml0ZXJpYSwgbG9jYXRpb25UeXBlLCBwYWdlIH0gPSBzdGF0ZVxuICAgICAgICBsZXQgc3BlY2lhbGl6YXRpb25zX2lkcyA9IGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BlY2lhbGl0eScpLm1hcCh4ID0+IHguaWQpXG4gICAgICAgIGxldCBjb25kaXRpb25faWRzID0gY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdjb25kaXRpb24nKS5tYXAoeCA9PiB4LmlkKVxuICAgICAgICBsZXQgcHJvY2VkdXJlc19pZHMgPSBjb21tb25TZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Byb2NlZHVyZXMnKS5tYXAoeCA9PiB4LmlkKVxuICAgICAgICBsZXQgY2F0ZWdvcnlfaWRzID0gY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdwcm9jZWR1cmVzX2NhdGVnb3J5JykubWFwKHggPT4geC5pZClcblxuICAgICAgICBsZXQgaXBkX2lkcyA9IGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnaXBkJykubWFwKHggPT4geC5pZClcblxuICAgICAgICBsZXQgZ3JvdXBfaWRzID0gY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdncm91cF9pZHMnKS5tYXAoeCA9PiB4LmlkKVxuXG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgbGV0IHBsYWNlX2lkID0gXCJcIlxuICAgICAgICBsZXQgbG9jYWxpdHkgPSAnRGVsaGknXG4gICAgICAgIGxldCBzdWJfbG9jYWxpdHkgPSAnJ1xuXG4gICAgICAgIGlmIChzZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBwbGFjZV9pZCA9IHNlbGVjdGVkTG9jYXRpb24ucGxhY2VfaWQgfHwgXCJcIlxuICAgICAgICAgICAgbGF0ID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcblxuICAgICAgICAgICAgbGF0ID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGxhdCkudG9GaXhlZCg2KSlcbiAgICAgICAgICAgIGxvbmcgPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQobG9uZykudG9GaXhlZCg2KSlcblxuICAgICAgICAgICAgbG9jYWxpdHkgPSBzZWxlY3RlZExvY2F0aW9uLmxvY2FsaXR5IHx8ICcnXG4gICAgICAgICAgICBzdWJfbG9jYWxpdHkgPSBzZWxlY3RlZExvY2F0aW9uLnN1Yl9sb2NhbGl0eSB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAgbGV0IG1pbl9mZWVzID0gZmlsdGVyQ3JpdGVyaWEucHJpY2VSYW5nZVswXVxuICAgICAgICAgICAgICAgIGxldCBtYXhfZmVlcyA9IGZpbHRlckNyaXRlcmlhLnByaWNlUmFuZ2VbMV1cbiAgICAgICAgICAgICAgICBsZXQgbWluX2Rpc3RhbmNlID0gZmlsdGVyQ3JpdGVyaWEuZGlzdGFuY2VSYW5nZVswXVxuICAgICAgICAgICAgICAgIGxldCBtYXhfZGlzdGFuY2UgPSBmaWx0ZXJDcml0ZXJpYS5kaXN0YW5jZVJhbmdlWzFdXG4gICAgICAgICAgICAgICAgbGV0IHNvcnRfb24gPSBmaWx0ZXJDcml0ZXJpYS5zb3J0X29uIHx8IFwiXCJcbiAgICAgICAgICAgICAgICBsZXQgaXNfYXZhaWxhYmxlID0gZmlsdGVyQ3JpdGVyaWEuaXNfYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgbGV0IGlzX2ZlbWFsZSA9IGZpbHRlckNyaXRlcmlhLmlzX2ZlbWFsZVxuICAgICAgICBcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHNvcnRfb24gPSBmaWx0ZXJDcml0ZXJpYS5zb3J0X29uIHx8IFwiXCJcbiAgICAgICAgbGV0IHNvcnRfb3JkZXIgPSBmaWx0ZXJDcml0ZXJpYS5zb3J0X29yZGVyIHx8IFwiXCJcbiAgICAgICAgbGV0IGF2YWlsYWJpbGl0eSA9IGZpbHRlckNyaXRlcmlhLmF2YWlsYWJpbGl0eSB8fCBbXVxuICAgICAgICBsZXQgYXZnX3JhdGluZ3MgPSBmaWx0ZXJDcml0ZXJpYS5hdmdfcmF0aW5ncyB8fCBbXVxuICAgICAgICBsZXQgZ2VuZGVyID0gZmlsdGVyQ3JpdGVyaWEuZ2VuZGVyIHx8ICcnXG4gICAgICAgIGxldCBzaXRzX2F0X2hvc3BpdGFsID0gZmlsdGVyQ3JpdGVyaWEuc2l0c19hdF9ob3NwaXRhbFxuICAgICAgICBsZXQgc2l0c19hdF9jbGluaWMgPSBmaWx0ZXJDcml0ZXJpYS5zaXRzX2F0X2NsaW5pY1xuXG5cbiAgICAgICAgbGV0IGhvc3BpdGFsX25hbWUgPSBmaWx0ZXJDcml0ZXJpYS5ob3NwaXRhbF9uYW1lIHx8IFwiXCJcbiAgICAgICAgbGV0IGRvY3Rvcl9uYW1lID0gZmlsdGVyQ3JpdGVyaWEuZG9jdG9yX25hbWUgfHwgXCJcIlxuICAgICAgICBsZXQgaG9zcGl0YWxfaWQgPSBmaWx0ZXJDcml0ZXJpYS5ob3NwaXRhbF9pZCB8fCBcIlwiXG4gICAgICAgIGxldCBpc19pbnN1cmVkID0gZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCB8fCBmYWxzZVxuICAgICAgICBsZXQgc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcyA9IGZpbHRlckNyaXRlcmlhLnNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMgfHwgW11cblxuXG4gICAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICAgIC8vQ2hlY2sgaWYgYW55IGZpbHRlciBhcHBsaWVkIFxuICAgICAgICBsZXQgaXNfZmlsdGVyX2FwcGxpZWQgPSBmYWxzZVxuXG4gICAgICAgIGlmIChzb3J0X29uKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXZhaWxhYmlsaXR5ICYmIGF2YWlsYWJpbGl0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF2Z19yYXRpbmdzICYmIGF2Z19yYXRpbmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2VuZGVyKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9zcGl0YWxfbmFtZSkge1xuICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvY3Rvcl9uYW1lKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9zcGl0YWxfaWQpIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMgJiYgc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCAmJiBwYXJzZWQuZnJvbVZpcCkge1xuICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQgJiYgcGFyc2VkLmZyb21Hb2xkVmlwKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc19wYXJhbXNfZXhpc3QgPSBmYWxzZVxuICAgICAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YFxuICAgICAgICBcbiAgICAgICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICAgICAgICB1cmwgKz0gYD9wYWdlPSR7cGFnZX1gXG4gICAgICAgICAgICBpc19wYXJhbXNfZXhpc3QgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICB1cmwrPSBgJHtpc19wYXJhbXNfZXhpc3QgPyAnJicgOiAnPyd9c2VhcmNoX2lkPSR7dGhpcy5zdGF0ZS5zZWFyY2hfaWR9YFxuICAgICAgICBpc19wYXJhbXNfZXhpc3QgPSB0cnVlXG4gICAgICAgIGlmIChpc19maWx0ZXJfYXBwbGllZCB8fCAhdGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuXG4gICAgICAgICAgICB1cmwgKz0gYCZzcGVjaWFsaXphdGlvbnM9JHtzcGVjaWFsaXphdGlvbnNfaWRzfSZjb25kaXRpb25zPSR7Y29uZGl0aW9uX2lkc30mbGF0PSR7bGF0fSZsb25nPSR7bG9uZ30mc29ydF9vbj0ke3NvcnRfb259JnNvcnRfb3JkZXI9JHtzb3J0X29yZGVyfSZhdmFpbGFiaWxpdHk9JHthdmFpbGFiaWxpdHl9JmdlbmRlcj0ke2dlbmRlcn0mYXZnX3JhdGluZ3M9JHthdmdfcmF0aW5nc30mZG9jdG9yX25hbWU9JHtkb2N0b3JfbmFtZSB8fCBcIlwifSZob3NwaXRhbF9uYW1lPSR7aG9zcGl0YWxfbmFtZSB8fCBcIlwifSZwbGFjZV9pZD0ke3BsYWNlX2lkfSZsb2NhdGlvblR5cGU9JHtsb2NhdGlvblR5cGUgfHwgXCJcIn0mcHJvY2VkdXJlX2lkcz0ke3Byb2NlZHVyZXNfaWRzIHx8IFwiXCJ9JnByb2NlZHVyZV9jYXRlZ29yeV9pZHM9JHtjYXRlZ29yeV9pZHMgfHwgXCJcIn0maG9zcGl0YWxfaWQ9JHtob3NwaXRhbF9pZH0maXBkX3Byb2NlZHVyZXM9JHtpcGRfaWRzIHx8ICcnfSZpc19pbnN1cmVkPSR7aXNfaW5zdXJlZH0mbG9jYWxpdHk9JHtsb2NhbGl0eX0mc3ViX2xvY2FsaXR5PSR7c3ViX2xvY2FsaXR5fSZzaXRzX2F0X2hvc3BpdGFsPSR7c2l0c19hdF9ob3NwaXRhbH0mc2l0c19hdF9jbGluaWM9JHtzaXRzX2F0X2NsaW5pY30mZ3JvdXBfaWRzPSR7Z3JvdXBfaWRzfSZzcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzPSR7c3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkc31gXG5cbiAgICAgICAgICAgIGlmKHBhcnNlZCAmJiBwYXJzZWQuZnJvbVZpcCl7XG4gICAgICAgICAgICAgICAgdXJsKz0gYCZmcm9tVmlwPSR7cGFyc2VkLmZyb21WaXAgfHwgJyd9YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyc2VkICYmIHBhcnNlZC51dG1fdGVybSkge1xuICAgICAgICAgICAgICAgIHVybCArPSBgJnV0bV90ZXJtPSR7cGFyc2VkLnV0bV90ZXJtIHx8ICcnfWBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocGFyc2VkICYmIHBhcnNlZC5mcm9tR29sZFZpcCkge1xuICAgICAgICAgICAgICAgIHVybCArPSBgJmZyb21Hb2xkVmlwPSR7cGFyc2VkLmZyb21Hb2xkVmlwIHx8ICcnfWBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNfcGFyYW1zX2V4aXN0ID0gdHJ1ZVxuXG4gICAgICAgIH0vKiBlbHNlIGlmICh0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG5cbiAgICAgICAgICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gXG4gICAgICAgIH0qL1xuXG4gICAgICAgIGlmKHBhcnNlZC51dG1fc291cmNlKSB7XG4gICAgICAgICAgICB1cmwrPSBgJnV0bV9zb3VyY2U9JHtwYXJzZWQudXRtX3NvdXJjZXx8Jyd9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLnV0bV9tZWRpdW0pIHtcbiAgICAgICAgICAgIHVybCs9IGAmdXRtX21lZGl1bT0ke3BhcnNlZC51dG1fbWVkaXVtfHwnJ31gXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQudXRtX2NhbXBhaWduKSB7XG4gICAgICAgICAgICB1cmwrPSBgJnV0bV9jYW1wYWlnbj0ke3BhcnNlZC51dG1fY2FtcGFpZ258fCcnfWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNsaW5pY19jYXJkKSB7XG4gICAgICAgICAgICB1cmwgKz0gYCR7aXNfcGFyYW1zX2V4aXN0ID8gJyYnIDogJz8nfWNsaW5pY19jYXJkPXRydWVgXG4gICAgICAgICAgICBpc19wYXJhbXNfZXhpc3QgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkLmdldF9mZWVkYmFjaykge1xuICAgICAgICAgICAgdXJsICs9IGAke2lzX3BhcmFtc19leGlzdCA/ICcmJyA6ICc/J31nZXRfZmVlZGJhY2s9JHtwYXJzZWQuZ2V0X2ZlZWRiYWNrfWBcbiAgICAgICAgICAgIGlzX3BhcmFtc19leGlzdCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQuc2hvd1BvcHVwKSB7XG4gICAgICAgICAgICB1cmwgKz0gYCR7aXNfcGFyYW1zX2V4aXN0ID8gJyYnIDogJz8nfXNob3dQb3B1cD0ke3BhcnNlZC5zaG93UG9wdXB9YFxuICAgICAgICAgICAgaXNfcGFyYW1zX2V4aXN0ID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXApe1xuICAgICAgICAgICAgdXJsICs9IGAkeycmc2hvd19wb3B1cD0nKyB0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cH1gXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuXG4gICAgZ2V0RG9jdG9yTGlzdChzdGF0ZSA9IG51bGwsIHBhZ2UgPSBudWxsLCBjYiA9IG51bGwpIHtcbiAgICAgICAgLy9nZXQgZG9jdG9yIGxpc3Qgb24gZmlsdGVycyBhcHBsaWVkXG4gICAgICAgIGxldCBzZWFyY2hVcmwgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLXNwdGNpdCcpIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctc3B0bGl0Y2l0JykgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1pcGRkcCcpKSB7XG4gICAgICAgICAgICBzZWFyY2hVcmwgPSB0aGlzLnByb3BzLm1hdGNoLnVybC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBhZ2UgPSB0aGlzLnByb3BzLnBhZ2VcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMucHJvcHNcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5wYWdlKSB7XG4gICAgICAgICAgICBwYWdlID0gc3RhdGUucGFnZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0RG9jdG9ycyhzdGF0ZSwgcGFnZSwgZmFsc2UsIHNlYXJjaFVybCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBzZW9EYXRhOiBhcmdzWzFdIH0pXG4gICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICBjYiguLi5hcmdzKVxuICAgICAgICAgICAgICAgIGxldCBuZXdfdXJsID0gdGhpcy5idWlsZFVSSShzdGF0ZSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShuZXdfdXJsKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVUkkoc3RhdGUpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UobmV3X3VybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5zdGF0ZS5jbGluaWNfY2FyZCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RXJyb3I6IHRydWUgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRNZXRhVGFnc0RhdGEoc2VvRGF0YSkge1xuICAgICAgICBsZXQgdGl0bGUgPSAnJ1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aXRsZSA9IGAke3RoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0ubmFtZX0gOiBCb29rIEJlc3QgJHt0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLm5hbWV9IERvY3RvcnMgTmVhciBZb3VgXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGAke3RoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0ubmFtZX06IEJvb2sgYXBwb2ludG1lbnQgd2l0aCB0aGUgYmVzdCAke3RoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0ubmFtZX0gZnJvbSB0b3AgaG9zcGl0YWxzIGFuZCBjbGluaWNzIG5lYXIgeW91IGF0IGRpc2NvdW50ZWQgcHJpY2UuIENoZWNrIGRvY3RvciByZXZpZXdzIGFuZCBtb3JlLmBcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2NoZW1hID0ge31cbiAgICAgICAgaWYgKHNlb0RhdGEpIHtcbiAgICAgICAgICAgIHRpdGxlID0gc2VvRGF0YS50aXRsZSB8fCB0aXRsZVxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBzZW9EYXRhLmRlc2NyaXB0aW9uIHx8IGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBzY2hlbWEgPSBzZW9EYXRhLnNjaGVtYSB8fCBzY2hlbWFcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5wcm9wcy5wYWdlKSAhPSAxKSB7XG4gICAgICAgICAgICB0aXRsZSA9ICdQYWdlICcgKyB0aGlzLnByb3BzLnBhZ2UgKyAnIC0gJyArIHRpdGxlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzY2hlbWEgfVxuICAgIH1cblxuICAgIHJlc2V0UXVpY2tGaWx0ZXJzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcXVpY2tGaWx0ZXI6IHt9IH0pXG4gICAgfVxuXG4gICAgYXBwbHlRdWlja0ZpbHRlcihmaWx0ZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHF1aWNrRmlsdGVyOiBmaWx0ZXIgfSlcbiAgICB9XG5cbiAgICBpc0ZpbHRlckFwcGxpZWQoZmlsdGVyQ3JpdGVyaWEpIHtcbiAgICAgICAgLy9DaGVjayBpZiBhbnkgZmlsdGVyIGFwcGxpZWQgXG4gICAgICAgIGxldCBpc19maWx0ZXJfYXBwbGllZCA9IGZhbHNlXG4gICAgICAgIGlmIChmaWx0ZXJDcml0ZXJpYSkge1xuICAgICAgICAgICAgbGV0IHNvcnRfb24gPSBmaWx0ZXJDcml0ZXJpYS5zb3J0X29uIHx8IFwiXCJcbiAgICAgICAgICAgIGxldCBzb3J0X29yZGVyID0gZmlsdGVyQ3JpdGVyaWEuc29ydF9vcmRlciB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgYXZhaWxhYmlsaXR5ID0gZmlsdGVyQ3JpdGVyaWEuYXZhaWxhYmlsaXR5IHx8IFtdXG4gICAgICAgICAgICBsZXQgYXZnX3JhdGluZ3MgPSBmaWx0ZXJDcml0ZXJpYS5hdmdfcmF0aW5ncyB8fCBbXVxuICAgICAgICAgICAgbGV0IGdlbmRlciA9IGZpbHRlckNyaXRlcmlhLmdlbmRlciB8fCAnJ1xuICAgICAgICAgICAgbGV0IHNpdHNfYXRfaG9zcGl0YWwgPSBmaWx0ZXJDcml0ZXJpYS5zaXRzX2F0X2hvc3BpdGFsXG4gICAgICAgICAgICBsZXQgc2l0c19hdF9jbGluaWMgPSBmaWx0ZXJDcml0ZXJpYS5zaXRzX2F0X2NsaW5pY1xuXG5cbiAgICAgICAgICAgIGxldCBob3NwaXRhbF9uYW1lID0gZmlsdGVyQ3JpdGVyaWEuaG9zcGl0YWxfbmFtZSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgZG9jdG9yX25hbWUgPSBmaWx0ZXJDcml0ZXJpYS5kb2N0b3JfbmFtZSB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgaG9zcGl0YWxfaWQgPSBmaWx0ZXJDcml0ZXJpYS5ob3NwaXRhbF9pZCB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgaXNfaW5zdXJlZCA9IGZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQgfHwgZmFsc2VcblxuICAgICAgICAgICAgaWYgKHNvcnRfb24pIHtcbiAgICAgICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhdmFpbGFiaWxpdHkgJiYgYXZhaWxhYmlsaXR5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXZnX3JhdGluZ3MgJiYgYXZnX3JhdGluZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChnZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc19maWx0ZXJfYXBwbGllZFxuICAgIH1cblxuICAgIHNlYXJjaERvY3RvclNwZWNpYWxpemF0aW9uKHNwZWNpYWxpdHksIGlzVmlld0FsbCkge1xuICAgICAgICAvL2ZpbHRlciB0byBzZWFyY2ggZG9jdG9yIHNwZWNpYWxpemF0aW9uXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzcGVjaWFsaXR5RGF0YSA9IHt9XG4gICAgICAgIGxldCBWaWV3QWxsRGF0YSA9IFtdXG4gICAgICAgIGlmIChpc1ZpZXdBbGwpIHtcbiAgICAgICAgICAgIHNwZWNpYWxpdHkubWFwKChzcGVjLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgVmlld0FsbERhdGEucHVzaCh7IGlkOiBzcGVjLnNwZWNpYWxpemF0aW9uX2lkLCB0eXBlOiAnc3BlY2lhbGl0eScgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHt9XG4gICAgICAgICAgICBsZXQgaG9zcGl0YWxfaWQgPSAnJ1xuICAgICAgICAgICAgbGV0IGRvY3Rvcl9uYW1lID0gJydcbiAgICAgICAgICAgIGxldCBob3NwaXRhbF9uYW1lID0gJydcbiAgICAgICAgICAgIGlmIChWaWV3QWxsRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMoVmlld0FsbERhdGEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsX2lkLCBkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmV4dEZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgICAgICAgICAgICAgIGhvc3BpdGFsX2lkLCBkb2N0b3JfbmFtZSwgaG9zcGl0YWxfbmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2ltaWxhclNwZWNpYWxpemF0aW9uc1ZpZXdBbGwnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzaW1pbGFyLXNwZWNpYWxpemF0aW9ucy12aWV3YWxsJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWVyZ2VPUERTdGF0ZShzdGF0ZSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL3NlYXJjaHJlc3VsdHNgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3BlY2lhbGl0eURhdGEudHlwZSA9ICdzcGVjaWFsaXR5J1xuICAgICAgICAgICAgc3BlY2lhbGl0eURhdGEubmFtZSA9IHNwZWNpYWxpdHkuc3BlY2lhbGl6YXRpb25fbmFtZVxuICAgICAgICAgICAgc3BlY2lhbGl0eURhdGEuaWQgPSBzcGVjaWFsaXR5LnNwZWNpYWxpemF0aW9uX2lkXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZU9QRENyaXRlcmlhKCdzcGVjaWFsaXR5Jywgc3BlY2lhbGl0eURhdGEsIHRydWUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL29wZC9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU2ltaWxhclNwZWNpYWxpemF0aW9ucycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3NpbWlsYXItc3BlY2lhbGl6YXRpb25zJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFNpbWlsYXJTcGVjaWFsaXphdGlvbihmbGFnKSB7LypcbiAgICAgICAgbGV0IGRhdGFMZW5ndGggPSBwYXJzZUludCh0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zLmxlbmd0aC8yKVxuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgY291bnQgPSBkYXRhTGVuZ3RoO1xuICAgICAgICAgICAgZGF0YUxlbmd0aCA9IFxuICAgICAgICB9Ki9cbiAgICAgICAgLy9mdW5jaXRvbiB0byByZXR1cm4gc2VhcmNoIHNwZWNpYWxpemF0aW9uIHRvIHJlbmRlclxuICAgICAgICBsZXQgZGF0YU1vZGVsID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZmxhZyAmJiBpICUgMiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZGF0YU1vZGVsLnB1c2goPHNwYW4gaWQ9e3RoaXMucHJvcHMuc2ltaWxhcl9zcGVjaWFsaXphdGlvbnNbaV0uc3BlY2lhbGl6YXRpb25faWR9IG9uQ2xpY2s9e3RoaXMuc2VhcmNoRG9jdG9yU3BlY2lhbGl6YXRpb24uYmluZCh0aGlzLCB0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zW2ldLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9uc1tpXS5zcGVjaWFsaXphdGlvbl9uYW1lfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj4pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWZsYWcgJiYgaSAlIDIgIT0gMCkge1xuICAgICAgICAgICAgICAgIGRhdGFNb2RlbC5wdXNoKDxzcGFuIGlkPXt0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zW2ldLnNwZWNpYWxpemF0aW9uX2lkfSBvbkNsaWNrPXt0aGlzLnNlYXJjaERvY3RvclNwZWNpYWxpemF0aW9uLmJpbmQodGhpcywgdGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9uc1tpXSwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2ltaWxhcl9zcGVjaWFsaXphdGlvbnNbaV0uc3BlY2lhbGl6YXRpb25fbmFtZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGFNb2RlbFxuICAgIH1cblxuICAgIFNpbWlsYXJTcGVjaWFsaXphdGlvbkRhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0gKDxkaXYgY2xhc3NOYW1lPVwic29ydC1zdWItZmlsdGVyLWNvbnRhaW5lciBtYi0zIHBiLTBcIj5cbiAgICAgICAgICAgIDxwPkxvb2tpbmcgZm9yIG90aGVyIHJlbGF0ZWRcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDBcIj4gc3BlY2lhbGl6YXRpb25zPyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHNvcnQtbW9yZS1maWx0ZXJcIiBvbkNsaWNrPXt0aGlzLnNlYXJjaERvY3RvclNwZWNpYWxpemF0aW9uLmJpbmQodGhpcywgdGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9ucywgdHJ1ZSl9PlNlYXJjaCBhbGw8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1zbGQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbS1jaGlwcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuU2ltaWxhclNwZWNpYWxpemF0aW9uKHRydWUpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic20tY2hpcHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLlNpbWlsYXJTcGVjaWFsaXphdGlvbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIHNvcnRGaWx0ZXJDbGlja2VkKCkge1xuICAgICAgICAvL2Z1bmN0aW9uIHdoaWNoIGNhbGxlZCB3aGVuIHdlIGNsaWNrIG9uIHNjcmVlbi1maWx0ZXJzIFxuICAgICAgICBpZiAodGhpcy5jaGlsZCAmJiB0aGlzLmNoaWxkLnNvcnRGaWx0ZXJDbGlja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkLnNvcnRGaWx0ZXJDbGlja2VkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhvc3BpdGFsQ2FyZENsaWNrZWQodG9wID0gZmFsc2UsIGRhdGEpIHtcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7fVxuICAgICAgICBpZiAodG9wKSB7XG4gICAgICAgICAgICBndG1EYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnbmVhcmJ5LWhvc3BpdGFscy1jbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbmVhcmJ5LWhvc3BpdGFscy1jbGlja2VkJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBndG1EYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAndG9waG9zcGl0YWxzQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3RvcC1ob3NwaXRhbHMtY2xpY2tlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICBsZXQgcmVkaXJlY3RVcmwgPSAnJ1xuXG4gICAgICAgIGlmIChkYXRhLnVybCkge1xuICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSBgLyR7ZGF0YS51cmx9P3Nob3dQb3B1cD10cnVlYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSBgL2lwZC9ob3NwaXRhbC8ke2RhdGEuaWR9P3Nob3dQb3B1cD10cnVlYFxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHJlZGlyZWN0VXJsKVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9TZWFyY2hWaXAoKXtcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3NlYXJjaC1iYXItY2xpY2tlZC1mcm9tVmlwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2VhcmNoLWJhci1jbGlja2VkLWZyb21WaXAnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2gnKVxuICAgIH1cblxuICAgIHZpZXdBbGxIb3NwaXRhbENsaWNrZWQoKXtcbiAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3RvclNlYXJjaEhvc3BpdGFsVmlld0FsbENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3Itc2VhcmNoLWhvc3BpdGFsLXZpZXctYWxsLWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5tZXJnZUlwZENyaXRlcmlhKHtcbiAgICAgICAgICAgIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzOiBbXSxcbiAgICAgICAgICAgIG5leHRTZWxlY3RlZENyaXRlcmlhczogW11cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pcGQvc2VhcmNoSG9zcGl0YWxzYCkgICBcbiAgICB9XG5cbiAgICBub25JcGRMZWFkcyhwaG9uZV9udW1iZXIpe1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IGNyaXRlcmlhU3RyID0gdGhpcy5nZXRDcml0ZXJpYVN0cmluZyh0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKVxuICAgICAgICBsZXQgZGF0YSA9KHtwaG9uZV9udW1iZXI6cGhvbmVfbnVtYmVyLGxlYWRfc291cmNlOidkb2NhZHMnLHNvdXJjZTpwYXJzZWQsbGVhZF90eXBlOidET0NBRFMnLGRvY3Rvcl9uYW1lOmNyaXRlcmlhU3RyLGV4aXRwb2ludF91cmw6J2h0dHA6Ly9kb2NwcmltZS5jb20nICsgdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSxkb2N0b3JfaWQ6bnVsbCxob3NwaXRhbF9pZDpudWxsLGhvc3BpdGFsX25hbWU6bnVsbH0pXG4gICAgICAgIGlmKHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCl7XG4gICAgICAgICAgICBkYXRhLnV0bV90YWdzID0gdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHg9PngudHlwZSA9PSBcImNvbW1vbl94dHJhX3RhZ3NcIilbMF0udXRtX3RhZ3NcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmlzaXRvcl9pbmZvID0gR1RNLmdldFZpc2l0b3JJbmZvKClcbiAgICAgICAgICAgIGlmKHZpc2l0b3JfaW5mbyAmJiB2aXNpdG9yX2luZm8udmlzaXRfaWQpe1xuICAgICAgICAgICAgICAgIGRhdGEudmlzaXRfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRfaWRcbiAgICAgICAgICAgICAgICBkYXRhLnZpc2l0b3JfaWQgPSB2aXNpdG9yX2luZm8udmlzaXRvcl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICBsZXQgZ3RtX2RhdGEgPSB7J0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2NBZHNTZWFyY2hMaXN0aW5nU3VibWl0Q2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ2RvYy1hZHMtc2VhcmNoLWxpc3RpbmctU3VibWl0LWNsaWNrJ31cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bV9kYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuc2F2ZUxlYWRQaG5OdW1iZXIocGhvbmVfbnVtYmVyKVxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzX2xlYWRfZW5hYmxlZCAmJiAhU1RPUkFHRS5pc0FnZW50KCkpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOmZhbHNlfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuTm9uSXBkQm9va2luZ0xlYWQoZGF0YSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2xlYWRfZW5hYmxlZDp0cnVlfSlcbiAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgIH1cbiAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iZV9mb3JjZTowfSlcbiAgICB9XG5cbiAgICBjbG9zZUlwZExlYWRQb3B1cChmcm9tKXtcbiAgICAgICAgaWYoZnJvbSl7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2NBZHNTZWFyY2hMaXN0aW5nQ3Jvc3NDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnZG9jLWFkcy1zZWFyY2gtbGlzdGluZy1jcm9zcy1jbGljaydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fYmVfZm9yY2U6MH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgZ2V0Q3JpdGVyaWFTdHJpbmcoc2VsZWN0ZWRDcml0ZXJpYXMpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ3JpdGVyaWFzICYmIHNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGlzX2dyb3VwX2lkc19leGlzdCA9IHNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnZ3JvdXBfaWRzJylcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZERhdGFWaWV3ID0gaXNfZ3JvdXBfaWRzX2V4aXN0Lmxlbmd0aCA/IGlzX2dyb3VwX2lkc19leGlzdCA6IHNlbGVjdGVkQ3JpdGVyaWFzXG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZERhdGFWaWV3LnJlZHVjZSgoZmluYWwsIGN1cnIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsICs9ICcsICdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWwgKz0gYCR7Y3Vyci5uYW1lfWBcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxcbiAgICAgICAgICAgIH0sIFwiXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzaG93X3BhZ2luYXRpb24gPSB0aGlzLnByb3BzLmRvY3Rvckxpc3QgJiYgdGhpcy5wcm9wcy5kb2N0b3JMaXN0Lmxlbmd0aCA+IDBcbiAgICAgICAgbGV0IHVybCA9IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9JHt0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfWBcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoLyZwYWdlPVxcZHsxLH0vLCBcIlwiKVxuICAgICAgICBsZXQgcGFnZSA9IFwiXCJcbiAgICAgICAgbGV0IGN1cnJfcGFnZSA9IHBhcnNlSW50KHRoaXMucHJvcHMucGFnZSlcbiAgICAgICAgbGV0IHByZXYgPSBcIlwiXG4gICAgICAgIGlmIChjdXJyX3BhZ2UgPiAxKSB7XG4gICAgICAgICAgICBwYWdlID0gYD9wYWdlPSR7Y3Vycl9wYWdlfWBcbiAgICAgICAgICAgIHByZXYgPSB1cmxcbiAgICAgICAgICAgIGlmIChjdXJyX3BhZ2UgPiAyKSB7XG4gICAgICAgICAgICAgICAgcHJldiArPSBgP3BhZ2U9JHtjdXJyX3BhZ2UgLSAxfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dCA9IFwiXCJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY291bnQgPiBjdXJyX3BhZ2UgKiAyMCkge1xuICAgICAgICAgICAgbmV4dCA9IHVybCArIGA/cGFnZT0ke2N1cnJfcGFnZSArIDF9YFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZG8gbm90IHNldCByZWwgbmV4dC9wcmV2IGZvciBub24gc2VvRnJpZW5kbHkgcGFnZXNcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICBuZXh0ID0gXCJcIlxuICAgICAgICAgICAgcHJldiA9IFwiXCJcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgd2FzIHRoZSBsYW5kaW5nIHBhZ2VcbiAgICAgICAgbGV0IGxhbmRpbmdfcGFnZSA9IGZhbHNlXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdy5PTl9MQU5ESU5HX1BBR0UpIHtcbiAgICAgICAgICAgIGxhbmRpbmdfcGFnZSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgY2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5jYW5vbmljYWxfdXJsID8gYC8ke3RoaXMucHJvcHMuY2Fub25pY2FsX3VybH1gIDogdGhpcy5wcm9wcy5tYXRjaC51cmx9JHtwYWdlfWAsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldE1ldGFUYWdzRGF0YSh0aGlzLnByb3BzLnNlb0RhdGEpLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5zZW9EYXRhKS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiB0aGlzLmdldE1ldGFUYWdzRGF0YSh0aGlzLnByb3BzLnNlb0RhdGEpLnNjaGVtYSxcbiAgICAgICAgICAgICAgICAgICAgc2VvRnJpZW5kbHk6IHRoaXMuc3RhdGUuc2VvRnJpZW5kbHksXG4gICAgICAgICAgICAgICAgICAgIHByZXY6IHByZXYsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IG5leHQsXG4gICAgICAgICAgICAgICAgICAgIG9nVHlwZTogJ1dlYnNpdGUnLFxuICAgICAgICAgICAgICAgICAgICBvZ1NpdGVOYW1lOiAnRG9jcHJpbWUnLFxuICAgICAgICAgICAgICAgICAgICBvZ1RpdGxlOiB0aGlzLmdldE1ldGFUYWdzRGF0YSh0aGlzLnByb3BzLnNlb0RhdGEpLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBvZ0Rlc2NyaXB0aW9uOiB0aGlzLmdldE1ldGFUYWdzRGF0YSh0aGlzLnByb3BzLnNlb0RhdGEpLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLyoodGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXAgPT0gMSB8fCB0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cCA9PSAyKSAmJiB0aGlzLnN0YXRlLnRvX2JlX2ZvcmNlID09IDE/XG4gICAgICAgICAgICAgICAgICAgIDxOb25JcGRQb3B1cFZpZXcgey4uLnRoaXMucHJvcHN9IG5vbklwZExlYWRzPXt0aGlzLm5vbklwZExlYWRzLmJpbmQodGhpcyl9IGNsb3NlSXBkTGVhZFBvcHVwID0ge3RoaXMuY2xvc2VJcGRMZWFkUG9wdXAuYmluZCh0aGlzKX0gaXNfZm9yY2U9e3RoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwfSBpc19vcGQ9e3RydWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8Q3JpdGVyaWFTZWFyY2ggey4uLnRoaXMucHJvcHN9IGNoZWNrRm9yTG9hZD17bGFuZGluZ19wYWdlIHx8IHRoaXMucHJvcHMuTE9BREVEX0RPQ1RPUl9TRUFSQ0ggfHwgdGhpcy5zdGF0ZS5zaG93RXJyb3J9IHRpdGxlPVwiU2VhcmNoIEZvciBEaXNlYXNlIG9yIERvY3Rvci5cIiB0eXBlPVwib3BkXCIgZ29CYWNrPXt0cnVlfSBjbGluaWNfY2FyZD17ISF0aGlzLnN0YXRlLmNsaW5pY19jYXJkfSBuZXdDaGF0QnRuPXt0cnVlfSBzZWFyY2hEb2N0b3JzPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93RXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cIm5vcmZcIj5ObyBSZXN1bHRzIEZvdW5kISE8L2Rpdj4gOiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb3BCYXIgey4uLnRoaXMucHJvcHN9IGFwcGx5RmlsdGVycz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0gc2VvRGF0YT17dGhpcy5wcm9wcy5zZW9EYXRhfSBjbGluaWNfY2FyZD17ISF0aGlzLnN0YXRlLmNsaW5pY19jYXJkfSBzZW9GcmllbmRseT17dGhpcy5zdGF0ZS5zZW9GcmllbmRseX0gcmVzZXRRdWlja0ZpbHRlcnM9e3RoaXMucmVzZXRRdWlja0ZpbHRlcnMuYmluZCh0aGlzKX0gcXVpY2tGaWx0ZXI9e3RoaXMuc3RhdGUucXVpY2tGaWx0ZXJ9IGZyb21WaXA9e3RoaXMuc3RhdGUuZnJvbVZpcH0gdG9wQmFyUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxSZXN1bHRDb3VudCB7Li4udGhpcy5wcm9wc30gYXBwbHlGaWx0ZXJzPXt0aGlzLmFwcGx5RmlsdGVycy5iaW5kKHRoaXMpfSBzZW9EYXRhPXt0aGlzLnByb3BzLnNlb0RhdGF9IGNsaW5pY19jYXJkPXshIXRoaXMuc3RhdGUuY2xpbmljX2NhcmR9IHNlb0ZyaWVuZGx5PXt0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5fSAvPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4IDMwcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2Jhbm5lcnMvYmFubmVyX2RvYy5wbmdcIn0gY2xhc3NOYW1lPVwiYmFubmVyLWltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuY2xpbmljX2NhcmQgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbExpc3QgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbExpc3QubGVuZ3RoID09IDApIHx8IHRoaXMucHJvcHMuZG9jdG9yTGlzdCAmJiB0aGlzLnByb3BzLmRvY3Rvckxpc3QubGVuZ3RoID09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNhcmRNYWluUGFkZGluZ1JtdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jYXJkLWNvbnRhaW5lciBtdC0yMCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1uby1yZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2ctbi1yc2x0XCI+Tm8gcmVzdWx0IGZvdW5kITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGaWx0ZXJBcHBsaWVkKHRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm4tcnNsdC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL25vLXJlc3VsdC5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZy10eS1hZ24gY3Vyc29yLXBudHJcIiBvbkNsaWNrPXt0aGlzLmFwcGx5UXVpY2tGaWx0ZXIuYmluZCh0aGlzLCB7IHZpZXdNb3JlOiB0cnVlIH0pfT5UcnkgYWdhaW4gd2l0aCBmZXdlciBmaWx0ZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTMwcHgnIH19IGNsYXNzTmFtZT1cIm4tcnNsdC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZjdC1uby5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZy10eS1hZ24gdGV4dC1kYXJrIHRleHQtY2VudGVyXCI+Q2Fu4oCZdCBmaW5kIHlvdXIgZG9jdG9yIGhlcmU/PGJyPjwvYnI+SGVscCB1cyB0byBsaXN0IHlvdXIgZG9jdG9yPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVmZXJEb2N0b3JidG5cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdSZWZlckRvY3Rvckxpc3ROb3Jlc3VsdCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAncmVmZXItZG9jdG9yLWxpc3Qtbm9yZXN1bHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9kb2N0b3JzaWdudXA/bWVtYmVyX3R5cGU9MScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+UmVmZXIgeW91ciBEb2N0b3I8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9ucyAmJiB0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zLmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5zb3J0X29yZGVyICYmICghdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkgfHwgIXRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCkgJiYgdGhpcy5wcm9wcy5jb3VudCA9PSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2ltaWxhclNwZWNpYWxpemF0aW9uRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mcm9tVmlwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvcEhvc3BpdGFscyAmJiB0aGlzLnByb3BzLnRvcEhvc3BpdGFscy50b3BfaG9zcGl0YWxzICYmIHRoaXMucHJvcHMudG9wSG9zcGl0YWxzLnRvcF9ob3NwaXRhbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFZpZXcgdG9wSGVhZGluZz0nVG9wIEhvc3BpdGFscycgZGF0YUxpc3Q9e3RoaXMucHJvcHMudG9wSG9zcGl0YWxzLnRvcF9ob3NwaXRhbHN9IGRhdGFUeXBlPSd0b3BIb3NwaXRhbHMnIGNhcm91c2VsQ2FyZENsaWNrZWQ9eyh0b3AsIGRhdGEpID0+IHRoaXMuaG9zcGl0YWxDYXJkQ2xpY2tlZCh0b3AsIGRhdGEpfSB0b3BIb3NwaXRhbD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5lYXJieUhvc3BpdGFscyAmJiB0aGlzLnByb3BzLm5lYXJieUhvc3BpdGFscy5ob3NwaXRhbHMgJiYgdGhpcy5wcm9wcy5uZWFyYnlIb3NwaXRhbHMuaG9zcGl0YWxzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxWaWV3IHRvcEhlYWRpbmc9J05lYXJieSBIb3NwaXRhbHMnIGRhdGFMaXN0PXt0aGlzLnByb3BzLm5lYXJieUhvc3BpdGFscy5ob3NwaXRhbHN9IGRhdGFUeXBlPSduZWFyYnlIb3NwaXRhbHMnIGNhcm91c2VsQ2FyZENsaWNrZWQ9eyh0b3AsIGRhdGEpID0+IHRoaXMuaG9zcGl0YWxDYXJkQ2xpY2tlZCh0b3AsIGRhdGEpfSBleHRyYUhlYWRpbmc9J1ZpZXcgQWxsJyBuYXZpZ2F0ZVRvPSB7KCk9PnRoaXMudmlld0FsbEhvc3BpdGFsQ2xpY2tlZCgpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHZpcE5ldFRvcCBzZWFyY2hGb3JWaXAgZmlsdGVyLXJvdyBzdGlja3ktaGVhZGVyIG1ibC1zdGljayBzb3J0LXN0aWNreS1uZXR3b3JrXCIgcmVmPVwidmlwX3NyY2hfd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZXJjaC1udy1pbnB1dHMgbWItMCBjb2wtMTIgdmlwLXNyY2gtcGRuZy1hZGpcIiBvbkNsaWNrPXsoKT0+dGhpcy5uYXZpZ2F0ZVRvU2VhcmNoVmlwKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBjbGFzc05hbWU9XCJkLWJsb2NrIG5ldy1zcmNoLWRvYy1sYWJcIiBpZD1cInNlYXJjaF9iYXJcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBkb2N0b3JcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIGNsYXNzTmFtZT1cInNyY2gtaW5wLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3NoYXBlLXNyY2guc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAnMTVweCcsdG9wOicwJywgYm90dG9tOiAnMCcsIGxlZnQ6ICcxOHB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dTZWFyY2hCdG4gJiYgPGJ1dHRvbiBjbGFzc05hbWU9XCJzcmNoLXZwLW50XCI+PGltZyBzdHlsZT17e21hcmdpblJpZ2h0Oic4cHgnLHdpZHRoOicxMHB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICtcIi9pbWcvbmV3LWxvYy1pY28uc3ZnXCJ9Lz57dGhpcy5zdGF0ZS5zZWFyY2hfc3RyaW5nfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzcnQtc2NybC1idG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNvcnRGaWx0ZXJDbGlja2VkKCl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9maWx0ZXJzb3J0LnBuZyd9Lz4gU29ydC9GaWx0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9jdG9yc0xpc3Qgey4uLnRoaXMucHJvcHN9IGFwcGx5RmlsdGVycz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0gZ2V0RG9jdG9yTGlzdD17dGhpcy5nZXREb2N0b3JMaXN0LmJpbmQodGhpcyl9IGNsaW5pY19jYXJkPXshIXRoaXMuc3RhdGUuY2xpbmljX2NhcmR9IHNlb0ZyaWVuZGx5PXt0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5fSBkZXRlY3RMb2NhdGlvbkNsaWNrPXsoKSA9PiB0aGlzLmRldGVjdExvY2F0aW9uQ2xpY2soKX0gYXBwbHlRdWlja0ZpbHRlcj17dGhpcy5hcHBseVF1aWNrRmlsdGVyLmJpbmQodGhpcyl9IFNpbWlsYXJTcGVjaWFsaXphdGlvbkRhdGE9e3RoaXMuU2ltaWxhclNwZWNpYWxpemF0aW9uRGF0YS5iaW5kKHRoaXMpfSBzcG9uc29yRGF0YT17dGhpcy5zdGF0ZS5zcG9uc29yRGF0YX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZW9GcmllbmRseSAmJiBzaG93X3BhZ2luYXRpb24gPyA8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgPyA8YSBocmVmPXtwcmV2fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj57Y3Vycl9wYWdlIC0gMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCIgc3R5bGU9e3sgY29sb3I6ICcjMDAwJyB9fT57Y3Vycl9wYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA/IDxhIGhyZWY9e25leHR9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnQtcGFnaW5hdGlvbi1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiPntjdXJyX3BhZ2UgKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Dcml0ZXJpYVNlYXJjaD5cblxuXG4gICAgICAgICAgICAgICAgPEZvb3RlciBmb290ZXJEYXRhPXt0aGlzLnN0YXRlLmZvb3RlckRhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHNWaWV3XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIENhcm91c2VsVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c2Nyb2xsKHR5cGUpIHtcbiAgICAgICAgdmFyIGVsbW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvcF8ke3RoaXMucHJvcHMuZGF0YVR5cGV9YClcblxuICAgICAgICBpZihlbG1udCAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGB0b3BfJHt0aGlzLnByb3BzLmRhdGFUeXBlfV9saXN0YCkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxlZnRBcnJvd18ke3RoaXMucHJvcHMuZGF0YVR5cGV9YCkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFJpZ2h0QXJyb3dfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWApKSB7XG5cbiAgICAgICAgXHRsZXQgb3V0ZXJEaXZXaWR0aCA9IGVsbW50Lm9mZnNldFdpZHRoXG5cdCAgICAgICAgbGV0IGNoaWxkRGl2V2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGB0b3BfJHt0aGlzLnByb3BzLmRhdGFUeXBlfV9saXN0YClbMF0ub2Zmc2V0V2lkdGhcblx0ICAgICAgICBsZXQgY2FyZENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgdG9wXyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1fbGlzdGApWzBdLmNoaWxkRWxlbWVudENvdW50XG5cdCAgICAgICAgbGV0IGNhcmRXaWR0aCA9IE1hdGguY2VpbChjaGlsZERpdldpZHRoIC8gY2FyZENvdW50KVxuXG5cdCAgICAgICAgbGV0IGxlZnRTY3JvbGwgPSBlbG1udC5zY3JvbGxMZWZ0XG5cdCAgICAgICAgbGV0IHNjcm9sbFZhbCA9IE1hdGguZmxvb3Iob3V0ZXJEaXZXaWR0aCAvIGNhcmRXaWR0aCkgKiBjYXJkV2lkdGhcblx0ICAgICAgICBsZXQgY2FyZEVuZCA9IGNhcmRDb3VudCAqIGNhcmRXaWR0aFxuXG5cdCAgICAgICAgaWYgKHR5cGUgPT0gJ3JpZ2h0Jykge1xuXHQgICAgICAgICAgICBlbG1udC5zY3JvbGwoeyBsZWZ0OiBsZWZ0U2Nyb2xsICsgc2Nyb2xsVmFsLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcblx0ICAgICAgICAgICAgaWYgKGNhcmRFbmQgPD0gbGVmdFNjcm9sbCArIHNjcm9sbFZhbCArIG91dGVyRGl2V2lkdGgpIHtcblx0ICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsZWZ0QXJyb3dfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWApLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgUmlnaHRBcnJvd18ke3RoaXMucHJvcHMuZGF0YVR5cGV9YCkuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGVsbW50LnNjcm9sbCh7IGxlZnQ6IGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuXHQgICAgICAgICAgICBpZiAobGVmdFNjcm9sbCAtIHNjcm9sbFZhbCA8PSAwKSB7XG5cdCAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgUmlnaHRBcnJvd18ke3RoaXMucHJvcHMuZGF0YVR5cGV9YCkuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsZWZ0QXJyb3dfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcblx0ICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblx0cmVuZGVyKCl7XG5cblx0XHRsZXQgeyB0b3BIZWFkaW5nLCBkYXRhTGlzdCwgZGF0YVR5cGUsIHRvcEhvc3BpdGFsLCBleHRyYUhlYWRpbmcsIHZpZXdBbGwgfSA9IHRoaXMucHJvcHNcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBha2ctc2xpZGVyLWNvbnRhaW5lciBtdC0xMCBtYi0xMCBwa2ctbnR3ay1tcmduXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJIZWFkaW5nIHBsLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1Pnt0b3BIZWFkaW5nfHwnJ308L2g1PlxuICAgICAgICAgICAgICAgICAgICB7ZXh0cmFIZWFkaW5nICYmICh2aWV3QWxsIHx8IGRhdGFMaXN0Lmxlbmd0aD49IDIwKSAmJiA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm5hdmlnYXRlVG8oKX0+e2V4dHJhSGVhZGluZ308L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICB7Lyo8c3Bhbj5WaWV3IEFsbDwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ1NsaWRlckNvbnRhaW5lciBuZXR3b3JrLXNsaWRlclwiIGlkPXtgdG9wXyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwa2dDYXJkc0xpc3QgZC1pbmxpbmUtZmxleCBzdWItd2QtY2FyZHMgdG9wXyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1fbGlzdGB9PlxuICAgICAgICAgICAgICAgICAgICBcdHtcbiAgICAgICAgICAgICAgICAgICAgXHRcdGRhdGFMaXN0Lm1hcCgoZGF0YSwga2V5KT0+e1xuICAgICAgICAgICAgICAgIFx0XHRcdHJldHVybiA8YSBrZXk9e2Ake2tleX1fJHtkYXRhLmlkfWB9IGhyZWY9JycgY2xhc3NOYW1lPVwicGtnY3VzdENhcmRzXCIgIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmNhcm91c2VsQ2FyZENsaWNrZWQoZGF0YSx0b3BIb3NwaXRhbD90cnVlOmZhbHNlKX0+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2NhcmRJbWdDb250XCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRkYXRhLmxvZ28gJiYgPGltZyBzdHlsZT17e3dpZHRoOiAnODJweCd9fSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e2RhdGEubG9nb30gLz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0fVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2d0c3ROYW1lIHByY2QtaGVpZ2h0XCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICBcdFx0fSlcbiAgICAgICAgICAgICAgICAgICAgXHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnbGZ0Umh0YnRuY29udCBuZXR3cmstYnRuc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1idG5sZnQgZC1ub25lXCIgaWQ9e2BSaWdodEFycm93XyR7ZGF0YVR5cGV9YH0gb25DbGljaz17dGhpcy5zY3JvbGwuYmluZCh0aGlzLCAnbGVmdCcpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1idG5yZ3RcIiBpZD17YGxlZnRBcnJvd18ke2RhdGFUeXBlfWB9IG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ3JpZ2h0Jyl9PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFZpZXc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBEb2N0b3JSZXN1bHRDYXJkIGZyb20gJy4uLy4uL2NvbW1vbnMvZG9jdG9yUmVzdWx0Q2FyZCdcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcic7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBDbGluaWNSZXN1bHRDYXJkIGZyb20gJy4uLy4uL2NvbW1vbnMvY2xpbmljUmVzdWx0Q2FyZCc7XG5pbXBvcnQgQmFubmVyQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9Ib21lL2Jhbm5lckNhcm91c2VsJztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IHsgX2dldGxvY2F0aW9uRnJvbUxhdExvbmcsIF9nZXRMb2NhdGlvbkZyb21QbGFjZUlkLCBfYXV0b0NvbXBsZXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvbWFwSGVscGVycyc7XG5pbXBvcnQgUmF0aW5nU3RhcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nU3RhcnMnO1xuXG5jbGFzcyBEb2N0b3JzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoYXNNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcmVuZGVyQmxvY2s6IGZhbHNlLFxuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgIHJlYWRNb3JlOiAnc2VhcmNoLWRldGFpbHMtZGF0YS1sZXNzJyxcbiAgICAgICAgICAgIGlzX2luc3VyZWQ6IHByb3BzLmZpbHRlckNyaXRlcmlhICYmIHByb3BzLmZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQgPyBwcm9wcy5maWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkIDogZmFsc2UsXG4gICAgICAgICAgICBhdmFpbGFiaWxpdHk6IFtdLFxuICAgICAgICAgICAgc29ydF9vbjogJycsXG4gICAgICAgICAgICBzb3J0X29yZGVyOiAnJyxcbiAgICAgICAgICAgIGRldGVjdExvYWRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJlbG93IGNvZGUgZW5zdXJlcyBzbW9vdGggYmFjayBwYWdlIHRyYW5zaXRpb25zIGluIGNhc2Ugb2YgaHVnZSBkYXRhIHNldHMsIGFuZCBtYWludGFpbnMgc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAgICAgKiByZW5kZXJCbG9jayA9IHRydWUgKGJ5IGRlZmF1bHQpIHdpbGwgYmxvY2sgcmVuZGVyIHVudGlsIHRoZSBwYWdlIHRyYW5zaXRpb24gaXMgY29tcGxldGVkLCBhbmQgb25jZSBpdHMgZG9uZSwgaXQgd2lsbCB0aGVuIHJlbmRlciBhbmQgc2V0IHNjcm9sbCBwb3NpdGlvbiBhY2NvcmRpbmdseVxuICAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVmcy5jaGVja0lmRXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlckJsb2NrOiBmYWxzZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsX3BvcyA9IHdpbmRvdy5PUERfU0NST0xMX1BPUyA/ICh3aW5kb3cuT1BEX1NDUk9MTF9QT1MpIDogMFxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBpbXByb3ZlIHNjcm9sbCBiYWNrIGxvZ2ljXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxfcG9zIHx8IDApXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5PUERfU0NST0xMX1BPUyA9IDBcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuT1BEX1NDUk9MTF9QT1MgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgfSwgMTAwKVxuICAgICAgICBcbiAgICAgICAgKi9cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW9yZTogdHJ1ZSB9KVxuICAgICAgICB9LCAwKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSB9KVxuICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9ICcnXG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbjtcbiAgICAgICAgICAgIGxhdCA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmdldE9mZmVyTGlzdChsYXQsIGxvbmcpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmZpbHRlckNyaXRlcmlhKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29ydF9vbjogcHJvcHMuZmlsdGVyQ3JpdGVyaWEuc29ydF9vbiwgc29ydF9vcmRlcjogcHJvcHMuZmlsdGVyQ3JpdGVyaWEuc29ydF9vcmRlciwgYXZhaWxhYmlsaXR5OiBwcm9wcy5maWx0ZXJDcml0ZXJpYS5hdmFpbGFiaWxpdHkgfHwgW10gfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JTZWFyY2hQYWdpbmF0aW9uJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLXNlYXJjaC1wYWdpbmF0aW9uJywgJ1BhZ2VzJzogdGhpcy5zdGF0ZS5wYWdlXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICAvLyBpZiAod2luZG93KSB7XG4gICAgICAgIC8vICAgICB3aW5kb3cub25zY3JvbGwgPSBudWxsXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBnZXRMb2NhdGlvblBhcmFtKHRhZykge1xuICAgICAgICAvLyB0aGlzIEFQSSBhc3N1bWVzIHRoZSBjb250ZXh0IG9mIHJlYWN0LXJvdXRlci00XG4gICAgICAgIGNvbnN0IHBhcmFtU3RyaW5nID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2hcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbVN0cmluZylcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5nZXQodGFnKVxuICAgIH1cblxuICAgIGxvYWRNb3JlKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmU6IGZhbHNlLCBsb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0RG9jdG9yTGlzdChudWxsLCBwYWdlICsgMSwgKGhhc01vcmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgcGFnZTogcGFnZSArIDEgfSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNNb3JlIH0pXG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgdG9nZ2xlU2Nyb2xsKCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmU6ICdzZWFyY2gtZGV0YWlscy1kYXRhLWxlc3MnIH0pXG4gICAgfVxuXG4gICAgYXBwbHlRdWlja0ZpbHRlcnModHlwZSwgdmFsLCBpc0FycmF5LCBlKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHZhbFxuICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkVmFsID0gW10uY29uY2F0KHRoaXMuc3RhdGVbdHlwZV0pIHx8IFtdXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZFZhbC5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PSB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKHZhbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ09wZFF1aWNrRmlsdGVyQ2xpY2tlZCcsICdBY3Rpb24nOiAnT3BkUXVpY2tGaWx0ZXJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3BkLXF1aWNrLWZpbHRlci1jbGlja2VkJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ3R5cGUnOiB0eXBlLCAndmFsJzogdmFsXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuICAgICAgICBsZXQgZmlsdGVycyA9IHsgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSB9XG4gICAgICAgIGlmICh0eXBlLmluY2x1ZGVzKCdzb3J0X29uJykpIHtcblxuICAgICAgICAgICAgaWYgKHZhbC5pbmNsdWRlcygncHJpY2VfYXNjJykgfHwgdmFsLmluY2x1ZGVzKCdwcmljZV9kZXNjJykpIHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW3R5cGVdID09ICdmZWVzJyAmJiAoKHRoaXMuc3RhdGVbJ3NvcnRfb3JkZXInXSA9PSAnYXNjJyAmJiB2YWwuaW5jbHVkZXMoJ3ByaWNlX2FzYycpKSB8fCAodGhpcy5zdGF0ZVsnc29ydF9vcmRlciddID09ICdkZXNjJyAmJiB2YWwuaW5jbHVkZXMoJ3ByaWNlX2Rlc2MnKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0X29uOiBudWxsLCBzb3J0X29yZGVyOiBudWxsIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMgPSBPYmplY3QuYXNzaWduKHsgZmlsdGVycywgLi4udGhpcy5zdGF0ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVycylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29ydF9vbjogJ2ZlZXMnLCBzb3J0X29yZGVyOiB2YWwuaW5jbHVkZXMoJ3ByaWNlX2FzYycpID8gJ2FzYycgOiAnZGVzYycgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycyA9IE9iamVjdC5hc3NpZ24oeyBmaWx0ZXJzLCAuLi50aGlzLnN0YXRlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5RmlsdGVycyhmaWx0ZXJzKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29ydF9vbjogdGhpcy5zdGF0ZVt0eXBlXSA9PSB2YWx1ZSA/IG51bGwgOiB2YWx1ZSwgc29ydF9vcmRlcjogbnVsbCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnMgPSBPYmplY3QuYXNzaWduKHsgZmlsdGVycywgLi4udGhpcy5zdGF0ZSB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5RmlsdGVycyhmaWx0ZXJzKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW3R5cGVdOiB0aGlzLnN0YXRlW3R5cGVdID09IHZhbHVlID8gJycgOiB2YWx1ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmlsdGVycyA9IE9iamVjdC5hc3NpZ24oeyBmaWx0ZXJzLCAuLi50aGlzLnN0YXRlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVycylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2aWV3TW9yZUNsaWNrZWQoKSB7XG4gICAgICAgIGxldCBmaWx0ZXJzID0ge1xuICAgICAgICAgICAgdmlld01vcmU6IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmFwcGx5UXVpY2tGaWx0ZXIoZmlsdGVycylcbiAgICB9XG5cblxuICAgIGRldGVjdExvY2F0aW9uKHR5cGUpIHtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRldGVjdExvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0ZWN0TG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiQ291bGQgbm90IGZldGNoIGxvY2F0aW9uLlwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDAwKVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6IGBEZXRlY3RMb2NhdGlvbiR7dHlwZX1DbGlja2AsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogYERldGVjdC1Mb2NhdGlvbi0ke3R5cGV9LUNsaWNrYCwgJ1BhZ2UnOiAnZG9jdG9yLXNlYXJjaCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiB0cnVlIH0pXG4gICAgICAgIHRoaXMucHJvcHMuZGV0ZWN0TG9jYXRpb25DbGljaygpO1xuICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIF9nZXRsb2NhdGlvbkZyb21MYXRMb25nKHBhcnNlRmxvYXQocG9zaXRpb24uY29vcmRzLmxhdGl0dWRlKSwgcGFyc2VGbG9hdChwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlKSwgJ2xvY2FsaXR5JywgKGxvY2F0aW9uX29iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExvY2F0aW9uKGxvY2F0aW9uX29iamVjdCwgJ2F1dG9EZXRlY3QnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIChhLCBiLCBjKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkNvdWxkIG5vdCBmZXRjaCBsb2NhdGlvbi5cIiB9KTtcbiAgICAgICAgICAgIH0sIChhLCBiLCBjKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkNvdWxkIG5vdCBmZXRjaCBsb2NhdGlvbi5cIiB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0ZWN0TG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgIC8vIGdlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9Ib3NwaXRhbChkYXRhKSB7XG4gICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdTcG9uc29yQ2FyZENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzcG9uc29yLWNhcmQtY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICBpZiAoZGF0YS51cmwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtkYXRhLnVybH1gKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9pcGQvaG9zcGl0YWwvJHtkYXRhLmlkfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGRldGVjdEZsYWcgPSB0cnVlXG5cbiAgICAgICAgbGV0IHsgSE9TUElUQUxTLCBET0NUT1JTLCBkb2N0b3JMaXN0LCBob3NwaXRhbExpc3QgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBsZXQgc3RhcnRfcGFnZSA9IDBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3Vycl9wYWdlKSB7XG4gICAgICAgICAgICBzdGFydF9wYWdlID0gTWF0aC5tYXgoMCwgdGhpcy5wcm9wcy5jdXJyX3BhZ2UgLSAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucGFnZSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0X3BhZ2UgPSBNYXRoLm1heCgwLCB0aGlzLnByb3BzLnBhZ2UgLSAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdF9saXN0ID0gZG9jdG9yTGlzdFxuICAgICAgICBsZXQgcmVzdWx0X2RhdGEgPSBET0NUT1JTXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNsaW5pY19jYXJkKSB7XG4gICAgICAgICAgICByZXN1bHRfbGlzdCA9IGhvc3BpdGFsTGlzdFxuICAgICAgICAgICAgcmVzdWx0X2RhdGEgPSBIT1NQSVRBTFNcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYXJkX0lEID0gbnVsbFxuICAgICAgICBsZXQgYm9va2FibGVEb2N0b3JzID0gdHJ1ZVxuXG4gICAgICAgIHJlc3VsdF9saXN0Lm1hcCgoY2FyZElkLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0RmxhZyAmJiByZXN1bHRfZGF0YVtjYXJkSWRdICYmICFyZXN1bHRfZGF0YVtjYXJkSWRdLmhvc3BpdGFsc1swXS5lbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyAmJiB0aGlzLnByb3BzLnNlb0ZyaWVuZGx5ICYmIHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctc3B0bGl0Y2l0JykgJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhcmRfSUQgPSBjYXJkSWRcbiAgICAgICAgICAgICAgICBkZXRlY3RGbGFnID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdF9kYXRhW2NhcmRJZF0gJiYgIXJlc3VsdF9kYXRhW2NhcmRJZF0uaG9zcGl0YWxzWzBdLmVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nICYmIHRoaXMucHJvcHMuc2VvRnJpZW5kbHkgJiYgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1zcHRsaXRjaXQnKSAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvb2thYmxlRG9jdG9ycyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzcG9uc29yRGF0YSA9IHRoaXMucHJvcHMuc3BvbnNvckRhdGEgJiYgdGhpcy5wcm9wcy5zcG9uc29yRGF0YS5sZW5ndGggPyB0aGlzLnByb3BzLnNwb25zb3JEYXRhWzBdIDogbnVsbFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiByZWY9XCJjaGVja0lmRXhpc3RzXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlbmRlckJsb2NrID8gPExvYWRlciAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjYXJkTWFpblBhZGRpbmdSbXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VhcmNoX2NvbnRlbnQgJiYgdGhpcy5wcm9wcy5zZWFyY2hfY29udGVudCAhPSAnJyAmJiBwYXJzZUludCh0aGlzLnByb3BzLnBhZ2UpID09IDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWNhcmQtY29sbHBhc2UgZC1ub25lIGQtbWQtYmxvY2sgbWItMFwiIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzVweCcsIG1hcmdpblRvcDogJzVweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUucmVhZE1vcmV9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5zZWFyY2hfY29udGVudCB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWFkTW9yZSAmJiB0aGlzLnN0YXRlLnJlYWRNb3JlICE9ICcnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmQtbW9yZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyByZWFkTW9yZTogJycgfSl9PlJlYWQgTW9yZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlYWRNb3JlID09ICcnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmQtbW9yZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2Nyb2xsLmJpbmQodGhpcyl9PlJlYWQgTGVzczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdkb2N0b3Jfc2VhcmNoX3BhZ2UnKS5sZW5ndGggJiYgIXRoaXMuc3RhdGUuaXNfaW5zdXJlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lckNhcm91c2VsIHsuLi50aGlzLnByb3BzfSBzbGlkZXJMb2NhdGlvbj1cImRvY3Rvcl9zZWFyY2hfcGFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTdGFydD17c3RhcnRfcGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZT17dGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU9e3RoaXMuc3RhdGUuaGFzTW9yZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VXaW5kb3c9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbExvYWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BvbnNvckRhdGEgJiYgc3BvbnNvckRhdGEubmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGluaWMtY2FyZCBtYi0zXCIgb25DbGljaz17KCkgPT4gdGhpcy5uYXZpZ2F0ZVRvSG9zcGl0YWwoc3BvbnNvckRhdGEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsbmMtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNzdG1Eb2NOYW1lXCI+e3Nwb25zb3JEYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jLWRldGFpbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwb25zb3JEYXRhLmhvc3BpdGFsX2ltYWdlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jLWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnODBweCcgfX0gY2xhc3NOYW1lPVwiY2xuYy1zdGMtaW1nXCIgc3JjPXtzcG9uc29yRGF0YS5ob3NwaXRhbF9pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2MtY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YCR7c3BvbnNvckRhdGEuYWxsX2RvY3RvcnMgPyBzcG9uc29yRGF0YS5hbGxfZG9jdG9ycy5sZW5ndGggOiAnJ30gRG9jdG9yc2B9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG9uc29yRGF0YS5vcGRfdGltaW5ncyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cHg7XCIgfX0+T1BEIFRpbWluZ3MgOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpbWcgY2xhc3NOYW1lPVwiY3N0bVRpbWVJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YXRjaC1kYXRlLnN2Z1wifSAvPiB7c3BvbnNvckRhdGEub3BkX3RpbWluZ3N9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvYy1ydG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwb25zb3JEYXRhLmF2Z19yYXRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmdTdGFycyBhdmVyYWdlX3JhdGluZz17cGFyc2VJbnQoc3BvbnNvckRhdGEuYXZnX3JhdGluZyl9IHJhdGluZ19jb3VudD17Jyd9IHdpZHRoPVwiMTJweFwiIGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwb25zb3JEYXRhLnJhdGluZyAmJiBzcG9uc29yRGF0YS5yYXRpbmcubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2AoJHtzcG9uc29yRGF0YS5yYXRpbmcubGVuZ3RofSlgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNsbmMtc3Buc3JcIj5TUE9OU09SRUQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdG0tY3BuXCI+VXB0byAzMCUgT2ZmIDwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNzdG0tYm9vay1idG4gY2xuYy1idG5cIj5Cb29rIEFwcG9pbnRtZW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwb25zb3JEYXRhLmhvc3BpdGFsX3NlcnZpY2VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsbmMtY2hwcy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG5jLWNocHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BvbnNvckRhdGEuaG9zcGl0YWxfc2VydmljZXMubWFwKChzZXJ2LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5IDwgNCA/IDxzcGFuIGtleT17c2Vydi5pZH0+e3NlcnYubmFtZX08L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwb25zb3JEYXRhLmhvc3BpdGFsX3NlcnZpY2VzICYmIHNwb25zb3JEYXRhLmhvc3BpdGFsX3NlcnZpY2VzLmxlbmd0aCA+IDQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG5jLWFsbC1zcnZjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YCsgJHtzcG9uc29yRGF0YS5ob3NwaXRhbF9zZXJ2aWNlcy5sZW5ndGggLSA0fSBNb3JlYH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjbG4tbG9jLXBhclwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbmV3LWxvYy1pY28uc3ZnXCJ9IC8+e3Nwb25zb3JEYXRhLnNob3J0X2FkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRfbGlzdC5tYXAoKGNhcmRJZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRfZGF0YVtjYXJkSWRdKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9PSAxICYmICEhIWJvb2thYmxlRG9jdG9ycyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGF1dG8tbG9jYXRpb24td2lkZ2V0IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgYXV0by1sb2NhdGlvbi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9sb2NhdGlvbi1jb2xvcmVkLnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlNlZSB7dGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5uYW1lfSB3aXRoIGdyZWF0IGRpc2NvdW50cyBuZWFyIHlvdTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dG8tbG9jYXRpb24tYnRuIGZ3LTUwMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZGV0ZWN0TG9jYXRpb24oJ1NwdGxpdGNpdCcpfSA+RGV0ZWN0IExvY2F0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPT0gMCAmJiB0aGlzLnByb3BzLnNlb0ZyaWVuZGx5ICYmIHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctc3B0Y2l0JykgJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gYXV0by1sb2NhdGlvbi13aWRnZXQgbXJiLTIwIG1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGF1dG8tbG9jYXRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9sb2NhdGlvbi1jb2xvcmVkLnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHByLTQgZC1pbmxpbmVcIj5TaG93PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZnctNTAwIGQtaW5saW5lXCIgc3R5bGU9e3tmb250U2l6ZTogJzE0cHgnfX0+e3RoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0ubmFtZX0gbmVhciBtZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0by1sb2NhdGlvbi1idG4gZnctNTAwXCIgb25DbGljaz17KCkgPT4gdGhpcy5kZXRlY3RMb2NhdGlvbignU3B0Y2l0Jyl9ID5EZXRlY3QgTG9jYXRpb248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID09IDQgJiYgKCF0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSB8fCAhdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkubGVuZ3RoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1zdWItZmlsdGVyLWNvbnRhaW5lciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GaWx0ZXIgYnkgPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+QXZhaWxhYmlsaXR5IDwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgc29ydC1tb3JlLWZpbHRlclwiIG9uQ2xpY2s9e3RoaXMudmlld01vcmVDbGlja2VkLmJpbmQodGhpcyl9Pk1vcmUgZmlsdGVyczwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1zYi1idG4tY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGggJiYgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkuaW5kZXhPZignMScpID4gLTEgPyAnc3J0LWFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLmFwcGx5UXVpY2tGaWx0ZXJzLmJpbmQodGhpcywgJ2F2YWlsYWJpbGl0eScsICcxJywgdHJ1ZSl9PlRvZGF5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYXZhaWxhYmlsaXR5ICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5pbmRleE9mKCcyJykgPiAtMSA/ICdzcnQtYWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlcnMuYmluZCh0aGlzLCAnYXZhaWxhYmlsaXR5JywgJzInLCB0cnVlKX0+VG9tb3Jyb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkgJiYgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkubGVuZ3RoICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5LmluZGV4T2YoJzMnKSA+IC0xID8gJ3NydC1hY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy5hcHBseVF1aWNrRmlsdGVycy5iaW5kKHRoaXMsICdhdmFpbGFiaWxpdHknLCAnMycsIHRydWUpfT5OZXh0IDMgRGF5czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FyZF9JRCkgJiYgKGNhcmRfSUQgPT0gY2FyZElkKSAmJiAoYm9va2FibGVEb2N0b3JzKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGF1dG8tbG9jYXRpb24td2lkZ2V0IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgYXV0by1sb2NhdGlvbi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9sb2NhdGlvbi1jb2xvcmVkLnN2Zyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPlNlZSBtb3JlIHt0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLm5hbWV9IG5lYXIgeW91PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0by1sb2NhdGlvbi1idG4gZnctNTAwXCIgb25DbGljaz17KCkgPT4gdGhpcy5kZXRlY3RMb2NhdGlvbignU3B0bGl0Y2l0Jyl9ID5EZXRlY3QgTG9jYXRpb248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAmJiByZXN1bHRfbGlzdCAmJiByZXN1bHRfbGlzdC5sZW5ndGggPiA1ICYmIGkgPT0gMyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIHJlZmVyRG9jaW1nXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUmVmZXJEb2N0b3JMaXN0JywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdyZWZlci1kb2N0b3ItbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2RvY3RvcnNpZ251cD9tZW1iZXJfdHlwZT0xJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yZWZybGJuci5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pbnN1cmFuY2Vfc3RhdHVzICE9IDEgJiYgIXRoaXMuc3RhdGUuc29ydF9vcmRlciAmJiAoKGkgPT0gNiAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSAmJiAhdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkubGVuZ3RoKSB8fCAoaSA9PSAzICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5ICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LXN1Yi1maWx0ZXItY29udGFpbmVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvcnQgYnkgPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBzb3J0LW1vcmUtZmlsdGVyXCIgb25DbGljaz17dGhpcy52aWV3TW9yZUNsaWNrZWQuYmluZCh0aGlzKX0+TW9yZSBmaWx0ZXJzPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3J0LXNiLWJ0bi1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuc29ydF9vbiA9PSAnZmVlcycgJiYgdGhpcy5zdGF0ZS5zb3J0X29yZGVyID09ICdhc2MnID8gJ3NydC1hY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy5hcHBseVF1aWNrRmlsdGVycy5iaW5kKHRoaXMsICdzb3J0X29uJywgJ3ByaWNlX2FzYycsIGZhbHNlKX0+UHJpY2UgTG93IHRvIEhpZ2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5zb3J0X29uID09ICdmZWVzJyAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgPT0gJ2Rlc2MnID8gJ3NydC1hY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy5hcHBseVF1aWNrRmlsdGVycy5iaW5kKHRoaXMsICdzb3J0X29uJywgJ3ByaWNlX2Rlc2MnLCBmYWxzZSl9PlByaWNlIEhpZ2ggdG8gTG93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPT0gNSAmJiB0aGlzLnByb3BzLm9mZmVyTGlzdCAmJiB0aGlzLnByb3BzLm9mZmVyTGlzdC5maWx0ZXIoeCA9PiB4LnNsaWRlcl9sb2NhdGlvbiA9PT0gJ2RvY3Rvcl9zZWFyY2hfcGFnZScpLmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5pc19pbnN1cmVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lckNhcm91c2VsIHsuLi50aGlzLnByb3BzfSBzbGlkZXJMb2NhdGlvbj1cImRvY3Rvcl9zZWFyY2hfcGFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udC1oZWlnaHQgaG9tZS1wYWdlLWJhbm5lci1kaXYgbWItMyBtci0wIGJhbm5lci1tZC1tYXJnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZXJCYW5uZXIgYmFubmVyLWNhcm91c2VsLWRpdiBkLW1kLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkhlaWdodCBtLTBcIiBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjVweCFpbXBvcnRhbnRcIn19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyQ2Fyb3VzZWwgey4uLnRoaXMucHJvcHN9IHNsaWRlckxvY2F0aW9uPVwiZG9jdG9yX3NlYXJjaF9wYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsaW5pY19jYXJkID8gPENsaW5pY1Jlc3VsdENhcmQgey4uLnRoaXMucHJvcHN9IGRldGFpbHM9e3Jlc3VsdF9kYXRhW2NhcmRJZF19IGtleT17aX0gcmFuaz17aX0gLz4gOiA8RG9jdG9yUmVzdWx0Q2FyZCB7Li4udGhpcy5wcm9wc30gZGV0YWlscz17cmVzdWx0X2RhdGFbY2FyZElkXX0ga2V5PXtpfSByYW5rPXtpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zICYmIHRoaXMucHJvcHMuc2ltaWxhcl9zcGVjaWFsaXphdGlvbnMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuc29ydF9vcmRlciAmJiAoIXRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5IHx8ICF0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGgpICYmIChpID09IDcgfHwgdGhpcy5wcm9wcy5jb3VudCAtIDEgPT0gaSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuU2ltaWxhclNwZWNpYWxpemF0aW9uRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9ucyAmJiB0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zLmxlbmd0aCAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgJiYgKHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5IHx8IHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCkgJiYgdGhpcy5wcm9wcy5jb3VudCA8IDggJiYgaSA9PSAodGhpcy5wcm9wcy5jb3VudCAtIDEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlNpbWlsYXJTcGVjaWFsaXphdGlvbkRhdGEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2ltaWxhcl9zcGVjaWFsaXphdGlvbnMgJiYgdGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9ucy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5zb3J0X29yZGVyICYmICh0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSB8fCB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGgpICYmIHRoaXMucHJvcHMuY291bnQgPCA4ICYmIGkgPT0gMyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5TaW1pbGFyU3BlY2lhbGl6YXRpb25EYXRhKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zICYmIHRoaXMucHJvcHMuc2ltaWxhcl9zcGVjaWFsaXphdGlvbnMubGVuZ3RoICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlciAmJiAodGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkgfHwgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkubGVuZ3RoKSAmJiBpID09IDMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuU2ltaWxhclNwZWNpYWxpemF0aW9uRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISEhY2FyZF9JRCAmJiBpID09IHJlc3VsdF9saXN0Lmxlbmd0aCAtIDEgJiYgdGhpcy5wcm9wcy5zZW9GcmllbmRseSAmJiB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLXNwdGxpdGNpdCcpICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhdXRvLWxvY2F0aW9uLXdpZGdldCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGF1dG8tbG9jYXRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvbG9jYXRpb24tY29sb3JlZC5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5TZWUgbW9yZSB7dGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5uYW1lfSBuZWFyIHlvdTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dG8tbG9jYXRpb24tYnRuIGZ3LTUwMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZGV0ZWN0TG9jYXRpb24oJ1NwdGxpdGNpdCcpfSA+RGV0ZWN0IExvY2F0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGVyIGNsYXNzVHlwZT1cImxvYWRlclBhZ2luYXRpb25cIiAvPiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERvY3RvcnNMaXN0XG4iLCJpbXBvcnQgRG9jdG9yTGlzdCBmcm9tICcuL0RvY3RvcnNMaXN0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JMaXN0IiwiaW1wb3J0IFNlYXJjaFJlc3VsdHNWaWV3IGZyb20gJy4vU2VhcmNoUmVzdWx0c1ZpZXcuanMnXG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHNWaWV3IiwiaW1wb3J0IE5ld1RvcEJhciBmcm9tICcuL25ld1RvcEJhci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTmV3VG9wQmFyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmFuZ2UgZnJvbSAncmMtc2xpZGVyL2xpYi9SYW5nZSc7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2NhdGlvbkVsZW1lbnRzIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvbkVsZW1lbnRzJ1xuaW1wb3J0IExvY2F0aW9uUG9wdXAgZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uUG9wdXAnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5jbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYW5jaG9yRWw6IG51bGwsXG4gICAgICAgICAgICBpc19pbnN1cmVkOiBwcm9wcy5maWx0ZXJDcml0ZXJpYSAmJiBwcm9wcy5maWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkID8gcHJvcHMuZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCA6IGZhbHNlLFxuICAgICAgICAgICAgZHJvcGRvd25fdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBob3NwaXRhbF9pZDogcHJvcHMuZmlsdGVyQ3JpdGVyaWEgJiYgcHJvcHMuZmlsdGVyQ3JpdGVyaWEuaG9zcGl0YWxfaWQgPyBwcm9wcy5maWx0ZXJDcml0ZXJpYS5ob3NwaXRhbF9pZCA6ICcnLFxuICAgICAgICAgICAgLy9OZXcgZmlsdGVyc1xuICAgICAgICAgICAgcHJldmlvdXNfZmlsdGVyczoge30sXG4gICAgICAgICAgICBzb3J0X29uOiAnJyxcbiAgICAgICAgICAgIHNvcnRfb3JkZXI6ICcnLFxuICAgICAgICAgICAgYXZnX3JhdGluZ3M6ICcnLFxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiBbXSxcbiAgICAgICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgICAgICBzaXRzX2F0X2NsaW5pYzogZmFsc2UsXG4gICAgICAgICAgICBzaXRzX2F0X2hvc3BpdGFsOiBmYWxzZSxcbiAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uOiBbXSxcbiAgICAgICAgICAgIHNob3J0VVJMOiBcIlwiLFxuICAgICAgICAgICAgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgb3ZlcmxheVZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgcXVpY2tGaWx0ZXI6IHt9LFxuICAgICAgICAgICAgSG9zcEZpbHRlcjogW10sXG4gICAgICAgICAgICBIb3NwRmlsdGVyT25Gb3Vjc0RhdGE6IFtdLFxuICAgICAgICAgICAgc2VsZWN0ZWRIb3NwaXRhbElkczogW10sXG4gICAgICAgICAgICBoaWRlSG9zcEZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgICBTcGVjaWFsaXR5RmlsdGVyOiBbXSxcbiAgICAgICAgICAgIFNwZWNpYWxpdHlGaWx0ZXJPbkZvY3VzRGF0YTogW10sXG4gICAgICAgICAgICBzZWxlY3RlZFNwZWNpYWxpemF0aW9uSWRzOiBbXSxcbiAgICAgICAgICAgIGhpZGVTcGVjRmlsdGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZGVPdGhlckZpbHRlcnM6IGZhbHNlLFxuICAgICAgICAgICAgZmlsdGVyU2VhcmNoU3RyaW5nOicnLFxuICAgICAgICAgICAgc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkczpbXSxcbiAgICAgICAgICAgIGRlZmF1bHRTcGVjaWFsaXphdGlvbklkczpbXSxcbiAgICAgICAgICAgIHNlYXJjaENpdGllczpbXVxuICAgICAgICAgICAgLy9zaG93UG9wdXBDb250YWluZXI6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnByb3BzLmZpbHRlckNyaXRlcmlhLCBzZWxlY3RlZEhvc3BpdGFsSWRzOiBwcm9wcy5maWx0ZXJDcml0ZXJpYS5ob3NwaXRhbF9pZCA/IHByb3BzLmZpbHRlckNyaXRlcmlhLmhvc3BpdGFsX2lkIDogW10sIHF1aWNrRmlsdGVyOiBwcm9wcy5xdWlja0ZpbHRlciB8fCB7fSB9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5xdWlja0ZpbHRlciAmJiB0aGlzLnN0YXRlLnF1aWNrRmlsdGVyLnZpZXdNb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0RmlsdGVyQ2xpY2tlZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBhbGxSZWFkeVNlbGVjdGVkU3BlY2lhbGl6YXRpb25JZCA9IFtdXG4gICAgICAgIGlmKHByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgcHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubWFwKChzcGVjX2lkLCBrKSA9PntcbiAgICAgICAgICAgICAgICBhbGxSZWFkeVNlbGVjdGVkU3BlY2lhbGl6YXRpb25JZC5wdXNoKHNwZWNfaWQuaWQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVmYXVsdFNwZWNpYWxpemF0aW9uSWRzOmFsbFJlYWR5U2VsZWN0ZWRTcGVjaWFsaXphdGlvbklkfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMubG9jYXRpb25UeXBlICYmICFwcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgocHJvcHMuc2VvRGF0YSAmJiBwcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB8fCBwcm9wcy5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5mcm9tVmlwKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9wQmFyUmVmKHRoaXMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEsIHNlbGVjdGVkSG9zcGl0YWxJZHM6IHRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEuaG9zcGl0YWxfaWQgPyB0aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhLmhvc3BpdGFsX2lkIDogW10gfSlcbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICAgICAgaWYgKCh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB8fCB0aGlzLnByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgJiYgdGhpcy5wcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IHRydWUsIG92ZXJsYXlWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXBwbHlGaWx0ZXJzKCkge1xuICAgICAgICBsZXQgZmlsdGVyU3RhdGUgPSB7XG4gICAgICAgICAgICBzb3J0X29uOiB0aGlzLnN0YXRlLnNvcnRfb24sXG4gICAgICAgICAgICBzb3J0X29yZGVyOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIsXG4gICAgICAgICAgICBnZW5kZXI6IHRoaXMuc3RhdGUuZ2VuZGVyLFxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSxcbiAgICAgICAgICAgIGF2Z19yYXRpbmdzOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzLFxuICAgICAgICAgICAgc2l0c19hdF9jbGluaWM6IHRoaXMuc3RhdGUuc2l0c19hdF9jbGluaWMsXG4gICAgICAgICAgICBzaXRzX2F0X2hvc3BpdGFsOiB0aGlzLnN0YXRlLnNpdHNfYXRfaG9zcGl0YWwsXG4gICAgICAgICAgICBpc19pbnN1cmVkOiB0aGlzLnN0YXRlLmlzX2luc3VyZWQsXG4gICAgICAgICAgICBob3NwaXRhbF9pZDogdGhpcy5zdGF0ZS5zZWxlY3RlZEhvc3BpdGFsSWRzLFxuICAgICAgICAgICAgc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkczp0aGlzLnN0YXRlLnNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHNcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdGaWx0ZXJDbGljaycsICdBY3Rpb24nOiAnQ2xpY2tlZCBvbiBGaWx0ZXInLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtZmlsdGVyLWNsaWNrZWQnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnYXZhaWxhYmlsaXR5JzogdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHksICdzaXRzX2F0X2NsaW5pYyc6IHRoaXMuc3RhdGUuc2l0c19hdF9jbGluaWMsICdzaXRzX2F0X2hvc3BpdGFsJzogdGhpcy5zdGF0ZS5zaXRzX2F0X2hvc3BpdGFsLCAnZ2VuZGVyJzogdGhpcy5zdGF0ZS5nZW5kZXIsICdzb3J0X29yZGVyJzogdGhpcy5zdGF0ZS5zb3J0X29yZGVyIHx8ICcnLCAnc29ydF9vbic6IHRoaXMuc3RhdGUuc29ydF9vbiB8fCAnJywgJ3JhdGluZyc6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MsIGhvc3BpdGFsX2lkOiB0aGlzLnN0YXRlLnNlbGVjdGVkSG9zcGl0YWxJZHMgfHwgJycsIHNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZDogdGhpcy5zdGF0ZS5zcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzIHx8ICcnLCBzcGVjaWFsaXphdGlvbnM6IHRoaXMuc3RhdGUuZGVmYXVsdFNwZWNpYWxpemF0aW9uSWRzIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBsZXQgaWZBbnlGaWx0ZXJBcHBsaWVkID0gdGhpcy5pc0RhdGFGaWx0ZXJlZCh7fSwgdHJ1ZSlcbiAgICAgICAgaWYgKGlmQW55RmlsdGVyQXBwbGllZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVyU3RhdGUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJvcGRvd25fdmlzaWJsZTogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDbG9zZShyZXNldCA9IGZhbHNlLCBlKSB7XG5cbiAgICAgICAgaWYgKHJlc2V0KSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Jlc2V0T3BkRmlsdGVyJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncmVzZXQtb3BkLWZpbHRlcicsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdhdmFpbGFiaWxpdHknOiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSwgJ3NpdHNfYXRfY2xpbmljJzogdGhpcy5zdGF0ZS5zaXRzX2F0X2NsaW5pYywgJ3NpdHNfYXRfaG9zcGl0YWwnOiB0aGlzLnN0YXRlLnNpdHNfYXRfaG9zcGl0YWwsICdnZW5kZXInOiB0aGlzLnN0YXRlLmdlbmRlciwgJ3NvcnRfb3JkZXInOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgfHwgJycsICdzb3J0X29uJzogdGhpcy5zdGF0ZS5zb3J0X29uIHx8ICcnLCAncmF0aW5nJzogdGhpcy5zdGF0ZS5hdmdfcmF0aW5nc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIGxldCByZXNldEZpbHRlcnMgPSB7XG4gICAgICAgICAgICAgICAgc29ydF9vbjogJycsXG4gICAgICAgICAgICAgICAgc29ydF9vcmRlcjogJycsXG4gICAgICAgICAgICAgICAgYXZnX3JhdGluZ3M6ICcnLFxuICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eTogW10sXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiAnJyxcbiAgICAgICAgICAgICAgICBzaXRzX2F0X2NsaW5pYzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2l0c19hdF9ob3NwaXRhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb246IFtdLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSG9zcGl0YWxJZHM6W10sXG4gICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkczpbXVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAuLi5yZXNldEZpbHRlcnMsXG4gICAgICAgICAgICAgICAgcXVpY2tGaWx0ZXI6IHt9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Nsb3NlT3BkRmlsdGVyJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2xvc2Utb3BkLWZpbHRlcicsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdhdmFpbGFiaWxpdHknOiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSwgJ3NpdHNfYXRfY2xpbmljJzogdGhpcy5zdGF0ZS5zaXRzX2F0X2NsaW5pYywgJ3NpdHNfYXRfaG9zcGl0YWwnOiB0aGlzLnN0YXRlLnNpdHNfYXRfaG9zcGl0YWwsICdnZW5kZXInOiB0aGlzLnN0YXRlLmdlbmRlciwgJ3NvcnRfb3JkZXInOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgfHwgJycsICdzb3J0X29uJzogdGhpcy5zdGF0ZS5zb3J0X29uIHx8ICcnLCAncmF0aW5nJzogdGhpcy5zdGF0ZS5hdmdfcmF0aW5nc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlLCBoaWRlT3RoZXJGaWx0ZXJzOiBmYWxzZSwgaGlkZUhvc3BGaWx0ZXI6IGZhbHNlLCBoaWRlU3BlY0ZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wcmV2aW91c19maWx0ZXJzLFxuICAgICAgICAgICAgICAgIHF1aWNrRmlsdGVyOiB7fVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vdGhpcy5wcm9wcy5yZXNldFF1aWNrRmlsdGVycygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVBbGxGaWx0ZXJzKHR5cGUsIHZhbCwgaXNBcnJheSA9IGZhbHNlLCBlKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHZhbFxuICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkVmFsID0gW10uY29uY2F0KHRoaXMuc3RhdGVbdHlwZV0pIHx8IFtdXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZFZhbC5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PSB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKHZhbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZS5pbmNsdWRlcygnc29ydF9vbicpKSB7XG5cbiAgICAgICAgICAgIGlmICh2YWwuaW5jbHVkZXMoJ3ByaWNlX2FzYycpIHx8IHZhbC5pbmNsdWRlcygncHJpY2VfZGVzYycpKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVt0eXBlXSA9PSAnZmVlcycgJiYgKCh0aGlzLnN0YXRlWydzb3J0X29yZGVyJ10gPT0gJ2FzYycgJiYgdmFsLmluY2x1ZGVzKCdwcmljZV9hc2MnKSkgfHwgKHRoaXMuc3RhdGVbJ3NvcnRfb3JkZXInXSA9PSAnZGVzYycgJiYgdmFsLmluY2x1ZGVzKCdwcmljZV9kZXNjJykpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29ydF9vbjogbnVsbCwgc29ydF9vcmRlcjogbnVsbCB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0X29uOiAnZmVlcycsIHNvcnRfb3JkZXI6IHZhbC5pbmNsdWRlcygncHJpY2VfYXNjJykgPyAnYXNjJyA6ICdkZXNjJyB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29ydF9vbjogdGhpcy5zdGF0ZVt0eXBlXSA9PSB2YWx1ZSA/IG51bGwgOiB2YWx1ZSwgc29ydF9vcmRlcjogbnVsbCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUuaW5jbHVkZXMoJ3NpdHNfYXRfY2xpbmljJykgfHwgdHlwZS5pbmNsdWRlcygnc2l0c19hdF9ob3NwaXRhbCcpKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFt0eXBlXTogIXRoaXMuc3RhdGVbdHlwZV0gfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICdzaXRzX2F0X2NsaW5pYyc6IHR5cGUuaW5jbHVkZXMoJ3NpdHNfYXRfY2xpbmljJykgPyB2YWx1ZSA6ICF2YWx1ZSwgJ3NpdHNfYXRfaG9zcGl0YWwnOiB0eXBlLmluY2x1ZGVzKCdzaXRzX2F0X2hvc3BpdGFsJykgPyB2YWx1ZSA6ICF2YWx1ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFt0eXBlXTogdGhpcy5zdGF0ZVt0eXBlXSA9PSB2YWx1ZSA/ICcnIDogdmFsdWUgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc29ydEZpbHRlckNsaWNrZWQoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdPcGRTb3J0RmlsdGVyQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29wZC1zb3J0LWZpbHRlci1jbGlja2VkJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ2F2YWlsYWJpbGl0eSc6IHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5LCAnc2l0c19hdF9jbGluaWMnOiB0aGlzLnN0YXRlLnNpdHNfYXRfY2xpbmljLCAnc2l0c19hdF9ob3NwaXRhbCc6IHRoaXMuc3RhdGUuc2l0c19hdF9ob3NwaXRhbCwgJ2dlbmRlcic6IHRoaXMuc3RhdGUuZ2VuZGVyLCAnc29ydF9vcmRlcic6IHRoaXMuc3RhdGUuc29ydF9vcmRlciB8fCAnJywgJ3NvcnRfb24nOiB0aGlzLnN0YXRlLnNvcnRfb24gfHwgJycsICdyYXRpbmcnOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgbGV0IHNlYXJjaFVybCA9IG51bGxcbiAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLnByb3BzLnBhZ2VcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5wcm9wc1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1zcHRjaXQnKSB8fCB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLXNwdGxpdGNpdCcpIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctaXBkZHAnKSkge1xuICAgICAgICAgICAgc2VhcmNoVXJsID0gdGhpcy5wcm9wcy5tYXRjaC51cmwudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgc2VhcmNoVXJsID0gc2VhcmNoVXJsLnNwbGl0KCcvJylcbiAgICAgICAgICAgIHNlYXJjaFVybCA9IHNlYXJjaFVybC5sZW5ndGg+MT9zZWFyY2hVcmxbMV06c2VhcmNoVXJsWzBdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXREb2N0b3JIb3NwaXRhbEZpbHRlcnMoc3RhdGUsIHBhZ2UsIGZhbHNlLCBzZWFyY2hVcmwsICguLi5yZXNwKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcCAmJiByZXNwWzBdLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBIb3NwRmlsdGVyOiByZXNwWzBdLnJlc3VsdCwgSG9zcEZpbHRlck9uRm91Y3NEYXRhOiByZXNwWzBdLnJlc3VsdCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0RG9jdG9ySG9zcGl0YWxTcGVjaWFsaXR5KHN0YXRlLCBwYWdlLCBmYWxzZSwgc2VhcmNoVXJsLCAoLi4ucmVzcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3AgJiYgcmVzcFswXS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgU3BlY2lhbGl0eUZpbHRlcjogcmVzcFswXS5yZXN1bHQsIFNwZWNpYWxpdHlGaWx0ZXJPbkZvY3VzRGF0YTogcmVzcFswXS5yZXN1bHQgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgbGV0IGN1cnJlbnRGaWx0ZXJzID0ge1xuICAgICAgICAgICAgc29ydF9vbjogdGhpcy5zdGF0ZS5zb3J0X29uLFxuICAgICAgICAgICAgc29ydF9vcmRlcjogdGhpcy5zdGF0ZS5zb3J0X29yZGVyLFxuICAgICAgICAgICAgYXZnX3JhdGluZ3M6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MsXG4gICAgICAgICAgICBhdmFpbGFiaWxpdHk6IFtdLmNvbmNhdCh0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSksXG4gICAgICAgICAgICBnZW5kZXI6IHRoaXMuc3RhdGUuZ2VuZGVyLFxuICAgICAgICAgICAgc2l0c19hdF9jbGluaWM6IHRoaXMuc3RhdGUuc2l0c19hdF9jbGluaWMsXG4gICAgICAgICAgICBzaXRzX2F0X2hvc3BpdGFsOiB0aGlzLnN0YXRlLnNpdHNfYXRfaG9zcGl0YWwsXG4gICAgICAgICAgICBzcGVjaWFsaXphdGlvbjogW10uY29uY2F0KHRoaXMuc3RhdGUuc3BlY2lhbGl6YXRpb24pLFxuICAgICAgICAgICAgc2VsZWN0ZWRIb3NwaXRhbElkczogW10uY29uY2F0KHRoaXMuc3RhdGUuc2VsZWN0ZWRIb3NwaXRhbElkcyksXG4gICAgICAgICAgICBzcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzOiBbXS5jb25jYXQodGhpcy5zdGF0ZS5zcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bl92aXNpYmxlOiB0cnVlLCBwcmV2aW91c19maWx0ZXJzOiBjdXJyZW50RmlsdGVycyB9KVxuICAgIH1cblxuICAgIGlzRGF0YUZpbHRlcmVkKGZpbHRlckRhdGEgPSB7fSwgY2hlY2tJZkFueUZpbHRlckFwcGxpbGVkID0gZmFsc2UpIHtcblxuICAgICAgICBpZiAoY2hlY2tJZkFueUZpbHRlckFwcGxpbGVkKSB7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlckNvdW50ID0gMFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZpbHRlciBpbiB0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnMpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyLmluY2x1ZGVzKCdhdmFpbGFiaWxpdHknKSB8fCBmaWx0ZXIuaW5jbHVkZXMoJ3NwZWNpYWxpemF0aW9uJykgfHwgZmlsdGVyLmluY2x1ZGVzKCdzZWxlY3RlZEhvc3BpdGFsSWRzJykpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJldmlvdXNfZmlsdGVyc1tmaWx0ZXJdICYmIHRoaXMuc3RhdGVbZmlsdGVyXS5sZW5ndGggIT0gdGhpcy5zdGF0ZS5wcmV2aW91c19maWx0ZXJzW2ZpbHRlcl0ubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudCsrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYXJyRmxpdGVyID0gMDsgYXJyRmxpdGVyIDwgdGhpcy5zdGF0ZVtmaWx0ZXJdLmxlbmd0aDsgYXJyRmxpdGVyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJldmlvdXNfZmlsdGVyc1tmaWx0ZXJdLmluZGV4T2YodGhpcy5zdGF0ZVtmaWx0ZXJdW2FyckZsaXRlcl0pID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudCsrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVbZmlsdGVyXSAhPSB0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnNbZmlsdGVyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlckNvdW50XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZmlsdGVyRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhdmdfcmF0aW5nczogJycsXG4gICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiBbXSxcbiAgICAgICAgICAgICAgICBnZW5kZXI6ICcnLFxuICAgICAgICAgICAgICAgIGhvc3BpdGFsX3R5cGU6ICcnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSG9zcGl0YWxJZHM6JycsXG4gICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkczpbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZmlsdGVyQ291bnQgPSAwXG4gICAgICAgICAgICBmb3IgKGxldCBmaWx0ZXIgaW4gZmlsdGVyRGF0YSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlci5pbmNsdWRlcygnaG9zcGl0YWxfdHlwZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlWydzaXRzX2F0X2NsaW5pYyddIHx8IHRoaXMuc3RhdGVbJ3NpdHNfYXRfaG9zcGl0YWwnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIuaW5jbHVkZXMoJ2F2YWlsYWJpbGl0eScpIHx8IGZpbHRlci5pbmNsdWRlcygnc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2ZpbHRlcl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudCsrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlci5pbmNsdWRlcygnc2VsZWN0ZWRIb3NwaXRhbElkcycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGVbJ3NlbGVjdGVkSG9zcGl0YWxJZHMnXSAhPScnIHx8IHRoaXMuc3RhdGVbJ3NlbGVjdGVkSG9zcGl0YWxJZHMnXS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJEYXRhW2ZpbHRlcl0gIT0gdGhpcy5zdGF0ZVtmaWx0ZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50KytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyQ291bnRcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDcml0ZXJpYVN0cmluZyhzZWxlY3RlZENyaXRlcmlhcykge1xuICAgICAgICBpZiAoc2VsZWN0ZWRDcml0ZXJpYXMgJiYgc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgaXNfZ3JvdXBfaWRzX2V4aXN0ID0gc2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdncm91cF9pZHMnKVxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRGF0YVZpZXcgPSBpc19ncm91cF9pZHNfZXhpc3QubGVuZ3RoID8gaXNfZ3JvdXBfaWRzX2V4aXN0IDogc2VsZWN0ZWRDcml0ZXJpYXNcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkRGF0YVZpZXcucmVkdWNlKChmaW5hbCwgY3VyciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWwgKz0gJywgJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbCArPSBgJHtjdXJyLm5hbWV9YFxuICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFxuICAgICAgICAgICAgfSwgXCJcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvVG9Mb2NhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWFyY2hDaXRpZXM6IFtdXG4gICAgICAgIH0pXG4gICAgICAgIGxldCByZWRpcmVjdF90byA9IFwiXCJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnc3B0Y2l0JykgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdzcHRsaXRjaXQnKSkge1xuICAgICAgICAgICAgcmVkaXJlY3RfdG8gPSBcIi9vcGQvc2VhcmNocmVzdWx0c1wiXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbG9jYXRpb25fdXJsID0gJy9sb2NhdGlvbnNlYXJjaCdcbiAgICAgICAgaWYgKHJlZGlyZWN0X3RvKSB7XG4gICAgICAgICAgICBsb2NhdGlvbl91cmwgKz0gYD9yZWRpcmVjdF90bz0ke3JlZGlyZWN0X3RvfWBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnNldE5leHRTZWFyY2hDcml0ZXJpYSgpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYW5nZUxvY2F0aW9uRG9jdG9yUmVzdWx0c1BvcFVwJywgJ0FjdGlvbic6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gobG9jYXRpb25fdXJsKVxuICAgIH1cblxuICAgIG92ZXJsYXlDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG92ZXJsYXlWaXNpYmxlOiBmYWxzZSwgc2VhcmNoQ2l0aWVzOiBbXSwgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uX2VsZW1lbnQnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uX2VsZW1lbnQnKS5zdHlsZS56SW5kZXggPSAnMCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVMb2NhdGlvblBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHBvcHVwQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwQ29udGFpbmVyOiBmYWxzZSwgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHNob3J0ZW5VcmwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiArICcmZm9yY2VfbG9jYXRpb249dHJ1ZSdcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXJsU2hvcnRuZXIodXJsLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBkYXRhLnRpbnlfdXJsIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUluc3VyZWQoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvdmVyZWRVbmRlck9QREluc3VyYW5jZUNsaWNrZWQnLCAnQWN0aW9uJzogJ0NvdmVyZWRVbmRlckxBQkluc3VyYW5jZUNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb3ZlcmVkLXVuZGVyLW9wZC1pbnN1cmFuY2UtY2xpY2tlZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc19pbnN1cmVkOiAhdGhpcy5zdGF0ZS5pc19pbnN1cmVkIH0sICgpID0+IHtcblxuICAgICAgICAgICAgbGV0IGZpbHRlclN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGlzX2luc3VyZWQ6IHRoaXMuc3RhdGUuaXNfaW5zdXJlZCxcbiAgICAgICAgICAgICAgICBob3NwaXRhbF9pZDogdGhpcy5zdGF0ZS5zZWxlY3RlZEhvc3BpdGFsSWRzLFxuICAgICAgICAgICAgICAgIHNvcnRfb3JkZXI6IHRoaXMuc3RhdGUuc29ydF9vcmRlcixcbiAgICAgICAgICAgICAgICBzb3J0X29uOiB0aGlzLnN0YXRlLnNvcnRfb24sXG4gICAgICAgICAgICAgICAgYXZnX3JhdGluZ3M6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MsXG4gICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSxcbiAgICAgICAgICAgICAgICBnZW5kZXI6IHRoaXMuc3RhdGUuZ2VuZGVyLFxuICAgICAgICAgICAgICAgIHNpdHNfYXRfY2xpbmljOiB0aGlzLnN0YXRlLnNpdHNfYXRfY2xpbmljLFxuICAgICAgICAgICAgICAgIHNpdHNfYXRfaG9zcGl0YWw6IHRoaXMuc3RhdGUuc2l0c19hdF9ob3NwaXRhbCxcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXphdGlvbjogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlGaWx0ZXJzKGZpbHRlclN0YXRlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZVNwZWNpYWxpemF0aW9uKHNwZWNfaWQpIHtcbiAgICAgICAgbGV0IHRlc3RfaWRzID0gW10uY29uY2F0KHRoaXMuc3RhdGUuc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcylcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlXG4gICAgICAgIHRlc3RfaWRzID0gdGVzdF9pZHMuZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgICAgICBpZiAoeCA9PSBzcGVjX2lkKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICBpZih0ZXN0X2lkcy5sZW5ndGggIT0gNSl7XG4gICAgICAgICAgICAgICAgdGVzdF9pZHMucHVzaChzcGVjX2lkKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIk1heCA1IHNwZWNpYWxpemF0aW9uIGNhbiBiZSBzZWxlY3RlZFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IHNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHM6IHRlc3RfaWRzIH0pXG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZUZvY3VzKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWRlT3RoZXJGaWx0ZXJzOiB0cnVlLCBoaWRlU3BlY0ZpbHRlcjogdHJ1ZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZGVPdGhlckZpbHRlcnM6IHRydWUsIGhpZGVIb3NwRmlsdGVyOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDbG9zZUV4dHJhRmlsdGVyKHR5cGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZGVPdGhlckZpbHRlcnM6IGZhbHNlLCBoaWRlU3BlY0ZpbHRlcjogZmFsc2UsIGhpZGVIb3NwRmlsdGVyOiBmYWxzZSwgZmlsdGVyU2VhcmNoU3RyaW5nOicnIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlSG9zcChldmVudCkge1xuICAgICAgICBsZXQgc2VhcmNoX3N0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlclNlYXJjaFN0cmluZzpldmVudC50YXJnZXQudmFsdWV9KVxuICAgICAgICBsZXQgZmlsdGVyZWRfaG9zcF9saXN0ID0gW11cbiAgICAgICAgdGhpcy5zdGF0ZS5Ib3NwRmlsdGVyLm1hcCgoSG9zcCkgPT4ge1xuICAgICAgICAgICAgbGV0IGhvc3BfbmFtZSA9IChIb3NwLm5hbWUpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIGlmIChob3NwX25hbWUuaW5jbHVkZXMoc2VhcmNoX3N0cmluZykpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBob3NwX25hbWUuaW5kZXhPZihzZWFyY2hfc3RyaW5nKVxuICAgICAgICAgICAgICAgIGZpbHRlcmVkX2hvc3BfbGlzdC5wdXNoKHsgaWQ6IEhvc3AuaWQsIG5hbWU6IEhvc3AubmFtZSwgcmFuazogaW5kZXggfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZmlsdGVyZWRfaG9zcF9saXN0ID0gZmlsdGVyZWRfaG9zcF9saXN0LnNvcnQoKHgsIHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LnJhbmsgLSB5LnJhbmtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IEhvc3BGaWx0ZXJPbkZvdWNzRGF0YTogZmlsdGVyZWRfaG9zcF9saXN0IH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlU3BlYyhldmVudCkge1xuICAgICAgICBsZXQgc2VhcmNoX3N0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlclNlYXJjaFN0cmluZzpldmVudC50YXJnZXQudmFsdWV9KVxuICAgICAgICBsZXQgZmlsdGVyZWRfc3BlY19saXN0ID0gW11cbiAgICAgICAgdGhpcy5zdGF0ZS5TcGVjaWFsaXR5RmlsdGVyLm1hcCgoU3BlYykgPT4ge1xuICAgICAgICAgICAgbGV0IHNwZWNfbmFtZSA9IChTcGVjLm5hbWUpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIGlmIChzcGVjX25hbWUuaW5jbHVkZXMoc2VhcmNoX3N0cmluZykpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBzcGVjX25hbWUuaW5kZXhPZihzZWFyY2hfc3RyaW5nKVxuICAgICAgICAgICAgICAgIGZpbHRlcmVkX3NwZWNfbGlzdC5wdXNoKHsgaWQ6IFNwZWMuaWQsIG5hbWU6IFNwZWMubmFtZSwgcmFuazogaW5kZXggfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZmlsdGVyZWRfc3BlY19saXN0ID0gZmlsdGVyZWRfc3BlY19saXN0LnNvcnQoKHgsIHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LnJhbmsgLSB5LnJhbmtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFNwZWNpYWxpdHlGaWx0ZXJPbkZvY3VzRGF0YTogZmlsdGVyZWRfc3BlY19saXN0IH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlSG9zcGl0YWwoaG9zcF9pZCkge1xuICAgICAgICBsZXQgdGVzdF9pZHMgPSBbXS5jb25jYXQodGhpcy5zdGF0ZS5zZWxlY3RlZEhvc3BpdGFsSWRzKVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICAgICAgdGVzdF9pZHMgPSB0ZXN0X2lkcy5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICAgIGlmICh4ID09IGhvc3BfaWQpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pXG4gICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgIGlmKHRlc3RfaWRzLmxlbmd0aCAhPSA1KXtcbiAgICAgICAgICAgICAgICB0ZXN0X2lkcy5wdXNoKGhvc3BfaWQpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiTWF4IDUgaG9zcGl0YWwgY2FuIGJlIHNlbGVjdGVkXCIgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoeyBzZWxlY3RlZEhvc3BpdGFsSWRzOiB0ZXN0X2lkcyB9KVxuICAgIH1cblxuICAgIEhvc3BGaWx0ZXJEYXRhKCkge1xuICAgICAgICBsZXQgbGlEYXRhID0gW11cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmIChzZWxmLnN0YXRlLnNlbGVjdGVkSG9zcGl0YWxJZHMgJiYgc2VsZi5zdGF0ZS5zZWxlY3RlZEhvc3BpdGFsSWRzLmxlbmd0aCA+IDAgJiYgIXNlbGYuc3RhdGUuaGlkZU90aGVyRmlsdGVycykge1xuICAgICAgICAgICAgc2VsZi5zdGF0ZS5Ib3NwRmlsdGVyLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc3RhdGUuc2VsZWN0ZWRIb3NwaXRhbElkcy5pbmRleE9mKGRhdGEuaWQpID4gLTEgJiYgbGlEYXRhLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlEYXRhLnB1c2goPGxpIGtleT17a2V5fSBvbkNoYW5nZT17c2VsZi50b2dnbGVIb3NwaXRhbC5iaW5kKHNlbGYsIGRhdGEuaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc1MDAnLCBmb250U2l6ZTogJzEzcHgnIH19PntkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3NlbGYuc3RhdGUuc2VsZWN0ZWRIb3NwaXRhbElkcy5pbmRleE9mKGRhdGEuaWQpID4gLTEgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNlbGYuc3RhdGUuSG9zcEZpbHRlci5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0YXRlLnNlbGVjdGVkSG9zcGl0YWxJZHMuaW5kZXhPZihkYXRhLmlkKSA9PSAtMSAmJiBsaURhdGEubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICBsaURhdGEucHVzaCg8bGkga2V5PXtrZXl9IG9uQ2hhbmdlPXtzZWxmLnRvZ2dsZUhvc3BpdGFsLmJpbmQoc2VsZiwgZGF0YS5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzUwMCcsIGZvbnRTaXplOiAnMTNweCcgfX0+e2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2VsZi5zdGF0ZS5zZWxlY3RlZEhvc3BpdGFsSWRzLmluZGV4T2YoZGF0YS5pZCkgPiAtMSA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNlbGYuc3RhdGUuaGlkZU90aGVyRmlsdGVycykge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhdGUuSG9zcEZpbHRlck9uRm91Y3NEYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxpRGF0YS5wdXNoKDxsaSBrZXk9e2tleX0gb25DaGFuZ2U9e3NlbGYudG9nZ2xlSG9zcGl0YWwuYmluZChzZWxmLCBkYXRhLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNTAwJywgZm9udFNpemU6ICcxM3B4JyB9fT57ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzZWxmLnN0YXRlLnNlbGVjdGVkSG9zcGl0YWxJZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhdGUuSG9zcEZpbHRlci5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zdGF0ZS5zZWxlY3RlZEhvc3BpdGFsSWRzLmxlbmd0aCA9PSAwICYmIGtleSA8PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaURhdGEucHVzaCg8bGkga2V5PXtrZXl9IG9uQ2hhbmdlPXtzZWxmLnRvZ2dsZUhvc3BpdGFsLmJpbmQoc2VsZiwgZGF0YS5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc1MDAnLCBmb250U2l6ZTogJzEzcHgnIH19PntkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzZWxmLnN0YXRlLnNlbGVjdGVkSG9zcGl0YWxJZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlEYXRhXG4gICAgfVxuXG4gICAgU3BlY0ZpbHRlckRhdGEoKSB7XG4gICAgICAgIGxldCBsaURhdGEgPSBbXVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKHNlbGYuc3RhdGUuc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcy5sZW5ndGggPiAwICYmICFzZWxmLnN0YXRlLmhpZGVPdGhlckZpbHRlcnMpIHtcbiAgICAgICAgICAgIHNlbGYuc3RhdGUuU3BlY2lhbGl0eUZpbHRlci5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0YXRlLnNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xICYmIGxpRGF0YS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGxpRGF0YS5wdXNoKDxsaSBrZXk9e2tleX0gb25DaGFuZ2U9e3NlbGYudG9nZ2xlU3BlY2lhbGl6YXRpb24uYmluZChzZWxmLCBkYXRhLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNTAwJywgZm9udFNpemU6ICcxM3B4JyB9fT57ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17KHNlbGYuc3RhdGUuc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcy5pbmRleE9mKGRhdGEuaWQpID4gLTEgfHwgc2VsZi5zdGF0ZS5kZWZhdWx0U3BlY2lhbGl6YXRpb25JZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xKSA/IHRydWUgOiBmYWxzZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxmLnN0YXRlLmRlZmF1bHRTcGVjaWFsaXphdGlvbklkcy5pbmRleE9mKGRhdGEuaWQpPi0xID8gdHJ1ZTpmYWxzZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2VsZi5zdGF0ZS5TcGVjaWFsaXR5RmlsdGVyLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc3RhdGUuc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcy5pbmRleE9mKGRhdGEuaWQpID09IC0xICYmIGxpRGF0YS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGxpRGF0YS5wdXNoKDxsaSBrZXk9e2tleX0gb25DaGFuZ2U9e3NlbGYudG9nZ2xlU3BlY2lhbGl6YXRpb24uYmluZChzZWxmLCBkYXRhLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNTAwJywgZm9udFNpemU6ICcxM3B4JyB9fT57ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17KHNlbGYuc3RhdGUuc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcy5pbmRleE9mKGRhdGEuaWQpID4gLTEgfHwgc2VsZi5zdGF0ZS5kZWZhdWx0U3BlY2lhbGl6YXRpb25JZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xKSA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGYuc3RhdGUuZGVmYXVsdFNwZWNpYWxpemF0aW9uSWRzLmluZGV4T2YoZGF0YS5pZCk+LTEgPyB0cnVlOmZhbHNlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNlbGYuc3RhdGUuaGlkZU90aGVyRmlsdGVycykge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhdGUuU3BlY2lhbGl0eUZpbHRlck9uRm9jdXNEYXRhLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxpRGF0YS5wdXNoKDxsaSBrZXk9e2tleX0gb25DaGFuZ2U9e3NlbGYudG9nZ2xlU3BlY2lhbGl6YXRpb24uYmluZChzZWxmLCBkYXRhLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNTAwJywgZm9udFNpemU6ICcxM3B4JyB9fT57ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17KHNlbGYuc3RhdGUuc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcy5pbmRleE9mKGRhdGEuaWQpID4gLTEgfHwgc2VsZi5zdGF0ZS5kZWZhdWx0U3BlY2lhbGl6YXRpb25JZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xKSA/IHRydWUgOiBmYWxzZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxmLnN0YXRlLmRlZmF1bHRTcGVjaWFsaXphdGlvbklkcy5pbmRleE9mKGRhdGEuaWQpPi0xID8gdHJ1ZTpmYWxzZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdGF0ZS5TcGVjaWFsaXR5RmlsdGVyLm1hcCgoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0YXRlLnNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMubGVuZ3RoID09IDAgJiYga2V5IDw9IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpRGF0YS5wdXNoKDxsaSBrZXk9e2tleX0gb25DaGFuZ2U9e3NlbGYudG9nZ2xlU3BlY2lhbGl6YXRpb24uYmluZChzZWxmLCBkYXRhLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzUwMCcsIGZvbnRTaXplOiAnMTNweCcgfX0+e2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17KHNlbGYuc3RhdGUuc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcy5pbmRleE9mKGRhdGEuaWQpID4gLTEgfHwgc2VsZi5zdGF0ZS5kZWZhdWx0U3BlY2lhbGl6YXRpb25JZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xKSA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxmLnN0YXRlLmRlZmF1bHRTcGVjaWFsaXphdGlvbklkcy5pbmRleE9mKGRhdGEuaWQpPi0xID8gdHJ1ZTpmYWxzZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaURhdGFcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBpZih0aGlzLnByb3BzLmZyb21WaXApe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b3BCYXJSZWYodW5kZWZpbmVkKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q2l0eUxpc3RMYXlvdXQoc2VhcmNoUmVzdWx0cyA9IFtdKSB7XG4gICAgICAgIGlmIChzZWFyY2hSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogc2VhcmNoUmVzdWx0cyB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogW10gfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdExvY2F0aW9uKGNpdHkpIHtcbiAgICAgICAgdGhpcy5jaGlsZC5zZWxlY3RMb2NhdGlvbigoY2l0eSksICgpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaENpdGllczogW10gfSlcbiAgICAgICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yU2VhcmNoUGFnZUxvY2F0aW9uU2VsZWN0ZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb2N0b3Itc2VhcmNoLWxvY2F0aW9uLXNlbGVjdGVkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldENpdHlMaXN0KCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5sZW5ndGggPiAwP1xuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3JjaC1oZWFkaW5nXCI+TG9jYXRpb24gU2VhcmNoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb24tbGlzdGluZy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaENpdGllcy5tYXAoKHJlc3VsdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCIgb25DbGljaz17dGhpcy5zZWxlY3RMb2NhdGlvbi5iaW5kKHRoaXMsIHJlc3VsdCl9PntyZXN1bHQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj4gOiAnJ1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc3BlY2lhbGl6YXRpb24pXG4gICAgICAgIGxldCBpcGRfaWRzID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ2lwZCcpLm1hcCh4ID0+IHguaWQpXG4gICAgICAgIGxldCBjcml0ZXJpYVN0ciA9IHRoaXMuZ2V0Q3JpdGVyaWFTdHJpbmcodGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcylcblxuICAgICAgICBsZXQgbG9jYXRpb25OYW1lID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcykge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZHJvcGRvd25fdmlzaWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXAgb3ZlcmZsb3ctaGlkZGVuIHBiLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oaWRlT3RoZXJGaWx0ZXJzID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3MtYnRuXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvY2xvc2UucG5nXCJ9IGFsdD1cImNsb3NlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC10b3AtaGVhZGluZyBkLWZsZXggYWxpZ24tZmxleC1zcC1idFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGlkZU90aGVyRmlsdGVycyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBwLWFyd1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VFeHRyYUZpbHRlci5iaW5kKHRoaXMpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2JhY2staWNvbi5wbmdcIn0gLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Tb3J0L0ZpbHRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBwLWRvbmVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlRXh0cmFGaWx0ZXIuYmluZCh0aGlzKX0+RG9uZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuPlNvcnQvRmlsdGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdWx0eS1zZWxlY3QtZmx0ci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc29ydGluZy1tYWluLWNvbnRhaW5lciAke3RoaXMuc3RhdGUuaGlkZU90aGVyRmlsdGVycyA/ICdkLW5vbmUnIDogJyd9YH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1sZnQtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic29ydC1oZWFkaW5nc1wiPlNvcnQgYnk8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtc2xpZGVyLXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNhcmRzLWxpc3QgJHt0aGlzLnN0YXRlLnNvcnRfb24gPT0gJycgPyAnY2hpdEFjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnc29ydF9vbicsICcnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3J0LWxzdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0X29uID09ICcnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1yZWxldmVuY2Uuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9yZXZlbC5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE4IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SZWxldmFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzX2xvZ2luX3VzZXJfaW5zdXJlZCAmJiB0aGlzLnByb3BzLmluc3VyYW5jZV9zdGF0dXMgPT0gMSA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNhcmRzLWxpc3QgJHt0aGlzLnN0YXRlLnNvcnRfb24gPT0gJ2ZlZXMnICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlciA9PSAnYXNjJyA/ICdjaGl0QWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdzb3J0X29uJywgJ3ByaWNlX2FzYycsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1sc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNvcnRfb24gPT0gJ2ZlZXMnICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlciA9PSAnYXNjJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1wcmljZXNvcnQuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9wcmljZXNvcnQuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmljZSBMb3cgdG8gSGlnaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzX2xvZ2luX3VzZXJfaW5zdXJlZCAmJiB0aGlzLnByb3BzLmluc3VyYW5jZV9zdGF0dXMgPT0gMSA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNhcmRzLWxpc3QgJHt0aGlzLnN0YXRlLnNvcnRfb24gPT0gJ2ZlZXMnICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlciA9PSAnZGVzYycgPyAnY2hpdEFjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnc29ydF9vbicsICdwcmljZV9kZXNjJywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3J0LWxzdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc29ydF9vbiA9PSAnZmVlcycgJiYgdGhpcy5zdGF0ZS5zb3J0X29yZGVyID09ICdkZXNjJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1wcmljZXVwLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcHJpY2V1cC5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE4IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmljZSBIaWdoIHRvIExvdzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc29ydC1jYXJkcy1saXN0ICR7dGhpcy5zdGF0ZS5zb3J0X29uID09ICdkaXN0YW5jZScgPyAnY2hpdEFjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnc29ydF9vbicsICdkaXN0YW5jZScsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtbHN0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNvcnRfb24gPT0gJ2Rpc3RhbmNlJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtbG9jYXRpb25zLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTQgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL2xvY2F0aW9ucy5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EaXN0YW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNhcmRzLWxpc3QgJHt0aGlzLnN0YXRlLnNvcnRfb24gPT0gJ2V4cGVyaWVuY2UnID8gJ2NoaXRBY3RpdmUnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NvcnRfb24nLCAnZXhwZXJpZW5jZScsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtbHN0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNvcnRfb24gPT0gJ2V4cGVyaWVuY2UnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1leHByLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL2V4cHIuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwZXJpZW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRpbmctYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzb3J0LWhlYWRpbmdzXCI+UmF0aW5nczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydGJ0bmNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09ICczJyA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2F2Z19yYXRpbmdzJywgJzMnLCBmYWxzZSl9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09ICczJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNydC1zdGFyLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1idG4tc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zZWxlY3RlZC1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLjAgKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuYXZnX3JhdGluZ3MgPT0gJzQnID8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnYXZnX3JhdGluZ3MnLCAnNCcsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09ICc0JyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNydC1zdGFyLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1idG4tc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zZWxlY3RlZC1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LjAgKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuYXZnX3JhdGluZ3MgPT0gJzQuNScgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdhdmdfcmF0aW5ncycsICc0LjUnLCBmYWxzZSl9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09ICc0LjUnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3J0LXN0YXItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3J2LWJ0bi1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW1nIGNsYXNzTmFtZT1cInNydC1zdGFyLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3NlbGVjdGVkLXN0YXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQuNSArPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydGluZy1idG5zLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNvcnQtaGVhZGluZ3NcIj5BdmFpbGFiaWxpdHk8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRidG5jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHNvcnRCdG5zICR7dGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkgJiYgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkubGVuZ3RoICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5LmluZGV4T2YoJzEnKSA+IC0xID8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnYXZhaWxhYmlsaXR5JywgJzEnLCB0cnVlKX0+VG9kYXk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGggJiYgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkuaW5kZXhPZignMicpID4gLTEgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdhdmFpbGFiaWxpdHknLCAnMicsIHRydWUpfT5Ub21vcnJvdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuYXZhaWxhYmlsaXR5ICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5pbmRleE9mKCczJykgPiAtMSA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2F2YWlsYWJpbGl0eScsICczJywgdHJ1ZSl9Pk5leHQgMyBEYXlzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydGluZy1idG5zLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNvcnQtaGVhZGluZ3NcIj5HZW5kZXI8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRidG5jYXJkIGp1c3R5ZnktdHdvQnRuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuZ2VuZGVyID09ICdtJyA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2dlbmRlcicsICdtJywgZmFsc2UpfT5NYWxlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHNvcnRCdG5zICR7dGhpcy5zdGF0ZS5nZW5kZXIgPT0gJ2YnID8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnZ2VuZGVyJywgJ2YnLCBmYWxzZSl9PkZlbWFsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInNvcnRpbmctYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzb3J0LWhlYWRpbmdzXCI+SG9zcGl0YWwgVHlwZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydGJ0bmNhcmQganVzdHlmeS10d29CdG5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHNvcnRCdG5zICR7dGhpcy5zdGF0ZS5zaXRzX2F0X2NsaW5pYyA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NpdHNfYXRfY2xpbmljJywgIXRoaXMuc3RhdGUuc2l0c19hdF9jbGluaWMsIGZhbHNlKX0+Q2xpbmljPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHNvcnRCdG5zICR7dGhpcy5zdGF0ZS5zaXRzX2F0X2hvc3BpdGFsID8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnc2l0c19hdF9ob3NwaXRhbCcsICF0aGlzLnN0YXRlLnNpdHNfYXRfaG9zcGl0YWwsIGZhbHNlKX0+SG9zcGl0YWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBuZXcgZmlsdGVyIGNoZWNrYm94IGRlc2lnbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLkhvc3BGaWx0ZXIgJiYgdGhpcy5zdGF0ZS5Ib3NwRmlsdGVyLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNvcnQtY2hrLWZpbHRlci1jb250YWluZXIgJHt0aGlzLnN0YXRlLmhpZGVIb3NwRmlsdGVyID8gJ2Qtbm9uZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1oc3B0bC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic3J0LWNsaS1oZWFkaW5nc1wiPkhvc3BpdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuSG9zcEZpbHRlci5sZW5ndGggPiA1ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlRm9jdXMuYmluZCh0aGlzLCB0cnVlKX0+e3RoaXMuc3RhdGUuaGlkZU90aGVyRmlsdGVycyA/ICcnIDogYCske3RoaXMuc3RhdGUuSG9zcEZpbHRlci5sZW5ndGggLSA1fSBtb3JlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1zbGN0LWxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLkhvc3BGaWx0ZXIubGVuZ3RoID4gNSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1pbnAtY3NsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggSG9zcGl0YWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VIb3NwLmJpbmQodGhpcyl9IG5hbWU9XCJIbmFtZVwiIG9uRm9jdXM9e3RoaXMuaGFuZGxlQ2hhbmdlRm9jdXMuYmluZCh0aGlzLCB0cnVlKX0gdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyU2VhcmNoU3RyaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiF0aGlzLnN0YXRlLmhpZGVPdGhlckZpbHRlcnM/Jyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VFeHRyYUZpbHRlci5iaW5kKHRoaXMpfT5Eb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGtsaXN0LXNvcnQtZmxpdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5Ib3NwRmlsdGVyRGF0YSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5TcGVjaWFsaXR5RmlsdGVyICYmIHRoaXMuc3RhdGUuU3BlY2lhbGl0eUZpbHRlci5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNvcnQtY2hrLWZpbHRlci1jb250YWluZXIgJHt0aGlzLnN0YXRlLmhpZGVTcGVjRmlsdGVyID8gJ2Qtbm9uZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LWhzcHRsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNydC1jbGktaGVhZGluZ3NcIj5TcGVjaWFsaXphdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLlNwZWNpYWxpdHlGaWx0ZXIubGVuZ3RoID4gNSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlRm9jdXMuYmluZCh0aGlzLCBmYWxzZSl9Pnt0aGlzLnN0YXRlLmhpZGVPdGhlckZpbHRlcnMgPyAnJyA6IGArJHt0aGlzLnN0YXRlLlNwZWNpYWxpdHlGaWx0ZXIubGVuZ3RoIC0gNX0gbW9yZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1zbGN0LWxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuU3BlY2lhbGl0eUZpbHRlci5sZW5ndGggPiA1ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtaW5wLWNzbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggU3BlY2lhbGl6YXRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VTcGVjLmJpbmQodGhpcyl9IG5hbWU9XCJTbmFtZVwiIG9uRm9jdXM9e3RoaXMuaGFuZGxlQ2hhbmdlRm9jdXMuYmluZCh0aGlzLCBmYWxzZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlclNlYXJjaFN0cmluZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiF0aGlzLnN0YXRlLmhpZGVPdGhlckZpbHRlcnM/Jyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VFeHRyYUZpbHRlci5iaW5kKHRoaXMpfT5Eb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGtsaXN0LXNvcnQtZmxpdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLlNwZWNGaWx0ZXJEYXRhKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhpZGVPdGhlckZpbHRlcnMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cInBvcC1mb290LWJ0bnMtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC1zaHBuZy1jYXJ0LWJ0blwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzLCB0cnVlKX0+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2LWJ0bi1wcmltYXJ5IGJvb2stYnRuLW1yZ24tYWRqdXN0XCIgb25DbGljaz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0+QXBwbHkgRmlsdGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5mcm9tVmlwPyd2aXBOZXRUb3AnOicnfSBmaWx0ZXItcm93IHN0aWNreS1oZWFkZXIgbWJsLXN0aWNrIHZpcC1uZXQtYmxvY2tgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5icmVhZGNydW1iICYmIHRoaXMucHJvcHMuYnJlYWRjcnVtYi5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtcm5nLXRvcC0xMiBkLW5vbmUgZC1tZC1ibG9jayBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtcmItMTAgYnJlYWRjcnVtYi1saXN0IGJyZWFkY3J1bWItbGlzdC11bFwiIHN0eWxlPXt7ICd3b3JkQnJlYWsnOiAnYnJlYWtXb3JkJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYnJlYWRjcnVtYiAmJiB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYnJlYWRjcnVtYi5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PSB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoIC0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGEudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGEgaHJlZj17ZGF0YS51cmx9IHRpdGxlPXtkYXRhLmxpbmtfdGl0bGUgfHwgZGF0YS50aXRsZX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgoa2V5ID09IDAgfHwga2V5ID09IHRoaXMucHJvcHMuYnJlYWRjcnVtYi5sZW5ndGggLSAxKSA/IGRhdGEudXJsIDogYC8ke2RhdGEudXJsfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2tleSA9PSAwIHx8IGtleSA9PSB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoIC0gMSA/IDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPntkYXRhLnRpdGxlfTwvc3Bhbj4gOiA8aDIgY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGUgYnJlYWRjcnVtYi1jb2xvcmVkLXRpdGxlIGQtaW5saW5lLWJsY2tcIj57ZGF0YS50aXRsZX08L2gyPn08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ICE9IHRoaXMucHJvcHMuYnJlYWRjcnVtYi5sZW5ndGggLSAxID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmVhZGNydW1iLWFycm93XCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZnJvbVZpcD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uRWxlbWVudHMgey4uLnRoaXMucHJvcHN9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSBnZXRDaXR5TGlzdExheW91dD17dGhpcy5nZXRDaXR5TGlzdExheW91dC5iaW5kKHRoaXMpfSByZXN1bHRUeXBlPSdzZWFyY2gnIGxvY2F0aW9uTmFtZT17bG9jYXRpb25OYW1lfSBmcm9tVmlwPXt0aGlzLnByb3BzLmZyb21WaXB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldENpdHlMaXN0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8c2VjdGlvbiBjbGFzc05hbWU9XCJzY3JvbGwtc2hhZG93LWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtZmlsdGVyLXRhYi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1maWx0ZXItdGFicy1zZWxlY3QgbG9jYXRpb25UZXN0RmlsdGVyXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuZXdTdGlja3lmaWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLnByb3BzLmNvdW50fSAke2lwZF9pZHMubGVuZ3RoID8gJ1NwZWNpYWxpc3RzJyA6ICdSZXN1bHRzJ30gZm9yICR7dGhpcy5wcm9wcy5ob3NwaXRhbERhdGEgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbERhdGEubmFtZSA/IGAke2NyaXRlcmlhU3RyIHx8ICdEb2N0b3InfSAgaW4gJHt0aGlzLnByb3BzLmhvc3BpdGFsRGF0YS5uYW1lfWAgOiAnJ31gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ob3NwaXRhbERhdGEgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbERhdGEubmFtZSA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGgxIGNsYXNzTmFtZT1cInNvcnQtaGVhZC1mb250LWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoID4gMyA/ICdzcmNoLXRydW5jYXRlJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtjcml0ZXJpYVN0ciB8fCAnRG9jdG9yJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5nb1RvTG9jYXRpb24uYmluZCh0aGlzKX0gPntgIGluICR7bG9jYXRpb25OYW1lfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmhvc3BpdGFsRGF0YSAmJiB0aGlzLnByb3BzLmhvc3BpdGFsRGF0YS5uYW1lKSB8fCAhbG9jYXRpb25OYW1lID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBvbkNsaWNrPXt0aGlzLmdvVG9Mb2NhdGlvbi5iaW5kKHRoaXMpfSA+PGltZyBzdHlsZT17eyB3aWR0aDogJzExcHgnLCBoZWlnaHQ6ICcxNXB4JywgbWFyZ2luTGVmdDogJzdweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZWRpdC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3RoaXMuc2hvcnRlblVybC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy91cmwtc2hvcnQuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiA4MCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG9ydFVSTCA/IDxkaXYgY2xhc3NOYW1lPVwic2hhcmVMaW5rcG9wdXBPdmVybGF5XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IFwiXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZUxpbmtwb3B1cFwiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuc2hvcnRVUkx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXt0aGlzLnN0YXRlLnNob3J0VVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU2hvcnRlbmVkIFVSTCBDb3BpZWQuXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogXCJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNocmVsaW5rQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q29weTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtZmlsdGVyLXRhYnMtc2VsZWN0IG5ld1NvcnRGaWx0ZXJiYXJcIiBvbkNsaWNrPXt0aGlzLnNvcnRGaWx0ZXJDbGlja2VkLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxNHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9maWx0ZXJzb3J0LnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEYXRhRmlsdGVyZWQoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRlck5vdGlmaWNhdGlvblwiPnt0aGlzLmlzRGF0YUZpbHRlcmVkKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Tb3J0L0ZpbHRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJwb3AtZm9vdC1idG5zLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmICF0aGlzLnByb3BzLmZyb21WaXA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkVsZW1lbnRzIHsuLi50aGlzLnByb3BzfSBvblJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gcmVzdWx0VHlwZT0nbGlzdCcgaXNUb3BiYXI9e3RydWV9IGhpZGVMb2NhdGlvblBvcHVwPXsoKSA9PiB0aGlzLmhpZGVMb2NhdGlvblBvcHVwKCl9IGxvY2F0aW9uTmFtZT17bG9jYXRpb25OYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIHRoaXMuc3RhdGUub3ZlcmxheVZpc2libGUgJiYgIXRoaXMucHJvcHMuY2xpbmljX2NhcmQgICYmICF0aGlzLnByb3BzLmZyb21WaXA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25Qb3B1cC1vdmVybGF5XCIgb25DbGljaz17KCkgPT4gdGhpcy5vdmVybGF5Q2xpY2soKX0gPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIHRoaXMucHJvcHMuY2xpbmljX2NhcmQgJiYgdGhpcy5zdGF0ZS5zaG93UG9wdXBDb250YWluZXIgICYmICF0aGlzLnByb3BzLmZyb21WaXA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBDb250YWluZXItb3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU1RPUkFHRS5jaGVja0F1dGgoKSAmJiB0aGlzLnByb3BzLmlzX2xvZ2luX3VzZXJfaW5zdXJlZCAmJiB0aGlzLnByb3BzLmluc3VyYW5jZV9zdGF0dXMgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwidGctbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidGdsIHRnbC1pb3NcIiBpZD1cImxhYl9pbnN1cmFuY2VcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmlzX2luc3VyZWR9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZUluc3VyZWQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0Z2wtYnRuXCIgaHRtbEZvcj1cImxhYl9pbnN1cmFuY2VcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q292ZXJlZCB1bmRlciBPUEQgaW5zdXJhbmNlIHwgPGEgaHJlZj1cImh0dHBzOi8vcWFjZG4uZG9jcHJpbWUuY29tL21lZGlhL2luc3VyZXIvZG9jdW1lbnRzL0dyb3VwX091dC1QYXRpZW50X0NJU19KTkxWSmp1LlBERlwiIHRhcmdldD1cIl9ibGFua1wiPjxzcGFuPiBLbm93IE1vcmU8L3NwYW4+PC9hPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmFuZ2UgZnJvbSAncmMtc2xpZGVyL2xpYi9SYW5nZSc7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2NhdGlvbkVsZW1lbnRzIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvbkVsZW1lbnRzJ1xuaW1wb3J0IExvY2F0aW9uUG9wdXAgZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uUG9wdXAnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuaW1wb3J0IElwZExlYWRGb3JtIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvaXBkL2lwZExlYWRGb3JtLmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKVxuXG5jbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLy8gYW5jaG9yRWw6IG51bGwsXG4gICAgICAgICAgICAvLyBvcGVuRmlsdGVyOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIHByaWNlUmFuZ2U6IFswLCAzMDAwXSxcbiAgICAgICAgICAgIC8vIGRpc3RhbmNlUmFuZ2U6IFswLCAxNV0sXG4gICAgICAgICAgICAvLyBzb3J0X29uOiBudWxsLFxuICAgICAgICAgICAgLy8gc2l0c19hdF9jbGluaWM6IGZhbHNlLFxuICAgICAgICAgICAgLy8gc2l0c19hdF9ob3NwaXRhbDogZmFsc2UsXG4gICAgICAgICAgICAvLyBpc19mZW1hbGU6IGZhbHNlLFxuICAgICAgICAgICAgLy8gaXNfYXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3J0VVJMOiBcIlwiLFxuICAgICAgICAgICAgLy8gZHJvcGRvd25fdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBvdmVybGF5VmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93UG9wdXBDb250YWluZXI6IHRydWUsXG4gICAgICAgICAgICBzaG93SXBkTGVhZEZvcm06IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnByb3BzLmZpbHRlckNyaXRlcmlhIH0pXG4gICAgICAgIGlmIChwcm9wcy5sb2NhdGlvblR5cGUgJiYgIXByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKChwcm9wcy5zZW9EYXRhICYmIHByb3BzLnNlb0RhdGEubG9jYXRpb24pIHx8IHByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAhPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiB0cnVlLCBvdmVybGF5VmlzaWJsZTogdHJ1ZSwgc2hvd0lwZExlYWRGb3JtOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnNob3J0ZW5VcmwoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSB9KVxuICAgICAgICAvLyB0aGlzLnNob3J0ZW5VcmwoKVxuICAgICAgICBpZiAoKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHx8IHRoaXMucHJvcHMuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UsIHNob3dJcGRMZWFkRm9ybTogdHJ1ZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb25UeXBlICYmIHRoaXMucHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiB0cnVlLCBvdmVybGF5VmlzaWJsZTogdHJ1ZSwgc2hvd0lwZExlYWRGb3JtOiBmYWxzZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXQoZSkge1xuICAgICAgICBsZXQgZXZOYW1lID0gZS50YXJnZXQubmFtZVxuICAgICAgICBsZXQgY2hlY2tlZCA9IGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBbZXZOYW1lXTogY2hlY2tlZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBhcHBseUZpbHRlcnMoKSB7XG4gICAgLy8gICAgIGxldCBmaWx0ZXJTdGF0ZSA9IHtcbiAgICAvLyAgICAgICAgIHByaWNlUmFuZ2U6IHRoaXMuc3RhdGUucHJpY2VSYW5nZSxcbiAgICAvLyAgICAgICAgIGRpc3RhbmNlUmFuZ2U6IHRoaXMuc3RhdGUuZGlzdGFuY2VSYW5nZSxcbiAgICAvLyAgICAgICAgIHNpdHNfYXQ6IHRoaXMuc3RhdGUuc2l0c19hdCxcbiAgICAvLyAgICAgICAgIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vbixcbiAgICAvLyAgICAgICAgIGlzX2ZlbWFsZTogdGhpcy5zdGF0ZS5pc19mZW1hbGUsXG4gICAgLy8gICAgICAgICBpc19hdmFpbGFibGU6IHRoaXMuc3RhdGUuaXNfYXZhaWxhYmxlLFxuICAgIC8vICAgICAgICAgc2l0c19hdF9jbGluaWM6IHRoaXMuc3RhdGUuc2l0c19hdF9jbGluaWMsXG4gICAgLy8gICAgICAgICBzaXRzX2F0X2hvc3BpdGFsOiB0aGlzLnN0YXRlLnNpdHNfYXRfaG9zcGl0YWxcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBsZXQgZGF0YSA9IHtcbiAgICAvLyAgICAgICAgICdDYXRlZ29yeSc6ICdGaWx0ZXJDbGljaycsICdBY3Rpb24nOiAnQ2xpY2tlZCBvbiBGaWx0ZXInLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtZmlsdGVyLWNsaWNrZWQnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnYXZhaWxhYmxlX3RvZGF5JzogdGhpcy5zdGF0ZS5pc19hdmFpbGFibGUsICdzaXRzX2F0X2NsaW5pYyc6IHRoaXMuc3RhdGUuc2l0c19hdF9jbGluaWMsICdzaXRzX2F0X2hvc3BpdGFsJzogdGhpcy5zdGF0ZS5zaXRzX2F0X2hvc3BpdGFsLCAnbG93UHJpY2VSYW5nZSc6IHRoaXMuc3RhdGUucHJpY2VSYW5nZVswXSwgJ2hpZ2hQcmljZVJhbmdlJzogdGhpcy5zdGF0ZS5wcmljZVJhbmdlWzFdLCAnbG93RGlzdGFuY2VSYW5nZSc6IHRoaXMuc3RhdGUuZGlzdGFuY2VSYW5nZVswXSwgJ2hpZ2hEaXN0YW5jZVJhbmdlJzogdGhpcy5zdGF0ZS5kaXN0YW5jZVJhbmdlWzFdLCAnaXNfZmVtYWxlJzogdGhpcy5zdGF0ZS5pc19mZW1hbGUsICdzb3J0X29uJzogdGhpcy5zdGF0ZS5zb3J0X29uID09IFwiXCIgPyAncmVsZXZhbmNlJyA6IHRoaXMuc3RhdGUuc29ydF9vblxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgLy8gICAgIHRoaXMucHJvcHMuYXBwbHlGaWx0ZXJzKGZpbHRlclN0YXRlKVxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbkZpbHRlcjogZmFsc2UgfSlcbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kbGVPcGVuKGV2ZW50KSB7XG4gICAgLy8gICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCB9KVxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIGRyb3Bkb3duX3Zpc2libGU6IHRydWVcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gaGlkZVNvcnREaXYoKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgZHJvcGRvd25fdmlzaWJsZTogZmFsc2VcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gaGFuZGxlQ2xvc2UodHlwZSkge1xuICAgIC8vICAgICBsZXQgZGF0YSA9IHtcbiAgICAvLyAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BkU29ydEZpbHRlckFwcGxpZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtc29ydC1maWx0ZXItYXBwbGllZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdzb3J0X29uJzogdHlwZSA9PT0gXCJcIiA/ICdyZWxldmFuY2UnIDogdHlwZVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogbnVsbCwgc29ydF9vbjogdHlwZSwgZHJvcGRvd25fdmlzaWJsZTogZmFsc2UgfSwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKHR5cGUgfHwgdHlwZSA9PT0gXCJcIikge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJzKClcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICAvLyB0b2dnbGVGaWx0ZXIoKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgb3BlbkZpbHRlcjogIXRoaXMuc3RhdGUub3BlbkZpbHRlclxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIC8vIGhhbmRsZVJhbmdlKHR5cGUsIHJhbmdlKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgW3R5cGVdOiByYW5nZVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIGdldENyaXRlcmlhU3RyaW5nKHNlbGVjdGVkQ3JpdGVyaWFzKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZENyaXRlcmlhcyAmJiBzZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFByb2NlZHVyZUNhdGVnb3J5ID0gc2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdwcm9jZWR1cmVzX2NhdGVnb3J5JylcbiAgICAgICAgICAgIGxldCBwcm9jZWR1cmVzID0gc2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdwcm9jZWR1cmVzJylcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkQ3JpdGVyaWFzLnJlZHVjZSgoZmluYWwsIGN1cnIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsICs9ICcsICdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWwgKz0gYCR7Y3Vyci5uYW1lfWBcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxcbiAgICAgICAgICAgIH0sIFwiXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpc0ZpbHRlckFwcGxpZWQoKSB7XG4gICAgLy8gICAgIGNvbnN0IGRlZiA9IHtcbiAgICAvLyAgICAgICAgIHByaWNlUmFuZ2U6IFswLCAzMDAwXSxcbiAgICAvLyAgICAgICAgIGRpc3RhbmNlUmFuZ2U6IFswLCAxNV0sXG4gICAgLy8gICAgICAgICBzaXRzX2F0X2NsaW5pYzogZmFsc2UsXG4gICAgLy8gICAgICAgICBzaXRzX2F0X2hvc3BpdGFsOiBmYWxzZSxcbiAgICAvLyAgICAgICAgIGlzX2ZlbWFsZTogZmFsc2UsXG4gICAgLy8gICAgICAgICBpc19hdmFpbGFibGU6IGZhbHNlXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGZpbHRlciBpbiBkZWYpIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoZmlsdGVyID09ICdwcmljZVJhbmdlJyB8fCBmaWx0ZXIgPT0gJ2Rpc3RhbmNlUmFuZ2UnKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChkZWZbZmlsdGVyXVswXSAhPSB0aGlzLnN0YXRlW2ZpbHRlcl1bMF0gfHwgZGVmW2ZpbHRlcl1bMV0gIT0gdGhpcy5zdGF0ZVtmaWx0ZXJdWzFdKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKGRlZltmaWx0ZXJdICE9IHRoaXMuc3RhdGVbZmlsdGVyXSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZVxuICAgIC8vICAgICB9IGNhdGNoIChlKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIHNob3J0ZW5VcmwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgICAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYgKyAnJmZvcmNlX2xvY2F0aW9uPXRydWUnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgJz9mb3JjZV9sb2NhdGlvbj10cnVlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy51cmxTaG9ydG5lcih1cmwsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IGRhdGEudGlueV91cmwgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3ZlcmxheUNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3ZlcmxheVZpc2libGU6IGZhbHNlLCBzZWFyY2hDaXRpZXM6IFtdLCBzaG93SXBkTGVhZEZvcm06IHRydWUgfSk7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25fZWxlbWVudCcpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25fZWxlbWVudCcpLnN0eWxlLnpJbmRleCA9ICcwJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUxvY2F0aW9uUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UsIHNob3dJcGRMZWFkRm9ybTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBwb3B1cENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cENvbnRhaW5lcjogZmFsc2UsIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSwgc2hvd0lwZExlYWRGb3JtOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGdvVG9Mb2NhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWFyY2hDaXRpZXM6IFtdXG4gICAgICAgIH0pXG4gICAgICAgIGxldCByZWRpcmVjdF90byA9IFwiXCJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnc3B0Y2l0JykgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdzcHRsaXRjaXQnKSkge1xuICAgICAgICAgICAgcmVkaXJlY3RfdG8gPSBcIi9vcGQvc2VhcmNocmVzdWx0c1wiXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbG9jYXRpb25fdXJsID0gJy9sb2NhdGlvbnNlYXJjaCdcbiAgICAgICAgaWYgKHJlZGlyZWN0X3RvKSB7XG4gICAgICAgICAgICBsb2NhdGlvbl91cmwgKz0gYD9yZWRpcmVjdF90bz0ke3JlZGlyZWN0X3RvfWBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnNldE5leHRTZWFyY2hDcml0ZXJpYSgpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYW5nZUxvY2F0aW9uRG9jdG9yUmVzdWx0c1BvcFVwJywgJ0FjdGlvbic6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gobG9jYXRpb25fdXJsKVxuICAgIH1cblxuICAgIHN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbihjbG9zZT1mYWxzZSkge1xuICAgICAgICBpZihjbG9zZSkge1xuICAgICAgICAgICAgbGV0IGd0bURhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JTZWFyY2hJcGRGb3JtQ2xvc2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLXNlYXJjaC1pcGQtZm9ybS1jbG9zZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dJcGRMZWFkRm9ybTogZmFsc2V9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgY3JpdGVyaWFTdHIgPSB0aGlzLmdldENyaXRlcmlhU3RyaW5nKHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMpXG4gICAgICAgIGxldCBsb2NhdGlvbk5hbWUgPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzKSB7XG4gICAgICAgICAgICBsb2NhdGlvbk5hbWUgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3NcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZW9EYXRhICYmIHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvbikge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHNwZWNpYWxpemF0aW9ucyA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdzcGVjaWFsaXR5JylcblxuICAgICAgICBsZXQgaXBkX2lkcyA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdpcGQnKS5tYXAoeCA9PiB4LmlkKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgaWQ9XCJmaWx0ZXItc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXBkbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tZmlsdGVyIGQtbm9uZSBkLW1kLWJsb2NrIGFsaWduU2hhcmVCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmxpbmUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17dGhpcy5zaG9ydGVuVXJsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy91cmwtc2hvcnQuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiA4MCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvcnRVUkwgPyA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlTGlua3BvcHVwT3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogXCJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVMaW5rcG9wdXBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLnNob3J0VVJMfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e3RoaXMuc3RhdGUuc2hvcnRVUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNob3J0ZW5lZCBVUkwgQ29waWVkLlwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBcIlwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaHJlbGlua0J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Db3B5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb3VudH0gcmVzdWx0cyBmb3VuZCBmb3Ige2lwZF9pZHMubGVuZ3RoID8gJ0Jlc3QnIDogJyd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMFwiPiB7Y3JpdGVyaWFTdHIgfHwgXCJEb2N0b3JzXCJ9IHtpcGRfaWRzLmxlbmd0aCAmJiBjcml0ZXJpYVN0cj8gJ0RvY3RvcnMnIDogJyd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtc3BhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIGZhbHNlID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxvY2F0aW9uTmFtZSA/IDxzcGFuIGNsYXNzTmFtZT1cImxvY2F0aW9uLWVkaXRcIj57YCBpbiAke2xvY2F0aW9uTmFtZX1gfTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDE1LCBoZWlnaHQ6IDE1LCBtYXJnaW5MZWZ0OiA3LCBjdXJzb3I6ICdwb2ludGVyJyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9lZGl0LnN2Z1wifSBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9Mb2NhdGlvbi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGluaWNfY2FyZCAmJiB0aGlzLnN0YXRlLnNob3dQb3B1cENvbnRhaW5lciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvblBvcHVwIHsuLi50aGlzLnByb3BzfSBvblJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gcmVzdWx0VHlwZT0nbGlzdCcgaXNUb3BiYXI9e3RydWV9IGhpZGVMb2NhdGlvblBvcHVwPXsoKSA9PiB0aGlzLmhpZGVMb2NhdGlvblBvcHVwKCl9IGxvY2F0aW9uTmFtZT17bG9jYXRpb25OYW1lfSBjcml0ZXJpYVN0cmluZz17Y3JpdGVyaWFTdHJ9IHBvcHVwQ29udGFpbmVyPXsoKSA9PiB0aGlzLnBvcHVwQ29udGFpbmVyKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPExvY2F0aW9uRWxlbWVudHMgey4uLnRoaXMucHJvcHN9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSByZXN1bHRUeXBlPSdsaXN0JyBpc1RvcGJhcj17dHJ1ZX0gaGlkZUxvY2F0aW9uUG9wdXA9eygpID0+IHRoaXMuaGlkZUxvY2F0aW9uUG9wdXAoKX0gbG9jYXRpb25OYW1lPXtsb2NhdGlvbk5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnN0YXRlLm92ZXJsYXlWaXNpYmxlICYmICF0aGlzLnByb3BzLmNsaW5pY19jYXJkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uUG9wdXAtb3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3ZlcmxheUNsaWNrKCl9ID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIHRoaXMucHJvcHMuY2xpbmljX2NhcmQgJiYgdGhpcy5zdGF0ZS5zaG93UG9wdXBDb250YWluZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBDb250YWluZXItb3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWxpemF0aW9ucyAmJiBzcGVjaWFsaXphdGlvbnMubGVuZ3RoICYmIHBhcnNlZC5ob3NwaXRhbF9pZCAmJiBwYXJzZWQuc2hvd1BvcHVwICYmIHRoaXMuc3RhdGUuc2hvd0lwZExlYWRGb3JtICYmIHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93Lk9OX0xBTkRJTkdfUEFHRT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJcGRMZWFkRm9ybSBzdWJtaXRMZWFkRm9ybUdlbmVyYXRpb249e3RoaXMuc3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uLmJpbmQodGhpcyl9IHsuLi50aGlzLnByb3BzfSBob3NwaXRhbF9pZD17cGFyc2VkLmhvc3BpdGFsX2lkfSBmb3JtU291cmNlPSdkb2N0b3JSZXN1bHRQYWdlJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHRvZ2dsZTQwNCwgZ2V0RG9jdG9yTnVtYmVyLCBtZXJnZU9QRFN0YXRlLCB1cmxTaG9ydG5lciwgZ2V0RG9jdG9ycywgZ2V0T1BEQ3JpdGVyaWFSZXN1bHRzLCB0b2dnbGVPUERDcml0ZXJpYSwgZ2V0Rm9vdGVyRGF0YSwgc2F2ZUNvbW1vblByb2NlZHVyZXMsIHJlc2V0UHJvY2VkdXJlVVJsLCBzZXRTZWFyY2hJZCwgZ2V0U2VhcmNoSWRSZXN1bHRzLCBzZWxlY3RTZWFyY2hUeXBlLCBzZXROZXh0U2VhcmNoQ3JpdGVyaWEsIGdldE9mZmVyTGlzdCwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIHNlbGVjdE9wZFRpbWVTTG90LCBzYXZlUHJvZmlsZVByb2NlZHVyZXMsIHJlc2V0UGtnQ29tcGFyZSwgc2VsZWN0TG9jYXRpb24sIGNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsbG9hZE9QREluc3VyYW5jZSwgZ2V0RG9jdG9ySG9zcGl0YWxGaWx0ZXJzLCBnZXREb2N0b3JIb3NwaXRhbFNwZWNpYWxpdHksIGdldFNwb25zb3JlZExpc3QsIGdldE5lYXJieUhvc3BpdGFscywgdG9nZ2xlSVBEQ3JpdGVyaWEsIGdldFRvcEhvc3BpdGFscywgbWVyZ2VJcGRDcml0ZXJpYSwgY2xlYXJWaXBTZWxlY3RlZFBsYW4sIE5vbklwZEJvb2tpbmdMZWFkLCBzYXZlTGVhZFBobk51bWJlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgeyBvcGRTZWFyY2hTdGF0ZUJ1aWxkZXIsIGxhYlNlYXJjaFN0YXRlQnVpbGRlciwgbWVyZ2VTZWxlY3RlZENyaXRlcmlhcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXJsdG9TdGF0ZSdcbmltcG9ydCBTZWFyY2hSZXN1bHRzVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL29wZC9zZWFyY2hSZXN1bHRzL2luZGV4LmpzJ1xuaW1wb3J0IE5vdEZvdW5kVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvbm90Rm91bmQnXG5cbmNsYXNzIFNlYXJjaFJlc3VsdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvdzQwNDogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93NDA0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzQwNDogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGU0MDQoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgLyogQVBJIGNhbGwgaXMgb24gRGVza3RvcCBQcm9maWxlIEhlYWRlclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2FkT1BESW5zdXJhbmNlKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbilcbiAgICAgICAgKi9cbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZERhdGEoc3RvcmUsIG1hdGNoLCBxdWVyeVBhcmFtcyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbl9tcyA9IG51bGxcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gudXJsLmluY2x1ZGVzKCdsb2NhdGlvbj0nKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbl9tcyA9IG1hdGNoLnVybC5zcGxpdCgnbG9jYXRpb249JylbMV1cbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25fbXMgPSBwYXJzZUludChsb2NhdGlvbl9tcylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvcGRTZWFyY2hTdGF0ZUJ1aWxkZXIobnVsbCwgcXVlcnlQYXJhbXMsIHRydWUsIGxvY2F0aW9uX21zKS50aGVuKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChtZXJnZU9QRFN0YXRlKHN0YXRlKSlcbiAgICAgICAgICAgICAgICAgICAgaWYocXVlcnlQYXJhbXMgJiYgKChxdWVyeVBhcmFtcy5mcm9tVmlwICYmIHF1ZXJ5UGFyYW1zLmZyb21WaXA9PVwidHJ1ZVwiKSB8fCAocXVlcnlQYXJhbXMuZnJvbUdvbGRWaXAgJiYgcXVlcnlQYXJhbXMuZnJvbUdvbGRWaXA9PVwidHJ1ZVwiKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHRyYURhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbjogc3RhdGUgJiYgc3RhdGUuc2VsZWN0ZWRMb2NhdGlvbj9zdGF0ZS5zZWxlY3RlZExvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6cXVlcnlQYXJhbXMuZnJvbVZpcD8naXNfdmlwJzpxdWVyeVBhcmFtcy5mcm9tR29sZFZpcD8naXNfZ29sZCc6bnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goZ2V0TmVhcmJ5SG9zcGl0YWxzKGV4dHJhRGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChnZXRUb3BIb3NwaXRhbHMoZXh0cmFEYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWFyY2hVcmwgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC51cmwuaW5jbHVkZXMoJy1zcHRjaXQnKSB8fCBtYXRjaC51cmwuaW5jbHVkZXMoJy1zcHRsaXRjaXQnKSB8fCBtYXRjaC51cmwuaW5jbHVkZXMoJy1pcGRkcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hVcmwgPSBtYXRjaC51cmwudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGluaWNfY2FyZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5jbGluaWNfY2FyZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpbmljX2NhcmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSAxXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5wYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlID0gcGFyc2VJbnQocXVlcnlQYXJhbXMucGFnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0RG9jdG9ycyhzdGF0ZSwgcGFnZSwgdHJ1ZSwgc2VhcmNoVXJsLCAobG9hZE1vcmUsIG5vUmVzdWx0cyA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9SZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHN0YXR1czogNDA0IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gudXJsLmluY2x1ZGVzKCctc3B0Y2l0JykgfHwgbWF0Y2gudXJsLmluY2x1ZGVzKCctc3B0bGl0Y2l0JykgfHwgbWF0Y2gudXJsLmluY2x1ZGVzKCctaXBkZHAnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZvb3RlckRhdGEobWF0Y2gudXJsLnNwbGl0KFwiL1wiKVsxXSwgcXVlcnlQYXJhbXMucGFnZSB8fCAxKSgpLnRoZW4oKGZvb3RlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyRGF0YSA9IGZvb3RlckRhdGEgfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgZm9vdGVyRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgY2xpbmljX2NhcmQpKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93NDA0IHx8IHRoaXMuc3RhdGUuc2hvdzQwNCkge1xuICAgICAgICAgICAgcmV0dXJuIDxOb3RGb3VuZFZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlYXJjaFJlc3VsdHNWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9PUEQsXG4gICAgICAgIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICBmZXRjaE5ld1Jlc3VsdHMsXG4gICAgICAgIGdldE5ld1VybCxcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHNlYXJjaF9pZF9kYXRhLFxuICAgICAgICBuZXh0U2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIG5leHRGaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgbWVyZ2VVcmxTdGF0ZSxcbiAgICAgICAgY29tbW9uX3NldHRpbmdzLFxuICAgICAgICBuZWFyYnlIb3NwaXRhbHMsXG4gICAgICAgIHRvcEhvc3BpdGFsc1xuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICBjb25zdCB7XG4gICAgICAgIGNvbXBhcmVfcGFja2FnZXNcblxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuXG4gICAgbGV0IERPQ1RPUlMgPSBzdGF0ZS5ET0NUT1JTXG4gICAgbGV0IEhPU1BJVEFMUyA9IHN0YXRlLkhPU1BJVEFMU1xuXG4gICAgbGV0IHsgaG9zcGl0YWxMaXN0LCBkb2N0b3JMaXN0LCBMT0FERURfRE9DVE9SX1NFQVJDSCwgY291bnQsIFNFVF9GUk9NX1NFUlZFUiwgc2VhcmNoX2NvbnRlbnQsIGN1cnJfcGFnZSwgcmF0aW5ncywgcmV2aWV3cywgcmF0aW5nc190aXRsZSwgYm90dG9tX2NvbnRlbnQsIGJyZWFkY3J1bWIsIHNlb0RhdGEsIHNob3c0MDQsIGNhbm9uaWNhbF91cmwsIGhvc3BpdGFsRGF0YSwgc2ltaWxhcl9zcGVjaWFsaXphdGlvbnMgfSA9IHN0YXRlLkRPQ1RPUl9TRUFSQ0hcblxuICAgIGNvbnN0IHtcbiAgICAgICAgb2ZmZXJMaXN0LFxuICAgICAgICBpc19sb2dpbl91c2VyX2luc3VyZWQsXG4gICAgICAgIGluc3VyYW5jZV9zdGF0dXMsXG4gICAgICAgIGRldmljZV9pbmZvXG4gICAgfSA9IHN0YXRlLlVTRVJcblxuICAgIHJldHVybiB7XG4gICAgICAgIERPQ1RPUlMsIGRvY3Rvckxpc3QsIExPQURFRF9ET0NUT1JfU0VBUkNILFxuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCxcbiAgICAgICAgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICBjb3VudCxcbiAgICAgICAgU0VUX0ZST01fU0VSVkVSLFxuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSxcbiAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICBmZXRjaE5ld1Jlc3VsdHMsXG4gICAgICAgIHNlYXJjaF9jb250ZW50LFxuICAgICAgICBnZXROZXdVcmwsXG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBwYWdlLFxuICAgICAgICBjdXJyX3BhZ2UsXG4gICAgICAgIEhPU1BJVEFMUyxcbiAgICAgICAgaG9zcGl0YWxMaXN0LCByYXRpbmdzLCByZXZpZXdzLCByYXRpbmdzX3RpdGxlLFxuICAgICAgICBzZWFyY2hfaWRfZGF0YSxcbiAgICAgICAgbmV4dFNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBuZXh0RmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIGJvdHRvbV9jb250ZW50LFxuICAgICAgICBicmVhZGNydW1iLFxuICAgICAgICBzZW9EYXRhLFxuICAgICAgICBtZXJnZVVybFN0YXRlLFxuICAgICAgICBzaG93NDA0LFxuICAgICAgICBvZmZlckxpc3QsXG4gICAgICAgIGlzX2xvZ2luX3VzZXJfaW5zdXJlZCxcbiAgICAgICAgaW5zdXJhbmNlX3N0YXR1cyxcbiAgICAgICAgY2Fub25pY2FsX3VybCxcbiAgICAgICAgY29tcGFyZV9wYWNrYWdlcyxcbiAgICAgICAgZGV2aWNlX2luZm8sXG4gICAgICAgIGNvbW1vbl9zZXR0aW5ncyxcbiAgICAgICAgaG9zcGl0YWxEYXRhLFxuICAgICAgICBzaW1pbGFyX3NwZWNpYWxpemF0aW9ucyxcbiAgICAgICAgbmVhcmJ5SG9zcGl0YWxzLFxuICAgICAgICB0b3BIb3NwaXRhbHNcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybFNob3J0bmVyOiAodXJsLCBjYikgPT4gZGlzcGF0Y2godXJsU2hvcnRuZXIodXJsLCBjYikpLFxuICAgICAgICBsb2FkT1BEQ29tbW9uQ3JpdGVyaWE6ICgpID0+IGRpc3BhdGNoKGxvYWRPUERDb21tb25Dcml0ZXJpYSgpKSxcbiAgICAgICAgdG9nZ2xlT1BEQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikgPT4gZGlzcGF0Y2godG9nZ2xlT1BEQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpKSxcbiAgICAgICAgZ2V0RG9jdG9yczogKHN0YXRlLCBwYWdlLCBmcm9tX3NlcnZlciwgc2VhcmNoQnlVcmwsIGNiLCBjbGluaWNfY2FyZCkgPT4gZGlzcGF0Y2goZ2V0RG9jdG9ycyhzdGF0ZSwgcGFnZSwgZnJvbV9zZXJ2ZXIsIHNlYXJjaEJ5VXJsLCBjYiwgY2xpbmljX2NhcmQpKSxcbiAgICAgICAgbWVyZ2VPUERTdGF0ZTogKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpID0+IGRpc3BhdGNoKG1lcmdlT1BEU3RhdGUoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykpLFxuICAgICAgICBnZXREb2N0b3JOdW1iZXI6IChkb2N0b3JJZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldERvY3Rvck51bWJlcihkb2N0b3JJZCwgY2FsbGJhY2spKSxcbiAgICAgICAgZ2V0Rm9vdGVyRGF0YTogKHVybCwgcGFnZSkgPT4gZGlzcGF0Y2goZ2V0Rm9vdGVyRGF0YSh1cmwsIHBhZ2UpKSxcbiAgICAgICAgc2F2ZUNvbW1vblByb2NlZHVyZXM6IChwcm9jZWR1cmVfaWRzKSA9PiBkaXNwYXRjaChzYXZlQ29tbW9uUHJvY2VkdXJlcyhwcm9jZWR1cmVfaWRzKSksXG4gICAgICAgIHJlc2V0UHJvY2VkdXJlVVJsOiAoKSA9PiBkaXNwYXRjaChyZXNldFByb2NlZHVyZVVSbCgpKSxcbiAgICAgICAgbWVyZ2VTZWxlY3RlZENyaXRlcmlhczogKCkgPT4gZGlzcGF0Y2gobWVyZ2VTZWxlY3RlZENyaXRlcmlhcygpKSxcbiAgICAgICAgc2V0U2VhcmNoSWQ6IChzZWFyY2hJZCwgZmlsdGVycywgc2V0RGVmYXVsdCkgPT4gZGlzcGF0Y2goc2V0U2VhcmNoSWQoc2VhcmNoSWQsIGZpbHRlcnMsIHNldERlZmF1bHQpKSxcbiAgICAgICAgZ2V0U2VhcmNoSWRSZXN1bHRzOiAoc2VhcmNoSWQsIHNlYXJjaFJlc3VsdHMpID0+IGRpc3BhdGNoKGdldFNlYXJjaElkUmVzdWx0cyhzZWFyY2hJZCwgc2VhcmNoUmVzdWx0cykpLFxuICAgICAgICBzZWxlY3RTZWFyY2hUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0U2VhcmNoVHlwZSh0eXBlKSksXG4gICAgICAgIHNldE5leHRTZWFyY2hDcml0ZXJpYTogKCkgPT4gZGlzcGF0Y2goc2V0TmV4dFNlYXJjaENyaXRlcmlhKCkpLFxuICAgICAgICB0b2dnbGU0MDQ6IChzdGF0dXMpID0+IGRpc3BhdGNoKHRvZ2dsZTQwNChzdGF0dXMpKSxcbiAgICAgICAgc2VsZWN0T3BkVGltZVNMb3Q6IChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkKSA9PiBkaXNwYXRjaChzZWxlY3RPcGRUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkKSksXG4gICAgICAgIHNhdmVQcm9maWxlUHJvY2VkdXJlczogKGRvY3Rvcl9pZCwgY2xpbmljX2lkLCBwcm9jZWR1cmVfaWRzLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2goc2F2ZVByb2ZpbGVQcm9jZWR1cmVzKGRvY3Rvcl9pZCwgY2xpbmljX2lkLCBwcm9jZWR1cmVfaWRzLCBmb3JjZUFkZCkpLFxuICAgICAgICBnZXRPZmZlckxpc3Q6IChsYXQsIGxvbmcpID0+IGRpc3BhdGNoKGdldE9mZmVyTGlzdChsYXQsIGxvbmcpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpKSxcbiAgICAgICAgcmVzZXRQa2dDb21wYXJlOigpID0+IGRpc3BhdGNoKHJlc2V0UGtnQ29tcGFyZSgpKSxcbiAgICAgICAgc2VsZWN0TG9jYXRpb246IChsb2NhdGlvbiwgdHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0TG9jYXRpb24obG9jYXRpb24sIHR5cGUpKSxcbiAgICAgICAgY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhczogKHNlbGVjdGVkQ3JpdGVyaWFzKSA9PiBkaXNwYXRjaChjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKHNlbGVjdGVkQ3JpdGVyaWFzKSksXG4gICAgICAgIGxvYWRPUERJbnN1cmFuY2U6IChjaXR5KSA9PiBkaXNwYXRjaChsb2FkT1BESW5zdXJhbmNlKGNpdHkpKSxcbiAgICAgICAgZ2V0RG9jdG9ySG9zcGl0YWxGaWx0ZXJzOiAoc3RhdGUsIHBhZ2UsIGZyb21fc2VydmVyLCBzZWFyY2hCeVVybCwgY2IsIGNsaW5pY19jYXJkKSA9PiBkaXNwYXRjaChnZXREb2N0b3JIb3NwaXRhbEZpbHRlcnMoc3RhdGUsIHBhZ2UsIGZyb21fc2VydmVyLCBzZWFyY2hCeVVybCwgY2IsIGNsaW5pY19jYXJkKSksXG4gICAgICAgIGdldERvY3Rvckhvc3BpdGFsU3BlY2lhbGl0eTogKHN0YXRlLCBwYWdlLCBmcm9tX3NlcnZlciwgc2VhcmNoQnlVcmwsIGNiLCBjbGluaWNfY2FyZCkgPT4gZGlzcGF0Y2goZ2V0RG9jdG9ySG9zcGl0YWxTcGVjaWFsaXR5KHN0YXRlLCBwYWdlLCBmcm9tX3NlcnZlciwgc2VhcmNoQnlVcmwsIGNiLCBjbGluaWNfY2FyZCkpLFxuICAgICAgICBnZXRTcG9uc29yZWRMaXN0OiAoZGF0YSwgc2VsZWN0ZWRMb2NhdGlvbiwgY2IpPT4gZGlzcGF0Y2goZ2V0U3BvbnNvcmVkTGlzdChkYXRhLCBzZWxlY3RlZExvY2F0aW9uLCBjYikpLFxuICAgICAgICBnZXROZWFyYnlIb3NwaXRhbHM6IChwYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChnZXROZWFyYnlIb3NwaXRhbHMocGFyYW1zLCBjYikpLFxuICAgICAgICB0b2dnbGVJUERDcml0ZXJpYTogKGNyaXRlcmlhLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2godG9nZ2xlSVBEQ3JpdGVyaWEoY3JpdGVyaWEsIGZvcmNlQWRkKSksXG4gICAgICAgIGdldFRvcEhvc3BpdGFsczogKGRhdGFQYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChnZXRUb3BIb3NwaXRhbHMoZGF0YVBhcmFtcywgY2IpKSxcbiAgICAgICAgbWVyZ2VJcGRDcml0ZXJpYTogKGZpbHRlckNyaXRlcmlhKT0+IGRpc3BhdGNoKG1lcmdlSXBkQ3JpdGVyaWEoZmlsdGVyQ3JpdGVyaWEpKSxcbiAgICAgICAgY2xlYXJWaXBTZWxlY3RlZFBsYW46KCkgPT5kaXNwYXRjaChjbGVhclZpcFNlbGVjdGVkUGxhbigpKSxcbiAgICAgICAgTm9uSXBkQm9va2luZ0xlYWQ6KGRhdGEsY2IpID0+ZGlzcGF0Y2goTm9uSXBkQm9va2luZ0xlYWQoZGF0YSwgY2IpKSxcbiAgICAgICAgc2F2ZUxlYWRQaG5OdW1iZXI6KG51bWJlcikgPT5kaXNwYXRjaChzYXZlTGVhZFBobk51bWJlcihudW1iZXIpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VhcmNoUmVzdWx0cyk7XG4iXSwic291cmNlUm9vdCI6IiJ9