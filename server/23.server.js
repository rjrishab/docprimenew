exports.ids = [23];
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

/***/ "./dev/js/components/commons/ratingsProfileView/RatingStars.js":
/*!*********************************************************************!*\
  !*** ./dev/js/components/commons/ratingsProfileView/RatingStars.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RatingStars extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { average_rating, rating_count } = this.props;

        let rating = '';
        if (average_rating) {
            rating = Math.ceil(average_rating * 2) / 2;
        }

        let ratingArray = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            ratingArray.push(_react2.default.createElement('img', { key: i, src: "/assets" + '/img/customer-icons/rating-star-filled.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
        }

        if (rating != Math.floor(rating)) {
            ratingArray.push(_react2.default.createElement('img', { key: 'half', src: "/assets" + '/img/customer-icons/halfstar_new.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
        }

        let emptyStars = Math.floor(5 - rating);
        if (emptyStars) {
            for (let i = 0; i < emptyStars; i++) {
                ratingArray.push(_react2.default.createElement('img', { key: i + 'empty', src: "/assets" + '/img/customer-icons/rating-star-empty.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
            }
        }
        return _react2.default.createElement(
            'div',
            { className: 'cstm-doc-rtng', style: this.props.justifyCenter ? { justifyContent: 'center' } : {} },
            ratingArray,
            rating_count ? _react2.default.createElement(
                'span',
                null,
                '(',
                rating_count,
                ')'
            ) : ''
        );
    }
}

exports.default = RatingStars;

/***/ }),

/***/ "./dev/js/components/diagnosis/commons/labProfileCard/LabProfileCard.js":
/*!******************************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labProfileCard/LabProfileCard.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _utils = __webpack_require__(/*! ../../../../helpers/utils.js */ "./dev/js/helpers/utils.js");

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _constants = __webpack_require__(/*! constants */ "constants");

var _RatingStars = __webpack_require__(/*! ../../../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

var _commonVipGoldBadge = __webpack_require__(/*! ../../../commons/commonVipGoldBadge.js */ "./dev/js/components/commons/commonVipGoldBadge.js");

var _commonVipGoldBadge2 = _interopRequireDefault(_commonVipGoldBadge);

var _commonVipGoldNonLoginBadge = __webpack_require__(/*! ../../../commons/commonVipGoldNonLoginBadge.js */ "./dev/js/components/commons/commonVipGoldNonLoginBadge.js");

