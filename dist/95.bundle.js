(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ "./dev/js/components/diagnosis/categoryTestResults/TestCategoryList/TestCategoryList.js":
/*!**********************************************************************************************!*\
  !*** ./dev/js/components/diagnosis/categoryTestResults/TestCategoryList/TestCategoryList.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! ../../commons/labProfileCard/index.js */ "./dev/js/components/diagnosis/commons/labProfileCard/index.js");

var _index2 = _interopRequireDefault(_index);

var _reactInfiniteScroller = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _Loader = __webpack_require__(/*! ../../../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _gtm = __webpack_require__(/*! ../../../../helpers/gtm */ "./dev/js/helpers/gtm.js");

var _gtm2 = _interopRequireDefault(_gtm);

var _labResultCard = __webpack_require__(/*! ../../commons/labResultCard */ "./dev/js/components/diagnosis/commons/labResultCard/index.js");

var _labResultCard2 = _interopRequireDefault(_labResultCard);

var _bannerCarousel = __webpack_require__(/*! ../../../commons/Home/bannerCarousel.js */ "./dev/js/components/commons/Home/bannerCarousel.js");

var _bannerCarousel2 = _interopRequireDefault(_bannerCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabsList = function (_React$Component) {
    _inherits(LabsList, _React$Component);

    function LabsList(props) {
        _classCallCheck(this, LabsList);

        var _this = _possibleConstructorReturn(this, (LabsList.__proto__ || Object.getPrototypeOf(LabsList)).call(this, props));

        _this.state = {
            hasMore: false,
            loading: false,
            renderBlock: false,
            page: 0,
            is_insured: props.filterCriteria && props.filterCriteria.is_insured ? props.filterCriteria.is_insured : false,
            avg_ratings: ''
        };
        return _this;
    }

    _createClass(LabsList, [{
        key: 'bookNow',
        value: function bookNow(test_data) {
            var _this2 = this;

            var test = {};
            test.id = test_data.id;
            test.name = test_data.name;
            test.type = 'test';
            this.props.toggleDiagnosisCriteria('test', test, true);

            setTimeout(function () {
                _this2.props.history.push('/lab/searchresults');
            }, 100);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'section',
                { className: 'wrap search-book-result variable-content-section', ref: 'checkIfExists' },
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid cardMainPaddingRmv' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row no-gutters' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-12' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                this.props.labList && this.props.labList.all_categories && this.props.labList.all_categories.length ? this.props.labList.all_categories.map(function (data, i) {
                                    return _react2.default.createElement(
                                        'li',
                                        { key: i, id: data.lab_test_cat_id },
                                        _react2.default.createElement(
                                            'h4',
                                            { className: 'lab-crd-hdng' },
                                            data.lab_test_cat_name
                                        ),
                                        data.lab_test_tests && data.lab_test_tests.length ? data.lab_test_tests.map(function (test_data, k) {
                                            return _react2.default.createElement(
                                                'div',
                                                { className: 'cstm-docCard mb-3', key: k, id: test_data.id, onClick: _this3.bookNow.bind(_this3, test_data) },
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
                                                                    { className: 'cstm-doc-content-container' },
                                                                    _react2.default.createElement(
                                                                        'a',
                                                                        { href: '/city-xray-scan-clinic-pvt-ltd-palam-in-palam-new-delhi-lpp' },
                                                                        _react2.default.createElement(
                                                                            'h2',
                                                                            { className: 'lbcrdcstfont cstmDocName', style: { fontSize: '14px' } },
                                                                            test_data.name
                                                                        )
                                                                    ),
                                                                    test_data.count ? _react2.default.createElement(
                                                                        'p',
                                                                        null,
                                                                        'Available in ',
                                                                        test_data.count,
                                                                        ' Labs'
                                                                    ) : ''
                                                                )
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'col-4' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'cstm-doc-price' },
                                                                'Starting at'
                                                            ),
                                                            _react2.default.createElement(
                                                                'p',
                                                                { className: 'cst-doc-price' },
                                                                '\u20B9 ',
                                                                test_data.deal_price
                                                            ),
                                                            _react2.default.createElement(
                                                                'button',
                                                                { className: 'cstm-book-btn', onClick: _this3.bookNow.bind(_this3, test_data) },
                                                                'Select Lab'
                                                            )
                                                        )
                                                    )
                                                )
                                            );
                                        }) : ''
                                    );
                                }) : ''
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LabsList;
}(_react2.default.Component);

exports.default = LabsList;

/***/ }),

/***/ "./dev/js/components/diagnosis/categoryTestResults/categoryTestResultsView.js":
/*!************************************************************************************!*\
  !*** ./dev/js/components/diagnosis/categoryTestResults/categoryTestResultsView.js ***!
  \************************************************************************************/
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

var _TestCategoryList = __webpack_require__(/*! ./TestCategoryList/TestCategoryList.js */ "./dev/js/components/diagnosis/categoryTestResults/TestCategoryList/TestCategoryList.js");

var _TestCategoryList2 = _interopRequireDefault(_TestCategoryList);

var _criteriaSearch = __webpack_require__(/*! ../../commons/criteriaSearch */ "./dev/js/components/commons/criteriaSearch/index.js");

var _criteriaSearch2 = _interopRequireDefault(_criteriaSearch);

var _newTopBar = __webpack_require__(/*! ./newTopBar */ "./dev/js/components/diagnosis/categoryTestResults/newTopBar/index.js");

var _newTopBar2 = _interopRequireDefault(_newTopBar);

var _index = __webpack_require__(/*! ../../../helpers/navigate/index.js */ "./dev/js/helpers/navigate/index.js");

var _index2 = _interopRequireDefault(_index);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _HelmetTags = __webpack_require__(/*! ../../commons/HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _footer = __webpack_require__(/*! ../../commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _result_count = __webpack_require__(/*! ./topBar/result_count.js */ "./dev/js/components/diagnosis/categoryTestResults/topBar/result_count.js");

var _result_count2 = _interopRequireDefault(_result_count);

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

        _this.state = {};
        return _this;
    }

    _createClass(SearchResultsView, [{
        key: 'resetQuickFilters',
        value: function resetQuickFilters() {
            this.setState({ quickFilter: {} });
        }
    }, {
        key: 'render',
        value: function render() {
            var show_pagination = this.props.labList && this.props.labList.length > 0;
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

            // check if this was the landing page
            var landing_page = false;
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window.ON_LANDING_PAGE) {
                landing_page = true;
            }
            var count = 0;
            if (this.props.labList && this.props.labList.all_categories && this.props.labList.all_categories.length) {
                this.props.labList.all_categories.map(function (data, i) {
                    count += parseInt(data['No_of_tests']);
                });
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { id: 'map', style: { display: 'none' } }),
                _react2.default.createElement(_HelmetTags2.default, { tagsData: {
                        canonicalUrl: '' + _config2.default.API_BASE_URL + this.props.match.url + page,
                        title: this.props.labList ? this.props.labList.title : '',
                        description: this.props.labList ? this.props.labList.meta_description : '',
                        prev: prev,
                        next: next
                    }, noIndex: false }),
                _react2.default.createElement(
                    _criteriaSearch2.default,
                    _extends({}, this.props, { checkForLoad: landing_page || this.props.LOADED_LABS_SEARCH || this.state.showError, title: 'Search for Test and Labs.', goBack: true, lab_card: !!this.state.lab_card, newChatBtn: true, searchLabs: true }),
                    this.state.showError ? _react2.default.createElement(
                        'div',
                        { className: 'norf' },
                        'No Results Found!!'
                    ) : _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_newTopBar2.default, _extends({}, this.props, { count: count })),
                        this.props.labList && this.props.labList.length == 0 ? _react2.default.createElement(
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
                                    )
                                )
                            )
                        ) : _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement(_TestCategoryList2.default, this.props)
                        )
                    )
                )
            );
        }
    }]);

    return SearchResultsView;
}(_react2.default.Component);

exports.default = SearchResultsView;

/***/ }),

/***/ "./dev/js/components/diagnosis/categoryTestResults/newTopBar/index.js":
/*!****************************************************************************!*\
  !*** ./dev/js/components/diagnosis/categoryTestResults/newTopBar/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newTopBar = __webpack_require__(/*! ./newTopBar.js */ "./dev/js/components/diagnosis/categoryTestResults/newTopBar/newTopBar.js");

var _newTopBar2 = _interopRequireDefault(_newTopBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _newTopBar2.default;

/***/ }),

/***/ "./dev/js/components/diagnosis/categoryTestResults/newTopBar/newTopBar.js":
/*!********************************************************************************!*\
  !*** ./dev/js/components/diagnosis/categoryTestResults/newTopBar/newTopBar.js ***!
  \********************************************************************************/
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
            dropdown_visible: false,
            // overlayVisible: false,
            // showPopupContainer: true,
            is_insured: props.filterCriteria && props.filterCriteria.is_insured ? props.filterCriteria.is_insured : false,
            //New filters
            previous_filters: {},
            sort_on: '',
            sort_order: '',
            avg_ratings: '',
            availability: [],
            home_visit: false,
            lab_visit: false,
            shortURL: "",
            showLocationPopup: false,
            quickFilter: {}
        };
        return _this;
    }

    _createClass(TopBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {

            if (props.locationType && !props.locationType.includes("geo")) {
                this.setState({ showLocationPopup: false });
            } else {
                if (props.seoData && props.seoData.location) {
                    this.setState({ showLocationPopup: false });
                } else {
                    if (props.seoData && props.seoData.location || props.seoFriendly) {
                        this.setState({ showLocationPopup: true, overlayVisible: true });
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
                this.setState({ showLocationPopup: false });
            } else {
                if (this.props.locationType && this.props.locationType.includes("geo")) {
                    this.setState({ showLocationPopup: true, overlayVisible: true });
                }
            }
        }
    }, {
        key: 'overlayClick',
        value: function overlayClick() {
            this.setState({ overlayVisible: false, searchCities: [], showLocationPopup: false });
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
        key: 'goToLocation',
        value: function goToLocation() {
            this.setState({
                searchCities: []
            });
            /*let redirect_to = ""
            if (window.location.pathname.includes('lbcit') || window.location.pathname.includes('lblitcit')) {
                redirect_to = "/lab/searchresults"
            }
            */
            var location_url = '/locationsearch';
            /*        if (redirect_to) {
                        location_url += `?redirect_to=${redirect_to}`
                    }
            */
            var data = {
                'Category': 'ChangeLocationDoctorResultsPopUp', 'Action': 'change-location-doctor-results-PopUp', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-location-doctor-results-PopUp', 'url': window.location.pathname
            };
            _gtm2.default.sendEvent({ data: data });
            this.props.history.push(location_url);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var criteriaStr = this.props.labList ? this.props.labList.title : '';
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
                _react2.default.createElement(
                    'div',
                    { className: 'filter-row sticky-header mbl-stick' },
                    _react2.default.createElement(
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
                                    { className: 'top-filter-tabs-select locationTestFilter' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'newStickyfilter' },
                                        this.props.count,
                                        ' Results ',
                                        criteriaStr ? "for " : "",
                                        criteriaStr,
                                        locationName ? _react2.default.createElement(
                                            'span',
                                            { onClick: this.goToLocation.bind(this) },
                                            ' in ' + locationName,
                                            _react2.default.createElement('img', { style: { width: '11px', height: '15px', marginLeft: '7px' }, src: "/assets" + "/img/customer-icons/edit.svg" })
                                        ) : ''
                                    )
                                )
                            )
                        )
                    ),
                    this.state.showLocationPopup ? _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                            return _this2.child = ref;
                        }, resultType: 'list', isTopbar: true, hideLocationPopup: function hideLocationPopup() {
                            return _this2.hideLocationPopup();
                        }, locationName: locationName })) : '',
                    this.state.showLocationPopup && this.state.overlayVisible && !this.props.lab_card ? _react2.default.createElement('div', { className: 'locationPopup-overlay', onClick: function onClick() {
                            return _this2.overlayClick();
                        } }) : '',
                    this.state.showLocationPopup && this.props.lab_card && this.state.showPopupContainer ? _react2.default.createElement('div', { className: 'popupContainer-overlay' }) : ''
                )
            );
        }
    }]);

    return TopBar;
}(_react2.default.Component);

exports.default = TopBar;

/***/ }),

