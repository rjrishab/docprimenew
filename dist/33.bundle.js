(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RatingStars = function (_React$Component) {
    _inherits(RatingStars, _React$Component);

    function RatingStars(props) {
        _classCallCheck(this, RatingStars);

        var _this = _possibleConstructorReturn(this, (RatingStars.__proto__ || Object.getPrototypeOf(RatingStars)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(RatingStars, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                average_rating = _props.average_rating,
                rating_count = _props.rating_count;


            var rating = '';
            if (average_rating) {
                rating = Math.ceil(average_rating * 2) / 2;
            }

            var ratingArray = [];
            for (var i = 0; i < Math.floor(rating); i++) {
                ratingArray.push(_react2.default.createElement('img', { key: i, src: "/assets" + '/img/customer-icons/rating-star-filled.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
            }

            if (rating != Math.floor(rating)) {
                ratingArray.push(_react2.default.createElement('img', { key: 'half', src: "/assets" + '/img/customer-icons/halfstar_new.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
            }

            var emptyStars = Math.floor(5 - rating);
            if (emptyStars) {
                for (var _i = 0; _i < emptyStars; _i++) {
                    ratingArray.push(_react2.default.createElement('img', { key: _i + 'empty', src: "/assets" + '/img/customer-icons/rating-star-empty.svg', className: 'img-cstm-docrating', style: { width: this.props.width, marginRight: 2, height: this.props.height } }));
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
    }]);

    return RatingStars;
}(_react2.default.Component);

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

var _RatingStars = __webpack_require__(/*! ../../../commons/ratingsProfileView/RatingStars */ "./dev/js/components/commons/ratingsProfileView/RatingStars.js");

var _RatingStars2 = _interopRequireDefault(_RatingStars);

var _commonVipGoldBadge = __webpack_require__(/*! ../../../commons/commonVipGoldBadge.js */ "./dev/js/components/commons/commonVipGoldBadge.js");

var _commonVipGoldBadge2 = _interopRequireDefault(_commonVipGoldBadge);

var _commonVipGoldNonLoginBadge = __webpack_require__(/*! ../../../commons/commonVipGoldNonLoginBadge.js */ "./dev/js/components/commons/commonVipGoldNonLoginBadge.js");

var _commonVipGoldNonLoginBadge2 = _interopRequireDefault(_commonVipGoldNonLoginBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabProfileCard = function (_React$Component) {
    _inherits(LabProfileCard, _React$Component);

    function LabProfileCard(props) {
        _classCallCheck(this, LabProfileCard);

        var _this = _possibleConstructorReturn(this, (LabProfileCard.__proto__ || Object.getPrototypeOf(LabProfileCard)).call(this, props));

        _this.state = {
            openViewMore: false,
            ssrFlag: false
        };
        return _this;
    }

    _createClass(LabProfileCard, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ ssrFlag: true });
        }
    }, {
        key: 'toggleViewMore',
        value: function toggleViewMore() {
            this.setState({ openViewMore: !this.state.openViewMore });
        }
    }, {
        key: 'openLab',
        value: function openLab(id, url, e) {
            this.props.clearExtraTests();
            if (this.props.noClearTest) {
                //package conditions for seo page
                var lab_id = void 0;
                var test = {};
                var _data = this.props.details;
                if (_data.id != id) {
                    lab_id = id;
                } else {
                    lab_id = _data.id;
                }
                test.type = 'test';
                test.name = _data.tests[0].name;
                test.id = _data.tests[0].id;
                test.deal_price = _data.tests[0].deal_price;
                test.mrp = _data.tests[0].mrp;
                test.url = _data.tests[0].url;

                test.lab_id = lab_id;
                test.extra_test = true;
                this.props.toggleDiagnosisCriteria('test', test, true);
            } else {
                //for tests
                this.mergeTests(id);
            }
            var data = {
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
                    this.props.history.push('/' + url);
                } else {
                    this.props.history.push('/lab/' + id);
                }
            }
        }
    }, {
        key: 'mergeTests',
        value: function mergeTests(id) {
            var _this2 = this;

            var dedupe_ids = {};
            var testIds = this.props.currentSearchedCriterias.reduce(function (final, x) {
                final = final || [];
                if (x.test && x.type == "condition") {
                    x.test = x.test || [];
                    final = [].concat(_toConsumableArray(final), _toConsumableArray(x.test));
                } else if (x.type == "test") {
                    final.push(x);
                }
                return final;
            }, []).filter(function (x) {
                if (dedupe_ids[x.id]) {
                    return false;
                } else {
                    dedupe_ids[x.id] = true;
                    return true;
                }
            }).map(function (test) {
                var new_test = Object.assign({}, test);
                new_test.extra_test = true;
                new_test.lab_id = id;
                _this2.props.toggleDiagnosisCriteria('test', new_test, true);
            });
        }
    }, {
        key: 'bookNowClicked',
        value: function bookNowClicked(id) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            this.props.clearExtraTests();
            var slot = { time: {} };
            this.props.clearExtraTests();
            this.props.selectLabTimeSLot(slot, false);
            var selectedType = {
                r_pickup: 'home',
                p_pickup: 'home'
            };
            this.props.selectLabAppointmentType(selectedType);
            this.mergeTests(id);

            if (url) {
                this.props.history.push('/' + url + '/booking?lab_id=' + id);
            } else {
                this.props.history.push('/lab/' + id + '/book');
            }
        }
    }, {
        key: 'testInfo',
        value: function testInfo(test_id, lab_id, test_url, event) {
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
                this.props.history.push('/' + test_url + '?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&search_id=' + search_id + '&lab_id=' + lab_id + '&lat=' + lat + '&long=' + long);
            } else {
                this.props.history.push('/search/testinfo?test_ids=' + test_id + '&selected_test_ids=' + selected_test_ids + '&search_id=' + search_id + '&lab_id=' + lab_id + '&lat=' + lat + '&long=' + long);
            }
            event.stopPropagation();
            var data = {
                'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'lab-result-page'
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'goldClicked',
        value: function goldClicked() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'VipGoldClicked', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'vip-gold-clicked', 'selectedId': this.props.details.id
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push('/vip-gold-details?is_gold=true&source=labgoldlisting&lead_source=Docprime');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var self = this;
            var _props$details = this.props.details,
                price = _props$details.price,
                lab = _props$details.lab,
                distance = _props$details.distance,
                is_home_collection_enabled = _props$details.is_home_collection_enabled,
                lab_timing = _props$details.lab_timing,
                lab_timing_data = _props$details.lab_timing_data,
                mrp = _props$details.mrp,
                next_lab_timing = _props$details.next_lab_timing,
                next_lab_timing_data = _props$details.next_lab_timing_data,
                distance_related_charges = _props$details.distance_related_charges,
                pickup_charges = _props$details.pickup_charges,
                address = _props$details.address,
                name = _props$details.name,
                lab_thumbnail = _props$details.lab_thumbnail,
                other_labs = _props$details.other_labs,
                id = _props$details.id,
                url = _props$details.url,
                home_pickup_charges = _props$details.home_pickup_charges,
                discounted_price = _props$details.discounted_price,
                avg_rating = _props$details.avg_rating,
                rating_count = _props$details.rating_count,
                insurance = _props$details.insurance,
                vip = _props$details.vip,
                is_vip_enabled = _props$details.is_vip_enabled,
                is_gold = _props$details.is_gold;

            distance = Math.ceil(distance / 1000);

            var pickup_text = "";
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

            var offPercent = '';
            if (mrp && (discounted_price || discounted_price == 0) && discounted_price < mrp) {
                offPercent = parseInt((mrp - discounted_price) / mrp * 100);
            }
            var hide_price = false;
            if (this.props.test_data) {
                this.props.test_data.map(function (test) {
                    if (test.hide_price) {
                        hide_price = true;
                    }
                });
            }
            var show_detailsIds = [];
            if (!this.props.isTestInfo) {
                {
                    Object.entries(this.props.currentSearchedCriterias).map(function (_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2),
                            key = _ref4[0],
                            value = _ref4[1];

                        if (value.show_details) {
                            show_detailsIds.push(value.id);
                        }
                    });
                }
            }
            var is_insurance_applicable = false;
            var is_insurance_buy_able = false;
            if (insurance && insurance.is_insurance_covered && insurance.is_user_insured) {
                is_insurance_applicable = true;
                pickup_text = "";
            }

            if (insurance && insurance.is_insurance_covered && !insurance.is_user_insured) {
                is_insurance_buy_able = true;
            }
            var is_labopd_enable_for_vip = is_vip_enabled;
            var is_labopd_enable_for_gold = is_gold;
            var is_vip_member = false;
            var is_gold_member = false;
            var covered_under_vip = false;
            if (vip && Object.keys(vip).length > 0) {
                is_vip_member = vip.is_vip_member;
                is_gold_member = vip.is_gold_member;
                covered_under_vip = vip.covered_under_vip;
            }

            var show_common_prices = !is_labopd_enable_for_vip || (is_gold_member || is_vip_member) && !covered_under_vip;
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
                                            { href: '/' + url, onClick: function onClick(e) {
                                                    e.preventDefault();
                                                    _this3.bookNowClicked(id, url);
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
                                        { href: '/' + url, onClick: function onClick(e) {
                                                e.preventDefault();
                                                _this3.bookNowClicked(id, url);
                                            } },
                                        _react2.default.createElement(
                                            'h2',
                                            { className: 'cstmDocName' },
                                            name
                                        )
                                    ),
                                    this.props.details.tests && this.props.details.tests.length ? this.props.details.tests.map(function (test, index) {
                                        return show_detailsIds.indexOf(_this3.props.details.tests[0].id) > -1 ? _react2.default.createElement(
                                            'p',
                                            { key: index, onClick: _this3.testInfo.bind(_this3, _this3.props.details.tests[0].id, id, _this3.props.details.tests[0].url) },
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
                            !is_insurance_applicable && !show_common_prices && _react2.default.createElement(_commonVipGoldBadge2.default, _extends({ is_labopd_enable_for_vip: is_labopd_enable_for_vip, is_labopd_enable_for_gold: is_labopd_enable_for_gold, is_vip_member: is_vip_member, is_gold_member: is_gold_member, covered_under_vip: covered_under_vip, vip_data: vip }, this.props, { mrp: mrp, discounted_price: discounted_price, goldClicked: function goldClicked() {
                                    return _this3.goldClicked();
                                } })),
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
                            !is_insurance_applicable && !show_common_prices && _react2.default.createElement(_commonVipGoldNonLoginBadge2.default, _extends({ is_labopd_enable_for_vip: is_labopd_enable_for_vip, is_labopd_enable_for_gold: is_labopd_enable_for_gold, is_vip_member: is_vip_member, is_gold_member: is_gold_member, covered_under_vip: covered_under_vip, vip_data: vip }, this.props, { mrp: mrp, discounted_price: discounted_price, goldClicked: function goldClicked() {
                                    return _this3.goldClicked();
                                } })),
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
                            other_labs.map(function (olab, x) {
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
                                        { className: 'showBookTestListBtn', onClick: _this3.bookNowClicked.bind(_this3, olab.id, olab.url) },
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
    }]);

    return LabProfileCard;
}(_react2.default.Component);

exports.default = LabProfileCard;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL3JhdGluZ3NQcm9maWxlVmlldy9SYXRpbmdTdGFycy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvY29tbW9ucy9sYWJQcm9maWxlQ2FyZC9MYWJQcm9maWxlQ2FyZC5qcyJdLCJuYW1lcyI6WyJSYXRpbmdTdGFycyIsInByb3BzIiwic3RhdGUiLCJhdmVyYWdlX3JhdGluZyIsInJhdGluZ19jb3VudCIsInJhdGluZyIsIk1hdGgiLCJjZWlsIiwicmF0aW5nQXJyYXkiLCJpIiwiZmxvb3IiLCJwdXNoIiwiQVNTRVRTX0JBU0VfVVJMIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImhlaWdodCIsImVtcHR5U3RhcnMiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeUNvbnRlbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkxhYlByb2ZpbGVDYXJkIiwib3BlblZpZXdNb3JlIiwic3NyRmxhZyIsInNldFN0YXRlIiwiaWQiLCJ1cmwiLCJlIiwiY2xlYXJFeHRyYVRlc3RzIiwibm9DbGVhclRlc3QiLCJsYWJfaWQiLCJ0ZXN0IiwiZGF0YSIsImRldGFpbHMiLCJ0eXBlIiwibmFtZSIsInRlc3RzIiwiZGVhbF9wcmljZSIsIm1ycCIsImV4dHJhX3Rlc3QiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsIm1lcmdlVGVzdHMiLCJHVE0iLCJnZXRVc2VySWQiLCJyYW5rIiwic2VuZEV2ZW50IiwiY2xlYXJWaXBTZWxlY3RlZFBsYW4iLCJjdHJsS2V5IiwibWV0YUtleSIsInByZXZlbnREZWZhdWx0IiwiaGlzdG9yeSIsImRlZHVwZV9pZHMiLCJ0ZXN0SWRzIiwiY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzIiwicmVkdWNlIiwiZmluYWwiLCJ4IiwiZmlsdGVyIiwibWFwIiwibmV3X3Rlc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJzbG90IiwidGltZSIsInNlbGVjdExhYlRpbWVTTG90Iiwic2VsZWN0ZWRUeXBlIiwicl9waWNrdXAiLCJwX3BpY2t1cCIsInNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSIsInRlc3RfaWQiLCJ0ZXN0X3VybCIsImV2ZW50Iiwic2VsZWN0ZWRfdGVzdF9pZHMiLCJlbnRyaWVzIiwia2V5IiwidmFsdWUiLCJ1cmxfc3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiVVJMIiwic2VhcmNoX2lkIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwibGF0IiwibG9uZyIsInNlbGVjdGVkTG9jYXRpb24iLCJnZW9tZXRyeSIsImxuZyIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGYiLCJwcmljZSIsImxhYiIsImRpc3RhbmNlIiwiaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQiLCJsYWJfdGltaW5nIiwibGFiX3RpbWluZ19kYXRhIiwibmV4dF9sYWJfdGltaW5nIiwibmV4dF9sYWJfdGltaW5nX2RhdGEiLCJkaXN0YW5jZV9yZWxhdGVkX2NoYXJnZXMiLCJwaWNrdXBfY2hhcmdlcyIsImFkZHJlc3MiLCJsYWJfdGh1bWJuYWlsIiwib3RoZXJfbGFicyIsImhvbWVfcGlja3VwX2NoYXJnZXMiLCJkaXNjb3VudGVkX3ByaWNlIiwiYXZnX3JhdGluZyIsImluc3VyYW5jZSIsInZpcCIsImlzX3ZpcF9lbmFibGVkIiwiaXNfZ29sZCIsInBpY2t1cF90ZXh0Iiwib2ZmUGVyY2VudCIsInBhcnNlSW50IiwiaGlkZV9wcmljZSIsInRlc3RfZGF0YSIsInNob3dfZGV0YWlsc0lkcyIsImlzVGVzdEluZm8iLCJzaG93X2RldGFpbHMiLCJpc19pbnN1cmFuY2VfYXBwbGljYWJsZSIsImlzX2luc3VyYW5jZV9idXlfYWJsZSIsImlzX2luc3VyYW5jZV9jb3ZlcmVkIiwiaXNfdXNlcl9pbnN1cmVkIiwiaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwIiwiaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZCIsImlzX3ZpcF9tZW1iZXIiLCJpc19nb2xkX21lbWJlciIsImNvdmVyZWRfdW5kZXJfdmlwIiwia2V5cyIsImxlbmd0aCIsInNob3dfY29tbW9uX3ByaWNlcyIsImN1cnNvciIsInBhZGRpbmdCb3R0b20iLCJib29rTm93Q2xpY2tlZCIsIm1hcmdpblRvcCIsImluZGV4IiwiaW5kZXhPZiIsInRlc3RJbmZvIiwiYmluZCIsImRpc3BsYXkiLCJnb2xkQ2xpY2tlZCIsIm1hcmdpbkxlZnQiLCJvbGFiIiwidG9nZ2xlVmlld01vcmUiLCJib3JkZXJUb3AiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsVzs7O0FBQ0YseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBS2xCOzs7O2lDQUNRO0FBQUEseUJBQ2tDLEtBQUtELEtBRHZDO0FBQUEsZ0JBQ0NFLGNBREQsVUFDQ0EsY0FERDtBQUFBLGdCQUNpQkMsWUFEakIsVUFDaUJBLFlBRGpCOzs7QUFHTCxnQkFBSUMsU0FBUyxFQUFiO0FBQ0EsZ0JBQUlGLGNBQUosRUFBb0I7QUFDaEJFLHlCQUFVQyxLQUFLQyxJQUFMLENBQVVKLGlCQUFpQixDQUEzQixDQUFELEdBQWtDLENBQTNDO0FBQ0g7O0FBRUQsZ0JBQUlLLGNBQWMsRUFBbEI7QUFDQSxpQkFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILEtBQUtJLEtBQUwsQ0FBV0wsTUFBWCxDQUFwQixFQUF3Q0ksR0FBeEMsRUFBNkM7QUFDekNELDRCQUFZRyxJQUFaLENBQWlCLHVDQUFLLEtBQUtGLENBQVYsRUFBYSxLQUFLRyxTQUFlQSxHQUFHLDRDQUFwQyxFQUFrRixXQUFVLG9CQUE1RixFQUFpSCxPQUFPLEVBQUVDLE9BQU8sS0FBS1osS0FBTCxDQUFXWSxLQUFwQixFQUEyQkMsYUFBYSxDQUF4QyxFQUEyQ0MsUUFBUSxLQUFLZCxLQUFMLENBQVdjLE1BQTlELEVBQXhILEdBQWpCO0FBQ0g7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQXJXSjtBQXVXSDs7OztFQWprQndCTyxnQkFBTUMsUzs7a0JBb2tCcEJDLGMiLCJmaWxlIjoiMzMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUmF0aW5nU3RhcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBhdmVyYWdlX3JhdGluZywgcmF0aW5nX2NvdW50IH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgbGV0IHJhdGluZyA9ICcnXG4gICAgICAgIGlmIChhdmVyYWdlX3JhdGluZykge1xuICAgICAgICAgICAgcmF0aW5nID0gKE1hdGguY2VpbChhdmVyYWdlX3JhdGluZyAqIDIpKSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmF0aW5nQXJyYXkgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGguZmxvb3IocmF0aW5nKTsgaSsrKSB7XG4gICAgICAgICAgICByYXRpbmdBcnJheS5wdXNoKDxpbWcga2V5PXtpfSBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2N1c3RvbWVyLWljb25zL3JhdGluZy1zdGFyLWZpbGxlZC5zdmcnfSBjbGFzc05hbWU9XCJpbWctY3N0bS1kb2NyYXRpbmdcIiBzdHlsZT17eyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCwgbWFyZ2luUmlnaHQ6IDIsIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfX0gLz4pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmF0aW5nICE9IE1hdGguZmxvb3IocmF0aW5nKSkge1xuICAgICAgICAgICAgcmF0aW5nQXJyYXkucHVzaCg8aW1nIGtleT0naGFsZicgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9oYWxmc3Rhcl9uZXcuc3ZnJ30gY2xhc3NOYW1lPVwiaW1nLWNzdG0tZG9jcmF0aW5nXCIgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMud2lkdGgsIG1hcmdpblJpZ2h0OiAyLCBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IH19IC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGVtcHR5U3RhcnMgPSBNYXRoLmZsb29yKDUgLSByYXRpbmcpO1xuICAgICAgICBpZiAoZW1wdHlTdGFycykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbXB0eVN0YXJzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByYXRpbmdBcnJheS5wdXNoKDxpbWcga2V5PXtpICsgJ2VtcHR5J30gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9yYXRpbmctc3Rhci1lbXB0eS5zdmcnfSBjbGFzc05hbWU9XCJpbWctY3N0bS1kb2NyYXRpbmdcIiBzdHlsZT17eyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCwgbWFyZ2luUmlnaHQ6IDIsIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQgfX0gLz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2MtcnRuZ1wiIHN0eWxlPXt0aGlzLnByb3BzLmp1c3RpZnlDZW50ZXIgPyB7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9IDoge319PlxuICAgICAgICAgICAgICAgIHtyYXRpbmdBcnJheX1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJhdGluZ19jb3VudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe3JhdGluZ19jb3VudH0pPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZ1N0YXJzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbml0aWFsc1BpY3R1cmUgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9pbml0aWFsc1BpY3R1cmUnXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuXG5pbXBvcnQgeyBidWlsZE9wZW5CYW5uZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL3V0aWxzLmpzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9zdG9yYWdlJ1xuaW1wb3J0IHsgWF9PSyB9IGZyb20gJ2NvbnN0YW50cyc7XG5pbXBvcnQgUmF0aW5nU3RhcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9yYXRpbmdzUHJvZmlsZVZpZXcvUmF0aW5nU3RhcnMnO1xuaW1wb3J0IENvbW1vblZpcEdvbGRCYWRnZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2NvbW1vblZpcEdvbGRCYWRnZS5qcydcbmltcG9ydCBDb21tb25WaXBHb2xkTm9uTG9naW5CYWRnZSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2NvbW1vblZpcEdvbGROb25Mb2dpbkJhZGdlLmpzJ1xuXG5jbGFzcyBMYWJQcm9maWxlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuVmlld01vcmU6IGZhbHNlLFxuICAgICAgICAgICAgc3NyRmxhZzogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3NyRmxhZzogdHJ1ZSB9KVxuICAgIH1cblxuICAgIHRvZ2dsZVZpZXdNb3JlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlblZpZXdNb3JlOiAhdGhpcy5zdGF0ZS5vcGVuVmlld01vcmUgfSlcbiAgICB9XG5cblxuICAgIG9wZW5MYWIoaWQsIHVybCwgZSkge1xuICAgICAgICB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cygpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm5vQ2xlYXJUZXN0KSB7XG4gICAgICAgICAgICAvL3BhY2thZ2UgY29uZGl0aW9ucyBmb3Igc2VvIHBhZ2VcbiAgICAgICAgICAgIGxldCBsYWJfaWRcbiAgICAgICAgICAgIGxldCB0ZXN0ID0ge31cbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5wcm9wcy5kZXRhaWxzXG4gICAgICAgICAgICBpZiAoZGF0YS5pZCAhPSBpZCkge1xuICAgICAgICAgICAgICAgIGxhYl9pZCA9IGlkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxhYl9pZCA9IGRhdGEuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlc3QudHlwZSA9ICd0ZXN0J1xuICAgICAgICAgICAgdGVzdC5uYW1lID0gZGF0YS50ZXN0c1swXS5uYW1lXG4gICAgICAgICAgICB0ZXN0LmlkID0gZGF0YS50ZXN0c1swXS5pZFxuICAgICAgICAgICAgdGVzdC5kZWFsX3ByaWNlID0gZGF0YS50ZXN0c1swXS5kZWFsX3ByaWNlXG4gICAgICAgICAgICB0ZXN0Lm1ycCA9IGRhdGEudGVzdHNbMF0ubXJwXG4gICAgICAgICAgICB0ZXN0LnVybCA9IGRhdGEudGVzdHNbMF0udXJsXG5cbiAgICAgICAgICAgIHRlc3QubGFiX2lkID0gbGFiX2lkXG4gICAgICAgICAgICB0ZXN0LmV4dHJhX3Rlc3QgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgdGVzdCwgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vZm9yIHRlc3RzXG4gICAgICAgICAgICB0aGlzLm1lcmdlVGVzdHMoaWQpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ1JhbmtPZkxhYkNsaWNrZWQnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdyYW5rLWxhYi1jbGlja2VkJywgJ1JhbmsnOiB0aGlzLnByb3BzLnJhbmsgKyAxXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJTZWxlY3RlZEJ5VXNlcicsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1zZWxlY3RlZC1ieS11c2VyJywgJ0xhYklkJzogaWRcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3VybH1gKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2xhYi8ke2lkfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZXJnZVRlc3RzKGlkKSB7XG4gICAgICAgIGxldCBkZWR1cGVfaWRzID0ge31cbiAgICAgICAgbGV0IHRlc3RJZHMgPSB0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhc1xuICAgICAgICAgICAgLnJlZHVjZSgoZmluYWwsIHgpID0+IHtcbiAgICAgICAgICAgICAgICBmaW5hbCA9IGZpbmFsIHx8IFtdXG4gICAgICAgICAgICAgICAgaWYgKHgudGVzdCAmJiB4LnR5cGUgPT0gXCJjb25kaXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB4LnRlc3QgPSB4LnRlc3QgfHwgW11cbiAgICAgICAgICAgICAgICAgICAgZmluYWwgPSBbLi4uZmluYWwsIC4uLngudGVzdF1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHgudHlwZSA9PSBcInRlc3RcIikge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbC5wdXNoKHgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFxuICAgICAgICAgICAgfSwgW10pXG4gICAgICAgICAgICAuZmlsdGVyKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRlZHVwZV9pZHNbeC5pZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVkdXBlX2lkc1t4LmlkXSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5tYXAoKHRlc3QpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3X3Rlc3QgPSBPYmplY3QuYXNzaWduKHt9LCB0ZXN0KVxuICAgICAgICAgICAgICAgIG5ld190ZXN0LmV4dHJhX3Rlc3QgPSB0cnVlXG4gICAgICAgICAgICAgICAgbmV3X3Rlc3QubGFiX2lkID0gaWRcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKCd0ZXN0JywgbmV3X3Rlc3QsIHRydWUpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGJvb2tOb3dDbGlja2VkKGlkLCB1cmwgPSAnJykge1xuICAgICAgICB0aGlzLnByb3BzLmNsZWFyRXh0cmFUZXN0cygpXG4gICAgICAgIGxldCBzbG90ID0geyB0aW1lOiB7fSB9XG4gICAgICAgIHRoaXMucHJvcHMuY2xlYXJFeHRyYVRlc3RzKClcbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJUaW1lU0xvdChzbG90LCBmYWxzZSlcbiAgICAgICAgbGV0IHNlbGVjdGVkVHlwZSA9IHtcbiAgICAgICAgICAgIHJfcGlja3VwOiAnaG9tZScsXG4gICAgICAgICAgICBwX3BpY2t1cDogJ2hvbWUnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RMYWJBcHBvaW50bWVudFR5cGUoc2VsZWN0ZWRUeXBlKVxuICAgICAgICB0aGlzLm1lcmdlVGVzdHMoaWQpXG5cbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3VybH0vYm9va2luZz9sYWJfaWQ9JHtpZH1gKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sYWIvJHtpZH0vYm9va2ApXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHRlc3RJbmZvKHRlc3RfaWQsIGxhYl9pZCwgdGVzdF91cmwsIGV2ZW50KSB7XG4gICAgICAgIGxldCBzZWxlY3RlZF90ZXN0X2lkcyA9IFtdXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRfdGVzdF9pZHMucHVzaCh2YWx1ZS5pZClcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIHVybF9zdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XG4gICAgICAgIHZhciBzZWFyY2hfaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcInNlYXJjaF9pZFwiKTtcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsYXQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXN0X3VybCAmJiB0ZXN0X3VybCAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nICsgdGVzdF91cmwgKyAnP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZzZWxlY3RlZF90ZXN0X2lkcz0nICsgc2VsZWN0ZWRfdGVzdF9pZHMgKyAnJnNlYXJjaF9pZD0nICsgc2VhcmNoX2lkICsgJyZsYWJfaWQ9JyArIGxhYl9pZCArICcmbGF0PScgKyBsYXQgKyAnJmxvbmc9JyArIGxvbmcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3NlYXJjaC90ZXN0aW5mbz90ZXN0X2lkcz0nICsgdGVzdF9pZCArICcmc2VsZWN0ZWRfdGVzdF9pZHM9JyArIHNlbGVjdGVkX3Rlc3RfaWRzICsgJyZzZWFyY2hfaWQ9JyArIHNlYXJjaF9pZCArICcmbGFiX2lkPScgKyBsYWJfaWQgKyAnJmxhdD0nICsgbGF0ICsgJyZsb25nPScgKyBsb25nKVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICd0ZXN0SW5mb0NsaWNrJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAndGVzdC1pbmZvLWNsaWNrJywgJ3BhZ2VTb3VyY2UnOiAnbGFiLXJlc3VsdC1wYWdlJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgfVxuXG4gICAgZ29sZENsaWNrZWQoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdWaXBHb2xkQ2xpY2tlZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3ZpcC1nb2xkLWNsaWNrZWQnLCAnc2VsZWN0ZWRJZCc6IHRoaXMucHJvcHMuZGV0YWlscy5pZFxuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvdmlwLWdvbGQtZGV0YWlscz9pc19nb2xkPXRydWUmc291cmNlPWxhYmdvbGRsaXN0aW5nJmxlYWRfc291cmNlPURvY3ByaW1lJylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBsZXQgeyBwcmljZSwgbGFiLCBkaXN0YW5jZSwgaXNfaG9tZV9jb2xsZWN0aW9uX2VuYWJsZWQsIGxhYl90aW1pbmcsIGxhYl90aW1pbmdfZGF0YSwgbXJwLCBuZXh0X2xhYl90aW1pbmcsIG5leHRfbGFiX3RpbWluZ19kYXRhLCBkaXN0YW5jZV9yZWxhdGVkX2NoYXJnZXMsIHBpY2t1cF9jaGFyZ2VzLCBhZGRyZXNzLCBuYW1lLCBsYWJfdGh1bWJuYWlsLCBvdGhlcl9sYWJzLCBpZCwgdXJsLCBob21lX3BpY2t1cF9jaGFyZ2VzLCBkaXNjb3VudGVkX3ByaWNlLCBhdmdfcmF0aW5nLCByYXRpbmdfY291bnQsIGluc3VyYW5jZSwgdmlwLCBpc192aXBfZW5hYmxlZCwgaXNfZ29sZCB9ID0gdGhpcy5wcm9wcy5kZXRhaWxzO1xuICAgICAgICBkaXN0YW5jZSA9IE1hdGguY2VpbChkaXN0YW5jZSAvIDEwMDApO1xuXG4gICAgICAgIGxldCBwaWNrdXBfdGV4dCA9IFwiXCJcbiAgICAgICAgaWYgKGlzX2hvbWVfY29sbGVjdGlvbl9lbmFibGVkICYmIGRpc3RhbmNlX3JlbGF0ZWRfY2hhcmdlcyA9PSAxKSB7XG4gICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiSG9tZSBwaWNrdXAgY2hhcmdlcyBhcHBsaWNhYmxlXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc19ob21lX2NvbGxlY3Rpb25fZW5hYmxlZCAmJiAhZGlzdGFuY2VfcmVsYXRlZF9jaGFyZ2VzKSB7XG4gICAgICAgICAgICBpZiAoaG9tZV9waWNrdXBfY2hhcmdlcyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcGlja3VwX3RleHQgPSBcIkZyZWUgaG9tZSB2aXNpdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwaWNrdXBfdGV4dCA9IFwiSW5jbHVzaXZlIG9mIGhvbWUgdmlzaXQgY2hhcmdlc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmljZSA9IHByaWNlICsgcGlja3VwX2NoYXJnZXNcbiAgICAgICAgICAgIGRpc2NvdW50ZWRfcHJpY2UgPSBkaXNjb3VudGVkX3ByaWNlICsgcGlja3VwX2NoYXJnZXNcbiAgICAgICAgICAgIG1ycCA9IG1ycCArIHBpY2t1cF9jaGFyZ2VzXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2ZmUGVyY2VudCA9ICcnXG4gICAgICAgIGlmIChtcnAgJiYgKGRpc2NvdW50ZWRfcHJpY2UgfHwgZGlzY291bnRlZF9wcmljZSA9PSAwKSAmJiAoZGlzY291bnRlZF9wcmljZSA8IG1ycCkpIHtcbiAgICAgICAgICAgIG9mZlBlcmNlbnQgPSBwYXJzZUludCgoKG1ycCAtIGRpc2NvdW50ZWRfcHJpY2UpIC8gbXJwKSAqIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhpZGVfcHJpY2UgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5wcm9wcy50ZXN0X2RhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudGVzdF9kYXRhLm1hcCgodGVzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0LmhpZGVfcHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZV9wcmljZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGxldCBzaG93X2RldGFpbHNJZHMgPSBbXVxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNUZXN0SW5mbykge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzKS5tYXAoZnVuY3Rpb24gKFtrZXksIHZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuc2hvd19kZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93X2RldGFpbHNJZHMucHVzaCh2YWx1ZS5pZClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IGlzX2luc3VyYW5jZV9idXlfYWJsZSA9IGZhbHNlXG4gICAgICAgIGlmIChpbnN1cmFuY2UgJiYgaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIGluc3VyYW5jZS5pc191c2VyX2luc3VyZWQpIHtcbiAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgcGlja3VwX3RleHQgPSBcIlwiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5zdXJhbmNlICYmIGluc3VyYW5jZS5pc19pbnN1cmFuY2VfY292ZXJlZCAmJiAhaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCkge1xuICAgICAgICAgICAgaXNfaW5zdXJhbmNlX2J1eV9hYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGxldCBpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXAgPSBpc192aXBfZW5hYmxlZFxuICAgICAgICBsZXQgaXNfbGFib3BkX2VuYWJsZV9mb3JfZ29sZCA9IGlzX2dvbGRcbiAgICAgICAgbGV0IGlzX3ZpcF9tZW1iZXIgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfZ29sZF9tZW1iZXIgPSBmYWxzZVxuICAgICAgICBsZXQgY292ZXJlZF91bmRlcl92aXAgPSBmYWxzZVxuICAgICAgICBpZiAodmlwICYmIE9iamVjdC5rZXlzKHZpcCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaXNfdmlwX21lbWJlciA9IHZpcC5pc192aXBfbWVtYmVyXG4gICAgICAgICAgICBpc19nb2xkX21lbWJlciA9IHZpcC5pc19nb2xkX21lbWJlclxuICAgICAgICAgICAgY292ZXJlZF91bmRlcl92aXAgPSB2aXAuY292ZXJlZF91bmRlcl92aXBcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzaG93X2NvbW1vbl9wcmljZXMgPSAhaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwIHx8ICgoaXNfZ29sZF9tZW1iZXIgfHwgaXNfdmlwX21lbWJlcikgJiYgIWNvdmVyZWRfdW5kZXJfdmlwKVxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jQ2FyZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWRvY0NhcmQtY29udGVudFwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDEwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2MtZGV0YWlscy1jb250YWluZXIgbGFiQ2FyZFVpcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jLWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgLyR7dXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29rTm93Q2xpY2tlZChpZCwgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtuYW1lfSBoYXNfaW1hZ2U9eyEhbGFiX3RodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17bmFtZX0gY2xhc3NOYW1lPVwiZmx0ci11c3ItaW1hZ2UtbGFiIGhwbC1sb2dvLW5hbWVcIiBzcmM9e2xhYl90aHVtYm5haWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2Z19yYXRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogNCB9fSBjbGFzc05hbWU9XCJyYXRpbmctc3Rhci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmdTdGFycyBhdmVyYWdlX3JhdGluZz17YXZnX3JhdGluZ30gcmF0aW5nX2NvdW50PXtyYXRpbmdfY291bnQgfHwgJyd9IHdpZHRoPVwiMTBweFwiIGhlaWdodD1cIjEwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgLyR7dXJsfWB9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9va05vd0NsaWNrZWQoaWQsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY3N0bURvY05hbWVcIj57bmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0cyAmJiB0aGlzLnByb3BzLmRldGFpbHMudGVzdHMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzLm1hcCgodGVzdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93X2RldGFpbHNJZHMuaW5kZXhPZih0aGlzLnByb3BzLmRldGFpbHMudGVzdHNbMF0uaWQpID4gLTEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9IG9uQ2xpY2s9e3RoaXMudGVzdEluZm8uYmluZCh0aGlzLCB0aGlzLnByb3BzLmRldGFpbHMudGVzdHNbMF0uaWQsIGlkLCB0aGlzLnByb3BzLmRldGFpbHMudGVzdHNbMF0udXJsKX0+e3Rlc3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgJ21hcmdpbkxlZnQnOiAnNXB4JywgbWFyZ2luVG9wOiAnMXB4JywgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvaWNvbnMvSW5mby5zdmcnfSBzdHlsZT17eyB3aWR0aDogJzE1cHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8cCBrZXk9e2luZGV4fT57dGVzdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtLWxhYi10aW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY3N0bVRpbWVJbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy93YXRjaC1kYXRlLnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidWlsZE9wZW5CYW5uZXIobGFiX3RpbWluZywgbGFiX3RpbWluZ19kYXRhLCBuZXh0X2xhYl90aW1pbmcsIG5leHRfbGFiX3RpbWluZ19kYXRhKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBib29raW5nLWNvbHVtblwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAmJiAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgdGhpcy5zdGF0ZS5zc3JGbGFnICYmIChkaXNjb3VudGVkX3ByaWNlIHx8IGRpc2NvdW50ZWRfcHJpY2UgPT0gMCkgJiYgIWhpZGVfcHJpY2UgJiYgISgoaXNfdmlwX21lbWJlciB8fCBpc19nb2xkX21lbWJlcikgJiYgY292ZXJlZF91bmRlcl92aXApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdG0tZG9jLXByaWNlXCI+RG9jcHJpbWUgUHJpY2U8L3A+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmICFzaG93X2NvbW1vbl9wcmljZXMpICYmIDxDb21tb25WaXBHb2xkQmFkZ2UgaXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwPXtpc19sYWJvcGRfZW5hYmxlX2Zvcl92aXB9IGlzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGQ9e2lzX2xhYm9wZF9lbmFibGVfZm9yX2dvbGR9IGlzX3ZpcF9tZW1iZXI9e2lzX3ZpcF9tZW1iZXJ9IGlzX2dvbGRfbWVtYmVyPXtpc19nb2xkX21lbWJlcn0gY292ZXJlZF91bmRlcl92aXA9e2NvdmVyZWRfdW5kZXJfdmlwfSB2aXBfZGF0YT17dmlwfSB7Li4udGhpcy5wcm9wc30gbXJwPXttcnB9IGRpc2NvdW50ZWRfcHJpY2U9e2Rpc2NvdW50ZWRfcHJpY2V9IGdvbGRDbGlja2VkPXsoKSA9PiB0aGlzLmdvbGRDbGlja2VkKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIChkaXNjb3VudGVkX3ByaWNlIHx8IGRpc2NvdW50ZWRfcHJpY2UgPT0gMCkgJiYgIWhpZGVfcHJpY2UgJiYgc2hvd19jb21tb25fcHJpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRpc2NvdW50ZWRfcHJpY2UgIT0gbXJwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9XCJjc3QtZG9jLXByaWNlXCI+4oK5IHtkaXNjb3VudGVkX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cImNzdG0tZG9jLWN1dC1wcmljZVwiPuKCuSB7bXJwfSA8L3NwYW4+IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj7igrkge2Rpc2NvdW50ZWRfcHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc19pbnN1cmFuY2VfYXBwbGljYWJsZSAmJiBkaXNjb3VudGVkX3ByaWNlICE9IHByaWNlICYmICFoaWRlX3ByaWNlICYmIG9mZlBlcmNlbnQgJiYgb2ZmUGVyY2VudCA+IDAgJiYgc2hvd19jb21tb25fcHJpY2VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdG0tY3BuXCI+e29mZlBlcmNlbnR9JSBPZmYgPHNwYW4+PGJyIC8+KGluY2x1ZGVzIENvdXBvbik8L3NwYW4+PC9wPiA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNfdmlwX2FwcGxpY2FibGUgJiYgIXZpcC5pc19nb2xkX21lbWJlciA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmlwLW1haW4taWNvIGltZy1mbHVpZFwiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdmlwbG9nLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB2aXAuaXNfZ29sZF9tZW1iZXI/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ2aXAtbWFpbi1pY28gaW1nLWZsdWlkXCIgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9nb2xkLXNtLnBuZyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2luc3VyYW5jZV9hcHBsaWNhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3N0LWRvYy1wcmljZVwiPuKCuSB7MH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtdmFsLWJ4XCI+Q292ZXJlZCBVbmRlciBJbnN1cmFuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgaXNfdmlwX2FwcGxpY2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3QtZG9jLXByaWNlXCI+4oK5IHt2aXAuaXNfZ29sZF9tZW1iZXI/dmlwLnZpcF9nb2xkX3ByaWNlK3ZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50OnZpcF9hbW91bnR9IDxzcGFuIGNsYXNzTmFtZT1cImNzdG0tZG9jLWN1dC1wcmljZVwiPuKCuSB7bXJwfSA8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgaXNfZW5hYmxlX2Zvcl92aXAgJiYgIWlzX3ZpcF9hcHBsaWNhYmxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgbWFyZ2luVG9wOiA1LCBtYXJnaW5Cb3R0b206IDUsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCB6SW5kZXg6IDEgfX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsZWFyVmlwU2VsZWN0ZWRQbGFuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL3ZpcC1jbHViLWRldGFpbHM/c291cmNlPWxhYmxpc3RpbmcmbGVhZF9zb3VyY2U9RG9jcHJpbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ29uc3VtZXJBcHAnLCAnQWN0aW9uJzogJ0xhYkNhcmRWSVBDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLWNhcmQtdmlwLWNsaWNrZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmdy01MDAgZ3JuLXR4dC12aXBcIj5TYXZlIDI1JSB3aXRoPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy92aXBsb2cucG5nJ30gc3R5bGU9e3sgd2lkdGg6IDE4LCBtYXJnaW5MZWZ0OiA0LCBtYXJnaW5SaWdodDogMiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmcnfSBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGUoLTkwZGVnKScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIWlzX2luc3VyYW5jZV9hcHBsaWNhYmxlICYmIGlzX3ZpcF9nb2xkICYmICFpc192aXBfYXBwbGljYWJsZSAmJiBkaXNjb3VudGVkX3ByaWNlPih2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudHx8MCArIHZpcC52aXBfZ29sZF9wcmljZXx8MCkgJiYgIXZpcC5pc19nb2xkX21lbWJlciAmJiA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZCBnb2xkQ2FyZFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZ29sZENsaWNrZWQoKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxpbWcgY2xhc3NOYW1lPVwiZ2xkLWNkLWljb25cIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL2dvbGQtc20ucG5nJ30vPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxwIGNsYXNzTmFtZT1cImdsZC1wLXJjXCI+UHJpY2U8L3A+IDxzcGFuIGNsYXNzTmFtZT1cImdsZC1yYXRlLWxmXCI+4oK5IHt2aXAudmlwX2NvbnZlbmllbmNlX2Ftb3VudHx8MCArIHZpcC52aXBfZ29sZF9wcmljZXx8MH08L3NwYW4+PGltZyBzdHlsZT17e3RyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJywgd2lkdGg6ICcxMHB4J319IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnJ30vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghaXNfaW5zdXJhbmNlX2FwcGxpY2FibGUgJiYgIXNob3dfY29tbW9uX3ByaWNlcykgJiYgPENvbW1vblZpcEdvbGROb25Mb2dpbkJhZGdlIGlzX2xhYm9wZF9lbmFibGVfZm9yX3ZpcD17aXNfbGFib3BkX2VuYWJsZV9mb3JfdmlwfSBpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkPXtpc19sYWJvcGRfZW5hYmxlX2Zvcl9nb2xkfSBpc192aXBfbWVtYmVyPXtpc192aXBfbWVtYmVyfSBpc19nb2xkX21lbWJlcj17aXNfZ29sZF9tZW1iZXJ9IGNvdmVyZWRfdW5kZXJfdmlwPXtjb3ZlcmVkX3VuZGVyX3ZpcH0gdmlwX2RhdGE9e3ZpcH0gey4uLnRoaXMucHJvcHN9IG1ycD17bXJwfSBkaXNjb3VudGVkX3ByaWNlPXtkaXNjb3VudGVkX3ByaWNlfSBnb2xkQ2xpY2tlZD17KCkgPT4gdGhpcy5nb2xkQ2xpY2tlZCgpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNzdG0tYm9vay1idG5cIiBvbkNsaWNrPXt0aGlzLmJvb2tOb3dDbGlja2VkLmJpbmQodGhpcywgaWQsIHVybCl9PkJvb2sgTm93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICBpc19pbnN1cmFuY2VfYnV5X2FibGUgJiYgdGhpcy5wcm9wcy5jb21tb25fc2V0dGluZ3MgJiYgdGhpcy5wcm9wcy5jb21tb25fc2V0dGluZ3MuaW5zdXJhbmNlX2F2YWlsYWJpbGl0eT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zLWJ1eWFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Cb29rIHRoaXMgTGFiIGZvciDigrkwIHdpdGggT1BEIEluc3VyYW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fSBvbkNsaWNrPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnS25vd01vcmVMYWJDbGlja2VkJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAna25vdy1tb3JlLWxhYi1jbGlja2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2luc3VyYW5jZS1wbGFucz9zb3VyY2U9bGFiLWxpc3Rpbmcmc2hvd19idXR0b249dHJ1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+S25vdyBtb3JlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6JydcbiAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjc3RtQ2FyZEZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG1mb290ZXJDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlja3VwX3RleHQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTZweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3N0bWhvbWUuc3ZnXCJ9IC8+e3BpY2t1cF90ZXh0fTwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItcm12XCI+PGltZyBzdHlsZT17eyB3aWR0aDogJzEwcHgnLCBtYXJnaW5MZWZ0OiAnM3B4JyB9fSBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9uZXctbG9jLWljby5zdmdcIn0gLz57YWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNzdG1Eb2NMb2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3N0bWRpc3Quc3ZnXCJ9IC8+IHtkaXN0YW5jZX1LbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93Qm9va1Rlc3RMaXN0Q29udGFpbmVyIG10LXJtdlwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcl9sYWJzICYmIG90aGVyX2xhYnMubGVuZ3RoICYmIHRoaXMuc3RhdGUub3BlblZpZXdNb3JlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dCb29rVGVzdExpc3QgYmctd2hpdGUtbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJfbGFicy5tYXAoKG9sYWIsIHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2hvd0Jvb2tUZXN0TGlzdEltZ1wiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvbmV3LWxvYy1pY28uc3ZnXCJ9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnOHB4Jywgd2lkdGg6IFwiMTJweFwiIH19IC8+e29sYWIuYWRkcmVzc30gfCB7TWF0aC5jZWlsKG9sYWIuZGlzdGFuY2UgLyAxMDAwKX0ga208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNob3dCb29rVGVzdExpc3RCdG5cIiBvbkNsaWNrPXt0aGlzLmJvb2tOb3dDbGlja2VkLmJpbmQodGhpcywgb2xhYi5pZCwgb2xhYi51cmwpfT5Cb29rIE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcl9sYWJzICYmIG90aGVyX2xhYnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRyLWNhcmQtZm9vdGVyIGJnLXdoaXRlLW1haW5cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVZpZXdNb3JlLmJpbmQodGhpcyl9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBib3JkZXJUb3A6ICcxcHggc29saWQgI2U4ZThlOCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlblZpZXdNb3JlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCI4cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXBwQmFzZUNvbG9yXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzBweCcgfX0+U2hvdyBsZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCI4cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXBwQmFzZUNvbG9yXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzBweCcgfX0+VmlldyB7b3RoZXJfbGFicy5sZW5ndGh9IG1vcmUgbG9jYXRpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlblZpZXdNb3JlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWFyZ2luOiAnNXB4JyB9fSBjbGFzc05hbWU9XCJhY3JkLXNob3dcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1hcmdpbjogJzVweCcgfX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvZHJvcGRvd24tYXJyb3cuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWNhcmQtZGwgbWItM1wiPlxuICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdHItY3JkLXRvcC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmx0ci1sY3RuLWR0bHNcIiBvbkNsaWNrPXt0aGlzLmJvb2tOb3dDbGlja2VkLmJpbmQodGhpcywgaWQsIHVybCl9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxwPjxpbWcgY2xhc3NOYW1lPVwiZmx0ci1sb2MtaWNvXCIgc3JjPVwiL2Fzc2V0cy9pbWcvbmV3LWxvYy1pY28uc3ZnXCIgc3R5bGU9e3sgd2lkdGg6ICcxMnB4JywgaGVpZ2h0OiAnMThweCcgfX0gLz48c3BhbiBjbGFzc05hbWU9XCJmbHRyLWxvYy10eHRcIj57YWRkcmVzc308L3NwYW4+PHNwYW4+Jm5ic3A7fCZuYnNwO3tkaXN0YW5jZX0gS208L3NwYW4+PC9wPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIG1ydC0xMFwiIG9uQ2xpY2s9e3RoaXMuYm9va05vd0NsaWNrZWQuYmluZCh0aGlzLCBpZCwgdXJsKX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsfSBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsYWItZmx0ci1kYy1uYW1lIGZ3LTUwMCB0ZXh0LW1kXCI+e25hbWV9PC9oMj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAhaGlkZV9wcmljZSAmJiBvZmZQZXJjZW50ICYmIG9mZlBlcmNlbnQgPiAwID9cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ci1vZmZlciBvZnItcmliYm9uIGZ3LTcwMFwiPntvZmZQZXJjZW50fSUgT0ZGPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IG1ydC0xMFwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1uZC1kdGxzXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluaXRpYWxzUGljdHVyZSBuYW1lPXtuYW1lfSBoYXNfaW1hZ2U9eyEhbGFiX3RodW1ibmFpbH0gY2xhc3NOYW1lPVwiaW5pdGlhbHNQaWN0dXJlLWxzXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmx0ci11c3ItaW1hZ2UtbGFiXCIgc3JjPXtsYWJfdGh1bWJuYWlsfSAvPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5pdGlhbHNQaWN0dXJlPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc4cHgnLCBtYXJnaW5SaWdodDogJzhweCcgfX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRldGFpbHMudGVzdHMgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzLmxlbmd0aCA9PSAxID8gPHAgc3R5bGU9e3sgY29sb3I6IFwicmdiKDAsIDAsIDApXCIsIGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogNDAwIH19Pnt0aGlzLnByb3BzLmRldGFpbHMudGVzdHNbMF0ubmFtZX1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X2RldGFpbHNJZHMuaW5kZXhPZih0aGlzLnByb3BzLmRldGFpbHMudGVzdHNbMF0uaWQpID4gLTEgPyA8c3BhbiBzdHlsZT17eyAnbWFyZ2luTGVmdCc6ICc1cHgnLCBtYXJnaW5Ub3A6ICcxcHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBvbkNsaWNrPXt0aGlzLnRlc3RJbmZvLmJpbmQodGhpcywgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzWzBdLmlkLCBpZCwgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzWzBdLnVybCl9PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL2luZm8uc3ZnXCIgLz5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDogJydcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiA6IFwiXCJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRldGFpbHMudGVzdHMgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzLmxlbmd0aCA9PSAxICYmIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0c1swXS5udW1iZXJfb2ZfdGVzdHMgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzWzBdLm51bWJlcl9vZl90ZXN0cyAhPSBudWxsID8gPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fT48aDMgY2xhc3NOYW1lPVwibGFiLWZsdHItZGMtbmFtZSBmdy01MDAgcGtnLWluY2x1ZGVcIj57dGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzWzBdLm51bWJlcl9vZl90ZXN0c30gVGVzdHMgSW5jbHVkZWQ8L2gzPjwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGV0YWlscy50ZXN0cyAmJiB0aGlzLnByb3BzLmRldGFpbHMudGVzdHMubGVuZ3RoID09IDEgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzWzBdLmNhdGVnb3J5X2RldGFpbHMgJiYgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzWzBdLmNhdGVnb3J5X2RldGFpbHMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNXB4JyB9fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0c1swXS5jYXRlZ29yeV9kZXRhaWxzLm1hcCgoY2F0ZWdvcnlfZGV0YWlsLCBrKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT1cInBrZy1saXN0aW5nLXRpY2tcIiBrZXk9e2t9IGlkPXtrfT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsdHItbG9jLWljb1wiIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2NoZWNrcy5zdmdcIn0gc3R5bGU9e3sgd2lkdGg6ICcxMnB4JywgbWFyZ2luVG9wOiAnNnB4JyB9fSAvPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeV9kZXRhaWwuY2F0ZWdvcnl9ICh7Y2F0ZWdvcnlfZGV0YWlsLmNvdW50fSlcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01IG1ydC0xMCB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgcGFkZGluZ2xlZnQ6ICc4cHgnIH19PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudGVkX3ByaWNlICYmICFoaWRlX3ByaWNlID8gPHAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZ3LTUwMCB0ZXh0LWxnIG1yYi0xMFwiPuKCuSB7ZGlzY291bnRlZF9wcmljZX08c3BhbiBjbGFzc05hbWU9XCJmbHRyLWN1dC1wcmljZVwiIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICcxcHgnIH19PuKCuSB7bXJwfTwvc3Bhbj48L3A+IDogXCJcIlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfcHJpY2UgPyA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZnctNTAwIHRleHQtbGcgbXJiLTEwXCI+RnJlZTwvcD4gOiBcIlwiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudGVkX3ByaWNlICE9IHByaWNlID8gPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtb2ZmLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpZ251cC1vZmYtZG9jLWdyZWVuXCIgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19ID5JbmNsdWRlcyBjb3Vwb24gZGlzY291bnQ8L3NwYW4+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtcnQtMTBcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YnV0dG9uIGNsYXNzTmFtZT1cImZsdHItY250Y3QtYnRuIGJ0bi1wZG5nXCIgIG9uQ2xpY2s9e3RoaXMub3BlbkxhYi5iaW5kKHRoaXMsIGlkLCB1cmwpfSA+VmlldyBQcm9maWxlPC9idXR0b24+Ki99XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsdHItYmtuZy1idG4gYnRuLXBkbmdcIj5Cb29rIE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzICYmIHRoaXMucHJvcHMuZGV0YWlscy50ZXN0cy5sZW5ndGggPj0gMiA/XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmx0ci1sYWJzLXRlc3Qtc2VsZWN0ZWQgbXJ0LTEwXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmx0ci1wcnYtc2VsZWN0ZWQtdGVzdFwiPlRlc3RzIFNlbGVjdGVkPC9zcGFuPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXRhaWxzLnRlc3RzLm1hcCgodGVzdCwgaSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJmbHRyLXNsZWN0ZWQtdGVzdFwiIGtleT17aX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCB9fT57dGVzdC5uYW1lfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfZGV0YWlsc0lkcy5pbmRleE9mKHRlc3QuaWQpID4gLTEgP1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ICdtYXJnaW5MZWZ0JzogJzVweCcsIG1hcmdpblRvcDogJzFweCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IG9uQ2xpY2s9e3RoaXMudGVzdEluZm8uYmluZCh0aGlzLCB0ZXN0LmlkLCBpZCwgdGVzdC51cmwpfT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9pbmZvLnN2Z1wiIC8+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiA6ICcnXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9wcmljZSA/XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAgfX0+RnJlZTwvcD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHAgc3R5bGU9e3sgZm9udFdlaWdodDogNDAwIH19PiYjeDIwQjk7IHt0ZXN0LmRlYWxfcHJpY2V9IDxzcGFuPiYjeDIwQjk7IHt0ZXN0Lm1ycH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ci1jYXJkLWZvb3RlclwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCI4cHhcIiB9fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHBpY2t1cF90ZXh0ID8gPHAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzBweCcgfX0+KiB7cGlja3VwX3RleHR9PC9wPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL2N1c3RvbWVyLWljb25zL2Nsb2NrLWJsYWNrLnN2Z1wiIC8+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fT57YnVpbGRPcGVuQmFubmVyKGxhYl90aW1pbmcsIGxhYl90aW1pbmdfZGF0YSwgbmV4dF9sYWJfdGltaW5nLCBuZXh0X2xhYl90aW1pbmdfZGF0YSl9PC9wPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dCb29rVGVzdExpc3RDb250YWluZXJcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBvdGhlcl9sYWJzICYmIG90aGVyX2xhYnMubGVuZ3RoICYmIHRoaXMuc3RhdGUub3BlblZpZXdNb3JlID8gPGRpdiBjbGFzc05hbWU9XCJzaG93Qm9va1Rlc3RMaXN0XCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcl9sYWJzLm1hcCgob2xhYiwgeCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17eH0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaG93Qm9va1Rlc3RMaXN0SW1nXCI+IDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvbmV3LWxvYy1pY28uc3ZnXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnLCB3aWR0aDogXCIxMnB4XCIgfX0gLz57b2xhYi5hZGRyZXNzfSB8IHtNYXRoLmNlaWwob2xhYi5kaXN0YW5jZSAvIDEwMDApfSBrbSA8L3A+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNob3dCb29rVGVzdExpc3RCdG5cIiBvbkNsaWNrPXt0aGlzLmJvb2tOb3dDbGlja2VkLmJpbmQodGhpcywgb2xhYi5pZCwgb2xhYi51cmwpfT5Cb29rIE5vdzwvYnV0dG9uPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgb3RoZXJfbGFicyAmJiBvdGhlcl9sYWJzLmxlbmd0aCA/IDxkaXYgY2xhc3NOYW1lPVwiZmlsdHItY2FyZC1mb290ZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVZpZXdNb3JlLmJpbmQodGhpcyl9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBib3JkZXJUb3A6ICcxcHggc29saWQgI2U4ZThlOCcgfX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlblZpZXdNb3JlID8gPGRpdiBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IFwiOHB4XCIgfX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXBwQmFzZUNvbG9yXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzBweCcgfX0+U2hvdyBsZXNzPC9wPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogPGRpdiBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IFwiOHB4XCIgfX0+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFwcEJhc2VDb2xvclwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwcHgnIH19PlZpZXcge290aGVyX2xhYnMubGVuZ3RofSBtb3JlIGxvY2F0aW9uczwvcD5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm9wZW5WaWV3TW9yZSA/IDxpbWcgc3R5bGU9e3sgbWFyZ2luOiAnNXB4JyB9fSBjbGFzc05hbWU9XCJhY3JkLXNob3dcIiBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIiAvPiA6IDxpbWcgc3R5bGU9e3sgbWFyZ2luOiAnNXB4JyB9fSBjbGFzc05hbWU9XCJcIiBzcmM9XCIvYXNzZXRzL2ltZy9jdXN0b21lci1pY29ucy9kcm9wZG93bi1hcnJvdy5zdmdcIiAvPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhYlByb2ZpbGVDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==