var _commonVipGoldNonLoginBadge2 = _interopRequireDefault(_commonVipGoldNonLoginBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LabProfileCard extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            openViewMore: false,
            ssrFlag: false
        };
    }

    componentDidMount() {
        this.setState({ ssrFlag: true });
    }

    toggleViewMore() {
        this.setState({ openViewMore: !this.state.openViewMore });
    }

    openLab(id, url, e) {
        this.props.clearExtraTests();
        if (this.props.noClearTest) {
            //package conditions for seo page
            let lab_id;
            let test = {};
            let data = this.props.details;
            if (data.id != id) {
                lab_id = id;
            } else {
                lab_id = data.id;
            }
            test.type = 'test';
            test.name = data.tests[0].name;
            test.id = data.tests[0].id;
            test.deal_price = data.tests[0].deal_price;
            test.mrp = data.tests[0].mrp;
            test.url = data.tests[0].url;

            test.lab_id = lab_id;
            test.extra_test = true;
            this.props.toggleDiagnosisCriteria('test', test, true);
        } else {
            //for tests
            this.mergeTests(id);
        }
        let data = {
            'Category': 'ConsumerApp', 'Action': 'RankOfLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'rank-lab-clicked', 'Rank': this.props.rank + 1
        };
        _gtm2.default.sendEvent({ data: data });

        data = {
            'Category': 'ConsumerApp', 'Action': 'LabSelectedByUser', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-selected-by-user', 'LabId': id
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.clearVipSelectedPlan();
        if (e.ctrlKey || e.metaKey) {} else {
            e.preventDefault();

            if (url) {
                this.props.history.push(`/${url}`);
            } else {
                this.props.history.push(`/lab/${id}`);
            }
        }
    }

    mergeTests(id) {
        let dedupe_ids = {};
        let testIds = this.props.currentSearchedCriterias.reduce((final, x) => {
            final = final || [];
            if (x.test && x.type == "condition") {
                x.test = x.test || [];
                final = [...final, ...x.test];
            } else if (x.type == "test") {
                final.push(x);
            }
            return final;
        }, []).filter(x => {
            if (dedupe_ids[x.id]) {
                return false;
            } else {
                dedupe_ids[x.id] = true;
                return true;
            }
        }).map(test => {
            let new_test = Object.assign({}, test);
            new_test.extra_test = true;
            new_test.lab_id = id;
            this.props.toggleDiagnosisCriteria('test', new_test, true);
        });
    }

    bookNowClicked(id, url = '') {
        this.props.clearExtraTests();
        let slot = { time: {} };
        this.props.clearExtraTests();
        this.props.selectLabTimeSLot(slot, false);
        let selectedType = {
            r_pickup: 'home',
            p_pickup: 'home'
        };
        this.props.selectLabAppointmentType(selectedType);
        this.mergeTests(id);

        if (url) {
            this.props.history.push(`/${url}/booking?lab_id=${id}`);
        } else {
            this.props.history.push(`/lab/${id}/book`);
        }
    }

    testInfo(test_id, lab_id, test_url, event) {
        let selected_test_ids = [];
        Object.entries(this.props.currentSearchedCriterias).map(function ([key, value]) {
            selected_test_ids.push(value.id);
        });
        var url_string = window.location.href;
        var url = new URL(url_string);
        var search_id = url.searchParams.get("search_id");
        let lat = 28.644800;
        let long = 77.216721;
        if (this.props.selectedLocation !== null) {
            lat = this.props.selectedLocation.geometry.location.lat;
            long = this.props.selectedLocation.geometry.location.lng;

            if (typeof lat === 'function') lat = lat();
            if (typeof long === 'function') long = long();
        }
        if (test_url && test_url != '') {
            this.props.history.push('/' + test_url + '?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&search_id=' + search_id + '&lab_id=' + lab_id + '&lat=' + lat + '&long=' + long);
        } else {
            this.props.history.push('/search/testinfo?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&search_id=' + search_id + '&lab_id=' + lab_id + '&lat=' + lat + '&long=' + long);
        }
        event.stopPropagation();
        let data = {
            'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'lab-result-page'
        };
        _gtm2.default.sendEvent({ data: data });
    }

    goldClicked() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'VipGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-gold-clicked', 'selectedId': this.props.details.id
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push('/vip-gold-details?is_gold=true&source=labgoldlisting&lead_source=Docprime');
    }

    render() {
        let self = this;
        let { price, lab, distance, is_home_collection_enabled, lab_timing, lab_timing_data, mrp, next_lab_timing, next_lab_timing_data, distance_related_charges, pickup_charges, address, name, lab_thumbnail, other_labs, id, url, home_pickup_charges, discounted_price, avg_rating, rating_count, insurance, vip, is_vip_enabled, is_gold } = this.props.details;
        distance = Math.ceil(distance / 1000);

        let pickup_text = "";
        if (is_home_collection_enabled && distance_related_charges == 1) {
            pickup_text = "Home pickup charges applicable";
        }

        if (is_home_collection_enabled && !distance_related_charges) {
            if (home_pickup_charges == 0) {
                pickup_text = "Free home visit";
            } else {
                pickup_text = "Inclusive of home visit charges";
            }
            price = price + pickup_charges;
            discounted_price = discounted_price + pickup_charges;
            mrp = mrp + pickup_charges;
        }

        let offPercent = '';
        if (mrp && (discounted_price || discounted_price == 0) && discounted_price < mrp) {
            offPercent = parseInt((mrp - discounted_price) / mrp * 100);
        }
        let hide_price = false;
        if (this.props.test_data) {
            this.props.test_data.map(test => {
                if (test.hide_price) {
                    hide_price = true;
                }
            });
        }
        let show_detailsIds = [];
        if (!this.props.isTestInfo) {
            {
                Object.entries(this.props.currentSearchedCriterias).map(function ([key, value]) {
                    if (value.show_details) {
                        show_detailsIds.push(value.id);
                    }
                });
            }
        }
        let is_insurance_applicable = false;
        let is_insurance_buy_able = false;
        if (insurance && insurance.is_insurance_covered && insurance.is_user_insured) {
            is_insurance_applicable = true;
            pickup_text = "";
        }

        if (insurance && insurance.is_insurance_covered && !insurance.is_user_insured) {
            is_insurance_buy_able = true;
        }
        let is_labopd_enable_for_vip = is_vip_enabled;
        let is_labopd_enable_for_gold = is_gold;
        let is_vip_member = false;
        let is_gold_member = false;
        let covered_under_vip = false;
        if (vip && Object.keys(vip).length > 0) {
            is_vip_member = vip.is_vip_member;
            is_gold_member = vip.is_gold_member;
            covered_under_vip = vip.covered_under_vip;
        }

        let show_common_prices = !is_labopd_enable_for_vip || (is_gold_member || is_vip_member) && !covered_under_vip;
        return _react2.default.createElement(
            'div',
            { className: 'cstm-docCard mb-3' },
            _react2.default.createElement(
                'div',
                { className: 'cstm-docCard-content', style: { cursor: 'pointer' } },
                _react2.default.createElement(
                    'div',
                    { className: 'row no-gutters', style: { paddingBottom: 10 } },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-8' },
                        _react2.default.createElement(
                            'div',
                            { className: 'cstm-doc-details-container labCardUiresponsive' },
                            _react2.default.createElement(
                                'div',
                                { className: 'cstm-doc-img-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'text-center' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: `/${url}`, onClick: e => {
                                                e.preventDefault();
                                                this.bookNowClicked(id, url);
                                            } },
                                        _react2.default.createElement(
                                            _initialsPicture2.default,
                                            { name: name, has_image: !!lab_thumbnail, className: 'initialsPicture-ls' },
                                            _react2.default.createElement('img', { alt: name, className: 'fltr-usr-image-lab hpl-logo-name', src: lab_thumbnail })
                                        )
                                    )
                                ),
                                avg_rating ? _react2.default.createElement(
                                    'div',
                                    { style: { marginTop: 4 }, className: 'rating-star-container' },
                                    _react2.default.createElement(_RatingStars2.default, { average_rating: avg_rating, rating_count: rating_count || '', width: '10px', height: '10px' })
                                ) : ''
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'cstm-doc-content-container' },
                                _react2.default.createElement(
                                    'a',
                                    { href: `/${url}`, onClick: e => {
                                            e.preventDefault();
                                            this.bookNowClicked(id, url);
                                        } },
                                    _react2.default.createElement(
                                        'h2',
                                        { className: 'cstmDocName' },
                                        name
                                    )
                                ),
                                this.props.details.tests && this.props.details.tests.length ? this.props.details.tests.map((test, index) => {
                                    return show_detailsIds.indexOf(this.props.details.tests[0].id) > -1 ? _react2.default.createElement(
                                        'p',
                                        { key: index, onClick: this.testInfo.bind(this, this.props.details.tests[0].id, id, this.props.details.tests[0].url) },
                                        test.name,
                                        _react2.default.createElement(
                                            'span',
                                            { style: { 'marginLeft': '5px', marginTop: '1px', display: 'inline-block' } },
                                            _react2.default.createElement('img', { src: "/assets" + '/img/icons/Info.svg', style: { width: '15px' } })
                                        )
                                    ) : _react2.default.createElement(
                                        'p',
                                        { key: index },
                                        test.name
                                    );
                                }) : '',
                                _react2.default.createElement(
                                    'div',
                                    { className: 'cstm-lab-time-container' },
                                    _react2.default.createElement('img', { className: 'cstmTimeImg', src: "/assets" + "/img/watch-date.svg" }),
                                    (0, _utils.buildOpenBanner)(lab_timing, lab_timing_data, next_lab_timing, next_lab_timing_data)
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-4 booking-column' },
                         false ? undefined : '',
                        !is_insurance_applicable && !show_common_prices && _react2.default.createElement(_commonVipGoldBadge2.default, _extends({ is_labopd_enable_for_vip: is_labopd_enable_for_vip, is_labopd_enable_for_gold: is_labopd_enable_for_gold, is_vip_member: is_vip_member, is_gold_member: is_gold_member, covered_under_vip: covered_under_vip, vip_data: vip }, this.props, { mrp: mrp, discounted_price: discounted_price, goldClicked: () => this.goldClicked() })),
                        !is_insurance_applicable && (discounted_price || discounted_price == 0) && !hide_price && show_common_prices ? discounted_price != mrp ? _react2.default.createElement(
                            'p',
                            { className: 'cst-doc-price' },
                            '\u20B9 ',
                            discounted_price,
                            _react2.default.createElement(
                                'span',
                                { className: 'cstm-doc-cut-price' },
                                '\u20B9 ',
                                mrp,
                                ' '
                            ),
                            ' '
                        ) : _react2.default.createElement(
                            'p',
                            { className: 'cst-doc-price' },
                            '\u20B9 ',
                            discounted_price
                        ) : '',
                        !is_insurance_applicable && discounted_price != price && !hide_price && offPercent && offPercent > 0 && show_common_prices ? _react2.default.createElement(
                            'p',
                            { className: 'cstm-cpn' },
                            offPercent,
                            '% Off ',
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement('br', null),
                                '(includes Coupon)'
                            )
                        ) : '',
                        is_insurance_applicable ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'p',
                                { className: 'cst-doc-price' },
                                '\u20B9 ',
                                0
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'ins-val-bx' },
                                'Covered Under Insurance'
                            )
                        ) : '',
                        !is_insurance_applicable && !show_common_prices && _react2.default.createElement(_commonVipGoldNonLoginBadge2.default, _extends({ is_labopd_enable_for_vip: is_labopd_enable_for_vip, is_labopd_enable_for_gold: is_labopd_enable_for_gold, is_vip_member: is_vip_member, is_gold_member: is_gold_member, covered_under_vip: covered_under_vip, vip_data: vip }, this.props, { mrp: mrp, discounted_price: discounted_price, goldClicked: () => this.goldClicked() })),
                        _react2.default.createElement(
                            'button',
                            { className: 'cstm-book-btn', onClick: this.bookNowClicked.bind(this, id, url) },
                            'Book Now'
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'cstmCardFooter' },
                _react2.default.createElement(
                    'div',
                    { className: 'cstmfooterContent' },
                    pickup_text ? _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement('img', { style: { width: '16px' }, src: "/assets" + "/img/cstmhome.svg" }),
                        pickup_text
                    ) : '',
                    _react2.default.createElement(
                        'p',
                        { className: 'mb-rmv' },
                        _react2.default.createElement('img', { style: { width: '10px', marginLeft: '3px' }, src: "/assets" + "/img/new-loc-ico.svg" }),
                        address
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'cstmDocLoc' },
                    _react2.default.createElement(
                        'p',
                        { className: '' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/cstmdist.svg" }),
                        ' ',
                        distance,
                        'Km'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'showBookTestListContainer mt-rmv' },
                other_labs && other_labs.length && this.state.openViewMore ? _react2.default.createElement(
                    'div',
                    { className: 'showBookTestList bg-white-main' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        other_labs.map((olab, x) => {
                            return _react2.default.createElement(
                                'li',
                                { key: x },
                                _react2.default.createElement(
                                    'p',
                                    { className: 'showBookTestListImg' },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/new-loc-ico.svg", style: { marginRight: '8px', width: "12px" } }),
                                    olab.address,
                                    ' | ',
                                    Math.ceil(olab.distance / 1000),
                                    ' km'
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { className: 'showBookTestListBtn', onClick: this.bookNowClicked.bind(this, olab.id, olab.url) },
                                    'Book Now'
                                )
                            );
                        })
                    )
                ) : '',
                other_labs && other_labs.length ? _react2.default.createElement(
                    'div',
                    { className: 'filtr-card-footer bg-white-main', onClick: this.toggleViewMore.bind(this), style: { cursor: 'pointer', borderTop: '1px solid #e8e8e8' } },
                    this.state.openViewMore ? _react2.default.createElement(
                        'div',
                        { style: { paddingRight: "8px" } },
                        _react2.default.createElement(
                            'p',
                            { className: 'appBaseColor', style: { marginLeft: '0px' } },
                            'Show less'
                        )
                    ) : _react2.default.createElement(
                        'div',
                        { style: { paddingRight: "8px" } },
                        _react2.default.createElement(
                            'p',
                            { className: 'appBaseColor', style: { marginLeft: '0px' } },
                            'View ',
                            other_labs.length,
                            ' more locations'
                        )
                    ),
                    this.state.openViewMore ? _react2.default.createElement(
                        'div',
                        { className: 'text-right', style: { marginLeft: 'auto' } },
                        _react2.default.createElement('img', { style: { margin: '5px' }, className: 'acrd-show', src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                    ) : _react2.default.createElement(
                        'div',
                        { className: 'text-right', style: { marginLeft: 'auto' } },
                        _react2.default.createElement('img', { style: { margin: '5px' }, src: "/assets" + "/img/customer-icons/dropdown-arrow.svg" })
                    )
                ) : ''
            )
        )

        // <div className="">
        //     <div className="filter-card-dl mb-3">
        //         <div className="fltr-crd-top-container">
        //             <div className="fltr-lctn-dtls" onClick={this.bookNowClicked.bind(this, id, url)} style={{ cursor: 'pointer' }}>
        //                 <p><img className="fltr-loc-ico" src="/assets/img/new-loc-ico.svg" style={{ width: '12px', height: '18px' }} /><span className="fltr-loc-txt">{address}</span><span>&nbsp;|&nbsp;{distance} Km</span></p>
        //             </div>
        //             <div className="row no-gutters mrt-10" onClick={this.bookNowClicked.bind(this, id, url)} style={{ cursor: 'pointer' }}>
        //                 <div className="col-12">
        //                     <a href={url} onClick={(e) => e.preventDefault()}>
        //                         <h2 className="lab-fltr-dc-name fw-500 text-md">{name}</h2>
        //                     </a>
        //                     {
        //                         !hide_price && offPercent && offPercent > 0 ?
        //                             <span className="filtr-offer ofr-ribbon fw-700">{offPercent}% OFF</span> : ''
        //                     }
        //                 </div>
        //                 <div className="col-7 mrt-10">
        //                     <div className="img-nd-dtls">
        //                         <div className="text-center">
        //                             <InitialsPicture name={name} has_image={!!lab_thumbnail} className="initialsPicture-ls">
        //                                 <img className="fltr-usr-image-lab" src={lab_thumbnail} />
        //                             </InitialsPicture>
        //                         </div>
        //                         <div style={{ marginLeft: '8px', marginRight: '8px' }}>
        //                             {
        //                                 this.props.details.tests && this.props.details.tests.length == 1 ? <p style={{ color: "rgb(0, 0, 0)", fontSize: "14px", fontWeight: 400 }}>{this.props.details.tests[0].name}
        //                                     {
        //                                         show_detailsIds.indexOf(this.props.details.tests[0].id) > -1 ? <span style={{ 'marginLeft': '5px', marginTop: '1px', display: 'inline-block' }} onClick={this.testInfo.bind(this, this.props.details.tests[0].id, id, this.props.details.tests[0].url)}>
        //                                             <img src="https://cdn.docprime.com/cp/assets/img/icons/info.svg" />
        //                                         </span> : ''
        //                                     }
        //                                 </p> : ""
        //                             }
        //                         </div>
        //                     </div>
        //                     {this.props.details.tests && this.props.details.tests.length == 1 && this.props.details.tests[0].number_of_tests && this.props.details.tests[0].number_of_tests != null ? <div style={{ marginTop: '10px' }}><h3 className="lab-fltr-dc-name fw-500 pkg-include">{this.props.details.tests[0].number_of_tests} Tests Included</h3></div>
        //                         : ''}
        //                     {this.props.details.tests && this.props.details.tests.length == 1 && this.props.details.tests[0].category_details && this.props.details.tests[0].category_details.length > 0 ?
        //                         <ul style={{ marginTop: '5px' }}>
        //                             {
        //                                 this.props.details.tests[0].category_details.map((category_detail, k) => {
        //                                     return <li className="pkg-listing-tick" key={k} id={k}>
        //                                         <img className="fltr-loc-ico" src={ASSETS_BASE_URL + "/img/checks.svg"} style={{ width: '12px', marginTop: '6px' }} />
        //                                         {category_detail.category} ({category_detail.count})
        //                                 </li>
        //                                 })
        //                             }
        //                         </ul>
        //                         : ''}
        //                 </div>
        //                 <div className="col-5 mrt-10 text-right" style={{ paddingleft: '8px' }}>
        //                     {
        //                         discounted_price && !hide_price ? <p className="text-primary fw-500 text-lg mrb-10">₹ {discounted_price}<span className="fltr-cut-price" style={{ verticalAlign: '1px' }}>₹ {mrp}</span></p> : ""
        //                     }
        //                     {
        //                         hide_price ? <p className="text-primary fw-500 text-lg mrb-10">Free</p> : ""
        //                     }

        //                     {
        //                         discounted_price != price ? <div className="signup-off-container">
        //                             <span className="signup-off-doc-green" style={{ fontSize: 12 }} >Includes coupon discount</span>
        //                         </div> : ""
        //                     }
        //                 </div>
        //                 <div className="col-12 mrt-10">
        //                     <div className="row">
        //                         <div className="col-6">
        //                             {/*<button className="fltr-cntct-btn btn-pdng"  onClick={this.openLab.bind(this, id, url)} >View Profile</button>*/}
        //                         </div>
        //                         <div className="col-6">
        //                             <button className="fltr-bkng-btn btn-pdng">Book Now</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             {
        //                 this.props.details.tests && this.props.details.tests.length >= 2 ?
        //                     <div>
        //                         <ul className="fltr-labs-test-selected mrt-10">
        //                             <span className="fltr-prv-selected-test">Tests Selected</span>
        //                             {
        //                                 this.props.details.tests.map((test, i) => {
        //                                     return <li className="fltr-slected-test" key={i}>
        //                                         <label style={{ fontWeight: 400 }}>{test.name}
        //                                             {

        //                                                 show_detailsIds.indexOf(test.id) > -1 ?
        //                                                     <span style={{ 'marginLeft': '5px', marginTop: '1px', display: 'inline-block' }} onClick={this.testInfo.bind(this, test.id, id, test.url)}>
        //                                                         <img src="https://cdn.docprime.com/cp/assets/img/icons/info.svg" />
        //                                                     </span> : ''
        //                                             }
        //                                         </label>
        //                                         {
        //                                             hide_price ?
        //                                                 <p style={{ fontWeight: 400 }}>Free</p>
        //                                                 : <p style={{ fontWeight: 400 }}>&#x20B9; {test.deal_price} <span>&#x20B9; {test.mrp}</span></p>
        //                                         }
        //                                     </li>
        //                                 })
        //                             }
        //                         </ul>
        //                     </div> : ''
        //             }

        //         </div>
        //         <div className="filtr-card-footer" style={{ background: 'white' }}>
        //             <div style={{ paddingRight: "8px" }}>
        //                 {
        //                     pickup_text ? <p style={{ marginLeft: '0px' }}>* {pickup_text}</p>
        //                         : ""
        //                 }
        //             </div>

        //             <div className="text-right" style={{ marginLeft: 'auto' }}>
        //                 <img src="/assets/img/customer-icons/clock-black.svg" />
        //                 <p style={{ fontSize: '12px' }}>{buildOpenBanner(lab_timing, lab_timing_data, next_lab_timing, next_lab_timing_data)}</p>
        //             </div>
        //         </div>
        //         <div className="showBookTestListContainer">
        //             {
        //                 other_labs && other_labs.length && this.state.openViewMore ? <div className="showBookTestList">
        //                     <ul>
        //                         {
        //                             other_labs.map((olab, x) => {
        //                                 return <li key={x}>
        //                                     <p className="showBookTestListImg"> <img src="/assets/img/new-loc-ico.svg" style={{ marginRight: '8px', width: "12px" }} />{olab.address} | {Math.ceil(olab.distance / 1000)} km </p>
        //                                     <button className="showBookTestListBtn" onClick={this.bookNowClicked.bind(this, olab.id, olab.url)}>Book Now</button>
        //                                 </li>
        //                             })
        //                         }
        //                     </ul>
        //                 </div> : ""
        //             }

        //             {
        //                 other_labs && other_labs.length ? <div className="filtr-card-footer" onClick={this.toggleViewMore.bind(this)} style={{ cursor: 'pointer', borderTop: '1px solid #e8e8e8' }}>
        //                     {
        //                         this.state.openViewMore ? <div style={{ paddingRight: "8px" }}>
        //                             <p className="appBaseColor" style={{ marginLeft: '0px' }}>Show less</p>
        //                         </div> : <div style={{ paddingRight: "8px" }}>
        //                                 <p className="appBaseColor" style={{ marginLeft: '0px' }}>View {other_labs.length} more locations</p>
        //                             </div>
        //                     }

        //                     <div className="text-right" style={{ marginLeft: 'auto' }}>
        //                         {
        //                             this.state.openViewMore ? <img style={{ margin: '5px' }} className="acrd-show" src="/assets/img/customer-icons/dropdown-arrow.svg" /> : <img style={{ margin: '5px' }} className="" src="/assets/img/customer-icons/dropdown-arrow.svg" />
        //                         }
        //                     </div>
        //                 </div> : ""
        //             }

        //         </div>
        //     </div>
        // </div>
        ;
    }
}