/***/ "./dev/js/components/diagnosis/categoryTestResults/topBar/result_count.js":
/*!********************************************************************************!*\
  !*** ./dev/js/components/diagnosis/categoryTestResults/topBar/result_count.js ***!
  \********************************************************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopBar = function (_React$Component) {
    _inherits(TopBar, _React$Component);

    function TopBar(props) {
        _classCallCheck(this, TopBar);

        var _this = _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call(this, props));

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
            showPopupContainer: true
            // sortText: 'Relevance'
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
                if (props.seoData && props.seoData.location) {
                    this.setState({ showLocationPopup: false });
                } else {
                    if (props.seoData && props.seoData.location || props.seoFriendly) {
                        this.setState({ showLocationPopup: true, overlayVisible: true });
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
                this.setState({ showLocationPopup: false });
            } else {
                if (this.props.locationType && this.props.locationType.includes("geo")) {
                    this.setState({ showLocationPopup: true, overlayVisible: true });
                }
            }
        }

        // applyFilters() {
        //     let filterState = {
        //         priceRange: this.state.priceRange,
        //         distanceRange: this.state.distanceRange,
        //         sort_on: this.state.sort_on
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
        //     let data = {
        //         'Category': 'ConsumerApp', 'Action': 'LabSortFilterApplied', 'CustomerID': GTM.getUserId() || '', 'leadid': 0, 'event': 'lab-sort-filter-applied', 'url': window.location.pathname, 'sort_on': type === "" ? 'relevance' : type
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
                var url = window.location.href;
                if (url.includes('?')) {
                    url = window.location.href + '&force_location=true';
                } else {
                    url = window.location.href + '?force_location=true';
                }
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
            this.setState({ overlayVisible: false, searchCities: [] });
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
        key: 'changeBtnClick',
        value: function changeBtnClick() {
            var data = {
                'Category': 'ConsumerApp', 'Action': 'changeBtnOnLabCardClick', 'CustomerID': _gtm2.default.getUserId() || '', 'leadid': 0, 'event': 'change-btn-on-lab-card-click'
            };
            _gtm2.default.sendEvent({ data: data });
            var selectedTests = [];
            if (this.props.currentSearchedCriterias.length) {
                for (var i = 0; i < this.props.currentSearchedCriterias.length; i++) {
                    selectedTests.push(this.props.currentSearchedCriterias[i].id);
                }
            }
            this.props.history.push('/locationsearch?lab_card=true&id=' + selectedTests);
        }
    }, {
        key: 'goToLocation',
        value: function goToLocation() {
            this.setState({
                searchCities: []
            });
            /*let redirect_to = ""
            if (window.location.pathname.includes('lbcit') || window.location.pathname.includes('lblitcit')) {
                redirect_to = "/lab/searchresults"
            }
            */
            var location_url = '/locationsearch';
            /*        if (redirect_to) {
                        location_url += `?redirect_to=${redirect_to}`
                    }
            */
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

            // if(document.getElementById("filter-scroll")){
            //     window.onscroll = function() {
            //     var currentScrollPos = window.pageYOffset
            //       if (currentScrollPos > 0) {
            //         document.getElementById("filter-scroll").classList.add("d-none")
            //       } else {
            //         document.getElementById("filter-scroll").classList.remove("d-none")
            //       }
            //     }
            // }

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
                                                    _this3.setState({ shortURL: "" });
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
                                                            _this3.setState({ shortURL: "" });
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
                                    ' Results ',
                                    criteriaStr ? "for" : "",
                                    ' ',
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'fw-700' },
                                        ' ',
                                        criteriaStr
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        this.state.showLocationPopup && false ? '' : locationName ? _react2.default.createElement(
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
                    this.state.showLocationPopup ? this.props.lab_card && this.state.showPopupContainer ? _react2.default.createElement(_locationPopup2.default, _extends({}, this.props, { onRef: function onRef(ref) {
                            return _this3.child = ref;
                        }, resultType: 'list', isTopbar: true, hideLocationPopup: function hideLocationPopup() {
                            return _this3.hideLocationPopup();
                        }, locationName: locationName, criteriaString: criteriaStr, popupContainer: function popupContainer() {
                            return _this3.popupContainer();
                        } })) : _react2.default.createElement(_locationElements2.default, _extends({}, this.props, { onRef: function onRef(ref) {
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

    return TopBar;
}(_react2.default.Component);

exports.default = TopBar;

/***/ }),

/***/ "./dev/js/containers/diagnosis/categoryTestResults.js":
/*!************************************************************!*\
  !*** ./dev/js/containers/diagnosis/categoryTestResults.js ***!
  \************************************************************/
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

var _categoryTestResultsView = __webpack_require__(/*! ../../components/diagnosis/categoryTestResults/categoryTestResultsView.js */ "./dev/js/components/diagnosis/categoryTestResults/categoryTestResultsView.js");

var _categoryTestResultsView2 = _interopRequireDefault(_categoryTestResultsView);

var _notFound = __webpack_require__(/*! ../../components/commons/notFound */ "./dev/js/components/commons/notFound/index.js");

var _notFound2 = _interopRequireDefault(_notFound);

var _Loader = __webpack_require__(/*! ../../components/commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var categoryTestResults = function (_React$Component) {
    _inherits(categoryTestResults, _React$Component);

    function categoryTestResults(props) {
        _classCallCheck(this, categoryTestResults);

        var _this = _possibleConstructorReturn(this, (categoryTestResults.__proto__ || Object.getPrototypeOf(categoryTestResults)).call(this, props));

        _this.state = {
            data: null
        };
        return _this;
    }

    _createClass(categoryTestResults, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // this.props.loadOPDInsurance(this.props.selectedLocation)
            var searchUrl = null;
            if (this.props.match.url.includes('-tpcp')) {
                searchUrl = this.props.match.url.toLowerCase();
            }
            var page = 1;
            this.props.getTestCategoryList(null, page, false, searchUrl, function (resp) {
                if (resp) {
                    _this2.setState({ data: resp });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.state.data) {
                return _react2.default.createElement(_categoryTestResultsView2.default, _extends({}, this.props, { labList: this.state.data }));
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: 'profile-body-wrap' },
                    _react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
                    _react2.default.createElement(_Loader2.default, null)
                );
            }
        }
    }]);

    return categoryTestResults;
}(_react2.default.Component);

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
        page = _state$SEARCH_CRITERI.page,
        search_id_data = _state$SEARCH_CRITERI.search_id_data,
        nextSelectedCriterias = _state$SEARCH_CRITERI.nextSelectedCriterias,
        currentSearchedCriterias = _state$SEARCH_CRITERI.currentSearchedCriterias,
        nextFilterCriteria = _state$SEARCH_CRITERI.nextFilterCriteria,
        compare_packages = _state$SEARCH_CRITERI.compare_packages;
    var offerList = state.USER.offerList;


    var LABS = state.LAB_SEARCH_DATA;
    var _state$LAB_SEARCH = state.LAB_SEARCH,
        show404 = _state$LAB_SEARCH.show404,
        labList = _state$LAB_SEARCH.labList,
        LOADED_LABS_SEARCH = _state$LAB_SEARCH.LOADED_LABS_SEARCH,
        count = _state$LAB_SEARCH.count,
        SET_FROM_SERVER = _state$LAB_SEARCH.SET_FROM_SERVER,
        curr_page = _state$LAB_SEARCH.curr_page,
        seoData = _state$LAB_SEARCH.seoData,
        test_data = _state$LAB_SEARCH.test_data;
    var _state$SEARCH_CRITERI2 = state.SEARCH_CRITERIA_OPD,
        mergeUrlState = _state$SEARCH_CRITERI2.mergeUrlState,
        common_settings = _state$SEARCH_CRITERI2.common_settings;
    var _state$USER = state.USER,
        is_login_user_insured = _state$USER.is_login_user_insured,
        insurance_status = _state$USER.insurance_status,
        device_info = _state$USER.device_info;


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
        page: page,
        curr_page: curr_page,
        search_id_data: search_id_data,
        nextSelectedCriterias: nextSelectedCriterias,
        currentSearchedCriterias: currentSearchedCriterias,
        nextFilterCriteria: nextFilterCriteria,
        seoData: seoData,
        mergeUrlState: mergeUrlState,
        test_data: test_data,
        show404: show404,
        offerList: offerList,
        is_login_user_insured: is_login_user_insured,
        compare_packages: compare_packages,
        insurance_status: insurance_status,
        device_info: device_info,
        common_settings: common_settings
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        urlShortner: function urlShortner(url, cb) {
            return dispatch((0, _index.urlShortner)(url, cb));
        },
        getTestCategoryList: function getTestCategoryList(state, page, from_server, searchByUrl, cb) {
            return dispatch((0, _index.getTestCategoryList)(state, page, from_server, searchByUrl, cb));
        },
        toggleDiagnosisCriteria: function toggleDiagnosisCriteria(type, criteria, forceAdd) {
            return dispatch((0, _index.toggleDiagnosisCriteria)(type, criteria, forceAdd));
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
        getFooterData: function getFooterData(url) {
            return dispatch((0, _index.getFooterData)(url));
        },
        setLabSearchId: function setLabSearchId(searchId, filters, setDefault) {
            return dispatch((0, _index.setLabSearchId)(searchId, filters, setDefault));
        },
        getLabSearchIdResults: function getLabSearchIdResults(searchId, searchResults) {
            return dispatch((0, _index.getLabSearchIdResults)(searchId, searchResults));
        },
        selectSearchType: function selectSearchType(type) {
            return dispatch((0, _index.selectSearchType)(type));
        },
        toggle404: function toggle404(status) {
            return dispatch((0, _index.toggle404)(status));
        },
        selectLabTimeSLot: function selectLabTimeSLot(slot, reschedule) {
            return dispatch((0, _index.selectLabTimeSLot)(slot, reschedule));
        },
        getOfferList: function getOfferList(lat, long) {
            return dispatch((0, _index.getOfferList)(lat, long));
        },
        toggleOPDCriteria: function toggleOPDCriteria(type, criteria, forceAdd, filter) {
            return dispatch((0, _index.toggleOPDCriteria)(type, criteria, forceAdd, filter));
        },
        selectLabAppointmentType: function selectLabAppointmentType(type) {
            return dispatch((0, _index.selectLabAppointmentType)(type));
        },
        resetPkgCompare: function resetPkgCompare() {
            return dispatch((0, _index.resetPkgCompare)());
        },
        loadOPDInsurance: function loadOPDInsurance(city) {
            return dispatch((0, _index.loadOPDInsurance)(city));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(categoryTestResults);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9kaWFnbm9zaXMvY2F0ZWdvcnlUZXN0UmVzdWx0cy9UZXN0Q2F0ZWdvcnlMaXN0L1Rlc3RDYXRlZ29yeUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NhdGVnb3J5VGVzdFJlc3VsdHMvY2F0ZWdvcnlUZXN0UmVzdWx0c1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NhdGVnb3J5VGVzdFJlc3VsdHMvbmV3VG9wQmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2RpYWdub3Npcy9jYXRlZ29yeVRlc3RSZXN1bHRzL25ld1RvcEJhci9uZXdUb3BCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvZGlhZ25vc2lzL2NhdGVnb3J5VGVzdFJlc3VsdHMvdG9wQmFyL3Jlc3VsdF9jb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9kaWFnbm9zaXMvY2F0ZWdvcnlUZXN0UmVzdWx0cy5qcyJdLCJuYW1lcyI6WyJMYWJzTGlzdCIsInByb3BzIiwic3RhdGUiLCJoYXNNb3JlIiwibG9hZGluZyIsInJlbmRlckJsb2NrIiwicGFnZSIsImlzX2luc3VyZWQiLCJmaWx0ZXJDcml0ZXJpYSIsImF2Z19yYXRpbmdzIiwidGVzdF9kYXRhIiwidGVzdCIsImlkIiwibmFtZSIsInR5cGUiLCJ0b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSIsInNldFRpbWVvdXQiLCJoaXN0b3J5IiwicHVzaCIsImxhYkxpc3QiLCJhbGxfY2F0ZWdvcmllcyIsImxlbmd0aCIsIm1hcCIsImRhdGEiLCJpIiwibGFiX3Rlc3RfY2F0X2lkIiwibGFiX3Rlc3RfY2F0X25hbWUiLCJsYWJfdGVzdF90ZXN0cyIsImsiLCJib29rTm93IiwiYmluZCIsImN1cnNvciIsInBhZGRpbmdCb3R0b20iLCJmb250U2l6ZSIsImNvdW50IiwiZGVhbF9wcmljZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiU2VhcmNoUmVzdWx0c1ZpZXciLCJzZXRTdGF0ZSIsInF1aWNrRmlsdGVyIiwic2hvd19wYWdpbmF0aW9uIiwidXJsIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJjdXJyX3BhZ2UiLCJwYXJzZUludCIsInByZXYiLCJuZXh0IiwibGFuZGluZ19wYWdlIiwid2luZG93IiwiT05fTEFORElOR19QQUdFIiwiZGlzcGxheSIsImNhbm9uaWNhbFVybCIsIm1hdGNoIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1ldGFfZGVzY3JpcHRpb24iLCJMT0FERURfTEFCU19TRUFSQ0giLCJzaG93RXJyb3IiLCJsYWJfY2FyZCIsIlRvcEJhciIsImFuY2hvckVsIiwiZHJvcGRvd25fdmlzaWJsZSIsInByZXZpb3VzX2ZpbHRlcnMiLCJzb3J0X29uIiwic29ydF9vcmRlciIsImF2YWlsYWJpbGl0eSIsImhvbWVfdmlzaXQiLCJsYWJfdmlzaXQiLCJzaG9ydFVSTCIsInNob3dMb2NhdGlvblBvcHVwIiwibG9jYXRpb25UeXBlIiwiaW5jbHVkZXMiLCJzZW9EYXRhIiwic2VvRnJpZW5kbHkiLCJvdmVybGF5VmlzaWJsZSIsInNlYXJjaENpdGllcyIsInNob3dQb3B1cENvbnRhaW5lciIsImxvY2F0aW9uX3VybCIsIkdUTSIsImdldFVzZXJJZCIsInNlbmRFdmVudCIsImNyaXRlcmlhU3RyIiwibG9jYXRpb25OYW1lIiwic2VsZWN0ZWRMb2NhdGlvbiIsImZvcm1hdHRlZF9hZGRyZXNzIiwiZ29Ub0xvY2F0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwiQVNTRVRTX0JBU0VfVVJMIiwiY2hpbGQiLCJyZWYiLCJoaWRlTG9jYXRpb25Qb3B1cCIsIm92ZXJsYXlDbGljayIsInNlbGVjdGVkQ3JpdGVyaWFzIiwicmVkdWNlIiwiZmluYWwiLCJjdXJyIiwiaHJlZiIsInVybFNob3J0bmVyIiwiZXJyIiwidGlueV91cmwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJ6SW5kZXgiLCJzZWxlY3RlZFRlc3RzIiwiY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzIiwiZ2V0Q3JpdGVyaWFTdHJpbmciLCJzaG9ydGVuVXJsIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIlNuYWNrQmFyIiwic2hvdyIsInBvcyIsInRleHQiLCJwb3B1cENvbnRhaW5lciIsImNhdGVnb3J5VGVzdFJlc3VsdHMiLCJzZWFyY2hVcmwiLCJ0b0xvd2VyQ2FzZSIsImdldFRlc3RDYXRlZ29yeUxpc3QiLCJyZXNwIiwibWFwU3RhdGVUb1Byb3BzIiwicGFzc2VkUHJvcHMiLCJpbml0aWFsU2VydmVyRGF0YSIsInN0YXRpY0NvbnRleHQiLCJTRUFSQ0hfQ1JJVEVSSUFfTEFCUyIsIkxPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCIiwiZmV0Y2hOZXdSZXN1bHRzIiwiY29ycG9yYXRlQ291cG9uIiwic2VhcmNoX2lkX2RhdGEiLCJuZXh0U2VsZWN0ZWRDcml0ZXJpYXMiLCJuZXh0RmlsdGVyQ3JpdGVyaWEiLCJjb21wYXJlX3BhY2thZ2VzIiwib2ZmZXJMaXN0IiwiVVNFUiIsIkxBQlMiLCJMQUJfU0VBUkNIX0RBVEEiLCJMQUJfU0VBUkNIIiwic2hvdzQwNCIsIlNFVF9GUk9NX1NFUlZFUiIsIlNFQVJDSF9DUklURVJJQV9PUEQiLCJtZXJnZVVybFN0YXRlIiwiY29tbW9uX3NldHRpbmdzIiwiaXNfbG9naW5fdXNlcl9pbnN1cmVkIiwiaW5zdXJhbmNlX3N0YXR1cyIsImRldmljZV9pbmZvIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjYiIsImZyb21fc2VydmVyIiwic2VhcmNoQnlVcmwiLCJjcml0ZXJpYSIsImZvcmNlQWRkIiwiZ2V0RGlhZ25vc2lzQ3JpdGVyaWFSZXN1bHRzIiwic2VhcmNoU3RyaW5nIiwiY2FsbGJhY2siLCJjbGVhckV4dHJhVGVzdHMiLCJtZXJnZUxBQlN0YXRlIiwiZ2V0Rm9vdGVyRGF0YSIsInNldExhYlNlYXJjaElkIiwic2VhcmNoSWQiLCJmaWx0ZXJzIiwic2V0RGVmYXVsdCIsImdldExhYlNlYXJjaElkUmVzdWx0cyIsInNlYXJjaFJlc3VsdHMiLCJzZWxlY3RTZWFyY2hUeXBlIiwidG9nZ2xlNDA0Iiwic3RhdHVzIiwic2VsZWN0TGFiVGltZVNMb3QiLCJzbG90IiwicmVzY2hlZHVsZSIsImdldE9mZmVyTGlzdCIsImxhdCIsImxvbmciLCJ0b2dnbGVPUERDcml0ZXJpYSIsImZpbHRlciIsInNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSIsInJlc2V0UGtnQ29tcGFyZSIsImxvYWRPUERJbnN1cmFuY2UiLCJjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTLEtBREE7QUFFVEMscUJBQVMsS0FGQTtBQUdUQyx5QkFBYSxLQUhKO0FBSVRDLGtCQUFNLENBSkc7QUFLVEMsd0JBQVlOLE1BQU1PLGNBQU4sSUFBd0JQLE1BQU1PLGNBQU4sQ0FBcUJELFVBQTdDLEdBQTBETixNQUFNTyxjQUFOLENBQXFCRCxVQUEvRSxHQUE0RixLQUwvRjtBQU1URSx5QkFBYTtBQU5KLFNBQWI7QUFGZTtBQVVsQjs7OztnQ0FFT0MsUyxFQUFXO0FBQUE7O0FBQ2YsZ0JBQUlDLE9BQU8sRUFBWDtBQUNBQSxpQkFBS0MsRUFBTCxHQUFVRixVQUFVRSxFQUFwQjtBQUNBRCxpQkFBS0UsSUFBTCxHQUFZSCxVQUFVRyxJQUF0QjtBQUNBRixpQkFBS0csSUFBTCxHQUFZLE1BQVo7QUFDQSxpQkFBS2IsS0FBTCxDQUFXYyx1QkFBWCxDQUFtQyxNQUFuQyxFQUEyQ0osSUFBM0MsRUFBaUQsSUFBakQ7O0FBRUFLLHVCQUFXLFlBQU07QUFDYix1QkFBS2YsS0FBTCxDQUFXZ0IsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0Isb0JBQXhCO0FBQ0gsYUFGRCxFQUVHLEdBRkg7QUFJSDs7O2lDQUVRO0FBQUE7O0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFTLFdBQVUsa0RBQW5CLEVBQXNFLEtBQUksZUFBMUU7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxvQ0FBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUsUUFBZjtBQUNJO0FBQUE7QUFBQTtBQUNLLHFDQUFLakIsS0FBTCxDQUFXa0IsT0FBWCxJQUFzQixLQUFLbEIsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQkMsY0FBekMsSUFBMkQsS0FBS25CLEtBQUwsQ0FBV2tCLE9BQVgsQ0FBbUJDLGNBQW5CLENBQWtDQyxNQUE3RixHQUNHLEtBQUtwQixLQUFMLENBQVdrQixPQUFYLENBQW1CQyxjQUFuQixDQUFrQ0UsR0FBbEMsQ0FBc0MsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDL0MsMkNBQU87QUFBQTtBQUFBLDBDQUFJLEtBQUtBLENBQVQsRUFBWSxJQUFJRCxLQUFLRSxlQUFyQjtBQUNIO0FBQUE7QUFBQSw4Q0FBSSxXQUFVLGNBQWQ7QUFBOEJGLGlEQUFLRztBQUFuQyx5Q0FERztBQUdDSCw2Q0FBS0ksY0FBTCxJQUF1QkosS0FBS0ksY0FBTCxDQUFvQk4sTUFBM0MsR0FDSUUsS0FBS0ksY0FBTCxDQUFvQkwsR0FBcEIsQ0FBd0IsVUFBQ1osU0FBRCxFQUFZa0IsQ0FBWixFQUFrQjtBQUN0QyxtREFBTztBQUFBO0FBQUEsa0RBQUssV0FBVSxtQkFBZixFQUFtQyxLQUFLQSxDQUF4QyxFQUEyQyxJQUFJbEIsVUFBVUUsRUFBekQsRUFBNkQsU0FBUyxPQUFLaUIsT0FBTCxDQUFhQyxJQUFiLENBQWtCLE1BQWxCLEVBQXdCcEIsU0FBeEIsQ0FBdEU7QUFDSDtBQUFBO0FBQUEsc0RBQUssV0FBVSxzQkFBZixFQUFzQyxPQUFPLEVBQUVxQixRQUFRLFNBQVYsRUFBN0M7QUFDSTtBQUFBO0FBQUEsMERBQUssV0FBVSxnQkFBZixFQUFnQyxPQUFPLEVBQUNDLGVBQWMsRUFBZixFQUF2QztBQUNJO0FBQUE7QUFBQSw4REFBSyxXQUFVLE9BQWY7QUFDSTtBQUFBO0FBQUEsa0VBQUssV0FBVSxnREFBZjtBQUNJO0FBQUE7QUFBQSxzRUFBSyxXQUFVLDRCQUFmO0FBQ0k7QUFBQTtBQUFBLDBFQUFHLE1BQUssNkRBQVI7QUFDSTtBQUFBO0FBQUEsOEVBQUksV0FBVSwwQkFBZCxFQUF5QyxPQUFPLEVBQUNDLFVBQVMsTUFBVixFQUFoRDtBQUNLdkIsc0ZBQVVHO0FBRGY7QUFESixxRUFESjtBQU1LSCw4RUFBVXdCLEtBQVYsR0FDRztBQUFBO0FBQUE7QUFBQTtBQUFpQnhCLGtGQUFVd0IsS0FBM0I7QUFBQTtBQUFBLHFFQURILEdBRUs7QUFSVjtBQURKO0FBREoseURBREo7QUFnQkk7QUFBQTtBQUFBLDhEQUFLLFdBQVUsT0FBZjtBQUNJO0FBQUE7QUFBQSxrRUFBRyxXQUFVLGdCQUFiO0FBQUE7QUFBQSw2REFESjtBQUVJO0FBQUE7QUFBQSxrRUFBRyxXQUFVLGVBQWI7QUFBQTtBQUFnQ3hCLDBFQUFVeUI7QUFBMUMsNkRBRko7QUFNSTtBQUFBO0FBQUEsa0VBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLE9BQUtOLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixNQUFsQixFQUF3QnBCLFNBQXhCLENBQTNDO0FBQUE7QUFBQTtBQU5KO0FBaEJKO0FBREo7QUFERyw2Q0FBUDtBQTZCSCx5Q0E5QkQsQ0FESixHQWdDTTtBQW5DUCxxQ0FBUDtBQXNDSCxpQ0F2Q0QsQ0FESCxHQXlDSztBQTFDVjtBQURKO0FBREo7QUFESjtBQURKLGFBREo7QUFzREg7Ozs7RUFqRmtCMEIsZ0JBQU1DLFM7O2tCQXFGZHJDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGZjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQU1zQyxjQUFjQyxtQkFBT0EsQ0FBQywwREFBUixDQUFwQjs7SUFFTUMsaUI7OztBQUNGLCtCQUFZdkMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmU7QUFJbEI7Ozs7NENBRWtCO0FBQ2YsaUJBQUt1QyxRQUFMLENBQWMsRUFBQ0MsYUFBYSxFQUFkLEVBQWQ7QUFDSDs7O2lDQUVRO0FBQ0wsZ0JBQUlDLGtCQUFrQixLQUFLMUMsS0FBTCxDQUFXa0IsT0FBWCxJQUFzQixLQUFLbEIsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQkUsTUFBbkIsR0FBNEIsQ0FBeEU7QUFDQSxnQkFBSXVCLFdBQVNDLGlCQUFPQyxZQUFoQixHQUErQixLQUFLN0MsS0FBTCxDQUFXOEMsUUFBWCxDQUFvQkMsUUFBdkQ7QUFDQUosa0JBQU1BLElBQUlLLE9BQUosQ0FBWSxjQUFaLEVBQTRCLEVBQTVCLENBQU47QUFDQSxnQkFBSTNDLE9BQU8sRUFBWDtBQUNBLGdCQUFJNEMsWUFBWUMsU0FBUyxLQUFLbEQsS0FBTCxDQUFXSyxJQUFwQixDQUFoQjtBQUNBLGdCQUFJOEMsT0FBTyxFQUFYO0FBQ0EsZ0JBQUlGLFlBQVksQ0FBaEIsRUFBbUI7QUFDZjVDLGtDQUFnQjRDLFNBQWhCO0FBQ0FFLHVCQUFPUixHQUFQO0FBQ0Esb0JBQUlNLFlBQVksQ0FBaEIsRUFBbUI7QUFDZkUsd0NBQWlCRixZQUFZLENBQTdCO0FBQ0g7QUFDSjtBQUNELGdCQUFJRyxPQUFPLEVBQVg7QUFDQSxnQkFBSSxLQUFLcEQsS0FBTCxDQUFXaUMsS0FBWCxHQUFtQmdCLFlBQVksRUFBbkMsRUFBdUM7QUFDbkNHLHVCQUFPVCxtQkFBZU0sWUFBWSxDQUEzQixFQUFQO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBSUksZUFBZSxLQUFuQjtBQUNBLGdCQUFJLFFBQU9DLE1BQVAseUNBQU9BLE1BQVAsTUFBaUIsUUFBakIsSUFBNkJBLE9BQU9DLGVBQXhDLEVBQXlEO0FBQ3JERiwrQkFBZSxJQUFmO0FBQ0g7QUFDRCxnQkFBSXBCLFFBQVEsQ0FBWjtBQUNBLGdCQUFHLEtBQUtqQyxLQUFMLENBQVdrQixPQUFYLElBQXNCLEtBQUtsQixLQUFMLENBQVdrQixPQUFYLENBQW1CQyxjQUF6QyxJQUEyRCxLQUFLbkIsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQkMsY0FBbkIsQ0FBa0NDLE1BQWhHLEVBQXVHO0FBQ25HLHFCQUFLcEIsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQkMsY0FBbkIsQ0FBa0NFLEdBQWxDLENBQXNDLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQy9DVSw2QkFBU2lCLFNBQVM1QixLQUFLLGFBQUwsQ0FBVCxDQUFUO0FBQ0gsaUJBRkQ7QUFHSDs7QUFFRCxtQkFDSTtBQUFBO0FBQUE7QUFDSSx1REFBSyxJQUFHLEtBQVIsRUFBYyxPQUFPLEVBQUVrQyxTQUFTLE1BQVgsRUFBckIsR0FESjtBQUVLLDhDQUFDLG9CQUFELElBQVksVUFBVTtBQUNuQkMsMkNBQWlCYixpQkFBT0MsWUFBeEIsR0FBdUMsS0FBSzdDLEtBQUwsQ0FBVzBELEtBQVgsQ0FBaUJmLEdBQXhELEdBQThEdEMsSUFEM0M7QUFFbkJzRCwrQkFBTyxLQUFLM0QsS0FBTCxDQUFXa0IsT0FBWCxHQUFtQixLQUFLbEIsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQnlDLEtBQXRDLEdBQTRDLEVBRmhDO0FBR25CQyxxQ0FBYSxLQUFLNUQsS0FBTCxDQUFXa0IsT0FBWCxHQUFtQixLQUFLbEIsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQjJDLGdCQUF0QyxHQUF1RCxFQUhqRDtBQUluQlYsOEJBQU1BLElBSmE7QUFLbkJDLDhCQUFNQTtBQUxhLHFCQUF0QixFQU1FLFNBQVMsS0FOWCxHQUZMO0FBVUk7QUFBQyw0Q0FBRDtBQUFBLGlDQUFvQixLQUFLcEQsS0FBekIsSUFBZ0MsY0FBY3FELGdCQUFnQixLQUFLckQsS0FBTCxDQUFXOEQsa0JBQTNCLElBQWlELEtBQUs3RCxLQUFMLENBQVc4RCxTQUExRyxFQUFxSCxPQUFNLDJCQUEzSCxFQUF1SixRQUFRLElBQS9KLEVBQXFLLFVBQVUsQ0FBQyxDQUFDLEtBQUs5RCxLQUFMLENBQVcrRCxRQUE1TCxFQUFzTSxZQUFZLElBQWxOLEVBQXdOLFlBQVksSUFBcE87QUFFUSx5QkFBSy9ELEtBQUwsQ0FBVzhELFNBQVgsR0FBdUI7QUFBQTtBQUFBLDBCQUFLLFdBQVUsTUFBZjtBQUFBO0FBQUEscUJBQXZCLEdBQXdFO0FBQUE7QUFBQTtBQUNuRSxzREFBQyxtQkFBRCxlQUFZLEtBQUsvRCxLQUFqQixJQUF3QixPQUFTaUMsS0FBakMsSUFEbUU7QUFJaEUsNkJBQUtqQyxLQUFMLENBQVdrQixPQUFYLElBQXNCLEtBQUtsQixLQUFMLENBQVdrQixPQUFYLENBQW1CRSxNQUFuQixJQUE0QixDQUFsRCxHQUNBO0FBQUE7QUFBQSw4QkFBSyxXQUFVLG9DQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFLLFdBQVUsK0JBQWY7QUFDSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUE7QUFESjtBQURKO0FBREoseUJBREEsR0FvQkM7QUFBQywyQ0FBRCxDQUFPLFFBQVA7QUFBQTtBQUVHLDBEQUFDLDBCQUFELEVBQWMsS0FBS3BCLEtBQW5CO0FBRkg7QUF4QitEO0FBRmhGO0FBVkosYUFESjtBQW1ESDs7OztFQTdGMkJtQyxnQkFBTUMsUzs7a0JBZ0d2QkcsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHZjs7Ozs7O2tCQUVlMEIsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLG9CQUFZakUsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUaUUsc0JBQVUsSUFERDtBQUVUQyw4QkFBa0IsS0FGVDtBQUdUO0FBQ0E7QUFDQTdELHdCQUFZTixNQUFNTyxjQUFOLElBQXdCUCxNQUFNTyxjQUFOLENBQXFCRCxVQUE3QyxHQUEwRE4sTUFBTU8sY0FBTixDQUFxQkQsVUFBL0UsR0FBNEYsS0FML0Y7QUFNVDtBQUNBOEQsOEJBQWtCLEVBUFQ7QUFRVEMscUJBQVMsRUFSQTtBQVNUQyx3QkFBWSxFQVRIO0FBVVQ5RCx5QkFBYSxFQVZKO0FBV1QrRCwwQkFBYyxFQVhMO0FBWVRDLHdCQUFZLEtBWkg7QUFhVEMsdUJBQVcsS0FiRjtBQWNUQyxzQkFBVSxFQWREO0FBZVRDLCtCQUFtQixLQWZWO0FBZ0JUbEMseUJBQWE7QUFoQkosU0FBYjtBQUZlO0FBb0JsQjs7OztrREFFeUJ6QyxLLEVBQU87O0FBRTdCLGdCQUFJQSxNQUFNNEUsWUFBTixJQUFzQixDQUFDNUUsTUFBTTRFLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCLEtBQTVCLENBQTNCLEVBQStEO0FBQzNELHFCQUFLckMsUUFBTCxDQUFjLEVBQUVtQyxtQkFBbUIsS0FBckIsRUFBZDtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFJM0UsTUFBTThFLE9BQU4sSUFBaUI5RSxNQUFNOEUsT0FBTixDQUFjaEMsUUFBbkMsRUFBNkM7QUFDekMseUJBQUtOLFFBQUwsQ0FBYyxFQUFFbUMsbUJBQW1CLEtBQXJCLEVBQWQ7QUFDSCxpQkFGRCxNQUVPO0FBQ0gsd0JBQUszRSxNQUFNOEUsT0FBTixJQUFpQjlFLE1BQU04RSxPQUFOLENBQWNoQyxRQUFoQyxJQUE2QzlDLE1BQU0rRSxXQUF2RCxFQUFvRTtBQUNoRSw2QkFBS3ZDLFFBQUwsQ0FBYyxFQUFFbUMsbUJBQW1CLElBQXJCLEVBQTJCSyxnQkFBZ0IsSUFBM0MsRUFBZDtBQUNIO0FBQ0o7QUFDSjtBQUNEO0FBQ0g7Ozs0Q0FFbUI7QUFDaEIsaUJBQUt4QyxRQUFMLGNBQW1CLEtBQUt4QyxLQUFMLENBQVdPLGNBQTlCO0FBQ0E7QUFDQSxnQkFBSyxLQUFLUCxLQUFMLENBQVc4RSxPQUFYLElBQXNCLEtBQUs5RSxLQUFMLENBQVc4RSxPQUFYLENBQW1CaEMsUUFBMUMsSUFBdUQsS0FBSzlDLEtBQUwsQ0FBVytFLFdBQXRFLEVBQW1GO0FBQy9FLHFCQUFLdkMsUUFBTCxDQUFjLEVBQUVtQyxtQkFBbUIsS0FBckIsRUFBZDtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFJLEtBQUszRSxLQUFMLENBQVc0RSxZQUFYLElBQTJCLEtBQUs1RSxLQUFMLENBQVc0RSxZQUFYLENBQXdCQyxRQUF4QixDQUFpQyxLQUFqQyxDQUEvQixFQUF3RTtBQUNwRSx5QkFBS3JDLFFBQUwsQ0FBYyxFQUFFbUMsbUJBQW1CLElBQXJCLEVBQTJCSyxnQkFBZ0IsSUFBM0MsRUFBZDtBQUNIO0FBQ0o7QUFDSjs7O3VDQUVjO0FBQ1gsaUJBQUt4QyxRQUFMLENBQWMsRUFBRXdDLGdCQUFnQixLQUFsQixFQUF5QkMsY0FBYyxFQUF2QyxFQUEyQ04sbUJBQW1CLEtBQTlELEVBQWQ7QUFDSDs7OzRDQUVtQjtBQUNoQixpQkFBS25DLFFBQUwsQ0FBYyxFQUFFbUMsbUJBQW1CLEtBQXJCLEVBQWQ7QUFDSDs7O3lDQUVnQjtBQUNiLGlCQUFLbkMsUUFBTCxDQUFjLEVBQUUwQyxvQkFBb0IsS0FBdEIsRUFBNkJQLG1CQUFtQixLQUFoRCxFQUFkO0FBQ0g7Ozt1Q0FFYztBQUNYLGlCQUFLbkMsUUFBTCxDQUFjO0FBQ1Z5Qyw4QkFBYztBQURKLGFBQWQ7QUFHQTs7Ozs7QUFLQSxnQkFBSUUsZUFBZSxpQkFBbkI7QUFDQTs7OztBQUlBLGdCQUFJN0QsT0FBTztBQUNQLDRCQUFZLGtDQURMLEVBQ3lDLFVBQVUsc0NBRG5ELEVBQzJGLGNBQWM4RCxjQUFJQyxTQUFKLE1BQW1CLEVBRDVILEVBQ2dJLFVBQVUsQ0FEMUksRUFDNkksU0FBUyxzQ0FEdEosRUFDOEwsT0FBTy9CLE9BQU9SLFFBQVAsQ0FBZ0JDO0FBRHJOLGFBQVg7QUFHQXFDLDBCQUFJRSxTQUFKLENBQWMsRUFBRWhFLE1BQU1BLElBQVIsRUFBZDtBQUNBLGlCQUFLdEIsS0FBTCxDQUFXZ0IsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0JrRSxZQUF4QjtBQUVIOzs7aUNBRVE7QUFBQTs7QUFHTCxnQkFBSUksY0FBYyxLQUFLdkYsS0FBTCxDQUFXa0IsT0FBWCxHQUFtQixLQUFLbEIsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQnlDLEtBQXRDLEdBQTRDLEVBQTlEO0FBQ0EsZ0JBQUk2QixlQUFlLEVBQW5CO0FBQ0EsZ0JBQUksS0FBS3hGLEtBQUwsQ0FBV3lGLGdCQUFYLElBQStCLEtBQUt6RixLQUFMLENBQVd5RixnQkFBWCxDQUE0QkMsaUJBQS9ELEVBQWtGO0FBQzlFRiwrQkFBZSxLQUFLeEYsS0FBTCxDQUFXeUYsZ0JBQVgsQ0FBNEJDLGlCQUEzQztBQUNIO0FBQ0QsZ0JBQUksS0FBSzFGLEtBQUwsQ0FBVzhFLE9BQVgsSUFBc0IsS0FBSzlFLEtBQUwsQ0FBVzhFLE9BQVgsQ0FBbUJoQyxRQUE3QyxFQUF1RDtBQUNuRDBDLCtCQUFlLEtBQUt4RixLQUFMLENBQVc4RSxPQUFYLENBQW1CaEMsUUFBbEM7QUFDSDs7QUFHRCxtQkFDSTtBQUFDLCtCQUFELENBQU8sUUFBUDtBQUFBO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsb0NBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxvQ0FBZjtBQUNJO0FBQUE7QUFBQSw4QkFBUyxXQUFVLG1CQUFuQjtBQUNJO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLDBCQUFmO0FBQ0k7QUFBQTtBQUFBLHNDQUFLLFdBQVUsMkNBQWY7QUFDSTtBQUFBO0FBQUEsMENBQUcsV0FBVSxpQkFBYjtBQUVLLDZDQUFLOUMsS0FBTCxDQUFXaUMsS0FGaEI7QUFBQTtBQUVnQ3NELHNEQUFjLE1BQWQsR0FBdUIsRUFGdkQ7QUFFMkRBLG1EQUYzRDtBQUtRQyx1REFDSTtBQUFBO0FBQUEsOENBQU0sU0FBUyxLQUFLRyxZQUFMLENBQWtCOUQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBZjtBQUFBLHFEQUFzRDJELFlBQXREO0FBQXFFLG1GQUFLLE9BQU8sRUFBRUksT0FBTyxNQUFULEVBQWlCQyxRQUFRLE1BQXpCLEVBQWlDQyxZQUFZLEtBQTdDLEVBQVosRUFBa0UsS0FBS0MsU0FBZUEsR0FBRyw4QkFBekY7QUFBckUseUNBREosR0FHTTtBQVJkO0FBREo7QUFESjtBQURKO0FBREoscUJBREo7QUFzQlEseUJBQUs5RixLQUFMLENBQVcwRSxpQkFBWCxHQUNJLDhCQUFDLDBCQUFELGVBQXNCLEtBQUszRSxLQUEzQixJQUFrQyxPQUFPO0FBQUEsbUNBQVEsT0FBS2dHLEtBQUwsR0FBYUMsR0FBckI7QUFBQSx5QkFBekMsRUFBb0UsWUFBVyxNQUEvRSxFQUFzRixVQUFVLElBQWhHLEVBQXNHLG1CQUFtQjtBQUFBLG1DQUFNLE9BQUtDLGlCQUFMLEVBQU47QUFBQSx5QkFBekgsRUFBeUosY0FBY1YsWUFBdkssSUFESixHQUVNLEVBeEJkO0FBNEJRLHlCQUFLdkYsS0FBTCxDQUFXMEUsaUJBQVgsSUFBZ0MsS0FBSzFFLEtBQUwsQ0FBVytFLGNBQTNDLElBQTZELENBQUMsS0FBS2hGLEtBQUwsQ0FBV2dFLFFBQXpFLEdBQ0ksdUNBQUssV0FBVSx1QkFBZixFQUF1QyxTQUFTO0FBQUEsbUNBQU0sT0FBS21DLFlBQUwsRUFBTjtBQUFBLHlCQUFoRCxHQURKLEdBRU0sRUE5QmQ7QUFrQ1EseUJBQUtsRyxLQUFMLENBQVcwRSxpQkFBWCxJQUFnQyxLQUFLM0UsS0FBTCxDQUFXZ0UsUUFBM0MsSUFBdUQsS0FBSy9ELEtBQUwsQ0FBV2lGLGtCQUFsRSxHQUNJLHVDQUFLLFdBQVUsd0JBQWYsR0FESixHQUVNO0FBcENkO0FBREosYUFESjtBQTJDSDs7OztFQTdJZ0IvQyxnQkFBTUMsUzs7a0JBaUpaNkIsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNKZjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBWWpFLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0F5RSxzQkFBVSxFQU5EO0FBT1Q7QUFDQUMsK0JBQW1CLEtBUlY7QUFTVEssNEJBQWdCLEtBVFA7QUFVVEUsZ0NBQW9CO0FBQ3BCO0FBWFMsU0FBYjtBQUZlO0FBZWxCOzs7O2tEQUV5QmxGLEssRUFBTztBQUM3QixpQkFBS3dDLFFBQUwsY0FBbUJ4QyxNQUFNTyxjQUF6QjtBQUNBLGdCQUFJUCxNQUFNNEUsWUFBTixJQUFzQixDQUFDNUUsTUFBTTRFLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCLEtBQTVCLENBQTNCLEVBQStEO0FBQzNELHFCQUFLckMsUUFBTCxDQUFjLEVBQUVtQyxtQkFBbUIsS0FBckIsRUFBZDtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFJM0UsTUFBTThFLE9BQU4sSUFBaUI5RSxNQUFNOEUsT0FBTixDQUFjaEMsUUFBbkMsRUFBNkM7QUFDekMseUJBQUtOLFFBQUwsQ0FBYyxFQUFFbUMsbUJBQW1CLEtBQXJCLEVBQWQ7QUFDSCxpQkFGRCxNQUVPO0FBQ0gsd0JBQUszRSxNQUFNOEUsT0FBTixJQUFpQjlFLE1BQU04RSxPQUFOLENBQWNoQyxRQUFoQyxJQUE2QzlDLE1BQU0rRSxXQUF2RCxFQUFvRTtBQUNoRSw2QkFBS3ZDLFFBQUwsQ0FBYyxFQUFFbUMsbUJBQW1CLElBQXJCLEVBQTJCSyxnQkFBZ0IsSUFBM0MsRUFBZDtBQUNIO0FBQ0o7QUFDSjtBQUNEO0FBQ0g7Ozs0Q0FFbUI7QUFDaEIsaUJBQUt4QyxRQUFMLGNBQW1CLEtBQUt4QyxLQUFMLENBQVdPLGNBQTlCO0FBQ0E7QUFDQSxnQkFBSyxLQUFLUCxLQUFMLENBQVc4RSxPQUFYLElBQXNCLEtBQUs5RSxLQUFMLENBQVc4RSxPQUFYLENBQW1CaEMsUUFBMUMsSUFBdUQsS0FBSzlDLEtBQUwsQ0FBVytFLFdBQXRFLEVBQW1GO0FBQy9FLHFCQUFLdkMsUUFBTCxDQUFjLEVBQUVtQyxtQkFBbUIsS0FBckIsRUFBZDtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFJLEtBQUszRSxLQUFMLENBQVc0RSxZQUFYLElBQTJCLEtBQUs1RSxLQUFMLENBQVc0RSxZQUFYLENBQXdCQyxRQUF4QixDQUFpQyxLQUFqQyxDQUEvQixFQUF3RTtBQUNwRSx5QkFBS3JDLFFBQUwsQ0FBYyxFQUFFbUMsbUJBQW1CLElBQXJCLEVBQTJCSyxnQkFBZ0IsSUFBM0MsRUFBZDtBQUNIO0FBQ0o7QUFDSjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzswQ0FFa0JvQixpQixFQUFtQjtBQUNqQyxnQkFBSUEscUJBQXFCQSxrQkFBa0JoRixNQUEzQyxFQUFtRDtBQUMvQyx1QkFBT2dGLGtCQUFrQkMsTUFBbEIsQ0FBeUIsVUFBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWNoRixDQUFkLEVBQW9CO0FBQ2hELHdCQUFJQSxLQUFLLENBQVQsRUFBWTtBQUNSK0UsaUNBQVMsSUFBVDtBQUNIO0FBQ0RBLGtDQUFZQyxLQUFLM0YsSUFBakI7QUFDQSwyQkFBTzBGLEtBQVA7QUFDSCxpQkFOTSxFQU1KLEVBTkksQ0FBUDtBQU9IO0FBQ0o7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7cUNBRWE7QUFBQTs7QUFDVCxnQkFBSWhELE1BQUosRUFBWTtBQUNSLG9CQUFJWCxNQUFNVyxPQUFPUixRQUFQLENBQWdCMEQsSUFBMUI7QUFDQSxvQkFBSTdELElBQUlrQyxRQUFKLENBQWEsR0FBYixDQUFKLEVBQXVCO0FBQ25CbEMsMEJBQU1XLE9BQU9SLFFBQVAsQ0FBZ0IwRCxJQUFoQixHQUF1QixzQkFBN0I7QUFDSCxpQkFGRCxNQUVPO0FBQ0g3RCwwQkFBTVcsT0FBT1IsUUFBUCxDQUFnQjBELElBQWhCLEdBQXVCLHNCQUE3QjtBQUNIO0FBQ0QscUJBQUt4RyxLQUFMLENBQVd5RyxXQUFYLENBQXVCOUQsR0FBdkIsRUFBNEIsVUFBQytELEdBQUQsRUFBTXBGLElBQU4sRUFBZTtBQUN2Qyx3QkFBSSxDQUFDb0YsR0FBTCxFQUFVO0FBQ04sK0JBQUtsRSxRQUFMLENBQWMsRUFBRWtDLFVBQVVwRCxLQUFLcUYsUUFBakIsRUFBZDtBQUNIO0FBQ0osaUJBSkQ7QUFLSDtBQUNKOzs7dUNBRWM7QUFDWCxpQkFBS25FLFFBQUwsQ0FBYyxFQUFFd0MsZ0JBQWdCLEtBQWxCLEVBQXlCQyxjQUFjLEVBQXZDLEVBQWQ7QUFDQSxnQkFBRzJCLFNBQVNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQUgsRUFBK0M7QUFDM0NELHlCQUFTQyxjQUFULENBQXdCLGtCQUF4QixFQUE0Q0MsS0FBNUMsQ0FBa0RDLE1BQWxELEdBQTBELEdBQTFEO0FBQ0g7QUFDSjs7OzRDQUVtQjtBQUNoQixpQkFBS3ZFLFFBQUwsQ0FBYyxFQUFFbUMsbUJBQW1CLEtBQXJCLEVBQWQ7QUFDSDs7O3lDQUVnQjtBQUNiLGlCQUFLbkMsUUFBTCxDQUFjLEVBQUUwQyxvQkFBb0IsS0FBdEIsRUFBNkJQLG1CQUFtQixLQUFoRCxFQUFkO0FBQ0g7Ozt5Q0FFZ0I7QUFDYixnQkFBSXJELE9BQU87QUFDUCw0QkFBWSxhQURMLEVBQ29CLFVBQVUseUJBRDlCLEVBQ3lELGNBQWM4RCxjQUFJQyxTQUFKLE1BQW1CLEVBRDFGLEVBQzhGLFVBQVUsQ0FEeEcsRUFDMkcsU0FBUztBQURwSCxhQUFYO0FBR0FELDBCQUFJRSxTQUFKLENBQWMsRUFBRWhFLE1BQU1BLElBQVIsRUFBZDtBQUNBLGdCQUFJMEYsZ0JBQWdCLEVBQXBCO0FBQ0EsZ0JBQUksS0FBS2hILEtBQUwsQ0FBV2lILHdCQUFYLENBQW9DN0YsTUFBeEMsRUFBZ0Q7QUFDNUMscUJBQUssSUFBSUcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUt2QixLQUFMLENBQVdpSCx3QkFBWCxDQUFvQzdGLE1BQXhELEVBQWdFRyxHQUFoRSxFQUFxRTtBQUNqRXlGLGtDQUFjL0YsSUFBZCxDQUFtQixLQUFLakIsS0FBTCxDQUFXaUgsd0JBQVgsQ0FBb0MxRixDQUFwQyxFQUF1Q1osRUFBMUQ7QUFDSDtBQUNKO0FBQ0QsaUJBQUtYLEtBQUwsQ0FBV2dCLE9BQVgsQ0FBbUJDLElBQW5CLHVDQUE0RCtGLGFBQTVEO0FBQ0g7Ozt1Q0FFYztBQUNYLGlCQUFLeEUsUUFBTCxDQUFjO0FBQ1Z5Qyw4QkFBYztBQURKLGFBQWQ7QUFHQTs7Ozs7QUFLQSxnQkFBSUUsZUFBZSxpQkFBbkI7QUFDQTs7OztBQUlBLGdCQUFJN0QsT0FBTztBQUNQLDRCQUFZLGtDQURMLEVBQ3lDLFVBQVUsc0NBRG5ELEVBQzJGLGNBQWM4RCxjQUFJQyxTQUFKLE1BQW1CLEVBRDVILEVBQ2dJLFVBQVUsQ0FEMUksRUFDNkksU0FBUyxzQ0FEdEosRUFDOEwsT0FBTy9CLE9BQU9SLFFBQVAsQ0FBZ0JDO0FBRHJOLGFBQVg7QUFHQXFDLDBCQUFJRSxTQUFKLENBQWMsRUFBRWhFLE1BQU1BLElBQVIsRUFBZDtBQUNBLGlCQUFLdEIsS0FBTCxDQUFXZ0IsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0JrRSxZQUF4QjtBQUVIOzs7aUNBRVE7QUFBQTs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBSUksY0FBYyxLQUFLMkIsaUJBQUwsQ0FBdUIsS0FBS2xILEtBQUwsQ0FBV2lILHdCQUFsQyxDQUFsQjtBQUNBLGdCQUFJekIsZUFBZSxFQUFuQjtBQUNBLGdCQUFJLEtBQUt4RixLQUFMLENBQVd5RixnQkFBWCxJQUErQixLQUFLekYsS0FBTCxDQUFXeUYsZ0JBQVgsQ0FBNEJDLGlCQUEvRCxFQUFrRjtBQUM5RUYsK0JBQWUsS0FBS3hGLEtBQUwsQ0FBV3lGLGdCQUFYLENBQTRCQyxpQkFBM0M7QUFDSDtBQUNELGdCQUFJLEtBQUsxRixLQUFMLENBQVc4RSxPQUFYLElBQXNCLEtBQUs5RSxLQUFMLENBQVc4RSxPQUFYLENBQW1CaEMsUUFBN0MsRUFBdUQ7QUFDbkQwQywrQkFBZSxLQUFLeEYsS0FBTCxDQUFXOEUsT0FBWCxDQUFtQmhDLFFBQWxDO0FBQ0g7O0FBRUQsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsaUJBQWYsRUFBaUMsSUFBRyxlQUFwQztBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLEtBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxRQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFLLFdBQVUsYUFBZjtBQUNJO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLCtDQUFmO0FBQ0k7QUFBQTtBQUFBLDBDQUFJLFdBQVUsYUFBZDtBQUNJO0FBQUE7QUFBQSw4Q0FBSSxXQUFVLDBCQUFkO0FBQ0k7QUFBQTtBQUFBLGtEQUFNLE9BQU8sRUFBRWhCLFFBQVEsU0FBVixFQUFiLEVBQW9DLFNBQVMsS0FBS3FGLFVBQUwsQ0FBZ0J0RixJQUFoQixDQUFxQixJQUFyQixDQUE3QztBQUNJLHVGQUFLLEtBQUtrRSxTQUFlQSxHQUFHLG1DQUE1QixFQUFpRSxPQUFPLEVBQUVILE9BQU8sRUFBVCxFQUF4RTtBQURKO0FBREoseUNBREo7QUFPUSw2Q0FBSzNGLEtBQUwsQ0FBV3lFLFFBQVgsR0FBc0I7QUFBQTtBQUFBLDhDQUFLLFdBQVUsdUJBQWYsRUFBdUMsU0FBUyxtQkFBTTtBQUN4RSwyREFBS2xDLFFBQUwsQ0FBYyxFQUFFa0MsVUFBVSxFQUFaLEVBQWQ7QUFDSCxpREFGcUI7QUFHbEI7QUFBQTtBQUFBLGtEQUFLLFdBQVUsZ0JBQWYsRUFBZ0MsU0FBUyxpQkFBQzBDLENBQUQsRUFBTztBQUM1Q0EsMERBQUVDLGVBQUY7QUFDSCxxREFGRDtBQUdJO0FBQUE7QUFBQTtBQUFJLHlEQUFLcEgsS0FBTCxDQUFXeUU7QUFBZixpREFISjtBQUlJO0FBQUMseUZBQUQ7QUFBQSxzREFBaUIsTUFBTSxLQUFLekUsS0FBTCxDQUFXeUUsUUFBbEM7QUFDSSxnRUFBUSxrQkFBTTtBQUNWNEMsbUZBQVNDLElBQVQsQ0FBYyxFQUFFQyxLQUFLLGVBQVAsRUFBd0JDLE1BQU0sdUJBQTlCLEVBQWQ7QUFDQSxtRUFBS2pGLFFBQUwsQ0FBYyxFQUFFa0MsVUFBVSxFQUFaLEVBQWQ7QUFDSCx5REFKTDtBQUtJO0FBQUE7QUFBQSwwREFBTSxXQUFVLGFBQWhCO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBTEo7QUFKSjtBQUhrQix5Q0FBdEIsR0FpQlM7QUF4QmpCO0FBREosaUNBREo7QUE4Qkk7QUFBQTtBQUFBLHNDQUFLLFdBQVUsY0FBZjtBQUNLLHlDQUFLMUUsS0FBTCxDQUFXaUMsS0FEaEI7QUFBQTtBQUNnQ3NELGtEQUFjLEtBQWQsR0FBc0IsRUFEdEQ7QUFBQTtBQUMwRDtBQUFBO0FBQUEsMENBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQTJCQTtBQUEzQixxQ0FEMUQ7QUFHSTtBQUFBO0FBQUE7QUFFUSw2Q0FBS3RGLEtBQUwsQ0FBVzBFLGlCQUFYLElBQWdDLEtBQWhDLEdBQXdDLEVBQXhDLEdBQ01hLGVBQWU7QUFBQTtBQUFBLDhDQUFNLFdBQVUsZUFBaEI7QUFBQSxxREFBd0NBO0FBQXhDLHlDQUFmLEdBQWdGLEVBSDlGO0FBS0ksK0VBQUssT0FBTyxFQUFFSSxPQUFPLEVBQVQsRUFBYUMsUUFBUSxFQUFyQixFQUF5QkMsWUFBWSxDQUFyQyxFQUF3Q2hFLFFBQVEsU0FBaEQsRUFBWixFQUF5RSxLQUFLaUUsU0FBZUEsR0FBRyw4QkFBaEcsRUFBZ0ksU0FBUyxLQUFLSixZQUFMLENBQWtCOUQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBekk7QUFMSjtBQUhKO0FBOUJKO0FBREo7QUFESixxQkFESjtBQWdEUSx5QkFBSzVCLEtBQUwsQ0FBVzBFLGlCQUFYLEdBQ0ksS0FBSzNFLEtBQUwsQ0FBV2dFLFFBQVgsSUFBdUIsS0FBSy9ELEtBQUwsQ0FBV2lGLGtCQUFsQyxHQUNJLDhCQUFDLHVCQUFELGVBQW1CLEtBQUtsRixLQUF4QixJQUErQixPQUFPO0FBQUEsbUNBQVEsT0FBS2dHLEtBQUwsR0FBYUMsR0FBckI7QUFBQSx5QkFBdEMsRUFBaUUsWUFBVyxNQUE1RSxFQUFtRixVQUFVLElBQTdGLEVBQW1HLG1CQUFtQjtBQUFBLG1DQUFNLE9BQUtDLGlCQUFMLEVBQU47QUFBQSx5QkFBdEgsRUFBc0osY0FBY1YsWUFBcEssRUFBa0wsZ0JBQWdCRCxXQUFsTSxFQUErTSxnQkFBZ0I7QUFBQSxtQ0FBTSxPQUFLbUMsY0FBTCxFQUFOO0FBQUEseUJBQS9OLElBREosR0FFTSw4QkFBQywwQkFBRCxlQUFzQixLQUFLMUgsS0FBM0IsSUFBa0MsT0FBTztBQUFBLG1DQUFRLE9BQUtnRyxLQUFMLEdBQWFDLEdBQXJCO0FBQUEseUJBQXpDLEVBQW9FLFlBQVcsTUFBL0UsRUFBc0YsVUFBVSxJQUFoRyxFQUFzRyxtQkFBbUI7QUFBQSxtQ0FBTSxPQUFLQyxpQkFBTCxFQUFOO0FBQUEseUJBQXpILEVBQXlKLGNBQWNWLFlBQXZLLElBSFYsR0FJTSxFQXBEZDtBQXdEUSx5QkFBS3ZGLEtBQUwsQ0FBVzBFLGlCQUFYLElBQWdDLEtBQUsxRSxLQUFMLENBQVcrRSxjQUEzQyxJQUE2RCxDQUFDLEtBQUtoRixLQUFMLENBQVdnRSxRQUF6RSxHQUNJLHVDQUFLLFdBQVUsdUJBQWYsRUFBdUMsU0FBUztBQUFBLG1DQUFNLE9BQUttQyxZQUFMLEVBQU47QUFBQSx5QkFBaEQsR0FESixHQUN5RixFQXpEakc7QUE2RFEseUJBQUtsRyxLQUFMLENBQVcwRSxpQkFBWCxJQUFnQyxLQUFLM0UsS0FBTCxDQUFXZ0UsUUFBM0MsSUFBdUQsS0FBSy9ELEtBQUwsQ0FBV2lGLGtCQUFsRSxHQUNJLHVDQUFLLFdBQVUsd0JBQWYsR0FESixHQUVNO0FBL0RkO0FBREosYUFESjtBQXVFSDs7OztFQW5TZ0IvQyxnQkFBTUMsUzs7a0JBdVNaNkIsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hUZjs7OztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTTBELG1COzs7QUFDRixpQ0FBWTNILEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SUFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVHFCLGtCQUFLO0FBREksU0FBYjtBQUZlO0FBS2xCOzs7OzRDQUVtQjtBQUFBOztBQUNoQjtBQUNBLGdCQUFJc0csWUFBWSxJQUFoQjtBQUNBLGdCQUFJLEtBQUs1SCxLQUFMLENBQVcwRCxLQUFYLENBQWlCZixHQUFqQixDQUFxQmtDLFFBQXJCLENBQThCLE9BQTlCLENBQUosRUFBNEM7QUFDeEMrQyw0QkFBWSxLQUFLNUgsS0FBTCxDQUFXMEQsS0FBWCxDQUFpQmYsR0FBakIsQ0FBcUJrRixXQUFyQixFQUFaO0FBQ0g7QUFDRCxnQkFBSXhILE9BQU8sQ0FBWDtBQUNBLGlCQUFLTCxLQUFMLENBQVc4SCxtQkFBWCxDQUErQixJQUEvQixFQUFvQ3pILElBQXBDLEVBQXlDLEtBQXpDLEVBQStDdUgsU0FBL0MsRUFBeUQsVUFBQ0csSUFBRCxFQUFRO0FBQzdELG9CQUFHQSxJQUFILEVBQVE7QUFDSiwyQkFBS3ZGLFFBQUwsQ0FBYyxFQUFDbEIsTUFBS3lHLElBQU4sRUFBZDtBQUNIO0FBQ0osYUFKRDtBQUtIOzs7aUNBRVE7O0FBRUwsZ0JBQUcsS0FBSzlILEtBQUwsQ0FBV3FCLElBQWQsRUFBbUI7QUFDZix1QkFDSSw4QkFBQyxpQ0FBRCxlQUF1QixLQUFLdEIsS0FBNUIsSUFBbUMsU0FBUyxLQUFLQyxLQUFMLENBQVdxQixJQUF2RCxJQURKO0FBR0gsYUFKRCxNQUlLO0FBQ0QsdUJBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsbUJBQWY7QUFDQSxrREFBQyw4QkFBRCxJQUFlLGtCQUFrQixJQUFqQyxHQURBO0FBRUEsa0RBQUMsZ0JBQUQ7QUFGQSxpQkFESjtBQU1IO0FBQ0o7Ozs7RUFwQzZCYSxnQkFBTUMsUzs7QUF1Q3hDLElBQU00RixrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUMvSCxLQUFELEVBQVFnSSxXQUFSLEVBQXdCO0FBQzVDOzs7QUFHQSxRQUFJQyxvQkFBb0IsSUFBeEI7QUFKNEMsUUFLdENDLGFBTHNDLEdBS3BCRixXQUxvQixDQUt0Q0UsYUFMc0M7O0FBTTVDLFFBQUlBLGlCQUFpQkEsY0FBYzdHLElBQW5DLEVBQXlDO0FBQ3JDNEcsNEJBQW9CQyxjQUFjN0csSUFBbEM7QUFDSDs7QUFSMkMsZ0NBd0J4Q3JCLE1BQU1tSSxvQkF4QmtDO0FBQUEsUUFXeEMzQyxnQkFYd0MseUJBV3hDQSxnQkFYd0M7QUFBQSxRQVl4Q1csaUJBWndDLHlCQVl4Q0EsaUJBWndDO0FBQUEsUUFheEM3RixjQWJ3Qyx5QkFheENBLGNBYndDO0FBQUEsUUFjeEM4SCwwQkFkd0MseUJBY3hDQSwwQkFkd0M7QUFBQSxRQWV4Q3pELFlBZndDLHlCQWV4Q0EsWUFmd0M7QUFBQSxRQWdCeEMwRCxlQWhCd0MseUJBZ0J4Q0EsZUFoQndDO0FBQUEsUUFpQnhDQyxlQWpCd0MseUJBaUJ4Q0EsZUFqQndDO0FBQUEsUUFrQnhDbEksSUFsQndDLHlCQWtCeENBLElBbEJ3QztBQUFBLFFBbUJ4Q21JLGNBbkJ3Qyx5QkFtQnhDQSxjQW5Cd0M7QUFBQSxRQW9CeENDLHFCQXBCd0MseUJBb0J4Q0EscUJBcEJ3QztBQUFBLFFBcUJ4Q3hCLHdCQXJCd0MseUJBcUJ4Q0Esd0JBckJ3QztBQUFBLFFBc0J4Q3lCLGtCQXRCd0MseUJBc0J4Q0Esa0JBdEJ3QztBQUFBLFFBdUJ4Q0MsZ0JBdkJ3Qyx5QkF1QnhDQSxnQkF2QndDO0FBQUEsUUEyQnhDQyxTQTNCd0MsR0E0QnhDM0ksTUFBTTRJLElBNUJrQyxDQTJCeENELFNBM0J3Qzs7O0FBOEI1QyxRQUFNRSxPQUFPN0ksTUFBTThJLGVBQW5CO0FBOUI0Qyw0QkErQjREOUksTUFBTStJLFVBL0JsRTtBQUFBLFFBK0JwQ0MsT0EvQm9DLHFCQStCcENBLE9BL0JvQztBQUFBLFFBK0IzQi9ILE9BL0IyQixxQkErQjNCQSxPQS9CMkI7QUFBQSxRQStCbEI0QyxrQkEvQmtCLHFCQStCbEJBLGtCQS9Ca0I7QUFBQSxRQStCRTdCLEtBL0JGLHFCQStCRUEsS0EvQkY7QUFBQSxRQStCU2lILGVBL0JULHFCQStCU0EsZUEvQlQ7QUFBQSxRQStCMEJqRyxTQS9CMUIscUJBK0IwQkEsU0EvQjFCO0FBQUEsUUErQnFDNkIsT0EvQnJDLHFCQStCcUNBLE9BL0JyQztBQUFBLFFBK0I4Q3JFLFNBL0I5QyxxQkErQjhDQSxTQS9COUM7QUFBQSxpQ0FnQ0RSLE1BQU1rSixtQkFoQ0w7QUFBQSxRQWdDcENDLGFBaENvQywwQkFnQ3BDQSxhQWhDb0M7QUFBQSxRQWdDckJDLGVBaENxQiwwQkFnQ3JCQSxlQWhDcUI7QUFBQSxzQkFzQ3hDcEosTUFBTTRJLElBdENrQztBQUFBLFFBbUN4Q1MscUJBbkN3QyxlQW1DeENBLHFCQW5Dd0M7QUFBQSxRQW9DeENDLGdCQXBDd0MsZUFvQ3hDQSxnQkFwQ3dDO0FBQUEsUUFxQ3hDQyxXQXJDd0MsZUFxQ3hDQSxXQXJDd0M7OztBQXdDNUMsV0FBTztBQUNIL0QsMENBREc7QUFFSFcsNENBRkc7QUFHSDdGLHNDQUhHO0FBSUg4SCw4REFKRztBQUtIUyxrQkFMRztBQU1INUgsd0JBTkcsRUFNTTRDLHNDQU5OO0FBT0g3QixvQkFQRztBQVFIaUgsd0NBUkc7QUFTSGhCLDRDQVRHO0FBVUh0RCxrQ0FWRztBQVdIMEQsd0NBWEc7QUFZSEMsd0NBWkc7QUFhSGxJLGtCQWJHO0FBY0g0Qyw0QkFkRztBQWVIdUYsc0NBZkc7QUFnQkhDLG9EQWhCRztBQWlCSHhCLDBEQWpCRztBQWtCSHlCLDhDQWxCRztBQW1CSDVELHdCQW5CRztBQW9CSHNFLG9DQXBCRztBQXFCSDNJLDRCQXJCRztBQXNCSHdJLHdCQXRCRztBQXVCSEwsNEJBdkJHO0FBd0JIVSxvREF4Qkc7QUF5QkhYLDBDQXpCRztBQTBCSFksMENBMUJHO0FBMkJIQyxnQ0EzQkc7QUE0QkhIO0FBNUJHLEtBQVA7QUErQkgsQ0F2RUQ7O0FBeUVBLElBQU1JLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUNyQyxXQUFPO0FBQ0hqRCxxQkFBYSxxQkFBQzlELEdBQUQsRUFBTWdILEVBQU47QUFBQSxtQkFBYUQsU0FBUyx3QkFBWS9HLEdBQVosRUFBaUJnSCxFQUFqQixDQUFULENBQWI7QUFBQSxTQURWO0FBRUg3Qiw2QkFBcUIsNkJBQUM3SCxLQUFELEVBQVFJLElBQVIsRUFBY3VKLFdBQWQsRUFBMkJDLFdBQTNCLEVBQXdDRixFQUF4QztBQUFBLG1CQUErQ0QsU0FBUyxnQ0FBb0J6SixLQUFwQixFQUEyQkksSUFBM0IsRUFBaUN1SixXQUFqQyxFQUE4Q0MsV0FBOUMsRUFBMkRGLEVBQTNELENBQVQsQ0FBL0M7QUFBQSxTQUZsQjtBQUdIN0ksaUNBQXlCLGlDQUFDRCxJQUFELEVBQU9pSixRQUFQLEVBQWlCQyxRQUFqQjtBQUFBLG1CQUE4QkwsU0FBUyxvQ0FBd0I3SSxJQUF4QixFQUE4QmlKLFFBQTlCLEVBQXdDQyxRQUF4QyxDQUFULENBQTlCO0FBQUEsU0FIdEI7QUFJSEMscUNBQTZCLHFDQUFDQyxZQUFELEVBQWVDLFFBQWY7QUFBQSxtQkFBNEJSLFNBQVMsd0NBQTRCTyxZQUE1QixFQUEwQ0MsUUFBMUMsQ0FBVCxDQUE1QjtBQUFBLFNBSjFCO0FBS0hDLHlCQUFpQjtBQUFBLG1CQUFNVCxTQUFTLDZCQUFULENBQU47QUFBQSxTQUxkO0FBTUhVLHVCQUFlLHVCQUFDbkssS0FBRCxFQUFRcUksZUFBUjtBQUFBLG1CQUE0Qm9CLFNBQVMsMEJBQWN6SixLQUFkLEVBQXFCcUksZUFBckIsQ0FBVCxDQUE1QjtBQUFBLFNBTlo7QUFPSCtCLHVCQUFlLHVCQUFDMUgsR0FBRDtBQUFBLG1CQUFTK0csU0FBUywwQkFBYy9HLEdBQWQsQ0FBVCxDQUFUO0FBQUEsU0FQWjtBQVFIMkgsd0JBQWdCLHdCQUFDQyxRQUFELEVBQVdDLE9BQVgsRUFBb0JDLFVBQXBCO0FBQUEsbUJBQW1DZixTQUFTLDJCQUFlYSxRQUFmLEVBQXlCQyxPQUF6QixFQUFrQ0MsVUFBbEMsQ0FBVCxDQUFuQztBQUFBLFNBUmI7QUFTSEMsK0JBQXVCLCtCQUFDSCxRQUFELEVBQVdJLGFBQVg7QUFBQSxtQkFBNkJqQixTQUFTLGtDQUFzQmEsUUFBdEIsRUFBZ0NJLGFBQWhDLENBQVQsQ0FBN0I7QUFBQSxTQVRwQjtBQVVIQywwQkFBa0IsMEJBQUMvSixJQUFEO0FBQUEsbUJBQVU2SSxTQUFTLDZCQUFpQjdJLElBQWpCLENBQVQsQ0FBVjtBQUFBLFNBVmY7QUFXSGdLLG1CQUFXLG1CQUFDQyxNQUFEO0FBQUEsbUJBQVlwQixTQUFTLHNCQUFVb0IsTUFBVixDQUFULENBQVo7QUFBQSxTQVhSO0FBWUhDLDJCQUFtQiwyQkFBQ0MsSUFBRCxFQUFPQyxVQUFQO0FBQUEsbUJBQXNCdkIsU0FBUyw4QkFBa0JzQixJQUFsQixFQUF3QkMsVUFBeEIsQ0FBVCxDQUF0QjtBQUFBLFNBWmhCO0FBYUhDLHNCQUFjLHNCQUFDQyxHQUFELEVBQUtDLElBQUw7QUFBQSxtQkFBYzFCLFNBQVMseUJBQWF5QixHQUFiLEVBQWlCQyxJQUFqQixDQUFULENBQWQ7QUFBQSxTQWJYO0FBY0hDLDJCQUFtQiwyQkFBQ3hLLElBQUQsRUFBT2lKLFFBQVAsRUFBaUJDLFFBQWpCLEVBQTJCdUIsTUFBM0I7QUFBQSxtQkFBc0M1QixTQUFTLDhCQUFrQjdJLElBQWxCLEVBQXdCaUosUUFBeEIsRUFBa0NDLFFBQWxDLEVBQTRDdUIsTUFBNUMsQ0FBVCxDQUF0QztBQUFBLFNBZGhCO0FBZUhDLGtDQUEwQixrQ0FBQzFLLElBQUQ7QUFBQSxtQkFBVTZJLFNBQVMscUNBQXlCN0ksSUFBekIsQ0FBVCxDQUFWO0FBQUEsU0FmdkI7QUFnQkgySyx5QkFBZ0I7QUFBQSxtQkFBTTlCLFNBQVMsNkJBQVQsQ0FBTjtBQUFBLFNBaEJiO0FBaUJIK0IsMEJBQWtCLDBCQUFDQyxJQUFEO0FBQUEsbUJBQVVoQyxTQUFTLDZCQUFpQmdDLElBQWpCLENBQVQsQ0FBVjtBQUFBO0FBakJmLEtBQVA7QUFtQkgsQ0FwQkQ7O2tCQXNCZSx5QkFBUTFELGVBQVIsRUFBeUJ5QixrQkFBekIsRUFBNkM5QixtQkFBN0MsQyIsImZpbGUiOiI5NS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGFiUHJvZmlsZUNhcmQgZnJvbSAnLi4vLi4vY29tbW9ucy9sYWJQcm9maWxlQ2FyZC9pbmRleC5qcydcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcic7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBMYWJSZXN1bHRDYXJkIGZyb20gJy4uLy4uL2NvbW1vbnMvbGFiUmVzdWx0Q2FyZCdcbmltcG9ydCBCYW5uZXJDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi9jb21tb25zL0hvbWUvYmFubmVyQ2Fyb3VzZWwuanMnO1xuXG5jbGFzcyBMYWJzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBoYXNNb3JlOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcmVuZGVyQmxvY2s6IGZhbHNlLFxuICAgICAgICAgICAgcGFnZTogMCxcbiAgICAgICAgICAgIGlzX2luc3VyZWQ6IHByb3BzLmZpbHRlckNyaXRlcmlhICYmIHByb3BzLmZpbHRlckNyaXRlcmlhLmlzX2luc3VyZWQgPyBwcm9wcy5maWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkIDogZmFsc2UsXG4gICAgICAgICAgICBhdmdfcmF0aW5nczogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJvb2tOb3codGVzdF9kYXRhKSB7XG4gICAgICAgIGxldCB0ZXN0ID0ge31cbiAgICAgICAgdGVzdC5pZCA9IHRlc3RfZGF0YS5pZFxuICAgICAgICB0ZXN0Lm5hbWUgPSB0ZXN0X2RhdGEubmFtZVxuICAgICAgICB0ZXN0LnR5cGUgPSAndGVzdCdcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVEaWFnbm9zaXNDcml0ZXJpYSgndGVzdCcsIHRlc3QsIHRydWUpXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xhYi9zZWFyY2hyZXN1bHRzJylcbiAgICAgICAgfSwgMTAwKVxuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid3JhcCBzZWFyY2gtYm9vay1yZXN1bHQgdmFyaWFibGUtY29udGVudC1zZWN0aW9uXCIgcmVmPVwiY2hlY2tJZkV4aXN0c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGNhcmRNYWluUGFkZGluZ1JtdlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGFiTGlzdCAmJiB0aGlzLnByb3BzLmxhYkxpc3QuYWxsX2NhdGVnb3JpZXMgJiYgdGhpcy5wcm9wcy5sYWJMaXN0LmFsbF9jYXRlZ29yaWVzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhYkxpc3QuYWxsX2NhdGVnb3JpZXMubWFwKChkYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9IGlkPXtkYXRhLmxhYl90ZXN0X2NhdF9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJsYWItY3JkLWhkbmdcIj57ZGF0YS5sYWJfdGVzdF9jYXRfbmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxhYl90ZXN0X3Rlc3RzICYmIGRhdGEubGFiX3Rlc3RfdGVzdHMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxhYl90ZXN0X3Rlc3RzLm1hcCgodGVzdF9kYXRhLCBrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNzdG0tZG9jQ2FyZCBtYi0zXCIga2V5PXtrfSBpZD17dGVzdF9kYXRhLmlkfSBvbkNsaWNrPXt0aGlzLmJvb2tOb3cuYmluZCh0aGlzLCB0ZXN0X2RhdGEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2NDYXJkLWNvbnRlbnRcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2MtZGV0YWlscy1jb250YWluZXIgbGFiQ2FyZFVpcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3N0bS1kb2MtY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jaXR5LXhyYXktc2Nhbi1jbGluaWMtcHZ0LWx0ZC1wYWxhbS1pbi1wYWxhbS1uZXctZGVsaGktbHBwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibGJjcmRjc3Rmb250IGNzdG1Eb2NOYW1lXCIgc3R5bGU9e3tmb250U2l6ZTonMTRweCd9fT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3RfZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGVzdF9kYXRhLmNvdW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkF2YWlsYWJsZSBpbiB7dGVzdF9kYXRhLmNvdW50fSBMYWJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNzdG0tZG9jLXByaWNlXCI+U3RhcnRpbmcgYXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjc3QtZG9jLXByaWNlXCI+4oK5IHt0ZXN0X2RhdGEuZGVhbF9wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwIGNsYXNzTmFtZT1cImNzdC1kb2MtcHJpY2VcIj48c3BhbiBjbGFzc05hbWU9XCJsYi1zdnVwdG9cIj5TYXZlIHVwdG8gNDAlPC9zcGFuPuKCuSB7dGVzdF9kYXRhLmRlYWxfcHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNzdG0tYm9vay1idG5cIiBvbkNsaWNrPXt0aGlzLmJvb2tOb3cuYmluZCh0aGlzLCB0ZXN0X2RhdGEpfT5TZWxlY3QgTGFiPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExhYnNMaXN0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGFic0xpc3QgZnJvbSAnLi9UZXN0Q2F0ZWdvcnlMaXN0L1Rlc3RDYXRlZ29yeUxpc3QuanMnXG5pbXBvcnQgQ3JpdGVyaWFTZWFyY2ggZnJvbSAnLi4vLi4vY29tbW9ucy9jcml0ZXJpYVNlYXJjaCdcbmltcG9ydCBUb3BCYXIgZnJvbSAnLi9uZXdUb3BCYXInXG5pbXBvcnQgTkFWSUdBVEUgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9uYXZpZ2F0ZS9pbmRleC5qcyc7XG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBIZWxtZXRUYWdzIGZyb20gJy4uLy4uL2NvbW1vbnMvSGVsbWV0VGFncydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tbW9ucy9Ib21lL2Zvb3RlcidcbmltcG9ydCBSZXN1bHRDb3VudCBmcm9tICcuL3RvcEJhci9yZXN1bHRfY291bnQuanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5jbGFzcyBTZWFyY2hSZXN1bHRzVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldFF1aWNrRmlsdGVycygpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtxdWlja0ZpbHRlcjoge319KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNob3dfcGFnaW5hdGlvbiA9IHRoaXMucHJvcHMubGFiTGlzdCAmJiB0aGlzLnByb3BzLmxhYkxpc3QubGVuZ3RoID4gMFxuICAgICAgICBsZXQgdXJsID0gYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9YFxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvJnBhZ2U9XFxkezEsfS8sIFwiXCIpXG4gICAgICAgIGxldCBwYWdlID0gXCJcIlxuICAgICAgICBsZXQgY3Vycl9wYWdlID0gcGFyc2VJbnQodGhpcy5wcm9wcy5wYWdlKVxuICAgICAgICBsZXQgcHJldiA9IFwiXCJcbiAgICAgICAgaWYgKGN1cnJfcGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHBhZ2UgPSBgP3BhZ2U9JHtjdXJyX3BhZ2V9YFxuICAgICAgICAgICAgcHJldiA9IHVybFxuICAgICAgICAgICAgaWYgKGN1cnJfcGFnZSA+IDIpIHtcbiAgICAgICAgICAgICAgICBwcmV2ICs9IGA/cGFnZT0ke2N1cnJfcGFnZSAtIDF9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0ID0gXCJcIlxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb3VudCA+IGN1cnJfcGFnZSAqIDIwKSB7XG4gICAgICAgICAgICBuZXh0ID0gdXJsICsgYD9wYWdlPSR7Y3Vycl9wYWdlICsgMX1gXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB0aGlzIHdhcyB0aGUgbGFuZGluZyBwYWdlXG4gICAgICAgIGxldCBsYW5kaW5nX3BhZ2UgPSBmYWxzZVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cuT05fTEFORElOR19QQUdFKSB7XG4gICAgICAgICAgICBsYW5kaW5nX3BhZ2UgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgICBpZih0aGlzLnByb3BzLmxhYkxpc3QgJiYgdGhpcy5wcm9wcy5sYWJMaXN0LmFsbF9jYXRlZ29yaWVzICYmIHRoaXMucHJvcHMubGFiTGlzdC5hbGxfY2F0ZWdvcmllcy5sZW5ndGgpeyBcbiAgICAgICAgICAgIHRoaXMucHJvcHMubGFiTGlzdC5hbGxfY2F0ZWdvcmllcy5tYXAoKGRhdGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb3VudCArPSBwYXJzZUludChkYXRhWydOb19vZl90ZXN0cyddKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgezxIZWxtZXRUYWdzIHRhZ3NEYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgIGNhbm9uaWNhbFVybDogYCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubWF0Y2gudXJsfSR7cGFnZX1gLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5wcm9wcy5sYWJMaXN0P3RoaXMucHJvcHMubGFiTGlzdC50aXRsZTonJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMubGFiTGlzdD90aGlzLnByb3BzLmxhYkxpc3QubWV0YV9kZXNjcmlwdGlvbjonJyxcbiAgICAgICAgICAgICAgICAgICAgcHJldjogcHJldixcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogbmV4dFxuICAgICAgICAgICAgICAgIH19IG5vSW5kZXg9e2ZhbHNlfS8+fVxuXG4gICAgICAgICAgICAgICAgPENyaXRlcmlhU2VhcmNoIHsuLi50aGlzLnByb3BzfSBjaGVja0ZvckxvYWQ9e2xhbmRpbmdfcGFnZSB8fCB0aGlzLnByb3BzLkxPQURFRF9MQUJTX1NFQVJDSCB8fCB0aGlzLnN0YXRlLnNob3dFcnJvcn0gdGl0bGU9XCJTZWFyY2ggZm9yIFRlc3QgYW5kIExhYnMuXCIgZ29CYWNrPXt0cnVlfSBsYWJfY2FyZD17ISF0aGlzLnN0YXRlLmxhYl9jYXJkfSBuZXdDaGF0QnRuPXt0cnVlfSBzZWFyY2hMYWJzPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93RXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cIm5vcmZcIj5ObyBSZXN1bHRzIEZvdW5kISE8L2Rpdj4gOiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHs8VG9wQmFyIHsuLi50aGlzLnByb3BzfSBjb3VudCA9IHtjb3VudH0vPn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJMaXN0ICYmIHRoaXMucHJvcHMubGFiTGlzdC5sZW5ndGggPT0wP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBjYXJkTWFpblBhZGRpbmdSbXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGtnLWNhcmQtY29udGFpbmVyIG10LTIwIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBrZy1uby1yZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLW4tcnNsdFwiPk5vIHJlc3VsdCBmb3VuZCE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZpbHRlckFwcGxpZWQodGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm4tcnNsdC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL25vLXJlc3VsdC5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLXR5LWFnbiBjdXJzb3ItcG50clwiIG9uQ2xpY2s9e3RoaXMuYXBwbHlRdWlja0ZpbHRlci5iaW5kKHRoaXMsIHt2aWV3TW9yZTogdHJ1ZX0pfT5UcnkgYWdhaW4gd2l0aCBmZXdlciBmaWx0ZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6JzEzMHB4J319IGNsYXNzTmFtZT1cIm4tcnNsdC1pbWdcIiBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3ZjdC1uby5wbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGtnLXR5LWFnbiB0ZXh0LWRhcmsgdGV4dC1jZW50ZXJcIj5DYW7igJl0IGZpbmQgeW91ciBsYWIgaGVyZT88YnI+PC9icj5IZWxwIHVzIHRvIGxpc3QgeW91ciBsYWI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlZmVyRG9jdG9yYnRuXCIgb25DbGljaz17KCk9Pnt0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2RvY3RvcnNpZ251cD9tZW1iZXJfdHlwZT0yJyl9fT5SZWZlciB5b3VyIExhYjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8UmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJzTGlzdCB7Li4udGhpcy5wcm9wc30vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQ3JpdGVyaWFTZWFyY2g+XG5cbiAgICAgICAgICAgICAgICB7Lyo8Rm9vdGVyIGZvb3RlckRhdGE9e3RoaXMuc3RhdGUuZm9vdGVyRGF0YX0gLz4qL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0c1ZpZXdcbiIsImltcG9ydCBUb3BCYXIgZnJvbSAnLi9uZXdUb3BCYXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJhbmdlIGZyb20gJ3JjLXNsaWRlci9saWIvUmFuZ2UnO1xuaW1wb3J0IHsgQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5pbXBvcnQgTG9jYXRpb25FbGVtZW50cyBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25FbGVtZW50cydcbmltcG9ydCBMb2NhdGlvblBvcHVwIGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvY29tbW9ucy9sb2NhdGlvblBvcHVwJ1xuaW1wb3J0IEdUTSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2d0bSdcbmltcG9ydCBTVE9SQUdFIGZyb20gJy4uLy4uLy4uLy4uL2hlbHBlcnMvc3RvcmFnZSdcblxuY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFuY2hvckVsOiBudWxsLFxuICAgICAgICAgICAgZHJvcGRvd25fdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBvdmVybGF5VmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBzaG93UG9wdXBDb250YWluZXI6IHRydWUsXG4gICAgICAgICAgICBpc19pbnN1cmVkOiBwcm9wcy5maWx0ZXJDcml0ZXJpYSAmJiBwcm9wcy5maWx0ZXJDcml0ZXJpYS5pc19pbnN1cmVkID8gcHJvcHMuZmlsdGVyQ3JpdGVyaWEuaXNfaW5zdXJlZCA6IGZhbHNlLFxuICAgICAgICAgICAgLy9OZXcgZmlsdGVyc1xuICAgICAgICAgICAgcHJldmlvdXNfZmlsdGVyczoge30sXG4gICAgICAgICAgICBzb3J0X29uOiAnJyxcbiAgICAgICAgICAgIHNvcnRfb3JkZXI6ICcnLFxuICAgICAgICAgICAgYXZnX3JhdGluZ3M6ICcnLFxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiBbXSxcbiAgICAgICAgICAgIGhvbWVfdmlzaXQ6IGZhbHNlLFxuICAgICAgICAgICAgbGFiX3Zpc2l0OiBmYWxzZSxcbiAgICAgICAgICAgIHNob3J0VVJMOiBcIlwiLFxuICAgICAgICAgICAgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgcXVpY2tGaWx0ZXI6IHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG5cbiAgICAgICAgaWYgKHByb3BzLmxvY2F0aW9uVHlwZSAmJiAhcHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2VvRGF0YSAmJiBwcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoKHByb3BzLnNlb0RhdGEgJiYgcHJvcHMuc2VvRGF0YS5sb2NhdGlvbikgfHwgcHJvcHMuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiB0cnVlLCBvdmVybGF5VmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnNob3J0ZW5VcmwoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSB9KVxuICAgICAgICAvLyB0aGlzLnNob3J0ZW5VcmwoKVxuICAgICAgICBpZiAoKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHx8IHRoaXMucHJvcHMuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZSAmJiB0aGlzLnByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG92ZXJsYXlDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG92ZXJsYXlWaXNpYmxlOiBmYWxzZSwgc2VhcmNoQ2l0aWVzOiBbXSwgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGhpZGVMb2NhdGlvblBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHBvcHVwQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwQ29udGFpbmVyOiBmYWxzZSwgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGdvVG9Mb2NhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWFyY2hDaXRpZXM6IFtdLFxuICAgICAgICB9KVxuICAgICAgICAvKmxldCByZWRpcmVjdF90byA9IFwiXCJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbGJjaXQnKSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2xibGl0Y2l0JykpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvbGFiL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIGxldCBsb2NhdGlvbl91cmwgPSAnL2xvY2F0aW9uc2VhcmNoJ1xuICAgICAgICAvKiAgICAgICAgaWYgKHJlZGlyZWN0X3RvKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX3VybCArPSBgP3JlZGlyZWN0X3RvPSR7cmVkaXJlY3RfdG99YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAnQ2F0ZWdvcnknOiAnQ2hhbmdlTG9jYXRpb25Eb2N0b3JSZXN1bHRzUG9wVXAnLCAnQWN0aW9uJzogJ2NoYW5nZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2NoYW5nZS1sb2NhdGlvbi1kb2N0b3ItcmVzdWx0cy1Qb3BVcCcsICd1cmwnOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgfVxuICAgICAgICBHVE0uc2VuZEV2ZW50KHsgZGF0YTogZGF0YSB9KVxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChsb2NhdGlvbl91cmwpXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cblxuICAgICAgICBsZXQgY3JpdGVyaWFTdHIgPSB0aGlzLnByb3BzLmxhYkxpc3Q/dGhpcy5wcm9wcy5sYWJMaXN0LnRpdGxlOicnXG4gICAgICAgIGxldCBsb2NhdGlvbk5hbWUgPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzKSB7XG4gICAgICAgICAgICBsb2NhdGlvbk5hbWUgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3NcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZW9EYXRhICYmIHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvbikge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uXG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcm93IHN0aWNreS1oZWFkZXIgbWJsLXN0aWNrXCI+IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1yb3cgc3RpY2t5LWhlYWRlciBtYmwtc3RpY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNjcm9sbC1zaGFkb3ctYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtZmlsdGVyLXRhYi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtZmlsdGVyLXRhYnMtc2VsZWN0IGxvY2F0aW9uVGVzdEZpbHRlclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5ld1N0aWNreWZpbHRlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY291bnR9IFJlc3VsdHMge2NyaXRlcmlhU3RyID8gXCJmb3IgXCIgOiBcIlwifXtjcml0ZXJpYVN0cn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25OYW1lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuZ29Ub0xvY2F0aW9uLmJpbmQodGhpcyl9ID57YCBpbiAke2xvY2F0aW9uTmFtZX1gfTxpbWcgc3R5bGU9e3sgd2lkdGg6ICcxMXB4JywgaGVpZ2h0OiAnMTVweCcsIG1hcmdpbkxlZnQ6ICc3cHgnIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2VkaXQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uRWxlbWVudHMgey4uLnRoaXMucHJvcHN9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSByZXN1bHRUeXBlPSdsaXN0JyBpc1RvcGJhcj17dHJ1ZX0gaGlkZUxvY2F0aW9uUG9wdXA9eygpID0+IHRoaXMuaGlkZUxvY2F0aW9uUG9wdXAoKX0gbG9jYXRpb25OYW1lPXtsb2NhdGlvbk5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93TG9jYXRpb25Qb3B1cCAmJiB0aGlzLnN0YXRlLm92ZXJsYXlWaXNpYmxlICYmICF0aGlzLnByb3BzLmxhYl9jYXJkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uUG9wdXAtb3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub3ZlcmxheUNsaWNrKCl9ID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIHRoaXMucHJvcHMubGFiX2NhcmQgJiYgdGhpcy5zdGF0ZS5zaG93UG9wdXBDb250YWluZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBDb250YWluZXItb3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSYW5nZSBmcm9tICdyYy1zbGlkZXIvbGliL1JhbmdlJztcbmltcG9ydCB7IENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCBTbmFja0JhciBmcm9tICdub2RlLXNuYWNrYmFyJ1xuaW1wb3J0IExvY2F0aW9uRWxlbWVudHMgZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9jb21tb25zL2xvY2F0aW9uRWxlbWVudHMnXG5pbXBvcnQgTG9jYXRpb25Qb3B1cCBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL2NvbW1vbnMvbG9jYXRpb25Qb3B1cCdcbmltcG9ydCBHVE0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9ndG0nXG5cbmNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAvLyBhbmNob3JFbDogbnVsbCxcbiAgICAgICAgICAgIC8vIG9wZW5GaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgLy8gcHJpY2VSYW5nZTogWzAsIDIwMDAwXSxcbiAgICAgICAgICAgIC8vIGRpc3RhbmNlUmFuZ2U6IFswLCAxNV0sXG4gICAgICAgICAgICAvLyBzb3J0X29uOiBudWxsLFxuICAgICAgICAgICAgc2hvcnRVUkw6IFwiXCIsXG4gICAgICAgICAgICAvLyBkcm9wZG93bl92aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIG92ZXJsYXlWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQb3B1cENvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgICAgIC8vIHNvcnRUZXh0OiAnUmVsZXZhbmNlJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4ucHJvcHMuZmlsdGVyQ3JpdGVyaWEgfSlcbiAgICAgICAgaWYgKHByb3BzLmxvY2F0aW9uVHlwZSAmJiAhcHJvcHMubG9jYXRpb25UeXBlLmluY2x1ZGVzKFwiZ2VvXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2VvRGF0YSAmJiBwcm9wcy5zZW9EYXRhLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiBmYWxzZSB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoKHByb3BzLnNlb0RhdGEgJiYgcHJvcHMuc2VvRGF0YS5sb2NhdGlvbikgfHwgcHJvcHMuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2NhdGlvblBvcHVwOiB0cnVlLCBvdmVybGF5VmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnNob3J0ZW5VcmwoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5wcm9wcy5maWx0ZXJDcml0ZXJpYSB9KVxuICAgICAgICAvLyB0aGlzLnNob3J0ZW5VcmwoKVxuICAgICAgICBpZiAoKHRoaXMucHJvcHMuc2VvRGF0YSAmJiB0aGlzLnByb3BzLnNlb0RhdGEubG9jYXRpb24pIHx8IHRoaXMucHJvcHMuc2VvRnJpZW5kbHkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogZmFsc2UgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uVHlwZSAmJiB0aGlzLnByb3BzLmxvY2F0aW9uVHlwZS5pbmNsdWRlcyhcImdlb1wiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TG9jYXRpb25Qb3B1cDogdHJ1ZSwgb3ZlcmxheVZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFwcGx5RmlsdGVycygpIHtcbiAgICAvLyAgICAgbGV0IGZpbHRlclN0YXRlID0ge1xuICAgIC8vICAgICAgICAgcHJpY2VSYW5nZTogdGhpcy5zdGF0ZS5wcmljZVJhbmdlLFxuICAgIC8vICAgICAgICAgZGlzdGFuY2VSYW5nZTogdGhpcy5zdGF0ZS5kaXN0YW5jZVJhbmdlLFxuICAgIC8vICAgICAgICAgc29ydF9vbjogdGhpcy5zdGF0ZS5zb3J0X29uXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgbGV0IGRhdGEgPSB7XG4gICAgLy8gICAgICAgICAnQ2F0ZWdvcnknOiAnRmlsdGVyQ2xpY2snLCAnQWN0aW9uJzogJ0NsaWNrZWQgb24gRmlsdGVyJywgJ0N1c3RvbWVySUQnOiBHVE0uZ2V0VXNlcklkKCkgfHwgJycsICdsZWFkaWQnOiAwLCAnZXZlbnQnOiAnbGFiLWZpbHRlci1jbGlja2VkJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ2xvd1ByaWNlUmFuZ2UnOiB0aGlzLnN0YXRlLnByaWNlUmFuZ2VbMF0sICdoaWdoUHJpY2VSYW5nZSc6IHRoaXMuc3RhdGUucHJpY2VSYW5nZVsxXSwgJ2xvd0Rpc3RhbmNlUmFuZ2UnOiB0aGlzLnN0YXRlLmRpc3RhbmNlUmFuZ2VbMF0sICdoaWdoRGlzdGFuY2VSYW5nZSc6IHRoaXMuc3RhdGUuZGlzdGFuY2VSYW5nZVsxXSwgJ3NvcnRfb24nOiB0aGlzLnN0YXRlLnNvcnRfb24gPT0gXCJcIiA/ICdyZWxldmFuY2UnIDogdGhpcy5zdGF0ZS5zb3J0X29uXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5hcHBseUZpbHRlcnMoZmlsdGVyU3RhdGUpXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuRmlsdGVyOiBmYWxzZSB9KVxuICAgIC8vIH1cblxuICAgIC8vIGhhbmRsZU9wZW4oZXZlbnQpIHtcbiAgICAvLyAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0IH0pXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgZHJvcGRvd25fdmlzaWJsZTogdHJ1ZVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBoaWRlU29ydERpdigpIHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBkcm9wZG93bl92aXNpYmxlOiBmYWxzZVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kbGVDbG9zZSh0eXBlKSB7XG4gICAgLy8gICAgIGxldCBkYXRhID0ge1xuICAgIC8vICAgICAgICAgJ0NhdGVnb3J5JzogJ0NvbnN1bWVyQXBwJywgJ0FjdGlvbic6ICdMYWJTb3J0RmlsdGVyQXBwbGllZCcsICdDdXN0b21lcklEJzogR1RNLmdldFVzZXJJZCgpIHx8ICcnLCAnbGVhZGlkJzogMCwgJ2V2ZW50JzogJ2xhYi1zb3J0LWZpbHRlci1hcHBsaWVkJywgJ3VybCc6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSwgJ3NvcnRfb24nOiB0eXBlID09PSBcIlwiID8gJ3JlbGV2YW5jZScgOiB0eXBlXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBudWxsLCBzb3J0X29uOiB0eXBlLCBkcm9wZG93bl92aXNpYmxlOiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAodHlwZSB8fCB0eXBlID09PSBcIlwiKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hcHBseUZpbHRlcnMoKVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIC8vIHRvZ2dsZUZpbHRlcigpIHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBvcGVuRmlsdGVyOiAhdGhpcy5zdGF0ZS5vcGVuRmlsdGVyXG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG4gICAgLy8gaGFuZGxlUmFuZ2UodHlwZSwgcmFuZ2UpIHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBbdHlwZV06IHJhbmdlXG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG4gICAgZ2V0Q3JpdGVyaWFTdHJpbmcoc2VsZWN0ZWRDcml0ZXJpYXMpIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkQ3JpdGVyaWFzICYmIHNlbGVjdGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkQ3JpdGVyaWFzLnJlZHVjZSgoZmluYWwsIGN1cnIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsICs9ICcsICdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWwgKz0gYCR7Y3Vyci5uYW1lfWBcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxcbiAgICAgICAgICAgIH0sIFwiXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpc0ZpbHRlckFwcGxpZWQoKSB7XG4gICAgLy8gICAgIGNvbnN0IGRlZiA9IHtcbiAgICAvLyAgICAgICAgIHByaWNlUmFuZ2U6IFswLCAyMDAwMF0sXG4gICAgLy8gICAgICAgICBkaXN0YW5jZVJhbmdlOiBbMCwgMTVdXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGZpbHRlciBpbiBkZWYpIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoZGVmW2ZpbHRlcl1bMF0gIT0gdGhpcy5zdGF0ZVtmaWx0ZXJdWzBdIHx8IGRlZltmaWx0ZXJdWzFdICE9IHRoaXMuc3RhdGVbZmlsdGVyXVsxXSkge1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZVxuICAgIC8vICAgICB9IGNhdGNoIChlKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIHNob3J0ZW5VcmwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgICAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYgKyAnJmZvcmNlX2xvY2F0aW9uPXRydWUnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgJz9mb3JjZV9sb2NhdGlvbj10cnVlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy51cmxTaG9ydG5lcih1cmwsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IGRhdGEudGlueV91cmwgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3ZlcmxheUNsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3ZlcmxheVZpc2libGU6IGZhbHNlLCBzZWFyY2hDaXRpZXM6IFtdIH0pO1xuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25fZWxlbWVudCcpKXtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbl9lbGVtZW50Jykuc3R5bGUuekluZGV4ID0nMCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVMb2NhdGlvblBvcHVwKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHBvcHVwQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BvcHVwQ29udGFpbmVyOiBmYWxzZSwgc2hvd0xvY2F0aW9uUG9wdXA6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZUJ0bkNsaWNrKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICdDYXRlZ29yeSc6ICdDb25zdW1lckFwcCcsICdBY3Rpb24nOiAnY2hhbmdlQnRuT25MYWJDYXJkQ2xpY2snLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGFuZ2UtYnRuLW9uLWxhYi1jYXJkLWNsaWNrJ1xuICAgICAgICB9XG4gICAgICAgIEdUTS5zZW5kRXZlbnQoeyBkYXRhOiBkYXRhIH0pXG4gICAgICAgIGxldCBzZWxlY3RlZFRlc3RzID0gW11cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGVzdHMucHVzaCh0aGlzLnByb3BzLmN1cnJlbnRTZWFyY2hlZENyaXRlcmlhc1tpXS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9sb2NhdGlvbnNlYXJjaD9sYWJfY2FyZD10cnVlJmlkPSR7c2VsZWN0ZWRUZXN0c31gKVxuICAgIH1cblxuICAgIGdvVG9Mb2NhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWFyY2hDaXRpZXM6IFtdLFxuICAgICAgICB9KVxuICAgICAgICAvKmxldCByZWRpcmVjdF90byA9IFwiXCJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnbGJjaXQnKSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ2xibGl0Y2l0JykpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0X3RvID0gXCIvbGFiL3NlYXJjaHJlc3VsdHNcIlxuICAgICAgICB9XG4qL1xuICAgICAgICBsZXQgbG9jYXRpb25fdXJsID0gJy9sb2NhdGlvbnNlYXJjaCdcbiAgICAgICAgLyogICAgICAgIGlmIChyZWRpcmVjdF90bykge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbl91cmwgKz0gYD9yZWRpcmVjdF90bz0ke3JlZGlyZWN0X3RvfWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgJ0NhdGVnb3J5JzogJ0NoYW5nZUxvY2F0aW9uRG9jdG9yUmVzdWx0c1BvcFVwJywgJ0FjdGlvbic6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAnQ3VzdG9tZXJJRCc6IEdUTS5nZXRVc2VySWQoKSB8fCAnJywgJ2xlYWRpZCc6IDAsICdldmVudCc6ICdjaGFuZ2UtbG9jYXRpb24tZG9jdG9yLXJlc3VsdHMtUG9wVXAnLCAndXJsJzogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICAgIH1cbiAgICAgICAgR1RNLnNlbmRFdmVudCh7IGRhdGE6IGRhdGEgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gobG9jYXRpb25fdXJsKVxuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsdGVyLXNjcm9sbFwiKSl7XG4gICAgICAgIC8vICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgIHZhciBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgIC8vICAgICAgIGlmIChjdXJyZW50U2Nyb2xsUG9zID4gMCkge1xuICAgICAgICAvLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsdGVyLXNjcm9sbFwiKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWx0ZXItc2Nyb2xsXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcbiAgICAgICAgLy8gICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICAvLyBsZXQgc29ydFR5cGUgPSAnJ1xuICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5zb3J0X29uKSB7XG4gICAgICAgIC8vICAgICBzb3J0VHlwZSA9IHRoaXMuc3RhdGUuc29ydF9vbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc3RhdGUuc29ydF9vbi5zbGljZSgxKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCBjcml0ZXJpYVN0ciA9IHRoaXMuZ2V0Q3JpdGVyaWFTdHJpbmcodGhpcy5wcm9wcy5jdXJyZW50U2VhcmNoZWRDcml0ZXJpYXMpXG4gICAgICAgIGxldCBsb2NhdGlvbk5hbWUgPSBcIlwiXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24gJiYgdGhpcy5wcm9wcy5zZWxlY3RlZExvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzKSB7XG4gICAgICAgICAgICBsb2NhdGlvbk5hbWUgPSB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24uZm9ybWF0dGVkX2FkZHJlc3NcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZW9EYXRhICYmIHRoaXMucHJvcHMuc2VvRGF0YS5sb2NhdGlvbikge1xuICAgICAgICAgICAgbG9jYXRpb25OYW1lID0gdGhpcy5wcm9wcy5zZW9EYXRhLmxvY2F0aW9uXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIGlkPVwiZmlsdGVyLXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1wZG5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLWZpbHRlciBkLW5vbmUgZC1tZC1ibG9jayBhbGlnblNoYXJlQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5saW5lLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9e3RoaXMuc2hvcnRlblVybC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvY3VzdG9tZXItaWNvbnMvdXJsLXNob3J0LnN2Z1wifSBzdHlsZT17eyB3aWR0aDogODAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3J0VVJMID8gPGRpdiBjbGFzc05hbWU9XCJzaGFyZUxpbmtwb3B1cE92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvcnRVUkw6IFwiXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlTGlua3BvcHVwXCIgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5zaG9ydFVSTH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXt0aGlzLnN0YXRlLnNob3J0VVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvcHk9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJTaG9ydGVuZWQgVVJMIENvcGllZC5cIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG9ydFVSTDogXCJcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hyZWxpbmtCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q29weTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY291bnR9IFJlc3VsdHMge2NyaXRlcmlhU3RyID8gXCJmb3JcIiA6IFwiXCJ9IDxzcGFuIGNsYXNzTmFtZT1cImZ3LTcwMFwiPiB7Y3JpdGVyaWFTdHJ9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvY2F0aW9uUG9wdXAgJiYgZmFsc2UgPyAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2NhdGlvbk5hbWUgPyA8c3BhbiBjbGFzc05hbWU9XCJsb2NhdGlvbi1lZGl0XCI+e2AgaW4gJHtsb2NhdGlvbk5hbWV9YH08L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogMTUsIGhlaWdodDogMTUsIG1hcmdpbkxlZnQ6IDcsIGN1cnNvcjogJ3BvaW50ZXInIH19IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgXCIvaW1nL2N1c3RvbWVyLWljb25zL2VkaXQuc3ZnXCJ9IG9uQ2xpY2s9e3RoaXMuZ29Ub0xvY2F0aW9uLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhYl9jYXJkICYmIHRoaXMuc3RhdGUuc2hvd1BvcHVwQ29udGFpbmVyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uUG9wdXAgey4uLnRoaXMucHJvcHN9IG9uUmVmPXtyZWYgPT4gKHRoaXMuY2hpbGQgPSByZWYpfSByZXN1bHRUeXBlPSdsaXN0JyBpc1RvcGJhcj17dHJ1ZX0gaGlkZUxvY2F0aW9uUG9wdXA9eygpID0+IHRoaXMuaGlkZUxvY2F0aW9uUG9wdXAoKX0gbG9jYXRpb25OYW1lPXtsb2NhdGlvbk5hbWV9IGNyaXRlcmlhU3RyaW5nPXtjcml0ZXJpYVN0cn0gcG9wdXBDb250YWluZXI9eygpID0+IHRoaXMucG9wdXBDb250YWluZXIoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8TG9jYXRpb25FbGVtZW50cyB7Li4udGhpcy5wcm9wc30gb25SZWY9e3JlZiA9PiAodGhpcy5jaGlsZCA9IHJlZil9IHJlc3VsdFR5cGU9J2xpc3QnIGlzVG9wYmFyPXt0cnVlfSBoaWRlTG9jYXRpb25Qb3B1cD17KCkgPT4gdGhpcy5oaWRlTG9jYXRpb25Qb3B1cCgpfSBsb2NhdGlvbk5hbWU9e2xvY2F0aW9uTmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIHRoaXMuc3RhdGUub3ZlcmxheVZpc2libGUgJiYgIXRoaXMucHJvcHMubGFiX2NhcmQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25Qb3B1cC1vdmVybGF5XCIgb25DbGljaz17KCkgPT4gdGhpcy5vdmVybGF5Q2xpY2soKX0gPjwvZGl2PiA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dMb2NhdGlvblBvcHVwICYmIHRoaXMucHJvcHMubGFiX2NhcmQgJiYgdGhpcy5zdGF0ZS5zaG93UG9wdXBDb250YWluZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBDb250YWluZXItb3ZlcmxheVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgdG9nZ2xlNDA0LCBtZXJnZUxBQlN0YXRlLCB1cmxTaG9ydG5lciwgZ2V0TGFicywgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWEsIGdldERpYWdub3Npc0NyaXRlcmlhUmVzdWx0cywgY2xlYXJFeHRyYVRlc3RzLCBnZXRGb290ZXJEYXRhLCBzZXRMYWJTZWFyY2hJZCwgZ2V0TGFiU2VhcmNoSWRSZXN1bHRzLCBzZWxlY3RTZWFyY2hUeXBlLCBzZWxlY3RMYWJUaW1lU0xvdCwgZ2V0T2ZmZXJMaXN0LCB0b2dnbGVPUERDcml0ZXJpYSwgc2VsZWN0TGFiQXBwb2ludG1lbnRUeXBlLCByZXNldFBrZ0NvbXBhcmUsIGxvYWRPUERJbnN1cmFuY2UsIGdldFRlc3RDYXRlZ29yeUxpc3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IHsgb3BkU2VhcmNoU3RhdGVCdWlsZGVyLCBsYWJTZWFyY2hTdGF0ZUJ1aWxkZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3VybHRvU3RhdGUnXG5pbXBvcnQgU2VhcmNoUmVzdWx0c1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kaWFnbm9zaXMvY2F0ZWdvcnlUZXN0UmVzdWx0cy9jYXRlZ29yeVRlc3RSZXN1bHRzVmlldy5qcydcbmltcG9ydCBOb3RGb3VuZFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL25vdEZvdW5kJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvTG9hZGVyJ1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuXG5jbGFzcyBjYXRlZ29yeVRlc3RSZXN1bHRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgICAgICAgICAgICBcbiAgICAgICAgICAgIGRhdGE6bnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIHRoaXMucHJvcHMubG9hZE9QREluc3VyYW5jZSh0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXG4gICAgICAgIGxldCBzZWFyY2hVcmwgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1hdGNoLnVybC5pbmNsdWRlcygnLXRwY3AnKSkge1xuICAgICAgICAgICAgc2VhcmNoVXJsID0gdGhpcy5wcm9wcy5tYXRjaC51cmwudG9Mb3dlckNhc2UoKVxuICAgICAgICB9XG4gICAgICAgIGxldCBwYWdlID0gMVxuICAgICAgICB0aGlzLnByb3BzLmdldFRlc3RDYXRlZ29yeUxpc3QobnVsbCxwYWdlLGZhbHNlLHNlYXJjaFVybCwocmVzcCk9PntcbiAgICAgICAgICAgIGlmKHJlc3Ape1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6cmVzcH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuZGF0YSl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTZWFyY2hSZXN1bHRzVmlldyB7Li4udGhpcy5wcm9wc30gbGFiTGlzdD17dGhpcy5zdGF0ZS5kYXRhfSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHBhc3NlZFByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogaW5pdGlhbFNlcnZlckRhdGEgaXMgc2VydmVyIHJlbmRlcmVkIGFzeW5jIGRhdGEgcmVxdWlyZWQgYnVpbGQgaHRtbCBvbiBzZXJ2ZXIuIFxuICAgICAqL1xuICAgIGxldCBpbml0aWFsU2VydmVyRGF0YSA9IG51bGxcbiAgICBsZXQgeyBzdGF0aWNDb250ZXh0IH0gPSBwYXNzZWRQcm9wc1xuICAgIGlmIChzdGF0aWNDb250ZXh0ICYmIHN0YXRpY0NvbnRleHQuZGF0YSkge1xuICAgICAgICBpbml0aWFsU2VydmVyRGF0YSA9IHN0YXRpY0NvbnRleHQuZGF0YVxuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgc2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGZpbHRlckNyaXRlcmlhLFxuICAgICAgICBMT0FERURfU0VBUkNIX0NSSVRFUklBX0xBQixcbiAgICAgICAgbG9jYXRpb25UeXBlLFxuICAgICAgICBmZXRjaE5ld1Jlc3VsdHMsXG4gICAgICAgIGNvcnBvcmF0ZUNvdXBvbixcbiAgICAgICAgcGFnZSxcbiAgICAgICAgc2VhcmNoX2lkX2RhdGEsXG4gICAgICAgIG5leHRTZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgY3VycmVudFNlYXJjaGVkQ3JpdGVyaWFzLFxuICAgICAgICBuZXh0RmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIGNvbXBhcmVfcGFja2FnZXMsXG4gICAgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9MQUJTXG5cbiAgICBjb25zdCB7XG4gICAgICAgIG9mZmVyTGlzdFxuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICBjb25zdCBMQUJTID0gc3RhdGUuTEFCX1NFQVJDSF9EQVRBXG4gICAgY29uc3QgeyBzaG93NDA0LCBsYWJMaXN0LCBMT0FERURfTEFCU19TRUFSQ0gsIGNvdW50LCBTRVRfRlJPTV9TRVJWRVIsIGN1cnJfcGFnZSwgc2VvRGF0YSwgdGVzdF9kYXRhIH0gPSBzdGF0ZS5MQUJfU0VBUkNIXG4gICAgY29uc3QgeyBtZXJnZVVybFN0YXRlLCBjb21tb25fc2V0dGluZ3MgfSA9IHN0YXRlLlNFQVJDSF9DUklURVJJQV9PUERcblxuICAgIGNvbnN0IHtcbiAgICAgICAgaXNfbG9naW5fdXNlcl9pbnN1cmVkLFxuICAgICAgICBpbnN1cmFuY2Vfc3RhdHVzLFxuICAgICAgICBkZXZpY2VfaW5mb1xuICAgIH0gPSBzdGF0ZS5VU0VSXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RlZExvY2F0aW9uLFxuICAgICAgICBzZWxlY3RlZENyaXRlcmlhcyxcbiAgICAgICAgZmlsdGVyQ3JpdGVyaWEsXG4gICAgICAgIExPQURFRF9TRUFSQ0hfQ1JJVEVSSUFfTEFCLFxuICAgICAgICBMQUJTLFxuICAgICAgICBsYWJMaXN0LCBMT0FERURfTEFCU19TRUFSQ0gsXG4gICAgICAgIGNvdW50LFxuICAgICAgICBTRVRfRlJPTV9TRVJWRVIsXG4gICAgICAgIGluaXRpYWxTZXJ2ZXJEYXRhLFxuICAgICAgICBsb2NhdGlvblR5cGUsXG4gICAgICAgIGZldGNoTmV3UmVzdWx0cyxcbiAgICAgICAgY29ycG9yYXRlQ291cG9uLFxuICAgICAgICBwYWdlLFxuICAgICAgICBjdXJyX3BhZ2UsXG4gICAgICAgIHNlYXJjaF9pZF9kYXRhLFxuICAgICAgICBuZXh0U2VsZWN0ZWRDcml0ZXJpYXMsXG4gICAgICAgIGN1cnJlbnRTZWFyY2hlZENyaXRlcmlhcyxcbiAgICAgICAgbmV4dEZpbHRlckNyaXRlcmlhLFxuICAgICAgICBzZW9EYXRhLFxuICAgICAgICBtZXJnZVVybFN0YXRlLFxuICAgICAgICB0ZXN0X2RhdGEsXG4gICAgICAgIHNob3c0MDQsXG4gICAgICAgIG9mZmVyTGlzdCxcbiAgICAgICAgaXNfbG9naW5fdXNlcl9pbnN1cmVkLFxuICAgICAgICBjb21wYXJlX3BhY2thZ2VzLFxuICAgICAgICBpbnN1cmFuY2Vfc3RhdHVzLFxuICAgICAgICBkZXZpY2VfaW5mbyxcbiAgICAgICAgY29tbW9uX3NldHRpbmdzXG4gICAgfVxuXG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybFNob3J0bmVyOiAodXJsLCBjYikgPT4gZGlzcGF0Y2godXJsU2hvcnRuZXIodXJsLCBjYikpLFxuICAgICAgICBnZXRUZXN0Q2F0ZWdvcnlMaXN0OiAoc3RhdGUsIHBhZ2UsIGZyb21fc2VydmVyLCBzZWFyY2hCeVVybCwgY2IpID0+IGRpc3BhdGNoKGdldFRlc3RDYXRlZ29yeUxpc3Qoc3RhdGUsIHBhZ2UsIGZyb21fc2VydmVyLCBzZWFyY2hCeVVybCwgY2IpKSxcbiAgICAgICAgdG9nZ2xlRGlhZ25vc2lzQ3JpdGVyaWE6ICh0eXBlLCBjcml0ZXJpYSwgZm9yY2VBZGQpID0+IGRpc3BhdGNoKHRvZ2dsZURpYWdub3Npc0NyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCkpLFxuICAgICAgICBnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHM6IChzZWFyY2hTdHJpbmcsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChnZXREaWFnbm9zaXNDcml0ZXJpYVJlc3VsdHMoc2VhcmNoU3RyaW5nLCBjYWxsYmFjaykpLFxuICAgICAgICBjbGVhckV4dHJhVGVzdHM6ICgpID0+IGRpc3BhdGNoKGNsZWFyRXh0cmFUZXN0cygpKSxcbiAgICAgICAgbWVyZ2VMQUJTdGF0ZTogKHN0YXRlLCBmZXRjaE5ld1Jlc3VsdHMpID0+IGRpc3BhdGNoKG1lcmdlTEFCU3RhdGUoc3RhdGUsIGZldGNoTmV3UmVzdWx0cykpLFxuICAgICAgICBnZXRGb290ZXJEYXRhOiAodXJsKSA9PiBkaXNwYXRjaChnZXRGb290ZXJEYXRhKHVybCkpLFxuICAgICAgICBzZXRMYWJTZWFyY2hJZDogKHNlYXJjaElkLCBmaWx0ZXJzLCBzZXREZWZhdWx0KSA9PiBkaXNwYXRjaChzZXRMYWJTZWFyY2hJZChzZWFyY2hJZCwgZmlsdGVycywgc2V0RGVmYXVsdCkpLFxuICAgICAgICBnZXRMYWJTZWFyY2hJZFJlc3VsdHM6IChzZWFyY2hJZCwgc2VhcmNoUmVzdWx0cykgPT4gZGlzcGF0Y2goZ2V0TGFiU2VhcmNoSWRSZXN1bHRzKHNlYXJjaElkLCBzZWFyY2hSZXN1bHRzKSksXG4gICAgICAgIHNlbGVjdFNlYXJjaFR5cGU6ICh0eXBlKSA9PiBkaXNwYXRjaChzZWxlY3RTZWFyY2hUeXBlKHR5cGUpKSxcbiAgICAgICAgdG9nZ2xlNDA0OiAoc3RhdHVzKSA9PiBkaXNwYXRjaCh0b2dnbGU0MDQoc3RhdHVzKSksXG4gICAgICAgIHNlbGVjdExhYlRpbWVTTG90OiAoc2xvdCwgcmVzY2hlZHVsZSkgPT4gZGlzcGF0Y2goc2VsZWN0TGFiVGltZVNMb3Qoc2xvdCwgcmVzY2hlZHVsZSkpLFxuICAgICAgICBnZXRPZmZlckxpc3Q6IChsYXQsbG9uZykgPT4gZGlzcGF0Y2goZ2V0T2ZmZXJMaXN0KGxhdCxsb25nKSksXG4gICAgICAgIHRvZ2dsZU9QRENyaXRlcmlhOiAodHlwZSwgY3JpdGVyaWEsIGZvcmNlQWRkLCBmaWx0ZXIpID0+IGRpc3BhdGNoKHRvZ2dsZU9QRENyaXRlcmlhKHR5cGUsIGNyaXRlcmlhLCBmb3JjZUFkZCwgZmlsdGVyKSksXG4gICAgICAgIHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZTogKHR5cGUpID0+IGRpc3BhdGNoKHNlbGVjdExhYkFwcG9pbnRtZW50VHlwZSh0eXBlKSksXG4gICAgICAgIHJlc2V0UGtnQ29tcGFyZTooKSA9PiBkaXNwYXRjaChyZXNldFBrZ0NvbXBhcmUoKSksXG4gICAgICAgIGxvYWRPUERJbnN1cmFuY2U6IChjaXR5KSA9PiBkaXNwYXRjaChsb2FkT1BESW5zdXJhbmNlKGNpdHkpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoY2F0ZWdvcnlUZXN0UmVzdWx0cyk7XG4iXSwic291cmNlUm9vdCI6IiJ9