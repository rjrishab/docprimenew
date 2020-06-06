(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./dev/js/components/diagnosis/testSelector/TestSelector.js":
/*!******************************************************************!*\
  !*** ./dev/js/components/diagnosis/testSelector/TestSelector.js ***!
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

var _Loader = __webpack_require__(/*! ../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _LeftBar = __webpack_require__(/*! ../../commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _gtm = __webpack_require__(/*! ../../../helpers/gtm.js */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var TestSelectorView = function (_React$Component) {
    _inherits(TestSelectorView, _React$Component);

    function TestSelectorView(props) {
        _classCallCheck(this, TestSelectorView);

        var _this = _possibleConstructorReturn(this, (TestSelectorView.__proto__ || Object.getPrototypeOf(TestSelectorView)).call(this, props));

        _this.hideResultIndicator = function () {
            window.scrollY > 10 ? _this.setState({ moreResultIndicator: false }) : "";
        };

        var parsed = queryString.parse(_this.props.location.search);

        var lab_id = _this.props.selectedLab;

        _this.hideResultIndicator = _this.hideResultIndicator.bind(_this);
        _this.state = {
            hasMore: false,
            selectedLab: lab_id,
            searchResults: [],
            searchString: '',
            moreResultIndicator: true,
            page: 1,
            itemSelectedVisible: true
        };
        return _this;
    }

    _createClass(TestSelectorView, [{
        key: 'fetchData',
        value: function fetchData(props) {
            var _this2 = this;

            if (props.selectedLab) {
                var testIds = props.lab_test_data[props.selectedLab] || [];
                testIds = testIds.map(function (x) {
                    return x.id;
                });

                props.getLabById(props.selectedLab, testIds);
                this.getSearchList("");

                if (this.inputRef) {
                    this.inputRef.focus();
                }

                if (window) {
                    window.scrollTo(0, 0);
                }

                window.addEventListener('scroll', this.hideResultIndicator);

                setTimeout(function () {
                    _this2.setState({ hasMore: true });
                }, 0);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.selectedLab != this.props.selectedLab) {
                this.fetchData(props);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchData(this.props);
        }
    }, {
        key: 'toggleTest',
        value: function toggleTest(test_to_toggle) {
            var test = Object.assign({}, test_to_toggle.test);
            test.mrp = test_to_toggle.mrp;
            test.deal_price = test_to_toggle.deal_price;
            test.extra_test = true;
            test.lab_id = this.props.selectedLab;

            this.props.toggleDiagnosisCriteria('test', test);
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(e) {
            var _this3 = this;

            this.setState({ searchString: e.target.value, hasMore: true, page: 1, searchResults: [] }, function () {
                _this3.getSearchList(_this3.state.searchString);
            });
            if (window) {
                window.scrollTo(0, 0);
            }
            if (e.target.value) {
                this.setState({ itemSelectedVisible: false });
            } else {
                this.setState({ itemSelectedVisible: true });
            }
        }
    }, {
        key: 'getSearchList',
        value: function getSearchList(search_string) {
            var _this4 = this;

            var page_no = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var cb = arguments[2];

            this.props.getLabTests(this.props.selectedLab, search_string, function (searchResults) {
                if (searchResults) {
                    if (cb) {
                        cb(searchResults);
                    } else {
                        _this4.setState({ searchResults: searchResults });
                    }
                }
            }, page_no);
            search_string ? this.setState({ moreResultIndicator: false }) : "";
        }
    }, {
        key: 'loadMore',
        value: function loadMore() {
            var _this5 = this;

            var page = this.state.page;
            this.setState({ hasMore: false, loading: true });

            this.getSearchList(this.state.searchString, page + 1, function (searchResults) {
                searchResults = searchResults || [];
                var results = _this5.state.searchResults.concat(searchResults);
                var dedupe = {};
                results = results.filter(function (test) {
                    if (!dedupe[test.test.id]) {
                        dedupe[test.test.id] = true;
                        return true;
                    }
                    return false;
                });
                var more = false;
                if (results > _this5.state.searchResults) {
                    more = true;
                }
                _this5.setState({ loading: false, page: page + 1, searchResults: results, hasMore: more });
            });
        }
    }, {
        key: 'testInfo',
        value: function testInfo(test_id, url, event) {
            var lab_id = this.props.selectedLab;
            var selected_test_ids = this.props.selectedCriterias || [];
            selected_test_ids = selected_test_ids.map(function (x) {
                return x.id;
            });
            var lat = 28.644800;
            var long = 77.216721;
            if (this.props.selectedLocation !== null) {
                lat = this.props.selectedLocation.geometry.location.lat;
                long = this.props.selectedLocation.geometry.location.lng;

                if (typeof lat === 'function') lat = lat();
                if (typeof long === 'function') long = long();
            }
            if (url && url != '') {
                this.props.history.push('/' + url + '?test_ids=' + test_id + '&lab_id=' + lab_id + '&selected_test_ids=' + selected_test_ids + '&lat=' + lat + '&long=' + long);
            } else {
                this.props.history.push('/search/testinfo?test_ids=' + test_id + '&lab_id=' + lab_id + '&selected_test_ids=' + selected_test_ids + '&lat=' + lat + '&long=' + long);
            }
            event.stopPropagation();
            var data = {
                'Category': 'ConsumerApp', 'Action': 'testInfoClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'test-info-click', 'pageSource': 'lab-test-page'
            };
            _gtm2.default.sendEvent({ data: data });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var labData = this.props.LABS[this.props.selectedLab];
            var selectedTests = this.props.lab_test_data[this.props.selectedLab] || [];
            var selectedTestIds = selectedTests.map(function (x) {
                return x.id;
            });
            var tests = [];
            var testIds = [];
            var allTests = this.state.searchResults;
            var testVal = {};
            var is_user_insured = false;
            var is_user_vip = false;
            var is_user_gold_vip = false;

            //Check for USER STATUS

            if (this.props.profiles && this.props.profiles[this.props.defaultProfile]) {
                is_user_insured = this.props.profiles[this.props.defaultProfile].is_insured;
                is_user_vip = this.props.profiles[this.props.defaultProfile].is_vip_member;
                is_user_gold_vip = this.props.profiles[this.props.defaultProfile].is_vip_gold_member;
            }

            if (labData) {

                selectedTests.map(function (criteria) {
                    var found = false;
                    testVal = {};
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = allTests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var test = _step.value;

                            if (test.test.id == criteria.id) {
                                found = true;
                                testVal = test;
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

                    if (!found) {
                        testIds.push(criteria.id);
                        //GET insurance Data
                        var test_insured = [];
                        var insurance_data = {};
                        if (_this6.props.currentLabSelectedTests && _this6.props.currentLabSelectedTests.length) {
                            test_insured = _this6.props.currentLabSelectedTests.filter(function (x) {
                                return x.id == criteria.id;
                            });
                            if (test_insured && test_insured.length && test_insured[0].insurance) {
                                insurance_data = test_insured[0].insurance;
                            }
                        }
                        tests.push(_extends({}, criteria, { test: criteria }, testVal, insurance_data));
                    }
                });
                tests = labData && labData.tests ? labData.tests.filter(function (x) {
                    return testIds.indexOf(x.test.id) > -1;
                }) : [];
            }

            return _react2.default.createElement(
                'div',
                { className: 'profile-body-wrap' },
                _react2.default.createElement(_DesktopProfileHeader2.default, null),
                _react2.default.createElement(
                    'section',
                    { className: 'container parent-section test-search-section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row main-row parent-section-row' },
                        _react2.default.createElement(_LeftBar2.default, null),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12 col-md-7 col-lg-7 center-column' },
                            labData ? _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'header',
                                    { className: 'skin-white fixed horizontal top location-detect-header sticky-header', style: { top: 44 } },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'container-fluid' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'row' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'col-12', style: { paddingTop: 10, borderBottom: '1px solid #d3d3d3' } },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'search-row' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'adon-group location-detect-field' },
                                                        _react2.default.createElement('input', { type: 'text', ref: function ref(input) {
                                                                _this6.inputRef = input;
                                                            }, className: 'new-srch-doc-lab', placeholder: 'Search Test', onChange: this.inputHandler.bind(this) }),
                                                        _react2.default.createElement('img', { className: 'srch-inp-img', src: "/assets" + "/img/shape-srch.svg", style: { width: 15 } })
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'section',
                                    { className: 'wrap', style: { paddingTop: 0 } },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'widget-panel' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'panel-content pd-0' },
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'label-cpn text-right' },
                                                    'Coupon applies at booking summary'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'detect-my-locaiton rmv-pointer mrt-10', style: { textAlign: 'left', color: '#000', paddingLeft: "20px" } },
                                                this.state.itemSelectedVisible ? selectedTestIds.length > 1 ? selectedTestIds.length + ' Items Selected' : selectedTestIds.length + ' Item Selected' : ''
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'list all-test-list mrt-10', id: 'lab-tests-list' },
                                                this.state.searchResults.length ? _react2.default.createElement(
                                                    _reactInfiniteScroller2.default,
                                                    {
                                                        pageStart: 0,
                                                        loadMore: this.loadMore.bind(this),
                                                        hasMore: this.state.hasMore,
                                                        useWindow: true
                                                    },
                                                    this.state.searchString == '' ? tests.map(function (test, i) {
                                                        return _react2.default.createElement(
                                                            'li',
                                                            { key: i + "srt" },
                                                            _react2.default.createElement(
                                                                'label',
                                                                { className: 'ck-bx', style: { fontWeight: 400, fontSize: 14 } },
                                                                test.test.name,
                                                                test.test.show_details ? _react2.default.createElement(
                                                                    'span',
                                                                    { style: { 'marginLeft': '5px', marginTop: '2px', display: 'inline-block' }, onClick: _this6.testInfo.bind(_this6, test.test.id, test.url) },
                                                                    _react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/Info.svg', style: { width: '15px' } })
                                                                ) : '',
                                                                _react2.default.createElement('input', { type: 'checkbox', checked: selectedTestIds.indexOf(test.test.id) > -1, onChange: _this6.toggleTest.bind(_this6, test) }),
                                                                _react2.default.createElement('span', { className: 'checkmark' })
                                                            ),
                                                            test.insurance && test.insurance.is_insurance_covered && test.insurance.is_user_insured || test.included_in_user_plan ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'test-price text-sm' },
                                                                '\u20B9 ',
                                                                0
                                                            ) : test.deal_price == test.mrp.split('.')[0] ? _react2.default.createElement(
                                                                'span',
                                                                { className: 'test-price text-sm' },
                                                                '\u20B9 ',
                                                                test.deal_price
                                                            ) : _react2.default.createElement(
                                                                'span',
                                                                { className: 'test-price text-sm' },
                                                                '\u20B9 ',
                                                                test.deal_price,
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'test-mrp' },
                                                                    '\u20B9 ',
                                                                    test.mrp.split('.')[0]
                                                                )
                                                            )
                                                        );
                                                    }) : '',
                                                    this.state.searchResults.map(function (test, i) {
                                                        return _react2.default.createElement(
                                                            'li',
                                                            { key: i + "srt" },
                                                            _react2.default.createElement(
                                                                'label',
                                                                { className: 'ck-bx', style: { fontWeight: 400, fontSize: 14 } },
                                                                test.test.name,
                                                                test.test.show_details ? _react2.default.createElement(
                                                                    'span',
                                                                    { style: { 'marginLeft': '5px', marginTop: '2px', display: 'inline-block' }, onClick: _this6.testInfo.bind(_this6, test.test.id, test.url) },
                                                                    _react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/Info.svg', style: { width: '15px' } })
                                                                ) : '',
                                                                _react2.default.createElement('input', { type: 'checkbox', checked: selectedTestIds.indexOf(test.test.id) > -1, onChange: _this6.toggleTest.bind(_this6, test) }),
                                                                _react2.default.createElement('span', { className: 'checkmark' })
                                                            ),
                                                            test.insurance && test.insurance.is_insurance_covered && test.insurance.is_user_insured || test.included_in_user_plan ? _react2.default.createElement(
                                                                'div',
                                                                { className: 'test-price text-sm' },
                                                                '\u20B9 ',
                                                                0
                                                            ) : is_user_vip || is_user_gold_vip ? parseInt(test.vip.vip_gold_price) + parseInt(test.vip.vip_convenience_amount) == test.mrp.split('.')[0] ? _react2.default.createElement(
                                                                'span',
                                                                { className: 'test-price text-sm' },
                                                                '\u20B9 ',
                                                                parseInt(test.vip.vip_gold_price || 0) + parseInt(test.vip.vip_convenience_amount || 0)
                                                            ) : _react2.default.createElement(
                                                                'span',
                                                                { className: 'test-price text-sm' },
                                                                '\u20B9 ',
                                                                parseInt(test.vip.vip_gold_price) + parseInt(test.vip.vip_convenience_amount),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'test-mrp' },
                                                                    '\u20B9 ',
                                                                    test.mrp.split('.')[0]
                                                                )
                                                            ) : test.deal_price == test.mrp.split('.')[0] ? _react2.default.createElement(
                                                                'span',
                                                                { className: 'test-price text-sm' },
                                                                '\u20B9 ',
                                                                test.deal_price
                                                            ) : _react2.default.createElement(
                                                                'span',
                                                                { className: 'test-price text-sm' },
                                                                '\u20B9 ',
                                                                test.deal_price,
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'test-mrp' },
                                                                    '\u20B9 ',
                                                                    test.mrp.split('.')[0]
                                                                )
                                                            )
                                                        );
                                                    })
                                                ) : ''
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { className: 'v-btn p-3 v-btn-primary btn-lg fixed horizontal bottom no-round text-lg sticky-btn', onClick: function onClick() {
                                            var data = {
                                                'Category': 'ConsumerApp', 'Action': 'DoneClickedOnAddTestPage', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'done-clicked-add-test-page'
                                            };
                                            _gtm2.default.sendEvent({ data: data });
                                            _this6.props.history.go(-1);
                                        } },
                                    'Done'
                                )
                            ) : _react2.default.createElement(_Loader2.default, null)
                        ),
                        _react2.default.createElement(_RightBar2.default, { extraClass: ' chat-float-btn-2', type: 'lab', msgTemplate: 'gold_general_template' })
                    )
                )
            );
        }
    }]);

    return TestSelectorView;
}(_react2.default.Component);