exports.default = LabProfileCard;

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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2xvY2F0aW9uUG9wdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9sb2NhdGlvblBvcHVwL2xvY2F0aW9uUG9wdXBWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvcmF0aW5nc1Byb2ZpbGVWaWV3L1JhdGluZ1N0YXJzLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9jb21tb25zL2xhYlByb2ZpbGVDYXJkL0xhYlByb2ZpbGVDYXJkLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25Qb3B1cC5qcyJdLCJuYW1lcyI6WyJsb2NhdGlvblBvcHVwIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiTG9jYXRpb25Qb3B1cFZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaCIsImxvY2F0aW9uX29iamVjdCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzZWxlY3RlZExvY2F0aW9uIiwic2V0U3RhdGUiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImxvY2F0aW9uVHlwZSIsImluY2x1ZGVzIiwiY29tcG9uZW50RGlkTW91bnQiLCJsb2NhdGlvbk5hbWUiLCJnb1RvTG9jYXRpb24iLCJpc1RvcGJhciIsInJlZGlyZWN0X3RvIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImxvY2F0aW9uX3VybCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJoaXN0b3J5IiwicHVzaCIsImNvbnRpbnVlTG9jYXRpb24iLCJwYXJzZWQiLCJwYXJzZSIsImxhdCIsImxvbmciLCJsb2NhdGlvbkRhdGEiLCJzZWxlY3RMb2NhdGlvbiIsInJlbmRlciIsImNvdW50IiwiZm9udFdlaWdodCIsImNyaXRlcmlhU3RyaW5nIiwiYmluZCIsIlJhdGluZ1N0YXJzIiwiYXZlcmFnZV9yYXRpbmciLCJyYXRpbmdfY291bnQiLCJyYXRpbmciLCJNYXRoIiwiY2VpbCIsInJhdGluZ0FycmF5IiwiaSIsImZsb29yIiwiQVNTRVRTX0JBU0VfVVJMIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImhlaWdodCIsImVtcHR5U3RhcnMiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeUNvbnRlbnQiLCJMYWJQcm9maWxlQ2FyZCIsIm9wZW5WaWV3TW9yZSIsInNzckZsYWciLCJ0b2dnbGVWaWV3TW9yZSIsIm9wZW5MYWIiLCJpZCIsInVybCIsImUiLCJjbGVhckV4dHJhVGVzdHMiLCJub0NsZWFyVGVzdCIsImxhYl9pZCIsInRlc3QiLCJkZXRhaWxzIiwidHlwZSIsIm5hbWUiLCJ0ZXN0cyIsImRlYWxfcHJpY2UiLCJtcnAiLCJleHRyYV90ZXN0IiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJtZXJnZVRlc3RzIiwicmFuayIsImNsZWFyVmlwU2VsZWN0ZWRQbGFuIiwiY3RybEtleSIsIm1ldGFLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImRlZHVwZV9pZHMiLCJ0ZXN0SWRzIiwiY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzIiwicmVkdWNlIiwiZmluYWwiLCJ4IiwiZmlsdGVyIiwibWFwIiwibmV3X3Rlc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJib29rTm93Q2xpY2tlZCIsInNsb3QiLCJ0aW1lIiwic2VsZWN0TGFiVGltZVNMb3QiLCJzZWxlY3RlZFR5cGUiLCJyX3BpY2t1cCIsInBfcGlja3VwIiwic2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlIiwidGVzdEluZm8iLCJ0ZXN0X2lkIiwidGVzdF91cmwiLCJldmVudCIsInNlbGVjdGVkX3Rlc3RfaWRzIiwiZW50cmllcyIsImtleSIsInZhbHVlIiwidXJsX3N0cmluZyIsImhyZWYiLCJVUkwiLCJzZWFyY2hfaWQiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJnZW9tZXRyeSIsImxuZyIsInN0b3BQcm9wYWdhdGlvbiIsImdvbGRDbGlja2VkIiwic2VsZiIsInByaWNlIiwibGFiIiwiZGlzdGFuY2UiLCJpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCIsImxhYl90aW1pbmciLCJsYWJfdGltaW5nX2RhdGEiLCJuZXh0X2xhYl90aW1pbmciLCJuZXh0X2xhYl90aW1pbmdfZGF0YSIsImRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcyIsInBpY2t1cF9jaGFyZ2VzIiwiYWRkcmVzcyIsImxhYl90aHVtYm5haWwiLCJvdGhlcl9sYWJzIiwiaG9tZV9waWNrdXBfY2hhcmdlcyIsImRpc2NvdW50ZWRfcHJpY2UiLCJhdmdfcmF0aW5nIiwiaW5zdXJhbmNlIiwidmlwIiwiaXNfdmlwX2VuYWJsZWQiLCJpc19nb2xkIiwicGlja3VwX3RleHQiLCJvZmZQZXJjZW50IiwicGFyc2VJbnQiLCJoaWRlX3ByaWNlIiwidGVzdF9kYXRhIiwic2hvd19kZXRhaWxzSWRzIiwiaXNUZXN0SW5mbyIsInNob3dfZGV0YWlscyIsImlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIiwiaXNfaW5zdXJhbmNlX2J1eV9hYmxlIiwiaXNfaW5zdXJhbmNlX2NvdmVyZWQiLCJpc191c2VyX2luc3VyZWQiLCJpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAiLCJpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkIiwiaXNfdmlwX21lbWJlciIsImlzX2dvbGRfbWVtYmVyIiwiY292ZXJlZF91bmRlcl92aXAiLCJrZXlzIiwibGVuZ3RoIiwic2hvd19jb21tb25fcHJpY2VzIiwiY3Vyc29yIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsImluZGV4IiwiaW5kZXhPZiIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0Iiwib2xhYiIsImJvcmRlclRvcCIsInBhZGRpbmdSaWdodCIsIm1hcmdpbiIsIkxvY2F0aW9uUG9wdXBDb250YWluZXIiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJv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QU1BLEtBQU47QUFDSDs7QUFNRGdDLGFBQVM7O0FBRUwsZUFDSSw4QkFBQyxlQUFELEVBQXVCLEtBQUtoQyxLQUE1QixDQURKO0FBR0g7QUFkZ0Q7O0FBQS9Dd0ssc0IsQ0FLS0MsWSxHQUFlO0FBQ2xCQyxZQUFRLE1BQU07QUFESSxDO0FBWTFCLE1BQU1DLGtCQUFtQjFLLEtBQUQsSUFBVztBQUMvQixVQUFNO0FBQ0ZJLHdCQURFO0FBRUZHO0FBRkUsUUFHRlAsTUFBTTJLLG1CQUhWOztBQUtBLFdBQU87QUFDSHZLLHdCQURHO0FBRUhHO0FBRkcsS0FBUDtBQUlILENBVkQ7O0FBWUEsTUFBTXFLLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3JDLFdBQU87QUFDSC9JLHdCQUFnQixDQUFDZixRQUFELEVBQVdrRCxJQUFYLEtBQW9CNEcsU0FBUywyQkFBZTlKLFFBQWYsRUFBeUJrRCxJQUF6QixDQUFUO0FBRGpDLEtBQVA7QUFHSCxDQUpEOztrQkFPZSx5QkFBUXlHLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q0wsc0JBQTdDLEMiLCJmaWxlIjoiMjMuc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvY2F0aW9uUG9wdXAgZnJvbSAnLi9sb2NhdGlvblBvcHVwVmlldydcblxuZXhwb3J0IGRlZmF1bHQgbG9jYXRpb25Qb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IF9nZXRsb2NhdGlvbkZyb21MYXRMb25nIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9tYXBIZWxwZXJzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0nXG5cbmNsYXNzIExvY2F0aW9uUG9wdXBWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgICAgIGxvY2F0aW9uX29iamVjdDogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNlYXJjaCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9jYXRpb25fb2JqZWN0OiBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLCBzZWFyY2g6IHByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFwcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9jYXRpb25fb2JqZWN0OiBwcm9wcy5zZWxlY3RlZExvY2F0aW9uLCBzZWFyY2g6IHByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUgJiYgIXRoaXMucHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAmJiB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbl9vYmplY3Q6IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiwgc2VhcmNoOiB0aGlzLnByb3BzLmxvY2F0aW9uTmFtZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3MgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvVG9Mb2NhdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNUb3BiYXIpIHtcbiAgICAgICAgICAgIGxldCByZWRpcmVjdF90byA9IFwiXCJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3NwdGNpdCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnc3B0bGl0Y2l0JykpIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdF90byA9IFwiL29wZC9zZWFyY2hyZXN1bHRzXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbGJjaXQnKSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2xibGl0Y2l0JykpIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdF90byA9IFwiL2xhYi9zZWFyY2hyZXN1bHRzXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uX3VybCA9ICcvbG9jYXRpb25zZWFyY2gnXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RfdG8pIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbl91cmwgKz0gYD9yZWRpcmVjdF90bz0ke3JlZGlyZWN0X3RvfWBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYW5nZUxvY2F0aW9uRG9jdG9yUmVzdWx0c1BvcFVwJywgJ0FjdGlvbic6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gobG9jYXRpb25fdXJsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udGludWVMb2NhdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb250aW51ZUxvY2F0aW9uRG9jdG9yUmVzdWx0c1BvcFVwJywgJ0FjdGlvbic6ICdjb250aW51ZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbnRpbnVlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIGlmIChwYXJzZWQubGF0ICYmIHBhcnNlZC5sb25nKSB7XG4gICAgICAgICAgICBfZ2V0bG9jYXRpb25Gcm9tTGF0TG9uZyhwYXJzZWQubGF0LCBwYXJzZWQubG9uZywgJ2xvY2FsaXR5JywgKGxvY2F0aW9uRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMb2NhdGlvbihsb2NhdGlvbkRhdGEsICdhdXRvRGV0ZWN0JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmci1sb2NhdGlvbi1wb3B1cC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1tZFwiPlNob3dpbmcge3RoaXMucHJvcHMuY291bnR9IHJlc3VsdHMgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNzAwIH19Pnt0aGlzLnByb3BzLmNyaXRlcmlhU3RyaW5nID8gYGZvciAke3RoaXMucHJvcHMuY3JpdGVyaWFTdHJpbmd9YCA6ICcnfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNzAwIHRleHQtbWRcIj57dGhpcy5wcm9wcy5sb2NhdGlvbk5hbWUgPyBgIGluICR7dGhpcy5wcm9wcy5sb2NhdGlvbk5hbWV9YCA6ICcnfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ3LTUwMCBmci1wb3B1cC1jb250XCIgb25DbGljaz17KCkgPT4gdGhpcy5jb250aW51ZUxvY2F0aW9uKCl9PkNvbnRpbnVlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0yMCB0ZXh0LXhzXCI+T1I8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcnQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmdy01MDAgZnItcG9wdXAtY2hhbmdlXCIgb25DbGljaz17dGhpcy5nb1RvTG9jYXRpb24uYmluZCh0aGlzKX0+Q2hhbmdlIExvY2F0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25Qb3B1cFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBSYXRpbmdTdGFycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IGF2ZXJhZ2VfcmF0aW5nLCByYXRpbmdfY291bnQgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBsZXQgcmF0aW5nID0gJydcbiAgICAgICAgaWYgKGF2ZXJhZ2VfcmF0aW5nKSB7XG4gICAgICAgICAgICByYXRpbmcgPSAoTWF0aC5jZWlsKGF2ZXJhZ2VfcmF0aW5nICogMikpIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYXRpbmdBcnJheSA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5mbG9vcihyYXRpbmcpOyBpKyspIHtcbiAgICAgICAgICAgIHJhdGluZ0FycmF5LnB1c2goPGltZyBrZXk9e2l9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvcmF0aW5nLXN0YXItZmlsbGVkLnN2Zyd9IGNsYXNzTmFtZT1cImltZy1jc3RtLWRvY3JhdGluZ1wiIHN0eWxlPXt7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLCBtYXJnaW5SaWdodDogMiwgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB9fSAvPilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyYXRpbmcgIT0gTWF0aC5mbG9vcihyYXRpbmcpKSB7XG4gICAgICAgICAgICByYXRpbmdBcnJheS5wdXNoKDxpbWcga2V5PSdoYWxmJyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2hhbGZzdGFyX25ldy5zdmcnfSBjbGFzc05hbWU9XCJpbWctY3N0bS1kb2NyYXRpbmdcIiBzdHlsZT17eyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCwgbWFyZ2luUmlnaHQ6IDIsIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfX0gLz4pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZW1wdHlTdGFycyA9IE1hdGguZmxvb3IoNSAtIHJhdGluZyk7XG4gICAgICAgIGlmIChlbXB0eVN0YXJzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVtcHR5U3RhcnM7IGkrKykge1xuICAgICAgICAgICAgICAgIHJhdGluZ0FycmF5LnB1c2goPGltZyBrZXk9e2kgKyAnZW1wdHknfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3JhdGluZy1zdGFyLWVtcHR5LnN2Zyd9IGNsYXNzTmFtZT1cImltZy1jc3RtLWRvY3JhdGluZ1wiIHN0eWxlPXt7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLCBtYXJnaW5SaWdodDogMiwgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB9fSAvPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvYy1ydG5nXCIgc3R5bGU9e3RoaXMucHJvcHMuanVzdGlmeUNlbnRlciA/IHsganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH0gOiB7fX0+XG4gICAgICAgICAgICAgICAge3JhdGluZ0FycmF5fVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nX2NvdW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7cmF0aW5nX2NvdW50fSk8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nU3RhcnMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmltcG9ydCB7IGJ1aWxkT3BlbkJhbm5lciB9IGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgeyBYX09LIH0gZnJvbSAnY29uc3RhbnRzJztcbmltcG9ydCBSYXRpbmdTdGFycyBmcm9tICcuLi8uLi8uLi9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdTdGFycyc7XG5pbXBvcnQgQ29tbW9uVmlwR29sZEJhZGdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvY29tbW9uVmlwR29sZEJhZGdlLmpzJ1xuaW1wb3J0IENvbW1vblZpcEdvbGROb25Mb2dpbkJhZGdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvY29tbW9uVmlwR29sZE5vbkxvZ2luQmFkZ2UuanMnXG5cbmNsYXNzIExhYlByb2ZpbGVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW5WaWV3TW9yZTogZmFsc2UsXG4gICAgICAgICAgICBzc3JGbGFnOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzc3JGbGFnOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlVmlld01vcmUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuVmlld01vcmU6ICF0aGlzLnN0YXRlLm9wZW5WaWV3TW9yZSB9KVxuICAgIH1cblxuXG4gICAgb3BlbkxhYihpZCwgdXJsLCBlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJFeHRyYVRlc3RzKClcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubm9DbGVhclRlc3QpIHtcbiAgICAgICAgICAgIC8vcGFja2FnZSBjb25kaXRpb25zIGZvciBzZW8gcGFnZVxuICAgICAgICAgICAgbGV0IGxhYl9pZFxuICAgICAgICAgICAgbGV0IHRlc3QgPSB7fVxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnByb3BzLmRldGFpbHNcbiAgICAgICAgICAgIGlmIChkYXRhLmlkICE9IGlkKSB7XG4gICAgICAgICAgICAgICAgbGFiX2lkID0gaWRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGFiX2lkID0gZGF0YS5pZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVzdC50eXBlID0gJ3Rlc3QnXG4gICAgICAgICAgICB0ZXN0Lm5hbWUgPSBkYXRhLnRlc3RzWzBdLm5hbWVcbiAgICAgICAgICAgIHRlc3QuaWQgPSBkYXRhLnRlc3RzWzBdLmlkXG4gICAgICAgICAgICB0ZXN0LmRlYWxfcHJpY2UgPSBkYXRhLnRlc3RzWzBdLmRlYWxfcHJpY2VcbiAgICAgICAgICAgIHRlc3QubXJwID0gZGF0YS50ZXN0c1swXS5tcnBcbiAgICAgICAgICAgIHRlc3QudXJsID0gZGF0YS50ZXN0c1swXS51cmxcblxuICAgICAgICAgICAgdGVzdC5sYWJfaWQgPSBsYWJfaWRcbiAgICAgICAgICAgIHRlc3QuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCB0ZXN0LCB0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9mb3IgdGVzdHNcbiAgICAgICAgICAgIHRoaXMubWVyZ2VUZXN0cyhpZClcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUmFua09mTGFiQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3JhbmstbGFiLWNsaWNrZWQnLCAnUmFuayc6IHRoaXMucHJvcHMucmFuayArIDFcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYlNlbGVjdGVkQnlVc2VyJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLXNlbGVjdGVkLWJ5LXVzZXInLCAnTGFiSWQnOiBpZFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKVxuICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7aWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1lcmdlVGVzdHMoaWQpIHtcbiAgICAgICAgbGV0IGRlZHVwZV9pZHMgPSB7fVxuICAgICAgICBsZXQgdGVzdElkcyA9IHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzXG4gICAgICAgICAgICAucmVkdWNlKChmaW5hbCwgeCkgPT4ge1xuICAgICAgICAgICAgICAgIGZpbmFsID0gZmluYWwgfHwgW11cbiAgICAgICAgICAgICAgICBpZiAoeC50ZXN0ICYmIHgudHlwZSA9PSBcImNvbmRpdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHgudGVzdCA9IHgudGVzdCB8fCBbXVxuICAgICAgICAgICAgICAgICAgICBmaW5hbCA9IFsuLi5maW5hbCwgLi4ueC50ZXN0XVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeC50eXBlID09IFwidGVzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsLnB1c2goeClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsXG4gICAgICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGVkdXBlX2lkc1t4LmlkXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWR1cGVfaWRzW3guaWRdID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLm1hcCgodGVzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdfdGVzdCA9IE9iamVjdC5hc3NpZ24oe30sIHRlc3QpXG4gICAgICAgICAgICAgICAgbmV3X3Rlc3QuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgICAgICAgICBuZXdfdGVzdC5sYWJfaWQgPSBpZFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCBuZXdfdGVzdCwgdHJ1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgYm9va05vd0NsaWNrZWQoaWQsIHVybCA9ICcnKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJFeHRyYVRlc3RzKClcbiAgICAgICAgbGV0IHNsb3QgPSB7IHRpbWU6IHt9IH1cbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYlRpbWVTTG90KHNsb3QsIGZhbHNlKVxuICAgICAgICBsZXQgc2VsZWN0ZWRUeXBlID0ge1xuICAgICAgICAgICAgcl9waWNrdXA6ICdob21lJyxcbiAgICAgICAgICAgIHBfcGlja3VwOiAnaG9tZSdcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYkFwcG9pbnRtZW50VHlwZShzZWxlY3RlZFR5cGUpXG4gICAgICAgIHRoaXMubWVyZ2VUZXN0cyhpZClcblxuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfS9ib29raW5nP2xhYl9pZD0ke2lkfWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke2lkfS9ib29rYClcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGVzdEluZm8odGVzdF9pZCwgbGFiX2lkLCB0ZXN0X3VybCwgZXZlbnQpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkX3Rlc3RfaWRzID0gW11cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICBzZWxlY3RlZF90ZXN0X2lkcy5wdXNoKHZhbHVlLmlkKVxuICAgICAgICB9KVxuICAgICAgICB2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcbiAgICAgICAgdmFyIHNlYXJjaF9pZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic2VhcmNoX2lkXCIpO1xuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxhdCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRlc3RfdXJsICYmIHRlc3RfdXJsICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycgKyB0ZXN0X3VybCArICc/dGVzdF9pZHM9JyArIHRlc3RfaWQgKyAnJnNlbGVjdGVkX3Rlc3RfaWRzPScgKyBzZWxlY3RlZF90ZXN0X2lkcyArICcmc2VhcmNoX2lkPScgKyBzZWFyY2hfaWQgKyAnJmxhYl9pZD0nICsgbGFiX2lkICsgJyZsYXQ9JyArIGxhdCArICcmbG9uZz0nICsgbG9uZylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoL3Rlc3RpbmZvP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZzZWxlY3RlZF90ZXN0X2lkcz0nICsgc2VsZWN0ZWRfdGVzdF9pZHMgKyAnJnNlYXJjaF9pZD0nICsgc2VhcmNoX2lkICsgJyZsYWJfaWQ9JyArIGxhYl9pZCArICcmbGF0PScgKyBsYXQgKyAnJmxvbmc9JyArIGxvbmcpXG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ3Rlc3RJbmZvQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd0ZXN0LWluZm8tY2xpY2snLCAncGFnZVNvdXJjZSc6ICdsYWItcmVzdWx0LXBhZ2UnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG5cbiAgICBnb2xkQ2xpY2tlZCgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1ZpcEdvbGRDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndmlwLWdvbGQtY2xpY2tlZCcsICdzZWxlY3RlZElkJzogdGhpcy5wcm9wcy5kZXRhaWxzLmlkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9bGFiZ29sZGxpc3RpbmcmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCB7IHByaWNlLCBsYWIsIGRpc3RhbmNlLCBpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCwgbGFiX3RpbWluZywgbGFiX3RpbWluZ19kYXRhLCBtcnAsIG5leHRfbGFiX3RpbWluZywgbmV4dF9sYWJfdGltaW5nX2RhdGEsIGRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcywgcGlja3VwX2NoYXJnZXMsIGFkZHJlc3MsIG5hbWUsIGxhYl90aHVtYm5haWwsIG90aGVyX2xhYnMsIGlkLCB1cmwsIGhvbWVfcGlja3VwX2NoYXJnZXMsIGRpc2NvdW50ZWRfcHJpY2UsIGF2Z19yYXRpbmcsIHJhdGluZ19jb3VudCwgaW5zdXJhbmNlLCB2aXAsIGlzX3ZpcF9lbmFibGVkLCBpc19nb2xkIH0gPSB0aGlzLnByb3BzLmRldGFpbHM7XG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5jZWlsKGRpc3RhbmNlIC8gMTAwMCk7XG5cbiAgICAgICAgbGV0IHBpY2t1cF90ZXh0ID0gXCJcIlxuICAgICAgICBpZiAoaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQgJiYgZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzID09IDEpIHtcbiAgICAgICAgICAgIHBpY2t1cF90ZXh0ID0gXCJIb21lIHBpY2t1cCBjaGFyZ2VzIGFwcGxpY2FibGVcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkICYmICFkaXN0YW5jZV9yZWxhdGVkX2NoYXJnZXMpIHtcbiAgICAgICAgICAgIGlmIChob21lX3BpY2t1cF9jaGFyZ2VzID09IDApIHtcbiAgICAgICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiRnJlZSBob21lIHZpc2l0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBpY2t1cF90ZXh0ID0gXCJJbmNsdXNpdmUgb2YgaG9tZSB2aXNpdCBjaGFyZ2VzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByaWNlID0gcHJpY2UgKyBwaWNrdXBfY2hhcmdlc1xuICAgICAgICAgICAgZGlzY291bnRlZF9wcmljZSA9IGRpc2NvdW50ZWRfcHJpY2UgKyBwaWNrdXBfY2hhcmdlc1xuICAgICAgICAgICAgbXJwID0gbXJwICsgcGlja3VwX2NoYXJnZXNcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvZmZQZXJjZW50ID0gJydcbiAgICAgICAgaWYgKG1ycCAmJiAoZGlzY291bnRlZF9wcmljZSB8fCBkaXNjb3VudGVkX3ByaWNlID09IDApICYmIChkaXNjb3VudGVkX3ByaWNlIDwgbXJwKSkge1xuICAgICAgICAgICAgb2ZmUGVyY2VudCA9IHBhcnNlSW50KCgobXJwIC0gZGlzY291bnRlZF9wcmljZSkgLyBtcnApICogMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGlkZV9wcmljZSA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRlc3RfZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50ZXN0X2RhdGEubWFwKCh0ZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3QuaGlkZV9wcmljZSkge1xuICAgICAgICAgICAgICAgICAgICBoaWRlX3ByaWNlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNob3dfZGV0YWlsc0lkcyA9IFtdXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pc1Rlc3RJbmZvKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zaG93X2RldGFpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfZGV0YWlsc0lkcy5wdXNoKHZhbHVlLmlkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfaW5zdXJhbmNlX2J1eV9hYmxlID0gZmFsc2VcbiAgICAgICAgaWYgKGluc3VyYW5jZSAmJiBpbnN1cmFuY2UuaXNfaW5zdXJhbmNlX2NvdmVyZWQgJiYgaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCkge1xuICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSB0cnVlXG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnN1cmFuY2UgJiYgaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmICFpbnN1cmFuY2UuaXNfdXNlcl9pbnN1cmVkKSB7XG4gICAgICAgICAgICBpc19pbnN1cmFuY2VfYnV5X2FibGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcCA9IGlzX3ZpcF9lbmFibGVkXG4gICAgICAgIGxldCBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkID0gaXNfZ29sZFxuICAgICAgICBsZXQgaXNfdmlwX21lbWJlciA9IGZhbHNlXG4gICAgICAgIGxldCBpc19nb2xkX21lbWJlciA9IGZhbHNlXG4gICAgICAgIGxldCBjb3ZlcmVkX3VuZGVyX3ZpcCA9IGZhbHNlXG4gICAgICAgIGlmICh2aXAgJiYgT2JqZWN0LmtleXModmlwKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpc192aXBfbWVtYmVyID0gdmlwLmlzX3ZpcF9tZW1iZXJcbiAgICAgICAgICAgIGlzX2dvbGRfbWVtYmVyID0gdmlwLmlzX2dvbGRfbWVtYmVyXG4gICAgICAgICAgICBjb3ZlcmVkX3VuZGVyX3ZpcCA9IHZpcC5jb3ZlcmVkX3VuZGVyX3ZpcFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNob3dfY29tbW9uX3ByaWNlcyA9ICFpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAgfHwgKChpc19nb2xkX21lbWJlciB8fCBpc192aXBfbWVtYmVyKSAmJiAhY292ZXJlZF91bmRlcl92aXApXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2NDYXJkIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jQ2FyZC1jb250ZW50XCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvYy1kZXRhaWxzLWNvbnRhaW5lciBsYWJDYXJkVWlyZXNwb25zaXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2MtaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvJHt1cmx9YH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb2tOb3dDbGlja2VkKGlkLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlIG5hbWU9e25hbWV9IGhhc19pbWFnZT17ISFsYWJfdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXtuYW1lfSBjbGFzc05hbWU9XCJmbHRyLXVzci1pbWFnZS1sYWIgaHBsLWxvZ28tbmFtZVwiIHNyYz17bGFiX3RodW1ibmFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZnX3JhdGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA0IH19IGNsYXNzTmFtZT1cInJhdGluZy1zdGFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZ1N0YXJzIGF2ZXJhZ2VfcmF0aW5nPXthdmdfcmF0aW5nfSByYXRpbmdfY291bnQ9e3JhdGluZ19jb3VudCB8fCAnJ30gd2lkdGg9XCIxMHB4XCIgaGVpZ2h0PVwiMTBweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2MtY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvJHt1cmx9YH0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29rTm93Q2xpY2tlZChpZCwgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjc3RtRG9jTmFtZVwiPntuYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzICYmIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0cy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRldGFpbHMudGVzdHMubWFwKCh0ZXN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNob3dfZGV0YWlsc0lkcy5pbmRleE9mKHRoaXMucHJvcHMuZGV0YWlscy50ZXN0c1swXS5pZCkgPiAtMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMsIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0c1swXS5pZCwgaWQsIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0c1swXS51cmwpfT57dGVzdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAnbWFyZ2luTGVmdCc6ICc1cHgnLCBtYXJnaW5Ub3A6ICcxcHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9pY29ucy9JbmZvLnN2Zyd9IHN0eWxlPXt7IHdpZHRoOiAnMTVweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxwIGtleT17aW5kZXh9Pnt0ZXN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tbGFiLXRpbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjc3RtVGltZUltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1aWxkT3BlbkJhbm5lcihsYWJfdGltaW5nLCBsYWJfdGltaW5nX2RhdGEsIG5leHRfbGFiX3RpbWluZywgbmV4dF9sYWJfdGltaW5nX2RhdGEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGJvb2tpbmctY29sdW1uXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiB0aGlzLnN0YXRlLnNzckZsYWcgJiYgKGRpc2NvdW50ZWRfcHJpY2UgfHwgZGlzY291bnRlZF9wcmljZSA9PSAwKSAmJiAhaGlkZV9wcmljZSAmJiAhKChpc192aXBfbWVtYmVyIHx8IGlzX2dvbGRfbWVtYmVyKSAmJiBjb3ZlcmVkX3VuZGVyX3ZpcCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3N0bS1kb2MtcHJpY2VcIj5Eb2NwcmltZSBQcmljZTwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgIXNob3dfY29tbW9uX3ByaWNlcykgJiYgPENvbW1vblZpcEdvbGRCYWRnZSBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXA9e2lzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcH0gaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZD17aXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZH0gaXNfdmlwX21lbWJlcj17aXNfdmlwX21lbWJlcn0gaXNfZ29sZF9tZW1iZXI9e2lzX2dvbGRfbWVtYmVyfSBjb3ZlcmVkX3VuZGVyX3ZpcD17Y292ZXJlZF91bmRlcl92aXB9IHZpcF9kYXRhPXt2aXB9IHsuLi50aGlzLnByb3BzfSBtcnA9e21ycH0gZGlzY291bnRlZF9wcmljZT17ZGlzY291bnRlZF9wcmljZX0gZ29sZENsaWNrZWQ9eygpID0+IHRoaXMuZ29sZENsaWNrZWQoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgKGRpc2NvdW50ZWRfcHJpY2UgfHwgZGlzY291bnRlZF9wcmljZSA9PSAwKSAmJiAhaGlkZV9wcmljZSAmJiBzaG93X2NvbW1vbl9wcmljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGlzY291bnRlZF9wcmljZSAhPSBtcnBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkge2Rpc2NvdW50ZWRfcHJpY2V9PHNwYW4gY2xhc3NOYW1lPVwiY3N0bS1kb2MtY3V0LXByaWNlXCI+4oK5IHttcnB9IDwvc3Bhbj4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPVwiY3N0LWRvYy1wcmljZVwiPuKCuSB7ZGlzY291bnRlZF9wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGRpc2NvdW50ZWRfcHJpY2UgIT0gcHJpY2UgJiYgIWhpZGVfcHJpY2UgJiYgb2ZmUGVyY2VudCAmJiBvZmZQZXJjZW50ID4gMCAmJiBzaG93X2NvbW1vbl9wcmljZXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3N0bS1jcG5cIj57b2ZmUGVyY2VudH0lIE9mZiA8c3Bhbj48YnIgLz4oaW5jbHVkZXMgQ291cG9uKTwvc3Bhbj48L3A+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpc192aXBfYXBwbGljYWJsZSAmJiAhdmlwLmlzX2dvbGRfbWVtYmVyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZpcC5pc19nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3QtZG9jLXByaWNlXCI+4oK5IHswfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy12YWwtYnhcIj5Db3ZlcmVkIFVuZGVyIEluc3VyYW5jZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiBpc192aXBfYXBwbGljYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkge3ZpcC5pc19nb2xkX21lbWJlcj92aXAudmlwX2dvbGRfcHJpY2UrdmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQ6dmlwX2Ftb3VudH0gPHNwYW4gY2xhc3NOYW1lPVwiY3N0bS1kb2MtY3V0LXByaWNlXCI+4oK5IHttcnB9IDwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiBpc19lbmFibGVfZm9yX3ZpcCAmJiAhaXNfdmlwX2FwcGxpY2FibGU/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZFwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Ub3A6IDUsIG1hcmdpbkJvdHRvbTogNSwgcG9zaXRpb246ICdyZWxhdGl2ZScsIHpJbmRleDogMSB9fSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJWaXBTZWxlY3RlZFBsYW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWNsdWItZGV0YWlscz9zb3VyY2U9bGFibGlzdGluZyZsZWFkX3NvdXJjZT1Eb2NwcmltZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiQ2FyZFZJUENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItY2FyZC12aXAtY2xpY2tlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBncm4tdHh0LXZpcFwiPlNhdmUgMjUlIHdpdGg8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZpcGxvZy5wbmcnfSBzdHlsZT17eyB3aWR0aDogMTgsIG1hcmdpbkxlZnQ6IDQsIG1hcmdpblJpZ2h0OiAyIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9IHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgaXNfdmlwX2dvbGQgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlICYmIGRpc2NvdW50ZWRfcHJpY2U+KHZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fHwwICsgdmlwLnZpcF9nb2xkX3ByaWNlfHwwKSAmJiAhdmlwLmlzX2dvbGRfbWVtYmVyICYmIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kIGdvbGRDYXJkXCIgb25DbGljaz17KCkgPT4gdGhpcy5nb2xkQ2xpY2tlZCgpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPGltZyBjbGFzc05hbWU9XCJnbGQtY2QtaWNvblwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfS8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPHAgY2xhc3NOYW1lPVwiZ2xkLXAtcmNcIj5QcmljZTwvcD4gPHNwYW4gY2xhc3NOYW1lPVwiZ2xkLXJhdGUtbGZcIj7igrkge3ZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fHwwICsgdmlwLnZpcF9nb2xkX3ByaWNlfHwwfTwvc3Bhbj48aW1nIHN0eWxlPXt7dHJhbnNmb3JtOiAncm90YXRlKC05MGRlZyknLCB3aWR0aDogJzEwcHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhc2hvd19jb21tb25fcHJpY2VzKSAmJiA8Q29tbW9uVmlwR29sZE5vbkxvZ2luQmFkZ2UgaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwPXtpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXB9IGlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQ9e2lzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGR9IGlzX3ZpcF9tZW1iZXI9e2lzX3ZpcF9tZW1iZXJ9IGlzX2dvbGRfbWVtYmVyPXtpc19nb2xkX21lbWJlcn0gY292ZXJlZF91bmRlcl92aXA9e2NvdmVyZWRfdW5kZXJfdmlwfSB2aXBfZGF0YT17dmlwfSB7Li4udGhpcy5wcm9wc30gbXJwPXttcnB9IGRpc2NvdW50ZWRfcHJpY2U9e2Rpc2NvdW50ZWRfcHJpY2V9IGdvbGRDbGlja2VkPXsoKSA9PiB0aGlzLmdvbGRDbGlja2VkKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3N0bS1ib29rLWJ0blwiIG9uQ2xpY2s9e3RoaXMuYm9va05vd0NsaWNrZWQuYmluZCh0aGlzLCBpZCwgdXJsKX0+Qm9vayBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9idXlfYWJsZSAmJiB0aGlzLnByb3BzLmNvbW1vbl9zZXR0aW5ncyAmJiB0aGlzLnByb3BzLmNvbW1vbl9zZXR0aW5ncy5pbnN1cmFuY2VfYXZhaWxhYmlsaXR5P1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtYnV5YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJvb2sgdGhpcyBMYWIgZm9yIOKCuTAgd2l0aCBPUEQgSW5zdXJhbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y3Vyc29yOidwb2ludGVyJ319IG9uQ2xpY2s9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdLbm93TW9yZUxhYkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdrbm93LW1vcmUtbGFiLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9pbnN1cmFuY2UvaW5zdXJhbmNlLXBsYW5zP3NvdXJjZT1sYWItbGlzdGluZyZzaG93X2J1dHRvbj10cnVlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Lbm93IG1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG1DYXJkRm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bWZvb3RlckNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWNrdXBfdGV4dCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxNnB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jc3RtaG9tZS5zdmdcIn0gLz57cGlja3VwX3RleHR9PC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi1ybXZcIj48aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTBweCcsIG1hcmdpbkxlZnQ6ICczcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL25ldy1sb2MtaWNvLnN2Z1wifSAvPnthZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bURvY0xvY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jc3RtZGlzdC5zdmdcIn0gLz4ge2Rpc3RhbmNlfUttPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dCb29rVGVzdExpc3RDb250YWluZXIgbXQtcm12XCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyX2xhYnMgJiYgb3RoZXJfbGFicy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5vcGVuVmlld01vcmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd0Jvb2tUZXN0TGlzdCBiZy13aGl0ZS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcl9sYWJzLm1hcCgob2xhYiwgeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17eH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaG93Qm9va1Rlc3RMaXN0SW1nXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnLCB3aWR0aDogXCIxMnB4XCIgfX0gLz57b2xhYi5hZGRyZXNzfSB8IHtNYXRoLmNlaWwob2xhYi5kaXN0YW5jZSAvIDEwMDApfSBrbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2hvd0Jvb2tUZXN0TGlzdEJ0blwiIG9uQ2xpY2s9e3RoaXMuYm9va05vd0NsaWNrZWQuYmluZCh0aGlzLCBvbGFiLmlkLCBvbGFiLnVybCl9PkJvb2sgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyX2xhYnMgJiYgb3RoZXJfbGFicy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdHItY2FyZC1mb290ZXIgYmctd2hpdGUtbWFpblwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVmlld01vcmUuYmluZCh0aGlzKX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZThlOGU4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuVmlld01vcmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiBcIjhweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcHBCYXNlQ29sb3JcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMHB4JyB9fT5TaG93IGxlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiBcIjhweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcHBCYXNlQ29sb3JcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMHB4JyB9fT5WaWV3IHtvdGhlcl9sYWJzLmxlbmd0aH0gbW9yZSBsb2NhdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuVmlld01vcmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBtYXJnaW46ICc1cHgnIH19IGNsYXNzTmFtZT1cImFjcmQtc2hvd1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWFyZ2luOiAnNXB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY2FyZC1kbCBtYi0zXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmx0ci1jcmQtdG9wLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHRyLWxjdG4tZHRsc1wiIG9uQ2xpY2s9e3RoaXMuYm9va05vd0NsaWNrZWQuYmluZCh0aGlzLCBpZCwgdXJsKX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPHA+PGltZyBjbGFzc05hbWU9XCJmbHRyLWxvYy1pY29cIiBzcmM9XCIvYXNzZXRzL2ltZy9uZXctbG9jLWljby5zdmdcIiBzdHlsZT17eyB3aWR0aDogJzEycHgnLCBoZWlnaHQ6ICcxOHB4JyB9fSAvPjxzcGFuIGNsYXNzTmFtZT1cImZsdHItbG9jLXR4dFwiPnthZGRyZXNzfTwvc3Bhbj48c3Bhbj4mbmJzcDt8Jm5ic3A7e2Rpc3RhbmNlfSBLbTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMgbXJ0LTEwXCIgb25DbGljaz17dGhpcy5ib29rTm93Q2xpY2tlZC5iaW5kKHRoaXMsIGlkLCB1cmwpfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9IG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxhYi1mbHRyLWRjLW5hbWUgZnctNTAwIHRleHQtbWRcIj57bmFtZX08L2gyPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICFoaWRlX3ByaWNlICYmIG9mZlBlcmNlbnQgJiYgb2ZmUGVyY2VudCA+IDAgP1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRyLW9mZmVyIG9mci1yaWJib24gZnctNzAwXCI+e29mZlBlcmNlbnR9JSBPRkY8L3NwYW4+IDogJydcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTcgbXJ0LTEwXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLW5kLWR0bHNcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlIG5hbWU9e25hbWV9IGhhc19pbWFnZT17ISFsYWJfdGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbml0aWFsc1BpY3R1cmUtbHNcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbHRyLXVzci1pbWFnZS1sYWJcIiBzcmM9e2xhYl90aHVtYm5haWx9IC8+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzhweCcsIG1hcmdpblJpZ2h0OiAnOHB4JyB9fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0cyAmJiB0aGlzLnByb3BzLmRldGFpbHMudGVzdHMubGVuZ3RoID09IDEgPyA8cCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMCwgMCwgMClcIiwgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiA0MDAgfX0+e3RoaXMucHJvcHMuZGV0YWlscy50ZXN0c1swXS5uYW1lfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfZGV0YWlsc0lkcy5pbmRleE9mKHRoaXMucHJvcHMuZGV0YWlscy50ZXN0c1swXS5pZCkgPiAtMSA/IDxzcGFuIHN0eWxlPXt7ICdtYXJnaW5MZWZ0JzogJzVweCcsIG1hcmdpblRvcDogJzFweCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IG9uQ2xpY2s9e3RoaXMudGVzdEluZm8uYmluZCh0aGlzLCB0aGlzLnByb3BzLmRldGFpbHMudGVzdHNbMF0uaWQsIGlkLCB0aGlzLnByb3BzLmRldGFpbHMudGVzdHNbMF0udXJsKX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvaWNvbnMvaW5mby5zdmdcIiAvPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+IDogXCJcIlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGV0YWlscy50ZXN0cyAmJiB0aGlzLnByb3BzLmRldGFpbHMudGVzdHMubGVuZ3RoID09IDEgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzWzBdLm51bWJlcl9vZl90ZXN0cyAmJiB0aGlzLnByb3BzLmRldGFpbHMudGVzdHNbMF0ubnVtYmVyX29mX3Rlc3RzICE9IG51bGwgPyA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PjxoMyBjbGFzc05hbWU9XCJsYWItZmx0ci1kYy1uYW1lIGZ3LTUwMCBwa2ctaW5jbHVkZVwiPnt0aGlzLnByb3BzLmRldGFpbHMudGVzdHNbMF0ubnVtYmVyX29mX3Rlc3RzfSBUZXN0cyBJbmNsdWRlZDwvaDM+PC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzICYmIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0cy5sZW5ndGggPT0gMSAmJiB0aGlzLnByb3BzLmRldGFpbHMudGVzdHNbMF0uY2F0ZWdvcnlfZGV0YWlscyAmJiB0aGlzLnByb3BzLmRldGFpbHMudGVzdHNbMF0uY2F0ZWdvcnlfZGV0YWlscy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBtYXJnaW5Ub3A6ICc1cHgnIH19PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzWzBdLmNhdGVnb3J5X2RldGFpbHMubWFwKChjYXRlZ29yeV9kZXRhaWwsIGspID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwicGtnLWxpc3RpbmctdGlja1wiIGtleT17a30gaWQ9e2t9PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmx0ci1sb2MtaWNvXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY2hlY2tzLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogJzEycHgnLCBtYXJnaW5Ub3A6ICc2cHgnIH19IC8+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5X2RldGFpbC5jYXRlZ29yeX0gKHtjYXRlZ29yeV9kZXRhaWwuY291bnR9KVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTUgbXJ0LTEwIHRleHQtcmlnaHRcIiBzdHlsZT17eyBwYWRkaW5nbGVmdDogJzhweCcgfX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ZWRfcHJpY2UgJiYgIWhpZGVfcHJpY2UgPyA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNTAwIHRleHQtbGcgbXJiLTEwXCI+4oK5IHtkaXNjb3VudGVkX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cImZsdHItY3V0LXByaWNlXCIgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogJzFweCcgfX0+4oK5IHttcnB9PC9zcGFuPjwvcD4gOiBcIlwiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9wcmljZSA/IDxwIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmdy01MDAgdGV4dC1sZyBtcmItMTBcIj5GcmVlPC9wPiA6IFwiXCJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50ZWRfcHJpY2UgIT0gcHJpY2UgPyA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1vZmYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lnbnVwLW9mZi1kb2MtZ3JlZW5cIiBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0gPkluY2x1ZGVzIGNvdXBvbiBkaXNjb3VudDwvc3Bhbj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1ydC0xMFwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwiZmx0ci1jbnRjdC1idG4gYnRuLXBkbmdcIiAgb25DbGljaz17dGhpcy5vcGVuTGFiLmJpbmQodGhpcywgaWQsIHVybCl9ID5WaWV3IFByb2ZpbGU8L2J1dHRvbj4qL31cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmx0ci1ia25nLWJ0biBidG4tcGRuZ1wiPkJvb2sgTm93PC9idXR0b24+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRldGFpbHMudGVzdHMgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzLmxlbmd0aCA+PSAyID9cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbHRyLWxhYnMtdGVzdC1zZWxlY3RlZCBtcnQtMTBcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbHRyLXBydi1zZWxlY3RlZC10ZXN0XCI+VGVzdHMgU2VsZWN0ZWQ8L3NwYW4+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRldGFpbHMudGVzdHMubWFwKCh0ZXN0LCBpKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT1cImZsdHItc2xlY3RlZC10ZXN0XCIga2V5PXtpfT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFdlaWdodDogNDAwIH19Pnt0ZXN0Lm5hbWV9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19kZXRhaWxzSWRzLmluZGV4T2YodGVzdC5pZCkgPiAtMSA/XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgJ21hcmdpbkxlZnQnOiAnNXB4JywgbWFyZ2luVG9wOiAnMXB4JywgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMsIHRlc3QuaWQsIGlkLCB0ZXN0LnVybCl9PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL2luZm8uc3ZnXCIgLz5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDogJydcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX3ByaWNlID9cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCB9fT5GcmVlPC9wPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAgfX0+JiN4MjBCOTsge3Rlc3QuZGVhbF9wcmljZX0gPHNwYW4+JiN4MjBCOTsge3Rlc3QubXJwfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRyLWNhcmQtZm9vdGVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3doaXRlJyB9fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiBcIjhweFwiIH19PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcGlja3VwX3RleHQgPyA8cCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMHB4JyB9fT4qIHtwaWNrdXBfdGV4dH08L3A+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvY3VzdG9tZXItaWNvbnMvY2xvY2stYmxhY2suc3ZnXCIgLz5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19PntidWlsZE9wZW5CYW5uZXIobGFiX3RpbWluZywgbGFiX3RpbWluZ19kYXRhLCBuZXh0X2xhYl90aW1pbmcsIG5leHRfbGFiX3RpbWluZ19kYXRhKX08L3A+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd0Jvb2tUZXN0TGlzdENvbnRhaW5lclwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG90aGVyX2xhYnMgJiYgb3RoZXJfbGFicy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5vcGVuVmlld01vcmUgPyA8ZGl2IGNsYXNzTmFtZT1cInNob3dCb29rVGVzdExpc3RcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyX2xhYnMubWFwKChvbGFiLCB4KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXt4fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNob3dCb29rVGVzdExpc3RJbWdcIj4gPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9uZXctbG9jLWljby5zdmdcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcsIHdpZHRoOiBcIjEycHhcIiB9fSAvPntvbGFiLmFkZHJlc3N9IHwge01hdGguY2VpbChvbGFiLmRpc3RhbmNlIC8gMTAwMCl9IGttIDwvcD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2hvd0Jvb2tUZXN0TGlzdEJ0blwiIG9uQ2xpY2s9e3RoaXMuYm9va05vd0NsaWNrZWQuYmluZCh0aGlzLCBvbGFiLmlkLCBvbGFiLnVybCl9PkJvb2sgTm93PC9idXR0b24+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBvdGhlcl9sYWJzICYmIG90aGVyX2xhYnMubGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9XCJmaWx0ci1jYXJkLWZvb3RlclwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVmlld01vcmUuYmluZCh0aGlzKX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZThlOGU4JyB9fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuVmlld01vcmUgPyA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCI4cHhcIiB9fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcHBCYXNlQ29sb3JcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMHB4JyB9fT5TaG93IGxlc3M8L3A+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCI4cHhcIiB9fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXBwQmFzZUNvbG9yXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzBweCcgfX0+VmlldyB7b3RoZXJfbGFicy5sZW5ndGh9IG1vcmUgbG9jYXRpb25zPC9wPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlblZpZXdNb3JlID8gPGltZyBzdHlsZT17eyBtYXJnaW46ICc1cHgnIH19IGNsYXNzTmFtZT1cImFjcmQtc2hvd1wiIHNyYz1cIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wiIC8+IDogPGltZyBzdHlsZT17eyBtYXJnaW46ICc1cHgnIH19IGNsYXNzTmFtZT1cIlwiIHNyYz1cIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Z1wiIC8+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiUHJvZmlsZUNhcmQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgc2VsZWN0TG9jYXRpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IExvY2F0aW9uUG9wdXBWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9sb2NhdGlvblBvcHVwL2luZGV4LmpzJ1xuXG5jbGFzcyBMb2NhdGlvblBvcHVwQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgICByb3V0ZXI6ICgpID0+IG51bGxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMb2NhdGlvblBvcHVwVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgbG9jYXRpb25UeXBlXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGxvY2F0aW9uVHlwZVxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0TG9jYXRpb246IChsb2NhdGlvbiwgdHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0TG9jYXRpb24obG9jYXRpb24sIHR5cGUpKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2NhdGlvblBvcHVwQ29udGFpbmVyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=