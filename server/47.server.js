exports.ids = [47];
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

/***/ "./dev/js/components/diagnosis/commons/labProfileCard/packageProfileCard.js":
/*!**********************************************************************************!*\
  !*** ./dev/js/components/diagnosis/commons/labProfileCard/packageProfileCard.js ***!
  \**********************************************************************************/
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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _commonVipGoldBadge = __webpack_require__(/*! ../../../commons/commonVipGoldBadge.js */ "./dev/js/components/commons/commonVipGoldBadge.js");

var _commonVipGoldBadge2 = _interopRequireDefault(_commonVipGoldBadge);

var _commonVipGoldNonLoginBadge = __webpack_require__(/*! ../../../commons/commonVipGoldNonLoginBadge.js */ "./dev/js/components/commons/commonVipGoldNonLoginBadge.js");

var _commonVipGoldNonLoginBadge2 = _interopRequireDefault(_commonVipGoldNonLoginBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LabProfileCard extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    openLab(id, url, test_id, test_name, e) {
        this.props.clearExtraTests();
        let testIds = test_id;
        // let dedupe_ids = {}
        // let testIds = this.props.selectedCriterias
        //     .reduce((final, x) => {
        //         final = final || []
        //         if (x.test && x.type == "condition") {
        //             x.test = x.test || []
        //             final = [...final, ...x.test]
        //         } else if (x.type == "test") {
        //             final.push(x)
        //         }
        //         return final
        //     }, [])
        //     .filter((x) => {
        //         if (dedupe_ids[x.id]) {
        //             return false
        //         } else {
        //             dedupe_ids[x.id] = true
        //             return true
        //         }
        //     }).map((test) => {
        //         let new_test = Object.assign({}, test)
        //         new_test.extra_test = true
        //         new_test.lab_id = id
        //         this.props.toggleDiagnosisCriteria('test', new_test, true)
        //     })
        let new_test = {};
        new_test.extra_test = true;
        new_test.lab_id = id;
        new_test.type = 'test';
        new_test.name = test_name;
        new_test.id = test_id;
        this.props.toggleDiagnosisCriteria('test', new_test, true);
        let data = {
            'Category': 'ConsumerApp', 'Action': 'RankOfLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'rank-lab-clicked', 'Rank': this.props.rank + 1
        };
        _gtm2.default.sendEvent({ data: data });

        data = {
            'Category': 'ConsumerApp', 'Action': 'LabSelectedByUser', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-selected-by-user', 'LabId': id
        };
        _gtm2.default.sendEvent({ data: data });
        if (e.ctrlKey || e.metaKey) {} else {
            e.preventDefault();

            if (url) {
                this.props.history.push(`/${url}`);
            } else {
                this.props.history.push(`/lab/${id}`);
            }
        }
    }

    bookNowClicked(id, url, test_id, test_name, e) {
        let slot = { time: {} };
        this.props.clearExtraTests();
        this.props.selectLabTimeSLot(slot, false);
        let selectedType = {
            r_pickup: 'home',
            p_pickup: 'home'
        };
        this.props.selectLabAppointmentType(selectedType);

        let new_test = {};
        new_test.extra_test = true;
        new_test.lab_id = id;
        new_test.type = 'test';
        new_test.name = test_name;
        new_test.id = test_id;
        this.props.toggleDiagnosisCriteria('test', new_test, true);
        let data = {
            'Category': 'ConsumerApp', 'Action': 'RankOfLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'rank-lab-clicked', 'Rank': this.props.rank + 1
        };
        _gtm2.default.sendEvent({ data: data });

        data = {
            'Category': 'ConsumerApp', 'Action': 'LabSelectedByUser', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-selected-by-user', 'LabId': id
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.clearVipSelectedPlan();
        this.props.history.push(`/lab/${id}/book`);
    }

    testInfo(test_id, lab_id, test_url, isCategory, event) {
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
            this.props.history.push('/' + test_url + '?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&search_id=' + search_id + '&lab_id=' + lab_id + '&lat=' + lat + '&long=' + long + '&isCategory=' + isCategory);
        } else {
            this.props.history.push('/search/testinfo?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&search_id=' + search_id + '&lab_id=' + lab_id + '&lat=' + lat + '&long=' + long + '&isCategory=' + isCategory);
        }
        event.preventDefault();
        event.stopPropagation();
        let data = {
            'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'lab-test-page'
        };
        _gtm2.default.sendEvent({ data: data });
    }

    toggleCompare(id, lab_id, lab_thumbnail, name) {
        let selectedPkgCompareIds = [];
        if (this.props.compare_packages) {
            this.props.compare_packages.map((packages, i) => {
                selectedPkgCompareIds.push(packages.id);
            });
        }
        if (selectedPkgCompareIds.indexOf(id) == -1 && selectedPkgCompareIds.length >= 5) {
            _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Max 5 packages can be compared" });
        } else {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'AddedToCompare', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'added-to-compare', 'LabId': lab_id, 'testId': id
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.toggleComparePackages(id, lab_id, lab_thumbnail, name);
        }
    }

    goldClicked() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'VipGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-package-gold-clicked'
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push('/vip-gold-details?is_gold=true&source=packagegoldlisting&lead_source=Docprime');
    }

    render() {
        let { discounted_price, price, lab, distance, pickup_available, lab_timing, lab_timing_data, mrp, next_lab_timing, next_lab_timing_data, distance_related_charges, pickup_charges, name, id, number_of_tests, show_details, categories, category_details, address, included_in_user_plan, insurance, vip } = this.props.details;
        distance = Math.ceil(distance / 1000);
        var openingTime = '';
        if (this.props.details.lab_timing) {
            openingTime = this.props.details.lab_timing.split('-')[0];
        }

        let pickup_text = "";
        if (pickup_available == 1 && distance_related_charges == 1) {
            pickup_text = "Home pickup charges applicable";
        }

        if (pickup_available == 1 && !distance_related_charges) {
            pickup_text = "Inclusive of home visit charges";
            discounted_price = parseInt(discounted_price) + parseInt(pickup_charges);
        }

        if (pickup_available == 0) {
            pickup_text = "Center visit required";
        }

        let hide_price = false;
        // if (this.props.selectedCriterias && this.props.selectedCriterias.length) {
        //     this.props.selectedCriterias.map((x) => {
        //         if (x.hide_price) {
        //             hide_price = true
        //         }
        //     })
        // }
        let offPercent = '';
        if (mrp && discounted_price && discounted_price < mrp) {
            offPercent = parseInt((mrp - discounted_price) / mrp * 100);
        }

        if (included_in_user_plan) {
            hide_price = true;
        }
        let selectedPkgCompareIds = [];
        if (this.props.compare_packages) {
            this.props.compare_packages.map((packages, i) => {
                selectedPkgCompareIds.push(packages.id, packages.lab_id);
            });
        }
        let is_insurance_applicable = false;
        if (insurance && insurance.is_insurance_covered && insurance.is_user_insured) {
            is_insurance_applicable = true;
        }
        // let is_vip_applicable = vip.is_vip_member && vip.covered_under_vip
        // let vip_amount = vip.vip_amount

        let is_vip_applicable = false;
        let vip_amount;
        let is_enable_for_vip = false;
        let is_vip_gold = false;

        if (vip && Object.keys(vip).length > 0) {
            is_vip_applicable = vip.is_vip_member && vip.covered_under_vip;
            vip_amount = vip.vip_amount;
            is_vip_gold = vip.is_gold_member;
        }

        let is_labopd_enable_for_vip = vip.is_enable_for_vip;
        let is_labopd_enable_for_gold = vip.is_gold;
        let is_vip_member = vip.is_vip_member;
        let is_gold_member = vip.is_gold_member;
        let covered_under_vip = vip.covered_under_vip;

        let show_common_prices = !is_labopd_enable_for_vip || (is_gold_member || is_vip_member) && !covered_under_vip;

        return _react2.default.createElement(
            'div',
            { className: 'pkg-card-container mb-3' },
            !this.props.isCompared && (this.props.isCompare || this.props.compare_packages.length > 0) ? _react2.default.createElement(
                'div',
                { className: selectedPkgCompareIds.indexOf(id) > -1 && selectedPkgCompareIds.indexOf(lab.id) > -1 ? 'pkg-crd-header pkg-crd-green ' : 'pkg-crd-header ', style: { padding: '5px' } },
                _react2.default.createElement(
                    'label',
                    { className: 'ck-bx' },
                    selectedPkgCompareIds.indexOf(id) > -1 && selectedPkgCompareIds.indexOf(lab.id) > -1 ? 'Added' : 'Add to compare',
                    _react2.default.createElement('input', { type: 'checkbox', onClick: this.toggleCompare.bind(this, id, lab.id, lab.lab_thumbnail, name), checked: selectedPkgCompareIds.indexOf(id) > -1 && selectedPkgCompareIds.indexOf(lab.id) > -1 ? true : false }),
                    _react2.default.createElement('span', { className: 'checkmark' })
                )
            ) : '',
            _react2.default.createElement(
                'div',
                { className: 'pkg-content-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'pkg-card-content m-0', style: { paddingBottom: 10 } },
                    _react2.default.createElement(
                        'div',
                        { className: 'row no-gutters' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-8' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pkg-cardleft-img nw-pkg-crd-img' },
                                _react2.default.createElement(
                                    _initialsPicture2.default,
                                    { name: lab.name, has_image: !!lab.lab_thumbnail, className: 'initialsPicture-ls' },
                                    _react2.default.createElement('img', { className: 'fltr-usr-image-lab', src: lab.lab_thumbnail })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'thy-sub-icon' },
                                    pickup_available == 1 && distance_related_charges == 0 && lab.is_home_collection_enabled && lab.home_pickup_charges == 0 ? _react2.default.createElement(
                                        'div',
                                        { className: 'test-pkup' },
                                        _react2.default.createElement('img', { src: "/assets" + "/img/laby1.svg" }),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Free Sample ',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'tstblk' },
                                                'Collection'
                                            )
                                        )
                                    ) : '',
                                    lab && lab.is_thyrocare ? _react2.default.createElement(
                                        'div',
                                        { className: 'test-pkup' },
                                        _react2.default.createElement('img', { src: "/assets" + "/img/laby3.svg" }),
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            'Integrated ',
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'tstblk' },
                                                'Lab'
                                            )
                                        )
                                    ) : ''
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { href: `/${this.props.details.url || ''}`, onClick: this.testInfo.bind(this, id, this.props.details.lab.id, this.props.details.url ? this.props.details.url : '', false) },
                                _react2.default.createElement(
                                    'h2',
                                    { className: 'pkg-labDoc-Name' },
                                    name,
                                    ' ',
                                    show_details ? _react2.default.createElement(
                                        'span',
                                        { style: { 'marginLeft': '5px', marginTop: '2px', display: 'inline-block', cursor: 'pointer' }, onClick: this.testInfo.bind(this, id, this.props.details.lab.id, this.props.details.url ? this.props.details.url : '', false)
                                            // this.props.history.push(`/${this.props.details.url || ''}`)
                                        },
                                        _react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/Info.svg', style: { width: '15px' } })
                                    ) : ''
                                )
                            ),
                            number_of_tests > 0 ? _react2.default.createElement(
                                'h3',
                                { className: 'lab-fltr-dc-name fw-500 pkg-include', style: { fontSize: '12px' } },
                                number_of_tests ? `${number_of_tests} Tests Included` : ''
                            ) : ''
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4 booking-column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pkg-card-price text-right' },
                                (!is_vip_applicable || !vip.is_gold_member) && false ? _react2.default.createElement(
                                    'p',
                                    { className: 'dc-prc' },
                                    'Docprime Price'
                                ) : '',
                                !is_insurance_applicable && !show_common_prices ? _react2.default.createElement(_commonVipGoldBadge2.default, _extends({ is_labopd_enable_for_vip: is_labopd_enable_for_vip, is_labopd_enable_for_gold: is_labopd_enable_for_gold, is_vip_member: is_vip_member, is_gold_member: is_gold_member, covered_under_vip: covered_under_vip, vip_data: vip }, this.props, { mrp: mrp, discounted_price: discounted_price, goldClicked: this.goldClicked.bind(this), is_package: true })) : '',
                                !is_insurance_applicable && !hide_price && discounted_price && show_common_prices ? parseInt(discounted_price) != parseInt(mrp) ? _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    '\u20B9 ',
                                    parseInt(discounted_price),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'pkg-cut-price' },
                                        '\u20B9 ',
                                        parseInt(mrp)
                                    )
                                ) : _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    '\u20B9 ',
                                    parseInt(discounted_price)
                                ) : '',
                                hide_price ? _react2.default.createElement(
                                    'p',
                                    { className: 'fw-500' },
                                    '\u20B9 0'
                                ) : "",
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
                                !is_insurance_applicable && !hide_price && offPercent && offPercent > 0 && show_common_prices ? _react2.default.createElement(
                                    'p',
                                    { className: 'dc-cpn-include' },
                                    offPercent,
                                    '% Off',
                                    !is_insurance_applicable && !included_in_user_plan && discounted_price != price ? _react2.default.createElement(
                                        'span',
                                        null,
                                        '(includes Coupon)'
                                    ) : ''
                                ) : ''
                            ),
                            !is_insurance_applicable && !show_common_prices ? _react2.default.createElement(_commonVipGoldNonLoginBadge2.default, _extends({ is_labopd_enable_for_vip: is_labopd_enable_for_vip, is_labopd_enable_for_gold: is_labopd_enable_for_gold, is_vip_member: is_vip_member, is_gold_member: is_gold_member, covered_under_vip: covered_under_vip, vip_data: vip }, this.props, { mrp: mrp, discounted_price: discounted_price, goldClicked: this.goldClicked.bind(this), is_package: true })) : '',
                            _react2.default.createElement(
                                'a',
                                { href: `/${this.props.details.lab.url}`, onClick: e => e.preventDefault() },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'pkg-btn-nw', style: { width: '100%', marginBottom: 0 }, onClick: this.bookNowClicked.bind(this, this.props.details.lab.id, this.props.details.lab.url, id, name) },
                                    'Book Now'
                                )
                            ),
                            included_in_user_plan && !is_insurance_applicable ? _react2.default.createElement(
                                'p',
                                { className: 'pkg-discountCpn' },
                                'Docprime Care Benefit'
                            ) : ''
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pkg-includes-container' },
                    category_details && category_details.length > 0 ? _react2.default.createElement(
                        'ul',
                        null,
                        category_details.map((category_detail, k) => {
                            return _react2.default.createElement(
                                'li',
                                { className: 'pkgIncludeList', key: k, id: k, style: { cursor: 'pointer' }, onClick: this.testInfo.bind(this, id, this.props.details.lab.id, this.props.details.url ? this.props.details.url : '', true) },
                                category_detail.icon ? _react2.default.createElement('img', { style: { width: '20px', marginRight: '5px' }, src: category_detail.icon }) : '',
                                _react2.default.createElement(
                                    'span',
                                    { className: 'fw-500' },
                                    category_detail.name,
                                    ' ',
                                    category_detail.parameter_count > 1 ? `(${category_detail.parameter_count})` : '',
                                    ' '
                                )
                            );
                        })
                    ) : ''
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'pkg-crd-foot-img-text pkg-new-time-sl' },
                    _react2.default.createElement('img', { src: "/assets" + "/img/watch-date.svg", style: { marginTop: '0px', width: '15px' } }),
                    _react2.default.createElement(
                        'p',
                        null,
                        (0, _utils.buildOpenBanner)(lab_timing, lab_timing_data, next_lab_timing, next_lab_timing_data)
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'cstmCardFooter' },
                _react2.default.createElement(
                    'div',
                    { className: 'pkg-crd-foot-img-text' },
                    _react2.default.createElement('img', { src: "/assets" + "/img/new-loc-ico.svg", style: { width: '10px' } }),
                    _react2.default.createElement(
                        'p',
                        null,
                        lab.locality,
                        ' ',
                        lab.city
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'cstmDocLoc' },
                    _react2.default.createElement(
                        'p',
                        { className: '' },
                        _react2.default.createElement('img', { src: "/assets" + "/img/cstmdist.svg" }),
                        distance,
                        ' km'
                    )
                )
            )
        );
    }
}

exports.default = LabProfileCard;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchPackages/SearchPackagesView.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchPackages/SearchPackagesView.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../searchPackages/packagesList/index.js */ "./dev/js/components/diagnosis/searchPackages/packagesList/index.js");

var _index2 = _interopRequireDefault(_index);

var _criteriaSearch = __webpack_require__(/*! ../../commons/criteriaSearch */ "./dev/js/components/commons/criteriaSearch/index.js");

var _criteriaSearch2 = _interopRequireDefault(_criteriaSearch);

var _newTopBar = __webpack_require__(/*! ./topBar/newTopBar.js */ "./dev/js/components/diagnosis/searchPackages/topBar/newTopBar.js");

var _newTopBar2 = _interopRequireDefault(_newTopBar);

var _index3 = __webpack_require__(/*! ../../../helpers/navigate/index.js */ "./dev/js/helpers/navigate/index.js");

var _index4 = _interopRequireDefault(_index3);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _footer = __webpack_require__(/*! ../../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _result_count = __webpack_require__(/*! ./topBar/result_count.js */ "./dev/js/components/diagnosis/searchPackages/topBar/result_count.js");

var _result_count2 = _interopRequireDefault(_result_count);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _nonIpdPopup = __webpack_require__(/*! ../../commons/nonIpdPopup.js */ "./dev/js/components/commons/nonIpdPopup.js");

var _nonIpdPopup2 = _interopRequireDefault(_nonIpdPopup);

var _storage = __webpack_require__(/*! ../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class SearchPackagesView extends _react2.default.Component {
    constructor(props) {
        super(props);
        let seoData = null;
        let footerData = null;
        if (this.props.initialServerData) {
            seoData = this.props.initialServerData.seoData;
            footerData = this.props.initialServerData.footerData;
        }
        const parsed = queryString.parse(this.props.location.search);
        this.state = {
            seoData, footerData,
            showError: false,
            showChatWithus: false,
            isScroll: true,
            isCompare: false,
            quickFilter: {},
            showNonIpdPopup: parsed.show_popup,
            to_be_force: 1,
            is_lead_enabled: true
        };
    }

    componentDidMount() {
        if (true) {
            this.getLabList(this.props);
        }
        const parsed = queryString.parse(this.props.location.search);
        if (this.state.seoFriendly) {
            this.props.getFooterData(this.props.match.url.split('/')[1]).then(footerData => {
                if (footerData) {
                    this.setState({ footerData: footerData });
                }
            });
        }

        if (window) {
            window.scrollTo(0, 0);
        }

        try {
            // save utm params if exists
            if (parsed.utm_source && parsed.utm_source == 'OfflineAffiliate') {
                let sessionId = Math.floor(Math.random() * 103) * 21 + 1050;
                if (sessionStorage) {
                    sessionStorage.setItem('sessionIdVal', sessionId);
                }
                let spo_tags = {
                    utm_tags: {
                        utm_source: parsed.utm_source || '',
                        utm_term: parsed.utm_term || '',
                        utm_medium: parsed.utm_medium || '',
                        utm_campaign: parsed.utm_campaign || ''
                    },
                    time: new Date().getTime(),
                    currentSessionId: sessionId
                };
                this.props.setCommonUtmTags('spo', spo_tags);
            }
        } catch (e) {}

        //Clear Utm tags for SPO, after 15 minutes
        let currentTime = new Date().getTime();
        if (sessionStorage && sessionStorage.getItem('sessionIdVal') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(x => x.type == 'spo').length) {

            let spo_tags = this.props.common_utm_tags.filter(x => x.type == 'spo')[0];
            let sessionVal = parseInt(sessionStorage.getItem('sessionIdVal'));
            if (spo_tags.time && sessionVal == parseInt(spo_tags.currentSessionId)) {
                let time_offset = (currentTime - spo_tags.time) / 60000;
                //Clear SPO utm tags after 15minutes
                //900
                if (time_offset > 180) {
                    // remove spo utm params if exists
                    this.props.unSetCommonUtmTags('spo');
                }
            }
        }

        this.setState({ showChatWithus: true });
    }

    componentWillReceiveProps(props) {
        if (props.fetchNewResults && props.fetchNewResults != this.props.fetchNewResults) {
            this.getLabList(props);
            // if (window) {
            //     window.scrollTo(0, 0)
            // }
        } else {
            if (props.selectedLocation != this.props.selectedLocation) {
                let new_url = this.buildURI(props);
                this.props.history.replace(new_url);
            }
        }
    }

    getLocationParam(tag) {
        // this API assumes the context of react-router-4
        const paramString = this.props.location.search;
        const params = new URLSearchParams(paramString);
        return params.get(tag);
    }

    getLabList(state = null, page = null, cb = null) {
        const parsed = queryString.parse(this.props.location.search);
        if (page === null) {
            page = this.props.page;
        }
        if (!state) {
            state = this.props;
        } else if (state.page) {
            page = state.page;
        }
        let extra_params = {};

        if (parsed.utm_term) {
            extra_params.utm_term = parsed.utm_term || "";
        }

        if (parsed.utm_medium) {
            extra_params.utm_medium = parsed.utm_medium || "";
        }

        if (parsed.utm_campaign) {
            extra_params.utm_campaign = parsed.utm_campaign || "";
        }

        if (parsed.utm_source) {
            extra_params.utm_source = parsed.utm_source || "";
        }
        this.props.getPackages(state, page, false, null, extra_params, (...args) => {
            //get searched packages result
            // this.setState({ seoData: args[1] })
            if (cb) {
                cb(...args);
            } else {
                let new_url = this.buildURI(state);
                this.props.history.replace(new_url);
            }
        }).catch(e => {
            this.setState({ showError: true });
        });
    }

    applyFilters(filterState) {
        // apply filters
        // this.props.mergeLABState({ filterCriteria: filterState })
        this.resetQuickFilters();
        this.props.mergeLABState({ filterCriteriaPackages: filterState });
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    resetQuickFilters() {
        this.setState({ quickFilter: {} });
    }

    applyCategories(categoryState, filterstate) {
        // apply category filter
        let newCategoryState = {};
        newCategoryState['catIds'] = categoryState;

        /*newCategoryState['distanceRange']=filterstate.distanceRange
        newCategoryState['priceRange']=filterstate.priceRange
        newCategoryState['sort_on']=filterstate.sort_on
        newCategoryState['max_price'] = filterstate.max_price
        
        */
        newCategoryState['sort_on'] = filterstate.sort_on;
        newCategoryState['sort_order'] = filterstate.sort_order;
        newCategoryState['avg_ratings'] = filterstate.avg_ratings;
        newCategoryState['home_visit'] = filterstate.home_visit;
        newCategoryState['lab_visit'] = filterstate.lab_visit;
        newCategoryState['max_age'] = filterstate.max_age;
        newCategoryState['min_age'] = filterstate.min_age;
        newCategoryState['gender'] = filterstate.gender;
        newCategoryState['packageType'] = filterstate.packageType;
        newCategoryState['test_ids'] = filterstate.test_ids;
        newCategoryState['package_ids'] = filterstate.package_ids;

        // this.props.mergeLABState({ filterCriteria: newCategoryState })
        this.props.mergeLABState({ filterCriteriaPackages: newCategoryState });
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    comparePackage() {
        // to compare differnt packages 
        let data = {
            'Category': 'ConsumerApp', 'Action': 'CompareButton', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'compare-button-click'
        };
        _gtm2.default.sendEvent({ data: data });
        if (this.props.packagesList.count == 1) {
            if (this.props.packagesList.result) {
                let packages = {};
                let selectedPkgCompareIds = [];
                packages.id = this.props.packagesList.result[0].id;
                packages.lab_id = this.props.packagesList.result[0].lab.id;
                packages.img = this.props.packagesList.result[0].lab.lab_thumbnail;
                packages.name = this.props.packagesList.result[0].name;
                this.props.togglecompareCriteria(packages);
                if (this.props.compare_packages && this.props.compare_packages.length > 0) {
                    this.props.compare_packages.map((packages, i) => {
                        if (packages.id != this.props.packagesList.result[0].id && packages.lab_id != this.props.packagesList.result[0].lab.id) {
                            selectedPkgCompareIds.push(packages.id + '-' + packages.lab_id);
                        }
                    });
                }
                selectedPkgCompareIds.push(this.props.packagesList.result[0].id + '-' + this.props.packagesList.result[0].lab.id);
                this.props.history.push('/package/compare?package_ids=' + selectedPkgCompareIds);
            }
        } else {
            this.setState({ isCompare: !this.state.isCompare }, () => {
                if (this.props.compare_packages && this.props.compare_packages.length > 0) {
                    this.props.resetPkgCompare();
                }
            });
        }
    }

    toggleComparePackages(packageId, labId, pckImg, pckName) {
        // toggle packages for comparision
        let packages = {};
        packages.id = packageId;
        packages.lab_id = labId;
        packages.img = pckImg;
        packages.name = pckName;
        this.props.togglecompareCriteria(packages);
    }

    buildURI(state) {
        // build url with differnt params or differnt filters
        let { selectedLocation, currentSearchedCriterias, filterCriteria, locationType, filterCriteriaPackages, page } = state;
        // let testIds = selectedCriterias.filter(x => x.type == 'test').map(x => x.id)
        let lat = 28.644800;
        let long = 77.216721;
        let place_id = "";

        if (selectedLocation) {
            place_id = selectedLocation.place_id || "";
            lat = selectedLocation.geometry.location.lat;
            long = selectedLocation.geometry.location.lng;
            if (typeof lat === 'function') lat = lat();
            if (typeof long === 'function') long = long();

            lat = parseFloat(parseFloat(lat).toFixed(6));
            long = parseFloat(parseFloat(long).toFixed(6));
        }

        let cat_ids = filterCriteriaPackages.catIds || "";

        /*let min_distance = filterCriteriaPackages.distanceRange[0]
        let max_distance = filterCriteriaPackages.distanceRange[1]
        let min_price = filterCriteriaPackages.priceRange[0]
        let max_price = filterCriteriaPackages.priceRange[1]
        */
        let sort_on = filterCriteriaPackages.sort_on || "";
        let sort_order = filterCriteriaPackages.sort_order || "";
        let avg_ratings = filterCriteriaPackages.avg_ratings || "";
        let home_visit = filterCriteriaPackages.home_visit || false;
        let lab_visit = filterCriteriaPackages.lab_visit || false;
        let lab_name = filterCriteriaPackages.lab_name || "";
        let network_id = filterCriteriaPackages.network_id || "";
        let max_age = filterCriteriaPackages.max_age || "";
        let min_age = filterCriteriaPackages.min_age || "";
        let gender = filterCriteriaPackages.gender || "";
        let package_type = filterCriteriaPackages.packageType || "";
        let test_ids = filterCriteriaPackages.test_ids || "";
        let package_ids = filterCriteriaPackages.package_ids || "";
        // let package_category_ids = filterCriteriaPackages.package_category_ids || ""

        let url;
        const parsed = queryString.parse(this.props.location.search);
        let package_category_ids = parsed.package_category_ids;
        if (this.props.forTaxSaver) {
            url = `${window.location.pathname}?lat=${lat}&long=${long}`;
        } else {
            url = `${window.location.pathname}?lat=${lat}&long=${long}&sort_on=${sort_on}&sort_order=${sort_order}&avg_ratings=${avg_ratings}&home_visit=${home_visit}&lab_visit=${lab_visit}&lab_name=${lab_name}&place_id=${place_id}&locationType=${locationType || ""}&network_id=${network_id}&category_ids=${cat_ids}&min_age=${min_age}&max_age=${max_age}&gender=${gender}&package_type=${package_type}&test_ids=${test_ids}&package_ids=${package_ids}`;
        }

        if (page > 1) {
            url += `&page=${page}`;
        }

        if (parsed.package_category_ids) {
            url += `&package_category_ids=${package_category_ids}`;
        }

        if (parsed.scrollbyid) {
            let scrollby_test_id = parseInt(parsed.scrollbyid);
            let scrollby_lab_id = parseInt(parsed.scrollbylabid);
            // url += `&scrollbyid=${scrollby_test_id || ""}&scrollbylabid=${scrollby_lab_id || ""}`
            url += `&scrollbyid=${scrollby_test_id || ""}`;
        }

        if (parsed.isComparable) {
            url += '&isComparable=true';
        }

        if (parsed.utm_term) {
            url += `&utm_term=${parsed.utm_term || ""}`;
        }

        if (parsed.utm_medium) {
            url += `&utm_medium=${parsed.utm_medium || ""}`;
        }

        if (parsed.utm_campaign) {
            url += `&utm_campaign=${parsed.utm_campaign || ""}`;
        }

        if (parsed.utm_source) {
            url += `&utm_source=${parsed.utm_source || ""}`;
        }

        if (this.state.showNonIpdPopup) {
            url += `${'&show_popup=' + this.state.showNonIpdPopup}`;
        }

        return url;
    }

    getMetaTagsData(seoData) {
        let title = "Lab Search";
        if (this.state.seoFriendly) {
            title = "";
        }
        let description = "";
        if (seoData) {
            title = seoData.title || "";
            description = seoData.description || "";
        }
        return { title, description };
    }

    applyQuickFilter(filter) {
        this.setState({ quickFilter: filter });
    }

    nonIpdLeads(phone_number) {
        // create of non ipd packages leads
        const parsed = queryString.parse(this.props.location.search);
        let package_name = null;
        if (this.props.packagesList && this.props.packagesList.result && this.props.packagesList.result.length > 1) {
            package_name = this.props.packagesList.result[0].name;
        } else {
            package_name = 'Health Packages';
        }
        let data = { phone_number: phone_number, lead_source: 'Labads', source: parsed, lead_type: 'LABADS', test_name: package_name, exitpoint_url: 'http://docprime.com' + this.props.location.pathname };
        if (this.props.common_utm_tags && this.props.common_utm_tags.length) {
            data.utm_tags = this.props.common_utm_tags.filter(x => x.type == "common_xtra_tags")[0].utm_tags;
        }
        let visitor_info = _gtm2.default.getVisitorInfo();
        if (visitor_info && visitor_info.visit_id) {
            data.visit_id = visitor_info.visit_id;
            data.visitor_id = visitor_info.visitor_id;
        }
        let gtm_data = {
            'Category': 'ConsumerApp', 'Action': 'NonIpdPackageListingSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'non-ipd-package-listing-submit-click'
        };
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
                'Category': 'ConsumerApp', 'Action': 'NonIpdPackageListingCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'non-ipd-package-listing-cross-click'
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState({ to_be_force: 0 });
        }
    }

    render() {
        let self = this;
        const parsed = queryString.parse(this.props.location.search);
        if (this.state.isScroll) {
            let scrollby_test_id = parseInt(parsed.scrollbyid);
            let scrollby_lab_id = parseInt(parsed.scrollbylabid);
            // let url_id= `scrollById_${scrollby_test_id}_${scrollby_lab_id}`
            let url_id = `scrollById_${scrollby_test_id}`;
            if (typeof window == "object" && typeof document == "object" && document.getElementById(url_id)) {
                window.scrollTo(0, document.getElementById(url_id).offsetTop + 250);
                self.setState({ isScroll: false });
            }
        }
        let isCompared = false;

        if (parsed.isComparable) {
            isCompared = true;
        }
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
            _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                    canonicalUrl: `${_config2.default.API_BASE_URL}/full-body-checkup-health-packages`,
                    title: `${this.props.packagesList.title || ''}`,
                    description: `${this.props.packagesList.description || ''}`
                }, noIndex: false }),
            _react2.default.createElement(
                _criteriaSearch2.default,
                _extends({}, this.props, { checkForLoad: this.props.LOADED_LABS_SEARCH || this.state.showError, title: 'Search for Test and Labs.', goBack: true, lab_card: !!this.state.lab_card, newChatBtn: true, searchPackages: true, bottom_content: this.props.packagesList && this.props.packagesList.count > 0 && this.props.packagesList.bottom_content && this.props.packagesList.bottom_content != null && this.props.forOrganicSearch ? this.props.packagesList.bottom_content : '', page: 1, isPackage: true }),
                _react2.default.createElement(_newTopBar2.default, _extends({}, this.props, { applyFilters: this.applyFilters.bind(this), applyCategories: this.applyCategories.bind(this), seoData: this.state.seoData, lab_card: !!this.state.lab_card, comparePackage: this.comparePackage.bind(this), isCompare: this.state.isCompare, isCompared: isCompared, quickFilter: this.state.quickFilter, resetQuickFilters: this.resetQuickFilters.bind(this) })),
                this.props.packagesList && this.props.packagesList.result && this.props.packagesList.result.length == 0 ? _react2.default.createElement(
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
                            _react2.default.createElement('img', { className: 'n-rslt-img', src: "/assets" + '/img/no-result.png' }),
                            _react2.default.createElement(
                                'p',
                                { className: 'pkg-ty-agn cursor-pntr', onClick: this.applyQuickFilter.bind(this, { catId: [], viewMore: true }) },
                                'Try again with fewer filters'
                            )
                        )
                    )
                ) : _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(_result_count2.default, _extends({}, this.props, { applyFilters: this.applyFilters.bind(this), applyCategories: this.applyCategories.bind(this), seoData: this.state.seoData, lab_card: !!this.state.lab_card })),
                    _react2.default.createElement(_index2.default, _extends({}, this.props, { applyFilters: this.applyFilters.bind(this), getLabList: this.getLabList.bind(this), lab_card: !!this.state.lab_card, isCompare: this.state.isCompare, toggleComparePackages: this.toggleComparePackages.bind(this), isCompared: isCompared, applyQuickFilter: this.applyQuickFilter.bind(this) }))
                )
            ),
            _react2.default.createElement(_footer2.default, { footerData: this.state.footerData })
        );
    }
}

