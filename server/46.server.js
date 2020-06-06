exports.ids = [46];
exports.modules = {

/***/ "./dev/js/components/commons/locationPopup/index.js":
/*!**********************************************************!*\
  !*** ./dev/js/components/commons/locationPopup/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locationPopupView = __webpack_require__(/*! ./locationPopupView */ "./dev/js/components/commons/locationPopup/locationPopupView.js");

var _locationPopupView2 = _interopRequireDefault(_locationPopupView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _locationPopupView2.default;

/***/ }),

/***/ "./dev/js/components/commons/locationPopup/locationPopupView.js":
/*!**********************************************************************!*\
  !*** ./dev/js/components/commons/locationPopup/locationPopupView.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _mapHelpers = __webpack_require__(/*! ../../../helpers/mapHelpers */ "./dev/js/helpers/mapHelpers.js");

var _gtm = __webpack_require__(/*! ../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class LocationPopupView extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            location_object: null
        };
    }

    componentWillReceiveProps(props) {
        if (props.selectedLocation && this.props.selectedLocation) {
            if (this.state.search) {
                if (props.selectedLocation != this.props.selectedLocation) {
                    this.setState({ location_object: props.selectedLocation, search: props.selectedLocation.formatted_address });
                }
            } else if (!props.locationType.includes("geo")) {
                this.setState({ location_object: props.selectedLocation, search: props.selectedLocation.formatted_address });
            }
        }
    }

    componentDidMount() {
        if (this.props.locationType && !this.props.locationType.includes("geo") && this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
            this.setState({ location_object: this.props.selectedLocation, search: this.props.locationName || this.props.selectedLocation.formatted_address });
        }
    }

    goToLocation() {
        if (this.props.isTopbar) {
            let redirect_to = "";
            if (window.location.pathname.includes('sptcit') || window.location.pathname.includes('sptlitcit')) {
                redirect_to = "/opd/searchresults";
            }

            if (window.location.pathname.includes('lbcit') || window.location.pathname.includes('lblitcit')) {
                redirect_to = "/lab/searchresults";
            }

            let location_url = '/locationsearch';
            if (redirect_to) {
                location_url += `?redirect_to=${redirect_to}`;
            }

            let data = {
                'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push(location_url);
        }
    }

    continueLocation() {
        const parsed = queryString.parse(this.props.location.search);
        let data = {
            'Category': 'ContinueLocationDoctorResultsPopUp', 'Action': 'continue-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'continue-location-doctor-results-PopUp', 'url': window.location.pathname
        };
        _gtm2.default.sendEvent({ data: data });
        if (parsed.lat && parsed.long) {
            (0, _mapHelpers._getlocationFromLatLong)(parsed.lat, parsed.long, 'locality', locationData => {
                if (locationData) {
                    this.props.selectLocation(locationData, 'autoDetect');
                }
            });
        }
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'fr-location-popup-container' },
            _react2.default.createElement(
                'p',
                { className: 'fw-500 text-md' },
                'Showing ',
                this.props.count,
                ' results ',
                _react2.default.createElement(
                    'span',
                    { style: { fontWeight: 700 } },
                    this.props.criteriaString ? `for ${this.props.criteriaString}` : ''
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'fw-700 text-md' },
                this.props.locationName ? ` in ${this.props.locationName}` : ''
            ),
            _react2.default.createElement(
                'div',
                { className: 'mrt-20' },
                _react2.default.createElement(
                    'button',
                    { className: 'fw-500 fr-popup-cont', onClick: () => this.continueLocation() },
                    'Continue'
                )
            ),
            _react2.default.createElement(
                'p',
                { className: 'fw-500 mrt-20 text-xs' },
                'OR'
            ),
            _react2.default.createElement(
                'div',
                { className: 'mrt-20' },
                _react2.default.createElement(
                    'button',
                    { className: 'fw-500 fr-popup-change', onClick: this.goToLocation.bind(this) },
                    'Change Location'
                )
            )
        );
    }
}

exports.default = LocationPopupView;

/***/ }),

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NotFound extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

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
                                { href: "javascript:;", onClick: () => {
                                        this.props.history.push('/');
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
                                    { href: "javascript:;", onClick: () => {
                                            this.props.history.push('/');
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _PopUp = __webpack_require__(/*! ../PopUp */ "./dev/js/components/opd/commons/PopUp/index.js");

var _PopUp2 = _interopRequireDefault(_PopUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ClinicResultCard extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSelectDoctor: false
        };
    }

    toggleSelectDoctor() {
        this.setState({ openSelectDoctor: !this.state.openSelectDoctor });
    }

    cardClick(id, url, hospital_id, e) {
        e.stopPropagation();
        let data = {
            'Category': 'ConsumerApp', 'Action': 'DoctorSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-selected', 'selectedId': id
        };
        _gtm2.default.sendEvent({ data: data });

        data = {
            'Category': 'ConsumerApp', 'Action': 'DoctorRankInSearch', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-rank-in-search', 'Rank': this.props.rank + 1
        };
        _gtm2.default.sendEvent({ data: data });

        if (e.ctrlKey || e.metaKey) {} else {
            e.preventDefault();

            let category_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'procedures_category').map(x => x.id);
            let procedure_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'procedures').map(x => x.id);

            if (url) {
                //this.props.history.push(`/${url}`)
                if (category_ids.length || procedure_ids.length) {
                    this.props.history.push(`/${url}?hospital_id=${hospital_id}&is_procedure=true&category_ids=${category_ids}&procedure_ids=${procedure_ids}`);
                } else {
                    this.props.history.push(`/${url}?hospital_id=${hospital_id}`);
                }
            } else {
                //this.props.history.push(`/opd/doctor/${id}`)
                if (category_ids.length || procedure_ids.length) {
                    this.props.history.push(`/opd/doctor/${id}?hospital_id=${hospital_id}&is_procedure=true&category_ids=${category_ids}&procedure_ids=${procedure_ids}`);
                } else {
                    this.props.history.push(`/opd/doctor/${id}?hospital_id=${hospital_id}`);
                }
            }
        }
    }

    getQualificationStr(qualificationSpecialization) {
        return qualificationSpecialization.reduce((str, curr, i) => {
            str += `${curr.name}`;
            if (i < qualificationSpecialization.length - 1) str += `, `;
            return str;
        }, "");
    }

    bookNowClicked(id, url, hospital_id, e) {
        //always clear selected time at doctor profile
        let slot = { time: {} };
        this.props.selectOpdTimeSLot(slot, false);

        let data = {
            'Category': 'ConsumerApp', 'Action': 'OpdSearchBookNowClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-book-now-clicked', 'selectedId': id
        };
        _gtm2.default.sendEvent({ data: data });

        let { procedure_ids } = this.trackingEventsBookNow(id);
        this.props.saveProfileProcedures('', '', procedure_ids, true);
        if (url) {
            this.props.history.push(`/${url}/booking?doctor_id=${id}&hospital_id=${hospital_id}`);
        } else {
            this.props.history.push(`/opd/doctor/${id}/${hospital_id}/bookdetails`);
        }
    }

    trackingEventsBookNow(id) {
        let Distance = '';

        if (this.props.details && this.props.details.distance) {
            Distance = (Math.round(this.props.details.distance * 10) / 10).toFixed(1);
        }

        let data = {
            'Category': 'ConsumerApp', 'Action': 'DoctorSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-selected', 'selectedId': id
        };
        _gtm2.default.sendEvent({ data: data });

        let category_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'procedures_category').map(x => x.id).join(',');
        let procedure_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'procedures').map(x => x.id).join(',');
        let condition_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'condition').map(x => x.id).join(',');
        let specialization_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'speciality').map(x => x.id).join(',');
        data = {
            'Category': 'ConsumerApp', 'Action': 'DoctorRankInSearch', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-rank-in-search', 'Rank': this.props.rank + 1, 'DoctorSearchCount': this.props.count, 'specializations': specialization_ids, 'conditions': condition_ids, 'procedures': procedure_ids, 'procedure_category': category_ids, 'Distance': Distance
        };
        _gtm2.default.sendEvent({ data: data });

        return { category_ids, procedure_ids };
    }

    render() {
        let { hospital_id, address, hospital_name, doctors, procedure_categories, short_address } = this.props.details;
        let specialization = "";
        let { commonSelectedCriterias } = this.props;
        if (commonSelectedCriterias && commonSelectedCriterias.length) {
            specialization = commonSelectedCriterias[0].name;
        }
        let doctor = doctors && doctors.length ? doctors[0] : {};

        if (doctors && doctors.length) {
            let { discounted_price, distance, is_license_verified, deal_price, mrp, general_specialization, enabled_for_online_booking } = doctor;

            distance = (Math.round(distance * 10) / 10).toFixed(1);
            let discount = 0;
            if (mrp != 0 && discounted_price != 0) {
                discount = 100 - Math.round(discounted_price * 100 / mrp);
            }

            let is_procedure = false;
            let selectedCount = 0;
            let unselectedCount = 0;
            let finalProcedureDealPrice = discounted_price;
            let finalProcedureMrp = mrp;
            procedure_categories.map(x => {
                is_procedure = true;
                x.procedures.filter(x => x.is_selected).map(x => {
                    finalProcedureDealPrice += x.deal_price;
                    finalProcedureMrp += x.mrp;
                    selectedCount++;
                });

                unselectedCount += x.procedures.filter(x => !x.is_selected).length;
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
                        { className: 'row no-gutters', style: { cursor: 'pointer' }, onClick: e => {
                                if (doctors && doctors.length == 1) {
                                    if (enabled_for_online_booking) {
                                        this.bookNowClicked(doctor.id, doctor.url, hospital_id || '');
                                    } else {
                                        this.cardClick(doctor.id, doctor.url, hospital_id, e);
                                    }
                                } else {
                                    this.toggleSelectDoctor(e);
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
                        doctors.map((d, x) => {
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
                                        { style: { cursor: 'pointer' }, onClick: this.bookNowClicked.bind(this, d.id, d.url, hospital_id || ''), className: 'showBookTestListBtn' },
                                        'Book Now'
                                    ) : _react2.default.createElement(
                                        'button',
                                        { style: { cursor: 'pointer' }, onClick: this.cardClick.bind(this, d.id, d.url, hospital_id), className: 'showBookTestListBtn contact-small-btn' },
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
}

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");


class SearchResultsView extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.scrollHandler = () => {
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
            var screenSize = window.screen && window.screen.width || null;
            let height = 375;
            if (screenSize && screenSize < 992) {
                height = height - 120;
            }
            if (scrollPosition > height) {
                this.setState({ showSearchBtn: true });
            } else {
                this.setState({ showSearchBtn: false });
            }
        };

        let seoData = null;
        let footerData = null;
        const parsed = queryString.parse(this.props.location.search);
        if (this.props.initialServerData) {
            seoData = this.props.initialServerData.seoData;
            footerData = this.props.initialServerData.footerData;
        }
        this.state = {
            //seoData, 
            footerData,
            seoFriendly: this.props.match.url.includes('-sptcit') || this.props.match.url.includes('-sptlitcit') || this.props.match.url.includes('-ipddp'),
            clinic_card: this.props.location.search.includes('clinic_card') || null,
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
    }

    componentDidMount() {
        /*let aa = {...SCROLL}
        //aa.init()
        aa.addEvents('map')*/
        const parsed = queryString.parse(this.props.location.search);
        //API TO GET SPONSORLIST 
        let searchUrl = null;
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
            let extraData = {
                selectedLocation: this.props.selectedLocation,
                type: parsed.fromVip ? 'is_vip' : parsed.fromGoldVip ? 'is_gold' : null
            };
            this.props.getNearbyHospitals(extraData);
            this.props.getTopHospitals(extraData);
        }

        if (this.props.mergeUrlState) {
            let getSearchId = true;
            //if search id exist in url then we get data for that search id from store
            if (this.props.location.search.includes('search_id')) {

                if (this.props.search_id_data && this.props.search_id_data[parsed.search_id] && this.props.search_id_data[parsed.search_id].data) {

                    getSearchId = false;
                    if (this.props.search_id_data[parsed.search_id].data.result && this.props.search_id_data[parsed.search_id].data.result.length && !this.props.fetchNewResults) {

                        this.setState({ search_id: parsed.search_id }, () => {
                            this.props.getSearchIdResults(parsed.search_id, this.props.search_id_data[parsed.search_id]);
                        });
                    } else {
                        let filters = {};
                        filters.commonSelectedCriterias = this.props.search_id_data[parsed.search_id].commonSelectedCriterias;
                        filters.filterCriteria = this.props.search_id_data[parsed.search_id].filterCriteria;
                        this.setState({ search_id: parsed.search_id }, () => {
                            let page = 1;
                            if (!this.props.fetchNewResults) {
                                page = parsed.page || 1;
                            }
                            this.props.setSearchId(parsed.search_id, filters, page);
                        });
                    }
                }
            }

            if (getSearchId) {
                //If no searchId in url then we create search id and store data corresponding to that search id
                let filters = {};
                filters.commonSelectedCriterias = this.props.nextSelectedCriterias;
                filters.filterCriteria = this.props.nextFilterCriteria;
                let search_id = this.generateSearchId();
                if (window) {
                    window.scrollTo(0, 0);
                }
                this.setState({ search_id: search_id }, () => {
                    //Check for insured user
                    if (this.props.is_login_user_insured && this.props.insurance_status == 1) {
                        filters.filterCriteria = _extends({}, filters.filterCriteria);
                        filters.filterCriteria.is_insured = true;
                    }
                    let new_url = this.buildURI(this.props);
                    this.props.history.replace(new_url);
                    this.props.setSearchId(search_id, filters, parsed.page || 1);
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
            let page = 1;
            if (parsed && parsed.page) {
                page = parsed.page || 1;
            }
            this.props.getFooterData(this.props.match.url.split('/')[1], page).then(footerData => {
                if (footerData) {
                    this.setState({ footerData: footerData });
                }
            });
        }
        // if (window) {
        //     window.scrollTo(0, 0)
        // }
    }

    componentWillReceiveProps(props) {
        //START Save Selected City on Location Change
        if (props.selectedLocation && this.props.selectedLocation) {
            if ((this.state.search_string || this.state.fromVip) && props.selectedLocation != this.props.selectedLocation) {
                let extraData = {
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
        let search_id = '';
        let page = 1;
        const parsed = queryString.parse(props.location.search);
        if (props.location.search.includes('search_id')) {
            search_id = parsed.search_id;
        } else if (this.state.search_id) {
            search_id = this.state.search_id;
        }
        if (parsed.page) {
            page = parsed.page || 1;
        }

        if (props.mergeUrlState && props.mergeUrlState != this.props.mergeUrlState) {
            let filters = {};
            filters.commonSelectedCriterias = props.commonSelectedCriterias;
            filters.filterCriteria = props.filterCriteria;
            if (search_id) {
                this.setState({ search_id: search_id }, () => {
                    let new_url = this.buildURI(props);
                    this.props.history.replace(new_url);
                    this.props.setSearchId(search_id, filters, page);
                });
            } else {
                search_id = this.generateSearchId();
                this.setState({ search_id: search_id }, () => {
                    let new_url = this.buildURI(props);
                    this.props.history.replace(new_url);
                    //Check if user insured
                    if (props.is_login_user_insured && props.insurance_status == 1) {
                        filters.filterCriteria = _extends({}, filters.filterCriteria);
                        filters.filterCriteria.is_insured = true;
                    }

                    this.props.setSearchId(search_id, filters, page);
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
                let doctor_name = '',
                    hospital_name = '',
                    hospital_id = '';
                let state = {
                    filterCriteria: _extends({}, this.props.nextFilterCriteria, {
                        sort_on: "distance",
                        doctor_name, hospital_name, hospital_id
                    }),
                    nextFilterCriteria: _extends({}, this.props.nextFilterCriteria, {
                        sort_on: "distance",
                        doctor_name, hospital_name, hospital_id
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
                let new_url = this.buildURI(props);
                this.props.history.replace(new_url);
            }
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined' && this.state.scrollEventAdded) {
            window.removeEventListener('scroll', this.scrollHandler);
        }
    }

    detectLocationClick() {
        this.setState({ detectLocation: true });
    }

    generateSearchId(uid_string) {
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

    getLocationParam(tag) {
        // this API assumes the context of react-router-4
        const paramString = this.props.location.search;
        const params = new URLSearchParams(paramString);
        return params.get(tag);
    }

    applyFilters(filterState) {
        // clear LANDING_PAGE to enable loader
        //apply filters and get updated data
        if (typeof window == 'object') {
            window.ON_LANDING_PAGE = false;
        }
        this.resetQuickFilters();
        let search_id_data = Object.assign({}, this.props.search_id_data);
        const parsed = queryString.parse(this.props.location.search);

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

    buildURI(state) {
        //keep on updating url with the updated filters 
        const parsed = queryString.parse(this.props.location.search);

        let { selectedLocation, commonSelectedCriterias, filterCriteria, locationType, page } = state;
        let specializations_ids = commonSelectedCriterias.filter(x => x.type == 'speciality').map(x => x.id);
        let condition_ids = commonSelectedCriterias.filter(x => x.type == 'condition').map(x => x.id);
        let procedures_ids = commonSelectedCriterias.filter(x => x.type == 'procedures').map(x => x.id);
        let category_ids = commonSelectedCriterias.filter(x => x.type == 'procedures_category').map(x => x.id);

        let ipd_ids = commonSelectedCriterias.filter(x => x.type == 'ipd').map(x => x.id);

        let group_ids = commonSelectedCriterias.filter(x => x.type == 'group_ids').map(x => x.id);

        let lat = 28.644800;
        let long = 77.216721;
        let place_id = "";
        let locality = 'Delhi';
        let sub_locality = '';

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
        let sort_on = filterCriteria.sort_on || "";
        let sort_order = filterCriteria.sort_order || "";
        let availability = filterCriteria.availability || [];
        let avg_ratings = filterCriteria.avg_ratings || [];
        let gender = filterCriteria.gender || '';
        let sits_at_hospital = filterCriteria.sits_at_hospital;
        let sits_at_clinic = filterCriteria.sits_at_clinic;

        let hospital_name = filterCriteria.hospital_name || "";
        let doctor_name = filterCriteria.doctor_name || "";
        let hospital_id = filterCriteria.hospital_id || "";
        let is_insured = filterCriteria.is_insured || false;
        let specialization_filter_ids = filterCriteria.specialization_filter_ids || [];

        let url = '';

        //Check if any filter applied 
        let is_filter_applied = false;

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

        let is_params_exist = false;
        url = `${window.location.pathname}`;

        if (page > 1) {
            url += `?page=${page}`;
            is_params_exist = true;
        }

        url += `${is_params_exist ? '&' : '?'}search_id=${this.state.search_id}`;
        is_params_exist = true;
        if (is_filter_applied || !this.state.seoFriendly) {

            url += `&specializations=${specializations_ids}&conditions=${condition_ids}&lat=${lat}&long=${long}&sort_on=${sort_on}&sort_order=${sort_order}&availability=${availability}&gender=${gender}&avg_ratings=${avg_ratings}&doctor_name=${doctor_name || ""}&hospital_name=${hospital_name || ""}&place_id=${place_id}&locationType=${locationType || ""}&procedure_ids=${procedures_ids || ""}&procedure_category_ids=${category_ids || ""}&hospital_id=${hospital_id}&ipd_procedures=${ipd_ids || ''}&is_insured=${is_insured}&locality=${locality}&sub_locality=${sub_locality}&sits_at_hospital=${sits_at_hospital}&sits_at_clinic=${sits_at_clinic}&group_ids=${group_ids}&specialization_filter_ids=${specialization_filter_ids}`;

            if (parsed && parsed.fromVip) {
                url += `&fromVip=${parsed.fromVip || ''}`;
            }

            if (parsed && parsed.utm_term) {
                url += `&utm_term=${parsed.utm_term || ''}`;
            }

            if (parsed && parsed.fromGoldVip) {
                url += `&fromGoldVip=${parsed.fromGoldVip || ''}`;
            }

            is_params_exist = true;
        } /* else if (this.state.seoFriendly) {
              url = `${window.location.pathname}`
          }*/

        if (parsed.utm_source) {
            url += `&utm_source=${parsed.utm_source || ''}`;
        }

        if (parsed.utm_medium) {
            url += `&utm_medium=${parsed.utm_medium || ''}`;
        }

        if (parsed.utm_campaign) {
            url += `&utm_campaign=${parsed.utm_campaign || ''}`;
        }

        if (this.state.clinic_card) {
            url += `${is_params_exist ? '&' : '?'}clinic_card=true`;
            is_params_exist = true;
        }

        if (parsed.get_feedback) {
            url += `${is_params_exist ? '&' : '?'}get_feedback=${parsed.get_feedback}`;
            is_params_exist = true;
        }

        if (parsed.showPopup) {
            url += `${is_params_exist ? '&' : '?'}showPopup=${parsed.showPopup}`;
            is_params_exist = true;
        }

        if (this.state.showNonIpdPopup) {
            url += `${'&show_popup=' + this.state.showNonIpdPopup}`;
        }

        return url;
    }

    getDoctorList(state = null, page = null, cb = null) {
        //get doctor list on filters applied
        let searchUrl = null;
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
        this.props.getDoctors(state, page, false, searchUrl, (...args) => {
            // this.setState({ seoData: args[1] })
            if (cb) {
                cb(...args);
                let new_url = this.buildURI(state);
                this.props.history.replace(new_url);
            } else {
                let new_url = this.buildURI(state);
                this.props.history.replace(new_url);
            }
        }, this.state.clinic_card).catch(e => {
            this.setState({ showError: true });
        });
    }

    getMetaTagsData(seoData) {
        let title = '';
        let description = "";
        if (this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length) {
            title = `${this.props.commonSelectedCriterias[0].name} : Book Best ${this.props.commonSelectedCriterias[0].name} Doctors Near You`;
            description = `${this.props.commonSelectedCriterias[0].name}: Book appointment with the best ${this.props.commonSelectedCriterias[0].name} from top hospitals and clinics near you at discounted price. Check doctor reviews and more.`;
        }
        let schema = {};
        if (seoData) {
            title = seoData.title || title;
            description = seoData.description || description;
            schema = seoData.schema || schema;
        }
        if (parseInt(this.props.page) != 1) {
            title = 'Page ' + this.props.page + ' - ' + title;
        }
        return { title, description, schema };
    }

    resetQuickFilters() {
        this.setState({ quickFilter: {} });
    }

    applyQuickFilter(filter) {
        this.setState({ quickFilter: filter });
    }

    isFilterApplied(filterCriteria) {
        //Check if any filter applied 
        let is_filter_applied = false;
        if (filterCriteria) {
            let sort_on = filterCriteria.sort_on || "";
            let sort_order = filterCriteria.sort_order || "";
            let availability = filterCriteria.availability || [];
            let avg_ratings = filterCriteria.avg_ratings || [];
            let gender = filterCriteria.gender || '';
            let sits_at_hospital = filterCriteria.sits_at_hospital;
            let sits_at_clinic = filterCriteria.sits_at_clinic;

            let hospital_name = filterCriteria.hospital_name || "";
            let doctor_name = filterCriteria.doctor_name || "";
            let hospital_id = filterCriteria.hospital_id || "";
            let is_insured = filterCriteria.is_insured || false;

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

    searchDoctorSpecialization(speciality, isViewAll) {
        //filter to search doctor specialization
        if (window) {
            window.scrollTo(0, 0);
        }
        let specialityData = {};
        let ViewAllData = [];
        if (isViewAll) {
            speciality.map((spec, i) => {
                ViewAllData.push({ id: spec.specialization_id, type: 'speciality' });
            });

            let state = {};
            let hospital_id = '';
            let doctor_name = '';
            let hospital_name = '';
            if (ViewAllData.length) {
                this.props.cloneCommonSelectedCriterias(ViewAllData);
            }

            state = {
                filterCriteria: _extends({}, this.props.filterCriteria, {
                    hospital_id, doctor_name, hospital_name
                }),
                nextFilterCriteria: _extends({}, this.props.filterCriteria, {
                    hospital_id, doctor_name, hospital_name
                })
            };
            let data = {
                'Category': 'ConsumerApp', 'Action': 'SimilarSpecializationsViewAll', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'similar-specializations-viewall'
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.mergeOPDState(state);
            this.props.history.push(`/opd/searchresults`);
        } else {
            specialityData.type = 'speciality';
            specialityData.name = speciality.specialization_name;
            specialityData.id = speciality.specialization_id;
            this.props.toggleOPDCriteria('speciality', specialityData, true);
            setTimeout(() => {
                this.props.history.push('/opd/searchresults');
            }, 100);
            let data = {
                'Category': 'ConsumerApp', 'Action': 'SimilarSpecializations', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'similar-specializations'
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }

    SimilarSpecialization(flag) {
        /*
        let dataLength = parseInt(this.props.similar_specializations.length/2)
        let count = 0
        if (!flag) {
        count = dataLength;
        dataLength = 
        }*/
        //funciton to return search specialization to render
        let dataModel = [];
        for (let i = 0; i < this.props.similar_specializations.length; i++) {
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

    SimilarSpecializationData() {
        let data = _react2.default.createElement(
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

    sortFilterClicked() {
        //function which called when we click on screen-filters 
        if (this.child && this.child.sortFilterClicked) {
            this.child.sortFilterClicked();
        }
    }

    hospitalCardClicked(top = false, data) {
        let gtmData = {};
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
        let redirectUrl = '';

        if (data.url) {
            redirectUrl = `/${data.url}?showPopup=true`;
        } else {
            redirectUrl = `/ipd/hospital/${data.id}?showPopup=true`;
        }
        this.props.history.push(redirectUrl);
    }

    navigateToSearchVip() {
        let gtmData = {
            'Category': 'ConsumerApp', 'Action': 'search-bar-clicked-fromVip', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'search-bar-clicked-fromVip'
        };
        _gtm2.default.sendEvent({ data: gtmData });
        this.props.history.push('/search');
    }

    viewAllHospitalClicked() {
        let gtmData = {
            'Category': 'ConsumerApp', 'Action': 'DoctorSearchHospitalViewAllClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-search-hospital-view-all-clicked'
        };
        _gtm2.default.sendEvent({ data: gtmData });
        this.props.mergeIpdCriteria({
            commonSelectedCriterias: [],
            nextSelectedCriterias: []
        });
        this.props.history.push(`/ipd/searchHospitals`);
    }

    nonIpdLeads(phone_number) {
        const parsed = queryString.parse(this.props.location.search);
        let criteriaStr = this.getCriteriaString(this.props.commonSelectedCriterias);
        let data = { phone_number: phone_number, lead_source: 'docads', source: parsed, lead_type: 'DOCADS', doctor_name: criteriaStr, exitpoint_url: 'http://docprime.com' + this.props.location.pathname, doctor_id: null, hospital_id: null, hospital_name: null };
        if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
            data.utm_tags = this.props.common_utm_tags.filter(x => x.type == "common_xtra_tags")[0].utm_tags;
        }
        let visitor_info = _gtm2.default.getVisitorInfo();
        if (visitor_info && visitor_info.visit_id) {
            data.visit_id = visitor_info.visit_id;
            data.visitor_id = visitor_info.visitor_id;
        }
        let gtm_data = { 'Category': 'ConsumerApp', 'Action': 'DocAdsSearchListingSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-search-listing-Submit-click' };
        _gtm2.default.sendEvent({ data: gtm_data });
        this.props.saveLeadPhnNumber(phone_number);
        if (this.state.is_lead_enabled && !_storage2.default.isAgent()) {
            this.setState({ is_lead_enabled: false });
            this.props.NonIpdBookingLead(data);
            setTimeout(() => {
                this.setState({ is_lead_enabled: true });
            }, 5000);
        }
        this.setState({ to_be_force: 0 });
    }

    closeIpdLeadPopup(from) {
        if (from) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'DocAdsSearchListingCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'doc-ads-search-listing-cross-click'
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState({ to_be_force: 0 });
        }
    }

    getCriteriaString(selectedCriterias) {
        if (selectedCriterias && selectedCriterias.length) {
            let is_group_ids_exist = selectedCriterias.filter(x => x.type == 'group_ids');
            let selectedDataView = is_group_ids_exist.length ? is_group_ids_exist : selectedCriterias;

            return selectedDataView.reduce((final, curr, i) => {
                if (i != 0) {
                    final += ', ';
                }
                final += `${curr.name}`;
                return final;
            }, "");
        }
    }

    render() {
        let show_pagination = this.props.doctorList && this.props.doctorList.length > 0;
        let url = `${_config2.default.API_BASE_URL}${this.props.location.pathname}`;
        url = url.replace(/&page=\d{1,}/, "");
        let page = "";
        let curr_page = parseInt(this.props.page);
        let prev = "";
        if (curr_page > 1) {
            page = `?page=${curr_page}`;
            prev = url;
            if (curr_page > 2) {
                prev += `?page=${curr_page - 1}`;
            }
        }
        let next = "";
        if (this.props.count > curr_page * 20) {
            next = url + `?page=${curr_page + 1}`;
        }

        // do not set rel next/prev for non seoFriendly pages
        if (!this.state.seoFriendly) {
            next = "";
            prev = "";
        }

        // check if this was the landing page
        let landing_page = false;
        if (typeof window == 'object' && window.ON_LANDING_PAGE) {
            landing_page = true;
        }

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
            _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                    canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.canonical_url ? `/${this.props.canonical_url}` : this.props.match.url}${page}`,
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
                    _react2.default.createElement(_newTopBar2.default, _extends({}, this.props, { applyFilters: this.applyFilters.bind(this), seoData: this.props.seoData, clinic_card: !!this.state.clinic_card, seoFriendly: this.state.seoFriendly, resetQuickFilters: this.resetQuickFilters.bind(this), quickFilter: this.state.quickFilter, fromVip: this.state.fromVip, topBarRef: ref => this.child = ref })),
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
                                            { className: 'referDoctorbtn', onClick: e => {
                                                    e.preventDefault();
                                                    let data = {
                                                        'Category': 'ConsumerApp', 'Action': 'ReferDoctorListNoresult', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'refer-doctor-list-noresult'
                                                    };
                                                    _gtm2.default.sendEvent({ data: data });
                                                    this.props.history.push('/doctorsignup?member_type=1');
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
                            this.props.topHospitals && this.props.topHospitals.top_hospitals && this.props.topHospitals.top_hospitals.length > 0 && _react2.default.createElement(_carouselView2.default, { topHeading: 'Top Hospitals', dataList: this.props.topHospitals.top_hospitals, dataType: 'topHospitals', carouselCardClicked: (top, data) => this.hospitalCardClicked(top, data), topHospital: true }),
                            this.props.nearbyHospitals && this.props.nearbyHospitals.hospitals && this.props.nearbyHospitals.hospitals.length > 0 && _react2.default.createElement(_carouselView2.default, { topHeading: 'Nearby Hospitals', dataList: this.props.nearbyHospitals.hospitals, dataType: 'nearbyHospitals', carouselCardClicked: (top, data) => this.hospitalCardClicked(top, data), extraHeading: 'View All', navigateTo: () => this.viewAllHospitalClicked() }),
                            _react2.default.createElement(
                                'div',
                                { className: 'row vipNetTop searchForVip filter-row sticky-header mbl-stick sort-sticky-network', ref: 'vip_srch_widget' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'srt-scrl-btn', onClick: () => this.sortFilterClicked() },
                                    _react2.default.createElement('img', { src: "/assets" + '/img/filtersort.png' }),
                                    ' Sort/Filter'
                                )
                            )
                        ),
                        _react2.default.createElement(_index2.default, _extends({}, this.props, { applyFilters: this.applyFilters.bind(this), getDoctorList: this.getDoctorList.bind(this), clinic_card: !!this.state.clinic_card, seoFriendly: this.state.seoFriendly, detectLocationClick: () => this.detectLocationClick(), applyQuickFilter: this.applyQuickFilter.bind(this), SimilarSpecializationData: this.SimilarSpecializationData.bind(this), sponsorData: this.state.sponsorData })),
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CarouselView extends _react2.default.Component {

				scroll(type) {
								var elmnt = document.getElementById(`top_${this.props.dataType}`);

								if (elmnt && document.getElementsByClassName(`top_${this.props.dataType}_list`) && document.getElementById(`leftArrow_${this.props.dataType}`) && document.getElementById(`RightArrow_${this.props.dataType}`)) {

												let outerDivWidth = elmnt.offsetWidth;
												let childDivWidth = document.getElementsByClassName(`top_${this.props.dataType}_list`)[0].offsetWidth;
												let cardCount = document.getElementsByClassName(`top_${this.props.dataType}_list`)[0].childElementCount;
												let cardWidth = Math.ceil(childDivWidth / cardCount);

												let leftScroll = elmnt.scrollLeft;
												let scrollVal = Math.floor(outerDivWidth / cardWidth) * cardWidth;
												let cardEnd = cardCount * cardWidth;

												if (type == 'right') {
																elmnt.scroll({ left: leftScroll + scrollVal, behavior: 'smooth' });
																if (cardEnd <= leftScroll + scrollVal + outerDivWidth) {
																				document.getElementById(`leftArrow_${this.props.dataType}`).classList.add("d-none");
																}
																document.getElementById(`RightArrow_${this.props.dataType}`).classList.remove("d-none");
												} else {
																elmnt.scroll({ left: leftScroll - scrollVal, behavior: 'smooth' });
																if (leftScroll - scrollVal <= 0) {
																				document.getElementById(`RightArrow_${this.props.dataType}`).classList.add("d-none");
																}
																document.getElementById(`leftArrow_${this.props.dataType}`).classList.remove("d-none");
												}
								}
				}

				render() {

								let { topHeading, dataList, dataType, topHospital, extraHeading, viewAll } = this.props;
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
																				{ onClick: () => this.props.navigateTo() },
																				extraHeading
																)
												),
												_react2.default.createElement(
																'div',
																{ className: 'pkgSliderContainer network-slider', id: `top_${this.props.dataType}` },
																_react2.default.createElement(
																				'div',
																				{ className: `pkgCardsList d-inline-flex sub-wd-cards top_${this.props.dataType}_list` },
																				dataList.map((data, key) => {
																								return _react2.default.createElement(
																												'a',
																												{ key: `${key}_${data.id}`, href: '', className: 'pkgcustCards', onClick: () => this.props.carouselCardClicked(data, topHospital ? true : false) },
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
																				{ className: 'pkg-btnlft d-none', id: `RightArrow_${dataType}`, onClick: this.scroll.bind(this, 'left') },
																				_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
																),
																_react2.default.createElement(
																				'div',
																				{ className: 'pkg-btnrgt', id: `leftArrow_${dataType}`, onClick: this.scroll.bind(this, 'right') },
																				_react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
																)
												)
								);
				}
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _doctorResultCard = __webpack_require__(/*! ../../commons/doctorResultCard */ "./dev/js/components/opd/commons/doctorResultCard/index.js");

var _doctorResultCard2 = _interopRequireDefault(_doctorResultCard);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _Loader = __webpack_require__(/*! ../../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _clinicResultCard = __webpack_require__(/*! ../../commons/clinicResultCard */ "./dev/js/components/opd/commons/clinicResultCard/index.js");

var _clinicResultCard2 = _interopRequireDefault(_clinicResultCard);

var _bannerCarousel = __webpack_require__(/*! ../../../commons/Home/bannerCarousel */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _mapHelpers = __webpack_require__(/*! ../../../../helpers/mapHelpers */ "./dev/js/helpers/mapHelpers.js");

var _RatingStars = __webpack_require__(/*! ../../../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DoctorsList extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    componentDidMount() {
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
        setTimeout(() => {
            this.setState({ hasMore: true });
        }, 0);
        this.setState(_extends({}, this.props.filterCriteria));
        let selectedLocation = '';
        let lat = 28.644800;
        let long = 77.216721;
        if (this.props.selectedLocation) {
            selectedLocation = this.props.selectedLocation;
            lat = selectedLocation.geometry.location.lat;
            long = selectedLocation.geometry.location.lng;
            if (typeof lat === 'function') lat = lat();
            if (typeof long === 'function') long = long();
        }

        this.props.getOfferList(lat, long);
    }

    componentWillReceiveProps(props) {
        if (props.filterCriteria) {
            this.setState({ sort_on: props.filterCriteria.sort_on, sort_order: props.filterCriteria.sort_order, availability: props.filterCriteria.availability || [] });
        }
    }

    componentWillUnmount() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'DoctorSearchPagination', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-search-pagination', 'Pages': this.state.page
        };
        _gtm2.default.sendEvent({ data: data });

        // if (window) {
        //     window.onscroll = null
        // }
    }

    getLocationParam(tag) {
        // this API assumes the context of react-router-4
        const paramString = this.props.location.search;
        const params = new URLSearchParams(paramString);
        return params.get(tag);
    }

    loadMore(page) {
        this.setState({ hasMore: false, loading: true });
        this.props.getDoctorList(null, page + 1, hasMore => {
            this.setState({ loading: false, page: page + 1 });
            setTimeout(() => {
                this.setState({ hasMore });
            }, 1000);
        });
    }

    toggleScroll() {
        if (window) {
            window.scrollTo(0, 0);
        }
        this.setState({ readMore: 'search-details-data-less' });
    }

    applyQuickFilters(type, val, isArray, e) {
        let value = val;
        if (isArray) {
            let selectedVal = [].concat(this.state[type]) || [];
            let found = false;
            value = selectedVal.filter(data => {
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

        let gtmData = {
            'Category': 'OpdQuickFilterClicked', 'Action': 'OpdQuickFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-quick-filter-clicked', 'url': window.location.pathname, 'type': type, 'val': val
        };
        _gtm2.default.sendEvent({ data: gtmData });

        let filters = _extends({}, this.props.filterCriteria);
        if (type.includes('sort_on')) {

            if (val.includes('price_asc') || val.includes('price_desc')) {

                if (this.state[type] == 'fees' && (this.state['sort_order'] == 'asc' && val.includes('price_asc') || this.state['sort_order'] == 'desc' && val.includes('price_desc'))) {
                    this.setState({ sort_on: null, sort_order: null }, () => {
                        filters = Object.assign(_extends({ filters }, this.state));
                        this.props.applyFilters(filters);
                    });
                } else {
                    this.setState({ sort_on: 'fees', sort_order: val.includes('price_asc') ? 'asc' : 'desc' }, () => {
                        filters = Object.assign(_extends({ filters }, this.state));
                        this.props.applyFilters(filters);
                    });
                }
            } else {
                this.setState({ sort_on: this.state[type] == value ? null : value, sort_order: null }, () => {
                    filters = Object.assign(_extends({ filters }, this.state));
                    this.props.applyFilters(filters);
                });
            }
        } else {
            this.setState({ [type]: this.state[type] == value ? '' : value }, () => {
                filters = Object.assign(_extends({ filters }, this.state));
                this.props.applyFilters(filters);
            });
        }
    }

    viewMoreClicked() {
        let filters = {
            viewMore: true
        };
        this.props.applyQuickFilter(filters);
    }

    detectLocation(type) {
        let timeout = setTimeout(() => {
            if (this.state.detectLoading) {
                this.setState({ detectLoading: false });
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not fetch location." });
            }
        }, 5000);

        let data = {
            'Category': 'ConsumerApp', 'Action': `DetectLocation${type}Click`, 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': `Detect-Location-${type}-Click`, 'Page': 'doctor-search'
        };
        _gtm2.default.sendEvent({ data: data });

        this.setState({ detectLoading: true });
        this.props.detectLocationClick();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                (0, _mapHelpers._getlocationFromLatLong)(parseFloat(position.coords.latitude), parseFloat(position.coords.longitude), 'locality', location_object => {
                    this.props.selectLocation(location_object, 'autoDetect').then(() => {
                        clearTimeout(timeout);
                        this.setState({ detectLoading: false });
                    });
                });
            }, (a, b, c) => {
                this.setState({ detectLoading: false });
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not fetch location." });
            }, (a, b, c) => {
                this.setState({ detectLoading: false });
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Could not fetch location." });
            });
        } else {
            this.setState({ detectLoading: false });
            // geolocation is not supported
        }
    }

    navigateToHospital(data) {
        let gtmData = {
            'Category': 'ConsumerApp', 'Action': 'SponsorCardClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'sponsor-card-clicked'
        };
        _gtm2.default.sendEvent({ data: gtmData });
        if (data.url) {
            this.props.history.push(`/${data.url}`);
        } else {
            this.props.history.push(`/ipd/hospital/${data.id}`);
        }
    }

    render() {

        let detectFlag = true;

        let { HOSPITALS, DOCTORS, doctorList, hospitalList } = this.props;

        let start_page = 0;
        if (this.props.curr_page) {
            start_page = Math.max(0, this.props.curr_page - 1);
        } else {
            if (this.props.page) {
                start_page = Math.max(0, this.props.page - 1);
            }
        }

        let result_list = doctorList;
        let result_data = DOCTORS;
        if (this.props.clinic_card) {
            result_list = hospitalList;
            result_data = HOSPITALS;
        }

        let card_ID = null;
        let bookableDoctors = true;

        result_list.map((cardId, i) => {
            if (detectFlag && result_data[cardId] && !result_data[cardId].hospitals[0].enabled_for_online_booking && this.props.seoFriendly && this.props.match.url.includes('-sptlitcit') && this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length) {
                card_ID = cardId;
                detectFlag = false;
            }
            if (i == 0) {
                if (result_data[cardId] && !result_data[cardId].hospitals[0].enabled_for_online_booking && this.props.seoFriendly && this.props.match.url.includes('-sptlitcit') && this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length) {
                    bookableDoctors = false;
                }
            }
        });

        let sponsorData = this.props.sponsorData && this.props.sponsorData.length ? this.props.sponsorData[0] : null;

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
                        { className: 'rd-more', onClick: () => this.setState({ readMore: '' }) },
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
                                    { className: 'clinic-card mb-3', onClick: () => this.navigateToHospital(sponsorData) },
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
                                                            `${sponsorData.all_doctors ? sponsorData.all_doctors.length : ''} Doctors`
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
                                                        `(${sponsorData.rating.length})`
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
                                                sponsorData.hospital_services.map((serv, key) => {
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
                                                    `+ ${sponsorData.hospital_services.length - 4} More`
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
                                result_list.map((cardId, i) => {
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
                                                            this.props.commonSelectedCriterias[0].name,
                                                            ' with great discounts near you'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'auto-location-btn fw-500', onClick: () => this.detectLocation('Sptlitcit') },
                                                        'Detect Location'
                                                    )
                                                )
                                            ) : '',
                                            i == 0 && this.props.seoFriendly && this.props.match.url.includes('-sptcit') && this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length ? _react2.default.createElement(
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
                                                            this.props.commonSelectedCriterias[0].name,
                                                            ' near me'
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'auto-location-btn fw-500', onClick: () => this.detectLocation('Sptcit') },
                                                    'Detect Location'
                                                )
                                            ) : '',
                                            i == 4 && (!this.state.availability || !this.state.availability.length) ? _react2.default.createElement(
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
                                                        { className: 'fw-500 sort-more-filter', onClick: this.viewMoreClicked.bind(this) },
                                                        'More filters'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'srt-sb-btn-cont' },
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: `${this.state.availability && this.state.availability.length && this.state.availability.indexOf('1') > -1 ? 'srt-act' : ''}`, onClick: this.applyQuickFilters.bind(this, 'availability', '1', true) },
                                                        'Today'
                                                    ),
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: `${this.state.availability && this.state.availability.length && this.state.availability.indexOf('2') > -1 ? 'srt-act' : ''}`, onClick: this.applyQuickFilters.bind(this, 'availability', '2', true) },
                                                        'Tomorrow'
                                                    ),
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: `${this.state.availability && this.state.availability.length && this.state.availability.indexOf('3') > -1 ? 'srt-act' : ''}`, onClick: this.applyQuickFilters.bind(this, 'availability', '3', true) },
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
                                                            this.props.commonSelectedCriterias[0].name,
                                                            ' near you'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'auto-location-btn fw-500', onClick: () => this.detectLocation('Sptlitcit') },
                                                        'Detect Location'
                                                    )
                                                )
                                            ) : '',
                                             false ? undefined : '',
                                            this.props.insurance_status != 1 && !this.state.sort_order && (i == 6 && this.state.availability && !this.state.availability.length || i == 3 && this.state.availability && this.state.availability.length) ? _react2.default.createElement(
                                                'div',
                                                { className: 'sort-sub-filter-container mb-3' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Sort by ',
                                                    _react2.default.createElement('span', { className: 'fw-700' }),
                                                    _react2.default.createElement(
                                                        'span',
                                                        { className: 'fw-500 sort-more-filter', onClick: this.viewMoreClicked.bind(this) },
                                                        'More filters'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'srt-sb-btn-cont' },
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: `${this.state.sort_on == 'fees' && this.state.sort_order == 'asc' ? 'srt-act' : ''}`, onClick: this.applyQuickFilters.bind(this, 'sort_on', 'price_asc', false) },
                                                        'Price Low to High'
                                                    ),
                                                    _react2.default.createElement(
                                                        'button',
                                                        { className: `${this.state.sort_on == 'fees' && this.state.sort_order == 'desc' ? 'srt-act' : ''}`, onClick: this.applyQuickFilters.bind(this, 'sort_on', 'price_desc', false) },
                                                        'Price High to Low'
                                                    )
                                                )
                                            ) : '',
                                            i == 5 && this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'doctor_search_page').length && !this.state.is_insured ?
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
                                                _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: 'doctor_search_page' }))
                                            ) : '',
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                this.props.clinic_card ? _react2.default.createElement(_clinicResultCard2.default, _extends({}, this.props, { details: result_data[cardId], key: i, rank: i })) : _react2.default.createElement(_doctorResultCard2.default, _extends({}, this.props, { details: result_data[cardId], key: i, rank: i }))
                                            ),
                                            this.props.similar_specializations && this.props.similar_specializations.length && !this.state.sort_order && (!this.state.availability || !this.state.availability.length) && (i == 7 || this.props.count - 1 == i) ? this.props.SimilarSpecializationData() : '',
                                            this.props.similar_specializations && this.props.similar_specializations.length && this.state.sort_order && (this.state.availability || this.state.availability.length) && this.props.count < 8 && i == this.props.count - 1 ? this.props.SimilarSpecializationData() : '',
                                            this.props.similar_specializations && this.props.similar_specializations.length && this.state.sort_order && (this.state.availability || this.state.availability.length) && this.props.count < 8 && i == 3 ? this.props.SimilarSpecializationData() : '',
                                            this.props.similar_specializations && this.props.similar_specializations.length && this.state.sort_order && (this.state.availability || this.state.availability.length) && i == 3 ? this.props.SimilarSpecializationData() : '',
                                            !!!card_ID && i == result_list.length - 1 && this.props.seoFriendly && this.props.match.url.includes('-sptlitcit') && this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length ? _react2.default.createElement(
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
                                                            this.props.commonSelectedCriterias[0].name,
                                                            ' near you'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'auto-location-btn fw-500', onClick: () => this.detectLocation('Sptlitcit') },
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Range = __webpack_require__(/*! rc-slider/lib/Range */ "rc-slider/lib/Range");

var _Range2 = _interopRequireDefault(_Range);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

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

class TopBar extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    componentWillReceiveProps(props) {
        this.setState(_extends({}, props.filterCriteria, { selectedHospitalIds: props.filterCriteria.hospital_id ? props.filterCriteria.hospital_id : [], quickFilter: props.quickFilter || {} }), () => {
            if (this.state.quickFilter && this.state.quickFilter.viewMore) {
                this.sortFilterClicked();
            }
        });
        let allReadySelectedSpecializationId = [];
        if (props.commonSelectedCriterias && props.commonSelectedCriterias.length > 0) {
            props.commonSelectedCriterias.map((spec_id, k) => {
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

    componentDidMount() {
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
    applyFilters() {
        let filterState = {
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
        let data = {
            'Category': 'FilterClick', 'Action': 'Clicked on Filter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-filter-clicked', 'url': window.location.pathname, 'availability': this.state.availability, 'sits_at_clinic': this.state.sits_at_clinic, 'sits_at_hospital': this.state.sits_at_hospital, 'gender': this.state.gender, 'sort_order': this.state.sort_order || '', 'sort_on': this.state.sort_on || '', 'rating': this.state.avg_ratings, hospital_id: this.state.selectedHospitalIds || '', specialization_filter_id: this.state.specialization_filter_ids || '', specializations: this.state.defaultSpecializationIds || ''
        };
        _gtm2.default.sendEvent({ data: data });

        let ifAnyFilterApplied = this.isDataFiltered({}, true);
        if (ifAnyFilterApplied) {
            this.props.applyFilters(filterState);
        }

        this.setState({ dropdown_visible: false });
    }

    handleClose(reset = false, e) {

        if (reset) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ResetOpdFilter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'reset-opd-filter', 'url': window.location.pathname, 'availability': this.state.availability, 'sits_at_clinic': this.state.sits_at_clinic, 'sits_at_hospital': this.state.sits_at_hospital, 'gender': this.state.gender, 'sort_order': this.state.sort_order || '', 'sort_on': this.state.sort_on || '', 'rating': this.state.avg_ratings
            };
            _gtm2.default.sendEvent({ data: data });
            let resetFilters = {
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
            let data = {
                'Category': 'ConsumerApp', 'Action': 'CloseOpdFilter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'close-opd-filter', 'url': window.location.pathname, 'availability': this.state.availability, 'sits_at_clinic': this.state.sits_at_clinic, 'sits_at_hospital': this.state.sits_at_hospital, 'gender': this.state.gender, 'sort_order': this.state.sort_order || '', 'sort_on': this.state.sort_on || '', 'rating': this.state.avg_ratings
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState(_extends({
                dropdown_visible: false, hideOtherFilters: false, hideHospFilter: false, hideSpecFilter: false
            }, this.state.previous_filters, {
                quickFilter: {}
            }));
            //this.props.resetQuickFilters()
        }
    }

    toggleAllFilters(type, val, isArray = false, e) {
        let value = val;
        if (isArray) {
            let selectedVal = [].concat(this.state[type]) || [];
            let found = false;
            value = selectedVal.filter(data => {
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
                this.setState({ [type]: !this.state[type] });
            } else {
                this.setState({ 'sits_at_clinic': type.includes('sits_at_clinic') ? value : !value, 'sits_at_hospital': type.includes('sits_at_hospital') ? value : !value });
            }
        } else {
            this.setState({ [type]: this.state[type] == value ? '' : value });
        }
    }

    sortFilterClicked() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'OpdSortFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'opd-sort-filter-clicked', 'url': window.location.pathname, 'availability': this.state.availability, 'sits_at_clinic': this.state.sits_at_clinic, 'sits_at_hospital': this.state.sits_at_hospital, 'gender': this.state.gender, 'sort_order': this.state.sort_order || '', 'sort_on': this.state.sort_on || '', 'rating': this.state.avg_ratings
        };
        _gtm2.default.sendEvent({ data: data });
        let searchUrl = null;
        let page = this.props.page;
        let state = this.props;
        if (this.props.match.url.includes('-sptcit') || this.props.match.url.includes('-sptlitcit') || this.props.match.url.includes('-ipddp')) {
            searchUrl = this.props.match.url.toLowerCase();
            searchUrl = searchUrl.split('/');
            searchUrl = searchUrl.length > 1 ? searchUrl[1] : searchUrl[0];
        }
        this.props.getDoctorHospitalFilters(state, page, false, searchUrl, (...resp) => {
            if (resp && resp[0].result) {
                this.setState({ HospFilter: resp[0].result, HospFilterOnFoucsData: resp[0].result });
            }
        });

        this.props.getDoctorHospitalSpeciality(state, page, false, searchUrl, (...resp) => {
            if (resp && resp[0].result) {
                this.setState({ SpecialityFilter: resp[0].result, SpecialityFilterOnFocusData: resp[0].result });
            }
        });
        let currentFilters = {
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

    isDataFiltered(filterData = {}, checkIfAnyFilterAppliled = false) {

        if (checkIfAnyFilterAppliled) {

            try {
                let filterCount = 0;
                for (let filter in this.state.previous_filters) {

                    if (filter.includes('availability') || filter.includes('specialization') || filter.includes('selectedHospitalIds')) {

                        if (this.state.previous_filters[filter] && this.state[filter].length != this.state.previous_filters[filter].length) {

                            filterCount++;
                            break;
                        } else {

                            for (let arrFliter = 0; arrFliter < this.state[filter].length; arrFliter++) {
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
            let filterCount = 0;
            for (let filter in filterData) {

                if (filter.includes('hospital_type')) {
                    if (this.state['sits_at_clinic'] || this.state['sits_at_hospital']) {
                        filterCount++;
                    }
                } else if (filter.includes('availability') || filter.includes('specialization_filter_ids')) {
                    if (this.state[filter].length) {
                        filterCount++;
                    }
                } else if (filter.includes('selectedHospitalIds')) {
                    if (this.state['selectedHospitalIds'] != '' || this.state['selectedHospitalIds'].length) {
                        filterCount++;
                    }
                } else if (filterData[filter] != this.state[filter]) {
                    filterCount++;
                }
            }
            return filterCount;
        } catch (e) {
            return false;
        }
    }

    getCriteriaString(selectedCriterias) {
        if (selectedCriterias && selectedCriterias.length) {
            let is_group_ids_exist = selectedCriterias.filter(x => x.type == 'group_ids');
            let selectedDataView = is_group_ids_exist.length ? is_group_ids_exist : selectedCriterias;

            return selectedDataView.reduce((final, curr, i) => {
                if (i != 0) {
                    final += ', ';
                }
                final += `${curr.name}`;
                return final;
            }, "");
        }
    }

    goToLocation() {
        this.setState({
            searchCities: []
        });
        let redirect_to = "";
        if (window.location.pathname.includes('sptcit') || window.location.pathname.includes('sptlitcit')) {
            redirect_to = "/opd/searchresults";
        }

        let location_url = '/locationsearch';
        if (redirect_to) {
            location_url += `?redirect_to=${redirect_to}`;
        }
        this.props.setNextSearchCriteria();
        let data = {
            'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push(location_url);
    }

    overlayClick() {
        this.setState({ overlayVisible: false, searchCities: [], showLocationPopup: false });
        if (document.getElementById('location_element')) {
            document.getElementById('location_element').style.zIndex = '0';
        }
    }

    hideLocationPopup() {
        this.setState({ showLocationPopup: false });
    }

    popupContainer() {
        this.setState({ showPopupContainer: false, showLocationPopup: false });
    }

    shortenUrl() {
        if (window) {
            let url = window.location.href + '&force_location=true';
            this.props.urlShortner(url, (err, data) => {
                if (!err) {
                    this.setState({ shortURL: data.tiny_url });
                }
            });
        }
    }

    toggleInsured() {
        let data = {
            'Category': 'CoveredUnderOPDInsuranceClicked', 'Action': 'CoveredUnderLABInsuranceClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'covered-under-opd-insurance-clicked', 'url': window.location.pathname
        };
        _gtm2.default.sendEvent({ data: data });

        this.setState({ is_insured: !this.state.is_insured }, () => {

            let filterState = {
                is_insured: this.state.is_insured,
                hospital_id: this.state.selectedHospitalIds,
                sort_order: this.state.sort_order,
                sort_on: this.state.sort_on,
                avg_ratings: this.state.avg_ratings,
                availability: this.state.availability,
                gender: this.state.gender,
                sits_at_clinic: this.state.sits_at_clinic,
                sits_at_hospital: this.state.sits_at_hospital,
                specialization: []
            };
            this.props.applyFilters(filterState);
        });
    }

    toggleSpecialization(spec_id) {
        let test_ids = [].concat(this.state.specialization_filter_ids);
        let self = this;
        let found = false;
        test_ids = test_ids.filter(x => {
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
    handleChangeFocus(type) {
        if (type) {
            this.setState({ hideOtherFilters: true, hideSpecFilter: true });
        } else {
            this.setState({ hideOtherFilters: true, hideHospFilter: true });
        }
    }

    handleCloseExtraFilter(type) {
        this.setState({ hideOtherFilters: false, hideSpecFilter: false, hideHospFilter: false, filterSearchString: '' });
    }

    handleChangeHosp(event) {
        let search_string = event.target.value.toLowerCase();
        this.setState({ filterSearchString: event.target.value });
        let filtered_hosp_list = [];
        this.state.HospFilter.map(Hosp => {
            let hosp_name = Hosp.name.toLowerCase();
            if (hosp_name.includes(search_string)) {
                let index = hosp_name.indexOf(search_string);
                filtered_hosp_list.push({ id: Hosp.id, name: Hosp.name, rank: index });
            }
        });
        filtered_hosp_list = filtered_hosp_list.sort((x, y) => {
            return x.rank - y.rank;
        });
        this.setState({ HospFilterOnFoucsData: filtered_hosp_list });
    }

    handleChangeSpec(event) {
        let search_string = event.target.value.toLowerCase();
        this.setState({ filterSearchString: event.target.value });
        let filtered_spec_list = [];
        this.state.SpecialityFilter.map(Spec => {
            let spec_name = Spec.name.toLowerCase();
            if (spec_name.includes(search_string)) {
                let index = spec_name.indexOf(search_string);
                filtered_spec_list.push({ id: Spec.id, name: Spec.name, rank: index });
            }
        });
        filtered_spec_list = filtered_spec_list.sort((x, y) => {
            return x.rank - y.rank;
        });
        this.setState({ SpecialityFilterOnFocusData: filtered_spec_list });
    }

    toggleHospital(hosp_id) {
        let test_ids = [].concat(this.state.selectedHospitalIds);
        let self = this;
        let found = false;
        test_ids = test_ids.filter(x => {
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

    HospFilterData() {
        let liData = [];
        let self = this;
        if (self.state.selectedHospitalIds && self.state.selectedHospitalIds.length > 0 && !self.state.hideOtherFilters) {
            self.state.HospFilter.map((data, key) => {
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
            self.state.HospFilter.map((data, key) => {
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
                self.state.HospFilterOnFoucsData.map((data, key) => {
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
                self.state.HospFilter.map((data, key) => {
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

    SpecFilterData() {
        let liData = [];
        let self = this;
        if (self.state.specialization_filter_ids.length > 0 && !self.state.hideOtherFilters) {
            self.state.SpecialityFilter.map((data, key) => {
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
            self.state.SpecialityFilter.map((data, key) => {
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
                self.state.SpecialityFilterOnFocusData.map((data, key) => {
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
                self.state.SpecialityFilter.map((data, key) => {
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

    componentWillUnmount() {
        if (this.props.fromVip) {
            this.props.topBarRef(undefined);
        }
    }

    getCityListLayout(searchResults = []) {
        if (searchResults.length) {
            this.setState({ searchCities: searchResults });
        } else {
            this.setState({ searchCities: [] });
        }
    }

    selectLocation(city) {
        this.child.selectLocation(city, () => {

            this.setState({ searchCities: [] });
            let gtmData = {
                'Category': 'ConsumerApp', 'Action': 'DoctorSearchPageLocationSelected', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-search-location-selected'
            };
            _gtm2.default.sendEvent({ data: gtmData });
        });
    }

    getCityList() {

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
                            this.state.searchCities.map((result, i) => {
                                return _react2.default.createElement(
                                    'li',
                                    { key: i },
                                    _react2.default.createElement(
                                        'p',
                                        { className: '', onClick: this.selectLocation.bind(this, result) },
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

    render() {
        // console.log(this.state.specialization_filter_ids)
        // console.log(this.state.specialization)
        let ipd_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'ipd').map(x => x.id);
        let criteriaStr = this.getCriteriaString(this.props.commonSelectedCriterias);

        let locationName = "";
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
                            { className: `sorting-main-container ${this.state.hideOtherFilters ? 'd-none' : ''}` },
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
                                        { className: `sort-cards-list ${this.state.sort_on == '' ? 'chitActive' : ''}`, onClick: this.toggleAllFilters.bind(this, 'sort_on', '', false) },
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
                                        { className: `sort-cards-list ${this.state.sort_on == 'fees' && this.state.sort_order == 'asc' ? 'chitActive' : ''}`, onClick: this.toggleAllFilters.bind(this, 'sort_on', 'price_asc', false) },
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
                                        { className: `sort-cards-list ${this.state.sort_on == 'fees' && this.state.sort_order == 'desc' ? 'chitActive' : ''}`, onClick: this.toggleAllFilters.bind(this, 'sort_on', 'price_desc', false) },
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
                                        { className: `sort-cards-list ${this.state.sort_on == 'distance' ? 'chitActive' : ''}`, onClick: this.toggleAllFilters.bind(this, 'sort_on', 'distance', false) },
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
                                        { className: `sort-cards-list ${this.state.sort_on == 'experience' ? 'chitActive' : ''}`, onClick: this.toggleAllFilters.bind(this, 'sort_on', 'experience', false) },
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
                                        { className: `sortBtns ${this.state.avg_ratings == '3' ? 'srtBtnAct' : ''}`, onClick: this.toggleAllFilters.bind(this, 'avg_ratings', '3', false) },
                                        this.state.avg_ratings == '3' ? _react2.default.createElement('img', { className: 'srt-star-img', src: "/assets" + "/img/popupicon/rv-btn-star.svg" }) : _react2.default.createElement('img', { className: 'srt-star-img', src: "/assets" + "/img/customer-icons/selected-star.svg" }),
                                        '3.0 +'
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: `sortBtns ${this.state.avg_ratings == '4' ? 'srtBtnAct' : ''}`, onClick: this.toggleAllFilters.bind(this, 'avg_ratings', '4', false) },
                                        this.state.avg_ratings == '4' ? _react2.default.createElement('img', { className: 'srt-star-img', src: "/assets" + "/img/popupicon/rv-btn-star.svg" }) : _react2.default.createElement('img', { className: 'srt-star-img', src: "/assets" + "/img/customer-icons/selected-star.svg" }),
                                        '4.0 +'
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: `sortBtns ${this.state.avg_ratings == '4.5' ? 'srtBtnAct' : ''}`, onClick: this.toggleAllFilters.bind(this, 'avg_ratings', '4.5', false) },
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
                                        { className: `sortBtns ${this.state.availability && this.state.availability.length && this.state.availability.indexOf('1') > -1 ? 'srtBtnAct' : ''}`, onClick: this.toggleAllFilters.bind(this, 'availability', '1', true) },
                                        'Today'
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: `sortBtns ${this.state.availability && this.state.availability.length && this.state.availability.indexOf('2') > -1 ? 'srtBtnAct' : ''}`, onClick: this.toggleAllFilters.bind(this, 'availability', '2', true) },
                                        'Tomorrow'
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: `sortBtns ${this.state.availability && this.state.availability.length && this.state.availability.indexOf('3') > -1 ? 'srtBtnAct' : ''}`, onClick: this.toggleAllFilters.bind(this, 'availability', '3', true) },
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
                                        { className: `sortBtns ${this.state.gender == 'm' ? 'srtBtnAct' : ''}`, onClick: this.toggleAllFilters.bind(this, 'gender', 'm', false) },
                                        'Male'
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: `sortBtns ${this.state.gender == 'f' ? 'srtBtnAct' : ''}`, onClick: this.toggleAllFilters.bind(this, 'gender', 'f', false) },
                                        'Female'
                                    )
                                )
                            )
                        ),
                        this.state.HospFilter && this.state.HospFilter.length > 0 ? _react2.default.createElement(
                            'div',
                            { className: `sort-chk-filter-container ${this.state.hideHospFilter ? 'd-none' : ''}` },
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
                                        this.state.hideOtherFilters ? '' : `+${this.state.HospFilter.length - 5} more`
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
                            { className: `sort-chk-filter-container ${this.state.hideSpecFilter ? 'd-none' : ''}` },
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
                                        this.state.hideOtherFilters ? '' : `+${this.state.SpecialityFilter.length - 5} more`
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
                { className: `${this.props.fromVip ? 'vipNetTop' : ''} filter-row sticky-header mbl-stick vip-net-block` },
                this.props.breadcrumb && this.props.breadcrumb.length ? _react2.default.createElement(
                    'div',
                    { className: 'col-12 mrng-top-12 d-none d-md-block p-0' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'mrb-10 breadcrumb-list breadcrumb-list-ul', style: { 'wordBreak': 'breakWord' } },
                        this.props.breadcrumb && this.props.breadcrumb.length ? this.props.breadcrumb.map((data, key) => {
                            return _react2.default.createElement(
                                'li',
                                { className: 'breadcrumb-list-item', key: key },
                                key == this.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                    'span',
                                    null,
                                    data.title
                                ) : _react2.default.createElement(
                                    'a',
                                    { href: data.url, title: data.link_title || data.title, onClick: e => {
                                            e.preventDefault();
                                            this.props.history.push(key == 0 || key == this.props.breadcrumb.length - 1 ? data.url : `/${data.url}`);
                                        } },
                                    key == 0 || key == this.props.breadcrumb.length - 1 ? _react2.default.createElement(
                                        'span',
                                        { className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
                                        data.title
                                    ) : _react2.default.createElement(
                                        'h2',
                                        { className: 'fw-500 breadcrumb-title breadcrumb-colored-title d-inline-blck' },
                                        data.title
                                    )
                                ),
                                key != this.props.breadcrumb.length - 1 ? _react2.default.createElement(
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
                    _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: ref => this.child = ref, getCityListLayout: this.getCityListLayout.bind(this), resultType: 'search', locationName: locationName, fromVip: this.props.fromVip })),
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
                                `${this.props.count} ${ipd_ids.length ? 'Specialists' : 'Results'} for ${this.props.hospitalData && this.props.hospitalData.name ? `${criteriaStr || 'Doctor'}  in ${this.props.hospitalData.name}` : ''}`,
                                this.props.hospitalData && this.props.hospitalData.name ? '' : _react2.default.createElement(
                                    'h1',
                                    { className: 'sort-head-font-inline' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: `${this.props.commonSelectedCriterias && this.props.commonSelectedCriterias.length > 3 ? 'srch-truncate' : ''}` },
                                        `${criteriaStr || 'Doctor'}`
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { onClick: this.goToLocation.bind(this) },
                                        ` in ${locationName}`
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
                                    { className: 'shareLinkpopupOverlay', onClick: () => {
                                            this.setState({ shortURL: "" });
                                        } },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'shareLinkpopup', onClick: e => {
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
                                                onCopy: () => {
                                                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Shortened URL Copied." });
                                                    this.setState({ shortURL: "" });
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
                this.state.showLocationPopup && !this.props.fromVip ? _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: ref => this.child = ref, resultType: 'list', isTopbar: true, hideLocationPopup: () => this.hideLocationPopup(), locationName: locationName })) : '',
                this.state.showLocationPopup && this.state.overlayVisible && !this.props.clinic_card && !this.props.fromVip ? _react2.default.createElement('div', { className: 'locationPopup-overlay', onClick: () => this.overlayClick() }) : '',
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
}

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Range = __webpack_require__(/*! rc-slider/lib/Range */ "rc-slider/lib/Range");

var _Range2 = _interopRequireDefault(_Range);

var _reactCopyToClipboard = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

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

const queryString = __webpack_require__(/*! query-string */ "query-string");

class TopBar extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    componentWillReceiveProps(props) {
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

    componentDidMount() {
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

    handleInput(e) {
        let evName = e.target.name;
        let checked = e.target.checked;
        setTimeout(() => {
            this.setState({
                [evName]: checked
            });
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

    getCriteriaString(selectedCriterias) {
        if (selectedCriterias && selectedCriterias.length) {
            let selectedProcedureCategory = selectedCriterias.filter(x => x.type == 'procedures_category');
            let procedures = selectedCriterias.filter(x => x.type == 'procedures');

            return selectedCriterias.reduce((final, curr, i) => {
                if (i != 0) {
                    final += ', ';
                }
                final += `${curr.name}`;
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

    shortenUrl() {
        if (window) {
            let url = window.location.href;
            if (url.includes('?')) {
                url = window.location.href + '&force_location=true';
            } else {
                url = window.location.href + '?force_location=true';
            }
            this.props.urlShortner(url, (err, data) => {
                if (!err) {
                    this.setState({ shortURL: data.tiny_url });
                }
            });
        }
    }

    overlayClick() {
        this.setState({ overlayVisible: false, searchCities: [], showIpdLeadForm: true });
        if (document.getElementById('location_element')) {
            document.getElementById('location_element').style.zIndex = '0';
        }
    }

    hideLocationPopup() {
        this.setState({ showLocationPopup: false, showIpdLeadForm: true });
    }

    popupContainer() {
        this.setState({ showPopupContainer: false, showLocationPopup: false, showIpdLeadForm: true });
    }

    goToLocation() {
        this.setState({
            searchCities: []
        });
        let redirect_to = "";
        if (window.location.pathname.includes('sptcit') || window.location.pathname.includes('sptlitcit')) {
            redirect_to = "/opd/searchresults";
        }

        let location_url = '/locationsearch';
        if (redirect_to) {
            location_url += `?redirect_to=${redirect_to}`;
        }
        this.props.setNextSearchCriteria();
        let data = {
            'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push(location_url);
    }

    submitLeadFormGeneration(close = false) {
        if (close) {
            let gtmData = {
                'Category': 'ConsumerApp', 'Action': 'DoctorSearchIpdFormClosed', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'doctor-search-ipd-form-closed'
            };
            _gtm2.default.sendEvent({ data: gtmData });
        }
        this.setState({ showIpdLeadForm: false });
    }

    render() {

        let criteriaStr = this.getCriteriaString(this.props.commonSelectedCriterias);
        let locationName = "";
        if (this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
            locationName = this.props.selectedLocation.formatted_address;
        }
        if (this.props.seoData && this.props.seoData.location) {
            locationName = this.props.seoData.location;
        }

        const parsed = queryString.parse(this.props.location.search);
        let specializations = this.props.commonSelectedCriterias.filter(x => x.type == 'speciality');

        let ipd_ids = this.props.commonSelectedCriterias.filter(x => x.type == 'ipd').map(x => x.id);

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
                                        { className: 'shareLinkpopupOverlay', onClick: () => {
                                                this.setState({ shortURL: "" });
                                            } },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'shareLinkpopup', onClick: e => {
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
                                                    onCopy: () => {
                                                        _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Shortened URL Copied." });
                                                        this.setState({ shortURL: "" });
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
                                            ` in ${locationName}`
                                        ) : ''
                                    )
                                ),
                                _react2.default.createElement('img', { style: { width: 15, height: 15, marginLeft: 7, cursor: 'pointer' }, src: "/assets" + "/img/customer-icons/edit.svg", onClick: this.goToLocation.bind(this) })
                            )
                        )
                    )
                ),
                this.state.showLocationPopup ? this.props.clinic_card && this.state.showPopupContainer ? _react2.default.createElement(_locationPopup2.default, _extends({}, this.props, { onRef: ref => this.child = ref, resultType: 'list', isTopbar: true, hideLocationPopup: () => this.hideLocationPopup(), locationName: locationName, criteriaString: criteriaStr, popupContainer: () => this.popupContainer() })) : _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: ref => this.child = ref, resultType: 'list', isTopbar: true, hideLocationPopup: () => this.hideLocationPopup(), locationName: locationName })) : '',
                this.state.showLocationPopup && this.state.overlayVisible && !this.props.clinic_card ? _react2.default.createElement('div', { className: 'locationPopup-overlay', onClick: () => this.overlayClick() }) : '',
                this.state.showLocationPopup && this.props.clinic_card && this.state.showPopupContainer ? _react2.default.createElement('div', { className: 'popupContainer-overlay' }) : '',
                specializations && specializations.length && parsed.hospital_id && parsed.showPopup && this.state.showIpdLeadForm && typeof window == 'object' && window.ON_LANDING_PAGE ? _react2.default.createElement(_ipdLeadForm2.default, _extends({ submitLeadFormGeneration: this.submitLeadFormGeneration.bind(this) }, this.props, { hospital_id: parsed.hospital_id, formSource: 'doctorResultPage' })) : ''
            )
        );
    }
}

exports.default = TopBar;

/***/ }),

/***/ "./dev/js/containers/commons/locationPopup.js":
/*!****************************************************!*\
  !*** ./dev/js/containers/commons/locationPopup.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _index2 = __webpack_require__(/*! ../../components/commons/locationPopup/index.js */ "./dev/js/components/commons/locationPopup/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LocationPopupContainer extends _react2.default.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return _react2.default.createElement(_index3.default, this.props);
    }
}

LocationPopupContainer.contextTypes = {
    router: () => null
};
const mapStateToProps = state => {
    const {
        selectedLocation,
        locationType
    } = state.SEARCH_CRITERIA_OPD;

    return {
        selectedLocation,
        locationType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectLocation: (location, type) => dispatch((0, _index.selectLocation)(location, type))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LocationPopupContainer);

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _urltoState = __webpack_require__(/*! ../../helpers/urltoState */ "./dev/js/helpers/urltoState.js");

var _index2 = __webpack_require__(/*! ../../components/opd/searchResults/index.js */ "./dev/js/components/opd/searchResults/index.js");

var _index3 = _interopRequireDefault(_index2);

var _notFound = __webpack_require__(/*! ../../components/commons/notFound */ "./dev/js/components/commons/notFound/index.js");

var _notFound2 = _interopRequireDefault(_notFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchResults extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            show404: false
        };
    }

    componentDidMount() {
        if (this.props.show404) {
            this.setState({ show404: true });
            this.props.toggle404(false);
        }
        /* API call is on Desktop Profile Header
            this.props.loadOPDInsurance(this.props.selectedLocation)
        */
    }

    static loadData(store, match, queryParams = {}) {
        return new Promise((resolve, reject) => {
            try {
                let location_ms = null;
                if (match.url.includes('location=')) {
                    location_ms = match.url.split('location=')[1];
                    location_ms = parseInt(location_ms);
                }

                (0, _urltoState.opdSearchStateBuilder)(null, queryParams, true, location_ms).then(state => {
                    store.dispatch((0, _index.mergeOPDState)(state));
                    if (queryParams && (queryParams.fromVip && queryParams.fromVip == "true" || queryParams.fromGoldVip && queryParams.fromGoldVip == "true")) {
                        let extraData = {
                            selectedLocation: state && state.selectedLocation ? state.selectedLocation : {},
                            type: queryParams.fromVip ? 'is_vip' : queryParams.fromGoldVip ? 'is_gold' : null
                        };
                        store.dispatch((0, _index.getNearbyHospitals)(extraData));
                        store.dispatch((0, _index.getTopHospitals)(extraData));
                    }

                    let searchUrl = null;
                    if (match.url.includes('-sptcit') || match.url.includes('-sptlitcit') || match.url.includes('-ipddp')) {
                        searchUrl = match.url.toLowerCase();
                    }
                    let clinic_card = false;
                    if (queryParams.clinic_card) {
                        clinic_card = true;
                    }
                    let page = 1;
                    if (queryParams.page) {
                        page = parseInt(queryParams.page);
                    }
                    return store.dispatch((0, _index.getDoctors)(state, page, true, searchUrl, (loadMore, noResults = false) => {
                        if (noResults) {
                            resolve({ status: 404 });
                        }
                        if (match.url.includes('-sptcit') || match.url.includes('-sptlitcit') || match.url.includes('-ipddp')) {
                            (0, _index.getFooterData)(match.url.split("/")[1], queryParams.page || 1)().then(footerData => {
                                footerData = footerData || null;
                                resolve({ footerData });
                            }).catch(e => {
                                resolve({});
                            });
                        } else {
                            resolve({});
                        }
                    }, clinic_card));
                }).catch(e => {
                    reject();
                });
            } catch (e) {
                reject();
            }
        });
    }

    render() {

        if (this.props.show404 || this.state.show404) {
            return _react2.default.createElement(_notFound2.default, this.props);
        }

        return _react2.default.createElement(_index3.default, this.props);
    }
}

SearchResults.contextTypes = {
    router: () => null
};
const mapStateToProps = (state, passedProps) => {
    /**
     * initialServerData is server rendered async data required build html on server. 
     */
    let initialServerData = null;
    let { staticContext } = passedProps;
    if (staticContext && staticContext.data) {
        initialServerData = staticContext.data;
    }

    const {
        LOADED_SEARCH_CRITERIA_OPD,
        commonSelectedCriterias,
        selectedLocation,
        filterCriteria,
        locationType,
        fetchNewResults,
        getNewUrl,
        selectedCriterias,
        page,
        search_id_data,
        nextSelectedCriterias,
        nextFilterCriteria,
        mergeUrlState,
        common_settings,
        nearbyHospitals,
        topHospitals
    } = state.SEARCH_CRITERIA_OPD;

    const {
        compare_packages

    } = state.SEARCH_CRITERIA_LABS;

    let DOCTORS = state.DOCTORS;
    let HOSPITALS = state.HOSPITALS;

    let { hospitalList, doctorList, LOADED_DOCTOR_SEARCH, count, SET_FROM_SERVER, search_content, curr_page, ratings, reviews, ratings_title, bottom_content, breadcrumb, seoData, show404, canonical_url, hospitalData, similar_specializations } = state.DOCTOR_SEARCH;

    const {
        offerList,
        is_login_user_insured,
        insurance_status,
        device_info
    } = state.USER;

    return {
        DOCTORS, doctorList, LOADED_DOCTOR_SEARCH,
        LOADED_SEARCH_CRITERIA_OPD,
        commonSelectedCriterias,
        selectedLocation,
        filterCriteria,
        count,
        SET_FROM_SERVER,
        initialServerData,
        locationType,
        fetchNewResults,
        search_content,
        getNewUrl,
        selectedCriterias,
        page,
        curr_page,
        HOSPITALS,
        hospitalList, ratings, reviews, ratings_title,
        search_id_data,
        nextSelectedCriterias,
        nextFilterCriteria,
        bottom_content,
        breadcrumb,
        seoData,
        mergeUrlState,
        show404,
        offerList,
        is_login_user_insured,
        insurance_status,
        canonical_url,
        compare_packages,
        device_info,
        common_settings,
        hospitalData,
        similar_specializations,
        nearbyHospitals,
        topHospitals
    };
};

const mapDispatchToProps = dispatch => {
    return {
        urlShortner: (url, cb) => dispatch((0, _index.urlShortner)(url, cb)),
        loadOPDCommonCriteria: () => dispatch(loadOPDCommonCriteria()),
        toggleOPDCriteria: (type, criteria, forceAdd, filter) => dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filter)),
        getDoctors: (state, page, from_server, searchByUrl, cb, clinic_card) => dispatch((0, _index.getDoctors)(state, page, from_server, searchByUrl, cb, clinic_card)),
        mergeOPDState: (state, fetchNewResults) => dispatch((0, _index.mergeOPDState)(state, fetchNewResults)),
        getDoctorNumber: (doctorId, callback) => dispatch((0, _index.getDoctorNumber)(doctorId, callback)),
        getFooterData: (url, page) => dispatch((0, _index.getFooterData)(url, page)),
        saveCommonProcedures: procedure_ids => dispatch((0, _index.saveCommonProcedures)(procedure_ids)),
        resetProcedureURl: () => dispatch((0, _index.resetProcedureURl)()),
        mergeSelectedCriterias: () => dispatch((0, _urltoState.mergeSelectedCriterias)()),
        setSearchId: (searchId, filters, setDefault) => dispatch((0, _index.setSearchId)(searchId, filters, setDefault)),
        getSearchIdResults: (searchId, searchResults) => dispatch((0, _index.getSearchIdResults)(searchId, searchResults)),
        selectSearchType: type => dispatch((0, _index.selectSearchType)(type)),
        setNextSearchCriteria: () => dispatch((0, _index.setNextSearchCriteria)()),
        toggle404: status => dispatch((0, _index.toggle404)(status)),
        selectOpdTimeSLot: (slot, reschedule, appointmentId) => dispatch((0, _index.selectOpdTimeSLot)(slot, reschedule, appointmentId)),
        saveProfileProcedures: (doctor_id, clinic_id, procedure_ids, forceAdd) => dispatch((0, _index.saveProfileProcedures)(doctor_id, clinic_id, procedure_ids, forceAdd)),
        getOfferList: (lat, long) => dispatch((0, _index.getOfferList)(lat, long)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd, filter) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filter)),
        resetPkgCompare: () => dispatch((0, _index.resetPkgCompare)()),
        selectLocation: (location, type) => dispatch((0, _index.selectLocation)(location, type)),
        cloneCommonSelectedCriterias: selectedCriterias => dispatch((0, _index.cloneCommonSelectedCriterias)(selectedCriterias)),
        loadOPDInsurance: city => dispatch((0, _index.loadOPDInsurance)(city)),
        getDoctorHospitalFilters: (state, page, from_server, searchByUrl, cb, clinic_card) => dispatch((0, _index.getDoctorHospitalFilters)(state, page, from_server, searchByUrl, cb, clinic_card)),
        getDoctorHospitalSpeciality: (state, page, from_server, searchByUrl, cb, clinic_card) => dispatch((0, _index.getDoctorHospitalSpeciality)(state, page, from_server, searchByUrl, cb, clinic_card)),
        getSponsoredList: (data, selectedLocation, cb) => dispatch((0, _index.getSponsoredList)(data, selectedLocation, cb)),
        getNearbyHospitals: (params, cb) => dispatch((0, _index.getNearbyHospitals)(params, cb)),
        toggleIPDCriteria: (criteria, forceAdd) => dispatch((0, _index.toggleIPDCriteria)(criteria, forceAdd)),
        getTopHospitals: (dataParams, cb) => dispatch((0, _index.getTopHospitals)(dataParams, cb)),
        mergeIpdCriteria: filterCriteria => dispatch((0, _index.mergeIpdCriteria)(filterCriteria)),
        clearVipSelectedPlan: () => dispatch((0, _index.clearVipSelectedPlan)()),
        NonIpdBookingLead: (data, cb) => dispatch((0, _index.NonIpdBookingLead)(data, cb)),
        saveLeadPhnNumber: number => dispatch((0, _index.saveLeadPhnNumber)(number))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchResults);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2xvY2F0aW9uUG9wdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9sb2NhdGlvblBvcHVwL2xvY2F0aW9uUG9wdXBWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvbm90Rm91bmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9ub3RGb3VuZC9ub3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvY29tbW9ucy9jbGluaWNSZXN1bHRDYXJkL0NsaW5pY1Jlc3VsdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL2NvbW1vbnMvY2xpbmljUmVzdWx0Q2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvc2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHRzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9vcGQvc2VhcmNoUmVzdWx0cy9jYXJvdXNlbFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3NlYXJjaFJlc3VsdHMvZG9jdG9yc0xpc3QvRG9jdG9yc0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3NlYXJjaFJlc3VsdHMvZG9jdG9yc0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3NlYXJjaFJlc3VsdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3NlYXJjaFJlc3VsdHMvbmV3VG9wQmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL29wZC9zZWFyY2hSZXN1bHRzL25ld1RvcEJhci9uZXdUb3BCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvb3BkL3NlYXJjaFJlc3VsdHMvdG9wQmFyL3Jlc3VsdF9jb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvb3BkL1NlYXJjaFJlc3VsdHMuanMiXSwibmFtZXMiOlsibG9jYXRpb25Qb3B1cCIsInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkxvY2F0aW9uUG9wdXBWaWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzZWFyY2giLCJsb2NhdGlvbl9vYmplY3QiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwic2VsZWN0ZWRMb2NhdGlvbiIsInNldFN0YXRlIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJsb2NhdGlvblR5cGUiLCJpbmNsdWRlcyIsImNvbXBvbmVudERpZE1vdW50IiwibG9jYXRpb25OYW1lIiwiZ29Ub0xvY2F0aW9uIiwiaXNUb3BiYXIiLCJyZWRpcmVjdF90byIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJsb2NhdGlvbl91cmwiLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwiaGlzdG9yeSIsInB1c2giLCJjb250aW51ZUxvY2F0aW9uIiwicGFyc2VkIiwicGFyc2UiLCJsYXQiLCJsb25nIiwibG9jYXRpb25EYXRhIiwic2VsZWN0TG9jYXRpb24iLCJyZW5kZXIiLCJjb3VudCIsImZvbnRXZWlnaHQiLCJjcml0ZXJpYVN0cmluZyIsImJpbmQiLCJOb3RGb3VuZFZpZXciLCJOb3RGb3VuZCIsImRpc3BsYXkiLCJBU1NFVFNfQkFTRV9VUkwiLCJDbGluaWNSZXN1bHRDYXJkIiwib3BlblNlbGVjdERvY3RvciIsInRvZ2dsZVNlbGVjdERvY3RvciIsImNhcmRDbGljayIsImlkIiwidXJsIiwiaG9zcGl0YWxfaWQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicmFuayIsImN0cmxLZXkiLCJtZXRhS2V5IiwicHJldmVudERlZmF1bHQiLCJjYXRlZ29yeV9pZHMiLCJjb21tb25TZWxlY3RlZENyaXRlcmlhcyIsImZpbHRlciIsIngiLCJ0eXBlIiwibWFwIiwicHJvY2VkdXJlX2lkcyIsImxlbmd0aCIsImdldFF1YWxpZmljYXRpb25TdHIiLCJxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24iLCJyZWR1Y2UiLCJzdHIiLCJjdXJyIiwiaSIsIm5hbWUiLCJib29rTm93Q2xpY2tlZCIsInNsb3QiLCJ0aW1lIiwic2VsZWN0T3BkVGltZVNMb3QiLCJ0cmFja2luZ0V2ZW50c0Jvb2tOb3ciLCJzYXZlUHJvZmlsZVByb2NlZHVyZXMiLCJEaXN0YW5jZSIsImRldGFpbHMiLCJkaXN0YW5jZSIsIk1hdGgiLCJyb3VuZCIsInRvRml4ZWQiLCJqb2luIiwiY29uZGl0aW9uX2lkcyIsInNwZWNpYWxpemF0aW9uX2lkcyIsImFkZHJlc3MiLCJob3NwaXRhbF9uYW1lIiwiZG9jdG9ycyIsInByb2NlZHVyZV9jYXRlZ29yaWVzIiwic2hvcnRfYWRkcmVzcyIsInNwZWNpYWxpemF0aW9uIiwiZG9jdG9yIiwiZGlzY291bnRlZF9wcmljZSIsImlzX2xpY2Vuc2VfdmVyaWZpZWQiLCJkZWFsX3ByaWNlIiwibXJwIiwiZ2VuZXJhbF9zcGVjaWFsaXphdGlvbiIsImVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nIiwiZGlzY291bnQiLCJpc19wcm9jZWR1cmUiLCJzZWxlY3RlZENvdW50IiwidW5zZWxlY3RlZENvdW50IiwiZmluYWxQcm9jZWR1cmVEZWFsUHJpY2UiLCJmaW5hbFByb2NlZHVyZU1ycCIsInByb2NlZHVyZXMiLCJpc19zZWxlY3RlZCIsInBvc2l0aW9uIiwiY3Vyc29yIiwiY29sb3IiLCJwYWRkaW5nUmlnaHQiLCJmb250U2l6ZSIsIndpZHRoIiwiZCIsImJvcmRlclRvcCIsIm1hcmdpbiIsIlNlYXJjaFJlc3VsdHNWaWV3Iiwic2Nyb2xsSGFuZGxlciIsInNjcm9sbFBvc2l0aW9uIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJib2R5Iiwic2NyZWVuU2l6ZSIsInNjcmVlbiIsImhlaWdodCIsInNob3dTZWFyY2hCdG4iLCJzZW9EYXRhIiwiZm9vdGVyRGF0YSIsImluaXRpYWxTZXJ2ZXJEYXRhIiwic2VvRnJpZW5kbHkiLCJtYXRjaCIsImNsaW5pY19jYXJkIiwic2hvd0Vycm9yIiwic2VhcmNoX2lkIiwic2V0U2VhcmNoSWQiLCJxdWlja0ZpbHRlciIsImRldGVjdExvY2F0aW9uIiwic3BvbnNvckRhdGEiLCJmcm9tVmlwIiwiZnJvbUdvbGRWaXAiLCJzZWFyY2hfc3RyaW5nIiwic2Nyb2xsRXZlbnRBZGRlZCIsInNob3dOb25JcGRQb3B1cCIsInNob3dfcG9wdXAiLCJ0b19iZV9mb3JjZSIsImlzX2xlYWRfZW5hYmxlZCIsInNlYXJjaFVybCIsInRvTG93ZXJDYXNlIiwicmVmcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJleHRyYURhdGEiLCJnZXROZWFyYnlIb3NwaXRhbHMiLCJnZXRUb3BIb3NwaXRhbHMiLCJtZXJnZVVybFN0YXRlIiwiZ2V0U2VhcmNoSWQiLCJzZWFyY2hfaWRfZGF0YSIsInJlc3VsdCIsImZldGNoTmV3UmVzdWx0cyIsImdldFNlYXJjaElkUmVzdWx0cyIsImZpbHRlcnMiLCJmaWx0ZXJDcml0ZXJpYSIsInBhZ2UiLCJuZXh0U2VsZWN0ZWRDcml0ZXJpYXMiLCJuZXh0RmlsdGVyQ3JpdGVyaWEiLCJnZW5lcmF0ZVNlYXJjaElkIiwic2Nyb2xsVG8iLCJpc19sb2dpbl91c2VyX2luc3VyZWQiLCJpbnN1cmFuY2Vfc3RhdHVzIiwiaXNfaW5zdXJlZCIsIm5ld191cmwiLCJidWlsZFVSSSIsInJlcGxhY2UiLCJnZXRGb290ZXJEYXRhIiwic3BsaXQiLCJ0aGVuIiwiZ2V0TmV3VXJsIiwiZ2V0RG9jdG9yTGlzdCIsImNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJkb2N0b3JfbmFtZSIsInNvcnRfb24iLCJtZXJnZU9QRFN0YXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGV0ZWN0TG9jYXRpb25DbGljayIsInVpZF9zdHJpbmciLCJkdCIsIkRhdGUiLCJnZXRUaW1lIiwidXVpZCIsImMiLCJyIiwicmFuZG9tIiwiZmxvb3IiLCJ0b1N0cmluZyIsImdldExvY2F0aW9uUGFyYW0iLCJ0YWciLCJwYXJhbVN0cmluZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImdldCIsImFwcGx5RmlsdGVycyIsImZpbHRlclN0YXRlIiwiT05fTEFORElOR19QQUdFIiwicmVzZXRRdWlja0ZpbHRlcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJzcGVjaWFsaXphdGlvbnNfaWRzIiwicHJvY2VkdXJlc19pZHMiLCJpcGRfaWRzIiwiZ3JvdXBfaWRzIiwicGxhY2VfaWQiLCJsb2NhbGl0eSIsInN1Yl9sb2NhbGl0eSIsImdlb21ldHJ5IiwibG5nIiwicGFyc2VGbG9hdCIsInNvcnRfb3JkZXIiLCJhdmFpbGFiaWxpdHkiLCJhdmdfcmF0aW5ncyIsImdlbmRlciIsInNpdHNfYXRfaG9zcGl0YWwiLCJzaXRzX2F0X2NsaW5pYyIsInNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMiLCJpc19maWx0ZXJfYXBwbGllZCIsImlzX3BhcmFtc19leGlzdCIsInV0bV90ZXJtIiwidXRtX3NvdXJjZSIsInV0bV9tZWRpdW0iLCJ1dG1fY2FtcGFpZ24iLCJnZXRfZmVlZGJhY2siLCJzaG93UG9wdXAiLCJjYiIsImdldERvY3RvcnMiLCJhcmdzIiwiY2F0Y2giLCJnZXRNZXRhVGFnc0RhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2NoZW1hIiwicGFyc2VJbnQiLCJhcHBseVF1aWNrRmlsdGVyIiwiaXNGaWx0ZXJBcHBsaWVkIiwic2VhcmNoRG9jdG9yU3BlY2lhbGl6YXRpb24iLCJzcGVjaWFsaXR5IiwiaXNWaWV3QWxsIiwic3BlY2lhbGl0eURhdGEiLCJWaWV3QWxsRGF0YSIsInNwZWMiLCJzcGVjaWFsaXphdGlvbl9pZCIsInNwZWNpYWxpemF0aW9uX25hbWUiLCJ0b2dnbGVPUERDcml0ZXJpYSIsInNldFRpbWVvdXQiLCJTaW1pbGFyU3BlY2lhbGl6YXRpb24iLCJmbGFnIiwiZGF0YU1vZGVsIiwic2ltaWxhcl9zcGVjaWFsaXphdGlvbnMiLCJTaW1pbGFyU3BlY2lhbGl6YXRpb25EYXRhIiwic29ydEZpbHRlckNsaWNrZWQiLCJjaGlsZCIsImhvc3BpdGFsQ2FyZENsaWNrZWQiLCJ0b3AiLCJndG1EYXRhIiwicmVkaXJlY3RVcmwiLCJuYXZpZ2F0ZVRvU2VhcmNoVmlwIiwidmlld0FsbEhvc3BpdGFsQ2xpY2tlZCIsIm1lcmdlSXBkQ3JpdGVyaWEiLCJub25JcGRMZWFkcyIsInBob25lX251bWJlciIsImNyaXRlcmlhU3RyIiwiZ2V0Q3JpdGVyaWFTdHJpbmciLCJsZWFkX3NvdXJjZSIsInNvdXJjZSIsImxlYWRfdHlwZSIsImV4aXRwb2ludF91cmwiLCJkb2N0b3JfaWQiLCJjb21tb25fdXRtX3RhZ3MiLCJ1dG1fdGFncyIsInZpc2l0b3JfaW5mbyIsImdldFZpc2l0b3JJbmZvIiwidmlzaXRfaWQiLCJ2aXNpdG9yX2lkIiwiZ3RtX2RhdGEiLCJzYXZlTGVhZFBobk51bWJlciIsIlNUT1JBR0UiLCJpc0FnZW50IiwiTm9uSXBkQm9va2luZ0xlYWQiLCJjbG9zZUlwZExlYWRQb3B1cCIsImZyb20iLCJzZWxlY3RlZENyaXRlcmlhcyIsImlzX2dyb3VwX2lkc19leGlzdCIsInNlbGVjdGVkRGF0YVZpZXciLCJmaW5hbCIsInNob3dfcGFnaW5hdGlvbiIsImRvY3Rvckxpc3QiLCJDT05GSUciLCJBUElfQkFTRV9VUkwiLCJjdXJyX3BhZ2UiLCJwcmV2IiwibmV4dCIsImxhbmRpbmdfcGFnZSIsImNhbm9uaWNhbFVybCIsImNhbm9uaWNhbF91cmwiLCJvZ1R5cGUiLCJvZ1NpdGVOYW1lIiwib2dUaXRsZSIsIm9nRGVzY3JpcHRpb24iLCJMT0FERURfRE9DVE9SX1NFQVJDSCIsInJlZiIsImhvc3BpdGFsTGlzdCIsInZpZXdNb3JlIiwidG9wSG9zcGl0YWxzIiwidG9wX2hvc3BpdGFscyIsIm5lYXJieUhvc3BpdGFscyIsImhvc3BpdGFscyIsIkNhcm91c2VsVmlldyIsInNjcm9sbCIsImVsbW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhVHlwZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvdXRlckRpdldpZHRoIiwib2Zmc2V0V2lkdGgiLCJjaGlsZERpdldpZHRoIiwiY2FyZENvdW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJjYXJkV2lkdGgiLCJjZWlsIiwibGVmdFNjcm9sbCIsInNjcm9sbExlZnQiLCJzY3JvbGxWYWwiLCJjYXJkRW5kIiwibGVmdCIsImJlaGF2aW9yIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidG9wSGVhZGluZyIsImRhdGFMaXN0IiwidG9wSG9zcGl0YWwiLCJleHRyYUhlYWRpbmciLCJ2aWV3QWxsIiwibmF2aWdhdGVUbyIsImtleSIsImNhcm91c2VsQ2FyZENsaWNrZWQiLCJsb2dvIiwiRG9jdG9yc0xpc3QiLCJoYXNNb3JlIiwibG9hZGluZyIsInJlbmRlckJsb2NrIiwicmVhZE1vcmUiLCJkZXRlY3RMb2FkaW5nIiwiZ2V0T2ZmZXJMaXN0IiwibG9hZE1vcmUiLCJ0b2dnbGVTY3JvbGwiLCJhcHBseVF1aWNrRmlsdGVycyIsInZhbCIsImlzQXJyYXkiLCJ2YWx1ZSIsInNlbGVjdGVkVmFsIiwiY29uY2F0IiwiZm91bmQiLCJ2aWV3TW9yZUNsaWNrZWQiLCJ0aW1lb3V0IiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjbGVhclRpbWVvdXQiLCJhIiwiYiIsIm5hdmlnYXRlVG9Ib3NwaXRhbCIsImRldGVjdEZsYWciLCJIT1NQSVRBTFMiLCJET0NUT1JTIiwic3RhcnRfcGFnZSIsIm1heCIsInJlc3VsdF9saXN0IiwicmVzdWx0X2RhdGEiLCJjYXJkX0lEIiwiYm9va2FibGVEb2N0b3JzIiwiY2FyZElkIiwic2VhcmNoX2NvbnRlbnQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJfX2h0bWwiLCJob3NwaXRhbF9pbWFnZSIsImFsbF9kb2N0b3JzIiwib3BkX3RpbWluZ3MiLCJtYXJnaW5Cb3R0b20iLCJhdmdfcmF0aW5nIiwicmF0aW5nIiwiaG9zcGl0YWxfc2VydmljZXMiLCJzZXJ2IiwiaW5kZXhPZiIsIm9mZmVyTGlzdCIsInNsaWRlcl9sb2NhdGlvbiIsIkRvY3Rvckxpc3QiLCJOZXdUb3BCYXIiLCJUb3BCYXIiLCJhbmNob3JFbCIsImRyb3Bkb3duX3Zpc2libGUiLCJwcmV2aW91c19maWx0ZXJzIiwic2hvcnRVUkwiLCJzaG93TG9jYXRpb25Qb3B1cCIsIm92ZXJsYXlWaXNpYmxlIiwiSG9zcEZpbHRlciIsIkhvc3BGaWx0ZXJPbkZvdWNzRGF0YSIsInNlbGVjdGVkSG9zcGl0YWxJZHMiLCJoaWRlSG9zcEZpbHRlciIsIlNwZWNpYWxpdHlGaWx0ZXIiLCJTcGVjaWFsaXR5RmlsdGVyT25Gb2N1c0RhdGEiLCJzZWxlY3RlZFNwZWNpYWxpemF0aW9uSWRzIiwiaGlkZVNwZWNGaWx0ZXIiLCJoaWRlT3RoZXJGaWx0ZXJzIiwiZmlsdGVyU2VhcmNoU3RyaW5nIiwiZGVmYXVsdFNwZWNpYWxpemF0aW9uSWRzIiwic2VhcmNoQ2l0aWVzIiwiYWxsUmVhZHlTZWxlY3RlZFNwZWNpYWxpemF0aW9uSWQiLCJzcGVjX2lkIiwiayIsInRvcEJhclJlZiIsInNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZCIsInNwZWNpYWxpemF0aW9ucyIsImlmQW55RmlsdGVyQXBwbGllZCIsImlzRGF0YUZpbHRlcmVkIiwiaGFuZGxlQ2xvc2UiLCJyZXNldCIsInJlc2V0RmlsdGVycyIsInRvZ2dsZUFsbEZpbHRlcnMiLCJnZXREb2N0b3JIb3NwaXRhbEZpbHRlcnMiLCJyZXNwIiwiZ2V0RG9jdG9ySG9zcGl0YWxTcGVjaWFsaXR5IiwiY3VycmVudEZpbHRlcnMiLCJmaWx0ZXJEYXRhIiwiY2hlY2tJZkFueUZpbHRlckFwcGxpbGVkIiwiZmlsdGVyQ291bnQiLCJhcnJGbGl0ZXIiLCJob3NwaXRhbF90eXBlIiwic2V0TmV4dFNlYXJjaENyaXRlcmlhIiwib3ZlcmxheUNsaWNrIiwic3R5bGUiLCJ6SW5kZXgiLCJoaWRlTG9jYXRpb25Qb3B1cCIsInBvcHVwQ29udGFpbmVyIiwic2hvd1BvcHVwQ29udGFpbmVyIiwic2hvcnRlblVybCIsImhyZWYiLCJ1cmxTaG9ydG5lciIsImVyciIsInRpbnlfdXJsIiwidG9nZ2xlSW5zdXJlZCIsInRvZ2dsZVNwZWNpYWxpemF0aW9uIiwidGVzdF9pZHMiLCJzZWxmIiwiaGFuZGxlQ2hhbmdlRm9jdXMiLCJoYW5kbGVDbG9zZUV4dHJhRmlsdGVyIiwiaGFuZGxlQ2hhbmdlSG9zcCIsImV2ZW50IiwidGFyZ2V0IiwiZmlsdGVyZWRfaG9zcF9saXN0IiwiSG9zcCIsImhvc3BfbmFtZSIsImluZGV4Iiwic29ydCIsInkiLCJoYW5kbGVDaGFuZ2VTcGVjIiwiZmlsdGVyZWRfc3BlY19saXN0IiwiU3BlYyIsInNwZWNfbmFtZSIsInRvZ2dsZUhvc3BpdGFsIiwiaG9zcF9pZCIsIkhvc3BGaWx0ZXJEYXRhIiwibGlEYXRhIiwiU3BlY0ZpbHRlckRhdGEiLCJ1bmRlZmluZWQiLCJnZXRDaXR5TGlzdExheW91dCIsInNlYXJjaFJlc3VsdHMiLCJjaXR5IiwiZ2V0Q2l0eUxpc3QiLCJicmVhZGNydW1iIiwibGlua190aXRsZSIsImhvc3BpdGFsRGF0YSIsIm1hcmdpbkxlZnQiLCJjaGVja0F1dGgiLCJzaG93SXBkTGVhZEZvcm0iLCJoYW5kbGVJbnB1dCIsImV2TmFtZSIsImNoZWNrZWQiLCJzZWxlY3RlZFByb2NlZHVyZUNhdGVnb3J5Iiwic3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uIiwiY2xvc2UiLCJMb2NhdGlvblBvcHVwQ29udGFpbmVyIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiU2VhcmNoUmVzdWx0cyIsInNob3c0MDQiLCJ0b2dnbGU0MDQiLCJsb2FkRGF0YSIsInN0b3JlIiwicXVlcnlQYXJhbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImxvY2F0aW9uX21zIiwibm9SZXN1bHRzIiwic3RhdHVzIiwicGFzc2VkUHJvcHMiLCJzdGF0aWNDb250ZXh0IiwiTE9BREVEX1NFQVJDSF9DUklURVJJQV9PUEQiLCJjb21tb25fc2V0dGluZ3MiLCJjb21wYXJlX3BhY2thZ2VzIiwiU0VBUkNIX0NSSVRFUklBX0xBQlMiLCJTRVRfRlJPTV9TRVJWRVIiLCJyYXRpbmdzIiwicmV2aWV3cyIsInJhdGluZ3NfdGl0bGUiLCJib3R0b21fY29udGVudCIsIkRPQ1RPUl9TRUFSQ0giLCJkZXZpY2VfaW5mbyIsIlVTRVIiLCJsb2FkT1BEQ29tbW9uQ3JpdGVyaWEiLCJjcml0ZXJpYSIsImZvcmNlQWRkIiwiZnJvbV9zZXJ2ZXIiLCJzZWFyY2hCeVVybCIsImdldERvY3Rvck51bWJlciIsImRvY3RvcklkIiwiY2FsbGJhY2siLCJzYXZlQ29tbW9uUHJvY2VkdXJlcyIsInJlc2V0UHJvY2VkdXJlVVJsIiwibWVyZ2VTZWxlY3RlZENyaXRlcmlhcyIsInNlYXJjaElkIiwic2V0RGVmYXVsdCIsInNlbGVjdFNlYXJjaFR5cGUiLCJyZXNjaGVkdWxlIiwiYXBwb2ludG1lbnRJZCIsImNsaW5pY19pZCIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwicmVzZXRQa2dDb21wYXJlIiwibG9hZE9QREluc3VyYW5jZSIsImdldFNwb25zb3JlZExpc3QiLCJ0b2dnbGVJUERDcml0ZXJpYSIsImRhdGFQYXJhbXMiLCJjbGVhclZpcFNlbGVjdGVkUGxhbiIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUVlQSwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7QUFFQTs7Ozs7O0FBREEsTUFBTUMsY0FBY0MsbUJBQU9BLENBQUMsa0NBQVIsQ0FBcEI7OztBQUdBLE1BQU1DLGlCQUFOLFNBQWdDQyxnQkFBTUMsU0FBdEMsQ0FBZ0Q7O0FBRTVDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsb0JBQVEsRUFEQztBQUVUQyw2QkFBaUI7QUFGUixTQUFiO0FBSUg7O0FBRURDLDhCQUEwQkosS0FBMUIsRUFBaUM7QUFDN0IsWUFBSUEsTUFBTUssZ0JBQU4sSUFBMEIsS0FBS0wsS0FBTCxDQUFXSyxnQkFBekMsRUFBMkQ7QUFDdkQsZ0JBQUksS0FBS0osS0FBTCxDQUFXQyxNQUFmLEVBQXVCO0FBQ25CLG9CQUFJRixNQUFNSyxnQkFBTixJQUEwQixLQUFLTCxLQUFMLENBQVdLLGdCQUF6QyxFQUEyRDtBQUN2RCx5QkFBS0MsUUFBTCxDQUFjLEVBQUVILGlCQUFpQkgsTUFBTUssZ0JBQXpCLEVBQTJDSCxRQUFRRixNQUFNSyxnQkFBTixDQUF1QkUsaUJBQTFFLEVBQWQ7QUFDSDtBQUNKLGFBSkQsTUFJTyxJQUFJLENBQUNQLE1BQU1RLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCLEtBQTVCLENBQUwsRUFBeUM7QUFDNUMscUJBQUtILFFBQUwsQ0FBYyxFQUFFSCxpQkFBaUJILE1BQU1LLGdCQUF6QixFQUEyQ0gsUUFBUUYsTUFBTUssZ0JBQU4sQ0FBdUJFLGlCQUExRSxFQUFkO0FBQ0g7QUFDSjtBQUNKOztBQUVERyx3QkFBb0I7QUFDaEIsWUFBSSxLQUFLVixLQUFMLENBQVdRLFlBQVgsSUFBMkIsQ0FBQyxLQUFLUixLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFFBQXhCLENBQWlDLEtBQWpDLENBQTVCLElBQXVFLEtBQUtULEtBQUwsQ0FBV0ssZ0JBQWxGLElBQXNHLEtBQUtMLEtBQUwsQ0FBV0ssZ0JBQVgsQ0FBNEJFLGlCQUF0SSxFQUF5SjtBQUNySixpQkFBS0QsUUFBTCxDQUFjLEVBQUVILGlCQUFpQixLQUFLSCxLQUFMLENBQVdLLGdCQUE5QixFQUFnREgsUUFBUSxLQUFLRixLQUFMLENBQVdXLFlBQVgsSUFBMkIsS0FBS1gsS0FBTCxDQUFXSyxnQkFBWCxDQUE0QkUsaUJBQS9HLEVBQWQ7QUFDSDtBQUNKOztBQUVESyxtQkFBZTtBQUNYLFlBQUksS0FBS1osS0FBTCxDQUFXYSxRQUFmLEVBQXlCO0FBQ3JCLGdCQUFJQyxjQUFjLEVBQWxCO0FBQ0EsZ0JBQUlDLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCUixRQUF6QixDQUFrQyxRQUFsQyxLQUErQ00sT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJSLFFBQXpCLENBQWtDLFdBQWxDLENBQW5ELEVBQW1HO0FBQy9GSyw4QkFBYyxvQkFBZDtBQUNIOztBQUVELGdCQUFJQyxPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QlIsUUFBekIsQ0FBa0MsT0FBbEMsS0FBOENNLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCUixRQUF6QixDQUFrQyxVQUFsQyxDQUFsRCxFQUFpRztBQUM3RkssOEJBQWMsb0JBQWQ7QUFDSDs7QUFFRCxnQkFBSUksZUFBZSxpQkFBbkI7QUFDQSxnQkFBSUosV0FBSixFQUFpQjtBQUNiSSxnQ0FBaUIsZ0JBQWVKLFdBQVksRUFBNUM7QUFDSDs7QUFFRCxnQkFBSUssT0FBTztBQUNQLDRCQUFZLGtDQURMLEVBQ3lDLFVBQVUsc0NBRG5ELEVBQzJGLGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFENUgsRUFDZ0ksVUFBVSxDQUQxSSxFQUM2SSxTQUFTLHNDQUR0SixFQUM4TCxPQUFPTixPQUFPQyxRQUFQLENBQWdCQztBQURyTixhQUFYO0FBR0FHLDBCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTUEsSUFBUixFQUFkO0FBQ0EsaUJBQUtuQixLQUFMLENBQVd1QixPQUFYLENBQW1CQyxJQUFuQixDQUF3Qk4sWUFBeEI7QUFDSDtBQUNKOztBQUVETyx1QkFBbUI7QUFDZixjQUFNQyxTQUFTaEMsWUFBWWlDLEtBQVosQ0FBa0IsS0FBSzNCLEtBQUwsQ0FBV2dCLFFBQVgsQ0FBb0JkLE1BQXRDLENBQWY7QUFDQSxZQUFJaUIsT0FBTztBQUNQLHdCQUFZLG9DQURMLEVBQzJDLFVBQVUsd0NBRHJELEVBQytGLGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEaEksRUFDb0ksVUFBVSxDQUQ5SSxFQUNpSixTQUFTLHdDQUQxSixFQUNvTSxPQUFPTixPQUFPQyxRQUFQLENBQWdCQztBQUQzTixTQUFYO0FBR0FHLHNCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTUEsSUFBUixFQUFkO0FBQ0EsWUFBSU8sT0FBT0UsR0FBUCxJQUFjRixPQUFPRyxJQUF6QixFQUErQjtBQUMzQixxREFBd0JILE9BQU9FLEdBQS9CLEVBQW9DRixPQUFPRyxJQUEzQyxFQUFpRCxVQUFqRCxFQUE4REMsWUFBRCxJQUFrQjtBQUMzRSxvQkFBSUEsWUFBSixFQUFrQjtBQUNkLHlCQUFLOUIsS0FBTCxDQUFXK0IsY0FBWCxDQUEwQkQsWUFBMUIsRUFBd0MsWUFBeEM7QUFDSDtBQUNKLGFBSkQ7QUFLSDtBQUNKOztBQUVERSxhQUFTO0FBQ0wsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLDZCQUFmO0FBQ0k7QUFBQTtBQUFBLGtCQUFHLFdBQVUsZ0JBQWI7QUFBQTtBQUF1QyxxQkFBS2hDLEtBQUwsQ0FBV2lDLEtBQWxEO0FBQUE7QUFBaUU7QUFBQTtBQUFBLHNCQUFNLE9BQU8sRUFBRUMsWUFBWSxHQUFkLEVBQWI7QUFBbUMseUJBQUtsQyxLQUFMLENBQVdtQyxjQUFYLEdBQTZCLE9BQU0sS0FBS25DLEtBQUwsQ0FBV21DLGNBQWUsRUFBN0QsR0FBaUU7QUFBcEc7QUFBakUsYUFESjtBQUVJO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGdCQUFiO0FBQStCLHFCQUFLbkMsS0FBTCxDQUFXVyxZQUFYLEdBQTJCLE9BQU0sS0FBS1gsS0FBTCxDQUFXVyxZQUFhLEVBQXpELEdBQTZEO0FBQTVGLGFBRko7QUFHSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxRQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFRLFdBQVUsc0JBQWxCLEVBQXlDLFNBQVMsTUFBTSxLQUFLYyxnQkFBTCxFQUF4RDtBQUFBO0FBQUE7QUFESixhQUhKO0FBTUk7QUFBQTtBQUFBLGtCQUFHLFdBQVUsdUJBQWI7QUFBQTtBQUFBLGFBTko7QUFPSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxRQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFRLFdBQVUsd0JBQWxCLEVBQTJDLFNBQVMsS0FBS2IsWUFBTCxDQUFrQndCLElBQWxCLENBQXVCLElBQXZCLENBQXBEO0FBQUE7QUFBQTtBQURKO0FBUEosU0FESjtBQWFIO0FBakYyQzs7a0JBb0ZqQ3hDLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RmY7Ozs7OztrQkFFZXlDLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7O0FBRUEsTUFBTUMsUUFBTixTQUF1QnpDLGdCQUFNQyxTQUE3QixDQUF1QztBQUNuQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0g7O0FBRURnQyxhQUFTOztBQUVMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUNJO0FBQUE7QUFBQSxrQkFBUSxXQUFVLGdCQUFsQixFQUFtQyxPQUFPLEVBQUVPLFNBQVMsT0FBWCxFQUExQztBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0ksMkRBQUssS0FBS0MsU0FBZUEsR0FBRyxnQ0FBNUI7QUFESixpQkFESjtBQUlJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLGtDQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFHLE1BQUssY0FBUixFQUF1QixTQUFTLE1BQU07QUFDbEMsNkNBQUt4QyxLQUFMLENBQVd1QixPQUFYLENBQW1CQyxJQUFuQixDQUF3QixHQUF4QjtBQUNILHFDQUZEO0FBRUcsdUVBQUssS0FBS2dCLFNBQWVBLEdBQUcseUJBQTVCLEVBQXVELFdBQVUsV0FBakU7QUFGSDtBQURKO0FBREo7QUFESjtBQUpKLGFBREo7QUFlSSxtREFBSyxXQUFVLFdBQWYsR0FmSjtBQWdCSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsS0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLDhCQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUsMEJBQWY7QUFDSTtBQUFBO0FBQUEsa0NBQUcsV0FBVSxtQkFBYjtBQUFBO0FBQUEsNkJBREo7QUFFSSxtRUFBSyxLQUFLQSxTQUFlQSxHQUFHLHNCQUE1QixHQUZKO0FBR0k7QUFBQTtBQUFBLGtDQUFHLFdBQVUsbUJBQWI7QUFBQTtBQUFBLDZCQUhKO0FBSUk7QUFBQTtBQUFBLGtDQUFHLFdBQVUsWUFBYjtBQUFBO0FBQWdDO0FBQUE7QUFBQSxzQ0FBRyxNQUFLLGNBQVIsRUFBdUIsU0FBUyxNQUFNO0FBQ2xFLGlEQUFLeEMsS0FBTCxDQUFXdUIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsR0FBeEI7QUFDSCx5Q0FGK0I7QUFBQTtBQUFBO0FBQWhDO0FBSko7QUFESjtBQURKO0FBREo7QUFoQkosU0FESjtBQWlDSDtBQXhDa0M7O2tCQTRDeEJjLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTUcsZ0JBQU4sU0FBK0I1QyxnQkFBTUMsU0FBckMsQ0FBK0M7QUFDM0NDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUeUMsOEJBQWtCO0FBRFQsU0FBYjtBQUdIOztBQUVEQyx5QkFBcUI7QUFDakIsYUFBS3JDLFFBQUwsQ0FBYyxFQUFFb0Msa0JBQWtCLENBQUMsS0FBS3pDLEtBQUwsQ0FBV3lDLGdCQUFoQyxFQUFkO0FBQ0g7O0FBRURFLGNBQVVDLEVBQVYsRUFBY0MsR0FBZCxFQUFtQkMsV0FBbkIsRUFBZ0NDLENBQWhDLEVBQW1DO0FBQy9CQSxVQUFFQyxlQUFGO0FBQ0EsWUFBSTlCLE9BQU87QUFDUCx3QkFBWSxhQURMLEVBQ29CLFVBQVUsZ0JBRDlCLEVBQ2dELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEakYsRUFDcUYsVUFBVSxDQUQvRixFQUNrRyxTQUFTLGlCQUQzRyxFQUM4SCxjQUFjd0I7QUFENUksU0FBWDtBQUdBekIsc0JBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNQSxJQUFSLEVBQWQ7O0FBRUFBLGVBQU87QUFDSCx3QkFBWSxhQURULEVBQ3dCLFVBQVUsb0JBRGxDLEVBQ3dELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEekYsRUFDNkYsVUFBVSxDQUR2RyxFQUMwRyxTQUFTLHVCQURuSCxFQUM0SSxRQUFRLEtBQUtyQixLQUFMLENBQVdrRCxJQUFYLEdBQWtCO0FBRHRLLFNBQVA7QUFHQTlCLHNCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTUEsSUFBUixFQUFkOztBQUVBLFlBQUk2QixFQUFFRyxPQUFGLElBQWFILEVBQUVJLE9BQW5CLEVBQTRCLENBRTNCLENBRkQsTUFFTztBQUNISixjQUFFSyxjQUFGOztBQUVBLGdCQUFJQyxlQUFlLEtBQUt0RCxLQUFMLENBQVd1RCx1QkFBWCxDQUFtQ0MsTUFBbkMsQ0FBMENDLEtBQUtBLEVBQUVDLElBQUYsSUFBVSxxQkFBekQsRUFBZ0ZDLEdBQWhGLENBQW9GRixLQUFLQSxFQUFFWixFQUEzRixDQUFuQjtBQUNBLGdCQUFJZSxnQkFBZ0IsS0FBSzVELEtBQUwsQ0FBV3VELHVCQUFYLENBQW1DQyxNQUFuQyxDQUEwQ0MsS0FBS0EsRUFBRUMsSUFBRixJQUFVLFlBQXpELEVBQXVFQyxHQUF2RSxDQUEyRUYsS0FBS0EsRUFBRVosRUFBbEYsQ0FBcEI7O0FBR0EsZ0JBQUlDLEdBQUosRUFBUztBQUNMO0FBQ0Esb0JBQUlRLGFBQWFPLE1BQWIsSUFBdUJELGNBQWNDLE1BQXpDLEVBQWlEO0FBQzdDLHlCQUFLN0QsS0FBTCxDQUFXdUIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBeUIsSUFBR3NCLEdBQUksZ0JBQWVDLFdBQVksbUNBQWtDTyxZQUFhLGtCQUFpQk0sYUFBYyxFQUF6STtBQUNILGlCQUZELE1BRU87QUFDSCx5QkFBSzVELEtBQUwsQ0FBV3VCLE9BQVgsQ0FBbUJDLElBQW5CLENBQXlCLElBQUdzQixHQUFJLGdCQUFlQyxXQUFZLEVBQTNEO0FBQ0g7QUFDSixhQVBELE1BT087QUFDSDtBQUNBLG9CQUFJTyxhQUFhTyxNQUFiLElBQXVCRCxjQUFjQyxNQUF6QyxFQUFpRDtBQUM3Qyx5QkFBSzdELEtBQUwsQ0FBV3VCLE9BQVgsQ0FBbUJDLElBQW5CLENBQXlCLGVBQWNxQixFQUFHLGdCQUFlRSxXQUFZLG1DQUFrQ08sWUFBYSxrQkFBaUJNLGFBQWMsRUFBbko7QUFDSCxpQkFGRCxNQUVPO0FBQ0gseUJBQUs1RCxLQUFMLENBQVd1QixPQUFYLENBQW1CQyxJQUFuQixDQUF5QixlQUFjcUIsRUFBRyxnQkFBZUUsV0FBWSxFQUFyRTtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUVEZSx3QkFBb0JDLDJCQUFwQixFQUFpRDtBQUM3QyxlQUFPQSw0QkFBNEJDLE1BQTVCLENBQW1DLENBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFZQyxDQUFaLEtBQWtCO0FBQ3hERixtQkFBUSxHQUFFQyxLQUFLRSxJQUFLLEVBQXBCO0FBQ0EsZ0JBQUlELElBQUlKLDRCQUE0QkYsTUFBNUIsR0FBcUMsQ0FBN0MsRUFBZ0RJLE9BQVEsSUFBUjtBQUNoRCxtQkFBT0EsR0FBUDtBQUNILFNBSk0sRUFJSixFQUpJLENBQVA7QUFLSDs7QUFFREksbUJBQWV4QixFQUFmLEVBQW1CQyxHQUFuQixFQUF3QkMsV0FBeEIsRUFBcUNDLENBQXJDLEVBQXdDO0FBQ3BDO0FBQ0EsWUFBSXNCLE9BQU8sRUFBRUMsTUFBTSxFQUFSLEVBQVg7QUFDQSxhQUFLdkUsS0FBTCxDQUFXd0UsaUJBQVgsQ0FBNkJGLElBQTdCLEVBQW1DLEtBQW5DOztBQUVBLFlBQUluRCxPQUFPO0FBQ1Asd0JBQVksYUFETCxFQUNvQixVQUFVLHlCQUQ5QixFQUN5RCxjQUFjQyxjQUFJQyxTQUFKLE1BQW1CLEVBRDFGLEVBQzhGLFVBQVUsQ0FEeEcsRUFDMkcsU0FBUyxzQkFEcEgsRUFDNEksY0FBY3dCO0FBRDFKLFNBQVg7QUFHQXpCLHNCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTUEsSUFBUixFQUFkOztBQUVBLFlBQUksRUFBRXlDLGFBQUYsS0FBb0IsS0FBS2EscUJBQUwsQ0FBMkI1QixFQUEzQixDQUF4QjtBQUNBLGFBQUs3QyxLQUFMLENBQVcwRSxxQkFBWCxDQUFpQyxFQUFqQyxFQUFxQyxFQUFyQyxFQUF5Q2QsYUFBekMsRUFBd0QsSUFBeEQ7QUFDQSxZQUFHZCxHQUFILEVBQU87QUFDSCxpQkFBSzlDLEtBQUwsQ0FBV3VCLE9BQVgsQ0FBbUJDLElBQW5CLENBQXlCLElBQUdzQixHQUFJLHNCQUFxQkQsRUFBRyxnQkFBZUUsV0FBWSxFQUFuRjtBQUNILFNBRkQsTUFFTztBQUNILGlCQUFLL0MsS0FBTCxDQUFXdUIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBeUIsZUFBY3FCLEVBQUcsSUFBR0UsV0FBWSxjQUF6RDtBQUNIO0FBQ0o7O0FBRUQwQiwwQkFBc0I1QixFQUF0QixFQUEwQjtBQUN0QixZQUFJOEIsV0FBVyxFQUFmOztBQUVBLFlBQUksS0FBSzNFLEtBQUwsQ0FBVzRFLE9BQVgsSUFBc0IsS0FBSzVFLEtBQUwsQ0FBVzRFLE9BQVgsQ0FBbUJDLFFBQTdDLEVBQXVEO0FBQ25ERix1QkFBVyxDQUFDRyxLQUFLQyxLQUFMLENBQVcsS0FBSy9FLEtBQUwsQ0FBVzRFLE9BQVgsQ0FBbUJDLFFBQW5CLEdBQThCLEVBQXpDLElBQStDLEVBQWhELEVBQW9ERyxPQUFwRCxDQUE0RCxDQUE1RCxDQUFYO0FBQ0g7O0FBRUQsWUFBSTdELE9BQU87QUFDUCx3QkFBWSxhQURMLEVBQ29CLFVBQVUsZ0JBRDlCLEVBQ2dELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEakYsRUFDcUYsVUFBVSxDQUQvRixFQUNrRyxTQUFTLGlCQUQzRyxFQUM4SCxjQUFjd0I7QUFENUksU0FBWDtBQUdBekIsc0JBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNQSxJQUFSLEVBQWQ7O0FBRUEsWUFBSW1DLGVBQWUsS0FBS3RELEtBQUwsQ0FBV3VELHVCQUFYLENBQW1DQyxNQUFuQyxDQUEwQ0MsS0FBS0EsRUFBRUMsSUFBRixJQUFVLHFCQUF6RCxFQUFnRkMsR0FBaEYsQ0FBb0ZGLEtBQUtBLEVBQUVaLEVBQTNGLEVBQStGb0MsSUFBL0YsQ0FBb0csR0FBcEcsQ0FBbkI7QUFDQSxZQUFJckIsZ0JBQWdCLEtBQUs1RCxLQUFMLENBQVd1RCx1QkFBWCxDQUFtQ0MsTUFBbkMsQ0FBMENDLEtBQUtBLEVBQUVDLElBQUYsSUFBVSxZQUF6RCxFQUF1RUMsR0FBdkUsQ0FBMkVGLEtBQUtBLEVBQUVaLEVBQWxGLEVBQXNGb0MsSUFBdEYsQ0FBMkYsR0FBM0YsQ0FBcEI7QUFDQSxZQUFJQyxnQkFBZ0IsS0FBS2xGLEtBQUwsQ0FBV3VELHVCQUFYLENBQW1DQyxNQUFuQyxDQUEwQ0MsS0FBS0EsRUFBRUMsSUFBRixJQUFVLFdBQXpELEVBQXNFQyxHQUF0RSxDQUEwRUYsS0FBS0EsRUFBRVosRUFBakYsRUFBcUZvQyxJQUFyRixDQUEwRixHQUExRixDQUFwQjtBQUNBLFlBQUlFLHFCQUFxQixLQUFLbkYsS0FBTCxDQUFXdUQsdUJBQVgsQ0FBbUNDLE1BQW5DLENBQTBDQyxLQUFLQSxFQUFFQyxJQUFGLElBQVUsWUFBekQsRUFBdUVDLEdBQXZFLENBQTJFRixLQUFLQSxFQUFFWixFQUFsRixFQUFzRm9DLElBQXRGLENBQTJGLEdBQTNGLENBQXpCO0FBQ0E5RCxlQUFPO0FBQ0gsd0JBQVksYUFEVCxFQUN3QixVQUFVLG9CQURsQyxFQUN3RCxjQUFjQyxjQUFJQyxTQUFKLE1BQW1CLEVBRHpGLEVBQzZGLFVBQVUsQ0FEdkcsRUFDMEcsU0FBUyx1QkFEbkgsRUFDNEksUUFBUSxLQUFLckIsS0FBTCxDQUFXa0QsSUFBWCxHQUFrQixDQUR0SyxFQUN5SyxxQkFBcUIsS0FBS2xELEtBQUwsQ0FBV2lDLEtBRHpNLEVBQ2dOLG1CQUFtQmtELGtCQURuTyxFQUN1UCxjQUFjRCxhQURyUSxFQUNvUixjQUFjdEIsYUFEbFMsRUFDaVQsc0JBQXNCTixZQUR2VSxFQUNxVixZQUFZcUI7QUFEalcsU0FBUDtBQUdBdkQsc0JBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNQSxJQUFSLEVBQWQ7O0FBRUEsZUFBUSxFQUFFbUMsWUFBRixFQUFnQk0sYUFBaEIsRUFBUjtBQUVIOztBQUdENUIsYUFBUztBQUNMLFlBQUksRUFBRWUsV0FBRixFQUFlcUMsT0FBZixFQUF3QkMsYUFBeEIsRUFBdUNDLE9BQXZDLEVBQWdEQyxvQkFBaEQsRUFBc0VDLGFBQXRFLEtBQXdGLEtBQUt4RixLQUFMLENBQVc0RSxPQUF2RztBQUNBLFlBQUlhLGlCQUFpQixFQUFyQjtBQUNBLFlBQUksRUFBRWxDLHVCQUFGLEtBQThCLEtBQUt2RCxLQUF2QztBQUNBLFlBQUl1RCwyQkFBMkJBLHdCQUF3Qk0sTUFBdkQsRUFBK0Q7QUFDM0Q0Qiw2QkFBaUJsQyx3QkFBd0IsQ0FBeEIsRUFBMkJhLElBQTVDO0FBQ0g7QUFDRCxZQUFJc0IsU0FBVUosV0FBV0EsUUFBUXpCLE1BQXBCLEdBQThCeUIsUUFBUSxDQUFSLENBQTlCLEdBQTJDLEVBQXhEOztBQUVBLFlBQUlBLFdBQVdBLFFBQVF6QixNQUF2QixFQUErQjtBQUMzQixnQkFBSSxFQUFFOEIsZ0JBQUYsRUFBb0JkLFFBQXBCLEVBQThCZSxtQkFBOUIsRUFBbURDLFVBQW5ELEVBQStEQyxHQUEvRCxFQUFvRUMsc0JBQXBFLEVBQTRGQywwQkFBNUYsS0FBMkhOLE1BQS9IOztBQUVBYix1QkFBVyxDQUFDQyxLQUFLQyxLQUFMLENBQVdGLFdBQVcsRUFBdEIsSUFBNEIsRUFBN0IsRUFBaUNHLE9BQWpDLENBQXlDLENBQXpDLENBQVg7QUFDQSxnQkFBSWlCLFdBQVcsQ0FBZjtBQUNBLGdCQUFJSCxPQUFPLENBQVAsSUFBWUgsb0JBQW9CLENBQXBDLEVBQXVDO0FBQ25DTSwyQkFBVyxNQUFNbkIsS0FBS0MsS0FBTCxDQUFZWSxtQkFBbUIsR0FBcEIsR0FBMkJHLEdBQXRDLENBQWpCO0FBQ0g7O0FBRUQsZ0JBQUlJLGVBQWUsS0FBbkI7QUFDQSxnQkFBSUMsZ0JBQWdCLENBQXBCO0FBQ0EsZ0JBQUlDLGtCQUFrQixDQUF0QjtBQUNBLGdCQUFJQywwQkFBMEJWLGdCQUE5QjtBQUNBLGdCQUFJVyxvQkFBb0JSLEdBQXhCO0FBQ0FQLGlDQUFxQjVCLEdBQXJCLENBQTBCRixDQUFELElBQU87QUFDNUJ5QywrQkFBZSxJQUFmO0FBQ0F6QyxrQkFBRThDLFVBQUYsQ0FBYS9DLE1BQWIsQ0FBb0JDLEtBQUtBLEVBQUUrQyxXQUEzQixFQUF3QzdDLEdBQXhDLENBQTZDRixDQUFELElBQU87QUFDL0M0QywrQ0FBMkI1QyxFQUFFb0MsVUFBN0I7QUFDQVMseUNBQXFCN0MsRUFBRXFDLEdBQXZCO0FBQ0FLO0FBQ0gsaUJBSkQ7O0FBTUFDLG1DQUFtQjNDLEVBQUU4QyxVQUFGLENBQWEvQyxNQUFiLENBQW9CQyxLQUFLLENBQUNBLEVBQUUrQyxXQUE1QixFQUF5QzNDLE1BQTVEO0FBQ0gsYUFURDs7QUFXQSxnQkFBSXFDLGdCQUFnQixLQUFwQixFQUEyQjtBQUN2QixvQkFBSUkscUJBQXFCLENBQXJCLElBQTBCRCwyQkFBMkIsQ0FBekQsRUFBNEQ7QUFDeERKLCtCQUFXLE1BQU1uQixLQUFLQyxLQUFMLENBQVlzQiwwQkFBMEIsR0FBM0IsR0FBa0NDLGlCQUE3QyxDQUFqQjtBQUNIO0FBQ0o7O0FBRURKLDJCQUFlLEtBQWY7O0FBRUEsbUJBRUk7QUFBQTtBQUFBLGtCQUFLLFdBQVUscUJBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSx3QkFBZixFQUF3QyxPQUFPLEVBQUVPLFVBQVUsVUFBWixFQUEvQztBQUVRYiwwQ0FBc0I7QUFBQTtBQUFBLDBCQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQSxxQkFBdEIsR0FBMkUsRUFGbkY7QUFJSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQTtBQUNJLG1FQUFLLFdBQVUsY0FBZixFQUE4QixPQUFNLE1BQXBDLEVBQTJDLFFBQU8sTUFBbEQsRUFBeUQsS0FBS3BELFNBQWVBLEdBQUcsc0JBQWhGLEdBREo7QUFFSTtBQUFBO0FBQUE7QUFBT3FDLHdDQUFQO0FBQUE7QUFBQTtBQUZKO0FBREoscUJBSko7QUFVSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxnQkFBZixFQUFnQyxPQUFPLEVBQUU2QixRQUFRLFNBQVYsRUFBdkMsRUFBOEQsU0FBVTFELENBQUQsSUFBTztBQUMxRSxvQ0FBSXNDLFdBQVdBLFFBQVF6QixNQUFSLElBQWtCLENBQWpDLEVBQW9DO0FBQ2hDLHdDQUFJbUMsMEJBQUosRUFBZ0M7QUFDNUIsNkNBQUszQixjQUFMLENBQW9CcUIsT0FBTzdDLEVBQTNCLEVBQStCNkMsT0FBTzVDLEdBQXRDLEVBQTJDQyxlQUFlLEVBQTFEO0FBQ0gscUNBRkQsTUFFTztBQUNILDZDQUFLSCxTQUFMLENBQWU4QyxPQUFPN0MsRUFBdEIsRUFBMEI2QyxPQUFPNUMsR0FBakMsRUFBc0NDLFdBQXRDLEVBQW1EQyxDQUFuRDtBQUNIO0FBQ0osaUNBTkQsTUFNTztBQUNILHlDQUFLTCxrQkFBTCxDQUF3QkssQ0FBeEI7QUFDSDtBQUNKLDZCQVZEO0FBV0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUsT0FBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLHVCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLDBDQUFJLFdBQVUsMkNBQWQ7QUFBMkRxQztBQUEzRDtBQURKLGlDQURKO0FBSUk7QUFBQTtBQUFBLHNDQUFNLFdBQVUsNEJBQWhCO0FBQThDRDtBQUE5QyxpQ0FKSjtBQUtJO0FBQUE7QUFBQSxzQ0FBRyxXQUFVLFFBQWI7QUFBdUJLO0FBQXZCO0FBTEosNkJBREo7QUFTSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxRQUFmO0FBRVFPLDhEQUE4QkMsUUFBOUIsR0FBeUM7QUFBQTtBQUFBLHNDQUFHLFdBQVUsZ0JBQWIsRUFBOEIsT0FBTyxFQUFFVSxPQUFPLEtBQVQsRUFBZ0JDLGNBQWMsS0FBOUIsRUFBckM7QUFBQTtBQUFBLGlDQUF6QyxHQUFtTTtBQUYzTTtBQVRKLHlCQVhKO0FBMEJJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLE9BQWY7QUFDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxtQkFBZjtBQUVRWiw4REFBOEJDLFFBQTlCLEdBQXlDO0FBQUE7QUFBQSxzQ0FBTSxXQUFVLCtCQUFoQjtBQUFpREEsNENBQWpEO0FBQUE7QUFBQSxpQ0FBekMsR0FBa0gsRUFGMUg7QUFNUUQsNkRBQ0E7QUFBQTtBQUFBLHNDQUFHLFdBQVUsYUFBYjtBQUFBO0FBQThCSywyREFBOUI7QUFFUUMseURBQXFCRCx1QkFBckIsR0FBK0MsRUFBL0MsR0FBb0Q7QUFBQTtBQUFBLDBDQUFNLFdBQVUsZ0JBQWhCO0FBQUE7QUFBb0NDO0FBQXBDO0FBRjVELGlDQURBLEdBTUM7QUFBQTtBQUFBLHNDQUFHLFdBQVUsYUFBYjtBQUFBO0FBQThCQTtBQUE5QixpQ0FaVDtBQWVJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLHNCQUFmO0FBRVFOLGtFQUE4Qkwsb0JBQW9CRSxVQUFsRCxHQUErRDtBQUFBO0FBQUEsMENBQU0sV0FBVSxzQkFBaEIsRUFBdUMsT0FBTyxFQUFFZ0IsVUFBVSxFQUFaLEVBQTlDO0FBQUE7QUFBQSxxQ0FBL0QsR0FBa0ssRUFGMUs7QUFLUSxxQ0FBQ2xCLGdCQUFELElBQXFCLENBQUNPLFlBQXRCLEdBQ0k7QUFBQTtBQUFBLDBDQUFNLFdBQVUsK0NBQWhCO0FBQUE7QUFBQSxxQ0FESixHQUNrRjtBQU4xRixpQ0FmSjtBQXlCUVosMkNBQVdBLFFBQVF6QixNQUFSLElBQWtCLENBQTdCLEdBQWtDbUMsNkJBQTZCO0FBQUE7QUFBQSxzQ0FBUSxXQUFVLGVBQWxCO0FBQUE7QUFBQSxpQ0FBN0IsR0FBbUY7QUFBQTtBQUFBLHNDQUFRLFdBQVUsZ0JBQWxCLEVBQW1DLE9BQU8sRUFBRWMsT0FBTyxNQUFULEVBQTFDO0FBQUE7QUFBQSxpQ0FBckgsR0FBc007QUFBQTtBQUFBLHNDQUFRLFdBQVUsZUFBbEI7QUFBQTtBQUFBO0FBekI5TTtBQURKO0FBMUJKO0FBVkosaUJBREo7QUF3RVF4QiwyQkFBV0EsUUFBUXpCLE1BQVIsSUFBa0IsQ0FBN0IsSUFBa0MsS0FBSzVELEtBQUwsQ0FBV3lDLGdCQUE3QyxHQUFnRTtBQUFBO0FBQUEsc0JBQUssV0FBVSxrQkFBZjtBQUM1RDtBQUFBO0FBQUE7QUFFUTRDLGdDQUFRM0IsR0FBUixDQUFZLENBQUNvRCxDQUFELEVBQUl0RCxDQUFKLEtBQVU7QUFDbEIsbUNBQU87QUFBQTtBQUFBLGtDQUFJLEtBQUtBLENBQVQ7QUFDSDtBQUFBO0FBQUEsc0NBQUcsV0FBVSxxQkFBYjtBQUFBO0FBQ1NzRCxzQ0FBRTNDO0FBRFgsaUNBREc7QUFHSDtBQUFBO0FBQUEsc0NBQUssV0FBVSxnQkFBZjtBQUVRLHFDQUFDOEIsWUFBRCxHQUFnQjtBQUFBO0FBQUEsMENBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQWlDYSwwQ0FBRXBCLGdCQUFuQztBQUVSb0IsMENBQUVqQixHQUFGLElBQVNpQixFQUFFcEIsZ0JBQVgsR0FBOEIsRUFBOUIsR0FBbUM7QUFBQTtBQUFBO0FBQUE7QUFBU29CLDhDQUFFakI7QUFBWDtBQUYzQixxQ0FBaEIsR0FJTyxFQU5mO0FBU1FpQixzQ0FBRWYsMEJBQUYsR0FBK0I7QUFBQTtBQUFBLDBDQUFRLE9BQU8sRUFBRVUsUUFBUSxTQUFWLEVBQWYsRUFBc0MsU0FBUyxLQUFLckMsY0FBTCxDQUFvQmpDLElBQXBCLENBQXlCLElBQXpCLEVBQStCMkUsRUFBRWxFLEVBQWpDLEVBQXFDa0UsRUFBRWpFLEdBQXZDLEVBQTRDQyxlQUFlLEVBQTNELENBQS9DLEVBQStHLFdBQVUscUJBQXpIO0FBQUE7QUFBQSxxQ0FBL0IsR0FBa007QUFBQTtBQUFBLDBDQUFRLE9BQU8sRUFBRTJELFFBQVEsU0FBVixFQUFmLEVBQXNDLFNBQVMsS0FBSzlELFNBQUwsQ0FBZVIsSUFBZixDQUFvQixJQUFwQixFQUEwQjJFLEVBQUVsRSxFQUE1QixFQUFnQ2tFLEVBQUVqRSxHQUFsQyxFQUF1Q0MsV0FBdkMsQ0FBL0MsRUFBb0csV0FBVSx1Q0FBOUc7QUFBQTtBQUFBO0FBVDFNO0FBSEcsNkJBQVA7QUFnQkgseUJBakJEO0FBRlI7QUFENEQsaUJBQWhFLEdBdUJTLEVBL0ZqQjtBQW1HUXVDLDJCQUFXQSxRQUFRekIsTUFBbkIsSUFBNkIsS0FBSzVELEtBQUwsQ0FBV3lDLGdCQUF4QyxHQUEyRDtBQUFBO0FBQUEsc0JBQUssU0FBUyxLQUFLQyxrQkFBTCxDQUF3QlAsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBZCxFQUFrRCxXQUFVLG1CQUE1RCxFQUFnRixPQUFPLEVBQUVzRSxRQUFRLFNBQVYsRUFBcUJNLFdBQVcsbUJBQWhDLEVBQXZGO0FBQ3ZEO0FBQUE7QUFBQSwwQkFBSyxPQUFPLEVBQUVKLGNBQWMsS0FBaEIsRUFBWjtBQUFxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJDLHFCQUR1RDtBQUd2RDtBQUFBO0FBQUEsMEJBQUssV0FBVSxzQkFBZjtBQUNJLCtEQUFLLFdBQVUsRUFBZixFQUFrQixPQUFPLEVBQUVLLFFBQVEsS0FBVixFQUF6QixFQUE0QyxLQUFLekUsU0FBZUEsR0FBRyx3Q0FBbkU7QUFESjtBQUh1RCxpQkFBM0QsR0FNUztBQXpHakIsYUFGSjtBQWdISCxTQWpKRCxNQWlKTztBQUNILG1CQUFPLEVBQVA7QUFDSDtBQUNKO0FBclEwQzs7a0JBeVFoQ0MsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlRZjs7Ozs7O2tCQUVlQSwwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFKQSxNQUFNL0MsY0FBY0MsbUJBQU9BLENBQUMsa0NBQVIsQ0FBcEI7OztBQU1BLE1BQU11SCxpQkFBTixTQUFnQ3JILGdCQUFNQyxTQUF0QyxDQUFnRDtBQUM1Q0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOOztBQURlLGFBK0JuQm1ILGFBL0JtQixHQStCSixNQUFJO0FBQ2YsZ0JBQUlDLGlCQUFpQkMsU0FBU0MsZUFBVCxDQUF5QkMsU0FBekIsSUFBc0NGLFNBQVNHLElBQVQsQ0FBY0QsU0FBekU7QUFDQSxnQkFBSUUsYUFBYTFHLE9BQU8yRyxNQUFQLElBQWlCM0csT0FBTzJHLE1BQVAsQ0FBY1osS0FBL0IsSUFBd0MsSUFBekQ7QUFDQSxnQkFBSWEsU0FBUyxHQUFiO0FBQ0EsZ0JBQUdGLGNBQWNBLGFBQVcsR0FBNUIsRUFBaUM7QUFDN0JFLHlCQUFRQSxTQUFPLEdBQWY7QUFDSDtBQUNELGdCQUFHUCxpQkFBZU8sTUFBbEIsRUFBeUI7QUFDckIscUJBQUtySCxRQUFMLENBQWMsRUFBQ3NILGVBQWUsSUFBaEIsRUFBZDtBQUNILGFBRkQsTUFFSztBQUNELHFCQUFLdEgsUUFBTCxDQUFjLEVBQUNzSCxlQUFlLEtBQWhCLEVBQWQ7QUFDSDtBQUNKLFNBM0NrQjs7QUFFZixZQUFJQyxVQUFVLElBQWQ7QUFDQSxZQUFJQyxhQUFhLElBQWpCO0FBQ0EsY0FBTXBHLFNBQVNoQyxZQUFZaUMsS0FBWixDQUFrQixLQUFLM0IsS0FBTCxDQUFXZ0IsUUFBWCxDQUFvQmQsTUFBdEMsQ0FBZjtBQUNBLFlBQUksS0FBS0YsS0FBTCxDQUFXK0gsaUJBQWYsRUFBa0M7QUFDOUJGLHNCQUFVLEtBQUs3SCxLQUFMLENBQVcrSCxpQkFBWCxDQUE2QkYsT0FBdkM7QUFDQUMseUJBQWEsS0FBSzlILEtBQUwsQ0FBVytILGlCQUFYLENBQTZCRCxVQUExQztBQUNIO0FBQ0QsYUFBSzdILEtBQUwsR0FBYTtBQUNUO0FBQ0E2SCxzQkFGUztBQUdURSx5QkFBYSxLQUFLaEksS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCckMsUUFBckIsQ0FBOEIsU0FBOUIsS0FBNEMsS0FBS1QsS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCckMsUUFBckIsQ0FBOEIsWUFBOUIsQ0FBNUMsSUFBMkYsS0FBS1QsS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCckMsUUFBckIsQ0FBOEIsUUFBOUIsQ0FIL0Y7QUFJVHlILHlCQUFhLEtBQUtsSSxLQUFMLENBQVdnQixRQUFYLENBQW9CZCxNQUFwQixDQUEyQk8sUUFBM0IsQ0FBb0MsYUFBcEMsS0FBc0QsSUFKMUQ7QUFLVDBILHVCQUFXLEtBTEY7QUFNVEMsdUJBQVcsRUFORjtBQU9UQyx5QkFBYSxLQVBKO0FBUVRqQiw0QkFBZ0IsQ0FSUDtBQVNUa0IseUJBQWEsRUFUSjtBQVVUQyw0QkFBZ0IsS0FWUDtBQVdUQyx5QkFBYSxFQVhKO0FBWVRDLHFCQUFTL0csV0FBV0EsT0FBTytHLE9BQVAsSUFBa0IvRyxPQUFPZ0gsV0FBcEMsQ0FaQTtBQWFUQywyQkFBYyxFQWJMO0FBY1RmLDJCQUFjLEtBZEw7QUFlVGdCLDhCQUFrQixLQWZUO0FBZ0JUQyw2QkFBaUJuSCxPQUFPb0gsVUFoQmY7QUFpQlRDLHlCQUFZLENBakJIO0FBa0JUQyw2QkFBZ0I7QUFsQlAsU0FBYjtBQW9CSDs7QUFnQkR0SSx3QkFBb0I7QUFDaEI7OztBQUdBLGNBQU1nQixTQUFTaEMsWUFBWWlDLEtBQVosQ0FBa0IsS0FBSzNCLEtBQUwsQ0FBV2dCLFFBQVgsQ0FBb0JkLE1BQXRDLENBQWY7QUFDQTtBQUNBLFlBQUkrSSxZQUFZLElBQWhCO0FBQ0EsWUFBSSxLQUFLakosS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCckMsUUFBckIsQ0FBOEIsU0FBOUIsS0FBNEMsS0FBS1QsS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCckMsUUFBckIsQ0FBOEIsWUFBOUIsQ0FBNUMsSUFBMkYsS0FBS1QsS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCckMsUUFBckIsQ0FBOEIsUUFBOUIsQ0FBL0YsRUFBd0k7QUFDcEl3SSx3QkFBWSxLQUFLakosS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCb0csV0FBckIsRUFBWjtBQUNIOztBQUVEO0FBQ0EsWUFBSSxLQUFLbEosS0FBTCxDQUFXUSxZQUFYLElBQTJCLENBQUMsS0FBS1IsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxRQUF4QixDQUFpQyxLQUFqQyxDQUE1QixJQUF1RSxLQUFLVCxLQUFMLENBQVdLLGdCQUFsRixJQUFzRyxLQUFLTCxLQUFMLENBQVdLLGdCQUFYLENBQTRCRSxpQkFBdEksRUFBeUo7O0FBRXJKLGlCQUFLRCxRQUFMLENBQWMsRUFBRXFJLGVBQWUsS0FBSzNJLEtBQUwsQ0FBV0ssZ0JBQVgsQ0FBNEJFLGlCQUE3QyxFQUFkO0FBRUg7QUFDRDtBQUNBO0FBQ0EsWUFBRyxLQUFLTixLQUFMLENBQVd3SSxPQUFYLElBQXNCLENBQUMsS0FBS3hJLEtBQUwsQ0FBVzJJLGdCQUFsQyxJQUFzRCxLQUFLTyxJQUFMLENBQVUsaUJBQVYsQ0FBdEQsSUFBc0YsT0FBT3BJLE1BQVAsS0FBa0IsV0FBM0csRUFBdUg7QUFDbkhBLG1CQUFPcUksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS2pDLGFBQXZDO0FBQ0EsaUJBQUs3RyxRQUFMLENBQWMsRUFBQ3NJLGtCQUFrQixJQUFuQixFQUFkO0FBQ0g7O0FBRUQ7OztBQU1BOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBLFlBQUksS0FBSzNJLEtBQUwsQ0FBV3dJLE9BQWYsRUFBd0I7QUFDcEIsZ0JBQUlZLFlBQVk7QUFDWmhKLGtDQUFrQixLQUFLTCxLQUFMLENBQVdLLGdCQURqQjtBQUVacUQsc0JBQUtoQyxPQUFPK0csT0FBUCxHQUFlLFFBQWYsR0FBd0IvRyxPQUFPZ0gsV0FBUCxHQUFtQixTQUFuQixHQUE2QjtBQUY5QyxhQUFoQjtBQUlBLGlCQUFLMUksS0FBTCxDQUFXc0osa0JBQVgsQ0FBOEJELFNBQTlCO0FBQ0EsaUJBQUtySixLQUFMLENBQVd1SixlQUFYLENBQTJCRixTQUEzQjtBQUNIOztBQUVELFlBQUksS0FBS3JKLEtBQUwsQ0FBV3dKLGFBQWYsRUFBOEI7QUFDMUIsZ0JBQUlDLGNBQWMsSUFBbEI7QUFDQTtBQUNBLGdCQUFJLEtBQUt6SixLQUFMLENBQVdnQixRQUFYLENBQW9CZCxNQUFwQixDQUEyQk8sUUFBM0IsQ0FBb0MsV0FBcEMsQ0FBSixFQUFzRDs7QUFFbEQsb0JBQUksS0FBS1QsS0FBTCxDQUFXMEosY0FBWCxJQUE2QixLQUFLMUosS0FBTCxDQUFXMEosY0FBWCxDQUEwQmhJLE9BQU8wRyxTQUFqQyxDQUE3QixJQUE0RSxLQUFLcEksS0FBTCxDQUFXMEosY0FBWCxDQUEwQmhJLE9BQU8wRyxTQUFqQyxFQUE0Q2pILElBQTVILEVBQWtJOztBQUU5SHNJLGtDQUFjLEtBQWQ7QUFDQSx3QkFBSSxLQUFLekosS0FBTCxDQUFXMEosY0FBWCxDQUEwQmhJLE9BQU8wRyxTQUFqQyxFQUE0Q2pILElBQTVDLENBQWlEd0ksTUFBakQsSUFBMkQsS0FBSzNKLEtBQUwsQ0FBVzBKLGNBQVgsQ0FBMEJoSSxPQUFPMEcsU0FBakMsRUFBNENqSCxJQUE1QyxDQUFpRHdJLE1BQWpELENBQXdEOUYsTUFBbkgsSUFBNkgsQ0FBQyxLQUFLN0QsS0FBTCxDQUFXNEosZUFBN0ksRUFBOEo7O0FBRTFKLDZCQUFLdEosUUFBTCxDQUFjLEVBQUU4SCxXQUFXMUcsT0FBTzBHLFNBQXBCLEVBQWQsRUFBK0MsTUFBTTtBQUNqRCxpQ0FBS3BJLEtBQUwsQ0FBVzZKLGtCQUFYLENBQThCbkksT0FBTzBHLFNBQXJDLEVBQWdELEtBQUtwSSxLQUFMLENBQVcwSixjQUFYLENBQTBCaEksT0FBTzBHLFNBQWpDLENBQWhEO0FBRUgseUJBSEQ7QUFLSCxxQkFQRCxNQU9PO0FBQ0gsNEJBQUkwQixVQUFVLEVBQWQ7QUFDQUEsZ0NBQVF2Ryx1QkFBUixHQUFrQyxLQUFLdkQsS0FBTCxDQUFXMEosY0FBWCxDQUEwQmhJLE9BQU8wRyxTQUFqQyxFQUE0QzdFLHVCQUE5RTtBQUNBdUcsZ0NBQVFDLGNBQVIsR0FBeUIsS0FBSy9KLEtBQUwsQ0FBVzBKLGNBQVgsQ0FBMEJoSSxPQUFPMEcsU0FBakMsRUFBNEMyQixjQUFyRTtBQUNBLDZCQUFLekosUUFBTCxDQUFjLEVBQUU4SCxXQUFXMUcsT0FBTzBHLFNBQXBCLEVBQWQsRUFBK0MsTUFBTTtBQUNqRCxnQ0FBSTRCLE9BQU8sQ0FBWDtBQUNBLGdDQUFJLENBQUMsS0FBS2hLLEtBQUwsQ0FBVzRKLGVBQWhCLEVBQWlDO0FBQzdCSSx1Q0FBT3RJLE9BQU9zSSxJQUFQLElBQWUsQ0FBdEI7QUFDSDtBQUNELGlDQUFLaEssS0FBTCxDQUFXcUksV0FBWCxDQUF1QjNHLE9BQU8wRyxTQUE5QixFQUF5QzBCLE9BQXpDLEVBQWtERSxJQUFsRDtBQUNILHlCQU5EO0FBT0g7QUFFSjtBQUNKOztBQUVELGdCQUFJUCxXQUFKLEVBQWlCO0FBQ2I7QUFDQSxvQkFBSUssVUFBVSxFQUFkO0FBQ0FBLHdCQUFRdkcsdUJBQVIsR0FBa0MsS0FBS3ZELEtBQUwsQ0FBV2lLLHFCQUE3QztBQUNBSCx3QkFBUUMsY0FBUixHQUF5QixLQUFLL0osS0FBTCxDQUFXa0ssa0JBQXBDO0FBQ0Esb0JBQUk5QixZQUFZLEtBQUsrQixnQkFBTCxFQUFoQjtBQUNBLG9CQUFJcEosTUFBSixFQUFZO0FBQ1JBLDJCQUFPcUosUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNIO0FBQ0QscUJBQUs5SixRQUFMLENBQWMsRUFBRThILFdBQVdBLFNBQWIsRUFBZCxFQUF3QyxNQUFNO0FBQzFDO0FBQ0Esd0JBQUksS0FBS3BJLEtBQUwsQ0FBV3FLLHFCQUFYLElBQW9DLEtBQUtySyxLQUFMLENBQVdzSyxnQkFBWCxJQUErQixDQUF2RSxFQUEwRTtBQUN0RVIsZ0NBQVFDLGNBQVIsZ0JBQThCRCxRQUFRQyxjQUF0QztBQUNBRCxnQ0FBUUMsY0FBUixDQUF1QlEsVUFBdkIsR0FBb0MsSUFBcEM7QUFDSDtBQUNELHdCQUFJQyxVQUFVLEtBQUtDLFFBQUwsQ0FBYyxLQUFLekssS0FBbkIsQ0FBZDtBQUNBLHlCQUFLQSxLQUFMLENBQVd1QixPQUFYLENBQW1CbUosT0FBbkIsQ0FBMkJGLE9BQTNCO0FBQ0EseUJBQUt4SyxLQUFMLENBQVdxSSxXQUFYLENBQXVCRCxTQUF2QixFQUFrQzBCLE9BQWxDLEVBQTJDcEksT0FBT3NJLElBQVAsSUFBZSxDQUExRDtBQUNILGlCQVREO0FBV0g7O0FBR0QsZ0JBQUksS0FBS2hLLEtBQUwsQ0FBVzRKLGVBQWYsRUFBZ0M7QUFDNUI7QUFDQSxvQkFBSTdJLE1BQUosRUFBWTtBQUNSQSwyQkFBT3FKLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsWUFBSSxLQUFLbkssS0FBTCxDQUFXK0gsV0FBZixFQUE0QjtBQUN4QjtBQUNBLGdCQUFJZ0MsT0FBTyxDQUFYO0FBQ0EsZ0JBQUl0SSxVQUFVQSxPQUFPc0ksSUFBckIsRUFBMkI7QUFDdkJBLHVCQUFPdEksT0FBT3NJLElBQVAsSUFBZSxDQUF0QjtBQUNIO0FBQ0QsaUJBQUtoSyxLQUFMLENBQVcySyxhQUFYLENBQXlCLEtBQUszSyxLQUFMLENBQVdpSSxLQUFYLENBQWlCbkYsR0FBakIsQ0FBcUI4SCxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUF6QixFQUE2RFosSUFBN0QsRUFBbUVhLElBQW5FLENBQXlFL0MsVUFBRCxJQUFnQjtBQUNwRixvQkFBSUEsVUFBSixFQUFnQjtBQUNaLHlCQUFLeEgsUUFBTCxDQUFjLEVBQUV3SCxZQUFZQSxVQUFkLEVBQWQ7QUFDSDtBQUNKLGFBSkQ7QUFLSDtBQUNEO0FBQ0E7QUFDQTtBQUNIOztBQUVEMUgsOEJBQTBCSixLQUExQixFQUFpQztBQUM3QjtBQUNBLFlBQUlBLE1BQU1LLGdCQUFOLElBQTBCLEtBQUtMLEtBQUwsQ0FBV0ssZ0JBQXpDLEVBQTJEO0FBQ3ZELGdCQUFLLENBQUMsS0FBS0osS0FBTCxDQUFXMEksYUFBWCxJQUE0QixLQUFLMUksS0FBTCxDQUFXd0ksT0FBeEMsS0FBb0R6SSxNQUFNSyxnQkFBTixJQUEwQixLQUFLTCxLQUFMLENBQVdLLGdCQUE5RixFQUFpSDtBQUM3RyxvQkFBSWdKLFlBQVk7QUFDWmhKLHNDQUFrQkwsTUFBTUs7QUFEWixpQkFBaEI7QUFHQSxxQkFBS0wsS0FBTCxDQUFXc0osa0JBQVgsQ0FBOEJELFNBQTlCO0FBQ0EscUJBQUsvSSxRQUFMLENBQWMsRUFBRXFJLGVBQWUzSSxNQUFNSyxnQkFBTixDQUF1QkUsaUJBQXhDLEVBQWQ7QUFDSCxhQU5ELE1BTU8sSUFBSSxDQUFDUCxNQUFNUSxZQUFOLENBQW1CQyxRQUFuQixDQUE0QixLQUE1QixDQUFMLEVBQXlDO0FBQzVDO0FBQ0g7QUFDSjtBQUNEO0FBQ1E7QUFDUixZQUFHLEtBQUtSLEtBQUwsQ0FBV3dJLE9BQVgsSUFBc0IsQ0FBQyxLQUFLeEksS0FBTCxDQUFXMkksZ0JBQWxDLElBQXNELEtBQUtPLElBQUwsQ0FBVSxpQkFBVixDQUF0RCxJQUFzRixPQUFPcEksTUFBUCxLQUFrQixXQUEzRyxFQUF1SDtBQUNuSEEsbUJBQU9xSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLakMsYUFBdkM7QUFDQSxpQkFBSzdHLFFBQUwsQ0FBYyxFQUFDc0ksa0JBQWtCLElBQW5CLEVBQWQ7QUFDSDs7QUFFRDtBQUNBLFlBQUlSLFlBQVksRUFBaEI7QUFDQSxZQUFJNEIsT0FBTyxDQUFYO0FBQ0EsY0FBTXRJLFNBQVNoQyxZQUFZaUMsS0FBWixDQUFrQjNCLE1BQU1nQixRQUFOLENBQWVkLE1BQWpDLENBQWY7QUFDQSxZQUFJRixNQUFNZ0IsUUFBTixDQUFlZCxNQUFmLENBQXNCTyxRQUF0QixDQUErQixXQUEvQixDQUFKLEVBQWlEO0FBQzdDMkgsd0JBQVkxRyxPQUFPMEcsU0FBbkI7QUFDSCxTQUZELE1BRU8sSUFBSSxLQUFLbkksS0FBTCxDQUFXbUksU0FBZixFQUEwQjtBQUM3QkEsd0JBQVksS0FBS25JLEtBQUwsQ0FBV21JLFNBQXZCO0FBQ0g7QUFDRCxZQUFJMUcsT0FBT3NJLElBQVgsRUFBaUI7QUFDYkEsbUJBQU90SSxPQUFPc0ksSUFBUCxJQUFlLENBQXRCO0FBQ0g7O0FBRUQsWUFBSWhLLE1BQU13SixhQUFOLElBQXVCeEosTUFBTXdKLGFBQU4sSUFBdUIsS0FBS3hKLEtBQUwsQ0FBV3dKLGFBQTdELEVBQTRFO0FBQ3hFLGdCQUFJTSxVQUFVLEVBQWQ7QUFDQUEsb0JBQVF2Ryx1QkFBUixHQUFrQ3ZELE1BQU11RCx1QkFBeEM7QUFDQXVHLG9CQUFRQyxjQUFSLEdBQXlCL0osTUFBTStKLGNBQS9CO0FBQ0EsZ0JBQUkzQixTQUFKLEVBQWU7QUFDWCxxQkFBSzlILFFBQUwsQ0FBYyxFQUFFOEgsV0FBV0EsU0FBYixFQUFkLEVBQXdDLE1BQU07QUFDMUMsd0JBQUlvQyxVQUFVLEtBQUtDLFFBQUwsQ0FBY3pLLEtBQWQsQ0FBZDtBQUNBLHlCQUFLQSxLQUFMLENBQVd1QixPQUFYLENBQW1CbUosT0FBbkIsQ0FBMkJGLE9BQTNCO0FBQ0EseUJBQUt4SyxLQUFMLENBQVdxSSxXQUFYLENBQXVCRCxTQUF2QixFQUFrQzBCLE9BQWxDLEVBQTJDRSxJQUEzQztBQUNILGlCQUpEO0FBS0gsYUFORCxNQU1PO0FBQ0g1Qiw0QkFBWSxLQUFLK0IsZ0JBQUwsRUFBWjtBQUNBLHFCQUFLN0osUUFBTCxDQUFjLEVBQUU4SCxXQUFXQSxTQUFiLEVBQWQsRUFBd0MsTUFBTTtBQUMxQyx3QkFBSW9DLFVBQVUsS0FBS0MsUUFBTCxDQUFjekssS0FBZCxDQUFkO0FBQ0EseUJBQUtBLEtBQUwsQ0FBV3VCLE9BQVgsQ0FBbUJtSixPQUFuQixDQUEyQkYsT0FBM0I7QUFDQTtBQUNBLHdCQUFJeEssTUFBTXFLLHFCQUFOLElBQStCckssTUFBTXNLLGdCQUFOLElBQTBCLENBQTdELEVBQWdFO0FBQzVEUixnQ0FBUUMsY0FBUixnQkFBOEJELFFBQVFDLGNBQXRDO0FBQ0FELGdDQUFRQyxjQUFSLENBQXVCUSxVQUF2QixHQUFvQyxJQUFwQztBQUNIOztBQUVELHlCQUFLdkssS0FBTCxDQUFXcUksV0FBWCxDQUF1QkQsU0FBdkIsRUFBa0MwQixPQUFsQyxFQUEyQ0UsSUFBM0M7QUFDSCxpQkFWRDtBQVdIO0FBQ0QsZ0JBQUlqSixNQUFKLEVBQVk7QUFDUkEsdUJBQU9xSixRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7QUFFSjs7QUFFRCxZQUFJcEssTUFBTThLLFNBQU4sSUFBbUI5SyxNQUFNOEssU0FBTixJQUFtQixLQUFLOUssS0FBTCxDQUFXOEssU0FBakQsSUFBOEQsS0FBSzdLLEtBQUwsQ0FBV21JLFNBQTdFLEVBQXdGO0FBQ3BGLGdCQUFJcEksTUFBTTRKLGVBQU4sSUFBMEI1SixNQUFNNEosZUFBTixJQUF5QixLQUFLNUosS0FBTCxDQUFXNEosZUFBbEUsRUFBb0Y7QUFDaEYscUJBQUttQixhQUFMLENBQW1CL0ssS0FBbkI7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNELGlCQUFLeUssUUFBTCxDQUFjekssS0FBZDtBQUNILFNBUkQsTUFRTyxJQUFJQSxNQUFNNEosZUFBTixJQUEwQjVKLE1BQU00SixlQUFOLElBQXlCLEtBQUs1SixLQUFMLENBQVc0SixlQUFwQyxJQUF1RCxLQUFLM0osS0FBTCxDQUFXbUksU0FBaEcsRUFBNEc7QUFDL0csZ0JBQUksS0FBS25JLEtBQUwsQ0FBV3NJLGNBQVgsSUFBNkIsS0FBS3ZJLEtBQUwsQ0FBV3VELHVCQUF4QyxJQUFtRSxLQUFLdkQsS0FBTCxDQUFXdUQsdUJBQVgsQ0FBbUNNLE1BQTFHLEVBQWtIO0FBQzlHLHFCQUFLN0QsS0FBTCxDQUFXZ0wsNEJBQVgsQ0FBd0MsS0FBS2hMLEtBQUwsQ0FBV3VELHVCQUFYLENBQW1DLENBQW5DLENBQXhDO0FBQ0Esb0JBQUkwSCxjQUFjLEVBQWxCO0FBQUEsb0JBQXNCNUYsZ0JBQWdCLEVBQXRDO0FBQUEsb0JBQTBDdEMsY0FBYyxFQUF4RDtBQUNBLG9CQUFJOUMsUUFBUTtBQUNSOEosaURBQ08sS0FBSy9KLEtBQUwsQ0FBV2tLLGtCQURsQjtBQUVJZ0IsaUNBQVMsVUFGYjtBQUdJRCxtQ0FISixFQUdpQjVGLGFBSGpCLEVBR2dDdEM7QUFIaEMsc0JBRFE7QUFNUm1ILHFEQUNPLEtBQUtsSyxLQUFMLENBQVdrSyxrQkFEbEI7QUFFSWdCLGlDQUFTLFVBRmI7QUFHSUQsbUNBSEosRUFHaUI1RixhQUhqQixFQUdnQ3RDO0FBSGhDO0FBTlEsaUJBQVo7O0FBYUEscUJBQUsvQyxLQUFMLENBQVdtTCxhQUFYLENBQXlCbEwsS0FBekIsRUFBZ0MsSUFBaEM7O0FBRUEscUJBQUtELEtBQUwsQ0FBV3VCLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLEVBQUVQLFVBQVUsb0JBQVosRUFBeEI7QUFDSCxhQW5CRCxNQW1CTztBQUNILHFCQUFLWCxRQUFMLENBQWMsRUFBRStILGFBQWEsSUFBZixFQUFkO0FBQ0EscUJBQUswQyxhQUFMLENBQW1CL0ssS0FBbkI7QUFDSDtBQUNEO0FBQ0E7QUFDQTtBQUNILFNBM0JNLE1BMkJBLElBQUlBLE1BQU00SixlQUFOLElBQXlCLEtBQUszSixLQUFMLENBQVdtSSxTQUFYLElBQXdCQSxTQUFqRCxJQUE4RCxDQUFDLEtBQUtuSSxLQUFMLENBQVdvSSxXQUExRSxJQUF5RixLQUFLcEksS0FBTCxDQUFXbUksU0FBeEcsRUFBbUg7QUFDdEgsaUJBQUs5SCxRQUFMLENBQWMsRUFBRStILGFBQWEsSUFBZixFQUFkO0FBQ0EsaUJBQUswQyxhQUFMLENBQW1CL0ssS0FBbkI7QUFDQSxnQkFBSWUsTUFBSixFQUFZO0FBQ1JBLHVCQUFPcUosUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNIO0FBQ0osU0FOTSxNQU1BO0FBQ0g7QUFDQSxnQkFBSXBLLE1BQU1LLGdCQUFOLElBQTBCLEtBQUtMLEtBQUwsQ0FBV0ssZ0JBQXJDLElBQXlETCxNQUFNd0osYUFBbkUsRUFBa0Y7QUFDOUUsb0JBQUlnQixVQUFVLEtBQUtDLFFBQUwsQ0FBY3pLLEtBQWQsQ0FBZDtBQUNBLHFCQUFLQSxLQUFMLENBQVd1QixPQUFYLENBQW1CbUosT0FBbkIsQ0FBMkJGLE9BQTNCO0FBQ0g7QUFDSjtBQUNKOztBQUVEWSwyQkFBc0I7QUFDbEIsWUFBSSxPQUFPckssTUFBUCxLQUFrQixXQUFsQixJQUFpQyxLQUFLZCxLQUFMLENBQVcySSxnQkFBaEQsRUFBa0U7QUFDOUQ3SCxtQkFBT3NLLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtsRSxhQUExQztBQUNIO0FBQ0o7O0FBRURtRSwwQkFBc0I7QUFDbEIsYUFBS2hMLFFBQUwsQ0FBYyxFQUFFaUksZ0JBQWdCLElBQWxCLEVBQWQ7QUFDSDs7QUFFRDRCLHFCQUFpQm9CLFVBQWpCLEVBQTZCO0FBQ3pCO0FBQ0FBLHFCQUFhLHNDQUFiO0FBQ0EsWUFBSUMsS0FBSyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBVDtBQUNBLFlBQUlDLE9BQU9KLFdBQVdiLE9BQVgsQ0FBbUIsT0FBbkIsRUFBNEIsVUFBVWtCLENBQVYsRUFBYTtBQUNoRCxnQkFBSUMsSUFBSSxDQUFDTCxLQUFLMUcsS0FBS2dILE1BQUwsS0FBZ0IsRUFBdEIsSUFBNEIsRUFBNUIsR0FBaUMsQ0FBekM7QUFDQU4saUJBQUsxRyxLQUFLaUgsS0FBTCxDQUFXUCxLQUFLLEVBQWhCLENBQUw7QUFDQSxtQkFBTyxDQUFDSSxLQUFLLEdBQUwsR0FBV0MsQ0FBWCxHQUFnQkEsSUFBSSxHQUFKLEdBQVUsR0FBM0IsRUFBaUNHLFFBQWpDLENBQTBDLEVBQTFDLENBQVA7QUFDSCxTQUpVLENBQVg7QUFLQSxlQUFPTCxJQUFQO0FBQ0g7O0FBRURNLHFCQUFpQkMsR0FBakIsRUFBc0I7QUFDbEI7QUFDQSxjQUFNQyxjQUFjLEtBQUtuTSxLQUFMLENBQVdnQixRQUFYLENBQW9CZCxNQUF4QztBQUNBLGNBQU1rTSxTQUFTLElBQUlDLGVBQUosQ0FBb0JGLFdBQXBCLENBQWY7QUFDQSxlQUFPQyxPQUFPRSxHQUFQLENBQVdKLEdBQVgsQ0FBUDtBQUNIOztBQUVESyxpQkFBYUMsV0FBYixFQUEwQjtBQUN0QjtBQUNBO0FBQ0EsWUFBSSxPQUFPekwsTUFBUCxJQUFpQixRQUFyQixFQUErQjtBQUMzQkEsbUJBQU8wTCxlQUFQLEdBQXlCLEtBQXpCO0FBQ0g7QUFDRCxhQUFLQyxpQkFBTDtBQUNBLFlBQUloRCxpQkFBaUJpRCxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLNU0sS0FBTCxDQUFXMEosY0FBN0IsQ0FBckI7QUFDQSxjQUFNaEksU0FBU2hDLFlBQVlpQyxLQUFaLENBQWtCLEtBQUszQixLQUFMLENBQVdnQixRQUFYLENBQW9CZCxNQUF0QyxDQUFmOztBQUVBLFlBQUksS0FBS0YsS0FBTCxDQUFXMEosY0FBWCxJQUE2QixLQUFLekosS0FBTCxDQUFXbUksU0FBeEMsSUFBcUQsS0FBS3BJLEtBQUwsQ0FBVzBKLGNBQVgsQ0FBMEIsS0FBS3pKLEtBQUwsQ0FBV21JLFNBQXJDLENBQXpELEVBQTBHO0FBQ3RHc0IsMkJBQWUsS0FBS3pKLEtBQUwsQ0FBV21JLFNBQTFCLEVBQXFDMkIsY0FBckMsR0FBc0R5QyxXQUF0RDtBQUNBOUMsMkJBQWUsS0FBS3pKLEtBQUwsQ0FBV21JLFNBQTFCLEVBQXFDNEIsSUFBckMsR0FBNEMsQ0FBNUM7QUFDSDtBQUNELGFBQUtoSyxLQUFMLENBQVdtTCxhQUFYLENBQXlCLEVBQUVwQixnQkFBZ0J5QyxXQUFsQixFQUErQjlDLGdCQUFnQkEsY0FBL0MsRUFBK0RNLE1BQU0sQ0FBckUsRUFBekI7QUFDQTtBQUNBLFlBQUlqSixNQUFKLEVBQVk7QUFDUkEsbUJBQU9xSixRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7QUFDSjs7QUFFREssYUFBU3hLLEtBQVQsRUFBZ0I7QUFDWjtBQUNBLGNBQU15QixTQUFTaEMsWUFBWWlDLEtBQVosQ0FBa0IsS0FBSzNCLEtBQUwsQ0FBV2dCLFFBQVgsQ0FBb0JkLE1BQXRDLENBQWY7O0FBRUEsWUFBSSxFQUFFRyxnQkFBRixFQUFvQmtELHVCQUFwQixFQUE2Q3dHLGNBQTdDLEVBQTZEdkosWUFBN0QsRUFBMkV3SixJQUEzRSxLQUFvRi9KLEtBQXhGO0FBQ0EsWUFBSTRNLHNCQUFzQnRKLHdCQUF3QkMsTUFBeEIsQ0FBK0JDLEtBQUtBLEVBQUVDLElBQUYsSUFBVSxZQUE5QyxFQUE0REMsR0FBNUQsQ0FBZ0VGLEtBQUtBLEVBQUVaLEVBQXZFLENBQTFCO0FBQ0EsWUFBSXFDLGdCQUFnQjNCLHdCQUF3QkMsTUFBeEIsQ0FBK0JDLEtBQUtBLEVBQUVDLElBQUYsSUFBVSxXQUE5QyxFQUEyREMsR0FBM0QsQ0FBK0RGLEtBQUtBLEVBQUVaLEVBQXRFLENBQXBCO0FBQ0EsWUFBSWlLLGlCQUFpQnZKLHdCQUF3QkMsTUFBeEIsQ0FBK0JDLEtBQUtBLEVBQUVDLElBQUYsSUFBVSxZQUE5QyxFQUE0REMsR0FBNUQsQ0FBZ0VGLEtBQUtBLEVBQUVaLEVBQXZFLENBQXJCO0FBQ0EsWUFBSVMsZUFBZUMsd0JBQXdCQyxNQUF4QixDQUErQkMsS0FBS0EsRUFBRUMsSUFBRixJQUFVLHFCQUE5QyxFQUFxRUMsR0FBckUsQ0FBeUVGLEtBQUtBLEVBQUVaLEVBQWhGLENBQW5COztBQUVBLFlBQUlrSyxVQUFVeEosd0JBQXdCQyxNQUF4QixDQUErQkMsS0FBS0EsRUFBRUMsSUFBRixJQUFVLEtBQTlDLEVBQXFEQyxHQUFyRCxDQUF5REYsS0FBS0EsRUFBRVosRUFBaEUsQ0FBZDs7QUFFQSxZQUFJbUssWUFBWXpKLHdCQUF3QkMsTUFBeEIsQ0FBK0JDLEtBQUtBLEVBQUVDLElBQUYsSUFBVSxXQUE5QyxFQUEyREMsR0FBM0QsQ0FBK0RGLEtBQUtBLEVBQUVaLEVBQXRFLENBQWhCOztBQUVBLFlBQUlqQixNQUFNLFNBQVY7QUFDQSxZQUFJQyxPQUFPLFNBQVg7QUFDQSxZQUFJb0wsV0FBVyxFQUFmO0FBQ0EsWUFBSUMsV0FBVyxPQUFmO0FBQ0EsWUFBSUMsZUFBZSxFQUFuQjs7QUFFQSxZQUFJOU0sZ0JBQUosRUFBc0I7QUFDbEI0TSx1QkFBVzVNLGlCQUFpQjRNLFFBQWpCLElBQTZCLEVBQXhDO0FBQ0FyTCxrQkFBTXZCLGlCQUFpQitNLFFBQWpCLENBQTBCcE0sUUFBMUIsQ0FBbUNZLEdBQXpDO0FBQ0FDLG1CQUFPeEIsaUJBQWlCK00sUUFBakIsQ0FBMEJwTSxRQUExQixDQUFtQ3FNLEdBQTFDO0FBQ0EsZ0JBQUksT0FBT3pMLEdBQVAsS0FBZSxVQUFuQixFQUErQkEsTUFBTUEsS0FBTjtBQUMvQixnQkFBSSxPQUFPQyxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDQSxPQUFPQSxNQUFQOztBQUVoQ0Qsa0JBQU0wTCxXQUFXQSxXQUFXMUwsR0FBWCxFQUFnQm9ELE9BQWhCLENBQXdCLENBQXhCLENBQVgsQ0FBTjtBQUNBbkQsbUJBQU95TCxXQUFXQSxXQUFXekwsSUFBWCxFQUFpQm1ELE9BQWpCLENBQXlCLENBQXpCLENBQVgsQ0FBUDs7QUFFQWtJLHVCQUFXN00saUJBQWlCNk0sUUFBakIsSUFBNkIsRUFBeEM7QUFDQUMsMkJBQWU5TSxpQkFBaUI4TSxZQUFqQixJQUFpQyxFQUFoRDtBQUNIO0FBQ0Q7Ozs7Ozs7Ozs7QUFVQSxZQUFJakMsVUFBVW5CLGVBQWVtQixPQUFmLElBQTBCLEVBQXhDO0FBQ0EsWUFBSXFDLGFBQWF4RCxlQUFld0QsVUFBZixJQUE2QixFQUE5QztBQUNBLFlBQUlDLGVBQWV6RCxlQUFleUQsWUFBZixJQUErQixFQUFsRDtBQUNBLFlBQUlDLGNBQWMxRCxlQUFlMEQsV0FBZixJQUE4QixFQUFoRDtBQUNBLFlBQUlDLFNBQVMzRCxlQUFlMkQsTUFBZixJQUF5QixFQUF0QztBQUNBLFlBQUlDLG1CQUFtQjVELGVBQWU0RCxnQkFBdEM7QUFDQSxZQUFJQyxpQkFBaUI3RCxlQUFlNkQsY0FBcEM7O0FBR0EsWUFBSXZJLGdCQUFnQjBFLGVBQWUxRSxhQUFmLElBQWdDLEVBQXBEO0FBQ0EsWUFBSTRGLGNBQWNsQixlQUFla0IsV0FBZixJQUE4QixFQUFoRDtBQUNBLFlBQUlsSSxjQUFjZ0gsZUFBZWhILFdBQWYsSUFBOEIsRUFBaEQ7QUFDQSxZQUFJd0gsYUFBYVIsZUFBZVEsVUFBZixJQUE2QixLQUE5QztBQUNBLFlBQUlzRCw0QkFBNEI5RCxlQUFlOEQseUJBQWYsSUFBNEMsRUFBNUU7O0FBR0EsWUFBSS9LLE1BQU0sRUFBVjs7QUFFQTtBQUNBLFlBQUlnTCxvQkFBb0IsS0FBeEI7O0FBRUEsWUFBSTVDLE9BQUosRUFBYTtBQUNUNEMsZ0NBQW9CLElBQXBCO0FBQ0g7QUFDRCxZQUFJTixnQkFBZ0JBLGFBQWEzSixNQUFqQyxFQUF5QztBQUNyQ2lLLGdDQUFvQixJQUFwQjtBQUNIOztBQUVELFlBQUlMLGVBQWVBLFlBQVk1SixNQUEvQixFQUF1QztBQUNuQ2lLLGdDQUFvQixJQUFwQjtBQUNIOztBQUVELFlBQUlKLE1BQUosRUFBWTtBQUNSSSxnQ0FBb0IsSUFBcEI7QUFDSDtBQUNELFlBQUl6SSxhQUFKLEVBQW1CO0FBQ2Z5SSxnQ0FBb0IsSUFBcEI7QUFDSDtBQUNELFlBQUk3QyxXQUFKLEVBQWlCO0FBQ2I2QyxnQ0FBb0IsSUFBcEI7QUFDSDtBQUNELFlBQUkvSyxXQUFKLEVBQWlCO0FBQ2IrSyxnQ0FBb0IsSUFBcEI7QUFDSDs7QUFFRCxZQUFJRCw2QkFBNkJBLDBCQUEwQmhLLE1BQTNELEVBQW1FO0FBQy9EaUssZ0NBQW9CLElBQXBCO0FBQ0g7O0FBRUQsWUFBSXBNLFVBQVVBLE9BQU8rRyxPQUFyQixFQUE4QjtBQUMxQnFGLGdDQUFvQixJQUFwQjtBQUNIOztBQUVELFlBQUdwTSxVQUFVQSxPQUFPZ0gsV0FBcEIsRUFBaUM7QUFDN0JvRixnQ0FBb0IsSUFBcEI7QUFDSDs7QUFFRCxZQUFJQyxrQkFBa0IsS0FBdEI7QUFDQWpMLGNBQU8sR0FBRS9CLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQVMsRUFBbEM7O0FBRUEsWUFBSStJLE9BQU8sQ0FBWCxFQUFjO0FBQ1ZsSCxtQkFBUSxTQUFRa0gsSUFBSyxFQUFyQjtBQUNBK0QsOEJBQWtCLElBQWxCO0FBQ0g7O0FBRURqTCxlQUFPLEdBQUVpTCxrQkFBa0IsR0FBbEIsR0FBd0IsR0FBSSxhQUFZLEtBQUs5TixLQUFMLENBQVdtSSxTQUFVLEVBQXRFO0FBQ0EyRiwwQkFBa0IsSUFBbEI7QUFDQSxZQUFJRCxxQkFBcUIsQ0FBQyxLQUFLN04sS0FBTCxDQUFXK0gsV0FBckMsRUFBa0Q7O0FBRTlDbEYsbUJBQVEsb0JBQW1CK0osbUJBQW9CLGVBQWMzSCxhQUFjLFFBQU90RCxHQUFJLFNBQVFDLElBQUssWUFBV3FKLE9BQVEsZUFBY3FDLFVBQVcsaUJBQWdCQyxZQUFhLFdBQVVFLE1BQU8sZ0JBQWVELFdBQVksZ0JBQWV4QyxlQUFlLEVBQUcsa0JBQWlCNUYsaUJBQWlCLEVBQUcsYUFBWTRILFFBQVMsaUJBQWdCek0sZ0JBQWdCLEVBQUcsa0JBQWlCc00sa0JBQWtCLEVBQUcsMkJBQTBCeEosZ0JBQWdCLEVBQUcsZ0JBQWVQLFdBQVksbUJBQWtCZ0ssV0FBVyxFQUFHLGVBQWN4QyxVQUFXLGFBQVkyQyxRQUFTLGlCQUFnQkMsWUFBYSxxQkFBb0JRLGdCQUFpQixtQkFBa0JDLGNBQWUsY0FBYVosU0FBVSw4QkFBNkJhLHlCQUEwQixFQUFuc0I7O0FBRUEsZ0JBQUduTSxVQUFVQSxPQUFPK0csT0FBcEIsRUFBNEI7QUFDeEIzRix1QkFBTyxZQUFXcEIsT0FBTytHLE9BQVAsSUFBa0IsRUFBRyxFQUF2QztBQUNIOztBQUVELGdCQUFJL0csVUFBVUEsT0FBT3NNLFFBQXJCLEVBQStCO0FBQzNCbEwsdUJBQVEsYUFBWXBCLE9BQU9zTSxRQUFQLElBQW1CLEVBQUcsRUFBMUM7QUFDSDs7QUFFRCxnQkFBR3RNLFVBQVVBLE9BQU9nSCxXQUFwQixFQUFpQztBQUM3QjVGLHVCQUFRLGdCQUFlcEIsT0FBT2dILFdBQVAsSUFBc0IsRUFBRyxFQUFoRDtBQUNIOztBQUVEcUYsOEJBQWtCLElBQWxCO0FBRUgsU0FoSVcsQ0FnSVg7Ozs7QUFLRCxZQUFHck0sT0FBT3VNLFVBQVYsRUFBc0I7QUFDbEJuTCxtQkFBTyxlQUFjcEIsT0FBT3VNLFVBQVAsSUFBbUIsRUFBRyxFQUEzQztBQUNIOztBQUVELFlBQUd2TSxPQUFPd00sVUFBVixFQUFzQjtBQUNsQnBMLG1CQUFPLGVBQWNwQixPQUFPd00sVUFBUCxJQUFtQixFQUFHLEVBQTNDO0FBQ0g7O0FBRUQsWUFBR3hNLE9BQU95TSxZQUFWLEVBQXdCO0FBQ3BCckwsbUJBQU8saUJBQWdCcEIsT0FBT3lNLFlBQVAsSUFBcUIsRUFBRyxFQUEvQztBQUNIOztBQUVELFlBQUksS0FBS2xPLEtBQUwsQ0FBV2lJLFdBQWYsRUFBNEI7QUFDeEJwRixtQkFBUSxHQUFFaUwsa0JBQWtCLEdBQWxCLEdBQXdCLEdBQUksa0JBQXRDO0FBQ0FBLDhCQUFrQixJQUFsQjtBQUNIOztBQUVELFlBQUlyTSxPQUFPME0sWUFBWCxFQUF5QjtBQUNyQnRMLG1CQUFRLEdBQUVpTCxrQkFBa0IsR0FBbEIsR0FBd0IsR0FBSSxnQkFBZXJNLE9BQU8wTSxZQUFhLEVBQXpFO0FBQ0FMLDhCQUFrQixJQUFsQjtBQUNIOztBQUVELFlBQUlyTSxPQUFPMk0sU0FBWCxFQUFzQjtBQUNsQnZMLG1CQUFRLEdBQUVpTCxrQkFBa0IsR0FBbEIsR0FBd0IsR0FBSSxhQUFZck0sT0FBTzJNLFNBQVUsRUFBbkU7QUFDQU4sOEJBQWtCLElBQWxCO0FBQ0g7O0FBRUQsWUFBRyxLQUFLOU4sS0FBTCxDQUFXNEksZUFBZCxFQUE4QjtBQUMxQi9GLG1CQUFRLEdBQUUsaUJBQWdCLEtBQUs3QyxLQUFMLENBQVc0SSxlQUFnQixFQUFyRDtBQUNIOztBQUVELGVBQU8vRixHQUFQO0FBQ0g7O0FBRURpSSxrQkFBYzlLLFFBQVEsSUFBdEIsRUFBNEIrSixPQUFPLElBQW5DLEVBQXlDc0UsS0FBSyxJQUE5QyxFQUFvRDtBQUNoRDtBQUNBLFlBQUlyRixZQUFZLElBQWhCO0FBQ0EsWUFBSSxLQUFLakosS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCckMsUUFBckIsQ0FBOEIsU0FBOUIsS0FBNEMsS0FBS1QsS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCckMsUUFBckIsQ0FBOEIsWUFBOUIsQ0FBNUMsSUFBMkYsS0FBS1QsS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCckMsUUFBckIsQ0FBOEIsUUFBOUIsQ0FBL0YsRUFBd0k7QUFDcEl3SSx3QkFBWSxLQUFLakosS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCb0csV0FBckIsRUFBWjtBQUNIO0FBQ0QsWUFBSWMsU0FBUyxJQUFiLEVBQW1CO0FBQ2ZBLG1CQUFPLEtBQUtoSyxLQUFMLENBQVdnSyxJQUFsQjtBQUNIO0FBQ0QsWUFBSSxDQUFDL0osS0FBTCxFQUFZO0FBQ1JBLG9CQUFRLEtBQUtELEtBQWI7QUFDSCxTQUZELE1BRU8sSUFBSUMsTUFBTStKLElBQVYsRUFBZ0I7QUFDbkJBLG1CQUFPL0osTUFBTStKLElBQWI7QUFDSDtBQUNELGFBQUtoSyxLQUFMLENBQVd1TyxVQUFYLENBQXNCdE8sS0FBdEIsRUFBNkIrSixJQUE3QixFQUFtQyxLQUFuQyxFQUEwQ2YsU0FBMUMsRUFBcUQsQ0FBQyxHQUFHdUYsSUFBSixLQUFhO0FBQzlEO0FBQ0EsZ0JBQUlGLEVBQUosRUFBUTtBQUNKQSxtQkFBRyxHQUFHRSxJQUFOO0FBQ0Esb0JBQUloRSxVQUFVLEtBQUtDLFFBQUwsQ0FBY3hLLEtBQWQsQ0FBZDtBQUNBLHFCQUFLRCxLQUFMLENBQVd1QixPQUFYLENBQW1CbUosT0FBbkIsQ0FBMkJGLE9BQTNCO0FBQ0gsYUFKRCxNQUlPO0FBQ0gsb0JBQUlBLFVBQVUsS0FBS0MsUUFBTCxDQUFjeEssS0FBZCxDQUFkO0FBQ0EscUJBQUtELEtBQUwsQ0FBV3VCLE9BQVgsQ0FBbUJtSixPQUFuQixDQUEyQkYsT0FBM0I7QUFDSDtBQUNKLFNBVkQsRUFVRyxLQUFLdkssS0FBTCxDQUFXaUksV0FWZCxFQVUyQnVHLEtBVjNCLENBVWtDekwsQ0FBRCxJQUFPO0FBQ3BDLGlCQUFLMUMsUUFBTCxDQUFjLEVBQUU2SCxXQUFXLElBQWIsRUFBZDtBQUNILFNBWkQ7QUFhSDs7QUFFRHVHLG9CQUFnQjdHLE9BQWhCLEVBQXlCO0FBQ3JCLFlBQUk4RyxRQUFRLEVBQVo7QUFDQSxZQUFJQyxjQUFjLEVBQWxCO0FBQ0EsWUFBSSxLQUFLNU8sS0FBTCxDQUFXdUQsdUJBQVgsSUFBc0MsS0FBS3ZELEtBQUwsQ0FBV3VELHVCQUFYLENBQW1DTSxNQUE3RSxFQUFxRjtBQUNqRjhLLG9CQUFTLEdBQUUsS0FBSzNPLEtBQUwsQ0FBV3VELHVCQUFYLENBQW1DLENBQW5DLEVBQXNDYSxJQUFLLGdCQUFlLEtBQUtwRSxLQUFMLENBQVd1RCx1QkFBWCxDQUFtQyxDQUFuQyxFQUFzQ2EsSUFBSyxtQkFBaEg7QUFDQXdLLDBCQUFlLEdBQUUsS0FBSzVPLEtBQUwsQ0FBV3VELHVCQUFYLENBQW1DLENBQW5DLEVBQXNDYSxJQUFLLG9DQUFtQyxLQUFLcEUsS0FBTCxDQUFXdUQsdUJBQVgsQ0FBbUMsQ0FBbkMsRUFBc0NhLElBQUssOEZBQTFJO0FBQ0g7QUFDRCxZQUFJeUssU0FBUyxFQUFiO0FBQ0EsWUFBSWhILE9BQUosRUFBYTtBQUNUOEcsb0JBQVE5RyxRQUFROEcsS0FBUixJQUFpQkEsS0FBekI7QUFDQUMsMEJBQWMvRyxRQUFRK0csV0FBUixJQUF1QkEsV0FBckM7QUFDQUMscUJBQVNoSCxRQUFRZ0gsTUFBUixJQUFrQkEsTUFBM0I7QUFDSDtBQUNELFlBQUlDLFNBQVMsS0FBSzlPLEtBQUwsQ0FBV2dLLElBQXBCLEtBQTZCLENBQWpDLEVBQW9DO0FBQ2hDMkUsb0JBQVEsVUFBVSxLQUFLM08sS0FBTCxDQUFXZ0ssSUFBckIsR0FBNEIsS0FBNUIsR0FBb0MyRSxLQUE1QztBQUNIO0FBQ0QsZUFBTyxFQUFFQSxLQUFGLEVBQVNDLFdBQVQsRUFBc0JDLE1BQXRCLEVBQVA7QUFDSDs7QUFFRG5DLHdCQUFvQjtBQUNoQixhQUFLcE0sUUFBTCxDQUFjLEVBQUVnSSxhQUFhLEVBQWYsRUFBZDtBQUNIOztBQUVEeUcscUJBQWlCdkwsTUFBakIsRUFBeUI7QUFDckIsYUFBS2xELFFBQUwsQ0FBYyxFQUFFZ0ksYUFBYTlFLE1BQWYsRUFBZDtBQUNIOztBQUVEd0wsb0JBQWdCakYsY0FBaEIsRUFBZ0M7QUFDNUI7QUFDQSxZQUFJK0Qsb0JBQW9CLEtBQXhCO0FBQ0EsWUFBSS9ELGNBQUosRUFBb0I7QUFDaEIsZ0JBQUltQixVQUFVbkIsZUFBZW1CLE9BQWYsSUFBMEIsRUFBeEM7QUFDQSxnQkFBSXFDLGFBQWF4RCxlQUFld0QsVUFBZixJQUE2QixFQUE5QztBQUNBLGdCQUFJQyxlQUFlekQsZUFBZXlELFlBQWYsSUFBK0IsRUFBbEQ7QUFDQSxnQkFBSUMsY0FBYzFELGVBQWUwRCxXQUFmLElBQThCLEVBQWhEO0FBQ0EsZ0JBQUlDLFNBQVMzRCxlQUFlMkQsTUFBZixJQUF5QixFQUF0QztBQUNBLGdCQUFJQyxtQkFBbUI1RCxlQUFlNEQsZ0JBQXRDO0FBQ0EsZ0JBQUlDLGlCQUFpQjdELGVBQWU2RCxjQUFwQzs7QUFHQSxnQkFBSXZJLGdCQUFnQjBFLGVBQWUxRSxhQUFmLElBQWdDLEVBQXBEO0FBQ0EsZ0JBQUk0RixjQUFjbEIsZUFBZWtCLFdBQWYsSUFBOEIsRUFBaEQ7QUFDQSxnQkFBSWxJLGNBQWNnSCxlQUFlaEgsV0FBZixJQUE4QixFQUFoRDtBQUNBLGdCQUFJd0gsYUFBYVIsZUFBZVEsVUFBZixJQUE2QixLQUE5Qzs7QUFFQSxnQkFBSVcsT0FBSixFQUFhO0FBQ1Q0QyxvQ0FBb0IsSUFBcEI7QUFDSDtBQUNELGdCQUFJTixnQkFBZ0JBLGFBQWEzSixNQUFqQyxFQUF5QztBQUNyQ2lLLG9DQUFvQixJQUFwQjtBQUNIOztBQUVELGdCQUFJTCxlQUFlQSxZQUFZNUosTUFBL0IsRUFBdUM7QUFDbkNpSyxvQ0FBb0IsSUFBcEI7QUFDSDs7QUFFRCxnQkFBSUosTUFBSixFQUFZO0FBQ1JJLG9DQUFvQixJQUFwQjtBQUNIO0FBQ0o7O0FBRUQsZUFBT0EsaUJBQVA7QUFDSDs7QUFFRG1CLCtCQUEyQkMsVUFBM0IsRUFBdUNDLFNBQXZDLEVBQWtEO0FBQzlDO0FBQ0EsWUFBSXBPLE1BQUosRUFBWTtBQUNSQSxtQkFBT3FKLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSDtBQUNELFlBQUlnRixpQkFBaUIsRUFBckI7QUFDQSxZQUFJQyxjQUFjLEVBQWxCO0FBQ0EsWUFBSUYsU0FBSixFQUFlO0FBQ1hELHVCQUFXdkwsR0FBWCxDQUFlLENBQUMyTCxJQUFELEVBQU9uTCxDQUFQLEtBQWE7QUFDeEJrTCw0QkFBWTdOLElBQVosQ0FBaUIsRUFBRXFCLElBQUl5TSxLQUFLQyxpQkFBWCxFQUE4QjdMLE1BQU0sWUFBcEMsRUFBakI7QUFDSCxhQUZEOztBQUlBLGdCQUFJekQsUUFBUSxFQUFaO0FBQ0EsZ0JBQUk4QyxjQUFjLEVBQWxCO0FBQ0EsZ0JBQUlrSSxjQUFjLEVBQWxCO0FBQ0EsZ0JBQUk1RixnQkFBZ0IsRUFBcEI7QUFDQSxnQkFBSWdLLFlBQVl4TCxNQUFoQixFQUF3QjtBQUNwQixxQkFBSzdELEtBQUwsQ0FBV2dMLDRCQUFYLENBQXdDcUUsV0FBeEM7QUFDSDs7QUFFRHBQLG9CQUFRO0FBQ0o4Siw2Q0FDTyxLQUFLL0osS0FBTCxDQUFXK0osY0FEbEI7QUFFSWhILCtCQUZKLEVBRWlCa0ksV0FGakIsRUFFOEI1RjtBQUY5QixrQkFESTtBQUtKNkUsaURBQ08sS0FBS2xLLEtBQUwsQ0FBVytKLGNBRGxCO0FBRUloSCwrQkFGSixFQUVpQmtJLFdBRmpCLEVBRThCNUY7QUFGOUI7QUFMSSxhQUFSO0FBVUEsZ0JBQUlsRSxPQUFPO0FBQ1AsNEJBQVksYUFETCxFQUNvQixVQUFVLCtCQUQ5QixFQUMrRCxjQUFjQyxjQUFJQyxTQUFKLE1BQW1CLEVBRGhHLEVBQ29HLFVBQVUsQ0FEOUcsRUFDaUgsU0FBUztBQUQxSCxhQUFYO0FBR0FELDBCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTUEsSUFBUixFQUFkO0FBQ0EsaUJBQUtuQixLQUFMLENBQVdtTCxhQUFYLENBQXlCbEwsS0FBekI7QUFDQSxpQkFBS0QsS0FBTCxDQUFXdUIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBeUIsb0JBQXpCO0FBQ0gsU0E3QkQsTUE2Qk87QUFDSDROLDJCQUFlMUwsSUFBZixHQUFzQixZQUF0QjtBQUNBMEwsMkJBQWVoTCxJQUFmLEdBQXNCOEssV0FBV00sbUJBQWpDO0FBQ0FKLDJCQUFldk0sRUFBZixHQUFvQnFNLFdBQVdLLGlCQUEvQjtBQUNBLGlCQUFLdlAsS0FBTCxDQUFXeVAsaUJBQVgsQ0FBNkIsWUFBN0IsRUFBMkNMLGNBQTNDLEVBQTJELElBQTNEO0FBQ0FNLHVCQUFXLE1BQU07QUFDYixxQkFBSzFQLEtBQUwsQ0FBV3VCLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLG9CQUF4QjtBQUNILGFBRkQsRUFFRyxHQUZIO0FBR0EsZ0JBQUlMLE9BQU87QUFDUCw0QkFBWSxhQURMLEVBQ29CLFVBQVUsd0JBRDlCLEVBQ3dELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEekYsRUFDNkYsVUFBVSxDQUR2RyxFQUMwRyxTQUFTO0FBRG5ILGFBQVg7QUFHQUQsMEJBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNQSxJQUFSLEVBQWQ7QUFDSDtBQUNKOztBQUVEd08sMEJBQXNCQyxJQUF0QixFQUE0QjtBQUFDOzs7Ozs7O0FBT3pCO0FBQ0EsWUFBSUMsWUFBWSxFQUFoQjtBQUNBLGFBQUssSUFBSTFMLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLbkUsS0FBTCxDQUFXOFAsdUJBQVgsQ0FBbUNqTSxNQUF2RCxFQUErRE0sR0FBL0QsRUFBb0U7QUFDaEUsZ0JBQUl5TCxRQUFRekwsSUFBSSxDQUFKLElBQVMsQ0FBckIsRUFBd0I7QUFDcEIwTCwwQkFBVXJPLElBQVYsQ0FBZTtBQUFBO0FBQUEsc0JBQU0sSUFBSSxLQUFLeEIsS0FBTCxDQUFXOFAsdUJBQVgsQ0FBbUMzTCxDQUFuQyxFQUFzQ29MLGlCQUFoRCxFQUFtRSxTQUFTLEtBQUtOLDBCQUFMLENBQWdDN00sSUFBaEMsQ0FBcUMsSUFBckMsRUFBMkMsS0FBS3BDLEtBQUwsQ0FBVzhQLHVCQUFYLENBQW1DM0wsQ0FBbkMsQ0FBM0MsRUFBa0YsS0FBbEYsQ0FBNUU7QUFDVix5QkFBS25FLEtBQUwsQ0FBVzhQLHVCQUFYLENBQW1DM0wsQ0FBbkMsRUFBc0NxTDtBQUQ1QixpQkFBZjtBQUdIO0FBQ0QsZ0JBQUksQ0FBQ0ksSUFBRCxJQUFTekwsSUFBSSxDQUFKLElBQVMsQ0FBdEIsRUFBeUI7QUFDckIwTCwwQkFBVXJPLElBQVYsQ0FBZTtBQUFBO0FBQUEsc0JBQU0sSUFBSSxLQUFLeEIsS0FBTCxDQUFXOFAsdUJBQVgsQ0FBbUMzTCxDQUFuQyxFQUFzQ29MLGlCQUFoRCxFQUFtRSxTQUFTLEtBQUtOLDBCQUFMLENBQWdDN00sSUFBaEMsQ0FBcUMsSUFBckMsRUFBMkMsS0FBS3BDLEtBQUwsQ0FBVzhQLHVCQUFYLENBQW1DM0wsQ0FBbkMsQ0FBM0MsRUFBa0YsS0FBbEYsQ0FBNUU7QUFDVix5QkFBS25FLEtBQUwsQ0FBVzhQLHVCQUFYLENBQW1DM0wsQ0FBbkMsRUFBc0NxTDtBQUQ1QixpQkFBZjtBQUdIO0FBRUo7QUFDRCxlQUFPSyxTQUFQO0FBQ0g7O0FBRURFLGdDQUE0QjtBQUN4QixZQUFJNU8sT0FBUTtBQUFBO0FBQUEsY0FBSyxXQUFVLHFDQUFmO0FBQ1I7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQU0sV0FBVSx5QkFBaEIsRUFBMEMsU0FBUyxLQUFLOE4sMEJBQUwsQ0FBZ0M3TSxJQUFoQyxDQUFxQyxJQUFyQyxFQUEyQyxLQUFLcEMsS0FBTCxDQUFXOFAsdUJBQXRELEVBQStFLElBQS9FLENBQW5EO0FBQUE7QUFBQTtBQUZKLGFBRFE7QUFLUjtBQUFBO0FBQUEsa0JBQUssV0FBVSxtQkFBZjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLG9CQUFmO0FBQ0sseUJBQUtILHFCQUFMLENBQTJCLElBQTNCO0FBREwsaUJBREo7QUFJSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxvQkFBZjtBQUNLLHlCQUFLQSxxQkFBTCxDQUEyQixLQUEzQjtBQURMO0FBSko7QUFMUSxTQUFaO0FBY0EsZUFBT3hPLElBQVA7QUFDSDs7QUFFRDZPLHdCQUFvQjtBQUNoQjtBQUNBLFlBQUksS0FBS0MsS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBV0QsaUJBQTdCLEVBQWdEO0FBQzVDLGlCQUFLQyxLQUFMLENBQVdELGlCQUFYO0FBQ0g7QUFDSjs7QUFFREUsd0JBQW9CQyxNQUFNLEtBQTFCLEVBQWlDaFAsSUFBakMsRUFBdUM7QUFDbkMsWUFBSWlQLFVBQVUsRUFBZDtBQUNBLFlBQUlELEdBQUosRUFBUztBQUNMQyxzQkFBVTtBQUNOLDRCQUFZLGFBRE4sRUFDcUIsVUFBVSwwQkFEL0IsRUFDMkQsY0FBY2hQLGNBQUlDLFNBQUosTUFBbUIsRUFENUYsRUFDZ0csVUFBVSxDQUQxRyxFQUM2RyxTQUFTO0FBRHRILGFBQVY7QUFJSCxTQUxELE1BS087QUFDSCtPLHNCQUFVO0FBQ04sNEJBQVksYUFETixFQUNxQixVQUFVLHFCQUQvQixFQUNzRCxjQUFjaFAsY0FBSUMsU0FBSixNQUFtQixFQUR2RixFQUMyRixVQUFVLENBRHJHLEVBQ3dHLFNBQVM7QUFEakgsYUFBVjtBQUdIO0FBQ0RELHNCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTWlQLE9BQVIsRUFBZDtBQUNBLFlBQUlDLGNBQWMsRUFBbEI7O0FBRUEsWUFBSWxQLEtBQUsyQixHQUFULEVBQWM7QUFDVnVOLDBCQUFlLElBQUdsUCxLQUFLMkIsR0FBSSxpQkFBM0I7QUFDSCxTQUZELE1BRU87QUFDSHVOLDBCQUFlLGlCQUFnQmxQLEtBQUswQixFQUFHLGlCQUF2QztBQUNIO0FBQ0QsYUFBSzdDLEtBQUwsQ0FBV3VCLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCNk8sV0FBeEI7QUFDSDs7QUFFREMsMEJBQXFCO0FBQ2pCLFlBQUlGLFVBQVU7QUFDVix3QkFBWSxhQURGLEVBQ2lCLFVBQVUsNEJBRDNCLEVBQ3lELGNBQWNoUCxjQUFJQyxTQUFKLE1BQW1CLEVBRDFGLEVBQzhGLFVBQVUsQ0FEeEcsRUFDMkcsU0FBUztBQURwSCxTQUFkO0FBR0FELHNCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTWlQLE9BQVIsRUFBZDtBQUNBLGFBQUtwUSxLQUFMLENBQVd1QixPQUFYLENBQW1CQyxJQUFuQixDQUF3QixTQUF4QjtBQUNIOztBQUVEK08sNkJBQXdCO0FBQ3BCLFlBQUlILFVBQVU7QUFDVix3QkFBWSxhQURGLEVBQ2lCLFVBQVUsb0NBRDNCLEVBQ2lFLGNBQWNoUCxjQUFJQyxTQUFKLE1BQW1CLEVBRGxHLEVBQ3NHLFVBQVUsQ0FEaEgsRUFDbUgsU0FBUztBQUQ1SCxTQUFkO0FBR0FELHNCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTWlQLE9BQVIsRUFBZDtBQUNBLGFBQUtwUSxLQUFMLENBQVd3USxnQkFBWCxDQUE0QjtBQUN4QmpOLHFDQUF5QixFQUREO0FBRXhCMEcsbUNBQXVCO0FBRkMsU0FBNUI7QUFJQSxhQUFLakssS0FBTCxDQUFXdUIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBeUIsc0JBQXpCO0FBQ0g7O0FBRURpUCxnQkFBWUMsWUFBWixFQUF5QjtBQUNyQixjQUFNaFAsU0FBU2hDLFlBQVlpQyxLQUFaLENBQWtCLEtBQUszQixLQUFMLENBQVdnQixRQUFYLENBQW9CZCxNQUF0QyxDQUFmO0FBQ0EsWUFBSXlRLGNBQWMsS0FBS0MsaUJBQUwsQ0FBdUIsS0FBSzVRLEtBQUwsQ0FBV3VELHVCQUFsQyxDQUFsQjtBQUNBLFlBQUlwQyxPQUFPLEVBQUN1UCxjQUFhQSxZQUFkLEVBQTJCRyxhQUFZLFFBQXZDLEVBQWdEQyxRQUFPcFAsTUFBdkQsRUFBOERxUCxXQUFVLFFBQXhFLEVBQWlGOUYsYUFBWTBGLFdBQTdGLEVBQXlHSyxlQUFjLHdCQUF3QixLQUFLaFIsS0FBTCxDQUFXZ0IsUUFBWCxDQUFvQkMsUUFBbkssRUFBNEtnUSxXQUFVLElBQXRMLEVBQTJMbE8sYUFBWSxJQUF2TSxFQUE0TXNDLGVBQWMsSUFBMU4sRUFBWDtBQUNBLFlBQUcsS0FBS3JGLEtBQUwsQ0FBV2tSLGVBQVgsSUFBOEIsS0FBS2xSLEtBQUwsQ0FBV2tSLGVBQVgsQ0FBMkJyTixNQUE1RCxFQUFtRTtBQUMvRDFDLGlCQUFLZ1EsUUFBTCxHQUFnQixLQUFLblIsS0FBTCxDQUFXa1IsZUFBWCxDQUEyQjFOLE1BQTNCLENBQWtDQyxLQUFHQSxFQUFFQyxJQUFGLElBQVUsa0JBQS9DLEVBQW1FLENBQW5FLEVBQXNFeU4sUUFBdEY7QUFDSDtBQUNELFlBQUlDLGVBQWVoUSxjQUFJaVEsY0FBSixFQUFuQjtBQUNJLFlBQUdELGdCQUFnQkEsYUFBYUUsUUFBaEMsRUFBeUM7QUFDckNuUSxpQkFBS21RLFFBQUwsR0FBZ0JGLGFBQWFFLFFBQTdCO0FBQ0FuUSxpQkFBS29RLFVBQUwsR0FBa0JILGFBQWFHLFVBQS9CO0FBQ0g7QUFDTCxZQUFJQyxXQUFXLEVBQUMsWUFBWSxhQUFiLEVBQTRCLFVBQVUsZ0NBQXRDLEVBQXdFLGNBQWNwUSxjQUFJQyxTQUFKLE1BQW1CLEVBQXpHLEVBQTZHLFNBQVMscUNBQXRILEVBQWY7QUFDQUQsc0JBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNcVEsUUFBUixFQUFkO0FBQ0EsYUFBS3hSLEtBQUwsQ0FBV3lSLGlCQUFYLENBQTZCZixZQUE3QjtBQUNBLFlBQUcsS0FBS3pRLEtBQUwsQ0FBVytJLGVBQVgsSUFBOEIsQ0FBQzBJLGtCQUFRQyxPQUFSLEVBQWxDLEVBQW9EO0FBQ2hELGlCQUFLclIsUUFBTCxDQUFjLEVBQUMwSSxpQkFBZ0IsS0FBakIsRUFBZDtBQUNBLGlCQUFLaEosS0FBTCxDQUFXNFIsaUJBQVgsQ0FBNkJ6USxJQUE3QjtBQUNBdU8sdUJBQVcsTUFBTTtBQUNiLHFCQUFLcFAsUUFBTCxDQUFjLEVBQUMwSSxpQkFBZ0IsSUFBakIsRUFBZDtBQUNILGFBRkQsRUFFRyxJQUZIO0FBR0g7QUFDRixhQUFLMUksUUFBTCxDQUFjLEVBQUN5SSxhQUFZLENBQWIsRUFBZDtBQUNGOztBQUVEOEksc0JBQWtCQyxJQUFsQixFQUF1QjtBQUNuQixZQUFHQSxJQUFILEVBQVE7QUFDSixnQkFBSTNRLE9BQU87QUFDSCw0QkFBWSxhQURULEVBQ3dCLFVBQVUsK0JBRGxDLEVBQ21FLGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEcEcsRUFDd0csU0FBUztBQURqSCxhQUFYO0FBR0FELDBCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTUEsSUFBUixFQUFkO0FBQ0EsaUJBQUtiLFFBQUwsQ0FBYyxFQUFDeUksYUFBWSxDQUFiLEVBQWQ7QUFDSDtBQUNKOztBQUVBNkgsc0JBQWtCbUIsaUJBQWxCLEVBQXFDO0FBQ2xDLFlBQUlBLHFCQUFxQkEsa0JBQWtCbE8sTUFBM0MsRUFBbUQ7QUFDL0MsZ0JBQUltTyxxQkFBcUJELGtCQUFrQnZPLE1BQWxCLENBQXlCQyxLQUFLQSxFQUFFQyxJQUFGLElBQVUsV0FBeEMsQ0FBekI7QUFDQSxnQkFBSXVPLG1CQUFtQkQsbUJBQW1Cbk8sTUFBbkIsR0FBNEJtTyxrQkFBNUIsR0FBaURELGlCQUF4RTs7QUFFQSxtQkFBT0UsaUJBQWlCak8sTUFBakIsQ0FBd0IsQ0FBQ2tPLEtBQUQsRUFBUWhPLElBQVIsRUFBY0MsQ0FBZCxLQUFvQjtBQUMvQyxvQkFBSUEsS0FBSyxDQUFULEVBQVk7QUFDUitOLDZCQUFTLElBQVQ7QUFDSDtBQUNEQSx5QkFBVSxHQUFFaE8sS0FBS0UsSUFBSyxFQUF0QjtBQUNBLHVCQUFPOE4sS0FBUDtBQUNILGFBTk0sRUFNSixFQU5JLENBQVA7QUFPSDtBQUNKOztBQUVEbFEsYUFBUztBQUNMLFlBQUltUSxrQkFBa0IsS0FBS25TLEtBQUwsQ0FBV29TLFVBQVgsSUFBeUIsS0FBS3BTLEtBQUwsQ0FBV29TLFVBQVgsQ0FBc0J2TyxNQUF0QixHQUErQixDQUE5RTtBQUNBLFlBQUlmLE1BQU8sR0FBRXVQLGlCQUFPQyxZQUFhLEdBQUUsS0FBS3RTLEtBQUwsQ0FBV2dCLFFBQVgsQ0FBb0JDLFFBQVMsRUFBaEU7QUFDQTZCLGNBQU1BLElBQUk0SCxPQUFKLENBQVksY0FBWixFQUE0QixFQUE1QixDQUFOO0FBQ0EsWUFBSVYsT0FBTyxFQUFYO0FBQ0EsWUFBSXVJLFlBQVl6RCxTQUFTLEtBQUs5TyxLQUFMLENBQVdnSyxJQUFwQixDQUFoQjtBQUNBLFlBQUl3SSxPQUFPLEVBQVg7QUFDQSxZQUFJRCxZQUFZLENBQWhCLEVBQW1CO0FBQ2Z2SSxtQkFBUSxTQUFRdUksU0FBVSxFQUExQjtBQUNBQyxtQkFBTzFQLEdBQVA7QUFDQSxnQkFBSXlQLFlBQVksQ0FBaEIsRUFBbUI7QUFDZkMsd0JBQVMsU0FBUUQsWUFBWSxDQUFFLEVBQS9CO0FBQ0g7QUFDSjtBQUNELFlBQUlFLE9BQU8sRUFBWDtBQUNBLFlBQUksS0FBS3pTLEtBQUwsQ0FBV2lDLEtBQVgsR0FBbUJzUSxZQUFZLEVBQW5DLEVBQXVDO0FBQ25DRSxtQkFBTzNQLE1BQU8sU0FBUXlQLFlBQVksQ0FBRSxFQUFwQztBQUNIOztBQUVEO0FBQ0EsWUFBSSxDQUFDLEtBQUt0UyxLQUFMLENBQVcrSCxXQUFoQixFQUE2QjtBQUN6QnlLLG1CQUFPLEVBQVA7QUFDQUQsbUJBQU8sRUFBUDtBQUNIOztBQUVEO0FBQ0EsWUFBSUUsZUFBZSxLQUFuQjtBQUNBLFlBQUksT0FBTzNSLE1BQVAsSUFBaUIsUUFBakIsSUFBNkJBLE9BQU8wTCxlQUF4QyxFQUF5RDtBQUNyRGlHLDJCQUFlLElBQWY7QUFDSDs7QUFFRCxlQUNJO0FBQUE7QUFBQTtBQUNJLG1EQUFLLElBQUcsS0FBUixFQUFjLE9BQU8sRUFBRW5RLFNBQVMsTUFBWCxFQUFyQixHQURKO0FBRUksMENBQUMsb0JBQUQsSUFBWSxVQUFVO0FBQ2xCb1Esa0NBQWUsR0FBRU4saUJBQU9DLFlBQWEsR0FBRSxLQUFLdFMsS0FBTCxDQUFXNFMsYUFBWCxHQUE0QixJQUFHLEtBQUs1UyxLQUFMLENBQVc0UyxhQUFjLEVBQXhELEdBQTRELEtBQUs1UyxLQUFMLENBQVdpSSxLQUFYLENBQWlCbkYsR0FBSSxHQUFFa0gsSUFBSyxFQUQ3RztBQUVsQjJFLDJCQUFPLEtBQUtELGVBQUwsQ0FBcUIsS0FBSzFPLEtBQUwsQ0FBVzZILE9BQWhDLEVBQXlDOEcsS0FGOUI7QUFHbEJDLGlDQUFhLEtBQUtGLGVBQUwsQ0FBcUIsS0FBSzFPLEtBQUwsQ0FBVzZILE9BQWhDLEVBQXlDK0csV0FIcEM7QUFJbEJDLDRCQUFRLEtBQUtILGVBQUwsQ0FBcUIsS0FBSzFPLEtBQUwsQ0FBVzZILE9BQWhDLEVBQXlDZ0gsTUFKL0I7QUFLbEI3RyxpQ0FBYSxLQUFLL0gsS0FBTCxDQUFXK0gsV0FMTjtBQU1sQndLLDBCQUFNQSxJQU5ZO0FBT2xCQywwQkFBTUEsSUFQWTtBQVFsQkksNEJBQVEsU0FSVTtBQVNsQkMsZ0NBQVksVUFUTTtBQVVsQkMsNkJBQVMsS0FBS3JFLGVBQUwsQ0FBcUIsS0FBSzFPLEtBQUwsQ0FBVzZILE9BQWhDLEVBQXlDOEcsS0FWaEM7QUFXbEJxRSxtQ0FBZSxLQUFLdEUsZUFBTCxDQUFxQixLQUFLMU8sS0FBTCxDQUFXNkgsT0FBaEMsRUFBeUMrRztBQVh0QyxpQkFBdEIsR0FGSjtBQXNCSTtBQUFDLHdDQUFEO0FBQUEsNkJBQW9CLEtBQUs1TyxLQUF6QixJQUFnQyxjQUFjMFMsZ0JBQWdCLEtBQUsxUyxLQUFMLENBQVdpVCxvQkFBM0IsSUFBbUQsS0FBS2hULEtBQUwsQ0FBV2tJLFNBQTVHLEVBQXVILE9BQU0sK0JBQTdILEVBQTZKLE1BQUssS0FBbEssRUFBd0ssUUFBUSxJQUFoTCxFQUFzTCxhQUFhLENBQUMsQ0FBQyxLQUFLbEksS0FBTCxDQUFXaUksV0FBaE4sRUFBNk4sWUFBWSxJQUF6TyxFQUErTyxlQUFlLElBQTlQO0FBRVEscUJBQUtqSSxLQUFMLENBQVdrSSxTQUFYLEdBQXVCO0FBQUE7QUFBQSxzQkFBSyxXQUFVLE1BQWY7QUFBQTtBQUFBLGlCQUF2QixHQUF3RTtBQUFBO0FBQUE7QUFDcEUsa0RBQUMsbUJBQUQsZUFBWSxLQUFLbkksS0FBakIsSUFBd0IsY0FBYyxLQUFLdU0sWUFBTCxDQUFrQm5LLElBQWxCLENBQXVCLElBQXZCLENBQXRDLEVBQW9FLFNBQVMsS0FBS3BDLEtBQUwsQ0FBVzZILE9BQXhGLEVBQWlHLGFBQWEsQ0FBQyxDQUFDLEtBQUs1SCxLQUFMLENBQVdpSSxXQUEzSCxFQUF3SSxhQUFhLEtBQUtqSSxLQUFMLENBQVcrSCxXQUFoSyxFQUE2SyxtQkFBbUIsS0FBSzBFLGlCQUFMLENBQXVCdEssSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBaE0sRUFBbU8sYUFBYSxLQUFLbkMsS0FBTCxDQUFXcUksV0FBM1AsRUFBd1EsU0FBUyxLQUFLckksS0FBTCxDQUFXd0ksT0FBNVIsRUFBcVMsV0FBV3lLLE9BQVEsS0FBS2pELEtBQUwsR0FBYWlELEdBQXJVLElBRG9FO0FBTy9ELHlCQUFLalQsS0FBTCxDQUFXaUksV0FBWCxJQUEwQixLQUFLbEksS0FBTCxDQUFXbVQsWUFBckMsSUFBcUQsS0FBS25ULEtBQUwsQ0FBV21ULFlBQVgsQ0FBd0J0UCxNQUF4QixJQUFrQyxDQUF4RixJQUE4RixLQUFLN0QsS0FBTCxDQUFXb1MsVUFBWCxJQUF5QixLQUFLcFMsS0FBTCxDQUFXb1MsVUFBWCxDQUFzQnZPLE1BQXRCLElBQWdDLENBQXZKLEdBQ0k7QUFBQyx1Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLG9DQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFLLFdBQVUsK0JBQWY7QUFDSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUEscUNBREo7QUFHUSx5Q0FBS21MLGVBQUwsQ0FBcUIsS0FBS2hQLEtBQUwsQ0FBVytKLGNBQWhDLElBQ0k7QUFBQyx1REFBRCxDQUFPLFFBQVA7QUFBQTtBQUNJLCtFQUFLLFdBQVUsWUFBZixFQUE0QixLQUFLdkgsU0FBZUEsR0FBRyxvQkFBbkQsR0FESjtBQUVJO0FBQUE7QUFBQSw4Q0FBRyxXQUFVLHdCQUFiLEVBQXNDLFNBQVMsS0FBS3VNLGdCQUFMLENBQXNCM00sSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsRUFBRWdSLFVBQVUsSUFBWixFQUFqQyxDQUEvQztBQUFBO0FBQUE7QUFGSixxQ0FESixHQU1JO0FBQUMsdURBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDSSwrRUFBSyxPQUFPLEVBQUV0TSxPQUFPLE9BQVQsRUFBWixFQUFnQyxXQUFVLFlBQTFDLEVBQXVELEtBQUt0RSxTQUFlQSxHQUFHLGlCQUE5RSxHQURKO0FBRUk7QUFBQTtBQUFBLDhDQUFHLFdBQVUsa0NBQWI7QUFBQTtBQUE0RSxxRkFBNUU7QUFBQTtBQUFBLHlDQUZKO0FBR0k7QUFBQTtBQUFBLDhDQUFRLFdBQVUsZ0JBQWxCLEVBQW1DLFNBQVVRLENBQUQsSUFBTztBQUMvQ0Esc0RBQUVLLGNBQUY7QUFDQSx3REFBSWxDLE9BQU87QUFDUCxvRUFBWSxhQURMLEVBQ29CLFVBQVUseUJBRDlCLEVBQ3lELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEMUYsRUFDOEYsU0FBUztBQUR2RyxxREFBWDtBQUdBRCxrRUFBSUUsU0FBSixDQUFjLEVBQUVILE1BQU1BLElBQVIsRUFBZDtBQUNBLHlEQUFLbkIsS0FBTCxDQUFXdUIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsNkJBQXhCO0FBQ0gsaURBUEQ7QUFBQTtBQUFBO0FBSEo7QUFUWjtBQURKLDZCQURKO0FBMEJLLGlDQUFLeEIsS0FBTCxDQUFXOFAsdUJBQVgsSUFBc0MsS0FBSzlQLEtBQUwsQ0FBVzhQLHVCQUFYLENBQW1Dak0sTUFBekUsSUFBbUYsQ0FBQyxLQUFLNUQsS0FBTCxDQUFXc04sVUFBL0YsS0FBOEcsQ0FBQyxLQUFLdE4sS0FBTCxDQUFXdU4sWUFBWixJQUE0QixDQUFDLEtBQUt2TixLQUFMLENBQVd1TixZQUFYLENBQXdCM0osTUFBbkssS0FBOEssS0FBSzdELEtBQUwsQ0FBV2lDLEtBQVgsSUFBb0IsQ0FBbE0sR0FDRyxLQUFLOE4seUJBQUwsRUFESCxHQUVLO0FBNUJWO0FBREoscUJBREosR0FtQ007QUFBQyx1Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUVNLDZCQUFLOVAsS0FBTCxDQUFXd0ksT0FBWCxJQUNBO0FBQUMsMkNBQUQsQ0FBTyxRQUFQO0FBQUE7QUFFUSxpQ0FBS3pJLEtBQUwsQ0FBV3FULFlBQVgsSUFBMkIsS0FBS3JULEtBQUwsQ0FBV3FULFlBQVgsQ0FBd0JDLGFBQW5ELElBQW9FLEtBQUt0VCxLQUFMLENBQVdxVCxZQUFYLENBQXdCQyxhQUF4QixDQUFzQ3pQLE1BQXRDLEdBQStDLENBQW5ILElBQ0EsOEJBQUMsc0JBQUQsSUFBYyxZQUFXLGVBQXpCLEVBQXlDLFVBQVUsS0FBSzdELEtBQUwsQ0FBV3FULFlBQVgsQ0FBd0JDLGFBQTNFLEVBQTBGLFVBQVMsY0FBbkcsRUFBa0gscUJBQXFCLENBQUNuRCxHQUFELEVBQU1oUCxJQUFOLEtBQWUsS0FBSytPLG1CQUFMLENBQXlCQyxHQUF6QixFQUE4QmhQLElBQTlCLENBQXRKLEVBQTJMLGFBQWEsSUFBeE0sR0FIUjtBQU1RLGlDQUFLbkIsS0FBTCxDQUFXdVQsZUFBWCxJQUE4QixLQUFLdlQsS0FBTCxDQUFXdVQsZUFBWCxDQUEyQkMsU0FBekQsSUFBc0UsS0FBS3hULEtBQUwsQ0FBV3VULGVBQVgsQ0FBMkJDLFNBQTNCLENBQXFDM1AsTUFBckMsR0FBOEMsQ0FBcEgsSUFDQSw4QkFBQyxzQkFBRCxJQUFjLFlBQVcsa0JBQXpCLEVBQTRDLFVBQVUsS0FBSzdELEtBQUwsQ0FBV3VULGVBQVgsQ0FBMkJDLFNBQWpGLEVBQTRGLFVBQVMsaUJBQXJHLEVBQXVILHFCQUFxQixDQUFDckQsR0FBRCxFQUFNaFAsSUFBTixLQUFlLEtBQUsrTyxtQkFBTCxDQUF5QkMsR0FBekIsRUFBOEJoUCxJQUE5QixDQUEzSixFQUFnTSxjQUFhLFVBQTdNLEVBQXdOLFlBQWEsTUFBSSxLQUFLb1Asc0JBQUwsRUFBek8sR0FQUjtBQVVJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLG1GQUFmLEVBQW1HLEtBQUksaUJBQXZHO0FBUUk7QUFBQTtBQUFBLHNDQUFRLFdBQVUsY0FBbEIsRUFBaUMsU0FBUyxNQUFNLEtBQUtQLGlCQUFMLEVBQWhEO0FBQTBFLDJFQUFLLEtBQUt4TixTQUFlQSxHQUFHLHFCQUE1QixHQUExRTtBQUFBO0FBQUE7QUFSSjtBQVZKLHlCQUhOO0FBeUJFLHNEQUFDLGVBQUQsZUFBaUIsS0FBS3hDLEtBQXRCLElBQTZCLGNBQWMsS0FBS3VNLFlBQUwsQ0FBa0JuSyxJQUFsQixDQUF1QixJQUF2QixDQUEzQyxFQUF5RSxlQUFlLEtBQUsySSxhQUFMLENBQW1CM0ksSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBeEYsRUFBdUgsYUFBYSxDQUFDLENBQUMsS0FBS25DLEtBQUwsQ0FBV2lJLFdBQWpKLEVBQThKLGFBQWEsS0FBS2pJLEtBQUwsQ0FBVytILFdBQXRMLEVBQW1NLHFCQUFxQixNQUFNLEtBQUtzRCxtQkFBTCxFQUE5TixFQUEwUCxrQkFBa0IsS0FBS3lELGdCQUFMLENBQXNCM00sSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBNVEsRUFBOFMsMkJBQTJCLEtBQUsyTix5QkFBTCxDQUErQjNOLElBQS9CLENBQW9DLElBQXBDLENBQXpVLEVBQW9YLGFBQWEsS0FBS25DLEtBQUwsQ0FBV3VJLFdBQTVZLElBekJGO0FBNEJNLDZCQUFLdkksS0FBTCxDQUFXK0gsV0FBWCxJQUEwQm1LLGVBQTFCLEdBQTRDO0FBQUE7QUFBQSw4QkFBSyxXQUFVLG9CQUFmO0FBRXBDSyxtQ0FBTztBQUFBO0FBQUEsa0NBQUcsTUFBTUEsSUFBVDtBQUNIO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLG9CQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFNLFdBQVUsUUFBaEI7QUFBMEJELG9EQUFZO0FBQXRDO0FBREo7QUFERyw2QkFBUCxHQUlPLEVBTjZCO0FBU3hDO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLG9CQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFNLFdBQVUsUUFBaEIsRUFBeUIsT0FBTyxFQUFFNUwsT0FBTyxNQUFULEVBQWhDO0FBQW9ENEw7QUFBcEQ7QUFESiw2QkFUd0M7QUFjcENFLG1DQUFPO0FBQUE7QUFBQSxrQ0FBRyxNQUFNQSxJQUFUO0FBQ0g7QUFBQTtBQUFBLHNDQUFLLFdBQVUsb0JBQWY7QUFDSTtBQUFBO0FBQUEsMENBQU0sV0FBVSxRQUFoQjtBQUEwQkYsb0RBQVk7QUFBdEM7QUFESjtBQURHLDZCQUFQLEdBSU87QUFsQjZCLHlCQUE1QyxHQXFCUztBQWpEZjtBQTFDMEQ7QUFGaEYsYUF0Qko7QUE2SEksMENBQUMsZ0JBQUQsSUFBUSxZQUFZLEtBQUt0UyxLQUFMLENBQVc2SCxVQUEvQjtBQTdISixTQURKO0FBaUlIO0FBMTdCMkM7O2tCQTY3QmpDWixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOThCZjs7Ozs7O0FBRUEsTUFBTXVNLFlBQU4sU0FBMkI1VCxnQkFBTUMsU0FBakMsQ0FBMkM7O0FBRTFDNFQsV0FBT2hRLElBQVAsRUFBYTtBQUNOLFlBQUlpUSxRQUFRdE0sU0FBU3VNLGNBQVQsQ0FBeUIsT0FBTSxLQUFLNVQsS0FBTCxDQUFXNlQsUUFBUyxFQUFuRCxDQUFaOztBQUVBLFlBQUdGLFNBQVN0TSxTQUFTeU0sc0JBQVQsQ0FBaUMsT0FBTSxLQUFLOVQsS0FBTCxDQUFXNlQsUUFBUyxPQUEzRCxDQUFULElBQStFeE0sU0FBU3VNLGNBQVQsQ0FBeUIsYUFBWSxLQUFLNVQsS0FBTCxDQUFXNlQsUUFBUyxFQUF6RCxDQUEvRSxJQUE4SXhNLFNBQVN1TSxjQUFULENBQXlCLGNBQWEsS0FBSzVULEtBQUwsQ0FBVzZULFFBQVMsRUFBMUQsQ0FBakosRUFBK007O0FBRTlNLGdCQUFJRSxnQkFBZ0JKLE1BQU1LLFdBQTFCO0FBQ0EsZ0JBQUlDLGdCQUFnQjVNLFNBQVN5TSxzQkFBVCxDQUFpQyxPQUFNLEtBQUs5VCxLQUFMLENBQVc2VCxRQUFTLE9BQTNELEVBQW1FLENBQW5FLEVBQXNFRyxXQUExRjtBQUNBLGdCQUFJRSxZQUFZN00sU0FBU3lNLHNCQUFULENBQWlDLE9BQU0sS0FBSzlULEtBQUwsQ0FBVzZULFFBQVMsT0FBM0QsRUFBbUUsQ0FBbkUsRUFBc0VNLGlCQUF0RjtBQUNBLGdCQUFJQyxZQUFZdFAsS0FBS3VQLElBQUwsQ0FBVUosZ0JBQWdCQyxTQUExQixDQUFoQjs7QUFFQSxnQkFBSUksYUFBYVgsTUFBTVksVUFBdkI7QUFDQSxnQkFBSUMsWUFBWTFQLEtBQUtpSCxLQUFMLENBQVdnSSxnQkFBZ0JLLFNBQTNCLElBQXdDQSxTQUF4RDtBQUNBLGdCQUFJSyxVQUFVUCxZQUFZRSxTQUExQjs7QUFFQSxnQkFBSTFRLFFBQVEsT0FBWixFQUFxQjtBQUNqQmlRLHNCQUFNRCxNQUFOLENBQWEsRUFBRWdCLE1BQU1KLGFBQWFFLFNBQXJCLEVBQWdDRyxVQUFVLFFBQTFDLEVBQWI7QUFDQSxvQkFBSUYsV0FBV0gsYUFBYUUsU0FBYixHQUF5QlQsYUFBeEMsRUFBdUQ7QUFDbkQxTSw2QkFBU3VNLGNBQVQsQ0FBeUIsYUFBWSxLQUFLNVQsS0FBTCxDQUFXNlQsUUFBUyxFQUF6RCxFQUE0RGUsU0FBNUQsQ0FBc0VDLEdBQXRFLENBQTBFLFFBQTFFO0FBQ0g7QUFDRHhOLHlCQUFTdU0sY0FBVCxDQUF5QixjQUFhLEtBQUs1VCxLQUFMLENBQVc2VCxRQUFTLEVBQTFELEVBQTZEZSxTQUE3RCxDQUF1RUUsTUFBdkUsQ0FBOEUsUUFBOUU7QUFDSCxhQU5ELE1BTU87QUFDSG5CLHNCQUFNRCxNQUFOLENBQWEsRUFBRWdCLE1BQU1KLGFBQWFFLFNBQXJCLEVBQWdDRyxVQUFVLFFBQTFDLEVBQWI7QUFDQSxvQkFBSUwsYUFBYUUsU0FBYixJQUEwQixDQUE5QixFQUFpQztBQUM3Qm5OLDZCQUFTdU0sY0FBVCxDQUF5QixjQUFhLEtBQUs1VCxLQUFMLENBQVc2VCxRQUFTLEVBQTFELEVBQTZEZSxTQUE3RCxDQUF1RUMsR0FBdkUsQ0FBMkUsUUFBM0U7QUFDSDtBQUNEeE4seUJBQVN1TSxjQUFULENBQXlCLGFBQVksS0FBSzVULEtBQUwsQ0FBVzZULFFBQVMsRUFBekQsRUFBNERlLFNBQTVELENBQXNFRSxNQUF0RSxDQUE2RSxRQUE3RTtBQUNIO0FBQ0Q7QUFDSjs7QUFFSjlTLGFBQVE7O0FBRVAsWUFBSSxFQUFFK1MsVUFBRixFQUFjQyxRQUFkLEVBQXdCbkIsUUFBeEIsRUFBa0NvQixXQUFsQyxFQUErQ0MsWUFBL0MsRUFBNkRDLE9BQTdELEtBQXlFLEtBQUtuVixLQUFsRjtBQUNBLGVBQ0M7QUFBQTtBQUFBLGNBQUssV0FBVSxpREFBZjtBQUNhO0FBQUE7QUFBQSxrQkFBSyxXQUFVLHVCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUsrVSxrQ0FBWTtBQUFqQixpQkFESjtBQUVLRyxpQ0FBaUJDLFdBQVdILFNBQVNuUixNQUFULElBQWtCLEVBQTlDLEtBQXFEO0FBQUE7QUFBQSxzQkFBTSxTQUFTLE1BQU0sS0FBSzdELEtBQUwsQ0FBV29WLFVBQVgsRUFBckI7QUFBK0NGO0FBQS9DO0FBRjFELGFBRGI7QUFNYTtBQUFBO0FBQUEsa0JBQUssV0FBVSxtQ0FBZixFQUFtRCxJQUFLLE9BQU0sS0FBS2xWLEtBQUwsQ0FBVzZULFFBQVMsRUFBbEY7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBWSwrQ0FBOEMsS0FBSzdULEtBQUwsQ0FBVzZULFFBQVMsT0FBbkY7QUFFRW1CLDZCQUFTclIsR0FBVCxDQUFhLENBQUN4QyxJQUFELEVBQU9rVSxHQUFQLEtBQWE7QUFDN0IsK0JBQU87QUFBQTtBQUFBLDhCQUFHLEtBQU0sR0FBRUEsR0FBSSxJQUFHbFUsS0FBSzBCLEVBQUcsRUFBMUIsRUFBNkIsTUFBSyxFQUFsQyxFQUFxQyxXQUFVLGNBQS9DLEVBQStELFNBQVMsTUFBSSxLQUFLN0MsS0FBTCxDQUFXc1YsbUJBQVgsQ0FBK0JuVSxJQUEvQixFQUFvQzhULGNBQVksSUFBWixHQUFpQixLQUFyRCxDQUE1RTtBQUNHO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLGdCQUFmO0FBRUU5VCxxQ0FBS29VLElBQUwsSUFBYSx1Q0FBSyxPQUFPLEVBQUN6TyxPQUFPLE1BQVIsRUFBWixFQUE2QixXQUFVLFdBQXZDLEVBQW1ELEtBQUszRixLQUFLb1UsSUFBN0Q7QUFGZiw2QkFESDtBQU1HO0FBQUE7QUFBQSxrQ0FBRyxXQUFVLHdCQUFiO0FBQ0twVSxxQ0FBS2lEO0FBRFY7QUFOSCx5QkFBUDtBQVVJLHFCQVhEO0FBRkY7QUFESixhQU5iO0FBd0JhO0FBQUE7QUFBQSxrQkFBSyxXQUFVLDhCQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsbUJBQWYsRUFBbUMsSUFBSyxjQUFheVAsUUFBUyxFQUE5RCxFQUFpRSxTQUFTLEtBQUtILE1BQUwsQ0FBWXRSLElBQVosQ0FBaUIsSUFBakIsRUFBdUIsTUFBdkIsQ0FBMUU7QUFBMEcsMkRBQUssS0FBS0ksU0FBZUEsR0FBRyx3Q0FBNUI7QUFBMUcsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxZQUFmLEVBQTRCLElBQUssYUFBWXFSLFFBQVMsRUFBdEQsRUFBeUQsU0FBUyxLQUFLSCxNQUFMLENBQVl0UixJQUFaLENBQWlCLElBQWpCLEVBQXVCLE9BQXZCLENBQWxFO0FBQW1HLDJEQUFLLEtBQUtJLFNBQWVBLEdBQUcsd0NBQTVCO0FBQW5HO0FBRko7QUF4QmIsU0FERDtBQStCQTtBQWxFeUM7O2tCQXFFNUJpUixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFZjs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU0rQixXQUFOLFNBQTBCM1YsZ0JBQU1DLFNBQWhDLENBQTBDO0FBQ3RDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVHdWLHFCQUFTLEtBREE7QUFFVEMscUJBQVMsS0FGQTtBQUdUQyx5QkFBYSxLQUhKO0FBSVQzTCxrQkFBTSxDQUpHO0FBS1Q0TCxzQkFBVSwwQkFMRDtBQU1Uckwsd0JBQVl2SyxNQUFNK0osY0FBTixJQUF3Qi9KLE1BQU0rSixjQUFOLENBQXFCUSxVQUE3QyxHQUEwRHZLLE1BQU0rSixjQUFOLENBQXFCUSxVQUEvRSxHQUE0RixLQU4vRjtBQU9UaUQsMEJBQWMsRUFQTDtBQVFUdEMscUJBQVMsRUFSQTtBQVNUcUMsd0JBQVksRUFUSDtBQVVUc0ksMkJBQWU7QUFWTixTQUFiO0FBWUg7O0FBRURuVix3QkFBb0I7QUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkFnUCxtQkFBVyxNQUFNO0FBQ2IsaUJBQUtwUCxRQUFMLENBQWMsRUFBRW1WLFNBQVMsSUFBWCxFQUFkO0FBQ0gsU0FGRCxFQUVHLENBRkg7QUFHQSxhQUFLblYsUUFBTCxjQUFtQixLQUFLTixLQUFMLENBQVcrSixjQUE5QjtBQUNBLFlBQUkxSixtQkFBbUIsRUFBdkI7QUFDQSxZQUFJdUIsTUFBTSxTQUFWO0FBQ0EsWUFBSUMsT0FBTyxTQUFYO0FBQ0EsWUFBSSxLQUFLN0IsS0FBTCxDQUFXSyxnQkFBZixFQUFpQztBQUM3QkEsK0JBQW1CLEtBQUtMLEtBQUwsQ0FBV0ssZ0JBQTlCO0FBQ0F1QixrQkFBTXZCLGlCQUFpQitNLFFBQWpCLENBQTBCcE0sUUFBMUIsQ0FBbUNZLEdBQXpDO0FBQ0FDLG1CQUFPeEIsaUJBQWlCK00sUUFBakIsQ0FBMEJwTSxRQUExQixDQUFtQ3FNLEdBQTFDO0FBQ0EsZ0JBQUksT0FBT3pMLEdBQVAsS0FBZSxVQUFuQixFQUErQkEsTUFBTUEsS0FBTjtBQUMvQixnQkFBSSxPQUFPQyxJQUFQLEtBQWdCLFVBQXBCLEVBQWdDQSxPQUFPQSxNQUFQO0FBQ25DOztBQUVELGFBQUs3QixLQUFMLENBQVc4VixZQUFYLENBQXdCbFUsR0FBeEIsRUFBNkJDLElBQTdCO0FBQ0g7O0FBRUR6Qiw4QkFBMEJKLEtBQTFCLEVBQWlDO0FBQzdCLFlBQUlBLE1BQU0rSixjQUFWLEVBQTBCO0FBQ3RCLGlCQUFLekosUUFBTCxDQUFjLEVBQUU0SyxTQUFTbEwsTUFBTStKLGNBQU4sQ0FBcUJtQixPQUFoQyxFQUF5Q3FDLFlBQVl2TixNQUFNK0osY0FBTixDQUFxQndELFVBQTFFLEVBQXNGQyxjQUFjeE4sTUFBTStKLGNBQU4sQ0FBcUJ5RCxZQUFyQixJQUFxQyxFQUF6SSxFQUFkO0FBQ0g7QUFFSjs7QUFFRHBDLDJCQUF1QjtBQUNuQixZQUFJakssT0FBTztBQUNQLHdCQUFZLGFBREwsRUFDb0IsVUFBVSx3QkFEOUIsRUFDd0QsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQUR6RixFQUM2RixVQUFVLENBRHZHLEVBQzBHLFNBQVMsMEJBRG5ILEVBQytJLFNBQVMsS0FBS3BCLEtBQUwsQ0FBVytKO0FBRG5LLFNBQVg7QUFHQTVJLHNCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTUEsSUFBUixFQUFkOztBQUVBO0FBQ0E7QUFDQTtBQUNIOztBQUVEOEsscUJBQWlCQyxHQUFqQixFQUFzQjtBQUNsQjtBQUNBLGNBQU1DLGNBQWMsS0FBS25NLEtBQUwsQ0FBV2dCLFFBQVgsQ0FBb0JkLE1BQXhDO0FBQ0EsY0FBTWtNLFNBQVMsSUFBSUMsZUFBSixDQUFvQkYsV0FBcEIsQ0FBZjtBQUNBLGVBQU9DLE9BQU9FLEdBQVAsQ0FBV0osR0FBWCxDQUFQO0FBQ0g7O0FBRUQ2SixhQUFTL0wsSUFBVCxFQUFlO0FBQ1gsYUFBSzFKLFFBQUwsQ0FBYyxFQUFFbVYsU0FBUyxLQUFYLEVBQWtCQyxTQUFTLElBQTNCLEVBQWQ7QUFDQSxhQUFLMVYsS0FBTCxDQUFXK0ssYUFBWCxDQUF5QixJQUF6QixFQUErQmYsT0FBTyxDQUF0QyxFQUEwQ3lMLE9BQUQsSUFBYTtBQUNsRCxpQkFBS25WLFFBQUwsQ0FBYyxFQUFFb1YsU0FBUyxLQUFYLEVBQWtCMUwsTUFBTUEsT0FBTyxDQUEvQixFQUFkO0FBQ0EwRix1QkFBVyxNQUFNO0FBQ2IscUJBQUtwUCxRQUFMLENBQWMsRUFBRW1WLE9BQUYsRUFBZDtBQUNILGFBRkQsRUFFRyxJQUZIO0FBR0gsU0FMRDtBQU9IOztBQUVETyxtQkFBZTtBQUNYLFlBQUlqVixNQUFKLEVBQVk7QUFDUkEsbUJBQU9xSixRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7QUFDRCxhQUFLOUosUUFBTCxDQUFjLEVBQUVzVixVQUFVLDBCQUFaLEVBQWQ7QUFDSDs7QUFFREssc0JBQWtCdlMsSUFBbEIsRUFBd0J3UyxHQUF4QixFQUE2QkMsT0FBN0IsRUFBc0NuVCxDQUF0QyxFQUF5QztBQUNyQyxZQUFJb1QsUUFBUUYsR0FBWjtBQUNBLFlBQUlDLE9BQUosRUFBYTtBQUNULGdCQUFJRSxjQUFjLEdBQUdDLE1BQUgsQ0FBVSxLQUFLclcsS0FBTCxDQUFXeUQsSUFBWCxDQUFWLEtBQStCLEVBQWpEO0FBQ0EsZ0JBQUk2UyxRQUFRLEtBQVo7QUFDQUgsb0JBQVFDLFlBQVk3UyxNQUFaLENBQW9CckMsSUFBRCxJQUFVO0FBQ2pDLG9CQUFJQSxRQUFRK1UsR0FBWixFQUFpQjtBQUNiSyw0QkFBUSxJQUFSO0FBQ0EsMkJBQU8sS0FBUDtBQUNIO0FBQ0QsdUJBQU8sSUFBUDtBQUNILGFBTk8sQ0FBUjtBQU9BLGdCQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSSCxzQkFBTTVVLElBQU4sQ0FBVzBVLEdBQVg7QUFDSDtBQUNKOztBQUVELFlBQUk5RixVQUFVO0FBQ1Ysd0JBQVksdUJBREYsRUFDMkIsVUFBVSx1QkFEckMsRUFDOEQsY0FBY2hQLGNBQUlDLFNBQUosTUFBbUIsRUFEL0YsRUFDbUcsVUFBVSxDQUQ3RyxFQUNnSCxTQUFTLDBCQUR6SCxFQUNxSixPQUFPTixPQUFPQyxRQUFQLENBQWdCQyxRQUQ1SyxFQUNzTCxRQUFReUMsSUFEOUwsRUFDb00sT0FBT3dTO0FBRDNNLFNBQWQ7QUFHQTlVLHNCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTWlQLE9BQVIsRUFBZDs7QUFFQSxZQUFJdEcsdUJBQWUsS0FBSzlKLEtBQUwsQ0FBVytKLGNBQTFCLENBQUo7QUFDQSxZQUFJckcsS0FBS2pELFFBQUwsQ0FBYyxTQUFkLENBQUosRUFBOEI7O0FBRTFCLGdCQUFJeVYsSUFBSXpWLFFBQUosQ0FBYSxXQUFiLEtBQTZCeVYsSUFBSXpWLFFBQUosQ0FBYSxZQUFiLENBQWpDLEVBQTZEOztBQUV6RCxvQkFBSSxLQUFLUixLQUFMLENBQVd5RCxJQUFYLEtBQW9CLE1BQXBCLEtBQWdDLEtBQUt6RCxLQUFMLENBQVcsWUFBWCxLQUE0QixLQUE1QixJQUFxQ2lXLElBQUl6VixRQUFKLENBQWEsV0FBYixDQUF0QyxJQUFxRSxLQUFLUixLQUFMLENBQVcsWUFBWCxLQUE0QixNQUE1QixJQUFzQ2lXLElBQUl6VixRQUFKLENBQWEsWUFBYixDQUExSSxDQUFKLEVBQTRLO0FBQ3hLLHlCQUFLSCxRQUFMLENBQWMsRUFBRTRLLFNBQVMsSUFBWCxFQUFpQnFDLFlBQVksSUFBN0IsRUFBZCxFQUFtRCxNQUFNO0FBQ3JEekQsa0NBQVU2QyxPQUFPQyxNQUFQLFlBQWdCOUMsT0FBaEIsSUFBNEIsS0FBSzdKLEtBQWpDLEVBQVY7QUFDQSw2QkFBS0QsS0FBTCxDQUFXdU0sWUFBWCxDQUF3QnpDLE9BQXhCO0FBQ0gscUJBSEQ7QUFJSCxpQkFMRCxNQUtPO0FBQ0gseUJBQUt4SixRQUFMLENBQWMsRUFBRTRLLFNBQVMsTUFBWCxFQUFtQnFDLFlBQVkySSxJQUFJelYsUUFBSixDQUFhLFdBQWIsSUFBNEIsS0FBNUIsR0FBb0MsTUFBbkUsRUFBZCxFQUEyRixNQUFNO0FBQzdGcUosa0NBQVU2QyxPQUFPQyxNQUFQLFlBQWdCOUMsT0FBaEIsSUFBNEIsS0FBSzdKLEtBQWpDLEVBQVY7QUFDQSw2QkFBS0QsS0FBTCxDQUFXdU0sWUFBWCxDQUF3QnpDLE9BQXhCO0FBQ0gscUJBSEQ7QUFJSDtBQUVKLGFBZEQsTUFjTztBQUNILHFCQUFLeEosUUFBTCxDQUFjLEVBQUU0SyxTQUFTLEtBQUtqTCxLQUFMLENBQVd5RCxJQUFYLEtBQW9CMFMsS0FBcEIsR0FBNEIsSUFBNUIsR0FBbUNBLEtBQTlDLEVBQXFEN0ksWUFBWSxJQUFqRSxFQUFkLEVBQXVGLE1BQU07QUFDekZ6RCw4QkFBVTZDLE9BQU9DLE1BQVAsWUFBZ0I5QyxPQUFoQixJQUE0QixLQUFLN0osS0FBakMsRUFBVjtBQUNBLHlCQUFLRCxLQUFMLENBQVd1TSxZQUFYLENBQXdCekMsT0FBeEI7QUFDSCxpQkFIRDtBQUlIO0FBQ0osU0F0QkQsTUFzQk87QUFDSCxpQkFBS3hKLFFBQUwsQ0FBYyxFQUFFLENBQUNvRCxJQUFELEdBQVEsS0FBS3pELEtBQUwsQ0FBV3lELElBQVgsS0FBb0IwUyxLQUFwQixHQUE0QixFQUE1QixHQUFpQ0EsS0FBM0MsRUFBZCxFQUFrRSxNQUFNO0FBQ3BFdE0sMEJBQVU2QyxPQUFPQyxNQUFQLFlBQWdCOUMsT0FBaEIsSUFBNEIsS0FBSzdKLEtBQWpDLEVBQVY7QUFDQSxxQkFBS0QsS0FBTCxDQUFXdU0sWUFBWCxDQUF3QnpDLE9BQXhCO0FBQ0gsYUFIRDtBQUlIO0FBQ0o7O0FBRUQwTSxzQkFBa0I7QUFDZCxZQUFJMU0sVUFBVTtBQUNWc0osc0JBQVU7QUFEQSxTQUFkO0FBR0EsYUFBS3BULEtBQUwsQ0FBVytPLGdCQUFYLENBQTRCakYsT0FBNUI7QUFDSDs7QUFHRHZCLG1CQUFlN0UsSUFBZixFQUFxQjtBQUNqQixZQUFJK1MsVUFBVS9HLFdBQVcsTUFBTTtBQUMzQixnQkFBSSxLQUFLelAsS0FBTCxDQUFXNFYsYUFBZixFQUE4QjtBQUMxQixxQkFBS3ZWLFFBQUwsQ0FBYyxFQUFFdVYsZUFBZSxLQUFqQixFQUFkO0FBQ0FhLHVDQUFTQyxJQUFULENBQWMsRUFBRUMsS0FBSyxlQUFQLEVBQXdCQyxNQUFNLDJCQUE5QixFQUFkO0FBQ0g7QUFDSixTQUxhLEVBS1gsSUFMVyxDQUFkOztBQU9BLFlBQUkxVixPQUFPO0FBQ1Asd0JBQVksYUFETCxFQUNvQixVQUFXLGlCQUFnQnVDLElBQUssT0FEcEQsRUFDNEQsY0FBY3RDLGNBQUlDLFNBQUosTUFBbUIsRUFEN0YsRUFDaUcsVUFBVSxDQUQzRyxFQUM4RyxTQUFVLG1CQUFrQnFDLElBQUssUUFEL0ksRUFDd0osUUFBUTtBQURoSyxTQUFYO0FBR0F0QyxzQkFBSUUsU0FBSixDQUFjLEVBQUVILE1BQU1BLElBQVIsRUFBZDs7QUFFQSxhQUFLYixRQUFMLENBQWMsRUFBRXVWLGVBQWUsSUFBakIsRUFBZDtBQUNBLGFBQUs3VixLQUFMLENBQVdzTCxtQkFBWDtBQUNBLFlBQUl3TCxVQUFVQyxXQUFkLEVBQTJCO0FBQ3ZCRCxzQkFBVUMsV0FBVixDQUFzQkMsa0JBQXRCLENBQTBDdlEsUUFBRCxJQUFjO0FBQ25ELHlEQUF3QjZHLFdBQVc3RyxTQUFTd1EsTUFBVCxDQUFnQkMsUUFBM0IsQ0FBeEIsRUFBOEQ1SixXQUFXN0csU0FBU3dRLE1BQVQsQ0FBZ0JFLFNBQTNCLENBQTlELEVBQXFHLFVBQXJHLEVBQWtIaFgsZUFBRCxJQUFxQjtBQUNsSSx5QkFBS0gsS0FBTCxDQUFXK0IsY0FBWCxDQUEwQjVCLGVBQTFCLEVBQTJDLFlBQTNDLEVBQXlEMEssSUFBekQsQ0FBOEQsTUFBTTtBQUNoRXVNLHFDQUFhWCxPQUFiO0FBQ0EsNkJBQUtuVyxRQUFMLENBQWMsRUFBRXVWLGVBQWUsS0FBakIsRUFBZDtBQUNILHFCQUhEO0FBSUgsaUJBTEQ7QUFNSCxhQVBELEVBT0csQ0FBQ3dCLENBQUQsRUFBSUMsQ0FBSixFQUFPMUwsQ0FBUCxLQUFhO0FBQ1oscUJBQUt0TCxRQUFMLENBQWMsRUFBRXVWLGVBQWUsS0FBakIsRUFBZDtBQUNBYSx1Q0FBU0MsSUFBVCxDQUFjLEVBQUVDLEtBQUssZUFBUCxFQUF3QkMsTUFBTSwyQkFBOUIsRUFBZDtBQUNILGFBVkQsRUFVRyxDQUFDUSxDQUFELEVBQUlDLENBQUosRUFBTzFMLENBQVAsS0FBYTtBQUNaLHFCQUFLdEwsUUFBTCxDQUFjLEVBQUV1VixlQUFlLEtBQWpCLEVBQWQ7QUFDQWEsdUNBQVNDLElBQVQsQ0FBYyxFQUFFQyxLQUFLLGVBQVAsRUFBd0JDLE1BQU0sMkJBQTlCLEVBQWQ7QUFDSCxhQWJEO0FBY0gsU0FmRCxNQWdCSztBQUNELGlCQUFLdlcsUUFBTCxDQUFjLEVBQUV1VixlQUFlLEtBQWpCLEVBQWQ7QUFDQTtBQUNIO0FBQ0o7O0FBRUQwQix1QkFBbUJwVyxJQUFuQixFQUF5QjtBQUNyQixZQUFJaVAsVUFBVTtBQUNWLHdCQUFZLGFBREYsRUFDaUIsVUFBVSxvQkFEM0IsRUFDaUQsY0FBY2hQLGNBQUlDLFNBQUosTUFBbUIsRUFEbEYsRUFDc0YsVUFBVSxDQURoRyxFQUNtRyxTQUFTO0FBRDVHLFNBQWQ7QUFHQUQsc0JBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNaVAsT0FBUixFQUFkO0FBQ0EsWUFBSWpQLEtBQUsyQixHQUFULEVBQWM7QUFDVixpQkFBSzlDLEtBQUwsQ0FBV3VCLE9BQVgsQ0FBbUJDLElBQW5CLENBQXlCLElBQUdMLEtBQUsyQixHQUFJLEVBQXJDO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsaUJBQUs5QyxLQUFMLENBQVd1QixPQUFYLENBQW1CQyxJQUFuQixDQUF5QixpQkFBZ0JMLEtBQUswQixFQUFHLEVBQWpEO0FBQ0g7QUFDSjs7QUFFRGIsYUFBUzs7QUFFTCxZQUFJd1YsYUFBYSxJQUFqQjs7QUFFQSxZQUFJLEVBQUVDLFNBQUYsRUFBYUMsT0FBYixFQUFzQnRGLFVBQXRCLEVBQWtDZSxZQUFsQyxLQUFtRCxLQUFLblQsS0FBNUQ7O0FBRUEsWUFBSTJYLGFBQWEsQ0FBakI7QUFDQSxZQUFJLEtBQUszWCxLQUFMLENBQVd1UyxTQUFmLEVBQTBCO0FBQ3RCb0YseUJBQWE3UyxLQUFLOFMsR0FBTCxDQUFTLENBQVQsRUFBWSxLQUFLNVgsS0FBTCxDQUFXdVMsU0FBWCxHQUF1QixDQUFuQyxDQUFiO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZ0JBQUksS0FBS3ZTLEtBQUwsQ0FBV2dLLElBQWYsRUFBcUI7QUFDakIyTiw2QkFBYTdTLEtBQUs4UyxHQUFMLENBQVMsQ0FBVCxFQUFZLEtBQUs1WCxLQUFMLENBQVdnSyxJQUFYLEdBQWtCLENBQTlCLENBQWI7QUFDSDtBQUNKOztBQUVELFlBQUk2TixjQUFjekYsVUFBbEI7QUFDQSxZQUFJMEYsY0FBY0osT0FBbEI7QUFDQSxZQUFJLEtBQUsxWCxLQUFMLENBQVdrSSxXQUFmLEVBQTRCO0FBQ3hCMlAsMEJBQWMxRSxZQUFkO0FBQ0EyRSwwQkFBY0wsU0FBZDtBQUNIOztBQUVELFlBQUlNLFVBQVUsSUFBZDtBQUNBLFlBQUlDLGtCQUFrQixJQUF0Qjs7QUFFQUgsb0JBQVlsVSxHQUFaLENBQWdCLENBQUNzVSxNQUFELEVBQVM5VCxDQUFULEtBQWU7QUFDM0IsZ0JBQUlxVCxjQUFjTSxZQUFZRyxNQUFaLENBQWQsSUFBcUMsQ0FBQ0gsWUFBWUcsTUFBWixFQUFvQnpFLFNBQXBCLENBQThCLENBQTlCLEVBQWlDeE4sMEJBQXZFLElBQXFHLEtBQUtoRyxLQUFMLENBQVdnSSxXQUFoSCxJQUErSCxLQUFLaEksS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCckMsUUFBckIsQ0FBOEIsWUFBOUIsQ0FBL0gsSUFBOEssS0FBS1QsS0FBTCxDQUFXdUQsdUJBQXpMLElBQW9OLEtBQUt2RCxLQUFMLENBQVd1RCx1QkFBWCxDQUFtQ00sTUFBM1AsRUFBbVE7QUFDL1BrVSwwQkFBVUUsTUFBVjtBQUNBVCw2QkFBYSxLQUFiO0FBQ0g7QUFDRCxnQkFBSXJULEtBQUssQ0FBVCxFQUFZO0FBQ1Isb0JBQUkyVCxZQUFZRyxNQUFaLEtBQXVCLENBQUNILFlBQVlHLE1BQVosRUFBb0J6RSxTQUFwQixDQUE4QixDQUE5QixFQUFpQ3hOLDBCQUF6RCxJQUF1RixLQUFLaEcsS0FBTCxDQUFXZ0ksV0FBbEcsSUFBaUgsS0FBS2hJLEtBQUwsQ0FBV2lJLEtBQVgsQ0FBaUJuRixHQUFqQixDQUFxQnJDLFFBQXJCLENBQThCLFlBQTlCLENBQWpILElBQWdLLEtBQUtULEtBQUwsQ0FBV3VELHVCQUEzSyxJQUFzTSxLQUFLdkQsS0FBTCxDQUFXdUQsdUJBQVgsQ0FBbUNNLE1BQTdPLEVBQXFQO0FBQ2pQbVUsc0NBQWtCLEtBQWxCO0FBQ0g7QUFDSjtBQUNKLFNBVkQ7O0FBWUEsWUFBSXhQLGNBQWMsS0FBS3hJLEtBQUwsQ0FBV3dJLFdBQVgsSUFBMEIsS0FBS3hJLEtBQUwsQ0FBV3dJLFdBQVgsQ0FBdUIzRSxNQUFqRCxHQUEwRCxLQUFLN0QsS0FBTCxDQUFXd0ksV0FBWCxDQUF1QixDQUF2QixDQUExRCxHQUFzRixJQUF4Rzs7QUFFQSxlQUNJO0FBQUE7QUFBQSxjQUFTLEtBQUksZUFBYjtBQUVRLGlCQUFLdkksS0FBTCxDQUFXMFYsV0FBWCxHQUF5Qiw4QkFBQyxnQkFBRCxPQUF6QixHQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG9DQUFmO0FBRVEscUJBQUszVixLQUFMLENBQVdrWSxjQUFYLElBQTZCLEtBQUtsWSxLQUFMLENBQVdrWSxjQUFYLElBQTZCLEVBQTFELElBQWdFcEosU0FBUyxLQUFLOU8sS0FBTCxDQUFXZ0ssSUFBcEIsS0FBNkIsQ0FBN0YsR0FDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxvREFBZixFQUFvRSxPQUFPLEVBQUVtTyxjQUFjLEtBQWhCLEVBQXVCQyxXQUFXLEtBQWxDLEVBQTNFO0FBQ0ksMkRBQUssV0FBVyxLQUFLblksS0FBTCxDQUFXMlYsUUFBM0IsRUFBcUMseUJBQXlCLEVBQUV5QyxRQUFRLEtBQUtyWSxLQUFMLENBQVdrWSxjQUFyQixFQUE5RCxHQURKO0FBSUsseUJBQUtqWSxLQUFMLENBQVcyVixRQUFYLElBQXVCLEtBQUszVixLQUFMLENBQVcyVixRQUFYLElBQXVCLEVBQTlDLEdBQ0c7QUFBQTtBQUFBLDBCQUFNLFdBQVUsU0FBaEIsRUFBMEIsU0FBUyxNQUFNLEtBQUt0VixRQUFMLENBQWMsRUFBRXNWLFVBQVUsRUFBWixFQUFkLENBQXpDO0FBQUE7QUFBQSxxQkFESCxHQUVLLEVBTlY7QUFTSyx5QkFBSzNWLEtBQUwsQ0FBVzJWLFFBQVgsSUFBdUIsRUFBdkIsR0FDRztBQUFBO0FBQUEsMEJBQU0sV0FBVSxTQUFoQixFQUEwQixTQUFTLEtBQUtJLFlBQUwsQ0FBa0I1VCxJQUFsQixDQUF1QixJQUF2QixDQUFuQztBQUFBO0FBQUEscUJBREgsR0FFSztBQVhWLGlCQURKLEdBZU0sRUFqQmQ7QUFtQkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFRSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxRQUFmO0FBQ0k7QUFBQywyREFBRDtBQUFBO0FBQ0ksMkNBQVd1VixVQURmO0FBRUksMENBQVUsS0FBSzVCLFFBQUwsQ0FBYzNULElBQWQsQ0FBbUIsSUFBbkIsQ0FGZDtBQUdJLHlDQUFTLEtBQUtuQyxLQUFMLENBQVd3VixPQUh4QjtBQUlJLDJDQUFXLElBSmY7QUFLSSw2Q0FBYTtBQUxqQjtBQU9JO0FBQUE7QUFBQTtBQUVRak4sK0NBQWVBLFlBQVlwRSxJQUEzQixJQUNBO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLGtCQUFmLEVBQWtDLFNBQVMsTUFBTSxLQUFLbVQsa0JBQUwsQ0FBd0IvTyxXQUF4QixDQUFqRDtBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLGNBQWY7QUFDSTtBQUFBO0FBQUEsOENBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSxrREFBSyxXQUFVLE9BQWY7QUFDSTtBQUFBO0FBQUEsc0RBQUksV0FBVSxhQUFkO0FBQTZCQSxnRUFBWXBFO0FBQXpDLGlEQURKO0FBRUk7QUFBQTtBQUFBLHNEQUFLLFdBQVUsNEJBQWY7QUFFUW9FLGdFQUFZOFAsY0FBWixJQUNBO0FBQUE7QUFBQSwwREFBSyxXQUFVLHdCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksbUdBQUssT0FBTyxFQUFFeFIsT0FBTyxNQUFULEVBQVosRUFBK0IsV0FBVSxjQUF6QyxFQUF3RCxLQUFLMEIsWUFBWThQLGNBQXpFO0FBREo7QUFESixxREFIUjtBQVNJO0FBQUE7QUFBQSwwREFBSyxXQUFVLDRCQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQU0sK0RBQUU5UCxZQUFZK1AsV0FBWixHQUEwQi9QLFlBQVkrUCxXQUFaLENBQXdCMVUsTUFBbEQsR0FBMkQsRUFBRztBQUF0RSx5REFESjtBQUdRMkUsb0VBQVlnUSxXQUFaLElBQ0E7QUFBQywyRUFBRCxDQUFPLFFBQVA7QUFBQTtBQUNJO0FBQUE7QUFBQSxrRUFBSSxPQUFPLEVBQUVDLGNBQWMsTUFBaEIsRUFBWDtBQUFBO0FBQUEsNkRBREo7QUFFSTtBQUFBO0FBQUE7QUFBRyx1R0FBSyxXQUFVLGFBQWYsRUFBNkIsS0FBS2pXLFNBQWVBLEdBQUcscUJBQXBELEdBQUg7QUFBQTtBQUFrRmdHLDRFQUFZZ1E7QUFBOUY7QUFGSjtBQUpSO0FBVEosaURBRko7QUF1Qkk7QUFBQTtBQUFBLHNEQUFLLFdBQVUsZUFBZjtBQUVRaFEsZ0VBQVlrUSxVQUFaLElBQ0EsOEJBQUMscUJBQUQsSUFBYSxnQkFBZ0I1SixTQUFTdEcsWUFBWWtRLFVBQXJCLENBQTdCLEVBQStELGNBQWMsRUFBN0UsRUFBaUYsT0FBTSxNQUF2RixFQUE4RixRQUFPLE1BQXJHLEdBSFI7QUFNUWxRLGdFQUFZbVEsTUFBWixJQUFzQm5RLFlBQVltUSxNQUFaLENBQW1COVUsTUFBbkIsR0FBNEIsQ0FBbEQsSUFDQTtBQUFBO0FBQUE7QUFBUSw0REFBRzJFLFlBQVltUSxNQUFaLENBQW1COVUsTUFBTztBQUFyQztBQVBSO0FBdkJKLDZDQURKO0FBb0NJO0FBQUE7QUFBQSxrREFBSyxXQUFVLGtCQUFmO0FBQ0k7QUFBQTtBQUFBLHNEQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUEsaURBREo7QUFHSTtBQUFBO0FBQUEsc0RBQVEsV0FBVSx3QkFBbEI7QUFBQTtBQUFBO0FBSEo7QUFwQ0oseUNBREo7QUE0Q1EyRSxvREFBWW9RLGlCQUFaLElBQ0E7QUFBQTtBQUFBLDhDQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsa0RBQUssV0FBVSxXQUFmO0FBRVFwUSw0REFBWW9RLGlCQUFaLENBQThCalYsR0FBOUIsQ0FBa0MsQ0FBQ2tWLElBQUQsRUFBT3hELEdBQVAsS0FBZTtBQUM3QywyREFBT0EsTUFBTSxDQUFOLEdBQVU7QUFBQTtBQUFBLDBEQUFNLEtBQUt3RCxLQUFLaFcsRUFBaEI7QUFBcUJnVyw2REFBS3pVO0FBQTFCLHFEQUFWLEdBQW1ELEVBQTFEO0FBQ0gsaURBRkQ7QUFGUiw2Q0FESjtBQVNRb0Usd0RBQVlvUSxpQkFBWixJQUFpQ3BRLFlBQVlvUSxpQkFBWixDQUE4Qi9VLE1BQTlCLEdBQXVDLENBQXhFLElBQ0E7QUFBQTtBQUFBLGtEQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFLLHlEQUFJMkUsWUFBWW9RLGlCQUFaLENBQThCL1UsTUFBOUIsR0FBdUMsQ0FBRTtBQUFsRDtBQURKO0FBVlIseUNBN0NSO0FBK0RJO0FBQUE7QUFBQSw4Q0FBRyxXQUFVLGFBQWI7QUFBMkIsbUZBQUssS0FBS3JCLFNBQWVBLEdBQUcsc0JBQTVCLEdBQTNCO0FBQWtGZ0csd0RBQVloRDtBQUE5RjtBQS9ESjtBQURKLGlDQUhSO0FBeUVRcVMsNENBQVlsVSxHQUFaLENBQWdCLENBQUNzVSxNQUFELEVBQVM5VCxDQUFULEtBQWU7QUFDM0Isd0NBQUkyVCxZQUFZRyxNQUFaLENBQUosRUFBeUI7O0FBRXJCLCtDQUFPO0FBQUMsMkRBQUQsQ0FBTyxRQUFQO0FBQUEsOENBQWdCLEtBQUs5VCxDQUFyQjtBQUdDQSxpREFBSyxDQUFMLElBQVUsQ0FBQyxDQUFDLENBQUM2VCxlQUFiLEdBQ0k7QUFBQTtBQUFBLGtEQUFJLEtBQUs3VCxDQUFUO0FBQ0k7QUFBQTtBQUFBLHNEQUFLLFdBQVUsNkVBQWY7QUFDSTtBQUFBO0FBQUEsMERBQUssV0FBVSw4Q0FBZjtBQUNJLCtGQUFLLEtBQUszQixTQUFlQSxHQUFHLDBDQUE1QixHQURKO0FBRUk7QUFBQTtBQUFBLDhEQUFHLFdBQVUsUUFBYjtBQUFBO0FBQTJCLGlFQUFLeEMsS0FBTCxDQUFXdUQsdUJBQVgsQ0FBbUMsQ0FBbkMsRUFBc0NhLElBQWpFO0FBQUE7QUFBQTtBQUZKLHFEQURKO0FBS0k7QUFBQTtBQUFBLDBEQUFLLFdBQVUsMEJBQWYsRUFBMEMsU0FBUyxNQUFNLEtBQUttRSxjQUFMLENBQW9CLFdBQXBCLENBQXpEO0FBQUE7QUFBQTtBQUxKO0FBREosNkNBREosR0FTWSxFQVpiO0FBZ0JFcEUsaURBQUssQ0FBTCxJQUFVLEtBQUtuRSxLQUFMLENBQVdnSSxXQUFyQixJQUFvQyxLQUFLaEksS0FBTCxDQUFXaUksS0FBWCxDQUFpQm5GLEdBQWpCLENBQXFCckMsUUFBckIsQ0FBOEIsU0FBOUIsQ0FBcEMsSUFBZ0YsS0FBS1QsS0FBTCxDQUFXdUQsdUJBQTNGLElBQXNILEtBQUt2RCxLQUFMLENBQVd1RCx1QkFBWCxDQUFtQ00sTUFBMUosR0FDSTtBQUFBO0FBQUEsa0RBQUssV0FBVSxzRkFBZjtBQUNJO0FBQUE7QUFBQSxzREFBSyxXQUFVLDhDQUFmO0FBQ0ksMkZBQUssS0FBS3JCLFNBQWVBLEdBQUcsMENBQTVCLEdBREo7QUFFSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsOERBQUcsV0FBVSxzQkFBYjtBQUFBO0FBQUEseURBREo7QUFFSTtBQUFBO0FBQUEsOERBQUksV0FBVSxpQkFBZCxFQUFnQyxPQUFPLEVBQUNxRSxVQUFVLE1BQVgsRUFBdkM7QUFBNEQsaUVBQUs3RyxLQUFMLENBQVd1RCx1QkFBWCxDQUFtQyxDQUFuQyxFQUFzQ2EsSUFBbEc7QUFBQTtBQUFBO0FBRko7QUFGSixpREFESjtBQVFJO0FBQUE7QUFBQSxzREFBSyxXQUFVLDBCQUFmLEVBQTBDLFNBQVMsTUFBTSxLQUFLbUUsY0FBTCxDQUFvQixRQUFwQixDQUF6RDtBQUFBO0FBQUE7QUFSSiw2Q0FESixHQVdNLEVBM0JQO0FBOEJDcEUsaURBQUssQ0FBTCxLQUFXLENBQUMsS0FBS2xFLEtBQUwsQ0FBV3VOLFlBQVosSUFBNEIsQ0FBQyxLQUFLdk4sS0FBTCxDQUFXdU4sWUFBWCxDQUF3QjNKLE1BQWhFLElBQ0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsZ0NBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFhO0FBQUE7QUFBQSwwREFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxxREFBYjtBQUEwRDtBQUFBO0FBQUEsMERBQU0sV0FBVSx5QkFBaEIsRUFBMEMsU0FBUyxLQUFLMlMsZUFBTCxDQUFxQnBVLElBQXJCLENBQTBCLElBQTFCLENBQW5EO0FBQUE7QUFBQTtBQUExRCxpREFESjtBQUVJO0FBQUE7QUFBQSxzREFBSyxXQUFVLGlCQUFmO0FBQ0k7QUFBQTtBQUFBLDBEQUFRLFdBQVksR0FBRSxLQUFLbkMsS0FBTCxDQUFXdU4sWUFBWCxJQUEyQixLQUFLdk4sS0FBTCxDQUFXdU4sWUFBWCxDQUF3QjNKLE1BQW5ELElBQTZELEtBQUs1RCxLQUFMLENBQVd1TixZQUFYLENBQXdCc0wsT0FBeEIsQ0FBZ0MsR0FBaEMsSUFBdUMsQ0FBQyxDQUFyRyxHQUF5RyxTQUF6RyxHQUFxSCxFQUFHLEVBQTlJLEVBQWlKLFNBQVMsS0FBSzdDLGlCQUFMLENBQXVCN1QsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0MsY0FBbEMsRUFBa0QsR0FBbEQsRUFBdUQsSUFBdkQsQ0FBMUo7QUFBQTtBQUFBLHFEQURKO0FBRUk7QUFBQTtBQUFBLDBEQUFRLFdBQVksR0FBRSxLQUFLbkMsS0FBTCxDQUFXdU4sWUFBWCxJQUEyQixLQUFLdk4sS0FBTCxDQUFXdU4sWUFBWCxDQUF3QjNKLE1BQW5ELElBQTZELEtBQUs1RCxLQUFMLENBQVd1TixZQUFYLENBQXdCc0wsT0FBeEIsQ0FBZ0MsR0FBaEMsSUFBdUMsQ0FBQyxDQUFyRyxHQUF5RyxTQUF6RyxHQUFxSCxFQUFHLEVBQTlJLEVBQWlKLFNBQVMsS0FBSzdDLGlCQUFMLENBQXVCN1QsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0MsY0FBbEMsRUFBa0QsR0FBbEQsRUFBdUQsSUFBdkQsQ0FBMUo7QUFBQTtBQUFBLHFEQUZKO0FBR0k7QUFBQTtBQUFBLDBEQUFRLFdBQVksR0FBRSxLQUFLbkMsS0FBTCxDQUFXdU4sWUFBWCxJQUEyQixLQUFLdk4sS0FBTCxDQUFXdU4sWUFBWCxDQUF3QjNKLE1BQW5ELElBQTZELEtBQUs1RCxLQUFMLENBQVd1TixZQUFYLENBQXdCc0wsT0FBeEIsQ0FBZ0MsR0FBaEMsSUFBdUMsQ0FBQyxDQUFyRyxHQUF5RyxTQUF6RyxHQUFxSCxFQUFHLEVBQTlJLEVBQWlKLFNBQVMsS0FBSzdDLGlCQUFMLENBQXVCN1QsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0MsY0FBbEMsRUFBa0QsR0FBbEQsRUFBdUQsSUFBdkQsQ0FBMUo7QUFBQTtBQUFBO0FBSEo7QUFGSiw2Q0FESixHQVNNLEVBdkNQO0FBMkNFMlYsbURBQUQsSUFBY0EsV0FBV0UsTUFBekIsSUFBcUNELGVBQXJDLEdBQ0k7QUFBQTtBQUFBLGtEQUFJLEtBQUs3VCxDQUFUO0FBQ0k7QUFBQTtBQUFBLHNEQUFLLFdBQVUsNkVBQWY7QUFDSTtBQUFBO0FBQUEsMERBQUssV0FBVSw4Q0FBZjtBQUNJLCtGQUFLLEtBQUszQixTQUFlQSxHQUFHLDBDQUE1QixHQURKO0FBRUk7QUFBQTtBQUFBLDhEQUFHLFdBQVUsUUFBYjtBQUFBO0FBQWdDLGlFQUFLeEMsS0FBTCxDQUFXdUQsdUJBQVgsQ0FBbUMsQ0FBbkMsRUFBc0NhLElBQXRFO0FBQUE7QUFBQTtBQUZKLHFEQURKO0FBS0k7QUFBQTtBQUFBLDBEQUFLLFdBQVUsMEJBQWYsRUFBMEMsU0FBUyxNQUFNLEtBQUttRSxjQUFMLENBQW9CLFdBQXBCLENBQXpEO0FBQUE7QUFBQTtBQUxKO0FBREosNkNBREosR0FTWSxFQXBEYjtBQXdEQyxxREFDQSxTQURBLEdBVVMsRUFsRVY7QUFzRUMsaURBQUt2SSxLQUFMLENBQVdzSyxnQkFBWCxJQUErQixDQUEvQixJQUFvQyxDQUFDLEtBQUtySyxLQUFMLENBQVdzTixVQUFoRCxLQUFnRXBKLEtBQUssQ0FBTCxJQUFVLEtBQUtsRSxLQUFMLENBQVd1TixZQUFyQixJQUFxQyxDQUFDLEtBQUt2TixLQUFMLENBQVd1TixZQUFYLENBQXdCM0osTUFBL0QsSUFBMkVNLEtBQUssQ0FBTCxJQUFVLEtBQUtsRSxLQUFMLENBQVd1TixZQUFyQixJQUFxQyxLQUFLdk4sS0FBTCxDQUFXdU4sWUFBWCxDQUF3QjNKLE1BQXZNLElBQ0k7QUFBQTtBQUFBLGtEQUFLLFdBQVUsZ0NBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFXLDRGQUFNLFdBQVUsUUFBaEIsR0FBWDtBQUEyQztBQUFBO0FBQUEsMERBQU0sV0FBVSx5QkFBaEIsRUFBMEMsU0FBUyxLQUFLMlMsZUFBTCxDQUFxQnBVLElBQXJCLENBQTBCLElBQTFCLENBQW5EO0FBQUE7QUFBQTtBQUEzQyxpREFESjtBQUVJO0FBQUE7QUFBQSxzREFBSyxXQUFVLGlCQUFmO0FBQ0k7QUFBQTtBQUFBLDBEQUFRLFdBQVksR0FBRSxLQUFLbkMsS0FBTCxDQUFXaUwsT0FBWCxJQUFzQixNQUF0QixJQUFnQyxLQUFLakwsS0FBTCxDQUFXc04sVUFBWCxJQUF5QixLQUF6RCxHQUFpRSxTQUFqRSxHQUE2RSxFQUFHLEVBQXRHLEVBQXlHLFNBQVMsS0FBSzBJLGlCQUFMLENBQXVCN1QsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0MsU0FBbEMsRUFBNkMsV0FBN0MsRUFBMEQsS0FBMUQsQ0FBbEg7QUFBQTtBQUFBLHFEQURKO0FBRUk7QUFBQTtBQUFBLDBEQUFRLFdBQVksR0FBRSxLQUFLbkMsS0FBTCxDQUFXaUwsT0FBWCxJQUFzQixNQUF0QixJQUFnQyxLQUFLakwsS0FBTCxDQUFXc04sVUFBWCxJQUF5QixNQUF6RCxHQUFrRSxTQUFsRSxHQUE4RSxFQUFHLEVBQXZHLEVBQTBHLFNBQVMsS0FBSzBJLGlCQUFMLENBQXVCN1QsSUFBdkIsQ0FBNEIsSUFBNUIsRUFBa0MsU0FBbEMsRUFBNkMsWUFBN0MsRUFBMkQsS0FBM0QsQ0FBbkg7QUFBQTtBQUFBO0FBRko7QUFGSiw2Q0FESixHQVFNLEVBOUVQO0FBa0ZDK0IsaURBQUssQ0FBTCxJQUFVLEtBQUtuRSxLQUFMLENBQVcrWSxTQUFyQixJQUFrQyxLQUFLL1ksS0FBTCxDQUFXK1ksU0FBWCxDQUFxQnZWLE1BQXJCLENBQTRCQyxLQUFLQSxFQUFFdVYsZUFBRixLQUFzQixvQkFBdkQsRUFBNkVuVixNQUEvRyxJQUF5SCxDQUFDLEtBQUs1RCxLQUFMLENBQVdzSyxVQUFySTtBQUNJOzs7QUFHQTtBQUFBO0FBQUEsa0RBQUssV0FBVSxtRUFBZjtBQUNJO0FBQUE7QUFBQSxzREFBSyxXQUFVLDRDQUFmO0FBQ0ksMkZBQUssV0FBVSxlQUFmLEVBQStCLE9BQU8sRUFBQ2tPLGNBQWEsZUFBZCxFQUF0QztBQURKLGlEQURKO0FBSUksOEVBQUMsd0JBQUQsZUFBb0IsS0FBS3pZLEtBQXpCLElBQWdDLGdCQUFlLG9CQUEvQztBQUpKLDZDQUpKLEdBVUssRUE1Rk47QUErRkg7QUFBQTtBQUFBO0FBRVEscURBQUtBLEtBQUwsQ0FBV2tJLFdBQVgsR0FBeUIsOEJBQUMsMEJBQUQsZUFBc0IsS0FBS2xJLEtBQTNCLElBQWtDLFNBQVM4WCxZQUFZRyxNQUFaLENBQTNDLEVBQWdFLEtBQUs5VCxDQUFyRSxFQUF3RSxNQUFNQSxDQUE5RSxJQUF6QixHQUErRyw4QkFBQywwQkFBRCxlQUFzQixLQUFLbkUsS0FBM0IsSUFBa0MsU0FBUzhYLFlBQVlHLE1BQVosQ0FBM0MsRUFBZ0UsS0FBSzlULENBQXJFLEVBQXdFLE1BQU1BLENBQTlFO0FBRnZILDZDQS9GRztBQXFHRixpREFBS25FLEtBQUwsQ0FBVzhQLHVCQUFYLElBQXNDLEtBQUs5UCxLQUFMLENBQVc4UCx1QkFBWCxDQUFtQ2pNLE1BQXpFLElBQ0csQ0FBQyxLQUFLNUQsS0FBTCxDQUFXc04sVUFEZixLQUM4QixDQUFDLEtBQUt0TixLQUFMLENBQVd1TixZQUFaLElBQTRCLENBQUMsS0FBS3ZOLEtBQUwsQ0FBV3VOLFlBQVgsQ0FBd0IzSixNQURuRixNQUMrRk0sS0FBSyxDQUFMLElBQVUsS0FBS25FLEtBQUwsQ0FBV2lDLEtBQVgsR0FBbUIsQ0FBbkIsSUFBd0JrQyxDQURqSSxJQUVHLEtBQUtuRSxLQUFMLENBQVcrUCx5QkFBWCxFQUZILEdBR0ssRUF4R0g7QUEyR0YsaURBQUsvUCxLQUFMLENBQVc4UCx1QkFBWCxJQUFzQyxLQUFLOVAsS0FBTCxDQUFXOFAsdUJBQVgsQ0FBbUNqTSxNQUF6RSxJQUFtRixLQUFLNUQsS0FBTCxDQUFXc04sVUFBOUYsS0FBNkcsS0FBS3ROLEtBQUwsQ0FBV3VOLFlBQVgsSUFBMkIsS0FBS3ZOLEtBQUwsQ0FBV3VOLFlBQVgsQ0FBd0IzSixNQUFoSyxLQUEySyxLQUFLN0QsS0FBTCxDQUFXaUMsS0FBWCxHQUFtQixDQUE5TCxJQUFtTWtDLEtBQU0sS0FBS25FLEtBQUwsQ0FBV2lDLEtBQVgsR0FBbUIsQ0FBNU4sR0FDRyxLQUFLakMsS0FBTCxDQUFXK1AseUJBQVgsRUFESCxHQUVLLEVBN0dIO0FBZ0hGLGlEQUFLL1AsS0FBTCxDQUFXOFAsdUJBQVgsSUFBc0MsS0FBSzlQLEtBQUwsQ0FBVzhQLHVCQUFYLENBQW1Dak0sTUFBekUsSUFBbUYsS0FBSzVELEtBQUwsQ0FBV3NOLFVBQTlGLEtBQTZHLEtBQUt0TixLQUFMLENBQVd1TixZQUFYLElBQTJCLEtBQUt2TixLQUFMLENBQVd1TixZQUFYLENBQXdCM0osTUFBaEssS0FBMkssS0FBSzdELEtBQUwsQ0FBV2lDLEtBQVgsR0FBbUIsQ0FBOUwsSUFBbU1rQyxLQUFLLENBQXhNLEdBQ0csS0FBS25FLEtBQUwsQ0FBVytQLHlCQUFYLEVBREgsR0FFSyxFQWxISDtBQXFIRixpREFBSy9QLEtBQUwsQ0FBVzhQLHVCQUFYLElBQXNDLEtBQUs5UCxLQUFMLENBQVc4UCx1QkFBWCxDQUFtQ2pNLE1BQXpFLElBQW1GLEtBQUs1RCxLQUFMLENBQVdzTixVQUE5RixLQUE2RyxLQUFLdE4sS0FBTCxDQUFXdU4sWUFBWCxJQUEyQixLQUFLdk4sS0FBTCxDQUFXdU4sWUFBWCxDQUF3QjNKLE1BQWhLLEtBQTJLTSxLQUFLLENBQWhMLEdBQ0csS0FBS25FLEtBQUwsQ0FBVytQLHlCQUFYLEVBREgsR0FFSyxFQXZISDtBQTJIQyw2Q0FBQyxDQUFDLENBQUNnSSxPQUFILElBQWM1VCxLQUFLMFQsWUFBWWhVLE1BQVosR0FBcUIsQ0FBeEMsSUFBNkMsS0FBSzdELEtBQUwsQ0FBV2dJLFdBQXhELElBQXVFLEtBQUtoSSxLQUFMLENBQVdpSSxLQUFYLENBQWlCbkYsR0FBakIsQ0FBcUJyQyxRQUFyQixDQUE4QixZQUE5QixDQUF2RSxJQUFzSCxLQUFLVCxLQUFMLENBQVd1RCx1QkFBakksSUFBNEosS0FBS3ZELEtBQUwsQ0FBV3VELHVCQUFYLENBQW1DTSxNQUEvTCxHQUNJO0FBQUE7QUFBQSxrREFBSSxLQUFLTSxDQUFUO0FBQ0k7QUFBQTtBQUFBLHNEQUFLLFdBQVUsNkVBQWY7QUFDSTtBQUFBO0FBQUEsMERBQUssV0FBVSw4Q0FBZjtBQUNJLCtGQUFLLEtBQUszQixTQUFlQSxHQUFHLDBDQUE1QixHQURKO0FBRUk7QUFBQTtBQUFBLDhEQUFHLFdBQVUsUUFBYjtBQUFBO0FBQWdDLGlFQUFLeEMsS0FBTCxDQUFXdUQsdUJBQVgsQ0FBbUMsQ0FBbkMsRUFBc0NhLElBQXRFO0FBQUE7QUFBQTtBQUZKLHFEQURKO0FBS0k7QUFBQTtBQUFBLDBEQUFLLFdBQVUsMEJBQWYsRUFBMEMsU0FBUyxNQUFNLEtBQUttRSxjQUFMLENBQW9CLFdBQXBCLENBQXpEO0FBQUE7QUFBQTtBQUxKO0FBREosNkNBREosR0FTWTtBQXBJYix5Q0FBUDtBQXdJSCxxQ0ExSUQsTUEwSU87QUFDSCwrQ0FBTyxFQUFQO0FBQ0g7QUFDSixpQ0E5SUQ7QUF6RVI7QUFQSjtBQURKO0FBUkosaUJBbkJKO0FBZ1FLLHFCQUFLdEksS0FBTCxDQUFXeVYsT0FBWCxHQUFxQiw4QkFBQyxnQkFBRCxJQUFRLFdBQVUsa0JBQWxCLEdBQXJCLEdBQStEO0FBaFFwRTtBQUhaLFNBREo7QUF5UUg7QUFwZ0JxQzs7a0JBd2dCM0JGLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JoQmY7Ozs7OztrQkFFZXlELHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7O2tCQUVlL1IsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7a0JBRWVnUyxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTUMsTUFBTixTQUFxQnRaLGdCQUFNQyxTQUEzQixDQUFxQztBQUNqQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RtWixzQkFBVSxJQUREO0FBRVQ3Tyx3QkFBWXZLLE1BQU0rSixjQUFOLElBQXdCL0osTUFBTStKLGNBQU4sQ0FBcUJRLFVBQTdDLEdBQTBEdkssTUFBTStKLGNBQU4sQ0FBcUJRLFVBQS9FLEdBQTRGLEtBRi9GO0FBR1Q4Tyw4QkFBa0IsS0FIVDtBQUlUdFcseUJBQWEvQyxNQUFNK0osY0FBTixJQUF3Qi9KLE1BQU0rSixjQUFOLENBQXFCaEgsV0FBN0MsR0FBMkQvQyxNQUFNK0osY0FBTixDQUFxQmhILFdBQWhGLEdBQThGLEVBSmxHO0FBS1Q7QUFDQXVXLDhCQUFrQixFQU5UO0FBT1RwTyxxQkFBUyxFQVBBO0FBUVRxQyx3QkFBWSxFQVJIO0FBU1RFLHlCQUFhLEVBVEo7QUFVVEQsMEJBQWMsRUFWTDtBQVdURSxvQkFBUSxFQVhDO0FBWVRFLDRCQUFnQixLQVpQO0FBYVRELDhCQUFrQixLQWJUO0FBY1RsSSw0QkFBZ0IsRUFkUDtBQWVUOFQsc0JBQVUsRUFmRDtBQWdCVEMsK0JBQW1CLEtBaEJWO0FBaUJUQyw0QkFBZ0IsS0FqQlA7QUFrQlRuUix5QkFBYSxFQWxCSjtBQW1CVG9SLHdCQUFZLEVBbkJIO0FBb0JUQyxtQ0FBdUIsRUFwQmQ7QUFxQlRDLGlDQUFxQixFQXJCWjtBQXNCVEMsNEJBQWdCLEtBdEJQO0FBdUJUQyw4QkFBa0IsRUF2QlQ7QUF3QlRDLHlDQUE2QixFQXhCcEI7QUF5QlRDLHVDQUEyQixFQXpCbEI7QUEwQlRDLDRCQUFnQixLQTFCUDtBQTJCVEMsOEJBQWtCLEtBM0JUO0FBNEJUQyxnQ0FBbUIsRUE1QlY7QUE2QlR0TSx1Q0FBMEIsRUE3QmpCO0FBOEJUdU0sc0NBQXlCLEVBOUJoQjtBQStCVEMsMEJBQWE7QUFDYjtBQWhDUyxTQUFiO0FBa0NIOztBQUVEamEsOEJBQTBCSixLQUExQixFQUFpQztBQUM3QixhQUFLTSxRQUFMLGNBQW1CTixNQUFNK0osY0FBekIsSUFBeUM2UCxxQkFBcUI1WixNQUFNK0osY0FBTixDQUFxQmhILFdBQXJCLEdBQW1DL0MsTUFBTStKLGNBQU4sQ0FBcUJoSCxXQUF4RCxHQUFzRSxFQUFwSSxFQUF3SXVGLGFBQWF0SSxNQUFNc0ksV0FBTixJQUFxQixFQUExSyxLQUFnTCxNQUFNO0FBQ2xMLGdCQUFJLEtBQUtySSxLQUFMLENBQVdxSSxXQUFYLElBQTBCLEtBQUtySSxLQUFMLENBQVdxSSxXQUFYLENBQXVCOEssUUFBckQsRUFBK0Q7QUFDM0QscUJBQUtwRCxpQkFBTDtBQUNIO0FBQ0osU0FKRDtBQUtBLFlBQUlzSyxtQ0FBbUMsRUFBdkM7QUFDQSxZQUFHdGEsTUFBTXVELHVCQUFOLElBQWlDdkQsTUFBTXVELHVCQUFOLENBQThCTSxNQUE5QixHQUF1QyxDQUEzRSxFQUE2RTtBQUN6RTdELGtCQUFNdUQsdUJBQU4sQ0FBOEJJLEdBQTlCLENBQWtDLENBQUM0VyxPQUFELEVBQVVDLENBQVYsS0FBZTtBQUM3Q0YsaURBQWlDOVksSUFBakMsQ0FBc0MrWSxRQUFRMVgsRUFBOUM7QUFDSCxhQUZEO0FBR0EsaUJBQUt2QyxRQUFMLENBQWMsRUFBQzhaLDBCQUF5QkUsZ0NBQTFCLEVBQWQ7QUFDSDtBQUNELFlBQUl0YSxNQUFNUSxZQUFOLElBQXNCLENBQUNSLE1BQU1RLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCLEtBQTVCLENBQTNCLEVBQStEO0FBQzNELGlCQUFLSCxRQUFMLENBQWMsRUFBRWtaLG1CQUFtQixLQUFyQixFQUFkO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZ0JBQUt4WixNQUFNNkgsT0FBTixJQUFpQjdILE1BQU02SCxPQUFOLENBQWM3RyxRQUFoQyxJQUE2Q2hCLE1BQU1nSSxXQUF2RCxFQUFvRTtBQUNoRSxxQkFBSzFILFFBQUwsQ0FBYyxFQUFFa1osbUJBQW1CLEtBQXJCLEVBQWQ7QUFDSCxhQUZELE1BRU87QUFDSCxvQkFBSXhaLE1BQU1LLGdCQUFOLElBQTBCLEtBQUtMLEtBQUwsQ0FBV0ssZ0JBQXpDLEVBQTJEO0FBQ3ZELHlCQUFLQyxRQUFMLENBQWMsRUFBRWtaLG1CQUFtQixJQUFyQixFQUEyQkMsZ0JBQWdCLElBQTNDLEVBQWQ7QUFDSDtBQUNKO0FBQ0o7QUFDRDtBQUNIOztBQUVEL1ksd0JBQW9CO0FBQ2hCLFlBQUcsS0FBS1YsS0FBTCxDQUFXeUksT0FBZCxFQUFzQjtBQUNsQixpQkFBS3pJLEtBQUwsQ0FBV3lhLFNBQVgsQ0FBcUIsSUFBckI7QUFDSDtBQUNELGFBQUtuYSxRQUFMLGNBQW1CLEtBQUtOLEtBQUwsQ0FBVytKLGNBQTlCLElBQThDNlAscUJBQXFCLEtBQUs1WixLQUFMLENBQVcrSixjQUFYLENBQTBCaEgsV0FBMUIsR0FBd0MsS0FBSy9DLEtBQUwsQ0FBVytKLGNBQVgsQ0FBMEJoSCxXQUFsRSxHQUFnRixFQUFuSjtBQUNBO0FBQ0EsWUFBSyxLQUFLL0MsS0FBTCxDQUFXNkgsT0FBWCxJQUFzQixLQUFLN0gsS0FBTCxDQUFXNkgsT0FBWCxDQUFtQjdHLFFBQTFDLElBQXVELEtBQUtoQixLQUFMLENBQVdnSSxXQUF0RSxFQUFtRjtBQUMvRSxpQkFBSzFILFFBQUwsQ0FBYyxFQUFFa1osbUJBQW1CLEtBQXJCLEVBQWQ7QUFDSCxTQUZELE1BRU87QUFDSCxnQkFBSSxLQUFLeFosS0FBTCxDQUFXUSxZQUFYLElBQTJCLEtBQUtSLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsUUFBeEIsQ0FBaUMsS0FBakMsQ0FBL0IsRUFBd0U7QUFDcEUscUJBQUtILFFBQUwsQ0FBYyxFQUFFa1osbUJBQW1CLElBQXJCLEVBQTJCQyxnQkFBZ0IsSUFBM0MsRUFBZDtBQUNIO0FBQ0o7QUFDSjtBQUNEbE4sbUJBQWU7QUFDWCxZQUFJQyxjQUFjO0FBQ2R0QixxQkFBUyxLQUFLakwsS0FBTCxDQUFXaUwsT0FETjtBQUVkcUMsd0JBQVksS0FBS3ROLEtBQUwsQ0FBV3NOLFVBRlQ7QUFHZEcsb0JBQVEsS0FBS3pOLEtBQUwsQ0FBV3lOLE1BSEw7QUFJZEYsMEJBQWMsS0FBS3ZOLEtBQUwsQ0FBV3VOLFlBSlg7QUFLZEMseUJBQWEsS0FBS3hOLEtBQUwsQ0FBV3dOLFdBTFY7QUFNZEcsNEJBQWdCLEtBQUszTixLQUFMLENBQVcyTixjQU5iO0FBT2RELDhCQUFrQixLQUFLMU4sS0FBTCxDQUFXME4sZ0JBUGY7QUFRZHBELHdCQUFZLEtBQUt0SyxLQUFMLENBQVdzSyxVQVJUO0FBU2R4SCx5QkFBYSxLQUFLOUMsS0FBTCxDQUFXMlosbUJBVFY7QUFVZC9MLHVDQUEwQixLQUFLNU4sS0FBTCxDQUFXNE47QUFWdkIsU0FBbEI7QUFZQSxZQUFJMU0sT0FBTztBQUNQLHdCQUFZLGFBREwsRUFDb0IsVUFBVSxtQkFEOUIsRUFDbUQsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQURwRixFQUN3RixVQUFVLENBRGxHLEVBQ3FHLFNBQVMsb0JBRDlHLEVBQ29JLE9BQU9OLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBRDNKLEVBQ3FLLGdCQUFnQixLQUFLaEIsS0FBTCxDQUFXdU4sWUFEaE0sRUFDOE0sa0JBQWtCLEtBQUt2TixLQUFMLENBQVcyTixjQUQzTyxFQUMyUCxvQkFBb0IsS0FBSzNOLEtBQUwsQ0FBVzBOLGdCQUQxUixFQUM0UyxVQUFVLEtBQUsxTixLQUFMLENBQVd5TixNQURqVSxFQUN5VSxjQUFjLEtBQUt6TixLQUFMLENBQVdzTixVQUFYLElBQXlCLEVBRGhYLEVBQ29YLFdBQVcsS0FBS3ROLEtBQUwsQ0FBV2lMLE9BQVgsSUFBc0IsRUFEclosRUFDeVosVUFBVSxLQUFLakwsS0FBTCxDQUFXd04sV0FEOWEsRUFDMmIxSyxhQUFhLEtBQUs5QyxLQUFMLENBQVcyWixtQkFBWCxJQUFrQyxFQUQxZSxFQUM4ZWMsMEJBQTBCLEtBQUt6YSxLQUFMLENBQVc0Tix5QkFBWCxJQUF3QyxFQURoakIsRUFDb2pCOE0saUJBQWlCLEtBQUsxYSxLQUFMLENBQVdtYSx3QkFBWCxJQUF1QztBQUQ1bUIsU0FBWDtBQUdBaFosc0JBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNQSxJQUFSLEVBQWQ7O0FBRUEsWUFBSXlaLHFCQUFxQixLQUFLQyxjQUFMLENBQW9CLEVBQXBCLEVBQXdCLElBQXhCLENBQXpCO0FBQ0EsWUFBSUQsa0JBQUosRUFBd0I7QUFDcEIsaUJBQUs1YSxLQUFMLENBQVd1TSxZQUFYLENBQXdCQyxXQUF4QjtBQUNIOztBQUVELGFBQUtsTSxRQUFMLENBQWMsRUFBRStZLGtCQUFrQixLQUFwQixFQUFkO0FBQ0g7O0FBRUR5QixnQkFBWUMsUUFBUSxLQUFwQixFQUEyQi9YLENBQTNCLEVBQThCOztBQUUxQixZQUFJK1gsS0FBSixFQUFXO0FBQ1AsZ0JBQUk1WixPQUFPO0FBQ1AsNEJBQVksYUFETCxFQUNvQixVQUFVLGdCQUQ5QixFQUNnRCxjQUFjQyxjQUFJQyxTQUFKLE1BQW1CLEVBRGpGLEVBQ3FGLFVBQVUsQ0FEL0YsRUFDa0csU0FBUyxrQkFEM0csRUFDK0gsT0FBT04sT0FBT0MsUUFBUCxDQUFnQkMsUUFEdEosRUFDZ0ssZ0JBQWdCLEtBQUtoQixLQUFMLENBQVd1TixZQUQzTCxFQUN5TSxrQkFBa0IsS0FBS3ZOLEtBQUwsQ0FBVzJOLGNBRHRPLEVBQ3NQLG9CQUFvQixLQUFLM04sS0FBTCxDQUFXME4sZ0JBRHJSLEVBQ3VTLFVBQVUsS0FBSzFOLEtBQUwsQ0FBV3lOLE1BRDVULEVBQ29VLGNBQWMsS0FBS3pOLEtBQUwsQ0FBV3NOLFVBQVgsSUFBeUIsRUFEM1csRUFDK1csV0FBVyxLQUFLdE4sS0FBTCxDQUFXaUwsT0FBWCxJQUFzQixFQURoWixFQUNvWixVQUFVLEtBQUtqTCxLQUFMLENBQVd3TjtBQUR6YSxhQUFYO0FBR0FyTSwwQkFBSUUsU0FBSixDQUFjLEVBQUVILE1BQU1BLElBQVIsRUFBZDtBQUNBLGdCQUFJNlosZUFBZTtBQUNmOVAseUJBQVMsRUFETTtBQUVmcUMsNEJBQVksRUFGRztBQUdmRSw2QkFBYSxFQUhFO0FBSWZELDhCQUFjLEVBSkM7QUFLZkUsd0JBQVEsRUFMTztBQU1mRSxnQ0FBZ0IsS0FORDtBQU9mRCxrQ0FBa0IsS0FQSDtBQVFmbEksZ0NBQWdCLEVBUkQ7QUFTZm1VLHFDQUFvQixFQVRMO0FBVWYvTCwyQ0FBMEI7O0FBVlgsYUFBbkI7QUFhQSxpQkFBS3ZOLFFBQUwsY0FDTzBhLFlBRFA7QUFFSTFTLDZCQUFhO0FBRmpCO0FBS0gsU0F2QkQsTUF1Qk87QUFDSCxnQkFBSW5ILE9BQU87QUFDUCw0QkFBWSxhQURMLEVBQ29CLFVBQVUsZ0JBRDlCLEVBQ2dELGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEakYsRUFDcUYsVUFBVSxDQUQvRixFQUNrRyxTQUFTLGtCQUQzRyxFQUMrSCxPQUFPTixPQUFPQyxRQUFQLENBQWdCQyxRQUR0SixFQUNnSyxnQkFBZ0IsS0FBS2hCLEtBQUwsQ0FBV3VOLFlBRDNMLEVBQ3lNLGtCQUFrQixLQUFLdk4sS0FBTCxDQUFXMk4sY0FEdE8sRUFDc1Asb0JBQW9CLEtBQUszTixLQUFMLENBQVcwTixnQkFEclIsRUFDdVMsVUFBVSxLQUFLMU4sS0FBTCxDQUFXeU4sTUFENVQsRUFDb1UsY0FBYyxLQUFLek4sS0FBTCxDQUFXc04sVUFBWCxJQUF5QixFQUQzVyxFQUMrVyxXQUFXLEtBQUt0TixLQUFMLENBQVdpTCxPQUFYLElBQXNCLEVBRGhaLEVBQ29aLFVBQVUsS0FBS2pMLEtBQUwsQ0FBV3dOO0FBRHphLGFBQVg7QUFHQXJNLDBCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTUEsSUFBUixFQUFkO0FBQ0EsaUJBQUtiLFFBQUw7QUFDSStZLGtDQUFrQixLQUR0QixFQUM2QmEsa0JBQWtCLEtBRC9DLEVBQ3NETCxnQkFBZ0IsS0FEdEUsRUFDNkVJLGdCQUFnQjtBQUQ3RixlQUVPLEtBQUtoYSxLQUFMLENBQVdxWixnQkFGbEI7QUFHSWhSLDZCQUFhO0FBSGpCO0FBS0E7QUFDSDtBQUNKOztBQUVEMlMscUJBQWlCdlgsSUFBakIsRUFBdUJ3UyxHQUF2QixFQUE0QkMsVUFBVSxLQUF0QyxFQUE2Q25ULENBQTdDLEVBQWdEO0FBQzVDLFlBQUlvVCxRQUFRRixHQUFaO0FBQ0EsWUFBSUMsT0FBSixFQUFhO0FBQ1QsZ0JBQUlFLGNBQWMsR0FBR0MsTUFBSCxDQUFVLEtBQUtyVyxLQUFMLENBQVd5RCxJQUFYLENBQVYsS0FBK0IsRUFBakQ7QUFDQSxnQkFBSTZTLFFBQVEsS0FBWjtBQUNBSCxvQkFBUUMsWUFBWTdTLE1BQVosQ0FBb0JyQyxJQUFELElBQVU7QUFDakMsb0JBQUlBLFFBQVErVSxHQUFaLEVBQWlCO0FBQ2JLLDRCQUFRLElBQVI7QUFDQSwyQkFBTyxLQUFQO0FBQ0g7QUFDRCx1QkFBTyxJQUFQO0FBQ0gsYUFOTyxDQUFSO0FBT0EsZ0JBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1JILHNCQUFNNVUsSUFBTixDQUFXMFUsR0FBWDtBQUNIO0FBQ0o7QUFDRCxZQUFJeFMsS0FBS2pELFFBQUwsQ0FBYyxTQUFkLENBQUosRUFBOEI7O0FBRTFCLGdCQUFJeVYsSUFBSXpWLFFBQUosQ0FBYSxXQUFiLEtBQTZCeVYsSUFBSXpWLFFBQUosQ0FBYSxZQUFiLENBQWpDLEVBQTZEOztBQUV6RCxvQkFBSSxLQUFLUixLQUFMLENBQVd5RCxJQUFYLEtBQW9CLE1BQXBCLEtBQWdDLEtBQUt6RCxLQUFMLENBQVcsWUFBWCxLQUE0QixLQUE1QixJQUFxQ2lXLElBQUl6VixRQUFKLENBQWEsV0FBYixDQUF0QyxJQUFxRSxLQUFLUixLQUFMLENBQVcsWUFBWCxLQUE0QixNQUE1QixJQUFzQ2lXLElBQUl6VixRQUFKLENBQWEsWUFBYixDQUExSSxDQUFKLEVBQTRLO0FBQ3hLLHlCQUFLSCxRQUFMLENBQWMsRUFBRTRLLFNBQVMsSUFBWCxFQUFpQnFDLFlBQVksSUFBN0IsRUFBZDtBQUNILGlCQUZELE1BRU87QUFDSCx5QkFBS2pOLFFBQUwsQ0FBYyxFQUFFNEssU0FBUyxNQUFYLEVBQW1CcUMsWUFBWTJJLElBQUl6VixRQUFKLENBQWEsV0FBYixJQUE0QixLQUE1QixHQUFvQyxNQUFuRSxFQUFkO0FBQ0g7QUFFSixhQVJELE1BUU87QUFDSCxxQkFBS0gsUUFBTCxDQUFjLEVBQUU0SyxTQUFTLEtBQUtqTCxLQUFMLENBQVd5RCxJQUFYLEtBQW9CMFMsS0FBcEIsR0FBNEIsSUFBNUIsR0FBbUNBLEtBQTlDLEVBQXFEN0ksWUFBWSxJQUFqRSxFQUFkO0FBQ0g7QUFDSixTQWJELE1BYU8sSUFBSTdKLEtBQUtqRCxRQUFMLENBQWMsZ0JBQWQsS0FBbUNpRCxLQUFLakQsUUFBTCxDQUFjLGtCQUFkLENBQXZDLEVBQTBFOztBQUU3RSxnQkFBSSxLQUFLUixLQUFMLENBQVd5RCxJQUFYLENBQUosRUFBc0I7QUFDbEIscUJBQUtwRCxRQUFMLENBQWMsRUFBRSxDQUFDb0QsSUFBRCxHQUFRLENBQUMsS0FBS3pELEtBQUwsQ0FBV3lELElBQVgsQ0FBWCxFQUFkO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUtwRCxRQUFMLENBQWMsRUFBRSxrQkFBa0JvRCxLQUFLakQsUUFBTCxDQUFjLGdCQUFkLElBQWtDMlYsS0FBbEMsR0FBMEMsQ0FBQ0EsS0FBL0QsRUFBc0Usb0JBQW9CMVMsS0FBS2pELFFBQUwsQ0FBYyxrQkFBZCxJQUFvQzJWLEtBQXBDLEdBQTRDLENBQUNBLEtBQXZJLEVBQWQ7QUFDSDtBQUNKLFNBUE0sTUFPQTtBQUNILGlCQUFLOVYsUUFBTCxDQUFjLEVBQUUsQ0FBQ29ELElBQUQsR0FBUSxLQUFLekQsS0FBTCxDQUFXeUQsSUFBWCxLQUFvQjBTLEtBQXBCLEdBQTRCLEVBQTVCLEdBQWlDQSxLQUEzQyxFQUFkO0FBQ0g7QUFFSjs7QUFFRHBHLHdCQUFvQjtBQUNoQixZQUFJN08sT0FBTztBQUNQLHdCQUFZLGFBREwsRUFDb0IsVUFBVSxzQkFEOUIsRUFDc0QsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQUR2RixFQUMyRixVQUFVLENBRHJHLEVBQ3dHLFNBQVMseUJBRGpILEVBQzRJLE9BQU9OLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBRG5LLEVBQzZLLGdCQUFnQixLQUFLaEIsS0FBTCxDQUFXdU4sWUFEeE0sRUFDc04sa0JBQWtCLEtBQUt2TixLQUFMLENBQVcyTixjQURuUCxFQUNtUSxvQkFBb0IsS0FBSzNOLEtBQUwsQ0FBVzBOLGdCQURsUyxFQUNvVCxVQUFVLEtBQUsxTixLQUFMLENBQVd5TixNQUR6VSxFQUNpVixjQUFjLEtBQUt6TixLQUFMLENBQVdzTixVQUFYLElBQXlCLEVBRHhYLEVBQzRYLFdBQVcsS0FBS3ROLEtBQUwsQ0FBV2lMLE9BQVgsSUFBc0IsRUFEN1osRUFDaWEsVUFBVSxLQUFLakwsS0FBTCxDQUFXd047QUFEdGIsU0FBWDtBQUdBck0sc0JBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNQSxJQUFSLEVBQWQ7QUFDQSxZQUFJOEgsWUFBWSxJQUFoQjtBQUNBLFlBQUllLE9BQU8sS0FBS2hLLEtBQUwsQ0FBV2dLLElBQXRCO0FBQ0EsWUFBSS9KLFFBQVEsS0FBS0QsS0FBakI7QUFDQSxZQUFJLEtBQUtBLEtBQUwsQ0FBV2lJLEtBQVgsQ0FBaUJuRixHQUFqQixDQUFxQnJDLFFBQXJCLENBQThCLFNBQTlCLEtBQTRDLEtBQUtULEtBQUwsQ0FBV2lJLEtBQVgsQ0FBaUJuRixHQUFqQixDQUFxQnJDLFFBQXJCLENBQThCLFlBQTlCLENBQTVDLElBQTJGLEtBQUtULEtBQUwsQ0FBV2lJLEtBQVgsQ0FBaUJuRixHQUFqQixDQUFxQnJDLFFBQXJCLENBQThCLFFBQTlCLENBQS9GLEVBQXdJO0FBQ3BJd0ksd0JBQVksS0FBS2pKLEtBQUwsQ0FBV2lJLEtBQVgsQ0FBaUJuRixHQUFqQixDQUFxQm9HLFdBQXJCLEVBQVo7QUFDQUQsd0JBQVlBLFVBQVUyQixLQUFWLENBQWdCLEdBQWhCLENBQVo7QUFDQTNCLHdCQUFZQSxVQUFVcEYsTUFBVixHQUFpQixDQUFqQixHQUFtQm9GLFVBQVUsQ0FBVixDQUFuQixHQUFnQ0EsVUFBVSxDQUFWLENBQTVDO0FBQ0g7QUFDRCxhQUFLakosS0FBTCxDQUFXa2Isd0JBQVgsQ0FBb0NqYixLQUFwQyxFQUEyQytKLElBQTNDLEVBQWlELEtBQWpELEVBQXdEZixTQUF4RCxFQUFtRSxDQUFDLEdBQUdrUyxJQUFKLEtBQWE7QUFDNUUsZ0JBQUlBLFFBQVFBLEtBQUssQ0FBTCxFQUFReFIsTUFBcEIsRUFBNEI7QUFDeEIscUJBQUtySixRQUFMLENBQWMsRUFBRW9aLFlBQVl5QixLQUFLLENBQUwsRUFBUXhSLE1BQXRCLEVBQThCZ1EsdUJBQXVCd0IsS0FBSyxDQUFMLEVBQVF4UixNQUE3RCxFQUFkO0FBQ0g7QUFDSixTQUpEOztBQU1BLGFBQUszSixLQUFMLENBQVdvYiwyQkFBWCxDQUF1Q25iLEtBQXZDLEVBQThDK0osSUFBOUMsRUFBb0QsS0FBcEQsRUFBMkRmLFNBQTNELEVBQXNFLENBQUMsR0FBR2tTLElBQUosS0FBYTtBQUMvRSxnQkFBSUEsUUFBUUEsS0FBSyxDQUFMLEVBQVF4UixNQUFwQixFQUE0QjtBQUN4QixxQkFBS3JKLFFBQUwsQ0FBYyxFQUFFd1osa0JBQWtCcUIsS0FBSyxDQUFMLEVBQVF4UixNQUE1QixFQUFvQ29RLDZCQUE2Qm9CLEtBQUssQ0FBTCxFQUFReFIsTUFBekUsRUFBZDtBQUNIO0FBQ0osU0FKRDtBQUtBLFlBQUkwUixpQkFBaUI7QUFDakJuUSxxQkFBUyxLQUFLakwsS0FBTCxDQUFXaUwsT0FESDtBQUVqQnFDLHdCQUFZLEtBQUt0TixLQUFMLENBQVdzTixVQUZOO0FBR2pCRSx5QkFBYSxLQUFLeE4sS0FBTCxDQUFXd04sV0FIUDtBQUlqQkQsMEJBQWMsR0FBRzhJLE1BQUgsQ0FBVSxLQUFLclcsS0FBTCxDQUFXdU4sWUFBckIsQ0FKRztBQUtqQkUsb0JBQVEsS0FBS3pOLEtBQUwsQ0FBV3lOLE1BTEY7QUFNakJFLDRCQUFnQixLQUFLM04sS0FBTCxDQUFXMk4sY0FOVjtBQU9qQkQsOEJBQWtCLEtBQUsxTixLQUFMLENBQVcwTixnQkFQWjtBQVFqQmxJLDRCQUFnQixHQUFHNlEsTUFBSCxDQUFVLEtBQUtyVyxLQUFMLENBQVd3RixjQUFyQixDQVJDO0FBU2pCbVUsaUNBQXFCLEdBQUd0RCxNQUFILENBQVUsS0FBS3JXLEtBQUwsQ0FBVzJaLG1CQUFyQixDQVRKO0FBVWpCL0wsdUNBQTJCLEdBQUd5SSxNQUFILENBQVUsS0FBS3JXLEtBQUwsQ0FBVzROLHlCQUFyQjtBQVZWLFNBQXJCO0FBWUEsYUFBS3ZOLFFBQUwsQ0FBYyxFQUFFK1ksa0JBQWtCLElBQXBCLEVBQTBCQyxrQkFBa0IrQixjQUE1QyxFQUFkO0FBQ0g7O0FBRURSLG1CQUFlUyxhQUFhLEVBQTVCLEVBQWdDQywyQkFBMkIsS0FBM0QsRUFBa0U7O0FBRTlELFlBQUlBLHdCQUFKLEVBQThCOztBQUUxQixnQkFBSTtBQUNBLG9CQUFJQyxjQUFjLENBQWxCO0FBQ0EscUJBQUssSUFBSWhZLE1BQVQsSUFBbUIsS0FBS3ZELEtBQUwsQ0FBV3FaLGdCQUE5QixFQUFnRDs7QUFFNUMsd0JBQUk5VixPQUFPL0MsUUFBUCxDQUFnQixjQUFoQixLQUFtQytDLE9BQU8vQyxRQUFQLENBQWdCLGdCQUFoQixDQUFuQyxJQUF3RStDLE9BQU8vQyxRQUFQLENBQWdCLHFCQUFoQixDQUE1RSxFQUFvSDs7QUFFaEgsNEJBQUksS0FBS1IsS0FBTCxDQUFXcVosZ0JBQVgsQ0FBNEI5VixNQUE1QixLQUF1QyxLQUFLdkQsS0FBTCxDQUFXdUQsTUFBWCxFQUFtQkssTUFBbkIsSUFBNkIsS0FBSzVELEtBQUwsQ0FBV3FaLGdCQUFYLENBQTRCOVYsTUFBNUIsRUFBb0NLLE1BQTVHLEVBQW9IOztBQUVoSDJYO0FBQ0E7QUFDSCx5QkFKRCxNQUlPOztBQUVILGlDQUFLLElBQUlDLFlBQVksQ0FBckIsRUFBd0JBLFlBQVksS0FBS3hiLEtBQUwsQ0FBV3VELE1BQVgsRUFBbUJLLE1BQXZELEVBQStENFgsV0FBL0QsRUFBNEU7QUFDeEUsb0NBQUksS0FBS3hiLEtBQUwsQ0FBV3FaLGdCQUFYLENBQTRCOVYsTUFBNUIsRUFBb0NzVixPQUFwQyxDQUE0QyxLQUFLN1ksS0FBTCxDQUFXdUQsTUFBWCxFQUFtQmlZLFNBQW5CLENBQTVDLEtBQThFLENBQUMsQ0FBbkYsRUFBc0Y7QUFDbEZEO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFFSixxQkFoQkQsTUFnQk8sSUFBSSxLQUFLdmIsS0FBTCxDQUFXdUQsTUFBWCxLQUFzQixLQUFLdkQsS0FBTCxDQUFXcVosZ0JBQVgsQ0FBNEI5VixNQUE1QixDQUExQixFQUErRDtBQUNsRWdZO0FBQ0E7QUFDSDtBQUNKO0FBQ0QsdUJBQU9BLFdBQVA7QUFDSCxhQTFCRCxDQTBCRSxPQUFPeFksQ0FBUCxFQUFVO0FBQ1IsdUJBQU8sS0FBUDtBQUNIO0FBRUosU0FoQ0QsTUFnQ087O0FBRUhzWSx5QkFBYTtBQUNUN04sNkJBQWEsRUFESjtBQUVURCw4QkFBYyxFQUZMO0FBR1RFLHdCQUFRLEVBSEM7QUFJVGdPLCtCQUFlLEVBSk47QUFLVDlCLHFDQUFvQixFQUxYO0FBTVQvTCwyQ0FBMEI7QUFOakIsYUFBYjtBQVFIO0FBQ0QsWUFBSTtBQUNBLGdCQUFJMk4sY0FBYyxDQUFsQjtBQUNBLGlCQUFLLElBQUloWSxNQUFULElBQW1COFgsVUFBbkIsRUFBK0I7O0FBRTNCLG9CQUFJOVgsT0FBTy9DLFFBQVAsQ0FBZ0IsZUFBaEIsQ0FBSixFQUFzQztBQUNsQyx3QkFBSSxLQUFLUixLQUFMLENBQVcsZ0JBQVgsS0FBZ0MsS0FBS0EsS0FBTCxDQUFXLGtCQUFYLENBQXBDLEVBQW9FO0FBQ2hFdWI7QUFDSDtBQUNKLGlCQUpELE1BSU8sSUFBSWhZLE9BQU8vQyxRQUFQLENBQWdCLGNBQWhCLEtBQW1DK0MsT0FBTy9DLFFBQVAsQ0FBZ0IsMkJBQWhCLENBQXZDLEVBQXFGO0FBQ3hGLHdCQUFJLEtBQUtSLEtBQUwsQ0FBV3VELE1BQVgsRUFBbUJLLE1BQXZCLEVBQStCO0FBQzNCMlg7QUFDSDtBQUNKLGlCQUpNLE1BSUEsSUFBSWhZLE9BQU8vQyxRQUFQLENBQWdCLHFCQUFoQixDQUFKLEVBQTRDO0FBQy9DLHdCQUFHLEtBQUtSLEtBQUwsQ0FBVyxxQkFBWCxLQUFvQyxFQUFwQyxJQUEwQyxLQUFLQSxLQUFMLENBQVcscUJBQVgsRUFBa0M0RCxNQUEvRSxFQUFzRjtBQUNsRjJYO0FBQ0g7QUFDSixpQkFKTSxNQUlBLElBQUlGLFdBQVc5WCxNQUFYLEtBQXNCLEtBQUt2RCxLQUFMLENBQVd1RCxNQUFYLENBQTFCLEVBQThDO0FBQ2pEZ1k7QUFDSDtBQUNKO0FBQ0QsbUJBQU9BLFdBQVA7QUFDSCxTQXJCRCxDQXFCRSxPQUFPeFksQ0FBUCxFQUFVO0FBQ1IsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBRUQ0TixzQkFBa0JtQixpQkFBbEIsRUFBcUM7QUFDakMsWUFBSUEscUJBQXFCQSxrQkFBa0JsTyxNQUEzQyxFQUFtRDtBQUMvQyxnQkFBSW1PLHFCQUFxQkQsa0JBQWtCdk8sTUFBbEIsQ0FBeUJDLEtBQUtBLEVBQUVDLElBQUYsSUFBVSxXQUF4QyxDQUF6QjtBQUNBLGdCQUFJdU8sbUJBQW1CRCxtQkFBbUJuTyxNQUFuQixHQUE0Qm1PLGtCQUE1QixHQUFpREQsaUJBQXhFOztBQUVBLG1CQUFPRSxpQkFBaUJqTyxNQUFqQixDQUF3QixDQUFDa08sS0FBRCxFQUFRaE8sSUFBUixFQUFjQyxDQUFkLEtBQW9CO0FBQy9DLG9CQUFJQSxLQUFLLENBQVQsRUFBWTtBQUNSK04sNkJBQVMsSUFBVDtBQUNIO0FBQ0RBLHlCQUFVLEdBQUVoTyxLQUFLRSxJQUFLLEVBQXRCO0FBQ0EsdUJBQU84TixLQUFQO0FBQ0gsYUFOTSxFQU1KLEVBTkksQ0FBUDtBQU9IO0FBQ0o7O0FBRUR0UixtQkFBZTtBQUNYLGFBQUtOLFFBQUwsQ0FBYztBQUNWK1osMEJBQWM7QUFESixTQUFkO0FBR0EsWUFBSXZaLGNBQWMsRUFBbEI7QUFDQSxZQUFJQyxPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QlIsUUFBekIsQ0FBa0MsUUFBbEMsS0FBK0NNLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCUixRQUF6QixDQUFrQyxXQUFsQyxDQUFuRCxFQUFtRztBQUMvRkssMEJBQWMsb0JBQWQ7QUFDSDs7QUFFRCxZQUFJSSxlQUFlLGlCQUFuQjtBQUNBLFlBQUlKLFdBQUosRUFBaUI7QUFDYkksNEJBQWlCLGdCQUFlSixXQUFZLEVBQTVDO0FBQ0g7QUFDRCxhQUFLZCxLQUFMLENBQVcyYixxQkFBWDtBQUNBLFlBQUl4YSxPQUFPO0FBQ1Asd0JBQVksa0NBREwsRUFDeUMsVUFBVSxzQ0FEbkQsRUFDMkYsY0FBY0MsY0FBSUMsU0FBSixNQUFtQixFQUQ1SCxFQUNnSSxVQUFVLENBRDFJLEVBQzZJLFNBQVMsc0NBRHRKLEVBQzhMLE9BQU9OLE9BQU9DLFFBQVAsQ0FBZ0JDO0FBRHJOLFNBQVg7QUFHQUcsc0JBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNQSxJQUFSLEVBQWQ7QUFDQSxhQUFLbkIsS0FBTCxDQUFXdUIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0JOLFlBQXhCO0FBQ0g7O0FBRUQwYSxtQkFBZTtBQUNYLGFBQUt0YixRQUFMLENBQWMsRUFBRW1aLGdCQUFnQixLQUFsQixFQUF5QlksY0FBYyxFQUF2QyxFQUEyQ2IsbUJBQW1CLEtBQTlELEVBQWQ7QUFDQSxZQUFJblMsU0FBU3VNLGNBQVQsQ0FBd0Isa0JBQXhCLENBQUosRUFBaUQ7QUFDN0N2TSxxQkFBU3VNLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDaUksS0FBNUMsQ0FBa0RDLE1BQWxELEdBQTJELEdBQTNEO0FBQ0g7QUFDSjs7QUFFREMsd0JBQW9CO0FBQ2hCLGFBQUt6YixRQUFMLENBQWMsRUFBRWtaLG1CQUFtQixLQUFyQixFQUFkO0FBQ0g7O0FBRUR3QyxxQkFBaUI7QUFDYixhQUFLMWIsUUFBTCxDQUFjLEVBQUUyYixvQkFBb0IsS0FBdEIsRUFBNkJ6QyxtQkFBbUIsS0FBaEQsRUFBZDtBQUNIOztBQUVEMEMsaUJBQWE7QUFDVCxZQUFJbmIsTUFBSixFQUFZO0FBQ1IsZ0JBQUkrQixNQUFNL0IsT0FBT0MsUUFBUCxDQUFnQm1iLElBQWhCLEdBQXVCLHNCQUFqQztBQUNBLGlCQUFLbmMsS0FBTCxDQUFXb2MsV0FBWCxDQUF1QnRaLEdBQXZCLEVBQTRCLENBQUN1WixHQUFELEVBQU1sYixJQUFOLEtBQWU7QUFDdkMsb0JBQUksQ0FBQ2tiLEdBQUwsRUFBVTtBQUNOLHlCQUFLL2IsUUFBTCxDQUFjLEVBQUVpWixVQUFVcFksS0FBS21iLFFBQWpCLEVBQWQ7QUFDSDtBQUNKLGFBSkQ7QUFLSDtBQUNKOztBQUVEQyxvQkFBZ0I7QUFDWixZQUFJcGIsT0FBTztBQUNQLHdCQUFZLGlDQURMLEVBQ3dDLFVBQVUsaUNBRGxELEVBQ3FGLGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFEdEgsRUFDMEgsVUFBVSxDQURwSSxFQUN1SSxTQUFTLHFDQURoSixFQUN1TCxPQUFPTixPQUFPQyxRQUFQLENBQWdCQztBQUQ5TSxTQUFYO0FBR0FHLHNCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTUEsSUFBUixFQUFkOztBQUVBLGFBQUtiLFFBQUwsQ0FBYyxFQUFFaUssWUFBWSxDQUFDLEtBQUt0SyxLQUFMLENBQVdzSyxVQUExQixFQUFkLEVBQXNELE1BQU07O0FBRXhELGdCQUFJaUMsY0FBYztBQUNkakMsNEJBQVksS0FBS3RLLEtBQUwsQ0FBV3NLLFVBRFQ7QUFFZHhILDZCQUFhLEtBQUs5QyxLQUFMLENBQVcyWixtQkFGVjtBQUdkck0sNEJBQVksS0FBS3ROLEtBQUwsQ0FBV3NOLFVBSFQ7QUFJZHJDLHlCQUFTLEtBQUtqTCxLQUFMLENBQVdpTCxPQUpOO0FBS2R1Qyw2QkFBYSxLQUFLeE4sS0FBTCxDQUFXd04sV0FMVjtBQU1kRCw4QkFBYyxLQUFLdk4sS0FBTCxDQUFXdU4sWUFOWDtBQU9kRSx3QkFBUSxLQUFLek4sS0FBTCxDQUFXeU4sTUFQTDtBQVFkRSxnQ0FBZ0IsS0FBSzNOLEtBQUwsQ0FBVzJOLGNBUmI7QUFTZEQsa0NBQWtCLEtBQUsxTixLQUFMLENBQVcwTixnQkFUZjtBQVVkbEksZ0NBQWdCO0FBVkYsYUFBbEI7QUFZQSxpQkFBS3pGLEtBQUwsQ0FBV3VNLFlBQVgsQ0FBd0JDLFdBQXhCO0FBQ0gsU0FmRDtBQWdCSDs7QUFFRGdRLHlCQUFxQmpDLE9BQXJCLEVBQThCO0FBQzFCLFlBQUlrQyxXQUFXLEdBQUduRyxNQUFILENBQVUsS0FBS3JXLEtBQUwsQ0FBVzROLHlCQUFyQixDQUFmO0FBQ0EsWUFBSTZPLE9BQU8sSUFBWDtBQUNBLFlBQUluRyxRQUFRLEtBQVo7QUFDQWtHLG1CQUFXQSxTQUFTalosTUFBVCxDQUFpQkMsQ0FBRCxJQUFPO0FBQzlCLGdCQUFJQSxLQUFLOFcsT0FBVCxFQUFrQjtBQUNkaEUsd0JBQVEsSUFBUjtBQUNBLHVCQUFPLEtBQVA7QUFDSDtBQUNELG1CQUFPLElBQVA7QUFDSCxTQU5VLENBQVg7QUFPQSxZQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSLGdCQUFHa0csU0FBUzVZLE1BQVQsSUFBbUIsQ0FBdEIsRUFBd0I7QUFDcEI0WSx5QkFBU2piLElBQVQsQ0FBYytZLE9BQWQ7QUFDSCxhQUZELE1BRUs7QUFDRDdELHVDQUFTQyxJQUFULENBQWMsRUFBRUMsS0FBSyxlQUFQLEVBQXdCQyxNQUFNLHNDQUE5QixFQUFkO0FBQ0g7QUFDSjs7QUFFRDZGLGFBQUtwYyxRQUFMLENBQWMsRUFBRXVOLDJCQUEyQjRPLFFBQTdCLEVBQWQ7QUFDSDtBQUNERSxzQkFBa0JqWixJQUFsQixFQUF3QjtBQUNwQixZQUFJQSxJQUFKLEVBQVU7QUFDTixpQkFBS3BELFFBQUwsQ0FBYyxFQUFFNFosa0JBQWtCLElBQXBCLEVBQTBCRCxnQkFBZ0IsSUFBMUMsRUFBZDtBQUNILFNBRkQsTUFFTztBQUNILGlCQUFLM1osUUFBTCxDQUFjLEVBQUU0WixrQkFBa0IsSUFBcEIsRUFBMEJMLGdCQUFnQixJQUExQyxFQUFkO0FBQ0g7QUFDSjs7QUFFRCtDLDJCQUF1QmxaLElBQXZCLEVBQTZCO0FBQ3pCLGFBQUtwRCxRQUFMLENBQWMsRUFBRTRaLGtCQUFrQixLQUFwQixFQUEyQkQsZ0JBQWdCLEtBQTNDLEVBQWtESixnQkFBZ0IsS0FBbEUsRUFBeUVNLG9CQUFtQixFQUE1RixFQUFkO0FBQ0g7O0FBRUQwQyxxQkFBaUJDLEtBQWpCLEVBQXdCO0FBQ3BCLFlBQUluVSxnQkFBZ0JtVSxNQUFNQyxNQUFOLENBQWEzRyxLQUFiLENBQW1CbE4sV0FBbkIsRUFBcEI7QUFDQSxhQUFLNUksUUFBTCxDQUFjLEVBQUM2WixvQkFBbUIyQyxNQUFNQyxNQUFOLENBQWEzRyxLQUFqQyxFQUFkO0FBQ0EsWUFBSTRHLHFCQUFxQixFQUF6QjtBQUNBLGFBQUsvYyxLQUFMLENBQVd5WixVQUFYLENBQXNCL1YsR0FBdEIsQ0FBMkJzWixJQUFELElBQVU7QUFDaEMsZ0JBQUlDLFlBQWFELEtBQUs3WSxJQUFOLENBQVk4RSxXQUFaLEVBQWhCO0FBQ0EsZ0JBQUlnVSxVQUFVemMsUUFBVixDQUFtQmtJLGFBQW5CLENBQUosRUFBdUM7QUFDbkMsb0JBQUl3VSxRQUFRRCxVQUFVcEUsT0FBVixDQUFrQm5RLGFBQWxCLENBQVo7QUFDQXFVLG1DQUFtQnhiLElBQW5CLENBQXdCLEVBQUVxQixJQUFJb2EsS0FBS3BhLEVBQVgsRUFBZXVCLE1BQU02WSxLQUFLN1ksSUFBMUIsRUFBZ0NsQixNQUFNaWEsS0FBdEMsRUFBeEI7QUFDSDtBQUNKLFNBTkQ7QUFPQUgsNkJBQXFCQSxtQkFBbUJJLElBQW5CLENBQXdCLENBQUMzWixDQUFELEVBQUk0WixDQUFKLEtBQVU7QUFDbkQsbUJBQU81WixFQUFFUCxJQUFGLEdBQVNtYSxFQUFFbmEsSUFBbEI7QUFDSCxTQUZvQixDQUFyQjtBQUdBLGFBQUs1QyxRQUFMLENBQWMsRUFBRXFaLHVCQUF1QnFELGtCQUF6QixFQUFkO0FBQ0g7O0FBRURNLHFCQUFpQlIsS0FBakIsRUFBd0I7QUFDcEIsWUFBSW5VLGdCQUFnQm1VLE1BQU1DLE1BQU4sQ0FBYTNHLEtBQWIsQ0FBbUJsTixXQUFuQixFQUFwQjtBQUNBLGFBQUs1SSxRQUFMLENBQWMsRUFBQzZaLG9CQUFtQjJDLE1BQU1DLE1BQU4sQ0FBYTNHLEtBQWpDLEVBQWQ7QUFDQSxZQUFJbUgscUJBQXFCLEVBQXpCO0FBQ0EsYUFBS3RkLEtBQUwsQ0FBVzZaLGdCQUFYLENBQTRCblcsR0FBNUIsQ0FBaUM2WixJQUFELElBQVU7QUFDdEMsZ0JBQUlDLFlBQWFELEtBQUtwWixJQUFOLENBQVk4RSxXQUFaLEVBQWhCO0FBQ0EsZ0JBQUl1VSxVQUFVaGQsUUFBVixDQUFtQmtJLGFBQW5CLENBQUosRUFBdUM7QUFDbkMsb0JBQUl3VSxRQUFRTSxVQUFVM0UsT0FBVixDQUFrQm5RLGFBQWxCLENBQVo7QUFDQTRVLG1DQUFtQi9iLElBQW5CLENBQXdCLEVBQUVxQixJQUFJMmEsS0FBSzNhLEVBQVgsRUFBZXVCLE1BQU1vWixLQUFLcFosSUFBMUIsRUFBZ0NsQixNQUFNaWEsS0FBdEMsRUFBeEI7QUFDSDtBQUNKLFNBTkQ7QUFPQUksNkJBQXFCQSxtQkFBbUJILElBQW5CLENBQXdCLENBQUMzWixDQUFELEVBQUk0WixDQUFKLEtBQVU7QUFDbkQsbUJBQU81WixFQUFFUCxJQUFGLEdBQVNtYSxFQUFFbmEsSUFBbEI7QUFDSCxTQUZvQixDQUFyQjtBQUdBLGFBQUs1QyxRQUFMLENBQWMsRUFBRXlaLDZCQUE2QndELGtCQUEvQixFQUFkO0FBQ0g7O0FBRURHLG1CQUFlQyxPQUFmLEVBQXdCO0FBQ3BCLFlBQUlsQixXQUFXLEdBQUduRyxNQUFILENBQVUsS0FBS3JXLEtBQUwsQ0FBVzJaLG1CQUFyQixDQUFmO0FBQ0EsWUFBSThDLE9BQU8sSUFBWDtBQUNBLFlBQUluRyxRQUFRLEtBQVo7QUFDQWtHLG1CQUFXQSxTQUFTalosTUFBVCxDQUFpQkMsQ0FBRCxJQUFPO0FBQzlCLGdCQUFJQSxLQUFLa2EsT0FBVCxFQUFrQjtBQUNkcEgsd0JBQVEsSUFBUjtBQUNBLHVCQUFPLEtBQVA7QUFDSDtBQUNELG1CQUFPLElBQVA7QUFDSCxTQU5VLENBQVg7QUFPQSxZQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSLGdCQUFHa0csU0FBUzVZLE1BQVQsSUFBbUIsQ0FBdEIsRUFBd0I7QUFDcEI0WSx5QkFBU2piLElBQVQsQ0FBY21jLE9BQWQ7QUFDSCxhQUZELE1BRUs7QUFDRGpILHVDQUFTQyxJQUFULENBQWMsRUFBRUMsS0FBSyxlQUFQLEVBQXdCQyxNQUFNLGdDQUE5QixFQUFkO0FBQ0g7QUFDSjs7QUFHRDZGLGFBQUtwYyxRQUFMLENBQWMsRUFBRXNaLHFCQUFxQjZDLFFBQXZCLEVBQWQ7QUFDSDs7QUFFRG1CLHFCQUFpQjtBQUNiLFlBQUlDLFNBQVMsRUFBYjtBQUNBLFlBQUluQixPQUFPLElBQVg7QUFDQSxZQUFJQSxLQUFLemMsS0FBTCxDQUFXMlosbUJBQVgsSUFBa0M4QyxLQUFLemMsS0FBTCxDQUFXMlosbUJBQVgsQ0FBK0IvVixNQUEvQixHQUF3QyxDQUExRSxJQUErRSxDQUFDNlksS0FBS3pjLEtBQUwsQ0FBV2lhLGdCQUEvRixFQUFpSDtBQUM3R3dDLGlCQUFLemMsS0FBTCxDQUFXeVosVUFBWCxDQUFzQi9WLEdBQXRCLENBQTBCLENBQUN4QyxJQUFELEVBQU9rVSxHQUFQLEtBQWU7QUFDckMsb0JBQUlxSCxLQUFLemMsS0FBTCxDQUFXMlosbUJBQVgsQ0FBK0JkLE9BQS9CLENBQXVDM1gsS0FBSzBCLEVBQTVDLElBQWtELENBQUMsQ0FBbkQsSUFBd0RnYixPQUFPaGEsTUFBUCxHQUFnQixDQUE1RSxFQUErRTtBQUMzRWdhLDJCQUFPcmMsSUFBUCxDQUFZO0FBQUE7QUFBQSwwQkFBSSxLQUFLNlQsR0FBVCxFQUFjLFVBQVVxSCxLQUFLZ0IsY0FBTCxDQUFvQnRiLElBQXBCLENBQXlCc2EsSUFBekIsRUFBK0J2YixLQUFLMEIsRUFBcEMsQ0FBeEI7QUFDUjtBQUFBO0FBQUEsOEJBQU8sV0FBVSxPQUFqQixFQUF5QixPQUFPLEVBQUVYLFlBQVksS0FBZCxFQUFxQjJFLFVBQVUsTUFBL0IsRUFBaEM7QUFBMEUxRixpQ0FBS2lELElBQS9FO0FBQ0kscUVBQU8sTUFBSyxVQUFaLEVBQXVCLFNBQVNzWSxLQUFLemMsS0FBTCxDQUFXMlosbUJBQVgsQ0FBK0JkLE9BQS9CLENBQXVDM1gsS0FBSzBCLEVBQTVDLElBQWtELENBQUMsQ0FBbkQsR0FBdUQsSUFBdkQsR0FBOEQsS0FBOUYsR0FESjtBQUVJLG9FQUFNLFdBQVUsV0FBaEI7QUFGSjtBQURRLHFCQUFaO0FBTUg7QUFDSixhQVREO0FBVUE2WixpQkFBS3pjLEtBQUwsQ0FBV3laLFVBQVgsQ0FBc0IvVixHQUF0QixDQUEwQixDQUFDeEMsSUFBRCxFQUFPa1UsR0FBUCxLQUFlO0FBQ3JDLG9CQUFJcUgsS0FBS3pjLEtBQUwsQ0FBVzJaLG1CQUFYLENBQStCZCxPQUEvQixDQUF1QzNYLEtBQUswQixFQUE1QyxLQUFtRCxDQUFDLENBQXBELElBQXlEZ2IsT0FBT2hhLE1BQVAsR0FBZ0IsQ0FBN0UsRUFBZ0Y7QUFDNUVnYSwyQkFBT3JjLElBQVAsQ0FBWTtBQUFBO0FBQUEsMEJBQUksS0FBSzZULEdBQVQsRUFBYyxVQUFVcUgsS0FBS2dCLGNBQUwsQ0FBb0J0YixJQUFwQixDQUF5QnNhLElBQXpCLEVBQStCdmIsS0FBSzBCLEVBQXBDLENBQXhCO0FBQ1I7QUFBQTtBQUFBLDhCQUFPLFdBQVUsT0FBakIsRUFBeUIsT0FBTyxFQUFFWCxZQUFZLEtBQWQsRUFBcUIyRSxVQUFVLE1BQS9CLEVBQWhDO0FBQTBFMUYsaUNBQUtpRCxJQUEvRTtBQUNJLHFFQUFPLE1BQUssVUFBWixFQUF1QixTQUFTc1ksS0FBS3pjLEtBQUwsQ0FBVzJaLG1CQUFYLENBQStCZCxPQUEvQixDQUF1QzNYLEtBQUswQixFQUE1QyxJQUFrRCxDQUFDLENBQW5ELEdBQXVELElBQXZELEdBQThELEtBQTlGLEdBREo7QUFFSSxvRUFBTSxXQUFVLFdBQWhCO0FBRko7QUFEUSxxQkFBWjtBQU1IO0FBQ0osYUFURDtBQVVILFNBckJELE1BcUJPO0FBQ0gsZ0JBQUk2WixLQUFLemMsS0FBTCxDQUFXaWEsZ0JBQWYsRUFBaUM7QUFDN0J3QyxxQkFBS3pjLEtBQUwsQ0FBVzBaLHFCQUFYLENBQWlDaFcsR0FBakMsQ0FBcUMsQ0FBQ3hDLElBQUQsRUFBT2tVLEdBQVAsS0FBZTtBQUNoRHdJLDJCQUFPcmMsSUFBUCxDQUFZO0FBQUE7QUFBQSwwQkFBSSxLQUFLNlQsR0FBVCxFQUFjLFVBQVVxSCxLQUFLZ0IsY0FBTCxDQUFvQnRiLElBQXBCLENBQXlCc2EsSUFBekIsRUFBK0J2YixLQUFLMEIsRUFBcEMsQ0FBeEI7QUFDUjtBQUFBO0FBQUEsOEJBQU8sV0FBVSxPQUFqQixFQUF5QixPQUFPLEVBQUVYLFlBQVksS0FBZCxFQUFxQjJFLFVBQVUsTUFBL0IsRUFBaEM7QUFBMEUxRixpQ0FBS2lELElBQS9FO0FBQ0kscUVBQU8sTUFBSyxVQUFaLEVBQXVCLFNBQVNzWSxLQUFLemMsS0FBTCxDQUFXMlosbUJBQVgsQ0FBK0JkLE9BQS9CLENBQXVDM1gsS0FBSzBCLEVBQTVDLElBQWtELENBQUMsQ0FBbkQsR0FBdUQsSUFBdkQsR0FBOEQsS0FBOUYsR0FESjtBQUVJLG9FQUFNLFdBQVUsV0FBaEI7QUFGSjtBQURRLHFCQUFaO0FBTUgsaUJBUEQ7QUFRSCxhQVRELE1BU087QUFDSDZaLHFCQUFLemMsS0FBTCxDQUFXeVosVUFBWCxDQUFzQi9WLEdBQXRCLENBQTBCLENBQUN4QyxJQUFELEVBQU9rVSxHQUFQLEtBQWU7QUFDckMsd0JBQUlxSCxLQUFLemMsS0FBTCxDQUFXMlosbUJBQVgsQ0FBK0IvVixNQUEvQixJQUF5QyxDQUF6QyxJQUE4Q3dSLE9BQU8sQ0FBekQsRUFBNEQ7QUFDeER3SSwrQkFBT3JjLElBQVAsQ0FBWTtBQUFBO0FBQUEsOEJBQUksS0FBSzZULEdBQVQsRUFBYyxVQUFVcUgsS0FBS2dCLGNBQUwsQ0FBb0J0YixJQUFwQixDQUF5QnNhLElBQXpCLEVBQStCdmIsS0FBSzBCLEVBQXBDLENBQXhCO0FBQ1I7QUFBQTtBQUFBLGtDQUFPLFdBQVUsT0FBakIsRUFBeUIsT0FBTyxFQUFFWCxZQUFZLEtBQWQsRUFBcUIyRSxVQUFVLE1BQS9CLEVBQWhDO0FBQTBFMUYscUNBQUtpRCxJQUEvRTtBQUNJLHlFQUFPLE1BQUssVUFBWixFQUF1QixTQUFTc1ksS0FBS3pjLEtBQUwsQ0FBVzJaLG1CQUFYLENBQStCZCxPQUEvQixDQUF1QzNYLEtBQUswQixFQUE1QyxJQUFrRCxDQUFDLENBQW5ELEdBQXVELElBQXZELEdBQThELEtBQTlGLEdBREo7QUFFSSx3RUFBTSxXQUFVLFdBQWhCO0FBRko7QUFEUSx5QkFBWjtBQU1IO0FBQ0osaUJBVEQ7QUFVSDtBQUNKO0FBQ0QsZUFBT2diLE1BQVA7QUFDSDs7QUFFREMscUJBQWlCO0FBQ2IsWUFBSUQsU0FBUyxFQUFiO0FBQ0EsWUFBSW5CLE9BQU8sSUFBWDtBQUNBLFlBQUlBLEtBQUt6YyxLQUFMLENBQVc0Tix5QkFBWCxDQUFxQ2hLLE1BQXJDLEdBQThDLENBQTlDLElBQW1ELENBQUM2WSxLQUFLemMsS0FBTCxDQUFXaWEsZ0JBQW5FLEVBQXFGO0FBQ2pGd0MsaUJBQUt6YyxLQUFMLENBQVc2WixnQkFBWCxDQUE0Qm5XLEdBQTVCLENBQWdDLENBQUN4QyxJQUFELEVBQU9rVSxHQUFQLEtBQWU7QUFDM0Msb0JBQUlxSCxLQUFLemMsS0FBTCxDQUFXNE4seUJBQVgsQ0FBcUNpTCxPQUFyQyxDQUE2QzNYLEtBQUswQixFQUFsRCxJQUF3RCxDQUFDLENBQXpELElBQThEZ2IsT0FBT2hhLE1BQVAsR0FBZ0IsQ0FBbEYsRUFBcUY7QUFDakZnYSwyQkFBT3JjLElBQVAsQ0FBWTtBQUFBO0FBQUEsMEJBQUksS0FBSzZULEdBQVQsRUFBYyxVQUFVcUgsS0FBS0Ysb0JBQUwsQ0FBMEJwYSxJQUExQixDQUErQnNhLElBQS9CLEVBQXFDdmIsS0FBSzBCLEVBQTFDLENBQXhCO0FBQ1I7QUFBQTtBQUFBLDhCQUFPLFdBQVUsT0FBakIsRUFBeUIsT0FBTyxFQUFFWCxZQUFZLEtBQWQsRUFBcUIyRSxVQUFVLE1BQS9CLEVBQWhDO0FBQTBFMUYsaUNBQUtpRCxJQUEvRTtBQUNJLHFFQUFPLE1BQUssVUFBWjtBQUNJLHlDQUFVc1ksS0FBS3pjLEtBQUwsQ0FBVzROLHlCQUFYLENBQXFDaUwsT0FBckMsQ0FBNkMzWCxLQUFLMEIsRUFBbEQsSUFBd0QsQ0FBQyxDQUF6RCxJQUE4RDZaLEtBQUt6YyxLQUFMLENBQVdtYSx3QkFBWCxDQUFvQ3RCLE9BQXBDLENBQTRDM1gsS0FBSzBCLEVBQWpELElBQXVELENBQUMsQ0FBdkgsR0FBNEgsSUFBNUgsR0FBbUksS0FEaEo7QUFFSSwwQ0FBVTZaLEtBQUt6YyxLQUFMLENBQVdtYSx3QkFBWCxDQUFvQ3RCLE9BQXBDLENBQTRDM1gsS0FBSzBCLEVBQWpELElBQXFELENBQUMsQ0FBdEQsR0FBMEQsSUFBMUQsR0FBK0Q7QUFGN0UsOEJBREo7QUFLSSxvRUFBTSxXQUFVLFdBQWhCO0FBTEo7QUFEUSxxQkFBWjtBQVNIO0FBQ0osYUFaRDtBQWFBNlosaUJBQUt6YyxLQUFMLENBQVc2WixnQkFBWCxDQUE0Qm5XLEdBQTVCLENBQWdDLENBQUN4QyxJQUFELEVBQU9rVSxHQUFQLEtBQWU7QUFDM0Msb0JBQUlxSCxLQUFLemMsS0FBTCxDQUFXNE4seUJBQVgsQ0FBcUNpTCxPQUFyQyxDQUE2QzNYLEtBQUswQixFQUFsRCxLQUF5RCxDQUFDLENBQTFELElBQStEZ2IsT0FBT2hhLE1BQVAsR0FBZ0IsQ0FBbkYsRUFBc0Y7QUFDbEZnYSwyQkFBT3JjLElBQVAsQ0FBWTtBQUFBO0FBQUEsMEJBQUksS0FBSzZULEdBQVQsRUFBYyxVQUFVcUgsS0FBS0Ysb0JBQUwsQ0FBMEJwYSxJQUExQixDQUErQnNhLElBQS9CLEVBQXFDdmIsS0FBSzBCLEVBQTFDLENBQXhCO0FBQ1I7QUFBQTtBQUFBLDhCQUFPLFdBQVUsT0FBakIsRUFBeUIsT0FBTyxFQUFFWCxZQUFZLEtBQWQsRUFBcUIyRSxVQUFVLE1BQS9CLEVBQWhDO0FBQTBFMUYsaUNBQUtpRCxJQUEvRTtBQUNJLHFFQUFPLE1BQUssVUFBWjtBQUNJLHlDQUFVc1ksS0FBS3pjLEtBQUwsQ0FBVzROLHlCQUFYLENBQXFDaUwsT0FBckMsQ0FBNkMzWCxLQUFLMEIsRUFBbEQsSUFBd0QsQ0FBQyxDQUF6RCxJQUE4RDZaLEtBQUt6YyxLQUFMLENBQVdtYSx3QkFBWCxDQUFvQ3RCLE9BQXBDLENBQTRDM1gsS0FBSzBCLEVBQWpELElBQXVELENBQUMsQ0FBdkgsR0FBNEgsSUFBNUgsR0FBbUksS0FEaEo7QUFFSSwwQ0FBVTZaLEtBQUt6YyxLQUFMLENBQVdtYSx3QkFBWCxDQUFvQ3RCLE9BQXBDLENBQTRDM1gsS0FBSzBCLEVBQWpELElBQXFELENBQUMsQ0FBdEQsR0FBMEQsSUFBMUQsR0FBK0Q7O0FBRjdFLDhCQURKO0FBTUksb0VBQU0sV0FBVSxXQUFoQjtBQU5KO0FBRFEscUJBQVo7QUFVSDtBQUNKLGFBYkQ7QUFjSCxTQTVCRCxNQTRCTztBQUNILGdCQUFJNlosS0FBS3pjLEtBQUwsQ0FBV2lhLGdCQUFmLEVBQWlDO0FBQzdCd0MscUJBQUt6YyxLQUFMLENBQVc4WiwyQkFBWCxDQUF1Q3BXLEdBQXZDLENBQTJDLENBQUN4QyxJQUFELEVBQU9rVSxHQUFQLEtBQWU7QUFDdER3SSwyQkFBT3JjLElBQVAsQ0FBWTtBQUFBO0FBQUEsMEJBQUksS0FBSzZULEdBQVQsRUFBYyxVQUFVcUgsS0FBS0Ysb0JBQUwsQ0FBMEJwYSxJQUExQixDQUErQnNhLElBQS9CLEVBQXFDdmIsS0FBSzBCLEVBQTFDLENBQXhCO0FBQ1I7QUFBQTtBQUFBLDhCQUFPLFdBQVUsT0FBakIsRUFBeUIsT0FBTyxFQUFFWCxZQUFZLEtBQWQsRUFBcUIyRSxVQUFVLE1BQS9CLEVBQWhDO0FBQTBFMUYsaUNBQUtpRCxJQUEvRTtBQUNJLHFFQUFPLE1BQUssVUFBWjtBQUNJLHlDQUFVc1ksS0FBS3pjLEtBQUwsQ0FBVzROLHlCQUFYLENBQXFDaUwsT0FBckMsQ0FBNkMzWCxLQUFLMEIsRUFBbEQsSUFBd0QsQ0FBQyxDQUF6RCxJQUE4RDZaLEtBQUt6YyxLQUFMLENBQVdtYSx3QkFBWCxDQUFvQ3RCLE9BQXBDLENBQTRDM1gsS0FBSzBCLEVBQWpELElBQXVELENBQUMsQ0FBdkgsR0FBNEgsSUFBNUgsR0FBbUksS0FEaEo7QUFFSSwwQ0FBVTZaLEtBQUt6YyxLQUFMLENBQVdtYSx3QkFBWCxDQUFvQ3RCLE9BQXBDLENBQTRDM1gsS0FBSzBCLEVBQWpELElBQXFELENBQUMsQ0FBdEQsR0FBMEQsSUFBMUQsR0FBK0Q7O0FBRjdFLDhCQURKO0FBTUksb0VBQU0sV0FBVSxXQUFoQjtBQU5KO0FBRFEscUJBQVo7QUFVSCxpQkFYRDtBQVlILGFBYkQsTUFhTztBQUNINloscUJBQUt6YyxLQUFMLENBQVc2WixnQkFBWCxDQUE0Qm5XLEdBQTVCLENBQWdDLENBQUN4QyxJQUFELEVBQU9rVSxHQUFQLEtBQWU7QUFDM0Msd0JBQUlxSCxLQUFLemMsS0FBTCxDQUFXNE4seUJBQVgsQ0FBcUNoSyxNQUFyQyxJQUErQyxDQUEvQyxJQUFvRHdSLE9BQU8sQ0FBL0QsRUFBa0U7QUFDOUR3SSwrQkFBT3JjLElBQVAsQ0FBWTtBQUFBO0FBQUEsOEJBQUksS0FBSzZULEdBQVQsRUFBYyxVQUFVcUgsS0FBS0Ysb0JBQUwsQ0FBMEJwYSxJQUExQixDQUErQnNhLElBQS9CLEVBQXFDdmIsS0FBSzBCLEVBQTFDLENBQXhCO0FBQ1I7QUFBQTtBQUFBLGtDQUFPLFdBQVUsT0FBakIsRUFBeUIsT0FBTyxFQUFFWCxZQUFZLEtBQWQsRUFBcUIyRSxVQUFVLE1BQS9CLEVBQWhDO0FBQTBFMUYscUNBQUtpRCxJQUEvRTtBQUNJLHlFQUFPLE1BQUssVUFBWjtBQUNJLDZDQUFVc1ksS0FBS3pjLEtBQUwsQ0FBVzROLHlCQUFYLENBQXFDaUwsT0FBckMsQ0FBNkMzWCxLQUFLMEIsRUFBbEQsSUFBd0QsQ0FBQyxDQUF6RCxJQUE4RDZaLEtBQUt6YyxLQUFMLENBQVdtYSx3QkFBWCxDQUFvQ3RCLE9BQXBDLENBQTRDM1gsS0FBSzBCLEVBQWpELElBQXVELENBQUMsQ0FBdkgsR0FBNEgsSUFBNUgsR0FBbUksS0FEaEo7QUFFSSw4Q0FBVTZaLEtBQUt6YyxLQUFMLENBQVdtYSx3QkFBWCxDQUFvQ3RCLE9BQXBDLENBQTRDM1gsS0FBSzBCLEVBQWpELElBQXFELENBQUMsQ0FBdEQsR0FBMEQsSUFBMUQsR0FBK0Q7QUFGN0Usa0NBREo7QUFLSSx3RUFBTSxXQUFVLFdBQWhCO0FBTEo7QUFEUSx5QkFBWjtBQVNIO0FBQ0osaUJBWkQ7QUFhSDtBQUNKO0FBQ0QsZUFBT2diLE1BQVA7QUFDSDs7QUFFRHpTLDJCQUFzQjtBQUNsQixZQUFHLEtBQUtwTCxLQUFMLENBQVd5SSxPQUFkLEVBQXNCO0FBQ2xCLGlCQUFLekksS0FBTCxDQUFXeWEsU0FBWCxDQUFxQnNELFNBQXJCO0FBQ0g7QUFDSjs7QUFFREMsc0JBQWtCQyxnQkFBZ0IsRUFBbEMsRUFBc0M7QUFDbEMsWUFBSUEsY0FBY3BhLE1BQWxCLEVBQTBCO0FBQ3RCLGlCQUFLdkQsUUFBTCxDQUFjLEVBQUUrWixjQUFjNEQsYUFBaEIsRUFBZDtBQUNILFNBRkQsTUFFTztBQUNILGlCQUFLM2QsUUFBTCxDQUFjLEVBQUUrWixjQUFjLEVBQWhCLEVBQWQ7QUFDSDtBQUNKOztBQUVEdFksbUJBQWVtYyxJQUFmLEVBQXFCO0FBQ2pCLGFBQUtqTyxLQUFMLENBQVdsTyxjQUFYLENBQTJCbWMsSUFBM0IsRUFBa0MsTUFBTTs7QUFFcEMsaUJBQUs1ZCxRQUFMLENBQWMsRUFBRStaLGNBQWMsRUFBaEIsRUFBZDtBQUNBLGdCQUFJakssVUFBVTtBQUNWLDRCQUFZLGFBREYsRUFDaUIsVUFBVSxrQ0FEM0IsRUFDK0QsY0FBY2hQLGNBQUlDLFNBQUosTUFBbUIsRUFEaEcsRUFDb0csVUFBVSxDQUQ5RyxFQUNpSCxTQUFTO0FBRDFILGFBQWQ7QUFHQUQsMEJBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNaVAsT0FBUixFQUFkO0FBRUgsU0FSRDtBQVNIOztBQUVEK04sa0JBQWM7O0FBRVYsZUFBTyxLQUFLbGUsS0FBTCxDQUFXb2EsWUFBWCxDQUF3QnhXLE1BQXhCLEdBQWlDLENBQWpDLEdBQ0g7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsY0FBZjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLHlCQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFHLFdBQVUsY0FBYjtBQUFBO0FBQUEscUJBREo7QUFFSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxxQkFBZjtBQUNJO0FBQUE7QUFBQTtBQUVRLGlDQUFLNUQsS0FBTCxDQUFXb2EsWUFBWCxDQUF3QjFXLEdBQXhCLENBQTRCLENBQUNnRyxNQUFELEVBQVN4RixDQUFULEtBQWU7QUFDdkMsdUNBQU87QUFBQTtBQUFBLHNDQUFJLEtBQUtBLENBQVQ7QUFDSDtBQUFBO0FBQUEsMENBQUcsV0FBVSxFQUFiLEVBQWdCLFNBQVMsS0FBS3BDLGNBQUwsQ0FBb0JLLElBQXBCLENBQXlCLElBQXpCLEVBQStCdUgsTUFBL0IsQ0FBekI7QUFBa0VBLCtDQUFPaUY7QUFBekU7QUFERyxpQ0FBUDtBQUdILDZCQUpEO0FBRlI7QUFESjtBQUZKO0FBREo7QUFESixTQURHLEdBa0JVLEVBbEJqQjtBQW9CSDs7QUFFRDVNLGFBQVM7QUFDTDtBQUNBO0FBQ0EsWUFBSStLLFVBQVUsS0FBSy9NLEtBQUwsQ0FBV3VELHVCQUFYLENBQW1DQyxNQUFuQyxDQUEwQ0MsS0FBS0EsRUFBRUMsSUFBRixJQUFVLEtBQXpELEVBQWdFQyxHQUFoRSxDQUFvRUYsS0FBS0EsRUFBRVosRUFBM0UsQ0FBZDtBQUNBLFlBQUk4TixjQUFjLEtBQUtDLGlCQUFMLENBQXVCLEtBQUs1USxLQUFMLENBQVd1RCx1QkFBbEMsQ0FBbEI7O0FBRUEsWUFBSTVDLGVBQWUsRUFBbkI7QUFDQSxZQUFJLEtBQUtYLEtBQUwsQ0FBV0ssZ0JBQVgsSUFBK0IsS0FBS0wsS0FBTCxDQUFXSyxnQkFBWCxDQUE0QkUsaUJBQS9ELEVBQWtGO0FBQzlFSSwyQkFBZSxLQUFLWCxLQUFMLENBQVdLLGdCQUFYLENBQTRCRSxpQkFBM0M7QUFDSDtBQUNELFlBQUksS0FBS1AsS0FBTCxDQUFXNkgsT0FBWCxJQUFzQixLQUFLN0gsS0FBTCxDQUFXNkgsT0FBWCxDQUFtQjdHLFFBQTdDLEVBQXVEO0FBQ25ETCwyQkFBZSxLQUFLWCxLQUFMLENBQVc2SCxPQUFYLENBQW1CN0csUUFBbEM7QUFDSDs7QUFFRCxlQUNJO0FBQUMsMkJBQUQsQ0FBTyxRQUFQO0FBQUE7QUFFUSxpQkFBS2YsS0FBTCxDQUFXb1osZ0JBQVgsR0FDSTtBQUFBO0FBQUE7QUFDSSx1REFBSyxXQUFVLHNDQUFmLEVBQXNELFNBQVMsS0FBS3lCLFdBQUwsQ0FBaUIxWSxJQUFqQixDQUFzQixJQUF0QixFQUE0QixLQUE1QixDQUEvRCxHQURKO0FBR0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsaUVBQWY7QUFFUSx5QkFBS25DLEtBQUwsQ0FBV2lhLGdCQUFYLEdBQThCLEVBQTlCLEdBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsV0FBZixFQUEyQixTQUFTLEtBQUtZLFdBQUwsQ0FBaUIxWSxJQUFqQixDQUFzQixJQUF0QixFQUE0QixLQUE1QixDQUFwQztBQUNJLCtEQUFLLEtBQUtJLFNBQWVBLEdBQUcsc0JBQTVCLEVBQW9ELEtBQUksT0FBeEQ7QUFESixxQkFIWjtBQU9JO0FBQUE7QUFBQSwwQkFBSyxXQUFVLHlDQUFmO0FBRVEsNkJBQUt2QyxLQUFMLENBQVdpYSxnQkFBWCxHQUNJO0FBQUMsMkNBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDSTtBQUFBO0FBQUEsa0NBQU0sV0FBVSxRQUFoQixFQUF5QixTQUFTLEtBQUswQyxzQkFBTCxDQUE0QnhhLElBQTVCLENBQWlDLElBQWpDLENBQWxDO0FBQTBFLHVFQUFLLEtBQUtJLFNBQWVBLEdBQUcsbUNBQTVCO0FBQTFFLDZCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGSjtBQUdJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLFNBQWhCLEVBQTBCLFNBQVMsS0FBS29hLHNCQUFMLENBQTRCeGEsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBbkM7QUFBQTtBQUFBO0FBSEoseUJBREosR0FPTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVGQscUJBUEo7QUFtQkk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsNkJBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBWSwwQkFBeUIsS0FBS25DLEtBQUwsQ0FBV2lhLGdCQUFYLEdBQThCLFFBQTlCLEdBQXlDLEVBQUcsRUFBdEY7QUFDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFJLFdBQVUsZUFBZDtBQUFBO0FBQUEsaUNBREo7QUFFSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxvQkFBZjtBQUNJO0FBQUE7QUFBQSwwQ0FBSyxXQUFZLG1CQUFrQixLQUFLamEsS0FBTCxDQUFXaUwsT0FBWCxJQUFzQixFQUF0QixHQUEyQixZQUEzQixHQUEwQyxFQUFHLEVBQWhGLEVBQW1GLFNBQVMsS0FBSytQLGdCQUFMLENBQXNCN1ksSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsU0FBakMsRUFBNEMsRUFBNUMsRUFBZ0QsS0FBaEQsQ0FBNUY7QUFDSTtBQUFBO0FBQUEsOENBQUssV0FBVSxhQUFmO0FBRVEsaURBQUtuQyxLQUFMLENBQVdpTCxPQUFYLElBQXNCLEVBQXRCLEdBQ0ksdUNBQUssS0FBSzFJLFNBQWVBLEdBQUcsaUNBQTVCLEVBQStELE9BQU8sRUFBRXNFLE9BQU8sRUFBVCxFQUF0RSxHQURKLEdBRU0sdUNBQUssS0FBS3RFLFNBQWVBLEdBQUcsZ0JBQTVCLEVBQThDLE9BQU8sRUFBRXNFLE9BQU8sRUFBVCxFQUFyRDtBQUpkLHlDQURKO0FBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKLHFDQURKO0FBWVEseUNBQUs5RyxLQUFMLENBQVdxSyxxQkFBWCxJQUFvQyxLQUFLckssS0FBTCxDQUFXc0ssZ0JBQVgsSUFBK0IsQ0FBbkUsR0FBdUUsRUFBdkUsR0FDTTtBQUFBO0FBQUEsMENBQUssV0FBWSxtQkFBa0IsS0FBS3JLLEtBQUwsQ0FBV2lMLE9BQVgsSUFBc0IsTUFBdEIsSUFBZ0MsS0FBS2pMLEtBQUwsQ0FBV3NOLFVBQVgsSUFBeUIsS0FBekQsR0FBaUUsWUFBakUsR0FBZ0YsRUFBRyxFQUF0SCxFQUF5SCxTQUFTLEtBQUswTixnQkFBTCxDQUFzQjdZLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLFNBQWpDLEVBQTRDLFdBQTVDLEVBQXlELEtBQXpELENBQWxJO0FBQ0U7QUFBQTtBQUFBLDhDQUFLLFdBQVUsYUFBZjtBQUVRLGlEQUFLbkMsS0FBTCxDQUFXaUwsT0FBWCxJQUFzQixNQUF0QixJQUFnQyxLQUFLakwsS0FBTCxDQUFXc04sVUFBWCxJQUF5QixLQUF6RCxHQUNJLHVDQUFLLEtBQUsvSyxTQUFlQSxHQUFHLGlDQUE1QixFQUErRCxPQUFPLEVBQUVzRSxPQUFPLEVBQVQsRUFBdEUsR0FESixHQUVNLHVDQUFLLEtBQUt0RSxTQUFlQSxHQUFHLDhCQUE1QixFQUE0RCxPQUFPLEVBQUVzRSxPQUFPLEVBQVQsRUFBbkU7QUFKZCx5Q0FERjtBQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURixxQ0FiZDtBQTJCUSx5Q0FBSzlHLEtBQUwsQ0FBV3FLLHFCQUFYLElBQW9DLEtBQUtySyxLQUFMLENBQVdzSyxnQkFBWCxJQUErQixDQUFuRSxHQUF1RSxFQUF2RSxHQUNNO0FBQUE7QUFBQSwwQ0FBSyxXQUFZLG1CQUFrQixLQUFLckssS0FBTCxDQUFXaUwsT0FBWCxJQUFzQixNQUF0QixJQUFnQyxLQUFLakwsS0FBTCxDQUFXc04sVUFBWCxJQUF5QixNQUF6RCxHQUFrRSxZQUFsRSxHQUFpRixFQUFHLEVBQXZILEVBQTBILFNBQVMsS0FBSzBOLGdCQUFMLENBQXNCN1ksSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsU0FBakMsRUFBNEMsWUFBNUMsRUFBMEQsS0FBMUQsQ0FBbkk7QUFDRTtBQUFBO0FBQUEsOENBQUssV0FBVSxhQUFmO0FBRVEsaURBQUtuQyxLQUFMLENBQVdpTCxPQUFYLElBQXNCLE1BQXRCLElBQWdDLEtBQUtqTCxLQUFMLENBQVdzTixVQUFYLElBQXlCLE1BQXpELEdBQ0ksdUNBQUssS0FBSy9LLFNBQWVBLEdBQUcsK0JBQTVCLEVBQTZELE9BQU8sRUFBRXNFLE9BQU8sRUFBVCxFQUFwRSxHQURKLEdBRU0sdUNBQUssS0FBS3RFLFNBQWVBLEdBQUcsNEJBQTVCLEVBQTBELE9BQU8sRUFBRXNFLE9BQU8sRUFBVCxFQUFqRTtBQUpkLHlDQURGO0FBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGLHFDQTVCZDtBQXdDSTtBQUFBO0FBQUEsMENBQUssV0FBWSxtQkFBa0IsS0FBSzdHLEtBQUwsQ0FBV2lMLE9BQVgsSUFBc0IsVUFBdEIsR0FBbUMsWUFBbkMsR0FBa0QsRUFBRyxFQUF4RixFQUEyRixTQUFTLEtBQUsrUCxnQkFBTCxDQUFzQjdZLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLFNBQWpDLEVBQTRDLFVBQTVDLEVBQXdELEtBQXhELENBQXBHO0FBQ0k7QUFBQTtBQUFBLDhDQUFLLFdBQVUsYUFBZjtBQUVRLGlEQUFLbkMsS0FBTCxDQUFXaUwsT0FBWCxJQUFzQixVQUF0QixHQUNJLHVDQUFLLEtBQUsxSSxTQUFlQSxHQUFHLGlDQUE1QixFQUErRCxPQUFPLEVBQUVzRSxPQUFPLEVBQVQsRUFBdEUsR0FESixHQUVNLHVDQUFLLEtBQUt0RSxTQUFlQSxHQUFHLDhCQUE1QixFQUE0RCxPQUFPLEVBQUVzRSxPQUFPLEVBQVQsRUFBbkU7QUFKZCx5Q0FESjtBQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSixxQ0F4Q0o7QUFrREk7QUFBQTtBQUFBLDBDQUFLLFdBQVksbUJBQWtCLEtBQUs3RyxLQUFMLENBQVdpTCxPQUFYLElBQXNCLFlBQXRCLEdBQXFDLFlBQXJDLEdBQW9ELEVBQUcsRUFBMUYsRUFBNkYsU0FBUyxLQUFLK1AsZ0JBQUwsQ0FBc0I3WSxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxTQUFqQyxFQUE0QyxZQUE1QyxFQUEwRCxLQUExRCxDQUF0RztBQUNJO0FBQUE7QUFBQSw4Q0FBSyxXQUFVLGFBQWY7QUFFUSxpREFBS25DLEtBQUwsQ0FBV2lMLE9BQVgsSUFBc0IsWUFBdEIsR0FDSSx1Q0FBSyxLQUFLMUksU0FBZUEsR0FBRyw0QkFBNUIsRUFBMEQsT0FBTyxFQUFFc0UsT0FBTyxFQUFULEVBQWpFLEdBREosR0FFTSx1Q0FBSyxLQUFLdEUsU0FBZUEsR0FBRyx5QkFBNUIsRUFBdUQsT0FBTyxFQUFFc0UsT0FBTyxFQUFULEVBQTlEO0FBSmQseUNBREo7QUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFsREo7QUFGSiw2QkFESjtBQWlFSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxtQkFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSSxXQUFVLGVBQWQ7QUFBQTtBQUFBLGlDQURKO0FBRUk7QUFBQTtBQUFBLHNDQUFLLFdBQVUsYUFBZjtBQUNJO0FBQUE7QUFBQSwwQ0FBUSxXQUFZLFlBQVcsS0FBSzdHLEtBQUwsQ0FBV3dOLFdBQVgsSUFBMEIsR0FBMUIsR0FBZ0MsV0FBaEMsR0FBOEMsRUFBRyxFQUFoRixFQUFtRixTQUFTLEtBQUt3TixnQkFBTCxDQUFzQjdZLElBQXRCLENBQTJCLElBQTNCLEVBQWlDLGFBQWpDLEVBQWdELEdBQWhELEVBQXFELEtBQXJELENBQTVGO0FBR1EsNkNBQUtuQyxLQUFMLENBQVd3TixXQUFYLElBQTBCLEdBQTFCLEdBQ0ksdUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUtqTCxTQUFlQSxHQUFHLGdDQUFyRCxHQURKLEdBRU0sdUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUtBLFNBQWVBLEdBQUcsdUNBQXJELEdBTGQ7QUFBQTtBQUFBLHFDQURKO0FBU0k7QUFBQTtBQUFBLDBDQUFRLFdBQVksWUFBVyxLQUFLdkMsS0FBTCxDQUFXd04sV0FBWCxJQUEwQixHQUExQixHQUFnQyxXQUFoQyxHQUE4QyxFQUFHLEVBQWhGLEVBQW1GLFNBQVMsS0FBS3dOLGdCQUFMLENBQXNCN1ksSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsYUFBakMsRUFBZ0QsR0FBaEQsRUFBcUQsS0FBckQsQ0FBNUY7QUFFUSw2Q0FBS25DLEtBQUwsQ0FBV3dOLFdBQVgsSUFBMEIsR0FBMUIsR0FDSSx1Q0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS2pMLFNBQWVBLEdBQUcsZ0NBQXJELEdBREosR0FFTSx1Q0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS0EsU0FBZUEsR0FBRyx1Q0FBckQsR0FKZDtBQUFBO0FBQUEscUNBVEo7QUFnQkk7QUFBQTtBQUFBLDBDQUFRLFdBQVksWUFBVyxLQUFLdkMsS0FBTCxDQUFXd04sV0FBWCxJQUEwQixLQUExQixHQUFrQyxXQUFsQyxHQUFnRCxFQUFHLEVBQWxGLEVBQXFGLFNBQVMsS0FBS3dOLGdCQUFMLENBQXNCN1ksSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsYUFBakMsRUFBZ0QsS0FBaEQsRUFBdUQsS0FBdkQsQ0FBOUY7QUFHUSw2Q0FBS25DLEtBQUwsQ0FBV3dOLFdBQVgsSUFBMEIsS0FBMUIsR0FDSSx1Q0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS2pMLFNBQWVBLEdBQUcsZ0NBQXJELEdBREosR0FFTSx1Q0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBS0EsU0FBZUEsR0FBRyx1Q0FBckQsR0FMZDtBQUFBO0FBQUE7QUFoQko7QUFGSiw2QkFqRUo7QUE2Rkk7QUFBQTtBQUFBLGtDQUFLLFdBQVUsbUJBQWY7QUFDSTtBQUFBO0FBQUEsc0NBQUksV0FBVSxlQUFkO0FBQUE7QUFBQSxpQ0FESjtBQUVJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLGFBQWY7QUFDSTtBQUFBO0FBQUEsMENBQVEsV0FBWSxZQUFXLEtBQUt2QyxLQUFMLENBQVd1TixZQUFYLElBQTJCLEtBQUt2TixLQUFMLENBQVd1TixZQUFYLENBQXdCM0osTUFBbkQsSUFBNkQsS0FBSzVELEtBQUwsQ0FBV3VOLFlBQVgsQ0FBd0JzTCxPQUF4QixDQUFnQyxHQUFoQyxJQUF1QyxDQUFDLENBQXJHLEdBQXlHLFdBQXpHLEdBQXVILEVBQUcsRUFBekosRUFBNEosU0FBUyxLQUFLbUMsZ0JBQUwsQ0FBc0I3WSxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxjQUFqQyxFQUFpRCxHQUFqRCxFQUFzRCxJQUF0RCxDQUFySztBQUFBO0FBQUEscUNBREo7QUFFSTtBQUFBO0FBQUEsMENBQVEsV0FBWSxZQUFXLEtBQUtuQyxLQUFMLENBQVd1TixZQUFYLElBQTJCLEtBQUt2TixLQUFMLENBQVd1TixZQUFYLENBQXdCM0osTUFBbkQsSUFBNkQsS0FBSzVELEtBQUwsQ0FBV3VOLFlBQVgsQ0FBd0JzTCxPQUF4QixDQUFnQyxHQUFoQyxJQUF1QyxDQUFDLENBQXJHLEdBQXlHLFdBQXpHLEdBQXVILEVBQUcsRUFBekosRUFBNEosU0FBUyxLQUFLbUMsZ0JBQUwsQ0FBc0I3WSxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxjQUFqQyxFQUFpRCxHQUFqRCxFQUFzRCxJQUF0RCxDQUFySztBQUFBO0FBQUEscUNBRko7QUFHSTtBQUFBO0FBQUEsMENBQVEsV0FBWSxZQUFXLEtBQUtuQyxLQUFMLENBQVd1TixZQUFYLElBQTJCLEtBQUt2TixLQUFMLENBQVd1TixZQUFYLENBQXdCM0osTUFBbkQsSUFBNkQsS0FBSzVELEtBQUwsQ0FBV3VOLFlBQVgsQ0FBd0JzTCxPQUF4QixDQUFnQyxHQUFoQyxJQUF1QyxDQUFDLENBQXJHLEdBQXlHLFdBQXpHLEdBQXVILEVBQUcsRUFBekosRUFBNEosU0FBUyxLQUFLbUMsZ0JBQUwsQ0FBc0I3WSxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxjQUFqQyxFQUFpRCxHQUFqRCxFQUFzRCxJQUF0RCxDQUFySztBQUFBO0FBQUE7QUFISjtBQUZKLDZCQTdGSjtBQXFHSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxtQkFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSSxXQUFVLGVBQWQ7QUFBQTtBQUFBLGlDQURKO0FBRUk7QUFBQTtBQUFBLHNDQUFLLFdBQVUsNkJBQWY7QUFDSTtBQUFBO0FBQUEsMENBQVEsV0FBWSxZQUFXLEtBQUtuQyxLQUFMLENBQVd5TixNQUFYLElBQXFCLEdBQXJCLEdBQTJCLFdBQTNCLEdBQXlDLEVBQUcsRUFBM0UsRUFBOEUsU0FBUyxLQUFLdU4sZ0JBQUwsQ0FBc0I3WSxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxRQUFqQyxFQUEyQyxHQUEzQyxFQUFnRCxLQUFoRCxDQUF2RjtBQUFBO0FBQUEscUNBREo7QUFFSTtBQUFBO0FBQUEsMENBQVEsV0FBWSxZQUFXLEtBQUtuQyxLQUFMLENBQVd5TixNQUFYLElBQXFCLEdBQXJCLEdBQTJCLFdBQTNCLEdBQXlDLEVBQUcsRUFBM0UsRUFBOEUsU0FBUyxLQUFLdU4sZ0JBQUwsQ0FBc0I3WSxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxRQUFqQyxFQUEyQyxHQUEzQyxFQUFnRCxLQUFoRCxDQUF2RjtBQUFBO0FBQUE7QUFGSjtBQUZKO0FBckdKLHlCQURKO0FBdUhRLDZCQUFLbkMsS0FBTCxDQUFXeVosVUFBWCxJQUF5QixLQUFLelosS0FBTCxDQUFXeVosVUFBWCxDQUFzQjdWLE1BQXRCLEdBQStCLENBQXhELEdBQ0k7QUFBQTtBQUFBLDhCQUFLLFdBQVksNkJBQTRCLEtBQUs1RCxLQUFMLENBQVc0WixjQUFYLEdBQTRCLFFBQTVCLEdBQXVDLEVBQUcsRUFBdkY7QUFDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxzQkFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSSxXQUFVLGtCQUFkO0FBQUE7QUFDQyx5Q0FBSzVaLEtBQUwsQ0FBV3laLFVBQVgsQ0FBc0I3VixNQUF0QixHQUErQixDQUEvQixHQUNPO0FBQUE7QUFBQSwwQ0FBTSxTQUFTLEtBQUs4WSxpQkFBTCxDQUF1QnZhLElBQXZCLENBQTRCLElBQTVCLEVBQWtDLElBQWxDLENBQWY7QUFBeUQsNkNBQUtuQyxLQUFMLENBQVdpYSxnQkFBWCxHQUE4QixFQUE5QixHQUFvQyxJQUFHLEtBQUtqYSxLQUFMLENBQVd5WixVQUFYLENBQXNCN1YsTUFBdEIsR0FBK0IsQ0FBRTtBQUFqSSxxQ0FEUCxHQUdTO0FBSlYsaUNBREo7QUFPSTtBQUFBO0FBQUEsc0NBQUssV0FBVSx5QkFBZjtBQUNLLHlDQUFLNUQsS0FBTCxDQUFXeVosVUFBWCxDQUFzQjdWLE1BQXRCLEdBQStCLENBQS9CLEdBQ0c7QUFBQTtBQUFBLDBDQUFLLFdBQVUsYUFBZjtBQUNJLGlGQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLGlCQUEvQixFQUFpRCxVQUFVLEtBQUtnWixnQkFBTCxDQUFzQnphLElBQXRCLENBQTJCLElBQTNCLENBQTNELEVBQTZGLE1BQUssT0FBbEcsRUFBMEcsU0FBUyxLQUFLdWEsaUJBQUwsQ0FBdUJ2YSxJQUF2QixDQUE0QixJQUE1QixFQUFrQyxJQUFsQyxDQUFuSCxFQUE0SixPQUFPLEtBQUtuQyxLQUFMLENBQVdrYSxrQkFBOUs7QUFESixxQ0FESCxHQVFLLEVBVFY7QUFVSTtBQUFBO0FBQUEsMENBQUksV0FBVSxxQkFBZDtBQUNLLDZDQUFLeUQsY0FBTDtBQURMO0FBVko7QUFQSjtBQURKLHlCQURKLEdBeUJNLEVBaEpkO0FBa0pLLDZCQUFLM2QsS0FBTCxDQUFXNlosZ0JBQVgsSUFBK0IsS0FBSzdaLEtBQUwsQ0FBVzZaLGdCQUFYLENBQTRCalcsTUFBNUIsR0FBcUMsQ0FBcEUsR0FDRztBQUFBO0FBQUEsOEJBQUssV0FBWSw2QkFBNEIsS0FBSzVELEtBQUwsQ0FBV2dhLGNBQVgsR0FBNEIsUUFBNUIsR0FBdUMsRUFBRyxFQUF2RjtBQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLHNCQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFJLFdBQVUsa0JBQWQ7QUFBQTtBQUNLLHlDQUFLaGEsS0FBTCxDQUFXNlosZ0JBQVgsQ0FBNEJqVyxNQUE1QixHQUFxQyxDQUFyQyxHQUNHO0FBQUE7QUFBQSwwQ0FBTSxTQUFTLEtBQUs4WSxpQkFBTCxDQUF1QnZhLElBQXZCLENBQTRCLElBQTVCLEVBQWtDLEtBQWxDLENBQWY7QUFBMEQsNkNBQUtuQyxLQUFMLENBQVdpYSxnQkFBWCxHQUE4QixFQUE5QixHQUFvQyxJQUFHLEtBQUtqYSxLQUFMLENBQVc2WixnQkFBWCxDQUE0QmpXLE1BQTVCLEdBQXFDLENBQUU7QUFBeEkscUNBREgsR0FHSztBQUpWLGlDQURKO0FBT0k7QUFBQTtBQUFBLHNDQUFLLFdBQVUseUJBQWY7QUFDSyx5Q0FBSzVELEtBQUwsQ0FBVzZaLGdCQUFYLENBQTRCalcsTUFBNUIsR0FBcUMsQ0FBckMsR0FDRztBQUFBO0FBQUEsMENBQUssV0FBVSxhQUFmO0FBQ0ksaUZBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksdUJBQS9CLEVBQXVELFVBQVUsS0FBS3laLGdCQUFMLENBQXNCbGIsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBakUsRUFBbUcsTUFBSyxPQUF4RyxFQUFnSCxTQUFTLEtBQUt1YSxpQkFBTCxDQUF1QnZhLElBQXZCLENBQTRCLElBQTVCLEVBQWtDLEtBQWxDLENBQXpILEVBQW1LLE9BQU8sS0FBS25DLEtBQUwsQ0FBV2thLGtCQUFyTDtBQURKLHFDQURILEdBUUssRUFUVjtBQVVJO0FBQUE7QUFBQSwwQ0FBSSxXQUFVLHFCQUFkO0FBQ0ssNkNBQUsyRCxjQUFMO0FBREw7QUFWSjtBQVBKO0FBREoseUJBREgsR0F5Qks7QUEzS1YscUJBbkJKO0FBa01RLHlCQUFLN2QsS0FBTCxDQUFXaWEsZ0JBQVgsR0FDSSxFQURKLEdBRU07QUFBQTtBQUFBLDBCQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUEsOEJBQVEsV0FBVSxvQkFBbEIsRUFBdUMsU0FBUyxLQUFLWSxXQUFMLENBQWlCMVksSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsQ0FBaEQ7QUFBQTtBQUFBLHlCQURGO0FBRUU7QUFBQTtBQUFBLDhCQUFRLFdBQVUsb0NBQWxCLEVBQXVELFNBQVMsS0FBS21LLFlBQUwsQ0FBa0JuSyxJQUFsQixDQUF1QixJQUF2QixDQUFoRTtBQUFBO0FBQUE7QUFGRjtBQXBNZDtBQUhKLGFBREosR0E4TWEsRUFoTnJCO0FBa05ZO0FBQUE7QUFBQSxrQkFBSyxXQUFZLEdBQUUsS0FBS3BDLEtBQUwsQ0FBV3lJLE9BQVgsR0FBbUIsV0FBbkIsR0FBK0IsRUFBRyxtREFBckQ7QUFDSyxxQkFBS3pJLEtBQUwsQ0FBV29lLFVBQVgsSUFBeUIsS0FBS3BlLEtBQUwsQ0FBV29lLFVBQVgsQ0FBc0J2YSxNQUEvQyxHQUNHO0FBQUE7QUFBQSxzQkFBSyxXQUFVLDBDQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFJLFdBQVUsMkNBQWQsRUFBMEQsT0FBTyxFQUFFLGFBQWEsV0FBZixFQUFqRTtBQUVRLDZCQUFLN0QsS0FBTCxDQUFXb2UsVUFBWCxJQUF5QixLQUFLcGUsS0FBTCxDQUFXb2UsVUFBWCxDQUFzQnZhLE1BQS9DLEdBQ0ksS0FBSzdELEtBQUwsQ0FBV29lLFVBQVgsQ0FBc0J6YSxHQUF0QixDQUEwQixDQUFDeEMsSUFBRCxFQUFPa1UsR0FBUCxLQUFlO0FBQ3JDLG1DQUFPO0FBQUE7QUFBQSxrQ0FBSSxXQUFVLHNCQUFkLEVBQXFDLEtBQUtBLEdBQTFDO0FBRUNBLHVDQUFPLEtBQUtyVixLQUFMLENBQVdvZSxVQUFYLENBQXNCdmEsTUFBdEIsR0FBK0IsQ0FBdEMsR0FDSTtBQUFBO0FBQUE7QUFBTzFDLHlDQUFLd047QUFBWixpQ0FESixHQUVNO0FBQUE7QUFBQSxzQ0FBRyxNQUFNeE4sS0FBSzJCLEdBQWQsRUFBbUIsT0FBTzNCLEtBQUtrZCxVQUFMLElBQW1CbGQsS0FBS3dOLEtBQWxELEVBQXlELFNBQVUzTCxDQUFELElBQU87QUFDdkVBLDhDQUFFSyxjQUFGO0FBQ0EsaURBQUtyRCxLQUFMLENBQVd1QixPQUFYLENBQW1CQyxJQUFuQixDQUF5QjZULE9BQU8sQ0FBUCxJQUFZQSxPQUFPLEtBQUtyVixLQUFMLENBQVdvZSxVQUFYLENBQXNCdmEsTUFBdEIsR0FBK0IsQ0FBbkQsR0FBd0QxQyxLQUFLMkIsR0FBN0QsR0FBb0UsSUFBRzNCLEtBQUsyQixHQUFJLEVBQXhHO0FBQ0gseUNBSEM7QUFHRXVTLDJDQUFPLENBQVAsSUFBWUEsT0FBTyxLQUFLclYsS0FBTCxDQUFXb2UsVUFBWCxDQUFzQnZhLE1BQXRCLEdBQStCLENBQWxELEdBQXNEO0FBQUE7QUFBQSwwQ0FBTSxXQUFVLGtEQUFoQjtBQUFvRTFDLDZDQUFLd047QUFBekUscUNBQXRELEdBQStJO0FBQUE7QUFBQSwwQ0FBSSxXQUFVLGdFQUFkO0FBQWdGeE4sNkNBQUt3TjtBQUFyRjtBQUhqSixpQ0FKUDtBQVVDMEcsdUNBQU8sS0FBS3JWLEtBQUwsQ0FBV29lLFVBQVgsQ0FBc0J2YSxNQUF0QixHQUErQixDQUF0QyxHQUNJO0FBQUE7QUFBQSxzQ0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsaUNBREosR0FFTTtBQVpQLDZCQUFQO0FBZUgseUJBaEJELENBREosR0FrQk07QUFwQmQ7QUFESixpQkFESCxHQTBCSyxFQTNCVjtBQThCUSxxQkFBSzdELEtBQUwsQ0FBV3lJLE9BQVgsR0FDQTtBQUFDLG1DQUFELENBQU8sUUFBUDtBQUFBO0FBQ0ksa0RBQUMsMEJBQUQsZUFBc0IsS0FBS3pJLEtBQTNCLElBQWtDLE9BQU9rVCxPQUFRLEtBQUtqRCxLQUFMLEdBQWFpRCxHQUE5RCxFQUFvRSxtQkFBbUIsS0FBSzhLLGlCQUFMLENBQXVCNWIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBdkYsRUFBMEgsWUFBVyxRQUFySSxFQUE4SSxjQUFjekIsWUFBNUosRUFBMEssU0FBUyxLQUFLWCxLQUFMLENBQVd5SSxPQUE5TCxJQURKO0FBRUsseUJBQUswVixXQUFMO0FBRkwsaUJBREEsR0FLQztBQUFBO0FBQUEsc0JBQVMsV0FBVSxtQkFBbkI7QUFDRztBQUFBO0FBQUEsMEJBQUssV0FBVSwwQkFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLDJDQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFHLFdBQVUsaUJBQWI7QUFFUyxtQ0FBRSxLQUFLbmUsS0FBTCxDQUFXaUMsS0FBTSxJQUFHOEssUUFBUWxKLE1BQVIsR0FBaUIsYUFBakIsR0FBaUMsU0FBVSxRQUFPLEtBQUs3RCxLQUFMLENBQVdzZSxZQUFYLElBQTJCLEtBQUt0ZSxLQUFMLENBQVdzZSxZQUFYLENBQXdCbGEsSUFBbkQsR0FBMkQsR0FBRXVNLGVBQWUsUUFBUyxRQUFPLEtBQUszUSxLQUFMLENBQVdzZSxZQUFYLENBQXdCbGEsSUFBSyxFQUF6SCxHQUE2SCxFQUFHLEVBRmpOO0FBS1EscUNBQUtwRSxLQUFMLENBQVdzZSxZQUFYLElBQTJCLEtBQUt0ZSxLQUFMLENBQVdzZSxZQUFYLENBQXdCbGEsSUFBbkQsR0FBMEQsRUFBMUQsR0FDTTtBQUFBO0FBQUEsc0NBQUksV0FBVSx1QkFBZDtBQUNFO0FBQUE7QUFBQSwwQ0FBTSxXQUFZLEdBQUUsS0FBS3BFLEtBQUwsQ0FBV3VELHVCQUFYLElBQXNDLEtBQUt2RCxLQUFMLENBQVd1RCx1QkFBWCxDQUFtQ00sTUFBbkMsR0FBNEMsQ0FBbEYsR0FBc0YsZUFBdEYsR0FBd0csRUFBRyxFQUEvSDtBQUNNLDJDQUFFOE0sZUFBZSxRQUFTO0FBRGhDLHFDQURGO0FBSUU7QUFBQTtBQUFBLDBDQUFNLFNBQVMsS0FBSy9QLFlBQUwsQ0FBa0J3QixJQUFsQixDQUF1QixJQUF2QixDQUFmO0FBQWdELCtDQUFNekIsWUFBYTtBQUFuRTtBQUpGLGlDQU5kO0FBY1MscUNBQUtYLEtBQUwsQ0FBV3NlLFlBQVgsSUFBMkIsS0FBS3RlLEtBQUwsQ0FBV3NlLFlBQVgsQ0FBd0JsYSxJQUFwRCxJQUE2RCxDQUFDekQsWUFBOUQsR0FBNkUsRUFBN0UsR0FDTTtBQUFBO0FBQUEsc0NBQU0sU0FBUyxLQUFLQyxZQUFMLENBQWtCd0IsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBZjtBQUE4QywyRUFBSyxPQUFPLEVBQUUwRSxPQUFPLE1BQVQsRUFBaUJhLFFBQVEsTUFBekIsRUFBaUM0VyxZQUFZLEtBQTdDLEVBQVosRUFBa0UsS0FBSy9iLFNBQWVBLEdBQUcsOEJBQXpGO0FBQTlDO0FBZmQ7QUFESix5QkFESjtBQXNCSTtBQUFBO0FBQUEsOEJBQUssV0FBVSwwQkFBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBSSxXQUFVLGFBQWQ7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsMENBQU0sT0FBTyxFQUFFa0UsUUFBUSxTQUFWLEVBQWIsRUFBb0MsU0FBUyxLQUFLd1YsVUFBTCxDQUFnQjlaLElBQWhCLENBQXFCLElBQXJCLENBQTdDO0FBQ0ksK0VBQUssS0FBS0ksU0FBZUEsR0FBRyxtQ0FBNUIsRUFBaUUsT0FBTyxFQUFFc0UsT0FBTyxFQUFULEVBQXhFO0FBREo7QUFESixpQ0FESjtBQU9RLHFDQUFLN0csS0FBTCxDQUFXc1osUUFBWCxHQUFzQjtBQUFBO0FBQUEsc0NBQUssV0FBVSx1QkFBZixFQUF1QyxTQUFTLE1BQU07QUFDeEUsaURBQUtqWixRQUFMLENBQWMsRUFBRWlaLFVBQVUsRUFBWixFQUFkO0FBQ0gseUNBRnFCO0FBR2xCO0FBQUE7QUFBQSwwQ0FBSyxXQUFVLGdCQUFmLEVBQWdDLFNBQVV2VyxDQUFELElBQU87QUFDNUNBLGtEQUFFQyxlQUFGO0FBQ0gsNkNBRkQ7QUFHSTtBQUFBO0FBQUE7QUFBSSxpREFBS2hELEtBQUwsQ0FBV3NaO0FBQWYseUNBSEo7QUFJSTtBQUFDLGlGQUFEO0FBQUEsOENBQWlCLE1BQU0sS0FBS3RaLEtBQUwsQ0FBV3NaLFFBQWxDO0FBQ0ksd0RBQVEsTUFBTTtBQUNWN0MsMkVBQVNDLElBQVQsQ0FBYyxFQUFFQyxLQUFLLGVBQVAsRUFBd0JDLE1BQU0sdUJBQTlCLEVBQWQ7QUFDQSx5REFBS3ZXLFFBQUwsQ0FBYyxFQUFFaVosVUFBVSxFQUFaLEVBQWQ7QUFDSCxpREFKTDtBQUtJO0FBQUE7QUFBQSxrREFBTSxXQUFVLGFBQWhCO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBTEo7QUFKSjtBQUhrQixpQ0FBdEIsR0FpQlM7QUF4QmpCO0FBREoseUJBdEJKO0FBbURJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLHlDQUFmLEVBQXlELFNBQVMsS0FBS3ZKLGlCQUFMLENBQXVCNU4sSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBbEU7QUFDSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxZQUFmO0FBQ0ksdUVBQUssT0FBTyxFQUFFMEUsT0FBTyxNQUFULEVBQVosRUFBK0IsS0FBS3RFLFNBQWVBLEdBQUcscUJBQXRELEdBREo7QUFHUSxxQ0FBS3FZLGNBQUwsS0FDSTtBQUFBO0FBQUEsc0NBQUcsV0FBVSxvQkFBYjtBQUFtQyx5Q0FBS0EsY0FBTDtBQUFuQyxpQ0FESixHQUVNO0FBTGQsNkJBREo7QUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEo7QUFuREo7QUFESCxpQkFuQ1Q7QUF3R0kscUJBQUs1YSxLQUFMLENBQVd1WixpQkFBWCxJQUFnQyxDQUFDLEtBQUt4WixLQUFMLENBQVd5SSxPQUE1QyxHQUNJLDhCQUFDLDBCQUFELGVBQXNCLEtBQUt6SSxLQUEzQixJQUFrQyxPQUFPa1QsT0FBUSxLQUFLakQsS0FBTCxHQUFhaUQsR0FBOUQsRUFBb0UsWUFBVyxNQUEvRSxFQUFzRixVQUFVLElBQWhHLEVBQXNHLG1CQUFtQixNQUFNLEtBQUs2SSxpQkFBTCxFQUEvSCxFQUF5SixjQUFjcGIsWUFBdkssSUFESixHQUVNLEVBMUdWO0FBOEdJLHFCQUFLVixLQUFMLENBQVd1WixpQkFBWCxJQUFnQyxLQUFLdlosS0FBTCxDQUFXd1osY0FBM0MsSUFBNkQsQ0FBQyxLQUFLelosS0FBTCxDQUFXa0ksV0FBekUsSUFBeUYsQ0FBQyxLQUFLbEksS0FBTCxDQUFXeUksT0FBckcsR0FDSSx1Q0FBSyxXQUFVLHVCQUFmLEVBQXVDLFNBQVMsTUFBTSxLQUFLbVQsWUFBTCxFQUF0RCxHQURKLEdBRU0sRUFoSFY7QUFvSEkscUJBQUszYixLQUFMLENBQVd1WixpQkFBWCxJQUFnQyxLQUFLeFosS0FBTCxDQUFXa0ksV0FBM0MsSUFBMEQsS0FBS2pJLEtBQUwsQ0FBV2djLGtCQUFyRSxJQUE0RixDQUFDLEtBQUtqYyxLQUFMLENBQVd5SSxPQUF4RyxHQUNJLHVDQUFLLFdBQVUsd0JBQWYsR0FESixHQUVNLEVBdEhWO0FBeUhJaUosa0NBQVE4TSxTQUFSLE1BQXVCLEtBQUt4ZSxLQUFMLENBQVdxSyxxQkFBbEMsSUFBMkQsS0FBS3JLLEtBQUwsQ0FBV3NLLGdCQUFYLElBQStCLENBQTFGLEdBQ007QUFBQTtBQUFBLHNCQUFLLFdBQVUsY0FBZjtBQUNFLDZEQUFPLFdBQVUsYUFBakIsRUFBK0IsSUFBRyxlQUFsQyxFQUFrRCxNQUFLLFVBQXZELEVBQWtFLFNBQVMsS0FBS3JLLEtBQUwsQ0FBV3NLLFVBQXRGLEVBQWtHLFVBQVUsS0FBS2dTLGFBQUwsQ0FBbUJuYSxJQUFuQixDQUF3QixJQUF4QixDQUE1RyxHQURGO0FBRUUsNkRBQU8sV0FBVSxTQUFqQixFQUEyQixTQUFRLGVBQW5DLEdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUFBO0FBQUEsOEJBQUcsTUFBSyxzRkFBUixFQUErRixRQUFPLFFBQXRHO0FBQStHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0c7QUFBakM7QUFIRixpQkFETixHQU1NO0FBL0hWO0FBbE5aLFNBREo7QUF1Vkg7QUFsK0JnQzs7a0JBcytCdEIrVyxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2gvQmY7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLE1BQU16WixjQUFjQyxtQkFBT0EsQ0FBQyxrQ0FBUixDQUFwQjs7QUFFQSxNQUFNd1osTUFBTixTQUFxQnRaLGdCQUFNQyxTQUEzQixDQUFxQztBQUNqQ0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FzWixzQkFBVSxFQVZEO0FBV1Q7QUFDQUMsK0JBQW1CLEtBWlY7QUFhVEMsNEJBQWdCLEtBYlA7QUFjVHdDLGdDQUFvQixJQWRYO0FBZVR3Qyw2QkFBaUI7QUFmUixTQUFiO0FBaUJIOztBQUVEcmUsOEJBQTBCSixLQUExQixFQUFpQztBQUM3QixhQUFLTSxRQUFMLGNBQW1CTixNQUFNK0osY0FBekI7QUFDQSxZQUFJL0osTUFBTVEsWUFBTixJQUFzQixDQUFDUixNQUFNUSxZQUFOLENBQW1CQyxRQUFuQixDQUE0QixLQUE1QixDQUEzQixFQUErRDtBQUMzRCxpQkFBS0gsUUFBTCxDQUFjLEVBQUVrWixtQkFBbUIsS0FBckIsRUFBZDtBQUNILFNBRkQsTUFFTztBQUNILGdCQUFLeFosTUFBTTZILE9BQU4sSUFBaUI3SCxNQUFNNkgsT0FBTixDQUFjN0csUUFBaEMsSUFBNkNoQixNQUFNZ0ksV0FBdkQsRUFBb0U7QUFDaEUscUJBQUsxSCxRQUFMLENBQWMsRUFBRWtaLG1CQUFtQixLQUFyQixFQUFkO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsb0JBQUl4WixNQUFNSyxnQkFBTixJQUEwQixLQUFLTCxLQUFMLENBQVdLLGdCQUF6QyxFQUEyRDtBQUN2RCx5QkFBS0MsUUFBTCxDQUFjLEVBQUVrWixtQkFBbUIsSUFBckIsRUFBMkJDLGdCQUFnQixJQUEzQyxFQUFpRGdGLGlCQUFpQixLQUFsRSxFQUFkO0FBQ0g7QUFDSjtBQUNKO0FBQ0Q7QUFDSDs7QUFFRC9kLHdCQUFvQjtBQUNoQixhQUFLSixRQUFMLGNBQW1CLEtBQUtOLEtBQUwsQ0FBVytKLGNBQTlCO0FBQ0E7QUFDQSxZQUFLLEtBQUsvSixLQUFMLENBQVc2SCxPQUFYLElBQXNCLEtBQUs3SCxLQUFMLENBQVc2SCxPQUFYLENBQW1CN0csUUFBMUMsSUFBdUQsS0FBS2hCLEtBQUwsQ0FBV2dJLFdBQXRFLEVBQW1GO0FBQy9FLGlCQUFLMUgsUUFBTCxDQUFjLEVBQUVrWixtQkFBbUIsS0FBckIsRUFBNEJpRixpQkFBaUIsSUFBN0MsRUFBZDtBQUNILFNBRkQsTUFFTztBQUNILGdCQUFJLEtBQUt6ZSxLQUFMLENBQVdRLFlBQVgsSUFBMkIsS0FBS1IsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxRQUF4QixDQUFpQyxLQUFqQyxDQUEvQixFQUF3RTtBQUNwRSxxQkFBS0gsUUFBTCxDQUFjLEVBQUVrWixtQkFBbUIsSUFBckIsRUFBMkJDLGdCQUFnQixJQUEzQyxFQUFpRGdGLGlCQUFpQixLQUFsRSxFQUFkO0FBQ0g7QUFDSjtBQUNKOztBQUVEQyxnQkFBWTFiLENBQVosRUFBZTtBQUNYLFlBQUkyYixTQUFTM2IsRUFBRStaLE1BQUYsQ0FBUzNZLElBQXRCO0FBQ0EsWUFBSXdhLFVBQVU1YixFQUFFK1osTUFBRixDQUFTNkIsT0FBdkI7QUFDQWxQLG1CQUFXLE1BQU07QUFDYixpQkFBS3BQLFFBQUwsQ0FBYztBQUNWLGlCQUFDcWUsTUFBRCxHQUFVQztBQURBLGFBQWQ7QUFHSCxTQUpEO0FBS0g7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBaE8sc0JBQWtCbUIsaUJBQWxCLEVBQXFDO0FBQ2pDLFlBQUlBLHFCQUFxQkEsa0JBQWtCbE8sTUFBM0MsRUFBbUQ7QUFDL0MsZ0JBQUlnYiw0QkFBNEI5TSxrQkFBa0J2TyxNQUFsQixDQUF5QkMsS0FBS0EsRUFBRUMsSUFBRixJQUFVLHFCQUF4QyxDQUFoQztBQUNBLGdCQUFJNkMsYUFBYXdMLGtCQUFrQnZPLE1BQWxCLENBQXlCQyxLQUFLQSxFQUFFQyxJQUFGLElBQVUsWUFBeEMsQ0FBakI7O0FBRUEsbUJBQU9xTyxrQkFBa0IvTixNQUFsQixDQUF5QixDQUFDa08sS0FBRCxFQUFRaE8sSUFBUixFQUFjQyxDQUFkLEtBQW9CO0FBQ2hELG9CQUFJQSxLQUFLLENBQVQsRUFBWTtBQUNSK04sNkJBQVMsSUFBVDtBQUNIO0FBQ0RBLHlCQUFVLEdBQUVoTyxLQUFLRSxJQUFLLEVBQXRCO0FBQ0EsdUJBQU84TixLQUFQO0FBQ0gsYUFOTSxFQU1KLEVBTkksQ0FBUDtBQU9IO0FBQ0o7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQWdLLGlCQUFhO0FBQ1QsWUFBSW5iLE1BQUosRUFBWTtBQUNSLGdCQUFJK0IsTUFBTS9CLE9BQU9DLFFBQVAsQ0FBZ0JtYixJQUExQjtBQUNBLGdCQUFJclosSUFBSXJDLFFBQUosQ0FBYSxHQUFiLENBQUosRUFBdUI7QUFDbkJxQyxzQkFBTS9CLE9BQU9DLFFBQVAsQ0FBZ0JtYixJQUFoQixHQUF1QixzQkFBN0I7QUFDSCxhQUZELE1BRU87QUFDSHJaLHNCQUFNL0IsT0FBT0MsUUFBUCxDQUFnQm1iLElBQWhCLEdBQXVCLHNCQUE3QjtBQUNIO0FBQ0QsaUJBQUtuYyxLQUFMLENBQVdvYyxXQUFYLENBQXVCdFosR0FBdkIsRUFBNEIsQ0FBQ3VaLEdBQUQsRUFBTWxiLElBQU4sS0FBZTtBQUN2QyxvQkFBSSxDQUFDa2IsR0FBTCxFQUFVO0FBQ04seUJBQUsvYixRQUFMLENBQWMsRUFBRWlaLFVBQVVwWSxLQUFLbWIsUUFBakIsRUFBZDtBQUNIO0FBQ0osYUFKRDtBQUtIO0FBQ0o7O0FBRURWLG1CQUFlO0FBQ1gsYUFBS3RiLFFBQUwsQ0FBYyxFQUFFbVosZ0JBQWdCLEtBQWxCLEVBQXlCWSxjQUFjLEVBQXZDLEVBQTJDb0UsaUJBQWlCLElBQTVELEVBQWQ7QUFDQSxZQUFJcFgsU0FBU3VNLGNBQVQsQ0FBd0Isa0JBQXhCLENBQUosRUFBaUQ7QUFDN0N2TSxxQkFBU3VNLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDaUksS0FBNUMsQ0FBa0RDLE1BQWxELEdBQTJELEdBQTNEO0FBQ0g7QUFDSjs7QUFFREMsd0JBQW9CO0FBQ2hCLGFBQUt6YixRQUFMLENBQWMsRUFBRWtaLG1CQUFtQixLQUFyQixFQUE0QmlGLGlCQUFpQixJQUE3QyxFQUFkO0FBQ0g7O0FBRUR6QyxxQkFBaUI7QUFDYixhQUFLMWIsUUFBTCxDQUFjLEVBQUUyYixvQkFBb0IsS0FBdEIsRUFBNkJ6QyxtQkFBbUIsS0FBaEQsRUFBdURpRixpQkFBaUIsSUFBeEUsRUFBZDtBQUNIOztBQUVEN2QsbUJBQWU7QUFDWCxhQUFLTixRQUFMLENBQWM7QUFDVitaLDBCQUFjO0FBREosU0FBZDtBQUdBLFlBQUl2WixjQUFjLEVBQWxCO0FBQ0EsWUFBSUMsT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJSLFFBQXpCLENBQWtDLFFBQWxDLEtBQStDTSxPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QlIsUUFBekIsQ0FBa0MsV0FBbEMsQ0FBbkQsRUFBbUc7QUFDL0ZLLDBCQUFjLG9CQUFkO0FBQ0g7O0FBRUQsWUFBSUksZUFBZSxpQkFBbkI7QUFDQSxZQUFJSixXQUFKLEVBQWlCO0FBQ2JJLDRCQUFpQixnQkFBZUosV0FBWSxFQUE1QztBQUNIO0FBQ0QsYUFBS2QsS0FBTCxDQUFXMmIscUJBQVg7QUFDQSxZQUFJeGEsT0FBTztBQUNQLHdCQUFZLGtDQURMLEVBQ3lDLFVBQVUsc0NBRG5ELEVBQzJGLGNBQWNDLGNBQUlDLFNBQUosTUFBbUIsRUFENUgsRUFDZ0ksVUFBVSxDQUQxSSxFQUM2SSxTQUFTLHNDQUR0SixFQUM4TCxPQUFPTixPQUFPQyxRQUFQLENBQWdCQztBQURyTixTQUFYO0FBR0FHLHNCQUFJRSxTQUFKLENBQWMsRUFBRUgsTUFBTUEsSUFBUixFQUFkO0FBQ0EsYUFBS25CLEtBQUwsQ0FBV3VCLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCTixZQUF4QjtBQUNIOztBQUVENGQsNkJBQXlCQyxRQUFNLEtBQS9CLEVBQXNDO0FBQ2xDLFlBQUdBLEtBQUgsRUFBVTtBQUNOLGdCQUFJM08sVUFBVTtBQUNWLDRCQUFZLGFBREYsRUFDaUIsVUFBVSwyQkFEM0IsRUFDd0QsY0FBY2hQLGNBQUlDLFNBQUosTUFBbUIsRUFEekYsRUFDNkYsVUFBVSxDQUR2RyxFQUMwRyxTQUFTO0FBRG5ILGFBQWQ7QUFHQUQsMEJBQUlFLFNBQUosQ0FBYyxFQUFFSCxNQUFNaVAsT0FBUixFQUFkO0FBQ0g7QUFDRCxhQUFLOVAsUUFBTCxDQUFjLEVBQUNtZSxpQkFBaUIsS0FBbEIsRUFBZDtBQUNIOztBQUVEemMsYUFBUzs7QUFFTCxZQUFJMk8sY0FBYyxLQUFLQyxpQkFBTCxDQUF1QixLQUFLNVEsS0FBTCxDQUFXdUQsdUJBQWxDLENBQWxCO0FBQ0EsWUFBSTVDLGVBQWUsRUFBbkI7QUFDQSxZQUFJLEtBQUtYLEtBQUwsQ0FBV0ssZ0JBQVgsSUFBK0IsS0FBS0wsS0FBTCxDQUFXSyxnQkFBWCxDQUE0QkUsaUJBQS9ELEVBQWtGO0FBQzlFSSwyQkFBZSxLQUFLWCxLQUFMLENBQVdLLGdCQUFYLENBQTRCRSxpQkFBM0M7QUFDSDtBQUNELFlBQUksS0FBS1AsS0FBTCxDQUFXNkgsT0FBWCxJQUFzQixLQUFLN0gsS0FBTCxDQUFXNkgsT0FBWCxDQUFtQjdHLFFBQTdDLEVBQXVEO0FBQ25ETCwyQkFBZSxLQUFLWCxLQUFMLENBQVc2SCxPQUFYLENBQW1CN0csUUFBbEM7QUFDSDs7QUFFRCxjQUFNVSxTQUFTaEMsWUFBWWlDLEtBQVosQ0FBa0IsS0FBSzNCLEtBQUwsQ0FBV2dCLFFBQVgsQ0FBb0JkLE1BQXRDLENBQWY7QUFDQSxZQUFJeWEsa0JBQWtCLEtBQUszYSxLQUFMLENBQVd1RCx1QkFBWCxDQUFtQ0MsTUFBbkMsQ0FBMENDLEtBQUtBLEVBQUVDLElBQUYsSUFBVSxZQUF6RCxDQUF0Qjs7QUFFQSxZQUFJcUosVUFBVSxLQUFLL00sS0FBTCxDQUFXdUQsdUJBQVgsQ0FBbUNDLE1BQW5DLENBQTBDQyxLQUFLQSxFQUFFQyxJQUFGLElBQVUsS0FBekQsRUFBZ0VDLEdBQWhFLENBQW9FRixLQUFLQSxFQUFFWixFQUEzRSxDQUFkOztBQUVBLGVBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsaUJBQWYsRUFBaUMsSUFBRyxlQUFwQztBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLEtBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxRQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUsYUFBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLCtDQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFJLFdBQVUsYUFBZDtBQUNJO0FBQUE7QUFBQSwwQ0FBSSxXQUFVLDBCQUFkO0FBQ0k7QUFBQTtBQUFBLDhDQUFNLE9BQU8sRUFBRTZELFFBQVEsU0FBVixFQUFiLEVBQW9DLFNBQVMsS0FBS3dWLFVBQUwsQ0FBZ0I5WixJQUFoQixDQUFxQixJQUFyQixDQUE3QztBQUNJLG1GQUFLLEtBQUtJLFNBQWVBLEdBQUcsbUNBQTVCLEVBQWlFLE9BQU8sRUFBRXNFLE9BQU8sRUFBVCxFQUF4RTtBQURKO0FBREoscUNBREo7QUFPUSx5Q0FBSzdHLEtBQUwsQ0FBV3NaLFFBQVgsR0FBc0I7QUFBQTtBQUFBLDBDQUFLLFdBQVUsdUJBQWYsRUFBdUMsU0FBUyxNQUFNO0FBQ3hFLHFEQUFLalosUUFBTCxDQUFjLEVBQUVpWixVQUFVLEVBQVosRUFBZDtBQUNILDZDQUZxQjtBQUdsQjtBQUFBO0FBQUEsOENBQUssV0FBVSxnQkFBZixFQUFnQyxTQUFVdlcsQ0FBRCxJQUFPO0FBQzVDQSxzREFBRUMsZUFBRjtBQUNILGlEQUZEO0FBR0k7QUFBQTtBQUFBO0FBQUkscURBQUtoRCxLQUFMLENBQVdzWjtBQUFmLDZDQUhKO0FBSUk7QUFBQyxxRkFBRDtBQUFBLGtEQUFpQixNQUFNLEtBQUt0WixLQUFMLENBQVdzWixRQUFsQztBQUNJLDREQUFRLE1BQU07QUFDVjdDLCtFQUFTQyxJQUFULENBQWMsRUFBRUMsS0FBSyxlQUFQLEVBQXdCQyxNQUFNLHVCQUE5QixFQUFkO0FBQ0EsNkRBQUt2VyxRQUFMLENBQWMsRUFBRWlaLFVBQVUsRUFBWixFQUFkO0FBQ0gscURBSkw7QUFLSTtBQUFBO0FBQUEsc0RBQU0sV0FBVSxhQUFoQjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUxKO0FBSko7QUFIa0IscUNBQXRCLEdBaUJTO0FBeEJqQjtBQURKLDZCQURKO0FBOEJJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLGNBQWY7QUFDSyxxQ0FBS3ZaLEtBQUwsQ0FBV2lDLEtBRGhCO0FBQUE7QUFDMEM4Syx3Q0FBUWxKLE1BQVIsR0FBaUIsTUFBakIsR0FBMEIsRUFEcEU7QUFFSTtBQUFBO0FBQUEsc0NBQUksV0FBVSx1QkFBZDtBQUNJO0FBQUE7QUFBQSwwQ0FBTSxXQUFVLFFBQWhCO0FBQUE7QUFBMkI4TSx1REFBZSxTQUExQztBQUFBO0FBQXNENUQsZ0RBQVFsSixNQUFSLElBQWtCOE0sV0FBbEIsR0FBK0IsU0FBL0IsR0FBMkM7QUFBakcscUNBREo7QUFFSTtBQUFBO0FBQUEsMENBQU0sV0FBVSxvQkFBaEI7QUFFUSw2Q0FBSzFRLEtBQUwsQ0FBV3VaLGlCQUFYLElBQWdDLEtBQWhDLEdBQXdDLEVBQXhDLEdBQ003WSxlQUFlO0FBQUE7QUFBQSw4Q0FBTSxXQUFVLGVBQWhCO0FBQWtDLG1EQUFNQSxZQUFhO0FBQXJELHlDQUFmLEdBQWdGO0FBSDlGO0FBRkosaUNBRko7QUFXSSx1RUFBSyxPQUFPLEVBQUVtRyxPQUFPLEVBQVQsRUFBYWEsUUFBUSxFQUFyQixFQUF5QjRXLFlBQVksQ0FBckMsRUFBd0M3WCxRQUFRLFNBQWhELEVBQVosRUFBeUUsS0FBS2xFLFNBQWVBLEdBQUcsOEJBQWhHLEVBQWdJLFNBQzVILEtBQUs1QixZQUFMLENBQWtCd0IsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FESjtBQVhKO0FBOUJKO0FBREo7QUFESixpQkFESjtBQW1EUSxxQkFBS25DLEtBQUwsQ0FBV3VaLGlCQUFYLEdBQ0ksS0FBS3haLEtBQUwsQ0FBV2tJLFdBQVgsSUFBMEIsS0FBS2pJLEtBQUwsQ0FBV2djLGtCQUFyQyxHQUNJLDhCQUFDLHVCQUFELGVBQW1CLEtBQUtqYyxLQUF4QixJQUErQixPQUFPa1QsT0FBUSxLQUFLakQsS0FBTCxHQUFhaUQsR0FBM0QsRUFBaUUsWUFBVyxNQUE1RSxFQUFtRixVQUFVLElBQTdGLEVBQW1HLG1CQUFtQixNQUFNLEtBQUs2SSxpQkFBTCxFQUE1SCxFQUFzSixjQUFjcGIsWUFBcEssRUFBa0wsZ0JBQWdCZ1EsV0FBbE0sRUFBK00sZ0JBQWdCLE1BQU0sS0FBS3FMLGNBQUwsRUFBck8sSUFESixHQUVNLDhCQUFDLDBCQUFELGVBQXNCLEtBQUtoYyxLQUEzQixJQUFrQyxPQUFPa1QsT0FBUSxLQUFLakQsS0FBTCxHQUFhaUQsR0FBOUQsRUFBb0UsWUFBVyxNQUEvRSxFQUFzRixVQUFVLElBQWhHLEVBQXNHLG1CQUFtQixNQUFNLEtBQUs2SSxpQkFBTCxFQUEvSCxFQUF5SixjQUFjcGIsWUFBdkssSUFIVixHQUlNLEVBdkRkO0FBMkRRLHFCQUFLVixLQUFMLENBQVd1WixpQkFBWCxJQUFnQyxLQUFLdlosS0FBTCxDQUFXd1osY0FBM0MsSUFBNkQsQ0FBQyxLQUFLelosS0FBTCxDQUFXa0ksV0FBekUsR0FDSSx1Q0FBSyxXQUFVLHVCQUFmLEVBQXVDLFNBQVMsTUFBTSxLQUFLMFQsWUFBTCxFQUF0RCxHQURKLEdBRU0sRUE3RGQ7QUFpRVEscUJBQUszYixLQUFMLENBQVd1WixpQkFBWCxJQUFnQyxLQUFLeFosS0FBTCxDQUFXa0ksV0FBM0MsSUFBMEQsS0FBS2pJLEtBQUwsQ0FBV2djLGtCQUFyRSxHQUNJLHVDQUFLLFdBQVUsd0JBQWYsR0FESixHQUVNLEVBbkVkO0FBdUVRdEIsbUNBQW1CQSxnQkFBZ0I5VyxNQUFuQyxJQUE2Q25DLE9BQU9xQixXQUFwRCxJQUFtRXJCLE9BQU8yTSxTQUExRSxJQUF1RixLQUFLcE8sS0FBTCxDQUFXd2UsZUFBbEcsSUFBcUgsT0FBTzFkLE1BQVAsSUFBaUIsUUFBdEksSUFBa0pBLE9BQU8wTCxlQUF6SixHQUNBLDhCQUFDLHFCQUFELGFBQWEsMEJBQTBCLEtBQUtxUyx3QkFBTCxDQUE4QjFjLElBQTlCLENBQW1DLElBQW5DLENBQXZDLElBQXFGLEtBQUtwQyxLQUExRixJQUFpRyxhQUFhMEIsT0FBT3FCLFdBQXJILEVBQWtJLFlBQVcsa0JBQTdJLElBREEsR0FFQztBQXpFVDtBQURKLFNBREo7QUFnRkg7QUE1VGdDOztrQkFnVXRCb1csTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1VmOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLE1BQU02RixzQkFBTixTQUFxQ25mLGdCQUFNQyxTQUEzQyxDQUFxRDtBQUNqREMsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0g7O0FBTURnQyxhQUFTOztBQUVMLGVBQ0ksOEJBQUMsZUFBRCxFQUF1QixLQUFLaEMsS0FBNUIsQ0FESjtBQUdIO0FBZGdEOztBQUEvQ2dmLHNCLENBS0tDLFksR0FBZTtBQUNsQkMsWUFBUSxNQUFNO0FBREksQztBQVkxQixNQUFNQyxrQkFBbUJsZixLQUFELElBQVc7QUFDL0IsVUFBTTtBQUNGSSx3QkFERTtBQUVGRztBQUZFLFFBR0ZQLE1BQU1tZixtQkFIVjs7QUFLQSxXQUFPO0FBQ0gvZSx3QkFERztBQUVIRztBQUZHLEtBQVA7QUFJSCxDQVZEOztBQVlBLE1BQU02ZSxxQkFBc0JDLFFBQUQsSUFBYztBQUNyQyxXQUFPO0FBQ0h2ZCx3QkFBZ0IsQ0FBQ2YsUUFBRCxFQUFXMEMsSUFBWCxLQUFvQjRiLFNBQVMsMkJBQWV0ZSxRQUFmLEVBQXlCMEMsSUFBekIsQ0FBVDtBQURqQyxLQUFQO0FBR0gsQ0FKRDs7a0JBT2UseUJBQVF5YixlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkNMLHNCQUE3QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ2Y7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNTyxhQUFOLFNBQTRCMWYsZ0JBQU1DLFNBQWxDLENBQTRDO0FBQ3hDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDVHVmLHFCQUFTO0FBREEsU0FBYjtBQUdIOztBQUVEOWUsd0JBQW9CO0FBQ2hCLFlBQUksS0FBS1YsS0FBTCxDQUFXd2YsT0FBZixFQUF3QjtBQUNwQixpQkFBS2xmLFFBQUwsQ0FBYyxFQUFFa2YsU0FBUyxJQUFYLEVBQWQ7QUFDQSxpQkFBS3hmLEtBQUwsQ0FBV3lmLFNBQVgsQ0FBcUIsS0FBckI7QUFDSDtBQUNEOzs7QUFHSDs7QUFFRCxXQUFPQyxRQUFQLENBQWdCQyxLQUFoQixFQUF1QjFYLEtBQXZCLEVBQThCMlgsY0FBYyxFQUE1QyxFQUFnRDtBQUM1QyxlQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDcEMsZ0JBQUk7QUFDQSxvQkFBSUMsY0FBYyxJQUFsQjtBQUNBLG9CQUFJL1gsTUFBTW5GLEdBQU4sQ0FBVXJDLFFBQVYsQ0FBbUIsV0FBbkIsQ0FBSixFQUFxQztBQUNqQ3VmLGtDQUFjL1gsTUFBTW5GLEdBQU4sQ0FBVThILEtBQVYsQ0FBZ0IsV0FBaEIsRUFBNkIsQ0FBN0IsQ0FBZDtBQUNBb1Ysa0NBQWNsUixTQUFTa1IsV0FBVCxDQUFkO0FBQ0g7O0FBRUQsdURBQXNCLElBQXRCLEVBQTRCSixXQUE1QixFQUF5QyxJQUF6QyxFQUErQ0ksV0FBL0MsRUFBNERuVixJQUE1RCxDQUFrRTVLLEtBQUQsSUFBVztBQUN4RTBmLDBCQUFNTCxRQUFOLENBQWUsMEJBQWNyZixLQUFkLENBQWY7QUFDQSx3QkFBRzJmLGdCQUFpQkEsWUFBWW5YLE9BQVosSUFBdUJtWCxZQUFZblgsT0FBWixJQUFxQixNQUE3QyxJQUF5RG1YLFlBQVlsWCxXQUFaLElBQTJCa1gsWUFBWWxYLFdBQVosSUFBeUIsTUFBN0gsQ0FBSCxFQUEwSTtBQUN0SSw0QkFBSVcsWUFBWTtBQUNaaEosOENBQWtCSixTQUFTQSxNQUFNSSxnQkFBZixHQUFnQ0osTUFBTUksZ0JBQXRDLEdBQXVELEVBRDdEO0FBRVpxRCxrQ0FBS2tjLFlBQVluWCxPQUFaLEdBQW9CLFFBQXBCLEdBQTZCbVgsWUFBWWxYLFdBQVosR0FBd0IsU0FBeEIsR0FBa0M7QUFGeEQseUJBQWhCO0FBSUFpWCw4QkFBTUwsUUFBTixDQUFlLCtCQUFtQmpXLFNBQW5CLENBQWY7QUFDQXNXLDhCQUFNTCxRQUFOLENBQWUsNEJBQWdCalcsU0FBaEIsQ0FBZjtBQUNIOztBQUVELHdCQUFJSixZQUFZLElBQWhCO0FBQ0Esd0JBQUloQixNQUFNbkYsR0FBTixDQUFVckMsUUFBVixDQUFtQixTQUFuQixLQUFpQ3dILE1BQU1uRixHQUFOLENBQVVyQyxRQUFWLENBQW1CLFlBQW5CLENBQWpDLElBQXFFd0gsTUFBTW5GLEdBQU4sQ0FBVXJDLFFBQVYsQ0FBbUIsUUFBbkIsQ0FBekUsRUFBdUc7QUFDbkd3SSxvQ0FBWWhCLE1BQU1uRixHQUFOLENBQVVvRyxXQUFWLEVBQVo7QUFDSDtBQUNELHdCQUFJaEIsY0FBYyxLQUFsQjtBQUNBLHdCQUFJMFgsWUFBWTFYLFdBQWhCLEVBQTZCO0FBQ3pCQSxzQ0FBYyxJQUFkO0FBQ0g7QUFDRCx3QkFBSThCLE9BQU8sQ0FBWDtBQUNBLHdCQUFJNFYsWUFBWTVWLElBQWhCLEVBQXNCO0FBQ2xCQSwrQkFBTzhFLFNBQVM4USxZQUFZNVYsSUFBckIsQ0FBUDtBQUNIO0FBQ0QsMkJBQU8yVixNQUFNTCxRQUFOLENBQWUsdUJBQVdyZixLQUFYLEVBQWtCK0osSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEJmLFNBQTlCLEVBQXlDLENBQUM4TSxRQUFELEVBQVdrSyxZQUFZLEtBQXZCLEtBQWlDO0FBQzVGLDRCQUFJQSxTQUFKLEVBQWU7QUFDWEgsb0NBQVEsRUFBRUksUUFBUSxHQUFWLEVBQVI7QUFDSDtBQUNELDRCQUFJalksTUFBTW5GLEdBQU4sQ0FBVXJDLFFBQVYsQ0FBbUIsU0FBbkIsS0FBaUN3SCxNQUFNbkYsR0FBTixDQUFVckMsUUFBVixDQUFtQixZQUFuQixDQUFqQyxJQUFxRXdILE1BQU1uRixHQUFOLENBQVVyQyxRQUFWLENBQW1CLFFBQW5CLENBQXpFLEVBQXVHO0FBQ25HLHNEQUFjd0gsTUFBTW5GLEdBQU4sQ0FBVThILEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsQ0FBZCxFQUF1Q2dWLFlBQVk1VixJQUFaLElBQW9CLENBQTNELElBQWdFYSxJQUFoRSxDQUFzRS9DLFVBQUQsSUFBZ0I7QUFDakZBLDZDQUFhQSxjQUFjLElBQTNCO0FBQ0FnWSx3Q0FBUSxFQUFFaFksVUFBRixFQUFSO0FBQ0gsNkJBSEQsRUFHRzJHLEtBSEgsQ0FHVXpMLENBQUQsSUFBTztBQUNaOGMsd0NBQVEsRUFBUjtBQUNILDZCQUxEO0FBTUgseUJBUEQsTUFPTztBQUNIQSxvQ0FBUSxFQUFSO0FBQ0g7QUFDSixxQkFkcUIsRUFjbkI1WCxXQWRtQixDQUFmLENBQVA7QUFlSCxpQkF0Q0QsRUFzQ0d1RyxLQXRDSCxDQXNDVXpMLENBQUQsSUFBTztBQUNaK2M7QUFDSCxpQkF4Q0Q7QUF5Q0gsYUFoREQsQ0FnREUsT0FBTy9jLENBQVAsRUFBVTtBQUNSK2M7QUFDSDtBQUNKLFNBcERNLENBQVA7QUFxREg7O0FBTUQvZCxhQUFTOztBQUVMLFlBQUksS0FBS2hDLEtBQUwsQ0FBV3dmLE9BQVgsSUFBc0IsS0FBS3ZmLEtBQUwsQ0FBV3VmLE9BQXJDLEVBQThDO0FBQzFDLG1CQUFPLDhCQUFDLGtCQUFELEVBQWtCLEtBQUt4ZixLQUF2QixDQUFQO0FBQ0g7O0FBRUQsZUFDSSw4QkFBQyxlQUFELEVBQXVCLEtBQUtBLEtBQTVCLENBREo7QUFHSDtBQXZGdUM7O0FBQXRDdWYsYSxDQTBFS04sWSxHQUFlO0FBQ2xCQyxZQUFRLE1BQU07QUFESSxDO0FBZ0IxQixNQUFNQyxrQkFBa0IsQ0FBQ2xmLEtBQUQsRUFBUWtnQixXQUFSLEtBQXdCO0FBQzVDOzs7QUFHQSxRQUFJcFksb0JBQW9CLElBQXhCO0FBQ0EsUUFBSSxFQUFFcVksYUFBRixLQUFvQkQsV0FBeEI7QUFDQSxRQUFJQyxpQkFBaUJBLGNBQWNqZixJQUFuQyxFQUF5QztBQUNyQzRHLDRCQUFvQnFZLGNBQWNqZixJQUFsQztBQUNIOztBQUVELFVBQU07QUFDRmtmLGtDQURFO0FBRUY5YywrQkFGRTtBQUdGbEQsd0JBSEU7QUFJRjBKLHNCQUpFO0FBS0Z2SixvQkFMRTtBQU1Gb0osdUJBTkU7QUFPRmtCLGlCQVBFO0FBUUZpSCx5QkFSRTtBQVNGL0gsWUFURTtBQVVGTixzQkFWRTtBQVdGTyw2QkFYRTtBQVlGQywwQkFaRTtBQWFGVixxQkFiRTtBQWNGOFcsdUJBZEU7QUFlRi9NLHVCQWZFO0FBZ0JGRjtBQWhCRSxRQWlCRnBULE1BQU1tZixtQkFqQlY7O0FBbUJBLFVBQU07QUFDRm1COztBQURFLFFBR0Z0Z0IsTUFBTXVnQixvQkFIVjs7QUFLQSxRQUFJOUksVUFBVXpYLE1BQU15WCxPQUFwQjtBQUNBLFFBQUlELFlBQVl4WCxNQUFNd1gsU0FBdEI7O0FBRUEsUUFBSSxFQUFFdEUsWUFBRixFQUFnQmYsVUFBaEIsRUFBNEJhLG9CQUE1QixFQUFrRGhSLEtBQWxELEVBQXlEd2UsZUFBekQsRUFBMEV2SSxjQUExRSxFQUEwRjNGLFNBQTFGLEVBQXFHbU8sT0FBckcsRUFBOEdDLE9BQTlHLEVBQXVIQyxhQUF2SCxFQUFzSUMsY0FBdEksRUFBc0p6QyxVQUF0SixFQUFrS3ZXLE9BQWxLLEVBQTJLMlgsT0FBM0ssRUFBb0w1TSxhQUFwTCxFQUFtTTBMLFlBQW5NLEVBQWlOeE8sdUJBQWpOLEtBQTZPN1AsTUFBTTZnQixhQUF2UDs7QUFFQSxVQUFNO0FBQ0YvSCxpQkFERTtBQUVGMU8sNkJBRkU7QUFHRkMsd0JBSEU7QUFJRnlXO0FBSkUsUUFLRjlnQixNQUFNK2dCLElBTFY7O0FBT0EsV0FBTztBQUNIdEosZUFERyxFQUNNdEYsVUFETixFQUNrQmEsb0JBRGxCO0FBRUhvTixrQ0FGRztBQUdIOWMsK0JBSEc7QUFJSGxELHdCQUpHO0FBS0gwSixzQkFMRztBQU1IOUgsYUFORztBQU9Id2UsdUJBUEc7QUFRSDFZLHlCQVJHO0FBU0h2SCxvQkFURztBQVVIb0osdUJBVkc7QUFXSHNPLHNCQVhHO0FBWUhwTixpQkFaRztBQWFIaUgseUJBYkc7QUFjSC9ILFlBZEc7QUFlSHVJLGlCQWZHO0FBZ0JIa0YsaUJBaEJHO0FBaUJIdEUsb0JBakJHLEVBaUJXdU4sT0FqQlgsRUFpQm9CQyxPQWpCcEIsRUFpQjZCQyxhQWpCN0I7QUFrQkhsWCxzQkFsQkc7QUFtQkhPLDZCQW5CRztBQW9CSEMsMEJBcEJHO0FBcUJIMlcsc0JBckJHO0FBc0JIekMsa0JBdEJHO0FBdUJIdlcsZUF2Qkc7QUF3QkgyQixxQkF4Qkc7QUF5QkhnVyxlQXpCRztBQTBCSHpHLGlCQTFCRztBQTJCSDFPLDZCQTNCRztBQTRCSEMsd0JBNUJHO0FBNkJIc0kscUJBN0JHO0FBOEJIMk4sd0JBOUJHO0FBK0JIUSxtQkEvQkc7QUFnQ0hULHVCQWhDRztBQWlDSGhDLG9CQWpDRztBQWtDSHhPLCtCQWxDRztBQW1DSHlELHVCQW5DRztBQW9DSEY7QUFwQ0csS0FBUDtBQXNDSCxDQXBGRDs7QUFzRkEsTUFBTWdNLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3JDLFdBQU87QUFDSGxELHFCQUFhLENBQUN0WixHQUFELEVBQU13TCxFQUFOLEtBQWFnUixTQUFTLHdCQUFZeGMsR0FBWixFQUFpQndMLEVBQWpCLENBQVQsQ0FEdkI7QUFFSDJTLCtCQUF1QixNQUFNM0IsU0FBUzJCLHVCQUFULENBRjFCO0FBR0h4UiwyQkFBbUIsQ0FBQy9MLElBQUQsRUFBT3dkLFFBQVAsRUFBaUJDLFFBQWpCLEVBQTJCM2QsTUFBM0IsS0FBc0M4YixTQUFTLDhCQUFrQjViLElBQWxCLEVBQXdCd2QsUUFBeEIsRUFBa0NDLFFBQWxDLEVBQTRDM2QsTUFBNUMsQ0FBVCxDQUh0RDtBQUlIK0ssb0JBQVksQ0FBQ3RPLEtBQUQsRUFBUStKLElBQVIsRUFBY29YLFdBQWQsRUFBMkJDLFdBQTNCLEVBQXdDL1MsRUFBeEMsRUFBNENwRyxXQUE1QyxLQUE0RG9YLFNBQVMsdUJBQVdyZixLQUFYLEVBQWtCK0osSUFBbEIsRUFBd0JvWCxXQUF4QixFQUFxQ0MsV0FBckMsRUFBa0QvUyxFQUFsRCxFQUFzRHBHLFdBQXRELENBQVQsQ0FKckU7QUFLSGlELHVCQUFlLENBQUNsTCxLQUFELEVBQVEySixlQUFSLEtBQTRCMFYsU0FBUywwQkFBY3JmLEtBQWQsRUFBcUIySixlQUFyQixDQUFULENBTHhDO0FBTUgwWCx5QkFBaUIsQ0FBQ0MsUUFBRCxFQUFXQyxRQUFYLEtBQXdCbEMsU0FBUyw0QkFBZ0JpQyxRQUFoQixFQUEwQkMsUUFBMUIsQ0FBVCxDQU50QztBQU9IN1csdUJBQWUsQ0FBQzdILEdBQUQsRUFBTWtILElBQU4sS0FBZXNWLFNBQVMsMEJBQWN4YyxHQUFkLEVBQW1Ca0gsSUFBbkIsQ0FBVCxDQVAzQjtBQVFIeVgsOEJBQXVCN2QsYUFBRCxJQUFtQjBiLFNBQVMsaUNBQXFCMWIsYUFBckIsQ0FBVCxDQVJ0QztBQVNIOGQsMkJBQW1CLE1BQU1wQyxTQUFTLCtCQUFULENBVHRCO0FBVUhxQyxnQ0FBd0IsTUFBTXJDLFNBQVMseUNBQVQsQ0FWM0I7QUFXSGpYLHFCQUFhLENBQUN1WixRQUFELEVBQVc5WCxPQUFYLEVBQW9CK1gsVUFBcEIsS0FBbUN2QyxTQUFTLHdCQUFZc0MsUUFBWixFQUFzQjlYLE9BQXRCLEVBQStCK1gsVUFBL0IsQ0FBVCxDQVg3QztBQVlIaFksNEJBQW9CLENBQUMrWCxRQUFELEVBQVczRCxhQUFYLEtBQTZCcUIsU0FBUywrQkFBbUJzQyxRQUFuQixFQUE2QjNELGFBQTdCLENBQVQsQ0FaOUM7QUFhSDZELDBCQUFtQnBlLElBQUQsSUFBVTRiLFNBQVMsNkJBQWlCNWIsSUFBakIsQ0FBVCxDQWJ6QjtBQWNIaVksK0JBQXVCLE1BQU0yRCxTQUFTLG1DQUFULENBZDFCO0FBZUhHLG1CQUFZUyxNQUFELElBQVlaLFNBQVMsc0JBQVVZLE1BQVYsQ0FBVCxDQWZwQjtBQWdCSDFiLDJCQUFtQixDQUFDRixJQUFELEVBQU95ZCxVQUFQLEVBQW1CQyxhQUFuQixLQUFxQzFDLFNBQVMsOEJBQWtCaGIsSUFBbEIsRUFBd0J5ZCxVQUF4QixFQUFvQ0MsYUFBcEMsQ0FBVCxDQWhCckQ7QUFpQkh0ZCwrQkFBdUIsQ0FBQ3VNLFNBQUQsRUFBWWdSLFNBQVosRUFBdUJyZSxhQUF2QixFQUFzQ3VkLFFBQXRDLEtBQW1EN0IsU0FBUyxrQ0FBc0JyTyxTQUF0QixFQUFpQ2dSLFNBQWpDLEVBQTRDcmUsYUFBNUMsRUFBMkR1ZCxRQUEzRCxDQUFULENBakJ2RTtBQWtCSHJMLHNCQUFjLENBQUNsVSxHQUFELEVBQU1DLElBQU4sS0FBZXlkLFNBQVMseUJBQWExZCxHQUFiLEVBQWtCQyxJQUFsQixDQUFULENBbEIxQjtBQW1CSHFnQixpQ0FBeUIsQ0FBQ3hlLElBQUQsRUFBT3dkLFFBQVAsRUFBaUJDLFFBQWpCLEVBQTJCM2QsTUFBM0IsS0FBc0M4YixTQUFTLG9DQUF3QjViLElBQXhCLEVBQThCd2QsUUFBOUIsRUFBd0NDLFFBQXhDLEVBQWtEM2QsTUFBbEQsQ0FBVCxDQW5CNUQ7QUFvQkgyZSx5QkFBZ0IsTUFBTTdDLFNBQVMsNkJBQVQsQ0FwQm5CO0FBcUJIdmQsd0JBQWdCLENBQUNmLFFBQUQsRUFBVzBDLElBQVgsS0FBb0I0YixTQUFTLDJCQUFldGUsUUFBZixFQUF5QjBDLElBQXpCLENBQVQsQ0FyQmpDO0FBc0JIc0gsc0NBQStCK0csaUJBQUQsSUFBdUJ1TixTQUFTLHlDQUE2QnZOLGlCQUE3QixDQUFULENBdEJsRDtBQXVCSHFRLDBCQUFtQmxFLElBQUQsSUFBVW9CLFNBQVMsNkJBQWlCcEIsSUFBakIsQ0FBVCxDQXZCekI7QUF3QkhoRCxrQ0FBMEIsQ0FBQ2piLEtBQUQsRUFBUStKLElBQVIsRUFBY29YLFdBQWQsRUFBMkJDLFdBQTNCLEVBQXdDL1MsRUFBeEMsRUFBNENwRyxXQUE1QyxLQUE0RG9YLFNBQVMscUNBQXlCcmYsS0FBekIsRUFBZ0MrSixJQUFoQyxFQUFzQ29YLFdBQXRDLEVBQW1EQyxXQUFuRCxFQUFnRS9TLEVBQWhFLEVBQW9FcEcsV0FBcEUsQ0FBVCxDQXhCbkY7QUF5QkhrVCxxQ0FBNkIsQ0FBQ25iLEtBQUQsRUFBUStKLElBQVIsRUFBY29YLFdBQWQsRUFBMkJDLFdBQTNCLEVBQXdDL1MsRUFBeEMsRUFBNENwRyxXQUE1QyxLQUE0RG9YLFNBQVMsd0NBQTRCcmYsS0FBNUIsRUFBbUMrSixJQUFuQyxFQUF5Q29YLFdBQXpDLEVBQXNEQyxXQUF0RCxFQUFtRS9TLEVBQW5FLEVBQXVFcEcsV0FBdkUsQ0FBVCxDQXpCdEY7QUEwQkhtYSwwQkFBa0IsQ0FBQ2xoQixJQUFELEVBQU9kLGdCQUFQLEVBQXlCaU8sRUFBekIsS0FBK0JnUixTQUFTLDZCQUFpQm5lLElBQWpCLEVBQXVCZCxnQkFBdkIsRUFBeUNpTyxFQUF6QyxDQUFULENBMUI5QztBQTJCSGhGLDRCQUFvQixDQUFDOEMsTUFBRCxFQUFTa0MsRUFBVCxLQUFnQmdSLFNBQVMsK0JBQW1CbFQsTUFBbkIsRUFBMkJrQyxFQUEzQixDQUFULENBM0JqQztBQTRCSGdVLDJCQUFtQixDQUFDcEIsUUFBRCxFQUFXQyxRQUFYLEtBQXdCN0IsU0FBUyw4QkFBa0I0QixRQUFsQixFQUE0QkMsUUFBNUIsQ0FBVCxDQTVCeEM7QUE2Qkg1WCx5QkFBaUIsQ0FBQ2daLFVBQUQsRUFBYWpVLEVBQWIsS0FBb0JnUixTQUFTLDRCQUFnQmlELFVBQWhCLEVBQTRCalUsRUFBNUIsQ0FBVCxDQTdCbEM7QUE4QkhrQywwQkFBbUJ6RyxjQUFELElBQW1CdVYsU0FBUyw2QkFBaUJ2VixjQUFqQixDQUFULENBOUJsQztBQStCSHlZLDhCQUFxQixNQUFLbEQsU0FBUyxrQ0FBVCxDQS9CdkI7QUFnQ0gxTiwyQkFBa0IsQ0FBQ3pRLElBQUQsRUFBTW1OLEVBQU4sS0FBWWdSLFNBQVMsOEJBQWtCbmUsSUFBbEIsRUFBd0JtTixFQUF4QixDQUFULENBaEMzQjtBQWlDSG1ELDJCQUFtQmdSLE1BQUQsSUFBV25ELFNBQVMsOEJBQWtCbUQsTUFBbEIsQ0FBVDtBQWpDMUIsS0FBUDtBQW1DSCxDQXBDRDs7a0JBc0NlLHlCQUFRdEQsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDRSxhQUE3QyxDIiwiZmlsZSI6IjQ2LnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2NhdGlvblBvcHVwIGZyb20gJy4vbG9jYXRpb25Qb3B1cFZpZXcnXG5cbmV4cG9ydCBkZWZhdWx0IGxvY2F0aW9uUG9wdXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZyB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbWFwSGVscGVycydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuXG5jbGFzcyBMb2NhdGlvblBvcHVwVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgICAgICBsb2NhdGlvbl9vYmplY3Q6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZWFyY2gpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAhPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uX29iamVjdDogcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoOiBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghcHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uX29iamVjdDogcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoOiBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb25UeXBlICYmICF0aGlzLnByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9jYXRpb25fb2JqZWN0OiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24sIHNlYXJjaDogdGhpcy5wcm9wcy5sb2NhdGlvbk5hbWUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb1RvTG9jYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzVG9wYmFyKSB7XG4gICAgICAgICAgICBsZXQgcmVkaXJlY3RfdG8gPSBcIlwiXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdzcHRjaXQnKSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3NwdGxpdGNpdCcpKSB7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RfdG8gPSBcIi9vcGQvc2VhcmNocmVzdWx0c1wiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2xiY2l0JykgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdsYmxpdGNpdCcpKSB7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RfdG8gPSBcIi9sYWIvc2VhcmNocmVzdWx0c1wiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBsb2NhdGlvbl91cmwgPSAnL2xvY2F0aW9uc2VhcmNoJ1xuICAgICAgICAgICAgaWYgKHJlZGlyZWN0X3RvKSB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb25fdXJsICs9IGA/cmVkaXJlY3RfdG89JHtyZWRpcmVjdF90b31gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGFuZ2VMb2NhdGlvbkRvY3RvclJlc3VsdHNQb3BVcCcsICdBY3Rpb24nOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uX3VybClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRpbnVlTG9jYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29udGludWVMb2NhdGlvbkRvY3RvclJlc3VsdHNQb3BVcCcsICdBY3Rpb24nOiAnY29udGludWUtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb250aW51ZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICBpZiAocGFyc2VkLmxhdCAmJiBwYXJzZWQubG9uZykge1xuICAgICAgICAgICAgX2dldGxvY2F0aW9uRnJvbUxhdExvbmcocGFyc2VkLmxhdCwgcGFyc2VkLmxvbmcsICdsb2NhbGl0eScsIChsb2NhdGlvbkRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TG9jYXRpb24obG9jYXRpb25EYXRhLCAnYXV0b0RldGVjdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnItbG9jYXRpb24tcG9wdXAtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtbWRcIj5TaG93aW5nIHt0aGlzLnByb3BzLmNvdW50fSByZXN1bHRzIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCB9fT57dGhpcy5wcm9wcy5jcml0ZXJpYVN0cmluZyA/IGBmb3IgJHt0aGlzLnByb3BzLmNyaXRlcmlhU3RyaW5nfWAgOiAnJ308L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTcwMCB0ZXh0LW1kXCI+e3RoaXMucHJvcHMubG9jYXRpb25OYW1lID8gYCBpbiAke3RoaXMucHJvcHMubG9jYXRpb25OYW1lfWAgOiAnJ308L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDAgZnItcG9wdXAtY29udFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuY29udGludWVMb2NhdGlvbigpfT5Db250aW51ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMjAgdGV4dC14c1wiPk9SPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJ0LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZnctNTAwIGZyLXBvcHVwLWNoYW5nZVwiIG9uQ2xpY2s9e3RoaXMuZ29Ub0xvY2F0aW9uLmJpbmQodGhpcyl9PkNoYW5nZSBMb2NhdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uUG9wdXBWaWV3IiwiaW1wb3J0IE5vdEZvdW5kVmlldyBmcm9tICcuL25vdEZvdW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBOb3RGb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwcm9maWxlLWhlYWRlclwiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21pbGV5LWltZy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc21pbGV5LnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGhlYWRlci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlciBsb2dvLWljb24tZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZG9jLXByaW1lLWxvZ28ucG5nXCJ9IGNsYXNzTmFtZT1cImxvZ28taWNvblwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEwIG9mZnNldC1tZC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci13aWRnZXQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItaGVhZCBmdy01MDBcIj40MDQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvaWNvbnMvZXJyb3IucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHQgZnctNTAwXCI+UGFnZSBub3QgZm91bmQgITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItbGlua1wiPkdvIHRvIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PmRvY3ByaW1lIGhvbWVwYWdlPC9hPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnO1xuaW1wb3J0IFByb2NlZHVyZVBvcHVwIGZyb20gJy4uL1BvcFVwJ1xuXG5jbGFzcyBDbGluaWNSZXN1bHRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW5TZWxlY3REb2N0b3I6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVTZWxlY3REb2N0b3IoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuU2VsZWN0RG9jdG9yOiAhdGhpcy5zdGF0ZS5vcGVuU2VsZWN0RG9jdG9yIH0pXG4gICAgfVxuXG4gICAgY2FyZENsaWNrKGlkLCB1cmwsIGhvc3BpdGFsX2lkLCBlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3RvclNlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLXNlbGVjdGVkJywgJ3NlbGVjdGVkSWQnOiBpZFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yUmFua0luU2VhcmNoJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLXJhbmstaW4tc2VhcmNoJywgJ1JhbmsnOiB0aGlzLnByb3BzLnJhbmsgKyAxXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCBjYXRlZ29yeV9pZHMgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAncHJvY2VkdXJlc19jYXRlZ29yeScpLm1hcCh4ID0+IHguaWQpXG4gICAgICAgICAgICBsZXQgcHJvY2VkdXJlX2lkcyA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdwcm9jZWR1cmVzJykubWFwKHggPT4geC5pZClcblxuXG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfWApXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5X2lkcy5sZW5ndGggfHwgcHJvY2VkdXJlX2lkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3VybH0/aG9zcGl0YWxfaWQ9JHtob3NwaXRhbF9pZH0maXNfcHJvY2VkdXJlPXRydWUmY2F0ZWdvcnlfaWRzPSR7Y2F0ZWdvcnlfaWRzfSZwcm9jZWR1cmVfaWRzPSR7cHJvY2VkdXJlX2lkc31gKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt1cmx9P2hvc3BpdGFsX2lkPSR7aG9zcGl0YWxfaWR9YClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7aWR9YClcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlfaWRzLmxlbmd0aCB8fCBwcm9jZWR1cmVfaWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9kb2N0b3IvJHtpZH0/aG9zcGl0YWxfaWQ9JHtob3NwaXRhbF9pZH0maXNfcHJvY2VkdXJlPXRydWUmY2F0ZWdvcnlfaWRzPSR7Y2F0ZWdvcnlfaWRzfSZwcm9jZWR1cmVfaWRzPSR7cHJvY2VkdXJlX2lkc31gKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvb3BkL2RvY3Rvci8ke2lkfT9ob3NwaXRhbF9pZD0ke2hvc3BpdGFsX2lkfWApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UXVhbGlmaWNhdGlvblN0cihxdWFsaWZpY2F0aW9uU3BlY2lhbGl6YXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbi5yZWR1Y2UoKHN0ciwgY3VyciwgaSkgPT4ge1xuICAgICAgICAgICAgc3RyICs9IGAke2N1cnIubmFtZX1gXG4gICAgICAgICAgICBpZiAoaSA8IHF1YWxpZmljYXRpb25TcGVjaWFsaXphdGlvbi5sZW5ndGggLSAxKSBzdHIgKz0gYCwgYDtcbiAgICAgICAgICAgIHJldHVybiBzdHJcbiAgICAgICAgfSwgXCJcIilcbiAgICB9XG5cbiAgICBib29rTm93Q2xpY2tlZChpZCwgdXJsLCBob3NwaXRhbF9pZCwgZSkge1xuICAgICAgICAvL2Fsd2F5cyBjbGVhciBzZWxlY3RlZCB0aW1lIGF0IGRvY3RvciBwcm9maWxlXG4gICAgICAgIGxldCBzbG90ID0geyB0aW1lOiB7fSB9XG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0T3BkVGltZVNMb3Qoc2xvdCwgZmFsc2UpXG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZFNlYXJjaEJvb2tOb3dDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3BkLWJvb2stbm93LWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IGlkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBsZXQgeyBwcm9jZWR1cmVfaWRzIH0gPSB0aGlzLnRyYWNraW5nRXZlbnRzQm9va05vdyhpZClcbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlUHJvZmlsZVByb2NlZHVyZXMoJycsICcnLCBwcm9jZWR1cmVfaWRzLCB0cnVlKVxuICAgICAgICBpZih1cmwpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3VybH0vYm9va2luZz9kb2N0b3JfaWQ9JHtpZH0maG9zcGl0YWxfaWQ9JHtob3NwaXRhbF9pZH1gKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9vcGQvZG9jdG9yLyR7aWR9LyR7aG9zcGl0YWxfaWR9L2Jvb2tkZXRhaWxzYClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYWNraW5nRXZlbnRzQm9va05vdyhpZCkge1xuICAgICAgICBsZXQgRGlzdGFuY2UgPSAnJ1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRldGFpbHMgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICBEaXN0YW5jZSA9IChNYXRoLnJvdW5kKHRoaXMucHJvcHMuZGV0YWlscy5kaXN0YW5jZSAqIDEwKSAvIDEwKS50b0ZpeGVkKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3RvclNlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLXNlbGVjdGVkJywgJ3NlbGVjdGVkSWQnOiBpZFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pO1xuXG4gICAgICAgIGxldCBjYXRlZ29yeV9pZHMgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAncHJvY2VkdXJlc19jYXRlZ29yeScpLm1hcCh4ID0+IHguaWQpLmpvaW4oJywnKVxuICAgICAgICBsZXQgcHJvY2VkdXJlX2lkcyA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdwcm9jZWR1cmVzJykubWFwKHggPT4geC5pZCkuam9pbignLCcpXG4gICAgICAgIGxldCBjb25kaXRpb25faWRzID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ2NvbmRpdGlvbicpLm1hcCh4ID0+IHguaWQpLmpvaW4oJywnKVxuICAgICAgICBsZXQgc3BlY2lhbGl6YXRpb25faWRzID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3NwZWNpYWxpdHknKS5tYXAoeCA9PiB4LmlkKS5qb2luKCcsJylcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yUmFua0luU2VhcmNoJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLXJhbmstaW4tc2VhcmNoJywgJ1JhbmsnOiB0aGlzLnByb3BzLnJhbmsgKyAxLCAnRG9jdG9yU2VhcmNoQ291bnQnOiB0aGlzLnByb3BzLmNvdW50LCAnc3BlY2lhbGl6YXRpb25zJzogc3BlY2lhbGl6YXRpb25faWRzLCAnY29uZGl0aW9ucyc6IGNvbmRpdGlvbl9pZHMsICdwcm9jZWR1cmVzJzogcHJvY2VkdXJlX2lkcywgJ3Byb2NlZHVyZV9jYXRlZ29yeSc6IGNhdGVnb3J5X2lkcywgJ0Rpc3RhbmNlJzogRGlzdGFuY2VcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIHJldHVybiAoeyBjYXRlZ29yeV9pZHMsIHByb2NlZHVyZV9pZHMgfSlcblxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBob3NwaXRhbF9pZCwgYWRkcmVzcywgaG9zcGl0YWxfbmFtZSwgZG9jdG9ycywgcHJvY2VkdXJlX2NhdGVnb3JpZXMsIHNob3J0X2FkZHJlc3MgfSA9IHRoaXMucHJvcHMuZGV0YWlsc1xuICAgICAgICBsZXQgc3BlY2lhbGl6YXRpb24gPSBcIlwiXG4gICAgICAgIGxldCB7IGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGlmIChjb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiBjb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uID0gY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0ubmFtZVxuICAgICAgICB9XG4gICAgICAgIGxldCBkb2N0b3IgPSAoZG9jdG9ycyAmJiBkb2N0b3JzLmxlbmd0aCkgPyBkb2N0b3JzWzBdIDoge31cblxuICAgICAgICBpZiAoZG9jdG9ycyAmJiBkb2N0b3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHsgZGlzY291bnRlZF9wcmljZSwgZGlzdGFuY2UsIGlzX2xpY2Vuc2VfdmVyaWZpZWQsIGRlYWxfcHJpY2UsIG1ycCwgZ2VuZXJhbF9zcGVjaWFsaXphdGlvbiwgZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgfSA9IGRvY3RvclxuXG4gICAgICAgICAgICBkaXN0YW5jZSA9IChNYXRoLnJvdW5kKGRpc3RhbmNlICogMTApIC8gMTApLnRvRml4ZWQoMSlcbiAgICAgICAgICAgIGxldCBkaXNjb3VudCA9IDBcbiAgICAgICAgICAgIGlmIChtcnAgIT0gMCAmJiBkaXNjb3VudGVkX3ByaWNlICE9IDApIHtcbiAgICAgICAgICAgICAgICBkaXNjb3VudCA9IDEwMCAtIE1hdGgucm91bmQoKGRpc2NvdW50ZWRfcHJpY2UgKiAxMDApIC8gbXJwKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaXNfcHJvY2VkdXJlID0gZmFsc2VcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZENvdW50ID0gMFxuICAgICAgICAgICAgbGV0IHVuc2VsZWN0ZWRDb3VudCA9IDBcbiAgICAgICAgICAgIGxldCBmaW5hbFByb2NlZHVyZURlYWxQcmljZSA9IGRpc2NvdW50ZWRfcHJpY2VcbiAgICAgICAgICAgIGxldCBmaW5hbFByb2NlZHVyZU1ycCA9IG1ycFxuICAgICAgICAgICAgcHJvY2VkdXJlX2NhdGVnb3JpZXMubWFwKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgaXNfcHJvY2VkdXJlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHgucHJvY2VkdXJlcy5maWx0ZXIoeCA9PiB4LmlzX3NlbGVjdGVkKS5tYXAoKHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxQcm9jZWR1cmVEZWFsUHJpY2UgKz0geC5kZWFsX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsUHJvY2VkdXJlTXJwICs9IHgubXJwXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ291bnQrK1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB1bnNlbGVjdGVkQ291bnQgKz0geC5wcm9jZWR1cmVzLmZpbHRlcih4ID0+ICF4LmlzX3NlbGVjdGVkKS5sZW5ndGhcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChpc19wcm9jZWR1cmUgJiYgZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmluYWxQcm9jZWR1cmVNcnAgIT0gMCAmJiBmaW5hbFByb2NlZHVyZURlYWxQcmljZSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ID0gMTAwIC0gTWF0aC5yb3VuZCgoZmluYWxQcm9jZWR1cmVEZWFsUHJpY2UgKiAxMDApIC8gZmluYWxQcm9jZWR1cmVNcnApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNfcHJvY2VkdXJlID0gZmFsc2VcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWNhcmQtZGwgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdHItY3JkLXRvcC1jb250YWluZXJcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19saWNlbnNlX3ZlcmlmaWVkID8gPHNwYW4gY2xhc3NOYW1lPVwiY2xpbmljLWZsdHItcnRuZ1wiPlZlcmlmaWVkPC9zcGFuPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmx0ci1sY3RuLWR0bHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbHRyLWxvYy1pY29cIiB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxOHB4XCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbmV3LWxvYy1pY28uc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkaXN0YW5jZX0gS208L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdG9ycyAmJiBkb2N0b3JzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29rTm93Q2xpY2tlZChkb2N0b3IuaWQsIGRvY3Rvci51cmwsIGhvc3BpdGFsX2lkIHx8ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQ2xpY2soZG9jdG9yLmlkLCBkb2N0b3IudXJsLCBob3NwaXRhbF9pZCwgZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0RG9jdG9yKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaW5pYy1mbHRyLW5hbWUtZHRsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZ3LTUwMCBjbGluaWMtZmx0ci1kYy1uYW1lIHRleHQtbWQgbXJiLTEwXCI+e2hvc3BpdGFsX25hbWV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsaW5pYy1mbHRyLWxvYy10eHQgbXJiLTEwXCI+e2FkZHJlc3N9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXJiLTEwXCI+e3NwZWNpYWxpemF0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyBjb2xvcjogJyMwMDgwMDAnLCBmb250V2VpZ2h0OiAnNTAwJyB9fT5PcGVuIHRvZGF5PC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJ0LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgJiYgZGlzY291bnQgPyA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC14c1wiIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgcGFkZGluZ1JpZ2h0OiAnMnB4JyB9fT4qRXhjbHVzaXZlIGRpc2NvdW50IG9uIGNsaW5pYyByYXRlcy4gQXZhaWxhYmxlIG9ubHkgb24gcHJlcGFpZCBib29raW5nczwvcD4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHRyLWJrbmctc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nICYmIGRpc2NvdW50ID8gPHNwYW4gY2xhc3NOYW1lPVwiZmlsdHItb2ZmZXIgb2ZyLXJpYmJvbiBmdy03MDBcIj57ZGlzY291bnR9JSBPRkY8L3NwYW4+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmx0ci1wcmljZXNcIj7igrkge2ZpbmFsUHJvY2VkdXJlRGVhbFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFByb2NlZHVyZU1ycCA9PSBmaW5hbFByb2NlZHVyZURlYWxQcmljZSA/IFwiXCIgOiA8c3BhbiBjbGFzc05hbWU9XCJmbHRyLWN1dC1wcmljZVwiPuKCuSB7ZmluYWxQcm9jZWR1cmVNcnB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8cCBjbGFzc05hbWU9XCJmbHRyLXByaWNlc1wiPuKCuSB7ZmluYWxQcm9jZWR1cmVNcnB9PC9wPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgJiYgZGlzY291bnRlZF9wcmljZSAhPSBkZWFsX3ByaWNlID8gPHNwYW4gY2xhc3NOYW1lPVwic2lnbnVwLW9mZi1kb2MtZ3JlZW5cIiBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPkluY2x1ZGVzIGNvdXBvbiBkaXNjb3VudDwvc3Bhbj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWRpc2NvdW50ZWRfcHJpY2UgJiYgIWlzX3Byb2NlZHVyZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ci1vZmZlciBvZnItcmliYm9uIGZyZWUtb2ZyLXJpYmJvbiBmdy03MDBcIj5GcmVlPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9ycyAmJiBkb2N0b3JzLmxlbmd0aCA9PSAxID8gKGVuYWJsZWRfZm9yX29ubGluZV9ib29raW5nID8gPGJ1dHRvbiBjbGFzc05hbWU9XCJmbHRyLWJrbmctYnRuXCI+Qm9vayBOb3c8L2J1dHRvbj4gOiA8YnV0dG9uIGNsYXNzTmFtZT1cImZsdHItY250Y3QtYnRuXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5Db250YWN0PC9idXR0b24+KSA6IDxidXR0b24gY2xhc3NOYW1lPVwiZmx0ci1ia25nLWJ0blwiPlNlbGVjdCBEb2N0b3I8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JzICYmIGRvY3RvcnMubGVuZ3RoID49IDIgJiYgdGhpcy5zdGF0ZS5vcGVuU2VsZWN0RG9jdG9yID8gPGRpdiBjbGFzc05hbWU9XCJzaG93Qm9va1Rlc3RMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JzLm1hcCgoZCwgeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXt4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2hvd0Jvb2tUZXN0TGlzdEltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHIuIHtkLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1wcmljZS1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzX3Byb2NlZHVyZSA/IDxwIGNsYXNzTmFtZT1cImRvYy1wcmljZS1jdXR0XCI+4oK5IHtkLmRpc2NvdW50ZWRfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQubXJwID09IGQuZGlzY291bnRlZF9wcmljZSA/IFwiXCIgOiA8c3Bhbj7igrkge2QubXJwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5lbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyA/IDxidXR0b24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17dGhpcy5ib29rTm93Q2xpY2tlZC5iaW5kKHRoaXMsIGQuaWQsIGQudXJsLCBob3NwaXRhbF9pZCB8fCAnJyl9IGNsYXNzTmFtZT1cInNob3dCb29rVGVzdExpc3RCdG5cIj5Cb29rIE5vdzwvYnV0dG9uPiA6IDxidXR0b24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17dGhpcy5jYXJkQ2xpY2suYmluZCh0aGlzLCBkLmlkLCBkLnVybCwgaG9zcGl0YWxfaWQpfSBjbGFzc05hbWU9XCJzaG93Qm9va1Rlc3RMaXN0QnRuIGNvbnRhY3Qtc21hbGwtYnRuXCI+Q29udGFjdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3JzICYmIGRvY3RvcnMubGVuZ3RoICYmIHRoaXMuc3RhdGUub3BlblNlbGVjdERvY3RvciA/IDxkaXYgb25DbGljaz17dGhpcy50b2dnbGVTZWxlY3REb2N0b3IuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiZmlsdHItY2FyZC1mb290ZXJcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNlOGU4ZTgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAnOHB4JyB9fT48cD5IaWRlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBhY3JkLXNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyBtYXJnaW46ICc1cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2xpbmljUmVzdWx0Q2FyZFxuIiwiaW1wb3J0IENsaW5pY1Jlc3VsdENhcmQgZnJvbSAnLi9DbGluaWNSZXN1bHRDYXJkLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBDbGluaWNSZXN1bHRDYXJkIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IERvY3RvcnNMaXN0IGZyb20gJy4uL3NlYXJjaFJlc3VsdHMvZG9jdG9yc0xpc3QvaW5kZXguanMnXG5pbXBvcnQgQ3JpdGVyaWFTZWFyY2ggZnJvbSAnLi4vLi4vY29tbW9ucy9jcml0ZXJpYVNlYXJjaCdcbmltcG9ydCBUb3BCYXIgZnJvbSAnLi9uZXdUb3BCYXInXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgTkFWSUdBVEUgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9uYXZpZ2F0ZSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL2Zvb3RlcidcbmltcG9ydCBSZXN1bHRDb3VudCBmcm9tICcuL3RvcEJhci9yZXN1bHRfY291bnQuanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IFNDUk9MTCBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3Njcm9sbEhlbHBlci5qcydcbmltcG9ydCBDYXJvdXNlbFZpZXcgZnJvbSAnLi9jYXJvdXNlbFZpZXcuanMnXG5pbXBvcnQgTm9uSXBkUG9wdXBWaWV3IGZyb20gJy4uLy4uL2NvbW1vbnMvbm9uSXBkUG9wdXAuanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmNsYXNzIFNlYXJjaFJlc3VsdHNWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgbGV0IHNlb0RhdGEgPSBudWxsXG4gICAgICAgIGxldCBmb290ZXJEYXRhID0gbnVsbFxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEpIHtcbiAgICAgICAgICAgIHNlb0RhdGEgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLnNlb0RhdGFcbiAgICAgICAgICAgIGZvb3RlckRhdGEgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmZvb3RlckRhdGFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLy9zZW9EYXRhLCBcbiAgICAgICAgICAgIGZvb3RlckRhdGEsXG4gICAgICAgICAgICBzZW9GcmllbmRseTogdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1zcHRjaXQnKSB8fCB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLXNwdGxpdGNpdCcpIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctaXBkZHAnKSxcbiAgICAgICAgICAgIGNsaW5pY19jYXJkOiB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnY2xpbmljX2NhcmQnKSB8fCBudWxsLFxuICAgICAgICAgICAgc2hvd0Vycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHNlYXJjaF9pZDogJycsXG4gICAgICAgICAgICBzZXRTZWFyY2hJZDogZmFsc2UsXG4gICAgICAgICAgICBzY3JvbGxQb3NpdGlvbjogMCxcbiAgICAgICAgICAgIHF1aWNrRmlsdGVyOiB7fSxcbiAgICAgICAgICAgIGRldGVjdExvY2F0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIHNwb25zb3JEYXRhOiBbXSxcbiAgICAgICAgICAgIGZyb21WaXA6IHBhcnNlZCAmJiAocGFyc2VkLmZyb21WaXAgfHwgcGFyc2VkLmZyb21Hb2xkVmlwKSxcbiAgICAgICAgICAgIHNlYXJjaF9zdHJpbmc6JycsXG4gICAgICAgICAgICBzaG93U2VhcmNoQnRuOmZhbHNlLFxuICAgICAgICAgICAgc2Nyb2xsRXZlbnRBZGRlZDogZmFsc2UsXG4gICAgICAgICAgICBzaG93Tm9uSXBkUG9wdXA6IHBhcnNlZC5zaG93X3BvcHVwLFxuICAgICAgICAgICAgdG9fYmVfZm9yY2U6MSxcbiAgICAgICAgICAgIGlzX2xlYWRfZW5hYmxlZDp0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxIYW5kbGVyPSAoKT0+e1xuICAgICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICAgIHZhciBzY3JlZW5TaXplID0gd2luZG93LnNjcmVlbiAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIHx8IG51bGxcbiAgICAgICAgbGV0IGhlaWdodCA9IDM3NVxuICAgICAgICBpZihzY3JlZW5TaXplICYmIHNjcmVlblNpemU8OTkyKSB7XG4gICAgICAgICAgICBoZWlnaHQ9IGhlaWdodC0xMjBcbiAgICAgICAgfVxuICAgICAgICBpZihzY3JvbGxQb3NpdGlvbj5oZWlnaHQpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1NlYXJjaEJ0bjogdHJ1ZX0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1NlYXJjaEJ0bjogZmFsc2V9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8qbGV0IGFhID0gey4uLlNDUk9MTH1cbiAgICAgICAgLy9hYS5pbml0KClcbiAgICAgICAgYWEuYWRkRXZlbnRzKCdtYXAnKSovXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICAvL0FQSSBUTyBHRVQgU1BPTlNPUkxJU1QgXG4gICAgICAgIGxldCBzZWFyY2hVcmwgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLXNwdGNpdCcpIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctc3B0bGl0Y2l0JykgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1pcGRkcCcpKSB7XG4gICAgICAgICAgICBzZWFyY2hVcmwgPSB0aGlzLnByb3BzLm1hdGNoLnVybC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH1cblxuICAgICAgICAvL1NUQVJUIFNhdmUgU2VsZWN0ZWQgQ2l0eSBvbiBMb2NhdGlvbiBDaGFuZ2VcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb25UeXBlICYmICF0aGlzLnByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfc3RyaW5nOiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MgfSlcblxuICAgICAgICB9XG4gICAgICAgIC8vU1RBUlQgU2F2ZSBTZWxlY3RlZCBDaXR5IG9uIExvY2F0aW9uIENoYW5nZVxuICAgICAgICAvL0FkZCBTY3JvbGwgRXZlbnRzIGZvciBTdGlja3kgU2VhcmNoIEZpbHRlciBmb3IgVmlwIE5ldHdvcmsgc2VhcmNoXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZnJvbVZpcCAmJiAhdGhpcy5zdGF0ZS5zY3JvbGxFdmVudEFkZGVkICYmIHRoaXMucmVmc1sndmlwX3NyY2hfd2lkZ2V0J10gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcilcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Njcm9sbEV2ZW50QWRkZWQ6IHRydWV9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy9FbmQgQWRkIFNjcm9sbCBFdmVudHMgZm9yIFN0aWNreSBTZWFyY2ggRmlsdGVyIGZvciBWaXAgTmV0d29yayBzZWFyY2hcblxuXG5cblxuXG4gICAgICAgIC8qbGV0IHNwb25zb3JEYXRhID0ge1xuICAgICAgICAgICAgdXRtX3Rlcm06IHBhcnNlZCAmJiBwYXJzZWQudXRtX3Rlcm0/cGFyc2VkLnV0bV90ZXJtOicnLFxuICAgICAgICAgICAgc2VhcmNoVXJsOnNlYXJjaFVybCxcbiAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uc19pZHM6JydcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzcG9uc29yRGF0YS5zcGVjaWFsaXphdGlvbnNfaWRzID0gdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3NwZWNpYWxpdHknKS5tYXAoeCA9PiB4LmlkKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0U3BvbnNvcmVkTGlzdChzcG9uc29yRGF0YSwgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLCAocmVzcG9uc2UpPT57XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzcG9uc29yRGF0YTogcmVzcG9uc2V9KVxuICAgICAgICB9KSovXG5cbiAgICAgICAgLy9JRiBGcm9tIFZJUCBnZXQgbmVhcmJ5RG9jdG9yc1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5mcm9tVmlwKSB7XG4gICAgICAgICAgICBsZXQgZXh0cmFEYXRhID0ge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb246IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICAgICAgICB0eXBlOnBhcnNlZC5mcm9tVmlwPydpc192aXAnOnBhcnNlZC5mcm9tR29sZFZpcD8naXNfZ29sZCc6bnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXROZWFyYnlIb3NwaXRhbHMoZXh0cmFEYXRhKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRUb3BIb3NwaXRhbHMoZXh0cmFEYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWVyZ2VVcmxTdGF0ZSkge1xuICAgICAgICAgICAgbGV0IGdldFNlYXJjaElkID0gdHJ1ZVxuICAgICAgICAgICAgLy9pZiBzZWFyY2ggaWQgZXhpc3QgaW4gdXJsIHRoZW4gd2UgZ2V0IGRhdGEgZm9yIHRoYXQgc2VhcmNoIGlkIGZyb20gc3RvcmVcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnc2VhcmNoX2lkJykpIHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhICYmIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0gJiYgdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXS5kYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgZ2V0U2VhcmNoSWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXS5kYXRhLnJlc3VsdCAmJiB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmRhdGEucmVzdWx0Lmxlbmd0aCAmJiAhdGhpcy5wcm9wcy5mZXRjaE5ld1Jlc3VsdHMpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaF9pZDogcGFyc2VkLnNlYXJjaF9pZCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRTZWFyY2hJZFJlc3VsdHMocGFyc2VkLnNlYXJjaF9pZCwgdGhpcy5wcm9wcy5zZWFyY2hfaWRfZGF0YVtwYXJzZWQuc2VhcmNoX2lkXSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyA9IHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbcGFyc2VkLnNlYXJjaF9pZF0uY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMuZmlsdGVyQ3JpdGVyaWEgPSB0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhW3BhcnNlZC5zZWFyY2hfaWRdLmZpbHRlckNyaXRlcmlhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoX2lkOiBwYXJzZWQuc2VhcmNoX2lkIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuZmV0Y2hOZXdSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgPSBwYXJzZWQucGFnZSB8fCAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0U2VhcmNoSWQocGFyc2VkLnNlYXJjaF9pZCwgZmlsdGVycywgcGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGdldFNlYXJjaElkKSB7XG4gICAgICAgICAgICAgICAgLy9JZiBubyBzZWFyY2hJZCBpbiB1cmwgdGhlbiB3ZSBjcmVhdGUgc2VhcmNoIGlkIGFuZCBzdG9yZSBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gdGhhdCBzZWFyY2ggaWRcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVycyA9IHt9XG4gICAgICAgICAgICAgICAgZmlsdGVycy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyA9IHRoaXMucHJvcHMubmV4dFNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJDcml0ZXJpYSA9IHRoaXMucHJvcHMubmV4dEZpbHRlckNyaXRlcmlhXG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaF9pZCA9IHRoaXMuZ2VuZXJhdGVTZWFyY2hJZCgpXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaF9pZDogc2VhcmNoX2lkIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBmb3IgaW5zdXJlZCB1c2VyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmlzX2xvZ2luX3VzZXJfaW5zdXJlZCAmJiB0aGlzLnByb3BzLmluc3VyYW5jZV9zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJDcml0ZXJpYSA9IHsgLi4uZmlsdGVycy5maWx0ZXJDcml0ZXJpYSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld191cmwgPSB0aGlzLmJ1aWxkVVJJKHRoaXMucHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKG5ld191cmwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0U2VhcmNoSWQoc2VhcmNoX2lkLCBmaWx0ZXJzLCBwYXJzZWQucGFnZSB8fCAxKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5mZXRjaE5ld1Jlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0RG9jdG9yTGlzdCh0aGlzLnByb3BzKVxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIC8vdGhpcy5wcm9wcy5tZXJnZVNlbGVjdGVkQ3JpdGVyaWFzKClcbiAgICAgICAgICAgIGxldCBwYWdlID0gMVxuICAgICAgICAgICAgaWYgKHBhcnNlZCAmJiBwYXJzZWQucGFnZSkge1xuICAgICAgICAgICAgICAgIHBhZ2UgPSBwYXJzZWQucGFnZSB8fCAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldEZvb3RlckRhdGEodGhpcy5wcm9wcy5tYXRjaC51cmwuc3BsaXQoJy8nKVsxXSwgcGFnZSkudGhlbigoZm9vdGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmb290ZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb290ZXJEYXRhOiBmb290ZXJEYXRhIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAod2luZG93KSB7XG4gICAgICAgIC8vICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgLy9TVEFSVCBTYXZlIFNlbGVjdGVkIENpdHkgb24gTG9jYXRpb24gQ2hhbmdlXG4gICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgaWYgKCAodGhpcy5zdGF0ZS5zZWFyY2hfc3RyaW5nIHx8IHRoaXMuc3RhdGUuZnJvbVZpcCkgJiYgcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAhPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gKSB7XG4gICAgICAgICAgICAgICAgbGV0IGV4dHJhRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbjogcHJvcHMuc2VsZWN0ZWRMb2NhdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmdldE5lYXJieUhvc3BpdGFscyhleHRyYURhdGEpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaF9zdHJpbmc6IHByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbl9vYmplY3Q6IHByb3BzLnNlbGVjdGVkTG9jYXRpb24sIHNlYXJjaDogcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vRU5EIFNhdmUgU2VsZWN0ZWQgQ2l0eSBvbiBMb2NhdGlvbiBDaGFuZ2VcbiAgICAgICAgICAgICAgICAvL0FkZCBTY3JvbGwgRXZlbnRzIGZvciBTdGlja3kgU2VhcmNoIEZpbHRlciBmb3IgVmlwIE5ldHdvcmsgc2VhcmNoXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZnJvbVZpcCAmJiAhdGhpcy5zdGF0ZS5zY3JvbGxFdmVudEFkZGVkICYmIHRoaXMucmVmc1sndmlwX3NyY2hfd2lkZ2V0J10gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcilcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Njcm9sbEV2ZW50QWRkZWQ6IHRydWV9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy9FbmQgQWRkIFNjcm9sbCBFdmVudHMgZm9yIFN0aWNreSBTZWFyY2ggRmlsdGVyIGZvciBWaXAgTmV0d29yayBzZWFyY2hcbiAgICAgICAgbGV0IHNlYXJjaF9pZCA9ICcnXG4gICAgICAgIGxldCBwYWdlID0gMVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZShwcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmIChwcm9wcy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ3NlYXJjaF9pZCcpKSB7XG4gICAgICAgICAgICBzZWFyY2hfaWQgPSBwYXJzZWQuc2VhcmNoX2lkXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zZWFyY2hfaWQpIHtcbiAgICAgICAgICAgIHNlYXJjaF9pZCA9IHRoaXMuc3RhdGUuc2VhcmNoX2lkXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlZC5wYWdlKSB7XG4gICAgICAgICAgICBwYWdlID0gcGFyc2VkLnBhZ2UgfHwgMVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLm1lcmdlVXJsU3RhdGUgJiYgcHJvcHMubWVyZ2VVcmxTdGF0ZSAhPSB0aGlzLnByb3BzLm1lcmdlVXJsU3RhdGUpIHtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJzID0ge31cbiAgICAgICAgICAgIGZpbHRlcnMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgPSBwcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1xuICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJDcml0ZXJpYSA9IHByb3BzLmZpbHRlckNyaXRlcmlhXG4gICAgICAgICAgICBpZiAoc2VhcmNoX2lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaF9pZDogc2VhcmNoX2lkIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld191cmwgPSB0aGlzLmJ1aWxkVVJJKHByb3BzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShuZXdfdXJsKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldFNlYXJjaElkKHNlYXJjaF9pZCwgZmlsdGVycywgcGFnZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hfaWQgPSB0aGlzLmdlbmVyYXRlU2VhcmNoSWQoKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hfaWQ6IHNlYXJjaF9pZCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdfdXJsID0gdGhpcy5idWlsZFVSSShwcm9wcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UobmV3X3VybClcbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiB1c2VyIGluc3VyZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLmlzX2xvZ2luX3VzZXJfaW5zdXJlZCAmJiBwcm9wcy5pbnN1cmFuY2Vfc3RhdHVzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMuZmlsdGVyQ3JpdGVyaWEgPSB7IC4uLmZpbHRlcnMuZmlsdGVyQ3JpdGVyaWEgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRTZWFyY2hJZChzZWFyY2hfaWQsIGZpbHRlcnMsIHBhZ2UpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLmdldE5ld1VybCAmJiBwcm9wcy5nZXROZXdVcmwgIT0gdGhpcy5wcm9wcy5nZXROZXdVcmwgJiYgdGhpcy5zdGF0ZS5zZWFyY2hfaWQpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5mZXRjaE5ld1Jlc3VsdHMgJiYgKHByb3BzLmZldGNoTmV3UmVzdWx0cyAhPSB0aGlzLnByb3BzLmZldGNoTmV3UmVzdWx0cykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldERvY3Rvckxpc3QocHJvcHMpXG4gICAgICAgICAgICAgICAgLy8gaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJ1aWxkVVJJKHByb3BzKVxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmZldGNoTmV3UmVzdWx0cyAmJiAocHJvcHMuZmV0Y2hOZXdSZXN1bHRzICE9IHRoaXMucHJvcHMuZmV0Y2hOZXdSZXN1bHRzICYmIHRoaXMuc3RhdGUuc2VhcmNoX2lkKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGV0ZWN0TG9jYXRpb24gJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhcyh0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdKVxuICAgICAgICAgICAgICAgIGxldCBkb2N0b3JfbmFtZSA9ICcnLCBob3NwaXRhbF9uYW1lID0gJycsIGhvc3BpdGFsX2lkID0gJydcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLm5leHRGaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRfb246IFwiZGlzdGFuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvcl9uYW1lLCBob3NwaXRhbF9uYW1lLCBob3NwaXRhbF9pZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZXh0RmlsdGVyQ3JpdGVyaWE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMubmV4dEZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydF9vbjogXCJkaXN0YW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWUsIGhvc3BpdGFsX2lkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1lcmdlT1BEU3RhdGUoc3RhdGUsIHRydWUpXG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiAnL29wZC9zZWFyY2hyZXN1bHRzJyB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2V0U2VhcmNoSWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmdldERvY3Rvckxpc3QocHJvcHMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAvLyAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMuZmV0Y2hOZXdSZXN1bHRzICYmIHRoaXMuc3RhdGUuc2VhcmNoX2lkID09IHNlYXJjaF9pZCAmJiAhdGhpcy5zdGF0ZS5zZXRTZWFyY2hJZCAmJiB0aGlzLnN0YXRlLnNlYXJjaF9pZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNldFNlYXJjaElkOiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLmdldERvY3Rvckxpc3QocHJvcHMpXG4gICAgICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL1doZW5ldmVyIGxvY2F0aW9uIGNoYW5nZXMgbWFrZSBhcGkgY2FsbHNcbiAgICAgICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiBwcm9wcy5tZXJnZVVybFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld191cmwgPSB0aGlzLmJ1aWxkVVJJKHByb3BzKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKG5ld191cmwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5zdGF0ZS5zY3JvbGxFdmVudEFkZGVkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdExvY2F0aW9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2NhdGlvbjogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGdlbmVyYXRlU2VhcmNoSWQodWlkX3N0cmluZykge1xuICAgICAgICAvL21ldGhvZCB0byBnZW5lcmF0ZSBzZWFyY2ggaWRcbiAgICAgICAgdWlkX3N0cmluZyA9ICd4eHl5eHh4eC14eHl4LTR4eHgteXh4eC14eHh5eXl4eHh4eHgnXG4gICAgICAgIHZhciBkdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgdXVpZCA9IHVpZF9zdHJpbmcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZHQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgICAgICAgZHQgPSBNYXRoLmZsb29yKGR0IC8gMTYpO1xuICAgICAgICAgICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH1cblxuICAgIGdldExvY2F0aW9uUGFyYW0odGFnKSB7XG4gICAgICAgIC8vIHRoaXMgQVBJIGFzc3VtZXMgdGhlIGNvbnRleHQgb2YgcmVhY3Qtcm91dGVyLTRcbiAgICAgICAgY29uc3QgcGFyYW1TdHJpbmcgPSB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaFxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtU3RyaW5nKVxuICAgICAgICByZXR1cm4gcGFyYW1zLmdldCh0YWcpXG4gICAgfVxuXG4gICAgYXBwbHlGaWx0ZXJzKGZpbHRlclN0YXRlKSB7XG4gICAgICAgIC8vIGNsZWFyIExBTkRJTkdfUEFHRSB0byBlbmFibGUgbG9hZGVyXG4gICAgICAgIC8vYXBwbHkgZmlsdGVycyBhbmQgZ2V0IHVwZGF0ZWQgZGF0YVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgd2luZG93Lk9OX0xBTkRJTkdfUEFHRSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNldFF1aWNrRmlsdGVycygpXG4gICAgICAgIGxldCBzZWFyY2hfaWRfZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGEpXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaF9pZF9kYXRhICYmIHRoaXMuc3RhdGUuc2VhcmNoX2lkICYmIHRoaXMucHJvcHMuc2VhcmNoX2lkX2RhdGFbdGhpcy5zdGF0ZS5zZWFyY2hfaWRdKSB7XG4gICAgICAgICAgICBzZWFyY2hfaWRfZGF0YVt0aGlzLnN0YXRlLnNlYXJjaF9pZF0uZmlsdGVyQ3JpdGVyaWEgPSBmaWx0ZXJTdGF0ZVxuICAgICAgICAgICAgc2VhcmNoX2lkX2RhdGFbdGhpcy5zdGF0ZS5zZWFyY2hfaWRdLnBhZ2UgPSAxXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5tZXJnZU9QRFN0YXRlKHsgZmlsdGVyQ3JpdGVyaWE6IGZpbHRlclN0YXRlLCBzZWFyY2hfaWRfZGF0YTogc2VhcmNoX2lkX2RhdGEsIHBhZ2U6IDEgfSlcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5zZXRTZWFyY2hJZCh0aGlzLnN0YXRlLnNlYXJjaF9pZCwgZmlsdGVyU3RhdGUsIGZhbHNlKVxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1aWxkVVJJKHN0YXRlKSB7XG4gICAgICAgIC8va2VlcCBvbiB1cGRhdGluZyB1cmwgd2l0aCB0aGUgdXBkYXRlZCBmaWx0ZXJzIFxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcblxuICAgICAgICBsZXQgeyBzZWxlY3RlZExvY2F0aW9uLCBjb21tb25TZWxlY3RlZENyaXRlcmlhcywgZmlsdGVyQ3JpdGVyaWEsIGxvY2F0aW9uVHlwZSwgcGFnZSB9ID0gc3RhdGVcbiAgICAgICAgbGV0IHNwZWNpYWxpemF0aW9uc19pZHMgPSBjb21tb25TZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3NwZWNpYWxpdHknKS5tYXAoeCA9PiB4LmlkKVxuICAgICAgICBsZXQgY29uZGl0aW9uX2lkcyA9IGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnY29uZGl0aW9uJykubWFwKHggPT4geC5pZClcbiAgICAgICAgbGV0IHByb2NlZHVyZXNfaWRzID0gY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdwcm9jZWR1cmVzJykubWFwKHggPT4geC5pZClcbiAgICAgICAgbGV0IGNhdGVnb3J5X2lkcyA9IGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAncHJvY2VkdXJlc19jYXRlZ29yeScpLm1hcCh4ID0+IHguaWQpXG5cbiAgICAgICAgbGV0IGlwZF9pZHMgPSBjb21tb25TZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ2lwZCcpLm1hcCh4ID0+IHguaWQpXG5cbiAgICAgICAgbGV0IGdyb3VwX2lkcyA9IGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnZ3JvdXBfaWRzJykubWFwKHggPT4geC5pZClcblxuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGxldCBwbGFjZV9pZCA9IFwiXCJcbiAgICAgICAgbGV0IGxvY2FsaXR5ID0gJ0RlbGhpJ1xuICAgICAgICBsZXQgc3ViX2xvY2FsaXR5ID0gJydcblxuICAgICAgICBpZiAoc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgcGxhY2VfaWQgPSBzZWxlY3RlZExvY2F0aW9uLnBsYWNlX2lkIHx8IFwiXCJcbiAgICAgICAgICAgIGxhdCA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG5cbiAgICAgICAgICAgIGxhdCA9IHBhcnNlRmxvYXQocGFyc2VGbG9hdChsYXQpLnRvRml4ZWQoNikpXG4gICAgICAgICAgICBsb25nID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGxvbmcpLnRvRml4ZWQoNikpXG5cbiAgICAgICAgICAgIGxvY2FsaXR5ID0gc2VsZWN0ZWRMb2NhdGlvbi5sb2NhbGl0eSB8fCAnJ1xuICAgICAgICAgICAgc3ViX2xvY2FsaXR5ID0gc2VsZWN0ZWRMb2NhdGlvbi5zdWJfbG9jYWxpdHkgfHwgJydcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICAgICAgICAgIGxldCBtaW5fZmVlcyA9IGZpbHRlckNyaXRlcmlhLnByaWNlUmFuZ2VbMF1cbiAgICAgICAgICAgICAgICBsZXQgbWF4X2ZlZXMgPSBmaWx0ZXJDcml0ZXJpYS5wcmljZVJhbmdlWzFdXG4gICAgICAgICAgICAgICAgbGV0IG1pbl9kaXN0YW5jZSA9IGZpbHRlckNyaXRlcmlhLmRpc3RhbmNlUmFuZ2VbMF1cbiAgICAgICAgICAgICAgICBsZXQgbWF4X2Rpc3RhbmNlID0gZmlsdGVyQ3JpdGVyaWEuZGlzdGFuY2VSYW5nZVsxXVxuICAgICAgICAgICAgICAgIGxldCBzb3J0X29uID0gZmlsdGVyQ3JpdGVyaWEuc29ydF9vbiB8fCBcIlwiXG4gICAgICAgICAgICAgICAgbGV0IGlzX2F2YWlsYWJsZSA9IGZpbHRlckNyaXRlcmlhLmlzX2F2YWlsYWJsZVxuICAgICAgICAgICAgICAgIGxldCBpc19mZW1hbGUgPSBmaWx0ZXJDcml0ZXJpYS5pc19mZW1hbGVcbiAgICAgICAgXG4gICAgICAgICovXG4gICAgICAgIGxldCBzb3J0X29uID0gZmlsdGVyQ3JpdGVyaWEuc29ydF9vbiB8fCBcIlwiXG4gICAgICAgIGxldCBzb3J0X29yZGVyID0gZmlsdGVyQ3JpdGVyaWEuc29ydF9vcmRlciB8fCBcIlwiXG4gICAgICAgIGxldCBhdmFpbGFiaWxpdHkgPSBmaWx0ZXJDcml0ZXJpYS5hdmFpbGFiaWxpdHkgfHwgW11cbiAgICAgICAgbGV0IGF2Z19yYXRpbmdzID0gZmlsdGVyQ3JpdGVyaWEuYXZnX3JhdGluZ3MgfHwgW11cbiAgICAgICAgbGV0IGdlbmRlciA9IGZpbHRlckNyaXRlcmlhLmdlbmRlciB8fCAnJ1xuICAgICAgICBsZXQgc2l0c19hdF9ob3NwaXRhbCA9IGZpbHRlckNyaXRlcmlhLnNpdHNfYXRfaG9zcGl0YWxcbiAgICAgICAgbGV0IHNpdHNfYXRfY2xpbmljID0gZmlsdGVyQ3JpdGVyaWEuc2l0c19hdF9jbGluaWNcblxuXG4gICAgICAgIGxldCBob3NwaXRhbF9uYW1lID0gZmlsdGVyQ3JpdGVyaWEuaG9zcGl0YWxfbmFtZSB8fCBcIlwiXG4gICAgICAgIGxldCBkb2N0b3JfbmFtZSA9IGZpbHRlckNyaXRlcmlhLmRvY3Rvcl9uYW1lIHx8IFwiXCJcbiAgICAgICAgbGV0IGhvc3BpdGFsX2lkID0gZmlsdGVyQ3JpdGVyaWEuaG9zcGl0YWxfaWQgfHwgXCJcIlxuICAgICAgICBsZXQgaXNfaW5zdXJlZCA9IGZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQgfHwgZmFsc2VcbiAgICAgICAgbGV0IHNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMgPSBmaWx0ZXJDcml0ZXJpYS5zcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzIHx8IFtdXG5cblxuICAgICAgICBsZXQgdXJsID0gJydcblxuICAgICAgICAvL0NoZWNrIGlmIGFueSBmaWx0ZXIgYXBwbGllZCBcbiAgICAgICAgbGV0IGlzX2ZpbHRlcl9hcHBsaWVkID0gZmFsc2VcblxuICAgICAgICBpZiAoc29ydF9vbikge1xuICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF2YWlsYWJpbGl0eSAmJiBhdmFpbGFiaWxpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdmdfcmF0aW5ncyAmJiBhdmdfcmF0aW5ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdlbmRlcikge1xuICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvc3BpdGFsX25hbWUpIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChkb2N0b3JfbmFtZSkge1xuICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvc3BpdGFsX2lkKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzICYmIHNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQgJiYgcGFyc2VkLmZyb21WaXApIHtcbiAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkICYmIHBhcnNlZC5mcm9tR29sZFZpcCkge1xuICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNfcGFyYW1zX2V4aXN0ID0gZmFsc2VcbiAgICAgICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWBcbiAgICAgICAgXG4gICAgICAgIGlmIChwYWdlID4gMSkge1xuICAgICAgICAgICAgdXJsICs9IGA/cGFnZT0ke3BhZ2V9YFxuICAgICAgICAgICAgaXNfcGFyYW1zX2V4aXN0ID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdXJsKz0gYCR7aXNfcGFyYW1zX2V4aXN0ID8gJyYnIDogJz8nfXNlYXJjaF9pZD0ke3RoaXMuc3RhdGUuc2VhcmNoX2lkfWBcbiAgICAgICAgaXNfcGFyYW1zX2V4aXN0ID0gdHJ1ZVxuICAgICAgICBpZiAoaXNfZmlsdGVyX2FwcGxpZWQgfHwgIXRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcblxuICAgICAgICAgICAgdXJsICs9IGAmc3BlY2lhbGl6YXRpb25zPSR7c3BlY2lhbGl6YXRpb25zX2lkc30mY29uZGl0aW9ucz0ke2NvbmRpdGlvbl9pZHN9JmxhdD0ke2xhdH0mbG9uZz0ke2xvbmd9JnNvcnRfb249JHtzb3J0X29ufSZzb3J0X29yZGVyPSR7c29ydF9vcmRlcn0mYXZhaWxhYmlsaXR5PSR7YXZhaWxhYmlsaXR5fSZnZW5kZXI9JHtnZW5kZXJ9JmF2Z19yYXRpbmdzPSR7YXZnX3JhdGluZ3N9JmRvY3Rvcl9uYW1lPSR7ZG9jdG9yX25hbWUgfHwgXCJcIn0maG9zcGl0YWxfbmFtZT0ke2hvc3BpdGFsX25hbWUgfHwgXCJcIn0mcGxhY2VfaWQ9JHtwbGFjZV9pZH0mbG9jYXRpb25UeXBlPSR7bG9jYXRpb25UeXBlIHx8IFwiXCJ9JnByb2NlZHVyZV9pZHM9JHtwcm9jZWR1cmVzX2lkcyB8fCBcIlwifSZwcm9jZWR1cmVfY2F0ZWdvcnlfaWRzPSR7Y2F0ZWdvcnlfaWRzIHx8IFwiXCJ9Jmhvc3BpdGFsX2lkPSR7aG9zcGl0YWxfaWR9JmlwZF9wcm9jZWR1cmVzPSR7aXBkX2lkcyB8fCAnJ30maXNfaW5zdXJlZD0ke2lzX2luc3VyZWR9JmxvY2FsaXR5PSR7bG9jYWxpdHl9JnN1Yl9sb2NhbGl0eT0ke3N1Yl9sb2NhbGl0eX0mc2l0c19hdF9ob3NwaXRhbD0ke3NpdHNfYXRfaG9zcGl0YWx9JnNpdHNfYXRfY2xpbmljPSR7c2l0c19hdF9jbGluaWN9Jmdyb3VwX2lkcz0ke2dyb3VwX2lkc30mc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcz0ke3NwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHN9YFxuXG4gICAgICAgICAgICBpZihwYXJzZWQgJiYgcGFyc2VkLmZyb21WaXApe1xuICAgICAgICAgICAgICAgIHVybCs9IGAmZnJvbVZpcD0ke3BhcnNlZC5mcm9tVmlwIHx8ICcnfWBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcnNlZCAmJiBwYXJzZWQudXRtX3Rlcm0pIHtcbiAgICAgICAgICAgICAgICB1cmwgKz0gYCZ1dG1fdGVybT0ke3BhcnNlZC51dG1fdGVybSB8fCAnJ31gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHBhcnNlZCAmJiBwYXJzZWQuZnJvbUdvbGRWaXApIHtcbiAgICAgICAgICAgICAgICB1cmwgKz0gYCZmcm9tR29sZFZpcD0ke3BhcnNlZC5mcm9tR29sZFZpcCB8fCAnJ31gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlzX3BhcmFtc19leGlzdCA9IHRydWVcblxuICAgICAgICB9LyogZWxzZSBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuXG4gICAgICAgICAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YFxuICAgICAgICB9Ki9cblxuICAgICAgICBpZihwYXJzZWQudXRtX3NvdXJjZSkge1xuICAgICAgICAgICAgdXJsKz0gYCZ1dG1fc291cmNlPSR7cGFyc2VkLnV0bV9zb3VyY2V8fCcnfWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBhcnNlZC51dG1fbWVkaXVtKSB7XG4gICAgICAgICAgICB1cmwrPSBgJnV0bV9tZWRpdW09JHtwYXJzZWQudXRtX21lZGl1bXx8Jyd9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLnV0bV9jYW1wYWlnbikge1xuICAgICAgICAgICAgdXJsKz0gYCZ1dG1fY2FtcGFpZ249JHtwYXJzZWQudXRtX2NhbXBhaWdufHwnJ31gXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jbGluaWNfY2FyZCkge1xuICAgICAgICAgICAgdXJsICs9IGAke2lzX3BhcmFtc19leGlzdCA/ICcmJyA6ICc/J31jbGluaWNfY2FyZD10cnVlYFxuICAgICAgICAgICAgaXNfcGFyYW1zX2V4aXN0ID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZC5nZXRfZmVlZGJhY2spIHtcbiAgICAgICAgICAgIHVybCArPSBgJHtpc19wYXJhbXNfZXhpc3QgPyAnJicgOiAnPyd9Z2V0X2ZlZWRiYWNrPSR7cGFyc2VkLmdldF9mZWVkYmFja31gXG4gICAgICAgICAgICBpc19wYXJhbXNfZXhpc3QgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkLnNob3dQb3B1cCkge1xuICAgICAgICAgICAgdXJsICs9IGAke2lzX3BhcmFtc19leGlzdCA/ICcmJyA6ICc/J31zaG93UG9wdXA9JHtwYXJzZWQuc2hvd1BvcHVwfWBcbiAgICAgICAgICAgIGlzX3BhcmFtc19leGlzdCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwKXtcbiAgICAgICAgICAgIHVybCArPSBgJHsnJnNob3dfcG9wdXA9JysgdGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXB9YFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cblxuICAgIGdldERvY3Rvckxpc3Qoc3RhdGUgPSBudWxsLCBwYWdlID0gbnVsbCwgY2IgPSBudWxsKSB7XG4gICAgICAgIC8vZ2V0IGRvY3RvciBsaXN0IG9uIGZpbHRlcnMgYXBwbGllZFxuICAgICAgICBsZXQgc2VhcmNoVXJsID0gbnVsbFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1zcHRjaXQnKSB8fCB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLXNwdGxpdGNpdCcpIHx8IHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctaXBkZHAnKSkge1xuICAgICAgICAgICAgc2VhcmNoVXJsID0gdGhpcy5wcm9wcy5tYXRjaC51cmwudG9Mb3dlckNhc2UoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYWdlID09PSBudWxsKSB7XG4gICAgICAgICAgICBwYWdlID0gdGhpcy5wcm9wcy5wYWdlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnByb3BzXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUucGFnZSkge1xuICAgICAgICAgICAgcGFnZSA9IHN0YXRlLnBhZ2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmdldERvY3RvcnMoc3RhdGUsIHBhZ2UsIGZhbHNlLCBzZWFyY2hVcmwsICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgc2VvRGF0YTogYXJnc1sxXSB9KVxuICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgY2IoLi4uYXJncylcbiAgICAgICAgICAgICAgICBsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVUkkoc3RhdGUpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UobmV3X3VybClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld191cmwgPSB0aGlzLmJ1aWxkVVJJKHN0YXRlKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKG5ld191cmwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMuc3RhdGUuY2xpbmljX2NhcmQpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Vycm9yOiB0cnVlIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0TWV0YVRhZ3NEYXRhKHNlb0RhdGEpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gJydcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGl0bGUgPSBgJHt0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLm5hbWV9IDogQm9vayBCZXN0ICR7dGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5uYW1lfSBEb2N0b3JzIE5lYXIgWW91YFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBgJHt0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLm5hbWV9OiBCb29rIGFwcG9pbnRtZW50IHdpdGggdGhlIGJlc3QgJHt0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLm5hbWV9IGZyb20gdG9wIGhvc3BpdGFscyBhbmQgY2xpbmljcyBuZWFyIHlvdSBhdCBkaXNjb3VudGVkIHByaWNlLiBDaGVjayBkb2N0b3IgcmV2aWV3cyBhbmQgbW9yZS5gXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNjaGVtYSA9IHt9XG4gICAgICAgIGlmIChzZW9EYXRhKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHNlb0RhdGEudGl0bGUgfHwgdGl0bGVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gc2VvRGF0YS5kZXNjcmlwdGlvbiB8fCBkZXNjcmlwdGlvblxuICAgICAgICAgICAgc2NoZW1hID0gc2VvRGF0YS5zY2hlbWEgfHwgc2NoZW1hXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMucHJvcHMucGFnZSkgIT0gMSkge1xuICAgICAgICAgICAgdGl0bGUgPSAnUGFnZSAnICsgdGhpcy5wcm9wcy5wYWdlICsgJyAtICcgKyB0aXRsZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc2NoZW1hIH1cbiAgICB9XG5cbiAgICByZXNldFF1aWNrRmlsdGVycygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHF1aWNrRmlsdGVyOiB7fSB9KVxuICAgIH1cblxuICAgIGFwcGx5UXVpY2tGaWx0ZXIoZmlsdGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBxdWlja0ZpbHRlcjogZmlsdGVyIH0pXG4gICAgfVxuXG4gICAgaXNGaWx0ZXJBcHBsaWVkKGZpbHRlckNyaXRlcmlhKSB7XG4gICAgICAgIC8vQ2hlY2sgaWYgYW55IGZpbHRlciBhcHBsaWVkIFxuICAgICAgICBsZXQgaXNfZmlsdGVyX2FwcGxpZWQgPSBmYWxzZVxuICAgICAgICBpZiAoZmlsdGVyQ3JpdGVyaWEpIHtcbiAgICAgICAgICAgIGxldCBzb3J0X29uID0gZmlsdGVyQ3JpdGVyaWEuc29ydF9vbiB8fCBcIlwiXG4gICAgICAgICAgICBsZXQgc29ydF9vcmRlciA9IGZpbHRlckNyaXRlcmlhLnNvcnRfb3JkZXIgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGF2YWlsYWJpbGl0eSA9IGZpbHRlckNyaXRlcmlhLmF2YWlsYWJpbGl0eSB8fCBbXVxuICAgICAgICAgICAgbGV0IGF2Z19yYXRpbmdzID0gZmlsdGVyQ3JpdGVyaWEuYXZnX3JhdGluZ3MgfHwgW11cbiAgICAgICAgICAgIGxldCBnZW5kZXIgPSBmaWx0ZXJDcml0ZXJpYS5nZW5kZXIgfHwgJydcbiAgICAgICAgICAgIGxldCBzaXRzX2F0X2hvc3BpdGFsID0gZmlsdGVyQ3JpdGVyaWEuc2l0c19hdF9ob3NwaXRhbFxuICAgICAgICAgICAgbGV0IHNpdHNfYXRfY2xpbmljID0gZmlsdGVyQ3JpdGVyaWEuc2l0c19hdF9jbGluaWNcblxuXG4gICAgICAgICAgICBsZXQgaG9zcGl0YWxfbmFtZSA9IGZpbHRlckNyaXRlcmlhLmhvc3BpdGFsX25hbWUgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGRvY3Rvcl9uYW1lID0gZmlsdGVyQ3JpdGVyaWEuZG9jdG9yX25hbWUgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGhvc3BpdGFsX2lkID0gZmlsdGVyQ3JpdGVyaWEuaG9zcGl0YWxfaWQgfHwgXCJcIlxuICAgICAgICAgICAgbGV0IGlzX2luc3VyZWQgPSBmaWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkIHx8IGZhbHNlXG5cbiAgICAgICAgICAgIGlmIChzb3J0X29uKSB7XG4gICAgICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXZhaWxhYmlsaXR5ICYmIGF2YWlsYWJpbGl0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpc19maWx0ZXJfYXBwbGllZCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF2Z19yYXRpbmdzICYmIGF2Z19yYXRpbmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlzX2ZpbHRlcl9hcHBsaWVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZ2VuZGVyKSB7XG4gICAgICAgICAgICAgICAgaXNfZmlsdGVyX2FwcGxpZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNfZmlsdGVyX2FwcGxpZWRcbiAgICB9XG5cbiAgICBzZWFyY2hEb2N0b3JTcGVjaWFsaXphdGlvbihzcGVjaWFsaXR5LCBpc1ZpZXdBbGwpIHtcbiAgICAgICAgLy9maWx0ZXIgdG8gc2VhcmNoIGRvY3RvciBzcGVjaWFsaXphdGlvblxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3BlY2lhbGl0eURhdGEgPSB7fVxuICAgICAgICBsZXQgVmlld0FsbERhdGEgPSBbXVxuICAgICAgICBpZiAoaXNWaWV3QWxsKSB7XG4gICAgICAgICAgICBzcGVjaWFsaXR5Lm1hcCgoc3BlYywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIFZpZXdBbGxEYXRhLnB1c2goeyBpZDogc3BlYy5zcGVjaWFsaXphdGlvbl9pZCwgdHlwZTogJ3NwZWNpYWxpdHknIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSB7fVxuICAgICAgICAgICAgbGV0IGhvc3BpdGFsX2lkID0gJydcbiAgICAgICAgICAgIGxldCBkb2N0b3JfbmFtZSA9ICcnXG4gICAgICAgICAgICBsZXQgaG9zcGl0YWxfbmFtZSA9ICcnXG4gICAgICAgICAgICBpZiAoVmlld0FsbERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKFZpZXdBbGxEYXRhKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgICAgICBob3NwaXRhbF9pZCwgZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5leHRGaWx0ZXJDcml0ZXJpYToge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhLFxuICAgICAgICAgICAgICAgICAgICBob3NwaXRhbF9pZCwgZG9jdG9yX25hbWUsIGhvc3BpdGFsX25hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1NpbWlsYXJTcGVjaWFsaXphdGlvbnNWaWV3QWxsJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc2ltaWxhci1zcGVjaWFsaXphdGlvbnMtdmlld2FsbCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1lcmdlT1BEU3RhdGUoc3RhdGUpXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL29wZC9zZWFyY2hyZXN1bHRzYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNwZWNpYWxpdHlEYXRhLnR5cGUgPSAnc3BlY2lhbGl0eSdcbiAgICAgICAgICAgIHNwZWNpYWxpdHlEYXRhLm5hbWUgPSBzcGVjaWFsaXR5LnNwZWNpYWxpemF0aW9uX25hbWVcbiAgICAgICAgICAgIHNwZWNpYWxpdHlEYXRhLmlkID0gc3BlY2lhbGl0eS5zcGVjaWFsaXphdGlvbl9pZFxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVPUERDcml0ZXJpYSgnc3BlY2lhbGl0eScsIHNwZWNpYWxpdHlEYXRhLCB0cnVlKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9vcGQvc2VhcmNocmVzdWx0cycpXG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1NpbWlsYXJTcGVjaWFsaXphdGlvbnMnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdzaW1pbGFyLXNwZWNpYWxpemF0aW9ucydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTaW1pbGFyU3BlY2lhbGl6YXRpb24oZmxhZykgey8qXG4gICAgICAgIGxldCBkYXRhTGVuZ3RoID0gcGFyc2VJbnQodGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9ucy5sZW5ndGgvMilcbiAgICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgICAgIGNvdW50ID0gZGF0YUxlbmd0aDtcbiAgICAgICAgICAgIGRhdGFMZW5ndGggPSBcbiAgICAgICAgfSovXG4gICAgICAgIC8vZnVuY2l0b24gdG8gcmV0dXJuIHNlYXJjaCBzcGVjaWFsaXphdGlvbiB0byByZW5kZXJcbiAgICAgICAgbGV0IGRhdGFNb2RlbCA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGZsYWcgJiYgaSAlIDIgPT0gMCkge1xuICAgICAgICAgICAgICAgIGRhdGFNb2RlbC5wdXNoKDxzcGFuIGlkPXt0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zW2ldLnNwZWNpYWxpemF0aW9uX2lkfSBvbkNsaWNrPXt0aGlzLnNlYXJjaERvY3RvclNwZWNpYWxpemF0aW9uLmJpbmQodGhpcywgdGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9uc1tpXSwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2ltaWxhcl9zcGVjaWFsaXphdGlvbnNbaV0uc3BlY2lhbGl6YXRpb25fbmFtZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmbGFnICYmIGkgJSAyICE9IDApIHtcbiAgICAgICAgICAgICAgICBkYXRhTW9kZWwucHVzaCg8c3BhbiBpZD17dGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9uc1tpXS5zcGVjaWFsaXphdGlvbl9pZH0gb25DbGljaz17dGhpcy5zZWFyY2hEb2N0b3JTcGVjaWFsaXphdGlvbi5iaW5kKHRoaXMsIHRoaXMucHJvcHMuc2ltaWxhcl9zcGVjaWFsaXphdGlvbnNbaV0sIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zW2ldLnNwZWNpYWxpemF0aW9uX25hbWV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPilcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhTW9kZWxcbiAgICB9XG5cbiAgICBTaW1pbGFyU3BlY2lhbGl6YXRpb25EYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICg8ZGl2IGNsYXNzTmFtZT1cInNvcnQtc3ViLWZpbHRlci1jb250YWluZXIgbWItMyBwYi0wXCI+XG4gICAgICAgICAgICA8cD5Mb29raW5nIGZvciBvdGhlciByZWxhdGVkXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+IHNwZWNpYWxpemF0aW9ucz8gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBzb3J0LW1vcmUtZmlsdGVyXCIgb25DbGljaz17dGhpcy5zZWFyY2hEb2N0b3JTcGVjaWFsaXphdGlvbi5iaW5kKHRoaXMsIHRoaXMucHJvcHMuc2ltaWxhcl9zcGVjaWFsaXphdGlvbnMsIHRydWUpfT5TZWFyY2ggYWxsPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2Mtc2xkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic20tY2hpcHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLlNpbWlsYXJTcGVjaWFsaXphdGlvbih0cnVlKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtLWNoaXBzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5TaW1pbGFyU3BlY2lhbGl6YXRpb24oZmFsc2UpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PilcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBzb3J0RmlsdGVyQ2xpY2tlZCgpIHtcbiAgICAgICAgLy9mdW5jdGlvbiB3aGljaCBjYWxsZWQgd2hlbiB3ZSBjbGljayBvbiBzY3JlZW4tZmlsdGVycyBcbiAgICAgICAgaWYgKHRoaXMuY2hpbGQgJiYgdGhpcy5jaGlsZC5zb3J0RmlsdGVyQ2xpY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZC5zb3J0RmlsdGVyQ2xpY2tlZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBob3NwaXRhbENhcmRDbGlja2VkKHRvcCA9IGZhbHNlLCBkYXRhKSB7XG4gICAgICAgIGxldCBndG1EYXRhID0ge31cbiAgICAgICAgaWYgKHRvcCkge1xuICAgICAgICAgICAgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ25lYXJieS1ob3NwaXRhbHMtY2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ25lYXJieS1ob3NwaXRhbHMtY2xpY2tlZCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3RvcGhvc3BpdGFsc0NsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd0b3AtaG9zcGl0YWxzLWNsaWNrZWQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcbiAgICAgICAgbGV0IHJlZGlyZWN0VXJsID0gJydcblxuICAgICAgICBpZiAoZGF0YS51cmwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gYC8ke2RhdGEudXJsfT9zaG93UG9wdXA9dHJ1ZWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gYC9pcGQvaG9zcGl0YWwvJHtkYXRhLmlkfT9zaG93UG9wdXA9dHJ1ZWBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChyZWRpcmVjdFVybClcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvU2VhcmNoVmlwKCl7XG4gICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdzZWFyY2gtYmFyLWNsaWNrZWQtZnJvbVZpcCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3NlYXJjaC1iYXItY2xpY2tlZC1mcm9tVmlwJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoJylcbiAgICB9XG5cbiAgICB2aWV3QWxsSG9zcGl0YWxDbGlja2VkKCl7XG4gICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb2N0b3JTZWFyY2hIb3NwaXRhbFZpZXdBbGxDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLXNlYXJjaC1ob3NwaXRhbC12aWV3LWFsbC1jbGlja2VkJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMubWVyZ2VJcGRDcml0ZXJpYSh7XG4gICAgICAgICAgICBjb21tb25TZWxlY3RlZENyaXRlcmlhczogW10sXG4gICAgICAgICAgICBuZXh0U2VsZWN0ZWRDcml0ZXJpYXM6IFtdXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkL3NlYXJjaEhvc3BpdGFsc2ApICAgXG4gICAgfVxuXG4gICAgbm9uSXBkTGVhZHMocGhvbmVfbnVtYmVyKXtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBjcml0ZXJpYVN0ciA9IHRoaXMuZ2V0Q3JpdGVyaWFTdHJpbmcodGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcylcbiAgICAgICAgbGV0IGRhdGEgPSh7cGhvbmVfbnVtYmVyOnBob25lX251bWJlcixsZWFkX3NvdXJjZTonZG9jYWRzJyxzb3VyY2U6cGFyc2VkLGxlYWRfdHlwZTonRE9DQURTJyxkb2N0b3JfbmFtZTpjcml0ZXJpYVN0cixleGl0cG9pbnRfdXJsOidodHRwOi8vZG9jcHJpbWUuY29tJyArIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUsZG9jdG9yX2lkOm51bGwsaG9zcGl0YWxfaWQ6bnVsbCxob3NwaXRhbF9uYW1lOm51bGx9KVxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncyAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5sZW5ndGgpe1xuICAgICAgICAgICAgZGF0YS51dG1fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4PT54LnR5cGUgPT0gXCJjb21tb25feHRyYV90YWdzXCIpWzBdLnV0bV90YWdzXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZpc2l0b3JfaW5mbyA9IEdUTS5nZXRWaXNpdG9ySW5mbygpXG4gICAgICAgICAgICBpZih2aXNpdG9yX2luZm8gJiYgdmlzaXRvcl9pbmZvLnZpc2l0X2lkKXtcbiAgICAgICAgICAgICAgICBkYXRhLnZpc2l0X2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0X2lkXG4gICAgICAgICAgICAgICAgZGF0YS52aXNpdG9yX2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0b3JfaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgbGV0IGd0bV9kYXRhID0geydDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jQWRzU2VhcmNoTGlzdGluZ1N1Ym1pdENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdkb2MtYWRzLXNlYXJjaC1saXN0aW5nLVN1Ym1pdC1jbGljayd9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1fZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLnNhdmVMZWFkUGhuTnVtYmVyKHBob25lX251bWJlcilcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc19sZWFkX2VuYWJsZWQgJiYgIVNUT1JBR0UuaXNBZ2VudCgpKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2xlYWRfZW5hYmxlZDpmYWxzZX0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLk5vbklwZEJvb2tpbmdMZWFkKGRhdGEpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19sZWFkX2VuYWJsZWQ6dHJ1ZX0pXG4gICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICB9XG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fYmVfZm9yY2U6MH0pXG4gICAgfVxuXG4gICAgY2xvc2VJcGRMZWFkUG9wdXAoZnJvbSl7XG4gICAgICAgIGlmKGZyb20pe1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jQWRzU2VhcmNoTGlzdGluZ0Nyb3NzQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ2RvYy1hZHMtc2VhcmNoLWxpc3RpbmctY3Jvc3MtY2xpY2snXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvX2JlX2ZvcmNlOjB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgIGdldENyaXRlcmlhU3RyaW5nKHNlbGVjdGVkQ3JpdGVyaWFzKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZENyaXRlcmlhcyAmJiBzZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBpc19ncm91cF9pZHNfZXhpc3QgPSBzZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ2dyb3VwX2lkcycpXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWREYXRhVmlldyA9IGlzX2dyb3VwX2lkc19leGlzdC5sZW5ndGggPyBpc19ncm91cF9pZHNfZXhpc3QgOiBzZWxlY3RlZENyaXRlcmlhc1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWREYXRhVmlldy5yZWR1Y2UoKGZpbmFsLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbCArPSAnLCAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsICs9IGAke2N1cnIubmFtZX1gXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsXG4gICAgICAgICAgICB9LCBcIlwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc2hvd19wYWdpbmF0aW9uID0gdGhpcy5wcm9wcy5kb2N0b3JMaXN0ICYmIHRoaXMucHJvcHMuZG9jdG9yTGlzdC5sZW5ndGggPiAwXG4gICAgICAgIGxldCB1cmwgPSBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX1gXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC8mcGFnZT1cXGR7MSx9LywgXCJcIilcbiAgICAgICAgbGV0IHBhZ2UgPSBcIlwiXG4gICAgICAgIGxldCBjdXJyX3BhZ2UgPSBwYXJzZUludCh0aGlzLnByb3BzLnBhZ2UpXG4gICAgICAgIGxldCBwcmV2ID0gXCJcIlxuICAgICAgICBpZiAoY3Vycl9wYWdlID4gMSkge1xuICAgICAgICAgICAgcGFnZSA9IGA/cGFnZT0ke2N1cnJfcGFnZX1gXG4gICAgICAgICAgICBwcmV2ID0gdXJsXG4gICAgICAgICAgICBpZiAoY3Vycl9wYWdlID4gMikge1xuICAgICAgICAgICAgICAgIHByZXYgKz0gYD9wYWdlPSR7Y3Vycl9wYWdlIC0gMX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHQgPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvdW50ID4gY3Vycl9wYWdlICogMjApIHtcbiAgICAgICAgICAgIG5leHQgPSB1cmwgKyBgP3BhZ2U9JHtjdXJyX3BhZ2UgKyAxfWBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvIG5vdCBzZXQgcmVsIG5leHQvcHJldiBmb3Igbm9uIHNlb0ZyaWVuZGx5IHBhZ2VzXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgbmV4dCA9IFwiXCJcbiAgICAgICAgICAgIHByZXYgPSBcIlwiXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB0aGlzIHdhcyB0aGUgbGFuZGluZyBwYWdlXG4gICAgICAgIGxldCBsYW5kaW5nX3BhZ2UgPSBmYWxzZVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cuT05fTEFORElOR19QQUdFKSB7XG4gICAgICAgICAgICBsYW5kaW5nX3BhZ2UgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMuY2Fub25pY2FsX3VybCA/IGAvJHt0aGlzLnByb3BzLmNhbm9uaWNhbF91cmx9YCA6IHRoaXMucHJvcHMubWF0Y2gudXJsfSR7cGFnZX1gLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5zZW9EYXRhKS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZ2V0TWV0YVRhZ3NEYXRhKHRoaXMucHJvcHMuc2VvRGF0YSkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5zZW9EYXRhKS5zY2hlbWEsXG4gICAgICAgICAgICAgICAgICAgIHNlb0ZyaWVuZGx5OiB0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5LFxuICAgICAgICAgICAgICAgICAgICBwcmV2OiBwcmV2LFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiBuZXh0LFxuICAgICAgICAgICAgICAgICAgICBvZ1R5cGU6ICdXZWJzaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgb2dTaXRlTmFtZTogJ0RvY3ByaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgb2dUaXRsZTogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5zZW9EYXRhKS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgb2dEZXNjcmlwdGlvbjogdGhpcy5nZXRNZXRhVGFnc0RhdGEodGhpcy5wcm9wcy5zZW9EYXRhKS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8qKHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwID09IDEgfHwgdGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXAgPT0gMikgJiYgdGhpcy5zdGF0ZS50b19iZV9mb3JjZSA9PSAxP1xuICAgICAgICAgICAgICAgICAgICA8Tm9uSXBkUG9wdXBWaWV3IHsuLi50aGlzLnByb3BzfSBub25JcGRMZWFkcz17dGhpcy5ub25JcGRMZWFkcy5iaW5kKHRoaXMpfSBjbG9zZUlwZExlYWRQb3B1cCA9IHt0aGlzLmNsb3NlSXBkTGVhZFBvcHVwLmJpbmQodGhpcyl9IGlzX2ZvcmNlPXt0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cH0gaXNfb3BkPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgICAgIDonJyovXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPENyaXRlcmlhU2VhcmNoIHsuLi50aGlzLnByb3BzfSBjaGVja0ZvckxvYWQ9e2xhbmRpbmdfcGFnZSB8fCB0aGlzLnByb3BzLkxPQURFRF9ET0NUT1JfU0VBUkNIIHx8IHRoaXMuc3RhdGUuc2hvd0Vycm9yfSB0aXRsZT1cIlNlYXJjaCBGb3IgRGlzZWFzZSBvciBEb2N0b3IuXCIgdHlwZT1cIm9wZFwiIGdvQmFjaz17dHJ1ZX0gY2xpbmljX2NhcmQ9eyEhdGhpcy5zdGF0ZS5jbGluaWNfY2FyZH0gbmV3Q2hhdEJ0bj17dHJ1ZX0gc2VhcmNoRG9jdG9ycz17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJub3JmXCI+Tm8gUmVzdWx0cyBGb3VuZCEhPC9kaXY+IDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9wQmFyIHsuLi50aGlzLnByb3BzfSBhcHBseUZpbHRlcnM9e3RoaXMuYXBwbHlGaWx0ZXJzLmJpbmQodGhpcyl9IHNlb0RhdGE9e3RoaXMucHJvcHMuc2VvRGF0YX0gY2xpbmljX2NhcmQ9eyEhdGhpcy5zdGF0ZS5jbGluaWNfY2FyZH0gc2VvRnJpZW5kbHk9e3RoaXMuc3RhdGUuc2VvRnJpZW5kbHl9IHJlc2V0UXVpY2tGaWx0ZXJzPXt0aGlzLnJlc2V0UXVpY2tGaWx0ZXJzLmJpbmQodGhpcyl9IHF1aWNrRmlsdGVyPXt0aGlzLnN0YXRlLnF1aWNrRmlsdGVyfSBmcm9tVmlwPXt0aGlzLnN0YXRlLmZyb21WaXB9IHRvcEJhclJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8UmVzdWx0Q291bnQgey4uLnRoaXMucHJvcHN9IGFwcGx5RmlsdGVycz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0gc2VvRGF0YT17dGhpcy5wcm9wcy5zZW9EYXRhfSBjbGluaWNfY2FyZD17ISF0aGlzLnN0YXRlLmNsaW5pY19jYXJkfSBzZW9GcmllbmRseT17dGhpcy5zdGF0ZS5zZW9GcmllbmRseX0gLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMTBweCAzMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9iYW5uZXJzL2Jhbm5lcl9kb2MucG5nXCJ9IGNsYXNzTmFtZT1cImJhbm5lci1pbWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmNsaW5pY19jYXJkICYmIHRoaXMucHJvcHMuaG9zcGl0YWxMaXN0ICYmIHRoaXMucHJvcHMuaG9zcGl0YWxMaXN0Lmxlbmd0aCA9PSAwKSB8fCB0aGlzLnByb3BzLmRvY3Rvckxpc3QgJiYgdGhpcy5wcm9wcy5kb2N0b3JMaXN0Lmxlbmd0aCA9PSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjYXJkTWFpblBhZGRpbmdSbXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY2FyZC1jb250YWluZXIgbXQtMjAgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctbm8tcmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLW4tcnNsdFwiPk5vIHJlc3VsdCBmb3VuZCE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmlsdGVyQXBwbGllZCh0aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJuLXJzbHQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9uby1yZXN1bHQucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2ctdHktYWduIGN1cnNvci1wbnRyXCIgb25DbGljaz17dGhpcy5hcHBseVF1aWNrRmlsdGVyLmJpbmQodGhpcywgeyB2aWV3TW9yZTogdHJ1ZSB9KX0+VHJ5IGFnYWluIHdpdGggZmV3ZXIgZmlsdGVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzEzMHB4JyB9fSBjbGFzc05hbWU9XCJuLXJzbHQtaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92Y3Qtbm8ucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2ctdHktYWduIHRleHQtZGFyayB0ZXh0LWNlbnRlclwiPkNhbuKAmXQgZmluZCB5b3VyIGRvY3RvciBoZXJlPzxicj48L2JyPkhlbHAgdXMgdG8gbGlzdCB5b3VyIGRvY3RvcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlZmVyRG9jdG9yYnRuXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUmVmZXJEb2N0b3JMaXN0Tm9yZXN1bHQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ3JlZmVyLWRvY3Rvci1saXN0LW5vcmVzdWx0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvZG9jdG9yc2lnbnVwP21lbWJlcl90eXBlPTEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlJlZmVyIHlvdXIgRG9jdG9yPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2ltaWxhcl9zcGVjaWFsaXphdGlvbnMgJiYgdGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9ucy5sZW5ndGggJiYgIXRoaXMuc3RhdGUuc29ydF9vcmRlciAmJiAoIXRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5IHx8ICF0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGgpICYmIHRoaXMucHJvcHMuY291bnQgPT0gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNpbWlsYXJTcGVjaWFsaXphdGlvbkRhdGEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZnJvbVZpcCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b3BIb3NwaXRhbHMgJiYgdGhpcy5wcm9wcy50b3BIb3NwaXRhbHMudG9wX2hvc3BpdGFscyAmJiB0aGlzLnByb3BzLnRvcEhvc3BpdGFscy50b3BfaG9zcGl0YWxzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxWaWV3IHRvcEhlYWRpbmc9J1RvcCBIb3NwaXRhbHMnIGRhdGFMaXN0PXt0aGlzLnByb3BzLnRvcEhvc3BpdGFscy50b3BfaG9zcGl0YWxzfSBkYXRhVHlwZT0ndG9wSG9zcGl0YWxzJyBjYXJvdXNlbENhcmRDbGlja2VkPXsodG9wLCBkYXRhKSA9PiB0aGlzLmhvc3BpdGFsQ2FyZENsaWNrZWQodG9wLCBkYXRhKX0gdG9wSG9zcGl0YWw9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uZWFyYnlIb3NwaXRhbHMgJiYgdGhpcy5wcm9wcy5uZWFyYnlIb3NwaXRhbHMuaG9zcGl0YWxzICYmIHRoaXMucHJvcHMubmVhcmJ5SG9zcGl0YWxzLmhvc3BpdGFscy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsVmlldyB0b3BIZWFkaW5nPSdOZWFyYnkgSG9zcGl0YWxzJyBkYXRhTGlzdD17dGhpcy5wcm9wcy5uZWFyYnlIb3NwaXRhbHMuaG9zcGl0YWxzfSBkYXRhVHlwZT0nbmVhcmJ5SG9zcGl0YWxzJyBjYXJvdXNlbENhcmRDbGlja2VkPXsodG9wLCBkYXRhKSA9PiB0aGlzLmhvc3BpdGFsQ2FyZENsaWNrZWQodG9wLCBkYXRhKX0gZXh0cmFIZWFkaW5nPSdWaWV3IEFsbCcgbmF2aWdhdGVUbz0geygpPT50aGlzLnZpZXdBbGxIb3NwaXRhbENsaWNrZWQoKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB2aXBOZXRUb3Agc2VhcmNoRm9yVmlwIGZpbHRlci1yb3cgc3RpY2t5LWhlYWRlciBtYmwtc3RpY2sgc29ydC1zdGlja3ktbmV0d29ya1wiIHJlZj1cInZpcF9zcmNoX3dpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VyY2gtbnctaW5wdXRzIG1iLTAgY29sLTEyIHZpcC1zcmNoLXBkbmctYWRqXCIgb25DbGljaz17KCk9PnRoaXMubmF2aWdhdGVUb1NlYXJjaFZpcCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgY2xhc3NOYW1lPVwiZC1ibG9jayBuZXctc3JjaC1kb2MtbGFiXCIgaWQ9XCJzZWFyY2hfYmFyXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgZG9jdG9yXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBjbGFzc05hbWU9XCJzcmNoLWlucC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogJzE1cHgnLHRvcDonMCcsIGJvdHRvbTogJzAnLCBsZWZ0OiAnMThweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93U2VhcmNoQnRuICYmIDxidXR0b24gY2xhc3NOYW1lPVwic3JjaC12cC1udFwiPjxpbWcgc3R5bGU9e3ttYXJnaW5SaWdodDonOHB4Jyx3aWR0aDonMTBweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArXCIvaW1nL25ldy1sb2MtaWNvLnN2Z1wifS8+e3RoaXMuc3RhdGUuc2VhcmNoX3N0cmluZ308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3J0LXNjcmwtYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5zb3J0RmlsdGVyQ2xpY2tlZCgpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZmlsdGVyc29ydC5wbmcnfS8+IFNvcnQvRmlsdGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvY3RvcnNMaXN0IHsuLi50aGlzLnByb3BzfSBhcHBseUZpbHRlcnM9e3RoaXMuYXBwbHlGaWx0ZXJzLmJpbmQodGhpcyl9IGdldERvY3Rvckxpc3Q9e3RoaXMuZ2V0RG9jdG9yTGlzdC5iaW5kKHRoaXMpfSBjbGluaWNfY2FyZD17ISF0aGlzLnN0YXRlLmNsaW5pY19jYXJkfSBzZW9GcmllbmRseT17dGhpcy5zdGF0ZS5zZW9GcmllbmRseX0gZGV0ZWN0TG9jYXRpb25DbGljaz17KCkgPT4gdGhpcy5kZXRlY3RMb2NhdGlvbkNsaWNrKCl9IGFwcGx5UXVpY2tGaWx0ZXI9e3RoaXMuYXBwbHlRdWlja0ZpbHRlci5iaW5kKHRoaXMpfSBTaW1pbGFyU3BlY2lhbGl6YXRpb25EYXRhPXt0aGlzLlNpbWlsYXJTcGVjaWFsaXphdGlvbkRhdGEuYmluZCh0aGlzKX0gc3BvbnNvckRhdGE9e3RoaXMuc3RhdGUuc3BvbnNvckRhdGF9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkgJiYgc2hvd19wYWdpbmF0aW9uID8gPGRpdiBjbGFzc05hbWU9XCJhcnQtcGFnaW5hdGlvbi1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ID8gPGEgaHJlZj17cHJldn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCI+e2N1cnJfcGFnZSAtIDF9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydC1wYWdpbmF0aW9uLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcgfX0+e2N1cnJfcGFnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPyA8YSBocmVmPXtuZXh0fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0LXBhZ2luYXRpb24tYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDBcIj57Y3Vycl9wYWdlICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQ3JpdGVyaWFTZWFyY2g+XG5cblxuICAgICAgICAgICAgICAgIDxGb290ZXIgZm9vdGVyRGF0YT17dGhpcy5zdGF0ZS5mb290ZXJEYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHRzVmlld1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBDYXJvdXNlbFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHNjcm9sbCh0eXBlKSB7XG4gICAgICAgIHZhciBlbG1udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b3BfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWApXG5cbiAgICAgICAgaWYoZWxtbnQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgdG9wXyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1fbGlzdGApICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsZWZ0QXJyb3dfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWApICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBSaWdodEFycm93XyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKSkge1xuXG4gICAgICAgIFx0bGV0IG91dGVyRGl2V2lkdGggPSBlbG1udC5vZmZzZXRXaWR0aFxuXHQgICAgICAgIGxldCBjaGlsZERpdldpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgdG9wXyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1fbGlzdGApWzBdLm9mZnNldFdpZHRoXG5cdCAgICAgICAgbGV0IGNhcmRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYHRvcF8ke3RoaXMucHJvcHMuZGF0YVR5cGV9X2xpc3RgKVswXS5jaGlsZEVsZW1lbnRDb3VudFxuXHQgICAgICAgIGxldCBjYXJkV2lkdGggPSBNYXRoLmNlaWwoY2hpbGREaXZXaWR0aCAvIGNhcmRDb3VudClcblxuXHQgICAgICAgIGxldCBsZWZ0U2Nyb2xsID0gZWxtbnQuc2Nyb2xsTGVmdFxuXHQgICAgICAgIGxldCBzY3JvbGxWYWwgPSBNYXRoLmZsb29yKG91dGVyRGl2V2lkdGggLyBjYXJkV2lkdGgpICogY2FyZFdpZHRoXG5cdCAgICAgICAgbGV0IGNhcmRFbmQgPSBjYXJkQ291bnQgKiBjYXJkV2lkdGhcblxuXHQgICAgICAgIGlmICh0eXBlID09ICdyaWdodCcpIHtcblx0ICAgICAgICAgICAgZWxtbnQuc2Nyb2xsKHsgbGVmdDogbGVmdFNjcm9sbCArIHNjcm9sbFZhbCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG5cdCAgICAgICAgICAgIGlmIChjYXJkRW5kIDw9IGxlZnRTY3JvbGwgKyBzY3JvbGxWYWwgKyBvdXRlckRpdldpZHRoKSB7XG5cdCAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGVmdEFycm93XyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFJpZ2h0QXJyb3dfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWApLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBlbG1udC5zY3JvbGwoeyBsZWZ0OiBsZWZ0U2Nyb2xsIC0gc2Nyb2xsVmFsLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcblx0ICAgICAgICAgICAgaWYgKGxlZnRTY3JvbGwgLSBzY3JvbGxWYWwgPD0gMCkge1xuXHQgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFJpZ2h0QXJyb3dfJHt0aGlzLnByb3BzLmRhdGFUeXBlfWApLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGVmdEFycm93XyR7dGhpcy5wcm9wcy5kYXRhVHlwZX1gKS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXG5cdCAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cdHJlbmRlcigpe1xuXG5cdFx0bGV0IHsgdG9wSGVhZGluZywgZGF0YUxpc3QsIGRhdGFUeXBlLCB0b3BIb3NwaXRhbCwgZXh0cmFIZWFkaW5nLCB2aWV3QWxsIH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWtnLXNsaWRlci1jb250YWluZXIgbXQtMTAgbWItMTAgcGtnLW50d2stbXJnblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnU2xpZGVySGVhZGluZyBwbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNT57dG9wSGVhZGluZ3x8Jyd9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAge2V4dHJhSGVhZGluZyAmJiAodmlld0FsbCB8fCBkYXRhTGlzdC5sZW5ndGg+PSAyMCkgJiYgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5uYXZpZ2F0ZVRvKCl9PntleHRyYUhlYWRpbmd9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4+VmlldyBBbGw8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2dTbGlkZXJDb250YWluZXIgbmV0d29yay1zbGlkZXJcIiBpZD17YHRvcF8ke3RoaXMucHJvcHMuZGF0YVR5cGV9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcGtnQ2FyZHNMaXN0IGQtaW5saW5lLWZsZXggc3ViLXdkLWNhcmRzIHRvcF8ke3RoaXMucHJvcHMuZGF0YVR5cGV9X2xpc3RgfT5cbiAgICAgICAgICAgICAgICAgICAgXHR7XG4gICAgICAgICAgICAgICAgICAgIFx0XHRkYXRhTGlzdC5tYXAoKGRhdGEsIGtleSk9PntcbiAgICAgICAgICAgICAgICBcdFx0XHRyZXR1cm4gPGEga2V5PXtgJHtrZXl9XyR7ZGF0YS5pZH1gfSBocmVmPScnIGNsYXNzTmFtZT1cInBrZ2N1c3RDYXJkc1wiICBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5jYXJvdXNlbENhcmRDbGlja2VkKGRhdGEsdG9wSG9zcGl0YWw/dHJ1ZTpmYWxzZSl9PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2djYXJkSW1nQ29udFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0ZGF0YS5sb2dvICYmIDxpbWcgc3R5bGU9e3t3aWR0aDogJzgycHgnfX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtkYXRhLmxvZ299IC8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtndHN0TmFtZSBwcmNkLWhlaWdodFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgXHRcdH0pXG4gICAgICAgICAgICAgICAgICAgIFx0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZ2xmdFJodGJ0bmNvbnQgbmV0d3JrLWJ0bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRubGZ0IGQtbm9uZVwiIGlkPXtgUmlnaHRBcnJvd18ke2RhdGFUeXBlfWB9IG9uQ2xpY2s9e3RoaXMuc2Nyb2xsLmJpbmQodGhpcywgJ2xlZnQnKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctYnRucmd0XCIgaWQ9e2BsZWZ0QXJyb3dfJHtkYXRhVHlwZX1gfSBvbkNsaWNrPXt0aGlzLnNjcm9sbC5iaW5kKHRoaXMsICdyaWdodCcpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxWaWV3OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgRG9jdG9yUmVzdWx0Q2FyZCBmcm9tICcuLi8uLi9jb21tb25zL2RvY3RvclJlc3VsdENhcmQnXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsZXInO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgQ2xpbmljUmVzdWx0Q2FyZCBmcm9tICcuLi8uLi9jb21tb25zL2NsaW5pY1Jlc3VsdENhcmQnO1xuaW1wb3J0IEJhbm5lckNhcm91c2VsIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvSG9tZS9iYW5uZXJDYXJvdXNlbCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCB7IF9nZXRsb2NhdGlvbkZyb21MYXRMb25nLCBfZ2V0TG9jYXRpb25Gcm9tUGxhY2VJZCwgX2F1dG9Db21wbGV0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL21hcEhlbHBlcnMnO1xuaW1wb3J0IFJhdGluZ1N0YXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ1N0YXJzJztcblxuY2xhc3MgRG9jdG9yc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaGFzTW9yZTogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHJlbmRlckJsb2NrOiBmYWxzZSxcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICByZWFkTW9yZTogJ3NlYXJjaC1kZXRhaWxzLWRhdGEtbGVzcycsXG4gICAgICAgICAgICBpc19pbnN1cmVkOiBwcm9wcy5maWx0ZXJDcml0ZXJpYSAmJiBwcm9wcy5maWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkID8gcHJvcHMuZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCA6IGZhbHNlLFxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiBbXSxcbiAgICAgICAgICAgIHNvcnRfb246ICcnLFxuICAgICAgICAgICAgc29ydF9vcmRlcjogJycsXG4gICAgICAgICAgICBkZXRlY3RMb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCZWxvdyBjb2RlIGVuc3VyZXMgc21vb3RoIGJhY2sgcGFnZSB0cmFuc2l0aW9ucyBpbiBjYXNlIG9mIGh1Z2UgZGF0YSBzZXRzLCBhbmQgbWFpbnRhaW5zIHNjcm9sbCBwb3NpdGlvbi5cbiAgICAgICAgICogcmVuZGVyQmxvY2sgPSB0cnVlIChieSBkZWZhdWx0KSB3aWxsIGJsb2NrIHJlbmRlciB1bnRpbCB0aGUgcGFnZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZCwgYW5kIG9uY2UgaXRzIGRvbmUsIGl0IHdpbGwgdGhlbiByZW5kZXIgYW5kIHNldCBzY3JvbGwgcG9zaXRpb24gYWNjb3JkaW5nbHlcbiAgICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuY2hlY2tJZkV4aXN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZW5kZXJCbG9jazogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbF9wb3MgPSB3aW5kb3cuT1BEX1NDUk9MTF9QT1MgPyAod2luZG93Lk9QRF9TQ1JPTExfUE9TKSA6IDBcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogaW1wcm92ZSBzY3JvbGwgYmFjayBsb2dpY1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsX3BvcyB8fCAwKVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuT1BEX1NDUk9MTF9QT1MgPSAwXG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lk9QRF9TQ1JPTExfUE9TID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH0sIDEwMClcbiAgICAgICAgXG4gICAgICAgICovXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmU6IHRydWUgfSlcbiAgICAgICAgfSwgMClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEgfSlcbiAgICAgICAgbGV0IHNlbGVjdGVkTG9jYXRpb24gPSAnJ1xuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb24gPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb247XG4gICAgICAgICAgICBsYXQgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRPZmZlckxpc3QobGF0LCBsb25nKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5maWx0ZXJDcml0ZXJpYSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRfb246IHByb3BzLmZpbHRlckNyaXRlcmlhLnNvcnRfb24sIHNvcnRfb3JkZXI6IHByb3BzLmZpbHRlckNyaXRlcmlhLnNvcnRfb3JkZXIsIGF2YWlsYWJpbGl0eTogcHJvcHMuZmlsdGVyQ3JpdGVyaWEuYXZhaWxhYmlsaXR5IHx8IFtdIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yU2VhcmNoUGFnaW5hdGlvbicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvci1zZWFyY2gtcGFnaW5hdGlvbicsICdQYWdlcyc6IHRoaXMuc3RhdGUucGFnZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgLy8gaWYgKHdpbmRvdykge1xuICAgICAgICAvLyAgICAgd2luZG93Lm9uc2Nyb2xsID0gbnVsbFxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb25QYXJhbSh0YWcpIHtcbiAgICAgICAgLy8gdGhpcyBBUEkgYXNzdW1lcyB0aGUgY29udGV4dCBvZiByZWFjdC1yb3V0ZXItNFxuICAgICAgICBjb25zdCBwYXJhbVN0cmluZyA9IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1TdHJpbmcpXG4gICAgICAgIHJldHVybiBwYXJhbXMuZ2V0KHRhZylcbiAgICB9XG5cbiAgICBsb2FkTW9yZShwYWdlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNNb3JlOiBmYWxzZSwgbG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICB0aGlzLnByb3BzLmdldERvY3Rvckxpc3QobnVsbCwgcGFnZSArIDEsIChoYXNNb3JlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHBhZ2U6IHBhZ2UgKyAxIH0pXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW9yZSB9KVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHRvZ2dsZVNjcm9sbCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlYWRNb3JlOiAnc2VhcmNoLWRldGFpbHMtZGF0YS1sZXNzJyB9KVxuICAgIH1cblxuICAgIGFwcGx5UXVpY2tGaWx0ZXJzKHR5cGUsIHZhbCwgaXNBcnJheSwgZSkge1xuICAgICAgICBsZXQgdmFsdWUgPSB2YWxcbiAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFZhbCA9IFtdLmNvbmNhdCh0aGlzLnN0YXRlW3R5cGVdKSB8fCBbXVxuICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWRWYWwuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT0gdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUucHVzaCh2YWwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdPcGRRdWlja0ZpbHRlckNsaWNrZWQnLCAnQWN0aW9uJzogJ09wZFF1aWNrRmlsdGVyQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ29wZC1xdWljay1maWx0ZXItY2xpY2tlZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICd0eXBlJzogdHlwZSwgJ3ZhbCc6IHZhbFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cbiAgICAgICAgbGV0IGZpbHRlcnMgPSB7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEgfVxuICAgICAgICBpZiAodHlwZS5pbmNsdWRlcygnc29ydF9vbicpKSB7XG5cbiAgICAgICAgICAgIGlmICh2YWwuaW5jbHVkZXMoJ3ByaWNlX2FzYycpIHx8IHZhbC5pbmNsdWRlcygncHJpY2VfZGVzYycpKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVt0eXBlXSA9PSAnZmVlcycgJiYgKCh0aGlzLnN0YXRlWydzb3J0X29yZGVyJ10gPT0gJ2FzYycgJiYgdmFsLmluY2x1ZGVzKCdwcmljZV9hc2MnKSkgfHwgKHRoaXMuc3RhdGVbJ3NvcnRfb3JkZXInXSA9PSAnZGVzYycgJiYgdmFsLmluY2x1ZGVzKCdwcmljZV9kZXNjJykpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29ydF9vbjogbnVsbCwgc29ydF9vcmRlcjogbnVsbCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzID0gT2JqZWN0LmFzc2lnbih7IGZpbHRlcnMsIC4uLnRoaXMuc3RhdGUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlGaWx0ZXJzKGZpbHRlcnMpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRfb246ICdmZWVzJywgc29ydF9vcmRlcjogdmFsLmluY2x1ZGVzKCdwcmljZV9hc2MnKSA/ICdhc2MnIDogJ2Rlc2MnIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMgPSBPYmplY3QuYXNzaWduKHsgZmlsdGVycywgLi4udGhpcy5zdGF0ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVycylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRfb246IHRoaXMuc3RhdGVbdHlwZV0gPT0gdmFsdWUgPyBudWxsIDogdmFsdWUsIHNvcnRfb3JkZXI6IG51bGwgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzID0gT2JqZWN0LmFzc2lnbih7IGZpbHRlcnMsIC4uLnRoaXMuc3RhdGUgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVycylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFt0eXBlXTogdGhpcy5zdGF0ZVt0eXBlXSA9PSB2YWx1ZSA/ICcnIDogdmFsdWUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZpbHRlcnMgPSBPYmplY3QuYXNzaWduKHsgZmlsdGVycywgLi4udGhpcy5zdGF0ZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlGaWx0ZXJzKGZpbHRlcnMpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmlld01vcmVDbGlja2VkKCkge1xuICAgICAgICBsZXQgZmlsdGVycyA9IHtcbiAgICAgICAgICAgIHZpZXdNb3JlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5hcHBseVF1aWNrRmlsdGVyKGZpbHRlcnMpXG4gICAgfVxuXG5cbiAgICBkZXRlY3RMb2NhdGlvbih0eXBlKSB7XG4gICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kZXRlY3RMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIkNvdWxkIG5vdCBmZXRjaCBsb2NhdGlvbi5cIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwMClcblxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiBgRGV0ZWN0TG9jYXRpb24ke3R5cGV9Q2xpY2tgLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6IGBEZXRlY3QtTG9jYXRpb24tJHt0eXBlfS1DbGlja2AsICdQYWdlJzogJ2RvY3Rvci1zZWFyY2gnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGV0ZWN0TG9hZGluZzogdHJ1ZSB9KVxuICAgICAgICB0aGlzLnByb3BzLmRldGVjdExvY2F0aW9uQ2xpY2soKTtcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZyhwYXJzZUZsb2F0KHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSksIHBhcnNlRmxvYXQocG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSksICdsb2NhbGl0eScsIChsb2NhdGlvbl9vYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMb2NhdGlvbihsb2NhdGlvbl9vYmplY3QsICdhdXRvRGV0ZWN0JykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAoYSwgYiwgYykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3QgZmV0Y2ggbG9jYXRpb24uXCIgfSk7XG4gICAgICAgICAgICB9LCAoYSwgYiwgYykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRlY3RMb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJDb3VsZCBub3QgZmV0Y2ggbG9jYXRpb24uXCIgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldGVjdExvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAvLyBnZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvSG9zcGl0YWwoZGF0YSkge1xuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnU3BvbnNvckNhcmRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnc3BvbnNvci1jYXJkLWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcbiAgICAgICAgaWYgKGRhdGEudXJsKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7ZGF0YS51cmx9YClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvaXBkL2hvc3BpdGFsLyR7ZGF0YS5pZH1gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBkZXRlY3RGbGFnID0gdHJ1ZVxuXG4gICAgICAgIGxldCB7IEhPU1BJVEFMUywgRE9DVE9SUywgZG9jdG9yTGlzdCwgaG9zcGl0YWxMaXN0IH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgbGV0IHN0YXJ0X3BhZ2UgPSAwXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJfcGFnZSkge1xuICAgICAgICAgICAgc3RhcnRfcGFnZSA9IE1hdGgubWF4KDAsIHRoaXMucHJvcHMuY3Vycl9wYWdlIC0gMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnBhZ2UpIHtcbiAgICAgICAgICAgICAgICBzdGFydF9wYWdlID0gTWF0aC5tYXgoMCwgdGhpcy5wcm9wcy5wYWdlIC0gMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHRfbGlzdCA9IGRvY3Rvckxpc3RcbiAgICAgICAgbGV0IHJlc3VsdF9kYXRhID0gRE9DVE9SU1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jbGluaWNfY2FyZCkge1xuICAgICAgICAgICAgcmVzdWx0X2xpc3QgPSBob3NwaXRhbExpc3RcbiAgICAgICAgICAgIHJlc3VsdF9kYXRhID0gSE9TUElUQUxTXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2FyZF9JRCA9IG51bGxcbiAgICAgICAgbGV0IGJvb2thYmxlRG9jdG9ycyA9IHRydWVcblxuICAgICAgICByZXN1bHRfbGlzdC5tYXAoKGNhcmRJZCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRldGVjdEZsYWcgJiYgcmVzdWx0X2RhdGFbY2FyZElkXSAmJiAhcmVzdWx0X2RhdGFbY2FyZElkXS5ob3NwaXRhbHNbMF0uZW5hYmxlZF9mb3Jfb25saW5lX2Jvb2tpbmcgJiYgdGhpcy5wcm9wcy5zZW9GcmllbmRseSAmJiB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLXNwdGxpdGNpdCcpICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYXJkX0lEID0gY2FyZElkXG4gICAgICAgICAgICAgICAgZGV0ZWN0RmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRfZGF0YVtjYXJkSWRdICYmICFyZXN1bHRfZGF0YVtjYXJkSWRdLmhvc3BpdGFsc1swXS5lbmFibGVkX2Zvcl9vbmxpbmVfYm9va2luZyAmJiB0aGlzLnByb3BzLnNlb0ZyaWVuZGx5ICYmIHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctc3B0bGl0Y2l0JykgJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBib29rYWJsZURvY3RvcnMgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgc3BvbnNvckRhdGEgPSB0aGlzLnByb3BzLnNwb25zb3JEYXRhICYmIHRoaXMucHJvcHMuc3BvbnNvckRhdGEubGVuZ3RoID8gdGhpcy5wcm9wcy5zcG9uc29yRGF0YVswXSA6IG51bGxcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gcmVmPVwiY2hlY2tJZkV4aXN0c1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZW5kZXJCbG9jayA/IDxMb2FkZXIgLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY2FyZE1haW5QYWRkaW5nUm12XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaF9jb250ZW50ICYmIHRoaXMucHJvcHMuc2VhcmNoX2NvbnRlbnQgIT0gJycgJiYgcGFyc2VJbnQodGhpcy5wcm9wcy5wYWdlKSA9PSAxID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC1jYXJkLWNvbGxwYXNlIGQtbm9uZSBkLW1kLWJsb2NrIG1iLTBcIiBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc1cHgnLCBtYXJnaW5Ub3A6ICc1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnJlYWRNb3JlfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuc2VhcmNoX2NvbnRlbnQgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVhZE1vcmUgJiYgdGhpcy5zdGF0ZS5yZWFkTW9yZSAhPSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJkLW1vcmVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmU6ICcnIH0pfT5SZWFkIE1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWFkTW9yZSA9PSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJkLW1vcmVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNjcm9sbC5iaW5kKHRoaXMpfT5SZWFkIExlc3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub2ZmZXJMaXN0ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+IHguc2xpZGVyX2xvY2F0aW9uID09PSAnZG9jdG9yX3NlYXJjaF9wYWdlJykubGVuZ3RoICYmICF0aGlzLnN0YXRlLmlzX2luc3VyZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJkb2N0b3Jfc2VhcmNoX3BhZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU3RhcnQ9e3N0YXJ0X3BhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmU9e3RoaXMubG9hZE1vcmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNNb3JlPXt0aGlzLnN0YXRlLmhhc01vcmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlV2luZG93PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxMb2FkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwb25zb3JEYXRhICYmIHNwb25zb3JEYXRhLm5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpbmljLWNhcmQgbWItM1wiIG9uQ2xpY2s9eygpID0+IHRoaXMubmF2aWdhdGVUb0hvc3BpdGFsKHNwb25zb3JEYXRhKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG5jLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjc3RtRG9jTmFtZVwiPntzcG9uc29yRGF0YS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvYy1kZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG9uc29yRGF0YS5ob3NwaXRhbF9pbWFnZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvYy1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzgwcHgnIH19IGNsYXNzTmFtZT1cImNsbmMtc3RjLWltZ1wiIHNyYz17c3BvbnNvckRhdGEuaG9zcGl0YWxfaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2Ake3Nwb25zb3JEYXRhLmFsbF9kb2N0b3JzID8gc3BvbnNvckRhdGEuYWxsX2RvY3RvcnMubGVuZ3RoIDogJyd9IERvY3RvcnNgfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BvbnNvckRhdGEub3BkX3RpbWluZ3MgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNXB4O1wiIH19Pk9QRCBUaW1pbmdzIDo8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIGNsYXNzTmFtZT1cImNzdG1UaW1lSW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2F0Y2gtZGF0ZS5zdmdcIn0gLz4ge3Nwb25zb3JEYXRhLm9wZF90aW1pbmdzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2MtcnRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG9uc29yRGF0YS5hdmdfcmF0aW5nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmF0aW5nU3RhcnMgYXZlcmFnZV9yYXRpbmc9e3BhcnNlSW50KHNwb25zb3JEYXRhLmF2Z19yYXRpbmcpfSByYXRpbmdfY291bnQ9eycnfSB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG9uc29yRGF0YS5yYXRpbmcgJiYgc3BvbnNvckRhdGEucmF0aW5nLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgKCR7c3BvbnNvckRhdGEucmF0aW5nLmxlbmd0aH0pYH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjbG5jLXNwbnNyXCI+U1BPTlNPUkVEPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3RtLWNwblwiPlVwdG8gMzAlIE9mZiA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjc3RtLWJvb2stYnRuIGNsbmMtYnRuXCI+Qm9vayBBcHBvaW50bWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG9uc29yRGF0YS5ob3NwaXRhbF9zZXJ2aWNlcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG5jLWNocHMtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xuYy1jaHBzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwb25zb3JEYXRhLmhvc3BpdGFsX3NlcnZpY2VzLm1hcCgoc2Vydiwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSA8IDQgPyA8c3BhbiBrZXk9e3NlcnYuaWR9PntzZXJ2Lm5hbWV9PC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG9uc29yRGF0YS5ob3NwaXRhbF9zZXJ2aWNlcyAmJiBzcG9uc29yRGF0YS5ob3NwaXRhbF9zZXJ2aWNlcy5sZW5ndGggPiA0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xuYy1hbGwtc3J2Y1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2ArICR7c3BvbnNvckRhdGEuaG9zcGl0YWxfc2VydmljZXMubGVuZ3RoIC0gNH0gTW9yZWB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2xuLWxvYy1wYXJcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL25ldy1sb2MtaWNvLnN2Z1wifSAvPntzcG9uc29yRGF0YS5zaG9ydF9hZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0X2xpc3QubWFwKChjYXJkSWQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0X2RhdGFbY2FyZElkXSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPT0gMSAmJiAhISFib29rYWJsZURvY3RvcnMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhdXRvLWxvY2F0aW9uLXdpZGdldCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGF1dG8tbG9jYXRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvbG9jYXRpb24tY29sb3JlZC5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5TZWUge3RoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0ubmFtZX0gd2l0aCBncmVhdCBkaXNjb3VudHMgbmVhciB5b3U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvLWxvY2F0aW9uLWJ0biBmdy01MDBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmRldGVjdExvY2F0aW9uKCdTcHRsaXRjaXQnKX0gPkRldGVjdCBMb2NhdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpID09IDAgJiYgdGhpcy5wcm9wcy5zZW9GcmllbmRseSAmJiB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLXNwdGNpdCcpICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGF1dG8tbG9jYXRpb24td2lkZ2V0IG1yYi0yMCBtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBhdXRvLWxvY2F0aW9uLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvbG9jYXRpb24tY29sb3JlZC5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBwci00IGQtaW5saW5lXCI+U2hvdzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZ3LTUwMCBkLWlubGluZVwiIHN0eWxlPXt7Zm9udFNpemU6ICcxNHB4J319Pnt0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzWzBdLm5hbWV9IG5lYXIgbWU8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dG8tbG9jYXRpb24tYnRuIGZ3LTUwMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZGV0ZWN0TG9jYXRpb24oJ1NwdGNpdCcpfSA+RGV0ZWN0IExvY2F0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9PSA0ICYmICghdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkgfHwgIXRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtc3ViLWZpbHRlci1jb250YWluZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmlsdGVyIGJ5IDxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMFwiPkF2YWlsYWJpbGl0eSA8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIHNvcnQtbW9yZS1maWx0ZXJcIiBvbkNsaWNrPXt0aGlzLnZpZXdNb3JlQ2xpY2tlZC5iaW5kKHRoaXMpfT5Nb3JlIGZpbHRlcnM8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtc2ItYnRuLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkgJiYgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkubGVuZ3RoICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5LmluZGV4T2YoJzEnKSA+IC0xID8gJ3NydC1hY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy5hcHBseVF1aWNrRmlsdGVycy5iaW5kKHRoaXMsICdhdmFpbGFiaWxpdHknLCAnMScsIHRydWUpfT5Ub2RheTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGggJiYgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkuaW5kZXhPZignMicpID4gLTEgPyAnc3J0LWFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLmFwcGx5UXVpY2tGaWx0ZXJzLmJpbmQodGhpcywgJ2F2YWlsYWJpbGl0eScsICcyJywgdHJ1ZSl9PlRvbW9ycm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYXZhaWxhYmlsaXR5ICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5pbmRleE9mKCczJykgPiAtMSA/ICdzcnQtYWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlcnMuYmluZCh0aGlzLCAnYXZhaWxhYmlsaXR5JywgJzMnLCB0cnVlKX0+TmV4dCAzIERheXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhcmRfSUQpICYmIChjYXJkX0lEID09IGNhcmRJZCkgJiYgKGJvb2thYmxlRG9jdG9ycykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhdXRvLWxvY2F0aW9uLXdpZGdldCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGF1dG8tbG9jYXRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvbG9jYXRpb24tY29sb3JlZC5zdmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj5TZWUgbW9yZSB7dGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhc1swXS5uYW1lfSBuZWFyIHlvdTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dG8tbG9jYXRpb24tYnRuIGZ3LTUwMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZGV0ZWN0TG9jYXRpb24oJ1NwdGxpdGNpdCcpfSA+RGV0ZWN0IExvY2F0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgJiYgcmVzdWx0X2xpc3QgJiYgcmVzdWx0X2xpc3QubGVuZ3RoID4gNSAmJiBpID09IDMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyByZWZlckRvY2ltZ1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1JlZmVyRG9jdG9yTGlzdCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAncmVmZXItZG9jdG9yLWxpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9kb2N0b3JzaWdudXA/bWVtYmVyX3R5cGU9MScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmVmcmxibnIucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaW5zdXJhbmNlX3N0YXR1cyAhPSAxICYmICF0aGlzLnN0YXRlLnNvcnRfb3JkZXIgJiYgKChpID09IDYgJiYgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkgJiYgIXRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCkgfHwgKGkgPT0gMyAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGgpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1zdWItZmlsdGVyLWNvbnRhaW5lciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb3J0IGJ5IDxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMFwiPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgc29ydC1tb3JlLWZpbHRlclwiIG9uQ2xpY2s9e3RoaXMudmlld01vcmVDbGlja2VkLmJpbmQodGhpcyl9Pk1vcmUgZmlsdGVyczwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1zYi1idG4tY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLnNvcnRfb24gPT0gJ2ZlZXMnICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlciA9PSAnYXNjJyA/ICdzcnQtYWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlcnMuYmluZCh0aGlzLCAnc29ydF9vbicsICdwcmljZV9hc2MnLCBmYWxzZSl9PlByaWNlIExvdyB0byBIaWdoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuc29ydF9vbiA9PSAnZmVlcycgJiYgdGhpcy5zdGF0ZS5zb3J0X29yZGVyID09ICdkZXNjJyA/ICdzcnQtYWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlcnMuYmluZCh0aGlzLCAnc29ydF9vbicsICdwcmljZV9kZXNjJywgZmFsc2UpfT5QcmljZSBIaWdoIHRvIExvdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID09IDUgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QgJiYgdGhpcy5wcm9wcy5vZmZlckxpc3QuZmlsdGVyKHggPT4geC5zbGlkZXJfbG9jYXRpb24gPT09ICdkb2N0b3Jfc2VhcmNoX3BhZ2UnKS5sZW5ndGggJiYgIXRoaXMuc3RhdGUuaXNfaW5zdXJlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJDYXJvdXNlbCB7Li4udGhpcy5wcm9wc30gc2xpZGVyTG9jYXRpb249XCJkb2N0b3Jfc2VhcmNoX3BhZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJyovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnQtaGVpZ2h0IGhvbWUtcGFnZS1iYW5uZXItZGl2IG1iLTMgbXItMCBiYW5uZXItbWQtbWFyZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVyQmFubmVyIGJhbm5lci1jYXJvdXNlbC1kaXYgZC1tZC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZIZWlnaHQgbS0wXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCI1cHghaW1wb3J0YW50XCJ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lckNhcm91c2VsIHsuLi50aGlzLnByb3BzfSBzbGlkZXJMb2NhdGlvbj1cImRvY3Rvcl9zZWFyY2hfcGFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGluaWNfY2FyZCA/IDxDbGluaWNSZXN1bHRDYXJkIHsuLi50aGlzLnByb3BzfSBkZXRhaWxzPXtyZXN1bHRfZGF0YVtjYXJkSWRdfSBrZXk9e2l9IHJhbms9e2l9IC8+IDogPERvY3RvclJlc3VsdENhcmQgey4uLnRoaXMucHJvcHN9IGRldGFpbHM9e3Jlc3VsdF9kYXRhW2NhcmRJZF19IGtleT17aX0gcmFuaz17aX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9ucyAmJiB0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnNvcnRfb3JkZXIgJiYgKCF0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSB8fCAhdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkubGVuZ3RoKSAmJiAoaSA9PSA3IHx8IHRoaXMucHJvcHMuY291bnQgLSAxID09IGkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlNpbWlsYXJTcGVjaWFsaXphdGlvbkRhdGEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2ltaWxhcl9zcGVjaWFsaXphdGlvbnMgJiYgdGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9ucy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5zb3J0X29yZGVyICYmICh0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSB8fCB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGgpICYmIHRoaXMucHJvcHMuY291bnQgPCA4ICYmIGkgPT0gKHRoaXMucHJvcHMuY291bnQgLSAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5TaW1pbGFyU3BlY2lhbGl6YXRpb25EYXRhKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zICYmIHRoaXMucHJvcHMuc2ltaWxhcl9zcGVjaWFsaXphdGlvbnMubGVuZ3RoICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlciAmJiAodGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkgfHwgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkubGVuZ3RoKSAmJiB0aGlzLnByb3BzLmNvdW50IDwgOCAmJiBpID09IDMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuU2ltaWxhclNwZWNpYWxpemF0aW9uRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaW1pbGFyX3NwZWNpYWxpemF0aW9ucyAmJiB0aGlzLnByb3BzLnNpbWlsYXJfc3BlY2lhbGl6YXRpb25zLmxlbmd0aCAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgJiYgKHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5IHx8IHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCkgJiYgaSA9PSAzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLlNpbWlsYXJTcGVjaWFsaXphdGlvbkRhdGEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhIWNhcmRfSUQgJiYgaSA9PSByZXN1bHRfbGlzdC5sZW5ndGggLSAxICYmIHRoaXMucHJvcHMuc2VvRnJpZW5kbHkgJiYgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1zcHRsaXRjaXQnKSAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzICYmIHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gYXV0by1sb2NhdGlvbi13aWRnZXQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBhdXRvLWxvY2F0aW9uLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2xvY2F0aW9uLWNvbG9yZWQuc3ZnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+U2VlIG1vcmUge3RoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXNbMF0ubmFtZX0gbmVhciB5b3U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvLWxvY2F0aW9uLWJ0biBmdy01MDBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmRldGVjdExvY2F0aW9uKCdTcHRsaXRjaXQnKX0gPkRldGVjdCBMb2NhdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRlciBjbGFzc1R5cGU9XCJsb2FkZXJQYWdpbmF0aW9uXCIgLz4gOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JzTGlzdFxuIiwiaW1wb3J0IERvY3Rvckxpc3QgZnJvbSAnLi9Eb2N0b3JzTGlzdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgRG9jdG9yTGlzdCIsImltcG9ydCBTZWFyY2hSZXN1bHRzVmlldyBmcm9tICcuL1NlYXJjaFJlc3VsdHNWaWV3LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHRzVmlldyIsImltcG9ydCBOZXdUb3BCYXIgZnJvbSAnLi9uZXdUb3BCYXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE5ld1RvcEJhciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJhbmdlIGZyb20gJ3JjLXNsaWRlci9saWIvUmFuZ2UnO1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBMb2NhdGlvblBvcHVwIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvblBvcHVwJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFuY2hvckVsOiBudWxsLFxuICAgICAgICAgICAgaXNfaW5zdXJlZDogcHJvcHMuZmlsdGVyQ3JpdGVyaWEgJiYgcHJvcHMuZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCA/IHByb3BzLmZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQgOiBmYWxzZSxcbiAgICAgICAgICAgIGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgaG9zcGl0YWxfaWQ6IHByb3BzLmZpbHRlckNyaXRlcmlhICYmIHByb3BzLmZpbHRlckNyaXRlcmlhLmhvc3BpdGFsX2lkID8gcHJvcHMuZmlsdGVyQ3JpdGVyaWEuaG9zcGl0YWxfaWQgOiAnJyxcbiAgICAgICAgICAgIC8vTmV3IGZpbHRlcnNcbiAgICAgICAgICAgIHByZXZpb3VzX2ZpbHRlcnM6IHt9LFxuICAgICAgICAgICAgc29ydF9vbjogJycsXG4gICAgICAgICAgICBzb3J0X29yZGVyOiAnJyxcbiAgICAgICAgICAgIGF2Z19yYXRpbmdzOiAnJyxcbiAgICAgICAgICAgIGF2YWlsYWJpbGl0eTogW10sXG4gICAgICAgICAgICBnZW5kZXI6ICcnLFxuICAgICAgICAgICAgc2l0c19hdF9jbGluaWM6IGZhbHNlLFxuICAgICAgICAgICAgc2l0c19hdF9ob3NwaXRhbDogZmFsc2UsXG4gICAgICAgICAgICBzcGVjaWFsaXphdGlvbjogW10sXG4gICAgICAgICAgICBzaG9ydFVSTDogXCJcIixcbiAgICAgICAgICAgIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIG92ZXJsYXlWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHF1aWNrRmlsdGVyOiB7fSxcbiAgICAgICAgICAgIEhvc3BGaWx0ZXI6IFtdLFxuICAgICAgICAgICAgSG9zcEZpbHRlck9uRm91Y3NEYXRhOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkSG9zcGl0YWxJZHM6IFtdLFxuICAgICAgICAgICAgaGlkZUhvc3BGaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgU3BlY2lhbGl0eUZpbHRlcjogW10sXG4gICAgICAgICAgICBTcGVjaWFsaXR5RmlsdGVyT25Gb2N1c0RhdGE6IFtdLFxuICAgICAgICAgICAgc2VsZWN0ZWRTcGVjaWFsaXphdGlvbklkczogW10sXG4gICAgICAgICAgICBoaWRlU3BlY0ZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgICBoaWRlT3RoZXJGaWx0ZXJzOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbHRlclNlYXJjaFN0cmluZzonJyxcbiAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHM6W10sXG4gICAgICAgICAgICBkZWZhdWx0U3BlY2lhbGl6YXRpb25JZHM6W10sXG4gICAgICAgICAgICBzZWFyY2hDaXRpZXM6W11cbiAgICAgICAgICAgIC8vc2hvd1BvcHVwQ29udGFpbmVyOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5wcm9wcy5maWx0ZXJDcml0ZXJpYSwgc2VsZWN0ZWRIb3NwaXRhbElkczogcHJvcHMuZmlsdGVyQ3JpdGVyaWEuaG9zcGl0YWxfaWQgPyBwcm9wcy5maWx0ZXJDcml0ZXJpYS5ob3NwaXRhbF9pZCA6IFtdLCBxdWlja0ZpbHRlcjogcHJvcHMucXVpY2tGaWx0ZXIgfHwge30gfSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucXVpY2tGaWx0ZXIgJiYgdGhpcy5zdGF0ZS5xdWlja0ZpbHRlci52aWV3TW9yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydEZpbHRlckNsaWNrZWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBsZXQgYWxsUmVhZHlTZWxlY3RlZFNwZWNpYWxpemF0aW9uSWQgPSBbXVxuICAgICAgICBpZihwcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiBwcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLm1hcCgoc3BlY19pZCwgaykgPT57XG4gICAgICAgICAgICAgICAgYWxsUmVhZHlTZWxlY3RlZFNwZWNpYWxpemF0aW9uSWQucHVzaChzcGVjX2lkLmlkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlZmF1bHRTcGVjaWFsaXphdGlvbklkczphbGxSZWFkeVNlbGVjdGVkU3BlY2lhbGl6YXRpb25JZH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLmxvY2F0aW9uVHlwZSAmJiAhcHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoKHByb3BzLnNlb0RhdGEgJiYgcHJvcHMuc2VvRGF0YS5sb2NhdGlvbikgfHwgcHJvcHMuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IHRydWUsIG92ZXJsYXlWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc2hvcnRlblVybCgpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZnJvbVZpcCl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvcEJhclJlZih0aGlzKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhLCBzZWxlY3RlZEhvc3BpdGFsSWRzOiB0aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhLmhvc3BpdGFsX2lkID8gdGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYS5ob3NwaXRhbF9pZCA6IFtdIH0pXG4gICAgICAgIC8vIHRoaXMuc2hvcnRlblVybCgpXG4gICAgICAgIGlmICgodGhpcy5wcm9wcy5zZW9EYXRhICYmIHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvbikgfHwgdGhpcy5wcm9wcy5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb25UeXBlICYmIHRoaXMucHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiB0cnVlLCBvdmVybGF5VmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGx5RmlsdGVycygpIHtcbiAgICAgICAgbGV0IGZpbHRlclN0YXRlID0ge1xuICAgICAgICAgICAgc29ydF9vbjogdGhpcy5zdGF0ZS5zb3J0X29uLFxuICAgICAgICAgICAgc29ydF9vcmRlcjogdGhpcy5zdGF0ZS5zb3J0X29yZGVyLFxuICAgICAgICAgICAgZ2VuZGVyOiB0aGlzLnN0YXRlLmdlbmRlcixcbiAgICAgICAgICAgIGF2YWlsYWJpbGl0eTogdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHksXG4gICAgICAgICAgICBhdmdfcmF0aW5nczogdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyxcbiAgICAgICAgICAgIHNpdHNfYXRfY2xpbmljOiB0aGlzLnN0YXRlLnNpdHNfYXRfY2xpbmljLFxuICAgICAgICAgICAgc2l0c19hdF9ob3NwaXRhbDogdGhpcy5zdGF0ZS5zaXRzX2F0X2hvc3BpdGFsLFxuICAgICAgICAgICAgaXNfaW5zdXJlZDogdGhpcy5zdGF0ZS5pc19pbnN1cmVkLFxuICAgICAgICAgICAgaG9zcGl0YWxfaWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWRIb3NwaXRhbElkcyxcbiAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHM6dGhpcy5zdGF0ZS5zcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnRmlsdGVyQ2xpY2snLCAnQWN0aW9uJzogJ0NsaWNrZWQgb24gRmlsdGVyJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3BkLWZpbHRlci1jbGlja2VkJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ2F2YWlsYWJpbGl0eSc6IHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5LCAnc2l0c19hdF9jbGluaWMnOiB0aGlzLnN0YXRlLnNpdHNfYXRfY2xpbmljLCAnc2l0c19hdF9ob3NwaXRhbCc6IHRoaXMuc3RhdGUuc2l0c19hdF9ob3NwaXRhbCwgJ2dlbmRlcic6IHRoaXMuc3RhdGUuZ2VuZGVyLCAnc29ydF9vcmRlcic6IHRoaXMuc3RhdGUuc29ydF9vcmRlciB8fCAnJywgJ3NvcnRfb24nOiB0aGlzLnN0YXRlLnNvcnRfb24gfHwgJycsICdyYXRpbmcnOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzLCBob3NwaXRhbF9pZDogdGhpcy5zdGF0ZS5zZWxlY3RlZEhvc3BpdGFsSWRzIHx8ICcnLCBzcGVjaWFsaXphdGlvbl9maWx0ZXJfaWQ6IHRoaXMuc3RhdGUuc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcyB8fCAnJywgc3BlY2lhbGl6YXRpb25zOiB0aGlzLnN0YXRlLmRlZmF1bHRTcGVjaWFsaXphdGlvbklkcyB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgbGV0IGlmQW55RmlsdGVyQXBwbGllZCA9IHRoaXMuaXNEYXRhRmlsdGVyZWQoe30sIHRydWUpXG4gICAgICAgIGlmIChpZkFueUZpbHRlckFwcGxpZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlGaWx0ZXJzKGZpbHRlclN0YXRlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2xvc2UocmVzZXQgPSBmYWxzZSwgZSkge1xuXG4gICAgICAgIGlmIChyZXNldCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdSZXNldE9wZEZpbHRlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Jlc2V0LW9wZC1maWx0ZXInLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnYXZhaWxhYmlsaXR5JzogdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHksICdzaXRzX2F0X2NsaW5pYyc6IHRoaXMuc3RhdGUuc2l0c19hdF9jbGluaWMsICdzaXRzX2F0X2hvc3BpdGFsJzogdGhpcy5zdGF0ZS5zaXRzX2F0X2hvc3BpdGFsLCAnZ2VuZGVyJzogdGhpcy5zdGF0ZS5nZW5kZXIsICdzb3J0X29yZGVyJzogdGhpcy5zdGF0ZS5zb3J0X29yZGVyIHx8ICcnLCAnc29ydF9vbic6IHRoaXMuc3RhdGUuc29ydF9vbiB8fCAnJywgJ3JhdGluZyc6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICBsZXQgcmVzZXRGaWx0ZXJzID0ge1xuICAgICAgICAgICAgICAgIHNvcnRfb246ICcnLFxuICAgICAgICAgICAgICAgIHNvcnRfb3JkZXI6ICcnLFxuICAgICAgICAgICAgICAgIGF2Z19yYXRpbmdzOiAnJyxcbiAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHk6IFtdLFxuICAgICAgICAgICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgICAgICAgICAgc2l0c19hdF9jbGluaWM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpdHNfYXRfaG9zcGl0YWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uOiBbXSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEhvc3BpdGFsSWRzOltdLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHM6W11cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4ucmVzZXRGaWx0ZXJzLFxuICAgICAgICAgICAgICAgIHF1aWNrRmlsdGVyOiB7fVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDbG9zZU9wZEZpbHRlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Nsb3NlLW9wZC1maWx0ZXInLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnYXZhaWxhYmlsaXR5JzogdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHksICdzaXRzX2F0X2NsaW5pYyc6IHRoaXMuc3RhdGUuc2l0c19hdF9jbGluaWMsICdzaXRzX2F0X2hvc3BpdGFsJzogdGhpcy5zdGF0ZS5zaXRzX2F0X2hvc3BpdGFsLCAnZ2VuZGVyJzogdGhpcy5zdGF0ZS5nZW5kZXIsICdzb3J0X29yZGVyJzogdGhpcy5zdGF0ZS5zb3J0X29yZGVyIHx8ICcnLCAnc29ydF9vbic6IHRoaXMuc3RhdGUuc29ydF9vbiB8fCAnJywgJ3JhdGluZyc6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bl92aXNpYmxlOiBmYWxzZSwgaGlkZU90aGVyRmlsdGVyczogZmFsc2UsIGhpZGVIb3NwRmlsdGVyOiBmYWxzZSwgaGlkZVNwZWNGaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucHJldmlvdXNfZmlsdGVycyxcbiAgICAgICAgICAgICAgICBxdWlja0ZpbHRlcjoge31cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL3RoaXMucHJvcHMucmVzZXRRdWlja0ZpbHRlcnMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQWxsRmlsdGVycyh0eXBlLCB2YWwsIGlzQXJyYXkgPSBmYWxzZSwgZSkge1xuICAgICAgICBsZXQgdmFsdWUgPSB2YWxcbiAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFZhbCA9IFtdLmNvbmNhdCh0aGlzLnN0YXRlW3R5cGVdKSB8fCBbXVxuICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWRWYWwuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT0gdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUucHVzaCh2YWwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUuaW5jbHVkZXMoJ3NvcnRfb24nKSkge1xuXG4gICAgICAgICAgICBpZiAodmFsLmluY2x1ZGVzKCdwcmljZV9hc2MnKSB8fCB2YWwuaW5jbHVkZXMoJ3ByaWNlX2Rlc2MnKSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVbdHlwZV0gPT0gJ2ZlZXMnICYmICgodGhpcy5zdGF0ZVsnc29ydF9vcmRlciddID09ICdhc2MnICYmIHZhbC5pbmNsdWRlcygncHJpY2VfYXNjJykpIHx8ICh0aGlzLnN0YXRlWydzb3J0X29yZGVyJ10gPT0gJ2Rlc2MnICYmIHZhbC5pbmNsdWRlcygncHJpY2VfZGVzYycpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRfb246IG51bGwsIHNvcnRfb3JkZXI6IG51bGwgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29ydF9vbjogJ2ZlZXMnLCBzb3J0X29yZGVyOiB2YWwuaW5jbHVkZXMoJ3ByaWNlX2FzYycpID8gJ2FzYycgOiAnZGVzYycgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvcnRfb246IHRoaXMuc3RhdGVbdHlwZV0gPT0gdmFsdWUgPyBudWxsIDogdmFsdWUsIHNvcnRfb3JkZXI6IG51bGwgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlLmluY2x1ZGVzKCdzaXRzX2F0X2NsaW5pYycpIHx8IHR5cGUuaW5jbHVkZXMoJ3NpdHNfYXRfaG9zcGl0YWwnKSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVt0eXBlXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbdHlwZV06ICF0aGlzLnN0YXRlW3R5cGVdIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAnc2l0c19hdF9jbGluaWMnOiB0eXBlLmluY2x1ZGVzKCdzaXRzX2F0X2NsaW5pYycpID8gdmFsdWUgOiAhdmFsdWUsICdzaXRzX2F0X2hvc3BpdGFsJzogdHlwZS5pbmNsdWRlcygnc2l0c19hdF9ob3NwaXRhbCcpID8gdmFsdWUgOiAhdmFsdWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbdHlwZV06IHRoaXMuc3RhdGVbdHlwZV0gPT0gdmFsdWUgPyAnJyA6IHZhbHVlIH0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNvcnRGaWx0ZXJDbGlja2VkKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnT3BkU29ydEZpbHRlckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdvcGQtc29ydC1maWx0ZXItY2xpY2tlZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdhdmFpbGFiaWxpdHknOiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSwgJ3NpdHNfYXRfY2xpbmljJzogdGhpcy5zdGF0ZS5zaXRzX2F0X2NsaW5pYywgJ3NpdHNfYXRfaG9zcGl0YWwnOiB0aGlzLnN0YXRlLnNpdHNfYXRfaG9zcGl0YWwsICdnZW5kZXInOiB0aGlzLnN0YXRlLmdlbmRlciwgJ3NvcnRfb3JkZXInOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgfHwgJycsICdzb3J0X29uJzogdGhpcy5zdGF0ZS5zb3J0X29uIHx8ICcnLCAncmF0aW5nJzogdGhpcy5zdGF0ZS5hdmdfcmF0aW5nc1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIGxldCBzZWFyY2hVcmwgPSBudWxsXG4gICAgICAgIGxldCBwYWdlID0gdGhpcy5wcm9wcy5wYWdlXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMucHJvcHNcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWF0Y2gudXJsLmluY2x1ZGVzKCctc3B0Y2l0JykgfHwgdGhpcy5wcm9wcy5tYXRjaC51cmwuaW5jbHVkZXMoJy1zcHRsaXRjaXQnKSB8fCB0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLWlwZGRwJykpIHtcbiAgICAgICAgICAgIHNlYXJjaFVybCA9IHRoaXMucHJvcHMubWF0Y2gudXJsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIHNlYXJjaFVybCA9IHNlYXJjaFVybC5zcGxpdCgnLycpXG4gICAgICAgICAgICBzZWFyY2hVcmwgPSBzZWFyY2hVcmwubGVuZ3RoPjE/c2VhcmNoVXJsWzFdOnNlYXJjaFVybFswXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0RG9jdG9ySG9zcGl0YWxGaWx0ZXJzKHN0YXRlLCBwYWdlLCBmYWxzZSwgc2VhcmNoVXJsLCAoLi4ucmVzcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3AgJiYgcmVzcFswXS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgSG9zcEZpbHRlcjogcmVzcFswXS5yZXN1bHQsIEhvc3BGaWx0ZXJPbkZvdWNzRGF0YTogcmVzcFswXS5yZXN1bHQgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnByb3BzLmdldERvY3Rvckhvc3BpdGFsU3BlY2lhbGl0eShzdGF0ZSwgcGFnZSwgZmFsc2UsIHNlYXJjaFVybCwgKC4uLnJlc3ApID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwICYmIHJlc3BbMF0ucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFNwZWNpYWxpdHlGaWx0ZXI6IHJlc3BbMF0ucmVzdWx0LCBTcGVjaWFsaXR5RmlsdGVyT25Gb2N1c0RhdGE6IHJlc3BbMF0ucmVzdWx0IH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGxldCBjdXJyZW50RmlsdGVycyA9IHtcbiAgICAgICAgICAgIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vbixcbiAgICAgICAgICAgIHNvcnRfb3JkZXI6IHRoaXMuc3RhdGUuc29ydF9vcmRlcixcbiAgICAgICAgICAgIGF2Z19yYXRpbmdzOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzLFxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiBbXS5jb25jYXQodGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkpLFxuICAgICAgICAgICAgZ2VuZGVyOiB0aGlzLnN0YXRlLmdlbmRlcixcbiAgICAgICAgICAgIHNpdHNfYXRfY2xpbmljOiB0aGlzLnN0YXRlLnNpdHNfYXRfY2xpbmljLFxuICAgICAgICAgICAgc2l0c19hdF9ob3NwaXRhbDogdGhpcy5zdGF0ZS5zaXRzX2F0X2hvc3BpdGFsLFxuICAgICAgICAgICAgc3BlY2lhbGl6YXRpb246IFtdLmNvbmNhdCh0aGlzLnN0YXRlLnNwZWNpYWxpemF0aW9uKSxcbiAgICAgICAgICAgIHNlbGVjdGVkSG9zcGl0YWxJZHM6IFtdLmNvbmNhdCh0aGlzLnN0YXRlLnNlbGVjdGVkSG9zcGl0YWxJZHMpLFxuICAgICAgICAgICAgc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkczogW10uY29uY2F0KHRoaXMuc3RhdGUuc3BlY2lhbGl6YXRpb25fZmlsdGVyX2lkcylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJvcGRvd25fdmlzaWJsZTogdHJ1ZSwgcHJldmlvdXNfZmlsdGVyczogY3VycmVudEZpbHRlcnMgfSlcbiAgICB9XG5cbiAgICBpc0RhdGFGaWx0ZXJlZChmaWx0ZXJEYXRhID0ge30sIGNoZWNrSWZBbnlGaWx0ZXJBcHBsaWxlZCA9IGZhbHNlKSB7XG5cbiAgICAgICAgaWYgKGNoZWNrSWZBbnlGaWx0ZXJBcHBsaWxlZCkge1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJDb3VudCA9IDBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWx0ZXIgaW4gdGhpcy5zdGF0ZS5wcmV2aW91c19maWx0ZXJzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlci5pbmNsdWRlcygnYXZhaWxhYmlsaXR5JykgfHwgZmlsdGVyLmluY2x1ZGVzKCdzcGVjaWFsaXphdGlvbicpIHx8IGZpbHRlci5pbmNsdWRlcygnc2VsZWN0ZWRIb3NwaXRhbElkcycpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnNbZmlsdGVyXSAmJiB0aGlzLnN0YXRlW2ZpbHRlcl0ubGVuZ3RoICE9IHRoaXMuc3RhdGUucHJldmlvdXNfZmlsdGVyc1tmaWx0ZXJdLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGFyckZsaXRlciA9IDA7IGFyckZsaXRlciA8IHRoaXMuc3RhdGVbZmlsdGVyXS5sZW5ndGg7IGFyckZsaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnNbZmlsdGVyXS5pbmRleE9mKHRoaXMuc3RhdGVbZmlsdGVyXVthcnJGbGl0ZXJdKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlW2ZpbHRlcl0gIT0gdGhpcy5zdGF0ZS5wcmV2aW91c19maWx0ZXJzW2ZpbHRlcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50KytcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJDb3VudFxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZpbHRlckRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYXZnX3JhdGluZ3M6ICcnLFxuICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eTogW10sXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiAnJyxcbiAgICAgICAgICAgICAgICBob3NwaXRhbF90eXBlOiAnJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEhvc3BpdGFsSWRzOicnLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHM6W11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGZpbHRlckNvdW50ID0gMFxuICAgICAgICAgICAgZm9yIChsZXQgZmlsdGVyIGluIGZpbHRlckRhdGEpIHtcblxuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIuaW5jbHVkZXMoJ2hvc3BpdGFsX3R5cGUnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVsnc2l0c19hdF9jbGluaWMnXSB8fCB0aGlzLnN0YXRlWydzaXRzX2F0X2hvc3BpdGFsJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50KytcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLmluY2x1ZGVzKCdhdmFpbGFiaWxpdHknKSB8fCBmaWx0ZXIuaW5jbHVkZXMoJ3NwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVtmaWx0ZXJdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIuaW5jbHVkZXMoJ3NlbGVjdGVkSG9zcGl0YWxJZHMnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlWydzZWxlY3RlZEhvc3BpdGFsSWRzJ10gIT0nJyB8fCB0aGlzLnN0YXRlWydzZWxlY3RlZEhvc3BpdGFsSWRzJ10ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50KytcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyRGF0YVtmaWx0ZXJdICE9IHRoaXMuc3RhdGVbZmlsdGVyXSkge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudCsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlckNvdW50XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q3JpdGVyaWFTdHJpbmcoc2VsZWN0ZWRDcml0ZXJpYXMpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ3JpdGVyaWFzICYmIHNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGlzX2dyb3VwX2lkc19leGlzdCA9IHNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnZ3JvdXBfaWRzJylcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZERhdGFWaWV3ID0gaXNfZ3JvdXBfaWRzX2V4aXN0Lmxlbmd0aCA/IGlzX2dyb3VwX2lkc19leGlzdCA6IHNlbGVjdGVkQ3JpdGVyaWFzXG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZERhdGFWaWV3LnJlZHVjZSgoZmluYWwsIGN1cnIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsICs9ICcsICdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWwgKz0gYCR7Y3Vyci5uYW1lfWBcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxcbiAgICAgICAgICAgIH0sIFwiXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb1RvTG9jYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXVxuICAgICAgICB9KVxuICAgICAgICBsZXQgcmVkaXJlY3RfdG8gPSBcIlwiXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3NwdGNpdCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnc3B0bGl0Y2l0JykpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvb3BkL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxvY2F0aW9uX3VybCA9ICcvbG9jYXRpb25zZWFyY2gnXG4gICAgICAgIGlmIChyZWRpcmVjdF90bykge1xuICAgICAgICAgICAgbG9jYXRpb25fdXJsICs9IGA/cmVkaXJlY3RfdG89JHtyZWRpcmVjdF90b31gXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZXROZXh0U2VhcmNoQ3JpdGVyaWEoKVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGFuZ2VMb2NhdGlvbkRvY3RvclJlc3VsdHNQb3BVcCcsICdBY3Rpb24nOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uX3VybClcbiAgICB9XG5cbiAgICBvdmVybGF5Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdmVybGF5VmlzaWJsZTogZmFsc2UsIHNlYXJjaENpdGllczogW10sIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbl9lbGVtZW50JykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbl9lbGVtZW50Jykuc3R5bGUuekluZGV4ID0gJzAnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlTG9jYXRpb25Qb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBwb3B1cENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cENvbnRhaW5lcjogZmFsc2UsIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBzaG9ydGVuVXJsKCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYgKyAnJmZvcmNlX2xvY2F0aW9uPXRydWUnXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVybFNob3J0bmVyKHVybCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogZGF0YS50aW55X3VybCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVJbnN1cmVkKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb3ZlcmVkVW5kZXJPUERJbnN1cmFuY2VDbGlja2VkJywgJ0FjdGlvbic6ICdDb3ZlcmVkVW5kZXJMQUJJbnN1cmFuY2VDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY292ZXJlZC11bmRlci1vcGQtaW5zdXJhbmNlLWNsaWNrZWQnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNfaW5zdXJlZDogIXRoaXMuc3RhdGUuaXNfaW5zdXJlZCB9LCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBmaWx0ZXJTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBpc19pbnN1cmVkOiB0aGlzLnN0YXRlLmlzX2luc3VyZWQsXG4gICAgICAgICAgICAgICAgaG9zcGl0YWxfaWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWRIb3NwaXRhbElkcyxcbiAgICAgICAgICAgICAgICBzb3J0X29yZGVyOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIsXG4gICAgICAgICAgICAgICAgc29ydF9vbjogdGhpcy5zdGF0ZS5zb3J0X29uLFxuICAgICAgICAgICAgICAgIGF2Z19yYXRpbmdzOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzLFxuICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eTogdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHksXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiB0aGlzLnN0YXRlLmdlbmRlcixcbiAgICAgICAgICAgICAgICBzaXRzX2F0X2NsaW5pYzogdGhpcy5zdGF0ZS5zaXRzX2F0X2NsaW5pYyxcbiAgICAgICAgICAgICAgICBzaXRzX2F0X2hvc3BpdGFsOiB0aGlzLnN0YXRlLnNpdHNfYXRfaG9zcGl0YWwsXG4gICAgICAgICAgICAgICAgc3BlY2lhbGl6YXRpb246IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFwcGx5RmlsdGVycyhmaWx0ZXJTdGF0ZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVTcGVjaWFsaXphdGlvbihzcGVjX2lkKSB7XG4gICAgICAgIGxldCB0ZXN0X2lkcyA9IFtdLmNvbmNhdCh0aGlzLnN0YXRlLnNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICB0ZXN0X2lkcyA9IHRlc3RfaWRzLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAgICAgaWYgKHggPT0gc3BlY19pZCkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgaWYodGVzdF9pZHMubGVuZ3RoICE9IDUpe1xuICAgICAgICAgICAgICAgIHRlc3RfaWRzLnB1c2goc3BlY19pZClcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJNYXggNSBzcGVjaWFsaXphdGlvbiBjYW4gYmUgc2VsZWN0ZWRcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoeyBzcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzOiB0ZXN0X2lkcyB9KVxuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2VGb2N1cyh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGlkZU90aGVyRmlsdGVyczogdHJ1ZSwgaGlkZVNwZWNGaWx0ZXI6IHRydWUgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWRlT3RoZXJGaWx0ZXJzOiB0cnVlLCBoaWRlSG9zcEZpbHRlcjogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xvc2VFeHRyYUZpbHRlcih0eXBlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWRlT3RoZXJGaWx0ZXJzOiBmYWxzZSwgaGlkZVNwZWNGaWx0ZXI6IGZhbHNlLCBoaWRlSG9zcEZpbHRlcjogZmFsc2UsIGZpbHRlclNlYXJjaFN0cmluZzonJyB9KVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZUhvc3AoZXZlbnQpIHtcbiAgICAgICAgbGV0IHNlYXJjaF9zdHJpbmcgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJTZWFyY2hTdHJpbmc6ZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgICAgICAgbGV0IGZpbHRlcmVkX2hvc3BfbGlzdCA9IFtdXG4gICAgICAgIHRoaXMuc3RhdGUuSG9zcEZpbHRlci5tYXAoKEhvc3ApID0+IHtcbiAgICAgICAgICAgIGxldCBob3NwX25hbWUgPSAoSG9zcC5uYW1lKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICBpZiAoaG9zcF9uYW1lLmluY2x1ZGVzKHNlYXJjaF9zdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaG9zcF9uYW1lLmluZGV4T2Yoc2VhcmNoX3N0cmluZylcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZF9ob3NwX2xpc3QucHVzaCh7IGlkOiBIb3NwLmlkLCBuYW1lOiBIb3NwLm5hbWUsIHJhbms6IGluZGV4IH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGZpbHRlcmVkX2hvc3BfbGlzdCA9IGZpbHRlcmVkX2hvc3BfbGlzdC5zb3J0KCh4LCB5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5yYW5rIC0geS5yYW5rXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBIb3NwRmlsdGVyT25Gb3Vjc0RhdGE6IGZpbHRlcmVkX2hvc3BfbGlzdCB9KVxuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZVNwZWMoZXZlbnQpIHtcbiAgICAgICAgbGV0IHNlYXJjaF9zdHJpbmcgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJTZWFyY2hTdHJpbmc6ZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgICAgICAgbGV0IGZpbHRlcmVkX3NwZWNfbGlzdCA9IFtdXG4gICAgICAgIHRoaXMuc3RhdGUuU3BlY2lhbGl0eUZpbHRlci5tYXAoKFNwZWMpID0+IHtcbiAgICAgICAgICAgIGxldCBzcGVjX25hbWUgPSAoU3BlYy5uYW1lKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICBpZiAoc3BlY19uYW1lLmluY2x1ZGVzKHNlYXJjaF9zdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gc3BlY19uYW1lLmluZGV4T2Yoc2VhcmNoX3N0cmluZylcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZF9zcGVjX2xpc3QucHVzaCh7IGlkOiBTcGVjLmlkLCBuYW1lOiBTcGVjLm5hbWUsIHJhbms6IGluZGV4IH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGZpbHRlcmVkX3NwZWNfbGlzdCA9IGZpbHRlcmVkX3NwZWNfbGlzdC5zb3J0KCh4LCB5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5yYW5rIC0geS5yYW5rXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBTcGVjaWFsaXR5RmlsdGVyT25Gb2N1c0RhdGE6IGZpbHRlcmVkX3NwZWNfbGlzdCB9KVxuICAgIH1cblxuICAgIHRvZ2dsZUhvc3BpdGFsKGhvc3BfaWQpIHtcbiAgICAgICAgbGV0IHRlc3RfaWRzID0gW10uY29uY2F0KHRoaXMuc3RhdGUuc2VsZWN0ZWRIb3NwaXRhbElkcylcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlXG4gICAgICAgIHRlc3RfaWRzID0gdGVzdF9pZHMuZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgICAgICBpZiAoeCA9PSBob3NwX2lkKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICBpZih0ZXN0X2lkcy5sZW5ndGggIT0gNSl7XG4gICAgICAgICAgICAgICAgdGVzdF9pZHMucHVzaChob3NwX2lkKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIk1heCA1IGhvc3BpdGFsIGNhbiBiZSBzZWxlY3RlZFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBzZWxmLnNldFN0YXRlKHsgc2VsZWN0ZWRIb3NwaXRhbElkczogdGVzdF9pZHMgfSlcbiAgICB9XG5cbiAgICBIb3NwRmlsdGVyRGF0YSgpIHtcbiAgICAgICAgbGV0IGxpRGF0YSA9IFtdXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoc2VsZi5zdGF0ZS5zZWxlY3RlZEhvc3BpdGFsSWRzICYmIHNlbGYuc3RhdGUuc2VsZWN0ZWRIb3NwaXRhbElkcy5sZW5ndGggPiAwICYmICFzZWxmLnN0YXRlLmhpZGVPdGhlckZpbHRlcnMpIHtcbiAgICAgICAgICAgIHNlbGYuc3RhdGUuSG9zcEZpbHRlci5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0YXRlLnNlbGVjdGVkSG9zcGl0YWxJZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xICYmIGxpRGF0YS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGxpRGF0YS5wdXNoKDxsaSBrZXk9e2tleX0gb25DaGFuZ2U9e3NlbGYudG9nZ2xlSG9zcGl0YWwuYmluZChzZWxmLCBkYXRhLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNTAwJywgZm9udFNpemU6ICcxM3B4JyB9fT57ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzZWxmLnN0YXRlLnNlbGVjdGVkSG9zcGl0YWxJZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xID8gdHJ1ZSA6IGZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZWxmLnN0YXRlLkhvc3BGaWx0ZXIubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5zdGF0ZS5zZWxlY3RlZEhvc3BpdGFsSWRzLmluZGV4T2YoZGF0YS5pZCkgPT0gLTEgJiYgbGlEYXRhLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlEYXRhLnB1c2goPGxpIGtleT17a2V5fSBvbkNoYW5nZT17c2VsZi50b2dnbGVIb3NwaXRhbC5iaW5kKHNlbGYsIGRhdGEuaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc1MDAnLCBmb250U2l6ZTogJzEzcHgnIH19PntkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3NlbGYuc3RhdGUuc2VsZWN0ZWRIb3NwaXRhbElkcy5pbmRleE9mKGRhdGEuaWQpID4gLTEgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnN0YXRlLmhpZGVPdGhlckZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXRlLkhvc3BGaWx0ZXJPbkZvdWNzRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaURhdGEucHVzaCg8bGkga2V5PXtrZXl9IG9uQ2hhbmdlPXtzZWxmLnRvZ2dsZUhvc3BpdGFsLmJpbmQoc2VsZiwgZGF0YS5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzUwMCcsIGZvbnRTaXplOiAnMTNweCcgfX0+e2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2VsZi5zdGF0ZS5zZWxlY3RlZEhvc3BpdGFsSWRzLmluZGV4T2YoZGF0YS5pZCkgPiAtMSA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXRlLkhvc3BGaWx0ZXIubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuc3RhdGUuc2VsZWN0ZWRIb3NwaXRhbElkcy5sZW5ndGggPT0gMCAmJiBrZXkgPD0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlEYXRhLnB1c2goPGxpIGtleT17a2V5fSBvbkNoYW5nZT17c2VsZi50b2dnbGVIb3NwaXRhbC5iaW5kKHNlbGYsIGRhdGEuaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnNTAwJywgZm9udFNpemU6ICcxM3B4JyB9fT57ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2VsZi5zdGF0ZS5zZWxlY3RlZEhvc3BpdGFsSWRzLmluZGV4T2YoZGF0YS5pZCkgPiAtMSA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpRGF0YVxuICAgIH1cblxuICAgIFNwZWNGaWx0ZXJEYXRhKCkge1xuICAgICAgICBsZXQgbGlEYXRhID0gW11cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmIChzZWxmLnN0YXRlLnNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMubGVuZ3RoID4gMCAmJiAhc2VsZi5zdGF0ZS5oaWRlT3RoZXJGaWx0ZXJzKSB7XG4gICAgICAgICAgICBzZWxmLnN0YXRlLlNwZWNpYWxpdHlGaWx0ZXIubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5zdGF0ZS5zcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzLmluZGV4T2YoZGF0YS5pZCkgPiAtMSAmJiBsaURhdGEubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICBsaURhdGEucHVzaCg8bGkga2V5PXtrZXl9IG9uQ2hhbmdlPXtzZWxmLnRvZ2dsZVNwZWNpYWxpemF0aW9uLmJpbmQoc2VsZiwgZGF0YS5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzUwMCcsIGZvbnRTaXplOiAnMTNweCcgfX0+e2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyhzZWxmLnN0YXRlLnNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xIHx8IHNlbGYuc3RhdGUuZGVmYXVsdFNwZWNpYWxpemF0aW9uSWRzLmluZGV4T2YoZGF0YS5pZCkgPiAtMSkgPyB0cnVlIDogZmFsc2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2VsZi5zdGF0ZS5kZWZhdWx0U3BlY2lhbGl6YXRpb25JZHMuaW5kZXhPZihkYXRhLmlkKT4tMSA/IHRydWU6ZmFsc2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNlbGYuc3RhdGUuU3BlY2lhbGl0eUZpbHRlci5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0YXRlLnNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMuaW5kZXhPZihkYXRhLmlkKSA9PSAtMSAmJiBsaURhdGEubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICBsaURhdGEucHVzaCg8bGkga2V5PXtrZXl9IG9uQ2hhbmdlPXtzZWxmLnRvZ2dsZVNwZWNpYWxpemF0aW9uLmJpbmQoc2VsZiwgZGF0YS5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzUwMCcsIGZvbnRTaXplOiAnMTNweCcgfX0+e2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyhzZWxmLnN0YXRlLnNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xIHx8IHNlbGYuc3RhdGUuZGVmYXVsdFNwZWNpYWxpemF0aW9uSWRzLmluZGV4T2YoZGF0YS5pZCkgPiAtMSkgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxmLnN0YXRlLmRlZmF1bHRTcGVjaWFsaXphdGlvbklkcy5pbmRleE9mKGRhdGEuaWQpPi0xID8gdHJ1ZTpmYWxzZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnN0YXRlLmhpZGVPdGhlckZpbHRlcnMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXRlLlNwZWNpYWxpdHlGaWx0ZXJPbkZvY3VzRGF0YS5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaURhdGEucHVzaCg8bGkga2V5PXtrZXl9IG9uQ2hhbmdlPXtzZWxmLnRvZ2dsZVNwZWNpYWxpemF0aW9uLmJpbmQoc2VsZiwgZGF0YS5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogJzUwMCcsIGZvbnRTaXplOiAnMTNweCcgfX0+e2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyhzZWxmLnN0YXRlLnNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xIHx8IHNlbGYuc3RhdGUuZGVmYXVsdFNwZWNpYWxpemF0aW9uSWRzLmluZGV4T2YoZGF0YS5pZCkgPiAtMSkgPyB0cnVlIDogZmFsc2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2VsZi5zdGF0ZS5kZWZhdWx0U3BlY2lhbGl6YXRpb25JZHMuaW5kZXhPZihkYXRhLmlkKT4tMSA/IHRydWU6ZmFsc2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhdGUuU3BlY2lhbGl0eUZpbHRlci5tYXAoKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zdGF0ZS5zcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzLmxlbmd0aCA9PSAwICYmIGtleSA8PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaURhdGEucHVzaCg8bGkga2V5PXtrZXl9IG9uQ2hhbmdlPXtzZWxmLnRvZ2dsZVNwZWNpYWxpemF0aW9uLmJpbmQoc2VsZiwgZGF0YS5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICc1MDAnLCBmb250U2l6ZTogJzEzcHgnIH19PntkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyhzZWxmLnN0YXRlLnNwZWNpYWxpemF0aW9uX2ZpbHRlcl9pZHMuaW5kZXhPZihkYXRhLmlkKSA+IC0xIHx8IHNlbGYuc3RhdGUuZGVmYXVsdFNwZWNpYWxpemF0aW9uSWRzLmluZGV4T2YoZGF0YS5pZCkgPiAtMSkgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2VsZi5zdGF0ZS5kZWZhdWx0U3BlY2lhbGl6YXRpb25JZHMuaW5kZXhPZihkYXRhLmlkKT4tMSA/IHRydWU6ZmFsc2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlEYXRhXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5mcm9tVmlwKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9wQmFyUmVmKHVuZGVmaW5lZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENpdHlMaXN0TGF5b3V0KHNlYXJjaFJlc3VsdHMgPSBbXSkge1xuICAgICAgICBpZiAoc2VhcmNoUmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IHNlYXJjaFJlc3VsdHMgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IFtdIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RMb2NhdGlvbihjaXR5KSB7XG4gICAgICAgIHRoaXMuY2hpbGQuc2VsZWN0TG9jYXRpb24oKGNpdHkpLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hDaXRpZXM6IFtdIH0pXG4gICAgICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0RvY3RvclNlYXJjaFBhZ2VMb2NhdGlvblNlbGVjdGVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnZG9jdG9yLXNlYXJjaC1sb2NhdGlvbi1zZWxlY3RlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRDaXR5TGlzdCgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWFyY2hDaXRpZXMubGVuZ3RoID4gMD9cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNyY2gtaGVhZGluZ1wiPkxvY2F0aW9uIFNlYXJjaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbW9uLWxpc3RpbmctY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hDaXRpZXMubWFwKChyZXN1bHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0TG9jYXRpb24uYmluZCh0aGlzLCByZXN1bHQpfT57cmVzdWx0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+IDogJydcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5zcGVjaWFsaXphdGlvbl9maWx0ZXJfaWRzKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNwZWNpYWxpemF0aW9uKVxuICAgICAgICBsZXQgaXBkX2lkcyA9IHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICdpcGQnKS5tYXAoeCA9PiB4LmlkKVxuICAgICAgICBsZXQgY3JpdGVyaWFTdHIgPSB0aGlzLmdldENyaXRlcmlhU3RyaW5nKHRoaXMucHJvcHMuY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMpXG5cbiAgICAgICAgbGV0IGxvY2F0aW9uTmFtZSA9IFwiXCJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzc1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICBsb2NhdGlvbk5hbWUgPSB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duX3Zpc2libGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwIG92ZXJmbG93LWhpZGRlbiBwYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGlkZU90aGVyRmlsdGVycyA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzLWJ0blwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSBhbHQ9XCJjbG9zZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3AtdG9wLWhlYWRpbmcgZC1mbGV4IGFsaWduLWZsZXgtc3AtYnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhpZGVPdGhlckZpbHRlcnMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcC1hcndcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlRXh0cmFGaWx0ZXIuYmluZCh0aGlzKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9iYWNrLWljb24ucG5nXCJ9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U29ydC9GaWx0ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcC1kb25lXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZUV4dHJhRmlsdGVyLmJpbmQodGhpcyl9PkRvbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3Bhbj5Tb3J0L0ZpbHRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVsdHktc2VsZWN0LWZsdHItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNvcnRpbmctbWFpbi1jb250YWluZXIgJHt0aGlzLnN0YXRlLmhpZGVPdGhlckZpbHRlcnMgPyAnZC1ub25lJyA6ICcnfWB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtbGZ0LWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNvcnQtaGVhZGluZ3NcIj5Tb3J0IGJ5PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LXNsaWRlci1zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc29ydC1jYXJkcy1saXN0ICR7dGhpcy5zdGF0ZS5zb3J0X29uID09ICcnID8gJ2NoaXRBY3RpdmUnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NvcnRfb24nLCAnJywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1sc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc29ydF9vbiA9PSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtcmVsZXZlbmNlLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmV2ZWwuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVsZXZhbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc19sb2dpbl91c2VyX2luc3VyZWQgJiYgdGhpcy5wcm9wcy5pbnN1cmFuY2Vfc3RhdHVzID09IDEgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPXtgc29ydC1jYXJkcy1saXN0ICR7dGhpcy5zdGF0ZS5zb3J0X29uID09ICdmZWVzJyAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgPT0gJ2FzYycgPyAnY2hpdEFjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnc29ydF9vbicsICdwcmljZV9hc2MnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtbHN0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0X29uID09ICdmZWVzJyAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgPT0gJ2FzYycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtcHJpY2Vzb3J0LnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcHJpY2Vzb3J0LnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpY2UgTG93IHRvIEhpZ2g8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc19sb2dpbl91c2VyX2luc3VyZWQgJiYgdGhpcy5wcm9wcy5pbnN1cmFuY2Vfc3RhdHVzID09IDEgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPXtgc29ydC1jYXJkcy1saXN0ICR7dGhpcy5zdGF0ZS5zb3J0X29uID09ICdmZWVzJyAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgPT0gJ2Rlc2MnID8gJ2NoaXRBY3RpdmUnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NvcnRfb24nLCAncHJpY2VfZGVzYycsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1sc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNvcnRfb24gPT0gJ2ZlZXMnICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlciA9PSAnZGVzYycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtcHJpY2V1cC5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE4IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3ByaWNldXAuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpY2UgSGlnaCB0byBMb3c8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNvcnQtY2FyZHMtbGlzdCAke3RoaXMuc3RhdGUuc29ydF9vbiA9PSAnZGlzdGFuY2UnID8gJ2NoaXRBY3RpdmUnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NvcnRfb24nLCAnZGlzdGFuY2UnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3J0LWxzdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0X29uID09ICdkaXN0YW5jZScgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3J2LWxvY2F0aW9ucy5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9sb2NhdGlvbnMuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGlzdGFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc29ydC1jYXJkcy1saXN0ICR7dGhpcy5zdGF0ZS5zb3J0X29uID09ICdleHBlcmllbmNlJyA/ICdjaGl0QWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdzb3J0X29uJywgJ2V4cGVyaWVuY2UnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3J0LWxzdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0X29uID09ICdleHBlcmllbmNlJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtZXhwci5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE4IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9leHByLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4cGVyaWVuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0aW5nLWJ0bnMtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic29ydC1oZWFkaW5nc1wiPlJhdGluZ3M8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRidG5jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHNvcnRCdG5zICR7dGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyA9PSAnMycgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdhdmdfcmF0aW5ncycsICczJywgZmFsc2UpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyA9PSAnMycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtYnRuLXN0YXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbWcgY2xhc3NOYW1lPVwic3J0LXN0YXItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc2VsZWN0ZWQtc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMy4wICs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09ICc0JyA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2F2Z19yYXRpbmdzJywgJzQnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyA9PSAnNCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtYnRuLXN0YXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbWcgY2xhc3NOYW1lPVwic3J0LXN0YXItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc2VsZWN0ZWQtc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNC4wICs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09ICc0LjUnID8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnYXZnX3JhdGluZ3MnLCAnNC41JywgZmFsc2UpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyA9PSAnNC41JyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNydC1zdGFyLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1idG4tc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zZWxlY3RlZC1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LjUgKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRpbmctYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzb3J0LWhlYWRpbmdzXCI+QXZhaWxhYmlsaXR5PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0YnRuY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuYXZhaWxhYmlsaXR5ICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5Lmxlbmd0aCAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5pbmRleE9mKCcxJykgPiAtMSA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2F2YWlsYWJpbGl0eScsICcxJywgdHJ1ZSl9PlRvZGF5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHNvcnRCdG5zICR7dGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkgJiYgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkubGVuZ3RoICYmIHRoaXMuc3RhdGUuYXZhaWxhYmlsaXR5LmluZGV4T2YoJzInKSA+IC0xID8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnYXZhaWxhYmlsaXR5JywgJzInLCB0cnVlKX0+VG9tb3Jyb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eSAmJiB0aGlzLnN0YXRlLmF2YWlsYWJpbGl0eS5sZW5ndGggJiYgdGhpcy5zdGF0ZS5hdmFpbGFiaWxpdHkuaW5kZXhPZignMycpID4gLTEgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdhdmFpbGFiaWxpdHknLCAnMycsIHRydWUpfT5OZXh0IDMgRGF5czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRpbmctYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzb3J0LWhlYWRpbmdzXCI+R2VuZGVyPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0YnRuY2FyZCBqdXN0eWZ5LXR3b0J0bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmdlbmRlciA9PSAnbScgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdnZW5kZXInLCAnbScsIGZhbHNlKX0+TWFsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuZ2VuZGVyID09ICdmJyA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2dlbmRlcicsICdmJywgZmFsc2UpfT5GZW1hbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJzb3J0aW5nLWJ0bnMtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic29ydC1oZWFkaW5nc1wiPkhvc3BpdGFsIFR5cGU8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRidG5jYXJkIGp1c3R5ZnktdHdvQnRuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuc2l0c19hdF9jbGluaWMgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdzaXRzX2F0X2NsaW5pYycsICF0aGlzLnN0YXRlLnNpdHNfYXRfY2xpbmljLCBmYWxzZSl9PkNsaW5pYzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuc2l0c19hdF9ob3NwaXRhbCA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NpdHNfYXRfaG9zcGl0YWwnLCAhdGhpcy5zdGF0ZS5zaXRzX2F0X2hvc3BpdGFsLCBmYWxzZSl9Pkhvc3BpdGFsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogbmV3IGZpbHRlciBjaGVja2JveCBkZXNpZ24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5Ib3NwRmlsdGVyICYmIHRoaXMuc3RhdGUuSG9zcEZpbHRlci5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNoay1maWx0ZXItY29udGFpbmVyICR7dGhpcy5zdGF0ZS5oaWRlSG9zcEZpbHRlciA/ICdkLW5vbmUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtaHNwdGwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNydC1jbGktaGVhZGluZ3NcIj5Ib3NwaXRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLkhvc3BGaWx0ZXIubGVuZ3RoID4gNSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZUZvY3VzLmJpbmQodGhpcywgdHJ1ZSl9Pnt0aGlzLnN0YXRlLmhpZGVPdGhlckZpbHRlcnMgPyAnJyA6IGArJHt0aGlzLnN0YXRlLkhvc3BGaWx0ZXIubGVuZ3RoIC0gNX0gbW9yZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtc2xjdC1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5Ib3NwRmlsdGVyLmxlbmd0aCA+IDUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtaW5wLWNzbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEhvc3BpdGFsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlSG9zcC5iaW5kKHRoaXMpfSBuYW1lPVwiSG5hbWVcIiBvbkZvY3VzPXt0aGlzLmhhbmRsZUNoYW5nZUZvY3VzLmJpbmQodGhpcywgdHJ1ZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlclNlYXJjaFN0cmluZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyohdGhpcy5zdGF0ZS5oaWRlT3RoZXJGaWx0ZXJzPycnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlRXh0cmFGaWx0ZXIuYmluZCh0aGlzKX0+RG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hrbGlzdC1zb3J0LWZsaXRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuSG9zcEZpbHRlckRhdGEoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuU3BlY2lhbGl0eUZpbHRlciAmJiB0aGlzLnN0YXRlLlNwZWNpYWxpdHlGaWx0ZXIubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNoay1maWx0ZXItY29udGFpbmVyICR7dGhpcy5zdGF0ZS5oaWRlU3BlY0ZpbHRlciA/ICdkLW5vbmUnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1oc3B0bC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzcnQtY2xpLWhlYWRpbmdzXCI+U3BlY2lhbGl6YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5TcGVjaWFsaXR5RmlsdGVyLmxlbmd0aCA+IDUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZUZvY3VzLmJpbmQodGhpcywgZmFsc2UpfT57dGhpcy5zdGF0ZS5oaWRlT3RoZXJGaWx0ZXJzID8gJycgOiBgKyR7dGhpcy5zdGF0ZS5TcGVjaWFsaXR5RmlsdGVyLmxlbmd0aCAtIDV9IG1vcmVgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtc2xjdC1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLlNwZWNpYWxpdHlGaWx0ZXIubGVuZ3RoID4gNSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3J0LWlucC1jc2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFNwZWNpYWxpemF0aW9uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlU3BlYy5iaW5kKHRoaXMpfSBuYW1lPVwiU25hbWVcIiBvbkZvY3VzPXt0aGlzLmhhbmRsZUNoYW5nZUZvY3VzLmJpbmQodGhpcywgZmFsc2UpfSB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJTZWFyY2hTdHJpbmd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyohdGhpcy5zdGF0ZS5oaWRlT3RoZXJGaWx0ZXJzPycnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlRXh0cmFGaWx0ZXIuYmluZCh0aGlzKX0+RG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hrbGlzdC1zb3J0LWZsaXRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5TcGVjRmlsdGVyRGF0YSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oaWRlT3RoZXJGaWx0ZXJzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJwb3AtZm9vdC1idG5zLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtc2hwbmctY2FydC1idG5cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcywgdHJ1ZSl9PlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4tcHJpbWFyeSBib29rLWJ0bi1tcmduLWFkanVzdFwiIG9uQ2xpY2s9e3RoaXMuYXBwbHlGaWx0ZXJzLmJpbmQodGhpcyl9PkFwcGx5IEZpbHRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMucHJvcHMuZnJvbVZpcD8ndmlwTmV0VG9wJzonJ30gZmlsdGVyLXJvdyBzdGlja3ktaGVhZGVyIG1ibC1zdGljayB2aXAtbmV0LWJsb2NrYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYnJlYWRjcnVtYiAmJiB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXJuZy10b3AtMTIgZC1ub25lIGQtbWQtYmxvY2sgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXJiLTEwIGJyZWFkY3J1bWItbGlzdCBicmVhZGNydW1iLWxpc3QtdWxcIiBzdHlsZT17eyAnd29yZEJyZWFrJzogJ2JyZWFrV29yZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJyZWFkY3J1bWIgJiYgdGhpcy5wcm9wcy5icmVhZGNydW1iLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJyZWFkY3J1bWIubWFwKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT0gdGhpcy5wcm9wcy5icmVhZGNydW1iLmxlbmd0aCAtIDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkYXRhLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxhIGhyZWY9e2RhdGEudXJsfSB0aXRsZT17ZGF0YS5saW5rX3RpdGxlIHx8IGRhdGEudGl0bGV9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goKGtleSA9PSAwIHx8IGtleSA9PSB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoIC0gMSkgPyBkYXRhLnVybCA6IGAvJHtkYXRhLnVybH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PntrZXkgPT0gMCB8fCBrZXkgPT0gdGhpcy5wcm9wcy5icmVhZGNydW1iLmxlbmd0aCAtIDEgPyA8c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZSBicmVhZGNydW1iLWNvbG9yZWQtdGl0bGVcIj57ZGF0YS50aXRsZX08L3NwYW4+IDogPGgyIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZSBkLWlubGluZS1ibGNrXCI+e2RhdGEudGl0bGV9PC9oMj59PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSAhPSB0aGlzLnByb3BzLmJyZWFkY3J1bWIubGVuZ3RoIC0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZyb21WaXA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkVsZW1lbnRzIHsuLi50aGlzLnByb3BzfSBvblJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gZ2V0Q2l0eUxpc3RMYXlvdXQ9e3RoaXMuZ2V0Q2l0eUxpc3RMYXlvdXQuYmluZCh0aGlzKX0gcmVzdWx0VHlwZT0nc2VhcmNoJyBsb2NhdGlvbk5hbWU9e2xvY2F0aW9uTmFtZX0gZnJvbVZpcD17dGhpcy5wcm9wcy5mcm9tVmlwfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRDaXR5TGlzdCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHNlY3Rpb24gY2xhc3NOYW1lPVwic2Nyb2xsLXNoYWRvdy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWZpbHRlci10YWItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtZmlsdGVyLXRhYnMtc2VsZWN0IGxvY2F0aW9uVGVzdEZpbHRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibmV3U3RpY2t5ZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5wcm9wcy5jb3VudH0gJHtpcGRfaWRzLmxlbmd0aCA/ICdTcGVjaWFsaXN0cycgOiAnUmVzdWx0cyd9IGZvciAke3RoaXMucHJvcHMuaG9zcGl0YWxEYXRhICYmIHRoaXMucHJvcHMuaG9zcGl0YWxEYXRhLm5hbWUgPyBgJHtjcml0ZXJpYVN0ciB8fCAnRG9jdG9yJ30gIGluICR7dGhpcy5wcm9wcy5ob3NwaXRhbERhdGEubmFtZX1gIDogJyd9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaG9zcGl0YWxEYXRhICYmIHRoaXMucHJvcHMuaG9zcGl0YWxEYXRhLm5hbWUgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxoMSBjbGFzc05hbWU9XCJzb3J0LWhlYWQtZm9udC1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5jb21tb25TZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCA+IDMgPyAnc3JjaC10cnVuY2F0ZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7Y3JpdGVyaWFTdHIgfHwgJ0RvY3Rvcid9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuZ29Ub0xvY2F0aW9uLmJpbmQodGhpcyl9ID57YCBpbiAke2xvY2F0aW9uTmFtZX1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5ob3NwaXRhbERhdGEgJiYgdGhpcy5wcm9wcy5ob3NwaXRhbERhdGEubmFtZSkgfHwgIWxvY2F0aW9uTmFtZSA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4gb25DbGljaz17dGhpcy5nb1RvTG9jYXRpb24uYmluZCh0aGlzKX0gPjxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxMXB4JywgaGVpZ2h0OiAnMTVweCcsIG1hcmdpbkxlZnQ6ICc3cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2VkaXQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmxpbmUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXt0aGlzLnNob3J0ZW5VcmwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdXJsLXNob3J0LnN2Z1wifSBzdHlsZT17eyB3aWR0aDogODAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvcnRVUkwgPyA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlTGlua3BvcHVwT3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBcIlwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVMaW5rcG9wdXBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLnNob3J0VVJMfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dGhpcy5zdGF0ZS5zaG9ydFVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlNob3J0ZW5lZCBVUkwgQ29waWVkLlwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IFwiXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaHJlbGlua0J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkNvcHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWZpbHRlci10YWJzLXNlbGVjdCBuZXdTb3J0RmlsdGVyYmFyXCIgb25DbGljaz17dGhpcy5zb3J0RmlsdGVyQ2xpY2tlZC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTRweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZmlsdGVyc29ydC5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRGF0YUZpbHRlcmVkKCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaWx0ZXJOb3RpZmljYXRpb25cIj57dGhpcy5pc0RhdGFGaWx0ZXJlZCgpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U29ydC9GaWx0ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwicG9wLWZvb3QtYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiAhdGhpcy5wcm9wcy5mcm9tVmlwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25FbGVtZW50cyB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IHJlc3VsdFR5cGU9J2xpc3QnIGlzVG9wYmFyPXt0cnVlfSBoaWRlTG9jYXRpb25Qb3B1cD17KCkgPT4gdGhpcy5oaWRlTG9jYXRpb25Qb3B1cCgpfSBsb2NhdGlvbk5hbWU9e2xvY2F0aW9uTmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnN0YXRlLm92ZXJsYXlWaXNpYmxlICYmICF0aGlzLnByb3BzLmNsaW5pY19jYXJkICAmJiAhdGhpcy5wcm9wcy5mcm9tVmlwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uUG9wdXAtb3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3ZlcmxheUNsaWNrKCl9ID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnByb3BzLmNsaW5pY19jYXJkICYmIHRoaXMuc3RhdGUuc2hvd1BvcHVwQ29udGFpbmVyICAmJiAhdGhpcy5wcm9wcy5mcm9tVmlwP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwQ29udGFpbmVyLW92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNUT1JBR0UuY2hlY2tBdXRoKCkgJiYgdGhpcy5wcm9wcy5pc19sb2dpbl91c2VyX2luc3VyZWQgJiYgdGhpcy5wcm9wcy5pbnN1cmFuY2Vfc3RhdHVzID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cInRnLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRnbCB0Z2wtaW9zXCIgaWQ9XCJsYWJfaW5zdXJhbmNlXCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5pc19pbnN1cmVkfSBvbkNoYW5nZT17dGhpcy50b2dnbGVJbnN1cmVkLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGdsLWJ0blwiIGh0bWxGb3I9XCJsYWJfaW5zdXJhbmNlXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvdmVyZWQgdW5kZXIgT1BEIGluc3VyYW5jZSB8IDxhIGhyZWY9XCJodHRwczovL3FhY2RuLmRvY3ByaW1lLmNvbS9tZWRpYS9pbnN1cmVyL2RvY3VtZW50cy9Hcm91cF9PdXQtUGF0aWVudF9DSVNfSk5MVkpqdS5QREZcIiB0YXJnZXQ9XCJfYmxhbmtcIj48c3Bhbj4gS25vdyBNb3JlPC9zcGFuPjwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJhbmdlIGZyb20gJ3JjLXNsaWRlci9saWIvUmFuZ2UnO1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBMb2NhdGlvblBvcHVwIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvblBvcHVwJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBJcGRMZWFkRm9ybSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2lwZC9pcGRMZWFkRm9ybS5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJylcblxuY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC8vIGFuY2hvckVsOiBudWxsLFxuICAgICAgICAgICAgLy8gb3BlbkZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgICAvLyBwcmljZVJhbmdlOiBbMCwgMzAwMF0sXG4gICAgICAgICAgICAvLyBkaXN0YW5jZVJhbmdlOiBbMCwgMTVdLFxuICAgICAgICAgICAgLy8gc29ydF9vbjogbnVsbCxcbiAgICAgICAgICAgIC8vIHNpdHNfYXRfY2xpbmljOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIHNpdHNfYXRfaG9zcGl0YWw6IGZhbHNlLFxuICAgICAgICAgICAgLy8gaXNfZmVtYWxlOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGlzX2F2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzaG9ydFVSTDogXCJcIixcbiAgICAgICAgICAgIC8vIGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgb3ZlcmxheVZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BvcHVwQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICAgICAgc2hvd0lwZExlYWRGb3JtOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5wcm9wcy5maWx0ZXJDcml0ZXJpYSB9KVxuICAgICAgICBpZiAocHJvcHMubG9jYXRpb25UeXBlICYmICFwcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgocHJvcHMuc2VvRGF0YSAmJiBwcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB8fCBwcm9wcy5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUsIHNob3dJcGRMZWFkRm9ybTogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWEgfSlcbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICAgICAgaWYgKCh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB8fCB0aGlzLnByb3BzLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlLCBzaG93SXBkTGVhZEZvcm06IHRydWUgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZSAmJiB0aGlzLnByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUsIHNob3dJcGRMZWFkRm9ybTogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0KGUpIHtcbiAgICAgICAgbGV0IGV2TmFtZSA9IGUudGFyZ2V0Lm5hbWVcbiAgICAgICAgbGV0IGNoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgW2V2TmFtZV06IGNoZWNrZWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gYXBwbHlGaWx0ZXJzKCkge1xuICAgIC8vICAgICBsZXQgZmlsdGVyU3RhdGUgPSB7XG4gICAgLy8gICAgICAgICBwcmljZVJhbmdlOiB0aGlzLnN0YXRlLnByaWNlUmFuZ2UsXG4gICAgLy8gICAgICAgICBkaXN0YW5jZVJhbmdlOiB0aGlzLnN0YXRlLmRpc3RhbmNlUmFuZ2UsXG4gICAgLy8gICAgICAgICBzaXRzX2F0OiB0aGlzLnN0YXRlLnNpdHNfYXQsXG4gICAgLy8gICAgICAgICBzb3J0X29uOiB0aGlzLnN0YXRlLnNvcnRfb24sXG4gICAgLy8gICAgICAgICBpc19mZW1hbGU6IHRoaXMuc3RhdGUuaXNfZmVtYWxlLFxuICAgIC8vICAgICAgICAgaXNfYXZhaWxhYmxlOiB0aGlzLnN0YXRlLmlzX2F2YWlsYWJsZSxcbiAgICAvLyAgICAgICAgIHNpdHNfYXRfY2xpbmljOiB0aGlzLnN0YXRlLnNpdHNfYXRfY2xpbmljLFxuICAgIC8vICAgICAgICAgc2l0c19hdF9ob3NwaXRhbDogdGhpcy5zdGF0ZS5zaXRzX2F0X2hvc3BpdGFsXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgbGV0IGRhdGEgPSB7XG4gICAgLy8gICAgICAgICAnQ2F0ZWdvcnknOiAnRmlsdGVyQ2xpY2snLCAnQWN0aW9uJzogJ0NsaWNrZWQgb24gRmlsdGVyJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3BkLWZpbHRlci1jbGlja2VkJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ2F2YWlsYWJsZV90b2RheSc6IHRoaXMuc3RhdGUuaXNfYXZhaWxhYmxlLCAnc2l0c19hdF9jbGluaWMnOiB0aGlzLnN0YXRlLnNpdHNfYXRfY2xpbmljLCAnc2l0c19hdF9ob3NwaXRhbCc6IHRoaXMuc3RhdGUuc2l0c19hdF9ob3NwaXRhbCwgJ2xvd1ByaWNlUmFuZ2UnOiB0aGlzLnN0YXRlLnByaWNlUmFuZ2VbMF0sICdoaWdoUHJpY2VSYW5nZSc6IHRoaXMuc3RhdGUucHJpY2VSYW5nZVsxXSwgJ2xvd0Rpc3RhbmNlUmFuZ2UnOiB0aGlzLnN0YXRlLmRpc3RhbmNlUmFuZ2VbMF0sICdoaWdoRGlzdGFuY2VSYW5nZSc6IHRoaXMuc3RhdGUuZGlzdGFuY2VSYW5nZVsxXSwgJ2lzX2ZlbWFsZSc6IHRoaXMuc3RhdGUuaXNfZmVtYWxlLCAnc29ydF9vbic6IHRoaXMuc3RhdGUuc29ydF9vbiA9PSBcIlwiID8gJ3JlbGV2YW5jZScgOiB0aGlzLnN0YXRlLnNvcnRfb25cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIC8vICAgICB0aGlzLnByb3BzLmFwcGx5RmlsdGVycyhmaWx0ZXJTdGF0ZSlcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5GaWx0ZXI6IGZhbHNlIH0pXG4gICAgLy8gfVxuXG4gICAgLy8gaGFuZGxlT3BlbihldmVudCkge1xuICAgIC8vICAgICAvLyB0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQgfSlcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBkcm9wZG93bl92aXNpYmxlOiB0cnVlXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIGhpZGVTb3J0RGl2KCkge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIGhhbmRsZUNsb3NlKHR5cGUpIHtcbiAgICAvLyAgICAgbGV0IGRhdGEgPSB7XG4gICAgLy8gICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ09wZFNvcnRGaWx0ZXJBcHBsaWVkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnb3BkLXNvcnQtZmlsdGVyLWFwcGxpZWQnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnc29ydF9vbic6IHR5cGUgPT09IFwiXCIgPyAncmVsZXZhbmNlJyA6IHR5cGVcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IG51bGwsIHNvcnRfb246IHR5cGUsIGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlIH0sICgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmICh0eXBlIHx8IHR5cGUgPT09IFwiXCIpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVycygpXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG4gICAgLy8gdG9nZ2xlRmlsdGVyKCkge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIG9wZW5GaWx0ZXI6ICF0aGlzLnN0YXRlLm9wZW5GaWx0ZXJcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kbGVSYW5nZSh0eXBlLCByYW5nZSkge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIFt0eXBlXTogcmFuZ2VcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICBnZXRDcml0ZXJpYVN0cmluZyhzZWxlY3RlZENyaXRlcmlhcykge1xuICAgICAgICBpZiAoc2VsZWN0ZWRDcml0ZXJpYXMgJiYgc2VsZWN0ZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRQcm9jZWR1cmVDYXRlZ29yeSA9IHNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAncHJvY2VkdXJlc19jYXRlZ29yeScpXG4gICAgICAgICAgICBsZXQgcHJvY2VkdXJlcyA9IHNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAncHJvY2VkdXJlcycpXG5cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENyaXRlcmlhcy5yZWR1Y2UoKGZpbmFsLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbCArPSAnLCAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsICs9IGAke2N1cnIubmFtZX1gXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsXG4gICAgICAgICAgICB9LCBcIlwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaXNGaWx0ZXJBcHBsaWVkKCkge1xuICAgIC8vICAgICBjb25zdCBkZWYgPSB7XG4gICAgLy8gICAgICAgICBwcmljZVJhbmdlOiBbMCwgMzAwMF0sXG4gICAgLy8gICAgICAgICBkaXN0YW5jZVJhbmdlOiBbMCwgMTVdLFxuICAgIC8vICAgICAgICAgc2l0c19hdF9jbGluaWM6IGZhbHNlLFxuICAgIC8vICAgICAgICAgc2l0c19hdF9ob3NwaXRhbDogZmFsc2UsXG4gICAgLy8gICAgICAgICBpc19mZW1hbGU6IGZhbHNlLFxuICAgIC8vICAgICAgICAgaXNfYXZhaWxhYmxlOiBmYWxzZVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBmb3IgKGxldCBmaWx0ZXIgaW4gZGVmKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGZpbHRlciA9PSAncHJpY2VSYW5nZScgfHwgZmlsdGVyID09ICdkaXN0YW5jZVJhbmdlJykge1xuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoZGVmW2ZpbHRlcl1bMF0gIT0gdGhpcy5zdGF0ZVtmaWx0ZXJdWzBdIHx8IGRlZltmaWx0ZXJdWzFdICE9IHRoaXMuc3RhdGVbZmlsdGVyXVsxXSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChkZWZbZmlsdGVyXSAhPSB0aGlzLnN0YXRlW2ZpbHRlcl0pIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBzaG9ydGVuVXJsKCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoJz8nKSkge1xuICAgICAgICAgICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgJyZmb3JjZV9sb2NhdGlvbj10cnVlJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiArICc/Zm9yY2VfbG9jYXRpb249dHJ1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMudXJsU2hvcnRuZXIodXJsLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBkYXRhLnRpbnlfdXJsIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG92ZXJsYXlDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG92ZXJsYXlWaXNpYmxlOiBmYWxzZSwgc2VhcmNoQ2l0aWVzOiBbXSwgc2hvd0lwZExlYWRGb3JtOiB0cnVlIH0pO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uX2VsZW1lbnQnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uX2VsZW1lbnQnKS5zdHlsZS56SW5kZXggPSAnMCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVMb2NhdGlvblBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlLCBzaG93SXBkTGVhZEZvcm06IHRydWUgfSk7XG4gICAgfVxuXG4gICAgcG9wdXBDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXBDb250YWluZXI6IGZhbHNlLCBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UsIHNob3dJcGRMZWFkRm9ybTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBnb1RvTG9jYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXVxuICAgICAgICB9KVxuICAgICAgICBsZXQgcmVkaXJlY3RfdG8gPSBcIlwiXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3NwdGNpdCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnc3B0bGl0Y2l0JykpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvb3BkL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxvY2F0aW9uX3VybCA9ICcvbG9jYXRpb25zZWFyY2gnXG4gICAgICAgIGlmIChyZWRpcmVjdF90bykge1xuICAgICAgICAgICAgbG9jYXRpb25fdXJsICs9IGA/cmVkaXJlY3RfdG89JHtyZWRpcmVjdF90b31gXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZXROZXh0U2VhcmNoQ3JpdGVyaWEoKVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDaGFuZ2VMb2NhdGlvbkRvY3RvclJlc3VsdHNQb3BVcCcsICdBY3Rpb24nOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2hhbmdlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uX3VybClcbiAgICB9XG5cbiAgICBzdWJtaXRMZWFkRm9ybUdlbmVyYXRpb24oY2xvc2U9ZmFsc2UpIHtcbiAgICAgICAgaWYoY2xvc2UpIHtcbiAgICAgICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnRG9jdG9yU2VhcmNoSXBkRm9ybUNsb3NlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2RvY3Rvci1zZWFyY2gtaXBkLWZvcm0tY2xvc2VkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bURhdGEgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93SXBkTGVhZEZvcm06IGZhbHNlfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGNyaXRlcmlhU3RyID0gdGhpcy5nZXRDcml0ZXJpYVN0cmluZyh0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKVxuICAgICAgICBsZXQgbG9jYXRpb25OYW1lID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcykge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBzcGVjaWFsaXphdGlvbnMgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnc3BlY2lhbGl0eScpXG5cbiAgICAgICAgbGV0IGlwZF9pZHMgPSB0aGlzLnByb3BzLmNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLmZpbHRlcih4ID0+IHgudHlwZSA9PSAnaXBkJykubWFwKHggPT4geC5pZClcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIGlkPVwiZmlsdGVyLXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1wZG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLWZpbHRlciBkLW5vbmUgZC1tZC1ibG9jayBhbGlnblNoYXJlQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3RoaXMuc2hvcnRlblVybC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdXJsLXNob3J0LnN2Z1wifSBzdHlsZT17eyB3aWR0aDogODAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3J0VVJMID8gPGRpdiBjbGFzc05hbWU9XCJzaGFyZUxpbmtwb3B1cE92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IFwiXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlTGlua3BvcHVwXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5zaG9ydFVSTH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXt0aGlzLnN0YXRlLnNob3J0VVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTaG9ydGVuZWQgVVJMIENvcGllZC5cIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogXCJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hyZWxpbmtCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q29weTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY291bnR9IHJlc3VsdHMgZm91bmQgZm9yIHtpcGRfaWRzLmxlbmd0aCA/ICdCZXN0JyA6ICcnfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDBcIj4ge2NyaXRlcmlhU3RyIHx8IFwiRG9jdG9yc1wifSB7aXBkX2lkcy5sZW5ndGggJiYgY3JpdGVyaWFTdHI/ICdEb2N0b3JzJyA6ICcnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LXNwYW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiBmYWxzZSA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2NhdGlvbk5hbWUgPyA8c3BhbiBjbGFzc05hbWU9XCJsb2NhdGlvbi1lZGl0XCI+e2AgaW4gJHtsb2NhdGlvbk5hbWV9YH08L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAxNSwgaGVpZ2h0OiAxNSwgbWFyZ2luTGVmdDogNywgY3Vyc29yOiAncG9pbnRlcicgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZWRpdC5zdmdcIn0gb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1RvTG9jYXRpb24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xpbmljX2NhcmQgJiYgdGhpcy5zdGF0ZS5zaG93UG9wdXBDb250YWluZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25Qb3B1cCB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IHJlc3VsdFR5cGU9J2xpc3QnIGlzVG9wYmFyPXt0cnVlfSBoaWRlTG9jYXRpb25Qb3B1cD17KCkgPT4gdGhpcy5oaWRlTG9jYXRpb25Qb3B1cCgpfSBsb2NhdGlvbk5hbWU9e2xvY2F0aW9uTmFtZX0gY3JpdGVyaWFTdHJpbmc9e2NyaXRlcmlhU3RyfSBwb3B1cENvbnRhaW5lcj17KCkgPT4gdGhpcy5wb3B1cENvbnRhaW5lcigpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxMb2NhdGlvbkVsZW1lbnRzIHsuLi50aGlzLnByb3BzfSBvblJlZj17cmVmID0+ICh0aGlzLmNoaWxkID0gcmVmKX0gcmVzdWx0VHlwZT0nbGlzdCcgaXNUb3BiYXI9e3RydWV9IGhpZGVMb2NhdGlvblBvcHVwPXsoKSA9PiB0aGlzLmhpZGVMb2NhdGlvblBvcHVwKCl9IGxvY2F0aW9uTmFtZT17bG9jYXRpb25OYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgJiYgdGhpcy5zdGF0ZS5vdmVybGF5VmlzaWJsZSAmJiAhdGhpcy5wcm9wcy5jbGluaWNfY2FyZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvblBvcHVwLW92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm92ZXJsYXlDbGljaygpfSA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnByb3BzLmNsaW5pY19jYXJkICYmIHRoaXMuc3RhdGUuc2hvd1BvcHVwQ29udGFpbmVyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwQ29udGFpbmVyLW92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsaXphdGlvbnMgJiYgc3BlY2lhbGl6YXRpb25zLmxlbmd0aCAmJiBwYXJzZWQuaG9zcGl0YWxfaWQgJiYgcGFyc2VkLnNob3dQb3B1cCAmJiB0aGlzLnN0YXRlLnNob3dJcGRMZWFkRm9ybSAmJiB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdy5PTl9MQU5ESU5HX1BBR0U/XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXBkTGVhZEZvcm0gc3VibWl0TGVhZEZvcm1HZW5lcmF0aW9uPXt0aGlzLnN1Ym1pdExlYWRGb3JtR2VuZXJhdGlvbi5iaW5kKHRoaXMpfSB7Li4udGhpcy5wcm9wc30gaG9zcGl0YWxfaWQ9e3BhcnNlZC5ob3NwaXRhbF9pZH0gZm9ybVNvdXJjZT0nZG9jdG9yUmVzdWx0UGFnZScvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZWxlY3RMb2NhdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgTG9jYXRpb25Qb3B1cFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL2xvY2F0aW9uUG9wdXAvaW5kZXguanMnXG5cbmNsYXNzIExvY2F0aW9uUG9wdXBDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExvY2F0aW9uUG9wdXBWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBsb2NhdGlvblR5cGVcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgbG9jYXRpb25UeXBlXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RMb2NhdGlvbjogKGxvY2F0aW9uLCB0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RMb2NhdGlvbihsb2NhdGlvbiwgdHlwZSkpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvY2F0aW9uUG9wdXBDb250YWluZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHRvZ2dsZTQwNCwgZ2V0RG9jdG9yTnVtYmVyLCBtZXJnZU9QRFN0YXRlLCB1cmxTaG9ydG5lciwgZ2V0RG9jdG9ycywgZ2V0T1BEQ3JpdGVyaWFSZXN1bHRzLCB0b2dnbGVPUERDcml0ZXJpYSwgZ2V0Rm9vdGVyRGF0YSwgc2F2ZUNvbW1vblByb2NlZHVyZXMsIHJlc2V0UHJvY2VkdXJlVVJsLCBzZXRTZWFyY2hJZCwgZ2V0U2VhcmNoSWRSZXN1bHRzLCBzZWxlY3RTZWFyY2hUeXBlLCBzZXROZXh0U2VhcmNoQ3JpdGVyaWEsIGdldE9mZmVyTGlzdCwgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIHNlbGVjdE9wZFRpbWVTTG90LCBzYXZlUHJvZmlsZVByb2NlZHVyZXMsIHJlc2V0UGtnQ29tcGFyZSwgc2VsZWN0TG9jYXRpb24sIGNsb25lQ29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsbG9hZE9QREluc3VyYW5jZSwgZ2V0RG9jdG9ySG9zcGl0YWxGaWx0ZXJzLCBnZXREb2N0b3JIb3NwaXRhbFNwZWNpYWxpdHksIGdldFNwb25zb3JlZExpc3QsIGdldE5lYXJieUhvc3BpdGFscywgdG9nZ2xlSVBEQ3JpdGVyaWEsIGdldFRvcEhvc3BpdGFscywgbWVyZ2VJcGRDcml0ZXJpYSwgY2xlYXJWaXBTZWxlY3RlZFBsYW4sIE5vbklwZEJvb2tpbmdMZWFkLCBzYXZlTGVhZFBobk51bWJlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgeyBvcGRTZWFyY2hTdGF0ZUJ1aWxkZXIsIGxhYlNlYXJjaFN0YXRlQnVpbGRlciwgbWVyZ2VTZWxlY3RlZENyaXRlcmlhcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXJsdG9TdGF0ZSdcbmltcG9ydCBTZWFyY2hSZXN1bHRzVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL29wZC9zZWFyY2hSZXN1bHRzL2luZGV4LmpzJ1xuaW1wb3J0IE5vdEZvdW5kVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvbm90Rm91bmQnXG5cbmNsYXNzIFNlYXJjaFJlc3VsdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvdzQwNDogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93NDA0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzQwNDogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGU0MDQoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgLyogQVBJIGNhbGwgaXMgb24gRGVza3RvcCBQcm9maWxlIEhlYWRlclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2FkT1BESW5zdXJhbmNlKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbilcbiAgICAgICAgKi9cbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZERhdGEoc3RvcmUsIG1hdGNoLCBxdWVyeVBhcmFtcyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbl9tcyA9IG51bGxcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gudXJsLmluY2x1ZGVzKCdsb2NhdGlvbj0nKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbl9tcyA9IG1hdGNoLnVybC5zcGxpdCgnbG9jYXRpb249JylbMV1cbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25fbXMgPSBwYXJzZUludChsb2NhdGlvbl9tcylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvcGRTZWFyY2hTdGF0ZUJ1aWxkZXIobnVsbCwgcXVlcnlQYXJhbXMsIHRydWUsIGxvY2F0aW9uX21zKS50aGVuKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChtZXJnZU9QRFN0YXRlKHN0YXRlKSlcbiAgICAgICAgICAgICAgICAgICAgaWYocXVlcnlQYXJhbXMgJiYgKChxdWVyeVBhcmFtcy5mcm9tVmlwICYmIHF1ZXJ5UGFyYW1zLmZyb21WaXA9PVwidHJ1ZVwiKSB8fCAocXVlcnlQYXJhbXMuZnJvbUdvbGRWaXAgJiYgcXVlcnlQYXJhbXMuZnJvbUdvbGRWaXA9PVwidHJ1ZVwiKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHRyYURhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbjogc3RhdGUgJiYgc3RhdGUuc2VsZWN0ZWRMb2NhdGlvbj9zdGF0ZS5zZWxlY3RlZExvY2F0aW9uOnt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6cXVlcnlQYXJhbXMuZnJvbVZpcD8naXNfdmlwJzpxdWVyeVBhcmFtcy5mcm9tR29sZFZpcD8naXNfZ29sZCc6bnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goZ2V0TmVhcmJ5SG9zcGl0YWxzKGV4dHJhRGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChnZXRUb3BIb3NwaXRhbHMoZXh0cmFEYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWFyY2hVcmwgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC51cmwuaW5jbHVkZXMoJy1zcHRjaXQnKSB8fCBtYXRjaC51cmwuaW5jbHVkZXMoJy1zcHRsaXRjaXQnKSB8fCBtYXRjaC51cmwuaW5jbHVkZXMoJy1pcGRkcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hVcmwgPSBtYXRjaC51cmwudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGluaWNfY2FyZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5jbGluaWNfY2FyZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpbmljX2NhcmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSAxXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5wYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlID0gcGFyc2VJbnQocXVlcnlQYXJhbXMucGFnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0RG9jdG9ycyhzdGF0ZSwgcGFnZSwgdHJ1ZSwgc2VhcmNoVXJsLCAobG9hZE1vcmUsIG5vUmVzdWx0cyA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9SZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHN0YXR1czogNDA0IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gudXJsLmluY2x1ZGVzKCctc3B0Y2l0JykgfHwgbWF0Y2gudXJsLmluY2x1ZGVzKCctc3B0bGl0Y2l0JykgfHwgbWF0Y2gudXJsLmluY2x1ZGVzKCctaXBkZHAnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEZvb3RlckRhdGEobWF0Y2gudXJsLnNwbGl0KFwiL1wiKVsxXSwgcXVlcnlQYXJhbXMucGFnZSB8fCAxKSgpLnRoZW4oKGZvb3RlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyRGF0YSA9IGZvb3RlckRhdGEgfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgZm9vdGVyRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgY2xpbmljX2NhcmQpKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG93NDA0IHx8IHRoaXMuc3RhdGUuc2hvdzQwNCkge1xuICAgICAgICAgICAgcmV0dXJuIDxOb3RGb3VuZFZpZXcgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlYXJjaFJlc3VsdHNWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgTE9BREVEX1NFQVJDSF9DUklURVJJQV9PUEQsXG4gICAgICAgIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICBmZXRjaE5ld1Jlc3VsdHMsXG4gICAgICAgIGdldE5ld1VybCxcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHNlYXJjaF9pZF9kYXRhLFxuICAgICAgICBuZXh0U2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIG5leHRGaWx0ZXJDcml0ZXJpYSxcbiAgICAgICAgbWVyZ2VVcmxTdGF0ZSxcbiAgICAgICAgY29tbW9uX3NldHRpbmdzLFxuICAgICAgICBuZWFyYnlIb3NwaXRhbHMsXG4gICAgICAgIHRvcEhvc3BpdGFsc1xuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cbiAgICBjb25zdCB7XG4gICAgICAgIGNvbXBhcmVfcGFja2FnZXNcblxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuXG4gICAgbGV0IERPQ1RPUlMgPSBzdGF0ZS5ET0NUT1JTXG4gICAgbGV0IEhPU1BJVEFMUyA9IHN0YXRlLkhPU1BJVEFMU1xuXG4gICAgbGV0IHsgaG9zcGl0YWxMaXN0LCBkb2N0b3JMaXN0LCBMT0FERURfRE9DVE9SX1NFQVJDSCwgY291bnQsIFNFVF9GUk9NX1NFUlZFUiwgc2VhcmNoX2NvbnRlbnQsIGN1cnJfcGFnZSwgcmF0aW5ncywgcmV2aWV3cywgcmF0aW5nc190aXRsZSwgYm90dG9tX2NvbnRlbnQsIGJyZWFkY3J1bWIsIHNlb0RhdGEsIHNob3c0MDQsIGNhbm9uaWNhbF91cmwsIGhvc3BpdGFsRGF0YSwgc2ltaWxhcl9zcGVjaWFsaXphdGlvbnMgfSA9IHN0YXRlLkRPQ1RPUl9TRUFSQ0hcblxuICAgIGNvbnN0IHtcbiAgICAgICAgb2ZmZXJMaXN0LFxuICAgICAgICBpc19sb2dpbl91c2VyX2luc3VyZWQsXG4gICAgICAgIGluc3VyYW5jZV9zdGF0dXMsXG4gICAgICAgIGRldmljZV9pbmZvXG4gICAgfSA9IHN0YXRlLlVTRVJcblxuICAgIHJldHVybiB7XG4gICAgICAgIERPQ1RPUlMsIGRvY3Rvckxpc3QsIExPQURFRF9ET0NUT1JfU0VBUkNILFxuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX09QRCxcbiAgICAgICAgY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICBjb3VudCxcbiAgICAgICAgU0VUX0ZST01fU0VSVkVSLFxuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSxcbiAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICBmZXRjaE5ld1Jlc3VsdHMsXG4gICAgICAgIHNlYXJjaF9jb250ZW50LFxuICAgICAgICBnZXROZXdVcmwsXG4gICAgICAgIHNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBwYWdlLFxuICAgICAgICBjdXJyX3BhZ2UsXG4gICAgICAgIEhPU1BJVEFMUyxcbiAgICAgICAgaG9zcGl0YWxMaXN0LCByYXRpbmdzLCByZXZpZXdzLCByYXRpbmdzX3RpdGxlLFxuICAgICAgICBzZWFyY2hfaWRfZGF0YSxcbiAgICAgICAgbmV4dFNlbGVjdGVkQ3JpdGVyaWFzLFxuICAgICAgICBuZXh0RmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIGJvdHRvbV9jb250ZW50LFxuICAgICAgICBicmVhZGNydW1iLFxuICAgICAgICBzZW9EYXRhLFxuICAgICAgICBtZXJnZVVybFN0YXRlLFxuICAgICAgICBzaG93NDA0LFxuICAgICAgICBvZmZlckxpc3QsXG4gICAgICAgIGlzX2xvZ2luX3VzZXJfaW5zdXJlZCxcbiAgICAgICAgaW5zdXJhbmNlX3N0YXR1cyxcbiAgICAgICAgY2Fub25pY2FsX3VybCxcbiAgICAgICAgY29tcGFyZV9wYWNrYWdlcyxcbiAgICAgICAgZGV2aWNlX2luZm8sXG4gICAgICAgIGNvbW1vbl9zZXR0aW5ncyxcbiAgICAgICAgaG9zcGl0YWxEYXRhLFxuICAgICAgICBzaW1pbGFyX3NwZWNpYWxpemF0aW9ucyxcbiAgICAgICAgbmVhcmJ5SG9zcGl0YWxzLFxuICAgICAgICB0b3BIb3NwaXRhbHNcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybFNob3J0bmVyOiAodXJsLCBjYikgPT4gZGlzcGF0Y2godXJsU2hvcnRuZXIodXJsLCBjYikpLFxuICAgICAgICBsb2FkT1BEQ29tbW9uQ3JpdGVyaWE6ICgpID0+IGRpc3BhdGNoKGxvYWRPUERDb21tb25Dcml0ZXJpYSgpKSxcbiAgICAgICAgdG9nZ2xlT1BEQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikgPT4gZGlzcGF0Y2godG9nZ2xlT1BEQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpKSxcbiAgICAgICAgZ2V0RG9jdG9yczogKHN0YXRlLCBwYWdlLCBmcm9tX3NlcnZlciwgc2VhcmNoQnlVcmwsIGNiLCBjbGluaWNfY2FyZCkgPT4gZGlzcGF0Y2goZ2V0RG9jdG9ycyhzdGF0ZSwgcGFnZSwgZnJvbV9zZXJ2ZXIsIHNlYXJjaEJ5VXJsLCBjYiwgY2xpbmljX2NhcmQpKSxcbiAgICAgICAgbWVyZ2VPUERTdGF0ZTogKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpID0+IGRpc3BhdGNoKG1lcmdlT1BEU3RhdGUoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykpLFxuICAgICAgICBnZXREb2N0b3JOdW1iZXI6IChkb2N0b3JJZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGdldERvY3Rvck51bWJlcihkb2N0b3JJZCwgY2FsbGJhY2spKSxcbiAgICAgICAgZ2V0Rm9vdGVyRGF0YTogKHVybCwgcGFnZSkgPT4gZGlzcGF0Y2goZ2V0Rm9vdGVyRGF0YSh1cmwsIHBhZ2UpKSxcbiAgICAgICAgc2F2ZUNvbW1vblByb2NlZHVyZXM6IChwcm9jZWR1cmVfaWRzKSA9PiBkaXNwYXRjaChzYXZlQ29tbW9uUHJvY2VkdXJlcyhwcm9jZWR1cmVfaWRzKSksXG4gICAgICAgIHJlc2V0UHJvY2VkdXJlVVJsOiAoKSA9PiBkaXNwYXRjaChyZXNldFByb2NlZHVyZVVSbCgpKSxcbiAgICAgICAgbWVyZ2VTZWxlY3RlZENyaXRlcmlhczogKCkgPT4gZGlzcGF0Y2gobWVyZ2VTZWxlY3RlZENyaXRlcmlhcygpKSxcbiAgICAgICAgc2V0U2VhcmNoSWQ6IChzZWFyY2hJZCwgZmlsdGVycywgc2V0RGVmYXVsdCkgPT4gZGlzcGF0Y2goc2V0U2VhcmNoSWQoc2VhcmNoSWQsIGZpbHRlcnMsIHNldERlZmF1bHQpKSxcbiAgICAgICAgZ2V0U2VhcmNoSWRSZXN1bHRzOiAoc2VhcmNoSWQsIHNlYXJjaFJlc3VsdHMpID0+IGRpc3BhdGNoKGdldFNlYXJjaElkUmVzdWx0cyhzZWFyY2hJZCwgc2VhcmNoUmVzdWx0cykpLFxuICAgICAgICBzZWxlY3RTZWFyY2hUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0U2VhcmNoVHlwZSh0eXBlKSksXG4gICAgICAgIHNldE5leHRTZWFyY2hDcml0ZXJpYTogKCkgPT4gZGlzcGF0Y2goc2V0TmV4dFNlYXJjaENyaXRlcmlhKCkpLFxuICAgICAgICB0b2dnbGU0MDQ6IChzdGF0dXMpID0+IGRpc3BhdGNoKHRvZ2dsZTQwNChzdGF0dXMpKSxcbiAgICAgICAgc2VsZWN0T3BkVGltZVNMb3Q6IChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkKSA9PiBkaXNwYXRjaChzZWxlY3RPcGRUaW1lU0xvdChzbG90LCByZXNjaGVkdWxlLCBhcHBvaW50bWVudElkKSksXG4gICAgICAgIHNhdmVQcm9maWxlUHJvY2VkdXJlczogKGRvY3Rvcl9pZCwgY2xpbmljX2lkLCBwcm9jZWR1cmVfaWRzLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2goc2F2ZVByb2ZpbGVQcm9jZWR1cmVzKGRvY3Rvcl9pZCwgY2xpbmljX2lkLCBwcm9jZWR1cmVfaWRzLCBmb3JjZUFkZCkpLFxuICAgICAgICBnZXRPZmZlckxpc3Q6IChsYXQsIGxvbmcpID0+IGRpc3BhdGNoKGdldE9mZmVyTGlzdChsYXQsIGxvbmcpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpKSxcbiAgICAgICAgcmVzZXRQa2dDb21wYXJlOigpID0+IGRpc3BhdGNoKHJlc2V0UGtnQ29tcGFyZSgpKSxcbiAgICAgICAgc2VsZWN0TG9jYXRpb246IChsb2NhdGlvbiwgdHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0TG9jYXRpb24obG9jYXRpb24sIHR5cGUpKSxcbiAgICAgICAgY2xvbmVDb21tb25TZWxlY3RlZENyaXRlcmlhczogKHNlbGVjdGVkQ3JpdGVyaWFzKSA9PiBkaXNwYXRjaChjbG9uZUNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzKHNlbGVjdGVkQ3JpdGVyaWFzKSksXG4gICAgICAgIGxvYWRPUERJbnN1cmFuY2U6IChjaXR5KSA9PiBkaXNwYXRjaChsb2FkT1BESW5zdXJhbmNlKGNpdHkpKSxcbiAgICAgICAgZ2V0RG9jdG9ySG9zcGl0YWxGaWx0ZXJzOiAoc3RhdGUsIHBhZ2UsIGZyb21fc2VydmVyLCBzZWFyY2hCeVVybCwgY2IsIGNsaW5pY19jYXJkKSA9PiBkaXNwYXRjaChnZXREb2N0b3JIb3NwaXRhbEZpbHRlcnMoc3RhdGUsIHBhZ2UsIGZyb21fc2VydmVyLCBzZWFyY2hCeVVybCwgY2IsIGNsaW5pY19jYXJkKSksXG4gICAgICAgIGdldERvY3Rvckhvc3BpdGFsU3BlY2lhbGl0eTogKHN0YXRlLCBwYWdlLCBmcm9tX3NlcnZlciwgc2VhcmNoQnlVcmwsIGNiLCBjbGluaWNfY2FyZCkgPT4gZGlzcGF0Y2goZ2V0RG9jdG9ySG9zcGl0YWxTcGVjaWFsaXR5KHN0YXRlLCBwYWdlLCBmcm9tX3NlcnZlciwgc2VhcmNoQnlVcmwsIGNiLCBjbGluaWNfY2FyZCkpLFxuICAgICAgICBnZXRTcG9uc29yZWRMaXN0OiAoZGF0YSwgc2VsZWN0ZWRMb2NhdGlvbiwgY2IpPT4gZGlzcGF0Y2goZ2V0U3BvbnNvcmVkTGlzdChkYXRhLCBzZWxlY3RlZExvY2F0aW9uLCBjYikpLFxuICAgICAgICBnZXROZWFyYnlIb3NwaXRhbHM6IChwYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChnZXROZWFyYnlIb3NwaXRhbHMocGFyYW1zLCBjYikpLFxuICAgICAgICB0b2dnbGVJUERDcml0ZXJpYTogKGNyaXRlcmlhLCBmb3JjZUFkZCkgPT4gZGlzcGF0Y2godG9nZ2xlSVBEQ3JpdGVyaWEoY3JpdGVyaWEsIGZvcmNlQWRkKSksXG4gICAgICAgIGdldFRvcEhvc3BpdGFsczogKGRhdGFQYXJhbXMsIGNiKSA9PiBkaXNwYXRjaChnZXRUb3BIb3NwaXRhbHMoZGF0YVBhcmFtcywgY2IpKSxcbiAgICAgICAgbWVyZ2VJcGRDcml0ZXJpYTogKGZpbHRlckNyaXRlcmlhKT0+IGRpc3BhdGNoKG1lcmdlSXBkQ3JpdGVyaWEoZmlsdGVyQ3JpdGVyaWEpKSxcbiAgICAgICAgY2xlYXJWaXBTZWxlY3RlZFBsYW46KCkgPT5kaXNwYXRjaChjbGVhclZpcFNlbGVjdGVkUGxhbigpKSxcbiAgICAgICAgTm9uSXBkQm9va2luZ0xlYWQ6KGRhdGEsY2IpID0+ZGlzcGF0Y2goTm9uSXBkQm9va2luZ0xlYWQoZGF0YSwgY2IpKSxcbiAgICAgICAgc2F2ZUxlYWRQaG5OdW1iZXI6KG51bWJlcikgPT5kaXNwYXRjaChzYXZlTGVhZFBobk51bWJlcihudW1iZXIpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2VhcmNoUmVzdWx0cyk7XG4iXSwic291cmNlUm9vdCI6IiJ9