exports.default = TestSelectorView;

/***/ }),

/***/ "./dev/js/components/diagnosis/testSelector/index.js":
/*!***********************************************************!*\
  !*** ./dev/js/components/diagnosis/testSelector/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TestSelector = __webpack_require__(/*! ./TestSelector */ "./dev/js/components/diagnosis/testSelector/TestSelector.js");

var _TestSelector2 = _interopRequireDefault(_TestSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TestSelector2.default;

/***/ }),

/***/ "./dev/js/containers/diagnosis/TestSelector.js":
/*!*****************************************************!*\
  !*** ./dev/js/containers/diagnosis/TestSelector.js ***!
  \*****************************************************/
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

var _testSelector = __webpack_require__(/*! ../../components/diagnosis/testSelector */ "./dev/js/components/diagnosis/testSelector/index.js");

var _testSelector2 = _interopRequireDefault(_testSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var TestSelector = function (_React$Component) {
    _inherits(TestSelector, _React$Component);

    function TestSelector(props) {
        _classCallCheck(this, TestSelector);

        return _possibleConstructorReturn(this, (TestSelector.__proto__ || Object.getPrototypeOf(TestSelector)).call(this, props));
    }

    _createClass(TestSelector, [{
        key: 'render',
        value: function render() {
            var parsed = queryString.parse(this.props.location.search);
            var lab_id = this.props.selectedLab || this.props.match.params.id || parsed.lab_id;

            return _react2.default.createElement(_testSelector2.default, _extends({}, this.props, { selectedLab: lab_id }));
        }
    }]);

    return TestSelector;
}(_react2.default.Component);

TestSelector.contextTypes = {
    router: function router() {
        return null;
    }
};


var mapStateToProps = function mapStateToProps(state) {
    var _state$SEARCH_CRITERI = state.SEARCH_CRITERIA_LABS,
        lab_test_data = _state$SEARCH_CRITERI.lab_test_data,
        selectedLocation = _state$SEARCH_CRITERI.selectedLocation,
        selectedCriterias = _state$SEARCH_CRITERI.selectedCriterias,
        filterCriteria = _state$SEARCH_CRITERI.filterCriteria,
        LOADED_SEARCH_CRITERIA_LAB = _state$SEARCH_CRITERI.LOADED_SEARCH_CRITERIA_LAB,
        currentLabSelectedTests = _state$SEARCH_CRITERI.currentLabSelectedTests;
    var _state$USER = state.USER,
        selectedProfile = _state$USER.selectedProfile,
        profiles = _state$USER.profiles,
        defaultProfile = _state$USER.defaultProfile,
        is_any_user_buy_gold = _state$USER.is_any_user_buy_gold;


    var LABS = state.LABS;

    return {
        lab_test_data: lab_test_data,
        selectedCriterias: selectedCriterias,
        selectedLocation: selectedLocation,
        LABS: LABS,
        currentLabSelectedTests: currentLabSelectedTests,
        selectedProfile: selectedProfile, profiles: profiles, defaultProfile: defaultProfile, is_any_user_buy_gold: is_any_user_buy_gold
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria));
        },
        getLabById: function getLabById(labId, testIds) {
            return dispatch((0, _index.getLabById)(labId, testIds));
        },
        getLabTests: function getLabTests(labid, search_string, callback, page) {
            return dispatch((0, _index.getLabTests)(labid, search_string, callback, page));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TestSelector);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvdGVzdFNlbGVjdG9yL1Rlc3RTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvdGVzdFNlbGVjdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb250YWluZXJzL2RpYWdub3Npcy9UZXN0U2VsZWN0b3IuanMiXSwibmFtZXMiOlsicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiVGVzdFNlbGVjdG9yVmlldyIsInByb3BzIiwiaGlkZVJlc3VsdEluZGljYXRvciIsIndpbmRvdyIsInNjcm9sbFkiLCJzZXRTdGF0ZSIsIm1vcmVSZXN1bHRJbmRpY2F0b3IiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwibGFiX2lkIiwic2VsZWN0ZWRMYWIiLCJiaW5kIiwic3RhdGUiLCJoYXNNb3JlIiwic2VhcmNoUmVzdWx0cyIsInNlYXJjaFN0cmluZyIsInBhZ2UiLCJpdGVtU2VsZWN0ZWRWaXNpYmxlIiwidGVzdElkcyIsImxhYl90ZXN0X2RhdGEiLCJtYXAiLCJ4IiwiaWQiLCJnZXRMYWJCeUlkIiwiZ2V0U2VhcmNoTGlzdCIsImlucHV0UmVmIiwiZm9jdXMiLCJzY3JvbGxUbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZmV0Y2hEYXRhIiwidGVzdF90b190b2dnbGUiLCJ0ZXN0IiwiT2JqZWN0IiwiYXNzaWduIiwibXJwIiwiZGVhbF9wcmljZSIsImV4dHJhX3Rlc3QiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaF9zdHJpbmciLCJwYWdlX25vIiwiY2IiLCJnZXRMYWJUZXN0cyIsImxvYWRpbmciLCJyZXN1bHRzIiwiY29uY2F0IiwiZGVkdXBlIiwiZmlsdGVyIiwibW9yZSIsInRlc3RfaWQiLCJ1cmwiLCJldmVudCIsInNlbGVjdGVkX3Rlc3RfaWRzIiwic2VsZWN0ZWRDcml0ZXJpYXMiLCJsYXQiLCJsb25nIiwic2VsZWN0ZWRMb2NhdGlvbiIsImdlb21ldHJ5IiwibG5nIiwiaGlzdG9yeSIsInB1c2giLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhIiwiR1RNIiwiZ2V0VXNlcklkIiwic2VuZEV2ZW50IiwibGFiRGF0YSIsIkxBQlMiLCJzZWxlY3RlZFRlc3RzIiwic2VsZWN0ZWRUZXN0SWRzIiwidGVzdHMiLCJhbGxUZXN0cyIsInRlc3RWYWwiLCJpc191c2VyX2luc3VyZWQiLCJpc191c2VyX3ZpcCIsImlzX3VzZXJfZ29sZF92aXAiLCJwcm9maWxlcyIsImRlZmF1bHRQcm9maWxlIiwiaXNfaW5zdXJlZCIsImlzX3ZpcF9tZW1iZXIiLCJpc192aXBfZ29sZF9tZW1iZXIiLCJjcml0ZXJpYSIsImZvdW5kIiwidGVzdF9pbnN1cmVkIiwiaW5zdXJhbmNlX2RhdGEiLCJjdXJyZW50TGFiU2VsZWN0ZWRUZXN0cyIsImxlbmd0aCIsImluc3VyYW5jZSIsImluZGV4T2YiLCJ0b3AiLCJwYWRkaW5nVG9wIiwiYm9yZGVyQm90dG9tIiwiaW5wdXQiLCJpbnB1dEhhbmRsZXIiLCJBU1NFVFNfQkFTRV9VUkwiLCJ3aWR0aCIsInRleHRBbGlnbiIsImNvbG9yIiwicGFkZGluZ0xlZnQiLCJsb2FkTW9yZSIsImkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJuYW1lIiwic2hvd19kZXRhaWxzIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsInRlc3RJbmZvIiwidG9nZ2xlVGVzdCIsImlzX2luc3VyYW5jZV9jb3ZlcmVkIiwiaW5jbHVkZWRfaW5fdXNlcl9wbGFuIiwic3BsaXQiLCJwYXJzZUludCIsInZpcCIsInZpcF9nb2xkX3ByaWNlIiwidmlwX2NvbnZlbmllbmNlX2Ftb3VudCIsImdvIiwiUmVhY3QiLCJDb21wb25lbnQiLCJUZXN0U2VsZWN0b3IiLCJtYXRjaCIsInBhcmFtcyIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsIlNFQVJDSF9DUklURVJJQV9MQUJTIiwiZmlsdGVyQ3JpdGVyaWEiLCJMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQiIsIlVTRVIiLCJzZWxlY3RlZFByb2ZpbGUiLCJpc19hbnlfdXNlcl9idXlfZ29sZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsImxhYklkIiwibGFiaWQiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsY0FBY0MsbUJBQU9BLENBQUMsMERBQVIsQ0FBcEI7O0lBRU1DLGdCOzs7QUFDRiw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdJQUNUQSxLQURTOztBQUFBLGNBcURuQkMsbUJBckRtQixHQXFERyxZQUFNO0FBQ3hCQyxtQkFBT0MsT0FBUCxHQUFpQixFQUFqQixHQUFzQixNQUFLQyxRQUFMLENBQWMsRUFBRUMscUJBQXFCLEtBQXZCLEVBQWQsQ0FBdEIsR0FBc0UsRUFBdEU7QUFDSCxTQXZEa0I7O0FBR2YsWUFBTUMsU0FBU1QsWUFBWVUsS0FBWixDQUFrQixNQUFLUCxLQUFMLENBQVdRLFFBQVgsQ0FBb0JDLE1BQXRDLENBQWY7O0FBRUEsWUFBSUMsU0FBUyxNQUFLVixLQUFMLENBQVdXLFdBQXhCOztBQUVBLGNBQUtWLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCVyxJQUF6QixPQUEzQjtBQUNBLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUyxLQURBO0FBRVRILHlCQUFhRCxNQUZKO0FBR1RLLDJCQUFlLEVBSE47QUFJVEMsMEJBQWMsRUFKTDtBQUtUWCxpQ0FBcUIsSUFMWjtBQU1UWSxrQkFBTSxDQU5HO0FBT1RDLGlDQUFxQjtBQVBaLFNBQWI7QUFSZTtBQWlCbEI7Ozs7a0NBRVNsQixLLEVBQU87QUFBQTs7QUFDYixnQkFBSUEsTUFBTVcsV0FBVixF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QUFHSEcsMENBSEc7QUFJSFcsa0JBSkc7QUFLSGtCLHdEQUxHO0FBTUg0Qyx3Q0FORyxFQU1jckQsa0JBTmQsRUFNd0JDLDhCQU54QixFQU13Q3FEO0FBTnhDLEtBQVA7QUFRSCxDQXhCRDs7QUEwQkEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3JDLFdBQU87QUFDSGpHLGlDQUF5QixpQ0FBQ2tHLElBQUQsRUFBT3BELFFBQVA7QUFBQSxtQkFBb0JtRCxTQUFTLG9DQUF3QkMsSUFBeEIsRUFBOEJwRCxRQUE5QixDQUFULENBQXBCO0FBQUEsU0FEdEI7QUFFSDdELG9CQUFZLG9CQUFDa0gsS0FBRCxFQUFRdkgsT0FBUjtBQUFBLG1CQUFvQnFILFNBQVMsdUJBQVdFLEtBQVgsRUFBa0J2SCxPQUFsQixDQUFULENBQXBCO0FBQUEsU0FGVDtBQUdIMkIscUJBQWEscUJBQUM2RixLQUFELEVBQVFoRyxhQUFSLEVBQXVCaUcsUUFBdkIsRUFBaUMzSCxJQUFqQztBQUFBLG1CQUEwQ3VILFNBQVMsd0JBQVlHLEtBQVosRUFBbUJoRyxhQUFuQixFQUFrQ2lHLFFBQWxDLEVBQTRDM0gsSUFBNUMsQ0FBVCxDQUExQztBQUFBO0FBSFYsS0FBUDtBQUtILENBTkQ7O2tCQVNlLHlCQUFRK0csZUFBUixFQUF5Qk8sa0JBQXpCLEVBQTZDWixZQUE3QyxDIiwiZmlsZSI6IjQ5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi8uLi9jb21tb25zL0xlZnRCYXInXG5pbXBvcnQgUmlnaHRCYXIgZnJvbSAnLi4vLi4vY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgR1RNIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZ3RtLmpzJ1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbGVyJztcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cbmNsYXNzIFRlc3RTZWxlY3RvclZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIGxldCBsYWJfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTGFiXG5cbiAgICAgICAgdGhpcy5oaWRlUmVzdWx0SW5kaWNhdG9yID0gdGhpcy5oaWRlUmVzdWx0SW5kaWNhdG9yLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoYXNNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkTGFiOiBsYWJfaWQsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgICAgICAgIHNlYXJjaFN0cmluZzogJycsXG4gICAgICAgICAgICBtb3JlUmVzdWx0SW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgIGl0ZW1TZWxlY3RlZFZpc2libGU6IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoRGF0YShwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMYWIpIHtcbiAgICAgICAgICAgIGxldCB0ZXN0SWRzID0gcHJvcHMubGFiX3Rlc3RfZGF0YVtwcm9wcy5zZWxlY3RlZExhYl0gfHwgW11cbiAgICAgICAgICAgIHRlc3RJZHMgPSB0ZXN0SWRzLm1hcCh4ID0+IHguaWQpXG5cbiAgICAgICAgICAgIHByb3BzLmdldExhYkJ5SWQocHJvcHMuc2VsZWN0ZWRMYWIsIHRlc3RJZHMpXG4gICAgICAgICAgICB0aGlzLmdldFNlYXJjaExpc3QoXCJcIilcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRSZWYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0UmVmLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGlkZVJlc3VsdEluZGljYXRvcik7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNNb3JlOiB0cnVlIH0pXG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuc2VsZWN0ZWRMYWIgIT0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYikge1xuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEocHJvcHMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKHRoaXMucHJvcHMpXG4gICAgfVxuXG4gICAgaGlkZVJlc3VsdEluZGljYXRvciA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LnNjcm9sbFkgPiAxMCA/IHRoaXMuc2V0U3RhdGUoeyBtb3JlUmVzdWx0SW5kaWNhdG9yOiBmYWxzZSB9KSA6IFwiXCJcbiAgICB9XG5cbiAgICB0b2dnbGVUZXN0KHRlc3RfdG9fdG9nZ2xlKSB7XG4gICAgICAgIGxldCB0ZXN0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGVzdF90b190b2dnbGUudGVzdClcbiAgICAgICAgdGVzdC5tcnAgPSB0ZXN0X3RvX3RvZ2dsZS5tcnBcbiAgICAgICAgdGVzdC5kZWFsX3ByaWNlID0gdGVzdF90b190b2dnbGUuZGVhbF9wcmljZVxuICAgICAgICB0ZXN0LmV4dHJhX3Rlc3QgPSB0cnVlXG4gICAgICAgIHRlc3QubGFiX2lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYlxuXG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEoJ3Rlc3QnLCB0ZXN0KVxuICAgIH1cblxuICAgIGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hTdHJpbmc6IGUudGFyZ2V0LnZhbHVlLCBoYXNNb3JlOiB0cnVlLCBwYWdlOiAxLCBzZWFyY2hSZXN1bHRzOiBbXSB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldFNlYXJjaExpc3QodGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmcpXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1TZWxlY3RlZFZpc2libGU6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbVNlbGVjdGVkVmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2VhcmNoTGlzdChzZWFyY2hfc3RyaW5nLCBwYWdlX25vID0gMSwgY2IpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRMYWJUZXN0cyh0aGlzLnByb3BzLnNlbGVjdGVkTGFiLCBzZWFyY2hfc3RyaW5nLCAoc2VhcmNoUmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgaWYgKHNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2Ioc2VhcmNoUmVzdWx0cylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoUmVzdWx0czogc2VhcmNoUmVzdWx0cyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgcGFnZV9ubylcbiAgICAgICAgc2VhcmNoX3N0cmluZyA/IHRoaXMuc2V0U3RhdGUoeyBtb3JlUmVzdWx0SW5kaWNhdG9yOiBmYWxzZSB9KSA6IFwiXCJcbiAgICB9XG5cbiAgICBsb2FkTW9yZSgpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSB0aGlzLnN0YXRlLnBhZ2VcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc01vcmU6IGZhbHNlLCBsb2FkaW5nOiB0cnVlIH0pXG5cbiAgICAgICAgdGhpcy5nZXRTZWFyY2hMaXN0KHRoaXMuc3RhdGUuc2VhcmNoU3RyaW5nLCBwYWdlICsgMSwgKHNlYXJjaFJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzIHx8IFtdXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5jb25jYXQoc2VhcmNoUmVzdWx0cylcbiAgICAgICAgICAgIGxldCBkZWR1cGUgPSB7fVxuICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuZmlsdGVyKCh0ZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkZWR1cGVbdGVzdC50ZXN0LmlkXSkge1xuICAgICAgICAgICAgICAgICAgICBkZWR1cGVbdGVzdC50ZXN0LmlkXSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IG1vcmUgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKHJlc3VsdHMgPiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBtb3JlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBwYWdlOiBwYWdlICsgMSwgc2VhcmNoUmVzdWx0czogcmVzdWx0cywgaGFzTW9yZTogbW9yZSB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgdGVzdEluZm8odGVzdF9pZCwgdXJsLCBldmVudCkge1xuICAgICAgICBsZXQgbGFiX2lkID0gdGhpcy5wcm9wcy5zZWxlY3RlZExhYlxuICAgICAgICBsZXQgc2VsZWN0ZWRfdGVzdF9pZHMgPSB0aGlzLnByb3BzLnNlbGVjdGVkQ3JpdGVyaWFzIHx8IFtdXG4gICAgICAgIHNlbGVjdGVkX3Rlc3RfaWRzID0gc2VsZWN0ZWRfdGVzdF9pZHMubWFwKHggPT4geC5pZClcbiAgICAgICAgbGV0IGxhdCA9IDI4LjY0NDgwMFxuICAgICAgICBsZXQgbG9uZyA9IDc3LjIxNjcyMVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsYXQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0XG4gICAgICAgICAgICBsb25nID0gdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdCA9PT0gJ2Z1bmN0aW9uJykgbGF0ID0gbGF0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9uZyA9PT0gJ2Z1bmN0aW9uJykgbG9uZyA9IGxvbmcoKVxuICAgICAgICB9XG4gICAgICAgIGlmICh1cmwgJiYgdXJsICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycgKyB1cmwgKyAnP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZsYWJfaWQ9JyArIGxhYl9pZCArICcmc2VsZWN0ZWRfdGVzdF9pZHM9JyArIHNlbGVjdGVkX3Rlc3RfaWRzICsgJyZsYXQ9JyArIGxhdCArICcmbG9uZz0nICsgbG9uZylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvc2VhcmNoL3Rlc3RpbmZvP3Rlc3RfaWRzPScgKyB0ZXN0X2lkICsgJyZsYWJfaWQ9JyArIGxhYl9pZCArICcmc2VsZWN0ZWRfdGVzdF9pZHM9JyArIHNlbGVjdGVkX3Rlc3RfaWRzICsgJyZsYXQ9JyArIGxhdCArICcmbG9uZz0nICsgbG9uZylcbiAgICAgICAgfVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAndGVzdEluZm9DbGljaycsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ3Rlc3QtaW5mby1jbGljaycsICdwYWdlU291cmNlJzogJ2xhYi10ZXN0LXBhZ2UnXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiRGF0YSA9IHRoaXMucHJvcHMuTEFCU1t0aGlzLnByb3BzLnNlbGVjdGVkTGFiXVxuICAgICAgICBsZXQgc2VsZWN0ZWRUZXN0cyA9IHRoaXMucHJvcHMubGFiX3Rlc3RfZGF0YVt0aGlzLnByb3BzLnNlbGVjdGVkTGFiXSB8fCBbXVxuICAgICAgICBsZXQgc2VsZWN0ZWRUZXN0SWRzID0gc2VsZWN0ZWRUZXN0cy5tYXAoeCA9PiB4LmlkKVxuICAgICAgICBsZXQgdGVzdHMgPSBbXVxuICAgICAgICBsZXQgdGVzdElkcyA9IFtdXG4gICAgICAgIGxldCBhbGxUZXN0cyA9IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0c1xuICAgICAgICBsZXQgdGVzdFZhbCA9IHt9XG4gICAgICAgIGxldCBpc191c2VyX2luc3VyZWQgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfdXNlcl92aXAgPSBmYWxzZVxuICAgICAgICBsZXQgaXNfdXNlcl9nb2xkX3ZpcCA9IGZhbHNlXG5cbiAgICAgICAgLy9DaGVjayBmb3IgVVNFUiBTVEFUVVNcblxuICAgICAgICBpZih0aGlzLnByb3BzLnByb2ZpbGVzICYmIHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0pe1xuICAgICAgICAgICAgaXNfdXNlcl9pbnN1cmVkID0gdGhpcy5wcm9wcy5wcm9maWxlc1t0aGlzLnByb3BzLmRlZmF1bHRQcm9maWxlXS5pc19pbnN1cmVkXG4gICAgICAgICAgICBpc191c2VyX3ZpcCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfdmlwX21lbWJlclxuICAgICAgICAgICAgaXNfdXNlcl9nb2xkX3ZpcCA9IHRoaXMucHJvcHMucHJvZmlsZXNbdGhpcy5wcm9wcy5kZWZhdWx0UHJvZmlsZV0uaXNfdmlwX2dvbGRfbWVtYmVyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFiRGF0YSkge1xuXG4gICAgICAgICAgICBzZWxlY3RlZFRlc3RzLm1hcCgoY3JpdGVyaWEpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRlc3RWYWwgPSB7fVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHRlc3Qgb2YgYWxsVGVzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QudGVzdC5pZCA9PSBjcml0ZXJpYS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0VmFsID0gdGVzdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVzdElkcy5wdXNoKGNyaXRlcmlhLmlkKVxuICAgICAgICAgICAgICAgICAgICAvL0dFVCBpbnN1cmFuY2UgRGF0YVxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVzdF9pbnN1cmVkID0gW11cbiAgICAgICAgICAgICAgICAgICAgbGV0IGluc3VyYW5jZV9kYXRhID0ge31cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMgJiYgdGhpcy5wcm9wcy5jdXJyZW50TGFiU2VsZWN0ZWRUZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3RfaW5zdXJlZCA9IHRoaXMucHJvcHMuY3VycmVudExhYlNlbGVjdGVkVGVzdHMuZmlsdGVyKCh4ID0+IHguaWQgPT0gY3JpdGVyaWEuaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RfaW5zdXJlZCAmJiB0ZXN0X2luc3VyZWQubGVuZ3RoICYmIHRlc3RfaW5zdXJlZFswXS5pbnN1cmFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN1cmFuY2VfZGF0YSA9IHRlc3RfaW5zdXJlZFswXS5pbnN1cmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZXN0cy5wdXNoKHsgLi4uY3JpdGVyaWEsIHRlc3Q6IGNyaXRlcmlhLCAuLi50ZXN0VmFsLCAuLi5pbnN1cmFuY2VfZGF0YSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0ZXN0cyA9IGxhYkRhdGEgJiYgbGFiRGF0YS50ZXN0cyA/IGxhYkRhdGEudGVzdHMuZmlsdGVyKCh4ID0+IHRlc3RJZHMuaW5kZXhPZih4LnRlc3QuaWQpID4gLTEpKSA6IFtdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHktd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIHRlc3Qtc2VhcmNoLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjZW50ZXItY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJEYXRhID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInNraW4td2hpdGUgZml4ZWQgaG9yaXpvbnRhbCB0b3AgbG9jYXRpb24tZGV0ZWN0LWhlYWRlciBzdGlja3ktaGVhZGVyXCIgc3R5bGU9e3sgdG9wOiA0NCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAxMCwgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNkM2QzZDMnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRvbi1ncm91cCBsb2NhdGlvbi1kZXRlY3QtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmlucHV0UmVmID0gaW5wdXQ7IH19IGNsYXNzTmFtZT1cIm5ldy1zcmNoLWRvYy1sYWJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBUZXN0XCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcmNoLWlucC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9zaGFwZS1zcmNoLnN2Z1wifSBzdHlsZT17eyB3aWR0aDogMTUgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jb250ZW50IHBkLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbC1jcG4gdGV4dC1yaWdodFwiPkNvdXBvbiBhcHBsaWVzIGF0IGJvb2tpbmcgc3VtbWFyeTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGVjdC1teS1sb2NhaXRvbiBybXYtcG9pbnRlciBtcnQtMTBcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgY29sb3I6ICcjMDAwJywgcGFkZGluZ0xlZnQ6IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLml0ZW1TZWxlY3RlZFZpc2libGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGVzdElkcy5sZW5ndGggPiAxID8gYCR7c2VsZWN0ZWRUZXN0SWRzLmxlbmd0aH0gSXRlbXMgU2VsZWN0ZWRgIDogYCR7c2VsZWN0ZWRUZXN0SWRzLmxlbmd0aH0gSXRlbSBTZWxlY3RlZGAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QgYWxsLXRlc3QtbGlzdCBtcnQtMTBcIiBpZD1cImxhYi10ZXN0cy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU3RhcnQ9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb3JlPXt0aGlzLmxvYWRNb3JlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU9e3RoaXMuc3RhdGUuaGFzTW9yZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlV2luZG93PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmcgPT0gJycgPyB0ZXN0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aSArIFwic3J0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiAxNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0LnRlc3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0LnRlc3Quc2hvd19kZXRhaWxzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAnbWFyZ2luTGVmdCc6ICc1cHgnLCBtYXJnaW5Ub3A6ICcycHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBvbkNsaWNrPXt0aGlzLnRlc3RJbmZvLmJpbmQodGhpcywgdGVzdC50ZXN0LmlkLCB0ZXN0LnVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL0luZm8uc3ZnXCIgc3R5bGU9e3t3aWR0aDonMTVweCd9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzZWxlY3RlZFRlc3RJZHMuaW5kZXhPZih0ZXN0LnRlc3QuaWQpID4gLTF9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRlc3QuYmluZCh0aGlzLCB0ZXN0KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QuaW5zdXJhbmNlICYmIHRlc3QuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIHRlc3QuaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCB8fCB0ZXN0LmluY2x1ZGVkX2luX3VzZXJfcGxhbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHRleHQtc21cIj4mIzgzNzc7IHswfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0LmRlYWxfcHJpY2UgPT0gdGVzdC5tcnAuc3BsaXQoJy4nKVswXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPiYjODM3Nzsge3Rlc3QuZGVhbF9wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0ZXh0LXNtXCI+JiM4Mzc3OyB7dGVzdC5kZWFsX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+JiM4Mzc3OyB7dGVzdC5tcnAuc3BsaXQoJy4nKVswXX08L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5tYXAoKHRlc3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aSArIFwic3J0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2stYnhcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAsIGZvbnRTaXplOiAxNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0LnRlc3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXN0LnRlc3Quc2hvd19kZXRhaWxzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAnbWFyZ2luTGVmdCc6ICc1cHgnLCBtYXJnaW5Ub3A6ICcycHgnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBvbkNsaWNrPXt0aGlzLnRlc3RJbmZvLmJpbmQodGhpcywgdGVzdC50ZXN0LmlkLCB0ZXN0LnVybCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLmRvY3ByaW1lLmNvbS9jcC9hc3NldHMvaW1nL2ljb25zL0luZm8uc3ZnXCIgc3R5bGU9e3t3aWR0aDonMTVweCd9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzZWxlY3RlZFRlc3RJZHMuaW5kZXhPZih0ZXN0LnRlc3QuaWQpID4gLTF9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRlc3QuYmluZCh0aGlzLCB0ZXN0KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QuaW5zdXJhbmNlICYmIHRlc3QuaW5zdXJhbmNlLmlzX2luc3VyYW5jZV9jb3ZlcmVkICYmIHRlc3QuaW5zdXJhbmNlLmlzX3VzZXJfaW5zdXJlZCB8fCB0ZXN0LmluY2x1ZGVkX2luX3VzZXJfcGxhbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHRleHQtc21cIj4mIzgzNzc7IHswfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDooaXNfdXNlcl92aXAgfHwgaXNfdXNlcl9nb2xkX3ZpcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8oIChwYXJzZUludCh0ZXN0LnZpcC52aXBfZ29sZF9wcmljZSkgKyBwYXJzZUludCh0ZXN0LnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50KSApID09IHRlc3QubXJwLnNwbGl0KCcuJylbMF0gKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPiYjODM3Nzsge3BhcnNlSW50KHRlc3QudmlwLnZpcF9nb2xkX3ByaWNlfHwwKSArIHBhcnNlSW50KHRlc3QudmlwLnZpcF9jb252ZW5pZW5jZV9hbW91bnR8fDApfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjxzcGFuIGNsYXNzTmFtZT1cInRlc3QtcHJpY2UgdGV4dC1zbVwiPiYjODM3NzsgeyBwYXJzZUludCh0ZXN0LnZpcC52aXBfZ29sZF9wcmljZSkgKyBwYXJzZUludCh0ZXN0LnZpcC52aXBfY29udmVuaWVuY2VfYW1vdW50KSB9PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1tcnBcIj4mIzgzNzc7IHt0ZXN0Lm1ycC5zcGxpdCgnLicpWzBdfTwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGVzdC5kZWFsX3ByaWNlID09IHRlc3QubXJwLnNwbGl0KCcuJylbMF0gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXN0LXByaWNlIHRleHQtc21cIj4mIzgzNzc7IHt0ZXN0LmRlYWxfcHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PHNwYW4gY2xhc3NOYW1lPVwidGVzdC1wcmljZSB0ZXh0LXNtXCI+JiM4Mzc3OyB7dGVzdC5kZWFsX3ByaWNlfTxzcGFuIGNsYXNzTmFtZT1cInRlc3QtbXJwXCI+JiM4Mzc3OyB7dGVzdC5tcnAuc3BsaXQoJy4nKVswXX08L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHAtMyB2LWJ0bi1wcmltYXJ5IGJ0bi1sZyBmaXhlZCBob3Jpem9udGFsIGJvdHRvbSBuby1yb3VuZCB0ZXh0LWxnIHN0aWNreS1idG5cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdEb25lQ2xpY2tlZE9uQWRkVGVzdFBhZ2UnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdkb25lLWNsaWNrZWQtYWRkLXRlc3QtcGFnZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RG9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogPExvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1vcmVSZXN1bHRJbmRpY2F0b3IgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLXRlc3QtcmVzdWx0cy1kaXYgZC1ub25lIGQtbGctZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm1vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9kb3duYXJyb3dfd2hpdGUuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRCYXIgZXh0cmFDbGFzcz1cIiBjaGF0LWZsb2F0LWJ0bi0yXCIgdHlwZT1cImxhYlwiIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFNlbGVjdG9yVmlld1xuIiwiaW1wb3J0IFRlc3RTZWxlY3RvciBmcm9tICcuL1Rlc3RTZWxlY3RvcidcbmV4cG9ydCBkZWZhdWx0IFRlc3RTZWxlY3RvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRMYWJCeUlkLCB0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSwgZ2V0TGFiVGVzdHMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcblxuaW1wb3J0IFRlc3RTZWxlY3RvclZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFnbm9zaXMvdGVzdFNlbGVjdG9yJ1xuXG5jbGFzcyBUZXN0U2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIHJvdXRlcjogKCkgPT4gbnVsbFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcXVlcnlTdHJpbmcucGFyc2UodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGxldCBsYWJfaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkTGFiIHx8IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkIHx8IHBhcnNlZC5sYWJfaWRcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRlc3RTZWxlY3RvclZpZXcgey4uLnRoaXMucHJvcHN9IHNlbGVjdGVkTGFiPXtsYWJfaWR9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgbGFiX3Rlc3RfZGF0YSxcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgY3VycmVudExhYlNlbGVjdGVkVGVzdHNcbiAgICB9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0xBQlNcblxuICAgIGNvbnN0IHsgc2VsZWN0ZWRQcm9maWxlLCBwcm9maWxlcywgZGVmYXVsdFByb2ZpbGUsIGlzX2FueV91c2VyX2J1eV9nb2xkIH0gPSBzdGF0ZS5VU0VSXG5cblxuICAgIGxldCBMQUJTID0gc3RhdGUuTEFCU1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGFiX3Rlc3RfZGF0YSxcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIHNlbGVjdGVkTG9jYXRpb24sXG4gICAgICAgIExBQlMsXG4gICAgICAgIGN1cnJlbnRMYWJTZWxlY3RlZFRlc3RzLFxuICAgICAgICBzZWxlY3RlZFByb2ZpbGUsIHByb2ZpbGVzLCBkZWZhdWx0UHJvZmlsZSwgaXNfYW55X3VzZXJfYnV5X2dvbGRcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhKSksXG4gICAgICAgIGdldExhYkJ5SWQ6IChsYWJJZCwgdGVzdElkcykgPT4gZGlzcGF0Y2goZ2V0TGFiQnlJZChsYWJJZCwgdGVzdElkcykpLFxuICAgICAgICBnZXRMYWJUZXN0czogKGxhYmlkLCBzZWFyY2hfc3RyaW5nLCBjYWxsYmFjaywgcGFnZSkgPT4gZGlzcGF0Y2goZ2V0TGFiVGVzdHMobGFiaWQsIHNlYXJjaF9zdHJpbmcsIGNhbGxiYWNrLCBwYWdlKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVzdFNlbGVjdG9yKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=