exports.default = SearchPackagesView;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchPackages/index.js":
/*!*************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchPackages/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SearchPackagesView = __webpack_require__(/*! ./SearchPackagesView.js */ "./dev/js/components/diagnosis/searchPackages/SearchPackagesView.js");

var _SearchPackagesView2 = _interopRequireDefault(_SearchPackagesView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SearchPackagesView2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchPackages/packagesList/PackagesList.js":
/*!*********************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchPackages/packagesList/PackagesList.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _packageProfileCard = __webpack_require__(/*! ../../commons/labProfileCard/packageProfileCard.js */ "./dev/js/components/diagnosis/commons/labProfileCard/packageProfileCard.js");

var _packageProfileCard2 = _interopRequireDefault(_packageProfileCard);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "react-infinite-scroller");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _Loader = __webpack_require__(/*! ../../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _bannerCarousel = __webpack_require__(/*! ../../../commons/Home/bannerCarousel.js */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

var _selectedPkgStrip = __webpack_require__(/*! ./selectedPkgStrip.js */ "./dev/js/components/diagnosis/searchPackages/packagesList/selectedPkgStrip.js");

var _selectedPkgStrip2 = _interopRequireDefault(_selectedPkgStrip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class packagesList extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: false,
            loading: false,
            renderBlock: false,
            page: 0,
            readMore: 'search-details-data-less',
            catIds: []
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
                    let scroll_pos = window.LAB_SCROLL_POS ? (window.LAB_SCROLL_POS) : 0
                    // TODO: improve scroll back logic
                    window.scrollTo(0, scroll_pos || 0)
                    window.LAB_SCROLL_POS = 0
                     window.onscroll = function () {
                        window.LAB_SCROLL_POS = window.pageYOffset
                    }
                }
            }, 100)
        }, 100)
        
        */
        this.setState(_extends({}, this.props.filterCriteriaPackages));
        setTimeout(() => {
            this.setState({ hasMore: true });
        }, 0);

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
        if (props.filterCriteriaPackages) {
            this.setState({ catIds: props.filterCriteriaPackages.catIds || [] });
        }
    }

    componentWillUnmount() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'LabSearchPagination', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-search-pagination', 'Pages': this.state.page
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
        this.setState({ hasMore: false, loading: true, page: page });

        this.props.getLabList(null, page + 1, hasMore => {
            //get searched packages result
            this.setState({ loading: false });
            setTimeout(() => {
                this.setState({ hasMore });
            }, 1000);
        });
    }
    testInfo() {
        // redirect to included test details page
        var url_string = window.location.href;
        var url = new URL(url_string);
        var test_ids = url.searchParams.get("test_ids");
        this.props.history.push('/search/testinfo?test_ids=' + test_ids + '&from=searchresults');
    }
    toggleScroll() {
        if (window) {
            window.scrollTo(0, 0);
        }
        this.setState({ readMore: 'search-details-data-less' });
    }
    showTc() {
        this.props.history.push('/tax-saver-health-packages-tc');
    }

    applyQuickFilters(category, viewMore = false) {
        // apply filters
        let filters = {
            catId: viewMore ? [] : [category],
            viewMore: viewMore
        };
        let gtmData = {
            'Category': 'PackageQuickFilterClicked', 'Action': 'PackageQuickFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'package-quick-filter-clicked', 'url': window.location.pathname, 'type': category
        };
        _gtm2.default.sendEvent({ data: gtmData });
        this.props.applyQuickFilter(filters);
    }

    render() {
        let { LABS, labList } = this.props;

        let start_page = 0;
        if (this.props.curr_page) {
            start_page = Math.max(0, this.props.curr_page - 1);
        } else {
            if (this.props.page) {
                start_page = Math.max(0, this.props.page - 1);
            }
        }

        // if(document.getElementById("pkgTost") !== null){
        //     window.onscroll = function() {
        //     var currentScrollPos = window.pageYOffset
        //       if (currentScrollPos == 0) {
        //         document.getElementById("pkgTost").classList.add("d-none")
        //       } else {
        //         document.getElementById("pkgTost").classList.remove("d-none")
        //       }
        //     }
        // }

        return _react2.default.createElement(
            'section',
            { className: 'wrap search-book-result variable-content-section', style: { paddingTop: 10 }, ref: 'checkIfExists' },
            !this.props.forOrganicSearch && !this.props.forTaxSaver ? _react2.default.createElement(
                'div',
                { className: 'pkgTost d-none', id: 'pkgTost' },
                _react2.default.createElement(
                    'p',
                    { onClick: () => this.props.history.push('/health-package-advisor') },
                    'Need Help in Booking Health Package? '
                )
            ) : '',
            this.state.renderBlock ? _react2.default.createElement(_Loader2.default, null) : _react2.default.createElement(
                'div',
                { className: 'container-fluid cardMainPaddingRmv', style: { minHeight: '60vh' } },
                this.props.forOrganicSearch && this.props.packagesList && this.props.packagesList.count > 0 ? _react2.default.createElement(
                    'div',
                    { className: 'search-result-card-collpase' },
                    _react2.default.createElement('div', { className: this.state.readMore, dangerouslySetInnerHTML: { __html: this.props.packagesList.search_content } }),
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
                                useWindow: true
                            },
                            _react2.default.createElement(
                                'ul',
                                null,
                                this.props.packagesList && this.props.packagesList.result ? this.props.packagesList.result.map((packages, i) => {

                                    return _react2.default.createElement(
                                        _react2.default.Fragment,
                                        { key: i },
                                        i == 3 && !this.state.catIds.length && this.props.packagesList && this.props.packagesList.categories && this.props.packagesList.categories.length ? _react2.default.createElement(
                                            'div',
                                            { className: 'sort-sub-filter-container mb-3' },
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Filter by ',
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'fw-700' },
                                                    ' Test Category '
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'fw-500 sort-more-filter', onClick: this.applyQuickFilters.bind(this, '', true) },
                                                    'More filters'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'srt-sb-btn-cont' },
                                                this.props.packagesList.categories.map((category, j) => {
                                                    return _react2.default.createElement(
                                                        'button',
                                                        { key: j, className: `${this.state.catIds && this.state.catIds.indexOf(category.id) > -1 ? 'srt-act' : ''}`, id: category.id, onClick: this.applyQuickFilters.bind(this, category.id, false) },
                                                        ' ',
                                                        category.name
                                                    );
                                                })
                                            )
                                        ) : '',
                                        i == 5 && this.props.offerList && this.props.offerList.filter(x => x.slider_location === 'search_packages_page' || x.slider_location === 'full_body_chechkup_page' || x.slider_location === 'tax_saver_packages_page').length ? _react2.default.createElement(
                                            'div',
                                            { className: 'banner-cont-height home-page-banner-div mb-3 mr-0 banner-md-margn' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'hidderBanner banner-carousel-div d-md-none' },
                                                _react2.default.createElement('div', { className: 'divHeight m-0', style: { marginBottom: "5px!important" } })
                                            ),
                                            _react2.default.createElement(_bannerCarousel2.default, _extends({}, this.props, { sliderLocation: this.props.forTaxSaver ? "tax_saver_packages_page" : this.props.forOrganicSearch ? 'full_body_chechkup_page' : 'search_packages_page' }))
                                        ) : '',
                                        _react2.default.createElement(
                                            'li',
                                            { id: `scrollById_${packages.id}` },
                                            _react2.default.createElement(_packageProfileCard2.default, _extends({}, this.props, { details: packages, key: i, rank: i }))
                                        )
                                    );
                                }) : ''
                            )
                        )
                    )
                ),
                this.state.loading ? _react2.default.createElement(_Loader2.default, { classType: 'loaderPagination' }) : ""
            ),
            !this.props.isCompared && (this.props.isCompare || this.props.compare_packages.length > 0) ? _react2.default.createElement(_selectedPkgStrip2.default, _extends({}, this.props, { toggleComparePackages: this.props.toggleComparePackages.bind(this) })) : ''
        );
    }
}

exports.default = packagesList;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchPackages/packagesList/index.js":
/*!**************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchPackages/packagesList/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PackagesList = __webpack_require__(/*! ./PackagesList.js */ "./dev/js/components/diagnosis/searchPackages/packagesList/PackagesList.js");

var _PackagesList2 = _interopRequireDefault(_PackagesList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PackagesList2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchPackages/packagesList/selectedPkgStrip.js":
/*!*************************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchPackages/packagesList/selectedPkgStrip.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SelectedPkgStrip extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    comparePackages() {
        let selectedPkgCompareIds = [];
        if (this.props.compare_packages) {
            this.props.compare_packages.map((packages, i) => {
                selectedPkgCompareIds.push(packages.id + '-' + packages.lab_id);
            });
        }
        let data = {
            'Category': 'ConsumerApp', 'Action': 'Comparison', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'comparison-button', 'selected_test_id': selectedPkgCompareIds
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push('/package/compare?package_ids=' + selectedPkgCompareIds);
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'compare-package-footer' },
            this.props.compare_packages && this.props.compare_packages.length > 0 ? _react2.default.createElement(
                'div',
                { className: "compare-packages" + (this.props.compare_packages && this.props.compare_packages.length == 1 ? ' compare-packages-one' : this.props.compare_packages.length == 2 ? ' compare-packages-two' : this.props.compare_packages.length == 3 ? ' compare-packages-three' : this.props.compare_packages.length == 4 ? ' compare-packages-four' : '') },
                _react2.default.createElement(
                    'ul',
                    null,
                    this.props.compare_packages.map((packages, i) => {
                        return _react2.default.createElement(
                            'li',
                            { key: i },
                            _react2.default.createElement('img', { src: "/assets" + "/images/packageCompare/red-cut.png", alt: '', className: 'end-div', onClick: this.props.toggleComparePackages.bind(this, packages.id, packages.lab_id, packages.img, packages.name) }),
                            _react2.default.createElement('img', { className: 'fltr-usr-image-lab', src: packages.img }),
                            _react2.default.createElement(
                                'p',
                                { className: 'pkgStripNm' },
                                packages.name
                            )
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'add-more-package compare-package-now', onClick: this.props.compare_packages.length >= 1 ? this.comparePackages.bind(this) : '' },
                    _react2.default.createElement(
                        'a',
                        null,
                        'Compare Now ',
                        this.props.compare_packages && this.props.compare_packages.length > 0 ? `(${this.props.compare_packages.length})` : ''
                    )
                )
            ) : ''
        );
    }
}

exports.default = SelectedPkgStrip;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchPackages/topBar/categoryPopup.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchPackages/topBar/categoryPopup.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CategoryPopup extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            openFilter: false,
            priceRange: [0, 20000],
            distanceRange: [0, 15],
            sort_on: null,
            shortURL: "",
            dropdown_visible: false,
            showLocationPopup: false,
            overlayVisible: false,
            showPopupContainer: true,
            sortText: 'Relevance',
            openCategory: false,
            selectedCatIds: [],
            selectedAllCatIdsIntial: [],
            selectedCatIdsLeng: '',
            is_applied: true,
            selectAllcategory: []
        };
    }
    componentDidMount() {
        let selectedCategoryIds = this.state.selectedCatIds;
        let selectAllcategoryIds = this.state.selectAllcategory;
        this.props.packagesList.categories.map((categories, i) => {
            if (categories.is_selected) {
                selectedCategoryIds.push(categories.id);
            }
            selectAllcategoryIds.push(categories.id);
            this.setState({ selectedAllCatIdsIntial: selectedCategoryIds, selectedCatIdsLeng: selectedCategoryIds.length, selectAllcategory: selectAllcategoryIds });
        });
        this.props.initialSelectedCategory(selectedCategoryIds);
    }
    applyAllCategory() {
        let selectedCategoryIds = this.state.selectAllcategory;
        if (this.props.packagesList.categories_count == this.state.selectedCatIdsLeng) {
            selectedCategoryIds = [];
        } else {
            selectedCategoryIds = this.state.selectAllcategory;
        }
        this.setState({ selectedCatIds: selectedCategoryIds, selectedCatIdsLeng: selectedCategoryIds.length });
    }
    toggleTest(category) {
        let selectedCategoryIds = this.state.selectedCatIds;
        if (category) {
            if (selectedCategoryIds.indexOf(category) > -1) {
                selectedCategoryIds = selectedCategoryIds.filter(x => x != category);
            } else {
                selectedCategoryIds.push(category);
            }
        }
        this.setState({ selectedCatIds: selectedCategoryIds, selectedCatIdsLeng: selectedCategoryIds.length });
    }
    applyCategories() {
        let categoryState = this.state.selectedCatIds;
        this.props.applyCategories(categoryState);
    }
    render() {
        let isSelected = [];
        let unSelected = [];
        let isSelectedCat = [];
        let unSelectedCat = [];
        if (this.props.packagesList.categories && this.props.packagesList.categories.length > 0) {
            this.props.packagesList.categories.map((categories, i) => {
                if (categories.is_selected) {
                    isSelected.push(categories);
                } else {
                    unSelected.push(categories);
                }
            });
            if (isSelected.length > 0) {
                {
                    isSelected.map((categories, i) => {
                        isSelectedCat.push(_react2.default.createElement(
                            'li',
                            { className: 'pr-0', key: i },
                            _react2.default.createElement(
                                'label',
                                { className: 'ck-bx', style: { fontWeight: 400, fontSize: 14 } },
                                categories.name,
                                _react2.default.createElement('input', { type: 'checkbox', checked: this.state.selectedCatIds.indexOf(categories.id) > -1, onChange: this.toggleTest.bind(this, categories.id) }),
                                _react2.default.createElement('span', { className: 'checkmark' })
                            )
                        ));
                    });
                }
            }
            if (unSelected.length > 0) {
                {
                    unSelected.map((categories, i) => {
                        unSelectedCat.push(_react2.default.createElement(
                            'li',
                            { className: 'pr-0', key: i },
                            _react2.default.createElement(
                                'label',
                                { className: 'ck-bx', style: { fontWeight: 400, fontSize: 14 } },
                                categories.name,
                                _react2.default.createElement('input', { type: 'checkbox', checked: this.state.selectedCatIds.indexOf(categories.id) > -1, onChange: this.toggleTest.bind(this, categories.id) }),
                                _react2.default.createElement('span', { className: 'checkmark' })
                            )
                        ));
                    });
                }
            }
        }

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('div', { className: 'cancel-overlay cancel-overlay-zindex' }),
            _react2.default.createElement(
                'div',
                { className: 'widget cancel-appointment-div cancel-popup' },
                _react2.default.createElement(
                    'div',
                    { className: 'pop-top-heading mb-0 pb-10' },
                    'Select Categories',
                    _react2.default.createElement(
                        'span',
                        { className: 'float-right', style: { cursor: 'pointer', marginRight: '10px' }, onClick: this.props.closeCategory.bind(this) },
                        _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/rt-close.svg", style: { width: 14 } })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'terms-condition-div pt-0' },
                    _react2.default.createElement(
                        'div',
                        { className: '' },
                        _react2.default.createElement(
                            'div',
                            { className: 'ins-form-radio insradio-on-popup' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'list all-test-list mrt-10' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'ck-bx', style: { fontWeight: 400, fontSize: 14 } },
                                        'Select All',
                                        _react2.default.createElement('input', { type: 'checkbox', checked: this.props.packagesList.categories_count == this.state.selectedCatIdsLeng, onChange: this.applyAllCategory.bind(this) }),
                                        _react2.default.createElement('span', { className: 'checkmark' })
                                    )
                                ),
                                isSelectedCat,
                                unSelectedCat
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'procedures-btn-pop' },
                    _react2.default.createElement(
                        'button',
                        { onClick: this.applyCategories.bind(this) },
                        'Apply'
                    )
                )
            )
        );
    }
}

exports.default = CategoryPopup;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchPackages/topBar/newTopBar.js":
/*!************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchPackages/topBar/newTopBar.js ***!
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

var _categoryPopup = __webpack_require__(/*! ./categoryPopup.js */ "./dev/js/components/diagnosis/searchPackages/topBar/categoryPopup.js");

var _categoryPopup2 = _interopRequireDefault(_categoryPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TopBar extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            openFilter: false,
            // shortURL: "",
            dropdown_visible: false,
            // showLocationPopup: false,
            // overlayVisible: false,
            // showPopupContainer: true,
            sortText: 'Relevance',
            openCategory: false,
            isCategoryApplied: false,
            appliedCategoryCount: '',
            initialSelectedCatIds: '',
            max_age: '',
            min_age: '',
            packageType: '',
            gender: '',
            catIds: [],
            test_ids: '',
            package_ids: '',
            previous_filters: {},
            sort_on: '',
            sort_order: '',
            avg_ratings: '',
            home_visit: false,
            lab_visit: false,
            quickFilter: {}
        };
    }

    componentWillReceiveProps(props) {
        this.setState(_extends({}, props.filterCriteriaPackages, { quickFilter: props.quickFilter || {} }), () => {
            if (this.state.quickFilter && (this.state.quickFilter.catId && this.state.quickFilter.catId.length || this.state.quickFilter.viewMore)) {
                this.sortFilterClicked();
            }
        });
        // if (props.locationType && !props.locationType.includes("geo")) {
        //     this.setState({ showLocationPopup: false })
        // } else {
        //     if (props.seoData && props.seoData.location) {
        //         this.setState({ showLocationPopup: false })
        //     } else {
        //         if (props.selectedLocation != this.props.selectedLocation) {
        //             this.setState({ showLocationPopup: true, overlayVisible: true })
        //         }
        //     }
        // }
        // this.shortenUrl()
    }

    componentDidMount() {
        this.setState(_extends({}, this.props.filterCriteriaPackages));
        // this.shortenUrl()
        // if (this.props.seoData && this.props.seoData.location) {
        //     this.setState({ showLocationPopup: false })
        // } else {
        //     if (this.props.locationType.includes("geo")) {
        //         this.setState({ showLocationPopup: true, overlayVisible: true })
        //     }
        // }
        if (!this.props.forOrganicSearch) {
            var url_string = window.location.href;
            var url = new URL(url_string);
            var cat_ids = url.searchParams.get("category_ids");
            if (cat_ids != null) {
                cat_ids = cat_ids.split(',');
                if (cat_ids.length > 0) {
                    this.setState({
                        appliedCategoryCount: cat_ids.length, isCategoryApplied: true
                    });
                }
            }
        }
    }

    applyFilters() {
        let filterState = {
            sort_on: this.state.sort_on,
            sort_order: this.state.sort_order,
            avg_ratings: this.state.avg_ratings || '',
            home_visit: this.state.home_visit,
            lab_visit: this.state.lab_visit,
            gender: this.state.gender,
            packageType: this.state.packageType,
            catIds: this.state.catIds,
            test_ids: this.state.test_ids,
            package_ids: this.state.package_ids
        };
        let data = {
            'Category': 'FilterClick', 'Action': 'Clicked on Filter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-filter-clicked', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'rating': this.state.avg_ratings || [], 'home_visit': this.state.home_visit || '', 'lab_visit': this.state.lab_visit || '', sort_on: this.state.sort_on || ''
        };
        _gtm2.default.sendEvent({ data: data });

        let ifAnyFilterApplied = this.isDataFiltered({}, true);
        if (ifAnyFilterApplied) {
            this.props.applyFilters(filterState);
        }

        this.setState({ openFilter: false });
    }

    handleClose(reset = false, e) {

        if (reset) {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ResetPackageFilter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'reset-package-filter', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'rating': this.state.avg_ratings || [], 'home_visit': this.state.home_visit || '', 'lab_visit': this.state.lab_visit || '', sort_on: this.state.sort_on || ''
            };
            _gtm2.default.sendEvent({ data: data });

            let resetFilters = {
                sort_on: '',
                sort_order: '',
                avg_ratings: '',
                home_visit: false,
                lab_visit: false,
                gender: '',
                catIds: []
            };

            this.setState(_extends({}, resetFilters, {
                quickFilter: {}
            }));
        } else {
            let data = {
                'Category': 'ConsumerApp', 'Action': 'ClosePackageFilter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'close-package-filter', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'rating': this.state.avg_ratings || [], 'home_visit': this.state.home_visit || '', 'lab_visit': this.state.lab_visit || '', sort_on: this.state.sort_on || ''
            };
            _gtm2.default.sendEvent({ data: data });
            this.setState(_extends({
                openFilter: false
            }, this.state.previous_filters, {
                quickFilter: {}
            }));
            this.props.resetQuickFilters();
        }
    }

    sortFilterClicked() {
        let data = {
            'Category': 'ConsumerApp', 'Action': 'PackageSortFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'package-sort-filter-clicked', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'rating': this.state.avg_ratings || [], 'home_visit': this.state.home_visit || '', 'lab_visit': this.state.lab_visit || '', sort_on: this.state.sort_on || ''
        };
        _gtm2.default.sendEvent({ data: data });

        let currentFilters = {
            sort_on: this.state.sort_on,
            sort_order: this.state.sort_order,
            avg_ratings: this.state.avg_ratings || '',
            home_visit: this.state.home_visit,
            lab_visit: this.state.lab_visit,
            gender: this.state.gender,
            catIds: [].concat(this.state.catIds) || []
        };

        this.setState({
            openFilter: true, previous_filters: currentFilters, catIds: this.state.quickFilter && this.state.quickFilter.catId && this.state.quickFilter.catId.length ? this.state.quickFilter.catId : this.state.catIds
        });
    }

    isDataFiltered(filterData = {}, checkIfAnyFilterAppliled = false) {

        if (checkIfAnyFilterAppliled) {

            try {
                let filterCount = 0;
                for (let filter in this.state.previous_filters) {

                    if (filter.includes('catIds')) {

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
                hospital_type: '',
                catIds: []
            };
        }
        try {
            let filterCount = 0;
            for (let filter in filterData) {

                if (filter.includes('hospital_type')) {
                    if (this.state['lab_visit'] || this.state['home_visit']) {
                        filterCount++;
                    }
                } else if (filter == 'catIds') {
                    if (this.state[filter].length) {
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

    selectCategory(category) {
        let selectedCategoryIds = this.state.catIds;
        if (category) {
            if (selectedCategoryIds.indexOf(category) > -1) {
                selectedCategoryIds = selectedCategoryIds.filter(x => x != category);
            } else {
                selectedCategoryIds.push(category);
            }
        }
        this.setState({ catIds: selectedCategoryIds });
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
        } else if (type.includes('lab_visit') || type.includes('home_visit')) {

            if (this.state[type]) {
                this.setState({ [type]: !this.state[type] });
            } else {
                this.setState({ 'lab_visit': type.includes('lab_visit') ? value : !value, 'home_visit': type.includes('home_visit') ? value : !value });
            }
        } else {
            this.setState({ [type]: this.state[type] == value ? '' : value });
        }
    }

    render() {

        var selectedTests = [];
        if (this.props.currentSearchedCriterias.length) {
            for (var i = 0; i < this.props.currentSearchedCriterias.length; i++) {
                selectedTests.push(this.props.currentSearchedCriterias[i].id);
            }
        }

        let quickFilterCatId = this.state.quickFilter && this.state.quickFilter.catId && this.state.quickFilter.catId.length ? this.state.quickFilter.catId[0] : '';

        return _react2.default.createElement(
            _react2.default.Fragment,
            null,
            this.state.openFilter ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { className: 'cancel-overlay cancel-overlay-zindex', onClick: this.handleClose.bind(this, false) }),
                _react2.default.createElement(
                    'div',
                    { className: 'widget cancel-appointment-div cancel-popup overflow-hidden pb-0' },
                    _react2.default.createElement(
                        'div',
                        { className: 'cross-btn', onClick: this.handleClose.bind(this, false) },
                        _react2.default.createElement('img', { src: "/assets" + "/img/icons/close.png", alt: 'close' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'pop-top-heading' },
                        'Sort/Filter'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sorting-main-container' },
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
                                    { className: `sort-cards-list ${this.state.sort_on == 'rating' ? 'chitActive' : ''}`, onClick: this.toggleAllFilters.bind(this, 'sort_on', 'rating', false) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'srt-lst-img' },
                                        this.state.sort_on == 'rating' ? _react2.default.createElement('img', { src: "/assets" + "/img/popupicon/rv-ratng.svg", style: { width: 18 } }) : _react2.default.createElement('img', { src: "/assets" + "/img/popupicon/ratng.svg", style: { width: 18 } })
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Rating'
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
                                'Visit Type'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'sortbtncard justyfy-twoBtns' },
                                _react2.default.createElement(
                                    'button',
                                    { className: `sortBtns ${this.state.home_visit ? 'srtBtnAct' : ''}`, onClick: this.toggleAllFilters.bind(this, 'home_visit', !this.state.home_visit, false) },
                                    'Home Visit'
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { className: `sortBtns ${this.state.lab_visit ? 'srtBtnAct' : ''}`, onClick: this.toggleAllFilters.bind(this, 'lab_visit', !this.state.lab_visit, false) },
                                    'Lab Visit'
                                )
                            )
                        ),
                        this.props.packagesList.categories && this.props.packagesList.categories.length > 0 ? _react2.default.createElement(
                            'div',
                            { className: 'sorting-btns-cont' },
                            _react2.default.createElement(
                                'h5',
                                { className: 'sort-headings' },
                                'Category'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'sortbtncard justyfy-twoBtns' },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'cat-gry' },
                                    quickFilterCatId ? this.props.packagesList.categories.filter(x => x.id == quickFilterCatId).map((category, i) => {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: category.id, id: category.id, onClick: this.selectCategory.bind(this, category.id) },
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'javascript:void(0);', className: this.state.catIds.indexOf(category.id) > -1 ? "selected" : '' },
                                                category.name
                                            )
                                        );
                                    }) : '',
                                    this.props.packagesList.categories.filter(x => x.id != quickFilterCatId).map((category, i) => {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: category.id, id: category.id, onClick: this.selectCategory.bind(this, category.id) },
                                            _react2.default.createElement(
                                                'a',
                                                { href: 'javascript:void(0);', className: this.state.catIds.indexOf(category.id) > -1 ? "selected" : '' },
                                                category.name
                                            )
                                        );
                                    })
                                )
                            )
                        ) : ''
                    ),
                    _react2.default.createElement(
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
                { className: 'filter-row sticky-header mbl-stick', style: { top: '55px' } },
                _react2.default.createElement(
                    'div',
                    { className: '' },
                    this.props.forOrganicSearch ? _react2.default.createElement(
                        'div',
                        { className: 'col-12 mrng-top-12 d-none d-md-block' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'mrb-10 breadcrumb-list', style: { 'wordBreak': 'breakWord' } },
                            _react2.default.createElement(
                                'li',
                                { className: 'breadcrumb-list-item' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'fw-500 breadcrumb-title breadcrumb-colored-title' },
                                        'Home'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'breadcrumb-arrow' },
                                '>'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'breadcrumb-list-item' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'fw-500 breadcrumb-title' },
                                    'Full Body Checkup Packages'
                                )
                            )
                        )
                    ) : '',
                    _react2.default.createElement(
                        'section',
                        { className: 'scroll-shadow-bar' },
                        this.props.forTaxSaver ? '' : _react2.default.createElement(
                            'div',
                            { className: 'filter-row sticky-header mbl-stick' },
                            _react2.default.createElement(
                                'section',
                                { className: 'scroll-shadow-bar' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'top-filter-tab-container' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'top-filter-tabs-select ', onClick: this.props.comparePackage.bind(this) },
                                        _react2.default.createElement('img', { src: !this.props.isCompared && (this.props.isCompare || this.props.compare_packages.length > 0) ? "/assets" + "/images/packageCompare/compare-orange.png" : "/assets" + "/images/packageCompare/compare.png", alt: '', style: { width: 16 } }),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: `${!this.props.isCompared && (this.props.isCompare || this.props.compare_packages && this.props.compare_packages.length > 0) ? 'comapre-active' : ''}` },
                                            'Compare Packages'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'top-filter-tabs-select ', onClick: this.sortFilterClicked.bind(this) },
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
                            )
                        )
                    )
                ),
                this.state.openCategory ? _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_categoryPopup2.default, _extends({}, this.props, { applyCategories: this.applyCategories.bind(this), closeCategory: this.closeCategory.bind(this), initialSelectedCategory: this.initialSelectedCategory.bind(this) }))
                ) : "",
                this.state.openFilter && false ? _react2.default.createElement(
                    'div',
                    { onClick: this.sortFilterClicked.bind(this), className: 'filter-overlay overlay black cancel-overlay-zindex' },
                    _react2.default.createElement(
                        'div',
                        { className: 'widget filter-popup', onClick: e => {
                                e.stopPropagation();
                                e.preventDefault();
                            } },
                        _react2.default.createElement(
                            'div',
                            { className: 'widget-footer pd-0' },
                            _react2.default.createElement(
                                'button',
                                { className: 'v-btn v-btn-primary btn-block btn-lg pop-btn', onClick: this.applyFilters.bind(this) },
                                'Apply'
                            )
                        )
                    )
                ) : ""
            )
        );
    }
}

exports.default = TopBar;

/***/ }),

/***/ "./dev/js/components/diagnosis/searchPackages/topBar/result_count.js":
/*!***************************************************************************!*\
  !*** ./dev/js/components/diagnosis/searchPackages/topBar/result_count.js ***!
  \***************************************************************************/
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

var _categoryPopup = __webpack_require__(/*! ./categoryPopup.js */ "./dev/js/components/diagnosis/searchPackages/topBar/categoryPopup.js");

