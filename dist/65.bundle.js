(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _utils = __webpack_require__(/*! ../../../../helpers/utils.js */ "./dev/js/helpers/utils.js");

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _constants = __webpack_require__(/*! constants */ "./node_modules/constants-browserify/constants.json");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

var _commonVipGoldBadge = __webpack_require__(/*! ../../../commons/commonVipGoldBadge.js */ "./dev/js/components/commons/commonVipGoldBadge.js");

var _commonVipGoldBadge2 = _interopRequireDefault(_commonVipGoldBadge);

var _commonVipGoldNonLoginBadge = __webpack_require__(/*! ../../../commons/commonVipGoldNonLoginBadge.js */ "./dev/js/components/commons/commonVipGoldNonLoginBadge.js");

var _commonVipGoldNonLoginBadge2 = _interopRequireDefault(_commonVipGoldNonLoginBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabProfileCard = function (_React$Component) {
    _inherits(LabProfileCard, _React$Component);

    function LabProfileCard(props) {
        _classCallCheck(this, LabProfileCard);

        var _this = _possibleConstructorReturn(this, (LabProfileCard.__proto__ || Object.getPrototypeOf(LabProfileCard)).call(this, props));

        _this.state = {
            checked: false
        };
        return _this;
    }

    _createClass(LabProfileCard, [{
        key: 'openLab',
        value: function openLab(id, url, test_id, test_name, e) {
            this.props.clearExtraTests();
            var testIds = test_id;
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
            var new_test = {};
            new_test.extra_test = true;
            new_test.lab_id = id;
            new_test.type = 'test';
            new_test.name = test_name;
            new_test.id = test_id;
            this.props.toggleDiagnosisCriteria('test', new_test, true);
            var data = {
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
                    this.props.history.push('/' + url);
                } else {
                    this.props.history.push('/lab/' + id);
                }
            }
        }
    }, {
        key: 'bookNowClicked',
        value: function bookNowClicked(id, url, test_id, test_name, e) {
            var slot = { time: {} };
            this.props.clearExtraTests();
            this.props.selectLabTimeSLot(slot, false);
            var selectedType = {
                r_pickup: 'home',
                p_pickup: 'home'
            };
            this.props.selectLabAppointmentType(selectedType);

            var new_test = {};
            new_test.extra_test = true;
            new_test.lab_id = id;
            new_test.type = 'test';
            new_test.name = test_name;
            new_test.id = test_id;
            this.props.toggleDiagnosisCriteria('test', new_test, true);
            var data = {
                'Category': 'ConsumerApp', 'Action': 'RankOfLabClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'rank-lab-clicked', 'Rank': this.props.rank + 1
            };
            _gtm2.default.sendEvent({ data: data });

            data = {
                'Category': 'ConsumerApp', 'Action': 'LabSelectedByUser', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-selected-by-user', 'LabId': id
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.clearVipSelectedPlan();
            this.props.history.push('/lab/' + id + '/book');
        }
    }, {
        key: 'testInfo',
        value: function testInfo(test_id, lab_id, test_url, isCategory, event) {
            var selected_test_ids = [];
            Object.entries(this.props.currentSearchedCriterias).map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                selected_test_ids.push(value.id);
            });
            var url_string = window.location.href;
            var url = new URL(url_string);
            var search_id = url.searchParams.get("search_id");
            var lat = 28.644800;
            var long = 77.216721;
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
            var data = {
                'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'lab-test-page'
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'toggleCompare',
        value: function toggleCompare(id, lab_id, lab_thumbnail, name) {
            var selectedPkgCompareIds = [];
            if (this.props.compare_packages) {
                this.props.compare_packages.map(function (packages, i) {
                    selectedPkgCompareIds.push(packages.id);
                });
            }
            if (selectedPkgCompareIds.indexOf(id) == -1 && selectedPkgCompareIds.length >= 5) {
                _nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Max 5 packages can be compared" });
            } else {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'AddedToCompare', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'added-to-compare', 'LabId': lab_id, 'testId': id
                };
                _gtm2.default.sendEvent({ data: data });
                this.props.toggleComparePackages(id, lab_id, lab_thumbnail, name);
            }
        }
    }, {
        key: 'goldClicked',
        value: function goldClicked() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'VipGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-package-gold-clicked'
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/vip-gold-details?is_gold=true&source=packagegoldlisting&lead_source=Docprime');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$details = this.props.details,
                discounted_price = _props$details.discounted_price,
                price = _props$details.price,
                lab = _props$details.lab,
                distance = _props$details.distance,
                pickup_available = _props$details.pickup_available,
                lab_timing = _props$details.lab_timing,
                lab_timing_data = _props$details.lab_timing_data,
                mrp = _props$details.mrp,
                next_lab_timing = _props$details.next_lab_timing,
                next_lab_timing_data = _props$details.next_lab_timing_data,
                distance_related_charges = _props$details.distance_related_charges,
                pickup_charges = _props$details.pickup_charges,
                name = _props$details.name,
                id = _props$details.id,
                number_of_tests = _props$details.number_of_tests,
                show_details = _props$details.show_details,
                categories = _props$details.categories,
                category_details = _props$details.category_details,
                address = _props$details.address,
                included_in_user_plan = _props$details.included_in_user_plan,
                insurance = _props$details.insurance,
                vip = _props$details.vip;

            distance = Math.ceil(distance / 1000);
            var openingTime = '';
            if (this.props.details.lab_timing) {
                openingTime = this.props.details.lab_timing.split('-')[0];
            }

            var pickup_text = "";
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

            var hide_price = false;
            // if (this.props.selectedCriterias && this.props.selectedCriterias.length) {
            //     this.props.selectedCriterias.map((x) => {
            //         if (x.hide_price) {
            //             hide_price = true
            //         }
            //     })
            // }
            var offPercent = '';
            if (mrp && discounted_price && discounted_price < mrp) {
                offPercent = parseInt((mrp - discounted_price) / mrp * 100);
            }

            if (included_in_user_plan) {
                hide_price = true;
            }
            var selectedPkgCompareIds = [];
            if (this.props.compare_packages) {
                this.props.compare_packages.map(function (packages, i) {
                    selectedPkgCompareIds.push(packages.id, packages.lab_id);
                });
            }
            var is_insurance_applicable = false;
            if (insurance && insurance.is_insurance_covered && insurance.is_user_insured) {
                is_insurance_applicable = true;
            }
            // let is_vip_applicable = vip.is_vip_member && vip.covered_under_vip
            // let vip_amount = vip.vip_amount

            var is_vip_applicable = false;
            var vip_amount = void 0;
            var is_enable_for_vip = false;
            var is_vip_gold = false;

            if (vip && Object.keys(vip).length > 0) {
                is_vip_applicable = vip.is_vip_member && vip.covered_under_vip;
                vip_amount = vip.vip_amount;
                is_vip_gold = vip.is_gold_member;
            }

            var is_labopd_enable_for_vip = vip.is_enable_for_vip;
            var is_labopd_enable_for_gold = vip.is_gold;
            var is_vip_member = vip.is_vip_member;
            var is_gold_member = vip.is_gold_member;
            var covered_under_vip = vip.covered_under_vip;

            var show_common_prices = !is_labopd_enable_for_vip || (is_gold_member || is_vip_member) && !covered_under_vip;

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
                                    { href: '/' + (this.props.details.url || ''), onClick: this.testInfo.bind(this, id, this.props.details.lab.id, this.props.details.url ? this.props.details.url : '', false) },
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
                                    number_of_tests ? number_of_tests + ' Tests Included' : ''
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
                                    { href: '/' + this.props.details.lab.url, onClick: function onClick(e) {
                                            return e.preventDefault();
                                        } },
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
                            category_details.map(function (category_detail, k) {
                                return _react2.default.createElement(
                                    'li',
                                    { className: 'pkgIncludeList', key: k, id: k, style: { cursor: 'pointer' }, onClick: _this2.testInfo.bind(_this2, id, _this2.props.details.lab.id, _this2.props.details.url ? _this2.props.details.url : '', true) },
                                    category_detail.icon ? _react2.default.createElement('img', { style: { width: '20px', marginRight: '5px' }, src: category_detail.icon }) : '',
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'fw-500' },
                                        category_detail.name,
                                        ' ',
                                        category_detail.parameter_count > 1 ? '(' + category_detail.parameter_count + ')' : '',
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
    }]);

    return LabProfileCard;
}(_react2.default.Component);

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var SearchPackagesView = function (_React$Component) {
    _inherits(SearchPackagesView, _React$Component);

    function SearchPackagesView(props) {
        _classCallCheck(this, SearchPackagesView);

        var _this = _possibleConstructorReturn(this, (SearchPackagesView.__proto__ || Object.getPrototypeOf(SearchPackagesView)).call(this, props));

        var seoData = null;
        var footerData = null;
        if (_this.props.initialServerData) {
            seoData = _this.props.initialServerData.seoData;
            footerData = _this.props.initialServerData.footerData;
        }
        var parsed = queryString.parse(_this.props.location.search);
        _this.state = {
            seoData: seoData, footerData: footerData,
            showError: false,
            showChatWithus: false,
            isScroll: true,
            isCompare: false,
            quickFilter: {},
            showNonIpdPopup: parsed.show_popup,
            to_be_force: 1,
            is_lead_enabled: true
        };
        return _this;
    }

    _createClass(SearchPackagesView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (true) {
                this.getLabList(this.props);
            }
            var parsed = queryString.parse(this.props.location.search);
            if (this.state.seoFriendly) {
                this.props.getFooterData(this.props.match.url.split('/')[1]).then(function (footerData) {
                    if (footerData) {
                        _this2.setState({ footerData: footerData });
                    }
                });
            }

            if (window) {
                window.scrollTo(0, 0);
            }

            try {
                // save utm params if exists
                if (parsed.utm_source && parsed.utm_source == 'OfflineAffiliate') {
                    var sessionId = Math.floor(Math.random() * 103) * 21 + 1050;
                    if (sessionStorage) {
                        sessionStorage.setItem('sessionIdVal', sessionId);
                    }
                    var spo_tags = {
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
            var currentTime = new Date().getTime();
            if (sessionStorage && sessionStorage.getItem('sessionIdVal') && this.props.common_utm_tags && this.props.common_utm_tags.length && this.props.common_utm_tags.filter(function (x) {
                return x.type == 'spo';
            }).length) {

                var _spo_tags = this.props.common_utm_tags.filter(function (x) {
                    return x.type == 'spo';
                })[0];
                var sessionVal = parseInt(sessionStorage.getItem('sessionIdVal'));
                if (_spo_tags.time && sessionVal == parseInt(_spo_tags.currentSessionId)) {
                    var time_offset = (currentTime - _spo_tags.time) / 60000;
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
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.fetchNewResults && props.fetchNewResults != this.props.fetchNewResults) {
                this.getLabList(props);
                // if (window) {
                //     window.scrollTo(0, 0)
                // }
            } else {
                if (props.selectedLocation != this.props.selectedLocation) {
                    var new_url = this.buildURI(props);
                    this.props.history.replace(new_url);
                }
            }
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
        key: 'getLabList',
        value: function getLabList() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var _this3 = this;

            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            var parsed = queryString.parse(this.props.location.search);
            if (page === null) {
                page = this.props.page;
            }
            if (!state) {
                state = this.props;
            } else if (state.page) {
                page = state.page;
            }
            var extra_params = {};

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
            this.props.getPackages(state, page, false, null, extra_params, function () {
                //get searched packages result
                // this.setState({ seoData: args[1] })
                if (cb) {
                    cb.apply(undefined, arguments);
                } else {
                    var new_url = _this3.buildURI(state);
                    _this3.props.history.replace(new_url);
                }
            }).catch(function (e) {
                _this3.setState({ showError: true });
            });
        }
    }, {
        key: 'applyFilters',
        value: function applyFilters(filterState) {
            // apply filters
            // this.props.mergeLABState({ filterCriteria: filterState })
            this.resetQuickFilters();
            this.props.mergeLABState({ filterCriteriaPackages: filterState });
            if (window) {
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: 'resetQuickFilters',
        value: function resetQuickFilters() {
            this.setState({ quickFilter: {} });
        }
    }, {
        key: 'applyCategories',
        value: function applyCategories(categoryState, filterstate) {
            // apply category filter
            var newCategoryState = {};
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
    }, {
        key: 'comparePackage',
        value: function comparePackage() {
            var _this4 = this;

            // to compare differnt packages 
            var data = {
                'Category': 'ConsumerApp', 'Action': 'CompareButton', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'compare-button-click'
            };
            _gtm2.default.sendEvent({ data: data });
            if (this.props.packagesList.count == 1) {
                if (this.props.packagesList.result) {
                    var packages = {};
                    var selectedPkgCompareIds = [];
                    packages.id = this.props.packagesList.result[0].id;
                    packages.lab_id = this.props.packagesList.result[0].lab.id;
                    packages.img = this.props.packagesList.result[0].lab.lab_thumbnail;
                    packages.name = this.props.packagesList.result[0].name;
                    this.props.togglecompareCriteria(packages);
                    if (this.props.compare_packages && this.props.compare_packages.length > 0) {
                        this.props.compare_packages.map(function (packages, i) {
                            if (packages.id != _this4.props.packagesList.result[0].id && packages.lab_id != _this4.props.packagesList.result[0].lab.id) {
                                selectedPkgCompareIds.push(packages.id + '-' + packages.lab_id);
                            }
                        });
                    }
                    selectedPkgCompareIds.push(this.props.packagesList.result[0].id + '-' + this.props.packagesList.result[0].lab.id);
                    this.props.history.push('/package/compare?package_ids=' + selectedPkgCompareIds);
                }
            } else {
                this.setState({ isCompare: !this.state.isCompare }, function () {
                    if (_this4.props.compare_packages && _this4.props.compare_packages.length > 0) {
                        _this4.props.resetPkgCompare();
                    }
                });
            }
        }
    }, {
        key: 'toggleComparePackages',
        value: function toggleComparePackages(packageId, labId, pckImg, pckName) {
            // toggle packages for comparision
            var packages = {};
            packages.id = packageId;
            packages.lab_id = labId;
            packages.img = pckImg;
            packages.name = pckName;
            this.props.togglecompareCriteria(packages);
        }
    }, {
        key: 'buildURI',
        value: function buildURI(state) {
            // build url with differnt params or differnt filters
            var selectedLocation = state.selectedLocation,
                currentSearchedCriterias = state.currentSearchedCriterias,
                filterCriteria = state.filterCriteria,
                locationType = state.locationType,
                filterCriteriaPackages = state.filterCriteriaPackages,
                page = state.page;
            // let testIds = selectedCriterias.filter(x => x.type == 'test').map(x => x.id)

            var lat = 28.644800;
            var long = 77.216721;
            var place_id = "";

            if (selectedLocation) {
                place_id = selectedLocation.place_id || "";
                lat = selectedLocation.geometry.location.lat;
                long = selectedLocation.geometry.location.lng;
                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();

                lat = parseFloat(parseFloat(lat).toFixed(6));
                long = parseFloat(parseFloat(long).toFixed(6));
            }

            var cat_ids = filterCriteriaPackages.catIds || "";

            /*let min_distance = filterCriteriaPackages.distanceRange[0]
            let max_distance = filterCriteriaPackages.distanceRange[1]
            let min_price = filterCriteriaPackages.priceRange[0]
            let max_price = filterCriteriaPackages.priceRange[1]
            */
            var sort_on = filterCriteriaPackages.sort_on || "";
            var sort_order = filterCriteriaPackages.sort_order || "";
            var avg_ratings = filterCriteriaPackages.avg_ratings || "";
            var home_visit = filterCriteriaPackages.home_visit || false;
            var lab_visit = filterCriteriaPackages.lab_visit || false;
            var lab_name = filterCriteriaPackages.lab_name || "";
            var network_id = filterCriteriaPackages.network_id || "";
            var max_age = filterCriteriaPackages.max_age || "";
            var min_age = filterCriteriaPackages.min_age || "";
            var gender = filterCriteriaPackages.gender || "";
            var package_type = filterCriteriaPackages.packageType || "";
            var test_ids = filterCriteriaPackages.test_ids || "";
            var package_ids = filterCriteriaPackages.package_ids || "";
            // let package_category_ids = filterCriteriaPackages.package_category_ids || ""

            var url = void 0;
            var parsed = queryString.parse(this.props.location.search);
            var package_category_ids = parsed.package_category_ids;
            if (this.props.forTaxSaver) {
                url = window.location.pathname + '?lat=' + lat + '&long=' + long;
            } else {
                url = window.location.pathname + '?lat=' + lat + '&long=' + long + '&sort_on=' + sort_on + '&sort_order=' + sort_order + '&avg_ratings=' + avg_ratings + '&home_visit=' + home_visit + '&lab_visit=' + lab_visit + '&lab_name=' + lab_name + '&place_id=' + place_id + '&locationType=' + (locationType || "") + '&network_id=' + network_id + '&category_ids=' + cat_ids + '&min_age=' + min_age + '&max_age=' + max_age + '&gender=' + gender + '&package_type=' + package_type + '&test_ids=' + test_ids + '&package_ids=' + package_ids;
            }

            if (page > 1) {
                url += '&page=' + page;
            }

            if (parsed.package_category_ids) {
                url += '&package_category_ids=' + package_category_ids;
            }

            if (parsed.scrollbyid) {
                var scrollby_test_id = parseInt(parsed.scrollbyid);
                var scrollby_lab_id = parseInt(parsed.scrollbylabid);
                // url += `&scrollbyid=${scrollby_test_id || ""}&scrollbylabid=${scrollby_lab_id || ""}`
                url += '&scrollbyid=' + (scrollby_test_id || "");
            }

            if (parsed.isComparable) {
                url += '&isComparable=true';
            }

            if (parsed.utm_term) {
                url += '&utm_term=' + (parsed.utm_term || "");
            }

            if (parsed.utm_medium) {
                url += '&utm_medium=' + (parsed.utm_medium || "");
            }

            if (parsed.utm_campaign) {
                url += '&utm_campaign=' + (parsed.utm_campaign || "");
            }

            if (parsed.utm_source) {
                url += '&utm_source=' + (parsed.utm_source || "");
            }

            if (this.state.showNonIpdPopup) {
                url += '' + ('&show_popup=' + this.state.showNonIpdPopup);
            }

            return url;
        }
    }, {
        key: 'getMetaTagsData',
        value: function getMetaTagsData(seoData) {
            var title = "Lab Search";
            if (this.state.seoFriendly) {
                title = "";
            }
            var description = "";
            if (seoData) {
                title = seoData.title || "";
                description = seoData.description || "";
            }
            return { title: title, description: description };
        }
    }, {
        key: 'applyQuickFilter',
        value: function applyQuickFilter(filter) {
            this.setState({ quickFilter: filter });
        }
    }, {
        key: 'nonIpdLeads',
        value: function nonIpdLeads(phone_number) {
            var _this5 = this;

            // create of non ipd packages leads
            var parsed = queryString.parse(this.props.location.search);
            var package_name = null;
            if (this.props.packagesList && this.props.packagesList.result && this.props.packagesList.result.length > 1) {
                package_name = this.props.packagesList.result[0].name;
            } else {
                package_name = 'Health Packages';
            }
            var data = { phone_number: phone_number, lead_source: 'Labads', source: parsed, lead_type: 'LABADS', test_name: package_name, exitpoint_url: 'http://docprime.com' + this.props.location.pathname };
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
            var gtm_data = {
                'Category': 'ConsumerApp', 'Action': 'NonIpdPackageListingSubmitClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'non-ipd-package-listing-submit-click'
            };
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
                    'Category': 'ConsumerApp', 'Action': 'NonIpdPackageListingCrossClick', 'CustomerID': _gtm2.default.getUserId() || '', 'event': 'non-ipd-package-listing-cross-click'
                };
                _gtm2.default.sendEvent({ data: data });
                this.setState({ to_be_force: 0 });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            var parsed = queryString.parse(this.props.location.search);
            if (this.state.isScroll) {
                var scrollby_test_id = parseInt(parsed.scrollbyid);
                var scrollby_lab_id = parseInt(parsed.scrollbylabid);
                // let url_id= `scrollById_${scrollby_test_id}_${scrollby_lab_id}`
                var url_id = 'scrollById_' + scrollby_test_id;
                if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == "object" && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) == "object" && document.getElementById(url_id)) {
                    window.scrollTo(0, document.getElementById(url_id).offsetTop + 250);
                    self.setState({ isScroll: false });
                }
            }
            var isCompared = false;

            if (parsed.isComparable) {
                isCompared = true;
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        canonicalUrl: _config2.default.API_BASE_URL + '/full-body-checkup-health-packages',
                        title: '' + (this.props.packagesList.title || ''),
                        description: '' + (this.props.packagesList.description || '')
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
    }]);

    return SearchPackagesView;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _packageProfileCard = __webpack_require__(/*! ../../commons/labProfileCard/packageProfileCard.js */ "./dev/js/components/diagnosis/commons/labProfileCard/packageProfileCard.js");

var _packageProfileCard2 = _interopRequireDefault(_packageProfileCard);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var packagesList = function (_React$Component) {
    _inherits(packagesList, _React$Component);

    function packagesList(props) {
        _classCallCheck(this, packagesList);

        var _this = _possibleConstructorReturn(this, (packagesList.__proto__ || Object.getPrototypeOf(packagesList)).call(this, props));

        _this.state = {
            hasMore: false,
            loading: false,
            renderBlock: false,
            page: 0,
            readMore: 'search-details-data-less',
            catIds: []
        };
        return _this;
    }

    _createClass(packagesList, [{
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
            setTimeout(function () {
                _this2.setState({ hasMore: true });
            }, 0);

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
            if (props.filterCriteriaPackages) {
                this.setState({ catIds: props.filterCriteriaPackages.catIds || [] });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'LabSearchPagination', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-search-pagination', 'Pages': this.state.page
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

            this.setState({ hasMore: false, loading: true, page: page });

            this.props.getLabList(null, page + 1, function (hasMore) {
                //get searched packages result
                _this3.setState({ loading: false });
                setTimeout(function () {
                    _this3.setState({ hasMore: hasMore });
                }, 1000);
            });
        }
    }, {
        key: 'testInfo',
        value: function testInfo() {
            // redirect to included test details page
            var url_string = window.location.href;
            var url = new URL(url_string);
            var test_ids = url.searchParams.get("test_ids");
            this.props.history.push('/search/testinfo?test_ids=' + test_ids + '&from=searchresults');
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
        key: 'showTc',
        value: function showTc() {
            this.props.history.push('/tax-saver-health-packages-tc');
        }
    }, {
        key: 'applyQuickFilters',
        value: function applyQuickFilters(category) {
            var viewMore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            // apply filters
            var filters = {
                catId: viewMore ? [] : [category],
                viewMore: viewMore
            };
            var gtmData = {
                'Category': 'PackageQuickFilterClicked', 'Action': 'PackageQuickFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'package-quick-filter-clicked', 'url': window.location.pathname, 'type': category
            };
            _gtm2.default.sendEvent({ data: gtmData });
            this.props.applyQuickFilter(filters);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                LABS = _props.LABS,
                labList = _props.labList;


            var start_page = 0;
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
                        { onClick: function onClick() {
                                return _this4.props.history.push('/health-package-advisor');
                            } },
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
                            { className: 'rd-more', onClick: function onClick() {
                                    return _this4.setState({ readMore: '' });
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
                                    useWindow: true
                                },
                                _react2.default.createElement(
                                    'ul',
                                    null,
                                    this.props.packagesList && this.props.packagesList.result ? this.props.packagesList.result.map(function (packages, i) {

                                        return _react2.default.createElement(
                                            _react2.default.Fragment,
                                            { key: i },
                                            i == 3 && !_this4.state.catIds.length && _this4.props.packagesList && _this4.props.packagesList.categories && _this4.props.packagesList.categories.length ? _react2.default.createElement(
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
                                                        { className: 'fw-500 sort-more-filter', onClick: _this4.applyQuickFilters.bind(_this4, '', true) },
                                                        'More filters'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'srt-sb-btn-cont' },
                                                    _this4.props.packagesList.categories.map(function (category, j) {
                                                        return _react2.default.createElement(
                                                            'button',
                                                            { key: j, className: '' + (_this4.state.catIds && _this4.state.catIds.indexOf(category.id) > -1 ? 'srt-act' : ''), id: category.id, onClick: _this4.applyQuickFilters.bind(_this4, category.id, false) },
                                                            ' ',
                                                            category.name
                                                        );
                                                    })
                                                )
                                            ) : '',
                                            i == 5 && _this4.props.offerList && _this4.props.offerList.filter(function (x) {
                                                return x.slider_location === 'search_packages_page' || x.slider_location === 'full_body_chechkup_page' || x.slider_location === 'tax_saver_packages_page';
                                            }).length ? _react2.default.createElement(
                                                'div',
                                                { className: 'banner-cont-height home-page-banner-div mb-3 mr-0 banner-md-margn' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'hidderBanner banner-carousel-div d-md-none' },
                                                    _react2.default.createElement('div', { className: 'divHeight m-0', style: { marginBottom: "5px!important" } })
                                                ),
                                                _react2.default.createElement(_bannerCarousel2.default, _extends({}, _this4.props, { sliderLocation: _this4.props.forTaxSaver ? "tax_saver_packages_page" : _this4.props.forOrganicSearch ? 'full_body_chechkup_page' : 'search_packages_page' }))
                                            ) : '',
                                            _react2.default.createElement(
                                                'li',
                                                { id: 'scrollById_' + packages.id },
                                                _react2.default.createElement(_packageProfileCard2.default, _extends({}, _this4.props, { details: packages, key: i, rank: i }))
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
    }]);

    return packagesList;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _initialsPicture = __webpack_require__(/*! ../../../commons/initialsPicture */ "./dev/js/components/commons/initialsPicture/index.js");

var _initialsPicture2 = _interopRequireDefault(_initialsPicture);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _utils = __webpack_require__(/*! ../../../../helpers/utils.js */ "./dev/js/helpers/utils.js");

var _storage = __webpack_require__(/*! ../../../../helpers/storage */ "./dev/js/helpers/storage/index.js");

var _storage2 = _interopRequireDefault(_storage);

var _constants = __webpack_require__(/*! constants */ "./node_modules/constants-browserify/constants.json");

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectedPkgStrip = function (_React$Component) {
    _inherits(SelectedPkgStrip, _React$Component);

    function SelectedPkgStrip(props) {
        _classCallCheck(this, SelectedPkgStrip);

        var _this = _possibleConstructorReturn(this, (SelectedPkgStrip.__proto__ || Object.getPrototypeOf(SelectedPkgStrip)).call(this, props));

        _this.state = {
            checked: false
        };
        return _this;
    }

    _createClass(SelectedPkgStrip, [{
        key: 'comparePackages',
        value: function comparePackages() {
            var selectedPkgCompareIds = [];
            if (this.props.compare_packages) {
                this.props.compare_packages.map(function (packages, i) {
                    selectedPkgCompareIds.push(packages.id + '-' + packages.lab_id);
                });
            }
            var data = {
                'Category': 'ConsumerApp', 'Action': 'Comparison', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'comparison-button', 'selected_test_id': selectedPkgCompareIds
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/package/compare?package_ids=' + selectedPkgCompareIds);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'compare-package-footer' },
                this.props.compare_packages && this.props.compare_packages.length > 0 ? _react2.default.createElement(
                    'div',
                    { className: "compare-packages" + (this.props.compare_packages && this.props.compare_packages.length == 1 ? ' compare-packages-one' : this.props.compare_packages.length == 2 ? ' compare-packages-two' : this.props.compare_packages.length == 3 ? ' compare-packages-three' : this.props.compare_packages.length == 4 ? ' compare-packages-four' : '') },
                    _react2.default.createElement(
                        'ul',
                        null,
                        this.props.compare_packages.map(function (packages, i) {
                            return _react2.default.createElement(
                                'li',
                                { key: i },
                                _react2.default.createElement('img', { src: "/assets" + "/images/packageCompare/red-cut.png", alt: '', className: 'end-div', onClick: _this2.props.toggleComparePackages.bind(_this2, packages.id, packages.lab_id, packages.img, packages.name) }),
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
                            this.props.compare_packages && this.props.compare_packages.length > 0 ? '(' + this.props.compare_packages.length + ')' : ''
                        )
                    )
                ) : ''
            );
        }
    }]);

    return SelectedPkgStrip;
}(_react2.default.Component);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoryPopup = function (_React$Component) {
    _inherits(CategoryPopup, _React$Component);

    function CategoryPopup(props) {
        _classCallCheck(this, CategoryPopup);

        var _this = _possibleConstructorReturn(this, (CategoryPopup.__proto__ || Object.getPrototypeOf(CategoryPopup)).call(this, props));

        _this.state = {
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
        return _this;
    }

    _createClass(CategoryPopup, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var selectedCategoryIds = this.state.selectedCatIds;
            var selectAllcategoryIds = this.state.selectAllcategory;
            this.props.packagesList.categories.map(function (categories, i) {
                if (categories.is_selected) {
                    selectedCategoryIds.push(categories.id);
                }
                selectAllcategoryIds.push(categories.id);
                _this2.setState({ selectedAllCatIdsIntial: selectedCategoryIds, selectedCatIdsLeng: selectedCategoryIds.length, selectAllcategory: selectAllcategoryIds });
            });
            this.props.initialSelectedCategory(selectedCategoryIds);
        }
    }, {
        key: 'applyAllCategory',
        value: function applyAllCategory() {
            var selectedCategoryIds = this.state.selectAllcategory;
            if (this.props.packagesList.categories_count == this.state.selectedCatIdsLeng) {
                selectedCategoryIds = [];
            } else {
                selectedCategoryIds = this.state.selectAllcategory;
            }
            this.setState({ selectedCatIds: selectedCategoryIds, selectedCatIdsLeng: selectedCategoryIds.length });
        }
    }, {
        key: 'toggleTest',
        value: function toggleTest(category) {
            var selectedCategoryIds = this.state.selectedCatIds;
            if (category) {
                if (selectedCategoryIds.indexOf(category) > -1) {
                    selectedCategoryIds = selectedCategoryIds.filter(function (x) {
                        return x != category;
                    });
                } else {
                    selectedCategoryIds.push(category);
                }
            }
            this.setState({ selectedCatIds: selectedCategoryIds, selectedCatIdsLeng: selectedCategoryIds.length });
        }
    }, {
        key: 'applyCategories',
        value: function applyCategories() {
            var categoryState = this.state.selectedCatIds;
            this.props.applyCategories(categoryState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var isSelected = [];
            var unSelected = [];
            var isSelectedCat = [];
            var unSelectedCat = [];
            if (this.props.packagesList.categories && this.props.packagesList.categories.length > 0) {
                this.props.packagesList.categories.map(function (categories, i) {
                    if (categories.is_selected) {
                        isSelected.push(categories);
                    } else {
                        unSelected.push(categories);
                    }
                });
                if (isSelected.length > 0) {
                    {
                        isSelected.map(function (categories, i) {
                            isSelectedCat.push(_react2.default.createElement(
                                'li',
                                { className: 'pr-0', key: i },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'ck-bx', style: { fontWeight: 400, fontSize: 14 } },
                                    categories.name,
                                    _react2.default.createElement('input', { type: 'checkbox', checked: _this3.state.selectedCatIds.indexOf(categories.id) > -1, onChange: _this3.toggleTest.bind(_this3, categories.id) }),
                                    _react2.default.createElement('span', { className: 'checkmark' })
                                )
                            ));
                        });
                    }
                }
                if (unSelected.length > 0) {
                    {
                        unSelected.map(function (categories, i) {
                            unSelectedCat.push(_react2.default.createElement(
                                'li',
                                { className: 'pr-0', key: i },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'ck-bx', style: { fontWeight: 400, fontSize: 14 } },
                                    categories.name,
                                    _react2.default.createElement('input', { type: 'checkbox', checked: _this3.state.selectedCatIds.indexOf(categories.id) > -1, onChange: _this3.toggleTest.bind(_this3, categories.id) }),
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
    }]);

    return CategoryPopup;
}(_react2.default.Component);

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

var _categoryPopup = __webpack_require__(/*! ./categoryPopup.js */ "./dev/js/components/diagnosis/searchPackages/topBar/categoryPopup.js");

var _categoryPopup2 = _interopRequireDefault(_categoryPopup);

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
        return _this;
    }

    _createClass(TopBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var _this2 = this;

            this.setState(_extends({}, props.filterCriteriaPackages, { quickFilter: props.quickFilter || {} }), function () {
                if (_this2.state.quickFilter && (_this2.state.quickFilter.catId && _this2.state.quickFilter.catId.length || _this2.state.quickFilter.viewMore)) {
                    _this2.sortFilterClicked();
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
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
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
    }, {
        key: 'applyFilters',
        value: function applyFilters() {
            var filterState = {
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
            var data = {
                'Category': 'FilterClick', 'Action': 'Clicked on Filter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'lab-filter-clicked', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'rating': this.state.avg_ratings || [], 'home_visit': this.state.home_visit || '', 'lab_visit': this.state.lab_visit || '', sort_on: this.state.sort_on || ''
            };
            _gtm2.default.sendEvent({ data: data });

            var ifAnyFilterApplied = this.isDataFiltered({}, true);
            if (ifAnyFilterApplied) {
                this.props.applyFilters(filterState);
            }

            this.setState({ openFilter: false });
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var e = arguments[1];


            if (reset) {
                var data = {
                    'Category': 'ConsumerApp', 'Action': 'ResetPackageFilter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'reset-package-filter', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'rating': this.state.avg_ratings || [], 'home_visit': this.state.home_visit || '', 'lab_visit': this.state.lab_visit || '', sort_on: this.state.sort_on || ''
                };
                _gtm2.default.sendEvent({ data: data });

                var resetFilters = {
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
                var _data = {
                    'Category': 'ConsumerApp', 'Action': 'ClosePackageFilter', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'close-package-filter', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'rating': this.state.avg_ratings || [], 'home_visit': this.state.home_visit || '', 'lab_visit': this.state.lab_visit || '', sort_on: this.state.sort_on || ''
                };
                _gtm2.default.sendEvent({ data: _data });
                this.setState(_extends({
                    openFilter: false
                }, this.state.previous_filters, {
                    quickFilter: {}
                }));
                this.props.resetQuickFilters();
            }
        }
    }, {
        key: 'sortFilterClicked',
        value: function sortFilterClicked() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'PackageSortFilterClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'package-sort-filter-clicked', 'url': window.location.pathname, 'sort_order': this.state.sort_order || '', 'rating': this.state.avg_ratings || [], 'home_visit': this.state.home_visit || '', 'lab_visit': this.state.lab_visit || '', sort_on: this.state.sort_on || ''
            };
            _gtm2.default.sendEvent({ data: data });

            var currentFilters = {
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
    }, {
        key: 'isDataFiltered',
        value: function isDataFiltered() {
            var filterData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var checkIfAnyFilterAppliled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            if (checkIfAnyFilterAppliled) {

                try {
                    var filterCount = 0;
                    for (var filter in this.state.previous_filters) {

                        if (filter.includes('catIds')) {

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
                    hospital_type: '',
                    catIds: []
                };
            }
            try {
                var _filterCount = 0;
                for (var _filter in filterData) {

                    if (_filter.includes('hospital_type')) {
                        if (this.state['lab_visit'] || this.state['home_visit']) {
                            _filterCount++;
                        }
                    } else if (_filter == 'catIds') {
                        if (this.state[_filter].length) {
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
        key: 'selectCategory',
        value: function selectCategory(category) {
            var selectedCategoryIds = this.state.catIds;
            if (category) {
                if (selectedCategoryIds.indexOf(category) > -1) {
                    selectedCategoryIds = selectedCategoryIds.filter(function (x) {
                        return x != category;
                    });
                } else {
                    selectedCategoryIds.push(category);
                }
            }
            this.setState({ catIds: selectedCategoryIds });
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
            } else if (type.includes('lab_visit') || type.includes('home_visit')) {

                if (this.state[type]) {
                    this.setState(_defineProperty({}, type, !this.state[type]));
                } else {
                    this.setState({ 'lab_visit': type.includes('lab_visit') ? value : !value, 'home_visit': type.includes('home_visit') ? value : !value });
                }
            } else {
                this.setState(_defineProperty({}, type, this.state[type] == value ? '' : value));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var selectedTests = [];
            if (this.props.currentSearchedCriterias.length) {
                for (var i = 0; i < this.props.currentSearchedCriterias.length; i++) {
                    selectedTests.push(this.props.currentSearchedCriterias[i].id);
                }
            }

            var quickFilterCatId = this.state.quickFilter && this.state.quickFilter.catId && this.state.quickFilter.catId.length ? this.state.quickFilter.catId[0] : '';

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
                                        { className: 'sort-cards-list ' + (this.state.sort_on == 'rating' ? 'chitActive' : ''), onClick: this.toggleAllFilters.bind(this, 'sort_on', 'rating', false) },
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
                                    'Visit Type'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'sortbtncard justyfy-twoBtns' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'sortBtns ' + (this.state.home_visit ? 'srtBtnAct' : ''), onClick: this.toggleAllFilters.bind(this, 'home_visit', !this.state.home_visit, false) },
                                        'Home Visit'
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'sortBtns ' + (this.state.lab_visit ? 'srtBtnAct' : ''), onClick: this.toggleAllFilters.bind(this, 'lab_visit', !this.state.lab_visit, false) },
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
                                        quickFilterCatId ? this.props.packagesList.categories.filter(function (x) {
                                            return x.id == quickFilterCatId;
                                        }).map(function (category, i) {
                                            return _react2.default.createElement(
                                                'li',
                                                { key: category.id, id: category.id, onClick: _this3.selectCategory.bind(_this3, category.id) },
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: 'javascript:void(0);', className: _this3.state.catIds.indexOf(category.id) > -1 ? "selected" : '' },
                                                    category.name
                                                )
                                            );
                                        }) : '',
                                        this.props.packagesList.categories.filter(function (x) {
                                            return x.id != quickFilterCatId;
                                        }).map(function (category, i) {
                                            return _react2.default.createElement(
                                                'li',
                                                { key: category.id, id: category.id, onClick: _this3.selectCategory.bind(_this3, category.id) },
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: 'javascript:void(0);', className: _this3.state.catIds.indexOf(category.id) > -1 ? "selected" : '' },
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
                                                { className: '' + (!this.props.isCompared && (this.props.isCompare || this.props.compare_packages && this.props.compare_packages.length > 0) ? 'comapre-active' : '') },
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
                            { className: 'widget filter-popup', onClick: function onClick(e) {
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
    }]);

    return TopBar;
}(_react2.default.Component);

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

var _categoryPopup = __webpack_require__(/*! ./categoryPopup.js */ "./dev/js/components/diagnosis/searchPackages/topBar/categoryPopup.js");

var _categoryPopup2 = _interopRequireDefault(_categoryPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultCount = function (_React$Component) {
    _inherits(ResultCount, _React$Component);

    function ResultCount(props) {
        _classCallCheck(this, ResultCount);

        var _this = _possibleConstructorReturn(this, (ResultCount.__proto__ || Object.getPrototypeOf(ResultCount)).call(this, props));

        _this.state = {
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
        return _this;
    }

    _createClass(ResultCount, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
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
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
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

    }, {
        key: 'getCriteriaString',
        value: function getCriteriaString(selectedCriterias) {
            if (selectedCriterias && selectedCriterias.length) {
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

    }, {
        key: 'shortenUrl',
        value: function shortenUrl() {
            var _this2 = this;

            if (window) {
                var url = window.location.href + '&force_location=true';
                this.props.urlShortner(url, function (err, data) {
                    if (!err) {
                        _this2.setState({ shortURL: data.tiny_url });
                    }
                });
            }
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

    }, {
        key: 'goToLocation',
        value: function goToLocation() {
            this.setState({
                searchCities: []
            });
            var location_url = '/locationsearch';
            var data = {
                'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push(location_url);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

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

            var criteriaStr = this.getCriteriaString(this.props.currentSearchedCriterias);
            var locationName = "";
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
                                                locationName ? ' in ' + locationName : ''
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'text-right', style: { width: 65, cursor: 'pointer' }, onClick: function onClick() {
                                                return _this3.props.history.push('/locationsearch?lab_card=true&id=' + selectedTests);
                                            } },
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
                                                    onCopy: function onCopy() {
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
                                            ' in ' + locationName
                                        ) : '',
                                        _react2.default.createElement('img', { style: { width: 15, height: 15, marginLeft: 7, cursor: 'pointer' }, src: "/assets" + "/img/customer-icons/edit.svg", onClick: this.goToLocation.bind(this) })
                                    )
                                )
                            )
                        )
                    ),
                    this.state.showLocationPopup ? _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                            return _this3.child = ref;
                        }, resultType: 'list', isTopbar: true, hideLocationPopup: function hideLocationPopup() {
                            return _this3.hideLocationPopup();
                        }, locationName: locationName })) : '',
                    this.state.showLocationPopup && this.state.overlayVisible && !this.props.lab_card ? _react2.default.createElement('div', { className: 'locationPopup-overlay', onClick: function onClick() {
                            return _this3.overlayClick();
                        } }) : '',
                    this.state.showLocationPopup && this.props.lab_card && this.state.showPopupContainer ? _react2.default.createElement('div', { className: 'popupContainer-overlay' }) : ''
                )
            );
        }
    }]);

    return ResultCount;
}(_react2.default.Component);

exports.default = ResultCount;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _urltoState = __webpack_require__(/*! ../../helpers/urltoState */ "./dev/js/helpers/urltoState.js");

var _index2 = __webpack_require__(/*! ../../components/diagnosis/searchPackages/index.js */ "./dev/js/components/diagnosis/searchPackages/index.js");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var SearchPackages = function (_React$Component) {
    _inherits(SearchPackages, _React$Component);

    function SearchPackages(props) {
        _classCallCheck(this, SearchPackages);

        var _this = _possibleConstructorReturn(this, (SearchPackages.__proto__ || Object.getPrototypeOf(SearchPackages)).call(this, props));

        _this.state = {
            forTaxSaver: props.location.pathname.includes("tax-saver-health-packages"),
            forOrganicSearch: props.location.pathname.includes("full-body-checkup-health-packages")
        };
        return _this;
    }

    _createClass(SearchPackages, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (window) {
                window.scrollTo(0, 0);
            }
            // this.props.loadOPDInsurance(this.props.selectedLocation)
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_index3.default, _extends({}, this.props, { forTaxSaver: this.state.forTaxSaver, forOrganicSearch: this.state.forOrganicSearch }));
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

                    (0, _urltoState.PackageSearchStateBuilder)(null, queryParams, true, location_ms).then(function (state) {
                        // build state in case of ssr
                        store.dispatch((0, _index.mergeLABState)(state));

                        var searchUrl = null;
                        if (match.url.includes('-lbcit') || match.url.includes('-lblitcit')) {
                            searchUrl = match.url.toLowerCase();
                        }
                        var page = 1;
                        if (queryParams.page) {
                            page = parseInt(queryParams.page);
                        }
                        return store.dispatch((0, _index.getPackages)(state, page, true, searchUrl, {}, function (loadMore, seoData) {
                            //get searched packages result
                            if (match.url.includes('-lbcit') || match.url.includes('-lblitcit')) {
                                (0, _index.getFooterData)(match.url.split("/")[1])().then(function (footerData) {
                                    footerData = footerData || null;
                                    resolve({ seoData: seoData, footerData: footerData });
                                }).catch(function (e) {
                                    resolve({ seoData: seoData });
                                });
                            } else {
                                resolve({ seoData: seoData });
                            }
                        }));
                    }).catch(function (e) {
                        reject();
                    });
                } catch (e) {
                    console.error(e);
                    reject();
                }
            });
        }
    }]);

    return SearchPackages;
}(_react2.default.Component);

SearchPackages.contextTypes = {
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

    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_LABS,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        selectedCriterias = _state$SEARCH_CRITERI.selectedCriterias,
        filterCriteria = _state$SEARCH_CRITERI.filterCriteria,
        LOADED_SEARCH_CRITERIA_LAB = _state$SEARCH_CRITERI.LOADED_SEARCH_CRITERIA_LAB,
        locationType = _state$SEARCH_CRITERI.locationType,
        fetchNewResults = _state$SEARCH_CRITERI.fetchNewResults,
        corporateCoupon = _state$SEARCH_CRITERI.corporateCoupon,
        currentSearchedCriterias = _state$SEARCH_CRITERI.currentSearchedCriterias,
        filterCriteriaPackages = _state$SEARCH_CRITERI.filterCriteriaPackages,
        page = _state$SEARCH_CRITERI.page,
        compare_packages = _state$SEARCH_CRITERI.compare_packages;
    var common_settings = state.SEARCH_CRITERIA_OPD.common_settings;
    var _state$USER = state.USER,
        offerList = _state$USER.offerList,
        is_login_user_insured = _state$USER.is_login_user_insured,
        insurance_status = _state$USER.insurance_status,
        device_info = _state$USER.device_info,
        common_utm_tags = _state$USER.common_utm_tags;


    var LABS = state.LAB_SEARCH_DATA;
    var _state$LAB_SEARCH = state.LAB_SEARCH,
        labList = _state$LAB_SEARCH.labList,
        LOADED_LABS_SEARCH = _state$LAB_SEARCH.LOADED_LABS_SEARCH,
        count = _state$LAB_SEARCH.count,
        SET_FROM_SERVER = _state$LAB_SEARCH.SET_FROM_SERVER,
        packagesList = _state$LAB_SEARCH.packagesList,
        curr_page = _state$LAB_SEARCH.curr_page;


    return {
        selectedLocation: selectedLocation,
        selectedCriterias: selectedCriterias,
        filterCriteria: filterCriteria,
        LOADED_SEARCH_CRITERIA_LAB: LOADED_SEARCH_CRITERIA_LAB,
        LABS: LABS,
        labList: labList, LOADED_LABS_SEARCH: LOADED_LABS_SEARCH,
        count: count,
        SET_FROM_SERVER: SET_FROM_SERVER,
        initialServerData: initialServerData,
        locationType: locationType,
        fetchNewResults: fetchNewResults,
        corporateCoupon: corporateCoupon,
        packagesList: packagesList,
        currentSearchedCriterias: currentSearchedCriterias,
        filterCriteriaPackages: filterCriteriaPackages,
        offerList: offerList,
        is_login_user_insured: is_login_user_insured,
        page: page,
        curr_page: curr_page,
        compare_packages: compare_packages,
        insurance_status: insurance_status,
        device_info: device_info,
        common_settings: common_settings,
        common_utm_tags: common_utm_tags
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        urlShortner: function urlShortner(url, cb) {
            return dispatch((0, _index.urlShortner)(url, cb));
        },
        getPackages: function getPackages(state, page, from_server, searchByUrl, extra_params, cb) {
            return dispatch((0, _index.getPackages)(state, page, from_server, searchByUrl, extra_params, cb));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd, filter) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd, filter));
        },
        getDiagnosisCriteriaResults: function getDiagnosisCriteriaResults(searchString, callback) {
            return dispatch((0, _index.getDiagnosisCriteriaResults)(searchString, callback));
        },
        clearExtraTests: function clearExtraTests() {
            return dispatch((0, _index.clearExtraTests)());
        },
        mergeLABState: function mergeLABState(state, fetchNewResults) {
            return dispatch((0, _index.mergeLABState)(state, fetchNewResults));
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        },
        getFooterData: function getFooterData(url) {
            return dispatch((0, _index.getFooterData)(url));
        },
        getOfferList: function getOfferList(lat, long) {
            return dispatch((0, _index.getOfferList)(lat, long));
        },
        toggleOPDCriteria: function toggleOPDCriteria(type, criteria, forceAdd, filter) {
            return dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filter));
        },
        togglecompareCriteria: function togglecompareCriteria(criteria) {
            return dispatch((0, _index.togglecompareCriteria)(criteria));
        },
        resetPkgCompare: function resetPkgCompare() {
            return dispatch((0, _index.resetPkgCompare)());
        },
        selectLabAppointmentType: function selectLabAppointmentType(type) {
            return dispatch((0, _index.selectLabAppointmentType)(type));
        },
        selectLabTimeSLot: function selectLabTimeSLot(slot, reschedule) {
            return dispatch((0, _index.selectLabTimeSLot)(slot, reschedule));
        },
        loadOPDInsurance: function loadOPDInsurance(city) {
            return dispatch((0, _index.loadOPDInsurance)(city));
        },
        setCommonUtmTags: function setCommonUtmTags(type, tag) {
            return dispatch((0, _index.setCommonUtmTags)(type, tag));
        },
        unSetCommonUtmTags: function unSetCommonUtmTags(type, tag) {
            return dispatch((0, _index.unSetCommonUtmTags)(type, tag));
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SearchPackages);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvY29tbW9ucy9sYWJQcm9maWxlQ2FyZC9wYWNrYWdlUHJvZmlsZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL1NlYXJjaFBhY2thZ2VzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUGFja2FnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3BhY2thZ2VzTGlzdC9QYWNrYWdlc0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3BhY2thZ2VzTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvc2VhcmNoUGFja2FnZXMvcGFja2FnZXNMaXN0L3NlbGVjdGVkUGtnU3RyaXAuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL3RvcEJhci9jYXRlZ29yeVBvcHVwLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9zZWFyY2hQYWNrYWdlcy90b3BCYXIvbmV3VG9wQmFyLmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9zZWFyY2hQYWNrYWdlcy90b3BCYXIvcmVzdWx0X2NvdW50LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2RpYWdub3Npcy9TZWFyY2hQYWNrYWdlcy5qcyJdLCJuYW1lcyI6WyJMYWJQcm9maWxlQ2FyZCIsInByb3BzIiwic3RhdGUiLCJjaGVja2VkIiwiaWQiLCJ1cmwiLCJ0ZXN0X2lkIiwidGVzdF9uYW1lIiwiZSIsImNsZWFyRXh0cmFUZXN0cyIsInRlc3RJZHMiLCJuZXdfdGVzdCIsImV4dHJhX3Rlc3QiLCJsYWJfaWQiLCJ0eXBlIiwibmFtZSIsInRvZ2dsZURpYWdub3Npc0NyaXRlcmlhIiwiZGF0YSIsIkdUTSIsImdldFVzZXJJZCIsInJhbmsiLCJzZW5kRXZlbnQiLCJjdHJsS2V5IiwibWV0YUtleSIsInByZXZlbnREZWZhdWx0IiwiaGlzdG9yeSIsInB1c2giLCJzbG90IiwidGltZSIsInNlbGVjdExhYlRpbWVTTG90Iiwic2VsZWN0ZWRUeXBlIiwicl9waWNrdXAiLCJwX3BpY2t1cCIsInNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSIsImNsZWFyVmlwU2VsZWN0ZWRQbGFuIiwidGVzdF91cmwiLCJpc0NhdGVnb3J5IiwiZXZlbnQiLCJzZWxlY3RlZF90ZXN0X2lkcyIsIk9iamVjdCIsImVudHJpZXMiLCJjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsInVybF9zdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJVUkwiLCJzZWFyY2hfaWQiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJsYXQiLCJsb25nIiwic2VsZWN0ZWRMb2NhdGlvbiIsImdlb21ldHJ5IiwibG5nIiwic3RvcFByb3BhZ2F0aW9uIiwibGFiX3RodW1ibmFpbCIsInNlbGVjdGVkUGtnQ29tcGFyZUlkcyIsImNvbXBhcmVfcGFja2FnZXMiLCJwYWNrYWdlcyIsImkiLCJpbmRleE9mIiwibGVuZ3RoIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsInRvZ2dsZUNvbXBhcmVQYWNrYWdlcyIsImRldGFpbHMiLCJkaXNjb3VudGVkX3ByaWNlIiwicHJpY2UiLCJsYWIiLCJkaXN0YW5jZSIsInBpY2t1cF9hdmFpbGFibGUiLCJsYWJfdGltaW5nIiwibGFiX3RpbWluZ19kYXRhIiwibXJwIiwibmV4dF9sYWJfdGltaW5nIiwibmV4dF9sYWJfdGltaW5nX2RhdGEiLCJkaXN0YW5jZV9yZWxhdGVkX2NoYXJnZXMiLCJwaWNrdXBfY2hhcmdlcyIsIm51bWJlcl9vZl90ZXN0cyIsInNob3dfZGV0YWlscyIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeV9kZXRhaWxzIiwiYWRkcmVzcyIsImluY2x1ZGVkX2luX3VzZXJfcGxhbiIsImluc3VyYW5jZSIsInZpcCIsIk1hdGgiLCJjZWlsIiwib3BlbmluZ1RpbWUiLCJzcGxpdCIsInBpY2t1cF90ZXh0IiwicGFyc2VJbnQiLCJoaWRlX3ByaWNlIiwib2ZmUGVyY2VudCIsImlzX2luc3VyYW5jZV9hcHBsaWNhYmxlIiwiaXNfaW5zdXJhbmNlX2NvdmVyZWQiLCJpc191c2VyX2luc3VyZWQiLCJpc192aXBfYXBwbGljYWJsZSIsInZpcF9hbW91bnQiLCJpc19lbmFibGVfZm9yX3ZpcCIsImlzX3ZpcF9nb2xkIiwia2V5cyIsImlzX3ZpcF9tZW1iZXIiLCJjb3ZlcmVkX3VuZGVyX3ZpcCIsImlzX2dvbGRfbWVtYmVyIiwiaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwIiwiaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZCIsImlzX2dvbGQiLCJzaG93X2NvbW1vbl9wcmljZXMiLCJpc0NvbXBhcmVkIiwiaXNDb21wYXJlIiwicGFkZGluZyIsInRvZ2dsZUNvbXBhcmUiLCJiaW5kIiwicGFkZGluZ0JvdHRvbSIsImlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkIiwiaG9tZV9waWNrdXBfY2hhcmdlcyIsIkFTU0VUU19CQVNFX1VSTCIsImlzX3RoeXJvY2FyZSIsInRlc3RJbmZvIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImN1cnNvciIsIndpZHRoIiwiZm9udFNpemUiLCJnb2xkQ2xpY2tlZCIsIm1hcmdpbkJvdHRvbSIsImJvb2tOb3dDbGlja2VkIiwiY2F0ZWdvcnlfZGV0YWlsIiwiayIsImljb24iLCJtYXJnaW5SaWdodCIsInBhcmFtZXRlcl9jb3VudCIsImxvY2FsaXR5IiwiY2l0eSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiU2VhcmNoUGFja2FnZXNWaWV3Iiwic2VvRGF0YSIsImZvb3RlckRhdGEiLCJpbml0aWFsU2VydmVyRGF0YSIsInBhcnNlZCIsInBhcnNlIiwic2VhcmNoIiwic2hvd0Vycm9yIiwic2hvd0NoYXRXaXRodXMiLCJpc1Njcm9sbCIsInF1aWNrRmlsdGVyIiwic2hvd05vbklwZFBvcHVwIiwic2hvd19wb3B1cCIsInRvX2JlX2ZvcmNlIiwiaXNfbGVhZF9lbmFibGVkIiwiZ2V0TGFiTGlzdCIsInNlb0ZyaWVuZGx5IiwiZ2V0Rm9vdGVyRGF0YSIsIm1hdGNoIiwidGhlbiIsInNldFN0YXRlIiwic2Nyb2xsVG8iLCJ1dG1fc291cmNlIiwic2Vzc2lvbklkIiwiZmxvb3IiLCJyYW5kb20iLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJzcG9fdGFncyIsInV0bV90YWdzIiwidXRtX3Rlcm0iLCJ1dG1fbWVkaXVtIiwidXRtX2NhbXBhaWduIiwiRGF0ZSIsImdldFRpbWUiLCJjdXJyZW50U2Vzc2lvbklkIiwic2V0Q29tbW9uVXRtVGFncyIsImN1cnJlbnRUaW1lIiwiZ2V0SXRlbSIsImNvbW1vbl91dG1fdGFncyIsImZpbHRlciIsIngiLCJzZXNzaW9uVmFsIiwidGltZV9vZmZzZXQiLCJ1blNldENvbW1vblV0bVRhZ3MiLCJmZXRjaE5ld1Jlc3VsdHMiLCJuZXdfdXJsIiwiYnVpbGRVUkkiLCJyZXBsYWNlIiwidGFnIiwicGFyYW1TdHJpbmciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJwYWdlIiwiY2IiLCJleHRyYV9wYXJhbXMiLCJnZXRQYWNrYWdlcyIsImNhdGNoIiwiZmlsdGVyU3RhdGUiLCJyZXNldFF1aWNrRmlsdGVycyIsIm1lcmdlTEFCU3RhdGUiLCJmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzIiwiY2F0ZWdvcnlTdGF0ZSIsImZpbHRlcnN0YXRlIiwibmV3Q2F0ZWdvcnlTdGF0ZSIsInNvcnRfb24iLCJzb3J0X29yZGVyIiwiYXZnX3JhdGluZ3MiLCJob21lX3Zpc2l0IiwibGFiX3Zpc2l0IiwibWF4X2FnZSIsIm1pbl9hZ2UiLCJnZW5kZXIiLCJwYWNrYWdlVHlwZSIsInRlc3RfaWRzIiwicGFja2FnZV9pZHMiLCJwYWNrYWdlc0xpc3QiLCJjb3VudCIsInJlc3VsdCIsImltZyIsInRvZ2dsZWNvbXBhcmVDcml0ZXJpYSIsInJlc2V0UGtnQ29tcGFyZSIsInBhY2thZ2VJZCIsImxhYklkIiwicGNrSW1nIiwicGNrTmFtZSIsImZpbHRlckNyaXRlcmlhIiwibG9jYXRpb25UeXBlIiwicGxhY2VfaWQiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImNhdF9pZHMiLCJjYXRJZHMiLCJsYWJfbmFtZSIsIm5ldHdvcmtfaWQiLCJwYWNrYWdlX3R5cGUiLCJwYWNrYWdlX2NhdGVnb3J5X2lkcyIsImZvclRheFNhdmVyIiwicGF0aG5hbWUiLCJzY3JvbGxieWlkIiwic2Nyb2xsYnlfdGVzdF9pZCIsInNjcm9sbGJ5X2xhYl9pZCIsInNjcm9sbGJ5bGFiaWQiLCJpc0NvbXBhcmFibGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGhvbmVfbnVtYmVyIiwicGFja2FnZV9uYW1lIiwibGVhZF9zb3VyY2UiLCJzb3VyY2UiLCJsZWFkX3R5cGUiLCJleGl0cG9pbnRfdXJsIiwidmlzaXRvcl9pbmZvIiwiZ2V0VmlzaXRvckluZm8iLCJ2aXNpdF9pZCIsInZpc2l0b3JfaWQiLCJndG1fZGF0YSIsInNhdmVMZWFkUGhuTnVtYmVyIiwiU1RPUkFHRSIsImlzQWdlbnQiLCJOb25JcGRCb29raW5nTGVhZCIsInNldFRpbWVvdXQiLCJmcm9tIiwic2VsZiIsInVybF9pZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRUb3AiLCJjYW5vbmljYWxVcmwiLCJDT05GSUciLCJBUElfQkFTRV9VUkwiLCJMT0FERURfTEFCU19TRUFSQ0giLCJsYWJfY2FyZCIsImJvdHRvbV9jb250ZW50IiwiZm9yT3JnYW5pY1NlYXJjaCIsImFwcGx5RmlsdGVycyIsImFwcGx5Q2F0ZWdvcmllcyIsImNvbXBhcmVQYWNrYWdlIiwiYXBwbHlRdWlja0ZpbHRlciIsImNhdElkIiwidmlld01vcmUiLCJoYXNNb3JlIiwibG9hZGluZyIsInJlbmRlckJsb2NrIiwicmVhZE1vcmUiLCJnZXRPZmZlckxpc3QiLCJjYXRlZ29yeSIsImZpbHRlcnMiLCJndG1EYXRhIiwiTEFCUyIsImxhYkxpc3QiLCJzdGFydF9wYWdlIiwiY3Vycl9wYWdlIiwibWF4IiwicGFkZGluZ1RvcCIsIm1pbkhlaWdodCIsIl9faHRtbCIsInNlYXJjaF9jb250ZW50IiwidG9nZ2xlU2Nyb2xsIiwibG9hZE1vcmUiLCJhcHBseVF1aWNrRmlsdGVycyIsImoiLCJvZmZlckxpc3QiLCJzbGlkZXJfbG9jYXRpb24iLCJQYWNrYWdlc0xpc3RzIiwiU2VsZWN0ZWRQa2dTdHJpcCIsImNvbXBhcmVQYWNrYWdlcyIsIkNhdGVnb3J5UG9wdXAiLCJhbmNob3JFbCIsIm9wZW5GaWx0ZXIiLCJwcmljZVJhbmdlIiwiZGlzdGFuY2VSYW5nZSIsInNob3J0VVJMIiwiZHJvcGRvd25fdmlzaWJsZSIsInNob3dMb2NhdGlvblBvcHVwIiwib3ZlcmxheVZpc2libGUiLCJzaG93UG9wdXBDb250YWluZXIiLCJzb3J0VGV4dCIsIm9wZW5DYXRlZ29yeSIsInNlbGVjdGVkQ2F0SWRzIiwic2VsZWN0ZWRBbGxDYXRJZHNJbnRpYWwiLCJzZWxlY3RlZENhdElkc0xlbmciLCJpc19hcHBsaWVkIiwic2VsZWN0QWxsY2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5SWRzIiwic2VsZWN0QWxsY2F0ZWdvcnlJZHMiLCJpc19zZWxlY3RlZCIsImluaXRpYWxTZWxlY3RlZENhdGVnb3J5IiwiY2F0ZWdvcmllc19jb3VudCIsImlzU2VsZWN0ZWQiLCJ1blNlbGVjdGVkIiwiaXNTZWxlY3RlZENhdCIsInVuU2VsZWN0ZWRDYXQiLCJmb250V2VpZ2h0IiwidG9nZ2xlVGVzdCIsImNsb3NlQ2F0ZWdvcnkiLCJhcHBseUFsbENhdGVnb3J5IiwiVG9wQmFyIiwiaXNDYXRlZ29yeUFwcGxpZWQiLCJhcHBsaWVkQ2F0ZWdvcnlDb3VudCIsImluaXRpYWxTZWxlY3RlZENhdElkcyIsInByZXZpb3VzX2ZpbHRlcnMiLCJzb3J0RmlsdGVyQ2xpY2tlZCIsImlmQW55RmlsdGVyQXBwbGllZCIsImlzRGF0YUZpbHRlcmVkIiwicmVzZXQiLCJyZXNldEZpbHRlcnMiLCJjdXJyZW50RmlsdGVycyIsImNvbmNhdCIsImZpbHRlckRhdGEiLCJjaGVja0lmQW55RmlsdGVyQXBwbGlsZWQiLCJmaWx0ZXJDb3VudCIsImluY2x1ZGVzIiwiYXJyRmxpdGVyIiwiaG9zcGl0YWxfdHlwZSIsInZhbCIsImlzQXJyYXkiLCJzZWxlY3RlZFZhbCIsImZvdW5kIiwic2VsZWN0ZWRUZXN0cyIsInF1aWNrRmlsdGVyQ2F0SWQiLCJoYW5kbGVDbG9zZSIsInRvZ2dsZUFsbEZpbHRlcnMiLCJpc19sb2dpbl91c2VyX2luc3VyZWQiLCJpbnN1cmFuY2Vfc3RhdHVzIiwic2VsZWN0Q2F0ZWdvcnkiLCJ0b3AiLCJSZXN1bHRDb3VudCIsInNzckZsYWciLCJzaG9ydGVuVXJsIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJyZWR1Y2UiLCJmaW5hbCIsImN1cnIiLCJ1cmxTaG9ydG5lciIsImVyciIsInRpbnlfdXJsIiwic2VhcmNoQ2l0aWVzIiwic3R5bGUiLCJ6SW5kZXgiLCJsb2NhdGlvbl91cmwiLCJjcml0ZXJpYVN0ciIsImdldENyaXRlcmlhU3RyaW5nIiwibG9jYXRpb25OYW1lIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJhbGlnbkl0ZW1zIiwiZmxleCIsInRvZ2dsZUZpbHRlciIsIm1hcmdpbkxlZnQiLCJoYW5kbGVPcGVuIiwic29ydFR5cGUiLCJoZWlnaHQiLCJnb1RvTG9jYXRpb24iLCJjaGlsZCIsInJlZiIsImhpZGVMb2NhdGlvblBvcHVwIiwib3ZlcmxheUNsaWNrIiwiU2VhcmNoUGFja2FnZXMiLCJzdG9yZSIsInF1ZXJ5UGFyYW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2NhdGlvbl9tcyIsImRpc3BhdGNoIiwic2VhcmNoVXJsIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwiZXJyb3IiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwYXNzZWRQcm9wcyIsInN0YXRpY0NvbnRleHQiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIkxPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCIiwiY29ycG9yYXRlQ291cG9uIiwiY29tbW9uX3NldHRpbmdzIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsIlVTRVIiLCJkZXZpY2VfaW5mbyIsIkxBQl9TRUFSQ0hfREFUQSIsIkxBQl9TRUFSQ0giLCJTRVRfRlJPTV9TRVJWRVIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJmcm9tX3NlcnZlciIsInNlYXJjaEJ5VXJsIiwiY3JpdGVyaWEiLCJmb3JjZUFkZCIsImdldERpYWdub3Npc0NyaXRlcmlhUmVzdWx0cyIsInNlYXJjaFN0cmluZyIsImNhbGxiYWNrIiwic2VsZWN0U2VhcmNoVHlwZSIsInRvZ2dsZU9QRENyaXRlcmlhIiwicmVzY2hlZHVsZSIsImxvYWRPUERJbnN1cmFuY2UiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGM7OztBQUNGLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0lBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTO0FBREEsU0FBYjtBQUZlO0FBS2xCOzs7O2dDQUVPQyxFLEVBQUlDLEcsRUFBS0MsTyxFQUFTQyxTLEVBQVdDLEMsRUFBRztBQUNwQyxpQkFBS1AsS0FBTCxDQUFXUSxlQUFYO0FBQ0EsZ0JBQUlDLFVBQVVKLE9BQWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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VjtBQUFBLFNBZmY7QUFnQkh5QywwQkFBa0IsMEJBQUN2SyxJQUFELEVBQU9vTCxHQUFQO0FBQUEsbUJBQWV1TixTQUFTLDZCQUFpQjNZLElBQWpCLEVBQXVCb0wsR0FBdkIsQ0FBVCxDQUFmO0FBQUEsU0FoQmY7QUFpQkhMLDRCQUFvQiw0QkFBQy9LLElBQUQsRUFBT29MLEdBQVA7QUFBQSxtQkFBY3VOLFNBQVMsK0JBQW1CM1ksSUFBbkIsRUFBeUJvTCxHQUF6QixDQUFULENBQWQ7QUFBQSxTQWpCakI7QUFrQkhoSyw4QkFBcUI7QUFBQSxtQkFBS3VYLFNBQVMsa0NBQVQsQ0FBTDtBQUFBLFNBbEJsQjtBQW1CSGhKLDJCQUFrQiwyQkFBQ3hQLElBQUQsRUFBTXNMLEVBQU47QUFBQSxtQkFBWWtOLFNBQVMsOEJBQWtCeFksSUFBbEIsRUFBd0JzTCxFQUF4QixDQUFULENBQVo7QUFBQSxTQW5CZjtBQW9CSCtELDJCQUFrQiwyQkFBQ21MLE1BQUQ7QUFBQSxtQkFBV2hDLFNBQVMsOEJBQWtCZ0MsTUFBbEIsQ0FBVCxDQUFYO0FBQUE7QUFwQmYsS0FBUDtBQXNCSCxDQXZCRDs7a0JBeUJlLHlCQUFRekIsZUFBUixFQUF5QmEsa0JBQXpCLEVBQTZDM0IsY0FBN0MsQyIsImZpbGUiOiI2NS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmltcG9ydCB7IGJ1aWxkT3BlbkJhbm5lciB9IGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgeyBYX09LIH0gZnJvbSAnY29uc3RhbnRzJztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IENvbW1vblZpcEdvbGRCYWRnZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2NvbW1vblZpcEdvbGRCYWRnZS5qcydcbmltcG9ydCBDb21tb25WaXBHb2xkTm9uTG9naW5CYWRnZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2NvbW1vblZpcEdvbGROb25Mb2dpbkJhZGdlLmpzJ1xuXG5jbGFzcyBMYWJQcm9maWxlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlbkxhYihpZCwgdXJsLCB0ZXN0X2lkLCB0ZXN0X25hbWUsIGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKVxuICAgICAgICBsZXQgdGVzdElkcyA9IHRlc3RfaWRcbiAgICAgICAgLy8gbGV0IGRlZHVwZV9pZHMgPSB7fVxuICAgICAgICAvLyBsZXQgdGVzdElkcyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXNcbiAgICAgICAgLy8gICAgIC5yZWR1Y2UoKGZpbmFsLCB4KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgZmluYWwgPSBmaW5hbCB8fCBbXVxuICAgICAgICAvLyAgICAgICAgIGlmICh4LnRlc3QgJiYgeC50eXBlID09IFwiY29uZGl0aW9uXCIpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgeC50ZXN0ID0geC50ZXN0IHx8IFtdXG4gICAgICAgIC8vICAgICAgICAgICAgIGZpbmFsID0gWy4uLmZpbmFsLCAuLi54LnRlc3RdXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIGlmICh4LnR5cGUgPT0gXCJ0ZXN0XCIpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZmluYWwucHVzaCh4KVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gZmluYWxcbiAgICAgICAgLy8gICAgIH0sIFtdKVxuICAgICAgICAvLyAgICAgLmZpbHRlcigoeCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGlmIChkZWR1cGVfaWRzW3guaWRdKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGRlZHVwZV9pZHNbeC5pZF0gPSB0cnVlXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSkubWFwKCh0ZXN0KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgbGV0IG5ld190ZXN0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGVzdClcbiAgICAgICAgLy8gICAgICAgICBuZXdfdGVzdC5leHRyYV90ZXN0ID0gdHJ1ZVxuICAgICAgICAvLyAgICAgICAgIG5ld190ZXN0LmxhYl9pZCA9IGlkXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIG5ld190ZXN0LCB0cnVlKVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgbGV0IG5ld190ZXN0ID0ge31cbiAgICAgICAgbmV3X3Rlc3QuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgbmV3X3Rlc3QubGFiX2lkID0gaWRcbiAgICAgICAgbmV3X3Rlc3QudHlwZSA9ICd0ZXN0J1xuICAgICAgICBuZXdfdGVzdC5uYW1lID0gdGVzdF9uYW1lXG4gICAgICAgIG5ld190ZXN0LmlkID0gdGVzdF9pZFxuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgbmV3X3Rlc3QsIHRydWUpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdSYW5rT2ZMYWJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncmFuay1sYWItY2xpY2tlZCcsICdSYW5rJzogdGhpcy5wcm9wcy5yYW5rICsgMVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiU2VsZWN0ZWRCeVVzZXInLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItc2VsZWN0ZWQtYnktdXNlcicsICdMYWJJZCc6IGlkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3VybH1gKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke2lkfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBib29rTm93Q2xpY2tlZChpZCwgdXJsLCB0ZXN0X2lkLCB0ZXN0X25hbWUsIGUpIHtcbiAgICAgICAgbGV0IHNsb3QgPSB7IHRpbWU6IHt9IH1cbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhckV4dHJhVGVzdHMoKVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYlRpbWVTTG90KHNsb3QsIGZhbHNlKVxuICAgICAgICBsZXQgc2VsZWN0ZWRUeXBlID0ge1xuICAgICAgICAgICAgcl9waWNrdXA6ICdob21lJyxcbiAgICAgICAgICAgIHBfcGlja3VwOiAnaG9tZSdcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdExhYkFwcG9pbnRtZW50VHlwZShzZWxlY3RlZFR5cGUpXG5cbiAgICAgICAgbGV0IG5ld190ZXN0ID0ge31cbiAgICAgICAgbmV3X3Rlc3QuZXh0cmFfdGVzdCA9IHRydWVcbiAgICAgICAgbmV3X3Rlc3QubGFiX2lkID0gaWRcbiAgICAgICAgbmV3X3Rlc3QudHlwZSA9ICd0ZXN0J1xuICAgICAgICBuZXdfdGVzdC5uYW1lID0gdGVzdF9uYW1lXG4gICAgICAgIG5ld190ZXN0LmlkID0gdGVzdF9pZFxuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgbmV3X3Rlc3QsIHRydWUpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdSYW5rT2ZMYWJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncmFuay1sYWItY2xpY2tlZCcsICdSYW5rJzogdGhpcy5wcm9wcy5yYW5rICsgMVxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTGFiU2VsZWN0ZWRCeVVzZXInLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItc2VsZWN0ZWQtYnktdXNlcicsICdMYWJJZCc6IGlkXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5jbGVhclZpcFNlbGVjdGVkUGxhbigpXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvbGFiLyR7aWR9L2Jvb2tgKVxuICAgIH1cblxuXG4gICAgdGVzdEluZm8odGVzdF9pZCwgbGFiX2lkLCB0ZXN0X3VybCwgaXNDYXRlZ29yeSwgZXZlbnQpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkX3Rlc3RfaWRzID0gW11cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMpLm1hcChmdW5jdGlvbiAoW2tleSwgdmFsdWVdKSB7XG4gICAgICAgICAgICBzZWxlY3RlZF90ZXN0X2lkcy5wdXNoKHZhbHVlLmlkKVxuICAgICAgICB9KVxuICAgICAgICB2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcbiAgICAgICAgdmFyIHNlYXJjaF9pZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwic2VhcmNoX2lkXCIpO1xuICAgICAgICBsZXQgbGF0ID0gMjguNjQ0ODAwXG4gICAgICAgIGxldCBsb25nID0gNzcuMjE2NzIxXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxhdCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sYXRcbiAgICAgICAgICAgIGxvbmcgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRlc3RfdXJsICYmIHRlc3RfdXJsICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycgKyB0ZXN0X3VybCArICc/dGVzdF9pZHM9JyArIHRlc3RfaWQgKyAnJnNlbGVjdGVkX3Rlc3RfaWRzPScgKyBzZWxlY3RlZF90ZXN0X2lkcyArICcmc2VhcmNoX2lkPScgKyBzZWFyY2hfaWQgKyAnJmxhYl9pZD0nICsgbGFiX2lkICsgJyZsYXQ9JyArIGxhdCArICcmbG9uZz0nICsgbG9uZyArICcmaXNDYXRlZ29yeT0nICsgaXNDYXRlZ29yeSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoL3Rlc3RpbmZvP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZzZWxlY3RlZF90ZXN0X2lkcz0nICsgc2VsZWN0ZWRfdGVzdF9pZHMgKyAnJnNlYXJjaF9pZD0nICsgc2VhcmNoX2lkICsgJyZsYWJfaWQ9JyArIGxhYl9pZCArICcmbGF0PScgKyBsYXQgKyAnJmxvbmc9JyArIGxvbmcgKyAnJmlzQ2F0ZWdvcnk9JyArIGlzQ2F0ZWdvcnkpXG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAndGVzdEluZm9DbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Rlc3QtaW5mby1jbGljaycsICdwYWdlU291cmNlJzogJ2xhYi10ZXN0LXBhZ2UnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVDb21wYXJlKGlkLCBsYWJfaWQsIGxhYl90aHVtYm5haWwsIG5hbWUpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkUGtnQ29tcGFyZUlkcyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5tYXAoKHBhY2thZ2VzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQa2dDb21wYXJlSWRzLnB1c2gocGFja2FnZXMuaWQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3RlZFBrZ0NvbXBhcmVJZHMuaW5kZXhPZihpZCkgPT0gLTEgJiYgc2VsZWN0ZWRQa2dDb21wYXJlSWRzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiTWF4IDUgcGFja2FnZXMgY2FuIGJlIGNvbXBhcmVkXCIgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0FkZGVkVG9Db21wYXJlJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnYWRkZWQtdG8tY29tcGFyZScsICdMYWJJZCc6IGxhYl9pZCwgJ3Rlc3RJZCc6IGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVDb21wYXJlUGFja2FnZXMoaWQsIGxhYl9pZCwgbGFiX3RodW1ibmFpbCwgbmFtZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvbGRDbGlja2VkKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnVmlwR29sZENsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICd2aXAtcGFja2FnZS1nb2xkLWNsaWNrZWQnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy92aXAtZ29sZC1kZXRhaWxzP2lzX2dvbGQ9dHJ1ZSZzb3VyY2U9cGFja2FnZWdvbGRsaXN0aW5nJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IGRpc2NvdW50ZWRfcHJpY2UsIHByaWNlLCBsYWIsIGRpc3RhbmNlLCBwaWNrdXBfYXZhaWxhYmxlLCBsYWJfdGltaW5nLCBsYWJfdGltaW5nX2RhdGEsIG1ycCwgbmV4dF9sYWJfdGltaW5nLCBuZXh0X2xhYl90aW1pbmdfZGF0YSwgZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzLCBwaWNrdXBfY2hhcmdlcywgbmFtZSwgaWQsIG51bWJlcl9vZl90ZXN0cywgc2hvd19kZXRhaWxzLCBjYXRlZ29yaWVzLCBjYXRlZ29yeV9kZXRhaWxzLCBhZGRyZXNzLCBpbmNsdWRlZF9pbl91c2VyX3BsYW4sIGluc3VyYW5jZSwgdmlwIH0gPSB0aGlzLnByb3BzLmRldGFpbHM7XG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5jZWlsKGRpc3RhbmNlIC8gMTAwMCk7XG4gICAgICAgIHZhciBvcGVuaW5nVGltZSA9ICcnXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRldGFpbHMubGFiX3RpbWluZykge1xuICAgICAgICAgICAgb3BlbmluZ1RpbWUgPSB0aGlzLnByb3BzLmRldGFpbHMubGFiX3RpbWluZy5zcGxpdCgnLScpWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBpY2t1cF90ZXh0ID0gXCJcIlxuICAgICAgICBpZiAocGlja3VwX2F2YWlsYWJsZSA9PSAxICYmIGRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcyA9PSAxKSB7XG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiSG9tZSBwaWNrdXAgY2hhcmdlcyBhcHBsaWNhYmxlXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwaWNrdXBfYXZhaWxhYmxlID09IDEgJiYgIWRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcykge1xuICAgICAgICAgICAgcGlja3VwX3RleHQgPSBcIkluY2x1c2l2ZSBvZiBob21lIHZpc2l0IGNoYXJnZXNcIlxuICAgICAgICAgICAgZGlzY291bnRlZF9wcmljZSA9IHBhcnNlSW50KGRpc2NvdW50ZWRfcHJpY2UpICsgcGFyc2VJbnQocGlja3VwX2NoYXJnZXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGlja3VwX2F2YWlsYWJsZSA9PSAwKSB7XG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiQ2VudGVyIHZpc2l0IHJlcXVpcmVkXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoaWRlX3ByaWNlID0gZmFsc2VcbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRDcml0ZXJpYXMubWFwKCh4KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHguaGlkZV9wcmljZSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBoaWRlX3ByaWNlID0gdHJ1ZVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IG9mZlBlcmNlbnQgPSAnJ1xuICAgICAgICBpZiAobXJwICYmIGRpc2NvdW50ZWRfcHJpY2UgJiYgKGRpc2NvdW50ZWRfcHJpY2UgPCBtcnApKSB7XG4gICAgICAgICAgICBvZmZQZXJjZW50ID0gcGFyc2VJbnQoKChtcnAgLSBkaXNjb3VudGVkX3ByaWNlKSAvIG1ycCkgKiAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVkX2luX3VzZXJfcGxhbikge1xuICAgICAgICAgICAgaGlkZV9wcmljZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VsZWN0ZWRQa2dDb21wYXJlSWRzID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLm1hcCgocGFja2FnZXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFBrZ0NvbXBhcmVJZHMucHVzaChwYWNrYWdlcy5pZCwgcGFja2FnZXMubGFiX2lkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgPSBmYWxzZVxuICAgICAgICBpZiAoaW5zdXJhbmNlICYmIGluc3VyYW5jZS5pc19pbnN1cmFuY2VfY292ZXJlZCAmJiBpbnN1cmFuY2UuaXNfdXNlcl9pbnN1cmVkKSB7XG4gICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgaXNfdmlwX2FwcGxpY2FibGUgPSB2aXAuaXNfdmlwX21lbWJlciAmJiB2aXAuY292ZXJlZF91bmRlcl92aXBcbiAgICAgICAgLy8gbGV0IHZpcF9hbW91bnQgPSB2aXAudmlwX2Ftb3VudFxuXG4gICAgICAgIGxldCBpc192aXBfYXBwbGljYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCB2aXBfYW1vdW50XG4gICAgICAgIGxldCBpc19lbmFibGVfZm9yX3ZpcCA9IGZhbHNlXG4gICAgICAgIGxldCBpc192aXBfZ29sZCA9IGZhbHNlXG5cbiAgICAgICAgaWYgKHZpcCAmJiBPYmplY3Qua2V5cyh2aXApLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlzX3ZpcF9hcHBsaWNhYmxlID0gdmlwLmlzX3ZpcF9tZW1iZXIgJiYgdmlwLmNvdmVyZWRfdW5kZXJfdmlwXG4gICAgICAgICAgICB2aXBfYW1vdW50ID0gdmlwLnZpcF9hbW91bnRcbiAgICAgICAgICAgIGlzX3ZpcF9nb2xkID0gdmlwLmlzX2dvbGRfbWVtYmVyXG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAgPSB2aXAuaXNfZW5hYmxlX2Zvcl92aXBcbiAgICAgICAgbGV0IGlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQgPSB2aXAuaXNfZ29sZFxuICAgICAgICBsZXQgaXNfdmlwX21lbWJlciA9IHZpcC5pc192aXBfbWVtYmVyXG4gICAgICAgIGxldCBpc19nb2xkX21lbWJlciA9IHZpcC5pc19nb2xkX21lbWJlclxuICAgICAgICBsZXQgY292ZXJlZF91bmRlcl92aXAgPSB2aXAuY292ZXJlZF91bmRlcl92aXBcblxuICAgICAgICBsZXQgc2hvd19jb21tb25fcHJpY2VzID0gIWlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcCB8fCAoKGlzX2dvbGRfbWVtYmVyIHx8IGlzX3ZpcF9tZW1iZXIpICYmICFjb3ZlcmVkX3VuZGVyX3ZpcClcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY2FyZC1jb250YWluZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5pc0NvbXBhcmVkICYmICh0aGlzLnByb3BzLmlzQ29tcGFyZSB8fCB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID4gMCkgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VsZWN0ZWRQa2dDb21wYXJlSWRzLmluZGV4T2YoaWQpID4gLTEgJiYgc2VsZWN0ZWRQa2dDb21wYXJlSWRzLmluZGV4T2YobGFiLmlkKSA+IC0xID8gJ3BrZy1jcmQtaGVhZGVyIHBrZy1jcmQtZ3JlZW4gJyA6ICdwa2ctY3JkLWhlYWRlciAnfSBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiPntzZWxlY3RlZFBrZ0NvbXBhcmVJZHMuaW5kZXhPZihpZCkgPiAtMSAmJiBzZWxlY3RlZFBrZ0NvbXBhcmVJZHMuaW5kZXhPZihsYWIuaWQpID4gLTEgPyAnQWRkZWQnIDogJ0FkZCB0byBjb21wYXJlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DbGljaz17dGhpcy50b2dnbGVDb21wYXJlLmJpbmQodGhpcywgaWQsIGxhYi5pZCwgbGFiLmxhYl90aHVtYm5haWwsIG5hbWUpfSBjaGVja2VkPXtzZWxlY3RlZFBrZ0NvbXBhcmVJZHMuaW5kZXhPZihpZCkgPiAtMSAmJiBzZWxlY3RlZFBrZ0NvbXBhcmVJZHMuaW5kZXhPZihsYWIuaWQpID4gLTEgPyB0cnVlIDogZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY29udGVudC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgIWhpZGVfcHJpY2UgJiYgb2ZmUGVyY2VudCAmJiBvZmZQZXJjZW50ID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGtnLW9mci1yaWJib24gZnctNzAwXCI+e29mZlBlcmNlbnR9JSBPRkY8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicGtnLWNhcmQtbG9jYXRpb24gcC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGltZyBjbGFzc05hbWU9XCJmbHRyLWxvYy1pY29cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6ICcxMnB4JywgaGVpZ2h0OiAnMThweCcgfX0gLz4ge2xhYi5sb2NhbGl0eX0ge2xhYi5jaXR5fSA8L3A+PHNwYW4gY2xhc3NOYW1lPVwia21UcnVuYXRlXCI+IHwge2Rpc3RhbmNlfSBLbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jYXJkLWNvbnRlbnQgbS0wXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY2FyZGxlZnQtaW1nIG53LXBrZy1jcmQtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5pdGlhbHNQaWN0dXJlIG5hbWU9e2xhYi5uYW1lfSBoYXNfaW1hZ2U9eyEhbGFiLmxhYl90aHVtYm5haWx9IGNsYXNzTmFtZT1cImluaXRpYWxzUGljdHVyZS1sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmx0ci11c3ItaW1hZ2UtbGFiXCIgc3JjPXtsYWIubGFiX3RodW1ibmFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHktc3ViLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGlja3VwX2F2YWlsYWJsZSA9PSAxICYmIGRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcyA9PSAwICYmIGxhYi5pc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiBsYWIuaG9tZV9waWNrdXBfY2hhcmdlcyA9PSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXBrdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbGFieTEuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GcmVlIFNhbXBsZSA8c3BhbiBjbGFzc05hbWU9XCJ0c3RibGtcIj5Db2xsZWN0aW9uPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYiAmJiBsYWIuaXNfdGh5cm9jYXJlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXBrdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbGFieTMuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JbnRlZ3JhdGVkIDxzcGFuIGNsYXNzTmFtZT1cInRzdGJsa1wiPkxhYjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgLyR7dGhpcy5wcm9wcy5kZXRhaWxzLnVybCB8fCAnJ31gfSBvbkNsaWNrPXt0aGlzLnRlc3RJbmZvLmJpbmQodGhpcywgaWQsIHRoaXMucHJvcHMuZGV0YWlscy5sYWIuaWQsIHRoaXMucHJvcHMuZGV0YWlscy51cmwgPyB0aGlzLnByb3BzLmRldGFpbHMudXJsIDogJycsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGtnLWxhYkRvYy1OYW1lXCI+e25hbWV9IHtzaG93X2RldGFpbHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ICdtYXJnaW5MZWZ0JzogJzVweCcsIG1hcmdpblRvcDogJzJweCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0SW5mby5iaW5kKHRoaXMsIGlkLCB0aGlzLnByb3BzLmRldGFpbHMubGFiLmlkLCB0aGlzLnByb3BzLmRldGFpbHMudXJsID8gdGhpcy5wcm9wcy5kZXRhaWxzLnVybCA6ICcnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3RoaXMucHJvcHMuZGV0YWlscy51cmwgfHwgJyd9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL0luZm8uc3ZnXCIgc3R5bGU9e3sgd2lkdGg6ICcxNXB4JyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyX29mX3Rlc3RzID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImxhYi1mbHRyLWRjLW5hbWUgZnctNTAwIHBrZy1pbmNsdWRlXCIgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fT57bnVtYmVyX29mX3Rlc3RzID8gYCR7bnVtYmVyX29mX3Rlc3RzfSBUZXN0cyBJbmNsdWRlZGAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgYm9va2luZy1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY2FyZC1wcmljZSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFpc192aXBfYXBwbGljYWJsZSB8fCAhdmlwLmlzX2dvbGRfbWVtYmVyKSAmJiBmYWxzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRjLXByY1wiPkRvY3ByaW1lIFByaWNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhc2hvd19jb21tb25fcHJpY2VzKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1vblZpcEdvbGRCYWRnZSBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXA9e2lzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcH0gaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZD17aXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZH0gaXNfdmlwX21lbWJlcj17aXNfdmlwX21lbWJlcn0gaXNfZ29sZF9tZW1iZXI9e2lzX2dvbGRfbWVtYmVyfSBjb3ZlcmVkX3VuZGVyX3ZpcD17Y292ZXJlZF91bmRlcl92aXB9IHZpcF9kYXRhPXt2aXB9IHsuLi50aGlzLnByb3BzfSBtcnA9e21ycH0gZGlzY291bnRlZF9wcmljZT17ZGlzY291bnRlZF9wcmljZX0gZ29sZENsaWNrZWQ9e3RoaXMuZ29sZENsaWNrZWQuYmluZCh0aGlzKX0gaXNfcGFja2FnZT17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogICAgaXNfdmlwX2FwcGxpY2FibGUgJiYgIXZpcC5pc19nb2xkX21lbWJlcj9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmlwLW1haW4taWNvIGltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJyovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyp2aXAuaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZpcC1tYWluLWljbyBpbWctZmx1aWRcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qdmlwLmlzX2dvbGRfbWVtYmVyP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj7igrkge3BhcnNlSW50KHZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50K3ZpcC52aXBfYW1vdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBrZy1jdXQtcHJpY2VcIj7igrkge3BhcnNlSW50KG1ycCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmlzX3ZpcF9hcHBsaWNhYmxlICYmICF2aXAuaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPuKCuSB7cGFyc2VJbnQodmlwX2Ftb3VudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwa2ctY3V0LXByaWNlXCI+4oK5IHtwYXJzZUludChtcnApfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJyovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgIWhpZGVfcHJpY2UgJiYgZGlzY291bnRlZF9wcmljZSAmJiBzaG93X2NvbW1vbl9wcmljZXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChkaXNjb3VudGVkX3ByaWNlKSAhPSBwYXJzZUludChtcnApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPuKCuSB7cGFyc2VJbnQoZGlzY291bnRlZF9wcmljZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGtnLWN1dC1wcmljZVwiPuKCuSB7cGFyc2VJbnQobXJwKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9XCJmdy01MDBcIj7igrkge3BhcnNlSW50KGRpc2NvdW50ZWRfcHJpY2UpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9wcmljZSA/IDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPuKCuSAwPC9wPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYXBwbGljYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3QtZG9jLXByaWNlXCI+4oK5IHswfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLXZhbC1ieFwiPkNvdmVyZWQgVW5kZXIgSW5zdXJhbmNlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmICFoaWRlX3ByaWNlICYmIG9mZlBlcmNlbnQgJiYgb2ZmUGVyY2VudCA+IDAgJiYgc2hvd19jb21tb25fcHJpY2VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGMtY3BuLWluY2x1ZGVcIj57b2ZmUGVyY2VudH0lIE9mZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhaW5jbHVkZWRfaW5fdXNlcl9wbGFuICYmIGRpc2NvdW50ZWRfcHJpY2UgIT0gcHJpY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPihpbmNsdWRlcyBDb3Vwb24pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyohaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlICYmIGRpc2NvdW50ZWRfcHJpY2U+KHZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50fHwwICsgdmlwLnZpcF9nb2xkX3ByaWNlfHwwKSAmJiAhdmlwLmlzX2dvbGRfbWVtYmVyID8gPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmQgZ29sZENhcmRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmdvbGRDbGlja2VkKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdsZC1jZC1pY29uXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9Lz4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+UHJpY2U8L3A+IDxzcGFuIGNsYXNzTmFtZT1cImdsZC1yYXRlLWxmXCI+4oK5IHt2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudCsgdmlwLnZpcF9nb2xkX3ByaWNlfTwvc3Bhbj48aW1nIHN0eWxlPXt7dHJhbnNmb3JtOiAncm90YXRlKC05MGRlZyknLCB3aWR0aDogJzEwcHgnfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJyovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiAhc2hvd19jb21tb25fcHJpY2VzKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uVmlwR29sZE5vbkxvZ2luQmFkZ2UgaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwPXtpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXB9IGlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQ9e2lzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGR9IGlzX3ZpcF9tZW1iZXI9e2lzX3ZpcF9tZW1iZXJ9IGlzX2dvbGRfbWVtYmVyPXtpc19nb2xkX21lbWJlcn0gY292ZXJlZF91bmRlcl92aXA9e2NvdmVyZWRfdW5kZXJfdmlwfSB2aXBfZGF0YT17dmlwfSB7Li4udGhpcy5wcm9wc30gbXJwPXttcnB9IGRpc2NvdW50ZWRfcHJpY2U9e2Rpc2NvdW50ZWRfcHJpY2V9IGdvbGRDbGlja2VkPXt0aGlzLmdvbGRDbGlja2VkLmJpbmQodGhpcyl9IGlzX3BhY2thZ2U9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC8ke3RoaXMucHJvcHMuZGV0YWlscy5sYWIudXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwa2ctYnRuLW53XCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAwIH19IG9uQ2xpY2s9e3RoaXMuYm9va05vd0NsaWNrZWQuYmluZCh0aGlzLCB0aGlzLnByb3BzLmRldGFpbHMubGFiLmlkLCB0aGlzLnByb3BzLmRldGFpbHMubGFiLnVybCwgaWQsIG5hbWUpfT5Cb29rIE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmICFpbmNsdWRlZF9pbl91c2VyX3BsYW4gJiYgZGlzY291bnRlZF9wcmljZSAhPSBwcmljZSA/IDxwIGNsYXNzTmFtZT1cInBrZy1kaXNjb3VudENwblwiPkluY2x1ZGVzIGNvdXBvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVkX2luX3VzZXJfcGxhbiAmJiAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZy1kaXNjb3VudENwblwiPkRvY3ByaW1lIENhcmUgQmVuZWZpdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1pbmNsdWRlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeV9kZXRhaWxzICYmIGNhdGVnb3J5X2RldGFpbHMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9kZXRhaWxzLm1hcCgoY2F0ZWdvcnlfZGV0YWlsLCBrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJwa2dJbmNsdWRlTGlzdFwiIGtleT17a30gaWQ9e2t9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3RoaXMudGVzdEluZm8uYmluZCh0aGlzLCBpZCwgdGhpcy5wcm9wcy5kZXRhaWxzLmxhYi5pZCwgdGhpcy5wcm9wcy5kZXRhaWxzLnVybCA/IHRoaXMucHJvcHMuZGV0YWlscy51cmwgOiAnJywgdHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlfZGV0YWlsLmljb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzIwcHgnLCBtYXJnaW5SaWdodDogJzVweCcgfX0gc3JjPXtjYXRlZ29yeV9kZXRhaWwuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMFwiPntjYXRlZ29yeV9kZXRhaWwubmFtZX0ge2NhdGVnb3J5X2RldGFpbC5wYXJhbWV0ZXJfY291bnQgPiAxID8gYCgke2NhdGVnb3J5X2RldGFpbC5wYXJhbWV0ZXJfY291bnR9KWAgOiAnJ30gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY3JkLWZvb3QtaW1nLXRleHQgcGtnLW5ldy10aW1lLXNsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3dhdGNoLWRhdGUuc3ZnXCJ9IHN0eWxlPXt7IG1hcmdpblRvcDogJzBweCcsIHdpZHRoOiAnMTVweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntidWlsZE9wZW5CYW5uZXIobGFiX3RpbWluZywgbGFiX3RpbWluZ19kYXRhLCBuZXh0X2xhYl90aW1pbmcsIG5leHRfbGFiX3RpbWluZ19kYXRhKX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bUNhcmRGb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwa2ctY3JkLWZvb3QtaW1nLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbmV3LWxvYy1pY28uc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAnMTBweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsYWIubG9jYWxpdHl9IHtsYWIuY2l0eX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInBrZy1jcmQtZm9vdC1pbWctdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pbmZvZXJyb3Iuc3ZnXCJ9IHN0eWxlPXt7IG1hcmdpblRvcDogJzJweCcsIHdpZHRoOiAnMTVweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwaWNrdXBfdGV4dCA/IDxwPntwaWNrdXBfdGV4dH08L3A+IDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jcmQtZm9vdC1pbWctdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YXRjaC1kYXRlLnN2Z1wifSBzdHlsZT17eyBtYXJnaW5Ub3A6ICcycHgnLCB3aWR0aDogJzE1cHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57YnVpbGRPcGVuQmFubmVyKGxhYl90aW1pbmcsIGxhYl90aW1pbmdfZGF0YSwgbmV4dF9sYWJfdGltaW5nLCBuZXh0X2xhYl90aW1pbmdfZGF0YSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bURvY0xvY1wiPjxwIGNsYXNzTmFtZT1cIlwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3N0bWRpc3Quc3ZnXCJ9IC8+e2Rpc3RhbmNlfSBrbTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMYWJQcm9maWxlQ2FyZFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhY2thZ2VzTGlzdHMgZnJvbSAnLi4vc2VhcmNoUGFja2FnZXMvcGFja2FnZXNMaXN0L2luZGV4LmpzJ1xuaW1wb3J0IENyaXRlcmlhU2VhcmNoIGZyb20gJy4uLy4uL2NvbW1vbnMvY3JpdGVyaWFTZWFyY2gnXG5pbXBvcnQgVG9wQmFyIGZyb20gJy4vdG9wQmFyL25ld1RvcEJhci5qcydcbmltcG9ydCBOQVZJR0FURSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL25hdmlnYXRlL2luZGV4LmpzJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vLi4vY29tbW9ucy9IZWxtZXRUYWdzJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IFJlc3VsdENvdW50IGZyb20gJy4vdG9wQmFyL3Jlc3VsdF9jb3VudC5qcydcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5pbXBvcnQgTm9uSXBkUG9wdXBWaWV3IGZyb20gJy4uLy4uL2NvbW1vbnMvbm9uSXBkUG9wdXAuanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuXG5jbGFzcyBTZWFyY2hQYWNrYWdlc1ZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBsZXQgc2VvRGF0YSA9IG51bGxcbiAgICAgICAgbGV0IGZvb3RlckRhdGEgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmluaXRpYWxTZXJ2ZXJEYXRhKSB7XG4gICAgICAgICAgICBzZW9EYXRhID0gdGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YS5zZW9EYXRhXG4gICAgICAgICAgICBmb290ZXJEYXRhID0gdGhpcy5wcm9wcy5pbml0aWFsU2VydmVyRGF0YS5mb290ZXJEYXRhXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZW9EYXRhLCBmb290ZXJEYXRhLFxuICAgICAgICAgICAgc2hvd0Vycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dDaGF0V2l0aHVzOiBmYWxzZSxcbiAgICAgICAgICAgIGlzU2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgaXNDb21wYXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHF1aWNrRmlsdGVyOiB7fSxcbiAgICAgICAgICAgIHNob3dOb25JcGRQb3B1cDogcGFyc2VkLnNob3dfcG9wdXAsXG4gICAgICAgICAgICB0b19iZV9mb3JjZToxLFxuICAgICAgICAgICAgaXNfbGVhZF9lbmFibGVkOnRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5nZXRMYWJMaXN0KHRoaXMucHJvcHMpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlb0ZyaWVuZGx5KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmdldEZvb3RlckRhdGEodGhpcy5wcm9wcy5tYXRjaC51cmwuc3BsaXQoJy8nKVsxXSkudGhlbigoZm9vdGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmb290ZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb290ZXJEYXRhOiBmb290ZXJEYXRhIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5eyAvLyBzYXZlIHV0bSBwYXJhbXMgaWYgZXhpc3RzXG4gICAgICAgICAgICBpZihwYXJzZWQudXRtX3NvdXJjZSAmJiBwYXJzZWQudXRtX3NvdXJjZT09J09mZmxpbmVBZmZpbGlhdGUnKXtcbiAgICAgICAgICAgICAgICBsZXQgc2Vzc2lvbklkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAzKSoyMSArIDEwNTBcbiAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzZXNzaW9uSWRWYWwnLHNlc3Npb25JZCkgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHNwb190YWdzID0ge1xuICAgICAgICAgICAgICAgICAgICB1dG1fdGFnczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXRtX3NvdXJjZTogcGFyc2VkLnV0bV9zb3VyY2V8fCcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXRtX3Rlcm06IHBhcnNlZC51dG1fdGVybXx8JycsXG4gICAgICAgICAgICAgICAgICAgICAgICB1dG1fbWVkaXVtOiBwYXJzZWQudXRtX21lZGl1bXx8JycsXG4gICAgICAgICAgICAgICAgICAgICAgICB1dG1fY2FtcGFpZ246IHBhcnNlZC51dG1fY2FtcGFpZ258fCcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2Vzc2lvbklkOiBzZXNzaW9uSWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRDb21tb25VdG1UYWdzKCdzcG8nLCBzcG9fdGFncylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWNhdGNoKGUpIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy9DbGVhciBVdG0gdGFncyBmb3IgU1BPLCBhZnRlciAxNSBtaW51dGVzXG4gICAgICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgIGlmKHNlc3Npb25TdG9yYWdlICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb25JZFZhbCcpICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzICYmIHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmxlbmd0aCAmJiB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeD0+eC50eXBlPT0nc3BvJykubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGxldCBzcG9fdGFncyA9IHRoaXMucHJvcHMuY29tbW9uX3V0bV90YWdzLmZpbHRlcih4PT54LnR5cGU9PSdzcG8nKVswXVxuICAgICAgICAgICAgbGV0IHNlc3Npb25WYWwgPSBwYXJzZUludChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uSWRWYWwnKSlcbiAgICAgICAgICAgIGlmKHNwb190YWdzLnRpbWUgJiYgc2Vzc2lvblZhbCA9PSBwYXJzZUludChzcG9fdGFncy5jdXJyZW50U2Vzc2lvbklkKSl7XG4gICAgICAgICAgICAgICAgbGV0IHRpbWVfb2Zmc2V0ID0gKGN1cnJlbnRUaW1lIC0gc3BvX3RhZ3MudGltZSkvNjAwMDBcbiAgICAgICAgICAgICAgICAvL0NsZWFyIFNQTyB1dG0gdGFncyBhZnRlciAxNW1pbnV0ZXNcbiAgICAgICAgICAgICAgICAvLzkwMFxuICAgICAgICAgICAgICAgIGlmKHRpbWVfb2Zmc2V0PjE4MCkgeyAvLyByZW1vdmUgc3BvIHV0bSBwYXJhbXMgaWYgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudW5TZXRDb21tb25VdG1UYWdzKCdzcG8nKSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NoYXRXaXRodXM6IHRydWUgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5mZXRjaE5ld1Jlc3VsdHMgJiYgKHByb3BzLmZldGNoTmV3UmVzdWx0cyAhPSB0aGlzLnByb3BzLmZldGNoTmV3UmVzdWx0cykpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TGFiTGlzdChwcm9wcylcbiAgICAgICAgICAgIC8vIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIC8vICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBuZXdfdXJsID0gdGhpcy5idWlsZFVSSShwcm9wcylcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucmVwbGFjZShuZXdfdXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb25QYXJhbSh0YWcpIHtcbiAgICAgICAgLy8gdGhpcyBBUEkgYXNzdW1lcyB0aGUgY29udGV4dCBvZiByZWFjdC1yb3V0ZXItNFxuICAgICAgICBjb25zdCBwYXJhbVN0cmluZyA9IHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1TdHJpbmcpXG4gICAgICAgIHJldHVybiBwYXJhbXMuZ2V0KHRhZylcbiAgICB9XG5cbiAgICBnZXRMYWJMaXN0KHN0YXRlID0gbnVsbCwgcGFnZSA9IG51bGwsIGNiID0gbnVsbCkgeyBcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGlmIChwYWdlID09PSBudWxsKSB7XG4gICAgICAgICAgICBwYWdlID0gdGhpcy5wcm9wcy5wYWdlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnByb3BzXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUucGFnZSkge1xuICAgICAgICAgICAgcGFnZSA9IHN0YXRlLnBhZ2VcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXh0cmFfcGFyYW1zID0ge31cblxuICAgICAgICBpZihwYXJzZWQudXRtX3Rlcm0pe1xuICAgICAgICAgICAgZXh0cmFfcGFyYW1zLnV0bV90ZXJtID0gcGFyc2VkLnV0bV90ZXJtIHx8IFwiXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBhcnNlZC51dG1fbWVkaXVtKXtcbiAgICAgICAgICAgIGV4dHJhX3BhcmFtcy51dG1fbWVkaXVtID0gcGFyc2VkLnV0bV9tZWRpdW0gfHwgXCJcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLnV0bV9jYW1wYWlnbil7XG4gICAgICAgICAgICBleHRyYV9wYXJhbXMudXRtX2NhbXBhaWduID0gcGFyc2VkLnV0bV9jYW1wYWlnbiB8fCBcIlwiXG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJzZWQudXRtX3NvdXJjZSl7XG4gICAgICAgICAgIGV4dHJhX3BhcmFtcy51dG1fc291cmNlID0gcGFyc2VkLnV0bV9zb3VyY2UgfHwgXCJcIlxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0UGFja2FnZXMoc3RhdGUsIHBhZ2UsIGZhbHNlLCBudWxsLGV4dHJhX3BhcmFtcywgKC4uLmFyZ3MpID0+IHsgLy9nZXQgc2VhcmNoZWQgcGFja2FnZXMgcmVzdWx0XG4gICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgc2VvRGF0YTogYXJnc1sxXSB9KVxuICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgY2IoLi4uYXJncylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld191cmwgPSB0aGlzLmJ1aWxkVVJJKHN0YXRlKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKG5ld191cmwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Vycm9yOiB0cnVlIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXBwbHlGaWx0ZXJzKGZpbHRlclN0YXRlKSB7IC8vIGFwcGx5IGZpbHRlcnNcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5tZXJnZUxBQlN0YXRlKHsgZmlsdGVyQ3JpdGVyaWE6IGZpbHRlclN0YXRlIH0pXG4gICAgICAgIHRoaXMucmVzZXRRdWlja0ZpbHRlcnMoKVxuICAgICAgICB0aGlzLnByb3BzLm1lcmdlTEFCU3RhdGUoeyBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzOiBmaWx0ZXJTdGF0ZSB9KVxuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0UXVpY2tGaWx0ZXJzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcXVpY2tGaWx0ZXI6IHt9IH0pXG4gICAgfVxuXG4gICAgYXBwbHlDYXRlZ29yaWVzKGNhdGVnb3J5U3RhdGUsIGZpbHRlcnN0YXRlKSB7IC8vIGFwcGx5IGNhdGVnb3J5IGZpbHRlclxuICAgICAgICBsZXQgbmV3Q2F0ZWdvcnlTdGF0ZSA9IHt9XG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ2NhdElkcyddID0gY2F0ZWdvcnlTdGF0ZVxuXG4gICAgICAgIC8qbmV3Q2F0ZWdvcnlTdGF0ZVsnZGlzdGFuY2VSYW5nZSddPWZpbHRlcnN0YXRlLmRpc3RhbmNlUmFuZ2VcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsncHJpY2VSYW5nZSddPWZpbHRlcnN0YXRlLnByaWNlUmFuZ2VcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnc29ydF9vbiddPWZpbHRlcnN0YXRlLnNvcnRfb25cbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnbWF4X3ByaWNlJ10gPSBmaWx0ZXJzdGF0ZS5tYXhfcHJpY2VcbiAgICAgICAgXG4gICAgICAgICovXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ3NvcnRfb24nXSA9IGZpbHRlcnN0YXRlLnNvcnRfb25cbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnc29ydF9vcmRlciddID0gZmlsdGVyc3RhdGUuc29ydF9vcmRlclxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydhdmdfcmF0aW5ncyddID0gZmlsdGVyc3RhdGUuYXZnX3JhdGluZ3NcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnaG9tZV92aXNpdCddID0gZmlsdGVyc3RhdGUuaG9tZV92aXNpdFxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydsYWJfdmlzaXQnXSA9IGZpbHRlcnN0YXRlLmxhYl92aXNpdFxuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydtYXhfYWdlJ10gPSBmaWx0ZXJzdGF0ZS5tYXhfYWdlXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ21pbl9hZ2UnXSA9IGZpbHRlcnN0YXRlLm1pbl9hZ2VcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsnZ2VuZGVyJ10gPSBmaWx0ZXJzdGF0ZS5nZW5kZXJcbiAgICAgICAgbmV3Q2F0ZWdvcnlTdGF0ZVsncGFja2FnZVR5cGUnXSA9IGZpbHRlcnN0YXRlLnBhY2thZ2VUeXBlXG4gICAgICAgIG5ld0NhdGVnb3J5U3RhdGVbJ3Rlc3RfaWRzJ10gPSBmaWx0ZXJzdGF0ZS50ZXN0X2lkc1xuICAgICAgICBuZXdDYXRlZ29yeVN0YXRlWydwYWNrYWdlX2lkcyddID0gZmlsdGVyc3RhdGUucGFja2FnZV9pZHNcblxuICAgICAgICAvLyB0aGlzLnByb3BzLm1lcmdlTEFCU3RhdGUoeyBmaWx0ZXJDcml0ZXJpYTogbmV3Q2F0ZWdvcnlTdGF0ZSB9KVxuICAgICAgICB0aGlzLnByb3BzLm1lcmdlTEFCU3RhdGUoeyBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzOiBuZXdDYXRlZ29yeVN0YXRlIH0pXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFyZVBhY2thZ2UoKSB7IC8vIHRvIGNvbXBhcmUgZGlmZmVybnQgcGFja2FnZXMgXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdDb21wYXJlQnV0dG9uJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnY29tcGFyZS1idXR0b24tY2xpY2snXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY291bnQgPT0gMSl7XG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5yZXN1bHQpe1xuICAgICAgICAgICAgICAgIGxldCBwYWNrYWdlcz17fVxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFBrZ0NvbXBhcmVJZHM9W11cbiAgICAgICAgICAgICAgICBwYWNrYWdlcy5pZD10aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5yZXN1bHRbMF0uaWRcbiAgICAgICAgICAgICAgICBwYWNrYWdlcy5sYWJfaWQ9dGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QucmVzdWx0WzBdLmxhYi5pZFxuICAgICAgICAgICAgICAgIHBhY2thZ2VzLmltZz10aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5yZXN1bHRbMF0ubGFiLmxhYl90aHVtYm5haWxcbiAgICAgICAgICAgICAgICBwYWNrYWdlcy5uYW1lPXRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdFswXS5uYW1lXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVjb21wYXJlQ3JpdGVyaWEocGFja2FnZXMpXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzICYmIHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5sZW5ndGggPjApe1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5tYXAoKHBhY2thZ2VzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwYWNrYWdlcy5pZCAhPSB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5yZXN1bHRbMF0uaWQgJiYgcGFja2FnZXMubGFiX2lkICE9IHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdFswXS5sYWIuaWQpeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQa2dDb21wYXJlSWRzLnB1c2gocGFja2FnZXMuaWQrJy0nK3BhY2thZ2VzLmxhYl9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZFBrZ0NvbXBhcmVJZHMucHVzaCh0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5yZXN1bHRbMF0uaWQrJy0nK3RoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdFswXS5sYWIuaWQpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9wYWNrYWdlL2NvbXBhcmU/cGFja2FnZV9pZHM9JytzZWxlY3RlZFBrZ0NvbXBhcmVJZHMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNDb21wYXJlOiAhdGhpcy5zdGF0ZS5pc0NvbXBhcmUgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMgJiYgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldFBrZ0NvbXBhcmUoKSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQ29tcGFyZVBhY2thZ2VzKHBhY2thZ2VJZCwgbGFiSWQsIHBja0ltZywgcGNrTmFtZSkgeyAvLyB0b2dnbGUgcGFja2FnZXMgZm9yIGNvbXBhcmlzaW9uXG4gICAgICAgIGxldCBwYWNrYWdlcyA9IHt9XG4gICAgICAgIHBhY2thZ2VzLmlkID0gcGFja2FnZUlkXG4gICAgICAgIHBhY2thZ2VzLmxhYl9pZCA9IGxhYklkXG4gICAgICAgIHBhY2thZ2VzLmltZyA9IHBja0ltZ1xuICAgICAgICBwYWNrYWdlcy5uYW1lID0gcGNrTmFtZVxuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZWNvbXBhcmVDcml0ZXJpYShwYWNrYWdlcylcbiAgICB9XG5cbiAgICBidWlsZFVSSShzdGF0ZSkgeyAvLyBidWlsZCB1cmwgd2l0aCBkaWZmZXJudCBwYXJhbXMgb3IgZGlmZmVybnQgZmlsdGVyc1xuICAgICAgICBsZXQgeyBzZWxlY3RlZExvY2F0aW9uLCBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsIGZpbHRlckNyaXRlcmlhLCBsb2NhdGlvblR5cGUsIGZpbHRlckNyaXRlcmlhUGFja2FnZXMsIHBhZ2UgfSA9IHN0YXRlXG4gICAgICAgIC8vIGxldCB0ZXN0SWRzID0gc2VsZWN0ZWRDcml0ZXJpYXMuZmlsdGVyKHggPT4geC50eXBlID09ICd0ZXN0JykubWFwKHggPT4geC5pZClcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBsZXQgcGxhY2VfaWQgPSBcIlwiXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHBsYWNlX2lkID0gc2VsZWN0ZWRMb2NhdGlvbi5wbGFjZV9pZCB8fCBcIlwiXG4gICAgICAgICAgICBsYXQgPSBzZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdFxuICAgICAgICAgICAgbG9uZyA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuXG4gICAgICAgICAgICBsYXQgPSBwYXJzZUZsb2F0KHBhcnNlRmxvYXQobGF0KS50b0ZpeGVkKDYpKVxuICAgICAgICAgICAgbG9uZyA9IHBhcnNlRmxvYXQocGFyc2VGbG9hdChsb25nKS50b0ZpeGVkKDYpKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNhdF9pZHMgPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLmNhdElkcyB8fCBcIlwiXG5cbiAgICAgICAgLypsZXQgbWluX2Rpc3RhbmNlID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5kaXN0YW5jZVJhbmdlWzBdXG4gICAgICAgIGxldCBtYXhfZGlzdGFuY2UgPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLmRpc3RhbmNlUmFuZ2VbMV1cbiAgICAgICAgbGV0IG1pbl9wcmljZSA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMucHJpY2VSYW5nZVswXVxuICAgICAgICBsZXQgbWF4X3ByaWNlID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5wcmljZVJhbmdlWzFdXG4gICAgICAgICovXG4gICAgICAgIGxldCBzb3J0X29uID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5zb3J0X29uIHx8IFwiXCJcbiAgICAgICAgbGV0IHNvcnRfb3JkZXIgPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLnNvcnRfb3JkZXIgfHwgXCJcIlxuICAgICAgICBsZXQgYXZnX3JhdGluZ3MgPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLmF2Z19yYXRpbmdzIHx8IFwiXCJcbiAgICAgICAgbGV0IGhvbWVfdmlzaXQgPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLmhvbWVfdmlzaXQgfHwgZmFsc2VcbiAgICAgICAgbGV0IGxhYl92aXNpdCA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMubGFiX3Zpc2l0IHx8IGZhbHNlXG4gICAgICAgIGxldCBsYWJfbmFtZSA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMubGFiX25hbWUgfHwgXCJcIlxuICAgICAgICBsZXQgbmV0d29ya19pZCA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMubmV0d29ya19pZCB8fCBcIlwiXG4gICAgICAgIGxldCBtYXhfYWdlID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5tYXhfYWdlIHx8IFwiXCJcbiAgICAgICAgbGV0IG1pbl9hZ2UgPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLm1pbl9hZ2UgfHwgXCJcIlxuICAgICAgICBsZXQgZ2VuZGVyID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5nZW5kZXIgfHwgXCJcIlxuICAgICAgICBsZXQgcGFja2FnZV90eXBlID0gZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcy5wYWNrYWdlVHlwZSB8fCBcIlwiXG4gICAgICAgIGxldCB0ZXN0X2lkcyA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMudGVzdF9pZHMgfHwgXCJcIlxuICAgICAgICBsZXQgcGFja2FnZV9pZHMgPSBmaWx0ZXJDcml0ZXJpYVBhY2thZ2VzLnBhY2thZ2VfaWRzIHx8IFwiXCIgICAgICAgXG4gICAgICAgIC8vIGxldCBwYWNrYWdlX2NhdGVnb3J5X2lkcyA9IGZpbHRlckNyaXRlcmlhUGFja2FnZXMucGFja2FnZV9jYXRlZ29yeV9pZHMgfHwgXCJcIlxuXG4gICAgICAgIGxldCB1cmxcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBwYWNrYWdlX2NhdGVnb3J5X2lkcyA9IHBhcnNlZC5wYWNrYWdlX2NhdGVnb3J5X2lkc1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mb3JUYXhTYXZlcikge1xuICAgICAgICAgICAgdXJsID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT9sYXQ9JHtsYXR9Jmxvbmc9JHtsb25nfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/bGF0PSR7bGF0fSZsb25nPSR7bG9uZ30mc29ydF9vbj0ke3NvcnRfb259JnNvcnRfb3JkZXI9JHtzb3J0X29yZGVyfSZhdmdfcmF0aW5ncz0ke2F2Z19yYXRpbmdzfSZob21lX3Zpc2l0PSR7aG9tZV92aXNpdH0mbGFiX3Zpc2l0PSR7bGFiX3Zpc2l0fSZsYWJfbmFtZT0ke2xhYl9uYW1lfSZwbGFjZV9pZD0ke3BsYWNlX2lkfSZsb2NhdGlvblR5cGU9JHtsb2NhdGlvblR5cGUgfHwgXCJcIn0mbmV0d29ya19pZD0ke25ldHdvcmtfaWR9JmNhdGVnb3J5X2lkcz0ke2NhdF9pZHN9Jm1pbl9hZ2U9JHttaW5fYWdlfSZtYXhfYWdlPSR7bWF4X2FnZX0mZ2VuZGVyPSR7Z2VuZGVyfSZwYWNrYWdlX3R5cGU9JHtwYWNrYWdlX3R5cGV9JnRlc3RfaWRzPSR7dGVzdF9pZHN9JnBhY2thZ2VfaWRzPSR7cGFja2FnZV9pZHN9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICAgICAgICB1cmwgKz0gYCZwYWdlPSR7cGFnZX1gXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHBhcnNlZC5wYWNrYWdlX2NhdGVnb3J5X2lkcyl7XG4gICAgICAgICAgICB1cmwgKz0gYCZwYWNrYWdlX2NhdGVnb3J5X2lkcz0ke3BhY2thZ2VfY2F0ZWdvcnlfaWRzfWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQuc2Nyb2xsYnlpZCkge1xuICAgICAgICAgICAgbGV0IHNjcm9sbGJ5X3Rlc3RfaWQgPSBwYXJzZUludChwYXJzZWQuc2Nyb2xsYnlpZClcbiAgICAgICAgICAgIGxldCBzY3JvbGxieV9sYWJfaWQgPSBwYXJzZUludChwYXJzZWQuc2Nyb2xsYnlsYWJpZClcbiAgICAgICAgICAgIC8vIHVybCArPSBgJnNjcm9sbGJ5aWQ9JHtzY3JvbGxieV90ZXN0X2lkIHx8IFwiXCJ9JnNjcm9sbGJ5bGFiaWQ9JHtzY3JvbGxieV9sYWJfaWQgfHwgXCJcIn1gXG4gICAgICAgICAgICB1cmwgKz0gYCZzY3JvbGxieWlkPSR7c2Nyb2xsYnlfdGVzdF9pZCB8fCBcIlwifWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQuaXNDb21wYXJhYmxlKSB7XG4gICAgICAgICAgICB1cmwgKz0gJyZpc0NvbXBhcmFibGU9dHJ1ZSdcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYocGFyc2VkLnV0bV90ZXJtKXtcbiAgICAgICAgICAgIHVybCArPSBgJnV0bV90ZXJtPSR7cGFyc2VkLnV0bV90ZXJtIHx8IFwiXCJ9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLnV0bV9tZWRpdW0pe1xuICAgICAgICAgICAgdXJsICs9IGAmdXRtX21lZGl1bT0ke3BhcnNlZC51dG1fbWVkaXVtIHx8IFwiXCJ9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLnV0bV9jYW1wYWlnbil7XG4gICAgICAgICAgICB1cmwgKz0gYCZ1dG1fY2FtcGFpZ249JHtwYXJzZWQudXRtX2NhbXBhaWduIHx8IFwiXCJ9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyc2VkLnV0bV9zb3VyY2Upe1xuICAgICAgICAgICAgdXJsICs9IGAmdXRtX3NvdXJjZT0ke3BhcnNlZC51dG1fc291cmNlIHx8IFwiXCJ9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXApe1xuICAgICAgICAgICAgdXJsICs9IGAkeycmc2hvd19wb3B1cD0nKyB0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cH1gXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuXG4gICAgZ2V0TWV0YVRhZ3NEYXRhKHNlb0RhdGEpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJMYWIgU2VhcmNoXCJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHRpdGxlID0gXCJcIlxuICAgICAgICB9XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IFwiXCJcbiAgICAgICAgaWYgKHNlb0RhdGEpIHtcbiAgICAgICAgICAgIHRpdGxlID0gc2VvRGF0YS50aXRsZSB8fCBcIlwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHNlb0RhdGEuZGVzY3JpcHRpb24gfHwgXCJcIlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9XG4gICAgfVxuXG4gICAgYXBwbHlRdWlja0ZpbHRlcihmaWx0ZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHF1aWNrRmlsdGVyOiBmaWx0ZXIgfSlcbiAgICB9XG5cbiAgICBub25JcGRMZWFkcyhwaG9uZV9udW1iZXIpeyAvLyBjcmVhdGUgb2Ygbm9uIGlwZCBwYWNrYWdlcyBsZWFkc1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZSh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgbGV0IHBhY2thZ2VfbmFtZSA9IG51bGxcbiAgICAgICAgaWYodGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QgJiYgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QucmVzdWx0ICYmIHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdC5sZW5ndGg+MSl7XG4gICAgICAgICAgICBwYWNrYWdlX25hbWUgPSB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5yZXN1bHRbMF0ubmFtZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHBhY2thZ2VfbmFtZSA9ICdIZWFsdGggUGFja2FnZXMnXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSh7cGhvbmVfbnVtYmVyOnBob25lX251bWJlcixsZWFkX3NvdXJjZTonTGFiYWRzJyxzb3VyY2U6cGFyc2VkLGxlYWRfdHlwZTonTEFCQURTJyx0ZXN0X25hbWU6cGFja2FnZV9uYW1lLGV4aXRwb2ludF91cmwgOiAnaHR0cDovL2RvY3ByaW1lLmNvbScgKyB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lfSlcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fdXRtX3RhZ3MubGVuZ3RoKXtcbiAgICAgICAgICAgIGRhdGEudXRtX3RhZ3MgPSB0aGlzLnByb3BzLmNvbW1vbl91dG1fdGFncy5maWx0ZXIoeD0+eC50eXBlID09IFwiY29tbW9uX3h0cmFfdGFnc1wiKVswXS51dG1fdGFnc1xuICAgICAgICB9XG4gICAgICAgIGxldCB2aXNpdG9yX2luZm8gPSBHVE0uZ2V0VmlzaXRvckluZm8oKVxuICAgICAgICAgICAgaWYodmlzaXRvcl9pbmZvICYmIHZpc2l0b3JfaW5mby52aXNpdF9pZCl7XG4gICAgICAgICAgICAgICAgZGF0YS52aXNpdF9pZCA9IHZpc2l0b3JfaW5mby52aXNpdF9pZFxuICAgICAgICAgICAgICAgIGRhdGEudmlzaXRvcl9pZCA9IHZpc2l0b3JfaW5mby52aXNpdG9yX2lkXG4gICAgICAgICAgICB9XG4gICAgICAgIGxldCBndG1fZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnTm9uSXBkUGFja2FnZUxpc3RpbmdTdWJtaXRDbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnZXZlbnQnOiAnbm9uLWlwZC1wYWNrYWdlLWxpc3Rpbmctc3VibWl0LWNsaWNrJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBndG1fZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLnNhdmVMZWFkUGhuTnVtYmVyKHBob25lX251bWJlcilcbiAgICAgICBpZih0aGlzLnN0YXRlLmlzX2xlYWRfZW5hYmxlZCAmJiAhU1RPUkFHRS5pc0FnZW50KCkpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNfbGVhZF9lbmFibGVkOmZhbHNlfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuTm9uSXBkQm9va2luZ0xlYWQoZGF0YSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX2xlYWRfZW5hYmxlZDp0cnVlfSlcbiAgICAgICAgICAgIH0sIDUwMDApXG4gICAgICAgIH1cbiAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iZV9mb3JjZTowfSlcbiAgICB9XG5cbiAgICBjbG9zZUlwZExlYWRQb3B1cChmcm9tKXtcbiAgICAgICAgaWYoZnJvbSl7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdOb25JcGRQYWNrYWdlTGlzdGluZ0Nyb3NzQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2V2ZW50JzogJ25vbi1pcGQtcGFja2FnZS1saXN0aW5nLWNyb3NzLWNsaWNrJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iZV9mb3JjZTowfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzU2Nyb2xsKXtcbiAgICAgICAgICAgIGxldCBzY3JvbGxieV90ZXN0X2lkID0gcGFyc2VJbnQocGFyc2VkLnNjcm9sbGJ5aWQpXG4gICAgICAgICAgICBsZXQgc2Nyb2xsYnlfbGFiX2lkID0gcGFyc2VJbnQocGFyc2VkLnNjcm9sbGJ5bGFiaWQpXG4gICAgICAgICAgICAvLyBsZXQgdXJsX2lkPSBgc2Nyb2xsQnlJZF8ke3Njcm9sbGJ5X3Rlc3RfaWR9XyR7c2Nyb2xsYnlfbGFiX2lkfWBcbiAgICAgICAgICAgIGxldCB1cmxfaWQ9IGBzY3JvbGxCeUlkXyR7c2Nyb2xsYnlfdGVzdF9pZH1gXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiB3aW5kb3cgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgZG9jdW1lbnQgPT0gXCJvYmplY3RcIiAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1cmxfaWQpICkge1xuICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVybF9pZCkub2Zmc2V0VG9wKzI1MClcbiAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe2lzU2Nyb2xsOmZhbHNlfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgaXNDb21wYXJlZCA9IGZhbHNlXG5cbiAgICAgICAgaWYgKHBhcnNlZC5pc0NvbXBhcmFibGUpIHtcbiAgICAgICAgICAgIGlzQ29tcGFyZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8SGVsbWV0VGFncyB0YWdzRGF0YT17e1xuICAgICAgICAgICAgICAgICAgICBjYW5vbmljYWxVcmw6IGAke0NPTkZJRy5BUElfQkFTRV9VUkx9L2Z1bGwtYm9keS1jaGVja3VwLWhlYWx0aC1wYWNrYWdlc2AsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBgJHt0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC50aXRsZSB8fCAnJ31gLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYCR7dGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuZGVzY3JpcHRpb24gfHwgJyd9YFxuICAgICAgICAgICAgICAgIH19IG5vSW5kZXg9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLyoodGhpcy5zdGF0ZS5zaG93Tm9uSXBkUG9wdXAgPT0gMSB8fCB0aGlzLnN0YXRlLnNob3dOb25JcGRQb3B1cCA9PSAyKSAmJiB0aGlzLnByb3BzLkxPQURFRF9MQUJTX1NFQVJDSCAmJiB0aGlzLnN0YXRlLnRvX2JlX2ZvcmNlID09IDE/XG4gICAgICAgICAgICAgICAgICAgIDxOb25JcGRQb3B1cFZpZXcgey4uLnRoaXMucHJvcHN9IG5vbklwZExlYWRzPXt0aGlzLm5vbklwZExlYWRzLmJpbmQodGhpcyl9IGNsb3NlSXBkTGVhZFBvcHVwID0ge3RoaXMuY2xvc2VJcGRMZWFkUG9wdXAuYmluZCh0aGlzKX0gaXNfZm9yY2U9e3RoaXMuc3RhdGUuc2hvd05vbklwZFBvcHVwfSBpc19sYWI9e2ZhbHNlfSAgaXNfcGFja2FnZT17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgICAgICA6JycqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8Q3JpdGVyaWFTZWFyY2ggey4uLnRoaXMucHJvcHN9IGNoZWNrRm9yTG9hZD17dGhpcy5wcm9wcy5MT0FERURfTEFCU19TRUFSQ0ggfHwgdGhpcy5zdGF0ZS5zaG93RXJyb3J9IHRpdGxlPVwiU2VhcmNoIGZvciBUZXN0IGFuZCBMYWJzLlwiIGdvQmFjaz17dHJ1ZX0gbGFiX2NhcmQ9eyEhdGhpcy5zdGF0ZS5sYWJfY2FyZH0gbmV3Q2hhdEJ0bj17dHJ1ZX0gc2VhcmNoUGFja2FnZXM9e3RydWV9IGJvdHRvbV9jb250ZW50PXt0aGlzLnByb3BzLnBhY2thZ2VzTGlzdCAmJiB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jb3VudCA+IDAgJiYgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuYm90dG9tX2NvbnRlbnQgJiYgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuYm90dG9tX2NvbnRlbnQgIT0gbnVsbCAmJiB0aGlzLnByb3BzLmZvck9yZ2FuaWNTZWFyY2ggPyB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5ib3R0b21fY29udGVudCA6ICcnfSBwYWdlPXsxfSBpc1BhY2thZ2U9e3RydWV9PlxuICAgICAgICAgICAgICAgICAgICA8VG9wQmFyIHsuLi50aGlzLnByb3BzfSBhcHBseUZpbHRlcnM9e3RoaXMuYXBwbHlGaWx0ZXJzLmJpbmQodGhpcyl9IGFwcGx5Q2F0ZWdvcmllcz17dGhpcy5hcHBseUNhdGVnb3JpZXMuYmluZCh0aGlzKX0gc2VvRGF0YT17dGhpcy5zdGF0ZS5zZW9EYXRhfSBsYWJfY2FyZD17ISF0aGlzLnN0YXRlLmxhYl9jYXJkfSBjb21wYXJlUGFja2FnZT17dGhpcy5jb21wYXJlUGFja2FnZS5iaW5kKHRoaXMpfSBpc0NvbXBhcmU9e3RoaXMuc3RhdGUuaXNDb21wYXJlfSBpc0NvbXBhcmVkPXtpc0NvbXBhcmVkfSBxdWlja0ZpbHRlcj17dGhpcy5zdGF0ZS5xdWlja0ZpbHRlcn0gcmVzZXRRdWlja0ZpbHRlcnM9e3RoaXMucmVzZXRRdWlja0ZpbHRlcnMuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QgJiYgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QucmVzdWx0ICYmIHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdC5sZW5ndGg9PTA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjYXJkTWFpblBhZGRpbmdSbXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1jYXJkLWNvbnRhaW5lciBtdC0yMCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLW5vLXJlc3VsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLW4tcnNsdFwiPk5vIHJlc3VsdCBmb3VuZCE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm4tcnNsdC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL25vLXJlc3VsdC5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLXR5LWFnbiBjdXJzb3ItcG50clwiIG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlci5iaW5kKHRoaXMsIHtjYXRJZDogW10sdmlld01vcmU6IHRydWV9KX0+VHJ5IGFnYWluIHdpdGggZmV3ZXIgZmlsdGVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDo8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc3VsdENvdW50IHsuLi50aGlzLnByb3BzfSBhcHBseUZpbHRlcnM9e3RoaXMuYXBwbHlGaWx0ZXJzLmJpbmQodGhpcyl9IGFwcGx5Q2F0ZWdvcmllcz17dGhpcy5hcHBseUNhdGVnb3JpZXMuYmluZCh0aGlzKX0gc2VvRGF0YT17dGhpcy5zdGF0ZS5zZW9EYXRhfSBsYWJfY2FyZD17ISF0aGlzLnN0YXRlLmxhYl9jYXJkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWNrYWdlc0xpc3RzIHsuLi50aGlzLnByb3BzfSBhcHBseUZpbHRlcnM9e3RoaXMuYXBwbHlGaWx0ZXJzLmJpbmQodGhpcyl9IGdldExhYkxpc3Q9e3RoaXMuZ2V0TGFiTGlzdC5iaW5kKHRoaXMpfSBsYWJfY2FyZD17ISF0aGlzLnN0YXRlLmxhYl9jYXJkfSBpc0NvbXBhcmU9e3RoaXMuc3RhdGUuaXNDb21wYXJlfSB0b2dnbGVDb21wYXJlUGFja2FnZXM9e3RoaXMudG9nZ2xlQ29tcGFyZVBhY2thZ2VzLmJpbmQodGhpcyl9IGlzQ29tcGFyZWQ9e2lzQ29tcGFyZWR9IGFwcGx5UXVpY2tGaWx0ZXI9e3RoaXMuYXBwbHlRdWlja0ZpbHRlci5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+ICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Dcml0ZXJpYVNlYXJjaD5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIGZvb3RlckRhdGE9e3RoaXMuc3RhdGUuZm9vdGVyRGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFja2FnZXNWaWV3XG4iLCJpbXBvcnQgU2VhcmNoUGFja2FnZXNWaWV3IGZyb20gJy4vU2VhcmNoUGFja2FnZXNWaWV3LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWNrYWdlc1ZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGFja2FnZVByb2ZpbGVDYXJkIGZyb20gJy4uLy4uL2NvbW1vbnMvbGFiUHJvZmlsZUNhcmQvcGFja2FnZVByb2ZpbGVDYXJkLmpzJ1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbGVyJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9Mb2FkZXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtJ1xuaW1wb3J0IEJhbm5lckNhcm91c2VsIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvSG9tZS9iYW5uZXJDYXJvdXNlbC5qcyc7XG5pbXBvcnQgU2VsZWN0ZWRQa2dTdHJpcCBmcm9tICcuL3NlbGVjdGVkUGtnU3RyaXAuanMnXG5cbmNsYXNzIHBhY2thZ2VzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoYXNNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcmVuZGVyQmxvY2s6IGZhbHNlLFxuICAgICAgICAgICAgcGFnZTogMCxcbiAgICAgICAgICAgIHJlYWRNb3JlOiAnc2VhcmNoLWRldGFpbHMtZGF0YS1sZXNzJyxcbiAgICAgICAgICAgIGNhdElkczogW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQmVsb3cgY29kZSBlbnN1cmVzIHNtb290aCBiYWNrIHBhZ2UgdHJhbnNpdGlvbnMgaW4gY2FzZSBvZiBodWdlIGRhdGEgc2V0cywgYW5kIG1haW50YWlucyBzY3JvbGwgcG9zaXRpb24uXG4gICAgICAgICAqIHJlbmRlckJsb2NrID0gdHJ1ZSAoYnkgZGVmYXVsdCkgd2lsbCBibG9jayByZW5kZXIgdW50aWwgdGhlIHBhZ2UgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZWQsIGFuZCBvbmNlIGl0cyBkb25lLCBpdCB3aWxsIHRoZW4gcmVuZGVyIGFuZCBzZXQgc2Nyb2xsIHBvc2l0aW9uIGFjY29yZGluZ2x5XG4gICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWZzLmNoZWNrSWZFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyQmxvY2s6IGZhbHNlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxfcG9zID0gd2luZG93LkxBQl9TQ1JPTExfUE9TID8gKHdpbmRvdy5MQUJfU0NST0xMX1BPUykgOiAwXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGltcHJvdmUgc2Nyb2xsIGJhY2sgbG9naWNcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbF9wb3MgfHwgMClcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LkxBQl9TQ1JPTExfUE9TID0gMFxuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5MQUJfU0NST0xMX1BPUyA9IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9LCAxMDApXG4gICAgICAgIFxuICAgICAgICAqL1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYVBhY2thZ2VzIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmU6IHRydWUgfSlcbiAgICAgICAgfSwgMClcblxuICAgICAgICBsZXQgc2VsZWN0ZWRMb2NhdGlvbiA9ICcnXG4gICAgICAgIGxldCBsYXQgPSAyOC42NDQ4MDBcbiAgICAgICAgbGV0IGxvbmcgPSA3Ny4yMTY3MjFcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbiA9IHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbjtcbiAgICAgICAgICAgIGxhdCA9IHNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gc2VsZWN0ZWRMb2NhdGlvbi5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGF0ID09PSAnZnVuY3Rpb24nKSBsYXQgPSBsYXQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb25nID09PSAnZnVuY3Rpb24nKSBsb25nID0gbG9uZygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmdldE9mZmVyTGlzdChsYXQsIGxvbmcpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmZpbHRlckNyaXRlcmlhUGFja2FnZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRJZHM6IHByb3BzLmZpbHRlckNyaXRlcmlhUGFja2FnZXMuY2F0SWRzIHx8IFtdIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYlNlYXJjaFBhZ2luYXRpb24nLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdsYWItc2VhcmNoLXBhZ2luYXRpb24nLCAnUGFnZXMnOiB0aGlzLnN0YXRlLnBhZ2VcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAvLyBpZiAod2luZG93KSB7XG4gICAgICAgIC8vICAgICB3aW5kb3cub25zY3JvbGwgPSBudWxsXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBnZXRMb2NhdGlvblBhcmFtKHRhZykge1xuICAgICAgICAvLyB0aGlzIEFQSSBhc3N1bWVzIHRoZSBjb250ZXh0IG9mIHJlYWN0LXJvdXRlci00XG4gICAgICAgIGNvbnN0IHBhcmFtU3RyaW5nID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2hcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbVN0cmluZylcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5nZXQodGFnKVxuICAgIH1cblxuICAgIGxvYWRNb3JlKHBhZ2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmU6IGZhbHNlLCBsb2FkaW5nOiB0cnVlLCBwYWdlOiBwYWdlIH0pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5nZXRMYWJMaXN0KG51bGwsIHBhZ2UgKyAxLCAoaGFzTW9yZSkgPT4geyAvL2dldCBzZWFyY2hlZCBwYWNrYWdlcyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmUgfSlcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHRlc3RJbmZvKCkgeyAvLyByZWRpcmVjdCB0byBpbmNsdWRlZCB0ZXN0IGRldGFpbHMgcGFnZVxuICAgICAgICB2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcbiAgICAgICAgdmFyIHRlc3RfaWRzID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ0ZXN0X2lkc1wiKTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9zZWFyY2gvdGVzdGluZm8/dGVzdF9pZHM9JyArIHRlc3RfaWRzICsgJyZmcm9tPXNlYXJjaHJlc3VsdHMnKVxuICAgIH1cbiAgICB0b2dnbGVTY3JvbGwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWFkTW9yZTogJ3NlYXJjaC1kZXRhaWxzLWRhdGEtbGVzcycgfSlcbiAgICB9XG4gICAgc2hvd1RjKCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3RheC1zYXZlci1oZWFsdGgtcGFja2FnZXMtdGMnKVxuICAgIH1cblxuICAgIGFwcGx5UXVpY2tGaWx0ZXJzKGNhdGVnb3J5LCB2aWV3TW9yZSA9IGZhbHNlKSB7XG4gICAgICAgIC8vIGFwcGx5IGZpbHRlcnNcbiAgICAgICAgbGV0IGZpbHRlcnMgPSB7XG4gICAgICAgICAgICBjYXRJZDogdmlld01vcmUgPyBbXSA6IFtjYXRlZ29yeV0sXG4gICAgICAgICAgICB2aWV3TW9yZTogdmlld01vcmVcbiAgICAgICAgfVxuICAgICAgICBsZXQgZ3RtRGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdQYWNrYWdlUXVpY2tGaWx0ZXJDbGlja2VkJywgJ0FjdGlvbic6ICdQYWNrYWdlUXVpY2tGaWx0ZXJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncGFja2FnZS1xdWljay1maWx0ZXItY2xpY2tlZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICd0eXBlJzogY2F0ZWdvcnlcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZ3RtRGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmFwcGx5UXVpY2tGaWx0ZXIoZmlsdGVycylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IExBQlMsIGxhYkxpc3QgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBsZXQgc3RhcnRfcGFnZSA9IDBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3Vycl9wYWdlKSB7XG4gICAgICAgICAgICBzdGFydF9wYWdlID0gTWF0aC5tYXgoMCwgdGhpcy5wcm9wcy5jdXJyX3BhZ2UgLSAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucGFnZSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0X3BhZ2UgPSBNYXRoLm1heCgwLCB0aGlzLnByb3BzLnBhZ2UgLSAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwa2dUb3N0XCIpICE9PSBudWxsKXtcbiAgICAgICAgLy8gICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgLy8gICAgICAgaWYgKGN1cnJlbnRTY3JvbGxQb3MgPT0gMCkge1xuICAgICAgICAvLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGtnVG9zdFwiKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwa2dUb3N0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgLy8gICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXAgc2VhcmNoLWJvb2stcmVzdWx0IHZhcmlhYmxlLWNvbnRlbnQtc2VjdGlvblwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDEwIH19IHJlZj1cImNoZWNrSWZFeGlzdHNcIj5cbiAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMuZm9yT3JnYW5pY1NlYXJjaCAmJiAhdGhpcy5wcm9wcy5mb3JUYXhTYXZlciA/IDxkaXYgY2xhc3NOYW1lPVwicGtnVG9zdCBkLW5vbmVcIiBpZD1cInBrZ1Rvc3RcIj48cCBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2hlYWx0aC1wYWNrYWdlLWFkdmlzb3InKX0+TmVlZCBIZWxwIGluIEJvb2tpbmcgSGVhbHRoIFBhY2thZ2U/IDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVuZGVyQmxvY2sgPyA8TG9hZGVyIC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNhcmRNYWluUGFkZGluZ1JtdlwiIHN0eWxlPXt7IG1pbkhlaWdodDogJzYwdmgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JPcmdhbmljU2VhcmNoICYmIHRoaXMucHJvcHMucGFja2FnZXNMaXN0ICYmIHRoaXMucHJvcHMucGFja2FnZXNMaXN0LmNvdW50ID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtY2FyZC1jb2xscGFzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnJlYWRNb3JlfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnNlYXJjaF9jb250ZW50IH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlYWRNb3JlICYmIHRoaXMuc3RhdGUucmVhZE1vcmUgIT0gJycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZC1tb3JlXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHJlYWRNb3JlOiAnJyB9KX0+UmVhZCBNb3JlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVhZE1vcmUgPT0gJycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZC1tb3JlXCIgb25DbGljaz17dGhpcy50b2dnbGVTY3JvbGwuYmluZCh0aGlzKX0+UmVhZCBMZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZm9yVGF4U2F2ZXIgPyA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXhCYW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9pbWFnZXMvYXJ0Ym9hcmQxMjQzLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGF4Q29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgPGltZyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgbWFyZ2luVG9wOiAnM3B4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9pbmZvLnN2Z1wifSAvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGF4Q29udGVudFBhcmFcIj5Cb29rIFByZXZlbnRpdmUgSGVhbHRoY2FyZSBQYWNrYWdlcyBmb3IgeW91IGFuZCB5b3VyIGZhbWlseSBhbmQgZ2V0IGEgdGF4IGJlbmVmaXQgdXB0byA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT7igrkgNTAwMDwvc3Bhbj4gdW5kZXIgc2VjdGlvbiA4MEQgb2YgdGhlIEluY29tZSBUYXggQWN0LiBUbyBrbm93IG1vcmUgPHNwYW4gY2xhc3NOYW1lPVwidGF4Q2xpY2tidG5cIiBvbkNsaWNrPXt0aGlzLnNob3dUYy5iaW5kKHRoaXMpfT4gY2xpY2sgaGVyZTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZmluaXRlU2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVN0YXJ0PXtzdGFydF9wYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb3JlPXt0aGlzLmxvYWRNb3JlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTW9yZT17dGhpcy5zdGF0ZS5oYXNNb3JlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVdpbmRvdz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGFja2FnZXNMaXN0ICYmIHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdCA/IHRoaXMucHJvcHMucGFja2FnZXNMaXN0LnJlc3VsdC5tYXAoKHBhY2thZ2VzLCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9PSAzICYmICF0aGlzLnN0YXRlLmNhdElkcy5sZW5ndGggJiYgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QgJiYgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY2F0ZWdvcmllcyAmJiB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LXN1Yi1maWx0ZXItY29udGFpbmVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmlsdGVyIGJ5IDxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMFwiPiBUZXN0IENhdGVnb3J5IDwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmdy01MDAgc29ydC1tb3JlLWZpbHRlclwiIG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlcnMuYmluZCh0aGlzLCAnJywgdHJ1ZSl9Pk1vcmUgZmlsdGVyczwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3J0LXNiLWJ0bi1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGtleT17an0gY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLmNhdElkcyAmJiB0aGlzLnN0YXRlLmNhdElkcy5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xID8gJ3NydC1hY3QnIDogJyd9YH0gaWQ9e2NhdGVnb3J5LmlkfSBvbkNsaWNrPXt0aGlzLmFwcGx5UXVpY2tGaWx0ZXJzLmJpbmQodGhpcywgY2F0ZWdvcnkuaWQsIGZhbHNlKX0+IHtjYXRlZ29yeS5uYW1lfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPT0gNSAmJiB0aGlzLnByb3BzLm9mZmVyTGlzdCAmJiB0aGlzLnByb3BzLm9mZmVyTGlzdC5maWx0ZXIoeCA9PiAoeC5zbGlkZXJfbG9jYXRpb24gPT09ICdzZWFyY2hfcGFja2FnZXNfcGFnZScpIHx8ICh4LnNsaWRlcl9sb2NhdGlvbiA9PT0gJ2Z1bGxfYm9keV9jaGVjaGt1cF9wYWdlJykgfHwgKHguc2xpZGVyX2xvY2F0aW9uID09PSAndGF4X3NhdmVyX3BhY2thZ2VzX3BhZ2UnKSkubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250LWhlaWdodCBob21lLXBhZ2UtYmFubmVyLWRpdiBtYi0zIG1yLTAgYmFubmVyLW1kLW1hcmduXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVyQmFubmVyIGJhbm5lci1jYXJvdXNlbC1kaXYgZC1tZC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkhlaWdodCBtLTBcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNXB4IWltcG9ydGFudFwiIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lckNhcm91c2VsIHsuLi50aGlzLnByb3BzfSBzbGlkZXJMb2NhdGlvbj17dGhpcy5wcm9wcy5mb3JUYXhTYXZlciA/IFwidGF4X3NhdmVyX3BhY2thZ2VzX3BhZ2VcIiA6IHRoaXMucHJvcHMuZm9yT3JnYW5pY1NlYXJjaCA/ICdmdWxsX2JvZHlfY2hlY2hrdXBfcGFnZScgOiAnc2VhcmNoX3BhY2thZ2VzX3BhZ2UnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPXtgc2Nyb2xsQnlJZF8ke3BhY2thZ2VzLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhY2thZ2VQcm9maWxlQ2FyZCB7Li4udGhpcy5wcm9wc30gZGV0YWlscz17cGFja2FnZXN9IGtleT17aX0gcmFuaz17aX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTdGFydD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZT17dGhpcy5sb2FkTW9yZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU9e3RoaXMuc3RhdGUuaGFzTW9yZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VXaW5kb3c9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiTGlzdC5tYXAoKGxhYklkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDEgJiYgTEFCU1tsYWJJZF0pIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXJpc2stY29udGFpbmVyIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1yc2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnNrLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ncm91cC05OC5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyc2stY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJyc2staGRuZ1wiPkFtYXppbmcgU2F2aW5ncy4uLiBObyBSaXNrcyE8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyc2stbHN0bmcgZmZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxzdC1iZnJcIj5VcHRvIDUwJSBPZmYgb24gZG9jdG9yIGFuZCBsYWIgYm9va2luZ3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibHN0LWJmclwiPjEwMCUgbW9uZXkgYmFjayBndWFyYW50ZWUgLSAgTm8gcXVlc3Rpb25zITwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGFiX2NhcmQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYlJlc3VsdENhcmQgey4uLnRoaXMucHJvcHN9IGRldGFpbHM9e0xBQlNbbGFiSWRdfSBrZXk9e2l9IHJhbms9e2l9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxMYWJQcm9maWxlQ2FyZCB7Li4udGhpcy5wcm9wc30gZGV0YWlscz17TEFCU1tsYWJJZF19IGtleT17aX0gcmFuaz17aX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKExBQlNbbGFiSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJfY2FyZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYlJlc3VsdENhcmQgey4uLnRoaXMucHJvcHN9IGRldGFpbHM9e0xBQlNbbGFiSWRdfSBrZXk9e2l9IHJhbms9e2l9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8TGFiUHJvZmlsZUNhcmQgey4uLnRoaXMucHJvcHN9IGRldGFpbHM9e0xBQlNbbGFiSWRdfSBrZXk9e2l9IHJhbms9e2l9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGVyIGNsYXNzVHlwZT1cImxvYWRlclBhZ2luYXRpb25cIiAvPiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5pc0NvbXBhcmVkICYmICh0aGlzLnByb3BzLmlzQ29tcGFyZSB8fCB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoID4gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGVkUGtnU3RyaXAgey4uLnRoaXMucHJvcHN9IHRvZ2dsZUNvbXBhcmVQYWNrYWdlcz17dGhpcy5wcm9wcy50b2dnbGVDb21wYXJlUGFja2FnZXMuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHBhY2thZ2VzTGlzdFxuIiwiaW1wb3J0IFBhY2thZ2VzTGlzdHMgZnJvbSAnLi9QYWNrYWdlc0xpc3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IFBhY2thZ2VzTGlzdHMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEluaXRpYWxzUGljdHVyZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2luaXRpYWxzUGljdHVyZSdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0uanMnXG5cbmltcG9ydCB7IGJ1aWxkT3BlbkJhbm5lciB9IGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvdXRpbHMuanMnXG5pbXBvcnQgU1RPUkFHRSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL3N0b3JhZ2UnXG5pbXBvcnQgeyBYX09LIH0gZnJvbSAnY29uc3RhbnRzJztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuXG5jbGFzcyBTZWxlY3RlZFBrZ1N0cmlwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBjaGVja2VkOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wYXJlUGFja2FnZXMoKXtcbiAgICAgICAgbGV0IHNlbGVjdGVkUGtnQ29tcGFyZUlkcz1bXVxuICAgICAgICAgIGlmKHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyl7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5tYXAoKHBhY2thZ2VzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFBrZ0NvbXBhcmVJZHMucHVzaChwYWNrYWdlcy5pZCsnLScrcGFja2FnZXMubGFiX2lkKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnQ29tcGFyaXNvbicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NvbXBhcmlzb24tYnV0dG9uJywgJ3NlbGVjdGVkX3Rlc3RfaWQnOiBzZWxlY3RlZFBrZ0NvbXBhcmVJZHNcbiAgICAgICAgICB9XG4gICAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9wYWNrYWdlL2NvbXBhcmU/cGFja2FnZV9pZHM9JytzZWxlY3RlZFBrZ0NvbXBhcmVJZHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJlLXBhY2thZ2UtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMgJiYgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA+IDA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbXBhcmUtcGFja2FnZXNcIiArICh0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMgJiYgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA9PSAxID8gJyBjb21wYXJlLXBhY2thZ2VzLW9uZSc6dGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA9PTIgPycgY29tcGFyZS1wYWNrYWdlcy10d28nOnRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5sZW5ndGggPT0gMz8nIGNvbXBhcmUtcGFja2FnZXMtdGhyZWUnOnRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5sZW5ndGggPT0gND8nIGNvbXBhcmUtcGFja2FnZXMtZm91cic6JycpfT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5tYXAoKHBhY2thZ2VzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltYWdlcy9wYWNrYWdlQ29tcGFyZS9yZWQtY3V0LnBuZ1wifSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJlbmQtZGl2XCIgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGVDb21wYXJlUGFja2FnZXMuYmluZCh0aGlzLHBhY2thZ2VzLmlkLHBhY2thZ2VzLmxhYl9pZCxwYWNrYWdlcy5pbWcscGFja2FnZXMubmFtZSl9Lz4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgezxpbWcgY2xhc3NOYW1lPVwiZmx0ci11c3ItaW1hZ2UtbGFiXCIgc3JjPXtwYWNrYWdlcy5pbWd9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBrZ1N0cmlwTm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFja2FnZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1tb3JlLXBhY2thZ2UgY29tcGFyZS1wYWNrYWdlLW5vd1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5sZW5ndGggPj0xP3RoaXMuY29tcGFyZVBhY2thZ2VzLmJpbmQodGhpcyk6Jyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q29tcGFyZSBOb3cge3RoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcyAmJiB0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMubGVuZ3RoPjA/YCgke3RoaXMucHJvcHMuY29tcGFyZV9wYWNrYWdlcy5sZW5ndGh9KWA6Jyd9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOicnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGVkUGtnU3RyaXBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5cbmNsYXNzIENhdGVnb3J5UG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYW5jaG9yRWw6IG51bGwsXG4gICAgICAgICAgICBvcGVuRmlsdGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHByaWNlUmFuZ2U6IFswLCAyMDAwMF0sXG4gICAgICAgICAgICBkaXN0YW5jZVJhbmdlOiBbMCwgMTVdLFxuICAgICAgICAgICAgc29ydF9vbjogbnVsbCxcbiAgICAgICAgICAgIHNob3J0VVJMOiBcIlwiLFxuICAgICAgICAgICAgZHJvcGRvd25fdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBvdmVybGF5VmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93UG9wdXBDb250YWluZXI6IHRydWUsXG4gICAgICAgICAgICBzb3J0VGV4dDogJ1JlbGV2YW5jZScsXG4gICAgICAgICAgICBvcGVuQ2F0ZWdvcnk6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRDYXRJZHM6W10sXG4gICAgICAgICAgICBzZWxlY3RlZEFsbENhdElkc0ludGlhbDpbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkQ2F0SWRzTGVuZzonJyxcbiAgICAgICAgICAgIGlzX2FwcGxpZWQ6dHJ1ZSxcbiAgICAgICAgICAgIHNlbGVjdEFsbGNhdGVnb3J5OltdXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgbGV0IHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2F0SWRzXG4gICAgICAgIGxldCBzZWxlY3RBbGxjYXRlZ29yeUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0QWxsY2F0ZWdvcnlcbiAgICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3JpZXMsIGkpID0+IHtcbiAgICAgICAgICAgIGlmKGNhdGVnb3JpZXMuaXNfc2VsZWN0ZWQpe1xuICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkcy5wdXNoKGNhdGVnb3JpZXMuaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RBbGxjYXRlZ29yeUlkcy5wdXNoKGNhdGVnb3JpZXMuaWQpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEFsbENhdElkc0ludGlhbDpzZWxlY3RlZENhdGVnb3J5SWRzLHNlbGVjdGVkQ2F0SWRzTGVuZzpzZWxlY3RlZENhdGVnb3J5SWRzLmxlbmd0aCwgc2VsZWN0QWxsY2F0ZWdvcnk6c2VsZWN0QWxsY2F0ZWdvcnlJZHN9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnByb3BzLmluaXRpYWxTZWxlY3RlZENhdGVnb3J5KHNlbGVjdGVkQ2F0ZWdvcnlJZHMpXG4gICAgfVxuICAgIGFwcGx5QWxsQ2F0ZWdvcnkoKXtcbiAgICAgICAgbGV0IHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSB0aGlzLnN0YXRlLnNlbGVjdEFsbGNhdGVnb3J5XG4gICAgICAgIGlmKHRoaXMucHJvcHMucGFja2FnZXNMaXN0LmNhdGVnb3JpZXNfY291bnQgPT0gdGhpcy5zdGF0ZS5zZWxlY3RlZENhdElkc0xlbmcpe1xuICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9IFtdXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9IHRoaXMuc3RhdGUuc2VsZWN0QWxsY2F0ZWdvcnlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZENhdElkczogc2VsZWN0ZWRDYXRlZ29yeUlkcyxzZWxlY3RlZENhdElkc0xlbmc6c2VsZWN0ZWRDYXRlZ29yeUlkcy5sZW5ndGh9KVxuICAgIH1cbiAgICB0b2dnbGVUZXN0KGNhdGVnb3J5KXtcbiAgICAgICAgbGV0IHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2F0SWRzXG4gICAgICAgIGlmKGNhdGVnb3J5KXtcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkQ2F0ZWdvcnlJZHMuaW5kZXhPZihjYXRlZ29yeSk+LTEpe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSBzZWxlY3RlZENhdGVnb3J5SWRzLmZpbHRlcih4PT54IT1jYXRlZ29yeSkgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5SWRzLnB1c2goY2F0ZWdvcnkpICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkQ2F0SWRzOiBzZWxlY3RlZENhdGVnb3J5SWRzLHNlbGVjdGVkQ2F0SWRzTGVuZzpzZWxlY3RlZENhdGVnb3J5SWRzLmxlbmd0aH0pXG4gICAgfVxuICAgIGFwcGx5Q2F0ZWdvcmllcygpe1xuICAgICAgICBsZXQgY2F0ZWdvcnlTdGF0ZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRDYXRJZHNcbiAgICAgICAgdGhpcy5wcm9wcy5hcHBseUNhdGVnb3JpZXMoY2F0ZWdvcnlTdGF0ZSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgaXNTZWxlY3RlZCA9IFtdXG4gICAgICAgIGxldCB1blNlbGVjdGVkID0gW11cbiAgICAgICAgbGV0IGlzU2VsZWN0ZWRDYXQ9W11cbiAgICAgICAgbGV0IHVuU2VsZWN0ZWRDYXQ9W11cbiAgICAgICAgaWYodGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY2F0ZWdvcmllcyAmJiB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jYXRlZ29yaWVzLmxlbmd0aD4wKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucGFja2FnZXNMaXN0LmNhdGVnb3JpZXMubWFwKChjYXRlZ29yaWVzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoY2F0ZWdvcmllcy5pc19zZWxlY3RlZCl7XG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQucHVzaChjYXRlZ29yaWVzKVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB1blNlbGVjdGVkLnB1c2goY2F0ZWdvcmllcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYoaXNTZWxlY3RlZC5sZW5ndGg+MCl7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQubWFwKChjYXRlZ29yaWVzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWRDYXQucHVzaCg8bGkgIGNsYXNzTmFtZT1cInByLTBcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IDE0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZENhdElkcy5pbmRleE9mKGNhdGVnb3JpZXMuaWQpID4gLTF9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRlc3QuYmluZCh0aGlzLCBjYXRlZ29yaWVzLmlkKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodW5TZWxlY3RlZC5sZW5ndGg+MCl7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVuU2VsZWN0ZWQubWFwKChjYXRlZ29yaWVzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVuU2VsZWN0ZWRDYXQucHVzaCg8bGkgIGNsYXNzTmFtZT1cInByLTBcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjay1ieFwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IDE0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZENhdElkcy5pbmRleE9mKGNhdGVnb3JpZXMuaWQpID4gLTF9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRlc3QuYmluZCh0aGlzLCBjYXRlZ29yaWVzLmlkKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWwtb3ZlcmxheSBjYW5jZWwtb3ZlcmxheS16aW5kZXhcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGNhbmNlbC1hcHBvaW50bWVudC1kaXYgY2FuY2VsLXBvcHVwXCI+ICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wLXRvcC1oZWFkaW5nIG1iLTAgcGItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBDYXRlZ29yaWVzICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcicsIG1hcmdpblJpZ2h0OiAnMTBweCd9fSBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlQ2F0ZWdvcnkuYmluZCh0aGlzKX0+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9ydC1jbG9zZS5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE0IH19IC8+PC9zcGFuPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXJtcy1jb25kaXRpb24tZGl2IHB0LTBcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtZm9ybS1yYWRpbyBpbnNyYWRpby1vbi1wb3B1cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QgYWxsLXRlc3QtbGlzdCBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiAxNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IEFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY2F0ZWdvcmllc19jb3VudCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkQ2F0SWRzTGVuZ30gb25DaGFuZ2U9e3RoaXMuYXBwbHlBbGxDYXRlZ29yeS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzU2VsZWN0ZWRDYXR9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dW5TZWxlY3RlZENhdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvY2VkdXJlcy1idG4tcG9wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hcHBseUNhdGVnb3JpZXMuYmluZCh0aGlzKX0+QXBwbHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlQb3B1cCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJhbmdlIGZyb20gJ3JjLXNsaWRlci9saWIvUmFuZ2UnO1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBMb2NhdGlvblBvcHVwIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvblBvcHVwJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBDYXRlZ29yeVBvcHVwIGZyb20gJy4vY2F0ZWdvcnlQb3B1cC5qcydcblxuXG5jbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYW5jaG9yRWw6IG51bGwsXG4gICAgICAgICAgICBvcGVuRmlsdGVyOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIHNob3J0VVJMOiBcIlwiLFxuICAgICAgICAgICAgZHJvcGRvd25fdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UsXG4gICAgICAgICAgICAvLyBvdmVybGF5VmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBzaG93UG9wdXBDb250YWluZXI6IHRydWUsXG4gICAgICAgICAgICBzb3J0VGV4dDogJ1JlbGV2YW5jZScsXG4gICAgICAgICAgICBvcGVuQ2F0ZWdvcnk6IGZhbHNlLFxuICAgICAgICAgICAgaXNDYXRlZ29yeUFwcGxpZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYXBwbGllZENhdGVnb3J5Q291bnQ6ICcnLFxuICAgICAgICAgICAgaW5pdGlhbFNlbGVjdGVkQ2F0SWRzOiAnJyxcbiAgICAgICAgICAgIG1heF9hZ2U6ICcnLFxuICAgICAgICAgICAgbWluX2FnZTogJycsXG4gICAgICAgICAgICBwYWNrYWdlVHlwZTogJycsXG4gICAgICAgICAgICBnZW5kZXI6ICcnLFxuICAgICAgICAgICAgY2F0SWRzOiBbXSxcbiAgICAgICAgICAgIHRlc3RfaWRzOiAnJyxcbiAgICAgICAgICAgIHBhY2thZ2VfaWRzOiAnJyxcbiAgICAgICAgICAgIHByZXZpb3VzX2ZpbHRlcnM6IHt9LFxuICAgICAgICAgICAgc29ydF9vbjogJycsXG4gICAgICAgICAgICBzb3J0X29yZGVyOiAnJyxcbiAgICAgICAgICAgIGF2Z19yYXRpbmdzOiAnJyxcbiAgICAgICAgICAgIGhvbWVfdmlzaXQ6IGZhbHNlLFxuICAgICAgICAgICAgbGFiX3Zpc2l0OiBmYWxzZSxcbiAgICAgICAgICAgIHF1aWNrRmlsdGVyOiB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4ucHJvcHMuZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcywgcXVpY2tGaWx0ZXI6IHByb3BzLnF1aWNrRmlsdGVyfHx7fSB9LCAoKT0+e1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5xdWlja0ZpbHRlciAmJiAoICh0aGlzLnN0YXRlLnF1aWNrRmlsdGVyLmNhdElkICYmIHRoaXMuc3RhdGUucXVpY2tGaWx0ZXIuY2F0SWQubGVuZ3RoKSB8fCB0aGlzLnN0YXRlLnF1aWNrRmlsdGVyLnZpZXdNb3JlICkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0RmlsdGVyQ2xpY2tlZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGlmIChwcm9wcy5sb2NhdGlvblR5cGUgJiYgIXByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgaWYgKHByb3BzLnNlb0RhdGEgJiYgcHJvcHMuc2VvRGF0YS5sb2NhdGlvbikge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHByb3BzLnNlbGVjdGVkTG9jYXRpb24gIT0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUgfSlcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdGhpcy5zaG9ydGVuVXJsKClcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcyB9KVxuICAgICAgICAvLyB0aGlzLnNob3J0ZW5VcmwoKVxuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5zZW9EYXRhICYmIHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvbikge1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiB0cnVlLCBvdmVybGF5VmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5mb3JPcmdhbmljU2VhcmNoKSB7XG4gICAgICAgICAgICB2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcbiAgICAgICAgICAgIHZhciBjYXRfaWRzID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjYXRlZ29yeV9pZHNcIilcbiAgICAgICAgICAgIGlmIChjYXRfaWRzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjYXRfaWRzID0gY2F0X2lkcy5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgICAgaWYgKGNhdF9pZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWRDYXRlZ29yeUNvdW50OiBjYXRfaWRzLmxlbmd0aCwgaXNDYXRlZ29yeUFwcGxpZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBseUZpbHRlcnMoKSB7XG4gICAgICAgIGxldCBmaWx0ZXJTdGF0ZSA9IHtcbiAgICAgICAgICAgIHNvcnRfb246IHRoaXMuc3RhdGUuc29ydF9vbixcbiAgICAgICAgICAgIHNvcnRfb3JkZXI6IHRoaXMuc3RhdGUuc29ydF9vcmRlcixcbiAgICAgICAgICAgIGF2Z19yYXRpbmdzOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzIHx8ICcnLFxuICAgICAgICAgICAgaG9tZV92aXNpdDogdGhpcy5zdGF0ZS5ob21lX3Zpc2l0LFxuICAgICAgICAgICAgbGFiX3Zpc2l0OiB0aGlzLnN0YXRlLmxhYl92aXNpdCxcbiAgICAgICAgICAgIGdlbmRlcjogdGhpcy5zdGF0ZS5nZW5kZXIsXG4gICAgICAgICAgICBwYWNrYWdlVHlwZTogdGhpcy5zdGF0ZS5wYWNrYWdlVHlwZSxcbiAgICAgICAgICAgIGNhdElkczogdGhpcy5zdGF0ZS5jYXRJZHMsXG4gICAgICAgICAgICB0ZXN0X2lkczogdGhpcy5zdGF0ZS50ZXN0X2lkcyxcbiAgICAgICAgICAgIHBhY2thZ2VfaWRzOiB0aGlzLnN0YXRlLnBhY2thZ2VfaWRzXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnRmlsdGVyQ2xpY2snLCAnQWN0aW9uJzogJ0NsaWNrZWQgb24gRmlsdGVyJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLWZpbHRlci1jbGlja2VkJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ3NvcnRfb3JkZXInOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgfHwgJycsICdyYXRpbmcnOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzIHx8IFtdLCAnaG9tZV92aXNpdCc6IHRoaXMuc3RhdGUuaG9tZV92aXNpdCB8fCAnJywgJ2xhYl92aXNpdCc6IHRoaXMuc3RhdGUubGFiX3Zpc2l0IHx8ICcnLCBzb3J0X29uOiB0aGlzLnN0YXRlLnNvcnRfb24gfHwgJydcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgIGxldCBpZkFueUZpbHRlckFwcGxpZWQgPSB0aGlzLmlzRGF0YUZpbHRlcmVkKHt9LCB0cnVlKVxuICAgICAgICBpZihpZkFueUZpbHRlckFwcGxpZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXBwbHlGaWx0ZXJzKGZpbHRlclN0YXRlKSAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5GaWx0ZXI6IGZhbHNlIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2xvc2UocmVzZXQ9ZmFsc2UsIGUpIHtcblxuICAgICAgICBpZihyZXNldCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdSZXNldFBhY2thZ2VGaWx0ZXInLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdyZXNldC1wYWNrYWdlLWZpbHRlcicsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdzb3J0X29yZGVyJzogdGhpcy5zdGF0ZS5zb3J0X29yZGVyIHx8ICcnLCAncmF0aW5nJzogdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyB8fCBbXSwgJ2hvbWVfdmlzaXQnOiB0aGlzLnN0YXRlLmhvbWVfdmlzaXQgfHwgJycsICdsYWJfdmlzaXQnOiB0aGlzLnN0YXRlLmxhYl92aXNpdCB8fCAnJywgc29ydF9vbjogdGhpcy5zdGF0ZS5zb3J0X29uIHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuXG4gICAgICAgICAgICBsZXQgcmVzZXRGaWx0ZXJzID0ge1xuICAgICAgICAgICAgICAgIHNvcnRfb246ICcnLFxuICAgICAgICAgICAgICAgIHNvcnRfb3JkZXI6ICcnLFxuICAgICAgICAgICAgICAgIGF2Z19yYXRpbmdzOiAnJyxcbiAgICAgICAgICAgICAgICBob21lX3Zpc2l0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsYWJfdmlzaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGdlbmRlcjogJycsXG4gICAgICAgICAgICAgICAgY2F0SWRzOiBbXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAuLi5yZXNldEZpbHRlcnMsXG4gICAgICAgICAgICAgICAgcXVpY2tGaWx0ZXI6IHt9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0Nsb3NlUGFja2FnZUZpbHRlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2Nsb3NlLXBhY2thZ2UtZmlsdGVyJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ3NvcnRfb3JkZXInOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgfHwgJycsICdyYXRpbmcnOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzIHx8IFtdLCAnaG9tZV92aXNpdCc6IHRoaXMuc3RhdGUuaG9tZV92aXNpdCB8fCAnJywgJ2xhYl92aXNpdCc6IHRoaXMuc3RhdGUubGFiX3Zpc2l0IHx8ICcnLCBzb3J0X29uOiB0aGlzLnN0YXRlLnNvcnRfb24gfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBvcGVuRmlsdGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnMsXG4gICAgICAgICAgICAgICAgcXVpY2tGaWx0ZXI6IHt9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXNldFF1aWNrRmlsdGVycygpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgc29ydEZpbHRlckNsaWNrZWQoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnUGFja2FnZVNvcnRGaWx0ZXJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAncGFja2FnZS1zb3J0LWZpbHRlci1jbGlja2VkJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ3NvcnRfb3JkZXInOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIgfHwgJycsICdyYXRpbmcnOiB0aGlzLnN0YXRlLmF2Z19yYXRpbmdzIHx8IFtdLCAnaG9tZV92aXNpdCc6IHRoaXMuc3RhdGUuaG9tZV92aXNpdCB8fCAnJywgJ2xhYl92aXNpdCc6IHRoaXMuc3RhdGUubGFiX3Zpc2l0IHx8ICcnLCBzb3J0X29uOiB0aGlzLnN0YXRlLnNvcnRfb24gfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBsZXQgY3VycmVudEZpbHRlcnMgPSB7XG4gICAgICAgICAgICBzb3J0X29uOiB0aGlzLnN0YXRlLnNvcnRfb24sXG4gICAgICAgICAgICBzb3J0X29yZGVyOiB0aGlzLnN0YXRlLnNvcnRfb3JkZXIsXG4gICAgICAgICAgICBhdmdfcmF0aW5nczogdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyB8fCAnJyxcbiAgICAgICAgICAgIGhvbWVfdmlzaXQ6IHRoaXMuc3RhdGUuaG9tZV92aXNpdCxcbiAgICAgICAgICAgIGxhYl92aXNpdDogdGhpcy5zdGF0ZS5sYWJfdmlzaXQsXG4gICAgICAgICAgICBnZW5kZXI6IHRoaXMuc3RhdGUuZ2VuZGVyLFxuICAgICAgICAgICAgY2F0SWRzOiBbXS5jb25jYXQodGhpcy5zdGF0ZS5jYXRJZHMpIHx8IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW5GaWx0ZXI6IHRydWUsIHByZXZpb3VzX2ZpbHRlcnM6IGN1cnJlbnRGaWx0ZXJzLCBjYXRJZHM6IHRoaXMuc3RhdGUucXVpY2tGaWx0ZXIgJiYgdGhpcy5zdGF0ZS5xdWlja0ZpbHRlci5jYXRJZCAmJiB0aGlzLnN0YXRlLnF1aWNrRmlsdGVyLmNhdElkLmxlbmd0aD90aGlzLnN0YXRlLnF1aWNrRmlsdGVyLmNhdElkOnRoaXMuc3RhdGUuY2F0SWRzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaXNEYXRhRmlsdGVyZWQoZmlsdGVyRGF0YSA9IHt9LCBjaGVja0lmQW55RmlsdGVyQXBwbGlsZWQ9ZmFsc2UpIHtcblxuICAgICAgICBpZiAoY2hlY2tJZkFueUZpbHRlckFwcGxpbGVkKSB7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlckNvdW50ID0gMFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZpbHRlciBpbiB0aGlzLnN0YXRlLnByZXZpb3VzX2ZpbHRlcnMpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyLmluY2x1ZGVzKCdjYXRJZHMnKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJldmlvdXNfZmlsdGVyc1tmaWx0ZXJdICYmIHRoaXMuc3RhdGVbZmlsdGVyXS5sZW5ndGggIT0gdGhpcy5zdGF0ZS5wcmV2aW91c19maWx0ZXJzW2ZpbHRlcl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBhcnJGbGl0ZXI9MDthcnJGbGl0ZXI8dGhpcy5zdGF0ZVtmaWx0ZXJdLmxlbmd0aDsgYXJyRmxpdGVyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5wcmV2aW91c19maWx0ZXJzW2ZpbHRlcl0uaW5kZXhPZih0aGlzLnN0YXRlW2ZpbHRlcl1bYXJyRmxpdGVyXSk9PS0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50KytcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnN0YXRlW2ZpbHRlcl0gIT0gdGhpcy5zdGF0ZS5wcmV2aW91c19maWx0ZXJzW2ZpbHRlcl0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlckNvdW50XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGZpbHRlckRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYXZnX3JhdGluZ3M6ICcnLFxuICAgICAgICAgICAgICAgIGhvc3BpdGFsX3R5cGU6ICcnLFxuICAgICAgICAgICAgICAgIGNhdElkczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGZpbHRlckNvdW50ID0gMFxuICAgICAgICAgICAgZm9yIChsZXQgZmlsdGVyIGluIGZpbHRlckRhdGEpIHtcblxuICAgICAgICAgICAgICAgIGlmKGZpbHRlci5pbmNsdWRlcygnaG9zcGl0YWxfdHlwZScpKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZVsnbGFiX3Zpc2l0J10gfHwgdGhpcy5zdGF0ZVsnaG9tZV92aXNpdCddKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50KytcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNlIGlmIChmaWx0ZXIgPT0nY2F0SWRzJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVtmaWx0ZXJdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ291bnQrK1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJEYXRhW2ZpbHRlcl0gIT0gdGhpcy5zdGF0ZVtmaWx0ZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckNvdW50KytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyQ291bnRcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9IHRoaXMuc3RhdGUuY2F0SWRzXG4gICAgICAgIGlmIChjYXRlZ29yeSkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkQ2F0ZWdvcnlJZHMuaW5kZXhPZihjYXRlZ29yeSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSBzZWxlY3RlZENhdGVnb3J5SWRzLmZpbHRlcih4ID0+IHggIT0gY2F0ZWdvcnkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnlJZHMucHVzaChjYXRlZ29yeSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0SWRzOiBzZWxlY3RlZENhdGVnb3J5SWRzIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlQWxsRmlsdGVycyh0eXBlLCB2YWwsIGlzQXJyYXkgPSBmYWxzZSwgZSkge1xuICAgICAgICBsZXQgdmFsdWUgPSB2YWxcbiAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFZhbCA9IFtdLmNvbmNhdCh0aGlzLnN0YXRlW3R5cGVdKSB8fCBbXVxuICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2VcbiAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWRWYWwuZmlsdGVyKChkYXRhKT0+IHtcbiAgICAgICAgICAgICAgICBpZihkYXRhPT12YWwpe1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYoIWZvdW5kKXtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKHZhbCkgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlLmluY2x1ZGVzKCdzb3J0X29uJykgKSB7XG5cbiAgICAgICAgICAgIGlmKHZhbC5pbmNsdWRlcygncHJpY2VfYXNjJykgfHwgdmFsLmluY2x1ZGVzKCdwcmljZV9kZXNjJykgKXtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGVbdHlwZV09PSdmZWVzJyAmJiAoICh0aGlzLnN0YXRlWydzb3J0X29yZGVyJ109PSdhc2MnICYmIHZhbC5pbmNsdWRlcygncHJpY2VfYXNjJykgKSB8fCAodGhpcy5zdGF0ZVsnc29ydF9vcmRlciddPT0nZGVzYycgJiYgdmFsLmluY2x1ZGVzKCdwcmljZV9kZXNjJykgKSApICl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NvcnRfb246IG51bGwsIHNvcnRfb3JkZXI6IG51bGx9KVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzb3J0X29uOiAnZmVlcycsIHNvcnRfb3JkZXI6IHZhbC5pbmNsdWRlcygncHJpY2VfYXNjJyk/J2FzYyc6J2Rlc2MnfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29ydF9vbjogdGhpcy5zdGF0ZVt0eXBlXT09dmFsdWU/bnVsbDp2YWx1ZSwgc29ydF9vcmRlcjogbnVsbCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0eXBlLmluY2x1ZGVzKCdsYWJfdmlzaXQnKSB8fCB0eXBlLmluY2x1ZGVzKCdob21lX3Zpc2l0Jykpe1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZVt0eXBlXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbdHlwZV06ICF0aGlzLnN0YXRlW3R5cGVdfSlcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeydsYWJfdmlzaXQnOiB0eXBlLmluY2x1ZGVzKCdsYWJfdmlzaXQnKT92YWx1ZTohdmFsdWUsICdob21lX3Zpc2l0JzogdHlwZS5pbmNsdWRlcygnaG9tZV92aXNpdCcpP3ZhbHVlOiF2YWx1ZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW3R5cGVdOiB0aGlzLnN0YXRlW3R5cGVdPT12YWx1ZT8nJzp2YWx1ZSB9KSAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIHNlbGVjdGVkVGVzdHMgPSBbXVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXN0cy5wdXNoKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzW2ldLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBxdWlja0ZpbHRlckNhdElkID0gdGhpcy5zdGF0ZS5xdWlja0ZpbHRlciAmJiB0aGlzLnN0YXRlLnF1aWNrRmlsdGVyLmNhdElkICYmIHRoaXMuc3RhdGUucXVpY2tGaWx0ZXIuY2F0SWQubGVuZ3RoP3RoaXMuc3RhdGUucXVpY2tGaWx0ZXIuY2F0SWRbMF06JydcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuRmlsdGVyID9cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbmNlbC1vdmVybGF5IGNhbmNlbC1vdmVybGF5LXppbmRleFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgY2FuY2VsLWFwcG9pbnRtZW50LWRpdiBjYW5jZWwtcG9wdXAgb3ZlcmZsb3ctaGlkZGVuIHBiLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Jvc3MtYnRuXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9pY29ucy9jbG9zZS5wbmdcIn0gYWx0PVwiY2xvc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC10b3AtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvcnQvRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0aW5nLW1haW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LWxmdC1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzb3J0LWhlYWRpbmdzXCI+U29ydCBieTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1zbGlkZXItc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNvcnQtY2FyZHMtbGlzdCAke3RoaXMuc3RhdGUuc29ydF9vbj09Jyc/J2NoaXRBY3RpdmUnOicnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdzb3J0X29uJywgJycsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtbHN0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNvcnRfb249PScnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtcmVsZXZlbmNlLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3JldmVsLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJlbGV2YW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNfbG9naW5fdXNlcl9pbnN1cmVkICYmIHRoaXMucHJvcHMuaW5zdXJhbmNlX3N0YXR1cyA9PSAxPycnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPXtgc29ydC1jYXJkcy1saXN0ICR7dGhpcy5zdGF0ZS5zb3J0X29uPT0nZmVlcycgJiYgdGhpcy5zdGF0ZS5zb3J0X29yZGVyPT0nYXNjJz8nY2hpdEFjdGl2ZSc6Jyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NvcnRfb24nLCAncHJpY2VfYXNjJywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtbHN0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc29ydF9vbj09J2ZlZXMnICYmIHRoaXMuc3RhdGUuc29ydF9vcmRlcj09J2FzYyc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtcHJpY2Vzb3J0LnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcHJpY2Vzb3J0LnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByaWNlIExvdyB0byBIaWdoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc19sb2dpbl91c2VyX2luc3VyZWQgJiYgdGhpcy5wcm9wcy5pbnN1cmFuY2Vfc3RhdHVzID09IDE/JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNhcmRzLWxpc3QgJHt0aGlzLnN0YXRlLnNvcnRfb249PSdmZWVzJyAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXI9PSdkZXNjJz8nY2hpdEFjdGl2ZSc6Jyd9YH0gb25DbGljaz17dGhpcy50b2dnbGVBbGxGaWx0ZXJzLmJpbmQodGhpcywgJ3NvcnRfb24nLCAncHJpY2VfZGVzYycsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3J0LWxzdC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNvcnRfb249PSdmZWVzJyAmJiB0aGlzLnN0YXRlLnNvcnRfb3JkZXI9PSdkZXNjJz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1wcmljZXVwLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcHJpY2V1cC5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE4IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmljZSBIaWdoIHRvIExvdzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bzb3J0LWNhcmRzLWxpc3QgJHt0aGlzLnN0YXRlLnNvcnRfb249PSdkaXN0YW5jZSc/J2NoaXRBY3RpdmUnOicnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdzb3J0X29uJywgJ2Rpc3RhbmNlJywgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNydC1sc3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc29ydF9vbj09J2Rpc3RhbmNlJz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3J2LWxvY2F0aW9ucy5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vbG9jYXRpb25zLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTQgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRpc3RhbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNvcnQtY2FyZHMtbGlzdCAke3RoaXMuc3RhdGUuc29ydF9vbj09J3JhdGluZyc/J2NoaXRBY3RpdmUnOicnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdzb3J0X29uJywgJ3JhdGluZycsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcnQtbHN0LWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNvcnRfb249PSdyYXRpbmcnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9wb3B1cGljb24vcnYtcmF0bmcuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiAxOCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3JhdG5nLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTggfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJhdGluZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRpbmctYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzb3J0LWhlYWRpbmdzXCI+UmF0aW5nczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydGJ0bmNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09JzMnID8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnYXZnX3JhdGluZ3MnLCAnMycsIGZhbHNlKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MgPT0nMycgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNydC1zdGFyLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1idG4tc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgY2xhc3NOYW1lPVwic3J0LXN0YXItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc2VsZWN0ZWQtc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMy4wICs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09JzQnPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdhdmdfcmF0aW5ncycsICc0JywgZmFsc2UpfT4gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYXZnX3JhdGluZ3MgPT0nNCc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3J0LXN0YXItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvcG9wdXBpY29uL3J2LWJ0bi1zdGFyLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PGltZyBjbGFzc05hbWU9XCJzcnQtc3Rhci1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9zZWxlY3RlZC1zdGFyLnN2Z1wifSAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNC4wICs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc29ydEJ0bnMgJHt0aGlzLnN0YXRlLmF2Z19yYXRpbmdzID09JzQuNScgPyAnc3J0QnRuQWN0JyA6ICcnfWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWxsRmlsdGVycy5iaW5kKHRoaXMsICdhdmdfcmF0aW5ncycsICc0LjUnLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hdmdfcmF0aW5ncyA9PSc0LjUnP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNydC1zdGFyLWltZ1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL3BvcHVwaWNvbi9ydi1idG4tc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxpbWcgY2xhc3NOYW1lPVwic3J0LXN0YXItaW1nXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvc2VsZWN0ZWQtc3Rhci5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LjUgKzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRpbmctYnRucy1jb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzb3J0LWhlYWRpbmdzXCI+VmlzaXQgVHlwZTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydGJ0bmNhcmQganVzdHlmeS10d29CdG5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHNvcnRCdG5zICR7dGhpcy5zdGF0ZS5ob21lX3Zpc2l0ID8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnaG9tZV92aXNpdCcsICF0aGlzLnN0YXRlLmhvbWVfdmlzaXQsIGZhbHNlKX0+SG9tZSBWaXNpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bzb3J0QnRucyAke3RoaXMuc3RhdGUubGFiX3Zpc2l0ID8gJ3NydEJ0bkFjdCcgOiAnJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFsbEZpbHRlcnMuYmluZCh0aGlzLCAnbGFiX3Zpc2l0JywgIXRoaXMuc3RhdGUubGFiX3Zpc2l0LCBmYWxzZSl9PkxhYiBWaXNpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY2F0ZWdvcmllcyAmJiB0aGlzLnByb3BzLnBhY2thZ2VzTGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0aW5nLWJ0bnMtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzb3J0LWhlYWRpbmdzXCI+Q2F0ZWdvcnk8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydGJ0bmNhcmQganVzdHlmeS10d29CdG5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXQtZ3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVpY2tGaWx0ZXJDYXRJZD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY2F0ZWdvcmllcy5maWx0ZXIoKHg9PnguaWQ9PXF1aWNrRmlsdGVyQ2F0SWQpKS5tYXAoKGNhdGVnb3J5LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17Y2F0ZWdvcnkuaWR9IGlkPXtjYXRlZ29yeS5pZH0gb25DbGljaz17dGhpcy5zZWxlY3RDYXRlZ29yeS5iaW5kKHRoaXMsIGNhdGVnb3J5LmlkKX0+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2F0SWRzLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTEgPyBcInNlbGVjdGVkXCIgOiAnJ30+e2NhdGVnb3J5Lm5hbWV9PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucGFja2FnZXNMaXN0LmNhdGVnb3JpZXMuZmlsdGVyKCh4PT54LmlkIT1xdWlja0ZpbHRlckNhdElkKSkubWFwKChjYXRlZ29yeSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17Y2F0ZWdvcnkuaWR9IGlkPXtjYXRlZ29yeS5pZH0gb25DbGljaz17dGhpcy5zZWxlY3RDYXRlZ29yeS5iaW5kKHRoaXMsIGNhdGVnb3J5LmlkKX0+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2F0SWRzLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTEgPyBcInNlbGVjdGVkXCIgOiAnJ30+e2NhdGVnb3J5Lm5hbWV9PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcC1mb290LWJ0bnMtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXNocG5nLWNhcnQtYnRuXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMsIHRydWUpfT5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4tcHJpbWFyeSBib29rLWJ0bi1tcmduLWFkanVzdFwiIG9uQ2xpY2s9e3RoaXMuYXBwbHlGaWx0ZXJzLmJpbmQodGhpcyl9PkFwcGx5IEZpbHRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1yb3cgc3RpY2t5LWhlYWRlciBtYmwtc3RpY2tcIiBzdHlsZT17e3RvcDonNTVweCd9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZvck9yZ2FuaWNTZWFyY2ggP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXJuZy10b3AtMTIgZC1ub25lIGQtbWQtYmxvY2tcIj48dWwgY2xhc3NOYW1lPVwibXJiLTEwIGJyZWFkY3J1bWItbGlzdFwiIHN0eWxlPXt7ICd3b3JkQnJlYWsnOiAnYnJlYWtXb3JkJyB9fT48bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1saXN0LWl0ZW1cIj48YSBocmVmPVwiL1wiPjxzcGFuIGNsYXNzTmFtZT1cImZ3LTUwMCBicmVhZGNydW1iLXRpdGxlIGJyZWFkY3J1bWItY29sb3JlZC10aXRsZVwiPkhvbWU8L3NwYW4+PC9hPjwvbGk+PHNwYW4gY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1hcnJvd1wiPiZndDs8L3NwYW4+PGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbGlzdC1pdGVtXCI+PHNwYW4gY2xhc3NOYW1lPVwiZnctNTAwIGJyZWFkY3J1bWItdGl0bGVcIj5GdWxsIEJvZHkgQ2hlY2t1cCBQYWNrYWdlczwvc3Bhbj48L2xpPjwvdWw+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzY3JvbGwtc2hhZG93LWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZm9yVGF4U2F2ZXIgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXJvdyBzdGlja3ktaGVhZGVyIG1ibC1zdGlja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2Nyb2xsLXNoYWRvdy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1maWx0ZXItdGFiLWNvbnRhaW5lclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtZmlsdGVyLXRhYnMtc2VsZWN0IFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY29tcGFyZVBhY2thZ2UuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17IXRoaXMucHJvcHMuaXNDb21wYXJlZCAmJiAodGhpcy5wcm9wcy5pc0NvbXBhcmUgfHwgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA+IDApID8gQVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3BhY2thZ2VDb21wYXJlL2NvbXBhcmUtb3JhbmdlLnBuZ1wiIDogQVNTRVRTX0JBU0VfVVJMICsgXCIvaW1hZ2VzL3BhY2thZ2VDb21wYXJlL2NvbXBhcmUucG5nXCJ9IGFsdD1cIlwiIHN0eWxlPXt7IHdpZHRoOiAxNiB9fSAvPiA8c3BhbiBjbGFzc05hbWU9e2AkeyF0aGlzLnByb3BzLmlzQ29tcGFyZWQgJiYgKHRoaXMucHJvcHMuaXNDb21wYXJlIHx8ICh0aGlzLnByb3BzLmNvbXBhcmVfcGFja2FnZXMgJiYgdGhpcy5wcm9wcy5jb21wYXJlX3BhY2thZ2VzLmxlbmd0aCA+IDApKSA/ICdjb21hcHJlLWFjdGl2ZScgOiAnJ31gfT5Db21wYXJlIFBhY2thZ2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtZmlsdGVyLXRhYnMtc2VsZWN0IFwiIG9uQ2xpY2s9e3RoaXMuc29ydEZpbHRlckNsaWNrZWQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTRweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvZmlsdGVyc29ydC5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEYXRhRmlsdGVyZWQoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaWx0ZXJOb3RpZmljYXRpb25cIj57dGhpcy5pc0RhdGFGaWx0ZXJlZCgpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNvcnQvRmlsdGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW5DYXRlZ29yeSA/IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlQb3B1cCB7Li4udGhpcy5wcm9wc30gYXBwbHlDYXRlZ29yaWVzPXt0aGlzLmFwcGx5Q2F0ZWdvcmllcy5iaW5kKHRoaXMpfSBjbG9zZUNhdGVnb3J5PXt0aGlzLmNsb3NlQ2F0ZWdvcnkuYmluZCh0aGlzKX0gaW5pdGlhbFNlbGVjdGVkQ2F0ZWdvcnk9e3RoaXMuaW5pdGlhbFNlbGVjdGVkQ2F0ZWdvcnkuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlbkZpbHRlciAmJiBmYWxzZSA/IDxkaXYgb25DbGljaz17dGhpcy5zb3J0RmlsdGVyQ2xpY2tlZC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJmaWx0ZXItb3ZlcmxheSBvdmVybGF5IGJsYWNrIGNhbmNlbC1vdmVybGF5LXppbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgZmlsdGVyLXBvcHVwXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1mb290ZXIgcGQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWJsb2NrIGJ0bi1sZyBwb3AtYnRuXCIgb25DbGljaz17dGhpcy5hcHBseUZpbHRlcnMuYmluZCh0aGlzKX0+QXBwbHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJhbmdlIGZyb20gJ3JjLXNsaWRlci9saWIvUmFuZ2UnO1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBMb2NhdGlvblBvcHVwIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvblBvcHVwJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBDYXRlZ29yeVBvcHVwIGZyb20gJy4vY2F0ZWdvcnlQb3B1cC5qcydcblxuXG5jbGFzcyBSZXN1bHRDb3VudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAvLyBhbmNob3JFbDogbnVsbCxcbiAgICAgICAgICAgIC8vIG9wZW5GaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgLy8gcHJpY2VSYW5nZTogWzAsIDIwMDAwXSxcbiAgICAgICAgICAgIC8vIGRpc3RhbmNlUmFuZ2U6IFswLCAxNV0sXG4gICAgICAgICAgICAvLyBzb3J0X29uOiBudWxsLFxuICAgICAgICAgICAgc2hvcnRVUkw6IFwiXCIsXG4gICAgICAgICAgICAvLyBkcm9wZG93bl92aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIG92ZXJsYXlWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQb3B1cENvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgICAgIC8vIHNvcnRUZXh0OiAnUmVsZXZhbmNlJyxcbiAgICAgICAgICAgIC8vIG9wZW5DYXRlZ29yeTogZmFsc2UsXG4gICAgICAgICAgICAvLyBpc0NhdGVnb3J5QXBwbGllZDpmYWxzZSxcbiAgICAgICAgICAgIC8vIGFwcGxpZWRDYXRlZ29yeUNvdW50OicnLFxuICAgICAgICAgICAgLy8gaW5pdGlhbFNlbGVjdGVkQ2F0SWRzOicnLFxuICAgICAgICAgICAgLy8gbWF4X2FnZTonJyxcbiAgICAgICAgICAgIC8vIG1pbl9hZ2U6JycsXG4gICAgICAgICAgICAvLyBwYWNrYWdlVHlwZTonJyxcbiAgICAgICAgICAgIC8vIGdlbmRlcjonJyxcbiAgICAgICAgICAgIC8vIGNhdElkczpbXSxcbiAgICAgICAgICAgIC8vIHRlc3RfaWRzOicnLFxuICAgICAgICAgICAgc3NyRmxhZzogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnByb3BzLmZpbHRlckNyaXRlcmlhUGFja2FnZXMgfSlcbiAgICAgICAgaWYgKHByb3BzLmxvY2F0aW9uVHlwZSAmJiAhcHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2VvRGF0YSAmJiBwcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMb2NhdGlvbiAhPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiB0cnVlLCBvdmVybGF5VmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3J0ZW5VcmwoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYVBhY2thZ2VzLCBzc3JGbGFnOiB0cnVlIH0pXG4gICAgICAgIHRoaXMuc2hvcnRlblVybCgpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlb0RhdGEgJiYgdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvblR5cGUuaW5jbHVkZXMoXCJnZW9cIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IHRydWUsIG92ZXJsYXlWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMucHJvcHMuZm9yT3JnYW5pY1NlYXJjaCl7XG4gICAgICAgICAgICB2YXIgdXJsX3N0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh1cmxfc3RyaW5nKTtcbiAgICAgICAgICAgIHZhciBjYXRfaWRzID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjYXRlZ29yeV9pZHNcIilcbiAgICAgICAgICAgIGlmKGNhdF9pZHMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgY2F0X2lkcyA9IGNhdF9pZHMuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgIGlmKGNhdF9pZHMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGllZENhdGVnb3J5Q291bnQ6Y2F0X2lkcy5sZW5ndGgsaXNDYXRlZ29yeUFwcGxpZWQ6dHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFwcGx5RmlsdGVycygpIHtcbiAgICAvLyAgICAgbGV0IGZpbHRlclN0YXRlID0ge1xuICAgIC8vICAgICAgICAgcHJpY2VSYW5nZTogdGhpcy5zdGF0ZS5wcmljZVJhbmdlLFxuICAgIC8vICAgICAgICAgZGlzdGFuY2VSYW5nZTogdGhpcy5zdGF0ZS5kaXN0YW5jZVJhbmdlLFxuICAgIC8vICAgICAgICAgc29ydF9vbjogdGhpcy5zdGF0ZS5zb3J0X29uLFxuICAgIC8vICAgICAgICAgbWF4X2FnZTogdGhpcy5zdGF0ZS5tYXhfYWdlLFxuICAgIC8vICAgICAgICAgbWluX2FnZTogdGhpcy5zdGF0ZS5taW5fYWdlLFxuICAgIC8vICAgICAgICAgZ2VuZGVyOiB0aGlzLnN0YXRlLmdlbmRlcixcbiAgICAvLyAgICAgICAgIHBhY2thZ2VUeXBlOiB0aGlzLnN0YXRlLnBhY2thZ2VUeXBlLFxuICAgIC8vICAgICAgICAgY2F0SWRzOnRoaXMuc3RhdGUuY2F0SWRzLFxuICAgIC8vICAgICAgICAgdGVzdF9pZHM6dGhpcy5zdGF0ZS50ZXN0X2lkc1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGxldCBkYXRhID0ge1xuICAgIC8vICAgICAgICAgJ0NhdGVnb3J5JzogJ0ZpbHRlckNsaWNrJywgJ0FjdGlvbic6ICdDbGlja2VkIG9uIEZpbHRlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1maWx0ZXItY2xpY2tlZCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsICdsb3dQcmljZVJhbmdlJzogdGhpcy5zdGF0ZS5wcmljZVJhbmdlWzBdLCAnaGlnaFByaWNlUmFuZ2UnOiB0aGlzLnN0YXRlLnByaWNlUmFuZ2VbMV0sICdsb3dEaXN0YW5jZVJhbmdlJzogdGhpcy5zdGF0ZS5kaXN0YW5jZVJhbmdlWzBdLCAnaGlnaERpc3RhbmNlUmFuZ2UnOiB0aGlzLnN0YXRlLmRpc3RhbmNlUmFuZ2VbMV0sICdzb3J0X29uJzogdGhpcy5zdGF0ZS5zb3J0X29uID09IFwiXCIgPyAncmVsZXZhbmNlJyA6IHRoaXMuc3RhdGUuc29ydF9vblxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgLy8gICAgIHRoaXMucHJvcHMuYXBwbHlGaWx0ZXJzKGZpbHRlclN0YXRlKVxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbkZpbHRlcjogZmFsc2UgfSlcbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kbGVPcGVuKGV2ZW50KSB7XG4gICAgLy8gICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCB9KVxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIGRyb3Bkb3duX3Zpc2libGU6IHRydWVcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gaGlkZVNvcnREaXYoKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgZHJvcGRvd25fdmlzaWJsZTogZmFsc2VcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gaGFuZGxlQ2xvc2UodHlwZSkge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IG51bGwsIHNvcnRfb246IHR5cGUgLGRyb3Bkb3duX3Zpc2libGU6ZmFsc2V9LCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAodHlwZSB8fCB0eXBlID09PSBcIlwiKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcHBseUZpbHRlcnMoKVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIC8vIHRvZ2dsZUZpbHRlcigpIHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBvcGVuRmlsdGVyOiAhdGhpcy5zdGF0ZS5vcGVuRmlsdGVyXG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuICAgIFxuICAgIC8vIGhhbmRsZVJhbmdlKHR5cGUsIHJhbmdlKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgW3R5cGVdOiByYW5nZVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIGdldENyaXRlcmlhU3RyaW5nKHNlbGVjdGVkQ3JpdGVyaWFzKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZENyaXRlcmlhcyAmJiBzZWxlY3RlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENyaXRlcmlhcy5yZWR1Y2UoKGZpbmFsLCBjdXJyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbCArPSAnLCAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsICs9IGAke2N1cnIubmFtZX1gXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsXG4gICAgICAgICAgICB9LCBcIlwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaXNGaWx0ZXJBcHBsaWVkKCkge1xuICAgIC8vICAgICBjb25zdCBkZWYgPSB7XG4gICAgLy8gICAgICAgICBwcmljZVJhbmdlOiBbMCwgMjAwMDBdLFxuICAgIC8vICAgICAgICAgZGlzdGFuY2VSYW5nZTogWzAsIDE1XVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBmb3IgKGxldCBmaWx0ZXIgaW4gZGVmKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGRlZltmaWx0ZXJdWzBdICE9IHRoaXMuc3RhdGVbZmlsdGVyXVswXSB8fCBkZWZbZmlsdGVyXVsxXSAhPSB0aGlzLnN0YXRlW2ZpbHRlcl1bMV0pIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBzaG9ydGVuVXJsKCkge1xuICAgICAgICBpZiAod2luZG93KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYgKyAnJmZvcmNlX2xvY2F0aW9uPXRydWUnXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVybFNob3J0bmVyKHVybCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogZGF0YS50aW55X3VybCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvdmVybGF5Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdmVybGF5VmlzaWJsZTogZmFsc2UsIHNlYXJjaENpdGllczogW10sIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uX2VsZW1lbnQnKSl7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25fZWxlbWVudCcpLnN0eWxlLnpJbmRleCA9JzAnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlTG9jYXRpb25Qb3B1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBwb3B1cENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cENvbnRhaW5lcjogZmFsc2UsIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KTtcbiAgICB9XG4gICAgLy8gdG9nZ2xlQ2F0ZWdvcnkoZXZlbnQpIHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBvcGVuQ2F0ZWdvcnk6ICF0aGlzLnN0YXRlLm9wZW5DYXRlZ29yeVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cbiAgICAvLyBjbG9zZUNhdGVnb3J5KCkge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIG9wZW5DYXRlZ29yeTogIXRoaXMuc3RhdGUub3BlbkNhdGVnb3J5XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuICAgIC8vIGFwcGx5Q2F0ZWdvcmllcyhjYXRlZ29yeVN0YXRlKSB7IFxuICAgIC8vICAgICBsZXQgZmlsdGVyU3RhdGUgPSB7XG4gICAgLy8gICAgICAgICBwcmljZVJhbmdlOiB0aGlzLnN0YXRlLnByaWNlUmFuZ2UsXG4gICAgLy8gICAgICAgICBkaXN0YW5jZVJhbmdlOiB0aGlzLnN0YXRlLmRpc3RhbmNlUmFuZ2UsXG4gICAgLy8gICAgICAgICBzb3J0X29uOiB0aGlzLnN0YXRlLnNvcnRfb24sXG4gICAgLy8gICAgICAgICBtYXhfYWdlOnRoaXMuc3RhdGUubWF4X2FnZSxcbiAgICAvLyAgICAgICAgIG1pbl9hZ2U6IHRoaXMuc3RhdGUubWluX2FnZSxcbiAgICAvLyAgICAgICAgIGdlbmRlcjp0aGlzLnN0YXRlLmdlbmRlcixcbiAgICAvLyAgICAgICAgIHBhY2thZ2VUeXBlOiB0aGlzLnN0YXRlLnBhY2thZ2VUeXBlLFxuICAgIC8vICAgICAgICAgdGVzdF9pZHM6dGhpcy5zdGF0ZS50ZXN0X2lkc1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIC8vIGxldCBpc0NhdGVnb3J5ID0gZmFsc2UgXG4gICAgLy8gICAgIC8vIGlmKHRoaXMuc3RhdGUuaW5pdGlhbFNlbGVjdGVkQ2F0SWRzICE9IGNhdGVnb3J5U3RhdGUubGVuZ3RoKXtcbiAgICAvLyAgICAgLy8gICAgIGlzQ2F0ZWdvcnkgPSB0cnVlXG4gICAgLy8gICAgIC8vIH1cbiAgICAvLyAgICAgdGhpcy5wcm9wcy5hcHBseUNhdGVnb3JpZXMoY2F0ZWdvcnlTdGF0ZSxmaWx0ZXJTdGF0ZSlcbiAgICAvLyAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IG9wZW5DYXRlZ29yeTogZmFsc2UgLGlzQ2F0ZWdvcnlBcHBsaWVkOmlzQ2F0ZWdvcnksYXBwbGllZENhdGVnb3J5Q291bnQ6Y2F0ZWdvcnlTdGF0ZS5sZW5ndGg+MD9jYXRlZ29yeVN0YXRlLmxlbmd0aDonJ30pXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuQ2F0ZWdvcnk6IGZhbHNlLGNhdElkczpjYXRlZ29yeVN0YXRlLmxlbmd0aH0pXG5cbiAgICAvLyB9XG4gICAgLy8gaW5pdGlhbFNlbGVjdGVkQ2F0ZWdvcnkoc2VsZWN0ZWRjYXRlZ29yeSl7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe2luaXRpYWxTZWxlY3RlZENhdElkczpzZWxlY3RlZGNhdGVnb3J5Lmxlbmd0aH0pXG4gICAgLy8gfVxuXG4gICAgZ29Ub0xvY2F0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlYXJjaENpdGllczogW11cbiAgICAgICAgfSlcbiAgICAgICAgbGV0IGxvY2F0aW9uX3VybCA9ICcvbG9jYXRpb25zZWFyY2gnXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYW5nZUxvY2F0aW9uRG9jdG9yUmVzdWx0c1BvcFVwJywgJ0FjdGlvbic6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gobG9jYXRpb25fdXJsKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB2YXIgc2VsZWN0ZWRUZXN0cyA9IFtdXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRlc3RzLnB1c2godGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXNbaV0uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IHNvcnRUeXBlID0gJydcbiAgICAgICAgLy8gaWYgKHRoaXMuc3RhdGUuc29ydF9vbikge1xuICAgICAgICAvLyAgICAgc29ydFR5cGUgPSB0aGlzLnN0YXRlLnNvcnRfb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnN0YXRlLnNvcnRfb24uc2xpY2UoMSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgY3JpdGVyaWFTdHIgPSB0aGlzLmdldENyaXRlcmlhU3RyaW5nKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzKVxuICAgICAgICBsZXQgbG9jYXRpb25OYW1lID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICYmIHRoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcykge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHtcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZSA9IHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIGlkPVwiZmlsdGVyLXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhYl9jYXJkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4IDBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5wYWNrYWdlc0xpc3Q/dGhpcy5wcm9wcy5wYWNrYWdlc0xpc3QuY291bnQ6XCJcIn0gUmVzdWx0cyBmb3IgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnctNzAwXCI+IHt0aGlzLnByb3BzLmZvck9yZ2FuaWNTZWFyY2g/J0Z1bGwgQm9keSBDaGVja3VwIFBhY2thZ2VzJzp0aGlzLnByb3BzLmZvclRheFNhdmVyPydIZWFsdGggUGFja2FnZXMnOidzZWxlY3RlZCBjYXRlZ29yaWVzJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtc3BhblwiPiB7Y3JpdGVyaWFTdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25OYW1lID8gYCBpbiAke2xvY2F0aW9uTmFtZX1gIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgd2lkdGg6IDY1LCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xvY2F0aW9uc2VhcmNoP2xhYl9jYXJkPXRydWUmaWQ9JHtzZWxlY3RlZFRlc3RzfWApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1wcmltYXJ5XCIgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19ID5DaGFuZ2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGxjLWZpbHRlci1zb3J0LWRpdiBtcnQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGMtZmlsdGVyLWRpdiBkLWZsZXhcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUZpbHRlci5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2xjLWZpbHRlci5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDE4IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtcHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDQgfX0+RmlsdGVyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxjLXNvcnQtZGl2IGQtZmxleFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3Blbi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgdGV4dC1wcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDQgfX0+e3RoaXMuc3RhdGUuc29ydF9vbiA9PT0gXCJcIiB8fCAhdGhpcy5zdGF0ZS5zb3J0X29uID8gJ1JlbGV2YW5jZScgOiBzb3J0VHlwZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9vcmFuZ2UtZG93bi5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6IDEwIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXBkbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLWZpbHRlciBkLW5vbmUgZC1tZC1ibG9jayBhbGlnblNoYXJlQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dGhpcy5zdGF0ZS5zaG9ydFVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29weT17KCkgPT4geyBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiU2hvcnRlbmVkIFVSTCBDb3BpZWQuXCIgfSk7IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy91cmwtc2hvcnQuc3ZnXCJ9IHN0eWxlPXt7IHdpZHRoOiA4MCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxsaSBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0gb25DbGljaz17dGhpcy5oYW5kbGVPcGVuLmJpbmQodGhpcyl9PjxzcGFuIGNsYXNzTmFtZT1cImN0LWltZyBjdC1pbWctc20gZmlsdGVyLWljb24gdGV4dC1yaWdodFwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvcmFuZ2Uuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUZpbHRlci5iaW5kKHRoaXMpfT48c3BhbiBjbGFzc05hbWU9XCJjdC1pbWcgY3QtaW1nLXNtIGZpbHRlci1pY29uIHRleHQtcmlnaHQgYXBwbGllZC1maWx0ZXJcIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2ZpbHRlci5zdmdcIn0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGaWx0ZXJBcHBsaWVkLmNhbGwodGhpcykgPyA8c3BhbiBjbGFzc05hbWU9XCJhcHBsaWVkLWZpbHRlci1ub3RpXCIgLz4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXQtaWNvLXRleHRcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNhdGVnb3J5LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2NhdGVnb3JpZXMuc3ZnXCJ9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5Ub3A6JzFweCd9fSBjbGFzc05hbWU9XCJjdC1pbWcgY3QtaW1nLXNtIGZpbHRlci1pY29uIHRleHQtcmlnaHQgYXBwbGllZC1maWx0ZXJcIj5DYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZpbHRlckFwcGxpZWQuY2FsbCh0aGlzKSA/IDxzcGFuIGNsYXNzTmFtZT1cImFwcGxpZWQtZmlsdGVyLW5vdGlcIiAvPiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucGFja2FnZXNMaXN0P3RoaXMucHJvcHMucGFja2FnZXNMaXN0LmNvdW50OicnfSBSZXN1bHRzIGZvdW5kIGZvciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMFwiPiB7dGhpcy5wcm9wcy5mb3JPcmdhbmljU2VhcmNoPydGdWxsIEJvZHkgQ2hlY2t1cCBQYWNrYWdlcyc6dGhpcy5wcm9wcy5mb3JUYXhTYXZlcj8nSGVhbHRoIFBhY2thZ2VzJzonc2VsZWN0ZWQgY2F0ZWdvcmllcyd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtc3BhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiBmYWxzZSA/ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxvY2F0aW9uTmFtZSAmJiB0aGlzLnN0YXRlLnNzckZsYWcgPyA8c3BhbiBjbGFzc05hbWU9XCJsb2NhdGlvbi1lZGl0XCI+e2AgaW4gJHtsb2NhdGlvbk5hbWV9YH08L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogMTUsIGhlaWdodDogMTUsIG1hcmdpbkxlZnQ6IDcsIGN1cnNvcjogJ3BvaW50ZXInIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2VkaXQuc3ZnXCJ9IG9uQ2xpY2s9e3RoaXMuZ29Ub0xvY2F0aW9uLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uRWxlbWVudHMgey4uLnRoaXMucHJvcHN9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSByZXN1bHRUeXBlPSdsaXN0JyBpc1RvcGJhcj17dHJ1ZX0gaGlkZUxvY2F0aW9uUG9wdXA9eygpID0+IHRoaXMuaGlkZUxvY2F0aW9uUG9wdXAoKX0gbG9jYXRpb25OYW1lPXtsb2NhdGlvbk5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnN0YXRlLm92ZXJsYXlWaXNpYmxlICYmICF0aGlzLnByb3BzLmxhYl9jYXJkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvblBvcHVwLW92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm92ZXJsYXlDbGljaygpfSA+PC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgJiYgdGhpcy5wcm9wcy5sYWJfY2FyZCAmJiB0aGlzLnN0YXRlLnNob3dQb3B1cENvbnRhaW5lciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBDb250YWluZXItb3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdENvdW50XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgbWVyZ2VMQUJTdGF0ZSwgdXJsU2hvcnRuZXIsIGdldFBhY2thZ2VzLCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSwgZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzLCBjbGVhckV4dHJhVGVzdHMsIGdldEZvb3RlckRhdGEsIHNlbGVjdFNlYXJjaFR5cGUsIGdldE9mZmVyTGlzdCwgdG9nZ2xlT1BEQ3JpdGVyaWEsIHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSwgc2VsZWN0TGFiVGltZVNMb3QsIHJlc2V0UGtnQ29tcGFyZSwgdG9nZ2xlY29tcGFyZUNyaXRlcmlhLCBsb2FkT1BESW5zdXJhbmNlLCBzZXRDb21tb25VdG1UYWdzLCB1blNldENvbW1vblV0bVRhZ3MsIGNsZWFyVmlwU2VsZWN0ZWRQbGFuLCBOb25JcGRCb29raW5nTGVhZCwgc2F2ZUxlYWRQaG5OdW1iZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IHsgb3BkU2VhcmNoU3RhdGVCdWlsZGVyLCBsYWJTZWFyY2hTdGF0ZUJ1aWxkZXIsIFBhY2thZ2VTZWFyY2hTdGF0ZUJ1aWxkZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3VybHRvU3RhdGUnXG5pbXBvcnQgU2VhcmNoUGFja2FnZXNWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGlhZ25vc2lzL3NlYXJjaFBhY2thZ2VzL2luZGV4LmpzJ1xuXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpXG5cbmNsYXNzIFNlYXJjaFBhY2thZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZvclRheFNhdmVyOiBwcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcInRheC1zYXZlci1oZWFsdGgtcGFja2FnZXNcIiksXG4gICAgICAgICAgICBmb3JPcmdhbmljU2VhcmNoOiBwcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcImZ1bGwtYm9keS1jaGVja3VwLWhlYWx0aC1wYWNrYWdlc1wiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnlQYXJhbXMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbG9jYXRpb25fbXMgPSBudWxsXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLnVybC5pbmNsdWRlcygnbG9jYXRpb249JykpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25fbXMgPSBtYXRjaC51cmwuc3BsaXQoJ2xvY2F0aW9uPScpWzFdXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX21zID0gcGFyc2VJbnQobG9jYXRpb25fbXMpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgUGFja2FnZVNlYXJjaFN0YXRlQnVpbGRlcihudWxsLCBxdWVyeVBhcmFtcywgdHJ1ZSwgbG9jYXRpb25fbXMpLnRoZW4oKHN0YXRlKSA9PiB7IC8vIGJ1aWxkIHN0YXRlIGluIGNhc2Ugb2Ygc3NyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKG1lcmdlTEFCU3RhdGUoc3RhdGUpKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWFyY2hVcmwgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC51cmwuaW5jbHVkZXMoJy1sYmNpdCcpIHx8IG1hdGNoLnVybC5pbmNsdWRlcygnLWxibGl0Y2l0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFVybCA9IG1hdGNoLnVybC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSAxXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5wYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlID0gcGFyc2VJbnQocXVlcnlQYXJhbXMucGFnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0UGFja2FnZXMoc3RhdGUsIHBhZ2UsIHRydWUsIHNlYXJjaFVybCwge30sIChsb2FkTW9yZSwgc2VvRGF0YSkgPT4geyAvL2dldCBzZWFyY2hlZCBwYWNrYWdlcyByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC51cmwuaW5jbHVkZXMoJy1sYmNpdCcpIHx8IG1hdGNoLnVybC5pbmNsdWRlcygnLWxibGl0Y2l0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGb290ZXJEYXRhKG1hdGNoLnVybC5zcGxpdChcIi9cIilbMV0pKCkudGhlbigoZm9vdGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXJEYXRhID0gZm9vdGVyRGF0YSB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBzZW9EYXRhLCBmb290ZXJEYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHNlb0RhdGEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgc2VvRGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICAgICAgICAgIHJlamVjdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgcm91dGVyOiAoKSA9PiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMucHJvcHMubG9hZE9QREluc3VyYW5jZSh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNlYXJjaFBhY2thZ2VzVmlldyB7Li4udGhpcy5wcm9wc30gZm9yVGF4U2F2ZXI9e3RoaXMuc3RhdGUuZm9yVGF4U2F2ZXJ9IGZvck9yZ2FuaWNTZWFyY2g9e3RoaXMuc3RhdGUuZm9yT3JnYW5pY1NlYXJjaH0gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcGFzc2VkUHJvcHMpID0+IHtcbiAgICAvKipcbiAgICAgKiBpbml0aWFsU2VydmVyRGF0YSBpcyBzZXJ2ZXIgcmVuZGVyZWQgYXN5bmMgZGF0YSByZXF1aXJlZCBidWlsZCBodG1sIG9uIHNlcnZlci4gXG4gICAgICovXG4gICAgbGV0IGluaXRpYWxTZXJ2ZXJEYXRhID0gbnVsbFxuICAgIGxldCB7IHN0YXRpY0NvbnRleHQgfSA9IHBhc3NlZFByb3BzXG4gICAgaWYgKHN0YXRpY0NvbnRleHQgJiYgc3RhdGljQ29udGV4dC5kYXRhKSB7XG4gICAgICAgIGluaXRpYWxTZXJ2ZXJEYXRhID0gc3RhdGljQ29udGV4dC5kYXRhXG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIExPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCLFxuICAgICAgICBsb2NhdGlvblR5cGUsXG4gICAgICAgIGZldGNoTmV3UmVzdWx0cyxcbiAgICAgICAgY29ycG9yYXRlQ291cG9uLFxuICAgICAgICBjdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMsXG4gICAgICAgIGZpbHRlckNyaXRlcmlhUGFja2FnZXMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGNvbXBhcmVfcGFja2FnZXNcblxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfTEFCU1xuXG4gICAgY29uc3Qge1xuICAgICAgICBjb21tb25fc2V0dGluZ3NcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX09QRFxuXG4gICAgY29uc3Qge1xuICAgICAgICBvZmZlckxpc3QsXG4gICAgICAgIGlzX2xvZ2luX3VzZXJfaW5zdXJlZCxcbiAgICAgICAgaW5zdXJhbmNlX3N0YXR1cyxcbiAgICAgICAgZGV2aWNlX2luZm8sXG4gICAgICAgIGNvbW1vbl91dG1fdGFnc1xuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICBjb25zdCBMQUJTID0gc3RhdGUuTEFCX1NFQVJDSF9EQVRBXG4gICAgY29uc3QgeyBsYWJMaXN0LCBMT0FERURfTEFCU19TRUFSQ0gsIGNvdW50LCBTRVRfRlJPTV9TRVJWRVIsIHBhY2thZ2VzTGlzdCwgY3Vycl9wYWdlIH0gPSBzdGF0ZS5MQUJfU0VBUkNIXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIExPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCLFxuICAgICAgICBMQUJTLFxuICAgICAgICBsYWJMaXN0LCBMT0FERURfTEFCU19TRUFSQ0gsXG4gICAgICAgIGNvdW50LFxuICAgICAgICBTRVRfRlJPTV9TRVJWRVIsXG4gICAgICAgIGluaXRpYWxTZXJ2ZXJEYXRhLFxuICAgICAgICBsb2NhdGlvblR5cGUsXG4gICAgICAgIGZldGNoTmV3UmVzdWx0cyxcbiAgICAgICAgY29ycG9yYXRlQ291cG9uLFxuICAgICAgICBwYWNrYWdlc0xpc3QsXG4gICAgICAgIGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyxcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWFQYWNrYWdlcyxcbiAgICAgICAgb2ZmZXJMaXN0LFxuICAgICAgICBpc19sb2dpbl91c2VyX2luc3VyZWQsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGN1cnJfcGFnZSxcbiAgICAgICAgY29tcGFyZV9wYWNrYWdlcyxcbiAgICAgICAgaW5zdXJhbmNlX3N0YXR1cyxcbiAgICAgICAgZGV2aWNlX2luZm8sXG4gICAgICAgIGNvbW1vbl9zZXR0aW5ncyxcbiAgICAgICAgY29tbW9uX3V0bV90YWdzXG4gICAgfVxuXG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybFNob3J0bmVyOiAodXJsLCBjYikgPT4gZGlzcGF0Y2godXJsU2hvcnRuZXIodXJsLCBjYikpLFxuICAgICAgICBnZXRQYWNrYWdlczogKHN0YXRlLCBwYWdlLCBmcm9tX3NlcnZlciwgc2VhcmNoQnlVcmwsZXh0cmFfcGFyYW1zLCBjYikgPT4gZGlzcGF0Y2goZ2V0UGFja2FnZXMoc3RhdGUsIHBhZ2UsIGZyb21fc2VydmVyLCBzZWFyY2hCeVVybCwgZXh0cmFfcGFyYW1zLCBjYikpLFxuICAgICAgICB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSA9PiBkaXNwYXRjaCh0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikpLFxuICAgICAgICBnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHM6IChzZWFyY2hTdHJpbmcsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHMoc2VhcmNoU3RyaW5nLCBjYWxsYmFjaykpLFxuICAgICAgICBjbGVhckV4dHJhVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyRXh0cmFUZXN0cygpKSxcbiAgICAgICAgbWVyZ2VMQUJTdGF0ZTogKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpID0+IGRpc3BhdGNoKG1lcmdlTEFCU3RhdGUoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykpLFxuICAgICAgICBzZWxlY3RTZWFyY2hUeXBlOiAodHlwZSkgPT4gZGlzcGF0Y2goc2VsZWN0U2VhcmNoVHlwZSh0eXBlKSksXG4gICAgICAgIGdldEZvb3RlckRhdGE6ICh1cmwpID0+IGRpc3BhdGNoKGdldEZvb3RlckRhdGEodXJsKSksXG4gICAgICAgIGdldE9mZmVyTGlzdDogKGxhdCwgbG9uZykgPT4gZGlzcGF0Y2goZ2V0T2ZmZXJMaXN0KGxhdCwgbG9uZykpLFxuICAgICAgICB0b2dnbGVPUERDcml0ZXJpYTogKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSA9PiBkaXNwYXRjaCh0b2dnbGVPUERDcml0ZXJpYSh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQsIGZpbHRlcikpLFxuICAgICAgICB0b2dnbGVjb21wYXJlQ3JpdGVyaWE6IChjcml0ZXJpYSkgPT4gZGlzcGF0Y2godG9nZ2xlY29tcGFyZUNyaXRlcmlhKGNyaXRlcmlhKSksXG4gICAgICAgIHJlc2V0UGtnQ29tcGFyZTooKSA9PiBkaXNwYXRjaChyZXNldFBrZ0NvbXBhcmUoKSksXG4gICAgICAgIHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSh0eXBlKSksXG4gICAgICAgIHNlbGVjdExhYlRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSkgPT4gZGlzcGF0Y2goc2VsZWN0TGFiVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSkpLFxuICAgICAgICBsb2FkT1BESW5zdXJhbmNlOiAoY2l0eSkgPT4gZGlzcGF0Y2gobG9hZE9QREluc3VyYW5jZShjaXR5KSksXG4gICAgICAgIHNldENvbW1vblV0bVRhZ3M6ICh0eXBlLCB0YWcpID0+IGRpc3BhdGNoKHNldENvbW1vblV0bVRhZ3ModHlwZSwgdGFnKSksXG4gICAgICAgIHVuU2V0Q29tbW9uVXRtVGFnczogKHR5cGUsIHRhZyk9PiBkaXNwYXRjaCh1blNldENvbW1vblV0bVRhZ3ModHlwZSwgdGFnKSksXG4gICAgICAgIGNsZWFyVmlwU2VsZWN0ZWRQbGFuOigpID0+ZGlzcGF0Y2goY2xlYXJWaXBTZWxlY3RlZFBsYW4oKSksXG4gICAgICAgIE5vbklwZEJvb2tpbmdMZWFkOihkYXRhLGNiKSA9PmRpc3BhdGNoKE5vbklwZEJvb2tpbmdMZWFkKGRhdGEsIGNiKSksXG4gICAgICAgIHNhdmVMZWFkUGhuTnVtYmVyOihudW1iZXIpID0+ZGlzcGF0Y2goc2F2ZUxlYWRQaG5OdW1iZXIobnVtYmVyKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlYXJjaFBhY2thZ2VzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=