var _categoryPopup2 = _interopRequireDefault(_categoryPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ResultCount extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            // anchorEl: null,
            // openFilter: false,
            // priceRange: [0, 20000],
            // distanceRange: [0, 15],
            // sort_on: null,
            shortURL: "",
            // dropdown_visible: false,
            showLocationPopup: false,
            overlayVisible: false,
            showPopupContainer: true,
            // sortText: 'Relevance',
            // openCategory: false,
            // isCategoryApplied:false,
            // appliedCategoryCount:'',
            // initialSelectedCatIds:'',
            // max_age:'',
            // min_age:'',
            // packageType:'',
            // gender:'',
            // catIds:[],
            // test_ids:'',
            ssrFlag: false
        };
    }

    componentWillReceiveProps(props) {
        this.setState(_extends({}, props.filterCriteriaPackages));
        if (props.locationType && !props.locationType.includes("geo")) {
            this.setState({ showLocationPopup: false });
        } else {
            if (props.seoData && props.seoData.location) {
                this.setState({ showLocationPopup: false });
            } else {
                if (props.selectedLocation != this.props.selectedLocation) {
                    this.setState({ showLocationPopup: true, overlayVisible: true });
                }
            }
        }
        this.shortenUrl();
    }

    componentDidMount() {
        this.setState(_extends({}, this.props.filterCriteriaPackages, { ssrFlag: true }));
        this.shortenUrl();
        if (this.props.seoData && this.props.seoData.location) {
            this.setState({ showLocationPopup: false });
        } else {
            if (this.props.locationType.includes("geo")) {
                this.setState({ showLocationPopup: true, overlayVisible: true });
            }
        }
        if (!this.props.forOrganicSearch) {
            var url_string = window.location.href;
            var url = new URL(url_string);
            var cat_ids = url.searchParams.get("category_ids");
            if (cat_ids != null) {
                cat_ids = cat_ids.split(',');
                if (cat_ids.length > 0) {
                    this.setState({
                        appliedCategoryCount: cat_ids.length, isCategoryApplied: true
                    });
                }
            }
        }
    }

    // applyFilters() {
    //     let filterState = {
    //         priceRange: this.state.priceRange,
    //         distanceRange: this.state.distanceRange,
    //         sort_on: this.state.sort_on,
    //         max_age: this.state.max_age,
    //         min_age: this.state.min_age,
    //         gender: this.state.gender,
    //         packageType: this.state.packageType,
    //         catIds:this.state.catIds,
    //         test_ids:this.state.test_ids
    //     }
    //     let data = {
    //         'Category': 'FilterClick', 'Action': 'Clicked on Filter', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'lab-filter-clicked', 'url': window.location.pathname, 'lowPriceRange': this.state.priceRange[0], 'highPriceRange': this.state.priceRange[1], 'lowDistanceRange': this.state.distanceRange[0], 'highDistanceRange': this.state.distanceRange[1], 'sort_on': this.state.sort_on == "" ? 'relevance' : this.state.sort_on
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
    //     this.setState({ anchorEl: null, sort_on: type ,dropdown_visible:false}, () => {
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
    //         priceRange: [0, 20000],
    //         distanceRange: [0, 15]
    //     }
    //     try {
    //         for (let filter in def) {
    //             if (def[filter][0] != this.state[filter][0] || def[filter][1] != this.state[filter][1]) {
    //                 return true
    //             }
    //         }
    //         return false
    //     } catch (e) {
    //         return false
    //     }
    // }

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
    // toggleCategory(event) {
    //     this.setState({
    //         openCategory: !this.state.openCategory
    //     })
    // }
    // closeCategory() {
    //     this.setState({
    //         openCategory: !this.state.openCategory
    //     })
    // }
    // applyCategories(categoryState) { 
    //     let filterState = {
    //         priceRange: this.state.priceRange,
    //         distanceRange: this.state.distanceRange,
    //         sort_on: this.state.sort_on,
    //         max_age:this.state.max_age,
    //         min_age: this.state.min_age,
    //         gender:this.state.gender,
    //         packageType: this.state.packageType,
    //         test_ids:this.state.test_ids
    //     }
    //     // let isCategory = false 
    //     // if(this.state.initialSelectedCatIds != categoryState.length){
    //     //     isCategory = true
    //     // }
    //     this.props.applyCategories(categoryState,filterState)
    //     // this.setState({ openCategory: false ,isCategoryApplied:isCategory,appliedCategoryCount:categoryState.length>0?categoryState.length:''})
    //     this.setState({ openCategory: false,catIds:categoryState.length})

    // }
    // initialSelectedCategory(selectedcategory){
    //     this.setState({initialSelectedCatIds:selectedcategory.length})
    // }

    goToLocation() {
        this.setState({
            searchCities: []
        });
        let location_url = '/locationsearch';
        let data = {
            'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
        };
        _gtm2.default.sendEvent({ data: data });
        this.props.history.push(location_url);
    }

    render() {

        var selectedTests = [];
        if (this.props.currentSearchedCriterias.length) {
            for (var i = 0; i < this.props.currentSearchedCriterias.length; i++) {
                selectedTests.push(this.props.currentSearchedCriterias[i].id);
            }
        }

        // let sortType = ''
        // if (this.state.sort_on) {
        //     sortType = this.state.sort_on.charAt(0).toUpperCase() + this.state.sort_on.slice(1);
        // }

        let criteriaStr = this.getCriteriaString(this.props.currentSearchedCriterias);
        let locationName = "";
        if (this.props.selectedLocation && this.props.selectedLocation.formatted_address) {
            locationName = this.props.selectedLocation.formatted_address;
        }
        if (this.props.seoData && this.props.seoData.location) {
            locationName = this.props.seoData.location;
        }
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
                        this.props.lab_card ? _react2.default.createElement(
                            'div',
                            { style: { padding: '10px 0px' } },
                            _react2.default.createElement(
                                'div',
                                { className: 'd-flex justify-content-between', style: { alignItems: 'flex-start' } },
                                _react2.default.createElement(
                                    'div',
                                    { style: { flex: 1 } },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        this.props.packagesList ? this.props.packagesList.count : "",
                                        ' Results for',
                                        _react2.default.createElement(
                                            'h1',
                                            { className: 'search-result-heading' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'fw-700' },
                                                ' ',
                                                this.props.forOrganicSearch ? 'Full Body Checkup Packages' : this.props.forTaxSaver ? 'Health Packages' : 'selected categories'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'search-result-span' },
                                            ' ',
                                            criteriaStr,
                                            locationName ? ` in ${locationName}` : ''
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'text-right', style: { width: 65, cursor: 'pointer' }, onClick: () => this.props.history.push(`/locationsearch?lab_card=true&id=${selectedTests}`) },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'fw-500 text-primary', style: { fontSize: 14 } },
                                        'Change'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'd-flex lc-filter-sort-div mrt-10' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'lc-filter-div d-flex', onClick: this.toggleFilter.bind(this) },
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/lc-filter.svg", style: { width: 18 } }),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'fw-500 text-primary', style: { marginLeft: 4 } },
                                        'Filter'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'lc-sort-div d-flex', onClick: this.handleOpen.bind(this) },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'fw-500 text-primary', style: { marginRight: 4 } },
                                        this.state.sort_on === "" || !this.state.sort_on ? 'Relevance' : sortType
                                    ),
                                    _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/orange-down.svg", style: { width: 10 } })
                                )
                            )
                        ) : _react2.default.createElement(
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
                                            _reactCopyToClipboard.CopyToClipboard,
                                            { text: this.state.shortURL,
                                                onCopy: () => {
                                                    _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Shortened URL Copied." });
                                                } },
                                            _react2.default.createElement(
                                                'span',
                                                { style: { cursor: 'pointer' } },
                                                _react2.default.createElement('img', { src: "/assets" + "/img/customer-icons/url-short.svg", style: { width: 80 } })
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'filter-title' },
                                this.props.packagesList ? this.props.packagesList.count : '',
                                ' Results found for',
                                _react2.default.createElement(
                                    'h1',
                                    { className: 'search-result-heading' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'fw-700' },
                                        ' ',
                                        this.props.forOrganicSearch ? 'Full Body Checkup Packages' : this.props.forTaxSaver ? 'Health Packages' : 'selected categories'
                                    )
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'search-result-span' },
                                    this.state.showLocationPopup && false ? '' : locationName && this.state.ssrFlag ? _react2.default.createElement(
                                        'span',
                                        { className: 'location-edit' },
                                        ` in ${locationName}`
                                    ) : '',
                                    _react2.default.createElement('img', { style: { width: 15, height: 15, marginLeft: 7, cursor: 'pointer' }, src: "/assets" + "/img/customer-icons/edit.svg", onClick: this.goToLocation.bind(this) })
                                )
                            )
                        )
                    )
                ),
                this.state.showLocationPopup ? _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: ref => this.child = ref, resultType: 'list', isTopbar: true, hideLocationPopup: () => this.hideLocationPopup(), locationName: locationName })) : '',
                this.state.showLocationPopup && this.state.overlayVisible && !this.props.lab_card ? _react2.default.createElement('div', { className: 'locationPopup-overlay', onClick: () => this.overlayClick() }) : '',
                this.state.showLocationPopup && this.props.lab_card && this.state.showPopupContainer ? _react2.default.createElement('div', { className: 'popupContainer-overlay' }) : ''
            )
        );
    }
}

exports.default = ResultCount;

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

/***/ "./dev/js/containers/diagnosis/SearchPackages.js":
/*!*******************************************************!*\
  !*** ./dev/js/containers/diagnosis/SearchPackages.js ***!
  \*******************************************************/
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

var _urltoState = __webpack_require__(/*! ../../helpers/urltoState */ "./dev/js/helpers/urltoState.js");

var _index2 = __webpack_require__(/*! ../../components/diagnosis/searchPackages/index.js */ "./dev/js/components/diagnosis/searchPackages/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class SearchPackages extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            forTaxSaver: props.location.pathname.includes("tax-saver-health-packages"),
            forOrganicSearch: props.location.pathname.includes("full-body-checkup-health-packages")
        };
    }

    static loadData(store, match, queryParams = {}) {
        return new Promise((resolve, reject) => {
            try {
                let location_ms = null;
                if (match.url.includes('location=')) {
                    location_ms = match.url.split('location=')[1];
                    location_ms = parseInt(location_ms);
                }

                (0, _urltoState.PackageSearchStateBuilder)(null, queryParams, true, location_ms).then(state => {
                    // build state in case of ssr
                    store.dispatch((0, _index.mergeLABState)(state));

                    let searchUrl = null;
                    if (match.url.includes('-lbcit') || match.url.includes('-lblitcit')) {
                        searchUrl = match.url.toLowerCase();
                    }
                    let page = 1;
                    if (queryParams.page) {
                        page = parseInt(queryParams.page);
                    }
                    return store.dispatch((0, _index.getPackages)(state, page, true, searchUrl, {}, (loadMore, seoData) => {
                        //get searched packages result
                        if (match.url.includes('-lbcit') || match.url.includes('-lblitcit')) {
                            (0, _index.getFooterData)(match.url.split("/")[1])().then(footerData => {
                                footerData = footerData || null;
                                resolve({ seoData, footerData });
                            }).catch(e => {
                                resolve({ seoData });
                            });
                        } else {
                            resolve({ seoData });
                        }
                    }));
                }).catch(e => {
                    reject();
                });
            } catch (e) {
                console.error(e);
                reject();
            }
        });
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
        // this.props.loadOPDInsurance(this.props.selectedLocation)
    }

    render() {
        return _react2.default.createElement(_index3.default, _extends({}, this.props, { forTaxSaver: this.state.forTaxSaver, forOrganicSearch: this.state.forOrganicSearch }));
    }
}

SearchPackages.contextTypes = {
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
        selectedLocation,
        selectedCriterias,
        filterCriteria,
        LOADED_SEARCH_CRITERIA_LAB,
        locationType,
        fetchNewResults,
        corporateCoupon,
        currentSearchedCriterias,
        filterCriteriaPackages,
        page,
        compare_packages

    } = state.SEARCH_CRITERIA_LABS;

    const {
        common_settings
    } = state.SEARCH_CRITERIA_OPD;

    const {
        offerList,
        is_login_user_insured,
        insurance_status,
        device_info,
        common_utm_tags
    } = state.USER;

    const LABS = state.LAB_SEARCH_DATA;
    const { labList, LOADED_LABS_SEARCH, count, SET_FROM_SERVER, packagesList, curr_page } = state.LAB_SEARCH;

    return {
        selectedLocation,
        selectedCriterias,
        filterCriteria,
        LOADED_SEARCH_CRITERIA_LAB,
        LABS,
        labList, LOADED_LABS_SEARCH,
        count,
        SET_FROM_SERVER,
        initialServerData,
        locationType,
        fetchNewResults,
        corporateCoupon,
        packagesList,
        currentSearchedCriterias,
        filterCriteriaPackages,
        offerList,
        is_login_user_insured,
        page,
        curr_page,
        compare_packages,
        insurance_status,
        device_info,
        common_settings,
        common_utm_tags
    };
};

const mapDispatchToProps = dispatch => {
    return {
        urlShortner: (url, cb) => dispatch((0, _index.urlShortner)(url, cb)),
        getPackages: (state, page, from_server, searchByUrl, extra_params, cb) => dispatch((0, _index.getPackages)(state, page, from_server, searchByUrl, extra_params, cb)),
        toggleDiagnosisCriteria: (type, criteria, forceAdd, filter) => dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filter)),
        getDiagnosisCriteriaResults: (searchString, callback) => dispatch((0, _index.getDiagnosisCriteriaResults)(searchString, callback)),
        clearExtraTests: () => dispatch((0, _index.clearExtraTests)()),
        mergeLABState: (state, fetchNewResults) => dispatch((0, _index.mergeLABState)(state, fetchNewResults)),
        selectSearchType: type => dispatch((0, _index.selectSearchType)(type)),
        getFooterData: url => dispatch((0, _index.getFooterData)(url)),
        getOfferList: (lat, long) => dispatch((0, _index.getOfferList)(lat, long)),
        toggleOPDCriteria: (type, criteria, forceAdd, filter) => dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filter)),
        togglecompareCriteria: criteria => dispatch((0, _index.togglecompareCriteria)(criteria)),
        resetPkgCompare: () => dispatch((0, _index.resetPkgCompare)()),
        selectLabAppointmentType: type => dispatch((0, _index.selectLabAppointmentType)(type)),
        selectLabTimeSLot: (slot, reschedule) => dispatch((0, _index.selectLabTimeSLot)(slot, reschedule)),
        loadOPDInsurance: city => dispatch((0, _index.loadOPDInsurance)(city)),
        setCommonUtmTags: (type, tag) => dispatch((0, _index.setCommonUtmTags)(type, tag)),
        unSetCommonUtmTags: (type, tag) => dispatch((0, _index.unSetCommonUtmTags)(type, tag)),
        clearVipSelectedPlan: () => dispatch((0, _index.clearVipSelectedPlan)()),
        NonIpdBookingLead: (data, cb) => dispatch((0, _index.NonIpdBookingLead)(data, cb)),
        saveLeadPhnNumber: number => dispatch((0, _index.saveLeadPhnNumber)(number))
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchPackages);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL2xvY2F0aW9uUG9wdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9sb2NhdGlvblBvcHVwL2xvY2F0aW9uUG9wdXBWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9jb21tb25zL2xhYlByb2ZpbGVDYXJkL3BhY2thZ2VQcm9maWxlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUGFja2FnZXMvU2VhcmNoUGFja2FnZXNWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9zZWFyY2hQYWNrYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUGFja2FnZXMvcGFja2FnZXNMaXN0L1BhY2thZ2VzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUGFja2FnZXMvcGFja2FnZXNMaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9zZWFyY2hQYWNrYWdlcy9wYWNrYWdlc0xpc3Qvc2VsZWN0ZWRQa2dTdHJpcC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUGFja2FnZXMvdG9wQmFyL2NhdGVnb3J5UG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3RvcEJhci9uZXdUb3BCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3RvcEJhci9yZXN1bHRfY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvblBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2RpYWdub3Npcy9TZWFyY2hQYWNrYWdlcy5qcyJdLCJuYW1lcyI6WyJsb2NhdGlvblBvcHVwIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiTG9jYXRpb25Qb3B1cFZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaCIsImxvY2F0aW9uX29iamVjdCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzZWxlY3RlZExvY2F0aW9uIiwic2V0U3RhdGUiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImxvY2F0aW9uVHlwZSIsImluY2x1ZGVzIiwiY29tcG9uZW50RGlkTW91bnQiLCJsb2NhdGlvbk5hbWUiLCJnb1RvTG9jYXRpb24iLCJpc1RvcGJhciIsInJlZGlyZWN0X3RvIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImxvY2F0aW9uX3VybCIsImRhdGEiLCJHVE0iLCJnZXRVc2VySWQiLCJzZW5kRXZlbnQiLCJoaXN0b3J5IiwicHVzaCIsImNvbnRpbnVlTG9jYXRpb24iLCJwYXJzZWQiLCJwYXJzZSIsImxhdCIsImxvbmciLCJsb2NhdGlvbkRhdGEiLCJzZWxlY3RMb2NhdGlvbiIsInJlbmRlciIsImNvdW50IiwiZm9udFdlaWdodCIsImNyaXRlcmlhU3RyaW5nIiwiYmluZCIsIkxhYlByb2ZpbGVDYXJkIiwiY2hlY2tlZCIsIm9wZW5MYWIiLCJpZCIsInVybCIsInRlc3RfaWQiLCJ0ZXN0X25hbWUiLCJlIiwiY2xlYXJFeHRyYVRlc3RzIiwidGVzdElkcyIsIm5ld190ZXN0IiwiZXh0cmFfdGVzdCIsImxhYl9pZCIsInR5cGUiLCJuYW1lIiwidG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEiLCJyYW5rIiwiY3RybEtleSIsIm1ldGFLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImJvb2tOb3dDbGlja2VkIiwic2xvdCIsInRpbWUiLCJzZWxlY3RMYWJUaW1lU0xvdCIsInNlbGVjdGVkVHlwZSIsInJfcGlja3VwIiwicF9waWNrdXAiLCJzZWxlY3RMYWJBcHBvaW50bWVudFR5cGUiLCJjbGVhclZpcFNlbGVjdGVkUGxhbiIsInRlc3RJbmZvIiwidGVzdF91cmwiLCJpc0NhdGVnb3J5IiwiZXZlbnQiLCJzZWxlY3RlZF90ZXN0X2lkcyIsIk9iamVjdCIsImVudHJpZXMiLCJjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsInVybF9zdHJpbmciLCJocmVmIiwiVVJMIiwic2VhcmNoX2lkIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZ2VvbWV0cnkiLCJsbmciLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGVDb21wYXJlIiwibGFiX3RodW1ibmFpbCIsInNlbGVjdGVkUGtnQ29tcGFyZUlkcyIsImNvbXBhcmVfcGFja2FnZXMiLCJwYWNrYWdlcyIsImkiLCJpbmRleE9mIiwibGVuZ3RoIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsInRvZ2dsZUNvbXBhcmVQYWNrYWdlcyIsImdvbGRDbGlja2VkIiwiZGlzY291bnRlZF9wcmljZSIsInByaWNlIiwibGFiIiwiZGlzdGFuY2UiLCJwaWNrdXBfYXZhaWxhYmxlIiwibGFiX3RpbWluZyIsImxhYl90aW1pbmdfZGF0YSIsIm1ycCIsIm5leHRfbGFiX3RpbWluZyIsIm5leHRfbGFiX3RpbWluZ19kYXRhIiwiZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzIiwicGlja3VwX2NoYXJnZXMiLCJudW1iZXJfb2ZfdGVzdHMiLCJzaG93X2RldGFpbHMiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnlfZGV0YWlscyIsImFkZHJlc3MiLCJpbmNsdWRlZF9pbl91c2VyX3BsYW4iLCJpbnN1cmFuY2UiLCJ2aXAiLCJkZXRhaWxzIiwiTWF0aCIsImNlaWwiLCJvcGVuaW5nVGltZSIsInNwbGl0IiwicGlja3VwX3RleHQiLCJwYXJzZUludCIsImhpZGVfcHJpY2UiLCJvZmZQZXJjZW50IiwiaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUiLCJpc19pbnN1cmFuY2VfY292ZXJlZCIsImlzX3VzZXJfaW5zdXJlZCIsImlzX3ZpcF9hcHBsaWNhYmxlIiwidmlwX2Ftb3VudCIsImlzX2VuYWJsZV9mb3JfdmlwIiwiaXNfdmlwX2dvbGQiLCJrZXlzIiwiaXNfdmlwX21lbWJlciIsImNvdmVyZWRfdW5kZXJfdmlwIiwiaXNfZ29sZF9tZW1iZXIiLCJpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAiLCJpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkIiwiaXNfZ29sZCIsInNob3dfY29tbW9uX3ByaWNlcyIsImlzQ29tcGFyZWQiLCJpc0NvbXBhcmUiLCJwYWRkaW5nIiwicGFkZGluZ0JvdHRvbSIsImlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkIiwiaG9tZV9waWNrdXBfY2hhcmdlcyIsIkFTU0VUU19CQVNFX1VSTCIsImlzX3RoeXJvY2FyZSIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJjdXJzb3IiLCJ3aWR0aCIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiY2F0ZWdvcnlfZGV0YWlsIiwiayIsImljb24iLCJtYXJnaW5SaWdodCIsInBhcmFtZXRlcl9jb3VudCIsImxvY2FsaXR5IiwiY2l0eSIsIlNlYXJjaFBhY2thZ2VzVmlldyIsInNlb0RhdGEiLCJmb290ZXJEYXRhIiwiaW5pdGlhbFNlcnZlckRhdGEiLCJzaG93RXJyb3IiLCJzaG93Q2hhdFdpdGh1cyIsImlzU2Nyb2xsIiwicXVpY2tGaWx0ZXIiLCJzaG93Tm9uSXBkUG9wdXAiLCJzaG93X3BvcHVwIiwidG9fYmVfZm9yY2UiLCJpc19sZWFkX2VuYWJsZWQiLCJnZXRMYWJMaXN0Iiwic2VvRnJpZW5kbHkiLCJnZXRGb290ZXJEYXRhIiwibWF0Y2giLCJ0aGVuIiwic2Nyb2xsVG8iLCJ1dG1fc291cmNlIiwic2Vzc2lvbklkIiwiZmxvb3IiLCJyYW5kb20iLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJzcG9fdGFncyIsInV0bV90YWdzIiwidXRtX3Rlcm0iLCJ1dG1fbWVkaXVtIiwidXRtX2NhbXBhaWduIiwiRGF0ZSIsImdldFRpbWUiLCJjdXJyZW50U2Vzc2lvbklkIiwic2V0Q29tbW9uVXRtVGFncyIsImN1cnJlbnRUaW1lIiwiZ2V0SXRlbSIsImNvbW1vbl91dG1fdGFncyIsImZpbHRlciIsIngiLCJzZXNzaW9uVmFsIiwidGltZV9vZmZzZXQiLCJ1blNldENvbW1vblV0bVRhZ3MiLCJmZXRjaE5ld1Jlc3VsdHMiLCJuZXdfdXJsIiwiYnVpbGRVUkkiLCJyZXBsYWNlIiwiZ2V0TG9jYXRpb25QYXJhbSIsInRhZyIsInBhcmFtU3RyaW5nIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwicGFnZSIsImNiIiwiZXh0cmFfcGFyYW1zIiwiZ2V0UGFja2FnZXMiLCJhcmdzIiwiY2F0Y2giLCJhcHBseUZpbHRlcnMiLCJmaWx0ZXJTdGF0ZSIsInJlc2V0UXVpY2tGaWx0ZXJzIiwibWVyZ2VMQUJTdGF0ZSIsImZpbHRlckNyaXRlcmlhUGFja2FnZXMiLCJhcHBseUNhdGVnb3JpZXMiLCJjYXRlZ29yeVN0YXRlIiwiZmlsdGVyc3RhdGUiLCJuZXdDYXRlZ29yeVN0YXRlIiwic29ydF9vbiIsInNvcnRfb3JkZXIiLCJhdmdfcmF0aW5ncyIsImhvbWVfdmlzaXQiLCJsYWJfdmlzaXQiLCJtYXhfYWdlIiwibWluX2FnZSIsImdlbmRlciIsInBhY2thZ2VUeXBlIiwidGVzdF9pZHMiLCJwYWNrYWdlX2lkcyIsImNvbXBhcmVQYWNrYWdlIiwicGFja2FnZXNMaXN0IiwicmVzdWx0IiwiaW1nIiwidG9nZ2xlY29tcGFyZUNyaXRlcmlhIiwicmVzZXRQa2dDb21wYXJlIiwicGFja2FnZUlkIiwibGFiSWQiLCJwY2tJbWciLCJwY2tOYW1lIiwiZmlsdGVyQ3JpdGVyaWEiLCJwbGFjZV9pZCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiY2F0X2lkcyIsImNhdElkcyIsImxhYl9uYW1lIiwibmV0d29ya19pZCIsInBhY2thZ2VfdHlwZSIsInBhY2thZ2VfY2F0ZWdvcnlfaWRzIiwiZm9yVGF4U2F2ZXIiLCJzY3JvbGxieWlkIiwic2Nyb2xsYnlfdGVzdF9pZCIsInNjcm9sbGJ5X2xhYl9pZCIsInNjcm9sbGJ5bGFiaWQiLCJpc0NvbXBhcmFibGUiLCJnZXRNZXRhVGFnc0RhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXBwbHlRdWlja0ZpbHRlciIsIm5vbklwZExlYWRzIiwicGhvbmVfbnVtYmVyIiwicGFja2FnZV9uYW1lIiwibGVhZF9zb3VyY2UiLCJzb3VyY2UiLCJsZWFkX3R5cGUiLCJleGl0cG9pbnRfdXJsIiwidmlzaXRvcl9pbmZvIiwiZ2V0VmlzaXRvckluZm8iLCJ2aXNpdF9pZCIsInZpc2l0b3JfaWQiLCJndG1fZGF0YSIsInNhdmVMZWFkUGhuTnVtYmVyIiwiU1RPUkFHRSIsImlzQWdlbnQiLCJOb25JcGRCb29raW5nTGVhZCIsInNldFRpbWVvdXQiLCJjbG9zZUlwZExlYWRQb3B1cCIsImZyb20iLCJzZWxmIiwidXJsX2lkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldFRvcCIsImNhbm9uaWNhbFVybCIsIkNPTkZJRyIsIkFQSV9CQVNFX1VSTCIsIkxPQURFRF9MQUJTX1NFQVJDSCIsImxhYl9jYXJkIiwiYm90dG9tX2NvbnRlbnQiLCJmb3JPcmdhbmljU2VhcmNoIiwiY2F0SWQiLCJ2aWV3TW9yZSIsImhhc01vcmUiLCJsb2FkaW5nIiwicmVuZGVyQmxvY2siLCJyZWFkTW9yZSIsImdldE9mZmVyTGlzdCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwibG9hZE1vcmUiLCJ0b2dnbGVTY3JvbGwiLCJzaG93VGMiLCJhcHBseVF1aWNrRmlsdGVycyIsImNhdGVnb3J5IiwiZmlsdGVycyIsImd0bURhdGEiLCJMQUJTIiwibGFiTGlzdCIsInN0YXJ0X3BhZ2UiLCJjdXJyX3BhZ2UiLCJtYXgiLCJwYWRkaW5nVG9wIiwibWluSGVpZ2h0IiwiX19odG1sIiwic2VhcmNoX2NvbnRlbnQiLCJqIiwib2ZmZXJMaXN0Iiwic2xpZGVyX2xvY2F0aW9uIiwiUGFja2FnZXNMaXN0cyIsIlNlbGVjdGVkUGtnU3RyaXAiLCJjb21wYXJlUGFja2FnZXMiLCJDYXRlZ29yeVBvcHVwIiwiYW5jaG9yRWwiLCJvcGVuRmlsdGVyIiwicHJpY2VSYW5nZSIsImRpc3RhbmNlUmFuZ2UiLCJzaG9ydFVSTCIsImRyb3Bkb3duX3Zpc2libGUiLCJzaG93TG9jYXRpb25Qb3B1cCIsIm92ZXJsYXlWaXNpYmxlIiwic2hvd1BvcHVwQ29udGFpbmVyIiwic29ydFRleHQiLCJvcGVuQ2F0ZWdvcnkiLCJzZWxlY3RlZENhdElkcyIsInNlbGVjdGVkQWxsQ2F0SWRzSW50aWFsIiwic2VsZWN0ZWRDYXRJZHNMZW5nIiwiaXNfYXBwbGllZCIsInNlbGVjdEFsbGNhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsInNlbGVjdEFsbGNhdGVnb3J5SWRzIiwiaXNfc2VsZWN0ZWQiLCJpbml0aWFsU2VsZWN0ZWRDYXRlZ29yeSIsImFwcGx5QWxsQ2F0ZWdvcnkiLCJjYXRlZ29yaWVzX2NvdW50IiwidG9nZ2xlVGVzdCIsImlzU2VsZWN0ZWQiLCJ1blNlbGVjdGVkIiwiaXNTZWxlY3RlZENhdCIsInVuU2VsZWN0ZWRDYXQiLCJjbG9zZUNhdGVnb3J5IiwiVG9wQmFyIiwiaXNDYXRlZ29yeUFwcGxpZWQiLCJhcHBsaWVkQ2F0ZWdvcnlDb3VudCIsImluaXRpYWxTZWxlY3RlZENhdElkcyIsInByZXZpb3VzX2ZpbHRlcnMiLCJzb3J0RmlsdGVyQ2xpY2tlZCIsImlmQW55RmlsdGVyQXBwbGllZCIsImlzRGF0YUZpbHRlcmVkIiwiaGFuZGxlQ2xvc2UiLCJyZXNldCIsInJlc2V0RmlsdGVycyIsImN1cnJlbnRGaWx0ZXJzIiwiY29uY2F0IiwiZmlsdGVyRGF0YSIsImNoZWNrSWZBbnlGaWx0ZXJBcHBsaWxlZCIsImZpbHRlckNvdW50IiwiYXJyRmxpdGVyIiwiaG9zcGl0YWxfdHlwZSIsInNlbGVjdENhdGVnb3J5IiwidG9nZ2xlQWxsRmlsdGVycyIsInZhbCIsImlzQXJyYXkiLCJzZWxlY3RlZFZhbCIsImZvdW5kIiwic2VsZWN0ZWRUZXN0cyIsInF1aWNrRmlsdGVyQ2F0SWQiLCJpc19sb2dpbl91c2VyX2luc3VyZWQiLCJpbnN1cmFuY2Vfc3RhdHVzIiwidG9wIiwiUmVzdWx0Q291bnQiLCJzc3JGbGFnIiwic2hvcnRlblVybCIsImdldENyaXRlcmlhU3RyaW5nIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJyZWR1Y2UiLCJmaW5hbCIsImN1cnIiLCJ1cmxTaG9ydG5lciIsImVyciIsInRpbnlfdXJsIiwib3ZlcmxheUNsaWNrIiwic2VhcmNoQ2l0aWVzIiwic3R5bGUiLCJ6SW5kZXgiLCJoaWRlTG9jYXRpb25Qb3B1cCIsInBvcHVwQ29udGFpbmVyIiwiY3JpdGVyaWFTdHIiLCJhbGlnbkl0ZW1zIiwiZmxleCIsInRvZ2dsZUZpbHRlciIsIm1hcmdpbkxlZnQiLCJoYW5kbGVPcGVuIiwic29ydFR5cGUiLCJoZWlnaHQiLCJyZWYiLCJjaGlsZCIsIkxvY2F0aW9uUG9wdXBDb250YWluZXIiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJTRUFSQ0hfQ1JJVEVSSUFfT1BEIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJTZWFyY2hQYWNrYWdlcyIsImxvYWREYXRhIiwic3RvcmUiLCJxdWVyeVBhcmFtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9jYXRpb25fbXMiLCJzZWFyY2hVcmwiLCJ0b0xvd2VyQ2FzZSIsImNvbnNvbGUiLCJlcnJvciIsInBhc3NlZFByb3BzIiwic3RhdGljQ29udGV4dCIsIkxPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCIiwiY29ycG9yYXRlQ291cG9uIiwiU0VBUkNIX0NSSVRFUklBX0xBQlMiLCJjb21tb25fc2V0dGluZ3MiLCJkZXZpY2VfaW5mbyIsIlVTRVIiLCJMQUJfU0VBUkNIX0RBVEEiLCJTRVRfRlJPTV9TRVJWRVIiLCJMQUJfU0VBUkNIIiwiZnJvbV9zZXJ2ZXIiLCJzZWFyY2hCeVVybCIsImNyaXRlcmlhIiwiZm9yY2VBZGQiLCJnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHMiLCJzZWFyY2hTdHJpbmciLCJjYWxsYmFjayIsInNlbGVjdFNlYXJjaFR5cGUiLCJ0b2dnbGVPUERDcml0ZXJpYSIsInJlc2NoZWR1bGUiLCJsb2FkT1BESW5zdXJhbmNlIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBRWVBLDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOztBQUVBOzs7Ozs7QUFEQSxNQUFNQyxjQUFjQyxtQkFBT0EsQ0FBQyxrQ0FBUixDQUFwQjs7O0FBR0EsTUFBTUMsaUJBQU4sU0FBZ0NDLGdCQUFNQyxTQUF0QyxDQUFnRDs7QUFFNUNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyxvQkFBUSxFQURDO0FBRVRDLDZCQUFpQjtBQUZSLFNBQWI7QUFJSDs7QUFFREMsOEJBQTBCSixLQUExQixFQUFpQztBQUM3QixZQUFJQSxNQUFNSyxnQkFBTixJQUEwQixLQUFLTCxLQUFMLENBQVdLLGdCQUF6QyxFQUEyRDtBQUN2RCxnQkFBSSxLQUFLSixLQUFMLENBQVdDLE1BQWYsRUFBdUI7QUFDbkIsb0JBQUlGLE1BQU1LLGdCQUFOLElBQTBCLEtBQUtMLEtBQUwsQ0FBV0ssZ0JBQXpDLEVBQTJEO0FBQ3ZELHlCQUFLQyxRQUFMLENBQWMsRUFBRUgsaUJBQWlCSCxNQUFNSyxnQkFBekIsRUFBMkNILFFBQVFGLE1BQU1LLGdCQUFOLENBQXVCRSxpQkFBMUUsRUFBZDtBQUNIO0FBQ0osYUFKRCxNQUlPLElBQUksQ0FBQ1AsTUFBTVEsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEIsS0FBNUIsQ0FBTCxFQUF5QztBQUM1QyxxQkFBS0gsUUFBTCxDQUFjLEVBQUVILGlCQUFpQkgsTUFBTUssZ0JBQXpC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LDZCQUFpQm5RLElBQWpCLENBQVQsQ0FmekI7QUFnQkhpQywwQkFBa0IsQ0FBQ25KLElBQUQsRUFBT2lLLEdBQVAsS0FBZW9OLFNBQVMsNkJBQWlCclgsSUFBakIsRUFBdUJpSyxHQUF2QixDQUFULENBaEI5QjtBQWlCSE4sNEJBQW9CLENBQUMzSixJQUFELEVBQU9pSyxHQUFQLEtBQWNvTixTQUFTLCtCQUFtQnJYLElBQW5CLEVBQXlCaUssR0FBekIsQ0FBVCxDQWpCL0I7QUFrQkhsSiw4QkFBcUIsTUFBS3NXLFNBQVMsa0NBQVQsQ0FsQnZCO0FBbUJIekksMkJBQWtCLENBQUMzUSxJQUFELEVBQU1xTSxFQUFOLEtBQVkrTSxTQUFTLDhCQUFrQnBaLElBQWxCLEVBQXdCcU0sRUFBeEIsQ0FBVCxDQW5CM0I7QUFvQkhtRSwyQkFBbUIrSyxNQUFELElBQVduQyxTQUFTLDhCQUFrQm1DLE1BQWxCLENBQVQ7QUFwQjFCLEtBQVA7QUFzQkgsQ0F2QkQ7O2tCQXlCZSx5QkFBUXRDLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q0UsY0FBN0MsQyIsImZpbGUiOiI0Ny5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9jYXRpb25Qb3B1cCBmcm9tICcuL2xvY2F0aW9uUG9wdXBWaWV3J1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhdGlvblBvcHVwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgX2dldGxvY2F0aW9uRnJvbUxhdExvbmcgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL21hcEhlbHBlcnMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bSdcblxuY2xhc3MgTG9jYXRpb25Qb3B1cFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWFyY2g6ICcnLFxuICAgICAgICAgICAgbG9jYXRpb25fb2JqZWN0OiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbl9vYmplY3Q6IHByb3BzLnNlbGVjdGVkTG9jYXRpb24sIHNlYXJjaDogcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbl9vYmplY3Q6IHByb3BzLnNlbGVjdGVkTG9jYXRpb24sIHNlYXJjaDogcHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZSAmJiAhdGhpcy5wcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uX29iamVjdDogdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLCBzZWFyY2g6IHRoaXMucHJvcHMubG9jYXRpb25OYW1lIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcyB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ29Ub0xvY2F0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc1RvcGJhcikge1xuICAgICAgICAgICAgbGV0IHJlZGlyZWN0X3RvID0gXCJcIlxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnc3B0Y2l0JykgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdzcHRsaXRjaXQnKSkge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvb3BkL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdsYmNpdCcpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbGJsaXRjaXQnKSkge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvbGFiL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25fdXJsID0gJy9sb2NhdGlvbnNlYXJjaCdcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdF90bykge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uX3VybCArPSBgP3JlZGlyZWN0X3RvPSR7cmVkaXJlY3RfdG99YFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhbmdlTG9jYXRpb25Eb2N0b3JSZXN1bHRzUG9wVXAnLCAnQWN0aW9uJzogJ2NoYW5nZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYW5nZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChsb2NhdGlvbl91cmwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb250aW51ZUxvY2F0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnRpbnVlTG9jYXRpb25Eb2N0b3JSZXN1bHRzUG9wVXAnLCAnQWN0aW9uJzogJ2NvbnRpbnVlLWxvY2F0aW9uLWRvY3Rvci1yZXN1bHRzLVBvcFVwJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29udGludWUtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgaWYgKHBhcnNlZC5sYXQgJiYgcGFyc2VkLmxvbmcpIHtcbiAgICAgICAgICAgIF9nZXRsb2NhdGlvbkZyb21MYXRMb25nKHBhcnNlZC5sYXQsIHBhcnNlZC5sb25nLCAnbG9jYWxpdHknLCAobG9jYXRpb25EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExvY2F0aW9uKGxvY2F0aW9uRGF0YSwgJ2F1dG9EZXRlY3QnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyLWxvY2F0aW9uLXBvcHVwLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LW1kXCI+U2hvd2luZyB7dGhpcy5wcm9wcy5jb3VudH0gcmVzdWx0cyA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA3MDAgfX0+e3RoaXMucHJvcHMuY3JpdGVyaWFTdHJpbmcgPyBgZm9yICR7dGhpcy5wcm9wcy5jcml0ZXJpYVN0cmluZ31gIDogJyd9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy03MDAgdGV4dC1tZFwiPnt0aGlzLnByb3BzLmxvY2F0aW9uTmFtZSA/IGAgaW4gJHt0aGlzLnByb3BzLmxvY2F0aW9uTmFtZX1gIDogJyd9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXJ0LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZnctNTAwIGZyLXBvcHVwLWNvbnRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNvbnRpbnVlTG9jYXRpb24oKX0+Q29udGludWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgbXJ0LTIwIHRleHQteHNcIj5PUjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ydC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZ3LTUwMCBmci1wb3B1cC1jaGFuZ2VcIiBvbkNsaWNrPXt0aGlzLmdvVG9Mb2NhdGlvbi5iaW5kKHRoaXMpfT5DaGFuZ2UgTG9jYXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvblBvcHVwVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuaW1wb3J0IHsgYnVpbGRPcGVuQmFubmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCB7IFhfT0sgfSBmcm9tICdjb25zdGFudHMnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgQ29tbW9uVmlwR29sZEJhZGdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvY29tbW9uVmlwR29sZEJhZGdlLmpzJ1xuaW1wb3J0IENvbW1vblZpcEdvbGROb25Mb2dpbkJhZGdlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvY29tbW9uVmlwR29sZE5vbkxvZ2luQmFkZ2UuanMnXG5cbmNsYXNzIExhYlByb2ZpbGVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuTGFiKGlkLCB1cmwsIHRlc3RfaWQsIHRlc3RfbmFtZSwgZSkge1xuICAgICAgICB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cygpXG4gICAgICAgIGxldCB0ZXN0SWRzID0gdGVzdF9pZFxuICAgICAgICAvLyBsZXQgZGVkdXBlX2lkcyA9IHt9XG4gICAgICAgIC8vIGxldCB0ZXN0SWRzID0gdGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhc1xuICAgICAgICAvLyAgICAgLnJlZHVjZSgoZmluYWwsIHgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBmaW5hbCA9IGZpbmFsIHx8IFtdXG4gICAgICAgIC8vICAgICAgICAgaWYgKHgudGVzdCAmJiB4LnR5cGUgPT0gXCJjb25kaXRpb25cIikge1xuICAgICAgICAvLyAgICAgICAgICAgICB4LnRlc3QgPSB4LnRlc3QgfHwgW11cbiAgICAgICAgLy8gICAgICAgICAgICAgZmluYWwgPSBbLi4uZmluYWwsIC4uLngudGVzdF1cbiAgICAgICAgLy8gICAgICAgICB9IGVsc2UgaWYgKHgudHlwZSA9PSBcInRlc3RcIikge1xuICAgICAgICAvLyAgICAgICAgICAgICBmaW5hbC5wdXNoKHgpXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBmaW5hbFxuICAgICAgICAvLyAgICAgfSwgW10pXG4gICAgICAgIC8vICAgICAuZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGRlZHVwZV9pZHNbeC5pZF0pIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZGVkdXBlX2lkc1t4LmlkXSA9IHRydWVcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KS5tYXAoKHRlc3QpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgbmV3X3Rlc3QgPSBPYmplY3QuYXNzaWduKHt9LCB0ZXN0KVxuICAgICAgICAvLyAgICAgICAgIG5ld190ZXN0LmV4dHJhX3Rlc3QgPSB0cnVlXG4gICAgICAgIC8vICAgICAgICAgbmV3X3Rlc3QubGFiX2lkID0gaWRcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgbmV3X3Rlc3QsIHRydWUpXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICBsZXQgbmV3X3Rlc3QgPSB7fVxuICAgICAgICBuZXdfdGVzdC5leHRyYV90ZXN0ID0gdHJ1ZVxuICAgICAgICBuZXdfdGVzdC5sYWJfaWQgPSBpZFxuICAgICAgICBuZXdfdGVzdC50eXBlID0gJ3Rlc3QnXG4gICAgICAgIG5ld190ZXN0Lm5hbWUgPSB0ZXN0X25hbWVcbiAgICAgICAgbmV3X3Rlc3QuaWQgPSB0ZXN0X2lkXG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCBuZXdfdGVzdCwgdHJ1ZSlcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1JhbmtPZkxhYkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdyYW5rLWxhYi1jbGlja2VkJywgJ1JhbmsnOiB0aGlzLnByb3BzLnJhbmsgKyAxXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJTZWxlY3RlZEJ5VXNlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1zZWxlY3RlZC1ieS11c2VyJywgJ0xhYklkJzogaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dXJsfWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7aWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJvb2tOb3dDbGlja2VkKGlkLCB1cmwsIHRlc3RfaWQsIHRlc3RfbmFtZSwgZSkge1xuICAgICAgICBsZXQgc2xvdCA9IHsgdGltZToge30gfVxuICAgICAgICB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cygpXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiVGltZVNMb3Qoc2xvdCwgZmFsc2UpXG4gICAgICAgIGxldCBzZWxlY3RlZFR5cGUgPSB7XG4gICAgICAgICAgICByX3BpY2t1cDogJ2hvbWUnLFxuICAgICAgICAgICAgcF9waWNrdXA6ICdob21lJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlKHNlbGVjdGVkVHlwZSlcblxuICAgICAgICBsZXQgbmV3X3Rlc3QgPSB7fVxuICAgICAgICBuZXdfdGVzdC5leHRyYV90ZXN0ID0gdHJ1ZVxuICAgICAgICBuZXdfdGVzdC5sYWJfaWQgPSBpZFxuICAgICAgICBuZXdfdGVzdC50eXBlID0gJ3Rlc3QnXG4gICAgICAgIG5ld190ZXN0Lm5hbWUgPSB0ZXN0X25hbWVcbiAgICAgICAgbmV3X3Rlc3QuaWQgPSB0ZXN0X2lkXG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCBuZXdfdGVzdCwgdHJ1ZSlcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1JhbmtPZkxhYkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdyYW5rLWxhYi1jbGlja2VkJywgJ1JhbmsnOiB0aGlzLnByb3BzLnJhbmsgKyAxXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJTZWxlY3RlZEJ5VXNlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1zZWxlY3RlZC1ieS11c2VyJywgJ0xhYklkJzogaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvJHtpZH0vYm9va2ApXG4gICAgfVxuXG5cbiAgICB0ZXN0SW5mbyh0ZXN0X2lkLCBsYWJfaWQsIHRlc3RfdXJsLCBpc0NhdGVnb3J5LCBldmVudCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRfdGVzdF9pZHMgPSBbXVxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcykubWFwKGZ1bmN0aW9uIChba2V5LCB2YWx1ZV0pIHtcbiAgICAgICAgICAgIHNlbGVjdGVkX3Rlc3RfaWRzLnB1c2godmFsdWUuaWQpXG4gICAgICAgIH0pXG4gICAgICAgIHZhciB1cmxfc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xuICAgICAgICB2YXIgc2VhcmNoX2lkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJzZWFyY2hfaWRcIik7XG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGF0ID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGVzdF91cmwgJiYgdGVzdF91cmwgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyArIHRlc3RfdXJsICsgJz90ZXN0X2lkcz0nICsgdGVzdF9pZCArICcmc2VsZWN0ZWRfdGVzdF9pZHM9JyArIHNlbGVjdGVkX3Rlc3RfaWRzICsgJyZzZWFyY2hfaWQ9JyArIHNlYXJjaF9pZCArICcmbGFiX2lkPScgKyBsYWJfaWQgKyAnJmxhdD0nICsgbGF0ICsgJyZsb25nPScgKyBsb25nICsgJyZpc0NhdGVnb3J5PScgKyBpc0NhdGVnb3J5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2gvdGVzdGluZm8/dGVzdF9pZHM9JyArIHRlc3RfaWQgKyAnJnNlbGVjdGVkX3Rlc3RfaWRzPScgKyBzZWxlY3RlZF90ZXN0X2lkcyArICcmc2VhcmNoX2lkPScgKyBzZWFyY2hfaWQgKyAnJmxhYl9pZD0nICsgbGFiX2lkICsgJyZsYXQ9JyArIGxhdCArICcmbG9uZz0nICsgbG9uZyArICcmaXNDYXRlZ29yeT0nICsgaXNDYXRlZ29yeSlcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd0ZXN0SW5mb0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndGVzdC1pbmZvLWNsaWNrJywgJ3BhZ2VTb3VyY2UnOiAnbGFiLXRlc3QtcGFnZSdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgIH1cblxuICAgIHRvZ2dsZUNvbXBhcmUoaWQsIGxhYl9pZCwgbGFiX3RodW1ibmFpbCwgbmFtZSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRQa2dDb21wYXJlSWRzID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLm1hcCgocGFja2FnZXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFBrZ0NvbXBhcmVJZHMucHVzaChwYWNrYWdlcy5pZClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdGVkUGtnQ29tcGFyZUlkcy5pbmRleE9mKGlkKSA9PSAtMSAmJiBzZWxlY3RlZFBrZ0NvbXBhcmVJZHMubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJNYXggNSBwYWNrYWdlcyBjYW4gYmUgY29tcGFyZWRcIiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQWRkZWRUb0NvbXBhcmUnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdhZGRlZC10by1jb21wYXJlJywgJ0xhYklkJzogbGFiX2lkLCAndGVzdElkJzogaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUNvbXBhcmVQYWNrYWdlcyhpZCwgbGFiX2lkLCBsYWJfdGh1bWJuYWlsLCBuYW1lKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ29sZENsaWNrZWQoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdWaXBHb2xkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ZpcC1wYWNrYWdlLWdvbGQtY2xpY2tlZCdcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1nb2xkLWRldGFpbHM/aXNfZ29sZD10cnVlJnNvdXJjZT1wYWNrYWdlZ29sZGxpc3RpbmcmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgZGlzY291bnRlZF9wcmljZSwgcHJpY2UsIGxhYiwgZGlzdGFuY2UsIHBpY2t1cF9hdmFpbGFibGUsIGxhYl90aW1pbmcsIGxhYl90aW1pbmdfZGF0YSwgbXJwLCBuZXh0X2xhYl90aW1pbmcsIG5leHRfbGFiX3RpbWluZ19kYXRhLCBkaXN0YW5jZV9yZWxhdGVkX2NoYXJnZXMsIHBpY2t1cF9jaGFyZ2VzLCBuYW1lLCBpZCwgbnVtYmVyX29mX3Rlc3RzLCBzaG93X2RldGFpbHMsIGNhdGVnb3JpZXMsIGNhdGVnb3J5X2RldGFpbHMsIGFkZHJlc3MsIGluY2x1ZGVkX2luX3VzZXJfcGxhbiwgaW5zdXJhbmNlLCB2aXAgfSA9IHRoaXMucHJvcHMuZGV0YWlscztcbiAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmNlaWwoZGlzdGFuY2UgLyAxMDAwKTtcbiAgICAgICAgdmFyIG9wZW5pbmdUaW1lID0gJydcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGV0YWlscy5sYWJfdGltaW5nKSB7XG4gICAgICAgICAgICBvcGVuaW5nVGltZSA9IHRoaXMucHJvcHMuZGV0YWlscy5sYWJfdGltaW5nLnNwbGl0KCctJylbMF07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGlja3VwX3RleHQgPSBcIlwiXG4gICAgICAgIGlmIChwaWNrdXBfYXZhaWxhYmxlID09IDEgJiYgZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzID09IDEpIHtcbiAgICAgICAgICAgIHBpY2t1cF90ZXh0ID0gXCJIb21lIHBpY2t1cCBjaGFyZ2VzIGFwcGxpY2FibGVcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBpY2t1cF9hdmFpbGFibGUgPT0gMSAmJiAhZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzKSB7XG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiSW5jbHVzaXZlIG9mIGhvbWUgdmlzaXQgY2hhcmdlc1wiXG4gICAgICAgICAgICBkaXNjb3VudGVkX3ByaWNlID0gcGFyc2VJbnQoZGlzY291bnRlZF9wcmljZSkgKyBwYXJzZUludChwaWNrdXBfY2hhcmdlcylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwaWNrdXBfYXZhaWxhYmxlID09IDApIHtcbiAgICAgICAgICAgIHBpY2t1cF90ZXh0ID0gXCJDZW50ZXIgdmlzaXQgcmVxdWlyZWRcIlxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhpZGVfcHJpY2UgPSBmYWxzZVxuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcyAmJiB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5tYXAoKHgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoeC5oaWRlX3ByaWNlKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGhpZGVfcHJpY2UgPSB0cnVlXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgb2ZmUGVyY2VudCA9ICcnXG4gICAgICAgIGlmIChtcnAgJiYgZGlzY291bnRlZF9wcmljZSAmJiAoZGlzY291bnRlZF9wcmljZSA8IG1ycCkpIHtcbiAgICAgICAgICAgIG9mZlBlcmNlbnQgPSBwYXJzZUludCgoKG1ycCAtIGRpc2NvdW50ZWRfcHJpY2UpIC8gbXJwKSAqIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZWRfaW5fdXNlcl9wbGFuKSB7XG4gICAgICAgICAgICBoaWRlX3ByaWNlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxlY3RlZFBrZ0NvbXBhcmVJZHMgPSBbXVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubWFwKChwYWNrYWdlcywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkUGtnQ29tcGFyZUlkcy5wdXNoKHBhY2thZ2VzLmlkLCBwYWNrYWdlcy5sYWJfaWQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGlmIChpbnN1cmFuY2UgJiYgaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIGluc3VyYW5jZS5pc191c2VyX2luc3VyZWQpIHtcbiAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIC8vIGxldCBpc192aXBfYXBwbGljYWJsZSA9IHZpcC5pc192aXBfbWVtYmVyICYmIHZpcC5jb3ZlcmVkX3VuZGVyX3ZpcFxuICAgICAgICAvLyBsZXQgdmlwX2Ftb3VudCA9IHZpcC52aXBfYW1vdW50XG5cbiAgICAgICAgbGV0IGlzX3ZpcF9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IHZpcF9hbW91bnRcbiAgICAgICAgbGV0IGlzX2VuYWJsZV9mb3JfdmlwID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX3ZpcF9nb2xkID0gZmFsc2VcblxuICAgICAgICBpZiAodmlwICYmIE9iamVjdC5rZXlzKHZpcCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaXNfdmlwX2FwcGxpY2FibGUgPSB2aXAuaXNfdmlwX21lbWJlciAmJiB2aXAuY292ZXJlZF91bmRlcl92aXBcbiAgICAgICAgICAgIHZpcF9hbW91bnQgPSB2aXAudmlwX2Ftb3VudFxuICAgICAgICAgICAgaXNfdmlwX2dvbGQgPSB2aXAuaXNfZ29sZF9tZW1iZXJcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IGlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcCA9IHZpcC5pc19lbmFibGVfZm9yX3ZpcFxuICAgICAgICBsZXQgaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZCA9IHZpcC5pc19nb2xkXG4gICAgICAgIGxldCBpc192aXBfbWVtYmVyID0gdmlwLmlzX3ZpcF9tZW1iZXJcbiAgICAgICAgbGV0IGlzX2dvbGRfbWVtYmVyID0gdmlwLmlzX2dvbGRfbWVtYmVyXG4gICAgICAgIGxldCBjb3ZlcmVkX3VuZGVyX3ZpcCA9IHZpcC5jb3ZlcmVkX3VuZGVyX3ZpcFxuXG4gICAgICAgIGxldCBzaG93X2NvbW1vbl9wcmljZXMgPSAhaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwIHx8ICgoaXNfZ29sZF9tZW1iZXIgfHwgaXNfdmlwX21lbWJlcikgJiYgIWNvdmVyZWRfdW5kZXJfdmlwKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jYXJkLWNvbnRhaW5lciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLmlzQ29tcGFyZWQgJiYgKHRoaXMucHJvcHMuaXNDb21wYXJlIHx8IHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5sZW5ndGggPiAwKSA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZWxlY3RlZFBrZ0NvbXBhcmVJZHMuaW5kZXhPZihpZCkgPiAtMSAmJiBzZWxlY3RlZFBrZ0NvbXBhcmVJZHMuaW5kZXhPZihsYWIuaWQpID4gLTEgPyAncGtnLWNyZC1oZWFkZXIgcGtnLWNyZC1ncmVlbiAnIDogJ3BrZy1jcmQtaGVhZGVyICd9IHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCI+e3NlbGVjdGVkUGtnQ29tcGFyZUlkcy5pbmRleE9mKGlkKSA+IC0xICYmIHNlbGVjdGVkUGtnQ29tcGFyZUlkcy5pbmRleE9mKGxhYi5pZCkgPiAtMSA/ICdBZGRlZCcgOiAnQWRkIHRvIGNvbXBhcmUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbXBhcmUuYmluZCh0aGlzLCBpZCwgbGFiLmlkLCBsYWIubGFiX3RodW1ibmFpbCwgbmFtZSl9IGNoZWNrZWQ9e3NlbGVjdGVkUGtnQ29tcGFyZUlkcy5pbmRleE9mKGlkKSA+IC0xICYmIHNlbGVjdGVkUGtnQ29tcGFyZUlkcy5pbmRleE9mKGxhYi5pZCkgPiAtMSA/IHRydWUgOiBmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jb250ZW50LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhaGlkZV9wcmljZSAmJiBvZmZQZXJjZW50ICYmIG9mZlBlcmNlbnQgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwa2ctb2ZyLXJpYmJvbiBmdy03MDBcIj57b2ZmUGVyY2VudH0lIE9GRjwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9ICovfVxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwa2ctY2FyZC1sb2NhdGlvbiBwLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIGNsYXNzTmFtZT1cImZsdHItbG9jLWljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL25ldy1sb2MtaWNvLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogJzEycHgnLCBoZWlnaHQ6ICcxOHB4JyB9fSAvPiB7bGFiLmxvY2FsaXR5fSB7bGFiLmNpdHl9IDwvcD48c3BhbiBjbGFzc05hbWU9XCJrbVRydW5hdGVcIj4gfCB7ZGlzdGFuY2V9IEttPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWNhcmQtY29udGVudCBtLTBcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jYXJkbGVmdC1pbWcgbnctcGtnLWNyZC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbml0aWFsc1BpY3R1cmUgbmFtZT17bGFiLm5hbWV9IGhhc19pbWFnZT17ISFsYWIubGFiX3RodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbHRyLXVzci1pbWFnZS1sYWJcIiBzcmM9e2xhYi5sYWJfdGh1bWJuYWlsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Jbml0aWFsc1BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoeS1zdWItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwaWNrdXBfYXZhaWxhYmxlID09IDEgJiYgZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzID09IDAgJiYgbGFiLmlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkICYmIGxhYi5ob21lX3BpY2t1cF9jaGFyZ2VzID09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtcGt1cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sYWJ5MS5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZyZWUgU2FtcGxlIDxzcGFuIGNsYXNzTmFtZT1cInRzdGJsa1wiPkNvbGxlY3Rpb248L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiICYmIGxhYi5pc190aHlyb2NhcmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3QtcGt1cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9sYWJ5My5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkludGVncmF0ZWQgPHNwYW4gY2xhc3NOYW1lPVwidHN0YmxrXCI+TGFiPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvJHt0aGlzLnByb3BzLmRldGFpbHMudXJsIHx8ICcnfWB9IG9uQ2xpY2s9e3RoaXMudGVzdEluZm8uYmluZCh0aGlzLCBpZCwgdGhpcy5wcm9wcy5kZXRhaWxzLmxhYi5pZCwgdGhpcy5wcm9wcy5kZXRhaWxzLnVybCA/IHRoaXMucHJvcHMuZGV0YWlscy51cmwgOiAnJywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwa2ctbGFiRG9jLU5hbWVcIj57bmFtZX0ge3Nob3dfZGV0YWlscyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgJ21hcmdpbkxlZnQnOiAnNXB4JywgbWFyZ2luVG9wOiAnMnB4JywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3RJbmZvLmJpbmQodGhpcywgaWQsIHRoaXMucHJvcHMuZGV0YWlscy5sYWIuaWQsIHRoaXMucHJvcHMuZGV0YWlscy51cmwgPyB0aGlzLnByb3BzLmRldGFpbHMudXJsIDogJycsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7dGhpcy5wcm9wcy5kZXRhaWxzLnVybCB8fCAnJ31gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2NwL2Fzc2V0cy9pbWcvaWNvbnMvSW5mby5zdmdcIiBzdHlsZT17eyB3aWR0aDogJzE1cHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJfb2ZfdGVzdHMgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibGFiLWZsdHItZGMtbmFtZSBmdy01MDAgcGtnLWluY2x1ZGVcIiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19PntudW1iZXJfb2ZfdGVzdHMgPyBgJHtudW1iZXJfb2ZfdGVzdHN9IFRlc3RzIEluY2x1ZGVkYCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBib29raW5nLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jYXJkLXByaWNlIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIWlzX3ZpcF9hcHBsaWNhYmxlIHx8ICF2aXAuaXNfZ29sZF9tZW1iZXIpICYmIGZhbHNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGMtcHJjXCI+RG9jcHJpbWUgUHJpY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmICFzaG93X2NvbW1vbl9wcmljZXMpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uVmlwR29sZEJhZGdlIGlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcD17aXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwfSBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkPXtpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkfSBpc192aXBfbWVtYmVyPXtpc192aXBfbWVtYmVyfSBpc19nb2xkX21lbWJlcj17aXNfZ29sZF9tZW1iZXJ9IGNvdmVyZWRfdW5kZXJfdmlwPXtjb3ZlcmVkX3VuZGVyX3ZpcH0gdmlwX2RhdGE9e3ZpcH0gey4uLnRoaXMucHJvcHN9IG1ycD17bXJwfSBkaXNjb3VudGVkX3ByaWNlPXtkaXNjb3VudGVkX3ByaWNlfSBnb2xkQ2xpY2tlZD17dGhpcy5nb2xkQ2xpY2tlZC5iaW5kKHRoaXMpfSBpc19wYWNrYWdlPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAgICBpc192aXBfYXBwbGljYWJsZSAmJiAhdmlwLmlzX2dvbGRfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnZpcC5pc19nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmlwLW1haW4taWNvIGltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvZ29sZC1zbS5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyp2aXAuaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPuKCuSB7cGFyc2VJbnQodmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnQrdmlwLnZpcF9hbW91bnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGtnLWN1dC1wcmljZVwiPuKCuSB7cGFyc2VJbnQobXJwKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6JycqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qaXNfdmlwX2FwcGxpY2FibGUgJiYgIXZpcC5pc19nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+4oK5IHtwYXJzZUludCh2aXBfYW1vdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBrZy1jdXQtcHJpY2VcIj7igrkge3BhcnNlSW50KG1ycCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhaGlkZV9wcmljZSAmJiBkaXNjb3VudGVkX3ByaWNlICYmIHNob3dfY29tbW9uX3ByaWNlcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGRpc2NvdW50ZWRfcHJpY2UpICE9IHBhcnNlSW50KG1ycCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+4oK5IHtwYXJzZUludChkaXNjb3VudGVkX3ByaWNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwa2ctY3V0LXByaWNlXCI+4oK5IHtwYXJzZUludChtcnApfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPuKCuSB7cGFyc2VJbnQoZGlzY291bnRlZF9wcmljZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX3ByaWNlID8gPHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+4oK5IDA8L3A+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkgezB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdmFsLWJ4XCI+Q292ZXJlZCBVbmRlciBJbnN1cmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgIWhpZGVfcHJpY2UgJiYgb2ZmUGVyY2VudCAmJiBvZmZQZXJjZW50ID4gMCAmJiBzaG93X2NvbW1vbl9wcmljZXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYy1jcG4taW5jbHVkZVwiPntvZmZQZXJjZW50fSUgT2ZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmICFpbmNsdWRlZF9pbl91c2VyX3BsYW4gJiYgZGlzY291bnRlZF9wcmljZSAhPSBwcmljZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KGluY2x1ZGVzIENvdXBvbik8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhaXNfdmlwX2FwcGxpY2FibGUgJiYgZGlzY291bnRlZF9wcmljZT4odmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR8fDAgKyB2aXAudmlwX2dvbGRfcHJpY2V8fDApICYmICF2aXAuaXNfZ29sZF9tZW1iZXIgPyA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZCBnb2xkQ2FyZFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZ29sZENsaWNrZWQoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ2xkLWNkLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30vPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ2xkLXAtcmNcIj5QcmljZTwvcD4gPHNwYW4gY2xhc3NOYW1lPVwiZ2xkLXJhdGUtbGZcIj7igrkge3ZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50KyB2aXAudmlwX2dvbGRfcHJpY2V9PC9zcGFuPjxpbWcgc3R5bGU9e3t0cmFuc2Zvcm06ICdyb3RhdGUoLTkwZGVnKScsIHdpZHRoOiAnMTBweCd9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL2Ryb3Bkb3duLWFycm93LnN2Zyd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmICFzaG93X2NvbW1vbl9wcmljZXMpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25WaXBHb2xkTm9uTG9naW5CYWRnZSBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXA9e2lzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcH0gaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZD17aXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZH0gaXNfdmlwX21lbWJlcj17aXNfdmlwX21lbWJlcn0gaXNfZ29sZF9tZW1iZXI9e2lzX2dvbGRfbWVtYmVyfSBjb3ZlcmVkX3VuZGVyX3ZpcD17Y292ZXJlZF91bmRlcl92aXB9IHZpcF9kYXRhPXt2aXB9IHsuLi50aGlzLnByb3BzfSBtcnA9e21ycH0gZGlzY291bnRlZF9wcmljZT17ZGlzY291bnRlZF9wcmljZX0gZ29sZENsaWNrZWQ9e3RoaXMuZ29sZENsaWNrZWQuYmluZCh0aGlzKX0gaXNfcGFja2FnZT17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgLyR7dGhpcy5wcm9wcy5kZXRhaWxzLmxhYi51cmx9YH0gb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBrZy1idG4tbndcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206IDAgfX0gb25DbGljaz17dGhpcy5ib29rTm93Q2xpY2tlZC5iaW5kKHRoaXMsIHRoaXMucHJvcHMuZGV0YWlscy5sYWIuaWQsIHRoaXMucHJvcHMuZGV0YWlscy5sYWIudXJsLCBpZCwgbmFtZSl9PkJvb2sgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgIWluY2x1ZGVkX2luX3VzZXJfcGxhbiAmJiBkaXNjb3VudGVkX3ByaWNlICE9IHByaWNlID8gPHAgY2xhc3NOYW1lPVwicGtnLWRpc2NvdW50Q3BuXCI+SW5jbHVkZXMgY291cG9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZWRfaW5fdXNlcl9wbGFuICYmICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLWRpc2NvdW50Q3BuXCI+RG9jcHJpbWUgQ2FyZSBCZW5lZml0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWluY2x1ZGVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5X2RldGFpbHMgJiYgY2F0ZWdvcnlfZGV0YWlscy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X2RldGFpbHMubWFwKChjYXRlZ29yeV9kZXRhaWwsIGspID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT1cInBrZ0luY2x1ZGVMaXN0XCIga2V5PXtrfSBpZD17a30gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17dGhpcy50ZXN0SW5mby5iaW5kKHRoaXMsIGlkLCB0aGlzLnByb3BzLmRldGFpbHMubGFiLmlkLCB0aGlzLnByb3BzLmRldGFpbHMudXJsID8gdGhpcy5wcm9wcy5kZXRhaWxzLnVybCA6ICcnLCB0cnVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeV9kZXRhaWwuaWNvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIG1hcmdpblJpZ2h0OiAnNXB4JyB9fSBzcmM9e2NhdGVnb3J5X2RldGFpbC5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwXCI+e2NhdGVnb3J5X2RldGFpbC5uYW1lfSB7Y2F0ZWdvcnlfZGV0YWlsLnBhcmFtZXRlcl9jb3VudCA+IDEgPyBgKCR7Y2F0ZWdvcnlfZGV0YWlsLnBhcmFtZXRlcl9jb3VudH0pYCA6ICcnfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jcmQtZm9vdC1pbWctdGV4dCBwa2ctbmV3LXRpbWUtc2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvd2F0Y2gtZGF0ZS5zdmdcIn0gc3R5bGU9e3sgbWFyZ2luVG9wOiAnMHB4Jywgd2lkdGg6ICcxNXB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2J1aWxkT3BlbkJhbm5lcihsYWJfdGltaW5nLCBsYWJfdGltaW5nX2RhdGEsIG5leHRfbGFiX3RpbWluZywgbmV4dF9sYWJfdGltaW5nX2RhdGEpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtQ2FyZEZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jcmQtZm9vdC1pbWctdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6ICcxMHB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2xhYi5sb2NhbGl0eX0ge2xhYi5jaXR5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwicGtnLWNyZC1mb290LWltZy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2luZm9lcnJvci5zdmdcIn0gc3R5bGU9e3sgbWFyZ2luVG9wOiAnMnB4Jywgd2lkdGg6ICcxNXB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3BpY2t1cF90ZXh0ID8gPHA+e3BpY2t1cF90ZXh0fTwvcD4gOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicGtnLWNyZC1mb290LWltZy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IHN0eWxlPXt7IG1hcmdpblRvcDogJzJweCcsIHdpZHRoOiAnMTVweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntidWlsZE9wZW5CYW5uZXIobGFiX3RpbWluZywgbGFiX3RpbWluZ19kYXRhLCBuZXh0X2xhYl90aW1pbmcsIG5leHRfbGFiX3RpbWluZ19kYXRhKX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtRG9jTG9jXCI+PHAgY2xhc3NOYW1lPVwiXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jc3RtZGlzdC5zdmdcIn0gLz57ZGlzdGFuY2V9IGttPC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExhYlByb2ZpbGVDYXJkXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGFja2FnZXNMaXN0cyBmcm9tICcuLi9zZWFyY2hQYWNrYWdlcy9wYWNrYWdlc0xpc3QvaW5kZXguanMnXG5pbXBvcnQgQ3JpdGVyaWFTZWFyY2ggZnJvbSAnLi4vLi4vY29tbW9ucy9jcml0ZXJpYVNlYXJjaCdcbmltcG9ydCBUb3BCYXIgZnJvbSAnLi90b3BCYXIvbmV3VG9wQmFyLmpzJ1xuaW1wb3J0IE5BVklHQVRFIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvbmF2aWdhdGUvaW5kZXguanMnO1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi8uLi9jb21tb25zL0hlbG1ldFRhZ3MnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvSG9tZS9mb290ZXInXG5pbXBvcnQgUmVzdWx0Q291bnQgZnJvbSAnLi90b3BCYXIvcmVzdWx0X2NvdW50LmpzJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcbmltcG9ydCBOb25JcGRQb3B1cFZpZXcgZnJvbSAnLi4vLi4vY29tbW9ucy9ub25JcGRQb3B1cC5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5cbmNsYXNzIFNlYXJjaFBhY2thZ2VzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGxldCBzZW9EYXRhID0gbnVsbFxuICAgICAgICBsZXQgZm9vdGVyRGF0YSA9IG51bGxcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5pdGlhbFNlcnZlckRhdGEpIHtcbiAgICAgICAgICAgIHNlb0RhdGEgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLnNlb0RhdGFcbiAgICAgICAgICAgIGZvb3RlckRhdGEgPSB0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhLmZvb3RlckRhdGFcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlb0RhdGEsIGZvb3RlckRhdGEsXG4gICAgICAgICAgICBzaG93RXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0NoYXRXaXRodXM6IGZhbHNlLFxuICAgICAgICAgICAgaXNTY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBpc0NvbXBhcmU6IGZhbHNlLFxuICAgICAgICAgICAgcXVpY2tGaWx0ZXI6IHt9LFxuICAgICAgICAgICAgc2hvd05vbklwZFBvcHVwOiBwYXJzZWQuc2hvd19wb3B1cCxcbiAgICAgICAgICAgIHRvX2JlX2ZvcmNlOjEsXG4gICAgICAgICAgICBpc19sZWFkX2VuYWJsZWQ6dHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmdldExhYkxpc3QodGhpcy5wcm9wcylcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0Rm9vdGVyRGF0YSh0aGlzLnByb3BzLm1hdGNoLnVybC5zcGxpdCgnLycpWzFdKS50aGVuKChmb290ZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZvb3RlckRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvb3RlckRhdGE6IGZvb3RlckRhdGEgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICB0cnl7IC8vIHNhdmUgdXRtIHBhcmFtcyBpZiBleGlzdHNcbiAgICAgICAgICAgIGlmKHBhcnNlZC51dG1fc291cmNlICYmIHBhcnNlZC51dG1fc291cmNlPT0nT2ZmbGluZUFmZmlsaWF0ZScpe1xuICAgICAgICAgICAgICAgIGxldCBzZXNzaW9uSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDMpKjIxICsgMTA1MFxuICAgICAgICAgICAgICAgIGlmKHNlc3Npb25TdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Nlc3Npb25JZFZhbCcsc2Vzc2lvbklkKSAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgc3BvX3RhZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIHV0bV90YWdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dG1fc291cmNlOiBwYXJzZWQudXRtX3NvdXJjZXx8JycsXG4gICAgICAgICAgICAgICAgICAgICAgICB1dG1fdGVybTogcGFyc2VkLnV0bV90ZXJtfHwnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0bV9tZWRpdW06IHBhcnNlZC51dG1fbWVkaXVtfHwnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0bV9jYW1wYWlnbjogcGFyc2VkLnV0bV9jYW1wYWlnbnx8JydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZXNzaW9uSWQ6IHNlc3Npb25JZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldENvbW1vblV0bVRhZ3MoJ3NwbycsIHNwb190YWdzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9Y2F0Y2goZSkge1xuXG4gICAgICAgIH1cblxuICAgICAgICAvL0NsZWFyIFV0bSB0YWdzIGZvciBTUE8sIGFmdGVyIDE1IG1pbnV0ZXNcbiAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkVmFsJykgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4PT54LnR5cGU9PSdzcG8nKS5sZW5ndGgpIHtcblxuICAgICAgICAgICAgbGV0IHNwb190YWdzID0gdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MuZmlsdGVyKHg9PngudHlwZT09J3NwbycpWzBdXG4gICAgICAgICAgICBsZXQgc2Vzc2lvblZhbCA9IHBhcnNlSW50KHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb25JZFZhbCcpKVxuICAgICAgICAgICAgaWYoc3BvX3RhZ3MudGltZSAmJiBzZXNzaW9uVmFsID09IHBhcnNlSW50KHNwb190YWdzLmN1cnJlbnRTZXNzaW9uSWQpKXtcbiAgICAgICAgICAgICAgICBsZXQgdGltZV9vZmZzZXQgPSAoY3VycmVudFRpbWUgLSBzcG9fdGFncy50aW1lKS82MDAwMFxuICAgICAgICAgICAgICAgIC8vQ2xlYXIgU1BPIHV0bSB0YWdzIGFmdGVyIDE1bWludXRlc1xuICAgICAgICAgICAgICAgIC8vOTAwXG4gICAgICAgICAgICAgICAgaWYodGltZV9vZmZzZXQ+MTgwKSB7IC8vIHJlbW92ZSBzcG8gdXRtIHBhcmFtcyBpZiBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51blNldENvbW1vblV0bVRhZ3MoJ3NwbycpIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q2hhdFdpdGh1czogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmZldGNoTmV3UmVzdWx0cyAmJiAocHJvcHMuZmV0Y2hOZXdSZXN1bHRzICE9IHRoaXMucHJvcHMuZmV0Y2hOZXdSZXN1bHRzKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRMYWJMaXN0KHByb3BzKVxuICAgICAgICAgICAgLy8gaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld191cmwgPSB0aGlzLmJ1aWxkVVJJKHByb3BzKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKG5ld191cmwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMb2NhdGlvblBhcmFtKHRhZykge1xuICAgICAgICAvLyB0aGlzIEFQSSBhc3N1bWVzIHRoZSBjb250ZXh0IG9mIHJlYWN0LXJvdXRlci00XG4gICAgICAgIGNvbnN0IHBhcmFtU3RyaW5nID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2hcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbVN0cmluZylcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5nZXQodGFnKVxuICAgIH1cblxuICAgIGdldExhYkxpc3Qoc3RhdGUgPSBudWxsLCBwYWdlID0gbnVsbCwgY2IgPSBudWxsKSB7IFxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgaWYgKHBhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBhZ2UgPSB0aGlzLnByb3BzLnBhZ2VcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMucHJvcHNcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5wYWdlKSB7XG4gICAgICAgICAgICBwYWdlID0gc3RhdGUucGFnZVxuICAgICAgICB9XG4gICAgICAgIGxldCBleHRyYV9wYXJhbXMgPSB7fVxuXG4gICAgICAgIGlmKHBhcnNlZC51dG1fdGVybSl7XG4gICAgICAgICAgICBleHRyYV9wYXJhbXMudXRtX3Rlcm0gPSBwYXJzZWQudXRtX3Rlcm0gfHwgXCJcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLnV0bV9tZWRpdW0pe1xuICAgICAgICAgICAgZXh0cmFfcGFyYW1zLnV0bV9tZWRpdW0gPSBwYXJzZWQudXRtX21lZGl1bSB8fCBcIlwiXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQudXRtX2NhbXBhaWduKXtcbiAgICAgICAgICAgIGV4dHJhX3BhcmFtcy51dG1fY2FtcGFpZ24gPSBwYXJzZWQudXRtX2NhbXBhaWduIHx8IFwiXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBhcnNlZC51dG1fc291cmNlKXtcbiAgICAgICAgICAgZXh0cmFfcGFyYW1zLnV0bV9zb3VyY2UgPSBwYXJzZWQudXRtX3NvdXJjZSB8fCBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRQYWNrYWdlcyhzdGF0ZSwgcGFnZSwgZmFsc2UsIG51bGwsZXh0cmFfcGFyYW1zLCAoLi4uYXJncykgPT4geyAvL2dldCBzZWFyY2hlZCBwYWNrYWdlcyByZXN1bHRcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBzZW9EYXRhOiBhcmdzWzFdIH0pXG4gICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICBjYiguLi5hcmdzKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3X3VybCA9IHRoaXMuYnVpbGRVUkkoc3RhdGUpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UobmV3X3VybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RXJyb3I6IHRydWUgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhcHBseUZpbHRlcnMoZmlsdGVyU3RhdGUpIHsgLy8gYXBwbHkgZmlsdGVyc1xuICAgICAgICAvLyB0aGlzLnByb3BzLm1lcmdlTEFCU3RhdGUoeyBmaWx0ZXJDcml0ZXJpYTogZmlsdGVyU3RhdGUgfSlcbiAgICAgICAgdGhpcy5yZXNldFF1aWNrRmlsdGVycygpXG4gICAgICAgIHRoaXMucHJvcHMubWVyZ2VMQUJTdGF0ZSh7IGZpbHRlckNyaXRlcmlhUGFja2FnZXM6IGZpbHRlclN0YXRlIH0pXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRRdWlja0ZpbHRlcnMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBxdWlja0ZpbHRlcjoge30gfSlcbiAgICB9XG5cbiAgICBhcHBseUNhdGVnb3JpZXMoY2F0ZWdvcnlTdGF0ZSwgZmlsdGVyc3RhdGUpIHsgLy8gYXBwbHkgY2F0ZWdvcnkgZmlsdGVyXG4gICAgICAgIGxldCBuZXdDYXRlZ29yeVN0YXRlID0ge31cbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnY2F0SWRzJ10gPSBjYXRlZ29yeVN0YXRlXG5cbiAgICAgICAgLypuZXdDYXRlZ29yeVN0YXRlWydkaXN0YW5jZVJhbmdlJ109ZmlsdGVyc3RhdGUuZGlzdGFuY2VSYW5nZVxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydwcmljZVJhbmdlJ109ZmlsdGVyc3RhdGUucHJpY2VSYW5nZVxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydzb3J0X29uJ109ZmlsdGVyc3RhdGUuc29ydF9vblxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydtYXhfcHJpY2UnXSA9IGZpbHRlcnN0YXRlLm1heF9wcmljZVxuICAgICAgICBcbiAgICAgICAgKi9cbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnc29ydF9vbiddID0gZmlsdGVyc3RhdGUuc29ydF9vblxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydzb3J0X29yZGVyJ10gPSBmaWx0ZXJzdGF0ZS5zb3J0X29yZGVyXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ2F2Z19yYXRpbmdzJ10gPSBmaWx0ZXJzdGF0ZS5hdmdfcmF0aW5nc1xuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydob21lX3Zpc2l0J10gPSBmaWx0ZXJzdGF0ZS5ob21lX3Zpc2l0XG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ2xhYl92aXNpdCddID0gZmlsdGVyc3RhdGUubGFiX3Zpc2l0XG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ21heF9hZ2UnXSA9IGZpbHRlcnN0YXRlLm1heF9hZ2VcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnbWluX2FnZSddID0gZmlsdGVyc3RhdGUubWluX2FnZVxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydnZW5kZXInXSA9IGZpbHRlcnN0YXRlLmdlbmRlclxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydwYWNrYWdlVHlwZSddID0gZmlsdGVyc3RhdGUucGFja2FnZVR5cGVcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsndGVzdF9pZHMnXSA9IGZpbHRlcnN0YXRlLnRlc3RfaWRzXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ3BhY2thZ2VfaWRzJ10gPSBmaWx0ZXJzdGF0ZS5wYWNrYWdlX2lkc1xuXG4gICAgICAgIC8vIHRoaXMucHJvcHMubWVyZ2VMQUJTdGF0ZSh7IGZpbHRlckNyaXRlcmlhOiBuZXdDYXRlZ29yeVN0YXRlIH0pXG4gICAgICAgIHRoaXMucHJvcHMubWVyZ2VMQUJTdGF0ZSh7IGZpbHRlckNyaXRlcmlhUGFja2FnZXM6IG5ld0NhdGVnb3J5U3RhdGUgfSlcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wYXJlUGFja2FnZSgpIHsgLy8gdG8gY29tcGFyZSBkaWZmZXJudCBwYWNrYWdlcyBcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0NvbXBhcmVCdXR0b24nLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjb21wYXJlLWJ1dHRvbi1jbGljaydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICBpZih0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jb3VudCA9PSAxKXtcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdCl7XG4gICAgICAgICAgICAgICAgbGV0IHBhY2thZ2VzPXt9XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkUGtnQ29tcGFyZUlkcz1bXVxuICAgICAgICAgICAgICAgIHBhY2thZ2VzLmlkPXRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdFswXS5pZFxuICAgICAgICAgICAgICAgIHBhY2thZ2VzLmxhYl9pZD10aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5yZXN1bHRbMF0ubGFiLmlkXG4gICAgICAgICAgICAgICAgcGFja2FnZXMuaW1nPXRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdFswXS5sYWIubGFiX3RodW1ibmFpbFxuICAgICAgICAgICAgICAgIHBhY2thZ2VzLm5hbWU9dGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QucmVzdWx0WzBdLm5hbWVcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZWNvbXBhcmVDcml0ZXJpYShwYWNrYWdlcylcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMgJiYgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA+MCl7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLm1hcCgocGFja2FnZXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhY2thZ2VzLmlkICE9IHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdFswXS5pZCAmJiBwYWNrYWdlcy5sYWJfaWQgIT0gdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QucmVzdWx0WzBdLmxhYi5pZCl7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBrZ0NvbXBhcmVJZHMucHVzaChwYWNrYWdlcy5pZCsnLScrcGFja2FnZXMubGFiX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUGtnQ29tcGFyZUlkcy5wdXNoKHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdFswXS5pZCsnLScrdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QucmVzdWx0WzBdLmxhYi5pZClcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3BhY2thZ2UvY29tcGFyZT9wYWNrYWdlX2lkcz0nK3NlbGVjdGVkUGtnQ29tcGFyZUlkcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0NvbXBhcmU6ICF0aGlzLnN0YXRlLmlzQ29tcGFyZSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0UGtnQ29tcGFyZSgpIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVDb21wYXJlUGFja2FnZXMocGFja2FnZUlkLCBsYWJJZCwgcGNrSW1nLCBwY2tOYW1lKSB7IC8vIHRvZ2dsZSBwYWNrYWdlcyBmb3IgY29tcGFyaXNpb25cbiAgICAgICAgbGV0IHBhY2thZ2VzID0ge31cbiAgICAgICAgcGFja2FnZXMuaWQgPSBwYWNrYWdlSWRcbiAgICAgICAgcGFja2FnZXMubGFiX2lkID0gbGFiSWRcbiAgICAgICAgcGFja2FnZXMuaW1nID0gcGNrSW1nXG4gICAgICAgIHBhY2thZ2VzLm5hbWUgPSBwY2tOYW1lXG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlY29tcGFyZUNyaXRlcmlhKHBhY2thZ2VzKVxuICAgIH1cblxuICAgIGJ1aWxkVVJJKHN0YXRlKSB7IC8vIGJ1aWxkIHVybCB3aXRoIGRpZmZlcm50IHBhcmFtcyBvciBkaWZmZXJudCBmaWx0ZXJzXG4gICAgICAgIGxldCB7IHNlbGVjdGVkTG9jYXRpb24sIGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcywgZmlsdGVyQ3JpdGVyaWEsIGxvY2F0aW9uVHlwZSwgZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcywgcGFnZSB9ID0gc3RhdGVcbiAgICAgICAgLy8gbGV0IHRlc3RJZHMgPSBzZWxlY3RlZENyaXRlcmlhcy5maWx0ZXIoeCA9PiB4LnR5cGUgPT0gJ3Rlc3QnKS5tYXAoeCA9PiB4LmlkKVxuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGxldCBwbGFjZV9pZCA9IFwiXCJcblxuICAgICAgICBpZiAoc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgcGxhY2VfaWQgPSBzZWxlY3RlZExvY2F0aW9uLnBsYWNlX2lkIHx8IFwiXCJcbiAgICAgICAgICAgIGxhdCA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG5cbiAgICAgICAgICAgIGxhdCA9IHBhcnNlRmxvYXQocGFyc2VGbG9hdChsYXQpLnRvRml4ZWQoNikpXG4gICAgICAgICAgICBsb25nID0gcGFyc2VGbG9hdChwYXJzZUZsb2F0KGxvbmcpLnRvRml4ZWQoNikpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2F0X2lkcyA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMuY2F0SWRzIHx8IFwiXCJcblxuICAgICAgICAvKmxldCBtaW5fZGlzdGFuY2UgPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLmRpc3RhbmNlUmFuZ2VbMF1cbiAgICAgICAgbGV0IG1heF9kaXN0YW5jZSA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMuZGlzdGFuY2VSYW5nZVsxXVxuICAgICAgICBsZXQgbWluX3ByaWNlID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5wcmljZVJhbmdlWzBdXG4gICAgICAgIGxldCBtYXhfcHJpY2UgPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLnByaWNlUmFuZ2VbMV1cbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHNvcnRfb24gPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLnNvcnRfb24gfHwgXCJcIlxuICAgICAgICBsZXQgc29ydF9vcmRlciA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMuc29ydF9vcmRlciB8fCBcIlwiXG4gICAgICAgIGxldCBhdmdfcmF0aW5ncyA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMuYXZnX3JhdGluZ3MgfHwgXCJcIlxuICAgICAgICBsZXQgaG9tZV92aXNpdCA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMuaG9tZV92aXNpdCB8fCBmYWxzZVxuICAgICAgICBsZXQgbGFiX3Zpc2l0ID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5sYWJfdmlzaXQgfHwgZmFsc2VcbiAgICAgICAgbGV0IGxhYl9uYW1lID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5sYWJfbmFtZSB8fCBcIlwiXG4gICAgICAgIGxldCBuZXR3b3JrX2lkID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5uZXR3b3JrX2lkIHx8IFwiXCJcbiAgICAgICAgbGV0IG1heF9hZ2UgPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLm1heF9hZ2UgfHwgXCJcIlxuICAgICAgICBsZXQgbWluX2FnZSA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMubWluX2FnZSB8fCBcIlwiXG4gICAgICAgIGxldCBnZW5kZXIgPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLmdlbmRlciB8fCBcIlwiXG4gICAgICAgIGxldCBwYWNrYWdlX3R5cGUgPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLnBhY2thZ2VUeXBlIHx8IFwiXCJcbiAgICAgICAgbGV0IHRlc3RfaWRzID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy50ZXN0X2lkcyB8fCBcIlwiXG4gICAgICAgIGxldCBwYWNrYWdlX2lkcyA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMucGFja2FnZV9pZHMgfHwgXCJcIiAgICAgICBcbiAgICAgICAgLy8gbGV0IHBhY2thZ2VfY2F0ZWdvcnlfaWRzID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5wYWNrYWdlX2NhdGVnb3J5X2lkcyB8fCBcIlwiXG5cbiAgICAgICAgbGV0IHVybFxuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHBhY2thZ2VfY2F0ZWdvcnlfaWRzID0gcGFyc2VkLnBhY2thZ2VfY2F0ZWdvcnlfaWRzXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZvclRheFNhdmVyKSB7XG4gICAgICAgICAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9P2xhdD0ke2xhdH0mbG9uZz0ke2xvbmd9YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT9sYXQ9JHtsYXR9Jmxvbmc9JHtsb25nfSZzb3J0X29uPSR7c29ydF9vbn0mc29ydF9vcmRlcj0ke3NvcnRfb3JkZXJ9JmF2Z19yYXRpbmdzPSR7YXZnX3JhdGluZ3N9JmhvbWVfdmlzaXQ9JHtob21lX3Zpc2l0fSZsYWJfdmlzaXQ9JHtsYWJfdmlzaXR9JmxhYl9uYW1lPSR7bGFiX25hbWV9JnBsYWNlX2lkPSR7cGxhY2VfaWR9JmxvY2F0aW9uVHlwZT0ke2xvY2F0aW9uVHlwZSB8fCBcIlwifSZuZXR3b3JrX2lkPSR7bmV0d29ya19pZH0mY2F0ZWdvcnlfaWRzPSR7Y2F0X2lkc30mbWluX2FnZT0ke21pbl9hZ2V9Jm1heF9hZ2U9JHttYXhfYWdlfSZnZW5kZXI9JHtnZW5kZXJ9JnBhY2thZ2VfdHlwZT0ke3BhY2thZ2VfdHlwZX0mdGVzdF9pZHM9JHt0ZXN0X2lkc30mcGFja2FnZV9pZHM9JHtwYWNrYWdlX2lkc31gXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHVybCArPSBgJnBhZ2U9JHtwYWdlfWBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYocGFyc2VkLnBhY2thZ2VfY2F0ZWdvcnlfaWRzKXtcbiAgICAgICAgICAgIHVybCArPSBgJnBhY2thZ2VfY2F0ZWdvcnlfaWRzPSR7cGFja2FnZV9jYXRlZ29yeV9pZHN9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZC5zY3JvbGxieWlkKSB7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsYnlfdGVzdF9pZCA9IHBhcnNlSW50KHBhcnNlZC5zY3JvbGxieWlkKVxuICAgICAgICAgICAgbGV0IHNjcm9sbGJ5X2xhYl9pZCA9IHBhcnNlSW50KHBhcnNlZC5zY3JvbGxieWxhYmlkKVxuICAgICAgICAgICAgLy8gdXJsICs9IGAmc2Nyb2xsYnlpZD0ke3Njcm9sbGJ5X3Rlc3RfaWQgfHwgXCJcIn0mc2Nyb2xsYnlsYWJpZD0ke3Njcm9sbGJ5X2xhYl9pZCB8fCBcIlwifWBcbiAgICAgICAgICAgIHVybCArPSBgJnNjcm9sbGJ5aWQ9JHtzY3JvbGxieV90ZXN0X2lkIHx8IFwiXCJ9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZC5pc0NvbXBhcmFibGUpIHtcbiAgICAgICAgICAgIHVybCArPSAnJmlzQ29tcGFyYWJsZT10cnVlJ1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihwYXJzZWQudXRtX3Rlcm0pe1xuICAgICAgICAgICAgdXJsICs9IGAmdXRtX3Rlcm09JHtwYXJzZWQudXRtX3Rlcm0gfHwgXCJcIn1gXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQudXRtX21lZGl1bSl7XG4gICAgICAgICAgICB1cmwgKz0gYCZ1dG1fbWVkaXVtPSR7cGFyc2VkLnV0bV9tZWRpdW0gfHwgXCJcIn1gXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQudXRtX2NhbXBhaWduKXtcbiAgICAgICAgICAgIHVybCArPSBgJnV0bV9jYW1wYWlnbj0ke3BhcnNlZC51dG1fY2FtcGFpZ24gfHwgXCJcIn1gXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQudXRtX3NvdXJjZSl7XG4gICAgICAgICAgICB1cmwgKz0gYCZ1dG1fc291cmNlPSR7cGFyc2VkLnV0bV9zb3VyY2UgfHwgXCJcIn1gXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cCl7XG4gICAgICAgICAgICB1cmwgKz0gYCR7JyZzaG93X3BvcHVwPScrIHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwfWBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG5cbiAgICBnZXRNZXRhVGFnc0RhdGEoc2VvRGF0YSkge1xuICAgICAgICBsZXQgdGl0bGUgPSBcIkxhYiBTZWFyY2hcIlxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZW9GcmllbmRseSkge1xuICAgICAgICAgICAgdGl0bGUgPSBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gXCJcIlxuICAgICAgICBpZiAoc2VvRGF0YSkge1xuICAgICAgICAgICAgdGl0bGUgPSBzZW9EYXRhLnRpdGxlIHx8IFwiXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gc2VvRGF0YS5kZXNjcmlwdGlvbiB8fCBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH1cbiAgICB9XG5cbiAgICBhcHBseVF1aWNrRmlsdGVyKGZpbHRlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcXVpY2tGaWx0ZXI6IGZpbHRlciB9KVxuICAgIH1cblxuICAgIG5vbklwZExlYWRzKHBob25lX251bWJlcil7IC8vIGNyZWF0ZSBvZiBub24gaXBkIHBhY2thZ2VzIGxlYWRzXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBsZXQgcGFja2FnZV9uYW1lID0gbnVsbFxuICAgICAgICBpZih0aGlzLnByb3BzLnBhY2thZ2VzTGlzdCAmJiB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5yZXN1bHQgJiYgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QucmVzdWx0Lmxlbmd0aD4xKXtcbiAgICAgICAgICAgIHBhY2thZ2VfbmFtZSA9IHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdFswXS5uYW1lXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcGFja2FnZV9uYW1lID0gJ0hlYWx0aCBQYWNrYWdlcydcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9KHtwaG9uZV9udW1iZXI6cGhvbmVfbnVtYmVyLGxlYWRfc291cmNlOidMYWJhZHMnLHNvdXJjZTpwYXJzZWQsbGVhZF90eXBlOidMQUJBRFMnLHRlc3RfbmFtZTpwYWNrYWdlX25hbWUsZXhpdHBvaW50X3VybCA6ICdodHRwOi8vZG9jcHJpbWUuY29tJyArIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9KVxuICAgICAgICBpZih0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncyAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5sZW5ndGgpe1xuICAgICAgICAgICAgZGF0YS51dG1fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4PT54LnR5cGUgPT0gXCJjb21tb25feHRyYV90YWdzXCIpWzBdLnV0bV90YWdzXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZpc2l0b3JfaW5mbyA9IEdUTS5nZXRWaXNpdG9ySW5mbygpXG4gICAgICAgICAgICBpZih2aXNpdG9yX2luZm8gJiYgdmlzaXRvcl9pbmZvLnZpc2l0X2lkKXtcbiAgICAgICAgICAgICAgICBkYXRhLnZpc2l0X2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0X2lkXG4gICAgICAgICAgICAgICAgZGF0YS52aXNpdG9yX2lkID0gdmlzaXRvcl9pbmZvLnZpc2l0b3JfaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgbGV0IGd0bV9kYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdOb25JcGRQYWNrYWdlTGlzdGluZ1N1Ym1pdENsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdldmVudCc6ICdub24taXBkLXBhY2thZ2UtbGlzdGluZy1zdWJtaXQtY2xpY2snXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGd0bV9kYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuc2F2ZUxlYWRQaG5OdW1iZXIocGhvbmVfbnVtYmVyKVxuICAgICAgIGlmKHRoaXMuc3RhdGUuaXNfbGVhZF9lbmFibGVkICYmICFTVE9SQUdFLmlzQWdlbnQoKSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc19sZWFkX2VuYWJsZWQ6ZmFsc2V9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5Ob25JcGRCb29raW5nTGVhZChkYXRhKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOnRydWV9KVxuICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgfVxuICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvX2JlX2ZvcmNlOjB9KVxuICAgIH1cblxuICAgIGNsb3NlSXBkTGVhZFBvcHVwKGZyb20pe1xuICAgICAgICBpZihmcm9tKXtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ05vbklwZFBhY2thZ2VMaXN0aW5nQ3Jvc3NDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnbm9uLWlwZC1wYWNrYWdlLWxpc3RpbmctY3Jvc3MtY2xpY2snXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvX2JlX2ZvcmNlOjB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNTY3JvbGwpe1xuICAgICAgICAgICAgbGV0IHNjcm9sbGJ5X3Rlc3RfaWQgPSBwYXJzZUludChwYXJzZWQuc2Nyb2xsYnlpZClcbiAgICAgICAgICAgIGxldCBzY3JvbGxieV9sYWJfaWQgPSBwYXJzZUludChwYXJzZWQuc2Nyb2xsYnlsYWJpZClcbiAgICAgICAgICAgIC8vIGxldCB1cmxfaWQ9IGBzY3JvbGxCeUlkXyR7c2Nyb2xsYnlfdGVzdF9pZH1fJHtzY3JvbGxieV9sYWJfaWR9YFxuICAgICAgICAgICAgbGV0IHVybF9pZD0gYHNjcm9sbEJ5SWRfJHtzY3JvbGxieV90ZXN0X2lkfWBcbiAgICAgICAgICAgIGlmICggdHlwZW9mIHdpbmRvdyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBkb2N1bWVudCA9PSBcIm9iamVjdFwiICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVybF9pZCkgKSB7XG4gICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodXJsX2lkKS5vZmZzZXRUb3ArMjUwKVxuICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7aXNTY3JvbGw6ZmFsc2V9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBpc0NvbXBhcmVkID0gZmFsc2VcblxuICAgICAgICBpZiAocGFyc2VkLmlzQ29tcGFyYWJsZSkge1xuICAgICAgICAgICAgaXNDb21wYXJlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0vZnVsbC1ib2R5LWNoZWNrdXAtaGVhbHRoLXBhY2thZ2VzYCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGAke3RoaXMucHJvcHMucGFja2FnZXNMaXN0LnRpdGxlIHx8ICcnfWAsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgJHt0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5kZXNjcmlwdGlvbiB8fCAnJ31gXG4gICAgICAgICAgICAgICAgfX0gbm9JbmRleD17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvKih0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cCA9PSAxIHx8IHRoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwID09IDIpICYmIHRoaXMucHJvcHMuTE9BREVEX0xBQlNfU0VBUkNIICYmIHRoaXMuc3RhdGUudG9fYmVfZm9yY2UgPT0gMT9cbiAgICAgICAgICAgICAgICAgICAgPE5vbklwZFBvcHVwVmlldyB7Li4udGhpcy5wcm9wc30gbm9uSXBkTGVhZHM9e3RoaXMubm9uSXBkTGVhZHMuYmluZCh0aGlzKX0gY2xvc2VJcGRMZWFkUG9wdXAgPSB7dGhpcy5jbG9zZUlwZExlYWRQb3B1cC5iaW5kKHRoaXMpfSBpc19mb3JjZT17dGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXB9IGlzX2xhYj17ZmFsc2V9ICBpc19wYWNrYWdlPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgICAgIDonJyovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxDcml0ZXJpYVNlYXJjaCB7Li4udGhpcy5wcm9wc30gY2hlY2tGb3JMb2FkPXt0aGlzLnByb3BzLkxPQURFRF9MQUJTX1NFQVJDSCB8fCB0aGlzLnN0YXRlLnNob3dFcnJvcn0gdGl0bGU9XCJTZWFyY2ggZm9yIFRlc3QgYW5kIExhYnMuXCIgZ29CYWNrPXt0cnVlfSBsYWJfY2FyZD17ISF0aGlzLnN0YXRlLmxhYl9jYXJkfSBuZXdDaGF0QnRuPXt0cnVlfSBzZWFyY2hQYWNrYWdlcz17dHJ1ZX0gYm90dG9tX2NvbnRlbnQ9e3RoaXMucHJvcHMucGFja2FnZXNMaXN0ICYmIHRoaXMucHJvcHMucGFja2FnZXNMaXN0LmNvdW50ID4gMCAmJiB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5ib3R0b21fY29udGVudCAmJiB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5ib3R0b21fY29udGVudCAhPSBudWxsICYmIHRoaXMucHJvcHMuZm9yT3JnYW5pY1NlYXJjaCA/IHRoaXMucHJvcHMucGFja2FnZXNMaXN0LmJvdHRvbV9jb250ZW50IDogJyd9IHBhZ2U9ezF9IGlzUGFja2FnZT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCYXIgey4uLnRoaXMucHJvcHN9IGFwcGx5RmlsdGVycz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0gYXBwbHlDYXRlZ29yaWVzPXt0aGlzLmFwcGx5Q2F0ZWdvcmllcy5iaW5kKHRoaXMpfSBzZW9EYXRhPXt0aGlzLnN0YXRlLnNlb0RhdGF9IGxhYl9jYXJkPXshIXRoaXMuc3RhdGUubGFiX2NhcmR9IGNvbXBhcmVQYWNrYWdlPXt0aGlzLmNvbXBhcmVQYWNrYWdlLmJpbmQodGhpcyl9IGlzQ29tcGFyZT17dGhpcy5zdGF0ZS5pc0NvbXBhcmV9IGlzQ29tcGFyZWQ9e2lzQ29tcGFyZWR9IHF1aWNrRmlsdGVyPXt0aGlzLnN0YXRlLnF1aWNrRmlsdGVyfSByZXNldFF1aWNrRmlsdGVycz17dGhpcy5yZXNldFF1aWNrRmlsdGVycy5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdCAmJiB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5yZXN1bHQgJiYgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QucmVzdWx0Lmxlbmd0aD09MD9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNhcmRNYWluUGFkZGluZ1JtdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWNhcmQtY29udGFpbmVyIG10LTIwIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctbm8tcmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2ctbi1yc2x0XCI+Tm8gcmVzdWx0IGZvdW5kITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibi1yc2x0LWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvbm8tcmVzdWx0LnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwa2ctdHktYWduIGN1cnNvci1wbnRyXCIgb25DbGljaz17dGhpcy5hcHBseVF1aWNrRmlsdGVyLmJpbmQodGhpcywge2NhdElkOiBbXSx2aWV3TW9yZTogdHJ1ZX0pfT5UcnkgYWdhaW4gd2l0aCBmZXdlciBmaWx0ZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOjxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzdWx0Q291bnQgey4uLnRoaXMucHJvcHN9IGFwcGx5RmlsdGVycz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0gYXBwbHlDYXRlZ29yaWVzPXt0aGlzLmFwcGx5Q2F0ZWdvcmllcy5iaW5kKHRoaXMpfSBzZW9EYXRhPXt0aGlzLnN0YXRlLnNlb0RhdGF9IGxhYl9jYXJkPXshIXRoaXMuc3RhdGUubGFiX2NhcmR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhY2thZ2VzTGlzdHMgey4uLnRoaXMucHJvcHN9IGFwcGx5RmlsdGVycz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0gZ2V0TGFiTGlzdD17dGhpcy5nZXRMYWJMaXN0LmJpbmQodGhpcyl9IGxhYl9jYXJkPXshIXRoaXMuc3RhdGUubGFiX2NhcmR9IGlzQ29tcGFyZT17dGhpcy5zdGF0ZS5pc0NvbXBhcmV9IHRvZ2dsZUNvbXBhcmVQYWNrYWdlcz17dGhpcy50b2dnbGVDb21wYXJlUGFja2FnZXMuYmluZCh0aGlzKX0gaXNDb21wYXJlZD17aXNDb21wYXJlZH0gYXBwbHlRdWlja0ZpbHRlcj17dGhpcy5hcHBseVF1aWNrRmlsdGVyLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0NyaXRlcmlhU2VhcmNoPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgZm9vdGVyRGF0YT17dGhpcy5zdGF0ZS5mb290ZXJEYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWNrYWdlc1ZpZXdcbiIsImltcG9ydCBTZWFyY2hQYWNrYWdlc1ZpZXcgZnJvbSAnLi9TZWFyY2hQYWNrYWdlc1ZpZXcuanMnXG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhY2thZ2VzVmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWNrYWdlUHJvZmlsZUNhcmQgZnJvbSAnLi4vLi4vY29tbW9ucy9sYWJQcm9maWxlQ2FyZC9wYWNrYWdlUHJvZmlsZUNhcmQuanMnXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsZXInO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21tb25zL0xvYWRlcidcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0nXG5pbXBvcnQgQmFubmVyQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9Ib21lL2Jhbm5lckNhcm91c2VsLmpzJztcbmltcG9ydCBTZWxlY3RlZFBrZ1N0cmlwIGZyb20gJy4vc2VsZWN0ZWRQa2dTdHJpcC5qcydcblxuY2xhc3MgcGFja2FnZXNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGhhc01vcmU6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICByZW5kZXJCbG9jazogZmFsc2UsXG4gICAgICAgICAgICBwYWdlOiAwLFxuICAgICAgICAgICAgcmVhZE1vcmU6ICdzZWFyY2gtZGV0YWlscy1kYXRhLWxlc3MnLFxuICAgICAgICAgICAgY2F0SWRzOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCZWxvdyBjb2RlIGVuc3VyZXMgc21vb3RoIGJhY2sgcGFnZSB0cmFuc2l0aW9ucyBpbiBjYXNlIG9mIGh1Z2UgZGF0YSBzZXRzLCBhbmQgbWFpbnRhaW5zIHNjcm9sbCBwb3NpdGlvbi5cbiAgICAgICAgICogcmVuZGVyQmxvY2sgPSB0cnVlIChieSBkZWZhdWx0KSB3aWxsIGJsb2NrIHJlbmRlciB1bnRpbCB0aGUgcGFnZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlZCwgYW5kIG9uY2UgaXRzIGRvbmUsIGl0IHdpbGwgdGhlbiByZW5kZXIgYW5kIHNldCBzY3JvbGwgcG9zaXRpb24gYWNjb3JkaW5nbHlcbiAgICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuY2hlY2tJZkV4aXN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZW5kZXJCbG9jazogZmFsc2UgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbF9wb3MgPSB3aW5kb3cuTEFCX1NDUk9MTF9QT1MgPyAod2luZG93LkxBQl9TQ1JPTExfUE9TKSA6IDBcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogaW1wcm92ZSBzY3JvbGwgYmFjayBsb2dpY1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsX3BvcyB8fCAwKVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuTEFCX1NDUk9MTF9QT1MgPSAwXG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LkxBQl9TQ1JPTExfUE9TID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH0sIDEwMClcbiAgICAgICAgXG4gICAgICAgICovXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhUGFja2FnZXMgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW9yZTogdHJ1ZSB9KVxuICAgICAgICB9LCAwKVxuXG4gICAgICAgIGxldCBzZWxlY3RlZExvY2F0aW9uID0gJydcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uO1xuICAgICAgICAgICAgbGF0ID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXQgPT09ICdmdW5jdGlvbicpIGxhdCA9IGxhdCgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvbmcgPT09ICdmdW5jdGlvbicpIGxvbmcgPSBsb25nKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0T2ZmZXJMaXN0KGxhdCwgbG9uZyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdElkczogcHJvcHMuZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5jYXRJZHMgfHwgW10gfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiU2VhcmNoUGFnaW5hdGlvbicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1zZWFyY2gtcGFnaW5hdGlvbicsICdQYWdlcyc6IHRoaXMuc3RhdGUucGFnZVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIC8vIGlmICh3aW5kb3cpIHtcbiAgICAgICAgLy8gICAgIHdpbmRvdy5vbnNjcm9sbCA9IG51bGxcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGdldExvY2F0aW9uUGFyYW0odGFnKSB7XG4gICAgICAgIC8vIHRoaXMgQVBJIGFzc3VtZXMgdGhlIGNvbnRleHQgb2YgcmVhY3Qtcm91dGVyLTRcbiAgICAgICAgY29uc3QgcGFyYW1TdHJpbmcgPSB0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaFxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtU3RyaW5nKVxuICAgICAgICByZXR1cm4gcGFyYW1zLmdldCh0YWcpXG4gICAgfVxuXG4gICAgbG9hZE1vcmUocGFnZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW9yZTogZmFsc2UsIGxvYWRpbmc6IHRydWUsIHBhZ2U6IHBhZ2UgfSlcblxuICAgICAgICB0aGlzLnByb3BzLmdldExhYkxpc3QobnVsbCwgcGFnZSArIDEsIChoYXNNb3JlKSA9PiB7IC8vZ2V0IHNlYXJjaGVkIHBhY2thZ2VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTW9yZSB9KVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdGVzdEluZm8oKSB7IC8vIHJlZGlyZWN0IHRvIGluY2x1ZGVkIHRlc3QgZGV0YWlscyBwYWdlXG4gICAgICAgIHZhciB1cmxfc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xuICAgICAgICB2YXIgdGVzdF9pZHMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInRlc3RfaWRzXCIpO1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaC90ZXN0aW5mbz90ZXN0X2lkcz0nICsgdGVzdF9pZHMgKyAnJmZyb209c2VhcmNocmVzdWx0cycpXG4gICAgfVxuICAgIHRvZ2dsZVNjcm9sbCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlYWRNb3JlOiAnc2VhcmNoLWRldGFpbHMtZGF0YS1sZXNzJyB9KVxuICAgIH1cbiAgICBzaG93VGMoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdGF4LXNhdmVyLWhlYWx0aC1wYWNrYWdlcy10YycpXG4gICAgfVxuXG4gICAgYXBwbHlRdWlja0ZpbHRlcnMoY2F0ZWdvcnksIHZpZXdNb3JlID0gZmFsc2UpIHtcbiAgICAgICAgLy8gYXBwbHkgZmlsdGVyc1xuICAgICAgICBsZXQgZmlsdGVycyA9IHtcbiAgICAgICAgICAgIGNhdElkOiB2aWV3TW9yZSA/IFtdIDogW2NhdGVnb3J5XSxcbiAgICAgICAgICAgIHZpZXdNb3JlOiB2aWV3TW9yZVxuICAgICAgICB9XG4gICAgICAgIGxldCBndG1EYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ1BhY2thZ2VRdWlja0ZpbHRlckNsaWNrZWQnLCAnQWN0aW9uJzogJ1BhY2thZ2VRdWlja0ZpbHRlckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdwYWNrYWdlLXF1aWNrLWZpbHRlci1jbGlja2VkJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ3R5cGUnOiBjYXRlZ29yeVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1EYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuYXBwbHlRdWlja0ZpbHRlcihmaWx0ZXJzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgTEFCUywgbGFiTGlzdCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGxldCBzdGFydF9wYWdlID0gMFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyX3BhZ2UpIHtcbiAgICAgICAgICAgIHN0YXJ0X3BhZ2UgPSBNYXRoLm1heCgwLCB0aGlzLnByb3BzLmN1cnJfcGFnZSAtIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5wYWdlKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRfcGFnZSA9IE1hdGgubWF4KDAsIHRoaXMucHJvcHMucGFnZSAtIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBrZ1Rvc3RcIikgIT09IG51bGwpe1xuICAgICAgICAvLyAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICAgICB2YXIgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAvLyAgICAgICBpZiAoY3VycmVudFNjcm9sbFBvcyA9PSAwKSB7XG4gICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwa2dUb3N0XCIpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcbiAgICAgICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBrZ1Rvc3RcIikuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxuICAgICAgICAvLyAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid3JhcCBzZWFyY2gtYm9vay1yZXN1bHQgdmFyaWFibGUtY29udGVudC1zZWN0aW9uXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogMTAgfX0gcmVmPVwiY2hlY2tJZkV4aXN0c1wiPlxuICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5mb3JPcmdhbmljU2VhcmNoICYmICF0aGlzLnByb3BzLmZvclRheFNhdmVyID8gPGRpdiBjbGFzc05hbWU9XCJwa2dUb3N0IGQtbm9uZVwiIGlkPVwicGtnVG9zdFwiPjxwIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaGVhbHRoLXBhY2thZ2UtYWR2aXNvcicpfT5OZWVkIEhlbHAgaW4gQm9va2luZyBIZWFsdGggUGFja2FnZT8gPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZW5kZXJCbG9jayA/IDxMb2FkZXIgLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgY2FyZE1haW5QYWRkaW5nUm12XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAnNjB2aCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZvck9yZ2FuaWNTZWFyY2ggJiYgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QgJiYgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY291bnQgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC1jYXJkLWNvbGxwYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUucmVhZE1vcmV9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3Quc2VhcmNoX2NvbnRlbnQgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVhZE1vcmUgJiYgdGhpcy5zdGF0ZS5yZWFkTW9yZSAhPSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJkLW1vcmVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcmVhZE1vcmU6ICcnIH0pfT5SZWFkIE1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWFkTW9yZSA9PSAnJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJkLW1vcmVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNjcm9sbC5iaW5kKHRoaXMpfT5SZWFkIExlc3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JUYXhTYXZlciA/IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRheEJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9jZG4uZG9jcHJpbWUuY29tL2ltYWdlcy9hcnRib2FyZDEyNDMucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXhDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyA8aW1nIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Ub3A6ICczcHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2luZm8uc3ZnXCJ9IC8+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YXhDb250ZW50UGFyYVwiPkJvb2sgUHJldmVudGl2ZSBIZWFsdGhjYXJlIFBhY2thZ2VzIGZvciB5b3UgYW5kIHlvdXIgZmFtaWx5IGFuZCBnZXQgYSB0YXggYmVuZWZpdCB1cHRvIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PuKCuSA1MDAwPC9zcGFuPiB1bmRlciBzZWN0aW9uIDgwRCBvZiB0aGUgSW5jb21lIFRheCBBY3QuIFRvIGtub3cgbW9yZSA8c3BhbiBjbGFzc05hbWU9XCJ0YXhDbGlja2J0blwiIG9uQ2xpY2s9e3RoaXMuc2hvd1RjLmJpbmQodGhpcyl9PiBjbGljayBoZXJlPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU3RhcnQ9e3N0YXJ0X3BhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmU9e3RoaXMubG9hZE1vcmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNNb3JlPXt0aGlzLnN0YXRlLmhhc01vcmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlV2luZG93PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QgJiYgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QucmVzdWx0ID8gdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QucmVzdWx0Lm1hcCgocGFja2FnZXMsIGkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID09IDMgJiYgIXRoaXMuc3RhdGUuY2F0SWRzLmxlbmd0aCAmJiB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdCAmJiB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jYXRlZ29yaWVzICYmIHRoaXMucHJvcHMucGFja2FnZXNMaXN0LmNhdGVnb3JpZXMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtc3ViLWZpbHRlci1jb250YWluZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GaWx0ZXIgYnkgPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+IFRlc3QgQ2F0ZWdvcnkgPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBzb3J0LW1vcmUtZmlsdGVyXCIgb25DbGljaz17dGhpcy5hcHBseVF1aWNrRmlsdGVycy5iaW5kKHRoaXMsICcnLCB0cnVlKX0+TW9yZSBmaWx0ZXJzPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtc2ItYnRuLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtqfSBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuY2F0SWRzICYmIHRoaXMuc3RhdGUuY2F0SWRzLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTEgPyAnc3J0LWFjdCcgOiAnJ31gfSBpZD17Y2F0ZWdvcnkuaWR9IG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlcnMuYmluZCh0aGlzLCBjYXRlZ29yeS5pZCwgZmFsc2UpfT4ge2NhdGVnb3J5Lm5hbWV9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9PSA1ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0ICYmIHRoaXMucHJvcHMub2ZmZXJMaXN0LmZpbHRlcih4ID0+ICh4LnNsaWRlcl9sb2NhdGlvbiA9PT0gJ3NlYXJjaF9wYWNrYWdlc19wYWdlJykgfHwgKHguc2xpZGVyX2xvY2F0aW9uID09PSAnZnVsbF9ib2R5X2NoZWNoa3VwX3BhZ2UnKSB8fCAoeC5zbGlkZXJfbG9jYXRpb24gPT09ICd0YXhfc2F2ZXJfcGFja2FnZXNfcGFnZScpKS5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnQtaGVpZ2h0IGhvbWUtcGFnZS1iYW5uZXItZGl2IG1iLTMgbXItMCBiYW5uZXItbWQtbWFyZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZXJCYW5uZXIgYmFubmVyLWNhcm91c2VsLWRpdiBkLW1kLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2SGVpZ2h0IG0tMFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cHghaW1wb3J0YW50XCIgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyQ2Fyb3VzZWwgey4uLnRoaXMucHJvcHN9IHNsaWRlckxvY2F0aW9uPXt0aGlzLnByb3BzLmZvclRheFNhdmVyID8gXCJ0YXhfc2F2ZXJfcGFja2FnZXNfcGFnZVwiIDogdGhpcy5wcm9wcy5mb3JPcmdhbmljU2VhcmNoID8gJ2Z1bGxfYm9keV9jaGVjaGt1cF9wYWdlJyA6ICdzZWFyY2hfcGFja2FnZXNfcGFnZSd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9e2BzY3JvbGxCeUlkXyR7cGFja2FnZXMuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFja2FnZVByb2ZpbGVDYXJkIHsuLi50aGlzLnByb3BzfSBkZXRhaWxzPXtwYWNrYWdlc30ga2V5PXtpfSByYW5rPXtpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPEluZmluaXRlU2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVN0YXJ0PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb3JlPXt0aGlzLmxvYWRNb3JlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTW9yZT17dGhpcy5zdGF0ZS5oYXNNb3JlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVdpbmRvdz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJMaXN0Lm1hcCgobGFiSWQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMSAmJiBMQUJTW2xhYklkXSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tcmlzay1jb250YWluZXIgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXJza1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyc2staW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2dyb3VwLTk4LnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJzay1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInJzay1oZG5nXCI+QW1hemluZyBTYXZpbmdzLi4uIE5vIFJpc2tzITwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJzay1sc3RuZyBmZlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibHN0LWJmclwiPlVwdG8gNTAlIE9mZiBvbiBkb2N0b3IgYW5kIGxhYiBib29raW5nczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsc3QtYmZyXCI+MTAwJSBtb25leSBiYWNrIGd1YXJhbnRlZSAtICBObyBxdWVzdGlvbnMhPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJfY2FyZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiUmVzdWx0Q2FyZCB7Li4udGhpcy5wcm9wc30gZGV0YWlscz17TEFCU1tsYWJJZF19IGtleT17aX0gcmFuaz17aX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPExhYlByb2ZpbGVDYXJkIHsuLi50aGlzLnByb3BzfSBkZXRhaWxzPXtMQUJTW2xhYklkXX0ga2V5PXtpfSByYW5rPXtpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTEFCU1tsYWJJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhYl9jYXJkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiUmVzdWx0Q2FyZCB7Li4udGhpcy5wcm9wc30gZGV0YWlscz17TEFCU1tsYWJJZF19IGtleT17aX0gcmFuaz17aX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxMYWJQcm9maWxlQ2FyZCB7Li4udGhpcy5wcm9wc30gZGV0YWlscz17TEFCU1tsYWJJZF19IGtleT17aX0gcmFuaz17aX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkZXIgY2xhc3NUeXBlPVwibG9hZGVyUGFnaW5hdGlvblwiIC8+IDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmlzQ29tcGFyZWQgJiYgKHRoaXMucHJvcHMuaXNDb21wYXJlIHx8IHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5sZW5ndGggPiAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0ZWRQa2dTdHJpcCB7Li4udGhpcy5wcm9wc30gdG9nZ2xlQ29tcGFyZVBhY2thZ2VzPXt0aGlzLnByb3BzLnRvZ2dsZUNvbXBhcmVQYWNrYWdlcy5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgcGFja2FnZXNMaXN0XG4iLCJpbXBvcnQgUGFja2FnZXNMaXN0cyBmcm9tICcuL1BhY2thZ2VzTGlzdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZXNMaXN0cyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5pdGlhbHNQaWN0dXJlIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvaW5pdGlhbHNQaWN0dXJlJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bS5qcydcblxuaW1wb3J0IHsgYnVpbGRPcGVuQmFubmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy91dGlscy5qcydcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcbmltcG9ydCB7IFhfT0sgfSBmcm9tICdjb25zdGFudHMnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIFNlbGVjdGVkUGtnU3RyaXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlPXtcbiAgICAgICAgICAgIGNoZWNrZWQ6ZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhcmVQYWNrYWdlcygpe1xuICAgICAgICBsZXQgc2VsZWN0ZWRQa2dDb21wYXJlSWRzPVtdXG4gICAgICAgICAgaWYodGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzKXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLm1hcCgocGFja2FnZXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGtnQ29tcGFyZUlkcy5wdXNoKHBhY2thZ2VzLmlkKyctJytwYWNrYWdlcy5sYWJfaWQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb21wYXJpc29uJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29tcGFyaXNvbi1idXR0b24nLCAnc2VsZWN0ZWRfdGVzdF9pZCc6IHNlbGVjdGVkUGtnQ29tcGFyZUlkc1xuICAgICAgICAgIH1cbiAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3BhY2thZ2UvY29tcGFyZT9wYWNrYWdlX2lkcz0nK3NlbGVjdGVkUGtnQ29tcGFyZUlkcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmUtcGFja2FnZS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID4gMD9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29tcGFyZS1wYWNrYWdlc1wiICsgKHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID09IDEgPyAnIGNvbXBhcmUtcGFja2FnZXMtb25lJzp0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID09MiA/JyBjb21wYXJlLXBhY2thZ2VzLXR3byc6dGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA9PSAzPycgY29tcGFyZS1wYWNrYWdlcy10aHJlZSc6dGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA9PSA0PycgY29tcGFyZS1wYWNrYWdlcy1mb3VyJzonJyl9PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLm1hcCgocGFja2FnZXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3BhY2thZ2VDb21wYXJlL3JlZC1jdXQucG5nXCJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImVuZC1kaXZcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZUNvbXBhcmVQYWNrYWdlcy5iaW5kKHRoaXMscGFja2FnZXMuaWQscGFja2FnZXMubGFiX2lkLHBhY2thZ2VzLmltZyxwYWNrYWdlcy5uYW1lKX0vPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7PGltZyBjbGFzc05hbWU9XCJmbHRyLXVzci1pbWFnZS1sYWJcIiBzcmM9e3BhY2thZ2VzLmltZ30gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnU3RyaXBObVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWNrYWdlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLW1vcmUtcGFja2FnZSBjb21wYXJlLXBhY2thZ2Utbm93XCIgb25DbGljaz17dGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA+PTE/dGhpcy5jb21wYXJlUGFja2FnZXMuYmluZCh0aGlzKTonJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Db21wYXJlIE5vdyB7dGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzICYmIHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5sZW5ndGg+MD9gKCR7dGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aH0pYDonJ308L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0ZWRQa2dTdHJpcFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cblxuY2xhc3MgQ2F0ZWdvcnlQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhbmNob3JFbDogbnVsbCxcbiAgICAgICAgICAgIG9wZW5GaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgcHJpY2VSYW5nZTogWzAsIDIwMDAwXSxcbiAgICAgICAgICAgIGRpc3RhbmNlUmFuZ2U6IFswLCAxNV0sXG4gICAgICAgICAgICBzb3J0X29uOiBudWxsLFxuICAgICAgICAgICAgc2hvcnRVUkw6IFwiXCIsXG4gICAgICAgICAgICBkcm9wZG93bl92aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIG92ZXJsYXlWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQb3B1cENvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgICAgIHNvcnRUZXh0OiAnUmVsZXZhbmNlJyxcbiAgICAgICAgICAgIG9wZW5DYXRlZ29yeTogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZENhdElkczpbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkQWxsQ2F0SWRzSW50aWFsOltdLFxuICAgICAgICAgICAgc2VsZWN0ZWRDYXRJZHNMZW5nOicnLFxuICAgICAgICAgICAgaXNfYXBwbGllZDp0cnVlLFxuICAgICAgICAgICAgc2VsZWN0QWxsY2F0ZWdvcnk6W11cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBsZXQgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRDYXRJZHNcbiAgICAgICAgbGV0IHNlbGVjdEFsbGNhdGVnb3J5SWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RBbGxjYXRlZ29yeVxuICAgICAgICB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcmllcywgaSkgPT4ge1xuICAgICAgICAgICAgaWYoY2F0ZWdvcmllcy5pc19zZWxlY3RlZCl7XG4gICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5SWRzLnB1c2goY2F0ZWdvcmllcy5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGVjdEFsbGNhdGVnb3J5SWRzLnB1c2goY2F0ZWdvcmllcy5pZClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkQWxsQ2F0SWRzSW50aWFsOnNlbGVjdGVkQ2F0ZWdvcnlJZHMsc2VsZWN0ZWRDYXRJZHNMZW5nOnNlbGVjdGVkQ2F0ZWdvcnlJZHMubGVuZ3RoLCBzZWxlY3RBbGxjYXRlZ29yeTpzZWxlY3RBbGxjYXRlZ29yeUlkc30pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaW5pdGlhbFNlbGVjdGVkQ2F0ZWdvcnkoc2VsZWN0ZWRDYXRlZ29yeUlkcylcbiAgICB9XG4gICAgYXBwbHlBbGxDYXRlZ29yeSgpe1xuICAgICAgICBsZXQgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0QWxsY2F0ZWdvcnlcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY2F0ZWdvcmllc19jb3VudCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2F0SWRzTGVuZyl7XG4gICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5SWRzID0gW11cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5SWRzID0gdGhpcy5zdGF0ZS5zZWxlY3RBbGxjYXRlZ29yeVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkQ2F0SWRzOiBzZWxlY3RlZENhdGVnb3J5SWRzLHNlbGVjdGVkQ2F0SWRzTGVuZzpzZWxlY3RlZENhdGVnb3J5SWRzLmxlbmd0aH0pXG4gICAgfVxuICAgIHRvZ2dsZVRlc3QoY2F0ZWdvcnkpe1xuICAgICAgICBsZXQgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRDYXRJZHNcbiAgICAgICAgaWYoY2F0ZWdvcnkpe1xuICAgICAgICAgICAgaWYoc2VsZWN0ZWRDYXRlZ29yeUlkcy5pbmRleE9mKGNhdGVnb3J5KT4tMSl7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9IHNlbGVjdGVkQ2F0ZWdvcnlJZHMuZmlsdGVyKHg9PnghPWNhdGVnb3J5KSBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnlJZHMucHVzaChjYXRlZ29yeSkgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRDYXRJZHM6IHNlbGVjdGVkQ2F0ZWdvcnlJZHMsc2VsZWN0ZWRDYXRJZHNMZW5nOnNlbGVjdGVkQ2F0ZWdvcnlJZHMubGVuZ3RofSlcbiAgICB9XG4gICAgYXBwbHlDYXRlZ29yaWVzKCl7XG4gICAgICAgIGxldCBjYXRlZ29yeVN0YXRlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENhdElkc1xuICAgICAgICB0aGlzLnByb3BzLmFwcGx5Q2F0ZWdvcmllcyhjYXRlZ29yeVN0YXRlKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBpc1NlbGVjdGVkID0gW11cbiAgICAgICAgbGV0IHVuU2VsZWN0ZWQgPSBbXVxuICAgICAgICBsZXQgaXNTZWxlY3RlZENhdD1bXVxuICAgICAgICBsZXQgdW5TZWxlY3RlZENhdD1bXVxuICAgICAgICBpZih0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jYXRlZ29yaWVzICYmIHRoaXMucHJvcHMucGFja2FnZXNMaXN0LmNhdGVnb3JpZXMubGVuZ3RoPjApe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3JpZXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZihjYXRlZ29yaWVzLmlzX3NlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZC5wdXNoKGNhdGVnb3JpZXMpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHVuU2VsZWN0ZWQucHVzaChjYXRlZ29yaWVzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZihpc1NlbGVjdGVkLmxlbmd0aD4wKXtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZC5tYXAoKGNhdGVnb3JpZXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZENhdC5wdXNoKDxsaSAgY2xhc3NOYW1lPVwicHItMFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogMTQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ2F0SWRzLmluZGV4T2YoY2F0ZWdvcmllcy5pZCkgPiAtMX0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlVGVzdC5iaW5kKHRoaXMsIGNhdGVnb3JpZXMuaWQpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih1blNlbGVjdGVkLmxlbmd0aD4wKXtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdW5TZWxlY3RlZC5tYXAoKGNhdGVnb3JpZXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdW5TZWxlY3RlZENhdC5wdXNoKDxsaSAgY2xhc3NOYW1lPVwicHItMFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNrLWJ4XCIgc3R5bGU9e3sgZm9udFdlaWdodDogNDAwLCBmb250U2l6ZTogMTQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnN0YXRlLnNlbGVjdGVkQ2F0SWRzLmluZGV4T2YoY2F0ZWdvcmllcy5pZCkgPiAtMX0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlVGVzdC5iaW5kKHRoaXMsIGNhdGVnb3JpZXMuaWQpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXBcIj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3AtdG9wLWhlYWRpbmcgbWItMCBwYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IENhdGVnb3JpZXMgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCIgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJywgbWFyZ2luUmlnaHQ6ICcxMHB4J319IG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VDYXRlZ29yeS5iaW5kKHRoaXMpfT48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3J0LWNsb3NlLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTQgfX0gLz48L3NwYW4+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1zLWNvbmRpdGlvbi1kaXYgcHQtMFwiPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1mb3JtLXJhZGlvIGluc3JhZGlvLW9uLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBhbGwtdGVzdC1saXN0IG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IDE0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgQWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jYXRlZ29yaWVzX2NvdW50ID09IHRoaXMuc3RhdGUuc2VsZWN0ZWRDYXRJZHNMZW5nfSBvbkNoYW5nZT17dGhpcy5hcHBseUFsbENhdGVnb3J5LmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZENhdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1blNlbGVjdGVkQ2F0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9jZWR1cmVzLWJ0bi1wb3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFwcGx5Q2F0ZWdvcmllcy5iaW5kKHRoaXMpfT5BcHBseTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVBvcHVwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmFuZ2UgZnJvbSAncmMtc2xpZGVyL2xpYi9SYW5nZSc7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2NhdGlvbkVsZW1lbnRzIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvbkVsZW1lbnRzJ1xuaW1wb3J0IExvY2F0aW9uUG9wdXAgZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uUG9wdXAnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuaW1wb3J0IENhdGVnb3J5UG9wdXAgZnJvbSAnLi9jYXRlZ29yeVBvcHVwLmpzJ1xuXG5cbmNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhbmNob3JFbDogbnVsbCxcbiAgICAgICAgICAgIG9wZW5GaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgLy8gc2hvcnRVUkw6IFwiXCIsXG4gICAgICAgICAgICBkcm9wZG93bl92aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIG92ZXJsYXlWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIHNob3dQb3B1cENvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgICAgIHNvcnRUZXh0OiAnUmVsZXZhbmNlJyxcbiAgICAgICAgICAgIG9wZW5DYXRlZ29yeTogZmFsc2UsXG4gICAgICAgICAgICBpc0NhdGVnb3J5QXBwbGllZDogZmFsc2UsXG4gICAgICAgICAgICBhcHBsaWVkQ2F0ZWdvcnlDb3VudDogJycsXG4gICAgICAgICAgICBpbml0aWFsU2VsZWN0ZWRDYXRJZHM6ICcnLFxuICAgICAgICAgICAgbWF4X2FnZTogJycsXG4gICAgICAgICAgICBtaW5fYWdlOiAnJyxcbiAgICAgICAgICAgIHBhY2thZ2VUeXBlOiAnJyxcbiAgICAgICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgICAgICBjYXRJZHM6IFtdLFxuICAgICAgICAgICAgdGVzdF9pZHM6ICcnLFxuICAgICAgICAgICAgcGFja2FnZV9pZHM6ICcnLFxuICAgICAgICAgICAgcHJldmlvdXNfZmlsdGVyczoge30sXG4gICAgICAgICAgICBzb3J0X29uOiAnJyxcbiAgICAgICAgICAgIHNvcnRfb3JkZXI6ICcnLFxuICAgICAgICAgICAgYXZnX3JhdGluZ3M6ICcnLFxuICAgICAgICAgICAgaG9tZV92aXNpdDogZmFsc2UsXG4gICAgICAgICAgICBsYWJfdmlzaXQ6IGZhbHNlLFxuICAgICAgICAgICAgcXVpY2tGaWx0ZXI6IHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5wcm9wcy5maWx0ZXJDcml0ZXJpYVBhY2thZ2VzLCBxdWlja0ZpbHRlcjogcHJvcHMucXVpY2tGaWx0ZXJ8fHt9IH0sICgpPT57XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnF1aWNrRmlsdGVyICYmICggKHRoaXMuc3RhdGUucXVpY2tGaWx0ZXIuY2F0SWQgJiYgdGhpcy5zdGF0ZS5xdWlja0ZpbHRlci5jYXRJZC5sZW5ndGgpIHx8IHRoaXMuc3RhdGUucXVpY2tGaWx0ZXIudmlld01vcmUgKSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRGaWx0ZXJDbGlja2VkKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gaWYgKHByb3BzLmxvY2F0aW9uVHlwZSAmJiAhcHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBpZiAocHJvcHMuc2VvRGF0YSAmJiBwcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAhPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiB0cnVlLCBvdmVybGF5VmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLnNob3J0ZW5VcmwoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYVBhY2thZ2VzIH0pXG4gICAgICAgIC8vIHRoaXMuc2hvcnRlblVybCgpXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IHRydWUsIG92ZXJsYXlWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmZvck9yZ2FuaWNTZWFyY2gpIHtcbiAgICAgICAgICAgIHZhciB1cmxfc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xuICAgICAgICAgICAgdmFyIGNhdF9pZHMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImNhdGVnb3J5X2lkc1wiKVxuICAgICAgICAgICAgaWYgKGNhdF9pZHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNhdF9pZHMgPSBjYXRfaWRzLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICBpZiAoY2F0X2lkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGllZENhdGVnb3J5Q291bnQ6IGNhdF9pZHMubGVuZ3RoLCBpc0NhdGVnb3J5QXBwbGllZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFwcGx5RmlsdGVycygpIHtcbiAgICAgICAgbGV0IGZpbHRlclN0YXRlID0ge1xuICAgICAgICAgICAgc29ydF9vbjogdGhpcy5zdGF0ZS5zb3J0X29uLFxuICAgICAgICAgICAgc29ydF9vcmRlcjogdGhpcy5zdGF0ZS5zb3J0X29yZGVyLFxuICAgICAgICAgICAgYXZnX3JhdGluZ3M6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MgfHwgJycsXG4gICAgICAgICAgICBob21lX3Zpc2l0OiB0aGlzLnN0YXRlLmhvbWVfdmlzaXQsXG4gICAgICAgICAgICBsYWJfdmlzaXQ6IHRoaXMuc3RhdGUubGFiX3Zpc2l0LFxuICAgICAgICAgICAgZ2VuZGVyOiB0aGlzLnN0YXRlLmdlbmRlcixcbiAgICAgICAgICAgIHBhY2thZ2VUeXBlOiB0aGlzLnN0YXRlLnBhY2thZ2VUeXBlLFxuICAgICAgICAgICAgY2F0SWRzOiB0aGlzLnN0YXRlLmNhdElkcyxcbiAgICAgICAgICAgIHRlc3RfaWRzOiB0aGlzLnN0YXRlLnRlc3RfaWRzLFxuICAgICAgICAgICAgcGFja2FnZV9pZHM6IHRoaXMuc3RhdGUucGFja2FnZV9pZHNcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdGaWx0ZXJDbGljaycsICdBY3Rpb24nOiAnQ2xpY2tlZCBvbiBGaWx0ZXInLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItZmlsdGVyLWNsaWNrZWQnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnc29ydF9vcmRlcic6IHRoaXMuc3RhdGUuc29ydF9vcmRlciB8fCAnJywgJ3JhdGluZyc6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MgfHwgW10sICdob21lX3Zpc2l0JzogdGhpcy5zdGF0ZS5ob21lX3Zpc2l0IHx8ICcnLCAnbGFiX3Zpc2l0JzogdGhpcy5zdGF0ZS5sYWJfdmlzaXQgfHwgJycsIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vbiB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgbGV0IGlmQW55RmlsdGVyQXBwbGllZCA9IHRoaXMuaXNEYXRhRmlsdGVyZWQoe30sIHRydWUpXG4gICAgICAgIGlmKGlmQW55RmlsdGVyQXBwbGllZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVyU3RhdGUpICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbkZpbHRlcjogZmFsc2UgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDbG9zZShyZXNldD1mYWxzZSwgZSkge1xuXG4gICAgICAgIGlmKHJlc2V0KSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1Jlc2V0UGFja2FnZUZpbHRlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Jlc2V0LXBhY2thZ2UtZmlsdGVyJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ3NvcnRfb3JkZXInOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgfHwgJycsICdyYXRpbmcnOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzIHx8IFtdLCAnaG9tZV92aXNpdCc6IHRoaXMuc3RhdGUuaG9tZV92aXNpdCB8fCAnJywgJ2xhYl92aXNpdCc6IHRoaXMuc3RhdGUubGFiX3Zpc2l0IHx8ICcnLCBzb3J0X29uOiB0aGlzLnN0YXRlLnNvcnRfb24gfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgICAgIGxldCByZXNldEZpbHRlcnMgPSB7XG4gICAgICAgICAgICAgICAgc29ydF9vbjogJycsXG4gICAgICAgICAgICAgICAgc29ydF9vcmRlcjogJycsXG4gICAgICAgICAgICAgICAgYXZnX3JhdGluZ3M6ICcnLFxuICAgICAgICAgICAgICAgIGhvbWVfdmlzaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxhYl92aXNpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZ2VuZGVyOiAnJyxcbiAgICAgICAgICAgICAgICBjYXRJZHM6IFtdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIC4uLnJlc2V0RmlsdGVycyxcbiAgICAgICAgICAgICAgICBxdWlja0ZpbHRlcjoge31cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ2xvc2VQYWNrYWdlRmlsdGVyJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY2xvc2UtcGFja2FnZS1maWx0ZXInLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnc29ydF9vcmRlcic6IHRoaXMuc3RhdGUuc29ydF9vcmRlciB8fCAnJywgJ3JhdGluZyc6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MgfHwgW10sICdob21lX3Zpc2l0JzogdGhpcy5zdGF0ZS5ob21lX3Zpc2l0IHx8ICcnLCAnbGFiX3Zpc2l0JzogdGhpcy5zdGF0ZS5sYWJfdmlzaXQgfHwgJycsIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vbiB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG9wZW5GaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucHJldmlvdXNfZmlsdGVycyxcbiAgICAgICAgICAgICAgICBxdWlja0ZpbHRlcjoge31cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0UXVpY2tGaWx0ZXJzKClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzb3J0RmlsdGVyQ2xpY2tlZCgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdQYWNrYWdlU29ydEZpbHRlckNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdwYWNrYWdlLXNvcnQtZmlsdGVyLWNsaWNrZWQnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnc29ydF9vcmRlcic6IHRoaXMuc3RhdGUuc29ydF9vcmRlciB8fCAnJywgJ3JhdGluZyc6IHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MgfHwgW10sICdob21lX3Zpc2l0JzogdGhpcy5zdGF0ZS5ob21lX3Zpc2l0IHx8ICcnLCAnbGFiX3Zpc2l0JzogdGhpcy5zdGF0ZS5sYWJfdmlzaXQgfHwgJycsIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vbiB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIGxldCBjdXJyZW50RmlsdGVycyA9IHtcbiAgICAgICAgICAgIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vbixcbiAgICAgICAgICAgIHNvcnRfb3JkZXI6IHRoaXMuc3RhdGUuc29ydF9vcmRlcixcbiAgICAgICAgICAgIGF2Z19yYXRpbmdzOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzIHx8ICcnLFxuICAgICAgICAgICAgaG9tZV92aXNpdDogdGhpcy5zdGF0ZS5ob21lX3Zpc2l0LFxuICAgICAgICAgICAgbGFiX3Zpc2l0OiB0aGlzLnN0YXRlLmxhYl92aXNpdCxcbiAgICAgICAgICAgIGdlbmRlcjogdGhpcy5zdGF0ZS5nZW5kZXIsXG4gICAgICAgICAgICBjYXRJZHM6IFtdLmNvbmNhdCh0aGlzLnN0YXRlLmNhdElkcykgfHwgW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbkZpbHRlcjogdHJ1ZSwgcHJldmlvdXNfZmlsdGVyczogY3VycmVudEZpbHRlcnMsIGNhdElkczogdGhpcy5zdGF0ZS5xdWlja0ZpbHRlciAmJiB0aGlzLnN0YXRlLnF1aWNrRmlsdGVyLmNhdElkICYmIHRoaXMuc3RhdGUucXVpY2tGaWx0ZXIuY2F0SWQubGVuZ3RoP3RoaXMuc3RhdGUucXVpY2tGaWx0ZXIuY2F0SWQ6dGhpcy5zdGF0ZS5jYXRJZHNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpc0RhdGFGaWx0ZXJlZChmaWx0ZXJEYXRhID0ge30sIGNoZWNrSWZBbnlGaWx0ZXJBcHBsaWxlZD1mYWxzZSkge1xuXG4gICAgICAgIGlmIChjaGVja0lmQW55RmlsdGVyQXBwbGlsZWQpIHtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyQ291bnQgPSAwXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsdGVyIGluIHRoaXMuc3RhdGUucHJldmlvdXNfZmlsdGVycykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIuaW5jbHVkZXMoJ2NhdElkcycpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2aW91c19maWx0ZXJzW2ZpbHRlcl0gJiYgdGhpcy5zdGF0ZVtmaWx0ZXJdLmxlbmd0aCAhPSB0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnNbZmlsdGVyXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudCsrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGFyckZsaXRlcj0wO2FyckZsaXRlcjx0aGlzLnN0YXRlW2ZpbHRlcl0ubGVuZ3RoOyBhcnJGbGl0ZXIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnNbZmlsdGVyXS5pbmRleE9mKHRoaXMuc3RhdGVbZmlsdGVyXVthcnJGbGl0ZXJdKT09LTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuc3RhdGVbZmlsdGVyXSAhPSB0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnNbZmlsdGVyXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudCsrXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyQ291bnRcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgZmlsdGVyRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhdmdfcmF0aW5nczogJycsXG4gICAgICAgICAgICAgICAgaG9zcGl0YWxfdHlwZTogJycsXG4gICAgICAgICAgICAgICAgY2F0SWRzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZmlsdGVyQ291bnQgPSAwXG4gICAgICAgICAgICBmb3IgKGxldCBmaWx0ZXIgaW4gZmlsdGVyRGF0YSkge1xuXG4gICAgICAgICAgICAgICAgaWYoZmlsdGVyLmluY2x1ZGVzKCdob3NwaXRhbF90eXBlJykpe1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlWydsYWJfdmlzaXQnXSB8fCB0aGlzLnN0YXRlWydob21lX3Zpc2l0J10pe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKGZpbHRlciA9PSdjYXRJZHMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2ZpbHRlcl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDb3VudCsrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckRhdGFbZmlsdGVyXSAhPSB0aGlzLnN0YXRlW2ZpbHRlcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJDb3VudFxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgICAgIGxldCBzZWxlY3RlZENhdGVnb3J5SWRzID0gdGhpcy5zdGF0ZS5jYXRJZHNcbiAgICAgICAgaWYgKGNhdGVnb3J5KSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRDYXRlZ29yeUlkcy5pbmRleE9mKGNhdGVnb3J5KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9IHNlbGVjdGVkQ2F0ZWdvcnlJZHMuZmlsdGVyKHggPT4geCAhPSBjYXRlZ29yeSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkcy5wdXNoKGNhdGVnb3J5KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRJZHM6IHNlbGVjdGVkQ2F0ZWdvcnlJZHMgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVBbGxGaWx0ZXJzKHR5cGUsIHZhbCwgaXNBcnJheSA9IGZhbHNlLCBlKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHZhbFxuICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkVmFsID0gW10uY29uY2F0KHRoaXMuc3RhdGVbdHlwZV0pIHx8IFtdXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZFZhbC5maWx0ZXIoKGRhdGEpPT4ge1xuICAgICAgICAgICAgICAgIGlmKGRhdGE9PXZhbCl7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZighZm91bmQpe1xuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2godmFsKSAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGUuaW5jbHVkZXMoJ3NvcnRfb24nKSApIHtcblxuICAgICAgICAgICAgaWYodmFsLmluY2x1ZGVzKCdwcmljZV9hc2MnKSB8fCB2YWwuaW5jbHVkZXMoJ3ByaWNlX2Rlc2MnKSApe1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZVt0eXBlXT09J2ZlZXMnICYmICggKHRoaXMuc3RhdGVbJ3NvcnRfb3JkZXInXT09J2FzYycgJiYgdmFsLmluY2x1ZGVzKCdwcmljZV9hc2MnKSApIHx8ICh0aGlzLnN0YXRlWydzb3J0X29yZGVyJ109PSdkZXNjJyAmJiB2YWwuaW5jbHVkZXMoJ3ByaWNlX2Rlc2MnKSApICkgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c29ydF9vbjogbnVsbCwgc29ydF9vcmRlcjogbnVsbH0pXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvcnRfb246ICdmZWVzJywgc29ydF9vcmRlcjogdmFsLmluY2x1ZGVzKCdwcmljZV9hc2MnKT8nYXNjJzonZGVzYyd9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0X29uOiB0aGlzLnN0YXRlW3R5cGVdPT12YWx1ZT9udWxsOnZhbHVlLCBzb3J0X29yZGVyOiBudWxsIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHR5cGUuaW5jbHVkZXMoJ2xhYl92aXNpdCcpIHx8IHR5cGUuaW5jbHVkZXMoJ2hvbWVfdmlzaXQnKSl7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1t0eXBlXTogIXRoaXMuc3RhdGVbdHlwZV19KVxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7J2xhYl92aXNpdCc6IHR5cGUuaW5jbHVkZXMoJ2xhYl92aXNpdCcpP3ZhbHVlOiF2YWx1ZSwgJ2hvbWVfdmlzaXQnOiB0eXBlLmluY2x1ZGVzKCdob21lX3Zpc2l0Jyk/dmFsdWU6IXZhbHVlfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbdHlwZV06IHRoaXMuc3RhdGVbdHlwZV09PXZhbHVlPycnOnZhbHVlIH0pICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB2YXIgc2VsZWN0ZWRUZXN0cyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRlc3RzLnB1c2godGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXNbaV0uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHF1aWNrRmlsdGVyQ2F0SWQgPSB0aGlzLnN0YXRlLnF1aWNrRmlsdGVyICYmIHRoaXMuc3RhdGUucXVpY2tGaWx0ZXIuY2F0SWQgJiYgdGhpcy5zdGF0ZS5xdWlja0ZpbHRlci5jYXRJZC5sZW5ndGg/dGhpcy5zdGF0ZS5xdWlja0ZpbHRlci5jYXRJZFswXTonJ1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW5GaWx0ZXIgP1xuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsLW92ZXJsYXkgY2FuY2VsLW92ZXJsYXktemluZGV4XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBjYW5jZWwtYXBwb2ludG1lbnQtZGl2IGNhbmNlbC1wb3B1cCBvdmVyZmxvdy1oaWRkZW4gcGItMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zcy1idG5cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2ljb25zL2Nsb3NlLnBuZ1wifSBhbHQ9XCJjbG9zZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wLXRvcC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU29ydC9GaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRpbmctbWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtbGZ0LWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNvcnQtaGVhZGluZ3NcIj5Tb3J0IGJ5PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LXNsaWRlci1zY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc29ydC1jYXJkcy1saXN0ICR7dGhpcy5zdGF0ZS5zb3J0X29uPT0nJz8nY2hpdEFjdGl2ZSc6Jyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NvcnRfb24nLCAnJywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1sc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc29ydF9vbj09Jyc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1yZWxldmVuY2Uuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcmV2ZWwuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVsZXZhbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc19sb2dpbl91c2VyX2luc3VyZWQgJiYgdGhpcy5wcm9wcy5pbnN1cmFuY2Vfc3RhdHVzID09IDE/JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNhcmRzLWxpc3QgJHt0aGlzLnN0YXRlLnNvcnRfb249PSdmZWVzJyAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXI9PSdhc2MnPydjaGl0QWN0aXZlJzonJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnc29ydF9vbicsICdwcmljZV9hc2MnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1sc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0X29uPT0nZmVlcycgJiYgdGhpcy5zdGF0ZS5zb3J0X29yZGVyPT0nYXNjJz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1wcmljZXNvcnQuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9wcmljZXNvcnQuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpY2UgTG93IHRvIEhpZ2g8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzX2xvZ2luX3VzZXJfaW5zdXJlZCAmJiB0aGlzLnByb3BzLmluc3VyYW5jZV9zdGF0dXMgPT0gMT8nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT17YHNvcnQtY2FyZHMtbGlzdCAke3RoaXMuc3RhdGUuc29ydF9vbj09J2ZlZXMnICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlcj09J2Rlc2MnPydjaGl0QWN0aXZlJzonJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnc29ydF9vbicsICdwcmljZV9kZXNjJywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtbHN0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc29ydF9vbj09J2ZlZXMnICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlcj09J2Rlc2MnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3J2LXByaWNldXAuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9wcmljZXVwLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByaWNlIEhpZ2ggdG8gTG93PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNvcnQtY2FyZHMtbGlzdCAke3RoaXMuc3RhdGUuc29ydF9vbj09J2Rpc3RhbmNlJz8nY2hpdEFjdGl2ZSc6Jyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NvcnRfb24nLCAnZGlzdGFuY2UnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3J0LWxzdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb3J0X29uPT0nZGlzdGFuY2UnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtbG9jYXRpb25zLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTQgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9sb2NhdGlvbnMuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxNCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGlzdGFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc29ydC1jYXJkcy1saXN0ICR7dGhpcy5zdGF0ZS5zb3J0X29uPT0ncmF0aW5nJz8nY2hpdEFjdGl2ZSc6Jyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NvcnRfb24nLCAncmF0aW5nJywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1sc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc29ydF9vbj09J3JhdGluZyc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1yYXRuZy5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE4IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcmF0bmcuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmF0aW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydGluZy1idG5zLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNvcnQtaGVhZGluZ3NcIj5SYXRpbmdzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0YnRuY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuYXZnX3JhdGluZ3MgPT0nMycgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdhdmdfcmF0aW5ncycsICczJywgZmFsc2UpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyA9PSczJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3J0LXN0YXItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3J2LWJ0bi1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zZWxlY3RlZC1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLjAgKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuYXZnX3JhdGluZ3MgPT0nNCc/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2F2Z19yYXRpbmdzJywgJzQnLCBmYWxzZSl9PiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyA9PSc0Jz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtYnRuLXN0YXIuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIGNsYXNzTmFtZT1cInNydC1zdGFyLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3NlbGVjdGVkLXN0YXIuc3ZnXCJ9IC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LjAgKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUuYXZnX3JhdGluZ3MgPT0nNC41JyA/ICdzcnRCdG5BY3QnIDogJyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ2F2Z19yYXRpbmdzJywgJzQuNScsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09JzQuNSc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3J0LXN0YXItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3J2LWJ0bi1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zZWxlY3RlZC1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQuNSArPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydGluZy1idG5zLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNvcnQtaGVhZGluZ3NcIj5WaXNpdCBUeXBlPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0YnRuY2FyZCBqdXN0eWZ5LXR3b0J0bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmhvbWVfdmlzaXQgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdob21lX3Zpc2l0JywgIXRoaXMuc3RhdGUuaG9tZV92aXNpdCwgZmFsc2UpfT5Ib21lIFZpc2l0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHNvcnRCdG5zICR7dGhpcy5zdGF0ZS5sYWJfdmlzaXQgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdsYWJfdmlzaXQnLCAhdGhpcy5zdGF0ZS5sYWJfdmlzaXQsIGZhbHNlKX0+TGFiIFZpc2l0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jYXRlZ29yaWVzICYmIHRoaXMucHJvcHMucGFja2FnZXNMaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRpbmctYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNvcnQtaGVhZGluZ3NcIj5DYXRlZ29yeTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0YnRuY2FyZCBqdXN0eWZ5LXR3b0J0bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhdC1ncnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWlja0ZpbHRlckNhdElkP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jYXRlZ29yaWVzLmZpbHRlcigoeD0+eC5pZD09cXVpY2tGaWx0ZXJDYXRJZCkpLm1hcCgoY2F0ZWdvcnksIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtjYXRlZ29yeS5pZH0gaWQ9e2NhdGVnb3J5LmlkfSBvbkNsaWNrPXt0aGlzLnNlbGVjdENhdGVnb3J5LmJpbmQodGhpcywgY2F0ZWdvcnkuaWQpfT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jYXRJZHMuaW5kZXhPZihjYXRlZ29yeS5pZCkgPiAtMSA/IFwic2VsZWN0ZWRcIiA6ICcnfT57Y2F0ZWdvcnkubmFtZX08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY2F0ZWdvcmllcy5maWx0ZXIoKHg9PnguaWQhPXF1aWNrRmlsdGVyQ2F0SWQpKS5tYXAoKGNhdGVnb3J5LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtjYXRlZ29yeS5pZH0gaWQ9e2NhdGVnb3J5LmlkfSBvbkNsaWNrPXt0aGlzLnNlbGVjdENhdGVnb3J5LmJpbmQodGhpcywgY2F0ZWdvcnkuaWQpfT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jYXRJZHMuaW5kZXhPZihjYXRlZ29yeS5pZCkgPiAtMSA/IFwic2VsZWN0ZWRcIiA6ICcnfT57Y2F0ZWdvcnkubmFtZX08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wLWZvb3QtYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtc2hwbmctY2FydC1idG5cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcywgdHJ1ZSl9PlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ2LWJ0bi1wcmltYXJ5IGJvb2stYnRuLW1yZ24tYWRqdXN0XCIgb25DbGljaz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0+QXBwbHkgRmlsdGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXJvdyBzdGlja3ktaGVhZGVyIG1ibC1zdGlja1wiIHN0eWxlPXt7dG9wOic1NXB4J319PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZm9yT3JnYW5pY1NlYXJjaCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtcm5nLXRvcC0xMiBkLW5vbmUgZC1tZC1ibG9ja1wiPjx1bCBjbGFzc05hbWU9XCJtcmItMTAgYnJlYWRjcnVtYi1saXN0XCIgc3R5bGU9e3sgJ3dvcmRCcmVhayc6ICdicmVha1dvcmQnIH19PjxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWxpc3QtaXRlbVwiPjxhIGhyZWY9XCIvXCI+PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGUgYnJlYWRjcnVtYi1jb2xvcmVkLXRpdGxlXCI+SG9tZTwvc3Bhbj48L2E+PC9saT48c3BhbiBjbGFzc05hbWU9XCJicmVhZGNydW1iLWFycm93XCI+Jmd0Ozwvc3Bhbj48bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIj48c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgYnJlYWRjcnVtYi10aXRsZVwiPkZ1bGwgQm9keSBDaGVja3VwIFBhY2thZ2VzPC9zcGFuPjwvbGk+PC91bD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNjcm9sbC1zaGFkb3ctYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JUYXhTYXZlciA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcm93IHN0aWNreS1oZWFkZXIgbWJsLXN0aWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzY3JvbGwtc2hhZG93LWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWZpbHRlci10YWItY29udGFpbmVyXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1maWx0ZXItdGFicy1zZWxlY3QgXCIgb25DbGljaz17dGhpcy5wcm9wcy5jb21wYXJlUGFja2FnZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXshdGhpcy5wcm9wcy5pc0NvbXBhcmVkICYmICh0aGlzLnByb3BzLmlzQ29tcGFyZSB8fCB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID4gMCkgPyBBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvcGFja2FnZUNvbXBhcmUvY29tcGFyZS1vcmFuZ2UucG5nXCIgOiBBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWFnZXMvcGFja2FnZUNvbXBhcmUvY29tcGFyZS5wbmdcIn0gYWx0PVwiXCIgc3R5bGU9e3sgd2lkdGg6IDE2IH19IC8+IDxzcGFuIGNsYXNzTmFtZT17YCR7IXRoaXMucHJvcHMuaXNDb21wYXJlZCAmJiAodGhpcy5wcm9wcy5pc0NvbXBhcmUgfHwgKHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID4gMCkpID8gJ2NvbWFwcmUtYWN0aXZlJyA6ICcnfWB9PkNvbXBhcmUgUGFja2FnZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1maWx0ZXItdGFicy1zZWxlY3QgXCIgb25DbGljaz17dGhpcy5zb3J0RmlsdGVyQ2xpY2tlZC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxNHB4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9maWx0ZXJzb3J0LnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0RhdGFGaWx0ZXJlZCgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpbHRlck5vdGlmaWNhdGlvblwiPnt0aGlzLmlzRGF0YUZpbHRlcmVkKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U29ydC9GaWx0ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlbkNhdGVnb3J5ID8gPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeVBvcHVwIHsuLi50aGlzLnByb3BzfSBhcHBseUNhdGVnb3JpZXM9e3RoaXMuYXBwbHlDYXRlZ29yaWVzLmJpbmQodGhpcyl9IGNsb3NlQ2F0ZWdvcnk9e3RoaXMuY2xvc2VDYXRlZ29yeS5iaW5kKHRoaXMpfSBpbml0aWFsU2VsZWN0ZWRDYXRlZ29yeT17dGhpcy5pbml0aWFsU2VsZWN0ZWRDYXRlZ29yeS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuRmlsdGVyICYmIGZhbHNlID8gPGRpdiBvbkNsaWNrPXt0aGlzLnNvcnRGaWx0ZXJDbGlja2VkLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImZpbHRlci1vdmVybGF5IG92ZXJsYXkgYmxhY2sgY2FuY2VsLW92ZXJsYXktemluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBmaWx0ZXItcG9wdXBcIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWZvb3RlciBwZC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tYmxvY2sgYnRuLWxnIHBvcC1idG5cIiBvbkNsaWNrPXt0aGlzLmFwcGx5RmlsdGVycy5iaW5kKHRoaXMpfT5BcHBseTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUmFuZ2UgZnJvbSAncmMtc2xpZGVyL2xpYi9SYW5nZSc7XG5pbXBvcnQgeyBDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcbmltcG9ydCBMb2NhdGlvbkVsZW1lbnRzIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvbkVsZW1lbnRzJ1xuaW1wb3J0IExvY2F0aW9uUG9wdXAgZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uUG9wdXAnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuaW1wb3J0IENhdGVnb3J5UG9wdXAgZnJvbSAnLi9jYXRlZ29yeVBvcHVwLmpzJ1xuXG5cbmNsYXNzIFJlc3VsdENvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC8vIGFuY2hvckVsOiBudWxsLFxuICAgICAgICAgICAgLy8gb3BlbkZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgICAvLyBwcmljZVJhbmdlOiBbMCwgMjAwMDBdLFxuICAgICAgICAgICAgLy8gZGlzdGFuY2VSYW5nZTogWzAsIDE1XSxcbiAgICAgICAgICAgIC8vIHNvcnRfb246IG51bGwsXG4gICAgICAgICAgICBzaG9ydFVSTDogXCJcIixcbiAgICAgICAgICAgIC8vIGRyb3Bkb3duX3Zpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgb3ZlcmxheVZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BvcHVwQ29udGFpbmVyOiB0cnVlLFxuICAgICAgICAgICAgLy8gc29ydFRleHQ6ICdSZWxldmFuY2UnLFxuICAgICAgICAgICAgLy8gb3BlbkNhdGVnb3J5OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGlzQ2F0ZWdvcnlBcHBsaWVkOmZhbHNlLFxuICAgICAgICAgICAgLy8gYXBwbGllZENhdGVnb3J5Q291bnQ6JycsXG4gICAgICAgICAgICAvLyBpbml0aWFsU2VsZWN0ZWRDYXRJZHM6JycsXG4gICAgICAgICAgICAvLyBtYXhfYWdlOicnLFxuICAgICAgICAgICAgLy8gbWluX2FnZTonJyxcbiAgICAgICAgICAgIC8vIHBhY2thZ2VUeXBlOicnLFxuICAgICAgICAgICAgLy8gZ2VuZGVyOicnLFxuICAgICAgICAgICAgLy8gY2F0SWRzOltdLFxuICAgICAgICAgICAgLy8gdGVzdF9pZHM6JycsXG4gICAgICAgICAgICBzc3JGbGFnOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4ucHJvcHMuZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcyB9KVxuICAgICAgICBpZiAocHJvcHMubG9jYXRpb25UeXBlICYmICFwcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zZW9EYXRhICYmIHByb3BzLnNlb0RhdGEubG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IHRydWUsIG92ZXJsYXlWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvcnRlblVybCgpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnByb3BzLmZpbHRlckNyaXRlcmlhUGFja2FnZXMsIHNzckZsYWc6IHRydWUgfSlcbiAgICAgICAgdGhpcy5zaG9ydGVuVXJsKClcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5wcm9wcy5mb3JPcmdhbmljU2VhcmNoKXtcbiAgICAgICAgICAgIHZhciB1cmxfc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHVybF9zdHJpbmcpO1xuICAgICAgICAgICAgdmFyIGNhdF9pZHMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImNhdGVnb3J5X2lkc1wiKVxuICAgICAgICAgICAgaWYoY2F0X2lkcyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBjYXRfaWRzID0gY2F0X2lkcy5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgICAgaWYoY2F0X2lkcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVkQ2F0ZWdvcnlDb3VudDpjYXRfaWRzLmxlbmd0aCxpc0NhdGVnb3J5QXBwbGllZDp0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXBwbHlGaWx0ZXJzKCkge1xuICAgIC8vICAgICBsZXQgZmlsdGVyU3RhdGUgPSB7XG4gICAgLy8gICAgICAgICBwcmljZVJhbmdlOiB0aGlzLnN0YXRlLnByaWNlUmFuZ2UsXG4gICAgLy8gICAgICAgICBkaXN0YW5jZVJhbmdlOiB0aGlzLnN0YXRlLmRpc3RhbmNlUmFuZ2UsXG4gICAgLy8gICAgICAgICBzb3J0X29uOiB0aGlzLnN0YXRlLnNvcnRfb24sXG4gICAgLy8gICAgICAgICBtYXhfYWdlOiB0aGlzLnN0YXRlLm1heF9hZ2UsXG4gICAgLy8gICAgICAgICBtaW5fYWdlOiB0aGlzLnN0YXRlLm1pbl9hZ2UsXG4gICAgLy8gICAgICAgICBnZW5kZXI6IHRoaXMuc3RhdGUuZ2VuZGVyLFxuICAgIC8vICAgICAgICAgcGFja2FnZVR5cGU6IHRoaXMuc3RhdGUucGFja2FnZVR5cGUsXG4gICAgLy8gICAgICAgICBjYXRJZHM6dGhpcy5zdGF0ZS5jYXRJZHMsXG4gICAgLy8gICAgICAgICB0ZXN0X2lkczp0aGlzLnN0YXRlLnRlc3RfaWRzXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgbGV0IGRhdGEgPSB7XG4gICAgLy8gICAgICAgICAnQ2F0ZWdvcnknOiAnRmlsdGVyQ2xpY2snLCAnQWN0aW9uJzogJ0NsaWNrZWQgb24gRmlsdGVyJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLWZpbHRlci1jbGlja2VkJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ2xvd1ByaWNlUmFuZ2UnOiB0aGlzLnN0YXRlLnByaWNlUmFuZ2VbMF0sICdoaWdoUHJpY2VSYW5nZSc6IHRoaXMuc3RhdGUucHJpY2VSYW5nZVsxXSwgJ2xvd0Rpc3RhbmNlUmFuZ2UnOiB0aGlzLnN0YXRlLmRpc3RhbmNlUmFuZ2VbMF0sICdoaWdoRGlzdGFuY2VSYW5nZSc6IHRoaXMuc3RhdGUuZGlzdGFuY2VSYW5nZVsxXSwgJ3NvcnRfb24nOiB0aGlzLnN0YXRlLnNvcnRfb24gPT0gXCJcIiA/ICdyZWxldmFuY2UnIDogdGhpcy5zdGF0ZS5zb3J0X29uXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVyU3RhdGUpXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuRmlsdGVyOiBmYWxzZSB9KVxuICAgIC8vIH1cblxuICAgIC8vIGhhbmRsZU9wZW4oZXZlbnQpIHtcbiAgICAvLyAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0IH0pXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgZHJvcGRvd25fdmlzaWJsZTogdHJ1ZVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBoaWRlU29ydERpdigpIHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBkcm9wZG93bl92aXNpYmxlOiBmYWxzZVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kbGVDbG9zZSh0eXBlKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogbnVsbCwgc29ydF9vbjogdHlwZSAsZHJvcGRvd25fdmlzaWJsZTpmYWxzZX0sICgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmICh0eXBlIHx8IHR5cGUgPT09IFwiXCIpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVycygpXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG4gICAgLy8gdG9nZ2xlRmlsdGVyKCkge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIG9wZW5GaWx0ZXI6ICF0aGlzLnN0YXRlLm9wZW5GaWx0ZXJcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG4gICAgXG4gICAgLy8gaGFuZGxlUmFuZ2UodHlwZSwgcmFuZ2UpIHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBbdHlwZV06IHJhbmdlXG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG4gICAgZ2V0Q3JpdGVyaWFTdHJpbmcoc2VsZWN0ZWRDcml0ZXJpYXMpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ3JpdGVyaWFzICYmIHNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkQ3JpdGVyaWFzLnJlZHVjZSgoZmluYWwsIGN1cnIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsICs9ICcsICdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWwgKz0gYCR7Y3Vyci5uYW1lfWBcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxcbiAgICAgICAgICAgIH0sIFwiXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpc0ZpbHRlckFwcGxpZWQoKSB7XG4gICAgLy8gICAgIGNvbnN0IGRlZiA9IHtcbiAgICAvLyAgICAgICAgIHByaWNlUmFuZ2U6IFswLCAyMDAwMF0sXG4gICAgLy8gICAgICAgICBkaXN0YW5jZVJhbmdlOiBbMCwgMTVdXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGZpbHRlciBpbiBkZWYpIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoZGVmW2ZpbHRlcl1bMF0gIT0gdGhpcy5zdGF0ZVtmaWx0ZXJdWzBdIHx8IGRlZltmaWx0ZXJdWzFdICE9IHRoaXMuc3RhdGVbZmlsdGVyXVsxXSkge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZVxuICAgIC8vICAgICB9IGNhdGNoIChlKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIHNob3J0ZW5VcmwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiArICcmZm9yY2VfbG9jYXRpb249dHJ1ZSdcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXJsU2hvcnRuZXIodXJsLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0VVJMOiBkYXRhLnRpbnlfdXJsIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG92ZXJsYXlDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG92ZXJsYXlWaXNpYmxlOiBmYWxzZSwgc2VhcmNoQ2l0aWVzOiBbXSwgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25fZWxlbWVudCcpKXtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbl9lbGVtZW50Jykuc3R5bGUuekluZGV4ID0nMCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVMb2NhdGlvblBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHBvcHVwQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwQ29udGFpbmVyOiBmYWxzZSwgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgIH1cbiAgICAvLyB0b2dnbGVDYXRlZ29yeShldmVudCkge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIG9wZW5DYXRlZ29yeTogIXRoaXMuc3RhdGUub3BlbkNhdGVnb3J5XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuICAgIC8vIGNsb3NlQ2F0ZWdvcnkoKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgb3BlbkNhdGVnb3J5OiAhdGhpcy5zdGF0ZS5vcGVuQ2F0ZWdvcnlcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG4gICAgLy8gYXBwbHlDYXRlZ29yaWVzKGNhdGVnb3J5U3RhdGUpIHsgXG4gICAgLy8gICAgIGxldCBmaWx0ZXJTdGF0ZSA9IHtcbiAgICAvLyAgICAgICAgIHByaWNlUmFuZ2U6IHRoaXMuc3RhdGUucHJpY2VSYW5nZSxcbiAgICAvLyAgICAgICAgIGRpc3RhbmNlUmFuZ2U6IHRoaXMuc3RhdGUuZGlzdGFuY2VSYW5nZSxcbiAgICAvLyAgICAgICAgIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vbixcbiAgICAvLyAgICAgICAgIG1heF9hZ2U6dGhpcy5zdGF0ZS5tYXhfYWdlLFxuICAgIC8vICAgICAgICAgbWluX2FnZTogdGhpcy5zdGF0ZS5taW5fYWdlLFxuICAgIC8vICAgICAgICAgZ2VuZGVyOnRoaXMuc3RhdGUuZ2VuZGVyLFxuICAgIC8vICAgICAgICAgcGFja2FnZVR5cGU6IHRoaXMuc3RhdGUucGFja2FnZVR5cGUsXG4gICAgLy8gICAgICAgICB0ZXN0X2lkczp0aGlzLnN0YXRlLnRlc3RfaWRzXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgLy8gbGV0IGlzQ2F0ZWdvcnkgPSBmYWxzZSBcbiAgICAvLyAgICAgLy8gaWYodGhpcy5zdGF0ZS5pbml0aWFsU2VsZWN0ZWRDYXRJZHMgIT0gY2F0ZWdvcnlTdGF0ZS5sZW5ndGgpe1xuICAgIC8vICAgICAvLyAgICAgaXNDYXRlZ29yeSA9IHRydWVcbiAgICAvLyAgICAgLy8gfVxuICAgIC8vICAgICB0aGlzLnByb3BzLmFwcGx5Q2F0ZWdvcmllcyhjYXRlZ29yeVN0YXRlLGZpbHRlclN0YXRlKVxuICAgIC8vICAgICAvLyB0aGlzLnNldFN0YXRlKHsgb3BlbkNhdGVnb3J5OiBmYWxzZSAsaXNDYXRlZ29yeUFwcGxpZWQ6aXNDYXRlZ29yeSxhcHBsaWVkQ2F0ZWdvcnlDb3VudDpjYXRlZ29yeVN0YXRlLmxlbmd0aD4wP2NhdGVnb3J5U3RhdGUubGVuZ3RoOicnfSlcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5DYXRlZ29yeTogZmFsc2UsY2F0SWRzOmNhdGVnb3J5U3RhdGUubGVuZ3RofSlcblxuICAgIC8vIH1cbiAgICAvLyBpbml0aWFsU2VsZWN0ZWRDYXRlZ29yeShzZWxlY3RlZGNhdGVnb3J5KXtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7aW5pdGlhbFNlbGVjdGVkQ2F0SWRzOnNlbGVjdGVkY2F0ZWdvcnkubGVuZ3RofSlcbiAgICAvLyB9XG5cbiAgICBnb1RvTG9jYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoQ2l0aWVzOiBbXVxuICAgICAgICB9KVxuICAgICAgICBsZXQgbG9jYXRpb25fdXJsID0gJy9sb2NhdGlvbnNlYXJjaCdcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhbmdlTG9jYXRpb25Eb2N0b3JSZXN1bHRzUG9wVXAnLCAnQWN0aW9uJzogJ2NoYW5nZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYW5nZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChsb2NhdGlvbl91cmwpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHZhciBzZWxlY3RlZFRlc3RzID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGVzdHMucHVzaCh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhc1tpXS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgc29ydFR5cGUgPSAnJ1xuICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5zb3J0X29uKSB7XG4gICAgICAgIC8vICAgICBzb3J0VHlwZSA9IHRoaXMuc3RhdGUuc29ydF9vbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc3RhdGUuc29ydF9vbi5zbGljZSgxKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCBjcml0ZXJpYVN0ciA9IHRoaXMuZ2V0Q3JpdGVyaWFTdHJpbmcodGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMpXG4gICAgICAgIGxldCBsb2NhdGlvbk5hbWUgPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzKSB7XG4gICAgICAgICAgICBsb2NhdGlvbk5hbWUgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3NcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZW9EYXRhICYmIHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvbikge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgaWQ9XCJmaWx0ZXItc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGFiX2NhcmQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHggMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLnBhY2thZ2VzTGlzdD90aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jb3VudDpcIlwifSBSZXN1bHRzIGZvciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy03MDBcIj4ge3RoaXMucHJvcHMuZm9yT3JnYW5pY1NlYXJjaD8nRnVsbCBCb2R5IENoZWNrdXAgUGFja2FnZXMnOnRoaXMucHJvcHMuZm9yVGF4U2F2ZXI/J0hlYWx0aCBQYWNrYWdlcyc6J3NlbGVjdGVkIGNhdGVnb3JpZXMnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC1zcGFuXCI+IHtjcml0ZXJpYVN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbk5hbWUgPyBgIGluICR7bG9jYXRpb25OYW1lfWAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBzdHlsZT17eyB3aWR0aDogNjUsIGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbG9jYXRpb25zZWFyY2g/bGFiX2NhcmQ9dHJ1ZSZpZD0ke3NlbGVjdGVkVGVzdHN9YCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXByaW1hcnlcIiBzdHlsZT17eyBmb250U2l6ZTogMTQgfX0gPkNoYW5nZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbGMtZmlsdGVyLXNvcnQtZGl2IG1ydC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYy1maWx0ZXItZGl2IGQtZmxleFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRmlsdGVyLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvbGMtZmlsdGVyLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1wcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogNCB9fT5GaWx0ZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGMtc29ydC1kaXYgZC1mbGV4XCIgb25DbGljaz17dGhpcy5oYW5kbGVPcGVuLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LXByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogNCB9fT57dGhpcy5zdGF0ZS5zb3J0X29uID09PSBcIlwiIHx8ICF0aGlzLnN0YXRlLnNvcnRfb24gPyAnUmVsZXZhbmNlJyA6IHNvcnRUeXBlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL29yYW5nZS1kb3duLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcGRuZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tZmlsdGVyIGQtbm9uZSBkLW1kLWJsb2NrIGFsaWduU2hhcmVCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmxpbmUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1pbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXt0aGlzLnN0YXRlLnNob3J0VVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3B5PXsoKSA9PiB7IFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTaG9ydGVuZWQgVVJMIENvcGllZC5cIiB9KTsgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL3VybC1zaG9ydC5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDgwIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGxpIHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fSBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wZW4uYmluZCh0aGlzKX0+PHNwYW4gY2xhc3NOYW1lPVwiY3QtaW1nIGN0LWltZy1zbSBmaWx0ZXItaWNvbiB0ZXh0LXJpZ2h0XCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9yYW5nZS5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319IG9uQ2xpY2s9e3RoaXMudG9nZ2xlRmlsdGVyLmJpbmQodGhpcyl9PjxzcGFuIGNsYXNzTmFtZT1cImN0LWltZyBjdC1pbWctc20gZmlsdGVyLWljb24gdGV4dC1yaWdodCBhcHBsaWVkLWZpbHRlclwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZmlsdGVyLnN2Z1wifSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZpbHRlckFwcGxpZWQuY2FsbCh0aGlzKSA/IDxzcGFuIGNsYXNzTmFtZT1cImFwcGxpZWQtZmlsdGVyLW5vdGlcIiAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhdC1pY28tdGV4dFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2F0ZWdvcnkuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvY2F0ZWdvcmllcy5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpblRvcDonMXB4J319IGNsYXNzTmFtZT1cImN0LWltZyBjdC1pbWctc20gZmlsdGVyLWljb24gdGV4dC1yaWdodCBhcHBsaWVkLWZpbHRlclwiPkNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmlsdGVyQXBwbGllZC5jYWxsKHRoaXMpID8gPHNwYW4gY2xhc3NOYW1lPVwiYXBwbGllZC1maWx0ZXItbm90aVwiIC8+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wYWNrYWdlc0xpc3Q/dGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY291bnQ6Jyd9IFJlc3VsdHMgZm91bmQgZm9yIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+IHt0aGlzLnByb3BzLmZvck9yZ2FuaWNTZWFyY2g/J0Z1bGwgQm9keSBDaGVja3VwIFBhY2thZ2VzJzp0aGlzLnByb3BzLmZvclRheFNhdmVyPydIZWFsdGggUGFja2FnZXMnOidzZWxlY3RlZCBjYXRlZ29yaWVzJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC1zcGFuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIGZhbHNlID8gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbG9jYXRpb25OYW1lICYmIHRoaXMuc3RhdGUuc3NyRmxhZyA/IDxzcGFuIGNsYXNzTmFtZT1cImxvY2F0aW9uLWVkaXRcIj57YCBpbiAke2xvY2F0aW9uTmFtZX1gfTwvc3Bhbj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAxNSwgaGVpZ2h0OiAxNSwgbWFyZ2luTGVmdDogNywgY3Vyc29yOiAncG9pbnRlcicgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZWRpdC5zdmdcIn0gb25DbGljaz17dGhpcy5nb1RvTG9jYXRpb24uYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25FbGVtZW50cyB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IHJlc3VsdFR5cGU9J2xpc3QnIGlzVG9wYmFyPXt0cnVlfSBoaWRlTG9jYXRpb25Qb3B1cD17KCkgPT4gdGhpcy5oaWRlTG9jYXRpb25Qb3B1cCgpfSBsb2NhdGlvbk5hbWU9e2xvY2F0aW9uTmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIHRoaXMuc3RhdGUub3ZlcmxheVZpc2libGUgJiYgIXRoaXMucHJvcHMubGFiX2NhcmQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uUG9wdXAtb3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3ZlcmxheUNsaWNrKCl9ID48L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnByb3BzLmxhYl9jYXJkICYmIHRoaXMuc3RhdGUuc2hvd1BvcHVwQ29udGFpbmVyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cENvbnRhaW5lci1vdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0Q291bnRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZWxlY3RMb2NhdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgTG9jYXRpb25Qb3B1cFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL2xvY2F0aW9uUG9wdXAvaW5kZXguanMnXG5cbmNsYXNzIExvY2F0aW9uUG9wdXBDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExvY2F0aW9uUG9wdXBWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBsb2NhdGlvblR5cGVcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgbG9jYXRpb25UeXBlXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RMb2NhdGlvbjogKGxvY2F0aW9uLCB0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RMb2NhdGlvbihsb2NhdGlvbiwgdHlwZSkpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvY2F0aW9uUG9wdXBDb250YWluZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IG1lcmdlTEFCU3RhdGUsIHVybFNob3J0bmVyLCBnZXRQYWNrYWdlcywgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIGdldERpYWdub3Npc0NyaXRlcmlhUmVzdWx0cywgY2xlYXJFeHRyYVRlc3RzLCBnZXRGb290ZXJEYXRhLCBzZWxlY3RTZWFyY2hUeXBlLCBnZXRPZmZlckxpc3QsIHRvZ2dsZU9QRENyaXRlcmlhLCBzZWxlY3RMYWJBcHBvaW50bWVudFR5cGUsIHNlbGVjdExhYlRpbWVTTG90LCByZXNldFBrZ0NvbXBhcmUsIHRvZ2dsZWNvbXBhcmVDcml0ZXJpYSwgbG9hZE9QREluc3VyYW5jZSwgc2V0Q29tbW9uVXRtVGFncywgdW5TZXRDb21tb25VdG1UYWdzLCBjbGVhclZpcFNlbGVjdGVkUGxhbiwgTm9uSXBkQm9va2luZ0xlYWQsIHNhdmVMZWFkUGhuTnVtYmVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCB7IG9wZFNlYXJjaFN0YXRlQnVpbGRlciwgbGFiU2VhcmNoU3RhdGVCdWlsZGVyLCBQYWNrYWdlU2VhcmNoU3RhdGVCdWlsZGVyIH0gZnJvbSAnLi4vLi4vaGVscGVycy91cmx0b1N0YXRlJ1xuaW1wb3J0IFNlYXJjaFBhY2thZ2VzVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RpYWdub3Npcy9zZWFyY2hQYWNrYWdlcy9pbmRleC5qcydcblxuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKVxuXG5jbGFzcyBTZWFyY2hQYWNrYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmb3JUYXhTYXZlcjogcHJvcHMubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJ0YXgtc2F2ZXItaGVhbHRoLXBhY2thZ2VzXCIpLFxuICAgICAgICAgICAgZm9yT3JnYW5pY1NlYXJjaDogcHJvcHMubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoXCJmdWxsLWJvZHktY2hlY2t1cC1oZWFsdGgtcGFja2FnZXNcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkRGF0YShzdG9yZSwgbWF0Y2gsIHF1ZXJ5UGFyYW1zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uX21zID0gbnVsbFxuICAgICAgICAgICAgICAgIGlmIChtYXRjaC51cmwuaW5jbHVkZXMoJ2xvY2F0aW9uPScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX21zID0gbWF0Y2gudXJsLnNwbGl0KCdsb2NhdGlvbj0nKVsxXVxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbl9tcyA9IHBhcnNlSW50KGxvY2F0aW9uX21zKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFBhY2thZ2VTZWFyY2hTdGF0ZUJ1aWxkZXIobnVsbCwgcXVlcnlQYXJhbXMsIHRydWUsIGxvY2F0aW9uX21zKS50aGVuKChzdGF0ZSkgPT4geyAvLyBidWlsZCBzdGF0ZSBpbiBjYXNlIG9mIHNzclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChtZXJnZUxBQlN0YXRlKHN0YXRlKSlcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VhcmNoVXJsID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gudXJsLmluY2x1ZGVzKCctbGJjaXQnKSB8fCBtYXRjaC51cmwuaW5jbHVkZXMoJy1sYmxpdGNpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hVcmwgPSBtYXRjaC51cmwudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWdlID0gMVxuICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMucGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSA9IHBhcnNlSW50KHF1ZXJ5UGFyYW1zLnBhZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGdldFBhY2thZ2VzKHN0YXRlLCBwYWdlLCB0cnVlLCBzZWFyY2hVcmwsIHt9LCAobG9hZE1vcmUsIHNlb0RhdGEpID0+IHsgLy9nZXQgc2VhcmNoZWQgcGFja2FnZXMgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gudXJsLmluY2x1ZGVzKCctbGJjaXQnKSB8fCBtYXRjaC51cmwuaW5jbHVkZXMoJy1sYmxpdGNpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Rm9vdGVyRGF0YShtYXRjaC51cmwuc3BsaXQoXCIvXCIpWzFdKSgpLnRoZW4oKGZvb3RlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyRGF0YSA9IGZvb3RlckRhdGEgfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgc2VvRGF0YSwgZm9vdGVyRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBzZW9EYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHNlb0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgICAgICAgICByZWplY3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnByb3BzLmxvYWRPUERJbnN1cmFuY2UodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTZWFyY2hQYWNrYWdlc1ZpZXcgey4uLnRoaXMucHJvcHN9IGZvclRheFNhdmVyPXt0aGlzLnN0YXRlLmZvclRheFNhdmVyfSBmb3JPcmdhbmljU2VhcmNoPXt0aGlzLnN0YXRlLmZvck9yZ2FuaWNTZWFyY2h9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICBmZXRjaE5ld1Jlc3VsdHMsXG4gICAgICAgIGNvcnBvcmF0ZUNvdXBvbixcbiAgICAgICAgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLFxuICAgICAgICBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLFxuICAgICAgICBwYWdlLFxuICAgICAgICBjb21wYXJlX3BhY2thZ2VzXG5cbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcblxuICAgIGNvbnN0IHtcbiAgICAgICAgY29tbW9uX3NldHRpbmdzXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIGNvbnN0IHtcbiAgICAgICAgb2ZmZXJMaXN0LFxuICAgICAgICBpc19sb2dpbl91c2VyX2luc3VyZWQsXG4gICAgICAgIGluc3VyYW5jZV9zdGF0dXMsXG4gICAgICAgIGRldmljZV9pbmZvLFxuICAgICAgICBjb21tb25fdXRtX3RhZ3NcbiAgICB9ID0gc3RhdGUuVVNFUlxuXG4gICAgY29uc3QgTEFCUyA9IHN0YXRlLkxBQl9TRUFSQ0hfREFUQVxuICAgIGNvbnN0IHsgbGFiTGlzdCwgTE9BREVEX0xBQlNfU0VBUkNILCBjb3VudCwgU0VUX0ZST01fU0VSVkVSLCBwYWNrYWdlc0xpc3QsIGN1cnJfcGFnZSB9ID0gc3RhdGUuTEFCX1NFQVJDSFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgTEFCUyxcbiAgICAgICAgbGFiTGlzdCwgTE9BREVEX0xBQlNfU0VBUkNILFxuICAgICAgICBjb3VudCxcbiAgICAgICAgU0VUX0ZST01fU0VSVkVSLFxuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSxcbiAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICBmZXRjaE5ld1Jlc3VsdHMsXG4gICAgICAgIGNvcnBvcmF0ZUNvdXBvbixcbiAgICAgICAgcGFja2FnZXNMaXN0LFxuICAgICAgICBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsXG4gICAgICAgIGZpbHRlckNyaXRlcmlhUGFja2FnZXMsXG4gICAgICAgIG9mZmVyTGlzdCxcbiAgICAgICAgaXNfbG9naW5fdXNlcl9pbnN1cmVkLFxuICAgICAgICBwYWdlLFxuICAgICAgICBjdXJyX3BhZ2UsXG4gICAgICAgIGNvbXBhcmVfcGFja2FnZXMsXG4gICAgICAgIGluc3VyYW5jZV9zdGF0dXMsXG4gICAgICAgIGRldmljZV9pbmZvLFxuICAgICAgICBjb21tb25fc2V0dGluZ3MsXG4gICAgICAgIGNvbW1vbl91dG1fdGFnc1xuICAgIH1cblxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmxTaG9ydG5lcjogKHVybCwgY2IpID0+IGRpc3BhdGNoKHVybFNob3J0bmVyKHVybCwgY2IpKSxcbiAgICAgICAgZ2V0UGFja2FnZXM6IChzdGF0ZSwgcGFnZSwgZnJvbV9zZXJ2ZXIsIHNlYXJjaEJ5VXJsLGV4dHJhX3BhcmFtcywgY2IpID0+IGRpc3BhdGNoKGdldFBhY2thZ2VzKHN0YXRlLCBwYWdlLCBmcm9tX3NlcnZlciwgc2VhcmNoQnlVcmwsIGV4dHJhX3BhcmFtcywgY2IpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikgPT4gZGlzcGF0Y2godG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpKSxcbiAgICAgICAgZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzOiAoc2VhcmNoU3RyaW5nLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzKHNlYXJjaFN0cmluZywgY2FsbGJhY2spKSxcbiAgICAgICAgY2xlYXJFeHRyYVRlc3RzOiAoKSA9PiBkaXNwYXRjaChjbGVhckV4dHJhVGVzdHMoKSksXG4gICAgICAgIG1lcmdlTEFCU3RhdGU6IChzdGF0ZSwgZmV0Y2hOZXdSZXN1bHRzKSA9PiBkaXNwYXRjaChtZXJnZUxBQlN0YXRlKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpKSxcbiAgICAgICAgc2VsZWN0U2VhcmNoVHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdFNlYXJjaFR5cGUodHlwZSkpLFxuICAgICAgICBnZXRGb290ZXJEYXRhOiAodXJsKSA9PiBkaXNwYXRjaChnZXRGb290ZXJEYXRhKHVybCkpLFxuICAgICAgICBnZXRPZmZlckxpc3Q6IChsYXQsIGxvbmcpID0+IGRpc3BhdGNoKGdldE9mZmVyTGlzdChsYXQsIGxvbmcpKSxcbiAgICAgICAgdG9nZ2xlT1BEQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikgPT4gZGlzcGF0Y2godG9nZ2xlT1BEQ3JpdGVyaWEodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpKSxcbiAgICAgICAgdG9nZ2xlY29tcGFyZUNyaXRlcmlhOiAoY3JpdGVyaWEpID0+IGRpc3BhdGNoKHRvZ2dsZWNvbXBhcmVDcml0ZXJpYShjcml0ZXJpYSkpLFxuICAgICAgICByZXNldFBrZ0NvbXBhcmU6KCkgPT4gZGlzcGF0Y2gocmVzZXRQa2dDb21wYXJlKCkpLFxuICAgICAgICBzZWxlY3RMYWJBcHBvaW50bWVudFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RMYWJBcHBvaW50bWVudFR5cGUodHlwZSkpLFxuICAgICAgICBzZWxlY3RMYWJUaW1lU0xvdDogKHNsb3QsIHJlc2NoZWR1bGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYlRpbWVTTG90KHNsb3QsIHJlc2NoZWR1bGUpKSxcbiAgICAgICAgbG9hZE9QREluc3VyYW5jZTogKGNpdHkpID0+IGRpc3BhdGNoKGxvYWRPUERJbnN1cmFuY2UoY2l0eSkpLFxuICAgICAgICBzZXRDb21tb25VdG1UYWdzOiAodHlwZSwgdGFnKSA9PiBkaXNwYXRjaChzZXRDb21tb25VdG1UYWdzKHR5cGUsIHRhZykpLFxuICAgICAgICB1blNldENvbW1vblV0bVRhZ3M6ICh0eXBlLCB0YWcpPT4gZGlzcGF0Y2godW5TZXRDb21tb25VdG1UYWdzKHR5cGUsIHRhZykpLFxuICAgICAgICBjbGVhclZpcFNlbGVjdGVkUGxhbjooKSA9PmRpc3BhdGNoKGNsZWFyVmlwU2VsZWN0ZWRQbGFuKCkpLFxuICAgICAgICBOb25JcGRCb29raW5nTGVhZDooZGF0YSxjYikgPT5kaXNwYXRjaChOb25JcGRCb29raW5nTGVhZChkYXRhLCBjYikpLFxuICAgICAgICBzYXZlTGVhZFBobk51bWJlcjoobnVtYmVyKSA9PmRpc3BhdGNoKHNhdmVMZWFkUGhuTnVtYmVyKG51bWJlcikpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZWFyY2hQYWNrYWdlcyk7XG4iXSwic291cmNlUm9vdCI6IiJ9